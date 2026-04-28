(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function $x(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $h={exports:{}},oc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function Bv(){if(ny)return oc;ny=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return oc.Fragment=n,oc.jsx=i,oc.jsxs=i,oc}var sy;function Lv(){return sy||(sy=1,$h.exports=Bv()),$h.exports}var l=Lv(),Ih={exports:{}},ic={},Ph={exports:{}},Hh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function Ov(){return oy||(oy=1,(function(t){function n(P,ie){var F=P.length;P.push(ie);e:for(;0<F;){var _e=F-1>>>1,Te=P[_e];if(0<c(Te,ie))P[_e]=ie,P[F]=Te,F=_e;else break e}}function i(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var ie=P[0],F=P.pop();if(F!==ie){P[0]=F;e:for(var _e=0,Te=P.length,I=Te>>>1;_e<I;){var me=2*(_e+1)-1,se=P[me],he=me+1,be=P[he];if(0>c(se,F))he<Te&&0>c(be,se)?(P[_e]=be,P[he]=F,_e=he):(P[_e]=se,P[me]=F,_e=me);else if(he<Te&&0>c(be,F))P[_e]=be,P[he]=F,_e=he;else break e}}return ie}function c(P,ie){var F=P.sortIndex-ie.sortIndex;return F!==0?F:P.id-ie.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],y=[],g=1,x=null,b=3,S=!1,k=!1,j=!1,E=!1,T=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function R(P){for(var ie=i(y);ie!==null;){if(ie.callback===null)a(y);else if(ie.startTime<=P)a(y),ie.sortIndex=ie.expirationTime,n(p,ie);else break;ie=i(y)}}function q(P){if(j=!1,R(P),!k)if(i(p)!==null)k=!0,Y||(Y=!0,Ae());else{var ie=i(y);ie!==null&&pe(q,ie.startTime-P)}}var Y=!1,K=-1,V=5,ee=-1;function ae(){return E?!0:!(t.unstable_now()-ee<V)}function re(){if(E=!1,Y){var P=t.unstable_now();ee=P;var ie=!0;try{e:{k=!1,j&&(j=!1,z(K),K=-1),S=!0;var F=b;try{t:{for(R(P),x=i(p);x!==null&&!(x.expirationTime>P&&ae());){var _e=x.callback;if(typeof _e=="function"){x.callback=null,b=x.priorityLevel;var Te=_e(x.expirationTime<=P);if(P=t.unstable_now(),typeof Te=="function"){x.callback=Te,R(P),ie=!0;break t}x===i(p)&&a(p),R(P)}else a(p);x=i(p)}if(x!==null)ie=!0;else{var I=i(y);I!==null&&pe(q,I.startTime-P),ie=!1}}break e}finally{x=null,b=F,S=!1}ie=void 0}}finally{ie?Ae():Y=!1}}}var Ae;if(typeof O=="function")Ae=function(){O(re)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,ne=We.port2;We.port1.onmessage=re,Ae=function(){ne.postMessage(null)}}else Ae=function(){T(re,0)};function pe(P,ie){K=T(function(){P(t.unstable_now())},ie)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(P){switch(b){case 1:case 2:case 3:var ie=3;break;default:ie=b}var F=b;b=ie;try{return P()}finally{b=F}},t.unstable_requestPaint=function(){E=!0},t.unstable_runWithPriority=function(P,ie){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var F=b;b=P;try{return ie()}finally{b=F}},t.unstable_scheduleCallback=function(P,ie,F){var _e=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?_e+F:_e):F=_e,P){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=F+Te,P={id:g++,callback:ie,priorityLevel:P,startTime:F,expirationTime:Te,sortIndex:-1},F>_e?(P.sortIndex=F,n(y,P),i(p)===null&&P===i(y)&&(j?(z(K),K=-1):j=!0,pe(q,F-_e))):(P.sortIndex=Te,n(p,P),k||S||(k=!0,Y||(Y=!0,Ae()))),P},t.unstable_shouldYield=ae,t.unstable_wrapCallback=function(P){var ie=b;return function(){var F=b;b=ie;try{return P.apply(this,arguments)}finally{b=F}}}})(Hh)),Hh}var iy;function zv(){return iy||(iy=1,Ph.exports=Ov()),Ph.exports}var Uh={exports:{}},Zt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function $v(){if(ay)return Zt;ay=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=b&&I[b]||I["@@iterator"],typeof I=="function"?I:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,E={};function T(I,me,se){this.props=I,this.context=me,this.refs=E,this.updater=se||k}T.prototype.isReactComponent={},T.prototype.setState=function(I,me){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,me,"setState")},T.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function z(){}z.prototype=T.prototype;function O(I,me,se){this.props=I,this.context=me,this.refs=E,this.updater=se||k}var R=O.prototype=new z;R.constructor=O,j(R,T.prototype),R.isPureReactComponent=!0;var q=Array.isArray;function Y(){}var K={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function ee(I,me,se){var he=se.ref;return{$$typeof:t,type:I,key:me,ref:he!==void 0?he:null,props:se}}function ae(I,me){return ee(I.type,me,I.props)}function re(I){return typeof I=="object"&&I!==null&&I.$$typeof===t}function Ae(I){var me={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(se){return me[se]})}var We=/\/+/g;function ne(I,me){return typeof I=="object"&&I!==null&&I.key!=null?Ae(""+I.key):me.toString(36)}function pe(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(Y,Y):(I.status="pending",I.then(function(me){I.status==="pending"&&(I.status="fulfilled",I.value=me)},function(me){I.status==="pending"&&(I.status="rejected",I.reason=me)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function P(I,me,se,he,be){var Re=typeof I;(Re==="undefined"||Re==="boolean")&&(I=null);var $e=!1;if(I===null)$e=!0;else switch(Re){case"bigint":case"string":case"number":$e=!0;break;case"object":switch(I.$$typeof){case t:case n:$e=!0;break;case g:return $e=I._init,P($e(I._payload),me,se,he,be)}}if($e)return be=be(I),$e=he===""?"."+ne(I,0):he,q(be)?(se="",$e!=null&&(se=$e.replace(We,"$&/")+"/"),P(be,me,se,"",function(Lt){return Lt})):be!=null&&(re(be)&&(be=ae(be,se+(be.key==null||I&&I.key===be.key?"":(""+be.key).replace(We,"$&/")+"/")+$e)),me.push(be)),1;$e=0;var Ue=he===""?".":he+":";if(q(I))for(var Qe=0;Qe<I.length;Qe++)he=I[Qe],Re=Ue+ne(he,Qe),$e+=P(he,me,se,Re,be);else if(Qe=S(I),typeof Qe=="function")for(I=Qe.call(I),Qe=0;!(he=I.next()).done;)he=he.value,Re=Ue+ne(he,Qe++),$e+=P(he,me,se,Re,be);else if(Re==="object"){if(typeof I.then=="function")return P(pe(I),me,se,he,be);throw me=String(I),Error("Objects are not valid as a React child (found: "+(me==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":me)+"). If you meant to render a collection of children, use an array instead.")}return $e}function ie(I,me,se){if(I==null)return I;var he=[],be=0;return P(I,he,"","",function(Re){return me.call(se,Re,be++)}),he}function F(I){if(I._status===-1){var me=I._result;me=me(),me.then(function(se){(I._status===0||I._status===-1)&&(I._status=1,I._result=se)},function(se){(I._status===0||I._status===-1)&&(I._status=2,I._result=se)}),I._status===-1&&(I._status=0,I._result=me)}if(I._status===1)return I._result.default;throw I._result}var _e=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var me=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(me))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Te={map:ie,forEach:function(I,me,se){ie(I,function(){me.apply(this,arguments)},se)},count:function(I){var me=0;return ie(I,function(){me++}),me},toArray:function(I){return ie(I,function(me){return me})||[]},only:function(I){if(!re(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return Zt.Activity=x,Zt.Children=Te,Zt.Component=T,Zt.Fragment=i,Zt.Profiler=c,Zt.PureComponent=O,Zt.StrictMode=a,Zt.Suspense=p,Zt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,Zt.__COMPILER_RUNTIME={__proto__:null,c:function(I){return K.H.useMemoCache(I)}},Zt.cache=function(I){return function(){return I.apply(null,arguments)}},Zt.cacheSignal=function(){return null},Zt.cloneElement=function(I,me,se){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var he=j({},I.props),be=I.key;if(me!=null)for(Re in me.key!==void 0&&(be=""+me.key),me)!V.call(me,Re)||Re==="key"||Re==="__self"||Re==="__source"||Re==="ref"&&me.ref===void 0||(he[Re]=me[Re]);var Re=arguments.length-2;if(Re===1)he.children=se;else if(1<Re){for(var $e=Array(Re),Ue=0;Ue<Re;Ue++)$e[Ue]=arguments[Ue+2];he.children=$e}return ee(I.type,be,he)},Zt.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:u,_context:I},I},Zt.createElement=function(I,me,se){var he,be={},Re=null;if(me!=null)for(he in me.key!==void 0&&(Re=""+me.key),me)V.call(me,he)&&he!=="key"&&he!=="__self"&&he!=="__source"&&(be[he]=me[he]);var $e=arguments.length-2;if($e===1)be.children=se;else if(1<$e){for(var Ue=Array($e),Qe=0;Qe<$e;Qe++)Ue[Qe]=arguments[Qe+2];be.children=Ue}if(I&&I.defaultProps)for(he in $e=I.defaultProps,$e)be[he]===void 0&&(be[he]=$e[he]);return ee(I,Re,be)},Zt.createRef=function(){return{current:null}},Zt.forwardRef=function(I){return{$$typeof:h,render:I}},Zt.isValidElement=re,Zt.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:F}},Zt.memo=function(I,me){return{$$typeof:y,type:I,compare:me===void 0?null:me}},Zt.startTransition=function(I){var me=K.T,se={};K.T=se;try{var he=I(),be=K.S;be!==null&&be(se,he),typeof he=="object"&&he!==null&&typeof he.then=="function"&&he.then(Y,_e)}catch(Re){_e(Re)}finally{me!==null&&se.types!==null&&(me.types=se.types),K.T=me}},Zt.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},Zt.use=function(I){return K.H.use(I)},Zt.useActionState=function(I,me,se){return K.H.useActionState(I,me,se)},Zt.useCallback=function(I,me){return K.H.useCallback(I,me)},Zt.useContext=function(I){return K.H.useContext(I)},Zt.useDebugValue=function(){},Zt.useDeferredValue=function(I,me){return K.H.useDeferredValue(I,me)},Zt.useEffect=function(I,me){return K.H.useEffect(I,me)},Zt.useEffectEvent=function(I){return K.H.useEffectEvent(I)},Zt.useId=function(){return K.H.useId()},Zt.useImperativeHandle=function(I,me,se){return K.H.useImperativeHandle(I,me,se)},Zt.useInsertionEffect=function(I,me){return K.H.useInsertionEffect(I,me)},Zt.useLayoutEffect=function(I,me){return K.H.useLayoutEffect(I,me)},Zt.useMemo=function(I,me){return K.H.useMemo(I,me)},Zt.useOptimistic=function(I,me){return K.H.useOptimistic(I,me)},Zt.useReducer=function(I,me,se){return K.H.useReducer(I,me,se)},Zt.useRef=function(I){return K.H.useRef(I)},Zt.useState=function(I){return K.H.useState(I)},Zt.useSyncExternalStore=function(I,me,se){return K.H.useSyncExternalStore(I,me,se)},Zt.useTransition=function(){return K.H.useTransition()},Zt.version="19.2.4",Zt}var ry;function dp(){return ry||(ry=1,Uh.exports=$v()),Uh.exports}var Vh={exports:{}},Uo={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function Iv(){if(ly)return Uo;ly=1;var t=dp();function n(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)y+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,y,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:y,implementation:g}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Uo.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Uo.createPortal=function(p,y){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(n(299));return u(p,y,null,g)},Uo.flushSync=function(p){var y=d.T,g=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=y,a.p=g,a.d.f()}},Uo.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(p,y))},Uo.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Uo.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin),b=typeof y.integrity=="string"?y.integrity:void 0,S=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;g==="style"?a.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:S}):g==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:S,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Uo.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var g=h(y.as,y.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(p)},Uo.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin);a.d.L(p,g,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Uo.preloadModule=function(p,y){if(typeof p=="string")if(y){var g=h(y.as,y.crossOrigin);a.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(p)},Uo.requestFormReset=function(p){a.d.r(p)},Uo.unstable_batchedUpdates=function(p,y){return p(y)},Uo.useFormState=function(p,y,g){return d.H.useFormState(p,y,g)},Uo.useFormStatus=function(){return d.H.useHostTransitionStatus()},Uo.version="19.2.4",Uo}var cy;function Ix(){if(cy)return Vh.exports;cy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Vh.exports=Iv(),Vh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uy;function Pv(){if(uy)return ic;uy=1;var t=zv(),n=dp(),i=Ix();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function y(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var v=!1,A=f.child;A;){if(A===o){v=!0,o=f,r=m;break}if(A===r){v=!0,r=f,o=m;break}A=A.sibling}if(!v){for(A=m.child;A;){if(A===o){v=!0,o=m,r=f;break}if(A===r){v=!0,r=m,o=f;break}A=A.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function g(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=g(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),O=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),ee=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function Ae(e){return e===null||typeof e!="object"?null:(e=re&&e[re]||e["@@iterator"],typeof e=="function"?e:null)}var We=Symbol.for("react.client.reference");function ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===We?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case T:return"Profiler";case E:return"StrictMode";case q:return"Suspense";case Y:return"SuspenseList";case ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case O:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case R:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return s=e.displayName||null,s!==null?s:ne(e.type)||"Memo";case V:s=e._payload,e=e._init;try{return ne(e(s))}catch{}}return null}var pe=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},_e=[],Te=-1;function I(e){return{current:e}}function me(e){0>Te||(e.current=_e[Te],_e[Te]=null,Te--)}function se(e,s){Te++,_e[Te]=e.current,e.current=s}var he=I(null),be=I(null),Re=I(null),$e=I(null);function Ue(e,s){switch(se(Re,s),se(be,e),se(he,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?k0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=k0(s),e=j0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}me(he),se(he,e)}function Qe(){me(he),me(be),me(Re)}function Lt(e){e.memoizedState!==null&&se($e,e);var s=he.current,o=j0(s,e.type);s!==o&&(se(be,e),se(he,o))}function Dt(e){be.current===e&&(me(he),me(be)),$e.current===e&&(me($e),ec._currentValue=F)}var Fe,rt;function Tt(e){if(Fe===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Fe=s&&s[1]||"",rt=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fe+e+rt}var nn=!1;function Xt(e,s){if(!e||nn)return"";nn=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var Ie=function(){throw Error()};if(Object.defineProperty(Ie.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ie,[])}catch(Ce){var ve=Ce}Reflect.construct(e,[],Ie)}else{try{Ie.call()}catch(Ce){ve=Ce}e.call(Ie.prototype)}}else{try{throw Error()}catch(Ce){ve=Ce}(Ie=e())&&typeof Ie.catch=="function"&&Ie.catch(function(){})}}catch(Ce){if(Ce&&ve&&typeof Ce.stack=="string")return[Ce.stack,ve.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),v=m[0],A=m[1];if(v&&A){var Q=v.split(`
`),ye=A.split(`
`);for(f=r=0;r<Q.length&&!Q[r].includes("DetermineComponentFrameRoot");)r++;for(;f<ye.length&&!ye[f].includes("DetermineComponentFrameRoot");)f++;if(r===Q.length||f===ye.length)for(r=Q.length-1,f=ye.length-1;1<=r&&0<=f&&Q[r]!==ye[f];)f--;for(;1<=r&&0<=f;r--,f--)if(Q[r]!==ye[f]){if(r!==1||f!==1)do if(r--,f--,0>f||Q[r]!==ye[f]){var De=`
`+Q[r].replace(" at new "," at ");return e.displayName&&De.includes("<anonymous>")&&(De=De.replace("<anonymous>",e.displayName)),De}while(1<=r&&0<=f);break}}}finally{nn=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?Tt(o):""}function Pe(e,s){switch(e.tag){case 26:case 27:case 5:return Tt(e.type);case 16:return Tt("Lazy");case 13:return e.child!==s&&s!==null?Tt("Suspense Fallback"):Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 15:return Xt(e.type,!1);case 11:return Xt(e.type.render,!1);case 1:return Xt(e.type,!0);case 31:return Tt("Activity");default:return""}}function ce(e){try{var s="",o=null;do s+=Pe(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var nt=Object.prototype.hasOwnProperty,st=t.unstable_scheduleCallback,et=t.unstable_cancelCallback,Ze=t.unstable_shouldYield,ft=t.unstable_requestPaint,dt=t.unstable_now,wt=t.unstable_getCurrentPriorityLevel,St=t.unstable_ImmediatePriority,Ut=t.unstable_UserBlockingPriority,it=t.unstable_NormalPriority,H=t.unstable_LowPriority,te=t.unstable_IdlePriority,we=t.log,je=t.unstable_setDisableYieldValue,ue=null,Ee=null;function le(e){if(typeof we=="function"&&je(e),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(ue,e)}catch{}}var Se=Math.clz32?Math.clz32:lt,Je=Math.log,ht=Math.LN2;function lt(e){return e>>>=0,e===0?32:31-(Je(e)/ht|0)|0}var He=256,gt=262144,Ct=4194304;function It(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ot(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~m,r!==0?f=It(r):(v&=A,v!==0?f=It(v):o||(o=A&~e,o!==0&&(f=It(o))))):(A=r&~m,A!==0?f=It(A):v!==0?f=It(v):o||(o=r&~e,o!==0&&(f=It(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function kt(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function Bt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yt(){var e=Ct;return Ct<<=1,(Ct&62914560)===0&&(Ct=4194304),e}function mt(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function Ge(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xt(e,s,o,r,f,m){var v=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var A=e.entanglements,Q=e.expirationTimes,ye=e.hiddenUpdates;for(o=v&~o;0<o;){var De=31-Se(o),Ie=1<<De;A[De]=0,Q[De]=-1;var ve=ye[De];if(ve!==null)for(ye[De]=null,De=0;De<ve.length;De++){var Ce=ve[De];Ce!==null&&(Ce.lane&=-536870913)}o&=~Ie}r!==0&&Kt(e,r,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function Kt(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-Se(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function en(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-Se(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function sn(e,s){var o=s&-s;return o=(o&42)!==0?1:qn(o),(o&(e.suspendedLanes|s))!==0?0:o}function qn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Mn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Sn(){var e=ie.p;return e!==0?e:(e=window.event,e===void 0?32:q0(e.type))}function vn(e,s){var o=ie.p;try{return ie.p=e,s()}finally{ie.p=o}}var Yn=Math.random().toString(36).slice(2),Gt="__reactFiber$"+Yn,En="__reactProps$"+Yn,at="__reactContainer$"+Yn,Tn="__reactEvents$"+Yn,Yt="__reactListeners$"+Yn,Kn="__reactHandles$"+Yn,os="__reactResources$"+Yn,cs="__reactMarker$"+Yn;function us(e){delete e[Gt],delete e[En],delete e[Tn],delete e[Yt],delete e[Kn]}function Vs(e){var s=e[Gt];if(s)return s;for(var o=e.parentNode;o;){if(s=o[at]||o[Gt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=R0(e);e!==null;){if(o=e[Gt])return o;e=R0(e)}return s}e=o,o=e.parentNode}return null}function no(e){if(e=e[Gt]||e[at]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function so(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function ds(e){var s=e[os];return s||(s=e[os]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Un(e){e[cs]=!0}var Ls=new Set,jo={};function kn(e,s){Rn(e,s),Rn(e+"Capture",s)}function Rn(e,s){for(jo[e]=s,e=0;e<s.length;e++)Ls.add(s[e])}var oo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ms={},ks={};function ps(e){return nt.call(ks,e)?!0:nt.call(ms,e)?!1:oo.test(e)?ks[e]=!0:(ms[e]=!0,!1)}function io(e,s,o){if(ps(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function fn(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function rn(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function ln(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bn(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function vi(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function ti(e){if(!e._valueTracker){var s=Bn(e)?"checked":"value";e._valueTracker=vi(e,s,""+e[s])}}function ni(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=Bn(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function ao(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ui=/[\n"\\]/g;function vs(e){return e.replace(ui,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function ro(e,s,o,r,f,m,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+ln(s)):e.value!==""+ln(s)&&(e.value=""+ln(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?xo(e,v,ln(s)):o!=null?xo(e,v,ln(o)):r!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ln(A):e.removeAttribute("name")}function Ln(e,s,o,r,f,m,v,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){ti(e);return}o=o!=null?""+ln(o):"",s=s!=null?""+ln(s):o,A||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),ti(e)}function xo(e,s,o){s==="number"&&ao(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function _s(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+ln(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function Qn(e,s,o){if(s!=null&&(s=""+ln(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+ln(o):""}function Ys(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(pe(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=ln(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),ti(e)}function Mo(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var Yo=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vt(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||Yo.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function lo(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&Vt(e,f,r)}else for(var m in s)s.hasOwnProperty(m)&&Vt(e,m,s[m])}function Ts(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wo=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Eo(e){return wi.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Os(){}var Fo=null;function Ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jn=null,To=null;function bo(e){var s=no(e);if(s&&(e=s.stateNode)){var o=e[En]||null;e:switch(e=s.stateNode,s.type){case"input":if(ro(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+vs(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[En]||null;if(!f)throw Error(a(90));ro(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&ni(r)}break e;case"textarea":Qn(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&_s(e,!!o.multiple,s,!1)}}}var ws=!1;function vo(e,s,o){if(ws)return e(s,o);ws=!0;try{var r=e(s);return r}finally{if(ws=!1,(jn!==null||To!==null)&&(vu(),jn&&(s=jn,e=To,To=jn=null,bo(s),e)))for(s=0;s<e.length;s++)bo(e[s])}}function cn(e,s){var o=e.stateNode;if(o===null)return null;var r=o[En]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Fs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zs=!1;if(Fs)try{var co={};Object.defineProperty(co,"passive",{get:function(){zs=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{zs=!1}var js=null,zo=null,Xs=null;function Ao(){if(Xs)return Xs;var e,s=zo,o=s.length,r,f="value"in js?js.value:js.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var v=o-e;for(r=1;r<=v&&s[o-r]===f[m-r];r++);return Xs=f.slice(e,1<r?1-r:void 0)}function wo(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function On(){return!0}function An(){return!1}function Vn(e){function s(o,r,f,m,v){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(o=e[A],this[A]=o?o(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?On:An,this.isPropagationStopped=An,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=On)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=On)},persist:function(){},isPersistent:On}),s}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uo=Vn(Wn),As=x({},Wn,{view:0,detail:0}),Ms=Vn(As),Xo,fo,gs,Es=x({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gs&&(gs&&e.type==="mousemove"?(Xo=e.screenX-gs.screenX,fo=e.screenY-gs.screenY):fo=Xo=0,gs=e),Xo)},movementY:function(e){return"movementY"in e?e.movementY:fo}}),$o=Vn(Es),So=x({},Es,{dataTransfer:0}),ho=Vn(So),Io=x({},As,{relatedTarget:0}),Po=Vn(Io),Si=x({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),ta=Vn(Si),Ii=x({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pi=Vn(Ii),si=x({},Wn,{data:0}),Nt=Vn(si),Ci={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ki={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hi={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function di(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=Hi[e])?!!s[e]:!1}function Co(){return di}var Go=x({},As,{key:function(e){if(e.key){var s=Ci[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ki[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Co,charCode:function(e){return e.type==="keypress"?wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fi=Vn(Go),M=x({},Es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),U=Vn(M),de=x({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Co}),ke=Vn(de),Ye=x({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xe=Vn(Ye),Pt=x({},Es,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$t=Vn(Pt),qt=x({},Wn,{newState:0,oldState:0}),Qt=Vn(qt),on=[9,13,27,32],gn=Fs&&"CompositionEvent"in window,mn=null;Fs&&"documentMode"in document&&(mn=document.documentMode);var $s=Fs&&"TextEvent"in window&&!mn,Wt=Fs&&(!gn||mn&&8<mn&&11>=mn),is=" ",Ss=!1;function ys(e,s){switch(e){case"keyup":return on.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gs=!1;function Is(e,s){switch(e){case"compositionend":return mo(s);case"keypress":return s.which!==32?null:(Ss=!0,is);case"textInput":return e=s.data,e===is&&Ss?null:e;default:return null}}function qs(e,s){if(Gs)return e==="compositionend"||!gn&&ys(e,s)?(e=Ao(),Xs=zo=js=null,Gs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Wt&&s.locale!=="ko"?null:s.data;default:return null}}var po={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function B(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!po[e.type]:s==="textarea"}function X(e,s,o,r){jn?To?To.push(r):To=[r]:jn=r,s=Eu(s,"onChange"),0<s.length&&(o=new uo("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var G=null,D=null;function Z(e){x0(e,0)}function w(e){var s=so(e);if(ni(s))return e}function C(e,s){if(e==="change")return s}var N=!1;if(Fs){var L;if(Fs){var W="oninput"in document;if(!W){var J=document.createElement("div");J.setAttribute("oninput","return;"),W=typeof J.oninput=="function"}L=W}else L=!1;N=L&&(!document.documentMode||9<document.documentMode)}function Ne(){G&&(G.detachEvent("onpropertychange",xe),D=G=null)}function xe(e){if(e.propertyName==="value"&&w(D)){var s=[];X(s,D,e,Ws(e)),vo(Z,s)}}function Le(e,s,o){e==="focusin"?(Ne(),G=s,D=o,G.attachEvent("onpropertychange",xe)):e==="focusout"&&Ne()}function qe(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return w(D)}function tt(e,s){if(e==="click")return w(s)}function pt(e,s){if(e==="input"||e==="change")return w(s)}function _t(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var ut=typeof Object.is=="function"?Object.is:_t;function ct(e,s){if(ut(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!nt.call(s,f)||!ut(e[f],s[f]))return!1}return!0}function Cn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zn(e,s){var o=Cn(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Cn(o)}}function $n(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?$n(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function un(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=ao(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=ao(e.document)}return s}function Ot(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var vt=Fs&&"documentMode"in document&&11>=document.documentMode,Rt=null,In=null,yn=null,_o=!1;function Ho(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;_o||Rt==null||Rt!==ao(r)||(r=Rt,"selectionStart"in r&&Ot(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yn&&ct(yn,r)||(yn=r,r=Eu(In,"onSelect"),0<r.length&&(s=new uo("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=Rt)))}function as(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var ji={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},Ui={},Vi={};Fs&&(Vi=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);function Zn(e){if(Ui[e])return Ui[e];if(!ji[e])return e;var s=ji[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in Vi)return Ui[e]=s[o];return e}var Yi=Zn("animationend"),na=Zn("animationiteration"),Pc=Zn("animationstart"),Xd=Zn("transitionrun"),Gd=Zn("transitionstart"),qd=Zn("transitioncancel"),Zp=Zn("transitionend"),Jp=new Map,Kd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kd.push("scrollEnd");function Wi(e,s){Jp.set(e,s),kn(s,[e])}var Hc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Mi=[],Br=0,Qd=0;function Uc(){for(var e=Br,s=Qd=Br=0;s<e;){var o=Mi[s];Mi[s++]=null;var r=Mi[s];Mi[s++]=null;var f=Mi[s];Mi[s++]=null;var m=Mi[s];if(Mi[s++]=null,r!==null&&f!==null){var v=r.pending;v===null?f.next=f:(f.next=v.next,v.next=f),r.pending=f}m!==0&&e_(o,f,m)}}function Vc(e,s,o,r){Mi[Br++]=e,Mi[Br++]=s,Mi[Br++]=o,Mi[Br++]=r,Qd|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Zd(e,s,o,r){return Vc(e,s,o,r),Yc(e)}function cr(e,s){return Vc(e,null,null,s),Yc(e)}function e_(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-Se(o),e=m.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Yc(e){if(50<Xl)throw Xl=0,lh=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var Lr={};function g2(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,s,o,r){return new g2(e,s,o,r)}function Jd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ha(e,s){var o=e.alternate;return o===null?(o=hi(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function t_(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Wc(e,s,o,r,f,m){var v=0;if(r=e,typeof e=="function")Jd(e)&&(v=1);else if(typeof e=="string")v=wv(e,o,he.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ee:return e=hi(31,o,s,f),e.elementType=ee,e.lanes=m,e;case j:return ur(o.children,f,m,s);case E:v=8,f|=24;break;case T:return e=hi(12,o,s,f|2),e.elementType=T,e.lanes=m,e;case q:return e=hi(13,o,s,f),e.elementType=q,e.lanes=m,e;case Y:return e=hi(19,o,s,f),e.elementType=Y,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:v=10;break e;case z:v=9;break e;case R:v=11;break e;case K:v=14;break e;case V:v=16,r=null;break e}v=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=hi(v,o,s,f),s.elementType=e,s.type=r,s.lanes=m,s}function ur(e,s,o,r){return e=hi(7,e,r,s),e.lanes=o,e}function ef(e,s,o){return e=hi(6,e,null,s),e.lanes=o,e}function n_(e){var s=hi(18,null,null,0);return s.stateNode=e,s}function tf(e,s,o){return s=hi(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var s_=new WeakMap;function Ei(e,s){if(typeof e=="object"&&e!==null){var o=s_.get(e);return o!==void 0?o:(s={value:e,source:s,stack:ce(s)},s_.set(e,s),s)}return{value:e,source:s,stack:ce(s)}}var Or=[],zr=0,Fc=null,jl=0,Ti=[],Ai=0,Da=null,sa=1,oa="";function ma(e,s){Or[zr++]=jl,Or[zr++]=Fc,Fc=e,jl=s}function o_(e,s,o){Ti[Ai++]=sa,Ti[Ai++]=oa,Ti[Ai++]=Da,Da=e;var r=sa;e=oa;var f=32-Se(r)-1;r&=~(1<<f),o+=1;var m=32-Se(s)+f;if(30<m){var v=f-f%5;m=(r&(1<<v)-1).toString(32),r>>=v,f-=v,sa=1<<32-Se(s)+f|o<<f|r,oa=m+e}else sa=1<<m|o<<f|r,oa=e}function nf(e){e.return!==null&&(ma(e,1),o_(e,1,0))}function sf(e){for(;e===Fc;)Fc=Or[--zr],Or[zr]=null,jl=Or[--zr],Or[zr]=null;for(;e===Da;)Da=Ti[--Ai],Ti[Ai]=null,oa=Ti[--Ai],Ti[Ai]=null,sa=Ti[--Ai],Ti[Ai]=null}function i_(e,s){Ti[Ai++]=sa,Ti[Ai++]=oa,Ti[Ai++]=Da,sa=s.id,oa=s.overflow,Da=e}var No=null,xs=null,wn=!1,Ra=null,Ni=!1,of=Error(a(519));function Ba(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ml(Ei(s,e)),of}function a_(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[Gt]=e,s[En]=r,o){case"dialog":_n("cancel",s),_n("close",s);break;case"iframe":case"object":case"embed":_n("load",s);break;case"video":case"audio":for(o=0;o<ql.length;o++)_n(ql[o],s);break;case"source":_n("error",s);break;case"img":case"image":case"link":_n("error",s),_n("load",s);break;case"details":_n("toggle",s);break;case"input":_n("invalid",s),Ln(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_n("invalid",s);break;case"textarea":_n("invalid",s),Ys(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||S0(s.textContent,o)?(r.popover!=null&&(_n("beforetoggle",s),_n("toggle",s)),r.onScroll!=null&&_n("scroll",s),r.onScrollEnd!=null&&_n("scrollend",s),r.onClick!=null&&(s.onclick=Os),s=!0):s=!1,s||Ba(e,!0)}function r_(e){for(No=e.return;No;)switch(No.tag){case 5:case 31:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:No=No.return}}function $r(e){if(e!==No)return!1;if(!wn)return r_(e),wn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||Sh(e.type,e.memoizedProps)),o=!o),o&&xs&&Ba(e),r_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));xs=D0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));xs=D0(e)}else s===27?(s=xs,Ga(e.type)?(e=Eh,Eh=null,xs=e):xs=s):xs=No?Ri(e.stateNode.nextSibling):null;return!0}function dr(){xs=No=null,wn=!1}function af(){var e=Ra;return e!==null&&(ri===null?ri=e:ri.push.apply(ri,e),Ra=null),e}function Ml(e){Ra===null?Ra=[e]:Ra.push(e)}var rf=I(null),fr=null,pa=null;function La(e,s,o){se(rf,s._currentValue),s._currentValue=o}function _a(e){e._currentValue=rf.current,me(rf)}function lf(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function cf(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var Q=0;Q<s.length;Q++)if(A.context===s[Q]){m.lanes|=o,A=m.alternate,A!==null&&(A.lanes|=o),lf(m.return,o,e),r||(v=null);break e}m=A.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),lf(v,o,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Ir(e,s,o,r){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var A=f.type;ut(f.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(f===$e.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(ec):e=[ec])}f=f.return}e!==null&&cf(s,e,o,r),s.flags|=262144}function Xc(e){for(e=e.firstContext;e!==null;){if(!ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hr(e){fr=e,pa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Do(e){return l_(fr,e)}function Gc(e,s){return fr===null&&hr(e),l_(e,s)}function l_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},pa===null){if(e===null)throw Error(a(308));pa=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else pa=pa.next=s;return o}var y2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},x2=t.unstable_scheduleCallback,b2=t.unstable_NormalPriority,Ks={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uf(){return{controller:new y2,data:new Map,refCount:0}}function El(e){e.refCount--,e.refCount===0&&x2(b2,function(){e.controller.abort()})}var Tl=null,df=0,Pr=0,Hr=null;function v2(e,s){if(Tl===null){var o=Tl=[];df=0,Pr=mh(),Hr={status:"pending",value:void 0,then:function(r){o.push(r)}}}return df++,s.then(c_,c_),s}function c_(){if(--df===0&&Tl!==null){Hr!==null&&(Hr.status="fulfilled");var e=Tl;Tl=null,Pr=0,Hr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function w2(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var u_=P.S;P.S=function(e,s){Xg=dt(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&v2(e,s),u_!==null&&u_(e,s)};var mr=I(null);function ff(){var e=mr.current;return e!==null?e:rs.pooledCache}function qc(e,s){s===null?se(mr,mr.current):se(mr,s.pool)}function d_(){var e=ff();return e===null?null:{parent:Ks._currentValue,pool:e}}var Ur=Error(a(460)),hf=Error(a(474)),Kc=Error(a(542)),Qc={then:function(){}};function f_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function h_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(Os,Os),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,p_(e),e;default:if(typeof s.status=="string")s.then(Os,Os);else{if(e=rs,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,p_(e),e}throw _r=s,Ur}}function pr(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(_r=o,Ur):o}}var _r=null;function m_(){if(_r===null)throw Error(a(459));var e=_r;return _r=null,e}function p_(e){if(e===Ur||e===Kc)throw Error(a(483))}var Vr=null,Al=0;function Zc(e){var s=Al;return Al+=1,Vr===null&&(Vr=[]),h_(Vr,e,s)}function Nl(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Jc(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function __(e){function s(fe,oe){if(e){var ge=fe.deletions;ge===null?(fe.deletions=[oe],fe.flags|=16):ge.push(oe)}}function o(fe,oe){if(!e)return null;for(;oe!==null;)s(fe,oe),oe=oe.sibling;return null}function r(fe){for(var oe=new Map;fe!==null;)fe.key!==null?oe.set(fe.key,fe):oe.set(fe.index,fe),fe=fe.sibling;return oe}function f(fe,oe){return fe=ha(fe,oe),fe.index=0,fe.sibling=null,fe}function m(fe,oe,ge){return fe.index=ge,e?(ge=fe.alternate,ge!==null?(ge=ge.index,ge<oe?(fe.flags|=67108866,oe):ge):(fe.flags|=67108866,oe)):(fe.flags|=1048576,oe)}function v(fe){return e&&fe.alternate===null&&(fe.flags|=67108866),fe}function A(fe,oe,ge,ze){return oe===null||oe.tag!==6?(oe=ef(ge,fe.mode,ze),oe.return=fe,oe):(oe=f(oe,ge),oe.return=fe,oe)}function Q(fe,oe,ge,ze){var zt=ge.type;return zt===j?De(fe,oe,ge.props.children,ze,ge.key):oe!==null&&(oe.elementType===zt||typeof zt=="object"&&zt!==null&&zt.$$typeof===V&&pr(zt)===oe.type)?(oe=f(oe,ge.props),Nl(oe,ge),oe.return=fe,oe):(oe=Wc(ge.type,ge.key,ge.props,null,fe.mode,ze),Nl(oe,ge),oe.return=fe,oe)}function ye(fe,oe,ge,ze){return oe===null||oe.tag!==4||oe.stateNode.containerInfo!==ge.containerInfo||oe.stateNode.implementation!==ge.implementation?(oe=tf(ge,fe.mode,ze),oe.return=fe,oe):(oe=f(oe,ge.children||[]),oe.return=fe,oe)}function De(fe,oe,ge,ze,zt){return oe===null||oe.tag!==7?(oe=ur(ge,fe.mode,ze,zt),oe.return=fe,oe):(oe=f(oe,ge),oe.return=fe,oe)}function Ie(fe,oe,ge){if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return oe=ef(""+oe,fe.mode,ge),oe.return=fe,oe;if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case S:return ge=Wc(oe.type,oe.key,oe.props,null,fe.mode,ge),Nl(ge,oe),ge.return=fe,ge;case k:return oe=tf(oe,fe.mode,ge),oe.return=fe,oe;case V:return oe=pr(oe),Ie(fe,oe,ge)}if(pe(oe)||Ae(oe))return oe=ur(oe,fe.mode,ge,null),oe.return=fe,oe;if(typeof oe.then=="function")return Ie(fe,Zc(oe),ge);if(oe.$$typeof===O)return Ie(fe,Gc(fe,oe),ge);Jc(fe,oe)}return null}function ve(fe,oe,ge,ze){var zt=oe!==null?oe.key:null;if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return zt!==null?null:A(fe,oe,""+ge,ze);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case S:return ge.key===zt?Q(fe,oe,ge,ze):null;case k:return ge.key===zt?ye(fe,oe,ge,ze):null;case V:return ge=pr(ge),ve(fe,oe,ge,ze)}if(pe(ge)||Ae(ge))return zt!==null?null:De(fe,oe,ge,ze,null);if(typeof ge.then=="function")return ve(fe,oe,Zc(ge),ze);if(ge.$$typeof===O)return ve(fe,oe,Gc(fe,ge),ze);Jc(fe,ge)}return null}function Ce(fe,oe,ge,ze,zt){if(typeof ze=="string"&&ze!==""||typeof ze=="number"||typeof ze=="bigint")return fe=fe.get(ge)||null,A(oe,fe,""+ze,zt);if(typeof ze=="object"&&ze!==null){switch(ze.$$typeof){case S:return fe=fe.get(ze.key===null?ge:ze.key)||null,Q(oe,fe,ze,zt);case k:return fe=fe.get(ze.key===null?ge:ze.key)||null,ye(oe,fe,ze,zt);case V:return ze=pr(ze),Ce(fe,oe,ge,ze,zt)}if(pe(ze)||Ae(ze))return fe=fe.get(ge)||null,De(oe,fe,ze,zt,null);if(typeof ze.then=="function")return Ce(fe,oe,ge,Zc(ze),zt);if(ze.$$typeof===O)return Ce(fe,oe,ge,Gc(oe,ze),zt);Jc(oe,ze)}return null}function Mt(fe,oe,ge,ze){for(var zt=null,Nn=null,At=oe,an=oe=0,bn=null;At!==null&&an<ge.length;an++){At.index>an?(bn=At,At=null):bn=At.sibling;var Dn=ve(fe,At,ge[an],ze);if(Dn===null){At===null&&(At=bn);break}e&&At&&Dn.alternate===null&&s(fe,At),oe=m(Dn,oe,an),Nn===null?zt=Dn:Nn.sibling=Dn,Nn=Dn,At=bn}if(an===ge.length)return o(fe,At),wn&&ma(fe,an),zt;if(At===null){for(;an<ge.length;an++)At=Ie(fe,ge[an],ze),At!==null&&(oe=m(At,oe,an),Nn===null?zt=At:Nn.sibling=At,Nn=At);return wn&&ma(fe,an),zt}for(At=r(At);an<ge.length;an++)bn=Ce(At,fe,an,ge[an],ze),bn!==null&&(e&&bn.alternate!==null&&At.delete(bn.key===null?an:bn.key),oe=m(bn,oe,an),Nn===null?zt=bn:Nn.sibling=bn,Nn=bn);return e&&At.forEach(function(Ja){return s(fe,Ja)}),wn&&ma(fe,an),zt}function Ft(fe,oe,ge,ze){if(ge==null)throw Error(a(151));for(var zt=null,Nn=null,At=oe,an=oe=0,bn=null,Dn=ge.next();At!==null&&!Dn.done;an++,Dn=ge.next()){At.index>an?(bn=At,At=null):bn=At.sibling;var Ja=ve(fe,At,Dn.value,ze);if(Ja===null){At===null&&(At=bn);break}e&&At&&Ja.alternate===null&&s(fe,At),oe=m(Ja,oe,an),Nn===null?zt=Ja:Nn.sibling=Ja,Nn=Ja,At=bn}if(Dn.done)return o(fe,At),wn&&ma(fe,an),zt;if(At===null){for(;!Dn.done;an++,Dn=ge.next())Dn=Ie(fe,Dn.value,ze),Dn!==null&&(oe=m(Dn,oe,an),Nn===null?zt=Dn:Nn.sibling=Dn,Nn=Dn);return wn&&ma(fe,an),zt}for(At=r(At);!Dn.done;an++,Dn=ge.next())Dn=Ce(At,fe,an,Dn.value,ze),Dn!==null&&(e&&Dn.alternate!==null&&At.delete(Dn.key===null?an:Dn.key),oe=m(Dn,oe,an),Nn===null?zt=Dn:Nn.sibling=Dn,Nn=Dn);return e&&At.forEach(function(Rv){return s(fe,Rv)}),wn&&ma(fe,an),zt}function ts(fe,oe,ge,ze){if(typeof ge=="object"&&ge!==null&&ge.type===j&&ge.key===null&&(ge=ge.props.children),typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case S:e:{for(var zt=ge.key;oe!==null;){if(oe.key===zt){if(zt=ge.type,zt===j){if(oe.tag===7){o(fe,oe.sibling),ze=f(oe,ge.props.children),ze.return=fe,fe=ze;break e}}else if(oe.elementType===zt||typeof zt=="object"&&zt!==null&&zt.$$typeof===V&&pr(zt)===oe.type){o(fe,oe.sibling),ze=f(oe,ge.props),Nl(ze,ge),ze.return=fe,fe=ze;break e}o(fe,oe);break}else s(fe,oe);oe=oe.sibling}ge.type===j?(ze=ur(ge.props.children,fe.mode,ze,ge.key),ze.return=fe,fe=ze):(ze=Wc(ge.type,ge.key,ge.props,null,fe.mode,ze),Nl(ze,ge),ze.return=fe,fe=ze)}return v(fe);case k:e:{for(zt=ge.key;oe!==null;){if(oe.key===zt)if(oe.tag===4&&oe.stateNode.containerInfo===ge.containerInfo&&oe.stateNode.implementation===ge.implementation){o(fe,oe.sibling),ze=f(oe,ge.children||[]),ze.return=fe,fe=ze;break e}else{o(fe,oe);break}else s(fe,oe);oe=oe.sibling}ze=tf(ge,fe.mode,ze),ze.return=fe,fe=ze}return v(fe);case V:return ge=pr(ge),ts(fe,oe,ge,ze)}if(pe(ge))return Mt(fe,oe,ge,ze);if(Ae(ge)){if(zt=Ae(ge),typeof zt!="function")throw Error(a(150));return ge=zt.call(ge),Ft(fe,oe,ge,ze)}if(typeof ge.then=="function")return ts(fe,oe,Zc(ge),ze);if(ge.$$typeof===O)return ts(fe,oe,Gc(fe,ge),ze);Jc(fe,ge)}return typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint"?(ge=""+ge,oe!==null&&oe.tag===6?(o(fe,oe.sibling),ze=f(oe,ge),ze.return=fe,fe=ze):(o(fe,oe),ze=ef(ge,fe.mode,ze),ze.return=fe,fe=ze),v(fe)):o(fe,oe)}return function(fe,oe,ge,ze){try{Al=0;var zt=ts(fe,oe,ge,ze);return Vr=null,zt}catch(At){if(At===Ur||At===Kc)throw At;var Nn=hi(29,At,null,fe.mode);return Nn.lanes=ze,Nn.return=fe,Nn}finally{}}}var gr=__(!0),g_=__(!1),Oa=!1;function mf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pf(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $a(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Pn&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Yc(e),e_(e,null,o),s}return Vc(e,r,s,o),Yc(e)}function Dl(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,en(e,o)}}function _f(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var gf=!1;function Rl(){if(gf){var e=Hr;if(e!==null)throw e}}function Bl(e,s,o,r){gf=!1;var f=e.updateQueue;Oa=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var Q=A,ye=Q.next;Q.next=null,v===null?m=ye:v.next=ye,v=Q;var De=e.alternate;De!==null&&(De=De.updateQueue,A=De.lastBaseUpdate,A!==v&&(A===null?De.firstBaseUpdate=ye:A.next=ye,De.lastBaseUpdate=Q))}if(m!==null){var Ie=f.baseState;v=0,De=ye=Q=null,A=m;do{var ve=A.lane&-536870913,Ce=ve!==A.lane;if(Ce?(xn&ve)===ve:(r&ve)===ve){ve!==0&&ve===Pr&&(gf=!0),De!==null&&(De=De.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Mt=e,Ft=A;ve=s;var ts=o;switch(Ft.tag){case 1:if(Mt=Ft.payload,typeof Mt=="function"){Ie=Mt.call(ts,Ie,ve);break e}Ie=Mt;break e;case 3:Mt.flags=Mt.flags&-65537|128;case 0:if(Mt=Ft.payload,ve=typeof Mt=="function"?Mt.call(ts,Ie,ve):Mt,ve==null)break e;Ie=x({},Ie,ve);break e;case 2:Oa=!0}}ve=A.callback,ve!==null&&(e.flags|=64,Ce&&(e.flags|=8192),Ce=f.callbacks,Ce===null?f.callbacks=[ve]:Ce.push(ve))}else Ce={lane:ve,tag:A.tag,payload:A.payload,callback:A.callback,next:null},De===null?(ye=De=Ce,Q=Ie):De=De.next=Ce,v|=ve;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;Ce=A,A=Ce.next,Ce.next=null,f.lastBaseUpdate=Ce,f.shared.pending=null}}while(!0);De===null&&(Q=Ie),f.baseState=Q,f.firstBaseUpdate=ye,f.lastBaseUpdate=De,m===null&&(f.shared.lanes=0),Va|=v,e.lanes=v,e.memoizedState=Ie}}function y_(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function x_(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)y_(o[e],s)}var Yr=I(null),eu=I(0);function b_(e,s){e=ka,se(eu,e),se(Yr,s),ka=e|s.baseLanes}function yf(){se(eu,ka),se(Yr,Yr.current)}function xf(){ka=eu.current,me(Yr),me(eu)}var mi=I(null),Di=null;function Ia(e){var s=e.alternate;se(Ps,Ps.current&1),se(mi,e),Di===null&&(s===null||Yr.current!==null||s.memoizedState!==null)&&(Di=e)}function bf(e){se(Ps,Ps.current),se(mi,e),Di===null&&(Di=e)}function v_(e){e.tag===22?(se(Ps,Ps.current),se(mi,e),Di===null&&(Di=e)):Pa()}function Pa(){se(Ps,Ps.current),se(mi,mi.current)}function pi(e){me(mi),Di===e&&(Di=null),me(Ps)}var Ps=I(0);function tu(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||jh(o)||Mh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ga=0,tn=null,Jn=null,Qs=null,nu=!1,Wr=!1,yr=!1,su=0,Ll=0,Fr=null,S2=0;function Ns(){throw Error(a(321))}function vf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!ut(e[o],s[o]))return!1;return!0}function wf(e,s,o,r,f,m){return ga=m,tn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,P.H=e===null||e.memoizedState===null?og:zf,yr=!1,m=o(r,f),yr=!1,Wr&&(m=S_(s,o,r,f)),w_(e),m}function w_(e){P.H=$l;var s=Jn!==null&&Jn.next!==null;if(ga=0,Qs=Jn=tn=null,nu=!1,Ll=0,Fr=null,s)throw Error(a(300));e===null||Zs||(e=e.dependencies,e!==null&&Xc(e)&&(Zs=!0))}function S_(e,s,o,r){tn=e;var f=0;do{if(Wr&&(Fr=null),Ll=0,Wr=!1,25<=f)throw Error(a(301));if(f+=1,Qs=Jn=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}P.H=ig,m=s(o,r)}while(Wr);return m}function C2(){var e=P.H,s=e.useState()[0];return s=typeof s.then=="function"?Ol(s):s,e=e.useState()[0],(Jn!==null?Jn.memoizedState:null)!==e&&(tn.flags|=1024),s}function Sf(){var e=su!==0;return su=0,e}function Cf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function kf(e){if(nu){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}nu=!1}ga=0,Qs=Jn=tn=null,Wr=!1,Ll=su=0,Fr=null}function qo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qs===null?tn.memoizedState=Qs=e:Qs=Qs.next=e,Qs}function Hs(){if(Jn===null){var e=tn.alternate;e=e!==null?e.memoizedState:null}else e=Jn.next;var s=Qs===null?tn.memoizedState:Qs.next;if(s!==null)Qs=s,Jn=e;else{if(e===null)throw tn.alternate===null?Error(a(467)):Error(a(310));Jn=e,e={memoizedState:Jn.memoizedState,baseState:Jn.baseState,baseQueue:Jn.baseQueue,queue:Jn.queue,next:null},Qs===null?tn.memoizedState=Qs=e:Qs=Qs.next=e}return Qs}function ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ol(e){var s=Ll;return Ll+=1,Fr===null&&(Fr=[]),e=h_(Fr,e,s),s=tn,(Qs===null?s.memoizedState:Qs.next)===null&&(s=s.alternate,P.H=s===null||s.memoizedState===null?og:zf),e}function iu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ol(e);if(e.$$typeof===O)return Do(e)}throw Error(a(438,String(e)))}function jf(e){var s=null,o=tn.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=tn.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=ou(),tn.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=ae;return s.index++,o}function ya(e,s){return typeof s=="function"?s(e):s}function au(e){var s=Hs();return Mf(s,Jn,e)}function Mf(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,m=r.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,r.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var A=v=null,Q=null,ye=s,De=!1;do{var Ie=ye.lane&-536870913;if(Ie!==ye.lane?(xn&Ie)===Ie:(ga&Ie)===Ie){var ve=ye.revertLane;if(ve===0)Q!==null&&(Q=Q.next={lane:0,revertLane:0,gesture:null,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null}),Ie===Pr&&(De=!0);else if((ga&ve)===ve){ye=ye.next,ve===Pr&&(De=!0);continue}else Ie={lane:0,revertLane:ye.revertLane,gesture:null,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null},Q===null?(A=Q=Ie,v=m):Q=Q.next=Ie,tn.lanes|=ve,Va|=ve;Ie=ye.action,yr&&o(m,Ie),m=ye.hasEagerState?ye.eagerState:o(m,Ie)}else ve={lane:Ie,revertLane:ye.revertLane,gesture:ye.gesture,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null},Q===null?(A=Q=ve,v=m):Q=Q.next=ve,tn.lanes|=Ie,Va|=Ie;ye=ye.next}while(ye!==null&&ye!==s);if(Q===null?v=m:Q.next=A,!ut(m,e.memoizedState)&&(Zs=!0,De&&(o=Hr,o!==null)))throw o;e.memoizedState=m,e.baseState=v,e.baseQueue=Q,r.lastRenderedState=m}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ef(e){var s=Hs(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);ut(m,s.memoizedState)||(Zs=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function C_(e,s,o){var r=tn,f=Hs(),m=wn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!ut((Jn||f).memoizedState,o);if(v&&(f.memoizedState=o,Zs=!0),f=f.queue,Nf(M_.bind(null,r,f,e),[e]),f.getSnapshot!==s||v||Qs!==null&&Qs.memoizedState.tag&1){if(r.flags|=2048,Xr(9,{destroy:void 0},j_.bind(null,r,f,o,s),null),rs===null)throw Error(a(349));m||(ga&127)!==0||k_(r,s,o)}return o}function k_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=tn.updateQueue,s===null?(s=ou(),tn.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function j_(e,s,o,r){s.value=o,s.getSnapshot=r,E_(s)&&T_(e)}function M_(e,s,o){return o(function(){E_(s)&&T_(e)})}function E_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!ut(e,o)}catch{return!0}}function T_(e){var s=cr(e,2);s!==null&&li(s,e,2)}function Tf(e){var s=qo();if(typeof e=="function"){var o=e;if(e=o(),yr){le(!0);try{o()}finally{le(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:e},s}function A_(e,s,o,r){return e.baseState=o,Mf(e,Jn,typeof r=="function"?r:ya)}function k2(e,s,o,r,f){if(cu(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};P.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,N_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function N_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var m=P.T,v={};P.T=v;try{var A=o(f,r),Q=P.S;Q!==null&&Q(v,A),D_(e,s,A)}catch(ye){Af(e,s,ye)}finally{m!==null&&v.types!==null&&(m.types=v.types),P.T=m}}else try{m=o(f,r),D_(e,s,m)}catch(ye){Af(e,s,ye)}}function D_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){R_(e,s,r)},function(r){return Af(e,s,r)}):R_(e,s,o)}function R_(e,s,o){s.status="fulfilled",s.value=o,B_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,N_(e,o)))}function Af(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,B_(s),s=s.next;while(s!==r)}e.action=null}function B_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function L_(e,s){return s}function O_(e,s){if(wn){var o=rs.formState;if(o!==null){e:{var r=tn;if(wn){if(xs){t:{for(var f=xs,m=Ni;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ri(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){xs=Ri(f.nextSibling),r=f.data==="F!";break e}}Ba(r)}r=!1}r&&(s=o[0])}}return o=qo(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:L_,lastRenderedState:s},o.queue=r,o=tg.bind(null,tn,r),r.dispatch=o,r=Tf(!1),m=Of.bind(null,tn,!1,r.queue),r=qo(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=k2.bind(null,tn,f,m,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function z_(e){var s=Hs();return $_(s,Jn,e)}function $_(e,s,o){if(s=Mf(e,s,L_)[0],e=au(ya)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=Ol(s)}catch(v){throw v===Ur?Kc:v}else r=s;s=Hs();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(tn.flags|=2048,Xr(9,{destroy:void 0},j2.bind(null,f,o),null)),[r,m,e]}function j2(e,s){e.action=s}function I_(e){var s=Hs(),o=Jn;if(o!==null)return $_(s,o,e);Hs(),s=s.memoizedState,o=Hs();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function Xr(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=tn.updateQueue,s===null&&(s=ou(),tn.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function P_(){return Hs().memoizedState}function ru(e,s,o,r){var f=qo();tn.flags|=e,f.memoizedState=Xr(1|s,{destroy:void 0},o,r===void 0?null:r)}function lu(e,s,o,r){var f=Hs();r=r===void 0?null:r;var m=f.memoizedState.inst;Jn!==null&&r!==null&&vf(r,Jn.memoizedState.deps)?f.memoizedState=Xr(s,m,o,r):(tn.flags|=e,f.memoizedState=Xr(1|s,m,o,r))}function H_(e,s){ru(8390656,8,e,s)}function Nf(e,s){lu(2048,8,e,s)}function M2(e){tn.flags|=4;var s=tn.updateQueue;if(s===null)s=ou(),tn.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function U_(e){var s=Hs().memoizedState;return M2({ref:s,nextImpl:e}),function(){if((Pn&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function V_(e,s){return lu(4,2,e,s)}function Y_(e,s){return lu(4,4,e,s)}function W_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function F_(e,s,o){o=o!=null?o.concat([e]):null,lu(4,4,W_.bind(null,s,e),o)}function Df(){}function X_(e,s){var o=Hs();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&vf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function G_(e,s){var o=Hs();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&vf(s,r[1]))return r[0];if(r=e(),yr){le(!0);try{e()}finally{le(!1)}}return o.memoizedState=[r,s],r}function Rf(e,s,o){return o===void 0||(ga&1073741824)!==0&&(xn&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=qg(),tn.lanes|=e,Va|=e,o)}function q_(e,s,o,r){return ut(o,s)?o:Yr.current!==null?(e=Rf(e,o,r),ut(e,s)||(Zs=!0),e):(ga&42)===0||(ga&1073741824)!==0&&(xn&261930)===0?(Zs=!0,e.memoizedState=o):(e=qg(),tn.lanes|=e,Va|=e,s)}function K_(e,s,o,r,f){var m=ie.p;ie.p=m!==0&&8>m?m:8;var v=P.T,A={};P.T=A,Of(e,!1,s,o);try{var Q=f(),ye=P.S;if(ye!==null&&ye(A,Q),Q!==null&&typeof Q=="object"&&typeof Q.then=="function"){var De=w2(Q,r);zl(e,s,De,yi(e))}else zl(e,s,r,yi(e))}catch(Ie){zl(e,s,{then:function(){},status:"rejected",reason:Ie},yi())}finally{ie.p=m,v!==null&&A.types!==null&&(v.types=A.types),P.T=v}}function E2(){}function Bf(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=Q_(e).queue;K_(e,f,s,F,o===null?E2:function(){return Z_(e),o(r)})}function Q_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:F},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function Z_(e){var s=Q_(e);s.next===null&&(s=e.alternate.memoizedState),zl(e,s.next.queue,{},yi())}function Lf(){return Do(ec)}function J_(){return Hs().memoizedState}function eg(){return Hs().memoizedState}function T2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=yi();e=za(o);var r=$a(s,e,o);r!==null&&(li(r,s,o),Dl(r,s,o)),s={cache:uf()},e.payload=s;return}s=s.return}}function A2(e,s,o){var r=yi();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},cu(e)?ng(s,o):(o=Zd(e,s,o,r),o!==null&&(li(o,e,r),sg(o,s,r)))}function tg(e,s,o){var r=yi();zl(e,s,o,r)}function zl(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(cu(e))ng(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,A=m(v,o);if(f.hasEagerState=!0,f.eagerState=A,ut(A,v))return Vc(e,s,f,0),rs===null&&Uc(),!1}catch{}finally{}if(o=Zd(e,s,f,r),o!==null)return li(o,e,r),sg(o,s,r),!0}return!1}function Of(e,s,o,r){if(r={lane:2,revertLane:mh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},cu(e)){if(s)throw Error(a(479))}else s=Zd(e,o,r,2),s!==null&&li(s,e,2)}function cu(e){var s=e.alternate;return e===tn||s!==null&&s===tn}function ng(e,s){Wr=nu=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function sg(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,en(e,o)}}var $l={readContext:Do,use:iu,useCallback:Ns,useContext:Ns,useEffect:Ns,useImperativeHandle:Ns,useLayoutEffect:Ns,useInsertionEffect:Ns,useMemo:Ns,useReducer:Ns,useRef:Ns,useState:Ns,useDebugValue:Ns,useDeferredValue:Ns,useTransition:Ns,useSyncExternalStore:Ns,useId:Ns,useHostTransitionStatus:Ns,useFormState:Ns,useActionState:Ns,useOptimistic:Ns,useMemoCache:Ns,useCacheRefresh:Ns};$l.useEffectEvent=Ns;var og={readContext:Do,use:iu,useCallback:function(e,s){return qo().memoizedState=[e,s===void 0?null:s],e},useContext:Do,useEffect:H_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,ru(4194308,4,W_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return ru(4194308,4,e,s)},useInsertionEffect:function(e,s){ru(4,2,e,s)},useMemo:function(e,s){var o=qo();s=s===void 0?null:s;var r=e();if(yr){le(!0);try{e()}finally{le(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=qo();if(o!==void 0){var f=o(s);if(yr){le(!0);try{o(s)}finally{le(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=A2.bind(null,tn,e),[r.memoizedState,e]},useRef:function(e){var s=qo();return e={current:e},s.memoizedState=e},useState:function(e){e=Tf(e);var s=e.queue,o=tg.bind(null,tn,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Df,useDeferredValue:function(e,s){var o=qo();return Rf(o,e,s)},useTransition:function(){var e=Tf(!1);return e=K_.bind(null,tn,e.queue,!0,!1),qo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=tn,f=qo();if(wn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),rs===null)throw Error(a(349));(xn&127)!==0||k_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,H_(M_.bind(null,r,m,e),[e]),r.flags|=2048,Xr(9,{destroy:void 0},j_.bind(null,r,m,o,s),null),o},useId:function(){var e=qo(),s=rs.identifierPrefix;if(wn){var o=oa,r=sa;o=(r&~(1<<32-Se(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=su++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=S2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Lf,useFormState:O_,useActionState:O_,useOptimistic:function(e){var s=qo();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Of.bind(null,tn,!0,o),o.dispatch=s,[e,s]},useMemoCache:jf,useCacheRefresh:function(){return qo().memoizedState=T2.bind(null,tn)},useEffectEvent:function(e){var s=qo(),o={impl:e};return s.memoizedState=o,function(){if((Pn&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},zf={readContext:Do,use:iu,useCallback:X_,useContext:Do,useEffect:Nf,useImperativeHandle:F_,useInsertionEffect:V_,useLayoutEffect:Y_,useMemo:G_,useReducer:au,useRef:P_,useState:function(){return au(ya)},useDebugValue:Df,useDeferredValue:function(e,s){var o=Hs();return q_(o,Jn.memoizedState,e,s)},useTransition:function(){var e=au(ya)[0],s=Hs().memoizedState;return[typeof e=="boolean"?e:Ol(e),s]},useSyncExternalStore:C_,useId:J_,useHostTransitionStatus:Lf,useFormState:z_,useActionState:z_,useOptimistic:function(e,s){var o=Hs();return A_(o,Jn,e,s)},useMemoCache:jf,useCacheRefresh:eg};zf.useEffectEvent=U_;var ig={readContext:Do,use:iu,useCallback:X_,useContext:Do,useEffect:Nf,useImperativeHandle:F_,useInsertionEffect:V_,useLayoutEffect:Y_,useMemo:G_,useReducer:Ef,useRef:P_,useState:function(){return Ef(ya)},useDebugValue:Df,useDeferredValue:function(e,s){var o=Hs();return Jn===null?Rf(o,e,s):q_(o,Jn.memoizedState,e,s)},useTransition:function(){var e=Ef(ya)[0],s=Hs().memoizedState;return[typeof e=="boolean"?e:Ol(e),s]},useSyncExternalStore:C_,useId:J_,useHostTransitionStatus:Lf,useFormState:I_,useActionState:I_,useOptimistic:function(e,s){var o=Hs();return Jn!==null?A_(o,Jn,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:jf,useCacheRefresh:eg};ig.useEffectEvent=U_;function $f(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var If={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=yi(),f=za(r);f.payload=s,o!=null&&(f.callback=o),s=$a(e,f,r),s!==null&&(li(s,e,r),Dl(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=yi(),f=za(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=$a(e,f,r),s!==null&&(li(s,e,r),Dl(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=yi(),r=za(o);r.tag=2,s!=null&&(r.callback=s),s=$a(e,r,o),s!==null&&(li(s,e,o),Dl(s,e,o))}};function ag(e,s,o,r,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,m,v):s.prototype&&s.prototype.isPureReactComponent?!ct(o,r)||!ct(f,m):!0}function rg(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&If.enqueueReplaceState(s,s.state,null)}function xr(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function lg(e){Hc(e)}function cg(e){console.error(e)}function ug(e){Hc(e)}function uu(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function dg(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Pf(e,s,o){return o=za(o),o.tag=3,o.payload={element:null},o.callback=function(){uu(e,s)},o}function fg(e){return e=za(e),e.tag=3,e}function hg(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;e.payload=function(){return f(m)},e.callback=function(){dg(s,o,r)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){dg(s,o,r),typeof f!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function N2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&Ir(s,o,f,!0),o=mi.current,o!==null){switch(o.tag){case 31:case 13:return Di===null?wu():o.alternate===null&&Ds===0&&(Ds=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),dh(e,r,f)),!1;case 22:return o.flags|=65536,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),dh(e,r,f)),!1}throw Error(a(435,o.tag))}return dh(e,r,f),wu(),!1}if(wn)return s=mi.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==of&&(e=Error(a(422),{cause:r}),Ml(Ei(e,o)))):(r!==of&&(s=Error(a(423),{cause:r}),Ml(Ei(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=Ei(r,o),f=Pf(e.stateNode,r,f),_f(e,f),Ds!==4&&(Ds=2)),!1;var m=Error(a(520),{cause:r});if(m=Ei(m,o),Fl===null?Fl=[m]:Fl.push(m),Ds!==4&&(Ds=2),s===null)return!0;r=Ei(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=Pf(o.stateNode,r,e),_f(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ya===null||!Ya.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=fg(f),hg(f,e,o,r),_f(o,f),!1}o=o.return}while(o!==null);return!1}var Hf=Error(a(461)),Zs=!1;function Ro(e,s,o,r){s.child=e===null?g_(s,null,o,r):gr(s,e.child,o,r)}function mg(e,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var v={};for(var A in r)A!=="ref"&&(v[A]=r[A])}else v=r;return hr(s),r=wf(e,s,o,v,m,f),A=Sf(),e!==null&&!Zs?(Cf(e,s,f),xa(e,s,f)):(wn&&A&&nf(s),s.flags|=1,Ro(e,s,r,f),s.child)}function pg(e,s,o,r,f){if(e===null){var m=o.type;return typeof m=="function"&&!Jd(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,_g(e,s,m,r,f)):(e=Wc(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!qf(e,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:ct,o(v,r)&&e.ref===s.ref)return xa(e,s,f)}return s.flags|=1,e=ha(m,r),e.ref=s.ref,e.return=s,s.child=e}function _g(e,s,o,r,f){if(e!==null){var m=e.memoizedProps;if(ct(m,r)&&e.ref===s.ref)if(Zs=!1,s.pendingProps=r=m,qf(e,f))(e.flags&131072)!==0&&(Zs=!0);else return s.lanes=e.lanes,xa(e,s,f)}return Uf(e,s,o,r,f)}function gg(e,s,o,r){var f=r.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return yg(e,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&qc(s,m!==null?m.cachePool:null),m!==null?b_(s,m):yf(),v_(s);else return r=s.lanes=536870912,yg(e,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(qc(s,m.cachePool),b_(s,m),Pa(),s.memoizedState=null):(e!==null&&qc(s,null),yf(),Pa());return Ro(e,s,f,o),s.child}function Il(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function yg(e,s,o,r,f){var m=ff();return m=m===null?null:{parent:Ks._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&qc(s,null),yf(),v_(s),e!==null&&Ir(e,s,r,!0),s.childLanes=f,null}function du(e,s){return s=hu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function xg(e,s,o){return gr(s,e.child,null,o),e=du(s,s.pendingProps),e.flags|=2,pi(s),s.memoizedState=null,e}function D2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(wn){if(r.mode==="hidden")return e=du(s,r),s.lanes=536870912,Il(null,e);if(bf(s),(e=xs)?(e=N0(e,Ni),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Da!==null?{id:sa,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},o=n_(e),o.return=s,s.child=o,No=s,xs=null)):e=null,e===null)throw Ba(s);return s.lanes=536870912,null}return du(s,r)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(bf(s),f)if(s.flags&256)s.flags&=-257,s=xg(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(Zs||Ir(e,s,o,!1),f=(o&e.childLanes)!==0,Zs||f){if(r=rs,r!==null&&(v=sn(r,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,cr(e,v),li(r,e,v),Hf;wu(),s=xg(e,s,o)}else e=m.treeContext,xs=Ri(v.nextSibling),No=s,wn=!0,Ra=null,Ni=!1,e!==null&&i_(s,e),s=du(s,r),s.flags|=4096;return s}return e=ha(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function fu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function Uf(e,s,o,r,f){return hr(s),o=wf(e,s,o,r,void 0,f),r=Sf(),e!==null&&!Zs?(Cf(e,s,f),xa(e,s,f)):(wn&&r&&nf(s),s.flags|=1,Ro(e,s,o,f),s.child)}function bg(e,s,o,r,f,m){return hr(s),s.updateQueue=null,o=S_(s,r,o,f),w_(e),r=Sf(),e!==null&&!Zs?(Cf(e,s,m),xa(e,s,m)):(wn&&r&&nf(s),s.flags|=1,Ro(e,s,o,m),s.child)}function vg(e,s,o,r,f){if(hr(s),s.stateNode===null){var m=Lr,v=o.contextType;typeof v=="object"&&v!==null&&(m=Do(v)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=If,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},mf(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?Do(v):Lr,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&($f(s,o,v,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&If.enqueueReplaceState(m,m.state,null),Bl(s,r,m,f),Rl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){m=s.stateNode;var A=s.memoizedProps,Q=xr(o,A);m.props=Q;var ye=m.context,De=o.contextType;v=Lr,typeof De=="object"&&De!==null&&(v=Do(De));var Ie=o.getDerivedStateFromProps;De=typeof Ie=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=s.pendingProps!==A,De||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||ye!==v)&&rg(s,m,r,v),Oa=!1;var ve=s.memoizedState;m.state=ve,Bl(s,r,m,f),Rl(),ye=s.memoizedState,A||ve!==ye||Oa?(typeof Ie=="function"&&($f(s,o,Ie,r),ye=s.memoizedState),(Q=Oa||ag(s,o,Q,r,ve,ye,v))?(De||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=ye),m.props=r,m.state=ye,m.context=v,r=Q):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,pf(e,s),v=s.memoizedProps,De=xr(o,v),m.props=De,Ie=s.pendingProps,ve=m.context,ye=o.contextType,Q=Lr,typeof ye=="object"&&ye!==null&&(Q=Do(ye)),A=o.getDerivedStateFromProps,(ye=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==Ie||ve!==Q)&&rg(s,m,r,Q),Oa=!1,ve=s.memoizedState,m.state=ve,Bl(s,r,m,f),Rl();var Ce=s.memoizedState;v!==Ie||ve!==Ce||Oa||e!==null&&e.dependencies!==null&&Xc(e.dependencies)?(typeof A=="function"&&($f(s,o,A,r),Ce=s.memoizedState),(De=Oa||ag(s,o,De,r,ve,Ce,Q)||e!==null&&e.dependencies!==null&&Xc(e.dependencies))?(ye||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,Ce,Q),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,Ce,Q)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&ve===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ve===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=Ce),m.props=r,m.state=Ce,m.context=Q,r=De):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&ve===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ve===e.memoizedState||(s.flags|=1024),r=!1)}return m=r,fu(e,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&r?(s.child=gr(s,e.child,null,f),s.child=gr(s,null,o,f)):Ro(e,s,o,f),s.memoizedState=m.state,e=s.child):e=xa(e,s,f),e}function wg(e,s,o,r){return dr(),s.flags|=256,Ro(e,s,o,r),s.child}var Vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yf(e){return{baseLanes:e,cachePool:d_()}}function Wf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=gi),e}function Sg(e,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(Ps.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if(wn){if(f?Ia(s):Pa(),(e=xs)?(e=N0(e,Ni),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Da!==null?{id:sa,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},o=n_(e),o.return=s,s.child=o,No=s,xs=null)):e=null,e===null)throw Ba(s);return Mh(e)?s.lanes=32:s.lanes=536870912,null}var A=r.children;return r=r.fallback,f?(Pa(),f=s.mode,A=hu({mode:"hidden",children:A},f),r=ur(r,f,o,null),A.return=s,r.return=s,A.sibling=r,s.child=A,r=s.child,r.memoizedState=Yf(o),r.childLanes=Wf(e,v,o),s.memoizedState=Vf,Il(null,r)):(Ia(s),Ff(s,A))}var Q=e.memoizedState;if(Q!==null&&(A=Q.dehydrated,A!==null)){if(m)s.flags&256?(Ia(s),s.flags&=-257,s=Xf(e,s,o)):s.memoizedState!==null?(Pa(),s.child=e.child,s.flags|=128,s=null):(Pa(),A=r.fallback,f=s.mode,r=hu({mode:"visible",children:r.children},f),A=ur(A,f,o,null),A.flags|=2,r.return=s,A.return=s,r.sibling=A,s.child=r,gr(s,e.child,null,o),r=s.child,r.memoizedState=Yf(o),r.childLanes=Wf(e,v,o),s.memoizedState=Vf,s=Il(null,r));else if(Ia(s),Mh(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var ye=v.dgst;v=ye,r=Error(a(419)),r.stack="",r.digest=v,Ml({value:r,source:null,stack:null}),s=Xf(e,s,o)}else if(Zs||Ir(e,s,o,!1),v=(o&e.childLanes)!==0,Zs||v){if(v=rs,v!==null&&(r=sn(v,o),r!==0&&r!==Q.retryLane))throw Q.retryLane=r,cr(e,r),li(v,e,r),Hf;jh(A)||wu(),s=Xf(e,s,o)}else jh(A)?(s.flags|=192,s.child=e.child,s=null):(e=Q.treeContext,xs=Ri(A.nextSibling),No=s,wn=!0,Ra=null,Ni=!1,e!==null&&i_(s,e),s=Ff(s,r.children),s.flags|=4096);return s}return f?(Pa(),A=r.fallback,f=s.mode,Q=e.child,ye=Q.sibling,r=ha(Q,{mode:"hidden",children:r.children}),r.subtreeFlags=Q.subtreeFlags&65011712,ye!==null?A=ha(ye,A):(A=ur(A,f,o,null),A.flags|=2),A.return=s,r.return=s,r.sibling=A,s.child=r,Il(null,r),r=s.child,A=e.child.memoizedState,A===null?A=Yf(o):(f=A.cachePool,f!==null?(Q=Ks._currentValue,f=f.parent!==Q?{parent:Q,pool:Q}:f):f=d_(),A={baseLanes:A.baseLanes|o,cachePool:f}),r.memoizedState=A,r.childLanes=Wf(e,v,o),s.memoizedState=Vf,Il(e.child,r)):(Ia(s),o=e.child,e=o.sibling,o=ha(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=o,s.memoizedState=null,o)}function Ff(e,s){return s=hu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function hu(e,s){return e=hi(22,e,null,s),e.lanes=0,e}function Xf(e,s,o){return gr(s,e.child,null,o),e=Ff(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function Cg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),lf(e.return,s,o)}function Gf(e,s,o,r,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function kg(e,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var v=Ps.current,A=(v&2)!==0;if(A?(v=v&1|2,s.flags|=128):v&=1,se(Ps,v),Ro(e,s,r,o),r=wn?jl:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cg(e,o,s);else if(e.tag===19)Cg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&tu(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Gf(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&tu(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Gf(s,!0,o,null,m,r);break;case"together":Gf(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function xa(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),Va|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(Ir(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=ha(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=ha(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function qf(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Xc(e)))}function R2(e,s,o){switch(s.tag){case 3:Ue(s,s.stateNode.containerInfo),La(s,Ks,e.memoizedState.cache),dr();break;case 27:case 5:Lt(s);break;case 4:Ue(s,s.stateNode.containerInfo);break;case 10:La(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,bf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(Ia(s),s.flags|=128,null):(o&s.child.childLanes)!==0?Sg(e,s,o):(Ia(s),e=xa(e,s,o),e!==null?e.sibling:null);Ia(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(Ir(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return kg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),se(Ps,Ps.current),r)break;return null;case 22:return s.lanes=0,gg(e,s,o,s.pendingProps);case 24:La(s,Ks,e.memoizedState.cache)}return xa(e,s,o)}function jg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)Zs=!0;else{if(!qf(e,o)&&(s.flags&128)===0)return Zs=!1,R2(e,s,o);Zs=(e.flags&131072)!==0}else Zs=!1,wn&&(s.flags&1048576)!==0&&o_(s,jl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=pr(s.elementType),s.type=e,typeof e=="function")Jd(e)?(r=xr(e,r),s.tag=1,s=vg(null,s,e,r,o)):(s.tag=0,s=Uf(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===R){s.tag=11,s=mg(null,s,e,r,o);break e}else if(f===K){s.tag=14,s=pg(null,s,e,r,o);break e}}throw s=ne(e)||e,Error(a(306,s,""))}}return s;case 0:return Uf(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=xr(r,s.pendingProps),vg(e,s,r,f,o);case 3:e:{if(Ue(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,pf(e,s),Bl(s,r,null,o);var v=s.memoizedState;if(r=v.cache,La(s,Ks,r),r!==m.cache&&cf(s,[Ks],o,!0),Rl(),r=v.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=wg(e,s,r,o);break e}else if(r!==f){f=Ei(Error(a(424)),s),Ml(f),s=wg(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(xs=Ri(e.firstChild),No=s,wn=!0,Ra=null,Ni=!0,o=g_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(dr(),r===f){s=xa(e,s,o);break e}Ro(e,s,r,o)}s=s.child}return s;case 26:return fu(e,s),e===null?(o=z0(s.type,null,s.pendingProps,null))?s.memoizedState=o:wn||(o=s.type,e=s.pendingProps,r=Tu(Re.current).createElement(o),r[Gt]=s,r[En]=e,Bo(r,o,e),Un(r),s.stateNode=r):s.memoizedState=z0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return Lt(s),e===null&&wn&&(r=s.stateNode=B0(s.type,s.pendingProps,Re.current),No=s,Ni=!0,f=xs,Ga(s.type)?(Eh=f,xs=Ri(r.firstChild)):xs=f),Ro(e,s,s.pendingProps.children,o),fu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&wn&&((f=r=xs)&&(r=cv(r,s.type,s.pendingProps,Ni),r!==null?(s.stateNode=r,No=s,xs=Ri(r.firstChild),Ni=!1,f=!0):f=!1),f||Ba(s)),Lt(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,r=m.children,Sh(f,m)?r=null:v!==null&&Sh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=wf(e,s,C2,null,null,o),ec._currentValue=f),fu(e,s),Ro(e,s,r,o),s.child;case 6:return e===null&&wn&&((e=o=xs)&&(o=uv(o,s.pendingProps,Ni),o!==null?(s.stateNode=o,No=s,xs=null,e=!0):e=!1),e||Ba(s)),null;case 13:return Sg(e,s,o);case 4:return Ue(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=gr(s,null,r,o):Ro(e,s,r,o),s.child;case 11:return mg(e,s,s.type,s.pendingProps,o);case 7:return Ro(e,s,s.pendingProps,o),s.child;case 8:return Ro(e,s,s.pendingProps.children,o),s.child;case 12:return Ro(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,La(s,s.type,r.value),Ro(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,hr(s),f=Do(f),r=r(f),s.flags|=1,Ro(e,s,r,o),s.child;case 14:return pg(e,s,s.type,s.pendingProps,o);case 15:return _g(e,s,s.type,s.pendingProps,o);case 19:return kg(e,s,o);case 31:return D2(e,s,o);case 22:return gg(e,s,o,s.pendingProps);case 24:return hr(s),r=Do(Ks),e===null?(f=ff(),f===null&&(f=rs,m=uf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},mf(s),La(s,Ks,f)):((e.lanes&o)!==0&&(pf(e,s),Bl(s,null,null,o),Rl()),f=e.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),La(s,Ks,r)):(r=m.cache,La(s,Ks,r),r!==f.cache&&cf(s,[Ks],o,!0))),Ro(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function ba(e){e.flags|=4}function Kf(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Jg())e.flags|=8192;else throw _r=Qc,hf}else e.flags&=-16777217}function Mg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!U0(s))if(Jg())e.flags|=8192;else throw _r=Qc,hf}function mu(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?yt():536870912,e.lanes|=s,Qr|=s)}function Pl(e,s){if(!wn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function bs(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function B2(e,s,o){var r=s.pendingProps;switch(sf(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bs(s),null;case 1:return bs(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),_a(Ks),Qe(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&($r(s)?ba(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,af())),bs(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(ba(s),m!==null?(bs(s),Mg(s,m)):(bs(s),Kf(s,f,null,r,o))):m?m!==e.memoizedState?(ba(s),bs(s),Mg(s,m)):(bs(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&ba(s),bs(s),Kf(s,f,e,r,o)),null;case 27:if(Dt(s),o=Re.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ba(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return bs(s),null}e=he.current,$r(s)?a_(s):(e=B0(f,r,o),s.stateNode=e,ba(s))}return bs(s),null;case 5:if(Dt(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ba(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return bs(s),null}if(m=he.current,$r(s))a_(s);else{var v=Tu(Re.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?v.createElement(f,{is:r.is}):v.createElement(f)}}m[Gt]=s,m[En]=r;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(Bo(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ba(s)}}return bs(s),Kf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&ba(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=Re.current,$r(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=No,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[Gt]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||S0(e.nodeValue,o)),e||Ba(s,!0)}else e=Tu(e).createTextNode(r),e[Gt]=s,s.stateNode=e}return bs(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=$r(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Gt]=s}else dr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;bs(s),e=!1}else o=af(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(pi(s),s):(pi(s),null);if((s.flags&128)!==0)throw Error(a(558))}return bs(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=$r(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[Gt]=s}else dr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;bs(s),f=!1}else f=af(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(pi(s),s):(pi(s),null)}return pi(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),mu(s,s.updateQueue),bs(s),null);case 4:return Qe(),e===null&&yh(s.stateNode.containerInfo),bs(s),null;case 10:return _a(s.type),bs(s),null;case 19:if(me(Ps),r=s.memoizedState,r===null)return bs(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)Pl(r,!1);else{if(Ds!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=tu(e),m!==null){for(s.flags|=128,Pl(r,!1),e=m.updateQueue,s.updateQueue=e,mu(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)t_(o,e),o=o.sibling;return se(Ps,Ps.current&1|2),wn&&ma(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&dt()>xu&&(s.flags|=128,f=!0,Pl(r,!1),s.lanes=4194304)}else{if(!f)if(e=tu(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,mu(s,e),Pl(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!wn)return bs(s),null}else 2*dt()-r.renderingStartTime>xu&&o!==536870912&&(s.flags|=128,f=!0,Pl(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(e=r.last,e!==null?e.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=dt(),e.sibling=null,o=Ps.current,se(Ps,f?o&1|2:o&1),wn&&ma(s,r.treeForkCount),e):(bs(s),null);case 22:case 23:return pi(s),xf(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(bs(s),s.subtreeFlags&6&&(s.flags|=8192)):bs(s),o=s.updateQueue,o!==null&&mu(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&me(mr),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),_a(Ks),bs(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function L2(e,s){switch(sf(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return _a(Ks),Qe(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return Dt(s),null;case 31:if(s.memoizedState!==null){if(pi(s),s.alternate===null)throw Error(a(340));dr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(pi(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));dr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return me(Ps),null;case 4:return Qe(),null;case 10:return _a(s.type),null;case 22:case 23:return pi(s),xf(),e!==null&&me(mr),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return _a(Ks),null;case 25:return null;default:return null}}function Eg(e,s){switch(sf(s),s.tag){case 3:_a(Ks),Qe();break;case 26:case 27:case 5:Dt(s);break;case 4:Qe();break;case 31:s.memoizedState!==null&&pi(s);break;case 13:pi(s);break;case 19:me(Ps);break;case 10:_a(s.type);break;case 22:case 23:pi(s),xf(),e!==null&&me(mr);break;case 24:_a(Ks)}}function Hl(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var m=o.create,v=o.inst;r=m(),v.destroy=r}o=o.next}while(o!==f)}}catch(A){Xn(s,s.return,A)}}function Ha(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&e)===e){var v=r.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,f=s;var Q=o,ye=A;try{ye()}catch(De){Xn(f,Q,De)}}}r=r.next}while(r!==m)}}catch(De){Xn(s,s.return,De)}}function Tg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{x_(s,o)}catch(r){Xn(e,e.return,r)}}}function Ag(e,s,o){o.props=xr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){Xn(e,s,r)}}function Ul(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){Xn(e,s,f)}}function ia(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Xn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Xn(e,s,f)}else o.current=null}function Ng(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Xn(e,e.return,f)}}function Qf(e,s,o){try{var r=e.stateNode;sv(r,e.type,o,s),r[En]=s}catch(f){Xn(e,e.return,f)}}function Dg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function Zf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jf(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Os));else if(r!==4&&(r===27&&Ga(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(Jf(e,s,o),e=e.sibling;e!==null;)Jf(e,s,o),e=e.sibling}function pu(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&Ga(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(pu(e,s,o),e=e.sibling;e!==null;)pu(e,s,o),e=e.sibling}function Rg(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Bo(s,r,o),s[Gt]=e,s[En]=o}catch(m){Xn(e,e.return,m)}}var va=!1,Js=!1,eh=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,ko=null;function O2(e,s){if(e=e.containerInfo,vh=Ou,e=un(e),Ot(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,A=-1,Q=-1,ye=0,De=0,Ie=e,ve=null;t:for(;;){for(var Ce;Ie!==o||f!==0&&Ie.nodeType!==3||(A=v+f),Ie!==m||r!==0&&Ie.nodeType!==3||(Q=v+r),Ie.nodeType===3&&(v+=Ie.nodeValue.length),(Ce=Ie.firstChild)!==null;)ve=Ie,Ie=Ce;for(;;){if(Ie===e)break t;if(ve===o&&++ye===f&&(A=v),ve===m&&++De===r&&(Q=v),(Ce=Ie.nextSibling)!==null)break;Ie=ve,ve=Ie.parentNode}Ie=Ce}o=A===-1||Q===-1?null:{start:A,end:Q}}else o=null}o=o||{start:0,end:0}}else o=null;for(wh={focusedElem:e,selectionRange:o},Ou=!1,ko=s;ko!==null;)if(s=ko,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,ko=e;else for(;ko!==null;){switch(s=ko,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var Mt=xr(o.type,f);e=r.getSnapshotBeforeUpdate(Mt,m),r.__reactInternalSnapshotBeforeUpdate=e}catch(Ft){Xn(o,o.return,Ft)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)kh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,ko=e;break}ko=s.return}}function Lg(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:Sa(e,o),r&4&&Hl(5,o);break;case 1:if(Sa(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(v){Xn(o,o.return,v)}else{var f=xr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Xn(o,o.return,v)}}r&64&&Tg(o),r&512&&Ul(o,o.return);break;case 3:if(Sa(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{x_(e,s)}catch(v){Xn(o,o.return,v)}}break;case 27:s===null&&r&4&&Rg(o);case 26:case 5:Sa(e,o),s===null&&r&4&&Ng(o),r&512&&Ul(o,o.return);break;case 12:Sa(e,o);break;case 31:Sa(e,o),r&4&&$g(e,o);break;case 13:Sa(e,o),r&4&&Ig(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=W2.bind(null,o),dv(e,o))));break;case 22:if(r=o.memoizedState!==null||va,!r){s=s!==null&&s.memoizedState!==null||Js,f=va;var m=Js;va=r,(Js=s)&&!m?Ca(e,o,(o.subtreeFlags&8772)!==0):Sa(e,o),va=f,Js=m}break;case 30:break;default:Sa(e,o)}}function Og(e){var s=e.alternate;s!==null&&(e.alternate=null,Og(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&us(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Cs=null,oi=!1;function wa(e,s,o){for(o=o.child;o!==null;)zg(e,s,o),o=o.sibling}function zg(e,s,o){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(ue,o)}catch{}switch(o.tag){case 26:Js||ia(o,s),wa(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Js||ia(o,s);var r=Cs,f=oi;Ga(o.type)&&(Cs=o.stateNode,oi=!1),wa(e,s,o),Ql(o.stateNode),Cs=r,oi=f;break;case 5:Js||ia(o,s);case 6:if(r=Cs,f=oi,Cs=null,wa(e,s,o),Cs=r,oi=f,Cs!==null)if(oi)try{(Cs.nodeType===9?Cs.body:Cs.nodeName==="HTML"?Cs.ownerDocument.body:Cs).removeChild(o.stateNode)}catch(m){Xn(o,s,m)}else try{Cs.removeChild(o.stateNode)}catch(m){Xn(o,s,m)}break;case 18:Cs!==null&&(oi?(e=Cs,T0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),il(e)):T0(Cs,o.stateNode));break;case 4:r=Cs,f=oi,Cs=o.stateNode.containerInfo,oi=!0,wa(e,s,o),Cs=r,oi=f;break;case 0:case 11:case 14:case 15:Ha(2,o,s),Js||Ha(4,o,s),wa(e,s,o);break;case 1:Js||(ia(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Ag(o,s,r)),wa(e,s,o);break;case 21:wa(e,s,o);break;case 22:Js=(r=Js)||o.memoizedState!==null,wa(e,s,o),Js=r;break;default:wa(e,s,o)}}function $g(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{il(e)}catch(o){Xn(s,s.return,o)}}}function Ig(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{il(e)}catch(o){Xn(s,s.return,o)}}function z2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Bg),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Bg),s;default:throw Error(a(435,e.tag))}}function _u(e,s){var o=z2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=F2.bind(null,e,r);r.then(f,f)}})}function ii(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=e,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(Ga(A.type)){Cs=A.stateNode,oi=!1;break e}break;case 5:Cs=A.stateNode,oi=!1;break e;case 3:case 4:Cs=A.stateNode.containerInfo,oi=!0;break e}A=A.return}if(Cs===null)throw Error(a(160));zg(m,v,f),Cs=null,oi=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)Pg(s,e),s=s.sibling}var Fi=null;function Pg(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ii(s,e),ai(e),r&4&&(Ha(3,e,e.return),Hl(3,e),Ha(5,e,e.return));break;case 1:ii(s,e),ai(e),r&512&&(Js||o===null||ia(o,o.return)),r&64&&va&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=Fi;if(ii(s,e),ai(e),r&512&&(Js||o===null||ia(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[cs]||m[Gt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),Bo(m,r,o),m[Gt]=e,Un(m),r=m;break e;case"link":var v=P0("link","href",f).get(r+(o.href||""));if(v){for(var A=0;A<v.length;A++)if(m=v[A],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(A,1);break t}}m=f.createElement(r),Bo(m,r,o),f.head.appendChild(m);break;case"meta":if(v=P0("meta","content",f).get(r+(o.content||""))){for(A=0;A<v.length;A++)if(m=v[A],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(A,1);break t}}m=f.createElement(r),Bo(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[Gt]=e,Un(m),r=m}e.stateNode=r}else H0(f,e.type,e.stateNode);else e.stateNode=I0(f,r,e.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?H0(f,e.type,e.stateNode):I0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Qf(e,e.memoizedProps,o.memoizedProps)}break;case 27:ii(s,e),ai(e),r&512&&(Js||o===null||ia(o,o.return)),o!==null&&r&4&&Qf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(ii(s,e),ai(e),r&512&&(Js||o===null||ia(o,o.return)),e.flags&32){f=e.stateNode;try{Mo(f,"")}catch(Mt){Xn(e,e.return,Mt)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,Qf(e,f,o!==null?o.memoizedProps:f)),r&1024&&(eh=!0);break;case 6:if(ii(s,e),ai(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(Mt){Xn(e,e.return,Mt)}}break;case 3:if(Du=null,f=Fi,Fi=Au(s.containerInfo),ii(s,e),Fi=f,ai(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{il(s.containerInfo)}catch(Mt){Xn(e,e.return,Mt)}eh&&(eh=!1,Hg(e));break;case 4:r=Fi,Fi=Au(e.stateNode.containerInfo),ii(s,e),ai(e),Fi=r;break;case 12:ii(s,e),ai(e);break;case 31:ii(s,e),ai(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 13:ii(s,e),ai(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(yu=dt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 22:f=e.memoizedState!==null;var Q=o!==null&&o.memoizedState!==null,ye=va,De=Js;if(va=ye||f,Js=De||Q,ii(s,e),Js=De,va=ye,ai(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||Q||va||Js||br(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){Q=o=s;try{if(m=Q.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=Q.stateNode;var Ie=Q.memoizedProps.style,ve=Ie!=null&&Ie.hasOwnProperty("display")?Ie.display:null;A.style.display=ve==null||typeof ve=="boolean"?"":(""+ve).trim()}}catch(Mt){Xn(Q,Q.return,Mt)}}}else if(s.tag===6){if(o===null){Q=s;try{Q.stateNode.nodeValue=f?"":Q.memoizedProps}catch(Mt){Xn(Q,Q.return,Mt)}}}else if(s.tag===18){if(o===null){Q=s;try{var Ce=Q.stateNode;f?A0(Ce,!0):A0(Q.stateNode,!1)}catch(Mt){Xn(Q,Q.return,Mt)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,_u(e,o))));break;case 19:ii(s,e),ai(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 30:break;case 21:break;default:ii(s,e),ai(e)}}function ai(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(Dg(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Zf(e);pu(e,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(Mo(v,""),o.flags&=-33);var A=Zf(e);pu(e,A,v);break;case 3:case 4:var Q=o.stateNode.containerInfo,ye=Zf(e);Jf(e,ye,Q);break;default:throw Error(a(161))}}catch(De){Xn(e,e.return,De)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Hg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;Hg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function Sa(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Lg(e,s.alternate,s),s=s.sibling}function br(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:Ha(4,s,s.return),br(s);break;case 1:ia(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Ag(s,s.return,o),br(s);break;case 27:Ql(s.stateNode);case 26:case 5:ia(s,s.return),br(s);break;case 22:s.memoizedState===null&&br(s);break;case 30:br(s);break;default:br(s)}e=e.sibling}}function Ca(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:Ca(f,m,o),Hl(4,m);break;case 1:if(Ca(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ye){Xn(r,r.return,ye)}if(r=m,f=r.updateQueue,f!==null){var A=r.stateNode;try{var Q=f.shared.hiddenCallbacks;if(Q!==null)for(f.shared.hiddenCallbacks=null,f=0;f<Q.length;f++)y_(Q[f],A)}catch(ye){Xn(r,r.return,ye)}}o&&v&64&&Tg(m),Ul(m,m.return);break;case 27:Rg(m);case 26:case 5:Ca(f,m,o),o&&r===null&&v&4&&Ng(m),Ul(m,m.return);break;case 12:Ca(f,m,o);break;case 31:Ca(f,m,o),o&&v&4&&$g(f,m);break;case 13:Ca(f,m,o),o&&v&4&&Ig(f,m);break;case 22:m.memoizedState===null&&Ca(f,m,o),Ul(m,m.return);break;case 30:break;default:Ca(f,m,o)}s=s.sibling}}function th(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&El(o))}function nh(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&El(e))}function Xi(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Ug(e,s,o,r),s=s.sibling}function Ug(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Xi(e,s,o,r),f&2048&&Hl(9,s);break;case 1:Xi(e,s,o,r);break;case 3:Xi(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&El(e)));break;case 12:if(f&2048){Xi(e,s,o,r),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,A=m.onPostCommit;typeof A=="function"&&A(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(Q){Xn(s,s.return,Q)}}else Xi(e,s,o,r);break;case 31:Xi(e,s,o,r);break;case 13:Xi(e,s,o,r);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?Xi(e,s,o,r):Vl(e,s):m._visibility&2?Xi(e,s,o,r):(m._visibility|=2,Gr(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&th(v,s);break;case 24:Xi(e,s,o,r),f&2048&&nh(s.alternate,s);break;default:Xi(e,s,o,r)}}function Gr(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,A=o,Q=r,ye=v.flags;switch(v.tag){case 0:case 11:case 15:Gr(m,v,A,Q,f),Hl(8,v);break;case 23:break;case 22:var De=v.stateNode;v.memoizedState!==null?De._visibility&2?Gr(m,v,A,Q,f):Vl(m,v):(De._visibility|=2,Gr(m,v,A,Q,f)),f&&ye&2048&&th(v.alternate,v);break;case 24:Gr(m,v,A,Q,f),f&&ye&2048&&nh(v.alternate,v);break;default:Gr(m,v,A,Q,f)}s=s.sibling}}function Vl(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:Vl(o,r),f&2048&&th(r.alternate,r);break;case 24:Vl(o,r),f&2048&&nh(r.alternate,r);break;default:Vl(o,r)}s=s.sibling}}var Yl=8192;function qr(e,s,o){if(e.subtreeFlags&Yl)for(e=e.child;e!==null;)Vg(e,s,o),e=e.sibling}function Vg(e,s,o){switch(e.tag){case 26:qr(e,s,o),e.flags&Yl&&e.memoizedState!==null&&Sv(o,Fi,e.memoizedState,e.memoizedProps);break;case 5:qr(e,s,o);break;case 3:case 4:var r=Fi;Fi=Au(e.stateNode.containerInfo),qr(e,s,o),Fi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Yl,Yl=16777216,qr(e,s,o),Yl=r):qr(e,s,o));break;default:qr(e,s,o)}}function Yg(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Wl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];ko=r,Fg(r,e)}Yg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wg(e),e=e.sibling}function Wg(e){switch(e.tag){case 0:case 11:case 15:Wl(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:Wl(e);break;case 12:Wl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,gu(e)):Wl(e);break;default:Wl(e)}}function gu(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];ko=r,Fg(r,e)}Yg(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:Ha(8,s,s.return),gu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,gu(s));break;default:gu(s)}e=e.sibling}}function Fg(e,s){for(;ko!==null;){var o=ko;switch(o.tag){case 0:case 11:case 15:Ha(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:El(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,ko=r;else e:for(o=e;ko!==null;){r=ko;var f=r.sibling,m=r.return;if(Og(r),r===o){ko=null;break e}if(f!==null){f.return=m,ko=f;break e}ko=m}}}var $2={getCacheForType:function(e){var s=Do(Ks),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return Do(Ks).controller.signal}},I2=typeof WeakMap=="function"?WeakMap:Map,Pn=0,rs=null,pn=null,xn=0,Fn=0,_i=null,Ua=!1,Kr=!1,sh=!1,ka=0,Ds=0,Va=0,vr=0,oh=0,gi=0,Qr=0,Fl=null,ri=null,ih=!1,yu=0,Xg=0,xu=1/0,bu=null,Ya=null,go=0,Wa=null,Zr=null,ja=0,ah=0,rh=null,Gg=null,Xl=0,lh=null;function yi(){return(Pn&2)!==0&&xn!==0?xn&-xn:P.T!==null?mh():Sn()}function qg(){if(gi===0)if((xn&536870912)===0||wn){var e=gt;gt<<=1,(gt&3932160)===0&&(gt=262144),gi=e}else gi=536870912;return e=mi.current,e!==null&&(e.flags|=32),gi}function li(e,s,o){(e===rs&&(Fn===2||Fn===9)||e.cancelPendingCommit!==null)&&(Jr(e,0),Fa(e,xn,gi,!1)),Ge(e,o),((Pn&2)===0||e!==rs)&&(e===rs&&((Pn&2)===0&&(vr|=o),Ds===4&&Fa(e,xn,gi,!1)),aa(e))}function Kg(e,s,o){if((Pn&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||kt(e,s),f=r?U2(e,s):uh(e,s,!0),m=r;do{if(f===0){Kr&&!r&&Fa(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!P2(o)){f=uh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var A=e;f=Fl;var Q=A.current.memoizedState.isDehydrated;if(Q&&(Jr(A,v).flags|=256),v=uh(A,v,!1),v!==2){if(sh&&!Q){A.errorRecoveryDisabledLanes|=m,vr|=m,f=4;break e}m=ri,ri=f,m!==null&&(ri===null?ri=m:ri.push.apply(ri,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){Jr(e,0),Fa(e,s,0,!0);break}e:{switch(r=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Fa(r,s,gi,!Ua);break e;case 2:ri=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=yu+300-dt(),10<f)){if(Fa(r,s,gi,!Ua),ot(r,0,!0)!==0)break e;ja=s,r.timeoutHandle=M0(Qg.bind(null,r,o,ri,bu,ih,s,gi,vr,Qr,Ua,m,"Throttled",-0,0),f);break e}Qg(r,o,ri,bu,ih,s,gi,vr,Qr,Ua,m,null,-0,0)}}break}while(!0);aa(e)}function Qg(e,s,o,r,f,m,v,A,Q,ye,De,Ie,ve,Ce){if(e.timeoutHandle=-1,Ie=s.subtreeFlags,Ie&8192||(Ie&16785408)===16785408){Ie={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Os},Vg(s,m,Ie);var Mt=(m&62914560)===m?yu-dt():(m&4194048)===m?Xg-dt():0;if(Mt=Cv(Ie,Mt),Mt!==null){ja=m,e.cancelPendingCommit=Mt(i0.bind(null,e,s,m,o,r,f,v,A,Q,De,Ie,null,ve,Ce)),Fa(e,m,v,!ye);return}}i0(e,s,m,o,r,f,v,A,Q)}function P2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!ut(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Fa(e,s,o,r){s&=~oh,s&=~vr,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var m=31-Se(f),v=1<<m;r[m]=-1,f&=~v}o!==0&&Kt(e,o,s)}function vu(){return(Pn&6)===0?(Gl(0),!1):!0}function ch(){if(pn!==null){if(Fn===0)var e=pn.return;else e=pn,pa=fr=null,kf(e),Vr=null,Al=0,e=pn;for(;e!==null;)Eg(e.alternate,e),e=e.return;pn=null}}function Jr(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,av(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),ja=0,ch(),rs=e,pn=o=ha(e.current,null),xn=s,Fn=0,_i=null,Ua=!1,Kr=kt(e,s),sh=!1,Qr=gi=oh=vr=Va=Ds=0,ri=Fl=null,ih=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-Se(r),m=1<<f;s|=e[f],r&=~m}return ka=s,Uc(),o}function Zg(e,s){tn=null,P.H=$l,s===Ur||s===Kc?(s=m_(),Fn=3):s===hf?(s=m_(),Fn=4):Fn=s===Hf?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,_i=s,pn===null&&(Ds=1,uu(e,Ei(s,e.current)))}function Jg(){var e=mi.current;return e===null?!0:(xn&4194048)===xn?Di===null:(xn&62914560)===xn||(xn&536870912)!==0?e===Di:!1}function e0(){var e=P.H;return P.H=$l,e===null?$l:e}function t0(){var e=P.A;return P.A=$2,e}function wu(){Ds=4,Ua||(xn&4194048)!==xn&&mi.current!==null||(Kr=!0),(Va&134217727)===0&&(vr&134217727)===0||rs===null||Fa(rs,xn,gi,!1)}function uh(e,s,o){var r=Pn;Pn|=2;var f=e0(),m=t0();(rs!==e||xn!==s)&&(bu=null,Jr(e,s)),s=!1;var v=Ds;e:do try{if(Fn!==0&&pn!==null){var A=pn,Q=_i;switch(Fn){case 8:ch(),v=6;break e;case 3:case 2:case 9:case 6:mi.current===null&&(s=!0);var ye=Fn;if(Fn=0,_i=null,el(e,A,Q,ye),o&&Kr){v=0;break e}break;default:ye=Fn,Fn=0,_i=null,el(e,A,Q,ye)}}H2(),v=Ds;break}catch(De){Zg(e,De)}while(!0);return s&&e.shellSuspendCounter++,pa=fr=null,Pn=r,P.H=f,P.A=m,pn===null&&(rs=null,xn=0,Uc()),v}function H2(){for(;pn!==null;)n0(pn)}function U2(e,s){var o=Pn;Pn|=2;var r=e0(),f=t0();rs!==e||xn!==s?(bu=null,xu=dt()+500,Jr(e,s)):Kr=kt(e,s);e:do try{if(Fn!==0&&pn!==null){s=pn;var m=_i;t:switch(Fn){case 1:Fn=0,_i=null,el(e,s,m,1);break;case 2:case 9:if(f_(m)){Fn=0,_i=null,s0(s);break}s=function(){Fn!==2&&Fn!==9||rs!==e||(Fn=7),aa(e)},m.then(s,s);break e;case 3:Fn=7;break e;case 4:Fn=5;break e;case 7:f_(m)?(Fn=0,_i=null,s0(s)):(Fn=0,_i=null,el(e,s,m,7));break;case 5:var v=null;switch(pn.tag){case 26:v=pn.memoizedState;case 5:case 27:var A=pn;if(v?U0(v):A.stateNode.complete){Fn=0,_i=null;var Q=A.sibling;if(Q!==null)pn=Q;else{var ye=A.return;ye!==null?(pn=ye,Su(ye)):pn=null}break t}}Fn=0,_i=null,el(e,s,m,5);break;case 6:Fn=0,_i=null,el(e,s,m,6);break;case 8:ch(),Ds=6;break e;default:throw Error(a(462))}}V2();break}catch(De){Zg(e,De)}while(!0);return pa=fr=null,P.H=r,P.A=f,Pn=o,pn!==null?0:(rs=null,xn=0,Uc(),Ds)}function V2(){for(;pn!==null&&!Ze();)n0(pn)}function n0(e){var s=jg(e.alternate,e,ka);e.memoizedProps=e.pendingProps,s===null?Su(e):pn=s}function s0(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=bg(o,s,s.pendingProps,s.type,void 0,xn);break;case 11:s=bg(o,s,s.pendingProps,s.type.render,s.ref,xn);break;case 5:kf(s);default:Eg(o,s),s=pn=t_(s,ka),s=jg(o,s,ka)}e.memoizedProps=e.pendingProps,s===null?Su(e):pn=s}function el(e,s,o,r){pa=fr=null,kf(s),Vr=null,Al=0;var f=s.return;try{if(N2(e,f,s,o,xn)){Ds=1,uu(e,Ei(o,e.current)),pn=null;return}}catch(m){if(f!==null)throw pn=f,m;Ds=1,uu(e,Ei(o,e.current)),pn=null;return}s.flags&32768?(wn||r===1?e=!0:Kr||(xn&536870912)!==0?e=!1:(Ua=e=!0,(r===2||r===9||r===3||r===6)&&(r=mi.current,r!==null&&r.tag===13&&(r.flags|=16384))),o0(s,e)):Su(s)}function Su(e){var s=e;do{if((s.flags&32768)!==0){o0(s,Ua);return}e=s.return;var o=B2(s.alternate,s,ka);if(o!==null){pn=o;return}if(s=s.sibling,s!==null){pn=s;return}pn=s=e}while(s!==null);Ds===0&&(Ds=5)}function o0(e,s){do{var o=L2(e.alternate,e);if(o!==null){o.flags&=32767,pn=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){pn=e;return}pn=e=o}while(e!==null);Ds=6,pn=null}function i0(e,s,o,r,f,m,v,A,Q){e.cancelPendingCommit=null;do Cu();while(go!==0);if((Pn&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=Qd,xt(e,o,m,v,A,Q),e===rs&&(pn=rs=null,xn=0),Zr=s,Wa=e,ja=o,ah=m,rh=f,Gg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,X2(it,function(){return u0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,f=ie.p,ie.p=2,v=Pn,Pn|=4;try{O2(e,s,o)}finally{Pn=v,ie.p=f,P.T=r}}go=1,a0(),r0(),l0()}}function a0(){if(go===1){go=0;var e=Wa,s=Zr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=P.T,P.T=null;var r=ie.p;ie.p=2;var f=Pn;Pn|=4;try{Pg(s,e);var m=wh,v=un(e.containerInfo),A=m.focusedElem,Q=m.selectionRange;if(v!==A&&A&&A.ownerDocument&&$n(A.ownerDocument.documentElement,A)){if(Q!==null&&Ot(A)){var ye=Q.start,De=Q.end;if(De===void 0&&(De=ye),"selectionStart"in A)A.selectionStart=ye,A.selectionEnd=Math.min(De,A.value.length);else{var Ie=A.ownerDocument||document,ve=Ie&&Ie.defaultView||window;if(ve.getSelection){var Ce=ve.getSelection(),Mt=A.textContent.length,Ft=Math.min(Q.start,Mt),ts=Q.end===void 0?Ft:Math.min(Q.end,Mt);!Ce.extend&&Ft>ts&&(v=ts,ts=Ft,Ft=v);var fe=zn(A,Ft),oe=zn(A,ts);if(fe&&oe&&(Ce.rangeCount!==1||Ce.anchorNode!==fe.node||Ce.anchorOffset!==fe.offset||Ce.focusNode!==oe.node||Ce.focusOffset!==oe.offset)){var ge=Ie.createRange();ge.setStart(fe.node,fe.offset),Ce.removeAllRanges(),Ft>ts?(Ce.addRange(ge),Ce.extend(oe.node,oe.offset)):(ge.setEnd(oe.node,oe.offset),Ce.addRange(ge))}}}}for(Ie=[],Ce=A;Ce=Ce.parentNode;)Ce.nodeType===1&&Ie.push({element:Ce,left:Ce.scrollLeft,top:Ce.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Ie.length;A++){var ze=Ie[A];ze.element.scrollLeft=ze.left,ze.element.scrollTop=ze.top}}Ou=!!vh,wh=vh=null}finally{Pn=f,ie.p=r,P.T=o}}e.current=s,go=2}}function r0(){if(go===2){go=0;var e=Wa,s=Zr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=P.T,P.T=null;var r=ie.p;ie.p=2;var f=Pn;Pn|=4;try{Lg(e,s.alternate,s)}finally{Pn=f,ie.p=r,P.T=o}}go=3}}function l0(){if(go===4||go===3){go=0,ft();var e=Wa,s=Zr,o=ja,r=Gg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?go=5:(go=0,Zr=Wa=null,c0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ya=null),Mn(o),s=s.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(ue,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=P.T,f=ie.p,ie.p=2,P.T=null;try{for(var m=e.onRecoverableError,v=0;v<r.length;v++){var A=r[v];m(A.value,{componentStack:A.stack})}}finally{P.T=s,ie.p=f}}(ja&3)!==0&&Cu(),aa(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===lh?Xl++:(Xl=0,lh=e):Xl=0,Gl(0)}}function c0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,El(s)))}function Cu(){return a0(),r0(),l0(),u0()}function u0(){if(go!==5)return!1;var e=Wa,s=ah;ah=0;var o=Mn(ja),r=P.T,f=ie.p;try{ie.p=32>o?32:o,P.T=null,o=rh,rh=null;var m=Wa,v=ja;if(go=0,Zr=Wa=null,ja=0,(Pn&6)!==0)throw Error(a(331));var A=Pn;if(Pn|=4,Wg(m.current),Ug(m,m.current,v,o),Pn=A,Gl(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(ue,m)}catch{}return!0}finally{ie.p=f,P.T=r,c0(e,s)}}function d0(e,s,o){s=Ei(o,s),s=Pf(e.stateNode,s,2),e=$a(e,s,2),e!==null&&(Ge(e,2),aa(e))}function Xn(e,s,o){if(e.tag===3)d0(e,e,o);else for(;s!==null;){if(s.tag===3){d0(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ya===null||!Ya.has(r))){e=Ei(o,e),o=fg(2),r=$a(s,o,2),r!==null&&(hg(o,r,s,e),Ge(r,2),aa(r));break}}s=s.return}}function dh(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new I2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(sh=!0,f.add(o),e=Y2.bind(null,e,s,o),s.then(e,e))}function Y2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,rs===e&&(xn&o)===o&&(Ds===4||Ds===3&&(xn&62914560)===xn&&300>dt()-yu?(Pn&2)===0&&Jr(e,0):oh|=o,Qr===xn&&(Qr=0)),aa(e)}function f0(e,s){s===0&&(s=yt()),e=cr(e,s),e!==null&&(Ge(e,s),aa(e))}function W2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),f0(e,o)}function F2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),f0(e,o)}function X2(e,s){return st(e,s)}var ku=null,tl=null,fh=!1,ju=!1,hh=!1,Xa=0;function aa(e){e!==tl&&e.next===null&&(tl===null?ku=tl=e:tl=tl.next=e),ju=!0,fh||(fh=!0,q2())}function Gl(e,s){if(!hh&&ju){hh=!0;do for(var o=!1,r=ku;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var v=r.suspendedLanes,A=r.pingedLanes;m=(1<<31-Se(42|e)+1)-1,m&=f&~(v&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,_0(r,m))}else m=xn,m=ot(r,r===rs?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||kt(r,m)||(o=!0,_0(r,m));r=r.next}while(o);hh=!1}}function G2(){h0()}function h0(){ju=fh=!1;var e=0;Xa!==0&&iv()&&(e=Xa);for(var s=dt(),o=null,r=ku;r!==null;){var f=r.next,m=m0(r,s);m===0?(r.next=null,o===null?ku=f:o.next=f,f===null&&(tl=o)):(o=r,(e!==0||(m&3)!==0)&&(ju=!0)),r=f}go!==0&&go!==5||Gl(e),Xa!==0&&(Xa=0)}function m0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-Se(m),A=1<<v,Q=f[v];Q===-1?((A&o)===0||(A&r)!==0)&&(f[v]=Bt(A,s)):Q<=s&&(e.expiredLanes|=A),m&=~A}if(s=rs,o=xn,o=ot(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&(Fn===2||Fn===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&et(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||kt(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&et(r),Mn(o)){case 2:case 8:o=Ut;break;case 32:o=it;break;case 268435456:o=te;break;default:o=it}return r=p0.bind(null,e),o=st(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&et(r),e.callbackPriority=2,e.callbackNode=null,2}function p0(e,s){if(go!==0&&go!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(Cu()&&e.callbackNode!==o)return null;var r=xn;return r=ot(e,e===rs?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Kg(e,r,s),m0(e,dt()),e.callbackNode!=null&&e.callbackNode===o?p0.bind(null,e):null)}function _0(e,s){if(Cu())return null;Kg(e,s,!0)}function q2(){rv(function(){(Pn&6)!==0?st(St,G2):h0()})}function mh(){if(Xa===0){var e=Pr;e===0&&(e=He,He<<=1,(He&261888)===0&&(He=256)),Xa=e}return Xa}function g0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Eo(""+e)}function y0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function K2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=g0((f[En]||null).action),v=r.submitter;v&&(s=(s=v[En]||null)?g0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var A=new uo("action","action",null,r,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Xa!==0){var Q=v?y0(f,v):new FormData(f);Bf(o,{pending:!0,data:Q,method:f.method,action:m},null,Q)}}else typeof m=="function"&&(A.preventDefault(),Q=v?y0(f,v):new FormData(f),Bf(o,{pending:!0,data:Q,method:f.method,action:m},m,Q))},currentTarget:f}]})}}for(var ph=0;ph<Kd.length;ph++){var _h=Kd[ph],Q2=_h.toLowerCase(),Z2=_h[0].toUpperCase()+_h.slice(1);Wi(Q2,"on"+Z2)}Wi(Yi,"onAnimationEnd"),Wi(na,"onAnimationIteration"),Wi(Pc,"onAnimationStart"),Wi("dblclick","onDoubleClick"),Wi("focusin","onFocus"),Wi("focusout","onBlur"),Wi(Xd,"onTransitionRun"),Wi(Gd,"onTransitionStart"),Wi(qd,"onTransitionCancel"),Wi(Zp,"onTransitionEnd"),Rn("onMouseEnter",["mouseout","mouseover"]),Rn("onMouseLeave",["mouseout","mouseover"]),Rn("onPointerEnter",["pointerout","pointerover"]),Rn("onPointerLeave",["pointerout","pointerover"]),kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function x0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var v=r.length-1;0<=v;v--){var A=r[v],Q=A.instance,ye=A.currentTarget;if(A=A.listener,Q!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=ye;try{m(f)}catch(De){Hc(De)}f.currentTarget=null,m=Q}else for(v=0;v<r.length;v++){if(A=r[v],Q=A.instance,ye=A.currentTarget,A=A.listener,Q!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=ye;try{m(f)}catch(De){Hc(De)}f.currentTarget=null,m=Q}}}}function _n(e,s){var o=s[Tn];o===void 0&&(o=s[Tn]=new Set);var r=e+"__bubble";o.has(r)||(b0(s,e,2,!1),o.add(r))}function gh(e,s,o){var r=0;s&&(r|=4),b0(o,e,r,s)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function yh(e){if(!e[Mu]){e[Mu]=!0,Ls.forEach(function(o){o!=="selectionchange"&&(J2.has(o)||gh(o,!1,e),gh(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Mu]||(s[Mu]=!0,gh("selectionchange",!1,s))}}function b0(e,s,o,r){switch(q0(s)){case 2:var f=Mv;break;case 8:f=Ev;break;default:f=Rh}o=f.bind(null,s,o,e),f=void 0,!zs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function xh(e,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var A=r.stateNode.containerInfo;if(A===f)break;if(v===4)for(v=r.return;v!==null;){var Q=v.tag;if((Q===3||Q===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;A!==null;){if(v=Vs(A),v===null)return;if(Q=v.tag,Q===5||Q===6||Q===26||Q===27){r=m=v;continue e}A=A.parentNode}}r=r.return}vo(function(){var ye=m,De=Ws(o),Ie=[];e:{var ve=Jp.get(e);if(ve!==void 0){var Ce=uo,Mt=e;switch(e){case"keypress":if(wo(o)===0)break e;case"keydown":case"keyup":Ce=fi;break;case"focusin":Mt="focus",Ce=Po;break;case"focusout":Mt="blur",Ce=Po;break;case"beforeblur":case"afterblur":Ce=Po;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ce=$o;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ce=ho;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ce=ke;break;case Yi:case na:case Pc:Ce=ta;break;case Zp:Ce=Xe;break;case"scroll":case"scrollend":Ce=Ms;break;case"wheel":Ce=$t;break;case"copy":case"cut":case"paste":Ce=Pi;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ce=U;break;case"toggle":case"beforetoggle":Ce=Qt}var Ft=(s&4)!==0,ts=!Ft&&(e==="scroll"||e==="scrollend"),fe=Ft?ve!==null?ve+"Capture":null:ve;Ft=[];for(var oe=ye,ge;oe!==null;){var ze=oe;if(ge=ze.stateNode,ze=ze.tag,ze!==5&&ze!==26&&ze!==27||ge===null||fe===null||(ze=cn(oe,fe),ze!=null&&Ft.push(Kl(oe,ze,ge))),ts)break;oe=oe.return}0<Ft.length&&(ve=new Ce(ve,Mt,null,o,De),Ie.push({event:ve,listeners:Ft}))}}if((s&7)===0){e:{if(ve=e==="mouseover"||e==="pointerover",Ce=e==="mouseout"||e==="pointerout",ve&&o!==Fo&&(Mt=o.relatedTarget||o.fromElement)&&(Vs(Mt)||Mt[at]))break e;if((Ce||ve)&&(ve=De.window===De?De:(ve=De.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ce?(Mt=o.relatedTarget||o.toElement,Ce=ye,Mt=Mt?Vs(Mt):null,Mt!==null&&(ts=u(Mt),Ft=Mt.tag,Mt!==ts||Ft!==5&&Ft!==27&&Ft!==6)&&(Mt=null)):(Ce=null,Mt=ye),Ce!==Mt)){if(Ft=$o,ze="onMouseLeave",fe="onMouseEnter",oe="mouse",(e==="pointerout"||e==="pointerover")&&(Ft=U,ze="onPointerLeave",fe="onPointerEnter",oe="pointer"),ts=Ce==null?ve:so(Ce),ge=Mt==null?ve:so(Mt),ve=new Ft(ze,oe+"leave",Ce,o,De),ve.target=ts,ve.relatedTarget=ge,ze=null,Vs(De)===ye&&(Ft=new Ft(fe,oe+"enter",Mt,o,De),Ft.target=ge,Ft.relatedTarget=ts,ze=Ft),ts=ze,Ce&&Mt)t:{for(Ft=ev,fe=Ce,oe=Mt,ge=0,ze=fe;ze;ze=Ft(ze))ge++;ze=0;for(var zt=oe;zt;zt=Ft(zt))ze++;for(;0<ge-ze;)fe=Ft(fe),ge--;for(;0<ze-ge;)oe=Ft(oe),ze--;for(;ge--;){if(fe===oe||oe!==null&&fe===oe.alternate){Ft=fe;break t}fe=Ft(fe),oe=Ft(oe)}Ft=null}else Ft=null;Ce!==null&&v0(Ie,ve,Ce,Ft,!1),Mt!==null&&ts!==null&&v0(Ie,ts,Mt,Ft,!0)}}e:{if(ve=ye?so(ye):window,Ce=ve.nodeName&&ve.nodeName.toLowerCase(),Ce==="select"||Ce==="input"&&ve.type==="file")var Nn=C;else if(B(ve))if(N)Nn=pt;else{Nn=qe;var At=Le}else Ce=ve.nodeName,!Ce||Ce.toLowerCase()!=="input"||ve.type!=="checkbox"&&ve.type!=="radio"?ye&&Ts(ye.elementType)&&(Nn=C):Nn=tt;if(Nn&&(Nn=Nn(e,ye))){X(Ie,Nn,o,De);break e}At&&At(e,ve,ye),e==="focusout"&&ye&&ve.type==="number"&&ye.memoizedProps.value!=null&&xo(ve,"number",ve.value)}switch(At=ye?so(ye):window,e){case"focusin":(B(At)||At.contentEditable==="true")&&(Rt=At,In=ye,yn=null);break;case"focusout":yn=In=Rt=null;break;case"mousedown":_o=!0;break;case"contextmenu":case"mouseup":case"dragend":_o=!1,Ho(Ie,o,De);break;case"selectionchange":if(vt)break;case"keydown":case"keyup":Ho(Ie,o,De)}var an;if(gn)e:{switch(e){case"compositionstart":var bn="onCompositionStart";break e;case"compositionend":bn="onCompositionEnd";break e;case"compositionupdate":bn="onCompositionUpdate";break e}bn=void 0}else Gs?ys(e,o)&&(bn="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(bn="onCompositionStart");bn&&(Wt&&o.locale!=="ko"&&(Gs||bn!=="onCompositionStart"?bn==="onCompositionEnd"&&Gs&&(an=Ao()):(js=De,zo="value"in js?js.value:js.textContent,Gs=!0)),At=Eu(ye,bn),0<At.length&&(bn=new Nt(bn,e,null,o,De),Ie.push({event:bn,listeners:At}),an?bn.data=an:(an=mo(o),an!==null&&(bn.data=an)))),(an=$s?Is(e,o):qs(e,o))&&(bn=Eu(ye,"onBeforeInput"),0<bn.length&&(At=new Nt("onBeforeInput","beforeinput",null,o,De),Ie.push({event:At,listeners:bn}),At.data=an)),K2(Ie,e,ye,o,De)}x0(Ie,s)})}function Kl(e,s,o){return{instance:e,listener:s,currentTarget:o}}function Eu(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=cn(e,o),f!=null&&r.unshift(Kl(e,f,m)),f=cn(e,s),f!=null&&r.push(Kl(e,f,m))),e.tag===3)return r;e=e.return}return[]}function ev(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function v0(e,s,o,r,f){for(var m=s._reactName,v=[];o!==null&&o!==r;){var A=o,Q=A.alternate,ye=A.stateNode;if(A=A.tag,Q!==null&&Q===r)break;A!==5&&A!==26&&A!==27||ye===null||(Q=ye,f?(ye=cn(o,m),ye!=null&&v.unshift(Kl(o,ye,Q))):f||(ye=cn(o,m),ye!=null&&v.push(Kl(o,ye,Q)))),o=o.return}v.length!==0&&e.push({event:s,listeners:v})}var tv=/\r\n?/g,nv=/\u0000|\uFFFD/g;function w0(e){return(typeof e=="string"?e:""+e).replace(tv,`
`).replace(nv,"")}function S0(e,s){return s=w0(s),w0(e)===s}function es(e,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||Mo(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&Mo(e,""+r);break;case"className":fn(e,"class",r);break;case"tabIndex":fn(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":fn(e,o,r);break;case"style":lo(e,r,m);break;case"data":if(s!=="object"){fn(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Eo(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&es(e,s,"name",f.name,f,null),es(e,s,"formEncType",f.formEncType,f,null),es(e,s,"formMethod",f.formMethod,f,null),es(e,s,"formTarget",f.formTarget,f,null)):(es(e,s,"encType",f.encType,f,null),es(e,s,"method",f.method,f,null),es(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Eo(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=Os);break;case"onScroll":r!=null&&_n("scroll",e);break;case"onScrollEnd":r!=null&&_n("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=Eo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":_n("beforetoggle",e),_n("toggle",e),io(e,"popover",r);break;case"xlinkActuate":rn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":io(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Wo.get(o)||o,io(e,o,r))}}function bh(e,s,o,r,f,m){switch(o){case"style":lo(e,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?Mo(e,r):(typeof r=="number"||typeof r=="bigint")&&Mo(e,""+r);break;case"onScroll":r!=null&&_n("scroll",e);break;case"onScrollEnd":r!=null&&_n("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Os);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!jo.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[En]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):io(e,o,r)}}}function Bo(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_n("error",e),_n("load",e);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:es(e,s,m,v,o,null)}}f&&es(e,s,"srcSet",o.srcSet,o,null),r&&es(e,s,"src",o.src,o,null);return;case"input":_n("invalid",e);var A=m=v=f=null,Q=null,ye=null;for(r in o)if(o.hasOwnProperty(r)){var De=o[r];if(De!=null)switch(r){case"name":f=De;break;case"type":v=De;break;case"checked":Q=De;break;case"defaultChecked":ye=De;break;case"value":m=De;break;case"defaultValue":A=De;break;case"children":case"dangerouslySetInnerHTML":if(De!=null)throw Error(a(137,s));break;default:es(e,s,r,De,o,null)}}Ln(e,m,A,Q,ye,v,f,!1);return;case"select":_n("invalid",e),r=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":v=A;break;case"multiple":r=A;default:es(e,s,f,A,o,null)}s=m,o=v,e.multiple=!!r,s!=null?_s(e,!!r,s,!1):o!=null&&_s(e,!!r,o,!0);return;case"textarea":_n("invalid",e),m=f=r=null;for(v in o)if(o.hasOwnProperty(v)&&(A=o[v],A!=null))switch(v){case"value":r=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:es(e,s,v,A,o,null)}Ys(e,r,f,m);return;case"option":for(Q in o)if(o.hasOwnProperty(Q)&&(r=o[Q],r!=null))switch(Q){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:es(e,s,Q,r,o,null)}return;case"dialog":_n("beforetoggle",e),_n("toggle",e),_n("cancel",e),_n("close",e);break;case"iframe":case"object":_n("load",e);break;case"video":case"audio":for(r=0;r<ql.length;r++)_n(ql[r],e);break;case"image":_n("error",e),_n("load",e);break;case"details":_n("toggle",e);break;case"embed":case"source":case"link":_n("error",e),_n("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ye in o)if(o.hasOwnProperty(ye)&&(r=o[ye],r!=null))switch(ye){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:es(e,s,ye,r,o,null)}return;default:if(Ts(s)){for(De in o)o.hasOwnProperty(De)&&(r=o[De],r!==void 0&&bh(e,s,De,r,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(r=o[A],r!=null&&es(e,s,A,r,o,null))}function sv(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,A=null,Q=null,ye=null,De=null;for(Ce in o){var Ie=o[Ce];if(o.hasOwnProperty(Ce)&&Ie!=null)switch(Ce){case"checked":break;case"value":break;case"defaultValue":Q=Ie;default:r.hasOwnProperty(Ce)||es(e,s,Ce,null,r,Ie)}}for(var ve in r){var Ce=r[ve];if(Ie=o[ve],r.hasOwnProperty(ve)&&(Ce!=null||Ie!=null))switch(ve){case"type":m=Ce;break;case"name":f=Ce;break;case"checked":ye=Ce;break;case"defaultChecked":De=Ce;break;case"value":v=Ce;break;case"defaultValue":A=Ce;break;case"children":case"dangerouslySetInnerHTML":if(Ce!=null)throw Error(a(137,s));break;default:Ce!==Ie&&es(e,s,ve,Ce,r,Ie)}}ro(e,v,A,Q,ye,De,m,f);return;case"select":Ce=v=A=ve=null;for(m in o)if(Q=o[m],o.hasOwnProperty(m)&&Q!=null)switch(m){case"value":break;case"multiple":Ce=Q;default:r.hasOwnProperty(m)||es(e,s,m,null,r,Q)}for(f in r)if(m=r[f],Q=o[f],r.hasOwnProperty(f)&&(m!=null||Q!=null))switch(f){case"value":ve=m;break;case"defaultValue":A=m;break;case"multiple":v=m;default:m!==Q&&es(e,s,f,m,r,Q)}s=A,o=v,r=Ce,ve!=null?_s(e,!!o,ve,!1):!!r!=!!o&&(s!=null?_s(e,!!o,s,!0):_s(e,!!o,o?[]:"",!1));return;case"textarea":Ce=ve=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:es(e,s,A,null,r,f)}for(v in r)if(f=r[v],m=o[v],r.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":ve=f;break;case"defaultValue":Ce=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&es(e,s,v,f,r,m)}Qn(e,ve,Ce);return;case"option":for(var Mt in o)if(ve=o[Mt],o.hasOwnProperty(Mt)&&ve!=null&&!r.hasOwnProperty(Mt))switch(Mt){case"selected":e.selected=!1;break;default:es(e,s,Mt,null,r,ve)}for(Q in r)if(ve=r[Q],Ce=o[Q],r.hasOwnProperty(Q)&&ve!==Ce&&(ve!=null||Ce!=null))switch(Q){case"selected":e.selected=ve&&typeof ve!="function"&&typeof ve!="symbol";break;default:es(e,s,Q,ve,r,Ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ft in o)ve=o[Ft],o.hasOwnProperty(Ft)&&ve!=null&&!r.hasOwnProperty(Ft)&&es(e,s,Ft,null,r,ve);for(ye in r)if(ve=r[ye],Ce=o[ye],r.hasOwnProperty(ye)&&ve!==Ce&&(ve!=null||Ce!=null))switch(ye){case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,s));break;default:es(e,s,ye,ve,r,Ce)}return;default:if(Ts(s)){for(var ts in o)ve=o[ts],o.hasOwnProperty(ts)&&ve!==void 0&&!r.hasOwnProperty(ts)&&bh(e,s,ts,void 0,r,ve);for(De in r)ve=r[De],Ce=o[De],!r.hasOwnProperty(De)||ve===Ce||ve===void 0&&Ce===void 0||bh(e,s,De,ve,r,Ce);return}}for(var fe in o)ve=o[fe],o.hasOwnProperty(fe)&&ve!=null&&!r.hasOwnProperty(fe)&&es(e,s,fe,null,r,ve);for(Ie in r)ve=r[Ie],Ce=o[Ie],!r.hasOwnProperty(Ie)||ve===Ce||ve==null&&Ce==null||es(e,s,Ie,ve,r,Ce)}function C0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ov(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,v=f.initiatorType,A=f.duration;if(m&&A&&C0(v)){for(v=0,A=f.responseEnd,r+=1;r<o.length;r++){var Q=o[r],ye=Q.startTime;if(ye>A)break;var De=Q.transferSize,Ie=Q.initiatorType;De&&C0(Ie)&&(Q=Q.responseEnd,v+=De*(Q<A?1:(A-ye)/(Q-ye)))}if(--r,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var vh=null,wh=null;function Tu(e){return e.nodeType===9?e:e.ownerDocument}function k0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function j0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function Sh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Ch=null;function iv(){var e=window.event;return e&&e.type==="popstate"?e===Ch?!1:(Ch=e,!0):(Ch=null,!1)}var M0=typeof setTimeout=="function"?setTimeout:void 0,av=typeof clearTimeout=="function"?clearTimeout:void 0,E0=typeof Promise=="function"?Promise:void 0,rv=typeof queueMicrotask=="function"?queueMicrotask:typeof E0<"u"?function(e){return E0.resolve(null).then(e).catch(lv)}:M0;function lv(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function T0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),il(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")Ql(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Ql(o);for(var m=o.firstChild;m;){var v=m.nextSibling,A=m.nodeName;m[cs]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&Ql(e.ownerDocument.body);o=f}while(o);il(s)}function A0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function kh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":kh(o),us(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function cv(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[cs])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ri(e.nextSibling),e===null)break}return null}function uv(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Ri(e.nextSibling),e===null))return null;return e}function N0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ri(e.nextSibling),e===null))return null;return e}function jh(e){return e.data==="$?"||e.data==="$~"}function Mh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function dv(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ri(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var Eh=null;function D0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return Ri(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function R0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function B0(e,s,o){switch(s=Tu(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ql(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);us(e)}var Bi=new Map,L0=new Set;function Au(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ma=ie.d;ie.d={f:fv,r:hv,D:mv,C:pv,L:_v,m:gv,X:xv,S:yv,M:bv};function fv(){var e=Ma.f(),s=vu();return e||s}function hv(e){var s=no(e);s!==null&&s.tag===5&&s.type==="form"?Z_(s):Ma.r(e)}var nl=typeof document>"u"?null:document;function O0(e,s,o){var r=nl;if(r&&typeof s=="string"&&s){var f=vs(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),L0.has(f)||(L0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),Bo(s,"link",e),Un(s),r.head.appendChild(s)))}}function mv(e){Ma.D(e),O0("dns-prefetch",e,null)}function pv(e,s){Ma.C(e,s),O0("preconnect",e,s)}function _v(e,s,o){Ma.L(e,s,o);var r=nl;if(r&&e&&s){var f='link[rel="preload"][as="'+vs(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+vs(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+vs(o.imageSizes)+'"]')):f+='[href="'+vs(e)+'"]';var m=f;switch(s){case"style":m=sl(e);break;case"script":m=ol(e)}Bi.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),Bi.set(m,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(Zl(m))||s==="script"&&r.querySelector(Jl(m))||(s=r.createElement("link"),Bo(s,"link",e),Un(s),r.head.appendChild(s)))}}function gv(e,s){Ma.m(e,s);var o=nl;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+vs(r)+'"][href="'+vs(e)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ol(e)}if(!Bi.has(m)&&(e=x({rel:"modulepreload",href:e},s),Bi.set(m,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Jl(m)))return}r=o.createElement("link"),Bo(r,"link",e),Un(r),o.head.appendChild(r)}}}function yv(e,s,o){Ma.S(e,s,o);var r=nl;if(r&&e){var f=ds(r).hoistableStyles,m=sl(e);s=s||"default";var v=f.get(m);if(!v){var A={loading:0,preload:null};if(v=r.querySelector(Zl(m)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=Bi.get(m))&&Th(e,o);var Q=v=r.createElement("link");Un(Q),Bo(Q,"link",e),Q._p=new Promise(function(ye,De){Q.onload=ye,Q.onerror=De}),Q.addEventListener("load",function(){A.loading|=1}),Q.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Nu(v,s,r)}v={type:"stylesheet",instance:v,count:1,state:A},f.set(m,v)}}}function xv(e,s){Ma.X(e,s);var o=nl;if(o&&e){var r=ds(o).hoistableScripts,f=ol(e),m=r.get(f);m||(m=o.querySelector(Jl(f)),m||(e=x({src:e,async:!0},s),(s=Bi.get(f))&&Ah(e,s),m=o.createElement("script"),Un(m),Bo(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function bv(e,s){Ma.M(e,s);var o=nl;if(o&&e){var r=ds(o).hoistableScripts,f=ol(e),m=r.get(f);m||(m=o.querySelector(Jl(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=Bi.get(f))&&Ah(e,s),m=o.createElement("script"),Un(m),Bo(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function z0(e,s,o,r){var f=(f=Re.current)?Au(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=sl(o.href),o=ds(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=sl(o.href);var m=ds(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(Zl(e)))&&!m._p&&(v.instance=m,v.state.loading=5),Bi.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Bi.set(e,o),m||vv(f,e,o,v.state))),s&&r===null)throw Error(a(528,""));return v}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=ol(o),o=ds(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function sl(e){return'href="'+vs(e)+'"'}function Zl(e){return'link[rel="stylesheet"]['+e+"]"}function $0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function vv(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),Bo(s,"link",o),Un(s),e.head.appendChild(s))}function ol(e){return'[src="'+vs(e)+'"]'}function Jl(e){return"script[async]"+e}function I0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+vs(o.href)+'"]');if(r)return s.instance=r,Un(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Un(r),Bo(r,"style",f),Nu(r,o.precedence,e),s.instance=r;case"stylesheet":f=sl(o.href);var m=e.querySelector(Zl(f));if(m)return s.state.loading|=4,s.instance=m,Un(m),m;r=$0(o),(f=Bi.get(f))&&Th(r,f),m=(e.ownerDocument||e).createElement("link"),Un(m);var v=m;return v._p=new Promise(function(A,Q){v.onload=A,v.onerror=Q}),Bo(m,"link",r),s.state.loading|=4,Nu(m,o.precedence,e),s.instance=m;case"script":return m=ol(o.src),(f=e.querySelector(Jl(m)))?(s.instance=f,Un(f),f):(r=o,(f=Bi.get(m))&&(r=x({},o),Ah(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),Un(f),Bo(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Nu(r,o.precedence,e));return s.instance}function Nu(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,v=0;v<r.length;v++){var A=r[v];if(A.dataset.precedence===s)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function Th(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Ah(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Du=null;function P0(e,s,o){if(Du===null){var r=new Map,f=Du=new Map;f.set(o,r)}else f=Du,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[cs]||m[Gt]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var A=r.get(v);A?A.push(m):r.set(v,[m])}}return r}function H0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function wv(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function U0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Sv(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=sl(r.href),m=s.querySelector(Zl(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Ru.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,Un(m);return}m=s.ownerDocument||s,r=$0(r),(f=Bi.get(f))&&Th(r,f),m=m.createElement("link"),Un(m);var v=m;v._p=new Promise(function(A,Q){v.onload=A,v.onerror=Q}),Bo(m,"link",r),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Ru.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Nh=0;function Cv(e,s){return e.stylesheets&&e.count===0&&Lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Nh===0&&(Nh=62500*ov());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Nh?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bu=null;function Lu(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bu=new Map,s.forEach(kv,e),Bu=null,Ru.call(e))}function kv(e,s){if(!(s.state.loading&4)){var o=Bu.get(e);if(o)var r=o.get(null);else{o=new Map,Bu.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),r=v)}r&&o.set(null,r)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||r,m===r&&o.set(null,f),o.set(v,f),this.count++,r=Ru.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var ec={$$typeof:O,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function jv(e,s,o,r,f,m,v,A,Q){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mt(0),this.hiddenUpdates=mt(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Q,this.incompleteTransitions=new Map}function V0(e,s,o,r,f,m,v,A,Q,ye,De,Ie){return e=new jv(e,s,o,v,Q,ye,De,Ie,A),s=1,m===!0&&(s|=24),m=hi(3,null,null,s),e.current=m,m.stateNode=e,s=uf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},mf(m),e}function Y0(e){return e?(e=Lr,e):Lr}function W0(e,s,o,r,f,m){f=Y0(f),r.context===null?r.context=f:r.pendingContext=f,r=za(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=$a(e,r,s),o!==null&&(li(o,e,s),Dl(o,e,s))}function F0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Dh(e,s){F0(e,s),(e=e.alternate)&&F0(e,s)}function X0(e){if(e.tag===13||e.tag===31){var s=cr(e,67108864);s!==null&&li(s,e,67108864),Dh(e,67108864)}}function G0(e){if(e.tag===13||e.tag===31){var s=yi();s=qn(s);var o=cr(e,s);o!==null&&li(o,e,s),Dh(e,s)}}var Ou=!0;function Mv(e,s,o,r){var f=P.T;P.T=null;var m=ie.p;try{ie.p=2,Rh(e,s,o,r)}finally{ie.p=m,P.T=f}}function Ev(e,s,o,r){var f=P.T;P.T=null;var m=ie.p;try{ie.p=8,Rh(e,s,o,r)}finally{ie.p=m,P.T=f}}function Rh(e,s,o,r){if(Ou){var f=Bh(r);if(f===null)xh(e,s,r,zu,o),K0(e,r);else if(Av(f,e,s,o,r))r.stopPropagation();else if(K0(e,r),s&4&&-1<Tv.indexOf(e)){for(;f!==null;){var m=no(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=It(m.pendingLanes);if(v!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var Q=1<<31-Se(v);A.entanglements[1]|=Q,v&=~Q}aa(m),(Pn&6)===0&&(xu=dt()+500,Gl(0))}}break;case 31:case 13:A=cr(m,2),A!==null&&li(A,m,2),vu(),Dh(m,2)}if(m=Bh(r),m===null&&xh(e,s,r,zu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else xh(e,s,r,null,o)}}function Bh(e){return e=Ws(e),Lh(e)}var zu=null;function Lh(e){if(zu=null,e=Vs(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return zu=e,null}function q0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wt()){case St:return 2;case Ut:return 8;case it:case H:return 32;case te:return 268435456;default:return 32}default:return 32}}var Oh=!1,qa=null,Ka=null,Qa=null,tc=new Map,nc=new Map,Za=[],Tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K0(e,s){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":tc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":nc.delete(s.pointerId)}}function sc(e,s,o,r,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=no(s),s!==null&&X0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function Av(e,s,o,r,f){switch(s){case"focusin":return qa=sc(qa,e,s,o,r,f),!0;case"dragenter":return Ka=sc(Ka,e,s,o,r,f),!0;case"mouseover":return Qa=sc(Qa,e,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return tc.set(m,sc(tc.get(m)||null,e,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,nc.set(m,sc(nc.get(m)||null,e,s,o,r,f)),!0}return!1}function Q0(e){var s=Vs(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,vn(e.priority,function(){G0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,vn(e.priority,function(){G0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $u(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Bh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);Fo=r,o.target.dispatchEvent(r),Fo=null}else return s=no(o),s!==null&&X0(s),e.blockedOn=o,!1;s.shift()}return!0}function Z0(e,s,o){$u(e)&&o.delete(s)}function Nv(){Oh=!1,qa!==null&&$u(qa)&&(qa=null),Ka!==null&&$u(Ka)&&(Ka=null),Qa!==null&&$u(Qa)&&(Qa=null),tc.forEach(Z0),nc.forEach(Z0)}function Iu(e,s){e.blockedOn===s&&(e.blockedOn=null,Oh||(Oh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Nv)))}var Pu=null;function J0(e){Pu!==e&&(Pu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Pu===e&&(Pu=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if(Lh(r||o)===null)continue;break}var m=no(o);m!==null&&(e.splice(s,3),s-=3,Bf(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function il(e){function s(Q){return Iu(Q,e)}qa!==null&&Iu(qa,e),Ka!==null&&Iu(Ka,e),Qa!==null&&Iu(Qa,e),tc.forEach(s),nc.forEach(s);for(var o=0;o<Za.length;o++){var r=Za[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Za.length&&(o=Za[0],o.blockedOn===null);)Q0(o),o.blockedOn===null&&Za.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],v=f[En]||null;if(typeof m=="function")v||J0(o);else if(v){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[En]||null)A=v.formAction;else if(Lh(f)!==null)continue}else A=v.action;typeof A=="function"?o[r+1]=A:(o.splice(r,3),r-=3),J0(o)}}}function ey(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function zh(e){this._internalRoot=e}Hu.prototype.render=zh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=yi();W0(o,r,e,s,null,null)},Hu.prototype.unmount=zh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;W0(e.current,2,null,e,null,null),vu(),s[at]=null}};function Hu(e){this._internalRoot=e}Hu.prototype.unstable_scheduleHydration=function(e){if(e){var s=Sn();e={blockedOn:null,target:e,priority:s};for(var o=0;o<Za.length&&s!==0&&s<Za[o].priority;o++);Za.splice(o,0,e),o===0&&Q0(e)}};var ty=n.version;if(ty!=="19.2.4")throw Error(a(527,ty,"19.2.4"));ie.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=y(s),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Dv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{ue=Uu.inject(Dv),Ee=Uu}catch{}}return ic.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=lg,m=cg,v=ug;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=V0(e,1,!1,null,null,o,r,null,f,m,v,ey),e[at]=s.current,yh(e),new zh(s)},ic.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",m=lg,v=cg,A=ug,Q=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.formState!==void 0&&(Q=o.formState)),s=V0(e,1,!0,s,o!=null?o:null,r,f,Q,m,v,A,ey),s.context=Y0(null),o=s.current,r=yi(),r=qn(r),f=za(r),f.callback=null,$a(o,f,r),o=r,s.current.lanes=o,Ge(s,o),aa(s),e[at]=s.current,yh(e),new Hu(s)},ic.version="19.2.4",ic}var dy;function Hv(){if(dy)return Ih.exports;dy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Ih.exports=Pv(),Ih.exports}var Uv=Hv();const Vv=$x(Uv);var _=dp();const Yv=$x(_);function Wv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Fv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var pd;const $i="__TAURI_TO_IPC_KEY__";function Xv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function Me(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Gv{get rid(){return Wv(this,pd,"f")}constructor(n){pd.set(this,void 0),Fv(this,pd,n)}async close(){return Me("plugin:resources|close",{rid:this.rid})}}pd=new WeakMap;var xi;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(xi||(xi={}));async function Px(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await Me("plugin:event|unlisten",{event:t,eventId:n})}async function yc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return Me("plugin:event|listen",{event:t,target:c,handler:Xv(n)}).then(u=>async()=>Px(t,u))}async function qv(t,n,i){return yc(t,a=>{Px(t,a.id),n(a)},i)}async function Kv(t,n){await Me("plugin:event|emit",{event:t,payload:n})}async function Qv(t,n,i){await Me("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class Hx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new xc(this.width*n,this.height*n)}[$i](){return{width:this.width,height:this.height}}toJSON(){return this[$i]()}}class xc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Hx(this.width/n,this.height/n)}[$i](){return{width:this.width,height:this.height}}toJSON(){return this[$i]()}}class al{constructor(n){this.size=n}toLogical(n){return this.size instanceof Hx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof xc?this.size:this.size.toPhysical(n)}[$i](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[$i]()}}class Ux{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new or(this.x*n,this.y*n)}[$i](){return{x:this.x,y:this.y}}toJSON(){return this[$i]()}}class or{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Ux(this.x/n,this.y/n)}[$i](){return{x:this.x,y:this.y}}toJSON(){return this[$i]()}}class Vu{constructor(n){this.position=n}toLogical(n){return this.position instanceof Ux?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof or?this.position:this.position.toPhysical(n)}[$i](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[$i]()}}class bc extends Gv{constructor(n){super(n)}static async new(n,i,a){return Me("plugin:image|new",{rgba:jd(n),width:i,height:a}).then(c=>new bc(c))}static async fromBytes(n){return Me("plugin:image|from_bytes",{bytes:jd(n)}).then(i=>new bc(i))}static async fromPath(n){return Me("plugin:image|from_path",{path:n}).then(i=>new bc(i))}async rgba(){return Me("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return Me("plugin:image|size",{rid:this.rid})}}function jd(t){return t==null?null:typeof t=="string"?t:t instanceof bc?t.rid:t}var Tm;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(Tm||(Tm={}));class Zv{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var fy;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(fy||(fy={}));function fp(){return new Vx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Yh(){return Me("plugin:window|get_all_windows").then(t=>t.map(n=>new Vx(n,{skip:!0})))}const Wh=["tauri://created","tauri://error"];class Vx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||Me("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Yh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return fp()}static async getAll(){return Yh()}static async getFocusedWindow(){for(const n of await Yh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:yc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:qv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Wh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Kv(n,i)}async emitTo(n,i,a){if(Wh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return Qv(n,i,a)}_handleTauriEvent(n,i){return Wh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return Me("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return Me("plugin:window|inner_position",{label:this.label}).then(n=>new or(n))}async outerPosition(){return Me("plugin:window|outer_position",{label:this.label}).then(n=>new or(n))}async innerSize(){return Me("plugin:window|inner_size",{label:this.label}).then(n=>new xc(n))}async outerSize(){return Me("plugin:window|outer_size",{label:this.label}).then(n=>new xc(n))}async isFullscreen(){return Me("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return Me("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return Me("plugin:window|is_maximized",{label:this.label})}async isFocused(){return Me("plugin:window|is_focused",{label:this.label})}async isDecorated(){return Me("plugin:window|is_decorated",{label:this.label})}async isResizable(){return Me("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return Me("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return Me("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return Me("plugin:window|is_closable",{label:this.label})}async isVisible(){return Me("plugin:window|is_visible",{label:this.label})}async title(){return Me("plugin:window|title",{label:this.label})}async theme(){return Me("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return Me("plugin:window|is_always_on_top",{label:this.label})}async center(){return Me("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===Tm.Critical?i={type:"Critical"}:i={type:"Informational"}),Me("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return Me("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return Me("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return Me("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return Me("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return Me("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return Me("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return Me("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return Me("plugin:window|maximize",{label:this.label})}async unmaximize(){return Me("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return Me("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return Me("plugin:window|minimize",{label:this.label})}async unminimize(){return Me("plugin:window|unminimize",{label:this.label})}async show(){return Me("plugin:window|show",{label:this.label})}async hide(){return Me("plugin:window|hide",{label:this.label})}async close(){return Me("plugin:window|close",{label:this.label})}async destroy(){return Me("plugin:window|destroy",{label:this.label})}async setDecorations(n){return Me("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return Me("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return Me("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return Me("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return Me("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return Me("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return Me("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return Me("plugin:window|set_size",{label:this.label,value:n instanceof al?n:new al(n)})}async setMinSize(n){return Me("plugin:window|set_min_size",{label:this.label,value:n instanceof al?n:n?new al(n):null})}async setMaxSize(n){return Me("plugin:window|set_max_size",{label:this.label,value:n instanceof al?n:n?new al(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return Me("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return Me("plugin:window|set_position",{label:this.label,value:n instanceof Vu?n:new Vu(n)})}async setFullscreen(n){return Me("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return Me("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return Me("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return Me("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return Me("plugin:window|set_icon",{label:this.label,value:jd(n)})}async setSkipTaskbar(n){return Me("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return Me("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return Me("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return Me("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return Me("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return Me("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Vu?n:new Vu(n)})}async setIgnoreCursorEvents(n){return Me("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return Me("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return Me("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return Me("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return Me("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return Me("plugin:window|set_overlay_icon",{label:this.label,value:n?jd(n):void 0})}async setProgressBar(n){return Me("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return Me("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return Me("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return Me("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(xi.WINDOW_RESIZED,i=>{i.payload=new xc(i.payload),n(i)})}async onMoved(n){return this.listen(xi.WINDOW_MOVED,i=>{i.payload=new or(i.payload),n(i)})}async onCloseRequested(n){return this.listen(xi.WINDOW_CLOSE_REQUESTED,async i=>{const a=new Zv(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(xi.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new or(d.payload.position)}})}),a=await this.listen(xi.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new or(d.payload.position)}})}),c=await this.listen(xi.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new or(d.payload.position)}})}),u=await this.listen(xi.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(xi.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(xi.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(xi.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(xi.WINDOW_THEME_CHANGED,n)}}var hy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(hy||(hy={}));var my;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(my||(my={}));var py;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(py||(py={}));var _y;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(_y||(_y={}));async function Jv(t={}){return typeof t=="object"&&Object.freeze(t),await Me("plugin:dialog|open",{options:t})}/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=(...t)=>t.filter((n,i,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===i).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,i,a)=>a?a.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=t=>{const n=tw(t);return n.charAt(0).toUpperCase()+n.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=t=>{for(const n in t)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=_.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:u,iconNode:d,...h},p)=>_.createElement("svg",{ref:p,...nw,width:n,height:n,stroke:t,strokeWidth:a?Number(i)*24/Number(n):i,className:Yx("lucide",c),...!u&&!sw(h)&&{"aria-hidden":"true"},...h},[...d.map(([y,g])=>_.createElement(y,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=(t,n)=>{const i=_.forwardRef(({className:a,...c},u)=>_.createElement(ow,{ref:u,iconNode:n,className:Yx(`lucide-${ew(gy(t))}`,`lucide-${t}`,a),...c}));return i.displayName=gy(t),i};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Wx=ea("chevron-down",iw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],rw=ea("chevron-right",aw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],cw=ea("chevron-up",lw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],dw=ea("ellipsis",uw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],hw=ea("folder-git-2",fw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],Fx=ea("git-branch-plus",mw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],_w=ea("git-commit-horizontal",pw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],yw=ea("git-merge",gw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],bw=ea("panel-left-close",xw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],ww=ea("panel-left-open",vw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Cw=ea("search",Sw),kw=3.7,Yu=200,Am=240,fs=540,Rs=176,Fh=32,vl=20,jw=Am/2,rl=fs+jw,Ea=18,Ta=18,Xh="#E6E6E6";function yy(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function Mr(t,n){var a,c,u;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,parentShas:"parentShas"in n?(a=n.parentShas)!=null?a:[]:n.parentSha?[n.parentSha]:[],childShas:"childShas"in n?(c=n.childShas)!=null?c:[]:[],clusterKey:"clusterKey"in n&&(u=n.clusterKey)!=null?u:null,kind:n.kind}}function Aa(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function _c(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:Aa(t).localeCompare(Aa(n))}function Xx(t){return[...t].sort(_c)}function Mw(t){var h,p,y,g,x,b;if(t.length<=1)return[...t];const n=new Map(t.map(S=>[Aa(S),S])),i=new Map,a=new Map;t.forEach(S=>i.set(Aa(S),0));for(const S of t){const k=((h=S.parentShas)!=null?h:[]).length>0?(p=S.parentShas)!=null?p:[]:S.parentSha?[S.parentSha]:[];for(const j of k){if(!j||!n.has(j))continue;const E=Aa(S);i.set(E,((y=i.get(E))!=null?y:0)+1);const T=(g=a.get(j))!=null?g:[];T.push(S),a.set(j,T)}}for(const S of a.values())S.sort(_c);const c=t.filter(S=>{var k;return((k=i.get(Aa(S)))!=null?k:0)===0}).sort(_c),u=[],d=new Set;for(;c.length>0;){const S=c.shift(),k=Aa(S);if(!d.has(k)){d.add(k),u.push(S);for(const j of(x=a.get(k))!=null?x:[]){const E=Aa(j),T=((b=i.get(E))!=null?b:0)-1;i.set(E,T),T===0&&c.push(j)}c.sort(_c)}}return u.length===t.length?u:[...u,...t.filter(S=>!d.has(Aa(S))).sort(_c)]}function Gx(t,n){var i;return Xx(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function qx(t,n,i){return Gx(t,i)}function Gh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function Ew(t,n){var u,d;if(!n||t.length===0)return Gh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Gh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const y=i-p;(!a||y<a.delta)&&(a={delta:y,commit:h})}else{const y=p-i;(!c||y<c.delta)&&(c={delta:y,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Gh(t)}function Wu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function Tw(t,n,i){var g,x,b,S,k,j,E;const a=qx(t,i,n);if(a.length===0)return null;const c=a.map(T=>Mr(t,T)),u=new Set(c.map(T=>T.id)),d=(x=(g=c[0])==null?void 0:g.parentSha)!=null?x:null,h=(S=(b=c.find(T=>T.kind==="branch-created"))==null?void 0:b.id)!=null?S:null,p=(k=c[0])==null?void 0:k.date,y=c.find(T=>h&&T.id===h||d&&T.id===d?!0:!T.parentSha||!u.has(T.parentSha));return y||((E=(j=Ew(c,p!=null?p:void 0))!=null?j:c[0])!=null?E:null)}function Aw(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Gx(t.name,i);if(a.length>0){const y=a.map(b=>Mr(t.name,b)),g=new Set(y.map(b=>b.id)),x=(u=(c=y.find(b=>!b.parentSha||!g.has(b.parentSha)))!=null?c:y[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function hp(t,n,i={},a={}){var ae,re,Ae,We;const u=new Map(t.map(ne=>[ne.name,ne])),d=new Map,h=new Map;for(const ne of t){const P=((ae=i[ne.name])!=null?ae:[]).filter(ie=>ie.kind!=="branch-created").map(ie=>new Date(ie.date).getTime()).filter(ie=>Number.isFinite(ie)).sort((ie,F)=>ie-F)[0];P!=null&&h.set(ne.name,P)}const p=ne=>{const pe=h.get(ne.name);return pe!=null?pe:yy(ne).start},y=ne=>{var P;const pe=(P=a[ne.name])!=null?P:null;return pe&&pe!==ne.name&&(pe===n||u.has(pe))?pe:ne.name===n?null:ne.parentBranch&&ne.parentBranch!==ne.name&&(ne.parentBranch===n||u.has(ne.parentBranch))?ne.parentBranch:null};for(const ne of t){if(ne.name===n)continue;const pe=(re=y(ne))!=null?re:n,P=(Ae=d.get(pe))!=null?Ae:[];P.push(ne),d.set(pe,P)}for(const ne of d.values())ne.sort((pe,P)=>p(pe)-p(P)||pe.name.localeCompare(P.name));const g=new Map,x=[],b=new Map,S=new Map,k=new Map;for(const ne of Object.values(i))for(const pe of ne){const P=new Date(pe.date).getTime();Number.isFinite(P)&&(pe.fullSha&&k.set(pe.fullSha,P),pe.sha&&k.set(pe.sha,P))}const j=(ne,pe)=>({start:Math.min(ne,pe),end:Math.max(ne,pe)}),E=ne=>{var se,he;const pe=j(p(ne),yy(ne).end),P=[pe],ie=pe.start,F=Aw(ne,n,i),_e=F?k.get(F):void 0,Te=new Date((he=(se=ne.divergedFromDate)!=null?se:ne.createdDate)!=null?he:ne.lastCommitDate).getTime(),I=Number.isFinite(_e!=null?_e:NaN)?_e:Number.isFinite(Te)?Te:null;if(I==null)return P;const me=j(I,ie);return me.start!==me.end&&P.push(me),P},T=Math.max(1,360*60*1e3*kw),z=(ne,pe)=>!(ne.start-pe.end>=T||pe.start-ne.end>=T),O=(ne,pe)=>pe.some(P=>{var ie;return((ie=S.get(ne))!=null?ie:[]).some(F=>z(P,F))}),R=(ne,pe=new Set)=>{const P=b.get(ne);if(P!=null)return P;if(pe.has(ne))return 1;pe.add(ne);const ie=u.get(ne);if(!ie||ne===n)return pe.delete(ne),b.set(ne,0),0;const F=y(ie),_e=F?R(F,pe)+1:1;return pe.delete(ne),b.set(ne,_e),_e},q=(ne,pe=new Set)=>{var Re,$e;const P=g.get(ne);if(P)return P.column;if(pe.has(ne))return 0;pe.add(ne);const ie=u.get(ne);if(!ie)return pe.delete(ne),0;if(ne===n){const Ue={name:ne,column:0,parentName:null};g.set(ne,Ue),x.push(Ue);const Qe=E(ie);return S.set(0,[...(Re=S.get(0))!=null?Re:[],...Qe]),pe.delete(ne),0}const F=y(ie),_e=F&&!pe.has(F)?F:null,Te=_e?q(_e,pe):0,I=Math.max(1,R(ne)),me=Math.max(_e?Te+1:1,I),se=E(ie);let he=me;for(;O(he,se);)he+=1;const be={name:ne,column:he,parentName:_e};return g.set(ne,be),x.push(be),S.set(he,[...($e=S.get(he))!=null?$e:[],...se]),pe.delete(ne),he};q(n);const Y=t.filter(ne=>!g.has(ne.name)).sort((ne,pe)=>p(ne)-p(pe)||ne.name.localeCompare(pe.name)),K=Y.filter(ne=>y(ne)!=null),V=Y.filter(ne=>y(ne)==null);for(const ne of K)q(ne.name);let ee=Math.max(0,...x.map(ne=>ne.column))+1+1;for(const ne of V){const pe=E(ne);let P=ee;for(;O(P,pe);)P+=1;const ie={name:ne.name,column:P,parentName:null};g.set(ne.name,ie),x.push(ie),S.set(P,[...(We=S.get(P))!=null?We:[],...pe]),ee=P+1}return x.sort((ne,pe)=>ne.column-pe.column||ne.name.localeCompare(pe.name))}function Nw(t,n,i,a){const c=new Map(t.map(h=>[h.name,h])),u=h=>{var y;const p=(y=i[h.name])!=null?y:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of t){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const Fu=2.25,Gi=0,qh=0,Dw=3600*1e3,Rw=3600*1e3,Li=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Lo=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function xy(t,n,i=new Map){var V,ee,ae,re,Ae,We,ne,pe,P,ie,F,_e,Te,I,me;if(t.length===0)return new Map;const a=[...t].sort((se,he)=>{const be=Li(se.date)-Li(he.date);return be!==0?be:se.id!==he.id?se.id.localeCompare(he.id):se.visualId.localeCompare(he.visualId)}),c=new Map;for(const se of t){const he=(V=se.parentSha)!=null?V:null;if(he){const be=(ee=c.get(he))!=null?ee:new Set;be.add(se.id),c.set(he,be)}for(const be of(ae=i.get(se.id))!=null?ae:[]){if(!be)continue;const Re=(re=c.get(be))!=null?re:new Set;Re.add(se.id),c.set(be,Re)}}const u=new Map,d=new Map,h=new Map,p=new Set,y=new Map,g=new Map,x=new Map,b=new Map;for(const se of t){const he=(Ae=y.get(se.branchName))!=null?Ae:new Set;he.add(se.id),y.set(se.branchName,he);const be=(ne=(We=n.get(se.branchName))==null?void 0:We.column)!=null?ne:0,Re=(pe=g.get(se.id))!=null?pe:new Set;Re.add(be),g.set(se.id,Re);const $e=new Set;se.parentSha&&$e.add(se.parentSha),x.set(se.visualId,$e);const Ue=new Set($e);for(const Qe of(P=i.get(se.id))!=null?P:[])Qe&&Ue.add(Qe);b.set(se.visualId,Ue)}const S=new Set(Array.from(g.keys())),k=Array.from(S),j=new Map,E=se=>{const he=[];for(const be of k)Lo(be,se)&&he.push(be);return he},T=new Map;for(const se of k)T.set(se,new Set);for(const se of t){const he=E(se.id);if(he.length===0)continue;const be=(ie=b.get(se.visualId))!=null?ie:new Set,Re=new Set;for(const $e of be)for(const Ue of E($e))Re.add(Ue);for(const $e of he){const Ue=(F=T.get($e))!=null?F:new Set;for(const Qe of Re)Ue.add(Qe);T.set($e,Ue)}}const z=new Map,O=(se,he=new Set)=>{var Ue;const be=z.get(se);if(be)return be;if(he.has(se))return new Set;he.add(se);const Re=(Ue=T.get(se))!=null?Ue:new Set,$e=new Set;for(const Qe of Re){$e.add(Qe);for(const Lt of O(Qe,he))$e.add(Lt)}return he.delete(se),z.set(se,$e),$e},R=(se,he)=>{if(Lo(se,he))return!0;const be=E(se),Re=E(he);for(const $e of be){const Ue=O($e);for(const Qe of Re)if(Ue.has(Qe))return!0}for(const $e of Re){const Ue=O($e);for(const Qe of be)if(Ue.has(Qe))return!0}return!1};let q=1;const Y=(se,he)=>{var st,et,Ze,ft,dt,wt,St,Ut,it;const be=(et=(st=n.get(se.branchName))==null?void 0:st.column)!=null?et:0,Re=(Ze=y.get(se.branchName))!=null?Ze:new Set,Ue=!(!!se.parentSha&&Re.has(se.parentSha))&&se.parentSha?se.parentSha:null,Qe=Array.from(he).flatMap(H=>E(H).flatMap(te=>{var we;return(we=j.get(te))!=null?we:[]})),Lt=(se.kind==="branch-created"||se.kind==="stash")&&Qe.length>0?Math.max(...Qe)+1:null,Dt=Qe.length>0?Math.max(...Qe)+1:1,Fe=(ft=c.get(se.id))!=null?ft:new Set,Tt=Array.from(Fe).flatMap(H=>{var te;return Array.from((te=g.get(H))!=null?te:[])}).some(H=>H!==be),nn=new Date(se.date).getTime(),Xt=Math.max(Dt,1);let Pe=null;for(let H=Xt;H<q;H+=1){const te=(dt=d.get(H))!=null?dt:[];if(te.length===0||Tt||p.has(H))continue;const we=(wt=b.get(se.visualId))!=null?wt:new Set;if(!(te.some(le=>R(se.id,le.sha)?!0:Array.from(we).some(Je=>Lo(Je,le.sha)))||te.some(le=>le.column===be)||!Number.isFinite(nn)||!te.every(le=>{if(!Number.isFinite(le.time))return!1;const Je=!!Ue&&!!le.branchEntryParentSha&&Ue===le.branchEntryParentSha?Rw:Dw;return Math.abs(le.time-nn)<=Je}))){Pe=H;break}}Lt!=null&&(Pe=Lt),Pe==null&&(Pe=Math.max(Dt,q)),u.set(se.visualId,Pe),Pe>=q&&(q=Pe+1);const ce=(St=d.get(Pe))!=null?St:[];ce.push({visualId:se.visualId,sha:se.id,column:be,time:nn,branchEntryParentSha:Ue}),d.set(Pe,ce),Tt&&p.add(Pe);for(const H of he){const te=(Ut=h.get(H))!=null?Ut:[];te.push(Pe),h.set(H,te)}const nt=(it=j.get(se.id))!=null?it:[];nt.push(Pe),j.set(se.id,nt)};for(const se of a){const he=(_e=x.get(se.visualId))!=null?_e:new Set;Y(se,he)}const K=Math.max(1,a.length*2);for(let se=0;se<K;se+=1){let he=!1;for(const be of a){const Re=(Te=x.get(be.visualId))!=null?Te:new Set;if(Re.size===0)continue;const $e=(I=u.get(be.visualId))!=null?I:1;let Ue=1;for(const Qe of Re){const Lt=E(Qe).flatMap(Dt=>{var Fe;return(Fe=j.get(Dt))!=null?Fe:[]});Lt.length>0&&(Ue=Math.max(Ue,Math.max(...Lt)+1))}if($e<Ue){u.set(be.visualId,Ue);const Qe=(me=j.get(be.id))!=null?me:[];Qe.length===0?j.set(be.id,[Ue]):j.set(be.id,[...Qe.slice(0,-1),Ue]),he=!0}}if(!he)break}return u}function Mc(t){var Ys,Mo,Yo,Vt,lo,Ts,Wo,wi,Eo,Os,Fo,Ws,jn,To,bo,ws,vo,cn,Fs,zs,co,js,zo,Xs,Ao,wo,On,An,Vn,Wn,uo,As,Ms,Xo,fo,gs,Es,$o,So,ho,Io,Po,Si,ta,Ii,Pi,si,Nt,Ci,ki,Hi,di,Co,Go,fi;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchParentByName:p={},branchUniqueAheadCounts:y,manuallyOpenedClumps:g,manuallyClosedClumps:x,isDebugOpen:b,gridSearchQuery:S,gridFocusSha:k,checkedOutRef:j,orientation:E="horizontal",nodePositionOverrides:T={}}=t,z=E==="horizontal",O=new Map(i.map(M=>[M.name,M])),R=new Map(n.map(M=>[M.name,M])),q=Mw([...a.map(M=>{var U,de,ke,Ye;return{id:M.fullSha,branchName:d,message:(U=M.prTitle)!=null?U:M.sha,author:"",date:M.date,parentSha:(ke=(de=M.parentShas)==null?void 0:de[0])!=null?ke:null,parentShas:(Ye=M.parentShas)!=null?Ye:[]}}),...((Ys=h[d])!=null?Ys:[]).map(M=>Mr(d,M)),...c.map(M=>Mr(M.branch||"",M)),...u.map(M=>Mr(M.branch||"",M))]),Y=new Map,K=new Map;for(const M of i){if(M.name===d)continue;const U=qx(M.name,y,h);K.set(M.name,U);const de=Xx(U.map($t=>Mr(M.name,$t)));if(de.length>0){Y.set(M.name,de);continue}const ke=(Vt=(Yo=(Mo=M.presidesFromSha)!=null?Mo:M.divergedFromSha)!=null?Yo:M.createdFromSha)!=null?Vt:null;if(!ke)continue;const Ye=(lo=c.find($t=>Lo($t.fullSha,ke)||Lo($t.sha,ke)))==null?void 0:lo.date,Xe=Ye?null:(Ts=Object.values(h).flat().find($t=>Lo($t.fullSha,ke)||Lo($t.sha,ke)))==null?void 0:Ts.date,Pt={id:`BRANCH_HEAD:${M.name}:${ke}`,branchName:M.name,message:`Branch ${M.name}`,author:M.lastCommitAuthor,date:(Eo=(wi=(Wo=Ye!=null?Ye:Xe)!=null?Wo:M.createdDate)!=null?wi:M.divergedFromDate)!=null?Eo:M.lastCommitDate,parentSha:ke,clusterKey:null,childShas:[],kind:"branch-created"};Y.set(M.name,[Pt])}const V=new Set(q.map(M=>M.id)),ee=(Os=[...q].sort((M,U)=>Li(M.date)-Li(U.date)||M.id.localeCompare(U.id))[0])!=null?Os:null,ae=new Map(Array.from(Y.entries()).map(([M,U])=>[M,new Set(U.map(de=>de.id))])),re=new Map;for(const M of i){if(M.name===d)continue;const U=Tw(M.name,h,y);if(U){re.set(M.name,U);continue}const de=(Fo=Y.get(M.name))==null?void 0:Fo[0];if(de){const ke=(To=(jn=(Ws=M.presidesFromSha)!=null?Ws:M.divergedFromSha)!=null?jn:M.createdFromSha)!=null?To:null;re.set(M.name,{...de,parentSha:ke})}}const Ae=new Map;for(const[M,U]of Y.entries()){const de=U.find(ke=>ke.kind!=="branch-created");de&&Ae.set(M,de)}const We=new Map;for(const[M,U]of Y.entries()){const de=U.filter(Xe=>Xe.kind!=="branch-created"),Ye=(bo=(de.length>0?de:U)[0])!=null?bo:null;Ye&&We.set(M,Ye)}const ne=new Map;for(const M of i){if(M.name===d)continue;const U=(ws=We.get(M.name))!=null?ws:null,de=(cn=(vo=re.get(M.name))==null?void 0:vo.parentSha)!=null?cn:null,ke=(co=(zs=(Fs=M.presidesFromSha)!=null?Fs:M.divergedFromSha)!=null?zs:M.createdFromSha)!=null?co:null,Ye=(js=U==null?void 0:U.parentSha)!=null?js:null,Xe=(zo=Ye!=null?Ye:de)!=null?zo:ke;Xe&&ne.set(M.name,Xe)}const pe=M=>{var Xe,Pt,$t,qt,Qt,on,gn,mn;const U=(Xe=p[M.name])!=null?Xe:null;if(!(U&&U!==d&&U!==M.name&&O.has(U)))return U!=null?U:"";const ke=(qt=($t=(Pt=ne.get(M.name))!=null?Pt:M.presidesFromSha)!=null?$t:M.divergedFromSha)!=null?qt:M.createdFromSha;if(ke&&((Qt=ae.get(U))!=null?Qt:new Set).has(ke))return U;const Ye=(gn=(on=re.get(M.name))==null?void 0:on.parentSha)!=null?gn:null;return Ye&&((mn=ae.get(U))!=null?mn:new Set).has(Ye),U},P=M=>{var Ye,Xe,Pt,$t,qt,Qt,on,gn;const U=re.get(M.name),de=(qt=($t=(Pt=(Xe=(Ye=ne.get(M.name))!=null?Ye:U==null?void 0:U.parentSha)!=null?Xe:M.presidesFromSha)!=null?Pt:M.divergedFromSha)!=null?$t:M.createdFromSha)!=null?qt:null;if(!M.parentBranch&&!de||!de)return null;if(pe(M)===d){if(V.has(de))return de;const mn=(Qt=U==null?void 0:U.parentSha)!=null?Qt:null;return mn&&V.has(mn)?mn:(gn=(on=ee==null?void 0:ee.id)!=null?on:mn)!=null?gn:de}return V.has(de),de},ie=M=>P(M),F=new Map;for(const M of[...c,...u]){const U={...Mr(M.branch||"",M),visualId:`${M.branch||""}:${M.fullSha}`};F.set(M.fullSha,U)}const _e=new Map(F),Te=M=>{_e.has(M.id)||_e.set(M.id,M)},I=new Set(u.map(M=>M.fullSha)),me=new Map(Array.from(Y.entries()).map(([M,U])=>[M,new Set(U.map(de=>de.id))])),se=new Set;for(const M of me.values())for(const U of M)se.add(U);for(const M of q)se.has(M.id)||Te({...M,visualId:`${M.branchName}:${M.id}`});for(const[M,U]of Y.entries())for(const de of U)Te({...de,visualId:`${M}:${de.id}`});const be=[...Array.from(_e.values()).map(M=>({...M,visualId:`${M.branchName}:${M.id}`}))].sort((M,U)=>Li(M.date)-Li(U.date)||M.id.localeCompare(U.id)),Re=new Map;for(const M of be){const U=(Xs=Re.get(M.branchName))!=null?Xs:new Set;U.add(M.id),Re.set(M.branchName,U)}const $e=(M,U)=>{const de=Re.get(M);if(!de||de.size===0)return!1;for(const ke of de)if(Lo(ke,U))return!0;return!1},Ue=(M,U)=>{const de=Array.from(Re.entries()).filter(([ke])=>ke!==U).filter(([,ke])=>Array.from(ke).some(Ye=>Lo(Ye,M))).map(([ke])=>ke);return de.length>0?de.sort()[0]:M.slice(0,7)},Qe=[],Lt=new Map,Dt=new Map;for(const M of a){const U=M.fullSha,de=M.targetBranch,ke=M.targetCommitSha;if(!U||!de||!ke||!$e(de,ke))continue;const Ye=((Ao=M.parentShas)!=null?Ao:[]).slice(1).filter(Pt=>!!Pt&&!Lo(Pt,U));if(Ye.length===0)continue;const Xe=(wo=Dt.get(U))!=null?wo:new Set;for(const Pt of Ye){Xe.add(Pt);const $t=Ue(Pt,de);Qe.push({sourceCommitSha:Pt,sourceBranchName:$t,mergeCommitSha:U,targetCommitSha:ke,targetBranchName:de});const qt=(On=Lt.get($t))!=null?On:new Map,Qt=(An=qt.get(Pt))!=null?An:new Set;Qt.add(de),qt.set(Pt,Qt),Lt.set($t,qt)}Dt.set(U,Xe)}const Fe=new Map;for(const M of i){if(M.name===d)continue;const U=P(M);U&&Fe.set(M.name,U)}const rt=new Map;for(const M of be){const U=Dt.get(M.id);if(U&&U.size>0){const Ye=(Vn=rt.get(M.id))!=null?Vn:new Set;for(const Xe of U)Ye.add(Xe);rt.set(M.id,Ye)}if(M.branchName===d)continue;const de=Fe.get(M.branchName);if(!de||de===M.id)continue;const ke=(Wn=rt.get(M.id))!=null?Wn:new Set;ke.add(de),rt.set(M.id,ke)}const Tt=new Map,nn=new Map;for(const M of be){if(nn.set(M.id,M),M.parentSha){const U=(uo=Tt.get(M.parentSha))!=null?uo:new Set;U.add(M.id),Tt.set(M.parentSha,U)}for(const U of(As=rt.get(M.id))!=null?As:[]){if(!U)continue;const de=(Ms=Tt.get(U))!=null?Ms:new Set;de.add(M.id),Tt.set(U,de)}}const Xt=new Map;for(const[M,U]of Tt.entries())Xt.set(M,Array.from(U));const Pe=new Set(["branch-created","stash"]),ce=new Set,nt=M=>{if(!M)return null;const U=be.find(de=>Lo(de.id,M)||Lo(de.visualId.split(":").slice(1).join(":"),M));return U!=null?U:null};for(const M of be){if(M.parentSha){const de=nt(M.parentSha),ke=!!de&&ce.has(de.visualId);de&&(M.kind==="stash"||M.kind==="branch-created"||ke)&&ce.add(de.visualId)}const U=(Xo=Tt.get(M.id))!=null?Xo:new Set;(U.size>1||Array.from(U).map(de=>nn.get(de)).some(de=>de!=null&&de.kind!=null&&Pe.has(de.kind)))&&ce.add(M.visualId)}const st=be.map(M=>{var U,de;return{...M,childShas:(de=(U=Xt.get(M.id))!=null?U:M.childShas)!=null?de:[]}}),et=xy(st,R,rt),Ze=new Map;for(const M of st){const U=(fo=Ze.get(M.branchName))!=null?fo:[];U.push(M),Ze.set(M.branchName,U)}const ft=new Map,dt=new Map,wt=new Map,St=new Map,Ut=new Map,it=(M,U)=>{var Qt,on,gn,mn,$s;if(U.length===0)return[];const de=[...U].sort((Wt,is)=>{var mo,Gs;const Ss=(mo=et.get(Wt.visualId))!=null?mo:Number.MAX_SAFE_INTEGER,ys=(Gs=et.get(is.visualId))!=null?Gs:Number.MAX_SAFE_INTEGER;return Ss!==ys?Ss-ys:Li(Wt.date)-Li(is.date)||Wt.id.localeCompare(is.id)}),ke=new Map;let Ye=null,Xe=0;const Pt=Wt=>Wt.kind==="uncommitted"?"uncommitted":Wt.kind==="stash"?"stash":Wt.kind==="branch-created"?"branch-created":I.has(Wt.id)?"unpushed":"pushed";let $t=null;for(const Wt of de){const is=Wt.kind==="stash"||Wt.kind==="branch-created",Ss=ce.has(Wt.visualId);if(is)continue;const ys=Pt(Wt);(!Ye||$t!=null&&$t!==ys)&&(Xe+=1,Ye=`cluster:${M}:segment:${Xe}`);const mo=(Qt=ke.get(Ye))!=null?Qt:[];mo.push(Wt),ke.set(Ye,mo),Ss&&(Ye=null),$t=ys}const qt=[];for(const[Wt,is]of ke.entries()){if(is.length===0)continue;const ys=[...is].sort((Is,qs)=>{var X,G;const po=(X=et.get(Is.visualId))!=null?X:Number.MIN_SAFE_INTEGER,B=(G=et.get(qs.visualId))!=null?G:Number.MIN_SAFE_INTEGER;return po!==B?B-po:Li(qs.date)-Li(Is.date)||qs.id.localeCompare(Is.id)})[0].visualId,mo={branchName:M,key:Wt,commitIds:is.map(Is=>Is.visualId),leadId:ys,count:is.length};qt.push(mo);const Gs=(on=Ut.get(Wt))!=null?on:0;if(!St.has(Wt))St.set(Wt,ys);else{const Is=St.get(Wt),qs=nn.get(Is.split(":").slice(1).join(":"));if(qs){const po=(gn=et.get(qs.visualId))!=null?gn:Number.MIN_SAFE_INTEGER;((mn=et.get(ys))!=null?mn:Number.MIN_SAFE_INTEGER)>po&&St.set(Wt,ys)}}Ut.set(Wt,Math.max(Gs,is.length));for(const Is of mo.commitIds){dt.set(Is,Wt);const qs=Is.split(":").slice(1).join(":"),po=($s=wt.get(qs))!=null?$s:[];po.includes(Wt)||po.push(Wt),wt.set(qs,po)}}return qt};for(const[M,U]of Ze.entries())ft.set(M,it(M,U));const H=new Map;for(const M of st)H.set(M.id,M);const te=M=>{if(!M)return"none";const U=Array.from(H.values()).find(de=>Lo(de.id,M)||Lo(de.id.slice(0,7),M)||Lo(M,de.id));return U?`${U.id.slice(0,7)} ${U.branchName}`:M.slice(0,7)},we=b?["Lane rows (expected):",...[...n].sort((M,U)=>M.column-U.column||M.name.localeCompare(U.name)).map(M=>{var U;return`  row=${M.column} branch=${M.name} parent=${(U=M.parentName)!=null?U:"none"}`}),"",...i.flatMap(M=>{var Pt,$t,qt,Qt,on,gn,mn,$s;const U=(Pt=h[M.name])!=null?Pt:[],de=[...($t=K.get(M.name))!=null?$t:[]].reverse(),ke=new Set(((qt=Y.get(M.name))!=null?qt:[]).map(Wt=>Wt.id)),Ye=(on=(Qt=de.find(Wt=>!Wt.parentSha||!de.some(is=>{var Ss;return Lo(is.fullSha,(Ss=Wt.parentSha)!=null?Ss:"")})))!=null?Qt:de[0])!=null?on:null,Xe=(mn=(gn=Ye==null?void 0:Ye.parentSha)!=null?gn:ne.get(M.name))!=null?mn:null;return[`Branch ${M.name}`,`  ahead=${($s=y[M.name])!=null?$s:0} previews=${de.length} rendered=${ke.size}`,`  db parent commit=${te(Xe)}`,`  db child commit=${Ye?`${Ye.fullSha.slice(0,7)} ${M.name}`:"none"}`,...de.map(Wt=>{const is=ke.has(Wt.fullSha)?"visible":"hidden",Ss=ke.has(Wt.fullSha)?"kept by render set":"dropped by render set";return`  ${is} ${Wt.fullSha.slice(0,7)} ${Wt.message} [${Ss}]`}),U.length===0?"  no preview data":null].filter(Wt=>Wt!=null)})]:[],je=b?Array.from(Y.entries()).map(([M,U])=>[`Branch debug ${M}`,...U.map(de=>`  ${de.id.slice(0,7)} ${de.message}`)].join(`
`)):[],ue=et,Ee=Am/Fu,le=20/Fu,Se=z?fs+Ee+le:Yu+Ee+le,Je=z?Yu+Ee+le:rl,ht=Math.max(0,...st.map(M=>{var U;return(U=ue.get(M.visualId))!=null?U:1})),lt=st.map(M=>{var Ye,Xe;const U=R.get(M.branchName),de=(Ye=ue.get(M.visualId))!=null?Ye:1,ke=(Xe=U==null?void 0:U.column)!=null?Xe:0;return z?{commit:M,row:de,column:ke,x:Ta+(de-1)*Se,y:Ea+ke*Je}:{commit:M,row:de,column:ke,x:Ta+ke*rl,y:Ea+(ht-de)*Se}}),He=M=>{var de;const U=(de=T[M.commit.visualId])!=null?de:T[M.commit.id];return U?{...M,x:U.x,y:U.y}:M},gt=lt.map(He),Ct=S.trim().toLowerCase(),It=Ct?gt.filter(M=>{const U=M.commit.id.toLowerCase(),de=M.commit.id.slice(0,7).toLowerCase(),ke=M.commit.message.toLowerCase(),Ye=M.commit.branchName.toLowerCase();return U.includes(Ct)||de.includes(Ct)||ke.includes(Ct)||Ye.includes(Ct)}):gt,ot=k&&(gs=gt.find(M=>M.commit.id===k))!=null?gs:null,kt=new Set(It.map(M=>M.commit.id)),Bt=(Es=j==null?void 0:j.headSha)!=null?Es:null,yt=(()=>{var U,de;const M=(U=j==null?void 0:j.branchName)!=null?U:null;return!Bt||!M?null:(de=dt.get(`${M}:${Bt}`))!=null?de:null})(),mt=new Set;for(const[M,U]of Ut.entries())U>1&&M!==yt&&mt.add(M);const Ge=[...be].filter(M=>{var Xe;const U=dt.get(M.visualId);if(!U)return!0;const de=St.get(U),ke=(Xe=Ut.get(U))!=null?Xe:1,Ye=g.has(U)||!mt.has(U)&&!x.has(U);return ke<=1||Ye||de===M.visualId}),xt=xy(Ge,R,rt),Kt=Am/Fu,en=20/Fu,sn=z?fs+Kt+en:Yu+Kt+en,qn=z?Yu+Kt+en:rl,Mn=Math.max(0,...be.map(M=>{var U;return(U=et.get(M.visualId))!=null?U:1})),Sn=Math.max(0,...Ge.map(M=>{var U;return(U=xt.get(M.visualId))!=null?U:1})),vn=Math.max(0,Mn-Sn),Gt=[...Ge.map(M=>{var Ye,Xe;const U=R.get(M.branchName),de=(Ye=xt.get(M.visualId))!=null?Ye:1,ke=(Xe=U==null?void 0:U.column)!=null?Xe:0;return He(z?{commit:M,row:de,column:ke,x:Ta+(vn+de-1)*sn,y:Ea+ke*qn}:{commit:M,row:de,column:ke,x:Ta+ke*rl,y:Ea+(Sn-de)*sn})})].sort((M,U)=>M.row!==U.row?M.row-U.row:M.column!==U.column?M.column-U.column:M.commit.visualId.localeCompare(U.commit.visualId)).map(M=>({...M})),En=new Set;for(const M of Gt){let U=M.row,de=`${M.column}:${U}`;for(;En.has(de);)U+=1,de=`${M.column}:${U}`;M.row=U,En.add(de)}const at=Math.max(0,...Gt.map(M=>M.row));for(const M of Gt){if(z){M.x=Ta+(vn+M.row-1)*sn,M.y=Ea+M.column*qn;continue}M.x=Ta+M.column*rl,M.y=Ea+(at-M.row)*sn}const Tn=new Map;for(const M of Gt){const U=($o=Tn.get(M.commit.id))!=null?$o:[];U.push(M),Tn.set(M.commit.id,U)}const Yt=new Map;for(const M of Gt){const U=dt.get(M.commit.visualId);if(!U)continue;const de=Yt.get(U);(!de||(z?M.x>de.x:M.y<de.y))&&Yt.set(U,M)}const Kn=(M,U)=>`${M.toFixed(1)} ${U.toFixed(1)}`,os=Math.max(0,...Gt.map(M=>M.row)),cs=Math.max(0,...n.map(M=>M.column)),us=Math.max(0,...Gt.map(M=>M.x+fs)),Vs=Math.max(0,...Gt.map(M=>M.y+vl+Rs)),no=Math.max(z?Ta*2+Math.max(0,os-1)*sn+fs+Fh+en:Ta*2+(cs+1)*rl,us+Ta),so=Math.max(z?Ea*2+cs*qn+Rs+Fh+en:Ea*2+Math.max(0,os-1)*sn+Rs+Fh+en,Vs+Ea),ds=[],Un=new Map(i.map(M=>{var de,ke;const U=new Date((ke=(de=M.createdDate)!=null?de:M.divergedFromDate)!=null?ke:M.lastCommitDate).getTime();return[M.name,Number.isFinite(U)?U:0]})),Ls=M=>{var U;return(U=Un.get(M))!=null?U:0},jo=[],kn=M=>{b&&jo.push(M)},Rn=new Set,oo=new Map,ms=(M,U)=>{var ke;const de=(ke=oo.get(M))!=null?ke:[];de.includes(U)||de.push(U),oo.set(M,de)},ks=new Set,ps=new Set,io=new Set,fn=(M,U)=>{var Ye,Xe;if(!M)return null;const de=Wu(Tn,M,U);if(de)return de;const ke=(Ye=dt.get(`${U!=null?U:d}:${M}`))!=null?Ye:dt.get(M);return ke&&(Xe=Yt.get(ke))!=null?Xe:null},rn=new Set;for(const M of i){const U=ie(M);U&&ps.add(U);const de=(So=ne.get(M.name))!=null?So:null;de&&io.add(de)}const ln=M=>{var Ye;const U=fn(M.id,M.branchName);if(U)return U;const de=dt.get(M.visualId);if(!de)return null;const ke=St.get(de);return ke&&(Ye=Gt.find(Xe=>Xe.commit.id===ke))!=null?Ye:null},Bn=(M,U)=>M?Wu(Tn,M,U):null,vi=(M,U)=>z?{x:M.x-Gi,y:M.y+Rs/2,face:"left"}:{x:M.x+fs/2,y:M.y+Rs+Gi,face:"bottom"},ti=M=>z?{x:M.x-Gi,y:M.y+Rs/2,face:"left"}:{x:M.x+fs/2,y:M.y+Rs+Gi,face:"bottom"},ni=(M,U)=>M.column!==U.column?!0:z?M.commit.branchName!==U.commit.branchName:!1,ao=(M,U,de)=>{if(!z)return{x:U?M.x+fs:M.x+fs/2,y:U?M.y+Rs/2:M.y,face:U?"right":"top"};if(!U)return{x:M.x+fs+Gi,y:M.y+Rs/2,face:"right"};if(de&&de.column===M.column&&de.commit.branchName!==M.commit.branchName){if(de.x>M.x)return{x:M.x+fs/2,y:M.y+Rs+Gi,face:"bottom"};if(de.x<M.x)return{x:M.x+fs/2,y:M.y-Gi,face:"top"}}return!de||de.column===M.column?{x:M.x+fs+Gi,y:M.y+Rs/2,face:"right"}:de.column>M.column?{x:M.x+fs/2,y:M.y+Rs+Gi,face:"bottom"}:{x:M.x+fs/2,y:M.y-Gi,face:"top"}},ui=M=>z?{x:M.x+fs/2,y:M.y+Rs+Gi,face:"bottom"}:{x:M.x+fs,y:M.y+Rs/2,face:"right"},vs=(M,U)=>Wu(Tn,M,U),ro=(M,U)=>Bn(M,U),Ln=[],xo=new Set;for(const M of Qe){const U=(ho=fn(M.targetCommitSha,M.targetBranchName))!=null?ho:null;if(!U){kn({id:`merge:${M.mergeCommitSha}:${M.sourceCommitSha}:target`,kind:"merge",parent:M.sourceCommitSha,child:M.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const de=M.sourceCommitSha,ke=`merge:${M.mergeCommitSha}:${de!=null?de:"unknown"}`;if(!de||Lo(de,M.targetCommitSha)){kn({id:ke,kind:"merge",parent:de!=null?de:"unknown",child:M.targetCommitSha,rendered:!1,reason:de?"merged parent equals merge target sha":"missing merged parent sha"});continue}const Ye=(Io=Wu(Tn,de))!=null?Io:null;if(!Ye){kn({id:ke,kind:"merge",parent:de,child:M.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(Ye.commit.id===U.commit.id){kn({id:ke,kind:"merge",parent:Ye.commit.id,child:U.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let Xe,Pt,$t;const qt=z?U.x+fs/2:U.x+fs-qh,Qt=z?U.y+Rs+qh:U.y+Rs/2,on=z?"bottom":"right";z?(Xe=Ye.x+fs+qh,Pt=Ye.y+Rs/2,$t="right"):(Xe=Ye.x+fs/2,Pt=Ye.y,$t="top");const gn=`${Xe.toFixed(2)}:${Pt.toFixed(2)}:${qt.toFixed(2)}:${Qt.toFixed(2)}`;if(xo.has(gn)){kn({id:ke,kind:"merge",parent:Ye.commit.id,child:U.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}xo.add(gn),Ln.push({id:ke,fromX:Xe,fromY:Pt,toX:qt,toY:Qt,fromFace:$t,toFace:on,zIndex:Ls(Ye.commit.branchName)}),kn({id:ke,kind:"merge",parent:Ye.commit.id,child:U.commit.id,rendered:!0,reason:`merge connector rendered to ${M.targetBranchName}`})}const _s=new Set;for(const M of i){if(M.name===d)continue;const U=re.get(M.name);if(!U)continue;const de=pe(M),ke=vs((Po=ne.get(M.name))!=null?Po:"",de),Ye=(Si=Ae.get(M.name))!=null?Si:U,Xe=(ta=ro(Ye.id,M.name))!=null?ta:ln(Ye);if(!ke||!Xe||ke.commit.id===Xe.commit.id){const on=dt.get(`${M.name}:${U.id}`),gn=dt.get(`${M.name}:${Ye.id}`),mn=!!on&&!mt.has(on),$s=!!gn&&!mt.has(gn),Wt=!!on&&!g.has(on)&&(mn?x.has(on):!0),is=!!gn&&!g.has(gn)&&($s?x.has(gn):!0);!ke&&!Wt&&ms((Ii=Xe==null?void 0:Xe.commit.id)!=null?Ii:U.id,"Missing parent node"),!Xe&&!is&&ms(U.id,"Missing child node"),kn({id:`branch:${(Pi=ke==null?void 0:ke.commit.id)!=null?Pi:"null"}->${(si=Xe==null?void 0:Xe.commit.id)!=null?si:"null"}`,kind:"branch",parent:(Nt=ke==null?void 0:ke.commit.id)!=null?Nt:"null",child:(Ci=Xe==null?void 0:Xe.commit.id)!=null?Ci:"null",rendered:!1,reason:ke?Xe?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Pt=`branch:${ke.commit.id}->${Xe.commit.id}`;if(rn.has(Pt)){kn({id:Pt,kind:"branch",parent:ke.commit.id,child:Xe.commit.id,rendered:!1,reason:"duplicate connector key"});continue}rn.add(Pt),ks.add(ke.commit.id);const $t=ni(ke,Xe);ke.commit.branchName!==Xe.commit.branchName&&_s.add(ke.commit.id);const qt=ui(ke),Qt=ti(Xe);ds.push({id:Pt,fromX:qt.x,fromY:qt.y,toX:Qt.x,toY:Qt.y,fromFace:qt.face,toFace:Qt.face,zIndex:Ls(Xe.commit.branchName)}),kn({id:Pt,kind:"branch",parent:ke.commit.id,child:Xe.commit.id,rendered:!0,reason:$t?"branch connector rendered":z?"horizontal connector rendered":"vertical connector rendered"})}for(const M of be){const U=ln(M);if(!U)continue;const de=(ki=M.parentSha)!=null?ki:null;if(!de)continue;const ke=(Hi=fn(de,M.branchName))!=null?Hi:vs(de,M.branchName);if(!ke){const qt=(di=dt.get(`${M.branchName}:${de}`))!=null?di:dt.get(de),Qt=!!qt&&!mt.has(qt);!!qt&&!g.has(qt)&&(Qt?x.has(qt):!0)||ms(M.id,"Missing parent node"),kn({id:`${M.visualId}->${de}`,kind:"ancestry",parent:de,child:M.id,rendered:!1,reason:"missing parent node"});continue}if(U.commit.id===ke.commit.id){ms(U.commit.id,"Parent and child resolve to the same node"),kn({id:`${ke.commit.id}->${U.commit.id}`,kind:"ancestry",parent:ke.commit.id,child:U.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const Ye=`${M.branchName}:${(Co=ke.commit.visualId)!=null?Co:ke.commit.id}->${U.commit.visualId}`;if(rn.has(Ye)){ms(ke.commit.id,"Duplicate connector key"),ms(U.commit.id,"Duplicate connector key"),kn({id:Ye,kind:"ancestry",parent:ke.commit.id,child:U.commit.id,rendered:!1,reason:"duplicate connector key"});continue}rn.add(Ye),ks.add(ke.commit.id);const Xe=ni(ke,U),Pt=ao(ke,Xe,U),$t=vi(U);ds.push({id:Ye,fromX:Pt.x,fromY:Pt.y,toX:$t.x,toY:$t.y,fromFace:Pt.face,toFace:$t.face,zIndex:Ls(U.commit.branchName)}),kn({id:Ye,kind:"ancestry",parent:ke.commit.id,child:U.commit.id,rendered:!0,reason:Xe?"ancestry connector rendered":z?"horizontal ancestry rendered":"vertical ancestry rendered"}),Rn.add(ke.commit.id),Rn.add(U.commit.id)}const Qn=new Map;for(const M of Gt){const U=(Go=Qn.get(M.commit.branchName))!=null?Go:[];U.push(M),Qn.set(M.commit.branchName,U)}for(const[M,U]of Qn.entries()){if(U.length<2)continue;const de=[...U].sort((ke,Ye)=>{var Xe,Pt,$t,qt,Qt,on,gn,mn;return ke.row!==Ye.row?ke.row-Ye.row:Li((Pt=(Xe=ke==null?void 0:ke.commit)==null?void 0:Xe.date)!=null?Pt:null)-Li((qt=($t=Ye==null?void 0:Ye.commit)==null?void 0:$t.date)!=null?qt:null)||((on=(Qt=ke==null?void 0:ke.commit)==null?void 0:Qt.id)!=null?on:"").localeCompare((mn=(gn=Ye==null?void 0:Ye.commit)==null?void 0:gn.id)!=null?mn:"")});for(let ke=1;ke<de.length;ke+=1){const Ye=de[ke-1],Xe=de[ke];if(Ye.commit.id===Xe.commit.id)continue;const Pt=(fi=Xe.commit.parentSha)!=null?fi:null;if(Pt&&vs(Pt,Xe.commit.branchName))continue;const $t=`chain:${M}:${Ye.commit.id}->${Xe.commit.id}`;if(rn.has($t)){ms(Ye.commit.id,"Duplicate branch chain connector"),ms(Xe.commit.id,"Duplicate branch chain connector"),kn({id:$t,kind:"ancestry",parent:Ye.commit.id,child:Xe.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}rn.add($t);const qt=ni(Ye,Xe),Qt=ao(Ye,qt,Xe),on=vi(Xe);ds.push({id:$t,fromX:Qt.x,fromY:Qt.y,toX:on.x,toY:on.y,fromFace:Qt.face,toFace:on.face,zIndex:Ls(Xe.commit.branchName)}),kn({id:$t,kind:"ancestry",parent:Ye.commit.id,child:Xe.commit.id,rendered:!0,reason:"branch chain rendered"}),Rn.add(Ye.commit.id),Rn.add(Xe.commit.id)}}return{branchByName:O,laneByName:R,mainCommits:q,branchCommitsByLane:Y,branchPreviewSets:K,allCommits:be,clustersByBranch:ft,clusterKeyByCommitId:dt,clusterKeyBySha:wt,leadByClusterKey:St,clusterCounts:Ut,debugRows:we,branchDebugRows:je,nodes:lt,normalizedSearchQuery:Ct,matchingNodes:It,matchingNodeIds:kt,focusedNode:ot,checkedOutClusterKey:yt,defaultCollapsedClumps:mt,visibleCommitsList:Ge,renderNodes:Gt,visibleNodesBySha:Tn,visibleNodeByClusterKey:Yt,pointFormatter:Kn,contentWidth:no,contentHeight:so,connectors:ds,mergeConnectors:Ln,connectorDecisions:jo,nodeWarnings:oo,connectorParentShas:ks,branchStartShas:ps,branchOffNodeShas:io,crossBranchOutgoingShas:_s,commitIdsWithRenderedAncestry:Rn,branchBaseCommitByName:re,firstBranchCommitByName:We,mergeDestinations:Qe,mergeTargetBranchesBySourceBranchAndCommitSha:Lt}}const Bw=8,Lw=44,by=120,vy=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Kx(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),y=Math.abs(h),g=Math.hypot(d,h);if(g<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,y)<Bw){const Y=d/g,K=h/g,V=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:t+Y*V,c1y:n+K*V,c2x:i-Y*V,c2y:a-K*V}}if(Math.min(p,y)<Lw){const Y=d/g,K=h/g,V=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:t+Y*V,c1y:n+K*V,c2x:i-Y*V,c2y:a-K*V}}const S=Math.min(160,p*.42),k=Math.min(100,p*.22),j=Math.min(120,y*.32),E=Math.min(160,y*.42),T=vy(c),z=vy(u);if(!(T==="v"&&z==="h"||T==="v"&&z==null&&y>=p||T==null&&z==="h"&&y>=p||T==="v"&&z==="v"||T==null&&z==null&&y>p)){const Y=i,K=n;return{kind:"elbowH",cx:Y,cy:K,s1c1x:t+x*S,s1c1y:n,s1c2x:Y-x*k,s1c2y:K,s2c1x:Y,s2c1y:K+b*j,s2c2x:i,s2c2y:a-b*E}}const R=t,q=a;return{kind:"elbowV",cx:R,cy:q,s1c1x:t,s1c1y:n+b*E,s1c2x:R,s1c2y:q-b*j,s2c1x:R+x*S,s2c1y:q,s2c2x:i-x*k,s2c2y:a}}function Ow(t,n,i,a,c,u){const d=Kx(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function wy(t,n,i,a,c,u,d){const h=Kx(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const S=Math.max(8,Math.min(by,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),k=i>=t?1:-1,j=a>=n?1:-1,E=h.cx-k*S,T=h.cy+j*S;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(E-k*S*.5,h.cy)} ${c(E,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,T)}`,`C ${c(h.cx,T+j*S*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(by,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),y=i>=t?1:-1,g=a>=n?1:-1,x=h.cy-g*p,b=h.cx+y*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-g*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+y*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const mp=2.25,ac=mp/2,zw=.45,$w=.01,ua=mp,Md=10,Iw=-100,Sy=0,Cy=.9,Pw=.9,ky=.001,Kh=.001,Hw=12,Uw=fs+48;function dn(...t){return t.filter(Boolean).join(" ")}function Vw(t){return Math.max(zw,Math.min(mp,t))}function Yw(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function Qx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function Ww(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const y of t)n=Math.min(n,y.x),i=Math.min(i,y.y),a=Math.max(a,y.x),c=Math.max(c,y.y);return{left:n,top:i,right:a,bottom:c}}function Fw(t,n,i,a,c,u,d){const h=Ow(t,n,i,a,u,d),p=Ww(h);return Qx(c,p)}function Zx(t,n){return{left:t.x,top:t.y+n,right:t.x+fs,bottom:t.y+vl+Rs+4}}function Xw(t,n){const i=Uw,a=Math.max(120,Math.ceil(vl+Rs+4-n+24)),c=new Map;for(const u of t){const d=Zx(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),y=Math.floor(d.top/a),g=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let S=y;S<=g;S++){const k=`${b},${S}`;let j=c.get(k);j||(j=new Set,c.set(k,j)),j.add(x)}}return{cellW:i,cellH:a,buckets:c}}function Gw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),y=Math.floor(n.top/u),g=Math.floor(n.bottom/u),x=new Set;for(let S=h;S<=p;S++)for(let k=y;k<=g;k++){const j=d.get(`${S},${k}`);if(j)for(const E of j)x.add(E)}const b=new Set;for(const S of x){const k=i.get(S);if(!k)continue;const j=Zx(k,a);Qx(n,j)&&b.add(S)}return b}function jy(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/ua;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function qw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function My(t,n,i){const a=n/ua;return!Number.isFinite(a)||a<=0?t:qw(t,100/a)}function Ey(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function bi(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Nm(t,n){if(n){const i=Ey(n),a=Ey(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function Qh(t,n){return t.pathExists===!1?!1:Nm(t,n)}function Kw(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function Qw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stashInProgress:a,stashDisabled:c,pushInProgress:u,hasUncommittedChanges:d,createBranchFromNodeInProgress:h,onCommitLocalChanges:p,onStashLocalChanges:y,onPushCurrentBranch:g,onPushAllBranches:x,onPushCommitTargets:b,onMergeRefsIntoBranch:S,selectedPushTargets:k,selectedPushLabel:j,canPushCurrentBranch:E,pushCurrentBranchLabel:T,pushableRemoteBranchCount:z,selectedCommitTargetOption:O,mergeInProgress:R,setMergeTargetCommitSha:q,worktrees:Y,currentRepoPath:K,worktreeMenuOpen:V,setWorktreeMenuOpen:ee,onSwitchToWorktree:ae,onRemoveWorktree:re,removeWorktreeInProgress:Ae,setCommitDialogOpen:We,setNewBranchDialogOpen:ne}){var Lt,Dt;const pe=t.length>0,P=t.length>0&&t.every(Fe=>Fe==="WORKING_TREE"),[ie,F]=_.useState(!1),_e=_.useRef(null),Te=_.useRef(null),I="inline-flex h-7 items-center rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",me=!!p&&d&&!i&&!n&&(!pe||P),se=!!g&&E&&!pe&&!u,he=!!b&&k.length>0&&!u,be=!!x&&z>=2&&!pe&&!u,Re=!!y&&!c&&!pe&&!a,$e="Push Selected...",Ue=me?{label:n?"Committing...":"Commit",iconSrc:"/icon-commit.svg",run:()=>We(!0),disabled:!me}:se?{label:u?"Pushing...":T,iconSrc:"/icon-pushBranch.svg",run:()=>void(g==null?void 0:g()),disabled:!se}:he?{label:$e,iconSrc:"/icon-pushSelected.svg",run:()=>void(b==null?void 0:b(k.map(Fe=>({branchName:Fe.branchName,targetSha:Fe.targetSha})))),disabled:!he}:null;return _.useEffect(()=>{const Fe=rt=>{var nn,Xt;const Tt=rt.target;Tt&&((nn=_e.current)!=null&&nn.contains(Tt)||(Xt=Te.current)!=null&&Xt.contains(Tt)||(F(!1),ee(!1)))};return window.addEventListener("pointerdown",Fe),()=>window.removeEventListener("pointerdown",Fe)},[ee]),l.jsx("div",{className:"window-no-drag pointer-events-none z-[60] flex w-full justify-start",children:l.jsxs("div",{className:"pointer-events-auto flex w-fit max-w-full flex-nowrap items-center justify-start gap-[9px]",children:[l.jsxs("div",{ref:_e,className:"relative inline-flex h-7 items-stretch rounded-md border border-border/60 bg-card/95",children:[l.jsx("button",{type:"button",onClick:()=>{Ue&&Ue.run()},disabled:!Ue||Ue.disabled,className:dn(I,"h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-accent"),children:l.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[l.jsx("img",{src:(Lt=Ue==null?void 0:Ue.iconSrc)!=null?Lt:"/icon-commit.svg",alt:"","aria-hidden":"true",className:"h-4.5 w-4.5 shrink-0"}),l.jsx("span",{children:(Dt=Ue==null?void 0:Ue.label)!=null?Dt:"Commit"})]})}),l.jsx("button",{type:"button",onClick:()=>F(Fe=>!Fe),disabled:!Ue,"aria-haspopup":"menu","aria-expanded":ie,className:dn(I,"h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-accent"),title:"More actions",children:l.jsx(Wx,{className:"h-3.5 w-3.5 shrink-0"})}),ie&&Ue?l.jsxs("div",{className:"absolute left-0 top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border/60 bg-card p-1",children:[l.jsxs("button",{type:"button",onClick:()=>{F(!1),We(!0)},disabled:!me,className:dn(I,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!me&&"text-muted-foreground opacity-50"),children:[l.jsx("img",{src:"/icon-commit.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),n?"Committing...":"Commit"]}),l.jsxs("button",{type:"button",onClick:()=>{F(!1),g==null||g()},disabled:!se,className:dn(I,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!se&&"text-muted-foreground opacity-50"),children:[l.jsx("img",{src:"/icon-pushBranch.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),u?"Pushing...":T]}),l.jsxs("button",{type:"button",onClick:()=>{F(!1),b==null||b(k.map(Fe=>({branchName:Fe.branchName,targetSha:Fe.targetSha})))},disabled:!he,className:dn(I,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!he&&"text-muted-foreground opacity-50"),title:j,children:[l.jsx("img",{src:"/icon-pushSelected.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),$e]}),l.jsxs("button",{type:"button",onClick:()=>{F(!1),x==null||x()},disabled:!be,className:dn(I,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!be&&"text-muted-foreground opacity-50"),children:[l.jsx("img",{src:"/icon-pushAll.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),"Push all"]}),l.jsxs("button",{type:"button",onClick:()=>{F(!1),y==null||y()},disabled:!Re,className:dn(I,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!Re&&"text-muted-foreground opacity-50"),children:[l.jsx("img",{src:"/icon-stash.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),a?"Stashing...":"Stash"]})]}):null]}),l.jsx("div",{className:"flex w-fit flex-nowrap items-center gap-[9px]",children:l.jsxs("button",{type:"button",onClick:()=>ne(!0),disabled:h,className:dn(I,"pointer-events-auto relative z-10 bg-background"),children:[l.jsx(Fx,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),h?"Creating...":"New Branch"]})}),t.length>1&&O.options.length>0&&O.targetBranch&&S?l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border/60 bg-card/95 px-2 py-1",children:[l.jsx("span",{className:"px-1 text-[11px] font-medium text-muted-foreground",children:"Merge to"}),O.options.map(Fe=>{const rt=Fe.targetBranch===O.targetBranch;return l.jsx("button",{type:"button",onClick:()=>q(Fe.targetSha),className:dn("rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors",rt?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:Fe.targetBranch},`merge-${Fe.targetBranch}`)}),l.jsxs("button",{type:"button",onClick:()=>void S(O.sources,O.targetBranch),disabled:O.sources.length===0||R,className:"rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(yw,{className:"mr-1 inline h-3 w-3 shrink-0 align-text-bottom"}),R?"Merging...":"Confirm"]})]}):null,Y.length>0&&(ae||re)?l.jsxs("div",{ref:Te,className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>ee(Fe=>!Fe),className:I,children:[l.jsx(hw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),Y.length," ",Y.length===1?"Worktree":"Worktrees"]}),V?l.jsx("div",{className:"absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border/60 bg-card p-2",children:Y.map(Fe=>{var rt;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:Fe.path,children:Nm(Fe,K)?Kw(Fe.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(rt=Fe.branchName)!=null?rt:"detached"," • ",Fe.headSha.slice(0,7)]})]}),Nm(Fe,K)?l.jsxs("div",{className:"flex items-center gap-1",children:[ae?l.jsx("button",{type:"button",onClick:()=>{ee(!1),ae(Fe.path)},disabled:Ae||Fe.pathExists===!1,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,re?l.jsx("button",{type:"button",onClick:()=>void re(Fe.path,Fe.isPrunable),disabled:Ae,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Ae?"...":"Remove"}):null]}):null]},Fe.path)})}):null]}):null]})})}function Zw({fadeIn:t,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=_.useState(!t);return _.useLayoutEffect(()=>{if(!t){p(!0);return}p(!1);let y=null;const g=requestAnimationFrame(()=>{y=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(g),y!=null&&cancelAnimationFrame(y)}},[t]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:t?"opacity 240ms ease-out":void 0},children:d})}function Jw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:y,labelTopPx:g,inverseZoomStyle:x,displayZoom:b,selectedVisibleCommitShas:S,normalizedSearchQuery:k,matchingNodeIds:j,focusedNode:E,renderNodes:T,shouldRenderNode:z,manuallyOpenedClumps:O,manuallyClosedClumps:R,defaultCollapsedClumps:q,leadByClusterKey:Y,clusterKeyByCommitId:K,clusterCounts:V,commitIdsWithRenderedAncestry:ee,nodeWarnings:ae,connectorParentShas:re,branchStartShas:Ae,branchOffNodeShas:We,crossBranchOutgoingShas:ne,branchBaseCommitByName:pe,branchStartAccentClass:P,connectorParentAccentClass:ie,commitCornerRadiusPx:F,lineStrokeWidth:_e,pointFormatter:Te,connectors:I,mergeConnectors:me,cullConnectorPath:se,flushCameraReactTick:he,setManuallyOpenedClumps:be,setManuallyClosedClumps:Re,onCommitCardClick:$e,unpushedCommitShasSetByBranch:Ue,checkedOutHeadSha:Qe}){const[Lt,Dt]=_.useState(new Set),Fe=_.useRef(null);_.useEffect(()=>{const Pe=new Set;V.forEach((st,et)=>{(O.has(et)||!q.has(et)&&!R.has(et))&&Pe.add(et)});const ce=Fe.current;if(ce==null){Fe.current=Pe;return}const nt=[];if(Pe.forEach(st=>{ce.has(st)||nt.push(st)}),nt.length>0){Dt(et=>{const Ze=new Set(et);return nt.forEach(ft=>Ze.add(ft)),Ze});const st=window.setTimeout(()=>{Dt(et=>{const Ze=new Set(et);return nt.forEach(ft=>Ze.delete(ft)),Ze})},260);return Fe.current=Pe,()=>{window.clearTimeout(st)}}Fe.current=Pe},[V,q,R,O]);const rt=(Pe,ce)=>{const nt=ce.zIndex-Pe.zIndex;if(nt!==0)return nt;const st=Math.min(Pe.fromY,Pe.toY),et=Math.min(ce.fromY,ce.toY),Ze=st-et;return Ze!==0?Ze:Pe.id.localeCompare(ce.id)},Tt=me.filter(Pe=>se(Pe)).sort(rt),nn=I.filter(Pe=>se(Pe)).sort(rt),Xt=T.filter(Pe=>z(Pe));return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:l.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[Xt.map(Pe=>{var lt,He,gt,Ct,It,ot;const ce=K.get(Pe.commit.visualId),nt=ce?O.has(ce)||!q.has(ce)&&!R.has(ce):!1,st=ce?Y.get(ce)===Pe.commit.visualId:!1,et=ce!=null&&nt&&!st&&Lt.has(ce),Ze=ce&&(lt=V.get(ce))!=null?lt:1,ft=ee.has(Pe.commit.id),dt=(He=ae.get(Pe.commit.id))!=null?He:[],wt=dt.length>0&&!ft,St=S.includes(Pe.commit.id),Ut=Pe.commit.id==="WORKING_TREE"||Pe.commit.kind==="uncommitted",it=Pe.commit.kind==="stash"||Pe.commit.id.startsWith("STASH:"),H=/^STASH:(\d+)$/.exec(Pe.commit.id),te=H?`Stash:${H[1]}`:null,we=it?Pe.commit.message.trim()&&Pe.commit.message.trim()!=="git-visualizer"?Pe.commit.message:"Stashed changes":Pe.commit.message,je=Pe.commit.kind==="branch-created"&&Pe.commit.id.startsWith("BRANCH_HEAD:"),ue=Ut||((Ct=(gt=Ue.get(Pe.commit.branchName))==null?void 0:gt.has(Pe.commit.id))!=null?Ct:!1),le=(Ut||Qe!=null&&Pe.commit.id===Qe)&&!St,Se=le?"text-[#38BDF2]":St?"text-[#158EFC]":"text-muted-foreground",Je=le?{color:"#38BDF2"}:St?{color:"#158EFC"}:void 0,ht=(It=Je==null?void 0:Je.color)!=null?It:"#8B8B8B";return l.jsxs(Zw,{fadeIn:et,dataCommitCard:"true",className:dn("group absolute z-20 cursor-grab active:cursor-grabbing",k&&!j.has(Pe.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",k&&j.has(Pe.commit.id)?"scale-[1.01]":"",(E==null?void 0:E.commit.id)===Pe.commit.id?"z-30":""),style:{left:Pe.x,top:Pe.y,width:fs,height:vl+Rs+4,overflow:"visible"},onClick:kt=>$e(kt,Pe),onPointerDown:kt=>y(kt,Pe),children:[l.jsx("div",{className:"absolute left-0 w-full",style:{...x,top:`${g}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[l.jsx("div",{className:dn("min-w-0 h-4 flex-1 text-sm font-medium leading-none",Se,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Je,children:it&&te?te:Pe.commit.branchName?`${Pe.commit.branchName}/${Pe.commit.id.slice(0,7)}`:Pe.commit.id.slice(0,7)}),st&&Ze>1?l.jsx("button",{type:"button",onMouseDown:kt=>{kt.stopPropagation()},onClick:kt=>{if(kt.stopPropagation(),kt.preventDefault(),!ce)return;!q.has(ce)?(be(yt=>{if(!yt.has(ce))return yt;const mt=new Set(yt);return mt.delete(ce),mt}),Re(yt=>{const mt=new Set(yt);return mt.has(ce)?mt.delete(ce):mt.add(ce),mt})):(Re(yt=>{if(!yt.has(ce))return yt;const mt=new Set(yt);return mt.delete(ce),mt}),be(yt=>{const mt=new Set(yt);return mt.has(ce)?mt.delete(ce):mt.add(ce),mt})),he()},className:dn("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",Se),style:Je,children:nt?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${Ze}`}):null]})}),l.jsx("div",{className:dn("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",le&&!ue&&!it&&!je?"bg-[#EBF7FE]":St&&!ue&&!it&&!je?"bg-[#E5F0FF]":ue||it||je?"bg-transparent":"bg-[#F5F5F5]",it||Ut||je?"border-dashed":"",We.has(Pe.commit.id)||Ae.has(Pe.commit.id)||ne.has(Pe.commit.id)?P:re.has(Pe.commit.id)?ie:((ot=pe.get(Pe.commit.branchName))==null?void 0:ot.id)===Pe.commit.id?"border-amber-500":wt?"border-red-500":"",(k&&j.has(Pe.commit.id)&&!d,"")),style:{top:0,borderWidth:(E==null?void 0:E.commit.id)===Pe.commit.id?`${it||Ut||je?_e*(2/1.5):_e}px`:`${it||Ut||je?_e*(2/1.5):_e}px`,borderColor:(E==null?void 0:E.commit.id)===Pe.commit.id?ht:le?"#38BDF2":St?"#158EFC":Xh,borderTopLeftRadius:0,borderTopRightRadius:`${F}px`,borderBottomRightRadius:`${F}px`,borderBottomLeftRadius:`${F}px`},children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:dn("max-w-[38rem] select-text text-sm font-medium leading-tight tracking-tight text-muted-foreground",Se,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),"data-selectable-text":"true",style:Je,children:st&&nt?we:st&&Ze>1?`${we} +${Ze-1}`:we}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:wt?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:dt.join(`
`),children:"Broken ancestry"}):null})]}),b>.5&&!it?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:dn("select-text text-sm font-medium",Se),"data-selectable-text":"true",style:Je,children:["@",Pe.commit.author]}),l.jsx("div",{className:dn("select-text text-sm font-medium",Se),"data-selectable-text":"true",style:Je,children:new Date(Pe.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null]})})]},Pe.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[Tt.map(Pe=>{const{fromX:ce,fromY:nt,toX:st,toY:et}=Pe,Ze=wy(ce,nt,st,et,Te,Pe.fromFace,Pe.toFace);return l.jsx("path",{d:Ze,fill:"none",stroke:Xh,strokeWidth:_e,strokeLinecap:"round",strokeLinejoin:"round"},Pe.id)}),nn.map(Pe=>{const{fromX:ce,fromY:nt,toX:st,toY:et}=Pe,Ze=wy(ce,nt,st,et,Te,Pe.fromFace,Pe.toFace);return l.jsx("path",{d:Ze,fill:"none",stroke:Xh,strokeWidth:_e,strokeLinecap:"round",strokeLinejoin:"round"},Pe.id)})]})]})})})}function eS({isOpen:t,onClose:n,visibleBounds:i,renderedNodeCount:a,totalNodeCount:c,renderedMergeConnectorCount:u,totalMergeConnectorCount:d,renderedConnectorCount:h,totalConnectorCount:p,mapGridCullViewportInsetScreenPx:y,debugRows:g,branchDebugRows:x,connectorDecisions:b}){return l.jsx(l.Fragment,{children:t?l.jsxs("div",{className:"absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:n,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${y}px screen/side): ${i?`${(i.right-i.left).toFixed(0)} x ${(i.bottom-i.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${a} / ${c}`,`Rendered merge connectors: ${u} / ${d}`,`Rendered connectors: ${h} / ${p}`,"",...g,...x,"",...b.map(S=>`${S.rendered?"rendered":"skipped"} [${S.kind}] ${S.parent.slice(0,7)} -> ${S.child.slice(0,7)} (${S.reason})`)].join(`
`)})})]}):null})}function tS({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:y,deleteInProgress:g,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:S,newBranchCreateMode:k,onNewBranchNameChange:j,onNewBranchCreateModeChange:E,onNewBranchDialogClose:T,onNewBranchConfirm:z,selectedCommitCanCreateBranch:O,currentCheckedOutCommitCanCreateBranch:R,createBranchFromNodeInProgress:q}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:a,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:Y=>Y.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:Y=>i(Y.target.value),onKeyDown:Y=>{(Y.metaKey||Y.ctrlKey)&&Y.key==="Enter"&&(Y.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(_w,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),u?"Committing...":"Commit"]})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:p,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:Y=>Y.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(Y=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:Y},Y))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:y,disabled:x===0||g,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:g?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:T,children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",onClick:Y=>Y.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>E("from-selected-node"),className:dn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",k==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>E("new-root"),className:dn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",k==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),k==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:S,onChange:Y=>j(Y.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:T,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:z,disabled:!S.trim()||q||k==="from-selected-node"&&!O&&!R,className:dn("inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:[l.jsx(Fx,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),q?"Creating...":"Create"]})]})]})}):null]})}const Ty="/icon-GitOrientation.svg";function nS({orientation:t,onOrientationChange:n}){const i=t==="horizontal"?"vertical":"horizontal";return l.jsxs("button",{type:"button",onClick:()=>n(i),className:dn("window-no-drag inline-flex h-7 items-center gap-1.5 rounded-md border border-border/60 bg-card pl-1.5 pr-2 py-1 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"),"aria-label":`Rotate view to ${i}`,title:"Rotate View",children:[l.jsx("span",{className:"relative size-4 shrink-0",children:l.jsx("span",{"aria-hidden":"true",className:dn("absolute inset-0 bg-muted-foreground transition-transform duration-300 ease-in-out",t==="vertical"&&"rotate-[-90deg]"),style:{WebkitMaskImage:`url(${Ty})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${Ty})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}})}),l.jsx("span",{className:"whitespace-nowrap text-[12px] font-normal leading-none text-muted-foreground",children:"Rotate View"})]})}function sS({query:t,onQueryChange:n,resultCount:i,resultIndex:a,onJump:c}){const u=_.useRef(null);return l.jsxs("div",{className:"window-no-drag flex h-7 w-[20rem] shrink-0 items-center gap-2 rounded-full border border-border/60 bg-card/95 pl-2.5 pr-1",children:[l.jsx(Cw,{className:"h-3.5 w-3.5 shrink-0 text-muted-foreground"}),l.jsx("input",{ref:u,value:t,onChange:d=>n(d.target.value),onBlur:d=>{const h=d.relatedTarget;h!=null&&h.closest('button, a, input, textarea, select, [contenteditable="true"]')||window.setTimeout(()=>{var p;(p=u.current)==null||p.focus()},0)},onKeyDown:d=>{d.key==="Enter"&&(d.preventDefault(),c(1))},placeholder:"Search",className:"min-w-0 flex-1 bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"}),i!=null&&i>0?l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-[11px] font-medium tabular-nums text-foreground",children:[(a!=null?a:0)+1,"/",i]}),l.jsx("button",{type:"button",onClick:()=>c(-1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Previous search result",title:"Previous result",children:l.jsx(cw,{className:"h-4 w-4 shrink-0"})}),l.jsx("button",{type:"button",onClick:()=>c(1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Next search result",title:"Next result",children:l.jsx(Wx,{className:"h-4 w-4 shrink-0"})})]}):null]})}function oS({mapPadHostRef:t,transformLayerRef:n}){const i=_.useRef({x:0,y:0}),a=_.useRef(ac),c=_.useRef({panX:0,panY:0,zoom:ac}),u=_.useRef(null),d=_.useRef(ac),h=_.useRef(null),[p,y]=_.useState(!1),[g,x]=_.useState(ac),[b,S]=_.useState(0),k=_.useRef(null),j=_.useRef(0),E=_.useCallback(()=>{const ee=t.current;if(!ee)return null;const ae=ee.getBoundingClientRect(),re=getComputedStyle(ee),Ae=Number.parseFloat(re.borderLeftWidth)||0,We=Number.parseFloat(re.borderTopWidth)||0,ne=Number.parseFloat(re.paddingLeft)||Md,pe=Number.parseFloat(re.paddingTop)||Md;return{x:ae.left+Ae+ne,y:ae.top+We+pe}},[t]),T=_.useCallback(()=>{k.current!=null&&(window.clearTimeout(k.current),k.current=null),_.startTransition(()=>{S(ee=>ee+1)}),j.current=performance.now()},[]),z=_.useCallback((ee,ae,re)=>{const Ae=c.current;c.current={panX:ee,panY:ae,zoom:re};const We=n.current;if(We&&(We.style.transform=`translate3d(${ee}px, ${ae}px, 0) scale(${re/ua})`),Math.abs(d.current-re)>Kh&&(d.current=re,x(re)),Math.abs(re-Ae.zoom)>Kh){T();return}const P=performance.now()-j.current;if(P>=Sy){T();return}k.current!=null&&window.clearTimeout(k.current),k.current=window.setTimeout(()=>{k.current=null,T()},Sy-P)},[T,n]),O=_.useRef(null),R=_.useCallback(()=>{u.current!=null||!O.current||(u.current=window.requestAnimationFrame(O.current))},[]),q=_.useCallback(()=>{y(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,y(!1)},90)},[]),Y=_.useCallback((ee,ae,re)=>{i.current={x:ee,y:ae},a.current=re,q(),R()},[q,R]);O.current=()=>{u.current=null;const ee=c.current,ae=i.current.x,re=i.current.y,Ae=a.current,We=Math.abs(ae-ee.panX)<=ky?ae:ee.panX+(ae-ee.panX)*Cy,ne=Math.abs(re-ee.panY)<=ky?re:ee.panY+(re-ee.panY)*Cy,pe=Math.abs(Ae-ee.zoom)<=Kh?Ae:ee.zoom+(Ae-ee.zoom)*Pw;z(We,ne,pe),We!==ae||ne!==re||pe!==Ae?O.current&&(u.current=window.requestAnimationFrame(O.current)):T()};const K=_.useCallback((ee,ae,re)=>{const Ae=Vw(re),We=i.current.x,ne=i.current.y,pe=a.current,P=E();if(!P){Y(We,ne,Ae);return}const ie=ee-P.x,F=ae-P.y,_e=pe/ua,Te=Ae/ua,I=(ie-We)/_e,me=(F-ne)/_e,se=ie-I*Te,he=F-me*Te;i.current={x:se,y:he},a.current=Ae,z(se,he,Ae)},[z,E]),V=_.useCallback(ee=>{if(ee.preventDefault(),ee.ctrlKey||ee.metaKey){const ae=Math.exp(-ee.deltaY*$w);K(ee.clientX,ee.clientY,a.current*ae);return}Y(i.current.x-ee.deltaX,i.current.y-ee.deltaY,a.current)},[Y,K]);return _.useLayoutEffect(()=>(z(0,0,ac),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),k.current!=null&&(window.clearTimeout(k.current),k.current=null)}),[z]),_.useLayoutEffect(()=>{const ee=n.current;if(!ee)return;const ae=c.current;ee.style.transform=`translate3d(${ae.panX}px, ${ae.panY}px, 0) scale(${ae.zoom/ua})`}),{isCameraMoving:p,renderedZoom:g,cameraRenderTick:b,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:E,flushCameraReactTick:T,syncCamera:Y,handleWheel:V}}function iS(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function aS({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=_.useRef(null),h=_.useRef(!1),p=_.useRef([]),[y,g]=_.useState(!1),[x,b]=_.useState(null),[S,k]=_.useState([]),[j,E]=_.useState(null),T=_.useCallback(O=>{const R=t.current,q=i();if(!R||!q)return[];const Y=R.getBoundingClientRect(),K=n.current.zoom/ua;if(K<=0)return[];const V=[],ee=O.left,ae=O.left+O.width,re=O.top,Ae=O.top+O.height;for(const We of a){if(!c(We))continue;const ne=q.x+n.current.panX+We.x*K-Y.left,pe=q.y+n.current.panY+We.y*K-Y.top,P=ne+fs*K,ie=pe+(vl+Rs)*K;!(P<ee||ne>ae||ie<re||pe>Ae)&&V.push(We.commit.id)}return V},[i,a,n,t,c]),z=_.useCallback(O=>{if(O.button!==0)return;const R=O.target;if(R!=null&&R.closest("[data-commit-card]")||R!=null&&R.closest("button, a, input, textarea, select"))return;const q=t.current;if(!q)return;O.preventDefault();const Y=q.getBoundingClientRect(),K=O.clientX-Y.left,V=O.clientY-Y.top;d.current={startX:K,startY:V,currentX:K,currentY:V,additive:O.metaKey||O.ctrlKey},h.current=!1,p.current=O.metaKey||O.ctrlKey?S:[],g(!0),b({left:K,top:V,width:0,height:0})},[t,S]);return _.useEffect(()=>{const O=q=>{var re;const Y=d.current;if(!Y)return;const K=t.current;if(!K)return;const V=K.getBoundingClientRect();Y.currentX=q.clientX-V.left,Y.currentY=q.clientY-V.top,!h.current&&(Math.abs(Y.currentX-Y.startX)>2||Math.abs(Y.currentY-Y.startY)>2)&&(h.current=!0);const ee=iS(Y);b(ee);const ae=T(ee);k(Y.additive?Array.from(new Set([...p.current,...ae])):Array.from(new Set(ae))),Y.additive||E((re=ae[ae.length-1])!=null?re:null)},R=()=>{if(d.current){const q=h.current;d.current=null,h.current=!1,g(!1),b(null),q||(k([]),E(null));return}u()};return window.addEventListener("mousemove",O),window.addEventListener("mouseup",R),()=>{window.removeEventListener("mousemove",O),window.removeEventListener("mouseup",R)}},[T,u,t]),{isMarqueeSelecting:y,marqueeRect:x,selectedCommitShas:S,setSelectedCommitShas:k,mergeTargetCommitSha:j,setMergeTargetCommitSha:E,startMarqueeDrag:z}}function rS(){return l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center",children:l.jsx("div",{role:"status","aria-label":"Loading commits",className:"h-5 w-5 rounded-full border-2 border-border border-t-muted-foreground animate-spin"})})}function Ay({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:y,staleBranches:g=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:S,mapTopInsetPx:k=0,onMergeRefsIntoBranch:j,mergeInProgress:E=!1,onPushAllBranches:T,onPushCurrentBranch:z,onPushCommitTargets:O,pushInProgress:R=!1,onDeleteSelection:q,deleteInProgress:Y=!1,worktrees:K=[],currentRepoPath:V,onRemoveWorktree:ee,removeWorktreeInProgress:ae=!1,onSwitchToWorktree:re,onStashLocalChanges:Ae,stashInProgress:We=!1,stashDisabled:ne=!1,onCommitLocalChanges:pe,commitInProgress:P=!1,commitDisabled:ie=!1,onStageAllChanges:F,stageInProgress:_e=!1,onCreateBranchFromNode:Te,onCreateRootBranch:I,createBranchFromNodeInProgress:me=!1,isDebugOpen:se=!1,onDebugClose:he,orientation:be="horizontal",branchCommitPreviews:Re={},branchParentByName:$e={},branchUniqueAheadCounts:Ue={},gridSearchQuery:Qe="",gridSearchJumpToken:Lt=0,gridSearchJumpDirection:Dt=1,gridFocusSha:Fe=null,checkedOutRef:rt=null,onGridSearchResultCountChange:Tt,onGridSearchResultIndexChange:nn,onGridSearchFocusChange:Xt,onInteractionChange:Pe,manuallyOpenedClumps:ce,manuallyClosedClumps:nt,setManuallyOpenedClumps:st,setManuallyClosedClumps:et,gridHudProps:Ze}){var mn,$s,Wt,is,Ss,ys,mo,Gs,Is,qs,po,B,X,G;const ft=_.useRef(null),dt=_.useRef(null),wt=_.useRef(null),St=_.useRef(null),Ut=_.useRef(void 0),it=_.useRef(void 0),H=_.useRef(void 0),te=_.useRef(0),we=_.useRef(null),[je,ue]=_.useState(!1),[Ee,le]=_.useState(!1),[Se,Je]=_.useState(""),[ht,lt]=_.useState(!1),[He,gt]=_.useState(!1),[Ct,It]=_.useState(""),[ot,kt]=_.useState("from-selected-node"),[Bt,yt]=_.useState(()=>new Set),[mt,Ge]=_.useState(()=>new Set),[xt,Kt]=_.useState({}),en=_.useRef(!1),sn=_.useRef(null),qn=_.useRef(null),Mn=ce!=null?ce:Bt,Sn=nt!=null?nt:mt,vn=st!=null?st:yt,Yn=et!=null?et:Ge,[Gt,En]=_.useState(null),[at,Tn]=_.useState(null),{isCameraMoving:Yt,renderedZoom:Kn,cameraRenderTick:os,renderedCameraRef:cs,interactionIdleTimeoutRef:us,getTransformLayerOriginScreen:Vs,flushCameraReactTick:no,syncCamera:so,handleWheel:ds}=oS({mapPadHostRef:dt,transformLayerRef:wt}),Un=_.useMemo(()=>hp(t,d,Re,$e),[t,d,Re,$e]),jo=_.useMemo(()=>Mc({lanes:Un,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:Re,branchParentByName:$e,branchUniqueAheadCounts:Ue,manuallyOpenedClumps:Mn,manuallyClosedClumps:Sn,isDebugOpen:se,gridSearchQuery:Qe,gridFocusSha:Fe,checkedOutRef:rt!=null?rt:null,orientation:be,nodePositionOverrides:xt}),[Un,t,n,i,a,d,Re,$e,Ue,Mn,Sn,se,Qe,Fe,(mn=rt==null?void 0:rt.headSha)!=null?mn:null,($s=rt==null?void 0:rt.branchName)!=null?$s:null,be,xt]),kn=_.useMemo(()=>Mc({lanes:Un,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:Re,branchParentByName:$e,branchUniqueAheadCounts:Ue,manuallyOpenedClumps:Mn,manuallyClosedClumps:Sn,isDebugOpen:se,gridSearchQuery:Qe,gridFocusSha:Fe,checkedOutRef:rt!=null?rt:null,orientation:be,nodePositionOverrides:xt}),[Un,t,n,i,a,d,Re,$e,Ue,Mn,Sn,se,Qe,Fe,(Wt=rt==null?void 0:rt.headSha)!=null?Wt:null,(is=rt==null?void 0:rt.branchName)!=null?is:null,be,xt]),{allCommits:Rn,clusterKeyByCommitId:oo,leadByClusterKey:ms,clusterCounts:ks,matchingNodes:ps,matchingNodeIds:io,normalizedSearchQuery:fn,focusedNode:rn,defaultCollapsedClumps:ln,renderNodes:Bn,visibleNodesBySha:vi,contentWidth:ti,contentHeight:ni,connectors:ao,mergeConnectors:ui,connectorDecisions:vs,nodeWarnings:ro,commitIdsWithRenderedAncestry:Ln,connectorParentShas:xo,branchStartShas:_s,branchOffNodeShas:Qn,crossBranchOutgoingShas:Ys,branchBaseCommitByName:Mo,pointFormatter:Yo}=jo,Vt=!!fn,lo=Kn/ua,Ts=_.useMemo(()=>({transform:`scale(${1/lo})`,transformOrigin:"top left",width:`${100*lo}%`,height:`${100*lo}%`}),[lo]),Wo=-(20/lo),wi=_.useMemo(()=>{const D=new Map;for(const Z of Bn)D.set(Z.commit.visualId,Z);return D},[Bn]),Eo=_.useMemo(()=>Xw(Bn,Wo),[Bn,Wo]),Os=D=>{var N;const Z=D.commit.id,w=D.commit.visualId;if(Vt&&io.has(Z)||(rn==null?void 0:rn.commit.id)===Z||Gt===null)return!0;if(!Gt.has(w))return!1;const C=oo.get(w);return C&&((N=ks.get(C))!=null?N:1)>1&&(Mn.has(C)||!ln.has(C)&&!Sn.has(C)),!0},Fo=1.5/lo,Ws=Hw/lo,jn="border-slate-400/70",To="border-blue-500",bo=_.useMemo(()=>new Map(t.map(D=>[D.name,D])),[t]),ws=(Ss=rt==null?void 0:rt.hasUncommittedChanges)!=null?Ss:!1;_.useMemo(()=>new Set(t.filter(D=>D.commitsAhead===0&&!D.name.startsWith("*")).map(D=>D.name)),[t]);const vo=_.useMemo(()=>{var Z,w;const D=new Map;for(const C of Bn){const N=(Z=D.get(C.commit.id))!=null?Z:new Set;N.add(C.commit.branchName),D.set(C.commit.id,N)}for(const C of i){const N=(w=D.get(C.fullSha))!=null?w:new Set;C.branch&&N.add(C.branch),D.set(C.fullSha,N)}return D},[Bn,i,d]),cn=_.useMemo(()=>new Map(Object.entries(c).map(([D,Z])=>[D,new Set(Z)])),[c]),Fs=_.useCallback(()=>{us.current,no()},[no,us]),{isMarqueeSelecting:zs,marqueeRect:co,selectedCommitShas:js,setSelectedCommitShas:zo,mergeTargetCommitSha:Xs,setMergeTargetCommitSha:Ao,startMarqueeDrag:wo}=aS({scrollContainerRef:ft,renderedCameraRef:cs,getTransformLayerOriginScreen:Vs,renderNodes:Bn,shouldRenderNode:Os,onPointerReleaseNoMarquee:Fs}),On=_.useMemo(()=>new Set(Bn.map(D=>D.commit.id)),[Bn]),An=_.useMemo(()=>js.filter(D=>On.has(D)),[js,On]),Vn=_.useCallback((D,Z)=>{var N;if(!Z)return!1;if(((N=Re[D])!=null?N:[]).some(L=>bi(L.fullSha,Z)||bi(L.sha,Z)))return!0;const C=bo.get(D);return!!(C!=null&&C.headSha&&bi(C.headSha,Z))},[Re,bo]),Wn=(ys=rt==null?void 0:rt.branchName)!=null?ys:null,uo=(mo=rt==null?void 0:rt.headSha)!=null?mo:null,As=Wn==null,Ms=_.useMemo(()=>{if(!Fe)return null;const D=Bn.filter(Z=>Z.commit.id===Fe);return D.length===0?null:D.length===1||!rn?D[0]:D.reduce((Z,w)=>{const C=(Z.x-rn.x)**2+(Z.y-rn.y)**2;return(w.x-rn.x)**2+(w.y-rn.y)**2<C?w:Z})},[Fe,Bn,rn]),Xo=_.useCallback((D,Z,w)=>{for(const C of K){if(!Qh(C,V))continue;if(C.branchName){if(C.branchName===D&&bi(C.headSha,Z))return C;continue}if(!bi(C.headSha,Z)&&!bi(C.headSha,w))continue;if(C.parentSha&&Vn(D,C.parentSha)||Vn(D,C.headSha))return C;const N=bo.get(D);if(N&&bi(N.headSha,C.headSha)||D===d&&i.some(L=>bi(L.fullSha,C.headSha)))return C}return null},[K,V,Vn,bo,d,i]),fo=_.useCallback(D=>{for(const Z of K)if(Qh(Z,V)&&Z.branchName===D)return Z;return null},[K,V]),gs=_.useCallback((D,Z)=>{for(const w of K)if(Qh(w,V)&&(bi(w.headSha,D)||bi(w.headSha,Z)))return w;return null},[K,V]),Es=_.useCallback(D=>{var Z;return Array.from((Z=vo.get(D))!=null?Z:[])},[vo]),$o=_.useMemo(()=>{var N,L,W,J;const D=new Map;for(const Ne of An){const xe=Es(Ne);if(xe.length===0)continue;const Le=(N=xe.find(tt=>tt!==d))!=null?N:xe[0],qe=An.filter(tt=>tt!==Ne).filter(tt=>!new Set(Es(tt)).has(Le));D.set(Le,{targetSha:Ne,targetBranch:Le,sourceRefs:qe})}const Z=Array.from(D.values()),w=Xs?Z.find(Ne=>{var xe;return Ne.targetSha===Xs||Ne.targetBranch===((xe=Es(Xs)[0])!=null?xe:"")}):null,C=(L=w!=null?w:Z[Z.length-1])!=null?L:null;return{options:Z,selected:C,targetBranch:(W=C==null?void 0:C.targetBranch)!=null?W:null,sources:(J=C==null?void 0:C.sourceRefs)!=null?J:[]}},[An,Es,d,Xs]),So=_.useMemo(()=>{const D=[...Wn===d?[{name:d,headSha:uo!=null?uo:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(Z=>!Z.name.startsWith("*")&&Z.unpushedCommits>0&&Z.remoteSyncStatus!=="on-github").map(Z=>[Z.name,Z]);return new Map(D)},[t,Wn,uo,d,a.length]),ho=_.useMemo(()=>{const D=C=>{var L;const N=Es(C).filter(W=>So.has(W));return N.length===0?null:N.length===1?N[0]:Wn&&N.includes(Wn)?Wn:(L=N.find(W=>W!==d))!=null?L:N[0]},Z=C=>{var N;return C===d?a.map(L=>{var W,J;return{fullSha:L.fullSha,sha:L.sha,parentSha:(W=L.parentSha)!=null?W:null,message:L.message,author:L.author,date:L.date,kind:(J=L.kind)!=null?J:"commit"}}):(N=Re[C])!=null?N:[]},w=new Map;for(const C of An){const N=D(C);if(!N)continue;const L=So.get(N);if(!L)continue;const W=Z(N).slice(0,L.unpushedCommits),J=W.findIndex(xe=>xe.fullSha===C);if(J===-1)continue;const Ne=w.get(N);(!Ne||J<Ne.targetIndex)&&w.set(N,{branchName:N,targetSha:C,targetIndex:J,commitCount:W.length-J})}return Array.from(w.values())},[An,Es,So,Wn,d,a,Re]),Io=_.useMemo(()=>Array.from(new Set(An.map(D=>/^STASH:(\d+)$/.exec(D)).filter(D=>!!D).map(D=>parseInt(D[1],10)))).sort((D,Z)=>D-Z),[An]),Po=An.includes("WORKING_TREE"),Si=(Po?1:0)+Io.length,ta=[...Po?["Uncommitted changes"]:[],...Io.map(D=>`Stash ${D+1}`)],Ii=So.size,Pi=!As&&!!Wn&&So.has(Wn),si=Wn?`Push ${Wn}`:"Push current branch",Nt=ho.length===1?ho[0].commitCount>1?`Push ${ho[0].commitCount} commits on ${ho[0].branchName}`:`Push ${ho[0].targetSha.slice(0,7)} on ${ho[0].branchName}`:`Push ${ho.length} selected ranges`,Ci=_.useCallback(D=>{const Z=D.target;Z!=null&&Z.closest('.window-no-drag, input, textarea, select, button, [contenteditable="true"]')||fp().startDragging()},[]);_.useEffect(()=>{const D=Yt||zs;St.current!==D&&(St.current=D,Pe==null||Pe(D))},[Yt,zs,Pe]),_.useEffect(()=>{const D=fn?ps.length:null;Ut.current!==D&&(Ut.current=D,Tt==null||Tt(D))},[ps.length,fn,Tt]),_.useEffect(()=>{const D=fn&&Fe?(()=>{const Z=ps.findIndex(w=>w.commit.id===Fe);return Z>=0?Z:null})():null;it.current!==D&&(it.current=D,nn==null||nn(D))},[Fe,ps,fn,nn]);const ki=_.useMemo(()=>{var Ne,xe,Le,qe,tt,pt;if(!fn)return null;const D=fn,Z=t.map(_t=>_t.name),w=Z.find(_t=>_t.toLowerCase()===D),C=w!=null?w:Z.find(_t=>_t.toLowerCase().startsWith(D)),L=C!=null?C:Z.find(_t=>_t.toLowerCase().includes(D));if(!L)return null;const W=(Ne=t.find(_t=>_t.name===L))!=null?Ne:null;if(W!=null&&W.headSha)return W.headSha;const J=(xe=Re[L])!=null?xe:[];return J.length>0?(qe=(Le=J[0])==null?void 0:Le.fullSha)!=null?qe:null:L===d&&(pt=(tt=i[0])==null?void 0:tt.fullSha)!=null?pt:null},[fn,t,Re,d,i]);_.useEffect(()=>{var C,N,L;if(!fn){if(te.current=Lt,H.current===null)return;H.current=null,Xt==null||Xt(null);return}if(Lt<=0||te.current===Lt)return;te.current=Lt;let D;const Z=Fe?ps.findIndex(W=>W.commit.id===Fe):-1,w=ps.length>0?Z<0?0:(Z+Dt+ps.length)%ps.length:-1;D=(L=(N=(C=ps[w])==null?void 0:C.commit.id)!=null?N:ki)!=null?L:null,H.current!==D&&(H.current=D,Xt==null||Xt(D))},[ps,fn,Xt,ki,Lt,Dt]),_.useLayoutEffect(()=>{if(!Fe)return;const D=`${Fe}:${Lt}`;if(we.current===D)return;const Z=ft.current,w=Ms;if(!Z||!w)return;const C=Vs();if(!C)return;const N=Z.getBoundingClientRect(),L=cs.current.zoom,W=L/ua,J=w.x+fs/2,Ne=w.y+vl+Rs/2,xe=N.left+N.width/2,Le=N.top+N.height/2;so(xe-C.x-J*W,Le-C.y-Ne*W,L),we.current=D},[Fe,Lt,Ms,Vs,so,cs]);const Hi=(qs=(Is=at==null?void 0:at.width)!=null?Is:(Gs=ft.current)==null?void 0:Gs.clientWidth)!=null?qs:0,di=(X=(B=at==null?void 0:at.height)!=null?B:(po=ft.current)==null?void 0:po.clientHeight)!=null?X:0,Co=Hi>0&&di>0?jy(Hi,di,cs.current,{innerPaddingPx:Md}):null,Go=Co!=null?My(Co,cs.current.zoom):null,fi=D=>{if(!Go)return!0;const{fromX:Z,fromY:w,toX:C,toY:N}=D;return Fw(Z,w,C,N,Go,D.fromFace,D.toFace)};_.useLayoutEffect(()=>{var W;const D=ft.current;if(!D||D.clientWidth<=0||D.clientHeight<=0)return;const Z=D.clientWidth,w=D.clientHeight;Tn(J=>(J==null?void 0:J.width)===Z&&(J==null?void 0:J.height)===w?J:{width:Z,height:w});const C=jy(Z,w,cs.current,{innerPaddingPx:Md});if(!C){En(J=>J===null?J:null);return}const N=My(C,cs.current.zoom),L=Gw(Eo,N,wi,Wo);for(const J of Bn){const Ne=oo.get(J.commit.visualId);if(!Ne||((W=ks.get(Ne))!=null?W:1)<=1)continue;(Mn.has(Ne)||!ln.has(Ne)&&!Sn.has(Ne))&&L.add(J.commit.visualId)}En(J=>Yw(J,L)?J:L)},[Kn,Lt,Fe,Yt,os,Mn,Sn,ln,oo,ks,Bn,at,Eo,wi,Wo]),_.useLayoutEffect(()=>{const D=ft.current;if(!D)return;const Z=()=>{const C=D.clientWidth,N=D.clientHeight;C<=0||N<=0||Tn(L=>(L==null?void 0:L.width)===C&&(L==null?void 0:L.height)===N?L:{width:C,height:N})};Z();const w=new ResizeObserver(Z);return w.observe(D),()=>w.disconnect()},[Rn.length]);const M=Bn.filter(D=>Os(D)).length,U=ui.filter(D=>fi(D)).length,de=ao.filter(D=>fi(D)).length,ke=_.useCallback((D,Z)=>{if(en.current){D.preventDefault(),D.stopPropagation();return}D.stopPropagation();const w=Z.commit.id;if(D.shiftKey?(zo(W=>W.includes(w)?W.filter(J=>J!==w):[...W,w]),Ao(w)):(zo(W=>W.includes(w)?[]:[w]),Ao(W=>W===w?null:w)),!(D.metaKey||D.ctrlKey||D.detail>=2)||w==="WORKING_TREE")return;const N=w.length>=40?w.slice(0,7):w;let L=null;if(Z.commit.branchName?(L=Xo(Z.commit.branchName,w,N),L||(L=fo(Z.commit.branchName))):L=gs(w,N),L&&re){re(L.path);return}h==null||h({commitSha:w})},[gs,Xo,fo,h,re]),Ye=_.useCallback((D,Z)=>{var J,Ne,xe,Le,qe;if(D.button!==0)return;const w=D.target;if(w!=null&&w.closest('[data-selectable-text="true"]')||w!=null&&w.closest("button, a, input, textarea, select"))return;D.stopPropagation(),D.preventDefault(),en.current=!1,D.currentTarget.setPointerCapture(D.pointerId);const C=(J=xt[Z.commit.visualId])!=null?J:xt[Z.commit.id];sn.current={nodeId:Z.commit.visualId,startX:D.clientX,startY:D.clientY,baseX:(Ne=C==null?void 0:C.x)!=null?Ne:Z.x,baseY:(xe=C==null?void 0:C.y)!=null?xe:Z.y,moved:!1,pendingX:(Le=C==null?void 0:C.x)!=null?Le:Z.x,pendingY:(qe=C==null?void 0:C.y)!=null?qe:Z.y};const N=()=>{qn.current=null;const tt=sn.current;tt&&Kt(pt=>({...pt,[tt.nodeId]:{x:tt.pendingX,y:tt.pendingY}}))},L=tt=>{const pt=sn.current;if(!pt)return;const _t=cs.current.zoom/ua,ut=_t>0?1/_t:1,ct=(tt.clientX-pt.startX)*ut,Cn=(tt.clientY-pt.startY)*ut;(Math.abs(ct)>2||Math.abs(Cn)>2)&&(pt.moved=!0),pt.moved&&(en.current=!0),pt.pendingX=pt.baseX+ct,pt.pendingY=pt.baseY+Cn,qn.current==null&&(qn.current=window.requestAnimationFrame(N))},W=()=>{window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",W),window.removeEventListener("pointercancel",W),qn.current!=null&&(window.cancelAnimationFrame(qn.current),qn.current=null,N());try{D.currentTarget.releasePointerCapture(D.pointerId)}catch{}const tt=sn.current;sn.current=null,tt&&window.setTimeout(()=>{en.current=!1},0)};window.addEventListener("pointermove",L),window.addEventListener("pointerup",W),window.addEventListener("pointercancel",W)},[xt]),Xe=_.useCallback(async()=>{if(!pe)return;await pe(Se)&&(le(!1),Je(""))},[pe,Se]),Pt=_.useCallback(async()=>{q&&(await q({branchNames:[],discardUncommittedChanges:Po,stashIndices:Io}),lt(!1),zo([]),Ao(null))},[q,Po,Io]),$t=_.useCallback(async()=>{var Z;const D=Ct.trim();if(D){if(ot==="new-root"){if(!I)return;await I(D)}else{if(!Te)return;const w=An.length===1?An[0]:(Z=rt==null?void 0:rt.headSha)!=null?Z:null;if(!w||!(w==="WORKING_TREE"||w.startsWith("STASH:")||w===(rt==null?void 0:rt.headSha)))return;await Te(w,D)}gt(!1),It(""),kt("from-selected-node"),zo([]),Ao(null)}},[rt==null?void 0:rt.headSha,ot,Ct,Te,I,An]),qt=!!(rt!=null&&rt.headSha),Qt=An.length===0&&qt,on=An.length===1&&(An[0]==="WORKING_TREE"||An[0].startsWith("STASH:"))||Qt,gn=!!I;return _.useEffect(()=>{if(He){if(!on&&!Qt&&gn){kt("new-root");return}(on||Qt)&&kt("from-selected-node")}},[gn,Qt,He,on]),_.useEffect(()=>{const D=Z=>{if(!q||ht||An.length===0)return;const w=Z.target;w!=null&&w.closest('input, textarea, select, button, [contenteditable="true"]')||Z.key!=="Delete"&&Z.key!=="Backspace"||(Z.preventDefault(),lt(!0))};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[ht,q,An.length]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-card",children:[l.jsx(eS,{isOpen:se,onClose:()=>he==null?void 0:he(),visibleBounds:Go,renderedNodeCount:M,totalNodeCount:Bn.length,renderedMergeConnectorCount:U,totalMergeConnectorCount:ui.length,renderedConnectorCount:de,totalConnectorCount:ao.length,mapGridCullViewportInsetScreenPx:Iw,debugRows:kn.debugRows,branchDebugRows:kn.branchDebugRows,connectorDecisions:vs}),Ze?l.jsxs("header",{"data-tauri-drag-region":!0,onPointerDown:Ci,className:"window-drag-region pointer-events-none absolute inset-x-0 top-0 z-[70] flex w-full select-none",children:[l.jsxs("div",{className:"pointer-events-auto ml-auto flex w-full max-w-[calc(100vw-116px)] min-w-0 items-start justify-between gap-3 p-2.25 select-none",children:[l.jsx("div",{className:"flex min-w-0 flex-nowrap items-center justify-start gap-3 overflow-visible",children:l.jsx(Qw,{selectedVisibleCommitShas:An,commitInProgress:P,commitDisabled:ie,stageInProgress:_e,stashInProgress:We,stashDisabled:ne,pushInProgress:R,hasUncommittedChanges:ws,createBranchFromNodeInProgress:me,onCommitLocalChanges:pe,onStageAllChanges:F?()=>void F():void 0,onStashLocalChanges:Ae,onPushCurrentBranch:z,onPushAllBranches:T,onPushCommitTargets:O,onMergeRefsIntoBranch:j,selectedPushTargets:ho,selectedPushLabel:Nt,canPushCurrentBranch:Pi,pushCurrentBranchLabel:si,pushableRemoteBranchCount:Ii,selectedCommitTargetOption:$o,mergeInProgress:E,mergeTargetCommitSha:Xs,setMergeTargetCommitSha:Ao,worktrees:K,currentRepoPath:V,worktreeMenuOpen:je,setWorktreeMenuOpen:ue,onSwitchToWorktree:re,onRemoveWorktree:ee,removeWorktreeInProgress:ae,setCommitDialogOpen:le,setNewBranchDialogOpen:gt})}),l.jsx("div",{className:"flex min-w-0 shrink-0 items-center justify-end gap-2",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto flex items-center gap-2",children:[l.jsx(sS,{query:Ze.gridSearchQuery,onQueryChange:Ze.setGridSearchQuery,resultCount:Ze.gridSearchResultCount,resultIndex:Ze.gridSearchResultIndex,onJump:D=>{Ze.setGridSearchJumpDirection(D),Ze.setGridSearchJumpToken(Z=>Z+1)}}),l.jsx(nS,{orientation:Ze.mapGridOrientation,onOrientationChange:Ze.setMapGridOrientation})]})})]}),l.jsxs("div",{className:"pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5",children:[(G=Ze.githubAuthStatus)!=null&&G.ghAvailable&&!Ze.githubAuthStatus.authenticated?l.jsx("button",{onClick:Ze.onGitHubAuthSetup,disabled:Ze.githubAuthLoading,className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Ze.githubAuthLoading?"Connecting GitHub...":"Connect GitHub"}):null,Ze.githubAuthStatus&&!Ze.githubAuthStatus.ghAvailable?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",children:"Install `gh` for private PR data"})]}):null,Ze.githubAuthMessage?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",title:Ze.githubAuthMessage,children:Ze.githubAuthMessage})]}):null,Ze.commitSwitchFeedback?l.jsxs("div",{className:`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200 ${Ze.isCommitSwitchFeedbackVisible?"opacity-100":"opacity-0"} ${Ze.commitSwitchFeedback.kind==="error"?"border-red-200/80 bg-red-50/95 text-red-700 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-300":"border-blue-200/80 bg-blue-50/95 text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-300"}`,title:Ze.commitSwitchFeedback.message,children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium opacity-70",children:Ze.commitSwitchFeedback.kind==="error"?"Alert":"Update"}),l.jsx("p",{className:"truncate text-[11px]",children:Ze.commitSwitchFeedback.message})]}):null]})]}):null,x||Rn.length===0?l.jsx(rS,{}):l.jsx(Jw,{scrollContainerRef:ft,mapPadHostRef:dt,transformLayerRef:wt,isMarqueeSelecting:zs,contentWidth:ti,contentHeight:ni,isCameraMoving:Yt,onWheel:ds,onMouseDown:wo,onNodePointerDown:Ye,labelTopPx:Wo,inverseZoomStyle:Ts,displayZoom:lo,selectedVisibleCommitShas:An,normalizedSearchQuery:fn,matchingNodeIds:io,focusedNode:Ms,renderNodes:Bn,shouldRenderNode:Os,manuallyOpenedClumps:Mn,manuallyClosedClumps:Sn,defaultCollapsedClumps:ln,leadByClusterKey:ms,clusterKeyByCommitId:oo,clusterCounts:ks,commitIdsWithRenderedAncestry:Ln,nodeWarnings:ro,connectorParentShas:xo,branchStartShas:_s,branchOffNodeShas:Qn,crossBranchOutgoingShas:Ys,branchBaseCommitByName:Mo,branchStartAccentClass:To,connectorParentAccentClass:jn,commitCornerRadiusPx:Ws,lineStrokeWidth:Fo,pointFormatter:Yo,connectors:ao,mergeConnectors:ui,cullConnectorPath:fi,flushCameraReactTick:no,setManuallyOpenedClumps:vn,setManuallyClosedClumps:Yn,onCommitCardClick:ke,unpushedCommitShasSetByBranch:cn,checkedOutHeadSha:uo,orientation:be}),co&&zs?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:co.left,top:co.top,width:co.width,height:co.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(tS,{commitDialogOpen:Ee,commitMessageDraft:Se,onCommitMessageDraftChange:Je,onCommitDialogClose:()=>le(!1),onCommitConfirm:()=>void Xe(),commitInProgress:P,deleteConfirmOpen:ht,deleteSelectionItems:ta,onDeleteConfirmClose:()=>lt(!1),onDeleteConfirm:()=>void Pt(),deleteInProgress:Y,deletableSelectionCount:Si,newBranchDialogOpen:He,newBranchName:Ct,newBranchCreateMode:ot,onNewBranchNameChange:It,onNewBranchCreateModeChange:kt,onNewBranchDialogClose:()=>gt(!1),onNewBranchConfirm:()=>void $t(),selectedCommitCanCreateBranch:on,currentCheckedOutCommitCanCreateBranch:Qt,createBranchFromNodeInProgress:me})]})}function lS({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y={},branchCommitPreviews:g={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:S="",gridSearchJumpToken:k=0,gridSearchJumpDirection:j=1,gridFocusSha:E=null,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:z,onGridSearchFocusChange:O,view:R="time",isLoading:q=!1,scrollRequest:Y,focusedErrorBranch:K,checkedOutRef:V=null,mapTopInsetPx:ee=0,onMergeRefsIntoBranch:ae,mergeInProgress:re=!1,onPushAllBranches:Ae,onPushCurrentBranch:We,onPushCommitTargets:ne,pushInProgress:pe=!1,onDeleteSelection:P,worktrees:ie=[],currentRepoPath:F,onRemoveWorktree:_e,removeWorktreeInProgress:Te=!1,onSwitchToWorktree:I,onStashLocalChanges:me,stashInProgress:se=!1,stashDisabled:he=!1,onCommitLocalChanges:be,commitInProgress:Re=!1,commitDisabled:$e=!1,onStageAllChanges:Ue,stageInProgress:Qe=!1,onCreateBranchFromNode:Lt,onCreateRootBranch:Dt,createBranchFromNodeInProgress:Fe=!1,onMoveNodeBackToBranch:rt,isDebugOpen:Tt=!1,onDebugClose:nn,orientation:Xt="horizontal",onInteractionChange:Pe,manuallyOpenedClumps:ce,manuallyClosedClumps:nt,setManuallyOpenedClumps:st,setManuallyClosedClumps:et,layoutModel:Ze,gridHudProps:ft}){const dt=new Set(u.map(H=>H.branchName)),wt=14*864e5,St=Date.now();function Ut(H){return dt.has(H.name)||St-new Date(H.lastCommitDate).getTime()<=wt}const it=t.filter(H=>H.status==="stale"&&Ut(H)).sort((H,te)=>new Date(te.lastCommitDate).getTime()-new Date(H.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:R==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(Ay,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:S,gridSearchJumpToken:k,gridSearchJumpDirection:j,gridFocusSha:E,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:z,onGridSearchFocusChange:O,staleBranches:it,isLoading:q,scrollRequest:Y,focusedErrorBranch:K,checkedOutRef:V,mapTopInsetPx:ee,onMergeRefsIntoBranch:ae,mergeInProgress:re,onPushAllBranches:Ae,onPushCurrentBranch:We,onPushCommitTargets:ne,pushInProgress:pe,onDeleteSelection:P,worktrees:ie,currentRepoPath:F,onRemoveWorktree:_e,removeWorktreeInProgress:Te,onSwitchToWorktree:I,onStashLocalChanges:me,stashInProgress:se,stashDisabled:he,onCommitLocalChanges:be,commitInProgress:Re,commitDisabled:$e,onStageAllChanges:Ue,stageInProgress:Qe,onCreateBranchFromNode:Lt,onCreateRootBranch:Dt,createBranchFromNodeInProgress:Fe,onMoveNodeBackToBranch:rt,isDebugOpen:Tt,onDebugClose:nn,orientation:Xt,onInteractionChange:Pe,manuallyOpenedClumps:ce,manuallyClosedClumps:nt,setManuallyOpenedClumps:st,setManuallyClosedClumps:et,layoutModel:Ze,gridHudProps:ft})}):R==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(Ay,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:S,gridSearchJumpToken:k,gridSearchJumpDirection:j,gridFocusSha:E,checkedOutRef:V,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:z,onGridSearchFocusChange:O,onInteractionChange:Pe,manuallyOpenedClumps:ce,manuallyClosedClumps:nt,setManuallyOpenedClumps:st,setManuallyClosedClumps:et,layoutModel:Ze,isDebugOpen:Tt,onDebugClose:nn,orientation:Xt,gridHudProps:ft})}):null})}const pp=_.createContext({});function Bc(t){const n=_.useRef(null);return n.current===null&&(n.current=t()),n.current}const cS=typeof window<"u",_p=cS?_.useLayoutEffect:_.useEffect,Id=_.createContext(null);function gp(t,n){t.indexOf(n)===-1&&t.push(n)}function gl(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const fa=(t,n,i)=>i>n?n:i<t?t:i;let yp=()=>{};const ar={},Jx=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function eb(t){return typeof t=="object"&&t!==null}const tb=t=>/^0[^.\s]+$/u.test(t);function nb(t){let n;return()=>(n===void 0&&(n=t()),n)}const zi=t=>t,uS=(t,n)=>i=>n(t(i)),Lc=(...t)=>t.reduce(uS),yl=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class xp{constructor(){this.subscriptions=[]}add(n){return gp(this.subscriptions,n),()=>gl(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ci=t=>t*1e3,Oi=t=>t/1e3;function sb(t,n){return n?t*(1e3/n):0}const dS=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},ob=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,fS=1e-7,hS=12;function mS(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=ob(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>fS&&++h<hS);return d}function Oc(t,n,i,a){if(t===n&&i===a)return zi;const c=u=>mS(u,0,1,t,i);return u=>u===0||u===1?u:ob(c(u),n,a)}const ib=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,ab=t=>n=>1-t(1-n),rb=Oc(.33,1.53,.69,.99),bp=ab(rb),lb=ib(bp),cb=t=>t>=1?1:(t*=2)<1?.5*bp(t):.5*(2-Math.pow(2,-10*(t-1))),vp=t=>1-Math.sin(Math.acos(t)),ub=ab(vp),db=ib(vp),pS=Oc(.42,0,1,1),_S=Oc(0,0,.58,1),fb=Oc(.42,0,.58,1),hb=t=>Array.isArray(t)&&typeof t[0]!="number";function mb(t,n){return hb(t)?t[dS(0,t.length,n)]:t}const pb=t=>Array.isArray(t)&&typeof t[0]=="number",gS={linear:zi,easeIn:pS,easeInOut:fb,easeOut:_S,circIn:vp,circInOut:db,circOut:ub,backIn:bp,backInOut:lb,backOut:rb,anticipate:cb},yS=t=>typeof t=="string",Ny=t=>{if(pb(t)){yp(t.length===4);const[n,i,a,c]=t;return Oc(n,i,a,c)}else if(yS(t))return gS[t];return t},Xu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function xS(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(g){d.has(g)&&(y.schedule(g),t()),g(h)}const y={schedule:(g,x=!1,b=!1)=>{const k=b&&c?i:a;return x&&d.add(g),k.add(g),g},cancel:g=>{a.delete(g),d.delete(g)},process:g=>{if(h=g,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,y.process(g))}};return y}const bS=40;function _b(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=Xu.reduce((O,R)=>(O[R]=xS(u),O),{}),{setup:h,read:p,resolveKeyframes:y,preUpdate:g,update:x,preRender:b,render:S,postRender:k}=d,j=()=>{const O=ar.useManualTiming,R=O?c.timestamp:performance.now();i=!1,O||(c.delta=a?1e3/60:Math.max(Math.min(R-c.timestamp,bS),1)),c.timestamp=R,c.isProcessing=!0,h.process(c),p.process(c),y.process(c),g.process(c),x.process(c),b.process(c),S.process(c),k.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(j))},E=()=>{i=!0,a=!0,c.isProcessing||t(j)};return{schedule:Xu.reduce((O,R)=>{const q=d[R];return O[R]=(Y,K=!1,V=!1)=>(i||E(),q.schedule(Y,K,V)),O},{}),cancel:O=>{for(let R=0;R<Xu.length;R++)d[Xu[R]].cancel(O)},state:c,steps:d}}const{schedule:ss,cancel:Na,state:Oo,steps:Zh}=_b(typeof requestAnimationFrame<"u"?requestAnimationFrame:zi,!0);let _d;function vS(){_d=void 0}const Qo={now:()=>(_d===void 0&&Qo.set(Oo.isProcessing||ar.useManualTiming?Oo.timestamp:performance.now()),_d),set:t=>{_d=t,queueMicrotask(vS)}},gb=t=>n=>typeof n=="string"&&n.startsWith(t),yb=gb("--"),wS=gb("var(--"),wp=t=>wS(t)?SS.test(t.split("/*")[0].trim()):!1,SS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Dy(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const wl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ec={...wl,transform:t=>fa(0,1,t)},Gu={...wl,default:1},vc=t=>Math.round(t*1e5)/1e5,Sp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function CS(t){return t==null}const kS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Cp=(t,n)=>i=>!!(typeof i=="string"&&kS.test(i)&&i.startsWith(t)||n&&!CS(i)&&Object.prototype.hasOwnProperty.call(i,n)),xb=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(Sp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},jS=t=>fa(0,255,t),Jh={...wl,transform:t=>Math.round(jS(t))},Tr={test:Cp("rgb","red"),parse:xb("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+Jh.transform(t)+", "+Jh.transform(n)+", "+Jh.transform(i)+", "+vc(Ec.transform(a))+")"};function MS(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const Dm={test:Cp("#"),parse:MS,transform:Tr.transform},zc=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),nr=zc("deg"),da=zc("%"),Et=zc("px"),ES=zc("vh"),TS=zc("vw"),Ry={...da,parse:t=>da.parse(t)/100,transform:t=>da.transform(t*100)},fl={test:Cp("hsl","hue"),parse:xb("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+da.transform(vc(n))+", "+da.transform(vc(i))+", "+vc(Ec.transform(a))+")"},to={test:t=>Tr.test(t)||Dm.test(t)||fl.test(t),parse:t=>Tr.test(t)?Tr.parse(t):fl.test(t)?fl.parse(t):Dm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Tr.transform(t):fl.transform(t),getAnimatableNone:t=>{const n=to.parse(t);return n.alpha=0,to.transform(n)}},AS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function NS(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(Sp))==null?void 0:n.length)||0)+(((i=t.match(AS))==null?void 0:i.length)||0)>0}const bb="number",vb="color",DS="var",RS="var(",By="${}",BS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function xl(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(BS,p=>(to.test(p)?(a.color.push(u),c.push(vb),i.push(to.parse(p))):p.startsWith(RS)?(a.var.push(u),c.push(DS),i.push(p)):(a.number.push(u),c.push(bb),i.push(parseFloat(p))),++u,By)).split(By);return{values:i,split:h,indexes:a,types:c}}function LS(t){return xl(t).values}function wb({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===bb?c+=vc(a[u]):d===vb?c+=to.transform(a[u]):c+=a[u]}return c}}function OS(t){return wb(xl(t))}const zS=t=>typeof t=="number"?0:to.test(t)?to.getAnimatableNone(t):t,$S=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:zS(t);function IS(t){const n=xl(t);return wb(n)(n.values.map((a,c)=>$S(a,n.split[c])))}const Ji={test:NS,parse:LS,createTransformer:OS,getAnimatableNone:IS};function em(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function PS({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=em(p,h,t+1/3),u=em(p,h,t),d=em(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Ed(t,n){return i=>i>0?n:t}const hs=(t,n,i)=>t+(n-t)*i,tm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},HS=[Dm,Tr,fl],US=t=>HS.find(n=>n.test(t));function Ly(t){const n=US(t);if(!n)return!1;let i=n.parse(t);return n===fl&&(i=PS(i)),i}const Oy=(t,n)=>{const i=Ly(t),a=Ly(n);if(!i||!a)return Ed(t,n);const c={...i};return u=>(c.red=tm(i.red,a.red,u),c.green=tm(i.green,a.green,u),c.blue=tm(i.blue,a.blue,u),c.alpha=hs(i.alpha,a.alpha,u),Tr.transform(c))},Rm=new Set(["none","hidden"]);function VS(t,n){return Rm.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function YS(t,n){return i=>hs(t,n,i)}function kp(t){return typeof t=="number"?YS:typeof t=="string"?wp(t)?Ed:to.test(t)?Oy:XS:Array.isArray(t)?Sb:typeof t=="object"?to.test(t)?Oy:WS:Ed}function Sb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>kp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function WS(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=kp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function FS(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const XS=(t,n)=>{const i=Ji.createTransformer(n),a=xl(t),c=xl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Rm.has(t)&&!c.values.length||Rm.has(n)&&!a.values.length?VS(t,n):Lc(Sb(FS(a,c),c.values),i):Ed(t,n)};function Cb(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?hs(t,n,i):kp(t)(t,n)}const GS=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>ss.update(n,i),stop:()=>Na(n),now:()=>Oo.isProcessing?Oo.timestamp:Qo.now()}},kb=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Td=2e4;function jp(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Td;)n+=i,a=t.next(n);return n>=Td?1/0:n}function jb(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(jp(a),Td);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Oi(c)}}const Bs={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Bm(t,n){return t*Math.sqrt(1-n*n)}const qS=12;function KS(t,n,i){let a=i;for(let c=1;c<qS;c++)a=a-t(a)/n(a);return a}const nm=.001;function QS({duration:t=Bs.duration,bounce:n=Bs.bounce,velocity:i=Bs.velocity,mass:a=Bs.mass}){let c,u,d=1-n;d=fa(Bs.minDamping,Bs.maxDamping,d),t=fa(Bs.minDuration,Bs.maxDuration,Oi(t)),d<1?(c=y=>{const g=y*d,x=g*t,b=g-i,S=Bm(y,d),k=Math.exp(-x);return nm-b/S*k},u=y=>{const x=y*d*t,b=x*i+i,S=Math.pow(d,2)*Math.pow(y,2)*t,k=Math.exp(-x),j=Bm(Math.pow(y,2),d);return(-c(y)+nm>0?-1:1)*((b-S)*k)/j}):(c=y=>{const g=Math.exp(-y*t),x=(y-i)*t+1;return-nm+g*x},u=y=>{const g=Math.exp(-y*t),x=(i-y)*(t*t);return g*x});const h=5/t,p=KS(c,u,h);if(t=ci(t),isNaN(p))return{stiffness:Bs.stiffness,damping:Bs.damping,duration:t};{const y=Math.pow(p,2)*a;return{stiffness:y,damping:d*2*Math.sqrt(a*y),duration:t}}}const ZS=["duration","bounce"],JS=["stiffness","damping","mass"];function zy(t,n){return n.some(i=>t[i]!==void 0)}function e4(t){let n={velocity:Bs.velocity,stiffness:Bs.stiffness,damping:Bs.damping,mass:Bs.mass,isResolvedFromDuration:!1,...t};if(!zy(t,JS)&&zy(t,ZS))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*fa(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Bs.mass,stiffness:c,damping:u}}else{const i=QS({...t,velocity:0});n={...n,...i,mass:Bs.mass},n.isResolvedFromDuration=!0}return n}function Tc(t=Bs.visualDuration,n=Bs.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:y,mass:g,duration:x,velocity:b,isResolvedFromDuration:S}=e4({...i,velocity:-Oi(i.velocity||0)}),k=b||0,j=y/(2*Math.sqrt(p*g)),E=d-u,T=Oi(Math.sqrt(p/g)),z=Math.abs(E)<5;a||(a=z?Bs.restSpeed.granular:Bs.restSpeed.default),c||(c=z?Bs.restDelta.granular:Bs.restDelta.default);let O,R,q,Y,K,V;if(j<1)q=Bm(T,j),Y=(k+j*T*E)/q,O=ae=>{const re=Math.exp(-j*T*ae);return d-re*(Y*Math.sin(q*ae)+E*Math.cos(q*ae))},K=j*T*Y+E*q,V=j*T*E-Y*q,R=ae=>Math.exp(-j*T*ae)*(K*Math.sin(q*ae)+V*Math.cos(q*ae));else if(j===1){O=re=>d-Math.exp(-T*re)*(E+(k+T*E)*re);const ae=k+T*E;R=re=>Math.exp(-T*re)*(T*ae*re-k)}else{const ae=T*Math.sqrt(j*j-1);O=ne=>{const pe=Math.exp(-j*T*ne),P=Math.min(ae*ne,300);return d-pe*((k+j*T*E)*Math.sinh(P)+ae*E*Math.cosh(P))/ae};const re=(k+j*T*E)/ae,Ae=j*T*re-E*ae,We=j*T*E-re*ae;R=ne=>{const pe=Math.exp(-j*T*ne),P=Math.min(ae*ne,300);return pe*(Ae*Math.sinh(P)+We*Math.cosh(P))}}const ee={calculatedDuration:S&&x||null,velocity:ae=>ci(R(ae)),next:ae=>{if(!S&&j<1){const Ae=Math.exp(-j*T*ae),We=Math.sin(q*ae),ne=Math.cos(q*ae),pe=d-Ae*(Y*We+E*ne),P=ci(Ae*(K*We+V*ne));return h.done=Math.abs(P)<=a&&Math.abs(d-pe)<=c,h.value=h.done?d:pe,h}const re=O(ae);if(S)h.done=ae>=x;else{const Ae=ci(R(ae));h.done=Math.abs(Ae)<=a&&Math.abs(d-re)<=c}return h.value=h.done?d:re,h},toString:()=>{const ae=Math.min(jp(ee),Td),re=kb(Ae=>ee.next(ae*Ae).value,ae,30);return ae+"ms "+re},toTransition:()=>{}};return ee}Tc.applyToOptions=t=>{const n=jb(t,100,Tc);return t.ease=n.ease,t.duration=ci(n.duration),t.type="keyframes",t};const t4=5;function Mb(t,n,i){const a=Math.max(n-t4,0);return sb(i-t(a),n-a)}function Lm({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:y=.5,restSpeed:g}){const x=t[0],b={done:!1,value:x},S=V=>h!==void 0&&V<h||p!==void 0&&V>p,k=V=>h===void 0?p:p===void 0||Math.abs(h-V)<Math.abs(p-V)?h:p;let j=i*n;const E=x+j,T=d===void 0?E:d(E);T!==E&&(j=T-x);const z=V=>-j*Math.exp(-V/a),O=V=>T+z(V),R=V=>{const ee=z(V),ae=O(V);b.done=Math.abs(ee)<=y,b.value=b.done?T:ae};let q,Y;const K=V=>{S(b.value)&&(q=V,Y=Tc({keyframes:[b.value,k(b.value)],velocity:Mb(O,V,b.value),damping:c,stiffness:u,restDelta:y,restSpeed:g}))};return K(0),{calculatedDuration:null,next:V=>{let ee=!1;return!Y&&q===void 0&&(ee=!0,R(V),K(V)),q!==void 0&&V>=q?Y.next(V-q):(!ee&&R(V),b)}}}function n4(t,n,i){const a=[],c=i||ar.mix||Cb,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||zi:n;h=Lc(p,h)}a.push(h)}return a}function Eb(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(yp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=n4(n,a,c),p=h.length,y=g=>{if(d&&g<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(g<t[x+1]);x++);const b=yl(t[x],t[x+1],g);return h[x](b)};return i?g=>y(fa(t[0],t[u-1],g)):y}function Tb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=yl(0,n,a);t.push(hs(i,1,c))}}function Ab(t){const n=[0];return Tb(n,t.length-1),n}function s4(t,n){return t.map(i=>i*n)}function o4(t,n){return t.map(()=>n||fb).splice(0,t.length-1)}function wc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=hb(a)?a.map(Ny):Ny(a),u={done:!1,value:n[0]},d=s4(i&&i.length===n.length?i:Ab(n),t),h=Eb(d,n,{ease:Array.isArray(c)?c:o4(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const i4=t=>t!==null;function Pd(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(i4),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const a4={decay:Lm,inertia:Lm,tween:wc,keyframes:wc,spring:Tc};function Nb(t){typeof t.type=="string"&&(t.type=a4[t.type])}class Mp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const r4=t=>t/100;class Ad extends Mp{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==Qo.now()&&this.tick(Qo.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Nb(n);const{type:i=wc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||wc;p!==wc&&typeof h[0]!="number"&&(this.mixKeyframes=Lc(r4,Cb(h[0],h[1])),h=[0,100]);const y=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),y.calculatedDuration===null&&(y.calculatedDuration=jp(y));const{calculatedDuration:g}=y;this.calculatedDuration=g,this.resolvedDuration=g+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=y}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:y=0,keyframes:g,repeat:x,repeatType:b,repeatDelay:S,type:k,onUpdate:j,finalKeyframe:E}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const T=this.currentTime-y*(this.playbackSpeed>=0?1:-1),z=this.playbackSpeed>=0?T<0:T>c;this.currentTime=Math.max(T,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let O=this.currentTime,R=a;if(x){const V=Math.min(this.currentTime,c)/h;let ee=Math.floor(V),ae=V%1;!ae&&V>=1&&(ae=1),ae===1&&ee--,ee=Math.min(ee,x+1),!!(ee%2)&&(b==="reverse"?(ae=1-ae,S&&(ae-=S/h)):b==="mirror"&&(R=d)),O=fa(0,1,ae)*h}let q;z?(this.delayState.value=g[0],q=this.delayState):q=R.next(O),u&&!z&&(q.value=u(q.value));let{done:Y}=q;!z&&p!==null&&(Y=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const K=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Y);return K&&k!==Lm&&(q.value=Pd(g,this.options,E,this.speed)),j&&j(q.value),K&&this.finish(),q}then(n,i){return this.finished.then(n,i)}get duration(){return Oi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Oi(n)}get time(){return Oi(this.currentTime)}set time(n){n=ci(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Mb(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(Qo.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Oi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=GS,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Qo.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function l4(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const Ar=t=>t*180/Math.PI,Om=t=>{const n=Ar(Math.atan2(t[1],t[0]));return zm(n)},c4={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Om,rotateZ:Om,skewX:t=>Ar(Math.atan(t[1])),skewY:t=>Ar(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},zm=t=>(t=t%360,t<0&&(t+=360),t),$y=Om,Iy=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Py=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),u4={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Iy,scaleY:Py,scale:t=>(Iy(t)+Py(t))/2,rotateX:t=>zm(Ar(Math.atan2(t[6],t[5]))),rotateY:t=>zm(Ar(Math.atan2(-t[2],t[0]))),rotateZ:$y,rotate:$y,skewX:t=>Ar(Math.atan(t[4])),skewY:t=>Ar(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function $m(t){return t.includes("scale")?1:0}function Im(t,n){if(!t||t==="none")return $m(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=u4,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=c4,c=h}if(!c)return $m(n);const u=a[n],d=c[1].split(",").map(f4);return typeof u=="function"?u(d):d[u]}const d4=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Im(i,n)};function f4(t){return parseFloat(t.trim())}const Sl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Cl=new Set(Sl),Hy=t=>t===wl||t===Et,h4=new Set(["x","y","z"]),m4=Sl.filter(t=>!h4.has(t));function p4(t){const n=[];return m4.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const ir={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Im(n,"x"),y:(t,{transform:n})=>Im(n,"y")};ir.translateX=ir.x;ir.translateY=ir.y;const Nr=new Set;let Pm=!1,Hm=!1,Um=!1;function Db(){if(Hm){const t=Array.from(Nr).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=p4(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Hm=!1,Pm=!1,Nr.forEach(t=>t.complete(Um)),Nr.clear()}function Rb(){Nr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Hm=!0)})}function _4(){Um=!0,Rb(),Db(),Um=!1}class Ep{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Nr.add(this),Pm||(Pm=!0,ss.read(Rb),ss.resolveKeyframes(Db))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}l4(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Nr.delete(this)}cancel(){this.state==="scheduled"&&(Nr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const g4=t=>t.startsWith("--");function Bb(t,n,i){g4(n)?t.style.setProperty(n,i):t.style[n]=i}const y4={};function Lb(t,n){const i=nb(t);return()=>{var a;return(a=y4[n])!=null?a:i()}}const x4=Lb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Ob=Lb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),gc=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,Uy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:gc([0,.65,.55,1]),circOut:gc([.55,0,1,.45]),backIn:gc([.31,.01,.66,-.59]),backOut:gc([.33,1.53,.69,.99])};function zb(t,n){if(t)return typeof t=="function"?Ob()?kb(t,n):"ease-out":pb(t)?gc(t):Array.isArray(t)?t.map(i=>zb(i,n)||Uy.easeOut):Uy[t]}function b4(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},y=void 0){const g={[n]:i};p&&(g.offset=p);const x=zb(h,c);Array.isArray(x)&&(g.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return y&&(b.pseudoElement=y),t.animate(g,b)}function Tp(t){return typeof t=="function"&&"applyToOptions"in t}function v4({type:t,...n}){var i,a;return Tp(t)&&Ob()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class $b extends Mp{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,yp(typeof n.type!="string");const y=v4(n);this.animation=b4(i,a,c,y,u),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=Pd(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(g),Bb(i,a,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Oi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Oi(n)}get time(){return Oi(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ci(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&x4()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),zi):c(this)}}const Ib={anticipate:cb,backInOut:lb,circInOut:db};function w4(t){return t in Ib}function S4(t){typeof t.ease=="string"&&w4(t.ease)&&(t.ease=Ib[t.ease])}const sm=10;class C4 extends $b{constructor(n){S4(n),Nb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Ad({...d,autoplay:!1}),p=Math.max(sm,Qo.now()-this.startTime),y=fa(0,sm,p-sm),g=h.sample(p).value,{name:x}=this.options;u&&x&&Bb(u,x,g),i.setWithVelocity(h.sample(Math.max(0,p-y)).value,g,y),h.stop()}}const Vy=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ji.test(t)||t==="0")&&!t.startsWith("url("));function k4(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function j4(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=Vy(c,n),h=Vy(u,n);return!d||!h?!1:k4(t)||(i==="spring"||Tp(i))&&a}function Vm(t){t.duration=0,t.type="keyframes"}const Pb=new Set(["opacity","clipPath","filter","transform"]),M4=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function E4(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&M4.test(t[n]))return!0;return!1}const T4=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),A4=nb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function N4(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:g}=n.owner.getProps();return A4()&&i&&(Pb.has(i)||T4.has(i)&&E4(h))&&(i!=="transform"||!g)&&!y&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const D4=40;class R4 extends Mp{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:y,element:g,...x}){var k;super(),this.stop=()=>{var j,E;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(E=this.keyframeResolver)==null||E.cancel()},this.createdAt=Qo.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:y,element:g,...x},S=(g==null?void 0:g.KeyframeResolver)||Ep;this.keyframeResolver=new S(h,(j,E,T)=>this.onKeyframesResolved(j,E,b,!T),p,y,g),(k=this.keyframeResolver)==null||k.scheduleResolve()}onKeyframesResolved(n,i,a,c){var T,z;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:y,onUpdate:g}=a;this.resolvedAt=Qo.now();let x=!0;j4(n,u,d,h)||(x=!1,(ar.instantAnimations||!p)&&(g==null||g(Pd(n,a,i))),n[0]=n[n.length-1],Vm(a),a.repeat=0);const S={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>D4?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},k=x&&!y&&N4(S),j=(z=(T=S.motionValue)==null?void 0:T.owner)==null?void 0:z.current;let E;if(k)try{E=new C4({...S,element:j})}catch{E=new Ad(S)}else E=new Ad(S);E.finished.then(()=>{this.notifyFinished()}).catch(zi),this.pendingTimeline&&(this.stopTimeline=E.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=E}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),_4()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class B4{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return Yy(this.animations,"duration")}get iterationDuration(){return Yy(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Yy(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class L4 extends B4{then(n,i){return this.finished.finally(n).then(()=>{})}}function Hb(t,n,i,a=0,c=1){const u=Array.from(t).sort((y,g)=>y.sortNodePosition(g)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const O4=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function z4(t){const n=O4.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function Ub(t,n,i=1){const[a,c]=z4(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return Jx(d)?parseFloat(d):d}return wp(c)?Ub(c,n,i+1):c}const $4={type:"spring",stiffness:500,damping:25,restSpeed:10},I4=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),P4={type:"keyframes",duration:.8},H4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},U4=(t,{keyframes:n})=>n.length>2?P4:Cl.has(t)?t.startsWith("scale")?I4(n[1]):$4:H4;function Vb(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Ap(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?Vb(i,t):i}const V4=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Y4(t){for(const n in t)if(!V4.has(n))return!0;return!1}const Np=(t,n,i,a={},c,u)=>d=>{const h=Ap(a,t)||{},p=h.delay||a.delay||0;let{elapsed:y=0}=a;y=y-ci(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-y,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};Y4(h)||Object.assign(g,U4(t,g)),g.duration&&(g.duration=ci(g.duration)),g.repeatDelay&&(g.repeatDelay=ci(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let x=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Vm(g),g.delay===0&&(x=!0)),(ar.instantAnimations||ar.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,Vm(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=Pd(g.keyframes,h);if(b!==void 0){ss.update(()=>{g.onUpdate(b),g.onComplete()});return}}return h.isSync?new Ad(g):new R4(g)};function Wy(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Dp(t,n,i,a){if(typeof n=="function"){const[c,u]=Wy(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=Wy(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function Dr(t,n,i){const a=t.getProps();return Dp(a,n,i!==void 0?i:a.custom,t)}const Yb=new Set(["width","height","top","left","right","bottom",...Sl]),Fy=30,W4=t=>!isNaN(parseFloat(t)),Sc={current:void 0};class F4{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=Qo.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Qo.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=W4(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new xp);const a=this.events[n].add(i);return n==="change"?()=>{a(),ss.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Sc.current&&Sc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=Qo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>Fy)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,Fy);return sb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function rr(t,n){return new F4(t,n)}const Ym=t=>Array.isArray(t);function X4(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,rr(i))}function G4(t){return Ym(t)?t[t.length-1]||0:t}function q4(t,n){const i=Dr(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=G4(u[d]);X4(t,d,h)}}const yo=t=>!!(t&&t.getVelocity);function K4(t){return!!(yo(t)&&t.add)}function Wm(t,n){const i=t.getValue("willChange");if(K4(i))return i.add(n);if(!i&&ar.WillChange){const a=new ar.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Rp(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const Q4="framerAppearId",Wb="data-"+Rp(Q4);function Fb(t){return t.props[Wb]}function Z4({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Bp(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?Vb(u,p):p;const y=u==null?void 0:u.reduceMotion;a&&(u=a);const g=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const S in h){const k=t.getValue(S,(b=t.latestValues[S])!=null?b:null),j=h[S];if(j===void 0||x&&Z4(x,S))continue;const E={delay:i,...Ap(u||{},S)},T=k.get();if(T!==void 0&&!k.isAnimating()&&!Array.isArray(j)&&j===T&&!E.velocity){ss.update(()=>k.set(j));continue}let z=!1;if(window.MotionHandoffAnimation){const q=Fb(t);if(q){const Y=window.MotionHandoffAnimation(q,S,ss);Y!==null&&(E.startTime=Y,z=!0)}}Wm(t,S);const O=y!=null?y:t.shouldReduceMotion;k.start(Np(S,k,j,O&&Yb.has(S)?{type:!1}:E,t,z));const R=k.animation;R&&g.push(R)}if(d){const S=()=>ss.update(()=>{d&&q4(t,d)});g.length?Promise.all(g).then(S):S()}return g}function Fm(t,n,i={}){var p;const a=Dr(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Bp(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(y=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:b}=c;return J4(t,n,y,g,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[y,g]=h==="beforeChildren"?[u,d]:[d,u];return y().then(()=>g())}else return Promise.all([u(),d(i.delay)])}function J4(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Fm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Hb(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function e6(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Fm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Fm(t,n,i);else{const c=typeof n=="function"?Dr(t,n,i.custom):n;a=Promise.all(Bp(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const t6={test:t=>t==="auto",parse:t=>t},Xb=t=>n=>n.test(t),Gb=[wl,Et,da,nr,TS,ES,t6],Xy=t=>Gb.find(Xb(t));function n6(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||tb(t):!0}const s6=new Set(["brightness","contrast","saturate","opacity"]);function o6(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(Sp)||[];if(!a)return t;const c=i.replace(a,"");let u=s6.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const i6=/\b([a-z-]*)\(.*?\)/gu,Xm={...Ji,getAnimatableNone:t=>{const n=t.match(i6);return n?n.map(o6).join(" "):t}},Gm={...Ji,getAnimatableNone:t=>{const n=Ji.parse(t);return Ji.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},Gy={...wl,transform:Math.round},a6={rotate:nr,rotateX:nr,rotateY:nr,rotateZ:nr,scale:Gu,scaleX:Gu,scaleY:Gu,scaleZ:Gu,skew:nr,skewX:nr,skewY:nr,distance:Et,translateX:Et,translateY:Et,translateZ:Et,x:Et,y:Et,z:Et,perspective:Et,transformPerspective:Et,opacity:Ec,originX:Ry,originY:Ry,originZ:Et},Lp={borderWidth:Et,borderTopWidth:Et,borderRightWidth:Et,borderBottomWidth:Et,borderLeftWidth:Et,borderRadius:Et,borderTopLeftRadius:Et,borderTopRightRadius:Et,borderBottomRightRadius:Et,borderBottomLeftRadius:Et,width:Et,maxWidth:Et,height:Et,maxHeight:Et,top:Et,right:Et,bottom:Et,left:Et,inset:Et,insetBlock:Et,insetBlockStart:Et,insetBlockEnd:Et,insetInline:Et,insetInlineStart:Et,insetInlineEnd:Et,padding:Et,paddingTop:Et,paddingRight:Et,paddingBottom:Et,paddingLeft:Et,paddingBlock:Et,paddingBlockStart:Et,paddingBlockEnd:Et,paddingInline:Et,paddingInlineStart:Et,paddingInlineEnd:Et,margin:Et,marginTop:Et,marginRight:Et,marginBottom:Et,marginLeft:Et,marginBlock:Et,marginBlockStart:Et,marginBlockEnd:Et,marginInline:Et,marginInlineStart:Et,marginInlineEnd:Et,fontSize:Et,backgroundPositionX:Et,backgroundPositionY:Et,...a6,zIndex:Gy,fillOpacity:Ec,strokeOpacity:Ec,numOctaves:Gy},r6={...Lp,color:to,backgroundColor:to,outlineColor:to,fill:to,stroke:to,borderColor:to,borderTopColor:to,borderRightColor:to,borderBottomColor:to,borderLeftColor:to,filter:Xm,WebkitFilter:Xm,mask:Gm,WebkitMask:Gm},qb=t=>r6[t],l6=new Set([Xm,Gm]);function Kb(t,n){let i=qb(t);return l6.has(i)||(i=Ji),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const c6=new Set(["auto","none","0"]);function u6(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!c6.has(u)&&xl(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=Kb(i,c)}class d6 extends Ep{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let g=0;g<n.length;g++){let x=n[g];if(typeof x=="string"&&(x=x.trim(),wp(x))){const b=Ub(x,i.current);b!==void 0&&(n[g]=b),g===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!Yb.has(a)||n.length!==2)return;const[c,u]=n,d=Xy(c),h=Xy(u),p=Dy(c),y=Dy(u);if(p!==y&&ir[a]){this.needsMeasurement=!0;return}if(d!==h)if(Hy(d)&&Hy(h))for(let g=0;g<n.length;g++){const x=n[g];typeof x=="string"&&(n[g]=parseFloat(x))}else ir[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||n6(n[c]))&&a.push(c);a.length&&u6(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ir[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=ir[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,y])=>{n.getValue(p).set(y)}),this.resolveNoneKeyframes()}}function Op(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const Qb=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function gd(t){return eb(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:zp}=_b(queueMicrotask,!1),Ki={x:!1,y:!1};function Zb(){return Ki.x||Ki.y}function f6(t){return t==="x"||t==="y"?Ki[t]?null:(Ki[t]=!0,()=>{Ki[t]=!1}):Ki.x||Ki.y?null:(Ki.x=Ki.y=!0,()=>{Ki.x=Ki.y=!1})}function Jb(t,n){const i=Op(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function h6(t){return!(t.pointerType==="touch"||Zb())}function m6(t,n,i={}){const[a,c,u]=Jb(t,i);return a.forEach(d=>{let h=!1,p=!1,y;const g=()=>{d.removeEventListener("pointerleave",k)},x=E=>{y&&(y(E),y=void 0),g()},b=E=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(E))},S=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},k=E=>{if(E.pointerType!=="touch"){if(h){p=!0;return}x(E)}},j=E=>{if(!h6(E))return;p=!1;const T=n(d,E);typeof T=="function"&&(y=T,d.addEventListener("pointerleave",k,c))};d.addEventListener("pointerenter",j,c),d.addEventListener("pointerdown",S,c)}),u}const e5=(t,n)=>n?t===n?!0:e5(t,n.parentElement):!1,$p=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,p6=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function _6(t){return p6.has(t.tagName)||t.isContentEditable===!0}const g6=new Set(["INPUT","SELECT","TEXTAREA"]);function y6(t){return g6.has(t.tagName)||t.isContentEditable===!0}const yd=new WeakSet;function qy(t){return n=>{n.key==="Enter"&&t(n)}}function om(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const x6=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=qy(()=>{if(yd.has(i))return;om(i,"down");const c=qy(()=>{om(i,"up")}),u=()=>om(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function Ky(t){return $p(t)&&!Zb()}const Qy=new WeakSet;function b6(t,n,i={}){const[a,c,u]=Jb(t,i),d=h=>{const p=h.currentTarget;if(!Ky(h)||Qy.has(h))return;yd.add(p),i.stopPropagation&&Qy.add(h);const y=n(p,h),g=(S,k)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),yd.has(p)&&yd.delete(p),Ky(S)&&typeof y=="function"&&y(S,{success:k})},x=S=>{g(S,p===window||p===document||i.useGlobalTarget||e5(p,S.target))},b=S=>{g(S,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),gd(h)&&(h.addEventListener("focus",y=>x6(y,c)),!_6(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function Hd(t){return eb(t)&&"ownerSVGElement"in t}const xd=new WeakMap;let sr;const t5=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:Hd(a)&&"getBBox"in a?a.getBBox()[n]:a[i],v6=t5("inline","width","offsetWidth"),w6=t5("block","height","offsetHeight");function S6({target:t,borderBoxSize:n}){var i;(i=xd.get(t))==null||i.forEach(a=>{a(t,{get width(){return v6(t,n)},get height(){return w6(t,n)}})})}function C6(t){t.forEach(S6)}function k6(){typeof ResizeObserver>"u"||(sr=new ResizeObserver(C6))}function j6(t,n){sr||k6();const i=Op(t);return i.forEach(a=>{let c=xd.get(a);c||(c=new Set,xd.set(a,c)),c.add(n),sr==null||sr.observe(a)}),()=>{i.forEach(a=>{const c=xd.get(a);c==null||c.delete(n),c!=null&&c.size||sr==null||sr.unobserve(a)})}}const bd=new Set;let hl;function M6(){hl=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};bd.forEach(n=>n(t))},window.addEventListener("resize",hl)}function E6(t){return bd.add(t),hl||M6(),()=>{bd.delete(t),!bd.size&&typeof hl=="function"&&(window.removeEventListener("resize",hl),hl=void 0)}}function Zy(t,n){return typeof t=="function"?E6(t):j6(t,n)}function n5(t){return Hd(t)&&t.tagName==="svg"}function T6(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Eb(c,u,d);return n?h(a):h}const A6=[...Gb,to,Ji],N6=t=>A6.find(Xb(t)),Jy=()=>({translate:0,scale:1,origin:0,originPoint:0}),ml=()=>({x:Jy(),y:Jy()}),e1=()=>({min:0,max:0}),eo=()=>({x:e1(),y:e1()}),Ac=new WeakMap;function Ud(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Nc(t){return typeof t=="string"||Array.isArray(t)}const Ip=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Pp=["initial",...Ip];function Vd(t){return Ud(t.animate)||Pp.some(n=>Nc(t[n]))}function s5(t){return!!(Vd(t)||t.variants)}function D6(t,n,i){for(const a in n){const c=n[a],u=i[a];if(yo(c))t.addValue(a,c);else if(yo(u))t.addValue(a,rr(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,rr(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const qm={current:null},o5={current:!1},R6=typeof window<"u";function B6(){if(o5.current=!0,!!R6)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>qm.current=t.matches;t.addEventListener("change",n),n()}else qm.current=!1}const t1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Nd={};function i5(t){Nd=t}function L6(){return Nd}class a5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ep,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Qo.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,ss.render(this.render,!1,!0))};const{latestValues:y,renderState:g}=h;this.latestValues=y,this.baseTarget={...y},this.initialValues=i.initial?{...y}:{},this.renderState=g,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Vd(i),this.isVariantNode=s5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const S in b){const k=b[S];y[S]!==void 0&&yo(k)&&k.set(y[S])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Ac.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(o5.current||B6(),this.shouldReduceMotion=qm.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),Na(this.notifyUpdate),Na(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Pb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:y,duration:g}=i.accelerate,x=new $b({element:this.current,name:n,keyframes:h,times:p,ease:y,duration:ci(g)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=Cl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&ss.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Nd){const i=Nd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):eo()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<t1.length;a++){const c=t1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=D6(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=rr(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(Jx(a)||tb(a))?a=parseFloat(a):!N6(a)&&Ji.test(i)&&(a=Kb(n,i)),this.setBaseTarget(n,yo(a)?a.get():a)),yo(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Dp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!yo(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new xp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){zp.render(this.render)}}class r5 extends a5{constructor(){super(...arguments),this.KeyframeResolver=d6}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;yo(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class lr{constructor(n){this.isMounted=!1,this.node=n}update(){}}function l5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function O6({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function z6(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function im(t){return t===void 0||t===1}function Km({scale:t,scaleX:n,scaleY:i}){return!im(t)||!im(n)||!im(i)}function jr(t){return Km(t)||c5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function c5(t){return n1(t.x)||n1(t.y)}function n1(t){return t&&t!=="0%"}function Dd(t,n,i){const a=t-i,c=n*a;return i+c}function s1(t,n,i,a,c){return c!==void 0&&(t=Dd(t,c,a)),Dd(t,i,a)+n}function Qm(t,n=0,i=1,a,c){t.min=s1(t.min,n,i,a,c),t.max=s1(t.max,n,i,a,c)}function u5(t,{x:n,y:i}){Qm(t.x,n.translate,n.scale,n.originPoint),Qm(t.y,i.translate,i.scale,i.originPoint)}const o1=.999999999999,i1=1.0000000000001;function $6(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:y}=u.options;y&&y.props.style&&y.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(ca(t.x,-u.scroll.offset.x),ca(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,u5(t,d)),a&&jr(u.latestValues)&&vd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<i1&&n.x>o1&&(n.x=1),n.y<i1&&n.y>o1&&(n.y=1)}function ca(t,n){t.min+=n,t.max+=n}function a1(t,n,i,a,c=.5){const u=hs(t.min,t.max,c);Qm(t,n,i,u,a)}function r1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function vd(t,n,i){const a=i!=null?i:t;a1(t.x,r1(n.x,a.x),n.scaleX,n.scale,n.originX),a1(t.y,r1(n.y,a.y),n.scaleY,n.scale,n.originY)}function d5(t,n){return l5(z6(t.getBoundingClientRect(),n))}function I6(t,n,i){const a=d5(t,i),{scroll:c}=n;return c&&(ca(a.x,c.offset.x),ca(a.y,c.offset.y)),a}const P6={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},H6=Sl.length;function U6(t,n,i){let a="",c=!0;for(let u=0;u<H6;u++){const d=Sl[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const y=parseFloat(h);p=d.startsWith("scale")?y===1:y===0}if(!p||i){const y=Qb(h,Lp[d]);if(!p){c=!1;const g=P6[d]||d;a+=`${g}(${y}) `}i&&(n[d]=y)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Hp(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const y=n[p];if(Cl.has(p)){d=!0;continue}else if(yb(p)){c[p]=y;continue}else{const g=Qb(y,Lp[p]);p.startsWith("origin")?(h=!0,u[p]=g):a[p]=g}}if(n.transform||(d||i?a.transform=U6(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:y="50%",originZ:g=0}=u;a.transformOrigin=`${p} ${y} ${g}`}}function f5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function l1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const rc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(Et.test(t))t=parseFloat(t);else return t;const i=l1(t,n.target.x),a=l1(t,n.target.y);return`${i}% ${a}%`}},V6={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=Ji.parse(t);if(c.length>5)return a;const u=Ji.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const y=hs(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),u(c)}},Zm={borderRadius:{...rc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:rc,borderTopRightRadius:rc,borderBottomLeftRadius:rc,borderBottomRightRadius:rc,boxShadow:V6};function h5(t,{layout:n,layoutId:i}){return Cl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!Zm[t]||t==="opacity")}function Up(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(yo(a[h])||c&&yo(c[h])||h5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function Y6(t){return window.getComputedStyle(t)}class m5 extends r5{constructor(){super(...arguments),this.type="html",this.renderInstance=f5}readValueFromInstance(n,i){var a;if(Cl.has(i))return(a=this.projection)!=null&&a.isProjecting?$m(i):d4(n,i);{const c=Y6(n),u=(yb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return d5(n,i)}build(n,i,a){Hp(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Up(n,i,a)}}function W6(t,n){return t in n}class F6 extends a5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(W6(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return eo()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const X6={offset:"stroke-dashoffset",array:"stroke-dasharray"},G6={offset:"strokeDashoffset",array:"strokeDasharray"};function q6(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?X6:G6;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const K6=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function p5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,y,g){var S,k;if(Hp(t,h,y),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(S=x.transformOrigin)!=null?S:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(k=g==null?void 0:g.transformBox)!=null?k:"fill-box",delete x.transformBox);for(const j of K6)x[j]!==void 0&&(b[j]=x[j],delete x[j]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&q6(x,c,u,d,!1)}const _5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),g5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Q6(t,n,i,a){f5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(_5.has(c)?c:Rp(c),n.attrs[c])}function y5(t,n,i){const a=Up(t,n,i);for(const c in t)if(yo(t[c])||yo(n[c])){const u=Sl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class x5 extends r5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=eo}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(Cl.has(i)){const a=qb(i);return a&&a.default||0}return i=_5.has(i)?i:Rp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return y5(n,i,a)}build(n,i,a){p5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){Q6(n,i,a,c)}mount(n){this.isSVGTag=g5(n.tagName),super.mount(n)}}const Z6=Pp.length;function b5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?b5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<Z6;i++){const a=Pp[i],c=t.props[a];(Nc(c)||c===!1)&&(n[a]=c)}return n}function v5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const J6=[...Ip].reverse(),eC=Ip.length;function tC(t){return n=>Promise.all(n.map(({animation:i,options:a})=>e6(t,i,a)))}function nC(t){let n=tC(t),i=c1(),a=!0,c=!1;const u=y=>(g,x)=>{var S;const b=Dr(t,x,y==="exit"?(S=t.presenceContext)==null?void 0:S.custom:void 0);if(b){const{transition:k,transitionEnd:j,...E}=b;g={...g,...E,...j}}return g};function d(y){n=y(t)}function h(y){const{props:g}=t,x=b5(t.parent)||{},b=[],S=new Set;let k={},j=1/0;for(let T=0;T<eC;T++){const z=J6[T],O=i[z],R=g[z]!==void 0?g[z]:x[z],q=Nc(R),Y=z===y?O.isActive:null;Y===!1&&(j=T);let K=R===x[z]&&R!==g[z]&&q;if(K&&(a||c)&&t.manuallyAnimateOnMount&&(K=!1),O.protectedKeys={...k},!O.isActive&&Y===null||!R&&!O.prevProp||Ud(R)||typeof R=="boolean")continue;if(z==="exit"&&O.isActive&&Y!==!0){O.prevResolvedValues&&(k={...k,...O.prevResolvedValues});continue}const V=sC(O.prevProp,R);let ee=V||z===y&&O.isActive&&!K&&q||T>j&&q,ae=!1;const re=Array.isArray(R)?R:[R];let Ae=re.reduce(u(z),{});Y===!1&&(Ae={});const{prevResolvedValues:We={}}=O,ne={...We,...Ae},pe=F=>{ee=!0,S.has(F)&&(ae=!0,S.delete(F)),O.needsAnimating[F]=!0;const _e=t.getValue(F);_e&&(_e.liveStyle=!1)};for(const F in ne){const _e=Ae[F],Te=We[F];if(k.hasOwnProperty(F))continue;let I=!1;Ym(_e)&&Ym(Te)?I=!v5(_e,Te):I=_e!==Te,I?_e!=null?pe(F):S.add(F):_e!==void 0&&S.has(F)?pe(F):O.protectedKeys[F]=!0}O.prevProp=R,O.prevResolvedValues=Ae,O.isActive&&(k={...k,...Ae}),(a||c)&&t.blockInitialAnimation&&(ee=!1);const P=K&&V;ee&&(!P||ae)&&b.push(...re.map(F=>{const _e={type:z};if(typeof F=="string"&&(a||c)&&!P&&t.manuallyAnimateOnMount&&t.parent){const{parent:Te}=t,I=Dr(Te,F);if(Te.enteringChildren&&I){const{delayChildren:me}=I.transition||{};_e.delay=Hb(Te.enteringChildren,t,me)}}return{animation:F,options:_e}}))}if(S.size){const T={};if(typeof g.initial!="boolean"){const z=Dr(t,Array.isArray(g.initial)?g.initial[0]:g.initial);z&&z.transition&&(T.transition=z.transition)}S.forEach(z=>{const O=t.getBaseTarget(z),R=t.getValue(z);R&&(R.liveStyle=!0),T[z]=O!=null?O:null}),b.push({animation:T})}let E=!!b.length;return a&&(g.initial===!1||g.initial===g.animate)&&!t.manuallyAnimateOnMount&&(E=!1),a=!1,c=!1,E?n(b):Promise.resolve()}function p(y,g){var b;if(i[y].isActive===g)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(S=>{var k;return(k=S.animationState)==null?void 0:k.setActive(y,g)}),i[y].isActive=g;const x=h(y);for(const S in i)i[S].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=c1(),c=!0}}}function sC(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!v5(n,t):!1}function wr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function c1(){return{animate:wr(!0),whileInView:wr(),whileHover:wr(),whileTap:wr(),whileDrag:wr(),whileFocus:wr(),exit:wr()}}function Jm(t,n){t.min=n.min,t.max=n.max}function qi(t,n){Jm(t.x,n.x),Jm(t.y,n.y)}function u1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const w5=1e-4,oC=1-w5,iC=1+w5,S5=.01,aC=0-S5,rC=0+S5;function Zo(t){return t.max-t.min}function lC(t,n,i){return Math.abs(t-n)<=i}function d1(t,n,i,a=.5){t.origin=a,t.originPoint=hs(n.min,n.max,t.origin),t.scale=Zo(i)/Zo(n),t.translate=hs(i.min,i.max,t.origin)-t.originPoint,(t.scale>=oC&&t.scale<=iC||isNaN(t.scale))&&(t.scale=1),(t.translate>=aC&&t.translate<=rC||isNaN(t.translate))&&(t.translate=0)}function Cc(t,n,i,a){d1(t.x,n.x,i.x,a?a.originX:void 0),d1(t.y,n.y,i.y,a?a.originY:void 0)}function f1(t,n,i,a=0){const c=a?hs(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+Zo(n)}function cC(t,n,i,a){f1(t.x,n.x,i.x,a==null?void 0:a.x),f1(t.y,n.y,i.y,a==null?void 0:a.y)}function h1(t,n,i,a=0){const c=a?hs(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+Zo(n)}function Rd(t,n,i,a){h1(t.x,n.x,i.x,a==null?void 0:a.x),h1(t.y,n.y,i.y,a==null?void 0:a.y)}function m1(t,n,i,a,c){return t-=n,t=Dd(t,1/i,a),c!==void 0&&(t=Dd(t,1/c,a)),t}function uC(t,n=0,i=1,a=.5,c,u=t,d=t){if(da.test(n)&&(n=parseFloat(n),n=hs(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=hs(u.min,u.max,a);t===u&&(h-=n),t.min=m1(t.min,n,i,h,c),t.max=m1(t.max,n,i,h,c)}function p1(t,n,[i,a,c],u,d){uC(t,n[i],n[a],n[c],n.scale,u,d)}const dC=["x","scaleX","originX"],fC=["y","scaleY","originY"];function _1(t,n,i,a){p1(t.x,n,dC,i?i.x:void 0,a?a.x:void 0),p1(t.y,n,fC,i?i.y:void 0,a?a.y:void 0)}function g1(t){return t.translate===0&&t.scale===1}function C5(t){return g1(t.x)&&g1(t.y)}function y1(t,n){return t.min===n.min&&t.max===n.max}function hC(t,n){return y1(t.x,n.x)&&y1(t.y,n.y)}function x1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function k5(t,n){return x1(t.x,n.x)&&x1(t.y,n.y)}function b1(t){return Zo(t.x)/Zo(t.y)}function v1(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function la(t){return[t("x"),t("y")]}function mC(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:y,rotate:g,rotateX:x,rotateY:b,skewX:S,skewY:k}=i;y&&(a=`perspective(${y}px) ${a}`),g&&(a+=`rotate(${g}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),S&&(a+=`skewX(${S}deg) `),k&&(a+=`skewY(${k}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const j5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],pC=j5.length,w1=t=>typeof t=="string"?parseFloat(t):t,S1=t=>typeof t=="number"||Et.test(t);function _C(t,n,i,a,c,u){var d,h,p,y;c?(t.opacity=hs(0,(d=i.opacity)!=null?d:1,gC(a)),t.opacityExit=hs((h=n.opacity)!=null?h:1,0,yC(a))):u&&(t.opacity=hs((p=n.opacity)!=null?p:1,(y=i.opacity)!=null?y:1,a));for(let g=0;g<pC;g++){const x=j5[g];let b=C1(n,x),S=C1(i,x);if(b===void 0&&S===void 0)continue;b||(b=0),S||(S=0),b===0||S===0||S1(b)===S1(S)?(t[x]=Math.max(hs(w1(b),w1(S),a),0),(da.test(S)||da.test(b))&&(t[x]+="%")):t[x]=S}(n.rotate||i.rotate)&&(t.rotate=hs(n.rotate||0,i.rotate||0,a))}function C1(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const gC=M5(0,.5,ub),yC=M5(.5,.95,zi);function M5(t,n,i){return a=>a<t?0:a>n?1:i(yl(t,n,a))}function E5(t,n,i){const a=yo(t)?t:rr(t);return a.start(Np("",a,n,i)),a.animation}function Dc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const xC=(t,n)=>t.depth-n.depth;class bC{constructor(){this.children=[],this.isDirty=!1}add(n){gp(this.children,n),this.isDirty=!0}remove(n){gl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(xC),this.isDirty=!1,this.children.forEach(n)}}function vC(t,n){const i=Qo.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(Na(a),t(u-n))};return ss.setup(a,!0),()=>Na(a)}function wd(t){return yo(t)?t.get():t}class wC{constructor(){this.members=[]}add(n){gp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(gl(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(gl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const Sd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},am=["","X","Y","Z"],SC=1e3;let CC=0;function rm(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function T5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=Fb(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",ss,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&T5(a)}function A5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=CC++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(MC),this.nodes.forEach(RC),this.nodes.forEach(BC),this.nodes.forEach(EC)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new bC)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new xp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Hd(d)&&!n5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:y}=this.options;if(y&&!y.current&&y.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let g,x=0;const b=()=>this.root.updateBlockedByResize=!1;ss.read(()=>{x=window.innerWidth}),t(d,()=>{const S=window.innerWidth;S!==x&&(x=S,this.root.updateBlockedByResize=!0,g&&g(),g=vC(b,250),Sd.hasAnimatedSinceResize&&(Sd.hasAnimatedSinceResize=!1,this.nodes.forEach(M1)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&y&&(h||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const k=this.options.transition||y.getDefaultTransition()||IC,{onLayoutAnimationStart:j,onLayoutAnimationComplete:E}=y.getProps(),T=!this.targetLayout||!k5(this.targetLayout,S),z=!x&&b;if(this.options.layoutRoot||this.resumeFrom||z||x&&(T||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const O={...Ap(k,"layout"),onPlay:j,onComplete:E};(y.shouldReduceMotion||this.options.layoutRoot)&&(O.delay=0,O.type=!1),this.startAnimation(O),this.setAnimationOrigin(g,z)}else x||M1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Na(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(LC),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&T5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const x=this.path[g];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(AC),this.nodes.forEach(k1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(j1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(NC),this.nodes.forEach(DC),this.nodes.forEach(kC),this.nodes.forEach(jC)):this.nodes.forEach(j1),this.clearAllSnapshots();const h=Qo.now();Oo.delta=fa(0,1e3/60,h-Oo.timestamp),Oo.timestamp=h,Oo.isProcessing=!0,Zh.update.process(Oo),Zh.preRender.process(Oo),Zh.render.process(Oo),Oo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,zp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(TC),this.sharedNodes.forEach(OC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ss.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ss.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Zo(this.snapshot.measuredBox.x)&&!Zo(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=eo()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!C5(this.projectionDelta),p=this.getTransformTemplate(),y=p?p(this.latestValues,""):void 0,g=y!==this.prevTransformTemplateValue;d&&this.instance&&(h||jr(this.latestValues)||g)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),PC(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var y;const{visualElement:d}=this.options;if(!d)return eo();const h=d.measureViewportBox();if(!(((y=this.scroll)==null?void 0:y.wasRoot)||this.path.some(HC))){const{scroll:g}=this.root;g&&(ca(h.x,g.offset.x),ca(h.y,g.offset.y))}return h}removeElementScroll(d){var p;const h=eo();if(qi(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let y=0;y<this.path.length;y++){const g=this.path[y],{scroll:x,options:b}=g;g!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&qi(h,d),ca(h.x,x.offset.x),ca(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var g,x;const y=p||eo();qi(y,d);for(let b=0;b<this.path.length;b++){const S=this.path[b];!h&&S.options.layoutScroll&&S.scroll&&S!==S.root&&(ca(y.x,-S.scroll.offset.x),ca(y.y,-S.scroll.offset.y)),jr(S.latestValues)&&vd(y,S.latestValues,(g=S.layout)==null?void 0:g.layoutBox)}return jr(this.latestValues)&&vd(y,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),y}removeTransform(d){var p;const h=eo();qi(h,d);for(let y=0;y<this.path.length;y++){const g=this.path[y];if(!jr(g.latestValues))continue;let x;g.instance&&(Km(g.latestValues)&&g.updateSnapshot(),x=eo(),qi(x,g.measurePageBox())),_1(h,g.latestValues,(p=g.snapshot)==null?void 0:p.layoutBox,x)}return jr(this.latestValues)&&_1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Oo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var S;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:x}=this.options;if(!this.layout||!(g||x))return;this.resolvedRelativeTargetAt=Oo.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=eo(),this.targetWithTransforms=eo()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),cC(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):qi(this.target,this.layout.layoutBox),u5(this.target,this.targetDelta)):qi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Km(this.parent.latestValues)||c5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=eo(),this.relativeTargetOrigin=eo(),Rd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),qi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var k;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(k=this.parent)!=null&&k.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Oo.timestamp&&(p=!1),p)return;const{layout:y,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||g))return;qi(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;$6(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=eo());const{target:S}=d;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(u1(this.prevProjectionDelta.x,this.projectionDelta.x),u1(this.prevProjectionDelta.y,this.projectionDelta.y)),Cc(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!v1(this.projectionDelta.x,this.prevProjectionDelta.x)||!v1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ml(),this.projectionDelta=ml(),this.projectionDeltaWithTransform=ml()}setAnimationOrigin(d,h=!1){const p=this.snapshot,y=p?p.latestValues:{},g={...this.latestValues},x=ml();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=eo(),S=p?p.source:void 0,k=this.layout?this.layout.source:void 0,j=S!==k,E=this.getStack(),T=!E||E.members.length<=1,z=!!(j&&!T&&this.options.crossfade===!0&&!this.path.some($C));this.animationProgress=0;let O;this.mixTargetDelta=R=>{const q=R/1e3;E1(x.x,d.x,q),E1(x.y,d.y,q),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Rd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),zC(this.relativeTarget,this.relativeTargetOrigin,b,q),O&&hC(this.relativeTarget,O)&&(this.isProjectionDirty=!1),O||(O=eo()),qi(O,this.relativeTarget)),j&&(this.animationValues=g,_C(g,y,this.latestValues,q,z,T)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=q},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,y;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(y=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||y.stop(),this.pendingAnimation&&(Na(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ss.update(()=>{Sd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=rr(0)),this.motionValue.jump(0,!1),this.currentAnimation=E5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(SC),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:y,latestValues:g}=d;if(!(!h||!p||!y)){if(this!==d&&this.layout&&y&&N5(this.options.animationType,this.layout.layoutBox,y.layoutBox)){p=this.target||eo();const x=Zo(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=Zo(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}qi(h,p),vd(h,g),Cc(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new wC),this.sharedNodes.get(d).add(h);const y=h.options.initialPromotionConfig;h.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const y=this.getStack();y&&y.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const y={};p.z&&rm("z",d,y,this.animationValues);for(let g=0;g<am.length;g++)rm(`rotate${am[g]}`,d,y,this.animationValues),rm(`skew${am[g]}`,d,y,this.animationValues);d.render();for(const g in y)d.setStaticValue(g,y[g]),this.animationValues&&(this.animationValues[g]=y[g]);d.scheduleRender()}applyProjectionStyles(d,h){var k,j;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=wd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=wd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!jr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=y.animationValues||y.latestValues;this.applyTransformsToTarget();let x=mC(this.projectionDeltaWithTransform,this.treeScale,g);p&&(x=p(g,x)),d.transform=x;const{x:b,y:S}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${S.origin*100}% 0`,y.animationValues?d.opacity=y===this?(j=(k=g.opacity)!=null?k:this.latestValues.opacity)!=null?j:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=y===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const E in Zm){if(g[E]===void 0)continue;const{correct:T,applyTo:z,isCSSVariable:O}=Zm[E],R=x==="none"?g[E]:T(g[E],y);if(z){const q=z.length;for(let Y=0;Y<q;Y++)d[z[Y]]=R}else O?this.options.visualElement.renderState.vars[E]=R:d[E]=R}this.options.layoutId&&(d.pointerEvents=y===this?wd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(k1),this.root.sharedNodes.clear()}}}function kC(t){t.updateLayout()}function jC(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")la(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],S=Zo(b);b.min=a[x].min,b.max=b.min+S});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";Jm(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else N5(u,n.layoutBox,a)&&la(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],S=Zo(a[x]);b.max=b.min+S,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+S)});const h=ml();Cc(h,a,n.layoutBox);const p=ml();d?Cc(p,t.applyTransform(c,!0),n.measuredBox):Cc(p,a,n.layoutBox);const y=!C5(h);let g=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:S}=x;if(b&&S){const k=t.options.layoutAnchor||void 0,j=eo();Rd(j,n.layoutBox,b.layoutBox,k);const E=eo();Rd(E,a,S.layoutBox,k),k5(j,E)||(g=!0),x.options.layoutRoot&&(t.relativeTarget=E,t.relativeTargetOrigin=j,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:g})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function MC(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function EC(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function TC(t){t.clearSnapshot()}function k1(t){t.clearMeasurements()}function AC(t){t.isLayoutDirty=!0,t.updateLayout()}function j1(t){t.isLayoutDirty=!1}function NC(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function DC(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function M1(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function RC(t){t.resolveTargetDelta()}function BC(t){t.calcProjection()}function LC(t){t.resetSkewAndRotation()}function OC(t){t.removeLeadSnapshot()}function E1(t,n,i){t.translate=hs(n.translate,0,i),t.scale=hs(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function T1(t,n,i,a){t.min=hs(n.min,i.min,a),t.max=hs(n.max,i.max,a)}function zC(t,n,i,a){T1(t.x,n.x,i.x,a),T1(t.y,n.y,i.y,a)}function $C(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const IC={duration:.45,ease:[.4,0,.1,1]},A1=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),N1=A1("applewebkit/")&&!A1("chrome/")?Math.round:zi;function D1(t){t.min=N1(t.min),t.max=N1(t.max)}function PC(t){D1(t.x),D1(t.y)}function N5(t,n,i){return t==="position"||t==="preserve-aspect"&&!lC(b1(n),b1(i),.2)}function HC(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const UC=A5({attachResizeListener:(t,n)=>Dc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),lm={current:void 0},D5=A5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!lm.current){const t=new UC({});t.mount(window),t.setOptions({layoutScroll:!0}),lm.current=t}return lm.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Yd=_.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function R1(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function VC(...t){return n=>{let i=!1;const a=t.map(c=>{const u=R1(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():R1(t[c],null)}}}}function YC(...t){return _.useCallback(VC(...t),t)}class WC extends _.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(gd(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=gd(a)&&a.offsetWidth||0,u=gd(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function FC({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,S;const d=_.useId(),h=_.useRef(null),p=_.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=_.useContext(Yd),g=(S=(b=t.props)==null?void 0:b.ref)!=null?S:t==null?void 0:t.ref,x=YC(h,g);return _.useInsertionEffect(()=>{const{width:k,height:j,top:E,left:T,right:z,bottom:O}=p.current;if(n||u===!1||!h.current||!k||!j)return;const R=i==="left"?`left: ${T}`:`right: ${z}`,q=a==="bottom"?`bottom: ${O}`:`top: ${E}`;h.current.dataset.motionPopId=d;const Y=document.createElement("style");y&&(Y.nonce=y);const K=c!=null?c:document.head;return K.appendChild(Y),Y.sheet&&Y.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${k}px !important;
            height: ${j}px !important;
            ${R}px !important;
            ${q}px !important;
          }
        `),()=>{var V;(V=h.current)==null||V.removeAttribute("data-motion-pop-id"),K.contains(Y)&&K.removeChild(Y)}},[n]),l.jsx(WC,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:_.cloneElement(t,{ref:x})})}const XC=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:y})=>{const g=Bc(GC),x=_.useId();let b=!0,S=_.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:k=>{g.set(k,!0);for(const j of g.values())if(!j)return;a&&a()},register:k=>(g.set(k,!1),()=>g.delete(k))}),[i,g,a]);return u&&b&&(S={...S}),_.useMemo(()=>{g.forEach((k,j)=>g.set(j,!1))},[i]),_.useEffect(()=>{!i&&!g.size&&a&&a()},[i]),t=l.jsx(FC,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:y,children:t}),l.jsx(Id.Provider,{value:S,children:t})};function GC(){return new Map}function R5(t=!0){const n=_.useContext(Id);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=_.useId();_.useEffect(()=>{if(t)return c(u)},[t]);const d=_.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const qu=t=>t.key||"";function B1(t){const n=[];return _.Children.forEach(t,i=>{_.isValidElement(i)&&n.push(i)}),n}const Wd=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:y})=>{const[g,x]=R5(d),b=_.useMemo(()=>B1(t),[t]),S=d&&!g?[]:b.map(qu),k=_.useRef(!0),j=_.useRef(b),E=Bc(()=>new Map),T=_.useRef(new Set),[z,O]=_.useState(b),[R,q]=_.useState(b);_p(()=>{k.current=!1,j.current=b;for(let V=0;V<R.length;V++){const ee=qu(R[V]);S.includes(ee)?(E.delete(ee),T.current.delete(ee)):E.get(ee)!==!0&&E.set(ee,!1)}},[R,S.length,S.join("-")]);const Y=[];if(b!==z){let V=[...b];for(let ee=0;ee<R.length;ee++){const ae=R[ee],re=qu(ae);S.includes(re)||(V.splice(ee,0,ae),Y.push(ae))}return u==="wait"&&Y.length&&(V=Y),q(B1(V)),O(b),null}const{forceRender:K}=_.useContext(pp);return l.jsx(l.Fragment,{children:R.map(V=>{const ee=qu(V),ae=d&&!g?!1:b===R||S.includes(ee),re=()=>{if(T.current.has(ee))return;if(E.has(ee))T.current.add(ee),E.set(ee,!0);else return;let Ae=!0;E.forEach(We=>{We||(Ae=!1)}),Ae&&(K==null||K(),q(j.current),d&&(x==null||x()),a&&a())};return l.jsx(XC,{isPresent:ae,initial:!k.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:y,onExitComplete:ae?void 0:re,anchorX:h,anchorY:p,children:V},ee)})})},B5=_.createContext({strict:!1}),L1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let O1=!1;function qC(){if(O1)return;const t={};for(const n in L1)t[n]={isEnabled:i=>L1[n].some(a=>!!i[a])};i5(t),O1=!0}function L5(){return qC(),L6()}function KC(t){const n=L5();for(const i in t)n[i]={...n[i],...t[i]};i5(n)}const QC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Bd(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||QC.has(t)}let O5=t=>!Bd(t);function ZC(t){typeof t=="function"&&(O5=n=>n.startsWith("on")?!Bd(n):t(n))}try{ZC(require("@emotion/is-prop-valid").default)}catch{}function JC(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||yo(t[c])||(O5(c)||i===!0&&Bd(c)||!n&&!Bd(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Fd=_.createContext({});function e3(t,n){if(Vd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||Nc(i)?i:void 0,animate:Nc(a)?a:void 0}}return t.inherit!==!1?n:{}}function t3(t){const{initial:n,animate:i}=e3(t,_.useContext(Fd));return _.useMemo(()=>({initial:n,animate:i}),[z1(n),z1(i)])}function z1(t){return Array.isArray(t)?t.join(" "):t}const Vp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function z5(t,n,i){for(const a in n)!yo(n[a])&&!h5(a,i)&&(t[a]=n[a])}function n3({transformTemplate:t},n){return _.useMemo(()=>{const i=Vp();return Hp(i,n,t),Object.assign({},i.vars,i.style)},[n])}function s3(t,n){const i=t.style||{},a={};return z5(a,i,t),Object.assign(a,n3(t,n)),a}function o3(t,n){const i={},a=s3(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const $5=()=>({...Vp(),attrs:{}});function i3(t,n,i,a){const c=_.useMemo(()=>{const u=$5();return p5(u,n,g5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};z5(u,t.style,t),c.style={...u,...c.style}}return c}const a3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Yp(t){return typeof t!="string"||t.includes("-")?!1:!!(a3.indexOf(t)>-1||/[A-Z]/u.test(t))}function r3(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Yp(t))?i3:o3)(n,a,c,t),y=JC(n,typeof t=="string",u),g=t!==_.Fragment?{...y,...p,ref:i}:{},{children:x}=n,b=_.useMemo(()=>yo(x)?x.get():x,[x]);return _.createElement(t,{...g,children:b})}function l3({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:c3(i,a,c,t),renderState:n()}}function c3(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=wd(u[b]);let{initial:d,animate:h}=t;const p=Vd(t),y=s5(t);n&&y&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let g=i?i.initial===!1:!1;g=g||d===!1;const x=g?h:d;if(x&&typeof x!="boolean"&&!Ud(x)){const b=Array.isArray(x)?x:[x];for(let S=0;S<b.length;S++){const k=Dp(t,b[S]);if(k){const{transitionEnd:j,transition:E,...T}=k;for(const z in T){let O=T[z];if(Array.isArray(O)){const R=g?O.length-1:0;O=O[R]}O!==null&&(c[z]=O)}for(const z in j)c[z]=j[z]}}}return c}const I5=t=>(n,i)=>{const a=_.useContext(Fd),c=_.useContext(Id),u=()=>l3(t,n,a,c);return i?u():Bc(u)},u3=I5({scrapeMotionValuesFromProps:Up,createRenderState:Vp}),d3=I5({scrapeMotionValuesFromProps:y5,createRenderState:$5}),f3=Symbol.for("motionComponentSymbol");function h3(t,n,i){const a=_.useRef(i);_.useInsertionEffect(()=>{a.current=i});const c=_.useRef(null);return _.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const P5=_.createContext({});function dl(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function m3(t,n,i,a,c,u){var O,R;const{visualElement:d}=_.useContext(Fd),h=_.useContext(B5),p=_.useContext(Id),y=_.useContext(Yd),g=y.reducedMotion,x=y.skipAnimations,b=_.useRef(null),S=_.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g,skipAnimations:x,isSVG:u}),S.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const k=b.current,j=_.useContext(P5);k&&!k.projection&&c&&(k.type==="html"||k.type==="svg")&&p3(b.current,i,c,j);const E=_.useRef(!1);_.useInsertionEffect(()=>{k&&E.current&&k.update(i,p)});const T=i[Wb],z=_.useRef(!!T&&typeof window<"u"&&!((O=window.MotionHandoffIsComplete)!=null&&O.call(window,T))&&((R=window.MotionHasOptimisedAnimation)==null?void 0:R.call(window,T)));return _p(()=>{S.current=!0,k&&(E.current=!0,window.MotionIsMounted=!0,k.updateFeatures(),k.scheduleRenderMicrotask(),z.current&&k.animationState&&k.animationState.animateChanges())}),_.useEffect(()=>{k&&(!z.current&&k.animationState&&k.animationState.animateChanges(),z.current&&(queueMicrotask(()=>{var q;(q=window.MotionHandoffMarkAsComplete)==null||q.call(window,T)}),z.current=!1),k.enteringChildren=void 0)}),k}function p3(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:y,layoutAnchor:g,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:H5(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&dl(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:y,layoutAnchor:g})}function H5(t){if(t)return t.options.allowProjection!==!1?t.projection:H5(t.parent)}function cm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var y,g;a&&KC(a);const u=i?i==="svg":Yp(t),d=u?d3:u3;function h(x,b){let S;const k={..._.useContext(Yd),...x,layoutId:_3(x)},{isStatic:j}=k,E=t3(x),T=d(x,j);if(!j&&typeof window<"u"){g3();const z=y3(k);S=z.MeasureLayout,E.visualElement=m3(t,T,k,c,z.ProjectionNode,u)}return l.jsxs(Fd.Provider,{value:E,children:[S&&E.visualElement?l.jsx(S,{visualElement:E.visualElement,...k}):null,r3(t,x,h3(T,E.visualElement,b),T,j,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(g=(y=t.displayName)!=null?y:t.name)!=null?g:""})`}`;const p=_.forwardRef(h);return p[f3]=t,p}function _3({layoutId:t}){const n=_.useContext(pp).id;return n&&t!==void 0?n+"-"+t:t}function g3(t,n){_.useContext(B5).strict}function y3(t){const n=L5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function x3(t,n){if(typeof Proxy>"u")return cm;const i=new Map,a=(u,d)=>cm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,cm(d,void 0,t,n)),i.get(d))})}const b3=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Yp(t))?new x5(n):new m5(n,{allowProjection:t!==_.Fragment})};class v3 extends lr{constructor(n){super(n),n.animationState||(n.animationState=nC(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Ud(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let w3=0;class S3 extends lr{constructor(){super(...arguments),this.id=w3++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Dr(this.node,d,h);if(p){const{transition:y,transitionEnd:g,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const C3={animation:{Feature:v3},exit:{Feature:S3}};function $c(t){return{point:{x:t.pageX,y:t.pageY}}}const k3=t=>n=>$p(n)&&t(n,$c(n));function kc(t,n,i,a){return Dc(t,n,k3(i),a)}const U5=({current:t})=>t?t.ownerDocument.defaultView:null,$1=(t,n)=>Math.abs(t-n);function j3(t,n){const i=$1(t.x,n.x),a=$1(t.y,n.y);return Math.sqrt(i**2+a**2)}const I1=new Set(["auto","scroll"]);class V5{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=S=>{this.handleScroll(S.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Ku(this.lastRawMoveEventInfo,this.transformPagePoint));const S=um(this.lastMoveEventInfo,this.history),k=this.startEvent!==null,j=j3(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!k&&!j)return;const{point:E}=S,{timestamp:T}=Oo;this.history.push({...E,timestamp:T});const{onStart:z,onMove:O}=this.handlers;k||(z&&z(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),O&&O(this.lastMoveEvent,S)},this.handlePointerMove=(S,k)=>{this.lastMoveEvent=S,this.lastRawMoveEventInfo=k,this.lastMoveEventInfo=Ku(k,this.transformPagePoint),ss.update(this.updatePoint,!0)},this.handlePointerUp=(S,k)=>{this.end();const{onEnd:j,onSessionEnd:E,resumeAnimation:T}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const z=um(S.type==="pointercancel"?this.lastMoveEventInfo:Ku(k,this.transformPagePoint),this.history);this.startEvent&&j&&j(S,z),E&&E(S,z)},!$p(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=$c(n),y=Ku(p,this.transformPagePoint),{point:g}=y,{timestamp:x}=Oo;this.history=[{...g,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,um(y,this.history)),this.removeListeners=Lc(kc(this.contextWindow,"pointermove",this.handlePointerMove),kc(this.contextWindow,"pointerup",this.handlePointerUp),kc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(I1.has(a.overflowX)||I1.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),ss.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Na(this.updatePoint)}}function Ku(t,n){return n?{point:n(t.point)}:t}function P1(t,n){return{x:t.x-n.x,y:t.y-n.y}}function um({point:t},n){return{point:t,delta:P1(t,Y5(n)),offset:P1(t,M3(n)),velocity:E3(n,.1)}}function M3(t){return t[0]}function Y5(t){return t[t.length-1]}function E3(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=Y5(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>ci(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>ci(n)*2&&(a=t[1]);const u=Oi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function T3(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?hs(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?hs(i,t,a.max):Math.min(t,i)),t}function H1(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function A3(t,{top:n,left:i,bottom:a,right:c}){return{x:H1(t.x,i,c),y:H1(t.y,n,a)}}function U1(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function N3(t,n){return{x:U1(t.x,n.x),y:U1(t.y,n.y)}}function D3(t,n){let i=.5;const a=Zo(t),c=Zo(n);return c>a?i=yl(n.min,n.max-a,t.min):a>c&&(i=yl(t.min,t.max-c,n.min)),fa(0,1,i)}function R3(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const ep=.35;function B3(t=ep){return t===!1?t=0:t===!0&&(t=ep),{x:V1(t,"left","right"),y:V1(t,"top","bottom")}}function V1(t,n,i){return{min:Y1(t,n),max:Y1(t,i)}}function Y1(t,n){return typeof t=="number"?t:t[n]||0}const L3=new WeakMap;class O3{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=eo(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor($c(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:S,dragPropagation:k,onDragStart:j}=this.getProps();if(S&&!k&&(this.openDragLock&&this.openDragLock(),this.openDragLock=f6(S),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),la(T=>{let z=this.getAxisMotionValue(T).get()||0;if(da.test(z)){const{projection:O}=this.visualElement;if(O&&O.layout){const R=O.layout.layoutBox[T];R&&(z=Zo(R)*(parseFloat(z)/100))}}this.originPoint[T]=z}),j&&ss.update(()=>j(x,b),!1,!0),Wm(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:S,dragDirectionLock:k,onDirectionLock:j,onDrag:E}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:T}=b;if(k&&this.currentDirection===null){this.currentDirection=$3(T),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",b.point,T),this.updateAxis("y",b.point,T),this.visualElement.render(),E&&ss.update(()=>E(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new V5(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:U5(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&ss.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!Qu(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=T3(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&dl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=A3(a.layoutBox,n):this.constraints=!1,this.elastic=B3(i),c!==this.constraints&&!dl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&la(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=R3(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!dl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=I6(a,c.root,this.visualElement.getTransformPagePoint());let d=N3(c.layout.layoutBox,u);if(i){const h=i(O6(d));this.hasMutatedConstraints=!!h,h&&(d=l5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},y=la(g=>{if(!Qu(g,i,this.currentDirection))return;let x=p&&p[g]||{};(d===!0||d===g)&&(x={min:0,max:0});const b=c?200:1e6,S=c?40:1e7,k={type:"inertia",velocity:a?n[g]:0,bounceStiffness:b,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(g,k)});return Promise.all(y).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Wm(this.visualElement,n),a.start(Np(n,a,0,i,this.visualElement,!1))}stopAnimation(){la(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){la(i=>{const{drag:a}=this.getProps();if(!Qu(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-hs(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!dl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};la(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=D3({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),la(d=>{if(!Qu(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:y}=this.constraints[d];h.set(hs(p,y,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;L3.set(this.visualElement,this);const n=this.visualElement.current,i=kc(n,"pointerdown",y=>{const{drag:g,dragListener:x=!0}=this.getProps(),b=y.target,S=b!==n&&y6(b);g&&x&&!S&&this.start(y)});let a;const c=()=>{const{dragConstraints:y}=this.getProps();dl(y)&&y.current&&(this.constraints=this.resolveRefConstraints(),a||(a=z3(n,y.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),ss.read(c);const h=Dc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:g})=>{this.isDragging&&g&&(la(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=y[x].translate,b.set(b.get()+y[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=ep,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function W1(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function z3(t,n,i){const a=Zy(t,W1(i)),c=Zy(n,W1(i));return()=>{a(),c()}}function Qu(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function $3(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class I3 extends lr{constructor(n){super(n),this.removeGroupControls=zi,this.removeListeners=zi,this.controls=new O3(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||zi}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const dm=t=>(n,i)=>{t&&ss.update(()=>t(n,i),!1,!0)};class P3 extends lr{constructor(){super(...arguments),this.removePointerDownListener=zi}onPointerDown(n){this.session=new V5(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:U5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:dm(n),onStart:dm(i),onMove:dm(a),onEnd:(u,d)=>{delete this.session,c&&ss.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=kc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let fm=!1;class H3 extends _.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),fm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Sd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),fm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||ss.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),zp.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;fm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function W5(t){const[n,i]=R5(),a=_.useContext(pp);return l.jsx(H3,{...t,layoutGroup:a,switchLayoutGroup:_.useContext(P5),isPresent:n,safeToRemove:i})}const U3={pan:{Feature:P3},drag:{Feature:I3,ProjectionNode:D5,MeasureLayout:W5}};function F1(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&ss.postRender(()=>u(n,$c(n)))}class V3 extends lr{mount(){const{current:n}=this.node;n&&(this.unmount=m6(n,(i,a)=>(F1(this.node,a,"Start"),c=>F1(this.node,c,"End"))))}unmount(){}}class Y3 extends lr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Lc(Dc(this.node.current,"focus",()=>this.onFocus()),Dc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function X1(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&ss.postRender(()=>u(n,$c(n)))}class W3 extends lr{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=b6(n,(c,u)=>(X1(this.node,u,"Start"),(d,{success:h})=>X1(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const tp=new WeakMap,hm=new WeakMap,F3=t=>{const n=tp.get(t.target);n&&n(t)},X3=t=>{t.forEach(F3)};function G3({root:t,...n}){const i=t||document;hm.has(i)||hm.set(i,{});const a=hm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(X3,{root:t,...n})),a[c]}function q3(t,n,i){const a=G3(n);return tp.set(t,i),a.observe(t),()=>{tp.delete(t),a.unobserve(t)}}const K3={some:0,all:1};class Q3 extends lr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:K3[c]},h=y=>{const{isIntersecting:g}=y;if(this.isInView===g||(this.isInView=g,u&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),S=g?x:b;S&&S(y)};this.stopObserver=q3(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(Z3(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Z3({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const J3={inView:{Feature:Q3},tap:{Feature:W3},focus:{Feature:Y3},hover:{Feature:V3}},ek={layout:{ProjectionNode:D5,MeasureLayout:W5}},tk={...C3,...J3,...U3,...ek},Jo=x3(tk,b3);function np(t){const n=Bc(()=>rr(t)),{isStatic:i}=_.useContext(Yd);if(i){const[,a]=_.useState(t);_.useEffect(()=>n.on("change",a),[])}return n}function F5(t,n){const i=np(n()),a=()=>i.set(n());return a(),_p(()=>{const c=()=>ss.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),Na(a)}}),i}function nk(t){Sc.current=[],t();const n=F5(Sc.current,t);return Sc.current=void 0,n}function Zu(t,n,i,a){if(typeof t=="function")return nk(t);const u=typeof n=="function"?n:T6(n,i,a),d=Array.isArray(t)?G1(t,u):G1([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function G1(t,n){const i=Bc(()=>[]);return F5(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Wp(t){return typeof t=="object"&&!Array.isArray(t)}function X5(t,n,i,a){return t==null?[]:typeof t=="string"&&Wp(n)?Op(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function sk(t,n,i){return t*(n+1)}function q1(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function ok(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(gl(t,c),a--)}}function ik(t,n,i,a,c,u){ok(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:hs(c,u,a[d]),easing:mb(i,d)})}function ak(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function rk(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const lk="easeInOut";function ck(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},y=new Map;let g=0,x=0,b=0;for(let S=0;S<t.length;S++){const k=t[S];if(typeof k=="string"){y.set(k,x);continue}else if(!Array.isArray(k)){y.set(k.name,q1(x,k.at,g,y));continue}let[j,E,T={}]=k;T.at!==void 0&&(x=q1(x,T.at,g,y));let z=0;const O=(R,q,Y,K=0,V=0)=>{const ee=uk(R),{delay:ae=0,times:re=Ab(ee),type:Ae=n.type||"keyframes",repeat:We,repeatType:ne,repeatDelay:pe=0,...P}=q;let{ease:ie=n.ease||"easeOut",duration:F}=q;const _e=typeof ae=="function"?ae(K,V):ae,Te=ee.length,I=Tp(Ae)?Ae:c==null?void 0:c[Ae||"keyframes"];if(Te<=2&&I){let be=100;if(Te===2&&hk(ee)){const Ue=ee[1]-ee[0];be=Math.abs(Ue)}const Re={...n,...P};F!==void 0&&(Re.duration=ci(F));const $e=jb(Re,be,I);ie=$e.ease,F=$e.duration}F!=null||(F=u);const me=x+_e;re.length===1&&re[0]===0&&(re[1]=1);const se=re.length-ee.length;if(se>0&&Tb(re,se),ee.length===1&&ee.unshift(null),We){F=sk(F,We);const be=[...ee],Re=[...re];ie=Array.isArray(ie)?[...ie]:[ie];const $e=[...ie];for(let Ue=0;Ue<We;Ue++){ee.push(...be);for(let Qe=0;Qe<be.length;Qe++)re.push(Re[Qe]+(Ue+1)),ie.push(Qe===0?"linear":mb($e,Qe-1))}ak(re,We)}const he=me+F;ik(Y,ee,ie,re,me,he),z=Math.max(_e+F,z),b=Math.max(he,b)};if(yo(j)){const R=K1(j,h);O(E,T,Q1("default",R))}else{const R=X5(j,E,a,p),q=R.length;for(let Y=0;Y<q;Y++){E=E,T=T;const K=R[Y],V=K1(K,h);for(const ee in E)O(E[ee],dk(T,ee),Q1(ee,V),Y,q)}}g=x,x+=z}return h.forEach((S,k)=>{for(const j in S){const E=S[j];E.sort(rk);const T=[],z=[],O=[];for(let K=0;K<E.length;K++){const{at:V,value:ee,easing:ae}=E[K];T.push(ee),z.push(yl(0,b,V)),O.push(ae||"easeOut")}z[0]!==0&&(z.unshift(0),T.unshift(T[0]),O.unshift(lk)),z[z.length-1]!==1&&(z.push(1),T.push(null)),d.has(k)||d.set(k,{keyframes:{},transition:{}});const R=d.get(k);R.keyframes[j]=T;const{type:q,...Y}=n;R.transition[j]={...Y,duration:b,ease:O,times:z,...i}}}),d}function K1(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function Q1(t,n){return n[t]||(n[t]=[]),n[t]}function uk(t){return Array.isArray(t)?t:[t]}function dk(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const fk=t=>typeof t=="number",hk=t=>t.every(fk);function mk(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Hd(t)&&!n5(t)?new x5(n):new m5(n);i.mount(t),Ac.set(t,i)}function pk(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new F6(n);i.mount(t),Ac.set(t,i)}function _k(t,n){return yo(t)||typeof t=="number"||typeof t=="string"&&!Wp(n)}function G5(t,n,i,a){const c=[];if(_k(t,n))c.push(E5(t,Wp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=X5(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],y=p instanceof Element?mk:pk;Ac.has(p)||y(p);const g=Ac.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Bp(g,{...n,transition:x},{}))}}return c}function gk(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=rr(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return ck(c,n,i,{spring:Tc}).forEach(({keyframes:d,transition:h},p)=>{a.push(...G5(p,d,h))}),a}function yk(t){return Array.isArray(t)&&t.some(Array.isArray)}function xk(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(yk(c)){const{onComplete:g,...x}=u||{};typeof g=="function"&&(p=g),h=gk(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:g,...x}=d||{};typeof g=="function"&&(p=g),h=G5(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const y=new L4(h);return p&&y.finished.then(p),n&&(n.animations.push(y),y.finished.then(()=>{gl(n.animations,y)})),y}return a}const Z1=xk(),Zi=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function J1(t,n){var a;const i=[...(a=t.childShas)!=null?a:[]];return i.includes(n)||i.push(n),{...t,childShas:i}}function mm(t,n,i,a,c,u){if(!i)return{directCommits:t,branchCommitPreviews:n};const d=t.map(p=>Zi(p.fullSha,i)||Zi(p.sha,i)?J1(p,a):p),h=Object.fromEntries(Object.entries(n).map(([p,y])=>[p,y.map(g=>(p===c||p===u)&&(Zi(g.fullSha,i)||Zi(g.sha,i))?J1(g,a):g)]));return{directCommits:d,branchCommitPreviews:h}}function bk(t,n,i,a){if(!t)return null;const c=d=>Zi(d,t);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(y=>c(y.fullSha)||c(y.sha)))return d;return null}function vk(t,n,i,a,c,u,d=!1){var Ae,We,ne,pe,P;const h=t.baseSha,p=`STASH:${t.index}`,y=`Stash ${t.index+1}`,g=(We=(Ae=i[0])==null?void 0:Ae.fullSha)!=null?We:null,x=[{name:u,headSha:g!=null?g:"",isDefault:!0},...n.map(ie=>({name:ie.name,headSha:ie.headSha,isDefault:!1}))],b=h?x.filter(ie=>Zi(ie.headSha,h)):[],S=bk(h,i,a,u),k=S?x.find(ie=>ie.name===S):void 0,j=(pe=(ne=b.find(ie=>ie.isDefault))!=null?ne:b[0])!=null?pe:k,E=!!(j&&h&&Zi(j.headSha,h)),T=j&&!j.isDefault?n.find(ie=>ie.name===j.name):void 0,z=(()=>{var F;if(!h)return null;const ie=i.find(_e=>Zi(_e.fullSha,h)||Zi(_e.sha,h));if(ie!=null&&ie.date)return ie.date;if(T&&!d){const _e=((F=a[T.name])!=null?F:[]).find(Te=>Zi(Te.fullSha,h)||Zi(Te.sha,h));if(_e!=null&&_e.date)return _e.date}return null})(),O=z?new Date(z).getTime():Number.NaN,R=Date.now(),q=Number.isFinite(O)?Math.max(R,O+1+t.index):R+t.index,Y=new Date(q).toISOString(),K=t.message.trim(),V={fullSha:p,sha:y,parentSha:h,clusterKey:null,childShas:[],message:K||y,author:"You",date:Y,kind:"stash"};if(E&&T){const ie=mm(i,a,h,p,T.name,u);return{branches:n.map(_e=>_e.name===T.name?{..._e,commitsAhead:_e.commitsAhead+1,unpushedCommits:_e.unpushedCommits+1,lastCommitDate:Y,headSha:p}:_e),directCommits:ie.directCommits,branchCommitPreviews:{...ie.branchCommitPreviews,[T.name]:[V,...a[T.name]||[]]},branchUniqueAheadCounts:{...c,[T.name]:Math.max(0,(P=Object.prototype.hasOwnProperty.call(c,T.name)?c[T.name]:T.commitsAhead)!=null?P:0)+1}}}if(E&&(j!=null&&j.isDefault)&&!d){const ie=mm(i,a,h,p,u,u);return{branches:n,directCommits:ie.directCommits,branchCommitPreviews:{...ie.branchCommitPreviews,[u]:[V,...a[u]||[]]},branchUniqueAheadCounts:c}}const ee=`*Stash:${t.index}`,ae={name:ee,commitsAhead:1,commitsBehind:0,lastCommitDate:Y,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:p,divergedFromSha:h!=null?h:void 0,parentBranch:(j==null?void 0:j.name)||u},re=mm(i,a,h,p,ee,u);return{branches:[ae,...n],directCommits:re.directCommits,branchCommitPreviews:{...re.branchCommitPreviews,[ee]:[V]},branchUniqueAheadCounts:{...c,[ee]:1}}}function q5(t,n,i,a,c,u,d=!1){const h=[...t].sort((y,g)=>y.index-g.index);let p={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const y of h)p=vk(y,p.branches,p.directCommits,p.branchCommitPreviews,p.branchUniqueAheadCounts,u,d);return p}function wk({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:y,manuallyOpenedClumps:g=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:S=null,orientation:k="horizontal"}){var K,V;const j=q5(y,t,i,u,h,c,(K=p==null?void 0:p.hasUncommittedChanges)!=null?K:!1);let E=j.branches,T=j.directCommits,z=j.branchCommitPreviews,O=j.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const ee=p.headSha||p.parentSha||null,ae=(F,_e)=>!F||!_e?!1:F===_e||F.startsWith(_e)||_e.startsWith(F),re=p.branchName?E.find(F=>F.name===p.branchName):void 0,Ae=(()=>{var _e;if(!ee)return null;const F=T.find(Te=>ae(Te.fullSha,ee)||ae(Te.sha,ee));if(F!=null&&F.date)return F.date;if(re){const Te=((_e=z[re.name])!=null?_e:[]).find(I=>ae(I.fullSha,ee)||ae(I.sha,ee));if(Te!=null&&Te.date)return Te.date}return null})(),We=Ae?new Date(Ae).getTime():Number.NaN,ne=Date.now(),pe=Number.isFinite(We)?Math.max(ne,We+1):ne,P=new Date(pe).toISOString(),ie={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ee,message:"Local uncommitted changes",author:"You",date:P,kind:"uncommitted"};re?(E=E.map(F=>F.name===re.name?{...F,commitsAhead:F.commitsAhead+1,unpushedCommits:F.unpushedCommits+1,lastCommitDate:P,headSha:"WORKING_TREE"}:F),z={...z,[re.name]:[ie,...z[re.name]||[]]},O={...O,[re.name]:Math.max(0,(V=Object.prototype.hasOwnProperty.call(O,re.name)?O[re.name]:re.commitsAhead)!=null?V:0)+1}):z={...z,[c]:[ie,...z[c]||[]]}}const R={...d};R[c]=null;const q=hp(E,c,z,R),Y=Mc({lanes:q,branches:E,mergeNodes:n,directCommits:T,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:z,branchParentByName:R,branchUniqueAheadCounts:O,manuallyOpenedClumps:g,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:S,checkedOutRef:p,orientation:k});return{enrichedBranches:E,enrichedBranchCommitPreviews:z,enrichedBranchUniqueAheadCounts:O,enrichedDirectCommits:T,sharedGridLayoutModel:Y}}const ex="git-visualizer:expanded-projects",tx="git-visualizer:expanded-branches";function Sk(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const y=(u=a.get(h))!=null?u:[];y.push(d.name),a.set(h,y)}const c=(d,h)=>{var g,x,b,S;const p=new Date((x=(g=i.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((S=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?S:0).getTime();return p-y};for(const[d,h]of a.entries())h.sort(c);return a}function Ck(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var g,x,b,S;const p=new Date((x=(g=a.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((S=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?S:0).getTime();return p-y},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function kk(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const y of d){const g=[...h,y];if(y===i.branchName){for(const x of g)c.add(x);return!0}if(u((p=n.get(y))!=null?p:[],g))return!0}return!1};return u(t,[]),c}function sp({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:g,showCommits:x,getMergeTargetLabels:b,sourceBranchName:S,clusterKeyByCommitId:k,isGridClusterOpen:j,onToggleGridCluster:E,onSelectCommit:T,onSelectBranch:z,isActiveProject:O}){var me,se;if(g.has(t)||!a.get(t))return null;const q=(me=u.get(t))!=null?me:[],Y=q.length>0,K=_.useMemo(()=>{var he;return[...(he=c[t])!=null?he:[]]},[c,t]),V=x&&K.length>0,ee=x,ae=Y||V,re=h.has(t),Ae=ee?K:[],We=re&&Ae.length>0,ne=y===t,pe=new Set(g);pe.add(t);const P="top-[-0.45rem] h-5 w-[10px]",ie="rounded-bl-[7px]",F="left-[0.65rem]",_e=new Map,Te=[];for(const he of q){const be=d.get(he);if(be){const Re=Ae.findIndex($e=>bi($e.fullSha,be)||bi($e.sha,be));if(Re>=0){const $e=(se=_e.get(Re))!=null?se:[];$e.push(he),_e.set(Re,$e);continue}}Te.push(he)}const I=_.useMemo(()=>{if(!x||Ae.length===0)return[];const he=[];let be=[],Re=null;const $e=()=>{if(be.length===0)return;const Ue=be[be.length-1],Qe=`sidebar-single-${t}-${Ue.fullSha}`;he.push({key:Re!=null?Re:Qe,commits:be,count:be.length,lead:Ue}),be=[],Re=null};return Ae.forEach(Ue=>{var Lt;const Qe=(Lt=k.get(`${t}:${Ue.fullSha}`))!=null?Lt:null;if(be.length===0){be=[Ue],Re=Qe;return}if(Qe===Re){be.push(Ue);return}$e(),be=[Ue],Re=Qe}),$e(),he},[t,x,Ae,k]);return l.jsxs("li",{className:dn("relative flex flex-col gap-1",n>0?"pl-4":"pl-0",re?"mb-2.5":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:dn("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",ie,F,P)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:dn("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.25rem]",F)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("div",{className:dn("group flex min-w-0 flex-1 items-center gap-0 rounded-md px-2 h-6 text-left text-sm font-normal transition-colors hover:bg-accent","text-muted-foreground hover:text-foreground"),role:ae?"button":void 0,tabIndex:ae?0:void 0,onClick:()=>{ae?p(t):z==null||z(t)},onKeyDown:he=>{ae&&(he.key==="Enter"||he.key===" ")&&(he.preventDefault(),p(t))},children:[ae?l.jsx("button",{type:"button","aria-label":`${re?"Collapse":"Expand"} ${t}`,onPointerDown:he=>{he.preventDefault()},onClick:he=>{he.preventDefault(),he.stopPropagation(),p(t)},className:"group/chevron flex h-6 w-6 -ml-2 shrink-0 items-center justify-center rounded-sm p-0 text-[10px] leading-none text-muted-foreground transition-colors hover:bg-accent",children:l.jsx(rw,{"aria-hidden":"true",className:dn("h-3.5 w-3.5 shrink-0 transition-transform",ne&&O?"text-[#38BDF2]":"text-muted-foreground",re?"rotate-90":"")})}):null,l.jsx("span",{className:dn("min-w-0 flex-1 break-words",ne&&O?"font-medium text-[#38BDF2]":"font-normal text-muted-foreground"),children:t})]})}),We?l.jsx("ul",{className:"relative space-y-1 pl-4",children:I.map(he=>{const be=he.count>1&&!j(he.key);return(be?[he.lead]:he.commits).map($e=>{var Lt;const Ue=Ae.findIndex(Dt=>Dt.fullSha===$e.fullSha),Qe=b($e.fullSha,S!=null?S:t);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>T==null?void 0:T($e.fullSha),className:"min-w-0 flex-1 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:$e.message,children:[l.jsx("span",{className:"block truncate",children:$e.message}),Qe.length>0?l.jsx("span",{className:"mt-0 block space-y-2",children:Qe.map(Dt=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:Dt})]},`${$e.fullSha}:${Dt}`))}):null]}),he.count>1&&$e.fullSha===he.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${he.lead.fullSha}`,onClick:()=>E(he.key,`${t}:${he.lead.fullSha}`),className:dn("shrink-0 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",be?"":"min-w-[2ch] text-center"),children:be?`+${Math.max(1,he.count-1)}`:"−"}):null]}),(Lt=_e.get(Ue))!=null&&Lt.length?l.jsx("ul",{className:"relative space-y-1",children:_e.get(Ue).map((Dt,Fe,rt)=>l.jsx(sp,{branchName:Dt,depth:n+1,isLast:Fe===rt.length-1&&Te.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:pe,showCommits:x,getMergeTargetLabels:b,sourceBranchName:Dt,clusterKeyByCommitId:k,isGridClusterOpen:j,onToggleGridCluster:E,onSelectCommit:T,onSelectBranch:z,isActiveProject:O},Dt))}):null]},`${t}:${$e.fullSha}`)})})}):null,Y&&re&&Te.length>0?l.jsx("ul",{className:"relative space-y-1",children:Te.map((he,be)=>l.jsx(sp,{branchName:he,depth:n+1,isLast:be===Te.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:pe,showCommits:x,getMergeTargetLabels:b,sourceBranchName:he,clusterKeyByCommitId:k,isGridClusterOpen:j,onToggleGridCluster:E,onSelectCommit:T,onSelectBranch:z,isActiveProject:O},he))}):null]})}function jk({open:t}){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-4 w-4 shrink-0 transition-opacity",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t?l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.7031 19H5.97457C4.96341 19 4.11131 18.2453 3.9892 17.2415L2.77269 7.24152C2.62773 6.04996 3.5577 5 4.75805 5H7C7.64911 5 8.28071 5.21053 8.8 5.6L9.2 5.9C9.71929 6.28947 10.3509 6.5 11 6.5H16.2369C17.2445 6.5 18.0947 7.24955 18.2211 8.2492L18.4938 10.4062",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M5.21532 12.0419C5.42789 11.1385 6.23405 10.5 7.16215 10.5H19.8105C20.7133 10.5 21.38 11.3419 21.1733 12.2207L19.9409 17.4581C19.7284 18.3615 18.9222 19 17.9941 19H6.10333C4.81363 19 3.8611 17.7973 4.1565 16.5419L5.21532 12.0419Z",stroke:"currentColor",strokeWidth:"1.5"})]}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 7C4 5.89543 4.89543 5 6 5H9C9.64911 5 10.2807 5.21053 10.8 5.6L11.2 5.9C11.7193 6.28947 12.3509 6.5 13 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 10.5L12.4211 10.5L20 10.5",stroke:"currentColor",strokeWidth:"1.5"})]})})}function Mk({projects:t,activeProjectPath:n,onSelectProject:i,onAddProject:a,onRemoveProject:c,onRevealProjectInFinder:u,onReorderProjects:d,projectLoading:h=!1,projectError:p=null,checkedOutRef:y,manuallyOpenedClumpsByProject:g={},manuallyClosedClumpsByProject:x={},manuallyOpenedClumps:b,manuallyClosedClumps:S,setManuallyOpenedClumps:k,setManuallyClosedClumps:j,gridLayoutModel:E,onSelectCommit:T,onSelectBranch:z,showCommits:O,className:R,style:q,collapsed:Y=!1}){var we,je;const K=_.useRef(null),V=_.useRef(null),[ee,ae]=_.useState(()=>{if(typeof window>"u")return new Set;try{const ue=window.localStorage.getItem(ex);if(ue){const Ee=JSON.parse(ue);if(Array.isArray(Ee)){const le=new Set;for(const Se of Ee)typeof Se=="string"&&le.add(Se);return le}}}catch{}return new Set(t.map(ue=>ue.path))}),[re,Ae]=_.useState({}),[We,ne]=_.useState(()=>new Set),[pe,P]=_.useState(()=>new Set),[ie,F]=_.useState(null),_e=b!=null?b:We,Te=S!=null?S:pe,I=k!=null?k:ne,me=j!=null?j:P,[se,he]=_.useState(null),[be,Re]=_.useState(null),[$e,Ue]=_.useState(null),[Qe,Lt]=_.useState(null),[Dt,Fe]=_.useState(null),[rt,Tt]=_.useState(null),nn=_.useRef(!1),Xt=_.useRef(null),Pe=_.useRef(null),ce=ue=>{try{window.localStorage.setItem(ex,JSON.stringify(Array.from(ue)))}catch{}},nt=ue=>{try{const Ee=Object.fromEntries(Object.entries(ue).map(([le,Se])=>[le,Array.from(Se)]));window.localStorage.setItem(tx,JSON.stringify(Ee))}catch{}};_.useEffect(()=>{ce(ee)},[ee]),_.useEffect(()=>{try{const ue=window.localStorage.getItem(tx);if(!ue)return;const Ee=JSON.parse(ue);if(!Ee||typeof Ee!="object")return;const le={};for(const[Se,Je]of Object.entries(Ee)){if(!Array.isArray(Je))continue;const ht=new Set;for(const lt of Je)typeof lt=="string"&&ht.add(lt);le[Se]=ht}Ae(le)}catch{}},[]),_.useEffect(()=>{nt(re)},[re]);const st=t,et=_.useMemo(()=>{if(!Qe)return st;const ue=st.find(Je=>Je.path===Qe);if(!ue)return st;const Ee=st.filter(Je=>Je.path!==Qe);if(Dt==null)return Ee;const le=[...Ee],Se=Math.max(0,Math.min(Dt,le.length));return le.splice(Se,0,ue),le},[Dt,Qe,st]),Ze=_.useCallback(ue=>{d==null||d(ue)},[d]),ft=_.useCallback(()=>{Ue(null),Lt(null),Fe(null),Tt(null)},[]);_.useEffect(()=>{if(!$e)return;const ue=le=>{const Se=Xt.current;!Se||!Se.active||Math.abs(le.clientX-Se.startX)<=4&&Math.abs(le.clientY-Se.startY)<=4||Pe.current==null&&(Pe.current=window.requestAnimationFrame(()=>{var gt,Ct;Pe.current=null;const Je=Xt.current;if(!Je||!Je.active)return;(Math.abs(le.clientX-Je.startX)>4||Math.abs(le.clientY-Je.startY)>4)&&(Je.moved=!0,Lt(Je.path)),Tt({x:le.clientX-Je.offsetX,y:le.clientY-Je.offsetY,width:Je.width});const lt=Array.from((Ct=(gt=V.current)==null?void 0:gt.querySelectorAll("[data-project-path]"))!=null?Ct:[]).filter(It=>It.dataset.projectPath&&It.dataset.projectPath!==Je.path);let He=lt.length;if(lt.length>0)for(let It=0;It<lt.length;It+=1){const ot=lt[It].getBoundingClientRect(),kt=ot.top+ot.height/2;if(le.clientY<kt){He=It;break}}Fe(He)}))},Ee=()=>{const le=Xt.current;if(Xt.current=null,Pe.current!=null&&(window.cancelAnimationFrame(Pe.current),Pe.current=null),!le){ft();return}if(!le.moved){ft();return}nn.current=!0;const Se=st.map(gt=>gt.path);if(Se.indexOf(le.path)<0){ft();return}const ht=Dt;if(ht==null){ft();return}const lt=Se.filter(gt=>gt!==le.path),He=Math.max(0,Math.min(ht,lt.length));lt.splice(He,0,le.path),Ze(lt),ft(),window.requestAnimationFrame(()=>{nn.current=!1,F(null)})};return window.addEventListener("pointermove",ue),window.addEventListener("pointerup",Ee),window.addEventListener("pointercancel",Ee),()=>{window.removeEventListener("pointermove",ue),window.removeEventListener("pointerup",Ee),window.removeEventListener("pointercancel",Ee)}},[ft,Ze,$e,Dt,st]);const dt=_.useCallback((ue,Ee)=>{if(ue.button!==0)return;const le=ue.currentTarget.getBoundingClientRect();Xt.current={active:!0,path:Ee,startX:ue.clientX,startY:ue.clientY,offsetX:ue.clientX-le.left,offsetY:ue.clientY-le.top,width:le.width,moved:!1},Ue(Ee),Lt(null),Fe(null),Tt({x:ue.clientX-le.left,y:ue.clientY-le.top,width:le.width})},[]),wt=(we=E==null?void 0:E.defaultCollapsedClumps)!=null?we:new Set,St=ue=>_e.has(ue)||!wt.has(ue)&&!Te.has(ue),Ut=(ue,Ee)=>{const le=K.current,Se=V.current;if(le&&Se){const Je=`[data-clump-toggle-id="${Ee}"]`,ht=le.querySelector(Je);if(ht){const lt=ht.getBoundingClientRect().top-Se.getBoundingClientRect().top;Re({id:Ee,topWithinScrollBody:lt})}else Re(null)}else Re(null);he(Ee),I(Je=>{const ht=new Set(Je),lt=St(ue);return me(He=>{const gt=new Set(He);return lt?(ht.delete(ue),gt.add(ue)):(gt.delete(ue),ht.add(ue)),gt}),ht})};_.useLayoutEffect(()=>{if(!se)return;const ue=K.current,Ee=V.current;if(!ue||!Ee)return;const le=`[data-clump-toggle-id="${se}"]`,Se=ue.querySelector(le);if(Se){if((be==null?void 0:be.id)===se){const ht=Se.getBoundingClientRect().top-Ee.getBoundingClientRect().top-be.topWithinScrollBody;Number.isFinite(ht)&&ht!==0&&(Ee.scrollTop+=ht)}Se.focus({preventScroll:!0}),he(null),Re(null)}},[_e,Te,se,be]);const it=(ue,Ee)=>{Ae(le=>{var lt;const Se=(lt=le[ue])!=null?lt:new Set,Je=new Set(Se);Je.has(Ee)?Je.delete(Ee):Je.add(Ee);const ht={...le,[ue]:Je};return nt(ht),ht})};_.useEffect(()=>{if(ie==null)return;const ue=()=>F(null);return window.addEventListener("pointerdown",ue),()=>window.removeEventListener("pointerdown",ue)},[ie]);const H=_.useMemo(()=>{var Ee,le,Se,Je,ht,lt,He,gt,Ct,It,ot,kt,Bt,yt;const ue=new Map;for(const mt of t){const Ge=wk({branches:mt.branches,mergeNodes:mt.mergeNodes,directCommits:mt.directCommits,unpushedDirectCommits:mt.unpushedDirectCommits,defaultBranch:mt.defaultBranch,branchCommitPreviews:mt.branchCommitPreviews,branchUniqueAheadCounts:mt.branchUniqueAheadCounts,checkedOutRef:mt.checkedOutRef,stashes:mt.stashes,manuallyOpenedClumps:(Ee=g[mt.path])!=null?Ee:new Set,manuallyClosedClumps:(le=x[mt.path])!=null?le:new Set}),xt=Ge.enrichedBranches.some(Yt=>Yt.name===mt.defaultBranch)?Ge.enrichedBranches:[{name:mt.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...Ge.enrichedBranches],Kt=new Map(Ge.sharedGridLayoutModel.nodes.map(Yt=>[Yt.commit.visualId,Yt.row])),en={};for(const Yt of Ge.sharedGridLayoutModel.allCommits){const Kn=(Se=en[Yt.branchName])!=null?Se:[];Kn.push({fullSha:Yt.id,sha:Yt.id.slice(0,7),parentSha:(Je=Yt.parentSha)!=null?Je:null,message:Yt.message,author:Yt.author,date:Yt.date,kind:(ht=Yt.kind)!=null?ht:"commit"}),en[Yt.branchName]=Kn}for(const Yt of Object.keys(en))en[Yt]=en[Yt].sort((Kn,os)=>{var so,ds;const cs=new Date(Kn.date).getTime(),us=new Date(os.date).getTime();if(cs!==us)return cs-us;const Vs=(so=Kt.get(`${Yt}:${Kn.fullSha}`))!=null?so:Number.MAX_SAFE_INTEGER,no=(ds=Kt.get(`${Yt}:${os.fullSha}`))!=null?ds:Number.MAX_SAFE_INTEGER;return Vs!==no?Vs-no:Kn.fullSha.localeCompare(os.fullSha)});const sn=(lt=Ge.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?lt:new Map,qn=(Yt,Kn)=>{const os=sn.get(Kn);if(!os)return[];for(const[cs,us]of os.entries())if(bi(Yt,cs))return Array.from(us).sort();return[]},Mn=Sk(xt,mt.defaultBranch),Sn=Ck(xt,mt.defaultBranch,Mn),vn=new Map(xt.map(Yt=>[Yt.name,Yt])),Yn=new Map;for(const Yt of xt){const Kn=(gt=(He=Ge.sharedGridLayoutModel.firstBranchCommitByName.get(Yt.name))==null?void 0:He.parentSha)!=null?gt:null,os=Kn!=null?Kn:null;Yn.set(Yt.name,os)}const Gt=(Ct=Ge.sharedGridLayoutModel.defaultCollapsedClumps)!=null?Ct:new Set,En=(It=g[mt.path])!=null?It:new Set,at=(ot=x[mt.path])!=null?ot:new Set,Tn=Yt=>En.has(Yt)||!Gt.has(Yt)&&!at.has(Yt);ue.set(mt.path,{rootBranchNames:Sn,branchByName:vn,branchCommitPreviewsFromLayout:en,childNamesByParent:Mn,branchAnchorShaByName:Yn,checkedOutBranchName:(Bt=(kt=mt.checkedOutRef)==null?void 0:kt.branchName)!=null?Bt:null,clusterKeyByCommitId:(yt=Ge.sharedGridLayoutModel.clusterKeyByCommitId)!=null?yt:new Map,getMergeTargetLabels:qn,isGridClusterOpen:Tn})}return ue},[n,x,g,t]),te=(ue,Ee={})=>{var ot,kt,Bt,yt,mt;const le=(ot=Ee.ghostMode)!=null?ot:!1,Se=(kt=Ee.hideLive)!=null?kt:!1,Je=ue.path===n,ht=ee.has(ue.path),lt=(Bt=ue.treeLoaded)!=null?Bt:ue.branches.length>0,He=H.get(ue.path),gt=(yt=re[ue.path])!=null?yt:He?kk(He.rootBranchNames,He.childNamesByParent,y,ue.defaultBranch):new Set,Ct=Qe===ue.path,It=ue.path===n;return l.jsxs(Jo.div,{layout:"position",transition:{duration:.12,ease:"easeOut"},"data-project-path":ue.path,className:dn("relative z-0 flex flex-col gap-1",ht&&He?"mb-2.5":""),children:[Dt!==null&&Qe!==ue.path&&((mt=et[Dt])==null?void 0:mt.path)===ue.path?l.jsx("div",{className:"h-px","aria-hidden":"true",children:l.jsx("div",{className:"mx-1 h-px bg-primary/60"})}):null,l.jsxs("div",{className:dn("relative z-0 px-1",Se?"pointer-events-none opacity-0":""),children:[l.jsxs("div",{className:dn(le?"group flex w-full items-center gap-0 rounded-lg px-0 h-6 text-muted-foreground":"group sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-background px-0 h-6 transition-all duration-100 ease-out hover:bg-accent cursor-grab active:cursor-grabbing","text-muted-foreground",Ct&&!le?"opacity-0":""),onPointerDownCapture:Ge=>{if(le)return;const xt=Ge.target;xt!=null&&xt.closest('.window-no-drag, button, input, textarea, select, [contenteditable="true"]')||dt(Ge,ue.path)},onClick:Ge=>{if(le||Qe===ue.path||nn.current)return;const xt=Ge.target;xt!=null&&xt.closest('button, input, textarea, select, [contenteditable="true"]')||i(ue.path)},children:[l.jsx("button",{type:"button",onPointerDown:Ge=>Ge.stopPropagation(),onClick:Ge=>{Ge.preventDefault(),Ge.stopPropagation(),ae(xt=>{const Kt=new Set(xt);return Kt.has(ue.path)?Kt.delete(ue.path):Kt.add(ue.path),ce(Kt),Kt})},"aria-expanded":ht,"aria-label":`${ht?"Collapse":"Expand"} ${ue.name}`,className:dn("flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-accent",le?"pointer-events-none":""),children:l.jsx(jk,{open:ht})}),l.jsx("span",{className:dn("min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors","font-normal","text-muted-foreground"),children:ue.name}),l.jsxs("div",{className:"relative shrink-0",children:[l.jsx("button",{type:"button",onPointerDown:Ge=>Ge.stopPropagation(),"aria-label":`Project actions for ${ue.name}`,"aria-expanded":ie===ue.path,onClick:Ge=>{Ge.stopPropagation(),F(xt=>xt===ue.path?null:ue.path)},className:dn("pr-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-muted-foreground opacity-0 hover:bg-accent hover:text-muted-foreground group-hover:opacity-100",le?"pointer-events-none":""),children:l.jsx(dw,{className:"h-4 w-4 shrink-0"})}),ie===ue.path&&!le?l.jsxs("div",{role:"menu",className:"absolute right-0 top-full z-[120] mt-1 w-40 overflow-hidden rounded-xl border border-border/60 bg-card p-1 shadow-lg",onClick:Ge=>Ge.stopPropagation(),children:[l.jsx("button",{type:"button",role:"menuitem",onClick:()=>{F(null),u(ue.path)},className:"flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Open in Finder"}),l.jsx("button",{type:"button",role:"menuitem",onClick:()=>{F(null),c(ue.path)},className:"flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300",children:"Remove"})]}):null]})]}),ht?lt&&He?l.jsx("ul",{className:dn("relative z-0 space-y-1 pt-0",le?"opacity-70":""),children:He.rootBranchNames.map((Ge,xt)=>l.jsx(sp,{branchName:Ge,depth:0,isLast:xt===He.rootBranchNames.length-1,branchByName:He.branchByName,branchCommitPreviews:He.branchCommitPreviewsFromLayout,childNamesByParent:He.childNamesByParent,branchAnchorShaByName:He.branchAnchorShaByName,expandedBranchNames:gt,onToggleBranch:Kt=>it(ue.path,Kt),checkedOutBranchName:He.checkedOutBranchName,ancestors:new Set,showCommits:O,getMergeTargetLabels:He.getMergeTargetLabels,sourceBranchName:Ge,clusterKeyByCommitId:He.clusterKeyByCommitId,isGridClusterOpen:He.isGridClusterOpen,onToggleGridCluster:Ut,onSelectCommit:async Kt=>{Je||await i(ue.path),T==null||T(Kt)},onSelectBranch:async Kt=>{Je||await i(ue.path),z==null||z(Kt)},isActiveProject:It},`${ue.path}:${Ge}`))}):l.jsx("p",{className:dn("px-2 py-2 text-xs text-muted-foreground",le?"opacity-70":""),children:"Loading branch tree..."}):null]})]},ue.path)};return l.jsxs("aside",{ref:K,"aria-label":"Dense branch sidebar",className:dn("pointer-events-auto relative h-full select-none overflow-hidden",R),style:q,children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"absolute inset-x-0 top-0 z-80 h-12"}),l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[p&&l.jsx("div",{className:"px-2.5 pb-2",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:p})}),l.jsx("div",{className:dn("px-2 pb-2",Y?"opacity-0 pointer-events-none":""),children:l.jsx("div",{className:"px-1",children:l.jsxs("button",{type:"button",onClick:a,disabled:h,"aria-label":"Add Repo",className:"window-no-drag group flex w-full items-center gap-0 rounded-lg px-0 h-6 text-muted-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors group-hover:bg-accent",children:l.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-4 w-4 shrink-0",children:l.jsx("path",{d:"M12 5V19M5 12H19",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}),l.jsx("span",{className:"min-w-0 flex-1 truncate pl-0 text-left text-sm font-normal text-muted-foreground",children:"New Project"})]})})}),l.jsx("div",{ref:V,className:dn("sidebar-scrollbar min-h-0 flex-1 space-y-2 overflow-y-auto px-2",Y?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:et.map(ue=>te(ue,{hideLive:Qe===ue.path}))})]}),Qe&&rt?l.jsx("div",{"aria-hidden":"true",className:"pointer-events-none fixed left-0 top-0 z-[90]",style:{transform:`translate3d(${rt.x}px, ${rt.y}px, 0)`,width:`${rt.width}px`},children:te((je=t.find(ue=>ue.path===Qe))!=null?je:st.find(ue=>ue.path===Qe),{ghostMode:!0})}):null]})}const Ek="git-visualizer",Ju="git-visualizer:projects",ed=12,nx=1400,Tk=180,sx="git-visualizer:sidebar-width",ox="git-visualizer:sidebar-collapsed",ix="git-visualizer:grid-clumps",ax=432,rx=280,lx=640;function er(t){return t==="/"?t:t.replace(/\/+$/,"")}function Ak(...t){return t.filter(Boolean).join(" ")}function Cd(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function Nk(t){return Cd(t)===Ek}function cx(t){var n,i;return[t.path,t.name,t.defaultBranch,t.updatedAtMs,t.branches.map(a=>[a.name,a.headSha,a.commitsAhead,a.commitsBehind,a.unpushedCommits,a.remoteSyncStatus,a.status,a.lastCommitDate].join(":")).join("|"),t.mergeNodes.map(a=>[a.fullSha,a.targetBranch,a.targetCommitSha].join(":")).join("|"),t.directCommits.map(a=>a.fullSha).join("|"),t.unpushedDirectCommits.map(a=>a.fullSha).join("|"),t.checkedOutRef?[(n=t.checkedOutRef.branchName)!=null?n:"",t.checkedOutRef.headSha,(i=t.checkedOutRef.parentSha)!=null?i:"",t.checkedOutRef.hasUncommittedChanges?"1":"0"].join(":"):"__none__",Object.entries(t.unpushedCommitShasByBranch).map(([a,c])=>`${a}:${c.join(",")}`).join("|"),Object.entries(t.branchCommitPreviews).map(([a,c])=>`${a}:${c.map(u=>u.fullSha).join(",")}`).join("|"),Object.entries(t.branchParentByName).map(([a,c])=>`${a}:${c!=null?c:""}`).join("|"),Object.entries(t.laneByBranch).map(([a,c])=>`${a}:${c}`).join("|"),Object.entries(t.branchUniqueAheadCounts).map(([a,c])=>`${a}:${c}`).join("|")].join("@@")}function Dk(){var mo,Gs,Is,qs,po;const[t,n]=_.useState(null),[i,a]=_.useState(""),[c,u]=_.useState([]),[d,h]=_.useState({}),[p,y]=_.useState(!1),[g,x]=_.useState([]),[b,S]=_.useState([]),[k,j]=_.useState([]),[E,T]=_.useState([]),[z,O]=_.useState({}),[R,q]=_.useState([]),[Y,K]=_.useState("main"),[V,ee]=_.useState(null),[ae,re]=_.useState([]),[Ae,We]=_.useState(!1),[ne,pe]=_.useState(""),[P,ie]=_.useState(0),[F,_e]=_.useState(1),[Te,I]=_.useState({}),[me,se]=_.useState({}),[he,be]=_.useState(null),[Re,$e]=_.useState(null),[Ue,Qe]=_.useState(null),[Lt]=_.useState(!1),[Dt,Fe]=_.useState(!1),[rt,Tt]=_.useState(!1),[nn,Xt]=_.useState(null),[Pe,ce]=_.useState(!1),[nt,st]=_.useState(!1),[et,Ze]=_.useState("active"),[ft,dt]=_.useState(null),[wt,St]=_.useState(null),[Ut,it]=_.useState(!1),[H,te]=_.useState(null),[we,je]=_.useState(!1),[ue,Ee]=_.useState(null),[le,Se]=_.useState(null),[Je,ht]=_.useState(!1),[lt,He]=_.useState(!1),[gt,Ct]=_.useState(!1),[It,ot]=_.useState(!1),[kt,Bt]=_.useState({}),[yt,mt]=_.useState({}),[Ge,xt]=_.useState({}),[Kt,en]=_.useState({}),[sn,qn]=_.useState({}),[Mn,Sn]=_.useState([]),[vn,Yn]=_.useState(!1),[Gt,En]=_.useState(!1),[at,Tn]=_.useState(!1),[Yt,Kn]=_.useState(!1),[os,cs]=_.useState(!1),[us,Vs]=_.useState("horizontal"),[no,so]=_.useState(!1),[ds,Un]=_.useState(ax),[Ls,jo]=_.useState(!1),[kn,Rn]=_.useState({dragging:!1,lastEvent:"idle"}),oo=_.useRef(null),ms=_.useRef(0),ks=_.useRef(0),ps=_.useRef({}),io=_.useRef(null),fn=_.useRef({}),rn=_.useRef({}),ln=_.useRef(!1),Bn=_.useRef(null),vi=_.useRef(ax),ti=_.useRef(null),ni=_.useRef(null),ao=Nk(t)||!0,ui=_.useRef(!1),vs=_.useRef(!1),ro=_.useRef(new Set),Ln=_.useRef([]),xo=_.useRef([]),_s=_.useRef(null),Qn=_.useRef({}),Ys=t!=null?t:"__no-repo__",Mo=(B,X)=>{try{const G={opened:Object.fromEntries(Object.entries(B).map(([D,Z])=>[D,Array.from(Z)])),closed:Object.fromEntries(Object.entries(X).map(([D,Z])=>[D,Array.from(Z)]))};window.localStorage.setItem(ix,JSON.stringify(G))}catch{}};_.useEffect(()=>{var B,X;try{const G=window.localStorage.getItem(ix);if(!G)return;const D=JSON.parse(G);if(!D||typeof D!="object")return;const Z={},w={},C=D;for(const[N,L]of Object.entries((B=C.opened)!=null?B:{}))Array.isArray(L)&&(Z[N]=new Set(L.filter(W=>typeof W=="string")));for(const[N,L]of Object.entries((X=C.closed)!=null?X:{}))Array.isArray(L)&&(w[N]=new Set(L.filter(W=>typeof W=="string")));I(Z),se(w)}catch{}},[]),_.useEffect(()=>{Mo(Te,me)},[me,Te]);const Yo=_.useMemo(()=>{var B;return(B=Te[Ys])!=null?B:new Set},[Ys,Te]),Vt=_.useMemo(()=>{var B;return(B=me[Ys])!=null?B:new Set},[Ys,me]),lo=_.useCallback(B=>{I(X=>{var w;const G=(w=X[Ys])!=null?w:new Set,D=typeof B=="function"?B(G):B,Z={...X,[Ys]:new Set(D)};return Mo(Z,me),Z})},[Ys,me]),Ts=_.useCallback(B=>{se(X=>{var w;const G=(w=X[Ys])!=null?w:new Set,D=typeof B=="function"?B(G):B,Z={...X,[Ys]:new Set(D)};return Mo(Te,Z),Z})},[Ys,Te]),Wo=_.useMemo(()=>c.map(B=>{var X,G,D,Z,w,C,N,L,W,J,Ne,xe,Le,qe,tt,pt,_t,ut,ct,Cn,zn,$n,un,Ot,vt,Rt,In,yn;return{...B,...(X=d[B.path])!=null?X:{},branches:(D=(G=d[B.path])==null?void 0:G.branches)!=null?D:[],mergeNodes:(w=(Z=d[B.path])==null?void 0:Z.mergeNodes)!=null?w:[],directCommits:(N=(C=d[B.path])==null?void 0:C.directCommits)!=null?N:[],unpushedDirectCommits:(W=(L=d[B.path])==null?void 0:L.unpushedDirectCommits)!=null?W:[],unpushedCommitShasByBranch:(Ne=(J=d[B.path])==null?void 0:J.unpushedCommitShasByBranch)!=null?Ne:{},checkedOutRef:(Le=(xe=d[B.path])==null?void 0:xe.checkedOutRef)!=null?Le:null,worktrees:(tt=(qe=d[B.path])==null?void 0:qe.worktrees)!=null?tt:[],stashes:(_t=(pt=d[B.path])==null?void 0:pt.stashes)!=null?_t:[],branchCommitPreviews:(ct=(ut=d[B.path])==null?void 0:ut.branchCommitPreviews)!=null?ct:{},laneByBranch:(zn=(Cn=d[B.path])==null?void 0:Cn.laneByBranch)!=null?zn:{},branchUniqueAheadCounts:(un=($n=d[B.path])==null?void 0:$n.branchUniqueAheadCounts)!=null?un:{},defaultBranch:(Rt=(vt=(Ot=d[B.path])==null?void 0:Ot.defaultBranch)!=null?vt:B.branchName)!=null?Rt:"main",treeLoaded:(yn=(In=d[B.path])==null?void 0:In.loaded)!=null?yn:!1}}),[c,d]),wi=_.useMemo(()=>({githubAuthStatus:H,githubAuthLoading:we,onGitHubAuthSetup:Xo,gridSearchQuery:ne,setGridSearchQuery:pe,gridSearchResultCount:he,gridSearchResultIndex:Re,setGridSearchJumpDirection:_e,setGridSearchJumpToken:ie,mapGridOrientation:us,setMapGridOrientation:Vs,setIsGridDebugOpen:so,githubAuthMessage:ue,commitSwitchFeedback:le,isCommitSwitchFeedbackVisible:Je}),[le,we,ue,H,ne,he,Re,Xo,Je,us,pe,_e,ie,so,Vs]);function Eo(B,X){const G=cx(X);return ps.current[B]===G?!1:(ps.current={...ps.current,[B]:G},h(Z=>Z[B]===X?Z:{...Z,[B]:X}),!0)}function Os(B){var X;return[B.repoPath,B.defaultBranch,B.headSha,(X=B.upstreamSha)!=null?X:"",B.hasUncommittedChanges?"1":"0",B.branchCount,B.worktreeCount,B.stashCount].join("|")}function Fo(B){var X;return[B.repoPath,B.headSha,(X=B.upstreamSha)!=null?X:"",B.hasUncommittedChanges?"1":"0"].join("|")}function Ws(B,X){var G,D,Z,w,C,N;return{repoPath:B,headSha:(D=(G=X.checkedOutRef)==null?void 0:G.headSha)!=null?D:"",upstreamSha:(w=(Z=X.checkedOutRef)==null?void 0:Z.parentSha)!=null?w:null,hasUncommittedChanges:(N=(C=X.checkedOutRef)==null?void 0:C.hasUncommittedChanges)!=null?N:!1}}function jn(B,X,G){var D,Z,w,C,N,L;return{repoPath:B,defaultBranch:X,headSha:(Z=(D=G.checkedOutRef)==null?void 0:D.headSha)!=null?Z:"",upstreamSha:(C=(w=G.checkedOutRef)==null?void 0:w.parentSha)!=null?C:null,hasUncommittedChanges:(L=(N=G.checkedOutRef)==null?void 0:N.hasUncommittedChanges)!=null?L:!1,branchCount:G.branches.length,worktreeCount:G.worktrees.length,stashCount:G.stashes.length}}_.useEffect(()=>{try{const B=localStorage.getItem(Ju);if(!B)return;const X=JSON.parse(B);if(!Array.isArray(X))return;const G=X.filter(D=>typeof D=="object"&&D!==null&&typeof D.path=="string"&&typeof D.name=="string"&&typeof D.lastOpenedAt=="number");u(G.slice(0,ed))}catch{u([])}},[]),_.useEffect(()=>{vs.current||t||c.length!==0&&(vs.current=!0,As(c[0].path))},[c,t]);const To=_.useMemo(()=>b.reduce((B,X)=>(B[X.targetCommitSha]=X.targetBranch,B),{}),[b]);_.useEffect(()=>{t&&(ln.current||h(B=>{var X,G;return{...B,[t]:{path:t,name:i||Cd(t),branches:g,mergeNodes:b,directCommits:k,unpushedDirectCommits:E,mergeTargetBranchByCommitSha:b.reduce((D,Z)=>(D[Z.targetCommitSha]=Z.targetBranch,D),{}),unpushedCommitShasByBranch:z,checkedOutRef:V,worktrees:ae,stashes:Mn,branchCommitPreviews:yt,branchParentByName:Ge,laneByBranch:Kt,branchUniqueAheadCounts:sn,defaultBranch:Y,loaded:!0,cacheSchemaVersion:(G=(X=B[t])==null?void 0:X.cacheSchemaVersion)!=null?G:1,updatedAtMs:Date.now()}}}))},[t,i,g,b,k,E,To,z,V,ae,Mn,yt,Ge,Kt,sn,Y]);async function bo(B,X=!1){var D;const G=er(B);if(G&&!ro.current.has(G)&&!(!X&&((D=d[G])!=null&&D.loaded))){ro.current.add(G),G===t&&y(!0);try{const Z=await Me("get_repo_visual_snapshot",{repoPath:G,forceRefresh:X});Eo(G,Z)}finally{ro.current.delete(G),G===t&&ro.current.size===0&&y(!1)}}}_.useEffect(()=>{c.length!==0&&c.forEach(B=>{bo(B.path),Me("watch_repo",{repoPath:B.path}).catch(console.error)})},[c]),_.useEffect(()=>{let B=!1,X=null;return yc("git-activity",G=>{if(B)return;const D=er(G.payload.repoPath);!D||D===t||bo(D,!0)}).then(G=>{B?G():X=G}).catch(console.error),()=>{B=!0,X&&X()}},[t]);function ws(B){u(X=>{const G=er(B.path);if(!G)return X;const D={...B,path:G},w=(X.some(C=>C.path===G)?X.map(C=>C.path===G?D:C):[...X,D]).slice(-ed);try{localStorage.setItem(Ju,JSON.stringify(w))}catch{}return w})}function vo(B){u(X=>{const G=new Map(X.map(Z=>[Z.path,Z])),D=[];for(const Z of B){const w=G.get(Z);w&&(D.push(w),G.delete(Z))}for(const Z of X)G.has(Z.path)&&D.push(Z);try{localStorage.setItem(Ju,JSON.stringify(D.slice(0,ed)))}catch{}return D.slice(0,ed)})}async function cn(B){const X=er(B);if(X){Xt(null);try{const[G,D]=await Promise.all([Me("get_repo_info",{repoPath:X}),Me("get_default_branch",{repoPath:X}).catch(()=>"main")]);ws({path:X,name:G.name,lastOpenedAt:Date.now(),branchName:D}),await bo(X,!0)}catch(G){Xt(G instanceof Error?G.message:String(G))}}}function Fs(B){var G,D;const X=er(B);if(X&&(u(Z=>{const w=Z.filter(C=>C.path!==X);try{localStorage.setItem(Ju,JSON.stringify(w))}catch{}return w}),h(Z=>{if(!(X in Z))return Z;const w={...Z};return delete w[X],w}),t===X)){const Z=(D=(G=c.find(w=>w.path!==X))==null?void 0:G.path)!=null?D:null;Z?As(Z):(n(null),a(""),x([]),S([]),j([]),T([]),O({}),ee(null),re([]),Sn([]),mt({}),xt({}),en({}),qn({}))}}async function zs(B){const X=er(B);if(X)try{await Me("reveal_in_finder",{path:X})}catch(G){Xt(G instanceof Error?G.message:String(G))}}const co=()=>{(async()=>{var B,X;try{const G=await Jv({directory:!0,multiple:!1,defaultPath:(X=(B=c[0])==null?void 0:B.path)!=null?X:void 0});typeof G=="string"&&G&&await cn(G)}catch(G){Xt(G instanceof Error?G.message:String(G))}})()};async function js(B,X){const D=[];let Z=0;for(;;){const w=await Me("get_merge_nodes",{repoPath:B,branch:X,page:Z,perPage:100});if(D.push(...w.nodes),!w.hasMore||w.nodes.length===0)break;Z+=1}return D}async function zo(B,X,G){const D=Array.from(new Set([G,...X.map(C=>C.name)].filter(C=>!!C)));if(D.length===0)return[];const Z=await Promise.all(D.map(C=>js(B,C).catch(()=>[]))),w=new Map;for(const C of Z)for(const N of C){const L=`${N.targetCommitSha}:${N.targetBranch}`;w.has(L)||w.set(L,N)}return Array.from(w.values())}const Xs=B=>B.map(X=>`${X.name}|${X.headSha}|${X.commitsAhead}|${X.commitsBehind}|${X.unpushedCommits}|${X.remoteSyncStatus}`).join("||"),Ao=B=>B.map(X=>X.fullSha).join("|"),wo=B=>{var X,G;return B?`${(X=B.branchName)!=null?X:""}|${B.headSha}|${(G=B.parentSha)!=null?G:""}|${B.hasUncommittedChanges?1:0}`:"__none__"};async function On(B,X,G){var qe,tt;const D=X!=null?X:Y,Z=(qe=G==null?void 0:G.includeMergeNodes)!=null?qe:!0,w=(tt=G==null?void 0:G.includeUnpushedShaMap)!=null?tt:!0,[C,N,L,W,J,Ne]=await Promise.all([Me("get_branches",{repoPath:B}),Me("get_all_repo_commits",{repoPath:B}),Me("get_unpushed_direct_commits",{repoPath:B,branch:D}).catch(()=>[]),Me("get_checked_out_ref",{repoPath:B}).catch(()=>null),Me("list_worktrees",{repoPath:B}).catch(()=>[]),Me("list_stashes",{repoPath:B}).catch(()=>[])]),xe=Z?await zo(B,C,D):b,Le=w?await Promise.all([D,...C.map(pt=>pt.name)].map(async pt=>{const _t=await Me("get_branch_unpushed_commit_shas",{repoPath:B,branch:pt}).catch(()=>[]);return[pt,_t]})):Object.entries(z);x(C),S(xe),j(N),T(L),O(Object.fromEntries(Le)),ee(W),re(J),Sn(Ne)}async function An(B){const[X,G,D]=await Promise.all([Me("get_branches",{repoPath:B}).catch(()=>[]),Me("get_all_repo_commits",{repoPath:B}).catch(()=>[]),Me("get_checked_out_ref",{repoPath:B}).catch(()=>null)]);return Xs(X)!==Xs(Ln.current)||Ao(G)!==Ao(xo.current)||wo(D)!==wo(_s.current)}async function Vn(B){Se(null),Tt(!0),ln.current=!0;try{const[X,G]=await Promise.all([Me("get_repo_info",{repoPath:B}),Me("get_default_branch",{repoPath:B})]);a(X.name),K(G),n(B),await On(B,G),Ms(B),Se({kind:"success",message:`Now targeting worktree at ${B}`})}catch(X){const G=X instanceof Error?X.message:String(X);Se({kind:"error",message:G}),console.error("Failed to switch worktree:",G)}finally{Tt(!1),ln.current=!1}}async function Wn(B,X){if(!(!t||Ae)){We(!0),Se(null);try{await Me("remove_worktree",{repoPath:t,worktreePath:B,force:X}),await On(t),Se({kind:"success",message:`Removed worktree at ${B}`})}catch(G){const D=G instanceof Error?G.message:String(G);Se({kind:"error",message:D}),console.error("Failed to remove worktree:",D)}finally{We(!1)}}}function uo(B,X){var D,Z;const G=cx(X);return io.current===G?!1:(io.current=G,a(X.name||Cd(B)),K(X.defaultBranch||"main"),x(X.branches),S(X.mergeNodes),j(X.directCommits),T(X.unpushedDirectCommits),O(X.unpushedCommitShasByBranch),ee(X.checkedOutRef),re(X.worktrees),Sn(X.stashes),mt(X.branchCommitPreviews),xt((D=X.branchParentByName)!=null?D:{}),en((Z=X.laneByBranch)!=null?Z:{}),qn(X.branchUniqueAheadCounts),n(B),!0)}async function As(B){var Z;const X=++ms.current,G=er(B);if(!G)return;ln.current=!0;const D=d[G];if(D!=null&&D.loaded)try{const w=await Me("get_repo_quick_state",{repoPath:G});if(X!==ms.current)return;const C=Fo(w);if(((Z=rn.current[G])!=null?Z:D?Fo(Ws(G,D)):null)===C){Xt(null),rn.current={...rn.current,[G]:C},uo(G,D),ws({path:G,name:D.name||Cd(G),lastOpenedAt:Date.now(),branchName:D.defaultBranch}),Tt(!1),Fe(!1),Ms(G),(async()=>{try{const L=await Me("get_repo_refresh_fingerprint",{repoPath:G}),W=Os(L);if(X!==ms.current)return;if(fn.current[G]!==W){const J=await Me("get_repo_visual_snapshot",{repoPath:G,forceRefresh:!0});if(X!==ms.current)return;Eo(G,J),fn.current={...fn.current,[G]:W},rn.current={...rn.current,[G]:Fo(Ws(G,J))},uo(G,J)}}catch{}})(),ln.current=!1;return}rn.current={...rn.current,[G]:C}}catch{}if(Fe(!0),Tt(!0),Xt(null),await new Promise(w=>setTimeout(w,15)),X===ms.current)try{const[w,C]=await Promise.all([Me("get_repo_info",{repoPath:G}),Me("get_default_branch",{repoPath:G})]);if(X!==ms.current)return;a(w.name),K(C);const N=await Me("get_repo_visual_snapshot",{repoPath:G,forceRefresh:!0});if(X!==ms.current)return;Eo(G,N),fn.current={...fn.current,[G]:Os(jn(G,C,N))},rn.current={...rn.current,[G]:Fo(Ws(G,N))},uo(G,N),ws({path:G,name:w.name,lastOpenedAt:Date.now(),branchName:C}),Tt(!1),Fe(!1),Ms(G)}catch(w){if(X!==ms.current)return;console.error("Failed to load repo:",w),Xt(w instanceof Error?w.message:String(w)),n(null),Fe(!1),Tt(!1)}finally{ln.current=!1}}async function Ms(B){const X=++ks.current;try{if(X!==ks.current)return;it(!1),Ee(null);const G=await Me("get_github_info",{repoPath:B}),D=await Me("get_github_auth_status");if(X!==ks.current||(te(D),!D.ghAvailable||!D.authenticated))return;const Z=await Me("get_open_prs",{owner:G.owner,repo:G.repo});if(X!==ks.current)return;q(Z),it(!0)}catch(G){if(X!==ks.current)return;console.log("GitHub data not available:",G),Ee(G instanceof Error?G.message:String(G)),it(!1)}}_.useEffect(()=>{let B=null,X=!1;const G=(()=>{try{return fp().label}catch{return null}})(),D=async w=>{var N;const C=(N=w==null?void 0:w.path)==null?void 0:N.trim();!C||X||t!==C&&await As(C)};return(async()=>{G==="main"&&(B=await yc("gitviz://open-repo",async C=>{await D(C.payload)}));const w=await Me("take_pending_open_repo");await D(w)})(),()=>{X=!0,B&&B()}},[t]),_.useEffect(()=>{Ln.current=g},[g]),_.useEffect(()=>{xo.current=k},[k]),_.useEffect(()=>{_s.current=V},[V]),_.useEffect(()=>{Qn.current=Ge},[Ge]),_.useEffect(()=>{ui.current=os},[os]),_.useEffect(()=>{},[t,Y,ao]),_.useEffect(()=>{if(!t||!Y||!ao)return;Me("watch_repo",{repoPath:t}).catch(console.error);let B=!1,X=!1,G=!1,D=!1,Z=null,w=null,C=null;const N=async()=>{if(!B){if(ui.current){X=!0;return}if(G){X=!0;return}G=!0;try{if(!await An(t)||B)return;await On(t,Y)}catch(J){console.warn("Frozen git-activity refresh failed:",J)}finally{G=!1,X&&!B&&(X=!1,window.setTimeout(()=>{N()},0))}}},L=()=>{X=!0,N()},W=async()=>{if(!(B||D||document.visibilityState!=="visible")){D=!0;try{const J=await Me("get_remote_branch_head_sha",{repoPath:t,branch:Y});if(B||J==null)return;if(Z==null){Z=J;return}if(J===Z)return;Z=J,await On(t,Y)}catch(J){console.warn("Remote tip refresh failed:",J)}finally{D=!1}}};return w=window.setInterval(()=>{W()},15e3),W(),yc("git-activity",J=>{er(J.payload.repoPath)===t&&(bo(t,!0),L())}).then(J=>{B?J():C=J}).catch(console.error),()=>{B=!0,w!=null&&window.clearInterval(w),C&&C()}},[t,Y,ao]);async function Xo(){if(t){je(!0),Ee(null);try{await Me("authenticate_github");const B=await Me("get_github_auth_status");te(B),B.authenticated?await Ms(t):B.message&&Ee(B.message)}catch(B){Ee(B instanceof Error?B.message:String(B))}finally{je(!1)}}}const fo=new Set(R.map(B=>B.branchName)),gs=14*864e5,Es=Date.now(),$o=g.filter(B=>B.status==="stale"),So=$o.filter(B=>fo.has(B.name)||Es-new Date(B.lastCommitDate).getTime()<=gs),ho=$o.filter(B=>!fo.has(B.name)&&Es-new Date(B.lastCommitDate).getTime()>gs),Io=B=>{var X;return Object.prototype.hasOwnProperty.call(sn,B.name)?Math.max(0,(X=sn[B.name])!=null?X:0):Math.max(0,B.commitsAhead)};_.useEffect(()=>{Bt({}),ni.current=null,je(!1),te(null),Ee(null),q([]),Se(null)},[t]),_.useEffect(()=>{var L,W,J,Ne;if(!t||!Y){Bt({}),mt({}),xt({}),en({}),qn({}),ni.current=null;return}const B=g.map(xe=>{var Le;return`${xe.name}:${xe.headSha}:${(Le=xe.parentBranch)!=null?Le:""}:${xe.commitsAhead}`}).join("|"),X=b.map(xe=>{var Le,qe;return`${xe.fullSha}:${(qe=(Le=xe.parentShas)==null?void 0:Le[1])!=null?qe:""}`}).join("|"),G=`${t}|${Y}|${B}|${X}`;if(ni.current===G)return;ni.current=G;const D={},Z={};for(const xe of g){if(xe.name===Y)continue;const Le=k.filter(qe=>qe.branch===xe.name).map(qe=>{var tt;return{fullSha:qe.fullSha,sha:qe.sha,parentSha:(tt=qe.parentSha)!=null?tt:null,message:qe.message,author:qe.author,date:qe.date,kind:"commit"}});D[xe.name]=Le,Z[xe.name]=Le.length}const w=new Map;for(const xe of k)w.set(xe.fullSha,xe.branch);const C=xe=>{if(!xe)return null;const Le=w.get(xe);if(Le)return Le;for(const[qe,tt]of w.entries())if(qe.startsWith(xe)||xe.startsWith(qe))return tt;return null},N={[Y]:null};for(const xe of g){if(xe.name===Y){N[xe.name]=null;continue}const Le=k.filter(_t=>_t.branch===xe.name),qe=new Set(Le.map(_t=>_t.fullSha)),tt=(W=(L=Le.filter(_t=>{var ct;const ut=(ct=_t.parentSha)!=null?ct:null;return!ut||!qe.has(ut)}).sort((_t,ut)=>{const ct=new Date(_t.date).getTime()-new Date(ut.date).getTime();return ct!==0?ct:_t.fullSha.localeCompare(ut.fullSha)})[0])==null?void 0:L.parentSha)!=null?W:null,pt=C(tt);N[xe.name]=(Ne=(J=pt!=null?pt:Qn.current[xe.name])!=null?J:xe.parentBranch)!=null?Ne:null}Bt({}),mt(D),xt(N),en(xe=>{const Le={};for(const qe of g){const tt=xe[qe.name];tt!=null&&Number.isFinite(tt)&&(Le[qe.name]=tt)}return Le}),qn(Z)},[t,Y,g,b,k]),_.useEffect(()=>{if(!le){ht(!1);return}ht(!0);const B=window.setTimeout(()=>{ht(!1)},nx),X=window.setTimeout(()=>{Se(null)},nx+Tk);return()=>{window.clearTimeout(B),window.clearTimeout(X)}},[le]),_.useEffect(()=>{if(!t||g.length===0)return;const B=D=>new Promise(Z=>setTimeout(Z,D));async function X(){const Z=`${await Me("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${Z}`),await B(800),await Me("screenshot",{path:`${Z}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${Z}`)}const G=D=>{if((D.metaKey||D.ctrlKey)&&!D.shiftKey&&!D.altKey&&D.key.toLowerCase()==="b"){D.preventDefault(),jo(Z=>!Z);return}(D.metaKey||D.ctrlKey)&&D.shiftKey&&D.key==="S"&&(D.preventDefault(),X())};return window.addEventListener("keydown",G),()=>window.removeEventListener("keydown",G)},[t,i,g]);function Po(){st(!0),setTimeout(()=>{ce(!1),st(!1),Ze("active"),St(null)},100)}async function Si(B){if(!t)return;Se(null);const X=/^STASH:(\d+)$/.exec(B.commitSha);if(X){try{const G=parseInt(X[1],10),D=await Me("apply_stash_restore",{repoPath:t,stashIndex:G});ee(D),await On(t);const Z=`Stash ${G+1}`,w=D.branchName?` on branch ${D.branchName}`:" at the stash base (detached HEAD)";Se({kind:"success",message:`Restored ${Z}${w}; stash applied and dropped (uncommitted changes).`})}catch(G){const D=G instanceof Error?G.message:String(G);Se({kind:"error",message:D}),console.error("Failed to apply stash:",D)}return}if(B.branchName){const G=(Z,w)=>{const C=Z.replace(/\\/g,"/").replace(/\/+$/,""),N=w.replace(/\\/g,"/").replace(/\/+$/,"");return C===N||C.toLowerCase()===N.toLowerCase()},D=ae.find(Z=>Z.pathExists===!1||Z.isCurrent||t&&G(Z.path,t)?!1:Z.branchName===B.branchName);if(D){await Vn(D.path);return}}try{let G="";(await Me("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await Me("stash_push",{repoPath:t,includeUntracked:!0}),G="Stashed local changes (including untracked), then ",await On(t));const Z=B.branchName?await Me("checkout_branch",{repoPath:t,branchName:B.branchName}):await Me("checkout_ref",{repoPath:t,refName:B.commitSha}),w=await Me("get_checked_out_ref",{repoPath:t}).catch(()=>Z);ee(w),await On(t);const C=w.branchName?w.branchName:`${w.headSha.slice(0,7)} (detached)`;Se({kind:"success",message:`${G}Checked out ${C}`})}catch(G){const D=G instanceof Error?G.message:String(G);Se({kind:"error",message:D}),console.error("Failed to checkout commit:",D)}}async function ta(){if(!(!t||vn)){Se(null),Yn(!0);try{if(!(await Me("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){Se({kind:"error",message:"No local changes to stash."});return}await Me("stash_push",{repoPath:t,includeUntracked:!0}),await On(t),Se({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(B){const X=B instanceof Error?B.message:String(B);Se({kind:"error",message:X}),console.error("Failed to stash:",X)}finally{Yn(!1)}}}async function Ii(B){if(!t||Gt)return!1;const X=B.trim();if(!X)return Se({kind:"error",message:"Enter a commit message."}),!1;Se(null),En(!0);try{if(!(await Me("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Se({kind:"error",message:"No local changes to commit."}),!1;const D=await Me("commit_working_tree",{repoPath:t,message:X});return ee(D),On(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Se({kind:"success",message:"Committed local changes."}),!0}catch(G){const D=G instanceof Error?G.message:String(G);return Se({kind:"error",message:D}),console.error("Failed to commit:",D),!1}finally{En(!1)}}async function Pi(){if(!t||at)return!1;Se(null),Tn(!0);try{if(!(await Me("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Se({kind:"error",message:"No local changes to stage."}),!1;const X=await Me("stage_working_tree",{repoPath:t});return ee(X),On(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Se({kind:"success",message:"Staged all changes."}),!0}catch(B){const X=B instanceof Error?B.message:String(B);return Se({kind:"error",message:X}),console.error("Failed to stage:",X),!1}finally{Tn(!1)}}async function si(B,X){if(!(!t||Yt)){Kn(!0),Se(null);try{const G=/^STASH:(\d+)$/.exec(B);let D;if(G){const Z=parseInt(G[1],10);D=await Me("move_stash_to_new_branch",{repoPath:t,stashIndex:Z,branchName:X})}else D=await Me("create_branch_from_uncommitted",{repoPath:t,branchName:X});ee(D),On(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Se({kind:"success",message:`Moved to new branch "${X}"`})}catch(G){const D=G instanceof Error?G.message:String(G);Se({kind:"error",message:D}),console.error("Failed to create branch from node:",D)}finally{Kn(!1)}}}async function Nt(B){if(!(!t||Yt)){Kn(!0),Se(null);try{const X=await Me("create_root_branch",{repoPath:t,branchName:B});ee(X),On(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Se({kind:"success",message:`Created new root branch "${B}"`})}catch(X){const G=X instanceof Error?X.message:String(X);Se({kind:"error",message:G}),console.error("Failed to create root branch:",G)}finally{Kn(!1)}}}async function Ci(B,X){if(!t)return;const G=Array.from(new Set(B.filter(D=>!!D&&D!==X)));if(G.length!==0){Se(null),He(!0);try{let D=null;for(const Z of G)D=await Me("merge_ref_into_branch",{repoPath:t,sourceRef:Z,targetBranch:X});On(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),D&&ee(D),Se({kind:"success",message:G.length===1?`Merged ${G[0].slice(0,7)} into ${X}`:`Merged ${G.length} commits into ${X}`})}catch(D){const Z=D instanceof Error?D.message:String(D);Se({kind:"error",message:Z}),console.error("Failed to merge refs into branch:",Z)}finally{He(!1)}}}async function ki(){if(!(!t||gt)){Se(null),Ct(!0);try{const B=await Me("push_all_unpushed_branches",{repoPath:t});On(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Se({kind:"success",message:B.length>0?B.length===1?`Pushed ${B[0].branchName}`:`Pushed ${B.length} branches`:"Everything local is already pushed."})}catch(B){const X=B instanceof Error?B.message:String(B);Se({kind:"error",message:X}),console.error("Failed to push all branches:",X)}finally{Ct(!1)}}}async function Hi(){if(!(!t||gt)){Se(null),Ct(!0);try{const B=await Me("push_current_branch",{repoPath:t});On(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Se({kind:"success",message:`Pushed ${B.branchName}`})}catch(B){const X=B instanceof Error?B.message:String(B);Se({kind:"error",message:X}),console.error("Failed to push current branch:",X)}finally{Ct(!1)}}}async function di(B){var G;if(!t||gt)return;const X=Array.from(new Map(B.filter(D=>D.branchName&&D.targetSha).map(D=>[D.branchName,D])).values());if(X.length!==0){Se(null),Ct(!0);try{for(const D of X)await Me("push_branch",{repoPath:t,branchName:D.branchName,targetSha:D.targetSha});On(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Se({kind:"success",message:X.length===1?`Pushed ${X[0].branchName} through ${(G=X[0].targetSha)==null?void 0:G.slice(0,7)}`:`Pushed ${X.length} selected commit ranges`})}catch(D){const Z=D instanceof Error?D.message:String(D);Se({kind:"error",message:Z}),console.error("Failed to push selected commits:",Z)}finally{Ct(!1)}}}async function Co(B){var w;if(!t||It)return;const X=Array.from(new Set(B.branchNames.filter(C=>C&&C!==Y))),G=!!B.discardUncommittedChanges,D=(w=B.stashIndices)!=null?w:[],Z=Array.from(new Set(D)).sort((C,N)=>N-C);if(!(X.length===0&&!G&&Z.length===0)){Se(null),ot(!0);try{for(const L of Z)await Me("stash_drop",{repoPath:t,stashIndex:L});const C=X.length>0||G?await Me("delete_selected_elements",{repoPath:t,branchNames:X,discardUncommittedChanges:G}):{deletedBranches:[],discardedUncommittedChanges:!1};On(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1});const N=[];Z.length>0&&N.push(Z.length===1?`removed stash ${Z[0]+1}`:`removed ${Z.length} stashes`),C.discardedUncommittedChanges&&N.push("discarded local uncommitted changes"),C.deletedBranches.length>0&&N.push(C.deletedBranches.length===1?`deleted ${C.deletedBranches[0]}`:`deleted ${C.deletedBranches.length} branches`),Se({kind:"success",message:N.length>0?N.join(" and "):"Nothing to delete."})}catch(C){const N=C instanceof Error?C.message:String(C);Se({kind:"error",message:N}),console.error("Failed to delete selected elements:",N)}finally{ot(!1)}}}function Go(B){St(B),dt(X=>{var G;return{branch:B,seq:((G=X==null?void 0:X.seq)!=null?G:0)+1}})}function fi(B){B&&(Qe(B),ie(X=>X+1))}function M(B){B&&(pe(B),ie(X=>X+1))}_.useEffect(()=>{var G;const B=V!=null&&V.hasUncommittedChanges?"WORKING_TREE":(G=V==null?void 0:V.headSha)!=null?G:null;if(!B)return;const X=`${t!=null?t:"__no-repo__"}|${us}|${B}`;oo.current!==X&&(oo.current=X,Qe(B),ie(D=>D+1))},[V==null?void 0:V.hasUncommittedChanges,V==null?void 0:V.headSha,us,t]),_.useEffect(()=>{oo.current=null},[t]);const{enrichedBranches:U,enrichedBranchCommitPreviews:de,enrichedBranchUniqueAheadCounts:ke,enrichedDirectCommits:Ye}=_.useMemo(()=>{var ct,Cn,zn,$n,un;const B=q5(Mn,g,k,yt,sn,Y,(ct=V==null?void 0:V.hasUncommittedChanges)!=null?ct:!1);let X=B.branches,G=B.directCommits,D=B.branchCommitPreviews,Z=B.branchUniqueAheadCounts;if(!(V!=null&&V.hasUncommittedChanges))return{enrichedBranches:X,enrichedDirectCommits:G,enrichedBranchCommitPreviews:D,enrichedBranchUniqueAheadCounts:Z};const w=V.headSha||V.parentSha||null,C=(zn=(Cn=G[0])==null?void 0:Cn.fullSha)!=null?zn:null,N=(Ot,vt)=>!Ot||!vt?!1:Ot===vt||Ot.startsWith(vt)||vt.startsWith(Ot),L=[{name:Y,headSha:C!=null?C:"",isDefault:!0},...X.map(Ot=>({name:Ot.name,headSha:Ot.headSha,isDefault:!1}))],W=V.branchName?L.find(Ot=>Ot.name===V.branchName):void 0,J=w?L.filter(Ot=>N(Ot.headSha,w)):[],Ne=($n=W!=null?W:J.find(Ot=>Ot.isDefault))!=null?$n:J[0],xe=Ne&&!Ne.isDefault?X.find(Ot=>Ot.name===Ne.name):void 0,Le=(()=>{var vt;if(!w)return null;const Ot=G.find(Rt=>N(Rt.fullSha,w)||N(Rt.sha,w));if(Ot!=null&&Ot.date)return Ot.date;if(xe){const Rt=((vt=D[xe.name])!=null?vt:[]).find(In=>N(In.fullSha,w)||N(In.sha,w));if(Rt!=null&&Rt.date)return Rt.date}return null})(),qe=Le?new Date(Le).getTime():Number.NaN,tt=Date.now(),pt=Number.isFinite(qe)?Math.max(tt,qe+1):tt,_t=new Date(pt).toISOString(),ut={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:w,message:"Local uncommitted changes",author:"You",date:_t,kind:"uncommitted"};return xe?{enrichedBranches:X.map(vt=>vt.name===xe.name?{...vt,commitsAhead:vt.commitsAhead+1,unpushedCommits:vt.unpushedCommits+1,lastCommitDate:_t,headSha:"WORKING_TREE"}:vt),enrichedDirectCommits:G,enrichedBranchCommitPreviews:{...D,[xe.name]:[ut,...D[xe.name]||[]]},enrichedBranchUniqueAheadCounts:{...Z,[xe.name]:Math.max(0,(un=Object.prototype.hasOwnProperty.call(Z,xe.name)?Z[xe.name]:xe.commitsAhead)!=null?un:0)+1}}:{enrichedBranches:X,enrichedBranchCommitPreviews:{...D,[Y]:[ut,...D[Y]||[]]},enrichedBranchUniqueAheadCounts:{...Z},enrichedDirectCommits:G}},[g,yt,sn,V,Y,k,Mn]),Xe=_.useMemo(()=>{const B={...Ge};return B[Y]=null,B},[Ge,Y,U]),Pt=_.useMemo(()=>{var B;return(B=Nw(U,Y,Xe,Kt))!=null?B:hp(U,Y,de,Xe)},[U,Y,de,Xe,Kt]),$t=_.useMemo(()=>Mc({lanes:Pt,branches:U,mergeNodes:b,directCommits:Ye,unpushedDirectCommits:E,defaultBranch:Y,branchCommitPreviews:de,branchParentByName:Xe,branchUniqueAheadCounts:ke,manuallyOpenedClumps:Yo,manuallyClosedClumps:Vt,isDebugOpen:!1,gridSearchQuery:ne,gridFocusSha:Ue,checkedOutRef:V!=null?V:null,orientation:us}),[Pt,U,b,Ye,E,Y,de,Xe,ke,Yo,Vt,ne,Ue,(mo=V==null?void 0:V.headSha)!=null?mo:null,(Gs=V==null?void 0:V.branchName)!=null?Gs:null,us]),qt=_.useMemo(()=>{var B;return Ue&&(B=$t.clusterKeyByCommitId.get(Ue))!=null?B:null},[$t.clusterKeyByCommitId,Ue]),Qt=_.useMemo(()=>{if(!qt||Vt.has(qt))return Yo;const B=new Set(Yo);return B.add(qt),B},[Vt,Yo,qt]),on=_.useMemo(()=>{if(!qt)return Vt;const B=new Set(Vt);return B.delete(qt),B},[Vt,qt]),gn=_.useMemo(()=>Mc({lanes:Pt,branches:U,mergeNodes:b,directCommits:Ye,unpushedDirectCommits:E,defaultBranch:Y,branchCommitPreviews:de,branchParentByName:Xe,branchUniqueAheadCounts:ke,manuallyOpenedClumps:Qt,manuallyClosedClumps:on,isDebugOpen:!1,gridSearchQuery:ne,gridFocusSha:Ue,checkedOutRef:V!=null?V:null,orientation:us}),[Pt,U,b,Ye,E,Y,de,Xe,ke,Qt,on,ne,Ue,(Is=V==null?void 0:V.headSha)!=null?Is:null,(qs=V==null?void 0:V.branchName)!=null?qs:null,us]);_.useEffect(()=>{try{const B=window.localStorage.getItem(sx);if(B){const G=Number(B);Number.isFinite(G)&&Un(Math.min(lx,Math.max(rx,G)))}const X=window.localStorage.getItem(ox);X!=null&&jo(X==="true")}catch{}},[]),_.useEffect(()=>{vi.current=ds},[ds]),_.useEffect(()=>{const B=ti.current;B&&(B.style.width=Ls?"0px":`${ds}px`)},[ds,Ls]),_.useEffect(()=>{try{window.localStorage.setItem(ox,String(Ls))}catch{}},[Ls]);const mn=B=>{const X=Bn.current;if(!X)return;const G=X.startWidth+(B-X.startX);X.pendingWidth=Math.min(lx,Math.max(rx,G));const D=ti.current;D&&(D.style.width=`${X.pendingWidth}px`)},$s=(B,X)=>{const G=Bn.current;if(G&&!(X!=null&&G.pointerId!==X)){Bn.current=null,Rn({dragging:!1,lastEvent:B}),document.body.style.cursor="",document.body.style.userSelect="",Un(G.pendingWidth);try{window.localStorage.setItem(sx,String(G.pendingWidth))}catch{}}},Wt=B=>{B.button===0&&(B.preventDefault(),Rn({dragging:!0,lastEvent:"handle:pointerdown"}),console.debug("[sidebar-resize] pointerdown",{pointerId:B.pointerId,clientX:B.clientX,width:vi.current}),Bn.current={startX:B.clientX,startWidth:vi.current,pendingWidth:vi.current,pointerId:B.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",B.currentTarget.setPointerCapture(B.pointerId))},is=B=>{const X=Bn.current;!X||X.pointerId!==B.pointerId||(kn.lastEvent!=="move"&&console.debug("[sidebar-resize] pointermove",{clientX:B.clientX}),Rn(G=>G.dragging?{dragging:!0,lastEvent:"move"}:G),mn(B.clientX))},Ss=B=>{if(Bn.current){console.debug("[sidebar-resize] pointerup",{pointerId:B.pointerId});try{B.currentTarget.releasePointerCapture(B.pointerId)}catch{}$s("pointerup",B.pointerId)}},ys=B=>{if(Bn.current){console.debug("[sidebar-resize] pointercancel",{pointerId:B.pointerId});try{B.currentTarget.releasePointerCapture(B.pointerId)}catch{}$s("pointercancel",B.pointerId)}};return l.jsx("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:l.jsx("div",{className:"relative z-30 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:ti,className:"relative z-20 flex h-full min-h-0 flex-none overflow-visible",style:{width:Ls?64:ds},children:[l.jsx("button",{type:"button",className:"window-no-drag absolute right-2.5 left-22 top-2.25 z-[9999] inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent","aria-label":Ls?"Open sidebar":"Collapse sidebar",onClick:()=>jo(B=>!B),children:Ls?l.jsx(ww,{className:"h-4 w-4 shrink-0"}):l.jsx(bw,{className:"h-4 w-4 shrink-0"})}),l.jsx(Mk,{className:Ak("min-h-0 shrink-0 overflow-hidden pt-14 transition-[width,opacity] duration-300 ease-in-out","opacity-100"),style:{width:"100%"},collapsed:Ls,projects:Wo,activeProjectPath:t,onSelectProject:As,onAddProject:co,onRemoveProject:Fs,onReorderProjects:vo,onRevealProjectInFinder:zs,projectLoading:Dt||(p&&t?!((po=d[t])!=null&&po.loaded):!1),projectError:nn,checkedOutRef:V,showCommits:Lt,manuallyOpenedClumpsByProject:Te,manuallyClosedClumpsByProject:me,manuallyOpenedClumps:Qt,manuallyClosedClumps:on,setManuallyOpenedClumps:lo,setManuallyClosedClumps:Ts,gridLayoutModel:gn,onSelectCommit:fi,onSelectBranch:M}),Ls?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:Wt,onPointerMove:is,onPointerUp:Ss,onPointerCancel:ys,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"})]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-40 h-12"}),l.jsx(lS,{branches:U,mergeNodes:b,directCommits:Ye,unpushedDirectCommits:E,unpushedCommitShasByBranch:z,defaultBranch:Y,branchCommitPreviews:de,branchParentByName:Xe,branchUniqueAheadCounts:ke,gridSearchQuery:ne,gridSearchJumpToken:P,gridSearchJumpDirection:F,gridFocusSha:Ue,onGridSearchResultCountChange:be,onGridSearchResultIndexChange:$e,onGridSearchFocusChange:Qe,checkedOutRef:V,onCommitClick:Si,onMergeRefsIntoBranch:Ci,mergeInProgress:lt,onPushAllBranches:ki,onPushCurrentBranch:Hi,onPushCommitTargets:di,pushInProgress:gt,onDeleteSelection:Co,deleteInProgress:It,worktrees:ae,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:Wn,removeWorktreeInProgress:Ae,onSwitchToWorktree:Vn,onStashLocalChanges:ta,stashInProgress:vn,stashDisabled:!1,onCommitLocalChanges:Ii,commitInProgress:Gt,commitDisabled:!1,onStageAllChanges:Pi,stageInProgress:at,onCreateBranchFromNode:si,onCreateRootBranch:Nt,createBranchFromNodeInProgress:Yt,isDebugOpen:no,onDebugClose:()=>so(!1),onInteractionChange:cs,manuallyOpenedClumps:Qt,manuallyClosedClumps:on,setManuallyOpenedClumps:lo,setManuallyClosedClumps:Ts,layoutModel:gn,orientation:us,gridHudProps:wi})]}),Pe&&l.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl overflow-hidden ${nt?"animate-error-panel-out":"animate-error-panel-in"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[l.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),l.jsx("button",{onClick:Po,className:"text-muted-foreground hover:text-foreground transition-colors",children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[l.jsxs("button",{onClick:()=>Ze("active"),className:`text-xs font-medium transition-colors ${et==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[So.length," active"]}),l.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),l.jsxs("button",{onClick:()=>Ze("inactive"),className:`text-xs font-medium transition-colors ${et==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[ho.length," inactive"]})]}),l.jsx("div",{className:"overflow-y-auto max-h-64",children:(et==="active"?So:ho).map(B=>{const X=(wt==null?void 0:wt.name)===B.name,G=Io(B);return l.jsxs("button",{onClick:()=>Go(B),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:`text-sm font-medium truncate ${X?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:B.name}),l.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[G>0&&`${G} ahead`,G>0&&B.commitsBehind>0&&", ",B.commitsBehind>0&&`${B.commitsBehind} behind`]})]}),l.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},B.name)})})]})]})})})}var Ic=Ix(),Rk=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,Bk={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=Rk}var ls=Bk,Lk=`.icon-transitions-module__iconState___uqK9J {
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
}`,Ok={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=Lk}var ns=Ok,zk=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),$k=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Ik=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),Pk=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${ns.iconState} ${n?ns.hiddenScaled:ns.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${ns.iconState} ${n?ns.visibleScaled:ns.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Hk=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${ns.iconStateFast} ${i?ns.visibleScaled:u?ns.sending:ns.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${ns.iconStateFast} ${a?ns.visibleScaled:ns.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ns.iconStateFast} ${c?ns.visibleScaled:ns.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},Uk=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ns.iconFade} ${n?ns.visible:ns.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ns.iconFade} ${n?ns.hidden:ns.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),Vk=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ns.iconFadeFast} ${n?ns.hidden:ns.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${ns.iconFadeFast} ${n?ns.visible:ns.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),Yk=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),Wk=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),K5=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Fk=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),Xk=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Gk=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),qk=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),Kk=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Qk=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Zk=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Q5=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],pm=Q5.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),op="feedback-freeze-styles",_m="__agentation_freeze";function Jk(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[_m]||(t[_m]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[_m]}var hn=Jk();typeof window<"u"&&!hn.installed&&(hn.origSetTimeout=window.setTimeout.bind(window),hn.origSetInterval=window.setInterval.bind(window),hn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?hn.origSetTimeout(t,n):hn.origSetTimeout((...a)=>{hn.frozen?hn.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?hn.origSetInterval(t,n):hn.origSetInterval((...a)=>{hn.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>hn.origRAF(n=>{hn.frozen?hn.frozenRAFQueue.push(t):t(n)}),hn.installed=!0);var Ht=hn.origSetTimeout,e8=hn.origSetInterval,pl=hn.origRAF;function t8(t){return t?Q5.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function n8(){if(typeof document>"u"||hn.frozen)return;hn.frozen=!0,hn.frozenTimeoutQueue=[],hn.frozenRAFQueue=[];let t=document.getElementById(op);t||(t=document.createElement("style"),t.id=op),t.textContent=`
    *${pm},
    *${pm}::before,
    *${pm}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),hn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;t8(i)||(n.pause(),hn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function ux(){var i;if(typeof document>"u"||!hn.frozen)return;hn.frozen=!1;const t=hn.frozenTimeoutQueue;hn.frozenTimeoutQueue=[];for(const a of t)hn.origSetTimeout(()=>{if(hn.frozen){hn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=hn.frozenRAFQueue;hn.frozenRAFQueue=[];for(const a of n)hn.origRAF(c=>{if(hn.frozen){hn.frozenRAFQueue.push(a);return}a(c)});for(const a of hn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}hn.pausedAnimations=[],(i=document.getElementById(op))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function gm(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var Ld=_.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:y,style:g,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:S=!1,computedStyles:k},j){const[E,T]=_.useState(u),[z,O]=_.useState(!1),[R,q]=_.useState("initial"),[Y,K]=_.useState(!1),[V,ee]=_.useState(!1),ae=_.useRef(null),re=_.useRef(null),Ae=_.useRef(null),We=_.useRef(null);_.useEffect(()=>{b&&R!=="exit"&&q("exit")},[b,R]),_.useEffect(()=>{Ht(()=>{q("enter")},0);const _e=Ht(()=>{q("entered")},200),Te=Ht(()=>{const I=ae.current;I&&(gm(I),I.selectionStart=I.selectionEnd=I.value.length,I.scrollTop=I.scrollHeight)},50);return()=>{clearTimeout(_e),clearTimeout(Te),Ae.current&&clearTimeout(Ae.current),We.current&&clearTimeout(We.current)}},[]);const ne=_.useCallback(()=>{We.current&&clearTimeout(We.current),O(!0),We.current=Ht(()=>{O(!1),gm(ae.current)},250)},[]);_.useImperativeHandle(j,()=>({shake:ne}),[ne]);const pe=_.useCallback(()=>{q("exit"),Ae.current=Ht(()=>{p()},150)},[p]),P=_.useCallback(()=>{E.trim()&&h(E.trim())},[E,h]),ie=_.useCallback(_e=>{_e.stopPropagation(),!_e.nativeEvent.isComposing&&(_e.key==="Enter"&&!_e.shiftKey&&(_e.preventDefault(),P()),_e.key==="Escape"&&pe())},[P,pe]),F=[ls.popup,S?ls.light:"",R==="enter"?ls.enter:"",R==="entered"?ls.entered:"",R==="exit"?ls.exit:"",z?ls.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:re,className:F,"data-annotation-popup":!0,style:g,onClick:_e=>_e.stopPropagation(),children:[l.jsxs("div",{className:ls.header,children:[k&&Object.keys(k).length>0?l.jsxs("button",{className:ls.headerToggle,onClick:()=>{const _e=V;ee(!V),_e&&Ht(()=>gm(ae.current),0)},type:"button",children:[l.jsx("svg",{className:`${ls.chevron} ${V?ls.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:ls.element,children:n})]}):l.jsx("span",{className:ls.element,children:n}),i&&l.jsx("span",{className:ls.timestamp,children:i})]}),k&&Object.keys(k).length>0&&l.jsx("div",{className:`${ls.stylesWrapper} ${V?ls.expanded:""}`,children:l.jsx("div",{className:ls.stylesInner,children:l.jsx("div",{className:ls.stylesBlock,children:Object.entries(k).map(([_e,Te])=>l.jsxs("div",{className:ls.styleLine,children:[l.jsx("span",{className:ls.styleProperty,children:_e.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:ls.styleValue,children:Te}),";"]},_e))})})}),a&&l.jsxs("div",{className:ls.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:ae,className:ls.textarea,style:{borderColor:Y?x:void 0},placeholder:c,value:E,onChange:_e=>T(_e.target.value),onFocus:()=>K(!0),onBlur:()=>K(!1),rows:2,onKeyDown:ie}),l.jsxs("div",{className:ls.actions,children:[y&&l.jsx("div",{className:ls.deleteWrapper,children:l.jsx("button",{className:ls.deleteButton,onClick:y,type:"button",children:l.jsx(Kk,{size:22})})}),l.jsx("button",{className:ls.cancel,onClick:pe,children:"Cancel"}),l.jsx("button",{className:ls.submit,style:{backgroundColor:x,opacity:E.trim()?1:.4},onClick:P,disabled:!E.trim(),children:d})]})]})}),s8=({content:t,children:n,...i})=>{const[a,c]=_.useState(!1),[u,d]=_.useState(!1),[h,p]=_.useState({top:0,right:0}),y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=()=>{if(y.current){const j=y.current.getBoundingClientRect();p({top:j.top+j.height/2,right:window.innerWidth-j.left+8})}},S=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),g.current=Ht(()=>{c(!0)},500)},k=()=>{g.current&&(clearTimeout(g.current),g.current=null),c(!1),x.current=Ht(()=>{d(!1)},150)};return _.useEffect(()=>()=>{g.current&&clearTimeout(g.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:y,onMouseEnter:S,onMouseLeave:k,...i,children:n}),u&&Ic.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},o8=`.styles-module__tooltip___mcXL2 {
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
}`,i8={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=o8}var dx=i8,Er=({content:t})=>l.jsx(s8,{className:dx.tooltip,content:t,children:l.jsx(Ik,{className:dx.tooltipIcon})}),bt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Z5=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...bt.navigation},{type:"header",label:"Header",...bt.header},{type:"hero",label:"Hero",...bt.hero},{type:"section",label:"Section",...bt.section},{type:"sidebar",label:"Sidebar",...bt.sidebar},{type:"footer",label:"Footer",...bt.footer},{type:"modal",label:"Modal",...bt.modal},{type:"banner",label:"Banner",...bt.banner},{type:"drawer",label:"Drawer",...bt.drawer},{type:"popover",label:"Popover",...bt.popover},{type:"divider",label:"Divider",...bt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...bt.card},{type:"text",label:"Text",...bt.text},{type:"image",label:"Image",...bt.image},{type:"video",label:"Video",...bt.video},{type:"table",label:"Table",...bt.table},{type:"grid",label:"Grid",...bt.grid},{type:"list",label:"List",...bt.list},{type:"chart",label:"Chart",...bt.chart},{type:"codeBlock",label:"Code Block",...bt.codeBlock},{type:"map",label:"Map",...bt.map},{type:"timeline",label:"Timeline",...bt.timeline},{type:"calendar",label:"Calendar",...bt.calendar},{type:"accordion",label:"Accordion",...bt.accordion},{type:"carousel",label:"Carousel",...bt.carousel},{type:"logo",label:"Logo",...bt.logo},{type:"faq",label:"FAQ",...bt.faq},{type:"gallery",label:"Gallery",...bt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...bt.button},{type:"input",label:"Input",...bt.input},{type:"search",label:"Search",...bt.search},{type:"form",label:"Form",...bt.form},{type:"tabs",label:"Tabs",...bt.tabs},{type:"dropdown",label:"Dropdown",...bt.dropdown},{type:"toggle",label:"Toggle",...bt.toggle},{type:"stepper",label:"Stepper",...bt.stepper},{type:"rating",label:"Rating",...bt.rating},{type:"fileUpload",label:"File Upload",...bt.fileUpload},{type:"checkbox",label:"Checkbox",...bt.checkbox},{type:"radio",label:"Radio",...bt.radio},{type:"slider",label:"Slider",...bt.slider},{type:"datePicker",label:"Date Picker",...bt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...bt.avatar},{type:"badge",label:"Badge",...bt.badge},{type:"tag",label:"Tag",...bt.tag},{type:"breadcrumb",label:"Breadcrumb",...bt.breadcrumb},{type:"pagination",label:"Pagination",...bt.pagination},{type:"progress",label:"Progress",...bt.progress},{type:"alert",label:"Alert",...bt.alert},{type:"toast",label:"Toast",...bt.toast},{type:"notification",label:"Notification",...bt.notification},{type:"tooltip",label:"Tooltip",...bt.tooltip},{type:"stat",label:"Stat",...bt.stat},{type:"skeleton",label:"Skeleton",...bt.skeleton},{type:"chip",label:"Chip",...bt.chip},{type:"icon",label:"Icon",...bt.icon},{type:"spinner",label:"Spinner",...bt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...bt.pricing},{type:"testimonial",label:"Testimonial",...bt.testimonial},{type:"cta",label:"CTA",...bt.cta},{type:"productCard",label:"Product Card",...bt.productCard},{type:"profile",label:"Profile",...bt.profile},{type:"feature",label:"Feature",...bt.feature},{type:"team",label:"Team",...bt.team},{type:"login",label:"Login",...bt.login},{type:"contact",label:"Contact",...bt.contact}]}],Qi={};for(const t of Z5)for(const n of t.items)Qi[n.type]=n;function Ve({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Gn({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function ei({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function a8({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx(Gn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(Ve,{w:t*.06}),l.jsx(Ve,{w:t*.07}),l.jsx(Ve,{w:t*.05}),l.jsx(Ve,{w:t*.06})]}),l.jsx(Gn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function r8({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Ve,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Ve,{w:t*.6}),l.jsx(Ve,{w:t*.4}),l.jsx(Gn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function l8({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Ve,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Gn,{w:10,h:10,radius:2}),l.jsx(Ve,{w:t*(.4+c*17%30/100)})]},c))]})}function c8({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ve,{w:"60%",h:3,strong:!0}),l.jsx(Ve,{w:"80%",h:2}),l.jsx(Ve,{w:"70%",h:2}),l.jsx(Ve,{w:"60%",h:2})]},c))})}function u8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ve,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Ve,{w:"90%"}),l.jsx(Ve,{w:"70%"}),l.jsx(Ve,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(Gn,{w:70,h:26,radius:4}),l.jsx(Gn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function d8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ve,{w:"70%",h:4,strong:!0}),l.jsx(Ve,{w:"95%",h:2}),l.jsx(Ve,{w:"85%",h:2}),l.jsx(Ve,{w:"50%",h:2})]})]})}function f8({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Ve,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Ve,{w:`${70+u*13%25}%`,h:2},u))]})}function h8({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function m8({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Ve,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Ve,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function p8({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(ei,{size:8}),l.jsx(Ve,{w:`${55+c*17%35}%`,h:2})]},c))})}function _8({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Ve,{w:Math.max(20,t*.5),h:3,strong:!0})})}function g8({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Ve,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Ve,{w:"40%",h:2})})]})}function y8({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ve,{w:60+c*17%30,h:2}),l.jsx(Gn,{w:"100%",h:28,radius:4})]},c)),l.jsx(Gn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function x8({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Ve,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Ve,{w:"80%",h:2}),l.jsx(Ve,{w:"65%",h:2}),l.jsx(Ve,{w:"75%",h:2})]})]})}function b8({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function v8({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Ve,{w:Math.max(16,t*.5),h:2,strong:!0})})}function w8({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Ve,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Ve,{w:t*.35})]})}function S8({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(Ve,{w:t*.3,h:4,strong:!0}),l.jsx(Ve,{w:t*.7}),l.jsx(Ve,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx(Gn,{w:"33%",h:"100%",radius:4}),l.jsx(Gn,{w:"33%",h:"100%",radius:4}),l.jsx(Gn,{w:"33%",h:"100%",radius:4})]})]})}function C8({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(Gn,{w:"100%",h:"100%",radius:4},u))})}function k8({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Ve,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Ve,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function j8({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function M8({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(ei,{size:Math.min(14,n*.4)}),l.jsx(Ve,{w:"50%",h:2})]})}function E8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(ei,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ve,{w:"60%",h:3,strong:!0}),l.jsx(Ve,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function T8({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function A8({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(Gn,{w:a,h:`${d}%`,radius:2},u)})})}function N8({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(Gn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function D8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Ve,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function R8({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Ve,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function B8({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(Gn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function L8({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function O8({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Ve,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function z8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Gn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(ei,{size:5}),l.jsx(ei,{size:5}),l.jsx(ei,{size:5})]})]})}function $8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Ve,{w:t*.4,h:3,strong:!0}),l.jsx(Ve,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(ei,{size:5}),l.jsx(Ve,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(Gn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function I8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ve,{w:"90%",h:2}),l.jsx(Ve,{w:"75%",h:2}),l.jsx(Ve,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(ei,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Ve,{w:60,h:3,strong:!0}),l.jsx(Ve,{w:40,h:2})]})]})]})}function P8({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Ve,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Ve,{w:t*.35}),l.jsx(Gn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function H8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ve,{w:"40%",h:3,strong:!0}),l.jsx(Ve,{w:"70%",h:2})]})]})}function U8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Ve,{w:t*.4,h:3,strong:!0}),l.jsx(Gn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function V8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Ve,{w:t*.5,h:2}),l.jsx(Ve,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Ve,{w:t*.3,h:2})]})}function Y8({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function W8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Ve,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function F8({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function X8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function G8({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(ei,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ve,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Ve,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function q8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Ve,{w:t*.4,h:2}),l.jsx(Ve,{w:t*.25,h:2})]})}function K8({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(ei,{size:6}),l.jsx(ei,{size:6}),l.jsx(ei,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Ve,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function Q8({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Ve,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Ve,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function Z8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(ei,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ve,{w:"50%",h:3,strong:!0}),l.jsx(Ve,{w:"75%",h:2})]}),l.jsx(Ve,{w:30,h:2})]})}function J8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ve,{w:"65%",h:4,strong:!0}),l.jsx(Ve,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ve,{w:"30%",h:5,strong:!0}),l.jsx(Gn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function ej({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(ei,{size:i}),l.jsx(Ve,{w:t*.45,h:4,strong:!0}),l.jsx(Ve,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ve,{w:20,h:3,strong:!0}),l.jsx(Ve,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ve,{w:20,h:3,strong:!0}),l.jsx(Ve,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ve,{w:20,h:3,strong:!0}),l.jsx(Ve,{w:28,h:2})]})]})]})}function tj({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Ve,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Ve,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function nj({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ve,{w:"70%",h:3,strong:!0}),l.jsx(Ve,{w:"90%",h:2}),l.jsx(Ve,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function sj({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx(Gn,{w:i,h:i,radius:i*.25}),l.jsx(Ve,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function oj({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Ve,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function ij({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function aj({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function rj({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function lj({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function cj({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Ve,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Ve,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function uj({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function dj({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Ve,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function fj({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function hj({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function mj({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx(Gn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ve,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Ve,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function pj({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Ve,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(ei,{size:a}),l.jsx(Ve,{w:t*.12,h:3,strong:!0}),l.jsx(Ve,{w:t*.08,h:2})]},u))})]})}function _j({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(Ve,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Ve,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ve,{w:Math.min(60,t*.2),h:2}),l.jsx(Gn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(Gn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Ve,{w:t*.4,h:2})]})}function gj({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(Ve,{w:t*.4,h:4,strong:!0}),l.jsx(Ve,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ve,{w:50,h:2}),l.jsx(Gn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ve,{w:40,h:2}),l.jsx(Gn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ve,{w:50,h:2}),l.jsx(Gn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Ve,{w:60,h:2}),l.jsx(Gn,{w:"100%",h:"100%",radius:4})]}),l.jsx(Gn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var yj={navigation:a8,hero:r8,sidebar:l8,footer:c8,modal:u8,card:d8,text:f8,image:h8,table:m8,list:p8,button:_8,input:g8,form:y8,tabs:x8,avatar:b8,badge:v8,header:w8,section:S8,grid:C8,dropdown:k8,toggle:j8,search:M8,toast:E8,progress:T8,chart:A8,video:N8,tooltip:D8,breadcrumb:R8,pagination:B8,divider:L8,accordion:O8,carousel:z8,pricing:$8,testimonial:I8,cta:P8,alert:H8,banner:U8,stat:V8,stepper:Y8,tag:W8,rating:F8,map:X8,timeline:G8,fileUpload:q8,codeBlock:K8,calendar:Q8,notification:Z8,productCard:J8,profile:ej,drawer:tj,popover:nj,logo:sj,faq:oj,gallery:ij,checkbox:aj,radio:rj,slider:lj,datePicker:cj,skeleton:uj,chip:dj,icon:fj,spinner:hj,feature:mj,team:pj,login:_j,contact:gj};function xj({type:t,width:n,height:i,text:a}){const c=yj[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var bj=`svg[fill=none] {
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
}`,vj={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=bj}var Oe=vj,ll=24,td=5;function fx(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,y=t.x+t.width/2,g=t.y,x=t.y+t.height,b=t.y+t.height/2,S=!a,k=S?[h,p,y]:[...a.left?[h]:[],...a.right?[p]:[]],j=S?[g,x,b]:[...a.top?[g]:[],...a.bottom?[x]:[]],E=[];for(const re of n)i.has(re.id)||E.push(re);c&&E.push(...c);for(const re of E){const Ae=re.x,We=re.x+re.width,ne=re.x+re.width/2,pe=re.y,P=re.y+re.height,ie=re.y+re.height/2;for(const F of k)for(const _e of[Ae,We,ne]){const Te=_e-F;Math.abs(Te)<td&&Math.abs(Te)<Math.abs(u)&&(u=Te)}for(const F of j)for(const _e of[pe,P,ie]){const Te=_e-F;Math.abs(Te)<td&&Math.abs(Te)<Math.abs(d)&&(d=Te)}}const T=Math.abs(u)<td?u:0,z=Math.abs(d)<td?d:0,O=[],R=new Set,q=h+T,Y=p+T,K=y+T,V=g+z,ee=x+z,ae=b+z;for(const re of E){const Ae=re.x,We=re.x+re.width,ne=re.x+re.width/2,pe=re.y,P=re.y+re.height,ie=re.y+re.height/2;for(const F of[Ae,ne,We])for(const _e of[q,K,Y])if(Math.abs(_e-F)<.5){const Te=`x:${Math.round(F)}`;R.has(Te)||(R.add(Te),O.push({axis:"x",pos:F}))}for(const F of[pe,ie,P])for(const _e of[V,ae,ee])if(Math.abs(_e-F)<.5){const Te=`y:${Math.round(F)}`;R.has(Te)||(R.add(Te),O.push({axis:"y",pos:F}))}}return{dx:T,dy:z,guides:O}}function hx(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function wj({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:y,onSelectionChange:g,deselectSignal:x,onDragMove:b,onDragEnd:S,clearSignal:k,wireframe:j}){const[E,T]=_.useState(new Set),[z,O]=_.useState(null),[R,q]=_.useState(null),[Y,K]=_.useState(null),[V,ee]=_.useState([]),[ae,re]=_.useState(null),[Ae,We]=_.useState(!1),ne=_.useRef(!1),[pe,P]=_.useState(new Set),ie=_.useRef(new Map),F=_.useRef(null),_e=_.useRef(null),Te=_.useRef(t);Te.current=t;const I=_.useRef(g);I.current=g;const me=_.useRef(b);me.current=b;const se=_.useRef(S);se.current=S;const he=_.useRef(x);_.useEffect(()=>{x!==he.current&&(he.current=x,T(new Set))},[x]);const be=_.useRef(k);_.useEffect(()=>{if(k!==void 0&&k!==be.current){be.current=k;const ce=new Set(Te.current.map(nt=>nt.id));ce.size>0&&(P(ce),T(new Set),_e.current=null,Ht(()=>{n([]),P(new Set)},180))}},[k,n]),_.useEffect(()=>{const ce=nt=>{const st=nt.target;if(!(st.tagName==="INPUT"||st.tagName==="TEXTAREA"||st.isContentEditable)){if((nt.key==="Backspace"||nt.key==="Delete")&&E.size>0){nt.preventDefault();const Ze=new Set(E);P(Ze),T(new Set),Ht(()=>{n(Te.current.filter(ft=>!Ze.has(ft.id))),P(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(nt.key)&&E.size>0){nt.preventDefault();const Ze=nt.shiftKey?20:1,ft=nt.key==="ArrowLeft"?-Ze:nt.key==="ArrowRight"?Ze:0,dt=nt.key==="ArrowUp"?-Ze:nt.key==="ArrowDown"?Ze:0;n(t.map(wt=>E.has(wt.id)?{...wt,x:Math.max(0,wt.x+ft),y:Math.max(0,wt.y+dt)}:wt));return}if(nt.key==="Escape"){i?a(null):E.size>0&&T(new Set);return}}};return document.addEventListener("keydown",ce),()=>document.removeEventListener("keydown",ce)},[E,i,t,n,a]);const Re=_.useCallback(ce=>{if(ce.button!==0||p||ce.target.closest(`.${Oe.placement}`))return;ce.preventDefault(),ce.stopPropagation();const st=window.scrollY,et=ce.clientX,Ze=ce.clientY;if(i){_e.current="place",d==null||d(!0);let ft=!1,dt=et,wt=Ze;const St=it=>{dt=it.clientX,wt=it.clientY;const H=Math.abs(dt-et),te=Math.abs(wt-Ze);if((H>5||te>5)&&(ft=!0),ft){const we=Math.min(et,dt),je=Math.min(Ze,wt),ue=Math.abs(dt-et),Ee=Math.abs(wt-Ze);O({x:we,y:je,w:ue,h:Ee}),K({x:it.clientX+12,y:it.clientY+12,text:`${Math.round(ue)} × ${Math.round(Ee)}`})}},Ut=it=>{window.removeEventListener("mousemove",St),window.removeEventListener("mouseup",Ut),O(null),K(null),_e.current=null,d==null||d(!1);const H=bt[i];let te,we,je,ue;ft?(te=Math.min(et,dt),we=Math.min(Ze,wt)+st,je=Math.max(ll,Math.abs(dt-et)),ue=Math.max(ll,Math.abs(wt-Ze))):(je=H.width,ue=H.height,te=et-je/2,we=Ze+st-ue/2),te=Math.max(0,te),we=Math.max(0,we);const Ee={id:hx(),type:i,x:te,y:we,width:je,height:ue,scrollY:st,timestamp:Date.now()},le=[...t,Ee];n(le),T(new Set([Ee.id])),a(null)};window.addEventListener("mousemove",St),window.addEventListener("mouseup",Ut)}else{ce.shiftKey||T(new Set),_e.current="select";let ft=!1;const dt=St=>{const Ut=Math.abs(St.clientX-et),it=Math.abs(St.clientY-Ze);if((Ut>4||it>4)&&(ft=!0),ft){const H=Math.min(et,St.clientX),te=Math.min(Ze,St.clientY);q({x:H,y:te,w:Math.abs(St.clientX-et),h:Math.abs(St.clientY-Ze)})}},wt=St=>{if(window.removeEventListener("mousemove",dt),window.removeEventListener("mouseup",wt),_e.current=null,ft){const Ut=Math.min(et,St.clientX),it=Math.min(Ze,St.clientY)+st,H=Math.abs(St.clientX-et),te=Math.abs(St.clientY-Ze),we=new Set(ce.shiftKey?E:new Set);for(const je of t)je.y-st,je.x+je.width>Ut&&je.x<Ut+H&&je.y+je.height>it&&je.y<it+te&&we.add(je.id);T(we)}q(null)};window.addEventListener("mousemove",dt),window.addEventListener("mouseup",wt)}},[i,p,t,n,E]),$e=_.useCallback((ce,nt)=>{var Ee;if(ce.button!==0)return;const st=ce.target;if(st.closest(`.${Oe.handle}`)||st.closest(`.${Oe.deleteButton}`))return;ce.preventDefault(),ce.stopPropagation();let et;ce.shiftKey?(et=new Set(E),et.has(nt)?et.delete(nt):et.add(nt)):E.has(nt)?et=new Set(E):et=new Set([nt]),T(et),(et.size!==E.size||[...et].some(le=>!E.has(le)))&&((Ee=I.current)==null||Ee.call(I,et,ce.shiftKey));const ft=ce.clientX,dt=ce.clientY,wt=new Map;for(const le of t)et.has(le.id)&&wt.set(le.id,{x:le.x,y:le.y});_e.current="move",d==null||d(!0);let St=!1,Ut=!1,it=t,H=0,te=0;const we=new Map;for(const le of t)wt.has(le.id)&&we.set(le.id,{w:le.width,h:le.height});const je=le=>{var mt;const Se=le.clientX-ft,Je=le.clientY-dt;if((Math.abs(Se)>2||Math.abs(Je)>2)&&(St=!0),!St)return;if(le.altKey&&!Ut){Ut=!0;const Ge=[];for(const xt of t)wt.has(xt.id)&&Ge.push({...xt,id:hx(),timestamp:Date.now()});it=[...t,...Ge]}let ht=1/0,lt=1/0,He=-1/0,gt=-1/0;for(const[Ge,xt]of wt){const Kt=we.get(Ge);Kt&&(ht=Math.min(ht,xt.x+Se),lt=Math.min(lt,xt.y+Je),He=Math.max(He,xt.x+Se+Kt.w),gt=Math.max(gt,xt.y+Je+Kt.h))}const Ct={x:ht,y:lt,width:He-ht,height:gt-lt},{dx:It,dy:ot,guides:kt}=fx(Ct,it,new Set(wt.keys()),void 0,y);ee(kt);const Bt=Se+It,yt=Je+ot;H=Bt,te=yt,n(it.map(Ge=>{const xt=wt.get(Ge.id);return xt?{...Ge,x:Math.max(0,xt.x+Bt),y:Math.max(0,xt.y+yt)}:Ge})),(mt=me.current)==null||mt.call(me,Bt,yt)},ue=()=>{var le;window.removeEventListener("mousemove",je),window.removeEventListener("mouseup",ue),_e.current=null,d==null||d(!1),ee([]),(le=se.current)==null||le.call(se,H,te,St)};window.addEventListener("mousemove",je),window.addEventListener("mouseup",ue)},[E,t,n,d]),Ue=_.useCallback((ce,nt,st)=>{ce.preventDefault(),ce.stopPropagation();const et=t.find(we=>we.id===nt);if(!et)return;T(new Set([nt])),_e.current="resize",d==null||d(!0);const Ze=ce.clientX,ft=ce.clientY,dt=et.width,wt=et.height,St=et.x,Ut=et.y,it={left:st.includes("w"),right:st.includes("e"),top:st.includes("n"),bottom:st.includes("s")},H=we=>{const je=we.clientX-Ze,ue=we.clientY-ft;let Ee=dt,le=wt,Se=St,Je=Ut;st.includes("e")&&(Ee=Math.max(ll,dt+je)),st.includes("w")&&(Ee=Math.max(ll,dt-je),Se=St+dt-Ee),st.includes("s")&&(le=Math.max(ll,wt+ue)),st.includes("n")&&(le=Math.max(ll,wt-ue),Je=Ut+wt-le);const ht={x:Se,y:Je,width:Ee,height:le},{dx:lt,dy:He,guides:gt}=fx(ht,Te.current,new Set([nt]),it,y);ee(gt),lt!==0&&(it.right?Ee+=lt:it.left&&(Se+=lt,Ee-=lt)),He!==0&&(it.bottom?le+=He:it.top&&(Je+=He,le-=He)),n(Te.current.map(Ct=>Ct.id===nt?{...Ct,x:Se,y:Je,width:Ee,height:le}:Ct)),K({x:we.clientX+12,y:we.clientY+12,text:`${Math.round(Ee)} × ${Math.round(le)}`})},te=()=>{window.removeEventListener("mousemove",H),window.removeEventListener("mouseup",te),K(null),_e.current=null,d==null||d(!1),ee([])};window.addEventListener("mousemove",H),window.addEventListener("mouseup",te)},[t,n,d]),Qe=_.useCallback(ce=>{_e.current=null,P(nt=>{const st=new Set(nt);return st.add(ce),st}),T(nt=>{const st=new Set(nt);return st.delete(ce),st}),Ht(()=>{n(Te.current.filter(nt=>nt.id!==ce)),P(nt=>{const st=new Set(nt);return st.delete(ce),st})},180)},[n]),Lt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Dt=_.useCallback(ce=>{const nt=t.find(st=>st.id===ce);nt&&(ne.current=!!nt.text,re(ce),We(!1))},[t]),Fe=_.useCallback(()=>{ae&&(We(!0),Ht(()=>{re(null),We(!1)},150))},[ae]);_.useEffect(()=>{u&&ae&&Fe()},[u]);const rt=_.useCallback(ce=>{ae&&(n(t.map(nt=>nt.id===ae?{...nt,text:ce.trim()||void 0}:nt)),Fe())},[ae,t,n,Fe]),Tt=typeof window<"u"?window.scrollY:0,nn=["nw","ne","se","sw"],Xt=j?"#f97316":"#3c82f7",Pe=[{dir:"n",cls:Oe.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:Xt})})},{dir:"e",cls:Oe.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:Xt})})},{dir:"s",cls:Oe.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:Xt})})},{dir:"w",cls:Oe.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:Xt})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:F,className:`${Oe.overlay} ${c?"":Oe.light} ${i?Oe.placing:""} ${p?Oe.passthrough:""} ${u?Oe.overlayExiting:""} ${j?Oe.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Re,children:t.map(ce=>{var Ze;const nt=E.has(ce.id),st=((Ze=Qi[ce.type])==null?void 0:Ze.label)||ce.type,et=ce.y-Tt;return l.jsxs("div",{"data-design-placement":ce.id,className:`${Oe.placement} ${nt?Oe.selected:""} ${pe.has(ce.id)?Oe.exiting:""}`,style:{left:ce.x,top:et,width:ce.width,height:ce.height,position:"fixed"},onMouseDown:ft=>$e(ft,ce.id),onDoubleClick:()=>Dt(ce.id),children:[l.jsx("span",{className:Oe.placementLabel,children:st}),l.jsx("span",{className:`${Oe.placementAnnotation} ${ce.text?Oe.annotationVisible:""}`,children:(ce.text&&ie.current.set(ce.id,ce.text),ce.text||ie.current.get(ce.id)||"")}),l.jsx("div",{className:Oe.placementContent,children:l.jsx(xj,{type:ce.type,width:ce.width,height:ce.height,text:ce.text})}),l.jsx("div",{className:Oe.deleteButton,onMouseDown:ft=>ft.stopPropagation(),onClick:()=>Qe(ce.id),children:"✕"}),nn.map(ft=>l.jsx("div",{className:`${Oe.handle} ${Oe[`handle${ft.charAt(0).toUpperCase()}${ft.slice(1)}`]}`,onMouseDown:dt=>Ue(dt,ce.id,ft)},ft)),Pe.map(({dir:ft,cls:dt,arrow:wt})=>l.jsx("div",{className:`${Oe.edgeHandle} ${dt}`,onMouseDown:St=>Ue(St,ce.id,ft),children:wt},ft))]},ce.id)})}),ae&&(()=>{var Ut,it;const ce=t.find(H=>H.id===ae);if(!ce)return null;const nt=ce.y-Tt,st=ce.x+ce.width/2,et=nt-8,Ze=nt+ce.height+8,ft=et>200,dt=Ze<window.innerHeight-100,wt=Math.max(160,Math.min(window.innerWidth-160,st));let St;return ft?St={left:wt,bottom:window.innerHeight-et}:dt?St={left:wt,top:Ze}:St={left:wt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(Ld,{element:((Ut=Qi[ce.type])==null?void 0:Ut.label)||ce.type,placeholder:Lt[ce.type]||"Label or content text",initialValue:(it=ce.text)!=null?it:"",submitLabel:ne.current?"Save":"Set",onSubmit:rt,onCancel:Fe,onDelete:ne.current?()=>{rt("")}:void 0,isExiting:Ae,lightMode:!c,style:St})})(),z&&l.jsx("div",{className:Oe.drawBox,style:{left:z.x,top:z.y,width:z.w,height:z.h},"data-feedback-toolbar":!0}),R&&l.jsx("div",{className:Oe.selectBox,style:{left:R.x,top:R.y,width:R.w,height:R.h},"data-feedback-toolbar":!0}),Y&&l.jsx("div",{className:Oe.sizeIndicator,style:{left:Y.x,top:Y.y},"data-feedback-toolbar":!0,children:Y.text}),V.map((ce,nt)=>l.jsx("div",{className:Oe.guideLine,style:ce.axis==="x"?{position:"fixed",left:ce.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:ce.pos-Tt,right:0,height:1},"data-feedback-toolbar":!0},`${ce.axis}-${ce.pos}-${nt}`))]})}function Sj(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?Oe.fadeTop:""} ${i?Oe.fadeBottom:""}`}var $="currentColor",Be="0.5";function Cj({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:$,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:$,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:$,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:$,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:$,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:$,strokeWidth:Be})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:$,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:$,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:$,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:$,strokeWidth:Be})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:$,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:$,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:$,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:$,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:$,strokeWidth:Be,fill:$,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:Be})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:$,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:$,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:$,strokeWidth:Be})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:$,strokeWidth:Be,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:$,strokeWidth:Be,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:$,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:$,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:$,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:$,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:$,strokeWidth:Be}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:$,strokeWidth:Be,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:$,strokeWidth:Be,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:$,strokeWidth:Be})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:$,strokeWidth:Be})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:$,strokeWidth:Be,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:$,strokeWidth:Be,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:$,strokeWidth:Be}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:$,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:$,strokeWidth:Be}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:$,strokeWidth:Be}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:$,strokeWidth:Be})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:$,strokeWidth:Be,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:$,strokeWidth:Be,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:$,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:$,opacity:".15",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:Be})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:$,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:$,strokeWidth:Be,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:$,strokeWidth:Be})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:$,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:$,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:$,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:$,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:$,strokeWidth:Be,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:$,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:$,strokeWidth:Be})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:$,strokeWidth:Be,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:$,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:$,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:$,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:$,strokeWidth:Be})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:$,opacity:".2",stroke:$,strokeWidth:Be}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:$,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:$,strokeWidth:Be}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:$,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:$,strokeWidth:Be})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:$,strokeWidth:Be,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:$,strokeWidth:Be,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:$,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:$,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:$,strokeWidth:Be,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:$,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:$,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:$,opacity:".15",stroke:$,strokeWidth:Be})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:$,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:$,opacity:".2",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:$,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:Be,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:$,strokeWidth:Be,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:$,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:$,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:$,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:$,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:$,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:$,strokeWidth:Be,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:$,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:$,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:$,strokeWidth:Be})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:$,strokeWidth:Be,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:$,strokeWidth:Be})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:$,strokeWidth:Be}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:$,strokeWidth:Be,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:$,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:$,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:$,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:$,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Be})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:$,strokeWidth:Be,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:$,strokeWidth:Be}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:$,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:$,strokeWidth:Be})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:$,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:$,strokeWidth:Be,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:$,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:$,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:$,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:$,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:$,opacity:".08",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:$,strokeWidth:Be,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:$,strokeWidth:Be,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:$,strokeWidth:Be,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:$,strokeWidth:Be,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:$,strokeWidth:Be,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:$,strokeWidth:Be,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:$,strokeWidth:Be,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:$,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:$,strokeWidth:Be,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:$,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:$,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:$,opacity:".2"})]});default:return null}}function kj({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${Oe.placeScroll} ${c||""}`,children:Z5.map(d=>l.jsxs("div",{className:Oe.paletteSection,children:[l.jsx("div",{className:Oe.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${Oe.paletteItem} ${t===h.type?Oe.active:""} ${u?Oe.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:Oe.paletteItemIcon,children:l.jsx(Cj,{type:h.type})}),l.jsx("span",{className:Oe.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function jj({value:t,suffix:n}){const[i,a]=_.useState(null),[c,u]=_.useState(n),[d,h]=_.useState("up"),p=_.useRef(t),y=_.useRef(n),g=_.useRef(),x=i!==null&&c!==n;return _.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,y.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(y.current),p.current=t,y.current=n,clearTimeout(g.current),g.current=Ht(()=>a(null),250)}else y.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):x?l.jsxs("span",{className:Oe.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${Oe.rollingNum} ${d==="up"?Oe.exitUp:Oe.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${Oe.rollingNum} ${d==="up"?Oe.enterUp:Oe.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:Oe.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${Oe.rollingNum} ${d==="up"?Oe.exitUp:Oe.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${Oe.rollingNum} ${d==="up"?Oe.enterUp:Oe.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function Mj({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:y,blankCanvas:g,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:S,Tooltip:k}){const[j,E]=_.useState(!1),[T,z]=_.useState("exit"),[O,R]=_.useState(!1),[q,Y]=_.useState(!0),K=_.useRef(0),V=_.useRef(""),ee=_.useRef(0),ae=_.useRef(),re=_.useRef(null),[Ae,We]=_.useState("");_.useEffect(()=>(u?(E(!0),clearTimeout(ae.current),cancelAnimationFrame(ee.current),ee.current=pl(()=>{ee.current=pl(()=>{z("enter")})})):(cancelAnimationFrame(ee.current),z("exit"),clearTimeout(ae.current),ae.current=Ht(()=>{E(!1),d==null||d()},200)),()=>cancelAnimationFrame(ee.current)),[u]);const ne=h>0||a>0,pe=h+a;return pe>0&&(K.current=pe,V.current=g?pe===1?"Component":"Components":pe===1?"Change":"Changes"),_.useEffect(()=>{if(ne)O?Y(!1):(Y(!0),R(!0),pl(()=>{pl(()=>{Y(!1)})}));else{Y(!0);const P=Ht(()=>R(!1),300);return()=>clearTimeout(P)}},[ne]),_.useEffect(()=>{if(!j)return;const P=re.current;if(!P)return;const ie=()=>We(Sj(P));ie(),P.addEventListener("scroll",ie,{passive:!0});const F=new ResizeObserver(ie);return F.observe(P),()=>{P.removeEventListener("scroll",ie),F.disconnect()}},[j]),j?l.jsxs("div",{className:`${Oe.palette} ${Oe[T]} ${i?"":Oe.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:P=>P.stopPropagation(),onMouseDown:P=>P.stopPropagation(),onTransitionEnd:P=>{P.target===P.currentTarget&&(u||(clearTimeout(ae.current),E(!1),z("exit"),d==null||d()))},children:[l.jsxs("div",{className:Oe.paletteHeader,children:[l.jsx("div",{className:Oe.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:Oe.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${Oe.canvasToggle} ${g?Oe.active:""}`,onClick:()=>x(!g),children:[l.jsx("span",{className:Oe.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:Oe.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${Oe.wireframePurposeWrap} ${g?"":Oe.collapsed}`,children:l.jsx("div",{className:Oe.wireframePurposeInner,children:l.jsx("textarea",{className:Oe.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:P=>S(P.target.value),rows:2})})}),l.jsx(kj,{activeType:t,onSelect:n,onDragStart:y,scrollRef:re,fadeClass:Ae,blankCanvas:g}),O&&l.jsx("div",{className:`${Oe.paletteFooterWrap} ${q?Oe.footerHidden:""}`,children:l.jsx("div",{className:Oe.paletteFooterInner,children:l.jsx("div",{className:Oe.paletteFooterInnerContent,children:l.jsxs("div",{className:Oe.paletteFooter,children:[l.jsx("span",{className:Oe.paletteFooterCount,children:l.jsx(jj,{value:K.current,suffix:V.current})}),l.jsx("button",{className:Oe.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function bl(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function Ko(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=bl(i)}return null}function Ej(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(y=>y.length>2&&!y.match(/^[a-z]{1,2}$/)&&!y.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=bl(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function _l(t){var a,c,u,d,h,p,y,g;const n=Ej(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=Ko(t,"svg");if(x){const b=bl(x);if(b instanceof HTMLElement)return{name:`graphic in ${_l(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=bl(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),S=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:S?{name:`input [${S}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(y=t.textContent)==null?void 0:y.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(g=t.textContent)==null?void 0:g.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),S=t.getAttribute("aria-label");if(S)return{name:`${i} [${S}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const k=x.split(/[\s_-]+/).map(j=>j.replace(/[A-Z0-9]{5,}.*$/,"")).filter(j=>j.length>2&&!/^[a-z]{1,2}$/.test(j)).slice(0,2);if(k.length>0)return{name:k.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function lc(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function nd(t){const n=bl(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(g=>g!==t&&g instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(g=>{var k;const x=g.tagName.toLowerCase(),b=g.className;let S="";if(typeof b=="string"&&b){const j=b.split(/\s+/).map(E=>E.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(E=>E.length>2&&!/^[a-z]{1,2}$/.test(E));j&&(S=`.${j}`)}if(x==="button"||x==="a"){const j=(k=g.textContent)==null?void 0:k.trim().slice(0,15);if(j)return`${x}${S} "${j}"`}return`${x}${S}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const g=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));g&&(h=`.${g}`)}const p=n.children.length,y=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+y}function cc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var J5=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),Tj=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),Aj=new Set(["input","textarea","select"]),Nj=new Set(["img","video","canvas","svg"]),Dj=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function sd(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;Tj.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:Aj.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:Nj.has(a)?c=["width","height","objectFit","borderRadius"]:Dj.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!J5.has(h)&&(i[u]=h)}return i}var Rj=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function od(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of Rj){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!J5.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function Bj(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function id(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function ad(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=bl(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var Lj=new Set(["nav","header","main","section","article","footer","aside"]),ip={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},mx={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},Oj=new Set(["script","style","noscript","link","meta"]),zj=40;function e2(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Rr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":Rr(i)} > ${n}:nth-child(${c})`}return n}function Od(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&ip[a])return ip[a];if(mx[n])return mx[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=_l(t);return u.charAt(0).toUpperCase()+u.slice(1)}function t2(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function n2(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function $j(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(Oj.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<zj)return;const y=Lj.has(d),g=c.getAttribute("role")&&ip[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!y&&!g&&!x)return;const b=window.scrollY,S=e2(c),k={x:p.x,y:S?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Od(c),tagName:d,selector:Rr(c),role:c.getAttribute("role"),className:t2(c),textSnippet:n2(c),originalRect:k,currentRect:{...k},originalIndex:u,isFixed:S})}),a}function Ij(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=e2(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Od(t),tagName:t.tagName.toLowerCase(),selector:Rr(t),role:t.getAttribute("role"),className:t2(t),textSnippet:n2(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var px={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},_x=["nw","n","ne","e","se","s","sw","w"],rd=24,gx=16,ld=5;function yx(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,y=t.y,g=t.y+t.height,x=t.y+t.height/2,b=[];for(const K of n)i.has(K.id)||b.push(K.currentRect);a&&b.push(...a);for(const K of b){const V=K.x,ee=K.x+K.width,ae=K.x+K.width/2,re=K.y,Ae=K.y+K.height,We=K.y+K.height/2;for(const ne of[d,h,p])for(const pe of[V,ee,ae]){const P=pe-ne;Math.abs(P)<ld&&Math.abs(P)<Math.abs(c)&&(c=P)}for(const ne of[y,g,x])for(const pe of[re,Ae,We]){const P=pe-ne;Math.abs(P)<ld&&Math.abs(P)<Math.abs(u)&&(u=P)}}const S=Math.abs(c)<ld?c:0,k=Math.abs(u)<ld?u:0,j=[],E=new Set,T=d+S,z=h+S,O=p+S,R=y+k,q=g+k,Y=x+k;for(const K of b){const V=K.x,ee=K.x+K.width,ae=K.x+K.width/2,re=K.y,Ae=K.y+K.height,We=K.y+K.height/2;for(const ne of[V,ae,ee])for(const pe of[T,O,z])if(Math.abs(pe-ne)<.5){const P=`x:${Math.round(ne)}`;E.has(P)||(E.add(P),j.push({axis:"x",pos:ne}))}for(const ne of[re,We,Ae])for(const pe of[R,Y,q])if(Math.abs(pe-ne)<.5){const P=`y:${Math.round(ne)}`;E.has(P)||(E.add(P),j.push({axis:"y",pos:ne}))}}return{dx:S,dy:k,guides:j}}var Pj=new Set(["script","style","noscript","link","meta","br","hr"]);function xx(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(Pj.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=gx&&i.height>=gx)return n;n=n.parentElement}return null}function Hj({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:y,onDragEnd:g,clearSignal:x}){const{sections:b}=t,S=_.useRef(t);S.current=t;const[k,j]=_.useState(new Set),[E,T]=_.useState(!1),z=_.useRef(x);_.useEffect(()=>{x!==void 0&&x!==z.current&&(z.current=x,b.length>0&&T(!0))},[x,b.length]);const O=_.useRef(p);_.useEffect(()=>{p!==O.current&&(O.current=p,j(new Set))},[p]);const[R,q]=_.useState(null),[Y,K]=_.useState(!1),V=_.useRef(!1),ee=_.useCallback(H=>{const te=b.find(we=>we.id===H);te&&(V.current=!!te.note,q(H),K(!1))},[b]),ae=_.useCallback(()=>{R&&(K(!0),Ht(()=>{q(null),K(!1)},150))},[R]),re=_.useCallback(H=>{R&&(n({...t,sections:b.map(te=>te.id===R?{...te,note:H.trim()||void 0}:te)}),ae())},[R,b,t,n,ae]);_.useEffect(()=>{a&&R&&ae()},[a]);const[Ae,We]=_.useState(new Set),ne=_.useRef(new Map),[pe,P]=_.useState(null),[ie,F]=_.useState(null),[_e,Te]=_.useState([]),[I,me]=_.useState(0),se=_.useRef(null),he=_.useRef(new Set),be=_.useRef(new Map),[Re,$e]=_.useState(new Map),[Ue,Qe]=_.useState(new Map),Lt=_.useRef(new Set),Dt=_.useRef(new Map),Fe=_.useRef(h);Fe.current=h;const rt=_.useRef(y);rt.current=y;const Tt=_.useRef(g);Tt.current=g,_.useEffect(()=>{u&&j(new Set)},[u]);const[nn,Xt]=_.useState(()=>!t.sections.some(H=>{const te=H.originalRect,we=H.currentRect;return Math.abs(te.x-we.x)>1||Math.abs(te.y-we.y)>1||Math.abs(te.width-we.width)>1||Math.abs(te.height-we.height)>1}));_.useEffect(()=>{if(!nn){const H=Ht(()=>Xt(!0),380);return()=>clearTimeout(H)}},[]);const Pe=_.useRef(new Set);_.useEffect(()=>{Pe.current=new Set(b.map(H=>H.selector))},[b]),_.useEffect(()=>{const H=()=>me(window.scrollY);return H(),window.addEventListener("scroll",H,{passive:!0}),window.addEventListener("resize",H,{passive:!0}),()=>{window.removeEventListener("scroll",H),window.removeEventListener("resize",H)}},[]),_.useEffect(()=>{const H=te=>{if(se.current){P(null);return}const we=document.elementFromPoint(te.clientX,te.clientY);if(!we){P(null);return}if(we.closest("[data-feedback-toolbar]")){P(null);return}if(we.closest("[data-design-placement]")){P(null);return}if(we.closest("[data-annotation-popup]")){P(null);return}const je=xx(we);if(!je){P(null);return}for(const Ee of Pe.current)try{const le=document.querySelector(Ee);if(le&&(le===je||je.contains(le))){P(null);return}}catch{}const ue=je.getBoundingClientRect();P({x:ue.x,y:ue.y,w:ue.width,h:ue.height})};return document.addEventListener("mousemove",H,{passive:!0}),()=>document.removeEventListener("mousemove",H)},[b]),_.useEffect(()=>{const H=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=H}},[]),_.useEffect(()=>{const H=te=>{var le,Se,Je,ht;if(se.current||te.button!==0)return;const we=te.target;if(!we||we.closest("[data-feedback-toolbar]")||we.closest("[data-design-placement]")||we.closest("[data-annotation-popup]"))return;const je=xx(we);let ue=!1;if(je)for(const lt of Pe.current)try{const He=document.querySelector(lt);if(He&&(He===je||je.contains(He))){ue=!0;break}}catch{}const Ee=!!(te.shiftKey||te.metaKey||te.ctrlKey);if(je&&!ue){te.preventDefault(),te.stopPropagation();const lt=Ij(je),He=[...b,lt],gt=[...t.originalOrder,lt.id];n({...t,sections:He,originalOrder:gt});const Ct=new Set([lt.id]);j(Ct),(le=Fe.current)==null||le.call(Fe,Ct,Ee),P(null);const It=te.clientX,ot=te.clientY,kt={x:lt.currentRect.x,y:lt.currentRect.y};lt.originalRect;let Bt=!1,yt=0,mt=0;se.current="move";const Ge=Kt=>{var Gt;const en=Kt.clientX-It,sn=Kt.clientY-ot;if(!Bt&&(Math.abs(en)>2||Math.abs(sn)>2)&&(Bt=!0),!Bt)return;const qn={x:kt.x+en,y:kt.y+sn,width:lt.currentRect.width,height:lt.currentRect.height},Mn=yx(qn,He,new Set([lt.id]),d);Te(Mn.guides);const Sn=en+Mn.dx,vn=sn+Mn.dy;yt=Sn,mt=vn;const Yn=document.querySelector(`[data-rearrange-section="${lt.id}"]`);Yn&&(Yn.style.transform=`translate(${Sn}px, ${vn}px)`),$e(new Map([[lt.id,{x:kt.x+Sn,y:kt.y+vn,width:lt.currentRect.width,height:lt.currentRect.height}]])),(Gt=rt.current)==null||Gt.call(rt,Sn,vn)},xt=()=>{var en;window.removeEventListener("mousemove",Ge),window.removeEventListener("mouseup",xt),se.current=null,Te([]),$e(new Map);const Kt=document.querySelector(`[data-rearrange-section="${lt.id}"]`);Kt&&(Kt.style.transform=""),Bt&&n({...t,sections:He.map(sn=>sn.id===lt.id?{...sn,currentRect:{...sn.currentRect,x:Math.max(0,kt.x+yt),y:Math.max(0,kt.y+mt)}}:sn),originalOrder:gt}),(en=Tt.current)==null||en.call(Tt,yt,mt,Bt)};window.addEventListener("mousemove",Ge),window.addEventListener("mouseup",xt)}else if(ue&&je){te.preventDefault();for(const lt of b)try{const He=document.querySelector(lt.selector);if(He&&He===je){const gt=new Set([lt.id]);j(gt),(Se=Fe.current)==null||Se.call(Fe,gt,Ee);return}}catch{}Ee||(j(new Set),(Je=Fe.current)==null||Je.call(Fe,new Set,!1))}else Ee||(j(new Set),(ht=Fe.current)==null||ht.call(Fe,new Set,!1))};return document.addEventListener("mousedown",H,!0),()=>document.removeEventListener("mousedown",H,!0)},[b,t,n]),_.useEffect(()=>{const H=te=>{const we=te.target;if(!(we.tagName==="INPUT"||we.tagName==="TEXTAREA"||we.isContentEditable)){if((te.key==="Backspace"||te.key==="Delete")&&k.size>0){te.preventDefault();const je=new Set(k);We(ue=>{const Ee=new Set(ue);for(const le of je)Ee.add(le);return Ee}),j(new Set),Ht(()=>{const ue=S.current;n({...ue,sections:ue.sections.filter(Ee=>!je.has(Ee.id)),originalOrder:ue.originalOrder.filter(Ee=>!je.has(Ee))}),We(Ee=>{const le=new Set(Ee);for(const Se of je)le.delete(Se);return le})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(te.key)&&k.size>0){te.preventDefault();const je=te.shiftKey?20:1,ue=te.key==="ArrowLeft"?-je:te.key==="ArrowRight"?je:0,Ee=te.key==="ArrowUp"?-je:te.key==="ArrowDown"?je:0;n({...t,sections:b.map(le=>k.has(le.id)?{...le,currentRect:{...le.currentRect,x:Math.max(0,le.currentRect.x+ue),y:Math.max(0,le.currentRect.y+Ee)}}:le)});return}te.key==="Escape"&&k.size>0&&j(new Set)}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[k,b,t,n]);const ce=_.useCallback((H,te)=>{var It;if(H.button!==0)return;const we=H.target;if(we.closest(`.${Oe.handle}`)||we.closest(`.${Oe.deleteButton}`))return;H.preventDefault(),H.stopPropagation();let je;H.shiftKey||H.metaKey||H.ctrlKey?(je=new Set(k),je.has(te)?je.delete(te):je.add(te)):k.has(te)?je=new Set(k):je=new Set([te]),j(je),(je.size!==k.size||[...je].some(ot=>!k.has(ot)))&&((It=Fe.current)==null||It.call(Fe,je,!!(H.shiftKey||H.metaKey||H.ctrlKey)));const Ee=H.clientX,le=H.clientY,Se=new Map;for(const ot of b)je.has(ot.id)&&Se.set(ot.id,{x:ot.currentRect.x,y:ot.currentRect.y});se.current="move";let Je=!1,ht=0,lt=0;const He=new Map;for(const ot of b)if(je.has(ot.id)){const kt=document.querySelector(`[data-rearrange-section="${ot.id}"]`);He.set(ot.id,{outlineEl:kt,curW:ot.currentRect.width,curH:ot.currentRect.height})}const gt=ot=>{var Mn;const kt=ot.clientX-Ee,Bt=ot.clientY-le;if(kt===0&&Bt===0)return;Je=!0;let yt=1/0,mt=1/0,Ge=-1/0,xt=-1/0;for(const[Sn,{curW:vn,curH:Yn}]of He){const Gt=Se.get(Sn);if(!Gt)continue;const En=Gt.x+kt,at=Gt.y+Bt;yt=Math.min(yt,En),mt=Math.min(mt,at),Ge=Math.max(Ge,En+vn),xt=Math.max(xt,at+Yn)}const Kt=yx({x:yt,y:mt,width:Ge-yt,height:xt-mt},b,je,d),en=kt+Kt.dx,sn=Bt+Kt.dy;ht=en,lt=sn,Te(Kt.guides);for(const[,{outlineEl:Sn}]of He)Sn&&(Sn.style.transform=`translate(${en}px, ${sn}px)`);const qn=new Map;for(const[Sn,{curW:vn,curH:Yn}]of He){const Gt=Se.get(Sn);if(Gt){const En={x:Math.max(0,Gt.x+en),y:Math.max(0,Gt.y+sn),width:vn,height:Yn};qn.set(Sn,En)}}$e(qn),(Mn=rt.current)==null||Mn.call(rt,en,sn)},Ct=ot=>{var kt,Bt;window.removeEventListener("mousemove",gt),window.removeEventListener("mouseup",Ct),se.current=null,Te([]),$e(new Map);for(const[,{outlineEl:yt}]of He)yt&&(yt.style.transform="");if(Je){const yt=ot.clientX-Ee,mt=ot.clientY-le;if(Math.abs(yt)<5&&Math.abs(mt)<5)n({...t,sections:b.map(Ge=>{const xt=Se.get(Ge.id);return xt?{...Ge,currentRect:{...Ge.currentRect,x:xt.x,y:xt.y}}:Ge})});else{n({...t,sections:b.map(Ge=>{const xt=Se.get(Ge.id);return xt?{...Ge,currentRect:{...Ge.currentRect,x:Math.max(0,xt.x+ht),y:Math.max(0,xt.y+lt)}}:Ge})}),(kt=Tt.current)==null||kt.call(Tt,ht,lt,!0);return}}(Bt=Tt.current)==null||Bt.call(Tt,0,0,!1)};window.addEventListener("mousemove",gt),window.addEventListener("mouseup",Ct)},[k,b,t,n]),nt=_.useCallback((H,te,we)=>{H.preventDefault(),H.stopPropagation();const je=b.find(gt=>gt.id===te);if(!je)return;j(new Set([te])),se.current="resize";const ue=H.clientX,Ee=H.clientY,le={...je.currentRect};je.originalRect;const Se=le.width/le.height;let Je={...le};const ht=document.querySelector(`[data-rearrange-section="${te}"]`),lt=gt=>{const Ct=gt.clientX-ue,It=gt.clientY-Ee;let ot=le.x,kt=le.y,Bt=le.width,yt=le.height;if(we.includes("e")&&(Bt=Math.max(rd,le.width+Ct)),we.includes("w")&&(Bt=Math.max(rd,le.width-Ct),ot=le.x+le.width-Bt),we.includes("s")&&(yt=Math.max(rd,le.height+It)),we.includes("n")&&(yt=Math.max(rd,le.height-It),kt=le.y+le.height-yt),gt.shiftKey)if(we.length===2){const Ge=Math.abs(Bt-le.width),xt=Math.abs(yt-le.height);Ge>xt?yt=Bt/Se:Bt=yt*Se,we.includes("w")&&(ot=le.x+le.width-Bt),we.includes("n")&&(kt=le.y+le.height-yt)}else we==="e"||we==="w"?yt=Bt/Se:Bt=yt*Se,we==="w"&&(ot=le.x+le.width-Bt),we==="n"&&(kt=le.y+le.height-yt);Je={x:ot,y:kt,width:Bt,height:yt},ht&&(ht.style.left=`${ot}px`,ht.style.top=`${kt-I}px`,ht.style.width=`${Bt}px`,ht.style.height=`${yt}px`),F({x:gt.clientX+12,y:gt.clientY+12,text:`${Math.round(Bt)} × ${Math.round(yt)}`}),$e(new Map([[te,Je]]))},He=()=>{window.removeEventListener("mousemove",lt),window.removeEventListener("mouseup",He),F(null),se.current=null,$e(new Map),n({...t,sections:b.map(gt=>gt.id===te?{...gt,currentRect:Je}:gt)})};window.addEventListener("mousemove",lt),window.addEventListener("mouseup",He)},[b,t,n,I]),st=_.useCallback(H=>{We(te=>{const we=new Set(te);return we.add(H),we}),j(te=>{const we=new Set(te);return we.delete(H),we}),Ht(()=>{const te=S.current;n({...te,sections:te.sections.filter(we=>we.id!==H),originalOrder:te.originalOrder.filter(we=>we!==H)}),We(we=>{const je=new Set(we);return je.delete(H),je})},180)},[n]),et=H=>{const te=H.originalRect,we=H.currentRect;return Math.abs(te.x-we.x)>1||Math.abs(te.y-we.y)>1||Math.abs(te.width-we.width)>1||Math.abs(te.height-we.height)>1},Ze=H=>{const te=H.originalRect,we=H.currentRect;return Math.abs(te.x-we.x)>1||Math.abs(te.y-we.y)>1},ft=H=>{const te=H.originalRect,we=H.currentRect;return Math.abs(te.width-we.width)>1||Math.abs(te.height-we.height)>1};for(const H of b)be.current.has(H.id)||(Ze(H)?be.current.set(H.id,"move"):ft(H)&&be.current.set(H.id,"resize"));for(const H of be.current.keys())b.some(te=>te.id===H)||be.current.delete(H);const dt=b.filter(H=>{try{if(Ae.has(H.id)||k.has(H.id))return!0;const te=document.querySelector(H.selector);if(!te)return!1;const we=te.getBoundingClientRect(),je=H.originalRect;return Math.abs(we.width-je.width)+Math.abs(we.height-je.height)<200}catch{return!1}}),wt=dt.filter(H=>et(H)),St=dt.filter(H=>!et(H)),Ut=new Set(wt.map(H=>H.id));for(const H of he.current)Ut.has(H)||he.current.delete(H);const it=[...Ut].sort().join(",");for(const H of wt)Dt.current.set(H.id,{currentRect:H.currentRect,originalRect:H.originalRect,isFixed:H.isFixed});return _.useEffect(()=>{const H=Lt.current;Lt.current=Ut;const te=new Map;for(const we of H)if(!Ut.has(we)){if(!b.some(ue=>ue.id===we))continue;const je=Dt.current.get(we);je&&(te.set(we,{orig:je.originalRect,target:je.currentRect,isFixed:je.isFixed}),Dt.current.delete(we))}if(te.size>0){Qe(je=>{const ue=new Map(je);for(const[Ee,le]of te)ue.set(Ee,le);return ue});const we=Ht(()=>{Qe(je=>{const ue=new Map(je);for(const Ee of te.keys())ue.delete(Ee);return ue})},250);return()=>clearTimeout(we)}},[it,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${Oe.rearrangeOverlay} ${i?"":Oe.light} ${a?Oe.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[pe&&l.jsx("div",{className:Oe.hoverHighlight,style:{left:pe.x,top:pe.y,width:pe.w,height:pe.h}}),St.map(H=>{const te=H.currentRect,we=H.isFixed?te.y:te.y-I,je=px,ue=k.has(H.id);return l.jsxs("div",{"data-rearrange-section":H.id,className:`${Oe.sectionOutline} ${ue?Oe.selected:""} ${E||a||Ae.has(H.id)?Oe.exiting:""}`,style:{left:te.x,top:we,width:te.width,height:te.height,borderColor:je.border,backgroundColor:je.bg,...nn?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Ee=>ce(Ee,H.id),onDoubleClick:()=>ee(H.id),children:[l.jsx("span",{className:Oe.sectionLabel,style:{backgroundColor:je.pill},children:H.label}),l.jsx("span",{className:`${Oe.sectionAnnotation} ${H.note?Oe.annotationVisible:""}`,children:(H.note&&ne.current.set(H.id,H.note),H.note||ne.current.get(H.id)||"")}),l.jsxs("span",{className:Oe.sectionDimensions,children:[Math.round(te.width)," × ",Math.round(te.height)]}),l.jsx("div",{className:Oe.deleteButton,onMouseDown:Ee=>Ee.stopPropagation(),onClick:()=>st(H.id),children:"✕"}),_x.map(Ee=>l.jsx("div",{className:`${Oe.handle} ${Oe[`handle${Ee.charAt(0).toUpperCase()}${Ee.slice(1)}`]}`,onMouseDown:le=>nt(le,H.id,Ee)},Ee))]},H.id)}),wt.map(H=>{const te=H.currentRect,we=H.isFixed?te.y:te.y-I,je=k.has(H.id),ue=Ze(H),Ee=ft(H);if(u&&!je)return null;const Se=!he.current.has(H.id);return Se&&he.current.add(H.id),l.jsxs("div",{"data-rearrange-section":H.id,className:`${Oe.ghostOutline} ${je?Oe.selected:""} ${E||a||Ae.has(H.id)?Oe.exiting:""}`,style:{left:te.x,top:we,width:te.width,height:te.height,...nn?{}:{opacity:0,animation:"none",transition:"none"},...Se?{}:{animation:"none"}},onMouseDown:Je=>ce(Je,H.id),onDoubleClick:()=>ee(H.id),children:[l.jsx("span",{className:Oe.sectionLabel,style:{backgroundColor:px.pill},children:H.label}),l.jsx("span",{className:`${Oe.sectionAnnotation} ${H.note?Oe.annotationVisible:""}`,children:(H.note&&ne.current.set(H.id,H.note),H.note||ne.current.get(H.id)||"")}),l.jsxs("span",{className:Oe.sectionDimensions,children:[Math.round(te.width)," × ",Math.round(te.height)]}),l.jsx("div",{className:Oe.deleteButton,onMouseDown:Je=>Je.stopPropagation(),onClick:()=>st(H.id),children:"✕"}),_x.map(Je=>l.jsx("div",{className:`${Oe.handle} ${Oe[`handle${Je.charAt(0).toUpperCase()}${Je.slice(1)}`]}`,onMouseDown:ht=>nt(ht,H.id,Je)},Je)),l.jsx("span",{className:Oe.ghostBadge,children:(()=>{const Je=be.current.get(H.id);if(ue&&Ee){const[ht,lt]=Je==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",ht," ",l.jsxs("span",{className:Oe.ghostBadgeExtra,children:["& ",lt]})]})}return`Suggested ${Ee?"Resize":"Move"}`})()})]},H.id)})]}),!u&&(()=>{const H=[];for(const te of wt){const we=Re.get(te.id);H.push({id:te.id,orig:te.originalRect,target:we||te.currentRect,isFixed:te.isFixed,isSelected:k.has(te.id),isExiting:Ae.has(te.id)})}for(const[te,we]of Re)if(!H.some(je=>je.id===te)){const je=b.find(ue=>ue.id===te);je&&H.push({id:te,orig:je.originalRect,target:we,isFixed:je.isFixed,isSelected:k.has(te)})}for(const[te,we]of Ue)H.some(je=>je.id===te)||H.push({id:te,orig:we.orig,target:we.target,isFixed:we.isFixed,isSelected:!1,isExiting:!0});return H.length===0?null:l.jsxs("svg",{className:`${Oe.connectorSvg} ${E||a?Oe.connectorExiting:""}`,children:[H.map(({id:te,orig:we,target:je,isFixed:ue,isSelected:Ee,isExiting:le})=>{const Se=we.x+we.width/2,Je=(ue?we.y:we.y-I)+we.height/2,ht=je.x+je.width/2,lt=(ue?je.y:je.y-I)+je.height/2,He=ht-Se,gt=lt-Je,Ct=Math.sqrt(He*He+gt*gt);if(Ct<2)return null;const It=Math.min(1,Ct/40),ot=Math.min(Ct*.3,60),kt=Ct>0?-gt/Ct:0,Bt=Ct>0?He/Ct:0,yt=(Se+ht)/2+kt*ot,mt=(Je+lt)/2+Bt*ot,Ge=Re.has(te),xt=Ge||Ee?1:.4,Kt=Ge||Ee?1:.5;return l.jsxs("g",{className:le?Oe.connectorExiting:"",children:[l.jsx("path",{className:Oe.connectorLine,d:`M ${Se} ${Je} Q ${yt} ${mt} ${ht} ${lt}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:xt*It}),l.jsx("circle",{className:Oe.connectorDot,cx:Se,cy:Je,r:4*It,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Kt*It,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:Oe.connectorDot,cx:ht,cy:lt,r:4*It,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Kt*It,filter:"url(#connDotShadow)"})]},`conn-${te}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),R&&(()=>{var lt;const H=b.find(He=>He.id===R);if(!H)return null;const te=H.currentRect,we=H.isFixed?te.y:te.y-I,je=te.x+te.width/2,ue=we-8,Ee=we+te.height+8,le=ue>200,Se=Ee<window.innerHeight-100,Je=Math.max(160,Math.min(window.innerWidth-160,je));let ht;return le?ht={left:Je,bottom:window.innerHeight-ue}:Se?ht={left:Je,top:Ee}:ht={left:Je,top:Math.max(80,window.innerHeight/2-80)},l.jsx(Ld,{element:H.label,placeholder:"Add a note about this section",initialValue:(lt=H.note)!=null?lt:"",submitLabel:V.current?"Save":"Set",onSubmit:re,onCancel:ae,onDelete:V.current?()=>{re("")}:void 0,isExiting:Y,lightMode:!i,style:ht})})(),ie&&l.jsx("div",{className:Oe.sizeIndicator,style:{left:ie.x,top:ie.y},"data-feedback-toolbar":!0,children:ie.text}),_e.map((H,te)=>l.jsx("div",{className:Oe.guideLine,style:H.axis==="x"?{position:"fixed",left:H.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:H.pos-I,width:"100vw",height:1}},`${H.axis}-${H.pos}-${te}`))]})}var ap=new Set(["script","style","noscript","link","meta","br","hr"]);function Uj(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||ap.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Od(c),selector:Rr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||ap.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const y=h.getBoundingClientRect();y.height<10||y.width<10||n.push({label:Od(h),selector:Rr(h),top:y.top,bottom:y.bottom,left:y.left,right:y.right,area:y.width*y.height})}}}return n}function Vj(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function Yj(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function rp(t,n){const i=n?Vj(n):Uj(),a=Yj(t);let c=null,u=null,d=null,h=null,p=null;for(const k of i){if(Math.abs(k.left-a.left)<2&&Math.abs(k.top-a.top)<2&&Math.abs(k.right-k.left-t.width)<2&&Math.abs(k.bottom-k.top-t.height)<2)continue;k.left<=a.left+2&&k.right>=a.right-2&&k.top<=a.top+2&&k.bottom>=a.bottom-2&&k.area>a.area*1.5&&(!p||k.area<p._area)&&(p={label:k.label,selector:k.selector,_area:k.area});const j=a.right>k.left+5&&a.left<k.right-5,E=a.bottom>k.top+5&&a.top<k.bottom-5;if(j&&k.bottom<=a.top+5){const T=Math.round(a.top-k.bottom);(!c||T<c._dist)&&(c={label:k.label,selector:k.selector,gap:Math.max(0,T),_dist:T})}if(j&&k.top>=a.bottom-5){const T=Math.round(k.top-a.bottom);(!u||T<u._dist)&&(u={label:k.label,selector:k.selector,gap:Math.max(0,T),_dist:T})}if(E&&k.right<=a.left+5){const T=Math.round(a.left-k.right);(!d||T<d._dist)&&(d={label:k.label,selector:k.selector,gap:Math.max(0,T),_dist:T})}if(E&&k.left>=a.right-5){const T=Math.round(k.left-a.right);(!h||T<h._dist)&&(h={label:k.label,selector:k.selector,gap:Math.max(0,T),_dist:T})}}const y=window.innerWidth,g=window.innerHeight,x=Fj(t,y),b=k=>k?{label:k.label,selector:k.selector,gap:k.gap}:null,S=Wj(a,t,y,g,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:S}}function Wj(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const y=u.find(g=>g.label===c.label&&g.selector===c.selector&&Math.abs(g.area-c._area)<10);if(y){const g=[];t.left<y.left-2&&g.push("left"),t.right>y.right+2&&g.push("right"),t.top<y.top-2&&g.push("top"),t.bottom>y.bottom+2&&g.push("bottom"),g.length>0&&(d.container={label:c.label,edges:g},h=!0)}}return h?d:null}function Fj(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function s2(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function o2(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=s2(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function Xj(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(s2(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var bx=15;function vx(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<bx&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.x-y.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,y)=>p+y.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<bx&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.y-y.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,y)=>p+y.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function Gj(t){var d;if(t.length<2)return[];const n=vx(t.map(h=>({label:h.label,rect:h.originalRect}))),i=vx(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let y=null,g=0;for(const x of i){const b=x.labels.filter(S=>p.has(S)).length;b>=2&&b>g&&(y=x,g=b)}if(y){const x=y.labels.filter(S=>p.has(S)),b=x.join(", ");if(y.type!==h.type){const S=h.type==="row"?"y":"x",k=y.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${S}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${y.type} (${k}≈${y.sharedEdge}, ${y.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-y.sharedEdge)>20||Math.abs(h.avgGap-y.avgGap)>5){const S=h.type==="row"?"y":"x",k=Math.abs(h.sharedEdge-y.sharedEdge)>20?` ${S}: ${h.sharedEdge} → ${y.sharedEdge}`:"",j=Math.abs(h.avgGap-y.avgGap)>5?` gaps: ${h.avgGap}px → ${y.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${k}${j}`)}x.forEach(S=>c.add(S))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(S=>c.add(S))}}for(const h of i){if(h.labels.every(g=>c.has(g))||h.labels.filter(g=>!c.has(g)).length<2)continue;if(!n.some(g=>g.labels.filter(b=>h.labels.includes(b)).length>=2)){const g=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${g}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const y=Math.round(p.currentRect.x/5)*5;((d=h[y])!=null?d:h[y]=[]).push(p.label)}for(const[p,y]of Object.entries(h))y.length>=2&&a.push(`**${y.join(", ")}**: shared left edge at x≈${p}`)}return a}function i2(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||ap.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const y of Array.from(p.children))a(y)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const y=getComputedStyle(h);if(y.maxWidth&&y.maxWidth!=="none"&&y.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Rr(h)}}}return{viewport:t,contentArea:null}}function qj(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Rr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function a2(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),y=t.x+t.width/2,g=Math.abs(y-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),g&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function r2(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function Kj(t){const n=qj(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function wx(t,n,i,a="standard"){var E,T,z,O;if(t.length===0)return"";const c=[...t].sort((R,q)=>Math.abs(R.y-q.y)<20?R.x-q.x:R.y-q.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((R,q)=>{var K;const Y=((K=Qi[R.type])==null?void 0:K.label)||R.type;u+=`${q+1}. **${Y}** — \`${Math.round(R.width)}×${Math.round(R.height)}px\` at \`(${Math.round(R.x)}, ${Math.round(R.y)})\`
`}),u;const d=i2(n);u+=r2(d),u+=`### Components
`,c.forEach((R,q)=>{var Ae;const Y=((Ae=Qi[R.type])==null?void 0:Ae.label)||R.type,K={x:R.x,y:R.y,width:R.width,height:R.height};u+=`${q+1}. **${Y}** — \`${Math.round(R.width)}×${Math.round(R.height)}px\` at \`(${Math.round(R.x)}, ${Math.round(R.y)})\`
`;const V=rp(K),ae=o2(V,{includeLeftRight:a==="detailed"||a==="forensic"});for(const We of ae)u+=`   - ${We}
`;const re=a2(K,d);re&&(u+=`   - CSS: ${re}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const R of c){const q=h.find(Y=>Math.abs(Y.y-R.y)<30);q?q.items.push(R):h.push({y:R.y,items:[R]})}if(h.sort((R,q)=>R.y-q.y),h.forEach((R,q)=>{R.items.sort((K,V)=>K.x-V.x);const Y=R.items.map(K=>{var V;return((V=Qi[K.type])==null?void 0:V.label)||K.type});if(R.items.length===1){const V=R.items[0].width>n.width*.8;u+=`- Row ${q+1} (y≈${Math.round(R.y)}): ${Y[0]}${V?" — full width":""}
`}else u+=`- Row ${q+1} (y≈${Math.round(R.y)}): ${Y.join(" | ")} — ${R.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let R=0;R<c.length-1;R++){const q=c[R],Y=c[R+1],K=((E=Qi[q.type])==null?void 0:E.label)||q.type,V=((T=Qi[Y.type])==null?void 0:T.label)||Y.type,ee=Math.round(Y.y-(q.y+q.height)),ae=Math.round(Y.x-(q.x+q.width));Math.abs(q.y-Y.y)<30?u+=`- ${K} → ${V}: \`${ae}px\` horizontal gap
`:u+=`- ${K} → ${V}: \`${ee}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let R=0;R<c.length;R++)for(let q=R+1;q<c.length;q++){const Y=c[R],K=c[q],V=((z=Qi[Y.type])==null?void 0:z.label)||Y.type,ee=((O=Qi[K.type])==null?void 0:O.label)||K.type,ae=Math.round(K.y-(Y.y+Y.height)),re=Math.round(K.x-(Y.x+Y.width));u+=`- ${V} ↔ ${ee}: h=\`${re}px\` v=\`${ae}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((R,q)=>{var K;const Y=((K=Qi[R.type])==null?void 0:K.label)||R.type;u+=`${q}. ${Y} at \`(${Math.round(R.x)}, ${Math.round(R.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(R=>R.type==="navigation"),y=c.some(R=>R.type==="hero"),g=c.some(R=>R.type==="sidebar"),x=c.some(R=>R.type==="footer"),b=c.filter(R=>R.type==="card"),S=c.filter(R=>R.type==="form"),k=c.filter(R=>R.type==="table"),j=c.filter(R=>R.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),y&&(u+=`- Hero section with heading, subtext, and call-to-action
`),g&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),b.length>1?u+=`- ${b.length}-column card grid — use CSS Grid or Flexbox
`:b.length===1&&(u+=`- Card component with image + content area
`),S.length>0&&(u+=`- ${S.length} form${S.length>1?"s":""} — add proper labels, validation, and submit handling
`),k.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),j.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,g){const R=c.find(q=>q.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(R.width)}px 1fr;\`
`}if(b.length>1){const R=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${R}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Sx(t,n="standard",i){const{sections:a}=t,c=[];for(const g of a){const x=g.originalRect,b=g.currentRect,S=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,k=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!S&&!k){n==="forensic"&&c.push({section:g,posMoved:!1,sizeChanged:!1});continue}c.push({section:g,posMoved:S,sizeChanged:k})}if(c.length===0||n!=="forensic"&&c.every(g=>!g.posMoved&&!g.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=i2({width:d,height:h});n!=="compact"&&(u+=r2(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const y=g=>a.map(x=>({label:x.label,selector:x.selector,rect:g==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:g,posMoved:x,sizeChanged:b}of c){const S=g.originalRect,k=g.currentRect;if(!x&&!b){u+=`- ${g.label} — unchanged at (${Math.round(k.x)}, ${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${g.label}** to (${Math.round(k.x)}, ${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)}px
`:x?u+=`- Suggested: move **${g.label}** to (${Math.round(k.x)}, ${Math.round(k.y)})
`:u+=`- Suggested: resize **${g.label}** to ${Math.round(k.width)}×${Math.round(k.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${g.label}**
`:x?u+=`- Suggested: move **${g.label}**
`:u+=`- Suggested: resize **${g.label}** from ${Math.round(S.width)}×${Math.round(S.height)}px to ${Math.round(k.width)}×${Math.round(k.height)}px
`,x){const E=rp(S,y("original")),T=rp(k,y("current")),z=b?{width:S.width,height:S.height}:void 0;u+=`  - Currently ${Xj(E,{x:S.x,y:S.y},z)}
`;const O=b?{width:k.width,height:k.height}:void 0,R=`at (${Math.round(k.x)}, ${Math.round(k.y)})`,q=O?`, ${Math.round(O.width)}×${Math.round(O.height)}px`:"",K=o2(T,{includeLeftRight:n==="detailed"||n==="forensic"});if(K.length>0){u+=`  - Suggested position ${R}${q}: ${K[0]}
`;for(let ee=1;ee<K.length;ee++)u+=`    ${K[ee]}
`}else u+=`  - Suggested position ${R}${q}
`;const V=a2(k,p);V&&(u+=`  - CSS: ${V}
`)}const j=Kj(g.selector);if(j&&(u+=`  - ${j}
`),u+=`  - Selector: \`${g.selector}\`
`,n==="detailed"||n==="forensic"){const E=g.className?`${g.tagName}.${g.className.split(" ")[0]}`:g.tagName;E!==g.selector&&(u+=`  - Element: \`${E}\`
`),g.role&&(u+=`  - Role: \`${g.role}\`
`),n==="forensic"&&g.textSnippet&&(u+=`  - Text: "${g.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(k.x)}, y: ${Math.round(k.y)}, w: ${Math.round(k.width)}, h: ${Math.round(k.height)} }\`
`)}if(n!=="compact"){const g=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=Gj(g);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const g=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of g){const b=x.currentRect,S=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${S?" ← suggested":""}
`}}return u}var lp="feedback-annotations-",l2=7;function zd(t){return`${lp}${t}`}function ym(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(zd(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-l2*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function c2(t,n){if(!(typeof window>"u"))try{localStorage.setItem(zd(t),JSON.stringify(n))}catch{}}function Qj(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-l2*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(lp)){const c=a.slice(lp.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function uc(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));c2(t,a)}var Fp="agentation-design-";function Zj(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${Fp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function Jj(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Fp}${t}`,JSON.stringify(n))}catch{}}function eM(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${Fp}${t}`)}catch{}}var Xp="agentation-rearrange-";function tM(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${Xp}${t}`);return n?JSON.parse(n):null}catch{return null}}function nM(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Xp}${t}`,JSON.stringify(n))}catch{}}function sM(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${Xp}${t}`)}catch{}}var Gp="agentation-wireframe-";function oM(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${Gp}${t}`);return n?JSON.parse(n):null}catch{return null}}function Cx(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Gp}${t}`,JSON.stringify(n))}catch{}}function cd(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${Gp}${t}`)}catch{}}var u2="agentation-session-";function qp(t){return`${u2}${t}`}function iM(t){if(typeof window>"u")return null;try{return localStorage.getItem(qp(t))}catch{return null}}function xm(t,n){if(!(typeof window>"u"))try{localStorage.setItem(qp(t),n)}catch{}}function aM(t){if(!(typeof window>"u"))try{localStorage.removeItem(qp(t))}catch{}}var d2=`${u2}toolbar-hidden`;function rM(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(d2)==="1"}catch{return!1}}function lM(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(d2,"1")}catch{}}async function bm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function kx(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function cl(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function jx(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function tr(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var Hn={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Mx=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Ex=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],cM=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function uM(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=Mx;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...Mx,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...Ex,...t.skipPatterns]:Ex,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:cM,filter:t==null?void 0:t.filter}}function dM(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function fM(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function hM(t,n){const i=dM(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function mM(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&hM(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var ul=null,pM=new WeakMap;function vm(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function _M(){if(ul!==null)return ul;if(typeof document>"u")return!1;if(document.body&&vm(document.body))return ul=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&vm(i))return ul=!0,!0}if(document.body){for(const n of document.body.children)if(vm(n))return ul=!0,!0}return ul=!1,!1}var dc={map:pM};function gM(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function yM(t){const n=gM(t);return n?t[n]:null}function Sr(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function xM(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===Hn.HostComponent||n===Hn.HostText||n===Hn.HostHoistable||n===Hn.HostSingleton||n===Hn.Fragment||n===Hn.Mode||n===Hn.Profiler||n===Hn.DehydratedFragment||n===Hn.HostRoot||n===Hn.HostPortal||n===Hn.ScopeComponent||n===Hn.OffscreenComponent||n===Hn.LegacyHiddenComponent||n===Hn.CacheComponent||n===Hn.TracingMarkerComponent||n===Hn.Throw||n===Hn.ViewTransitionComponent||n===Hn.ActivityComponent)return null;if(n===Hn.ForwardRef){const u=a;if(u!=null&&u.render){const d=Sr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:Sr(i)}if(n===Hn.MemoComponent||n===Hn.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=Sr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:Sr(i)}if(n===Hn.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===Hn.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===Hn.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?Sr(u._result):null}return n===Hn.SuspenseComponent||n===Hn.SuspenseListComponent?null:n===Hn.IncompleteClassComponent||n===Hn.IncompleteFunctionComponent||n===Hn.FunctionComponent||n===Hn.ClassComponent||n===Hn.IndeterminateComponent?Sr(i):null}function bM(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function vM(t,n){const i=uM(n),a=i.mode==="all";if(a){const p=dc.map.get(t);if(p!==void 0)return p}if(!_M()){const p={path:null,components:[]};return a&&dc.map.set(t,p),p}const c=i.mode==="smart"?fM(t):void 0,u=[];try{let p=yM(t),y=0;for(;p&&y<i.maxDepth&&u.length<i.maxComponents;){const g=xM(p);g&&!bM(g)&&mM(g,y,i,c)&&u.push(g),p=p.return,y++}}catch{const p={path:null,components:[]};return a&&dc.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&dc.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&dc.map.set(t,h),h}var fc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function wM(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function Rc(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function SM(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Rc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Rc(i._debugOwner)};i=i.return,a++}return null}function CM(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Rc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Rc(n)}}}n=n.return,i++}return null}var ud=new Map;function kM(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===fc.FunctionComponent||n===fc.IndeterminateComponent)&&typeof i=="function")return i;if(n===fc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===fc.MemoComponent||n===fc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function jM(){const t=Yv,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function MM(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function EM(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function TM(t){const n=kM(t);if(!n)return null;if(ud.has(n))return ud.get(n);const i=jM();if(!i)return ud.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=MM(d.stack);h&&(c={fileName:EM(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:Rc(t)||void 0})}}}finally{i.set(a)}return ud.set(n,c),c}function AM(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=TM(i);if(c)return c;i=i.return,a++}return null}function cp(t){const n=wM(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=SM(n);if(i||(i=CM(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=AM(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function NM(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function DM(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=cp(i);if(c.found)return c;i=i.parentElement,a++}return cp(t)}var RM=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,BM={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=RM}var Ke=BM,hc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Tx(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var LM=`@keyframes styles-module__markerIn___x4G8D {
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
}`,OM={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=LM}var Us=OM;function Ax({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:y,renumberFrom:g,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:S,onHoverLeave:k,onClick:j,onContextMenu:E}){const T=(h||p)&&!y,z=T&&x==="delete",O=t.isMultiSelect,R=O?"var(--agentation-color-green)":"var(--agentation-color-accent)",q=c?Us.exit:u?Us.clearing:d?"":Us.enter,Y=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${Us.marker} ${O?Us.multiSelect:""} ${q} ${z?Us.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:z?void 0:R,animationDelay:Y},onMouseEnter:()=>S(t),onMouseLeave:k,onClick:K=>{K.stopPropagation(),c||j(t)},onContextMenu:E?K=>{x==="delete"&&(K.preventDefault(),K.stopPropagation(),c||E(t))}:void 0,children:[T?z?l.jsx(K5,{size:O?18:16}):l.jsx(qk,{size:16}):l.jsx("span",{className:g!==null&&n>=g?Us.renumber:void 0,children:n+1}),h&&!y&&l.jsxs("div",{className:`${Us.markerTooltip} ${Us.enter}`,style:b,children:[l.jsxs("span",{className:Us.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:Us.markerNote,children:t.comment})]})]})}function zM({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${Us.marker} ${Us.pending} ${i?Us.multiSelect:""} ${a?Us.exit:Us.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(zk,{size:12})})}function Nx({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${Us.marker} ${n?Us.fixed:""} ${Us.hovered} ${i?Us.multiSelect:""} ${Us.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(K5,{size:i?12:10})})}var $M=`.styles-module__switchContainer___Ka-AB {
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
}`,IM={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=$M}var wm=IM,Sm=({className:t="",...n})=>l.jsxs("div",{className:`${wm.switchContainer} ${t}`,children:[l.jsx("input",{className:wm.switchInput,type:"checkbox",...n}),l.jsx("div",{className:wm.switchThumb})]}),PM=`.styles-module__checkboxContainer___joqZk {
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
}`,HM={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=PM}var dd=HM,UM=({className:t="",...n})=>l.jsxs("div",{className:`${dd.checkboxContainer} ${t}`,children:[l.jsx("input",{className:dd.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:dd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:dd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),VM=`.styles-module__container___w8eAF {
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
}`,YM={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=VM}var Dx=YM,Rx=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=_.useId();return l.jsxs("div",{className:`${Dx.container} ${t}`,...u,children:[l.jsx(UM,{id:d,onChange:c,checked:a}),l.jsx("label",{className:Dx.label,htmlFor:d,children:n}),i&&l.jsx(Er,{content:i})]})},WM=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,FM={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=WM}var jt=FM;function XM({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:y,onSettingsPageChange:g,onHideToolbar:x}){var b;return l.jsx("div",{className:`${jt.settingsPanel} ${h?jt.enter:jt.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:jt.settingsPanelContainer,children:[l.jsxs("div",{className:`${jt.settingsPage} ${y==="automations"?jt.slideLeft:""}`,children:[l.jsxs("div",{className:jt.settingsHeader,children:[l.jsx("a",{className:jt.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:jt.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:jt.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:jt.themeIconWrapper,children:l.jsx("span",{className:jt.themeIcon,children:i?l.jsx(Xk,{size:20}):l.jsx(Gk,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:jt.divider}),l.jsxs("div",{className:jt.settingsSection,children:[l.jsxs("div",{className:jt.settingsRow,children:[l.jsxs("div",{className:jt.settingsLabel,children:["Output Detail",l.jsx(Er,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:jt.cycleButton,onClick:()=>{const k=(hc.findIndex(j=>j.value===t.outputDetail)+1)%hc.length;n({outputDetail:hc[k].value})},children:[l.jsx("span",{className:jt.cycleButtonText,children:(b=hc.find(S=>S.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),l.jsx("span",{className:jt.cycleDots,children:hc.map(S=>l.jsx("span",{className:`${jt.cycleDot} ${t.outputDetail===S.value?jt.active:""}`},S.value))})]})]}),l.jsxs("div",{className:`${jt.settingsRow} ${jt.settingsRowMarginTop} ${c?"":jt.settingsRowDisabled}`,children:[l.jsxs("div",{className:jt.settingsLabel,children:["React Components",l.jsx(Er,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(Sm,{checked:c&&t.reactEnabled,onChange:S=>n({reactEnabled:S.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${jt.settingsRow} ${jt.settingsRowMarginTop}`,children:[l.jsxs("div",{className:jt.settingsLabel,children:["Hide Until Restart",l.jsx(Er,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(Sm,{checked:!1,onChange:S=>{S.target.checked&&x()}})]})]}),l.jsx("div",{className:jt.divider}),l.jsxs("div",{className:jt.settingsSection,children:[l.jsx("div",{className:`${jt.settingsLabel} ${jt.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:jt.colorOptions,children:jc.map(S=>l.jsx("button",{className:`${jt.colorOption} ${t.annotationColorId===S.id?jt.selected:""}`,style:{"--swatch":S.srgb,"--swatch-p3":S.p3},onClick:()=>n({annotationColorId:S.id}),title:S.label,type:"button"},S.id))})]}),l.jsx("div",{className:jt.divider}),l.jsxs("div",{className:jt.settingsSection,children:[l.jsx(Rx,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:S=>n({autoClearAfterCopy:S.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(Rx,{className:jt.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:S=>n({blockInteractions:S.target.checked})})]}),l.jsx("div",{className:jt.divider}),l.jsxs("button",{className:jt.settingsNavLink,onClick:()=>g("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:jt.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${jt.mcpNavIndicator} ${jt[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${jt.settingsPage} ${jt.automationsPage} ${y==="automations"?jt.slideIn:""}`,children:[l.jsxs("button",{className:jt.settingsBackButton,onClick:()=>g("main"),children:[l.jsx(Qk,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:jt.divider}),l.jsxs("div",{className:jt.settingsSection,children:[l.jsxs("div",{className:jt.settingsRow,children:[l.jsxs("span",{className:jt.automationHeader,children:["MCP Connection",l.jsx(Er,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${jt.mcpStatusDot} ${jt[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:jt.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:jt.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:jt.divider}),l.jsxs("div",{className:`${jt.settingsSection} ${jt.settingsSectionGrow}`,children:[l.jsxs("div",{className:jt.settingsRow,children:[l.jsxs("span",{className:jt.automationHeader,children:["Webhooks",l.jsx(Er,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:jt.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${jt.autoSendLabel} ${t.webhooksEnabled?jt.active:""} ${t.webhookUrl?"":jt.disabled}`,children:"Auto-Send"}),l.jsx(Sm,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:S=>n({webhooksEnabled:S.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:jt.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:jt.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:S=>S.stopPropagation(),onChange:S=>n({webhookUrl:S.target.value})})]})]})]})})}function Cm(t,n="filtered"){const{name:i,path:a}=_l(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=vM(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var Bx=!1,km={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},ra=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},jc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],GM=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...jc.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${jc.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${jc.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(t)};GM();function Cr(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function jm(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function kr(t){return t.status!=="resolved"&&t.status!=="dismissed"}function fd(t){const n=cp(t),i=n.found?n:DM(t);if(i.found&&i.source)return NM(i.source,"path")}function qM({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:y=!0,endpoint:g,sessionId:x,onSessionCreated:b,webhookUrl:S,className:k}={}){var qs,po,B,X,G,D,Z;const[j,E]=_.useState(!1),[T,z]=_.useState([]),[O,R]=_.useState(!0),[q,Y]=_.useState(()=>rM()),[K,V]=_.useState(!1),ee=_.useRef(null);_.useEffect(()=>{const w=N=>{const L=ee.current;L&&L.contains(N.target)&&N.stopPropagation()},C=["mousedown","click","pointerdown"];return C.forEach(N=>document.body.addEventListener(N,w)),()=>{C.forEach(N=>document.body.removeEventListener(N,w))}},[]);const[ae,re]=_.useState(!1),[Ae,We]=_.useState(!1),[ne,pe]=_.useState(null),[P,ie]=_.useState({x:0,y:0}),[F,_e]=_.useState(null),[Te,I]=_.useState(!1),[me,se]=_.useState("idle"),[he,be]=_.useState(!1),[Re,$e]=_.useState(!1),[Ue,Qe]=_.useState(null),[Lt,Dt]=_.useState(null),[Fe,rt]=_.useState([]),[Tt,nn]=_.useState(null),[Xt,Pe]=_.useState(null),[ce,nt]=_.useState(null),[st,et]=_.useState(null),[Ze,ft]=_.useState([]),[dt,wt]=_.useState(0),[St,Ut]=_.useState(!1),[it,H]=_.useState(!1),[te,we]=_.useState(!1),[je,ue]=_.useState(!1),[Ee,le]=_.useState(!1),[Se,Je]=_.useState("main"),[ht,lt]=_.useState(!1),[He,gt]=_.useState(!1),[Ct,It]=_.useState(!1),[ot,kt]=_.useState([]),[Bt,yt]=_.useState(null),mt=_.useRef(!1),[Ge,xt]=_.useState(!1),[Kt,en]=_.useState(!1),[sn,qn]=_.useState(1),[Mn,Sn]=_.useState("new-page"),[vn,Yn]=_.useState(""),[Gt,En]=_.useState(!1),[at,Tn]=_.useState(null),Yt=_.useRef(!1),Kn=_.useRef({rearrange:null,placements:[]}),os=_.useRef({rearrange:null,placements:[]}),[cs,us]=_.useState(0),[Vs,no]=_.useState(0),[so,ds]=_.useState(0),[Un,Ls]=_.useState(0),jo=_.useRef(new Set),kn=_.useRef(new Set),Rn=_.useRef(null),oo=_.useRef(),ms=He&&j&&!Ct&&Ge;_.useEffect(()=>{if(ms){en(!1);const w=pl(()=>{en(!0)});return()=>cancelAnimationFrame(w)}else en(!1)},[ms]);const ks=_.useRef(new Map),ps=_.useRef(new Map),io=_.useRef(),[fn,rn]=_.useState(!1),[ln,Bn]=_.useState([]),vi=_.useRef(ln);vi.current=ln;const[ti,ni]=_.useState(null),ao=_.useRef(null);_.useRef(!1),_.useRef([]),_.useRef(0),_.useRef(null),_.useRef(null),_.useRef(1);const[ui,vs]=_.useState(!1),ro=_.useRef(null),[Ln,xo]=_.useState([]),_s=_.useRef({cmd:!1,shift:!1}),Qn=()=>{lt(!0)},Ys=()=>{lt(!1)},Mo=()=>{ui||(ro.current=Ht(()=>vs(!0),850))},Yo=()=>{ro.current&&(clearTimeout(ro.current),ro.current=null),vs(!1),Ys()};_.useEffect(()=>()=>{ro.current&&clearTimeout(ro.current)},[]);const[Vt,lo]=_.useState(()=>{var w;try{const C=JSON.parse((w=localStorage.getItem("feedback-toolbar-settings"))!=null?w:"");return{...km,...C,annotationColorId:jc.find(N=>N.id===C.annotationColorId)?C.annotationColorId:km.annotationColorId}}catch{return km}}),[Ts,Wo]=_.useState(!0),[wi,Eo]=_.useState(!1),Os=()=>{var w;(w=ee.current)==null||w.classList.add(Ke.disableTransitions),Wo(C=>!C),pl(()=>{var C;(C=ee.current)==null||C.classList.remove(Ke.disableTransitions)})},Fo=!1,Ws="off",[jn,To]=_.useState(x!=null?x:null),bo=_.useRef(!1),[ws,vo]=_.useState(g?"connecting":"disconnected"),[cn,Fs]=_.useState(null),[zs,co]=_.useState(!1),[js,zo]=_.useState(null),Xs=_.useRef(!1),[Ao,wo]=_.useState(new Set),[On,An]=_.useState(new Set),[Vn,Wn]=_.useState(!1),[uo,As]=_.useState(!1),[Ms,Xo]=_.useState(!1),fo=_.useRef(null),gs=_.useRef(null),Es=_.useRef(null),$o=_.useRef(null),So=_.useRef(!1),ho=_.useRef(0),Io=_.useRef(null),Po=_.useRef(null),Si=8,ta=50,Ii=_.useRef(null),Pi=_.useRef(null),si=_.useRef(null),Nt=typeof window<"u"?window.location.pathname:"/";_.useEffect(()=>{if(je)le(!0);else{lt(!1),Je("main");const w=Ht(()=>le(!1),0);return()=>clearTimeout(w)}},[je]);const Ci=j&&O&&!He;_.useEffect(()=>{if(Ci){We(!1),re(!0),wo(new Set);const w=Ht(()=>{wo(C=>{const N=new Set(C);return T.forEach(L=>N.add(L.id)),N})},350);return()=>clearTimeout(w)}else if(ae){We(!0);const w=Ht(()=>{re(!1),We(!1)},250);return()=>clearTimeout(w)}},[Ci]),_.useEffect(()=>{H(!0),wt(window.scrollY);const w=ym(Nt);z(w.filter(kr)),Bx||(Eo(!0),Bx=!0,Ht(()=>Eo(!1),750));try{const C=localStorage.getItem("feedback-toolbar-theme");C!==null&&Wo(C==="dark")}catch{}try{const C=localStorage.getItem("feedback-toolbar-position");if(C){const N=JSON.parse(C);typeof N.x=="number"&&typeof N.y=="number"&&Fs(N)}}catch{}},[Nt]),_.useEffect(()=>{it&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Vt))},[Vt,it]),_.useEffect(()=>{it&&localStorage.setItem("feedback-toolbar-theme",Ts?"dark":"light")},[Ts,it]);const ki=_.useRef(!1);_.useEffect(()=>{const w=ki.current;ki.current=zs,w&&!zs&&cn&&it&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(cn))},[zs,cn,it]),_.useEffect(()=>{if(!g||!it||bo.current)return;bo.current=!0,vo("connecting"),(async()=>{try{const C=iM(Nt),N=x||C;let L=!1;if(N)try{const W=await kx(g,N);To(W.id),vo("connected"),xm(Nt,W.id),L=!0;const J=ym(Nt),Ne=new Set(W.annotations.map(Le=>Le.id)),xe=J.filter(Le=>!Ne.has(Le.id));if(xe.length>0){const qe=`${typeof window<"u"?window.location.origin:""}${Nt}`,pt=(await Promise.allSettled(xe.map(ut=>cl(g,W.id,{...ut,sessionId:W.id,url:qe})))).map((ut,ct)=>ut.status==="fulfilled"?ut.value:(console.warn("[Agentation] Failed to sync annotation:",ut.reason),xe[ct])),_t=[...W.annotations,...pt];z(_t.filter(kr)),uc(Nt,_t.filter(kr),W.id)}else z(W.annotations.filter(kr)),uc(Nt,W.annotations.filter(kr),W.id)}catch(W){console.warn("[Agentation] Could not join session, creating new:",W),aM(Nt)}if(!L){const W=typeof window<"u"?window.location.href:"/",J=await bm(g,W);To(J.id),vo("connected"),xm(Nt,J.id),b==null||b(J.id);const Ne=Qj(),xe=typeof window<"u"?window.location.origin:"",Le=[];for(const[qe,tt]of Ne){const pt=tt.filter(ct=>!ct._syncedTo);if(pt.length===0)continue;const _t=`${xe}${qe}`,ut=qe===Nt;Le.push((async()=>{try{const ct=ut?J:await bm(g,_t),$n=(await Promise.allSettled(pt.map(un=>cl(g,ct.id,{...un,sessionId:ct.id,url:_t})))).map((un,Ot)=>un.status==="fulfilled"?un.value:(console.warn("[Agentation] Failed to sync annotation:",un.reason),pt[Ot])).filter(kr);if(uc(qe,$n,ct.id),ut){const un=new Set(pt.map(Ot=>Ot.id));z(Ot=>{const vt=Ot.filter(Rt=>!un.has(Rt.id));return[...$n,...vt]})}}catch(ct){console.warn(`[Agentation] Failed to sync annotations for ${qe}:`,ct)}})())}await Promise.allSettled(Le)}}catch(C){vo("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",C)}})()},[g,x,it,b,Nt]),_.useEffect(()=>{if(!g||!it)return;const w=async()=>{try{(await fetch(`${g}/health`)).ok?vo("connected"):vo("disconnected")}catch{vo("disconnected")}};w();const C=e8(w,1e4);return()=>clearInterval(C)},[g,it]),_.useEffect(()=>{if(!g||!it||!jn)return;const w=new EventSource(`${g}/sessions/${jn}/events`),C=["resolved","dismissed"],N=L=>{var W;try{const J=JSON.parse(L.data);if(C.includes((W=J.payload)==null?void 0:W.status)){const Ne=J.payload.id,xe=J.payload.kind;if(xe==="placement"){for(const[Le,qe]of ks.current)if(qe===Ne){ks.current.delete(Le),kt(tt=>tt.filter(pt=>pt.id!==Le));break}}else if(xe==="rearrange"){for(const[Le,qe]of ps.current)if(qe===Ne){ps.current.delete(Le),Tn(tt=>{if(!tt)return null;const pt=tt.sections.filter(_t=>_t.id!==Le);return pt.length===0?null:{...tt,sections:pt}});break}}else An(Le=>new Set(Le).add(Ne)),Ht(()=>{z(Le=>Le.filter(qe=>qe.id!==Ne)),An(Le=>{const qe=new Set(Le);return qe.delete(Ne),qe})},150)}}catch{}};return w.addEventListener("annotation.updated",N),()=>{w.removeEventListener("annotation.updated",N),w.close()}},[g,it,jn]),_.useEffect(()=>{if(!g||!it)return;const w=Po.current==="disconnected",C=ws==="connected";Po.current=ws,w&&C&&(async()=>{try{const L=ym(Nt);if(L.length===0)return;const J=`${typeof window<"u"?window.location.origin:""}${Nt}`;let Ne=jn,xe=[];if(Ne)try{xe=(await kx(g,Ne)).annotations}catch{Ne=null}Ne||(Ne=(await bm(g,J)).id,To(Ne),xm(Nt,Ne));const Le=new Set(xe.map(tt=>tt.id)),qe=L.filter(tt=>!Le.has(tt.id));if(qe.length>0){const pt=(await Promise.allSettled(qe.map(ct=>cl(g,Ne,{...ct,sessionId:Ne,url:J})))).map((ct,Cn)=>ct.status==="fulfilled"?ct.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",ct.reason),qe[Cn])),ut=[...xe,...pt].filter(kr);z(ut),uc(Nt,ut,Ne)}}catch(L){console.warn("[Agentation] Failed to sync on reconnect:",L)}})()},[ws,g,it,jn,Nt]);const Hi=_.useCallback(()=>{K||(V(!0),ue(!1),E(!1),Ht(()=>{lM(!0),Y(!0),V(!1)},400))},[K]);_.useEffect(()=>{if(!i||!it||!t||t.length===0||T.length>0)return;const w=[];return w.push(Ht(()=>{E(!0)},n-200)),t.forEach((C,N)=>{const L=n+N*300;w.push(Ht(()=>{const W=document.querySelector(C.selector);if(!W)return;const J=W.getBoundingClientRect(),{name:Ne,path:xe}=_l(W),Le={id:`demo-${Date.now()}-${N}`,x:(J.left+J.width/2)/window.innerWidth*100,y:J.top+J.height/2+window.scrollY,comment:C.comment,element:Ne,elementPath:xe,timestamp:Date.now(),selectedText:C.selectedText,boundingBox:{x:J.left,y:J.top+window.scrollY,width:J.width,height:J.height},nearbyText:lc(W),cssClasses:cc(W)};z(qe=>[...qe,Le])},L))}),()=>{w.forEach(clearTimeout)}},[i,it,t,n]),_.useEffect(()=>{const w=()=>{wt(window.scrollY),Ut(!0),si.current&&clearTimeout(si.current),si.current=Ht(()=>{Ut(!1)},150)};return window.addEventListener("scroll",w,{passive:!0}),()=>{window.removeEventListener("scroll",w),si.current&&clearTimeout(si.current)}},[]),_.useEffect(()=>{it&&T.length>0?jn?uc(Nt,T,jn):c2(Nt,T):it&&T.length===0&&localStorage.removeItem(zd(Nt))},[T,Nt,it,jn]),_.useEffect(()=>{if(it&&!mt.current){mt.current=!0;const w=Zj(Nt);w.length>0&&kt(w)}},[it,Nt]),_.useEffect(()=>{it&&mt.current&&!Ge&&(ot.length>0?Jj(Nt,ot):eM(Nt))},[ot,Nt,it,Ge]),_.useEffect(()=>{if(it&&!Yt.current){Yt.current=!0;const w=tM(Nt);if(w){const C={...w,sections:w.sections.map(N=>{var L;return{...N,currentRect:(L=N.currentRect)!=null?L:{...N.originalRect}}})};Tn(C)}}},[it,Nt]),_.useEffect(()=>{it&&Yt.current&&!Ge&&(at?nM(Nt,at):sM(Nt))},[at,Nt,it,Ge]);const di=_.useRef(!1);_.useEffect(()=>{if(it&&!di.current){di.current=!0;const w=oM(Nt);w&&(os.current={rearrange:w.rearrange,placements:w.placements||[]},w.purpose&&Yn(w.purpose))}},[it,Nt]),_.useEffect(()=>{var C,N,L,W,J;if(!it||!di.current)return;const w=os.current;Ge?((N=(C=at==null?void 0:at.sections)==null?void 0:C.length)!=null?N:0)>0||ot.length>0||vn?Cx(Nt,{rearrange:at,placements:ot,purpose:vn}):cd(Nt):((J=(W=(L=w.rearrange)==null?void 0:L.sections)==null?void 0:W.length)!=null?J:0)>0||w.placements.length>0||vn?Cx(Nt,{rearrange:w.rearrange,placements:w.placements,purpose:vn}):cd(Nt)},[at,ot,vn,Ge,Nt,it]),_.useEffect(()=>{He&&!at&&Tn({sections:[],originalOrder:[],detectedAt:Date.now()})},[He,at]),_.useEffect(()=>{if(!g||!jn)return;const w=ks.current,C=new Set(ot.map(N=>N.id));for(const N of ot){if(w.has(N.id))continue;w.set(N.id,"");const L=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Nt;cl(g,jn,{id:N.id,x:N.x/window.innerWidth*100,y:N.y,comment:`Place ${N.type} at (${Math.round(N.x)}, ${Math.round(N.y)}), ${N.width}×${N.height}px${N.text?` — "${N.text}"`:""}`,element:`[design:${N.type}]`,elementPath:"[placement]",timestamp:N.timestamp,url:L,intent:"change",severity:"important",kind:"placement",placement:{componentType:N.type,width:N.width,height:N.height,scrollY:N.scrollY,text:N.text}}).then(W=>{w.has(N.id)&&w.set(N.id,W.id)}).catch(W=>{console.warn("[Agentation] Failed to sync placement annotation:",W),w.delete(N.id)})}for(const[N,L]of w)C.has(N)||(w.delete(N),L&&tr(g,L).catch(()=>{}))},[ot,g,jn,Nt]),_.useEffect(()=>{if(!(!g||!jn))return io.current&&clearTimeout(io.current),io.current=Ht(()=>{const w=ps.current;if(!at||at.sections.length===0){for(const[,L]of w)L&&tr(g,L).catch(()=>{});w.clear();return}const C=new Set(at.sections.map(L=>L.id)),N=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Nt;for(const L of at.sections){const W=L.originalRect,J=L.currentRect;if(!(Math.abs(W.x-J.x)>1||Math.abs(W.y-J.y)>1||Math.abs(W.width-J.width)>1||Math.abs(W.height-J.height)>1)){const Le=w.get(L.id);Le&&(w.delete(L.id),tr(g,Le).catch(()=>{}));continue}const xe=w.get(L.id);xe?jx(g,xe,{comment:`Move ${L.label} section (${L.tagName}) — from (${Math.round(W.x)},${Math.round(W.y)}) ${Math.round(W.width)}×${Math.round(W.height)} to (${Math.round(J.x)},${Math.round(J.y)}) ${Math.round(J.width)}×${Math.round(J.height)}`}).catch(Le=>{console.warn("[Agentation] Failed to update rearrange annotation:",Le)}):(w.set(L.id,""),cl(g,jn,{id:L.id,x:J.x/window.innerWidth*100,y:J.y,comment:`Move ${L.label} section (${L.tagName}) — from (${Math.round(W.x)},${Math.round(W.y)}) ${Math.round(W.width)}×${Math.round(W.height)} to (${Math.round(J.x)},${Math.round(J.y)}) ${Math.round(J.width)}×${Math.round(J.height)}`,element:L.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:N,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:L.selector,label:L.label,tagName:L.tagName,originalRect:W,currentRect:J}}).then(Le=>{w.has(L.id)&&w.set(L.id,Le.id)}).catch(Le=>{console.warn("[Agentation] Failed to sync rearrange annotation:",Le),w.delete(L.id)}))}for(const[L,W]of w)C.has(L)||(w.delete(L),W&&tr(g,W).catch(()=>{}))},300),()=>{io.current&&clearTimeout(io.current)}},[at,g,jn,Nt]);const Co=_.useRef(new Map);_.useLayoutEffect(()=>{var N;const w=(N=at==null?void 0:at.sections)!=null?N:[],C=new Set;if((He||Ct)&&j)for(const L of w){C.add(L.id);try{const W=document.querySelector(L.selector);if(!W)continue;if(!Co.current.has(L.id)){const J={transform:W.style.transform,transformOrigin:W.style.transformOrigin,opacity:W.style.opacity,position:W.style.position,zIndex:W.style.zIndex,display:W.style.display},Ne=[];let xe=W.parentElement;for(;xe&&xe!==document.body;){const qe=getComputedStyle(xe);(qe.overflow!=="visible"||qe.overflowX!=="visible"||qe.overflowY!=="visible")&&(Ne.push({el:xe,overflow:xe.style.overflow}),xe.style.overflow="visible"),xe=xe.parentElement}getComputedStyle(W).display==="inline"&&(W.style.display="inline-block"),Co.current.set(L.id,{el:W,origStyles:J,ancestors:Ne}),W.style.transformOrigin="top left",W.style.zIndex="9999"}}catch{}}for(const[L,W]of Co.current)if(!C.has(L)){const{el:J,origStyles:Ne,ancestors:xe}=W;J.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",J.style.transform=Ne.transform,J.style.transformOrigin=Ne.transformOrigin,J.style.opacity=Ne.opacity,J.style.position=Ne.position,J.style.zIndex=Ne.zIndex,Co.current.delete(L),Ht(()=>{J.style.transition="",J.style.display=Ne.display;for(const Le of xe)Le.el.style.overflow=Le.overflow},450)}},[at,He,Ct,j]),_.useEffect(()=>()=>{for(const[,w]of Co.current){const{el:C,origStyles:N,ancestors:L}=w;C.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",C.style.transform=N.transform,C.style.transformOrigin=N.transformOrigin,C.style.opacity=N.opacity,C.style.position=N.position,C.style.zIndex=N.zIndex,Ht(()=>{C.style.transition="",C.style.display=N.display;for(const W of L)W.el.style.overflow=W.overflow},450)}Co.current.clear()},[]);const Go=_.useCallback(()=>{It(!0),gt(!1),yt(null),clearTimeout(oo.current),oo.current=Ht(()=>{It(!1)},300)},[]),fi=_.useCallback(()=>{He&&(It(!0),gt(!1),yt(null),clearTimeout(oo.current),oo.current=Ht(()=>{It(!1)},300)),E(!1)},[He]),M=_.useCallback(()=>{te||(n8(),we(!0))},[te]),U=_.useCallback(()=>{te&&(ux(),we(!1))},[te]),de=_.useCallback(()=>{te?U():M()},[te,M,U]),ke=_.useCallback(()=>{if(Ln.length===0)return;const w=Ln[0],C=w.element,N=Ln.length>1,L=Ln.map(W=>W.element.getBoundingClientRect());if(N){const W={left:Math.min(...L.map(ct=>ct.left)),top:Math.min(...L.map(ct=>ct.top)),right:Math.max(...L.map(ct=>ct.right)),bottom:Math.max(...L.map(ct=>ct.bottom))},J=Ln.slice(0,5).map(ct=>ct.name).join(", "),Ne=Ln.length>5?` +${Ln.length-5} more`:"",xe=L.map(ct=>({x:ct.left,y:ct.top+window.scrollY,width:ct.width,height:ct.height})),qe=Ln[Ln.length-1].element,tt=L[L.length-1],pt=tt.left+tt.width/2,_t=tt.top+tt.height/2,ut=jm(qe);_e({x:pt/window.innerWidth*100,y:ut?_t:_t+window.scrollY,clientY:_t,element:`${Ln.length} elements: ${J}${Ne}`,elementPath:"multi-select",boundingBox:{x:W.left,y:W.top+window.scrollY,width:W.right-W.left,height:W.bottom-W.top},isMultiSelect:!0,isFixed:ut,elementBoundingBoxes:xe,multiSelectElements:Ln.map(ct=>ct.element),targetElement:qe,fullPath:ad(C),accessibility:id(C),computedStyles:od(C),computedStylesObj:sd(C),nearbyElements:nd(C),cssClasses:cc(C),nearbyText:lc(C),sourceFile:fd(C)})}else{const W=L[0],J=jm(C);_e({x:W.left/window.innerWidth*100,y:J?W.top:W.top+window.scrollY,clientY:W.top,element:w.name,elementPath:w.path,boundingBox:{x:W.left,y:J?W.top:W.top+window.scrollY,width:W.width,height:W.height},isFixed:J,fullPath:ad(C),accessibility:id(C),computedStyles:od(C),computedStylesObj:sd(C),nearbyElements:nd(C),cssClasses:cc(C),nearbyText:lc(C),reactComponents:w.reactComponents,sourceFile:fd(C)})}xo([]),pe(null)},[Ln]);_.useEffect(()=>{j||(_e(null),nt(null),et(null),ft([]),pe(null),ue(!1),xo([]),_s.current={cmd:!1,shift:!1},te&&U())},[j,te,U]),_.useEffect(()=>()=>{ux()},[]),_.useEffect(()=>{if(!j)return;const w=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),C=":not([data-agentation-root]):not([data-agentation-root] *)",N=document.createElement("style");return N.id="feedback-cursor-styles",N.textContent=`
      body ${C} {
        cursor: crosshair !important;
      }

      body :is(${w})${C} {
        cursor: text !important;
      }
    `,document.head.appendChild(N),()=>{const L=document.getElementById("feedback-cursor-styles");L&&L.remove()}},[j]),_.useEffect(()=>{if(ti!==null&&j)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[ti,j]),_.useEffect(()=>{if(!j||F||fn||He)return;const w=C=>{const N=C.composedPath()[0]||C.target;if(Ko(N,"[data-feedback-toolbar]")){pe(null);return}const L=Cr(C.clientX,C.clientY);if(!L||Ko(L,"[data-feedback-toolbar]")){pe(null);return}const{name:W,elementName:J,path:Ne,reactComponents:xe}=Cm(L,Ws),Le=L.getBoundingClientRect();pe({element:W,elementName:J,elementPath:Ne,rect:Le,reactComponents:xe}),ie({x:C.clientX,y:C.clientY})};return document.addEventListener("mousemove",w),()=>document.removeEventListener("mousemove",w)},[j,F,fn,He,Ws,ln]);const Ye=_.useCallback(w=>{var C;if(nt(w),Qe(null),Dt(null),rt([]),(C=w.elementBoundingBoxes)!=null&&C.length){const N=[];for(const L of w.elementBoundingBoxes){const W=L.x+L.width/2,J=L.y+L.height/2-window.scrollY,Ne=Cr(W,J);Ne&&N.push(Ne)}ft(N),et(null)}else if(w.boundingBox){const N=w.boundingBox,L=N.x+N.width/2,W=w.isFixed?N.y+N.height/2:N.y+N.height/2-window.scrollY,J=Cr(L,W);if(J){const Ne=J.getBoundingClientRect(),xe=Ne.width/N.width,Le=Ne.height/N.height;xe<.5||Le<.5?et(null):et(J)}else et(null);ft([])}else et(null),ft([])},[]);_.useEffect(()=>{if(!j||fn||He)return;const w=C=>{var zn,$n;if(So.current){So.current=!1;return}const N=C.composedPath()[0]||C.target;if(Ko(N,"[data-feedback-toolbar]")||Ko(N,"[data-annotation-popup]")||Ko(N,"[data-annotation-marker]"))return;if(C.metaKey&&C.shiftKey&&!F&&!ce){C.preventDefault(),C.stopPropagation();const un=Cr(C.clientX,C.clientY);if(!un)return;const Ot=un.getBoundingClientRect(),{name:vt,path:Rt,reactComponents:In}=Cm(un,Ws),yn=Ln.findIndex(_o=>_o.element===un);yn>=0?xo(_o=>_o.filter((Ho,as)=>as!==yn)):xo(_o=>[..._o,{element:un,rect:Ot,name:vt,path:Rt,reactComponents:In!=null?In:void 0}]);return}const L=Ko(N,"button, a, input, select, textarea, [role='button'], [onclick]");if(Vt.blockInteractions&&L&&(C.preventDefault(),C.stopPropagation()),F){if(L&&!Vt.blockInteractions)return;C.preventDefault(),(zn=Ii.current)==null||zn.shake();return}if(ce){if(L&&!Vt.blockInteractions)return;C.preventDefault(),($n=Pi.current)==null||$n.shake();return}C.preventDefault();const W=Cr(C.clientX,C.clientY);if(!W)return;const{name:J,path:Ne,reactComponents:xe}=Cm(W,Ws),Le=W.getBoundingClientRect(),qe=C.clientX/window.innerWidth*100,tt=jm(W),pt=tt?C.clientY:C.clientY+window.scrollY,_t=window.getSelection();let ut;_t&&_t.toString().trim().length>0&&(ut=_t.toString().trim().slice(0,500));const ct=sd(W),Cn=od(W);_e({x:qe,y:pt,clientY:C.clientY,element:J,elementPath:Ne,selectedText:ut,boundingBox:{x:Le.left,y:tt?Le.top:Le.top+window.scrollY,width:Le.width,height:Le.height},nearbyText:lc(W),cssClasses:cc(W),isFixed:tt,fullPath:ad(W),accessibility:id(W),computedStyles:Cn,computedStylesObj:ct,nearbyElements:nd(W),reactComponents:xe!=null?xe:void 0,sourceFile:fd(W),targetElement:W}),pe(null)};return document.addEventListener("click",w,!0),()=>document.removeEventListener("click",w,!0)},[j,fn,He,F,ce,Vt.blockInteractions,Ws,Ln]),_.useEffect(()=>{if(!j)return;const w=L=>{L.key==="Meta"&&(_s.current.cmd=!0),L.key==="Shift"&&(_s.current.shift=!0)},C=L=>{const W=_s.current.cmd&&_s.current.shift;L.key==="Meta"&&(_s.current.cmd=!1),L.key==="Shift"&&(_s.current.shift=!1);const J=_s.current.cmd&&_s.current.shift;W&&!J&&Ln.length>0&&ke()},N=()=>{_s.current={cmd:!1,shift:!1},xo([])};return document.addEventListener("keydown",w),document.addEventListener("keyup",C),window.addEventListener("blur",N),()=>{document.removeEventListener("keydown",w),document.removeEventListener("keyup",C),window.removeEventListener("blur",N)}},[j,Ln,ke]),_.useEffect(()=>{if(!j||F||fn||He)return;const w=C=>{const N=C.composedPath()[0]||C.target;Ko(N,"[data-feedback-toolbar]")||Ko(N,"[data-annotation-marker]")||Ko(N,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(N.tagName)||N.isContentEditable||(C.preventDefault(),fo.current={x:C.clientX,y:C.clientY})};return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[j,F,fn,He]),_.useEffect(()=>{if(!j||F)return;const w=C=>{if(!fo.current)return;const N=C.clientX-fo.current.x,L=C.clientY-fo.current.y,W=N*N+L*L,J=Si*Si;if(!Ms&&W>=J&&(gs.current=fo.current,Xo(!0),C.preventDefault()),(Ms||W>=J)&&gs.current){if(Es.current){const vt=Math.min(gs.current.x,C.clientX),Rt=Math.min(gs.current.y,C.clientY),In=Math.abs(C.clientX-gs.current.x),yn=Math.abs(C.clientY-gs.current.y);Es.current.style.transform=`translate(${vt}px, ${Rt}px)`,Es.current.style.width=`${In}px`,Es.current.style.height=`${yn}px`}const Ne=Date.now();if(Ne-ho.current<ta)return;ho.current=Ne;const xe=gs.current.x,Le=gs.current.y,qe=Math.min(xe,C.clientX),tt=Math.min(Le,C.clientY),pt=Math.max(xe,C.clientX),_t=Math.max(Le,C.clientY),ut=(qe+pt)/2,ct=(tt+_t)/2,Cn=new Set,zn=[[qe,tt],[pt,tt],[qe,_t],[pt,_t],[ut,ct],[ut,tt],[ut,_t],[qe,ct],[pt,ct]];for(const[vt,Rt]of zn){const In=document.elementsFromPoint(vt,Rt);for(const yn of In)yn instanceof HTMLElement&&Cn.add(yn)}const $n=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const vt of $n)if(vt instanceof HTMLElement){const Rt=vt.getBoundingClientRect(),In=Rt.left+Rt.width/2,yn=Rt.top+Rt.height/2,_o=In>=qe&&In<=pt&&yn>=tt&&yn<=_t,Ho=Math.min(Rt.right,pt)-Math.max(Rt.left,qe),as=Math.min(Rt.bottom,_t)-Math.max(Rt.top,tt),ji=Ho>0&&as>0?Ho*as:0,Ui=Rt.width*Rt.height,Vi=Ui>0?ji/Ui:0;(_o||Vi>.5)&&Cn.add(vt)}const un=[],Ot=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const vt of Cn){if(Ko(vt,"[data-feedback-toolbar]")||Ko(vt,"[data-annotation-marker]"))continue;const Rt=vt.getBoundingClientRect();if(!(Rt.width>window.innerWidth*.8&&Rt.height>window.innerHeight*.5)&&!(Rt.width<10||Rt.height<10)&&Rt.left<pt&&Rt.right>qe&&Rt.top<_t&&Rt.bottom>tt){const In=vt.tagName;let yn=Ot.has(In);if(!yn&&(In==="DIV"||In==="SPAN")){const _o=vt.textContent&&vt.textContent.trim().length>0,Ho=vt.onclick!==null||vt.getAttribute("role")==="button"||vt.getAttribute("role")==="link"||vt.classList.contains("clickable")||vt.hasAttribute("data-clickable");(_o||Ho)&&!vt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(yn=!0)}if(yn){let _o=!1;for(const Ho of un)if(Ho.left<=Rt.left&&Ho.right>=Rt.right&&Ho.top<=Rt.top&&Ho.bottom>=Rt.bottom){_o=!0;break}_o||un.push(Rt)}}}if($o.current){const vt=$o.current;for(;vt.children.length>un.length;)vt.removeChild(vt.lastChild);un.forEach((Rt,In)=>{let yn=vt.children[In];yn||(yn=document.createElement("div"),yn.className=Ke.selectedElementHighlight,vt.appendChild(yn)),yn.style.transform=`translate(${Rt.left}px, ${Rt.top}px)`,yn.style.width=`${Rt.width}px`,yn.style.height=`${Rt.height}px`})}}};return document.addEventListener("mousemove",w,{passive:!0}),()=>document.removeEventListener("mousemove",w)},[j,F,Ms,Si]),_.useEffect(()=>{if(!j)return;const w=C=>{const N=Ms,L=gs.current;if(Ms&&L){So.current=!0;const W=Math.min(L.x,C.clientX),J=Math.min(L.y,C.clientY),Ne=Math.max(L.x,C.clientX),xe=Math.max(L.y,C.clientY),Le=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(ut=>{if(!(ut instanceof HTMLElement)||Ko(ut,"[data-feedback-toolbar]")||Ko(ut,"[data-annotation-marker]"))return;const ct=ut.getBoundingClientRect();ct.width>window.innerWidth*.8&&ct.height>window.innerHeight*.5||ct.width<10||ct.height<10||ct.left<Ne&&ct.right>W&&ct.top<xe&&ct.bottom>J&&Le.push({element:ut,rect:ct})});const tt=Le.filter(({element:ut})=>!Le.some(({element:ct})=>ct!==ut&&ut.contains(ct))),pt=C.clientX/window.innerWidth*100,_t=C.clientY+window.scrollY;if(tt.length>0){const ut=tt.reduce((Ot,{rect:vt})=>({left:Math.min(Ot.left,vt.left),top:Math.min(Ot.top,vt.top),right:Math.max(Ot.right,vt.right),bottom:Math.max(Ot.bottom,vt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),ct=tt.slice(0,5).map(({element:Ot})=>_l(Ot).name).join(", "),Cn=tt.length>5?` +${tt.length-5} more`:"",zn=tt[0].element,$n=sd(zn),un=od(zn);_e({x:pt,y:_t,clientY:C.clientY,element:`${tt.length} elements: ${ct}${Cn}`,elementPath:"multi-select",boundingBox:{x:ut.left,y:ut.top+window.scrollY,width:ut.right-ut.left,height:ut.bottom-ut.top},isMultiSelect:!0,fullPath:ad(zn),accessibility:id(zn),computedStyles:un,computedStylesObj:$n,nearbyElements:nd(zn),cssClasses:cc(zn),nearbyText:lc(zn),sourceFile:fd(zn)})}else{const ut=Math.abs(Ne-W),ct=Math.abs(xe-J);ut>20&&ct>20&&_e({x:pt,y:_t,clientY:C.clientY,element:"Area selection",elementPath:`region at (${Math.round(W)}, ${Math.round(J)})`,boundingBox:{x:W,y:J+window.scrollY,width:ut,height:ct},isMultiSelect:!0})}pe(null)}else N&&(So.current=!0);fo.current=null,gs.current=null,Xo(!1),$o.current&&($o.current.innerHTML="")};return document.addEventListener("mouseup",w),()=>document.removeEventListener("mouseup",w)},[j,Ms]);const Xe=_.useCallback(async(w,C,N)=>{const L=Vt.webhookUrl||S;if(!L||!Vt.webhooksEnabled&&!N)return!1;try{return(await fetch(L,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:w,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...C})})).ok}catch(W){return console.warn("[Agentation] Webhook failed:",W),!1}},[S,Vt.webhookUrl,Vt.webhooksEnabled]),Pt=_.useCallback(w=>{var N;if(!F)return;const C={id:Date.now().toString(),x:F.x,y:F.y,comment:w,element:F.element,elementPath:F.elementPath,timestamp:Date.now(),selectedText:F.selectedText,boundingBox:F.boundingBox,nearbyText:F.nearbyText,cssClasses:F.cssClasses,isMultiSelect:F.isMultiSelect,isFixed:F.isFixed,fullPath:F.fullPath,accessibility:F.accessibility,computedStyles:F.computedStyles,nearbyElements:F.nearbyElements,reactComponents:F.reactComponents,sourceFile:F.sourceFile,elementBoundingBoxes:F.elementBoundingBoxes,...g&&jn?{sessionId:jn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};z(L=>[...L,C]),Io.current=C.id,Ht(()=>{Io.current=null},300),Ht(()=>{wo(L=>new Set(L).add(C.id))},250),a==null||a(C),Xe("annotation.add",{annotation:C}),Wn(!0),Ht(()=>{_e(null),Wn(!1)},150),(N=window.getSelection())==null||N.removeAllRanges(),g&&jn&&cl(g,jn,C).then(L=>{L.id!==C.id&&(z(W=>W.map(J=>J.id===C.id?{...J,id:L.id}:J)),wo(W=>{const J=new Set(W);return J.delete(C.id),J.add(L.id),J}))}).catch(L=>{console.warn("[Agentation] Failed to sync annotation:",L)})},[F,a,Xe,g,jn]),$t=_.useCallback(()=>{Wn(!0),Ht(()=>{_e(null),Wn(!1)},150)},[]),qt=_.useCallback(w=>{const C=T.findIndex(L=>L.id===w),N=T[C];(ce==null?void 0:ce.id)===w&&(As(!0),Ht(()=>{nt(null),et(null),ft([]),As(!1)},150)),nn(w),An(L=>new Set(L).add(w)),N&&(c==null||c(N),Xe("annotation.delete",{annotation:N})),g&&tr(g,w).catch(L=>{console.warn("[Agentation] Failed to delete annotation from server:",L)}),Ht(()=>{z(L=>L.filter(W=>W.id!==w)),An(L=>{const W=new Set(L);return W.delete(w),W}),nn(null),C<T.length-1&&(Pe(C),Ht(()=>Pe(null),200))},150)},[T,ce,c,Xe,g]),Qt=_.useCallback(w=>{var C;if(!w){Qe(null),Dt(null),rt([]);return}if(Qe(w.id),(C=w.elementBoundingBoxes)!=null&&C.length){const N=[];for(const L of w.elementBoundingBoxes){const W=L.x+L.width/2,J=L.y+L.height/2-window.scrollY,xe=document.elementsFromPoint(W,J).find(Le=>!Le.closest("[data-annotation-marker]")&&!Le.closest("[data-agentation-root]"));xe&&N.push(xe)}rt(N),Dt(null)}else if(w.boundingBox){const N=w.boundingBox,L=N.x+N.width/2,W=w.isFixed?N.y+N.height/2:N.y+N.height/2-window.scrollY,J=Cr(L,W);if(J){const Ne=J.getBoundingClientRect(),xe=Ne.width/N.width,Le=Ne.height/N.height;xe<.5||Le<.5?Dt(null):Dt(J)}else Dt(null);rt([])}else Dt(null),rt([])},[]),on=_.useCallback(w=>{if(!ce)return;const C={...ce,comment:w};z(N=>N.map(L=>L.id===ce.id?C:L)),u==null||u(C),Xe("annotation.update",{annotation:C}),g&&jx(g,ce.id,{comment:w}).catch(N=>{console.warn("[Agentation] Failed to update annotation on server:",N)}),As(!0),Ht(()=>{nt(null),et(null),ft([]),As(!1)},150)},[ce,u,Xe,g]),gn=_.useCallback(()=>{As(!0),Ht(()=>{nt(null),et(null),ft([]),As(!1)},150)},[]),mn=_.useCallback(()=>{const w=T.length,C=ot.length>0||!!at;if(w===0&&ln.length===0&&!C)return;if(d==null||d(T),Xe("annotations.clear",{annotations:T}),g){Promise.all(T.map(W=>tr(g,W.id).catch(J=>{console.warn("[Agentation] Failed to delete annotation from server:",J)})));for(const[,W]of ks.current)W&&tr(g,W).catch(()=>{});ks.current.clear();for(const[,W]of ps.current)W&&tr(g,W).catch(()=>{});ps.current.clear()}$e(!0),be(!0),Bn([]);const N=ao.current;if(N){const W=N.getContext("2d");W&&W.clearRect(0,0,N.width,N.height)}(ot.length>0||at)&&(ds(W=>W+1),Ls(W=>W+1),Ht(()=>{kt([]),Tn(null)},200)),Ge&&xt(!1),vn&&Yn(""),os.current={rearrange:null,placements:[]},cd(Nt);const L=w*30+200;Ht(()=>{z([]),wo(new Set),localStorage.removeItem(zd(Nt)),$e(!1)},L),Ht(()=>be(!1),1500)},[Nt,T,ln,ot,at,Ge,vn,d,Xe,g]),$s=_.useCallback(async()=>{const w=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Nt,C=He&&Ge;let N;if(C){if(ot.length===0&&!at&&!vn)return;N=""}else{if(N=Tx(T,w,Vt.outputDetail),!N&&ln.length===0&&ot.length===0&&!at)return;N||(N=`## Page Feedback: ${w}
`)}if(!C&&ln.length>0){const L=new Set;for(const xe of T)xe.drawingIndex!=null&&L.add(xe.drawingIndex);const W=ao.current;W&&(W.style.visibility="hidden");const J=[],Ne=window.scrollY;for(let xe=0;xe<ln.length;xe++){if(L.has(xe))continue;const Le=ln[xe];if(Le.points.length<2)continue;const qe=Le.fixed?Le.points:Le.points.map(Zn=>({x:Zn.x,y:Zn.y-Ne}));let tt=1/0,pt=1/0,_t=-1/0,ut=-1/0;for(const Zn of qe)tt=Math.min(tt,Zn.x),pt=Math.min(pt,Zn.y),_t=Math.max(_t,Zn.x),ut=Math.max(ut,Zn.y);const ct=_t-tt,Cn=ut-pt,zn=Math.hypot(ct,Cn),$n=qe[0],un=qe[qe.length-1],Ot=Math.hypot(un.x-$n.x,un.y-$n.y);let vt;const Rt=Ot<zn*.35,In=ct/Math.max(Cn,1);if(Rt&&zn>20){const Zn=Math.max(ct,Cn)*.15;let Yi=0;for(const na of qe){const Pc=na.x-tt<Zn,Xd=_t-na.x<Zn,Gd=na.y-pt<Zn,qd=ut-na.y<Zn;(Pc||Xd)&&(Gd||qd)&&Yi++}vt=Yi>qe.length*.15?"box":"circle"}else In>3&&Cn<40?vt="underline":Ot>zn*.5?vt="arrow":vt="drawing";const yn=Math.min(10,qe.length),_o=Math.max(1,Math.floor(qe.length/yn)),Ho=new Set,as=[],ji=[$n];for(let Zn=_o;Zn<qe.length-1;Zn+=_o)ji.push(qe[Zn]);ji.push(un);for(const Zn of ji){const Yi=Cr(Zn.x,Zn.y);if(!Yi||Ho.has(Yi)||Ko(Yi,"[data-feedback-toolbar]"))continue;Ho.add(Yi);const{name:na}=_l(Yi);as.includes(na)||as.push(na)}const Ui=`${Math.round(tt)},${Math.round(pt)} → ${Math.round(_t)},${Math.round(ut)}`;let Vi;(vt==="circle"||vt==="box")&&as.length>0?Vi=`${vt==="box"?"Boxed":"Circled"} **${as[0]}**${as.length>1?` (and ${as.slice(1).join(", ")})`:""} (region: ${Ui})`:vt==="underline"&&as.length>0?Vi=`Underlined **${as[0]}** (${Ui})`:vt==="arrow"&&as.length>=2?Vi=`Arrow from **${as[0]}** to **${as[as.length-1]}** (${Math.round($n.x)},${Math.round($n.y)} → ${Math.round(un.x)},${Math.round(un.y)})`:as.length>0?Vi=`${vt==="arrow"?"Arrow":"Drawing"} near **${as.join("**, **")}** (region: ${Ui})`:Vi=`Drawing at ${Ui}`,J.push(Vi)}W&&(W.style.visibility=""),J.length>0&&(N+=`
**Drawings:**
`,J.forEach((xe,Le)=>{N+=`${Le+1}. ${xe}
`}))}if((ot.length>0||C&&vn)&&(N+=`
`+wx(ot,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Ge,wireframePurpose:vn||void 0},Vt.outputDetail)),at){const L=Sx(at,Vt.outputDetail,{width:window.innerWidth,height:window.innerHeight});L&&(N+=`
`+L)}if(y)try{await navigator.clipboard.writeText(N)}catch{}h==null||h(N),I(!0),Ht(()=>I(!1),2e3),Vt.autoClearAfterCopy&&Ht(()=>mn(),500)},[T,ln,ot,at,Ge,He,Mn,vn,Nt,Vt.outputDetail,Ws,Vt.autoClearAfterCopy,mn,y,h]),Wt=_.useCallback(async()=>{const w=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Nt;let C=Tx(T,w,Vt.outputDetail);if(!C&&ot.length===0&&!at)return;if(C||(C=`## Page Feedback: ${w}
`),ot.length>0&&(C+=`
`+wx(ot,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Ge,wireframePurpose:vn||void 0},Vt.outputDetail)),at){const L=Sx(at,Vt.outputDetail,{width:window.innerWidth,height:window.innerHeight});L&&(C+=`
`+L)}p&&p(C,T),se("sending"),await new Promise(L=>Ht(L,150));const N=await Xe("submit",{output:C,annotations:T},!0);se(N?"sent":"failed"),Ht(()=>se("idle"),2500),N&&Vt.autoClearAfterCopy&&Ht(()=>mn(),500)},[p,Xe,T,ot,at,Ge,Mn,Nt,Vt.outputDetail,Ws,Vt.autoClearAfterCopy,mn]);_.useEffect(()=>{if(!js)return;const w=10,C=L=>{const W=L.clientX-js.x,J=L.clientY-js.y,Ne=Math.sqrt(W*W+J*J);if(!zs&&Ne>w&&co(!0),zs||Ne>w){let xe=js.toolbarX+W,Le=js.toolbarY+J;const qe=20,tt=337,pt=44,ut=tt-(j?ws==="connected"?297:257:44),ct=qe-ut,Cn=window.innerWidth-qe-tt;xe=Math.max(ct,Math.min(Cn,xe)),Le=Math.max(qe,Math.min(window.innerHeight-pt-qe,Le)),Fs({x:xe,y:Le})}},N=()=>{zs&&(Xs.current=!0),co(!1),zo(null)};return document.addEventListener("mousemove",C),document.addEventListener("mouseup",N),()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",N)}},[js,zs,j,ws]);const is=_.useCallback(w=>{var J,Ne;if(w.target.closest("button")||w.target.closest("[data-agentation-settings-panel]"))return;const C=w.currentTarget.parentElement;if(!C)return;const N=C.getBoundingClientRect(),L=(J=cn==null?void 0:cn.x)!=null?J:N.left,W=(Ne=cn==null?void 0:cn.y)!=null?Ne:N.top;zo({x:w.clientX,y:w.clientY,toolbarX:L,toolbarY:W})},[cn]);if(_.useEffect(()=>{if(!cn)return;const w=()=>{let W=cn.x,J=cn.y;const Le=20-(337-(j?ws==="connected"?297:257:44)),qe=window.innerWidth-20-337;W=Math.max(Le,Math.min(qe,W)),J=Math.max(20,Math.min(window.innerHeight-44-20,J)),(W!==cn.x||J!==cn.y)&&Fs({x:W,y:J})};return w(),window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)},[cn,j,ws]),_.useEffect(()=>{const w=C=>{const N=C.target,L=N.tagName==="INPUT"||N.tagName==="TEXTAREA"||N.isContentEditable;if(C.key==="Escape"){if(He){Bt?yt(null):Go();return}if(fn){rn(!1);return}if(Ln.length>0){xo([]);return}F||j&&(Qn(),E(!1))}if((C.metaKey||C.ctrlKey)&&C.shiftKey&&(C.key==="f"||C.key==="F")){C.preventDefault(),Qn(),j?fi():E(!0);return}if(!(L||C.metaKey||C.ctrlKey)&&((C.key==="p"||C.key==="P")&&(C.preventDefault(),Qn(),de()),(C.key==="l"||C.key==="L")&&(C.preventDefault(),Qn(),fn&&rn(!1),je&&ue(!1),F&&$t(),He?Go():gt(!0)),(C.key==="h"||C.key==="H")&&T.length>0&&(C.preventDefault(),Qn(),R(W=>!W)),(C.key==="c"||C.key==="C")&&(T.length>0||ot.length>0||at)&&(C.preventDefault(),Qn(),$s()),(C.key==="x"||C.key==="X")&&(T.length>0||ot.length>0||at)&&(C.preventDefault(),Qn(),mn(),ot.length>0&&kt([]),at&&Tn(null)),C.key==="s"||C.key==="S")){const W=ra(Vt.webhookUrl)||ra(S||"");T.length>0&&W&&me==="idle"&&(C.preventDefault(),Qn(),Wt())}};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[j,fn,He,Bt,ot,at,F,T.length,Vt.webhookUrl,S,me,Wt,de,$s,mn,Ln]),!it||q)return null;const Ss=T.length>0,ys=T.filter(w=>!On.has(w.id)&&w.kind!=="placement"&&w.kind!=="rearrange"),mo=ys.length>0,Gs=T.filter(w=>On.has(w.id)),Is=w=>{const J=w.x/100*window.innerWidth,Ne=typeof w.y=="string"?parseFloat(w.y):w.y,xe={};window.innerHeight-Ne-22-10<80&&(xe.top="auto",xe.bottom="calc(100% + 10px)");const qe=J-200/2,tt=10;if(qe<tt){const pt=tt-qe;xe.left=`calc(50% + ${pt}px)`}else if(qe+200>window.innerWidth-tt){const pt=qe+200-(window.innerWidth-tt);xe.left=`calc(50% - ${pt}px)`}return xe};return Ic.createPortal(l.jsxs("div",{ref:ee,style:{display:"contents"},"data-agentation-theme":Ts?"dark":"light","data-agentation-accent":Vt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${Ke.toolbar}${k?` ${k}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:cn?{left:cn.x,top:cn.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${Ke.toolbarContainer} ${j?Ke.expanded:Ke.collapsed} ${wi?Ke.entrance:""} ${K?Ke.hiding:""} ${!Vt.webhooksEnabled&&(ra(Vt.webhookUrl)||ra(S||""))?Ke.serverConnected:""}`,onClick:j?void 0:w=>{if(Xs.current){Xs.current=!1,w.preventDefault();return}E(!0)},onMouseDown:is,role:j?void 0:"button",tabIndex:j?-1:0,title:j?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${Ke.toggleContent} ${j?Ke.hidden:Ke.visible}`,children:[l.jsx($k,{size:24}),mo&&l.jsx("span",{className:`${Ke.badge} ${j?Ke.fadeOut:""} ${wi?Ke.entrance:""}`,children:ys.length})]}),l.jsxs("div",{className:`${Ke.controlsContent} ${j?Ke.visible:Ke.hidden} ${cn&&cn.y<100?Ke.tooltipBelow:""} ${ht||je?Ke.tooltipsHidden:""} ${ui?Ke.tooltipsInSession:""}`,onMouseEnter:Mo,onMouseLeave:Yo,children:[l.jsxs("div",{className:`${Ke.buttonWrapper} ${cn&&cn.x<120?Ke.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:Ke.controlButton,onClick:w=>{w.stopPropagation(),Qn(),de()},"data-active":te,children:l.jsx(Vk,{size:24,isPaused:te})}),l.jsxs("span",{className:Ke.buttonTooltip,children:[te?"Resume animations":"Pause animations",l.jsx("span",{className:Ke.shortcut,children:"P"})]})]}),l.jsxs("div",{className:Ke.buttonWrapper,children:[l.jsx("button",{className:`${Ke.controlButton} ${Ts?"":Ke.light}`,onClick:w=>{w.stopPropagation(),Qn(),fn&&rn(!1),je&&ue(!1),F&&$t(),He?Go():gt(!0)},"data-active":He,style:He&&Ge?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(Zk,{size:21})}),l.jsxs("span",{className:Ke.buttonTooltip,children:[He?"Exit layout mode":"Layout mode",l.jsx("span",{className:Ke.shortcut,children:"L"})]})]}),l.jsxs("div",{className:Ke.buttonWrapper,children:[l.jsx("button",{className:Ke.controlButton,onClick:w=>{w.stopPropagation(),Qn(),R(!O)},disabled:!Ss||He,children:l.jsx(Uk,{size:24,isOpen:O})}),l.jsxs("span",{className:Ke.buttonTooltip,children:[O?"Hide markers":"Show markers",l.jsx("span",{className:Ke.shortcut,children:"H"})]})]}),l.jsxs("div",{className:Ke.buttonWrapper,children:[l.jsx("button",{className:`${Ke.controlButton} ${Te?Ke.statusShowing:""}`,onClick:w=>{w.stopPropagation(),Qn(),$s()},disabled:He&&Ge?ot.length===0&&!((qs=at==null?void 0:at.sections)!=null&&qs.length):!Ss&&ln.length===0&&ot.length===0&&!((po=at==null?void 0:at.sections)!=null&&po.length),"data-active":Te,children:l.jsx(Pk,{size:24,copied:Te,tint:He&&Ge&&(ot.length>0||(B=at==null?void 0:at.sections)!=null&&B.length)?"#f97316":void 0})}),l.jsxs("span",{className:Ke.buttonTooltip,children:[He&&Ge?"Copy layout":"Copy feedback",l.jsx("span",{className:Ke.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${Ke.buttonWrapper} ${Ke.sendButtonWrapper} ${j&&!Vt.webhooksEnabled&&(ra(Vt.webhookUrl)||ra(S||""))?Ke.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${Ke.controlButton} ${me==="sent"||me==="failed"?Ke.statusShowing:""}`,onClick:w=>{w.stopPropagation(),Qn(),Wt()},disabled:!Ss||!ra(Vt.webhookUrl)&&!ra(S||"")||me==="sending","data-no-hover":me==="sent"||me==="failed",tabIndex:ra(Vt.webhookUrl)||ra(S||"")?0:-1,children:[l.jsx(Hk,{size:24,state:me}),Ss&&me==="idle"&&l.jsx("span",{className:Ke.buttonBadge,children:T.length})]}),l.jsxs("span",{className:Ke.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:Ke.shortcut,children:"S"})]})]}),l.jsxs("div",{className:Ke.buttonWrapper,children:[l.jsx("button",{className:Ke.controlButton,onClick:w=>{w.stopPropagation(),Qn(),mn()},disabled:!Ss&&ln.length===0&&ot.length===0&&!((X=at==null?void 0:at.sections)!=null&&X.length),"data-danger":!0,children:l.jsx(Wk,{size:24})}),l.jsxs("span",{className:Ke.buttonTooltip,children:["Clear all",l.jsx("span",{className:Ke.shortcut,children:"X"})]})]}),l.jsxs("div",{className:Ke.buttonWrapper,children:[l.jsx("button",{className:Ke.controlButton,onClick:w=>{w.stopPropagation(),Qn(),He&&Go(),ue(!je)},children:l.jsx(Yk,{size:24})}),g&&ws!=="disconnected"&&l.jsx("span",{className:`${Ke.mcpIndicator} ${Ke[ws]} ${je?Ke.hidden:""}`,title:ws==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:Ke.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:Ke.divider}),l.jsxs("div",{className:`${Ke.buttonWrapper} ${cn&&typeof window<"u"&&cn.x>window.innerWidth-120?Ke.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:Ke.controlButton,onClick:w=>{w.stopPropagation(),Qn(),fi()},children:l.jsx(Fk,{size:24})}),l.jsxs("span",{className:Ke.buttonTooltip,children:["Exit",l.jsx("span",{className:Ke.shortcut,children:"Esc"})]})]})]}),l.jsx(Mj,{visible:He&&j,activeType:Bt,onSelect:w=>{yt(Bt===w?null:w)},isDarkMode:Ts,sectionCount:(G=at==null?void 0:at.sections.length)!=null?G:0,onDetectSections:()=>{var Ne,xe;const w=$j(),C=(Ne=at==null?void 0:at.sections)!=null?Ne:[],N=new Set(C.map(Le=>Le.selector)),L=w.filter(Le=>!N.has(Le.selector)),W=[...C,...L],J=[...(xe=at==null?void 0:at.originalOrder)!=null?xe:[],...L.map(Le=>Le.id)];Tn({sections:W,originalOrder:J,detectedAt:Date.now()})},placementCount:ot.length,onClearPlacements:()=>{ds(w=>w+1),Ls(w=>w+1),Ht(()=>{Tn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:Ge,onBlankCanvasChange:w=>{const C={sections:[],originalOrder:[],detectedAt:Date.now()};w?(Kn.current={rearrange:at,placements:ot},Tn(os.current.rearrange||C),kt(os.current.placements),yt(null)):(os.current={rearrange:at,placements:ot},Tn(Kn.current.rearrange||C),kt(Kn.current.placements)),xt(w)},wireframePurpose:vn,onWireframePurposeChange:Yn,Tooltip:Er,onDragStart:(w,C)=>{var pt;C.preventDefault();const N=bt[w];let L=null,W=!1;const J=C.clientX,Ne=C.clientY,xe=C.target.closest("[data-feedback-toolbar]"),Le=(pt=xe==null?void 0:xe.getBoundingClientRect().top)!=null?pt:window.innerHeight,qe=_t=>{const ut=_t.clientX-J,ct=_t.clientY-Ne;if(!W&&(Math.abs(ut)>4||Math.abs(ct)>4)&&(W=!0,L=document.createElement("div"),L.className=`${Oe.dragPreview}${Ge?` ${Oe.dragPreviewWireframe}`:""}`,document.body.appendChild(L)),!L)return;const Cn=Math.max(0,Le-_t.clientY),zn=Math.min(1,Cn/180),$n=1-Math.pow(1-zn,2),un=28,Ot=20,vt=Math.min(140,N.width*.18),Rt=Math.min(90,N.height*.18),In=un+(vt-un)*$n,yn=Ot+(Rt-Ot)*$n;L.style.width=`${In}px`,L.style.height=`${yn}px`,L.style.left=`${_t.clientX-In/2}px`,L.style.top=`${_t.clientY-yn/2}px`,L.style.opacity=`${.5+.5*$n}`,L.textContent=$n>.25?w:""},tt=_t=>{if(window.removeEventListener("mousemove",qe),window.removeEventListener("mouseup",tt),L&&document.body.removeChild(L),W){const ut=N.width,ct=N.height,Cn=window.scrollY,zn=Math.max(0,_t.clientX-ut/2),$n=Math.max(0,_t.clientY+Cn-ct/2),un={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:w,x:zn,y:$n,width:ut,height:ct,scrollY:Cn,timestamp:Date.now()};kt(Ot=>[...Ot,un]),yt(null),jo.current=new Set,us(Ot=>Ot+1)}};window.addEventListener("mousemove",qe),window.addEventListener("mouseup",tt)}}),l.jsx(XM,{settings:Vt,onSettingsChange:w=>lo(C=>({...C,...w})),isDarkMode:Ts,onToggleTheme:Os,isDevMode:Fo,connectionStatus:ws,endpoint:g,isVisible:Ee,toolbarNearBottom:!!cn&&cn.y<230,settingsPage:Se,onSettingsPageChange:Je,onHideToolbar:Hi})]})}),(He||Ct)&&l.jsx("div",{className:`${Oe.blankCanvas} ${Kt?Oe.visible:""} ${Gt?Oe.gridActive:""}`,style:{"--canvas-opacity":sn},"data-feedback-toolbar":!0}),He&&Ge&&Kt&&l.jsxs("div",{className:Oe.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:Oe.wireframeOpacityRow,children:[l.jsx("span",{className:Oe.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:Oe.wireframeOpacitySlider,min:0,max:1,step:.01,value:sn,onChange:w=>qn(Number(w.target.value))})]}),l.jsxs("div",{className:Oe.wireframeNoticeTitleRow,children:[l.jsx("span",{className:Oe.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:Oe.wireframeNoticeDivider}),l.jsx("button",{className:Oe.wireframeStartOver,onClick:()=>{ds(w=>w+1),Tn({sections:[],originalOrder:[],detectedAt:Date.now()}),os.current={rearrange:null,placements:[]},Yn(""),cd(Nt)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(He||Ct)&&l.jsx(wj,{placements:ot,onChange:kt,activeComponent:Ct?null:Bt,onActiveComponentChange:yt,isDarkMode:Ts,exiting:Ct,onInteractionChange:En,passthrough:!Bt,extraSnapRects:at==null?void 0:at.sections.map(w=>w.currentRect),deselectSignal:cs,clearSignal:so,wireframe:Ge,onSelectionChange:(w,C)=>{jo.current=w,C||(kn.current=new Set,no(N=>N+1))},onDragMove:(w,C)=>{const N=kn.current;if(!(!N.size||!at)){if(!Rn.current){Rn.current=new Map;for(const L of at.sections)N.has(L.id)&&Rn.current.set(L.id,{x:L.currentRect.x,y:L.currentRect.y})}for(const L of at.sections){if(!N.has(L.id)||!Rn.current.get(L.id))continue;const J=document.querySelector(`[data-rearrange-section="${L.id}"]`);J&&(J.style.transform=`translate(${w}px, ${C}px)`)}}},onDragEnd:(w,C,N)=>{const L=kn.current,W=Rn.current;if(Rn.current=null,!(!L.size||!at||!W)){for(const J of L){const Ne=document.querySelector(`[data-rearrange-section="${J}"]`);Ne&&(Ne.style.transform="")}N&&Tn(J=>J&&{...J,sections:J.sections.map(Ne=>{const xe=W.get(Ne.id);return xe?{...Ne,currentRect:{...Ne.currentRect,x:Math.max(0,xe.x+w),y:Math.max(0,xe.y+C)}}:Ne})})}}}),(He||Ct)&&at&&l.jsx(Hj,{rearrangeState:at,onChange:Tn,isDarkMode:Ts,exiting:Ct,blankCanvas:Ge,extraSnapRects:ot.map(w=>({x:w.x,y:w.y,width:w.width,height:w.height})),clearSignal:Un,deselectSignal:Vs,onSelectionChange:(w,C)=>{kn.current=w,C||(jo.current=new Set,us(N=>N+1))},onDragMove:(w,C)=>{const N=jo.current;if(N.size){if(!Rn.current){Rn.current=new Map;for(const L of ot)N.has(L.id)&&Rn.current.set(L.id,{x:L.x,y:L.y})}for(const L of N){const W=document.querySelector(`[data-design-placement="${L}"]`);W&&(W.style.transform=`translate(${w}px, ${C}px)`)}}},onDragEnd:(w,C,N)=>{const L=jo.current,W=Rn.current;if(Rn.current=null,!(!L.size||!W)){for(const J of L){const Ne=document.querySelector(`[data-design-placement="${J}"]`);Ne&&(Ne.style.transform="")}N&&kt(J=>J.map(Ne=>{const xe=W.get(Ne.id);return xe?{...Ne,x:Math.max(0,xe.x+w),y:Math.max(0,xe.y+C)}:Ne}))}}}),l.jsx("canvas",{ref:ao,className:`${Ke.drawCanvas} ${fn?Ke.active:""}`,style:{opacity:Ci?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:Ke.markersLayer,"data-feedback-toolbar":!0,children:[ae&&ys.filter(w=>!w.isFixed).map((w,C,N)=>l.jsx(Ax,{annotation:w,globalIndex:ys.findIndex(L=>L.id===w.id),layerIndex:C,layerSize:N.length,isExiting:Ae,isClearing:Re,isAnimated:Ao.has(w.id),isHovered:!Ae&&Ue===w.id,isDeleting:Tt===w.id,isEditingAny:!!ce,renumberFrom:Xt,markerClickBehavior:Vt.markerClickBehavior,tooltipStyle:Is(w),onHoverEnter:L=>!Ae&&L.id!==Io.current&&Qt(L),onHoverLeave:()=>Qt(null),onClick:L=>Vt.markerClickBehavior==="delete"?qt(L.id):Ye(L),onContextMenu:Ye},w.id)),ae&&!Ae&&Gs.filter(w=>!w.isFixed).map(w=>l.jsx(Nx,{annotation:w},w.id))]}),l.jsxs("div",{className:Ke.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[ae&&ys.filter(w=>w.isFixed).map((w,C,N)=>l.jsx(Ax,{annotation:w,globalIndex:ys.findIndex(L=>L.id===w.id),layerIndex:C,layerSize:N.length,isExiting:Ae,isClearing:Re,isAnimated:Ao.has(w.id),isHovered:!Ae&&Ue===w.id,isDeleting:Tt===w.id,isEditingAny:!!ce,renumberFrom:Xt,markerClickBehavior:Vt.markerClickBehavior,tooltipStyle:Is(w),onHoverEnter:L=>!Ae&&L.id!==Io.current&&Qt(L),onHoverLeave:()=>Qt(null),onClick:L=>Vt.markerClickBehavior==="delete"?qt(L.id):Ye(L),onContextMenu:Ye},w.id)),ae&&!Ae&&Gs.filter(w=>w.isFixed).map(w=>l.jsx(Nx,{annotation:w,fixed:!0},w.id))]}),j&&l.jsxs("div",{className:Ke.overlay,"data-feedback-toolbar":!0,style:F||ce?{zIndex:99999}:void 0,children:[(ne==null?void 0:ne.rect)&&!F&&!St&&!Ms&&l.jsx("div",{className:`${Ke.hoverHighlight} ${Ke.enter}`,style:{left:ne.rect.left,top:ne.rect.top,width:ne.rect.width,height:ne.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Ln.filter(w=>document.contains(w.element)).map((w,C)=>{const N=w.element.getBoundingClientRect(),L=Ln.length>1;return l.jsx("div",{className:L?Ke.multiSelectOutline:Ke.singleSelectOutline,style:{position:"fixed",left:N.left,top:N.top,width:N.width,height:N.height,...L?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},C)}),Ue&&!F&&(()=>{var W;const w=T.find(J=>J.id===Ue);if(!(w!=null&&w.boundingBox))return null;if((W=w.elementBoundingBoxes)!=null&&W.length)return Fe.length>0?Fe.filter(J=>document.contains(J)).map((J,Ne)=>{const xe=J.getBoundingClientRect();return l.jsx("div",{className:`${Ke.multiSelectOutline} ${Ke.enter}`,style:{left:xe.left,top:xe.top,width:xe.width,height:xe.height}},`hover-outline-live-${Ne}`)}):w.elementBoundingBoxes.map((J,Ne)=>l.jsx("div",{className:`${Ke.multiSelectOutline} ${Ke.enter}`,style:{left:J.x,top:J.y-dt,width:J.width,height:J.height}},`hover-outline-${Ne}`));const C=Lt&&document.contains(Lt)?Lt.getBoundingClientRect():null,N=C?{x:C.left,y:C.top,width:C.width,height:C.height}:{x:w.boundingBox.x,y:w.isFixed?w.boundingBox.y:w.boundingBox.y-dt,width:w.boundingBox.width,height:w.boundingBox.height},L=w.isMultiSelect;return l.jsx("div",{className:`${L?Ke.multiSelectOutline:Ke.singleSelectOutline} ${Ke.enter}`,style:{left:N.x,top:N.y,width:N.width,height:N.height,...L?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),ne&&!F&&!St&&!Ms&&l.jsxs("div",{className:`${Ke.hoverTooltip} ${Ke.enter}`,style:{left:Math.max(8,Math.min(P.x,window.innerWidth-100)),top:Math.max(P.y-(ne.reactComponents?48:32),8)},children:[ne.reactComponents&&l.jsx("div",{className:Ke.hoverReactPath,children:ne.reactComponents}),l.jsx("div",{className:Ke.hoverElementName,children:ne.elementName})]}),F&&l.jsxs(l.Fragment,{children:[(D=F.multiSelectElements)!=null&&D.length?F.multiSelectElements.filter(w=>document.contains(w)).map((w,C)=>{const N=w.getBoundingClientRect();return l.jsx("div",{className:`${Ke.multiSelectOutline} ${Vn?Ke.exit:Ke.enter}`,style:{left:N.left,top:N.top,width:N.width,height:N.height}},`pending-multi-${C}`)}):F.targetElement&&document.contains(F.targetElement)?(()=>{const w=F.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${Ke.singleSelectOutline} ${Vn?Ke.exit:Ke.enter}`,style:{left:w.left,top:w.top,width:w.width,height:w.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():F.boundingBox&&l.jsx("div",{className:`${F.isMultiSelect?Ke.multiSelectOutline:Ke.singleSelectOutline} ${Vn?Ke.exit:Ke.enter}`,style:{left:F.boundingBox.x,top:F.boundingBox.y-dt,width:F.boundingBox.width,height:F.boundingBox.height,...F.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const w=F.x,C=F.isFixed?F.y:F.y-dt;return l.jsxs(l.Fragment,{children:[l.jsx(zM,{x:w,y:C,isMultiSelect:F.isMultiSelect,isExiting:Vn}),l.jsx(Ld,{ref:Ii,element:F.element,selectedText:F.selectedText,computedStyles:F.computedStylesObj,placeholder:F.element==="Area selection"?"What should change in this area?":F.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Pt,onCancel:$t,isExiting:Vn,lightMode:!Ts,accentColor:F.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,w/100*window.innerWidth)),...C>window.innerHeight-290?{bottom:window.innerHeight-C+20}:{top:C+20}}})]})})()]}),ce&&l.jsxs(l.Fragment,{children:[(Z=ce.elementBoundingBoxes)!=null&&Z.length?Ze.length>0?Ze.filter(w=>document.contains(w)).map((w,C)=>{const N=w.getBoundingClientRect();return l.jsx("div",{className:`${Ke.multiSelectOutline} ${Ke.enter}`,style:{left:N.left,top:N.top,width:N.width,height:N.height}},`edit-multi-live-${C}`)}):ce.elementBoundingBoxes.map((w,C)=>l.jsx("div",{className:`${Ke.multiSelectOutline} ${Ke.enter}`,style:{left:w.x,top:w.y-dt,width:w.width,height:w.height}},`edit-multi-${C}`)):(()=>{const w=st&&document.contains(st)?st.getBoundingClientRect():null,C=w?{x:w.left,y:w.top,width:w.width,height:w.height}:ce.boundingBox?{x:ce.boundingBox.x,y:ce.isFixed?ce.boundingBox.y:ce.boundingBox.y-dt,width:ce.boundingBox.width,height:ce.boundingBox.height}:null;return C?l.jsx("div",{className:`${ce.isMultiSelect?Ke.multiSelectOutline:Ke.singleSelectOutline} ${Ke.enter}`,style:{left:C.x,top:C.y,width:C.width,height:C.height,...ce.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(Ld,{ref:Pi,element:ce.element,selectedText:ce.selectedText,computedStyles:Bj(ce.computedStyles),placeholder:"Edit your feedback...",initialValue:ce.comment,submitLabel:"Save",onSubmit:on,onCancel:gn,onDelete:()=>qt(ce.id),isExiting:uo,lightMode:!Ts,accentColor:ce.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const w=ce.isFixed?ce.y:ce.y-dt;return{left:Math.max(160,Math.min(window.innerWidth-160,ce.x/100*window.innerWidth)),...w>window.innerHeight-290?{bottom:window.innerHeight-w+20}:{top:w+20}}})()})]}),Ms&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:Es,className:Ke.dragSelection}),l.jsx("div",{ref:$o,className:Ke.highlightsContainer})]})]})]}),document.body)}var KM=Object.freeze({}),QM=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[S,k]of Object.entries(h))p[S]=this.normalizePreservedValue(c.values[S],k,d.get(S));this.initTransitionModes(i,"",p);for(const[S,k]of Object.entries(c.values)){if(!S.endsWith(".__mode"))continue;const j=S.slice(0,-7),E=d.get(j);(E==null?void 0:E.type)==="transition"&&(p[S]=k)}const y={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,y),this.snapshots.set(t,{...p});const g=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[S,k]of Object.entries(h))x[S]=this.normalizePreservedValue(g[S],k,d.get(S));for(const[S,k]of Object.entries(p))S.endsWith(".__mode")&&(x[S]=k);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:KM}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),y=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:y});else if(typeof d=="number"){const{min:g,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:g,max:x,step:b,shortcut:y})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:y});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const g=d,x="_collapsed"in g?!g._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(g,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const y=h.options[0],g=typeof y=="string"?y:y.value;i[p]=(a=h.default)!=null?a:g}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},Jt=new QM;function ZM(t,n,i){const a=_.useId(),c=`${t}-${a}`,u=_.useRef(n),d=JSON.stringify(n);u.current=n;const h=_.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=_.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const y=JSON.stringify(i==null?void 0:i.shortcuts);_.useEffect(()=>(Jt.registerPanel(c,t,u.current,p.current),()=>Jt.unregisterPanel(c)),[c,t]);const g=_.useRef(!1);_.useEffect(()=>{if(!g.current){g.current=!0;return}Jt.updatePanel(c,t,u.current,p.current)},[c,t,d,y]),_.useEffect(()=>Jt.subscribeActions(c,b=>{var S;(S=h.current)==null||S.call(h,b)}),[c]);const x=_.useSyncExternalStore(b=>Jt.subscribe(c,b),()=>Jt.getValues(c),()=>Jt.getValues(c));return f2(n,x,"")}function f2(t,n,i){var c,u,d,h,p,y,g,x,b,S;const a={};for(const[k,j]of Object.entries(t)){if(k==="_collapsed")continue;const E=i?`${i}.${k}`:k;if(Array.isArray(j)&&j.length<=4&&typeof j[0]=="number")a[k]=(c=n[E])!=null?c:j[0];else if(typeof j=="number"||typeof j=="boolean"||typeof j=="string")a[k]=(u=n[E])!=null?u:j;else if(JM(j)||e7(j))a[k]=(d=n[E])!=null?d:j;else if(t7(j))a[k]=(h=n[E])!=null?h:j;else if(n7(j)){const T=(p=j.default)!=null?p:i7(j.options);a[k]=(y=n[E])!=null?y:T}else s7(j)?a[k]=(x=(g=n[E])!=null?g:j.default)!=null?x:"#000000":o7(j)?a[k]=(S=(b=n[E])!=null?b:j.default)!=null?S:"":typeof j=="object"&&j!==null&&(a[k]=f2(j,n,E))}return a}function kl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function JM(t){return kl(t,"spring")}function e7(t){return kl(t,"easing")}function t7(t){return kl(t,"action")}function n7(t){return kl(t,"select")&&"options"in t&&Array.isArray(t.options)}function s7(t){return kl(t,"color")}function o7(t){return kl(t,"text")}function i7(t){const n=t[0];return typeof n=="string"?n:n.value}function up(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function kd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(up(n)))}function mc(t,n){var d,h,p,y;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(y=t.step)!=null?y:1}function pc(t,n,i,a,c){var y,g;const u=Jt.getValue(t,n),d=(y=i.min)!=null?y:0,h=(g=i.max)!=null?g:1,p=Math.max(d,Math.min(h,u+c*a));Jt.updateValue(t,n,kd(p,a))}function a7(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function hd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function Mm(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function h2(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=h2(i.children,n);if(a)return a}}return null}var md=4;function r7(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function l7(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=r7(n);return t.key?`${m2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function c7(t){return t.key?`${m2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function m2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var p2=_.createContext({activePanelId:null,activePath:null});function u7({children:t}){const[n,i]=_.useState({activePanelId:null,activePath:null}),a=_.useRef(new Set),c=_.useRef(!1),u=_.useRef(null),d=_.useRef(0),h=_.useCallback(p=>{var y;for(const g of a.current){const x=Jt.getPanels();for(const b of x)for(const[S,k]of Object.entries(b.shortcuts)){if(!k.key||k.key.toLowerCase()!==g||((y=k.interaction)!=null?y:"scroll")!==p)continue;const j=h2(b.controls,S);if(j&&j.type==="slider")return{panelId:b.id,path:S,control:j,shortcut:k}}}return null},[]);return _.useEffect(()=>{const p=j=>{if(hd())return;const E=j.key.toLowerCase();if((E==="arrowleft"||E==="arrowright"||E==="arrowup"||E==="arrowdown")&&a.current.size>0){const R=h("scroll")||h("drag")||h("move");if(R&&R.control.type==="slider"){j.preventDefault();const q=E==="arrowright"||E==="arrowup"?1:-1,Y=mc(R.control,R.shortcut);pc(R.panelId,R.path,R.control,Y,q);return}}const T=a.current.has(E);a.current.add(E);const z=Mm(j),O=Jt.resolveShortcutTarget(E,z);if(O&&(i({activePanelId:O.panelId,activePath:O.path}),!T&&O.control.type==="toggle")){const R=Jt.getValue(O.panelId,O.path);Jt.updateValue(O.panelId,O.path,!R)}T||(u.current=null,d.current=0)},y=j=>{const E=j.key.toLowerCase();if(a.current.delete(E),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let T=!1;for(const z of a.current){const O=Mm(j),R=Jt.resolveShortcutTarget(z,O);if(R){i({activePanelId:R.panelId,activePath:R.path}),T=!0;break}}T||i({activePanelId:null,activePath:null})}},g=j=>{var z,O;if(hd())return;const E=Mm(j);if(a.current.size>0)for(const R of a.current){const q=Jt.resolveShortcutTarget(R,E);if(!q)continue;const{panelId:Y,path:K,control:V}=q;if(((O=(z=V.shortcut)==null?void 0:z.interaction)!=null?O:"scroll")!=="scroll"||V.type!=="slider")continue;j.preventDefault();const ae=mc(V,V.shortcut),re=j.deltaY>0?-1:1;pc(Y,K,V,ae,re);return}const T=Jt.resolveScrollOnlyTargets();for(const{panelId:R,path:q,control:Y,shortcut:K}of T){if(Y.type!=="slider")continue;j.preventDefault();const V=mc(Y,K),ee=j.deltaY>0?-1:1;pc(R,q,Y,V,ee);return}},x=j=>{if(hd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=j.clientX,d.current=0,j.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},S=j=>{if(hd()||a.current.size===0)return;if(c.current){const T=h("drag");if(T&&u.current!==null){const z=j.clientX-u.current;u.current=j.clientX,d.current+=z;const O=mc(T.control,T.shortcut),R=Math.trunc(d.current/md);R!==0&&(d.current-=R*md,pc(T.panelId,T.path,T.control,O,R))}return}const E=h("move");if(E){if(u.current===null){u.current=j.clientX;return}const T=j.clientX-u.current;u.current=j.clientX,d.current+=T;const z=mc(E.control,E.shortcut),O=Math.trunc(d.current/md);O!==0&&(d.current-=O*md,pc(E.panelId,E.path,E.control,z,O))}},k=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",y),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",S),window.addEventListener("blur",k),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",y),window.removeEventListener("wheel",g),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",S),window.removeEventListener("blur",k)}},[h]),l.jsx(p2.Provider,{value:n,children:t})}var Kp="M6 9.5L12 15.5L18 9.5",d7="M5 12.75L10 19L19 5",Em={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},f7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],h7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Lx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function $d({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=_.useState(i),[y,g]=_.useState(!i),x=_.useRef(null),[b,S]=_.useState(void 0),[k,j]=_.useState(typeof window<"u"?window.innerHeight:800);_.useEffect(()=>{if(!a)return;const z=()=>j(window.innerHeight);return window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)},[a]),_.useEffect(()=>{const z=x.current;if(!z)return;const O=new ResizeObserver(()=>{if(h){const R=z.offsetHeight;S(q=>q===R?q:R)}});return O.observe(z),()=>O.disconnect()},[h]);const E=()=>{if(c&&a)return;const z=!h;p(z),g(!z),u==null||u(z)},T=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:E,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Lx.path,fill:"currentColor"}),Lx.circles.map((z,O)=>l.jsx("circle",{cx:z.cx,cy:z.cy,r:z.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},O))]}),!a&&l.jsx(Jo.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:Kp})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:z=>z.stopPropagation(),children:d})]}),l.jsx(Wd,{initial:!1,children:h&&l.jsx(Jo.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:T});const z=h?{width:280,height:b!==void 0?Math.min(b+10,k-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(Jo.div,{className:"dialkit-panel-inner",style:z,onClick:h?void 0:E,"data-collapsed":y,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:T})}return T}var m7=3,p7=32,_7=200,g7=8;function Vo({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var it;const y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=_.useRef(null),S=_.useRef(null),[k,j]=_.useState(!1),[E,T]=_.useState(!1),[z,O]=_.useState(!1),[R,q]=_.useState(!1),[Y,K]=_.useState(!1),[V,ee]=_.useState(!1),[ae,re]=_.useState(""),Ae=_.useRef(null),We=_.useRef(null),ne=_.useRef(!0),pe=_.useRef(null),P=_.useRef(null),ie=_.useRef(1),F=(n-a)/(c-a)*100,_e=k||z,Te=np(F),I=Zu(Te,H=>`${H}%`),me=Zu(Te,H=>`max(5px, calc(${H}% - 9px))`),se=np(0),he=Zu(se,H=>`calc(100% + ${Math.abs(H)}px)`),be=Zu(se,H=>H<0?H:0);_.useEffect(()=>{!k&&!pe.current&&Te.jump(F)},[F,k,Te]);const Re=_.useCallback(H=>{const te=P.current;if(!te)return n;const je=(H-te.left)/ie.current,ue=y.current?y.current.offsetWidth:te.width,Ee=Math.max(0,Math.min(1,je/ue)),le=a+Ee*(c-a);return Math.max(a,Math.min(c,le))},[a,c,n]),$e=_.useCallback(H=>(H-a)/(c-a)*100,[a,c]),Ue=_.useCallback((H,te)=>{const we=P.current;if(!we)return 0;const je=te<0?we.left-H:H-we.right,ue=Math.max(0,je-p7);return te*g7*Math.sqrt(Math.min(ue/_7,1))},[]),Qe=_.useCallback(H=>{if(!V&&(H.preventDefault(),H.target.setPointerCapture(H.pointerId),We.current={x:H.clientX,y:H.clientY},ne.current=!0,j(!0),y.current)){P.current=y.current.getBoundingClientRect();const te=y.current.offsetWidth;ie.current=P.current.width/te}},[V]),Lt=_.useCallback(H=>{if(!k||!We.current)return;const te=H.clientX-We.current.x,we=H.clientY-We.current.y,je=Math.sqrt(te*te+we*we);if(ne.current&&je>m7&&(ne.current=!1,T(!0)),!ne.current){const ue=P.current;ue&&(H.clientX<ue.left?se.jump(Ue(H.clientX,-1)):H.clientX>ue.right?se.jump(Ue(H.clientX,1)):se.jump(0));const Ee=Re(H.clientX),le=$e(Ee);pe.current&&(pe.current.stop(),pe.current=null),Te.jump(le),i(kd(Ee,u))}},[k,Re,$e,i,Te,se,Ue]),Dt=_.useCallback(H=>{if(k){if(ne.current){const te=Re(H.clientX),je=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((te-a)/u)*u)):a7(te,a,c),ue=$e(je);pe.current&&pe.current.stop(),pe.current=Z1(Te,ue,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{pe.current=null}}),i(kd(je,u))}se.get()!==0&&Z1(se,0,{type:"spring",visualDuration:.35,bounce:.15}),j(!1),T(!1),We.current=null}},[k,Re,$e,i,a,c,Te,se]);_.useEffect(()=>(R&&!V&&!Y?Ae.current=setTimeout(()=>{K(!0)},800):!R&&!V&&(Ae.current&&(clearTimeout(Ae.current),Ae.current=null),K(!1)),()=>{Ae.current&&clearTimeout(Ae.current)}),[R,V,Y]),_.useEffect(()=>{V&&x.current&&(x.current.focus(),x.current.select())},[V]);const Fe=H=>{re(H.target.value)},rt=()=>{const H=parseFloat(ae);if(!isNaN(H)){const te=Math.max(a,Math.min(c,H));i(kd(te,u))}ee(!1),q(!1),K(!1)},Tt=H=>{Y&&(H.stopPropagation(),H.preventDefault(),ee(!0),re(n.toFixed(up(u))))},nn=H=>{H.key==="Enter"?rt():H.key==="Escape"&&(ee(!1),q(!1))},Xt=()=>{rt()},Pe=n.toFixed(up(u)),ce=8,nt=10,st=10;let et=30,Ze=78;const ft=(it=y.current)==null?void 0:it.offsetWidth;ft&&ft>0&&(b.current&&(et=(nt+b.current.offsetWidth+ce)/ft*100),S.current&&(Ze=(ft-st-S.current.offsetWidth-ce)/ft*100));const dt=F<et||F>Ze,wt=_e?dt?.1:E?.9:.5:0,St=(c-a)/u,Ut=St<=10?Array.from({length:St-1},(H,te)=>{const we=(te+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${we}%`}},te)}):Array.from({length:9},(H,te)=>{const we=(te+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${we}%`}},te)});return l.jsx("div",{ref:y,className:"dialkit-slider-wrapper",children:l.jsxs(Jo.div,{ref:g,className:`dialkit-slider ${_e?"dialkit-slider-active":""}`,onPointerDown:Qe,onPointerMove:Lt,onPointerUp:Dt,onMouseEnter:()=>O(!0),onMouseLeave:()=>O(!1),style:{width:he,x:be},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:Ut}),l.jsx(Jo.div,{className:"dialkit-slider-fill",style:{width:I}}),l.jsx(Jo.div,{className:"dialkit-slider-handle",style:{left:me,y:"-50%"},animate:{opacity:wt,scaleX:_e?1:.25,scaleY:_e&&dt?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:l7(h)})]}),V?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:ae,onChange:Fe,onKeyDown:nn,onBlur:Xt,onClick:H=>H.stopPropagation(),onMouseDown:H=>H.stopPropagation()}):l.jsx("span",{ref:S,className:`dialkit-slider-value ${Y?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>q(!0),onMouseLeave:()=>q(!1),onClick:Tt,onMouseDown:H=>Y&&H.stopPropagation(),style:{cursor:Y?"text":"default"},children:Pe})]})})}function Qp({options:t,value:n,onChange:i}){const a=_.useRef(null),c=_.useRef(!1),[u,d]=_.useState(null),h=_.useCallback(()=>{const y=a.current;if(!y)return;const g=y.querySelector('[data-active="true"]');g&&d({left:g.offsetLeft,width:g.offsetWidth})},[]);_.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(y=>{const g=n===y.value;return l.jsx("button",{onClick:()=>i(y.value),className:"dialkit-segmented-button","data-active":String(g),children:y.label},y.value)})]})}function y7({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:c7(a)})]}),l.jsx(Qp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function x7(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const y=1;for(let g=0;g<=100;g++){const x=g*d;c.push([x,h]);const b=-t*(h-y),S=-n*p,k=(b+S)/i;p+=k*d,h+=p*d}return c}function _2({spring:t,isSimpleMode:n}){var j,E,T,z,O;let c,u,d;if(n){const R=(j=t.visualDuration)!=null?j:.3,q=(E=t.bounce)!=null?E:.2;d=1,c=2*Math.PI/R,c=Math.pow(c,2),u=2*(1-q)*Math.sqrt(c*d)}else c=(T=t.stiffness)!=null?T:400,u=(z=t.damping)!=null?z:17,d=(O=t.mass)!=null?O:1;const h=2,p=x7(c,u,d,h),y=p.map(([,R])=>R),g=Math.min(...y),b=Math.max(...y)-g,S=p.map(([R,q],Y)=>{const K=R/h*256,ee=140-((q-g)/(b||1)*140*.6+140*.2);return`${Y===0?"M":"L"} ${K} ${ee}`}).join(" "),k=[];for(let R=1;R<4;R++){const q=64*R,Y=140/4*R;k.push(l.jsx("line",{x1:q,y1:0,x2:q,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${R}`),l.jsx("line",{x1:0,y1:Y,x2:256,y2:Y,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${R}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[k,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:S,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function b7({panelId:t,path:n,label:i,spring:a,onChange:c}){var g,x,b,S,k;const u=_.useSyncExternalStore(j=>Jt.subscribe(t,j),()=>Jt.getSpringMode(t,n),()=>Jt.getSpringMode(t,n)),d=u==="simple",h=_.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=j=>{Jt.updateSpringMode(t,n,j),c(j==="simple"?h.current.simple:h.current.advanced)},y=(j,E)=>{if(d){const{stiffness:T,damping:z,mass:O,...R}=a;c({...R,[j]:E})}else{const{visualDuration:T,bounce:z,...O}=a;c({...O,[j]:E})}};return l.jsx($d,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(_2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Qp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Vo,{label:"Duration",value:(g=a.visualDuration)!=null?g:.3,onChange:j=>y("visualDuration",j),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Vo,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:j=>y("bounce",j),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Vo,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:j=>y("stiffness",j),min:1,max:1e3,step:10}),l.jsx(Vo,{label:"Damping",value:(S=a.damping)!=null?S:17,onChange:j=>y("damping",j),min:1,max:100,step:1}),l.jsx(Vo,{label:"Mass",value:(k=a.mass)!=null?k:1,onChange:j=>y("mass",j),min:.1,max:10,step:.1})]})]})})}function v7({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,S)=>({x:a+(b+.5)*u,y:a+(1.5-S)*u}),h=d(0,0),p=d(1,1),y=d(n[0],n[1]),g=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${y.x} ${y.y}, ${g.x} ${g.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function w7({panelId:t,path:n,label:i,value:a,onChange:c}){var k,j,E,T,z;const u=_.useSyncExternalStore(O=>Jt.subscribe(t,O),()=>Jt.getTransitionMode(t,n),()=>Jt.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=_.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const y=a.type==="spring"?a:p.current.simple,g=a.type==="easing"?a:p.current.easing,x=O=>{Jt.updateTransitionMode(t,n,O),c(O==="easing"?p.current.easing:O==="simple"?p.current.simple:p.current.advanced)},b=(O,R)=>{if(h){const{stiffness:q,damping:Y,mass:K,...V}=y;c({...V,[O]:R})}else{const{visualDuration:q,bounce:Y,...K}=y;c({...K,[O]:R})}},S=(O,R)=>{const q=[...g.ease];q[O]=R,c({...g,ease:q})};return l.jsx($d,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(v7,{easing:g}):l.jsx(_2,{spring:y,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Qp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Vo,{label:"x1",value:g.ease[0],onChange:O=>S(0,O),min:0,max:1,step:.01}),l.jsx(Vo,{label:"y1",value:g.ease[1],onChange:O=>S(1,O),min:-1,max:2,step:.01}),l.jsx(Vo,{label:"x2",value:g.ease[2],onChange:O=>S(2,O),min:0,max:1,step:.01}),l.jsx(Vo,{label:"y2",value:g.ease[3],onChange:O=>S(3,O),min:-1,max:2,step:.01}),l.jsx(Vo,{label:"Duration",value:g.duration,onChange:O=>c({...g,duration:O}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(C7,{ease:g.ease,onChange:O=>c({...g,ease:O})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(Vo,{label:"Duration",value:(k=y.visualDuration)!=null?k:.3,onChange:O=>b("visualDuration",O),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Vo,{label:"Bounce",value:(j=y.bounce)!=null?j:.2,onChange:O=>b("bounce",O),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Vo,{label:"Stiffness",value:(E=y.stiffness)!=null?E:400,onChange:O=>b("stiffness",O),min:1,max:1e3,step:10}),l.jsx(Vo,{label:"Damping",value:(T=y.damping)!=null?T:17,onChange:O=>b("damping",O),min:1,max:100,step:1}),l.jsx(Vo,{label:"Mass",value:(z=y.mass)!=null?z:1,onChange:O=>b("mass",O),min:.1,max:10,step:.1})]})]})})}function Ox(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function S7(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function C7({ease:t,onChange:n}){const[i,a]=_.useState(!1),[c,u]=_.useState(""),d=()=>{u(Ox(t)),a(!0)},h=()=>{const y=S7(c);y&&n(y),a(!1)},p=y=>{y.key==="Enter"&&y.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Ox(t),onChange:y=>u(y.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function k7({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function j7(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function M7(t){return t.map(n=>typeof n=="string"?{value:n,label:j7(n)}:n)}function E7({label:t,value:n,options:i,onChange:a}){var j;const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState(null),[g,x]=_.useState(null),b=M7(i),S=b.find(E=>E.value===n),k=_.useCallback(()=>{const E=d.current;if(!E)return;const T=E.getBoundingClientRect(),z=8+b.length*36,O=window.innerHeight-T.bottom-4,R=O<z&&T.top>O;x({top:R?T.top-4:T.bottom+4,left:T.left,width:T.width,above:R})},[b.length]);return _.useEffect(()=>{var T;const E=(T=d.current)==null?void 0:T.closest(".dialkit-root");y(E!=null?E:document.body)},[]),_.useEffect(()=>{c&&k()},[c,k]),_.useEffect(()=>{if(!c)return;const E=T=>{const z=T.target;d.current&&!d.current.contains(z)&&h.current&&!h.current.contains(z)&&u(!1)};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(j=S==null?void 0:S.label)!=null?j:n}),l.jsx(Jo.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Kp})})]})]}),p&&Ic.createPortal(l.jsx(Wd,{children:c&&g&&l.jsx(Jo.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:g.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:g.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:g.left,width:g.width,...g.above?{bottom:window.innerHeight-g.top,transformOrigin:"bottom"}:{top:g.top,transformOrigin:"top"}},children:b.map(E=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(E.value===n),onClick:()=>{a(E.value),u(!1)},children:E.label},E.value))})}),p)]})}var T7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function A7({label:t,value:n,onChange:i}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useRef(null);_.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),T7.test(u)?i(u):d(n)}function y(g){g.key==="Enter"?p():g.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:g=>d(g.target.value),onBlur:p,onKeyDown:y,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var g;return(g=h.current)==null?void 0:g.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?N7(n):n.slice(0,7),onChange:g=>i(g.target.value)})]})]})}function N7(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function D7({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState({top:0,left:0,width:0}),g=n.length>0,x=n.find(T=>T.id===i),b=_.useCallback(()=>{var z;if(!g)return;const T=(z=d.current)==null?void 0:z.getBoundingClientRect();T&&y({top:T.bottom+4,left:T.left,width:T.width}),u(!0)},[g]),S=_.useCallback(()=>u(!1),[]),k=_.useCallback(()=>{c?S():b()},[c,b,S]);_.useEffect(()=>{if(!c)return;const T=z=>{var R,q;const O=z.target;(R=d.current)!=null&&R.contains(O)||(q=h.current)!=null&&q.contains(O)||S()};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[c,S]);const j=T=>{T?Jt.loadPreset(t,T):Jt.clearActivePreset(t),S()},E=(T,z)=>{T.stopPropagation(),Jt.deletePreset(t,z)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:k,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!g),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(Jo.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:g?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Kp})})]}),Ic.createPortal(l.jsx(Wd,{children:c&&l.jsxs(Jo.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>j(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(T=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(T.id===i),onClick:()=>j(T.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:T.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:z=>E(z,T.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:h7.map((z,O)=>l.jsx("path",{d:z},O))})})]},T.id))]})}),document.body)]})}function R7({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useContext(p2);Object.keys(t.shortcuts).length>0;const p=_.useSyncExternalStore(E=>Jt.subscribe(t.id,E),()=>Jt.getValues(t.id),()=>Jt.getValues(t.id)),y=Jt.getPresets(t.id),g=Jt.getActivePresetId(t.id),x=()=>{const E=y.length+2;Jt.savePreset(t.id,`Version ${E}`)},b=()=>{const E=JSON.stringify(p,null,2),T=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${E}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(T),c(!0),setTimeout(()=>c(!1),1500)},S=E=>{var z,O,R;const T=p[E.path];switch(E.type){case"slider":return l.jsx(Vo,{label:E.label,value:T,onChange:q=>Jt.updateValue(t.id,E.path,q),min:E.min,max:E.max,step:E.step,shortcut:E.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===E.path},E.path);case"toggle":return l.jsx(y7,{label:E.label,checked:T,onChange:q=>Jt.updateValue(t.id,E.path,q),shortcut:E.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===E.path},E.path);case"spring":return l.jsx(b7,{panelId:t.id,path:E.path,label:E.label,spring:T,onChange:q=>Jt.updateValue(t.id,E.path,q)},E.path);case"transition":return l.jsx(w7,{panelId:t.id,path:E.path,label:E.label,value:T,onChange:q=>Jt.updateValue(t.id,E.path,q)},E.path);case"folder":return l.jsx($d,{title:E.label,defaultOpen:(z=E.defaultOpen)!=null?z:!0,children:(O=E.children)==null?void 0:O.map(S)},E.path);case"text":return l.jsx(k7,{label:E.label,value:T,onChange:q=>Jt.updateValue(t.id,E.path,q),placeholder:E.placeholder},E.path);case"select":return l.jsx(E7,{label:E.label,value:T,options:(R=E.options)!=null?R:[],onChange:q=>Jt.updateValue(t.id,E.path,q)},E.path);case"color":return l.jsx(A7,{label:E.label,value:T,onChange:q=>Jt.updateValue(t.id,E.path,q)},E.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>Jt.triggerAction(t.id,E.path),children:E.label},E.path);default:return null}},k=()=>t.controls.map(S),j=l.jsxs(l.Fragment,{children:[l.jsx(Jo.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:f7.map((E,T)=>l.jsx("path",{d:E},T))})}),l.jsx(D7,{panelId:t.id,presets:y,activePresetId:g,onAdd:x}),l.jsx(Jo.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Wd,{initial:!1,mode:"wait",children:a?l.jsx(Jo.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:d7})},"check"):l.jsxs(Jo.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:Em.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:Em.sparkle,fill:"currentColor"}),l.jsx("path",{d:Em.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx($d,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:j,children:k()})})}var B7=typeof process<"u"?!1:!(typeof import.meta<"u");function L7({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=B7}){if(!c)return null;const[u,d]=_.useState([]),[h,p]=_.useState(!1),y=i==="inline",g=_.useRef(null),[x,b]=_.useState(null),[S,k]=_.useState(t),j=_.useRef(null),E=_.useRef(!1),T=_.useRef(null),z=_.useRef(!1);_.useEffect(()=>(p(!0),d(Jt.getPanels()),Jt.subscribeGlobal(()=>{d(Jt.getPanels())})),[]),_.useEffect(()=>{if(!g.current||y)return;const V=new MutationObserver(()=>{var re;const ee=(re=g.current)==null?void 0:re.querySelector(".dialkit-panel-inner");if(!ee)return;if(ee.getAttribute("data-collapsed")==="true")j.current&&b(j.current);else{if(x){j.current=x;const Ae=x.x+21,We=window.innerWidth/2;k(Ae<We?"top-left":"top-right")}else k(t);b(null)}});return V.observe(g.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>V.disconnect()},[y,x,t]);const O=_.useCallback(V=>{var re;const ee=(re=g.current)==null?void 0:re.querySelector(".dialkit-panel-inner");if(!ee||ee.getAttribute("data-collapsed")!=="true")return;const ae=g.current.getBoundingClientRect();T.current={pointerX:V.clientX,pointerY:V.clientY,elX:ae.left,elY:ae.top},z.current=!1,E.current=!0,V.target.setPointerCapture(V.pointerId)},[]),R=_.useCallback(V=>{if(!E.current||!T.current)return;const ee=V.clientX-T.current.pointerX,ae=V.clientY-T.current.pointerY;!z.current&&Math.abs(ee)+Math.abs(ae)<4||(z.current=!0,b({x:T.current.elX+ee,y:T.current.elY+ae}))},[]),q=_.useCallback(V=>{var ee;if(E.current&&(E.current=!1,T.current=null,z.current)){V.stopPropagation();const ae=(ee=g.current)==null?void 0:ee.querySelector(".dialkit-panel-inner");if(ae){const re=Ae=>{Ae.stopPropagation()};ae.addEventListener("click",re,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const Y=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,K=l.jsx(u7,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:g,className:"dialkit-panel","data-position":y||x?void 0:S,"data-mode":i,style:Y,onPointerDown:y?void 0:O,onPointerMove:y?void 0:R,onPointerUp:y?void 0:q,children:u.map(V=>l.jsx(R7,{panel:V,defaultOpen:y||n,inline:y},V.id))})})});return y?K:Ic.createPortal(K,document.body)}const O7=()=>(ZM("Git Visualizer",{preview:[1,0,1]}),null),zx="git-visualizer.chrome-ui-hidden",z7=({children:t})=>{const[n,i]=_.useState(!1);return _.useEffect(()=>{i(window.localStorage.getItem(zx)==="true")},[]),_.useEffect(()=>{const a=c=>{(c.ctrlKey||c.metaKey)&&c.key.toLowerCase()==="d"&&!c.shiftKey&&!c.altKey&&(c.preventDefault(),i(u=>{const d=!u;return window.localStorage.setItem(zx,String(d)),d}))};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[]),l.jsxs(l.Fragment,{children:[t,l.jsx(O7,{}),!n&&l.jsxs(l.Fragment,{children:[l.jsx(L7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(qM,{})]})]})};document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});Vv.createRoot(document.getElementById("root")).render(l.jsx(z7,{children:l.jsx(Dk,{})}));

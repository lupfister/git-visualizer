(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Gx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fh={exports:{}},kc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dy;function Yv(){if(dy)return kc;dy=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:e,type:a,key:d,ref:c!==void 0?c:null,props:u}}return kc.Fragment=n,kc.jsx=i,kc.jsxs=i,kc}var fy;function Wv(){return fy||(fy=1,Fh.exports=Yv()),Fh.exports}var l=Wv(),Xh={exports:{}},jc={},Gh={exports:{}},qh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hy;function Fv(){return hy||(hy=1,(function(e){function n(O,ae){var H=O.length;O.push(ae);e:for(;0<H;){var pe=H-1>>>1,we=O[pe];if(0<c(we,ae))O[pe]=ae,O[H]=we,H=pe;else break e}}function i(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var ae=O[0],H=O.pop();if(H!==ae){O[0]=H;e:for(var pe=0,we=O.length,I=we>>>1;pe<I;){var ce=2*(pe+1)-1,ee=O[ce],Ce=ce+1,Te=O[Ce];if(0>c(ee,H))Ce<we&&0>c(Te,ee)?(O[pe]=Te,O[Ce]=H,pe=Ce):(O[pe]=ee,O[ce]=H,pe=ce);else if(Ce<we&&0>c(Te,H))O[pe]=Te,O[Ce]=H,pe=Ce;else break e}}return ae}function c(O,ae){var H=O.sortIndex-ae.sortIndex;return H!==0?H:O.id-ae.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();e.unstable_now=function(){return d.now()-h}}var p=[],y=[],g=1,x=null,b=3,w=!1,C=!1,E=!1,M=!1,A=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function T(O){for(var ae=i(y);ae!==null;){if(ae.callback===null)a(y);else if(ae.startTime<=O)a(y),ae.sortIndex=ae.expirationTime,n(p,ae);else break;ae=i(y)}}function G(O){if(E=!1,T(O),!C)if(i(p)!==null)C=!0,F||(F=!0,Re());else{var ae=i(y);ae!==null&&me(G,ae.startTime-O)}}var F=!1,W=-1,K=5,de=-1;function he(){return M?!0:!(e.unstable_now()-de<K)}function ye(){if(M=!1,F){var O=e.unstable_now();de=O;var ae=!0;try{e:{C=!1,E&&(E=!1,U(W),W=-1),w=!0;var H=b;try{t:{for(T(O),x=i(p);x!==null&&!(x.expirationTime>O&&he());){var pe=x.callback;if(typeof pe=="function"){x.callback=null,b=x.priorityLevel;var we=pe(x.expirationTime<=O);if(O=e.unstable_now(),typeof we=="function"){x.callback=we,T(O),ae=!0;break t}x===i(p)&&a(p),T(O)}else a(p);x=i(p)}if(x!==null)ae=!0;else{var I=i(y);I!==null&&me(G,I.startTime-O),ae=!1}}break e}finally{x=null,b=H,w=!1}ae=void 0}}finally{ae?Re():F=!1}}}var Re;if(typeof L=="function")Re=function(){L(ye)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,oe=Ge.port2;Ge.port1.onmessage=ye,Re=function(){oe.postMessage(null)}}else Re=function(){A(ye,0)};function me(O,ae){W=A(function(){O(e.unstable_now())},ae)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_next=function(O){switch(b){case 1:case 2:case 3:var ae=3;break;default:ae=b}var H=b;b=ae;try{return O()}finally{b=H}},e.unstable_requestPaint=function(){M=!0},e.unstable_runWithPriority=function(O,ae){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var H=b;b=O;try{return ae()}finally{b=H}},e.unstable_scheduleCallback=function(O,ae,H){var pe=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?pe+H:pe):H=pe,O){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=H+we,O={id:g++,callback:ae,priorityLevel:O,startTime:H,expirationTime:we,sortIndex:-1},H>pe?(O.sortIndex=H,n(y,O),i(p)===null&&O===i(y)&&(E?(U(W),W=-1):E=!0,me(G,H-pe))):(O.sortIndex=we,n(p,O),C||w||(C=!0,F||(F=!0,Re()))),O},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(O){var ae=b;return function(){var H=b;b=ae;try{return O.apply(this,arguments)}finally{b=H}}}})(qh)),qh}var my;function Xv(){return my||(my=1,Gh.exports=Fv()),Gh.exports}var Kh={exports:{}},cn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function Gv(){if(py)return cn;py=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function w(I){return I===null||typeof I!="object"?null:(I=b&&I[b]||I["@@iterator"],typeof I=="function"?I:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function A(I,ce,ee){this.props=I,this.context=ce,this.refs=M,this.updater=ee||C}A.prototype.isReactComponent={},A.prototype.setState=function(I,ce){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ce,"setState")},A.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function U(){}U.prototype=A.prototype;function L(I,ce,ee){this.props=I,this.context=ce,this.refs=M,this.updater=ee||C}var T=L.prototype=new U;T.constructor=L,E(T,A.prototype),T.isPureReactComponent=!0;var G=Array.isArray;function F(){}var W={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function de(I,ce,ee){var Ce=ee.ref;return{$$typeof:e,type:I,key:ce,ref:Ce!==void 0?Ce:null,props:ee}}function he(I,ce){return de(I.type,ce,I.props)}function ye(I){return typeof I=="object"&&I!==null&&I.$$typeof===e}function Re(I){var ce={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(ee){return ce[ee]})}var Ge=/\/+/g;function oe(I,ce){return typeof I=="object"&&I!==null&&I.key!=null?Re(""+I.key):ce.toString(36)}function me(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(F,F):(I.status="pending",I.then(function(ce){I.status==="pending"&&(I.status="fulfilled",I.value=ce)},function(ce){I.status==="pending"&&(I.status="rejected",I.reason=ce)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function O(I,ce,ee,Ce,Te){var _e=typeof I;(_e==="undefined"||_e==="boolean")&&(I=null);var Oe=!1;if(I===null)Oe=!0;else switch(_e){case"bigint":case"string":case"number":Oe=!0;break;case"object":switch(I.$$typeof){case e:case n:Oe=!0;break;case g:return Oe=I._init,O(Oe(I._payload),ce,ee,Ce,Te)}}if(Oe)return Te=Te(I),Oe=Ce===""?"."+oe(I,0):Ce,G(Te)?(ee="",Oe!=null&&(ee=Oe.replace(Ge,"$&/")+"/"),O(Te,ce,ee,"",function(pt){return pt})):Te!=null&&(ye(Te)&&(Te=he(Te,ee+(Te.key==null||I&&I.key===Te.key?"":(""+Te.key).replace(Ge,"$&/")+"/")+Oe)),ce.push(Te)),1;Oe=0;var Je=Ce===""?".":Ce+":";if(G(I))for(var We=0;We<I.length;We++)Ce=I[We],_e=Je+oe(Ce,We),Oe+=O(Ce,ce,ee,_e,Te);else if(We=w(I),typeof We=="function")for(I=We.call(I),We=0;!(Ce=I.next()).done;)Ce=Ce.value,_e=Je+oe(Ce,We++),Oe+=O(Ce,ce,ee,_e,Te);else if(_e==="object"){if(typeof I.then=="function")return O(me(I),ce,ee,Ce,Te);throw ce=String(I),Error("Objects are not valid as a React child (found: "+(ce==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ce)+"). If you meant to render a collection of children, use an array instead.")}return Oe}function ae(I,ce,ee){if(I==null)return I;var Ce=[],Te=0;return O(I,Ce,"","",function(_e){return ce.call(ee,_e,Te++)}),Ce}function H(I){if(I._status===-1){var ce=I._result;ce=ce(),ce.then(function(ee){(I._status===0||I._status===-1)&&(I._status=1,I._result=ee)},function(ee){(I._status===0||I._status===-1)&&(I._status=2,I._result=ee)}),I._status===-1&&(I._status=0,I._result=ce)}if(I._status===1)return I._result.default;throw I._result}var pe=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ce=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(ce))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},we={map:ae,forEach:function(I,ce,ee){ae(I,function(){ce.apply(this,arguments)},ee)},count:function(I){var ce=0;return ae(I,function(){ce++}),ce},toArray:function(I){return ae(I,function(ce){return ce})||[]},only:function(I){if(!ye(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return cn.Activity=x,cn.Children=we,cn.Component=A,cn.Fragment=i,cn.Profiler=c,cn.PureComponent=L,cn.StrictMode=a,cn.Suspense=p,cn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,cn.__COMPILER_RUNTIME={__proto__:null,c:function(I){return W.H.useMemoCache(I)}},cn.cache=function(I){return function(){return I.apply(null,arguments)}},cn.cacheSignal=function(){return null},cn.cloneElement=function(I,ce,ee){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Ce=E({},I.props),Te=I.key;if(ce!=null)for(_e in ce.key!==void 0&&(Te=""+ce.key),ce)!K.call(ce,_e)||_e==="key"||_e==="__self"||_e==="__source"||_e==="ref"&&ce.ref===void 0||(Ce[_e]=ce[_e]);var _e=arguments.length-2;if(_e===1)Ce.children=ee;else if(1<_e){for(var Oe=Array(_e),Je=0;Je<_e;Je++)Oe[Je]=arguments[Je+2];Ce.children=Oe}return de(I.type,Te,Ce)},cn.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:u,_context:I},I},cn.createElement=function(I,ce,ee){var Ce,Te={},_e=null;if(ce!=null)for(Ce in ce.key!==void 0&&(_e=""+ce.key),ce)K.call(ce,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Te[Ce]=ce[Ce]);var Oe=arguments.length-2;if(Oe===1)Te.children=ee;else if(1<Oe){for(var Je=Array(Oe),We=0;We<Oe;We++)Je[We]=arguments[We+2];Te.children=Je}if(I&&I.defaultProps)for(Ce in Oe=I.defaultProps,Oe)Te[Ce]===void 0&&(Te[Ce]=Oe[Ce]);return de(I,_e,Te)},cn.createRef=function(){return{current:null}},cn.forwardRef=function(I){return{$$typeof:h,render:I}},cn.isValidElement=ye,cn.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:H}},cn.memo=function(I,ce){return{$$typeof:y,type:I,compare:ce===void 0?null:ce}},cn.startTransition=function(I){var ce=W.T,ee={};W.T=ee;try{var Ce=I(),Te=W.S;Te!==null&&Te(ee,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(F,pe)}catch(_e){pe(_e)}finally{ce!==null&&ee.types!==null&&(ce.types=ee.types),W.T=ce}},cn.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},cn.use=function(I){return W.H.use(I)},cn.useActionState=function(I,ce,ee){return W.H.useActionState(I,ce,ee)},cn.useCallback=function(I,ce){return W.H.useCallback(I,ce)},cn.useContext=function(I){return W.H.useContext(I)},cn.useDebugValue=function(){},cn.useDeferredValue=function(I,ce){return W.H.useDeferredValue(I,ce)},cn.useEffect=function(I,ce){return W.H.useEffect(I,ce)},cn.useEffectEvent=function(I){return W.H.useEffectEvent(I)},cn.useId=function(){return W.H.useId()},cn.useImperativeHandle=function(I,ce,ee){return W.H.useImperativeHandle(I,ce,ee)},cn.useInsertionEffect=function(I,ce){return W.H.useInsertionEffect(I,ce)},cn.useLayoutEffect=function(I,ce){return W.H.useLayoutEffect(I,ce)},cn.useMemo=function(I,ce){return W.H.useMemo(I,ce)},cn.useOptimistic=function(I,ce){return W.H.useOptimistic(I,ce)},cn.useReducer=function(I,ce,ee){return W.H.useReducer(I,ce,ee)},cn.useRef=function(I){return W.H.useRef(I)},cn.useState=function(I){return W.H.useState(I)},cn.useSyncExternalStore=function(I,ce,ee){return W.H.useSyncExternalStore(I,ce,ee)},cn.useTransition=function(){return W.H.useTransition()},cn.version="19.2.4",cn}var _y;function Cp(){return _y||(_y=1,Kh.exports=Gv()),Kh.exports}var Qh={exports:{}},Jo={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function qv(){if(gy)return Jo;gy=1;var e=Cp();function n(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)y+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,y,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:y,implementation:g}}var d=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Jo.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Jo.createPortal=function(p,y){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(n(299));return u(p,y,null,g)},Jo.flushSync=function(p){var y=d.T,g=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=y,a.p=g,a.d.f()}},Jo.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(p,y))},Jo.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Jo.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin),b=typeof y.integrity=="string"?y.integrity:void 0,w=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;g==="style"?a.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:w}):g==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:w,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Jo.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var g=h(y.as,y.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(p)},Jo.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin);a.d.L(p,g,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Jo.preloadModule=function(p,y){if(typeof p=="string")if(y){var g=h(y.as,y.crossOrigin);a.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(p)},Jo.requestFormReset=function(p){a.d.r(p)},Jo.unstable_batchedUpdates=function(p,y){return p(y)},Jo.useFormState=function(p,y,g){return d.H.useFormState(p,y,g)},Jo.useFormStatus=function(){return d.H.useHostTransitionStatus()},Jo.version="19.2.4",Jo}var yy;function qx(){if(yy)return Qh.exports;yy=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Qh.exports=qv(),Qh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy;function Kv(){if(xy)return jc;xy=1;var e=Xv(),n=Cp(),i=qx();function a(t){var s="https://react.dev/errors/"+t;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+t+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var s=t,o=t;if(t.alternate)for(;s.return;)s=s.return;else{t=s;do s=t,(s.flags&4098)!==0&&(o=s.return),t=s.return;while(t)}return s.tag===3?o:null}function d(t){if(t.tag===13){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function h(t){if(t.tag===31){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(a(188))}function y(t){var s=t.alternate;if(!s){if(s=u(t),s===null)throw Error(a(188));return s!==t?null:t}for(var o=t,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),t;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var v=!1,N=f.child;N;){if(N===o){v=!0,o=f,r=m;break}if(N===r){v=!0,r=f,o=m;break}N=N.sibling}if(!v){for(N=m.child;N;){if(N===o){v=!0,o=m,r=f;break}if(N===r){v=!0,r=m,o=f;break}N=N.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?t:s}function g(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t;for(t=t.child;t!==null;){if(s=g(t),s!==null)return s;t=t.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),de=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function Re(t){return t===null||typeof t!="object"?null:(t=ye&&t[ye]||t["@@iterator"],typeof t=="function"?t:null)}var Ge=Symbol.for("react.client.reference");function oe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ge?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case A:return"Profiler";case M:return"StrictMode";case G:return"Suspense";case F:return"SuspenseList";case de:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case L:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case T:var s=t.render;return t=t.displayName,t||(t=s.displayName||s.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case W:return s=t.displayName||null,s!==null?s:oe(t.type)||"Memo";case K:s=t._payload,t=t._init;try{return oe(t(s))}catch{}}return null}var me=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},pe=[],we=-1;function I(t){return{current:t}}function ce(t){0>we||(t.current=pe[we],pe[we]=null,we--)}function ee(t,s){we++,pe[we]=t.current,t.current=s}var Ce=I(null),Te=I(null),_e=I(null),Oe=I(null);function Je(t,s){switch(ee(_e,s),ee(Te,t),ee(Ce,null),s.nodeType){case 9:case 11:t=(t=s.documentElement)&&(t=t.namespaceURI)?B0(t):0;break;default:if(t=s.tagName,s=s.namespaceURI)s=B0(s),t=L0(s,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ce(Ce),ee(Ce,t)}function We(){ce(Ce),ce(Te),ce(_e)}function pt(t){t.memoizedState!==null&&ee(Oe,t);var s=Ce.current,o=L0(s,t.type);s!==o&&(ee(Te,t),ee(Ce,o))}function Tt(t){Te.current===t&&(ce(Ce),ce(Te)),Oe.current===t&&(ce(Oe),vc._currentValue=H)}var Ct,ut;function Ot(t){if(Ct===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Ct=s&&s[1]||"",ut=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ct+t+ut}var _t=!1;function Gt(t,s){if(!t||_t)return"";_t=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var Ye=function(){throw Error()};if(Object.defineProperty(Ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ye,[])}catch(Ee){var ke=Ee}Reflect.construct(t,[],Ye)}else{try{Ye.call()}catch(Ee){ke=Ee}t.call(Ye.prototype)}}else{try{throw Error()}catch(Ee){ke=Ee}(Ye=t())&&typeof Ye.catch=="function"&&Ye.catch(function(){})}}catch(Ee){if(Ee&&ke&&typeof Ee.stack=="string")return[Ee.stack,ke.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),v=m[0],N=m[1];if(v&&N){var Q=v.split(`
`),be=N.split(`
`);for(f=r=0;r<Q.length&&!Q[r].includes("DetermineComponentFrameRoot");)r++;for(;f<be.length&&!be[f].includes("DetermineComponentFrameRoot");)f++;if(r===Q.length||f===be.length)for(r=Q.length-1,f=be.length-1;1<=r&&0<=f&&Q[r]!==be[f];)f--;for(;1<=r&&0<=f;r--,f--)if(Q[r]!==be[f]){if(r!==1||f!==1)do if(r--,f--,0>f||Q[r]!==be[f]){var Le=`
`+Q[r].replace(" at new "," at ");return t.displayName&&Le.includes("<anonymous>")&&(Le=Le.replace("<anonymous>",t.displayName)),Le}while(1<=r&&0<=f);break}}}finally{_t=!1,Error.prepareStackTrace=o}return(o=t?t.displayName||t.name:"")?Ot(o):""}function en(t,s){switch(t.tag){case 26:case 27:case 5:return Ot(t.type);case 16:return Ot("Lazy");case 13:return t.child!==s&&s!==null?Ot("Suspense Fallback"):Ot("Suspense");case 19:return Ot("SuspenseList");case 0:case 15:return Gt(t.type,!1);case 11:return Gt(t.type.render,!1);case 1:return Gt(t.type,!0);case 31:return Ot("Activity");default:return""}}function J(t){try{var s="",o=null;do s+=en(t,o),o=t,t=t.return;while(t);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Be=Object.prototype.hasOwnProperty,dt=e.unstable_scheduleCallback,at=e.unstable_cancelCallback,gt=e.unstable_shouldYield,He=e.unstable_requestPaint,bt=e.unstable_now,yt=e.unstable_getCurrentPriorityLevel,Mt=e.unstable_ImmediatePriority,$t=e.unstable_UserBlockingPriority,st=e.unstable_NormalPriority,B=e.unstable_LowPriority,te=e.unstable_IdlePriority,Se=e.log,Ne=e.unstable_setDisableYieldValue,it=null,Ve=null;function De(t){if(typeof Se=="function"&&Ne(t),Ve&&typeof Ve.setStrictMode=="function")try{Ve.setStrictMode(it,t)}catch{}}var ge=Math.clz32?Math.clz32:nt,ot=Math.log,qe=Math.LN2;function nt(t){return t>>>=0,t===0?32:31-(ot(t)/qe|0)|0}var Ie=256,tt=262144,xt=4194304;function wt(t){var s=t&42;if(s!==0)return s;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Qe(t,s,o){var r=t.pendingLanes;if(r===0)return 0;var f=0,m=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var N=r&134217727;return N!==0?(r=N&~m,r!==0?f=wt(r):(v&=N,v!==0?f=wt(v):o||(o=N&~t,o!==0&&(f=wt(o))))):(N=r&~m,N!==0?f=wt(N):v!==0?f=wt(v):o||(o=r&~t,o!==0&&(f=wt(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function Rt(t,s){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&s)===0}function kt(t,s){switch(t){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mt(){var t=xt;return xt<<=1,(xt&62914560)===0&&(xt=4194304),t}function Kt(t){for(var s=[],o=0;31>o;o++)s.push(t);return s}function ht(t,s){t.pendingLanes|=s,s!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ht(t,s,o,r,f,m){var v=t.pendingLanes;t.pendingLanes=o,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=o,t.entangledLanes&=o,t.errorRecoveryDisabledLanes&=o,t.shellSuspendCounter=0;var N=t.entanglements,Q=t.expirationTimes,be=t.hiddenUpdates;for(o=v&~o;0<o;){var Le=31-ge(o),Ye=1<<Le;N[Le]=0,Q[Le]=-1;var ke=be[Le];if(ke!==null)for(be[Le]=null,Le=0;Le<ke.length;Le++){var Ee=ke[Le];Ee!==null&&(Ee.lane&=-536870913)}o&=~Ye}r!==0&&dn(t,r,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(v&~s))}function dn(t,s,o){t.pendingLanes|=s,t.suspendedLanes&=~s;var r=31-ge(s);t.entangledLanes|=s,t.entanglements[r]=t.entanglements[r]|1073741824|o&261930}function Lt(t,s){var o=t.entangledLanes|=s;for(t=t.entanglements;o;){var r=31-ge(o),f=1<<r;f&s|t[r]&s&&(t[r]|=s),o&=~f}}function St(t,s){var o=s&-s;return o=(o&42)!==0?1:fn(o),(o&(t.suspendedLanes|s))!==0?0:o}function fn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ls(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function sn(){var t=ae.p;return t!==0?t:(t=window.event,t===void 0?32:oy(t.type))}function Sn(t,s){var o=ae.p;try{return ae.p=t,s()}finally{ae.p=o}}var tn=Math.random().toString(36).slice(2),Nt="__reactFiber$"+tn,ln="__reactProps$"+tn,rt="__reactContainer$"+tn,Fn="__reactEvents$"+tn,Dn="__reactListeners$"+tn,yo="__reactHandles$"+tn,On="__reactResources$"+tn,Ds="__reactMarker$"+tn;function In(t){delete t[Nt],delete t[ln],delete t[Fn],delete t[Dn],delete t[yo]}function xo(t){var s=t[Nt];if(s)return s;for(var o=t.parentNode;o;){if(s=o[rt]||o[Nt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(t=U0(t);t!==null;){if(o=t[Nt])return o;t=U0(t)}return s}t=o,o=t.parentNode}return null}function Ao(t){if(t=t[Nt]||t[rt]){var s=t.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return t}return null}function on(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t.stateNode;throw Error(a(33))}function zn(t){var s=t[On];return s||(s=t[On]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Cn(t){t[Ds]=!0}var cs=new Set,_s={};function vs(t,s){Wt(t,s),Wt(t+"Capture",s)}function Wt(t,s){for(_s[t]=s,t=0;t<s.length;t++)cs.add(s[t])}var Xn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Us={},ws={};function bo(t){return Be.call(ws,t)?!0:Be.call(Us,t)?!1:Xn.test(t)?ws[t]=!0:(Us[t]=!0,!1)}function co(t,s,o){if(bo(s))if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":t.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(s);return}}t.setAttribute(s,""+o)}}function gs(t,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttribute(s,""+o)}}function us(t,s,o,r){if(r===null)t.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(o);return}t.setAttributeNS(s,o,""+r)}}function _n(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ti(t){var s=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function fi(t,s,o){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,s);if(!t.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(t,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(t,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){t._valueTracker=null,delete t[s]}}}}function uo(t){if(!t._valueTracker){var s=ti(t)?"checked":"value";t._valueTracker=fi(t,s,""+t[s])}}function Ji(t){if(!t)return!1;var s=t._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return t&&(r=ti(t)?t.checked?"true":"false":t.value),t=r,t!==o?(s.setValue(t),!0):!1}function Vs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ys=/[\n"\\]/g;function Ss(t){return t.replace(Ys,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Gn(t,s,o,r,f,m,v,N){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),s!=null?v==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+_n(s)):t.value!==""+_n(s)&&(t.value=""+_n(s)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),s!=null?Ws(t,v,_n(s)):o!=null?Ws(t,v,_n(o)):r!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?t.name=""+_n(N):t.removeAttribute("name")}function kn(t,s,o,r,f,m,v,N){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){uo(t);return}o=o!=null?""+_n(o):"",s=s!=null?""+_n(s):o,N||s===t.value||(t.value=s),t.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=N?t.checked:!!r,t.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),uo(t)}function Ws(t,s,o){s==="number"&&Vs(t.ownerDocument)===t||t.defaultValue===""+o||(t.defaultValue=""+o)}function vn(t,s,o,r){if(t=t.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=s.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&r&&(t[o].defaultSelected=!0)}else{for(o=""+_n(o),s=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,r&&(t[f].defaultSelected=!0);return}s!==null||t[f].disabled||(s=t[f])}s!==null&&(s.selected=!0)}}function ys(t,s,o){if(s!=null&&(s=""+_n(s),s!==t.value&&(t.value=s),o==null)){t.defaultValue!==s&&(t.defaultValue=s);return}t.defaultValue=o!=null?""+_n(o):""}function Si(t,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(me(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=_n(s),t.defaultValue=o,r=t.textContent,r===o&&r!==""&&r!==null&&(t.value=r),uo(t)}function Vo(t,s){if(s){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=s;return}}t.textContent=s}var Ci=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qt(t,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="":r?t.setProperty(s,o):typeof o!="number"||o===0||Ci.has(s)?s==="float"?t.cssFloat=o:t[s]=(""+o).trim():t[s]=o+"px"}function zi(t,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(t=t.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&Qt(t,f,r)}else for(var m in s)s.hasOwnProperty(m)&&Qt(t,m,s[m])}function Rs(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ls=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fs=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yo(t){return Fs.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Zs(){}var Js=null;function fo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gn=null,xs=null;function Xs(t){var s=Ao(t);if(s&&(t=s.stateNode)){var o=t[ln]||null;e:switch(t=s.stateNode,s.type){case"input":if(Gn(t,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Ss(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==t&&r.form===t.form){var f=r[ln]||null;if(!f)throw Error(a(90));Gn(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===t.form&&Ji(r)}break e;case"textarea":ys(t,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&vn(t,!!o.multiple,s,!1)}}}var es=!1;function ds(t,s,o){if(es)return t(s,o);es=!0;try{var r=t(s);return r}finally{if(es=!1,(gn!==null||xs!==null)&&(Lu(),gn&&(s=gn,t=xs,xs=gn=null,Xs(s),t)))for(s=0;s<t.length;s++)Xs(t[s])}}function hn(t,s){var o=t.stateNode;if(o===null)return null;var r=o[ln]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Os=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eo=!1;if(Os)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){eo=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{eo=!1}var Cs=null,ki=null,Wo=null;function Fo(){if(Wo)return Wo;var t,s=ki,o=s.length,r,f="value"in Cs?Cs.value:Cs.textContent,m=f.length;for(t=0;t<o&&s[t]===f[t];t++);var v=o-t;for(r=1;r<=v&&s[o-r]===f[m-r];r++);return Wo=f.slice(t,1<r?1-r:void 0)}function No(t){var s=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&s===13&&(t=13)):t=s,t===10&&(t=13),32<=t||t===13?t:0}function si(){return!0}function Xo(){return!1}function qn(t){function s(o,r,f,m,v){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(o=t[N],this[N]=o?o(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?si:Xo,this.isPropagationStopped=Xo,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),s}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=qn(ho),Bs=x({},ho,{view:0,detail:0}),mo=qn(Bs),qo,zs,ts,vo=x({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:So,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ts&&(ts&&t.type==="mousemove"?(qo=t.screenX-ts.screenX,zs=t.screenY-ts.screenY):zs=qo=0,ts=t),qo)},movementY:function(t){return"movementY"in t?t.movementY:zs}}),fs=qn(vo),Mn=x({},vo,{dataTransfer:0}),Ms=qn(Mn),Es=x({},Bs,{relatedTarget:0}),to=qn(Es),ji=x({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),$i=qn(ji),oi=x({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Mi=qn(oi),wo=x({},ho,{data:0}),jt=qn(wo),Gs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ii={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pi={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hi(t){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(t):(t=Pi[t])?!!s[t]:!1}function So(){return Hi}var Do=x({},Bs,{key:function(t){if(t.key){var s=Gs[t.key]||t.key;if(s!=="Unidentified")return s}return t.type==="keypress"?(t=No(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ii[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:So,charCode:function(t){return t.type==="keypress"?No(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?No(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Co=qn(Do),hi=x({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),j=qn(hi),X=x({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:So}),fe=qn(X),Ae=x({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=qn(Ae),ct=x({},vo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yt=qn(ct),Pt=x({},ho,{newState:0,oldState:0}),Zt=qn(Pt),yn=[9,13,27,32],wn=Os&&"CompositionEvent"in window,rn=null;Os&&"documentMode"in document&&(rn=document.documentMode);var Ft=Os&&"TextEvent"in window&&!rn,hs=Os&&(!wn||rn&&8<rn&&11>=rn),qt=" ",Bn=!1;function Ts(t,s){switch(t){case"keyup":return yn.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xn(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kn=!1;function Ei(t,s){switch(t){case"compositionend":return xn(s);case"keypress":return s.which!==32?null:(Bn=!0,qt);case"textInput":return t=s.data,t===qt&&Bn?null:t;default:return null}}function no(t,s){if(Kn)return t==="compositionend"||!wn&&Ts(t,s)?(t=Fo(),Wo=ki=Cs=null,Kn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return hs&&s.locale!=="ko"?null:s.data;default:return null}}var ko={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jo(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s==="input"?!!ko[t.type]:s==="textarea"}function Ro(t,s,o,r){gn?xs?xs.push(r):xs=[r]:gn=r,s=Uu(s,"onChange"),0<s.length&&(o=new Go("onChange","change",null,o,r),t.push({event:o,listeners:s}))}var Mo=null,Ko=null;function xa(t){E0(t,0)}function R(t){var s=on(t);if(Ji(s))return t}function V(t,s){if(t==="change")return s}var Z=!1;if(Os){var q;if(Os){var S="oninput"in document;if(!S){var k=document.createElement("div");k.setAttribute("oninput","return;"),S=typeof k.oninput=="function"}q=S}else q=!1;Z=q&&(!document.documentMode||9<document.documentMode)}function D(){Mo&&(Mo.detachEvent("onpropertychange",z),Ko=Mo=null)}function z(t){if(t.propertyName==="value"&&R(Ko)){var s=[];Ro(s,Ko,t,fo(t)),ds(xa,s)}}function $(t,s,o){t==="focusin"?(D(),Mo=s,Ko=o,Mo.attachEvent("onpropertychange",z)):t==="focusout"&&D()}function le(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return R(Ko)}function ve(t,s){if(t==="click")return R(s)}function Y(t,s){if(t==="input"||t==="change")return R(s)}function se(t,s){return t===s&&(t!==0||1/t===1/s)||t!==t&&s!==s}var re=typeof Object.is=="function"?Object.is:se;function ie(t,s){if(re(t,s))return!0;if(typeof t!="object"||t===null||typeof s!="object"||s===null)return!1;var o=Object.keys(t),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!Be.call(s,f)||!re(t[f],s[f]))return!1}return!0}function ze(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Me(t,s){var o=ze(t);t=0;for(var r;o;){if(o.nodeType===3){if(r=t+o.textContent.length,t<=s&&r>=s)return{node:o,offset:s-t};t=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ze(o)}}function et(t,s){return t&&s?t===s?!0:t&&t.nodeType===3?!1:s&&s.nodeType===3?et(t,s.parentNode):"contains"in t?t.contains(s):t.compareDocumentPosition?!!(t.compareDocumentPosition(s)&16):!1:!1}function Ke(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var s=Vs(t.document);s instanceof t.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)t=s.contentWindow;else break;s=Vs(t.document)}return s}function vt(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s&&(s==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||s==="textarea"||t.contentEditable==="true")}var ft=Os&&"documentMode"in document&&11>=document.documentMode,lt=null,Jt=null,zt=null,nn=!1;function Ln(t,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;nn||lt==null||lt!==Vs(r)||(r=lt,"selectionStart"in r&&vt(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zt&&ie(zt,r)||(zt=r,r=Uu(Jt,"onSelect"),0<r.length&&(s=new Go("onSelect","select",null,s,o),t.push({event:s,listeners:r}),s.target=lt)))}function $n(t,s){var o={};return o[t.toLowerCase()]=s.toLowerCase(),o["Webkit"+t]="webkit"+s,o["Moz"+t]="moz"+s,o}var Eo={animationend:$n("Animation","AnimationEnd"),animationiteration:$n("Animation","AnimationIteration"),animationstart:$n("Animation","AnimationStart"),transitionrun:$n("Transition","TransitionRun"),transitionstart:$n("Transition","TransitionStart"),transitioncancel:$n("Transition","TransitionCancel"),transitionend:$n("Transition","TransitionEnd")},Bo={},mi={};Os&&(mi=document.createElement("div").style,"AnimationEvent"in window||(delete Eo.animationend.animation,delete Eo.animationiteration.animation,delete Eo.animationstart.animation),"TransitionEvent"in window||delete Eo.transitionend.transition);function Vn(t){if(Bo[t])return Bo[t];if(!Eo[t])return t;var s=Eo[t],o;for(o in s)if(s.hasOwnProperty(o)&&o in mi)return Bo[t]=s[o];return t}var pi=Vn("animationend"),Ti=Vn("animationiteration"),yr=Vn("animationstart"),Fr=Vn("transitionrun"),Xr=Vn("transitionstart"),Gr=Vn("transitioncancel"),Yl=Vn("transitionend"),Wl=new Map,qr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qr.push("scrollEnd");function _i(t,s){Wl.set(t,s),vs(s,[t])}var xr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ii=[],ba=0,Kr=0;function br(){for(var t=ba,s=Kr=ba=0;s<t;){var o=ii[s];ii[s++]=null;var r=ii[s];ii[s++]=null;var f=ii[s];ii[s++]=null;var m=ii[s];if(ii[s++]=null,r!==null&&f!==null){var v=r.pending;v===null?f.next=f:(f.next=v.next,v.next=f),r.pending=f}m!==0&&Fl(o,f,m)}}function vr(t,s,o,r){ii[ba++]=t,ii[ba++]=s,ii[ba++]=o,ii[ba++]=r,Kr|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Qr(t,s,o,r){return vr(t,s,o,r),wr(t)}function ca(t,s){return vr(t,null,null,s),wr(t)}function Fl(t,s,o){t.lanes|=o;var r=t.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=t.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&s!==null&&(f=31-ge(o),t=m.hiddenUpdates,r=t[f],r===null?t[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function wr(t){if(50<mc)throw mc=0,_h=null,Error(a(185));for(var s=t.return;s!==null;)t=s,s=t.return;return t.tag===3?t.stateNode:null}var va={};function iu(t,s,o,r){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qo(t,s,o,r){return new iu(t,s,o,r)}function Zr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function an(t,s){var o=t.alternate;return o===null?(o=Qo(t.tag,s,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=s,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&65011712,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,s=t.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o.refCleanup=t.refCleanup,o}function ns(t,s){t.flags&=65011714;var o=t.alternate;return o===null?(t.childLanes=0,t.lanes=s,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=o.childLanes,t.lanes=o.lanes,t.child=o.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=o.memoizedProps,t.memoizedState=o.memoizedState,t.updateQueue=o.updateQueue,t.type=o.type,s=o.dependencies,t.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),t}function po(t,s,o,r,f,m){var v=0;if(r=t,typeof t=="function")Zr(t)&&(v=1);else if(typeof t=="string")v=Dv(t,o,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case de:return t=Qo(31,o,s,f),t.elementType=de,t.lanes=m,t;case E:return Lo(o.children,f,m,s);case M:v=8,f|=24;break;case A:return t=Qo(12,o,s,f|2),t.elementType=A,t.lanes=m,t;case G:return t=Qo(13,o,s,f),t.elementType=G,t.lanes=m,t;case F:return t=Qo(19,o,s,f),t.elementType=F,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:v=10;break e;case U:v=9;break e;case T:v=11;break e;case W:v=14;break e;case K:v=16,r=null;break e}v=29,o=Error(a(130,t===null?"null":typeof t,"")),r=null}return s=Qo(v,o,s,f),s.elementType=t,s.type=r,s.lanes=m,s}function Lo(t,s,o,r){return t=Qo(7,t,r,s),t.lanes=o,t}function Ha(t,s,o){return t=Qo(6,t,null,s),t.lanes=o,t}function Zo(t){var s=Qo(18,null,null,0);return s.stateNode=t,s}function As(t,s,o){return s=Qo(4,t.children!==null?t.children:[],t.key,s),s.lanes=o,s.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},s}var f_=new WeakMap;function Ui(t,s){if(typeof t=="object"&&t!==null){var o=f_.get(t);return o!==void 0?o:(s={value:t,source:s,stack:J(s)},f_.set(t,s),s)}return{value:t,source:s,stack:J(s)}}var Jr=[],el=0,au=null,Xl=0,Vi=[],Yi=0,Ua=null,ua=1,da="";function wa(t,s){Jr[el++]=Xl,Jr[el++]=au,au=t,Xl=s}function h_(t,s,o){Vi[Yi++]=ua,Vi[Yi++]=da,Vi[Yi++]=Ua,Ua=t;var r=ua;t=da;var f=32-ge(r)-1;r&=~(1<<f),o+=1;var m=32-ge(s)+f;if(30<m){var v=f-f%5;m=(r&(1<<v)-1).toString(32),r>>=v,f-=v,ua=1<<32-ge(s)+f|o<<f|r,da=m+t}else ua=1<<m|o<<f|r,da=t}function df(t){t.return!==null&&(wa(t,1),h_(t,1,0))}function ff(t){for(;t===au;)au=Jr[--el],Jr[el]=null,Xl=Jr[--el],Jr[el]=null;for(;t===Ua;)Ua=Vi[--Yi],Vi[Yi]=null,da=Vi[--Yi],Vi[Yi]=null,ua=Vi[--Yi],Vi[Yi]=null}function m_(t,s){Vi[Yi++]=ua,Vi[Yi++]=da,Vi[Yi++]=Ua,ua=s.id,da=s.overflow,Ua=t}var Oo=null,ks=null,Rn=!1,Va=null,Wi=!1,hf=Error(a(519));function Ya(t){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gl(Ui(s,t)),hf}function p_(t){var s=t.stateNode,o=t.type,r=t.memoizedProps;switch(s[Nt]=t,s[ln]=r,o){case"dialog":Tn("cancel",s),Tn("close",s);break;case"iframe":case"object":case"embed":Tn("load",s);break;case"video":case"audio":for(o=0;o<_c.length;o++)Tn(_c[o],s);break;case"source":Tn("error",s);break;case"img":case"image":case"link":Tn("error",s),Tn("load",s);break;case"details":Tn("toggle",s);break;case"input":Tn("invalid",s),kn(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Tn("invalid",s);break;case"textarea":Tn("invalid",s),Si(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||D0(s.textContent,o)?(r.popover!=null&&(Tn("beforetoggle",s),Tn("toggle",s)),r.onScroll!=null&&Tn("scroll",s),r.onScrollEnd!=null&&Tn("scrollend",s),r.onClick!=null&&(s.onclick=Zs),s=!0):s=!1,s||Ya(t,!0)}function __(t){for(Oo=t.return;Oo;)switch(Oo.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Oo=Oo.return}}function tl(t){if(t!==Oo)return!1;if(!Rn)return __(t),Rn=!0,!1;var s=t.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=t.type,o=!(o!=="form"&&o!=="button")||Nh(t.type,t.memoizedProps)),o=!o),o&&ks&&Ya(t),__(t),s===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));ks=H0(t)}else if(s===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));ks=H0(t)}else s===27?(s=ks,or(t.type)?(t=Oh,Oh=null,ks=t):ks=s):ks=Oo?Xi(t.stateNode.nextSibling):null;return!0}function Sr(){ks=Oo=null,Rn=!1}function mf(){var t=Va;return t!==null&&(bi===null?bi=t:bi.push.apply(bi,t),Va=null),t}function Gl(t){Va===null?Va=[t]:Va.push(t)}var pf=I(null),Cr=null,Sa=null;function Wa(t,s,o){ee(pf,s._currentValue),s._currentValue=o}function Ca(t){t._currentValue=pf.current,ce(pf)}function _f(t,s,o){for(;t!==null;){var r=t.alternate;if((t.childLanes&s)!==s?(t.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),t===o)break;t=t.return}}function gf(t,s,o,r){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var N=m;m=f;for(var Q=0;Q<s.length;Q++)if(N.context===s[Q]){m.lanes|=o,N=m.alternate,N!==null&&(N.lanes|=o),_f(m.return,o,t),r||(v=null);break e}m=N.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),_f(v,o,t),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===t){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function nl(t,s,o,r){t=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var N=f.type;re(f.pendingProps.value,v.value)||(t!==null?t.push(N):t=[N])}}else if(f===Oe.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(vc):t=[vc])}f=f.return}t!==null&&gf(s,t,o,r),s.flags|=262144}function ru(t){for(t=t.firstContext;t!==null;){if(!re(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function kr(t){Cr=t,Sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function zo(t){return g_(Cr,t)}function lu(t,s){return Cr===null&&kr(t),g_(t,s)}function g_(t,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Sa===null){if(t===null)throw Error(a(308));Sa=s,t.dependencies={lanes:0,firstContext:s},t.flags|=524288}else Sa=Sa.next=s;return o}var E2=typeof AbortController<"u"?AbortController:function(){var t=[],s=this.signal={aborted:!1,addEventListener:function(o,r){t.push(r)}};this.abort=function(){s.aborted=!0,t.forEach(function(o){return o()})}},T2=e.unstable_scheduleCallback,A2=e.unstable_NormalPriority,so={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yf(){return{controller:new E2,data:new Map,refCount:0}}function ql(t){t.refCount--,t.refCount===0&&T2(A2,function(){t.controller.abort()})}var Kl=null,xf=0,sl=0,ol=null;function N2(t,s){if(Kl===null){var o=Kl=[];xf=0,sl=wh(),ol={status:"pending",value:void 0,then:function(r){o.push(r)}}}return xf++,s.then(y_,y_),s}function y_(){if(--xf===0&&Kl!==null){ol!==null&&(ol.status="fulfilled");var t=Kl;Kl=null,sl=0,ol=null;for(var s=0;s<t.length;s++)(0,t[s])()}}function D2(t,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return t.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var x_=O.S;O.S=function(t,s){n0=bt(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&N2(t,s),x_!==null&&x_(t,s)};var jr=I(null);function bf(){var t=jr.current;return t!==null?t:ms.pooledCache}function cu(t,s){s===null?ee(jr,jr.current):ee(jr,s.pool)}function b_(){var t=bf();return t===null?null:{parent:so._currentValue,pool:t}}var il=Error(a(460)),vf=Error(a(474)),uu=Error(a(542)),du={then:function(){}};function v_(t){return t=t.status,t==="fulfilled"||t==="rejected"}function w_(t,s,o){switch(o=t[o],o===void 0?t.push(s):o!==s&&(s.then(Zs,Zs),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,C_(t),t;default:if(typeof s.status=="string")s.then(Zs,Zs);else{if(t=ms,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=s,t.status="pending",t.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,C_(t),t}throw Er=s,il}}function Mr(t){try{var s=t._init;return s(t._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Er=o,il):o}}var Er=null;function S_(){if(Er===null)throw Error(a(459));var t=Er;return Er=null,t}function C_(t){if(t===il||t===uu)throw Error(a(483))}var al=null,Ql=0;function fu(t){var s=Ql;return Ql+=1,al===null&&(al=[]),w_(al,t,s)}function Zl(t,s){s=s.props.ref,t.ref=s!==void 0?s:null}function hu(t,s){throw s.$$typeof===b?Error(a(525)):(t=Object.prototype.toString.call(s),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":t)))}function k_(t){function s(ue,ne){if(t){var xe=ue.deletions;xe===null?(ue.deletions=[ne],ue.flags|=16):xe.push(ne)}}function o(ue,ne){if(!t)return null;for(;ne!==null;)s(ue,ne),ne=ne.sibling;return null}function r(ue){for(var ne=new Map;ue!==null;)ue.key!==null?ne.set(ue.key,ue):ne.set(ue.index,ue),ue=ue.sibling;return ne}function f(ue,ne){return ue=an(ue,ne),ue.index=0,ue.sibling=null,ue}function m(ue,ne,xe){return ue.index=xe,t?(xe=ue.alternate,xe!==null?(xe=xe.index,xe<ne?(ue.flags|=67108866,ne):xe):(ue.flags|=67108866,ne)):(ue.flags|=1048576,ne)}function v(ue){return t&&ue.alternate===null&&(ue.flags|=67108866),ue}function N(ue,ne,xe,Ue){return ne===null||ne.tag!==6?(ne=Ha(xe,ue.mode,Ue),ne.return=ue,ne):(ne=f(ne,xe),ne.return=ue,ne)}function Q(ue,ne,xe,Ue){var Ut=xe.type;return Ut===E?Le(ue,ne,xe.props.children,Ue,xe.key):ne!==null&&(ne.elementType===Ut||typeof Ut=="object"&&Ut!==null&&Ut.$$typeof===K&&Mr(Ut)===ne.type)?(ne=f(ne,xe.props),Zl(ne,xe),ne.return=ue,ne):(ne=po(xe.type,xe.key,xe.props,null,ue.mode,Ue),Zl(ne,xe),ne.return=ue,ne)}function be(ue,ne,xe,Ue){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==xe.containerInfo||ne.stateNode.implementation!==xe.implementation?(ne=As(xe,ue.mode,Ue),ne.return=ue,ne):(ne=f(ne,xe.children||[]),ne.return=ue,ne)}function Le(ue,ne,xe,Ue,Ut){return ne===null||ne.tag!==7?(ne=Lo(xe,ue.mode,Ue,Ut),ne.return=ue,ne):(ne=f(ne,xe),ne.return=ue,ne)}function Ye(ue,ne,xe){if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return ne=Ha(""+ne,ue.mode,xe),ne.return=ue,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case w:return xe=po(ne.type,ne.key,ne.props,null,ue.mode,xe),Zl(xe,ne),xe.return=ue,xe;case C:return ne=As(ne,ue.mode,xe),ne.return=ue,ne;case K:return ne=Mr(ne),Ye(ue,ne,xe)}if(me(ne)||Re(ne))return ne=Lo(ne,ue.mode,xe,null),ne.return=ue,ne;if(typeof ne.then=="function")return Ye(ue,fu(ne),xe);if(ne.$$typeof===L)return Ye(ue,lu(ue,ne),xe);hu(ue,ne)}return null}function ke(ue,ne,xe,Ue){var Ut=ne!==null?ne.key:null;if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return Ut!==null?null:N(ue,ne,""+xe,Ue);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case w:return xe.key===Ut?Q(ue,ne,xe,Ue):null;case C:return xe.key===Ut?be(ue,ne,xe,Ue):null;case K:return xe=Mr(xe),ke(ue,ne,xe,Ue)}if(me(xe)||Re(xe))return Ut!==null?null:Le(ue,ne,xe,Ue,null);if(typeof xe.then=="function")return ke(ue,ne,fu(xe),Ue);if(xe.$$typeof===L)return ke(ue,ne,lu(ue,xe),Ue);hu(ue,xe)}return null}function Ee(ue,ne,xe,Ue,Ut){if(typeof Ue=="string"&&Ue!==""||typeof Ue=="number"||typeof Ue=="bigint")return ue=ue.get(xe)||null,N(ne,ue,""+Ue,Ut);if(typeof Ue=="object"&&Ue!==null){switch(Ue.$$typeof){case w:return ue=ue.get(Ue.key===null?xe:Ue.key)||null,Q(ne,ue,Ue,Ut);case C:return ue=ue.get(Ue.key===null?xe:Ue.key)||null,be(ne,ue,Ue,Ut);case K:return Ue=Mr(Ue),Ee(ue,ne,xe,Ue,Ut)}if(me(Ue)||Re(Ue))return ue=ue.get(xe)||null,Le(ne,ue,Ue,Ut,null);if(typeof Ue.then=="function")return Ee(ue,ne,xe,fu(Ue),Ut);if(Ue.$$typeof===L)return Ee(ue,ne,xe,lu(ne,Ue),Ut);hu(ne,Ue)}return null}function Dt(ue,ne,xe,Ue){for(var Ut=null,Pn=null,It=ne,bn=ne=0,Nn=null;It!==null&&bn<xe.length;bn++){It.index>bn?(Nn=It,It=null):Nn=It.sibling;var Hn=ke(ue,It,xe[bn],Ue);if(Hn===null){It===null&&(It=Nn);break}t&&It&&Hn.alternate===null&&s(ue,It),ne=m(Hn,ne,bn),Pn===null?Ut=Hn:Pn.sibling=Hn,Pn=Hn,It=Nn}if(bn===xe.length)return o(ue,It),Rn&&wa(ue,bn),Ut;if(It===null){for(;bn<xe.length;bn++)It=Ye(ue,xe[bn],Ue),It!==null&&(ne=m(It,ne,bn),Pn===null?Ut=It:Pn.sibling=It,Pn=It);return Rn&&wa(ue,bn),Ut}for(It=r(It);bn<xe.length;bn++)Nn=Ee(It,ue,bn,xe[bn],Ue),Nn!==null&&(t&&Nn.alternate!==null&&It.delete(Nn.key===null?bn:Nn.key),ne=m(Nn,ne,bn),Pn===null?Ut=Nn:Pn.sibling=Nn,Pn=Nn);return t&&It.forEach(function(cr){return s(ue,cr)}),Rn&&wa(ue,bn),Ut}function Xt(ue,ne,xe,Ue){if(xe==null)throw Error(a(151));for(var Ut=null,Pn=null,It=ne,bn=ne=0,Nn=null,Hn=xe.next();It!==null&&!Hn.done;bn++,Hn=xe.next()){It.index>bn?(Nn=It,It=null):Nn=It.sibling;var cr=ke(ue,It,Hn.value,Ue);if(cr===null){It===null&&(It=Nn);break}t&&It&&cr.alternate===null&&s(ue,It),ne=m(cr,ne,bn),Pn===null?Ut=cr:Pn.sibling=cr,Pn=cr,It=Nn}if(Hn.done)return o(ue,It),Rn&&wa(ue,bn),Ut;if(It===null){for(;!Hn.done;bn++,Hn=xe.next())Hn=Ye(ue,Hn.value,Ue),Hn!==null&&(ne=m(Hn,ne,bn),Pn===null?Ut=Hn:Pn.sibling=Hn,Pn=Hn);return Rn&&wa(ue,bn),Ut}for(It=r(It);!Hn.done;bn++,Hn=xe.next())Hn=Ee(It,ue,bn,Hn.value,Ue),Hn!==null&&(t&&Hn.alternate!==null&&It.delete(Hn.key===null?bn:Hn.key),ne=m(Hn,ne,bn),Pn===null?Ut=Hn:Pn.sibling=Hn,Pn=Hn);return t&&It.forEach(function(Vv){return s(ue,Vv)}),Rn&&wa(ue,bn),Ut}function is(ue,ne,xe,Ue){if(typeof xe=="object"&&xe!==null&&xe.type===E&&xe.key===null&&(xe=xe.props.children),typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case w:e:{for(var Ut=xe.key;ne!==null;){if(ne.key===Ut){if(Ut=xe.type,Ut===E){if(ne.tag===7){o(ue,ne.sibling),Ue=f(ne,xe.props.children),Ue.return=ue,ue=Ue;break e}}else if(ne.elementType===Ut||typeof Ut=="object"&&Ut!==null&&Ut.$$typeof===K&&Mr(Ut)===ne.type){o(ue,ne.sibling),Ue=f(ne,xe.props),Zl(Ue,xe),Ue.return=ue,ue=Ue;break e}o(ue,ne);break}else s(ue,ne);ne=ne.sibling}xe.type===E?(Ue=Lo(xe.props.children,ue.mode,Ue,xe.key),Ue.return=ue,ue=Ue):(Ue=po(xe.type,xe.key,xe.props,null,ue.mode,Ue),Zl(Ue,xe),Ue.return=ue,ue=Ue)}return v(ue);case C:e:{for(Ut=xe.key;ne!==null;){if(ne.key===Ut)if(ne.tag===4&&ne.stateNode.containerInfo===xe.containerInfo&&ne.stateNode.implementation===xe.implementation){o(ue,ne.sibling),Ue=f(ne,xe.children||[]),Ue.return=ue,ue=Ue;break e}else{o(ue,ne);break}else s(ue,ne);ne=ne.sibling}Ue=As(xe,ue.mode,Ue),Ue.return=ue,ue=Ue}return v(ue);case K:return xe=Mr(xe),is(ue,ne,xe,Ue)}if(me(xe))return Dt(ue,ne,xe,Ue);if(Re(xe)){if(Ut=Re(xe),typeof Ut!="function")throw Error(a(150));return xe=Ut.call(xe),Xt(ue,ne,xe,Ue)}if(typeof xe.then=="function")return is(ue,ne,fu(xe),Ue);if(xe.$$typeof===L)return is(ue,ne,lu(ue,xe),Ue);hu(ue,xe)}return typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint"?(xe=""+xe,ne!==null&&ne.tag===6?(o(ue,ne.sibling),Ue=f(ne,xe),Ue.return=ue,ue=Ue):(o(ue,ne),Ue=Ha(xe,ue.mode,Ue),Ue.return=ue,ue=Ue),v(ue)):o(ue,ne)}return function(ue,ne,xe,Ue){try{Ql=0;var Ut=is(ue,ne,xe,Ue);return al=null,Ut}catch(It){if(It===il||It===uu)throw It;var Pn=Qo(29,It,null,ue.mode);return Pn.lanes=Ue,Pn.return=ue,Pn}finally{}}}var Tr=k_(!0),j_=k_(!1),Fa=!1;function wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sf(t,s){t=t.updateQueue,s.updateQueue===t&&(s.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Xa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ga(t,s,o){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Yn&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=wr(t),Fl(t,null,o),s}return vr(t,r,s,o),wr(t)}function Jl(t,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=t.pendingLanes,o|=r,s.lanes=o,Lt(t,o)}}function Cf(t,s){var o=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=s:t.next=s,o.lastBaseUpdate=s}var kf=!1;function ec(){if(kf){var t=ol;if(t!==null)throw t}}function tc(t,s,o,r){kf=!1;var f=t.updateQueue;Fa=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var Q=N,be=Q.next;Q.next=null,v===null?m=be:v.next=be,v=Q;var Le=t.alternate;Le!==null&&(Le=Le.updateQueue,N=Le.lastBaseUpdate,N!==v&&(N===null?Le.firstBaseUpdate=be:N.next=be,Le.lastBaseUpdate=Q))}if(m!==null){var Ye=f.baseState;v=0,Le=be=Q=null,N=m;do{var ke=N.lane&-536870913,Ee=ke!==N.lane;if(Ee?(An&ke)===ke:(r&ke)===ke){ke!==0&&ke===sl&&(kf=!0),Le!==null&&(Le=Le.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var Dt=t,Xt=N;ke=s;var is=o;switch(Xt.tag){case 1:if(Dt=Xt.payload,typeof Dt=="function"){Ye=Dt.call(is,Ye,ke);break e}Ye=Dt;break e;case 3:Dt.flags=Dt.flags&-65537|128;case 0:if(Dt=Xt.payload,ke=typeof Dt=="function"?Dt.call(is,Ye,ke):Dt,ke==null)break e;Ye=x({},Ye,ke);break e;case 2:Fa=!0}}ke=N.callback,ke!==null&&(t.flags|=64,Ee&&(t.flags|=8192),Ee=f.callbacks,Ee===null?f.callbacks=[ke]:Ee.push(ke))}else Ee={lane:ke,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Le===null?(be=Le=Ee,Q=Ye):Le=Le.next=Ee,v|=ke;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;Ee=N,N=Ee.next,Ee.next=null,f.lastBaseUpdate=Ee,f.shared.pending=null}}while(!0);Le===null&&(Q=Ye),f.baseState=Q,f.firstBaseUpdate=be,f.lastBaseUpdate=Le,m===null&&(f.shared.lanes=0),Ja|=v,t.lanes=v,t.memoizedState=Ye}}function M_(t,s){if(typeof t!="function")throw Error(a(191,t));t.call(s)}function E_(t,s){var o=t.callbacks;if(o!==null)for(t.callbacks=null,t=0;t<o.length;t++)M_(o[t],s)}var rl=I(null),mu=I(0);function T_(t,s){t=Ra,ee(mu,t),ee(rl,s),Ra=t|s.baseLanes}function jf(){ee(mu,Ra),ee(rl,rl.current)}function Mf(){Ra=mu.current,ce(rl),ce(mu)}var Ai=I(null),Fi=null;function qa(t){var s=t.alternate;ee(qs,qs.current&1),ee(Ai,t),Fi===null&&(s===null||rl.current!==null||s.memoizedState!==null)&&(Fi=t)}function Ef(t){ee(qs,qs.current),ee(Ai,t),Fi===null&&(Fi=t)}function A_(t){t.tag===22?(ee(qs,qs.current),ee(Ai,t),Fi===null&&(Fi=t)):Ka()}function Ka(){ee(qs,qs.current),ee(Ai,Ai.current)}function Ni(t){ce(Ai),Fi===t&&(Fi=null),ce(qs)}var qs=I(0);function pu(t){for(var s=t;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Bh(o)||Lh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ka=0,mn=null,ss=null,oo=null,_u=!1,ll=!1,Ar=!1,gu=0,nc=0,cl=null,R2=0;function $s(){throw Error(a(321))}function Tf(t,s){if(s===null)return!1;for(var o=0;o<s.length&&o<t.length;o++)if(!re(t[o],s[o]))return!1;return!0}function Af(t,s,o,r,f,m){return ka=m,mn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,O.H=t===null||t.memoizedState===null?hg:Wf,Ar=!1,m=o(r,f),Ar=!1,ll&&(m=D_(s,o,r,f)),N_(t),m}function N_(t){O.H=ic;var s=ss!==null&&ss.next!==null;if(ka=0,oo=ss=mn=null,_u=!1,nc=0,cl=null,s)throw Error(a(300));t===null||io||(t=t.dependencies,t!==null&&ru(t)&&(io=!0))}function D_(t,s,o,r){mn=t;var f=0;do{if(ll&&(cl=null),nc=0,ll=!1,25<=f)throw Error(a(301));if(f+=1,oo=ss=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}O.H=mg,m=s(o,r)}while(ll);return m}function B2(){var t=O.H,s=t.useState()[0];return s=typeof s.then=="function"?sc(s):s,t=t.useState()[0],(ss!==null?ss.memoizedState:null)!==t&&(mn.flags|=1024),s}function Nf(){var t=gu!==0;return gu=0,t}function Df(t,s,o){s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~o}function Rf(t){if(_u){for(t=t.memoizedState;t!==null;){var s=t.queue;s!==null&&(s.pending=null),t=t.next}_u=!1}ka=0,oo=ss=mn=null,ll=!1,nc=gu=0,cl=null}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oo===null?mn.memoizedState=oo=t:oo=oo.next=t,oo}function Ks(){if(ss===null){var t=mn.alternate;t=t!==null?t.memoizedState:null}else t=ss.next;var s=oo===null?mn.memoizedState:oo.next;if(s!==null)oo=s,ss=t;else{if(t===null)throw mn.alternate===null?Error(a(467)):Error(a(310));ss=t,t={memoizedState:ss.memoizedState,baseState:ss.baseState,baseQueue:ss.baseQueue,queue:ss.queue,next:null},oo===null?mn.memoizedState=oo=t:oo=oo.next=t}return oo}function yu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sc(t){var s=nc;return nc+=1,cl===null&&(cl=[]),t=w_(cl,t,s),s=mn,(oo===null?s.memoizedState:oo.next)===null&&(s=s.alternate,O.H=s===null||s.memoizedState===null?hg:Wf),t}function xu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return sc(t);if(t.$$typeof===L)return zo(t)}throw Error(a(438,String(t)))}function Bf(t){var s=null,o=mn.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=mn.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=yu(),mn.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(t),r=0;r<t;r++)o[r]=he;return s.index++,o}function ja(t,s){return typeof s=="function"?s(t):s}function bu(t){var s=Ks();return Lf(s,ss,t)}function Lf(t,s,o){var r=t.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=t.baseQueue,m=r.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,r.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{s=f.next;var N=v=null,Q=null,be=s,Le=!1;do{var Ye=be.lane&-536870913;if(Ye!==be.lane?(An&Ye)===Ye:(ka&Ye)===Ye){var ke=be.revertLane;if(ke===0)Q!==null&&(Q=Q.next={lane:0,revertLane:0,gesture:null,action:be.action,hasEagerState:be.hasEagerState,eagerState:be.eagerState,next:null}),Ye===sl&&(Le=!0);else if((ka&ke)===ke){be=be.next,ke===sl&&(Le=!0);continue}else Ye={lane:0,revertLane:be.revertLane,gesture:null,action:be.action,hasEagerState:be.hasEagerState,eagerState:be.eagerState,next:null},Q===null?(N=Q=Ye,v=m):Q=Q.next=Ye,mn.lanes|=ke,Ja|=ke;Ye=be.action,Ar&&o(m,Ye),m=be.hasEagerState?be.eagerState:o(m,Ye)}else ke={lane:Ye,revertLane:be.revertLane,gesture:be.gesture,action:be.action,hasEagerState:be.hasEagerState,eagerState:be.eagerState,next:null},Q===null?(N=Q=ke,v=m):Q=Q.next=ke,mn.lanes|=Ye,Ja|=Ye;be=be.next}while(be!==null&&be!==s);if(Q===null?v=m:Q.next=N,!re(m,t.memoizedState)&&(io=!0,Le&&(o=ol,o!==null)))throw o;t.memoizedState=m,t.baseState=v,t.baseQueue=Q,r.lastRenderedState=m}return f===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Of(t){var s=Ks(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=t;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=t(m,v.action),v=v.next;while(v!==f);re(m,s.memoizedState)||(io=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function R_(t,s,o){var r=mn,f=Ks(),m=Rn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!re((ss||f).memoizedState,o);if(v&&(f.memoizedState=o,io=!0),f=f.queue,If(O_.bind(null,r,f,t),[t]),f.getSnapshot!==s||v||oo!==null&&oo.memoizedState.tag&1){if(r.flags|=2048,ul(9,{destroy:void 0},L_.bind(null,r,f,o,s),null),ms===null)throw Error(a(349));m||(ka&127)!==0||B_(r,s,o)}return o}function B_(t,s,o){t.flags|=16384,t={getSnapshot:s,value:o},s=mn.updateQueue,s===null?(s=yu(),mn.updateQueue=s,s.stores=[t]):(o=s.stores,o===null?s.stores=[t]:o.push(t))}function L_(t,s,o,r){s.value=o,s.getSnapshot=r,z_(s)&&$_(t)}function O_(t,s,o){return o(function(){z_(s)&&$_(t)})}function z_(t){var s=t.getSnapshot;t=t.value;try{var o=s();return!re(t,o)}catch{return!0}}function $_(t){var s=ca(t,2);s!==null&&vi(s,t,2)}function zf(t){var s=ai();if(typeof t=="function"){var o=t;if(t=o(),Ar){De(!0);try{o()}finally{De(!1)}}}return s.memoizedState=s.baseState=t,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:t},s}function I_(t,s,o,r){return t.baseState=o,Lf(t,ss,typeof r=="function"?r:ja)}function L2(t,s,o,r,f){if(Su(t))throw Error(a(485));if(t=s.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};O.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,P_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function P_(t,s){var o=s.action,r=s.payload,f=t.state;if(s.isTransition){var m=O.T,v={};O.T=v;try{var N=o(f,r),Q=O.S;Q!==null&&Q(v,N),H_(t,s,N)}catch(be){$f(t,s,be)}finally{m!==null&&v.types!==null&&(m.types=v.types),O.T=m}}else try{m=o(f,r),H_(t,s,m)}catch(be){$f(t,s,be)}}function H_(t,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){U_(t,s,r)},function(r){return $f(t,s,r)}):U_(t,s,o)}function U_(t,s,o){s.status="fulfilled",s.value=o,V_(s),t.state=o,s=t.pending,s!==null&&(o=s.next,o===s?t.pending=null:(o=o.next,s.next=o,P_(t,o)))}function $f(t,s,o){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,V_(s),s=s.next;while(s!==r)}t.action=null}function V_(t){t=t.listeners;for(var s=0;s<t.length;s++)(0,t[s])()}function Y_(t,s){return s}function W_(t,s){if(Rn){var o=ms.formState;if(o!==null){e:{var r=mn;if(Rn){if(ks){t:{for(var f=ks,m=Wi;f.nodeType!==8;){if(!m){f=null;break t}if(f=Xi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){ks=Xi(f.nextSibling),r=f.data==="F!";break e}}Ya(r)}r=!1}r&&(s=o[0])}}return o=ai(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Y_,lastRenderedState:s},o.queue=r,o=ug.bind(null,mn,r),r.dispatch=o,r=zf(!1),m=Yf.bind(null,mn,!1,r.queue),r=ai(),f={state:s,dispatch:null,action:t,pending:null},r.queue=f,o=L2.bind(null,mn,f,m,o),f.dispatch=o,r.memoizedState=t,[s,o,!1]}function F_(t){var s=Ks();return X_(s,ss,t)}function X_(t,s,o){if(s=Lf(t,s,Y_)[0],t=bu(ja)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=sc(s)}catch(v){throw v===il?uu:v}else r=s;s=Ks();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(mn.flags|=2048,ul(9,{destroy:void 0},O2.bind(null,f,o),null)),[r,m,t]}function O2(t,s){t.action=s}function G_(t){var s=Ks(),o=ss;if(o!==null)return X_(s,o,t);Ks(),s=s.memoizedState,o=Ks();var r=o.queue.dispatch;return o.memoizedState=t,[s,r,!1]}function ul(t,s,o,r){return t={tag:t,create:o,deps:r,inst:s,next:null},s=mn.updateQueue,s===null&&(s=yu(),mn.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=t.next=t:(r=o.next,o.next=t,t.next=r,s.lastEffect=t),t}function q_(){return Ks().memoizedState}function vu(t,s,o,r){var f=ai();mn.flags|=t,f.memoizedState=ul(1|s,{destroy:void 0},o,r===void 0?null:r)}function wu(t,s,o,r){var f=Ks();r=r===void 0?null:r;var m=f.memoizedState.inst;ss!==null&&r!==null&&Tf(r,ss.memoizedState.deps)?f.memoizedState=ul(s,m,o,r):(mn.flags|=t,f.memoizedState=ul(1|s,m,o,r))}function K_(t,s){vu(8390656,8,t,s)}function If(t,s){wu(2048,8,t,s)}function z2(t){mn.flags|=4;var s=mn.updateQueue;if(s===null)s=yu(),mn.updateQueue=s,s.events=[t];else{var o=s.events;o===null?s.events=[t]:o.push(t)}}function Q_(t){var s=Ks().memoizedState;return z2({ref:s,nextImpl:t}),function(){if((Yn&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function Z_(t,s){return wu(4,2,t,s)}function J_(t,s){return wu(4,4,t,s)}function eg(t,s){if(typeof s=="function"){t=t();var o=s(t);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return t=t(),s.current=t,function(){s.current=null}}function tg(t,s,o){o=o!=null?o.concat([t]):null,wu(4,4,eg.bind(null,s,t),o)}function Pf(){}function ng(t,s){var o=Ks();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&Tf(s,r[1])?r[0]:(o.memoizedState=[t,s],t)}function sg(t,s){var o=Ks();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&Tf(s,r[1]))return r[0];if(r=t(),Ar){De(!0);try{t()}finally{De(!1)}}return o.memoizedState=[r,s],r}function Hf(t,s,o){return o===void 0||(ka&1073741824)!==0&&(An&261930)===0?t.memoizedState=s:(t.memoizedState=o,t=o0(),mn.lanes|=t,Ja|=t,o)}function og(t,s,o,r){return re(o,s)?o:rl.current!==null?(t=Hf(t,o,r),re(t,s)||(io=!0),t):(ka&42)===0||(ka&1073741824)!==0&&(An&261930)===0?(io=!0,t.memoizedState=o):(t=o0(),mn.lanes|=t,Ja|=t,s)}function ig(t,s,o,r,f){var m=ae.p;ae.p=m!==0&&8>m?m:8;var v=O.T,N={};O.T=N,Yf(t,!1,s,o);try{var Q=f(),be=O.S;if(be!==null&&be(N,Q),Q!==null&&typeof Q=="object"&&typeof Q.then=="function"){var Le=D2(Q,r);oc(t,s,Le,Bi(t))}else oc(t,s,r,Bi(t))}catch(Ye){oc(t,s,{then:function(){},status:"rejected",reason:Ye},Bi())}finally{ae.p=m,v!==null&&N.types!==null&&(v.types=N.types),O.T=v}}function $2(){}function Uf(t,s,o,r){if(t.tag!==5)throw Error(a(476));var f=ag(t).queue;ig(t,f,s,H,o===null?$2:function(){return rg(t),o(r)})}function ag(t){var s=t.memoizedState;if(s!==null)return s;s={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:H},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:o},next:null},t.memoizedState=s,t=t.alternate,t!==null&&(t.memoizedState=s),s}function rg(t){var s=ag(t);s.next===null&&(s=t.alternate.memoizedState),oc(t,s.next.queue,{},Bi())}function Vf(){return zo(vc)}function lg(){return Ks().memoizedState}function cg(){return Ks().memoizedState}function I2(t){for(var s=t.return;s!==null;){switch(s.tag){case 24:case 3:var o=Bi();t=Xa(o);var r=Ga(s,t,o);r!==null&&(vi(r,s,o),Jl(r,s,o)),s={cache:yf()},t.payload=s;return}s=s.return}}function P2(t,s,o){var r=Bi();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Su(t)?dg(s,o):(o=Qr(t,s,o,r),o!==null&&(vi(o,t,r),fg(o,s,r)))}function ug(t,s,o){var r=Bi();oc(t,s,o,r)}function oc(t,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Su(t))dg(s,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,N=m(v,o);if(f.hasEagerState=!0,f.eagerState=N,re(N,v))return vr(t,s,f,0),ms===null&&br(),!1}catch{}finally{}if(o=Qr(t,s,f,r),o!==null)return vi(o,t,r),fg(o,s,r),!0}return!1}function Yf(t,s,o,r){if(r={lane:2,revertLane:wh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Su(t)){if(s)throw Error(a(479))}else s=Qr(t,o,r,2),s!==null&&vi(s,t,2)}function Su(t){var s=t.alternate;return t===mn||s!==null&&s===mn}function dg(t,s){ll=_u=!0;var o=t.pending;o===null?s.next=s:(s.next=o.next,o.next=s),t.pending=s}function fg(t,s,o){if((o&4194048)!==0){var r=s.lanes;r&=t.pendingLanes,o|=r,s.lanes=o,Lt(t,o)}}var ic={readContext:zo,use:xu,useCallback:$s,useContext:$s,useEffect:$s,useImperativeHandle:$s,useLayoutEffect:$s,useInsertionEffect:$s,useMemo:$s,useReducer:$s,useRef:$s,useState:$s,useDebugValue:$s,useDeferredValue:$s,useTransition:$s,useSyncExternalStore:$s,useId:$s,useHostTransitionStatus:$s,useFormState:$s,useActionState:$s,useOptimistic:$s,useMemoCache:$s,useCacheRefresh:$s};ic.useEffectEvent=$s;var hg={readContext:zo,use:xu,useCallback:function(t,s){return ai().memoizedState=[t,s===void 0?null:s],t},useContext:zo,useEffect:K_,useImperativeHandle:function(t,s,o){o=o!=null?o.concat([t]):null,vu(4194308,4,eg.bind(null,s,t),o)},useLayoutEffect:function(t,s){return vu(4194308,4,t,s)},useInsertionEffect:function(t,s){vu(4,2,t,s)},useMemo:function(t,s){var o=ai();s=s===void 0?null:s;var r=t();if(Ar){De(!0);try{t()}finally{De(!1)}}return o.memoizedState=[r,s],r},useReducer:function(t,s,o){var r=ai();if(o!==void 0){var f=o(s);if(Ar){De(!0);try{o(s)}finally{De(!1)}}}else f=s;return r.memoizedState=r.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},r.queue=t,t=t.dispatch=P2.bind(null,mn,t),[r.memoizedState,t]},useRef:function(t){var s=ai();return t={current:t},s.memoizedState=t},useState:function(t){t=zf(t);var s=t.queue,o=ug.bind(null,mn,s);return s.dispatch=o,[t.memoizedState,o]},useDebugValue:Pf,useDeferredValue:function(t,s){var o=ai();return Hf(o,t,s)},useTransition:function(){var t=zf(!1);return t=ig.bind(null,mn,t.queue,!0,!1),ai().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,s,o){var r=mn,f=ai();if(Rn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),ms===null)throw Error(a(349));(An&127)!==0||B_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,K_(O_.bind(null,r,m,t),[t]),r.flags|=2048,ul(9,{destroy:void 0},L_.bind(null,r,m,o,s),null),o},useId:function(){var t=ai(),s=ms.identifierPrefix;if(Rn){var o=da,r=ua;o=(r&~(1<<32-ge(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=gu++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=R2++,s="_"+s+"r_"+o.toString(32)+"_";return t.memoizedState=s},useHostTransitionStatus:Vf,useFormState:W_,useActionState:W_,useOptimistic:function(t){var s=ai();s.memoizedState=s.baseState=t;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Yf.bind(null,mn,!0,o),o.dispatch=s,[t,s]},useMemoCache:Bf,useCacheRefresh:function(){return ai().memoizedState=I2.bind(null,mn)},useEffectEvent:function(t){var s=ai(),o={impl:t};return s.memoizedState=o,function(){if((Yn&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Wf={readContext:zo,use:xu,useCallback:ng,useContext:zo,useEffect:If,useImperativeHandle:tg,useInsertionEffect:Z_,useLayoutEffect:J_,useMemo:sg,useReducer:bu,useRef:q_,useState:function(){return bu(ja)},useDebugValue:Pf,useDeferredValue:function(t,s){var o=Ks();return og(o,ss.memoizedState,t,s)},useTransition:function(){var t=bu(ja)[0],s=Ks().memoizedState;return[typeof t=="boolean"?t:sc(t),s]},useSyncExternalStore:R_,useId:lg,useHostTransitionStatus:Vf,useFormState:F_,useActionState:F_,useOptimistic:function(t,s){var o=Ks();return I_(o,ss,t,s)},useMemoCache:Bf,useCacheRefresh:cg};Wf.useEffectEvent=Q_;var mg={readContext:zo,use:xu,useCallback:ng,useContext:zo,useEffect:If,useImperativeHandle:tg,useInsertionEffect:Z_,useLayoutEffect:J_,useMemo:sg,useReducer:Of,useRef:q_,useState:function(){return Of(ja)},useDebugValue:Pf,useDeferredValue:function(t,s){var o=Ks();return ss===null?Hf(o,t,s):og(o,ss.memoizedState,t,s)},useTransition:function(){var t=Of(ja)[0],s=Ks().memoizedState;return[typeof t=="boolean"?t:sc(t),s]},useSyncExternalStore:R_,useId:lg,useHostTransitionStatus:Vf,useFormState:G_,useActionState:G_,useOptimistic:function(t,s){var o=Ks();return ss!==null?I_(o,ss,t,s):(o.baseState=t,[t,o.queue.dispatch])},useMemoCache:Bf,useCacheRefresh:cg};mg.useEffectEvent=Q_;function Ff(t,s,o,r){s=t.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Xf={enqueueSetState:function(t,s,o){t=t._reactInternals;var r=Bi(),f=Xa(r);f.payload=s,o!=null&&(f.callback=o),s=Ga(t,f,r),s!==null&&(vi(s,t,r),Jl(s,t,r))},enqueueReplaceState:function(t,s,o){t=t._reactInternals;var r=Bi(),f=Xa(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Ga(t,f,r),s!==null&&(vi(s,t,r),Jl(s,t,r))},enqueueForceUpdate:function(t,s){t=t._reactInternals;var o=Bi(),r=Xa(o);r.tag=2,s!=null&&(r.callback=s),s=Ga(t,r,o),s!==null&&(vi(s,t,o),Jl(s,t,o))}};function pg(t,s,o,r,f,m,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,m,v):s.prototype&&s.prototype.isPureReactComponent?!ie(o,r)||!ie(f,m):!0}function _g(t,s,o,r){t=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==t&&Xf.enqueueReplaceState(s,s.state,null)}function Nr(t,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(t=t.defaultProps){o===s&&(o=x({},o));for(var f in t)o[f]===void 0&&(o[f]=t[f])}return o}function gg(t){xr(t)}function yg(t){console.error(t)}function xg(t){xr(t)}function Cu(t,s){try{var o=t.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function bg(t,s,o){try{var r=t.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Gf(t,s,o){return o=Xa(o),o.tag=3,o.payload={element:null},o.callback=function(){Cu(t,s)},o}function vg(t){return t=Xa(t),t.tag=3,t}function wg(t,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;t.payload=function(){return f(m)},t.callback=function(){bg(s,o,r)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){bg(s,o,r),typeof f!="function"&&(er===null?er=new Set([this]):er.add(this));var N=r.stack;this.componentDidCatch(r.value,{componentStack:N!==null?N:""})})}function H2(t,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&nl(s,o,f,!0),o=Ai.current,o!==null){switch(o.tag){case 31:case 13:return Fi===null?Ou():o.alternate===null&&Is===0&&(Is=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===du?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),xh(t,r,f)),!1;case 22:return o.flags|=65536,r===du?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),xh(t,r,f)),!1}throw Error(a(435,o.tag))}return xh(t,r,f),Ou(),!1}if(Rn)return s=Ai.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==hf&&(t=Error(a(422),{cause:r}),Gl(Ui(t,o)))):(r!==hf&&(s=Error(a(423),{cause:r}),Gl(Ui(s,o))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,r=Ui(r,o),f=Gf(t.stateNode,r,f),Cf(t,f),Is!==4&&(Is=2)),!1;var m=Error(a(520),{cause:r});if(m=Ui(m,o),hc===null?hc=[m]:hc.push(m),Is!==4&&(Is=2),s===null)return!0;r=Ui(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,t=f&-f,o.lanes|=t,t=Gf(o.stateNode,r,t),Cf(o,t),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(er===null||!er.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=vg(f),wg(f,t,o,r),Cf(o,f),!1}o=o.return}while(o!==null);return!1}var qf=Error(a(461)),io=!1;function $o(t,s,o,r){s.child=t===null?j_(s,null,o,r):Tr(s,t.child,o,r)}function Sg(t,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var v={};for(var N in r)N!=="ref"&&(v[N]=r[N])}else v=r;return kr(s),r=Af(t,s,o,v,m,f),N=Nf(),t!==null&&!io?(Df(t,s,f),Ma(t,s,f)):(Rn&&N&&df(s),s.flags|=1,$o(t,s,r,f),s.child)}function Cg(t,s,o,r,f){if(t===null){var m=o.type;return typeof m=="function"&&!Zr(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,kg(t,s,m,r,f)):(t=po(o.type,null,r,s,s.mode,f),t.ref=s.ref,t.return=s,s.child=t)}if(m=t.child,!sh(t,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:ie,o(v,r)&&t.ref===s.ref)return Ma(t,s,f)}return s.flags|=1,t=an(m,r),t.ref=s.ref,t.return=s,s.child=t}function kg(t,s,o,r,f){if(t!==null){var m=t.memoizedProps;if(ie(m,r)&&t.ref===s.ref)if(io=!1,s.pendingProps=r=m,sh(t,f))(t.flags&131072)!==0&&(io=!0);else return s.lanes=t.lanes,Ma(t,s,f)}return Kf(t,s,o,r,f)}function jg(t,s,o,r){var f=r.children,m=t!==null?t.memoizedState:null;if(t===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,t!==null){for(r=s.child=t.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return Mg(t,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},t!==null&&cu(s,m!==null?m.cachePool:null),m!==null?T_(s,m):jf(),A_(s);else return r=s.lanes=536870912,Mg(t,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(cu(s,m.cachePool),T_(s,m),Ka(),s.memoizedState=null):(t!==null&&cu(s,null),jf(),Ka());return $o(t,s,f,o),s.child}function ac(t,s){return t!==null&&t.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function Mg(t,s,o,r,f){var m=bf();return m=m===null?null:{parent:so._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},t!==null&&cu(s,null),jf(),A_(s),t!==null&&nl(t,s,r,!0),s.childLanes=f,null}function ku(t,s){return s=Mu({mode:s.mode,children:s.children},t.mode),s.ref=t.ref,t.child=s,s.return=t,s}function Eg(t,s,o){return Tr(s,t.child,null,o),t=ku(s,s.pendingProps),t.flags|=2,Ni(s),s.memoizedState=null,t}function U2(t,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,t===null){if(Rn){if(r.mode==="hidden")return t=ku(s,r),s.lanes=536870912,ac(null,t);if(Ef(s),(t=ks)?(t=P0(t,Wi),t=t!==null&&t.data==="&"?t:null,t!==null&&(s.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:ua,overflow:da}:null,retryLane:536870912,hydrationErrors:null},o=Zo(t),o.return=s,s.child=o,Oo=s,ks=null)):t=null,t===null)throw Ya(s);return s.lanes=536870912,null}return ku(s,r)}var m=t.memoizedState;if(m!==null){var v=m.dehydrated;if(Ef(s),f)if(s.flags&256)s.flags&=-257,s=Eg(t,s,o);else if(s.memoizedState!==null)s.child=t.child,s.flags|=128,s=null;else throw Error(a(558));else if(io||nl(t,s,o,!1),f=(o&t.childLanes)!==0,io||f){if(r=ms,r!==null&&(v=St(r,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,ca(t,v),vi(r,t,v),qf;Ou(),s=Eg(t,s,o)}else t=m.treeContext,ks=Xi(v.nextSibling),Oo=s,Rn=!0,Va=null,Wi=!1,t!==null&&m_(s,t),s=ku(s,r),s.flags|=4096;return s}return t=an(t.child,{mode:r.mode,children:r.children}),t.ref=s.ref,s.child=t,t.return=s,t}function ju(t,s){var o=s.ref;if(o===null)t!==null&&t.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(t===null||t.ref!==o)&&(s.flags|=4194816)}}function Kf(t,s,o,r,f){return kr(s),o=Af(t,s,o,r,void 0,f),r=Nf(),t!==null&&!io?(Df(t,s,f),Ma(t,s,f)):(Rn&&r&&df(s),s.flags|=1,$o(t,s,o,f),s.child)}function Tg(t,s,o,r,f,m){return kr(s),s.updateQueue=null,o=D_(s,r,o,f),N_(t),r=Nf(),t!==null&&!io?(Df(t,s,m),Ma(t,s,m)):(Rn&&r&&df(s),s.flags|=1,$o(t,s,o,m),s.child)}function Ag(t,s,o,r,f){if(kr(s),s.stateNode===null){var m=va,v=o.contextType;typeof v=="object"&&v!==null&&(m=zo(v)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Xf,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},wf(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?zo(v):va,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Ff(s,o,v,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&Xf.enqueueReplaceState(m,m.state,null),tc(s,r,m,f),ec(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(t===null){m=s.stateNode;var N=s.memoizedProps,Q=Nr(o,N);m.props=Q;var be=m.context,Le=o.contextType;v=va,typeof Le=="object"&&Le!==null&&(v=zo(Le));var Ye=o.getDerivedStateFromProps;Le=typeof Ye=="function"||typeof m.getSnapshotBeforeUpdate=="function",N=s.pendingProps!==N,Le||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(N||be!==v)&&_g(s,m,r,v),Fa=!1;var ke=s.memoizedState;m.state=ke,tc(s,r,m,f),ec(),be=s.memoizedState,N||ke!==be||Fa?(typeof Ye=="function"&&(Ff(s,o,Ye,r),be=s.memoizedState),(Q=Fa||pg(s,o,Q,r,ke,be,v))?(Le||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=be),m.props=r,m.state=be,m.context=v,r=Q):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,Sf(t,s),v=s.memoizedProps,Le=Nr(o,v),m.props=Le,Ye=s.pendingProps,ke=m.context,be=o.contextType,Q=va,typeof be=="object"&&be!==null&&(Q=zo(be)),N=o.getDerivedStateFromProps,(be=typeof N=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==Ye||ke!==Q)&&_g(s,m,r,Q),Fa=!1,ke=s.memoizedState,m.state=ke,tc(s,r,m,f),ec();var Ee=s.memoizedState;v!==Ye||ke!==Ee||Fa||t!==null&&t.dependencies!==null&&ru(t.dependencies)?(typeof N=="function"&&(Ff(s,o,N,r),Ee=s.memoizedState),(Le=Fa||pg(s,o,Le,r,ke,Ee,Q)||t!==null&&t.dependencies!==null&&ru(t.dependencies))?(be||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,Ee,Q),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,Ee,Q)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===t.memoizedProps&&ke===t.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&ke===t.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=Ee),m.props=r,m.state=Ee,m.context=Q,r=Le):(typeof m.componentDidUpdate!="function"||v===t.memoizedProps&&ke===t.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&ke===t.memoizedState||(s.flags|=1024),r=!1)}return m=r,ju(t,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,t!==null&&r?(s.child=Tr(s,t.child,null,f),s.child=Tr(s,null,o,f)):$o(t,s,o,f),s.memoizedState=m.state,t=s.child):t=Ma(t,s,f),t}function Ng(t,s,o,r){return Sr(),s.flags|=256,$o(t,s,o,r),s.child}var Qf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zf(t){return{baseLanes:t,cachePool:b_()}}function Jf(t,s,o){return t=t!==null?t.childLanes&~o:0,s&&(t|=Ri),t}function Dg(t,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=t!==null&&t.memoizedState===null?!1:(qs.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,t===null){if(Rn){if(f?qa(s):Ka(),(t=ks)?(t=P0(t,Wi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(s.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:ua,overflow:da}:null,retryLane:536870912,hydrationErrors:null},o=Zo(t),o.return=s,s.child=o,Oo=s,ks=null)):t=null,t===null)throw Ya(s);return Lh(t)?s.lanes=32:s.lanes=536870912,null}var N=r.children;return r=r.fallback,f?(Ka(),f=s.mode,N=Mu({mode:"hidden",children:N},f),r=Lo(r,f,o,null),N.return=s,r.return=s,N.sibling=r,s.child=N,r=s.child,r.memoizedState=Zf(o),r.childLanes=Jf(t,v,o),s.memoizedState=Qf,ac(null,r)):(qa(s),eh(s,N))}var Q=t.memoizedState;if(Q!==null&&(N=Q.dehydrated,N!==null)){if(m)s.flags&256?(qa(s),s.flags&=-257,s=th(t,s,o)):s.memoizedState!==null?(Ka(),s.child=t.child,s.flags|=128,s=null):(Ka(),N=r.fallback,f=s.mode,r=Mu({mode:"visible",children:r.children},f),N=Lo(N,f,o,null),N.flags|=2,r.return=s,N.return=s,r.sibling=N,s.child=r,Tr(s,t.child,null,o),r=s.child,r.memoizedState=Zf(o),r.childLanes=Jf(t,v,o),s.memoizedState=Qf,s=ac(null,r));else if(qa(s),Lh(N)){if(v=N.nextSibling&&N.nextSibling.dataset,v)var be=v.dgst;v=be,r=Error(a(419)),r.stack="",r.digest=v,Gl({value:r,source:null,stack:null}),s=th(t,s,o)}else if(io||nl(t,s,o,!1),v=(o&t.childLanes)!==0,io||v){if(v=ms,v!==null&&(r=St(v,o),r!==0&&r!==Q.retryLane))throw Q.retryLane=r,ca(t,r),vi(v,t,r),qf;Bh(N)||Ou(),s=th(t,s,o)}else Bh(N)?(s.flags|=192,s.child=t.child,s=null):(t=Q.treeContext,ks=Xi(N.nextSibling),Oo=s,Rn=!0,Va=null,Wi=!1,t!==null&&m_(s,t),s=eh(s,r.children),s.flags|=4096);return s}return f?(Ka(),N=r.fallback,f=s.mode,Q=t.child,be=Q.sibling,r=an(Q,{mode:"hidden",children:r.children}),r.subtreeFlags=Q.subtreeFlags&65011712,be!==null?N=an(be,N):(N=Lo(N,f,o,null),N.flags|=2),N.return=s,r.return=s,r.sibling=N,s.child=r,ac(null,r),r=s.child,N=t.child.memoizedState,N===null?N=Zf(o):(f=N.cachePool,f!==null?(Q=so._currentValue,f=f.parent!==Q?{parent:Q,pool:Q}:f):f=b_(),N={baseLanes:N.baseLanes|o,cachePool:f}),r.memoizedState=N,r.childLanes=Jf(t,v,o),s.memoizedState=Qf,ac(t.child,r)):(qa(s),o=t.child,t=o.sibling,o=an(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,t!==null&&(v=s.deletions,v===null?(s.deletions=[t],s.flags|=16):v.push(t)),s.child=o,s.memoizedState=null,o)}function eh(t,s){return s=Mu({mode:"visible",children:s},t.mode),s.return=t,t.child=s}function Mu(t,s){return t=Qo(22,t,null,s),t.lanes=0,t}function th(t,s,o){return Tr(s,t.child,null,o),t=eh(s,s.pendingProps.children),t.flags|=2,s.memoizedState=null,t}function Rg(t,s,o){t.lanes|=s;var r=t.alternate;r!==null&&(r.lanes|=s),_f(t.return,s,o)}function nh(t,s,o,r,f,m){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function Bg(t,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var v=qs.current,N=(v&2)!==0;if(N?(v=v&1|2,s.flags|=128):v&=1,ee(qs,v),$o(t,s,r,o),r=Rn?Xl:0,!N&&t!==null&&(t.flags&128)!==0)e:for(t=s.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rg(t,o,s);else if(t.tag===19)Rg(t,o,s);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break e;for(;t.sibling===null;){if(t.return===null||t.return===s)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)t=o.alternate,t!==null&&pu(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),nh(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(t=f.alternate,t!==null&&pu(t)===null){s.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}nh(s,!0,o,null,m,r);break;case"together":nh(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function Ma(t,s,o){if(t!==null&&(s.dependencies=t.dependencies),Ja|=s.lanes,(o&s.childLanes)===0)if(t!==null){if(nl(t,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(t!==null&&s.child!==t.child)throw Error(a(153));if(s.child!==null){for(t=s.child,o=an(t,t.pendingProps),s.child=o,o.return=s;t.sibling!==null;)t=t.sibling,o=o.sibling=an(t,t.pendingProps),o.return=s;o.sibling=null}return s.child}function sh(t,s){return(t.lanes&s)!==0?!0:(t=t.dependencies,!!(t!==null&&ru(t)))}function V2(t,s,o){switch(s.tag){case 3:Je(s,s.stateNode.containerInfo),Wa(s,so,t.memoizedState.cache),Sr();break;case 27:case 5:pt(s);break;case 4:Je(s,s.stateNode.containerInfo);break;case 10:Wa(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,Ef(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(qa(s),s.flags|=128,null):(o&s.child.childLanes)!==0?Dg(t,s,o):(qa(s),t=Ma(t,s,o),t!==null?t.sibling:null);qa(s);break;case 19:var f=(t.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(nl(t,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return Bg(t,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ee(qs,qs.current),r)break;return null;case 22:return s.lanes=0,jg(t,s,o,s.pendingProps);case 24:Wa(s,so,t.memoizedState.cache)}return Ma(t,s,o)}function Lg(t,s,o){if(t!==null)if(t.memoizedProps!==s.pendingProps)io=!0;else{if(!sh(t,o)&&(s.flags&128)===0)return io=!1,V2(t,s,o);io=(t.flags&131072)!==0}else io=!1,Rn&&(s.flags&1048576)!==0&&h_(s,Xl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(t=Mr(s.elementType),s.type=t,typeof t=="function")Zr(t)?(r=Nr(t,r),s.tag=1,s=Ag(null,s,t,r,o)):(s.tag=0,s=Kf(null,s,t,r,o));else{if(t!=null){var f=t.$$typeof;if(f===T){s.tag=11,s=Sg(null,s,t,r,o);break e}else if(f===W){s.tag=14,s=Cg(null,s,t,r,o);break e}}throw s=oe(t)||t,Error(a(306,s,""))}}return s;case 0:return Kf(t,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=Nr(r,s.pendingProps),Ag(t,s,r,f,o);case 3:e:{if(Je(s,s.stateNode.containerInfo),t===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,Sf(t,s),tc(s,r,null,o);var v=s.memoizedState;if(r=v.cache,Wa(s,so,r),r!==m.cache&&gf(s,[so],o,!0),ec(),r=v.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=Ng(t,s,r,o);break e}else if(r!==f){f=Ui(Error(a(424)),s),Gl(f),s=Ng(t,s,r,o);break e}else{switch(t=s.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ks=Xi(t.firstChild),Oo=s,Rn=!0,Va=null,Wi=!0,o=j_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Sr(),r===f){s=Ma(t,s,o);break e}$o(t,s,r,o)}s=s.child}return s;case 26:return ju(t,s),t===null?(o=F0(s.type,null,s.pendingProps,null))?s.memoizedState=o:Rn||(o=s.type,t=s.pendingProps,r=Vu(_e.current).createElement(o),r[Nt]=s,r[ln]=t,Io(r,o,t),Cn(r),s.stateNode=r):s.memoizedState=F0(s.type,t.memoizedProps,s.pendingProps,t.memoizedState),null;case 27:return pt(s),t===null&&Rn&&(r=s.stateNode=V0(s.type,s.pendingProps,_e.current),Oo=s,Wi=!0,f=ks,or(s.type)?(Oh=f,ks=Xi(r.firstChild)):ks=f),$o(t,s,s.pendingProps.children,o),ju(t,s),t===null&&(s.flags|=4194304),s.child;case 5:return t===null&&Rn&&((f=r=ks)&&(r=xv(r,s.type,s.pendingProps,Wi),r!==null?(s.stateNode=r,Oo=s,ks=Xi(r.firstChild),Wi=!1,f=!0):f=!1),f||Ya(s)),pt(s),f=s.type,m=s.pendingProps,v=t!==null?t.memoizedProps:null,r=m.children,Nh(f,m)?r=null:v!==null&&Nh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=Af(t,s,B2,null,null,o),vc._currentValue=f),ju(t,s),$o(t,s,r,o),s.child;case 6:return t===null&&Rn&&((t=o=ks)&&(o=bv(o,s.pendingProps,Wi),o!==null?(s.stateNode=o,Oo=s,ks=null,t=!0):t=!1),t||Ya(s)),null;case 13:return Dg(t,s,o);case 4:return Je(s,s.stateNode.containerInfo),r=s.pendingProps,t===null?s.child=Tr(s,null,r,o):$o(t,s,r,o),s.child;case 11:return Sg(t,s,s.type,s.pendingProps,o);case 7:return $o(t,s,s.pendingProps,o),s.child;case 8:return $o(t,s,s.pendingProps.children,o),s.child;case 12:return $o(t,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,Wa(s,s.type,r.value),$o(t,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,kr(s),f=zo(f),r=r(f),s.flags|=1,$o(t,s,r,o),s.child;case 14:return Cg(t,s,s.type,s.pendingProps,o);case 15:return kg(t,s,s.type,s.pendingProps,o);case 19:return Bg(t,s,o);case 31:return U2(t,s,o);case 22:return jg(t,s,o,s.pendingProps);case 24:return kr(s),r=zo(so),t===null?(f=bf(),f===null&&(f=ms,m=yf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},wf(s),Wa(s,so,f)):((t.lanes&o)!==0&&(Sf(t,s),tc(s,null,null,o),ec()),f=t.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Wa(s,so,r)):(r=m.cache,Wa(s,so,r),r!==f.cache&&gf(s,[so],o,!0))),$o(t,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function Ea(t){t.flags|=4}function oh(t,s,o,r,f){if((s=(t.mode&32)!==0)&&(s=!1),s){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(l0())t.flags|=8192;else throw Er=du,vf}else t.flags&=-16777217}function Og(t,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Q0(s))if(l0())t.flags|=8192;else throw Er=du,vf}function Eu(t,s){s!==null&&(t.flags|=4),t.flags&16384&&(s=t.tag!==22?mt():536870912,t.lanes|=s,ml|=s)}function rc(t,s){if(!Rn)switch(t.tailMode){case"hidden":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function js(t){var s=t.alternate!==null&&t.alternate.child===t.child,o=0,r=0;if(s)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=r,t.childLanes=o,s}function Y2(t,s,o){var r=s.pendingProps;switch(ff(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return js(s),null;case 1:return js(s),null;case 3:return o=s.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),Ca(so),We(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(tl(s)?Ea(s):t===null||t.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,mf())),js(s),null;case 26:var f=s.type,m=s.memoizedState;return t===null?(Ea(s),m!==null?(js(s),Og(s,m)):(js(s),oh(s,f,null,r,o))):m?m!==t.memoizedState?(Ea(s),js(s),Og(s,m)):(js(s),s.flags&=-16777217):(t=t.memoizedProps,t!==r&&Ea(s),js(s),oh(s,f,t,r,o)),null;case 27:if(Tt(s),o=_e.current,f=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==r&&Ea(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return js(s),null}t=Ce.current,tl(s)?p_(s):(t=V0(f,r,o),s.stateNode=t,Ea(s))}return js(s),null;case 5:if(Tt(s),f=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==r&&Ea(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return js(s),null}if(m=Ce.current,tl(s))p_(s);else{var v=Vu(_e.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?v.createElement(f,{is:r.is}):v.createElement(f)}}m[Nt]=s,m[ln]=r;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(Io(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ea(s)}}return js(s),oh(s,s.type,t===null?null:t.memoizedProps,s.pendingProps,o),null;case 6:if(t&&s.stateNode!=null)t.memoizedProps!==r&&Ea(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(t=_e.current,tl(s)){if(t=s.stateNode,o=s.memoizedProps,r=null,f=Oo,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}t[Nt]=s,t=!!(t.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||D0(t.nodeValue,o)),t||Ya(s,!0)}else t=Vu(t).createTextNode(r),t[Nt]=s,s.stateNode=t}return js(s),null;case 31:if(o=s.memoizedState,t===null||t.memoizedState!==null){if(r=tl(s),o!==null){if(t===null){if(!r)throw Error(a(318));if(t=s.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[Nt]=s}else Sr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;js(s),t=!1}else o=mf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=o),t=!0;if(!t)return s.flags&256?(Ni(s),s):(Ni(s),null);if((s.flags&128)!==0)throw Error(a(558))}return js(s),null;case 13:if(r=s.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=tl(s),r!==null&&r.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[Nt]=s}else Sr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;js(s),f=!1}else f=mf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Ni(s),s):(Ni(s),null)}return Ni(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,t=t!==null&&t.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==t&&o&&(s.child.flags|=8192),Eu(s,s.updateQueue),js(s),null);case 4:return We(),t===null&&jh(s.stateNode.containerInfo),js(s),null;case 10:return Ca(s.type),js(s),null;case 19:if(ce(qs),r=s.memoizedState,r===null)return js(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)rc(r,!1);else{if(Is!==0||t!==null&&(t.flags&128)!==0)for(t=s.child;t!==null;){if(m=pu(t),m!==null){for(s.flags|=128,rc(r,!1),t=m.updateQueue,s.updateQueue=t,Eu(s,t),s.subtreeFlags=0,t=o,o=s.child;o!==null;)ns(o,t),o=o.sibling;return ee(qs,qs.current&1|2),Rn&&wa(s,r.treeForkCount),s.child}t=t.sibling}r.tail!==null&&bt()>Ru&&(s.flags|=128,f=!0,rc(r,!1),s.lanes=4194304)}else{if(!f)if(t=pu(m),t!==null){if(s.flags|=128,f=!0,t=t.updateQueue,s.updateQueue=t,Eu(s,t),rc(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!Rn)return js(s),null}else 2*bt()-r.renderingStartTime>Ru&&o!==536870912&&(s.flags|=128,f=!0,rc(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(t=r.last,t!==null?t.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=bt(),t.sibling=null,o=qs.current,ee(qs,f?o&1|2:o&1),Rn&&wa(s,r.treeForkCount),t):(js(s),null);case 22:case 23:return Ni(s),Mf(),r=s.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(js(s),s.subtreeFlags&6&&(s.flags|=8192)):js(s),o=s.updateQueue,o!==null&&Eu(s,o.retryQueue),o=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),t!==null&&ce(jr),null;case 24:return o=null,t!==null&&(o=t.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Ca(so),js(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function W2(t,s){switch(ff(s),s.tag){case 1:return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 3:return Ca(so),We(),t=s.flags,(t&65536)!==0&&(t&128)===0?(s.flags=t&-65537|128,s):null;case 26:case 27:case 5:return Tt(s),null;case 31:if(s.memoizedState!==null){if(Ni(s),s.alternate===null)throw Error(a(340));Sr()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 13:if(Ni(s),t=s.memoizedState,t!==null&&t.dehydrated!==null){if(s.alternate===null)throw Error(a(340));Sr()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 19:return ce(qs),null;case 4:return We(),null;case 10:return Ca(s.type),null;case 22:case 23:return Ni(s),Mf(),t!==null&&ce(jr),t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 24:return Ca(so),null;case 25:return null;default:return null}}function zg(t,s){switch(ff(s),s.tag){case 3:Ca(so),We();break;case 26:case 27:case 5:Tt(s);break;case 4:We();break;case 31:s.memoizedState!==null&&Ni(s);break;case 13:Ni(s);break;case 19:ce(qs);break;case 10:Ca(s.type);break;case 22:case 23:Ni(s),Mf(),t!==null&&ce(jr);break;case 24:Ca(so)}}function lc(t,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&t)===t){r=void 0;var m=o.create,v=o.inst;r=m(),v.destroy=r}o=o.next}while(o!==f)}}catch(N){Zn(s,s.return,N)}}function Qa(t,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&t)===t){var v=r.inst,N=v.destroy;if(N!==void 0){v.destroy=void 0,f=s;var Q=o,be=N;try{be()}catch(Le){Zn(f,Q,Le)}}}r=r.next}while(r!==m)}}catch(Le){Zn(s,s.return,Le)}}function $g(t){var s=t.updateQueue;if(s!==null){var o=t.stateNode;try{E_(s,o)}catch(r){Zn(t,t.return,r)}}}function Ig(t,s,o){o.props=Nr(t.type,t.memoizedProps),o.state=t.memoizedState;try{o.componentWillUnmount()}catch(r){Zn(t,s,r)}}function cc(t,s){try{var o=t.ref;if(o!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof o=="function"?t.refCleanup=o(r):o.current=r}}catch(f){Zn(t,s,f)}}function fa(t,s){var o=t.ref,r=t.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Zn(t,s,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Zn(t,s,f)}else o.current=null}function Pg(t){var s=t.type,o=t.memoizedProps,r=t.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Zn(t,t.return,f)}}function ih(t,s,o){try{var r=t.stateNode;hv(r,t.type,o,s),r[ln]=s}catch(f){Zn(t,t.return,f)}}function Hg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&or(t.type)||t.tag===4}function ah(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&or(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rh(t,s,o){var r=t.tag;if(r===5||r===6)t=t.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(t,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(t),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Zs));else if(r!==4&&(r===27&&or(t.type)&&(o=t.stateNode,s=null),t=t.child,t!==null))for(rh(t,s,o),t=t.sibling;t!==null;)rh(t,s,o),t=t.sibling}function Tu(t,s,o){var r=t.tag;if(r===5||r===6)t=t.stateNode,s?o.insertBefore(t,s):o.appendChild(t);else if(r!==4&&(r===27&&or(t.type)&&(o=t.stateNode),t=t.child,t!==null))for(Tu(t,s,o),t=t.sibling;t!==null;)Tu(t,s,o),t=t.sibling}function Ug(t){var s=t.stateNode,o=t.memoizedProps;try{for(var r=t.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Io(s,r,o),s[Nt]=t,s[ln]=o}catch(m){Zn(t,t.return,m)}}var Ta=!1,ao=!1,lh=!1,Vg=typeof WeakSet=="function"?WeakSet:Set,To=null;function F2(t,s){if(t=t.containerInfo,Th=Ku,t=Ke(t),vt(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,N=-1,Q=-1,be=0,Le=0,Ye=t,ke=null;t:for(;;){for(var Ee;Ye!==o||f!==0&&Ye.nodeType!==3||(N=v+f),Ye!==m||r!==0&&Ye.nodeType!==3||(Q=v+r),Ye.nodeType===3&&(v+=Ye.nodeValue.length),(Ee=Ye.firstChild)!==null;)ke=Ye,Ye=Ee;for(;;){if(Ye===t)break t;if(ke===o&&++be===f&&(N=v),ke===m&&++Le===r&&(Q=v),(Ee=Ye.nextSibling)!==null)break;Ye=ke,ke=Ye.parentNode}Ye=Ee}o=N===-1||Q===-1?null:{start:N,end:Q}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ah={focusedElem:t,selectionRange:o},Ku=!1,To=s;To!==null;)if(s=To,t=s.child,(s.subtreeFlags&1028)!==0&&t!==null)t.return=s,To=t;else for(;To!==null;){switch(s=To,m=s.alternate,t=s.flags,s.tag){case 0:if((t&4)!==0&&(t=s.updateQueue,t=t!==null?t.events:null,t!==null))for(o=0;o<t.length;o++)f=t[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var Dt=Nr(o.type,f);t=r.getSnapshotBeforeUpdate(Dt,m),r.__reactInternalSnapshotBeforeUpdate=t}catch(Xt){Zn(o,o.return,Xt)}}break;case 3:if((t&1024)!==0){if(t=s.stateNode.containerInfo,o=t.nodeType,o===9)Rh(t);else if(o===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Rh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=s.sibling,t!==null){t.return=s.return,To=t;break}To=s.return}}function Yg(t,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:Na(t,o),r&4&&lc(5,o);break;case 1:if(Na(t,o),r&4)if(t=o.stateNode,s===null)try{t.componentDidMount()}catch(v){Zn(o,o.return,v)}else{var f=Nr(o.type,s.memoizedProps);s=s.memoizedState;try{t.componentDidUpdate(f,s,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Zn(o,o.return,v)}}r&64&&$g(o),r&512&&cc(o,o.return);break;case 3:if(Na(t,o),r&64&&(t=o.updateQueue,t!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{E_(t,s)}catch(v){Zn(o,o.return,v)}}break;case 27:s===null&&r&4&&Ug(o);case 26:case 5:Na(t,o),s===null&&r&4&&Pg(o),r&512&&cc(o,o.return);break;case 12:Na(t,o);break;case 31:Na(t,o),r&4&&Xg(t,o);break;case 13:Na(t,o),r&4&&Gg(t,o),r&64&&(t=o.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(o=tv.bind(null,o),vv(t,o))));break;case 22:if(r=o.memoizedState!==null||Ta,!r){s=s!==null&&s.memoizedState!==null||ao,f=Ta;var m=ao;Ta=r,(ao=s)&&!m?Da(t,o,(o.subtreeFlags&8772)!==0):Na(t,o),Ta=f,ao=m}break;case 30:break;default:Na(t,o)}}function Wg(t){var s=t.alternate;s!==null&&(t.alternate=null,Wg(s)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(s=t.stateNode,s!==null&&In(s)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ns=null,gi=!1;function Aa(t,s,o){for(o=o.child;o!==null;)Fg(t,s,o),o=o.sibling}function Fg(t,s,o){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(it,o)}catch{}switch(o.tag){case 26:ao||fa(o,s),Aa(t,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:ao||fa(o,s);var r=Ns,f=gi;or(o.type)&&(Ns=o.stateNode,gi=!1),Aa(t,s,o),yc(o.stateNode),Ns=r,gi=f;break;case 5:ao||fa(o,s);case 6:if(r=Ns,f=gi,Ns=null,Aa(t,s,o),Ns=r,gi=f,Ns!==null)if(gi)try{(Ns.nodeType===9?Ns.body:Ns.nodeName==="HTML"?Ns.ownerDocument.body:Ns).removeChild(o.stateNode)}catch(m){Zn(o,s,m)}else try{Ns.removeChild(o.stateNode)}catch(m){Zn(o,s,m)}break;case 18:Ns!==null&&(gi?(t=Ns,$0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,o.stateNode),wl(t)):$0(Ns,o.stateNode));break;case 4:r=Ns,f=gi,Ns=o.stateNode.containerInfo,gi=!0,Aa(t,s,o),Ns=r,gi=f;break;case 0:case 11:case 14:case 15:Qa(2,o,s),ao||Qa(4,o,s),Aa(t,s,o);break;case 1:ao||(fa(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Ig(o,s,r)),Aa(t,s,o);break;case 21:Aa(t,s,o);break;case 22:ao=(r=ao)||o.memoizedState!==null,Aa(t,s,o),ao=r;break;default:Aa(t,s,o)}}function Xg(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{wl(t)}catch(o){Zn(s,s.return,o)}}}function Gg(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{wl(t)}catch(o){Zn(s,s.return,o)}}function X2(t){switch(t.tag){case 31:case 13:case 19:var s=t.stateNode;return s===null&&(s=t.stateNode=new Vg),s;case 22:return t=t.stateNode,s=t._retryCache,s===null&&(s=t._retryCache=new Vg),s;default:throw Error(a(435,t.tag))}}function Au(t,s){var o=X2(t);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=nv.bind(null,t,r);r.then(f,f)}})}function yi(t,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=t,v=s,N=v;e:for(;N!==null;){switch(N.tag){case 27:if(or(N.type)){Ns=N.stateNode,gi=!1;break e}break;case 5:Ns=N.stateNode,gi=!1;break e;case 3:case 4:Ns=N.stateNode.containerInfo,gi=!0;break e}N=N.return}if(Ns===null)throw Error(a(160));Fg(m,v,f),Ns=null,gi=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)qg(s,t),s=s.sibling}var ea=null;function qg(t,s){var o=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:yi(s,t),xi(t),r&4&&(Qa(3,t,t.return),lc(3,t),Qa(5,t,t.return));break;case 1:yi(s,t),xi(t),r&512&&(ao||o===null||fa(o,o.return)),r&64&&Ta&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(o=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=ea;if(yi(s,t),xi(t),r&512&&(ao||o===null||fa(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=t.memoizedState,o===null)if(r===null)if(t.stateNode===null){e:{r=t.type,o=t.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ds]||m[Nt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),Io(m,r,o),m[Nt]=t,Cn(m),r=m;break e;case"link":var v=q0("link","href",f).get(r+(o.href||""));if(v){for(var N=0;N<v.length;N++)if(m=v[N],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(N,1);break t}}m=f.createElement(r),Io(m,r,o),f.head.appendChild(m);break;case"meta":if(v=q0("meta","content",f).get(r+(o.content||""))){for(N=0;N<v.length;N++)if(m=v[N],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(N,1);break t}}m=f.createElement(r),Io(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[Nt]=t,Cn(m),r=m}t.stateNode=r}else K0(f,t.type,t.stateNode);else t.stateNode=G0(f,r,t.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?K0(f,t.type,t.stateNode):G0(f,r,t.memoizedProps)):r===null&&t.stateNode!==null&&ih(t,t.memoizedProps,o.memoizedProps)}break;case 27:yi(s,t),xi(t),r&512&&(ao||o===null||fa(o,o.return)),o!==null&&r&4&&ih(t,t.memoizedProps,o.memoizedProps);break;case 5:if(yi(s,t),xi(t),r&512&&(ao||o===null||fa(o,o.return)),t.flags&32){f=t.stateNode;try{Vo(f,"")}catch(Dt){Zn(t,t.return,Dt)}}r&4&&t.stateNode!=null&&(f=t.memoizedProps,ih(t,f,o!==null?o.memoizedProps:f)),r&1024&&(lh=!0);break;case 6:if(yi(s,t),xi(t),r&4){if(t.stateNode===null)throw Error(a(162));r=t.memoizedProps,o=t.stateNode;try{o.nodeValue=r}catch(Dt){Zn(t,t.return,Dt)}}break;case 3:if(Fu=null,f=ea,ea=Yu(s.containerInfo),yi(s,t),ea=f,xi(t),r&4&&o!==null&&o.memoizedState.isDehydrated)try{wl(s.containerInfo)}catch(Dt){Zn(t,t.return,Dt)}lh&&(lh=!1,Kg(t));break;case 4:r=ea,ea=Yu(t.stateNode.containerInfo),yi(s,t),xi(t),ea=r;break;case 12:yi(s,t),xi(t);break;case 31:yi(s,t),xi(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Au(t,r)));break;case 13:yi(s,t),xi(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Du=bt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Au(t,r)));break;case 22:f=t.memoizedState!==null;var Q=o!==null&&o.memoizedState!==null,be=Ta,Le=ao;if(Ta=be||f,ao=Le||Q,yi(s,t),ao=Le,Ta=be,xi(t),r&8192)e:for(s=t.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||Q||Ta||ao||Dr(t)),o=null,s=t;;){if(s.tag===5||s.tag===26){if(o===null){Q=o=s;try{if(m=Q.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{N=Q.stateNode;var Ye=Q.memoizedProps.style,ke=Ye!=null&&Ye.hasOwnProperty("display")?Ye.display:null;N.style.display=ke==null||typeof ke=="boolean"?"":(""+ke).trim()}}catch(Dt){Zn(Q,Q.return,Dt)}}}else if(s.tag===6){if(o===null){Q=s;try{Q.stateNode.nodeValue=f?"":Q.memoizedProps}catch(Dt){Zn(Q,Q.return,Dt)}}}else if(s.tag===18){if(o===null){Q=s;try{var Ee=Q.stateNode;f?I0(Ee,!0):I0(Q.stateNode,!1)}catch(Dt){Zn(Q,Q.return,Dt)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===t)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=t.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,Au(t,o))));break;case 19:yi(s,t),xi(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Au(t,r)));break;case 30:break;case 21:break;default:yi(s,t),xi(t)}}function xi(t){var s=t.flags;if(s&2){try{for(var o,r=t.return;r!==null;){if(Hg(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=ah(t);Tu(t,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(Vo(v,""),o.flags&=-33);var N=ah(t);Tu(t,N,v);break;case 3:case 4:var Q=o.stateNode.containerInfo,be=ah(t);rh(t,be,Q);break;default:throw Error(a(161))}}catch(Le){Zn(t,t.return,Le)}t.flags&=-3}s&4096&&(t.flags&=-4097)}function Kg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var s=t;Kg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),t=t.sibling}}function Na(t,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Yg(t,s.alternate,s),s=s.sibling}function Dr(t){for(t=t.child;t!==null;){var s=t;switch(s.tag){case 0:case 11:case 14:case 15:Qa(4,s,s.return),Dr(s);break;case 1:fa(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Ig(s,s.return,o),Dr(s);break;case 27:yc(s.stateNode);case 26:case 5:fa(s,s.return),Dr(s);break;case 22:s.memoizedState===null&&Dr(s);break;case 30:Dr(s);break;default:Dr(s)}t=t.sibling}}function Da(t,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=t,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:Da(f,m,o),lc(4,m);break;case 1:if(Da(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(be){Zn(r,r.return,be)}if(r=m,f=r.updateQueue,f!==null){var N=r.stateNode;try{var Q=f.shared.hiddenCallbacks;if(Q!==null)for(f.shared.hiddenCallbacks=null,f=0;f<Q.length;f++)M_(Q[f],N)}catch(be){Zn(r,r.return,be)}}o&&v&64&&$g(m),cc(m,m.return);break;case 27:Ug(m);case 26:case 5:Da(f,m,o),o&&r===null&&v&4&&Pg(m),cc(m,m.return);break;case 12:Da(f,m,o);break;case 31:Da(f,m,o),o&&v&4&&Xg(f,m);break;case 13:Da(f,m,o),o&&v&4&&Gg(f,m);break;case 22:m.memoizedState===null&&Da(f,m,o),cc(m,m.return);break;case 30:break;default:Da(f,m,o)}s=s.sibling}}function ch(t,s){var o=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),t=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(t=s.memoizedState.cachePool.pool),t!==o&&(t!=null&&t.refCount++,o!=null&&ql(o))}function uh(t,s){t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&ql(t))}function ta(t,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Qg(t,s,o,r),s=s.sibling}function Qg(t,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ta(t,s,o,r),f&2048&&lc(9,s);break;case 1:ta(t,s,o,r);break;case 3:ta(t,s,o,r),f&2048&&(t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&ql(t)));break;case 12:if(f&2048){ta(t,s,o,r),t=s.stateNode;try{var m=s.memoizedProps,v=m.id,N=m.onPostCommit;typeof N=="function"&&N(v,s.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(Q){Zn(s,s.return,Q)}}else ta(t,s,o,r);break;case 31:ta(t,s,o,r);break;case 13:ta(t,s,o,r);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?ta(t,s,o,r):uc(t,s):m._visibility&2?ta(t,s,o,r):(m._visibility|=2,dl(t,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&ch(v,s);break;case 24:ta(t,s,o,r),f&2048&&uh(s.alternate,s);break;default:ta(t,s,o,r)}}function dl(t,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=t,v=s,N=o,Q=r,be=v.flags;switch(v.tag){case 0:case 11:case 15:dl(m,v,N,Q,f),lc(8,v);break;case 23:break;case 22:var Le=v.stateNode;v.memoizedState!==null?Le._visibility&2?dl(m,v,N,Q,f):uc(m,v):(Le._visibility|=2,dl(m,v,N,Q,f)),f&&be&2048&&ch(v.alternate,v);break;case 24:dl(m,v,N,Q,f),f&&be&2048&&uh(v.alternate,v);break;default:dl(m,v,N,Q,f)}s=s.sibling}}function uc(t,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=t,r=s,f=r.flags;switch(r.tag){case 22:uc(o,r),f&2048&&ch(r.alternate,r);break;case 24:uc(o,r),f&2048&&uh(r.alternate,r);break;default:uc(o,r)}s=s.sibling}}var dc=8192;function fl(t,s,o){if(t.subtreeFlags&dc)for(t=t.child;t!==null;)Zg(t,s,o),t=t.sibling}function Zg(t,s,o){switch(t.tag){case 26:fl(t,s,o),t.flags&dc&&t.memoizedState!==null&&Rv(o,ea,t.memoizedState,t.memoizedProps);break;case 5:fl(t,s,o);break;case 3:case 4:var r=ea;ea=Yu(t.stateNode.containerInfo),fl(t,s,o),ea=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=dc,dc=16777216,fl(t,s,o),dc=r):fl(t,s,o));break;default:fl(t,s,o)}}function Jg(t){var s=t.alternate;if(s!==null&&(t=s.child,t!==null)){s.child=null;do s=t.sibling,t.sibling=null,t=s;while(t!==null)}}function fc(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];To=r,t0(r,t)}Jg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)e0(t),t=t.sibling}function e0(t){switch(t.tag){case 0:case 11:case 15:fc(t),t.flags&2048&&Qa(9,t,t.return);break;case 3:fc(t);break;case 12:fc(t);break;case 22:var s=t.stateNode;t.memoizedState!==null&&s._visibility&2&&(t.return===null||t.return.tag!==13)?(s._visibility&=-3,Nu(t)):fc(t);break;default:fc(t)}}function Nu(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];To=r,t0(r,t)}Jg(t)}for(t=t.child;t!==null;){switch(s=t,s.tag){case 0:case 11:case 15:Qa(8,s,s.return),Nu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Nu(s));break;default:Nu(s)}t=t.sibling}}function t0(t,s){for(;To!==null;){var o=To;switch(o.tag){case 0:case 11:case 15:Qa(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ql(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,To=r;else e:for(o=t;To!==null;){r=To;var f=r.sibling,m=r.return;if(Wg(r),r===o){To=null;break e}if(f!==null){f.return=m,To=f;break e}To=m}}}var G2={getCacheForType:function(t){var s=zo(so),o=s.data.get(t);return o===void 0&&(o=t(),s.data.set(t,o)),o},cacheSignal:function(){return zo(so).controller.signal}},q2=typeof WeakMap=="function"?WeakMap:Map,Yn=0,ms=null,En=null,An=0,Qn=0,Di=null,Za=!1,hl=!1,dh=!1,Ra=0,Is=0,Ja=0,Rr=0,fh=0,Ri=0,ml=0,hc=null,bi=null,hh=!1,Du=0,n0=0,Ru=1/0,Bu=null,er=null,_o=0,tr=null,pl=null,Ba=0,mh=0,ph=null,s0=null,mc=0,_h=null;function Bi(){return(Yn&2)!==0&&An!==0?An&-An:O.T!==null?wh():sn()}function o0(){if(Ri===0)if((An&536870912)===0||Rn){var t=tt;tt<<=1,(tt&3932160)===0&&(tt=262144),Ri=t}else Ri=536870912;return t=Ai.current,t!==null&&(t.flags|=32),Ri}function vi(t,s,o){(t===ms&&(Qn===2||Qn===9)||t.cancelPendingCommit!==null)&&(_l(t,0),nr(t,An,Ri,!1)),ht(t,o),((Yn&2)===0||t!==ms)&&(t===ms&&((Yn&2)===0&&(Rr|=o),Is===4&&nr(t,An,Ri,!1)),ha(t))}function i0(t,s,o){if((Yn&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&t.expiredLanes)===0||Rt(t,s),f=r?Z2(t,s):yh(t,s,!0),m=r;do{if(f===0){hl&&!r&&nr(t,s,0,!1);break}else{if(o=t.current.alternate,m&&!K2(o)){f=yh(t,s,!1),m=!1;continue}if(f===2){if(m=s,t.errorRecoveryDisabledLanes&m)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var N=t;f=hc;var Q=N.current.memoizedState.isDehydrated;if(Q&&(_l(N,v).flags|=256),v=yh(N,v,!1),v!==2){if(dh&&!Q){N.errorRecoveryDisabledLanes|=m,Rr|=m,f=4;break e}m=bi,bi=f,m!==null&&(bi===null?bi=m:bi.push.apply(bi,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){_l(t,0),nr(t,s,0,!0);break}e:{switch(r=t,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:nr(r,s,Ri,!Za);break e;case 2:bi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=Du+300-bt(),10<f)){if(nr(r,s,Ri,!Za),Qe(r,0,!0)!==0)break e;Ba=s,r.timeoutHandle=O0(a0.bind(null,r,o,bi,Bu,hh,s,Ri,Rr,ml,Za,m,"Throttled",-0,0),f);break e}a0(r,o,bi,Bu,hh,s,Ri,Rr,ml,Za,m,null,-0,0)}}break}while(!0);ha(t)}function a0(t,s,o,r,f,m,v,N,Q,be,Le,Ye,ke,Ee){if(t.timeoutHandle=-1,Ye=s.subtreeFlags,Ye&8192||(Ye&16785408)===16785408){Ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zs},Zg(s,m,Ye);var Dt=(m&62914560)===m?Du-bt():(m&4194048)===m?n0-bt():0;if(Dt=Bv(Ye,Dt),Dt!==null){Ba=m,t.cancelPendingCommit=Dt(m0.bind(null,t,s,m,o,r,f,v,N,Q,Le,Ye,null,ke,Ee)),nr(t,m,v,!be);return}}m0(t,s,m,o,r,f,v,N,Q)}function K2(t){for(var s=t;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!re(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function nr(t,s,o,r){s&=~fh,s&=~Rr,t.suspendedLanes|=s,t.pingedLanes&=~s,r&&(t.warmLanes|=s),r=t.expirationTimes;for(var f=s;0<f;){var m=31-ge(f),v=1<<m;r[m]=-1,f&=~v}o!==0&&dn(t,o,s)}function Lu(){return(Yn&6)===0?(pc(0),!1):!0}function gh(){if(En!==null){if(Qn===0)var t=En.return;else t=En,Sa=Cr=null,Rf(t),al=null,Ql=0,t=En;for(;t!==null;)zg(t.alternate,t),t=t.return;En=null}}function _l(t,s){var o=t.timeoutHandle;o!==-1&&(t.timeoutHandle=-1,_v(o)),o=t.cancelPendingCommit,o!==null&&(t.cancelPendingCommit=null,o()),Ba=0,gh(),ms=t,En=o=an(t.current,null),An=s,Qn=0,Di=null,Za=!1,hl=Rt(t,s),dh=!1,ml=Ri=fh=Rr=Ja=Is=0,bi=hc=null,hh=!1,(s&8)!==0&&(s|=s&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=s;0<r;){var f=31-ge(r),m=1<<f;s|=t[f],r&=~m}return Ra=s,br(),o}function r0(t,s){mn=null,O.H=ic,s===il||s===uu?(s=S_(),Qn=3):s===vf?(s=S_(),Qn=4):Qn=s===qf?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Di=s,En===null&&(Is=1,Cu(t,Ui(s,t.current)))}function l0(){var t=Ai.current;return t===null?!0:(An&4194048)===An?Fi===null:(An&62914560)===An||(An&536870912)!==0?t===Fi:!1}function c0(){var t=O.H;return O.H=ic,t===null?ic:t}function u0(){var t=O.A;return O.A=G2,t}function Ou(){Is=4,Za||(An&4194048)!==An&&Ai.current!==null||(hl=!0),(Ja&134217727)===0&&(Rr&134217727)===0||ms===null||nr(ms,An,Ri,!1)}function yh(t,s,o){var r=Yn;Yn|=2;var f=c0(),m=u0();(ms!==t||An!==s)&&(Bu=null,_l(t,s)),s=!1;var v=Is;e:do try{if(Qn!==0&&En!==null){var N=En,Q=Di;switch(Qn){case 8:gh(),v=6;break e;case 3:case 2:case 9:case 6:Ai.current===null&&(s=!0);var be=Qn;if(Qn=0,Di=null,gl(t,N,Q,be),o&&hl){v=0;break e}break;default:be=Qn,Qn=0,Di=null,gl(t,N,Q,be)}}Q2(),v=Is;break}catch(Le){r0(t,Le)}while(!0);return s&&t.shellSuspendCounter++,Sa=Cr=null,Yn=r,O.H=f,O.A=m,En===null&&(ms=null,An=0,br()),v}function Q2(){for(;En!==null;)d0(En)}function Z2(t,s){var o=Yn;Yn|=2;var r=c0(),f=u0();ms!==t||An!==s?(Bu=null,Ru=bt()+500,_l(t,s)):hl=Rt(t,s);e:do try{if(Qn!==0&&En!==null){s=En;var m=Di;t:switch(Qn){case 1:Qn=0,Di=null,gl(t,s,m,1);break;case 2:case 9:if(v_(m)){Qn=0,Di=null,f0(s);break}s=function(){Qn!==2&&Qn!==9||ms!==t||(Qn=7),ha(t)},m.then(s,s);break e;case 3:Qn=7;break e;case 4:Qn=5;break e;case 7:v_(m)?(Qn=0,Di=null,f0(s)):(Qn=0,Di=null,gl(t,s,m,7));break;case 5:var v=null;switch(En.tag){case 26:v=En.memoizedState;case 5:case 27:var N=En;if(v?Q0(v):N.stateNode.complete){Qn=0,Di=null;var Q=N.sibling;if(Q!==null)En=Q;else{var be=N.return;be!==null?(En=be,zu(be)):En=null}break t}}Qn=0,Di=null,gl(t,s,m,5);break;case 6:Qn=0,Di=null,gl(t,s,m,6);break;case 8:gh(),Is=6;break e;default:throw Error(a(462))}}J2();break}catch(Le){r0(t,Le)}while(!0);return Sa=Cr=null,O.H=r,O.A=f,Yn=o,En!==null?0:(ms=null,An=0,br(),Is)}function J2(){for(;En!==null&&!gt();)d0(En)}function d0(t){var s=Lg(t.alternate,t,Ra);t.memoizedProps=t.pendingProps,s===null?zu(t):En=s}function f0(t){var s=t,o=s.alternate;switch(s.tag){case 15:case 0:s=Tg(o,s,s.pendingProps,s.type,void 0,An);break;case 11:s=Tg(o,s,s.pendingProps,s.type.render,s.ref,An);break;case 5:Rf(s);default:zg(o,s),s=En=ns(s,Ra),s=Lg(o,s,Ra)}t.memoizedProps=t.pendingProps,s===null?zu(t):En=s}function gl(t,s,o,r){Sa=Cr=null,Rf(s),al=null,Ql=0;var f=s.return;try{if(H2(t,f,s,o,An)){Is=1,Cu(t,Ui(o,t.current)),En=null;return}}catch(m){if(f!==null)throw En=f,m;Is=1,Cu(t,Ui(o,t.current)),En=null;return}s.flags&32768?(Rn||r===1?t=!0:hl||(An&536870912)!==0?t=!1:(Za=t=!0,(r===2||r===9||r===3||r===6)&&(r=Ai.current,r!==null&&r.tag===13&&(r.flags|=16384))),h0(s,t)):zu(s)}function zu(t){var s=t;do{if((s.flags&32768)!==0){h0(s,Za);return}t=s.return;var o=Y2(s.alternate,s,Ra);if(o!==null){En=o;return}if(s=s.sibling,s!==null){En=s;return}En=s=t}while(s!==null);Is===0&&(Is=5)}function h0(t,s){do{var o=W2(t.alternate,t);if(o!==null){o.flags&=32767,En=o;return}if(o=t.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(t=t.sibling,t!==null)){En=t;return}En=t=o}while(t!==null);Is=6,En=null}function m0(t,s,o,r,f,m,v,N,Q){t.cancelPendingCommit=null;do $u();while(_o!==0);if((Yn&6)!==0)throw Error(a(327));if(s!==null){if(s===t.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=Kr,Ht(t,o,m,v,N,Q),t===ms&&(En=ms=null,An=0),pl=s,tr=t,Ba=o,mh=m,ph=f,s0=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sv(st,function(){return x0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,f=ae.p,ae.p=2,v=Yn,Yn|=4;try{F2(t,s,o)}finally{Yn=v,ae.p=f,O.T=r}}_o=1,p0(),_0(),g0()}}function p0(){if(_o===1){_o=0;var t=tr,s=pl,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=O.T,O.T=null;var r=ae.p;ae.p=2;var f=Yn;Yn|=4;try{qg(s,t);var m=Ah,v=Ke(t.containerInfo),N=m.focusedElem,Q=m.selectionRange;if(v!==N&&N&&N.ownerDocument&&et(N.ownerDocument.documentElement,N)){if(Q!==null&&vt(N)){var be=Q.start,Le=Q.end;if(Le===void 0&&(Le=be),"selectionStart"in N)N.selectionStart=be,N.selectionEnd=Math.min(Le,N.value.length);else{var Ye=N.ownerDocument||document,ke=Ye&&Ye.defaultView||window;if(ke.getSelection){var Ee=ke.getSelection(),Dt=N.textContent.length,Xt=Math.min(Q.start,Dt),is=Q.end===void 0?Xt:Math.min(Q.end,Dt);!Ee.extend&&Xt>is&&(v=is,is=Xt,Xt=v);var ue=Me(N,Xt),ne=Me(N,is);if(ue&&ne&&(Ee.rangeCount!==1||Ee.anchorNode!==ue.node||Ee.anchorOffset!==ue.offset||Ee.focusNode!==ne.node||Ee.focusOffset!==ne.offset)){var xe=Ye.createRange();xe.setStart(ue.node,ue.offset),Ee.removeAllRanges(),Xt>is?(Ee.addRange(xe),Ee.extend(ne.node,ne.offset)):(xe.setEnd(ne.node,ne.offset),Ee.addRange(xe))}}}}for(Ye=[],Ee=N;Ee=Ee.parentNode;)Ee.nodeType===1&&Ye.push({element:Ee,left:Ee.scrollLeft,top:Ee.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<Ye.length;N++){var Ue=Ye[N];Ue.element.scrollLeft=Ue.left,Ue.element.scrollTop=Ue.top}}Ku=!!Th,Ah=Th=null}finally{Yn=f,ae.p=r,O.T=o}}t.current=s,_o=2}}function _0(){if(_o===2){_o=0;var t=tr,s=pl,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=O.T,O.T=null;var r=ae.p;ae.p=2;var f=Yn;Yn|=4;try{Yg(t,s.alternate,s)}finally{Yn=f,ae.p=r,O.T=o}}_o=3}}function g0(){if(_o===4||_o===3){_o=0,He();var t=tr,s=pl,o=Ba,r=s0;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?_o=5:(_o=0,pl=tr=null,y0(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(er=null),ls(o),s=s.stateNode,Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(it,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=O.T,f=ae.p,ae.p=2,O.T=null;try{for(var m=t.onRecoverableError,v=0;v<r.length;v++){var N=r[v];m(N.value,{componentStack:N.stack})}}finally{O.T=s,ae.p=f}}(Ba&3)!==0&&$u(),ha(t),f=t.pendingLanes,(o&261930)!==0&&(f&42)!==0?t===_h?mc++:(mc=0,_h=t):mc=0,pc(0)}}function y0(t,s){(t.pooledCacheLanes&=s)===0&&(s=t.pooledCache,s!=null&&(t.pooledCache=null,ql(s)))}function $u(){return p0(),_0(),g0(),x0()}function x0(){if(_o!==5)return!1;var t=tr,s=mh;mh=0;var o=ls(Ba),r=O.T,f=ae.p;try{ae.p=32>o?32:o,O.T=null,o=ph,ph=null;var m=tr,v=Ba;if(_o=0,pl=tr=null,Ba=0,(Yn&6)!==0)throw Error(a(331));var N=Yn;if(Yn|=4,e0(m.current),Qg(m,m.current,v,o),Yn=N,pc(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(it,m)}catch{}return!0}finally{ae.p=f,O.T=r,y0(t,s)}}function b0(t,s,o){s=Ui(o,s),s=Gf(t.stateNode,s,2),t=Ga(t,s,2),t!==null&&(ht(t,2),ha(t))}function Zn(t,s,o){if(t.tag===3)b0(t,t,o);else for(;s!==null;){if(s.tag===3){b0(s,t,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){t=Ui(o,t),o=vg(2),r=Ga(s,o,2),r!==null&&(wg(o,r,s,t),ht(r,2),ha(r));break}}s=s.return}}function xh(t,s,o){var r=t.pingCache;if(r===null){r=t.pingCache=new q2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(dh=!0,f.add(o),t=ev.bind(null,t,s,o),s.then(t,t))}function ev(t,s,o){var r=t.pingCache;r!==null&&r.delete(s),t.pingedLanes|=t.suspendedLanes&o,t.warmLanes&=~o,ms===t&&(An&o)===o&&(Is===4||Is===3&&(An&62914560)===An&&300>bt()-Du?(Yn&2)===0&&_l(t,0):fh|=o,ml===An&&(ml=0)),ha(t)}function v0(t,s){s===0&&(s=mt()),t=ca(t,s),t!==null&&(ht(t,s),ha(t))}function tv(t){var s=t.memoizedState,o=0;s!==null&&(o=s.retryLane),v0(t,o)}function nv(t,s){var o=0;switch(t.tag){case 31:case 13:var r=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),v0(t,o)}function sv(t,s){return dt(t,s)}var Iu=null,yl=null,bh=!1,Pu=!1,vh=!1,sr=0;function ha(t){t!==yl&&t.next===null&&(yl===null?Iu=yl=t:yl=yl.next=t),Pu=!0,bh||(bh=!0,iv())}function pc(t,s){if(!vh&&Pu){vh=!0;do for(var o=!1,r=Iu;r!==null;){if(t!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var v=r.suspendedLanes,N=r.pingedLanes;m=(1<<31-ge(42|t)+1)-1,m&=f&~(v&~N),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,k0(r,m))}else m=An,m=Qe(r,r===ms?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||Rt(r,m)||(o=!0,k0(r,m));r=r.next}while(o);vh=!1}}function ov(){w0()}function w0(){Pu=bh=!1;var t=0;sr!==0&&pv()&&(t=sr);for(var s=bt(),o=null,r=Iu;r!==null;){var f=r.next,m=S0(r,s);m===0?(r.next=null,o===null?Iu=f:o.next=f,f===null&&(yl=o)):(o=r,(t!==0||(m&3)!==0)&&(Pu=!0)),r=f}_o!==0&&_o!==5||pc(t),sr!==0&&(sr=0)}function S0(t,s){for(var o=t.suspendedLanes,r=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var v=31-ge(m),N=1<<v,Q=f[v];Q===-1?((N&o)===0||(N&r)!==0)&&(f[v]=kt(N,s)):Q<=s&&(t.expiredLanes|=N),m&=~N}if(s=ms,o=An,o=Qe(t,t===s?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,o===0||t===s&&(Qn===2||Qn===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&at(r),t.callbackNode=null,t.callbackPriority=0;if((o&3)===0||Rt(t,o)){if(s=o&-o,s===t.callbackPriority)return s;switch(r!==null&&at(r),ls(o)){case 2:case 8:o=$t;break;case 32:o=st;break;case 268435456:o=te;break;default:o=st}return r=C0.bind(null,t),o=dt(o,r),t.callbackPriority=s,t.callbackNode=o,s}return r!==null&&r!==null&&at(r),t.callbackPriority=2,t.callbackNode=null,2}function C0(t,s){if(_o!==0&&_o!==5)return t.callbackNode=null,t.callbackPriority=0,null;var o=t.callbackNode;if($u()&&t.callbackNode!==o)return null;var r=An;return r=Qe(t,t===ms?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(i0(t,r,s),S0(t,bt()),t.callbackNode!=null&&t.callbackNode===o?C0.bind(null,t):null)}function k0(t,s){if($u())return null;i0(t,s,!0)}function iv(){gv(function(){(Yn&6)!==0?dt(Mt,ov):w0()})}function wh(){if(sr===0){var t=sl;t===0&&(t=Ie,Ie<<=1,(Ie&261888)===0&&(Ie=256)),sr=t}return sr}function j0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yo(""+t)}function M0(t,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,t.id&&o.setAttribute("form",t.id),s.parentNode.insertBefore(o,s),t=new FormData(t),o.parentNode.removeChild(o),t}function av(t,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=j0((f[ln]||null).action),v=r.submitter;v&&(s=(s=v[ln]||null)?j0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var N=new Go("action","action",null,r,f);t.push({event:N,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(sr!==0){var Q=v?M0(f,v):new FormData(f);Uf(o,{pending:!0,data:Q,method:f.method,action:m},null,Q)}}else typeof m=="function"&&(N.preventDefault(),Q=v?M0(f,v):new FormData(f),Uf(o,{pending:!0,data:Q,method:f.method,action:m},m,Q))},currentTarget:f}]})}}for(var Sh=0;Sh<qr.length;Sh++){var Ch=qr[Sh],rv=Ch.toLowerCase(),lv=Ch[0].toUpperCase()+Ch.slice(1);_i(rv,"on"+lv)}_i(pi,"onAnimationEnd"),_i(Ti,"onAnimationIteration"),_i(yr,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(Fr,"onTransitionRun"),_i(Xr,"onTransitionStart"),_i(Gr,"onTransitionCancel"),_i(Yl,"onTransitionEnd"),Wt("onMouseEnter",["mouseout","mouseover"]),Wt("onMouseLeave",["mouseout","mouseover"]),Wt("onPointerEnter",["pointerout","pointerover"]),Wt("onPointerLeave",["pointerout","pointerover"]),vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),vs("onBeforeInput",["compositionend","keypress","textInput","paste"]),vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _c="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_c));function E0(t,s){s=(s&4)!==0;for(var o=0;o<t.length;o++){var r=t[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var v=r.length-1;0<=v;v--){var N=r[v],Q=N.instance,be=N.currentTarget;if(N=N.listener,Q!==m&&f.isPropagationStopped())break e;m=N,f.currentTarget=be;try{m(f)}catch(Le){xr(Le)}f.currentTarget=null,m=Q}else for(v=0;v<r.length;v++){if(N=r[v],Q=N.instance,be=N.currentTarget,N=N.listener,Q!==m&&f.isPropagationStopped())break e;m=N,f.currentTarget=be;try{m(f)}catch(Le){xr(Le)}f.currentTarget=null,m=Q}}}}function Tn(t,s){var o=s[Fn];o===void 0&&(o=s[Fn]=new Set);var r=t+"__bubble";o.has(r)||(T0(s,t,2,!1),o.add(r))}function kh(t,s,o){var r=0;s&&(r|=4),T0(o,t,r,s)}var Hu="_reactListening"+Math.random().toString(36).slice(2);function jh(t){if(!t[Hu]){t[Hu]=!0,cs.forEach(function(o){o!=="selectionchange"&&(cv.has(o)||kh(o,!1,t),kh(o,!0,t))});var s=t.nodeType===9?t:t.ownerDocument;s===null||s[Hu]||(s[Hu]=!0,kh("selectionchange",!1,s))}}function T0(t,s,o,r){switch(oy(s)){case 2:var f=zv;break;case 8:f=$v;break;default:f=Hh}o=f.bind(null,s,o,t),f=void 0,!eo||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?t.addEventListener(s,o,{capture:!0,passive:f}):t.addEventListener(s,o,!0):f!==void 0?t.addEventListener(s,o,{passive:f}):t.addEventListener(s,o,!1)}function Mh(t,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var N=r.stateNode.containerInfo;if(N===f)break;if(v===4)for(v=r.return;v!==null;){var Q=v.tag;if((Q===3||Q===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;N!==null;){if(v=xo(N),v===null)return;if(Q=v.tag,Q===5||Q===6||Q===26||Q===27){r=m=v;continue e}N=N.parentNode}}r=r.return}ds(function(){var be=m,Le=fo(o),Ye=[];e:{var ke=Wl.get(t);if(ke!==void 0){var Ee=Go,Dt=t;switch(t){case"keypress":if(No(o)===0)break e;case"keydown":case"keyup":Ee=Co;break;case"focusin":Dt="focus",Ee=to;break;case"focusout":Dt="blur",Ee=to;break;case"beforeblur":case"afterblur":Ee=to;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ee=fs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ee=Ms;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ee=fe;break;case pi:case Ti:case yr:Ee=$i;break;case Yl:Ee=Fe;break;case"scroll":case"scrollend":Ee=mo;break;case"wheel":Ee=Yt;break;case"copy":case"cut":case"paste":Ee=Mi;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ee=j;break;case"toggle":case"beforetoggle":Ee=Zt}var Xt=(s&4)!==0,is=!Xt&&(t==="scroll"||t==="scrollend"),ue=Xt?ke!==null?ke+"Capture":null:ke;Xt=[];for(var ne=be,xe;ne!==null;){var Ue=ne;if(xe=Ue.stateNode,Ue=Ue.tag,Ue!==5&&Ue!==26&&Ue!==27||xe===null||ue===null||(Ue=hn(ne,ue),Ue!=null&&Xt.push(gc(ne,Ue,xe))),is)break;ne=ne.return}0<Xt.length&&(ke=new Ee(ke,Dt,null,o,Le),Ye.push({event:ke,listeners:Xt}))}}if((s&7)===0){e:{if(ke=t==="mouseover"||t==="pointerover",Ee=t==="mouseout"||t==="pointerout",ke&&o!==Js&&(Dt=o.relatedTarget||o.fromElement)&&(xo(Dt)||Dt[rt]))break e;if((Ee||ke)&&(ke=Le.window===Le?Le:(ke=Le.ownerDocument)?ke.defaultView||ke.parentWindow:window,Ee?(Dt=o.relatedTarget||o.toElement,Ee=be,Dt=Dt?xo(Dt):null,Dt!==null&&(is=u(Dt),Xt=Dt.tag,Dt!==is||Xt!==5&&Xt!==27&&Xt!==6)&&(Dt=null)):(Ee=null,Dt=be),Ee!==Dt)){if(Xt=fs,Ue="onMouseLeave",ue="onMouseEnter",ne="mouse",(t==="pointerout"||t==="pointerover")&&(Xt=j,Ue="onPointerLeave",ue="onPointerEnter",ne="pointer"),is=Ee==null?ke:on(Ee),xe=Dt==null?ke:on(Dt),ke=new Xt(Ue,ne+"leave",Ee,o,Le),ke.target=is,ke.relatedTarget=xe,Ue=null,xo(Le)===be&&(Xt=new Xt(ue,ne+"enter",Dt,o,Le),Xt.target=xe,Xt.relatedTarget=is,Ue=Xt),is=Ue,Ee&&Dt)t:{for(Xt=uv,ue=Ee,ne=Dt,xe=0,Ue=ue;Ue;Ue=Xt(Ue))xe++;Ue=0;for(var Ut=ne;Ut;Ut=Xt(Ut))Ue++;for(;0<xe-Ue;)ue=Xt(ue),xe--;for(;0<Ue-xe;)ne=Xt(ne),Ue--;for(;xe--;){if(ue===ne||ne!==null&&ue===ne.alternate){Xt=ue;break t}ue=Xt(ue),ne=Xt(ne)}Xt=null}else Xt=null;Ee!==null&&A0(Ye,ke,Ee,Xt,!1),Dt!==null&&is!==null&&A0(Ye,is,Dt,Xt,!0)}}e:{if(ke=be?on(be):window,Ee=ke.nodeName&&ke.nodeName.toLowerCase(),Ee==="select"||Ee==="input"&&ke.type==="file")var Pn=V;else if(jo(ke))if(Z)Pn=Y;else{Pn=le;var It=$}else Ee=ke.nodeName,!Ee||Ee.toLowerCase()!=="input"||ke.type!=="checkbox"&&ke.type!=="radio"?be&&Rs(be.elementType)&&(Pn=V):Pn=ve;if(Pn&&(Pn=Pn(t,be))){Ro(Ye,Pn,o,Le);break e}It&&It(t,ke,be),t==="focusout"&&be&&ke.type==="number"&&be.memoizedProps.value!=null&&Ws(ke,"number",ke.value)}switch(It=be?on(be):window,t){case"focusin":(jo(It)||It.contentEditable==="true")&&(lt=It,Jt=be,zt=null);break;case"focusout":zt=Jt=lt=null;break;case"mousedown":nn=!0;break;case"contextmenu":case"mouseup":case"dragend":nn=!1,Ln(Ye,o,Le);break;case"selectionchange":if(ft)break;case"keydown":case"keyup":Ln(Ye,o,Le)}var bn;if(wn)e:{switch(t){case"compositionstart":var Nn="onCompositionStart";break e;case"compositionend":Nn="onCompositionEnd";break e;case"compositionupdate":Nn="onCompositionUpdate";break e}Nn=void 0}else Kn?Ts(t,o)&&(Nn="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Nn="onCompositionStart");Nn&&(hs&&o.locale!=="ko"&&(Kn||Nn!=="onCompositionStart"?Nn==="onCompositionEnd"&&Kn&&(bn=Fo()):(Cs=Le,ki="value"in Cs?Cs.value:Cs.textContent,Kn=!0)),It=Uu(be,Nn),0<It.length&&(Nn=new jt(Nn,t,null,o,Le),Ye.push({event:Nn,listeners:It}),bn?Nn.data=bn:(bn=xn(o),bn!==null&&(Nn.data=bn)))),(bn=Ft?Ei(t,o):no(t,o))&&(Nn=Uu(be,"onBeforeInput"),0<Nn.length&&(It=new jt("onBeforeInput","beforeinput",null,o,Le),Ye.push({event:It,listeners:Nn}),It.data=bn)),av(Ye,t,be,o,Le)}E0(Ye,s)})}function gc(t,s,o){return{instance:t,listener:s,currentTarget:o}}function Uu(t,s){for(var o=s+"Capture",r=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=hn(t,o),f!=null&&r.unshift(gc(t,f,m)),f=hn(t,s),f!=null&&r.push(gc(t,f,m))),t.tag===3)return r;t=t.return}return[]}function uv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function A0(t,s,o,r,f){for(var m=s._reactName,v=[];o!==null&&o!==r;){var N=o,Q=N.alternate,be=N.stateNode;if(N=N.tag,Q!==null&&Q===r)break;N!==5&&N!==26&&N!==27||be===null||(Q=be,f?(be=hn(o,m),be!=null&&v.unshift(gc(o,be,Q))):f||(be=hn(o,m),be!=null&&v.push(gc(o,be,Q)))),o=o.return}v.length!==0&&t.push({event:s,listeners:v})}var dv=/\r\n?/g,fv=/\u0000|\uFFFD/g;function N0(t){return(typeof t=="string"?t:""+t).replace(dv,`
`).replace(fv,"")}function D0(t,s){return s=N0(s),N0(t)===s}function os(t,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||Vo(t,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&Vo(t,""+r);break;case"className":gs(t,"class",r);break;case"tabIndex":gs(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":gs(t,o,r);break;case"style":zi(t,r,m);break;case"data":if(s!=="object"){gs(t,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){t.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(o);break}r=Yo(""+r),t.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&os(t,s,"name",f.name,f,null),os(t,s,"formEncType",f.formEncType,f,null),os(t,s,"formMethod",f.formMethod,f,null),os(t,s,"formTarget",f.formTarget,f,null)):(os(t,s,"encType",f.encType,f,null),os(t,s,"method",f.method,f,null),os(t,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(o);break}r=Yo(""+r),t.setAttribute(o,r);break;case"onClick":r!=null&&(t.onclick=Zs);break;case"onScroll":r!=null&&Tn("scroll",t);break;case"onScrollEnd":r!=null&&Tn("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=o}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}o=Yo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,""+r):t.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,""):t.removeAttribute(o);break;case"capture":case"download":r===!0?t.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,r):t.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(o,r):t.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(o):t.setAttribute(o,r);break;case"popover":Tn("beforetoggle",t),Tn("toggle",t),co(t,"popover",r);break;case"xlinkActuate":us(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":us(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":us(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":us(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":us(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":us(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":us(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":us(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":us(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":co(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Ls.get(o)||o,co(t,o,r))}}function Eh(t,s,o,r,f,m){switch(o){case"style":zi(t,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=o}}break;case"children":typeof r=="string"?Vo(t,r):(typeof r=="number"||typeof r=="bigint")&&Vo(t,""+r);break;case"onScroll":r!=null&&Tn("scroll",t);break;case"onScrollEnd":r!=null&&Tn("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Zs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_s.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=t[ln]||null,m=m!=null?m[o]:null,typeof m=="function"&&t.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in t?t[o]=null:t.hasAttribute(o)&&t.removeAttribute(o)),t.addEventListener(s,r,f);break e}o in t?t[o]=r:r===!0?t.setAttribute(o,""):co(t,o,r)}}}function Io(t,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tn("error",t),Tn("load",t);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:os(t,s,m,v,o,null)}}f&&os(t,s,"srcSet",o.srcSet,o,null),r&&os(t,s,"src",o.src,o,null);return;case"input":Tn("invalid",t);var N=m=v=f=null,Q=null,be=null;for(r in o)if(o.hasOwnProperty(r)){var Le=o[r];if(Le!=null)switch(r){case"name":f=Le;break;case"type":v=Le;break;case"checked":Q=Le;break;case"defaultChecked":be=Le;break;case"value":m=Le;break;case"defaultValue":N=Le;break;case"children":case"dangerouslySetInnerHTML":if(Le!=null)throw Error(a(137,s));break;default:os(t,s,r,Le,o,null)}}kn(t,m,N,Q,be,v,f,!1);return;case"select":Tn("invalid",t),r=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(N=o[f],N!=null))switch(f){case"value":m=N;break;case"defaultValue":v=N;break;case"multiple":r=N;default:os(t,s,f,N,o,null)}s=m,o=v,t.multiple=!!r,s!=null?vn(t,!!r,s,!1):o!=null&&vn(t,!!r,o,!0);return;case"textarea":Tn("invalid",t),m=f=r=null;for(v in o)if(o.hasOwnProperty(v)&&(N=o[v],N!=null))switch(v){case"value":r=N;break;case"defaultValue":f=N;break;case"children":m=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(a(91));break;default:os(t,s,v,N,o,null)}Si(t,r,f,m);return;case"option":for(Q in o)if(o.hasOwnProperty(Q)&&(r=o[Q],r!=null))switch(Q){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:os(t,s,Q,r,o,null)}return;case"dialog":Tn("beforetoggle",t),Tn("toggle",t),Tn("cancel",t),Tn("close",t);break;case"iframe":case"object":Tn("load",t);break;case"video":case"audio":for(r=0;r<_c.length;r++)Tn(_c[r],t);break;case"image":Tn("error",t),Tn("load",t);break;case"details":Tn("toggle",t);break;case"embed":case"source":case"link":Tn("error",t),Tn("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(be in o)if(o.hasOwnProperty(be)&&(r=o[be],r!=null))switch(be){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:os(t,s,be,r,o,null)}return;default:if(Rs(s)){for(Le in o)o.hasOwnProperty(Le)&&(r=o[Le],r!==void 0&&Eh(t,s,Le,r,o,void 0));return}}for(N in o)o.hasOwnProperty(N)&&(r=o[N],r!=null&&os(t,s,N,r,o,null))}function hv(t,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,N=null,Q=null,be=null,Le=null;for(Ee in o){var Ye=o[Ee];if(o.hasOwnProperty(Ee)&&Ye!=null)switch(Ee){case"checked":break;case"value":break;case"defaultValue":Q=Ye;default:r.hasOwnProperty(Ee)||os(t,s,Ee,null,r,Ye)}}for(var ke in r){var Ee=r[ke];if(Ye=o[ke],r.hasOwnProperty(ke)&&(Ee!=null||Ye!=null))switch(ke){case"type":m=Ee;break;case"name":f=Ee;break;case"checked":be=Ee;break;case"defaultChecked":Le=Ee;break;case"value":v=Ee;break;case"defaultValue":N=Ee;break;case"children":case"dangerouslySetInnerHTML":if(Ee!=null)throw Error(a(137,s));break;default:Ee!==Ye&&os(t,s,ke,Ee,r,Ye)}}Gn(t,v,N,Q,be,Le,m,f);return;case"select":Ee=v=N=ke=null;for(m in o)if(Q=o[m],o.hasOwnProperty(m)&&Q!=null)switch(m){case"value":break;case"multiple":Ee=Q;default:r.hasOwnProperty(m)||os(t,s,m,null,r,Q)}for(f in r)if(m=r[f],Q=o[f],r.hasOwnProperty(f)&&(m!=null||Q!=null))switch(f){case"value":ke=m;break;case"defaultValue":N=m;break;case"multiple":v=m;default:m!==Q&&os(t,s,f,m,r,Q)}s=N,o=v,r=Ee,ke!=null?vn(t,!!o,ke,!1):!!r!=!!o&&(s!=null?vn(t,!!o,s,!0):vn(t,!!o,o?[]:"",!1));return;case"textarea":Ee=ke=null;for(N in o)if(f=o[N],o.hasOwnProperty(N)&&f!=null&&!r.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:os(t,s,N,null,r,f)}for(v in r)if(f=r[v],m=o[v],r.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":ke=f;break;case"defaultValue":Ee=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&os(t,s,v,f,r,m)}ys(t,ke,Ee);return;case"option":for(var Dt in o)if(ke=o[Dt],o.hasOwnProperty(Dt)&&ke!=null&&!r.hasOwnProperty(Dt))switch(Dt){case"selected":t.selected=!1;break;default:os(t,s,Dt,null,r,ke)}for(Q in r)if(ke=r[Q],Ee=o[Q],r.hasOwnProperty(Q)&&ke!==Ee&&(ke!=null||Ee!=null))switch(Q){case"selected":t.selected=ke&&typeof ke!="function"&&typeof ke!="symbol";break;default:os(t,s,Q,ke,r,Ee)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Xt in o)ke=o[Xt],o.hasOwnProperty(Xt)&&ke!=null&&!r.hasOwnProperty(Xt)&&os(t,s,Xt,null,r,ke);for(be in r)if(ke=r[be],Ee=o[be],r.hasOwnProperty(be)&&ke!==Ee&&(ke!=null||Ee!=null))switch(be){case"children":case"dangerouslySetInnerHTML":if(ke!=null)throw Error(a(137,s));break;default:os(t,s,be,ke,r,Ee)}return;default:if(Rs(s)){for(var is in o)ke=o[is],o.hasOwnProperty(is)&&ke!==void 0&&!r.hasOwnProperty(is)&&Eh(t,s,is,void 0,r,ke);for(Le in r)ke=r[Le],Ee=o[Le],!r.hasOwnProperty(Le)||ke===Ee||ke===void 0&&Ee===void 0||Eh(t,s,Le,ke,r,Ee);return}}for(var ue in o)ke=o[ue],o.hasOwnProperty(ue)&&ke!=null&&!r.hasOwnProperty(ue)&&os(t,s,ue,null,r,ke);for(Ye in r)ke=r[Ye],Ee=o[Ye],!r.hasOwnProperty(Ye)||ke===Ee||ke==null&&Ee==null||os(t,s,Ye,ke,r,Ee)}function R0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,v=f.initiatorType,N=f.duration;if(m&&N&&R0(v)){for(v=0,N=f.responseEnd,r+=1;r<o.length;r++){var Q=o[r],be=Q.startTime;if(be>N)break;var Le=Q.transferSize,Ye=Q.initiatorType;Le&&R0(Ye)&&(Q=Q.responseEnd,v+=Le*(Q<N?1:(N-be)/(Q-be)))}if(--r,s+=8*(m+v)/(f.duration/1e3),t++,10<t)break}}if(0<t)return s/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Th=null,Ah=null;function Vu(t){return t.nodeType===9?t:t.ownerDocument}function B0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function L0(t,s){if(t===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&s==="foreignObject"?0:t}function Nh(t,s){return t==="textarea"||t==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Dh=null;function pv(){var t=window.event;return t&&t.type==="popstate"?t===Dh?!1:(Dh=t,!0):(Dh=null,!1)}var O0=typeof setTimeout=="function"?setTimeout:void 0,_v=typeof clearTimeout=="function"?clearTimeout:void 0,z0=typeof Promise=="function"?Promise:void 0,gv=typeof queueMicrotask=="function"?queueMicrotask:typeof z0<"u"?function(t){return z0.resolve(null).then(t).catch(yv)}:O0;function yv(t){setTimeout(function(){throw t})}function or(t){return t==="head"}function $0(t,s){var o=s,r=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){t.removeChild(f),wl(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")yc(t.ownerDocument.documentElement);else if(o==="head"){o=t.ownerDocument.head,yc(o);for(var m=o.firstChild;m;){var v=m.nextSibling,N=m.nodeName;m[Ds]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&yc(t.ownerDocument.body);o=f}while(o);wl(s)}function I0(t,s){var o=t;t=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(t===0)break;t--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||t++;o=r}while(o)}function Rh(t){var s=t.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Rh(o),In(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}t.removeChild(o)}}function xv(t,s,o,r){for(;t.nodeType===1;){var f=o;if(t.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ds])switch(s){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(s==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Xi(t.nextSibling),t===null)break}return null}function bv(t,s,o){if(s==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!o||(t=Xi(t.nextSibling),t===null))return null;return t}function P0(t,s){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Xi(t.nextSibling),t===null))return null;return t}function Bh(t){return t.data==="$?"||t.data==="$~"}function Lh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function vv(t,s){var o=t.ownerDocument;if(t.data==="$~")t._reactRetry=s;else if(t.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Xi(t){for(;t!=null;t=t.nextSibling){var s=t.nodeType;if(s===1||s===3)break;if(s===8){if(s=t.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return t}var Oh=null;function H0(t){t=t.nextSibling;for(var s=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"||o==="/&"){if(s===0)return Xi(t.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}t=t.nextSibling}return null}function U0(t){t=t.previousSibling;for(var s=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return t;s--}else o!=="/$"&&o!=="/&"||s++}t=t.previousSibling}return null}function V0(t,s,o){switch(s=Vu(o),t){case"html":if(t=s.documentElement,!t)throw Error(a(452));return t;case"head":if(t=s.head,!t)throw Error(a(453));return t;case"body":if(t=s.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function yc(t){for(var s=t.attributes;s.length;)t.removeAttributeNode(s[0]);In(t)}var Gi=new Map,Y0=new Set;function Yu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var La=ae.d;ae.d={f:wv,r:Sv,D:Cv,C:kv,L:jv,m:Mv,X:Tv,S:Ev,M:Av};function wv(){var t=La.f(),s=Lu();return t||s}function Sv(t){var s=Ao(t);s!==null&&s.tag===5&&s.type==="form"?rg(s):La.r(t)}var xl=typeof document>"u"?null:document;function W0(t,s,o){var r=xl;if(r&&typeof s=="string"&&s){var f=Ss(s);f='link[rel="'+t+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),Y0.has(f)||(Y0.add(f),t={rel:t,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),Io(s,"link",t),Cn(s),r.head.appendChild(s)))}}function Cv(t){La.D(t),W0("dns-prefetch",t,null)}function kv(t,s){La.C(t,s),W0("preconnect",t,s)}function jv(t,s,o){La.L(t,s,o);var r=xl;if(r&&t&&s){var f='link[rel="preload"][as="'+Ss(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Ss(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Ss(o.imageSizes)+'"]')):f+='[href="'+Ss(t)+'"]';var m=f;switch(s){case"style":m=bl(t);break;case"script":m=vl(t)}Gi.has(m)||(t=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:t,as:s},o),Gi.set(m,t),r.querySelector(f)!==null||s==="style"&&r.querySelector(xc(m))||s==="script"&&r.querySelector(bc(m))||(s=r.createElement("link"),Io(s,"link",t),Cn(s),r.head.appendChild(s)))}}function Mv(t,s){La.m(t,s);var o=xl;if(o&&t){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Ss(r)+'"][href="'+Ss(t)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=vl(t)}if(!Gi.has(m)&&(t=x({rel:"modulepreload",href:t},s),Gi.set(m,t),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(bc(m)))return}r=o.createElement("link"),Io(r,"link",t),Cn(r),o.head.appendChild(r)}}}function Ev(t,s,o){La.S(t,s,o);var r=xl;if(r&&t){var f=zn(r).hoistableStyles,m=bl(t);s=s||"default";var v=f.get(m);if(!v){var N={loading:0,preload:null};if(v=r.querySelector(xc(m)))N.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":s},o),(o=Gi.get(m))&&zh(t,o);var Q=v=r.createElement("link");Cn(Q),Io(Q,"link",t),Q._p=new Promise(function(be,Le){Q.onload=be,Q.onerror=Le}),Q.addEventListener("load",function(){N.loading|=1}),Q.addEventListener("error",function(){N.loading|=2}),N.loading|=4,Wu(v,s,r)}v={type:"stylesheet",instance:v,count:1,state:N},f.set(m,v)}}}function Tv(t,s){La.X(t,s);var o=xl;if(o&&t){var r=zn(o).hoistableScripts,f=vl(t),m=r.get(f);m||(m=o.querySelector(bc(f)),m||(t=x({src:t,async:!0},s),(s=Gi.get(f))&&$h(t,s),m=o.createElement("script"),Cn(m),Io(m,"link",t),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function Av(t,s){La.M(t,s);var o=xl;if(o&&t){var r=zn(o).hoistableScripts,f=vl(t),m=r.get(f);m||(m=o.querySelector(bc(f)),m||(t=x({src:t,async:!0,type:"module"},s),(s=Gi.get(f))&&$h(t,s),m=o.createElement("script"),Cn(m),Io(m,"link",t),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function F0(t,s,o,r){var f=(f=_e.current)?Yu(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=bl(o.href),o=zn(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){t=bl(o.href);var m=zn(f).hoistableStyles,v=m.get(t);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,v),(m=f.querySelector(xc(t)))&&!m._p&&(v.instance=m,v.state.loading=5),Gi.has(t)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Gi.set(t,o),m||Nv(f,t,o,v.state))),s&&r===null)throw Error(a(528,""));return v}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=vl(o),o=zn(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function bl(t){return'href="'+Ss(t)+'"'}function xc(t){return'link[rel="stylesheet"]['+t+"]"}function X0(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Nv(t,s,o,r){t.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=t.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),Io(s,"link",o),Cn(s),t.head.appendChild(s))}function vl(t){return'[src="'+Ss(t)+'"]'}function bc(t){return"script[async]"+t}function G0(t,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=t.querySelector('style[data-href~="'+Ss(o.href)+'"]');if(r)return s.instance=r,Cn(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Cn(r),Io(r,"style",f),Wu(r,o.precedence,t),s.instance=r;case"stylesheet":f=bl(o.href);var m=t.querySelector(xc(f));if(m)return s.state.loading|=4,s.instance=m,Cn(m),m;r=X0(o),(f=Gi.get(f))&&zh(r,f),m=(t.ownerDocument||t).createElement("link"),Cn(m);var v=m;return v._p=new Promise(function(N,Q){v.onload=N,v.onerror=Q}),Io(m,"link",r),s.state.loading|=4,Wu(m,o.precedence,t),s.instance=m;case"script":return m=vl(o.src),(f=t.querySelector(bc(m)))?(s.instance=f,Cn(f),f):(r=o,(f=Gi.get(m))&&(r=x({},o),$h(r,f)),t=t.ownerDocument||t,f=t.createElement("script"),Cn(f),Io(f,"link",r),t.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Wu(r,o.precedence,t));return s.instance}function Wu(t,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,v=0;v<r.length;v++){var N=r[v];if(N.dataset.precedence===s)m=N;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(t,s.firstChild))}function zh(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.title==null&&(t.title=s.title)}function $h(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.integrity==null&&(t.integrity=s.integrity)}var Fu=null;function q0(t,s,o){if(Fu===null){var r=new Map,f=Fu=new Map;f.set(o,r)}else f=Fu,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(t))return r;for(r.set(t,null),o=o.getElementsByTagName(t),f=0;f<o.length;f++){var m=o[f];if(!(m[Ds]||m[Nt]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=t+v;var N=r.get(v);N?N.push(m):r.set(v,[m])}}return r}function K0(t,s,o){t=t.ownerDocument||t,t.head.insertBefore(o,s==="title"?t.querySelector("head > title"):null)}function Dv(t,s,o){if(o===1||s.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return t=s.disabled,typeof s.precedence=="string"&&t==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function Q0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Rv(t,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=bl(r.href),m=s.querySelector(xc(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(t.count++,t=Xu.bind(t),s.then(t,t)),o.state.loading|=4,o.instance=m,Cn(m);return}m=s.ownerDocument||s,r=X0(r),(f=Gi.get(f))&&zh(r,f),m=m.createElement("link"),Cn(m);var v=m;v._p=new Promise(function(N,Q){v.onload=N,v.onerror=Q}),Io(m,"link",r),o.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(t.count++,o=Xu.bind(t),s.addEventListener("load",o),s.addEventListener("error",o))}}var Ih=0;function Bv(t,s){return t.stylesheets&&t.count===0&&qu(t,t.stylesheets),0<t.count||0<t.imgCount?function(o){var r=setTimeout(function(){if(t.stylesheets&&qu(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+s);0<t.imgBytes&&Ih===0&&(Ih=62500*mv());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&qu(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>Ih?50:800)+s);return t.unsuspend=o,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Xu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Gu=null;function qu(t,s){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gu=new Map,s.forEach(Lv,t),Gu=null,Xu.call(t))}function Lv(t,s){if(!(s.state.loading&4)){var o=Gu.get(t);if(o)var r=o.get(null);else{o=new Map,Gu.set(t,o);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),r=v)}r&&o.set(null,r)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||r,m===r&&o.set(null,f),o.set(v,f),this.count++,r=Xu.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),s.state.loading|=4}}var vc={$$typeof:L,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function Ov(t,s,o,r,f,m,v,N,Q){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Kt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kt(0),this.hiddenUpdates=Kt(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Q,this.incompleteTransitions=new Map}function Z0(t,s,o,r,f,m,v,N,Q,be,Le,Ye){return t=new Ov(t,s,o,v,Q,be,Le,Ye,N),s=1,m===!0&&(s|=24),m=Qo(3,null,null,s),t.current=m,m.stateNode=t,s=yf(),s.refCount++,t.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},wf(m),t}function J0(t){return t?(t=va,t):va}function ey(t,s,o,r,f,m){f=J0(f),r.context===null?r.context=f:r.pendingContext=f,r=Xa(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Ga(t,r,s),o!==null&&(vi(o,t,s),Jl(o,t,s))}function ty(t,s){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<s?o:s}}function Ph(t,s){ty(t,s),(t=t.alternate)&&ty(t,s)}function ny(t){if(t.tag===13||t.tag===31){var s=ca(t,67108864);s!==null&&vi(s,t,67108864),Ph(t,67108864)}}function sy(t){if(t.tag===13||t.tag===31){var s=Bi();s=fn(s);var o=ca(t,s);o!==null&&vi(o,t,s),Ph(t,s)}}var Ku=!0;function zv(t,s,o,r){var f=O.T;O.T=null;var m=ae.p;try{ae.p=2,Hh(t,s,o,r)}finally{ae.p=m,O.T=f}}function $v(t,s,o,r){var f=O.T;O.T=null;var m=ae.p;try{ae.p=8,Hh(t,s,o,r)}finally{ae.p=m,O.T=f}}function Hh(t,s,o,r){if(Ku){var f=Uh(r);if(f===null)Mh(t,s,r,Qu,o),iy(t,r);else if(Pv(f,t,s,o,r))r.stopPropagation();else if(iy(t,r),s&4&&-1<Iv.indexOf(t)){for(;f!==null;){var m=Ao(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=wt(m.pendingLanes);if(v!==0){var N=m;for(N.pendingLanes|=2,N.entangledLanes|=2;v;){var Q=1<<31-ge(v);N.entanglements[1]|=Q,v&=~Q}ha(m),(Yn&6)===0&&(Ru=bt()+500,pc(0))}}break;case 31:case 13:N=ca(m,2),N!==null&&vi(N,m,2),Lu(),Ph(m,2)}if(m=Uh(r),m===null&&Mh(t,s,r,Qu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else Mh(t,s,r,null,o)}}function Uh(t){return t=fo(t),Vh(t)}var Qu=null;function Vh(t){if(Qu=null,t=xo(t),t!==null){var s=u(t);if(s===null)t=null;else{var o=s.tag;if(o===13){if(t=d(s),t!==null)return t;t=null}else if(o===31){if(t=h(s),t!==null)return t;t=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;t=null}else s!==t&&(t=null)}}return Qu=t,null}function oy(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(yt()){case Mt:return 2;case $t:return 8;case st:case B:return 32;case te:return 268435456;default:return 32}default:return 32}}var Yh=!1,ir=null,ar=null,rr=null,wc=new Map,Sc=new Map,lr=[],Iv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function iy(t,s){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":wc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sc.delete(s.pointerId)}}function Cc(t,s,o,r,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=Ao(s),s!==null&&ny(s)),t):(t.eventSystemFlags|=r,s=t.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),t)}function Pv(t,s,o,r,f){switch(s){case"focusin":return ir=Cc(ir,t,s,o,r,f),!0;case"dragenter":return ar=Cc(ar,t,s,o,r,f),!0;case"mouseover":return rr=Cc(rr,t,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return wc.set(m,Cc(wc.get(m)||null,t,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,Sc.set(m,Cc(Sc.get(m)||null,t,s,o,r,f)),!0}return!1}function ay(t){var s=xo(t.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){t.blockedOn=s,Sn(t.priority,function(){sy(o)});return}}else if(s===31){if(s=h(o),s!==null){t.blockedOn=s,Sn(t.priority,function(){sy(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zu(t){if(t.blockedOn!==null)return!1;for(var s=t.targetContainers;0<s.length;){var o=Uh(t.nativeEvent);if(o===null){o=t.nativeEvent;var r=new o.constructor(o.type,o);Js=r,o.target.dispatchEvent(r),Js=null}else return s=Ao(o),s!==null&&ny(s),t.blockedOn=o,!1;s.shift()}return!0}function ry(t,s,o){Zu(t)&&o.delete(s)}function Hv(){Yh=!1,ir!==null&&Zu(ir)&&(ir=null),ar!==null&&Zu(ar)&&(ar=null),rr!==null&&Zu(rr)&&(rr=null),wc.forEach(ry),Sc.forEach(ry)}function Ju(t,s){t.blockedOn===s&&(t.blockedOn=null,Yh||(Yh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Hv)))}var ed=null;function ly(t){ed!==t&&(ed=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){ed===t&&(ed=null);for(var s=0;s<t.length;s+=3){var o=t[s],r=t[s+1],f=t[s+2];if(typeof r!="function"){if(Vh(r||o)===null)continue;break}var m=Ao(o);m!==null&&(t.splice(s,3),s-=3,Uf(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function wl(t){function s(Q){return Ju(Q,t)}ir!==null&&Ju(ir,t),ar!==null&&Ju(ar,t),rr!==null&&Ju(rr,t),wc.forEach(s),Sc.forEach(s);for(var o=0;o<lr.length;o++){var r=lr[o];r.blockedOn===t&&(r.blockedOn=null)}for(;0<lr.length&&(o=lr[0],o.blockedOn===null);)ay(o),o.blockedOn===null&&lr.shift();if(o=(t.ownerDocument||t).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],v=f[ln]||null;if(typeof m=="function")v||ly(o);else if(v){var N=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[ln]||null)N=v.formAction;else if(Vh(f)!==null)continue}else N=v.action;typeof N=="function"?o[r+1]=N:(o.splice(r,3),r-=3),ly(o)}}}function cy(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Wh(t){this._internalRoot=t}td.prototype.render=Wh.prototype.render=function(t){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=Bi();ey(o,r,t,s,null,null)},td.prototype.unmount=Wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var s=t.containerInfo;ey(t.current,2,null,t,null,null),Lu(),s[rt]=null}};function td(t){this._internalRoot=t}td.prototype.unstable_scheduleHydration=function(t){if(t){var s=sn();t={blockedOn:null,target:t,priority:s};for(var o=0;o<lr.length&&s!==0&&s<lr[o].priority;o++);lr.splice(o,0,t),o===0&&ay(t)}};var uy=n.version;if(uy!=="19.2.4")throw Error(a(527,uy,"19.2.4"));ae.findDOMNode=function(t){var s=t._reactInternals;if(s===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=y(s),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Uv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nd.isDisabled&&nd.supportsFiber)try{it=nd.inject(Uv),Ve=nd}catch{}}return jc.createRoot=function(t,s){if(!c(t))throw Error(a(299));var o=!1,r="",f=gg,m=yg,v=xg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=Z0(t,1,!1,null,null,o,r,null,f,m,v,cy),t[rt]=s.current,jh(t),new Wh(s)},jc.hydrateRoot=function(t,s,o){if(!c(t))throw Error(a(299));var r=!1,f="",m=gg,v=yg,N=xg,Q=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(N=o.onRecoverableError),o.formState!==void 0&&(Q=o.formState)),s=Z0(t,1,!0,s,o!=null?o:null,r,f,Q,m,v,N,cy),s.context=J0(null),o=s.current,r=Bi(),r=fn(r),f=Xa(r),f.callback=null,Ga(o,f,r),o=r,s.current.lanes=o,ht(s,o),ha(s),t[rt]=s.current,jh(t),new td(s)},jc.version="19.2.4",jc}var by;function Qv(){if(by)return Xh.exports;by=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Xh.exports=Kv(),Xh.exports}var Zv=Qv();const Jv=Gx(Zv);var _=Cp();const ew=Gx(_);function tw(e,n,i,a){if(typeof n=="function"?e!==n||!a:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(e):a?a.value:n.get(e)}function nw(e,n,i,a,c){if(typeof n=="function"?e!==n||!0:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(e,i),i}var Dd;const Zi="__TAURI_TO_IPC_KEY__";function sw(e,n=!1){return window.__TAURI_INTERNALS__.transformCallback(e,n)}async function je(e,n={},i){return window.__TAURI_INTERNALS__.invoke(e,n,i)}class ow{get rid(){return tw(this,Dd,"f")}constructor(n){Dd.set(this,void 0),nw(this,Dd,n)}async close(){return je("plugin:resources|close",{rid:this.rid})}}Dd=new WeakMap;var Li;(function(e){e.WINDOW_RESIZED="tauri://resize",e.WINDOW_MOVED="tauri://move",e.WINDOW_CLOSE_REQUESTED="tauri://close-requested",e.WINDOW_DESTROYED="tauri://destroyed",e.WINDOW_FOCUS="tauri://focus",e.WINDOW_BLUR="tauri://blur",e.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",e.WINDOW_THEME_CHANGED="tauri://theme-changed",e.WINDOW_CREATED="tauri://window-created",e.WEBVIEW_CREATED="tauri://webview-created",e.DRAG_ENTER="tauri://drag-enter",e.DRAG_OVER="tauri://drag-over",e.DRAG_DROP="tauri://drag-drop",e.DRAG_LEAVE="tauri://drag-leave"})(Li||(Li={}));async function Kx(e,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e,n),await je("plugin:event|unlisten",{event:e,eventId:n})}async function Ic(e,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return je("plugin:event|listen",{event:e,target:c,handler:sw(n)}).then(u=>async()=>Kx(e,u))}async function iw(e,n,i){return Ic(e,a=>{Kx(e,a.id),n(a)},i)}async function aw(e,n){await je("plugin:event|emit",{event:e,payload:n})}async function rw(e,n,i){await je("plugin:event|emit_to",{target:typeof e=="string"?{kind:"AnyLabel",label:e}:e,event:n,payload:i})}class Qx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new Pc(this.width*n,this.height*n)}[Zi](){return{width:this.width,height:this.height}}toJSON(){return this[Zi]()}}class Pc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Qx(this.width/n,this.height/n)}[Zi](){return{width:this.width,height:this.height}}toJSON(){return this[Zi]()}}class Sl{constructor(n){this.size=n}toLogical(n){return this.size instanceof Qx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof Pc?this.size:this.size.toPhysical(n)}[Zi](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[Zi]()}}class Zx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new hr(this.x*n,this.y*n)}[Zi](){return{x:this.x,y:this.y}}toJSON(){return this[Zi]()}}class hr{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Zx(this.x/n,this.y/n)}[Zi](){return{x:this.x,y:this.y}}toJSON(){return this[Zi]()}}class sd{constructor(n){this.position=n}toLogical(n){return this.position instanceof Zx?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof hr?this.position:this.position.toPhysical(n)}[Zi](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[Zi]()}}class Hc extends ow{constructor(n){super(n)}static async new(n,i,a){return je("plugin:image|new",{rgba:Ud(n),width:i,height:a}).then(c=>new Hc(c))}static async fromBytes(n){return je("plugin:image|from_bytes",{bytes:Ud(n)}).then(i=>new Hc(i))}static async fromPath(n){return je("plugin:image|from_path",{path:n}).then(i=>new Hc(i))}async rgba(){return je("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return je("plugin:image|size",{rid:this.rid})}}function Ud(e){return e==null?null:typeof e=="string"?e:e instanceof Hc?e.rid:e}var Hm;(function(e){e[e.Critical=1]="Critical",e[e.Informational=2]="Informational"})(Hm||(Hm={}));class lw{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var vy;(function(e){e.None="none",e.Normal="normal",e.Indeterminate="indeterminate",e.Paused="paused",e.Error="error"})(vy||(vy={}));function kp(){return new Jx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Zh(){return je("plugin:window|get_all_windows").then(e=>e.map(n=>new Jx(n,{skip:!0})))}const Jh=["tauri://created","tauri://error"];class Jx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||je("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Zh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return kp()}static async getAll(){return Zh()}static async getFocusedWindow(){for(const n of await Zh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Ic(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:iw(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Jh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return aw(n,i)}async emitTo(n,i,a){if(Jh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return rw(n,i,a)}_handleTauriEvent(n,i){return Jh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return je("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return je("plugin:window|inner_position",{label:this.label}).then(n=>new hr(n))}async outerPosition(){return je("plugin:window|outer_position",{label:this.label}).then(n=>new hr(n))}async innerSize(){return je("plugin:window|inner_size",{label:this.label}).then(n=>new Pc(n))}async outerSize(){return je("plugin:window|outer_size",{label:this.label}).then(n=>new Pc(n))}async isFullscreen(){return je("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return je("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return je("plugin:window|is_maximized",{label:this.label})}async isFocused(){return je("plugin:window|is_focused",{label:this.label})}async isDecorated(){return je("plugin:window|is_decorated",{label:this.label})}async isResizable(){return je("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return je("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return je("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return je("plugin:window|is_closable",{label:this.label})}async isVisible(){return je("plugin:window|is_visible",{label:this.label})}async title(){return je("plugin:window|title",{label:this.label})}async theme(){return je("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return je("plugin:window|is_always_on_top",{label:this.label})}async center(){return je("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===Hm.Critical?i={type:"Critical"}:i={type:"Informational"}),je("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return je("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return je("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return je("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return je("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return je("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return je("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return je("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return je("plugin:window|maximize",{label:this.label})}async unmaximize(){return je("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return je("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return je("plugin:window|minimize",{label:this.label})}async unminimize(){return je("plugin:window|unminimize",{label:this.label})}async show(){return je("plugin:window|show",{label:this.label})}async hide(){return je("plugin:window|hide",{label:this.label})}async close(){return je("plugin:window|close",{label:this.label})}async destroy(){return je("plugin:window|destroy",{label:this.label})}async setDecorations(n){return je("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return je("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return je("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return je("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return je("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return je("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return je("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return je("plugin:window|set_size",{label:this.label,value:n instanceof Sl?n:new Sl(n)})}async setMinSize(n){return je("plugin:window|set_min_size",{label:this.label,value:n instanceof Sl?n:n?new Sl(n):null})}async setMaxSize(n){return je("plugin:window|set_max_size",{label:this.label,value:n instanceof Sl?n:n?new Sl(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return je("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return je("plugin:window|set_position",{label:this.label,value:n instanceof sd?n:new sd(n)})}async setFullscreen(n){return je("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return je("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return je("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return je("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return je("plugin:window|set_icon",{label:this.label,value:Ud(n)})}async setSkipTaskbar(n){return je("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return je("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return je("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return je("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return je("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return je("plugin:window|set_cursor_position",{label:this.label,value:n instanceof sd?n:new sd(n)})}async setIgnoreCursorEvents(n){return je("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return je("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return je("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return je("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return je("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return je("plugin:window|set_overlay_icon",{label:this.label,value:n?Ud(n):void 0})}async setProgressBar(n){return je("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return je("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return je("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return je("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(Li.WINDOW_RESIZED,i=>{i.payload=new Pc(i.payload),n(i)})}async onMoved(n){return this.listen(Li.WINDOW_MOVED,i=>{i.payload=new hr(i.payload),n(i)})}async onCloseRequested(n){return this.listen(Li.WINDOW_CLOSE_REQUESTED,async i=>{const a=new lw(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(Li.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new hr(d.payload.position)}})}),a=await this.listen(Li.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new hr(d.payload.position)}})}),c=await this.listen(Li.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new hr(d.payload.position)}})}),u=await this.listen(Li.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(Li.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(Li.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(Li.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(Li.WINDOW_THEME_CHANGED,n)}}var wy;(function(e){e.Disabled="disabled",e.Throttle="throttle",e.Suspend="suspend"})(wy||(wy={}));var Sy;(function(e){e.Default="default",e.FluentOverlay="fluentOverlay"})(Sy||(Sy={}));var Cy;(function(e){e.AppearanceBased="appearanceBased",e.Light="light",e.Dark="dark",e.MediumLight="mediumLight",e.UltraDark="ultraDark",e.Titlebar="titlebar",e.Selection="selection",e.Menu="menu",e.Popover="popover",e.Sidebar="sidebar",e.HeaderView="headerView",e.Sheet="sheet",e.WindowBackground="windowBackground",e.HudWindow="hudWindow",e.FullScreenUI="fullScreenUI",e.Tooltip="tooltip",e.ContentBackground="contentBackground",e.UnderWindowBackground="underWindowBackground",e.UnderPageBackground="underPageBackground",e.Mica="mica",e.Blur="blur",e.Acrylic="acrylic",e.Tabbed="tabbed",e.TabbedDark="tabbedDark",e.TabbedLight="tabbedLight"})(Cy||(Cy={}));var ky;(function(e){e.FollowsWindowActiveState="followsWindowActiveState",e.Active="active",e.Inactive="inactive"})(ky||(ky={}));async function cw(e={}){return typeof e=="object"&&Object.freeze(e),await je("plugin:dialog|open",{options:e})}/**
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
 */const jy=e=>{const n=dw(e);return n.charAt(0).toUpperCase()+n.slice(1)};/**
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
 */const la=(e,n)=>{const i=_.forwardRef(({className:a,...c},u)=>_.createElement(mw,{ref:u,iconNode:n,className:eb(`lucide-${uw(jy(e))}`,`lucide-${e}`,a),...c}));return i.displayName=jy(e),i};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],tb=la("chevron-down",pw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],gw=la("chevron-right",_w);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],xw=la("chevron-up",yw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],vw=la("ellipsis",bw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],Sw=la("folder-git-2",ww);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],nb=la("git-branch-plus",Cw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],jw=la("git-commit-horizontal",kw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],sb=la("git-merge",Mw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],Tw=la("panel-left-close",Ew);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],Nw=la("panel-left-open",Aw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Rw=la("search",Dw),Bw=3.7,od=200,Um=240,Un=540,Ps=176,em=32,$l=20,Lw=Um/2,Cl=Un+Lw,Oa=18,za=18,tm="var(--border)";function My(e){var n,i;return{start:new Date((i=(n=e.createdDate)!=null?n:e.divergedFromDate)!=null?i:e.lastCommitDate).getTime(),end:new Date(e.lastCommitDate).getTime()}}function Ir(e,n){var a,c,u,d;const i="branch"in n&&n.branch?n.branch:e;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,parentShas:"parentShas"in n?(a=n.parentShas)!=null?a:[]:n.parentSha?[n.parentSha]:[],childShas:"childShas"in n?(c=n.childShas)!=null?c:[]:[],clusterKey:"clusterKey"in n&&(u=n.clusterKey)!=null?u:null,kind:n.kind,isRemote:(d=n.isRemote)!=null?d:!1}}function $a(e){var n,i;return(i=(n=e.id)!=null?n:e.fullSha)!=null?i:""}function zc(e,n){const i=new Date(e.date).getTime()-new Date(n.date).getTime();return i!==0?i:$a(e).localeCompare($a(n))}function ob(e){return[...e].sort(zc)}function Ow(e){var h,p,y,g,x,b;if(e.length<=1)return[...e];const n=new Map(e.map(w=>[$a(w),w])),i=new Map,a=new Map;e.forEach(w=>i.set($a(w),0));for(const w of e){const C=((h=w.parentShas)!=null?h:[]).length>0?(p=w.parentShas)!=null?p:[]:w.parentSha?[w.parentSha]:[];for(const E of C){if(!E||!n.has(E))continue;const M=$a(w);i.set(M,((y=i.get(M))!=null?y:0)+1);const A=(g=a.get(E))!=null?g:[];A.push(w),a.set(E,A)}}for(const w of a.values())w.sort(zc);const c=e.filter(w=>{var C;return((C=i.get($a(w)))!=null?C:0)===0}).sort(zc),u=[],d=new Set;for(;c.length>0;){const w=c.shift(),C=$a(w);if(!d.has(C)){d.add(C),u.push(w);for(const E of(x=a.get(C))!=null?x:[]){const M=$a(E),A=((b=i.get(M))!=null?b:0)-1;i.set(M,A),A===0&&c.push(E)}c.sort(zc)}}return u.length===e.length?u:[...u,...e.filter(w=>!d.has($a(w))).sort(zc)]}function ib(e,n){var i;return ob(((i=n[e])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function ab(e,n,i){return ib(e,i)}function nm(e){var n;return e.length===0?null:(n=[...e].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function zw(e,n){var u,d;if(!n||e.length===0)return nm(e);const i=new Date(n).getTime();if(!Number.isFinite(i))return nm(e);let a=null,c=null;for(const h of e){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const y=i-p;(!a||y<a.delta)&&(a={delta:y,commit:h})}else{const y=p-i;(!c||y<c.delta)&&(c={delta:y,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:nm(e)}function id(e,n,i){var c,u;if(!n)return null;const a=(c=e.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function $w(e,n,i){var g,x,b,w,C,E,M;const a=ab(e,i,n);if(a.length===0)return null;const c=a.map(A=>Ir(e,A)),u=new Set(c.map(A=>A.id)),d=(x=(g=c[0])==null?void 0:g.parentSha)!=null?x:null,h=(w=(b=c.find(A=>A.kind==="branch-created"))==null?void 0:b.id)!=null?w:null,p=(C=c[0])==null?void 0:C.date,y=c.find(A=>h&&A.id===h||d&&A.id===d?!0:!A.parentSha||!u.has(A.parentSha));return y||((M=(E=zw(c,p!=null?p:void 0))!=null?E:c[0])!=null?M:null)}function Iw(e,n,i){var c,u,d,h,p;if(e.name===n)return null;const a=ib(e.name,i);if(a.length>0){const y=a.map(b=>Ir(e.name,b)),g=new Set(y.map(b=>b.id)),x=(u=(c=y.find(b=>!b.parentSha||!g.has(b.parentSha)))!=null?c:y[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=e.presidesFromSha)!=null?d:e.divergedFromSha)!=null?h:e.createdFromSha)!=null?p:null}function jp(e,n,i={},a={}){var he,ye,Re,Ge;const u=new Map(e.map(oe=>[oe.name,oe])),d=new Map,h=new Map;for(const oe of e){const O=((he=i[oe.name])!=null?he:[]).filter(ae=>ae.kind!=="branch-created").map(ae=>new Date(ae.date).getTime()).filter(ae=>Number.isFinite(ae)).sort((ae,H)=>ae-H)[0];O!=null&&h.set(oe.name,O)}const p=oe=>{const me=h.get(oe.name);return me!=null?me:My(oe).start},y=oe=>{var O;const me=(O=a[oe.name])!=null?O:null;return me&&me!==oe.name&&(me===n||u.has(me))?me:oe.name===n?null:oe.parentBranch&&oe.parentBranch!==oe.name&&(oe.parentBranch===n||u.has(oe.parentBranch))?oe.parentBranch:null};for(const oe of e){if(oe.name===n)continue;const me=(ye=y(oe))!=null?ye:n,O=(Re=d.get(me))!=null?Re:[];O.push(oe),d.set(me,O)}for(const oe of d.values())oe.sort((me,O)=>p(me)-p(O)||me.name.localeCompare(O.name));const g=new Map,x=[],b=new Map,w=new Map,C=new Map;for(const oe of Object.values(i))for(const me of oe){const O=new Date(me.date).getTime();Number.isFinite(O)&&(me.fullSha&&C.set(me.fullSha,O),me.sha&&C.set(me.sha,O))}const E=(oe,me)=>({start:Math.min(oe,me),end:Math.max(oe,me)}),M=oe=>{var ee,Ce;const me=E(p(oe),My(oe).end),O=[me],ae=me.start,H=Iw(oe,n,i),pe=H?C.get(H):void 0,we=new Date((Ce=(ee=oe.divergedFromDate)!=null?ee:oe.createdDate)!=null?Ce:oe.lastCommitDate).getTime(),I=Number.isFinite(pe!=null?pe:NaN)?pe:Number.isFinite(we)?we:null;if(I==null)return O;const ce=E(I,ae);return ce.start!==ce.end&&O.push(ce),O},A=Math.max(1,360*60*1e3*Bw),U=(oe,me)=>!(oe.start-me.end>=A||me.start-oe.end>=A),L=(oe,me)=>me.some(O=>{var ae;return((ae=w.get(oe))!=null?ae:[]).some(H=>U(O,H))}),T=(oe,me=new Set)=>{const O=b.get(oe);if(O!=null)return O;if(me.has(oe))return 1;me.add(oe);const ae=u.get(oe);if(!ae||oe===n)return me.delete(oe),b.set(oe,0),0;const H=y(ae),pe=H?T(H,me)+1:1;return me.delete(oe),b.set(oe,pe),pe},G=(oe,me=new Set)=>{var _e,Oe;const O=g.get(oe);if(O)return O.column;if(me.has(oe))return 0;me.add(oe);const ae=u.get(oe);if(!ae)return me.delete(oe),0;if(oe===n){const Je={name:oe,column:0,parentName:null};g.set(oe,Je),x.push(Je);const We=M(ae);return w.set(0,[...(_e=w.get(0))!=null?_e:[],...We]),me.delete(oe),0}const H=y(ae),pe=H&&!me.has(H)?H:null,we=pe?G(pe,me):0,I=Math.max(1,T(oe)),ce=Math.max(pe?we+1:1,I),ee=M(ae);let Ce=ce;for(;L(Ce,ee);)Ce+=1;const Te={name:oe,column:Ce,parentName:pe};return g.set(oe,Te),x.push(Te),w.set(Ce,[...(Oe=w.get(Ce))!=null?Oe:[],...ee]),me.delete(oe),Ce};G(n);const F=e.filter(oe=>!g.has(oe.name)).sort((oe,me)=>p(oe)-p(me)||oe.name.localeCompare(me.name)),W=F.filter(oe=>y(oe)!=null),K=F.filter(oe=>y(oe)==null);for(const oe of W)G(oe.name);let de=Math.max(0,...x.map(oe=>oe.column))+1+1;for(const oe of K){const me=M(oe);let O=de;for(;L(O,me);)O+=1;const ae={name:oe.name,column:O,parentName:null};g.set(oe.name,ae),x.push(ae),w.set(O,[...(Ge=w.get(O))!=null?Ge:[],...me]),de=O+1}return x.sort((oe,me)=>oe.column-me.column||oe.name.localeCompare(me.name))}function Pw(e,n,i,a){const c=new Map(e.map(h=>[h.name,h])),u=h=>{var y;const p=(y=i[h.name])!=null?y:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of e){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const ad=2.25,na=0,sm=0,Hw=3600*1e3,Uw=3600*1e3,qi=e=>{const n=e?new Date(e).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Ho=(e,n)=>!e||!n?!1:e===n||e.startsWith(n)||n.startsWith(e);function Ey(e,n,i=new Map){var K,de,he,ye,Re,Ge,oe,me,O,ae,H,pe,we,I,ce;if(e.length===0)return new Map;const a=[...e].sort((ee,Ce)=>{const Te=qi(ee.date)-qi(Ce.date);return Te!==0?Te:ee.id!==Ce.id?ee.id.localeCompare(Ce.id):ee.visualId.localeCompare(Ce.visualId)}),c=new Map;for(const ee of e){const Ce=(K=ee.parentSha)!=null?K:null;if(Ce){const Te=(de=c.get(Ce))!=null?de:new Set;Te.add(ee.id),c.set(Ce,Te)}for(const Te of(he=i.get(ee.id))!=null?he:[]){if(!Te)continue;const _e=(ye=c.get(Te))!=null?ye:new Set;_e.add(ee.id),c.set(Te,_e)}}const u=new Map,d=new Map,h=new Map,p=new Set,y=new Map,g=new Map,x=new Map,b=new Map;for(const ee of e){const Ce=(Re=y.get(ee.branchName))!=null?Re:new Set;Ce.add(ee.id),y.set(ee.branchName,Ce);const Te=(oe=(Ge=n.get(ee.branchName))==null?void 0:Ge.column)!=null?oe:0,_e=(me=g.get(ee.id))!=null?me:new Set;_e.add(Te),g.set(ee.id,_e);const Oe=new Set;ee.parentSha&&Oe.add(ee.parentSha),x.set(ee.visualId,Oe);const Je=new Set(Oe);for(const We of(O=i.get(ee.id))!=null?O:[])We&&Je.add(We);b.set(ee.visualId,Je)}const w=new Set(Array.from(g.keys())),C=Array.from(w),E=new Map,M=ee=>{const Ce=[];for(const Te of C)Ho(Te,ee)&&Ce.push(Te);return Ce},A=new Map;for(const ee of C)A.set(ee,new Set);for(const ee of e){const Ce=M(ee.id);if(Ce.length===0)continue;const Te=(ae=b.get(ee.visualId))!=null?ae:new Set,_e=new Set;for(const Oe of Te)for(const Je of M(Oe))_e.add(Je);for(const Oe of Ce){const Je=(H=A.get(Oe))!=null?H:new Set;for(const We of _e)Je.add(We);A.set(Oe,Je)}}const U=new Map,L=(ee,Ce=new Set)=>{var Je;const Te=U.get(ee);if(Te)return Te;if(Ce.has(ee))return new Set;Ce.add(ee);const _e=(Je=A.get(ee))!=null?Je:new Set,Oe=new Set;for(const We of _e){Oe.add(We);for(const pt of L(We,Ce))Oe.add(pt)}return Ce.delete(ee),U.set(ee,Oe),Oe},T=(ee,Ce)=>{if(Ho(ee,Ce))return!0;const Te=M(ee),_e=M(Ce);for(const Oe of Te){const Je=L(Oe);for(const We of _e)if(Je.has(We))return!0}for(const Oe of _e){const Je=L(Oe);for(const We of Te)if(Je.has(We))return!0}return!1};let G=1;const F=(ee,Ce)=>{var dt,at,gt,He,bt,yt,Mt,$t,st;const Te=(at=(dt=n.get(ee.branchName))==null?void 0:dt.column)!=null?at:0,_e=(gt=y.get(ee.branchName))!=null?gt:new Set,Je=!(!!ee.parentSha&&_e.has(ee.parentSha))&&ee.parentSha?ee.parentSha:null,We=Array.from(Ce).flatMap(B=>M(B).flatMap(te=>{var Se;return(Se=E.get(te))!=null?Se:[]})),pt=(ee.kind==="branch-created"||ee.kind==="stash")&&We.length>0?Math.max(...We)+1:null,Tt=We.length>0?Math.max(...We)+1:1,Ct=(He=c.get(ee.id))!=null?He:new Set,Ot=Array.from(Ct).flatMap(B=>{var te;return Array.from((te=g.get(B))!=null?te:[])}).some(B=>B!==Te),_t=new Date(ee.date).getTime(),Gt=Math.max(Tt,1);let en=null;for(let B=Gt;B<G;B+=1){const te=(bt=d.get(B))!=null?bt:[];if(te.length===0||Ot||p.has(B))continue;const Se=(yt=b.get(ee.visualId))!=null?yt:new Set;if(!(te.some(De=>T(ee.id,De.sha)?!0:Array.from(Se).some(ot=>Ho(ot,De.sha)))||te.some(De=>De.column===Te)||!Number.isFinite(_t)||!te.every(De=>{if(!Number.isFinite(De.time))return!1;const ot=!!Je&&!!De.branchEntryParentSha&&Je===De.branchEntryParentSha?Uw:Hw;return Math.abs(De.time-_t)<=ot}))){en=B;break}}pt!=null&&(en=pt),en==null&&(en=Math.max(Tt,G)),u.set(ee.visualId,en),en>=G&&(G=en+1);const J=(Mt=d.get(en))!=null?Mt:[];J.push({visualId:ee.visualId,sha:ee.id,column:Te,time:_t,branchEntryParentSha:Je}),d.set(en,J),Ot&&p.add(en);for(const B of Ce){const te=($t=h.get(B))!=null?$t:[];te.push(en),h.set(B,te)}const Be=(st=E.get(ee.id))!=null?st:[];Be.push(en),E.set(ee.id,Be)};for(const ee of a){const Ce=(pe=x.get(ee.visualId))!=null?pe:new Set;F(ee,Ce)}const W=Math.max(1,a.length*2);for(let ee=0;ee<W;ee+=1){let Ce=!1;for(const Te of a){const _e=(we=x.get(Te.visualId))!=null?we:new Set;if(_e.size===0)continue;const Oe=(I=u.get(Te.visualId))!=null?I:1;let Je=1;for(const We of _e){const pt=M(We).flatMap(Tt=>{var Ct;return(Ct=E.get(Tt))!=null?Ct:[]});pt.length>0&&(Je=Math.max(Je,Math.max(...pt)+1))}if(Oe<Je){u.set(Te.visualId,Je);const We=(ce=E.get(Te.id))!=null?ce:[];We.length===0?E.set(Te.id,[Je]):E.set(Te.id,[...We.slice(0,-1),Je]),Ce=!0}}if(!Ce)break}return u}function Mp(e){var Vo,Ci,Qt,zi,Rs,Ls,Fs,Yo,Zs,Js,fo,gn,xs,Xs,es,ds,hn,Os,eo,ni,Cs,ki,Wo,Fo,No,si,Xo,qn,ho,Go,Bs,mo,qo,zs,ts,vo,fs,Mn,Ms,Es,to,ji,$i,oi,Mi,wo,jt,Gs,Ii,Pi,Hi,So,Do,Co,hi;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,unpushedCommitShasByBranch:d={},defaultBranch:h,branchCommitPreviews:p,branchParentByName:y={},branchUniqueAheadCounts:g,manuallyOpenedClumps:x,manuallyClosedClumps:b,isDebugOpen:w,gridSearchQuery:C,gridFocusSha:E,checkedOutRef:M,orientation:A="horizontal",nodePositionOverrides:U={}}=e,L=A==="horizontal",T=new Map(i.map(j=>[j.name,j])),G=new Map(n.map(j=>[j.name,j])),F=Ow([...a.map(j=>{var X,fe,Ae,Fe;return{id:j.fullSha,branchName:h,message:(X=j.prTitle)!=null?X:j.sha,author:"",date:j.date,parentSha:(Ae=(fe=j.parentShas)==null?void 0:fe[0])!=null?Ae:null,parentShas:(Fe=j.parentShas)!=null?Fe:[]}}),...((Vo=p[h])!=null?Vo:[]).map(j=>Ir(h,j)),...c.map(j=>Ir(j.branch||"",j)),...u.map(j=>Ir(j.branch||"",j))]),W=new Map,K=new Map;for(const j of i){if(j.name===h)continue;const X=ab(j.name,g,p);K.set(j.name,X);const fe=ob(X.map(Pt=>Ir(j.name,Pt)));if(fe.length>0){W.set(j.name,fe);continue}const Ae=(zi=(Qt=(Ci=j.presidesFromSha)!=null?Ci:j.divergedFromSha)!=null?Qt:j.createdFromSha)!=null?zi:null;if(!Ae)continue;const Fe=(Rs=c.find(Pt=>Ho(Pt.fullSha,Ae)||Ho(Pt.sha,Ae)))==null?void 0:Rs.date,ct=Fe?null:(Ls=Object.values(p).flat().find(Pt=>Ho(Pt.fullSha,Ae)||Ho(Pt.sha,Ae)))==null?void 0:Ls.date,Yt={id:`BRANCH_HEAD:${j.name}:${Ae}`,branchName:j.name,message:`Branch ${j.name}`,author:j.lastCommitAuthor,date:(Zs=(Yo=(Fs=Fe!=null?Fe:ct)!=null?Fs:j.createdDate)!=null?Yo:j.divergedFromDate)!=null?Zs:j.lastCommitDate,parentSha:Ae,clusterKey:null,childShas:[],kind:"branch-created"};W.set(j.name,[Yt])}const de=new Set(F.map(j=>j.id)),he=(Js=[...F].sort((j,X)=>qi(j.date)-qi(X.date)||j.id.localeCompare(X.id))[0])!=null?Js:null,ye=new Map(Array.from(W.entries()).map(([j,X])=>[j,new Set(X.map(fe=>fe.id))])),Re=new Map;for(const j of i){if(j.name===h)continue;const X=$w(j.name,p,g);if(X){Re.set(j.name,X);continue}const fe=(fo=W.get(j.name))==null?void 0:fo[0];if(fe){const Ae=(Xs=(xs=(gn=j.presidesFromSha)!=null?gn:j.divergedFromSha)!=null?xs:j.createdFromSha)!=null?Xs:null;Re.set(j.name,{...fe,parentSha:Ae})}}const Ge=new Map;for(const[j,X]of W.entries()){const fe=X.find(Ae=>Ae.kind!=="branch-created");fe&&Ge.set(j,fe)}const oe=new Map;for(const[j,X]of W.entries()){const fe=X.filter(ct=>ct.kind!=="branch-created"),Fe=(es=(fe.length>0?fe:X)[0])!=null?es:null;Fe&&oe.set(j,Fe)}const me=new Map;for(const j of i){if(j.name===h)continue;const X=(ds=oe.get(j.name))!=null?ds:null,fe=(Os=(hn=Re.get(j.name))==null?void 0:hn.parentSha)!=null?Os:null,Ae=(Cs=(ni=(eo=j.presidesFromSha)!=null?eo:j.divergedFromSha)!=null?ni:j.createdFromSha)!=null?Cs:null,Fe=(ki=X==null?void 0:X.parentSha)!=null?ki:null,ct=(Wo=Fe!=null?Fe:fe)!=null?Wo:Ae;ct&&me.set(j.name,ct)}const O=j=>{var ct,Yt,Pt,Zt,yn,wn,rn,Ft;const X=(ct=y[j.name])!=null?ct:null;if(!(X&&X!==h&&X!==j.name&&T.has(X)))return X!=null?X:"";const Ae=(Zt=(Pt=(Yt=me.get(j.name))!=null?Yt:j.presidesFromSha)!=null?Pt:j.divergedFromSha)!=null?Zt:j.createdFromSha;if(Ae&&((yn=ye.get(X))!=null?yn:new Set).has(Ae))return X;const Fe=(rn=(wn=Re.get(j.name))==null?void 0:wn.parentSha)!=null?rn:null;return Fe&&((Ft=ye.get(X))!=null?Ft:new Set).has(Fe),X},ae=j=>{var Fe,ct,Yt,Pt,Zt,yn,wn,rn;const X=Re.get(j.name),fe=(Zt=(Pt=(Yt=(ct=(Fe=me.get(j.name))!=null?Fe:X==null?void 0:X.parentSha)!=null?ct:j.presidesFromSha)!=null?Yt:j.divergedFromSha)!=null?Pt:j.createdFromSha)!=null?Zt:null;if(!j.parentBranch&&!fe||!fe)return null;if(O(j)===h){if(de.has(fe))return fe;const Ft=(yn=X==null?void 0:X.parentSha)!=null?yn:null;return Ft&&de.has(Ft)?Ft:(rn=(wn=he==null?void 0:he.id)!=null?wn:Ft)!=null?rn:fe}return de.has(fe),fe},H=j=>ae(j),pe=new Map;for(const j of[...c,...u]){const X={...Ir(j.branch||"",j),visualId:`${j.branch||""}:${j.fullSha}`};pe.set(j.fullSha,X)}const we=new Map(pe),I=j=>{we.has(j.id)||we.set(j.id,j)},ce=new Map(Object.entries(d).map(([j,X])=>[j,new Set(X)])),ee=new Map(Array.from(W.entries()).map(([j,X])=>[j,new Set(X.map(fe=>fe.id))])),Ce=new Set;for(const j of ee.values())for(const X of j)Ce.add(X);for(const j of F)Ce.has(j.id)||I({...j,visualId:`${j.branchName}:${j.id}`});for(const[j,X]of W.entries())for(const fe of X)I({...fe,visualId:`${j}:${fe.id}`});const _e=[...Array.from(we.values()).map(j=>({...j,visualId:`${j.branchName}:${j.id}`}))].sort((j,X)=>qi(j.date)-qi(X.date)||j.id.localeCompare(X.id)),Oe=new Map;for(const j of _e){const X=(Fo=Oe.get(j.branchName))!=null?Fo:new Set;X.add(j.id),Oe.set(j.branchName,X)}const Je=(j,X)=>{const fe=Oe.get(j);if(!fe||fe.size===0)return!1;for(const Ae of fe)if(Ho(Ae,X))return!0;return!1},We=(j,X)=>{const fe=Array.from(Oe.entries()).filter(([Ae])=>Ae!==X).filter(([,Ae])=>Array.from(Ae).some(Fe=>Ho(Fe,j))).map(([Ae])=>Ae);return fe.length>0?fe.sort()[0]:j.slice(0,7)},pt=[],Tt=new Map,Ct=new Map;for(const j of a){const X=j.fullSha,fe=j.targetBranch,Ae=j.targetCommitSha;if(!X||!fe||!Ae||!Je(fe,Ae))continue;const Fe=((No=j.parentShas)!=null?No:[]).slice(1).filter(Yt=>!!Yt&&!Ho(Yt,X));if(Fe.length===0)continue;const ct=(si=Ct.get(X))!=null?si:new Set;for(const Yt of Fe){ct.add(Yt);const Pt=We(Yt,fe);pt.push({sourceCommitSha:Yt,sourceBranchName:Pt,mergeCommitSha:X,targetCommitSha:Ae,targetBranchName:fe});const Zt=(Xo=Tt.get(Pt))!=null?Xo:new Map,yn=(qn=Zt.get(Yt))!=null?qn:new Set;yn.add(fe),Zt.set(Yt,yn),Tt.set(Pt,Zt)}Ct.set(X,ct)}const ut=new Map;for(const j of i){if(j.name===h)continue;const X=ae(j);X&&ut.set(j.name,X)}const Ot=new Map;for(const j of _e){const X=Ct.get(j.id);if(X&&X.size>0){const Fe=(ho=Ot.get(j.id))!=null?ho:new Set;for(const ct of X)Fe.add(ct);Ot.set(j.id,Fe)}if(j.branchName===h)continue;const fe=ut.get(j.branchName);if(!fe||fe===j.id)continue;const Ae=(Go=Ot.get(j.id))!=null?Go:new Set;Ae.add(fe),Ot.set(j.id,Ae)}const _t=new Map,Gt=new Map;for(const j of _e){if(Gt.set(j.id,j),j.parentSha){const X=(Bs=_t.get(j.parentSha))!=null?Bs:new Set;X.add(j.id),_t.set(j.parentSha,X)}for(const X of(mo=Ot.get(j.id))!=null?mo:[]){if(!X)continue;const fe=(qo=_t.get(X))!=null?qo:new Set;fe.add(j.id),_t.set(X,fe)}}const en=new Map;for(const[j,X]of _t.entries())en.set(j,Array.from(X));const J=new Set(["branch-created","stash"]),Be=new Set,dt=j=>{if(!j)return null;const X=_e.find(fe=>Ho(fe.id,j)||Ho(fe.visualId.split(":").slice(1).join(":"),j));return X!=null?X:null};for(const j of _e){if(j.parentSha){const fe=dt(j.parentSha),Ae=!!fe&&Be.has(fe.visualId);fe&&(j.kind==="stash"||j.kind==="branch-created"||Ae)&&Be.add(fe.visualId)}const X=(zs=_t.get(j.id))!=null?zs:new Set;(X.size>1||Array.from(X).map(fe=>Gt.get(fe)).some(fe=>fe!=null&&fe.kind!=null&&J.has(fe.kind)))&&Be.add(j.visualId)}const at=_e.map(j=>{var X,fe;return{...j,childShas:(fe=(X=en.get(j.id))!=null?X:j.childShas)!=null?fe:[]}}),gt=Ey(at,G,Ot),He=new Map;for(const j of at){const X=(ts=He.get(j.branchName))!=null?ts:[];X.push(j),He.set(j.branchName,X)}const bt=new Map,yt=new Map,Mt=new Map,$t=new Map,st=new Map,B=(j,X)=>{var yn,wn,rn,Ft,hs;if(X.length===0)return[];const fe=[...X].sort((qt,Bn)=>{var Kn,Ei;const Ts=(Kn=gt.get(qt.visualId))!=null?Kn:Number.MAX_SAFE_INTEGER,xn=(Ei=gt.get(Bn.visualId))!=null?Ei:Number.MAX_SAFE_INTEGER;return Ts!==xn?Ts-xn:qi(qt.date)-qi(Bn.date)||qt.id.localeCompare(Bn.id)}),Ae=new Map;let Fe=null,ct=0;const Yt=qt=>{if(qt.kind==="uncommitted")return"uncommitted";if(qt.kind==="stash")return"stash";if(qt.kind==="branch-created")return"branch-created";const Bn=ce.get(qt.branchName);return Bn!=null&&Bn.has(qt.id)?"unpushed":"pushed"};let Pt=null;for(const qt of fe){const Bn=qt.kind==="stash"||qt.kind==="branch-created",Ts=Be.has(qt.visualId);if(Bn)continue;const xn=Yt(qt);(!Fe||Pt!=null&&Pt!==xn)&&(ct+=1,Fe=`cluster:${j}:segment:${ct}`);const Kn=(yn=Ae.get(Fe))!=null?yn:[];Kn.push(qt),Ae.set(Fe,Kn),Ts&&(Fe=null),Pt=xn}const Zt=[];for(const[qt,Bn]of Ae.entries()){if(Bn.length===0)continue;const xn=[...Bn].sort((no,ko)=>{var Mo,Ko;const jo=(Mo=gt.get(no.visualId))!=null?Mo:Number.MIN_SAFE_INTEGER,Ro=(Ko=gt.get(ko.visualId))!=null?Ko:Number.MIN_SAFE_INTEGER;return jo!==Ro?Ro-jo:qi(ko.date)-qi(no.date)||ko.id.localeCompare(no.id)})[0].visualId,Kn={branchName:j,key:qt,commitIds:Bn.map(no=>no.visualId),leadId:xn,count:Bn.length};Zt.push(Kn);const Ei=(wn=st.get(qt))!=null?wn:0;if(!$t.has(qt))$t.set(qt,xn);else{const no=$t.get(qt),ko=Gt.get(no.split(":").slice(1).join(":"));if(ko){const jo=(rn=gt.get(ko.visualId))!=null?rn:Number.MIN_SAFE_INTEGER;((Ft=gt.get(xn))!=null?Ft:Number.MIN_SAFE_INTEGER)>jo&&$t.set(qt,xn)}}st.set(qt,Math.max(Ei,Bn.length));for(const no of Kn.commitIds){yt.set(no,qt);const ko=no.split(":").slice(1).join(":"),jo=(hs=Mt.get(ko))!=null?hs:[];jo.includes(qt)||jo.push(qt),Mt.set(ko,jo)}}return Zt};for(const[j,X]of He.entries())bt.set(j,B(j,X));const te=new Map;for(const j of at)te.set(j.id,j);const Se=j=>{if(!j)return"none";const X=Array.from(te.values()).find(fe=>Ho(fe.id,j)||Ho(fe.id.slice(0,7),j)||Ho(j,fe.id));return X?`${X.id.slice(0,7)} ${X.branchName}`:j.slice(0,7)},Ne=w?["Lane rows (expected):",...[...n].sort((j,X)=>j.column-X.column||j.name.localeCompare(X.name)).map(j=>{var X;return`  row=${j.column} branch=${j.name} parent=${(X=j.parentName)!=null?X:"none"}`}),"",...i.flatMap(j=>{var Yt,Pt,Zt,yn,wn,rn,Ft,hs;const X=(Yt=p[j.name])!=null?Yt:[],fe=[...(Pt=K.get(j.name))!=null?Pt:[]].reverse(),Ae=new Set(((Zt=W.get(j.name))!=null?Zt:[]).map(qt=>qt.id)),Fe=(wn=(yn=fe.find(qt=>!qt.parentSha||!fe.some(Bn=>{var Ts;return Ho(Bn.fullSha,(Ts=qt.parentSha)!=null?Ts:"")})))!=null?yn:fe[0])!=null?wn:null,ct=(Ft=(rn=Fe==null?void 0:Fe.parentSha)!=null?rn:me.get(j.name))!=null?Ft:null;return[`Branch ${j.name}`,`  ahead=${(hs=g[j.name])!=null?hs:0} previews=${fe.length} rendered=${Ae.size}`,`  db parent commit=${Se(ct)}`,`  db child commit=${Fe?`${Fe.fullSha.slice(0,7)} ${j.name}`:"none"}`,...fe.map(qt=>{const Bn=Ae.has(qt.fullSha)?"visible":"hidden",Ts=Ae.has(qt.fullSha)?"kept by render set":"dropped by render set";return`  ${Bn} ${qt.fullSha.slice(0,7)} ${qt.message} [${Ts}]`}),X.length===0?"  no preview data":null].filter(qt=>qt!=null)})]:[],it=w?Array.from(W.entries()).map(([j,X])=>[`Branch debug ${j}`,...X.map(fe=>`  ${fe.id.slice(0,7)} ${fe.message}`)].join(`
`)):[],Ve=gt,De=Um/ad,ge=20/ad,ot=L?Un+De+ge:od+De+ge,qe=L?od+De+ge:Cl,nt=Math.max(0,...at.map(j=>{var X;return(X=Ve.get(j.visualId))!=null?X:1})),Ie=at.map(j=>{var Fe,ct;const X=G.get(j.branchName),fe=(Fe=Ve.get(j.visualId))!=null?Fe:1,Ae=(ct=X==null?void 0:X.column)!=null?ct:0;return L?{commit:j,row:fe,column:Ae,x:za+(fe-1)*ot,y:Oa+Ae*qe}:{commit:j,row:fe,column:Ae,x:za+Ae*Cl,y:Oa+(nt-fe)*ot}}),tt=j=>{var fe;const X=(fe=U[j.commit.visualId])!=null?fe:U[j.commit.id];return X?{...j,x:X.x,y:X.y}:j},xt=Ie.map(tt),wt=C.trim().toLowerCase(),Qe=wt?xt.filter(j=>{const X=j.commit.id.toLowerCase(),fe=j.commit.id.slice(0,7).toLowerCase(),Ae=j.commit.message.toLowerCase(),Fe=j.commit.branchName.toLowerCase();return X.includes(wt)||fe.includes(wt)||Ae.includes(wt)||Fe.includes(wt)}):xt,Rt=E&&(vo=xt.find(j=>j.commit.id===E))!=null?vo:null,kt=new Set(Qe.map(j=>j.commit.id)),mt=(fs=M==null?void 0:M.headSha)!=null?fs:null,Kt=(()=>{var X,fe;const j=(X=M==null?void 0:M.branchName)!=null?X:null;return!mt||!j?null:(fe=yt.get(`${j}:${mt}`))!=null?fe:null})(),ht=new Set;for(const[j,X]of st.entries())X>1&&j!==Kt&&ht.add(j);const Ht=[..._e].filter(j=>{var ct;const X=yt.get(j.visualId);if(!X)return!0;const fe=$t.get(X),Ae=(ct=st.get(X))!=null?ct:1,Fe=x.has(X)||!ht.has(X)&&!b.has(X);return Ae<=1||Fe||fe===j.visualId}),dn=Ey(Ht,G,Ot),Lt=Um/ad,St=20/ad,fn=L?Un+Lt+St:od+Lt+St,ls=L?od+Lt+St:Cl,sn=Math.max(0,..._e.map(j=>{var X;return(X=gt.get(j.visualId))!=null?X:1})),Sn=Math.max(0,...Ht.map(j=>{var X;return(X=dn.get(j.visualId))!=null?X:1})),tn=Math.max(0,sn-Sn),ln=[...Ht.map(j=>{var Fe,ct;const X=G.get(j.branchName),fe=(Fe=dn.get(j.visualId))!=null?Fe:1,Ae=(ct=X==null?void 0:X.column)!=null?ct:0;return tt(L?{commit:j,row:fe,column:Ae,x:za+(tn+fe-1)*fn,y:Oa+Ae*ls}:{commit:j,row:fe,column:Ae,x:za+Ae*Cl,y:Oa+(Sn-fe)*fn})})].sort((j,X)=>j.row!==X.row?j.row-X.row:j.column!==X.column?j.column-X.column:j.commit.visualId.localeCompare(X.commit.visualId)).map(j=>({...j})),rt=new Set;for(const j of ln){let X=j.row,fe=`${j.column}:${X}`;for(;rt.has(fe);)X+=1,fe=`${j.column}:${X}`;j.row=X,rt.add(fe)}const Fn=Math.max(0,...ln.map(j=>j.row));for(const j of ln){if(L){j.x=za+(tn+j.row-1)*fn,j.y=Oa+j.column*ls;continue}j.x=za+j.column*Cl,j.y=Oa+(Fn-j.row)*fn}const Dn=new Map;for(const j of ln){const X=(Mn=Dn.get(j.commit.id))!=null?Mn:[];X.push(j),Dn.set(j.commit.id,X)}const yo=new Map;for(const j of ln){const X=yt.get(j.commit.visualId);if(!X)continue;const fe=yo.get(X);(!fe||(L?j.x>fe.x:j.y<fe.y))&&yo.set(X,j)}const On=(j,X)=>`${j.toFixed(1)} ${X.toFixed(1)}`,Ds=Math.max(0,...ln.map(j=>j.row)),In=Math.max(0,...n.map(j=>j.column)),xo=Math.max(0,...ln.map(j=>j.x+Un)),Ao=Math.max(0,...ln.map(j=>j.y+$l+Ps)),on=Math.max(L?za*2+Math.max(0,Ds-1)*fn+Un+em+St:za*2+(In+1)*Cl,xo+za),zn=Math.max(L?Oa*2+In*ls+Ps+em+St:Oa*2+Math.max(0,Ds-1)*fn+Ps+em+St,Ao+Oa),Cn=[],cs=new Map(i.map(j=>{var fe,Ae;const X=new Date((Ae=(fe=j.createdDate)!=null?fe:j.divergedFromDate)!=null?Ae:j.lastCommitDate).getTime();return[j.name,Number.isFinite(X)?X:0]})),_s=j=>{var X;return(X=cs.get(j))!=null?X:0},vs=[],Wt=j=>{w&&vs.push(j)},Xn=new Set,Us=new Map,ws=(j,X)=>{var Ae;const fe=(Ae=Us.get(j))!=null?Ae:[];fe.includes(X)||fe.push(X),Us.set(j,fe)},bo=new Set,co=new Set,gs=new Set,us=(j,X)=>{var Fe,ct;if(!j)return null;const fe=id(Dn,j,X);if(fe)return fe;const Ae=(Fe=yt.get(`${X!=null?X:h}:${j}`))!=null?Fe:yt.get(j);return Ae&&(ct=yo.get(Ae))!=null?ct:null},_n=new Set;for(const j of i){const X=H(j);X&&co.add(X);const fe=(Ms=me.get(j.name))!=null?Ms:null;fe&&gs.add(fe)}const ti=j=>{var Fe;const X=us(j.id,j.branchName);if(X)return X;const fe=yt.get(j.visualId);if(!fe)return null;const Ae=$t.get(fe);return Ae&&(Fe=ln.find(ct=>ct.commit.id===Ae))!=null?Fe:null},fi=(j,X)=>j?id(Dn,j,X):null,uo=(j,X)=>L?{x:j.x-na,y:j.y+Ps/2,face:"left"}:{x:j.x+Un/2,y:j.y+Ps+na,face:"bottom"},Ji=j=>L?{x:j.x-na,y:j.y+Ps/2,face:"left"}:{x:j.x+Un/2,y:j.y+Ps+na,face:"bottom"},Vs=(j,X)=>j.column!==X.column?!0:L?j.commit.branchName!==X.commit.branchName:!1,Ys=(j,X,fe)=>{if(!L)return{x:X?j.x+Un:j.x+Un/2,y:X?j.y+Ps/2:j.y,face:X?"right":"top"};if(!X)return{x:j.x+Un+na,y:j.y+Ps/2,face:"right"};if(fe&&fe.column===j.column&&fe.commit.branchName!==j.commit.branchName){if(fe.x>j.x)return{x:j.x+Un/2,y:j.y+Ps+na,face:"bottom"};if(fe.x<j.x)return{x:j.x+Un/2,y:j.y-na,face:"top"}}return!fe||fe.column===j.column?{x:j.x+Un+na,y:j.y+Ps/2,face:"right"}:fe.column>j.column?{x:j.x+Un/2,y:j.y+Ps+na,face:"bottom"}:{x:j.x+Un/2,y:j.y-na,face:"top"}},Ss=j=>L?{x:j.x+Un/2,y:j.y+Ps+na,face:"bottom"}:{x:j.x+Un,y:j.y+Ps/2,face:"right"},Gn=(j,X)=>id(Dn,j,X),kn=(j,X)=>fi(j,X),Ws=[],vn=new Set;for(const j of pt){const X=(Es=us(j.targetCommitSha,j.targetBranchName))!=null?Es:null;if(!X){Wt({id:`merge:${j.mergeCommitSha}:${j.sourceCommitSha}:target`,kind:"merge",parent:j.sourceCommitSha,child:j.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const fe=j.sourceCommitSha,Ae=`merge:${j.mergeCommitSha}:${fe!=null?fe:"unknown"}`;if(!fe||Ho(fe,j.targetCommitSha)){Wt({id:Ae,kind:"merge",parent:fe!=null?fe:"unknown",child:j.targetCommitSha,rendered:!1,reason:fe?"merged parent equals merge target sha":"missing merged parent sha"});continue}const Fe=(to=id(Dn,fe))!=null?to:null;if(!Fe){Wt({id:Ae,kind:"merge",parent:fe,child:j.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(Fe.commit.id===X.commit.id){Wt({id:Ae,kind:"merge",parent:Fe.commit.id,child:X.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let ct,Yt,Pt;const Zt=L?X.x+Un/2:X.x+Un-sm,yn=L?X.y+Ps+sm:X.y+Ps/2,wn=L?"bottom":"right";L?(ct=Fe.x+Un+sm,Yt=Fe.y+Ps/2,Pt="right"):(ct=Fe.x+Un/2,Yt=Fe.y,Pt="top");const rn=`${ct.toFixed(2)}:${Yt.toFixed(2)}:${Zt.toFixed(2)}:${yn.toFixed(2)}`;if(vn.has(rn)){Wt({id:Ae,kind:"merge",parent:Fe.commit.id,child:X.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}vn.add(rn),Ws.push({id:Ae,fromX:ct,fromY:Yt,toX:Zt,toY:yn,fromFace:Pt,toFace:wn,zIndex:_s(Fe.commit.branchName)}),Wt({id:Ae,kind:"merge",parent:Fe.commit.id,child:X.commit.id,rendered:!0,reason:`merge connector rendered to ${j.targetBranchName}`})}const ys=new Set;for(const j of i){if(j.name===h)continue;const X=Re.get(j.name);if(!X)continue;const fe=O(j),Ae=Gn((ji=me.get(j.name))!=null?ji:"",fe),Fe=($i=Ge.get(j.name))!=null?$i:X,ct=(oi=kn(Fe.id,j.name))!=null?oi:ti(Fe);if(!Ae||!ct||Ae.commit.id===ct.commit.id){const wn=yt.get(`${j.name}:${X.id}`),rn=yt.get(`${j.name}:${Fe.id}`),Ft=!!wn&&!ht.has(wn),hs=!!rn&&!ht.has(rn),qt=!!wn&&!x.has(wn)&&(Ft?b.has(wn):!0),Bn=!!rn&&!x.has(rn)&&(hs?b.has(rn):!0);!Ae&&!qt&&ws((Mi=ct==null?void 0:ct.commit.id)!=null?Mi:X.id,"Missing parent node"),!ct&&!Bn&&ws(X.id,"Missing child node"),Wt({id:`branch:${(wo=Ae==null?void 0:Ae.commit.id)!=null?wo:"null"}->${(jt=ct==null?void 0:ct.commit.id)!=null?jt:"null"}`,kind:"branch",parent:(Gs=Ae==null?void 0:Ae.commit.id)!=null?Gs:"null",child:(Ii=ct==null?void 0:ct.commit.id)!=null?Ii:"null",rendered:!1,reason:Ae?ct?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Yt=`branch:${Ae.commit.id}->${ct.commit.id}`;if(_n.has(Yt)){Wt({id:Yt,kind:"branch",parent:Ae.commit.id,child:ct.commit.id,rendered:!1,reason:"duplicate connector key"});continue}_n.add(Yt),bo.add(Ae.commit.id);const Pt=Vs(Ae,ct);Ae.commit.branchName!==ct.commit.branchName&&ys.add(Ae.commit.id);const Zt=Ss(Ae),yn=Ji(ct);Cn.push({id:Yt,fromX:Zt.x,fromY:Zt.y,toX:yn.x,toY:yn.y,fromFace:Zt.face,toFace:yn.face,zIndex:_s(ct.commit.branchName)}),Wt({id:Yt,kind:"branch",parent:Ae.commit.id,child:ct.commit.id,rendered:!0,reason:Pt?"branch connector rendered":L?"horizontal connector rendered":"vertical connector rendered"})}for(const j of _e){const X=ti(j);if(!X)continue;const fe=(Pi=j.parentSha)!=null?Pi:null;if(!fe)continue;const Ae=(Hi=us(fe,j.branchName))!=null?Hi:Gn(fe,j.branchName);if(!Ae){const Zt=(So=yt.get(`${j.branchName}:${fe}`))!=null?So:yt.get(fe),yn=!!Zt&&!ht.has(Zt);!!Zt&&!x.has(Zt)&&(yn?b.has(Zt):!0)||ws(j.id,"Missing parent node"),Wt({id:`${j.visualId}->${fe}`,kind:"ancestry",parent:fe,child:j.id,rendered:!1,reason:"missing parent node"});continue}if(X.commit.id===Ae.commit.id){ws(X.commit.id,"Parent and child resolve to the same node"),Wt({id:`${Ae.commit.id}->${X.commit.id}`,kind:"ancestry",parent:Ae.commit.id,child:X.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const Fe=`${j.branchName}:${(Do=Ae.commit.visualId)!=null?Do:Ae.commit.id}->${X.commit.visualId}`;if(_n.has(Fe)){ws(Ae.commit.id,"Duplicate connector key"),ws(X.commit.id,"Duplicate connector key"),Wt({id:Fe,kind:"ancestry",parent:Ae.commit.id,child:X.commit.id,rendered:!1,reason:"duplicate connector key"});continue}_n.add(Fe),bo.add(Ae.commit.id);const ct=Vs(Ae,X),Yt=Ys(Ae,ct,X),Pt=uo(X);Cn.push({id:Fe,fromX:Yt.x,fromY:Yt.y,toX:Pt.x,toY:Pt.y,fromFace:Yt.face,toFace:Pt.face,zIndex:_s(X.commit.branchName)}),Wt({id:Fe,kind:"ancestry",parent:Ae.commit.id,child:X.commit.id,rendered:!0,reason:ct?"ancestry connector rendered":L?"horizontal ancestry rendered":"vertical ancestry rendered"}),Xn.add(Ae.commit.id),Xn.add(X.commit.id)}const Si=new Map;for(const j of ln){const X=(Co=Si.get(j.commit.branchName))!=null?Co:[];X.push(j),Si.set(j.commit.branchName,X)}for(const[j,X]of Si.entries()){if(X.length<2)continue;const fe=[...X].sort((Ae,Fe)=>{var ct,Yt,Pt,Zt,yn,wn,rn,Ft;return Ae.row!==Fe.row?Ae.row-Fe.row:qi((Yt=(ct=Ae==null?void 0:Ae.commit)==null?void 0:ct.date)!=null?Yt:null)-qi((Zt=(Pt=Fe==null?void 0:Fe.commit)==null?void 0:Pt.date)!=null?Zt:null)||((wn=(yn=Ae==null?void 0:Ae.commit)==null?void 0:yn.id)!=null?wn:"").localeCompare((Ft=(rn=Fe==null?void 0:Fe.commit)==null?void 0:rn.id)!=null?Ft:"")});for(let Ae=1;Ae<fe.length;Ae+=1){const Fe=fe[Ae-1],ct=fe[Ae];if(Fe.commit.id===ct.commit.id)continue;const Yt=(hi=ct.commit.parentSha)!=null?hi:null;if(Yt&&Gn(Yt,ct.commit.branchName))continue;const Pt=`chain:${j}:${Fe.commit.id}->${ct.commit.id}`;if(_n.has(Pt)){ws(Fe.commit.id,"Duplicate branch chain connector"),ws(ct.commit.id,"Duplicate branch chain connector"),Wt({id:Pt,kind:"ancestry",parent:Fe.commit.id,child:ct.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}_n.add(Pt);const Zt=Vs(Fe,ct),yn=Ys(Fe,Zt,ct),wn=uo(ct);Cn.push({id:Pt,fromX:yn.x,fromY:yn.y,toX:wn.x,toY:wn.y,fromFace:yn.face,toFace:wn.face,zIndex:_s(ct.commit.branchName)}),Wt({id:Pt,kind:"ancestry",parent:Fe.commit.id,child:ct.commit.id,rendered:!0,reason:"branch chain rendered"}),Xn.add(Fe.commit.id),Xn.add(ct.commit.id)}}return{branchByName:T,laneByName:G,mainCommits:F,branchCommitsByLane:W,branchPreviewSets:K,allCommits:_e,clustersByBranch:bt,clusterKeyByCommitId:yt,clusterKeyBySha:Mt,leadByClusterKey:$t,clusterCounts:st,debugRows:Ne,branchDebugRows:it,nodes:Ie,normalizedSearchQuery:wt,matchingNodes:Qe,matchingNodeIds:kt,focusedNode:Rt,checkedOutClusterKey:Kt,defaultCollapsedClumps:ht,visibleCommitsList:Ht,renderNodes:ln,visibleNodesBySha:Dn,visibleNodeByClusterKey:yo,pointFormatter:On,contentWidth:on,contentHeight:zn,connectors:Cn,mergeConnectors:Ws,connectorDecisions:vs,nodeWarnings:Us,connectorParentShas:bo,branchStartShas:co,branchOffNodeShas:gs,crossBranchOutgoingShas:ys,commitIdsWithRenderedAncestry:Xn,branchBaseCommitByName:Re,firstBranchCommitByName:oe,mergeDestinations:pt,mergeTargetBranchesBySourceBranchAndCommitSha:Tt}}const Vw=8,Yw=44,Ty=120,Ay=e=>e==="left"||e==="right"?"h":e==="top"||e==="bottom"?"v":null;function rb(e,n,i,a,c,u){const d=i-e,h=a-n,p=Math.abs(d),y=Math.abs(h),g=Math.hypot(d,h);if(g<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,y)<Vw){const F=d/g,W=h/g,K=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:e+F*K,c1y:n+W*K,c2x:i-F*K,c2y:a-W*K}}if(Math.min(p,y)<Yw){const F=d/g,W=h/g,K=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:e+F*K,c1y:n+W*K,c2x:i-F*K,c2y:a-W*K}}const w=Math.min(160,p*.42),C=Math.min(100,p*.22),E=Math.min(120,y*.32),M=Math.min(160,y*.42),A=Ay(c),U=Ay(u);if(!(A==="v"&&U==="h"||A==="v"&&U==null&&y>=p||A==null&&U==="h"&&y>=p||A==="v"&&U==="v"||A==null&&U==null&&y>p)){const F=i,W=n;return{kind:"elbowH",cx:F,cy:W,s1c1x:e+x*w,s1c1y:n,s1c2x:F-x*C,s1c2y:W,s2c1x:F,s2c1y:W+b*E,s2c2x:i,s2c2y:a-b*M}}const T=e,G=a;return{kind:"elbowV",cx:T,cy:G,s1c1x:e,s1c1y:n+b*M,s1c2x:T,s1c2y:G-b*E,s2c1x:T+x*w,s2c1y:G,s2c2x:i-x*C,s2c2y:a}}function Ww(e,n,i,a,c,u){const d=rb(e,n,i,a,c,u);return d.kind==="line"?[{x:e,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:e,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:e,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:e,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function Ny(e,n,i,a,c,u,d){const h=rb(e,n,i,a,u,d);if(h.kind==="line")return[`M ${c(e,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(e,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const w=Math.max(8,Math.min(Ty,Math.abs(i-e)*.48,Math.abs(a-n)*.48)),C=i>=e?1:-1,E=a>=n?1:-1,M=h.cx-C*w,A=h.cy+E*w;return[`M ${c(e,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(M-C*w*.5,h.cy)} ${c(M,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,A)}`,`C ${c(h.cx,A+E*w*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(Ty,Math.abs(i-e)*.48,Math.abs(a-n)*.48)),y=i>=e?1:-1,g=a>=n?1:-1,x=h.cy-g*p,b=h.cx+y*p;return[`M ${c(e,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-g*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+y*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const Ep=2.25,Mc=Ep/2,Fw=.45,Xw=.02,aa=Ep,Vd=10,Gw=-100,Dy=0,qw=.25,rd=.001,Kw=12,Qw=Un+48;function pn(...e){return e.filter(Boolean).join(" ")}function Ry(e){return Math.max(Fw,Math.min(Ep,e))}function Zw(e,n){if(e===null||e.size!==n.size)return!1;for(const i of e)if(!n.has(i))return!1;return!0}function lb(e,n){return!(n.right<e.left||n.left>e.right||n.bottom<e.top||n.top>e.bottom)}function Jw(e){var u,d,h,p;let n=(d=(u=e[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=e[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const y of e)n=Math.min(n,y.x),i=Math.min(i,y.y),a=Math.max(a,y.x),c=Math.max(c,y.y);return{left:n,top:i,right:a,bottom:c}}function eS(e,n,i,a,c,u,d){const h=Ww(e,n,i,a,u,d),p=Jw(h);return lb(c,p)}function cb(e,n){return{left:e.x,top:e.y+n,right:e.x+Un,bottom:e.y+$l+Ps+4}}function tS(e,n){const i=Qw,a=Math.max(120,Math.ceil($l+Ps+4-n+24)),c=new Map;for(const u of e){const d=cb(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),y=Math.floor(d.top/a),g=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let w=y;w<=g;w++){const C=`${b},${w}`;let E=c.get(C);E||(E=new Set,c.set(C,E)),E.add(x)}}return{cellW:i,cellH:a,buckets:c}}function nS(e,n,i,a){const{cellW:c,cellH:u,buckets:d}=e,h=Math.floor(n.left/c),p=Math.floor(n.right/c),y=Math.floor(n.top/u),g=Math.floor(n.bottom/u),x=new Set;for(let w=h;w<=p;w++)for(let C=y;C<=g;C++){const E=d.get(`${w},${C}`);if(E)for(const M of E)x.add(M)}const b=new Set;for(const w of x){const C=i.get(w);if(!C)continue;const E=cb(C,a);lb(n,E)&&b.add(w)}return b}function By(e,n,i,a){var d;if(i.zoom<=0||e<=0||n<=0)return null;const c=i.zoom/aa;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(e-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function sS(e,n){return n>0?{left:e.left-n,top:e.top-n,right:e.right+n,bottom:e.bottom+n}:e}function Ly(e,n,i){const a=n/aa;return!Number.isFinite(a)||a<=0?e:sS(e,100/a)}function Oy(e){return e.replace(/\\/g,"/").replace(/\/+$/,"")}function Oi(e,n){return!e||!n?!1:e===n||e.startsWith(n)||n.startsWith(e)}function Vm(e,n){if(n){const i=Oy(n),a=Oy(e.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!e.isCurrent}function om(e,n){return e.pathExists===!1?!1:Vm(e,n)}function oS(e){const n=e.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?e:`.../${n.slice(-2).join("/")}`}function iS({compactLabels:e=!1,selectedVisibleCommitShas:n,commitInProgress:i,commitDisabled:a,stashInProgress:c,stashDisabled:u,pushInProgress:d,hasUncommittedChanges:h,createBranchFromNodeInProgress:p,onCommitLocalChanges:y,onStashLocalChanges:g,onPushCurrentBranch:x,onPushAllBranches:b,onPushCommitTargets:w,onMergeRefsIntoBranch:C,selectedPushTargets:E,selectedPushLabel:M,canPushCurrentBranch:A,pushCurrentBranchLabel:U,pushableRemoteBranchCount:L,selectedCommitTargetOption:T,mergeInProgress:G,setMergeTargetCommitSha:F,worktrees:W,currentRepoPath:K,worktreeMenuOpen:de,setWorktreeMenuOpen:he,onSwitchToWorktree:ye,onRemoveWorktree:Re,removeWorktreeInProgress:Ge,setCommitDialogOpen:oe,setNewBranchDialogOpen:me,hideMergeControls:O=!1}){var ut,Ot;const ae=n.length>0,H=n.length>0&&n.every(_t=>_t==="WORKING_TREE"),[pe,we]=_.useState(!1),I=_.useRef(null),ce=_.useRef(null),ee="inline-flex h-7 items-center rounded-md border border-border bg-background px-2 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",Ce=!!y&&h&&!a&&!i&&(!ae||H),Te=!!x&&A&&!ae&&!d,_e=!!w&&E.length>0&&!d,Oe=!!b&&L>=2&&!ae&&!d,Je=!!g&&!u&&!ae&&!c,We="Push Selected...",pt=Ce?{label:i?"Committing...":"Commit",iconSrc:"/icon-commit.svg",run:()=>oe(!0),disabled:!Ce}:Te?{label:d?"Pushing...":U,iconSrc:"/icon-pushBranch.svg",run:()=>void(x==null?void 0:x()),disabled:!Te}:_e?{label:We,iconSrc:"/icon-pushSelected.svg",run:()=>void(w==null?void 0:w(E.map(_t=>({branchName:_t.branchName,targetSha:_t.targetSha})))),disabled:!_e}:null,Tt=(_t,Gt)=>l.jsx("span",{"aria-hidden":"true",className:pn("inline-block shrink-0 bg-current",Gt),style:{WebkitMaskImage:`url(${_t})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${_t})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}});return _.useEffect(()=>{const _t=Gt=>{var J,Be;const en=Gt.target;en&&((J=I.current)!=null&&J.contains(en)||(Be=ce.current)!=null&&Be.contains(en)||(we(!1),he(!1)))};return window.addEventListener("pointerdown",_t),()=>window.removeEventListener("pointerdown",_t)},[he]),l.jsx("div",{className:"window-no-drag pointer-events-none z-[60] flex w-full justify-start",children:l.jsxs("div",{className:"pointer-events-auto flex w-fit max-w-full flex-nowrap items-center justify-start gap-[9px]",children:[l.jsxs("div",{ref:I,className:"relative inline-flex h-7 items-stretch rounded-md border border-border bg-background",children:[l.jsx("button",{type:"button",onClick:()=>{pt&&pt.run()},disabled:!pt||pt.disabled,className:pn(ee,"h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-muted"),children:l.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[Tt((ut=pt==null?void 0:pt.iconSrc)!=null?ut:"/icon-commit.svg","h-4.5 w-4.5"),e?null:l.jsx("span",{children:(Ot=pt==null?void 0:pt.label)!=null?Ot:"Commit"})]})}),l.jsx("button",{type:"button",onClick:()=>we(_t=>!_t),disabled:!pt,"aria-haspopup":"menu","aria-expanded":pe,className:pn(ee,"h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-muted"),title:"More actions",children:l.jsx(tb,{className:"h-3.5 w-3.5 shrink-0"})}),pe&&pt?l.jsxs("div",{className:"absolute left-[-1px] top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border bg-background p-1",children:[l.jsxs("button",{type:"button",onClick:()=>{we(!1),oe(!0)},disabled:!Ce,className:pn(ee,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!Ce&&"text-foreground opacity-50"),children:[Tt("/icon-commit.svg","mr-1.5 h-4.5 w-4.5"),i?"Committing...":"Commit"]}),l.jsxs("button",{type:"button",onClick:()=>{we(!1),x==null||x()},disabled:!Te,className:pn(ee,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!Te&&"text-foreground opacity-50"),children:[Tt("/icon-pushBranch.svg","mr-1.5 h-4.5 w-4.5"),d?"Pushing...":U]}),l.jsxs("button",{type:"button",onClick:()=>{we(!1),w==null||w(E.map(_t=>({branchName:_t.branchName,targetSha:_t.targetSha})))},disabled:!_e,className:pn(ee,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!_e&&"text-foreground opacity-50"),title:M,children:[Tt("/icon-pushSelected.svg","mr-1.5 h-4.5 w-4.5"),We]}),l.jsxs("button",{type:"button",onClick:()=>{we(!1),b==null||b()},disabled:!Oe,className:pn(ee,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!Oe&&"text-foreground opacity-50"),children:[Tt("/icon-pushAll.svg","mr-1.5 h-4.5 w-4.5"),"Push all"]}),l.jsxs("button",{type:"button",onClick:()=>{we(!1),g==null||g()},disabled:!Je,className:pn(ee,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!Je&&"text-foreground opacity-50"),children:[Tt("/icon-stash.svg","mr-1.5 h-4.5 w-4.5"),c?"Stashing...":"Stash"]})]}):null]}),l.jsx("div",{className:"flex w-fit flex-nowrap items-center gap-[9px]",children:l.jsxs("button",{type:"button",onClick:()=>me(!0),disabled:p,className:pn(ee,"pointer-events-auto relative z-10 !bg-background !border-border hover:!bg-muted",e?"w-7 justify-center px-0":""),children:[l.jsx(nb,{className:pn("h-3.5 w-3.5 shrink-0",e?"":"mr-1.5")}),e?null:p?"Creating...":"Branch"]})}),!O&&n.length>1&&T.options.length>0&&T.targetBranch&&C?l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border bg-background px-2 py-1",children:[l.jsx("span",{className:"px-1 text-[11px] font-medium text-foreground",children:"Merge to"}),T.options.map(_t=>{const Gt=_t.targetBranch===T.targetBranch;return l.jsx("button",{type:"button",onClick:()=>F(_t.targetSha),className:pn("rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors",Gt?"bg-background text-foreground":"text-foreground hover:bg-muted hover:text-foreground"),children:_t.targetBranch},`merge-${_t.targetBranch}`)}),l.jsxs("button",{type:"button",onClick:()=>void C(T.sources,T.targetBranch),disabled:T.sources.length===0||G,className:"rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(sb,{className:"mr-1 inline h-3 w-3 shrink-0 align-text-bottom"}),G?"Merging...":"Confirm"]})]}):null,W.length>0&&(ye||Re)?l.jsxs("div",{ref:ce,className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>he(_t=>!_t),className:pn(ee,"!bg-background !border-border hover:!bg-muted"),children:[l.jsx(Sw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),W.length,e?null:` ${W.length===1?"Worktree":"Worktrees"}`]}),de?l.jsx("div",{className:"absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-md border border-border bg-background p-1",children:W.map(_t=>{var Gt;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:_t.path,children:Vm(_t,K)?oS(_t.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-foreground",children:[(Gt=_t.branchName)!=null?Gt:"detached"," • ",_t.headSha.slice(0,7)]})]}),Vm(_t,K)?l.jsxs("div",{className:"flex items-center gap-1",children:[ye?l.jsx("button",{type:"button",onClick:()=>{he(!1),ye(_t.path)},disabled:Ge||_t.pathExists===!1,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,Re?l.jsx("button",{type:"button",onClick:()=>void Re(_t.path,_t.isPrunable),disabled:Ge,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Ge?"...":"Remove"}):null]}):null]},_t.path)})}):null]}):null]})})}function aS({fadeIn:e,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=_.useState(!e);return _.useLayoutEffect(()=>{if(!e){p(!0);return}p(!1);let y=null;const g=requestAnimationFrame(()=>{y=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(g),y!=null&&cancelAnimationFrame(y)}},[e]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:e?"opacity 240ms ease-out":void 0},children:d})}function rS({scrollContainerRef:e,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:y,labelTopPx:g,inverseZoomStyle:x,displayZoom:b,selectedVisibleCommitShas:w,normalizedSearchQuery:C,matchingNodeIds:E,focusedNode:M,renderNodes:A,shouldRenderNode:U,manuallyOpenedClumps:L,manuallyClosedClumps:T,defaultCollapsedClumps:G,leadByClusterKey:F,clusterKeyByCommitId:W,clusterCounts:K,commitIdsWithRenderedAncestry:de,nodeWarnings:he,connectorParentShas:ye,branchStartShas:Re,branchOffNodeShas:Ge,crossBranchOutgoingShas:oe,branchBaseCommitByName:me,branchStartAccentClass:O,connectorParentAccentClass:ae,commitCornerRadiusPx:H,lineStrokeWidth:pe,pointFormatter:we,connectors:I,mergeConnectors:ce,cullConnectorPath:ee,flushCameraReactTick:Ce,setManuallyOpenedClumps:Te,setManuallyClosedClumps:_e,onCommitCardClick:Oe,unpushedCommitShasSetByBranch:Je,remoteCommitShas:We,checkedOutHeadSha:pt}){const[Tt,Ct]=_.useState(new Set),ut=_.useRef(null);_.useEffect(()=>{const J=new Set;K.forEach((at,gt)=>{(L.has(gt)||!G.has(gt)&&!T.has(gt))&&J.add(gt)});const Be=ut.current;if(Be==null){ut.current=J;return}const dt=[];if(J.forEach(at=>{Be.has(at)||dt.push(at)}),dt.length>0){Ct(gt=>{const He=new Set(gt);return dt.forEach(bt=>He.add(bt)),He});const at=window.setTimeout(()=>{Ct(gt=>{const He=new Set(gt);return dt.forEach(bt=>He.delete(bt)),He})},260);return ut.current=J,()=>{window.clearTimeout(at)}}ut.current=J},[K,G,T,L]);const Ot=(J,Be)=>{const dt=Be.zIndex-J.zIndex;if(dt!==0)return dt;const at=Math.min(J.fromY,J.toY),gt=Math.min(Be.fromY,Be.toY),He=at-gt;return He!==0?He:J.id.localeCompare(Be.id)},_t=ce.filter(J=>ee(J)).sort(Ot),Gt=I.filter(J=>ee(J)).sort(Ot),en=A.filter(J=>U(J));return l.jsx("div",{ref:e,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},onWheel:h,onMouseDown:p,children:l.jsx("div",{ref:n,className:"relative min-w-full bg-background p-2.5",style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[en.map(J=>{var Ht,dn,Lt,St,fn,ls;const Be=W.get(J.commit.visualId),dt=Be?L.has(Be)||!G.has(Be)&&!T.has(Be):!1,at=Be?F.get(Be)===J.commit.visualId:!1,gt=Be!=null&&dt&&!at&&Tt.has(Be),He=Be&&(Ht=K.get(Be))!=null?Ht:1,bt=de.has(J.commit.id),yt=(dn=he.get(J.commit.id))!=null?dn:[],Mt=yt.length>0&&!bt,$t=w.includes(J.commit.id),st=J.commit.id==="WORKING_TREE"||J.commit.kind==="uncommitted",B=J.commit.kind==="stash"||J.commit.id.startsWith("STASH:"),te=/^STASH:(\d+)$/.exec(J.commit.id),Se=te?`Stash ${Number.parseInt(te[1],10)+1}`:null,Ne=B?J.commit.message.trim()&&J.commit.message.trim()!=="git-visualizer"?J.commit.message:"Stashed changes":J.commit.message,it=J.commit.kind==="branch-created"&&J.commit.id.startsWith("BRANCH_HEAD:"),Ve=st||((St=(Lt=Je.get(J.commit.branchName))==null?void 0:Lt.has(J.commit.id))!=null?St:!1),De=J.commit.isRemote===!0,ge=!st&&!Ve&&(De||We.has(J.commit.id)),qe=(st||pt!=null&&J.commit.id===pt)&&!$t,nt=ge&&!qe&&!$t,Ie=qe?"text-checked":nt?"text-remote":$t?"text-select":"text-foreground",tt=qe?{color:"var(--checked)"}:nt?{color:"var(--remote)"}:$t?{color:"var(--select)"}:void 0,xt=(fn=tt==null?void 0:tt.color)!=null?fn:"var(--foreground)",wt=(M==null?void 0:M.commit.id)===J.commit.id?xt:qe?"var(--checked)":nt?"var(--remote)":$t?"var(--select)":tm,Qe=B||it||st?1.25/b:pe,Rt=B||st||it,kt=`${12/b} ${6/b}`,mt=Qe/2,Kt=`M ${mt} ${mt} H ${Un-mt-H} Q ${Un-mt} ${mt} ${Un-mt} ${mt+H} V ${176-mt-H} Q ${Un-mt} ${176-mt} ${Un-mt-H} ${176-mt} H ${mt+H} Q ${mt} ${176-mt} ${mt} ${176-mt-H} V ${mt}`,ht=Ve&&!qe&&!$t?{color:"var(--muted-foreground)"}:void 0;return l.jsxs(aS,{fadeIn:gt,dataCommitCard:"true",className:pn("group absolute z-20",C&&!E.has(J.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",C&&E.has(J.commit.id)?"scale-[1.01]":"",(M==null?void 0:M.commit.id)===J.commit.id?"z-30":""),style:{left:J.x,top:J.y,width:Un,height:$l+Ps+4,overflow:"visible"},onClick:sn=>Oe(sn,J),onPointerDown:sn=>y(sn,J),children:[Rt?l.jsx("svg",{className:"pointer-events-none absolute inset-0 z-20 overflow-visible","aria-hidden":"true",viewBox:`0 0 ${Un} 176`,preserveAspectRatio:"none",children:l.jsx("path",{d:Kt,fill:"none",stroke:wt,strokeWidth:Qe,strokeDasharray:kt,strokeLinecap:"butt",strokeLinejoin:"round"})}):null,l.jsx("div",{className:"absolute left-0 z-30 w-full",style:{...x,top:`${g}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 bg-transparent pb-0",children:[l.jsx("div",{className:pn("min-w-0 h-4 flex-1 text-sm font-normal leading-none",Ie,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:tt!=null?tt:ht,children:B&&Se?Se:J.commit.branchName?`${J.commit.branchName}/${J.commit.id.slice(0,7)}`:J.commit.id.slice(0,7)}),at&&He>1?l.jsx("button",{type:"button",onMouseDown:sn=>{sn.stopPropagation()},onClick:sn=>{if(sn.stopPropagation(),sn.preventDefault(),!Be)return;!G.has(Be)?(Te(tn=>{if(!tn.has(Be))return tn;const Nt=new Set(tn);return Nt.delete(Be),Nt}),_e(tn=>{const Nt=new Set(tn);return Nt.has(Be)?Nt.delete(Be):Nt.add(Be),Nt})):(_e(tn=>{if(!tn.has(Be))return tn;const Nt=new Set(tn);return Nt.delete(Be),Nt}),Te(tn=>{const Nt=new Set(tn);return Nt.has(Be)?Nt.delete(Be):Nt.add(Be),Nt})),Ce()},className:pn("inline-flex self-start items-center bg-transparent p-0 text-sm font-normal leading-none",Ie),style:tt!=null?tt:ht,children:dt?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`+${He-1}`}):null]})}),l.jsx("div",{className:pn("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",qe&&!Ve&&!B&&!it?"bg-checked-muted":nt&&!B&&!it?"bg-remote-muted":$t&&!Ve&&!B&&!it?"bg-select-muted":Ve||B||it?"bg-transparent":"bg-muted",Rt?"border-solid":"",Ge.has(J.commit.id)||Re.has(J.commit.id)||oe.has(J.commit.id)?O:ye.has(J.commit.id)?ae:((ls=me.get(J.commit.branchName))==null?void 0:ls.id)===J.commit.id?"border-amber-500":Mt?"border-red-500":"",(C&&E.has(J.commit.id)&&!d,"")),style:{top:0,borderWidth:`${Qe}px`,borderColor:Rt?"transparent":wt,borderTopLeftRadius:0,borderTopRightRadius:`${H}px`,borderBottomRightRadius:`${H}px`,borderBottomLeftRadius:`${H}px`},children:l.jsxs("div",{className:"relative z-10 flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:pn("max-w-[38rem] select-text text-sm font-normal leading-tight tracking-tight text-foreground",Ie,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),"data-selectable-text":"true",style:tt!=null?tt:ht,children:at&&dt?Ne:at&&He>1?`${Ne} +${He-1}`:Ne}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:Mt?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-foreground dark:bg-red-900/20 dark:text-foreground",title:yt.join(`
`),children:"Broken ancestry"}):null})]}),b>.5&&!B?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:pn("select-text text-sm font-normal",Ie),"data-selectable-text":"true",style:tt!=null?tt:ht,children:["@",J.commit.author]}),l.jsx("div",{className:pn("select-text text-sm font-normal",Ie),"data-selectable-text":"true",style:tt!=null?tt:ht,children:new Date(J.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null]})})]},J.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[_t.map(J=>{const{fromX:Be,fromY:dt,toX:at,toY:gt}=J,He=Ny(Be,dt,at,gt,we,J.fromFace,J.toFace);return l.jsx("path",{d:He,fill:"none",stroke:tm,strokeWidth:pe,strokeLinecap:"round",strokeLinejoin:"round"},J.id)}),Gt.map(J=>{const{fromX:Be,fromY:dt,toX:at,toY:gt}=J,He=Ny(Be,dt,at,gt,we,J.fromFace,J.toFace);return l.jsx("path",{d:He,fill:"none",stroke:tm,strokeWidth:pe,strokeLinecap:"round",strokeLinejoin:"round"},J.id)})]})]})})})}function lS({isOpen:e,onClose:n,visibleBounds:i,renderedNodeCount:a,totalNodeCount:c,renderedMergeConnectorCount:u,totalMergeConnectorCount:d,renderedConnectorCount:h,totalConnectorCount:p,mapGridCullViewportInsetScreenPx:y,debugRows:g,branchDebugRows:x,connectorDecisions:b}){return l.jsx(l.Fragment,{children:e?l.jsxs("div",{className:"absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:n,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${y}px screen/side): ${i?`${(i.right-i.left).toFixed(0)} x ${(i.bottom-i.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${a} / ${c}`,`Rendered merge connectors: ${u} / ${d}`,`Rendered connectors: ${h} / ${p}`,"",...g,...x,"",...b.map(w=>`${w.rendered?"rendered":"skipped"} [${w.kind}] ${w.parent.slice(0,7)} -> ${w.child.slice(0,7)} (${w.reason})`)].join(`
`)})})]}):null})}function cS({commitDialogOpen:e,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:y,deleteInProgress:g,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:w,newBranchCreateMode:C,onNewBranchNameChange:E,onNewBranchCreateModeChange:M,onNewBranchDialogClose:A,onNewBranchConfirm:U,selectedCommitCanCreateBranch:L,currentCheckedOutCommitCanCreateBranch:T,createBranchFromNodeInProgress:G}){return l.jsxs(l.Fragment,{children:[e?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:a,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-background p-4",onClick:F=>F.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:F=>i(F.target.value),onKeyDown:F=>{(F.metaKey||F.ctrlKey)&&F.key==="Enter"&&(F.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(jw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),u?"Committing...":"Commit"]})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:p,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-background p-4",onClick:F=>F.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(F=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:F},F))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsx("button",{type:"button",onClick:y,disabled:x===0||g,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:g?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:A,children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-background p-4",onClick:F=>F.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>M("from-selected-node"),className:pn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",C==="from-selected-node"?"bg-background text-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>M("new-root"),className:pn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",C==="new-root"?"bg-background text-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:"New root"})]}),C==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:w,onChange:F=>E(F.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:A,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:U,disabled:!w.trim()||G||C==="from-selected-node"&&!L&&!T,className:pn("inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted","disabled:cursor-not-allowed disabled:opacity-50"),children:[l.jsx(nb,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),G?"Creating...":"Create"]})]})]})}):null]})}const zy="/icon-GitOrientation.svg";function uS({compactLabels:e=!1,orientation:n,onOrientationChange:i}){const a=n==="horizontal"?"vertical":"horizontal";return l.jsxs("button",{type:"button",onClick:()=>i(a),className:pn("window-no-drag inline-flex h-7 items-center rounded-md border border-border bg-background text-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",e?"w-7 justify-center px-0":"gap-1.5 pl-1.5 pr-2 py-1"),"aria-label":`Rotate view to ${a}`,title:"Rotate View",children:[l.jsx("span",{className:"relative size-4 shrink-0",children:l.jsx("span",{"aria-hidden":"true",className:pn("absolute inset-0 bg-current transition-transform duration-300 ease-in-out",n==="vertical"&&"rotate-[-90deg]"),style:{WebkitMaskImage:`url(${zy})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${zy})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}})}),e?null:l.jsx("span",{className:"whitespace-nowrap text-[12px] font-normal leading-none text-foreground transition-colors",children:"Rotate View"})]})}function dS({query:e,onQueryChange:n,resultCount:i,resultIndex:a,onJump:c}){const u=_.useRef(null);return l.jsxs("div",{className:"window-no-drag flex h-7 w-[12rem] shrink-0 items-center gap-2 rounded-full border border-border bg-background pl-1.5 pr-2.5",children:[l.jsx(Rw,{className:"h-3.5 w-3.5 shrink-0 text-foreground"}),l.jsx("input",{ref:u,value:e,onChange:d=>n(d.target.value),onBlur:d=>{const h=d.relatedTarget;h!=null&&h.closest('button, a, input, textarea, select, [contenteditable="true"]')||window.setTimeout(()=>{var p;(p=u.current)==null||p.focus()},0)},onKeyDown:d=>{d.key==="Enter"&&(d.preventDefault(),c(1))},placeholder:"Search",className:"min-w-0 flex-1 bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"}),i!=null&&i>0?l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-[11px] font-medium tabular-nums text-foreground",children:[(a!=null?a:0)+1,"/",i]}),l.jsx("button",{type:"button",onClick:()=>c(-1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-foreground transition-colors hover:text-foreground","aria-label":"Previous search result",title:"Previous result",children:l.jsx(xw,{className:"h-4 w-4 shrink-0"})}),l.jsx("button",{type:"button",onClick:()=>c(1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-foreground transition-colors hover:text-foreground","aria-label":"Next search result",title:"Next result",children:l.jsx(tb,{className:"h-4 w-4 shrink-0"})})]}):null]})}const fS="git-visualizer:map-grid-camera:",$y=2e5;function hS({mapPadHostRef:e,transformLayerRef:n,isEnabled:i=!0,onUserCameraChange:a,cameraStorageScopeKey:c}){const u=_.useRef({x:0,y:0}),d=_.useRef(Mc),h=_.useRef(null),p=_.useRef({panX:0,panY:0,zoom:Mc}),y=_.useRef(null),g=_.useRef(Mc),x=_.useRef(null),[b,w]=_.useState(!1),[C,E]=_.useState(Mc),[M,A]=_.useState(0),U=_.useRef(null),L=_.useRef(0),T=_.useRef(!1),G=_.useCallback(()=>{const O=(c==null?void 0:c.trim())||window.location.pathname;return`${fS}${O}`},[c]),F=_.useCallback(O=>{try{window.localStorage.setItem(G(),JSON.stringify(O))}catch{}},[G]),W=_.useCallback(()=>{const O=e.current;if(!O)return null;const ae=O.getBoundingClientRect(),H=getComputedStyle(O),pe=Number.parseFloat(H.borderLeftWidth)||0,we=Number.parseFloat(H.borderTopWidth)||0,I=Number.parseFloat(H.paddingLeft)||Vd,ce=Number.parseFloat(H.paddingTop)||Vd;return{x:ae.left+pe+I,y:ae.top+we+ce}},[e]),K=_.useCallback(()=>{U.current!=null&&(window.clearTimeout(U.current),U.current=null),_.startTransition(()=>{A(O=>O+1)}),L.current=performance.now()},[]),de=_.useCallback((O,ae,H,pe)=>{const we=p.current,I={panX:O,panY:ae,zoom:H};p.current=I;const ce=n.current;if(ce&&(ce.style.transform=`translate3d(${O}px, ${ae}px, 0) scale(${H/aa})`),Math.abs(g.current-H)>rd&&(g.current=H,E(H)),(pe==null?void 0:pe.emitTick)===!1||T.current)return;if(Math.abs(H-we.zoom)>rd){K();return}const Te=performance.now()-L.current;if(Te>=Dy){K();return}U.current!=null&&window.clearTimeout(U.current),U.current=window.setTimeout(()=>{U.current=null,K()},Dy-Te)},[K,n]),he=_.useRef(null),ye=_.useCallback(()=>{y.current!=null||!he.current||(y.current=window.requestAnimationFrame(he.current))},[]),Re=_.useCallback(()=>{T.current=!0,w(!0),x.current!=null&&window.clearTimeout(x.current),x.current=window.setTimeout(()=>{x.current=null,T.current=!1,w(!1),K(),F(p.current)},90)},[K,F]),Ge=_.useCallback((O,ae,H)=>{i&&(u.current={x:O,y:ae},d.current=H,Re(),ye())},[i,Re,ye]);he.current=()=>{y.current=null;const O=p.current,ae=u.current.x,H=u.current.y,pe=d.current,we=h.current,I=Math.abs(pe-O.zoom)<=rd?pe:O.zoom+(pe-O.zoom)*qw,ce=we!=null?we.anchorX-we.worldX*(I/aa):ae,ee=we!=null?we.anchorY-we.worldY*(I/aa):H;we!=null&&Math.abs(I-pe)<=rd&&(h.current=null),de(ce,ee,I),ce!==ae||ee!==H||I!==pe?he.current&&(y.current=window.requestAnimationFrame(he.current)):K()};const oe=_.useCallback((O,ae,H)=>{if(!i)return;const pe=Ry(H),we=u.current.x,I=u.current.y,ce=d.current,ee=W();if(!ee){Ge(we,I,pe);return}const Ce=O-ee.x,Te=ae-ee.y,_e=ce/aa,Oe=pe/aa,Je=(Ce-we)/_e,We=(Te-I)/_e,pt=Ce-Je*Oe,Tt=Te-We*Oe;h.current={anchorX:Ce,anchorY:Te,worldX:Je,worldY:We},Ge(pt,Tt,pe)},[W,i,Ge]),me=_.useCallback(O=>{if(!i)return;if(O.preventDefault(),O.ctrlKey||O.metaKey){a==null||a();const we=Math.exp(-O.deltaY*Xw);oe(O.clientX,O.clientY,d.current*we);return}a==null||a(),h.current=null;const ae=p.current;u.current={x:ae.panX,y:ae.panY},d.current=ae.zoom;const H=ae.panX-O.deltaX,pe=ae.panY-O.deltaY;u.current={x:H,y:pe},de(H,pe,ae.zoom)},[de,i,a,oe]);return _.useLayoutEffect(()=>{if(!i)return;let O={panX:0,panY:0,zoom:Mc};try{const ae=window.localStorage.getItem(G());if(ae){const H=JSON.parse(ae);typeof H.panX=="number"&&Number.isFinite(H.panX)&&Math.abs(H.panX)<=$y&&typeof H.panY=="number"&&Number.isFinite(H.panY)&&Math.abs(H.panY)<=$y&&typeof H.zoom=="number"&&Number.isFinite(H.zoom)&&(O={panX:H.panX,panY:H.panY,zoom:Ry(H.zoom)})}}catch{}return u.current={x:O.panX,y:O.panY},d.current=O.zoom,de(O.panX,O.panY,O.zoom,{emitTick:!1}),()=>{x.current!=null&&window.clearTimeout(x.current),y.current!=null&&window.cancelAnimationFrame(y.current),U.current!=null&&(window.clearTimeout(U.current),U.current=null),F(p.current)}},[de,G,i,F]),{isCameraMoving:b,renderedZoom:C,cameraRenderTick:M,renderedCameraRef:p,interactionIdleTimeoutRef:x,getTransformLayerOriginScreen:W,flushCameraReactTick:K,syncCamera:Ge,handleWheel:me}}function mS(e){const n=Math.min(e.startX,e.currentX),i=Math.min(e.startY,e.currentY),a=Math.abs(e.currentX-e.startX),c=Math.abs(e.currentY-e.startY);return{left:n,top:i,width:a,height:c}}function pS({scrollContainerRef:e,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=_.useRef(null),h=_.useRef(!1),p=_.useRef([]),[y,g]=_.useState(!1),[x,b]=_.useState(null),[w,C]=_.useState([]),[E,M]=_.useState(null),A=_.useCallback(L=>{const T=e.current,G=i();if(!T||!G)return[];const F=T.getBoundingClientRect(),W=n.current.zoom/aa;if(W<=0)return[];const K=[],de=L.left,he=L.left+L.width,ye=L.top,Re=L.top+L.height;for(const Ge of a){if(!c(Ge))continue;const oe=G.x+n.current.panX+Ge.x*W-F.left,me=G.y+n.current.panY+Ge.y*W-F.top,O=oe+Un*W,ae=me+($l+Ps)*W;!(O<de||oe>he||ae<ye||me>Re)&&K.push(Ge.commit.id)}return K},[i,a,n,e,c]),U=_.useCallback(L=>{if(L.button!==0)return;const T=L.target;if(T!=null&&T.closest("[data-commit-card]")||T!=null&&T.closest("button, a, input, textarea, select"))return;const G=e.current;if(!G)return;L.preventDefault();const F=G.getBoundingClientRect(),W=L.clientX-F.left,K=L.clientY-F.top;d.current={startX:W,startY:K,currentX:W,currentY:K,additive:L.metaKey||L.ctrlKey},h.current=!1,p.current=L.metaKey||L.ctrlKey?w:[],g(!0),b({left:W,top:K,width:0,height:0})},[e,w]);return _.useEffect(()=>{const L=G=>{var ye;const F=d.current;if(!F)return;const W=e.current;if(!W)return;const K=W.getBoundingClientRect();F.currentX=G.clientX-K.left,F.currentY=G.clientY-K.top,!h.current&&(Math.abs(F.currentX-F.startX)>2||Math.abs(F.currentY-F.startY)>2)&&(h.current=!0);const de=mS(F);b(de);const he=A(de);C(F.additive?Array.from(new Set([...p.current,...he])):Array.from(new Set(he))),F.additive||M((ye=he[he.length-1])!=null?ye:null)},T=()=>{if(d.current){const G=h.current;d.current=null,h.current=!1,g(!1),b(null),G||(C([]),M(null));return}u()};return window.addEventListener("mousemove",L),window.addEventListener("mouseup",T),()=>{window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",T)}},[A,u,e]),{isMarqueeSelecting:y,marqueeRect:x,selectedCommitShas:w,setSelectedCommitShas:C,mergeTargetCommitSha:E,setMergeTargetCommitSha:M,startMarqueeDrag:U}}function _S(){return l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center",children:l.jsx("div",{role:"status","aria-label":"Loading commits",className:"h-5 w-5 rounded-full border-2 border-border border-t-muted-foreground animate-spin"})})}function gS(){return l.jsx("div",{className:"pointer-events-auto absolute inset-0 z-[120] flex min-h-0 items-center justify-center bg-background/80 backdrop-blur-sm",children:l.jsx("div",{role:"status","aria-label":"Preparing map",className:"h-5 w-5 rounded-full border-2 border-border border-t-muted-foreground animate-spin"})})}function Iy({branches:e,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:y,staleBranches:g=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:w,mapTopInsetPx:C=0,onMergeRefsIntoBranch:E,mergeInProgress:M=!1,onPushAllBranches:A,onPushCurrentBranch:U,onPushCommitTargets:L,pushInProgress:T=!1,onDeleteSelection:G,deleteInProgress:F=!1,worktrees:W=[],currentRepoPath:K,onRemoveWorktree:de,removeWorktreeInProgress:he=!1,onSwitchToWorktree:ye,onStashLocalChanges:Re,stashInProgress:Ge=!1,stashDisabled:oe=!1,onCommitLocalChanges:me,commitInProgress:O=!1,commitDisabled:ae=!1,onStageAllChanges:H,stageInProgress:pe=!1,onCreateBranchFromNode:we,onCreateRootBranch:I,createBranchFromNodeInProgress:ce=!1,isDebugOpen:ee=!1,onDebugClose:Ce,orientation:Te="horizontal",branchCommitPreviews:_e={},branchParentByName:Oe={},branchUniqueAheadCounts:Je={},gridSearchQuery:We="",gridSearchJumpToken:pt=0,gridSearchJumpDirection:Tt=1,gridFocusSha:Ct=null,checkedOutRef:ut=null,onGridSearchResultCountChange:Ot,onGridSearchResultIndexChange:_t,onGridSearchFocusChange:Gt,onInteractionChange:en,manuallyOpenedClumps:J,manuallyClosedClumps:Be,setManuallyOpenedClumps:dt,setManuallyClosedClumps:at,layoutModel:gt,gridHudProps:He,blockMapInteraction:bt=!1,blockMapDisplay:yt=!1,mapReadyEpoch:Mt=0,onMapReadyForDisplay:$t}){var xa,R,V,Z,q,S,k,D,z,$,le,ve;const st=_.useRef(null),B=_.useRef(null),te=_.useRef(null),Se=_.useRef(null),Ne=_.useRef(null),it=_.useRef(void 0),Ve=_.useRef(void 0),De=_.useRef(void 0),ge=_.useRef(0),ot=_.useRef(null),[qe,nt]=_.useState(!1),[Ie,tt]=_.useState(!1),[xt,wt]=_.useState(""),[Qe,Rt]=_.useState(!1),[kt,mt]=_.useState(!1),[Kt,ht]=_.useState(""),[Ht,dn]=_.useState("from-selected-node"),[Lt,St]=_.useState(()=>new Set),[fn,ls]=_.useState(()=>new Set),[sn,Sn]=_.useState({}),tn=_.useRef(!1),Nt=_.useRef(null),ln=_.useRef(null),rt=J!=null?J:Lt,Fn=Be!=null?Be:fn,Dn=dt!=null?dt:St,yo=at!=null?at:ls,[On,Ds]=_.useState(null),[In,xo]=_.useState(null),[Ao,on]=_.useState(!1),[zn,Cn]=_.useState(!1),cs=_.useId(),{isCameraMoving:_s,renderedZoom:vs,cameraRenderTick:Wt,renderedCameraRef:Xn,interactionIdleTimeoutRef:Us,getTransformLayerOriginScreen:ws,flushCameraReactTick:bo,syncCamera:co,handleWheel:gs}=hS({mapPadHostRef:te,transformLayerRef:Se,isEnabled:!bt,cameraStorageScopeKey:`${K!=null?K:"__no-repo__"}::${Te}`}),us=_.useRef(0),ti=_.useMemo(()=>{if(gt)return gt;const Y=jp(e,d,_e,Oe);return Mp({lanes:Y,branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,defaultBranch:d,branchCommitPreviews:_e,branchParentByName:Oe,branchUniqueAheadCounts:Je,manuallyOpenedClumps:rt,manuallyClosedClumps:Fn,isDebugOpen:ee,gridSearchQuery:We,gridFocusSha:Ct,checkedOutRef:ut!=null?ut:null,orientation:Te,nodePositionOverrides:sn})},[gt,e,n,i,a,c,d,_e,Oe,Je,rt,Fn,ee,We,Ct,(xa=ut==null?void 0:ut.headSha)!=null?xa:null,(R=ut==null?void 0:ut.branchName)!=null?R:null,Te,sn]),{allCommits:fi,clusterKeyByCommitId:uo,leadByClusterKey:Ji,clusterCounts:Vs,matchingNodes:Ys,matchingNodeIds:Ss,normalizedSearchQuery:Gn,focusedNode:kn,defaultCollapsedClumps:Ws,renderNodes:vn,visibleNodesBySha:ys,contentWidth:Si,contentHeight:Vo,connectors:Ci,mergeConnectors:Qt,connectorDecisions:zi,nodeWarnings:Rs,commitIdsWithRenderedAncestry:Ls,connectorParentShas:Fs,branchStartShas:Yo,branchOffNodeShas:Zs,crossBranchOutgoingShas:Js,branchBaseCommitByName:fo,pointFormatter:gn}=ti,xs=!!Gn,Xs=vs/aa,es=_.useMemo(()=>({transform:`scale(${1/Xs})`,transformOrigin:"top left",width:`${100*Xs}%`,height:`${100*Xs}%`}),[Xs]),ds=-(20/Xs),hn=_.useMemo(()=>{const Y=new Map;for(const se of vn)Y.set(se.commit.visualId,se);return Y},[vn]),Os=_.useMemo(()=>tS(vn,ds),[vn,ds]),eo=Y=>{var ze;const se=Y.commit.id,re=Y.commit.visualId;if(xs&&Ss.has(se)||(kn==null?void 0:kn.commit.id)===se||On===null)return!0;if(!On.has(re))return!1;const ie=uo.get(re);return ie&&((ze=Vs.get(ie))!=null?ze:1)>1&&(rt.has(ie)||!Ws.has(ie)&&!Fn.has(ie)),!0},ni=1.25/Xs,Cs=Kw/Xs,ki="border-border/70",Wo="border-select",Fo=_.useMemo(()=>new Map(e.map(Y=>[Y.name,Y])),[e]),No=(V=ut==null?void 0:ut.hasUncommittedChanges)!=null?V:!1;_.useMemo(()=>new Set(e.filter(Y=>Y.commitsAhead===0&&!Y.name.startsWith("*")).map(Y=>Y.name)),[e]);const si=_.useMemo(()=>{var se,re;const Y=new Map;for(const ie of vn){const ze=(se=Y.get(ie.commit.id))!=null?se:new Set;ze.add(ie.commit.branchName),Y.set(ie.commit.id,ze)}for(const ie of i){const ze=(re=Y.get(ie.fullSha))!=null?re:new Set;ie.branch&&ze.add(ie.branch),Y.set(ie.fullSha,ze)}return Y},[vn,i,d]),Xo=_.useMemo(()=>new Map(Object.entries(c).map(([Y,se])=>[Y,new Set(se)])),[c]),qn=_.useMemo(()=>{var ie;const Y=new Set(i.map(ze=>ze.fullSha)),se=new Set,re=ze=>{ze&&(se.add(ze),se.add(ze.slice(0,7)))};for(const ze of e){if(ze.commitsBehind<=0)continue;const Me=(ie=_e[ze.name])!=null?ie:[];for(const et of Me)et.kind==="branch-created"||et.kind==="uncommitted"||et.kind==="stash"||Y.has(et.fullSha)||re(et.fullSha);ze.headSha&&!Y.has(ze.headSha)&&re(ze.headSha)}return se},[e,_e,i]),ho=_.useCallback(()=>{Us.current,bo()},[bo,Us]),{isMarqueeSelecting:Go,marqueeRect:Bs,selectedCommitShas:mo,setSelectedCommitShas:qo,mergeTargetCommitSha:zs,setMergeTargetCommitSha:ts,startMarqueeDrag:vo}=pS({scrollContainerRef:st,renderedCameraRef:Xn,getTransformLayerOriginScreen:ws,renderNodes:vn,shouldRenderNode:eo,onPointerReleaseNoMarquee:ho}),fs=_.useMemo(()=>new Set(vn.map(Y=>Y.commit.id)),[vn]),Mn=_.useMemo(()=>mo.filter(Y=>fs.has(Y)),[mo,fs]),Ms=_.useCallback((Y,se)=>{var ze;if(!se)return!1;if(((ze=_e[Y])!=null?ze:[]).some(Me=>Oi(Me.fullSha,se)||Oi(Me.sha,se)))return!0;const ie=Fo.get(Y);return!!(ie!=null&&ie.headSha&&Oi(ie.headSha,se))},[_e,Fo]),Es=(Z=ut==null?void 0:ut.branchName)!=null?Z:null,to=(q=ut==null?void 0:ut.headSha)!=null?q:null,ji=Es==null,$i=_.useMemo(()=>{if(!Ct)return null;const Y=vn.filter(se=>se.commit.id===Ct);return Y.length===0?null:Y.length===1||!kn?Y[0]:Y.reduce((se,re)=>{const ie=(se.x-kn.x)**2+(se.y-kn.y)**2;return(re.x-kn.x)**2+(re.y-kn.y)**2<ie?re:se})},[Ct,vn,kn]),oi=_.useCallback((Y,se,re)=>{for(const ie of W){if(!om(ie,K))continue;if(ie.branchName){if(ie.branchName===Y&&Oi(ie.headSha,se))return ie;continue}if(!Oi(ie.headSha,se)&&!Oi(ie.headSha,re))continue;if(ie.parentSha&&Ms(Y,ie.parentSha)||Ms(Y,ie.headSha))return ie;const ze=Fo.get(Y);if(ze&&Oi(ze.headSha,ie.headSha)||Y===d&&i.some(Me=>Oi(Me.fullSha,ie.headSha)))return ie}return null},[W,K,Ms,Fo,d,i]),Mi=_.useCallback(Y=>{for(const se of W)if(om(se,K)&&se.branchName===Y)return se;return null},[W,K]),wo=_.useCallback((Y,se)=>{for(const re of W)if(om(re,K)&&(Oi(re.headSha,Y)||Oi(re.headSha,se)))return re;return null},[W,K]),jt=_.useCallback(Y=>{var se;return Array.from((se=si.get(Y))!=null?se:[])},[si]),Gs=_.useMemo(()=>{var Me,et,Ke,vt;const Y=ft=>!/^stash\b/i.test(ft.trim()),se=new Map;for(const ft of Mn){const lt=jt(ft).filter(Y);if(lt.length===0)continue;const Jt=(Me=lt.find(nn=>nn!==d))!=null?Me:lt[0],zt=Mn.filter(nn=>nn!==ft).filter(nn=>!new Set(jt(nn).filter(Y)).has(Jt));se.set(Jt,{targetSha:ft,targetBranch:Jt,sourceRefs:zt})}const re=Array.from(se.values()),ie=zs?re.find(ft=>{var lt;return ft.targetSha===zs||ft.targetBranch===((lt=jt(zs)[0])!=null?lt:"")}):null,ze=(et=ie!=null?ie:re[re.length-1])!=null?et:null;return{options:re,selected:ze,targetBranch:(Ke=ze==null?void 0:ze.targetBranch)!=null?Ke:null,sources:(vt=ze==null?void 0:ze.sourceRefs)!=null?vt:[]}},[Mn,jt,d,zs]),Ii=_.useMemo(()=>{const Y=se=>!/^stash\b/i.test(se.trim());return Mn.some(se=>{const re=jt(se);return re.length>0&&re.filter(Y).length===0})},[Mn,jt]),Pi=Mn.length>1&&Gs.options.length>0&&!!Gs.targetBranch&&Gs.sources.length>0&&!Ii&&!!E,[Hi,So]=_.useState(!1);_.useEffect(()=>{Pi&&So(!1)},[Pi,Mn]);const Do=_.useMemo(()=>{const Y=[...Es===d?[{name:d,headSha:to!=null?to:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...e].filter(se=>!se.name.startsWith("*")&&se.unpushedCommits>0&&se.remoteSyncStatus!=="on-github").map(se=>[se.name,se]);return new Map(Y)},[e,Es,to,d,a.length]),Co=_.useMemo(()=>{const Y=ie=>{var Me;const ze=jt(ie).filter(et=>Do.has(et));return ze.length===0?null:ze.length===1?ze[0]:Es&&ze.includes(Es)?Es:(Me=ze.find(et=>et!==d))!=null?Me:ze[0]},se=ie=>{var ze;return ie===d?a.map(Me=>{var et,Ke;return{fullSha:Me.fullSha,sha:Me.sha,parentSha:(et=Me.parentSha)!=null?et:null,message:Me.message,author:Me.author,date:Me.date,kind:(Ke=Me.kind)!=null?Ke:"commit"}}):(ze=_e[ie])!=null?ze:[]},re=new Map;for(const ie of Mn){const ze=Y(ie);if(!ze)continue;const Me=Do.get(ze);if(!Me)continue;const et=se(ze).slice(0,Me.unpushedCommits),Ke=et.findIndex(ft=>ft.fullSha===ie);if(Ke===-1)continue;const vt=re.get(ze);(!vt||Ke<vt.targetIndex)&&re.set(ze,{branchName:ze,targetSha:ie,targetIndex:Ke,commitCount:et.length-Ke})}return Array.from(re.values())},[Mn,jt,Do,Es,d,a,_e]),hi=_.useMemo(()=>Array.from(new Set(Mn.map(Y=>/^STASH:(\d+)$/.exec(Y)).filter(Y=>!!Y).map(Y=>parseInt(Y[1],10)))).sort((Y,se)=>Y-se),[Mn]),j=Mn.includes("WORKING_TREE"),X=(j?1:0)+hi.length,fe=[...j?["Uncommitted changes"]:[],...hi.map(Y=>`Stash ${Y+1}`)],Ae=Do.size,Fe=!ji&&!!Es&&Do.has(Es),ct=Es?`Push ${Es}`:"Push current branch",Yt=Co.length===1?Co[0].commitCount>1?`Push ${Co[0].commitCount} commits on ${Co[0].branchName}`:`Push ${Co[0].targetSha.slice(0,7)} on ${Co[0].branchName}`:`Push ${Co.length} selected ranges`,Pt=_.useCallback(Y=>{const se=Y.target;se!=null&&se.closest('.window-no-drag, input, textarea, select, button, [contenteditable="true"]')||kp().startDragging()},[]);_.useEffect(()=>{const Y=_s||Go;Ne.current!==Y&&(Ne.current=Y,en==null||en(Y))},[_s,Go,en]),_.useEffect(()=>{const Y=Gn?Ys.length:null;it.current!==Y&&(it.current=Y,Ot==null||Ot(Y))},[Ys.length,Gn,Ot]),_.useEffect(()=>{const Y=Gn&&Ct?(()=>{const se=Ys.findIndex(re=>re.commit.id===Ct);return se>=0?se:null})():null;Ve.current!==Y&&(Ve.current=Y,_t==null||_t(Y))},[Ct,Ys,Gn,_t]);const Zt=_.useMemo(()=>{var vt,ft,lt,Jt,zt,nn;if(!Gn)return null;const Y=Gn,se=e.map(Ln=>Ln.name),re=se.find(Ln=>Ln.toLowerCase()===Y),ie=re!=null?re:se.find(Ln=>Ln.toLowerCase().startsWith(Y)),Me=ie!=null?ie:se.find(Ln=>Ln.toLowerCase().includes(Y));if(!Me)return null;const et=(vt=e.find(Ln=>Ln.name===Me))!=null?vt:null;if(et!=null&&et.headSha)return et.headSha;const Ke=(ft=_e[Me])!=null?ft:[];return Ke.length>0?(Jt=(lt=Ke[0])==null?void 0:lt.fullSha)!=null?Jt:null:Me===d&&(nn=(zt=i[0])==null?void 0:zt.fullSha)!=null?nn:null},[Gn,e,_e,d,i]);_.useEffect(()=>{var ie,ze,Me;if(!Gn){if(ge.current=pt,De.current===null)return;De.current=null,Gt==null||Gt(null);return}if(pt<=0||ge.current===pt)return;ge.current=pt;let Y;const se=Ct?Ys.findIndex(et=>et.commit.id===Ct):-1,re=Ys.length>0?se<0?0:(se+Tt+Ys.length)%Ys.length:-1;Y=(Me=(ze=(ie=Ys[re])==null?void 0:ie.commit.id)!=null?ze:Zt)!=null?Me:null,De.current!==Y&&(De.current=Y,Gt==null||Gt(Y))},[Ys,Gn,Gt,Zt,pt,Tt]),_.useLayoutEffect(()=>{if(!Ct)return;const Y=`${Ct}:${pt}`;if(ot.current===Y)return;const se=st.current,re=$i;if(!se||!re)return;const ie=ws();if(!ie)return;const ze=se.getBoundingClientRect(),Me=Xn.current.zoom,et=Me/aa,Ke=re.x+Un/2,vt=re.y+$l+Ps/2,ft=ze.left+ze.width/2,lt=ze.top+ze.height/2;co(ft-ie.x-Ke*et,lt-ie.y-vt*et,Me),ot.current=Y},[Ct,pt,$i,ws,co,Xn]);const yn=(D=(k=In==null?void 0:In.width)!=null?k:(S=st.current)==null?void 0:S.clientWidth)!=null?D:0,wn=(le=($=In==null?void 0:In.height)!=null?$:(z=st.current)==null?void 0:z.clientHeight)!=null?le:0,rn=yn>0&&wn>0?By(yn,wn,Xn.current,{innerPaddingPx:Vd}):null,Ft=rn!=null?Ly(rn,Xn.current.zoom):null,hs=Y=>{if(!Ft)return!0;const{fromX:se,fromY:re,toX:ie,toY:ze}=Y;return eS(se,re,ie,ze,Ft,Y.fromFace,Y.toFace)};_.useLayoutEffect(()=>{var et;const Y=st.current;if(!Y||Y.clientWidth<=0||Y.clientHeight<=0)return;const se=Y.clientWidth,re=Y.clientHeight;xo(Ke=>(Ke==null?void 0:Ke.width)===se&&(Ke==null?void 0:Ke.height)===re?Ke:{width:se,height:re});const ie=By(se,re,Xn.current,{innerPaddingPx:Vd});if(!ie){Ds(Ke=>Ke===null?Ke:null);return}const ze=Ly(ie,Xn.current.zoom),Me=nS(Os,ze,hn,ds);for(const Ke of vn){const vt=uo.get(Ke.commit.visualId);if(!vt||((et=Vs.get(vt))!=null?et:1)<=1)continue;(rt.has(vt)||!Ws.has(vt)&&!Fn.has(vt))&&Me.add(Ke.commit.visualId)}Ds(Ke=>Zw(Ke,Me)?Ke:Me)},[vs,pt,Ct,Wt,rt,Fn,Ws,uo,Vs,vn,In,Os,hn,ds]),_.useLayoutEffect(()=>{const Y=st.current;if(!Y)return;const se=()=>{const ie=Y.clientWidth,ze=Y.clientHeight;ie<=0||ze<=0||xo(Me=>(Me==null?void 0:Me.width)===ie&&(Me==null?void 0:Me.height)===ze?Me:{width:ie,height:ze})};se();const re=new ResizeObserver(se);return re.observe(Y),()=>re.disconnect()},[fi.length]);const qt=vn.filter(Y=>eo(Y)).length,Bn=Qt.filter(Y=>hs(Y)).length,Ts=Ci.filter(Y=>hs(Y)).length,xn=_.useCallback((Y,se)=>{if(tn.current){Y.preventDefault(),Y.stopPropagation();return}Y.stopPropagation();const re=se.commit.id;if(Y.shiftKey?(qo(et=>et.includes(re)?et.filter(Ke=>Ke!==re):[...et,re]),ts(re)):(qo(et=>et.includes(re)?[]:[re]),ts(et=>et===re?null:re)),!(Y.metaKey||Y.ctrlKey||Y.detail>=2)||re==="WORKING_TREE")return;const ze=re.length>=40?re.slice(0,7):re;let Me=null;if(se.commit.branchName?(Me=oi(se.commit.branchName,re,ze),Me||(Me=Mi(se.commit.branchName))):Me=wo(re,ze),Me&&ye){ye(Me.path);return}h==null||h({commitSha:re})},[wo,oi,Mi,h,ye]),Kn=_.useCallback((Y,se)=>{var Ke,vt,ft,lt,Jt;if(Y.button!==0)return;const re=Y.target;if(re!=null&&re.closest('[data-selectable-text="true"]')||re!=null&&re.closest("button, a, input, textarea, select"))return;Y.stopPropagation(),Y.preventDefault(),tn.current=!1,Y.currentTarget.setPointerCapture(Y.pointerId);const ie=(Ke=sn[se.commit.visualId])!=null?Ke:sn[se.commit.id];Nt.current={nodeId:se.commit.visualId,startX:Y.clientX,startY:Y.clientY,baseX:(vt=ie==null?void 0:ie.x)!=null?vt:se.x,baseY:(ft=ie==null?void 0:ie.y)!=null?ft:se.y,moved:!1,pendingX:(lt=ie==null?void 0:ie.x)!=null?lt:se.x,pendingY:(Jt=ie==null?void 0:ie.y)!=null?Jt:se.y};const ze=()=>{ln.current=null;const zt=Nt.current;zt&&Sn(nn=>({...nn,[zt.nodeId]:{x:zt.pendingX,y:zt.pendingY}}))},Me=zt=>{const nn=Nt.current;if(!nn)return;const Ln=Xn.current.zoom/aa,$n=Ln>0?1/Ln:1,Eo=(zt.clientX-nn.startX)*$n,Bo=(zt.clientY-nn.startY)*$n;(Math.abs(Eo)>2||Math.abs(Bo)>2)&&(nn.moved=!0),nn.moved&&(tn.current=!0),nn.pendingX=nn.baseX+Eo,nn.pendingY=nn.baseY+Bo,ln.current==null&&(ln.current=window.requestAnimationFrame(ze))},et=()=>{window.removeEventListener("pointermove",Me),window.removeEventListener("pointerup",et),window.removeEventListener("pointercancel",et),ln.current!=null&&(window.cancelAnimationFrame(ln.current),ln.current=null,ze());try{Y.currentTarget.releasePointerCapture(Y.pointerId)}catch{}const zt=Nt.current;Nt.current=null,zt&&window.setTimeout(()=>{tn.current=!1},0)};window.addEventListener("pointermove",Me),window.addEventListener("pointerup",et),window.addEventListener("pointercancel",et)},[sn]),Ei=_.useCallback(async()=>{if(!me)return;await me(xt)&&(tt(!1),wt(""))},[me,xt]),no=_.useCallback(async()=>{G&&(await G({branchNames:[],discardUncommittedChanges:j,stashIndices:hi}),Rt(!1),qo([]),ts(null))},[G,j,hi]),ko=_.useCallback(async()=>{var se;const Y=Kt.trim();if(Y){if(Ht==="new-root"){if(!I)return;await I(Y)}else{if(!we)return;const re=Mn.length===1?Mn[0]:(se=ut==null?void 0:ut.headSha)!=null?se:null;if(!re||!(re==="WORKING_TREE"||re.startsWith("STASH:")||re===(ut==null?void 0:ut.headSha)))return;await we(re,Y)}mt(!1),ht(""),dn("from-selected-node"),qo([]),ts(null)}},[ut==null?void 0:ut.headSha,Ht,Kt,we,I,Mn]),jo=!!(ut!=null&&ut.headSha),Ro=Mn.length===0&&jo,Mo=Mn.length===1&&(Mn[0]==="WORKING_TREE"||Mn[0].startsWith("STASH:"))||Ro,Ko=!!I;return _.useEffect(()=>{if(kt){if(!Mo&&!Ro&&Ko){dn("new-root");return}(Mo||Ro)&&dn("from-selected-node")}},[Ko,Ro,kt,Mo]),_.useEffect(()=>{const Y=B.current;if(!Y)return;const se=640,re=440,ie=()=>{const Me=Y.getBoundingClientRect().width;on(Me<se),Cn(Me<re)};ie();const ze=new ResizeObserver(()=>ie());return ze.observe(Y),()=>ze.disconnect()},[]),_.useEffect(()=>{const Y=se=>{if(!G||Qe||Mn.length===0)return;const re=se.target;re!=null&&re.closest('input, textarea, select, button, [contenteditable="true"]')||se.key!=="Delete"&&se.key!=="Backspace"||(se.preventDefault(),Rt(!0))};return window.addEventListener("keydown",Y),()=>window.removeEventListener("keydown",Y)},[Qe,G,Mn.length]),_.useLayoutEffect(()=>{if(x||bt||fi.length===0||us.current===Mt)return;const Y=window.requestAnimationFrame(()=>{us.current!==Mt&&(us.current=Mt,$t==null||$t(Mt))});return()=>window.cancelAnimationFrame(Y)},[fi.length,x,bt,Mt,$t]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-background",children:[l.jsx(lS,{isOpen:ee,onClose:()=>Ce==null?void 0:Ce(),visibleBounds:Ft,renderedNodeCount:qt,totalNodeCount:vn.length,renderedMergeConnectorCount:Bn,totalMergeConnectorCount:Qt.length,renderedConnectorCount:Ts,totalConnectorCount:Ci.length,mapGridCullViewportInsetScreenPx:Gw,debugRows:ti.debugRows,branchDebugRows:ti.branchDebugRows,connectorDecisions:zi}),He?l.jsxs("header",{"data-tauri-drag-region":!0,onPointerDown:Pt,className:"window-drag-region pointer-events-none absolute inset-x-0 top-0 z-[70] flex w-full select-none",children:[l.jsxs("div",{ref:B,className:"pointer-events-auto ml-auto flex w-full max-w-[calc(100vw-116px)] min-w-0 items-start justify-between gap-3 p-2.25 select-none",children:[l.jsx("div",{className:"flex min-w-0 flex-nowrap items-center justify-start gap-3 overflow-visible",children:l.jsx(iS,{compactLabels:Ao,selectedVisibleCommitShas:Mn,commitInProgress:O,commitDisabled:ae,stageInProgress:pe,stashInProgress:Ge,stashDisabled:oe,pushInProgress:T,hasUncommittedChanges:No,createBranchFromNodeInProgress:ce,onCommitLocalChanges:me,onStageAllChanges:H?()=>void H():void 0,onStashLocalChanges:Re,onPushCurrentBranch:U,onPushAllBranches:A,onPushCommitTargets:L,onMergeRefsIntoBranch:E,selectedPushTargets:Co,selectedPushLabel:Yt,canPushCurrentBranch:Fe,pushCurrentBranchLabel:ct,pushableRemoteBranchCount:Ae,selectedCommitTargetOption:Gs,mergeInProgress:M,mergeTargetCommitSha:zs,setMergeTargetCommitSha:ts,worktrees:W,currentRepoPath:K,worktreeMenuOpen:qe,setWorktreeMenuOpen:nt,onSwitchToWorktree:ye,onRemoveWorktree:de,removeWorktreeInProgress:he,setCommitDialogOpen:tt,setNewBranchDialogOpen:mt,hideMergeControls:!0})}),l.jsx("div",{className:"flex min-w-0 shrink-0 items-center justify-end gap-2",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto flex items-center gap-2",children:[zn?null:l.jsx(dS,{query:He.gridSearchQuery,onQueryChange:He.setGridSearchQuery,resultCount:He.gridSearchResultCount,resultIndex:He.gridSearchResultIndex,onJump:Y=>{He.setGridSearchJumpDirection(Y),He.setGridSearchJumpToken(se=>se+1)}}),l.jsx(uS,{compactLabels:Ao,orientation:He.mapGridOrientation,onOrientationChange:He.setMapGridOrientation})]})})]}),l.jsxs("div",{className:"pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5",children:[l.jsx("button",{onClick:He.onForceDbRefresh,disabled:He.forceDbRefreshLoading,className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:He.forceDbRefreshLoading?"Refreshing DB...":"Force DB Refresh"}),(ve=He.githubAuthStatus)!=null&&ve.ghAvailable&&!He.githubAuthStatus.authenticated?l.jsx("button",{onClick:He.onGitHubAuthSetup,disabled:He.githubAuthLoading,className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:He.githubAuthLoading?"Connecting GitHub...":"Connect GitHub"}):null,He.githubAuthStatus&&!He.githubAuthStatus.ghAvailable?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] font-medium text-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",children:"Install `gh` for private PR data"})]}):null,He.githubAuthMessage?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] text-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",title:He.githubAuthMessage,children:He.githubAuthMessage})]}):null,He.commitSwitchFeedback?l.jsxs("div",{className:`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200 ${He.isCommitSwitchFeedbackVisible?"opacity-100":"opacity-0"} ${He.commitSwitchFeedback.kind==="error"?"border-red-500/25 bg-red-50/95 text-red-600 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-400":"border-blue-500/25 bg-blue-50/95 text-blue-600 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-400"}`,title:He.commitSwitchFeedback.message,children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium opacity-70",children:He.commitSwitchFeedback.kind==="error"?"Alert":"Update"}),l.jsx("p",{className:"truncate text-[11px]",children:He.commitSwitchFeedback.message})]}):null]})]}):null,Pi?l.jsx("div",{className:"pointer-events-none absolute bottom-2.25 left-1/2 z-[80] -translate-x-1/2",children:l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-2.25",children:[l.jsxs("div",{className:"inline-flex h-7 items-center rounded-md border border-border bg-background/95 pl-[2px] pr-[4px] backdrop-blur-sm",children:[l.jsx("span",{className:"px-2 text-[11px] font-medium text-foreground",children:"Merge to..."}),l.jsxs("div",{className:"relative inline-flex h-5 items-center rounded-[2px] bg-muted/30 p-0.5",children:[l.jsx("div",{className:"absolute inset-0.5 overflow-hidden rounded-[1px]",children:l.jsx("div",{className:`h-full rounded-[1px] bg-border ${Hi?"transition-all duration-200 ease-in-out":""}`,style:{width:`var(--${cs}-active-width, 0px)`,transform:`translateX(var(--${cs}-active-offset, 0px))`}})}),Gs.options.map(Y=>{const se=Y.targetBranch===Gs.targetBranch;return l.jsx("button",{type:"button",onClick:()=>{Y.targetSha!==zs&&So(!0),ts(Y.targetSha)},ref:re=>{if(!re)return;const ie=re.parentElement;if(!ie||!se)return;const ze=re.getBoundingClientRect(),Me=ie.getBoundingClientRect();ie.style.setProperty(`--${cs}-active-width`,`${ze.width}px`),ie.style.setProperty(`--${cs}-active-offset`,`${ze.left-Me.left}px`)},className:`relative z-10 h-4.5 px-2 text-[11px] font-medium transition-colors ${se?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:Y.targetBranch},`merge-${Y.targetBranch}`)})]})]}),l.jsxs("button",{type:"button",onClick:()=>void E(Gs.sources,Gs.targetBranch),disabled:Gs.sources.length===0||M,className:"inline-flex h-7 items-center rounded-md border border-border bg-background px-2 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(sb,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),M?"Merging...":"Confirm"]})]})}):null,x||fi.length===0?l.jsx(_S,{}):l.jsx(rS,{scrollContainerRef:st,mapPadHostRef:te,transformLayerRef:Se,isMarqueeSelecting:Go,contentWidth:Si,contentHeight:Vo,isCameraMoving:_s,onWheel:gs,onMouseDown:vo,onNodePointerDown:Kn,labelTopPx:ds,inverseZoomStyle:es,displayZoom:Xs,selectedVisibleCommitShas:Mn,normalizedSearchQuery:Gn,matchingNodeIds:Ss,focusedNode:$i,renderNodes:vn,shouldRenderNode:eo,manuallyOpenedClumps:rt,manuallyClosedClumps:Fn,defaultCollapsedClumps:Ws,leadByClusterKey:Ji,clusterKeyByCommitId:uo,clusterCounts:Vs,commitIdsWithRenderedAncestry:Ls,nodeWarnings:Rs,connectorParentShas:Fs,branchStartShas:Yo,branchOffNodeShas:Zs,crossBranchOutgoingShas:Js,branchBaseCommitByName:fo,branchStartAccentClass:Wo,connectorParentAccentClass:ki,commitCornerRadiusPx:Cs,lineStrokeWidth:ni,pointFormatter:gn,connectors:Ci,mergeConnectors:Qt,cullConnectorPath:hs,flushCameraReactTick:bo,setManuallyOpenedClumps:Dn,setManuallyClosedClumps:yo,onCommitCardClick:xn,unpushedCommitShasSetByBranch:Xo,remoteCommitShas:qn,checkedOutHeadSha:to,orientation:Te}),yt?l.jsx(gS,{}):null,Bs&&Go?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:Bs.left,top:Bs.top,width:Bs.width,height:Bs.height,borderColor:"var(--select)",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(cS,{commitDialogOpen:Ie,commitMessageDraft:xt,onCommitMessageDraftChange:wt,onCommitDialogClose:()=>tt(!1),onCommitConfirm:()=>void Ei(),commitInProgress:O,deleteConfirmOpen:Qe,deleteSelectionItems:fe,onDeleteConfirmClose:()=>Rt(!1),onDeleteConfirm:()=>void no(),deleteInProgress:F,deletableSelectionCount:X,newBranchDialogOpen:kt,newBranchName:Kt,newBranchCreateMode:Ht,onNewBranchNameChange:ht,onNewBranchCreateModeChange:dn,onNewBranchDialogClose:()=>mt(!1),onNewBranchConfirm:()=>void ko(),selectedCommitCanCreateBranch:Mo,currentCheckedOutCommitCanCreateBranch:Ro,createBranchFromNodeInProgress:ce})]})}function yS({branches:e,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y={},branchCommitPreviews:g={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:w="",gridSearchJumpToken:C=0,gridSearchJumpDirection:E=1,gridFocusSha:M=null,onGridSearchResultCountChange:A,onGridSearchResultIndexChange:U,onGridSearchFocusChange:L,view:T="time",isLoading:G=!1,scrollRequest:F,focusedErrorBranch:W,checkedOutRef:K=null,mapTopInsetPx:de=0,onMergeRefsIntoBranch:he,mergeInProgress:ye=!1,onPushAllBranches:Re,onPushCurrentBranch:Ge,onPushCommitTargets:oe,pushInProgress:me=!1,onDeleteSelection:O,worktrees:ae=[],currentRepoPath:H,onRemoveWorktree:pe,removeWorktreeInProgress:we=!1,onSwitchToWorktree:I,onStashLocalChanges:ce,stashInProgress:ee=!1,stashDisabled:Ce=!1,onCommitLocalChanges:Te,commitInProgress:_e=!1,commitDisabled:Oe=!1,onStageAllChanges:Je,stageInProgress:We=!1,onCreateBranchFromNode:pt,onCreateRootBranch:Tt,createBranchFromNodeInProgress:Ct=!1,isMutationBusy:ut=!1,onMoveNodeBackToBranch:Ot,isDebugOpen:_t=!1,onDebugClose:Gt,orientation:en="horizontal",onInteractionChange:J,manuallyOpenedClumps:Be,manuallyClosedClumps:dt,setManuallyOpenedClumps:at,setManuallyClosedClumps:gt,layoutModel:He,gridHudProps:bt,blockMapInteraction:yt=!1,blockMapDisplay:Mt=!1,mapReadyEpoch:$t=0,onMapReadyForDisplay:st}){const B=new Set(u.map(Ve=>Ve.branchName)),te=14*864e5,Se=Date.now();function Ne(Ve){return B.has(Ve.name)||Se-new Date(Ve.lastCommitDate).getTime()<=te}const it=e.filter(Ve=>Ve.status==="stale"&&Ne(Ve)).sort((Ve,De)=>new Date(De.lastCommitDate).getTime()-new Date(Ve.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:T==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(Iy,{branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:C,gridSearchJumpDirection:E,gridFocusSha:M,onGridSearchResultCountChange:A,onGridSearchResultIndexChange:U,onGridSearchFocusChange:L,staleBranches:it,isLoading:G,scrollRequest:F,focusedErrorBranch:W,checkedOutRef:K,mapTopInsetPx:de,onMergeRefsIntoBranch:he,mergeInProgress:ye,onPushAllBranches:Re,onPushCurrentBranch:Ge,onPushCommitTargets:oe,pushInProgress:me,onDeleteSelection:O,worktrees:ae,currentRepoPath:H,onRemoveWorktree:pe,removeWorktreeInProgress:we,onSwitchToWorktree:I,onStashLocalChanges:ce,stashInProgress:ee,stashDisabled:Ce,onCommitLocalChanges:Te,commitInProgress:_e,commitDisabled:Oe,onStageAllChanges:Je,stageInProgress:We,onCreateBranchFromNode:pt,onCreateRootBranch:Tt,createBranchFromNodeInProgress:Ct,isMutationBusy:ut,onMoveNodeBackToBranch:Ot,isDebugOpen:_t,onDebugClose:Gt,orientation:en,onInteractionChange:J,manuallyOpenedClumps:Be,manuallyClosedClumps:dt,setManuallyOpenedClumps:at,setManuallyClosedClumps:gt,layoutModel:He,gridHudProps:bt,blockMapInteraction:yt,blockMapDisplay:Mt,mapReadyEpoch:$t,onMapReadyForDisplay:st})}):T==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(Iy,{branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,isLoading:G,defaultBranch:d,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:C,gridSearchJumpDirection:E,gridFocusSha:M,checkedOutRef:K,onGridSearchResultCountChange:A,onGridSearchResultIndexChange:U,onGridSearchFocusChange:L,onInteractionChange:J,manuallyOpenedClumps:Be,manuallyClosedClumps:dt,setManuallyOpenedClumps:at,setManuallyClosedClumps:gt,layoutModel:He,isDebugOpen:_t,onDebugClose:Gt,orientation:en,gridHudProps:bt,blockMapInteraction:yt,blockMapDisplay:Mt,mapReadyEpoch:$t,onMapReadyForDisplay:st})}):null})}var Il=qx();const Tp=_.createContext({});function eu(e){const n=_.useRef(null);return n.current===null&&(n.current=e()),n.current}const xS=typeof window<"u",Ap=xS?_.useLayoutEffect:_.useEffect,nf=_.createContext(null);function Np(e,n){e.indexOf(n)===-1&&e.push(n)}function Bl(e,n){const i=e.indexOf(n);i>-1&&e.splice(i,1)}const ya=(e,n,i)=>i>n?n:i<e?e:i;let Dp=()=>{};const pr={},ub=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function db(e){return typeof e=="object"&&e!==null}const fb=e=>/^0[^.\s]+$/u.test(e);function hb(e){let n;return()=>(n===void 0&&(n=e()),n)}const Qi=e=>e,bS=(e,n)=>i=>n(e(i)),tu=(...e)=>e.reduce(bS),Ll=(e,n,i)=>{const a=n-e;return a===0?1:(i-e)/a};class Rp{constructor(){this.subscriptions=[]}add(n){return Np(this.subscriptions,n),()=>Bl(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const wi=e=>e*1e3,Ki=e=>e/1e3;function mb(e,n){return n?e*(1e3/n):0}const vS=(e,n,i)=>{const a=n-e;return((i-e)%a+a)%a+e},pb=(e,n,i)=>(((1-3*i+3*n)*e+(3*i-6*n))*e+3*n)*e,wS=1e-7,SS=12;function CS(e,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=pb(d,a,c)-e,u>0?i=d:n=d;while(Math.abs(u)>wS&&++h<SS);return d}function nu(e,n,i,a){if(e===n&&i===a)return Qi;const c=u=>CS(u,0,1,e,i);return u=>u===0||u===1?u:pb(c(u),n,a)}const _b=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,gb=e=>n=>1-e(1-n),yb=nu(.33,1.53,.69,.99),Bp=gb(yb),xb=_b(Bp),bb=e=>e>=1?1:(e*=2)<1?.5*Bp(e):.5*(2-Math.pow(2,-10*(e-1))),Lp=e=>1-Math.sin(Math.acos(e)),vb=gb(Lp),wb=_b(Lp),kS=nu(.42,0,1,1),jS=nu(0,0,.58,1),Sb=nu(.42,0,.58,1),Cb=e=>Array.isArray(e)&&typeof e[0]!="number";function kb(e,n){return Cb(e)?e[vS(0,e.length,n)]:e}const jb=e=>Array.isArray(e)&&typeof e[0]=="number",MS={linear:Qi,easeIn:kS,easeInOut:Sb,easeOut:jS,circIn:Lp,circInOut:wb,circOut:vb,backIn:Bp,backInOut:xb,backOut:yb,anticipate:bb},ES=e=>typeof e=="string",Py=e=>{if(jb(e)){Dp(e.length===4);const[n,i,a,c]=e;return nu(n,i,a,c)}else if(ES(e))return MS[e];return e},ld=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function TS(e,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(g){d.has(g)&&(y.schedule(g),e()),g(h)}const y={schedule:(g,x=!1,b=!1)=>{const C=b&&c?i:a;return x&&d.add(g),C.add(g),g},cancel:g=>{a.delete(g),d.delete(g)},process:g=>{if(h=g,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,y.process(g))}};return y}const AS=40;function Mb(e,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=ld.reduce((L,T)=>(L[T]=TS(u),L),{}),{setup:h,read:p,resolveKeyframes:y,preUpdate:g,update:x,preRender:b,render:w,postRender:C}=d,E=()=>{const L=pr.useManualTiming,T=L?c.timestamp:performance.now();i=!1,L||(c.delta=a?1e3/60:Math.max(Math.min(T-c.timestamp,AS),1)),c.timestamp=T,c.isProcessing=!0,h.process(c),p.process(c),y.process(c),g.process(c),x.process(c),b.process(c),w.process(c),C.process(c),c.isProcessing=!1,i&&n&&(a=!1,e(E))},M=()=>{i=!0,a=!0,c.isProcessing||e(E)};return{schedule:ld.reduce((L,T)=>{const G=d[T];return L[T]=(F,W=!1,K=!1)=>(i||M(),G.schedule(F,W,K)),L},{}),cancel:L=>{for(let T=0;T<ld.length;T++)d[ld[T]].cancel(L)},state:c,steps:d}}const{schedule:rs,cancel:Pa,state:Uo,steps:im}=Mb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Qi,!0);let Rd;function NS(){Rd=void 0}const li={now:()=>(Rd===void 0&&li.set(Uo.isProcessing||pr.useManualTiming?Uo.timestamp:performance.now()),Rd),set:e=>{Rd=e,queueMicrotask(NS)}},Eb=e=>n=>typeof n=="string"&&n.startsWith(e),Tb=Eb("--"),DS=Eb("var(--"),Op=e=>DS(e)?RS.test(e.split("/*")[0].trim()):!1,RS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Hy(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const Pl={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Gc={...Pl,transform:e=>ya(0,1,e)},cd={...Pl,default:1},Uc=e=>Math.round(e*1e5)/1e5,zp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function BS(e){return e==null}const LS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,$p=(e,n)=>i=>!!(typeof i=="string"&&LS.test(i)&&i.startsWith(e)||n&&!BS(i)&&Object.prototype.hasOwnProperty.call(i,n)),Ab=(e,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(zp);return{[e]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},OS=e=>ya(0,255,e),am={...Pl,transform:e=>Math.round(OS(e))},Hr={test:$p("rgb","red"),parse:Ab("red","green","blue"),transform:({red:e,green:n,blue:i,alpha:a=1})=>"rgba("+am.transform(e)+", "+am.transform(n)+", "+am.transform(i)+", "+Uc(Gc.transform(a))+")"};function zS(e){let n="",i="",a="",c="";return e.length>5?(n=e.substring(1,3),i=e.substring(3,5),a=e.substring(5,7),c=e.substring(7,9)):(n=e.substring(1,2),i=e.substring(2,3),a=e.substring(3,4),c=e.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const Ym={test:$p("#"),parse:zS,transform:Hr.transform},su=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),dr=su("deg"),ga=su("%"),Bt=su("px"),$S=su("vh"),IS=su("vw"),Uy={...ga,parse:e=>ga.parse(e)/100,transform:e=>ga.transform(e*100)},Tl={test:$p("hsl","hue"),parse:Ab("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(e)+", "+ga.transform(Uc(n))+", "+ga.transform(Uc(i))+", "+Uc(Gc.transform(a))+")"},lo={test:e=>Hr.test(e)||Ym.test(e)||Tl.test(e),parse:e=>Hr.test(e)?Hr.parse(e):Tl.test(e)?Tl.parse(e):Ym.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Hr.transform(e):Tl.transform(e),getAnimatableNone:e=>{const n=lo.parse(e);return n.alpha=0,lo.transform(n)}},PS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function HS(e){var n,i;return isNaN(e)&&typeof e=="string"&&(((n=e.match(zp))==null?void 0:n.length)||0)+(((i=e.match(PS))==null?void 0:i.length)||0)>0}const Nb="number",Db="color",US="var",VS="var(",Vy="${}",YS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ol(e){const n=e.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(YS,p=>(lo.test(p)?(a.color.push(u),c.push(Db),i.push(lo.parse(p))):p.startsWith(VS)?(a.var.push(u),c.push(US),i.push(p)):(a.number.push(u),c.push(Nb),i.push(parseFloat(p))),++u,Vy)).split(Vy);return{values:i,split:h,indexes:a,types:c}}function WS(e){return Ol(e).values}function Rb({split:e,types:n}){const i=e.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=e[u],a[u]!==void 0){const d=n[u];d===Nb?c+=Uc(a[u]):d===Db?c+=lo.transform(a[u]):c+=a[u]}return c}}function FS(e){return Rb(Ol(e))}const XS=e=>typeof e=="number"?0:lo.test(e)?lo.getAnimatableNone(e):e,GS=(e,n)=>typeof e=="number"?n!=null&&n.trim().endsWith("/")?e:0:XS(e);function qS(e){const n=Ol(e);return Rb(n)(n.values.map((a,c)=>GS(a,n.split[c])))}const ra={test:HS,parse:WS,createTransformer:FS,getAnimatableNone:qS};function rm(e,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(n-e)*6*i:i<1/2?n:i<2/3?e+(n-e)*(2/3-i)*6:e}function KS({hue:e,saturation:n,lightness:i,alpha:a}){e/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=rm(p,h,e+1/3),u=rm(p,h,e),d=rm(p,h,e-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Yd(e,n){return i=>i>0?n:e}const bs=(e,n,i)=>e+(n-e)*i,lm=(e,n,i)=>{const a=e*e,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},QS=[Ym,Hr,Tl],ZS=e=>QS.find(n=>n.test(e));function Yy(e){const n=ZS(e);if(!n)return!1;let i=n.parse(e);return n===Tl&&(i=KS(i)),i}const Wy=(e,n)=>{const i=Yy(e),a=Yy(n);if(!i||!a)return Yd(e,n);const c={...i};return u=>(c.red=lm(i.red,a.red,u),c.green=lm(i.green,a.green,u),c.blue=lm(i.blue,a.blue,u),c.alpha=bs(i.alpha,a.alpha,u),Hr.transform(c))},Wm=new Set(["none","hidden"]);function JS(e,n){return Wm.has(e)?i=>i<=0?e:n:i=>i>=1?n:e}function e4(e,n){return i=>bs(e,n,i)}function Ip(e){return typeof e=="number"?e4:typeof e=="string"?Op(e)?Yd:lo.test(e)?Wy:s4:Array.isArray(e)?Bb:typeof e=="object"?lo.test(e)?Wy:t4:Yd}function Bb(e,n){const i=[...e],a=i.length,c=e.map((u,d)=>Ip(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function t4(e,n){const i={...e,...n},a={};for(const c in i)e[c]!==void 0&&n[c]!==void 0&&(a[c]=Ip(e[c])(e[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function n4(e,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=e.indexes[d][a[d]],p=(c=e.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const s4=(e,n)=>{const i=ra.createTransformer(n),a=Ol(e),c=Ol(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Wm.has(e)&&!c.values.length||Wm.has(n)&&!a.values.length?JS(e,n):tu(Bb(n4(a,c),c.values),i):Yd(e,n)};function Lb(e,n,i){return typeof e=="number"&&typeof n=="number"&&typeof i=="number"?bs(e,n,i):Ip(e)(e,n)}const o4=e=>{const n=({timestamp:i})=>e(i);return{start:(i=!0)=>rs.update(n,i),stop:()=>Pa(n),now:()=>Uo.isProcessing?Uo.timestamp:li.now()}},Ob=(e,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(e(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Wd=2e4;function Pp(e){let n=0;const i=50;let a=e.next(n);for(;!a.done&&n<Wd;)n+=i,a=e.next(n);return n>=Wd?1/0:n}function zb(e,n=100,i){const a=i({...e,keyframes:[0,n]}),c=Math.min(Pp(a),Wd);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Ki(c)}}const Hs={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Fm(e,n){return e*Math.sqrt(1-n*n)}const i4=12;function a4(e,n,i){let a=i;for(let c=1;c<i4;c++)a=a-e(a)/n(a);return a}const cm=.001;function r4({duration:e=Hs.duration,bounce:n=Hs.bounce,velocity:i=Hs.velocity,mass:a=Hs.mass}){let c,u,d=1-n;d=ya(Hs.minDamping,Hs.maxDamping,d),e=ya(Hs.minDuration,Hs.maxDuration,Ki(e)),d<1?(c=y=>{const g=y*d,x=g*e,b=g-i,w=Fm(y,d),C=Math.exp(-x);return cm-b/w*C},u=y=>{const x=y*d*e,b=x*i+i,w=Math.pow(d,2)*Math.pow(y,2)*e,C=Math.exp(-x),E=Fm(Math.pow(y,2),d);return(-c(y)+cm>0?-1:1)*((b-w)*C)/E}):(c=y=>{const g=Math.exp(-y*e),x=(y-i)*e+1;return-cm+g*x},u=y=>{const g=Math.exp(-y*e),x=(i-y)*(e*e);return g*x});const h=5/e,p=a4(c,u,h);if(e=wi(e),isNaN(p))return{stiffness:Hs.stiffness,damping:Hs.damping,duration:e};{const y=Math.pow(p,2)*a;return{stiffness:y,damping:d*2*Math.sqrt(a*y),duration:e}}}const l4=["duration","bounce"],c4=["stiffness","damping","mass"];function Fy(e,n){return n.some(i=>e[i]!==void 0)}function u4(e){let n={velocity:Hs.velocity,stiffness:Hs.stiffness,damping:Hs.damping,mass:Hs.mass,isResolvedFromDuration:!1,...e};if(!Fy(e,c4)&&Fy(e,l4))if(n.velocity=0,e.visualDuration){const i=e.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*ya(.05,1,1-(e.bounce||0))*Math.sqrt(c);n={...n,mass:Hs.mass,stiffness:c,damping:u}}else{const i=r4({...e,velocity:0});n={...n,...i,mass:Hs.mass},n.isResolvedFromDuration=!0}return n}function qc(e=Hs.visualDuration,n=Hs.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:y,mass:g,duration:x,velocity:b,isResolvedFromDuration:w}=u4({...i,velocity:-Ki(i.velocity||0)}),C=b||0,E=y/(2*Math.sqrt(p*g)),M=d-u,A=Ki(Math.sqrt(p/g)),U=Math.abs(M)<5;a||(a=U?Hs.restSpeed.granular:Hs.restSpeed.default),c||(c=U?Hs.restDelta.granular:Hs.restDelta.default);let L,T,G,F,W,K;if(E<1)G=Fm(A,E),F=(C+E*A*M)/G,L=he=>{const ye=Math.exp(-E*A*he);return d-ye*(F*Math.sin(G*he)+M*Math.cos(G*he))},W=E*A*F+M*G,K=E*A*M-F*G,T=he=>Math.exp(-E*A*he)*(W*Math.sin(G*he)+K*Math.cos(G*he));else if(E===1){L=ye=>d-Math.exp(-A*ye)*(M+(C+A*M)*ye);const he=C+A*M;T=ye=>Math.exp(-A*ye)*(A*he*ye-C)}else{const he=A*Math.sqrt(E*E-1);L=oe=>{const me=Math.exp(-E*A*oe),O=Math.min(he*oe,300);return d-me*((C+E*A*M)*Math.sinh(O)+he*M*Math.cosh(O))/he};const ye=(C+E*A*M)/he,Re=E*A*ye-M*he,Ge=E*A*M-ye*he;T=oe=>{const me=Math.exp(-E*A*oe),O=Math.min(he*oe,300);return me*(Re*Math.sinh(O)+Ge*Math.cosh(O))}}const de={calculatedDuration:w&&x||null,velocity:he=>wi(T(he)),next:he=>{if(!w&&E<1){const Re=Math.exp(-E*A*he),Ge=Math.sin(G*he),oe=Math.cos(G*he),me=d-Re*(F*Ge+M*oe),O=wi(Re*(W*Ge+K*oe));return h.done=Math.abs(O)<=a&&Math.abs(d-me)<=c,h.value=h.done?d:me,h}const ye=L(he);if(w)h.done=he>=x;else{const Re=wi(T(he));h.done=Math.abs(Re)<=a&&Math.abs(d-ye)<=c}return h.value=h.done?d:ye,h},toString:()=>{const he=Math.min(Pp(de),Wd),ye=Ob(Re=>de.next(he*Re).value,he,30);return he+"ms "+ye},toTransition:()=>{}};return de}qc.applyToOptions=e=>{const n=zb(e,100,qc);return e.ease=n.ease,e.duration=wi(n.duration),e.type="keyframes",e};const d4=5;function $b(e,n,i){const a=Math.max(n-d4,0);return mb(i-e(a),n-a)}function Xm({keyframes:e,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:y=.5,restSpeed:g}){const x=e[0],b={done:!1,value:x},w=K=>h!==void 0&&K<h||p!==void 0&&K>p,C=K=>h===void 0?p:p===void 0||Math.abs(h-K)<Math.abs(p-K)?h:p;let E=i*n;const M=x+E,A=d===void 0?M:d(M);A!==M&&(E=A-x);const U=K=>-E*Math.exp(-K/a),L=K=>A+U(K),T=K=>{const de=U(K),he=L(K);b.done=Math.abs(de)<=y,b.value=b.done?A:he};let G,F;const W=K=>{w(b.value)&&(G=K,F=qc({keyframes:[b.value,C(b.value)],velocity:$b(L,K,b.value),damping:c,stiffness:u,restDelta:y,restSpeed:g}))};return W(0),{calculatedDuration:null,next:K=>{let de=!1;return!F&&G===void 0&&(de=!0,T(K),W(K)),G!==void 0&&K>=G?F.next(K-G):(!de&&T(K),b)}}}function f4(e,n,i){const a=[],c=i||pr.mix||Lb,u=e.length-1;for(let d=0;d<u;d++){let h=c(e[d],e[d+1]);if(n){const p=Array.isArray(n)?n[d]||Qi:n;h=tu(p,h)}a.push(h)}return a}function Ib(e,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=e.length;if(Dp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=e[0]===e[1];e[0]>e[u-1]&&(e=[...e].reverse(),n=[...n].reverse());const h=f4(n,a,c),p=h.length,y=g=>{if(d&&g<e[0])return n[0];let x=0;if(p>1)for(;x<e.length-2&&!(g<e[x+1]);x++);const b=Ll(e[x],e[x+1],g);return h[x](b)};return i?g=>y(ya(e[0],e[u-1],g)):y}function Pb(e,n){const i=e[e.length-1];for(let a=1;a<=n;a++){const c=Ll(0,n,a);e.push(bs(i,1,c))}}function Hb(e){const n=[0];return Pb(n,e.length-1),n}function h4(e,n){return e.map(i=>i*n)}function m4(e,n){return e.map(()=>n||Sb).splice(0,e.length-1)}function Vc({duration:e=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=Cb(a)?a.map(Py):Py(a),u={done:!1,value:n[0]},d=h4(i&&i.length===n.length?i:Hb(n),e),h=Ib(d,n,{ease:Array.isArray(c)?c:m4(n,c)});return{calculatedDuration:e,next:p=>(u.value=h(p),u.done=p>=e,u)}}const p4=e=>e!==null;function sf(e,{repeat:n,repeatType:i="loop"},a,c=1){const u=e.filter(p4),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const _4={decay:Xm,inertia:Xm,tween:Vc,keyframes:Vc,spring:qc};function Ub(e){typeof e.type=="string"&&(e.type=_4[e.type])}class Hp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const g4=e=>e/100;class Fd extends Hp{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==li.now()&&this.tick(li.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Ub(n);const{type:i=Vc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||Vc;p!==Vc&&typeof h[0]!="number"&&(this.mixKeyframes=tu(g4,Lb(h[0],h[1])),h=[0,100]);const y=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),y.calculatedDuration===null&&(y.calculatedDuration=Pp(y));const{calculatedDuration:g}=y;this.calculatedDuration=g,this.resolvedDuration=g+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=y}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:y=0,keyframes:g,repeat:x,repeatType:b,repeatDelay:w,type:C,onUpdate:E,finalKeyframe:M}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const A=this.currentTime-y*(this.playbackSpeed>=0?1:-1),U=this.playbackSpeed>=0?A<0:A>c;this.currentTime=Math.max(A,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let L=this.currentTime,T=a;if(x){const K=Math.min(this.currentTime,c)/h;let de=Math.floor(K),he=K%1;!he&&K>=1&&(he=1),he===1&&de--,de=Math.min(de,x+1),!!(de%2)&&(b==="reverse"?(he=1-he,w&&(he-=w/h)):b==="mirror"&&(T=d)),L=ya(0,1,he)*h}let G;U?(this.delayState.value=g[0],G=this.delayState):G=T.next(L),u&&!U&&(G.value=u(G.value));let{done:F}=G;!U&&p!==null&&(F=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const W=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return W&&C!==Xm&&(G.value=sf(g,this.options,M,this.speed)),E&&E(G.value),W&&this.finish(),G}then(n,i){return this.finished.then(n,i)}get duration(){return Ki(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Ki(n)}get time(){return Ki(this.currentTime)}set time(n){n=wi(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return $b(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(li.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Ki(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=o4,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(li.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function y4(e){var n;for(let i=1;i<e.length;i++)(n=e[i])!=null||(e[i]=e[i-1])}const Ur=e=>e*180/Math.PI,Gm=e=>{const n=Ur(Math.atan2(e[1],e[0]));return qm(n)},x4={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Gm,rotateZ:Gm,skewX:e=>Ur(Math.atan(e[1])),skewY:e=>Ur(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},qm=e=>(e=e%360,e<0&&(e+=360),e),Xy=Gm,Gy=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),qy=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),b4={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Gy,scaleY:qy,scale:e=>(Gy(e)+qy(e))/2,rotateX:e=>qm(Ur(Math.atan2(e[6],e[5]))),rotateY:e=>qm(Ur(Math.atan2(-e[2],e[0]))),rotateZ:Xy,rotate:Xy,skewX:e=>Ur(Math.atan(e[4])),skewY:e=>Ur(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Km(e){return e.includes("scale")?1:0}function Qm(e,n){if(!e||e==="none")return Km(n);const i=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=b4,c=i;else{const h=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=x4,c=h}if(!c)return Km(n);const u=a[n],d=c[1].split(",").map(w4);return typeof u=="function"?u(d):d[u]}const v4=(e,n)=>{const{transform:i="none"}=getComputedStyle(e);return Qm(i,n)};function w4(e){return parseFloat(e.trim())}const Hl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ul=new Set(Hl),Ky=e=>e===Pl||e===Bt,S4=new Set(["x","y","z"]),C4=Hl.filter(e=>!S4.has(e));function k4(e){const n=[];return C4.forEach(i=>{const a=e.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const mr={width:({x:e},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=e.max-e.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:e},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=e.max-e.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:(e,{transform:n})=>Qm(n,"x"),y:(e,{transform:n})=>Qm(n,"y")};mr.translateX=mr.x;mr.translateY=mr.y;const Vr=new Set;let Zm=!1,Jm=!1,ep=!1;function Vb(){if(Jm){const e=Array.from(Vr).filter(a=>a.needsMeasurement),n=new Set(e.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=k4(a);c.length&&(i.set(a,c),a.render())}),e.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Jm=!1,Zm=!1,Vr.forEach(e=>e.complete(ep)),Vr.clear()}function Yb(){Vr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Jm=!0)})}function j4(){ep=!0,Yb(),Vb(),ep=!1}class Up{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Vr.add(this),Zm||(Zm=!0,rs.read(Yb),rs.resolveKeyframes(Vb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}y4(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Vr.delete(this)}cancel(){this.state==="scheduled"&&(Vr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const M4=e=>e.startsWith("--");function Wb(e,n,i){M4(n)?e.style.setProperty(n,i):e.style[n]=i}const E4={};function Fb(e,n){const i=hb(e);return()=>{var a;return(a=E4[n])!=null?a:i()}}const T4=Fb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Xb=Fb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),$c=([e,n,i,a])=>`cubic-bezier(${e}, ${n}, ${i}, ${a})`,Qy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:$c([0,.65,.55,1]),circOut:$c([.55,0,1,.45]),backIn:$c([.31,.01,.66,-.59]),backOut:$c([.33,1.53,.69,.99])};function Gb(e,n){if(e)return typeof e=="function"?Xb()?Ob(e,n):"ease-out":jb(e)?$c(e):Array.isArray(e)?e.map(i=>Gb(i,n)||Qy.easeOut):Qy[e]}function A4(e,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},y=void 0){const g={[n]:i};p&&(g.offset=p);const x=Gb(h,c);Array.isArray(x)&&(g.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return y&&(b.pseudoElement=y),e.animate(g,b)}function Vp(e){return typeof e=="function"&&"applyToOptions"in e}function N4({type:e,...n}){var i,a;return Vp(e)&&Xb()?e.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class qb extends Hp{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,Dp(typeof n.type!="string");const y=N4(n);this.animation=A4(i,a,c,y,u),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=sf(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(g),Wb(i,a,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Ki(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Ki(n)}get time(){return Ki(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=wi(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&T4()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),Qi):c(this)}}const Kb={anticipate:bb,backInOut:xb,circInOut:wb};function D4(e){return e in Kb}function R4(e){typeof e.ease=="string"&&D4(e.ease)&&(e.ease=Kb[e.ease])}const um=10;class B4 extends qb{constructor(n){R4(n),Ub(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Fd({...d,autoplay:!1}),p=Math.max(um,li.now()-this.startTime),y=ya(0,um,p-um),g=h.sample(p).value,{name:x}=this.options;u&&x&&Wb(u,x,g),i.setWithVelocity(h.sample(Math.max(0,p-y)).value,g,y),h.stop()}}const Zy=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ra.test(e)||e==="0")&&!e.startsWith("url("));function L4(e){const n=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}function O4(e,n,i,a){const c=e[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=e[e.length-1],d=Zy(c,n),h=Zy(u,n);return!d||!h?!1:L4(e)||(i==="spring"||Vp(i))&&a}function tp(e){e.duration=0,e.type="keyframes"}const Qb=new Set(["opacity","clipPath","filter","transform"]),z4=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function $4(e){for(let n=0;n<e.length;n++)if(typeof e[n]=="string"&&z4.test(e[n]))return!0;return!1}const I4=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),P4=hb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function H4(e){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=e;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:g}=n.owner.getProps();return P4()&&i&&(Qb.has(i)||I4.has(i)&&$4(h))&&(i!=="transform"||!g)&&!y&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const U4=40;class V4 extends Hp{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:y,element:g,...x}){var C;super(),this.stop=()=>{var E,M;this._animation&&(this._animation.stop(),(E=this.stopTimeline)==null||E.call(this)),(M=this.keyframeResolver)==null||M.cancel()},this.createdAt=li.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:y,element:g,...x},w=(g==null?void 0:g.KeyframeResolver)||Up;this.keyframeResolver=new w(h,(E,M,A)=>this.onKeyframesResolved(E,M,b,!A),p,y,g),(C=this.keyframeResolver)==null||C.scheduleResolve()}onKeyframesResolved(n,i,a,c){var A,U;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:y,onUpdate:g}=a;this.resolvedAt=li.now();let x=!0;O4(n,u,d,h)||(x=!1,(pr.instantAnimations||!p)&&(g==null||g(sf(n,a,i))),n[0]=n[n.length-1],tp(a),a.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>U4?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},C=x&&!y&&H4(w),E=(U=(A=w.motionValue)==null?void 0:A.owner)==null?void 0:U.current;let M;if(C)try{M=new B4({...w,element:E})}catch{M=new Fd(w)}else M=new Fd(w);M.finished.then(()=>{this.notifyFinished()}).catch(Qi),this.pendingTimeline&&(this.stopTimeline=M.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=M}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),j4()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class Y4{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return Jy(this.animations,"duration")}get iterationDuration(){return Jy(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Jy(e,n){let i=0;for(let a=0;a<e.length;a++){const c=e[a][n];c!==null&&c>i&&(i=c)}return i}class W4 extends Y4{then(n,i){return this.finished.finally(n).then(()=>{})}}function Zb(e,n,i,a=0,c=1){const u=Array.from(e).sort((y,g)=>y.sortNodePosition(g)).indexOf(n),d=e.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const F4=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function X4(e){const n=F4.exec(e);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function Jb(e,n,i=1){const[a,c]=X4(e);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return ub(d)?parseFloat(d):d}return Op(c)?Jb(c,n,i+1):c}const G4={type:"spring",stiffness:500,damping:25,restSpeed:10},q4=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),K4={type:"keyframes",duration:.8},Q4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Z4=(e,{keyframes:n})=>n.length>2?K4:Ul.has(e)?e.startsWith("scale")?q4(n[1]):G4:Q4;function e5(e,n){if(e!=null&&e.inherit&&n){const{inherit:i,...a}=e;return{...n,...a}}return e}function Yp(e,n){var a,c;const i=(c=(a=e==null?void 0:e[n])!=null?a:e==null?void 0:e.default)!=null?c:e;return i!==e?e5(i,e):i}const J4=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function eC(e){for(const n in e)if(!J4.has(n))return!0;return!1}const Wp=(e,n,i,a={},c,u)=>d=>{const h=Yp(a,e)||{},p=h.delay||a.delay||0;let{elapsed:y=0}=a;y=y-wi(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-y,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:e,motionValue:n,element:u?void 0:c};eC(h)||Object.assign(g,Z4(e,g)),g.duration&&(g.duration=wi(g.duration)),g.repeatDelay&&(g.repeatDelay=wi(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let x=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(tp(g),g.delay===0&&(x=!0)),(pr.instantAnimations||pr.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,tp(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=sf(g.keyframes,h);if(b!==void 0){rs.update(()=>{g.onUpdate(b),g.onComplete()});return}}return h.isSync?new Fd(g):new V4(g)};function e1(e){const n=[{},{}];return e==null||e.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Fp(e,n,i,a){if(typeof n=="function"){const[c,u]=e1(a);n=n(i!==void 0?i:e.custom,c,u)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[c,u]=e1(a);n=n(i!==void 0?i:e.custom,c,u)}return n}function Yr(e,n,i){const a=e.getProps();return Fp(a,n,i!==void 0?i:a.custom,e)}const t5=new Set(["width","height","top","left","right","bottom",...Hl]),t1=30,tC=e=>!isNaN(parseFloat(e)),Yc={current:void 0};class nC{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=li.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=li.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=tC(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new Rp);const a=this.events[n].add(i);return n==="change"?()=>{a(),rs.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Yc.current&&Yc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=li.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>t1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,t1);return mb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function _r(e,n){return new nC(e,n)}const np=e=>Array.isArray(e);function sC(e,n,i){e.hasValue(n)?e.getValue(n).set(i):e.addValue(n,_r(i))}function oC(e){return np(e)?e[e.length-1]||0:e}function iC(e,n){const i=Yr(e,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=oC(u[d]);sC(e,d,h)}}const go=e=>!!(e&&e.getVelocity);function aC(e){return!!(go(e)&&e.add)}function sp(e,n){const i=e.getValue("willChange");if(aC(i))return i.add(n);if(!i&&pr.WillChange){const a=new pr.WillChange("auto");e.addValue("willChange",a),a.add(n)}}function Xp(e){return e.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const rC="framerAppearId",n5="data-"+Xp(rC);function s5(e){return e.props[n5]}function lC({protectedKeys:e,needsAnimating:n},i){const a=e.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Gp(e,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=e.getDefaultTransition();u=u?e5(u,p):p;const y=u==null?void 0:u.reduceMotion;a&&(u=a);const g=[],x=c&&e.animationState&&e.animationState.getState()[c];for(const w in h){const C=e.getValue(w,(b=e.latestValues[w])!=null?b:null),E=h[w];if(E===void 0||x&&lC(x,w))continue;const M={delay:i,...Yp(u||{},w)},A=C.get();if(A!==void 0&&!C.isAnimating()&&!Array.isArray(E)&&E===A&&!M.velocity){rs.update(()=>C.set(E));continue}let U=!1;if(window.MotionHandoffAnimation){const G=s5(e);if(G){const F=window.MotionHandoffAnimation(G,w,rs);F!==null&&(M.startTime=F,U=!0)}}sp(e,w);const L=y!=null?y:e.shouldReduceMotion;C.start(Wp(w,C,E,L&&t5.has(w)?{type:!1}:M,e,U));const T=C.animation;T&&g.push(T)}if(d){const w=()=>rs.update(()=>{d&&iC(e,d)});g.length?Promise.all(g).then(w):w()}return g}function op(e,n,i={}){var p;const a=Yr(e,n,i.type==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=e.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Gp(e,a,i)):()=>Promise.resolve(),d=e.variantChildren&&e.variantChildren.size?(y=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:b}=c;return cC(e,n,y,g,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[y,g]=h==="beforeChildren"?[u,d]:[d,u];return y().then(()=>g())}else return Promise.all([u(),d(i.delay)])}function cC(e,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of e.variantChildren)p.notify("AnimationStart",n),h.push(op(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Zb(e.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function uC(e,n,i={}){e.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>op(e,u,i));a=Promise.all(c)}else if(typeof n=="string")a=op(e,n,i);else{const c=typeof n=="function"?Yr(e,n,i.custom):n;a=Promise.all(Gp(e,c,i))}return a.then(()=>{e.notify("AnimationComplete",n)})}const dC={test:e=>e==="auto",parse:e=>e},o5=e=>n=>n.test(e),i5=[Pl,Bt,ga,dr,IS,$S,dC],n1=e=>i5.find(o5(e));function fC(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||fb(e):!0}const hC=new Set(["brightness","contrast","saturate","opacity"]);function mC(e){const[n,i]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[a]=i.match(zp)||[];if(!a)return e;const c=i.replace(a,"");let u=hC.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const pC=/\b([a-z-]*)\(.*?\)/gu,ip={...ra,getAnimatableNone:e=>{const n=e.match(pC);return n?n.map(mC).join(" "):e}},ap={...ra,getAnimatableNone:e=>{const n=ra.parse(e);return ra.createTransformer(e)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},s1={...Pl,transform:Math.round},_C={rotate:dr,rotateX:dr,rotateY:dr,rotateZ:dr,scale:cd,scaleX:cd,scaleY:cd,scaleZ:cd,skew:dr,skewX:dr,skewY:dr,distance:Bt,translateX:Bt,translateY:Bt,translateZ:Bt,x:Bt,y:Bt,z:Bt,perspective:Bt,transformPerspective:Bt,opacity:Gc,originX:Uy,originY:Uy,originZ:Bt},qp={borderWidth:Bt,borderTopWidth:Bt,borderRightWidth:Bt,borderBottomWidth:Bt,borderLeftWidth:Bt,borderRadius:Bt,borderTopLeftRadius:Bt,borderTopRightRadius:Bt,borderBottomRightRadius:Bt,borderBottomLeftRadius:Bt,width:Bt,maxWidth:Bt,height:Bt,maxHeight:Bt,top:Bt,right:Bt,bottom:Bt,left:Bt,inset:Bt,insetBlock:Bt,insetBlockStart:Bt,insetBlockEnd:Bt,insetInline:Bt,insetInlineStart:Bt,insetInlineEnd:Bt,padding:Bt,paddingTop:Bt,paddingRight:Bt,paddingBottom:Bt,paddingLeft:Bt,paddingBlock:Bt,paddingBlockStart:Bt,paddingBlockEnd:Bt,paddingInline:Bt,paddingInlineStart:Bt,paddingInlineEnd:Bt,margin:Bt,marginTop:Bt,marginRight:Bt,marginBottom:Bt,marginLeft:Bt,marginBlock:Bt,marginBlockStart:Bt,marginBlockEnd:Bt,marginInline:Bt,marginInlineStart:Bt,marginInlineEnd:Bt,fontSize:Bt,backgroundPositionX:Bt,backgroundPositionY:Bt,..._C,zIndex:s1,fillOpacity:Gc,strokeOpacity:Gc,numOctaves:s1},gC={...qp,color:lo,backgroundColor:lo,outlineColor:lo,fill:lo,stroke:lo,borderColor:lo,borderTopColor:lo,borderRightColor:lo,borderBottomColor:lo,borderLeftColor:lo,filter:ip,WebkitFilter:ip,mask:ap,WebkitMask:ap},a5=e=>gC[e],yC=new Set([ip,ap]);function r5(e,n){let i=a5(e);return yC.has(i)||(i=ra),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const xC=new Set(["auto","none","0"]);function bC(e,n,i){let a=0,c;for(;a<e.length&&!c;){const u=e[a];typeof u=="string"&&!xC.has(u)&&Ol(u).values.length&&(c=e[a]),a++}if(c&&i)for(const u of n)e[u]=r5(i,c)}class vC extends Up{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let g=0;g<n.length;g++){let x=n[g];if(typeof x=="string"&&(x=x.trim(),Op(x))){const b=Jb(x,i.current);b!==void 0&&(n[g]=b),g===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!t5.has(a)||n.length!==2)return;const[c,u]=n,d=n1(c),h=n1(u),p=Hy(c),y=Hy(u);if(p!==y&&mr[a]){this.needsMeasurement=!0;return}if(d!==h)if(Ky(d)&&Ky(h))for(let g=0;g<n.length;g++){const x=n[g];typeof x=="string"&&(n[g]=parseFloat(x))}else mr[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||fC(n[c]))&&a.push(c);a.length&&bC(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=mr[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=mr[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,y])=>{n.getValue(p).set(y)}),this.resolveNoneKeyframes()}}function Kp(e,n,i){var a;if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[e])!=null?a:c.querySelectorAll(e);return u?Array.from(u):[]}return Array.from(e).filter(c=>c!=null)}const l5=(e,n)=>n&&typeof e=="number"?n.transform(e):e;function Bd(e){return db(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:Qp}=Mb(queueMicrotask,!1),oa={x:!1,y:!1};function c5(){return oa.x||oa.y}function wC(e){return e==="x"||e==="y"?oa[e]?null:(oa[e]=!0,()=>{oa[e]=!1}):oa.x||oa.y?null:(oa.x=oa.y=!0,()=>{oa.x=oa.y=!1})}function u5(e,n){const i=Kp(e),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function SC(e){return!(e.pointerType==="touch"||c5())}function CC(e,n,i={}){const[a,c,u]=u5(e,i);return a.forEach(d=>{let h=!1,p=!1,y;const g=()=>{d.removeEventListener("pointerleave",C)},x=M=>{y&&(y(M),y=void 0),g()},b=M=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(M))},w=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},C=M=>{if(M.pointerType!=="touch"){if(h){p=!0;return}x(M)}},E=M=>{if(!SC(M))return;p=!1;const A=n(d,M);typeof A=="function"&&(y=A,d.addEventListener("pointerleave",C,c))};d.addEventListener("pointerenter",E,c),d.addEventListener("pointerdown",w,c)}),u}const d5=(e,n)=>n?e===n?!0:d5(e,n.parentElement):!1,Zp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,kC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function jC(e){return kC.has(e.tagName)||e.isContentEditable===!0}const MC=new Set(["INPUT","SELECT","TEXTAREA"]);function EC(e){return MC.has(e.tagName)||e.isContentEditable===!0}const Ld=new WeakSet;function o1(e){return n=>{n.key==="Enter"&&e(n)}}function dm(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const TC=(e,n)=>{const i=e.currentTarget;if(!i)return;const a=o1(()=>{if(Ld.has(i))return;dm(i,"down");const c=o1(()=>{dm(i,"up")}),u=()=>dm(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function i1(e){return Zp(e)&&!c5()}const a1=new WeakSet;function AC(e,n,i={}){const[a,c,u]=u5(e,i),d=h=>{const p=h.currentTarget;if(!i1(h)||a1.has(h))return;Ld.add(p),i.stopPropagation&&a1.add(h);const y=n(p,h),g=(w,C)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),Ld.has(p)&&Ld.delete(p),i1(w)&&typeof y=="function"&&y(w,{success:C})},x=w=>{g(w,p===window||p===document||i.useGlobalTarget||d5(p,w.target))},b=w=>{g(w,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),Bd(h)&&(h.addEventListener("focus",y=>TC(y,c)),!jC(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function of(e){return db(e)&&"ownerSVGElement"in e}const Od=new WeakMap;let fr;const f5=(e,n,i)=>(a,c)=>c&&c[0]?c[0][e+"Size"]:of(a)&&"getBBox"in a?a.getBBox()[n]:a[i],NC=f5("inline","width","offsetWidth"),DC=f5("block","height","offsetHeight");function RC({target:e,borderBoxSize:n}){var i;(i=Od.get(e))==null||i.forEach(a=>{a(e,{get width(){return NC(e,n)},get height(){return DC(e,n)}})})}function BC(e){e.forEach(RC)}function LC(){typeof ResizeObserver>"u"||(fr=new ResizeObserver(BC))}function OC(e,n){fr||LC();const i=Kp(e);return i.forEach(a=>{let c=Od.get(a);c||(c=new Set,Od.set(a,c)),c.add(n),fr==null||fr.observe(a)}),()=>{i.forEach(a=>{const c=Od.get(a);c==null||c.delete(n),c!=null&&c.size||fr==null||fr.unobserve(a)})}}const zd=new Set;let Al;function zC(){Al=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};zd.forEach(n=>n(e))},window.addEventListener("resize",Al)}function $C(e){return zd.add(e),Al||zC(),()=>{zd.delete(e),!zd.size&&typeof Al=="function"&&(window.removeEventListener("resize",Al),Al=void 0)}}function r1(e,n){return typeof e=="function"?$C(e):OC(e,n)}function h5(e){return of(e)&&e.tagName==="svg"}function IC(...e){const n=!Array.isArray(e[0]),i=n?0:-1,a=e[0+i],c=e[1+i],u=e[2+i],d=e[3+i],h=Ib(c,u,d);return n?h(a):h}const PC=[...i5,lo,ra],HC=e=>PC.find(o5(e)),l1=()=>({translate:0,scale:1,origin:0,originPoint:0}),Nl=()=>({x:l1(),y:l1()}),c1=()=>({min:0,max:0}),ro=()=>({x:c1(),y:c1()}),Kc=new WeakMap;function af(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Qc(e){return typeof e=="string"||Array.isArray(e)}const Jp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],e_=["initial",...Jp];function rf(e){return af(e.animate)||e_.some(n=>Qc(e[n]))}function m5(e){return!!(rf(e)||e.variants)}function UC(e,n,i){for(const a in n){const c=n[a],u=i[a];if(go(c))e.addValue(a,c);else if(go(u))e.addValue(a,_r(c,{owner:e}));else if(u!==c)if(e.hasValue(a)){const d=e.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=e.getStaticValue(a);e.addValue(a,_r(d!==void 0?d:c,{owner:e}))}}for(const a in i)n[a]===void 0&&e.removeValue(a);return n}const rp={current:null},p5={current:!1},VC=typeof window<"u";function YC(){if(p5.current=!0,!!VC)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>rp.current=e.matches;e.addEventListener("change",n),n()}else rp.current=!1}const u1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Xd={};function _5(e){Xd=e}function WC(){return Xd}class g5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Up,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=li.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,rs.render(this.render,!1,!0))};const{latestValues:y,renderState:g}=h;this.latestValues=y,this.baseTarget={...y},this.initialValues=i.initial?{...y}:{},this.renderState=g,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=rf(i),this.isVariantNode=m5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in b){const C=b[w];y[w]!==void 0&&go(C)&&C.set(y[w])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Kc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(p5.current||YC(),this.shouldReduceMotion=rp.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),Pa(this.notifyUpdate),Pa(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Qb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:y,duration:g}=i.accelerate,x=new qb({element:this.current,name:n,keyframes:h,times:p,ease:y,duration:wi(g)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=Ul.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&rs.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Xd){const i=Xd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ro()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<u1.length;a++){const c=u1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=UC(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=_r(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(ub(a)||fb(a))?a=parseFloat(a):!HC(a)&&ra.test(i)&&(a=r5(n,i)),this.setBaseTarget(n,go(a)?a.get():a)),go(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Fp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!go(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new Rp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Qp.render(this.render)}}class y5 extends g5{constructor(){super(...arguments),this.KeyframeResolver=vC}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;go(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class gr{constructor(n){this.isMounted=!1,this.node=n}update(){}}function x5({top:e,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:e,max:a}}}function FC({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function XC(e,n){if(!n)return e;const i=n({x:e.left,y:e.top}),a=n({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function fm(e){return e===void 0||e===1}function lp({scale:e,scaleX:n,scaleY:i}){return!fm(e)||!fm(n)||!fm(i)}function $r(e){return lp(e)||b5(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function b5(e){return d1(e.x)||d1(e.y)}function d1(e){return e&&e!=="0%"}function Gd(e,n,i){const a=e-i,c=n*a;return i+c}function f1(e,n,i,a,c){return c!==void 0&&(e=Gd(e,c,a)),Gd(e,i,a)+n}function cp(e,n=0,i=1,a,c){e.min=f1(e.min,n,i,a,c),e.max=f1(e.max,n,i,a,c)}function v5(e,{x:n,y:i}){cp(e.x,n.translate,n.scale,n.originPoint),cp(e.y,i.translate,i.scale,i.originPoint)}const h1=.999999999999,m1=1.0000000000001;function GC(e,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:y}=u.options;y&&y.props.style&&y.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(_a(e.x,-u.scroll.offset.x),_a(e.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,v5(e,d)),a&&$r(u.latestValues)&&$d(e,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<m1&&n.x>h1&&(n.x=1),n.y<m1&&n.y>h1&&(n.y=1)}function _a(e,n){e.min+=n,e.max+=n}function p1(e,n,i,a,c=.5){const u=bs(e.min,e.max,c);cp(e,n,i,u,a)}function _1(e,n){return typeof e=="string"?parseFloat(e)/100*(n.max-n.min):e}function $d(e,n,i){const a=i!=null?i:e;p1(e.x,_1(n.x,a.x),n.scaleX,n.scale,n.originX),p1(e.y,_1(n.y,a.y),n.scaleY,n.scale,n.originY)}function w5(e,n){return x5(XC(e.getBoundingClientRect(),n))}function qC(e,n,i){const a=w5(e,i),{scroll:c}=n;return c&&(_a(a.x,c.offset.x),_a(a.y,c.offset.y)),a}const KC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},QC=Hl.length;function ZC(e,n,i){let a="",c=!0;for(let u=0;u<QC;u++){const d=Hl[u],h=e[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const y=parseFloat(h);p=d.startsWith("scale")?y===1:y===0}if(!p||i){const y=l5(h,qp[d]);if(!p){c=!1;const g=KC[d]||d;a+=`${g}(${y}) `}i&&(n[d]=y)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function t_(e,n,i){const{style:a,vars:c,transformOrigin:u}=e;let d=!1,h=!1;for(const p in n){const y=n[p];if(Ul.has(p)){d=!0;continue}else if(Tb(p)){c[p]=y;continue}else{const g=l5(y,qp[p]);p.startsWith("origin")?(h=!0,u[p]=g):a[p]=g}}if(n.transform||(d||i?a.transform=ZC(n,e.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:y="50%",originZ:g=0}=u;a.transformOrigin=`${p} ${y} ${g}`}}function S5(e,{style:n,vars:i},a,c){const u=e.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function g1(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const Ec={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(Bt.test(e))e=parseFloat(e);else return e;const i=g1(e,n.target.x),a=g1(e,n.target.y);return`${i}% ${a}%`}},JC={correct:(e,{treeScale:n,projectionDelta:i})=>{const a=e,c=ra.parse(e);if(c.length>5)return a;const u=ra.createTransformer(e),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const y=bs(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),u(c)}},up={borderRadius:{...Ec,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ec,borderTopRightRadius:Ec,borderBottomLeftRadius:Ec,borderBottomRightRadius:Ec,boxShadow:JC};function C5(e,{layout:n,layoutId:i}){return Ul.has(e)||e.startsWith("origin")||(n||i!==void 0)&&(!!up[e]||e==="opacity")}function n_(e,n,i){var d;const a=e.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(go(a[h])||c&&go(c[h])||C5(h,e)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function e6(e){return window.getComputedStyle(e)}class k5 extends y5{constructor(){super(...arguments),this.type="html",this.renderInstance=S5}readValueFromInstance(n,i){var a;if(Ul.has(i))return(a=this.projection)!=null&&a.isProjecting?Km(i):v4(n,i);{const c=e6(n),u=(Tb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return w5(n,i)}build(n,i,a){t_(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return n_(n,i,a)}}function t6(e,n){return e in n}class n6 extends g5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(t6(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return ro()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const s6={offset:"stroke-dashoffset",array:"stroke-dasharray"},o6={offset:"strokeDashoffset",array:"strokeDasharray"};function i6(e,n,i=1,a=0,c=!0){e.pathLength=1;const u=c?s6:o6;e[u.offset]=`${-a}`,e[u.array]=`${n} ${i}`}const a6=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function j5(e,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,y,g){var w,C;if(t_(e,h,y),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:x,style:b}=e;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(w=x.transformOrigin)!=null?w:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(C=g==null?void 0:g.transformBox)!=null?C:"fill-box",delete x.transformBox);for(const E of a6)x[E]!==void 0&&(b[E]=x[E],delete x[E]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&i6(x,c,u,d,!1)}const M5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),E5=e=>typeof e=="string"&&e.toLowerCase()==="svg";function r6(e,n,i,a){S5(e,n,void 0,a);for(const c in n.attrs)e.setAttribute(M5.has(c)?c:Xp(c),n.attrs[c])}function T5(e,n,i){const a=n_(e,n,i);for(const c in e)if(go(e[c])||go(n[c])){const u=Hl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=e[c]}return a}class A5 extends y5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ro}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(Ul.has(i)){const a=a5(i);return a&&a.default||0}return i=M5.has(i)?i:Xp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return T5(n,i,a)}build(n,i,a){j5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){r6(n,i,a,c)}mount(n){this.isSVGTag=E5(n.tagName),super.mount(n)}}const l6=e_.length;function N5(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?N5(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const n={};for(let i=0;i<l6;i++){const a=e_[i],c=e.props[a];(Qc(c)||c===!1)&&(n[a]=c)}return n}function D5(e,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==e.length)return!1;for(let a=0;a<i;a++)if(n[a]!==e[a])return!1;return!0}const c6=[...Jp].reverse(),u6=Jp.length;function d6(e){return n=>Promise.all(n.map(({animation:i,options:a})=>uC(e,i,a)))}function f6(e){let n=d6(e),i=y1(),a=!0,c=!1;const u=y=>(g,x)=>{var w;const b=Yr(e,x,y==="exit"?(w=e.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:C,transitionEnd:E,...M}=b;g={...g,...M,...E}}return g};function d(y){n=y(e)}function h(y){const{props:g}=e,x=N5(e.parent)||{},b=[],w=new Set;let C={},E=1/0;for(let A=0;A<u6;A++){const U=c6[A],L=i[U],T=g[U]!==void 0?g[U]:x[U],G=Qc(T),F=U===y?L.isActive:null;F===!1&&(E=A);let W=T===x[U]&&T!==g[U]&&G;if(W&&(a||c)&&e.manuallyAnimateOnMount&&(W=!1),L.protectedKeys={...C},!L.isActive&&F===null||!T&&!L.prevProp||af(T)||typeof T=="boolean")continue;if(U==="exit"&&L.isActive&&F!==!0){L.prevResolvedValues&&(C={...C,...L.prevResolvedValues});continue}const K=h6(L.prevProp,T);let de=K||U===y&&L.isActive&&!W&&G||A>E&&G,he=!1;const ye=Array.isArray(T)?T:[T];let Re=ye.reduce(u(U),{});F===!1&&(Re={});const{prevResolvedValues:Ge={}}=L,oe={...Ge,...Re},me=H=>{de=!0,w.has(H)&&(he=!0,w.delete(H)),L.needsAnimating[H]=!0;const pe=e.getValue(H);pe&&(pe.liveStyle=!1)};for(const H in oe){const pe=Re[H],we=Ge[H];if(C.hasOwnProperty(H))continue;let I=!1;np(pe)&&np(we)?I=!D5(pe,we):I=pe!==we,I?pe!=null?me(H):w.add(H):pe!==void 0&&w.has(H)?me(H):L.protectedKeys[H]=!0}L.prevProp=T,L.prevResolvedValues=Re,L.isActive&&(C={...C,...Re}),(a||c)&&e.blockInitialAnimation&&(de=!1);const O=W&&K;de&&(!O||he)&&b.push(...ye.map(H=>{const pe={type:U};if(typeof H=="string"&&(a||c)&&!O&&e.manuallyAnimateOnMount&&e.parent){const{parent:we}=e,I=Yr(we,H);if(we.enteringChildren&&I){const{delayChildren:ce}=I.transition||{};pe.delay=Zb(we.enteringChildren,e,ce)}}return{animation:H,options:pe}}))}if(w.size){const A={};if(typeof g.initial!="boolean"){const U=Yr(e,Array.isArray(g.initial)?g.initial[0]:g.initial);U&&U.transition&&(A.transition=U.transition)}w.forEach(U=>{const L=e.getBaseTarget(U),T=e.getValue(U);T&&(T.liveStyle=!0),A[U]=L!=null?L:null}),b.push({animation:A})}let M=!!b.length;return a&&(g.initial===!1||g.initial===g.animate)&&!e.manuallyAnimateOnMount&&(M=!1),a=!1,c=!1,M?n(b):Promise.resolve()}function p(y,g){var b;if(i[y].isActive===g)return Promise.resolve();(b=e.variantChildren)==null||b.forEach(w=>{var C;return(C=w.animationState)==null?void 0:C.setActive(y,g)}),i[y].isActive=g;const x=h(y);for(const w in i)i[w].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=y1(),c=!0}}}function h6(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!D5(n,e):!1}function Br(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function y1(){return{animate:Br(!0),whileInView:Br(),whileHover:Br(),whileTap:Br(),whileDrag:Br(),whileFocus:Br(),exit:Br()}}function dp(e,n){e.min=n.min,e.max=n.max}function sa(e,n){dp(e.x,n.x),dp(e.y,n.y)}function x1(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}const R5=1e-4,m6=1-R5,p6=1+R5,B5=.01,_6=0-B5,g6=0+B5;function ci(e){return e.max-e.min}function y6(e,n,i){return Math.abs(e-n)<=i}function b1(e,n,i,a=.5){e.origin=a,e.originPoint=bs(n.min,n.max,e.origin),e.scale=ci(i)/ci(n),e.translate=bs(i.min,i.max,e.origin)-e.originPoint,(e.scale>=m6&&e.scale<=p6||isNaN(e.scale))&&(e.scale=1),(e.translate>=_6&&e.translate<=g6||isNaN(e.translate))&&(e.translate=0)}function Wc(e,n,i,a){b1(e.x,n.x,i.x,a?a.originX:void 0),b1(e.y,n.y,i.y,a?a.originY:void 0)}function v1(e,n,i,a=0){const c=a?bs(i.min,i.max,a):i.min;e.min=c+n.min,e.max=e.min+ci(n)}function x6(e,n,i,a){v1(e.x,n.x,i.x,a==null?void 0:a.x),v1(e.y,n.y,i.y,a==null?void 0:a.y)}function w1(e,n,i,a=0){const c=a?bs(i.min,i.max,a):i.min;e.min=n.min-c,e.max=e.min+ci(n)}function qd(e,n,i,a){w1(e.x,n.x,i.x,a==null?void 0:a.x),w1(e.y,n.y,i.y,a==null?void 0:a.y)}function S1(e,n,i,a,c){return e-=n,e=Gd(e,1/i,a),c!==void 0&&(e=Gd(e,1/c,a)),e}function b6(e,n=0,i=1,a=.5,c,u=e,d=e){if(ga.test(n)&&(n=parseFloat(n),n=bs(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=bs(u.min,u.max,a);e===u&&(h-=n),e.min=S1(e.min,n,i,h,c),e.max=S1(e.max,n,i,h,c)}function C1(e,n,[i,a,c],u,d){b6(e,n[i],n[a],n[c],n.scale,u,d)}const v6=["x","scaleX","originX"],w6=["y","scaleY","originY"];function k1(e,n,i,a){C1(e.x,n,v6,i?i.x:void 0,a?a.x:void 0),C1(e.y,n,w6,i?i.y:void 0,a?a.y:void 0)}function j1(e){return e.translate===0&&e.scale===1}function L5(e){return j1(e.x)&&j1(e.y)}function M1(e,n){return e.min===n.min&&e.max===n.max}function S6(e,n){return M1(e.x,n.x)&&M1(e.y,n.y)}function E1(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function O5(e,n){return E1(e.x,n.x)&&E1(e.y,n.y)}function T1(e){return ci(e.x)/ci(e.y)}function A1(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}function pa(e){return[e("x"),e("y")]}function C6(e,n,i){let a="";const c=e.x.translate/n.x,u=e.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:y,rotate:g,rotateX:x,rotateY:b,skewX:w,skewY:C}=i;y&&(a=`perspective(${y}px) ${a}`),g&&(a+=`rotate(${g}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),w&&(a+=`skewX(${w}deg) `),C&&(a+=`skewY(${C}deg) `)}const h=e.x.scale*n.x,p=e.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const z5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],k6=z5.length,N1=e=>typeof e=="string"?parseFloat(e):e,D1=e=>typeof e=="number"||Bt.test(e);function j6(e,n,i,a,c,u){var d,h,p,y;c?(e.opacity=bs(0,(d=i.opacity)!=null?d:1,M6(a)),e.opacityExit=bs((h=n.opacity)!=null?h:1,0,E6(a))):u&&(e.opacity=bs((p=n.opacity)!=null?p:1,(y=i.opacity)!=null?y:1,a));for(let g=0;g<k6;g++){const x=z5[g];let b=R1(n,x),w=R1(i,x);if(b===void 0&&w===void 0)continue;b||(b=0),w||(w=0),b===0||w===0||D1(b)===D1(w)?(e[x]=Math.max(bs(N1(b),N1(w),a),0),(ga.test(w)||ga.test(b))&&(e[x]+="%")):e[x]=w}(n.rotate||i.rotate)&&(e.rotate=bs(n.rotate||0,i.rotate||0,a))}function R1(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const M6=$5(0,.5,vb),E6=$5(.5,.95,Qi);function $5(e,n,i){return a=>a<e?0:a>n?1:i(Ll(e,n,a))}function I5(e,n,i){const a=go(e)?e:_r(e);return a.start(Wp("",a,n,i)),a.animation}function Zc(e,n,i,a={passive:!0}){return e.addEventListener(n,i,a),()=>e.removeEventListener(n,i)}const T6=(e,n)=>e.depth-n.depth;class A6{constructor(){this.children=[],this.isDirty=!1}add(n){Np(this.children,n),this.isDirty=!0}remove(n){Bl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(T6),this.isDirty=!1,this.children.forEach(n)}}function N6(e,n){const i=li.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(Pa(a),e(u-n))};return rs.setup(a,!0),()=>Pa(a)}function Id(e){return go(e)?e.get():e}class D6{constructor(){this.members=[]}add(n){Np(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(Bl(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(Bl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const Pd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},hm=["","X","Y","Z"],R6=1e3;let B6=0;function mm(e,n,i,a){const{latestValues:c}=n;c[e]&&(i[e]=c[e],n.setStaticValue(e,0),a&&(a[e]=0))}function P5(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const i=s5(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",rs,!(c||u))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&P5(a)}function H5({attachResizeListener:e,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=B6++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(z6),this.nodes.forEach(V6),this.nodes.forEach(Y6),this.nodes.forEach($6)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new A6)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Rp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=of(d)&&!h5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:y}=this.options;if(y&&!y.current&&y.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),e){let g,x=0;const b=()=>this.root.updateBlockedByResize=!1;rs.read(()=>{x=window.innerWidth}),e(d,()=>{const w=window.innerWidth;w!==x&&(x=w,this.root.updateBlockedByResize=!0,g&&g(),g=N6(b,250),Pd.hasAnimatedSinceResize&&(Pd.hasAnimatedSinceResize=!1,this.nodes.forEach(O1)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&y&&(h||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const C=this.options.transition||y.getDefaultTransition()||q6,{onLayoutAnimationStart:E,onLayoutAnimationComplete:M}=y.getProps(),A=!this.targetLayout||!O5(this.targetLayout,w),U=!x&&b;if(this.options.layoutRoot||this.resumeFrom||U||x&&(A||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...Yp(C,"layout"),onPlay:E,onComplete:M};(y.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(g,U)}else x||O1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Pa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(W6),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&P5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const x=this.path[g];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(P6),this.nodes.forEach(B1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(L1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(H6),this.nodes.forEach(U6),this.nodes.forEach(L6),this.nodes.forEach(O6)):this.nodes.forEach(L1),this.clearAllSnapshots();const h=li.now();Uo.delta=ya(0,1e3/60,h-Uo.timestamp),Uo.timestamp=h,Uo.isProcessing=!0,im.update.process(Uo),im.preRender.process(Uo),im.render.process(Uo),Uo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Qp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(I6),this.sharedNodes.forEach(F6)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,rs.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){rs.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ci(this.snapshot.measuredBox.x)&&!ci(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ro()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!L5(this.projectionDelta),p=this.getTransformTemplate(),y=p?p(this.latestValues,""):void 0,g=y!==this.prevTransformTemplateValue;d&&this.instance&&(h||$r(this.latestValues)||g)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),K6(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var y;const{visualElement:d}=this.options;if(!d)return ro();const h=d.measureViewportBox();if(!(((y=this.scroll)==null?void 0:y.wasRoot)||this.path.some(Q6))){const{scroll:g}=this.root;g&&(_a(h.x,g.offset.x),_a(h.y,g.offset.y))}return h}removeElementScroll(d){var p;const h=ro();if(sa(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let y=0;y<this.path.length;y++){const g=this.path[y],{scroll:x,options:b}=g;g!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&sa(h,d),_a(h.x,x.offset.x),_a(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var g,x;const y=p||ro();sa(y,d);for(let b=0;b<this.path.length;b++){const w=this.path[b];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(_a(y.x,-w.scroll.offset.x),_a(y.y,-w.scroll.offset.y)),$r(w.latestValues)&&$d(y,w.latestValues,(g=w.layout)==null?void 0:g.layoutBox)}return $r(this.latestValues)&&$d(y,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),y}removeTransform(d){var p;const h=ro();sa(h,d);for(let y=0;y<this.path.length;y++){const g=this.path[y];if(!$r(g.latestValues))continue;let x;g.instance&&(lp(g.latestValues)&&g.updateSnapshot(),x=ro(),sa(x,g.measurePageBox())),k1(h,g.latestValues,(p=g.snapshot)==null?void 0:p.layoutBox,x)}return $r(this.latestValues)&&k1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Uo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:x}=this.options;if(!this.layout||!(g||x))return;this.resolvedRelativeTargetAt=Uo.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ro(),this.targetWithTransforms=ro()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),x6(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):sa(this.target,this.layout.layoutBox),v5(this.target,this.targetDelta)):sa(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||lp(this.parent.latestValues)||b5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ro(),this.relativeTargetOrigin=ro(),qd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),sa(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var C;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(C=this.parent)!=null&&C.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Uo.timestamp&&(p=!1),p)return;const{layout:y,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||g))return;sa(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;GC(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=ro());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(x1(this.prevProjectionDelta.x,this.projectionDelta.x),x1(this.prevProjectionDelta.y,this.projectionDelta.y)),Wc(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!A1(this.projectionDelta.x,this.prevProjectionDelta.x)||!A1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Nl(),this.projectionDelta=Nl(),this.projectionDeltaWithTransform=Nl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,y=p?p.latestValues:{},g={...this.latestValues},x=Nl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=ro(),w=p?p.source:void 0,C=this.layout?this.layout.source:void 0,E=w!==C,M=this.getStack(),A=!M||M.members.length<=1,U=!!(E&&!A&&this.options.crossfade===!0&&!this.path.some(G6));this.animationProgress=0;let L;this.mixTargetDelta=T=>{const G=T/1e3;z1(x.x,d.x,G),z1(x.y,d.y,G),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(qd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),X6(this.relativeTarget,this.relativeTargetOrigin,b,G),L&&S6(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=ro()),sa(L,this.relativeTarget)),E&&(this.animationValues=g,j6(g,y,this.latestValues,G,U,A)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=G},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,y;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(y=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||y.stop(),this.pendingAnimation&&(Pa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=rs.update(()=>{Pd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=_r(0)),this.motionValue.jump(0,!1),this.currentAnimation=I5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(R6),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:y,latestValues:g}=d;if(!(!h||!p||!y)){if(this!==d&&this.layout&&y&&U5(this.options.animationType,this.layout.layoutBox,y.layoutBox)){p=this.target||ro();const x=ci(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=ci(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}sa(h,p),$d(h,g),Wc(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new D6),this.sharedNodes.get(d).add(h);const y=h.options.initialPromotionConfig;h.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const y=this.getStack();y&&y.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const y={};p.z&&mm("z",d,y,this.animationValues);for(let g=0;g<hm.length;g++)mm(`rotate${hm[g]}`,d,y,this.animationValues),mm(`skew${hm[g]}`,d,y,this.animationValues);d.render();for(const g in y)d.setStaticValue(g,y[g]),this.animationValues&&(this.animationValues[g]=y[g]);d.scheduleRender()}applyProjectionStyles(d,h){var C,E;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=Id(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=Id(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!$r(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=y.animationValues||y.latestValues;this.applyTransformsToTarget();let x=C6(this.projectionDeltaWithTransform,this.treeScale,g);p&&(x=p(g,x)),d.transform=x;const{x:b,y:w}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,y.animationValues?d.opacity=y===this?(E=(C=g.opacity)!=null?C:this.latestValues.opacity)!=null?E:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=y===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const M in up){if(g[M]===void 0)continue;const{correct:A,applyTo:U,isCSSVariable:L}=up[M],T=x==="none"?g[M]:A(g[M],y);if(U){const G=U.length;for(let F=0;F<G;F++)d[U[F]]=T}else L?this.options.visualElement.renderState.vars[M]=T:d[M]=T}this.options.layoutId&&(d.pointerEvents=y===this?Id(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(B1),this.root.sharedNodes.clear()}}}function L6(e){e.updateLayout()}function O6(e){var i;const n=((i=e.resumeFrom)==null?void 0:i.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=e.layout,{animationType:u}=e.options,d=n.source!==e.layout.source;if(u==="size")pa(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=ci(b);b.min=a[x].min,b.max=b.min+w});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";dp(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else U5(u,n.layoutBox,a)&&pa(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=ci(a[x]);b.max=b.min+w,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[x].max=e.relativeTarget[x].min+w)});const h=Nl();Wc(h,a,n.layoutBox);const p=Nl();d?Wc(p,e.applyTransform(c,!0),n.measuredBox):Wc(p,a,n.layoutBox);const y=!L5(h);let g=!1;if(!e.resumeFrom){const x=e.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:w}=x;if(b&&w){const C=e.options.layoutAnchor||void 0,E=ro();qd(E,n.layoutBox,b.layoutBox,C);const M=ro();qd(M,a,w.layoutBox,C),O5(E,M)||(g=!0),x.options.layoutRoot&&(e.relativeTarget=M,e.relativeTargetOrigin=E,e.relativeParent=x)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:g})}else if(e.isLead()){const{onExitComplete:a}=e.options;a&&a()}e.options.transition=void 0}function z6(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function $6(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function I6(e){e.clearSnapshot()}function B1(e){e.clearMeasurements()}function P6(e){e.isLayoutDirty=!0,e.updateLayout()}function L1(e){e.isLayoutDirty=!1}function H6(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function U6(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function O1(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function V6(e){e.resolveTargetDelta()}function Y6(e){e.calcProjection()}function W6(e){e.resetSkewAndRotation()}function F6(e){e.removeLeadSnapshot()}function z1(e,n,i){e.translate=bs(n.translate,0,i),e.scale=bs(n.scale,1,i),e.origin=n.origin,e.originPoint=n.originPoint}function $1(e,n,i,a){e.min=bs(n.min,i.min,a),e.max=bs(n.max,i.max,a)}function X6(e,n,i,a){$1(e.x,n.x,i.x,a),$1(e.y,n.y,i.y,a)}function G6(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const q6={duration:.45,ease:[.4,0,.1,1]},I1=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),P1=I1("applewebkit/")&&!I1("chrome/")?Math.round:Qi;function H1(e){e.min=P1(e.min),e.max=P1(e.max)}function K6(e){H1(e.x),H1(e.y)}function U5(e,n,i){return e==="position"||e==="preserve-aspect"&&!y6(T1(n),T1(i),.2)}function Q6(e){var n;return e!==e.root&&((n=e.scroll)==null?void 0:n.wasRoot)}const Z6=H5({attachResizeListener:(e,n)=>Zc(e,"resize",n),measureScroll:()=>{var e,n;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),pm={current:void 0},V5=H5({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!pm.current){const e=new Z6({});e.mount(window),e.setOptions({layoutScroll:!0}),pm.current=e}return pm.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),lf=_.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function U1(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function J6(...e){return n=>{let i=!1;const a=e.map(c=>{const u=U1(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():U1(e[c],null)}}}}function ek(...e){return _.useCallback(J6(...e),e)}class tk extends _.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(Bd(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=Bd(a)&&a.offsetWidth||0,u=Bd(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function nk({children:e,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,w;const d=_.useId(),h=_.useRef(null),p=_.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=_.useContext(lf),g=(w=(b=e.props)==null?void 0:b.ref)!=null?w:e==null?void 0:e.ref,x=ek(h,g);return _.useInsertionEffect(()=>{const{width:C,height:E,top:M,left:A,right:U,bottom:L}=p.current;if(n||u===!1||!h.current||!C||!E)return;const T=i==="left"?`left: ${A}`:`right: ${U}`,G=a==="bottom"?`bottom: ${L}`:`top: ${M}`;h.current.dataset.motionPopId=d;const F=document.createElement("style");y&&(F.nonce=y);const W=c!=null?c:document.head;return W.appendChild(F),F.sheet&&F.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${C}px !important;
            height: ${E}px !important;
            ${T}px !important;
            ${G}px !important;
          }
        `),()=>{var K;(K=h.current)==null||K.removeAttribute("data-motion-pop-id"),W.contains(F)&&W.removeChild(F)}},[n]),l.jsx(tk,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?e:_.cloneElement(e,{ref:x})})}const sk=({children:e,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:y})=>{const g=eu(ok),x=_.useId();let b=!0,w=_.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:C=>{g.set(C,!0);for(const E of g.values())if(!E)return;a&&a()},register:C=>(g.set(C,!1),()=>g.delete(C))}),[i,g,a]);return u&&b&&(w={...w}),_.useMemo(()=>{g.forEach((C,E)=>g.set(E,!1))},[i]),_.useEffect(()=>{!i&&!g.size&&a&&a()},[i]),e=l.jsx(nk,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:y,children:e}),l.jsx(nf.Provider,{value:w,children:e})};function ok(){return new Map}function Y5(e=!0){const n=_.useContext(nf);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=_.useId();_.useEffect(()=>{if(e)return c(u)},[e]);const d=_.useCallback(()=>e&&a&&a(u),[u,a,e]);return!i&&a?[!1,d]:[!0]}const ud=e=>e.key||"";function V1(e){const n=[];return _.Children.forEach(e,i=>{_.isValidElement(i)&&n.push(i)}),n}const cf=({children:e,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:y})=>{const[g,x]=Y5(d),b=_.useMemo(()=>V1(e),[e]),w=d&&!g?[]:b.map(ud),C=_.useRef(!0),E=_.useRef(b),M=eu(()=>new Map),A=_.useRef(new Set),[U,L]=_.useState(b),[T,G]=_.useState(b);Ap(()=>{C.current=!1,E.current=b;for(let K=0;K<T.length;K++){const de=ud(T[K]);w.includes(de)?(M.delete(de),A.current.delete(de)):M.get(de)!==!0&&M.set(de,!1)}},[T,w.length,w.join("-")]);const F=[];if(b!==U){let K=[...b];for(let de=0;de<T.length;de++){const he=T[de],ye=ud(he);w.includes(ye)||(K.splice(de,0,he),F.push(he))}return u==="wait"&&F.length&&(K=F),G(V1(K)),L(b),null}const{forceRender:W}=_.useContext(Tp);return l.jsx(l.Fragment,{children:T.map(K=>{const de=ud(K),he=d&&!g?!1:b===T||w.includes(de),ye=()=>{if(A.current.has(de))return;if(M.has(de))A.current.add(de),M.set(de,!0);else return;let Re=!0;M.forEach(Ge=>{Ge||(Re=!1)}),Re&&(W==null||W(),G(E.current),d&&(x==null||x()),a&&a())};return l.jsx(sk,{isPresent:he,initial:!C.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:y,onExitComplete:he?void 0:ye,anchorX:h,anchorY:p,children:K},de)})})},W5=_.createContext({strict:!1}),Y1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let W1=!1;function ik(){if(W1)return;const e={};for(const n in Y1)e[n]={isEnabled:i=>Y1[n].some(a=>!!i[a])};_5(e),W1=!0}function F5(){return ik(),WC()}function ak(e){const n=F5();for(const i in e)n[i]={...n[i],...e[i]};_5(n)}const rk=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Kd(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||rk.has(e)}let X5=e=>!Kd(e);function lk(e){typeof e=="function"&&(X5=n=>n.startsWith("on")?!Kd(n):e(n))}try{lk(require("@emotion/is-prop-valid").default)}catch{}function ck(e,n,i){const a={};for(const c in e)c==="values"&&typeof e.values=="object"||go(e[c])||(X5(c)||i===!0&&Kd(c)||!n&&!Kd(c)||e.draggable&&c.startsWith("onDrag"))&&(a[c]=e[c]);return a}const uf=_.createContext({});function uk(e,n){if(rf(e)){const{initial:i,animate:a}=e;return{initial:i===!1||Qc(i)?i:void 0,animate:Qc(a)?a:void 0}}return e.inherit!==!1?n:{}}function dk(e){const{initial:n,animate:i}=uk(e,_.useContext(uf));return _.useMemo(()=>({initial:n,animate:i}),[F1(n),F1(i)])}function F1(e){return Array.isArray(e)?e.join(" "):e}const s_=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function G5(e,n,i){for(const a in n)!go(n[a])&&!C5(a,i)&&(e[a]=n[a])}function fk({transformTemplate:e},n){return _.useMemo(()=>{const i=s_();return t_(i,n,e),Object.assign({},i.vars,i.style)},[n])}function hk(e,n){const i=e.style||{},a={};return G5(a,i,e),Object.assign(a,fk(e,n)),a}function mk(e,n){const i={},a=hk(e,n);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=a,i}const q5=()=>({...s_(),attrs:{}});function pk(e,n,i,a){const c=_.useMemo(()=>{const u=q5();return j5(u,n,E5(a),e.transformTemplate,e.style),{...u.attrs,style:{...u.style}}},[n]);if(e.style){const u={};G5(u,e.style,e),c.style={...u,...c.style}}return c}const _k=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function o_(e){return typeof e!="string"||e.includes("-")?!1:!!(_k.indexOf(e)>-1||/[A-Z]/u.test(e))}function gk(e,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:o_(e))?pk:mk)(n,a,c,e),y=ck(n,typeof e=="string",u),g=e!==_.Fragment?{...y,...p,ref:i}:{},{children:x}=n,b=_.useMemo(()=>go(x)?x.get():x,[x]);return _.createElement(e,{...g,children:b})}function yk({scrapeMotionValuesFromProps:e,createRenderState:n},i,a,c){return{latestValues:xk(i,a,c,e),renderState:n()}}function xk(e,n,i,a){const c={},u=a(e,{});for(const b in u)c[b]=Id(u[b]);let{initial:d,animate:h}=e;const p=rf(e),y=m5(e);n&&y&&!p&&e.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let g=i?i.initial===!1:!1;g=g||d===!1;const x=g?h:d;if(x&&typeof x!="boolean"&&!af(x)){const b=Array.isArray(x)?x:[x];for(let w=0;w<b.length;w++){const C=Fp(e,b[w]);if(C){const{transitionEnd:E,transition:M,...A}=C;for(const U in A){let L=A[U];if(Array.isArray(L)){const T=g?L.length-1:0;L=L[T]}L!==null&&(c[U]=L)}for(const U in E)c[U]=E[U]}}}return c}const K5=e=>(n,i)=>{const a=_.useContext(uf),c=_.useContext(nf),u=()=>yk(e,n,a,c);return i?u():eu(u)},bk=K5({scrapeMotionValuesFromProps:n_,createRenderState:s_}),vk=K5({scrapeMotionValuesFromProps:T5,createRenderState:q5}),wk=Symbol.for("motionComponentSymbol");function Sk(e,n,i){const a=_.useRef(i);_.useInsertionEffect(()=>{a.current=i});const c=_.useRef(null);return _.useCallback(u=>{var h;u&&((h=e.onMount)==null||h.call(e,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const Q5=_.createContext({});function El(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Ck(e,n,i,a,c,u){var L,T;const{visualElement:d}=_.useContext(uf),h=_.useContext(W5),p=_.useContext(nf),y=_.useContext(lf),g=y.reducedMotion,x=y.skipAnimations,b=_.useRef(null),w=_.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(e,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g,skipAnimations:x,isSVG:u}),w.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const C=b.current,E=_.useContext(Q5);C&&!C.projection&&c&&(C.type==="html"||C.type==="svg")&&kk(b.current,i,c,E);const M=_.useRef(!1);_.useInsertionEffect(()=>{C&&M.current&&C.update(i,p)});const A=i[n5],U=_.useRef(!!A&&typeof window<"u"&&!((L=window.MotionHandoffIsComplete)!=null&&L.call(window,A))&&((T=window.MotionHasOptimisedAnimation)==null?void 0:T.call(window,A)));return Ap(()=>{w.current=!0,C&&(M.current=!0,window.MotionIsMounted=!0,C.updateFeatures(),C.scheduleRenderMicrotask(),U.current&&C.animationState&&C.animationState.animateChanges())}),_.useEffect(()=>{C&&(!U.current&&C.animationState&&C.animationState.animateChanges(),U.current&&(queueMicrotask(()=>{var G;(G=window.MotionHandoffMarkAsComplete)==null||G.call(window,A)}),U.current=!1),C.enteringChildren=void 0)}),C}function kk(e,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:y,layoutAnchor:g,layoutCrossfade:x}=n;e.projection=new i(e.latestValues,n["data-framer-portal-id"]?void 0:Z5(e.parent)),e.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&El(h),visualElement:e,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:y,layoutAnchor:g})}function Z5(e){if(e)return e.options.allowProjection!==!1?e.projection:Z5(e.parent)}function _m(e,{forwardMotionProps:n=!1,type:i}={},a,c){var y,g;a&&ak(a);const u=i?i==="svg":o_(e),d=u?vk:bk;function h(x,b){let w;const C={..._.useContext(lf),...x,layoutId:jk(x)},{isStatic:E}=C,M=dk(x),A=d(x,E);if(!E&&typeof window<"u"){Mk();const U=Ek(C);w=U.MeasureLayout,M.visualElement=Ck(e,A,C,c,U.ProjectionNode,u)}return l.jsxs(uf.Provider,{value:M,children:[w&&M.visualElement?l.jsx(w,{visualElement:M.visualElement,...C}):null,gk(e,x,Sk(A,M.visualElement,b),A,E,n,u)]})}h.displayName=`motion.${typeof e=="string"?e:`create(${(g=(y=e.displayName)!=null?y:e.name)!=null?g:""})`}`;const p=_.forwardRef(h);return p[wk]=e,p}function jk({layoutId:e}){const n=_.useContext(Tp).id;return n&&e!==void 0?n+"-"+e:e}function Mk(e,n){_.useContext(W5).strict}function Ek(e){const n=F5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(e)||a!=null&&a.isEnabled(e)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function Tk(e,n){if(typeof Proxy>"u")return _m;const i=new Map,a=(u,d)=>_m(u,d,e,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,_m(d,void 0,e,n)),i.get(d))})}const Ak=(e,n)=>{var a;return((a=n.isSVG)!=null?a:o_(e))?new A5(n):new k5(n,{allowProjection:e!==_.Fragment})};class Nk extends gr{constructor(n){super(n),n.animationState||(n.animationState=f6(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();af(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let Dk=0;class Rk extends gr{constructor(){super(...arguments),this.id=Dk++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Yr(this.node,d,h);if(p){const{transition:y,transitionEnd:g,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const Bk={animation:{Feature:Nk},exit:{Feature:Rk}};function ou(e){return{point:{x:e.pageX,y:e.pageY}}}const Lk=e=>n=>Zp(n)&&e(n,ou(n));function Fc(e,n,i,a){return Zc(e,n,Lk(i),a)}const J5=({current:e})=>e?e.ownerDocument.defaultView:null,X1=(e,n)=>Math.abs(e-n);function Ok(e,n){const i=X1(e.x,n.x),a=X1(e.y,n.y);return Math.sqrt(i**2+a**2)}const G1=new Set(["auto","scroll"]);class e2{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=dd(this.lastRawMoveEventInfo,this.transformPagePoint));const w=gm(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,E=Ok(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!E)return;const{point:M}=w,{timestamp:A}=Uo;this.history.push({...M,timestamp:A});const{onStart:U,onMove:L}=this.handlers;C||(U&&U(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,w)},this.handlePointerMove=(w,C)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=C,this.lastMoveEventInfo=dd(C,this.transformPagePoint),rs.update(this.updatePoint,!0)},this.handlePointerUp=(w,C)=>{this.end();const{onEnd:E,onSessionEnd:M,resumeAnimation:A}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&A&&A(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const U=gm(w.type==="pointercancel"?this.lastMoveEventInfo:dd(C,this.transformPagePoint),this.history);this.startEvent&&E&&E(w,U),M&&M(w,U)},!Zp(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=ou(n),y=dd(p,this.transformPagePoint),{point:g}=y,{timestamp:x}=Uo;this.history=[{...g,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,gm(y,this.history)),this.removeListeners=tu(Fc(this.contextWindow,"pointermove",this.handlePointerMove),Fc(this.contextWindow,"pointerup",this.handlePointerUp),Fc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(G1.has(a.overflowX)||G1.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),rs.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Pa(this.updatePoint)}}function dd(e,n){return n?{point:n(e.point)}:e}function q1(e,n){return{x:e.x-n.x,y:e.y-n.y}}function gm({point:e},n){return{point:e,delta:q1(e,t2(n)),offset:q1(e,zk(n)),velocity:$k(n,.1)}}function zk(e){return e[0]}function t2(e){return e[e.length-1]}function $k(e,n){if(e.length<2)return{x:0,y:0};let i=e.length-1,a=null;const c=t2(e);for(;i>=0&&(a=e[i],!(c.timestamp-a.timestamp>wi(n)));)i--;if(!a)return{x:0,y:0};a===e[0]&&e.length>2&&c.timestamp-a.timestamp>wi(n)*2&&(a=e[1]);const u=Ki(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function Ik(e,{min:n,max:i},a){return n!==void 0&&e<n?e=a?bs(n,e,a.min):Math.max(e,n):i!==void 0&&e>i&&(e=a?bs(i,e,a.max):Math.min(e,i)),e}function K1(e,n,i){return{min:n!==void 0?e.min+n:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function Pk(e,{top:n,left:i,bottom:a,right:c}){return{x:K1(e.x,i,c),y:K1(e.y,n,a)}}function Q1(e,n){let i=n.min-e.min,a=n.max-e.max;return n.max-n.min<e.max-e.min&&([i,a]=[a,i]),{min:i,max:a}}function Hk(e,n){return{x:Q1(e.x,n.x),y:Q1(e.y,n.y)}}function Uk(e,n){let i=.5;const a=ci(e),c=ci(n);return c>a?i=Ll(n.min,n.max-a,e.min):a>c&&(i=Ll(e.min,e.max-c,n.min)),ya(0,1,i)}function Vk(e,n){const i={};return n.min!==void 0&&(i.min=n.min-e.min),n.max!==void 0&&(i.max=n.max-e.min),i}const fp=.35;function Yk(e=fp){return e===!1?e=0:e===!0&&(e=fp),{x:Z1(e,"left","right"),y:Z1(e,"top","bottom")}}function Z1(e,n,i){return{min:J1(e,n),max:J1(e,i)}}function J1(e,n){return typeof e=="number"?e:e[n]||0}const Wk=new WeakMap;class Fk{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ro(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(ou(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:w,dragPropagation:C,onDragStart:E}=this.getProps();if(w&&!C&&(this.openDragLock&&this.openDragLock(),this.openDragLock=wC(w),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),pa(A=>{let U=this.getAxisMotionValue(A).get()||0;if(ga.test(U)){const{projection:L}=this.visualElement;if(L&&L.layout){const T=L.layout.layoutBox[A];T&&(U=ci(T)*(parseFloat(U)/100))}}this.originPoint[A]=U}),E&&rs.update(()=>E(x,b),!1,!0),sp(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:w,dragDirectionLock:C,onDirectionLock:E,onDrag:M}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:A}=b;if(C&&this.currentDirection===null){this.currentDirection=Gk(A),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",b.point,A),this.updateAxis("y",b.point,A),this.visualElement.render(),M&&rs.update(()=>M(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new e2(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:J5(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&rs.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!fd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=Ik(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&El(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=Pk(a.layoutBox,n):this.constraints=!1,this.elastic=Yk(i),c!==this.constraints&&!El(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&pa(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=Vk(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!El(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=qC(a,c.root,this.visualElement.getTransformPagePoint());let d=Hk(c.layout.layoutBox,u);if(i){const h=i(FC(d));this.hasMutatedConstraints=!!h,h&&(d=x5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},y=pa(g=>{if(!fd(g,i,this.currentDirection))return;let x=p&&p[g]||{};(d===!0||d===g)&&(x={min:0,max:0});const b=c?200:1e6,w=c?40:1e7,C={type:"inertia",velocity:a?n[g]:0,bounceStiffness:b,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(g,C)});return Promise.all(y).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return sp(this.visualElement,n),a.start(Wp(n,a,0,i,this.visualElement,!1))}stopAnimation(){pa(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){pa(i=>{const{drag:a}=this.getProps();if(!fd(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-bs(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!El(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};pa(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=Uk({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),pa(d=>{if(!fd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:y}=this.constraints[d];h.set(bs(p,y,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Wk.set(this.visualElement,this);const n=this.visualElement.current,i=Fc(n,"pointerdown",y=>{const{drag:g,dragListener:x=!0}=this.getProps(),b=y.target,w=b!==n&&EC(b);g&&x&&!w&&this.start(y)});let a;const c=()=>{const{dragConstraints:y}=this.getProps();El(y)&&y.current&&(this.constraints=this.resolveRefConstraints(),a||(a=Xk(n,y.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),rs.read(c);const h=Zc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:g})=>{this.isDragging&&g&&(pa(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=y[x].translate,b.set(b.get()+y[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=fp,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function ex(e){let n=!0;return()=>{if(n){n=!1;return}e()}}function Xk(e,n,i){const a=r1(e,ex(i)),c=r1(n,ex(i));return()=>{a(),c()}}function fd(e,n,i){return(n===!0||n===e)&&(i===null||i===e)}function Gk(e,n=10){let i=null;return Math.abs(e.y)>n?i="y":Math.abs(e.x)>n&&(i="x"),i}class qk extends gr{constructor(n){super(n),this.removeGroupControls=Qi,this.removeListeners=Qi,this.controls=new Fk(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Qi}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const ym=e=>(n,i)=>{e&&rs.update(()=>e(n,i),!1,!0)};class Kk extends gr{constructor(){super(...arguments),this.removePointerDownListener=Qi}onPointerDown(n){this.session=new e2(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:J5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:ym(n),onStart:ym(i),onMove:ym(a),onEnd:(u,d)=>{delete this.session,c&&rs.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=Fc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let xm=!1;class Qk extends _.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),xm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Pd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),xm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||rs.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Qp.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;xm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function n2(e){const[n,i]=Y5(),a=_.useContext(Tp);return l.jsx(Qk,{...e,layoutGroup:a,switchLayoutGroup:_.useContext(Q5),isPresent:n,safeToRemove:i})}const Zk={pan:{Feature:Kk},drag:{Feature:qk,ProjectionNode:V5,MeasureLayout:n2}};function tx(e,n,i){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&rs.postRender(()=>u(n,ou(n)))}class Jk extends gr{mount(){const{current:n}=this.node;n&&(this.unmount=CC(n,(i,a)=>(tx(this.node,a,"Start"),c=>tx(this.node,c,"End"))))}unmount(){}}class e3 extends gr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=tu(Zc(this.node.current,"focus",()=>this.onFocus()),Zc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function nx(e,n,i){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&rs.postRender(()=>u(n,ou(n)))}class t3 extends gr{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=AC(n,(c,u)=>(nx(this.node,u,"Start"),(d,{success:h})=>nx(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const hp=new WeakMap,bm=new WeakMap,n3=e=>{const n=hp.get(e.target);n&&n(e)},s3=e=>{e.forEach(n3)};function o3({root:e,...n}){const i=e||document;bm.has(i)||bm.set(i,{});const a=bm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(s3,{root:e,...n})),a[c]}function i3(e,n,i){const a=o3(n);return hp.set(e,i),a.observe(e),()=>{hp.delete(e),a.unobserve(e)}}const a3={some:0,all:1};class r3 extends gr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:a3[c]},h=y=>{const{isIntersecting:g}=y;if(this.isInView===g||(this.isInView=g,u&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),w=g?x:b;w&&w(y)};this.stopObserver=i3(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(l3(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function l3({viewport:e={}},{viewport:n={}}={}){return i=>e[i]!==n[i]}const c3={inView:{Feature:r3},tap:{Feature:t3},focus:{Feature:e3},hover:{Feature:Jk}},u3={layout:{ProjectionNode:V5,MeasureLayout:n2}},d3={...Bk,...c3,...Zk,...u3},ui=Tk(d3,Ak);function mp(e){const n=eu(()=>_r(e)),{isStatic:i}=_.useContext(lf);if(i){const[,a]=_.useState(e);_.useEffect(()=>n.on("change",a),[])}return n}function s2(e,n){const i=mp(n()),a=()=>i.set(n());return a(),Ap(()=>{const c=()=>rs.preRender(a,!1,!0),u=e.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),Pa(a)}}),i}function f3(e){Yc.current=[],e();const n=s2(Yc.current,e);return Yc.current=void 0,n}function hd(e,n,i,a){if(typeof e=="function")return f3(e);const u=typeof n=="function"?n:IC(n,i,a),d=Array.isArray(e)?sx(e,u):sx([e],([p])=>u(p)),h=Array.isArray(e)?void 0:e.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function sx(e,n){const i=eu(()=>[]);return s2(e,()=>{i.length=0;const a=e.length;for(let c=0;c<a;c++)i[c]=e[c].get();return n(i)})}function i_(e){return typeof e=="object"&&!Array.isArray(e)}function o2(e,n,i,a){return e==null?[]:typeof e=="string"&&i_(n)?Kp(e,i,a):e instanceof NodeList?Array.from(e):Array.isArray(e)?e.filter(c=>c!=null):[e]}function h3(e,n,i){return e*(n+1)}function ox(e,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,e+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:e}function m3(e,n,i){for(let a=0;a<e.length;a++){const c=e[a];c.at>n&&c.at<i&&(Bl(e,c),a--)}}function p3(e,n,i,a,c,u){m3(e,c,u);for(let d=0;d<n.length;d++)e.push({value:n[d],at:bs(c,u,a[d]),easing:kb(i,d)})}function _3(e,n){for(let i=0;i<e.length;i++)e[i]=e[i]/(n+1)}function g3(e,n){return e.at===n.at?e.value===null?1:n.value===null?-1:0:e.at-n.at}const y3="easeInOut";function x3(e,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},y=new Map;let g=0,x=0,b=0;for(let w=0;w<e.length;w++){const C=e[w];if(typeof C=="string"){y.set(C,x);continue}else if(!Array.isArray(C)){y.set(C.name,ox(x,C.at,g,y));continue}let[E,M,A={}]=C;A.at!==void 0&&(x=ox(x,A.at,g,y));let U=0;const L=(T,G,F,W=0,K=0)=>{const de=b3(T),{delay:he=0,times:ye=Hb(de),type:Re=n.type||"keyframes",repeat:Ge,repeatType:oe,repeatDelay:me=0,...O}=G;let{ease:ae=n.ease||"easeOut",duration:H}=G;const pe=typeof he=="function"?he(W,K):he,we=de.length,I=Vp(Re)?Re:c==null?void 0:c[Re||"keyframes"];if(we<=2&&I){let Te=100;if(we===2&&S3(de)){const Je=de[1]-de[0];Te=Math.abs(Je)}const _e={...n,...O};H!==void 0&&(_e.duration=wi(H));const Oe=zb(_e,Te,I);ae=Oe.ease,H=Oe.duration}H!=null||(H=u);const ce=x+pe;ye.length===1&&ye[0]===0&&(ye[1]=1);const ee=ye.length-de.length;if(ee>0&&Pb(ye,ee),de.length===1&&de.unshift(null),Ge){H=h3(H,Ge);const Te=[...de],_e=[...ye];ae=Array.isArray(ae)?[...ae]:[ae];const Oe=[...ae];for(let Je=0;Je<Ge;Je++){de.push(...Te);for(let We=0;We<Te.length;We++)ye.push(_e[We]+(Je+1)),ae.push(We===0?"linear":kb(Oe,We-1))}_3(ye,Ge)}const Ce=ce+H;p3(F,de,ae,ye,ce,Ce),U=Math.max(pe+H,U),b=Math.max(Ce,b)};if(go(E)){const T=ix(E,h);L(M,A,ax("default",T))}else{const T=o2(E,M,a,p),G=T.length;for(let F=0;F<G;F++){M=M,A=A;const W=T[F],K=ix(W,h);for(const de in M)L(M[de],v3(A,de),ax(de,K),F,G)}}g=x,x+=U}return h.forEach((w,C)=>{for(const E in w){const M=w[E];M.sort(g3);const A=[],U=[],L=[];for(let W=0;W<M.length;W++){const{at:K,value:de,easing:he}=M[W];A.push(de),U.push(Ll(0,b,K)),L.push(he||"easeOut")}U[0]!==0&&(U.unshift(0),A.unshift(A[0]),L.unshift(y3)),U[U.length-1]!==1&&(U.push(1),A.push(null)),d.has(C)||d.set(C,{keyframes:{},transition:{}});const T=d.get(C);T.keyframes[E]=A;const{type:G,...F}=n;T.transition[E]={...F,duration:b,ease:L,times:U,...i}}}),d}function ix(e,n){return!n.has(e)&&n.set(e,{}),n.get(e)}function ax(e,n){return n[e]||(n[e]=[]),n[e]}function b3(e){return Array.isArray(e)?e:[e]}function v3(e,n){return e&&e[n]?{...e,...e[n]}:{...e}}const w3=e=>typeof e=="number",S3=e=>e.every(w3);function C3(e){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=of(e)&&!h5(e)?new A5(n):new k5(n);i.mount(e),Kc.set(e,i)}function k3(e){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new n6(n);i.mount(e),Kc.set(e,i)}function j3(e,n){return go(e)||typeof e=="number"||typeof e=="string"&&!i_(n)}function i2(e,n,i,a){const c=[];if(j3(e,n))c.push(I5(e,i_(n)&&n.default||n,i&&(i.default||i)));else{if(e==null)return c;const u=o2(e,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],y=p instanceof Element?C3:k3;Kc.has(p)||y(p);const g=Kc.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Gp(g,{...n,transition:x},{}))}}return c}function M3(e,n,i){const a=[],c=e.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=_r(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return x3(c,n,i,{spring:qc}).forEach(({keyframes:d,transition:h},p)=>{a.push(...i2(p,d,h))}),a}function E3(e){return Array.isArray(e)&&e.some(Array.isArray)}function T3(e={}){const{scope:n,reduceMotion:i}=e;function a(c,u,d){let h=[],p;if(E3(c)){const{onComplete:g,...x}=u||{};typeof g=="function"&&(p=g),h=M3(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:g,...x}=d||{};typeof g=="function"&&(p=g),h=i2(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const y=new W4(h);return p&&y.finished.then(p),n&&(n.animations.push(y),y.finished.then(()=>{Bl(n.animations,y)})),y}return a}const rx=T3(),Ia=(e,n)=>!e||!n?!1:e===n||e.startsWith(n)||n.startsWith(e);function lx(e,n){var a;const i=[...(a=e.childShas)!=null?a:[]];return i.includes(n)||i.push(n),{...e,childShas:i}}function A3(e,n,i,a,c,u){if(!i)return{directCommits:e,branchCommitPreviews:n};const d=e.map(p=>Ia(p.fullSha,i)||Ia(p.sha,i)?lx(p,a):p),h=Object.fromEntries(Object.entries(n).map(([p,y])=>[p,y.map(g=>(p===c||p===u)&&(Ia(g.fullSha,i)||Ia(g.sha,i))?lx(g,a):g)]));return{directCommits:d,branchCommitPreviews:h}}function N3(e,n,i,a){if(!e)return null;const c=d=>Ia(d,e);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(y=>c(y.fullSha)||c(y.sha)))return d;return null}function D3(e,n,i,a,c,u,d=!1){const h=e.baseSha,p=`STASH:${e.index}`,y=`Stash ${e.index+1}`,g=N3(h,i,a,u),x=(()=>{var F;if(!h)return null;const G=i.find(W=>Ia(W.fullSha,h)||Ia(W.sha,h));if(G!=null&&G.date)return G.date;if(g&&!d){const W=((F=a[g])!=null?F:[]).find(K=>Ia(K.fullSha,h)||Ia(K.sha,h));if(W!=null&&W.date)return W.date}return null})(),b=x?new Date(x).getTime():Number.NaN,w=Date.now(),C=Number.isFinite(b)?Math.max(w,b+1+e.index):w+e.index,E=new Date(C).toISOString(),M=e.message.trim(),A={fullSha:p,sha:y,parentSha:h,clusterKey:null,childShas:[],message:M||y,author:"You",date:E,kind:"stash"},U=`Stash ${e.index+1}`,L={name:U,commitsAhead:1,commitsBehind:0,lastCommitDate:E,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:p,divergedFromSha:h!=null?h:void 0,parentBranch:g||u},T=A3(i,a,h,p,U,u);return{branches:[L,...n],directCommits:T.directCommits,branchCommitPreviews:{...T.branchCommitPreviews,[U]:[A]},branchUniqueAheadCounts:{...c,[U]:1}}}function a2(e,n,i,a,c,u,d=!1){const h=[...e].sort((y,g)=>y.index-g.index);let p={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const y of h)p=D3(y,p.branches,p.directCommits,p.branchCommitPreviews,p.branchUniqueAheadCounts,u,d);return p}function pp({branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:y,manuallyOpenedClumps:g=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:w=null,orientation:C="horizontal"}){var W,K;const E=a2(y,e,i,u,h,c,(W=p==null?void 0:p.hasUncommittedChanges)!=null?W:!1);let M=E.branches,A=E.directCommits,U=E.branchCommitPreviews,L=E.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const de=p.headSha||p.parentSha||null,he=(H,pe)=>!H||!pe?!1:H===pe||H.startsWith(pe)||pe.startsWith(H),ye=p.branchName?M.find(H=>H.name===p.branchName):void 0,Re=(()=>{var pe;if(!de)return null;const H=A.find(we=>he(we.fullSha,de)||he(we.sha,de));if(H!=null&&H.date)return H.date;if(ye){const we=((pe=U[ye.name])!=null?pe:[]).find(I=>he(I.fullSha,de)||he(I.sha,de));if(we!=null&&we.date)return we.date}return null})(),Ge=Re?new Date(Re).getTime():Number.NaN,oe=Date.now(),me=Number.isFinite(Ge)?Math.max(oe,Ge+1):oe,O=new Date(me).toISOString(),ae={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:de,message:"Local uncommitted changes",author:"You",date:O,kind:"uncommitted"};ye?(M=M.map(H=>H.name===ye.name?{...H,commitsAhead:H.commitsAhead+1,unpushedCommits:H.unpushedCommits+1,lastCommitDate:O,headSha:"WORKING_TREE"}:H),U={...U,[ye.name]:[ae,...U[ye.name]||[]]},L={...L,[ye.name]:Math.max(0,(K=Object.prototype.hasOwnProperty.call(L,ye.name)?L[ye.name]:ye.commitsAhead)!=null?K:0)+1}):U={...U,[c]:[ae,...U[c]||[]]}}const T={...d};T[c]=null;const G=jp(M,c,U,T),F=Mp({lanes:G,branches:M,mergeNodes:n,directCommits:A,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:U,branchParentByName:T,branchUniqueAheadCounts:L,manuallyOpenedClumps:g,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:w,checkedOutRef:p,orientation:C});return{enrichedBranches:M,enrichedBranchCommitPreviews:U,enrichedBranchUniqueAheadCounts:L,enrichedDirectCommits:A,sharedGridLayoutModel:F}}const cx="git-visualizer:expanded-projects",ux="git-visualizer:expanded-branches";function R3(e,n){var u;const i=new Map(e.map(d=>[d.name,d])),a=new Map;for(const d of e){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const y=(u=a.get(h))!=null?u:[];y.push(d.name),a.set(h,y)}const c=(d,h)=>{var g,x,b,w;const p=new Date((x=(g=i.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((w=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-y};for(const[d,h]of a.entries())h.sort(c);return a}function B3(e,n,i){const a=new Map(e.map(d=>[d.name,d])),c=(d,h)=>{var g,x,b,w;const p=new Date((x=(g=a.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((w=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-y},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return e.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function L3(e,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const y of d){const g=[...h,y];if(y===i.branchName){for(const x of g)c.add(x);return!0}if(u((p=n.get(y))!=null?p:[],g))return!0}return!1};return u(e,[]),c}function vm(e,n){if(!e||!n)return!1;const i=u=>{const d=u.replace(/\\/g,"/").replace(/\/+$/,""),h=new Set([d]);return d.startsWith("/private/")&&h.add(d.slice(8)),Array.from(h)},a=i(e),c=i(n);for(const u of a)for(const d of c)if(u===d||u.toLowerCase()===d.toLowerCase())return!0;return!1}function _p({branchName:e,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:x,showCommits:b,getMergeTargetLabels:w,sourceBranchName:C,clusterKeyByCommitId:E,unpushedCommitShasByBranch:M,isGridClusterOpen:A,onToggleGridCluster:U,onSelectCommit:L,onSelectBranch:T,isActiveProject:G}){var Ce,Te;if(x.has(e))return null;const F=a.get(e);if(!F)return null;const W=(Ce=u.get(e))!=null?Ce:[],K=W.length>0,de=_.useMemo(()=>{var _e;return[...(_e=c[e])!=null?_e:[]]},[c,e]),he=b&&de.length>0,ye=b,Re=K||he,Ge=h.has(e),oe=ye?de:[],me=Ge&&oe.length>0,O=y===e||g!=null&&F.headSha===g,ae=new Set(x);ae.add(e);const H="top-[-0.45rem] h-5 w-[10px]",pe="rounded-bl-[7px]",we="left-[0.65rem]",I=new Map,ce=[];for(const _e of W){const Oe=d.get(_e);if(Oe){const Je=oe.findIndex(We=>Oi(We.fullSha,Oe)||Oi(We.sha,Oe));if(Je>=0){const We=(Te=I.get(Je))!=null?Te:[];We.push(_e),I.set(Je,We);continue}}ce.push(_e)}const ee=_.useMemo(()=>{if(!b||oe.length===0)return[];const _e=[];let Oe=[],Je=null;const We=()=>{if(Oe.length===0)return;const pt=Oe[Oe.length-1],Tt=`sidebar-single-${e}-${pt.fullSha}`;_e.push({key:Je!=null?Je:Tt,commits:Oe,count:Oe.length,lead:pt}),Oe=[],Je=null};return oe.forEach(pt=>{var Ot,_t;const Tt=(Ot=E.get(`${e}:${pt.fullSha}`))!=null?Ot:null,Ct=((_t=M[e])!=null?_t:[]).includes(pt.fullSha),ut=`${Tt!=null?Tt:`sidebar-single-${e}-${pt.fullSha}`}:${Ct?"unpushed":"pushed"}`;if(Oe.length===0){Oe=[pt],Je=ut;return}if(ut===Je){Oe.push(pt);return}We(),Oe=[pt],Je=ut}),We(),_e},[e,b,oe,E,M]);return l.jsxs("li",{className:pn("relative flex flex-col gap-1",n>0?"pl-4":"pl-0",Ge?"mb-2.5":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:pn("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",pe,we,H)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:pn("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.25rem]",we)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("div",{className:pn("branch-row","group flex min-w-0 flex-1 items-center gap-0 rounded-md px-2 h-6 text-left text-sm font-normal transition-colors hover:bg-border/50","text-inherit hover:text-inherit"),"data-active-project":G?"true":"false","data-checked-out-branch":O?"true":"false",style:{color:G?O?"var(--checked)":"var(--foreground)":"var(--muted-foreground)"},role:"button",tabIndex:0,onClick:()=>{G?T==null||T(e):Re?p(e):T==null||T(e)},onKeyDown:_e=>{(_e.key==="Enter"||_e.key===" ")&&(_e.preventDefault(),G?T==null||T(e):Re?p(e):T==null||T(e))},children:[Re?l.jsx("button",{type:"button","aria-label":`${Ge?"Collapse":"Expand"} ${e}`,onPointerDown:_e=>{_e.preventDefault()},onClick:_e=>{_e.preventDefault(),_e.stopPropagation(),p(e)},className:"group/chevron branch-chevron flex h-6 w-6 -ml-2 shrink-0 items-center justify-center rounded-sm p-0 text-[10px] leading-none transition-colors hover:bg-border/50",children:l.jsx(gw,{"aria-hidden":"true",className:pn("h-3.5 w-3.5 shrink-0 transition-transform text-current",Ge?"rotate-90":"")})}):null,l.jsx("span",{className:pn("branch-label min-w-0 flex-1 truncate font-normal whitespace-nowrap overflow-hidden","font-medium"),children:e})]})}),me?l.jsx("ul",{className:"relative space-y-1 pl-4",children:ee.map(_e=>{const Oe=_e.count>1&&!A(_e.key);return(Oe?[_e.lead]:_e.commits).map(We=>{var Ct;const pt=oe.findIndex(ut=>ut.fullSha===We.fullSha),Tt=w(We.fullSha,C!=null?C:e);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>L==null?void 0:L(We.fullSha),className:"min-w-0 flex-1 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-muted hover:text-muted-foreground",title:We.message,children:[l.jsx("span",{className:"block truncate",children:We.message}),Tt.length>0?l.jsx("span",{className:"mt-0 block space-y-2",children:Tt.map(ut=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:ut})]},`${We.fullSha}:${ut}`))}):null]}),_e.count>1&&We.fullSha===_e.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${e}:${_e.lead.fullSha}`,onClick:()=>U(_e.key,`${e}:${_e.lead.fullSha}`),className:pn("shrink-0 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-muted hover:text-muted-foreground",Oe?"":"min-w-[2ch] text-center"),children:Oe?`+${Math.max(1,_e.count-1)}`:"−"}):null]}),(Ct=I.get(pt))!=null&&Ct.length?l.jsx("ul",{className:"relative space-y-1",children:I.get(pt).map((ut,Ot,_t)=>l.jsx(_p,{branchName:ut,depth:n+1,isLast:Ot===_t.length-1&&ce.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:ae,showCommits:b,getMergeTargetLabels:w,sourceBranchName:ut,clusterKeyByCommitId:E,unpushedCommitShasByBranch:M,isGridClusterOpen:A,onToggleGridCluster:U,onSelectCommit:L,onSelectBranch:T,isActiveProject:G},ut))}):null]},`${e}:${We.fullSha}`)})})}):null,K&&Ge&&ce.length>0?l.jsx("ul",{className:"relative space-y-1",children:ce.map((_e,Oe)=>l.jsx(_p,{branchName:_e,depth:n+1,isLast:Oe===ce.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:ae,showCommits:b,getMergeTargetLabels:w,sourceBranchName:_e,clusterKeyByCommitId:E,unpushedCommitShasByBranch:M,isGridClusterOpen:A,onToggleGridCluster:U,onSelectCommit:L,onSelectBranch:T,isActiveProject:G},_e))}):null]})}function O3({open:e}){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-4 w-4 shrink-0 transition-opacity",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e?l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.7031 19H5.97457C4.96341 19 4.11131 18.2453 3.9892 17.2415L2.77269 7.24152C2.62773 6.04996 3.5577 5 4.75805 5H7C7.64911 5 8.28071 5.21053 8.8 5.6L9.2 5.9C9.71929 6.28947 10.3509 6.5 11 6.5H16.2369C17.2445 6.5 18.0947 7.24955 18.2211 8.2492L18.4938 10.4062",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M5.21532 12.0419C5.42789 11.1385 6.23405 10.5 7.16215 10.5H19.8105C20.7133 10.5 21.38 11.3419 21.1733 12.2207L19.9409 17.4581C19.7284 18.3615 18.9222 19 17.9941 19H6.10333C4.81363 19 3.8611 17.7973 4.1565 16.5419L5.21532 12.0419Z",stroke:"currentColor",strokeWidth:"1.5"})]}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 7C4 5.89543 4.89543 5 6 5H9C9.64911 5 10.2807 5.21053 10.8 5.6L11.2 5.9C11.7193 6.28947 12.3509 6.5 13 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 10.5L12.4211 10.5L20 10.5",stroke:"currentColor",strokeWidth:"1.5"})]})})}function z3({projects:e,activeProjectPath:n,onSelectProject:i,onAddProject:a,onRemoveProject:c,onRevealProjectInFinder:u,onReorderProjects:d,projectLoading:h=!1,projectError:p=null,checkedOutRef:y,manuallyOpenedClumpsByProject:g={},manuallyClosedClumpsByProject:x={},manuallyOpenedClumps:b,manuallyClosedClumps:w,setManuallyOpenedClumps:C,setManuallyClosedClumps:E,gridLayoutModel:M,onSelectCommit:A,onSelectBranch:U,showCommits:L,className:T,style:G,collapsed:F=!1}){var Ve,De;const W=_.useRef(null),K=_.useRef(null),[de,he]=_.useState(()=>{if(typeof window>"u")return new Set;try{const ge=window.localStorage.getItem(cx);if(ge){const ot=JSON.parse(ge);if(Array.isArray(ot)){const qe=new Set;for(const nt of ot)typeof nt=="string"&&qe.add(nt);return qe}}}catch{}return new Set}),[ye,Re]=_.useState({}),[Ge,oe]=_.useState(()=>new Set),[me,O]=_.useState(()=>new Set),[ae,H]=_.useState(null),pe=b!=null?b:Ge,we=w!=null?w:me,I=C!=null?C:oe,ce=E!=null?E:O,[ee,Ce]=_.useState(null),[Te,_e]=_.useState(null),[Oe,Je]=_.useState(null),[We,pt]=_.useState(null),[Tt,Ct]=_.useState(null),[ut,Ot]=_.useState(null),[_t,Gt]=_.useState(null),en=_.useRef(new Map),J=_.useRef(!1),Be=_.useRef(null),dt=_.useRef(null),at=ge=>{try{window.localStorage.setItem(cx,JSON.stringify(Array.from(ge)))}catch{}},gt=ge=>{try{const ot=Object.fromEntries(Object.entries(ge).map(([qe,nt])=>[qe,Array.from(nt)]));window.localStorage.setItem(ux,JSON.stringify(ot))}catch{}};_.useEffect(()=>{at(de)},[de]),_.useEffect(()=>{try{const ge=window.localStorage.getItem(ux);if(!ge)return;const ot=JSON.parse(ge);if(!ot||typeof ot!="object")return;const qe={};for(const[nt,Ie]of Object.entries(ot)){if(!Array.isArray(Ie))continue;const tt=new Set;for(const xt of Ie)typeof xt=="string"&&tt.add(xt);qe[nt]=tt}Re(qe)}catch{}},[]),_.useEffect(()=>{gt(ye)},[ye]);const He=e,bt=_.useMemo(()=>{if(!We)return He;const ge=He.find(Ie=>Ie.path===We);if(!ge)return He;const ot=He.filter(Ie=>Ie.path!==We);if(Tt==null)return ot;const qe=[...ot],nt=Math.max(0,Math.min(Tt,qe.length));return qe.splice(nt,0,ge),qe},[Tt,We,He]),yt=_.useCallback(ge=>{d==null||d(ge)},[d]),Mt=_.useCallback(()=>{Je(null),pt(null),Ct(null),Ot(null)},[]);_.useEffect(()=>{if(!Oe)return;const ge=qe=>{const nt=Be.current;!nt||!nt.active||Math.abs(qe.clientX-nt.startX)<=4&&Math.abs(qe.clientY-nt.startY)<=4||dt.current==null&&(dt.current=window.requestAnimationFrame(()=>{var Qe,Rt;dt.current=null;const Ie=Be.current;if(!Ie||!Ie.active)return;(Math.abs(qe.clientX-Ie.startX)>4||Math.abs(qe.clientY-Ie.startY)>4)&&(Ie.moved=!0,pt(Ie.path)),Ot({x:qe.clientX-Ie.offsetX,y:qe.clientY-Ie.offsetY,width:Ie.width});const xt=Array.from((Rt=(Qe=K.current)==null?void 0:Qe.querySelectorAll("[data-project-path]"))!=null?Rt:[]).filter(kt=>kt.dataset.projectPath&&kt.dataset.projectPath!==Ie.path);let wt=xt.length;if(xt.length>0)for(let kt=0;kt<xt.length;kt+=1){const mt=xt[kt].getBoundingClientRect(),Kt=mt.top+mt.height/2;if(qe.clientY<Kt){wt=kt;break}}Ct(wt)}))},ot=()=>{const qe=Be.current;if(Be.current=null,dt.current!=null&&(window.cancelAnimationFrame(dt.current),dt.current=null),!qe){Mt();return}if(!qe.moved){Mt();return}J.current=!0;const nt=He.map(Qe=>Qe.path);if(nt.indexOf(qe.path)<0){Mt();return}const tt=Tt;if(tt==null){Mt();return}const xt=nt.filter(Qe=>Qe!==qe.path),wt=Math.max(0,Math.min(tt,xt.length));xt.splice(wt,0,qe.path),yt(xt),Mt(),window.requestAnimationFrame(()=>{J.current=!1,H(null)})};return window.addEventListener("pointermove",ge),window.addEventListener("pointerup",ot),window.addEventListener("pointercancel",ot),()=>{window.removeEventListener("pointermove",ge),window.removeEventListener("pointerup",ot),window.removeEventListener("pointercancel",ot)}},[Mt,yt,Oe,Tt,He]);const $t=_.useCallback((ge,ot)=>{if(ge.button!==0)return;const qe=ge.currentTarget.getBoundingClientRect();Be.current={active:!0,path:ot,startX:ge.clientX,startY:ge.clientY,offsetX:ge.clientX-qe.left,offsetY:ge.clientY-qe.top,width:qe.width,moved:!1},Je(ot),pt(null),Ct(null),Ot({x:ge.clientX-qe.left,y:ge.clientY-qe.top,width:qe.width})},[]),st=(Ve=M==null?void 0:M.defaultCollapsedClumps)!=null?Ve:new Set,B=ge=>pe.has(ge)||!st.has(ge)&&!we.has(ge),te=(ge,ot)=>{const qe=W.current,nt=K.current;if(qe&&nt){const Ie=`[data-clump-toggle-id="${ot}"]`,tt=qe.querySelector(Ie);if(tt){const xt=tt.getBoundingClientRect().top-nt.getBoundingClientRect().top;_e({id:ot,topWithinScrollBody:xt})}else _e(null)}else _e(null);Ce(ot),I(Ie=>{const tt=new Set(Ie),xt=B(ge);return ce(wt=>{const Qe=new Set(wt);return xt?(tt.delete(ge),Qe.add(ge)):(Qe.delete(ge),tt.add(ge)),Qe}),tt})};_.useLayoutEffect(()=>{if(!ee)return;const ge=W.current,ot=K.current;if(!ge||!ot)return;const qe=`[data-clump-toggle-id="${ee}"]`,nt=ge.querySelector(qe);if(nt){if((Te==null?void 0:Te.id)===ee){const tt=nt.getBoundingClientRect().top-ot.getBoundingClientRect().top-Te.topWithinScrollBody;Number.isFinite(tt)&&tt!==0&&(ot.scrollTop+=tt)}nt.focus({preventScroll:!0}),Ce(null),_e(null)}},[pe,we,ee,Te]);const Se=(ge,ot)=>{Re(qe=>{var xt;const nt=(xt=qe[ge])!=null?xt:new Set,Ie=new Set(nt);Ie.has(ot)?Ie.delete(ot):Ie.add(ot);const tt={...qe,[ge]:Ie};return gt(tt),tt})};_.useEffect(()=>{if(ae==null)return;const ge=()=>{const qe=en.current.get(ae);if(!qe)return;const nt=qe.getBoundingClientRect();Gt({top:nt.bottom+8,right:Math.max(8,window.innerWidth-nt.right)})};ge();const ot=()=>H(null);return window.addEventListener("pointerdown",ot),window.addEventListener("resize",ge),window.addEventListener("scroll",ge,!0),()=>{window.removeEventListener("pointerdown",ot),window.removeEventListener("resize",ge),window.removeEventListener("scroll",ge,!0)}},[ae]);const Ne=_.useMemo(()=>{var ot,qe,nt,Ie,tt,xt,wt,Qe,Rt,kt,mt,Kt,ht,Ht,dn,Lt;const ge=new Map;for(const St of e){const fn=vm(St.path,n),ls=de.has(St.path);if(!fn&&!ls)continue;const sn=pp({branches:St.branches,mergeNodes:St.mergeNodes,directCommits:St.directCommits,unpushedDirectCommits:St.unpushedDirectCommits,defaultBranch:St.defaultBranch,branchCommitPreviews:St.branchCommitPreviews,branchUniqueAheadCounts:St.branchUniqueAheadCounts,checkedOutRef:St.checkedOutRef,stashes:St.stashes,manuallyOpenedClumps:(ot=g[St.path])!=null?ot:new Set,manuallyClosedClumps:(qe=x[St.path])!=null?qe:new Set}),Sn=sn.enrichedBranches.some(on=>on.name===St.defaultBranch)?sn.enrichedBranches:[{name:St.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...sn.enrichedBranches],tn=new Map(sn.sharedGridLayoutModel.nodes.map(on=>[on.commit.visualId,on.row])),Nt={};for(const on of sn.sharedGridLayoutModel.allCommits){const zn=(nt=Nt[on.branchName])!=null?nt:[];zn.push({fullSha:on.id,sha:on.id.slice(0,7),parentSha:(Ie=on.parentSha)!=null?Ie:null,message:on.message,author:on.author,date:on.date,kind:(tt=on.kind)!=null?tt:"commit"}),Nt[on.branchName]=zn}for(const on of Object.keys(Nt))Nt[on]=Nt[on].sort((zn,Cn)=>{var Xn,Us;const cs=new Date(zn.date).getTime(),_s=new Date(Cn.date).getTime();if(cs!==_s)return cs-_s;const vs=(Xn=tn.get(`${on}:${zn.fullSha}`))!=null?Xn:Number.MAX_SAFE_INTEGER,Wt=(Us=tn.get(`${on}:${Cn.fullSha}`))!=null?Us:Number.MAX_SAFE_INTEGER;return vs!==Wt?vs-Wt:zn.fullSha.localeCompare(Cn.fullSha)});const ln=(xt=sn.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?xt:new Map,rt=(on,zn)=>{const Cn=ln.get(zn);if(!Cn)return[];for(const[cs,_s]of Cn.entries())if(Oi(on,cs))return Array.from(_s).sort();return[]},Fn=R3(Sn,St.defaultBranch),Dn=B3(Sn,St.defaultBranch,Fn),yo=new Map(Sn.map(on=>[on.name,on])),On=new Map;for(const on of Sn){const zn=(Qe=(wt=sn.sharedGridLayoutModel.firstBranchCommitByName.get(on.name))==null?void 0:wt.parentSha)!=null?Qe:null,Cn=zn!=null?zn:null;On.set(on.name,Cn)}const Ds=(Rt=sn.sharedGridLayoutModel.defaultCollapsedClumps)!=null?Rt:new Set,In=(kt=g[St.path])!=null?kt:new Set,xo=(mt=x[St.path])!=null?mt:new Set,Ao=on=>In.has(on)||!Ds.has(on)&&!xo.has(on);ge.set(St.path,{rootBranchNames:Dn,branchByName:yo,branchCommitPreviewsFromLayout:Nt,childNamesByParent:Fn,branchAnchorShaByName:On,unpushedCommitShasByBranch:St.unpushedCommitShasByBranch,checkedOutBranchName:(ht=(Kt=St.checkedOutRef)==null?void 0:Kt.branchName)!=null?ht:null,checkedOutHeadSha:(dn=(Ht=St.checkedOutRef)==null?void 0:Ht.headSha)!=null?dn:null,clusterKeyByCommitId:(Lt=sn.sharedGridLayoutModel.clusterKeyByCommitId)!=null?Lt:new Map,getMergeTargetLabels:rt,isGridClusterOpen:Ao})}return ge},[n,de,x,g,e]),it=(ge,ot={})=>{var mt,Kt,ht,Ht,dn;const qe=(mt=ot.ghostMode)!=null?mt:!1,nt=(Kt=ot.hideLive)!=null?Kt:!1,Ie=vm(ge.path,n),tt=de.has(ge.path),xt=(ht=ge.treeLoaded)!=null?ht:ge.branches.length>0,wt=Ne.get(ge.path),Qe=(Ht=ye[ge.path])!=null?Ht:wt?L3(wt.rootBranchNames,wt.childNamesByParent,y,ge.defaultBranch):new Set,Rt=We===ge.path,kt=vm(ge.path,n);return l.jsxs(ui.div,{layout:"position",transition:{duration:.12,ease:"easeOut"},"data-project-path":ge.path,"data-active-project":kt?"true":"false",className:pn("project-row relative z-10 flex flex-col gap-1 transition-colors",tt&&wt?"mb-2.5":""),children:[Tt!==null&&We!==ge.path&&((dn=bt[Tt])==null?void 0:dn.path)===ge.path?l.jsx("div",{className:"h-px","aria-hidden":"true",children:l.jsx("div",{className:"mx-1 h-px bg-foreground/60"})}):null,l.jsxs("div",{className:pn("relative z-0 px-1",nt?"pointer-events-none opacity-0":""),children:[l.jsxs("div",{className:pn(qe?"group flex w-full items-center gap-0 rounded-lg px-0 h-6":"group sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-muted px-0 h-6 transition-all duration-100 ease-out hover:bg-border/50 cursor-grab active:cursor-grabbing",Rt&&!qe?"opacity-0":""),onPointerDownCapture:Lt=>{if(qe)return;const St=Lt.target;St!=null&&St.closest('.window-no-drag, button, input, textarea, select, [contenteditable="true"]')||$t(Lt,ge.path)},onClick:Lt=>{if(qe||kt||We===ge.path||J.current)return;const St=Lt.target;St!=null&&St.closest('button, input, textarea, select, [contenteditable="true"]')||i(ge.path)},children:[l.jsx("button",{type:"button",onPointerDown:Lt=>Lt.stopPropagation(),onClick:Lt=>{Lt.preventDefault(),Lt.stopPropagation(),he(St=>{const fn=new Set(St);return fn.has(ge.path)?fn.delete(ge.path):fn.add(ge.path),at(fn),fn})},"aria-expanded":tt,"aria-label":`${tt?"Collapse":"Expand"} ${ge.name}`,className:pn("project-icon flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-border/50",qe?"pointer-events-none":""),style:{color:kt?"var(--foreground)":"var(--muted-foreground)"},children:l.jsx(O3,{open:tt})}),l.jsx("span",{className:pn("project-name min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors","font-normal"),style:{color:kt?"var(--foreground)":"var(--muted-foreground)"},children:ge.name}),l.jsxs("div",{className:"relative z-[130] shrink-0",children:[l.jsx("button",{type:"button",onPointerDown:Lt=>Lt.stopPropagation(),"aria-label":`Project actions for ${ge.name}`,"aria-expanded":ae===ge.path,ref:Lt=>{en.current.set(ge.path,Lt)},onClick:Lt=>{Lt.stopPropagation();const St=Lt.currentTarget.getBoundingClientRect();Gt({top:St.bottom+8,right:Math.max(8,window.innerWidth-St.right)}),H(fn=>fn===ge.path?null:ge.path)},className:pn("pr-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md opacity-0 hover:bg-border/50 group-hover:opacity-100 text-current",qe?"pointer-events-none":""),children:l.jsx(vw,{className:"h-4 w-4 shrink-0"})}),ae===ge.path&&!qe&&_t&&typeof document<"u"?Il.createPortal(l.jsxs("div",{role:"menu",className:"fixed z-[10000] inline-flex w-max flex-col overflow-hidden rounded-md border border-border bg-background p-1",style:{top:`${_t.top}px`,right:`${_t.right}px`},onPointerDownCapture:Lt=>Lt.stopPropagation(),onClick:Lt=>Lt.stopPropagation(),children:[l.jsx("button",{type:"button",role:"menuitem",onPointerDown:Lt=>Lt.stopPropagation(),onClick:()=>{H(null),u(ge.path)},className:"flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",children:"Open in Finder"}),l.jsx("button",{type:"button",role:"menuitem",onPointerDown:Lt=>Lt.stopPropagation(),onClick:()=>{H(null),c(ge.path)},className:"project-menu-remove flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium",children:"Remove"})]}),document.body):null]})]}),tt?xt&&wt?l.jsx("ul",{className:pn("relative z-0 space-y-1 pt-0",qe?"opacity-70":""),children:wt.rootBranchNames.map((Lt,St)=>l.jsx(_p,{branchName:Lt,depth:0,isLast:St===wt.rootBranchNames.length-1,branchByName:wt.branchByName,branchCommitPreviews:wt.branchCommitPreviewsFromLayout,childNamesByParent:wt.childNamesByParent,branchAnchorShaByName:wt.branchAnchorShaByName,expandedBranchNames:Qe,onToggleBranch:fn=>Se(ge.path,fn),checkedOutBranchName:wt.checkedOutBranchName,checkedOutHeadSha:wt.checkedOutHeadSha,ancestors:new Set,showCommits:L,getMergeTargetLabels:wt.getMergeTargetLabels,sourceBranchName:Lt,clusterKeyByCommitId:wt.clusterKeyByCommitId,unpushedCommitShasByBranch:wt.unpushedCommitShasByBranch,isGridClusterOpen:wt.isGridClusterOpen,onToggleGridCluster:te,onSelectCommit:async fn=>{Ie||await i(ge.path),A==null||A(fn)},onSelectBranch:async fn=>{Ie||await i(ge.path),U==null||U(fn)},isActiveProject:kt},`${ge.path}:${Lt}`))}):l.jsx("p",{className:pn("px-2 py-2 text-xs text-muted-foreground",qe?"opacity-70":""),children:"Loading branch tree..."}):null]})]},ge.path)};return l.jsxs("aside",{ref:W,"aria-label":"Dense branch sidebar",className:pn("pointer-events-auto relative z-[120] h-full select-none overflow-hidden bg-muted",T),style:G,children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"absolute inset-x-0 top-0 z-80 h-12"}),l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[p&&l.jsx("div",{className:"px-2.5 pb-2",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:p})}),l.jsx("div",{className:pn("px-2 pb-2",F?"opacity-0 pointer-events-none":""),children:l.jsx("div",{className:"px-1",children:l.jsxs("button",{type:"button",onClick:a,disabled:h,"aria-label":"Add Repo",className:"window-no-drag group flex w-full items-center gap-0 rounded-lg bg-muted px-0 h-6 text-foreground transition-colors hover:bg-border/50 disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors group-hover:bg-border/50 text-foreground",children:l.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-4 w-4 shrink-0",children:l.jsx("path",{d:"M12 5V19M5 12H19",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}),l.jsx("span",{className:"min-w-0 flex-1 truncate pl-0 text-left text-sm font-normal text-foreground",children:"New Project"})]})})}),l.jsx("div",{ref:K,className:pn("sidebar-scrollbar min-h-0 flex-1 space-y-2 overflow-y-auto px-2",F?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:bt.map(ge=>it(ge,{hideLive:We===ge.path}))})]}),We&&ut?l.jsx("div",{"aria-hidden":"true",className:"pointer-events-none fixed left-0 top-0 z-[90]",style:{transform:`translate3d(${ut.x}px, ${ut.y}px, 0)`,width:`${ut.width}px`},children:it((De=e.find(ge=>ge.path===We))!=null?De:He.find(ge=>ge.path===We),{ghostMode:!0})}):null]})}function wm(e){return{branchByName:Array.from(e.branchByName.entries()),laneByName:Array.from(e.laneByName.entries()),mainCommits:e.mainCommits,branchCommitsByLane:Array.from(e.branchCommitsByLane.entries()),branchPreviewSets:Array.from(e.branchPreviewSets.entries()),allCommits:e.allCommits,clustersByBranch:Array.from(e.clustersByBranch.entries()),clusterKeyByCommitId:Array.from(e.clusterKeyByCommitId.entries()),clusterKeyBySha:Array.from(e.clusterKeyBySha.entries()),leadByClusterKey:Array.from(e.leadByClusterKey.entries()),clusterCounts:Array.from(e.clusterCounts.entries()),debugRows:e.debugRows,branchDebugRows:e.branchDebugRows,nodes:e.nodes,normalizedSearchQuery:e.normalizedSearchQuery,matchingNodes:e.matchingNodes,matchingNodeIds:Array.from(e.matchingNodeIds),focusedNode:e.focusedNode,checkedOutClusterKey:e.checkedOutClusterKey,defaultCollapsedClumps:Array.from(e.defaultCollapsedClumps),visibleCommitsList:e.visibleCommitsList,renderNodes:e.renderNodes,visibleNodesBySha:Array.from(e.visibleNodesBySha.entries()),visibleNodeByClusterKey:Array.from(e.visibleNodeByClusterKey.entries()),contentWidth:e.contentWidth,contentHeight:e.contentHeight,connectors:e.connectors,mergeConnectors:e.mergeConnectors,connectorDecisions:e.connectorDecisions,nodeWarnings:Array.from(e.nodeWarnings.entries()),connectorParentShas:Array.from(e.connectorParentShas),branchStartShas:Array.from(e.branchStartShas),branchOffNodeShas:Array.from(e.branchOffNodeShas),crossBranchOutgoingShas:Array.from(e.crossBranchOutgoingShas),commitIdsWithRenderedAncestry:Array.from(e.commitIdsWithRenderedAncestry),branchBaseCommitByName:Array.from(e.branchBaseCommitByName.entries()),firstBranchCommitByName:Array.from(e.firstBranchCommitByName.entries()),mergeDestinations:e.mergeDestinations,mergeTargetBranchesBySourceBranchAndCommitSha:Array.from(e.mergeTargetBranchesBySourceBranchAndCommitSha.entries()).map(([n,i])=>[n,Array.from(i.entries()).map(([a,c])=>[a,Array.from(c)])])}}function Sm(e){var i,a,c,u,d,h,p,y,g,x,b,w,C,E,M,A,U,L,T,G,F,W,K,de,he,ye,Re,Ge,oe,me,O,ae,H,pe,we,I,ce,ee,Ce;const n=new Map(((i=e.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?i:[]).map(([Te,_e])=>[Te,new Map(_e.map(([Oe,Je])=>[Oe,new Set(Je)]))]));return{branchByName:new Map((a=e.branchByName)!=null?a:[]),laneByName:new Map((c=e.laneByName)!=null?c:[]),mainCommits:(u=e.mainCommits)!=null?u:[],branchCommitsByLane:new Map((d=e.branchCommitsByLane)!=null?d:[]),branchPreviewSets:new Map((h=e.branchPreviewSets)!=null?h:[]),allCommits:(p=e.allCommits)!=null?p:[],clustersByBranch:new Map((y=e.clustersByBranch)!=null?y:[]),clusterKeyByCommitId:new Map((g=e.clusterKeyByCommitId)!=null?g:[]),clusterKeyBySha:new Map((x=e.clusterKeyBySha)!=null?x:[]),leadByClusterKey:new Map((b=e.leadByClusterKey)!=null?b:[]),clusterCounts:new Map((w=e.clusterCounts)!=null?w:[]),debugRows:(C=e.debugRows)!=null?C:[],branchDebugRows:(E=e.branchDebugRows)!=null?E:[],nodes:(M=e.nodes)!=null?M:[],normalizedSearchQuery:(A=e.normalizedSearchQuery)!=null?A:"",matchingNodes:(U=e.matchingNodes)!=null?U:[],matchingNodeIds:new Set((L=e.matchingNodeIds)!=null?L:[]),focusedNode:(T=e.focusedNode)!=null?T:null,checkedOutClusterKey:(G=e.checkedOutClusterKey)!=null?G:null,defaultCollapsedClumps:new Set((F=e.defaultCollapsedClumps)!=null?F:[]),visibleCommitsList:(W=e.visibleCommitsList)!=null?W:[],renderNodes:(K=e.renderNodes)!=null?K:[],visibleNodesBySha:new Map((de=e.visibleNodesBySha)!=null?de:[]),visibleNodeByClusterKey:new Map((he=e.visibleNodeByClusterKey)!=null?he:[]),pointFormatter:(Te,_e)=>`${Te},${_e}`,contentWidth:(ye=e.contentWidth)!=null?ye:0,contentHeight:(Re=e.contentHeight)!=null?Re:0,connectors:(Ge=e.connectors)!=null?Ge:[],mergeConnectors:(oe=e.mergeConnectors)!=null?oe:[],connectorDecisions:(me=e.connectorDecisions)!=null?me:[],nodeWarnings:new Map((O=e.nodeWarnings)!=null?O:[]),connectorParentShas:new Set((ae=e.connectorParentShas)!=null?ae:[]),branchStartShas:new Set((H=e.branchStartShas)!=null?H:[]),branchOffNodeShas:new Set((pe=e.branchOffNodeShas)!=null?pe:[]),crossBranchOutgoingShas:new Set((we=e.crossBranchOutgoingShas)!=null?we:[]),commitIdsWithRenderedAncestry:new Set((I=e.commitIdsWithRenderedAncestry)!=null?I:[]),branchBaseCommitByName:new Map((ce=e.branchBaseCommitByName)!=null?ce:[]),firstBranchCommitByName:new Map((ee=e.firstBranchCommitByName)!=null?ee:[]),mergeDestinations:(Ce=e.mergeDestinations)!=null?Ce:[],mergeTargetBranchesBySourceBranchAndCommitSha:n}}const md="git-visualizer:projects",Cm="git-visualizer:active-project",dx="git-visualizer:map-orientation",pd=12,fx=1400,$3=180,hx="git-visualizer:sidebar-width",mx="git-visualizer:sidebar-collapsed",px="git-visualizer:grid-clumps",_x=360,gx=180,yx=360;function Po(e){return e==="/"?e:e.replace(/\/+$/,"")}function km(e,n){return!e||!n?!1:Po(e).toLowerCase()===Po(n).toLowerCase()}function I3(...e){return e.filter(Boolean).join(" ")}function jm(e){var a;if(!e)return"";const i=e.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function Qd(e){return e.size===0?"__none__":Array.from(e).sort().join(",")}function _d(e,n,i,a){return["layout-v3",e,n,Qd(i),Qd(a)].join("|")}function xx(e){var n,i;return[e.path,e.name,e.defaultBranch,e.updatedAtMs,e.branches.map(a=>[a.name,a.headSha,a.commitsAhead,a.commitsBehind,a.unpushedCommits,a.remoteSyncStatus,a.status,a.lastCommitDate].join(":")).join("|"),e.mergeNodes.map(a=>[a.fullSha,a.targetBranch,a.targetCommitSha].join(":")).join("|"),e.directCommits.map(a=>a.fullSha).join("|"),e.unpushedDirectCommits.map(a=>a.fullSha).join("|"),e.checkedOutRef?[(n=e.checkedOutRef.branchName)!=null?n:"",e.checkedOutRef.headSha,(i=e.checkedOutRef.parentSha)!=null?i:"",e.checkedOutRef.hasUncommittedChanges?"1":"0"].join(":"):"__none__",Object.entries(e.unpushedCommitShasByBranch).map(([a,c])=>`${a}:${c.join(",")}`).join("|"),Object.entries(e.branchCommitPreviews).map(([a,c])=>`${a}:${c.map(u=>u.fullSha).join(",")}`).join("|"),Object.entries(e.branchParentByName).map(([a,c])=>`${a}:${c!=null?c:""}`).join("|"),Object.entries(e.laneByBranch).map(([a,c])=>`${a}:${c}`).join("|"),Object.entries(e.branchUniqueAheadCounts).map(([a,c])=>`${a}:${c}`).join("|")].join("@@")}function gd(e){var n,i;return(i=(n=e==null?void 0:e.payload)==null?void 0:n.repoVisualSnapshot)!=null?i:null}function P3(){var V,Z,q;const[e,n]=_.useState(null),[i,a]=_.useState(""),[c,u]=_.useState([]),[d,h]=_.useState({}),[p,y]=_.useState(!1),[g,x]=_.useState([]),[b,w]=_.useState([]),[C,E]=_.useState([]),[M,A]=_.useState([]),[U,L]=_.useState({}),[T,G]=_.useState("main"),[F,W]=_.useState(null),[K,de]=_.useState([]),[he,ye]=_.useState(!1),[Re,Ge]=_.useState(""),[oe,me]=_.useState(0),[O,ae]=_.useState(1),[H,pe]=_.useState({}),[we,I]=_.useState({}),[ce,ee]=_.useState(null),[Ce,Te]=_.useState(null),[_e,Oe]=_.useState(null),[Je,We]=_.useState(!1),[pt,Tt]=_.useState(!1),[Ct,ut]=_.useState(0),[Ot,_t]=_.useState(!1),[Gt,en]=_.useState("loading"),[J,Be]=_.useState(null),[dt,at]=_.useState(null),[gt,He]=_.useState(!1),[bt,yt]=_.useState(null),[Mt,$t]=_.useState(!1),[st,B]=_.useState(null),[te,Se]=_.useState(!1),[Ne,it]=_.useState(!1),[Ve,De]=_.useState(!1),[ge,ot]=_.useState(!1),[qe,nt]=_.useState({}),[Ie,tt]=_.useState({}),[xt,wt]=_.useState({}),[Qe,Rt]=_.useState({}),[kt,mt]=_.useState({}),[Kt,ht]=_.useState([]),[Ht,dn]=_.useState([]),[Lt,St]=_.useState(!1),[fn,ls]=_.useState(!1),[sn,Sn]=_.useState(!1),[tn,Nt]=_.useState(!1),ln=fn||sn||Lt||Ve||ge||Ne||he||tn,[rt,Fn]=_.useState(!1),[Dn,yo]=_.useState("horizontal"),[On]=_.useState(null),[Ds]=_.useState(null),[In]=_.useState(null),[xo]=_.useState(!1),[Ao,on]=_.useState(!1),[zn,Cn]=_.useState(_x),[cs,_s]=_.useState(!1),vs=_.useRef(null),Wt=_.useRef(0),Xn=_.useRef(0),Us=_.useRef(0),ws=_.useRef({}),bo=_.useRef(null),co=_.useRef({}),gs=_.useRef({}),us=_.useRef(!1),_n=_.useRef(null),ti=_.useRef(_x),fi=_.useRef(null),uo=_.useRef(null),Ji=_.useRef(!1),Vs=_.useRef(!1),Ys=_.useRef(!1);_.useRef(!1);const Ss=_.useRef(new Set),[Gn,kn]=_.useState(!1),Ws=_.useRef([]),vn=_.useRef([]),ys=_.useRef(null),Si=_.useRef([]),Vo=_.useRef([]),Ci=_.useRef([]),Qt=_.useRef({}),zi=_.useRef([]),Rs=_.useRef({}),Ls=_.useRef(new Map),Fs=_.useRef(new Set),Yo=_.useRef(null),[Zs,Js]=_.useState(null),[fo,gn]=_.useState(null),xs=e!=null?e:"__no-repo__",Xs=(S,k)=>{try{const D={opened:Object.fromEntries(Object.entries(S).map(([z,$])=>[z,Array.from($)])),closed:Object.fromEntries(Object.entries(k).map(([z,$])=>[z,Array.from($)]))};window.localStorage.setItem(px,JSON.stringify(D))}catch{}};_.useEffect(()=>{var S,k;try{const D=window.localStorage.getItem(px);if(!D)return;const z=JSON.parse(D);if(!z||typeof z!="object")return;const $={},le={},ve=z;for(const[Y,se]of Object.entries((S=ve.opened)!=null?S:{}))Array.isArray(se)&&($[Y]=new Set(se.filter(re=>typeof re=="string")));for(const[Y,se]of Object.entries((k=ve.closed)!=null?k:{}))Array.isArray(se)&&(le[Y]=new Set(se.filter(re=>typeof re=="string")));pe($),I(le)}catch{}},[]),_.useEffect(()=>{Xs(H,we)},[we,H]);const es=_.useMemo(()=>{var S;return(S=H[xs])!=null?S:new Set},[xs,H]),ds=_.useMemo(()=>{var S;return(S=we[xs])!=null?S:new Set},[xs,we]),hn=_.useCallback(S=>{pe(k=>{var le;const D=(le=k[xs])!=null?le:new Set,z=typeof S=="function"?S(D):S,$={...k,[xs]:new Set(z)};return Xs($,we),$})},[xs,we]),Os=_.useCallback(S=>{I(k=>{var le;const D=(le=k[xs])!=null?le:new Set,z=typeof S=="function"?S(D):S,$={...k,[xs]:new Set(z)};return Xs(H,$),$})},[xs,H]),eo=_.useMemo(()=>c.map(S=>{var z,$,le,ve,Y,se,re,ie,ze,Me,et,Ke,vt,ft,lt;const k=(()=>{if(!e)return!1;const Jt=Po(S.path).toLowerCase(),zt=Po(e).toLowerCase();return Jt===zt})(),D=(z=d[S.path])!=null?z:{};return{...S,...D,branches:($=D.branches)!=null?$:[],mergeNodes:(le=D.mergeNodes)!=null?le:[],directCommits:(ve=D.directCommits)!=null?ve:[],unpushedDirectCommits:(Y=D.unpushedDirectCommits)!=null?Y:[],unpushedCommitShasByBranch:(se=D.unpushedCommitShasByBranch)!=null?se:{},checkedOutRef:k?F:(re=D.checkedOutRef)!=null?re:null,worktrees:(ie=D.worktrees)!=null?ie:[],stashes:(ze=D.stashes)!=null?ze:[],branchCommitPreviews:(Me=D.branchCommitPreviews)!=null?Me:{},laneByBranch:(et=D.laneByBranch)!=null?et:{},branchUniqueAheadCounts:(Ke=D.branchUniqueAheadCounts)!=null?Ke:{},defaultBranch:(ft=(vt=D.defaultBranch)!=null?vt:S.branchName)!=null?ft:"main",treeLoaded:(lt=D.loaded)!=null?lt:!1}}),[c,d,e,F]),ni=_.useMemo(()=>({githubAuthStatus:dt,githubAuthLoading:gt,onGitHubAuthSetup:Gs,onForceDbRefresh:Ii,forceDbRefreshLoading:Mt,gridSearchQuery:Re,setGridSearchQuery:Ge,gridSearchResultCount:ce,gridSearchResultIndex:Ce,setGridSearchJumpDirection:ae,setGridSearchJumpToken:me,mapGridOrientation:Dn,setMapGridOrientation:yo,setIsGridDebugOpen:on,githubAuthMessage:bt,commitSwitchFeedback:st,isCommitSwitchFeedbackVisible:te}),[st,gt,bt,dt,Mt,Re,ce,Ce,Ii,Gs,te,Dn,Ge,ae,me,on,yo]);function Cs(S,k){const D=xx(k);return ws.current[S]===D?!1:(ws.current={...ws.current,[S]:D},h($=>$[S]===k?$:{...$,[S]:k}),!0)}function ki(S){var k;return[S.repoPath,S.defaultBranch,S.headSha,(k=S.upstreamSha)!=null?k:"",S.hasUncommittedChanges?"1":"0",S.branchCount,S.worktreeCount,S.stashCount].join("|")}function Wo(S){var k;return[S.repoPath,S.headSha,(k=S.upstreamSha)!=null?k:"",S.hasUncommittedChanges?"1":"0"].join("|")}function Fo(S,k){var D,z,$,le,ve,Y;return{repoPath:S,headSha:(z=(D=k.checkedOutRef)==null?void 0:D.headSha)!=null?z:"",upstreamSha:(le=($=k.checkedOutRef)==null?void 0:$.parentSha)!=null?le:null,hasUncommittedChanges:(Y=(ve=k.checkedOutRef)==null?void 0:ve.hasUncommittedChanges)!=null?Y:!1}}function No(S,k,D){var z,$,le,ve,Y,se;return{repoPath:S,defaultBranch:k,headSha:($=(z=D.checkedOutRef)==null?void 0:z.headSha)!=null?$:"",upstreamSha:(ve=(le=D.checkedOutRef)==null?void 0:le.parentSha)!=null?ve:null,hasUncommittedChanges:(se=(Y=D.checkedOutRef)==null?void 0:Y.hasUncommittedChanges)!=null?se:!1,branchCount:D.branches.length,worktreeCount:D.worktrees.length,stashCount:D.stashes.length}}_.useEffect(()=>{try{const S=localStorage.getItem(md);if(!S)return;const k=JSON.parse(S);if(!Array.isArray(k))return;const D=k.filter(z=>typeof z=="object"&&z!==null&&typeof z.path=="string"&&typeof z.name=="string"&&typeof z.lastOpenedAt=="number");u(D.slice(0,pd))}catch{u([])}},[]),_.useEffect(()=>{try{const S=window.localStorage.getItem(dx);(S==="vertical"||S==="horizontal")&&yo(S)}catch{}},[]),_.useEffect(()=>{var D;if(Ys.current||e||c.length===0||!Gn)return;const S=(()=>{try{return window.localStorage.getItem(Cm)}catch{return null}})(),k=S?c.find(z=>Po(z.path).toLowerCase()===Po(S).toLowerCase()):null;Ys.current=!0,wo((D=k==null?void 0:k.path)!=null?D:c[0].path)},[Gn,c,e]),_.useEffect(()=>{if(e)try{window.localStorage.setItem(Cm,e)}catch{}},[e]),_.useEffect(()=>{try{window.localStorage.setItem(dx,Dn)}catch{}},[Dn]);const si=_.useMemo(()=>b.reduce((S,k)=>(S[k.targetCommitSha]=k.targetBranch,S),{}),[b]);_.useEffect(()=>{e&&(us.current||h(S=>{var k,D,z,$;return{...S,[e]:{path:e,name:i||jm(e),branches:g,mergeNodes:b,directCommits:C,unpushedDirectCommits:M,mergeTargetBranchByCommitSha:b.reduce((le,ve)=>(le[ve.targetCommitSha]=ve.targetBranch,le),{}),unpushedCommitShasByBranch:U,checkedOutRef:F,worktrees:K,stashes:Kt,branchCommitPreviews:Ie,branchParentByName:xt,laneByBranch:Qe,branchUniqueAheadCounts:kt,defaultBranch:T,loaded:!0,cacheSchemaVersion:(D=(k=S[e])==null?void 0:k.cacheSchemaVersion)!=null?D:1,updatedAtMs:($=(z=S[e])==null?void 0:z.updatedAtMs)!=null?$:Date.now()}}}))},[e,i,g,b,C,M,si,U,F,K,Kt,Ie,xt,Qe,kt,T]);async function Xo(S,k=!1){var z;const D=Po(S);if(D&&!Ss.current.has(D)&&!(!k&&((z=d[D])!=null&&z.loaded))){Ss.current.add(D),D===e&&y(!0);try{let $=null;k?$=await je("add_project_and_ingest",{repoPath:D}):($=await je("load_project_snapshot",{projectId:D}),$||($=await je("add_project_and_ingest",{repoPath:D})));const le=gd($);if(!le)throw new Error("Missing repo visual snapshot payload");Cs(D,le)}finally{Ss.current.delete(D),D===e&&Ss.current.size===0&&y(!1)}}}_.useEffect(()=>{if(c.length===0){kn(!0);return}let S=!1;const k=!1;return(async()=>{try{await Promise.all(c.map(async D=>{await Xo(D.path,k),await je("watch_repo",{repoPath:D.path}).catch(console.error)}))}catch(D){console.error("Failed to preload project snapshots:",D)}S||(kn(!0),y(!1))})(),()=>{S=!0}},[c]),_.useEffect(()=>{let S=!1,k=null;return Ic("git-activity",D=>{if(S)return;const z=Po(D.payload.repoPath);!z||km(z,e)||Xo(z,!1)}).then(D=>{S?D():k=D}).catch(console.error),()=>{S=!0,k&&k()}},[e]),_.useEffect(()=>{if(pt||us.current||c.length===0)return;let S=!1;return(async()=>{var k,D;for(const z of c){const $=Po(z.path),le=d[$];if(!(le!=null&&le.loaded))continue;const ve=(k=H[$])!=null?k:new Set,Y=(D=we[$])!=null?D:new Set,se=_d($,Dn,ve,Y);if(Ls.current.has(se))continue;const re=await je("get_repo_layout_snapshot",{repoPath:$,layoutKey:se}).catch(()=>null);if(S)return;if(re)try{const et=JSON.parse(re),Ke=Sm(et);Ls.current.set(se,Ke),Fs.current.add(se);continue}catch{}const ze=pp({branches:le.branches,mergeNodes:le.mergeNodes,directCommits:le.directCommits,unpushedDirectCommits:le.unpushedDirectCommits,defaultBranch:le.defaultBranch,branchCommitPreviews:le.branchCommitPreviews,branchParentByName:le.branchParentByName,branchUniqueAheadCounts:le.branchUniqueAheadCounts,checkedOutRef:le.checkedOutRef,stashes:le.stashes,manuallyOpenedClumps:ve,manuallyClosedClumps:Y,gridSearchQuery:"",gridFocusSha:null,orientation:Dn}).sharedGridLayoutModel;Ls.current.set(se,ze),Fs.current.add(se);const Me=JSON.stringify(wm(ze));if(je("store_repo_layout_snapshot",{repoPath:$,layoutKey:se,payloadJson:Me}).catch(()=>{Fs.current.delete(se)}),await Ms(),S)return}})(),()=>{S=!0}},[c,d,Dn,H,we,pt]);function qn(S){u(k=>{const D=Po(S.path);if(!D)return k;const z={...S,path:D},le=(k.some(ve=>ve.path===D)?k.map(ve=>ve.path===D?z:ve):[...k,z]).slice(-pd);try{localStorage.setItem(md,JSON.stringify(le))}catch{}return le})}function ho(S){u(k=>{const D=new Map(k.map($=>[$.path,$])),z=[];for(const $ of S){const le=D.get($);le&&(z.push(le),D.delete($))}for(const $ of k)D.has($.path)&&z.push($);try{localStorage.setItem(md,JSON.stringify(z.slice(0,pd)))}catch{}return z.slice(0,pd)})}async function Go(S){const k=Po(S);if(k){Be(null);try{const[D,z]=await Promise.all([je("get_repo_info",{repoPath:k}),je("get_default_branch",{repoPath:k}).catch(()=>"main")]);qn({path:k,name:D.name,lastOpenedAt:Date.now(),branchName:z}),await Xo(k,!1)}catch(D){Be(D instanceof Error?D.message:String(D))}}}function Bs(S){var D,z;const k=Po(S);if(k){u($=>{const le=$.filter(ve=>ve.path!==k);try{localStorage.setItem(md,JSON.stringify(le))}catch{}return le});try{e&&Po(e).toLowerCase()===k.toLowerCase()&&window.localStorage.removeItem(Cm)}catch{}if(h($=>{if(!(k in $))return $;const le={...$};return delete le[k],le}),e===k){const $=(z=(D=c.find(le=>le.path!==k))==null?void 0:D.path)!=null?z:null;$?wo($):(n(null),a(""),x([]),w([]),E([]),A([]),L({}),W(null),de([]),ht([]),tt({}),wt({}),Rt({}),mt({}))}}}async function mo(S){const k=Po(S);if(k)try{await je("reveal_in_finder",{path:k})}catch(D){Be(D instanceof Error?D.message:String(D))}}const qo=()=>{(async()=>{var S,k;try{const D=await cw({directory:!0,multiple:!1,defaultPath:(k=(S=c[0])==null?void 0:S.path)!=null?k:void 0});typeof D=="string"&&D&&await Go(D)}catch(D){Be(D instanceof Error?D.message:String(D))}})()};async function zs(S,k){const z=[];let $=0;for(;;){const le=await je("get_merge_nodes",{repoPath:S,branch:k,page:$,perPage:100});if(z.push(...le.nodes),!le.hasMore||le.nodes.length===0)break;$+=1}return z}async function ts(S,k,D){const z=Array.from(new Set([D,...k.map(ve=>ve.name)].filter(ve=>!!ve)));if(z.length===0)return[];const $=await Promise.all(z.map(ve=>zs(S,ve).catch(()=>[]))),le=new Map;for(const ve of $)for(const Y of ve){const se=`${Y.targetCommitSha}:${Y.targetBranch}`;le.has(se)||le.set(se,Y)}return Array.from(le.values())}async function vo(S,k,D){var ft,lt,Jt,zt;const z=k!=null?k:T,$=(ft=D==null?void 0:D.includeMergeNodes)!=null?ft:!0,le=(lt=D==null?void 0:D.includeUnpushedShaMap)!=null?lt:!0,ve=(Jt=D==null?void 0:D.includeWorktrees)!=null?Jt:!0,Y=(zt=D==null?void 0:D.includeStashes)!=null?zt:!0,[se,re,ie,ze,Me,et]=await Promise.all([je("get_branches",{repoPath:S}),je("get_all_repo_commits",{repoPath:S}),je("get_unpushed_direct_commits",{repoPath:S,branch:z}).catch(()=>[]),je("get_checked_out_ref",{repoPath:S}).catch(()=>null),ve?je("list_worktrees",{repoPath:S}).catch(()=>[]):Promise.resolve(K),Y?je("list_stashes",{repoPath:S}).catch(()=>[]):Promise.resolve(Kt)]),Ke=$?await ts(S,se,z):b,vt=le?await Promise.all([z,...se.map(nn=>nn.name)].map(async nn=>{const Ln=await je("get_branch_unpushed_commit_shas",{repoPath:S,branch:nn}).catch(()=>[]);return[nn,Ln]})):Object.entries(U);_.startTransition(()=>{x(se),w(Ke),E(re),A(ie),L(Object.fromEntries(vt)),W(ze),de(Me),ht(et)})}async function fs(S,k){await vo(S,k,{includeMergeNodes:!1,includeUnpushedShaMap:!0,includeWorktrees:!1,includeStashes:!1})}async function Mn(S,k){const D=T,[z,$]=await Promise.all([je("get_branches",{repoPath:S}),je("get_checked_out_ref",{repoPath:S}).catch(()=>null)]),le=await Promise.all([D,...z.map(ve=>ve.name)].map(async ve=>{const Y=await je("get_branch_unpushed_commit_shas",{repoPath:S,branch:ve}).catch(()=>[]);return[ve,Y]}));_.startTransition(()=>{x(z),L(Object.fromEntries(le)),W($)})}async function Ms(){await new Promise(S=>{window.requestAnimationFrame(()=>S())})}function Es(){const S=Xn.current+1;return Xn.current=S,ut(S),_t(!1),en("loading"),S}function to(S,k="ready"){S===Xn.current&&(Tt(!1),us.current=!1,en(k))}async function ji(S){const k=Es();let D=!1;B(null),Tt(!0),us.current=!0;try{const[z,$]=await Promise.all([je("get_repo_info",{repoPath:S}),je("get_default_branch",{repoPath:S})]);a(z.name),G($),n(S),await vo(S,$),jt(S),B({kind:"success",message:`Now targeting worktree at ${S}`})}catch(z){D=!0;const $=z instanceof Error?z.message:String(z);B({kind:"error",message:$}),console.error("Failed to switch worktree:",$)}finally{to(k,D?"error":"ready")}}async function $i(S,k){if(!(!e||he)){ye(!0),B(null);try{await je("remove_worktree",{repoPath:e,worktreePath:S,force:k}),await fs(e),B({kind:"success",message:`Removed worktree at ${S}`})}catch(D){const z=D instanceof Error?D.message:String(D);B({kind:"error",message:z}),console.error("Failed to remove worktree:",z)}finally{ye(!1)}}}function oi(S,k){var z,$,le;const D=xx(k);return bo.current===D?!1:(Ws.current=k.branches,vn.current=k.directCommits,ys.current=k.checkedOutRef,Si.current=k.unpushedDirectCommits,Vo.current=k.worktrees,Ci.current=k.stashes,Qt.current=k.unpushedCommitShasByBranch,zi.current=k.mergeNodes,Rs.current=(z=k.branchParentByName)!=null?z:{},bo.current=D,a(k.name||jm(S)),G(k.defaultBranch||"main"),x(k.branches),w(k.mergeNodes),E(k.directCommits),A(k.unpushedDirectCommits),L(k.unpushedCommitShasByBranch),W(k.checkedOutRef),de(k.worktrees),ht(k.stashes),tt(k.branchCommitPreviews),wt(($=k.branchParentByName)!=null?$:{}),Rt((le=k.laneByBranch)!=null?le:{}),mt(k.branchUniqueAheadCounts),n(S),!0)}async function Mi(S,k,D,z){const $=_d(S,Dn,D,z),le=Ls.current.get($);if(le)return{layoutKey:$,model:le};const ve=await je("get_repo_layout_snapshot",{repoPath:S,layoutKey:$}).catch(()=>null);if(ve)try{const re=JSON.parse(ve),ie=Sm(re);return Ls.current.set($,ie),Fs.current.add($),{layoutKey:$,model:ie}}catch{}const Y=pp({branches:k.branches,mergeNodes:k.mergeNodes,directCommits:k.directCommits,unpushedDirectCommits:k.unpushedDirectCommits,defaultBranch:k.defaultBranch,branchCommitPreviews:k.branchCommitPreviews,branchParentByName:k.branchParentByName,branchUniqueAheadCounts:k.branchUniqueAheadCounts,checkedOutRef:k.checkedOutRef,stashes:k.stashes,manuallyOpenedClumps:D,manuallyClosedClumps:z,gridSearchQuery:"",gridFocusSha:null,orientation:Dn}).sharedGridLayoutModel;Ls.current.set($,Y),Fs.current.add($);const se=JSON.stringify(wm(Y));return je("store_repo_layout_snapshot",{repoPath:S,layoutKey:$,payloadJson:se}).catch(()=>{Fs.current.delete($)}),{layoutKey:$,model:Y}}async function wo(S){var ie,ze;const k=++Wt.current,D=Es();let z=!1;const $=Po(S);if(!$)return;e&&xn&&Ls.current.set(xn,Kn);const le=(ie=H[$])!=null?ie:new Set,ve=(ze=we[$])!=null?ze:new Set,Y=_d($,Dn,le,ve),se=Ls.current.get(Y);if(se?(Js(se),gn(Y)):(Js(null),gn(null)),us.current=!0,Tt(!0),We(!0),Be(null),await Ms(),k!==Wt.current)return;const re=d[$];if(re!=null&&re.loaded){gs.current={...gs.current,[$]:Wo(Fo($,re))};const Me=await Mi($,re,le,ve);if(k!==Wt.current||(Js(Me.model),gn(Me.layoutKey),oi($,re),qn({path:$,name:re.name||jm($),lastOpenedAt:Date.now(),branchName:re.defaultBranch}),await Ms(),await Ms(),k!==Wt.current))return;to(D,"ready"),We(!1),jt($);return}if(await new Promise(Me=>setTimeout(Me,15)),k===Wt.current)try{const[Me,et]=await Promise.all([je("get_repo_info",{repoPath:$}),je("get_default_branch",{repoPath:$})]);if(k!==Wt.current)return;a(Me.name),G(et);const Ke=await je("add_project_and_ingest",{repoPath:$}),vt=gd(Ke);if(!vt)throw new Error("Missing repo visual snapshot payload");if(k!==Wt.current)return;const ft=await Mi($,vt,le,ve);if(k!==Wt.current||(Js(ft.model),gn(ft.layoutKey),Cs($,vt),co.current={...co.current,[$]:ki(No($,et,vt))},gs.current={...gs.current,[$]:Wo(Fo($,vt))},oi($,vt),qn({path:$,name:Me.name,lastOpenedAt:Date.now(),branchName:et}),await Ms(),await Ms(),k!==Wt.current))return;to(D,"ready"),We(!1),jt($)}catch(Me){if(z=!0,k!==Wt.current)return;console.error("Failed to load repo:",Me),Be(Me instanceof Error?Me.message:String(Me)),n(null),We(!1)}finally{if(k!==Wt.current)return;to(D,z?"error":"ready")}}async function jt(S){const k=++Us.current;try{if(k!==Us.current)return;yt(null);const D=await je("get_github_info",{repoPath:S}),z=await je("get_github_auth_status");if(k!==Us.current||(at(z),!z.ghAvailable||!z.authenticated))return;const $=await je("get_open_prs",{owner:D.owner,repo:D.repo});if(k!==Us.current)return;dn($)}catch(D){if(k!==Us.current)return;console.log("GitHub data not available:",D),yt(D instanceof Error?D.message:String(D))}}_.useEffect(()=>{let S=null,k=!1;const D=(()=>{try{return kp().label}catch{return null}})(),z=async le=>{var Y;const ve=(Y=le==null?void 0:le.path)==null?void 0:Y.trim();!ve||k||e!==ve&&await wo(ve)};return(async()=>{D==="main"&&(S=await Ic("gitviz://open-repo",async ve=>{await z(ve.payload)}));const le=await je("take_pending_open_repo");await z(le)})(),()=>{k=!0,S&&S()}},[e]),_.useEffect(()=>{Ws.current=g},[g]),_.useEffect(()=>{vn.current=C},[C]),_.useEffect(()=>{ys.current=F},[F]),_.useEffect(()=>{Si.current=M},[M]),_.useEffect(()=>{Vo.current=K},[K]),_.useEffect(()=>{Ci.current=Kt},[Kt]),_.useEffect(()=>{Qt.current=U},[U]),_.useEffect(()=>{zi.current=b},[b]),_.useEffect(()=>{Rs.current=xt},[xt]),_.useEffect(()=>{Ji.current=rt},[rt]),_.useEffect(()=>{if(!e||!T)return;je("watch_repo",{repoPath:e}).catch(console.error);let S=!1,k=!1,D=null,z=null;const $=async()=>{var Y;if(!(S||k)){if(Ji.current){Vs.current=!0;return}k=!0;try{Vs.current=!1;const se=await je("refresh_project_if_changed",{projectId:e});if(!se.updated)return;const re=gd((Y=se.snapshot)!=null?Y:null);if(!re)return;Cs(e,re),Po(e)===Po(re.path)&&oi(e,re)}catch(se){console.warn("Background project refresh failed:",se)}finally{k=!1,!S&&Vs.current&&!Ji.current&&$()}}},le=()=>{if(S)return;D!=null&&window.clearTimeout(D);const se=document.visibilityState!=="visible"?9e4:3e4;D=window.setTimeout(()=>{$(),le()},se)};Ic("git-activity",Y=>{km(Y.payload.repoPath,e)&&$()}).then(Y=>{S?Y():z=Y}).catch(console.error);const ve=window.setTimeout(()=>{$()},250);return le(),()=>{S=!0,window.clearTimeout(ve),D!=null&&window.clearTimeout(D),z&&z()}},[e,T]);async function Gs(){if(e){He(!0),yt(null);try{await je("authenticate_github");const S=await je("get_github_auth_status");at(S),S.authenticated?await jt(e):S.message&&yt(S.message)}catch(S){yt(S instanceof Error?S.message:String(S))}finally{He(!1)}}}async function Ii(){var S;if(!(!e||Mt)){$t(!0);try{const k=await je("force_refresh_project_snapshot",{projectId:e}),D=gd((S=k.snapshot)!=null?S:null);if(!D)throw new Error("Missing snapshot payload from forced refresh");Cs(e,D),km(e,D.path)&&oi(e,D),B({kind:"success",message:"Forced DB refresh complete"}),Se(!0)}catch(k){const D=k instanceof Error?k.message:String(k);B({kind:"error",message:`Force refresh failed: ${D}`}),Se(!0)}finally{$t(!1)}}}_.useEffect(()=>{nt({}),uo.current=null,He(!1),at(null),yt(null),dn([]),B(null)},[e]),_.useEffect(()=>{var se,re,ie,ze;if(!e||!T){nt({}),tt({}),wt({}),Rt({}),mt({}),uo.current=null;return}const S=g.map(Me=>{var et;return`${Me.name}:${Me.headSha}:${(et=Me.parentBranch)!=null?et:""}:${Me.commitsAhead}`}).join("|"),k=b.map(Me=>{var et,Ke;return`${Me.fullSha}:${(Ke=(et=Me.parentShas)==null?void 0:et[1])!=null?Ke:""}`}).join("|"),D=`${e}|${T}|${S}|${k}`;if(uo.current===D)return;uo.current=D;const z={},$={};for(const Me of g){if(Me.name===T)continue;const et=C.filter(Ke=>Ke.branch===Me.name).map(Ke=>{var vt;return{fullSha:Ke.fullSha,sha:Ke.sha,parentSha:(vt=Ke.parentSha)!=null?vt:null,message:Ke.message,author:Ke.author,date:Ke.date,kind:"commit"}});z[Me.name]=et,$[Me.name]=et.length}const le=new Map;for(const Me of C)le.set(Me.fullSha,Me.branch);const ve=Me=>{if(!Me)return null;const et=le.get(Me);if(et)return et;for(const[Ke,vt]of le.entries())if(Ke.startsWith(Me)||Me.startsWith(Ke))return vt;return null},Y={[T]:null};for(const Me of g){if(Me.name===T){Y[Me.name]=null;continue}const et=C.filter(lt=>lt.branch===Me.name),Ke=new Set(et.map(lt=>lt.fullSha)),vt=(re=(se=et.filter(lt=>{var zt;const Jt=(zt=lt.parentSha)!=null?zt:null;return!Jt||!Ke.has(Jt)}).sort((lt,Jt)=>{const zt=new Date(lt.date).getTime()-new Date(Jt.date).getTime();return zt!==0?zt:lt.fullSha.localeCompare(Jt.fullSha)})[0])==null?void 0:se.parentSha)!=null?re:null,ft=ve(vt);Y[Me.name]=(ze=(ie=ft!=null?ft:Rs.current[Me.name])!=null?ie:Me.parentBranch)!=null?ze:null}nt({}),tt(z),wt(Y),Rt(Me=>{const et={};for(const Ke of g){const vt=Me[Ke.name];vt!=null&&Number.isFinite(vt)&&(et[Ke.name]=vt)}return et}),mt($)},[e,T,g,b,C]),_.useEffect(()=>{if(!st){Se(!1);return}Se(!0);const S=window.setTimeout(()=>{Se(!1)},fx),k=window.setTimeout(()=>{B(null)},fx+$3);return()=>{window.clearTimeout(S),window.clearTimeout(k)}},[st]),_.useEffect(()=>{if(!e||g.length===0)return;const S=z=>new Promise($=>setTimeout($,z));async function k(){const $=`${await je("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${$}`),await S(800),await je("screenshot",{path:`${$}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${$}`)}const D=z=>{if((z.metaKey||z.ctrlKey)&&!z.shiftKey&&!z.altKey&&z.key.toLowerCase()==="b"){z.preventDefault(),_s($=>!$);return}(z.metaKey||z.ctrlKey)&&z.shiftKey&&z.key==="S"&&(z.preventDefault(),k())};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[e,i,g]);async function Pi(S){if(!e)return;B(null);const k=/^STASH:(\d+)$/.exec(S.commitSha);if(k){try{const D=parseInt(k[1],10),z=await je("apply_stash_restore",{repoPath:e,stashIndex:D});W(z),await fs(e);const $=`Stash ${D+1}`,le=z.branchName?` on branch ${z.branchName}`:" at the stash base (detached HEAD)";B({kind:"success",message:`Restored ${$}${le}; stash applied and dropped (uncommitted changes).`})}catch(D){const z=D instanceof Error?D.message:String(D);B({kind:"error",message:z}),console.error("Failed to apply stash:",z)}return}if(S.branchName){const D=($,le)=>{const ve=$.replace(/\\/g,"/").replace(/\/+$/,""),Y=le.replace(/\\/g,"/").replace(/\/+$/,"");return ve===Y||ve.toLowerCase()===Y.toLowerCase()},z=K.find($=>$.pathExists===!1||$.isCurrent||e&&D($.path,e)?!1:$.branchName===S.branchName);if(z){await ji(z.path);return}}try{let D="";(await je("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges&&(await je("stash_push",{repoPath:e,includeUntracked:!0}),D="Stashed local changes (including untracked), then ",await fs(e));const $=S.branchName?await je("checkout_branch",{repoPath:e,branchName:S.branchName}):await je("checkout_ref",{repoPath:e,refName:S.commitSha}),le=await je("get_checked_out_ref",{repoPath:e}).catch(()=>$);W(le),await fs(e);const ve=le.branchName?le.branchName:`${le.headSha.slice(0,7)} (detached)`;B({kind:"success",message:`${D}Checked out ${ve}`})}catch(D){const z=D instanceof Error?D.message:String(D);B({kind:"error",message:z}),console.error("Failed to checkout commit:",z)}}async function Hi(){if(!(!e||Lt)){B(null),St(!0);try{if(!(await je("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges){B({kind:"error",message:"No local changes to stash."});return}await je("stash_push",{repoPath:e,includeUntracked:!0}),await Ms(),await fs(e),B({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(S){const k=S instanceof Error?S.message:String(S);B({kind:"error",message:k}),console.error("Failed to stash:",k)}finally{St(!1)}}}async function So(S){if(!e||fn)return!1;const k=S.trim();if(!k)return B({kind:"error",message:"Enter a commit message."}),!1;B(null),ls(!0);try{if(!(await je("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges)return B({kind:"error",message:"No local changes to commit."}),!1;const z=await je("commit_working_tree",{repoPath:e,message:k});return W(z),await Ms(),await fs(e),B({kind:"success",message:"Committed local changes."}),!0}catch(D){const z=D instanceof Error?D.message:String(D);return B({kind:"error",message:z}),console.error("Failed to commit:",z),!1}finally{ls(!1)}}async function Do(){if(!e||sn)return!1;B(null),Sn(!0);try{if(!(await je("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges)return B({kind:"error",message:"No local changes to stage."}),!1;const k=await je("stage_working_tree",{repoPath:e});return W(k),await Ms(),await fs(e),B({kind:"success",message:"Staged all changes."}),!0}catch(S){const k=S instanceof Error?S.message:String(S);return B({kind:"error",message:k}),console.error("Failed to stage:",k),!1}finally{Sn(!1)}}async function Co(S,k){if(!(!e||tn)){Nt(!0),B(null);try{const D=/^STASH:(\d+)$/.exec(S);let z;if(D){const $=parseInt(D[1],10);z=await je("move_stash_to_new_branch",{repoPath:e,stashIndex:$,branchName:k})}else z=await je("create_branch_from_uncommitted",{repoPath:e,branchName:k});W(z),await fs(e),B({kind:"success",message:`Moved to new branch "${k}"`})}catch(D){const z=D instanceof Error?D.message:String(D);B({kind:"error",message:z}),console.error("Failed to create branch from node:",z)}finally{Nt(!1)}}}async function hi(S){if(!(!e||tn)){Nt(!0),B(null);try{const k=await je("create_root_branch",{repoPath:e,branchName:S});W(k),await fs(e),B({kind:"success",message:`Created new root branch "${S}"`})}catch(k){const D=k instanceof Error?k.message:String(k);B({kind:"error",message:D}),console.error("Failed to create root branch:",D)}finally{Nt(!1)}}}async function j(S,k){if(!e)return;const D=Array.from(new Set(S.filter(z=>!!z&&z!==k)));if(D.length!==0){B(null),it(!0);try{let z=null;for(const $ of D)z=await je("merge_ref_into_branch",{repoPath:e,sourceRef:$,targetBranch:k});await fs(e),z&&W(z),B({kind:"success",message:D.length===1?`Merged ${D[0].slice(0,7)} into ${k}`:`Merged ${D.length} commits into ${k}`})}catch(z){const $=z instanceof Error?z.message:String(z);B({kind:"error",message:$}),console.error("Failed to merge refs into branch:",$)}finally{it(!1)}}}async function X(){if(!(!e||Ve)){B(null),De(!0);try{let S=[];try{S=await je("push_all_unpushed_branches",{repoPath:e})}catch(k){const D=k instanceof Error?k.message:String(k);if(!/non-fast-forward|fetch first|rejected/i.test(D))throw k;const $=F==null?void 0:F.branchName;if(!$)throw k;const le=window.confirm(`Push all hit non-fast-forward.

OK: pull --rebase then retry
Cancel: pull --no-rebase then retry`);await je("pull_branch_with_strategy",{repoPath:e,branchName:$,rebase:le}),S=await je("push_all_unpushed_branches",{repoPath:e})}await Ms(),await Mn(e),B({kind:"success",message:S.length>0?S.length===1?`Pushed ${S[0].branchName}`:`Pushed ${S.length} branches`:"Everything local is already pushed."})}catch(S){const k=S instanceof Error?S.message:String(S);B({kind:"error",message:k}),console.error("Failed to push all branches:",k)}finally{De(!1)}}}async function fe(){if(!(!e||Ve)){B(null),De(!0);try{const S=await je("push_current_branch",{repoPath:e});await Ms(),await Mn(e),B({kind:"success",message:`Pushed ${S.branchName}`})}catch(S){const k=S instanceof Error?S.message:String(S);if(/non-fast-forward|fetch first|rejected/i.test(k)){const z=window.confirm(`Push was rejected (non-fast-forward).

OK: pull --rebase then retry push
Cancel: pull --no-rebase then retry push`);try{const $=F==null?void 0:F.branchName;if(!$)throw new Error("Cannot resolve current branch for pull.");await je("pull_branch_with_strategy",{repoPath:e,branchName:$,rebase:z});const le=await je("push_current_branch",{repoPath:e});await Ms(),await Mn(e),B({kind:"success",message:`Pulled (${z?"rebase":"merge"}) and pushed ${le.branchName}`});return}catch($){const le=$ instanceof Error?$.message:String($);B({kind:"error",message:le}),console.error("Failed to resolve non-fast-forward:",le);return}}B({kind:"error",message:k}),console.error("Failed to push current branch:",k)}finally{De(!1)}}}async function Ae(S){var D;if(!e||Ve)return;const k=Array.from(new Map(S.filter(z=>z.branchName&&z.targetSha).map(z=>[z.branchName,z])).values());if(k.length!==0){B(null),De(!0);try{for(const z of k)try{await je("push_branch",{repoPath:e,branchName:z.branchName,targetSha:z.targetSha})}catch($){const le=$ instanceof Error?$.message:String($);if(!/non-fast-forward|fetch first|rejected/i.test(le))throw $;const Y=window.confirm(`Push rejected for ${z.branchName} (non-fast-forward).

OK: pull --rebase then retry
Cancel: pull --no-rebase then retry`);await je("pull_branch_with_strategy",{repoPath:e,branchName:z.branchName,rebase:Y}),await je("push_branch",{repoPath:e,branchName:z.branchName,targetSha:z.targetSha})}await fs(e),B({kind:"success",message:k.length===1?`Pushed ${k[0].branchName} through ${(D=k[0].targetSha)==null?void 0:D.slice(0,7)}`:`Pushed ${k.length} selected commit ranges`})}catch(z){const $=z instanceof Error?z.message:String(z);B({kind:"error",message:$}),console.error("Failed to push selected commits:",$)}finally{De(!1)}}}async function Fe(S){var le;if(!e||ge)return;const k=Array.from(new Set(S.branchNames.filter(ve=>ve&&ve!==T))),D=!!S.discardUncommittedChanges,z=(le=S.stashIndices)!=null?le:[],$=Array.from(new Set(z)).sort((ve,Y)=>Y-ve);if(!(k.length===0&&!D&&$.length===0)){B(null),ot(!0);try{for(const se of $)await je("stash_drop",{repoPath:e,stashIndex:se});const ve=k.length>0||D?await je("delete_selected_elements",{repoPath:e,branchNames:k,discardUncommittedChanges:D}):{deletedBranches:[],discardedUncommittedChanges:!1};await fs(e);const Y=[];$.length>0&&Y.push($.length===1?`removed stash ${$[0]+1}`:`removed ${$.length} stashes`),ve.discardedUncommittedChanges&&Y.push("discarded local uncommitted changes"),ve.deletedBranches.length>0&&Y.push(ve.deletedBranches.length===1?`deleted ${ve.deletedBranches[0]}`:`deleted ${ve.deletedBranches.length} branches`),B({kind:"success",message:Y.length>0?Y.join(" and "):"Nothing to delete."})}catch(ve){const Y=ve instanceof Error?ve.message:String(ve);B({kind:"error",message:Y}),console.error("Failed to delete selected elements:",Y)}finally{ot(!1)}}}function ct(S){S&&(Oe(S),me(k=>k+1))}function Yt(S){S&&(Ge(S),me(k=>k+1))}const{enrichedBranches:Pt,enrichedBranchCommitPreviews:Zt,enrichedBranchUniqueAheadCounts:yn,enrichedDirectCommits:wn,enrichedUnpushedDirectCommits:rn,visualCheckedOutRef:Ft}=_.useMemo(()=>{var Bo,mi,Vn,pi,Ti,yr,Fr,Xr,Gr,Yl,Wl,qr,_i,xr,ii,ba,Kr,br,vr,Qr,ca,Fl,wr,va,iu,Qo,Zr;const S=a2(Kt,g,C,Ie,kt,T,(Bo=F==null?void 0:F.hasUncommittedChanges)!=null?Bo:!1);let k=S.branches,D=S.directCommits,z=M,$=S.branchCommitPreviews,le=S.branchUniqueAheadCounts,ve=F;const Y=On?D.some(an=>an.fullSha===On||an.sha===On.slice(0,7)):!0;if(On&&In&&!Y){const an=(yr=(Ti=(mi=D.find(Zo=>Zo.fullSha===In||Zo.sha===In.slice(0,7)))==null?void 0:mi.date)!=null?Ti:(pi=(Vn=$[T])==null?void 0:Vn.find(Zo=>Zo.fullSha===In||Zo.sha===In.slice(0,7)))==null?void 0:pi.date)!=null?yr:null,ns=an?new Date(new Date(an).getTime()+1e3).toISOString():new Date().toISOString(),po=(Yl=In!=null?In:(Fr=k.find(Zo=>Zo.name===T))==null?void 0:Fr.headSha)!=null?Yl:(Gr=(Xr=D[0])==null?void 0:Xr.fullSha)!=null?Gr:null,Lo={fullSha:On,sha:On.slice(0,7),parentSha:po,message:((Wl=Ds==null?void 0:Ds.subject)==null?void 0:Wl.trim())||`Remote commit on origin/${T}`,author:((qr=Ds==null?void 0:Ds.author)==null?void 0:qr.trim())||"Unknown",date:ns,kind:"commit",isRemote:!0};D=[{fullSha:On,sha:On.slice(0,7),parentSha:po,parentShas:po?[po]:[],childShas:[],branch:T,message:Lo.message,author:Lo.author,date:ns,kind:"commit",isRemote:!0},...D],$={...$,[T]:[Lo,...(_i=$[T])!=null?_i:[]]},k=k.map(Zo=>Zo.name===T?{...Zo,headSha:On,lastCommitDate:ns}:Zo)}if(!!On&&!!In&&!Y&&(F==null?void 0:F.branchName)===T&&F.headSha!==On&&(F.hasUncommittedChanges||M.length>0)){const an=`${T} (local)`,ns=new Set(M.map(As=>As.fullSha));F!=null&&F.headSha&&ns.add(F.headSha);const po=(Kr=(ba=(xr=M[0])==null?void 0:xr.date)!=null?ba:F!=null&&F.headSha?(ii=D.find(As=>As.fullSha===F.headSha))==null?void 0:ii.date:void 0)!=null?Kr:new Date().toISOString();k.some(As=>As.name===an)||(k=[...k,{name:an,commitsAhead:Math.max(1,ns.size),commitsBehind:0,lastCommitDate:po,lastCommitAuthor:(br=F==null?void 0:F.branchName)!=null?br:"You",status:"fresh",remoteSyncStatus:"unpushed",unpushedCommits:Math.max(1,ns.size),headSha:(ca=F==null?void 0:F.headSha)!=null?ca:(Qr=(vr=M[0])==null?void 0:vr.fullSha)!=null?Qr:"WORKING_TREE",parentBranch:T}]),D=D.map(As=>As.branch===T&&ns.has(As.fullSha)?{...As,branch:an}:As),z=z.map(As=>As.branch===T&&ns.has(As.fullSha)?{...As,branch:an}:As);const Lo=(Fl=$[T])!=null?Fl:[],Ha=Lo.filter(As=>As.fullSha==="WORKING_TREE"||ns.has(As.fullSha)),Zo=Lo.filter(As=>!Ha.includes(As));Ha.length>0&&($={...$,[T]:Zo,[an]:[...Ha,...(wr=$[an])!=null?wr:[]]}),le={...le,[an]:Math.max(1,ns.size)},(ve==null?void 0:ve.branchName)===T&&(ve={...ve,branchName:an})}if(!(ve!=null&&ve.hasUncommittedChanges))return{enrichedBranches:k,enrichedDirectCommits:D,enrichedUnpushedDirectCommits:z,enrichedBranchCommitPreviews:$,enrichedBranchUniqueAheadCounts:le,visualCheckedOutRef:ve};const ie=ve.headSha||ve.parentSha||null,ze=(iu=(va=D[0])==null?void 0:va.fullSha)!=null?iu:null,Me=(an,ns)=>!an||!ns?!1:an===ns||an.startsWith(ns)||ns.startsWith(an),et=[{name:T,headSha:ze!=null?ze:"",isDefault:!0},...k.map(an=>({name:an.name,headSha:an.headSha,isDefault:!1}))],Ke=ve.branchName?et.find(an=>an.name===ve.branchName):void 0,vt=ie?et.filter(an=>Me(an.headSha,ie)):[],ft=(Qo=Ke!=null?Ke:vt.find(an=>an.isDefault))!=null?Qo:vt[0],lt=ft&&!ft.isDefault?k.find(an=>an.name===ft.name):void 0,Jt=(()=>{var ns;if(!ie)return null;const an=D.find(po=>Me(po.fullSha,ie)||Me(po.sha,ie));if(an!=null&&an.date)return an.date;if(lt){const po=((ns=$[lt.name])!=null?ns:[]).find(Lo=>Me(Lo.fullSha,ie)||Me(Lo.sha,ie));if(po!=null&&po.date)return po.date}return null})(),zt=Jt?new Date(Jt).getTime():Number.NaN,nn=Date.now(),Ln=Number.isFinite(zt)?Math.max(nn,zt+1):nn,$n=new Date(Ln).toISOString(),Eo={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ie,message:"Local uncommitted changes",author:"You",date:$n,kind:"uncommitted"};return lt?{enrichedBranches:k.map(ns=>ns.name===lt.name?{...ns,commitsAhead:ns.commitsAhead+1,unpushedCommits:ns.unpushedCommits+1,lastCommitDate:$n,headSha:"WORKING_TREE"}:ns),enrichedDirectCommits:D,enrichedUnpushedDirectCommits:z,enrichedBranchCommitPreviews:{...$,[lt.name]:[Eo,...$[lt.name]||[]]},enrichedBranchUniqueAheadCounts:{...le,[lt.name]:Math.max(0,(Zr=Object.prototype.hasOwnProperty.call(le,lt.name)?le[lt.name]:lt.commitsAhead)!=null?Zr:0)+1},visualCheckedOutRef:ve}:{enrichedBranches:k,enrichedBranchCommitPreviews:{...$,[T]:[Eo,...$[T]||[]]},enrichedBranchUniqueAheadCounts:{...le},enrichedDirectCommits:D,enrichedUnpushedDirectCommits:z,visualCheckedOutRef:ve}},[g,Ie,kt,F,T,C,Ds,In,On,Kt,M]);_.useEffect(()=>{var z;if(!(!pt&&!Je&&(On==null||xo&&In!=null)))return;const k=Ft!=null&&Ft.hasUncommittedChanges?"WORKING_TREE":(z=Ft==null?void 0:Ft.headSha)!=null?z:null;if(!k)return;const D=`${e!=null?e:"__no-repo__"}|${Dn}|${k}`;vs.current!==D&&(vs.current=D,Oe(k),me($=>$+1))},[xo,Je,Dn,pt,In,On,e,Ft==null?void 0:Ft.hasUncommittedChanges,Ft==null?void 0:Ft.headSha]),_.useEffect(()=>{vs.current=null},[e]);const hs=_.useMemo(()=>{const S={...xt};return S[T]=null,S},[xt,T,Pt]),qt=_.useMemo(()=>{var S;return(S=Pw(Pt,T,hs,Qe))!=null?S:jp(Pt,T,Zt,hs)},[Pt,T,Zt,hs,Qe]),Bn=_.useMemo(()=>Qd(es),[es]),Ts=_.useMemo(()=>Qd(ds),[ds]),xn=_.useMemo(()=>e?_d(e,Dn,es,ds):null,[e,Dn,Bn,Ts]);_.useEffect(()=>{if(!e||!xn){Js(null),gn(null);return}const S=Ls.current.get(xn);if(S){Js(S),gn(xn),Fs.current.add(xn);return}let k=!1;return Js(null),gn(null),je("get_repo_layout_snapshot",{repoPath:e,layoutKey:xn}).then(D=>{if(k||!D)return;const z=JSON.parse(D),$=Sm(z);Ls.current.set(xn,$),Fs.current.add(xn),Js($),gn(xn)}).catch(()=>{k||(Js(null),gn(null))}),()=>{k=!0}},[e,xn]);const Kn=_.useMemo(()=>{var S;if(Re.trim().length===0&&xn&&fo===xn&&Zs)return Zs;if(pt){const k=xn&&(S=Ls.current.get(xn))!=null?S:null;if(k)return k;if(Yo.current)return Yo.current}return Mp({lanes:qt,branches:Pt,mergeNodes:b,directCommits:wn,unpushedDirectCommits:rn,defaultBranch:T,branchCommitPreviews:Zt,branchParentByName:hs,branchUniqueAheadCounts:yn,manuallyOpenedClumps:es,manuallyClosedClumps:ds,isDebugOpen:!1,gridSearchQuery:Re,gridFocusSha:_e,checkedOutRef:Ft!=null?Ft:null,orientation:Dn})},[qt,Pt,b,wn,rn,T,Zt,hs,yn,es,ds,Re,_e,(V=Ft==null?void 0:Ft.headSha)!=null?V:null,(Z=Ft==null?void 0:Ft.branchName)!=null?Z:null,Dn,Re,xn,fo,Zs,pt]);_.useEffect(()=>{Yo.current=Kn},[Kn]),_.useEffect(()=>{if(!e||!xn||(Ls.current.set(xn,Kn),Fs.current.has(xn)))return;Fs.current.add(xn);const S=JSON.stringify(wm(Kn));je("store_repo_layout_snapshot",{repoPath:e,layoutKey:xn,payloadJson:S}).catch(()=>{Fs.current.delete(xn)})},[e,xn,Kn]),_.useEffect(()=>{try{const S=window.localStorage.getItem(hx);if(S){const D=Number(S);Number.isFinite(D)&&Cn(Math.min(yx,Math.max(gx,D)))}const k=window.localStorage.getItem(mx);k!=null&&_s(k==="true")}catch{}},[]),_.useEffect(()=>{ti.current=zn},[zn]),_.useEffect(()=>{const S=fi.current;S&&(S.style.width=cs?"0px":`${zn}px`)},[zn,cs]),_.useEffect(()=>{try{window.localStorage.setItem(mx,String(cs))}catch{}},[cs]);const Ei=S=>{const k=_n.current;if(!k)return;const D=k.startWidth+(S-k.startX);k.pendingWidth=Math.min(yx,Math.max(gx,D));const z=fi.current;z&&(z.style.width=`${k.pendingWidth}px`)},no=(S,k)=>{const D=_n.current;if(D&&!(k!=null&&D.pointerId!==k)){_n.current=null,document.body.style.cursor="",document.body.style.userSelect="",Cn(D.pendingWidth);try{window.localStorage.setItem(hx,String(D.pendingWidth))}catch{}}},ko=S=>{S.button===0&&(S.preventDefault(),_n.current={startX:S.clientX,startWidth:ti.current,pendingWidth:ti.current,pointerId:S.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",S.currentTarget.setPointerCapture(S.pointerId))},jo=S=>{const k=_n.current;!k||k.pointerId!==S.pointerId||Ei(S.clientX)},Ro=S=>{if(_n.current){try{S.currentTarget.releasePointerCapture(S.pointerId)}catch{}no("pointerup",S.pointerId)}},Mo=S=>{if(_n.current){try{S.currentTarget.releasePointerCapture(S.pointerId)}catch{}no("pointercancel",S.pointerId)}},Ko=_.useCallback(S=>{S===Xn.current&&Gt==="ready"&&_t(!0)},[Gt]),xa=!Ot||Gt!=="ready",R=pt||Je;return l.jsx("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:l.jsx("div",{className:"relative z-30 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:fi,className:"relative z-[60] flex h-full min-h-0 flex-none overflow-visible",style:{width:cs?64:zn},children:[l.jsx("button",{type:"button",className:"window-no-drag absolute right-2.5 left-22 top-2.25 z-[9999] inline-flex h-7 w-7 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted","aria-label":cs?"Open sidebar":"Collapse sidebar",onClick:()=>_s(S=>!S),children:cs?l.jsx(Nw,{className:"h-4 w-4 shrink-0"}):l.jsx(Tw,{className:"h-4 w-4 shrink-0"})}),l.jsx(z3,{className:I3("min-h-0 shrink-0 overflow-hidden pt-14 transition-[width,opacity] duration-300 ease-in-out","opacity-100"),style:{width:"100%"},collapsed:cs,projects:eo,activeProjectPath:e,onSelectProject:wo,onAddProject:qo,onRemoveProject:Bs,onReorderProjects:ho,onRevealProjectInFinder:mo,projectLoading:Je||(p&&e?!((q=d[e])!=null&&q.loaded):!1),projectError:J,checkedOutRef:F,showCommits:!1,manuallyOpenedClumpsByProject:H,manuallyClosedClumpsByProject:we,manuallyOpenedClumps:es,manuallyClosedClumps:ds,setManuallyOpenedClumps:hn,setManuallyClosedClumps:Os,gridLayoutModel:Kn,onSelectCommit:ct,onSelectBranch:Yt}),cs?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:ko,onPointerMove:jo,onPointerUp:Ro,onPointerCancel:Mo,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"})]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-40 h-12"}),l.jsx(yS,{branches:Pt,mergeNodes:b,directCommits:wn,unpushedDirectCommits:rn,unpushedCommitShasByBranch:U,openPRs:Ht,defaultBranch:T,branchCommitPreviews:Zt,branchParentByName:hs,branchUniqueAheadCounts:yn,gridSearchQuery:Re,gridSearchJumpToken:oe,gridSearchJumpDirection:O,gridFocusSha:_e,isLoading:pt||Je,blockMapDisplay:xa,blockMapInteraction:R,mapReadyEpoch:Ct,onMapReadyForDisplay:Ko,onGridSearchResultCountChange:ee,onGridSearchResultIndexChange:Te,onGridSearchFocusChange:Oe,checkedOutRef:Ft,onCommitClick:Pi,onMergeRefsIntoBranch:j,mergeInProgress:Ne,onPushAllBranches:X,onPushCurrentBranch:fe,onPushCommitTargets:Ae,pushInProgress:Ve,onDeleteSelection:Fe,deleteInProgress:ge,worktrees:K,currentRepoPath:e!=null?e:void 0,onRemoveWorktree:$i,removeWorktreeInProgress:he,onSwitchToWorktree:ji,onStashLocalChanges:Hi,stashInProgress:Lt,stashDisabled:!1,onCommitLocalChanges:So,commitInProgress:fn,commitDisabled:!1,onStageAllChanges:Do,stageInProgress:sn,onCreateBranchFromNode:Co,onCreateRootBranch:hi,createBranchFromNodeInProgress:tn,isMutationBusy:ln,isDebugOpen:Ao,onDebugClose:()=>on(!1),onInteractionChange:Fn,manuallyOpenedClumps:es,manuallyClosedClumps:ds,setManuallyOpenedClumps:hn,setManuallyClosedClumps:Os,layoutModel:Kn,orientation:Dn,gridHudProps:ni})]})]})})})}var H3=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,U3={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(e)),e.textContent=H3}var ps=U3,V3=`.icon-transitions-module__iconState___uqK9J {
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
}`,Y3={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-components-icon-transitions");e||(e=document.createElement("style"),e.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(e)),e.textContent=V3}var as=Y3,W3=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),F3=({size:e=24,style:n={}})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),X3=({size:e=20,...n})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),G3=({size:e=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${as.iconState} ${n?as.hiddenScaled:as.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${as.iconState} ${n?as.visibleScaled:as.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),q3=({size:e=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${as.iconStateFast} ${i?as.visibleScaled:u?as.sending:as.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${as.iconStateFast} ${a?as.visibleScaled:as.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${as.iconStateFast} ${c?as.visibleScaled:as.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},K3=({size:e=24,isOpen:n=!0})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${as.iconFade} ${n?as.visible:as.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${as.iconFade} ${n?as.hidden:as.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),Q3=({size:e=24,isPaused:n=!1})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${as.iconFadeFast} ${n?as.hidden:as.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${as.iconFadeFast} ${n?as.visible:as.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),Z3=({size:e=16})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),J3=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),r2=({size:e=16})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),ej=({size:e=24})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),tj=({size:e=16})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),nj=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),sj=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),oj=({size:e=24})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),ij=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),aj=({size:e=24})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),l2=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Mm=l2.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(""),gp="feedback-freeze-styles",Em="__agentation_freeze";function rj(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const e=window;return e[Em]||(e[Em]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[Em]}var jn=rj();typeof window<"u"&&!jn.installed&&(jn.origSetTimeout=window.setTimeout.bind(window),jn.origSetInterval=window.setInterval.bind(window),jn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,n,...i)=>typeof e=="string"?jn.origSetTimeout(e,n):jn.origSetTimeout((...a)=>{jn.frozen?jn.frozenTimeoutQueue.push(()=>e(...a)):e(...a)},n,...i),window.setInterval=(e,n,...i)=>typeof e=="string"?jn.origSetInterval(e,n):jn.origSetInterval((...a)=>{jn.frozen||e(...a)},n,...i),window.requestAnimationFrame=e=>jn.origRAF(n=>{jn.frozen?jn.frozenRAFQueue.push(e):e(n)}),jn.installed=!0);var Vt=jn.origSetTimeout,lj=jn.origSetInterval,Dl=jn.origRAF;function cj(e){return e?l2.some(n=>{var i;return!!((i=e.closest)!=null&&i.call(e,`[${n}]`))}):!1}function uj(){if(typeof document>"u"||jn.frozen)return;jn.frozen=!0,jn.frozenTimeoutQueue=[],jn.frozenRAFQueue=[];let e=document.getElementById(gp);e||(e=document.createElement("style"),e.id=gp),e.textContent=`
    *${Mm},
    *${Mm}::before,
    *${Mm}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),jn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;cj(i)||(n.pause(),jn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function bx(){var i;if(typeof document>"u"||!jn.frozen)return;jn.frozen=!1;const e=jn.frozenTimeoutQueue;jn.frozenTimeoutQueue=[];for(const a of e)jn.origSetTimeout(()=>{if(jn.frozen){jn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=jn.frozenRAFQueue;jn.frozenRAFQueue=[];for(const a of n)jn.origRAF(c=>{if(jn.frozen){jn.frozenRAFQueue.push(a);return}a(c)});for(const a of jn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}jn.pausedAnimations=[],(i=document.getElementById(gp))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Tm(e){if(!e)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{e.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var Zd=_.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:y,style:g,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:w=!1,computedStyles:C},E){const[M,A]=_.useState(u),[U,L]=_.useState(!1),[T,G]=_.useState("initial"),[F,W]=_.useState(!1),[K,de]=_.useState(!1),he=_.useRef(null),ye=_.useRef(null),Re=_.useRef(null),Ge=_.useRef(null);_.useEffect(()=>{b&&T!=="exit"&&G("exit")},[b,T]),_.useEffect(()=>{Vt(()=>{G("enter")},0);const pe=Vt(()=>{G("entered")},200),we=Vt(()=>{const I=he.current;I&&(Tm(I),I.selectionStart=I.selectionEnd=I.value.length,I.scrollTop=I.scrollHeight)},50);return()=>{clearTimeout(pe),clearTimeout(we),Re.current&&clearTimeout(Re.current),Ge.current&&clearTimeout(Ge.current)}},[]);const oe=_.useCallback(()=>{Ge.current&&clearTimeout(Ge.current),L(!0),Ge.current=Vt(()=>{L(!1),Tm(he.current)},250)},[]);_.useImperativeHandle(E,()=>({shake:oe}),[oe]);const me=_.useCallback(()=>{G("exit"),Re.current=Vt(()=>{p()},150)},[p]),O=_.useCallback(()=>{M.trim()&&h(M.trim())},[M,h]),ae=_.useCallback(pe=>{pe.stopPropagation(),!pe.nativeEvent.isComposing&&(pe.key==="Enter"&&!pe.shiftKey&&(pe.preventDefault(),O()),pe.key==="Escape"&&me())},[O,me]),H=[ps.popup,w?ps.light:"",T==="enter"?ps.enter:"",T==="entered"?ps.entered:"",T==="exit"?ps.exit:"",U?ps.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:ye,className:H,"data-annotation-popup":!0,style:g,onClick:pe=>pe.stopPropagation(),children:[l.jsxs("div",{className:ps.header,children:[C&&Object.keys(C).length>0?l.jsxs("button",{className:ps.headerToggle,onClick:()=>{const pe=K;de(!K),pe&&Vt(()=>Tm(he.current),0)},type:"button",children:[l.jsx("svg",{className:`${ps.chevron} ${K?ps.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:ps.element,children:n})]}):l.jsx("span",{className:ps.element,children:n}),i&&l.jsx("span",{className:ps.timestamp,children:i})]}),C&&Object.keys(C).length>0&&l.jsx("div",{className:`${ps.stylesWrapper} ${K?ps.expanded:""}`,children:l.jsx("div",{className:ps.stylesInner,children:l.jsx("div",{className:ps.stylesBlock,children:Object.entries(C).map(([pe,we])=>l.jsxs("div",{className:ps.styleLine,children:[l.jsx("span",{className:ps.styleProperty,children:pe.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:ps.styleValue,children:we}),";"]},pe))})})}),a&&l.jsxs("div",{className:ps.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:he,className:ps.textarea,style:{borderColor:F?x:void 0},placeholder:c,value:M,onChange:pe=>A(pe.target.value),onFocus:()=>W(!0),onBlur:()=>W(!1),rows:2,onKeyDown:ae}),l.jsxs("div",{className:ps.actions,children:[y&&l.jsx("div",{className:ps.deleteWrapper,children:l.jsx("button",{className:ps.deleteButton,onClick:y,type:"button",children:l.jsx(oj,{size:22})})}),l.jsx("button",{className:ps.cancel,onClick:me,children:"Cancel"}),l.jsx("button",{className:ps.submit,style:{backgroundColor:x,opacity:M.trim()?1:.4},onClick:O,disabled:!M.trim(),children:d})]})]})}),dj=({content:e,children:n,...i})=>{const[a,c]=_.useState(!1),[u,d]=_.useState(!1),[h,p]=_.useState({top:0,right:0}),y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=()=>{if(y.current){const E=y.current.getBoundingClientRect();p({top:E.top+E.height/2,right:window.innerWidth-E.left+8})}},w=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),g.current=Vt(()=>{c(!0)},500)},C=()=>{g.current&&(clearTimeout(g.current),g.current=null),c(!1),x.current=Vt(()=>{d(!1)},150)};return _.useEffect(()=>()=>{g.current&&clearTimeout(g.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:y,onMouseEnter:w,onMouseLeave:C,...i,children:n}),u&&Il.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:e}),document.body)]})},fj=`.styles-module__tooltip___mcXL2 {
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
}`,hj={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-help-tooltip-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(e)),e.textContent=fj}var vx=hj,Pr=({content:e})=>l.jsx(dj,{className:vx.tooltip,content:e,children:l.jsx(X3,{className:vx.tooltipIcon})}),Et={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},c2=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...Et.navigation},{type:"header",label:"Header",...Et.header},{type:"hero",label:"Hero",...Et.hero},{type:"section",label:"Section",...Et.section},{type:"sidebar",label:"Sidebar",...Et.sidebar},{type:"footer",label:"Footer",...Et.footer},{type:"modal",label:"Modal",...Et.modal},{type:"banner",label:"Banner",...Et.banner},{type:"drawer",label:"Drawer",...Et.drawer},{type:"popover",label:"Popover",...Et.popover},{type:"divider",label:"Divider",...Et.divider}]},{section:"Content",items:[{type:"card",label:"Card",...Et.card},{type:"text",label:"Text",...Et.text},{type:"image",label:"Image",...Et.image},{type:"video",label:"Video",...Et.video},{type:"table",label:"Table",...Et.table},{type:"grid",label:"Grid",...Et.grid},{type:"list",label:"List",...Et.list},{type:"chart",label:"Chart",...Et.chart},{type:"codeBlock",label:"Code Block",...Et.codeBlock},{type:"map",label:"Map",...Et.map},{type:"timeline",label:"Timeline",...Et.timeline},{type:"calendar",label:"Calendar",...Et.calendar},{type:"accordion",label:"Accordion",...Et.accordion},{type:"carousel",label:"Carousel",...Et.carousel},{type:"logo",label:"Logo",...Et.logo},{type:"faq",label:"FAQ",...Et.faq},{type:"gallery",label:"Gallery",...Et.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...Et.button},{type:"input",label:"Input",...Et.input},{type:"search",label:"Search",...Et.search},{type:"form",label:"Form",...Et.form},{type:"tabs",label:"Tabs",...Et.tabs},{type:"dropdown",label:"Dropdown",...Et.dropdown},{type:"toggle",label:"Toggle",...Et.toggle},{type:"stepper",label:"Stepper",...Et.stepper},{type:"rating",label:"Rating",...Et.rating},{type:"fileUpload",label:"File Upload",...Et.fileUpload},{type:"checkbox",label:"Checkbox",...Et.checkbox},{type:"radio",label:"Radio",...Et.radio},{type:"slider",label:"Slider",...Et.slider},{type:"datePicker",label:"Date Picker",...Et.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...Et.avatar},{type:"badge",label:"Badge",...Et.badge},{type:"tag",label:"Tag",...Et.tag},{type:"breadcrumb",label:"Breadcrumb",...Et.breadcrumb},{type:"pagination",label:"Pagination",...Et.pagination},{type:"progress",label:"Progress",...Et.progress},{type:"alert",label:"Alert",...Et.alert},{type:"toast",label:"Toast",...Et.toast},{type:"notification",label:"Notification",...Et.notification},{type:"tooltip",label:"Tooltip",...Et.tooltip},{type:"stat",label:"Stat",...Et.stat},{type:"skeleton",label:"Skeleton",...Et.skeleton},{type:"chip",label:"Chip",...Et.chip},{type:"icon",label:"Icon",...Et.icon},{type:"spinner",label:"Spinner",...Et.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...Et.pricing},{type:"testimonial",label:"Testimonial",...Et.testimonial},{type:"cta",label:"CTA",...Et.cta},{type:"productCard",label:"Product Card",...Et.productCard},{type:"profile",label:"Profile",...Et.profile},{type:"feature",label:"Feature",...Et.feature},{type:"team",label:"Team",...Et.team},{type:"login",label:"Login",...Et.login},{type:"contact",label:"Contact",...Et.contact}]}],ia={};for(const e of c2)for(const n of e.items)ia[n.type]=n;function Xe({w:e,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof e=="number"?`${e}px`:e,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Jn({w:e,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof e=="number"?`${e}px`:e,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function di({size:e}){return l.jsx("div",{style:{width:e,height:e,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function mj({width:e,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:e*.02},children:[l.jsx(Jn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:e*.03,marginLeft:e*.04},children:[l.jsx(Xe,{w:e*.06}),l.jsx(Xe,{w:e*.07}),l.jsx(Xe,{w:e*.05}),l.jsx(Xe,{w:e*.06})]}),l.jsx(Jn,{w:e*.1,h:Math.min(28,n*.5),radius:4})]})}function pj({width:e,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Xe,{w:e*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Xe,{w:e*.6}),l.jsx(Xe,{w:e*.4}),l.jsx(Jn,{w:Math.min(140,e*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function _j({width:e,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:e*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Xe,{w:e*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Jn,{w:10,h:10,radius:2}),l.jsx(Xe,{w:e*(.4+c*17%30/100)})]},c))]})}function gj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Xe,{w:"60%",h:3,strong:!0}),l.jsx(Xe,{w:"80%",h:2}),l.jsx(Xe,{w:"70%",h:2}),l.jsx(Xe,{w:"60%",h:2})]},c))})}function yj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Xe,{w:e*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Xe,{w:"90%"}),l.jsx(Xe,{w:"70%"}),l.jsx(Xe,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(Jn,{w:70,h:26,radius:4}),l.jsx(Jn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function xj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Xe,{w:"70%",h:4,strong:!0}),l.jsx(Xe,{w:"95%",h:2}),l.jsx(Xe,{w:"85%",h:2}),l.jsx(Xe,{w:"50%",h:2})]})]})}function bj({width:e,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Xe,{w:e*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Xe,{w:`${70+u*13%25}%`,h:2},u))]})}function vj({width:e,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:e,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:e,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:e*.3,cy:n*.3,r:Math.min(e,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function wj({width:e,height:n}){const i=Math.max(2,Math.min(5,Math.floor(e/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Xe,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Xe,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function Sj({width:e,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(di,{size:8}),l.jsx(Xe,{w:`${55+c*17%35}%`,h:2})]},c))})}function Cj({width:e,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Xe,{w:Math.max(20,e*.5),h:3,strong:!0})})}function kj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Xe,{w:Math.min(80,e*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Xe,{w:"40%",h:2})})]})}function jj({width:e,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Xe,{w:60+c*17%30,h:2}),l.jsx(Jn,{w:"100%",h:28,radius:4})]},c)),l.jsx(Jn,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function Mj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Xe,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Xe,{w:"80%",h:2}),l.jsx(Xe,{w:"65%",h:2}),l.jsx(Xe,{w:"75%",h:2})]})]})}function Ej({width:e,height:n}){const i=Math.min(e,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("circle",{cx:e/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:e/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${e/2-i*.55} ${n*.78} C${e/2-i*.55} ${n*.55} ${e/2+i*.55} ${n*.55} ${e/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function Tj({width:e,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Xe,{w:Math.max(16,e*.5),h:2,strong:!0})})}function Aj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Xe,{w:e*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Xe,{w:e*.35})]})}function Nj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:e*.04},children:[l.jsx(Xe,{w:e*.3,h:4,strong:!0}),l.jsx(Xe,{w:e*.7}),l.jsx(Xe,{w:e*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:e*.03,marginTop:n*.06},children:[l.jsx(Jn,{w:"33%",h:"100%",radius:4}),l.jsx(Jn,{w:"33%",h:"100%",radius:4}),l.jsx(Jn,{w:"33%",h:"100%",radius:4})]})]})}function Dj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(Jn,{w:"100%",h:"100%",radius:4},u))})}function Rj({width:e,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Xe,{w:e*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Xe,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function Bj({width:e,height:n}){const i=Math.min(e,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:e-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:e-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function Lj({width:e,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(di,{size:Math.min(14,n*.4)}),l.jsx(Xe,{w:"50%",h:2})]})}function Oj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(di,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Xe,{w:"60%",h:3,strong:!0}),l.jsx(Xe,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function zj({width:e,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:e,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:e*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function $j({width:e,height:n}){const i=Math.max(3,Math.min(7,Math.floor(e/50))),a=e/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(Jn,{w:a,h:`${d}%`,radius:2},u)})})}function Ij({width:e,height:n}){const i=Math.min(e,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(Jn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function Pj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Xe,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function Hj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Xe,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function Uj({width:e,height:n}){const i=Math.max(3,Math.min(5,Math.floor(e/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(Jn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function Vj({width:e}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function Yj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Xe,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function Wj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Jn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(di,{size:5}),l.jsx(di,{size:5}),l.jsx(di,{size:5})]})]})}function Fj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Xe,{w:e*.4,h:3,strong:!0}),l.jsx(Xe,{w:e*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(di,{size:5}),l.jsx(Xe,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(Jn,{w:e*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function Xj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Xe,{w:"90%",h:2}),l.jsx(Xe,{w:"75%",h:2}),l.jsx(Xe,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(di,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Xe,{w:60,h:3,strong:!0}),l.jsx(Xe,{w:40,h:2})]})]})]})}function Gj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Xe,{w:e*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Xe,{w:e*.35}),l.jsx(Jn,{w:Math.min(140,e*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function qj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Xe,{w:"40%",h:3,strong:!0}),l.jsx(Xe,{w:"70%",h:2})]})]})}function Kj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Xe,{w:e*.4,h:3,strong:!0}),l.jsx(Jn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function Qj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Xe,{w:e*.5,h:2}),l.jsx(Xe,{w:e*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Xe,{w:e*.3,h:2})]})}function Zj({width:e,height:n}){const i=Math.max(3,Math.min(5,Math.floor(e/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function Jj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Xe,{w:Math.max(16,e*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function e8({width:e,height:n}){const a=Math.min(n*.7,e/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function t8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:e,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:e,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:e*.4,y1:0,x2:e*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function n8({width:e,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(di,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Xe,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Xe,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function s8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Xe,{w:e*.4,h:2}),l.jsx(Xe,{w:e*.25,h:2})]})}function o8({width:e,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(di,{size:6}),l.jsx(di,{size:6}),l.jsx(di,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Xe,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function i8({width:e,height:n}){const c=Math.min((e-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Xe,{w:e*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Xe,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function a8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(di,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Xe,{w:"50%",h:3,strong:!0}),l.jsx(Xe,{w:"75%",h:2})]}),l.jsx(Xe,{w:30,h:2})]})}function r8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Xe,{w:"65%",h:4,strong:!0}),l.jsx(Xe,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Xe,{w:"30%",h:5,strong:!0}),l.jsx(Jn,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function l8({width:e,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(di,{size:i}),l.jsx(Xe,{w:e*.45,h:4,strong:!0}),l.jsx(Xe,{w:e*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:e*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Xe,{w:20,h:3,strong:!0}),l.jsx(Xe,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Xe,{w:20,h:3,strong:!0}),l.jsx(Xe,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Xe,{w:20,h:3,strong:!0}),l.jsx(Xe,{w:28,h:2})]})]})]})}function c8({width:e,height:n}){const i=Math.max(e*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:e-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:e*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Xe,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Xe,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function u8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Xe,{w:"70%",h:3,strong:!0}),l.jsx(Xe,{w:"90%",h:2}),l.jsx(Xe,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function d8({width:e,height:n}){const i=Math.min(n*.7,e*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:e*.08},children:[l.jsx(Jn,{w:i,h:i,radius:i*.25}),l.jsx(Xe,{w:e*.45,h:Math.max(4,n*.2),strong:!0})]})}function f8({width:e,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Xe,{w:e*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function h8({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function m8({width:e,height:n}){const i=Math.min(e,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function p8({width:e,height:n}){const i=Math.min(e,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("circle",{cx:e/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:e/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function _8({width:e,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=e*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function g8({width:e,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((e-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Xe,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Xe,{w:e*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function y8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function x8({width:e,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Xe,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function b8({width:e,height:n}){const i=Math.min(e,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:l.jsx("path",{d:`M${e/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function v8({width:e,height:n}){const i=Math.min(e,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("circle",{cx:e/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${e/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function w8({width:e,height:n}){const i=Math.min(36,n*.25,e*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:e*.04,alignItems:"flex-start"},children:[l.jsx(Jn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Xe,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Xe,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function S8({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Xe,{w:e*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:e*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(di,{size:a}),l.jsx(Xe,{w:e*.12,h:3,strong:!0}),l.jsx(Xe,{w:e*.08,h:2})]},u))})]})}function C8({width:e,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:e*.06,gap:n*.04},children:[l.jsx(Xe,{w:e*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Xe,{w:e*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Xe,{w:Math.min(60,e*.2),h:2}),l.jsx(Jn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(Jn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Xe,{w:e*.4,h:2})]})}function k8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:e*.04,gap:n*.03},children:[l.jsx(Xe,{w:e*.4,h:4,strong:!0}),l.jsx(Xe,{w:e*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Xe,{w:50,h:2}),l.jsx(Jn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Xe,{w:40,h:2}),l.jsx(Jn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Xe,{w:50,h:2}),l.jsx(Jn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Xe,{w:60,h:2}),l.jsx(Jn,{w:"100%",h:"100%",radius:4})]}),l.jsx(Jn,{w:Math.min(120,e*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var j8={navigation:mj,hero:pj,sidebar:_j,footer:gj,modal:yj,card:xj,text:bj,image:vj,table:wj,list:Sj,button:Cj,input:kj,form:jj,tabs:Mj,avatar:Ej,badge:Tj,header:Aj,section:Nj,grid:Dj,dropdown:Rj,toggle:Bj,search:Lj,toast:Oj,progress:zj,chart:$j,video:Ij,tooltip:Pj,breadcrumb:Hj,pagination:Uj,divider:Vj,accordion:Yj,carousel:Wj,pricing:Fj,testimonial:Xj,cta:Gj,alert:qj,banner:Kj,stat:Qj,stepper:Zj,tag:Jj,rating:e8,map:t8,timeline:n8,fileUpload:s8,codeBlock:o8,calendar:i8,notification:a8,productCard:r8,profile:l8,drawer:c8,popover:u8,logo:d8,faq:f8,gallery:h8,checkbox:m8,radio:p8,slider:_8,datePicker:g8,skeleton:y8,chip:x8,icon:b8,spinner:v8,feature:w8,team:S8,login:C8,contact:k8};function M8({type:e,width:n,height:i,text:a}){const c=j8[e];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:e})})}var E8=`svg[fill=none] {
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
}`,T8={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-design-mode-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(e)),e.textContent=E8}var Pe=T8,kl=24,yd=5;function wx(e,n,i,a,c){let u=1/0,d=1/0;const h=e.x,p=e.x+e.width,y=e.x+e.width/2,g=e.y,x=e.y+e.height,b=e.y+e.height/2,w=!a,C=w?[h,p,y]:[...a.left?[h]:[],...a.right?[p]:[]],E=w?[g,x,b]:[...a.top?[g]:[],...a.bottom?[x]:[]],M=[];for(const ye of n)i.has(ye.id)||M.push(ye);c&&M.push(...c);for(const ye of M){const Re=ye.x,Ge=ye.x+ye.width,oe=ye.x+ye.width/2,me=ye.y,O=ye.y+ye.height,ae=ye.y+ye.height/2;for(const H of C)for(const pe of[Re,Ge,oe]){const we=pe-H;Math.abs(we)<yd&&Math.abs(we)<Math.abs(u)&&(u=we)}for(const H of E)for(const pe of[me,O,ae]){const we=pe-H;Math.abs(we)<yd&&Math.abs(we)<Math.abs(d)&&(d=we)}}const A=Math.abs(u)<yd?u:0,U=Math.abs(d)<yd?d:0,L=[],T=new Set,G=h+A,F=p+A,W=y+A,K=g+U,de=x+U,he=b+U;for(const ye of M){const Re=ye.x,Ge=ye.x+ye.width,oe=ye.x+ye.width/2,me=ye.y,O=ye.y+ye.height,ae=ye.y+ye.height/2;for(const H of[Re,oe,Ge])for(const pe of[G,W,F])if(Math.abs(pe-H)<.5){const we=`x:${Math.round(H)}`;T.has(we)||(T.add(we),L.push({axis:"x",pos:H}))}for(const H of[me,ae,O])for(const pe of[K,he,de])if(Math.abs(pe-H)<.5){const we=`y:${Math.round(H)}`;T.has(we)||(T.add(we),L.push({axis:"y",pos:H}))}}return{dx:A,dy:U,guides:L}}function Sx(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function A8({placements:e,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:y,onSelectionChange:g,deselectSignal:x,onDragMove:b,onDragEnd:w,clearSignal:C,wireframe:E}){const[M,A]=_.useState(new Set),[U,L]=_.useState(null),[T,G]=_.useState(null),[F,W]=_.useState(null),[K,de]=_.useState([]),[he,ye]=_.useState(null),[Re,Ge]=_.useState(!1),oe=_.useRef(!1),[me,O]=_.useState(new Set),ae=_.useRef(new Map),H=_.useRef(null),pe=_.useRef(null),we=_.useRef(e);we.current=e;const I=_.useRef(g);I.current=g;const ce=_.useRef(b);ce.current=b;const ee=_.useRef(w);ee.current=w;const Ce=_.useRef(x);_.useEffect(()=>{x!==Ce.current&&(Ce.current=x,A(new Set))},[x]);const Te=_.useRef(C);_.useEffect(()=>{if(C!==void 0&&C!==Te.current){Te.current=C;const J=new Set(we.current.map(Be=>Be.id));J.size>0&&(O(J),A(new Set),pe.current=null,Vt(()=>{n([]),O(new Set)},180))}},[C,n]),_.useEffect(()=>{const J=Be=>{const dt=Be.target;if(!(dt.tagName==="INPUT"||dt.tagName==="TEXTAREA"||dt.isContentEditable)){if((Be.key==="Backspace"||Be.key==="Delete")&&M.size>0){Be.preventDefault();const gt=new Set(M);O(gt),A(new Set),Vt(()=>{n(we.current.filter(He=>!gt.has(He.id))),O(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Be.key)&&M.size>0){Be.preventDefault();const gt=Be.shiftKey?20:1,He=Be.key==="ArrowLeft"?-gt:Be.key==="ArrowRight"?gt:0,bt=Be.key==="ArrowUp"?-gt:Be.key==="ArrowDown"?gt:0;n(e.map(yt=>M.has(yt.id)?{...yt,x:Math.max(0,yt.x+He),y:Math.max(0,yt.y+bt)}:yt));return}if(Be.key==="Escape"){i?a(null):M.size>0&&A(new Set);return}}};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[M,i,e,n,a]);const _e=_.useCallback(J=>{if(J.button!==0||p||J.target.closest(`.${Pe.placement}`))return;J.preventDefault(),J.stopPropagation();const dt=window.scrollY,at=J.clientX,gt=J.clientY;if(i){pe.current="place",d==null||d(!0);let He=!1,bt=at,yt=gt;const Mt=st=>{bt=st.clientX,yt=st.clientY;const B=Math.abs(bt-at),te=Math.abs(yt-gt);if((B>5||te>5)&&(He=!0),He){const Se=Math.min(at,bt),Ne=Math.min(gt,yt),it=Math.abs(bt-at),Ve=Math.abs(yt-gt);L({x:Se,y:Ne,w:it,h:Ve}),W({x:st.clientX+12,y:st.clientY+12,text:`${Math.round(it)} × ${Math.round(Ve)}`})}},$t=st=>{window.removeEventListener("mousemove",Mt),window.removeEventListener("mouseup",$t),L(null),W(null),pe.current=null,d==null||d(!1);const B=Et[i];let te,Se,Ne,it;He?(te=Math.min(at,bt),Se=Math.min(gt,yt)+dt,Ne=Math.max(kl,Math.abs(bt-at)),it=Math.max(kl,Math.abs(yt-gt))):(Ne=B.width,it=B.height,te=at-Ne/2,Se=gt+dt-it/2),te=Math.max(0,te),Se=Math.max(0,Se);const Ve={id:Sx(),type:i,x:te,y:Se,width:Ne,height:it,scrollY:dt,timestamp:Date.now()},De=[...e,Ve];n(De),A(new Set([Ve.id])),a(null)};window.addEventListener("mousemove",Mt),window.addEventListener("mouseup",$t)}else{J.shiftKey||A(new Set),pe.current="select";let He=!1;const bt=Mt=>{const $t=Math.abs(Mt.clientX-at),st=Math.abs(Mt.clientY-gt);if(($t>4||st>4)&&(He=!0),He){const B=Math.min(at,Mt.clientX),te=Math.min(gt,Mt.clientY);G({x:B,y:te,w:Math.abs(Mt.clientX-at),h:Math.abs(Mt.clientY-gt)})}},yt=Mt=>{if(window.removeEventListener("mousemove",bt),window.removeEventListener("mouseup",yt),pe.current=null,He){const $t=Math.min(at,Mt.clientX),st=Math.min(gt,Mt.clientY)+dt,B=Math.abs(Mt.clientX-at),te=Math.abs(Mt.clientY-gt),Se=new Set(J.shiftKey?M:new Set);for(const Ne of e)Ne.y-dt,Ne.x+Ne.width>$t&&Ne.x<$t+B&&Ne.y+Ne.height>st&&Ne.y<st+te&&Se.add(Ne.id);A(Se)}G(null)};window.addEventListener("mousemove",bt),window.addEventListener("mouseup",yt)}},[i,p,e,n,M]),Oe=_.useCallback((J,Be)=>{var Ve;if(J.button!==0)return;const dt=J.target;if(dt.closest(`.${Pe.handle}`)||dt.closest(`.${Pe.deleteButton}`))return;J.preventDefault(),J.stopPropagation();let at;J.shiftKey?(at=new Set(M),at.has(Be)?at.delete(Be):at.add(Be)):M.has(Be)?at=new Set(M):at=new Set([Be]),A(at),(at.size!==M.size||[...at].some(De=>!M.has(De)))&&((Ve=I.current)==null||Ve.call(I,at,J.shiftKey));const He=J.clientX,bt=J.clientY,yt=new Map;for(const De of e)at.has(De.id)&&yt.set(De.id,{x:De.x,y:De.y});pe.current="move",d==null||d(!0);let Mt=!1,$t=!1,st=e,B=0,te=0;const Se=new Map;for(const De of e)yt.has(De.id)&&Se.set(De.id,{w:De.width,h:De.height});const Ne=De=>{var Kt;const ge=De.clientX-He,ot=De.clientY-bt;if((Math.abs(ge)>2||Math.abs(ot)>2)&&(Mt=!0),!Mt)return;if(De.altKey&&!$t){$t=!0;const ht=[];for(const Ht of e)yt.has(Ht.id)&&ht.push({...Ht,id:Sx(),timestamp:Date.now()});st=[...e,...ht]}let qe=1/0,nt=1/0,Ie=-1/0,tt=-1/0;for(const[ht,Ht]of yt){const dn=Se.get(ht);dn&&(qe=Math.min(qe,Ht.x+ge),nt=Math.min(nt,Ht.y+ot),Ie=Math.max(Ie,Ht.x+ge+dn.w),tt=Math.max(tt,Ht.y+ot+dn.h))}const xt={x:qe,y:nt,width:Ie-qe,height:tt-nt},{dx:wt,dy:Qe,guides:Rt}=wx(xt,st,new Set(yt.keys()),void 0,y);de(Rt);const kt=ge+wt,mt=ot+Qe;B=kt,te=mt,n(st.map(ht=>{const Ht=yt.get(ht.id);return Ht?{...ht,x:Math.max(0,Ht.x+kt),y:Math.max(0,Ht.y+mt)}:ht})),(Kt=ce.current)==null||Kt.call(ce,kt,mt)},it=()=>{var De;window.removeEventListener("mousemove",Ne),window.removeEventListener("mouseup",it),pe.current=null,d==null||d(!1),de([]),(De=ee.current)==null||De.call(ee,B,te,Mt)};window.addEventListener("mousemove",Ne),window.addEventListener("mouseup",it)},[M,e,n,d]),Je=_.useCallback((J,Be,dt)=>{J.preventDefault(),J.stopPropagation();const at=e.find(Se=>Se.id===Be);if(!at)return;A(new Set([Be])),pe.current="resize",d==null||d(!0);const gt=J.clientX,He=J.clientY,bt=at.width,yt=at.height,Mt=at.x,$t=at.y,st={left:dt.includes("w"),right:dt.includes("e"),top:dt.includes("n"),bottom:dt.includes("s")},B=Se=>{const Ne=Se.clientX-gt,it=Se.clientY-He;let Ve=bt,De=yt,ge=Mt,ot=$t;dt.includes("e")&&(Ve=Math.max(kl,bt+Ne)),dt.includes("w")&&(Ve=Math.max(kl,bt-Ne),ge=Mt+bt-Ve),dt.includes("s")&&(De=Math.max(kl,yt+it)),dt.includes("n")&&(De=Math.max(kl,yt-it),ot=$t+yt-De);const qe={x:ge,y:ot,width:Ve,height:De},{dx:nt,dy:Ie,guides:tt}=wx(qe,we.current,new Set([Be]),st,y);de(tt),nt!==0&&(st.right?Ve+=nt:st.left&&(ge+=nt,Ve-=nt)),Ie!==0&&(st.bottom?De+=Ie:st.top&&(ot+=Ie,De-=Ie)),n(we.current.map(xt=>xt.id===Be?{...xt,x:ge,y:ot,width:Ve,height:De}:xt)),W({x:Se.clientX+12,y:Se.clientY+12,text:`${Math.round(Ve)} × ${Math.round(De)}`})},te=()=>{window.removeEventListener("mousemove",B),window.removeEventListener("mouseup",te),W(null),pe.current=null,d==null||d(!1),de([])};window.addEventListener("mousemove",B),window.addEventListener("mouseup",te)},[e,n,d]),We=_.useCallback(J=>{pe.current=null,O(Be=>{const dt=new Set(Be);return dt.add(J),dt}),A(Be=>{const dt=new Set(Be);return dt.delete(J),dt}),Vt(()=>{n(we.current.filter(Be=>Be.id!==J)),O(Be=>{const dt=new Set(Be);return dt.delete(J),dt})},180)},[n]),pt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Tt=_.useCallback(J=>{const Be=e.find(dt=>dt.id===J);Be&&(oe.current=!!Be.text,ye(J),Ge(!1))},[e]),Ct=_.useCallback(()=>{he&&(Ge(!0),Vt(()=>{ye(null),Ge(!1)},150))},[he]);_.useEffect(()=>{u&&he&&Ct()},[u]);const ut=_.useCallback(J=>{he&&(n(e.map(Be=>Be.id===he?{...Be,text:J.trim()||void 0}:Be)),Ct())},[he,e,n,Ct]),Ot=typeof window<"u"?window.scrollY:0,_t=["nw","ne","se","sw"],Gt=E?"#f97316":"#3c82f7",en=[{dir:"n",cls:Pe.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:Gt})})},{dir:"e",cls:Pe.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:Gt})})},{dir:"s",cls:Pe.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:Gt})})},{dir:"w",cls:Pe.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:Gt})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:H,className:`${Pe.overlay} ${c?"":Pe.light} ${i?Pe.placing:""} ${p?Pe.passthrough:""} ${u?Pe.overlayExiting:""} ${E?Pe.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:_e,children:e.map(J=>{var gt;const Be=M.has(J.id),dt=((gt=ia[J.type])==null?void 0:gt.label)||J.type,at=J.y-Ot;return l.jsxs("div",{"data-design-placement":J.id,className:`${Pe.placement} ${Be?Pe.selected:""} ${me.has(J.id)?Pe.exiting:""}`,style:{left:J.x,top:at,width:J.width,height:J.height,position:"fixed"},onMouseDown:He=>Oe(He,J.id),onDoubleClick:()=>Tt(J.id),children:[l.jsx("span",{className:Pe.placementLabel,children:dt}),l.jsx("span",{className:`${Pe.placementAnnotation} ${J.text?Pe.annotationVisible:""}`,children:(J.text&&ae.current.set(J.id,J.text),J.text||ae.current.get(J.id)||"")}),l.jsx("div",{className:Pe.placementContent,children:l.jsx(M8,{type:J.type,width:J.width,height:J.height,text:J.text})}),l.jsx("div",{className:Pe.deleteButton,onMouseDown:He=>He.stopPropagation(),onClick:()=>We(J.id),children:"✕"}),_t.map(He=>l.jsx("div",{className:`${Pe.handle} ${Pe[`handle${He.charAt(0).toUpperCase()}${He.slice(1)}`]}`,onMouseDown:bt=>Je(bt,J.id,He)},He)),en.map(({dir:He,cls:bt,arrow:yt})=>l.jsx("div",{className:`${Pe.edgeHandle} ${bt}`,onMouseDown:Mt=>Je(Mt,J.id,He),children:yt},He))]},J.id)})}),he&&(()=>{var $t,st;const J=e.find(B=>B.id===he);if(!J)return null;const Be=J.y-Ot,dt=J.x+J.width/2,at=Be-8,gt=Be+J.height+8,He=at>200,bt=gt<window.innerHeight-100,yt=Math.max(160,Math.min(window.innerWidth-160,dt));let Mt;return He?Mt={left:yt,bottom:window.innerHeight-at}:bt?Mt={left:yt,top:gt}:Mt={left:yt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(Zd,{element:(($t=ia[J.type])==null?void 0:$t.label)||J.type,placeholder:pt[J.type]||"Label or content text",initialValue:(st=J.text)!=null?st:"",submitLabel:oe.current?"Save":"Set",onSubmit:ut,onCancel:Ct,onDelete:oe.current?()=>{ut("")}:void 0,isExiting:Re,lightMode:!c,style:Mt})})(),U&&l.jsx("div",{className:Pe.drawBox,style:{left:U.x,top:U.y,width:U.w,height:U.h},"data-feedback-toolbar":!0}),T&&l.jsx("div",{className:Pe.selectBox,style:{left:T.x,top:T.y,width:T.w,height:T.h},"data-feedback-toolbar":!0}),F&&l.jsx("div",{className:Pe.sizeIndicator,style:{left:F.x,top:F.y},"data-feedback-toolbar":!0,children:F.text}),K.map((J,Be)=>l.jsx("div",{className:Pe.guideLine,style:J.axis==="x"?{position:"fixed",left:J.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:J.pos-Ot,right:0,height:1},"data-feedback-toolbar":!0},`${J.axis}-${J.pos}-${Be}`))]})}function N8(e){if(!e)return"";const n=e.scrollTop>2,i=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${n?Pe.fadeTop:""} ${i?Pe.fadeBottom:""}`}var P="currentColor",$e="0.5";function D8({type:e}){switch(e){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:P,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:P,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:P,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:P,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:P,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:P,strokeWidth:$e})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:P,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:P,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:P,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:P,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:P,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:P,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:P,strokeWidth:$e})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:P,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:P,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:P,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:P,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:P,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:P,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:P,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:P,strokeWidth:$e,fill:P,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:P,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:P,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:P,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:P,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:P,strokeWidth:$e})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:P,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:P,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:P,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:P,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:P,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:P,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:P,strokeWidth:$e})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:P,strokeWidth:$e,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:P,strokeWidth:$e,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:P,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:P,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:P,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:P,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:P,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:P,strokeWidth:$e}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:P,strokeWidth:$e,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:P,strokeWidth:$e,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:P,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:P,strokeWidth:$e})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:P,strokeWidth:$e})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:P,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:P,strokeWidth:$e,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:P,strokeWidth:$e,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:P,strokeWidth:$e}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:P,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:P,strokeWidth:$e}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:P,strokeWidth:$e}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:P,strokeWidth:$e})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:P,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:P,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:P,strokeWidth:$e,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:P,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:P,strokeWidth:$e,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:P,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:P,opacity:".15",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:P,strokeWidth:$e})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:P,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:P,strokeWidth:$e,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:P,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:P,strokeWidth:$e})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:P,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:P,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:P,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:P,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:P,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:P,strokeWidth:$e,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:P,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:P,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:P,strokeWidth:$e})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:P,strokeWidth:$e,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:P,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:P,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:P,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:P,strokeWidth:$e})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:P,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:P,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:P,opacity:".2",stroke:P,strokeWidth:$e}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:P,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:P,strokeWidth:$e}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:P,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:P,strokeWidth:$e})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:P,strokeWidth:$e,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:P,strokeWidth:$e,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:P,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:P,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:P,strokeWidth:$e,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:P,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:P,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:P,opacity:".15",stroke:P,strokeWidth:$e})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:P,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:P,opacity:".2",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:P,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:P,strokeWidth:$e,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:P,strokeWidth:$e,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:P,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:P,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:P,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:P,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:P,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:P,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:P,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:P,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:P,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:P,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:P,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:P,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:P,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:P,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:P,strokeWidth:$e,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:P,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:P,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:P,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:P,strokeWidth:$e})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:P,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:P,strokeWidth:$e,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:P,strokeWidth:$e})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:P,strokeWidth:$e}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:P,strokeWidth:$e,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:P,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:P,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:P,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:P,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:P,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:P,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:P,strokeWidth:$e})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:P,strokeWidth:$e,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:P,strokeWidth:$e}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:P,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:P,strokeWidth:$e})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:P,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:P,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:P,strokeWidth:$e,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:P,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:P,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:P,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:P,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:P,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:P,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:P,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:P,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:P,opacity:".08",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:P,strokeWidth:$e,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:P,strokeWidth:$e,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:P,strokeWidth:$e,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:P,strokeWidth:$e,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:P,strokeWidth:$e,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:P,strokeWidth:$e,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:P,strokeWidth:$e,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:P,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:P,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:P,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:P,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:P,strokeWidth:$e,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:P,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:P,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:P,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:P,opacity:".2"})]});default:return null}}function R8({activeType:e,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${Pe.placeScroll} ${c||""}`,children:c2.map(d=>l.jsxs("div",{className:Pe.paletteSection,children:[l.jsx("div",{className:Pe.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${Pe.paletteItem} ${e===h.type?Pe.active:""} ${u?Pe.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:Pe.paletteItemIcon,children:l.jsx(D8,{type:h.type})}),l.jsx("span",{className:Pe.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function B8({value:e,suffix:n}){const[i,a]=_.useState(null),[c,u]=_.useState(n),[d,h]=_.useState("up"),p=_.useRef(e),y=_.useRef(n),g=_.useRef(),x=i!==null&&c!==n;return _.useEffect(()=>{if(e!==p.current){if(e===0){p.current=e,y.current=n,a(null);return}h(e>p.current?"up":"down"),a(p.current),u(y.current),p.current=e,y.current=n,clearTimeout(g.current),g.current=Vt(()=>a(null),250)}else y.current=n},[e,n]),i===null?l.jsxs(l.Fragment,{children:[e,n?` ${n}`:""]}):x?l.jsxs("span",{className:Pe.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[e," ",n]}),l.jsxs("span",{className:`${Pe.rollingNum} ${d==="up"?Pe.exitUp:Pe.exitDown}`,children:[i," ",c]},`o${i}-${e}`),l.jsxs("span",{className:`${Pe.rollingNum} ${d==="up"?Pe.enterUp:Pe.enterDown}`,children:[e," ",n]},`n${e}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:Pe.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:e}),l.jsx("span",{className:`${Pe.rollingNum} ${d==="up"?Pe.exitUp:Pe.exitDown}`,children:i},`o${i}-${e}`),l.jsx("span",{className:`${Pe.rollingNum} ${d==="up"?Pe.enterUp:Pe.enterDown}`,children:e},`n${e}`)]}),n?` ${n}`:""]})}function L8({activeType:e,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:y,blankCanvas:g,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:w,Tooltip:C}){const[E,M]=_.useState(!1),[A,U]=_.useState("exit"),[L,T]=_.useState(!1),[G,F]=_.useState(!0),W=_.useRef(0),K=_.useRef(""),de=_.useRef(0),he=_.useRef(),ye=_.useRef(null),[Re,Ge]=_.useState("");_.useEffect(()=>(u?(M(!0),clearTimeout(he.current),cancelAnimationFrame(de.current),de.current=Dl(()=>{de.current=Dl(()=>{U("enter")})})):(cancelAnimationFrame(de.current),U("exit"),clearTimeout(he.current),he.current=Vt(()=>{M(!1),d==null||d()},200)),()=>cancelAnimationFrame(de.current)),[u]);const oe=h>0||a>0,me=h+a;return me>0&&(W.current=me,K.current=g?me===1?"Component":"Components":me===1?"Change":"Changes"),_.useEffect(()=>{if(oe)L?F(!1):(F(!0),T(!0),Dl(()=>{Dl(()=>{F(!1)})}));else{F(!0);const O=Vt(()=>T(!1),300);return()=>clearTimeout(O)}},[oe]),_.useEffect(()=>{if(!E)return;const O=ye.current;if(!O)return;const ae=()=>Ge(N8(O));ae(),O.addEventListener("scroll",ae,{passive:!0});const H=new ResizeObserver(ae);return H.observe(O),()=>{O.removeEventListener("scroll",ae),H.disconnect()}},[E]),E?l.jsxs("div",{className:`${Pe.palette} ${Pe[A]} ${i?"":Pe.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:O=>O.stopPropagation(),onMouseDown:O=>O.stopPropagation(),onTransitionEnd:O=>{O.target===O.currentTarget&&(u||(clearTimeout(he.current),M(!1),U("exit"),d==null||d()))},children:[l.jsxs("div",{className:Pe.paletteHeader,children:[l.jsx("div",{className:Pe.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:Pe.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${Pe.canvasToggle} ${g?Pe.active:""}`,onClick:()=>x(!g),children:[l.jsx("span",{className:Pe.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:Pe.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${Pe.wireframePurposeWrap} ${g?"":Pe.collapsed}`,children:l.jsx("div",{className:Pe.wireframePurposeInner,children:l.jsx("textarea",{className:Pe.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:O=>w(O.target.value),rows:2})})}),l.jsx(R8,{activeType:e,onSelect:n,onDragStart:y,scrollRef:ye,fadeClass:Re,blankCanvas:g}),L&&l.jsx("div",{className:`${Pe.paletteFooterWrap} ${G?Pe.footerHidden:""}`,children:l.jsx("div",{className:Pe.paletteFooterInner,children:l.jsx("div",{className:Pe.paletteFooterInnerContent,children:l.jsxs("div",{className:Pe.paletteFooter,children:[l.jsx("span",{className:Pe.paletteFooterCount,children:l.jsx(B8,{value:W.current,suffix:K.current})}),l.jsx("button",{className:Pe.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function zl(e){if(e.parentElement)return e.parentElement;const n=e.getRootNode();return n instanceof ShadowRoot?n.host:null}function ri(e,n){let i=e;for(;i;){if(i.matches(n))return i;i=zl(i)}return null}function O8(e,n=4){const i=[];let a=e,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(y=>y.length>2&&!y.match(/^[a-z]{1,2}$/)&&!y.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=zl(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function Rl(e){var a,c,u,d,h,p,y,g;const n=O8(e);if(e.dataset.element)return{name:e.dataset.element,path:n};const i=e.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=ri(e,"svg");if(x){const b=zl(x);if(b instanceof HTMLElement)return{name:`graphic in ${Rl(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=zl(e);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=e.textContent)==null?void 0:c.trim(),b=e.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=e.textContent)==null?void 0:u.trim(),b=e.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=e.getAttribute("type")||"text",b=e.getAttribute("placeholder"),w=e.getAttribute("name");return b?{name:`input "${b}"`,path:n}:w?{name:`input [${w}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=e.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=e.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=e.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(y=e.textContent)==null?void 0:y.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(g=e.textContent)==null?void 0:g.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=e.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=e.className,b=e.getAttribute("role"),w=e.getAttribute("aria-label");if(w)return{name:`${i} [${w}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const C=x.split(/[\s_-]+/).map(E=>E.replace(/[A-Z0-9]{5,}.*$/,"")).filter(E=>E.length>2&&!/^[a-z]{1,2}$/.test(E)).slice(0,2);if(C.length>0)return{name:C.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function Tc(e){var u,d,h;const n=[],i=(u=e.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=e.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=e.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function xd(e){const n=zl(e);if(!n)return"";const c=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(n.children)).filter(g=>g!==e&&g instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(g=>{var C;const x=g.tagName.toLowerCase(),b=g.className;let w="";if(typeof b=="string"&&b){const E=b.split(/\s+/).map(M=>M.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(M=>M.length>2&&!/^[a-z]{1,2}$/.test(M));E&&(w=`.${E}`)}if(x==="button"||x==="a"){const E=(C=g.textContent)==null?void 0:C.trim().slice(0,15);if(E)return`${x}${w} "${E}"`}return`${x}${w}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const g=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));g&&(h=`.${g}`)}const p=n.children.length,y=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+y}function Ac(e){const n=e.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var u2=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),z8=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),$8=new Set(["input","textarea","select"]),I8=new Set(["img","video","canvas","svg"]),P8=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function bd(e){if(typeof window>"u")return{};const n=window.getComputedStyle(e),i={},a=e.tagName.toLowerCase();let c;z8.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&e.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:$8.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:I8.has(a)?c=["width","height","objectFit","borderRadius"]:P8.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!u2.has(h)&&(i[u]=h)}return i}var H8=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function vd(e){if(typeof window>"u")return"";const n=window.getComputedStyle(e),i=[];for(const a of H8){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!u2.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function U8(e){if(!e)return;const n={},i=e.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function wd(e){const n=[],i=e.getAttribute("role"),a=e.getAttribute("aria-label"),c=e.getAttribute("aria-describedby"),u=e.getAttribute("tabindex"),d=e.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),e.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Sd(e){const n=[];let i=e;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=zl(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var V8=new Set(["nav","header","main","section","article","footer","aside"]),yp={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Cx={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},Y8=new Set(["script","style","noscript","link","meta"]),W8=40;function d2(e){let n=e;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Wr(e){const n=e.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className=="string"){const c=e.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=e.parentElement;if(i){const c=Array.from(i.children).indexOf(e)+1;return`${i===document.body?"body":Wr(i)} > ${n}:nth-child(${c})`}return n}function Jd(e){var d;const n=e.tagName.toLowerCase(),i=e.getAttribute("aria-label");if(i)return i;const a=e.getAttribute("role");if(a&&yp[a])return yp[a];if(Cx[n])return Cx[n];const c=e.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=Rl(e);return u.charAt(0).toUpperCase()+u.slice(1)}function f2(e){const n=e.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function h2(e){var a;const n=(a=e.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function F8(){const e=document.querySelector("main")||document.body,n=Array.from(e.children);let i=n;e!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(Y8.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<W8)return;const y=V8.has(d),g=c.getAttribute("role")&&yp[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!y&&!g&&!x)return;const b=window.scrollY,w=d2(c),C={x:p.x,y:w?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Jd(c),tagName:d,selector:Wr(c),role:c.getAttribute("role"),className:f2(c),textSnippet:h2(c),originalRect:C,currentRect:{...C},originalIndex:u,isFixed:w})}),a}function X8(e){const n=window.scrollY,i=e.getBoundingClientRect(),a=d2(e),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=e.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Jd(e),tagName:e.tagName.toLowerCase(),selector:Wr(e),role:e.getAttribute("role"),className:f2(e),textSnippet:h2(e),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var kx={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},jx=["nw","n","ne","e","se","s","sw","w"],Cd=24,Mx=16,kd=5;function Ex(e,n,i,a){let c=1/0,u=1/0;const d=e.x,h=e.x+e.width,p=e.x+e.width/2,y=e.y,g=e.y+e.height,x=e.y+e.height/2,b=[];for(const W of n)i.has(W.id)||b.push(W.currentRect);a&&b.push(...a);for(const W of b){const K=W.x,de=W.x+W.width,he=W.x+W.width/2,ye=W.y,Re=W.y+W.height,Ge=W.y+W.height/2;for(const oe of[d,h,p])for(const me of[K,de,he]){const O=me-oe;Math.abs(O)<kd&&Math.abs(O)<Math.abs(c)&&(c=O)}for(const oe of[y,g,x])for(const me of[ye,Re,Ge]){const O=me-oe;Math.abs(O)<kd&&Math.abs(O)<Math.abs(u)&&(u=O)}}const w=Math.abs(c)<kd?c:0,C=Math.abs(u)<kd?u:0,E=[],M=new Set,A=d+w,U=h+w,L=p+w,T=y+C,G=g+C,F=x+C;for(const W of b){const K=W.x,de=W.x+W.width,he=W.x+W.width/2,ye=W.y,Re=W.y+W.height,Ge=W.y+W.height/2;for(const oe of[K,he,de])for(const me of[A,L,U])if(Math.abs(me-oe)<.5){const O=`x:${Math.round(oe)}`;M.has(O)||(M.add(O),E.push({axis:"x",pos:oe}))}for(const oe of[ye,Ge,Re])for(const me of[T,F,G])if(Math.abs(me-oe)<.5){const O=`y:${Math.round(oe)}`;M.has(O)||(M.add(O),E.push({axis:"y",pos:oe}))}}return{dx:w,dy:C,guides:E}}var G8=new Set(["script","style","noscript","link","meta","br","hr"]);function Tx(e){let n=e;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(G8.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Mx&&i.height>=Mx)return n;n=n.parentElement}return null}function q8({rearrangeState:e,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:y,onDragEnd:g,clearSignal:x}){const{sections:b}=e,w=_.useRef(e);w.current=e;const[C,E]=_.useState(new Set),[M,A]=_.useState(!1),U=_.useRef(x);_.useEffect(()=>{x!==void 0&&x!==U.current&&(U.current=x,b.length>0&&A(!0))},[x,b.length]);const L=_.useRef(p);_.useEffect(()=>{p!==L.current&&(L.current=p,E(new Set))},[p]);const[T,G]=_.useState(null),[F,W]=_.useState(!1),K=_.useRef(!1),de=_.useCallback(B=>{const te=b.find(Se=>Se.id===B);te&&(K.current=!!te.note,G(B),W(!1))},[b]),he=_.useCallback(()=>{T&&(W(!0),Vt(()=>{G(null),W(!1)},150))},[T]),ye=_.useCallback(B=>{T&&(n({...e,sections:b.map(te=>te.id===T?{...te,note:B.trim()||void 0}:te)}),he())},[T,b,e,n,he]);_.useEffect(()=>{a&&T&&he()},[a]);const[Re,Ge]=_.useState(new Set),oe=_.useRef(new Map),[me,O]=_.useState(null),[ae,H]=_.useState(null),[pe,we]=_.useState([]),[I,ce]=_.useState(0),ee=_.useRef(null),Ce=_.useRef(new Set),Te=_.useRef(new Map),[_e,Oe]=_.useState(new Map),[Je,We]=_.useState(new Map),pt=_.useRef(new Set),Tt=_.useRef(new Map),Ct=_.useRef(h);Ct.current=h;const ut=_.useRef(y);ut.current=y;const Ot=_.useRef(g);Ot.current=g,_.useEffect(()=>{u&&E(new Set)},[u]);const[_t,Gt]=_.useState(()=>!e.sections.some(B=>{const te=B.originalRect,Se=B.currentRect;return Math.abs(te.x-Se.x)>1||Math.abs(te.y-Se.y)>1||Math.abs(te.width-Se.width)>1||Math.abs(te.height-Se.height)>1}));_.useEffect(()=>{if(!_t){const B=Vt(()=>Gt(!0),380);return()=>clearTimeout(B)}},[]);const en=_.useRef(new Set);_.useEffect(()=>{en.current=new Set(b.map(B=>B.selector))},[b]),_.useEffect(()=>{const B=()=>ce(window.scrollY);return B(),window.addEventListener("scroll",B,{passive:!0}),window.addEventListener("resize",B,{passive:!0}),()=>{window.removeEventListener("scroll",B),window.removeEventListener("resize",B)}},[]),_.useEffect(()=>{const B=te=>{if(ee.current){O(null);return}const Se=document.elementFromPoint(te.clientX,te.clientY);if(!Se){O(null);return}if(Se.closest("[data-feedback-toolbar]")){O(null);return}if(Se.closest("[data-design-placement]")){O(null);return}if(Se.closest("[data-annotation-popup]")){O(null);return}const Ne=Tx(Se);if(!Ne){O(null);return}for(const Ve of en.current)try{const De=document.querySelector(Ve);if(De&&(De===Ne||Ne.contains(De))){O(null);return}}catch{}const it=Ne.getBoundingClientRect();O({x:it.x,y:it.y,w:it.width,h:it.height})};return document.addEventListener("mousemove",B,{passive:!0}),()=>document.removeEventListener("mousemove",B)},[b]),_.useEffect(()=>{const B=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=B}},[]),_.useEffect(()=>{const B=te=>{var De,ge,ot,qe;if(ee.current||te.button!==0)return;const Se=te.target;if(!Se||Se.closest("[data-feedback-toolbar]")||Se.closest("[data-design-placement]")||Se.closest("[data-annotation-popup]"))return;const Ne=Tx(Se);let it=!1;if(Ne)for(const nt of en.current)try{const Ie=document.querySelector(nt);if(Ie&&(Ie===Ne||Ne.contains(Ie))){it=!0;break}}catch{}const Ve=!!(te.shiftKey||te.metaKey||te.ctrlKey);if(Ne&&!it){te.preventDefault(),te.stopPropagation();const nt=X8(Ne),Ie=[...b,nt],tt=[...e.originalOrder,nt.id];n({...e,sections:Ie,originalOrder:tt});const xt=new Set([nt.id]);E(xt),(De=Ct.current)==null||De.call(Ct,xt,Ve),O(null);const wt=te.clientX,Qe=te.clientY,Rt={x:nt.currentRect.x,y:nt.currentRect.y};nt.originalRect;let kt=!1,mt=0,Kt=0;ee.current="move";const ht=dn=>{var Nt;const Lt=dn.clientX-wt,St=dn.clientY-Qe;if(!kt&&(Math.abs(Lt)>2||Math.abs(St)>2)&&(kt=!0),!kt)return;const fn={x:Rt.x+Lt,y:Rt.y+St,width:nt.currentRect.width,height:nt.currentRect.height},ls=Ex(fn,Ie,new Set([nt.id]),d);we(ls.guides);const sn=Lt+ls.dx,Sn=St+ls.dy;mt=sn,Kt=Sn;const tn=document.querySelector(`[data-rearrange-section="${nt.id}"]`);tn&&(tn.style.transform=`translate(${sn}px, ${Sn}px)`),Oe(new Map([[nt.id,{x:Rt.x+sn,y:Rt.y+Sn,width:nt.currentRect.width,height:nt.currentRect.height}]])),(Nt=ut.current)==null||Nt.call(ut,sn,Sn)},Ht=()=>{var Lt;window.removeEventListener("mousemove",ht),window.removeEventListener("mouseup",Ht),ee.current=null,we([]),Oe(new Map);const dn=document.querySelector(`[data-rearrange-section="${nt.id}"]`);dn&&(dn.style.transform=""),kt&&n({...e,sections:Ie.map(St=>St.id===nt.id?{...St,currentRect:{...St.currentRect,x:Math.max(0,Rt.x+mt),y:Math.max(0,Rt.y+Kt)}}:St),originalOrder:tt}),(Lt=Ot.current)==null||Lt.call(Ot,mt,Kt,kt)};window.addEventListener("mousemove",ht),window.addEventListener("mouseup",Ht)}else if(it&&Ne){te.preventDefault();for(const nt of b)try{const Ie=document.querySelector(nt.selector);if(Ie&&Ie===Ne){const tt=new Set([nt.id]);E(tt),(ge=Ct.current)==null||ge.call(Ct,tt,Ve);return}}catch{}Ve||(E(new Set),(ot=Ct.current)==null||ot.call(Ct,new Set,!1))}else Ve||(E(new Set),(qe=Ct.current)==null||qe.call(Ct,new Set,!1))};return document.addEventListener("mousedown",B,!0),()=>document.removeEventListener("mousedown",B,!0)},[b,e,n]),_.useEffect(()=>{const B=te=>{const Se=te.target;if(!(Se.tagName==="INPUT"||Se.tagName==="TEXTAREA"||Se.isContentEditable)){if((te.key==="Backspace"||te.key==="Delete")&&C.size>0){te.preventDefault();const Ne=new Set(C);Ge(it=>{const Ve=new Set(it);for(const De of Ne)Ve.add(De);return Ve}),E(new Set),Vt(()=>{const it=w.current;n({...it,sections:it.sections.filter(Ve=>!Ne.has(Ve.id)),originalOrder:it.originalOrder.filter(Ve=>!Ne.has(Ve))}),Ge(Ve=>{const De=new Set(Ve);for(const ge of Ne)De.delete(ge);return De})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(te.key)&&C.size>0){te.preventDefault();const Ne=te.shiftKey?20:1,it=te.key==="ArrowLeft"?-Ne:te.key==="ArrowRight"?Ne:0,Ve=te.key==="ArrowUp"?-Ne:te.key==="ArrowDown"?Ne:0;n({...e,sections:b.map(De=>C.has(De.id)?{...De,currentRect:{...De.currentRect,x:Math.max(0,De.currentRect.x+it),y:Math.max(0,De.currentRect.y+Ve)}}:De)});return}te.key==="Escape"&&C.size>0&&E(new Set)}};return document.addEventListener("keydown",B),()=>document.removeEventListener("keydown",B)},[C,b,e,n]);const J=_.useCallback((B,te)=>{var wt;if(B.button!==0)return;const Se=B.target;if(Se.closest(`.${Pe.handle}`)||Se.closest(`.${Pe.deleteButton}`))return;B.preventDefault(),B.stopPropagation();let Ne;B.shiftKey||B.metaKey||B.ctrlKey?(Ne=new Set(C),Ne.has(te)?Ne.delete(te):Ne.add(te)):C.has(te)?Ne=new Set(C):Ne=new Set([te]),E(Ne),(Ne.size!==C.size||[...Ne].some(Qe=>!C.has(Qe)))&&((wt=Ct.current)==null||wt.call(Ct,Ne,!!(B.shiftKey||B.metaKey||B.ctrlKey)));const Ve=B.clientX,De=B.clientY,ge=new Map;for(const Qe of b)Ne.has(Qe.id)&&ge.set(Qe.id,{x:Qe.currentRect.x,y:Qe.currentRect.y});ee.current="move";let ot=!1,qe=0,nt=0;const Ie=new Map;for(const Qe of b)if(Ne.has(Qe.id)){const Rt=document.querySelector(`[data-rearrange-section="${Qe.id}"]`);Ie.set(Qe.id,{outlineEl:Rt,curW:Qe.currentRect.width,curH:Qe.currentRect.height})}const tt=Qe=>{var ls;const Rt=Qe.clientX-Ve,kt=Qe.clientY-De;if(Rt===0&&kt===0)return;ot=!0;let mt=1/0,Kt=1/0,ht=-1/0,Ht=-1/0;for(const[sn,{curW:Sn,curH:tn}]of Ie){const Nt=ge.get(sn);if(!Nt)continue;const ln=Nt.x+Rt,rt=Nt.y+kt;mt=Math.min(mt,ln),Kt=Math.min(Kt,rt),ht=Math.max(ht,ln+Sn),Ht=Math.max(Ht,rt+tn)}const dn=Ex({x:mt,y:Kt,width:ht-mt,height:Ht-Kt},b,Ne,d),Lt=Rt+dn.dx,St=kt+dn.dy;qe=Lt,nt=St,we(dn.guides);for(const[,{outlineEl:sn}]of Ie)sn&&(sn.style.transform=`translate(${Lt}px, ${St}px)`);const fn=new Map;for(const[sn,{curW:Sn,curH:tn}]of Ie){const Nt=ge.get(sn);if(Nt){const ln={x:Math.max(0,Nt.x+Lt),y:Math.max(0,Nt.y+St),width:Sn,height:tn};fn.set(sn,ln)}}Oe(fn),(ls=ut.current)==null||ls.call(ut,Lt,St)},xt=Qe=>{var Rt,kt;window.removeEventListener("mousemove",tt),window.removeEventListener("mouseup",xt),ee.current=null,we([]),Oe(new Map);for(const[,{outlineEl:mt}]of Ie)mt&&(mt.style.transform="");if(ot){const mt=Qe.clientX-Ve,Kt=Qe.clientY-De;if(Math.abs(mt)<5&&Math.abs(Kt)<5)n({...e,sections:b.map(ht=>{const Ht=ge.get(ht.id);return Ht?{...ht,currentRect:{...ht.currentRect,x:Ht.x,y:Ht.y}}:ht})});else{n({...e,sections:b.map(ht=>{const Ht=ge.get(ht.id);return Ht?{...ht,currentRect:{...ht.currentRect,x:Math.max(0,Ht.x+qe),y:Math.max(0,Ht.y+nt)}}:ht})}),(Rt=Ot.current)==null||Rt.call(Ot,qe,nt,!0);return}}(kt=Ot.current)==null||kt.call(Ot,0,0,!1)};window.addEventListener("mousemove",tt),window.addEventListener("mouseup",xt)},[C,b,e,n]),Be=_.useCallback((B,te,Se)=>{B.preventDefault(),B.stopPropagation();const Ne=b.find(tt=>tt.id===te);if(!Ne)return;E(new Set([te])),ee.current="resize";const it=B.clientX,Ve=B.clientY,De={...Ne.currentRect};Ne.originalRect;const ge=De.width/De.height;let ot={...De};const qe=document.querySelector(`[data-rearrange-section="${te}"]`),nt=tt=>{const xt=tt.clientX-it,wt=tt.clientY-Ve;let Qe=De.x,Rt=De.y,kt=De.width,mt=De.height;if(Se.includes("e")&&(kt=Math.max(Cd,De.width+xt)),Se.includes("w")&&(kt=Math.max(Cd,De.width-xt),Qe=De.x+De.width-kt),Se.includes("s")&&(mt=Math.max(Cd,De.height+wt)),Se.includes("n")&&(mt=Math.max(Cd,De.height-wt),Rt=De.y+De.height-mt),tt.shiftKey)if(Se.length===2){const ht=Math.abs(kt-De.width),Ht=Math.abs(mt-De.height);ht>Ht?mt=kt/ge:kt=mt*ge,Se.includes("w")&&(Qe=De.x+De.width-kt),Se.includes("n")&&(Rt=De.y+De.height-mt)}else Se==="e"||Se==="w"?mt=kt/ge:kt=mt*ge,Se==="w"&&(Qe=De.x+De.width-kt),Se==="n"&&(Rt=De.y+De.height-mt);ot={x:Qe,y:Rt,width:kt,height:mt},qe&&(qe.style.left=`${Qe}px`,qe.style.top=`${Rt-I}px`,qe.style.width=`${kt}px`,qe.style.height=`${mt}px`),H({x:tt.clientX+12,y:tt.clientY+12,text:`${Math.round(kt)} × ${Math.round(mt)}`}),Oe(new Map([[te,ot]]))},Ie=()=>{window.removeEventListener("mousemove",nt),window.removeEventListener("mouseup",Ie),H(null),ee.current=null,Oe(new Map),n({...e,sections:b.map(tt=>tt.id===te?{...tt,currentRect:ot}:tt)})};window.addEventListener("mousemove",nt),window.addEventListener("mouseup",Ie)},[b,e,n,I]),dt=_.useCallback(B=>{Ge(te=>{const Se=new Set(te);return Se.add(B),Se}),E(te=>{const Se=new Set(te);return Se.delete(B),Se}),Vt(()=>{const te=w.current;n({...te,sections:te.sections.filter(Se=>Se.id!==B),originalOrder:te.originalOrder.filter(Se=>Se!==B)}),Ge(Se=>{const Ne=new Set(Se);return Ne.delete(B),Ne})},180)},[n]),at=B=>{const te=B.originalRect,Se=B.currentRect;return Math.abs(te.x-Se.x)>1||Math.abs(te.y-Se.y)>1||Math.abs(te.width-Se.width)>1||Math.abs(te.height-Se.height)>1},gt=B=>{const te=B.originalRect,Se=B.currentRect;return Math.abs(te.x-Se.x)>1||Math.abs(te.y-Se.y)>1},He=B=>{const te=B.originalRect,Se=B.currentRect;return Math.abs(te.width-Se.width)>1||Math.abs(te.height-Se.height)>1};for(const B of b)Te.current.has(B.id)||(gt(B)?Te.current.set(B.id,"move"):He(B)&&Te.current.set(B.id,"resize"));for(const B of Te.current.keys())b.some(te=>te.id===B)||Te.current.delete(B);const bt=b.filter(B=>{try{if(Re.has(B.id)||C.has(B.id))return!0;const te=document.querySelector(B.selector);if(!te)return!1;const Se=te.getBoundingClientRect(),Ne=B.originalRect;return Math.abs(Se.width-Ne.width)+Math.abs(Se.height-Ne.height)<200}catch{return!1}}),yt=bt.filter(B=>at(B)),Mt=bt.filter(B=>!at(B)),$t=new Set(yt.map(B=>B.id));for(const B of Ce.current)$t.has(B)||Ce.current.delete(B);const st=[...$t].sort().join(",");for(const B of yt)Tt.current.set(B.id,{currentRect:B.currentRect,originalRect:B.originalRect,isFixed:B.isFixed});return _.useEffect(()=>{const B=pt.current;pt.current=$t;const te=new Map;for(const Se of B)if(!$t.has(Se)){if(!b.some(it=>it.id===Se))continue;const Ne=Tt.current.get(Se);Ne&&(te.set(Se,{orig:Ne.originalRect,target:Ne.currentRect,isFixed:Ne.isFixed}),Tt.current.delete(Se))}if(te.size>0){We(Ne=>{const it=new Map(Ne);for(const[Ve,De]of te)it.set(Ve,De);return it});const Se=Vt(()=>{We(Ne=>{const it=new Map(Ne);for(const Ve of te.keys())it.delete(Ve);return it})},250);return()=>clearTimeout(Se)}},[st,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${Pe.rearrangeOverlay} ${i?"":Pe.light} ${a?Pe.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[me&&l.jsx("div",{className:Pe.hoverHighlight,style:{left:me.x,top:me.y,width:me.w,height:me.h}}),Mt.map(B=>{const te=B.currentRect,Se=B.isFixed?te.y:te.y-I,Ne=kx,it=C.has(B.id);return l.jsxs("div",{"data-rearrange-section":B.id,className:`${Pe.sectionOutline} ${it?Pe.selected:""} ${M||a||Re.has(B.id)?Pe.exiting:""}`,style:{left:te.x,top:Se,width:te.width,height:te.height,borderColor:Ne.border,backgroundColor:Ne.bg,..._t?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Ve=>J(Ve,B.id),onDoubleClick:()=>de(B.id),children:[l.jsx("span",{className:Pe.sectionLabel,style:{backgroundColor:Ne.pill},children:B.label}),l.jsx("span",{className:`${Pe.sectionAnnotation} ${B.note?Pe.annotationVisible:""}`,children:(B.note&&oe.current.set(B.id,B.note),B.note||oe.current.get(B.id)||"")}),l.jsxs("span",{className:Pe.sectionDimensions,children:[Math.round(te.width)," × ",Math.round(te.height)]}),l.jsx("div",{className:Pe.deleteButton,onMouseDown:Ve=>Ve.stopPropagation(),onClick:()=>dt(B.id),children:"✕"}),jx.map(Ve=>l.jsx("div",{className:`${Pe.handle} ${Pe[`handle${Ve.charAt(0).toUpperCase()}${Ve.slice(1)}`]}`,onMouseDown:De=>Be(De,B.id,Ve)},Ve))]},B.id)}),yt.map(B=>{const te=B.currentRect,Se=B.isFixed?te.y:te.y-I,Ne=C.has(B.id),it=gt(B),Ve=He(B);if(u&&!Ne)return null;const ge=!Ce.current.has(B.id);return ge&&Ce.current.add(B.id),l.jsxs("div",{"data-rearrange-section":B.id,className:`${Pe.ghostOutline} ${Ne?Pe.selected:""} ${M||a||Re.has(B.id)?Pe.exiting:""}`,style:{left:te.x,top:Se,width:te.width,height:te.height,..._t?{}:{opacity:0,animation:"none",transition:"none"},...ge?{}:{animation:"none"}},onMouseDown:ot=>J(ot,B.id),onDoubleClick:()=>de(B.id),children:[l.jsx("span",{className:Pe.sectionLabel,style:{backgroundColor:kx.pill},children:B.label}),l.jsx("span",{className:`${Pe.sectionAnnotation} ${B.note?Pe.annotationVisible:""}`,children:(B.note&&oe.current.set(B.id,B.note),B.note||oe.current.get(B.id)||"")}),l.jsxs("span",{className:Pe.sectionDimensions,children:[Math.round(te.width)," × ",Math.round(te.height)]}),l.jsx("div",{className:Pe.deleteButton,onMouseDown:ot=>ot.stopPropagation(),onClick:()=>dt(B.id),children:"✕"}),jx.map(ot=>l.jsx("div",{className:`${Pe.handle} ${Pe[`handle${ot.charAt(0).toUpperCase()}${ot.slice(1)}`]}`,onMouseDown:qe=>Be(qe,B.id,ot)},ot)),l.jsx("span",{className:Pe.ghostBadge,children:(()=>{const ot=Te.current.get(B.id);if(it&&Ve){const[qe,nt]=ot==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",qe," ",l.jsxs("span",{className:Pe.ghostBadgeExtra,children:["& ",nt]})]})}return`Suggested ${Ve?"Resize":"Move"}`})()})]},B.id)})]}),!u&&(()=>{const B=[];for(const te of yt){const Se=_e.get(te.id);B.push({id:te.id,orig:te.originalRect,target:Se||te.currentRect,isFixed:te.isFixed,isSelected:C.has(te.id),isExiting:Re.has(te.id)})}for(const[te,Se]of _e)if(!B.some(Ne=>Ne.id===te)){const Ne=b.find(it=>it.id===te);Ne&&B.push({id:te,orig:Ne.originalRect,target:Se,isFixed:Ne.isFixed,isSelected:C.has(te)})}for(const[te,Se]of Je)B.some(Ne=>Ne.id===te)||B.push({id:te,orig:Se.orig,target:Se.target,isFixed:Se.isFixed,isSelected:!1,isExiting:!0});return B.length===0?null:l.jsxs("svg",{className:`${Pe.connectorSvg} ${M||a?Pe.connectorExiting:""}`,children:[B.map(({id:te,orig:Se,target:Ne,isFixed:it,isSelected:Ve,isExiting:De})=>{const ge=Se.x+Se.width/2,ot=(it?Se.y:Se.y-I)+Se.height/2,qe=Ne.x+Ne.width/2,nt=(it?Ne.y:Ne.y-I)+Ne.height/2,Ie=qe-ge,tt=nt-ot,xt=Math.sqrt(Ie*Ie+tt*tt);if(xt<2)return null;const wt=Math.min(1,xt/40),Qe=Math.min(xt*.3,60),Rt=xt>0?-tt/xt:0,kt=xt>0?Ie/xt:0,mt=(ge+qe)/2+Rt*Qe,Kt=(ot+nt)/2+kt*Qe,ht=_e.has(te),Ht=ht||Ve?1:.4,dn=ht||Ve?1:.5;return l.jsxs("g",{className:De?Pe.connectorExiting:"",children:[l.jsx("path",{className:Pe.connectorLine,d:`M ${ge} ${ot} Q ${mt} ${Kt} ${qe} ${nt}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Ht*wt}),l.jsx("circle",{className:Pe.connectorDot,cx:ge,cy:ot,r:4*wt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:dn*wt,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:Pe.connectorDot,cx:qe,cy:nt,r:4*wt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:dn*wt,filter:"url(#connDotShadow)"})]},`conn-${te}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),T&&(()=>{var nt;const B=b.find(Ie=>Ie.id===T);if(!B)return null;const te=B.currentRect,Se=B.isFixed?te.y:te.y-I,Ne=te.x+te.width/2,it=Se-8,Ve=Se+te.height+8,De=it>200,ge=Ve<window.innerHeight-100,ot=Math.max(160,Math.min(window.innerWidth-160,Ne));let qe;return De?qe={left:ot,bottom:window.innerHeight-it}:ge?qe={left:ot,top:Ve}:qe={left:ot,top:Math.max(80,window.innerHeight/2-80)},l.jsx(Zd,{element:B.label,placeholder:"Add a note about this section",initialValue:(nt=B.note)!=null?nt:"",submitLabel:K.current?"Save":"Set",onSubmit:ye,onCancel:he,onDelete:K.current?()=>{ye("")}:void 0,isExiting:F,lightMode:!i,style:qe})})(),ae&&l.jsx("div",{className:Pe.sizeIndicator,style:{left:ae.x,top:ae.y},"data-feedback-toolbar":!0,children:ae.text}),pe.map((B,te)=>l.jsx("div",{className:Pe.guideLine,style:B.axis==="x"?{position:"fixed",left:B.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:B.pos-I,width:"100vw",height:1}},`${B.axis}-${B.pos}-${te}`))]})}var xp=new Set(["script","style","noscript","link","meta","br","hr"]);function K8(){const e=document.querySelector("main")||document.body,n=[],i=Array.from(e.children),a=e!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||xp.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Jd(c),selector:Wr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||xp.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const y=h.getBoundingClientRect();y.height<10||y.width<10||n.push({label:Jd(h),selector:Wr(h),top:y.top,bottom:y.bottom,left:y.left,right:y.right,area:y.width*y.height})}}}return n}function Q8(e){const n=window.scrollY;return e.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function Z8(e){const n=window.scrollY,i=e.y-n,a=e.x;return{top:i,bottom:i+e.height,left:a,right:a+e.width,area:e.width*e.height}}function bp(e,n){const i=n?Q8(n):K8(),a=Z8(e);let c=null,u=null,d=null,h=null,p=null;for(const C of i){if(Math.abs(C.left-a.left)<2&&Math.abs(C.top-a.top)<2&&Math.abs(C.right-C.left-e.width)<2&&Math.abs(C.bottom-C.top-e.height)<2)continue;C.left<=a.left+2&&C.right>=a.right-2&&C.top<=a.top+2&&C.bottom>=a.bottom-2&&C.area>a.area*1.5&&(!p||C.area<p._area)&&(p={label:C.label,selector:C.selector,_area:C.area});const E=a.right>C.left+5&&a.left<C.right-5,M=a.bottom>C.top+5&&a.top<C.bottom-5;if(E&&C.bottom<=a.top+5){const A=Math.round(a.top-C.bottom);(!c||A<c._dist)&&(c={label:C.label,selector:C.selector,gap:Math.max(0,A),_dist:A})}if(E&&C.top>=a.bottom-5){const A=Math.round(C.top-a.bottom);(!u||A<u._dist)&&(u={label:C.label,selector:C.selector,gap:Math.max(0,A),_dist:A})}if(M&&C.right<=a.left+5){const A=Math.round(a.left-C.right);(!d||A<d._dist)&&(d={label:C.label,selector:C.selector,gap:Math.max(0,A),_dist:A})}if(M&&C.left>=a.right-5){const A=Math.round(C.left-a.right);(!h||A<h._dist)&&(h={label:C.label,selector:C.selector,gap:Math.max(0,A),_dist:A})}}const y=window.innerWidth,g=window.innerHeight,x=eM(e,y),b=C=>C?{label:C.label,selector:C.selector,gap:C.gap}:null,w=J8(a,e,y,g,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:w}}function J8(e,n,i,a,c,u){const d={};let h=!1;const p=[];if(e.left<-2&&p.push("left"),e.right>i+2&&p.push("right"),e.top<-2&&p.push("top"),e.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const y=u.find(g=>g.label===c.label&&g.selector===c.selector&&Math.abs(g.area-c._area)<10);if(y){const g=[];e.left<y.left-2&&g.push("left"),e.right>y.right+2&&g.push("right"),e.top<y.top-2&&g.push("top"),e.bottom>y.bottom+2&&g.push("bottom"),g.length>0&&(d.container={label:c.label,edges:g},h=!0)}}return h?d:null}function eM(e,n){if(e.width/n>.85)return"full-width";const a=e.x+e.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function m2(e){switch(e){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function p2(e,n={}){const i=[];e.above&&i.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:""}`),e.below&&i.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:""}`),n.includeLeftRight&&(e.left&&i.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:""}`),e.right&&i.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:""}`));const a=m2(e.alignment);return e.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${e.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&i.push(`**Outside viewport** (${e.outOfBounds.viewport.join(", ")} edge${e.outOfBounds.viewport.length>1?"s":""})`),e.outOfBounds.container&&i.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")} edge${e.outOfBounds.container.edges.length>1?"s":""})`)),i}function tM(e,n,i){var u,d;const a=[];e.above&&a.push(`below \`${e.above.label}\``),e.below&&a.push(`above \`${e.below.label}\``),e.left&&a.push(`right of \`${e.left.label}\``),e.right&&a.push(`left of \`${e.right.label}\``),e.containedIn&&a.push(`inside \`${e.containedIn.label}\``),a.push(m2(e.alignment)),(u=e.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${e.outOfBounds.viewport.join(", ")})`),(d=e.outOfBounds)!=null&&d.container&&a.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var Ax=15;function Nx(e){if(e.length<2)return[];const n=[],i=new Set;for(let a=0;a<e.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<e.length;u++)i.has(u)||Math.abs(e[a].rect.y-e[u].rect.y)<Ax&&c.push(u);if(c.length>=2){const u=c.map(p=>e[p]);u.sort((p,y)=>p.rect.x-y.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,y)=>p+y.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<e.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<e.length;u++)i.has(u)||Math.abs(e[a].rect.x-e[u].rect.x)<Ax&&c.push(u);if(c.length>=2){const u=c.map(p=>e[p]);u.sort((p,y)=>p.rect.y-y.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,y)=>p+y.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function nM(e){var d;if(e.length<2)return[];const n=Nx(e.map(h=>({label:h.label,rect:h.originalRect}))),i=Nx(e.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let y=null,g=0;for(const x of i){const b=x.labels.filter(w=>p.has(w)).length;b>=2&&b>g&&(y=x,g=b)}if(y){const x=y.labels.filter(w=>p.has(w)),b=x.join(", ");if(y.type!==h.type){const w=h.type==="row"?"y":"x",C=y.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${w}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${y.type} (${C}≈${y.sharedEdge}, ${y.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-y.sharedEdge)>20||Math.abs(h.avgGap-y.avgGap)>5){const w=h.type==="row"?"y":"x",C=Math.abs(h.sharedEdge-y.sharedEdge)>20?` ${w}: ${h.sharedEdge} → ${y.sharedEdge}`:"",E=Math.abs(h.avgGap-y.avgGap)>5?` gaps: ${h.avgGap}px → ${y.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${C}${E}`)}x.forEach(w=>c.add(w))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(w=>c.add(w))}}for(const h of i){if(h.labels.every(g=>c.has(g))||h.labels.filter(g=>!c.has(g)).length<2)continue;if(!n.some(g=>g.labels.filter(b=>h.labels.includes(b)).length>=2)){const g=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${g}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=e.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const y=Math.round(p.currentRect.x/5)*5;((d=h[y])!=null?d:h[y]=[]).push(p.label)}for(const[p,y]of Object.entries(h))y.length>=2&&a.push(`**${y.join(", ")}**: shared left edge at x≈${p}`)}return a}function _2(e){if(typeof document>"u")return{viewport:e,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||xp.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const y of Array.from(p.children))a(y)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const y=getComputedStyle(h);if(y.maxWidth&&y.maxWidth!=="none"&&y.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<e.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:e,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Wr(h)}}}return{viewport:e,contentArea:null}}function sM(e){if(typeof document>"u")return null;const n=document.querySelector(e);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Wr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function g2(e,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(e.x-c),h=Math.round(c+a-(e.x+e.width)),p=(e.width/a*100).toFixed(1),y=e.x+e.width/2,g=Math.abs(y-u)<20,x=e.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(e.width)}px\`)`),g&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function y2(e){const{viewport:n,contentArea:i}=e;let a=`### Reference Frame
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
`,a}function oM(e){const n=sM(e);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Dx(e,n,i,a="standard"){var M,A,U,L;if(e.length===0)return"";const c=[...e].sort((T,G)=>Math.abs(T.y-G.y)<20?T.x-G.x:T.y-G.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${e.length} component${e.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${e.length} component${e.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((T,G)=>{var W;const F=((W=ia[T.type])==null?void 0:W.label)||T.type;u+=`${G+1}. **${F}** — \`${Math.round(T.width)}×${Math.round(T.height)}px\` at \`(${Math.round(T.x)}, ${Math.round(T.y)})\`
`}),u;const d=_2(n);u+=y2(d),u+=`### Components
`,c.forEach((T,G)=>{var Re;const F=((Re=ia[T.type])==null?void 0:Re.label)||T.type,W={x:T.x,y:T.y,width:T.width,height:T.height};u+=`${G+1}. **${F}** — \`${Math.round(T.width)}×${Math.round(T.height)}px\` at \`(${Math.round(T.x)}, ${Math.round(T.y)})\`
`;const K=bp(W),he=p2(K,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Ge of he)u+=`   - ${Ge}
`;const ye=g2(W,d);ye&&(u+=`   - CSS: ${ye}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const T of c){const G=h.find(F=>Math.abs(F.y-T.y)<30);G?G.items.push(T):h.push({y:T.y,items:[T]})}if(h.sort((T,G)=>T.y-G.y),h.forEach((T,G)=>{T.items.sort((W,K)=>W.x-K.x);const F=T.items.map(W=>{var K;return((K=ia[W.type])==null?void 0:K.label)||W.type});if(T.items.length===1){const K=T.items[0].width>n.width*.8;u+=`- Row ${G+1} (y≈${Math.round(T.y)}): ${F[0]}${K?" — full width":""}
`}else u+=`- Row ${G+1} (y≈${Math.round(T.y)}): ${F.join(" | ")} — ${T.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let T=0;T<c.length-1;T++){const G=c[T],F=c[T+1],W=((M=ia[G.type])==null?void 0:M.label)||G.type,K=((A=ia[F.type])==null?void 0:A.label)||F.type,de=Math.round(F.y-(G.y+G.height)),he=Math.round(F.x-(G.x+G.width));Math.abs(G.y-F.y)<30?u+=`- ${W} → ${K}: \`${he}px\` horizontal gap
`:u+=`- ${W} → ${K}: \`${de}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let T=0;T<c.length;T++)for(let G=T+1;G<c.length;G++){const F=c[T],W=c[G],K=((U=ia[F.type])==null?void 0:U.label)||F.type,de=((L=ia[W.type])==null?void 0:L.label)||W.type,he=Math.round(W.y-(F.y+F.height)),ye=Math.round(W.x-(F.x+F.width));u+=`- ${K} ↔ ${de}: h=\`${ye}px\` v=\`${he}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,e.forEach((T,G)=>{var W;const F=((W=ia[T.type])==null?void 0:W.label)||T.type;u+=`${G}. ${F} at \`(${Math.round(T.x)}, ${Math.round(T.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(T=>T.type==="navigation"),y=c.some(T=>T.type==="hero"),g=c.some(T=>T.type==="sidebar"),x=c.some(T=>T.type==="footer"),b=c.filter(T=>T.type==="card"),w=c.filter(T=>T.type==="form"),C=c.filter(T=>T.type==="table"),E=c.filter(T=>T.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),y&&(u+=`- Hero section with heading, subtext, and call-to-action
`),g&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),b.length>1?u+=`- ${b.length}-column card grid — use CSS Grid or Flexbox
`:b.length===1&&(u+=`- Card component with image + content area
`),w.length>0&&(u+=`- ${w.length} form${w.length>1?"s":""} — add proper labels, validation, and submit handling
`),C.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),E.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,g){const T=c.find(G=>G.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(T.width)}px 1fr;\`
`}if(b.length>1){const T=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${T}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Rx(e,n="standard",i){const{sections:a}=e,c=[];for(const g of a){const x=g.originalRect,b=g.currentRect,w=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,C=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!w&&!C){n==="forensic"&&c.push({section:g,posMoved:!1,sizeChanged:!1});continue}c.push({section:g,posMoved:w,sizeChanged:C})}if(c.length===0||n!=="forensic"&&c.every(g=>!g.posMoved&&!g.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=_2({width:d,height:h});n!=="compact"&&(u+=y2(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const y=g=>a.map(x=>({label:x.label,selector:x.selector,rect:g==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:g,posMoved:x,sizeChanged:b}of c){const w=g.originalRect,C=g.currentRect;if(!x&&!b){u+=`- ${g.label} — unchanged at (${Math.round(C.x)}, ${Math.round(C.y)}) ${Math.round(C.width)}×${Math.round(C.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${g.label}** to (${Math.round(C.x)}, ${Math.round(C.y)}) ${Math.round(C.width)}×${Math.round(C.height)}px
`:x?u+=`- Suggested: move **${g.label}** to (${Math.round(C.x)}, ${Math.round(C.y)})
`:u+=`- Suggested: resize **${g.label}** to ${Math.round(C.width)}×${Math.round(C.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${g.label}**
`:x?u+=`- Suggested: move **${g.label}**
`:u+=`- Suggested: resize **${g.label}** from ${Math.round(w.width)}×${Math.round(w.height)}px to ${Math.round(C.width)}×${Math.round(C.height)}px
`,x){const M=bp(w,y("original")),A=bp(C,y("current")),U=b?{width:w.width,height:w.height}:void 0;u+=`  - Currently ${tM(M,{x:w.x,y:w.y},U)}
`;const L=b?{width:C.width,height:C.height}:void 0,T=`at (${Math.round(C.x)}, ${Math.round(C.y)})`,G=L?`, ${Math.round(L.width)}×${Math.round(L.height)}px`:"",W=p2(A,{includeLeftRight:n==="detailed"||n==="forensic"});if(W.length>0){u+=`  - Suggested position ${T}${G}: ${W[0]}
`;for(let de=1;de<W.length;de++)u+=`    ${W[de]}
`}else u+=`  - Suggested position ${T}${G}
`;const K=g2(C,p);K&&(u+=`  - CSS: ${K}
`)}const E=oM(g.selector);if(E&&(u+=`  - ${E}
`),u+=`  - Selector: \`${g.selector}\`
`,n==="detailed"||n==="forensic"){const M=g.className?`${g.tagName}.${g.className.split(" ")[0]}`:g.tagName;M!==g.selector&&(u+=`  - Element: \`${M}\`
`),g.role&&(u+=`  - Role: \`${g.role}\`
`),n==="forensic"&&g.textSnippet&&(u+=`  - Text: "${g.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(w.x)}, y: ${Math.round(w.y)}, w: ${Math.round(w.width)}, h: ${Math.round(w.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(C.x)}, y: ${Math.round(C.y)}, w: ${Math.round(C.width)}, h: ${Math.round(C.height)} }\`
`)}if(n!=="compact"){const g=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=nM(g);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const g=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of g){const b=x.currentRect,w=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${w?" ← suggested":""}
`}}return u}var vp="feedback-annotations-",x2=7;function ef(e){return`${vp}${e}`}function Am(e){if(typeof window>"u")return[];try{const n=localStorage.getItem(ef(e));if(!n)return[];const i=JSON.parse(n),a=Date.now()-x2*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function b2(e,n){if(!(typeof window>"u"))try{localStorage.setItem(ef(e),JSON.stringify(n))}catch{}}function iM(){const e=new Map;if(typeof window>"u")return e;try{const n=Date.now()-x2*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(vp)){const c=a.slice(vp.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&e.set(c,h)}}}}catch{}return e}function Nc(e,n,i){const a=n.map(c=>({...c,_syncedTo:i}));b2(e,a)}var a_="agentation-design-";function aM(e){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${a_}${e}`);return n?JSON.parse(n):[]}catch{return[]}}function rM(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${a_}${e}`,JSON.stringify(n))}catch{}}function lM(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${a_}${e}`)}catch{}}var r_="agentation-rearrange-";function cM(e){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${r_}${e}`);return n?JSON.parse(n):null}catch{return null}}function uM(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${r_}${e}`,JSON.stringify(n))}catch{}}function dM(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${r_}${e}`)}catch{}}var l_="agentation-wireframe-";function fM(e){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${l_}${e}`);return n?JSON.parse(n):null}catch{return null}}function Bx(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${l_}${e}`,JSON.stringify(n))}catch{}}function jd(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${l_}${e}`)}catch{}}var v2="agentation-session-";function c_(e){return`${v2}${e}`}function hM(e){if(typeof window>"u")return null;try{return localStorage.getItem(c_(e))}catch{return null}}function Nm(e,n){if(!(typeof window>"u"))try{localStorage.setItem(c_(e),n)}catch{}}function mM(e){if(!(typeof window>"u"))try{localStorage.removeItem(c_(e))}catch{}}var w2=`${v2}toolbar-hidden`;function pM(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(w2)==="1"}catch{return!1}}function _M(e){if(!(typeof window>"u"))try{e&&sessionStorage.setItem(w2,"1")}catch{}}async function Dm(e,n){const i=await fetch(`${e}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function Lx(e,n){const i=await fetch(`${e}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function jl(e,n,i){const a=await fetch(`${e}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function Ox(e,n,i){const a=await fetch(`${e}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function ur(e,n){const i=await fetch(`${e}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var Wn={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},zx=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),$x=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],gM=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function yM(e){var a,c,u,d;const n=(a=e==null?void 0:e.mode)!=null?a:"filtered";let i=zx;if(e!=null&&e.skipExact){const h=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);i=new Set([...zx,...h])}return{maxComponents:(c=e==null?void 0:e.maxComponents)!=null?c:6,maxDepth:(u=e==null?void 0:e.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:e!=null&&e.skipPatterns?[...$x,...e.skipPatterns]:$x,userPatterns:(d=e==null?void 0:e.userPatterns)!=null?d:gM,filter:e==null?void 0:e.filter}}function xM(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function bM(e,n=10){const i=new Set;let a=e,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function vM(e,n){const i=xM(e);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function wM(e,n,i,a){if(i.filter)return i.filter(e,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(e)||i.skipPatterns.some(c=>c.test(e)));case"smart":return i.skipExact.has(e)||i.skipPatterns.some(c=>c.test(e))?!1:!!(a&&vM(e,a)||i.userPatterns.some(c=>c.test(e)));default:return!0}}var Ml=null,SM=new WeakMap;function Rm(e){return Object.keys(e).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function CM(){if(Ml!==null)return Ml;if(typeof document>"u")return!1;if(document.body&&Rm(document.body))return Ml=!0,!0;const e=["#root","#app","#__next","[data-reactroot]"];for(const n of e){const i=document.querySelector(n);if(i&&Rm(i))return Ml=!0,!0}if(document.body){for(const n of document.body.children)if(Rm(n))return Ml=!0,!0}return Ml=!1,!1}var Dc={map:SM};function kM(e){return Object.keys(e).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function jM(e){const n=kM(e);return n?e[n]:null}function Lr(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function MM(e){var c;const{tag:n,type:i,elementType:a}=e;if(n===Wn.HostComponent||n===Wn.HostText||n===Wn.HostHoistable||n===Wn.HostSingleton||n===Wn.Fragment||n===Wn.Mode||n===Wn.Profiler||n===Wn.DehydratedFragment||n===Wn.HostRoot||n===Wn.HostPortal||n===Wn.ScopeComponent||n===Wn.OffscreenComponent||n===Wn.LegacyHiddenComponent||n===Wn.CacheComponent||n===Wn.TracingMarkerComponent||n===Wn.Throw||n===Wn.ViewTransitionComponent||n===Wn.ActivityComponent)return null;if(n===Wn.ForwardRef){const u=a;if(u!=null&&u.render){const d=Lr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:Lr(i)}if(n===Wn.MemoComponent||n===Wn.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=Lr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:Lr(i)}if(n===Wn.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===Wn.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===Wn.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?Lr(u._result):null}return n===Wn.SuspenseComponent||n===Wn.SuspenseListComponent?null:n===Wn.IncompleteClassComponent||n===Wn.IncompleteFunctionComponent||n===Wn.FunctionComponent||n===Wn.ClassComponent||n===Wn.IndeterminateComponent?Lr(i):null}function EM(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function TM(e,n){const i=yM(n),a=i.mode==="all";if(a){const p=Dc.map.get(e);if(p!==void 0)return p}if(!CM()){const p={path:null,components:[]};return a&&Dc.map.set(e,p),p}const c=i.mode==="smart"?bM(e):void 0,u=[];try{let p=jM(e),y=0;for(;p&&y<i.maxDepth&&u.length<i.maxComponents;){const g=MM(p);g&&!EM(g)&&wM(g,y,i,c)&&u.push(g),p=p.return,y++}}catch{const p={path:null,components:[]};return a&&Dc.map.set(e,p),p}if(u.length===0){const p={path:null,components:[]};return a&&Dc.map.set(e,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&Dc.map.set(e,h),h}var Rc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function AM(e){if(!e||typeof e!="object")return null;const n=Object.keys(e),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return e[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return e[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=e[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&e[c]||null}function Jc(e){if(!e.type||typeof e.type=="string")return null;if(typeof e.type=="object"||typeof e.type=="function"){const n=e.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function NM(e,n=50){var c;let i=e,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Jc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Jc(i._debugOwner)};i=i.return,a++}return null}function DM(e){let n=e,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Jc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Jc(n)}}}n=n.return,i++}return null}var Md=new Map;function RM(e){var c;const n=e.tag,i=e.type,a=e.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===Rc.FunctionComponent||n===Rc.IndeterminateComponent)&&typeof i=="function")return i;if(n===Rc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===Rc.MemoComponent||n===Rc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function BM(){const e=ew,n=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function LM(e){const n=e.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function OM(e){let n=e;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function zM(e){const n=RM(e);if(!n)return null;if(Md.has(n))return Md.get(n);const i=BM();if(!i)return Md.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=LM(d.stack);h&&(c={fileName:OM(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:Jc(e)||void 0})}}}finally{i.set(a)}return Md.set(n,c),c}function $M(e,n=15){let i=e,a=0;for(;i&&a<n;){const c=zM(i);if(c)return c;i=i.return,a++}return null}function wp(e){const n=AM(e);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=NM(n);if(i||(i=DM(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=$M(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function IM(e,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=e;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function PM(e,n=10){let i=e,a=0;for(;i&&a<n;){const c=wp(i);if(c.found)return c;i=i.parentElement,a++}return wp(e)}var HM=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,UM={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(e)),e.textContent=HM}var Ze=UM,Bc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Ix(e,n,i="standard"){if(e.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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
}`,YM={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-marker-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(e)),e.textContent=VM}var Qs=YM;function Px({annotation:e,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:y,renumberFrom:g,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:w,onHoverLeave:C,onClick:E,onContextMenu:M}){const A=(h||p)&&!y,U=A&&x==="delete",L=e.isMultiSelect,T=L?"var(--agentation-color-green)":"var(--agentation-color-accent)",G=c?Qs.exit:u?Qs.clearing:d?"":Qs.enter,F=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${Qs.marker} ${L?Qs.multiSelect:""} ${G} ${U?Qs.hovered:""}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y,backgroundColor:U?void 0:T,animationDelay:F},onMouseEnter:()=>w(e),onMouseLeave:C,onClick:W=>{W.stopPropagation(),c||E(e)},onContextMenu:M?W=>{x==="delete"&&(W.preventDefault(),W.stopPropagation(),c||M(e))}:void 0,children:[A?U?l.jsx(r2,{size:L?18:16}):l.jsx(sj,{size:16}):l.jsx("span",{className:g!==null&&n>=g?Qs.renumber:void 0,children:n+1}),h&&!y&&l.jsxs("div",{className:`${Qs.markerTooltip} ${Qs.enter}`,style:b,children:[l.jsxs("span",{className:Qs.markerQuote,children:[e.element,e.selectedText&&` "${e.selectedText.slice(0,30)}${e.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:Qs.markerNote,children:e.comment})]})]})}function WM({x:e,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${Qs.marker} ${Qs.pending} ${i?Qs.multiSelect:""} ${a?Qs.exit:Qs.enter}`,style:{left:`${e}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(W3,{size:12})})}function Hx({annotation:e,fixed:n}){const i=e.isMultiSelect;return l.jsx("div",{className:`${Qs.marker} ${n?Qs.fixed:""} ${Qs.hovered} ${i?Qs.multiSelect:""} ${Qs.exit}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y},children:l.jsx(r2,{size:i?12:10})})}var FM=`.styles-module__switchContainer___Ka-AB {
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
}`,XM={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-switch-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-switch-styles",document.head.appendChild(e)),e.textContent=FM}var Bm=XM,Lm=({className:e="",...n})=>l.jsxs("div",{className:`${Bm.switchContainer} ${e}`,children:[l.jsx("input",{className:Bm.switchInput,type:"checkbox",...n}),l.jsx("div",{className:Bm.switchThumb})]}),GM=`.styles-module__checkboxContainer___joqZk {
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
}`,qM={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(e)),e.textContent=GM}var Ed=qM,KM=({className:e="",...n})=>l.jsxs("div",{className:`${Ed.checkboxContainer} ${e}`,children:[l.jsx("input",{className:Ed.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:Ed.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:Ed.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),QM=`.styles-module__container___w8eAF {
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
}`,ZM={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-field-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(e)),e.textContent=QM}var Ux=ZM,Vx=({className:e="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=_.useId();return l.jsxs("div",{className:`${Ux.container} ${e}`,...u,children:[l.jsx(KM,{id:d,onChange:c,checked:a}),l.jsx("label",{className:Ux.label,htmlFor:d,children:n}),i&&l.jsx(Pr,{content:i})]})},JM=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,e7={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-settings-panel-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(e)),e.textContent=JM}var At=e7;function t7({settings:e,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:y,onSettingsPageChange:g,onHideToolbar:x}){var b;return l.jsx("div",{className:`${At.settingsPanel} ${h?At.enter:At.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:At.settingsPanelContainer,children:[l.jsxs("div",{className:`${At.settingsPage} ${y==="automations"?At.slideLeft:""}`,children:[l.jsxs("div",{className:At.settingsHeader,children:[l.jsx("a",{className:At.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:At.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:At.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:At.themeIconWrapper,children:l.jsx("span",{className:At.themeIcon,children:i?l.jsx(tj,{size:20}):l.jsx(nj,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:At.divider}),l.jsxs("div",{className:At.settingsSection,children:[l.jsxs("div",{className:At.settingsRow,children:[l.jsxs("div",{className:At.settingsLabel,children:["Output Detail",l.jsx(Pr,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:At.cycleButton,onClick:()=>{const C=(Bc.findIndex(E=>E.value===e.outputDetail)+1)%Bc.length;n({outputDetail:Bc[C].value})},children:[l.jsx("span",{className:At.cycleButtonText,children:(b=Bc.find(w=>w.value===e.outputDetail))==null?void 0:b.label},e.outputDetail),l.jsx("span",{className:At.cycleDots,children:Bc.map(w=>l.jsx("span",{className:`${At.cycleDot} ${e.outputDetail===w.value?At.active:""}`},w.value))})]})]}),l.jsxs("div",{className:`${At.settingsRow} ${At.settingsRowMarginTop} ${c?"":At.settingsRowDisabled}`,children:[l.jsxs("div",{className:At.settingsLabel,children:["React Components",l.jsx(Pr,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(Lm,{checked:c&&e.reactEnabled,onChange:w=>n({reactEnabled:w.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${At.settingsRow} ${At.settingsRowMarginTop}`,children:[l.jsxs("div",{className:At.settingsLabel,children:["Hide Until Restart",l.jsx(Pr,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(Lm,{checked:!1,onChange:w=>{w.target.checked&&x()}})]})]}),l.jsx("div",{className:At.divider}),l.jsxs("div",{className:At.settingsSection,children:[l.jsx("div",{className:`${At.settingsLabel} ${At.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:At.colorOptions,children:Xc.map(w=>l.jsx("button",{className:`${At.colorOption} ${e.annotationColorId===w.id?At.selected:""}`,style:{"--swatch":w.srgb,"--swatch-p3":w.p3},onClick:()=>n({annotationColorId:w.id}),title:w.label,type:"button"},w.id))})]}),l.jsx("div",{className:At.divider}),l.jsxs("div",{className:At.settingsSection,children:[l.jsx(Vx,{className:"checkbox-field",label:"Clear on copy/send",checked:e.autoClearAfterCopy,onChange:w=>n({autoClearAfterCopy:w.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(Vx,{className:At.checkboxField,label:"Block page interactions",checked:e.blockInteractions,onChange:w=>n({blockInteractions:w.target.checked})})]}),l.jsx("div",{className:At.divider}),l.jsxs("button",{className:At.settingsNavLink,onClick:()=>g("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:At.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${At.mcpNavIndicator} ${At[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${At.settingsPage} ${At.automationsPage} ${y==="automations"?At.slideIn:""}`,children:[l.jsxs("button",{className:At.settingsBackButton,onClick:()=>g("main"),children:[l.jsx(ij,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:At.divider}),l.jsxs("div",{className:At.settingsSection,children:[l.jsxs("div",{className:At.settingsRow,children:[l.jsxs("span",{className:At.automationHeader,children:["MCP Connection",l.jsx(Pr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${At.mcpStatusDot} ${At[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:At.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:At.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:At.divider}),l.jsxs("div",{className:`${At.settingsSection} ${At.settingsSectionGrow}`,children:[l.jsxs("div",{className:At.settingsRow,children:[l.jsxs("span",{className:At.automationHeader,children:["Webhooks",l.jsx(Pr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:At.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${At.autoSendLabel} ${e.webhooksEnabled?At.active:""} ${e.webhookUrl?"":At.disabled}`,children:"Auto-Send"}),l.jsx(Lm,{id:"agentation-auto-send",checked:e.webhooksEnabled,onChange:w=>n({webhooksEnabled:w.target.checked}),disabled:!e.webhookUrl})]})]}),l.jsx("p",{className:At.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:At.webhookUrlInput,placeholder:"Webhook URL",value:e.webhookUrl,onKeyDown:w=>w.stopPropagation(),onChange:w=>n({webhookUrl:w.target.value})})]})]})]})})}function Om(e,n="filtered"){const{name:i,path:a}=Rl(e);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=TM(e,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var Yx=!1,zm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},ma=e=>{if(!e||!e.trim())return!1;try{const n=new URL(e.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},Xc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],n7=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const e=document.createElement("style");e.id="agentation-color-tokens",e.textContent=[...Xc.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${Xc.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Xc.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(e)};n7();function Or(e,n){let i=document.elementFromPoint(e,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(e,n);if(!a||a===i)break;i=a}return i}function $m(e){let n=e;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function zr(e){return e.status!=="resolved"&&e.status!=="dismissed"}function Td(e){const n=wp(e),i=n.found?n:PM(e);if(i.found&&i.source)return IM(i.source,"path")}function s7({demoAnnotations:e,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:y=!0,endpoint:g,sessionId:x,onSessionCreated:b,webhookUrl:w,className:C}={}){var no,ko,jo,Ro,Mo,Ko,xa;const[E,M]=_.useState(!1),[A,U]=_.useState([]),[L,T]=_.useState(!0),[G,F]=_.useState(()=>pM()),[W,K]=_.useState(!1),de=_.useRef(null);_.useEffect(()=>{const R=Z=>{const q=de.current;q&&q.contains(Z.target)&&Z.stopPropagation()},V=["mousedown","click","pointerdown"];return V.forEach(Z=>document.body.addEventListener(Z,R)),()=>{V.forEach(Z=>document.body.removeEventListener(Z,R))}},[]);const[he,ye]=_.useState(!1),[Re,Ge]=_.useState(!1),[oe,me]=_.useState(null),[O,ae]=_.useState({x:0,y:0}),[H,pe]=_.useState(null),[we,I]=_.useState(!1),[ce,ee]=_.useState("idle"),[Ce,Te]=_.useState(!1),[_e,Oe]=_.useState(!1),[Je,We]=_.useState(null),[pt,Tt]=_.useState(null),[Ct,ut]=_.useState([]),[Ot,_t]=_.useState(null),[Gt,en]=_.useState(null),[J,Be]=_.useState(null),[dt,at]=_.useState(null),[gt,He]=_.useState([]),[bt,yt]=_.useState(0),[Mt,$t]=_.useState(!1),[st,B]=_.useState(!1),[te,Se]=_.useState(!1),[Ne,it]=_.useState(!1),[Ve,De]=_.useState(!1),[ge,ot]=_.useState("main"),[qe,nt]=_.useState(!1),[Ie,tt]=_.useState(!1),[xt,wt]=_.useState(!1),[Qe,Rt]=_.useState([]),[kt,mt]=_.useState(null),Kt=_.useRef(!1),[ht,Ht]=_.useState(!1),[dn,Lt]=_.useState(!1),[St,fn]=_.useState(1),[ls,sn]=_.useState("new-page"),[Sn,tn]=_.useState(""),[Nt,ln]=_.useState(!1),[rt,Fn]=_.useState(null),Dn=_.useRef(!1),yo=_.useRef({rearrange:null,placements:[]}),On=_.useRef({rearrange:null,placements:[]}),[Ds,In]=_.useState(0),[xo,Ao]=_.useState(0),[on,zn]=_.useState(0),[Cn,cs]=_.useState(0),_s=_.useRef(new Set),vs=_.useRef(new Set),Wt=_.useRef(null),Xn=_.useRef(),Us=Ie&&E&&!xt&&ht;_.useEffect(()=>{if(Us){Lt(!1);const R=Dl(()=>{Lt(!0)});return()=>cancelAnimationFrame(R)}else Lt(!1)},[Us]);const ws=_.useRef(new Map),bo=_.useRef(new Map),co=_.useRef(),[gs,us]=_.useState(!1),[_n,ti]=_.useState([]),fi=_.useRef(_n);fi.current=_n;const[uo,Ji]=_.useState(null),Vs=_.useRef(null);_.useRef(!1),_.useRef([]),_.useRef(0),_.useRef(null),_.useRef(null),_.useRef(1);const[Ys,Ss]=_.useState(!1),Gn=_.useRef(null),[kn,Ws]=_.useState([]),vn=_.useRef({cmd:!1,shift:!1}),ys=()=>{nt(!0)},Si=()=>{nt(!1)},Vo=()=>{Ys||(Gn.current=Vt(()=>Ss(!0),850))},Ci=()=>{Gn.current&&(clearTimeout(Gn.current),Gn.current=null),Ss(!1),Si()};_.useEffect(()=>()=>{Gn.current&&clearTimeout(Gn.current)},[]);const[Qt,zi]=_.useState(()=>{var R;try{const V=JSON.parse((R=localStorage.getItem("feedback-toolbar-settings"))!=null?R:"");return{...zm,...V,annotationColorId:Xc.find(Z=>Z.id===V.annotationColorId)?V.annotationColorId:zm.annotationColorId}}catch{return zm}}),[Rs,Ls]=_.useState(!0),[Fs,Yo]=_.useState(!1),Zs=()=>{var R;(R=de.current)==null||R.classList.add(Ze.disableTransitions),Ls(V=>!V),Dl(()=>{var V;(V=de.current)==null||V.classList.remove(Ze.disableTransitions)})},Js=!1,fo="off",[gn,xs]=_.useState(x!=null?x:null),Xs=_.useRef(!1),[es,ds]=_.useState(g?"connecting":"disconnected"),[hn,Os]=_.useState(null),[eo,ni]=_.useState(!1),[Cs,ki]=_.useState(null),Wo=_.useRef(!1),[Fo,No]=_.useState(new Set),[si,Xo]=_.useState(new Set),[qn,ho]=_.useState(!1),[Go,Bs]=_.useState(!1),[mo,qo]=_.useState(!1),zs=_.useRef(null),ts=_.useRef(null),vo=_.useRef(null),fs=_.useRef(null),Mn=_.useRef(!1),Ms=_.useRef(0),Es=_.useRef(null),to=_.useRef(null),ji=8,$i=50,oi=_.useRef(null),Mi=_.useRef(null),wo=_.useRef(null),jt=typeof window<"u"?window.location.pathname:"/";_.useEffect(()=>{if(Ne)De(!0);else{nt(!1),ot("main");const R=Vt(()=>De(!1),0);return()=>clearTimeout(R)}},[Ne]);const Gs=E&&L&&!Ie;_.useEffect(()=>{if(Gs){Ge(!1),ye(!0),No(new Set);const R=Vt(()=>{No(V=>{const Z=new Set(V);return A.forEach(q=>Z.add(q.id)),Z})},350);return()=>clearTimeout(R)}else if(he){Ge(!0);const R=Vt(()=>{ye(!1),Ge(!1)},250);return()=>clearTimeout(R)}},[Gs]),_.useEffect(()=>{B(!0),yt(window.scrollY);const R=Am(jt);U(R.filter(zr)),Yx||(Yo(!0),Yx=!0,Vt(()=>Yo(!1),750));try{const V=localStorage.getItem("feedback-toolbar-theme");V!==null&&Ls(V==="dark")}catch{}try{const V=localStorage.getItem("feedback-toolbar-position");if(V){const Z=JSON.parse(V);typeof Z.x=="number"&&typeof Z.y=="number"&&Os(Z)}}catch{}},[jt]),_.useEffect(()=>{st&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Qt))},[Qt,st]),_.useEffect(()=>{st&&localStorage.setItem("feedback-toolbar-theme",Rs?"dark":"light")},[Rs,st]);const Ii=_.useRef(!1);_.useEffect(()=>{const R=Ii.current;Ii.current=eo,R&&!eo&&hn&&st&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(hn))},[eo,hn,st]),_.useEffect(()=>{if(!g||!st||Xs.current)return;Xs.current=!0,ds("connecting"),(async()=>{try{const V=hM(jt),Z=x||V;let q=!1;if(Z)try{const S=await Lx(g,Z);xs(S.id),ds("connected"),Nm(jt,S.id),q=!0;const k=Am(jt),D=new Set(S.annotations.map($=>$.id)),z=k.filter($=>!D.has($.id));if(z.length>0){const le=`${typeof window<"u"?window.location.origin:""}${jt}`,Y=(await Promise.allSettled(z.map(re=>jl(g,S.id,{...re,sessionId:S.id,url:le})))).map((re,ie)=>re.status==="fulfilled"?re.value:(console.warn("[Agentation] Failed to sync annotation:",re.reason),z[ie])),se=[...S.annotations,...Y];U(se.filter(zr)),Nc(jt,se.filter(zr),S.id)}else U(S.annotations.filter(zr)),Nc(jt,S.annotations.filter(zr),S.id)}catch(S){console.warn("[Agentation] Could not join session, creating new:",S),mM(jt)}if(!q){const S=typeof window<"u"?window.location.href:"/",k=await Dm(g,S);xs(k.id),ds("connected"),Nm(jt,k.id),b==null||b(k.id);const D=iM(),z=typeof window<"u"?window.location.origin:"",$=[];for(const[le,ve]of D){const Y=ve.filter(ie=>!ie._syncedTo);if(Y.length===0)continue;const se=`${z}${le}`,re=le===jt;$.push((async()=>{try{const ie=re?k:await Dm(g,se),et=(await Promise.allSettled(Y.map(Ke=>jl(g,ie.id,{...Ke,sessionId:ie.id,url:se})))).map((Ke,vt)=>Ke.status==="fulfilled"?Ke.value:(console.warn("[Agentation] Failed to sync annotation:",Ke.reason),Y[vt])).filter(zr);if(Nc(le,et,ie.id),re){const Ke=new Set(Y.map(vt=>vt.id));U(vt=>{const ft=vt.filter(lt=>!Ke.has(lt.id));return[...et,...ft]})}}catch(ie){console.warn(`[Agentation] Failed to sync annotations for ${le}:`,ie)}})())}await Promise.allSettled($)}}catch(V){ds("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",V)}})()},[g,x,st,b,jt]),_.useEffect(()=>{if(!g||!st)return;const R=async()=>{try{(await fetch(`${g}/health`)).ok?ds("connected"):ds("disconnected")}catch{ds("disconnected")}};R();const V=lj(R,1e4);return()=>clearInterval(V)},[g,st]),_.useEffect(()=>{if(!g||!st||!gn)return;const R=new EventSource(`${g}/sessions/${gn}/events`),V=["resolved","dismissed"],Z=q=>{var S;try{const k=JSON.parse(q.data);if(V.includes((S=k.payload)==null?void 0:S.status)){const D=k.payload.id,z=k.payload.kind;if(z==="placement"){for(const[$,le]of ws.current)if(le===D){ws.current.delete($),Rt(ve=>ve.filter(Y=>Y.id!==$));break}}else if(z==="rearrange"){for(const[$,le]of bo.current)if(le===D){bo.current.delete($),Fn(ve=>{if(!ve)return null;const Y=ve.sections.filter(se=>se.id!==$);return Y.length===0?null:{...ve,sections:Y}});break}}else Xo($=>new Set($).add(D)),Vt(()=>{U($=>$.filter(le=>le.id!==D)),Xo($=>{const le=new Set($);return le.delete(D),le})},150)}}catch{}};return R.addEventListener("annotation.updated",Z),()=>{R.removeEventListener("annotation.updated",Z),R.close()}},[g,st,gn]),_.useEffect(()=>{if(!g||!st)return;const R=to.current==="disconnected",V=es==="connected";to.current=es,R&&V&&(async()=>{try{const q=Am(jt);if(q.length===0)return;const k=`${typeof window<"u"?window.location.origin:""}${jt}`;let D=gn,z=[];if(D)try{z=(await Lx(g,D)).annotations}catch{D=null}D||(D=(await Dm(g,k)).id,xs(D),Nm(jt,D));const $=new Set(z.map(ve=>ve.id)),le=q.filter(ve=>!$.has(ve.id));if(le.length>0){const Y=(await Promise.allSettled(le.map(ie=>jl(g,D,{...ie,sessionId:D,url:k})))).map((ie,ze)=>ie.status==="fulfilled"?ie.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",ie.reason),le[ze])),re=[...z,...Y].filter(zr);U(re),Nc(jt,re,D)}}catch(q){console.warn("[Agentation] Failed to sync on reconnect:",q)}})()},[es,g,st,gn,jt]);const Pi=_.useCallback(()=>{W||(K(!0),it(!1),M(!1),Vt(()=>{_M(!0),F(!0),K(!1)},400))},[W]);_.useEffect(()=>{if(!i||!st||!e||e.length===0||A.length>0)return;const R=[];return R.push(Vt(()=>{M(!0)},n-200)),e.forEach((V,Z)=>{const q=n+Z*300;R.push(Vt(()=>{const S=document.querySelector(V.selector);if(!S)return;const k=S.getBoundingClientRect(),{name:D,path:z}=Rl(S),$={id:`demo-${Date.now()}-${Z}`,x:(k.left+k.width/2)/window.innerWidth*100,y:k.top+k.height/2+window.scrollY,comment:V.comment,element:D,elementPath:z,timestamp:Date.now(),selectedText:V.selectedText,boundingBox:{x:k.left,y:k.top+window.scrollY,width:k.width,height:k.height},nearbyText:Tc(S),cssClasses:Ac(S)};U(le=>[...le,$])},q))}),()=>{R.forEach(clearTimeout)}},[i,st,e,n]),_.useEffect(()=>{const R=()=>{yt(window.scrollY),$t(!0),wo.current&&clearTimeout(wo.current),wo.current=Vt(()=>{$t(!1)},150)};return window.addEventListener("scroll",R,{passive:!0}),()=>{window.removeEventListener("scroll",R),wo.current&&clearTimeout(wo.current)}},[]),_.useEffect(()=>{st&&A.length>0?gn?Nc(jt,A,gn):b2(jt,A):st&&A.length===0&&localStorage.removeItem(ef(jt))},[A,jt,st,gn]),_.useEffect(()=>{if(st&&!Kt.current){Kt.current=!0;const R=aM(jt);R.length>0&&Rt(R)}},[st,jt]),_.useEffect(()=>{st&&Kt.current&&!ht&&(Qe.length>0?rM(jt,Qe):lM(jt))},[Qe,jt,st,ht]),_.useEffect(()=>{if(st&&!Dn.current){Dn.current=!0;const R=cM(jt);if(R){const V={...R,sections:R.sections.map(Z=>{var q;return{...Z,currentRect:(q=Z.currentRect)!=null?q:{...Z.originalRect}}})};Fn(V)}}},[st,jt]),_.useEffect(()=>{st&&Dn.current&&!ht&&(rt?uM(jt,rt):dM(jt))},[rt,jt,st,ht]);const Hi=_.useRef(!1);_.useEffect(()=>{if(st&&!Hi.current){Hi.current=!0;const R=fM(jt);R&&(On.current={rearrange:R.rearrange,placements:R.placements||[]},R.purpose&&tn(R.purpose))}},[st,jt]),_.useEffect(()=>{var V,Z,q,S,k;if(!st||!Hi.current)return;const R=On.current;ht?((Z=(V=rt==null?void 0:rt.sections)==null?void 0:V.length)!=null?Z:0)>0||Qe.length>0||Sn?Bx(jt,{rearrange:rt,placements:Qe,purpose:Sn}):jd(jt):((k=(S=(q=R.rearrange)==null?void 0:q.sections)==null?void 0:S.length)!=null?k:0)>0||R.placements.length>0||Sn?Bx(jt,{rearrange:R.rearrange,placements:R.placements,purpose:Sn}):jd(jt)},[rt,Qe,Sn,ht,jt,st]),_.useEffect(()=>{Ie&&!rt&&Fn({sections:[],originalOrder:[],detectedAt:Date.now()})},[Ie,rt]),_.useEffect(()=>{if(!g||!gn)return;const R=ws.current,V=new Set(Qe.map(Z=>Z.id));for(const Z of Qe){if(R.has(Z.id))continue;R.set(Z.id,"");const q=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:jt;jl(g,gn,{id:Z.id,x:Z.x/window.innerWidth*100,y:Z.y,comment:`Place ${Z.type} at (${Math.round(Z.x)}, ${Math.round(Z.y)}), ${Z.width}×${Z.height}px${Z.text?` — "${Z.text}"`:""}`,element:`[design:${Z.type}]`,elementPath:"[placement]",timestamp:Z.timestamp,url:q,intent:"change",severity:"important",kind:"placement",placement:{componentType:Z.type,width:Z.width,height:Z.height,scrollY:Z.scrollY,text:Z.text}}).then(S=>{R.has(Z.id)&&R.set(Z.id,S.id)}).catch(S=>{console.warn("[Agentation] Failed to sync placement annotation:",S),R.delete(Z.id)})}for(const[Z,q]of R)V.has(Z)||(R.delete(Z),q&&ur(g,q).catch(()=>{}))},[Qe,g,gn,jt]),_.useEffect(()=>{if(!(!g||!gn))return co.current&&clearTimeout(co.current),co.current=Vt(()=>{const R=bo.current;if(!rt||rt.sections.length===0){for(const[,q]of R)q&&ur(g,q).catch(()=>{});R.clear();return}const V=new Set(rt.sections.map(q=>q.id)),Z=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:jt;for(const q of rt.sections){const S=q.originalRect,k=q.currentRect;if(!(Math.abs(S.x-k.x)>1||Math.abs(S.y-k.y)>1||Math.abs(S.width-k.width)>1||Math.abs(S.height-k.height)>1)){const $=R.get(q.id);$&&(R.delete(q.id),ur(g,$).catch(()=>{}));continue}const z=R.get(q.id);z?Ox(g,z,{comment:`Move ${q.label} section (${q.tagName}) — from (${Math.round(S.x)},${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)} to (${Math.round(k.x)},${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)}`}).catch($=>{console.warn("[Agentation] Failed to update rearrange annotation:",$)}):(R.set(q.id,""),jl(g,gn,{id:q.id,x:k.x/window.innerWidth*100,y:k.y,comment:`Move ${q.label} section (${q.tagName}) — from (${Math.round(S.x)},${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)} to (${Math.round(k.x)},${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)}`,element:q.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:Z,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:q.selector,label:q.label,tagName:q.tagName,originalRect:S,currentRect:k}}).then($=>{R.has(q.id)&&R.set(q.id,$.id)}).catch($=>{console.warn("[Agentation] Failed to sync rearrange annotation:",$),R.delete(q.id)}))}for(const[q,S]of R)V.has(q)||(R.delete(q),S&&ur(g,S).catch(()=>{}))},300),()=>{co.current&&clearTimeout(co.current)}},[rt,g,gn,jt]);const So=_.useRef(new Map);_.useLayoutEffect(()=>{var Z;const R=(Z=rt==null?void 0:rt.sections)!=null?Z:[],V=new Set;if((Ie||xt)&&E)for(const q of R){V.add(q.id);try{const S=document.querySelector(q.selector);if(!S)continue;if(!So.current.has(q.id)){const k={transform:S.style.transform,transformOrigin:S.style.transformOrigin,opacity:S.style.opacity,position:S.style.position,zIndex:S.style.zIndex,display:S.style.display},D=[];let z=S.parentElement;for(;z&&z!==document.body;){const le=getComputedStyle(z);(le.overflow!=="visible"||le.overflowX!=="visible"||le.overflowY!=="visible")&&(D.push({el:z,overflow:z.style.overflow}),z.style.overflow="visible"),z=z.parentElement}getComputedStyle(S).display==="inline"&&(S.style.display="inline-block"),So.current.set(q.id,{el:S,origStyles:k,ancestors:D}),S.style.transformOrigin="top left",S.style.zIndex="9999"}}catch{}}for(const[q,S]of So.current)if(!V.has(q)){const{el:k,origStyles:D,ancestors:z}=S;k.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",k.style.transform=D.transform,k.style.transformOrigin=D.transformOrigin,k.style.opacity=D.opacity,k.style.position=D.position,k.style.zIndex=D.zIndex,So.current.delete(q),Vt(()=>{k.style.transition="",k.style.display=D.display;for(const $ of z)$.el.style.overflow=$.overflow},450)}},[rt,Ie,xt,E]),_.useEffect(()=>()=>{for(const[,R]of So.current){const{el:V,origStyles:Z,ancestors:q}=R;V.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",V.style.transform=Z.transform,V.style.transformOrigin=Z.transformOrigin,V.style.opacity=Z.opacity,V.style.position=Z.position,V.style.zIndex=Z.zIndex,Vt(()=>{V.style.transition="",V.style.display=Z.display;for(const S of q)S.el.style.overflow=S.overflow},450)}So.current.clear()},[]);const Do=_.useCallback(()=>{wt(!0),tt(!1),mt(null),clearTimeout(Xn.current),Xn.current=Vt(()=>{wt(!1)},300)},[]),Co=_.useCallback(()=>{Ie&&(wt(!0),tt(!1),mt(null),clearTimeout(Xn.current),Xn.current=Vt(()=>{wt(!1)},300)),M(!1)},[Ie]),hi=_.useCallback(()=>{te||(uj(),Se(!0))},[te]),j=_.useCallback(()=>{te&&(bx(),Se(!1))},[te]),X=_.useCallback(()=>{te?j():hi()},[te,hi,j]),fe=_.useCallback(()=>{if(kn.length===0)return;const R=kn[0],V=R.element,Z=kn.length>1,q=kn.map(S=>S.element.getBoundingClientRect());if(Z){const S={left:Math.min(...q.map(ie=>ie.left)),top:Math.min(...q.map(ie=>ie.top)),right:Math.max(...q.map(ie=>ie.right)),bottom:Math.max(...q.map(ie=>ie.bottom))},k=kn.slice(0,5).map(ie=>ie.name).join(", "),D=kn.length>5?` +${kn.length-5} more`:"",z=q.map(ie=>({x:ie.left,y:ie.top+window.scrollY,width:ie.width,height:ie.height})),le=kn[kn.length-1].element,ve=q[q.length-1],Y=ve.left+ve.width/2,se=ve.top+ve.height/2,re=$m(le);pe({x:Y/window.innerWidth*100,y:re?se:se+window.scrollY,clientY:se,element:`${kn.length} elements: ${k}${D}`,elementPath:"multi-select",boundingBox:{x:S.left,y:S.top+window.scrollY,width:S.right-S.left,height:S.bottom-S.top},isMultiSelect:!0,isFixed:re,elementBoundingBoxes:z,multiSelectElements:kn.map(ie=>ie.element),targetElement:le,fullPath:Sd(V),accessibility:wd(V),computedStyles:vd(V),computedStylesObj:bd(V),nearbyElements:xd(V),cssClasses:Ac(V),nearbyText:Tc(V),sourceFile:Td(V)})}else{const S=q[0],k=$m(V);pe({x:S.left/window.innerWidth*100,y:k?S.top:S.top+window.scrollY,clientY:S.top,element:R.name,elementPath:R.path,boundingBox:{x:S.left,y:k?S.top:S.top+window.scrollY,width:S.width,height:S.height},isFixed:k,fullPath:Sd(V),accessibility:wd(V),computedStyles:vd(V),computedStylesObj:bd(V),nearbyElements:xd(V),cssClasses:Ac(V),nearbyText:Tc(V),reactComponents:R.reactComponents,sourceFile:Td(V)})}Ws([]),me(null)},[kn]);_.useEffect(()=>{E||(pe(null),Be(null),at(null),He([]),me(null),it(!1),Ws([]),vn.current={cmd:!1,shift:!1},te&&j())},[E,te,j]),_.useEffect(()=>()=>{bx()},[]),_.useEffect(()=>{if(!E)return;const R=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),V=":not([data-agentation-root]):not([data-agentation-root] *)",Z=document.createElement("style");return Z.id="feedback-cursor-styles",Z.textContent=`
      body ${V} {
        cursor: crosshair !important;
      }

      body :is(${R})${V} {
        cursor: text !important;
      }
    `,document.head.appendChild(Z),()=>{const q=document.getElementById("feedback-cursor-styles");q&&q.remove()}},[E]),_.useEffect(()=>{if(uo!==null&&E)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[uo,E]),_.useEffect(()=>{if(!E||H||gs||Ie)return;const R=V=>{const Z=V.composedPath()[0]||V.target;if(ri(Z,"[data-feedback-toolbar]")){me(null);return}const q=Or(V.clientX,V.clientY);if(!q||ri(q,"[data-feedback-toolbar]")){me(null);return}const{name:S,elementName:k,path:D,reactComponents:z}=Om(q,fo),$=q.getBoundingClientRect();me({element:S,elementName:k,elementPath:D,rect:$,reactComponents:z}),ae({x:V.clientX,y:V.clientY})};return document.addEventListener("mousemove",R),()=>document.removeEventListener("mousemove",R)},[E,H,gs,Ie,fo,_n]);const Ae=_.useCallback(R=>{var V;if(Be(R),We(null),Tt(null),ut([]),(V=R.elementBoundingBoxes)!=null&&V.length){const Z=[];for(const q of R.elementBoundingBoxes){const S=q.x+q.width/2,k=q.y+q.height/2-window.scrollY,D=Or(S,k);D&&Z.push(D)}He(Z),at(null)}else if(R.boundingBox){const Z=R.boundingBox,q=Z.x+Z.width/2,S=R.isFixed?Z.y+Z.height/2:Z.y+Z.height/2-window.scrollY,k=Or(q,S);if(k){const D=k.getBoundingClientRect(),z=D.width/Z.width,$=D.height/Z.height;z<.5||$<.5?at(null):at(k)}else at(null);He([])}else at(null),He([])},[]);_.useEffect(()=>{if(!E||gs||Ie)return;const R=V=>{var Me,et;if(Mn.current){Mn.current=!1;return}const Z=V.composedPath()[0]||V.target;if(ri(Z,"[data-feedback-toolbar]")||ri(Z,"[data-annotation-popup]")||ri(Z,"[data-annotation-marker]"))return;if(V.metaKey&&V.shiftKey&&!H&&!J){V.preventDefault(),V.stopPropagation();const Ke=Or(V.clientX,V.clientY);if(!Ke)return;const vt=Ke.getBoundingClientRect(),{name:ft,path:lt,reactComponents:Jt}=Om(Ke,fo),zt=kn.findIndex(nn=>nn.element===Ke);zt>=0?Ws(nn=>nn.filter((Ln,$n)=>$n!==zt)):Ws(nn=>[...nn,{element:Ke,rect:vt,name:ft,path:lt,reactComponents:Jt!=null?Jt:void 0}]);return}const q=ri(Z,"button, a, input, select, textarea, [role='button'], [onclick]");if(Qt.blockInteractions&&q&&(V.preventDefault(),V.stopPropagation()),H){if(q&&!Qt.blockInteractions)return;V.preventDefault(),(Me=oi.current)==null||Me.shake();return}if(J){if(q&&!Qt.blockInteractions)return;V.preventDefault(),(et=Mi.current)==null||et.shake();return}V.preventDefault();const S=Or(V.clientX,V.clientY);if(!S)return;const{name:k,path:D,reactComponents:z}=Om(S,fo),$=S.getBoundingClientRect(),le=V.clientX/window.innerWidth*100,ve=$m(S),Y=ve?V.clientY:V.clientY+window.scrollY,se=window.getSelection();let re;se&&se.toString().trim().length>0&&(re=se.toString().trim().slice(0,500));const ie=bd(S),ze=vd(S);pe({x:le,y:Y,clientY:V.clientY,element:k,elementPath:D,selectedText:re,boundingBox:{x:$.left,y:ve?$.top:$.top+window.scrollY,width:$.width,height:$.height},nearbyText:Tc(S),cssClasses:Ac(S),isFixed:ve,fullPath:Sd(S),accessibility:wd(S),computedStyles:ze,computedStylesObj:ie,nearbyElements:xd(S),reactComponents:z!=null?z:void 0,sourceFile:Td(S),targetElement:S}),me(null)};return document.addEventListener("click",R,!0),()=>document.removeEventListener("click",R,!0)},[E,gs,Ie,H,J,Qt.blockInteractions,fo,kn]),_.useEffect(()=>{if(!E)return;const R=q=>{q.key==="Meta"&&(vn.current.cmd=!0),q.key==="Shift"&&(vn.current.shift=!0)},V=q=>{const S=vn.current.cmd&&vn.current.shift;q.key==="Meta"&&(vn.current.cmd=!1),q.key==="Shift"&&(vn.current.shift=!1);const k=vn.current.cmd&&vn.current.shift;S&&!k&&kn.length>0&&fe()},Z=()=>{vn.current={cmd:!1,shift:!1},Ws([])};return document.addEventListener("keydown",R),document.addEventListener("keyup",V),window.addEventListener("blur",Z),()=>{document.removeEventListener("keydown",R),document.removeEventListener("keyup",V),window.removeEventListener("blur",Z)}},[E,kn,fe]),_.useEffect(()=>{if(!E||H||gs||Ie)return;const R=V=>{const Z=V.composedPath()[0]||V.target;ri(Z,"[data-feedback-toolbar]")||ri(Z,"[data-annotation-marker]")||ri(Z,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(Z.tagName)||Z.isContentEditable||(V.preventDefault(),zs.current={x:V.clientX,y:V.clientY})};return document.addEventListener("mousedown",R),()=>document.removeEventListener("mousedown",R)},[E,H,gs,Ie]),_.useEffect(()=>{if(!E||H)return;const R=V=>{if(!zs.current)return;const Z=V.clientX-zs.current.x,q=V.clientY-zs.current.y,S=Z*Z+q*q,k=ji*ji;if(!mo&&S>=k&&(ts.current=zs.current,qo(!0),V.preventDefault()),(mo||S>=k)&&ts.current){if(vo.current){const ft=Math.min(ts.current.x,V.clientX),lt=Math.min(ts.current.y,V.clientY),Jt=Math.abs(V.clientX-ts.current.x),zt=Math.abs(V.clientY-ts.current.y);vo.current.style.transform=`translate(${ft}px, ${lt}px)`,vo.current.style.width=`${Jt}px`,vo.current.style.height=`${zt}px`}const D=Date.now();if(D-Ms.current<$i)return;Ms.current=D;const z=ts.current.x,$=ts.current.y,le=Math.min(z,V.clientX),ve=Math.min($,V.clientY),Y=Math.max(z,V.clientX),se=Math.max($,V.clientY),re=(le+Y)/2,ie=(ve+se)/2,ze=new Set,Me=[[le,ve],[Y,ve],[le,se],[Y,se],[re,ie],[re,ve],[re,se],[le,ie],[Y,ie]];for(const[ft,lt]of Me){const Jt=document.elementsFromPoint(ft,lt);for(const zt of Jt)zt instanceof HTMLElement&&ze.add(zt)}const et=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const ft of et)if(ft instanceof HTMLElement){const lt=ft.getBoundingClientRect(),Jt=lt.left+lt.width/2,zt=lt.top+lt.height/2,nn=Jt>=le&&Jt<=Y&&zt>=ve&&zt<=se,Ln=Math.min(lt.right,Y)-Math.max(lt.left,le),$n=Math.min(lt.bottom,se)-Math.max(lt.top,ve),Eo=Ln>0&&$n>0?Ln*$n:0,Bo=lt.width*lt.height,mi=Bo>0?Eo/Bo:0;(nn||mi>.5)&&ze.add(ft)}const Ke=[],vt=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const ft of ze){if(ri(ft,"[data-feedback-toolbar]")||ri(ft,"[data-annotation-marker]"))continue;const lt=ft.getBoundingClientRect();if(!(lt.width>window.innerWidth*.8&&lt.height>window.innerHeight*.5)&&!(lt.width<10||lt.height<10)&&lt.left<Y&&lt.right>le&&lt.top<se&&lt.bottom>ve){const Jt=ft.tagName;let zt=vt.has(Jt);if(!zt&&(Jt==="DIV"||Jt==="SPAN")){const nn=ft.textContent&&ft.textContent.trim().length>0,Ln=ft.onclick!==null||ft.getAttribute("role")==="button"||ft.getAttribute("role")==="link"||ft.classList.contains("clickable")||ft.hasAttribute("data-clickable");(nn||Ln)&&!ft.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(zt=!0)}if(zt){let nn=!1;for(const Ln of Ke)if(Ln.left<=lt.left&&Ln.right>=lt.right&&Ln.top<=lt.top&&Ln.bottom>=lt.bottom){nn=!0;break}nn||Ke.push(lt)}}}if(fs.current){const ft=fs.current;for(;ft.children.length>Ke.length;)ft.removeChild(ft.lastChild);Ke.forEach((lt,Jt)=>{let zt=ft.children[Jt];zt||(zt=document.createElement("div"),zt.className=Ze.selectedElementHighlight,ft.appendChild(zt)),zt.style.transform=`translate(${lt.left}px, ${lt.top}px)`,zt.style.width=`${lt.width}px`,zt.style.height=`${lt.height}px`})}}};return document.addEventListener("mousemove",R,{passive:!0}),()=>document.removeEventListener("mousemove",R)},[E,H,mo,ji]),_.useEffect(()=>{if(!E)return;const R=V=>{const Z=mo,q=ts.current;if(mo&&q){Mn.current=!0;const S=Math.min(q.x,V.clientX),k=Math.min(q.y,V.clientY),D=Math.max(q.x,V.clientX),z=Math.max(q.y,V.clientY),$=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(re=>{if(!(re instanceof HTMLElement)||ri(re,"[data-feedback-toolbar]")||ri(re,"[data-annotation-marker]"))return;const ie=re.getBoundingClientRect();ie.width>window.innerWidth*.8&&ie.height>window.innerHeight*.5||ie.width<10||ie.height<10||ie.left<D&&ie.right>S&&ie.top<z&&ie.bottom>k&&$.push({element:re,rect:ie})});const ve=$.filter(({element:re})=>!$.some(({element:ie})=>ie!==re&&re.contains(ie))),Y=V.clientX/window.innerWidth*100,se=V.clientY+window.scrollY;if(ve.length>0){const re=ve.reduce((vt,{rect:ft})=>({left:Math.min(vt.left,ft.left),top:Math.min(vt.top,ft.top),right:Math.max(vt.right,ft.right),bottom:Math.max(vt.bottom,ft.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),ie=ve.slice(0,5).map(({element:vt})=>Rl(vt).name).join(", "),ze=ve.length>5?` +${ve.length-5} more`:"",Me=ve[0].element,et=bd(Me),Ke=vd(Me);pe({x:Y,y:se,clientY:V.clientY,element:`${ve.length} elements: ${ie}${ze}`,elementPath:"multi-select",boundingBox:{x:re.left,y:re.top+window.scrollY,width:re.right-re.left,height:re.bottom-re.top},isMultiSelect:!0,fullPath:Sd(Me),accessibility:wd(Me),computedStyles:Ke,computedStylesObj:et,nearbyElements:xd(Me),cssClasses:Ac(Me),nearbyText:Tc(Me),sourceFile:Td(Me)})}else{const re=Math.abs(D-S),ie=Math.abs(z-k);re>20&&ie>20&&pe({x:Y,y:se,clientY:V.clientY,element:"Area selection",elementPath:`region at (${Math.round(S)}, ${Math.round(k)})`,boundingBox:{x:S,y:k+window.scrollY,width:re,height:ie},isMultiSelect:!0})}me(null)}else Z&&(Mn.current=!0);zs.current=null,ts.current=null,qo(!1),fs.current&&(fs.current.innerHTML="")};return document.addEventListener("mouseup",R),()=>document.removeEventListener("mouseup",R)},[E,mo]);const Fe=_.useCallback(async(R,V,Z)=>{const q=Qt.webhookUrl||w;if(!q||!Qt.webhooksEnabled&&!Z)return!1;try{return(await fetch(q,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:R,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...V})})).ok}catch(S){return console.warn("[Agentation] Webhook failed:",S),!1}},[w,Qt.webhookUrl,Qt.webhooksEnabled]),ct=_.useCallback(R=>{var Z;if(!H)return;const V={id:Date.now().toString(),x:H.x,y:H.y,comment:R,element:H.element,elementPath:H.elementPath,timestamp:Date.now(),selectedText:H.selectedText,boundingBox:H.boundingBox,nearbyText:H.nearbyText,cssClasses:H.cssClasses,isMultiSelect:H.isMultiSelect,isFixed:H.isFixed,fullPath:H.fullPath,accessibility:H.accessibility,computedStyles:H.computedStyles,nearbyElements:H.nearbyElements,reactComponents:H.reactComponents,sourceFile:H.sourceFile,elementBoundingBoxes:H.elementBoundingBoxes,...g&&gn?{sessionId:gn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};U(q=>[...q,V]),Es.current=V.id,Vt(()=>{Es.current=null},300),Vt(()=>{No(q=>new Set(q).add(V.id))},250),a==null||a(V),Fe("annotation.add",{annotation:V}),ho(!0),Vt(()=>{pe(null),ho(!1)},150),(Z=window.getSelection())==null||Z.removeAllRanges(),g&&gn&&jl(g,gn,V).then(q=>{q.id!==V.id&&(U(S=>S.map(k=>k.id===V.id?{...k,id:q.id}:k)),No(S=>{const k=new Set(S);return k.delete(V.id),k.add(q.id),k}))}).catch(q=>{console.warn("[Agentation] Failed to sync annotation:",q)})},[H,a,Fe,g,gn]),Yt=_.useCallback(()=>{ho(!0),Vt(()=>{pe(null),ho(!1)},150)},[]),Pt=_.useCallback(R=>{const V=A.findIndex(q=>q.id===R),Z=A[V];(J==null?void 0:J.id)===R&&(Bs(!0),Vt(()=>{Be(null),at(null),He([]),Bs(!1)},150)),_t(R),Xo(q=>new Set(q).add(R)),Z&&(c==null||c(Z),Fe("annotation.delete",{annotation:Z})),g&&ur(g,R).catch(q=>{console.warn("[Agentation] Failed to delete annotation from server:",q)}),Vt(()=>{U(q=>q.filter(S=>S.id!==R)),Xo(q=>{const S=new Set(q);return S.delete(R),S}),_t(null),V<A.length-1&&(en(V),Vt(()=>en(null),200))},150)},[A,J,c,Fe,g]),Zt=_.useCallback(R=>{var V;if(!R){We(null),Tt(null),ut([]);return}if(We(R.id),(V=R.elementBoundingBoxes)!=null&&V.length){const Z=[];for(const q of R.elementBoundingBoxes){const S=q.x+q.width/2,k=q.y+q.height/2-window.scrollY,z=document.elementsFromPoint(S,k).find($=>!$.closest("[data-annotation-marker]")&&!$.closest("[data-agentation-root]"));z&&Z.push(z)}ut(Z),Tt(null)}else if(R.boundingBox){const Z=R.boundingBox,q=Z.x+Z.width/2,S=R.isFixed?Z.y+Z.height/2:Z.y+Z.height/2-window.scrollY,k=Or(q,S);if(k){const D=k.getBoundingClientRect(),z=D.width/Z.width,$=D.height/Z.height;z<.5||$<.5?Tt(null):Tt(k)}else Tt(null);ut([])}else Tt(null),ut([])},[]),yn=_.useCallback(R=>{if(!J)return;const V={...J,comment:R};U(Z=>Z.map(q=>q.id===J.id?V:q)),u==null||u(V),Fe("annotation.update",{annotation:V}),g&&Ox(g,J.id,{comment:R}).catch(Z=>{console.warn("[Agentation] Failed to update annotation on server:",Z)}),Bs(!0),Vt(()=>{Be(null),at(null),He([]),Bs(!1)},150)},[J,u,Fe,g]),wn=_.useCallback(()=>{Bs(!0),Vt(()=>{Be(null),at(null),He([]),Bs(!1)},150)},[]),rn=_.useCallback(()=>{const R=A.length,V=Qe.length>0||!!rt;if(R===0&&_n.length===0&&!V)return;if(d==null||d(A),Fe("annotations.clear",{annotations:A}),g){Promise.all(A.map(S=>ur(g,S.id).catch(k=>{console.warn("[Agentation] Failed to delete annotation from server:",k)})));for(const[,S]of ws.current)S&&ur(g,S).catch(()=>{});ws.current.clear();for(const[,S]of bo.current)S&&ur(g,S).catch(()=>{});bo.current.clear()}Oe(!0),Te(!0),ti([]);const Z=Vs.current;if(Z){const S=Z.getContext("2d");S&&S.clearRect(0,0,Z.width,Z.height)}(Qe.length>0||rt)&&(zn(S=>S+1),cs(S=>S+1),Vt(()=>{Rt([]),Fn(null)},200)),ht&&Ht(!1),Sn&&tn(""),On.current={rearrange:null,placements:[]},jd(jt);const q=R*30+200;Vt(()=>{U([]),No(new Set),localStorage.removeItem(ef(jt)),Oe(!1)},q),Vt(()=>Te(!1),1500)},[jt,A,_n,Qe,rt,ht,Sn,d,Fe,g]),Ft=_.useCallback(async()=>{const R=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:jt,V=Ie&&ht;let Z;if(V){if(Qe.length===0&&!rt&&!Sn)return;Z=""}else{if(Z=Ix(A,R,Qt.outputDetail),!Z&&_n.length===0&&Qe.length===0&&!rt)return;Z||(Z=`## Page Feedback: ${R}
`)}if(!V&&_n.length>0){const q=new Set;for(const z of A)z.drawingIndex!=null&&q.add(z.drawingIndex);const S=Vs.current;S&&(S.style.visibility="hidden");const k=[],D=window.scrollY;for(let z=0;z<_n.length;z++){if(q.has(z))continue;const $=_n[z];if($.points.length<2)continue;const le=$.fixed?$.points:$.points.map(Vn=>({x:Vn.x,y:Vn.y-D}));let ve=1/0,Y=1/0,se=-1/0,re=-1/0;for(const Vn of le)ve=Math.min(ve,Vn.x),Y=Math.min(Y,Vn.y),se=Math.max(se,Vn.x),re=Math.max(re,Vn.y);const ie=se-ve,ze=re-Y,Me=Math.hypot(ie,ze),et=le[0],Ke=le[le.length-1],vt=Math.hypot(Ke.x-et.x,Ke.y-et.y);let ft;const lt=vt<Me*.35,Jt=ie/Math.max(ze,1);if(lt&&Me>20){const Vn=Math.max(ie,ze)*.15;let pi=0;for(const Ti of le){const yr=Ti.x-ve<Vn,Fr=se-Ti.x<Vn,Xr=Ti.y-Y<Vn,Gr=re-Ti.y<Vn;(yr||Fr)&&(Xr||Gr)&&pi++}ft=pi>le.length*.15?"box":"circle"}else Jt>3&&ze<40?ft="underline":vt>Me*.5?ft="arrow":ft="drawing";const zt=Math.min(10,le.length),nn=Math.max(1,Math.floor(le.length/zt)),Ln=new Set,$n=[],Eo=[et];for(let Vn=nn;Vn<le.length-1;Vn+=nn)Eo.push(le[Vn]);Eo.push(Ke);for(const Vn of Eo){const pi=Or(Vn.x,Vn.y);if(!pi||Ln.has(pi)||ri(pi,"[data-feedback-toolbar]"))continue;Ln.add(pi);const{name:Ti}=Rl(pi);$n.includes(Ti)||$n.push(Ti)}const Bo=`${Math.round(ve)},${Math.round(Y)} → ${Math.round(se)},${Math.round(re)}`;let mi;(ft==="circle"||ft==="box")&&$n.length>0?mi=`${ft==="box"?"Boxed":"Circled"} **${$n[0]}**${$n.length>1?` (and ${$n.slice(1).join(", ")})`:""} (region: ${Bo})`:ft==="underline"&&$n.length>0?mi=`Underlined **${$n[0]}** (${Bo})`:ft==="arrow"&&$n.length>=2?mi=`Arrow from **${$n[0]}** to **${$n[$n.length-1]}** (${Math.round(et.x)},${Math.round(et.y)} → ${Math.round(Ke.x)},${Math.round(Ke.y)})`:$n.length>0?mi=`${ft==="arrow"?"Arrow":"Drawing"} near **${$n.join("**, **")}** (region: ${Bo})`:mi=`Drawing at ${Bo}`,k.push(mi)}S&&(S.style.visibility=""),k.length>0&&(Z+=`
**Drawings:**
`,k.forEach((z,$)=>{Z+=`${$+1}. ${z}
`}))}if((Qe.length>0||V&&Sn)&&(Z+=`
`+Dx(Qe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ht,wireframePurpose:Sn||void 0},Qt.outputDetail)),rt){const q=Rx(rt,Qt.outputDetail,{width:window.innerWidth,height:window.innerHeight});q&&(Z+=`
`+q)}if(y)try{await navigator.clipboard.writeText(Z)}catch{}h==null||h(Z),I(!0),Vt(()=>I(!1),2e3),Qt.autoClearAfterCopy&&Vt(()=>rn(),500)},[A,_n,Qe,rt,ht,Ie,ls,Sn,jt,Qt.outputDetail,fo,Qt.autoClearAfterCopy,rn,y,h]),hs=_.useCallback(async()=>{const R=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:jt;let V=Ix(A,R,Qt.outputDetail);if(!V&&Qe.length===0&&!rt)return;if(V||(V=`## Page Feedback: ${R}
`),Qe.length>0&&(V+=`
`+Dx(Qe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ht,wireframePurpose:Sn||void 0},Qt.outputDetail)),rt){const q=Rx(rt,Qt.outputDetail,{width:window.innerWidth,height:window.innerHeight});q&&(V+=`
`+q)}p&&p(V,A),ee("sending"),await new Promise(q=>Vt(q,150));const Z=await Fe("submit",{output:V,annotations:A},!0);ee(Z?"sent":"failed"),Vt(()=>ee("idle"),2500),Z&&Qt.autoClearAfterCopy&&Vt(()=>rn(),500)},[p,Fe,A,Qe,rt,ht,ls,jt,Qt.outputDetail,fo,Qt.autoClearAfterCopy,rn]);_.useEffect(()=>{if(!Cs)return;const R=10,V=q=>{const S=q.clientX-Cs.x,k=q.clientY-Cs.y,D=Math.sqrt(S*S+k*k);if(!eo&&D>R&&ni(!0),eo||D>R){let z=Cs.toolbarX+S,$=Cs.toolbarY+k;const le=20,ve=337,Y=44,re=ve-(E?es==="connected"?297:257:44),ie=le-re,ze=window.innerWidth-le-ve;z=Math.max(ie,Math.min(ze,z)),$=Math.max(le,Math.min(window.innerHeight-Y-le,$)),Os({x:z,y:$})}},Z=()=>{eo&&(Wo.current=!0),ni(!1),ki(null)};return document.addEventListener("mousemove",V),document.addEventListener("mouseup",Z),()=>{document.removeEventListener("mousemove",V),document.removeEventListener("mouseup",Z)}},[Cs,eo,E,es]);const qt=_.useCallback(R=>{var k,D;if(R.target.closest("button")||R.target.closest("[data-agentation-settings-panel]"))return;const V=R.currentTarget.parentElement;if(!V)return;const Z=V.getBoundingClientRect(),q=(k=hn==null?void 0:hn.x)!=null?k:Z.left,S=(D=hn==null?void 0:hn.y)!=null?D:Z.top;ki({x:R.clientX,y:R.clientY,toolbarX:q,toolbarY:S})},[hn]);if(_.useEffect(()=>{if(!hn)return;const R=()=>{let S=hn.x,k=hn.y;const $=20-(337-(E?es==="connected"?297:257:44)),le=window.innerWidth-20-337;S=Math.max($,Math.min(le,S)),k=Math.max(20,Math.min(window.innerHeight-44-20,k)),(S!==hn.x||k!==hn.y)&&Os({x:S,y:k})};return R(),window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[hn,E,es]),_.useEffect(()=>{const R=V=>{const Z=V.target,q=Z.tagName==="INPUT"||Z.tagName==="TEXTAREA"||Z.isContentEditable;if(V.key==="Escape"){if(Ie){kt?mt(null):Do();return}if(gs){us(!1);return}if(kn.length>0){Ws([]);return}H||E&&(ys(),M(!1))}if((V.metaKey||V.ctrlKey)&&V.shiftKey&&(V.key==="f"||V.key==="F")){V.preventDefault(),ys(),E?Co():M(!0);return}if(!(q||V.metaKey||V.ctrlKey)&&((V.key==="p"||V.key==="P")&&(V.preventDefault(),ys(),X()),(V.key==="l"||V.key==="L")&&(V.preventDefault(),ys(),gs&&us(!1),Ne&&it(!1),H&&Yt(),Ie?Do():tt(!0)),(V.key==="h"||V.key==="H")&&A.length>0&&(V.preventDefault(),ys(),T(S=>!S)),(V.key==="c"||V.key==="C")&&(A.length>0||Qe.length>0||rt)&&(V.preventDefault(),ys(),Ft()),(V.key==="x"||V.key==="X")&&(A.length>0||Qe.length>0||rt)&&(V.preventDefault(),ys(),rn(),Qe.length>0&&Rt([]),rt&&Fn(null)),V.key==="s"||V.key==="S")){const S=ma(Qt.webhookUrl)||ma(w||"");A.length>0&&S&&ce==="idle"&&(V.preventDefault(),ys(),hs())}};return document.addEventListener("keydown",R),()=>document.removeEventListener("keydown",R)},[E,gs,Ie,kt,Qe,rt,H,A.length,Qt.webhookUrl,w,ce,hs,X,Ft,rn,kn]),!st||G)return null;const Bn=A.length>0,Ts=A.filter(R=>!si.has(R.id)&&R.kind!=="placement"&&R.kind!=="rearrange"),xn=Ts.length>0,Kn=A.filter(R=>si.has(R.id)),Ei=R=>{const k=R.x/100*window.innerWidth,D=typeof R.y=="string"?parseFloat(R.y):R.y,z={};window.innerHeight-D-22-10<80&&(z.top="auto",z.bottom="calc(100% + 10px)");const le=k-200/2,ve=10;if(le<ve){const Y=ve-le;z.left=`calc(50% + ${Y}px)`}else if(le+200>window.innerWidth-ve){const Y=le+200-(window.innerWidth-ve);z.left=`calc(50% - ${Y}px)`}return z};return Il.createPortal(l.jsxs("div",{ref:de,style:{display:"contents"},"data-agentation-theme":Rs?"dark":"light","data-agentation-accent":Qt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${Ze.toolbar}${C?` ${C}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:hn?{left:hn.x,top:hn.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${Ze.toolbarContainer} ${E?Ze.expanded:Ze.collapsed} ${Fs?Ze.entrance:""} ${W?Ze.hiding:""} ${!Qt.webhooksEnabled&&(ma(Qt.webhookUrl)||ma(w||""))?Ze.serverConnected:""}`,onClick:E?void 0:R=>{if(Wo.current){Wo.current=!1,R.preventDefault();return}M(!0)},onMouseDown:qt,role:E?void 0:"button",tabIndex:E?-1:0,title:E?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${Ze.toggleContent} ${E?Ze.hidden:Ze.visible}`,children:[l.jsx(F3,{size:24}),xn&&l.jsx("span",{className:`${Ze.badge} ${E?Ze.fadeOut:""} ${Fs?Ze.entrance:""}`,children:Ts.length})]}),l.jsxs("div",{className:`${Ze.controlsContent} ${E?Ze.visible:Ze.hidden} ${hn&&hn.y<100?Ze.tooltipBelow:""} ${qe||Ne?Ze.tooltipsHidden:""} ${Ys?Ze.tooltipsInSession:""}`,onMouseEnter:Vo,onMouseLeave:Ci,children:[l.jsxs("div",{className:`${Ze.buttonWrapper} ${hn&&hn.x<120?Ze.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:Ze.controlButton,onClick:R=>{R.stopPropagation(),ys(),X()},"data-active":te,children:l.jsx(Q3,{size:24,isPaused:te})}),l.jsxs("span",{className:Ze.buttonTooltip,children:[te?"Resume animations":"Pause animations",l.jsx("span",{className:Ze.shortcut,children:"P"})]})]}),l.jsxs("div",{className:Ze.buttonWrapper,children:[l.jsx("button",{className:`${Ze.controlButton} ${Rs?"":Ze.light}`,onClick:R=>{R.stopPropagation(),ys(),gs&&us(!1),Ne&&it(!1),H&&Yt(),Ie?Do():tt(!0)},"data-active":Ie,style:Ie&&ht?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(aj,{size:21})}),l.jsxs("span",{className:Ze.buttonTooltip,children:[Ie?"Exit layout mode":"Layout mode",l.jsx("span",{className:Ze.shortcut,children:"L"})]})]}),l.jsxs("div",{className:Ze.buttonWrapper,children:[l.jsx("button",{className:Ze.controlButton,onClick:R=>{R.stopPropagation(),ys(),T(!L)},disabled:!Bn||Ie,children:l.jsx(K3,{size:24,isOpen:L})}),l.jsxs("span",{className:Ze.buttonTooltip,children:[L?"Hide markers":"Show markers",l.jsx("span",{className:Ze.shortcut,children:"H"})]})]}),l.jsxs("div",{className:Ze.buttonWrapper,children:[l.jsx("button",{className:`${Ze.controlButton} ${we?Ze.statusShowing:""}`,onClick:R=>{R.stopPropagation(),ys(),Ft()},disabled:Ie&&ht?Qe.length===0&&!((no=rt==null?void 0:rt.sections)!=null&&no.length):!Bn&&_n.length===0&&Qe.length===0&&!((ko=rt==null?void 0:rt.sections)!=null&&ko.length),"data-active":we,children:l.jsx(G3,{size:24,copied:we,tint:Ie&&ht&&(Qe.length>0||(jo=rt==null?void 0:rt.sections)!=null&&jo.length)?"#f97316":void 0})}),l.jsxs("span",{className:Ze.buttonTooltip,children:[Ie&&ht?"Copy layout":"Copy feedback",l.jsx("span",{className:Ze.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${Ze.buttonWrapper} ${Ze.sendButtonWrapper} ${E&&!Qt.webhooksEnabled&&(ma(Qt.webhookUrl)||ma(w||""))?Ze.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${Ze.controlButton} ${ce==="sent"||ce==="failed"?Ze.statusShowing:""}`,onClick:R=>{R.stopPropagation(),ys(),hs()},disabled:!Bn||!ma(Qt.webhookUrl)&&!ma(w||"")||ce==="sending","data-no-hover":ce==="sent"||ce==="failed",tabIndex:ma(Qt.webhookUrl)||ma(w||"")?0:-1,children:[l.jsx(q3,{size:24,state:ce}),Bn&&ce==="idle"&&l.jsx("span",{className:Ze.buttonBadge,children:A.length})]}),l.jsxs("span",{className:Ze.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:Ze.shortcut,children:"S"})]})]}),l.jsxs("div",{className:Ze.buttonWrapper,children:[l.jsx("button",{className:Ze.controlButton,onClick:R=>{R.stopPropagation(),ys(),rn()},disabled:!Bn&&_n.length===0&&Qe.length===0&&!((Ro=rt==null?void 0:rt.sections)!=null&&Ro.length),"data-danger":!0,children:l.jsx(J3,{size:24})}),l.jsxs("span",{className:Ze.buttonTooltip,children:["Clear all",l.jsx("span",{className:Ze.shortcut,children:"X"})]})]}),l.jsxs("div",{className:Ze.buttonWrapper,children:[l.jsx("button",{className:Ze.controlButton,onClick:R=>{R.stopPropagation(),ys(),Ie&&Do(),it(!Ne)},children:l.jsx(Z3,{size:24})}),g&&es!=="disconnected"&&l.jsx("span",{className:`${Ze.mcpIndicator} ${Ze[es]} ${Ne?Ze.hidden:""}`,title:es==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:Ze.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:Ze.divider}),l.jsxs("div",{className:`${Ze.buttonWrapper} ${hn&&typeof window<"u"&&hn.x>window.innerWidth-120?Ze.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:Ze.controlButton,onClick:R=>{R.stopPropagation(),ys(),Co()},children:l.jsx(ej,{size:24})}),l.jsxs("span",{className:Ze.buttonTooltip,children:["Exit",l.jsx("span",{className:Ze.shortcut,children:"Esc"})]})]})]}),l.jsx(L8,{visible:Ie&&E,activeType:kt,onSelect:R=>{mt(kt===R?null:R)},isDarkMode:Rs,sectionCount:(Mo=rt==null?void 0:rt.sections.length)!=null?Mo:0,onDetectSections:()=>{var D,z;const R=F8(),V=(D=rt==null?void 0:rt.sections)!=null?D:[],Z=new Set(V.map($=>$.selector)),q=R.filter($=>!Z.has($.selector)),S=[...V,...q],k=[...(z=rt==null?void 0:rt.originalOrder)!=null?z:[],...q.map($=>$.id)];Fn({sections:S,originalOrder:k,detectedAt:Date.now()})},placementCount:Qe.length,onClearPlacements:()=>{zn(R=>R+1),cs(R=>R+1),Vt(()=>{Fn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:ht,onBlankCanvasChange:R=>{const V={sections:[],originalOrder:[],detectedAt:Date.now()};R?(yo.current={rearrange:rt,placements:Qe},Fn(On.current.rearrange||V),Rt(On.current.placements),mt(null)):(On.current={rearrange:rt,placements:Qe},Fn(yo.current.rearrange||V),Rt(yo.current.placements)),Ht(R)},wireframePurpose:Sn,onWireframePurposeChange:tn,Tooltip:Pr,onDragStart:(R,V)=>{var Y;V.preventDefault();const Z=Et[R];let q=null,S=!1;const k=V.clientX,D=V.clientY,z=V.target.closest("[data-feedback-toolbar]"),$=(Y=z==null?void 0:z.getBoundingClientRect().top)!=null?Y:window.innerHeight,le=se=>{const re=se.clientX-k,ie=se.clientY-D;if(!S&&(Math.abs(re)>4||Math.abs(ie)>4)&&(S=!0,q=document.createElement("div"),q.className=`${Pe.dragPreview}${ht?` ${Pe.dragPreviewWireframe}`:""}`,document.body.appendChild(q)),!q)return;const ze=Math.max(0,$-se.clientY),Me=Math.min(1,ze/180),et=1-Math.pow(1-Me,2),Ke=28,vt=20,ft=Math.min(140,Z.width*.18),lt=Math.min(90,Z.height*.18),Jt=Ke+(ft-Ke)*et,zt=vt+(lt-vt)*et;q.style.width=`${Jt}px`,q.style.height=`${zt}px`,q.style.left=`${se.clientX-Jt/2}px`,q.style.top=`${se.clientY-zt/2}px`,q.style.opacity=`${.5+.5*et}`,q.textContent=et>.25?R:""},ve=se=>{if(window.removeEventListener("mousemove",le),window.removeEventListener("mouseup",ve),q&&document.body.removeChild(q),S){const re=Z.width,ie=Z.height,ze=window.scrollY,Me=Math.max(0,se.clientX-re/2),et=Math.max(0,se.clientY+ze-ie/2),Ke={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:R,x:Me,y:et,width:re,height:ie,scrollY:ze,timestamp:Date.now()};Rt(vt=>[...vt,Ke]),mt(null),_s.current=new Set,In(vt=>vt+1)}};window.addEventListener("mousemove",le),window.addEventListener("mouseup",ve)}}),l.jsx(t7,{settings:Qt,onSettingsChange:R=>zi(V=>({...V,...R})),isDarkMode:Rs,onToggleTheme:Zs,isDevMode:Js,connectionStatus:es,endpoint:g,isVisible:Ve,toolbarNearBottom:!!hn&&hn.y<230,settingsPage:ge,onSettingsPageChange:ot,onHideToolbar:Pi})]})}),(Ie||xt)&&l.jsx("div",{className:`${Pe.blankCanvas} ${dn?Pe.visible:""} ${Nt?Pe.gridActive:""}`,style:{"--canvas-opacity":St},"data-feedback-toolbar":!0}),Ie&&ht&&dn&&l.jsxs("div",{className:Pe.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:Pe.wireframeOpacityRow,children:[l.jsx("span",{className:Pe.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:Pe.wireframeOpacitySlider,min:0,max:1,step:.01,value:St,onChange:R=>fn(Number(R.target.value))})]}),l.jsxs("div",{className:Pe.wireframeNoticeTitleRow,children:[l.jsx("span",{className:Pe.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:Pe.wireframeNoticeDivider}),l.jsx("button",{className:Pe.wireframeStartOver,onClick:()=>{zn(R=>R+1),Fn({sections:[],originalOrder:[],detectedAt:Date.now()}),On.current={rearrange:null,placements:[]},tn(""),jd(jt)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Ie||xt)&&l.jsx(A8,{placements:Qe,onChange:Rt,activeComponent:xt?null:kt,onActiveComponentChange:mt,isDarkMode:Rs,exiting:xt,onInteractionChange:ln,passthrough:!kt,extraSnapRects:rt==null?void 0:rt.sections.map(R=>R.currentRect),deselectSignal:Ds,clearSignal:on,wireframe:ht,onSelectionChange:(R,V)=>{_s.current=R,V||(vs.current=new Set,Ao(Z=>Z+1))},onDragMove:(R,V)=>{const Z=vs.current;if(!(!Z.size||!rt)){if(!Wt.current){Wt.current=new Map;for(const q of rt.sections)Z.has(q.id)&&Wt.current.set(q.id,{x:q.currentRect.x,y:q.currentRect.y})}for(const q of rt.sections){if(!Z.has(q.id)||!Wt.current.get(q.id))continue;const k=document.querySelector(`[data-rearrange-section="${q.id}"]`);k&&(k.style.transform=`translate(${R}px, ${V}px)`)}}},onDragEnd:(R,V,Z)=>{const q=vs.current,S=Wt.current;if(Wt.current=null,!(!q.size||!rt||!S)){for(const k of q){const D=document.querySelector(`[data-rearrange-section="${k}"]`);D&&(D.style.transform="")}Z&&Fn(k=>k&&{...k,sections:k.sections.map(D=>{const z=S.get(D.id);return z?{...D,currentRect:{...D.currentRect,x:Math.max(0,z.x+R),y:Math.max(0,z.y+V)}}:D})})}}}),(Ie||xt)&&rt&&l.jsx(q8,{rearrangeState:rt,onChange:Fn,isDarkMode:Rs,exiting:xt,blankCanvas:ht,extraSnapRects:Qe.map(R=>({x:R.x,y:R.y,width:R.width,height:R.height})),clearSignal:Cn,deselectSignal:xo,onSelectionChange:(R,V)=>{vs.current=R,V||(_s.current=new Set,In(Z=>Z+1))},onDragMove:(R,V)=>{const Z=_s.current;if(Z.size){if(!Wt.current){Wt.current=new Map;for(const q of Qe)Z.has(q.id)&&Wt.current.set(q.id,{x:q.x,y:q.y})}for(const q of Z){const S=document.querySelector(`[data-design-placement="${q}"]`);S&&(S.style.transform=`translate(${R}px, ${V}px)`)}}},onDragEnd:(R,V,Z)=>{const q=_s.current,S=Wt.current;if(Wt.current=null,!(!q.size||!S)){for(const k of q){const D=document.querySelector(`[data-design-placement="${k}"]`);D&&(D.style.transform="")}Z&&Rt(k=>k.map(D=>{const z=S.get(D.id);return z?{...D,x:Math.max(0,z.x+R),y:Math.max(0,z.y+V)}:D}))}}}),l.jsx("canvas",{ref:Vs,className:`${Ze.drawCanvas} ${gs?Ze.active:""}`,style:{opacity:Gs?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:Ze.markersLayer,"data-feedback-toolbar":!0,children:[he&&Ts.filter(R=>!R.isFixed).map((R,V,Z)=>l.jsx(Px,{annotation:R,globalIndex:Ts.findIndex(q=>q.id===R.id),layerIndex:V,layerSize:Z.length,isExiting:Re,isClearing:_e,isAnimated:Fo.has(R.id),isHovered:!Re&&Je===R.id,isDeleting:Ot===R.id,isEditingAny:!!J,renumberFrom:Gt,markerClickBehavior:Qt.markerClickBehavior,tooltipStyle:Ei(R),onHoverEnter:q=>!Re&&q.id!==Es.current&&Zt(q),onHoverLeave:()=>Zt(null),onClick:q=>Qt.markerClickBehavior==="delete"?Pt(q.id):Ae(q),onContextMenu:Ae},R.id)),he&&!Re&&Kn.filter(R=>!R.isFixed).map(R=>l.jsx(Hx,{annotation:R},R.id))]}),l.jsxs("div",{className:Ze.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[he&&Ts.filter(R=>R.isFixed).map((R,V,Z)=>l.jsx(Px,{annotation:R,globalIndex:Ts.findIndex(q=>q.id===R.id),layerIndex:V,layerSize:Z.length,isExiting:Re,isClearing:_e,isAnimated:Fo.has(R.id),isHovered:!Re&&Je===R.id,isDeleting:Ot===R.id,isEditingAny:!!J,renumberFrom:Gt,markerClickBehavior:Qt.markerClickBehavior,tooltipStyle:Ei(R),onHoverEnter:q=>!Re&&q.id!==Es.current&&Zt(q),onHoverLeave:()=>Zt(null),onClick:q=>Qt.markerClickBehavior==="delete"?Pt(q.id):Ae(q),onContextMenu:Ae},R.id)),he&&!Re&&Kn.filter(R=>R.isFixed).map(R=>l.jsx(Hx,{annotation:R,fixed:!0},R.id))]}),E&&l.jsxs("div",{className:Ze.overlay,"data-feedback-toolbar":!0,style:H||J?{zIndex:99999}:void 0,children:[(oe==null?void 0:oe.rect)&&!H&&!Mt&&!mo&&l.jsx("div",{className:`${Ze.hoverHighlight} ${Ze.enter}`,style:{left:oe.rect.left,top:oe.rect.top,width:oe.rect.width,height:oe.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),kn.filter(R=>document.contains(R.element)).map((R,V)=>{const Z=R.element.getBoundingClientRect(),q=kn.length>1;return l.jsx("div",{className:q?Ze.multiSelectOutline:Ze.singleSelectOutline,style:{position:"fixed",left:Z.left,top:Z.top,width:Z.width,height:Z.height,...q?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},V)}),Je&&!H&&(()=>{var S;const R=A.find(k=>k.id===Je);if(!(R!=null&&R.boundingBox))return null;if((S=R.elementBoundingBoxes)!=null&&S.length)return Ct.length>0?Ct.filter(k=>document.contains(k)).map((k,D)=>{const z=k.getBoundingClientRect();return l.jsx("div",{className:`${Ze.multiSelectOutline} ${Ze.enter}`,style:{left:z.left,top:z.top,width:z.width,height:z.height}},`hover-outline-live-${D}`)}):R.elementBoundingBoxes.map((k,D)=>l.jsx("div",{className:`${Ze.multiSelectOutline} ${Ze.enter}`,style:{left:k.x,top:k.y-bt,width:k.width,height:k.height}},`hover-outline-${D}`));const V=pt&&document.contains(pt)?pt.getBoundingClientRect():null,Z=V?{x:V.left,y:V.top,width:V.width,height:V.height}:{x:R.boundingBox.x,y:R.isFixed?R.boundingBox.y:R.boundingBox.y-bt,width:R.boundingBox.width,height:R.boundingBox.height},q=R.isMultiSelect;return l.jsx("div",{className:`${q?Ze.multiSelectOutline:Ze.singleSelectOutline} ${Ze.enter}`,style:{left:Z.x,top:Z.y,width:Z.width,height:Z.height,...q?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),oe&&!H&&!Mt&&!mo&&l.jsxs("div",{className:`${Ze.hoverTooltip} ${Ze.enter}`,style:{left:Math.max(8,Math.min(O.x,window.innerWidth-100)),top:Math.max(O.y-(oe.reactComponents?48:32),8)},children:[oe.reactComponents&&l.jsx("div",{className:Ze.hoverReactPath,children:oe.reactComponents}),l.jsx("div",{className:Ze.hoverElementName,children:oe.elementName})]}),H&&l.jsxs(l.Fragment,{children:[(Ko=H.multiSelectElements)!=null&&Ko.length?H.multiSelectElements.filter(R=>document.contains(R)).map((R,V)=>{const Z=R.getBoundingClientRect();return l.jsx("div",{className:`${Ze.multiSelectOutline} ${qn?Ze.exit:Ze.enter}`,style:{left:Z.left,top:Z.top,width:Z.width,height:Z.height}},`pending-multi-${V}`)}):H.targetElement&&document.contains(H.targetElement)?(()=>{const R=H.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${Ze.singleSelectOutline} ${qn?Ze.exit:Ze.enter}`,style:{left:R.left,top:R.top,width:R.width,height:R.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():H.boundingBox&&l.jsx("div",{className:`${H.isMultiSelect?Ze.multiSelectOutline:Ze.singleSelectOutline} ${qn?Ze.exit:Ze.enter}`,style:{left:H.boundingBox.x,top:H.boundingBox.y-bt,width:H.boundingBox.width,height:H.boundingBox.height,...H.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const R=H.x,V=H.isFixed?H.y:H.y-bt;return l.jsxs(l.Fragment,{children:[l.jsx(WM,{x:R,y:V,isMultiSelect:H.isMultiSelect,isExiting:qn}),l.jsx(Zd,{ref:oi,element:H.element,selectedText:H.selectedText,computedStyles:H.computedStylesObj,placeholder:H.element==="Area selection"?"What should change in this area?":H.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:ct,onCancel:Yt,isExiting:qn,lightMode:!Rs,accentColor:H.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,R/100*window.innerWidth)),...V>window.innerHeight-290?{bottom:window.innerHeight-V+20}:{top:V+20}}})]})})()]}),J&&l.jsxs(l.Fragment,{children:[(xa=J.elementBoundingBoxes)!=null&&xa.length?gt.length>0?gt.filter(R=>document.contains(R)).map((R,V)=>{const Z=R.getBoundingClientRect();return l.jsx("div",{className:`${Ze.multiSelectOutline} ${Ze.enter}`,style:{left:Z.left,top:Z.top,width:Z.width,height:Z.height}},`edit-multi-live-${V}`)}):J.elementBoundingBoxes.map((R,V)=>l.jsx("div",{className:`${Ze.multiSelectOutline} ${Ze.enter}`,style:{left:R.x,top:R.y-bt,width:R.width,height:R.height}},`edit-multi-${V}`)):(()=>{const R=dt&&document.contains(dt)?dt.getBoundingClientRect():null,V=R?{x:R.left,y:R.top,width:R.width,height:R.height}:J.boundingBox?{x:J.boundingBox.x,y:J.isFixed?J.boundingBox.y:J.boundingBox.y-bt,width:J.boundingBox.width,height:J.boundingBox.height}:null;return V?l.jsx("div",{className:`${J.isMultiSelect?Ze.multiSelectOutline:Ze.singleSelectOutline} ${Ze.enter}`,style:{left:V.x,top:V.y,width:V.width,height:V.height,...J.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(Zd,{ref:Mi,element:J.element,selectedText:J.selectedText,computedStyles:U8(J.computedStyles),placeholder:"Edit your feedback...",initialValue:J.comment,submitLabel:"Save",onSubmit:yn,onCancel:wn,onDelete:()=>Pt(J.id),isExiting:Go,lightMode:!Rs,accentColor:J.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const R=J.isFixed?J.y:J.y-bt;return{left:Math.max(160,Math.min(window.innerWidth-160,J.x/100*window.innerWidth)),...R>window.innerHeight-290?{bottom:window.innerHeight-R+20}:{top:R+20}}})()})]}),mo&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:vo,className:Ze.dragSelection}),l.jsx("div",{ref:fs,className:Ze.highlightsContainer})]})]})]}),document.body)}var o7=Object.freeze({}),i7=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(e,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(e,{id:e,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(e,{...u}),this.baseValues.set(e,{...u}),this.notifyGlobal()}updatePanel(e,n,i,a){var b;const c=this.panels.get(e);if(!c){this.registerPanel(e,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[w,C]of Object.entries(h))p[w]=this.normalizePreservedValue(c.values[w],C,d.get(w));this.initTransitionModes(i,"",p);for(const[w,C]of Object.entries(c.values)){if(!w.endsWith(".__mode"))continue;const E=w.slice(0,-7),M=d.get(E);(M==null?void 0:M.type)==="transition"&&(p[w]=C)}const y={id:e,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(e,y),this.snapshots.set(e,{...p});const g=(b=this.baseValues.get(e))!=null?b:{},x={};for(const[w,C]of Object.entries(h))x[w]=this.normalizePreservedValue(g[w],C,d.get(w));for(const[w,C]of Object.entries(p))w.endsWith(".__mode")&&(x[w]=C);this.baseValues.set(e,x),this.notify(e),this.notifyGlobal()}unregisterPanel(e){this.panels.delete(e),this.listeners.delete(e),this.snapshots.delete(e),this.actionListeners.delete(e),this.baseValues.delete(e),this.notifyGlobal()}updateValue(e,n,i){var u;const a=this.panels.get(e);if(!a)return;a.values[n]=i;const c=this.activePreset.get(e);if(c){const h=((u=this.presets.get(e))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(e);d&&(d[n]=i)}this.snapshots.set(e,{...a.values}),this.notify(e)}updateSpringMode(e,n,i){this.updateTransitionMode(e,n,i)}getSpringMode(e,n){const i=this.getTransitionMode(e,n);return i==="easing"?"simple":i}updateTransitionMode(e,n,i){const a=this.panels.get(e);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(e,{...a.values}),this.notify(e))}getTransitionMode(e,n){const i=this.panels.get(e);return i&&i.values[`${n}.__mode`]||"simple"}getValue(e,n){const i=this.panels.get(e);return i==null?void 0:i.values[n]}getValues(e){var n;return(n=this.snapshots.get(e))!=null?n:o7}getPanels(){return Array.from(this.panels.values())}getPanel(e){return this.panels.get(e)}subscribe(e,n){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(n),()=>{var i;(i=this.listeners.get(e))==null||i.delete(n)}}subscribeGlobal(e){return this.globalListeners.add(e),()=>this.globalListeners.delete(e)}subscribeActions(e,n){return this.actionListeners.has(e)||this.actionListeners.set(e,new Set),this.actionListeners.get(e).add(n),()=>{var i;(i=this.actionListeners.get(e))==null||i.delete(n)}}triggerAction(e,n){var i;(i=this.actionListeners.get(e))==null||i.forEach(a=>a(n))}savePreset(e,n){var d;const i=this.panels.get(e);if(!i)throw new Error(`Panel ${e} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(e))!=null?d:[];return this.presets.set(e,[...u,c]),this.activePreset.set(e,a),this.snapshots.set(e,{...i.values}),this.notify(e),a}loadPreset(e,n){var u;const i=this.panels.get(e);if(!i)return;const c=((u=this.presets.get(e))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(e,{...i.values}),this.activePreset.set(e,n),this.notify(e))}deletePreset(e,n){var c;const i=(c=this.presets.get(e))!=null?c:[];this.presets.set(e,i.filter(u=>u.id!==n)),this.activePreset.get(e)===n&&this.activePreset.set(e,null);const a=this.panels.get(e);a&&this.snapshots.set(e,{...a.values}),this.notify(e)}getPresets(e){var n;return(n=this.presets.get(e))!=null?n:[]}getActivePresetId(e){var n;return(n=this.activePreset.get(e))!=null?n:null}clearActivePreset(e){const n=this.panels.get(e),i=this.baseValues.get(e);n&&i&&(n.values={...i},this.snapshots.set(e,{...n.values})),this.activePreset.set(e,null),this.notify(e)}resolveShortcutTarget(e,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==e.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const e=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&e.push({panelId:i.id,path:a,control:u,shortcut:c})}return e}findControlByPath(e,n){for(const i of e){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(e){var n;(n=this.listeners.get(e))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(e=>e())}initTransitionModes(e,n,i){for(const[a,c]of Object.entries(e)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(e,n,i){var c;const a=[];for(const[u,d]of Object.entries(e)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),y=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:y});else if(typeof d=="number"){const{min:g,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:g,max:x,step:b,shortcut:y})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:y});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const g=d,x="_collapsed"in g?!g._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(g,h,i)})}}return a}flattenValues(e,n){var a,c,u;const i={};for(const[d,h]of Object.entries(e)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const y=h.options[0],g=typeof y=="string"?y:y.value;i[p]=(a=h.default)!=null?a:g}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="spring"}isEasingConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="easing"}isActionConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="action"}isSelectConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="select"&&"options"in e&&Array.isArray(e.options)}isColorConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="color"}isTextConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="text"}isHexColor(e){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(e)}formatLabel(e){return e.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(e){return e>=0&&e<=1?{min:0,max:1,step:.01}:e>=0&&e<=10?{min:0,max:e*3||10,step:.1}:e>=0&&e<=100?{min:0,max:e*3||100,step:1}:e>=0?{min:0,max:e*3||1e3,step:10}:{min:e*3,max:-e*3,step:1}}inferStep(e,n){const i=n-e;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(e,n,i){var a,c,u;if(e===void 0||!i)return n;switch(i.type){case"slider":{if(typeof e!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,e));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof e=="boolean"?e:n;case"select":{if(typeof e!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(e)?e:n}case"color":case"text":return typeof e=="string"?e:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(e)?e:n:this.isEasingConfig(n)&&this.isEasingConfig(e)?e:n;case"action":return n;default:return n}}roundToStep(e,n,i,a){const c=n+Math.round((e-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(e){const n=String(e),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(e){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(e),n}},un=new i7;function a7(e,n,i){const a=_.useId(),c=`${e}-${a}`,u=_.useRef(n),d=JSON.stringify(n);u.current=n;const h=_.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=_.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const y=JSON.stringify(i==null?void 0:i.shortcuts);_.useEffect(()=>(un.registerPanel(c,e,u.current,p.current),()=>un.unregisterPanel(c)),[c,e]);const g=_.useRef(!1);_.useEffect(()=>{if(!g.current){g.current=!0;return}un.updatePanel(c,e,u.current,p.current)},[c,e,d,y]),_.useEffect(()=>un.subscribeActions(c,b=>{var w;(w=h.current)==null||w.call(h,b)}),[c]);const x=_.useSyncExternalStore(b=>un.subscribe(c,b),()=>un.getValues(c),()=>un.getValues(c));return S2(n,x,"")}function S2(e,n,i){var c,u,d,h,p,y,g,x,b,w;const a={};for(const[C,E]of Object.entries(e)){if(C==="_collapsed")continue;const M=i?`${i}.${C}`:C;if(Array.isArray(E)&&E.length<=4&&typeof E[0]=="number")a[C]=(c=n[M])!=null?c:E[0];else if(typeof E=="number"||typeof E=="boolean"||typeof E=="string")a[C]=(u=n[M])!=null?u:E;else if(r7(E)||l7(E))a[C]=(d=n[M])!=null?d:E;else if(c7(E))a[C]=(h=n[M])!=null?h:E;else if(u7(E)){const A=(p=E.default)!=null?p:h7(E.options);a[C]=(y=n[M])!=null?y:A}else d7(E)?a[C]=(x=(g=n[M])!=null?g:E.default)!=null?x:"#000000":f7(E)?a[C]=(w=(b=n[M])!=null?b:E.default)!=null?w:"":typeof E=="object"&&E!==null&&(a[C]=S2(E,n,M))}return a}function Vl(e,n){return typeof e=="object"&&e!==null&&"type"in e&&e.type===n}function r7(e){return Vl(e,"spring")}function l7(e){return Vl(e,"easing")}function c7(e){return Vl(e,"action")}function u7(e){return Vl(e,"select")&&"options"in e&&Array.isArray(e.options)}function d7(e){return Vl(e,"color")}function f7(e){return Vl(e,"text")}function h7(e){const n=e[0];return typeof n=="string"?n:n.value}function Sp(e){const n=e.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function Hd(e,n){const i=Math.round(e/n)*n;return parseFloat(i.toFixed(Sp(n)))}function Lc(e,n){var d,h,p,y;const i=(d=e.min)!=null?d:0,c=((h=e.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(y=e.step)!=null?y:1}function Oc(e,n,i,a,c){var y,g;const u=un.getValue(e,n),d=(y=i.min)!=null?y:0,h=(g=i.max)!=null?g:1,p=Math.max(d,Math.min(h,u+c*a));un.updateValue(e,n,Hd(p,a))}function m7(e,n,i){const a=(e-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):e}function Ad(){const e=document.activeElement;if(!e)return!1;const n=e.tagName;return n==="INPUT"||n==="TEXTAREA"||e.contentEditable==="true"}function Im(e){if(e.altKey)return"alt";if(e.shiftKey)return"shift";if(e.metaKey)return"meta"}function C2(e,n){for(const i of e){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=C2(i.children,n);if(a)return a}}return null}var Nd=4;function p7(e){switch(e){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function _7(e){var c;const n=(c=e.interaction)!=null?c:"scroll",i=p7(n);return e.key?`${k2(e.modifier)}${e.key.toUpperCase()}+${i}`:i}function g7(e){return e.key?`${k2(e.modifier)}${e.key.toUpperCase()}`:"Press"}function k2(e){return e==="alt"?"⌥":e==="shift"?"⇧":e==="meta"?"⌘":""}var j2=_.createContext({activePanelId:null,activePath:null});function y7({children:e}){const[n,i]=_.useState({activePanelId:null,activePath:null}),a=_.useRef(new Set),c=_.useRef(!1),u=_.useRef(null),d=_.useRef(0),h=_.useCallback(p=>{var y;for(const g of a.current){const x=un.getPanels();for(const b of x)for(const[w,C]of Object.entries(b.shortcuts)){if(!C.key||C.key.toLowerCase()!==g||((y=C.interaction)!=null?y:"scroll")!==p)continue;const E=C2(b.controls,w);if(E&&E.type==="slider")return{panelId:b.id,path:w,control:E,shortcut:C}}}return null},[]);return _.useEffect(()=>{const p=E=>{if(Ad())return;const M=E.key.toLowerCase();if((M==="arrowleft"||M==="arrowright"||M==="arrowup"||M==="arrowdown")&&a.current.size>0){const T=h("scroll")||h("drag")||h("move");if(T&&T.control.type==="slider"){E.preventDefault();const G=M==="arrowright"||M==="arrowup"?1:-1,F=Lc(T.control,T.shortcut);Oc(T.panelId,T.path,T.control,F,G);return}}const A=a.current.has(M);a.current.add(M);const U=Im(E),L=un.resolveShortcutTarget(M,U);if(L&&(i({activePanelId:L.panelId,activePath:L.path}),!A&&L.control.type==="toggle")){const T=un.getValue(L.panelId,L.path);un.updateValue(L.panelId,L.path,!T)}A||(u.current=null,d.current=0)},y=E=>{const M=E.key.toLowerCase();if(a.current.delete(M),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let A=!1;for(const U of a.current){const L=Im(E),T=un.resolveShortcutTarget(U,L);if(T){i({activePanelId:T.panelId,activePath:T.path}),A=!0;break}}A||i({activePanelId:null,activePath:null})}},g=E=>{var U,L;if(Ad())return;const M=Im(E);if(a.current.size>0)for(const T of a.current){const G=un.resolveShortcutTarget(T,M);if(!G)continue;const{panelId:F,path:W,control:K}=G;if(((L=(U=K.shortcut)==null?void 0:U.interaction)!=null?L:"scroll")!=="scroll"||K.type!=="slider")continue;E.preventDefault();const he=Lc(K,K.shortcut),ye=E.deltaY>0?-1:1;Oc(F,W,K,he,ye);return}const A=un.resolveScrollOnlyTargets();for(const{panelId:T,path:G,control:F,shortcut:W}of A){if(F.type!=="slider")continue;E.preventDefault();const K=Lc(F,W),de=E.deltaY>0?-1:1;Oc(T,G,F,K,de);return}},x=E=>{if(Ad()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=E.clientX,d.current=0,E.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},w=E=>{if(Ad()||a.current.size===0)return;if(c.current){const A=h("drag");if(A&&u.current!==null){const U=E.clientX-u.current;u.current=E.clientX,d.current+=U;const L=Lc(A.control,A.shortcut),T=Math.trunc(d.current/Nd);T!==0&&(d.current-=T*Nd,Oc(A.panelId,A.path,A.control,L,T))}return}const M=h("move");if(M){if(u.current===null){u.current=E.clientX;return}const A=E.clientX-u.current;u.current=E.clientX,d.current+=A;const U=Lc(M.control,M.shortcut),L=Math.trunc(d.current/Nd);L!==0&&(d.current-=L*Nd,Oc(M.panelId,M.path,M.control,U,L))}},C=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",y),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",w),window.addEventListener("blur",C),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",y),window.removeEventListener("wheel",g),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",w),window.removeEventListener("blur",C)}},[h]),l.jsx(j2.Provider,{value:n,children:e})}var u_="M6 9.5L12 15.5L18 9.5",x7="M5 12.75L10 19L19 5",Pm={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},b7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],v7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Wx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function tf({title:e,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=_.useState(i),[y,g]=_.useState(!i),x=_.useRef(null),[b,w]=_.useState(void 0),[C,E]=_.useState(typeof window<"u"?window.innerHeight:800);_.useEffect(()=>{if(!a)return;const U=()=>E(window.innerHeight);return window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)},[a]),_.useEffect(()=>{const U=x.current;if(!U)return;const L=new ResizeObserver(()=>{if(h){const T=U.offsetHeight;w(G=>G===T?G:T)}});return L.observe(U),()=>L.disconnect()},[h]);const M=()=>{if(c&&a)return;const U=!h;p(U),g(!U),u==null||u(U)},A=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:M,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:e})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:e})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Wx.path,fill:"currentColor"}),Wx.circles.map((U,L)=>l.jsx("circle",{cx:U.cx,cy:U.cy,r:U.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},L))]}),!a&&l.jsx(ui.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:u_})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:U=>U.stopPropagation(),children:d})]}),l.jsx(cf,{initial:!1,children:h&&l.jsx(ui.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:A});const U=h?{width:280,height:b!==void 0?Math.min(b+10,C-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(ui.div,{className:"dialkit-panel-inner",style:U,onClick:h?void 0:M,"data-collapsed":y,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:A})}return A}var w7=3,S7=32,C7=200,k7=8;function ei({label:e,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var st;const y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=_.useRef(null),w=_.useRef(null),[C,E]=_.useState(!1),[M,A]=_.useState(!1),[U,L]=_.useState(!1),[T,G]=_.useState(!1),[F,W]=_.useState(!1),[K,de]=_.useState(!1),[he,ye]=_.useState(""),Re=_.useRef(null),Ge=_.useRef(null),oe=_.useRef(!0),me=_.useRef(null),O=_.useRef(null),ae=_.useRef(1),H=(n-a)/(c-a)*100,pe=C||U,we=mp(H),I=hd(we,B=>`${B}%`),ce=hd(we,B=>`max(5px, calc(${B}% - 9px))`),ee=mp(0),Ce=hd(ee,B=>`calc(100% + ${Math.abs(B)}px)`),Te=hd(ee,B=>B<0?B:0);_.useEffect(()=>{!C&&!me.current&&we.jump(H)},[H,C,we]);const _e=_.useCallback(B=>{const te=O.current;if(!te)return n;const Ne=(B-te.left)/ae.current,it=y.current?y.current.offsetWidth:te.width,Ve=Math.max(0,Math.min(1,Ne/it)),De=a+Ve*(c-a);return Math.max(a,Math.min(c,De))},[a,c,n]),Oe=_.useCallback(B=>(B-a)/(c-a)*100,[a,c]),Je=_.useCallback((B,te)=>{const Se=O.current;if(!Se)return 0;const Ne=te<0?Se.left-B:B-Se.right,it=Math.max(0,Ne-S7);return te*k7*Math.sqrt(Math.min(it/C7,1))},[]),We=_.useCallback(B=>{if(!K&&(B.preventDefault(),B.target.setPointerCapture(B.pointerId),Ge.current={x:B.clientX,y:B.clientY},oe.current=!0,E(!0),y.current)){O.current=y.current.getBoundingClientRect();const te=y.current.offsetWidth;ae.current=O.current.width/te}},[K]),pt=_.useCallback(B=>{if(!C||!Ge.current)return;const te=B.clientX-Ge.current.x,Se=B.clientY-Ge.current.y,Ne=Math.sqrt(te*te+Se*Se);if(oe.current&&Ne>w7&&(oe.current=!1,A(!0)),!oe.current){const it=O.current;it&&(B.clientX<it.left?ee.jump(Je(B.clientX,-1)):B.clientX>it.right?ee.jump(Je(B.clientX,1)):ee.jump(0));const Ve=_e(B.clientX),De=Oe(Ve);me.current&&(me.current.stop(),me.current=null),we.jump(De),i(Hd(Ve,u))}},[C,_e,Oe,i,we,ee,Je]),Tt=_.useCallback(B=>{if(C){if(oe.current){const te=_e(B.clientX),Ne=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((te-a)/u)*u)):m7(te,a,c),it=Oe(Ne);me.current&&me.current.stop(),me.current=rx(we,it,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{me.current=null}}),i(Hd(Ne,u))}ee.get()!==0&&rx(ee,0,{type:"spring",visualDuration:.35,bounce:.15}),E(!1),A(!1),Ge.current=null}},[C,_e,Oe,i,a,c,we,ee]);_.useEffect(()=>(T&&!K&&!F?Re.current=setTimeout(()=>{W(!0)},800):!T&&!K&&(Re.current&&(clearTimeout(Re.current),Re.current=null),W(!1)),()=>{Re.current&&clearTimeout(Re.current)}),[T,K,F]),_.useEffect(()=>{K&&x.current&&(x.current.focus(),x.current.select())},[K]);const Ct=B=>{ye(B.target.value)},ut=()=>{const B=parseFloat(he);if(!isNaN(B)){const te=Math.max(a,Math.min(c,B));i(Hd(te,u))}de(!1),G(!1),W(!1)},Ot=B=>{F&&(B.stopPropagation(),B.preventDefault(),de(!0),ye(n.toFixed(Sp(u))))},_t=B=>{B.key==="Enter"?ut():B.key==="Escape"&&(de(!1),G(!1))},Gt=()=>{ut()},en=n.toFixed(Sp(u)),J=8,Be=10,dt=10;let at=30,gt=78;const He=(st=y.current)==null?void 0:st.offsetWidth;He&&He>0&&(b.current&&(at=(Be+b.current.offsetWidth+J)/He*100),w.current&&(gt=(He-dt-w.current.offsetWidth-J)/He*100));const bt=H<at||H>gt,yt=pe?bt?.1:M?.9:.5:0,Mt=(c-a)/u,$t=Mt<=10?Array.from({length:Mt-1},(B,te)=>{const Se=(te+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${Se}%`}},te)}):Array.from({length:9},(B,te)=>{const Se=(te+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${Se}%`}},te)});return l.jsx("div",{ref:y,className:"dialkit-slider-wrapper",children:l.jsxs(ui.div,{ref:g,className:`dialkit-slider ${pe?"dialkit-slider-active":""}`,onPointerDown:We,onPointerMove:pt,onPointerUp:Tt,onMouseEnter:()=>L(!0),onMouseLeave:()=>L(!1),style:{width:Ce,x:Te},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:$t}),l.jsx(ui.div,{className:"dialkit-slider-fill",style:{width:I}}),l.jsx(ui.div,{className:"dialkit-slider-handle",style:{left:ce,y:"-50%"},animate:{opacity:yt,scaleX:pe?1:.25,scaleY:pe&&bt?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[e,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:_7(h)})]}),K?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:he,onChange:Ct,onKeyDown:_t,onBlur:Gt,onClick:B=>B.stopPropagation(),onMouseDown:B=>B.stopPropagation()}):l.jsx("span",{ref:w,className:`dialkit-slider-value ${F?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>G(!0),onMouseLeave:()=>G(!1),onClick:Ot,onMouseDown:B=>F&&B.stopPropagation(),style:{cursor:F?"text":"default"},children:en})]})})}function d_({options:e,value:n,onChange:i}){const a=_.useRef(null),c=_.useRef(!1),[u,d]=_.useState(null),h=_.useCallback(()=>{const y=a.current;if(!y)return;const g=y.querySelector('[data-active="true"]');g&&d({left:g.offsetLeft,width:g.offsetWidth})},[]);_.useLayoutEffect(()=>{h()},[n,e.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),e.map(y=>{const g=n===y.value;return l.jsx("button",{onClick:()=>i(y.value),className:"dialkit-segmented-button","data-active":String(g),children:y.label},y.value)})]})}function j7({label:e,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[e,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:g7(a)})]}),l.jsx(d_,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function M7(e,n,i,a){const c=[],d=a/100;let h=0,p=0;const y=1;for(let g=0;g<=100;g++){const x=g*d;c.push([x,h]);const b=-e*(h-y),w=-n*p,C=(b+w)/i;p+=C*d,h+=p*d}return c}function M2({spring:e,isSimpleMode:n}){var E,M,A,U,L;let c,u,d;if(n){const T=(E=e.visualDuration)!=null?E:.3,G=(M=e.bounce)!=null?M:.2;d=1,c=2*Math.PI/T,c=Math.pow(c,2),u=2*(1-G)*Math.sqrt(c*d)}else c=(A=e.stiffness)!=null?A:400,u=(U=e.damping)!=null?U:17,d=(L=e.mass)!=null?L:1;const h=2,p=M7(c,u,d,h),y=p.map(([,T])=>T),g=Math.min(...y),b=Math.max(...y)-g,w=p.map(([T,G],F)=>{const W=T/h*256,de=140-((G-g)/(b||1)*140*.6+140*.2);return`${F===0?"M":"L"} ${W} ${de}`}).join(" "),C=[];for(let T=1;T<4;T++){const G=64*T,F=140/4*T;C.push(l.jsx("line",{x1:G,y1:0,x2:G,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${T}`),l.jsx("line",{x1:0,y1:F,x2:256,y2:F,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${T}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[C,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:w,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function E7({panelId:e,path:n,label:i,spring:a,onChange:c}){var g,x,b,w,C;const u=_.useSyncExternalStore(E=>un.subscribe(e,E),()=>un.getSpringMode(e,n),()=>un.getSpringMode(e,n)),d=u==="simple",h=_.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=E=>{un.updateSpringMode(e,n,E),c(E==="simple"?h.current.simple:h.current.advanced)},y=(E,M)=>{if(d){const{stiffness:A,damping:U,mass:L,...T}=a;c({...T,[E]:M})}else{const{visualDuration:A,bounce:U,...L}=a;c({...L,[E]:M})}};return l.jsx(tf,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(M2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(d_,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(ei,{label:"Duration",value:(g=a.visualDuration)!=null?g:.3,onChange:E=>y("visualDuration",E),min:.1,max:1,step:.05,unit:"s"}),l.jsx(ei,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:E=>y("bounce",E),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(ei,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:E=>y("stiffness",E),min:1,max:1e3,step:10}),l.jsx(ei,{label:"Damping",value:(w=a.damping)!=null?w:17,onChange:E=>y("damping",E),min:1,max:100,step:1}),l.jsx(ei,{label:"Mass",value:(C=a.mass)!=null?C:1,onChange:E=>y("mass",E),min:.1,max:10,step:.1})]})]})})}function T7({easing:e}){const n=e.ease,i=200,a=10,u=(i-a*2)/2,d=(b,w)=>({x:a+(b+.5)*u,y:a+(1.5-w)*u}),h=d(0,0),p=d(1,1),y=d(n[0],n[1]),g=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${y.x} ${y.y}, ${g.x} ${g.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function A7({panelId:e,path:n,label:i,value:a,onChange:c}){var C,E,M,A,U;const u=_.useSyncExternalStore(L=>un.subscribe(e,L),()=>un.getTransitionMode(e,n),()=>un.getTransitionMode(e,n)),d=u==="easing",h=u==="simple",p=_.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const y=a.type==="spring"?a:p.current.simple,g=a.type==="easing"?a:p.current.easing,x=L=>{un.updateTransitionMode(e,n,L),c(L==="easing"?p.current.easing:L==="simple"?p.current.simple:p.current.advanced)},b=(L,T)=>{if(h){const{stiffness:G,damping:F,mass:W,...K}=y;c({...K,[L]:T})}else{const{visualDuration:G,bounce:F,...W}=y;c({...W,[L]:T})}},w=(L,T)=>{const G=[...g.ease];G[L]=T,c({...g,ease:G})};return l.jsx(tf,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(T7,{easing:g}):l.jsx(M2,{spring:y,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(d_,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(ei,{label:"x1",value:g.ease[0],onChange:L=>w(0,L),min:0,max:1,step:.01}),l.jsx(ei,{label:"y1",value:g.ease[1],onChange:L=>w(1,L),min:-1,max:2,step:.01}),l.jsx(ei,{label:"x2",value:g.ease[2],onChange:L=>w(2,L),min:0,max:1,step:.01}),l.jsx(ei,{label:"y2",value:g.ease[3],onChange:L=>w(3,L),min:-1,max:2,step:.01}),l.jsx(ei,{label:"Duration",value:g.duration,onChange:L=>c({...g,duration:L}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(D7,{ease:g.ease,onChange:L=>c({...g,ease:L})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(ei,{label:"Duration",value:(C=y.visualDuration)!=null?C:.3,onChange:L=>b("visualDuration",L),min:.1,max:1,step:.05,unit:"s"}),l.jsx(ei,{label:"Bounce",value:(E=y.bounce)!=null?E:.2,onChange:L=>b("bounce",L),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(ei,{label:"Stiffness",value:(M=y.stiffness)!=null?M:400,onChange:L=>b("stiffness",L),min:1,max:1e3,step:10}),l.jsx(ei,{label:"Damping",value:(A=y.damping)!=null?A:17,onChange:L=>b("damping",L),min:1,max:100,step:1}),l.jsx(ei,{label:"Mass",value:(U=y.mass)!=null?U:1,onChange:L=>b("mass",L),min:.1,max:10,step:.1})]})]})})}function Fx(e){return e.map(n=>parseFloat(n.toFixed(2))).join(", ")}function N7(e){const n=e.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function D7({ease:e,onChange:n}){const[i,a]=_.useState(!1),[c,u]=_.useState(""),d=()=>{u(Fx(e)),a(!0)},h=()=>{const y=N7(c);y&&n(y),a(!1)},p=y=>{y.key==="Enter"&&y.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Fx(e),onChange:y=>u(y.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function R7({label:e,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:e}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function B7(e){return e.replace(/\b\w/g,n=>n.toUpperCase())}function L7(e){return e.map(n=>typeof n=="string"?{value:n,label:B7(n)}:n)}function O7({label:e,value:n,options:i,onChange:a}){var E;const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState(null),[g,x]=_.useState(null),b=L7(i),w=b.find(M=>M.value===n),C=_.useCallback(()=>{const M=d.current;if(!M)return;const A=M.getBoundingClientRect(),U=8+b.length*36,L=window.innerHeight-A.bottom-4,T=L<U&&A.top>L;x({top:T?A.top-4:A.bottom+4,left:A.left,width:A.width,above:T})},[b.length]);return _.useEffect(()=>{var A;const M=(A=d.current)==null?void 0:A.closest(".dialkit-root");y(M!=null?M:document.body)},[]),_.useEffect(()=>{c&&C()},[c,C]),_.useEffect(()=>{if(!c)return;const M=A=>{const U=A.target;d.current&&!d.current.contains(U)&&h.current&&!h.current.contains(U)&&u(!1)};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:e}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(E=w==null?void 0:w.label)!=null?E:n}),l.jsx(ui.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:u_})})]})]}),p&&Il.createPortal(l.jsx(cf,{children:c&&g&&l.jsx(ui.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:g.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:g.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:g.left,width:g.width,...g.above?{bottom:window.innerHeight-g.top,transformOrigin:"bottom"}:{top:g.top,transformOrigin:"top"}},children:b.map(M=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(M.value===n),onClick:()=>{a(M.value),u(!1)},children:M.label},M.value))})}),p)]})}var z7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function $7({label:e,value:n,onChange:i}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useRef(null);_.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),z7.test(u)?i(u):d(n)}function y(g){g.key==="Enter"?p():g.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:e}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:g=>d(g.target.value),onBlur:p,onKeyDown:y,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var g;return(g=h.current)==null?void 0:g.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?I7(n):n.slice(0,7),onChange:g=>i(g.target.value)})]})]})}function I7(e){return e.length!==4?e:`#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`}function P7({panelId:e,presets:n,activePresetId:i,onAdd:a}){const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState({top:0,left:0,width:0}),g=n.length>0,x=n.find(A=>A.id===i),b=_.useCallback(()=>{var U;if(!g)return;const A=(U=d.current)==null?void 0:U.getBoundingClientRect();A&&y({top:A.bottom+4,left:A.left,width:A.width}),u(!0)},[g]),w=_.useCallback(()=>u(!1),[]),C=_.useCallback(()=>{c?w():b()},[c,b,w]);_.useEffect(()=>{if(!c)return;const A=U=>{var T,G;const L=U.target;(T=d.current)!=null&&T.contains(L)||(G=h.current)!=null&&G.contains(L)||w()};return document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[c,w]);const E=A=>{A?un.loadPreset(e,A):un.clearActivePreset(e),w()},M=(A,U)=>{A.stopPropagation(),un.deletePreset(e,U)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:C,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!g),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(ui.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:g?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:u_})})]}),Il.createPortal(l.jsx(cf,{children:c&&l.jsxs(ui.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>E(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(A=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(A.id===i),onClick:()=>E(A.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:A.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:U=>M(U,A.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:v7.map((U,L)=>l.jsx("path",{d:U},L))})})]},A.id))]})}),document.body)]})}function H7({panel:e,defaultOpen:n=!0,inline:i=!1}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useContext(j2);Object.keys(e.shortcuts).length>0;const p=_.useSyncExternalStore(M=>un.subscribe(e.id,M),()=>un.getValues(e.id),()=>un.getValues(e.id)),y=un.getPresets(e.id),g=un.getActivePresetId(e.id),x=()=>{const M=y.length+2;un.savePreset(e.id,`Version ${M}`)},b=()=>{const M=JSON.stringify(p,null,2),A=`Update the useDialKit configuration for "${e.name}" with these values:

\`\`\`json
${M}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(A),c(!0),setTimeout(()=>c(!1),1500)},w=M=>{var U,L,T;const A=p[M.path];switch(M.type){case"slider":return l.jsx(ei,{label:M.label,value:A,onChange:G=>un.updateValue(e.id,M.path,G),min:M.min,max:M.max,step:M.step,shortcut:M.shortcut,shortcutActive:h.activePanelId===e.id&&h.activePath===M.path},M.path);case"toggle":return l.jsx(j7,{label:M.label,checked:A,onChange:G=>un.updateValue(e.id,M.path,G),shortcut:M.shortcut,shortcutActive:h.activePanelId===e.id&&h.activePath===M.path},M.path);case"spring":return l.jsx(E7,{panelId:e.id,path:M.path,label:M.label,spring:A,onChange:G=>un.updateValue(e.id,M.path,G)},M.path);case"transition":return l.jsx(A7,{panelId:e.id,path:M.path,label:M.label,value:A,onChange:G=>un.updateValue(e.id,M.path,G)},M.path);case"folder":return l.jsx(tf,{title:M.label,defaultOpen:(U=M.defaultOpen)!=null?U:!0,children:(L=M.children)==null?void 0:L.map(w)},M.path);case"text":return l.jsx(R7,{label:M.label,value:A,onChange:G=>un.updateValue(e.id,M.path,G),placeholder:M.placeholder},M.path);case"select":return l.jsx(O7,{label:M.label,value:A,options:(T=M.options)!=null?T:[],onChange:G=>un.updateValue(e.id,M.path,G)},M.path);case"color":return l.jsx($7,{label:M.label,value:A,onChange:G=>un.updateValue(e.id,M.path,G)},M.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>un.triggerAction(e.id,M.path),children:M.label},M.path);default:return null}},C=()=>e.controls.map(w),E=l.jsxs(l.Fragment,{children:[l.jsx(ui.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:b7.map((M,A)=>l.jsx("path",{d:M},A))})}),l.jsx(P7,{panelId:e.id,presets:y,activePresetId:g,onAdd:x}),l.jsx(ui.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(cf,{initial:!1,mode:"wait",children:a?l.jsx(ui.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:x7})},"check"):l.jsxs(ui.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:Pm.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:Pm.sparkle,fill:"currentColor"}),l.jsx("path",{d:Pm.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(tf,{title:e.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:E,children:C()})})}var U7=typeof process<"u"?!1:!(typeof import.meta<"u");function V7({position:e="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=U7}){if(!c)return null;const[u,d]=_.useState([]),[h,p]=_.useState(!1),y=i==="inline",g=_.useRef(null),[x,b]=_.useState(null),[w,C]=_.useState(e),E=_.useRef(null),M=_.useRef(!1),A=_.useRef(null),U=_.useRef(!1);_.useEffect(()=>(p(!0),d(un.getPanels()),un.subscribeGlobal(()=>{d(un.getPanels())})),[]),_.useEffect(()=>{if(!g.current||y)return;const K=new MutationObserver(()=>{var ye;const de=(ye=g.current)==null?void 0:ye.querySelector(".dialkit-panel-inner");if(!de)return;if(de.getAttribute("data-collapsed")==="true")E.current&&b(E.current);else{if(x){E.current=x;const Re=x.x+21,Ge=window.innerWidth/2;C(Re<Ge?"top-left":"top-right")}else C(e);b(null)}});return K.observe(g.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>K.disconnect()},[y,x,e]);const L=_.useCallback(K=>{var ye;const de=(ye=g.current)==null?void 0:ye.querySelector(".dialkit-panel-inner");if(!de||de.getAttribute("data-collapsed")!=="true")return;const he=g.current.getBoundingClientRect();A.current={pointerX:K.clientX,pointerY:K.clientY,elX:he.left,elY:he.top},U.current=!1,M.current=!0,K.target.setPointerCapture(K.pointerId)},[]),T=_.useCallback(K=>{if(!M.current||!A.current)return;const de=K.clientX-A.current.pointerX,he=K.clientY-A.current.pointerY;!U.current&&Math.abs(de)+Math.abs(he)<4||(U.current=!0,b({x:A.current.elX+de,y:A.current.elY+he}))},[]),G=_.useCallback(K=>{var de;if(M.current&&(M.current=!1,A.current=null,U.current)){K.stopPropagation();const he=(de=g.current)==null?void 0:de.querySelector(".dialkit-panel-inner");if(he){const ye=Re=>{Re.stopPropagation()};he.addEventListener("click",ye,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const F=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,W=l.jsx(y7,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:g,className:"dialkit-panel","data-position":y||x?void 0:w,"data-mode":i,style:F,onPointerDown:y?void 0:L,onPointerMove:y?void 0:T,onPointerUp:y?void 0:G,children:u.map(K=>l.jsx(H7,{panel:K,defaultOpen:y||n,inline:y},K.id))})})});return y?W:Il.createPortal(W,document.body)}const Y7=()=>(a7("Git Visualizer",{preview:[1,0,1]}),null),Xx="git-visualizer.chrome-ui-hidden",W7=({children:e})=>{const[n,i]=_.useState(!1);return _.useEffect(()=>{i(window.localStorage.getItem(Xx)==="true")},[]),_.useEffect(()=>{const a=c=>{(c.ctrlKey||c.metaKey)&&c.key.toLowerCase()==="d"&&!c.shiftKey&&!c.altKey&&(c.preventDefault(),i(u=>{const d=!u;return window.localStorage.setItem(Xx,String(d)),d}))};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[]),l.jsxs(l.Fragment,{children:[e,l.jsx(Y7,{}),!n&&l.jsxs(l.Fragment,{children:[l.jsx(V7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(s7,{})]})]})};document.addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="r"&&(e.preventDefault(),location.reload())});Jv.createRoot(document.getElementById("root")).render(l.jsx(W7,{children:l.jsx(P3,{})}));

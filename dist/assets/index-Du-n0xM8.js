(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Vx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vh={exports:{}},Sc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function Pv(){if(ry)return Sc;ry=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:e,type:a,key:d,ref:c!==void 0?c:null,props:u}}return Sc.Fragment=n,Sc.jsx=i,Sc.jsxs=i,Sc}var ly;function Iv(){return ly||(ly=1,Vh.exports=Pv()),Vh.exports}var l=Iv(),Yh={exports:{}},Cc={},Wh={exports:{}},Fh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function Hv(){return cy||(cy=1,(function(e){function n(z,te){var Y=z.length;z.push(te);e:for(;0<Y;){var fe=Y-1>>>1,Se=z[fe];if(0<c(Se,te))z[fe]=te,z[Y]=Se,Y=fe;else break e}}function i(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var te=z[0],Y=z.pop();if(Y!==te){z[0]=Y;e:for(var fe=0,Se=z.length,P=Se>>>1;fe<P;){var ae=2*(fe+1)-1,ee=z[ae],xe=ae+1,Te=z[xe];if(0>c(ee,Y))xe<Se&&0>c(Te,ee)?(z[fe]=Te,z[xe]=Y,fe=xe):(z[fe]=ee,z[ae]=Y,fe=ae);else if(xe<Se&&0>c(Te,Y))z[fe]=Te,z[xe]=Y,fe=xe;else break e}}return te}function c(z,te){var Y=z.sortIndex-te.sortIndex;return Y!==0?Y:z.id-te.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();e.unstable_now=function(){return d.now()-h}}var p=[],y=[],g=1,b=null,w=3,k=!1,M=!1,A=!1,T=!1,D=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function N(z){for(var te=i(y);te!==null;){if(te.callback===null)a(y);else if(te.startTime<=z)a(y),te.sortIndex=te.expirationTime,n(p,te);else break;te=i(y)}}function G(z){if(A=!1,N(z),!M)if(i(p)!==null)M=!0,X||(X=!0,Ae());else{var te=i(y);te!==null&&se(G,te.startTime-z)}}var X=!1,U=-1,K=5,le=-1;function de(){return T?!0:!(e.unstable_now()-le<K)}function me(){if(T=!1,X){var z=e.unstable_now();le=z;var te=!0;try{e:{M=!1,A&&(A=!1,I(U),U=-1),k=!0;var Y=w;try{t:{for(N(z),b=i(p);b!==null&&!(b.expirationTime>z&&de());){var fe=b.callback;if(typeof fe=="function"){b.callback=null,w=b.priorityLevel;var Se=fe(b.expirationTime<=z);if(z=e.unstable_now(),typeof Se=="function"){b.callback=Se,N(z),te=!0;break t}b===i(p)&&a(p),N(z)}else a(p);b=i(p)}if(b!==null)te=!0;else{var P=i(y);P!==null&&se(G,P.startTime-z),te=!1}}break e}finally{b=null,w=Y,k=!1}te=void 0}}finally{te?Ae():X=!1}}}var Ae;if(typeof O=="function")Ae=function(){O(me)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,oe=Xe.port2;Xe.port1.onmessage=me,Ae=function(){oe.postMessage(null)}}else Ae=function(){D(me,0)};function se(z,te){U=D(function(){z(e.unstable_now())},te)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_next=function(z){switch(w){case 1:case 2:case 3:var te=3;break;default:te=w}var Y=w;w=te;try{return z()}finally{w=Y}},e.unstable_requestPaint=function(){T=!0},e.unstable_runWithPriority=function(z,te){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=w;w=z;try{return te()}finally{w=Y}},e.unstable_scheduleCallback=function(z,te,Y){var fe=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?fe+Y:fe):Y=fe,z){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Y+Se,z={id:g++,callback:te,priorityLevel:z,startTime:Y,expirationTime:Se,sortIndex:-1},Y>fe?(z.sortIndex=Y,n(y,z),i(p)===null&&z===i(y)&&(A?(I(U),U=-1):A=!0,se(G,Y-fe))):(z.sortIndex=Se,n(p,z),M||k||(M=!0,X||(X=!0,Ae()))),z},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(z){var te=w;return function(){var Y=w;w=te;try{return z.apply(this,arguments)}finally{w=Y}}}})(Fh)),Fh}var uy;function Uv(){return uy||(uy=1,Wh.exports=Hv()),Wh.exports}var Xh={exports:{}},rn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dy;function Vv(){if(dy)return rn;dy=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),w=Symbol.iterator;function k(P){return P===null||typeof P!="object"?null:(P=w&&P[w]||P["@@iterator"],typeof P=="function"?P:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,T={};function D(P,ae,ee){this.props=P,this.context=ae,this.refs=T,this.updater=ee||M}D.prototype.isReactComponent={},D.prototype.setState=function(P,ae){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ae,"setState")},D.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function I(){}I.prototype=D.prototype;function O(P,ae,ee){this.props=P,this.context=ae,this.refs=T,this.updater=ee||M}var N=O.prototype=new I;N.constructor=O,A(N,D.prototype),N.isPureReactComponent=!0;var G=Array.isArray;function X(){}var U={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function le(P,ae,ee){var xe=ee.ref;return{$$typeof:e,type:P,key:ae,ref:xe!==void 0?xe:null,props:ee}}function de(P,ae){return le(P.type,ae,P.props)}function me(P){return typeof P=="object"&&P!==null&&P.$$typeof===e}function Ae(P){var ae={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ee){return ae[ee]})}var Xe=/\/+/g;function oe(P,ae){return typeof P=="object"&&P!==null&&P.key!=null?Ae(""+P.key):ae.toString(36)}function se(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(X,X):(P.status="pending",P.then(function(ae){P.status==="pending"&&(P.status="fulfilled",P.value=ae)},function(ae){P.status==="pending"&&(P.status="rejected",P.reason=ae)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function z(P,ae,ee,xe,Te){var he=typeof P;(he==="undefined"||he==="boolean")&&(P=null);var ze=!1;if(P===null)ze=!0;else switch(he){case"bigint":case"string":case"number":ze=!0;break;case"object":switch(P.$$typeof){case e:case n:ze=!0;break;case g:return ze=P._init,z(ze(P._payload),ae,ee,xe,Te)}}if(ze)return Te=Te(P),ze=xe===""?"."+oe(P,0):xe,G(Te)?(ee="",ze!=null&&(ee=ze.replace(Xe,"$&/")+"/"),z(Te,ae,ee,"",function(ut){return ut})):Te!=null&&(me(Te)&&(Te=de(Te,ee+(Te.key==null||P&&P.key===Te.key?"":(""+Te.key).replace(Xe,"$&/")+"/")+ze)),ae.push(Te)),1;ze=0;var Qe=xe===""?".":xe+":";if(G(P))for(var We=0;We<P.length;We++)xe=P[We],he=Qe+oe(xe,We),ze+=z(xe,ae,ee,he,Te);else if(We=k(P),typeof We=="function")for(P=We.call(P),We=0;!(xe=P.next()).done;)xe=xe.value,he=Qe+oe(xe,We++),ze+=z(xe,ae,ee,he,Te);else if(he==="object"){if(typeof P.then=="function")return z(se(P),ae,ee,xe,Te);throw ae=String(P),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return ze}function te(P,ae,ee){if(P==null)return P;var xe=[],Te=0;return z(P,xe,"","",function(he){return ae.call(ee,he,Te++)}),xe}function Y(P){if(P._status===-1){var ae=P._result;ae=ae(),ae.then(function(ee){(P._status===0||P._status===-1)&&(P._status=1,P._result=ee)},function(ee){(P._status===0||P._status===-1)&&(P._status=2,P._result=ee)}),P._status===-1&&(P._status=0,P._result=ae)}if(P._status===1)return P._result.default;throw P._result}var fe=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Se={map:te,forEach:function(P,ae,ee){te(P,function(){ae.apply(this,arguments)},ee)},count:function(P){var ae=0;return te(P,function(){ae++}),ae},toArray:function(P){return te(P,function(ae){return ae})||[]},only:function(P){if(!me(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return rn.Activity=b,rn.Children=Se,rn.Component=D,rn.Fragment=i,rn.Profiler=c,rn.PureComponent=O,rn.StrictMode=a,rn.Suspense=p,rn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,rn.__COMPILER_RUNTIME={__proto__:null,c:function(P){return U.H.useMemoCache(P)}},rn.cache=function(P){return function(){return P.apply(null,arguments)}},rn.cacheSignal=function(){return null},rn.cloneElement=function(P,ae,ee){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var xe=A({},P.props),Te=P.key;if(ae!=null)for(he in ae.key!==void 0&&(Te=""+ae.key),ae)!K.call(ae,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&ae.ref===void 0||(xe[he]=ae[he]);var he=arguments.length-2;if(he===1)xe.children=ee;else if(1<he){for(var ze=Array(he),Qe=0;Qe<he;Qe++)ze[Qe]=arguments[Qe+2];xe.children=ze}return le(P.type,Te,xe)},rn.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:u,_context:P},P},rn.createElement=function(P,ae,ee){var xe,Te={},he=null;if(ae!=null)for(xe in ae.key!==void 0&&(he=""+ae.key),ae)K.call(ae,xe)&&xe!=="key"&&xe!=="__self"&&xe!=="__source"&&(Te[xe]=ae[xe]);var ze=arguments.length-2;if(ze===1)Te.children=ee;else if(1<ze){for(var Qe=Array(ze),We=0;We<ze;We++)Qe[We]=arguments[We+2];Te.children=Qe}if(P&&P.defaultProps)for(xe in ze=P.defaultProps,ze)Te[xe]===void 0&&(Te[xe]=ze[xe]);return le(P,he,Te)},rn.createRef=function(){return{current:null}},rn.forwardRef=function(P){return{$$typeof:h,render:P}},rn.isValidElement=me,rn.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:Y}},rn.memo=function(P,ae){return{$$typeof:y,type:P,compare:ae===void 0?null:ae}},rn.startTransition=function(P){var ae=U.T,ee={};U.T=ee;try{var xe=P(),Te=U.S;Te!==null&&Te(ee,xe),typeof xe=="object"&&xe!==null&&typeof xe.then=="function"&&xe.then(X,fe)}catch(he){fe(he)}finally{ae!==null&&ee.types!==null&&(ae.types=ee.types),U.T=ae}},rn.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},rn.use=function(P){return U.H.use(P)},rn.useActionState=function(P,ae,ee){return U.H.useActionState(P,ae,ee)},rn.useCallback=function(P,ae){return U.H.useCallback(P,ae)},rn.useContext=function(P){return U.H.useContext(P)},rn.useDebugValue=function(){},rn.useDeferredValue=function(P,ae){return U.H.useDeferredValue(P,ae)},rn.useEffect=function(P,ae){return U.H.useEffect(P,ae)},rn.useEffectEvent=function(P){return U.H.useEffectEvent(P)},rn.useId=function(){return U.H.useId()},rn.useImperativeHandle=function(P,ae,ee){return U.H.useImperativeHandle(P,ae,ee)},rn.useInsertionEffect=function(P,ae){return U.H.useInsertionEffect(P,ae)},rn.useLayoutEffect=function(P,ae){return U.H.useLayoutEffect(P,ae)},rn.useMemo=function(P,ae){return U.H.useMemo(P,ae)},rn.useOptimistic=function(P,ae){return U.H.useOptimistic(P,ae)},rn.useReducer=function(P,ae,ee){return U.H.useReducer(P,ae,ee)},rn.useRef=function(P){return U.H.useRef(P)},rn.useState=function(P){return U.H.useState(P)},rn.useSyncExternalStore=function(P,ae,ee){return U.H.useSyncExternalStore(P,ae,ee)},rn.useTransition=function(){return U.H.useTransition()},rn.version="19.2.4",rn}var fy;function xp(){return fy||(fy=1,Xh.exports=Vv()),Xh.exports}var Gh={exports:{}},Xo={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hy;function Yv(){if(hy)return Xo;hy=1;var e=xp();function n(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)y+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,y,g){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:p,containerInfo:y,implementation:g}}var d=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Xo.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Xo.createPortal=function(p,y){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(n(299));return u(p,y,null,g)},Xo.flushSync=function(p){var y=d.T,g=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=y,a.p=g,a.d.f()}},Xo.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(p,y))},Xo.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Xo.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var g=y.as,b=h(g,y.crossOrigin),w=typeof y.integrity=="string"?y.integrity:void 0,k=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;g==="style"?a.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:k}):g==="script"&&a.d.X(p,{crossOrigin:b,integrity:w,fetchPriority:k,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Xo.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var g=h(y.as,y.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(p)},Xo.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var g=y.as,b=h(g,y.crossOrigin);a.d.L(p,g,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Xo.preloadModule=function(p,y){if(typeof p=="string")if(y){var g=h(y.as,y.crossOrigin);a.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(p)},Xo.requestFormReset=function(p){a.d.r(p)},Xo.unstable_batchedUpdates=function(p,y){return p(y)},Xo.useFormState=function(p,y,g){return d.H.useFormState(p,y,g)},Xo.useFormStatus=function(){return d.H.useHostTransitionStatus()},Xo.version="19.2.4",Xo}var my;function Yx(){if(my)return Gh.exports;my=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Gh.exports=Yv(),Gh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function Wv(){if(py)return Cc;py=1;var e=Uv(),n=xp(),i=Yx();function a(t){var s="https://react.dev/errors/"+t;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+t+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var s=t,o=t;if(t.alternate)for(;s.return;)s=s.return;else{t=s;do s=t,(s.flags&4098)!==0&&(o=s.return),t=s.return;while(t)}return s.tag===3?o:null}function d(t){if(t.tag===13){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function h(t){if(t.tag===31){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(a(188))}function y(t){var s=t.alternate;if(!s){if(s=u(t),s===null)throw Error(a(188));return s!==t?null:t}for(var o=t,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),t;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var S=!1,L=f.child;L;){if(L===o){S=!0,o=f,r=m;break}if(L===r){S=!0,r=f,o=m;break}L=L.sibling}if(!S){for(L=m.child;L;){if(L===o){S=!0,o=m,r=f;break}if(L===r){S=!0,r=m,o=f;break}L=L.sibling}if(!S)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?t:s}function g(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t;for(t=t.child;t!==null;){if(s=g(t),s!==null)return s;t=t.sibling}return null}var b=Object.assign,w=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),O=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),le=Symbol.for("react.activity"),de=Symbol.for("react.memo_cache_sentinel"),me=Symbol.iterator;function Ae(t){return t===null||typeof t!="object"?null:(t=me&&t[me]||t["@@iterator"],typeof t=="function"?t:null)}var Xe=Symbol.for("react.client.reference");function oe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Xe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case D:return"Profiler";case T:return"StrictMode";case G:return"Suspense";case X:return"SuspenseList";case le:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case O:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case N:var s=t.render;return t=t.displayName,t||(t=s.displayName||s.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case U:return s=t.displayName||null,s!==null?s:oe(t.type)||"Memo";case K:s=t._payload,t=t._init;try{return oe(t(s))}catch{}}return null}var se=Array.isArray,z=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},fe=[],Se=-1;function P(t){return{current:t}}function ae(t){0>Se||(t.current=fe[Se],fe[Se]=null,Se--)}function ee(t,s){Se++,fe[Se]=t.current,t.current=s}var xe=P(null),Te=P(null),he=P(null),ze=P(null);function Qe(t,s){switch(ee(he,s),ee(Te,t),ee(xe,null),s.nodeType){case 9:case 11:t=(t=s.documentElement)&&(t=t.namespaceURI)?A0(t):0;break;default:if(t=s.tagName,s=s.namespaceURI)s=A0(s),t=N0(s,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ae(xe),ee(xe,t)}function We(){ae(xe),ae(Te),ae(he)}function ut(t){t.memoizedState!==null&&ee(ze,t);var s=xe.current,o=N0(s,t.type);s!==o&&(ee(Te,t),ee(xe,o))}function kt(t){Te.current===t&&(ae(xe),ae(Te)),ze.current===t&&(ae(ze),xc._currentValue=Y)}var bt,st;function Dt(t){if(bt===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);bt=s&&s[1]||"",st=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bt+t+st}var lt=!1;function qt(t,s){if(!t||lt)return"";lt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var Ue=function(){throw Error()};if(Object.defineProperty(Ue.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ue,[])}catch(je){var ve=je}Reflect.construct(t,[],Ue)}else{try{Ue.call()}catch(je){ve=je}t.call(Ue.prototype)}}else{try{throw Error()}catch(je){ve=je}(Ue=t())&&typeof Ue.catch=="function"&&Ue.catch(function(){})}}catch(je){if(je&&ve&&typeof je.stack=="string")return[je.stack,ve.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),S=m[0],L=m[1];if(S&&L){var q=S.split(`
`),ge=L.split(`
`);for(f=r=0;r<q.length&&!q[r].includes("DetermineComponentFrameRoot");)r++;for(;f<ge.length&&!ge[f].includes("DetermineComponentFrameRoot");)f++;if(r===q.length||f===ge.length)for(r=q.length-1,f=ge.length-1;1<=r&&0<=f&&q[r]!==ge[f];)f--;for(;1<=r&&0<=f;r--,f--)if(q[r]!==ge[f]){if(r!==1||f!==1)do if(r--,f--,0>f||q[r]!==ge[f]){var Oe=`
`+q[r].replace(" at new "," at ");return t.displayName&&Oe.includes("<anonymous>")&&(Oe=Oe.replace("<anonymous>",t.displayName)),Oe}while(1<=r&&0<=f);break}}}finally{lt=!1,Error.prepareStackTrace=o}return(o=t?t.displayName||t.name:"")?Dt(o):""}function Kt(t,s){switch(t.tag){case 26:case 27:case 5:return Dt(t.type);case 16:return Dt("Lazy");case 13:return t.child!==s&&s!==null?Dt("Suspense Fallback"):Dt("Suspense");case 19:return Dt("SuspenseList");case 0:case 15:return qt(t.type,!1);case 11:return qt(t.type.render,!1);case 1:return qt(t.type,!0);case 31:return Dt("Activity");default:return""}}function Q(t){try{var s="",o=null;do s+=Kt(t,o),o=t,t=t.return;while(t);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ne=Object.prototype.hasOwnProperty,at=e.unstable_scheduleCallback,Ce=e.unstable_cancelCallback,dt=e.unstable_shouldYield,He=e.unstable_requestPaint,ft=e.unstable_now,mt=e.unstable_getCurrentPriorityLevel,jt=e.unstable_ImmediatePriority,Rt=e.unstable_UserBlockingPriority,ot=e.unstable_NormalPriority,V=e.unstable_LowPriority,J=e.unstable_IdlePriority,be=e.log,Ee=e.unstable_setDisableYieldValue,nt=null,Ge=null;function Be(t){if(typeof be=="function"&&Ee(t),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode(nt,t)}catch{}}var pe=Math.clz32?Math.clz32:Je,Ze=Math.log,Ye=Math.LN2;function Je(t){return t>>>=0,t===0?32:31-(Ze(t)/Ye|0)|0}var De=256,et=262144,_t=4194304;function gt(t){var s=t&42;if(s!==0)return s;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ke(t,s,o){var r=t.pendingLanes;if(r===0)return 0;var f=0,m=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var L=r&134217727;return L!==0?(r=L&~m,r!==0?f=gt(r):(S&=L,S!==0?f=gt(S):o||(o=L&~t,o!==0&&(f=gt(o))))):(L=r&~m,L!==0?f=gt(L):S!==0?f=gt(S):o||(o=r&~t,o!==0&&(f=gt(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function Lt(t,s){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&s)===0}function wt(t,s){switch(t){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ct(){var t=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),t}function cn(t){for(var s=[],o=0;31>o;o++)s.push(t);return s}function rt(t,s){t.pendingLanes|=s,s!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function It(t,s,o,r,f,m){var S=t.pendingLanes;t.pendingLanes=o,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=o,t.entangledLanes&=o,t.errorRecoveryDisabledLanes&=o,t.shellSuspendCounter=0;var L=t.entanglements,q=t.expirationTimes,ge=t.hiddenUpdates;for(o=S&~o;0<o;){var Oe=31-pe(o),Ue=1<<Oe;L[Oe]=0,q[Oe]=-1;var ve=ge[Oe];if(ve!==null)for(ge[Oe]=null,Oe=0;Oe<ve.length;Oe++){var je=ve[Oe];je!==null&&(je.lane&=-536870913)}o&=~Ue}r!==0&&pn(t,r,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(S&~s))}function pn(t,s,o){t.pendingLanes|=s,t.suspendedLanes&=~s;var r=31-pe(s);t.entangledLanes|=s,t.entanglements[r]=t.entanglements[r]|1073741824|o&261930}function Et(t,s){var o=t.entangledLanes|=s;for(t=t.entanglements;o;){var r=31-pe(o),f=1<<r;f&s|t[r]&s&&(t[r]|=s),o&=~f}}function yt(t,s){var o=s&-s;return o=(o&42)!==0?1:un(o),(o&(t.suspendedLanes|s))!==0?0:o}function un(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function tn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Qt(){var t=te.p;return t!==0?t:(t=window.event,t===void 0?32:ey(t.type))}function $t(t,s){var o=te.p;try{return te.p=t,s()}finally{te.p=o}}var Jt=Math.random().toString(36).slice(2),At="__reactFiber$"+Jt,bn="__reactProps$"+Jt,tt="__reactContainer$"+Jt,ds="__reactEvents$"+Jt,fs="__reactListeners$"+Jt,No="__reactHandles$"+Jt,eo="__reactResources$"+Jt,Co="__reactMarker$"+Jt;function po(t){delete t[At],delete t[bn],delete t[ds],delete t[fs],delete t[No]}function Do(t){var s=t[At];if(s)return s;for(var o=t.parentNode;o;){if(s=o[tt]||o[At]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(t=$0(t);t!==null;){if(o=t[At])return o;t=$0(t)}return s}t=o,o=t.parentNode}return null}function is(t){if(t=t[At]||t[tt]){var s=t.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return t}return null}function Xt(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t.stateNode;throw Error(a(33))}function Rn(t){var s=t[eo];return s||(s=t[eo]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function en(t){t[Co]=!0}var as=new Set,xs={};function bs(t,s){sn(t,s),sn(t+"Capture",s)}function sn(t,s){for(xs[t]=s,t=0;t<s.length;t++)as.add(s[t])}var As=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rs={},hs={};function _o(t){return Ne.call(hs,t)?!0:Ne.call(Rs,t)?!1:As.test(t)?hs[t]=!0:(Rs[t]=!0,!1)}function to(t,s,o){if(_o(s))if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":t.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(s);return}}t.setAttribute(s,""+o)}}function Yn(t,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttribute(s,""+o)}}function Ws(t,s,o,r){if(r===null)t.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(o);return}t.setAttributeNS(s,o,""+r)}}function on(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fs(t){var s=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ci(t,s,o){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,s);if(!t.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(t,s,{configurable:!0,get:function(){return f.call(this)},set:function(S){o=""+S,m.call(this,S)}}),Object.defineProperty(t,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){t._valueTracker=null,delete t[s]}}}}function Ms(t){if(!t._valueTracker){var s=Fs(t)?"checked":"value";t._valueTracker=Ci(t,s,""+t[s])}}function ko(t){if(!t)return!1;var s=t._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return t&&(r=Fs(t)?t.checked?"true":"false":t.value),t=r,t!==o?(s.setValue(t),!0):!1}function Bs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Wn=/[\n"\\]/g;function ms(t){return t.replace(Wn,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Xs(t,s,o,r,f,m,S,L){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),s!=null?S==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+on(s)):t.value!==""+on(s)&&(t.value=""+on(s)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),s!=null?Ls(t,S,on(s)):o!=null?Ls(t,S,on(o)):r!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),L!=null&&typeof L!="function"&&typeof L!="symbol"&&typeof L!="boolean"?t.name=""+on(L):t.removeAttribute("name")}function Bn(t,s,o,r,f,m,S,L){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){Ms(t);return}o=o!=null?""+on(o):"",s=s!=null?""+on(s):o,L||s===t.value||(t.value=s),t.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=L?t.checked:!!r,t.defaultChecked=!!r,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Ms(t)}function Ls(t,s,o){s==="number"&&Bs(t.ownerDocument)===t||t.defaultValue===""+o||(t.defaultValue=""+o)}function Fn(t,s,o,r){if(t=t.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=s.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&r&&(t[o].defaultSelected=!0)}else{for(o=""+on(o),s=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,r&&(t[f].defaultSelected=!0);return}s!==null||t[f].disabled||(s=t[f])}s!==null&&(s.selected=!0)}}function Xn(t,s,o){if(s!=null&&(s=""+on(s),s!==t.value&&(t.value=s),o==null)){t.defaultValue!==s&&(t.defaultValue=s);return}t.defaultValue=o!=null?""+on(o):""}function ci(t,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(se(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=on(s),t.defaultValue=o,r=t.textContent,r===o&&r!==""&&r!==null&&(t.value=r),Ms(t)}function ps(t,s){if(s){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=s;return}}t.textContent=s}var no=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zt(t,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="":r?t.setProperty(s,o):typeof o!="number"||o===0||no.has(s)?s==="float"?t.cssFloat=o:t[s]=(""+o).trim():t[s]=o+"px"}function ki(t,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(t=t.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&Zt(t,f,r)}else for(var m in s)s.hasOwnProperty(m)&&Zt(t,m,s[m])}function Gn(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),go=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ns(t){return go.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function rs(){}var qo=null;function vs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var En=null,yo=null;function ui(t){var s=is(t);if(s&&(t=s.stateNode)){var o=t[bn]||null;e:switch(t=s.stateNode,s.type){case"input":if(Xs(t,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+ms(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==t&&r.form===t.form){var f=r[bn]||null;if(!f)throw Error(a(90));Xs(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===t.form&&ko(r)}break e;case"textarea":Xn(t,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Fn(t,!!o.multiple,s,!1)}}}var Os=!1;function jo(t,s,o){if(Os)return t(s,o);Os=!0;try{var r=t(s);return r}finally{if(Os=!1,(En!==null||yo!==null)&&(Ru(),En&&(s=En,t=yo,yo=En=null,ui(s),t)))for(s=0;s<t.length;s++)ui(t[s])}}function xn(t,s){var o=t.stateNode;if(o===null)return null;var r=o[bn]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Gs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zs=!1;if(Gs)try{var Ko={};Object.defineProperty(Ko,"passive",{get:function(){zs=!0}}),window.addEventListener("test",Ko,Ko),window.removeEventListener("test",Ko,Ko)}catch{zs=!1}var Ds=null,Qo=null,Ro=null;function $i(){if(Ro)return Ro;var t,s=Qo,o=s.length,r,f="value"in Ds?Ds.value:Ds.textContent,m=f.length;for(t=0;t<o&&s[t]===f[t];t++);var S=o-t;for(r=1;r<=S&&s[o-r]===f[m-r];r++);return Ro=f.slice(t,1<r?1-r:void 0)}function so(t){var s=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&s===13&&(t=13)):t=s,t===10&&(t=13),32<=t||t===13?t:0}function Mo(){return!0}function Zo(){return!1}function Un(t){function s(o,r,f,m,S){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(o=t[L],this[L]=o?o(m):m[L]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Mo:Zo,this.isPropagationStopped=Zo,this}return b(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Mo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Mo)},persist:function(){},isPersistent:Mo}),s}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eo=Un(Es),oo=b({},Es,{view:0,detail:0}),io=Un(oo),kn,$s,Nn,Ps=b({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Nn&&(Nn&&t.type==="mousemove"?(kn=t.screenX-Nn.screenX,$s=t.screenY-Nn.screenY):$s=kn=0,Nn=t),kn)},movementY:function(t){return"movementY"in t?t.movementY:$s}}),Yo=Un(Ps),Wo=b({},Ps,{dataTransfer:0}),Pi=Un(Wo),Jo=b({},oo,{relatedTarget:0}),ws=Un(Jo),qs=b({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),qn=Un(qs),Ii=b({},Es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ji=Un(Ii),ei=b({},Es,{data:0}),Bt=Un(ei),xo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ks={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},di={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ti(t){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(t):(t=di[t])?!!s[t]:!1}function Bo(){return ti}var Mi=b({},oo,{key:function(t){if(t.key){var s=xo[t.key]||t.key;if(s!=="Unidentified")return s}return t.type==="keypress"?(t=so(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ks[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bo,charCode:function(t){return t.type==="keypress"?so(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?so(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zi=Un(Mi),Ji=b({},Ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Un(Ji),F=b({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bo}),ce=Un(F),Me=b({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ve=Un(Me),it=b({},Ps,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yt=Un(it),Ht=b({},Es,{newState:0,oldState:0}),Ft=Un(Ht),fn=[9,13,27,32],vn=Gs&&"CompositionEvent"in window,an=null;Gs&&"documentMode"in document&&(an=document.documentMode);var Vn=Gs&&"TextEvent"in window&&!an,_n=Gs&&(!vn||an&&8<an&&11>=an),Vt=" ",Tn=!1;function nn(t,s){switch(t){case"keyup":return fn.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _s(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function Lo(t,s){switch(t){case"compositionend":return _s(s);case"keypress":return s.which!==32?null:(Tn=!0,Vt);case"textInput":return t=s.data,t===Vt&&Tn?null:t;default:return null}}function ao(t,s){if(gs)return t==="compositionend"||!vn&&nn(t,s)?(t=$i(),Ro=Qo=Ds=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return _n&&s.locale!=="ko"?null:s.data;default:return null}}var bo={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vo(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s==="input"?!!bo[t.type]:s==="textarea"}function fi(t,s,o,r){En?yo?yo.push(r):yo=[r]:En=r,s=Iu(s,"onChange"),0<s.length&&(o=new Eo("onChange","change",null,o,r),t.push({event:o,listeners:s}))}var Oo=null,zo=null;function ca(t){C0(t,0)}function x(t){var s=Xt(t);if(ko(s))return t}function v(t,s){if(t==="change")return s}var C=!1;if(Gs){var j;if(Gs){var R="oninput"in document;if(!R){var W=document.createElement("div");W.setAttribute("oninput","return;"),R=typeof W.oninput=="function"}j=R}else j=!1;C=j&&(!document.documentMode||9<document.documentMode)}function B(){Oo&&(Oo.detachEvent("onpropertychange",H),zo=Oo=null)}function H(t){if(t.propertyName==="value"&&x(zo)){var s=[];fi(s,zo,t,vs(t)),jo(ca,s)}}function Z(t,s,o){t==="focusin"?(B(),Oo=s,zo=o,Oo.attachEvent("onpropertychange",H)):t==="focusout"&&B()}function ie(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return x(zo)}function ue(t,s){if(t==="click")return x(s)}function Re(t,s){if(t==="input"||t==="change")return x(s)}function we(t,s){return t===s&&(t!==0||1/t===1/s)||t!==t&&s!==s}var ke=typeof Object.is=="function"?Object.is:we;function Le(t,s){if(ke(t,s))return!0;if(typeof t!="object"||t===null||typeof s!="object"||s===null)return!1;var o=Object.keys(t),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!Ne.call(s,f)||!ke(t[f],s[f]))return!1}return!0}function vt(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zt(t,s){var o=vt(t);t=0;for(var r;o;){if(o.nodeType===3){if(r=t+o.textContent.length,t<=s&&r>=s)return{node:o,offset:s-t};t=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=vt(o)}}function ht(t,s){return t&&s?t===s?!0:t&&t.nodeType===3?!1:s&&s.nodeType===3?ht(t,s.parentNode):"contains"in t?t.contains(s):t.compareDocumentPosition?!!(t.compareDocumentPosition(s)&16):!1:!1}function xt(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var s=Bs(t.document);s instanceof t.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)t=s.contentWindow;else break;s=Bs(t.document)}return s}function St(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s&&(s==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||s==="textarea"||t.contentEditable==="true")}var pt=Gs&&"documentMode"in document&&11>=document.documentMode,Pt=null,Dn=null,gn=null,Ss=!1;function ro(t,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ss||Pt==null||Pt!==Bs(r)||(r=Pt,"selectionStart"in r&&St(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gn&&Le(gn,r)||(gn=r,r=Iu(Dn,"onSelect"),0<r.length&&(s=new Eo("onSelect","select",null,s,o),t.push({event:s,listeners:r}),s.target=Pt)))}function Ln(t,s){var o={};return o[t.toLowerCase()]=s.toLowerCase(),o["Webkit"+t]="webkit"+s,o["Moz"+t]="moz"+s,o}var Is={animationend:Ln("Animation","AnimationEnd"),animationiteration:Ln("Animation","AnimationIteration"),animationstart:Ln("Animation","AnimationStart"),transitionrun:Ln("Transition","TransitionRun"),transitionstart:Ln("Transition","TransitionStart"),transitioncancel:Ln("Transition","TransitionCancel"),transitionend:Ln("Transition","TransitionEnd")},To={},hi={};Gs&&(hi=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function Pn(t){if(To[t])return To[t];if(!Is[t])return t;var s=Is[t],o;for(o in s)if(s.hasOwnProperty(o)&&o in hi)return To[t]=s[o];return t}var mi=Pn("animationend"),Ei=Pn("animationiteration"),_r=Pn("animationstart"),Wr=Pn("transitionrun"),Fr=Pn("transitionstart"),Xr=Pn("transitioncancel"),Ul=Pn("transitionend"),Vl=new Map,Gr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gr.push("scrollEnd");function pi(t,s){Vl.set(t,s),bs(s,[t])}var gr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ni=[],ba=0,qr=0;function yr(){for(var t=ba,s=qr=ba=0;s<t;){var o=ni[s];ni[s++]=null;var r=ni[s];ni[s++]=null;var f=ni[s];ni[s++]=null;var m=ni[s];if(ni[s++]=null,r!==null&&f!==null){var S=r.pending;S===null?f.next=f:(f.next=S.next,S.next=f),r.pending=f}m!==0&&Yl(o,f,m)}}function xr(t,s,o,r){ni[ba++]=t,ni[ba++]=s,ni[ba++]=o,ni[ba++]=r,qr|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Kr(t,s,o,r){return xr(t,s,o,r),br(t)}function ua(t,s){return xr(t,null,null,s),br(t)}function Yl(t,s,o){t.lanes|=o;var r=t.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=t.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&s!==null&&(f=31-pe(o),t=m.hiddenUpdates,r=t[f],r===null?t[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function br(t){if(50<fc)throw fc=0,hh=null,Error(a(185));for(var s=t.return;s!==null;)t=s,s=t.return;return t.tag===3?t.stateNode:null}var dn={};function ls(t,s,o,r){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,s,o,r){return new ls(t,s,o,r)}function Ti(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _i(t,s){var o=t.alternate;return o===null?(o=Jn(t.tag,s,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=s,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&65011712,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,s=t.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o.refCleanup=t.refCleanup,o}function Fo(t,s){t.flags&=65011714;var o=t.alternate;return o===null?(t.childLanes=0,t.lanes=s,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=o.childLanes,t.lanes=o.lanes,t.child=o.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=o.memoizedProps,t.memoizedState=o.memoizedState,t.updateQueue=o.updateQueue,t.type=o.type,s=o.dependencies,t.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),t}function Cs(t,s,o,r,f,m){var S=0;if(r=t,typeof t=="function")Ti(t)&&(S=1);else if(typeof t=="string")S=Mv(t,o,xe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case le:return t=Jn(31,o,s,f),t.elementType=le,t.lanes=m,t;case A:return vr(o.children,f,m,s);case T:S=8,f|=24;break;case D:return t=Jn(12,o,s,f|2),t.elementType=D,t.lanes=m,t;case G:return t=Jn(13,o,s,f),t.elementType=G,t.lanes=m,t;case X:return t=Jn(19,o,s,f),t.elementType=X,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:S=10;break e;case I:S=9;break e;case N:S=11;break e;case U:S=14;break e;case K:S=16,r=null;break e}S=29,o=Error(a(130,t===null?"null":typeof t,"")),r=null}return s=Jn(S,o,s,f),s.elementType=t,s.type=r,s.lanes=m,s}function vr(t,s,o,r){return t=Jn(7,t,r,s),t.lanes=o,t}function af(t,s,o){return t=Jn(6,t,null,s),t.lanes=o,t}function r_(t){var s=Jn(18,null,null,0);return s.stateNode=t,s}function rf(t,s,o){return s=Jn(4,t.children!==null?t.children:[],t.key,s),s.lanes=o,s.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},s}var l_=new WeakMap;function Hi(t,s){if(typeof t=="object"&&t!==null){var o=l_.get(t);return o!==void 0?o:(s={value:t,source:s,stack:Q(s)},l_.set(t,s),s)}return{value:t,source:s,stack:Q(s)}}var Qr=[],Zr=0,ou=null,Wl=0,Ui=[],Vi=0,Ia=null,da=1,fa="";function va(t,s){Qr[Zr++]=Wl,Qr[Zr++]=ou,ou=t,Wl=s}function c_(t,s,o){Ui[Vi++]=da,Ui[Vi++]=fa,Ui[Vi++]=Ia,Ia=t;var r=da;t=fa;var f=32-pe(r)-1;r&=~(1<<f),o+=1;var m=32-pe(s)+f;if(30<m){var S=f-f%5;m=(r&(1<<S)-1).toString(32),r>>=S,f-=S,da=1<<32-pe(s)+f|o<<f|r,fa=m+t}else da=1<<m|o<<f|r,fa=t}function lf(t){t.return!==null&&(va(t,1),c_(t,1,0))}function cf(t){for(;t===ou;)ou=Qr[--Zr],Qr[Zr]=null,Wl=Qr[--Zr],Qr[Zr]=null;for(;t===Ia;)Ia=Ui[--Vi],Ui[Vi]=null,fa=Ui[--Vi],Ui[Vi]=null,da=Ui[--Vi],Ui[Vi]=null}function u_(t,s){Ui[Vi++]=da,Ui[Vi++]=fa,Ui[Vi++]=Ia,da=s.id,fa=s.overflow,Ia=t}var $o=null,ks=null,An=!1,Ha=null,Yi=!1,uf=Error(a(519));function Ua(t){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fl(Hi(s,t)),uf}function d_(t){var s=t.stateNode,o=t.type,r=t.memoizedProps;switch(s[At]=t,s[bn]=r,o){case"dialog":Cn("cancel",s),Cn("close",s);break;case"iframe":case"object":case"embed":Cn("load",s);break;case"video":case"audio":for(o=0;o<mc.length;o++)Cn(mc[o],s);break;case"source":Cn("error",s);break;case"img":case"image":case"link":Cn("error",s),Cn("load",s);break;case"details":Cn("toggle",s);break;case"input":Cn("invalid",s),Bn(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Cn("invalid",s);break;case"textarea":Cn("invalid",s),ci(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||E0(s.textContent,o)?(r.popover!=null&&(Cn("beforetoggle",s),Cn("toggle",s)),r.onScroll!=null&&Cn("scroll",s),r.onScrollEnd!=null&&Cn("scrollend",s),r.onClick!=null&&(s.onclick=rs),s=!0):s=!1,s||Ua(t,!0)}function f_(t){for($o=t.return;$o;)switch($o.tag){case 5:case 31:case 13:Yi=!1;return;case 27:case 3:Yi=!0;return;default:$o=$o.return}}function Jr(t){if(t!==$o)return!1;if(!An)return f_(t),An=!0,!1;var s=t.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=t.type,o=!(o!=="form"&&o!=="button")||Eh(t.type,t.memoizedProps)),o=!o),o&&ks&&Ua(t),f_(t),s===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));ks=z0(t)}else if(s===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));ks=z0(t)}else s===27?(s=ks,nr(t.type)?(t=Rh,Rh=null,ks=t):ks=s):ks=$o?Fi(t.stateNode.nextSibling):null;return!0}function wr(){ks=$o=null,An=!1}function df(){var t=Ha;return t!==null&&(bi===null?bi=t:bi.push.apply(bi,t),Ha=null),t}function Fl(t){Ha===null?Ha=[t]:Ha.push(t)}var ff=P(null),Sr=null,wa=null;function Va(t,s,o){ee(ff,s._currentValue),s._currentValue=o}function Sa(t){t._currentValue=ff.current,ae(ff)}function hf(t,s,o){for(;t!==null;){var r=t.alternate;if((t.childLanes&s)!==s?(t.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),t===o)break;t=t.return}}function mf(t,s,o,r){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var S=f.child;m=m.firstContext;e:for(;m!==null;){var L=m;m=f;for(var q=0;q<s.length;q++)if(L.context===s[q]){m.lanes|=o,L=m.alternate,L!==null&&(L.lanes|=o),hf(m.return,o,t),r||(S=null);break e}m=L.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(a(341));S.lanes|=o,m=S.alternate,m!==null&&(m.lanes|=o),hf(S,o,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function el(t,s,o,r){t=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var L=f.type;ke(f.pendingProps.value,S.value)||(t!==null?t.push(L):t=[L])}}else if(f===ze.current){if(S=f.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(xc):t=[xc])}f=f.return}t!==null&&mf(s,t,o,r),s.flags|=262144}function iu(t){for(t=t.firstContext;t!==null;){if(!ke(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Cr(t){Sr=t,wa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Po(t){return h_(Sr,t)}function au(t,s){return Sr===null&&Cr(t),h_(t,s)}function h_(t,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},wa===null){if(t===null)throw Error(a(308));wa=s,t.dependencies={lanes:0,firstContext:s},t.flags|=524288}else wa=wa.next=s;return o}var S2=typeof AbortController<"u"?AbortController:function(){var t=[],s=this.signal={aborted:!1,addEventListener:function(o,r){t.push(r)}};this.abort=function(){s.aborted=!0,t.forEach(function(o){return o()})}},C2=e.unstable_scheduleCallback,k2=e.unstable_NormalPriority,lo={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pf(){return{controller:new S2,data:new Map,refCount:0}}function Xl(t){t.refCount--,t.refCount===0&&C2(k2,function(){t.controller.abort()})}var Gl=null,_f=0,tl=0,nl=null;function j2(t,s){if(Gl===null){var o=Gl=[];_f=0,tl=xh(),nl={status:"pending",value:void 0,then:function(r){o.push(r)}}}return _f++,s.then(m_,m_),s}function m_(){if(--_f===0&&Gl!==null){nl!==null&&(nl.status="fulfilled");var t=Gl;Gl=null,tl=0,nl=null;for(var s=0;s<t.length;s++)(0,t[s])()}}function M2(t,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return t.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var p_=z.S;z.S=function(t,s){Zg=ft(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&j2(t,s),p_!==null&&p_(t,s)};var kr=P(null);function gf(){var t=kr.current;return t!==null?t:cs.pooledCache}function ru(t,s){s===null?ee(kr,kr.current):ee(kr,s.pool)}function __(){var t=gf();return t===null?null:{parent:lo._currentValue,pool:t}}var sl=Error(a(460)),yf=Error(a(474)),lu=Error(a(542)),cu={then:function(){}};function g_(t){return t=t.status,t==="fulfilled"||t==="rejected"}function y_(t,s,o){switch(o=t[o],o===void 0?t.push(s):o!==s&&(s.then(rs,rs),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,b_(t),t;default:if(typeof s.status=="string")s.then(rs,rs);else{if(t=cs,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=s,t.status="pending",t.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,b_(t),t}throw Mr=s,sl}}function jr(t){try{var s=t._init;return s(t._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Mr=o,sl):o}}var Mr=null;function x_(){if(Mr===null)throw Error(a(459));var t=Mr;return Mr=null,t}function b_(t){if(t===sl||t===lu)throw Error(a(483))}var ol=null,ql=0;function uu(t){var s=ql;return ql+=1,ol===null&&(ol=[]),y_(ol,t,s)}function Kl(t,s){s=s.props.ref,t.ref=s!==void 0?s:null}function du(t,s){throw s.$$typeof===w?Error(a(525)):(t=Object.prototype.toString.call(s),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":t)))}function v_(t){function s(re,ne){if(t){var _e=re.deletions;_e===null?(re.deletions=[ne],re.flags|=16):_e.push(ne)}}function o(re,ne){if(!t)return null;for(;ne!==null;)s(re,ne),ne=ne.sibling;return null}function r(re){for(var ne=new Map;re!==null;)re.key!==null?ne.set(re.key,re):ne.set(re.index,re),re=re.sibling;return ne}function f(re,ne){return re=_i(re,ne),re.index=0,re.sibling=null,re}function m(re,ne,_e){return re.index=_e,t?(_e=re.alternate,_e!==null?(_e=_e.index,_e<ne?(re.flags|=67108866,ne):_e):(re.flags|=67108866,ne)):(re.flags|=1048576,ne)}function S(re){return t&&re.alternate===null&&(re.flags|=67108866),re}function L(re,ne,_e,Ie){return ne===null||ne.tag!==6?(ne=af(_e,re.mode,Ie),ne.return=re,ne):(ne=f(ne,_e),ne.return=re,ne)}function q(re,ne,_e,Ie){var Ut=_e.type;return Ut===A?Oe(re,ne,_e.props.children,Ie,_e.key):ne!==null&&(ne.elementType===Ut||typeof Ut=="object"&&Ut!==null&&Ut.$$typeof===K&&jr(Ut)===ne.type)?(ne=f(ne,_e.props),Kl(ne,_e),ne.return=re,ne):(ne=Cs(_e.type,_e.key,_e.props,null,re.mode,Ie),Kl(ne,_e),ne.return=re,ne)}function ge(re,ne,_e,Ie){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==_e.containerInfo||ne.stateNode.implementation!==_e.implementation?(ne=rf(_e,re.mode,Ie),ne.return=re,ne):(ne=f(ne,_e.children||[]),ne.return=re,ne)}function Oe(re,ne,_e,Ie,Ut){return ne===null||ne.tag!==7?(ne=vr(_e,re.mode,Ie,Ut),ne.return=re,ne):(ne=f(ne,_e),ne.return=re,ne)}function Ue(re,ne,_e){if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return ne=af(""+ne,re.mode,_e),ne.return=re,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case k:return _e=Cs(ne.type,ne.key,ne.props,null,re.mode,_e),Kl(_e,ne),_e.return=re,_e;case M:return ne=rf(ne,re.mode,_e),ne.return=re,ne;case K:return ne=jr(ne),Ue(re,ne,_e)}if(se(ne)||Ae(ne))return ne=vr(ne,re.mode,_e,null),ne.return=re,ne;if(typeof ne.then=="function")return Ue(re,uu(ne),_e);if(ne.$$typeof===O)return Ue(re,au(re,ne),_e);du(re,ne)}return null}function ve(re,ne,_e,Ie){var Ut=ne!==null?ne.key:null;if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Ut!==null?null:L(re,ne,""+_e,Ie);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case k:return _e.key===Ut?q(re,ne,_e,Ie):null;case M:return _e.key===Ut?ge(re,ne,_e,Ie):null;case K:return _e=jr(_e),ve(re,ne,_e,Ie)}if(se(_e)||Ae(_e))return Ut!==null?null:Oe(re,ne,_e,Ie,null);if(typeof _e.then=="function")return ve(re,ne,uu(_e),Ie);if(_e.$$typeof===O)return ve(re,ne,au(re,_e),Ie);du(re,_e)}return null}function je(re,ne,_e,Ie,Ut){if(typeof Ie=="string"&&Ie!==""||typeof Ie=="number"||typeof Ie=="bigint")return re=re.get(_e)||null,L(ne,re,""+Ie,Ut);if(typeof Ie=="object"&&Ie!==null){switch(Ie.$$typeof){case k:return re=re.get(Ie.key===null?_e:Ie.key)||null,q(ne,re,Ie,Ut);case M:return re=re.get(Ie.key===null?_e:Ie.key)||null,ge(ne,re,Ie,Ut);case K:return Ie=jr(Ie),je(re,ne,_e,Ie,Ut)}if(se(Ie)||Ae(Ie))return re=re.get(_e)||null,Oe(ne,re,Ie,Ut,null);if(typeof Ie.then=="function")return je(re,ne,_e,uu(Ie),Ut);if(Ie.$$typeof===O)return je(re,ne,_e,au(ne,Ie),Ut);du(ne,Ie)}return null}function Tt(re,ne,_e,Ie){for(var Ut=null,On=null,Ot=ne,yn=ne=0,Mn=null;Ot!==null&&yn<_e.length;yn++){Ot.index>yn?(Mn=Ot,Ot=null):Mn=Ot.sibling;var zn=ve(re,Ot,_e[yn],Ie);if(zn===null){Ot===null&&(Ot=Mn);break}t&&Ot&&zn.alternate===null&&s(re,Ot),ne=m(zn,ne,yn),On===null?Ut=zn:On.sibling=zn,On=zn,Ot=Mn}if(yn===_e.length)return o(re,Ot),An&&va(re,yn),Ut;if(Ot===null){for(;yn<_e.length;yn++)Ot=Ue(re,_e[yn],Ie),Ot!==null&&(ne=m(Ot,ne,yn),On===null?Ut=Ot:On.sibling=Ot,On=Ot);return An&&va(re,yn),Ut}for(Ot=r(Ot);yn<_e.length;yn++)Mn=je(Ot,re,yn,_e[yn],Ie),Mn!==null&&(t&&Mn.alternate!==null&&Ot.delete(Mn.key===null?yn:Mn.key),ne=m(Mn,ne,yn),On===null?Ut=Mn:On.sibling=Mn,On=Mn);return t&&Ot.forEach(function(rr){return s(re,rr)}),An&&va(re,yn),Ut}function Gt(re,ne,_e,Ie){if(_e==null)throw Error(a(151));for(var Ut=null,On=null,Ot=ne,yn=ne=0,Mn=null,zn=_e.next();Ot!==null&&!zn.done;yn++,zn=_e.next()){Ot.index>yn?(Mn=Ot,Ot=null):Mn=Ot.sibling;var rr=ve(re,Ot,zn.value,Ie);if(rr===null){Ot===null&&(Ot=Mn);break}t&&Ot&&rr.alternate===null&&s(re,Ot),ne=m(rr,ne,yn),On===null?Ut=rr:On.sibling=rr,On=rr,Ot=Mn}if(zn.done)return o(re,Ot),An&&va(re,yn),Ut;if(Ot===null){for(;!zn.done;yn++,zn=_e.next())zn=Ue(re,zn.value,Ie),zn!==null&&(ne=m(zn,ne,yn),On===null?Ut=zn:On.sibling=zn,On=zn);return An&&va(re,yn),Ut}for(Ot=r(Ot);!zn.done;yn++,zn=_e.next())zn=je(Ot,re,yn,zn.value,Ie),zn!==null&&(t&&zn.alternate!==null&&Ot.delete(zn.key===null?yn:zn.key),ne=m(zn,ne,yn),On===null?Ut=zn:On.sibling=zn,On=zn);return t&&Ot.forEach(function($v){return s(re,$v)}),An&&va(re,yn),Ut}function ns(re,ne,_e,Ie){if(typeof _e=="object"&&_e!==null&&_e.type===A&&_e.key===null&&(_e=_e.props.children),typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case k:e:{for(var Ut=_e.key;ne!==null;){if(ne.key===Ut){if(Ut=_e.type,Ut===A){if(ne.tag===7){o(re,ne.sibling),Ie=f(ne,_e.props.children),Ie.return=re,re=Ie;break e}}else if(ne.elementType===Ut||typeof Ut=="object"&&Ut!==null&&Ut.$$typeof===K&&jr(Ut)===ne.type){o(re,ne.sibling),Ie=f(ne,_e.props),Kl(Ie,_e),Ie.return=re,re=Ie;break e}o(re,ne);break}else s(re,ne);ne=ne.sibling}_e.type===A?(Ie=vr(_e.props.children,re.mode,Ie,_e.key),Ie.return=re,re=Ie):(Ie=Cs(_e.type,_e.key,_e.props,null,re.mode,Ie),Kl(Ie,_e),Ie.return=re,re=Ie)}return S(re);case M:e:{for(Ut=_e.key;ne!==null;){if(ne.key===Ut)if(ne.tag===4&&ne.stateNode.containerInfo===_e.containerInfo&&ne.stateNode.implementation===_e.implementation){o(re,ne.sibling),Ie=f(ne,_e.children||[]),Ie.return=re,re=Ie;break e}else{o(re,ne);break}else s(re,ne);ne=ne.sibling}Ie=rf(_e,re.mode,Ie),Ie.return=re,re=Ie}return S(re);case K:return _e=jr(_e),ns(re,ne,_e,Ie)}if(se(_e))return Tt(re,ne,_e,Ie);if(Ae(_e)){if(Ut=Ae(_e),typeof Ut!="function")throw Error(a(150));return _e=Ut.call(_e),Gt(re,ne,_e,Ie)}if(typeof _e.then=="function")return ns(re,ne,uu(_e),Ie);if(_e.$$typeof===O)return ns(re,ne,au(re,_e),Ie);du(re,_e)}return typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint"?(_e=""+_e,ne!==null&&ne.tag===6?(o(re,ne.sibling),Ie=f(ne,_e),Ie.return=re,re=Ie):(o(re,ne),Ie=af(_e,re.mode,Ie),Ie.return=re,re=Ie),S(re)):o(re,ne)}return function(re,ne,_e,Ie){try{ql=0;var Ut=ns(re,ne,_e,Ie);return ol=null,Ut}catch(Ot){if(Ot===sl||Ot===lu)throw Ot;var On=Jn(29,Ot,null,re.mode);return On.lanes=Ie,On.return=re,On}finally{}}}var Er=v_(!0),w_=v_(!1),Ya=!1;function xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bf(t,s){t=t.updateQueue,s.updateQueue===t&&(s.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Wa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Fa(t,s,o){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(In&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=br(t),Yl(t,null,o),s}return xr(t,r,s,o),br(t)}function Ql(t,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=t.pendingLanes,o|=r,s.lanes=o,Et(t,o)}}function vf(t,s){var o=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var S={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=S:m=m.next=S,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=s:t.next=s,o.lastBaseUpdate=s}var wf=!1;function Zl(){if(wf){var t=nl;if(t!==null)throw t}}function Jl(t,s,o,r){wf=!1;var f=t.updateQueue;Ya=!1;var m=f.firstBaseUpdate,S=f.lastBaseUpdate,L=f.shared.pending;if(L!==null){f.shared.pending=null;var q=L,ge=q.next;q.next=null,S===null?m=ge:S.next=ge,S=q;var Oe=t.alternate;Oe!==null&&(Oe=Oe.updateQueue,L=Oe.lastBaseUpdate,L!==S&&(L===null?Oe.firstBaseUpdate=ge:L.next=ge,Oe.lastBaseUpdate=q))}if(m!==null){var Ue=f.baseState;S=0,Oe=ge=q=null,L=m;do{var ve=L.lane&-536870913,je=ve!==L.lane;if(je?(jn&ve)===ve:(r&ve)===ve){ve!==0&&ve===tl&&(wf=!0),Oe!==null&&(Oe=Oe.next={lane:0,tag:L.tag,payload:L.payload,callback:null,next:null});e:{var Tt=t,Gt=L;ve=s;var ns=o;switch(Gt.tag){case 1:if(Tt=Gt.payload,typeof Tt=="function"){Ue=Tt.call(ns,Ue,ve);break e}Ue=Tt;break e;case 3:Tt.flags=Tt.flags&-65537|128;case 0:if(Tt=Gt.payload,ve=typeof Tt=="function"?Tt.call(ns,Ue,ve):Tt,ve==null)break e;Ue=b({},Ue,ve);break e;case 2:Ya=!0}}ve=L.callback,ve!==null&&(t.flags|=64,je&&(t.flags|=8192),je=f.callbacks,je===null?f.callbacks=[ve]:je.push(ve))}else je={lane:ve,tag:L.tag,payload:L.payload,callback:L.callback,next:null},Oe===null?(ge=Oe=je,q=Ue):Oe=Oe.next=je,S|=ve;if(L=L.next,L===null){if(L=f.shared.pending,L===null)break;je=L,L=je.next,je.next=null,f.lastBaseUpdate=je,f.shared.pending=null}}while(!0);Oe===null&&(q=Ue),f.baseState=q,f.firstBaseUpdate=ge,f.lastBaseUpdate=Oe,m===null&&(f.shared.lanes=0),Qa|=S,t.lanes=S,t.memoizedState=Ue}}function S_(t,s){if(typeof t!="function")throw Error(a(191,t));t.call(s)}function C_(t,s){var o=t.callbacks;if(o!==null)for(t.callbacks=null,t=0;t<o.length;t++)S_(o[t],s)}var il=P(null),fu=P(0);function k_(t,s){t=Da,ee(fu,t),ee(il,s),Da=t|s.baseLanes}function Sf(){ee(fu,Da),ee(il,il.current)}function Cf(){Da=fu.current,ae(il),ae(fu)}var Ai=P(null),Wi=null;function Xa(t){var s=t.alternate;ee(Qs,Qs.current&1),ee(Ai,t),Wi===null&&(s===null||il.current!==null||s.memoizedState!==null)&&(Wi=t)}function kf(t){ee(Qs,Qs.current),ee(Ai,t),Wi===null&&(Wi=t)}function j_(t){t.tag===22?(ee(Qs,Qs.current),ee(Ai,t),Wi===null&&(Wi=t)):Ga()}function Ga(){ee(Qs,Qs.current),ee(Ai,Ai.current)}function Ni(t){ae(Ai),Wi===t&&(Wi=null),ae(Qs)}var Qs=P(0);function hu(t){for(var s=t;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Nh(o)||Dh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Ca=0,hn=null,es=null,co=null,mu=!1,al=!1,Tr=!1,pu=0,ec=0,rl=null,E2=0;function Hs(){throw Error(a(321))}function jf(t,s){if(s===null)return!1;for(var o=0;o<s.length&&o<t.length;o++)if(!ke(t[o],s[o]))return!1;return!0}function Mf(t,s,o,r,f,m){return Ca=m,hn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,z.H=t===null||t.memoizedState===null?cg:Uf,Tr=!1,m=o(r,f),Tr=!1,al&&(m=E_(s,o,r,f)),M_(t),m}function M_(t){z.H=sc;var s=es!==null&&es.next!==null;if(Ca=0,co=es=hn=null,mu=!1,ec=0,rl=null,s)throw Error(a(300));t===null||uo||(t=t.dependencies,t!==null&&iu(t)&&(uo=!0))}function E_(t,s,o,r){hn=t;var f=0;do{if(al&&(rl=null),ec=0,al=!1,25<=f)throw Error(a(301));if(f+=1,co=es=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=ug,m=s(o,r)}while(al);return m}function T2(){var t=z.H,s=t.useState()[0];return s=typeof s.then=="function"?tc(s):s,t=t.useState()[0],(es!==null?es.memoizedState:null)!==t&&(hn.flags|=1024),s}function Ef(){var t=pu!==0;return pu=0,t}function Tf(t,s,o){s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~o}function Af(t){if(mu){for(t=t.memoizedState;t!==null;){var s=t.queue;s!==null&&(s.pending=null),t=t.next}mu=!1}Ca=0,co=es=hn=null,al=!1,ec=pu=0,rl=null}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return co===null?hn.memoizedState=co=t:co=co.next=t,co}function Zs(){if(es===null){var t=hn.alternate;t=t!==null?t.memoizedState:null}else t=es.next;var s=co===null?hn.memoizedState:co.next;if(s!==null)co=s,es=t;else{if(t===null)throw hn.alternate===null?Error(a(467)):Error(a(310));es=t,t={memoizedState:es.memoizedState,baseState:es.baseState,baseQueue:es.baseQueue,queue:es.queue,next:null},co===null?hn.memoizedState=co=t:co=co.next=t}return co}function _u(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tc(t){var s=ec;return ec+=1,rl===null&&(rl=[]),t=y_(rl,t,s),s=hn,(co===null?s.memoizedState:co.next)===null&&(s=s.alternate,z.H=s===null||s.memoizedState===null?cg:Uf),t}function gu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return tc(t);if(t.$$typeof===O)return Po(t)}throw Error(a(438,String(t)))}function Nf(t){var s=null,o=hn.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=hn.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=_u(),hn.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(t),r=0;r<t;r++)o[r]=de;return s.index++,o}function ka(t,s){return typeof s=="function"?s(t):s}function yu(t){var s=Zs();return Df(s,es,t)}function Df(t,s,o){var r=t.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=t.baseQueue,m=r.pending;if(m!==null){if(f!==null){var S=f.next;f.next=m.next,m.next=S}s.baseQueue=f=m,r.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{s=f.next;var L=S=null,q=null,ge=s,Oe=!1;do{var Ue=ge.lane&-536870913;if(Ue!==ge.lane?(jn&Ue)===Ue:(Ca&Ue)===Ue){var ve=ge.revertLane;if(ve===0)q!==null&&(q=q.next={lane:0,revertLane:0,gesture:null,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null}),Ue===tl&&(Oe=!0);else if((Ca&ve)===ve){ge=ge.next,ve===tl&&(Oe=!0);continue}else Ue={lane:0,revertLane:ge.revertLane,gesture:null,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null},q===null?(L=q=Ue,S=m):q=q.next=Ue,hn.lanes|=ve,Qa|=ve;Ue=ge.action,Tr&&o(m,Ue),m=ge.hasEagerState?ge.eagerState:o(m,Ue)}else ve={lane:Ue,revertLane:ge.revertLane,gesture:ge.gesture,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null},q===null?(L=q=ve,S=m):q=q.next=ve,hn.lanes|=Ue,Qa|=Ue;ge=ge.next}while(ge!==null&&ge!==s);if(q===null?S=m:q.next=L,!ke(m,t.memoizedState)&&(uo=!0,Oe&&(o=nl,o!==null)))throw o;t.memoizedState=m,t.baseState=S,t.baseQueue=q,r.lastRenderedState=m}return f===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Rf(t){var s=Zs(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=t;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var S=f=f.next;do m=t(m,S.action),S=S.next;while(S!==f);ke(m,s.memoizedState)||(uo=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function T_(t,s,o){var r=hn,f=Zs(),m=An;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var S=!ke((es||f).memoizedState,o);if(S&&(f.memoizedState=o,uo=!0),f=f.queue,Of(D_.bind(null,r,f,t),[t]),f.getSnapshot!==s||S||co!==null&&co.memoizedState.tag&1){if(r.flags|=2048,ll(9,{destroy:void 0},N_.bind(null,r,f,o,s),null),cs===null)throw Error(a(349));m||(Ca&127)!==0||A_(r,s,o)}return o}function A_(t,s,o){t.flags|=16384,t={getSnapshot:s,value:o},s=hn.updateQueue,s===null?(s=_u(),hn.updateQueue=s,s.stores=[t]):(o=s.stores,o===null?s.stores=[t]:o.push(t))}function N_(t,s,o,r){s.value=o,s.getSnapshot=r,R_(s)&&B_(t)}function D_(t,s,o){return o(function(){R_(s)&&B_(t)})}function R_(t){var s=t.getSnapshot;t=t.value;try{var o=s();return!ke(t,o)}catch{return!0}}function B_(t){var s=ua(t,2);s!==null&&vi(s,t,2)}function Bf(t){var s=si();if(typeof t=="function"){var o=t;if(t=o(),Tr){Be(!0);try{o()}finally{Be(!1)}}}return s.memoizedState=s.baseState=t,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:t},s}function L_(t,s,o,r){return t.baseState=o,Df(t,es,typeof r=="function"?r:ka)}function A2(t,s,o,r,f){if(vu(t))throw Error(a(485));if(t=s.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};z.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,O_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function O_(t,s){var o=s.action,r=s.payload,f=t.state;if(s.isTransition){var m=z.T,S={};z.T=S;try{var L=o(f,r),q=z.S;q!==null&&q(S,L),z_(t,s,L)}catch(ge){Lf(t,s,ge)}finally{m!==null&&S.types!==null&&(m.types=S.types),z.T=m}}else try{m=o(f,r),z_(t,s,m)}catch(ge){Lf(t,s,ge)}}function z_(t,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){$_(t,s,r)},function(r){return Lf(t,s,r)}):$_(t,s,o)}function $_(t,s,o){s.status="fulfilled",s.value=o,P_(s),t.state=o,s=t.pending,s!==null&&(o=s.next,o===s?t.pending=null:(o=o.next,s.next=o,O_(t,o)))}function Lf(t,s,o){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,P_(s),s=s.next;while(s!==r)}t.action=null}function P_(t){t=t.listeners;for(var s=0;s<t.length;s++)(0,t[s])()}function I_(t,s){return s}function H_(t,s){if(An){var o=cs.formState;if(o!==null){e:{var r=hn;if(An){if(ks){t:{for(var f=ks,m=Yi;f.nodeType!==8;){if(!m){f=null;break t}if(f=Fi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){ks=Fi(f.nextSibling),r=f.data==="F!";break e}}Ua(r)}r=!1}r&&(s=o[0])}}return o=si(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:I_,lastRenderedState:s},o.queue=r,o=ag.bind(null,hn,r),r.dispatch=o,r=Bf(!1),m=Hf.bind(null,hn,!1,r.queue),r=si(),f={state:s,dispatch:null,action:t,pending:null},r.queue=f,o=A2.bind(null,hn,f,m,o),f.dispatch=o,r.memoizedState=t,[s,o,!1]}function U_(t){var s=Zs();return V_(s,es,t)}function V_(t,s,o){if(s=Df(t,s,I_)[0],t=yu(ka)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=tc(s)}catch(S){throw S===sl?lu:S}else r=s;s=Zs();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(hn.flags|=2048,ll(9,{destroy:void 0},N2.bind(null,f,o),null)),[r,m,t]}function N2(t,s){t.action=s}function Y_(t){var s=Zs(),o=es;if(o!==null)return V_(s,o,t);Zs(),s=s.memoizedState,o=Zs();var r=o.queue.dispatch;return o.memoizedState=t,[s,r,!1]}function ll(t,s,o,r){return t={tag:t,create:o,deps:r,inst:s,next:null},s=hn.updateQueue,s===null&&(s=_u(),hn.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=t.next=t:(r=o.next,o.next=t,t.next=r,s.lastEffect=t),t}function W_(){return Zs().memoizedState}function xu(t,s,o,r){var f=si();hn.flags|=t,f.memoizedState=ll(1|s,{destroy:void 0},o,r===void 0?null:r)}function bu(t,s,o,r){var f=Zs();r=r===void 0?null:r;var m=f.memoizedState.inst;es!==null&&r!==null&&jf(r,es.memoizedState.deps)?f.memoizedState=ll(s,m,o,r):(hn.flags|=t,f.memoizedState=ll(1|s,m,o,r))}function F_(t,s){xu(8390656,8,t,s)}function Of(t,s){bu(2048,8,t,s)}function D2(t){hn.flags|=4;var s=hn.updateQueue;if(s===null)s=_u(),hn.updateQueue=s,s.events=[t];else{var o=s.events;o===null?s.events=[t]:o.push(t)}}function X_(t){var s=Zs().memoizedState;return D2({ref:s,nextImpl:t}),function(){if((In&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function G_(t,s){return bu(4,2,t,s)}function q_(t,s){return bu(4,4,t,s)}function K_(t,s){if(typeof s=="function"){t=t();var o=s(t);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return t=t(),s.current=t,function(){s.current=null}}function Q_(t,s,o){o=o!=null?o.concat([t]):null,bu(4,4,K_.bind(null,s,t),o)}function zf(){}function Z_(t,s){var o=Zs();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&jf(s,r[1])?r[0]:(o.memoizedState=[t,s],t)}function J_(t,s){var o=Zs();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&jf(s,r[1]))return r[0];if(r=t(),Tr){Be(!0);try{t()}finally{Be(!1)}}return o.memoizedState=[r,s],r}function $f(t,s,o){return o===void 0||(Ca&1073741824)!==0&&(jn&261930)===0?t.memoizedState=s:(t.memoizedState=o,t=e0(),hn.lanes|=t,Qa|=t,o)}function eg(t,s,o,r){return ke(o,s)?o:il.current!==null?(t=$f(t,o,r),ke(t,s)||(uo=!0),t):(Ca&42)===0||(Ca&1073741824)!==0&&(jn&261930)===0?(uo=!0,t.memoizedState=o):(t=e0(),hn.lanes|=t,Qa|=t,s)}function tg(t,s,o,r,f){var m=te.p;te.p=m!==0&&8>m?m:8;var S=z.T,L={};z.T=L,Hf(t,!1,s,o);try{var q=f(),ge=z.S;if(ge!==null&&ge(L,q),q!==null&&typeof q=="object"&&typeof q.then=="function"){var Oe=M2(q,r);nc(t,s,Oe,Bi(t))}else nc(t,s,r,Bi(t))}catch(Ue){nc(t,s,{then:function(){},status:"rejected",reason:Ue},Bi())}finally{te.p=m,S!==null&&L.types!==null&&(S.types=L.types),z.T=S}}function R2(){}function Pf(t,s,o,r){if(t.tag!==5)throw Error(a(476));var f=ng(t).queue;tg(t,f,s,Y,o===null?R2:function(){return sg(t),o(r)})}function ng(t){var s=t.memoizedState;if(s!==null)return s;s={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:Y},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:o},next:null},t.memoizedState=s,t=t.alternate,t!==null&&(t.memoizedState=s),s}function sg(t){var s=ng(t);s.next===null&&(s=t.alternate.memoizedState),nc(t,s.next.queue,{},Bi())}function If(){return Po(xc)}function og(){return Zs().memoizedState}function ig(){return Zs().memoizedState}function B2(t){for(var s=t.return;s!==null;){switch(s.tag){case 24:case 3:var o=Bi();t=Wa(o);var r=Fa(s,t,o);r!==null&&(vi(r,s,o),Ql(r,s,o)),s={cache:pf()},t.payload=s;return}s=s.return}}function L2(t,s,o){var r=Bi();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},vu(t)?rg(s,o):(o=Kr(t,s,o,r),o!==null&&(vi(o,t,r),lg(o,s,r)))}function ag(t,s,o){var r=Bi();nc(t,s,o,r)}function nc(t,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(vu(t))rg(s,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var S=s.lastRenderedState,L=m(S,o);if(f.hasEagerState=!0,f.eagerState=L,ke(L,S))return xr(t,s,f,0),cs===null&&yr(),!1}catch{}finally{}if(o=Kr(t,s,f,r),o!==null)return vi(o,t,r),lg(o,s,r),!0}return!1}function Hf(t,s,o,r){if(r={lane:2,revertLane:xh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},vu(t)){if(s)throw Error(a(479))}else s=Kr(t,o,r,2),s!==null&&vi(s,t,2)}function vu(t){var s=t.alternate;return t===hn||s!==null&&s===hn}function rg(t,s){al=mu=!0;var o=t.pending;o===null?s.next=s:(s.next=o.next,o.next=s),t.pending=s}function lg(t,s,o){if((o&4194048)!==0){var r=s.lanes;r&=t.pendingLanes,o|=r,s.lanes=o,Et(t,o)}}var sc={readContext:Po,use:gu,useCallback:Hs,useContext:Hs,useEffect:Hs,useImperativeHandle:Hs,useLayoutEffect:Hs,useInsertionEffect:Hs,useMemo:Hs,useReducer:Hs,useRef:Hs,useState:Hs,useDebugValue:Hs,useDeferredValue:Hs,useTransition:Hs,useSyncExternalStore:Hs,useId:Hs,useHostTransitionStatus:Hs,useFormState:Hs,useActionState:Hs,useOptimistic:Hs,useMemoCache:Hs,useCacheRefresh:Hs};sc.useEffectEvent=Hs;var cg={readContext:Po,use:gu,useCallback:function(t,s){return si().memoizedState=[t,s===void 0?null:s],t},useContext:Po,useEffect:F_,useImperativeHandle:function(t,s,o){o=o!=null?o.concat([t]):null,xu(4194308,4,K_.bind(null,s,t),o)},useLayoutEffect:function(t,s){return xu(4194308,4,t,s)},useInsertionEffect:function(t,s){xu(4,2,t,s)},useMemo:function(t,s){var o=si();s=s===void 0?null:s;var r=t();if(Tr){Be(!0);try{t()}finally{Be(!1)}}return o.memoizedState=[r,s],r},useReducer:function(t,s,o){var r=si();if(o!==void 0){var f=o(s);if(Tr){Be(!0);try{o(s)}finally{Be(!1)}}}else f=s;return r.memoizedState=r.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},r.queue=t,t=t.dispatch=L2.bind(null,hn,t),[r.memoizedState,t]},useRef:function(t){var s=si();return t={current:t},s.memoizedState=t},useState:function(t){t=Bf(t);var s=t.queue,o=ag.bind(null,hn,s);return s.dispatch=o,[t.memoizedState,o]},useDebugValue:zf,useDeferredValue:function(t,s){var o=si();return $f(o,t,s)},useTransition:function(){var t=Bf(!1);return t=tg.bind(null,hn,t.queue,!0,!1),si().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,s,o){var r=hn,f=si();if(An){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),cs===null)throw Error(a(349));(jn&127)!==0||A_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,F_(D_.bind(null,r,m,t),[t]),r.flags|=2048,ll(9,{destroy:void 0},N_.bind(null,r,m,o,s),null),o},useId:function(){var t=si(),s=cs.identifierPrefix;if(An){var o=fa,r=da;o=(r&~(1<<32-pe(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=pu++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=E2++,s="_"+s+"r_"+o.toString(32)+"_";return t.memoizedState=s},useHostTransitionStatus:If,useFormState:H_,useActionState:H_,useOptimistic:function(t){var s=si();s.memoizedState=s.baseState=t;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Hf.bind(null,hn,!0,o),o.dispatch=s,[t,s]},useMemoCache:Nf,useCacheRefresh:function(){return si().memoizedState=B2.bind(null,hn)},useEffectEvent:function(t){var s=si(),o={impl:t};return s.memoizedState=o,function(){if((In&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Uf={readContext:Po,use:gu,useCallback:Z_,useContext:Po,useEffect:Of,useImperativeHandle:Q_,useInsertionEffect:G_,useLayoutEffect:q_,useMemo:J_,useReducer:yu,useRef:W_,useState:function(){return yu(ka)},useDebugValue:zf,useDeferredValue:function(t,s){var o=Zs();return eg(o,es.memoizedState,t,s)},useTransition:function(){var t=yu(ka)[0],s=Zs().memoizedState;return[typeof t=="boolean"?t:tc(t),s]},useSyncExternalStore:T_,useId:og,useHostTransitionStatus:If,useFormState:U_,useActionState:U_,useOptimistic:function(t,s){var o=Zs();return L_(o,es,t,s)},useMemoCache:Nf,useCacheRefresh:ig};Uf.useEffectEvent=X_;var ug={readContext:Po,use:gu,useCallback:Z_,useContext:Po,useEffect:Of,useImperativeHandle:Q_,useInsertionEffect:G_,useLayoutEffect:q_,useMemo:J_,useReducer:Rf,useRef:W_,useState:function(){return Rf(ka)},useDebugValue:zf,useDeferredValue:function(t,s){var o=Zs();return es===null?$f(o,t,s):eg(o,es.memoizedState,t,s)},useTransition:function(){var t=Rf(ka)[0],s=Zs().memoizedState;return[typeof t=="boolean"?t:tc(t),s]},useSyncExternalStore:T_,useId:og,useHostTransitionStatus:If,useFormState:Y_,useActionState:Y_,useOptimistic:function(t,s){var o=Zs();return es!==null?L_(o,es,t,s):(o.baseState=t,[t,o.queue.dispatch])},useMemoCache:Nf,useCacheRefresh:ig};ug.useEffectEvent=X_;function Vf(t,s,o,r){s=t.memoizedState,o=o(r,s),o=o==null?s:b({},s,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Yf={enqueueSetState:function(t,s,o){t=t._reactInternals;var r=Bi(),f=Wa(r);f.payload=s,o!=null&&(f.callback=o),s=Fa(t,f,r),s!==null&&(vi(s,t,r),Ql(s,t,r))},enqueueReplaceState:function(t,s,o){t=t._reactInternals;var r=Bi(),f=Wa(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Fa(t,f,r),s!==null&&(vi(s,t,r),Ql(s,t,r))},enqueueForceUpdate:function(t,s){t=t._reactInternals;var o=Bi(),r=Wa(o);r.tag=2,s!=null&&(r.callback=s),s=Fa(t,r,o),s!==null&&(vi(s,t,o),Ql(s,t,o))}};function dg(t,s,o,r,f,m,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,m,S):s.prototype&&s.prototype.isPureReactComponent?!Le(o,r)||!Le(f,m):!0}function fg(t,s,o,r){t=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==t&&Yf.enqueueReplaceState(s,s.state,null)}function Ar(t,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(t=t.defaultProps){o===s&&(o=b({},o));for(var f in t)o[f]===void 0&&(o[f]=t[f])}return o}function hg(t){gr(t)}function mg(t){console.error(t)}function pg(t){gr(t)}function wu(t,s){try{var o=t.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function _g(t,s,o){try{var r=t.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Wf(t,s,o){return o=Wa(o),o.tag=3,o.payload={element:null},o.callback=function(){wu(t,s)},o}function gg(t){return t=Wa(t),t.tag=3,t}function yg(t,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;t.payload=function(){return f(m)},t.callback=function(){_g(s,o,r)}}var S=o.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){_g(s,o,r),typeof f!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var L=r.stack;this.componentDidCatch(r.value,{componentStack:L!==null?L:""})})}function O2(t,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&el(s,o,f,!0),o=Ai.current,o!==null){switch(o.tag){case 31:case 13:return Wi===null?Bu():o.alternate===null&&Us===0&&(Us=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===cu?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),_h(t,r,f)),!1;case 22:return o.flags|=65536,r===cu?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),_h(t,r,f)),!1}throw Error(a(435,o.tag))}return _h(t,r,f),Bu(),!1}if(An)return s=Ai.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==uf&&(t=Error(a(422),{cause:r}),Fl(Hi(t,o)))):(r!==uf&&(s=Error(a(423),{cause:r}),Fl(Hi(s,o))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,r=Hi(r,o),f=Wf(t.stateNode,r,f),vf(t,f),Us!==4&&(Us=2)),!1;var m=Error(a(520),{cause:r});if(m=Hi(m,o),dc===null?dc=[m]:dc.push(m),Us!==4&&(Us=2),s===null)return!0;r=Hi(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,t=f&-f,o.lanes|=t,t=Wf(o.stateNode,r,t),vf(o,t),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Za===null||!Za.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=gg(f),yg(f,t,o,r),vf(o,f),!1}o=o.return}while(o!==null);return!1}var Ff=Error(a(461)),uo=!1;function Io(t,s,o,r){s.child=t===null?w_(s,null,o,r):Er(s,t.child,o,r)}function xg(t,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var S={};for(var L in r)L!=="ref"&&(S[L]=r[L])}else S=r;return Cr(s),r=Mf(t,s,o,S,m,f),L=Ef(),t!==null&&!uo?(Tf(t,s,f),ja(t,s,f)):(An&&L&&lf(s),s.flags|=1,Io(t,s,r,f),s.child)}function bg(t,s,o,r,f){if(t===null){var m=o.type;return typeof m=="function"&&!Ti(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,vg(t,s,m,r,f)):(t=Cs(o.type,null,r,s,s.mode,f),t.ref=s.ref,t.return=s,s.child=t)}if(m=t.child,!eh(t,f)){var S=m.memoizedProps;if(o=o.compare,o=o!==null?o:Le,o(S,r)&&t.ref===s.ref)return ja(t,s,f)}return s.flags|=1,t=_i(m,r),t.ref=s.ref,t.return=s,s.child=t}function vg(t,s,o,r,f){if(t!==null){var m=t.memoizedProps;if(Le(m,r)&&t.ref===s.ref)if(uo=!1,s.pendingProps=r=m,eh(t,f))(t.flags&131072)!==0&&(uo=!0);else return s.lanes=t.lanes,ja(t,s,f)}return Xf(t,s,o,r,f)}function wg(t,s,o,r){var f=r.children,m=t!==null?t.memoizedState:null;if(t===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,t!==null){for(r=s.child=t.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return Sg(t,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},t!==null&&ru(s,m!==null?m.cachePool:null),m!==null?k_(s,m):Sf(),j_(s);else return r=s.lanes=536870912,Sg(t,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(ru(s,m.cachePool),k_(s,m),Ga(),s.memoizedState=null):(t!==null&&ru(s,null),Sf(),Ga());return Io(t,s,f,o),s.child}function oc(t,s){return t!==null&&t.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function Sg(t,s,o,r,f){var m=gf();return m=m===null?null:{parent:lo._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},t!==null&&ru(s,null),Sf(),j_(s),t!==null&&el(t,s,r,!0),s.childLanes=f,null}function Su(t,s){return s=ku({mode:s.mode,children:s.children},t.mode),s.ref=t.ref,t.child=s,s.return=t,s}function Cg(t,s,o){return Er(s,t.child,null,o),t=Su(s,s.pendingProps),t.flags|=2,Ni(s),s.memoizedState=null,t}function z2(t,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,t===null){if(An){if(r.mode==="hidden")return t=Su(s,r),s.lanes=536870912,oc(null,t);if(kf(s),(t=ks)?(t=O0(t,Yi),t=t!==null&&t.data==="&"?t:null,t!==null&&(s.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:da,overflow:fa}:null,retryLane:536870912,hydrationErrors:null},o=r_(t),o.return=s,s.child=o,$o=s,ks=null)):t=null,t===null)throw Ua(s);return s.lanes=536870912,null}return Su(s,r)}var m=t.memoizedState;if(m!==null){var S=m.dehydrated;if(kf(s),f)if(s.flags&256)s.flags&=-257,s=Cg(t,s,o);else if(s.memoizedState!==null)s.child=t.child,s.flags|=128,s=null;else throw Error(a(558));else if(uo||el(t,s,o,!1),f=(o&t.childLanes)!==0,uo||f){if(r=cs,r!==null&&(S=yt(r,o),S!==0&&S!==m.retryLane))throw m.retryLane=S,ua(t,S),vi(r,t,S),Ff;Bu(),s=Cg(t,s,o)}else t=m.treeContext,ks=Fi(S.nextSibling),$o=s,An=!0,Ha=null,Yi=!1,t!==null&&u_(s,t),s=Su(s,r),s.flags|=4096;return s}return t=_i(t.child,{mode:r.mode,children:r.children}),t.ref=s.ref,s.child=t,t.return=s,t}function Cu(t,s){var o=s.ref;if(o===null)t!==null&&t.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(t===null||t.ref!==o)&&(s.flags|=4194816)}}function Xf(t,s,o,r,f){return Cr(s),o=Mf(t,s,o,r,void 0,f),r=Ef(),t!==null&&!uo?(Tf(t,s,f),ja(t,s,f)):(An&&r&&lf(s),s.flags|=1,Io(t,s,o,f),s.child)}function kg(t,s,o,r,f,m){return Cr(s),s.updateQueue=null,o=E_(s,r,o,f),M_(t),r=Ef(),t!==null&&!uo?(Tf(t,s,m),ja(t,s,m)):(An&&r&&lf(s),s.flags|=1,Io(t,s,o,m),s.child)}function jg(t,s,o,r,f){if(Cr(s),s.stateNode===null){var m=dn,S=o.contextType;typeof S=="object"&&S!==null&&(m=Po(S)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Yf,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},xf(s),S=o.contextType,m.context=typeof S=="object"&&S!==null?Po(S):dn,m.state=s.memoizedState,S=o.getDerivedStateFromProps,typeof S=="function"&&(Vf(s,o,S,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&Yf.enqueueReplaceState(m,m.state,null),Jl(s,r,m,f),Zl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(t===null){m=s.stateNode;var L=s.memoizedProps,q=Ar(o,L);m.props=q;var ge=m.context,Oe=o.contextType;S=dn,typeof Oe=="object"&&Oe!==null&&(S=Po(Oe));var Ue=o.getDerivedStateFromProps;Oe=typeof Ue=="function"||typeof m.getSnapshotBeforeUpdate=="function",L=s.pendingProps!==L,Oe||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(L||ge!==S)&&fg(s,m,r,S),Ya=!1;var ve=s.memoizedState;m.state=ve,Jl(s,r,m,f),Zl(),ge=s.memoizedState,L||ve!==ge||Ya?(typeof Ue=="function"&&(Vf(s,o,Ue,r),ge=s.memoizedState),(q=Ya||dg(s,o,q,r,ve,ge,S))?(Oe||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=ge),m.props=r,m.state=ge,m.context=S,r=q):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,bf(t,s),S=s.memoizedProps,Oe=Ar(o,S),m.props=Oe,Ue=s.pendingProps,ve=m.context,ge=o.contextType,q=dn,typeof ge=="object"&&ge!==null&&(q=Po(ge)),L=o.getDerivedStateFromProps,(ge=typeof L=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==Ue||ve!==q)&&fg(s,m,r,q),Ya=!1,ve=s.memoizedState,m.state=ve,Jl(s,r,m,f),Zl();var je=s.memoizedState;S!==Ue||ve!==je||Ya||t!==null&&t.dependencies!==null&&iu(t.dependencies)?(typeof L=="function"&&(Vf(s,o,L,r),je=s.memoizedState),(Oe=Ya||dg(s,o,Oe,r,ve,je,q)||t!==null&&t.dependencies!==null&&iu(t.dependencies))?(ge||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,je,q),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,je,q)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===t.memoizedProps&&ve===t.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ve===t.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=je),m.props=r,m.state=je,m.context=q,r=Oe):(typeof m.componentDidUpdate!="function"||S===t.memoizedProps&&ve===t.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ve===t.memoizedState||(s.flags|=1024),r=!1)}return m=r,Cu(t,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,t!==null&&r?(s.child=Er(s,t.child,null,f),s.child=Er(s,null,o,f)):Io(t,s,o,f),s.memoizedState=m.state,t=s.child):t=ja(t,s,f),t}function Mg(t,s,o,r){return wr(),s.flags|=256,Io(t,s,o,r),s.child}var Gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qf(t){return{baseLanes:t,cachePool:__()}}function Kf(t,s,o){return t=t!==null?t.childLanes&~o:0,s&&(t|=Ri),t}function Eg(t,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,S;if((S=m)||(S=t!==null&&t.memoizedState===null?!1:(Qs.current&2)!==0),S&&(f=!0,s.flags&=-129),S=(s.flags&32)!==0,s.flags&=-33,t===null){if(An){if(f?Xa(s):Ga(),(t=ks)?(t=O0(t,Yi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(s.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:da,overflow:fa}:null,retryLane:536870912,hydrationErrors:null},o=r_(t),o.return=s,s.child=o,$o=s,ks=null)):t=null,t===null)throw Ua(s);return Dh(t)?s.lanes=32:s.lanes=536870912,null}var L=r.children;return r=r.fallback,f?(Ga(),f=s.mode,L=ku({mode:"hidden",children:L},f),r=vr(r,f,o,null),L.return=s,r.return=s,L.sibling=r,s.child=L,r=s.child,r.memoizedState=qf(o),r.childLanes=Kf(t,S,o),s.memoizedState=Gf,oc(null,r)):(Xa(s),Qf(s,L))}var q=t.memoizedState;if(q!==null&&(L=q.dehydrated,L!==null)){if(m)s.flags&256?(Xa(s),s.flags&=-257,s=Zf(t,s,o)):s.memoizedState!==null?(Ga(),s.child=t.child,s.flags|=128,s=null):(Ga(),L=r.fallback,f=s.mode,r=ku({mode:"visible",children:r.children},f),L=vr(L,f,o,null),L.flags|=2,r.return=s,L.return=s,r.sibling=L,s.child=r,Er(s,t.child,null,o),r=s.child,r.memoizedState=qf(o),r.childLanes=Kf(t,S,o),s.memoizedState=Gf,s=oc(null,r));else if(Xa(s),Dh(L)){if(S=L.nextSibling&&L.nextSibling.dataset,S)var ge=S.dgst;S=ge,r=Error(a(419)),r.stack="",r.digest=S,Fl({value:r,source:null,stack:null}),s=Zf(t,s,o)}else if(uo||el(t,s,o,!1),S=(o&t.childLanes)!==0,uo||S){if(S=cs,S!==null&&(r=yt(S,o),r!==0&&r!==q.retryLane))throw q.retryLane=r,ua(t,r),vi(S,t,r),Ff;Nh(L)||Bu(),s=Zf(t,s,o)}else Nh(L)?(s.flags|=192,s.child=t.child,s=null):(t=q.treeContext,ks=Fi(L.nextSibling),$o=s,An=!0,Ha=null,Yi=!1,t!==null&&u_(s,t),s=Qf(s,r.children),s.flags|=4096);return s}return f?(Ga(),L=r.fallback,f=s.mode,q=t.child,ge=q.sibling,r=_i(q,{mode:"hidden",children:r.children}),r.subtreeFlags=q.subtreeFlags&65011712,ge!==null?L=_i(ge,L):(L=vr(L,f,o,null),L.flags|=2),L.return=s,r.return=s,r.sibling=L,s.child=r,oc(null,r),r=s.child,L=t.child.memoizedState,L===null?L=qf(o):(f=L.cachePool,f!==null?(q=lo._currentValue,f=f.parent!==q?{parent:q,pool:q}:f):f=__(),L={baseLanes:L.baseLanes|o,cachePool:f}),r.memoizedState=L,r.childLanes=Kf(t,S,o),s.memoizedState=Gf,oc(t.child,r)):(Xa(s),o=t.child,t=o.sibling,o=_i(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,t!==null&&(S=s.deletions,S===null?(s.deletions=[t],s.flags|=16):S.push(t)),s.child=o,s.memoizedState=null,o)}function Qf(t,s){return s=ku({mode:"visible",children:s},t.mode),s.return=t,t.child=s}function ku(t,s){return t=Jn(22,t,null,s),t.lanes=0,t}function Zf(t,s,o){return Er(s,t.child,null,o),t=Qf(s,s.pendingProps.children),t.flags|=2,s.memoizedState=null,t}function Tg(t,s,o){t.lanes|=s;var r=t.alternate;r!==null&&(r.lanes|=s),hf(t.return,s,o)}function Jf(t,s,o,r,f,m){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(S.isBackwards=s,S.rendering=null,S.renderingStartTime=0,S.last=r,S.tail=o,S.tailMode=f,S.treeForkCount=m)}function Ag(t,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var S=Qs.current,L=(S&2)!==0;if(L?(S=S&1|2,s.flags|=128):S&=1,ee(Qs,S),Io(t,s,r,o),r=An?Wl:0,!L&&t!==null&&(t.flags&128)!==0)e:for(t=s.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tg(t,o,s);else if(t.tag===19)Tg(t,o,s);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break e;for(;t.sibling===null;){if(t.return===null||t.return===s)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)t=o.alternate,t!==null&&hu(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Jf(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(t=f.alternate,t!==null&&hu(t)===null){s.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}Jf(s,!0,o,null,m,r);break;case"together":Jf(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function ja(t,s,o){if(t!==null&&(s.dependencies=t.dependencies),Qa|=s.lanes,(o&s.childLanes)===0)if(t!==null){if(el(t,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(t!==null&&s.child!==t.child)throw Error(a(153));if(s.child!==null){for(t=s.child,o=_i(t,t.pendingProps),s.child=o,o.return=s;t.sibling!==null;)t=t.sibling,o=o.sibling=_i(t,t.pendingProps),o.return=s;o.sibling=null}return s.child}function eh(t,s){return(t.lanes&s)!==0?!0:(t=t.dependencies,!!(t!==null&&iu(t)))}function $2(t,s,o){switch(s.tag){case 3:Qe(s,s.stateNode.containerInfo),Va(s,lo,t.memoizedState.cache),wr();break;case 27:case 5:ut(s);break;case 4:Qe(s,s.stateNode.containerInfo);break;case 10:Va(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,kf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(Xa(s),s.flags|=128,null):(o&s.child.childLanes)!==0?Eg(t,s,o):(Xa(s),t=ja(t,s,o),t!==null?t.sibling:null);Xa(s);break;case 19:var f=(t.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(el(t,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return Ag(t,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ee(Qs,Qs.current),r)break;return null;case 22:return s.lanes=0,wg(t,s,o,s.pendingProps);case 24:Va(s,lo,t.memoizedState.cache)}return ja(t,s,o)}function Ng(t,s,o){if(t!==null)if(t.memoizedProps!==s.pendingProps)uo=!0;else{if(!eh(t,o)&&(s.flags&128)===0)return uo=!1,$2(t,s,o);uo=(t.flags&131072)!==0}else uo=!1,An&&(s.flags&1048576)!==0&&c_(s,Wl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(t=jr(s.elementType),s.type=t,typeof t=="function")Ti(t)?(r=Ar(t,r),s.tag=1,s=jg(null,s,t,r,o)):(s.tag=0,s=Xf(null,s,t,r,o));else{if(t!=null){var f=t.$$typeof;if(f===N){s.tag=11,s=xg(null,s,t,r,o);break e}else if(f===U){s.tag=14,s=bg(null,s,t,r,o);break e}}throw s=oe(t)||t,Error(a(306,s,""))}}return s;case 0:return Xf(t,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=Ar(r,s.pendingProps),jg(t,s,r,f,o);case 3:e:{if(Qe(s,s.stateNode.containerInfo),t===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,bf(t,s),Jl(s,r,null,o);var S=s.memoizedState;if(r=S.cache,Va(s,lo,r),r!==m.cache&&mf(s,[lo],o,!0),Zl(),r=S.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:S.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=Mg(t,s,r,o);break e}else if(r!==f){f=Hi(Error(a(424)),s),Fl(f),s=Mg(t,s,r,o);break e}else{switch(t=s.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ks=Fi(t.firstChild),$o=s,An=!0,Ha=null,Yi=!0,o=w_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(wr(),r===f){s=ja(t,s,o);break e}Io(t,s,r,o)}s=s.child}return s;case 26:return Cu(t,s),t===null?(o=U0(s.type,null,s.pendingProps,null))?s.memoizedState=o:An||(o=s.type,t=s.pendingProps,r=Hu(he.current).createElement(o),r[At]=s,r[bn]=t,Ho(r,o,t),en(r),s.stateNode=r):s.memoizedState=U0(s.type,t.memoizedProps,s.pendingProps,t.memoizedState),null;case 27:return ut(s),t===null&&An&&(r=s.stateNode=P0(s.type,s.pendingProps,he.current),$o=s,Yi=!0,f=ks,nr(s.type)?(Rh=f,ks=Fi(r.firstChild)):ks=f),Io(t,s,s.pendingProps.children,o),Cu(t,s),t===null&&(s.flags|=4194304),s.child;case 5:return t===null&&An&&((f=r=ks)&&(r=mv(r,s.type,s.pendingProps,Yi),r!==null?(s.stateNode=r,$o=s,ks=Fi(r.firstChild),Yi=!1,f=!0):f=!1),f||Ua(s)),ut(s),f=s.type,m=s.pendingProps,S=t!==null?t.memoizedProps:null,r=m.children,Eh(f,m)?r=null:S!==null&&Eh(f,S)&&(s.flags|=32),s.memoizedState!==null&&(f=Mf(t,s,T2,null,null,o),xc._currentValue=f),Cu(t,s),Io(t,s,r,o),s.child;case 6:return t===null&&An&&((t=o=ks)&&(o=pv(o,s.pendingProps,Yi),o!==null?(s.stateNode=o,$o=s,ks=null,t=!0):t=!1),t||Ua(s)),null;case 13:return Eg(t,s,o);case 4:return Qe(s,s.stateNode.containerInfo),r=s.pendingProps,t===null?s.child=Er(s,null,r,o):Io(t,s,r,o),s.child;case 11:return xg(t,s,s.type,s.pendingProps,o);case 7:return Io(t,s,s.pendingProps,o),s.child;case 8:return Io(t,s,s.pendingProps.children,o),s.child;case 12:return Io(t,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,Va(s,s.type,r.value),Io(t,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,Cr(s),f=Po(f),r=r(f),s.flags|=1,Io(t,s,r,o),s.child;case 14:return bg(t,s,s.type,s.pendingProps,o);case 15:return vg(t,s,s.type,s.pendingProps,o);case 19:return Ag(t,s,o);case 31:return z2(t,s,o);case 22:return wg(t,s,o,s.pendingProps);case 24:return Cr(s),r=Po(lo),t===null?(f=gf(),f===null&&(f=cs,m=pf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},xf(s),Va(s,lo,f)):((t.lanes&o)!==0&&(bf(t,s),Jl(s,null,null,o),Zl()),f=t.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Va(s,lo,r)):(r=m.cache,Va(s,lo,r),r!==f.cache&&mf(s,[lo],o,!0))),Io(t,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function Ma(t){t.flags|=4}function th(t,s,o,r,f){if((s=(t.mode&32)!==0)&&(s=!1),s){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(o0())t.flags|=8192;else throw Mr=cu,yf}else t.flags&=-16777217}function Dg(t,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!X0(s))if(o0())t.flags|=8192;else throw Mr=cu,yf}function ju(t,s){s!==null&&(t.flags|=4),t.flags&16384&&(s=t.tag!==22?ct():536870912,t.lanes|=s,fl|=s)}function ic(t,s){if(!An)switch(t.tailMode){case"hidden":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function js(t){var s=t.alternate!==null&&t.alternate.child===t.child,o=0,r=0;if(s)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=r,t.childLanes=o,s}function P2(t,s,o){var r=s.pendingProps;switch(cf(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return js(s),null;case 1:return js(s),null;case 3:return o=s.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),Sa(lo),We(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(Jr(s)?Ma(s):t===null||t.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,df())),js(s),null;case 26:var f=s.type,m=s.memoizedState;return t===null?(Ma(s),m!==null?(js(s),Dg(s,m)):(js(s),th(s,f,null,r,o))):m?m!==t.memoizedState?(Ma(s),js(s),Dg(s,m)):(js(s),s.flags&=-16777217):(t=t.memoizedProps,t!==r&&Ma(s),js(s),th(s,f,t,r,o)),null;case 27:if(kt(s),o=he.current,f=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==r&&Ma(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return js(s),null}t=xe.current,Jr(s)?d_(s):(t=P0(f,r,o),s.stateNode=t,Ma(s))}return js(s),null;case 5:if(kt(s),f=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==r&&Ma(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return js(s),null}if(m=xe.current,Jr(s))d_(s);else{var S=Hu(he.current);switch(m){case 1:m=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=S.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?S.createElement("select",{is:r.is}):S.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?S.createElement(f,{is:r.is}):S.createElement(f)}}m[At]=s,m[bn]=r;e:for(S=s.child;S!==null;){if(S.tag===5||S.tag===6)m.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===s)break e;for(;S.sibling===null;){if(S.return===null||S.return===s)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}s.stateNode=m;e:switch(Ho(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ma(s)}}return js(s),th(s,s.type,t===null?null:t.memoizedProps,s.pendingProps,o),null;case 6:if(t&&s.stateNode!=null)t.memoizedProps!==r&&Ma(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(t=he.current,Jr(s)){if(t=s.stateNode,o=s.memoizedProps,r=null,f=$o,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}t[At]=s,t=!!(t.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||E0(t.nodeValue,o)),t||Ua(s,!0)}else t=Hu(t).createTextNode(r),t[At]=s,s.stateNode=t}return js(s),null;case 31:if(o=s.memoizedState,t===null||t.memoizedState!==null){if(r=Jr(s),o!==null){if(t===null){if(!r)throw Error(a(318));if(t=s.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[At]=s}else wr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;js(s),t=!1}else o=df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=o),t=!0;if(!t)return s.flags&256?(Ni(s),s):(Ni(s),null);if((s.flags&128)!==0)throw Error(a(558))}return js(s),null;case 13:if(r=s.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Jr(s),r!==null&&r.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[At]=s}else wr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;js(s),f=!1}else f=df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Ni(s),s):(Ni(s),null)}return Ni(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,t=t!==null&&t.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==t&&o&&(s.child.flags|=8192),ju(s,s.updateQueue),js(s),null);case 4:return We(),t===null&&Sh(s.stateNode.containerInfo),js(s),null;case 10:return Sa(s.type),js(s),null;case 19:if(ae(Qs),r=s.memoizedState,r===null)return js(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)ic(r,!1);else{if(Us!==0||t!==null&&(t.flags&128)!==0)for(t=s.child;t!==null;){if(m=hu(t),m!==null){for(s.flags|=128,ic(r,!1),t=m.updateQueue,s.updateQueue=t,ju(s,t),s.subtreeFlags=0,t=o,o=s.child;o!==null;)Fo(o,t),o=o.sibling;return ee(Qs,Qs.current&1|2),An&&va(s,r.treeForkCount),s.child}t=t.sibling}r.tail!==null&&ft()>Nu&&(s.flags|=128,f=!0,ic(r,!1),s.lanes=4194304)}else{if(!f)if(t=hu(m),t!==null){if(s.flags|=128,f=!0,t=t.updateQueue,s.updateQueue=t,ju(s,t),ic(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!An)return js(s),null}else 2*ft()-r.renderingStartTime>Nu&&o!==536870912&&(s.flags|=128,f=!0,ic(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(t=r.last,t!==null?t.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=ft(),t.sibling=null,o=Qs.current,ee(Qs,f?o&1|2:o&1),An&&va(s,r.treeForkCount),t):(js(s),null);case 22:case 23:return Ni(s),Cf(),r=s.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(js(s),s.subtreeFlags&6&&(s.flags|=8192)):js(s),o=s.updateQueue,o!==null&&ju(s,o.retryQueue),o=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),t!==null&&ae(kr),null;case 24:return o=null,t!==null&&(o=t.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Sa(lo),js(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function I2(t,s){switch(cf(s),s.tag){case 1:return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 3:return Sa(lo),We(),t=s.flags,(t&65536)!==0&&(t&128)===0?(s.flags=t&-65537|128,s):null;case 26:case 27:case 5:return kt(s),null;case 31:if(s.memoizedState!==null){if(Ni(s),s.alternate===null)throw Error(a(340));wr()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 13:if(Ni(s),t=s.memoizedState,t!==null&&t.dehydrated!==null){if(s.alternate===null)throw Error(a(340));wr()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 19:return ae(Qs),null;case 4:return We(),null;case 10:return Sa(s.type),null;case 22:case 23:return Ni(s),Cf(),t!==null&&ae(kr),t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 24:return Sa(lo),null;case 25:return null;default:return null}}function Rg(t,s){switch(cf(s),s.tag){case 3:Sa(lo),We();break;case 26:case 27:case 5:kt(s);break;case 4:We();break;case 31:s.memoizedState!==null&&Ni(s);break;case 13:Ni(s);break;case 19:ae(Qs);break;case 10:Sa(s.type);break;case 22:case 23:Ni(s),Cf(),t!==null&&ae(kr);break;case 24:Sa(lo)}}function ac(t,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&t)===t){r=void 0;var m=o.create,S=o.inst;r=m(),S.destroy=r}o=o.next}while(o!==f)}}catch(L){Qn(s,s.return,L)}}function qa(t,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&t)===t){var S=r.inst,L=S.destroy;if(L!==void 0){S.destroy=void 0,f=s;var q=o,ge=L;try{ge()}catch(Oe){Qn(f,q,Oe)}}}r=r.next}while(r!==m)}}catch(Oe){Qn(s,s.return,Oe)}}function Bg(t){var s=t.updateQueue;if(s!==null){var o=t.stateNode;try{C_(s,o)}catch(r){Qn(t,t.return,r)}}}function Lg(t,s,o){o.props=Ar(t.type,t.memoizedProps),o.state=t.memoizedState;try{o.componentWillUnmount()}catch(r){Qn(t,s,r)}}function rc(t,s){try{var o=t.ref;if(o!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof o=="function"?t.refCleanup=o(r):o.current=r}}catch(f){Qn(t,s,f)}}function ha(t,s){var o=t.ref,r=t.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Qn(t,s,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Qn(t,s,f)}else o.current=null}function Og(t){var s=t.type,o=t.memoizedProps,r=t.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Qn(t,t.return,f)}}function nh(t,s,o){try{var r=t.stateNode;lv(r,t.type,o,s),r[bn]=s}catch(f){Qn(t,t.return,f)}}function zg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&nr(t.type)||t.tag===4}function sh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&nr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function oh(t,s,o){var r=t.tag;if(r===5||r===6)t=t.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(t,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(t),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=rs));else if(r!==4&&(r===27&&nr(t.type)&&(o=t.stateNode,s=null),t=t.child,t!==null))for(oh(t,s,o),t=t.sibling;t!==null;)oh(t,s,o),t=t.sibling}function Mu(t,s,o){var r=t.tag;if(r===5||r===6)t=t.stateNode,s?o.insertBefore(t,s):o.appendChild(t);else if(r!==4&&(r===27&&nr(t.type)&&(o=t.stateNode),t=t.child,t!==null))for(Mu(t,s,o),t=t.sibling;t!==null;)Mu(t,s,o),t=t.sibling}function $g(t){var s=t.stateNode,o=t.memoizedProps;try{for(var r=t.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Ho(s,r,o),s[At]=t,s[bn]=o}catch(m){Qn(t,t.return,m)}}var Ea=!1,fo=!1,ih=!1,Pg=typeof WeakSet=="function"?WeakSet:Set,Ao=null;function H2(t,s){if(t=t.containerInfo,jh=Gu,t=xt(t),St(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var S=0,L=-1,q=-1,ge=0,Oe=0,Ue=t,ve=null;t:for(;;){for(var je;Ue!==o||f!==0&&Ue.nodeType!==3||(L=S+f),Ue!==m||r!==0&&Ue.nodeType!==3||(q=S+r),Ue.nodeType===3&&(S+=Ue.nodeValue.length),(je=Ue.firstChild)!==null;)ve=Ue,Ue=je;for(;;){if(Ue===t)break t;if(ve===o&&++ge===f&&(L=S),ve===m&&++Oe===r&&(q=S),(je=Ue.nextSibling)!==null)break;Ue=ve,ve=Ue.parentNode}Ue=je}o=L===-1||q===-1?null:{start:L,end:q}}else o=null}o=o||{start:0,end:0}}else o=null;for(Mh={focusedElem:t,selectionRange:o},Gu=!1,Ao=s;Ao!==null;)if(s=Ao,t=s.child,(s.subtreeFlags&1028)!==0&&t!==null)t.return=s,Ao=t;else for(;Ao!==null;){switch(s=Ao,m=s.alternate,t=s.flags,s.tag){case 0:if((t&4)!==0&&(t=s.updateQueue,t=t!==null?t.events:null,t!==null))for(o=0;o<t.length;o++)f=t[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var Tt=Ar(o.type,f);t=r.getSnapshotBeforeUpdate(Tt,m),r.__reactInternalSnapshotBeforeUpdate=t}catch(Gt){Qn(o,o.return,Gt)}}break;case 3:if((t&1024)!==0){if(t=s.stateNode.containerInfo,o=t.nodeType,o===9)Ah(t);else if(o===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ah(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=s.sibling,t!==null){t.return=s.return,Ao=t;break}Ao=s.return}}function Ig(t,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:Aa(t,o),r&4&&ac(5,o);break;case 1:if(Aa(t,o),r&4)if(t=o.stateNode,s===null)try{t.componentDidMount()}catch(S){Qn(o,o.return,S)}else{var f=Ar(o.type,s.memoizedProps);s=s.memoizedState;try{t.componentDidUpdate(f,s,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Qn(o,o.return,S)}}r&64&&Bg(o),r&512&&rc(o,o.return);break;case 3:if(Aa(t,o),r&64&&(t=o.updateQueue,t!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{C_(t,s)}catch(S){Qn(o,o.return,S)}}break;case 27:s===null&&r&4&&$g(o);case 26:case 5:Aa(t,o),s===null&&r&4&&Og(o),r&512&&rc(o,o.return);break;case 12:Aa(t,o);break;case 31:Aa(t,o),r&4&&Vg(t,o);break;case 13:Aa(t,o),r&4&&Yg(t,o),r&64&&(t=o.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(o=K2.bind(null,o),_v(t,o))));break;case 22:if(r=o.memoizedState!==null||Ea,!r){s=s!==null&&s.memoizedState!==null||fo,f=Ea;var m=fo;Ea=r,(fo=s)&&!m?Na(t,o,(o.subtreeFlags&8772)!==0):Aa(t,o),Ea=f,fo=m}break;case 30:break;default:Aa(t,o)}}function Hg(t){var s=t.alternate;s!==null&&(t.alternate=null,Hg(s)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(s=t.stateNode,s!==null&&po(s)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ts=null,gi=!1;function Ta(t,s,o){for(o=o.child;o!==null;)Ug(t,s,o),o=o.sibling}function Ug(t,s,o){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(nt,o)}catch{}switch(o.tag){case 26:fo||ha(o,s),Ta(t,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:fo||ha(o,s);var r=Ts,f=gi;nr(o.type)&&(Ts=o.stateNode,gi=!1),Ta(t,s,o),_c(o.stateNode),Ts=r,gi=f;break;case 5:fo||ha(o,s);case 6:if(r=Ts,f=gi,Ts=null,Ta(t,s,o),Ts=r,gi=f,Ts!==null)if(gi)try{(Ts.nodeType===9?Ts.body:Ts.nodeName==="HTML"?Ts.ownerDocument.body:Ts).removeChild(o.stateNode)}catch(m){Qn(o,s,m)}else try{Ts.removeChild(o.stateNode)}catch(m){Qn(o,s,m)}break;case 18:Ts!==null&&(gi?(t=Ts,B0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,o.stateNode),bl(t)):B0(Ts,o.stateNode));break;case 4:r=Ts,f=gi,Ts=o.stateNode.containerInfo,gi=!0,Ta(t,s,o),Ts=r,gi=f;break;case 0:case 11:case 14:case 15:qa(2,o,s),fo||qa(4,o,s),Ta(t,s,o);break;case 1:fo||(ha(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Lg(o,s,r)),Ta(t,s,o);break;case 21:Ta(t,s,o);break;case 22:fo=(r=fo)||o.memoizedState!==null,Ta(t,s,o),fo=r;break;default:Ta(t,s,o)}}function Vg(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{bl(t)}catch(o){Qn(s,s.return,o)}}}function Yg(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bl(t)}catch(o){Qn(s,s.return,o)}}function U2(t){switch(t.tag){case 31:case 13:case 19:var s=t.stateNode;return s===null&&(s=t.stateNode=new Pg),s;case 22:return t=t.stateNode,s=t._retryCache,s===null&&(s=t._retryCache=new Pg),s;default:throw Error(a(435,t.tag))}}function Eu(t,s){var o=U2(t);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=Q2.bind(null,t,r);r.then(f,f)}})}function yi(t,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=t,S=s,L=S;e:for(;L!==null;){switch(L.tag){case 27:if(nr(L.type)){Ts=L.stateNode,gi=!1;break e}break;case 5:Ts=L.stateNode,gi=!1;break e;case 3:case 4:Ts=L.stateNode.containerInfo,gi=!0;break e}L=L.return}if(Ts===null)throw Error(a(160));Ug(m,S,f),Ts=null,gi=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)Wg(s,t),s=s.sibling}var ea=null;function Wg(t,s){var o=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:yi(s,t),xi(t),r&4&&(qa(3,t,t.return),ac(3,t),qa(5,t,t.return));break;case 1:yi(s,t),xi(t),r&512&&(fo||o===null||ha(o,o.return)),r&64&&Ea&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(o=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=ea;if(yi(s,t),xi(t),r&512&&(fo||o===null||ha(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=t.memoizedState,o===null)if(r===null)if(t.stateNode===null){e:{r=t.type,o=t.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Co]||m[At]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),Ho(m,r,o),m[At]=t,en(m),r=m;break e;case"link":var S=W0("link","href",f).get(r+(o.href||""));if(S){for(var L=0;L<S.length;L++)if(m=S[L],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){S.splice(L,1);break t}}m=f.createElement(r),Ho(m,r,o),f.head.appendChild(m);break;case"meta":if(S=W0("meta","content",f).get(r+(o.content||""))){for(L=0;L<S.length;L++)if(m=S[L],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){S.splice(L,1);break t}}m=f.createElement(r),Ho(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[At]=t,en(m),r=m}t.stateNode=r}else F0(f,t.type,t.stateNode);else t.stateNode=Y0(f,r,t.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?F0(f,t.type,t.stateNode):Y0(f,r,t.memoizedProps)):r===null&&t.stateNode!==null&&nh(t,t.memoizedProps,o.memoizedProps)}break;case 27:yi(s,t),xi(t),r&512&&(fo||o===null||ha(o,o.return)),o!==null&&r&4&&nh(t,t.memoizedProps,o.memoizedProps);break;case 5:if(yi(s,t),xi(t),r&512&&(fo||o===null||ha(o,o.return)),t.flags&32){f=t.stateNode;try{ps(f,"")}catch(Tt){Qn(t,t.return,Tt)}}r&4&&t.stateNode!=null&&(f=t.memoizedProps,nh(t,f,o!==null?o.memoizedProps:f)),r&1024&&(ih=!0);break;case 6:if(yi(s,t),xi(t),r&4){if(t.stateNode===null)throw Error(a(162));r=t.memoizedProps,o=t.stateNode;try{o.nodeValue=r}catch(Tt){Qn(t,t.return,Tt)}}break;case 3:if(Yu=null,f=ea,ea=Uu(s.containerInfo),yi(s,t),ea=f,xi(t),r&4&&o!==null&&o.memoizedState.isDehydrated)try{bl(s.containerInfo)}catch(Tt){Qn(t,t.return,Tt)}ih&&(ih=!1,Fg(t));break;case 4:r=ea,ea=Uu(t.stateNode.containerInfo),yi(s,t),xi(t),ea=r;break;case 12:yi(s,t),xi(t);break;case 31:yi(s,t),xi(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Eu(t,r)));break;case 13:yi(s,t),xi(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Au=ft()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Eu(t,r)));break;case 22:f=t.memoizedState!==null;var q=o!==null&&o.memoizedState!==null,ge=Ea,Oe=fo;if(Ea=ge||f,fo=Oe||q,yi(s,t),fo=Oe,Ea=ge,xi(t),r&8192)e:for(s=t.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||q||Ea||fo||Nr(t)),o=null,s=t;;){if(s.tag===5||s.tag===26){if(o===null){q=o=s;try{if(m=q.stateNode,f)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{L=q.stateNode;var Ue=q.memoizedProps.style,ve=Ue!=null&&Ue.hasOwnProperty("display")?Ue.display:null;L.style.display=ve==null||typeof ve=="boolean"?"":(""+ve).trim()}}catch(Tt){Qn(q,q.return,Tt)}}}else if(s.tag===6){if(o===null){q=s;try{q.stateNode.nodeValue=f?"":q.memoizedProps}catch(Tt){Qn(q,q.return,Tt)}}}else if(s.tag===18){if(o===null){q=s;try{var je=q.stateNode;f?L0(je,!0):L0(q.stateNode,!1)}catch(Tt){Qn(q,q.return,Tt)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===t)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=t.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,Eu(t,o))));break;case 19:yi(s,t),xi(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Eu(t,r)));break;case 30:break;case 21:break;default:yi(s,t),xi(t)}}function xi(t){var s=t.flags;if(s&2){try{for(var o,r=t.return;r!==null;){if(zg(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=sh(t);Mu(t,m,f);break;case 5:var S=o.stateNode;o.flags&32&&(ps(S,""),o.flags&=-33);var L=sh(t);Mu(t,L,S);break;case 3:case 4:var q=o.stateNode.containerInfo,ge=sh(t);oh(t,ge,q);break;default:throw Error(a(161))}}catch(Oe){Qn(t,t.return,Oe)}t.flags&=-3}s&4096&&(t.flags&=-4097)}function Fg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var s=t;Fg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),t=t.sibling}}function Aa(t,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Ig(t,s.alternate,s),s=s.sibling}function Nr(t){for(t=t.child;t!==null;){var s=t;switch(s.tag){case 0:case 11:case 14:case 15:qa(4,s,s.return),Nr(s);break;case 1:ha(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Lg(s,s.return,o),Nr(s);break;case 27:_c(s.stateNode);case 26:case 5:ha(s,s.return),Nr(s);break;case 22:s.memoizedState===null&&Nr(s);break;case 30:Nr(s);break;default:Nr(s)}t=t.sibling}}function Na(t,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=t,m=s,S=m.flags;switch(m.tag){case 0:case 11:case 15:Na(f,m,o),ac(4,m);break;case 1:if(Na(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ge){Qn(r,r.return,ge)}if(r=m,f=r.updateQueue,f!==null){var L=r.stateNode;try{var q=f.shared.hiddenCallbacks;if(q!==null)for(f.shared.hiddenCallbacks=null,f=0;f<q.length;f++)S_(q[f],L)}catch(ge){Qn(r,r.return,ge)}}o&&S&64&&Bg(m),rc(m,m.return);break;case 27:$g(m);case 26:case 5:Na(f,m,o),o&&r===null&&S&4&&Og(m),rc(m,m.return);break;case 12:Na(f,m,o);break;case 31:Na(f,m,o),o&&S&4&&Vg(f,m);break;case 13:Na(f,m,o),o&&S&4&&Yg(f,m);break;case 22:m.memoizedState===null&&Na(f,m,o),rc(m,m.return);break;case 30:break;default:Na(f,m,o)}s=s.sibling}}function ah(t,s){var o=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),t=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(t=s.memoizedState.cachePool.pool),t!==o&&(t!=null&&t.refCount++,o!=null&&Xl(o))}function rh(t,s){t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&Xl(t))}function ta(t,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Xg(t,s,o,r),s=s.sibling}function Xg(t,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ta(t,s,o,r),f&2048&&ac(9,s);break;case 1:ta(t,s,o,r);break;case 3:ta(t,s,o,r),f&2048&&(t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&Xl(t)));break;case 12:if(f&2048){ta(t,s,o,r),t=s.stateNode;try{var m=s.memoizedProps,S=m.id,L=m.onPostCommit;typeof L=="function"&&L(S,s.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(q){Qn(s,s.return,q)}}else ta(t,s,o,r);break;case 31:ta(t,s,o,r);break;case 13:ta(t,s,o,r);break;case 23:break;case 22:m=s.stateNode,S=s.alternate,s.memoizedState!==null?m._visibility&2?ta(t,s,o,r):lc(t,s):m._visibility&2?ta(t,s,o,r):(m._visibility|=2,cl(t,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&ah(S,s);break;case 24:ta(t,s,o,r),f&2048&&rh(s.alternate,s);break;default:ta(t,s,o,r)}}function cl(t,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=t,S=s,L=o,q=r,ge=S.flags;switch(S.tag){case 0:case 11:case 15:cl(m,S,L,q,f),ac(8,S);break;case 23:break;case 22:var Oe=S.stateNode;S.memoizedState!==null?Oe._visibility&2?cl(m,S,L,q,f):lc(m,S):(Oe._visibility|=2,cl(m,S,L,q,f)),f&&ge&2048&&ah(S.alternate,S);break;case 24:cl(m,S,L,q,f),f&&ge&2048&&rh(S.alternate,S);break;default:cl(m,S,L,q,f)}s=s.sibling}}function lc(t,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=t,r=s,f=r.flags;switch(r.tag){case 22:lc(o,r),f&2048&&ah(r.alternate,r);break;case 24:lc(o,r),f&2048&&rh(r.alternate,r);break;default:lc(o,r)}s=s.sibling}}var cc=8192;function ul(t,s,o){if(t.subtreeFlags&cc)for(t=t.child;t!==null;)Gg(t,s,o),t=t.sibling}function Gg(t,s,o){switch(t.tag){case 26:ul(t,s,o),t.flags&cc&&t.memoizedState!==null&&Ev(o,ea,t.memoizedState,t.memoizedProps);break;case 5:ul(t,s,o);break;case 3:case 4:var r=ea;ea=Uu(t.stateNode.containerInfo),ul(t,s,o),ea=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=cc,cc=16777216,ul(t,s,o),cc=r):ul(t,s,o));break;default:ul(t,s,o)}}function qg(t){var s=t.alternate;if(s!==null&&(t=s.child,t!==null)){s.child=null;do s=t.sibling,t.sibling=null,t=s;while(t!==null)}}function uc(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];Ao=r,Qg(r,t)}qg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kg(t),t=t.sibling}function Kg(t){switch(t.tag){case 0:case 11:case 15:uc(t),t.flags&2048&&qa(9,t,t.return);break;case 3:uc(t);break;case 12:uc(t);break;case 22:var s=t.stateNode;t.memoizedState!==null&&s._visibility&2&&(t.return===null||t.return.tag!==13)?(s._visibility&=-3,Tu(t)):uc(t);break;default:uc(t)}}function Tu(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];Ao=r,Qg(r,t)}qg(t)}for(t=t.child;t!==null;){switch(s=t,s.tag){case 0:case 11:case 15:qa(8,s,s.return),Tu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Tu(s));break;default:Tu(s)}t=t.sibling}}function Qg(t,s){for(;Ao!==null;){var o=Ao;switch(o.tag){case 0:case 11:case 15:qa(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Xl(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,Ao=r;else e:for(o=t;Ao!==null;){r=Ao;var f=r.sibling,m=r.return;if(Hg(r),r===o){Ao=null;break e}if(f!==null){f.return=m,Ao=f;break e}Ao=m}}}var V2={getCacheForType:function(t){var s=Po(lo),o=s.data.get(t);return o===void 0&&(o=t(),s.data.set(t,o)),o},cacheSignal:function(){return Po(lo).controller.signal}},Y2=typeof WeakMap=="function"?WeakMap:Map,In=0,cs=null,Sn=null,jn=0,Kn=0,Di=null,Ka=!1,dl=!1,lh=!1,Da=0,Us=0,Qa=0,Dr=0,ch=0,Ri=0,fl=0,dc=null,bi=null,uh=!1,Au=0,Zg=0,Nu=1/0,Du=null,Za=null,wo=0,Ja=null,hl=null,Ra=0,dh=0,fh=null,Jg=null,fc=0,hh=null;function Bi(){return(In&2)!==0&&jn!==0?jn&-jn:z.T!==null?xh():Qt()}function e0(){if(Ri===0)if((jn&536870912)===0||An){var t=et;et<<=1,(et&3932160)===0&&(et=262144),Ri=t}else Ri=536870912;return t=Ai.current,t!==null&&(t.flags|=32),Ri}function vi(t,s,o){(t===cs&&(Kn===2||Kn===9)||t.cancelPendingCommit!==null)&&(ml(t,0),er(t,jn,Ri,!1)),rt(t,o),((In&2)===0||t!==cs)&&(t===cs&&((In&2)===0&&(Dr|=o),Us===4&&er(t,jn,Ri,!1)),ma(t))}function t0(t,s,o){if((In&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&t.expiredLanes)===0||Lt(t,s),f=r?X2(t,s):ph(t,s,!0),m=r;do{if(f===0){dl&&!r&&er(t,s,0,!1);break}else{if(o=t.current.alternate,m&&!W2(o)){f=ph(t,s,!1),m=!1;continue}if(f===2){if(m=s,t.errorRecoveryDisabledLanes&m)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){s=S;e:{var L=t;f=dc;var q=L.current.memoizedState.isDehydrated;if(q&&(ml(L,S).flags|=256),S=ph(L,S,!1),S!==2){if(lh&&!q){L.errorRecoveryDisabledLanes|=m,Dr|=m,f=4;break e}m=bi,bi=f,m!==null&&(bi===null?bi=m:bi.push.apply(bi,m))}f=S}if(m=!1,f!==2)continue}}if(f===1){ml(t,0),er(t,s,0,!0);break}e:{switch(r=t,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:er(r,s,Ri,!Ka);break e;case 2:bi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=Au+300-ft(),10<f)){if(er(r,s,Ri,!Ka),Ke(r,0,!0)!==0)break e;Ra=s,r.timeoutHandle=D0(n0.bind(null,r,o,bi,Du,uh,s,Ri,Dr,fl,Ka,m,"Throttled",-0,0),f);break e}n0(r,o,bi,Du,uh,s,Ri,Dr,fl,Ka,m,null,-0,0)}}break}while(!0);ma(t)}function n0(t,s,o,r,f,m,S,L,q,ge,Oe,Ue,ve,je){if(t.timeoutHandle=-1,Ue=s.subtreeFlags,Ue&8192||(Ue&16785408)===16785408){Ue={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:rs},Gg(s,m,Ue);var Tt=(m&62914560)===m?Au-ft():(m&4194048)===m?Zg-ft():0;if(Tt=Tv(Ue,Tt),Tt!==null){Ra=m,t.cancelPendingCommit=Tt(u0.bind(null,t,s,m,o,r,f,S,L,q,Oe,Ue,null,ve,je)),er(t,m,S,!ge);return}}u0(t,s,m,o,r,f,S,L,q)}function W2(t){for(var s=t;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!ke(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function er(t,s,o,r){s&=~ch,s&=~Dr,t.suspendedLanes|=s,t.pingedLanes&=~s,r&&(t.warmLanes|=s),r=t.expirationTimes;for(var f=s;0<f;){var m=31-pe(f),S=1<<m;r[m]=-1,f&=~S}o!==0&&pn(t,o,s)}function Ru(){return(In&6)===0?(hc(0),!1):!0}function mh(){if(Sn!==null){if(Kn===0)var t=Sn.return;else t=Sn,wa=Sr=null,Af(t),ol=null,ql=0,t=Sn;for(;t!==null;)Rg(t.alternate,t),t=t.return;Sn=null}}function ml(t,s){var o=t.timeoutHandle;o!==-1&&(t.timeoutHandle=-1,dv(o)),o=t.cancelPendingCommit,o!==null&&(t.cancelPendingCommit=null,o()),Ra=0,mh(),cs=t,Sn=o=_i(t.current,null),jn=s,Kn=0,Di=null,Ka=!1,dl=Lt(t,s),lh=!1,fl=Ri=ch=Dr=Qa=Us=0,bi=dc=null,uh=!1,(s&8)!==0&&(s|=s&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=s;0<r;){var f=31-pe(r),m=1<<f;s|=t[f],r&=~m}return Da=s,yr(),o}function s0(t,s){hn=null,z.H=sc,s===sl||s===lu?(s=x_(),Kn=3):s===yf?(s=x_(),Kn=4):Kn=s===Ff?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Di=s,Sn===null&&(Us=1,wu(t,Hi(s,t.current)))}function o0(){var t=Ai.current;return t===null?!0:(jn&4194048)===jn?Wi===null:(jn&62914560)===jn||(jn&536870912)!==0?t===Wi:!1}function i0(){var t=z.H;return z.H=sc,t===null?sc:t}function a0(){var t=z.A;return z.A=V2,t}function Bu(){Us=4,Ka||(jn&4194048)!==jn&&Ai.current!==null||(dl=!0),(Qa&134217727)===0&&(Dr&134217727)===0||cs===null||er(cs,jn,Ri,!1)}function ph(t,s,o){var r=In;In|=2;var f=i0(),m=a0();(cs!==t||jn!==s)&&(Du=null,ml(t,s)),s=!1;var S=Us;e:do try{if(Kn!==0&&Sn!==null){var L=Sn,q=Di;switch(Kn){case 8:mh(),S=6;break e;case 3:case 2:case 9:case 6:Ai.current===null&&(s=!0);var ge=Kn;if(Kn=0,Di=null,pl(t,L,q,ge),o&&dl){S=0;break e}break;default:ge=Kn,Kn=0,Di=null,pl(t,L,q,ge)}}F2(),S=Us;break}catch(Oe){s0(t,Oe)}while(!0);return s&&t.shellSuspendCounter++,wa=Sr=null,In=r,z.H=f,z.A=m,Sn===null&&(cs=null,jn=0,yr()),S}function F2(){for(;Sn!==null;)r0(Sn)}function X2(t,s){var o=In;In|=2;var r=i0(),f=a0();cs!==t||jn!==s?(Du=null,Nu=ft()+500,ml(t,s)):dl=Lt(t,s);e:do try{if(Kn!==0&&Sn!==null){s=Sn;var m=Di;t:switch(Kn){case 1:Kn=0,Di=null,pl(t,s,m,1);break;case 2:case 9:if(g_(m)){Kn=0,Di=null,l0(s);break}s=function(){Kn!==2&&Kn!==9||cs!==t||(Kn=7),ma(t)},m.then(s,s);break e;case 3:Kn=7;break e;case 4:Kn=5;break e;case 7:g_(m)?(Kn=0,Di=null,l0(s)):(Kn=0,Di=null,pl(t,s,m,7));break;case 5:var S=null;switch(Sn.tag){case 26:S=Sn.memoizedState;case 5:case 27:var L=Sn;if(S?X0(S):L.stateNode.complete){Kn=0,Di=null;var q=L.sibling;if(q!==null)Sn=q;else{var ge=L.return;ge!==null?(Sn=ge,Lu(ge)):Sn=null}break t}}Kn=0,Di=null,pl(t,s,m,5);break;case 6:Kn=0,Di=null,pl(t,s,m,6);break;case 8:mh(),Us=6;break e;default:throw Error(a(462))}}G2();break}catch(Oe){s0(t,Oe)}while(!0);return wa=Sr=null,z.H=r,z.A=f,In=o,Sn!==null?0:(cs=null,jn=0,yr(),Us)}function G2(){for(;Sn!==null&&!dt();)r0(Sn)}function r0(t){var s=Ng(t.alternate,t,Da);t.memoizedProps=t.pendingProps,s===null?Lu(t):Sn=s}function l0(t){var s=t,o=s.alternate;switch(s.tag){case 15:case 0:s=kg(o,s,s.pendingProps,s.type,void 0,jn);break;case 11:s=kg(o,s,s.pendingProps,s.type.render,s.ref,jn);break;case 5:Af(s);default:Rg(o,s),s=Sn=Fo(s,Da),s=Ng(o,s,Da)}t.memoizedProps=t.pendingProps,s===null?Lu(t):Sn=s}function pl(t,s,o,r){wa=Sr=null,Af(s),ol=null,ql=0;var f=s.return;try{if(O2(t,f,s,o,jn)){Us=1,wu(t,Hi(o,t.current)),Sn=null;return}}catch(m){if(f!==null)throw Sn=f,m;Us=1,wu(t,Hi(o,t.current)),Sn=null;return}s.flags&32768?(An||r===1?t=!0:dl||(jn&536870912)!==0?t=!1:(Ka=t=!0,(r===2||r===9||r===3||r===6)&&(r=Ai.current,r!==null&&r.tag===13&&(r.flags|=16384))),c0(s,t)):Lu(s)}function Lu(t){var s=t;do{if((s.flags&32768)!==0){c0(s,Ka);return}t=s.return;var o=P2(s.alternate,s,Da);if(o!==null){Sn=o;return}if(s=s.sibling,s!==null){Sn=s;return}Sn=s=t}while(s!==null);Us===0&&(Us=5)}function c0(t,s){do{var o=I2(t.alternate,t);if(o!==null){o.flags&=32767,Sn=o;return}if(o=t.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(t=t.sibling,t!==null)){Sn=t;return}Sn=t=o}while(t!==null);Us=6,Sn=null}function u0(t,s,o,r,f,m,S,L,q){t.cancelPendingCommit=null;do Ou();while(wo!==0);if((In&6)!==0)throw Error(a(327));if(s!==null){if(s===t.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=qr,It(t,o,m,S,L,q),t===cs&&(Sn=cs=null,jn=0),hl=s,Ja=t,Ra=o,dh=m,fh=f,Jg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Z2(ot,function(){return p0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,f=te.p,te.p=2,S=In,In|=4;try{H2(t,s,o)}finally{In=S,te.p=f,z.T=r}}wo=1,d0(),f0(),h0()}}function d0(){if(wo===1){wo=0;var t=Ja,s=hl,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=z.T,z.T=null;var r=te.p;te.p=2;var f=In;In|=4;try{Wg(s,t);var m=Mh,S=xt(t.containerInfo),L=m.focusedElem,q=m.selectionRange;if(S!==L&&L&&L.ownerDocument&&ht(L.ownerDocument.documentElement,L)){if(q!==null&&St(L)){var ge=q.start,Oe=q.end;if(Oe===void 0&&(Oe=ge),"selectionStart"in L)L.selectionStart=ge,L.selectionEnd=Math.min(Oe,L.value.length);else{var Ue=L.ownerDocument||document,ve=Ue&&Ue.defaultView||window;if(ve.getSelection){var je=ve.getSelection(),Tt=L.textContent.length,Gt=Math.min(q.start,Tt),ns=q.end===void 0?Gt:Math.min(q.end,Tt);!je.extend&&Gt>ns&&(S=ns,ns=Gt,Gt=S);var re=zt(L,Gt),ne=zt(L,ns);if(re&&ne&&(je.rangeCount!==1||je.anchorNode!==re.node||je.anchorOffset!==re.offset||je.focusNode!==ne.node||je.focusOffset!==ne.offset)){var _e=Ue.createRange();_e.setStart(re.node,re.offset),je.removeAllRanges(),Gt>ns?(je.addRange(_e),je.extend(ne.node,ne.offset)):(_e.setEnd(ne.node,ne.offset),je.addRange(_e))}}}}for(Ue=[],je=L;je=je.parentNode;)je.nodeType===1&&Ue.push({element:je,left:je.scrollLeft,top:je.scrollTop});for(typeof L.focus=="function"&&L.focus(),L=0;L<Ue.length;L++){var Ie=Ue[L];Ie.element.scrollLeft=Ie.left,Ie.element.scrollTop=Ie.top}}Gu=!!jh,Mh=jh=null}finally{In=f,te.p=r,z.T=o}}t.current=s,wo=2}}function f0(){if(wo===2){wo=0;var t=Ja,s=hl,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=z.T,z.T=null;var r=te.p;te.p=2;var f=In;In|=4;try{Ig(t,s.alternate,s)}finally{In=f,te.p=r,z.T=o}}wo=3}}function h0(){if(wo===4||wo===3){wo=0,He();var t=Ja,s=hl,o=Ra,r=Jg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?wo=5:(wo=0,hl=Ja=null,m0(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Za=null),tn(o),s=s.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(nt,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=z.T,f=te.p,te.p=2,z.T=null;try{for(var m=t.onRecoverableError,S=0;S<r.length;S++){var L=r[S];m(L.value,{componentStack:L.stack})}}finally{z.T=s,te.p=f}}(Ra&3)!==0&&Ou(),ma(t),f=t.pendingLanes,(o&261930)!==0&&(f&42)!==0?t===hh?fc++:(fc=0,hh=t):fc=0,hc(0)}}function m0(t,s){(t.pooledCacheLanes&=s)===0&&(s=t.pooledCache,s!=null&&(t.pooledCache=null,Xl(s)))}function Ou(){return d0(),f0(),h0(),p0()}function p0(){if(wo!==5)return!1;var t=Ja,s=dh;dh=0;var o=tn(Ra),r=z.T,f=te.p;try{te.p=32>o?32:o,z.T=null,o=fh,fh=null;var m=Ja,S=Ra;if(wo=0,hl=Ja=null,Ra=0,(In&6)!==0)throw Error(a(331));var L=In;if(In|=4,Kg(m.current),Xg(m,m.current,S,o),In=L,hc(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(nt,m)}catch{}return!0}finally{te.p=f,z.T=r,m0(t,s)}}function _0(t,s,o){s=Hi(o,s),s=Wf(t.stateNode,s,2),t=Fa(t,s,2),t!==null&&(rt(t,2),ma(t))}function Qn(t,s,o){if(t.tag===3)_0(t,t,o);else for(;s!==null;){if(s.tag===3){_0(s,t,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Za===null||!Za.has(r))){t=Hi(o,t),o=gg(2),r=Fa(s,o,2),r!==null&&(yg(o,r,s,t),rt(r,2),ma(r));break}}s=s.return}}function _h(t,s,o){var r=t.pingCache;if(r===null){r=t.pingCache=new Y2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(lh=!0,f.add(o),t=q2.bind(null,t,s,o),s.then(t,t))}function q2(t,s,o){var r=t.pingCache;r!==null&&r.delete(s),t.pingedLanes|=t.suspendedLanes&o,t.warmLanes&=~o,cs===t&&(jn&o)===o&&(Us===4||Us===3&&(jn&62914560)===jn&&300>ft()-Au?(In&2)===0&&ml(t,0):ch|=o,fl===jn&&(fl=0)),ma(t)}function g0(t,s){s===0&&(s=ct()),t=ua(t,s),t!==null&&(rt(t,s),ma(t))}function K2(t){var s=t.memoizedState,o=0;s!==null&&(o=s.retryLane),g0(t,o)}function Q2(t,s){var o=0;switch(t.tag){case 31:case 13:var r=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),g0(t,o)}function Z2(t,s){return at(t,s)}var zu=null,_l=null,gh=!1,$u=!1,yh=!1,tr=0;function ma(t){t!==_l&&t.next===null&&(_l===null?zu=_l=t:_l=_l.next=t),$u=!0,gh||(gh=!0,ev())}function hc(t,s){if(!yh&&$u){yh=!0;do for(var o=!1,r=zu;r!==null;){if(t!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var S=r.suspendedLanes,L=r.pingedLanes;m=(1<<31-pe(42|t)+1)-1,m&=f&~(S&~L),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,v0(r,m))}else m=jn,m=Ke(r,r===cs?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||Lt(r,m)||(o=!0,v0(r,m));r=r.next}while(o);yh=!1}}function J2(){y0()}function y0(){$u=gh=!1;var t=0;tr!==0&&uv()&&(t=tr);for(var s=ft(),o=null,r=zu;r!==null;){var f=r.next,m=x0(r,s);m===0?(r.next=null,o===null?zu=f:o.next=f,f===null&&(_l=o)):(o=r,(t!==0||(m&3)!==0)&&($u=!0)),r=f}wo!==0&&wo!==5||hc(t),tr!==0&&(tr=0)}function x0(t,s){for(var o=t.suspendedLanes,r=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var S=31-pe(m),L=1<<S,q=f[S];q===-1?((L&o)===0||(L&r)!==0)&&(f[S]=wt(L,s)):q<=s&&(t.expiredLanes|=L),m&=~L}if(s=cs,o=jn,o=Ke(t,t===s?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,o===0||t===s&&(Kn===2||Kn===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Ce(r),t.callbackNode=null,t.callbackPriority=0;if((o&3)===0||Lt(t,o)){if(s=o&-o,s===t.callbackPriority)return s;switch(r!==null&&Ce(r),tn(o)){case 2:case 8:o=Rt;break;case 32:o=ot;break;case 268435456:o=J;break;default:o=ot}return r=b0.bind(null,t),o=at(o,r),t.callbackPriority=s,t.callbackNode=o,s}return r!==null&&r!==null&&Ce(r),t.callbackPriority=2,t.callbackNode=null,2}function b0(t,s){if(wo!==0&&wo!==5)return t.callbackNode=null,t.callbackPriority=0,null;var o=t.callbackNode;if(Ou()&&t.callbackNode!==o)return null;var r=jn;return r=Ke(t,t===cs?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(t0(t,r,s),x0(t,ft()),t.callbackNode!=null&&t.callbackNode===o?b0.bind(null,t):null)}function v0(t,s){if(Ou())return null;t0(t,s,!0)}function ev(){fv(function(){(In&6)!==0?at(jt,J2):y0()})}function xh(){if(tr===0){var t=tl;t===0&&(t=De,De<<=1,(De&261888)===0&&(De=256)),tr=t}return tr}function w0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ns(""+t)}function S0(t,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,t.id&&o.setAttribute("form",t.id),s.parentNode.insertBefore(o,s),t=new FormData(t),o.parentNode.removeChild(o),t}function tv(t,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=w0((f[bn]||null).action),S=r.submitter;S&&(s=(s=S[bn]||null)?w0(s.formAction):S.getAttribute("formAction"),s!==null&&(m=s,S=null));var L=new Eo("action","action",null,r,f);t.push({event:L,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(tr!==0){var q=S?S0(f,S):new FormData(f);Pf(o,{pending:!0,data:q,method:f.method,action:m},null,q)}}else typeof m=="function"&&(L.preventDefault(),q=S?S0(f,S):new FormData(f),Pf(o,{pending:!0,data:q,method:f.method,action:m},m,q))},currentTarget:f}]})}}for(var bh=0;bh<Gr.length;bh++){var vh=Gr[bh],nv=vh.toLowerCase(),sv=vh[0].toUpperCase()+vh.slice(1);pi(nv,"on"+sv)}pi(mi,"onAnimationEnd"),pi(Ei,"onAnimationIteration"),pi(_r,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(Wr,"onTransitionRun"),pi(Fr,"onTransitionStart"),pi(Xr,"onTransitionCancel"),pi(Ul,"onTransitionEnd"),sn("onMouseEnter",["mouseout","mouseover"]),sn("onMouseLeave",["mouseout","mouseover"]),sn("onPointerEnter",["pointerout","pointerover"]),sn("onPointerLeave",["pointerout","pointerover"]),bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bs("onBeforeInput",["compositionend","keypress","textInput","paste"]),bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ov=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mc));function C0(t,s){s=(s&4)!==0;for(var o=0;o<t.length;o++){var r=t[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var S=r.length-1;0<=S;S--){var L=r[S],q=L.instance,ge=L.currentTarget;if(L=L.listener,q!==m&&f.isPropagationStopped())break e;m=L,f.currentTarget=ge;try{m(f)}catch(Oe){gr(Oe)}f.currentTarget=null,m=q}else for(S=0;S<r.length;S++){if(L=r[S],q=L.instance,ge=L.currentTarget,L=L.listener,q!==m&&f.isPropagationStopped())break e;m=L,f.currentTarget=ge;try{m(f)}catch(Oe){gr(Oe)}f.currentTarget=null,m=q}}}}function Cn(t,s){var o=s[ds];o===void 0&&(o=s[ds]=new Set);var r=t+"__bubble";o.has(r)||(k0(s,t,2,!1),o.add(r))}function wh(t,s,o){var r=0;s&&(r|=4),k0(o,t,r,s)}var Pu="_reactListening"+Math.random().toString(36).slice(2);function Sh(t){if(!t[Pu]){t[Pu]=!0,as.forEach(function(o){o!=="selectionchange"&&(ov.has(o)||wh(o,!1,t),wh(o,!0,t))});var s=t.nodeType===9?t:t.ownerDocument;s===null||s[Pu]||(s[Pu]=!0,wh("selectionchange",!1,s))}}function k0(t,s,o,r){switch(ey(s)){case 2:var f=Dv;break;case 8:f=Rv;break;default:f=$h}o=f.bind(null,s,o,t),f=void 0,!zs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?t.addEventListener(s,o,{capture:!0,passive:f}):t.addEventListener(s,o,!0):f!==void 0?t.addEventListener(s,o,{passive:f}):t.addEventListener(s,o,!1)}function Ch(t,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var S=r.tag;if(S===3||S===4){var L=r.stateNode.containerInfo;if(L===f)break;if(S===4)for(S=r.return;S!==null;){var q=S.tag;if((q===3||q===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;L!==null;){if(S=Do(L),S===null)return;if(q=S.tag,q===5||q===6||q===26||q===27){r=m=S;continue e}L=L.parentNode}}r=r.return}jo(function(){var ge=m,Oe=vs(o),Ue=[];e:{var ve=Vl.get(t);if(ve!==void 0){var je=Eo,Tt=t;switch(t){case"keypress":if(so(o)===0)break e;case"keydown":case"keyup":je=Zi;break;case"focusin":Tt="focus",je=ws;break;case"focusout":Tt="blur",je=ws;break;case"beforeblur":case"afterblur":je=ws;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":je=Yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":je=Pi;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":je=ce;break;case mi:case Ei:case _r:je=qn;break;case Ul:je=Ve;break;case"scroll":case"scrollend":je=io;break;case"wheel":je=Yt;break;case"copy":case"cut":case"paste":je=ji;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":je=E;break;case"toggle":case"beforetoggle":je=Ft}var Gt=(s&4)!==0,ns=!Gt&&(t==="scroll"||t==="scrollend"),re=Gt?ve!==null?ve+"Capture":null:ve;Gt=[];for(var ne=ge,_e;ne!==null;){var Ie=ne;if(_e=Ie.stateNode,Ie=Ie.tag,Ie!==5&&Ie!==26&&Ie!==27||_e===null||re===null||(Ie=xn(ne,re),Ie!=null&&Gt.push(pc(ne,Ie,_e))),ns)break;ne=ne.return}0<Gt.length&&(ve=new je(ve,Tt,null,o,Oe),Ue.push({event:ve,listeners:Gt}))}}if((s&7)===0){e:{if(ve=t==="mouseover"||t==="pointerover",je=t==="mouseout"||t==="pointerout",ve&&o!==qo&&(Tt=o.relatedTarget||o.fromElement)&&(Do(Tt)||Tt[tt]))break e;if((je||ve)&&(ve=Oe.window===Oe?Oe:(ve=Oe.ownerDocument)?ve.defaultView||ve.parentWindow:window,je?(Tt=o.relatedTarget||o.toElement,je=ge,Tt=Tt?Do(Tt):null,Tt!==null&&(ns=u(Tt),Gt=Tt.tag,Tt!==ns||Gt!==5&&Gt!==27&&Gt!==6)&&(Tt=null)):(je=null,Tt=ge),je!==Tt)){if(Gt=Yo,Ie="onMouseLeave",re="onMouseEnter",ne="mouse",(t==="pointerout"||t==="pointerover")&&(Gt=E,Ie="onPointerLeave",re="onPointerEnter",ne="pointer"),ns=je==null?ve:Xt(je),_e=Tt==null?ve:Xt(Tt),ve=new Gt(Ie,ne+"leave",je,o,Oe),ve.target=ns,ve.relatedTarget=_e,Ie=null,Do(Oe)===ge&&(Gt=new Gt(re,ne+"enter",Tt,o,Oe),Gt.target=_e,Gt.relatedTarget=ns,Ie=Gt),ns=Ie,je&&Tt)t:{for(Gt=iv,re=je,ne=Tt,_e=0,Ie=re;Ie;Ie=Gt(Ie))_e++;Ie=0;for(var Ut=ne;Ut;Ut=Gt(Ut))Ie++;for(;0<_e-Ie;)re=Gt(re),_e--;for(;0<Ie-_e;)ne=Gt(ne),Ie--;for(;_e--;){if(re===ne||ne!==null&&re===ne.alternate){Gt=re;break t}re=Gt(re),ne=Gt(ne)}Gt=null}else Gt=null;je!==null&&j0(Ue,ve,je,Gt,!1),Tt!==null&&ns!==null&&j0(Ue,ns,Tt,Gt,!0)}}e:{if(ve=ge?Xt(ge):window,je=ve.nodeName&&ve.nodeName.toLowerCase(),je==="select"||je==="input"&&ve.type==="file")var On=v;else if(vo(ve))if(C)On=Re;else{On=ie;var Ot=Z}else je=ve.nodeName,!je||je.toLowerCase()!=="input"||ve.type!=="checkbox"&&ve.type!=="radio"?ge&&Gn(ge.elementType)&&(On=v):On=ue;if(On&&(On=On(t,ge))){fi(Ue,On,o,Oe);break e}Ot&&Ot(t,ve,ge),t==="focusout"&&ge&&ve.type==="number"&&ge.memoizedProps.value!=null&&Ls(ve,"number",ve.value)}switch(Ot=ge?Xt(ge):window,t){case"focusin":(vo(Ot)||Ot.contentEditable==="true")&&(Pt=Ot,Dn=ge,gn=null);break;case"focusout":gn=Dn=Pt=null;break;case"mousedown":Ss=!0;break;case"contextmenu":case"mouseup":case"dragend":Ss=!1,ro(Ue,o,Oe);break;case"selectionchange":if(pt)break;case"keydown":case"keyup":ro(Ue,o,Oe)}var yn;if(vn)e:{switch(t){case"compositionstart":var Mn="onCompositionStart";break e;case"compositionend":Mn="onCompositionEnd";break e;case"compositionupdate":Mn="onCompositionUpdate";break e}Mn=void 0}else gs?nn(t,o)&&(Mn="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Mn="onCompositionStart");Mn&&(_n&&o.locale!=="ko"&&(gs||Mn!=="onCompositionStart"?Mn==="onCompositionEnd"&&gs&&(yn=$i()):(Ds=Oe,Qo="value"in Ds?Ds.value:Ds.textContent,gs=!0)),Ot=Iu(ge,Mn),0<Ot.length&&(Mn=new Bt(Mn,t,null,o,Oe),Ue.push({event:Mn,listeners:Ot}),yn?Mn.data=yn:(yn=_s(o),yn!==null&&(Mn.data=yn)))),(yn=Vn?Lo(t,o):ao(t,o))&&(Mn=Iu(ge,"onBeforeInput"),0<Mn.length&&(Ot=new Bt("onBeforeInput","beforeinput",null,o,Oe),Ue.push({event:Ot,listeners:Mn}),Ot.data=yn)),tv(Ue,t,ge,o,Oe)}C0(Ue,s)})}function pc(t,s,o){return{instance:t,listener:s,currentTarget:o}}function Iu(t,s){for(var o=s+"Capture",r=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=xn(t,o),f!=null&&r.unshift(pc(t,f,m)),f=xn(t,s),f!=null&&r.push(pc(t,f,m))),t.tag===3)return r;t=t.return}return[]}function iv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function j0(t,s,o,r,f){for(var m=s._reactName,S=[];o!==null&&o!==r;){var L=o,q=L.alternate,ge=L.stateNode;if(L=L.tag,q!==null&&q===r)break;L!==5&&L!==26&&L!==27||ge===null||(q=ge,f?(ge=xn(o,m),ge!=null&&S.unshift(pc(o,ge,q))):f||(ge=xn(o,m),ge!=null&&S.push(pc(o,ge,q)))),o=o.return}S.length!==0&&t.push({event:s,listeners:S})}var av=/\r\n?/g,rv=/\u0000|\uFFFD/g;function M0(t){return(typeof t=="string"?t:""+t).replace(av,`
`).replace(rv,"")}function E0(t,s){return s=M0(s),M0(t)===s}function ts(t,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||ps(t,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&ps(t,""+r);break;case"className":Yn(t,"class",r);break;case"tabIndex":Yn(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Yn(t,o,r);break;case"style":ki(t,r,m);break;case"data":if(s!=="object"){Yn(t,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){t.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(o);break}r=Ns(""+r),t.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&ts(t,s,"name",f.name,f,null),ts(t,s,"formEncType",f.formEncType,f,null),ts(t,s,"formMethod",f.formMethod,f,null),ts(t,s,"formTarget",f.formTarget,f,null)):(ts(t,s,"encType",f.encType,f,null),ts(t,s,"method",f.method,f,null),ts(t,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(o);break}r=Ns(""+r),t.setAttribute(o,r);break;case"onClick":r!=null&&(t.onclick=rs);break;case"onScroll":r!=null&&Cn("scroll",t);break;case"onScrollEnd":r!=null&&Cn("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=o}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}o=Ns(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,""+r):t.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,""):t.removeAttribute(o);break;case"capture":case"download":r===!0?t.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,r):t.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(o,r):t.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(o):t.setAttribute(o,r);break;case"popover":Cn("beforetoggle",t),Cn("toggle",t),to(t,"popover",r);break;case"xlinkActuate":Ws(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ws(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ws(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ws(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ws(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ws(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ws(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ws(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ws(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":to(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=zi.get(o)||o,to(t,o,r))}}function kh(t,s,o,r,f,m){switch(o){case"style":ki(t,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=o}}break;case"children":typeof r=="string"?ps(t,r):(typeof r=="number"||typeof r=="bigint")&&ps(t,""+r);break;case"onScroll":r!=null&&Cn("scroll",t);break;case"onScrollEnd":r!=null&&Cn("scrollend",t);break;case"onClick":r!=null&&(t.onclick=rs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xs.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=t[bn]||null,m=m!=null?m[o]:null,typeof m=="function"&&t.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in t?t[o]=null:t.hasAttribute(o)&&t.removeAttribute(o)),t.addEventListener(s,r,f);break e}o in t?t[o]=r:r===!0?t.setAttribute(o,""):to(t,o,r)}}}function Ho(t,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Cn("error",t),Cn("load",t);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var S=o[m];if(S!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ts(t,s,m,S,o,null)}}f&&ts(t,s,"srcSet",o.srcSet,o,null),r&&ts(t,s,"src",o.src,o,null);return;case"input":Cn("invalid",t);var L=m=S=f=null,q=null,ge=null;for(r in o)if(o.hasOwnProperty(r)){var Oe=o[r];if(Oe!=null)switch(r){case"name":f=Oe;break;case"type":S=Oe;break;case"checked":q=Oe;break;case"defaultChecked":ge=Oe;break;case"value":m=Oe;break;case"defaultValue":L=Oe;break;case"children":case"dangerouslySetInnerHTML":if(Oe!=null)throw Error(a(137,s));break;default:ts(t,s,r,Oe,o,null)}}Bn(t,m,L,q,ge,S,f,!1);return;case"select":Cn("invalid",t),r=S=m=null;for(f in o)if(o.hasOwnProperty(f)&&(L=o[f],L!=null))switch(f){case"value":m=L;break;case"defaultValue":S=L;break;case"multiple":r=L;default:ts(t,s,f,L,o,null)}s=m,o=S,t.multiple=!!r,s!=null?Fn(t,!!r,s,!1):o!=null&&Fn(t,!!r,o,!0);return;case"textarea":Cn("invalid",t),m=f=r=null;for(S in o)if(o.hasOwnProperty(S)&&(L=o[S],L!=null))switch(S){case"value":r=L;break;case"defaultValue":f=L;break;case"children":m=L;break;case"dangerouslySetInnerHTML":if(L!=null)throw Error(a(91));break;default:ts(t,s,S,L,o,null)}ci(t,r,f,m);return;case"option":for(q in o)if(o.hasOwnProperty(q)&&(r=o[q],r!=null))switch(q){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ts(t,s,q,r,o,null)}return;case"dialog":Cn("beforetoggle",t),Cn("toggle",t),Cn("cancel",t),Cn("close",t);break;case"iframe":case"object":Cn("load",t);break;case"video":case"audio":for(r=0;r<mc.length;r++)Cn(mc[r],t);break;case"image":Cn("error",t),Cn("load",t);break;case"details":Cn("toggle",t);break;case"embed":case"source":case"link":Cn("error",t),Cn("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ge in o)if(o.hasOwnProperty(ge)&&(r=o[ge],r!=null))switch(ge){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ts(t,s,ge,r,o,null)}return;default:if(Gn(s)){for(Oe in o)o.hasOwnProperty(Oe)&&(r=o[Oe],r!==void 0&&kh(t,s,Oe,r,o,void 0));return}}for(L in o)o.hasOwnProperty(L)&&(r=o[L],r!=null&&ts(t,s,L,r,o,null))}function lv(t,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,S=null,L=null,q=null,ge=null,Oe=null;for(je in o){var Ue=o[je];if(o.hasOwnProperty(je)&&Ue!=null)switch(je){case"checked":break;case"value":break;case"defaultValue":q=Ue;default:r.hasOwnProperty(je)||ts(t,s,je,null,r,Ue)}}for(var ve in r){var je=r[ve];if(Ue=o[ve],r.hasOwnProperty(ve)&&(je!=null||Ue!=null))switch(ve){case"type":m=je;break;case"name":f=je;break;case"checked":ge=je;break;case"defaultChecked":Oe=je;break;case"value":S=je;break;case"defaultValue":L=je;break;case"children":case"dangerouslySetInnerHTML":if(je!=null)throw Error(a(137,s));break;default:je!==Ue&&ts(t,s,ve,je,r,Ue)}}Xs(t,S,L,q,ge,Oe,m,f);return;case"select":je=S=L=ve=null;for(m in o)if(q=o[m],o.hasOwnProperty(m)&&q!=null)switch(m){case"value":break;case"multiple":je=q;default:r.hasOwnProperty(m)||ts(t,s,m,null,r,q)}for(f in r)if(m=r[f],q=o[f],r.hasOwnProperty(f)&&(m!=null||q!=null))switch(f){case"value":ve=m;break;case"defaultValue":L=m;break;case"multiple":S=m;default:m!==q&&ts(t,s,f,m,r,q)}s=L,o=S,r=je,ve!=null?Fn(t,!!o,ve,!1):!!r!=!!o&&(s!=null?Fn(t,!!o,s,!0):Fn(t,!!o,o?[]:"",!1));return;case"textarea":je=ve=null;for(L in o)if(f=o[L],o.hasOwnProperty(L)&&f!=null&&!r.hasOwnProperty(L))switch(L){case"value":break;case"children":break;default:ts(t,s,L,null,r,f)}for(S in r)if(f=r[S],m=o[S],r.hasOwnProperty(S)&&(f!=null||m!=null))switch(S){case"value":ve=f;break;case"defaultValue":je=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&ts(t,s,S,f,r,m)}Xn(t,ve,je);return;case"option":for(var Tt in o)if(ve=o[Tt],o.hasOwnProperty(Tt)&&ve!=null&&!r.hasOwnProperty(Tt))switch(Tt){case"selected":t.selected=!1;break;default:ts(t,s,Tt,null,r,ve)}for(q in r)if(ve=r[q],je=o[q],r.hasOwnProperty(q)&&ve!==je&&(ve!=null||je!=null))switch(q){case"selected":t.selected=ve&&typeof ve!="function"&&typeof ve!="symbol";break;default:ts(t,s,q,ve,r,je)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Gt in o)ve=o[Gt],o.hasOwnProperty(Gt)&&ve!=null&&!r.hasOwnProperty(Gt)&&ts(t,s,Gt,null,r,ve);for(ge in r)if(ve=r[ge],je=o[ge],r.hasOwnProperty(ge)&&ve!==je&&(ve!=null||je!=null))switch(ge){case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,s));break;default:ts(t,s,ge,ve,r,je)}return;default:if(Gn(s)){for(var ns in o)ve=o[ns],o.hasOwnProperty(ns)&&ve!==void 0&&!r.hasOwnProperty(ns)&&kh(t,s,ns,void 0,r,ve);for(Oe in r)ve=r[Oe],je=o[Oe],!r.hasOwnProperty(Oe)||ve===je||ve===void 0&&je===void 0||kh(t,s,Oe,ve,r,je);return}}for(var re in o)ve=o[re],o.hasOwnProperty(re)&&ve!=null&&!r.hasOwnProperty(re)&&ts(t,s,re,null,r,ve);for(Ue in r)ve=r[Ue],je=o[Ue],!r.hasOwnProperty(Ue)||ve===je||ve==null&&je==null||ts(t,s,Ue,ve,r,je)}function T0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,S=f.initiatorType,L=f.duration;if(m&&L&&T0(S)){for(S=0,L=f.responseEnd,r+=1;r<o.length;r++){var q=o[r],ge=q.startTime;if(ge>L)break;var Oe=q.transferSize,Ue=q.initiatorType;Oe&&T0(Ue)&&(q=q.responseEnd,S+=Oe*(q<L?1:(L-ge)/(q-ge)))}if(--r,s+=8*(m+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return s/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var jh=null,Mh=null;function Hu(t){return t.nodeType===9?t:t.ownerDocument}function A0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function N0(t,s){if(t===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&s==="foreignObject"?0:t}function Eh(t,s){return t==="textarea"||t==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Th=null;function uv(){var t=window.event;return t&&t.type==="popstate"?t===Th?!1:(Th=t,!0):(Th=null,!1)}var D0=typeof setTimeout=="function"?setTimeout:void 0,dv=typeof clearTimeout=="function"?clearTimeout:void 0,R0=typeof Promise=="function"?Promise:void 0,fv=typeof queueMicrotask=="function"?queueMicrotask:typeof R0<"u"?function(t){return R0.resolve(null).then(t).catch(hv)}:D0;function hv(t){setTimeout(function(){throw t})}function nr(t){return t==="head"}function B0(t,s){var o=s,r=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){t.removeChild(f),bl(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")_c(t.ownerDocument.documentElement);else if(o==="head"){o=t.ownerDocument.head,_c(o);for(var m=o.firstChild;m;){var S=m.nextSibling,L=m.nodeName;m[Co]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=S}}else o==="body"&&_c(t.ownerDocument.body);o=f}while(o);bl(s)}function L0(t,s){var o=t;t=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(t===0)break;t--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||t++;o=r}while(o)}function Ah(t){var s=t.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Ah(o),po(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}t.removeChild(o)}}function mv(t,s,o,r){for(;t.nodeType===1;){var f=o;if(t.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Co])switch(s){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(s==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Fi(t.nextSibling),t===null)break}return null}function pv(t,s,o){if(s==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!o||(t=Fi(t.nextSibling),t===null))return null;return t}function O0(t,s){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Fi(t.nextSibling),t===null))return null;return t}function Nh(t){return t.data==="$?"||t.data==="$~"}function Dh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function _v(t,s){var o=t.ownerDocument;if(t.data==="$~")t._reactRetry=s;else if(t.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Fi(t){for(;t!=null;t=t.nextSibling){var s=t.nodeType;if(s===1||s===3)break;if(s===8){if(s=t.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return t}var Rh=null;function z0(t){t=t.nextSibling;for(var s=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"||o==="/&"){if(s===0)return Fi(t.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}t=t.nextSibling}return null}function $0(t){t=t.previousSibling;for(var s=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return t;s--}else o!=="/$"&&o!=="/&"||s++}t=t.previousSibling}return null}function P0(t,s,o){switch(s=Hu(o),t){case"html":if(t=s.documentElement,!t)throw Error(a(452));return t;case"head":if(t=s.head,!t)throw Error(a(453));return t;case"body":if(t=s.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function _c(t){for(var s=t.attributes;s.length;)t.removeAttributeNode(s[0]);po(t)}var Xi=new Map,I0=new Set;function Uu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ba=te.d;te.d={f:gv,r:yv,D:xv,C:bv,L:vv,m:wv,X:Cv,S:Sv,M:kv};function gv(){var t=Ba.f(),s=Ru();return t||s}function yv(t){var s=is(t);s!==null&&s.tag===5&&s.type==="form"?sg(s):Ba.r(t)}var gl=typeof document>"u"?null:document;function H0(t,s,o){var r=gl;if(r&&typeof s=="string"&&s){var f=ms(s);f='link[rel="'+t+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),I0.has(f)||(I0.add(f),t={rel:t,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),Ho(s,"link",t),en(s),r.head.appendChild(s)))}}function xv(t){Ba.D(t),H0("dns-prefetch",t,null)}function bv(t,s){Ba.C(t,s),H0("preconnect",t,s)}function vv(t,s,o){Ba.L(t,s,o);var r=gl;if(r&&t&&s){var f='link[rel="preload"][as="'+ms(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+ms(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+ms(o.imageSizes)+'"]')):f+='[href="'+ms(t)+'"]';var m=f;switch(s){case"style":m=yl(t);break;case"script":m=xl(t)}Xi.has(m)||(t=b({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:t,as:s},o),Xi.set(m,t),r.querySelector(f)!==null||s==="style"&&r.querySelector(gc(m))||s==="script"&&r.querySelector(yc(m))||(s=r.createElement("link"),Ho(s,"link",t),en(s),r.head.appendChild(s)))}}function wv(t,s){Ba.m(t,s);var o=gl;if(o&&t){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+ms(r)+'"][href="'+ms(t)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=xl(t)}if(!Xi.has(m)&&(t=b({rel:"modulepreload",href:t},s),Xi.set(m,t),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(yc(m)))return}r=o.createElement("link"),Ho(r,"link",t),en(r),o.head.appendChild(r)}}}function Sv(t,s,o){Ba.S(t,s,o);var r=gl;if(r&&t){var f=Rn(r).hoistableStyles,m=yl(t);s=s||"default";var S=f.get(m);if(!S){var L={loading:0,preload:null};if(S=r.querySelector(gc(m)))L.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":s},o),(o=Xi.get(m))&&Bh(t,o);var q=S=r.createElement("link");en(q),Ho(q,"link",t),q._p=new Promise(function(ge,Oe){q.onload=ge,q.onerror=Oe}),q.addEventListener("load",function(){L.loading|=1}),q.addEventListener("error",function(){L.loading|=2}),L.loading|=4,Vu(S,s,r)}S={type:"stylesheet",instance:S,count:1,state:L},f.set(m,S)}}}function Cv(t,s){Ba.X(t,s);var o=gl;if(o&&t){var r=Rn(o).hoistableScripts,f=xl(t),m=r.get(f);m||(m=o.querySelector(yc(f)),m||(t=b({src:t,async:!0},s),(s=Xi.get(f))&&Lh(t,s),m=o.createElement("script"),en(m),Ho(m,"link",t),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function kv(t,s){Ba.M(t,s);var o=gl;if(o&&t){var r=Rn(o).hoistableScripts,f=xl(t),m=r.get(f);m||(m=o.querySelector(yc(f)),m||(t=b({src:t,async:!0,type:"module"},s),(s=Xi.get(f))&&Lh(t,s),m=o.createElement("script"),en(m),Ho(m,"link",t),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function U0(t,s,o,r){var f=(f=he.current)?Uu(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=yl(o.href),o=Rn(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){t=yl(o.href);var m=Rn(f).hoistableStyles,S=m.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,S),(m=f.querySelector(gc(t)))&&!m._p&&(S.instance=m,S.state.loading=5),Xi.has(t)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Xi.set(t,o),m||jv(f,t,o,S.state))),s&&r===null)throw Error(a(528,""));return S}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=xl(o),o=Rn(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function yl(t){return'href="'+ms(t)+'"'}function gc(t){return'link[rel="stylesheet"]['+t+"]"}function V0(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function jv(t,s,o,r){t.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=t.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),Ho(s,"link",o),en(s),t.head.appendChild(s))}function xl(t){return'[src="'+ms(t)+'"]'}function yc(t){return"script[async]"+t}function Y0(t,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=t.querySelector('style[data-href~="'+ms(o.href)+'"]');if(r)return s.instance=r,en(r),r;var f=b({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),en(r),Ho(r,"style",f),Vu(r,o.precedence,t),s.instance=r;case"stylesheet":f=yl(o.href);var m=t.querySelector(gc(f));if(m)return s.state.loading|=4,s.instance=m,en(m),m;r=V0(o),(f=Xi.get(f))&&Bh(r,f),m=(t.ownerDocument||t).createElement("link"),en(m);var S=m;return S._p=new Promise(function(L,q){S.onload=L,S.onerror=q}),Ho(m,"link",r),s.state.loading|=4,Vu(m,o.precedence,t),s.instance=m;case"script":return m=xl(o.src),(f=t.querySelector(yc(m)))?(s.instance=f,en(f),f):(r=o,(f=Xi.get(m))&&(r=b({},o),Lh(r,f)),t=t.ownerDocument||t,f=t.createElement("script"),en(f),Ho(f,"link",r),t.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Vu(r,o.precedence,t));return s.instance}function Vu(t,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,S=0;S<r.length;S++){var L=r[S];if(L.dataset.precedence===s)m=L;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(t,s.firstChild))}function Bh(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.title==null&&(t.title=s.title)}function Lh(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.integrity==null&&(t.integrity=s.integrity)}var Yu=null;function W0(t,s,o){if(Yu===null){var r=new Map,f=Yu=new Map;f.set(o,r)}else f=Yu,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(t))return r;for(r.set(t,null),o=o.getElementsByTagName(t),f=0;f<o.length;f++){var m=o[f];if(!(m[Co]||m[At]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(s)||"";S=t+S;var L=r.get(S);L?L.push(m):r.set(S,[m])}}return r}function F0(t,s,o){t=t.ownerDocument||t,t.head.insertBefore(o,s==="title"?t.querySelector("head > title"):null)}function Mv(t,s,o){if(o===1||s.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return t=s.disabled,typeof s.precedence=="string"&&t==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function X0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ev(t,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=yl(r.href),m=s.querySelector(gc(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(t.count++,t=Wu.bind(t),s.then(t,t)),o.state.loading|=4,o.instance=m,en(m);return}m=s.ownerDocument||s,r=V0(r),(f=Xi.get(f))&&Bh(r,f),m=m.createElement("link"),en(m);var S=m;S._p=new Promise(function(L,q){S.onload=L,S.onerror=q}),Ho(m,"link",r),o.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(t.count++,o=Wu.bind(t),s.addEventListener("load",o),s.addEventListener("error",o))}}var Oh=0;function Tv(t,s){return t.stylesheets&&t.count===0&&Xu(t,t.stylesheets),0<t.count||0<t.imgCount?function(o){var r=setTimeout(function(){if(t.stylesheets&&Xu(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+s);0<t.imgBytes&&Oh===0&&(Oh=62500*cv());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xu(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>Oh?50:800)+s);return t.unsuspend=o,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Wu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fu=null;function Xu(t,s){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fu=new Map,s.forEach(Av,t),Fu=null,Wu.call(t))}function Av(t,s){if(!(s.state.loading&4)){var o=Fu.get(t);if(o)var r=o.get(null);else{o=new Map,Fu.set(t,o);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var S=f[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(o.set(S.dataset.precedence,S),r=S)}r&&o.set(null,r)}f=s.instance,S=f.getAttribute("data-precedence"),m=o.get(S)||r,m===r&&o.set(null,f),o.set(S,f),this.count++,r=Wu.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),s.state.loading|=4}}var xc={$$typeof:O,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Nv(t,s,o,r,f,m,S,L,q){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cn(0),this.hiddenUpdates=cn(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=q,this.incompleteTransitions=new Map}function G0(t,s,o,r,f,m,S,L,q,ge,Oe,Ue){return t=new Nv(t,s,o,S,q,ge,Oe,Ue,L),s=1,m===!0&&(s|=24),m=Jn(3,null,null,s),t.current=m,m.stateNode=t,s=pf(),s.refCount++,t.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},xf(m),t}function q0(t){return t?(t=dn,t):dn}function K0(t,s,o,r,f,m){f=q0(f),r.context===null?r.context=f:r.pendingContext=f,r=Wa(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Fa(t,r,s),o!==null&&(vi(o,t,s),Ql(o,t,s))}function Q0(t,s){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<s?o:s}}function zh(t,s){Q0(t,s),(t=t.alternate)&&Q0(t,s)}function Z0(t){if(t.tag===13||t.tag===31){var s=ua(t,67108864);s!==null&&vi(s,t,67108864),zh(t,67108864)}}function J0(t){if(t.tag===13||t.tag===31){var s=Bi();s=un(s);var o=ua(t,s);o!==null&&vi(o,t,s),zh(t,s)}}var Gu=!0;function Dv(t,s,o,r){var f=z.T;z.T=null;var m=te.p;try{te.p=2,$h(t,s,o,r)}finally{te.p=m,z.T=f}}function Rv(t,s,o,r){var f=z.T;z.T=null;var m=te.p;try{te.p=8,$h(t,s,o,r)}finally{te.p=m,z.T=f}}function $h(t,s,o,r){if(Gu){var f=Ph(r);if(f===null)Ch(t,s,r,qu,o),ty(t,r);else if(Lv(f,t,s,o,r))r.stopPropagation();else if(ty(t,r),s&4&&-1<Bv.indexOf(t)){for(;f!==null;){var m=is(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=gt(m.pendingLanes);if(S!==0){var L=m;for(L.pendingLanes|=2,L.entangledLanes|=2;S;){var q=1<<31-pe(S);L.entanglements[1]|=q,S&=~q}ma(m),(In&6)===0&&(Nu=ft()+500,hc(0))}}break;case 31:case 13:L=ua(m,2),L!==null&&vi(L,m,2),Ru(),zh(m,2)}if(m=Ph(r),m===null&&Ch(t,s,r,qu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else Ch(t,s,r,null,o)}}function Ph(t){return t=vs(t),Ih(t)}var qu=null;function Ih(t){if(qu=null,t=Do(t),t!==null){var s=u(t);if(s===null)t=null;else{var o=s.tag;if(o===13){if(t=d(s),t!==null)return t;t=null}else if(o===31){if(t=h(s),t!==null)return t;t=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;t=null}else s!==t&&(t=null)}}return qu=t,null}function ey(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(mt()){case jt:return 2;case Rt:return 8;case ot:case V:return 32;case J:return 268435456;default:return 32}default:return 32}}var Hh=!1,sr=null,or=null,ir=null,bc=new Map,vc=new Map,ar=[],Bv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ty(t,s){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":bc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":vc.delete(s.pointerId)}}function wc(t,s,o,r,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=is(s),s!==null&&Z0(s)),t):(t.eventSystemFlags|=r,s=t.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),t)}function Lv(t,s,o,r,f){switch(s){case"focusin":return sr=wc(sr,t,s,o,r,f),!0;case"dragenter":return or=wc(or,t,s,o,r,f),!0;case"mouseover":return ir=wc(ir,t,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return bc.set(m,wc(bc.get(m)||null,t,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,vc.set(m,wc(vc.get(m)||null,t,s,o,r,f)),!0}return!1}function ny(t){var s=Do(t.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){t.blockedOn=s,$t(t.priority,function(){J0(o)});return}}else if(s===31){if(s=h(o),s!==null){t.blockedOn=s,$t(t.priority,function(){J0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ku(t){if(t.blockedOn!==null)return!1;for(var s=t.targetContainers;0<s.length;){var o=Ph(t.nativeEvent);if(o===null){o=t.nativeEvent;var r=new o.constructor(o.type,o);qo=r,o.target.dispatchEvent(r),qo=null}else return s=is(o),s!==null&&Z0(s),t.blockedOn=o,!1;s.shift()}return!0}function sy(t,s,o){Ku(t)&&o.delete(s)}function Ov(){Hh=!1,sr!==null&&Ku(sr)&&(sr=null),or!==null&&Ku(or)&&(or=null),ir!==null&&Ku(ir)&&(ir=null),bc.forEach(sy),vc.forEach(sy)}function Qu(t,s){t.blockedOn===s&&(t.blockedOn=null,Hh||(Hh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ov)))}var Zu=null;function oy(t){Zu!==t&&(Zu=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Zu===t&&(Zu=null);for(var s=0;s<t.length;s+=3){var o=t[s],r=t[s+1],f=t[s+2];if(typeof r!="function"){if(Ih(r||o)===null)continue;break}var m=is(o);m!==null&&(t.splice(s,3),s-=3,Pf(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function bl(t){function s(q){return Qu(q,t)}sr!==null&&Qu(sr,t),or!==null&&Qu(or,t),ir!==null&&Qu(ir,t),bc.forEach(s),vc.forEach(s);for(var o=0;o<ar.length;o++){var r=ar[o];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ar.length&&(o=ar[0],o.blockedOn===null);)ny(o),o.blockedOn===null&&ar.shift();if(o=(t.ownerDocument||t).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],S=f[bn]||null;if(typeof m=="function")S||oy(o);else if(S){var L=null;if(m&&m.hasAttribute("formAction")){if(f=m,S=m[bn]||null)L=S.formAction;else if(Ih(f)!==null)continue}else L=S.action;typeof L=="function"?o[r+1]=L:(o.splice(r,3),r-=3),oy(o)}}}function iy(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Uh(t){this._internalRoot=t}Ju.prototype.render=Uh.prototype.render=function(t){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=Bi();K0(o,r,t,s,null,null)},Ju.prototype.unmount=Uh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var s=t.containerInfo;K0(t.current,2,null,t,null,null),Ru(),s[tt]=null}};function Ju(t){this._internalRoot=t}Ju.prototype.unstable_scheduleHydration=function(t){if(t){var s=Qt();t={blockedOn:null,target:t,priority:s};for(var o=0;o<ar.length&&s!==0&&s<ar[o].priority;o++);ar.splice(o,0,t),o===0&&ny(t)}};var ay=n.version;if(ay!=="19.2.4")throw Error(a(527,ay,"19.2.4"));te.findDOMNode=function(t){var s=t._reactInternals;if(s===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=y(s),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var zv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ed=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ed.isDisabled&&ed.supportsFiber)try{nt=ed.inject(zv),Ge=ed}catch{}}return Cc.createRoot=function(t,s){if(!c(t))throw Error(a(299));var o=!1,r="",f=hg,m=mg,S=pg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(S=s.onRecoverableError)),s=G0(t,1,!1,null,null,o,r,null,f,m,S,iy),t[tt]=s.current,Sh(t),new Uh(s)},Cc.hydrateRoot=function(t,s,o){if(!c(t))throw Error(a(299));var r=!1,f="",m=hg,S=mg,L=pg,q=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(S=o.onCaughtError),o.onRecoverableError!==void 0&&(L=o.onRecoverableError),o.formState!==void 0&&(q=o.formState)),s=G0(t,1,!0,s,o!=null?o:null,r,f,q,m,S,L,iy),s.context=q0(null),o=s.current,r=Bi(),r=un(r),f=Wa(r),f.callback=null,Fa(o,f,r),o=r,s.current.lanes=o,rt(s,o),ma(s),t[tt]=s.current,Sh(t),new Ju(s)},Cc.version="19.2.4",Cc}var _y;function Fv(){if(_y)return Yh.exports;_y=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Yh.exports=Wv(),Yh.exports}var Xv=Fv();const Gv=Vx(Xv);var _=xp();const qv=Vx(_);function Kv(e,n,i,a){if(typeof n=="function"?e!==n||!a:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(e):a?a.value:n.get(e)}function Qv(e,n,i,a,c){if(typeof n=="function"?e!==n||!0:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(e,i),i}var Md;const Qi="__TAURI_TO_IPC_KEY__";function Zv(e,n=!1){return window.__TAURI_INTERNALS__.transformCallback(e,n)}async function ye(e,n={},i){return window.__TAURI_INTERNALS__.invoke(e,n,i)}class Jv{get rid(){return Kv(this,Md,"f")}constructor(n){Md.set(this,void 0),Qv(this,Md,n)}async close(){return ye("plugin:resources|close",{rid:this.rid})}}Md=new WeakMap;var Li;(function(e){e.WINDOW_RESIZED="tauri://resize",e.WINDOW_MOVED="tauri://move",e.WINDOW_CLOSE_REQUESTED="tauri://close-requested",e.WINDOW_DESTROYED="tauri://destroyed",e.WINDOW_FOCUS="tauri://focus",e.WINDOW_BLUR="tauri://blur",e.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",e.WINDOW_THEME_CHANGED="tauri://theme-changed",e.WINDOW_CREATED="tauri://window-created",e.WEBVIEW_CREATED="tauri://webview-created",e.DRAG_ENTER="tauri://drag-enter",e.DRAG_OVER="tauri://drag-over",e.DRAG_DROP="tauri://drag-drop",e.DRAG_LEAVE="tauri://drag-leave"})(Li||(Li={}));async function Wx(e,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e,n),await ye("plugin:event|unlisten",{event:e,eventId:n})}async function $c(e,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return ye("plugin:event|listen",{event:e,target:c,handler:Zv(n)}).then(u=>async()=>Wx(e,u))}async function ew(e,n,i){return $c(e,a=>{Wx(e,a.id),n(a)},i)}async function tw(e,n){await ye("plugin:event|emit",{event:e,payload:n})}async function nw(e,n,i){await ye("plugin:event|emit_to",{target:typeof e=="string"?{kind:"AnyLabel",label:e}:e,event:n,payload:i})}class Fx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new Pc(this.width*n,this.height*n)}[Qi](){return{width:this.width,height:this.height}}toJSON(){return this[Qi]()}}class Pc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Fx(this.width/n,this.height/n)}[Qi](){return{width:this.width,height:this.height}}toJSON(){return this[Qi]()}}class vl{constructor(n){this.size=n}toLogical(n){return this.size instanceof Fx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof Pc?this.size:this.size.toPhysical(n)}[Qi](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[Qi]()}}class Xx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new dr(this.x*n,this.y*n)}[Qi](){return{x:this.x,y:this.y}}toJSON(){return this[Qi]()}}class dr{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Xx(this.x/n,this.y/n)}[Qi](){return{x:this.x,y:this.y}}toJSON(){return this[Qi]()}}class td{constructor(n){this.position=n}toLogical(n){return this.position instanceof Xx?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof dr?this.position:this.position.toPhysical(n)}[Qi](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[Qi]()}}class Ic extends Jv{constructor(n){super(n)}static async new(n,i,a){return ye("plugin:image|new",{rgba:$d(n),width:i,height:a}).then(c=>new Ic(c))}static async fromBytes(n){return ye("plugin:image|from_bytes",{bytes:$d(n)}).then(i=>new Ic(i))}static async fromPath(n){return ye("plugin:image|from_path",{path:n}).then(i=>new Ic(i))}async rgba(){return ye("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return ye("plugin:image|size",{rid:this.rid})}}function $d(e){return e==null?null:typeof e=="string"?e:e instanceof Ic?e.rid:e}var Om;(function(e){e[e.Critical=1]="Critical",e[e.Informational=2]="Informational"})(Om||(Om={}));class sw{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var gy;(function(e){e.None="none",e.Normal="normal",e.Indeterminate="indeterminate",e.Paused="paused",e.Error="error"})(gy||(gy={}));function bp(){return new Gx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function qh(){return ye("plugin:window|get_all_windows").then(e=>e.map(n=>new Gx(n,{skip:!0})))}const Kh=["tauri://created","tauri://error"];class Gx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||ye("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await qh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return bp()}static async getAll(){return qh()}static async getFocusedWindow(){for(const n of await qh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:$c(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:ew(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Kh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return tw(n,i)}async emitTo(n,i,a){if(Kh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return nw(n,i,a)}_handleTauriEvent(n,i){return Kh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return ye("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return ye("plugin:window|inner_position",{label:this.label}).then(n=>new dr(n))}async outerPosition(){return ye("plugin:window|outer_position",{label:this.label}).then(n=>new dr(n))}async innerSize(){return ye("plugin:window|inner_size",{label:this.label}).then(n=>new Pc(n))}async outerSize(){return ye("plugin:window|outer_size",{label:this.label}).then(n=>new Pc(n))}async isFullscreen(){return ye("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return ye("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return ye("plugin:window|is_maximized",{label:this.label})}async isFocused(){return ye("plugin:window|is_focused",{label:this.label})}async isDecorated(){return ye("plugin:window|is_decorated",{label:this.label})}async isResizable(){return ye("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return ye("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return ye("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return ye("plugin:window|is_closable",{label:this.label})}async isVisible(){return ye("plugin:window|is_visible",{label:this.label})}async title(){return ye("plugin:window|title",{label:this.label})}async theme(){return ye("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return ye("plugin:window|is_always_on_top",{label:this.label})}async center(){return ye("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===Om.Critical?i={type:"Critical"}:i={type:"Informational"}),ye("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return ye("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return ye("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return ye("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return ye("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return ye("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return ye("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return ye("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return ye("plugin:window|maximize",{label:this.label})}async unmaximize(){return ye("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return ye("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return ye("plugin:window|minimize",{label:this.label})}async unminimize(){return ye("plugin:window|unminimize",{label:this.label})}async show(){return ye("plugin:window|show",{label:this.label})}async hide(){return ye("plugin:window|hide",{label:this.label})}async close(){return ye("plugin:window|close",{label:this.label})}async destroy(){return ye("plugin:window|destroy",{label:this.label})}async setDecorations(n){return ye("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return ye("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return ye("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return ye("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return ye("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return ye("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return ye("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return ye("plugin:window|set_size",{label:this.label,value:n instanceof vl?n:new vl(n)})}async setMinSize(n){return ye("plugin:window|set_min_size",{label:this.label,value:n instanceof vl?n:n?new vl(n):null})}async setMaxSize(n){return ye("plugin:window|set_max_size",{label:this.label,value:n instanceof vl?n:n?new vl(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return ye("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return ye("plugin:window|set_position",{label:this.label,value:n instanceof td?n:new td(n)})}async setFullscreen(n){return ye("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return ye("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return ye("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return ye("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return ye("plugin:window|set_icon",{label:this.label,value:$d(n)})}async setSkipTaskbar(n){return ye("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return ye("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return ye("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return ye("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return ye("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return ye("plugin:window|set_cursor_position",{label:this.label,value:n instanceof td?n:new td(n)})}async setIgnoreCursorEvents(n){return ye("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return ye("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return ye("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return ye("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return ye("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return ye("plugin:window|set_overlay_icon",{label:this.label,value:n?$d(n):void 0})}async setProgressBar(n){return ye("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return ye("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return ye("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return ye("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(Li.WINDOW_RESIZED,i=>{i.payload=new Pc(i.payload),n(i)})}async onMoved(n){return this.listen(Li.WINDOW_MOVED,i=>{i.payload=new dr(i.payload),n(i)})}async onCloseRequested(n){return this.listen(Li.WINDOW_CLOSE_REQUESTED,async i=>{const a=new sw(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(Li.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new dr(d.payload.position)}})}),a=await this.listen(Li.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new dr(d.payload.position)}})}),c=await this.listen(Li.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new dr(d.payload.position)}})}),u=await this.listen(Li.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(Li.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(Li.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(Li.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(Li.WINDOW_THEME_CHANGED,n)}}var yy;(function(e){e.Disabled="disabled",e.Throttle="throttle",e.Suspend="suspend"})(yy||(yy={}));var xy;(function(e){e.Default="default",e.FluentOverlay="fluentOverlay"})(xy||(xy={}));var by;(function(e){e.AppearanceBased="appearanceBased",e.Light="light",e.Dark="dark",e.MediumLight="mediumLight",e.UltraDark="ultraDark",e.Titlebar="titlebar",e.Selection="selection",e.Menu="menu",e.Popover="popover",e.Sidebar="sidebar",e.HeaderView="headerView",e.Sheet="sheet",e.WindowBackground="windowBackground",e.HudWindow="hudWindow",e.FullScreenUI="fullScreenUI",e.Tooltip="tooltip",e.ContentBackground="contentBackground",e.UnderWindowBackground="underWindowBackground",e.UnderPageBackground="underPageBackground",e.Mica="mica",e.Blur="blur",e.Acrylic="acrylic",e.Tabbed="tabbed",e.TabbedDark="tabbedDark",e.TabbedLight="tabbedLight"})(by||(by={}));var vy;(function(e){e.FollowsWindowActiveState="followsWindowActiveState",e.Active="active",e.Inactive="inactive"})(vy||(vy={}));async function ow(e={}){return typeof e=="object"&&Object.freeze(e),await ye("plugin:dialog|open",{options:e})}/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=(...e)=>e.filter((n,i,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===i).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,i,a)=>a?a.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=e=>{const n=aw(e);return n.charAt(0).toUpperCase()+n.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=_.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:u,iconNode:d,...h},p)=>_.createElement("svg",{ref:p,...rw,width:n,height:n,stroke:e,strokeWidth:a?Number(i)*24/Number(n):i,className:qx("lucide",c),...!u&&!lw(h)&&{"aria-hidden":"true"},...h},[...d.map(([y,g])=>_.createElement(y,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=(e,n)=>{const i=_.forwardRef(({className:a,...c},u)=>_.createElement(cw,{ref:u,iconNode:n,className:qx(`lucide-${iw(wy(e))}`,`lucide-${e}`,a),...c}));return i.displayName=wy(e),i};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Kx=la("chevron-down",uw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],fw=la("chevron-right",dw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],mw=la("chevron-up",hw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],_w=la("ellipsis",pw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],yw=la("folder-git-2",gw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],Qx=la("git-branch-plus",xw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],vw=la("git-commit-horizontal",bw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],Zx=la("git-merge",ww);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],Cw=la("panel-left-close",Sw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],jw=la("panel-left-open",kw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Ew=la("search",Mw),Tw=3.7,nd=200,zm=240,$n=540,Vs=176,Qh=32,Ol=20,Aw=zm/2,wl=$n+Aw,La=18,Oa=18,Zh="var(--border)";function Sy(e){var n,i;return{start:new Date((i=(n=e.createdDate)!=null?n:e.divergedFromDate)!=null?i:e.lastCommitDate).getTime(),end:new Date(e.lastCommitDate).getTime()}}function $r(e,n){var a,c,u,d;const i="branch"in n&&n.branch?n.branch:e;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,parentShas:"parentShas"in n?(a=n.parentShas)!=null?a:[]:n.parentSha?[n.parentSha]:[],childShas:"childShas"in n?(c=n.childShas)!=null?c:[]:[],clusterKey:"clusterKey"in n&&(u=n.clusterKey)!=null?u:null,kind:n.kind,isRemote:(d=n.isRemote)!=null?d:!1}}function za(e){var n,i;return(i=(n=e.id)!=null?n:e.fullSha)!=null?i:""}function Oc(e,n){const i=new Date(e.date).getTime()-new Date(n.date).getTime();return i!==0?i:za(e).localeCompare(za(n))}function Jx(e){return[...e].sort(Oc)}function Nw(e){var h,p,y,g,b,w;if(e.length<=1)return[...e];const n=new Map(e.map(k=>[za(k),k])),i=new Map,a=new Map;e.forEach(k=>i.set(za(k),0));for(const k of e){const M=((h=k.parentShas)!=null?h:[]).length>0?(p=k.parentShas)!=null?p:[]:k.parentSha?[k.parentSha]:[];for(const A of M){if(!A||!n.has(A))continue;const T=za(k);i.set(T,((y=i.get(T))!=null?y:0)+1);const D=(g=a.get(A))!=null?g:[];D.push(k),a.set(A,D)}}for(const k of a.values())k.sort(Oc);const c=e.filter(k=>{var M;return((M=i.get(za(k)))!=null?M:0)===0}).sort(Oc),u=[],d=new Set;for(;c.length>0;){const k=c.shift(),M=za(k);if(!d.has(M)){d.add(M),u.push(k);for(const A of(b=a.get(M))!=null?b:[]){const T=za(A),D=((w=i.get(T))!=null?w:0)-1;i.set(T,D),D===0&&c.push(A)}c.sort(Oc)}}return u.length===e.length?u:[...u,...e.filter(k=>!d.has(za(k))).sort(Oc)]}function eb(e,n){var i;return Jx(((i=n[e])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function tb(e,n,i){return eb(e,i)}function Jh(e){var n;return e.length===0?null:(n=[...e].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function Dw(e,n){var u,d;if(!n||e.length===0)return Jh(e);const i=new Date(n).getTime();if(!Number.isFinite(i))return Jh(e);let a=null,c=null;for(const h of e){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const y=i-p;(!a||y<a.delta)&&(a={delta:y,commit:h})}else{const y=p-i;(!c||y<c.delta)&&(c={delta:y,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Jh(e)}function sd(e,n,i){var c,u;if(!n)return null;const a=(c=e.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function Rw(e,n,i){var g,b,w,k,M,A,T;const a=tb(e,i,n);if(a.length===0)return null;const c=a.map(D=>$r(e,D)),u=new Set(c.map(D=>D.id)),d=(b=(g=c[0])==null?void 0:g.parentSha)!=null?b:null,h=(k=(w=c.find(D=>D.kind==="branch-created"))==null?void 0:w.id)!=null?k:null,p=(M=c[0])==null?void 0:M.date,y=c.find(D=>h&&D.id===h||d&&D.id===d?!0:!D.parentSha||!u.has(D.parentSha));return y||((T=(A=Dw(c,p!=null?p:void 0))!=null?A:c[0])!=null?T:null)}function Bw(e,n,i){var c,u,d,h,p;if(e.name===n)return null;const a=eb(e.name,i);if(a.length>0){const y=a.map(w=>$r(e.name,w)),g=new Set(y.map(w=>w.id)),b=(u=(c=y.find(w=>!w.parentSha||!g.has(w.parentSha)))!=null?c:y[0])!=null?u:null;if(b!=null&&b.parentSha)return b.parentSha}return(p=(h=(d=e.presidesFromSha)!=null?d:e.divergedFromSha)!=null?h:e.createdFromSha)!=null?p:null}function vp(e,n,i={},a={}){var de,me,Ae,Xe;const u=new Map(e.map(oe=>[oe.name,oe])),d=new Map,h=new Map;for(const oe of e){const z=((de=i[oe.name])!=null?de:[]).filter(te=>te.kind!=="branch-created").map(te=>new Date(te.date).getTime()).filter(te=>Number.isFinite(te)).sort((te,Y)=>te-Y)[0];z!=null&&h.set(oe.name,z)}const p=oe=>{const se=h.get(oe.name);return se!=null?se:Sy(oe).start},y=oe=>{var z;const se=(z=a[oe.name])!=null?z:null;return se&&se!==oe.name&&(se===n||u.has(se))?se:oe.name===n?null:oe.parentBranch&&oe.parentBranch!==oe.name&&(oe.parentBranch===n||u.has(oe.parentBranch))?oe.parentBranch:null};for(const oe of e){if(oe.name===n)continue;const se=(me=y(oe))!=null?me:n,z=(Ae=d.get(se))!=null?Ae:[];z.push(oe),d.set(se,z)}for(const oe of d.values())oe.sort((se,z)=>p(se)-p(z)||se.name.localeCompare(z.name));const g=new Map,b=[],w=new Map,k=new Map,M=new Map;for(const oe of Object.values(i))for(const se of oe){const z=new Date(se.date).getTime();Number.isFinite(z)&&(se.fullSha&&M.set(se.fullSha,z),se.sha&&M.set(se.sha,z))}const A=(oe,se)=>({start:Math.min(oe,se),end:Math.max(oe,se)}),T=oe=>{var ee,xe;const se=A(p(oe),Sy(oe).end),z=[se],te=se.start,Y=Bw(oe,n,i),fe=Y?M.get(Y):void 0,Se=new Date((xe=(ee=oe.divergedFromDate)!=null?ee:oe.createdDate)!=null?xe:oe.lastCommitDate).getTime(),P=Number.isFinite(fe!=null?fe:NaN)?fe:Number.isFinite(Se)?Se:null;if(P==null)return z;const ae=A(P,te);return ae.start!==ae.end&&z.push(ae),z},D=Math.max(1,360*60*1e3*Tw),I=(oe,se)=>!(oe.start-se.end>=D||se.start-oe.end>=D),O=(oe,se)=>se.some(z=>{var te;return((te=k.get(oe))!=null?te:[]).some(Y=>I(z,Y))}),N=(oe,se=new Set)=>{const z=w.get(oe);if(z!=null)return z;if(se.has(oe))return 1;se.add(oe);const te=u.get(oe);if(!te||oe===n)return se.delete(oe),w.set(oe,0),0;const Y=y(te),fe=Y?N(Y,se)+1:1;return se.delete(oe),w.set(oe,fe),fe},G=(oe,se=new Set)=>{var he,ze;const z=g.get(oe);if(z)return z.column;if(se.has(oe))return 0;se.add(oe);const te=u.get(oe);if(!te)return se.delete(oe),0;if(oe===n){const Qe={name:oe,column:0,parentName:null};g.set(oe,Qe),b.push(Qe);const We=T(te);return k.set(0,[...(he=k.get(0))!=null?he:[],...We]),se.delete(oe),0}const Y=y(te),fe=Y&&!se.has(Y)?Y:null,Se=fe?G(fe,se):0,P=Math.max(1,N(oe)),ae=Math.max(fe?Se+1:1,P),ee=T(te);let xe=ae;for(;O(xe,ee);)xe+=1;const Te={name:oe,column:xe,parentName:fe};return g.set(oe,Te),b.push(Te),k.set(xe,[...(ze=k.get(xe))!=null?ze:[],...ee]),se.delete(oe),xe};G(n);const X=e.filter(oe=>!g.has(oe.name)).sort((oe,se)=>p(oe)-p(se)||oe.name.localeCompare(se.name)),U=X.filter(oe=>y(oe)!=null),K=X.filter(oe=>y(oe)==null);for(const oe of U)G(oe.name);let le=Math.max(0,...b.map(oe=>oe.column))+1+1;for(const oe of K){const se=T(oe);let z=le;for(;O(z,se);)z+=1;const te={name:oe.name,column:z,parentName:null};g.set(oe.name,te),b.push(te),k.set(z,[...(Xe=k.get(z))!=null?Xe:[],...se]),le=z+1}return b.sort((oe,se)=>oe.column-se.column||oe.name.localeCompare(se.name))}function Lw(e,n,i,a){const c=new Map(e.map(h=>[h.name,h])),u=h=>{var y;const p=(y=i[h.name])!=null?y:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of e){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const od=2.25,na=0,em=0,Ow=3600*1e3,zw=3600*1e3,Gi=e=>{const n=e?new Date(e).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Uo=(e,n)=>!e||!n?!1:e===n||e.startsWith(n)||n.startsWith(e);function Cy(e,n,i=new Map){var K,le,de,me,Ae,Xe,oe,se,z,te,Y,fe,Se,P,ae;if(e.length===0)return new Map;const a=[...e].sort((ee,xe)=>{const Te=Gi(ee.date)-Gi(xe.date);return Te!==0?Te:ee.id!==xe.id?ee.id.localeCompare(xe.id):ee.visualId.localeCompare(xe.visualId)}),c=new Map;for(const ee of e){const xe=(K=ee.parentSha)!=null?K:null;if(xe){const Te=(le=c.get(xe))!=null?le:new Set;Te.add(ee.id),c.set(xe,Te)}for(const Te of(de=i.get(ee.id))!=null?de:[]){if(!Te)continue;const he=(me=c.get(Te))!=null?me:new Set;he.add(ee.id),c.set(Te,he)}}const u=new Map,d=new Map,h=new Map,p=new Set,y=new Map,g=new Map,b=new Map,w=new Map;for(const ee of e){const xe=(Ae=y.get(ee.branchName))!=null?Ae:new Set;xe.add(ee.id),y.set(ee.branchName,xe);const Te=(oe=(Xe=n.get(ee.branchName))==null?void 0:Xe.column)!=null?oe:0,he=(se=g.get(ee.id))!=null?se:new Set;he.add(Te),g.set(ee.id,he);const ze=new Set;ee.parentSha&&ze.add(ee.parentSha),b.set(ee.visualId,ze);const Qe=new Set(ze);for(const We of(z=i.get(ee.id))!=null?z:[])We&&Qe.add(We);w.set(ee.visualId,Qe)}const k=new Set(Array.from(g.keys())),M=Array.from(k),A=new Map,T=ee=>{const xe=[];for(const Te of M)Uo(Te,ee)&&xe.push(Te);return xe},D=new Map;for(const ee of M)D.set(ee,new Set);for(const ee of e){const xe=T(ee.id);if(xe.length===0)continue;const Te=(te=w.get(ee.visualId))!=null?te:new Set,he=new Set;for(const ze of Te)for(const Qe of T(ze))he.add(Qe);for(const ze of xe){const Qe=(Y=D.get(ze))!=null?Y:new Set;for(const We of he)Qe.add(We);D.set(ze,Qe)}}const I=new Map,O=(ee,xe=new Set)=>{var Qe;const Te=I.get(ee);if(Te)return Te;if(xe.has(ee))return new Set;xe.add(ee);const he=(Qe=D.get(ee))!=null?Qe:new Set,ze=new Set;for(const We of he){ze.add(We);for(const ut of O(We,xe))ze.add(ut)}return xe.delete(ee),I.set(ee,ze),ze},N=(ee,xe)=>{if(Uo(ee,xe))return!0;const Te=T(ee),he=T(xe);for(const ze of Te){const Qe=O(ze);for(const We of he)if(Qe.has(We))return!0}for(const ze of he){const Qe=O(ze);for(const We of Te)if(Qe.has(We))return!0}return!1};let G=1;const X=(ee,xe)=>{var at,Ce,dt,He,ft,mt,jt,Rt,ot;const Te=(Ce=(at=n.get(ee.branchName))==null?void 0:at.column)!=null?Ce:0,he=(dt=y.get(ee.branchName))!=null?dt:new Set,Qe=!(!!ee.parentSha&&he.has(ee.parentSha))&&ee.parentSha?ee.parentSha:null,We=Array.from(xe).flatMap(V=>T(V).flatMap(J=>{var be;return(be=A.get(J))!=null?be:[]})),ut=(ee.kind==="branch-created"||ee.kind==="stash")&&We.length>0?Math.max(...We)+1:null,kt=We.length>0?Math.max(...We)+1:1,bt=(He=c.get(ee.id))!=null?He:new Set,Dt=Array.from(bt).flatMap(V=>{var J;return Array.from((J=g.get(V))!=null?J:[])}).some(V=>V!==Te),lt=new Date(ee.date).getTime(),qt=Math.max(kt,1);let Kt=null;for(let V=qt;V<G;V+=1){const J=(ft=d.get(V))!=null?ft:[];if(J.length===0||Dt||p.has(V))continue;const be=(mt=w.get(ee.visualId))!=null?mt:new Set;if(!(J.some(Be=>N(ee.id,Be.sha)?!0:Array.from(be).some(Ze=>Uo(Ze,Be.sha)))||J.some(Be=>Be.column===Te)||!Number.isFinite(lt)||!J.every(Be=>{if(!Number.isFinite(Be.time))return!1;const Ze=!!Qe&&!!Be.branchEntryParentSha&&Qe===Be.branchEntryParentSha?zw:Ow;return Math.abs(Be.time-lt)<=Ze}))){Kt=V;break}}ut!=null&&(Kt=ut),Kt==null&&(Kt=Math.max(kt,G)),u.set(ee.visualId,Kt),Kt>=G&&(G=Kt+1);const Q=(jt=d.get(Kt))!=null?jt:[];Q.push({visualId:ee.visualId,sha:ee.id,column:Te,time:lt,branchEntryParentSha:Qe}),d.set(Kt,Q),Dt&&p.add(Kt);for(const V of xe){const J=(Rt=h.get(V))!=null?Rt:[];J.push(Kt),h.set(V,J)}const Ne=(ot=A.get(ee.id))!=null?ot:[];Ne.push(Kt),A.set(ee.id,Ne)};for(const ee of a){const xe=(fe=b.get(ee.visualId))!=null?fe:new Set;X(ee,xe)}const U=Math.max(1,a.length*2);for(let ee=0;ee<U;ee+=1){let xe=!1;for(const Te of a){const he=(Se=b.get(Te.visualId))!=null?Se:new Set;if(he.size===0)continue;const ze=(P=u.get(Te.visualId))!=null?P:1;let Qe=1;for(const We of he){const ut=T(We).flatMap(kt=>{var bt;return(bt=A.get(kt))!=null?bt:[]});ut.length>0&&(Qe=Math.max(Qe,Math.max(...ut)+1))}if(ze<Qe){u.set(Te.visualId,Qe);const We=(ae=A.get(Te.id))!=null?ae:[];We.length===0?A.set(Te.id,[Qe]):A.set(Te.id,[...We.slice(0,-1),Qe]),xe=!0}}if(!xe)break}return u}function wp(e){var ps,no,Zt,ki,Gn,zi,go,Ns,rs,qo,vs,En,yo,ui,Os,jo,xn,Gs,zs,Ko,Ds,Qo,Ro,$i,so,Mo,Zo,Un,Es,Eo,oo,io,kn,$s,Nn,Ps,Yo,Wo,Pi,Jo,ws,qs,qn,Ii,ji,ei,Bt,xo,Ks,di,ti,Bo,Mi,Zi,Ji;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,unpushedCommitShasByBranch:d={},defaultBranch:h,branchCommitPreviews:p,branchParentByName:y={},branchUniqueAheadCounts:g,manuallyOpenedClumps:b,manuallyClosedClumps:w,isDebugOpen:k,gridSearchQuery:M,gridFocusSha:A,checkedOutRef:T,orientation:D="horizontal",nodePositionOverrides:I={}}=e,O=D==="horizontal",N=new Map(i.map(E=>[E.name,E])),G=new Map(n.map(E=>[E.name,E])),X=Nw([...a.map(E=>{var F,ce,Me,Ve;return{id:E.fullSha,branchName:h,message:(F=E.prTitle)!=null?F:E.sha,author:"",date:E.date,parentSha:(Me=(ce=E.parentShas)==null?void 0:ce[0])!=null?Me:null,parentShas:(Ve=E.parentShas)!=null?Ve:[]}}),...((ps=p[h])!=null?ps:[]).map(E=>$r(h,E)),...c.map(E=>$r(E.branch||"",E)),...u.map(E=>$r(E.branch||"",E))]),U=new Map,K=new Map;for(const E of i){if(E.name===h)continue;const F=tb(E.name,g,p);K.set(E.name,F);const ce=Jx(F.map(Ht=>$r(E.name,Ht)));if(ce.length>0){U.set(E.name,ce);continue}const Me=(ki=(Zt=(no=E.presidesFromSha)!=null?no:E.divergedFromSha)!=null?Zt:E.createdFromSha)!=null?ki:null;if(!Me)continue;const Ve=(Gn=c.find(Ht=>Uo(Ht.fullSha,Me)||Uo(Ht.sha,Me)))==null?void 0:Gn.date,it=Ve?null:(zi=Object.values(p).flat().find(Ht=>Uo(Ht.fullSha,Me)||Uo(Ht.sha,Me)))==null?void 0:zi.date,Yt={id:`BRANCH_HEAD:${E.name}:${Me}`,branchName:E.name,message:`Branch ${E.name}`,author:E.lastCommitAuthor,date:(rs=(Ns=(go=Ve!=null?Ve:it)!=null?go:E.createdDate)!=null?Ns:E.divergedFromDate)!=null?rs:E.lastCommitDate,parentSha:Me,clusterKey:null,childShas:[],kind:"branch-created"};U.set(E.name,[Yt])}const le=new Set(X.map(E=>E.id)),de=(qo=[...X].sort((E,F)=>Gi(E.date)-Gi(F.date)||E.id.localeCompare(F.id))[0])!=null?qo:null,me=new Map(Array.from(U.entries()).map(([E,F])=>[E,new Set(F.map(ce=>ce.id))])),Ae=new Map;for(const E of i){if(E.name===h)continue;const F=Rw(E.name,p,g);if(F){Ae.set(E.name,F);continue}const ce=(vs=U.get(E.name))==null?void 0:vs[0];if(ce){const Me=(ui=(yo=(En=E.presidesFromSha)!=null?En:E.divergedFromSha)!=null?yo:E.createdFromSha)!=null?ui:null;Ae.set(E.name,{...ce,parentSha:Me})}}const Xe=new Map;for(const[E,F]of U.entries()){const ce=F.find(Me=>Me.kind!=="branch-created");ce&&Xe.set(E,ce)}const oe=new Map;for(const[E,F]of U.entries()){const ce=F.filter(it=>it.kind!=="branch-created"),Ve=(Os=(ce.length>0?ce:F)[0])!=null?Os:null;Ve&&oe.set(E,Ve)}const se=new Map;for(const E of i){if(E.name===h)continue;const F=(jo=oe.get(E.name))!=null?jo:null,ce=(Gs=(xn=Ae.get(E.name))==null?void 0:xn.parentSha)!=null?Gs:null,Me=(Ds=(Ko=(zs=E.presidesFromSha)!=null?zs:E.divergedFromSha)!=null?Ko:E.createdFromSha)!=null?Ds:null,Ve=(Qo=F==null?void 0:F.parentSha)!=null?Qo:null,it=(Ro=Ve!=null?Ve:ce)!=null?Ro:Me;it&&se.set(E.name,it)}const z=E=>{var it,Yt,Ht,Ft,fn,vn,an,Vn;const F=(it=y[E.name])!=null?it:null;if(!(F&&F!==h&&F!==E.name&&N.has(F)))return F!=null?F:"";const Me=(Ft=(Ht=(Yt=se.get(E.name))!=null?Yt:E.presidesFromSha)!=null?Ht:E.divergedFromSha)!=null?Ft:E.createdFromSha;if(Me&&((fn=me.get(F))!=null?fn:new Set).has(Me))return F;const Ve=(an=(vn=Ae.get(E.name))==null?void 0:vn.parentSha)!=null?an:null;return Ve&&((Vn=me.get(F))!=null?Vn:new Set).has(Ve),F},te=E=>{var Ve,it,Yt,Ht,Ft,fn,vn,an;const F=Ae.get(E.name),ce=(Ft=(Ht=(Yt=(it=(Ve=se.get(E.name))!=null?Ve:F==null?void 0:F.parentSha)!=null?it:E.presidesFromSha)!=null?Yt:E.divergedFromSha)!=null?Ht:E.createdFromSha)!=null?Ft:null;if(!E.parentBranch&&!ce||!ce)return null;if(z(E)===h){if(le.has(ce))return ce;const Vn=(fn=F==null?void 0:F.parentSha)!=null?fn:null;return Vn&&le.has(Vn)?Vn:(an=(vn=de==null?void 0:de.id)!=null?vn:Vn)!=null?an:ce}return le.has(ce),ce},Y=E=>te(E),fe=new Map;for(const E of[...c,...u]){const F={...$r(E.branch||"",E),visualId:`${E.branch||""}:${E.fullSha}`};fe.set(E.fullSha,F)}const Se=new Map(fe),P=E=>{Se.has(E.id)||Se.set(E.id,E)},ae=new Map(Object.entries(d).map(([E,F])=>[E,new Set(F)])),ee=new Map(Array.from(U.entries()).map(([E,F])=>[E,new Set(F.map(ce=>ce.id))])),xe=new Set;for(const E of ee.values())for(const F of E)xe.add(F);for(const E of X)xe.has(E.id)||P({...E,visualId:`${E.branchName}:${E.id}`});for(const[E,F]of U.entries())for(const ce of F)P({...ce,visualId:`${E}:${ce.id}`});const he=[...Array.from(Se.values()).map(E=>({...E,visualId:`${E.branchName}:${E.id}`}))].sort((E,F)=>Gi(E.date)-Gi(F.date)||E.id.localeCompare(F.id)),ze=new Map;for(const E of he){const F=($i=ze.get(E.branchName))!=null?$i:new Set;F.add(E.id),ze.set(E.branchName,F)}const Qe=(E,F)=>{const ce=ze.get(E);if(!ce||ce.size===0)return!1;for(const Me of ce)if(Uo(Me,F))return!0;return!1},We=(E,F)=>{const ce=Array.from(ze.entries()).filter(([Me])=>Me!==F).filter(([,Me])=>Array.from(Me).some(Ve=>Uo(Ve,E))).map(([Me])=>Me);return ce.length>0?ce.sort()[0]:E.slice(0,7)},ut=[],kt=new Map,bt=new Map;for(const E of a){const F=E.fullSha,ce=E.targetBranch,Me=E.targetCommitSha;if(!F||!ce||!Me||!Qe(ce,Me))continue;const Ve=((so=E.parentShas)!=null?so:[]).slice(1).filter(Yt=>!!Yt&&!Uo(Yt,F));if(Ve.length===0)continue;const it=(Mo=bt.get(F))!=null?Mo:new Set;for(const Yt of Ve){it.add(Yt);const Ht=We(Yt,ce);ut.push({sourceCommitSha:Yt,sourceBranchName:Ht,mergeCommitSha:F,targetCommitSha:Me,targetBranchName:ce});const Ft=(Zo=kt.get(Ht))!=null?Zo:new Map,fn=(Un=Ft.get(Yt))!=null?Un:new Set;fn.add(ce),Ft.set(Yt,fn),kt.set(Ht,Ft)}bt.set(F,it)}const st=new Map;for(const E of i){if(E.name===h)continue;const F=te(E);F&&st.set(E.name,F)}const Dt=new Map;for(const E of he){const F=bt.get(E.id);if(F&&F.size>0){const Ve=(Es=Dt.get(E.id))!=null?Es:new Set;for(const it of F)Ve.add(it);Dt.set(E.id,Ve)}if(E.branchName===h)continue;const ce=st.get(E.branchName);if(!ce||ce===E.id)continue;const Me=(Eo=Dt.get(E.id))!=null?Eo:new Set;Me.add(ce),Dt.set(E.id,Me)}const lt=new Map,qt=new Map;for(const E of he){if(qt.set(E.id,E),E.parentSha){const F=(oo=lt.get(E.parentSha))!=null?oo:new Set;F.add(E.id),lt.set(E.parentSha,F)}for(const F of(io=Dt.get(E.id))!=null?io:[]){if(!F)continue;const ce=(kn=lt.get(F))!=null?kn:new Set;ce.add(E.id),lt.set(F,ce)}}const Kt=new Map;for(const[E,F]of lt.entries())Kt.set(E,Array.from(F));const Q=new Set(["branch-created","stash"]),Ne=new Set,at=E=>{if(!E)return null;const F=he.find(ce=>Uo(ce.id,E)||Uo(ce.visualId.split(":").slice(1).join(":"),E));return F!=null?F:null};for(const E of he){if(E.parentSha){const ce=at(E.parentSha),Me=!!ce&&Ne.has(ce.visualId);ce&&(E.kind==="stash"||E.kind==="branch-created"||Me)&&Ne.add(ce.visualId)}const F=($s=lt.get(E.id))!=null?$s:new Set;(F.size>1||Array.from(F).map(ce=>qt.get(ce)).some(ce=>ce!=null&&ce.kind!=null&&Q.has(ce.kind)))&&Ne.add(E.visualId)}const Ce=he.map(E=>{var F,ce;return{...E,childShas:(ce=(F=Kt.get(E.id))!=null?F:E.childShas)!=null?ce:[]}}),dt=Cy(Ce,G,Dt),He=new Map;for(const E of Ce){const F=(Nn=He.get(E.branchName))!=null?Nn:[];F.push(E),He.set(E.branchName,F)}const ft=new Map,mt=new Map,jt=new Map,Rt=new Map,ot=new Map,V=(E,F)=>{var fn,vn,an,Vn,_n;if(F.length===0)return[];const ce=[...F].sort((Vt,Tn)=>{var gs,Lo;const nn=(gs=dt.get(Vt.visualId))!=null?gs:Number.MAX_SAFE_INTEGER,_s=(Lo=dt.get(Tn.visualId))!=null?Lo:Number.MAX_SAFE_INTEGER;return nn!==_s?nn-_s:Gi(Vt.date)-Gi(Tn.date)||Vt.id.localeCompare(Tn.id)}),Me=new Map;let Ve=null,it=0;const Yt=Vt=>{if(Vt.kind==="uncommitted")return"uncommitted";if(Vt.kind==="stash")return"stash";if(Vt.kind==="branch-created")return"branch-created";const Tn=ae.get(Vt.branchName);return Tn!=null&&Tn.has(Vt.id)?"unpushed":"pushed"};let Ht=null;for(const Vt of ce){const Tn=Vt.kind==="stash"||Vt.kind==="branch-created",nn=Ne.has(Vt.visualId);if(Tn)continue;const _s=Yt(Vt);(!Ve||Ht!=null&&Ht!==_s)&&(it+=1,Ve=`cluster:${E}:segment:${it}`);const gs=(fn=Me.get(Ve))!=null?fn:[];gs.push(Vt),Me.set(Ve,gs),nn&&(Ve=null),Ht=_s}const Ft=[];for(const[Vt,Tn]of Me.entries()){if(Tn.length===0)continue;const _s=[...Tn].sort((ao,bo)=>{var Oo,zo;const vo=(Oo=dt.get(ao.visualId))!=null?Oo:Number.MIN_SAFE_INTEGER,fi=(zo=dt.get(bo.visualId))!=null?zo:Number.MIN_SAFE_INTEGER;return vo!==fi?fi-vo:Gi(bo.date)-Gi(ao.date)||bo.id.localeCompare(ao.id)})[0].visualId,gs={branchName:E,key:Vt,commitIds:Tn.map(ao=>ao.visualId),leadId:_s,count:Tn.length};Ft.push(gs);const Lo=(vn=ot.get(Vt))!=null?vn:0;if(!Rt.has(Vt))Rt.set(Vt,_s);else{const ao=Rt.get(Vt),bo=qt.get(ao.split(":").slice(1).join(":"));if(bo){const vo=(an=dt.get(bo.visualId))!=null?an:Number.MIN_SAFE_INTEGER;((Vn=dt.get(_s))!=null?Vn:Number.MIN_SAFE_INTEGER)>vo&&Rt.set(Vt,_s)}}ot.set(Vt,Math.max(Lo,Tn.length));for(const ao of gs.commitIds){mt.set(ao,Vt);const bo=ao.split(":").slice(1).join(":"),vo=(_n=jt.get(bo))!=null?_n:[];vo.includes(Vt)||vo.push(Vt),jt.set(bo,vo)}}return Ft};for(const[E,F]of He.entries())ft.set(E,V(E,F));const J=new Map;for(const E of Ce)J.set(E.id,E);const be=E=>{if(!E)return"none";const F=Array.from(J.values()).find(ce=>Uo(ce.id,E)||Uo(ce.id.slice(0,7),E)||Uo(E,ce.id));return F?`${F.id.slice(0,7)} ${F.branchName}`:E.slice(0,7)},Ee=k?["Lane rows (expected):",...[...n].sort((E,F)=>E.column-F.column||E.name.localeCompare(F.name)).map(E=>{var F;return`  row=${E.column} branch=${E.name} parent=${(F=E.parentName)!=null?F:"none"}`}),"",...i.flatMap(E=>{var Yt,Ht,Ft,fn,vn,an,Vn,_n;const F=(Yt=p[E.name])!=null?Yt:[],ce=[...(Ht=K.get(E.name))!=null?Ht:[]].reverse(),Me=new Set(((Ft=U.get(E.name))!=null?Ft:[]).map(Vt=>Vt.id)),Ve=(vn=(fn=ce.find(Vt=>!Vt.parentSha||!ce.some(Tn=>{var nn;return Uo(Tn.fullSha,(nn=Vt.parentSha)!=null?nn:"")})))!=null?fn:ce[0])!=null?vn:null,it=(Vn=(an=Ve==null?void 0:Ve.parentSha)!=null?an:se.get(E.name))!=null?Vn:null;return[`Branch ${E.name}`,`  ahead=${(_n=g[E.name])!=null?_n:0} previews=${ce.length} rendered=${Me.size}`,`  db parent commit=${be(it)}`,`  db child commit=${Ve?`${Ve.fullSha.slice(0,7)} ${E.name}`:"none"}`,...ce.map(Vt=>{const Tn=Me.has(Vt.fullSha)?"visible":"hidden",nn=Me.has(Vt.fullSha)?"kept by render set":"dropped by render set";return`  ${Tn} ${Vt.fullSha.slice(0,7)} ${Vt.message} [${nn}]`}),F.length===0?"  no preview data":null].filter(Vt=>Vt!=null)})]:[],nt=k?Array.from(U.entries()).map(([E,F])=>[`Branch debug ${E}`,...F.map(ce=>`  ${ce.id.slice(0,7)} ${ce.message}`)].join(`
`)):[],Ge=dt,Be=zm/od,pe=20/od,Ze=O?$n+Be+pe:nd+Be+pe,Ye=O?nd+Be+pe:wl,Je=Math.max(0,...Ce.map(E=>{var F;return(F=Ge.get(E.visualId))!=null?F:1})),De=Ce.map(E=>{var Ve,it;const F=G.get(E.branchName),ce=(Ve=Ge.get(E.visualId))!=null?Ve:1,Me=(it=F==null?void 0:F.column)!=null?it:0;return O?{commit:E,row:ce,column:Me,x:Oa+(ce-1)*Ze,y:La+Me*Ye}:{commit:E,row:ce,column:Me,x:Oa+Me*wl,y:La+(Je-ce)*Ze}}),et=E=>{var ce;const F=(ce=I[E.commit.visualId])!=null?ce:I[E.commit.id];return F?{...E,x:F.x,y:F.y}:E},_t=De.map(et),gt=M.trim().toLowerCase(),Ke=gt?_t.filter(E=>{const F=E.commit.id.toLowerCase(),ce=E.commit.id.slice(0,7).toLowerCase(),Me=E.commit.message.toLowerCase(),Ve=E.commit.branchName.toLowerCase();return F.includes(gt)||ce.includes(gt)||Me.includes(gt)||Ve.includes(gt)}):_t,Lt=A&&(Ps=_t.find(E=>E.commit.id===A))!=null?Ps:null,wt=new Set(Ke.map(E=>E.commit.id)),ct=(Yo=T==null?void 0:T.headSha)!=null?Yo:null,cn=(()=>{var F,ce;const E=(F=T==null?void 0:T.branchName)!=null?F:null;return!ct||!E?null:(ce=mt.get(`${E}:${ct}`))!=null?ce:null})(),rt=new Set;for(const[E,F]of ot.entries())F>1&&E!==cn&&rt.add(E);const It=[...he].filter(E=>{var it;const F=mt.get(E.visualId);if(!F)return!0;const ce=Rt.get(F),Me=(it=ot.get(F))!=null?it:1,Ve=b.has(F)||!rt.has(F)&&!w.has(F);return Me<=1||Ve||ce===E.visualId}),pn=Cy(It,G,Dt),Et=zm/od,yt=20/od,un=O?$n+Et+yt:nd+Et+yt,tn=O?nd+Et+yt:wl,Qt=Math.max(0,...he.map(E=>{var F;return(F=dt.get(E.visualId))!=null?F:1})),$t=Math.max(0,...It.map(E=>{var F;return(F=pn.get(E.visualId))!=null?F:1})),Jt=Math.max(0,Qt-$t),bn=[...It.map(E=>{var Ve,it;const F=G.get(E.branchName),ce=(Ve=pn.get(E.visualId))!=null?Ve:1,Me=(it=F==null?void 0:F.column)!=null?it:0;return et(O?{commit:E,row:ce,column:Me,x:Oa+(Jt+ce-1)*un,y:La+Me*tn}:{commit:E,row:ce,column:Me,x:Oa+Me*wl,y:La+($t-ce)*un})})].sort((E,F)=>E.row!==F.row?E.row-F.row:E.column!==F.column?E.column-F.column:E.commit.visualId.localeCompare(F.commit.visualId)).map(E=>({...E})),tt=new Set;for(const E of bn){let F=E.row,ce=`${E.column}:${F}`;for(;tt.has(ce);)F+=1,ce=`${E.column}:${F}`;E.row=F,tt.add(ce)}const ds=Math.max(0,...bn.map(E=>E.row));for(const E of bn){if(O){E.x=Oa+(Jt+E.row-1)*un,E.y=La+E.column*tn;continue}E.x=Oa+E.column*wl,E.y=La+(ds-E.row)*un}const fs=new Map;for(const E of bn){const F=(Wo=fs.get(E.commit.id))!=null?Wo:[];F.push(E),fs.set(E.commit.id,F)}const No=new Map;for(const E of bn){const F=mt.get(E.commit.visualId);if(!F)continue;const ce=No.get(F);(!ce||(O?E.x>ce.x:E.y<ce.y))&&No.set(F,E)}const eo=(E,F)=>`${E.toFixed(1)} ${F.toFixed(1)}`,Co=Math.max(0,...bn.map(E=>E.row)),po=Math.max(0,...n.map(E=>E.column)),Do=Math.max(0,...bn.map(E=>E.x+$n)),is=Math.max(0,...bn.map(E=>E.y+Ol+Vs)),Xt=Math.max(O?Oa*2+Math.max(0,Co-1)*un+$n+Qh+yt:Oa*2+(po+1)*wl,Do+Oa),Rn=Math.max(O?La*2+po*tn+Vs+Qh+yt:La*2+Math.max(0,Co-1)*un+Vs+Qh+yt,is+La),en=[],as=new Map(i.map(E=>{var ce,Me;const F=new Date((Me=(ce=E.createdDate)!=null?ce:E.divergedFromDate)!=null?Me:E.lastCommitDate).getTime();return[E.name,Number.isFinite(F)?F:0]})),xs=E=>{var F;return(F=as.get(E))!=null?F:0},bs=[],sn=E=>{k&&bs.push(E)},As=new Set,Rs=new Map,hs=(E,F)=>{var Me;const ce=(Me=Rs.get(E))!=null?Me:[];ce.includes(F)||ce.push(F),Rs.set(E,ce)},_o=new Set,to=new Set,Yn=new Set,Ws=(E,F)=>{var Ve,it;if(!E)return null;const ce=sd(fs,E,F);if(ce)return ce;const Me=(Ve=mt.get(`${F!=null?F:h}:${E}`))!=null?Ve:mt.get(E);return Me&&(it=No.get(Me))!=null?it:null},on=new Set;for(const E of i){const F=Y(E);F&&to.add(F);const ce=(Pi=se.get(E.name))!=null?Pi:null;ce&&Yn.add(ce)}const Fs=E=>{var Ve;const F=Ws(E.id,E.branchName);if(F)return F;const ce=mt.get(E.visualId);if(!ce)return null;const Me=Rt.get(ce);return Me&&(Ve=bn.find(it=>it.commit.id===Me))!=null?Ve:null},Ci=(E,F)=>E?sd(fs,E,F):null,Ms=(E,F)=>O?{x:E.x-na,y:E.y+Vs/2,face:"left"}:{x:E.x+$n/2,y:E.y+Vs+na,face:"bottom"},ko=E=>O?{x:E.x-na,y:E.y+Vs/2,face:"left"}:{x:E.x+$n/2,y:E.y+Vs+na,face:"bottom"},Bs=(E,F)=>E.column!==F.column?!0:O?E.commit.branchName!==F.commit.branchName:!1,Wn=(E,F,ce)=>{if(!O)return{x:F?E.x+$n:E.x+$n/2,y:F?E.y+Vs/2:E.y,face:F?"right":"top"};if(!F)return{x:E.x+$n+na,y:E.y+Vs/2,face:"right"};if(ce&&ce.column===E.column&&ce.commit.branchName!==E.commit.branchName){if(ce.x>E.x)return{x:E.x+$n/2,y:E.y+Vs+na,face:"bottom"};if(ce.x<E.x)return{x:E.x+$n/2,y:E.y-na,face:"top"}}return!ce||ce.column===E.column?{x:E.x+$n+na,y:E.y+Vs/2,face:"right"}:ce.column>E.column?{x:E.x+$n/2,y:E.y+Vs+na,face:"bottom"}:{x:E.x+$n/2,y:E.y-na,face:"top"}},ms=E=>O?{x:E.x+$n/2,y:E.y+Vs+na,face:"bottom"}:{x:E.x+$n,y:E.y+Vs/2,face:"right"},Xs=(E,F)=>sd(fs,E,F),Bn=(E,F)=>Ci(E,F),Ls=[],Fn=new Set;for(const E of ut){const F=(Jo=Ws(E.targetCommitSha,E.targetBranchName))!=null?Jo:null;if(!F){sn({id:`merge:${E.mergeCommitSha}:${E.sourceCommitSha}:target`,kind:"merge",parent:E.sourceCommitSha,child:E.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const ce=E.sourceCommitSha,Me=`merge:${E.mergeCommitSha}:${ce!=null?ce:"unknown"}`;if(!ce||Uo(ce,E.targetCommitSha)){sn({id:Me,kind:"merge",parent:ce!=null?ce:"unknown",child:E.targetCommitSha,rendered:!1,reason:ce?"merged parent equals merge target sha":"missing merged parent sha"});continue}const Ve=(ws=sd(fs,ce))!=null?ws:null;if(!Ve){sn({id:Me,kind:"merge",parent:ce,child:E.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(Ve.commit.id===F.commit.id){sn({id:Me,kind:"merge",parent:Ve.commit.id,child:F.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let it,Yt,Ht;const Ft=O?F.x+$n/2:F.x+$n-em,fn=O?F.y+Vs+em:F.y+Vs/2,vn=O?"bottom":"right";O?(it=Ve.x+$n+em,Yt=Ve.y+Vs/2,Ht="right"):(it=Ve.x+$n/2,Yt=Ve.y,Ht="top");const an=`${it.toFixed(2)}:${Yt.toFixed(2)}:${Ft.toFixed(2)}:${fn.toFixed(2)}`;if(Fn.has(an)){sn({id:Me,kind:"merge",parent:Ve.commit.id,child:F.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}Fn.add(an),Ls.push({id:Me,fromX:it,fromY:Yt,toX:Ft,toY:fn,fromFace:Ht,toFace:vn,zIndex:xs(Ve.commit.branchName)}),sn({id:Me,kind:"merge",parent:Ve.commit.id,child:F.commit.id,rendered:!0,reason:`merge connector rendered to ${E.targetBranchName}`})}const Xn=new Set;for(const E of i){if(E.name===h)continue;const F=Ae.get(E.name);if(!F)continue;const ce=z(E),Me=Xs((qs=se.get(E.name))!=null?qs:"",ce),Ve=(qn=Xe.get(E.name))!=null?qn:F,it=(Ii=Bn(Ve.id,E.name))!=null?Ii:Fs(Ve);if(!Me||!it||Me.commit.id===it.commit.id){const vn=mt.get(`${E.name}:${F.id}`),an=mt.get(`${E.name}:${Ve.id}`),Vn=!!vn&&!rt.has(vn),_n=!!an&&!rt.has(an),Vt=!!vn&&!b.has(vn)&&(Vn?w.has(vn):!0),Tn=!!an&&!b.has(an)&&(_n?w.has(an):!0);!Me&&!Vt&&hs((ji=it==null?void 0:it.commit.id)!=null?ji:F.id,"Missing parent node"),!it&&!Tn&&hs(F.id,"Missing child node"),sn({id:`branch:${(ei=Me==null?void 0:Me.commit.id)!=null?ei:"null"}->${(Bt=it==null?void 0:it.commit.id)!=null?Bt:"null"}`,kind:"branch",parent:(xo=Me==null?void 0:Me.commit.id)!=null?xo:"null",child:(Ks=it==null?void 0:it.commit.id)!=null?Ks:"null",rendered:!1,reason:Me?it?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Yt=`branch:${Me.commit.id}->${it.commit.id}`;if(on.has(Yt)){sn({id:Yt,kind:"branch",parent:Me.commit.id,child:it.commit.id,rendered:!1,reason:"duplicate connector key"});continue}on.add(Yt),_o.add(Me.commit.id);const Ht=Bs(Me,it);Me.commit.branchName!==it.commit.branchName&&Xn.add(Me.commit.id);const Ft=ms(Me),fn=ko(it);en.push({id:Yt,fromX:Ft.x,fromY:Ft.y,toX:fn.x,toY:fn.y,fromFace:Ft.face,toFace:fn.face,zIndex:xs(it.commit.branchName)}),sn({id:Yt,kind:"branch",parent:Me.commit.id,child:it.commit.id,rendered:!0,reason:Ht?"branch connector rendered":O?"horizontal connector rendered":"vertical connector rendered"})}for(const E of he){const F=Fs(E);if(!F)continue;const ce=(di=E.parentSha)!=null?di:null;if(!ce)continue;const Me=(ti=Ws(ce,E.branchName))!=null?ti:Xs(ce,E.branchName);if(!Me){const Ft=(Bo=mt.get(`${E.branchName}:${ce}`))!=null?Bo:mt.get(ce),fn=!!Ft&&!rt.has(Ft);!!Ft&&!b.has(Ft)&&(fn?w.has(Ft):!0)||hs(E.id,"Missing parent node"),sn({id:`${E.visualId}->${ce}`,kind:"ancestry",parent:ce,child:E.id,rendered:!1,reason:"missing parent node"});continue}if(F.commit.id===Me.commit.id){hs(F.commit.id,"Parent and child resolve to the same node"),sn({id:`${Me.commit.id}->${F.commit.id}`,kind:"ancestry",parent:Me.commit.id,child:F.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const Ve=`${E.branchName}:${(Mi=Me.commit.visualId)!=null?Mi:Me.commit.id}->${F.commit.visualId}`;if(on.has(Ve)){hs(Me.commit.id,"Duplicate connector key"),hs(F.commit.id,"Duplicate connector key"),sn({id:Ve,kind:"ancestry",parent:Me.commit.id,child:F.commit.id,rendered:!1,reason:"duplicate connector key"});continue}on.add(Ve),_o.add(Me.commit.id);const it=Bs(Me,F),Yt=Wn(Me,it,F),Ht=Ms(F);en.push({id:Ve,fromX:Yt.x,fromY:Yt.y,toX:Ht.x,toY:Ht.y,fromFace:Yt.face,toFace:Ht.face,zIndex:xs(F.commit.branchName)}),sn({id:Ve,kind:"ancestry",parent:Me.commit.id,child:F.commit.id,rendered:!0,reason:it?"ancestry connector rendered":O?"horizontal ancestry rendered":"vertical ancestry rendered"}),As.add(Me.commit.id),As.add(F.commit.id)}const ci=new Map;for(const E of bn){const F=(Zi=ci.get(E.commit.branchName))!=null?Zi:[];F.push(E),ci.set(E.commit.branchName,F)}for(const[E,F]of ci.entries()){if(F.length<2)continue;const ce=[...F].sort((Me,Ve)=>{var it,Yt,Ht,Ft,fn,vn,an,Vn;return Me.row!==Ve.row?Me.row-Ve.row:Gi((Yt=(it=Me==null?void 0:Me.commit)==null?void 0:it.date)!=null?Yt:null)-Gi((Ft=(Ht=Ve==null?void 0:Ve.commit)==null?void 0:Ht.date)!=null?Ft:null)||((vn=(fn=Me==null?void 0:Me.commit)==null?void 0:fn.id)!=null?vn:"").localeCompare((Vn=(an=Ve==null?void 0:Ve.commit)==null?void 0:an.id)!=null?Vn:"")});for(let Me=1;Me<ce.length;Me+=1){const Ve=ce[Me-1],it=ce[Me];if(Ve.commit.id===it.commit.id)continue;const Yt=(Ji=it.commit.parentSha)!=null?Ji:null;if(Yt&&Xs(Yt,it.commit.branchName))continue;const Ht=`chain:${E}:${Ve.commit.id}->${it.commit.id}`;if(on.has(Ht)){hs(Ve.commit.id,"Duplicate branch chain connector"),hs(it.commit.id,"Duplicate branch chain connector"),sn({id:Ht,kind:"ancestry",parent:Ve.commit.id,child:it.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}on.add(Ht);const Ft=Bs(Ve,it),fn=Wn(Ve,Ft,it),vn=Ms(it);en.push({id:Ht,fromX:fn.x,fromY:fn.y,toX:vn.x,toY:vn.y,fromFace:fn.face,toFace:vn.face,zIndex:xs(it.commit.branchName)}),sn({id:Ht,kind:"ancestry",parent:Ve.commit.id,child:it.commit.id,rendered:!0,reason:"branch chain rendered"}),As.add(Ve.commit.id),As.add(it.commit.id)}}return{branchByName:N,laneByName:G,mainCommits:X,branchCommitsByLane:U,branchPreviewSets:K,allCommits:he,clustersByBranch:ft,clusterKeyByCommitId:mt,clusterKeyBySha:jt,leadByClusterKey:Rt,clusterCounts:ot,debugRows:Ee,branchDebugRows:nt,nodes:De,normalizedSearchQuery:gt,matchingNodes:Ke,matchingNodeIds:wt,focusedNode:Lt,checkedOutClusterKey:cn,defaultCollapsedClumps:rt,visibleCommitsList:It,renderNodes:bn,visibleNodesBySha:fs,visibleNodeByClusterKey:No,pointFormatter:eo,contentWidth:Xt,contentHeight:Rn,connectors:en,mergeConnectors:Ls,connectorDecisions:bs,nodeWarnings:Rs,connectorParentShas:_o,branchStartShas:to,branchOffNodeShas:Yn,crossBranchOutgoingShas:Xn,commitIdsWithRenderedAncestry:As,branchBaseCommitByName:Ae,firstBranchCommitByName:oe,mergeDestinations:ut,mergeTargetBranchesBySourceBranchAndCommitSha:kt}}const $w=8,Pw=44,ky=120,jy=e=>e==="left"||e==="right"?"h":e==="top"||e==="bottom"?"v":null;function nb(e,n,i,a,c,u){const d=i-e,h=a-n,p=Math.abs(d),y=Math.abs(h),g=Math.hypot(d,h);if(g<.5)return{kind:"line"};const b=d>=0?1:-1,w=h>=0?1:-1;if(Math.min(p,y)<$w){const X=d/g,U=h/g,K=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:e+X*K,c1y:n+U*K,c2x:i-X*K,c2y:a-U*K}}if(Math.min(p,y)<Pw){const X=d/g,U=h/g,K=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:e+X*K,c1y:n+U*K,c2x:i-X*K,c2y:a-U*K}}const k=Math.min(160,p*.42),M=Math.min(100,p*.22),A=Math.min(120,y*.32),T=Math.min(160,y*.42),D=jy(c),I=jy(u);if(!(D==="v"&&I==="h"||D==="v"&&I==null&&y>=p||D==null&&I==="h"&&y>=p||D==="v"&&I==="v"||D==null&&I==null&&y>p)){const X=i,U=n;return{kind:"elbowH",cx:X,cy:U,s1c1x:e+b*k,s1c1y:n,s1c2x:X-b*M,s1c2y:U,s2c1x:X,s2c1y:U+w*A,s2c2x:i,s2c2y:a-w*T}}const N=e,G=a;return{kind:"elbowV",cx:N,cy:G,s1c1x:e,s1c1y:n+w*T,s1c2x:N,s1c2y:G-w*A,s2c1x:N+b*k,s2c1y:G,s2c2x:i-b*M,s2c2y:a}}function Iw(e,n,i,a,c,u){const d=nb(e,n,i,a,c,u);return d.kind==="line"?[{x:e,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:e,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:e,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:e,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function My(e,n,i,a,c,u,d){const h=nb(e,n,i,a,u,d);if(h.kind==="line")return[`M ${c(e,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(e,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const k=Math.max(8,Math.min(ky,Math.abs(i-e)*.48,Math.abs(a-n)*.48)),M=i>=e?1:-1,A=a>=n?1:-1,T=h.cx-M*k,D=h.cy+A*k;return[`M ${c(e,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(T-M*k*.5,h.cy)} ${c(T,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,D)}`,`C ${c(h.cx,D+A*k*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(ky,Math.abs(i-e)*.48,Math.abs(a-n)*.48)),y=i>=e?1:-1,g=a>=n?1:-1,b=h.cy-g*p,w=h.cx+y*p;return[`M ${c(e,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,b-g*p*.5)} ${c(h.cx,b)}`,`Q ${c(h.cx,h.cy)} ${c(w,h.cy)}`,`C ${c(w+y*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const Sp=2.25,kc=Sp/2,Hw=.45,Uw=.02,aa=Sp,Pd=10,Vw=-100,Ey=0,Yw=.25,id=.001,Ww=12,Fw=$n+48;function mn(...e){return e.filter(Boolean).join(" ")}function Ty(e){return Math.max(Hw,Math.min(Sp,e))}function Xw(e,n){if(e===null||e.size!==n.size)return!1;for(const i of e)if(!n.has(i))return!1;return!0}function sb(e,n){return!(n.right<e.left||n.left>e.right||n.bottom<e.top||n.top>e.bottom)}function Gw(e){var u,d,h,p;let n=(d=(u=e[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=e[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const y of e)n=Math.min(n,y.x),i=Math.min(i,y.y),a=Math.max(a,y.x),c=Math.max(c,y.y);return{left:n,top:i,right:a,bottom:c}}function qw(e,n,i,a,c,u,d){const h=Iw(e,n,i,a,u,d),p=Gw(h);return sb(c,p)}function ob(e,n){return{left:e.x,top:e.y+n,right:e.x+$n,bottom:e.y+Ol+Vs+4}}function Kw(e,n){const i=Fw,a=Math.max(120,Math.ceil(Ol+Vs+4-n+24)),c=new Map;for(const u of e){const d=ob(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),y=Math.floor(d.top/a),g=Math.floor(d.bottom/a),b=u.commit.visualId;for(let w=h;w<=p;w++)for(let k=y;k<=g;k++){const M=`${w},${k}`;let A=c.get(M);A||(A=new Set,c.set(M,A)),A.add(b)}}return{cellW:i,cellH:a,buckets:c}}function Qw(e,n,i,a){const{cellW:c,cellH:u,buckets:d}=e,h=Math.floor(n.left/c),p=Math.floor(n.right/c),y=Math.floor(n.top/u),g=Math.floor(n.bottom/u),b=new Set;for(let k=h;k<=p;k++)for(let M=y;M<=g;M++){const A=d.get(`${k},${M}`);if(A)for(const T of A)b.add(T)}const w=new Set;for(const k of b){const M=i.get(k);if(!M)continue;const A=ob(M,a);sb(n,A)&&w.add(k)}return w}function Ay(e,n,i,a){var d;if(i.zoom<=0||e<=0||n<=0)return null;const c=i.zoom/aa;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(e-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function Zw(e,n){return n>0?{left:e.left-n,top:e.top-n,right:e.right+n,bottom:e.bottom+n}:e}function Ny(e,n,i){const a=n/aa;return!Number.isFinite(a)||a<=0?e:Zw(e,100/a)}function Dy(e){return e.replace(/\\/g,"/").replace(/\/+$/,"")}function Oi(e,n){return!e||!n?!1:e===n||e.startsWith(n)||n.startsWith(e)}function $m(e,n){if(n){const i=Dy(n),a=Dy(e.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!e.isCurrent}function tm(e,n){return e.pathExists===!1?!1:$m(e,n)}function Jw(e){const n=e.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?e:`.../${n.slice(-2).join("/")}`}function eS({compactLabels:e=!1,selectedVisibleCommitShas:n,commitInProgress:i,commitDisabled:a,stashInProgress:c,stashDisabled:u,pushInProgress:d,hasUncommittedChanges:h,createBranchFromNodeInProgress:p,onCommitLocalChanges:y,onStashLocalChanges:g,onPushCurrentBranch:b,onPushAllBranches:w,onPushCommitTargets:k,onMergeRefsIntoBranch:M,selectedPushTargets:A,selectedPushLabel:T,canPushCurrentBranch:D,pushCurrentBranchLabel:I,pushableRemoteBranchCount:O,selectedCommitTargetOption:N,mergeInProgress:G,setMergeTargetCommitSha:X,worktrees:U,currentRepoPath:K,worktreeMenuOpen:le,setWorktreeMenuOpen:de,onSwitchToWorktree:me,onRemoveWorktree:Ae,removeWorktreeInProgress:Xe,setCommitDialogOpen:oe,setNewBranchDialogOpen:se,hideMergeControls:z=!1}){var st,Dt;const te=n.length>0,Y=n.length>0&&n.every(lt=>lt==="WORKING_TREE"),[fe,Se]=_.useState(!1),P=_.useRef(null),ae=_.useRef(null),ee="inline-flex h-7 items-center rounded-md border border-border bg-background px-2 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",xe=!!y&&h&&!a&&!i&&(!te||Y),Te=!!b&&D&&!te&&!d,he=!!k&&A.length>0&&!d,ze=!!w&&O>=2&&!te&&!d,Qe=!!g&&!u&&!te&&!c,We="Push Selected...",ut=xe?{label:i?"Committing...":"Commit",iconSrc:"/icon-commit.svg",run:()=>oe(!0),disabled:!xe}:Te?{label:d?"Pushing...":I,iconSrc:"/icon-pushBranch.svg",run:()=>void(b==null?void 0:b()),disabled:!Te}:he?{label:We,iconSrc:"/icon-pushSelected.svg",run:()=>void(k==null?void 0:k(A.map(lt=>({branchName:lt.branchName,targetSha:lt.targetSha})))),disabled:!he}:null,kt=(lt,qt)=>l.jsx("span",{"aria-hidden":"true",className:mn("inline-block shrink-0 bg-current",qt),style:{WebkitMaskImage:`url(${lt})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${lt})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}});return _.useEffect(()=>{const lt=qt=>{var Q,Ne;const Kt=qt.target;Kt&&((Q=P.current)!=null&&Q.contains(Kt)||(Ne=ae.current)!=null&&Ne.contains(Kt)||(Se(!1),de(!1)))};return window.addEventListener("pointerdown",lt),()=>window.removeEventListener("pointerdown",lt)},[de]),l.jsx("div",{className:"window-no-drag pointer-events-none z-[60] flex w-full justify-start",children:l.jsxs("div",{className:"pointer-events-auto flex w-fit max-w-full flex-nowrap items-center justify-start gap-[9px]",children:[l.jsxs("div",{ref:P,className:"relative inline-flex h-7 items-stretch rounded-md border border-border bg-background",children:[l.jsx("button",{type:"button",onClick:()=>{ut&&ut.run()},disabled:!ut||ut.disabled,className:mn(ee,"h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-muted"),children:l.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[kt((st=ut==null?void 0:ut.iconSrc)!=null?st:"/icon-commit.svg","h-4.5 w-4.5"),e?null:l.jsx("span",{children:(Dt=ut==null?void 0:ut.label)!=null?Dt:"Commit"})]})}),l.jsx("button",{type:"button",onClick:()=>Se(lt=>!lt),disabled:!ut,"aria-haspopup":"menu","aria-expanded":fe,className:mn(ee,"h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-muted"),title:"More actions",children:l.jsx(Kx,{className:"h-3.5 w-3.5 shrink-0"})}),fe&&ut?l.jsxs("div",{className:"absolute left-[-1px] top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border bg-background p-1",children:[l.jsxs("button",{type:"button",onClick:()=>{Se(!1),oe(!0)},disabled:!xe,className:mn(ee,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!xe&&"text-foreground opacity-50"),children:[kt("/icon-commit.svg","mr-1.5 h-4.5 w-4.5"),i?"Committing...":"Commit"]}),l.jsxs("button",{type:"button",onClick:()=>{Se(!1),b==null||b()},disabled:!Te,className:mn(ee,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!Te&&"text-foreground opacity-50"),children:[kt("/icon-pushBranch.svg","mr-1.5 h-4.5 w-4.5"),d?"Pushing...":I]}),l.jsxs("button",{type:"button",onClick:()=>{Se(!1),k==null||k(A.map(lt=>({branchName:lt.branchName,targetSha:lt.targetSha})))},disabled:!he,className:mn(ee,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!he&&"text-foreground opacity-50"),title:T,children:[kt("/icon-pushSelected.svg","mr-1.5 h-4.5 w-4.5"),We]}),l.jsxs("button",{type:"button",onClick:()=>{Se(!1),w==null||w()},disabled:!ze,className:mn(ee,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!ze&&"text-foreground opacity-50"),children:[kt("/icon-pushAll.svg","mr-1.5 h-4.5 w-4.5"),"Push all"]}),l.jsxs("button",{type:"button",onClick:()=>{Se(!1),g==null||g()},disabled:!Qe,className:mn(ee,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!Qe&&"text-foreground opacity-50"),children:[kt("/icon-stash.svg","mr-1.5 h-4.5 w-4.5"),c?"Stashing...":"Stash"]})]}):null]}),l.jsx("div",{className:"flex w-fit flex-nowrap items-center gap-[9px]",children:l.jsxs("button",{type:"button",onClick:()=>se(!0),disabled:p,className:mn(ee,"pointer-events-auto relative z-10 !bg-background !border-border hover:!bg-muted",e?"w-7 justify-center px-0":""),children:[l.jsx(Qx,{className:mn("h-3.5 w-3.5 shrink-0",e?"":"mr-1.5")}),e?null:p?"Creating...":"Branch"]})}),!z&&n.length>1&&N.options.length>0&&N.targetBranch&&M?l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border bg-background px-2 py-1",children:[l.jsx("span",{className:"px-1 text-[11px] font-medium text-foreground",children:"Merge to"}),N.options.map(lt=>{const qt=lt.targetBranch===N.targetBranch;return l.jsx("button",{type:"button",onClick:()=>X(lt.targetSha),className:mn("rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors",qt?"bg-background text-foreground":"text-foreground hover:bg-muted hover:text-foreground"),children:lt.targetBranch},`merge-${lt.targetBranch}`)}),l.jsxs("button",{type:"button",onClick:()=>void M(N.sources,N.targetBranch),disabled:N.sources.length===0||G,className:"rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(Zx,{className:"mr-1 inline h-3 w-3 shrink-0 align-text-bottom"}),G?"Merging...":"Confirm"]})]}):null,U.length>0&&(me||Ae)?l.jsxs("div",{ref:ae,className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>de(lt=>!lt),className:mn(ee,"!bg-background !border-border hover:!bg-muted"),children:[l.jsx(yw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),U.length,e?null:` ${U.length===1?"Worktree":"Worktrees"}`]}),le?l.jsx("div",{className:"absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-md border border-border bg-background p-1",children:U.map(lt=>{var qt;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:lt.path,children:$m(lt,K)?Jw(lt.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-foreground",children:[(qt=lt.branchName)!=null?qt:"detached"," • ",lt.headSha.slice(0,7)]})]}),$m(lt,K)?l.jsxs("div",{className:"flex items-center gap-1",children:[me?l.jsx("button",{type:"button",onClick:()=>{de(!1),me(lt.path)},disabled:Xe||lt.pathExists===!1,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,Ae?l.jsx("button",{type:"button",onClick:()=>void Ae(lt.path,lt.isPrunable),disabled:Xe,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Xe?"...":"Remove"}):null]}):null]},lt.path)})}):null]}):null]})})}function tS({fadeIn:e,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=_.useState(!e);return _.useLayoutEffect(()=>{if(!e){p(!0);return}p(!1);let y=null;const g=requestAnimationFrame(()=>{y=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(g),y!=null&&cancelAnimationFrame(y)}},[e]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:e?"opacity 240ms ease-out":void 0},children:d})}function nS({scrollContainerRef:e,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:y,labelTopPx:g,inverseZoomStyle:b,displayZoom:w,selectedVisibleCommitShas:k,normalizedSearchQuery:M,matchingNodeIds:A,focusedNode:T,renderNodes:D,shouldRenderNode:I,manuallyOpenedClumps:O,manuallyClosedClumps:N,defaultCollapsedClumps:G,leadByClusterKey:X,clusterKeyByCommitId:U,clusterCounts:K,commitIdsWithRenderedAncestry:le,nodeWarnings:de,connectorParentShas:me,branchStartShas:Ae,branchOffNodeShas:Xe,crossBranchOutgoingShas:oe,branchBaseCommitByName:se,branchStartAccentClass:z,connectorParentAccentClass:te,commitCornerRadiusPx:Y,lineStrokeWidth:fe,pointFormatter:Se,connectors:P,mergeConnectors:ae,cullConnectorPath:ee,flushCameraReactTick:xe,setManuallyOpenedClumps:Te,setManuallyClosedClumps:he,onCommitCardClick:ze,unpushedCommitShasSetByBranch:Qe,remoteCommitShas:We,checkedOutHeadSha:ut}){const[kt,bt]=_.useState(new Set),st=_.useRef(null);_.useEffect(()=>{const Q=new Set;K.forEach((Ce,dt)=>{(O.has(dt)||!G.has(dt)&&!N.has(dt))&&Q.add(dt)});const Ne=st.current;if(Ne==null){st.current=Q;return}const at=[];if(Q.forEach(Ce=>{Ne.has(Ce)||at.push(Ce)}),at.length>0){bt(dt=>{const He=new Set(dt);return at.forEach(ft=>He.add(ft)),He});const Ce=window.setTimeout(()=>{bt(dt=>{const He=new Set(dt);return at.forEach(ft=>He.delete(ft)),He})},260);return st.current=Q,()=>{window.clearTimeout(Ce)}}st.current=Q},[K,G,N,O]);const Dt=(Q,Ne)=>{const at=Ne.zIndex-Q.zIndex;if(at!==0)return at;const Ce=Math.min(Q.fromY,Q.toY),dt=Math.min(Ne.fromY,Ne.toY),He=Ce-dt;return He!==0?He:Q.id.localeCompare(Ne.id)},lt=ae.filter(Q=>ee(Q)).sort(Dt),qt=P.filter(Q=>ee(Q)).sort(Dt),Kt=D.filter(Q=>I(Q));return l.jsx("div",{ref:e,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},onWheel:h,onMouseDown:p,children:l.jsx("div",{ref:n,className:"relative min-w-full bg-background p-2.5",style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[Kt.map(Q=>{var It,pn,Et,yt,un,tn;const Ne=U.get(Q.commit.visualId),at=Ne?O.has(Ne)||!G.has(Ne)&&!N.has(Ne):!1,Ce=Ne?X.get(Ne)===Q.commit.visualId:!1,dt=Ne!=null&&at&&!Ce&&kt.has(Ne),He=Ne&&(It=K.get(Ne))!=null?It:1,ft=le.has(Q.commit.id),mt=(pn=de.get(Q.commit.id))!=null?pn:[],jt=mt.length>0&&!ft,Rt=k.includes(Q.commit.id),ot=Q.commit.id==="WORKING_TREE"||Q.commit.kind==="uncommitted",V=Q.commit.kind==="stash"||Q.commit.id.startsWith("STASH:"),J=/^STASH:(\d+)$/.exec(Q.commit.id),be=J?`Stash ${Number.parseInt(J[1],10)+1}`:null,Ee=V?Q.commit.message.trim()&&Q.commit.message.trim()!=="git-visualizer"?Q.commit.message:"Stashed changes":Q.commit.message,nt=Q.commit.kind==="branch-created"&&Q.commit.id.startsWith("BRANCH_HEAD:"),Ge=ot||((yt=(Et=Qe.get(Q.commit.branchName))==null?void 0:Et.has(Q.commit.id))!=null?yt:!1),Be=Q.commit.isRemote===!0,pe=!ot&&!Ge&&(Be||We.has(Q.commit.id)),Ye=(ot||ut!=null&&Q.commit.id===ut)&&!Rt,Je=pe&&!Ye&&!Rt,De=Ye?"text-checked":Je?"text-remote":Rt?"text-select":"text-foreground",et=Ye?{color:"var(--checked)"}:Je?{color:"var(--remote)"}:Rt?{color:"var(--select)"}:void 0,_t=(un=et==null?void 0:et.color)!=null?un:"var(--foreground)",gt=(T==null?void 0:T.commit.id)===Q.commit.id?_t:Ye?"var(--checked)":Je?"var(--remote)":Rt?"var(--select)":Zh,Ke=V||nt||ot?1.25/w:fe,Lt=V||ot||nt,wt=`${12/w} ${6/w}`,ct=Ke/2,cn=`M ${ct} ${ct} H ${$n-ct-Y} Q ${$n-ct} ${ct} ${$n-ct} ${ct+Y} V ${176-ct-Y} Q ${$n-ct} ${176-ct} ${$n-ct-Y} ${176-ct} H ${ct+Y} Q ${ct} ${176-ct} ${ct} ${176-ct-Y} V ${ct}`,rt=Ge&&!Ye&&!Rt?{color:"var(--muted-foreground)"}:void 0;return l.jsxs(tS,{fadeIn:dt,dataCommitCard:"true",className:mn("group absolute z-20",M&&!A.has(Q.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",M&&A.has(Q.commit.id)?"scale-[1.01]":"",(T==null?void 0:T.commit.id)===Q.commit.id?"z-30":""),style:{left:Q.x,top:Q.y,width:$n,height:Ol+Vs+4,overflow:"visible"},onClick:Qt=>ze(Qt,Q),onPointerDown:Qt=>y(Qt,Q),children:[Lt?l.jsx("svg",{className:"pointer-events-none absolute inset-0 z-20 overflow-visible","aria-hidden":"true",viewBox:`0 0 ${$n} 176`,preserveAspectRatio:"none",children:l.jsx("path",{d:cn,fill:"none",stroke:gt,strokeWidth:Ke,strokeDasharray:wt,strokeLinecap:"butt",strokeLinejoin:"round"})}):null,l.jsx("div",{className:"absolute left-0 z-30 w-full",style:{...b,top:`${g}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 bg-transparent pb-0",children:[l.jsx("div",{className:mn("min-w-0 h-4 flex-1 text-sm font-normal leading-none",De,w<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:et!=null?et:rt,children:V&&be?be:Q.commit.branchName?`${Q.commit.branchName}/${Q.commit.id.slice(0,7)}`:Q.commit.id.slice(0,7)}),Ce&&He>1?l.jsx("button",{type:"button",onMouseDown:Qt=>{Qt.stopPropagation()},onClick:Qt=>{if(Qt.stopPropagation(),Qt.preventDefault(),!Ne)return;!G.has(Ne)?(Te(Jt=>{if(!Jt.has(Ne))return Jt;const At=new Set(Jt);return At.delete(Ne),At}),he(Jt=>{const At=new Set(Jt);return At.has(Ne)?At.delete(Ne):At.add(Ne),At})):(he(Jt=>{if(!Jt.has(Ne))return Jt;const At=new Set(Jt);return At.delete(Ne),At}),Te(Jt=>{const At=new Set(Jt);return At.has(Ne)?At.delete(Ne):At.add(Ne),At})),xe()},className:mn("inline-flex self-start items-center bg-transparent p-0 text-sm font-normal leading-none",De),style:et!=null?et:rt,children:at?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`+${He-1}`}):null]})}),l.jsx("div",{className:mn("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",Ye&&!Ge&&!V&&!nt?"bg-checked-muted":Je&&!V&&!nt?"bg-remote-muted":Rt&&!Ge&&!V&&!nt?"bg-select-muted":Ge||V||nt?"bg-transparent":"bg-muted",Lt?"border-solid":"",Xe.has(Q.commit.id)||Ae.has(Q.commit.id)||oe.has(Q.commit.id)?z:me.has(Q.commit.id)?te:((tn=se.get(Q.commit.branchName))==null?void 0:tn.id)===Q.commit.id?"border-amber-500":jt?"border-red-500":"",(M&&A.has(Q.commit.id)&&!d,"")),style:{top:0,borderWidth:`${Ke}px`,borderColor:Lt?"transparent":gt,borderTopLeftRadius:0,borderTopRightRadius:`${Y}px`,borderBottomRightRadius:`${Y}px`,borderBottomLeftRadius:`${Y}px`},children:l.jsxs("div",{className:"relative z-10 flex h-full min-h-0 flex-col px-2.5 py-2",style:b,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:mn("max-w-[38rem] select-text text-sm font-normal leading-tight tracking-tight text-foreground",De,w<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),"data-selectable-text":"true",style:et!=null?et:rt,children:Ce&&at?Ee:Ce&&He>1?`${Ee} +${He-1}`:Ee}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:jt?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-foreground dark:bg-red-900/20 dark:text-foreground",title:mt.join(`
`),children:"Broken ancestry"}):null})]}),w>.5&&!V?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:mn("select-text text-sm font-normal",De),"data-selectable-text":"true",style:et!=null?et:rt,children:["@",Q.commit.author]}),l.jsx("div",{className:mn("select-text text-sm font-normal",De),"data-selectable-text":"true",style:et!=null?et:rt,children:new Date(Q.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null]})})]},Q.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[lt.map(Q=>{const{fromX:Ne,fromY:at,toX:Ce,toY:dt}=Q,He=My(Ne,at,Ce,dt,Se,Q.fromFace,Q.toFace);return l.jsx("path",{d:He,fill:"none",stroke:Zh,strokeWidth:fe,strokeLinecap:"round",strokeLinejoin:"round"},Q.id)}),qt.map(Q=>{const{fromX:Ne,fromY:at,toX:Ce,toY:dt}=Q,He=My(Ne,at,Ce,dt,Se,Q.fromFace,Q.toFace);return l.jsx("path",{d:He,fill:"none",stroke:Zh,strokeWidth:fe,strokeLinecap:"round",strokeLinejoin:"round"},Q.id)})]})]})})})}function sS({isOpen:e,onClose:n,visibleBounds:i,renderedNodeCount:a,totalNodeCount:c,renderedMergeConnectorCount:u,totalMergeConnectorCount:d,renderedConnectorCount:h,totalConnectorCount:p,mapGridCullViewportInsetScreenPx:y,debugRows:g,branchDebugRows:b,connectorDecisions:w}){return l.jsx(l.Fragment,{children:e?l.jsxs("div",{className:"absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:n,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${y}px screen/side): ${i?`${(i.right-i.left).toFixed(0)} x ${(i.bottom-i.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${a} / ${c}`,`Rendered merge connectors: ${u} / ${d}`,`Rendered connectors: ${h} / ${p}`,"",...g,...b,"",...w.map(k=>`${k.rendered?"rendered":"skipped"} [${k.kind}] ${k.parent.slice(0,7)} -> ${k.child.slice(0,7)} (${k.reason})`)].join(`
`)})})]}):null})}function oS({commitDialogOpen:e,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:y,deleteInProgress:g,deletableSelectionCount:b,newBranchDialogOpen:w,newBranchName:k,newBranchCreateMode:M,onNewBranchNameChange:A,onNewBranchCreateModeChange:T,onNewBranchDialogClose:D,onNewBranchConfirm:I,selectedCommitCanCreateBranch:O,currentCheckedOutCommitCanCreateBranch:N,createBranchFromNodeInProgress:G}){return l.jsxs(l.Fragment,{children:[e?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:a,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-background p-4",onClick:X=>X.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:X=>i(X.target.value),onKeyDown:X=>{(X.metaKey||X.ctrlKey)&&X.key==="Enter"&&(X.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(vw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),u?"Committing...":"Commit"]})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:p,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-background p-4",onClick:X=>X.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(X=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:X},X))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsx("button",{type:"button",onClick:y,disabled:b===0||g,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:g?"Deleting...":"Delete"})]})]})}):null,w?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:D,children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-background p-4",onClick:X=>X.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>T("from-selected-node"),className:mn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",M==="from-selected-node"?"bg-background text-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>T("new-root"),className:mn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",M==="new-root"?"bg-background text-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:"New root"})]}),M==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:k,onChange:X=>A(X.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:D,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:I,disabled:!k.trim()||G||M==="from-selected-node"&&!O&&!N,className:mn("inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted","disabled:cursor-not-allowed disabled:opacity-50"),children:[l.jsx(Qx,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),G?"Creating...":"Create"]})]})]})}):null]})}const Ry="/icon-GitOrientation.svg";function iS({compactLabels:e=!1,orientation:n,onOrientationChange:i}){const a=n==="horizontal"?"vertical":"horizontal";return l.jsxs("button",{type:"button",onClick:()=>i(a),className:mn("window-no-drag inline-flex h-7 items-center rounded-md border border-border bg-background text-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",e?"w-7 justify-center px-0":"gap-1.5 pl-1.5 pr-2 py-1"),"aria-label":`Rotate view to ${a}`,title:"Rotate View",children:[l.jsx("span",{className:"relative size-4 shrink-0",children:l.jsx("span",{"aria-hidden":"true",className:mn("absolute inset-0 bg-current transition-transform duration-300 ease-in-out",n==="vertical"&&"rotate-[-90deg]"),style:{WebkitMaskImage:`url(${Ry})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${Ry})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}})}),e?null:l.jsx("span",{className:"whitespace-nowrap text-[12px] font-normal leading-none text-foreground transition-colors",children:"Rotate View"})]})}function aS({query:e,onQueryChange:n,resultCount:i,resultIndex:a,onJump:c}){const u=_.useRef(null);return l.jsxs("div",{className:"window-no-drag flex h-7 w-[12rem] shrink-0 items-center gap-2 rounded-full border border-border bg-background pl-1.5 pr-2.5",children:[l.jsx(Ew,{className:"h-3.5 w-3.5 shrink-0 text-foreground"}),l.jsx("input",{ref:u,value:e,onChange:d=>n(d.target.value),onBlur:d=>{const h=d.relatedTarget;h!=null&&h.closest('button, a, input, textarea, select, [contenteditable="true"]')||window.setTimeout(()=>{var p;(p=u.current)==null||p.focus()},0)},onKeyDown:d=>{d.key==="Enter"&&(d.preventDefault(),c(1))},placeholder:"Search",className:"min-w-0 flex-1 bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"}),i!=null&&i>0?l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-[11px] font-medium tabular-nums text-foreground",children:[(a!=null?a:0)+1,"/",i]}),l.jsx("button",{type:"button",onClick:()=>c(-1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-foreground transition-colors hover:text-foreground","aria-label":"Previous search result",title:"Previous result",children:l.jsx(mw,{className:"h-4 w-4 shrink-0"})}),l.jsx("button",{type:"button",onClick:()=>c(1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-foreground transition-colors hover:text-foreground","aria-label":"Next search result",title:"Next result",children:l.jsx(Kx,{className:"h-4 w-4 shrink-0"})})]}):null]})}const rS="git-visualizer:map-grid-camera:";function lS({mapPadHostRef:e,transformLayerRef:n,isEnabled:i=!0,onUserCameraChange:a}){const c=_.useRef({x:0,y:0}),u=_.useRef(kc),d=_.useRef(null),h=_.useRef({panX:0,panY:0,zoom:kc}),p=_.useRef(null),y=_.useRef(kc),g=_.useRef(null),[b,w]=_.useState(!1),[k,M]=_.useState(kc),[A,T]=_.useState(0),D=_.useRef(null),I=_.useRef(0),O=_.useRef(!1),N=_.useCallback(()=>`${rS}${window.location.pathname}`,[]),G=_.useCallback(se=>{try{window.localStorage.setItem(N(),JSON.stringify(se))}catch{}},[N]),X=_.useCallback(()=>{const se=e.current;if(!se)return null;const z=se.getBoundingClientRect(),te=getComputedStyle(se),Y=Number.parseFloat(te.borderLeftWidth)||0,fe=Number.parseFloat(te.borderTopWidth)||0,Se=Number.parseFloat(te.paddingLeft)||Pd,P=Number.parseFloat(te.paddingTop)||Pd;return{x:z.left+Y+Se,y:z.top+fe+P}},[e]),U=_.useCallback(()=>{D.current!=null&&(window.clearTimeout(D.current),D.current=null),_.startTransition(()=>{T(se=>se+1)}),I.current=performance.now()},[]),K=_.useCallback((se,z,te,Y)=>{const fe=h.current,Se={panX:se,panY:z,zoom:te};h.current=Se;const P=n.current;if(P&&(P.style.transform=`translate3d(${se}px, ${z}px, 0) scale(${te/aa})`),Math.abs(y.current-te)>id&&(y.current=te,M(te)),(Y==null?void 0:Y.emitTick)===!1||O.current)return;if(Math.abs(te-fe.zoom)>id){U();return}const xe=performance.now()-I.current;if(xe>=Ey){U();return}D.current!=null&&window.clearTimeout(D.current),D.current=window.setTimeout(()=>{D.current=null,U()},Ey-xe)},[U,n]),le=_.useRef(null),de=_.useCallback(()=>{p.current!=null||!le.current||(p.current=window.requestAnimationFrame(le.current))},[]),me=_.useCallback(()=>{O.current=!0,w(!0),g.current!=null&&window.clearTimeout(g.current),g.current=window.setTimeout(()=>{g.current=null,O.current=!1,w(!1),U(),G(h.current)},90)},[U,G]),Ae=_.useCallback((se,z,te)=>{i&&(c.current={x:se,y:z},u.current=te,me(),de())},[i,me,de]);le.current=()=>{p.current=null;const se=h.current,z=c.current.x,te=c.current.y,Y=u.current,fe=d.current,Se=Math.abs(Y-se.zoom)<=id?Y:se.zoom+(Y-se.zoom)*Yw,P=fe!=null?fe.anchorX-fe.worldX*(Se/aa):z,ae=fe!=null?fe.anchorY-fe.worldY*(Se/aa):te;fe!=null&&Math.abs(Se-Y)<=id&&(d.current=null),K(P,ae,Se),P!==z||ae!==te||Se!==Y?le.current&&(p.current=window.requestAnimationFrame(le.current)):U()};const Xe=_.useCallback((se,z,te)=>{if(!i)return;const Y=Ty(te),fe=c.current.x,Se=c.current.y,P=u.current,ae=X();if(!ae){Ae(fe,Se,Y);return}const ee=se-ae.x,xe=z-ae.y,Te=P/aa,he=Y/aa,ze=(ee-fe)/Te,Qe=(xe-Se)/Te,We=ee-ze*he,ut=xe-Qe*he;d.current={anchorX:ee,anchorY:xe,worldX:ze,worldY:Qe},Ae(We,ut,Y)},[X,i,Ae]),oe=_.useCallback(se=>{if(!i)return;if(se.preventDefault(),se.ctrlKey||se.metaKey){a==null||a();const fe=Math.exp(-se.deltaY*Uw);Xe(se.clientX,se.clientY,u.current*fe);return}a==null||a(),d.current=null;const z=h.current;c.current={x:z.panX,y:z.panY},u.current=z.zoom;const te=z.panX-se.deltaX,Y=z.panY-se.deltaY;c.current={x:te,y:Y},K(te,Y,z.zoom)},[K,i,a,Xe]);return _.useLayoutEffect(()=>{if(!i)return;let se={panX:0,panY:0,zoom:kc};try{const z=window.localStorage.getItem(N());if(z){const te=JSON.parse(z);typeof te.panX=="number"&&Number.isFinite(te.panX)&&typeof te.panY=="number"&&Number.isFinite(te.panY)&&typeof te.zoom=="number"&&Number.isFinite(te.zoom)&&(se={panX:te.panX,panY:te.panY,zoom:Ty(te.zoom)})}}catch{}return c.current={x:se.panX,y:se.panY},u.current=se.zoom,K(se.panX,se.panY,se.zoom,{emitTick:!1}),()=>{g.current!=null&&window.clearTimeout(g.current),p.current!=null&&window.cancelAnimationFrame(p.current),D.current!=null&&(window.clearTimeout(D.current),D.current=null),G(h.current)}},[K,N,i,G]),{isCameraMoving:b,renderedZoom:k,cameraRenderTick:A,renderedCameraRef:h,interactionIdleTimeoutRef:g,getTransformLayerOriginScreen:X,flushCameraReactTick:U,syncCamera:Ae,handleWheel:oe}}function cS(e){const n=Math.min(e.startX,e.currentX),i=Math.min(e.startY,e.currentY),a=Math.abs(e.currentX-e.startX),c=Math.abs(e.currentY-e.startY);return{left:n,top:i,width:a,height:c}}function uS({scrollContainerRef:e,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=_.useRef(null),h=_.useRef(!1),p=_.useRef([]),[y,g]=_.useState(!1),[b,w]=_.useState(null),[k,M]=_.useState([]),[A,T]=_.useState(null),D=_.useCallback(O=>{const N=e.current,G=i();if(!N||!G)return[];const X=N.getBoundingClientRect(),U=n.current.zoom/aa;if(U<=0)return[];const K=[],le=O.left,de=O.left+O.width,me=O.top,Ae=O.top+O.height;for(const Xe of a){if(!c(Xe))continue;const oe=G.x+n.current.panX+Xe.x*U-X.left,se=G.y+n.current.panY+Xe.y*U-X.top,z=oe+$n*U,te=se+(Ol+Vs)*U;!(z<le||oe>de||te<me||se>Ae)&&K.push(Xe.commit.id)}return K},[i,a,n,e,c]),I=_.useCallback(O=>{if(O.button!==0)return;const N=O.target;if(N!=null&&N.closest("[data-commit-card]")||N!=null&&N.closest("button, a, input, textarea, select"))return;const G=e.current;if(!G)return;O.preventDefault();const X=G.getBoundingClientRect(),U=O.clientX-X.left,K=O.clientY-X.top;d.current={startX:U,startY:K,currentX:U,currentY:K,additive:O.metaKey||O.ctrlKey},h.current=!1,p.current=O.metaKey||O.ctrlKey?k:[],g(!0),w({left:U,top:K,width:0,height:0})},[e,k]);return _.useEffect(()=>{const O=G=>{var me;const X=d.current;if(!X)return;const U=e.current;if(!U)return;const K=U.getBoundingClientRect();X.currentX=G.clientX-K.left,X.currentY=G.clientY-K.top,!h.current&&(Math.abs(X.currentX-X.startX)>2||Math.abs(X.currentY-X.startY)>2)&&(h.current=!0);const le=cS(X);w(le);const de=D(le);M(X.additive?Array.from(new Set([...p.current,...de])):Array.from(new Set(de))),X.additive||T((me=de[de.length-1])!=null?me:null)},N=()=>{if(d.current){const G=h.current;d.current=null,h.current=!1,g(!1),w(null),G||(M([]),T(null));return}u()};return window.addEventListener("mousemove",O),window.addEventListener("mouseup",N),()=>{window.removeEventListener("mousemove",O),window.removeEventListener("mouseup",N)}},[D,u,e]),{isMarqueeSelecting:y,marqueeRect:b,selectedCommitShas:k,setSelectedCommitShas:M,mergeTargetCommitSha:A,setMergeTargetCommitSha:T,startMarqueeDrag:I}}function dS(){return l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center",children:l.jsx("div",{role:"status","aria-label":"Loading commits",className:"h-5 w-5 rounded-full border-2 border-border border-t-muted-foreground animate-spin"})})}function By({branches:e,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:y,staleBranches:g=[],isLoading:b=!1,scrollRequest:w,focusedErrorBranch:k,mapTopInsetPx:M=0,onMergeRefsIntoBranch:A,mergeInProgress:T=!1,onPushAllBranches:D,onPushCurrentBranch:I,onPushCommitTargets:O,pushInProgress:N=!1,onDeleteSelection:G,deleteInProgress:X=!1,worktrees:U=[],currentRepoPath:K,onRemoveWorktree:le,removeWorktreeInProgress:de=!1,onSwitchToWorktree:me,onStashLocalChanges:Ae,stashInProgress:Xe=!1,stashDisabled:oe=!1,onCommitLocalChanges:se,commitInProgress:z=!1,commitDisabled:te=!1,onStageAllChanges:Y,stageInProgress:fe=!1,onCreateBranchFromNode:Se,onCreateRootBranch:P,createBranchFromNodeInProgress:ae=!1,isDebugOpen:ee=!1,onDebugClose:xe,orientation:Te="horizontal",branchCommitPreviews:he={},branchParentByName:ze={},branchUniqueAheadCounts:Qe={},gridSearchQuery:We="",gridSearchJumpToken:ut=0,gridSearchJumpDirection:kt=1,gridFocusSha:bt=null,checkedOutRef:st=null,onGridSearchResultCountChange:Dt,onGridSearchResultIndexChange:lt,onGridSearchFocusChange:qt,onInteractionChange:Kt,manuallyOpenedClumps:Q,manuallyClosedClumps:Ne,setManuallyOpenedClumps:at,setManuallyClosedClumps:Ce,layoutModel:dt,gridHudProps:He}){var bo,vo,fi,Oo,zo,ca,x,v,C,j,R,W;const ft=_.useRef(null),mt=_.useRef(null),jt=_.useRef(null),Rt=_.useRef(null),ot=_.useRef(null),V=_.useRef(void 0),J=_.useRef(void 0),be=_.useRef(void 0),Ee=_.useRef(0),nt=_.useRef(null),[Ge,Be]=_.useState(!1),[pe,Ze]=_.useState(!1),[Ye,Je]=_.useState(""),[De,et]=_.useState(!1),[_t,gt]=_.useState(!1),[Ke,Lt]=_.useState(""),[wt,ct]=_.useState("from-selected-node"),[cn,rt]=_.useState(()=>new Set),[It,pn]=_.useState(()=>new Set),[Et,yt]=_.useState({}),un=_.useRef(!1),tn=_.useRef(null),Qt=_.useRef(null),$t=Q!=null?Q:cn,Jt=Ne!=null?Ne:It,At=at!=null?at:rt,bn=Ce!=null?Ce:pn,[tt,ds]=_.useState(null),[fs,No]=_.useState(null),[eo,Co]=_.useState(!1),[po,Do]=_.useState(!1),is=_.useId(),{isCameraMoving:Xt,renderedZoom:Rn,cameraRenderTick:en,renderedCameraRef:as,interactionIdleTimeoutRef:xs,getTransformLayerOriginScreen:bs,flushCameraReactTick:sn,syncCamera:As,handleWheel:Rs}=lS({mapPadHostRef:jt,transformLayerRef:Rt}),_o=_.useMemo(()=>{if(dt)return dt;const B=vp(e,d,he,ze);return wp({lanes:B,branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,defaultBranch:d,branchCommitPreviews:he,branchParentByName:ze,branchUniqueAheadCounts:Qe,manuallyOpenedClumps:$t,manuallyClosedClumps:Jt,isDebugOpen:ee,gridSearchQuery:We,gridFocusSha:bt,checkedOutRef:st!=null?st:null,orientation:Te,nodePositionOverrides:Et})},[dt,e,n,i,a,c,d,he,ze,Qe,$t,Jt,ee,We,bt,(bo=st==null?void 0:st.headSha)!=null?bo:null,(vo=st==null?void 0:st.branchName)!=null?vo:null,Te,Et]),{allCommits:to,clusterKeyByCommitId:Yn,leadByClusterKey:Ws,clusterCounts:on,matchingNodes:Fs,matchingNodeIds:Ci,normalizedSearchQuery:Ms,focusedNode:ko,defaultCollapsedClumps:Bs,renderNodes:Wn,visibleNodesBySha:ms,contentWidth:Xs,contentHeight:Bn,connectors:Ls,mergeConnectors:Fn,connectorDecisions:Xn,nodeWarnings:ci,commitIdsWithRenderedAncestry:ps,connectorParentShas:no,branchStartShas:Zt,branchOffNodeShas:ki,crossBranchOutgoingShas:Gn,branchBaseCommitByName:zi,pointFormatter:go}=_o,Ns=!!Ms,rs=Rn/aa,qo=_.useMemo(()=>({transform:`scale(${1/rs})`,transformOrigin:"top left",width:`${100*rs}%`,height:`${100*rs}%`}),[rs]),vs=-(20/rs),En=_.useMemo(()=>{const B=new Map;for(const H of Wn)B.set(H.commit.visualId,H);return B},[Wn]),yo=_.useMemo(()=>Kw(Wn,vs),[Wn,vs]),ui=B=>{var ue;const H=B.commit.id,Z=B.commit.visualId;if(Ns&&Ci.has(H)||(ko==null?void 0:ko.commit.id)===H||tt===null)return!0;if(!tt.has(Z))return!1;const ie=Yn.get(Z);return ie&&((ue=on.get(ie))!=null?ue:1)>1&&($t.has(ie)||!Bs.has(ie)&&!Jt.has(ie)),!0},Os=1.25/rs,jo=Ww/rs,xn="border-border/70",Gs="border-select",zs=_.useMemo(()=>new Map(e.map(B=>[B.name,B])),[e]),Ko=(fi=st==null?void 0:st.hasUncommittedChanges)!=null?fi:!1;_.useMemo(()=>new Set(e.filter(B=>B.commitsAhead===0&&!B.name.startsWith("*")).map(B=>B.name)),[e]);const Ds=_.useMemo(()=>{var H,Z;const B=new Map;for(const ie of Wn){const ue=(H=B.get(ie.commit.id))!=null?H:new Set;ue.add(ie.commit.branchName),B.set(ie.commit.id,ue)}for(const ie of i){const ue=(Z=B.get(ie.fullSha))!=null?Z:new Set;ie.branch&&ue.add(ie.branch),B.set(ie.fullSha,ue)}return B},[Wn,i,d]),Qo=_.useMemo(()=>new Map(Object.entries(c).map(([B,H])=>[B,new Set(H)])),[c]),Ro=_.useMemo(()=>{var ie;const B=new Set(i.map(ue=>ue.fullSha)),H=new Set,Z=ue=>{ue&&(H.add(ue),H.add(ue.slice(0,7)))};for(const ue of e){if(ue.commitsBehind<=0)continue;const Re=(ie=he[ue.name])!=null?ie:[];for(const we of Re)we.kind==="branch-created"||we.kind==="uncommitted"||we.kind==="stash"||B.has(we.fullSha)||Z(we.fullSha);ue.headSha&&!B.has(ue.headSha)&&Z(ue.headSha)}return H},[e,he,i]),$i=_.useCallback(()=>{xs.current,sn()},[sn,xs]),{isMarqueeSelecting:so,marqueeRect:Mo,selectedCommitShas:Zo,setSelectedCommitShas:Un,mergeTargetCommitSha:Es,setMergeTargetCommitSha:Eo,startMarqueeDrag:oo}=uS({scrollContainerRef:ft,renderedCameraRef:as,getTransformLayerOriginScreen:bs,renderNodes:Wn,shouldRenderNode:ui,onPointerReleaseNoMarquee:$i}),io=_.useMemo(()=>new Set(Wn.map(B=>B.commit.id)),[Wn]),kn=_.useMemo(()=>Zo.filter(B=>io.has(B)),[Zo,io]),$s=_.useCallback((B,H)=>{var ue;if(!H)return!1;if(((ue=he[B])!=null?ue:[]).some(Re=>Oi(Re.fullSha,H)||Oi(Re.sha,H)))return!0;const ie=zs.get(B);return!!(ie!=null&&ie.headSha&&Oi(ie.headSha,H))},[he,zs]),Nn=(Oo=st==null?void 0:st.branchName)!=null?Oo:null,Ps=(zo=st==null?void 0:st.headSha)!=null?zo:null,Yo=Nn==null,Wo=_.useMemo(()=>{if(!bt)return null;const B=Wn.filter(H=>H.commit.id===bt);return B.length===0?null:B.length===1||!ko?B[0]:B.reduce((H,Z)=>{const ie=(H.x-ko.x)**2+(H.y-ko.y)**2;return(Z.x-ko.x)**2+(Z.y-ko.y)**2<ie?Z:H})},[bt,Wn,ko]),Pi=_.useCallback((B,H,Z)=>{for(const ie of U){if(!tm(ie,K))continue;if(ie.branchName){if(ie.branchName===B&&Oi(ie.headSha,H))return ie;continue}if(!Oi(ie.headSha,H)&&!Oi(ie.headSha,Z))continue;if(ie.parentSha&&$s(B,ie.parentSha)||$s(B,ie.headSha))return ie;const ue=zs.get(B);if(ue&&Oi(ue.headSha,ie.headSha)||B===d&&i.some(Re=>Oi(Re.fullSha,ie.headSha)))return ie}return null},[U,K,$s,zs,d,i]),Jo=_.useCallback(B=>{for(const H of U)if(tm(H,K)&&H.branchName===B)return H;return null},[U,K]),ws=_.useCallback((B,H)=>{for(const Z of U)if(tm(Z,K)&&(Oi(Z.headSha,B)||Oi(Z.headSha,H)))return Z;return null},[U,K]),qs=_.useCallback(B=>{var H;return Array.from((H=Ds.get(B))!=null?H:[])},[Ds]),qn=_.useMemo(()=>{var Re,we,ke,Le;const B=vt=>!/^stash\b/i.test(vt.trim()),H=new Map;for(const vt of kn){const zt=qs(vt).filter(B);if(zt.length===0)continue;const ht=(Re=zt.find(St=>St!==d))!=null?Re:zt[0],xt=kn.filter(St=>St!==vt).filter(St=>!new Set(qs(St).filter(B)).has(ht));H.set(ht,{targetSha:vt,targetBranch:ht,sourceRefs:xt})}const Z=Array.from(H.values()),ie=Es?Z.find(vt=>{var zt;return vt.targetSha===Es||vt.targetBranch===((zt=qs(Es)[0])!=null?zt:"")}):null,ue=(we=ie!=null?ie:Z[Z.length-1])!=null?we:null;return{options:Z,selected:ue,targetBranch:(ke=ue==null?void 0:ue.targetBranch)!=null?ke:null,sources:(Le=ue==null?void 0:ue.sourceRefs)!=null?Le:[]}},[kn,qs,d,Es]),Ii=_.useMemo(()=>{const B=H=>!/^stash\b/i.test(H.trim());return kn.some(H=>{const Z=qs(H);return Z.length>0&&Z.filter(B).length===0})},[kn,qs]),ji=kn.length>1&&qn.options.length>0&&!!qn.targetBranch&&qn.sources.length>0&&!Ii&&!!A,[ei,Bt]=_.useState(!1);_.useEffect(()=>{ji&&Bt(!1)},[ji,kn]);const xo=_.useMemo(()=>{const B=[...Nn===d?[{name:d,headSha:Ps!=null?Ps:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...e].filter(H=>!H.name.startsWith("*")&&H.unpushedCommits>0&&H.remoteSyncStatus!=="on-github").map(H=>[H.name,H]);return new Map(B)},[e,Nn,Ps,d,a.length]),Ks=_.useMemo(()=>{const B=ie=>{var Re;const ue=qs(ie).filter(we=>xo.has(we));return ue.length===0?null:ue.length===1?ue[0]:Nn&&ue.includes(Nn)?Nn:(Re=ue.find(we=>we!==d))!=null?Re:ue[0]},H=ie=>{var ue;return ie===d?a.map(Re=>{var we,ke;return{fullSha:Re.fullSha,sha:Re.sha,parentSha:(we=Re.parentSha)!=null?we:null,message:Re.message,author:Re.author,date:Re.date,kind:(ke=Re.kind)!=null?ke:"commit"}}):(ue=he[ie])!=null?ue:[]},Z=new Map;for(const ie of kn){const ue=B(ie);if(!ue)continue;const Re=xo.get(ue);if(!Re)continue;const we=H(ue).slice(0,Re.unpushedCommits),ke=we.findIndex(vt=>vt.fullSha===ie);if(ke===-1)continue;const Le=Z.get(ue);(!Le||ke<Le.targetIndex)&&Z.set(ue,{branchName:ue,targetSha:ie,targetIndex:ke,commitCount:we.length-ke})}return Array.from(Z.values())},[kn,qs,xo,Nn,d,a,he]),di=_.useMemo(()=>Array.from(new Set(kn.map(B=>/^STASH:(\d+)$/.exec(B)).filter(B=>!!B).map(B=>parseInt(B[1],10)))).sort((B,H)=>B-H),[kn]),ti=kn.includes("WORKING_TREE"),Bo=(ti?1:0)+di.length,Mi=[...ti?["Uncommitted changes"]:[],...di.map(B=>`Stash ${B+1}`)],Zi=xo.size,Ji=!Yo&&!!Nn&&xo.has(Nn),E=Nn?`Push ${Nn}`:"Push current branch",F=Ks.length===1?Ks[0].commitCount>1?`Push ${Ks[0].commitCount} commits on ${Ks[0].branchName}`:`Push ${Ks[0].targetSha.slice(0,7)} on ${Ks[0].branchName}`:`Push ${Ks.length} selected ranges`,ce=_.useCallback(B=>{const H=B.target;H!=null&&H.closest('.window-no-drag, input, textarea, select, button, [contenteditable="true"]')||bp().startDragging()},[]);_.useEffect(()=>{const B=Xt||so;ot.current!==B&&(ot.current=B,Kt==null||Kt(B))},[Xt,so,Kt]),_.useEffect(()=>{const B=Ms?Fs.length:null;V.current!==B&&(V.current=B,Dt==null||Dt(B))},[Fs.length,Ms,Dt]),_.useEffect(()=>{const B=Ms&&bt?(()=>{const H=Fs.findIndex(Z=>Z.commit.id===bt);return H>=0?H:null})():null;J.current!==B&&(J.current=B,lt==null||lt(B))},[bt,Fs,Ms,lt]);const Me=_.useMemo(()=>{var Le,vt,zt,ht,xt,St;if(!Ms)return null;const B=Ms,H=e.map(pt=>pt.name),Z=H.find(pt=>pt.toLowerCase()===B),ie=Z!=null?Z:H.find(pt=>pt.toLowerCase().startsWith(B)),Re=ie!=null?ie:H.find(pt=>pt.toLowerCase().includes(B));if(!Re)return null;const we=(Le=e.find(pt=>pt.name===Re))!=null?Le:null;if(we!=null&&we.headSha)return we.headSha;const ke=(vt=he[Re])!=null?vt:[];return ke.length>0?(ht=(zt=ke[0])==null?void 0:zt.fullSha)!=null?ht:null:Re===d&&(St=(xt=i[0])==null?void 0:xt.fullSha)!=null?St:null},[Ms,e,he,d,i]);_.useEffect(()=>{var ie,ue,Re;if(!Ms){if(Ee.current=ut,be.current===null)return;be.current=null,qt==null||qt(null);return}if(ut<=0||Ee.current===ut)return;Ee.current=ut;let B;const H=bt?Fs.findIndex(we=>we.commit.id===bt):-1,Z=Fs.length>0?H<0?0:(H+kt+Fs.length)%Fs.length:-1;B=(Re=(ue=(ie=Fs[Z])==null?void 0:ie.commit.id)!=null?ue:Me)!=null?Re:null,be.current!==B&&(be.current=B,qt==null||qt(B))},[Fs,Ms,qt,Me,ut,kt]),_.useLayoutEffect(()=>{if(!bt)return;const B=`${bt}:${ut}`;if(nt.current===B)return;const H=ft.current,Z=Wo;if(!H||!Z)return;const ie=bs();if(!ie)return;const ue=H.getBoundingClientRect(),Re=as.current.zoom,we=Re/aa,ke=Z.x+$n/2,Le=Z.y+Ol+Vs/2,vt=ue.left+ue.width/2,zt=ue.top+ue.height/2;As(vt-ie.x-ke*we,zt-ie.y-Le*we,Re),nt.current=B},[bt,ut,Wo,bs,As,as]);const Ve=(v=(x=fs==null?void 0:fs.width)!=null?x:(ca=ft.current)==null?void 0:ca.clientWidth)!=null?v:0,it=(R=(j=fs==null?void 0:fs.height)!=null?j:(C=ft.current)==null?void 0:C.clientHeight)!=null?R:0,Yt=Ve>0&&it>0?Ay(Ve,it,as.current,{innerPaddingPx:Pd}):null,Ht=Yt!=null?Ny(Yt,as.current.zoom):null,Ft=B=>{if(!Ht)return!0;const{fromX:H,fromY:Z,toX:ie,toY:ue}=B;return qw(H,Z,ie,ue,Ht,B.fromFace,B.toFace)};_.useLayoutEffect(()=>{var we;if(Xt)return;const B=ft.current;if(!B||B.clientWidth<=0||B.clientHeight<=0)return;const H=B.clientWidth,Z=B.clientHeight;No(ke=>(ke==null?void 0:ke.width)===H&&(ke==null?void 0:ke.height)===Z?ke:{width:H,height:Z});const ie=Ay(H,Z,as.current,{innerPaddingPx:Pd});if(!ie){ds(ke=>ke===null?ke:null);return}const ue=Ny(ie,as.current.zoom),Re=Qw(yo,ue,En,vs);for(const ke of Wn){const Le=Yn.get(ke.commit.visualId);if(!Le||((we=on.get(Le))!=null?we:1)<=1)continue;($t.has(Le)||!Bs.has(Le)&&!Jt.has(Le))&&Re.add(ke.commit.visualId)}ds(ke=>Xw(ke,Re)?ke:Re)},[Rn,ut,bt,Xt,en,$t,Jt,Bs,Yn,on,Wn,fs,yo,En,vs]),_.useLayoutEffect(()=>{const B=ft.current;if(!B)return;const H=()=>{const ie=B.clientWidth,ue=B.clientHeight;ie<=0||ue<=0||No(Re=>(Re==null?void 0:Re.width)===ie&&(Re==null?void 0:Re.height)===ue?Re:{width:ie,height:ue})};H();const Z=new ResizeObserver(H);return Z.observe(B),()=>Z.disconnect()},[to.length]);const fn=Wn.filter(B=>ui(B)).length,vn=Fn.filter(B=>Ft(B)).length,an=Ls.filter(B=>Ft(B)).length,Vn=_.useCallback((B,H)=>{if(un.current){B.preventDefault(),B.stopPropagation();return}B.stopPropagation();const Z=H.commit.id;if(B.shiftKey?(Un(we=>we.includes(Z)?we.filter(ke=>ke!==Z):[...we,Z]),Eo(Z)):(Un(we=>we.includes(Z)?[]:[Z]),Eo(we=>we===Z?null:Z)),!(B.metaKey||B.ctrlKey||B.detail>=2)||Z==="WORKING_TREE")return;const ue=Z.length>=40?Z.slice(0,7):Z;let Re=null;if(H.commit.branchName?(Re=Pi(H.commit.branchName,Z,ue),Re||(Re=Jo(H.commit.branchName))):Re=ws(Z,ue),Re&&me){me(Re.path);return}h==null||h({commitSha:Z})},[ws,Pi,Jo,h,me]),_n=_.useCallback((B,H)=>{var ke,Le,vt,zt,ht;if(B.button!==0)return;const Z=B.target;if(Z!=null&&Z.closest('[data-selectable-text="true"]')||Z!=null&&Z.closest("button, a, input, textarea, select"))return;B.stopPropagation(),B.preventDefault(),un.current=!1,B.currentTarget.setPointerCapture(B.pointerId);const ie=(ke=Et[H.commit.visualId])!=null?ke:Et[H.commit.id];tn.current={nodeId:H.commit.visualId,startX:B.clientX,startY:B.clientY,baseX:(Le=ie==null?void 0:ie.x)!=null?Le:H.x,baseY:(vt=ie==null?void 0:ie.y)!=null?vt:H.y,moved:!1,pendingX:(zt=ie==null?void 0:ie.x)!=null?zt:H.x,pendingY:(ht=ie==null?void 0:ie.y)!=null?ht:H.y};const ue=()=>{Qt.current=null;const xt=tn.current;xt&&yt(St=>({...St,[xt.nodeId]:{x:xt.pendingX,y:xt.pendingY}}))},Re=xt=>{const St=tn.current;if(!St)return;const pt=as.current.zoom/aa,Pt=pt>0?1/pt:1,Dn=(xt.clientX-St.startX)*Pt,gn=(xt.clientY-St.startY)*Pt;(Math.abs(Dn)>2||Math.abs(gn)>2)&&(St.moved=!0),St.moved&&(un.current=!0),St.pendingX=St.baseX+Dn,St.pendingY=St.baseY+gn,Qt.current==null&&(Qt.current=window.requestAnimationFrame(ue))},we=()=>{window.removeEventListener("pointermove",Re),window.removeEventListener("pointerup",we),window.removeEventListener("pointercancel",we),Qt.current!=null&&(window.cancelAnimationFrame(Qt.current),Qt.current=null,ue());try{B.currentTarget.releasePointerCapture(B.pointerId)}catch{}const xt=tn.current;tn.current=null,xt&&window.setTimeout(()=>{un.current=!1},0)};window.addEventListener("pointermove",Re),window.addEventListener("pointerup",we),window.addEventListener("pointercancel",we)},[Et]),Vt=_.useCallback(async()=>{if(!se)return;await se(Ye)&&(Ze(!1),Je(""))},[se,Ye]),Tn=_.useCallback(async()=>{G&&(await G({branchNames:[],discardUncommittedChanges:ti,stashIndices:di}),et(!1),Un([]),Eo(null))},[G,ti,di]),nn=_.useCallback(async()=>{var H;const B=Ke.trim();if(B){if(wt==="new-root"){if(!P)return;await P(B)}else{if(!Se)return;const Z=kn.length===1?kn[0]:(H=st==null?void 0:st.headSha)!=null?H:null;if(!Z||!(Z==="WORKING_TREE"||Z.startsWith("STASH:")||Z===(st==null?void 0:st.headSha)))return;await Se(Z,B)}gt(!1),Lt(""),ct("from-selected-node"),Un([]),Eo(null)}},[st==null?void 0:st.headSha,wt,Ke,Se,P,kn]),_s=!!(st!=null&&st.headSha),gs=kn.length===0&&_s,Lo=kn.length===1&&(kn[0]==="WORKING_TREE"||kn[0].startsWith("STASH:"))||gs,ao=!!P;return _.useEffect(()=>{if(_t){if(!Lo&&!gs&&ao){ct("new-root");return}(Lo||gs)&&ct("from-selected-node")}},[ao,gs,_t,Lo]),_.useEffect(()=>{const B=mt.current;if(!B)return;const H=640,Z=440,ie=()=>{const Re=B.getBoundingClientRect().width;Co(Re<H),Do(Re<Z)};ie();const ue=new ResizeObserver(()=>ie());return ue.observe(B),()=>ue.disconnect()},[]),_.useEffect(()=>{const B=H=>{if(!G||De||kn.length===0)return;const Z=H.target;Z!=null&&Z.closest('input, textarea, select, button, [contenteditable="true"]')||H.key!=="Delete"&&H.key!=="Backspace"||(H.preventDefault(),et(!0))};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[De,G,kn.length]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-background",children:[l.jsx(sS,{isOpen:ee,onClose:()=>xe==null?void 0:xe(),visibleBounds:Ht,renderedNodeCount:fn,totalNodeCount:Wn.length,renderedMergeConnectorCount:vn,totalMergeConnectorCount:Fn.length,renderedConnectorCount:an,totalConnectorCount:Ls.length,mapGridCullViewportInsetScreenPx:Vw,debugRows:_o.debugRows,branchDebugRows:_o.branchDebugRows,connectorDecisions:Xn}),He?l.jsxs("header",{"data-tauri-drag-region":!0,onPointerDown:ce,className:"window-drag-region pointer-events-none absolute inset-x-0 top-0 z-[70] flex w-full select-none",children:[l.jsxs("div",{ref:mt,className:"pointer-events-auto ml-auto flex w-full max-w-[calc(100vw-116px)] min-w-0 items-start justify-between gap-3 p-2.25 select-none",children:[l.jsx("div",{className:"flex min-w-0 flex-nowrap items-center justify-start gap-3 overflow-visible",children:l.jsx(eS,{compactLabels:eo,selectedVisibleCommitShas:kn,commitInProgress:z,commitDisabled:te,stageInProgress:fe,stashInProgress:Xe,stashDisabled:oe,pushInProgress:N,hasUncommittedChanges:Ko,createBranchFromNodeInProgress:ae,onCommitLocalChanges:se,onStageAllChanges:Y?()=>void Y():void 0,onStashLocalChanges:Ae,onPushCurrentBranch:I,onPushAllBranches:D,onPushCommitTargets:O,onMergeRefsIntoBranch:A,selectedPushTargets:Ks,selectedPushLabel:F,canPushCurrentBranch:Ji,pushCurrentBranchLabel:E,pushableRemoteBranchCount:Zi,selectedCommitTargetOption:qn,mergeInProgress:T,mergeTargetCommitSha:Es,setMergeTargetCommitSha:Eo,worktrees:U,currentRepoPath:K,worktreeMenuOpen:Ge,setWorktreeMenuOpen:Be,onSwitchToWorktree:me,onRemoveWorktree:le,removeWorktreeInProgress:de,setCommitDialogOpen:Ze,setNewBranchDialogOpen:gt,hideMergeControls:!0})}),l.jsx("div",{className:"flex min-w-0 shrink-0 items-center justify-end gap-2",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto flex items-center gap-2",children:[po?null:l.jsx(aS,{query:He.gridSearchQuery,onQueryChange:He.setGridSearchQuery,resultCount:He.gridSearchResultCount,resultIndex:He.gridSearchResultIndex,onJump:B=>{He.setGridSearchJumpDirection(B),He.setGridSearchJumpToken(H=>H+1)}}),l.jsx(iS,{compactLabels:eo,orientation:He.mapGridOrientation,onOrientationChange:He.setMapGridOrientation})]})})]}),l.jsxs("div",{className:"pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5",children:[(W=He.githubAuthStatus)!=null&&W.ghAvailable&&!He.githubAuthStatus.authenticated?l.jsx("button",{onClick:He.onGitHubAuthSetup,disabled:He.githubAuthLoading,className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:He.githubAuthLoading?"Connecting GitHub...":"Connect GitHub"}):null,He.githubAuthStatus&&!He.githubAuthStatus.ghAvailable?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] font-medium text-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",children:"Install `gh` for private PR data"})]}):null,He.githubAuthMessage?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] text-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",title:He.githubAuthMessage,children:He.githubAuthMessage})]}):null,He.commitSwitchFeedback?l.jsxs("div",{className:`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200 ${He.isCommitSwitchFeedbackVisible?"opacity-100":"opacity-0"} ${He.commitSwitchFeedback.kind==="error"?"border-red-500/25 bg-red-50/95 text-red-600 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-400":"border-blue-500/25 bg-blue-50/95 text-blue-600 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-400"}`,title:He.commitSwitchFeedback.message,children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium opacity-70",children:He.commitSwitchFeedback.kind==="error"?"Alert":"Update"}),l.jsx("p",{className:"truncate text-[11px]",children:He.commitSwitchFeedback.message})]}):null]})]}):null,ji?l.jsx("div",{className:"pointer-events-none absolute bottom-2.25 left-1/2 z-[80] -translate-x-1/2",children:l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-2.25",children:[l.jsxs("div",{className:"inline-flex h-7 items-center rounded-md border border-border bg-background/95 pl-[2px] pr-[4px] backdrop-blur-sm",children:[l.jsx("span",{className:"px-2 text-[11px] font-medium text-foreground",children:"Merge to..."}),l.jsxs("div",{className:"relative inline-flex h-5 items-center rounded-[2px] bg-muted/30 p-0.5",children:[l.jsx("div",{className:"absolute inset-0.5 overflow-hidden rounded-[1px]",children:l.jsx("div",{className:`h-full rounded-[1px] bg-border ${ei?"transition-all duration-200 ease-in-out":""}`,style:{width:`var(--${is}-active-width, 0px)`,transform:`translateX(var(--${is}-active-offset, 0px))`}})}),qn.options.map(B=>{const H=B.targetBranch===qn.targetBranch;return l.jsx("button",{type:"button",onClick:()=>{B.targetSha!==Es&&Bt(!0),Eo(B.targetSha)},ref:Z=>{if(!Z)return;const ie=Z.parentElement;if(!ie||!H)return;const ue=Z.getBoundingClientRect(),Re=ie.getBoundingClientRect();ie.style.setProperty(`--${is}-active-width`,`${ue.width}px`),ie.style.setProperty(`--${is}-active-offset`,`${ue.left-Re.left}px`)},className:`relative z-10 h-4.5 px-2 text-[11px] font-medium transition-colors ${H?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:B.targetBranch},`merge-${B.targetBranch}`)})]})]}),l.jsxs("button",{type:"button",onClick:()=>void A(qn.sources,qn.targetBranch),disabled:qn.sources.length===0||T,className:"inline-flex h-7 items-center rounded-md border border-border bg-background px-2 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(Zx,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),T?"Merging...":"Confirm"]})]})}):null,b||to.length===0?l.jsx(dS,{}):l.jsx(nS,{scrollContainerRef:ft,mapPadHostRef:jt,transformLayerRef:Rt,isMarqueeSelecting:so,contentWidth:Xs,contentHeight:Bn,isCameraMoving:Xt,onWheel:Rs,onMouseDown:oo,onNodePointerDown:_n,labelTopPx:vs,inverseZoomStyle:qo,displayZoom:rs,selectedVisibleCommitShas:kn,normalizedSearchQuery:Ms,matchingNodeIds:Ci,focusedNode:Wo,renderNodes:Wn,shouldRenderNode:ui,manuallyOpenedClumps:$t,manuallyClosedClumps:Jt,defaultCollapsedClumps:Bs,leadByClusterKey:Ws,clusterKeyByCommitId:Yn,clusterCounts:on,commitIdsWithRenderedAncestry:ps,nodeWarnings:ci,connectorParentShas:no,branchStartShas:Zt,branchOffNodeShas:ki,crossBranchOutgoingShas:Gn,branchBaseCommitByName:zi,branchStartAccentClass:Gs,connectorParentAccentClass:xn,commitCornerRadiusPx:jo,lineStrokeWidth:Os,pointFormatter:go,connectors:Ls,mergeConnectors:Fn,cullConnectorPath:Ft,flushCameraReactTick:sn,setManuallyOpenedClumps:At,setManuallyClosedClumps:bn,onCommitCardClick:Vn,unpushedCommitShasSetByBranch:Qo,remoteCommitShas:Ro,checkedOutHeadSha:Ps,orientation:Te}),Mo&&so?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:Mo.left,top:Mo.top,width:Mo.width,height:Mo.height,borderColor:"var(--select)",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(oS,{commitDialogOpen:pe,commitMessageDraft:Ye,onCommitMessageDraftChange:Je,onCommitDialogClose:()=>Ze(!1),onCommitConfirm:()=>void Vt(),commitInProgress:z,deleteConfirmOpen:De,deleteSelectionItems:Mi,onDeleteConfirmClose:()=>et(!1),onDeleteConfirm:()=>void Tn(),deleteInProgress:X,deletableSelectionCount:Bo,newBranchDialogOpen:_t,newBranchName:Ke,newBranchCreateMode:wt,onNewBranchNameChange:Lt,onNewBranchCreateModeChange:ct,onNewBranchDialogClose:()=>gt(!1),onNewBranchConfirm:()=>void nn(),selectedCommitCanCreateBranch:Lo,currentCheckedOutCommitCanCreateBranch:gs,createBranchFromNodeInProgress:ae})]})}function fS({branches:e,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y={},branchCommitPreviews:g={},branchParentByName:b={},branchUniqueAheadCounts:w={},gridSearchQuery:k="",gridSearchJumpToken:M=0,gridSearchJumpDirection:A=1,gridFocusSha:T=null,onGridSearchResultCountChange:D,onGridSearchResultIndexChange:I,onGridSearchFocusChange:O,view:N="time",isLoading:G=!1,scrollRequest:X,focusedErrorBranch:U,checkedOutRef:K=null,mapTopInsetPx:le=0,onMergeRefsIntoBranch:de,mergeInProgress:me=!1,onPushAllBranches:Ae,onPushCurrentBranch:Xe,onPushCommitTargets:oe,pushInProgress:se=!1,onDeleteSelection:z,worktrees:te=[],currentRepoPath:Y,onRemoveWorktree:fe,removeWorktreeInProgress:Se=!1,onSwitchToWorktree:P,onStashLocalChanges:ae,stashInProgress:ee=!1,stashDisabled:xe=!1,onCommitLocalChanges:Te,commitInProgress:he=!1,commitDisabled:ze=!1,onStageAllChanges:Qe,stageInProgress:We=!1,onCreateBranchFromNode:ut,onCreateRootBranch:kt,createBranchFromNodeInProgress:bt=!1,isMutationBusy:st=!1,onMoveNodeBackToBranch:Dt,isDebugOpen:lt=!1,onDebugClose:qt,orientation:Kt="horizontal",onInteractionChange:Q,manuallyOpenedClumps:Ne,manuallyClosedClumps:at,setManuallyOpenedClumps:Ce,setManuallyClosedClumps:dt,layoutModel:He,gridHudProps:ft}){const mt=new Set(u.map(J=>J.branchName)),jt=14*864e5,Rt=Date.now();function ot(J){return mt.has(J.name)||Rt-new Date(J.lastCommitDate).getTime()<=jt}const V=e.filter(J=>J.status==="stale"&&ot(J)).sort((J,be)=>new Date(be.lastCommitDate).getTime()-new Date(J.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:N==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(By,{branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y,branchCommitPreviews:g,branchParentByName:b,branchUniqueAheadCounts:w,gridSearchQuery:k,gridSearchJumpToken:M,gridSearchJumpDirection:A,gridFocusSha:T,onGridSearchResultCountChange:D,onGridSearchResultIndexChange:I,onGridSearchFocusChange:O,staleBranches:V,isLoading:G,scrollRequest:X,focusedErrorBranch:U,checkedOutRef:K,mapTopInsetPx:le,onMergeRefsIntoBranch:de,mergeInProgress:me,onPushAllBranches:Ae,onPushCurrentBranch:Xe,onPushCommitTargets:oe,pushInProgress:se,onDeleteSelection:z,worktrees:te,currentRepoPath:Y,onRemoveWorktree:fe,removeWorktreeInProgress:Se,onSwitchToWorktree:P,onStashLocalChanges:ae,stashInProgress:ee,stashDisabled:xe,onCommitLocalChanges:Te,commitInProgress:he,commitDisabled:ze,onStageAllChanges:Qe,stageInProgress:We,onCreateBranchFromNode:ut,onCreateRootBranch:kt,createBranchFromNodeInProgress:bt,isMutationBusy:st,onMoveNodeBackToBranch:Dt,isDebugOpen:lt,onDebugClose:qt,orientation:Kt,onInteractionChange:Q,manuallyOpenedClumps:Ne,manuallyClosedClumps:at,setManuallyOpenedClumps:Ce,setManuallyClosedClumps:dt,layoutModel:He,gridHudProps:ft})}):N==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(By,{branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,isLoading:G,defaultBranch:d,branchCommitPreviews:g,branchParentByName:b,branchUniqueAheadCounts:w,gridSearchQuery:k,gridSearchJumpToken:M,gridSearchJumpDirection:A,gridFocusSha:T,checkedOutRef:K,onGridSearchResultCountChange:D,onGridSearchResultIndexChange:I,onGridSearchFocusChange:O,onInteractionChange:Q,manuallyOpenedClumps:Ne,manuallyClosedClumps:at,setManuallyOpenedClumps:Ce,setManuallyClosedClumps:dt,layoutModel:He,isDebugOpen:lt,onDebugClose:qt,orientation:Kt,gridHudProps:ft})}):null})}var zl=Yx();const Cp=_.createContext({});function Jc(e){const n=_.useRef(null);return n.current===null&&(n.current=e()),n.current}const hS=typeof window<"u",kp=hS?_.useLayoutEffect:_.useEffect,Qd=_.createContext(null);function jp(e,n){e.indexOf(n)===-1&&e.push(n)}function Dl(e,n){const i=e.indexOf(n);i>-1&&e.splice(i,1)}const xa=(e,n,i)=>i>n?n:i<e?e:i;let Mp=()=>{};const hr={},ib=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function ab(e){return typeof e=="object"&&e!==null}const rb=e=>/^0[^.\s]+$/u.test(e);function lb(e){let n;return()=>(n===void 0&&(n=e()),n)}const Ki=e=>e,mS=(e,n)=>i=>n(e(i)),eu=(...e)=>e.reduce(mS),Rl=(e,n,i)=>{const a=n-e;return a===0?1:(i-e)/a};class Ep{constructor(){this.subscriptions=[]}add(n){return jp(this.subscriptions,n),()=>Dl(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Si=e=>e*1e3,qi=e=>e/1e3;function cb(e,n){return n?e*(1e3/n):0}const pS=(e,n,i)=>{const a=n-e;return((i-e)%a+a)%a+e},ub=(e,n,i)=>(((1-3*i+3*n)*e+(3*i-6*n))*e+3*n)*e,_S=1e-7,gS=12;function yS(e,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=ub(d,a,c)-e,u>0?i=d:n=d;while(Math.abs(u)>_S&&++h<gS);return d}function tu(e,n,i,a){if(e===n&&i===a)return Ki;const c=u=>yS(u,0,1,e,i);return u=>u===0||u===1?u:ub(c(u),n,a)}const db=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,fb=e=>n=>1-e(1-n),hb=tu(.33,1.53,.69,.99),Tp=fb(hb),mb=db(Tp),pb=e=>e>=1?1:(e*=2)<1?.5*Tp(e):.5*(2-Math.pow(2,-10*(e-1))),Ap=e=>1-Math.sin(Math.acos(e)),_b=fb(Ap),gb=db(Ap),xS=tu(.42,0,1,1),bS=tu(0,0,.58,1),yb=tu(.42,0,.58,1),xb=e=>Array.isArray(e)&&typeof e[0]!="number";function bb(e,n){return xb(e)?e[pS(0,e.length,n)]:e}const vb=e=>Array.isArray(e)&&typeof e[0]=="number",vS={linear:Ki,easeIn:xS,easeInOut:yb,easeOut:bS,circIn:Ap,circInOut:gb,circOut:_b,backIn:Tp,backInOut:mb,backOut:hb,anticipate:pb},wS=e=>typeof e=="string",Ly=e=>{if(vb(e)){Mp(e.length===4);const[n,i,a,c]=e;return tu(n,i,a,c)}else if(wS(e))return vS[e];return e},ad=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function SS(e,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(g){d.has(g)&&(y.schedule(g),e()),g(h)}const y={schedule:(g,b=!1,w=!1)=>{const M=w&&c?i:a;return b&&d.add(g),M.add(g),g},cancel:g=>{a.delete(g),d.delete(g)},process:g=>{if(h=g,c){u=!0;return}c=!0;const b=i;i=a,a=b,i.forEach(p),i.clear(),c=!1,u&&(u=!1,y.process(g))}};return y}const CS=40;function wb(e,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=ad.reduce((O,N)=>(O[N]=SS(u),O),{}),{setup:h,read:p,resolveKeyframes:y,preUpdate:g,update:b,preRender:w,render:k,postRender:M}=d,A=()=>{const O=hr.useManualTiming,N=O?c.timestamp:performance.now();i=!1,O||(c.delta=a?1e3/60:Math.max(Math.min(N-c.timestamp,CS),1)),c.timestamp=N,c.isProcessing=!0,h.process(c),p.process(c),y.process(c),g.process(c),b.process(c),w.process(c),k.process(c),M.process(c),c.isProcessing=!1,i&&n&&(a=!1,e(A))},T=()=>{i=!0,a=!0,c.isProcessing||e(A)};return{schedule:ad.reduce((O,N)=>{const G=d[N];return O[N]=(X,U=!1,K=!1)=>(i||T(),G.schedule(X,U,K)),O},{}),cancel:O=>{for(let N=0;N<ad.length;N++)d[ad[N]].cancel(O)},state:c,steps:d}}const{schedule:os,cancel:Pa,state:Vo,steps:nm}=wb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ki,!0);let Ed;function kS(){Ed=void 0}const ii={now:()=>(Ed===void 0&&ii.set(Vo.isProcessing||hr.useManualTiming?Vo.timestamp:performance.now()),Ed),set:e=>{Ed=e,queueMicrotask(kS)}},Sb=e=>n=>typeof n=="string"&&n.startsWith(e),Cb=Sb("--"),jS=Sb("var(--"),Np=e=>jS(e)?MS.test(e.split("/*")[0].trim()):!1,MS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Oy(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const $l={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Xc={...$l,transform:e=>xa(0,1,e)},rd={...$l,default:1},Hc=e=>Math.round(e*1e5)/1e5,Dp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ES(e){return e==null}const TS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Rp=(e,n)=>i=>!!(typeof i=="string"&&TS.test(i)&&i.startsWith(e)||n&&!ES(i)&&Object.prototype.hasOwnProperty.call(i,n)),kb=(e,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(Dp);return{[e]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},AS=e=>xa(0,255,e),sm={...$l,transform:e=>Math.round(AS(e))},Ir={test:Rp("rgb","red"),parse:kb("red","green","blue"),transform:({red:e,green:n,blue:i,alpha:a=1})=>"rgba("+sm.transform(e)+", "+sm.transform(n)+", "+sm.transform(i)+", "+Hc(Xc.transform(a))+")"};function NS(e){let n="",i="",a="",c="";return e.length>5?(n=e.substring(1,3),i=e.substring(3,5),a=e.substring(5,7),c=e.substring(7,9)):(n=e.substring(1,2),i=e.substring(2,3),a=e.substring(3,4),c=e.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const Pm={test:Rp("#"),parse:NS,transform:Ir.transform},nu=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),cr=nu("deg"),ya=nu("%"),Nt=nu("px"),DS=nu("vh"),RS=nu("vw"),zy={...ya,parse:e=>ya.parse(e)/100,transform:e=>ya.transform(e*100)},Ml={test:Rp("hsl","hue"),parse:kb("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(e)+", "+ya.transform(Hc(n))+", "+ya.transform(Hc(i))+", "+Hc(Xc.transform(a))+")"},mo={test:e=>Ir.test(e)||Pm.test(e)||Ml.test(e),parse:e=>Ir.test(e)?Ir.parse(e):Ml.test(e)?Ml.parse(e):Pm.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Ir.transform(e):Ml.transform(e),getAnimatableNone:e=>{const n=mo.parse(e);return n.alpha=0,mo.transform(n)}},BS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function LS(e){var n,i;return isNaN(e)&&typeof e=="string"&&(((n=e.match(Dp))==null?void 0:n.length)||0)+(((i=e.match(BS))==null?void 0:i.length)||0)>0}const jb="number",Mb="color",OS="var",zS="var(",$y="${}",$S=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Bl(e){const n=e.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace($S,p=>(mo.test(p)?(a.color.push(u),c.push(Mb),i.push(mo.parse(p))):p.startsWith(zS)?(a.var.push(u),c.push(OS),i.push(p)):(a.number.push(u),c.push(jb),i.push(parseFloat(p))),++u,$y)).split($y);return{values:i,split:h,indexes:a,types:c}}function PS(e){return Bl(e).values}function Eb({split:e,types:n}){const i=e.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=e[u],a[u]!==void 0){const d=n[u];d===jb?c+=Hc(a[u]):d===Mb?c+=mo.transform(a[u]):c+=a[u]}return c}}function IS(e){return Eb(Bl(e))}const HS=e=>typeof e=="number"?0:mo.test(e)?mo.getAnimatableNone(e):e,US=(e,n)=>typeof e=="number"?n!=null&&n.trim().endsWith("/")?e:0:HS(e);function VS(e){const n=Bl(e);return Eb(n)(n.values.map((a,c)=>US(a,n.split[c])))}const ra={test:LS,parse:PS,createTransformer:IS,getAnimatableNone:VS};function om(e,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(n-e)*6*i:i<1/2?n:i<2/3?e+(n-e)*(2/3-i)*6:e}function YS({hue:e,saturation:n,lightness:i,alpha:a}){e/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=om(p,h,e+1/3),u=om(p,h,e),d=om(p,h,e-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Id(e,n){return i=>i>0?n:e}const ys=(e,n,i)=>e+(n-e)*i,im=(e,n,i)=>{const a=e*e,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},WS=[Pm,Ir,Ml],FS=e=>WS.find(n=>n.test(e));function Py(e){const n=FS(e);if(!n)return!1;let i=n.parse(e);return n===Ml&&(i=YS(i)),i}const Iy=(e,n)=>{const i=Py(e),a=Py(n);if(!i||!a)return Id(e,n);const c={...i};return u=>(c.red=im(i.red,a.red,u),c.green=im(i.green,a.green,u),c.blue=im(i.blue,a.blue,u),c.alpha=ys(i.alpha,a.alpha,u),Ir.transform(c))},Im=new Set(["none","hidden"]);function XS(e,n){return Im.has(e)?i=>i<=0?e:n:i=>i>=1?n:e}function GS(e,n){return i=>ys(e,n,i)}function Bp(e){return typeof e=="number"?GS:typeof e=="string"?Np(e)?Id:mo.test(e)?Iy:QS:Array.isArray(e)?Tb:typeof e=="object"?mo.test(e)?Iy:qS:Id}function Tb(e,n){const i=[...e],a=i.length,c=e.map((u,d)=>Bp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function qS(e,n){const i={...e,...n},a={};for(const c in i)e[c]!==void 0&&n[c]!==void 0&&(a[c]=Bp(e[c])(e[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function KS(e,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=e.indexes[d][a[d]],p=(c=e.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const QS=(e,n)=>{const i=ra.createTransformer(n),a=Bl(e),c=Bl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Im.has(e)&&!c.values.length||Im.has(n)&&!a.values.length?XS(e,n):eu(Tb(KS(a,c),c.values),i):Id(e,n)};function Ab(e,n,i){return typeof e=="number"&&typeof n=="number"&&typeof i=="number"?ys(e,n,i):Bp(e)(e,n)}const ZS=e=>{const n=({timestamp:i})=>e(i);return{start:(i=!0)=>os.update(n,i),stop:()=>Pa(n),now:()=>Vo.isProcessing?Vo.timestamp:ii.now()}},Nb=(e,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(e(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Hd=2e4;function Lp(e){let n=0;const i=50;let a=e.next(n);for(;!a.done&&n<Hd;)n+=i,a=e.next(n);return n>=Hd?1/0:n}function Db(e,n=100,i){const a=i({...e,keyframes:[0,n]}),c=Math.min(Lp(a),Hd);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:qi(c)}}const Ys={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Hm(e,n){return e*Math.sqrt(1-n*n)}const JS=12;function e4(e,n,i){let a=i;for(let c=1;c<JS;c++)a=a-e(a)/n(a);return a}const am=.001;function t4({duration:e=Ys.duration,bounce:n=Ys.bounce,velocity:i=Ys.velocity,mass:a=Ys.mass}){let c,u,d=1-n;d=xa(Ys.minDamping,Ys.maxDamping,d),e=xa(Ys.minDuration,Ys.maxDuration,qi(e)),d<1?(c=y=>{const g=y*d,b=g*e,w=g-i,k=Hm(y,d),M=Math.exp(-b);return am-w/k*M},u=y=>{const b=y*d*e,w=b*i+i,k=Math.pow(d,2)*Math.pow(y,2)*e,M=Math.exp(-b),A=Hm(Math.pow(y,2),d);return(-c(y)+am>0?-1:1)*((w-k)*M)/A}):(c=y=>{const g=Math.exp(-y*e),b=(y-i)*e+1;return-am+g*b},u=y=>{const g=Math.exp(-y*e),b=(i-y)*(e*e);return g*b});const h=5/e,p=e4(c,u,h);if(e=Si(e),isNaN(p))return{stiffness:Ys.stiffness,damping:Ys.damping,duration:e};{const y=Math.pow(p,2)*a;return{stiffness:y,damping:d*2*Math.sqrt(a*y),duration:e}}}const n4=["duration","bounce"],s4=["stiffness","damping","mass"];function Hy(e,n){return n.some(i=>e[i]!==void 0)}function o4(e){let n={velocity:Ys.velocity,stiffness:Ys.stiffness,damping:Ys.damping,mass:Ys.mass,isResolvedFromDuration:!1,...e};if(!Hy(e,s4)&&Hy(e,n4))if(n.velocity=0,e.visualDuration){const i=e.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*xa(.05,1,1-(e.bounce||0))*Math.sqrt(c);n={...n,mass:Ys.mass,stiffness:c,damping:u}}else{const i=t4({...e,velocity:0});n={...n,...i,mass:Ys.mass},n.isResolvedFromDuration=!0}return n}function Gc(e=Ys.visualDuration,n=Ys.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:y,mass:g,duration:b,velocity:w,isResolvedFromDuration:k}=o4({...i,velocity:-qi(i.velocity||0)}),M=w||0,A=y/(2*Math.sqrt(p*g)),T=d-u,D=qi(Math.sqrt(p/g)),I=Math.abs(T)<5;a||(a=I?Ys.restSpeed.granular:Ys.restSpeed.default),c||(c=I?Ys.restDelta.granular:Ys.restDelta.default);let O,N,G,X,U,K;if(A<1)G=Hm(D,A),X=(M+A*D*T)/G,O=de=>{const me=Math.exp(-A*D*de);return d-me*(X*Math.sin(G*de)+T*Math.cos(G*de))},U=A*D*X+T*G,K=A*D*T-X*G,N=de=>Math.exp(-A*D*de)*(U*Math.sin(G*de)+K*Math.cos(G*de));else if(A===1){O=me=>d-Math.exp(-D*me)*(T+(M+D*T)*me);const de=M+D*T;N=me=>Math.exp(-D*me)*(D*de*me-M)}else{const de=D*Math.sqrt(A*A-1);O=oe=>{const se=Math.exp(-A*D*oe),z=Math.min(de*oe,300);return d-se*((M+A*D*T)*Math.sinh(z)+de*T*Math.cosh(z))/de};const me=(M+A*D*T)/de,Ae=A*D*me-T*de,Xe=A*D*T-me*de;N=oe=>{const se=Math.exp(-A*D*oe),z=Math.min(de*oe,300);return se*(Ae*Math.sinh(z)+Xe*Math.cosh(z))}}const le={calculatedDuration:k&&b||null,velocity:de=>Si(N(de)),next:de=>{if(!k&&A<1){const Ae=Math.exp(-A*D*de),Xe=Math.sin(G*de),oe=Math.cos(G*de),se=d-Ae*(X*Xe+T*oe),z=Si(Ae*(U*Xe+K*oe));return h.done=Math.abs(z)<=a&&Math.abs(d-se)<=c,h.value=h.done?d:se,h}const me=O(de);if(k)h.done=de>=b;else{const Ae=Si(N(de));h.done=Math.abs(Ae)<=a&&Math.abs(d-me)<=c}return h.value=h.done?d:me,h},toString:()=>{const de=Math.min(Lp(le),Hd),me=Nb(Ae=>le.next(de*Ae).value,de,30);return de+"ms "+me},toTransition:()=>{}};return le}Gc.applyToOptions=e=>{const n=Db(e,100,Gc);return e.ease=n.ease,e.duration=Si(n.duration),e.type="keyframes",e};const i4=5;function Rb(e,n,i){const a=Math.max(n-i4,0);return cb(i-e(a),n-a)}function Um({keyframes:e,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:y=.5,restSpeed:g}){const b=e[0],w={done:!1,value:b},k=K=>h!==void 0&&K<h||p!==void 0&&K>p,M=K=>h===void 0?p:p===void 0||Math.abs(h-K)<Math.abs(p-K)?h:p;let A=i*n;const T=b+A,D=d===void 0?T:d(T);D!==T&&(A=D-b);const I=K=>-A*Math.exp(-K/a),O=K=>D+I(K),N=K=>{const le=I(K),de=O(K);w.done=Math.abs(le)<=y,w.value=w.done?D:de};let G,X;const U=K=>{k(w.value)&&(G=K,X=Gc({keyframes:[w.value,M(w.value)],velocity:Rb(O,K,w.value),damping:c,stiffness:u,restDelta:y,restSpeed:g}))};return U(0),{calculatedDuration:null,next:K=>{let le=!1;return!X&&G===void 0&&(le=!0,N(K),U(K)),G!==void 0&&K>=G?X.next(K-G):(!le&&N(K),w)}}}function a4(e,n,i){const a=[],c=i||hr.mix||Ab,u=e.length-1;for(let d=0;d<u;d++){let h=c(e[d],e[d+1]);if(n){const p=Array.isArray(n)?n[d]||Ki:n;h=eu(p,h)}a.push(h)}return a}function Bb(e,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=e.length;if(Mp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=e[0]===e[1];e[0]>e[u-1]&&(e=[...e].reverse(),n=[...n].reverse());const h=a4(n,a,c),p=h.length,y=g=>{if(d&&g<e[0])return n[0];let b=0;if(p>1)for(;b<e.length-2&&!(g<e[b+1]);b++);const w=Rl(e[b],e[b+1],g);return h[b](w)};return i?g=>y(xa(e[0],e[u-1],g)):y}function Lb(e,n){const i=e[e.length-1];for(let a=1;a<=n;a++){const c=Rl(0,n,a);e.push(ys(i,1,c))}}function Ob(e){const n=[0];return Lb(n,e.length-1),n}function r4(e,n){return e.map(i=>i*n)}function l4(e,n){return e.map(()=>n||yb).splice(0,e.length-1)}function Uc({duration:e=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=xb(a)?a.map(Ly):Ly(a),u={done:!1,value:n[0]},d=r4(i&&i.length===n.length?i:Ob(n),e),h=Bb(d,n,{ease:Array.isArray(c)?c:l4(n,c)});return{calculatedDuration:e,next:p=>(u.value=h(p),u.done=p>=e,u)}}const c4=e=>e!==null;function Zd(e,{repeat:n,repeatType:i="loop"},a,c=1){const u=e.filter(c4),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const u4={decay:Um,inertia:Um,tween:Uc,keyframes:Uc,spring:Gc};function zb(e){typeof e.type=="string"&&(e.type=u4[e.type])}class Op{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const d4=e=>e/100;class Ud extends Op{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==ii.now()&&this.tick(ii.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;zb(n);const{type:i=Uc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||Uc;p!==Uc&&typeof h[0]!="number"&&(this.mixKeyframes=eu(d4,Ab(h[0],h[1])),h=[0,100]);const y=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),y.calculatedDuration===null&&(y.calculatedDuration=Lp(y));const{calculatedDuration:g}=y;this.calculatedDuration=g,this.resolvedDuration=g+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=y}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:y=0,keyframes:g,repeat:b,repeatType:w,repeatDelay:k,type:M,onUpdate:A,finalKeyframe:T}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const D=this.currentTime-y*(this.playbackSpeed>=0?1:-1),I=this.playbackSpeed>=0?D<0:D>c;this.currentTime=Math.max(D,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let O=this.currentTime,N=a;if(b){const K=Math.min(this.currentTime,c)/h;let le=Math.floor(K),de=K%1;!de&&K>=1&&(de=1),de===1&&le--,le=Math.min(le,b+1),!!(le%2)&&(w==="reverse"?(de=1-de,k&&(de-=k/h)):w==="mirror"&&(N=d)),O=xa(0,1,de)*h}let G;I?(this.delayState.value=g[0],G=this.delayState):G=N.next(O),u&&!I&&(G.value=u(G.value));let{done:X}=G;!I&&p!==null&&(X=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&X);return U&&M!==Um&&(G.value=Zd(g,this.options,T,this.speed)),A&&A(G.value),U&&this.finish(),G}then(n,i){return this.finished.then(n,i)}get duration(){return qi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+qi(n)}get time(){return qi(this.currentTime)}set time(n){n=Si(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Rb(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(ii.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=qi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=ZS,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ii.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function f4(e){var n;for(let i=1;i<e.length;i++)(n=e[i])!=null||(e[i]=e[i-1])}const Hr=e=>e*180/Math.PI,Vm=e=>{const n=Hr(Math.atan2(e[1],e[0]));return Ym(n)},h4={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Vm,rotateZ:Vm,skewX:e=>Hr(Math.atan(e[1])),skewY:e=>Hr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Ym=e=>(e=e%360,e<0&&(e+=360),e),Uy=Vm,Vy=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Yy=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),m4={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Vy,scaleY:Yy,scale:e=>(Vy(e)+Yy(e))/2,rotateX:e=>Ym(Hr(Math.atan2(e[6],e[5]))),rotateY:e=>Ym(Hr(Math.atan2(-e[2],e[0]))),rotateZ:Uy,rotate:Uy,skewX:e=>Hr(Math.atan(e[4])),skewY:e=>Hr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Wm(e){return e.includes("scale")?1:0}function Fm(e,n){if(!e||e==="none")return Wm(n);const i=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=m4,c=i;else{const h=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=h4,c=h}if(!c)return Wm(n);const u=a[n],d=c[1].split(",").map(_4);return typeof u=="function"?u(d):d[u]}const p4=(e,n)=>{const{transform:i="none"}=getComputedStyle(e);return Fm(i,n)};function _4(e){return parseFloat(e.trim())}const Pl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Il=new Set(Pl),Wy=e=>e===$l||e===Nt,g4=new Set(["x","y","z"]),y4=Pl.filter(e=>!g4.has(e));function x4(e){const n=[];return y4.forEach(i=>{const a=e.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const fr={width:({x:e},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=e.max-e.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:e},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=e.max-e.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:(e,{transform:n})=>Fm(n,"x"),y:(e,{transform:n})=>Fm(n,"y")};fr.translateX=fr.x;fr.translateY=fr.y;const Ur=new Set;let Xm=!1,Gm=!1,qm=!1;function $b(){if(Gm){const e=Array.from(Ur).filter(a=>a.needsMeasurement),n=new Set(e.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=x4(a);c.length&&(i.set(a,c),a.render())}),e.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Gm=!1,Xm=!1,Ur.forEach(e=>e.complete(qm)),Ur.clear()}function Pb(){Ur.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Gm=!0)})}function b4(){qm=!0,Pb(),$b(),qm=!1}class zp{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Ur.add(this),Xm||(Xm=!0,os.read(Pb),os.resolveKeyframes($b))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}f4(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Ur.delete(this)}cancel(){this.state==="scheduled"&&(Ur.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const v4=e=>e.startsWith("--");function Ib(e,n,i){v4(n)?e.style.setProperty(n,i):e.style[n]=i}const w4={};function Hb(e,n){const i=lb(e);return()=>{var a;return(a=w4[n])!=null?a:i()}}const S4=Hb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Ub=Hb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),zc=([e,n,i,a])=>`cubic-bezier(${e}, ${n}, ${i}, ${a})`,Fy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:zc([0,.65,.55,1]),circOut:zc([.55,0,1,.45]),backIn:zc([.31,.01,.66,-.59]),backOut:zc([.33,1.53,.69,.99])};function Vb(e,n){if(e)return typeof e=="function"?Ub()?Nb(e,n):"ease-out":vb(e)?zc(e):Array.isArray(e)?e.map(i=>Vb(i,n)||Fy.easeOut):Fy[e]}function C4(e,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},y=void 0){const g={[n]:i};p&&(g.offset=p);const b=Vb(h,c);Array.isArray(b)&&(g.easing=b);const w={delay:a,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return y&&(w.pseudoElement=y),e.animate(g,w)}function $p(e){return typeof e=="function"&&"applyToOptions"in e}function k4({type:e,...n}){var i,a;return $p(e)&&Ub()?e.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Yb extends Op{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,Mp(typeof n.type!="string");const y=k4(n);this.animation=C4(i,a,c,y,u),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=Zd(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(g),Ib(i,a,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return qi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+qi(n)}get time(){return qi(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Si(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&S4()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),Ki):c(this)}}const Wb={anticipate:pb,backInOut:mb,circInOut:gb};function j4(e){return e in Wb}function M4(e){typeof e.ease=="string"&&j4(e.ease)&&(e.ease=Wb[e.ease])}const rm=10;class E4 extends Yb{constructor(n){M4(n),zb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Ud({...d,autoplay:!1}),p=Math.max(rm,ii.now()-this.startTime),y=xa(0,rm,p-rm),g=h.sample(p).value,{name:b}=this.options;u&&b&&Ib(u,b,g),i.setWithVelocity(h.sample(Math.max(0,p-y)).value,g,y),h.stop()}}const Xy=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ra.test(e)||e==="0")&&!e.startsWith("url("));function T4(e){const n=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}function A4(e,n,i,a){const c=e[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=e[e.length-1],d=Xy(c,n),h=Xy(u,n);return!d||!h?!1:T4(e)||(i==="spring"||$p(i))&&a}function Km(e){e.duration=0,e.type="keyframes"}const Fb=new Set(["opacity","clipPath","filter","transform"]),N4=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function D4(e){for(let n=0;n<e.length;n++)if(typeof e[n]=="string"&&N4.test(e[n]))return!0;return!1}const R4=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),B4=lb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function L4(e){var b;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=e;if(!(((b=n==null?void 0:n.owner)==null?void 0:b.current)instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:g}=n.owner.getProps();return B4()&&i&&(Fb.has(i)||R4.has(i)&&D4(h))&&(i!=="transform"||!g)&&!y&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const O4=40;class z4 extends Op{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:y,element:g,...b}){var M;super(),this.stop=()=>{var A,T;this._animation&&(this._animation.stop(),(A=this.stopTimeline)==null||A.call(this)),(T=this.keyframeResolver)==null||T.cancel()},this.createdAt=ii.now();const w={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:y,element:g,...b},k=(g==null?void 0:g.KeyframeResolver)||zp;this.keyframeResolver=new k(h,(A,T,D)=>this.onKeyframesResolved(A,T,w,!D),p,y,g),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(n,i,a,c){var D,I;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:y,onUpdate:g}=a;this.resolvedAt=ii.now();let b=!0;A4(n,u,d,h)||(b=!1,(hr.instantAnimations||!p)&&(g==null||g(Zd(n,a,i))),n[0]=n[n.length-1],Km(a),a.repeat=0);const k={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>O4?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},M=b&&!y&&L4(k),A=(I=(D=k.motionValue)==null?void 0:D.owner)==null?void 0:I.current;let T;if(M)try{T=new E4({...k,element:A})}catch{T=new Ud(k)}else T=new Ud(k);T.finished.then(()=>{this.notifyFinished()}).catch(Ki),this.pendingTimeline&&(this.stopTimeline=T.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=T}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),b4()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class $4{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return Gy(this.animations,"duration")}get iterationDuration(){return Gy(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Gy(e,n){let i=0;for(let a=0;a<e.length;a++){const c=e[a][n];c!==null&&c>i&&(i=c)}return i}class P4 extends $4{then(n,i){return this.finished.finally(n).then(()=>{})}}function Xb(e,n,i,a=0,c=1){const u=Array.from(e).sort((y,g)=>y.sortNodePosition(g)).indexOf(n),d=e.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const I4=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function H4(e){const n=I4.exec(e);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function Gb(e,n,i=1){const[a,c]=H4(e);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return ib(d)?parseFloat(d):d}return Np(c)?Gb(c,n,i+1):c}const U4={type:"spring",stiffness:500,damping:25,restSpeed:10},V4=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Y4={type:"keyframes",duration:.8},W4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},F4=(e,{keyframes:n})=>n.length>2?Y4:Il.has(e)?e.startsWith("scale")?V4(n[1]):U4:W4;function qb(e,n){if(e!=null&&e.inherit&&n){const{inherit:i,...a}=e;return{...n,...a}}return e}function Pp(e,n){var a,c;const i=(c=(a=e==null?void 0:e[n])!=null?a:e==null?void 0:e.default)!=null?c:e;return i!==e?qb(i,e):i}const X4=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function G4(e){for(const n in e)if(!X4.has(n))return!0;return!1}const Ip=(e,n,i,a={},c,u)=>d=>{const h=Pp(a,e)||{},p=h.delay||a.delay||0;let{elapsed:y=0}=a;y=y-Si(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-y,onUpdate:w=>{n.set(w),h.onUpdate&&h.onUpdate(w)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:e,motionValue:n,element:u?void 0:c};G4(h)||Object.assign(g,F4(e,g)),g.duration&&(g.duration=Si(g.duration)),g.repeatDelay&&(g.repeatDelay=Si(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let b=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Km(g),g.delay===0&&(b=!0)),(hr.instantAnimations||hr.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(b=!0,Km(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,b&&!u&&n.get()!==void 0){const w=Zd(g.keyframes,h);if(w!==void 0){os.update(()=>{g.onUpdate(w),g.onComplete()});return}}return h.isSync?new Ud(g):new z4(g)};function qy(e){const n=[{},{}];return e==null||e.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Hp(e,n,i,a){if(typeof n=="function"){const[c,u]=qy(a);n=n(i!==void 0?i:e.custom,c,u)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[c,u]=qy(a);n=n(i!==void 0?i:e.custom,c,u)}return n}function Vr(e,n,i){const a=e.getProps();return Hp(a,n,i!==void 0?i:a.custom,e)}const Kb=new Set(["width","height","top","left","right","bottom",...Pl]),Ky=30,q4=e=>!isNaN(parseFloat(e)),Vc={current:void 0};class K4{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=ii.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=ii.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=q4(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new Ep);const a=this.events[n].add(i);return n==="change"?()=>{a(),os.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Vc.current&&Vc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=ii.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>Ky)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,Ky);return cb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function mr(e,n){return new K4(e,n)}const Qm=e=>Array.isArray(e);function Q4(e,n,i){e.hasValue(n)?e.getValue(n).set(i):e.addValue(n,mr(i))}function Z4(e){return Qm(e)?e[e.length-1]||0:e}function J4(e,n){const i=Vr(e,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=Z4(u[d]);Q4(e,d,h)}}const So=e=>!!(e&&e.getVelocity);function eC(e){return!!(So(e)&&e.add)}function Zm(e,n){const i=e.getValue("willChange");if(eC(i))return i.add(n);if(!i&&hr.WillChange){const a=new hr.WillChange("auto");e.addValue("willChange",a),a.add(n)}}function Up(e){return e.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const tC="framerAppearId",Qb="data-"+Up(tC);function Zb(e){return e.props[Qb]}function nC({protectedKeys:e,needsAnimating:n},i){const a=e.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Vp(e,n,{delay:i=0,transitionOverride:a,type:c}={}){var w;let{transition:u,transitionEnd:d,...h}=n;const p=e.getDefaultTransition();u=u?qb(u,p):p;const y=u==null?void 0:u.reduceMotion;a&&(u=a);const g=[],b=c&&e.animationState&&e.animationState.getState()[c];for(const k in h){const M=e.getValue(k,(w=e.latestValues[k])!=null?w:null),A=h[k];if(A===void 0||b&&nC(b,k))continue;const T={delay:i,...Pp(u||{},k)},D=M.get();if(D!==void 0&&!M.isAnimating()&&!Array.isArray(A)&&A===D&&!T.velocity){os.update(()=>M.set(A));continue}let I=!1;if(window.MotionHandoffAnimation){const G=Zb(e);if(G){const X=window.MotionHandoffAnimation(G,k,os);X!==null&&(T.startTime=X,I=!0)}}Zm(e,k);const O=y!=null?y:e.shouldReduceMotion;M.start(Ip(k,M,A,O&&Kb.has(k)?{type:!1}:T,e,I));const N=M.animation;N&&g.push(N)}if(d){const k=()=>os.update(()=>{d&&J4(e,d)});g.length?Promise.all(g).then(k):k()}return g}function Jm(e,n,i={}){var p;const a=Vr(e,n,i.type==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=e.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Vp(e,a,i)):()=>Promise.resolve(),d=e.variantChildren&&e.variantChildren.size?(y=0)=>{const{delayChildren:g=0,staggerChildren:b,staggerDirection:w}=c;return sC(e,n,y,g,b,w,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[y,g]=h==="beforeChildren"?[u,d]:[d,u];return y().then(()=>g())}else return Promise.all([u(),d(i.delay)])}function sC(e,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of e.variantChildren)p.notify("AnimationStart",n),h.push(Jm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Xb(e.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function oC(e,n,i={}){e.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Jm(e,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Jm(e,n,i);else{const c=typeof n=="function"?Vr(e,n,i.custom):n;a=Promise.all(Vp(e,c,i))}return a.then(()=>{e.notify("AnimationComplete",n)})}const iC={test:e=>e==="auto",parse:e=>e},Jb=e=>n=>n.test(e),e5=[$l,Nt,ya,cr,RS,DS,iC],Qy=e=>e5.find(Jb(e));function aC(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||rb(e):!0}const rC=new Set(["brightness","contrast","saturate","opacity"]);function lC(e){const[n,i]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[a]=i.match(Dp)||[];if(!a)return e;const c=i.replace(a,"");let u=rC.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const cC=/\b([a-z-]*)\(.*?\)/gu,ep={...ra,getAnimatableNone:e=>{const n=e.match(cC);return n?n.map(lC).join(" "):e}},tp={...ra,getAnimatableNone:e=>{const n=ra.parse(e);return ra.createTransformer(e)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},Zy={...$l,transform:Math.round},uC={rotate:cr,rotateX:cr,rotateY:cr,rotateZ:cr,scale:rd,scaleX:rd,scaleY:rd,scaleZ:rd,skew:cr,skewX:cr,skewY:cr,distance:Nt,translateX:Nt,translateY:Nt,translateZ:Nt,x:Nt,y:Nt,z:Nt,perspective:Nt,transformPerspective:Nt,opacity:Xc,originX:zy,originY:zy,originZ:Nt},Yp={borderWidth:Nt,borderTopWidth:Nt,borderRightWidth:Nt,borderBottomWidth:Nt,borderLeftWidth:Nt,borderRadius:Nt,borderTopLeftRadius:Nt,borderTopRightRadius:Nt,borderBottomRightRadius:Nt,borderBottomLeftRadius:Nt,width:Nt,maxWidth:Nt,height:Nt,maxHeight:Nt,top:Nt,right:Nt,bottom:Nt,left:Nt,inset:Nt,insetBlock:Nt,insetBlockStart:Nt,insetBlockEnd:Nt,insetInline:Nt,insetInlineStart:Nt,insetInlineEnd:Nt,padding:Nt,paddingTop:Nt,paddingRight:Nt,paddingBottom:Nt,paddingLeft:Nt,paddingBlock:Nt,paddingBlockStart:Nt,paddingBlockEnd:Nt,paddingInline:Nt,paddingInlineStart:Nt,paddingInlineEnd:Nt,margin:Nt,marginTop:Nt,marginRight:Nt,marginBottom:Nt,marginLeft:Nt,marginBlock:Nt,marginBlockStart:Nt,marginBlockEnd:Nt,marginInline:Nt,marginInlineStart:Nt,marginInlineEnd:Nt,fontSize:Nt,backgroundPositionX:Nt,backgroundPositionY:Nt,...uC,zIndex:Zy,fillOpacity:Xc,strokeOpacity:Xc,numOctaves:Zy},dC={...Yp,color:mo,backgroundColor:mo,outlineColor:mo,fill:mo,stroke:mo,borderColor:mo,borderTopColor:mo,borderRightColor:mo,borderBottomColor:mo,borderLeftColor:mo,filter:ep,WebkitFilter:ep,mask:tp,WebkitMask:tp},t5=e=>dC[e],fC=new Set([ep,tp]);function n5(e,n){let i=t5(e);return fC.has(i)||(i=ra),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const hC=new Set(["auto","none","0"]);function mC(e,n,i){let a=0,c;for(;a<e.length&&!c;){const u=e[a];typeof u=="string"&&!hC.has(u)&&Bl(u).values.length&&(c=e[a]),a++}if(c&&i)for(const u of n)e[u]=n5(i,c)}class pC extends zp{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let g=0;g<n.length;g++){let b=n[g];if(typeof b=="string"&&(b=b.trim(),Np(b))){const w=Gb(b,i.current);w!==void 0&&(n[g]=w),g===n.length-1&&(this.finalKeyframe=b)}}if(this.resolveNoneKeyframes(),!Kb.has(a)||n.length!==2)return;const[c,u]=n,d=Qy(c),h=Qy(u),p=Oy(c),y=Oy(u);if(p!==y&&fr[a]){this.needsMeasurement=!0;return}if(d!==h)if(Wy(d)&&Wy(h))for(let g=0;g<n.length;g++){const b=n[g];typeof b=="string"&&(n[g]=parseFloat(b))}else fr[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||aC(n[c]))&&a.push(c);a.length&&mC(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=fr[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=fr[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,y])=>{n.getValue(p).set(y)}),this.resolveNoneKeyframes()}}function Wp(e,n,i){var a;if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[e])!=null?a:c.querySelectorAll(e);return u?Array.from(u):[]}return Array.from(e).filter(c=>c!=null)}const s5=(e,n)=>n&&typeof e=="number"?n.transform(e):e;function Td(e){return ab(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:Fp}=wb(queueMicrotask,!1),oa={x:!1,y:!1};function o5(){return oa.x||oa.y}function _C(e){return e==="x"||e==="y"?oa[e]?null:(oa[e]=!0,()=>{oa[e]=!1}):oa.x||oa.y?null:(oa.x=oa.y=!0,()=>{oa.x=oa.y=!1})}function i5(e,n){const i=Wp(e),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function gC(e){return!(e.pointerType==="touch"||o5())}function yC(e,n,i={}){const[a,c,u]=i5(e,i);return a.forEach(d=>{let h=!1,p=!1,y;const g=()=>{d.removeEventListener("pointerleave",M)},b=T=>{y&&(y(T),y=void 0),g()},w=T=>{h=!1,window.removeEventListener("pointerup",w),window.removeEventListener("pointercancel",w),p&&(p=!1,b(T))},k=()=>{h=!0,window.addEventListener("pointerup",w,c),window.addEventListener("pointercancel",w,c)},M=T=>{if(T.pointerType!=="touch"){if(h){p=!0;return}b(T)}},A=T=>{if(!gC(T))return;p=!1;const D=n(d,T);typeof D=="function"&&(y=D,d.addEventListener("pointerleave",M,c))};d.addEventListener("pointerenter",A,c),d.addEventListener("pointerdown",k,c)}),u}const a5=(e,n)=>n?e===n?!0:a5(e,n.parentElement):!1,Xp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,xC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function bC(e){return xC.has(e.tagName)||e.isContentEditable===!0}const vC=new Set(["INPUT","SELECT","TEXTAREA"]);function wC(e){return vC.has(e.tagName)||e.isContentEditable===!0}const Ad=new WeakSet;function Jy(e){return n=>{n.key==="Enter"&&e(n)}}function lm(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const SC=(e,n)=>{const i=e.currentTarget;if(!i)return;const a=Jy(()=>{if(Ad.has(i))return;lm(i,"down");const c=Jy(()=>{lm(i,"up")}),u=()=>lm(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function e1(e){return Xp(e)&&!o5()}const t1=new WeakSet;function CC(e,n,i={}){const[a,c,u]=i5(e,i),d=h=>{const p=h.currentTarget;if(!e1(h)||t1.has(h))return;Ad.add(p),i.stopPropagation&&t1.add(h);const y=n(p,h),g=(k,M)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",w),Ad.has(p)&&Ad.delete(p),e1(k)&&typeof y=="function"&&y(k,{success:M})},b=k=>{g(k,p===window||p===document||i.useGlobalTarget||a5(p,k.target))},w=k=>{g(k,!1)};window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",w,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),Td(h)&&(h.addEventListener("focus",y=>SC(y,c)),!bC(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function Jd(e){return ab(e)&&"ownerSVGElement"in e}const Nd=new WeakMap;let ur;const r5=(e,n,i)=>(a,c)=>c&&c[0]?c[0][e+"Size"]:Jd(a)&&"getBBox"in a?a.getBBox()[n]:a[i],kC=r5("inline","width","offsetWidth"),jC=r5("block","height","offsetHeight");function MC({target:e,borderBoxSize:n}){var i;(i=Nd.get(e))==null||i.forEach(a=>{a(e,{get width(){return kC(e,n)},get height(){return jC(e,n)}})})}function EC(e){e.forEach(MC)}function TC(){typeof ResizeObserver>"u"||(ur=new ResizeObserver(EC))}function AC(e,n){ur||TC();const i=Wp(e);return i.forEach(a=>{let c=Nd.get(a);c||(c=new Set,Nd.set(a,c)),c.add(n),ur==null||ur.observe(a)}),()=>{i.forEach(a=>{const c=Nd.get(a);c==null||c.delete(n),c!=null&&c.size||ur==null||ur.unobserve(a)})}}const Dd=new Set;let El;function NC(){El=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Dd.forEach(n=>n(e))},window.addEventListener("resize",El)}function DC(e){return Dd.add(e),El||NC(),()=>{Dd.delete(e),!Dd.size&&typeof El=="function"&&(window.removeEventListener("resize",El),El=void 0)}}function n1(e,n){return typeof e=="function"?DC(e):AC(e,n)}function l5(e){return Jd(e)&&e.tagName==="svg"}function RC(...e){const n=!Array.isArray(e[0]),i=n?0:-1,a=e[0+i],c=e[1+i],u=e[2+i],d=e[3+i],h=Bb(c,u,d);return n?h(a):h}const BC=[...e5,mo,ra],LC=e=>BC.find(Jb(e)),s1=()=>({translate:0,scale:1,origin:0,originPoint:0}),Tl=()=>({x:s1(),y:s1()}),o1=()=>({min:0,max:0}),ho=()=>({x:o1(),y:o1()}),qc=new WeakMap;function ef(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Kc(e){return typeof e=="string"||Array.isArray(e)}const Gp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],qp=["initial",...Gp];function tf(e){return ef(e.animate)||qp.some(n=>Kc(e[n]))}function c5(e){return!!(tf(e)||e.variants)}function OC(e,n,i){for(const a in n){const c=n[a],u=i[a];if(So(c))e.addValue(a,c);else if(So(u))e.addValue(a,mr(c,{owner:e}));else if(u!==c)if(e.hasValue(a)){const d=e.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=e.getStaticValue(a);e.addValue(a,mr(d!==void 0?d:c,{owner:e}))}}for(const a in i)n[a]===void 0&&e.removeValue(a);return n}const np={current:null},u5={current:!1},zC=typeof window<"u";function $C(){if(u5.current=!0,!!zC)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>np.current=e.matches;e.addEventListener("change",n),n()}else np.current=!1}const i1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Vd={};function d5(e){Vd=e}function PC(){return Vd}class f5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=zp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const k=ii.now();this.renderScheduledAt<k&&(this.renderScheduledAt=k,os.render(this.render,!1,!0))};const{latestValues:y,renderState:g}=h;this.latestValues=y,this.baseTarget={...y},this.initialValues=i.initial?{...y}:{},this.renderState=g,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=tf(i),this.isVariantNode=c5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:b,...w}=this.scrapeMotionValuesFromProps(i,{},this);for(const k in w){const M=w[k];y[k]!==void 0&&So(M)&&M.set(y[k])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,qc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(u5.current||$C(),this.shouldReduceMotion=np.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),Pa(this.notifyUpdate),Pa(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Fb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:y,duration:g}=i.accelerate,b=new Yb({element:this.current,name:n,keyframes:h,times:p,ease:y,duration:Si(g)}),w=d(b);this.valueSubscriptions.set(n,()=>{w(),b.cancel()});return}const a=Il.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&os.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Vd){const i=Vd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ho()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<i1.length;a++){const c=i1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=OC(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=mr(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(ib(a)||rb(a))?a=parseFloat(a):!LC(a)&&ra.test(i)&&(a=n5(n,i)),this.setBaseTarget(n,So(a)?a.get():a)),So(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Hp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!So(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new Ep),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Fp.render(this.render)}}class h5 extends f5{constructor(){super(...arguments),this.KeyframeResolver=pC}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;So(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class pr{constructor(n){this.isMounted=!1,this.node=n}update(){}}function m5({top:e,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:e,max:a}}}function IC({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function HC(e,n){if(!n)return e;const i=n({x:e.left,y:e.top}),a=n({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function cm(e){return e===void 0||e===1}function sp({scale:e,scaleX:n,scaleY:i}){return!cm(e)||!cm(n)||!cm(i)}function zr(e){return sp(e)||p5(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function p5(e){return a1(e.x)||a1(e.y)}function a1(e){return e&&e!=="0%"}function Yd(e,n,i){const a=e-i,c=n*a;return i+c}function r1(e,n,i,a,c){return c!==void 0&&(e=Yd(e,c,a)),Yd(e,i,a)+n}function op(e,n=0,i=1,a,c){e.min=r1(e.min,n,i,a,c),e.max=r1(e.max,n,i,a,c)}function _5(e,{x:n,y:i}){op(e.x,n.translate,n.scale,n.originPoint),op(e.y,i.translate,i.scale,i.originPoint)}const l1=.999999999999,c1=1.0000000000001;function UC(e,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:y}=u.options;y&&y.props.style&&y.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(ga(e.x,-u.scroll.offset.x),ga(e.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,_5(e,d)),a&&zr(u.latestValues)&&Rd(e,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<c1&&n.x>l1&&(n.x=1),n.y<c1&&n.y>l1&&(n.y=1)}function ga(e,n){e.min+=n,e.max+=n}function u1(e,n,i,a,c=.5){const u=ys(e.min,e.max,c);op(e,n,i,u,a)}function d1(e,n){return typeof e=="string"?parseFloat(e)/100*(n.max-n.min):e}function Rd(e,n,i){const a=i!=null?i:e;u1(e.x,d1(n.x,a.x),n.scaleX,n.scale,n.originX),u1(e.y,d1(n.y,a.y),n.scaleY,n.scale,n.originY)}function g5(e,n){return m5(HC(e.getBoundingClientRect(),n))}function VC(e,n,i){const a=g5(e,i),{scroll:c}=n;return c&&(ga(a.x,c.offset.x),ga(a.y,c.offset.y)),a}const YC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},WC=Pl.length;function FC(e,n,i){let a="",c=!0;for(let u=0;u<WC;u++){const d=Pl[u],h=e[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const y=parseFloat(h);p=d.startsWith("scale")?y===1:y===0}if(!p||i){const y=s5(h,Yp[d]);if(!p){c=!1;const g=YC[d]||d;a+=`${g}(${y}) `}i&&(n[d]=y)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Kp(e,n,i){const{style:a,vars:c,transformOrigin:u}=e;let d=!1,h=!1;for(const p in n){const y=n[p];if(Il.has(p)){d=!0;continue}else if(Cb(p)){c[p]=y;continue}else{const g=s5(y,Yp[p]);p.startsWith("origin")?(h=!0,u[p]=g):a[p]=g}}if(n.transform||(d||i?a.transform=FC(n,e.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:y="50%",originZ:g=0}=u;a.transformOrigin=`${p} ${y} ${g}`}}function y5(e,{style:n,vars:i},a,c){const u=e.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function f1(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const jc={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(Nt.test(e))e=parseFloat(e);else return e;const i=f1(e,n.target.x),a=f1(e,n.target.y);return`${i}% ${a}%`}},XC={correct:(e,{treeScale:n,projectionDelta:i})=>{const a=e,c=ra.parse(e);if(c.length>5)return a;const u=ra.createTransformer(e),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const y=ys(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),u(c)}},ip={borderRadius:{...jc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:jc,borderTopRightRadius:jc,borderBottomLeftRadius:jc,borderBottomRightRadius:jc,boxShadow:XC};function x5(e,{layout:n,layoutId:i}){return Il.has(e)||e.startsWith("origin")||(n||i!==void 0)&&(!!ip[e]||e==="opacity")}function Qp(e,n,i){var d;const a=e.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(So(a[h])||c&&So(c[h])||x5(h,e)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function GC(e){return window.getComputedStyle(e)}class b5 extends h5{constructor(){super(...arguments),this.type="html",this.renderInstance=y5}readValueFromInstance(n,i){var a;if(Il.has(i))return(a=this.projection)!=null&&a.isProjecting?Wm(i):p4(n,i);{const c=GC(n),u=(Cb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return g5(n,i)}build(n,i,a){Kp(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Qp(n,i,a)}}function qC(e,n){return e in n}class KC extends f5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(qC(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return ho()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const QC={offset:"stroke-dashoffset",array:"stroke-dasharray"},ZC={offset:"strokeDashoffset",array:"strokeDasharray"};function JC(e,n,i=1,a=0,c=!0){e.pathLength=1;const u=c?QC:ZC;e[u.offset]=`${-a}`,e[u.array]=`${n} ${i}`}const e6=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function v5(e,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,y,g){var k,M;if(Kp(e,h,y),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:b,style:w}=e;b.transform&&(w.transform=b.transform,delete b.transform),(w.transform||b.transformOrigin)&&(w.transformOrigin=(k=b.transformOrigin)!=null?k:"50% 50%",delete b.transformOrigin),w.transform&&(w.transformBox=(M=g==null?void 0:g.transformBox)!=null?M:"fill-box",delete b.transformBox);for(const A of e6)b[A]!==void 0&&(w[A]=b[A],delete b[A]);n!==void 0&&(b.x=n),i!==void 0&&(b.y=i),a!==void 0&&(b.scale=a),c!==void 0&&JC(b,c,u,d,!1)}const w5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),S5=e=>typeof e=="string"&&e.toLowerCase()==="svg";function t6(e,n,i,a){y5(e,n,void 0,a);for(const c in n.attrs)e.setAttribute(w5.has(c)?c:Up(c),n.attrs[c])}function C5(e,n,i){const a=Qp(e,n,i);for(const c in e)if(So(e[c])||So(n[c])){const u=Pl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=e[c]}return a}class k5 extends h5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ho}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(Il.has(i)){const a=t5(i);return a&&a.default||0}return i=w5.has(i)?i:Up(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return C5(n,i,a)}build(n,i,a){v5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){t6(n,i,a,c)}mount(n){this.isSVGTag=S5(n.tagName),super.mount(n)}}const n6=qp.length;function j5(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?j5(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const n={};for(let i=0;i<n6;i++){const a=qp[i],c=e.props[a];(Kc(c)||c===!1)&&(n[a]=c)}return n}function M5(e,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==e.length)return!1;for(let a=0;a<i;a++)if(n[a]!==e[a])return!1;return!0}const s6=[...Gp].reverse(),o6=Gp.length;function i6(e){return n=>Promise.all(n.map(({animation:i,options:a})=>oC(e,i,a)))}function a6(e){let n=i6(e),i=h1(),a=!0,c=!1;const u=y=>(g,b)=>{var k;const w=Vr(e,b,y==="exit"?(k=e.presenceContext)==null?void 0:k.custom:void 0);if(w){const{transition:M,transitionEnd:A,...T}=w;g={...g,...T,...A}}return g};function d(y){n=y(e)}function h(y){const{props:g}=e,b=j5(e.parent)||{},w=[],k=new Set;let M={},A=1/0;for(let D=0;D<o6;D++){const I=s6[D],O=i[I],N=g[I]!==void 0?g[I]:b[I],G=Kc(N),X=I===y?O.isActive:null;X===!1&&(A=D);let U=N===b[I]&&N!==g[I]&&G;if(U&&(a||c)&&e.manuallyAnimateOnMount&&(U=!1),O.protectedKeys={...M},!O.isActive&&X===null||!N&&!O.prevProp||ef(N)||typeof N=="boolean")continue;if(I==="exit"&&O.isActive&&X!==!0){O.prevResolvedValues&&(M={...M,...O.prevResolvedValues});continue}const K=r6(O.prevProp,N);let le=K||I===y&&O.isActive&&!U&&G||D>A&&G,de=!1;const me=Array.isArray(N)?N:[N];let Ae=me.reduce(u(I),{});X===!1&&(Ae={});const{prevResolvedValues:Xe={}}=O,oe={...Xe,...Ae},se=Y=>{le=!0,k.has(Y)&&(de=!0,k.delete(Y)),O.needsAnimating[Y]=!0;const fe=e.getValue(Y);fe&&(fe.liveStyle=!1)};for(const Y in oe){const fe=Ae[Y],Se=Xe[Y];if(M.hasOwnProperty(Y))continue;let P=!1;Qm(fe)&&Qm(Se)?P=!M5(fe,Se):P=fe!==Se,P?fe!=null?se(Y):k.add(Y):fe!==void 0&&k.has(Y)?se(Y):O.protectedKeys[Y]=!0}O.prevProp=N,O.prevResolvedValues=Ae,O.isActive&&(M={...M,...Ae}),(a||c)&&e.blockInitialAnimation&&(le=!1);const z=U&&K;le&&(!z||de)&&w.push(...me.map(Y=>{const fe={type:I};if(typeof Y=="string"&&(a||c)&&!z&&e.manuallyAnimateOnMount&&e.parent){const{parent:Se}=e,P=Vr(Se,Y);if(Se.enteringChildren&&P){const{delayChildren:ae}=P.transition||{};fe.delay=Xb(Se.enteringChildren,e,ae)}}return{animation:Y,options:fe}}))}if(k.size){const D={};if(typeof g.initial!="boolean"){const I=Vr(e,Array.isArray(g.initial)?g.initial[0]:g.initial);I&&I.transition&&(D.transition=I.transition)}k.forEach(I=>{const O=e.getBaseTarget(I),N=e.getValue(I);N&&(N.liveStyle=!0),D[I]=O!=null?O:null}),w.push({animation:D})}let T=!!w.length;return a&&(g.initial===!1||g.initial===g.animate)&&!e.manuallyAnimateOnMount&&(T=!1),a=!1,c=!1,T?n(w):Promise.resolve()}function p(y,g){var w;if(i[y].isActive===g)return Promise.resolve();(w=e.variantChildren)==null||w.forEach(k=>{var M;return(M=k.animationState)==null?void 0:M.setActive(y,g)}),i[y].isActive=g;const b=h(y);for(const k in i)i[k].protectedKeys={};return b}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=h1(),c=!0}}}function r6(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!M5(n,e):!1}function Rr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function h1(){return{animate:Rr(!0),whileInView:Rr(),whileHover:Rr(),whileTap:Rr(),whileDrag:Rr(),whileFocus:Rr(),exit:Rr()}}function ap(e,n){e.min=n.min,e.max=n.max}function sa(e,n){ap(e.x,n.x),ap(e.y,n.y)}function m1(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}const E5=1e-4,l6=1-E5,c6=1+E5,T5=.01,u6=0-T5,d6=0+T5;function ai(e){return e.max-e.min}function f6(e,n,i){return Math.abs(e-n)<=i}function p1(e,n,i,a=.5){e.origin=a,e.originPoint=ys(n.min,n.max,e.origin),e.scale=ai(i)/ai(n),e.translate=ys(i.min,i.max,e.origin)-e.originPoint,(e.scale>=l6&&e.scale<=c6||isNaN(e.scale))&&(e.scale=1),(e.translate>=u6&&e.translate<=d6||isNaN(e.translate))&&(e.translate=0)}function Yc(e,n,i,a){p1(e.x,n.x,i.x,a?a.originX:void 0),p1(e.y,n.y,i.y,a?a.originY:void 0)}function _1(e,n,i,a=0){const c=a?ys(i.min,i.max,a):i.min;e.min=c+n.min,e.max=e.min+ai(n)}function h6(e,n,i,a){_1(e.x,n.x,i.x,a==null?void 0:a.x),_1(e.y,n.y,i.y,a==null?void 0:a.y)}function g1(e,n,i,a=0){const c=a?ys(i.min,i.max,a):i.min;e.min=n.min-c,e.max=e.min+ai(n)}function Wd(e,n,i,a){g1(e.x,n.x,i.x,a==null?void 0:a.x),g1(e.y,n.y,i.y,a==null?void 0:a.y)}function y1(e,n,i,a,c){return e-=n,e=Yd(e,1/i,a),c!==void 0&&(e=Yd(e,1/c,a)),e}function m6(e,n=0,i=1,a=.5,c,u=e,d=e){if(ya.test(n)&&(n=parseFloat(n),n=ys(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=ys(u.min,u.max,a);e===u&&(h-=n),e.min=y1(e.min,n,i,h,c),e.max=y1(e.max,n,i,h,c)}function x1(e,n,[i,a,c],u,d){m6(e,n[i],n[a],n[c],n.scale,u,d)}const p6=["x","scaleX","originX"],_6=["y","scaleY","originY"];function b1(e,n,i,a){x1(e.x,n,p6,i?i.x:void 0,a?a.x:void 0),x1(e.y,n,_6,i?i.y:void 0,a?a.y:void 0)}function v1(e){return e.translate===0&&e.scale===1}function A5(e){return v1(e.x)&&v1(e.y)}function w1(e,n){return e.min===n.min&&e.max===n.max}function g6(e,n){return w1(e.x,n.x)&&w1(e.y,n.y)}function S1(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function N5(e,n){return S1(e.x,n.x)&&S1(e.y,n.y)}function C1(e){return ai(e.x)/ai(e.y)}function k1(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}function _a(e){return[e("x"),e("y")]}function y6(e,n,i){let a="";const c=e.x.translate/n.x,u=e.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:y,rotate:g,rotateX:b,rotateY:w,skewX:k,skewY:M}=i;y&&(a=`perspective(${y}px) ${a}`),g&&(a+=`rotate(${g}deg) `),b&&(a+=`rotateX(${b}deg) `),w&&(a+=`rotateY(${w}deg) `),k&&(a+=`skewX(${k}deg) `),M&&(a+=`skewY(${M}deg) `)}const h=e.x.scale*n.x,p=e.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const D5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],x6=D5.length,j1=e=>typeof e=="string"?parseFloat(e):e,M1=e=>typeof e=="number"||Nt.test(e);function b6(e,n,i,a,c,u){var d,h,p,y;c?(e.opacity=ys(0,(d=i.opacity)!=null?d:1,v6(a)),e.opacityExit=ys((h=n.opacity)!=null?h:1,0,w6(a))):u&&(e.opacity=ys((p=n.opacity)!=null?p:1,(y=i.opacity)!=null?y:1,a));for(let g=0;g<x6;g++){const b=D5[g];let w=E1(n,b),k=E1(i,b);if(w===void 0&&k===void 0)continue;w||(w=0),k||(k=0),w===0||k===0||M1(w)===M1(k)?(e[b]=Math.max(ys(j1(w),j1(k),a),0),(ya.test(k)||ya.test(w))&&(e[b]+="%")):e[b]=k}(n.rotate||i.rotate)&&(e.rotate=ys(n.rotate||0,i.rotate||0,a))}function E1(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const v6=R5(0,.5,_b),w6=R5(.5,.95,Ki);function R5(e,n,i){return a=>a<e?0:a>n?1:i(Rl(e,n,a))}function B5(e,n,i){const a=So(e)?e:mr(e);return a.start(Ip("",a,n,i)),a.animation}function Qc(e,n,i,a={passive:!0}){return e.addEventListener(n,i,a),()=>e.removeEventListener(n,i)}const S6=(e,n)=>e.depth-n.depth;class C6{constructor(){this.children=[],this.isDirty=!1}add(n){jp(this.children,n),this.isDirty=!0}remove(n){Dl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(S6),this.isDirty=!1,this.children.forEach(n)}}function k6(e,n){const i=ii.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(Pa(a),e(u-n))};return os.setup(a,!0),()=>Pa(a)}function Bd(e){return So(e)?e.get():e}class j6{constructor(){this.members=[]}add(n){jp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(Dl(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(Dl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const Ld={hasAnimatedSinceResize:!0,hasEverUpdated:!1},um=["","X","Y","Z"],M6=1e3;let E6=0;function dm(e,n,i,a){const{latestValues:c}=n;c[e]&&(i[e]=c[e],n.setStaticValue(e,0),a&&(a[e]=0))}function L5(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const i=Zb(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",os,!(c||u))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&L5(a)}function O5({attachResizeListener:e,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=E6++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(N6),this.nodes.forEach(z6),this.nodes.forEach($6),this.nodes.forEach(D6)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new C6)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Ep),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Jd(d)&&!l5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:y}=this.options;if(y&&!y.current&&y.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),e){let g,b=0;const w=()=>this.root.updateBlockedByResize=!1;os.read(()=>{b=window.innerWidth}),e(d,()=>{const k=window.innerWidth;k!==b&&(b=k,this.root.updateBlockedByResize=!0,g&&g(),g=k6(w,250),Ld.hasAnimatedSinceResize&&(Ld.hasAnimatedSinceResize=!1,this.nodes.forEach(N1)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&y&&(h||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:b,hasRelativeLayoutChanged:w,layout:k})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||y.getDefaultTransition()||V6,{onLayoutAnimationStart:A,onLayoutAnimationComplete:T}=y.getProps(),D=!this.targetLayout||!N5(this.targetLayout,k),I=!b&&w;if(this.options.layoutRoot||this.resumeFrom||I||b&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const O={...Pp(M,"layout"),onPlay:A,onComplete:T};(y.shouldReduceMotion||this.options.layoutRoot)&&(O.delay=0,O.type=!1),this.startAnimation(O),this.setAnimationOrigin(g,I)}else b||N1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=k})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Pa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(P6),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&L5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const b=this.path[g];b.shouldResetTransform=!0,(typeof b.latestValues.x=="string"||typeof b.latestValues.y=="string")&&(b.isLayoutDirty=!0),b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(B6),this.nodes.forEach(T1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(A1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(L6),this.nodes.forEach(O6),this.nodes.forEach(T6),this.nodes.forEach(A6)):this.nodes.forEach(A1),this.clearAllSnapshots();const h=ii.now();Vo.delta=xa(0,1e3/60,h-Vo.timestamp),Vo.timestamp=h,Vo.isProcessing=!0,nm.update.process(Vo),nm.preRender.process(Vo),nm.render.process(Vo),Vo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Fp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(R6),this.sharedNodes.forEach(I6)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,os.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){os.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ai(this.snapshot.measuredBox.x)&&!ai(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ho()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!A5(this.projectionDelta),p=this.getTransformTemplate(),y=p?p(this.latestValues,""):void 0,g=y!==this.prevTransformTemplateValue;d&&this.instance&&(h||zr(this.latestValues)||g)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),Y6(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var y;const{visualElement:d}=this.options;if(!d)return ho();const h=d.measureViewportBox();if(!(((y=this.scroll)==null?void 0:y.wasRoot)||this.path.some(W6))){const{scroll:g}=this.root;g&&(ga(h.x,g.offset.x),ga(h.y,g.offset.y))}return h}removeElementScroll(d){var p;const h=ho();if(sa(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let y=0;y<this.path.length;y++){const g=this.path[y],{scroll:b,options:w}=g;g!==this.root&&b&&w.layoutScroll&&(b.wasRoot&&sa(h,d),ga(h.x,b.offset.x),ga(h.y,b.offset.y))}return h}applyTransform(d,h=!1,p){var g,b;const y=p||ho();sa(y,d);for(let w=0;w<this.path.length;w++){const k=this.path[w];!h&&k.options.layoutScroll&&k.scroll&&k!==k.root&&(ga(y.x,-k.scroll.offset.x),ga(y.y,-k.scroll.offset.y)),zr(k.latestValues)&&Rd(y,k.latestValues,(g=k.layout)==null?void 0:g.layoutBox)}return zr(this.latestValues)&&Rd(y,this.latestValues,(b=this.layout)==null?void 0:b.layoutBox),y}removeTransform(d){var p;const h=ho();sa(h,d);for(let y=0;y<this.path.length;y++){const g=this.path[y];if(!zr(g.latestValues))continue;let b;g.instance&&(sp(g.latestValues)&&g.updateSnapshot(),b=ho(),sa(b,g.measurePageBox())),b1(h,g.latestValues,(p=g.snapshot)==null?void 0:p.layoutBox,b)}return zr(this.latestValues)&&b1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Vo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var k;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(k=this.parent)!=null&&k.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:b}=this.options;if(!this.layout||!(g||b))return;this.resolvedRelativeTargetAt=Vo.timestamp;const w=this.getClosestProjectingParent();w&&this.linkedParentVersion!==w.layoutVersion&&!w.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&w&&w.layout?this.createRelativeTarget(w,this.layout.layoutBox,w.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ho(),this.targetWithTransforms=ho()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),h6(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):sa(this.target,this.layout.layoutBox),_5(this.target,this.targetDelta)):sa(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?this.createRelativeTarget(w,this.target,w.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||sp(this.parent.latestValues)||p5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ho(),this.relativeTargetOrigin=ho(),Wd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),sa(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var M;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Vo.timestamp&&(p=!1),p)return;const{layout:y,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||g))return;sa(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,w=this.treeScale.y;UC(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=ho());const{target:k}=d;if(!k){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(m1(this.prevProjectionDelta.x,this.projectionDelta.x),m1(this.prevProjectionDelta.y,this.projectionDelta.y)),Yc(this.projectionDelta,this.layoutCorrected,k,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==w||!k1(this.projectionDelta.x,this.prevProjectionDelta.x)||!k1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",k))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Tl(),this.projectionDelta=Tl(),this.projectionDeltaWithTransform=Tl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,y=p?p.latestValues:{},g={...this.latestValues},b=Tl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const w=ho(),k=p?p.source:void 0,M=this.layout?this.layout.source:void 0,A=k!==M,T=this.getStack(),D=!T||T.members.length<=1,I=!!(A&&!D&&this.options.crossfade===!0&&!this.path.some(U6));this.animationProgress=0;let O;this.mixTargetDelta=N=>{const G=N/1e3;D1(b.x,d.x,G),D1(b.y,d.y,G),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Wd(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),H6(this.relativeTarget,this.relativeTargetOrigin,w,G),O&&g6(this.relativeTarget,O)&&(this.isProjectionDirty=!1),O||(O=ho()),sa(O,this.relativeTarget)),A&&(this.animationValues=g,b6(g,y,this.latestValues,G,I,D)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=G},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,y;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(y=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||y.stop(),this.pendingAnimation&&(Pa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=os.update(()=>{Ld.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=mr(0)),this.motionValue.jump(0,!1),this.currentAnimation=B5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(M6),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:y,latestValues:g}=d;if(!(!h||!p||!y)){if(this!==d&&this.layout&&y&&z5(this.options.animationType,this.layout.layoutBox,y.layoutBox)){p=this.target||ho();const b=ai(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+b;const w=ai(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+w}sa(h,p),Rd(h,g),Yc(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new j6),this.sharedNodes.get(d).add(h);const y=h.options.initialPromotionConfig;h.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const y=this.getStack();y&&y.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const y={};p.z&&dm("z",d,y,this.animationValues);for(let g=0;g<um.length;g++)dm(`rotate${um[g]}`,d,y,this.animationValues),dm(`skew${um[g]}`,d,y,this.animationValues);d.render();for(const g in y)d.setStaticValue(g,y[g]),this.animationValues&&(this.animationValues[g]=y[g]);d.scheduleRender()}applyProjectionStyles(d,h){var M,A;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=Bd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=Bd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!zr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=y.animationValues||y.latestValues;this.applyTransformsToTarget();let b=y6(this.projectionDeltaWithTransform,this.treeScale,g);p&&(b=p(g,b)),d.transform=b;const{x:w,y:k}=this.projectionDelta;d.transformOrigin=`${w.origin*100}% ${k.origin*100}% 0`,y.animationValues?d.opacity=y===this?(A=(M=g.opacity)!=null?M:this.latestValues.opacity)!=null?A:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=y===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const T in ip){if(g[T]===void 0)continue;const{correct:D,applyTo:I,isCSSVariable:O}=ip[T],N=b==="none"?g[T]:D(g[T],y);if(I){const G=I.length;for(let X=0;X<G;X++)d[I[X]]=N}else O?this.options.visualElement.renderState.vars[T]=N:d[T]=N}this.options.layoutId&&(d.pointerEvents=y===this?Bd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(T1),this.root.sharedNodes.clear()}}}function T6(e){e.updateLayout()}function A6(e){var i;const n=((i=e.resumeFrom)==null?void 0:i.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=e.layout,{animationType:u}=e.options,d=n.source!==e.layout.source;if(u==="size")_a(b=>{const w=d?n.measuredBox[b]:n.layoutBox[b],k=ai(w);w.min=a[b].min,w.max=w.min+k});else if(u==="x"||u==="y"){const b=u==="x"?"y":"x";ap(d?n.measuredBox[b]:n.layoutBox[b],a[b])}else z5(u,n.layoutBox,a)&&_a(b=>{const w=d?n.measuredBox[b]:n.layoutBox[b],k=ai(a[b]);w.max=w.min+k,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[b].max=e.relativeTarget[b].min+k)});const h=Tl();Yc(h,a,n.layoutBox);const p=Tl();d?Yc(p,e.applyTransform(c,!0),n.measuredBox):Yc(p,a,n.layoutBox);const y=!A5(h);let g=!1;if(!e.resumeFrom){const b=e.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:w,layout:k}=b;if(w&&k){const M=e.options.layoutAnchor||void 0,A=ho();Wd(A,n.layoutBox,w.layoutBox,M);const T=ho();Wd(T,a,k.layoutBox,M),N5(A,T)||(g=!0),b.options.layoutRoot&&(e.relativeTarget=T,e.relativeTargetOrigin=A,e.relativeParent=b)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:g})}else if(e.isLead()){const{onExitComplete:a}=e.options;a&&a()}e.options.transition=void 0}function N6(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function D6(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function R6(e){e.clearSnapshot()}function T1(e){e.clearMeasurements()}function B6(e){e.isLayoutDirty=!0,e.updateLayout()}function A1(e){e.isLayoutDirty=!1}function L6(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function O6(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function N1(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function z6(e){e.resolveTargetDelta()}function $6(e){e.calcProjection()}function P6(e){e.resetSkewAndRotation()}function I6(e){e.removeLeadSnapshot()}function D1(e,n,i){e.translate=ys(n.translate,0,i),e.scale=ys(n.scale,1,i),e.origin=n.origin,e.originPoint=n.originPoint}function R1(e,n,i,a){e.min=ys(n.min,i.min,a),e.max=ys(n.max,i.max,a)}function H6(e,n,i,a){R1(e.x,n.x,i.x,a),R1(e.y,n.y,i.y,a)}function U6(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const V6={duration:.45,ease:[.4,0,.1,1]},B1=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),L1=B1("applewebkit/")&&!B1("chrome/")?Math.round:Ki;function O1(e){e.min=L1(e.min),e.max=L1(e.max)}function Y6(e){O1(e.x),O1(e.y)}function z5(e,n,i){return e==="position"||e==="preserve-aspect"&&!f6(C1(n),C1(i),.2)}function W6(e){var n;return e!==e.root&&((n=e.scroll)==null?void 0:n.wasRoot)}const F6=O5({attachResizeListener:(e,n)=>Qc(e,"resize",n),measureScroll:()=>{var e,n;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),fm={current:void 0},$5=O5({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!fm.current){const e=new F6({});e.mount(window),e.setOptions({layoutScroll:!0}),fm.current=e}return fm.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),nf=_.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function z1(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function X6(...e){return n=>{let i=!1;const a=e.map(c=>{const u=z1(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():z1(e[c],null)}}}}function G6(...e){return _.useCallback(X6(...e),e)}class q6 extends _.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(Td(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=Td(a)&&a.offsetWidth||0,u=Td(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function K6({children:e,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var w,k;const d=_.useId(),h=_.useRef(null),p=_.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=_.useContext(nf),g=(k=(w=e.props)==null?void 0:w.ref)!=null?k:e==null?void 0:e.ref,b=G6(h,g);return _.useInsertionEffect(()=>{const{width:M,height:A,top:T,left:D,right:I,bottom:O}=p.current;if(n||u===!1||!h.current||!M||!A)return;const N=i==="left"?`left: ${D}`:`right: ${I}`,G=a==="bottom"?`bottom: ${O}`:`top: ${T}`;h.current.dataset.motionPopId=d;const X=document.createElement("style");y&&(X.nonce=y);const U=c!=null?c:document.head;return U.appendChild(X),X.sheet&&X.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${M}px !important;
            height: ${A}px !important;
            ${N}px !important;
            ${G}px !important;
          }
        `),()=>{var K;(K=h.current)==null||K.removeAttribute("data-motion-pop-id"),U.contains(X)&&U.removeChild(X)}},[n]),l.jsx(q6,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?e:_.cloneElement(e,{ref:b})})}const Q6=({children:e,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:y})=>{const g=Jc(Z6),b=_.useId();let w=!0,k=_.useMemo(()=>(w=!1,{id:b,initial:n,isPresent:i,custom:c,onExitComplete:M=>{g.set(M,!0);for(const A of g.values())if(!A)return;a&&a()},register:M=>(g.set(M,!1),()=>g.delete(M))}),[i,g,a]);return u&&w&&(k={...k}),_.useMemo(()=>{g.forEach((M,A)=>g.set(A,!1))},[i]),_.useEffect(()=>{!i&&!g.size&&a&&a()},[i]),e=l.jsx(K6,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:y,children:e}),l.jsx(Qd.Provider,{value:k,children:e})};function Z6(){return new Map}function P5(e=!0){const n=_.useContext(Qd);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=_.useId();_.useEffect(()=>{if(e)return c(u)},[e]);const d=_.useCallback(()=>e&&a&&a(u),[u,a,e]);return!i&&a?[!1,d]:[!0]}const ld=e=>e.key||"";function $1(e){const n=[];return _.Children.forEach(e,i=>{_.isValidElement(i)&&n.push(i)}),n}const sf=({children:e,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:y})=>{const[g,b]=P5(d),w=_.useMemo(()=>$1(e),[e]),k=d&&!g?[]:w.map(ld),M=_.useRef(!0),A=_.useRef(w),T=Jc(()=>new Map),D=_.useRef(new Set),[I,O]=_.useState(w),[N,G]=_.useState(w);kp(()=>{M.current=!1,A.current=w;for(let K=0;K<N.length;K++){const le=ld(N[K]);k.includes(le)?(T.delete(le),D.current.delete(le)):T.get(le)!==!0&&T.set(le,!1)}},[N,k.length,k.join("-")]);const X=[];if(w!==I){let K=[...w];for(let le=0;le<N.length;le++){const de=N[le],me=ld(de);k.includes(me)||(K.splice(le,0,de),X.push(de))}return u==="wait"&&X.length&&(K=X),G($1(K)),O(w),null}const{forceRender:U}=_.useContext(Cp);return l.jsx(l.Fragment,{children:N.map(K=>{const le=ld(K),de=d&&!g?!1:w===N||k.includes(le),me=()=>{if(D.current.has(le))return;if(T.has(le))D.current.add(le),T.set(le,!0);else return;let Ae=!0;T.forEach(Xe=>{Xe||(Ae=!1)}),Ae&&(U==null||U(),G(A.current),d&&(b==null||b()),a&&a())};return l.jsx(Q6,{isPresent:de,initial:!M.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:y,onExitComplete:de?void 0:me,anchorX:h,anchorY:p,children:K},le)})})},I5=_.createContext({strict:!1}),P1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let I1=!1;function J6(){if(I1)return;const e={};for(const n in P1)e[n]={isEnabled:i=>P1[n].some(a=>!!i[a])};d5(e),I1=!0}function H5(){return J6(),PC()}function ek(e){const n=H5();for(const i in e)n[i]={...n[i],...e[i]};d5(n)}const tk=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Fd(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||tk.has(e)}let U5=e=>!Fd(e);function nk(e){typeof e=="function"&&(U5=n=>n.startsWith("on")?!Fd(n):e(n))}try{nk(require("@emotion/is-prop-valid").default)}catch{}function sk(e,n,i){const a={};for(const c in e)c==="values"&&typeof e.values=="object"||So(e[c])||(U5(c)||i===!0&&Fd(c)||!n&&!Fd(c)||e.draggable&&c.startsWith("onDrag"))&&(a[c]=e[c]);return a}const of=_.createContext({});function ok(e,n){if(tf(e)){const{initial:i,animate:a}=e;return{initial:i===!1||Kc(i)?i:void 0,animate:Kc(a)?a:void 0}}return e.inherit!==!1?n:{}}function ik(e){const{initial:n,animate:i}=ok(e,_.useContext(of));return _.useMemo(()=>({initial:n,animate:i}),[H1(n),H1(i)])}function H1(e){return Array.isArray(e)?e.join(" "):e}const Zp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function V5(e,n,i){for(const a in n)!So(n[a])&&!x5(a,i)&&(e[a]=n[a])}function ak({transformTemplate:e},n){return _.useMemo(()=>{const i=Zp();return Kp(i,n,e),Object.assign({},i.vars,i.style)},[n])}function rk(e,n){const i=e.style||{},a={};return V5(a,i,e),Object.assign(a,ak(e,n)),a}function lk(e,n){const i={},a=rk(e,n);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=a,i}const Y5=()=>({...Zp(),attrs:{}});function ck(e,n,i,a){const c=_.useMemo(()=>{const u=Y5();return v5(u,n,S5(a),e.transformTemplate,e.style),{...u.attrs,style:{...u.style}}},[n]);if(e.style){const u={};V5(u,e.style,e),c.style={...u,...c.style}}return c}const uk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Jp(e){return typeof e!="string"||e.includes("-")?!1:!!(uk.indexOf(e)>-1||/[A-Z]/u.test(e))}function dk(e,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Jp(e))?ck:lk)(n,a,c,e),y=sk(n,typeof e=="string",u),g=e!==_.Fragment?{...y,...p,ref:i}:{},{children:b}=n,w=_.useMemo(()=>So(b)?b.get():b,[b]);return _.createElement(e,{...g,children:w})}function fk({scrapeMotionValuesFromProps:e,createRenderState:n},i,a,c){return{latestValues:hk(i,a,c,e),renderState:n()}}function hk(e,n,i,a){const c={},u=a(e,{});for(const w in u)c[w]=Bd(u[w]);let{initial:d,animate:h}=e;const p=tf(e),y=c5(e);n&&y&&!p&&e.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let g=i?i.initial===!1:!1;g=g||d===!1;const b=g?h:d;if(b&&typeof b!="boolean"&&!ef(b)){const w=Array.isArray(b)?b:[b];for(let k=0;k<w.length;k++){const M=Hp(e,w[k]);if(M){const{transitionEnd:A,transition:T,...D}=M;for(const I in D){let O=D[I];if(Array.isArray(O)){const N=g?O.length-1:0;O=O[N]}O!==null&&(c[I]=O)}for(const I in A)c[I]=A[I]}}}return c}const W5=e=>(n,i)=>{const a=_.useContext(of),c=_.useContext(Qd),u=()=>fk(e,n,a,c);return i?u():Jc(u)},mk=W5({scrapeMotionValuesFromProps:Qp,createRenderState:Zp}),pk=W5({scrapeMotionValuesFromProps:C5,createRenderState:Y5}),_k=Symbol.for("motionComponentSymbol");function gk(e,n,i){const a=_.useRef(i);_.useInsertionEffect(()=>{a.current=i});const c=_.useRef(null);return _.useCallback(u=>{var h;u&&((h=e.onMount)==null||h.call(e,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const F5=_.createContext({});function jl(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function yk(e,n,i,a,c,u){var O,N;const{visualElement:d}=_.useContext(of),h=_.useContext(I5),p=_.useContext(Qd),y=_.useContext(nf),g=y.reducedMotion,b=y.skipAnimations,w=_.useRef(null),k=_.useRef(!1);a=a||h.renderer,!w.current&&a&&(w.current=a(e,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g,skipAnimations:b,isSVG:u}),k.current&&w.current&&(w.current.manuallyAnimateOnMount=!0));const M=w.current,A=_.useContext(F5);M&&!M.projection&&c&&(M.type==="html"||M.type==="svg")&&xk(w.current,i,c,A);const T=_.useRef(!1);_.useInsertionEffect(()=>{M&&T.current&&M.update(i,p)});const D=i[Qb],I=_.useRef(!!D&&typeof window<"u"&&!((O=window.MotionHandoffIsComplete)!=null&&O.call(window,D))&&((N=window.MotionHasOptimisedAnimation)==null?void 0:N.call(window,D)));return kp(()=>{k.current=!0,M&&(T.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),I.current&&M.animationState&&M.animationState.animateChanges())}),_.useEffect(()=>{M&&(!I.current&&M.animationState&&M.animationState.animateChanges(),I.current&&(queueMicrotask(()=>{var G;(G=window.MotionHandoffMarkAsComplete)==null||G.call(window,D)}),I.current=!1),M.enteringChildren=void 0)}),M}function xk(e,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:y,layoutAnchor:g,layoutCrossfade:b}=n;e.projection=new i(e.latestValues,n["data-framer-portal-id"]?void 0:X5(e.parent)),e.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&jl(h),visualElement:e,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:b,layoutScroll:p,layoutRoot:y,layoutAnchor:g})}function X5(e){if(e)return e.options.allowProjection!==!1?e.projection:X5(e.parent)}function hm(e,{forwardMotionProps:n=!1,type:i}={},a,c){var y,g;a&&ek(a);const u=i?i==="svg":Jp(e),d=u?pk:mk;function h(b,w){let k;const M={..._.useContext(nf),...b,layoutId:bk(b)},{isStatic:A}=M,T=ik(b),D=d(b,A);if(!A&&typeof window<"u"){vk();const I=wk(M);k=I.MeasureLayout,T.visualElement=yk(e,D,M,c,I.ProjectionNode,u)}return l.jsxs(of.Provider,{value:T,children:[k&&T.visualElement?l.jsx(k,{visualElement:T.visualElement,...M}):null,dk(e,b,gk(D,T.visualElement,w),D,A,n,u)]})}h.displayName=`motion.${typeof e=="string"?e:`create(${(g=(y=e.displayName)!=null?y:e.name)!=null?g:""})`}`;const p=_.forwardRef(h);return p[_k]=e,p}function bk({layoutId:e}){const n=_.useContext(Cp).id;return n&&e!==void 0?n+"-"+e:e}function vk(e,n){_.useContext(I5).strict}function wk(e){const n=H5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(e)||a!=null&&a.isEnabled(e)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function Sk(e,n){if(typeof Proxy>"u")return hm;const i=new Map,a=(u,d)=>hm(u,d,e,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,hm(d,void 0,e,n)),i.get(d))})}const Ck=(e,n)=>{var a;return((a=n.isSVG)!=null?a:Jp(e))?new k5(n):new b5(n,{allowProjection:e!==_.Fragment})};class kk extends pr{constructor(n){super(n),n.animationState||(n.animationState=a6(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();ef(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let jk=0;class Mk extends pr{constructor(){super(...arguments),this.id=jk++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Vr(this.node,d,h);if(p){const{transition:y,transitionEnd:g,...b}=p;for(const w in b)(u=this.node.getValue(w))==null||u.jump(b[w])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const Ek={animation:{Feature:kk},exit:{Feature:Mk}};function su(e){return{point:{x:e.pageX,y:e.pageY}}}const Tk=e=>n=>Xp(n)&&e(n,su(n));function Wc(e,n,i,a){return Qc(e,n,Tk(i),a)}const G5=({current:e})=>e?e.ownerDocument.defaultView:null,U1=(e,n)=>Math.abs(e-n);function Ak(e,n){const i=U1(e.x,n.x),a=U1(e.y,n.y);return Math.sqrt(i**2+a**2)}const V1=new Set(["auto","scroll"]);class q5{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=k=>{this.handleScroll(k.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=cd(this.lastRawMoveEventInfo,this.transformPagePoint));const k=mm(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,A=Ak(k.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!A)return;const{point:T}=k,{timestamp:D}=Vo;this.history.push({...T,timestamp:D});const{onStart:I,onMove:O}=this.handlers;M||(I&&I(this.lastMoveEvent,k),this.startEvent=this.lastMoveEvent),O&&O(this.lastMoveEvent,k)},this.handlePointerMove=(k,M)=>{this.lastMoveEvent=k,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=cd(M,this.transformPagePoint),os.update(this.updatePoint,!0)},this.handlePointerUp=(k,M)=>{this.end();const{onEnd:A,onSessionEnd:T,resumeAnimation:D}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&D&&D(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const I=mm(k.type==="pointercancel"?this.lastMoveEventInfo:cd(M,this.transformPagePoint),this.history);this.startEvent&&A&&A(k,I),T&&T(k,I)},!Xp(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=su(n),y=cd(p,this.transformPagePoint),{point:g}=y,{timestamp:b}=Vo;this.history=[{...g,timestamp:b}];const{onSessionStart:w}=i;w&&w(n,mm(y,this.history)),this.removeListeners=eu(Wc(this.contextWindow,"pointermove",this.handlePointerMove),Wc(this.contextWindow,"pointerup",this.handlePointerUp),Wc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(V1.has(a.overflowX)||V1.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),os.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Pa(this.updatePoint)}}function cd(e,n){return n?{point:n(e.point)}:e}function Y1(e,n){return{x:e.x-n.x,y:e.y-n.y}}function mm({point:e},n){return{point:e,delta:Y1(e,K5(n)),offset:Y1(e,Nk(n)),velocity:Dk(n,.1)}}function Nk(e){return e[0]}function K5(e){return e[e.length-1]}function Dk(e,n){if(e.length<2)return{x:0,y:0};let i=e.length-1,a=null;const c=K5(e);for(;i>=0&&(a=e[i],!(c.timestamp-a.timestamp>Si(n)));)i--;if(!a)return{x:0,y:0};a===e[0]&&e.length>2&&c.timestamp-a.timestamp>Si(n)*2&&(a=e[1]);const u=qi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function Rk(e,{min:n,max:i},a){return n!==void 0&&e<n?e=a?ys(n,e,a.min):Math.max(e,n):i!==void 0&&e>i&&(e=a?ys(i,e,a.max):Math.min(e,i)),e}function W1(e,n,i){return{min:n!==void 0?e.min+n:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function Bk(e,{top:n,left:i,bottom:a,right:c}){return{x:W1(e.x,i,c),y:W1(e.y,n,a)}}function F1(e,n){let i=n.min-e.min,a=n.max-e.max;return n.max-n.min<e.max-e.min&&([i,a]=[a,i]),{min:i,max:a}}function Lk(e,n){return{x:F1(e.x,n.x),y:F1(e.y,n.y)}}function Ok(e,n){let i=.5;const a=ai(e),c=ai(n);return c>a?i=Rl(n.min,n.max-a,e.min):a>c&&(i=Rl(e.min,e.max-c,n.min)),xa(0,1,i)}function zk(e,n){const i={};return n.min!==void 0&&(i.min=n.min-e.min),n.max!==void 0&&(i.max=n.max-e.min),i}const rp=.35;function $k(e=rp){return e===!1?e=0:e===!0&&(e=rp),{x:X1(e,"left","right"),y:X1(e,"top","bottom")}}function X1(e,n,i){return{min:G1(e,n),max:G1(e,i)}}function G1(e,n){return typeof e=="number"?e:e[n]||0}const Pk=new WeakMap;class Ik{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ho(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=b=>{i&&this.snapToCursor(su(b).point),this.stopAnimation()},d=(b,w)=>{const{drag:k,dragPropagation:M,onDragStart:A}=this.getProps();if(k&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=_C(k),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=w,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),_a(D=>{let I=this.getAxisMotionValue(D).get()||0;if(ya.test(I)){const{projection:O}=this.visualElement;if(O&&O.layout){const N=O.layout.layoutBox[D];N&&(I=ai(N)*(parseFloat(I)/100))}}this.originPoint[D]=I}),A&&os.update(()=>A(b,w),!1,!0),Zm(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},h=(b,w)=>{this.latestPointerEvent=b,this.latestPanInfo=w;const{dragPropagation:k,dragDirectionLock:M,onDirectionLock:A,onDrag:T}=this.getProps();if(!k&&!this.openDragLock)return;const{offset:D}=w;if(M&&this.currentDirection===null){this.currentDirection=Uk(D),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",w.point,D),this.updateAxis("y",w.point,D),this.visualElement.render(),T&&os.update(()=>T(b,w),!1,!0)},p=(b,w)=>{this.latestPointerEvent=b,this.latestPanInfo=w,this.stop(b,w),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>{const{dragSnapToOrigin:b}=this.getProps();(b||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new q5(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:G5(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&os.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!ud(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=Rk(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&jl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=Bk(a.layoutBox,n):this.constraints=!1,this.elastic=$k(i),c!==this.constraints&&!jl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&_a(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=zk(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!jl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=VC(a,c.root,this.visualElement.getTransformPagePoint());let d=Lk(c.layout.layoutBox,u);if(i){const h=i(IC(d));this.hasMutatedConstraints=!!h,h&&(d=m5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},y=_a(g=>{if(!ud(g,i,this.currentDirection))return;let b=p&&p[g]||{};(d===!0||d===g)&&(b={min:0,max:0});const w=c?200:1e6,k=c?40:1e7,M={type:"inertia",velocity:a?n[g]:0,bounceStiffness:w,bounceDamping:k,timeConstant:750,restDelta:1,restSpeed:10,...u,...b};return this.startAxisValueAnimation(g,M)});return Promise.all(y).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Zm(this.visualElement,n),a.start(Ip(n,a,0,i,this.visualElement,!1))}stopAnimation(){_a(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){_a(i=>{const{drag:a}=this.getProps();if(!ud(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-ys(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!jl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};_a(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=Ok({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),_a(d=>{if(!ud(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:y}=this.constraints[d];h.set(ys(p,y,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Pk.set(this.visualElement,this);const n=this.visualElement.current,i=Wc(n,"pointerdown",y=>{const{drag:g,dragListener:b=!0}=this.getProps(),w=y.target,k=w!==n&&wC(w);g&&b&&!k&&this.start(y)});let a;const c=()=>{const{dragConstraints:y}=this.getProps();jl(y)&&y.current&&(this.constraints=this.resolveRefConstraints(),a||(a=Hk(n,y.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),os.read(c);const h=Qc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:g})=>{this.isDragging&&g&&(_a(b=>{const w=this.getAxisMotionValue(b);w&&(this.originPoint[b]+=y[b].translate,w.set(w.get()+y[b].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=rp,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function q1(e){let n=!0;return()=>{if(n){n=!1;return}e()}}function Hk(e,n,i){const a=n1(e,q1(i)),c=n1(n,q1(i));return()=>{a(),c()}}function ud(e,n,i){return(n===!0||n===e)&&(i===null||i===e)}function Uk(e,n=10){let i=null;return Math.abs(e.y)>n?i="y":Math.abs(e.x)>n&&(i="x"),i}class Vk extends pr{constructor(n){super(n),this.removeGroupControls=Ki,this.removeListeners=Ki,this.controls=new Ik(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ki}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const pm=e=>(n,i)=>{e&&os.update(()=>e(n,i),!1,!0)};class Yk extends pr{constructor(){super(...arguments),this.removePointerDownListener=Ki}onPointerDown(n){this.session=new q5(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:G5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:pm(n),onStart:pm(i),onMove:pm(a),onEnd:(u,d)=>{delete this.session,c&&os.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=Wc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let _m=!1;class Wk extends _.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),_m&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ld.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),_m=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||os.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Fp.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;_m=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function Q5(e){const[n,i]=P5(),a=_.useContext(Cp);return l.jsx(Wk,{...e,layoutGroup:a,switchLayoutGroup:_.useContext(F5),isPresent:n,safeToRemove:i})}const Fk={pan:{Feature:Yk},drag:{Feature:Vk,ProjectionNode:$5,MeasureLayout:Q5}};function K1(e,n,i){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&os.postRender(()=>u(n,su(n)))}class Xk extends pr{mount(){const{current:n}=this.node;n&&(this.unmount=yC(n,(i,a)=>(K1(this.node,a,"Start"),c=>K1(this.node,c,"End"))))}unmount(){}}class Gk extends pr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=eu(Qc(this.node.current,"focus",()=>this.onFocus()),Qc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Q1(e,n,i){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&os.postRender(()=>u(n,su(n)))}class qk extends pr{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=CC(n,(c,u)=>(Q1(this.node,u,"Start"),(d,{success:h})=>Q1(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const lp=new WeakMap,gm=new WeakMap,Kk=e=>{const n=lp.get(e.target);n&&n(e)},Qk=e=>{e.forEach(Kk)};function Zk({root:e,...n}){const i=e||document;gm.has(i)||gm.set(i,{});const a=gm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(Qk,{root:e,...n})),a[c]}function Jk(e,n,i){const a=Zk(n);return lp.set(e,i),a.observe(e),()=>{lp.delete(e),a.unobserve(e)}}const e3={some:0,all:1};class t3 extends pr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:e3[c]},h=y=>{const{isIntersecting:g}=y;if(this.isInView===g||(this.isInView=g,u&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:b,onViewportLeave:w}=this.node.getProps(),k=g?b:w;k&&k(y)};this.stopObserver=Jk(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(n3(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function n3({viewport:e={}},{viewport:n={}}={}){return i=>e[i]!==n[i]}const s3={inView:{Feature:t3},tap:{Feature:qk},focus:{Feature:Gk},hover:{Feature:Xk}},o3={layout:{ProjectionNode:$5,MeasureLayout:Q5}},i3={...Ek,...s3,...Fk,...o3},ri=Sk(i3,Ck);function cp(e){const n=Jc(()=>mr(e)),{isStatic:i}=_.useContext(nf);if(i){const[,a]=_.useState(e);_.useEffect(()=>n.on("change",a),[])}return n}function Z5(e,n){const i=cp(n()),a=()=>i.set(n());return a(),kp(()=>{const c=()=>os.preRender(a,!1,!0),u=e.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),Pa(a)}}),i}function a3(e){Vc.current=[],e();const n=Z5(Vc.current,e);return Vc.current=void 0,n}function dd(e,n,i,a){if(typeof e=="function")return a3(e);const u=typeof n=="function"?n:RC(n,i,a),d=Array.isArray(e)?Z1(e,u):Z1([e],([p])=>u(p)),h=Array.isArray(e)?void 0:e.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function Z1(e,n){const i=Jc(()=>[]);return Z5(e,()=>{i.length=0;const a=e.length;for(let c=0;c<a;c++)i[c]=e[c].get();return n(i)})}function e_(e){return typeof e=="object"&&!Array.isArray(e)}function J5(e,n,i,a){return e==null?[]:typeof e=="string"&&e_(n)?Wp(e,i,a):e instanceof NodeList?Array.from(e):Array.isArray(e)?e.filter(c=>c!=null):[e]}function r3(e,n,i){return e*(n+1)}function J1(e,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,e+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:e}function l3(e,n,i){for(let a=0;a<e.length;a++){const c=e[a];c.at>n&&c.at<i&&(Dl(e,c),a--)}}function c3(e,n,i,a,c,u){l3(e,c,u);for(let d=0;d<n.length;d++)e.push({value:n[d],at:ys(c,u,a[d]),easing:bb(i,d)})}function u3(e,n){for(let i=0;i<e.length;i++)e[i]=e[i]/(n+1)}function d3(e,n){return e.at===n.at?e.value===null?1:n.value===null?-1:0:e.at-n.at}const f3="easeInOut";function h3(e,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},y=new Map;let g=0,b=0,w=0;for(let k=0;k<e.length;k++){const M=e[k];if(typeof M=="string"){y.set(M,b);continue}else if(!Array.isArray(M)){y.set(M.name,J1(b,M.at,g,y));continue}let[A,T,D={}]=M;D.at!==void 0&&(b=J1(b,D.at,g,y));let I=0;const O=(N,G,X,U=0,K=0)=>{const le=m3(N),{delay:de=0,times:me=Ob(le),type:Ae=n.type||"keyframes",repeat:Xe,repeatType:oe,repeatDelay:se=0,...z}=G;let{ease:te=n.ease||"easeOut",duration:Y}=G;const fe=typeof de=="function"?de(U,K):de,Se=le.length,P=$p(Ae)?Ae:c==null?void 0:c[Ae||"keyframes"];if(Se<=2&&P){let Te=100;if(Se===2&&g3(le)){const Qe=le[1]-le[0];Te=Math.abs(Qe)}const he={...n,...z};Y!==void 0&&(he.duration=Si(Y));const ze=Db(he,Te,P);te=ze.ease,Y=ze.duration}Y!=null||(Y=u);const ae=b+fe;me.length===1&&me[0]===0&&(me[1]=1);const ee=me.length-le.length;if(ee>0&&Lb(me,ee),le.length===1&&le.unshift(null),Xe){Y=r3(Y,Xe);const Te=[...le],he=[...me];te=Array.isArray(te)?[...te]:[te];const ze=[...te];for(let Qe=0;Qe<Xe;Qe++){le.push(...Te);for(let We=0;We<Te.length;We++)me.push(he[We]+(Qe+1)),te.push(We===0?"linear":bb(ze,We-1))}u3(me,Xe)}const xe=ae+Y;c3(X,le,te,me,ae,xe),I=Math.max(fe+Y,I),w=Math.max(xe,w)};if(So(A)){const N=ex(A,h);O(T,D,tx("default",N))}else{const N=J5(A,T,a,p),G=N.length;for(let X=0;X<G;X++){T=T,D=D;const U=N[X],K=ex(U,h);for(const le in T)O(T[le],p3(D,le),tx(le,K),X,G)}}g=b,b+=I}return h.forEach((k,M)=>{for(const A in k){const T=k[A];T.sort(d3);const D=[],I=[],O=[];for(let U=0;U<T.length;U++){const{at:K,value:le,easing:de}=T[U];D.push(le),I.push(Rl(0,w,K)),O.push(de||"easeOut")}I[0]!==0&&(I.unshift(0),D.unshift(D[0]),O.unshift(f3)),I[I.length-1]!==1&&(I.push(1),D.push(null)),d.has(M)||d.set(M,{keyframes:{},transition:{}});const N=d.get(M);N.keyframes[A]=D;const{type:G,...X}=n;N.transition[A]={...X,duration:w,ease:O,times:I,...i}}}),d}function ex(e,n){return!n.has(e)&&n.set(e,{}),n.get(e)}function tx(e,n){return n[e]||(n[e]=[]),n[e]}function m3(e){return Array.isArray(e)?e:[e]}function p3(e,n){return e&&e[n]?{...e,...e[n]}:{...e}}const _3=e=>typeof e=="number",g3=e=>e.every(_3);function y3(e){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Jd(e)&&!l5(e)?new k5(n):new b5(n);i.mount(e),qc.set(e,i)}function x3(e){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new KC(n);i.mount(e),qc.set(e,i)}function b3(e,n){return So(e)||typeof e=="number"||typeof e=="string"&&!e_(n)}function e2(e,n,i,a){const c=[];if(b3(e,n))c.push(B5(e,e_(n)&&n.default||n,i&&(i.default||i)));else{if(e==null)return c;const u=J5(e,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],y=p instanceof Element?y3:x3;qc.has(p)||y(p);const g=qc.get(p),b={...i};"delay"in b&&typeof b.delay=="function"&&(b.delay=b.delay(h,d)),c.push(...Vp(g,{...n,transition:b},{}))}}return c}function v3(e,n,i){const a=[],c=e.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=mr(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return h3(c,n,i,{spring:Gc}).forEach(({keyframes:d,transition:h},p)=>{a.push(...e2(p,d,h))}),a}function w3(e){return Array.isArray(e)&&e.some(Array.isArray)}function S3(e={}){const{scope:n,reduceMotion:i}=e;function a(c,u,d){let h=[],p;if(w3(c)){const{onComplete:g,...b}=u||{};typeof g=="function"&&(p=g),h=v3(c,i!==void 0?{reduceMotion:i,...b}:b,n)}else{const{onComplete:g,...b}=d||{};typeof g=="function"&&(p=g),h=e2(c,u,i!==void 0?{reduceMotion:i,...b}:b,n)}const y=new P4(h);return p&&y.finished.then(p),n&&(n.animations.push(y),y.finished.then(()=>{Dl(n.animations,y)})),y}return a}const nx=S3(),$a=(e,n)=>!e||!n?!1:e===n||e.startsWith(n)||n.startsWith(e);function sx(e,n){var a;const i=[...(a=e.childShas)!=null?a:[]];return i.includes(n)||i.push(n),{...e,childShas:i}}function C3(e,n,i,a,c,u){if(!i)return{directCommits:e,branchCommitPreviews:n};const d=e.map(p=>$a(p.fullSha,i)||$a(p.sha,i)?sx(p,a):p),h=Object.fromEntries(Object.entries(n).map(([p,y])=>[p,y.map(g=>(p===c||p===u)&&($a(g.fullSha,i)||$a(g.sha,i))?sx(g,a):g)]));return{directCommits:d,branchCommitPreviews:h}}function k3(e,n,i,a){if(!e)return null;const c=d=>$a(d,e);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(y=>c(y.fullSha)||c(y.sha)))return d;return null}function j3(e,n,i,a,c,u,d=!1){const h=e.baseSha,p=`STASH:${e.index}`,y=`Stash ${e.index+1}`,g=k3(h,i,a,u),b=(()=>{var X;if(!h)return null;const G=i.find(U=>$a(U.fullSha,h)||$a(U.sha,h));if(G!=null&&G.date)return G.date;if(g&&!d){const U=((X=a[g])!=null?X:[]).find(K=>$a(K.fullSha,h)||$a(K.sha,h));if(U!=null&&U.date)return U.date}return null})(),w=b?new Date(b).getTime():Number.NaN,k=Date.now(),M=Number.isFinite(w)?Math.max(k,w+1+e.index):k+e.index,A=new Date(M).toISOString(),T=e.message.trim(),D={fullSha:p,sha:y,parentSha:h,clusterKey:null,childShas:[],message:T||y,author:"You",date:A,kind:"stash"},I=`Stash ${e.index+1}`,O={name:I,commitsAhead:1,commitsBehind:0,lastCommitDate:A,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:p,divergedFromSha:h!=null?h:void 0,parentBranch:g||u},N=C3(i,a,h,p,I,u);return{branches:[O,...n],directCommits:N.directCommits,branchCommitPreviews:{...N.branchCommitPreviews,[I]:[D]},branchUniqueAheadCounts:{...c,[I]:1}}}function t2(e,n,i,a,c,u,d=!1){const h=[...e].sort((y,g)=>y.index-g.index);let p={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const y of h)p=j3(y,p.branches,p.directCommits,p.branchCommitPreviews,p.branchUniqueAheadCounts,u,d);return p}function up({branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:y,manuallyOpenedClumps:g=new Set,manuallyClosedClumps:b=new Set,gridSearchQuery:w="",gridFocusSha:k=null,orientation:M="horizontal"}){var U,K;const A=t2(y,e,i,u,h,c,(U=p==null?void 0:p.hasUncommittedChanges)!=null?U:!1);let T=A.branches,D=A.directCommits,I=A.branchCommitPreviews,O=A.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const le=p.headSha||p.parentSha||null,de=(Y,fe)=>!Y||!fe?!1:Y===fe||Y.startsWith(fe)||fe.startsWith(Y),me=p.branchName?T.find(Y=>Y.name===p.branchName):void 0,Ae=(()=>{var fe;if(!le)return null;const Y=D.find(Se=>de(Se.fullSha,le)||de(Se.sha,le));if(Y!=null&&Y.date)return Y.date;if(me){const Se=((fe=I[me.name])!=null?fe:[]).find(P=>de(P.fullSha,le)||de(P.sha,le));if(Se!=null&&Se.date)return Se.date}return null})(),Xe=Ae?new Date(Ae).getTime():Number.NaN,oe=Date.now(),se=Number.isFinite(Xe)?Math.max(oe,Xe+1):oe,z=new Date(se).toISOString(),te={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:le,message:"Local uncommitted changes",author:"You",date:z,kind:"uncommitted"};me?(T=T.map(Y=>Y.name===me.name?{...Y,commitsAhead:Y.commitsAhead+1,unpushedCommits:Y.unpushedCommits+1,lastCommitDate:z,headSha:"WORKING_TREE"}:Y),I={...I,[me.name]:[te,...I[me.name]||[]]},O={...O,[me.name]:Math.max(0,(K=Object.prototype.hasOwnProperty.call(O,me.name)?O[me.name]:me.commitsAhead)!=null?K:0)+1}):I={...I,[c]:[te,...I[c]||[]]}}const N={...d};N[c]=null;const G=vp(T,c,I,N),X=wp({lanes:G,branches:T,mergeNodes:n,directCommits:D,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:I,branchParentByName:N,branchUniqueAheadCounts:O,manuallyOpenedClumps:g,manuallyClosedClumps:b,isDebugOpen:!1,gridSearchQuery:w,gridFocusSha:k,checkedOutRef:p,orientation:M});return{enrichedBranches:T,enrichedBranchCommitPreviews:I,enrichedBranchUniqueAheadCounts:O,enrichedDirectCommits:D,sharedGridLayoutModel:X}}const ox="git-visualizer:expanded-projects",ix="git-visualizer:expanded-branches";function M3(e,n){var u;const i=new Map(e.map(d=>[d.name,d])),a=new Map;for(const d of e){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const y=(u=a.get(h))!=null?u:[];y.push(d.name),a.set(h,y)}const c=(d,h)=>{var g,b,w,k;const p=new Date((b=(g=i.get(d))==null?void 0:g.lastCommitDate)!=null?b:0).getTime(),y=new Date((k=(w=i.get(h))==null?void 0:w.lastCommitDate)!=null?k:0).getTime();return p-y};for(const[d,h]of a.entries())h.sort(c);return a}function E3(e,n,i){const a=new Map(e.map(d=>[d.name,d])),c=(d,h)=>{var g,b,w,k;const p=new Date((b=(g=a.get(d))==null?void 0:g.lastCommitDate)!=null?b:0).getTime(),y=new Date((k=(w=a.get(h))==null?void 0:w.lastCommitDate)!=null?k:0).getTime();return p-y},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return e.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function T3(e,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const y of d){const g=[...h,y];if(y===i.branchName){for(const b of g)c.add(b);return!0}if(u((p=n.get(y))!=null?p:[],g))return!0}return!1};return u(e,[]),c}function ym(e,n){if(!e||!n)return!1;const i=u=>{const d=u.replace(/\\/g,"/").replace(/\/+$/,""),h=new Set([d]);return d.startsWith("/private/")&&h.add(d.slice(8)),Array.from(h)},a=i(e),c=i(n);for(const u of a)for(const d of c)if(u===d||u.toLowerCase()===d.toLowerCase())return!0;return!1}function dp({branchName:e,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:b,showCommits:w,getMergeTargetLabels:k,sourceBranchName:M,clusterKeyByCommitId:A,unpushedCommitShasByBranch:T,isGridClusterOpen:D,onToggleGridCluster:I,onSelectCommit:O,onSelectBranch:N,isActiveProject:G}){var xe,Te;if(b.has(e))return null;const X=a.get(e);if(!X)return null;const U=(xe=u.get(e))!=null?xe:[],K=U.length>0,le=_.useMemo(()=>{var he;return[...(he=c[e])!=null?he:[]]},[c,e]),de=w&&le.length>0,me=w,Ae=K||de,Xe=h.has(e),oe=me?le:[],se=Xe&&oe.length>0,z=y===e||g!=null&&X.headSha===g,te=new Set(b);te.add(e);const Y="top-[-0.45rem] h-5 w-[10px]",fe="rounded-bl-[7px]",Se="left-[0.65rem]",P=new Map,ae=[];for(const he of U){const ze=d.get(he);if(ze){const Qe=oe.findIndex(We=>Oi(We.fullSha,ze)||Oi(We.sha,ze));if(Qe>=0){const We=(Te=P.get(Qe))!=null?Te:[];We.push(he),P.set(Qe,We);continue}}ae.push(he)}const ee=_.useMemo(()=>{if(!w||oe.length===0)return[];const he=[];let ze=[],Qe=null;const We=()=>{if(ze.length===0)return;const ut=ze[ze.length-1],kt=`sidebar-single-${e}-${ut.fullSha}`;he.push({key:Qe!=null?Qe:kt,commits:ze,count:ze.length,lead:ut}),ze=[],Qe=null};return oe.forEach(ut=>{var Dt,lt;const kt=(Dt=A.get(`${e}:${ut.fullSha}`))!=null?Dt:null,bt=((lt=T[e])!=null?lt:[]).includes(ut.fullSha),st=`${kt!=null?kt:`sidebar-single-${e}-${ut.fullSha}`}:${bt?"unpushed":"pushed"}`;if(ze.length===0){ze=[ut],Qe=st;return}if(st===Qe){ze.push(ut);return}We(),ze=[ut],Qe=st}),We(),he},[e,w,oe,A,T]);return l.jsxs("li",{className:mn("relative flex flex-col gap-1",n>0?"pl-4":"pl-0",Xe?"mb-2.5":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:mn("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",fe,Se,Y)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:mn("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.25rem]",Se)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("div",{className:mn("branch-row","group flex min-w-0 flex-1 items-center gap-0 rounded-md px-2 h-6 text-left text-sm font-normal transition-colors hover:bg-border/50","text-inherit hover:text-inherit"),"data-active-project":G?"true":"false","data-checked-out-branch":z?"true":"false",style:{color:G?z?"var(--checked)":"var(--foreground)":"var(--muted-foreground)"},role:"button",tabIndex:0,onClick:()=>{G?N==null||N(e):Ae?p(e):N==null||N(e)},onKeyDown:he=>{(he.key==="Enter"||he.key===" ")&&(he.preventDefault(),G?N==null||N(e):Ae?p(e):N==null||N(e))},children:[Ae?l.jsx("button",{type:"button","aria-label":`${Xe?"Collapse":"Expand"} ${e}`,onPointerDown:he=>{he.preventDefault()},onClick:he=>{he.preventDefault(),he.stopPropagation(),p(e)},className:"group/chevron branch-chevron flex h-6 w-6 -ml-2 shrink-0 items-center justify-center rounded-sm p-0 text-[10px] leading-none transition-colors hover:bg-border/50",children:l.jsx(fw,{"aria-hidden":"true",className:mn("h-3.5 w-3.5 shrink-0 transition-transform text-current",Xe?"rotate-90":"")})}):null,l.jsx("span",{className:mn("branch-label min-w-0 flex-1 truncate font-normal whitespace-nowrap overflow-hidden","font-medium"),children:e})]})}),se?l.jsx("ul",{className:"relative space-y-1 pl-4",children:ee.map(he=>{const ze=he.count>1&&!D(he.key);return(ze?[he.lead]:he.commits).map(We=>{var bt;const ut=oe.findIndex(st=>st.fullSha===We.fullSha),kt=k(We.fullSha,M!=null?M:e);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>O==null?void 0:O(We.fullSha),className:"min-w-0 flex-1 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-muted hover:text-muted-foreground",title:We.message,children:[l.jsx("span",{className:"block truncate",children:We.message}),kt.length>0?l.jsx("span",{className:"mt-0 block space-y-2",children:kt.map(st=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:st})]},`${We.fullSha}:${st}`))}):null]}),he.count>1&&We.fullSha===he.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${e}:${he.lead.fullSha}`,onClick:()=>I(he.key,`${e}:${he.lead.fullSha}`),className:mn("shrink-0 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-muted hover:text-muted-foreground",ze?"":"min-w-[2ch] text-center"),children:ze?`+${Math.max(1,he.count-1)}`:"−"}):null]}),(bt=P.get(ut))!=null&&bt.length?l.jsx("ul",{className:"relative space-y-1",children:P.get(ut).map((st,Dt,lt)=>l.jsx(dp,{branchName:st,depth:n+1,isLast:Dt===lt.length-1&&ae.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:te,showCommits:w,getMergeTargetLabels:k,sourceBranchName:st,clusterKeyByCommitId:A,unpushedCommitShasByBranch:T,isGridClusterOpen:D,onToggleGridCluster:I,onSelectCommit:O,onSelectBranch:N,isActiveProject:G},st))}):null]},`${e}:${We.fullSha}`)})})}):null,K&&Xe&&ae.length>0?l.jsx("ul",{className:"relative space-y-1",children:ae.map((he,ze)=>l.jsx(dp,{branchName:he,depth:n+1,isLast:ze===ae.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:te,showCommits:w,getMergeTargetLabels:k,sourceBranchName:he,clusterKeyByCommitId:A,unpushedCommitShasByBranch:T,isGridClusterOpen:D,onToggleGridCluster:I,onSelectCommit:O,onSelectBranch:N,isActiveProject:G},he))}):null]})}function A3({open:e}){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-4 w-4 shrink-0 transition-opacity",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e?l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.7031 19H5.97457C4.96341 19 4.11131 18.2453 3.9892 17.2415L2.77269 7.24152C2.62773 6.04996 3.5577 5 4.75805 5H7C7.64911 5 8.28071 5.21053 8.8 5.6L9.2 5.9C9.71929 6.28947 10.3509 6.5 11 6.5H16.2369C17.2445 6.5 18.0947 7.24955 18.2211 8.2492L18.4938 10.4062",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M5.21532 12.0419C5.42789 11.1385 6.23405 10.5 7.16215 10.5H19.8105C20.7133 10.5 21.38 11.3419 21.1733 12.2207L19.9409 17.4581C19.7284 18.3615 18.9222 19 17.9941 19H6.10333C4.81363 19 3.8611 17.7973 4.1565 16.5419L5.21532 12.0419Z",stroke:"currentColor",strokeWidth:"1.5"})]}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 7C4 5.89543 4.89543 5 6 5H9C9.64911 5 10.2807 5.21053 10.8 5.6L11.2 5.9C11.7193 6.28947 12.3509 6.5 13 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 10.5L12.4211 10.5L20 10.5",stroke:"currentColor",strokeWidth:"1.5"})]})})}function N3({projects:e,activeProjectPath:n,onSelectProject:i,onAddProject:a,onRemoveProject:c,onRevealProjectInFinder:u,onReorderProjects:d,projectLoading:h=!1,projectError:p=null,checkedOutRef:y,manuallyOpenedClumpsByProject:g={},manuallyClosedClumpsByProject:b={},manuallyOpenedClumps:w,manuallyClosedClumps:k,setManuallyOpenedClumps:M,setManuallyClosedClumps:A,gridLayoutModel:T,onSelectCommit:D,onSelectBranch:I,showCommits:O,className:N,style:G,collapsed:X=!1}){var Ge,Be;const U=_.useRef(null),K=_.useRef(null),[le,de]=_.useState(()=>{if(typeof window>"u")return new Set;try{const pe=window.localStorage.getItem(ox);if(pe){const Ze=JSON.parse(pe);if(Array.isArray(Ze)){const Ye=new Set;for(const Je of Ze)typeof Je=="string"&&Ye.add(Je);return Ye}}}catch{}return new Set}),[me,Ae]=_.useState({}),[Xe,oe]=_.useState(()=>new Set),[se,z]=_.useState(()=>new Set),[te,Y]=_.useState(null),fe=w!=null?w:Xe,Se=k!=null?k:se,P=M!=null?M:oe,ae=A!=null?A:z,[ee,xe]=_.useState(null),[Te,he]=_.useState(null),[ze,Qe]=_.useState(null),[We,ut]=_.useState(null),[kt,bt]=_.useState(null),[st,Dt]=_.useState(null),[lt,qt]=_.useState(null),Kt=_.useRef(new Map),Q=_.useRef(!1),Ne=_.useRef(null),at=_.useRef(null),Ce=pe=>{try{window.localStorage.setItem(ox,JSON.stringify(Array.from(pe)))}catch{}},dt=pe=>{try{const Ze=Object.fromEntries(Object.entries(pe).map(([Ye,Je])=>[Ye,Array.from(Je)]));window.localStorage.setItem(ix,JSON.stringify(Ze))}catch{}};_.useEffect(()=>{Ce(le)},[le]),_.useEffect(()=>{try{const pe=window.localStorage.getItem(ix);if(!pe)return;const Ze=JSON.parse(pe);if(!Ze||typeof Ze!="object")return;const Ye={};for(const[Je,De]of Object.entries(Ze)){if(!Array.isArray(De))continue;const et=new Set;for(const _t of De)typeof _t=="string"&&et.add(_t);Ye[Je]=et}Ae(Ye)}catch{}},[]),_.useEffect(()=>{dt(me)},[me]);const He=e,ft=_.useMemo(()=>{if(!We)return He;const pe=He.find(De=>De.path===We);if(!pe)return He;const Ze=He.filter(De=>De.path!==We);if(kt==null)return Ze;const Ye=[...Ze],Je=Math.max(0,Math.min(kt,Ye.length));return Ye.splice(Je,0,pe),Ye},[kt,We,He]),mt=_.useCallback(pe=>{d==null||d(pe)},[d]),jt=_.useCallback(()=>{Qe(null),ut(null),bt(null),Dt(null)},[]);_.useEffect(()=>{if(!ze)return;const pe=Ye=>{const Je=Ne.current;!Je||!Je.active||Math.abs(Ye.clientX-Je.startX)<=4&&Math.abs(Ye.clientY-Je.startY)<=4||at.current==null&&(at.current=window.requestAnimationFrame(()=>{var Ke,Lt;at.current=null;const De=Ne.current;if(!De||!De.active)return;(Math.abs(Ye.clientX-De.startX)>4||Math.abs(Ye.clientY-De.startY)>4)&&(De.moved=!0,ut(De.path)),Dt({x:Ye.clientX-De.offsetX,y:Ye.clientY-De.offsetY,width:De.width});const _t=Array.from((Lt=(Ke=K.current)==null?void 0:Ke.querySelectorAll("[data-project-path]"))!=null?Lt:[]).filter(wt=>wt.dataset.projectPath&&wt.dataset.projectPath!==De.path);let gt=_t.length;if(_t.length>0)for(let wt=0;wt<_t.length;wt+=1){const ct=_t[wt].getBoundingClientRect(),cn=ct.top+ct.height/2;if(Ye.clientY<cn){gt=wt;break}}bt(gt)}))},Ze=()=>{const Ye=Ne.current;if(Ne.current=null,at.current!=null&&(window.cancelAnimationFrame(at.current),at.current=null),!Ye){jt();return}if(!Ye.moved){jt();return}Q.current=!0;const Je=He.map(Ke=>Ke.path);if(Je.indexOf(Ye.path)<0){jt();return}const et=kt;if(et==null){jt();return}const _t=Je.filter(Ke=>Ke!==Ye.path),gt=Math.max(0,Math.min(et,_t.length));_t.splice(gt,0,Ye.path),mt(_t),jt(),window.requestAnimationFrame(()=>{Q.current=!1,Y(null)})};return window.addEventListener("pointermove",pe),window.addEventListener("pointerup",Ze),window.addEventListener("pointercancel",Ze),()=>{window.removeEventListener("pointermove",pe),window.removeEventListener("pointerup",Ze),window.removeEventListener("pointercancel",Ze)}},[jt,mt,ze,kt,He]);const Rt=_.useCallback((pe,Ze)=>{if(pe.button!==0)return;const Ye=pe.currentTarget.getBoundingClientRect();Ne.current={active:!0,path:Ze,startX:pe.clientX,startY:pe.clientY,offsetX:pe.clientX-Ye.left,offsetY:pe.clientY-Ye.top,width:Ye.width,moved:!1},Qe(Ze),ut(null),bt(null),Dt({x:pe.clientX-Ye.left,y:pe.clientY-Ye.top,width:Ye.width})},[]),ot=(Ge=T==null?void 0:T.defaultCollapsedClumps)!=null?Ge:new Set,V=pe=>fe.has(pe)||!ot.has(pe)&&!Se.has(pe),J=(pe,Ze)=>{const Ye=U.current,Je=K.current;if(Ye&&Je){const De=`[data-clump-toggle-id="${Ze}"]`,et=Ye.querySelector(De);if(et){const _t=et.getBoundingClientRect().top-Je.getBoundingClientRect().top;he({id:Ze,topWithinScrollBody:_t})}else he(null)}else he(null);xe(Ze),P(De=>{const et=new Set(De),_t=V(pe);return ae(gt=>{const Ke=new Set(gt);return _t?(et.delete(pe),Ke.add(pe)):(Ke.delete(pe),et.add(pe)),Ke}),et})};_.useLayoutEffect(()=>{if(!ee)return;const pe=U.current,Ze=K.current;if(!pe||!Ze)return;const Ye=`[data-clump-toggle-id="${ee}"]`,Je=pe.querySelector(Ye);if(Je){if((Te==null?void 0:Te.id)===ee){const et=Je.getBoundingClientRect().top-Ze.getBoundingClientRect().top-Te.topWithinScrollBody;Number.isFinite(et)&&et!==0&&(Ze.scrollTop+=et)}Je.focus({preventScroll:!0}),xe(null),he(null)}},[fe,Se,ee,Te]);const be=(pe,Ze)=>{Ae(Ye=>{var _t;const Je=(_t=Ye[pe])!=null?_t:new Set,De=new Set(Je);De.has(Ze)?De.delete(Ze):De.add(Ze);const et={...Ye,[pe]:De};return dt(et),et})};_.useEffect(()=>{if(te==null)return;const pe=()=>{const Ye=Kt.current.get(te);if(!Ye)return;const Je=Ye.getBoundingClientRect();qt({top:Je.bottom+8,right:Math.max(8,window.innerWidth-Je.right)})};pe();const Ze=()=>Y(null);return window.addEventListener("pointerdown",Ze),window.addEventListener("resize",pe),window.addEventListener("scroll",pe,!0),()=>{window.removeEventListener("pointerdown",Ze),window.removeEventListener("resize",pe),window.removeEventListener("scroll",pe,!0)}},[te]);const Ee=_.useMemo(()=>{var Ze,Ye,Je,De,et,_t,gt,Ke,Lt,wt,ct,cn,rt,It,pn,Et;const pe=new Map;for(const yt of e){const un=ym(yt.path,n),tn=le.has(yt.path);if(!un&&!tn)continue;const Qt=up({branches:yt.branches,mergeNodes:yt.mergeNodes,directCommits:yt.directCommits,unpushedDirectCommits:yt.unpushedDirectCommits,defaultBranch:yt.defaultBranch,branchCommitPreviews:yt.branchCommitPreviews,branchUniqueAheadCounts:yt.branchUniqueAheadCounts,checkedOutRef:yt.checkedOutRef,stashes:yt.stashes,manuallyOpenedClumps:(Ze=g[yt.path])!=null?Ze:new Set,manuallyClosedClumps:(Ye=b[yt.path])!=null?Ye:new Set}),$t=Qt.enrichedBranches.some(Xt=>Xt.name===yt.defaultBranch)?Qt.enrichedBranches:[{name:yt.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...Qt.enrichedBranches],Jt=new Map(Qt.sharedGridLayoutModel.nodes.map(Xt=>[Xt.commit.visualId,Xt.row])),At={};for(const Xt of Qt.sharedGridLayoutModel.allCommits){const Rn=(Je=At[Xt.branchName])!=null?Je:[];Rn.push({fullSha:Xt.id,sha:Xt.id.slice(0,7),parentSha:(De=Xt.parentSha)!=null?De:null,message:Xt.message,author:Xt.author,date:Xt.date,kind:(et=Xt.kind)!=null?et:"commit"}),At[Xt.branchName]=Rn}for(const Xt of Object.keys(At))At[Xt]=At[Xt].sort((Rn,en)=>{var As,Rs;const as=new Date(Rn.date).getTime(),xs=new Date(en.date).getTime();if(as!==xs)return as-xs;const bs=(As=Jt.get(`${Xt}:${Rn.fullSha}`))!=null?As:Number.MAX_SAFE_INTEGER,sn=(Rs=Jt.get(`${Xt}:${en.fullSha}`))!=null?Rs:Number.MAX_SAFE_INTEGER;return bs!==sn?bs-sn:Rn.fullSha.localeCompare(en.fullSha)});const bn=(_t=Qt.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?_t:new Map,tt=(Xt,Rn)=>{const en=bn.get(Rn);if(!en)return[];for(const[as,xs]of en.entries())if(Oi(Xt,as))return Array.from(xs).sort();return[]},ds=M3($t,yt.defaultBranch),fs=E3($t,yt.defaultBranch,ds),No=new Map($t.map(Xt=>[Xt.name,Xt])),eo=new Map;for(const Xt of $t){const Rn=(Ke=(gt=Qt.sharedGridLayoutModel.firstBranchCommitByName.get(Xt.name))==null?void 0:gt.parentSha)!=null?Ke:null,en=Rn!=null?Rn:null;eo.set(Xt.name,en)}const Co=(Lt=Qt.sharedGridLayoutModel.defaultCollapsedClumps)!=null?Lt:new Set,po=(wt=g[yt.path])!=null?wt:new Set,Do=(ct=b[yt.path])!=null?ct:new Set,is=Xt=>po.has(Xt)||!Co.has(Xt)&&!Do.has(Xt);pe.set(yt.path,{rootBranchNames:fs,branchByName:No,branchCommitPreviewsFromLayout:At,childNamesByParent:ds,branchAnchorShaByName:eo,unpushedCommitShasByBranch:yt.unpushedCommitShasByBranch,checkedOutBranchName:(rt=(cn=yt.checkedOutRef)==null?void 0:cn.branchName)!=null?rt:null,checkedOutHeadSha:(pn=(It=yt.checkedOutRef)==null?void 0:It.headSha)!=null?pn:null,clusterKeyByCommitId:(Et=Qt.sharedGridLayoutModel.clusterKeyByCommitId)!=null?Et:new Map,getMergeTargetLabels:tt,isGridClusterOpen:is})}return pe},[n,le,b,g,e]),nt=(pe,Ze={})=>{var ct,cn,rt,It,pn;const Ye=(ct=Ze.ghostMode)!=null?ct:!1,Je=(cn=Ze.hideLive)!=null?cn:!1,De=ym(pe.path,n),et=le.has(pe.path),_t=(rt=pe.treeLoaded)!=null?rt:pe.branches.length>0,gt=Ee.get(pe.path),Ke=(It=me[pe.path])!=null?It:gt?T3(gt.rootBranchNames,gt.childNamesByParent,y,pe.defaultBranch):new Set,Lt=We===pe.path,wt=ym(pe.path,n);return l.jsxs(ri.div,{layout:"position",transition:{duration:.12,ease:"easeOut"},"data-project-path":pe.path,"data-active-project":wt?"true":"false",className:mn("project-row relative z-10 flex flex-col gap-1 transition-colors",et&&gt?"mb-2.5":""),children:[kt!==null&&We!==pe.path&&((pn=ft[kt])==null?void 0:pn.path)===pe.path?l.jsx("div",{className:"h-px","aria-hidden":"true",children:l.jsx("div",{className:"mx-1 h-px bg-foreground/60"})}):null,l.jsxs("div",{className:mn("relative z-0 px-1",Je?"pointer-events-none opacity-0":""),children:[l.jsxs("div",{className:mn(Ye?"group flex w-full items-center gap-0 rounded-lg px-0 h-6":"group sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-muted px-0 h-6 transition-all duration-100 ease-out hover:bg-border/50 cursor-grab active:cursor-grabbing",Lt&&!Ye?"opacity-0":""),onPointerDownCapture:Et=>{if(Ye)return;const yt=Et.target;yt!=null&&yt.closest('.window-no-drag, button, input, textarea, select, [contenteditable="true"]')||Rt(Et,pe.path)},onClick:Et=>{if(Ye||wt||We===pe.path||Q.current)return;const yt=Et.target;yt!=null&&yt.closest('button, input, textarea, select, [contenteditable="true"]')||i(pe.path)},children:[l.jsx("button",{type:"button",onPointerDown:Et=>Et.stopPropagation(),onClick:Et=>{Et.preventDefault(),Et.stopPropagation(),de(yt=>{const un=new Set(yt);return un.has(pe.path)?un.delete(pe.path):un.add(pe.path),Ce(un),un})},"aria-expanded":et,"aria-label":`${et?"Collapse":"Expand"} ${pe.name}`,className:mn("project-icon flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-border/50",Ye?"pointer-events-none":""),style:{color:wt?"var(--foreground)":"var(--muted-foreground)"},children:l.jsx(A3,{open:et})}),l.jsx("span",{className:mn("project-name min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors","font-normal"),style:{color:wt?"var(--foreground)":"var(--muted-foreground)"},children:pe.name}),l.jsxs("div",{className:"relative z-[130] shrink-0",children:[l.jsx("button",{type:"button",onPointerDown:Et=>Et.stopPropagation(),"aria-label":`Project actions for ${pe.name}`,"aria-expanded":te===pe.path,ref:Et=>{Kt.current.set(pe.path,Et)},onClick:Et=>{Et.stopPropagation();const yt=Et.currentTarget.getBoundingClientRect();qt({top:yt.bottom+8,right:Math.max(8,window.innerWidth-yt.right)}),Y(un=>un===pe.path?null:pe.path)},className:mn("pr-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md opacity-0 hover:bg-border/50 group-hover:opacity-100 text-current",Ye?"pointer-events-none":""),children:l.jsx(_w,{className:"h-4 w-4 shrink-0"})}),te===pe.path&&!Ye&&lt&&typeof document<"u"?zl.createPortal(l.jsxs("div",{role:"menu",className:"fixed z-[10000] inline-flex w-max flex-col overflow-hidden rounded-md border border-border bg-background p-1",style:{top:`${lt.top}px`,right:`${lt.right}px`},onPointerDownCapture:Et=>Et.stopPropagation(),onClick:Et=>Et.stopPropagation(),children:[l.jsx("button",{type:"button",role:"menuitem",onPointerDown:Et=>Et.stopPropagation(),onClick:()=>{Y(null),u(pe.path)},className:"flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",children:"Open in Finder"}),l.jsx("button",{type:"button",role:"menuitem",onPointerDown:Et=>Et.stopPropagation(),onClick:()=>{Y(null),c(pe.path)},className:"project-menu-remove flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium",children:"Remove"})]}),document.body):null]})]}),et?_t&&gt?l.jsx("ul",{className:mn("relative z-0 space-y-1 pt-0",Ye?"opacity-70":""),children:gt.rootBranchNames.map((Et,yt)=>l.jsx(dp,{branchName:Et,depth:0,isLast:yt===gt.rootBranchNames.length-1,branchByName:gt.branchByName,branchCommitPreviews:gt.branchCommitPreviewsFromLayout,childNamesByParent:gt.childNamesByParent,branchAnchorShaByName:gt.branchAnchorShaByName,expandedBranchNames:Ke,onToggleBranch:un=>be(pe.path,un),checkedOutBranchName:gt.checkedOutBranchName,checkedOutHeadSha:gt.checkedOutHeadSha,ancestors:new Set,showCommits:O,getMergeTargetLabels:gt.getMergeTargetLabels,sourceBranchName:Et,clusterKeyByCommitId:gt.clusterKeyByCommitId,unpushedCommitShasByBranch:gt.unpushedCommitShasByBranch,isGridClusterOpen:gt.isGridClusterOpen,onToggleGridCluster:J,onSelectCommit:async un=>{De||await i(pe.path),D==null||D(un)},onSelectBranch:async un=>{De||await i(pe.path),I==null||I(un)},isActiveProject:wt},`${pe.path}:${Et}`))}):l.jsx("p",{className:mn("px-2 py-2 text-xs text-muted-foreground",Ye?"opacity-70":""),children:"Loading branch tree..."}):null]})]},pe.path)};return l.jsxs("aside",{ref:U,"aria-label":"Dense branch sidebar",className:mn("pointer-events-auto relative z-[120] h-full select-none overflow-hidden bg-muted",N),style:G,children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"absolute inset-x-0 top-0 z-80 h-12"}),l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[p&&l.jsx("div",{className:"px-2.5 pb-2",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:p})}),l.jsx("div",{className:mn("px-2 pb-2",X?"opacity-0 pointer-events-none":""),children:l.jsx("div",{className:"px-1",children:l.jsxs("button",{type:"button",onClick:a,disabled:h,"aria-label":"Add Repo",className:"window-no-drag group flex w-full items-center gap-0 rounded-lg bg-muted px-0 h-6 text-foreground transition-colors hover:bg-border/50 disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors group-hover:bg-border/50 text-foreground",children:l.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-4 w-4 shrink-0",children:l.jsx("path",{d:"M12 5V19M5 12H19",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}),l.jsx("span",{className:"min-w-0 flex-1 truncate pl-0 text-left text-sm font-normal text-foreground",children:"New Project"})]})})}),l.jsx("div",{ref:K,className:mn("sidebar-scrollbar min-h-0 flex-1 space-y-2 overflow-y-auto px-2",X?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:ft.map(pe=>nt(pe,{hideLive:We===pe.path}))})]}),We&&st?l.jsx("div",{"aria-hidden":"true",className:"pointer-events-none fixed left-0 top-0 z-[90]",style:{transform:`translate3d(${st.x}px, ${st.y}px, 0)`,width:`${st.width}px`},children:nt((Be=e.find(pe=>pe.path===We))!=null?Be:He.find(pe=>pe.path===We),{ghostMode:!0})}):null]})}function xm(e){return{branchByName:Array.from(e.branchByName.entries()),laneByName:Array.from(e.laneByName.entries()),mainCommits:e.mainCommits,branchCommitsByLane:Array.from(e.branchCommitsByLane.entries()),branchPreviewSets:Array.from(e.branchPreviewSets.entries()),allCommits:e.allCommits,clustersByBranch:Array.from(e.clustersByBranch.entries()),clusterKeyByCommitId:Array.from(e.clusterKeyByCommitId.entries()),clusterKeyBySha:Array.from(e.clusterKeyBySha.entries()),leadByClusterKey:Array.from(e.leadByClusterKey.entries()),clusterCounts:Array.from(e.clusterCounts.entries()),debugRows:e.debugRows,branchDebugRows:e.branchDebugRows,nodes:e.nodes,normalizedSearchQuery:e.normalizedSearchQuery,matchingNodes:e.matchingNodes,matchingNodeIds:Array.from(e.matchingNodeIds),focusedNode:e.focusedNode,checkedOutClusterKey:e.checkedOutClusterKey,defaultCollapsedClumps:Array.from(e.defaultCollapsedClumps),visibleCommitsList:e.visibleCommitsList,renderNodes:e.renderNodes,visibleNodesBySha:Array.from(e.visibleNodesBySha.entries()),visibleNodeByClusterKey:Array.from(e.visibleNodeByClusterKey.entries()),contentWidth:e.contentWidth,contentHeight:e.contentHeight,connectors:e.connectors,mergeConnectors:e.mergeConnectors,connectorDecisions:e.connectorDecisions,nodeWarnings:Array.from(e.nodeWarnings.entries()),connectorParentShas:Array.from(e.connectorParentShas),branchStartShas:Array.from(e.branchStartShas),branchOffNodeShas:Array.from(e.branchOffNodeShas),crossBranchOutgoingShas:Array.from(e.crossBranchOutgoingShas),commitIdsWithRenderedAncestry:Array.from(e.commitIdsWithRenderedAncestry),branchBaseCommitByName:Array.from(e.branchBaseCommitByName.entries()),firstBranchCommitByName:Array.from(e.firstBranchCommitByName.entries()),mergeDestinations:e.mergeDestinations,mergeTargetBranchesBySourceBranchAndCommitSha:Array.from(e.mergeTargetBranchesBySourceBranchAndCommitSha.entries()).map(([n,i])=>[n,Array.from(i.entries()).map(([a,c])=>[a,Array.from(c)])])}}function bm(e){var i,a,c,u,d,h,p,y,g,b,w,k,M,A,T,D,I,O,N,G,X,U,K,le,de,me,Ae,Xe,oe,se,z,te,Y,fe,Se,P,ae,ee,xe;const n=new Map(((i=e.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?i:[]).map(([Te,he])=>[Te,new Map(he.map(([ze,Qe])=>[ze,new Set(Qe)]))]));return{branchByName:new Map((a=e.branchByName)!=null?a:[]),laneByName:new Map((c=e.laneByName)!=null?c:[]),mainCommits:(u=e.mainCommits)!=null?u:[],branchCommitsByLane:new Map((d=e.branchCommitsByLane)!=null?d:[]),branchPreviewSets:new Map((h=e.branchPreviewSets)!=null?h:[]),allCommits:(p=e.allCommits)!=null?p:[],clustersByBranch:new Map((y=e.clustersByBranch)!=null?y:[]),clusterKeyByCommitId:new Map((g=e.clusterKeyByCommitId)!=null?g:[]),clusterKeyBySha:new Map((b=e.clusterKeyBySha)!=null?b:[]),leadByClusterKey:new Map((w=e.leadByClusterKey)!=null?w:[]),clusterCounts:new Map((k=e.clusterCounts)!=null?k:[]),debugRows:(M=e.debugRows)!=null?M:[],branchDebugRows:(A=e.branchDebugRows)!=null?A:[],nodes:(T=e.nodes)!=null?T:[],normalizedSearchQuery:(D=e.normalizedSearchQuery)!=null?D:"",matchingNodes:(I=e.matchingNodes)!=null?I:[],matchingNodeIds:new Set((O=e.matchingNodeIds)!=null?O:[]),focusedNode:(N=e.focusedNode)!=null?N:null,checkedOutClusterKey:(G=e.checkedOutClusterKey)!=null?G:null,defaultCollapsedClumps:new Set((X=e.defaultCollapsedClumps)!=null?X:[]),visibleCommitsList:(U=e.visibleCommitsList)!=null?U:[],renderNodes:(K=e.renderNodes)!=null?K:[],visibleNodesBySha:new Map((le=e.visibleNodesBySha)!=null?le:[]),visibleNodeByClusterKey:new Map((de=e.visibleNodeByClusterKey)!=null?de:[]),pointFormatter:(Te,he)=>`${Te},${he}`,contentWidth:(me=e.contentWidth)!=null?me:0,contentHeight:(Ae=e.contentHeight)!=null?Ae:0,connectors:(Xe=e.connectors)!=null?Xe:[],mergeConnectors:(oe=e.mergeConnectors)!=null?oe:[],connectorDecisions:(se=e.connectorDecisions)!=null?se:[],nodeWarnings:new Map((z=e.nodeWarnings)!=null?z:[]),connectorParentShas:new Set((te=e.connectorParentShas)!=null?te:[]),branchStartShas:new Set((Y=e.branchStartShas)!=null?Y:[]),branchOffNodeShas:new Set((fe=e.branchOffNodeShas)!=null?fe:[]),crossBranchOutgoingShas:new Set((Se=e.crossBranchOutgoingShas)!=null?Se:[]),commitIdsWithRenderedAncestry:new Set((P=e.commitIdsWithRenderedAncestry)!=null?P:[]),branchBaseCommitByName:new Map((ae=e.branchBaseCommitByName)!=null?ae:[]),firstBranchCommitByName:new Map((ee=e.firstBranchCommitByName)!=null?ee:[]),mergeDestinations:(xe=e.mergeDestinations)!=null?xe:[],mergeTargetBranchesBySourceBranchAndCommitSha:n}}const D3="git-visualizer",Mc="git-visualizer:projects",vm="git-visualizer:active-project",ax="git-visualizer:map-orientation",fd=12,rx=1400,R3=180,lx="git-visualizer:sidebar-width",cx="git-visualizer:sidebar-collapsed",ux="git-visualizer:grid-clumps",dx=360,fx=180,hx=360;function wi(e){return e==="/"?e:e.replace(/\/+$/,"")}function B3(...e){return e.filter(Boolean).join(" ")}function Od(e){var a;if(!e)return"";const i=e.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function L3(e){return Od(e)===D3}function mx(e){var n,i;return[e.path,e.name,e.defaultBranch,e.updatedAtMs,e.branches.map(a=>[a.name,a.headSha,a.commitsAhead,a.commitsBehind,a.unpushedCommits,a.remoteSyncStatus,a.status,a.lastCommitDate].join(":")).join("|"),e.mergeNodes.map(a=>[a.fullSha,a.targetBranch,a.targetCommitSha].join(":")).join("|"),e.directCommits.map(a=>a.fullSha).join("|"),e.unpushedDirectCommits.map(a=>a.fullSha).join("|"),e.checkedOutRef?[(n=e.checkedOutRef.branchName)!=null?n:"",e.checkedOutRef.headSha,(i=e.checkedOutRef.parentSha)!=null?i:"",e.checkedOutRef.hasUncommittedChanges?"1":"0"].join(":"):"__none__",Object.entries(e.unpushedCommitShasByBranch).map(([a,c])=>`${a}:${c.join(",")}`).join("|"),Object.entries(e.branchCommitPreviews).map(([a,c])=>`${a}:${c.map(u=>u.fullSha).join(",")}`).join("|"),Object.entries(e.branchParentByName).map(([a,c])=>`${a}:${c!=null?c:""}`).join("|"),Object.entries(e.laneByBranch).map(([a,c])=>`${a}:${c}`).join("|"),Object.entries(e.branchUniqueAheadCounts).map(([a,c])=>`${a}:${c}`).join("|")].join("@@")}function O3(){var Oo,zo,ca;const[e,n]=_.useState(null),[i,a]=_.useState(""),[c,u]=_.useState([]),[d,h]=_.useState({}),[p,y]=_.useState(!1),[g,b]=_.useState([]),[w,k]=_.useState([]),[M,A]=_.useState([]),[T,D]=_.useState([]),[I,O]=_.useState({}),[N,G]=_.useState("main"),[X,U]=_.useState(null),[K,le]=_.useState([]),[de,me]=_.useState(!1),[Ae,Xe]=_.useState(""),[oe,se]=_.useState(0),[z,te]=_.useState(1),[Y,fe]=_.useState({}),[Se,P]=_.useState({}),[ae,ee]=_.useState(null),[xe,Te]=_.useState(null),[he,ze]=_.useState(null),[Qe,We]=_.useState(!1),[ut,kt]=_.useState(!1),[bt,st]=_.useState(null),[Dt,lt]=_.useState(null),[qt,Kt]=_.useState(!1),[Q,Ne]=_.useState(null),[at,Ce]=_.useState(null),[dt,He]=_.useState(!1),[ft,mt]=_.useState(!1),[jt,Rt]=_.useState(!1),[ot,V]=_.useState(!1),[J,be]=_.useState({}),[Ee,nt]=_.useState({}),[Ge,Be]=_.useState({}),[pe,Ze]=_.useState({}),[Ye,Je]=_.useState({}),[De,et]=_.useState([]),[_t,gt]=_.useState([]),[Ke,Lt]=_.useState(!1),[wt,ct]=_.useState(!1),[cn,rt]=_.useState(!1),[It,pn]=_.useState(!1),Et=wt||cn||Ke||jt||ot||ft||de||It,[yt,un]=_.useState(!1),[tn,Qt]=_.useState("horizontal"),[$t,Jt]=_.useState(null),[At,bn]=_.useState(null),[tt,ds]=_.useState(null),[fs,No]=_.useState(!1),[eo,Co]=_.useState(!1),[po,Do]=_.useState(dx),[is,Xt]=_.useState(!1),Rn=_.useRef(null),en=_.useRef(0),as=_.useRef(0),xs=_.useRef({}),bs=_.useRef(null),sn=_.useRef({}),As=_.useRef({}),Rs=_.useRef(!1),hs=_.useRef(null),_o=_.useRef(dx),to=_.useRef(null),Yn=_.useRef(null),Ws=L3(e)||!0,on=_.useRef(!1),Fs=_.useRef(!1);_.useRef(!1);const Ci=_.useRef(new Set),[Ms,ko]=_.useState(!1),Bs=_.useRef([]),Wn=_.useRef([]),ms=_.useRef(null),Xs=_.useRef([]),Bn=_.useRef([]),Ls=_.useRef([]),Fn=_.useRef({}),Xn=_.useRef([]),ci=_.useRef({}),ps=_.useRef(new Map),no=_.useRef(new Set),Zt=_.useRef(null),[ki,Gn]=_.useState(null),[zi,go]=_.useState(null),Ns=e!=null?e:"__no-repo__",rs=(x,v)=>{try{const C={opened:Object.fromEntries(Object.entries(x).map(([j,R])=>[j,Array.from(R)])),closed:Object.fromEntries(Object.entries(v).map(([j,R])=>[j,Array.from(R)]))};window.localStorage.setItem(ux,JSON.stringify(C))}catch{}};_.useEffect(()=>{var x,v;try{const C=window.localStorage.getItem(ux);if(!C)return;const j=JSON.parse(C);if(!j||typeof j!="object")return;const R={},W={},B=j;for(const[H,Z]of Object.entries((x=B.opened)!=null?x:{}))Array.isArray(Z)&&(R[H]=new Set(Z.filter(ie=>typeof ie=="string")));for(const[H,Z]of Object.entries((v=B.closed)!=null?v:{}))Array.isArray(Z)&&(W[H]=new Set(Z.filter(ie=>typeof ie=="string")));fe(R),P(W)}catch{}},[]),_.useEffect(()=>{rs(Y,Se)},[Se,Y]);const qo=_.useMemo(()=>{var x;return(x=Y[Ns])!=null?x:new Set},[Ns,Y]),vs=_.useMemo(()=>{var x;return(x=Se[Ns])!=null?x:new Set},[Ns,Se]),En=_.useCallback(x=>{fe(v=>{var W;const C=(W=v[Ns])!=null?W:new Set,j=typeof x=="function"?x(C):x,R={...v,[Ns]:new Set(j)};return rs(R,Se),R})},[Ns,Se]),yo=_.useCallback(x=>{P(v=>{var W;const C=(W=v[Ns])!=null?W:new Set,j=typeof x=="function"?x(C):x,R={...v,[Ns]:new Set(j)};return rs(Y,R),R})},[Ns,Y]),ui=_.useMemo(()=>c.map(x=>{var j,R,W,B,H,Z,ie,ue,Re,we,ke,Le,vt,zt,ht;const v=(()=>{if(!e)return!1;const xt=wi(x.path).toLowerCase(),St=wi(e).toLowerCase();return xt===St})(),C=(j=d[x.path])!=null?j:{};return{...x,...C,branches:(R=C.branches)!=null?R:[],mergeNodes:(W=C.mergeNodes)!=null?W:[],directCommits:(B=C.directCommits)!=null?B:[],unpushedDirectCommits:(H=C.unpushedDirectCommits)!=null?H:[],unpushedCommitShasByBranch:(Z=C.unpushedCommitShasByBranch)!=null?Z:{},checkedOutRef:v?X:(ie=C.checkedOutRef)!=null?ie:null,worktrees:(ue=C.worktrees)!=null?ue:[],stashes:(Re=C.stashes)!=null?Re:[],branchCommitPreviews:(we=C.branchCommitPreviews)!=null?we:{},laneByBranch:(ke=C.laneByBranch)!=null?ke:{},branchUniqueAheadCounts:(Le=C.branchUniqueAheadCounts)!=null?Le:{},defaultBranch:(zt=(vt=C.defaultBranch)!=null?vt:x.branchName)!=null?zt:"main",treeLoaded:(ht=C.loaded)!=null?ht:!1}}),[c,d,e,X]),Os=_.useMemo(()=>({githubAuthStatus:Dt,githubAuthLoading:qt,onGitHubAuthSetup:di,gridSearchQuery:Ae,setGridSearchQuery:Xe,gridSearchResultCount:ae,gridSearchResultIndex:xe,setGridSearchJumpDirection:te,setGridSearchJumpToken:se,mapGridOrientation:tn,setMapGridOrientation:Qt,setIsGridDebugOpen:Co,githubAuthMessage:Q,commitSwitchFeedback:at,isCommitSwitchFeedbackVisible:dt}),[at,qt,Q,Dt,Ae,ae,xe,di,dt,tn,Xe,te,se,Co,Qt]);function jo(x,v){const C=mx(v);return xs.current[x]===C?!1:(xs.current={...xs.current,[x]:C},h(R=>R[x]===v?R:{...R,[x]:v}),!0)}function xn(x){var v;return[x.repoPath,x.defaultBranch,x.headSha,(v=x.upstreamSha)!=null?v:"",x.hasUncommittedChanges?"1":"0",x.branchCount,x.worktreeCount,x.stashCount].join("|")}function Gs(x){var v;return[x.repoPath,x.headSha,(v=x.upstreamSha)!=null?v:"",x.hasUncommittedChanges?"1":"0"].join("|")}function zs(x,v){var C,j,R,W,B,H;return{repoPath:x,headSha:(j=(C=v.checkedOutRef)==null?void 0:C.headSha)!=null?j:"",upstreamSha:(W=(R=v.checkedOutRef)==null?void 0:R.parentSha)!=null?W:null,hasUncommittedChanges:(H=(B=v.checkedOutRef)==null?void 0:B.hasUncommittedChanges)!=null?H:!1}}function Ko(x,v,C){var j,R,W,B,H,Z;return{repoPath:x,defaultBranch:v,headSha:(R=(j=C.checkedOutRef)==null?void 0:j.headSha)!=null?R:"",upstreamSha:(B=(W=C.checkedOutRef)==null?void 0:W.parentSha)!=null?B:null,hasUncommittedChanges:(Z=(H=C.checkedOutRef)==null?void 0:H.hasUncommittedChanges)!=null?Z:!1,branchCount:C.branches.length,worktreeCount:C.worktrees.length,stashCount:C.stashes.length}}_.useEffect(()=>{try{const x=localStorage.getItem(Mc);if(!x)return;const v=JSON.parse(x);if(!Array.isArray(v))return;const C=v.filter(j=>typeof j=="object"&&j!==null&&typeof j.path=="string"&&typeof j.name=="string"&&typeof j.lastOpenedAt=="number");u(C.slice(0,fd))}catch{u([])}},[]),_.useEffect(()=>{try{const x=window.localStorage.getItem(ax);(x==="vertical"||x==="horizontal")&&Qt(x)}catch{}},[]),_.useEffect(()=>{var C;if(Fs.current||e||c.length===0||!Ms)return;const x=(()=>{try{return window.localStorage.getItem(vm)}catch{return null}})(),v=x?c.find(j=>wi(j.path).toLowerCase()===wi(x).toLowerCase()):null;Fs.current=!0,xo((C=v==null?void 0:v.path)!=null?C:c[0].path)},[Ms,c,e]),_.useEffect(()=>{if(e)try{window.localStorage.setItem(vm,e)}catch{}},[e]),_.useEffect(()=>{try{window.localStorage.setItem(ax,tn)}catch{}},[tn]);const Ds=_.useMemo(()=>w.reduce((x,v)=>(x[v.targetCommitSha]=v.targetBranch,x),{}),[w]);_.useEffect(()=>{e&&(Rs.current||h(x=>{var v,C,j,R;return{...x,[e]:{path:e,name:i||Od(e),branches:g,mergeNodes:w,directCommits:M,unpushedDirectCommits:T,mergeTargetBranchByCommitSha:w.reduce((W,B)=>(W[B.targetCommitSha]=B.targetBranch,W),{}),unpushedCommitShasByBranch:I,checkedOutRef:X,worktrees:K,stashes:De,branchCommitPreviews:Ee,branchParentByName:Ge,laneByBranch:pe,branchUniqueAheadCounts:Ye,defaultBranch:N,loaded:!0,cacheSchemaVersion:(C=(v=x[e])==null?void 0:v.cacheSchemaVersion)!=null?C:1,updatedAtMs:(R=(j=x[e])==null?void 0:j.updatedAtMs)!=null?R:Date.now()}}}))},[e,i,g,w,M,T,Ds,I,X,K,De,Ee,Ge,pe,Ye,N]);async function Qo(x,v=!1){var j;const C=wi(x);if(C&&!Ci.current.has(C)&&!(!v&&((j=d[C])!=null&&j.loaded))){Ci.current.add(C),C===e&&y(!0);try{const R=await ye("get_repo_visual_snapshot",{repoPath:C,forceRefresh:v});jo(C,R)}finally{Ci.current.delete(C),C===e&&Ci.current.size===0&&y(!1)}}}_.useEffect(()=>{if(c.length===0){ko(!0);return}let x=!1;const v=!1;return(async()=>{try{await Promise.all(c.map(async C=>{await Qo(C.path,v),await ye("watch_repo",{repoPath:C.path}).catch(console.error)}))}catch(C){console.error("Failed to preload project snapshots:",C)}x||(ko(!0),y(!1))})(),()=>{x=!0}},[c]),_.useEffect(()=>{let x=!1,v=null;return $c("git-activity",C=>{if(x)return;const j=wi(C.payload.repoPath);!j||j===e||Qo(j,!1)}).then(C=>{x?C():v=C}).catch(console.error),()=>{x=!0,v&&v()}},[e]),_.useEffect(()=>{if(ut||Rs.current||c.length===0)return;let x=!1;return(async()=>{for(const v of c){const C=wi(v.path),j=d[C];if(!(j!=null&&j.loaded))continue;const R=["layout-v2",C,tn].join("|");if(ps.current.has(R))continue;const W=await ye("get_repo_layout_snapshot",{repoPath:C,layoutKey:R}).catch(()=>null);if(x)return;if(W)try{const ie=JSON.parse(W),ue=bm(ie);ps.current.set(R,ue),no.current.add(R);continue}catch{}const H=up({branches:j.branches,mergeNodes:j.mergeNodes,directCommits:j.directCommits,unpushedDirectCommits:j.unpushedDirectCommits,defaultBranch:j.defaultBranch,branchCommitPreviews:j.branchCommitPreviews,branchParentByName:j.branchParentByName,branchUniqueAheadCounts:j.branchUniqueAheadCounts,checkedOutRef:j.checkedOutRef,stashes:j.stashes,manuallyOpenedClumps:new Set,manuallyClosedClumps:new Set,gridSearchQuery:"",gridFocusSha:null,orientation:tn}).sharedGridLayoutModel;ps.current.set(R,H),no.current.add(R);const Z=JSON.stringify(xm(H));if(ye("store_repo_layout_snapshot",{repoPath:C,layoutKey:R,payloadJson:Z}).catch(()=>{no.current.delete(R)}),await qn(),x)return}})(),()=>{x=!0}},[c,d,tn,ut]);function Ro(x){u(v=>{const C=wi(x.path);if(!C)return v;const j={...x,path:C},W=(v.some(B=>B.path===C)?v.map(B=>B.path===C?j:B):[...v,j]).slice(-fd);try{localStorage.setItem(Mc,JSON.stringify(W))}catch{}return W})}function $i(x){u(v=>{const C=new Map(v.map(R=>[R.path,R])),j=[];for(const R of x){const W=C.get(R);W&&(j.push(W),C.delete(R))}for(const R of v)C.has(R.path)&&j.push(R);try{localStorage.setItem(Mc,JSON.stringify(j.slice(0,fd)))}catch{}return j.slice(0,fd)})}async function so(x){const v=wi(x);if(v){st(null);try{const[C,j]=await Promise.all([ye("get_repo_info",{repoPath:v}),ye("get_default_branch",{repoPath:v}).catch(()=>"main")]);Ro({path:v,name:C.name,lastOpenedAt:Date.now(),branchName:j}),await Qo(v,!1)}catch(C){st(C instanceof Error?C.message:String(C))}}}function Mo(x,v){u(C=>{const j=C.map(R=>R.path===x?{...R,branchName:v}:R);try{localStorage.setItem(Mc,JSON.stringify(j))}catch{}return j})}function Zo(x){var C,j;const v=wi(x);if(v){u(R=>{const W=R.filter(B=>B.path!==v);try{localStorage.setItem(Mc,JSON.stringify(W))}catch{}return W});try{e&&wi(e).toLowerCase()===v.toLowerCase()&&window.localStorage.removeItem(vm)}catch{}if(h(R=>{if(!(v in R))return R;const W={...R};return delete W[v],W}),e===v){const R=(j=(C=c.find(W=>W.path!==v))==null?void 0:C.path)!=null?j:null;R?xo(R):(n(null),a(""),b([]),k([]),A([]),D([]),O({}),U(null),le([]),et([]),nt({}),Be({}),Ze({}),Je({}))}}}async function Un(x){const v=wi(x);if(v)try{await ye("reveal_in_finder",{path:v})}catch(C){st(C instanceof Error?C.message:String(C))}}const Es=()=>{(async()=>{var x,v;try{const C=await ow({directory:!0,multiple:!1,defaultPath:(v=(x=c[0])==null?void 0:x.path)!=null?v:void 0});typeof C=="string"&&C&&await so(C)}catch(C){st(C instanceof Error?C.message:String(C))}})()};async function Eo(x,v){const j=[];let R=0;for(;;){const W=await ye("get_merge_nodes",{repoPath:x,branch:v,page:R,perPage:100});if(j.push(...W.nodes),!W.hasMore||W.nodes.length===0)break;R+=1}return j}async function oo(x,v,C){const j=Array.from(new Set([C,...v.map(B=>B.name)].filter(B=>!!B)));if(j.length===0)return[];const R=await Promise.all(j.map(B=>Eo(x,B).catch(()=>[]))),W=new Map;for(const B of R)for(const H of B){const Z=`${H.targetCommitSha}:${H.targetBranch}`;W.has(Z)||W.set(Z,H)}return Array.from(W.values())}const io=x=>x.map(v=>`${v.name}|${v.headSha}|${v.commitsAhead}|${v.commitsBehind}|${v.unpushedCommits}|${v.remoteSyncStatus}`).join("||"),kn=x=>x.map(v=>v.fullSha).join("|"),$s=x=>{var v,C;return x?`${(v=x.branchName)!=null?v:""}|${x.headSha}|${(C=x.parentSha)!=null?C:""}|${x.hasUncommittedChanges?1:0}`:"__none__"},Nn=x=>x.map(v=>v.fullSha).join("|"),Ps=x=>x.map(v=>{var C,j;return`${v.path}|${(C=v.branchName)!=null?C:""}|${(j=v.headSha)!=null?j:""}|${v.isCurrent?1:0}`}).join("||"),Yo=x=>x.map(v=>`${v.index}|${v.baseSha}|${v.message}`).join("||"),Wo=x=>Object.entries(x).sort(([v],[C])=>v.localeCompare(C)).map(([v,C])=>`${v}:${C.join(",")}`).join("||");async function Pi(x,v,C){const j={graphChanged:!1,remoteTipChanged:!1,unpushedChanged:!1,stashChanged:!1,dirtyChanged:!1,worktreeChanged:!1},[R,W,B,H,Z]=await Promise.all([ye("get_branches",{repoPath:x}).catch(()=>Bs.current),ye("get_all_repo_commits",{repoPath:x}).catch(()=>Wn.current),ye("get_unpushed_direct_commits",{repoPath:x,branch:v}).catch(()=>Xs.current),ye("list_worktrees",{repoPath:x}).catch(()=>Bn.current),ye("list_stashes",{repoPath:x}).catch(()=>Ls.current)]),ie=Bs.current,ue=Wn.current,Re=ms.current,we=io(R)!==io(ie)||kn(W)!==kn(ue);j.graphChanged=we;const ke=Nn(B)!==Nn(Xs.current);j.unpushedChanged=ke;const Le=Ps(H)!==Ps(Bn.current);j.worktreeChanged=Le;const vt=Yo(Z)!==Yo(Ls.current);j.stashChanged=vt;const zt=!!(C!=null&&C.forceDirtyCheck)||!(Re!=null&&Re.hasUncommittedChanges)||!!(C!=null&&C.expectPossibleCleanTransition)||we||vt;let ht=Re;zt&&(ht=await ye("get_checked_out_ref",{repoPath:x}).catch(()=>Re)),j.dirtyChanged=$s(ht)!==$s(Re);const xt=await ye("get_remote_branch_head_sha",{repoPath:x,branch:v}).catch(()=>$t),[St,pt]=await Promise.all([xt?ye("get_commit_metadata",{repoPath:x,sha:xt}).catch(()=>null):Promise.resolve(null),xt&&(ht!=null&&ht.headSha)?ye("get_merge_base",{repoPath:x,leftSha:xt,rightSha:ht.headSha}).catch(()=>null):Promise.resolve(null)]),Pt=xt!==$t;j.remoteTipChanged=Pt;const Dn=we||ke||j.dirtyChanged,gn=Dn?await Promise.all([v,...R.map(Is=>Is.name)].map(async Is=>{const To=await ye("get_branch_unpushed_commit_shas",{repoPath:x,branch:Is}).catch(()=>[]);return[Is,To]})):Object.entries(Fn.current),Ss=Object.fromEntries(gn),Ln=we?await oo(x,R,v).catch(()=>Xn.current):Xn.current;return _.startTransition(()=>{if(we&&(b(R),A(W),k(Ln)),ke&&D(B),Dn){const Is=Wo(Ss),To=Wo(Fn.current);Is!==To&&O(Ss)}Le&&le(H),vt&&et(Z),j.dirtyChanged&&(U(ht),ht!=null&&ht.branchName&&Mo(x,ht.branchName)),Pt&&(Jt(xt!=null?xt:null),bn(St&&St.subject.trim().length>0?St:null),ds(pt),No(!0))}),j}async function Jo(x,v,C){var zt,ht,xt,St;const j=v!=null?v:N,R=(zt=C==null?void 0:C.includeMergeNodes)!=null?zt:!0,W=(ht=C==null?void 0:C.includeUnpushedShaMap)!=null?ht:!0,B=(xt=C==null?void 0:C.includeWorktrees)!=null?xt:!0,H=(St=C==null?void 0:C.includeStashes)!=null?St:!0,[Z,ie,ue,Re,we,ke]=await Promise.all([ye("get_branches",{repoPath:x}),ye("get_all_repo_commits",{repoPath:x}),ye("get_unpushed_direct_commits",{repoPath:x,branch:j}).catch(()=>[]),ye("get_checked_out_ref",{repoPath:x}).catch(()=>null),B?ye("list_worktrees",{repoPath:x}).catch(()=>[]):Promise.resolve(K),H?ye("list_stashes",{repoPath:x}).catch(()=>[]):Promise.resolve(De)]),Le=R?await oo(x,Z,j):w,vt=W?await Promise.all([j,...Z.map(pt=>pt.name)].map(async pt=>{const Pt=await ye("get_branch_unpushed_commit_shas",{repoPath:x,branch:pt}).catch(()=>[]);return[pt,Pt]})):Object.entries(I);_.startTransition(()=>{b(Z),k(Le),A(ie),D(ue),O(Object.fromEntries(vt)),U(Re),le(we),et(ke)})}async function ws(x,v){await Jo(x,v,{includeMergeNodes:!1,includeUnpushedShaMap:!0,includeWorktrees:!1,includeStashes:!1})}async function qs(x,v){const C=N,[j,R]=await Promise.all([ye("get_branches",{repoPath:x}),ye("get_checked_out_ref",{repoPath:x}).catch(()=>null)]),W=await Promise.all([C,...j.map(B=>B.name)].map(async B=>{const H=await ye("get_branch_unpushed_commit_shas",{repoPath:x,branch:B}).catch(()=>[]);return[B,H]}));_.startTransition(()=>{b(j),O(Object.fromEntries(W)),U(R)})}async function qn(){await new Promise(x=>{window.requestAnimationFrame(()=>x())})}async function Ii(x){Ce(null),kt(!0),Rs.current=!0;try{const[v,C]=await Promise.all([ye("get_repo_info",{repoPath:x}),ye("get_default_branch",{repoPath:x})]);a(v.name),G(C),n(x),await Jo(x,C),Ks(x),Ce({kind:"success",message:`Now targeting worktree at ${x}`})}catch(v){const C=v instanceof Error?v.message:String(v);Ce({kind:"error",message:C}),console.error("Failed to switch worktree:",C)}finally{kt(!1),Rs.current=!1}}async function ji(x,v){if(!(!e||de)){me(!0),Ce(null);try{await ye("remove_worktree",{repoPath:e,worktreePath:x,force:v}),await ws(e),Ce({kind:"success",message:`Removed worktree at ${x}`})}catch(C){const j=C instanceof Error?C.message:String(C);Ce({kind:"error",message:j}),console.error("Failed to remove worktree:",j)}finally{me(!1)}}}function ei(x,v){var j,R,W;const C=mx(v);return bs.current===C?!1:(Bs.current=v.branches,Wn.current=v.directCommits,ms.current=v.checkedOutRef,Xs.current=v.unpushedDirectCommits,Bn.current=v.worktrees,Ls.current=v.stashes,Fn.current=v.unpushedCommitShasByBranch,Xn.current=v.mergeNodes,ci.current=(j=v.branchParentByName)!=null?j:{},bs.current=C,a(v.name||Od(x)),G(v.defaultBranch||"main"),b(v.branches),k(v.mergeNodes),A(v.directCommits),D(v.unpushedDirectCommits),O(v.unpushedCommitShasByBranch),U(v.checkedOutRef),le(v.worktrees),et(v.stashes),nt(v.branchCommitPreviews),Be((R=v.branchParentByName)!=null?R:{}),Ze((W=v.laneByBranch)!=null?W:{}),Je(v.branchUniqueAheadCounts),n(x),!0)}async function Bt(x,v){const C=["layout-v2",x,tn].join("|"),j=ps.current.get(C);if(j)return{layoutKey:C,model:j};const R=await ye("get_repo_layout_snapshot",{repoPath:x,layoutKey:C}).catch(()=>null);if(R)try{const H=JSON.parse(R),Z=bm(H);return ps.current.set(C,Z),no.current.add(C),{layoutKey:C,model:Z}}catch{}const W=up({branches:v.branches,mergeNodes:v.mergeNodes,directCommits:v.directCommits,unpushedDirectCommits:v.unpushedDirectCommits,defaultBranch:v.defaultBranch,branchCommitPreviews:v.branchCommitPreviews,branchParentByName:v.branchParentByName,branchUniqueAheadCounts:v.branchUniqueAheadCounts,checkedOutRef:v.checkedOutRef,stashes:v.stashes,manuallyOpenedClumps:new Set,manuallyClosedClumps:new Set,gridSearchQuery:"",gridFocusSha:null,orientation:tn}).sharedGridLayoutModel;ps.current.set(C,W),no.current.add(C);const B=JSON.stringify(xm(W));return ye("store_repo_layout_snapshot",{repoPath:x,layoutKey:C,payloadJson:B}).catch(()=>{no.current.delete(C)}),{layoutKey:C,model:W}}async function xo(x){const v=++en.current,C=wi(x);if(!C)return;e&&nn&&ps.current.set(nn,_s);const j=["layout-v2",C,tn].join("|"),R=ps.current.get(j);if(R?(Gn(R),go(j)):(Gn(null),go(null)),Rs.current=!0,kt(!0),We(!0),st(null),await qn(),v!==en.current)return;const W=d[C];if(W!=null&&W.loaded){As.current={...As.current,[C]:Gs(zs(C,W))};const B=await Bt(C,W);if(v!==en.current||(Gn(B.model),go(B.layoutKey),ei(C,W),Ro({path:C,name:W.name||Od(C),lastOpenedAt:Date.now(),branchName:W.defaultBranch}),await qn(),await qn(),v!==en.current))return;kt(!1),We(!1),Ks(C),Rs.current=!1;return}if(await new Promise(B=>setTimeout(B,15)),v===en.current)try{const[B,H]=await Promise.all([ye("get_repo_info",{repoPath:C}),ye("get_default_branch",{repoPath:C})]);if(v!==en.current)return;a(B.name),G(H);const Z=await ye("get_repo_visual_snapshot",{repoPath:C,forceRefresh:!1});if(v!==en.current)return;const ie=await Bt(C,Z);if(v!==en.current||(Gn(ie.model),go(ie.layoutKey),jo(C,Z),sn.current={...sn.current,[C]:xn(Ko(C,H,Z))},As.current={...As.current,[C]:Gs(zs(C,Z))},ei(C,Z),Ro({path:C,name:B.name,lastOpenedAt:Date.now(),branchName:H}),await qn(),await qn(),v!==en.current))return;kt(!1),We(!1),Ks(C)}catch(B){if(v!==en.current)return;console.error("Failed to load repo:",B),st(B instanceof Error?B.message:String(B)),n(null),We(!1),kt(!1)}finally{Rs.current=!1}}async function Ks(x){const v=++as.current;try{if(v!==as.current)return;Ne(null);const C=await ye("get_github_info",{repoPath:x}),j=await ye("get_github_auth_status");if(v!==as.current||(lt(j),!j.ghAvailable||!j.authenticated))return;const R=await ye("get_open_prs",{owner:C.owner,repo:C.repo});if(v!==as.current)return;gt(R)}catch(C){if(v!==as.current)return;console.log("GitHub data not available:",C),Ne(C instanceof Error?C.message:String(C))}}_.useEffect(()=>{let x=null,v=!1;const C=(()=>{try{return bp().label}catch{return null}})(),j=async W=>{var H;const B=(H=W==null?void 0:W.path)==null?void 0:H.trim();!B||v||e!==B&&await xo(B)};return(async()=>{C==="main"&&(x=await $c("gitviz://open-repo",async B=>{await j(B.payload)}));const W=await ye("take_pending_open_repo");await j(W)})(),()=>{v=!0,x&&x()}},[e]),_.useEffect(()=>{Bs.current=g},[g]),_.useEffect(()=>{Wn.current=M},[M]),_.useEffect(()=>{ms.current=X},[X]),_.useEffect(()=>{Xs.current=T},[T]),_.useEffect(()=>{Bn.current=K},[K]),_.useEffect(()=>{Ls.current=De},[De]),_.useEffect(()=>{Fn.current=I},[I]),_.useEffect(()=>{Xn.current=w},[w]),_.useEffect(()=>{ci.current=Ge},[Ge]),_.useEffect(()=>{on.current=yt},[yt]),_.useEffect(()=>{if(!e||!N)return;ye("watch_repo",{repoPath:e}).catch(console.error);let x=!1,v=!1,C=!1,j=!1,R=null,W=null,B=!1,H=$t;const Z=async(we=!1)=>{if(!x){if(v){C=!0;return}if(on.current){C=!0;return}v=!0;try{await Pi(e,N,{forceDirtyCheck:we,expectPossibleCleanTransition:B}),B=!1}catch(ke){console.warn("Project status tick failed:",ke)}finally{v=!1,C&&!x&&(C=!1,window.setTimeout(()=>{Z(!1)},0))}}},ie=async()=>{var we;if(!(x||j||v||on.current)){j=!0;try{const ke=!((we=ms.current)!=null&&we.hasUncommittedChanges)||B,[Le,vt]=await Promise.all([ke?ye("get_checked_out_ref",{repoPath:e}).catch(()=>ms.current):Promise.resolve(ms.current),ye("get_remote_branch_head_sha",{repoPath:e,branch:N}).catch(()=>H)]),zt=$s(Le)!==$s(ms.current),ht=vt!==H;ht&&(H=vt),(zt||ht||B)&&Z(zt||B)}finally{j=!1}}},ue=()=>{if(x)return;R!=null&&window.clearTimeout(R);const ke=document.visibilityState!=="visible"?6e4:15e3;R=window.setTimeout(()=>{if(on.current){ue();return}typeof window.requestIdleCallback=="function"?window.requestIdleCallback(()=>{if(on.current){ue();return}ie(),ue()},{timeout:2e3}):(ie(),ue())},ke)};$c("git-activity",we=>{wi(we.payload.repoPath)===e&&(we.payload.kind!=="local"&&(B=!0),Z(we.payload.kind!=="local"))}).then(we=>{x?we():W=we}).catch(console.error);const Re=window.setTimeout(()=>{on.current||ie()},250);return ue(),()=>{x=!0,window.clearTimeout(Re),R!=null&&window.clearTimeout(R),W&&W()}},[e,N,Ws]);async function di(){if(e){Kt(!0),Ne(null);try{await ye("authenticate_github");const x=await ye("get_github_auth_status");lt(x),x.authenticated?await Ks(e):x.message&&Ne(x.message)}catch(x){Ne(x instanceof Error?x.message:String(x))}finally{Kt(!1)}}}_.useEffect(()=>{be({}),Yn.current=null,Kt(!1),lt(null),Ne(null),gt([]),Ce(null)},[e]),_.useEffect(()=>{var Z,ie,ue,Re;if(!e||!N){be({}),nt({}),Be({}),Ze({}),Je({}),Yn.current=null;return}const x=g.map(we=>{var ke;return`${we.name}:${we.headSha}:${(ke=we.parentBranch)!=null?ke:""}:${we.commitsAhead}`}).join("|"),v=w.map(we=>{var ke,Le;return`${we.fullSha}:${(Le=(ke=we.parentShas)==null?void 0:ke[1])!=null?Le:""}`}).join("|"),C=`${e}|${N}|${x}|${v}`;if(Yn.current===C)return;Yn.current=C;const j={},R={};for(const we of g){if(we.name===N)continue;const ke=M.filter(Le=>Le.branch===we.name).map(Le=>{var vt;return{fullSha:Le.fullSha,sha:Le.sha,parentSha:(vt=Le.parentSha)!=null?vt:null,message:Le.message,author:Le.author,date:Le.date,kind:"commit"}});j[we.name]=ke,R[we.name]=ke.length}const W=new Map;for(const we of M)W.set(we.fullSha,we.branch);const B=we=>{if(!we)return null;const ke=W.get(we);if(ke)return ke;for(const[Le,vt]of W.entries())if(Le.startsWith(we)||we.startsWith(Le))return vt;return null},H={[N]:null};for(const we of g){if(we.name===N){H[we.name]=null;continue}const ke=M.filter(ht=>ht.branch===we.name),Le=new Set(ke.map(ht=>ht.fullSha)),vt=(ie=(Z=ke.filter(ht=>{var St;const xt=(St=ht.parentSha)!=null?St:null;return!xt||!Le.has(xt)}).sort((ht,xt)=>{const St=new Date(ht.date).getTime()-new Date(xt.date).getTime();return St!==0?St:ht.fullSha.localeCompare(xt.fullSha)})[0])==null?void 0:Z.parentSha)!=null?ie:null,zt=B(vt);H[we.name]=(Re=(ue=zt!=null?zt:ci.current[we.name])!=null?ue:we.parentBranch)!=null?Re:null}be({}),nt(j),Be(H),Ze(we=>{const ke={};for(const Le of g){const vt=we[Le.name];vt!=null&&Number.isFinite(vt)&&(ke[Le.name]=vt)}return ke}),Je(R)},[e,N,g,w,M]),_.useEffect(()=>{if(!at){He(!1);return}He(!0);const x=window.setTimeout(()=>{He(!1)},rx),v=window.setTimeout(()=>{Ce(null)},rx+R3);return()=>{window.clearTimeout(x),window.clearTimeout(v)}},[at]),_.useEffect(()=>{if(!e||g.length===0)return;const x=j=>new Promise(R=>setTimeout(R,j));async function v(){const R=`${await ye("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${R}`),await x(800),await ye("screenshot",{path:`${R}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${R}`)}const C=j=>{if((j.metaKey||j.ctrlKey)&&!j.shiftKey&&!j.altKey&&j.key.toLowerCase()==="b"){j.preventDefault(),Xt(R=>!R);return}(j.metaKey||j.ctrlKey)&&j.shiftKey&&j.key==="S"&&(j.preventDefault(),v())};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[e,i,g]);async function ti(x){if(!e)return;Ce(null);const v=/^STASH:(\d+)$/.exec(x.commitSha);if(v){try{const C=parseInt(v[1],10),j=await ye("apply_stash_restore",{repoPath:e,stashIndex:C});U(j),await ws(e);const R=`Stash ${C+1}`,W=j.branchName?` on branch ${j.branchName}`:" at the stash base (detached HEAD)";Ce({kind:"success",message:`Restored ${R}${W}; stash applied and dropped (uncommitted changes).`})}catch(C){const j=C instanceof Error?C.message:String(C);Ce({kind:"error",message:j}),console.error("Failed to apply stash:",j)}return}if(x.branchName){const C=(R,W)=>{const B=R.replace(/\\/g,"/").replace(/\/+$/,""),H=W.replace(/\\/g,"/").replace(/\/+$/,"");return B===H||B.toLowerCase()===H.toLowerCase()},j=K.find(R=>R.pathExists===!1||R.isCurrent||e&&C(R.path,e)?!1:R.branchName===x.branchName);if(j){await Ii(j.path);return}}try{let C="";(await ye("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges&&(await ye("stash_push",{repoPath:e,includeUntracked:!0}),C="Stashed local changes (including untracked), then ",await ws(e));const R=x.branchName?await ye("checkout_branch",{repoPath:e,branchName:x.branchName}):await ye("checkout_ref",{repoPath:e,refName:x.commitSha}),W=await ye("get_checked_out_ref",{repoPath:e}).catch(()=>R);U(W),await ws(e);const B=W.branchName?W.branchName:`${W.headSha.slice(0,7)} (detached)`;Ce({kind:"success",message:`${C}Checked out ${B}`})}catch(C){const j=C instanceof Error?C.message:String(C);Ce({kind:"error",message:j}),console.error("Failed to checkout commit:",j)}}async function Bo(){if(!(!e||Ke)){Ce(null),Lt(!0);try{if(!(await ye("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges){Ce({kind:"error",message:"No local changes to stash."});return}await ye("stash_push",{repoPath:e,includeUntracked:!0}),await qn(),await ws(e),Ce({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(x){const v=x instanceof Error?x.message:String(x);Ce({kind:"error",message:v}),console.error("Failed to stash:",v)}finally{Lt(!1)}}}async function Mi(x){if(!e||wt)return!1;const v=x.trim();if(!v)return Ce({kind:"error",message:"Enter a commit message."}),!1;Ce(null),ct(!0);try{if(!(await ye("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges)return Ce({kind:"error",message:"No local changes to commit."}),!1;const j=await ye("commit_working_tree",{repoPath:e,message:v});return U(j),await qn(),await ws(e),Ce({kind:"success",message:"Committed local changes."}),!0}catch(C){const j=C instanceof Error?C.message:String(C);return Ce({kind:"error",message:j}),console.error("Failed to commit:",j),!1}finally{ct(!1)}}async function Zi(){if(!e||cn)return!1;Ce(null),rt(!0);try{if(!(await ye("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges)return Ce({kind:"error",message:"No local changes to stage."}),!1;const v=await ye("stage_working_tree",{repoPath:e});return U(v),await qn(),await ws(e),Ce({kind:"success",message:"Staged all changes."}),!0}catch(x){const v=x instanceof Error?x.message:String(x);return Ce({kind:"error",message:v}),console.error("Failed to stage:",v),!1}finally{rt(!1)}}async function Ji(x,v){if(!(!e||It)){pn(!0),Ce(null);try{const C=/^STASH:(\d+)$/.exec(x);let j;if(C){const R=parseInt(C[1],10);j=await ye("move_stash_to_new_branch",{repoPath:e,stashIndex:R,branchName:v})}else j=await ye("create_branch_from_uncommitted",{repoPath:e,branchName:v});U(j),await ws(e),Ce({kind:"success",message:`Moved to new branch "${v}"`})}catch(C){const j=C instanceof Error?C.message:String(C);Ce({kind:"error",message:j}),console.error("Failed to create branch from node:",j)}finally{pn(!1)}}}async function E(x){if(!(!e||It)){pn(!0),Ce(null);try{const v=await ye("create_root_branch",{repoPath:e,branchName:x});U(v),await ws(e),Ce({kind:"success",message:`Created new root branch "${x}"`})}catch(v){const C=v instanceof Error?v.message:String(v);Ce({kind:"error",message:C}),console.error("Failed to create root branch:",C)}finally{pn(!1)}}}async function F(x,v){if(!e)return;const C=Array.from(new Set(x.filter(j=>!!j&&j!==v)));if(C.length!==0){Ce(null),mt(!0);try{let j=null;for(const R of C)j=await ye("merge_ref_into_branch",{repoPath:e,sourceRef:R,targetBranch:v});await ws(e),j&&U(j),Ce({kind:"success",message:C.length===1?`Merged ${C[0].slice(0,7)} into ${v}`:`Merged ${C.length} commits into ${v}`})}catch(j){const R=j instanceof Error?j.message:String(j);Ce({kind:"error",message:R}),console.error("Failed to merge refs into branch:",R)}finally{mt(!1)}}}async function ce(){if(!(!e||jt)){Ce(null),Rt(!0);try{let x=[];try{x=await ye("push_all_unpushed_branches",{repoPath:e})}catch(v){const C=v instanceof Error?v.message:String(v);if(!/non-fast-forward|fetch first|rejected/i.test(C))throw v;const R=X==null?void 0:X.branchName;if(!R)throw v;const W=window.confirm(`Push all hit non-fast-forward.

OK: pull --rebase then retry
Cancel: pull --no-rebase then retry`);await ye("pull_branch_with_strategy",{repoPath:e,branchName:R,rebase:W}),x=await ye("push_all_unpushed_branches",{repoPath:e})}await qn(),await qs(e),Ce({kind:"success",message:x.length>0?x.length===1?`Pushed ${x[0].branchName}`:`Pushed ${x.length} branches`:"Everything local is already pushed."})}catch(x){const v=x instanceof Error?x.message:String(x);Ce({kind:"error",message:v}),console.error("Failed to push all branches:",v)}finally{Rt(!1)}}}async function Me(){if(!(!e||jt)){Ce(null),Rt(!0);try{const x=await ye("push_current_branch",{repoPath:e});await qn(),await qs(e),Ce({kind:"success",message:`Pushed ${x.branchName}`})}catch(x){const v=x instanceof Error?x.message:String(x);if(/non-fast-forward|fetch first|rejected/i.test(v)){const j=window.confirm(`Push was rejected (non-fast-forward).

OK: pull --rebase then retry push
Cancel: pull --no-rebase then retry push`);try{const R=X==null?void 0:X.branchName;if(!R)throw new Error("Cannot resolve current branch for pull.");await ye("pull_branch_with_strategy",{repoPath:e,branchName:R,rebase:j});const W=await ye("push_current_branch",{repoPath:e});await qn(),await qs(e),Ce({kind:"success",message:`Pulled (${j?"rebase":"merge"}) and pushed ${W.branchName}`});return}catch(R){const W=R instanceof Error?R.message:String(R);Ce({kind:"error",message:W}),console.error("Failed to resolve non-fast-forward:",W);return}}Ce({kind:"error",message:v}),console.error("Failed to push current branch:",v)}finally{Rt(!1)}}}async function Ve(x){var C;if(!e||jt)return;const v=Array.from(new Map(x.filter(j=>j.branchName&&j.targetSha).map(j=>[j.branchName,j])).values());if(v.length!==0){Ce(null),Rt(!0);try{for(const j of v)try{await ye("push_branch",{repoPath:e,branchName:j.branchName,targetSha:j.targetSha})}catch(R){const W=R instanceof Error?R.message:String(R);if(!/non-fast-forward|fetch first|rejected/i.test(W))throw R;const H=window.confirm(`Push rejected for ${j.branchName} (non-fast-forward).

OK: pull --rebase then retry
Cancel: pull --no-rebase then retry`);await ye("pull_branch_with_strategy",{repoPath:e,branchName:j.branchName,rebase:H}),await ye("push_branch",{repoPath:e,branchName:j.branchName,targetSha:j.targetSha})}await ws(e),Ce({kind:"success",message:v.length===1?`Pushed ${v[0].branchName} through ${(C=v[0].targetSha)==null?void 0:C.slice(0,7)}`:`Pushed ${v.length} selected commit ranges`})}catch(j){const R=j instanceof Error?j.message:String(j);Ce({kind:"error",message:R}),console.error("Failed to push selected commits:",R)}finally{Rt(!1)}}}async function it(x){var W;if(!e||ot)return;const v=Array.from(new Set(x.branchNames.filter(B=>B&&B!==N))),C=!!x.discardUncommittedChanges,j=(W=x.stashIndices)!=null?W:[],R=Array.from(new Set(j)).sort((B,H)=>H-B);if(!(v.length===0&&!C&&R.length===0)){Ce(null),V(!0);try{for(const Z of R)await ye("stash_drop",{repoPath:e,stashIndex:Z});const B=v.length>0||C?await ye("delete_selected_elements",{repoPath:e,branchNames:v,discardUncommittedChanges:C}):{deletedBranches:[],discardedUncommittedChanges:!1};await ws(e);const H=[];R.length>0&&H.push(R.length===1?`removed stash ${R[0]+1}`:`removed ${R.length} stashes`),B.discardedUncommittedChanges&&H.push("discarded local uncommitted changes"),B.deletedBranches.length>0&&H.push(B.deletedBranches.length===1?`deleted ${B.deletedBranches[0]}`:`deleted ${B.deletedBranches.length} branches`),Ce({kind:"success",message:H.length>0?H.join(" and "):"Nothing to delete."})}catch(B){const H=B instanceof Error?B.message:String(B);Ce({kind:"error",message:H}),console.error("Failed to delete selected elements:",H)}finally{V(!1)}}}function Yt(x){x&&(ze(x),se(v=>v+1))}function Ht(x){x&&(Xe(x),se(v=>v+1))}const{enrichedBranches:Ft,enrichedBranchCommitPreviews:fn,enrichedBranchUniqueAheadCounts:vn,enrichedDirectCommits:an,enrichedUnpushedDirectCommits:Vn,visualCheckedOutRef:_n}=_.useMemo(()=>{var Ss,ro,Ln,Is,To,hi,Pn,mi,Ei,_r,Wr,Fr,Xr,Ul,Vl,Gr,pi,gr,ni,ba,qr,yr,xr,Kr,ua,Yl,br;const x=t2(De,g,M,Ee,Ye,N,(Ss=X==null?void 0:X.hasUncommittedChanges)!=null?Ss:!1);let v=x.branches,C=x.directCommits,j=T,R=x.branchCommitPreviews,W=x.branchUniqueAheadCounts,B=X;const H=$t?C.some(dn=>dn.fullSha===$t||dn.sha===$t.slice(0,7)):!0;if($t&&tt&&!H){const dn=(hi=(To=(ro=C.find(Fo=>Fo.fullSha===tt||Fo.sha===tt.slice(0,7)))==null?void 0:ro.date)!=null?To:(Is=(Ln=R[N])==null?void 0:Ln.find(Fo=>Fo.fullSha===tt||Fo.sha===tt.slice(0,7)))==null?void 0:Is.date)!=null?hi:null,ls=dn?new Date(new Date(dn).getTime()+1e3).toISOString():new Date().toISOString(),Jn=(_r=tt!=null?tt:(Pn=v.find(Fo=>Fo.name===N))==null?void 0:Pn.headSha)!=null?_r:(Ei=(mi=C[0])==null?void 0:mi.fullSha)!=null?Ei:null,Ti={fullSha:$t,sha:$t.slice(0,7),parentSha:Jn,message:((Wr=At==null?void 0:At.subject)==null?void 0:Wr.trim())||`Remote commit on origin/${N}`,author:((Fr=At==null?void 0:At.author)==null?void 0:Fr.trim())||"Unknown",date:ls,kind:"commit",isRemote:!0};C=[{fullSha:$t,sha:$t.slice(0,7),parentSha:Jn,parentShas:Jn?[Jn]:[],childShas:[],branch:N,message:Ti.message,author:Ti.author,date:ls,kind:"commit",isRemote:!0},...C],R={...R,[N]:[Ti,...(Xr=R[N])!=null?Xr:[]]},v=v.map(Fo=>Fo.name===N?{...Fo,headSha:$t,lastCommitDate:ls}:Fo)}if(!!$t&&!!tt&&!H&&(X==null?void 0:X.branchName)===N&&X.headSha!==$t&&(X.hasUncommittedChanges||T.length>0)){const dn=`${N} (local)`,ls=new Set(T.map(Cs=>Cs.fullSha));X!=null&&X.headSha&&ls.add(X.headSha);const Jn=(pi=(Gr=(Ul=T[0])==null?void 0:Ul.date)!=null?Gr:X!=null&&X.headSha?(Vl=C.find(Cs=>Cs.fullSha===X.headSha))==null?void 0:Vl.date:void 0)!=null?pi:new Date().toISOString();v.some(Cs=>Cs.name===dn)||(v=[...v,{name:dn,commitsAhead:Math.max(1,ls.size),commitsBehind:0,lastCommitDate:Jn,lastCommitAuthor:(gr=X==null?void 0:X.branchName)!=null?gr:"You",status:"fresh",remoteSyncStatus:"unpushed",unpushedCommits:Math.max(1,ls.size),headSha:(qr=X==null?void 0:X.headSha)!=null?qr:(ba=(ni=T[0])==null?void 0:ni.fullSha)!=null?ba:"WORKING_TREE",parentBranch:N}]),C=C.map(Cs=>Cs.branch===N&&ls.has(Cs.fullSha)?{...Cs,branch:dn}:Cs),j=j.map(Cs=>Cs.branch===N&&ls.has(Cs.fullSha)?{...Cs,branch:dn}:Cs);const Ti=(yr=R[N])!=null?yr:[],_i=Ti.filter(Cs=>Cs.fullSha==="WORKING_TREE"||ls.has(Cs.fullSha)),Fo=Ti.filter(Cs=>!_i.includes(Cs));_i.length>0&&(R={...R,[N]:Fo,[dn]:[..._i,...(xr=R[dn])!=null?xr:[]]}),W={...W,[dn]:Math.max(1,ls.size)},(B==null?void 0:B.branchName)===N&&(B={...B,branchName:dn})}if(!(B!=null&&B.hasUncommittedChanges))return{enrichedBranches:v,enrichedDirectCommits:C,enrichedUnpushedDirectCommits:j,enrichedBranchCommitPreviews:R,enrichedBranchUniqueAheadCounts:W,visualCheckedOutRef:B};const ue=B.headSha||B.parentSha||null,Re=(ua=(Kr=C[0])==null?void 0:Kr.fullSha)!=null?ua:null,we=(dn,ls)=>!dn||!ls?!1:dn===ls||dn.startsWith(ls)||ls.startsWith(dn),ke=[{name:N,headSha:Re!=null?Re:"",isDefault:!0},...v.map(dn=>({name:dn.name,headSha:dn.headSha,isDefault:!1}))],Le=B.branchName?ke.find(dn=>dn.name===B.branchName):void 0,vt=ue?ke.filter(dn=>we(dn.headSha,ue)):[],zt=(Yl=Le!=null?Le:vt.find(dn=>dn.isDefault))!=null?Yl:vt[0],ht=zt&&!zt.isDefault?v.find(dn=>dn.name===zt.name):void 0,xt=(()=>{var ls;if(!ue)return null;const dn=C.find(Jn=>we(Jn.fullSha,ue)||we(Jn.sha,ue));if(dn!=null&&dn.date)return dn.date;if(ht){const Jn=((ls=R[ht.name])!=null?ls:[]).find(Ti=>we(Ti.fullSha,ue)||we(Ti.sha,ue));if(Jn!=null&&Jn.date)return Jn.date}return null})(),St=xt?new Date(xt).getTime():Number.NaN,pt=Date.now(),Pt=Number.isFinite(St)?Math.max(pt,St+1):pt,Dn=new Date(Pt).toISOString(),gn={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ue,message:"Local uncommitted changes",author:"You",date:Dn,kind:"uncommitted"};return ht?{enrichedBranches:v.map(ls=>ls.name===ht.name?{...ls,commitsAhead:ls.commitsAhead+1,unpushedCommits:ls.unpushedCommits+1,lastCommitDate:Dn,headSha:"WORKING_TREE"}:ls),enrichedDirectCommits:C,enrichedUnpushedDirectCommits:j,enrichedBranchCommitPreviews:{...R,[ht.name]:[gn,...R[ht.name]||[]]},enrichedBranchUniqueAheadCounts:{...W,[ht.name]:Math.max(0,(br=Object.prototype.hasOwnProperty.call(W,ht.name)?W[ht.name]:ht.commitsAhead)!=null?br:0)+1},visualCheckedOutRef:B}:{enrichedBranches:v,enrichedBranchCommitPreviews:{...R,[N]:[gn,...R[N]||[]]},enrichedBranchUniqueAheadCounts:{...W},enrichedDirectCommits:C,enrichedUnpushedDirectCommits:j,visualCheckedOutRef:B}},[g,Ee,Ye,X,N,M,At,tt,$t,De,T]);_.useEffect(()=>{var j;if(!(!ut&&!Qe&&($t==null||fs&&tt!=null)))return;const v=_n!=null&&_n.hasUncommittedChanges?"WORKING_TREE":(j=_n==null?void 0:_n.headSha)!=null?j:null;if(!v)return;const C=`${e!=null?e:"__no-repo__"}|${tn}|${v}`;Rn.current!==C&&(Rn.current=C,ze(v),se(R=>R+1))},[fs,Qe,tn,ut,tt,$t,e,_n==null?void 0:_n.hasUncommittedChanges,_n==null?void 0:_n.headSha]),_.useEffect(()=>{Rn.current=null},[e]);const Vt=_.useMemo(()=>{const x={...Ge};return x[N]=null,x},[Ge,N,Ft]),Tn=_.useMemo(()=>{var x;return(x=Lw(Ft,N,Vt,pe))!=null?x:vp(Ft,N,fn,Vt)},[Ft,N,fn,Vt,pe]),nn=_.useMemo(()=>e?["layout-v2",e,tn].join("|"):null,[e,tn]);_.useEffect(()=>{if(!e||!nn){Gn(null),go(null);return}const x=ps.current.get(nn);if(x){Gn(x),go(nn),no.current.add(nn);return}let v=!1;return Gn(null),go(null),ye("get_repo_layout_snapshot",{repoPath:e,layoutKey:nn}).then(C=>{if(v||!C)return;const j=JSON.parse(C),R=bm(j);ps.current.set(nn,R),no.current.add(nn),Gn(R),go(nn)}).catch(()=>{v||(Gn(null),go(null))}),()=>{v=!0}},[e,nn]);const _s=_.useMemo(()=>{var x;if(Ae.trim().length===0&&nn&&zi===nn&&ki)return ki;if(ut){const v=nn&&(x=ps.current.get(nn))!=null?x:null;if(v)return v;if(Zt.current)return Zt.current}return wp({lanes:Tn,branches:Ft,mergeNodes:w,directCommits:an,unpushedDirectCommits:Vn,defaultBranch:N,branchCommitPreviews:fn,branchParentByName:Vt,branchUniqueAheadCounts:vn,manuallyOpenedClumps:qo,manuallyClosedClumps:vs,isDebugOpen:!1,gridSearchQuery:Ae,gridFocusSha:he,checkedOutRef:_n!=null?_n:null,orientation:tn})},[Tn,Ft,w,an,Vn,N,fn,Vt,vn,qo,vs,Ae,he,(Oo=_n==null?void 0:_n.headSha)!=null?Oo:null,(zo=_n==null?void 0:_n.branchName)!=null?zo:null,tn,Ae,nn,zi,ki,ut]);_.useEffect(()=>{Zt.current=_s},[_s]),_.useEffect(()=>{if(!e||!nn||(ps.current.set(nn,_s),no.current.has(nn)))return;no.current.add(nn);const x=JSON.stringify(xm(_s));ye("store_repo_layout_snapshot",{repoPath:e,layoutKey:nn,payloadJson:x}).catch(()=>{no.current.delete(nn)})},[e,nn,_s]),_.useEffect(()=>{try{const x=window.localStorage.getItem(lx);if(x){const C=Number(x);Number.isFinite(C)&&Do(Math.min(hx,Math.max(fx,C)))}const v=window.localStorage.getItem(cx);v!=null&&Xt(v==="true")}catch{}},[]),_.useEffect(()=>{_o.current=po},[po]),_.useEffect(()=>{const x=to.current;x&&(x.style.width=is?"0px":`${po}px`)},[po,is]),_.useEffect(()=>{try{window.localStorage.setItem(cx,String(is))}catch{}},[is]);const gs=x=>{const v=hs.current;if(!v)return;const C=v.startWidth+(x-v.startX);v.pendingWidth=Math.min(hx,Math.max(fx,C));const j=to.current;j&&(j.style.width=`${v.pendingWidth}px`)},Lo=(x,v)=>{const C=hs.current;if(C&&!(v!=null&&C.pointerId!==v)){hs.current=null,document.body.style.cursor="",document.body.style.userSelect="",Do(C.pendingWidth);try{window.localStorage.setItem(lx,String(C.pendingWidth))}catch{}}},ao=x=>{x.button===0&&(x.preventDefault(),hs.current={startX:x.clientX,startWidth:_o.current,pendingWidth:_o.current,pointerId:x.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",x.currentTarget.setPointerCapture(x.pointerId))},bo=x=>{const v=hs.current;!v||v.pointerId!==x.pointerId||gs(x.clientX)},vo=x=>{if(hs.current){try{x.currentTarget.releasePointerCapture(x.pointerId)}catch{}Lo("pointerup",x.pointerId)}},fi=x=>{if(hs.current){try{x.currentTarget.releasePointerCapture(x.pointerId)}catch{}Lo("pointercancel",x.pointerId)}};return l.jsx("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:l.jsx("div",{className:"relative z-30 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:to,className:"relative z-[60] flex h-full min-h-0 flex-none overflow-visible",style:{width:is?64:po},children:[l.jsx("button",{type:"button",className:"window-no-drag absolute right-2.5 left-22 top-2.25 z-[9999] inline-flex h-7 w-7 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted","aria-label":is?"Open sidebar":"Collapse sidebar",onClick:()=>Xt(x=>!x),children:is?l.jsx(jw,{className:"h-4 w-4 shrink-0"}):l.jsx(Cw,{className:"h-4 w-4 shrink-0"})}),l.jsx(N3,{className:B3("min-h-0 shrink-0 overflow-hidden pt-14 transition-[width,opacity] duration-300 ease-in-out","opacity-100"),style:{width:"100%"},collapsed:is,projects:ui,activeProjectPath:e,onSelectProject:xo,onAddProject:Es,onRemoveProject:Zo,onReorderProjects:$i,onRevealProjectInFinder:Un,projectLoading:Qe||(p&&e?!((ca=d[e])!=null&&ca.loaded):!1),projectError:bt,checkedOutRef:X,showCommits:!1,manuallyOpenedClumpsByProject:Y,manuallyClosedClumpsByProject:Se,manuallyOpenedClumps:qo,manuallyClosedClumps:vs,setManuallyOpenedClumps:En,setManuallyClosedClumps:yo,gridLayoutModel:_s,onSelectCommit:Yt,onSelectBranch:Ht}),is?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:ao,onPointerMove:bo,onPointerUp:vo,onPointerCancel:fi,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"})]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-40 h-12"}),l.jsx(fS,{branches:Ft,mergeNodes:w,directCommits:an,unpushedDirectCommits:Vn,unpushedCommitShasByBranch:I,openPRs:_t,defaultBranch:N,branchCommitPreviews:fn,branchParentByName:Vt,branchUniqueAheadCounts:vn,gridSearchQuery:Ae,gridSearchJumpToken:oe,gridSearchJumpDirection:z,gridFocusSha:he,isLoading:ut||Qe,onGridSearchResultCountChange:ee,onGridSearchResultIndexChange:Te,onGridSearchFocusChange:ze,checkedOutRef:_n,onCommitClick:ti,onMergeRefsIntoBranch:F,mergeInProgress:ft,onPushAllBranches:ce,onPushCurrentBranch:Me,onPushCommitTargets:Ve,pushInProgress:jt,onDeleteSelection:it,deleteInProgress:ot,worktrees:K,currentRepoPath:e!=null?e:void 0,onRemoveWorktree:ji,removeWorktreeInProgress:de,onSwitchToWorktree:Ii,onStashLocalChanges:Bo,stashInProgress:Ke,stashDisabled:!1,onCommitLocalChanges:Mi,commitInProgress:wt,commitDisabled:!1,onStageAllChanges:Zi,stageInProgress:cn,onCreateBranchFromNode:Ji,onCreateRootBranch:E,createBranchFromNodeInProgress:It,isMutationBusy:Et,isDebugOpen:eo,onDebugClose:()=>Co(!1),onInteractionChange:un,manuallyOpenedClumps:qo,manuallyClosedClumps:vs,setManuallyOpenedClumps:En,setManuallyClosedClumps:yo,layoutModel:_s,orientation:tn,gridHudProps:Os})]})]})})})}var z3=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,$3={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(e)),e.textContent=z3}var us=$3,P3=`.icon-transitions-module__iconState___uqK9J {
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
}`,I3={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-components-icon-transitions");e||(e=document.createElement("style"),e.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(e)),e.textContent=P3}var ss=I3,H3=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),U3=({size:e=24,style:n={}})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),V3=({size:e=20,...n})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),Y3=({size:e=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${ss.iconState} ${n?ss.hiddenScaled:ss.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${ss.iconState} ${n?ss.visibleScaled:ss.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),W3=({size:e=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${ss.iconStateFast} ${i?ss.visibleScaled:u?ss.sending:ss.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${ss.iconStateFast} ${a?ss.visibleScaled:ss.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ss.iconStateFast} ${c?ss.visibleScaled:ss.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},F3=({size:e=24,isOpen:n=!0})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ss.iconFade} ${n?ss.visible:ss.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ss.iconFade} ${n?ss.hidden:ss.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),X3=({size:e=24,isPaused:n=!1})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ss.iconFadeFast} ${n?ss.hidden:ss.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${ss.iconFadeFast} ${n?ss.visible:ss.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),G3=({size:e=16})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),q3=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),n2=({size:e=16})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),K3=({size:e=24})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),Q3=({size:e=16})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Z3=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),J3=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),ej=({size:e=24})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),tj=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),nj=({size:e=24})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),s2=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],wm=s2.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(""),fp="feedback-freeze-styles",Sm="__agentation_freeze";function sj(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const e=window;return e[Sm]||(e[Sm]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[Sm]}var wn=sj();typeof window<"u"&&!wn.installed&&(wn.origSetTimeout=window.setTimeout.bind(window),wn.origSetInterval=window.setInterval.bind(window),wn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,n,...i)=>typeof e=="string"?wn.origSetTimeout(e,n):wn.origSetTimeout((...a)=>{wn.frozen?wn.frozenTimeoutQueue.push(()=>e(...a)):e(...a)},n,...i),window.setInterval=(e,n,...i)=>typeof e=="string"?wn.origSetInterval(e,n):wn.origSetInterval((...a)=>{wn.frozen||e(...a)},n,...i),window.requestAnimationFrame=e=>wn.origRAF(n=>{wn.frozen?wn.frozenRAFQueue.push(e):e(n)}),wn.installed=!0);var Wt=wn.origSetTimeout,oj=wn.origSetInterval,Al=wn.origRAF;function ij(e){return e?s2.some(n=>{var i;return!!((i=e.closest)!=null&&i.call(e,`[${n}]`))}):!1}function aj(){if(typeof document>"u"||wn.frozen)return;wn.frozen=!0,wn.frozenTimeoutQueue=[],wn.frozenRAFQueue=[];let e=document.getElementById(fp);e||(e=document.createElement("style"),e.id=fp),e.textContent=`
    *${wm},
    *${wm}::before,
    *${wm}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),wn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;ij(i)||(n.pause(),wn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function px(){var i;if(typeof document>"u"||!wn.frozen)return;wn.frozen=!1;const e=wn.frozenTimeoutQueue;wn.frozenTimeoutQueue=[];for(const a of e)wn.origSetTimeout(()=>{if(wn.frozen){wn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=wn.frozenRAFQueue;wn.frozenRAFQueue=[];for(const a of n)wn.origRAF(c=>{if(wn.frozen){wn.frozenRAFQueue.push(a);return}a(c)});for(const a of wn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}wn.pausedAnimations=[],(i=document.getElementById(fp))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Cm(e){if(!e)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{e.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var Xd=_.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:y,style:g,accentColor:b="#3c82f7",isExiting:w=!1,lightMode:k=!1,computedStyles:M},A){const[T,D]=_.useState(u),[I,O]=_.useState(!1),[N,G]=_.useState("initial"),[X,U]=_.useState(!1),[K,le]=_.useState(!1),de=_.useRef(null),me=_.useRef(null),Ae=_.useRef(null),Xe=_.useRef(null);_.useEffect(()=>{w&&N!=="exit"&&G("exit")},[w,N]),_.useEffect(()=>{Wt(()=>{G("enter")},0);const fe=Wt(()=>{G("entered")},200),Se=Wt(()=>{const P=de.current;P&&(Cm(P),P.selectionStart=P.selectionEnd=P.value.length,P.scrollTop=P.scrollHeight)},50);return()=>{clearTimeout(fe),clearTimeout(Se),Ae.current&&clearTimeout(Ae.current),Xe.current&&clearTimeout(Xe.current)}},[]);const oe=_.useCallback(()=>{Xe.current&&clearTimeout(Xe.current),O(!0),Xe.current=Wt(()=>{O(!1),Cm(de.current)},250)},[]);_.useImperativeHandle(A,()=>({shake:oe}),[oe]);const se=_.useCallback(()=>{G("exit"),Ae.current=Wt(()=>{p()},150)},[p]),z=_.useCallback(()=>{T.trim()&&h(T.trim())},[T,h]),te=_.useCallback(fe=>{fe.stopPropagation(),!fe.nativeEvent.isComposing&&(fe.key==="Enter"&&!fe.shiftKey&&(fe.preventDefault(),z()),fe.key==="Escape"&&se())},[z,se]),Y=[us.popup,k?us.light:"",N==="enter"?us.enter:"",N==="entered"?us.entered:"",N==="exit"?us.exit:"",I?us.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:me,className:Y,"data-annotation-popup":!0,style:g,onClick:fe=>fe.stopPropagation(),children:[l.jsxs("div",{className:us.header,children:[M&&Object.keys(M).length>0?l.jsxs("button",{className:us.headerToggle,onClick:()=>{const fe=K;le(!K),fe&&Wt(()=>Cm(de.current),0)},type:"button",children:[l.jsx("svg",{className:`${us.chevron} ${K?us.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:us.element,children:n})]}):l.jsx("span",{className:us.element,children:n}),i&&l.jsx("span",{className:us.timestamp,children:i})]}),M&&Object.keys(M).length>0&&l.jsx("div",{className:`${us.stylesWrapper} ${K?us.expanded:""}`,children:l.jsx("div",{className:us.stylesInner,children:l.jsx("div",{className:us.stylesBlock,children:Object.entries(M).map(([fe,Se])=>l.jsxs("div",{className:us.styleLine,children:[l.jsx("span",{className:us.styleProperty,children:fe.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:us.styleValue,children:Se}),";"]},fe))})})}),a&&l.jsxs("div",{className:us.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:de,className:us.textarea,style:{borderColor:X?b:void 0},placeholder:c,value:T,onChange:fe=>D(fe.target.value),onFocus:()=>U(!0),onBlur:()=>U(!1),rows:2,onKeyDown:te}),l.jsxs("div",{className:us.actions,children:[y&&l.jsx("div",{className:us.deleteWrapper,children:l.jsx("button",{className:us.deleteButton,onClick:y,type:"button",children:l.jsx(ej,{size:22})})}),l.jsx("button",{className:us.cancel,onClick:se,children:"Cancel"}),l.jsx("button",{className:us.submit,style:{backgroundColor:b,opacity:T.trim()?1:.4},onClick:z,disabled:!T.trim(),children:d})]})]})}),rj=({content:e,children:n,...i})=>{const[a,c]=_.useState(!1),[u,d]=_.useState(!1),[h,p]=_.useState({top:0,right:0}),y=_.useRef(null),g=_.useRef(null),b=_.useRef(null),w=()=>{if(y.current){const A=y.current.getBoundingClientRect();p({top:A.top+A.height/2,right:window.innerWidth-A.left+8})}},k=()=>{d(!0),b.current&&(clearTimeout(b.current),b.current=null),w(),g.current=Wt(()=>{c(!0)},500)},M=()=>{g.current&&(clearTimeout(g.current),g.current=null),c(!1),b.current=Wt(()=>{d(!1)},150)};return _.useEffect(()=>()=>{g.current&&clearTimeout(g.current),b.current&&clearTimeout(b.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:y,onMouseEnter:k,onMouseLeave:M,...i,children:n}),u&&zl.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:e}),document.body)]})},lj=`.styles-module__tooltip___mcXL2 {
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
}`,cj={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-help-tooltip-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(e)),e.textContent=lj}var _x=cj,Pr=({content:e})=>l.jsx(rj,{className:_x.tooltip,content:e,children:l.jsx(V3,{className:_x.tooltipIcon})}),Ct={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},o2=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...Ct.navigation},{type:"header",label:"Header",...Ct.header},{type:"hero",label:"Hero",...Ct.hero},{type:"section",label:"Section",...Ct.section},{type:"sidebar",label:"Sidebar",...Ct.sidebar},{type:"footer",label:"Footer",...Ct.footer},{type:"modal",label:"Modal",...Ct.modal},{type:"banner",label:"Banner",...Ct.banner},{type:"drawer",label:"Drawer",...Ct.drawer},{type:"popover",label:"Popover",...Ct.popover},{type:"divider",label:"Divider",...Ct.divider}]},{section:"Content",items:[{type:"card",label:"Card",...Ct.card},{type:"text",label:"Text",...Ct.text},{type:"image",label:"Image",...Ct.image},{type:"video",label:"Video",...Ct.video},{type:"table",label:"Table",...Ct.table},{type:"grid",label:"Grid",...Ct.grid},{type:"list",label:"List",...Ct.list},{type:"chart",label:"Chart",...Ct.chart},{type:"codeBlock",label:"Code Block",...Ct.codeBlock},{type:"map",label:"Map",...Ct.map},{type:"timeline",label:"Timeline",...Ct.timeline},{type:"calendar",label:"Calendar",...Ct.calendar},{type:"accordion",label:"Accordion",...Ct.accordion},{type:"carousel",label:"Carousel",...Ct.carousel},{type:"logo",label:"Logo",...Ct.logo},{type:"faq",label:"FAQ",...Ct.faq},{type:"gallery",label:"Gallery",...Ct.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...Ct.button},{type:"input",label:"Input",...Ct.input},{type:"search",label:"Search",...Ct.search},{type:"form",label:"Form",...Ct.form},{type:"tabs",label:"Tabs",...Ct.tabs},{type:"dropdown",label:"Dropdown",...Ct.dropdown},{type:"toggle",label:"Toggle",...Ct.toggle},{type:"stepper",label:"Stepper",...Ct.stepper},{type:"rating",label:"Rating",...Ct.rating},{type:"fileUpload",label:"File Upload",...Ct.fileUpload},{type:"checkbox",label:"Checkbox",...Ct.checkbox},{type:"radio",label:"Radio",...Ct.radio},{type:"slider",label:"Slider",...Ct.slider},{type:"datePicker",label:"Date Picker",...Ct.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...Ct.avatar},{type:"badge",label:"Badge",...Ct.badge},{type:"tag",label:"Tag",...Ct.tag},{type:"breadcrumb",label:"Breadcrumb",...Ct.breadcrumb},{type:"pagination",label:"Pagination",...Ct.pagination},{type:"progress",label:"Progress",...Ct.progress},{type:"alert",label:"Alert",...Ct.alert},{type:"toast",label:"Toast",...Ct.toast},{type:"notification",label:"Notification",...Ct.notification},{type:"tooltip",label:"Tooltip",...Ct.tooltip},{type:"stat",label:"Stat",...Ct.stat},{type:"skeleton",label:"Skeleton",...Ct.skeleton},{type:"chip",label:"Chip",...Ct.chip},{type:"icon",label:"Icon",...Ct.icon},{type:"spinner",label:"Spinner",...Ct.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...Ct.pricing},{type:"testimonial",label:"Testimonial",...Ct.testimonial},{type:"cta",label:"CTA",...Ct.cta},{type:"productCard",label:"Product Card",...Ct.productCard},{type:"profile",label:"Profile",...Ct.profile},{type:"feature",label:"Feature",...Ct.feature},{type:"team",label:"Team",...Ct.team},{type:"login",label:"Login",...Ct.login},{type:"contact",label:"Contact",...Ct.contact}]}],ia={};for(const e of o2)for(const n of e.items)ia[n.type]=n;function Fe({w:e,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof e=="number"?`${e}px`:e,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Zn({w:e,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof e=="number"?`${e}px`:e,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function li({size:e}){return l.jsx("div",{style:{width:e,height:e,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function uj({width:e,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:e*.02},children:[l.jsx(Zn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:e*.03,marginLeft:e*.04},children:[l.jsx(Fe,{w:e*.06}),l.jsx(Fe,{w:e*.07}),l.jsx(Fe,{w:e*.05}),l.jsx(Fe,{w:e*.06})]}),l.jsx(Zn,{w:e*.1,h:Math.min(28,n*.5),radius:4})]})}function dj({width:e,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Fe,{w:e*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Fe,{w:e*.6}),l.jsx(Fe,{w:e*.4}),l.jsx(Zn,{w:Math.min(140,e*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function fj({width:e,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:e*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Fe,{w:e*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Zn,{w:10,h:10,radius:2}),l.jsx(Fe,{w:e*(.4+c*17%30/100)})]},c))]})}function hj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Fe,{w:"60%",h:3,strong:!0}),l.jsx(Fe,{w:"80%",h:2}),l.jsx(Fe,{w:"70%",h:2}),l.jsx(Fe,{w:"60%",h:2})]},c))})}function mj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Fe,{w:e*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Fe,{w:"90%"}),l.jsx(Fe,{w:"70%"}),l.jsx(Fe,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(Zn,{w:70,h:26,radius:4}),l.jsx(Zn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function pj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Fe,{w:"70%",h:4,strong:!0}),l.jsx(Fe,{w:"95%",h:2}),l.jsx(Fe,{w:"85%",h:2}),l.jsx(Fe,{w:"50%",h:2})]})]})}function _j({width:e,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Fe,{w:e*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Fe,{w:`${70+u*13%25}%`,h:2},u))]})}function gj({width:e,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:e,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:e,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:e*.3,cy:n*.3,r:Math.min(e,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function yj({width:e,height:n}){const i=Math.max(2,Math.min(5,Math.floor(e/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Fe,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Fe,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function xj({width:e,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(li,{size:8}),l.jsx(Fe,{w:`${55+c*17%35}%`,h:2})]},c))})}function bj({width:e,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Fe,{w:Math.max(20,e*.5),h:3,strong:!0})})}function vj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Fe,{w:Math.min(80,e*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Fe,{w:"40%",h:2})})]})}function wj({width:e,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Fe,{w:60+c*17%30,h:2}),l.jsx(Zn,{w:"100%",h:28,radius:4})]},c)),l.jsx(Zn,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function Sj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Fe,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Fe,{w:"80%",h:2}),l.jsx(Fe,{w:"65%",h:2}),l.jsx(Fe,{w:"75%",h:2})]})]})}function Cj({width:e,height:n}){const i=Math.min(e,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("circle",{cx:e/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:e/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${e/2-i*.55} ${n*.78} C${e/2-i*.55} ${n*.55} ${e/2+i*.55} ${n*.55} ${e/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function kj({width:e,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Fe,{w:Math.max(16,e*.5),h:2,strong:!0})})}function jj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Fe,{w:e*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Fe,{w:e*.35})]})}function Mj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:e*.04},children:[l.jsx(Fe,{w:e*.3,h:4,strong:!0}),l.jsx(Fe,{w:e*.7}),l.jsx(Fe,{w:e*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:e*.03,marginTop:n*.06},children:[l.jsx(Zn,{w:"33%",h:"100%",radius:4}),l.jsx(Zn,{w:"33%",h:"100%",radius:4}),l.jsx(Zn,{w:"33%",h:"100%",radius:4})]})]})}function Ej({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(Zn,{w:"100%",h:"100%",radius:4},u))})}function Tj({width:e,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Fe,{w:e*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Fe,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function Aj({width:e,height:n}){const i=Math.min(e,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:e-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:e-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function Nj({width:e,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(li,{size:Math.min(14,n*.4)}),l.jsx(Fe,{w:"50%",h:2})]})}function Dj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(li,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:"60%",h:3,strong:!0}),l.jsx(Fe,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function Rj({width:e,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:e,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:e*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function Bj({width:e,height:n}){const i=Math.max(3,Math.min(7,Math.floor(e/50))),a=e/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(Zn,{w:a,h:`${d}%`,radius:2},u)})})}function Lj({width:e,height:n}){const i=Math.min(e,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(Zn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function Oj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Fe,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function zj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Fe,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function $j({width:e,height:n}){const i=Math.max(3,Math.min(5,Math.floor(e/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(Zn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function Pj({width:e}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function Ij({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Fe,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function Hj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Zn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(li,{size:5}),l.jsx(li,{size:5}),l.jsx(li,{size:5})]})]})}function Uj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Fe,{w:e*.4,h:3,strong:!0}),l.jsx(Fe,{w:e*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(li,{size:5}),l.jsx(Fe,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(Zn,{w:e*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function Vj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Fe,{w:"90%",h:2}),l.jsx(Fe,{w:"75%",h:2}),l.jsx(Fe,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(li,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Fe,{w:60,h:3,strong:!0}),l.jsx(Fe,{w:40,h:2})]})]})]})}function Yj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Fe,{w:e*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Fe,{w:e*.35}),l.jsx(Zn,{w:Math.min(140,e*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function Wj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:"40%",h:3,strong:!0}),l.jsx(Fe,{w:"70%",h:2})]})]})}function Fj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Fe,{w:e*.4,h:3,strong:!0}),l.jsx(Zn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function Xj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Fe,{w:e*.5,h:2}),l.jsx(Fe,{w:e*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Fe,{w:e*.3,h:2})]})}function Gj({width:e,height:n}){const i=Math.max(3,Math.min(5,Math.floor(e/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function qj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Fe,{w:Math.max(16,e*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function Kj({width:e,height:n}){const a=Math.min(n*.7,e/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function Qj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:e,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:e,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:e*.4,y1:0,x2:e*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function Zj({width:e,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(li,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Fe,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function Jj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Fe,{w:e*.4,h:2}),l.jsx(Fe,{w:e*.25,h:2})]})}function e8({width:e,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(li,{size:6}),l.jsx(li,{size:6}),l.jsx(li,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Fe,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function t8({width:e,height:n}){const c=Math.min((e-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Fe,{w:e*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Fe,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function n8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(li,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:"50%",h:3,strong:!0}),l.jsx(Fe,{w:"75%",h:2})]}),l.jsx(Fe,{w:30,h:2})]})}function s8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Fe,{w:"65%",h:4,strong:!0}),l.jsx(Fe,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Fe,{w:"30%",h:5,strong:!0}),l.jsx(Zn,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function o8({width:e,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(li,{size:i}),l.jsx(Fe,{w:e*.45,h:4,strong:!0}),l.jsx(Fe,{w:e*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:e*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Fe,{w:20,h:3,strong:!0}),l.jsx(Fe,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Fe,{w:20,h:3,strong:!0}),l.jsx(Fe,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Fe,{w:20,h:3,strong:!0}),l.jsx(Fe,{w:28,h:2})]})]})]})}function i8({width:e,height:n}){const i=Math.max(e*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:e-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:e*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Fe,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Fe,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function a8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Fe,{w:"70%",h:3,strong:!0}),l.jsx(Fe,{w:"90%",h:2}),l.jsx(Fe,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function r8({width:e,height:n}){const i=Math.min(n*.7,e*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:e*.08},children:[l.jsx(Zn,{w:i,h:i,radius:i*.25}),l.jsx(Fe,{w:e*.45,h:Math.max(4,n*.2),strong:!0})]})}function l8({width:e,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Fe,{w:e*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function c8({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function u8({width:e,height:n}){const i=Math.min(e,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function d8({width:e,height:n}){const i=Math.min(e,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("circle",{cx:e/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:e/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function f8({width:e,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=e*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function h8({width:e,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((e-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Fe,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Fe,{w:e*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function m8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function p8({width:e,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Fe,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function _8({width:e,height:n}){const i=Math.min(e,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:l.jsx("path",{d:`M${e/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function g8({width:e,height:n}){const i=Math.min(e,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("circle",{cx:e/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${e/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function y8({width:e,height:n}){const i=Math.min(36,n*.25,e*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:e*.04,alignItems:"flex-start"},children:[l.jsx(Zn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Fe,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Fe,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function x8({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Fe,{w:e*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:e*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(li,{size:a}),l.jsx(Fe,{w:e*.12,h:3,strong:!0}),l.jsx(Fe,{w:e*.08,h:2})]},u))})]})}function b8({width:e,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:e*.06,gap:n*.04},children:[l.jsx(Fe,{w:e*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Fe,{w:e*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:Math.min(60,e*.2),h:2}),l.jsx(Zn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(Zn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Fe,{w:e*.4,h:2})]})}function v8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:e*.04,gap:n*.03},children:[l.jsx(Fe,{w:e*.4,h:4,strong:!0}),l.jsx(Fe,{w:e*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:50,h:2}),l.jsx(Zn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:40,h:2}),l.jsx(Zn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:50,h:2}),l.jsx(Zn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Fe,{w:60,h:2}),l.jsx(Zn,{w:"100%",h:"100%",radius:4})]}),l.jsx(Zn,{w:Math.min(120,e*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var w8={navigation:uj,hero:dj,sidebar:fj,footer:hj,modal:mj,card:pj,text:_j,image:gj,table:yj,list:xj,button:bj,input:vj,form:wj,tabs:Sj,avatar:Cj,badge:kj,header:jj,section:Mj,grid:Ej,dropdown:Tj,toggle:Aj,search:Nj,toast:Dj,progress:Rj,chart:Bj,video:Lj,tooltip:Oj,breadcrumb:zj,pagination:$j,divider:Pj,accordion:Ij,carousel:Hj,pricing:Uj,testimonial:Vj,cta:Yj,alert:Wj,banner:Fj,stat:Xj,stepper:Gj,tag:qj,rating:Kj,map:Qj,timeline:Zj,fileUpload:Jj,codeBlock:e8,calendar:t8,notification:n8,productCard:s8,profile:o8,drawer:i8,popover:a8,logo:r8,faq:l8,gallery:c8,checkbox:u8,radio:d8,slider:f8,datePicker:h8,skeleton:m8,chip:p8,icon:_8,spinner:g8,feature:y8,team:x8,login:b8,contact:v8};function S8({type:e,width:n,height:i,text:a}){const c=w8[e];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:e})})}var C8=`svg[fill=none] {
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
}`,k8={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-design-mode-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(e)),e.textContent=C8}var Pe=k8,Sl=24,hd=5;function gx(e,n,i,a,c){let u=1/0,d=1/0;const h=e.x,p=e.x+e.width,y=e.x+e.width/2,g=e.y,b=e.y+e.height,w=e.y+e.height/2,k=!a,M=k?[h,p,y]:[...a.left?[h]:[],...a.right?[p]:[]],A=k?[g,b,w]:[...a.top?[g]:[],...a.bottom?[b]:[]],T=[];for(const me of n)i.has(me.id)||T.push(me);c&&T.push(...c);for(const me of T){const Ae=me.x,Xe=me.x+me.width,oe=me.x+me.width/2,se=me.y,z=me.y+me.height,te=me.y+me.height/2;for(const Y of M)for(const fe of[Ae,Xe,oe]){const Se=fe-Y;Math.abs(Se)<hd&&Math.abs(Se)<Math.abs(u)&&(u=Se)}for(const Y of A)for(const fe of[se,z,te]){const Se=fe-Y;Math.abs(Se)<hd&&Math.abs(Se)<Math.abs(d)&&(d=Se)}}const D=Math.abs(u)<hd?u:0,I=Math.abs(d)<hd?d:0,O=[],N=new Set,G=h+D,X=p+D,U=y+D,K=g+I,le=b+I,de=w+I;for(const me of T){const Ae=me.x,Xe=me.x+me.width,oe=me.x+me.width/2,se=me.y,z=me.y+me.height,te=me.y+me.height/2;for(const Y of[Ae,oe,Xe])for(const fe of[G,U,X])if(Math.abs(fe-Y)<.5){const Se=`x:${Math.round(Y)}`;N.has(Se)||(N.add(Se),O.push({axis:"x",pos:Y}))}for(const Y of[se,te,z])for(const fe of[K,de,le])if(Math.abs(fe-Y)<.5){const Se=`y:${Math.round(Y)}`;N.has(Se)||(N.add(Se),O.push({axis:"y",pos:Y}))}}return{dx:D,dy:I,guides:O}}function yx(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function j8({placements:e,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:y,onSelectionChange:g,deselectSignal:b,onDragMove:w,onDragEnd:k,clearSignal:M,wireframe:A}){const[T,D]=_.useState(new Set),[I,O]=_.useState(null),[N,G]=_.useState(null),[X,U]=_.useState(null),[K,le]=_.useState([]),[de,me]=_.useState(null),[Ae,Xe]=_.useState(!1),oe=_.useRef(!1),[se,z]=_.useState(new Set),te=_.useRef(new Map),Y=_.useRef(null),fe=_.useRef(null),Se=_.useRef(e);Se.current=e;const P=_.useRef(g);P.current=g;const ae=_.useRef(w);ae.current=w;const ee=_.useRef(k);ee.current=k;const xe=_.useRef(b);_.useEffect(()=>{b!==xe.current&&(xe.current=b,D(new Set))},[b]);const Te=_.useRef(M);_.useEffect(()=>{if(M!==void 0&&M!==Te.current){Te.current=M;const Q=new Set(Se.current.map(Ne=>Ne.id));Q.size>0&&(z(Q),D(new Set),fe.current=null,Wt(()=>{n([]),z(new Set)},180))}},[M,n]),_.useEffect(()=>{const Q=Ne=>{const at=Ne.target;if(!(at.tagName==="INPUT"||at.tagName==="TEXTAREA"||at.isContentEditable)){if((Ne.key==="Backspace"||Ne.key==="Delete")&&T.size>0){Ne.preventDefault();const dt=new Set(T);z(dt),D(new Set),Wt(()=>{n(Se.current.filter(He=>!dt.has(He.id))),z(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Ne.key)&&T.size>0){Ne.preventDefault();const dt=Ne.shiftKey?20:1,He=Ne.key==="ArrowLeft"?-dt:Ne.key==="ArrowRight"?dt:0,ft=Ne.key==="ArrowUp"?-dt:Ne.key==="ArrowDown"?dt:0;n(e.map(mt=>T.has(mt.id)?{...mt,x:Math.max(0,mt.x+He),y:Math.max(0,mt.y+ft)}:mt));return}if(Ne.key==="Escape"){i?a(null):T.size>0&&D(new Set);return}}};return document.addEventListener("keydown",Q),()=>document.removeEventListener("keydown",Q)},[T,i,e,n,a]);const he=_.useCallback(Q=>{if(Q.button!==0||p||Q.target.closest(`.${Pe.placement}`))return;Q.preventDefault(),Q.stopPropagation();const at=window.scrollY,Ce=Q.clientX,dt=Q.clientY;if(i){fe.current="place",d==null||d(!0);let He=!1,ft=Ce,mt=dt;const jt=ot=>{ft=ot.clientX,mt=ot.clientY;const V=Math.abs(ft-Ce),J=Math.abs(mt-dt);if((V>5||J>5)&&(He=!0),He){const be=Math.min(Ce,ft),Ee=Math.min(dt,mt),nt=Math.abs(ft-Ce),Ge=Math.abs(mt-dt);O({x:be,y:Ee,w:nt,h:Ge}),U({x:ot.clientX+12,y:ot.clientY+12,text:`${Math.round(nt)} × ${Math.round(Ge)}`})}},Rt=ot=>{window.removeEventListener("mousemove",jt),window.removeEventListener("mouseup",Rt),O(null),U(null),fe.current=null,d==null||d(!1);const V=Ct[i];let J,be,Ee,nt;He?(J=Math.min(Ce,ft),be=Math.min(dt,mt)+at,Ee=Math.max(Sl,Math.abs(ft-Ce)),nt=Math.max(Sl,Math.abs(mt-dt))):(Ee=V.width,nt=V.height,J=Ce-Ee/2,be=dt+at-nt/2),J=Math.max(0,J),be=Math.max(0,be);const Ge={id:yx(),type:i,x:J,y:be,width:Ee,height:nt,scrollY:at,timestamp:Date.now()},Be=[...e,Ge];n(Be),D(new Set([Ge.id])),a(null)};window.addEventListener("mousemove",jt),window.addEventListener("mouseup",Rt)}else{Q.shiftKey||D(new Set),fe.current="select";let He=!1;const ft=jt=>{const Rt=Math.abs(jt.clientX-Ce),ot=Math.abs(jt.clientY-dt);if((Rt>4||ot>4)&&(He=!0),He){const V=Math.min(Ce,jt.clientX),J=Math.min(dt,jt.clientY);G({x:V,y:J,w:Math.abs(jt.clientX-Ce),h:Math.abs(jt.clientY-dt)})}},mt=jt=>{if(window.removeEventListener("mousemove",ft),window.removeEventListener("mouseup",mt),fe.current=null,He){const Rt=Math.min(Ce,jt.clientX),ot=Math.min(dt,jt.clientY)+at,V=Math.abs(jt.clientX-Ce),J=Math.abs(jt.clientY-dt),be=new Set(Q.shiftKey?T:new Set);for(const Ee of e)Ee.y-at,Ee.x+Ee.width>Rt&&Ee.x<Rt+V&&Ee.y+Ee.height>ot&&Ee.y<ot+J&&be.add(Ee.id);D(be)}G(null)};window.addEventListener("mousemove",ft),window.addEventListener("mouseup",mt)}},[i,p,e,n,T]),ze=_.useCallback((Q,Ne)=>{var Ge;if(Q.button!==0)return;const at=Q.target;if(at.closest(`.${Pe.handle}`)||at.closest(`.${Pe.deleteButton}`))return;Q.preventDefault(),Q.stopPropagation();let Ce;Q.shiftKey?(Ce=new Set(T),Ce.has(Ne)?Ce.delete(Ne):Ce.add(Ne)):T.has(Ne)?Ce=new Set(T):Ce=new Set([Ne]),D(Ce),(Ce.size!==T.size||[...Ce].some(Be=>!T.has(Be)))&&((Ge=P.current)==null||Ge.call(P,Ce,Q.shiftKey));const He=Q.clientX,ft=Q.clientY,mt=new Map;for(const Be of e)Ce.has(Be.id)&&mt.set(Be.id,{x:Be.x,y:Be.y});fe.current="move",d==null||d(!0);let jt=!1,Rt=!1,ot=e,V=0,J=0;const be=new Map;for(const Be of e)mt.has(Be.id)&&be.set(Be.id,{w:Be.width,h:Be.height});const Ee=Be=>{var cn;const pe=Be.clientX-He,Ze=Be.clientY-ft;if((Math.abs(pe)>2||Math.abs(Ze)>2)&&(jt=!0),!jt)return;if(Be.altKey&&!Rt){Rt=!0;const rt=[];for(const It of e)mt.has(It.id)&&rt.push({...It,id:yx(),timestamp:Date.now()});ot=[...e,...rt]}let Ye=1/0,Je=1/0,De=-1/0,et=-1/0;for(const[rt,It]of mt){const pn=be.get(rt);pn&&(Ye=Math.min(Ye,It.x+pe),Je=Math.min(Je,It.y+Ze),De=Math.max(De,It.x+pe+pn.w),et=Math.max(et,It.y+Ze+pn.h))}const _t={x:Ye,y:Je,width:De-Ye,height:et-Je},{dx:gt,dy:Ke,guides:Lt}=gx(_t,ot,new Set(mt.keys()),void 0,y);le(Lt);const wt=pe+gt,ct=Ze+Ke;V=wt,J=ct,n(ot.map(rt=>{const It=mt.get(rt.id);return It?{...rt,x:Math.max(0,It.x+wt),y:Math.max(0,It.y+ct)}:rt})),(cn=ae.current)==null||cn.call(ae,wt,ct)},nt=()=>{var Be;window.removeEventListener("mousemove",Ee),window.removeEventListener("mouseup",nt),fe.current=null,d==null||d(!1),le([]),(Be=ee.current)==null||Be.call(ee,V,J,jt)};window.addEventListener("mousemove",Ee),window.addEventListener("mouseup",nt)},[T,e,n,d]),Qe=_.useCallback((Q,Ne,at)=>{Q.preventDefault(),Q.stopPropagation();const Ce=e.find(be=>be.id===Ne);if(!Ce)return;D(new Set([Ne])),fe.current="resize",d==null||d(!0);const dt=Q.clientX,He=Q.clientY,ft=Ce.width,mt=Ce.height,jt=Ce.x,Rt=Ce.y,ot={left:at.includes("w"),right:at.includes("e"),top:at.includes("n"),bottom:at.includes("s")},V=be=>{const Ee=be.clientX-dt,nt=be.clientY-He;let Ge=ft,Be=mt,pe=jt,Ze=Rt;at.includes("e")&&(Ge=Math.max(Sl,ft+Ee)),at.includes("w")&&(Ge=Math.max(Sl,ft-Ee),pe=jt+ft-Ge),at.includes("s")&&(Be=Math.max(Sl,mt+nt)),at.includes("n")&&(Be=Math.max(Sl,mt-nt),Ze=Rt+mt-Be);const Ye={x:pe,y:Ze,width:Ge,height:Be},{dx:Je,dy:De,guides:et}=gx(Ye,Se.current,new Set([Ne]),ot,y);le(et),Je!==0&&(ot.right?Ge+=Je:ot.left&&(pe+=Je,Ge-=Je)),De!==0&&(ot.bottom?Be+=De:ot.top&&(Ze+=De,Be-=De)),n(Se.current.map(_t=>_t.id===Ne?{..._t,x:pe,y:Ze,width:Ge,height:Be}:_t)),U({x:be.clientX+12,y:be.clientY+12,text:`${Math.round(Ge)} × ${Math.round(Be)}`})},J=()=>{window.removeEventListener("mousemove",V),window.removeEventListener("mouseup",J),U(null),fe.current=null,d==null||d(!1),le([])};window.addEventListener("mousemove",V),window.addEventListener("mouseup",J)},[e,n,d]),We=_.useCallback(Q=>{fe.current=null,z(Ne=>{const at=new Set(Ne);return at.add(Q),at}),D(Ne=>{const at=new Set(Ne);return at.delete(Q),at}),Wt(()=>{n(Se.current.filter(Ne=>Ne.id!==Q)),z(Ne=>{const at=new Set(Ne);return at.delete(Q),at})},180)},[n]),ut={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},kt=_.useCallback(Q=>{const Ne=e.find(at=>at.id===Q);Ne&&(oe.current=!!Ne.text,me(Q),Xe(!1))},[e]),bt=_.useCallback(()=>{de&&(Xe(!0),Wt(()=>{me(null),Xe(!1)},150))},[de]);_.useEffect(()=>{u&&de&&bt()},[u]);const st=_.useCallback(Q=>{de&&(n(e.map(Ne=>Ne.id===de?{...Ne,text:Q.trim()||void 0}:Ne)),bt())},[de,e,n,bt]),Dt=typeof window<"u"?window.scrollY:0,lt=["nw","ne","se","sw"],qt=A?"#f97316":"#3c82f7",Kt=[{dir:"n",cls:Pe.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:qt})})},{dir:"e",cls:Pe.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:qt})})},{dir:"s",cls:Pe.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:qt})})},{dir:"w",cls:Pe.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:qt})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:Y,className:`${Pe.overlay} ${c?"":Pe.light} ${i?Pe.placing:""} ${p?Pe.passthrough:""} ${u?Pe.overlayExiting:""} ${A?Pe.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:he,children:e.map(Q=>{var dt;const Ne=T.has(Q.id),at=((dt=ia[Q.type])==null?void 0:dt.label)||Q.type,Ce=Q.y-Dt;return l.jsxs("div",{"data-design-placement":Q.id,className:`${Pe.placement} ${Ne?Pe.selected:""} ${se.has(Q.id)?Pe.exiting:""}`,style:{left:Q.x,top:Ce,width:Q.width,height:Q.height,position:"fixed"},onMouseDown:He=>ze(He,Q.id),onDoubleClick:()=>kt(Q.id),children:[l.jsx("span",{className:Pe.placementLabel,children:at}),l.jsx("span",{className:`${Pe.placementAnnotation} ${Q.text?Pe.annotationVisible:""}`,children:(Q.text&&te.current.set(Q.id,Q.text),Q.text||te.current.get(Q.id)||"")}),l.jsx("div",{className:Pe.placementContent,children:l.jsx(S8,{type:Q.type,width:Q.width,height:Q.height,text:Q.text})}),l.jsx("div",{className:Pe.deleteButton,onMouseDown:He=>He.stopPropagation(),onClick:()=>We(Q.id),children:"✕"}),lt.map(He=>l.jsx("div",{className:`${Pe.handle} ${Pe[`handle${He.charAt(0).toUpperCase()}${He.slice(1)}`]}`,onMouseDown:ft=>Qe(ft,Q.id,He)},He)),Kt.map(({dir:He,cls:ft,arrow:mt})=>l.jsx("div",{className:`${Pe.edgeHandle} ${ft}`,onMouseDown:jt=>Qe(jt,Q.id,He),children:mt},He))]},Q.id)})}),de&&(()=>{var Rt,ot;const Q=e.find(V=>V.id===de);if(!Q)return null;const Ne=Q.y-Dt,at=Q.x+Q.width/2,Ce=Ne-8,dt=Ne+Q.height+8,He=Ce>200,ft=dt<window.innerHeight-100,mt=Math.max(160,Math.min(window.innerWidth-160,at));let jt;return He?jt={left:mt,bottom:window.innerHeight-Ce}:ft?jt={left:mt,top:dt}:jt={left:mt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(Xd,{element:((Rt=ia[Q.type])==null?void 0:Rt.label)||Q.type,placeholder:ut[Q.type]||"Label or content text",initialValue:(ot=Q.text)!=null?ot:"",submitLabel:oe.current?"Save":"Set",onSubmit:st,onCancel:bt,onDelete:oe.current?()=>{st("")}:void 0,isExiting:Ae,lightMode:!c,style:jt})})(),I&&l.jsx("div",{className:Pe.drawBox,style:{left:I.x,top:I.y,width:I.w,height:I.h},"data-feedback-toolbar":!0}),N&&l.jsx("div",{className:Pe.selectBox,style:{left:N.x,top:N.y,width:N.w,height:N.h},"data-feedback-toolbar":!0}),X&&l.jsx("div",{className:Pe.sizeIndicator,style:{left:X.x,top:X.y},"data-feedback-toolbar":!0,children:X.text}),K.map((Q,Ne)=>l.jsx("div",{className:Pe.guideLine,style:Q.axis==="x"?{position:"fixed",left:Q.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:Q.pos-Dt,right:0,height:1},"data-feedback-toolbar":!0},`${Q.axis}-${Q.pos}-${Ne}`))]})}function M8(e){if(!e)return"";const n=e.scrollTop>2,i=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${n?Pe.fadeTop:""} ${i?Pe.fadeBottom:""}`}var $="currentColor",$e="0.5";function E8({type:e}){switch(e){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:$,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:$,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:$,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:$,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:$,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:$,strokeWidth:$e})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:$,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:$,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:$,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:$,strokeWidth:$e})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:$,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:$,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:$,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:$,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:$,strokeWidth:$e,fill:$,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:$e})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:$,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:$,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:$,strokeWidth:$e})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:$,strokeWidth:$e,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:$,strokeWidth:$e,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:$,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:$,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:$,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:$,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:$,strokeWidth:$e}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:$,strokeWidth:$e,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:$,strokeWidth:$e,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:$,strokeWidth:$e})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:$,strokeWidth:$e})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:$,strokeWidth:$e,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:$,strokeWidth:$e,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:$,strokeWidth:$e}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:$,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:$,strokeWidth:$e}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:$,strokeWidth:$e}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:$,strokeWidth:$e})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:$,strokeWidth:$e,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:$,strokeWidth:$e,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:$,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:$,opacity:".15",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:$e})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:$,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:$,strokeWidth:$e}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:$,strokeWidth:$e,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:$,strokeWidth:$e})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:$,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:$,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:$,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:$e}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:$,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:$,strokeWidth:$e,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:$,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:$,strokeWidth:$e})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:$,strokeWidth:$e}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:$,strokeWidth:$e,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:$,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:$,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:$,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:$,strokeWidth:$e})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:$,opacity:".2",stroke:$,strokeWidth:$e}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:$,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:$,strokeWidth:$e}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:$,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:$,strokeWidth:$e})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:$,strokeWidth:$e,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:$,strokeWidth:$e,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:$,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:$,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:$,strokeWidth:$e,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:$,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:$,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:$,opacity:".15",stroke:$,strokeWidth:$e})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:$,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:$,opacity:".2",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:$,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:$e,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:$,strokeWidth:$e,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:$,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:$,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:$,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:$,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:$,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:$,strokeWidth:$e}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:$,strokeWidth:$e,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:$,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:$,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:$,strokeWidth:$e})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:$,strokeWidth:$e,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:$,strokeWidth:$e})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:$,strokeWidth:$e}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:$,strokeWidth:$e,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:$,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:$,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:$,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:$,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:$e})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:$,strokeWidth:$e}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:$,strokeWidth:$e,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:$,strokeWidth:$e}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:$,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:$,strokeWidth:$e})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:$,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:$,strokeWidth:$e,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:$,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:$,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:$,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:$,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:$,opacity:".08",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:$,strokeWidth:$e,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:$,strokeWidth:$e,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:$,strokeWidth:$e,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:$,strokeWidth:$e,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:$,strokeWidth:$e,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:$,strokeWidth:$e,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:$,strokeWidth:$e}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:$,strokeWidth:$e,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:$,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:$,strokeWidth:$e,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:$,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:$,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:$,strokeWidth:$e}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:$,opacity:".2"})]});default:return null}}function T8({activeType:e,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${Pe.placeScroll} ${c||""}`,children:o2.map(d=>l.jsxs("div",{className:Pe.paletteSection,children:[l.jsx("div",{className:Pe.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${Pe.paletteItem} ${e===h.type?Pe.active:""} ${u?Pe.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:Pe.paletteItemIcon,children:l.jsx(E8,{type:h.type})}),l.jsx("span",{className:Pe.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function A8({value:e,suffix:n}){const[i,a]=_.useState(null),[c,u]=_.useState(n),[d,h]=_.useState("up"),p=_.useRef(e),y=_.useRef(n),g=_.useRef(),b=i!==null&&c!==n;return _.useEffect(()=>{if(e!==p.current){if(e===0){p.current=e,y.current=n,a(null);return}h(e>p.current?"up":"down"),a(p.current),u(y.current),p.current=e,y.current=n,clearTimeout(g.current),g.current=Wt(()=>a(null),250)}else y.current=n},[e,n]),i===null?l.jsxs(l.Fragment,{children:[e,n?` ${n}`:""]}):b?l.jsxs("span",{className:Pe.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[e," ",n]}),l.jsxs("span",{className:`${Pe.rollingNum} ${d==="up"?Pe.exitUp:Pe.exitDown}`,children:[i," ",c]},`o${i}-${e}`),l.jsxs("span",{className:`${Pe.rollingNum} ${d==="up"?Pe.enterUp:Pe.enterDown}`,children:[e," ",n]},`n${e}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:Pe.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:e}),l.jsx("span",{className:`${Pe.rollingNum} ${d==="up"?Pe.exitUp:Pe.exitDown}`,children:i},`o${i}-${e}`),l.jsx("span",{className:`${Pe.rollingNum} ${d==="up"?Pe.enterUp:Pe.enterDown}`,children:e},`n${e}`)]}),n?` ${n}`:""]})}function N8({activeType:e,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:y,blankCanvas:g,onBlankCanvasChange:b,wireframePurpose:w,onWireframePurposeChange:k,Tooltip:M}){const[A,T]=_.useState(!1),[D,I]=_.useState("exit"),[O,N]=_.useState(!1),[G,X]=_.useState(!0),U=_.useRef(0),K=_.useRef(""),le=_.useRef(0),de=_.useRef(),me=_.useRef(null),[Ae,Xe]=_.useState("");_.useEffect(()=>(u?(T(!0),clearTimeout(de.current),cancelAnimationFrame(le.current),le.current=Al(()=>{le.current=Al(()=>{I("enter")})})):(cancelAnimationFrame(le.current),I("exit"),clearTimeout(de.current),de.current=Wt(()=>{T(!1),d==null||d()},200)),()=>cancelAnimationFrame(le.current)),[u]);const oe=h>0||a>0,se=h+a;return se>0&&(U.current=se,K.current=g?se===1?"Component":"Components":se===1?"Change":"Changes"),_.useEffect(()=>{if(oe)O?X(!1):(X(!0),N(!0),Al(()=>{Al(()=>{X(!1)})}));else{X(!0);const z=Wt(()=>N(!1),300);return()=>clearTimeout(z)}},[oe]),_.useEffect(()=>{if(!A)return;const z=me.current;if(!z)return;const te=()=>Xe(M8(z));te(),z.addEventListener("scroll",te,{passive:!0});const Y=new ResizeObserver(te);return Y.observe(z),()=>{z.removeEventListener("scroll",te),Y.disconnect()}},[A]),A?l.jsxs("div",{className:`${Pe.palette} ${Pe[D]} ${i?"":Pe.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:z=>z.stopPropagation(),onMouseDown:z=>z.stopPropagation(),onTransitionEnd:z=>{z.target===z.currentTarget&&(u||(clearTimeout(de.current),T(!1),I("exit"),d==null||d()))},children:[l.jsxs("div",{className:Pe.paletteHeader,children:[l.jsx("div",{className:Pe.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:Pe.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${Pe.canvasToggle} ${g?Pe.active:""}`,onClick:()=>b(!g),children:[l.jsx("span",{className:Pe.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:Pe.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${Pe.wireframePurposeWrap} ${g?"":Pe.collapsed}`,children:l.jsx("div",{className:Pe.wireframePurposeInner,children:l.jsx("textarea",{className:Pe.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:w,onChange:z=>k(z.target.value),rows:2})})}),l.jsx(T8,{activeType:e,onSelect:n,onDragStart:y,scrollRef:me,fadeClass:Ae,blankCanvas:g}),O&&l.jsx("div",{className:`${Pe.paletteFooterWrap} ${G?Pe.footerHidden:""}`,children:l.jsx("div",{className:Pe.paletteFooterInner,children:l.jsx("div",{className:Pe.paletteFooterInnerContent,children:l.jsxs("div",{className:Pe.paletteFooter,children:[l.jsx("span",{className:Pe.paletteFooterCount,children:l.jsx(A8,{value:U.current,suffix:K.current})}),l.jsx("button",{className:Pe.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function Ll(e){if(e.parentElement)return e.parentElement;const n=e.getRootNode();return n instanceof ShadowRoot?n.host:null}function oi(e,n){let i=e;for(;i;){if(i.matches(n))return i;i=Ll(i)}return null}function D8(e,n=4){const i=[];let a=e,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(y=>y.length>2&&!y.match(/^[a-z]{1,2}$/)&&!y.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=Ll(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function Nl(e){var a,c,u,d,h,p,y,g;const n=D8(e);if(e.dataset.element)return{name:e.dataset.element,path:n};const i=e.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const b=oi(e,"svg");if(b){const w=Ll(b);if(w instanceof HTMLElement)return{name:`graphic in ${Nl(w).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const b=Ll(e);if((b==null?void 0:b.tagName.toLowerCase())==="button"){const w=(a=b.textContent)==null?void 0:a.trim();return{name:w?`icon in "${w}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const b=(c=e.textContent)==null?void 0:c.trim(),w=e.getAttribute("aria-label");return w?{name:`button [${w}]`,path:n}:{name:b?`button "${b.slice(0,25)}"`:"button",path:n}}if(i==="a"){const b=(u=e.textContent)==null?void 0:u.trim(),w=e.getAttribute("href");return b?{name:`link "${b.slice(0,25)}"`,path:n}:w?{name:`link to ${w.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const b=e.getAttribute("type")||"text",w=e.getAttribute("placeholder"),k=e.getAttribute("name");return w?{name:`input "${w}"`,path:n}:k?{name:`input [${k}]`,path:n}:{name:`${b} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const b=(d=e.textContent)==null?void 0:d.trim();return{name:b?`${i} "${b.slice(0,35)}"`:i,path:n}}if(i==="p"){const b=(h=e.textContent)==null?void 0:h.trim();return b?{name:`paragraph: "${b.slice(0,40)}${b.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const b=(p=e.textContent)==null?void 0:p.trim();return b&&b.length<40?{name:`"${b}"`,path:n}:{name:i,path:n}}if(i==="li"){const b=(y=e.textContent)==null?void 0:y.trim();return b&&b.length<40?{name:`list item: "${b.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const b=(g=e.textContent)==null?void 0:g.trim();return b&&b.length<30?{name:`code: \`${b}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const b=e.getAttribute("alt");return{name:b?`image "${b.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const b=e.className,w=e.getAttribute("role"),k=e.getAttribute("aria-label");if(k)return{name:`${i} [${k}]`,path:n};if(w)return{name:`${w}`,path:n};if(typeof b=="string"&&b){const M=b.split(/[\s_-]+/).map(A=>A.replace(/[A-Z0-9]{5,}.*$/,"")).filter(A=>A.length>2&&!/^[a-z]{1,2}$/.test(A)).slice(0,2);if(M.length>0)return{name:M.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function Ec(e){var u,d,h;const n=[],i=(u=e.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=e.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=e.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function md(e){const n=Ll(e);if(!n)return"";const c=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(n.children)).filter(g=>g!==e&&g instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(g=>{var M;const b=g.tagName.toLowerCase(),w=g.className;let k="";if(typeof w=="string"&&w){const A=w.split(/\s+/).map(T=>T.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(T=>T.length>2&&!/^[a-z]{1,2}$/.test(T));A&&(k=`.${A}`)}if(b==="button"||b==="a"){const A=(M=g.textContent)==null?void 0:M.trim().slice(0,15);if(A)return`${b}${k} "${A}"`}return`${b}${k}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const g=n.className.split(/\s+/).map(b=>b.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(b=>b.length>2&&!/^[a-z]{1,2}$/.test(b));g&&(h=`.${g}`)}const p=n.children.length,y=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+y}function Tc(e){const n=e.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var i2=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),R8=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),B8=new Set(["input","textarea","select"]),L8=new Set(["img","video","canvas","svg"]),O8=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function pd(e){if(typeof window>"u")return{};const n=window.getComputedStyle(e),i={},a=e.tagName.toLowerCase();let c;R8.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&e.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:B8.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:L8.has(a)?c=["width","height","objectFit","borderRadius"]:O8.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!i2.has(h)&&(i[u]=h)}return i}var z8=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function _d(e){if(typeof window>"u")return"";const n=window.getComputedStyle(e),i=[];for(const a of z8){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!i2.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function $8(e){if(!e)return;const n={},i=e.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function gd(e){const n=[],i=e.getAttribute("role"),a=e.getAttribute("aria-label"),c=e.getAttribute("aria-describedby"),u=e.getAttribute("tabindex"),d=e.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),e.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function yd(e){const n=[];let i=e;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=Ll(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var P8=new Set(["nav","header","main","section","article","footer","aside"]),hp={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},xx={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},I8=new Set(["script","style","noscript","link","meta"]),H8=40;function a2(e){let n=e;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Yr(e){const n=e.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className=="string"){const c=e.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=e.parentElement;if(i){const c=Array.from(i.children).indexOf(e)+1;return`${i===document.body?"body":Yr(i)} > ${n}:nth-child(${c})`}return n}function Gd(e){var d;const n=e.tagName.toLowerCase(),i=e.getAttribute("aria-label");if(i)return i;const a=e.getAttribute("role");if(a&&hp[a])return hp[a];if(xx[n])return xx[n];const c=e.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=Nl(e);return u.charAt(0).toUpperCase()+u.slice(1)}function r2(e){const n=e.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function l2(e){var a;const n=(a=e.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function U8(){const e=document.querySelector("main")||document.body,n=Array.from(e.children);let i=n;e!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(I8.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<H8)return;const y=P8.has(d),g=c.getAttribute("role")&&hp[c.getAttribute("role")],b=d==="div"&&p.height>=60;if(!y&&!g&&!b)return;const w=window.scrollY,k=a2(c),M={x:p.x,y:k?p.y:p.y+w,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Gd(c),tagName:d,selector:Yr(c),role:c.getAttribute("role"),className:r2(c),textSnippet:l2(c),originalRect:M,currentRect:{...M},originalIndex:u,isFixed:k})}),a}function V8(e){const n=window.scrollY,i=e.getBoundingClientRect(),a=a2(e),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=e.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Gd(e),tagName:e.tagName.toLowerCase(),selector:Yr(e),role:e.getAttribute("role"),className:r2(e),textSnippet:l2(e),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var bx={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},vx=["nw","n","ne","e","se","s","sw","w"],xd=24,wx=16,bd=5;function Sx(e,n,i,a){let c=1/0,u=1/0;const d=e.x,h=e.x+e.width,p=e.x+e.width/2,y=e.y,g=e.y+e.height,b=e.y+e.height/2,w=[];for(const U of n)i.has(U.id)||w.push(U.currentRect);a&&w.push(...a);for(const U of w){const K=U.x,le=U.x+U.width,de=U.x+U.width/2,me=U.y,Ae=U.y+U.height,Xe=U.y+U.height/2;for(const oe of[d,h,p])for(const se of[K,le,de]){const z=se-oe;Math.abs(z)<bd&&Math.abs(z)<Math.abs(c)&&(c=z)}for(const oe of[y,g,b])for(const se of[me,Ae,Xe]){const z=se-oe;Math.abs(z)<bd&&Math.abs(z)<Math.abs(u)&&(u=z)}}const k=Math.abs(c)<bd?c:0,M=Math.abs(u)<bd?u:0,A=[],T=new Set,D=d+k,I=h+k,O=p+k,N=y+M,G=g+M,X=b+M;for(const U of w){const K=U.x,le=U.x+U.width,de=U.x+U.width/2,me=U.y,Ae=U.y+U.height,Xe=U.y+U.height/2;for(const oe of[K,de,le])for(const se of[D,O,I])if(Math.abs(se-oe)<.5){const z=`x:${Math.round(oe)}`;T.has(z)||(T.add(z),A.push({axis:"x",pos:oe}))}for(const oe of[me,Xe,Ae])for(const se of[N,X,G])if(Math.abs(se-oe)<.5){const z=`y:${Math.round(oe)}`;T.has(z)||(T.add(z),A.push({axis:"y",pos:oe}))}}return{dx:k,dy:M,guides:A}}var Y8=new Set(["script","style","noscript","link","meta","br","hr"]);function Cx(e){let n=e;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(Y8.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=wx&&i.height>=wx)return n;n=n.parentElement}return null}function W8({rearrangeState:e,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:y,onDragEnd:g,clearSignal:b}){const{sections:w}=e,k=_.useRef(e);k.current=e;const[M,A]=_.useState(new Set),[T,D]=_.useState(!1),I=_.useRef(b);_.useEffect(()=>{b!==void 0&&b!==I.current&&(I.current=b,w.length>0&&D(!0))},[b,w.length]);const O=_.useRef(p);_.useEffect(()=>{p!==O.current&&(O.current=p,A(new Set))},[p]);const[N,G]=_.useState(null),[X,U]=_.useState(!1),K=_.useRef(!1),le=_.useCallback(V=>{const J=w.find(be=>be.id===V);J&&(K.current=!!J.note,G(V),U(!1))},[w]),de=_.useCallback(()=>{N&&(U(!0),Wt(()=>{G(null),U(!1)},150))},[N]),me=_.useCallback(V=>{N&&(n({...e,sections:w.map(J=>J.id===N?{...J,note:V.trim()||void 0}:J)}),de())},[N,w,e,n,de]);_.useEffect(()=>{a&&N&&de()},[a]);const[Ae,Xe]=_.useState(new Set),oe=_.useRef(new Map),[se,z]=_.useState(null),[te,Y]=_.useState(null),[fe,Se]=_.useState([]),[P,ae]=_.useState(0),ee=_.useRef(null),xe=_.useRef(new Set),Te=_.useRef(new Map),[he,ze]=_.useState(new Map),[Qe,We]=_.useState(new Map),ut=_.useRef(new Set),kt=_.useRef(new Map),bt=_.useRef(h);bt.current=h;const st=_.useRef(y);st.current=y;const Dt=_.useRef(g);Dt.current=g,_.useEffect(()=>{u&&A(new Set)},[u]);const[lt,qt]=_.useState(()=>!e.sections.some(V=>{const J=V.originalRect,be=V.currentRect;return Math.abs(J.x-be.x)>1||Math.abs(J.y-be.y)>1||Math.abs(J.width-be.width)>1||Math.abs(J.height-be.height)>1}));_.useEffect(()=>{if(!lt){const V=Wt(()=>qt(!0),380);return()=>clearTimeout(V)}},[]);const Kt=_.useRef(new Set);_.useEffect(()=>{Kt.current=new Set(w.map(V=>V.selector))},[w]),_.useEffect(()=>{const V=()=>ae(window.scrollY);return V(),window.addEventListener("scroll",V,{passive:!0}),window.addEventListener("resize",V,{passive:!0}),()=>{window.removeEventListener("scroll",V),window.removeEventListener("resize",V)}},[]),_.useEffect(()=>{const V=J=>{if(ee.current){z(null);return}const be=document.elementFromPoint(J.clientX,J.clientY);if(!be){z(null);return}if(be.closest("[data-feedback-toolbar]")){z(null);return}if(be.closest("[data-design-placement]")){z(null);return}if(be.closest("[data-annotation-popup]")){z(null);return}const Ee=Cx(be);if(!Ee){z(null);return}for(const Ge of Kt.current)try{const Be=document.querySelector(Ge);if(Be&&(Be===Ee||Ee.contains(Be))){z(null);return}}catch{}const nt=Ee.getBoundingClientRect();z({x:nt.x,y:nt.y,w:nt.width,h:nt.height})};return document.addEventListener("mousemove",V,{passive:!0}),()=>document.removeEventListener("mousemove",V)},[w]),_.useEffect(()=>{const V=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=V}},[]),_.useEffect(()=>{const V=J=>{var Be,pe,Ze,Ye;if(ee.current||J.button!==0)return;const be=J.target;if(!be||be.closest("[data-feedback-toolbar]")||be.closest("[data-design-placement]")||be.closest("[data-annotation-popup]"))return;const Ee=Cx(be);let nt=!1;if(Ee)for(const Je of Kt.current)try{const De=document.querySelector(Je);if(De&&(De===Ee||Ee.contains(De))){nt=!0;break}}catch{}const Ge=!!(J.shiftKey||J.metaKey||J.ctrlKey);if(Ee&&!nt){J.preventDefault(),J.stopPropagation();const Je=V8(Ee),De=[...w,Je],et=[...e.originalOrder,Je.id];n({...e,sections:De,originalOrder:et});const _t=new Set([Je.id]);A(_t),(Be=bt.current)==null||Be.call(bt,_t,Ge),z(null);const gt=J.clientX,Ke=J.clientY,Lt={x:Je.currentRect.x,y:Je.currentRect.y};Je.originalRect;let wt=!1,ct=0,cn=0;ee.current="move";const rt=pn=>{var At;const Et=pn.clientX-gt,yt=pn.clientY-Ke;if(!wt&&(Math.abs(Et)>2||Math.abs(yt)>2)&&(wt=!0),!wt)return;const un={x:Lt.x+Et,y:Lt.y+yt,width:Je.currentRect.width,height:Je.currentRect.height},tn=Sx(un,De,new Set([Je.id]),d);Se(tn.guides);const Qt=Et+tn.dx,$t=yt+tn.dy;ct=Qt,cn=$t;const Jt=document.querySelector(`[data-rearrange-section="${Je.id}"]`);Jt&&(Jt.style.transform=`translate(${Qt}px, ${$t}px)`),ze(new Map([[Je.id,{x:Lt.x+Qt,y:Lt.y+$t,width:Je.currentRect.width,height:Je.currentRect.height}]])),(At=st.current)==null||At.call(st,Qt,$t)},It=()=>{var Et;window.removeEventListener("mousemove",rt),window.removeEventListener("mouseup",It),ee.current=null,Se([]),ze(new Map);const pn=document.querySelector(`[data-rearrange-section="${Je.id}"]`);pn&&(pn.style.transform=""),wt&&n({...e,sections:De.map(yt=>yt.id===Je.id?{...yt,currentRect:{...yt.currentRect,x:Math.max(0,Lt.x+ct),y:Math.max(0,Lt.y+cn)}}:yt),originalOrder:et}),(Et=Dt.current)==null||Et.call(Dt,ct,cn,wt)};window.addEventListener("mousemove",rt),window.addEventListener("mouseup",It)}else if(nt&&Ee){J.preventDefault();for(const Je of w)try{const De=document.querySelector(Je.selector);if(De&&De===Ee){const et=new Set([Je.id]);A(et),(pe=bt.current)==null||pe.call(bt,et,Ge);return}}catch{}Ge||(A(new Set),(Ze=bt.current)==null||Ze.call(bt,new Set,!1))}else Ge||(A(new Set),(Ye=bt.current)==null||Ye.call(bt,new Set,!1))};return document.addEventListener("mousedown",V,!0),()=>document.removeEventListener("mousedown",V,!0)},[w,e,n]),_.useEffect(()=>{const V=J=>{const be=J.target;if(!(be.tagName==="INPUT"||be.tagName==="TEXTAREA"||be.isContentEditable)){if((J.key==="Backspace"||J.key==="Delete")&&M.size>0){J.preventDefault();const Ee=new Set(M);Xe(nt=>{const Ge=new Set(nt);for(const Be of Ee)Ge.add(Be);return Ge}),A(new Set),Wt(()=>{const nt=k.current;n({...nt,sections:nt.sections.filter(Ge=>!Ee.has(Ge.id)),originalOrder:nt.originalOrder.filter(Ge=>!Ee.has(Ge))}),Xe(Ge=>{const Be=new Set(Ge);for(const pe of Ee)Be.delete(pe);return Be})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(J.key)&&M.size>0){J.preventDefault();const Ee=J.shiftKey?20:1,nt=J.key==="ArrowLeft"?-Ee:J.key==="ArrowRight"?Ee:0,Ge=J.key==="ArrowUp"?-Ee:J.key==="ArrowDown"?Ee:0;n({...e,sections:w.map(Be=>M.has(Be.id)?{...Be,currentRect:{...Be.currentRect,x:Math.max(0,Be.currentRect.x+nt),y:Math.max(0,Be.currentRect.y+Ge)}}:Be)});return}J.key==="Escape"&&M.size>0&&A(new Set)}};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[M,w,e,n]);const Q=_.useCallback((V,J)=>{var gt;if(V.button!==0)return;const be=V.target;if(be.closest(`.${Pe.handle}`)||be.closest(`.${Pe.deleteButton}`))return;V.preventDefault(),V.stopPropagation();let Ee;V.shiftKey||V.metaKey||V.ctrlKey?(Ee=new Set(M),Ee.has(J)?Ee.delete(J):Ee.add(J)):M.has(J)?Ee=new Set(M):Ee=new Set([J]),A(Ee),(Ee.size!==M.size||[...Ee].some(Ke=>!M.has(Ke)))&&((gt=bt.current)==null||gt.call(bt,Ee,!!(V.shiftKey||V.metaKey||V.ctrlKey)));const Ge=V.clientX,Be=V.clientY,pe=new Map;for(const Ke of w)Ee.has(Ke.id)&&pe.set(Ke.id,{x:Ke.currentRect.x,y:Ke.currentRect.y});ee.current="move";let Ze=!1,Ye=0,Je=0;const De=new Map;for(const Ke of w)if(Ee.has(Ke.id)){const Lt=document.querySelector(`[data-rearrange-section="${Ke.id}"]`);De.set(Ke.id,{outlineEl:Lt,curW:Ke.currentRect.width,curH:Ke.currentRect.height})}const et=Ke=>{var tn;const Lt=Ke.clientX-Ge,wt=Ke.clientY-Be;if(Lt===0&&wt===0)return;Ze=!0;let ct=1/0,cn=1/0,rt=-1/0,It=-1/0;for(const[Qt,{curW:$t,curH:Jt}]of De){const At=pe.get(Qt);if(!At)continue;const bn=At.x+Lt,tt=At.y+wt;ct=Math.min(ct,bn),cn=Math.min(cn,tt),rt=Math.max(rt,bn+$t),It=Math.max(It,tt+Jt)}const pn=Sx({x:ct,y:cn,width:rt-ct,height:It-cn},w,Ee,d),Et=Lt+pn.dx,yt=wt+pn.dy;Ye=Et,Je=yt,Se(pn.guides);for(const[,{outlineEl:Qt}]of De)Qt&&(Qt.style.transform=`translate(${Et}px, ${yt}px)`);const un=new Map;for(const[Qt,{curW:$t,curH:Jt}]of De){const At=pe.get(Qt);if(At){const bn={x:Math.max(0,At.x+Et),y:Math.max(0,At.y+yt),width:$t,height:Jt};un.set(Qt,bn)}}ze(un),(tn=st.current)==null||tn.call(st,Et,yt)},_t=Ke=>{var Lt,wt;window.removeEventListener("mousemove",et),window.removeEventListener("mouseup",_t),ee.current=null,Se([]),ze(new Map);for(const[,{outlineEl:ct}]of De)ct&&(ct.style.transform="");if(Ze){const ct=Ke.clientX-Ge,cn=Ke.clientY-Be;if(Math.abs(ct)<5&&Math.abs(cn)<5)n({...e,sections:w.map(rt=>{const It=pe.get(rt.id);return It?{...rt,currentRect:{...rt.currentRect,x:It.x,y:It.y}}:rt})});else{n({...e,sections:w.map(rt=>{const It=pe.get(rt.id);return It?{...rt,currentRect:{...rt.currentRect,x:Math.max(0,It.x+Ye),y:Math.max(0,It.y+Je)}}:rt})}),(Lt=Dt.current)==null||Lt.call(Dt,Ye,Je,!0);return}}(wt=Dt.current)==null||wt.call(Dt,0,0,!1)};window.addEventListener("mousemove",et),window.addEventListener("mouseup",_t)},[M,w,e,n]),Ne=_.useCallback((V,J,be)=>{V.preventDefault(),V.stopPropagation();const Ee=w.find(et=>et.id===J);if(!Ee)return;A(new Set([J])),ee.current="resize";const nt=V.clientX,Ge=V.clientY,Be={...Ee.currentRect};Ee.originalRect;const pe=Be.width/Be.height;let Ze={...Be};const Ye=document.querySelector(`[data-rearrange-section="${J}"]`),Je=et=>{const _t=et.clientX-nt,gt=et.clientY-Ge;let Ke=Be.x,Lt=Be.y,wt=Be.width,ct=Be.height;if(be.includes("e")&&(wt=Math.max(xd,Be.width+_t)),be.includes("w")&&(wt=Math.max(xd,Be.width-_t),Ke=Be.x+Be.width-wt),be.includes("s")&&(ct=Math.max(xd,Be.height+gt)),be.includes("n")&&(ct=Math.max(xd,Be.height-gt),Lt=Be.y+Be.height-ct),et.shiftKey)if(be.length===2){const rt=Math.abs(wt-Be.width),It=Math.abs(ct-Be.height);rt>It?ct=wt/pe:wt=ct*pe,be.includes("w")&&(Ke=Be.x+Be.width-wt),be.includes("n")&&(Lt=Be.y+Be.height-ct)}else be==="e"||be==="w"?ct=wt/pe:wt=ct*pe,be==="w"&&(Ke=Be.x+Be.width-wt),be==="n"&&(Lt=Be.y+Be.height-ct);Ze={x:Ke,y:Lt,width:wt,height:ct},Ye&&(Ye.style.left=`${Ke}px`,Ye.style.top=`${Lt-P}px`,Ye.style.width=`${wt}px`,Ye.style.height=`${ct}px`),Y({x:et.clientX+12,y:et.clientY+12,text:`${Math.round(wt)} × ${Math.round(ct)}`}),ze(new Map([[J,Ze]]))},De=()=>{window.removeEventListener("mousemove",Je),window.removeEventListener("mouseup",De),Y(null),ee.current=null,ze(new Map),n({...e,sections:w.map(et=>et.id===J?{...et,currentRect:Ze}:et)})};window.addEventListener("mousemove",Je),window.addEventListener("mouseup",De)},[w,e,n,P]),at=_.useCallback(V=>{Xe(J=>{const be=new Set(J);return be.add(V),be}),A(J=>{const be=new Set(J);return be.delete(V),be}),Wt(()=>{const J=k.current;n({...J,sections:J.sections.filter(be=>be.id!==V),originalOrder:J.originalOrder.filter(be=>be!==V)}),Xe(be=>{const Ee=new Set(be);return Ee.delete(V),Ee})},180)},[n]),Ce=V=>{const J=V.originalRect,be=V.currentRect;return Math.abs(J.x-be.x)>1||Math.abs(J.y-be.y)>1||Math.abs(J.width-be.width)>1||Math.abs(J.height-be.height)>1},dt=V=>{const J=V.originalRect,be=V.currentRect;return Math.abs(J.x-be.x)>1||Math.abs(J.y-be.y)>1},He=V=>{const J=V.originalRect,be=V.currentRect;return Math.abs(J.width-be.width)>1||Math.abs(J.height-be.height)>1};for(const V of w)Te.current.has(V.id)||(dt(V)?Te.current.set(V.id,"move"):He(V)&&Te.current.set(V.id,"resize"));for(const V of Te.current.keys())w.some(J=>J.id===V)||Te.current.delete(V);const ft=w.filter(V=>{try{if(Ae.has(V.id)||M.has(V.id))return!0;const J=document.querySelector(V.selector);if(!J)return!1;const be=J.getBoundingClientRect(),Ee=V.originalRect;return Math.abs(be.width-Ee.width)+Math.abs(be.height-Ee.height)<200}catch{return!1}}),mt=ft.filter(V=>Ce(V)),jt=ft.filter(V=>!Ce(V)),Rt=new Set(mt.map(V=>V.id));for(const V of xe.current)Rt.has(V)||xe.current.delete(V);const ot=[...Rt].sort().join(",");for(const V of mt)kt.current.set(V.id,{currentRect:V.currentRect,originalRect:V.originalRect,isFixed:V.isFixed});return _.useEffect(()=>{const V=ut.current;ut.current=Rt;const J=new Map;for(const be of V)if(!Rt.has(be)){if(!w.some(nt=>nt.id===be))continue;const Ee=kt.current.get(be);Ee&&(J.set(be,{orig:Ee.originalRect,target:Ee.currentRect,isFixed:Ee.isFixed}),kt.current.delete(be))}if(J.size>0){We(Ee=>{const nt=new Map(Ee);for(const[Ge,Be]of J)nt.set(Ge,Be);return nt});const be=Wt(()=>{We(Ee=>{const nt=new Map(Ee);for(const Ge of J.keys())nt.delete(Ge);return nt})},250);return()=>clearTimeout(be)}},[ot,w]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${Pe.rearrangeOverlay} ${i?"":Pe.light} ${a?Pe.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[se&&l.jsx("div",{className:Pe.hoverHighlight,style:{left:se.x,top:se.y,width:se.w,height:se.h}}),jt.map(V=>{const J=V.currentRect,be=V.isFixed?J.y:J.y-P,Ee=bx,nt=M.has(V.id);return l.jsxs("div",{"data-rearrange-section":V.id,className:`${Pe.sectionOutline} ${nt?Pe.selected:""} ${T||a||Ae.has(V.id)?Pe.exiting:""}`,style:{left:J.x,top:be,width:J.width,height:J.height,borderColor:Ee.border,backgroundColor:Ee.bg,...lt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Ge=>Q(Ge,V.id),onDoubleClick:()=>le(V.id),children:[l.jsx("span",{className:Pe.sectionLabel,style:{backgroundColor:Ee.pill},children:V.label}),l.jsx("span",{className:`${Pe.sectionAnnotation} ${V.note?Pe.annotationVisible:""}`,children:(V.note&&oe.current.set(V.id,V.note),V.note||oe.current.get(V.id)||"")}),l.jsxs("span",{className:Pe.sectionDimensions,children:[Math.round(J.width)," × ",Math.round(J.height)]}),l.jsx("div",{className:Pe.deleteButton,onMouseDown:Ge=>Ge.stopPropagation(),onClick:()=>at(V.id),children:"✕"}),vx.map(Ge=>l.jsx("div",{className:`${Pe.handle} ${Pe[`handle${Ge.charAt(0).toUpperCase()}${Ge.slice(1)}`]}`,onMouseDown:Be=>Ne(Be,V.id,Ge)},Ge))]},V.id)}),mt.map(V=>{const J=V.currentRect,be=V.isFixed?J.y:J.y-P,Ee=M.has(V.id),nt=dt(V),Ge=He(V);if(u&&!Ee)return null;const pe=!xe.current.has(V.id);return pe&&xe.current.add(V.id),l.jsxs("div",{"data-rearrange-section":V.id,className:`${Pe.ghostOutline} ${Ee?Pe.selected:""} ${T||a||Ae.has(V.id)?Pe.exiting:""}`,style:{left:J.x,top:be,width:J.width,height:J.height,...lt?{}:{opacity:0,animation:"none",transition:"none"},...pe?{}:{animation:"none"}},onMouseDown:Ze=>Q(Ze,V.id),onDoubleClick:()=>le(V.id),children:[l.jsx("span",{className:Pe.sectionLabel,style:{backgroundColor:bx.pill},children:V.label}),l.jsx("span",{className:`${Pe.sectionAnnotation} ${V.note?Pe.annotationVisible:""}`,children:(V.note&&oe.current.set(V.id,V.note),V.note||oe.current.get(V.id)||"")}),l.jsxs("span",{className:Pe.sectionDimensions,children:[Math.round(J.width)," × ",Math.round(J.height)]}),l.jsx("div",{className:Pe.deleteButton,onMouseDown:Ze=>Ze.stopPropagation(),onClick:()=>at(V.id),children:"✕"}),vx.map(Ze=>l.jsx("div",{className:`${Pe.handle} ${Pe[`handle${Ze.charAt(0).toUpperCase()}${Ze.slice(1)}`]}`,onMouseDown:Ye=>Ne(Ye,V.id,Ze)},Ze)),l.jsx("span",{className:Pe.ghostBadge,children:(()=>{const Ze=Te.current.get(V.id);if(nt&&Ge){const[Ye,Je]=Ze==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",Ye," ",l.jsxs("span",{className:Pe.ghostBadgeExtra,children:["& ",Je]})]})}return`Suggested ${Ge?"Resize":"Move"}`})()})]},V.id)})]}),!u&&(()=>{const V=[];for(const J of mt){const be=he.get(J.id);V.push({id:J.id,orig:J.originalRect,target:be||J.currentRect,isFixed:J.isFixed,isSelected:M.has(J.id),isExiting:Ae.has(J.id)})}for(const[J,be]of he)if(!V.some(Ee=>Ee.id===J)){const Ee=w.find(nt=>nt.id===J);Ee&&V.push({id:J,orig:Ee.originalRect,target:be,isFixed:Ee.isFixed,isSelected:M.has(J)})}for(const[J,be]of Qe)V.some(Ee=>Ee.id===J)||V.push({id:J,orig:be.orig,target:be.target,isFixed:be.isFixed,isSelected:!1,isExiting:!0});return V.length===0?null:l.jsxs("svg",{className:`${Pe.connectorSvg} ${T||a?Pe.connectorExiting:""}`,children:[V.map(({id:J,orig:be,target:Ee,isFixed:nt,isSelected:Ge,isExiting:Be})=>{const pe=be.x+be.width/2,Ze=(nt?be.y:be.y-P)+be.height/2,Ye=Ee.x+Ee.width/2,Je=(nt?Ee.y:Ee.y-P)+Ee.height/2,De=Ye-pe,et=Je-Ze,_t=Math.sqrt(De*De+et*et);if(_t<2)return null;const gt=Math.min(1,_t/40),Ke=Math.min(_t*.3,60),Lt=_t>0?-et/_t:0,wt=_t>0?De/_t:0,ct=(pe+Ye)/2+Lt*Ke,cn=(Ze+Je)/2+wt*Ke,rt=he.has(J),It=rt||Ge?1:.4,pn=rt||Ge?1:.5;return l.jsxs("g",{className:Be?Pe.connectorExiting:"",children:[l.jsx("path",{className:Pe.connectorLine,d:`M ${pe} ${Ze} Q ${ct} ${cn} ${Ye} ${Je}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:It*gt}),l.jsx("circle",{className:Pe.connectorDot,cx:pe,cy:Ze,r:4*gt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:pn*gt,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:Pe.connectorDot,cx:Ye,cy:Je,r:4*gt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:pn*gt,filter:"url(#connDotShadow)"})]},`conn-${J}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),N&&(()=>{var Je;const V=w.find(De=>De.id===N);if(!V)return null;const J=V.currentRect,be=V.isFixed?J.y:J.y-P,Ee=J.x+J.width/2,nt=be-8,Ge=be+J.height+8,Be=nt>200,pe=Ge<window.innerHeight-100,Ze=Math.max(160,Math.min(window.innerWidth-160,Ee));let Ye;return Be?Ye={left:Ze,bottom:window.innerHeight-nt}:pe?Ye={left:Ze,top:Ge}:Ye={left:Ze,top:Math.max(80,window.innerHeight/2-80)},l.jsx(Xd,{element:V.label,placeholder:"Add a note about this section",initialValue:(Je=V.note)!=null?Je:"",submitLabel:K.current?"Save":"Set",onSubmit:me,onCancel:de,onDelete:K.current?()=>{me("")}:void 0,isExiting:X,lightMode:!i,style:Ye})})(),te&&l.jsx("div",{className:Pe.sizeIndicator,style:{left:te.x,top:te.y},"data-feedback-toolbar":!0,children:te.text}),fe.map((V,J)=>l.jsx("div",{className:Pe.guideLine,style:V.axis==="x"?{position:"fixed",left:V.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:V.pos-P,width:"100vw",height:1}},`${V.axis}-${V.pos}-${J}`))]})}var mp=new Set(["script","style","noscript","link","meta","br","hr"]);function F8(){const e=document.querySelector("main")||document.body,n=[],i=Array.from(e.children),a=e!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||mp.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Gd(c),selector:Yr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||mp.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const y=h.getBoundingClientRect();y.height<10||y.width<10||n.push({label:Gd(h),selector:Yr(h),top:y.top,bottom:y.bottom,left:y.left,right:y.right,area:y.width*y.height})}}}return n}function X8(e){const n=window.scrollY;return e.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function G8(e){const n=window.scrollY,i=e.y-n,a=e.x;return{top:i,bottom:i+e.height,left:a,right:a+e.width,area:e.width*e.height}}function pp(e,n){const i=n?X8(n):F8(),a=G8(e);let c=null,u=null,d=null,h=null,p=null;for(const M of i){if(Math.abs(M.left-a.left)<2&&Math.abs(M.top-a.top)<2&&Math.abs(M.right-M.left-e.width)<2&&Math.abs(M.bottom-M.top-e.height)<2)continue;M.left<=a.left+2&&M.right>=a.right-2&&M.top<=a.top+2&&M.bottom>=a.bottom-2&&M.area>a.area*1.5&&(!p||M.area<p._area)&&(p={label:M.label,selector:M.selector,_area:M.area});const A=a.right>M.left+5&&a.left<M.right-5,T=a.bottom>M.top+5&&a.top<M.bottom-5;if(A&&M.bottom<=a.top+5){const D=Math.round(a.top-M.bottom);(!c||D<c._dist)&&(c={label:M.label,selector:M.selector,gap:Math.max(0,D),_dist:D})}if(A&&M.top>=a.bottom-5){const D=Math.round(M.top-a.bottom);(!u||D<u._dist)&&(u={label:M.label,selector:M.selector,gap:Math.max(0,D),_dist:D})}if(T&&M.right<=a.left+5){const D=Math.round(a.left-M.right);(!d||D<d._dist)&&(d={label:M.label,selector:M.selector,gap:Math.max(0,D),_dist:D})}if(T&&M.left>=a.right-5){const D=Math.round(M.left-a.right);(!h||D<h._dist)&&(h={label:M.label,selector:M.selector,gap:Math.max(0,D),_dist:D})}}const y=window.innerWidth,g=window.innerHeight,b=K8(e,y),w=M=>M?{label:M.label,selector:M.selector,gap:M.gap}:null,k=q8(a,e,y,g,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:w(c),below:w(u),left:w(d),right:w(h),alignment:b,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:k}}function q8(e,n,i,a,c,u){const d={};let h=!1;const p=[];if(e.left<-2&&p.push("left"),e.right>i+2&&p.push("right"),e.top<-2&&p.push("top"),e.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const y=u.find(g=>g.label===c.label&&g.selector===c.selector&&Math.abs(g.area-c._area)<10);if(y){const g=[];e.left<y.left-2&&g.push("left"),e.right>y.right+2&&g.push("right"),e.top<y.top-2&&g.push("top"),e.bottom>y.bottom+2&&g.push("bottom"),g.length>0&&(d.container={label:c.label,edges:g},h=!0)}}return h?d:null}function K8(e,n){if(e.width/n>.85)return"full-width";const a=e.x+e.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function c2(e){switch(e){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function u2(e,n={}){const i=[];e.above&&i.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:""}`),e.below&&i.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:""}`),n.includeLeftRight&&(e.left&&i.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:""}`),e.right&&i.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:""}`));const a=c2(e.alignment);return e.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${e.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&i.push(`**Outside viewport** (${e.outOfBounds.viewport.join(", ")} edge${e.outOfBounds.viewport.length>1?"s":""})`),e.outOfBounds.container&&i.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")} edge${e.outOfBounds.container.edges.length>1?"s":""})`)),i}function Q8(e,n,i){var u,d;const a=[];e.above&&a.push(`below \`${e.above.label}\``),e.below&&a.push(`above \`${e.below.label}\``),e.left&&a.push(`right of \`${e.left.label}\``),e.right&&a.push(`left of \`${e.right.label}\``),e.containedIn&&a.push(`inside \`${e.containedIn.label}\``),a.push(c2(e.alignment)),(u=e.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${e.outOfBounds.viewport.join(", ")})`),(d=e.outOfBounds)!=null&&d.container&&a.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var kx=15;function jx(e){if(e.length<2)return[];const n=[],i=new Set;for(let a=0;a<e.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<e.length;u++)i.has(u)||Math.abs(e[a].rect.y-e[u].rect.y)<kx&&c.push(u);if(c.length>=2){const u=c.map(p=>e[p]);u.sort((p,y)=>p.rect.x-y.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,y)=>p+y.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<e.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<e.length;u++)i.has(u)||Math.abs(e[a].rect.x-e[u].rect.x)<kx&&c.push(u);if(c.length>=2){const u=c.map(p=>e[p]);u.sort((p,y)=>p.rect.y-y.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,y)=>p+y.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function Z8(e){var d;if(e.length<2)return[];const n=jx(e.map(h=>({label:h.label,rect:h.originalRect}))),i=jx(e.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let y=null,g=0;for(const b of i){const w=b.labels.filter(k=>p.has(k)).length;w>=2&&w>g&&(y=b,g=w)}if(y){const b=y.labels.filter(k=>p.has(k)),w=b.join(", ");if(y.type!==h.type){const k=h.type==="row"?"y":"x",M=y.type==="row"?"y":"x";a.push(`**${w}**: ${h.type} (${k}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${y.type} (${M}≈${y.sharedEdge}, ${y.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-y.sharedEdge)>20||Math.abs(h.avgGap-y.avgGap)>5){const k=h.type==="row"?"y":"x",M=Math.abs(h.sharedEdge-y.sharedEdge)>20?` ${k}: ${h.sharedEdge} → ${y.sharedEdge}`:"",A=Math.abs(h.avgGap-y.avgGap)>5?` gaps: ${h.avgGap}px → ${y.avgGap}px`:"";a.push(`**${w}**: ${h.type} shifted —${M}${A}`)}b.forEach(k=>c.add(k))}else{const b=h.labels.join(", "),w=h.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${w}≈${h.sharedEdge}) dissolved`),h.labels.forEach(k=>c.add(k))}}for(const h of i){if(h.labels.every(g=>c.has(g))||h.labels.filter(g=>!c.has(g)).length<2)continue;if(!n.some(g=>g.labels.filter(w=>h.labels.includes(w)).length>=2)){const g=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${g}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(b=>c.add(b))}}const u=e.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const y=Math.round(p.currentRect.x/5)*5;((d=h[y])!=null?d:h[y]=[]).push(p.label)}for(const[p,y]of Object.entries(h))y.length>=2&&a.push(`**${y.join(", ")}**: shared left edge at x≈${p}`)}return a}function d2(e){if(typeof document>"u")return{viewport:e,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||mp.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const y of Array.from(p.children))a(y)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const y=getComputedStyle(h);if(y.maxWidth&&y.maxWidth!=="none"&&y.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<e.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:e,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Yr(h)}}}return{viewport:e,contentArea:null}}function J8(e){if(typeof document>"u")return null;const n=document.querySelector(e);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Yr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function f2(e,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(e.x-c),h=Math.round(c+a-(e.x+e.width)),p=(e.width/a*100).toFixed(1),y=e.x+e.width/2,g=Math.abs(y-u)<20,b=e.width/a>.95,w=[];return b?w.push("`width: 100%` of container"):w.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(e.width)}px\`)`),g&&!b&&w.push("centered — `margin-inline: auto`"),w.join(" — ")}function h2(e){const{viewport:n,contentArea:i}=e;let a=`### Reference Frame
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
`,a}function eM(e){const n=J8(e);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Mx(e,n,i,a="standard"){var T,D,I,O;if(e.length===0)return"";const c=[...e].sort((N,G)=>Math.abs(N.y-G.y)<20?N.x-G.x:N.y-G.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${e.length} component${e.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${e.length} component${e.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((N,G)=>{var U;const X=((U=ia[N.type])==null?void 0:U.label)||N.type;u+=`${G+1}. **${X}** — \`${Math.round(N.width)}×${Math.round(N.height)}px\` at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`}),u;const d=d2(n);u+=h2(d),u+=`### Components
`,c.forEach((N,G)=>{var Ae;const X=((Ae=ia[N.type])==null?void 0:Ae.label)||N.type,U={x:N.x,y:N.y,width:N.width,height:N.height};u+=`${G+1}. **${X}** — \`${Math.round(N.width)}×${Math.round(N.height)}px\` at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`;const K=pp(U),de=u2(K,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Xe of de)u+=`   - ${Xe}
`;const me=f2(U,d);me&&(u+=`   - CSS: ${me}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const N of c){const G=h.find(X=>Math.abs(X.y-N.y)<30);G?G.items.push(N):h.push({y:N.y,items:[N]})}if(h.sort((N,G)=>N.y-G.y),h.forEach((N,G)=>{N.items.sort((U,K)=>U.x-K.x);const X=N.items.map(U=>{var K;return((K=ia[U.type])==null?void 0:K.label)||U.type});if(N.items.length===1){const K=N.items[0].width>n.width*.8;u+=`- Row ${G+1} (y≈${Math.round(N.y)}): ${X[0]}${K?" — full width":""}
`}else u+=`- Row ${G+1} (y≈${Math.round(N.y)}): ${X.join(" | ")} — ${N.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let N=0;N<c.length-1;N++){const G=c[N],X=c[N+1],U=((T=ia[G.type])==null?void 0:T.label)||G.type,K=((D=ia[X.type])==null?void 0:D.label)||X.type,le=Math.round(X.y-(G.y+G.height)),de=Math.round(X.x-(G.x+G.width));Math.abs(G.y-X.y)<30?u+=`- ${U} → ${K}: \`${de}px\` horizontal gap
`:u+=`- ${U} → ${K}: \`${le}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let N=0;N<c.length;N++)for(let G=N+1;G<c.length;G++){const X=c[N],U=c[G],K=((I=ia[X.type])==null?void 0:I.label)||X.type,le=((O=ia[U.type])==null?void 0:O.label)||U.type,de=Math.round(U.y-(X.y+X.height)),me=Math.round(U.x-(X.x+X.width));u+=`- ${K} ↔ ${le}: h=\`${me}px\` v=\`${de}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,e.forEach((N,G)=>{var U;const X=((U=ia[N.type])==null?void 0:U.label)||N.type;u+=`${G}. ${X} at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(N=>N.type==="navigation"),y=c.some(N=>N.type==="hero"),g=c.some(N=>N.type==="sidebar"),b=c.some(N=>N.type==="footer"),w=c.filter(N=>N.type==="card"),k=c.filter(N=>N.type==="form"),M=c.filter(N=>N.type==="table"),A=c.filter(N=>N.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),y&&(u+=`- Hero section with heading, subtext, and call-to-action
`),g&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),w.length>1?u+=`- ${w.length}-column card grid — use CSS Grid or Flexbox
`:w.length===1&&(u+=`- Card component with image + content area
`),k.length>0&&(u+=`- ${k.length} form${k.length>1?"s":""} — add proper labels, validation, and submit handling
`),M.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),A.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),b&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,g){const N=c.find(G=>G.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(N.width)}px 1fr;\`
`}if(w.length>1){const N=Math.round(w[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${w.length}, ${N}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Ex(e,n="standard",i){const{sections:a}=e,c=[];for(const g of a){const b=g.originalRect,w=g.currentRect,k=Math.abs(b.x-w.x)>1||Math.abs(b.y-w.y)>1,M=Math.abs(b.width-w.width)>1||Math.abs(b.height-w.height)>1;if(!k&&!M){n==="forensic"&&c.push({section:g,posMoved:!1,sizeChanged:!1});continue}c.push({section:g,posMoved:k,sizeChanged:M})}if(c.length===0||n!=="forensic"&&c.every(g=>!g.posMoved&&!g.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=d2({width:d,height:h});n!=="compact"&&(u+=h2(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const y=g=>a.map(b=>({label:b.label,selector:b.selector,rect:g==="original"?b.originalRect:b.currentRect}));u+=`**Changes:**
`;for(const{section:g,posMoved:b,sizeChanged:w}of c){const k=g.originalRect,M=g.currentRect;if(!b&&!w){u+=`- ${g.label} — unchanged at (${Math.round(M.x)}, ${Math.round(M.y)}) ${Math.round(M.width)}×${Math.round(M.height)}px
`;continue}if(n==="compact"){b&&w?u+=`- Suggested: move **${g.label}** to (${Math.round(M.x)}, ${Math.round(M.y)}) ${Math.round(M.width)}×${Math.round(M.height)}px
`:b?u+=`- Suggested: move **${g.label}** to (${Math.round(M.x)}, ${Math.round(M.y)})
`:u+=`- Suggested: resize **${g.label}** to ${Math.round(M.width)}×${Math.round(M.height)}px
`;continue}if(b&&w?u+=`- Suggested: move and resize **${g.label}**
`:b?u+=`- Suggested: move **${g.label}**
`:u+=`- Suggested: resize **${g.label}** from ${Math.round(k.width)}×${Math.round(k.height)}px to ${Math.round(M.width)}×${Math.round(M.height)}px
`,b){const T=pp(k,y("original")),D=pp(M,y("current")),I=w?{width:k.width,height:k.height}:void 0;u+=`  - Currently ${Q8(T,{x:k.x,y:k.y},I)}
`;const O=w?{width:M.width,height:M.height}:void 0,N=`at (${Math.round(M.x)}, ${Math.round(M.y)})`,G=O?`, ${Math.round(O.width)}×${Math.round(O.height)}px`:"",U=u2(D,{includeLeftRight:n==="detailed"||n==="forensic"});if(U.length>0){u+=`  - Suggested position ${N}${G}: ${U[0]}
`;for(let le=1;le<U.length;le++)u+=`    ${U[le]}
`}else u+=`  - Suggested position ${N}${G}
`;const K=f2(M,p);K&&(u+=`  - CSS: ${K}
`)}const A=eM(g.selector);if(A&&(u+=`  - ${A}
`),u+=`  - Selector: \`${g.selector}\`
`,n==="detailed"||n==="forensic"){const T=g.className?`${g.tagName}.${g.className.split(" ")[0]}`:g.tagName;T!==g.selector&&(u+=`  - Element: \`${T}\`
`),g.role&&(u+=`  - Role: \`${g.role}\`
`),n==="forensic"&&g.textSnippet&&(u+=`  - Text: "${g.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(k.x)}, y: ${Math.round(k.y)}, w: ${Math.round(k.width)}, h: ${Math.round(k.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(M.x)}, y: ${Math.round(M.y)}, w: ${Math.round(M.width)}, h: ${Math.round(M.height)} }\`
`)}if(n!=="compact"){const g=c.filter(w=>w.posMoved).map(w=>({label:w.section.label,originalRect:w.section.originalRect,currentRect:w.section.currentRect})),b=Z8(g);if(b.length>0){u+=`
### Layout Summary
`;for(const w of b)u+=`- ${w}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const g=[...a].sort((b,w)=>Math.abs(b.currentRect.y-w.currentRect.y)<20?b.currentRect.x-w.currentRect.x:b.currentRect.y-w.currentRect.y);for(const b of g){const w=b.currentRect,k=Math.abs(w.x-b.originalRect.x)>1||Math.abs(w.y-b.originalRect.y)>1||Math.abs(w.width-b.originalRect.width)>1||Math.abs(w.height-b.originalRect.height)>1;u+=`- ${b.label}: \`${Math.round(w.width)}×${Math.round(w.height)}px\` at \`(${Math.round(w.x)}, ${Math.round(w.y)})\`${k?" ← suggested":""}
`}}return u}var _p="feedback-annotations-",m2=7;function qd(e){return`${_p}${e}`}function km(e){if(typeof window>"u")return[];try{const n=localStorage.getItem(qd(e));if(!n)return[];const i=JSON.parse(n),a=Date.now()-m2*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function p2(e,n){if(!(typeof window>"u"))try{localStorage.setItem(qd(e),JSON.stringify(n))}catch{}}function tM(){const e=new Map;if(typeof window>"u")return e;try{const n=Date.now()-m2*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(_p)){const c=a.slice(_p.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&e.set(c,h)}}}}catch{}return e}function Ac(e,n,i){const a=n.map(c=>({...c,_syncedTo:i}));p2(e,a)}var t_="agentation-design-";function nM(e){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${t_}${e}`);return n?JSON.parse(n):[]}catch{return[]}}function sM(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${t_}${e}`,JSON.stringify(n))}catch{}}function oM(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${t_}${e}`)}catch{}}var n_="agentation-rearrange-";function iM(e){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${n_}${e}`);return n?JSON.parse(n):null}catch{return null}}function aM(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${n_}${e}`,JSON.stringify(n))}catch{}}function rM(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${n_}${e}`)}catch{}}var s_="agentation-wireframe-";function lM(e){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${s_}${e}`);return n?JSON.parse(n):null}catch{return null}}function Tx(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${s_}${e}`,JSON.stringify(n))}catch{}}function vd(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${s_}${e}`)}catch{}}var _2="agentation-session-";function o_(e){return`${_2}${e}`}function cM(e){if(typeof window>"u")return null;try{return localStorage.getItem(o_(e))}catch{return null}}function jm(e,n){if(!(typeof window>"u"))try{localStorage.setItem(o_(e),n)}catch{}}function uM(e){if(!(typeof window>"u"))try{localStorage.removeItem(o_(e))}catch{}}var g2=`${_2}toolbar-hidden`;function dM(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(g2)==="1"}catch{return!1}}function fM(e){if(!(typeof window>"u"))try{e&&sessionStorage.setItem(g2,"1")}catch{}}async function Mm(e,n){const i=await fetch(`${e}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function Ax(e,n){const i=await fetch(`${e}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function Cl(e,n,i){const a=await fetch(`${e}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function Nx(e,n,i){const a=await fetch(`${e}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function lr(e,n){const i=await fetch(`${e}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var Hn={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Dx=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Rx=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],hM=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function mM(e){var a,c,u,d;const n=(a=e==null?void 0:e.mode)!=null?a:"filtered";let i=Dx;if(e!=null&&e.skipExact){const h=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);i=new Set([...Dx,...h])}return{maxComponents:(c=e==null?void 0:e.maxComponents)!=null?c:6,maxDepth:(u=e==null?void 0:e.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:e!=null&&e.skipPatterns?[...Rx,...e.skipPatterns]:Rx,userPatterns:(d=e==null?void 0:e.userPatterns)!=null?d:hM,filter:e==null?void 0:e.filter}}function pM(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function _M(e,n=10){const i=new Set;let a=e,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function gM(e,n){const i=pM(e);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function yM(e,n,i,a){if(i.filter)return i.filter(e,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(e)||i.skipPatterns.some(c=>c.test(e)));case"smart":return i.skipExact.has(e)||i.skipPatterns.some(c=>c.test(e))?!1:!!(a&&gM(e,a)||i.userPatterns.some(c=>c.test(e)));default:return!0}}var kl=null,xM=new WeakMap;function Em(e){return Object.keys(e).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function bM(){if(kl!==null)return kl;if(typeof document>"u")return!1;if(document.body&&Em(document.body))return kl=!0,!0;const e=["#root","#app","#__next","[data-reactroot]"];for(const n of e){const i=document.querySelector(n);if(i&&Em(i))return kl=!0,!0}if(document.body){for(const n of document.body.children)if(Em(n))return kl=!0,!0}return kl=!1,!1}var Nc={map:xM};function vM(e){return Object.keys(e).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function wM(e){const n=vM(e);return n?e[n]:null}function Br(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function SM(e){var c;const{tag:n,type:i,elementType:a}=e;if(n===Hn.HostComponent||n===Hn.HostText||n===Hn.HostHoistable||n===Hn.HostSingleton||n===Hn.Fragment||n===Hn.Mode||n===Hn.Profiler||n===Hn.DehydratedFragment||n===Hn.HostRoot||n===Hn.HostPortal||n===Hn.ScopeComponent||n===Hn.OffscreenComponent||n===Hn.LegacyHiddenComponent||n===Hn.CacheComponent||n===Hn.TracingMarkerComponent||n===Hn.Throw||n===Hn.ViewTransitionComponent||n===Hn.ActivityComponent)return null;if(n===Hn.ForwardRef){const u=a;if(u!=null&&u.render){const d=Br(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:Br(i)}if(n===Hn.MemoComponent||n===Hn.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=Br(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:Br(i)}if(n===Hn.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===Hn.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===Hn.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?Br(u._result):null}return n===Hn.SuspenseComponent||n===Hn.SuspenseListComponent?null:n===Hn.IncompleteClassComponent||n===Hn.IncompleteFunctionComponent||n===Hn.FunctionComponent||n===Hn.ClassComponent||n===Hn.IndeterminateComponent?Br(i):null}function CM(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function kM(e,n){const i=mM(n),a=i.mode==="all";if(a){const p=Nc.map.get(e);if(p!==void 0)return p}if(!bM()){const p={path:null,components:[]};return a&&Nc.map.set(e,p),p}const c=i.mode==="smart"?_M(e):void 0,u=[];try{let p=wM(e),y=0;for(;p&&y<i.maxDepth&&u.length<i.maxComponents;){const g=SM(p);g&&!CM(g)&&yM(g,y,i,c)&&u.push(g),p=p.return,y++}}catch{const p={path:null,components:[]};return a&&Nc.map.set(e,p),p}if(u.length===0){const p={path:null,components:[]};return a&&Nc.map.set(e,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&Nc.map.set(e,h),h}var Dc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function jM(e){if(!e||typeof e!="object")return null;const n=Object.keys(e),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return e[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return e[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=e[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&e[c]||null}function Zc(e){if(!e.type||typeof e.type=="string")return null;if(typeof e.type=="object"||typeof e.type=="function"){const n=e.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function MM(e,n=50){var c;let i=e,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Zc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Zc(i._debugOwner)};i=i.return,a++}return null}function EM(e){let n=e,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Zc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Zc(n)}}}n=n.return,i++}return null}var wd=new Map;function TM(e){var c;const n=e.tag,i=e.type,a=e.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===Dc.FunctionComponent||n===Dc.IndeterminateComponent)&&typeof i=="function")return i;if(n===Dc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===Dc.MemoComponent||n===Dc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function AM(){const e=qv,n=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function NM(e){const n=e.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function DM(e){let n=e;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function RM(e){const n=TM(e);if(!n)return null;if(wd.has(n))return wd.get(n);const i=AM();if(!i)return wd.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=NM(d.stack);h&&(c={fileName:DM(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:Zc(e)||void 0})}}}finally{i.set(a)}return wd.set(n,c),c}function BM(e,n=15){let i=e,a=0;for(;i&&a<n;){const c=RM(i);if(c)return c;i=i.return,a++}return null}function gp(e){const n=jM(e);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=MM(n);if(i||(i=EM(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=BM(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function LM(e,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=e;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function OM(e,n=10){let i=e,a=0;for(;i&&a<n;){const c=gp(i);if(c.found)return c;i=i.parentElement,a++}return gp(e)}var zM=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,$M={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(e)),e.textContent=zM}var qe=$M,Rc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Bx(e,n,i="standard"){if(e.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var PM=`@keyframes styles-module__markerIn___x4G8D {
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
}`,IM={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-marker-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(e)),e.textContent=PM}var Js=IM;function Lx({annotation:e,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:y,renumberFrom:g,markerClickBehavior:b,tooltipStyle:w,onHoverEnter:k,onHoverLeave:M,onClick:A,onContextMenu:T}){const D=(h||p)&&!y,I=D&&b==="delete",O=e.isMultiSelect,N=O?"var(--agentation-color-green)":"var(--agentation-color-accent)",G=c?Js.exit:u?Js.clearing:d?"":Js.enter,X=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${Js.marker} ${O?Js.multiSelect:""} ${G} ${I?Js.hovered:""}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y,backgroundColor:I?void 0:N,animationDelay:X},onMouseEnter:()=>k(e),onMouseLeave:M,onClick:U=>{U.stopPropagation(),c||A(e)},onContextMenu:T?U=>{b==="delete"&&(U.preventDefault(),U.stopPropagation(),c||T(e))}:void 0,children:[D?I?l.jsx(n2,{size:O?18:16}):l.jsx(J3,{size:16}):l.jsx("span",{className:g!==null&&n>=g?Js.renumber:void 0,children:n+1}),h&&!y&&l.jsxs("div",{className:`${Js.markerTooltip} ${Js.enter}`,style:w,children:[l.jsxs("span",{className:Js.markerQuote,children:[e.element,e.selectedText&&` "${e.selectedText.slice(0,30)}${e.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:Js.markerNote,children:e.comment})]})]})}function HM({x:e,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${Js.marker} ${Js.pending} ${i?Js.multiSelect:""} ${a?Js.exit:Js.enter}`,style:{left:`${e}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(H3,{size:12})})}function Ox({annotation:e,fixed:n}){const i=e.isMultiSelect;return l.jsx("div",{className:`${Js.marker} ${n?Js.fixed:""} ${Js.hovered} ${i?Js.multiSelect:""} ${Js.exit}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y},children:l.jsx(n2,{size:i?12:10})})}var UM=`.styles-module__switchContainer___Ka-AB {
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
}`,VM={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-switch-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-switch-styles",document.head.appendChild(e)),e.textContent=UM}var Tm=VM,Am=({className:e="",...n})=>l.jsxs("div",{className:`${Tm.switchContainer} ${e}`,children:[l.jsx("input",{className:Tm.switchInput,type:"checkbox",...n}),l.jsx("div",{className:Tm.switchThumb})]}),YM=`.styles-module__checkboxContainer___joqZk {
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
}`,WM={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(e)),e.textContent=YM}var Sd=WM,FM=({className:e="",...n})=>l.jsxs("div",{className:`${Sd.checkboxContainer} ${e}`,children:[l.jsx("input",{className:Sd.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:Sd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:Sd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),XM=`.styles-module__container___w8eAF {
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
}`,GM={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-field-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(e)),e.textContent=XM}var zx=GM,$x=({className:e="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=_.useId();return l.jsxs("div",{className:`${zx.container} ${e}`,...u,children:[l.jsx(FM,{id:d,onChange:c,checked:a}),l.jsx("label",{className:zx.label,htmlFor:d,children:n}),i&&l.jsx(Pr,{content:i})]})},qM=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,KM={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-settings-panel-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(e)),e.textContent=qM}var Mt=KM;function QM({settings:e,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:y,onSettingsPageChange:g,onHideToolbar:b}){var w;return l.jsx("div",{className:`${Mt.settingsPanel} ${h?Mt.enter:Mt.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:Mt.settingsPanelContainer,children:[l.jsxs("div",{className:`${Mt.settingsPage} ${y==="automations"?Mt.slideLeft:""}`,children:[l.jsxs("div",{className:Mt.settingsHeader,children:[l.jsx("a",{className:Mt.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:Mt.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:Mt.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:Mt.themeIconWrapper,children:l.jsx("span",{className:Mt.themeIcon,children:i?l.jsx(Q3,{size:20}):l.jsx(Z3,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:Mt.divider}),l.jsxs("div",{className:Mt.settingsSection,children:[l.jsxs("div",{className:Mt.settingsRow,children:[l.jsxs("div",{className:Mt.settingsLabel,children:["Output Detail",l.jsx(Pr,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:Mt.cycleButton,onClick:()=>{const M=(Rc.findIndex(A=>A.value===e.outputDetail)+1)%Rc.length;n({outputDetail:Rc[M].value})},children:[l.jsx("span",{className:Mt.cycleButtonText,children:(w=Rc.find(k=>k.value===e.outputDetail))==null?void 0:w.label},e.outputDetail),l.jsx("span",{className:Mt.cycleDots,children:Rc.map(k=>l.jsx("span",{className:`${Mt.cycleDot} ${e.outputDetail===k.value?Mt.active:""}`},k.value))})]})]}),l.jsxs("div",{className:`${Mt.settingsRow} ${Mt.settingsRowMarginTop} ${c?"":Mt.settingsRowDisabled}`,children:[l.jsxs("div",{className:Mt.settingsLabel,children:["React Components",l.jsx(Pr,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(Am,{checked:c&&e.reactEnabled,onChange:k=>n({reactEnabled:k.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${Mt.settingsRow} ${Mt.settingsRowMarginTop}`,children:[l.jsxs("div",{className:Mt.settingsLabel,children:["Hide Until Restart",l.jsx(Pr,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(Am,{checked:!1,onChange:k=>{k.target.checked&&b()}})]})]}),l.jsx("div",{className:Mt.divider}),l.jsxs("div",{className:Mt.settingsSection,children:[l.jsx("div",{className:`${Mt.settingsLabel} ${Mt.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:Mt.colorOptions,children:Fc.map(k=>l.jsx("button",{className:`${Mt.colorOption} ${e.annotationColorId===k.id?Mt.selected:""}`,style:{"--swatch":k.srgb,"--swatch-p3":k.p3},onClick:()=>n({annotationColorId:k.id}),title:k.label,type:"button"},k.id))})]}),l.jsx("div",{className:Mt.divider}),l.jsxs("div",{className:Mt.settingsSection,children:[l.jsx($x,{className:"checkbox-field",label:"Clear on copy/send",checked:e.autoClearAfterCopy,onChange:k=>n({autoClearAfterCopy:k.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx($x,{className:Mt.checkboxField,label:"Block page interactions",checked:e.blockInteractions,onChange:k=>n({blockInteractions:k.target.checked})})]}),l.jsx("div",{className:Mt.divider}),l.jsxs("button",{className:Mt.settingsNavLink,onClick:()=>g("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:Mt.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${Mt.mcpNavIndicator} ${Mt[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${Mt.settingsPage} ${Mt.automationsPage} ${y==="automations"?Mt.slideIn:""}`,children:[l.jsxs("button",{className:Mt.settingsBackButton,onClick:()=>g("main"),children:[l.jsx(tj,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:Mt.divider}),l.jsxs("div",{className:Mt.settingsSection,children:[l.jsxs("div",{className:Mt.settingsRow,children:[l.jsxs("span",{className:Mt.automationHeader,children:["MCP Connection",l.jsx(Pr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${Mt.mcpStatusDot} ${Mt[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:Mt.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Mt.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:Mt.divider}),l.jsxs("div",{className:`${Mt.settingsSection} ${Mt.settingsSectionGrow}`,children:[l.jsxs("div",{className:Mt.settingsRow,children:[l.jsxs("span",{className:Mt.automationHeader,children:["Webhooks",l.jsx(Pr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:Mt.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${Mt.autoSendLabel} ${e.webhooksEnabled?Mt.active:""} ${e.webhookUrl?"":Mt.disabled}`,children:"Auto-Send"}),l.jsx(Am,{id:"agentation-auto-send",checked:e.webhooksEnabled,onChange:k=>n({webhooksEnabled:k.target.checked}),disabled:!e.webhookUrl})]})]}),l.jsx("p",{className:Mt.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:Mt.webhookUrlInput,placeholder:"Webhook URL",value:e.webhookUrl,onKeyDown:k=>k.stopPropagation(),onChange:k=>n({webhookUrl:k.target.value})})]})]})]})})}function Nm(e,n="filtered"){const{name:i,path:a}=Nl(e);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=kM(e,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var Px=!1,Dm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},pa=e=>{if(!e||!e.trim())return!1;try{const n=new URL(e.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},Fc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],ZM=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const e=document.createElement("style");e.id="agentation-color-tokens",e.textContent=[...Fc.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${Fc.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Fc.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(e)};ZM();function Lr(e,n){let i=document.elementFromPoint(e,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(e,n);if(!a||a===i)break;i=a}return i}function Rm(e){let n=e;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function Or(e){return e.status!=="resolved"&&e.status!=="dismissed"}function Cd(e){const n=gp(e),i=n.found?n:OM(e);if(i.found&&i.source)return LM(i.source,"path")}function JM({demoAnnotations:e,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:y=!0,endpoint:g,sessionId:b,onSessionCreated:w,webhookUrl:k,className:M}={}){var ao,bo,vo,fi,Oo,zo,ca;const[A,T]=_.useState(!1),[D,I]=_.useState([]),[O,N]=_.useState(!0),[G,X]=_.useState(()=>dM()),[U,K]=_.useState(!1),le=_.useRef(null);_.useEffect(()=>{const x=C=>{const j=le.current;j&&j.contains(C.target)&&C.stopPropagation()},v=["mousedown","click","pointerdown"];return v.forEach(C=>document.body.addEventListener(C,x)),()=>{v.forEach(C=>document.body.removeEventListener(C,x))}},[]);const[de,me]=_.useState(!1),[Ae,Xe]=_.useState(!1),[oe,se]=_.useState(null),[z,te]=_.useState({x:0,y:0}),[Y,fe]=_.useState(null),[Se,P]=_.useState(!1),[ae,ee]=_.useState("idle"),[xe,Te]=_.useState(!1),[he,ze]=_.useState(!1),[Qe,We]=_.useState(null),[ut,kt]=_.useState(null),[bt,st]=_.useState([]),[Dt,lt]=_.useState(null),[qt,Kt]=_.useState(null),[Q,Ne]=_.useState(null),[at,Ce]=_.useState(null),[dt,He]=_.useState([]),[ft,mt]=_.useState(0),[jt,Rt]=_.useState(!1),[ot,V]=_.useState(!1),[J,be]=_.useState(!1),[Ee,nt]=_.useState(!1),[Ge,Be]=_.useState(!1),[pe,Ze]=_.useState("main"),[Ye,Je]=_.useState(!1),[De,et]=_.useState(!1),[_t,gt]=_.useState(!1),[Ke,Lt]=_.useState([]),[wt,ct]=_.useState(null),cn=_.useRef(!1),[rt,It]=_.useState(!1),[pn,Et]=_.useState(!1),[yt,un]=_.useState(1),[tn,Qt]=_.useState("new-page"),[$t,Jt]=_.useState(""),[At,bn]=_.useState(!1),[tt,ds]=_.useState(null),fs=_.useRef(!1),No=_.useRef({rearrange:null,placements:[]}),eo=_.useRef({rearrange:null,placements:[]}),[Co,po]=_.useState(0),[Do,is]=_.useState(0),[Xt,Rn]=_.useState(0),[en,as]=_.useState(0),xs=_.useRef(new Set),bs=_.useRef(new Set),sn=_.useRef(null),As=_.useRef(),Rs=De&&A&&!_t&&rt;_.useEffect(()=>{if(Rs){Et(!1);const x=Al(()=>{Et(!0)});return()=>cancelAnimationFrame(x)}else Et(!1)},[Rs]);const hs=_.useRef(new Map),_o=_.useRef(new Map),to=_.useRef(),[Yn,Ws]=_.useState(!1),[on,Fs]=_.useState([]),Ci=_.useRef(on);Ci.current=on;const[Ms,ko]=_.useState(null),Bs=_.useRef(null);_.useRef(!1),_.useRef([]),_.useRef(0),_.useRef(null),_.useRef(null),_.useRef(1);const[Wn,ms]=_.useState(!1),Xs=_.useRef(null),[Bn,Ls]=_.useState([]),Fn=_.useRef({cmd:!1,shift:!1}),Xn=()=>{Je(!0)},ci=()=>{Je(!1)},ps=()=>{Wn||(Xs.current=Wt(()=>ms(!0),850))},no=()=>{Xs.current&&(clearTimeout(Xs.current),Xs.current=null),ms(!1),ci()};_.useEffect(()=>()=>{Xs.current&&clearTimeout(Xs.current)},[]);const[Zt,ki]=_.useState(()=>{var x;try{const v=JSON.parse((x=localStorage.getItem("feedback-toolbar-settings"))!=null?x:"");return{...Dm,...v,annotationColorId:Fc.find(C=>C.id===v.annotationColorId)?v.annotationColorId:Dm.annotationColorId}}catch{return Dm}}),[Gn,zi]=_.useState(!0),[go,Ns]=_.useState(!1),rs=()=>{var x;(x=le.current)==null||x.classList.add(qe.disableTransitions),zi(v=>!v),Al(()=>{var v;(v=le.current)==null||v.classList.remove(qe.disableTransitions)})},qo=!1,vs="off",[En,yo]=_.useState(b!=null?b:null),ui=_.useRef(!1),[Os,jo]=_.useState(g?"connecting":"disconnected"),[xn,Gs]=_.useState(null),[zs,Ko]=_.useState(!1),[Ds,Qo]=_.useState(null),Ro=_.useRef(!1),[$i,so]=_.useState(new Set),[Mo,Zo]=_.useState(new Set),[Un,Es]=_.useState(!1),[Eo,oo]=_.useState(!1),[io,kn]=_.useState(!1),$s=_.useRef(null),Nn=_.useRef(null),Ps=_.useRef(null),Yo=_.useRef(null),Wo=_.useRef(!1),Pi=_.useRef(0),Jo=_.useRef(null),ws=_.useRef(null),qs=8,qn=50,Ii=_.useRef(null),ji=_.useRef(null),ei=_.useRef(null),Bt=typeof window<"u"?window.location.pathname:"/";_.useEffect(()=>{if(Ee)Be(!0);else{Je(!1),Ze("main");const x=Wt(()=>Be(!1),0);return()=>clearTimeout(x)}},[Ee]);const xo=A&&O&&!De;_.useEffect(()=>{if(xo){Xe(!1),me(!0),so(new Set);const x=Wt(()=>{so(v=>{const C=new Set(v);return D.forEach(j=>C.add(j.id)),C})},350);return()=>clearTimeout(x)}else if(de){Xe(!0);const x=Wt(()=>{me(!1),Xe(!1)},250);return()=>clearTimeout(x)}},[xo]),_.useEffect(()=>{V(!0),mt(window.scrollY);const x=km(Bt);I(x.filter(Or)),Px||(Ns(!0),Px=!0,Wt(()=>Ns(!1),750));try{const v=localStorage.getItem("feedback-toolbar-theme");v!==null&&zi(v==="dark")}catch{}try{const v=localStorage.getItem("feedback-toolbar-position");if(v){const C=JSON.parse(v);typeof C.x=="number"&&typeof C.y=="number"&&Gs(C)}}catch{}},[Bt]),_.useEffect(()=>{ot&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Zt))},[Zt,ot]),_.useEffect(()=>{ot&&localStorage.setItem("feedback-toolbar-theme",Gn?"dark":"light")},[Gn,ot]);const Ks=_.useRef(!1);_.useEffect(()=>{const x=Ks.current;Ks.current=zs,x&&!zs&&xn&&ot&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(xn))},[zs,xn,ot]),_.useEffect(()=>{if(!g||!ot||ui.current)return;ui.current=!0,jo("connecting"),(async()=>{try{const v=cM(Bt),C=b||v;let j=!1;if(C)try{const R=await Ax(g,C);yo(R.id),jo("connected"),jm(Bt,R.id),j=!0;const W=km(Bt),B=new Set(R.annotations.map(Z=>Z.id)),H=W.filter(Z=>!B.has(Z.id));if(H.length>0){const ie=`${typeof window<"u"?window.location.origin:""}${Bt}`,Re=(await Promise.allSettled(H.map(ke=>Cl(g,R.id,{...ke,sessionId:R.id,url:ie})))).map((ke,Le)=>ke.status==="fulfilled"?ke.value:(console.warn("[Agentation] Failed to sync annotation:",ke.reason),H[Le])),we=[...R.annotations,...Re];I(we.filter(Or)),Ac(Bt,we.filter(Or),R.id)}else I(R.annotations.filter(Or)),Ac(Bt,R.annotations.filter(Or),R.id)}catch(R){console.warn("[Agentation] Could not join session, creating new:",R),uM(Bt)}if(!j){const R=typeof window<"u"?window.location.href:"/",W=await Mm(g,R);yo(W.id),jo("connected"),jm(Bt,W.id),w==null||w(W.id);const B=tM(),H=typeof window<"u"?window.location.origin:"",Z=[];for(const[ie,ue]of B){const Re=ue.filter(Le=>!Le._syncedTo);if(Re.length===0)continue;const we=`${H}${ie}`,ke=ie===Bt;Z.push((async()=>{try{const Le=ke?W:await Mm(g,we),ht=(await Promise.allSettled(Re.map(xt=>Cl(g,Le.id,{...xt,sessionId:Le.id,url:we})))).map((xt,St)=>xt.status==="fulfilled"?xt.value:(console.warn("[Agentation] Failed to sync annotation:",xt.reason),Re[St])).filter(Or);if(Ac(ie,ht,Le.id),ke){const xt=new Set(Re.map(St=>St.id));I(St=>{const pt=St.filter(Pt=>!xt.has(Pt.id));return[...ht,...pt]})}}catch(Le){console.warn(`[Agentation] Failed to sync annotations for ${ie}:`,Le)}})())}await Promise.allSettled(Z)}}catch(v){jo("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",v)}})()},[g,b,ot,w,Bt]),_.useEffect(()=>{if(!g||!ot)return;const x=async()=>{try{(await fetch(`${g}/health`)).ok?jo("connected"):jo("disconnected")}catch{jo("disconnected")}};x();const v=oj(x,1e4);return()=>clearInterval(v)},[g,ot]),_.useEffect(()=>{if(!g||!ot||!En)return;const x=new EventSource(`${g}/sessions/${En}/events`),v=["resolved","dismissed"],C=j=>{var R;try{const W=JSON.parse(j.data);if(v.includes((R=W.payload)==null?void 0:R.status)){const B=W.payload.id,H=W.payload.kind;if(H==="placement"){for(const[Z,ie]of hs.current)if(ie===B){hs.current.delete(Z),Lt(ue=>ue.filter(Re=>Re.id!==Z));break}}else if(H==="rearrange"){for(const[Z,ie]of _o.current)if(ie===B){_o.current.delete(Z),ds(ue=>{if(!ue)return null;const Re=ue.sections.filter(we=>we.id!==Z);return Re.length===0?null:{...ue,sections:Re}});break}}else Zo(Z=>new Set(Z).add(B)),Wt(()=>{I(Z=>Z.filter(ie=>ie.id!==B)),Zo(Z=>{const ie=new Set(Z);return ie.delete(B),ie})},150)}}catch{}};return x.addEventListener("annotation.updated",C),()=>{x.removeEventListener("annotation.updated",C),x.close()}},[g,ot,En]),_.useEffect(()=>{if(!g||!ot)return;const x=ws.current==="disconnected",v=Os==="connected";ws.current=Os,x&&v&&(async()=>{try{const j=km(Bt);if(j.length===0)return;const W=`${typeof window<"u"?window.location.origin:""}${Bt}`;let B=En,H=[];if(B)try{H=(await Ax(g,B)).annotations}catch{B=null}B||(B=(await Mm(g,W)).id,yo(B),jm(Bt,B));const Z=new Set(H.map(ue=>ue.id)),ie=j.filter(ue=>!Z.has(ue.id));if(ie.length>0){const Re=(await Promise.allSettled(ie.map(Le=>Cl(g,B,{...Le,sessionId:B,url:W})))).map((Le,vt)=>Le.status==="fulfilled"?Le.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",Le.reason),ie[vt])),ke=[...H,...Re].filter(Or);I(ke),Ac(Bt,ke,B)}}catch(j){console.warn("[Agentation] Failed to sync on reconnect:",j)}})()},[Os,g,ot,En,Bt]);const di=_.useCallback(()=>{U||(K(!0),nt(!1),T(!1),Wt(()=>{fM(!0),X(!0),K(!1)},400))},[U]);_.useEffect(()=>{if(!i||!ot||!e||e.length===0||D.length>0)return;const x=[];return x.push(Wt(()=>{T(!0)},n-200)),e.forEach((v,C)=>{const j=n+C*300;x.push(Wt(()=>{const R=document.querySelector(v.selector);if(!R)return;const W=R.getBoundingClientRect(),{name:B,path:H}=Nl(R),Z={id:`demo-${Date.now()}-${C}`,x:(W.left+W.width/2)/window.innerWidth*100,y:W.top+W.height/2+window.scrollY,comment:v.comment,element:B,elementPath:H,timestamp:Date.now(),selectedText:v.selectedText,boundingBox:{x:W.left,y:W.top+window.scrollY,width:W.width,height:W.height},nearbyText:Ec(R),cssClasses:Tc(R)};I(ie=>[...ie,Z])},j))}),()=>{x.forEach(clearTimeout)}},[i,ot,e,n]),_.useEffect(()=>{const x=()=>{mt(window.scrollY),Rt(!0),ei.current&&clearTimeout(ei.current),ei.current=Wt(()=>{Rt(!1)},150)};return window.addEventListener("scroll",x,{passive:!0}),()=>{window.removeEventListener("scroll",x),ei.current&&clearTimeout(ei.current)}},[]),_.useEffect(()=>{ot&&D.length>0?En?Ac(Bt,D,En):p2(Bt,D):ot&&D.length===0&&localStorage.removeItem(qd(Bt))},[D,Bt,ot,En]),_.useEffect(()=>{if(ot&&!cn.current){cn.current=!0;const x=nM(Bt);x.length>0&&Lt(x)}},[ot,Bt]),_.useEffect(()=>{ot&&cn.current&&!rt&&(Ke.length>0?sM(Bt,Ke):oM(Bt))},[Ke,Bt,ot,rt]),_.useEffect(()=>{if(ot&&!fs.current){fs.current=!0;const x=iM(Bt);if(x){const v={...x,sections:x.sections.map(C=>{var j;return{...C,currentRect:(j=C.currentRect)!=null?j:{...C.originalRect}}})};ds(v)}}},[ot,Bt]),_.useEffect(()=>{ot&&fs.current&&!rt&&(tt?aM(Bt,tt):rM(Bt))},[tt,Bt,ot,rt]);const ti=_.useRef(!1);_.useEffect(()=>{if(ot&&!ti.current){ti.current=!0;const x=lM(Bt);x&&(eo.current={rearrange:x.rearrange,placements:x.placements||[]},x.purpose&&Jt(x.purpose))}},[ot,Bt]),_.useEffect(()=>{var v,C,j,R,W;if(!ot||!ti.current)return;const x=eo.current;rt?((C=(v=tt==null?void 0:tt.sections)==null?void 0:v.length)!=null?C:0)>0||Ke.length>0||$t?Tx(Bt,{rearrange:tt,placements:Ke,purpose:$t}):vd(Bt):((W=(R=(j=x.rearrange)==null?void 0:j.sections)==null?void 0:R.length)!=null?W:0)>0||x.placements.length>0||$t?Tx(Bt,{rearrange:x.rearrange,placements:x.placements,purpose:$t}):vd(Bt)},[tt,Ke,$t,rt,Bt,ot]),_.useEffect(()=>{De&&!tt&&ds({sections:[],originalOrder:[],detectedAt:Date.now()})},[De,tt]),_.useEffect(()=>{if(!g||!En)return;const x=hs.current,v=new Set(Ke.map(C=>C.id));for(const C of Ke){if(x.has(C.id))continue;x.set(C.id,"");const j=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Bt;Cl(g,En,{id:C.id,x:C.x/window.innerWidth*100,y:C.y,comment:`Place ${C.type} at (${Math.round(C.x)}, ${Math.round(C.y)}), ${C.width}×${C.height}px${C.text?` — "${C.text}"`:""}`,element:`[design:${C.type}]`,elementPath:"[placement]",timestamp:C.timestamp,url:j,intent:"change",severity:"important",kind:"placement",placement:{componentType:C.type,width:C.width,height:C.height,scrollY:C.scrollY,text:C.text}}).then(R=>{x.has(C.id)&&x.set(C.id,R.id)}).catch(R=>{console.warn("[Agentation] Failed to sync placement annotation:",R),x.delete(C.id)})}for(const[C,j]of x)v.has(C)||(x.delete(C),j&&lr(g,j).catch(()=>{}))},[Ke,g,En,Bt]),_.useEffect(()=>{if(!(!g||!En))return to.current&&clearTimeout(to.current),to.current=Wt(()=>{const x=_o.current;if(!tt||tt.sections.length===0){for(const[,j]of x)j&&lr(g,j).catch(()=>{});x.clear();return}const v=new Set(tt.sections.map(j=>j.id)),C=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Bt;for(const j of tt.sections){const R=j.originalRect,W=j.currentRect;if(!(Math.abs(R.x-W.x)>1||Math.abs(R.y-W.y)>1||Math.abs(R.width-W.width)>1||Math.abs(R.height-W.height)>1)){const Z=x.get(j.id);Z&&(x.delete(j.id),lr(g,Z).catch(()=>{}));continue}const H=x.get(j.id);H?Nx(g,H,{comment:`Move ${j.label} section (${j.tagName}) — from (${Math.round(R.x)},${Math.round(R.y)}) ${Math.round(R.width)}×${Math.round(R.height)} to (${Math.round(W.x)},${Math.round(W.y)}) ${Math.round(W.width)}×${Math.round(W.height)}`}).catch(Z=>{console.warn("[Agentation] Failed to update rearrange annotation:",Z)}):(x.set(j.id,""),Cl(g,En,{id:j.id,x:W.x/window.innerWidth*100,y:W.y,comment:`Move ${j.label} section (${j.tagName}) — from (${Math.round(R.x)},${Math.round(R.y)}) ${Math.round(R.width)}×${Math.round(R.height)} to (${Math.round(W.x)},${Math.round(W.y)}) ${Math.round(W.width)}×${Math.round(W.height)}`,element:j.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:C,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:j.selector,label:j.label,tagName:j.tagName,originalRect:R,currentRect:W}}).then(Z=>{x.has(j.id)&&x.set(j.id,Z.id)}).catch(Z=>{console.warn("[Agentation] Failed to sync rearrange annotation:",Z),x.delete(j.id)}))}for(const[j,R]of x)v.has(j)||(x.delete(j),R&&lr(g,R).catch(()=>{}))},300),()=>{to.current&&clearTimeout(to.current)}},[tt,g,En,Bt]);const Bo=_.useRef(new Map);_.useLayoutEffect(()=>{var C;const x=(C=tt==null?void 0:tt.sections)!=null?C:[],v=new Set;if((De||_t)&&A)for(const j of x){v.add(j.id);try{const R=document.querySelector(j.selector);if(!R)continue;if(!Bo.current.has(j.id)){const W={transform:R.style.transform,transformOrigin:R.style.transformOrigin,opacity:R.style.opacity,position:R.style.position,zIndex:R.style.zIndex,display:R.style.display},B=[];let H=R.parentElement;for(;H&&H!==document.body;){const ie=getComputedStyle(H);(ie.overflow!=="visible"||ie.overflowX!=="visible"||ie.overflowY!=="visible")&&(B.push({el:H,overflow:H.style.overflow}),H.style.overflow="visible"),H=H.parentElement}getComputedStyle(R).display==="inline"&&(R.style.display="inline-block"),Bo.current.set(j.id,{el:R,origStyles:W,ancestors:B}),R.style.transformOrigin="top left",R.style.zIndex="9999"}}catch{}}for(const[j,R]of Bo.current)if(!v.has(j)){const{el:W,origStyles:B,ancestors:H}=R;W.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",W.style.transform=B.transform,W.style.transformOrigin=B.transformOrigin,W.style.opacity=B.opacity,W.style.position=B.position,W.style.zIndex=B.zIndex,Bo.current.delete(j),Wt(()=>{W.style.transition="",W.style.display=B.display;for(const Z of H)Z.el.style.overflow=Z.overflow},450)}},[tt,De,_t,A]),_.useEffect(()=>()=>{for(const[,x]of Bo.current){const{el:v,origStyles:C,ancestors:j}=x;v.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",v.style.transform=C.transform,v.style.transformOrigin=C.transformOrigin,v.style.opacity=C.opacity,v.style.position=C.position,v.style.zIndex=C.zIndex,Wt(()=>{v.style.transition="",v.style.display=C.display;for(const R of j)R.el.style.overflow=R.overflow},450)}Bo.current.clear()},[]);const Mi=_.useCallback(()=>{gt(!0),et(!1),ct(null),clearTimeout(As.current),As.current=Wt(()=>{gt(!1)},300)},[]),Zi=_.useCallback(()=>{De&&(gt(!0),et(!1),ct(null),clearTimeout(As.current),As.current=Wt(()=>{gt(!1)},300)),T(!1)},[De]),Ji=_.useCallback(()=>{J||(aj(),be(!0))},[J]),E=_.useCallback(()=>{J&&(px(),be(!1))},[J]),F=_.useCallback(()=>{J?E():Ji()},[J,Ji,E]),ce=_.useCallback(()=>{if(Bn.length===0)return;const x=Bn[0],v=x.element,C=Bn.length>1,j=Bn.map(R=>R.element.getBoundingClientRect());if(C){const R={left:Math.min(...j.map(Le=>Le.left)),top:Math.min(...j.map(Le=>Le.top)),right:Math.max(...j.map(Le=>Le.right)),bottom:Math.max(...j.map(Le=>Le.bottom))},W=Bn.slice(0,5).map(Le=>Le.name).join(", "),B=Bn.length>5?` +${Bn.length-5} more`:"",H=j.map(Le=>({x:Le.left,y:Le.top+window.scrollY,width:Le.width,height:Le.height})),ie=Bn[Bn.length-1].element,ue=j[j.length-1],Re=ue.left+ue.width/2,we=ue.top+ue.height/2,ke=Rm(ie);fe({x:Re/window.innerWidth*100,y:ke?we:we+window.scrollY,clientY:we,element:`${Bn.length} elements: ${W}${B}`,elementPath:"multi-select",boundingBox:{x:R.left,y:R.top+window.scrollY,width:R.right-R.left,height:R.bottom-R.top},isMultiSelect:!0,isFixed:ke,elementBoundingBoxes:H,multiSelectElements:Bn.map(Le=>Le.element),targetElement:ie,fullPath:yd(v),accessibility:gd(v),computedStyles:_d(v),computedStylesObj:pd(v),nearbyElements:md(v),cssClasses:Tc(v),nearbyText:Ec(v),sourceFile:Cd(v)})}else{const R=j[0],W=Rm(v);fe({x:R.left/window.innerWidth*100,y:W?R.top:R.top+window.scrollY,clientY:R.top,element:x.name,elementPath:x.path,boundingBox:{x:R.left,y:W?R.top:R.top+window.scrollY,width:R.width,height:R.height},isFixed:W,fullPath:yd(v),accessibility:gd(v),computedStyles:_d(v),computedStylesObj:pd(v),nearbyElements:md(v),cssClasses:Tc(v),nearbyText:Ec(v),reactComponents:x.reactComponents,sourceFile:Cd(v)})}Ls([]),se(null)},[Bn]);_.useEffect(()=>{A||(fe(null),Ne(null),Ce(null),He([]),se(null),nt(!1),Ls([]),Fn.current={cmd:!1,shift:!1},J&&E())},[A,J,E]),_.useEffect(()=>()=>{px()},[]),_.useEffect(()=>{if(!A)return;const x=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),v=":not([data-agentation-root]):not([data-agentation-root] *)",C=document.createElement("style");return C.id="feedback-cursor-styles",C.textContent=`
      body ${v} {
        cursor: crosshair !important;
      }

      body :is(${x})${v} {
        cursor: text !important;
      }
    `,document.head.appendChild(C),()=>{const j=document.getElementById("feedback-cursor-styles");j&&j.remove()}},[A]),_.useEffect(()=>{if(Ms!==null&&A)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Ms,A]),_.useEffect(()=>{if(!A||Y||Yn||De)return;const x=v=>{const C=v.composedPath()[0]||v.target;if(oi(C,"[data-feedback-toolbar]")){se(null);return}const j=Lr(v.clientX,v.clientY);if(!j||oi(j,"[data-feedback-toolbar]")){se(null);return}const{name:R,elementName:W,path:B,reactComponents:H}=Nm(j,vs),Z=j.getBoundingClientRect();se({element:R,elementName:W,elementPath:B,rect:Z,reactComponents:H}),te({x:v.clientX,y:v.clientY})};return document.addEventListener("mousemove",x),()=>document.removeEventListener("mousemove",x)},[A,Y,Yn,De,vs,on]);const Me=_.useCallback(x=>{var v;if(Ne(x),We(null),kt(null),st([]),(v=x.elementBoundingBoxes)!=null&&v.length){const C=[];for(const j of x.elementBoundingBoxes){const R=j.x+j.width/2,W=j.y+j.height/2-window.scrollY,B=Lr(R,W);B&&C.push(B)}He(C),Ce(null)}else if(x.boundingBox){const C=x.boundingBox,j=C.x+C.width/2,R=x.isFixed?C.y+C.height/2:C.y+C.height/2-window.scrollY,W=Lr(j,R);if(W){const B=W.getBoundingClientRect(),H=B.width/C.width,Z=B.height/C.height;H<.5||Z<.5?Ce(null):Ce(W)}else Ce(null);He([])}else Ce(null),He([])},[]);_.useEffect(()=>{if(!A||Yn||De)return;const x=v=>{var zt,ht;if(Wo.current){Wo.current=!1;return}const C=v.composedPath()[0]||v.target;if(oi(C,"[data-feedback-toolbar]")||oi(C,"[data-annotation-popup]")||oi(C,"[data-annotation-marker]"))return;if(v.metaKey&&v.shiftKey&&!Y&&!Q){v.preventDefault(),v.stopPropagation();const xt=Lr(v.clientX,v.clientY);if(!xt)return;const St=xt.getBoundingClientRect(),{name:pt,path:Pt,reactComponents:Dn}=Nm(xt,vs),gn=Bn.findIndex(Ss=>Ss.element===xt);gn>=0?Ls(Ss=>Ss.filter((ro,Ln)=>Ln!==gn)):Ls(Ss=>[...Ss,{element:xt,rect:St,name:pt,path:Pt,reactComponents:Dn!=null?Dn:void 0}]);return}const j=oi(C,"button, a, input, select, textarea, [role='button'], [onclick]");if(Zt.blockInteractions&&j&&(v.preventDefault(),v.stopPropagation()),Y){if(j&&!Zt.blockInteractions)return;v.preventDefault(),(zt=Ii.current)==null||zt.shake();return}if(Q){if(j&&!Zt.blockInteractions)return;v.preventDefault(),(ht=ji.current)==null||ht.shake();return}v.preventDefault();const R=Lr(v.clientX,v.clientY);if(!R)return;const{name:W,path:B,reactComponents:H}=Nm(R,vs),Z=R.getBoundingClientRect(),ie=v.clientX/window.innerWidth*100,ue=Rm(R),Re=ue?v.clientY:v.clientY+window.scrollY,we=window.getSelection();let ke;we&&we.toString().trim().length>0&&(ke=we.toString().trim().slice(0,500));const Le=pd(R),vt=_d(R);fe({x:ie,y:Re,clientY:v.clientY,element:W,elementPath:B,selectedText:ke,boundingBox:{x:Z.left,y:ue?Z.top:Z.top+window.scrollY,width:Z.width,height:Z.height},nearbyText:Ec(R),cssClasses:Tc(R),isFixed:ue,fullPath:yd(R),accessibility:gd(R),computedStyles:vt,computedStylesObj:Le,nearbyElements:md(R),reactComponents:H!=null?H:void 0,sourceFile:Cd(R),targetElement:R}),se(null)};return document.addEventListener("click",x,!0),()=>document.removeEventListener("click",x,!0)},[A,Yn,De,Y,Q,Zt.blockInteractions,vs,Bn]),_.useEffect(()=>{if(!A)return;const x=j=>{j.key==="Meta"&&(Fn.current.cmd=!0),j.key==="Shift"&&(Fn.current.shift=!0)},v=j=>{const R=Fn.current.cmd&&Fn.current.shift;j.key==="Meta"&&(Fn.current.cmd=!1),j.key==="Shift"&&(Fn.current.shift=!1);const W=Fn.current.cmd&&Fn.current.shift;R&&!W&&Bn.length>0&&ce()},C=()=>{Fn.current={cmd:!1,shift:!1},Ls([])};return document.addEventListener("keydown",x),document.addEventListener("keyup",v),window.addEventListener("blur",C),()=>{document.removeEventListener("keydown",x),document.removeEventListener("keyup",v),window.removeEventListener("blur",C)}},[A,Bn,ce]),_.useEffect(()=>{if(!A||Y||Yn||De)return;const x=v=>{const C=v.composedPath()[0]||v.target;oi(C,"[data-feedback-toolbar]")||oi(C,"[data-annotation-marker]")||oi(C,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(C.tagName)||C.isContentEditable||(v.preventDefault(),$s.current={x:v.clientX,y:v.clientY})};return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[A,Y,Yn,De]),_.useEffect(()=>{if(!A||Y)return;const x=v=>{if(!$s.current)return;const C=v.clientX-$s.current.x,j=v.clientY-$s.current.y,R=C*C+j*j,W=qs*qs;if(!io&&R>=W&&(Nn.current=$s.current,kn(!0),v.preventDefault()),(io||R>=W)&&Nn.current){if(Ps.current){const pt=Math.min(Nn.current.x,v.clientX),Pt=Math.min(Nn.current.y,v.clientY),Dn=Math.abs(v.clientX-Nn.current.x),gn=Math.abs(v.clientY-Nn.current.y);Ps.current.style.transform=`translate(${pt}px, ${Pt}px)`,Ps.current.style.width=`${Dn}px`,Ps.current.style.height=`${gn}px`}const B=Date.now();if(B-Pi.current<qn)return;Pi.current=B;const H=Nn.current.x,Z=Nn.current.y,ie=Math.min(H,v.clientX),ue=Math.min(Z,v.clientY),Re=Math.max(H,v.clientX),we=Math.max(Z,v.clientY),ke=(ie+Re)/2,Le=(ue+we)/2,vt=new Set,zt=[[ie,ue],[Re,ue],[ie,we],[Re,we],[ke,Le],[ke,ue],[ke,we],[ie,Le],[Re,Le]];for(const[pt,Pt]of zt){const Dn=document.elementsFromPoint(pt,Pt);for(const gn of Dn)gn instanceof HTMLElement&&vt.add(gn)}const ht=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const pt of ht)if(pt instanceof HTMLElement){const Pt=pt.getBoundingClientRect(),Dn=Pt.left+Pt.width/2,gn=Pt.top+Pt.height/2,Ss=Dn>=ie&&Dn<=Re&&gn>=ue&&gn<=we,ro=Math.min(Pt.right,Re)-Math.max(Pt.left,ie),Ln=Math.min(Pt.bottom,we)-Math.max(Pt.top,ue),Is=ro>0&&Ln>0?ro*Ln:0,To=Pt.width*Pt.height,hi=To>0?Is/To:0;(Ss||hi>.5)&&vt.add(pt)}const xt=[],St=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const pt of vt){if(oi(pt,"[data-feedback-toolbar]")||oi(pt,"[data-annotation-marker]"))continue;const Pt=pt.getBoundingClientRect();if(!(Pt.width>window.innerWidth*.8&&Pt.height>window.innerHeight*.5)&&!(Pt.width<10||Pt.height<10)&&Pt.left<Re&&Pt.right>ie&&Pt.top<we&&Pt.bottom>ue){const Dn=pt.tagName;let gn=St.has(Dn);if(!gn&&(Dn==="DIV"||Dn==="SPAN")){const Ss=pt.textContent&&pt.textContent.trim().length>0,ro=pt.onclick!==null||pt.getAttribute("role")==="button"||pt.getAttribute("role")==="link"||pt.classList.contains("clickable")||pt.hasAttribute("data-clickable");(Ss||ro)&&!pt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(gn=!0)}if(gn){let Ss=!1;for(const ro of xt)if(ro.left<=Pt.left&&ro.right>=Pt.right&&ro.top<=Pt.top&&ro.bottom>=Pt.bottom){Ss=!0;break}Ss||xt.push(Pt)}}}if(Yo.current){const pt=Yo.current;for(;pt.children.length>xt.length;)pt.removeChild(pt.lastChild);xt.forEach((Pt,Dn)=>{let gn=pt.children[Dn];gn||(gn=document.createElement("div"),gn.className=qe.selectedElementHighlight,pt.appendChild(gn)),gn.style.transform=`translate(${Pt.left}px, ${Pt.top}px)`,gn.style.width=`${Pt.width}px`,gn.style.height=`${Pt.height}px`})}}};return document.addEventListener("mousemove",x,{passive:!0}),()=>document.removeEventListener("mousemove",x)},[A,Y,io,qs]),_.useEffect(()=>{if(!A)return;const x=v=>{const C=io,j=Nn.current;if(io&&j){Wo.current=!0;const R=Math.min(j.x,v.clientX),W=Math.min(j.y,v.clientY),B=Math.max(j.x,v.clientX),H=Math.max(j.y,v.clientY),Z=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(ke=>{if(!(ke instanceof HTMLElement)||oi(ke,"[data-feedback-toolbar]")||oi(ke,"[data-annotation-marker]"))return;const Le=ke.getBoundingClientRect();Le.width>window.innerWidth*.8&&Le.height>window.innerHeight*.5||Le.width<10||Le.height<10||Le.left<B&&Le.right>R&&Le.top<H&&Le.bottom>W&&Z.push({element:ke,rect:Le})});const ue=Z.filter(({element:ke})=>!Z.some(({element:Le})=>Le!==ke&&ke.contains(Le))),Re=v.clientX/window.innerWidth*100,we=v.clientY+window.scrollY;if(ue.length>0){const ke=ue.reduce((St,{rect:pt})=>({left:Math.min(St.left,pt.left),top:Math.min(St.top,pt.top),right:Math.max(St.right,pt.right),bottom:Math.max(St.bottom,pt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),Le=ue.slice(0,5).map(({element:St})=>Nl(St).name).join(", "),vt=ue.length>5?` +${ue.length-5} more`:"",zt=ue[0].element,ht=pd(zt),xt=_d(zt);fe({x:Re,y:we,clientY:v.clientY,element:`${ue.length} elements: ${Le}${vt}`,elementPath:"multi-select",boundingBox:{x:ke.left,y:ke.top+window.scrollY,width:ke.right-ke.left,height:ke.bottom-ke.top},isMultiSelect:!0,fullPath:yd(zt),accessibility:gd(zt),computedStyles:xt,computedStylesObj:ht,nearbyElements:md(zt),cssClasses:Tc(zt),nearbyText:Ec(zt),sourceFile:Cd(zt)})}else{const ke=Math.abs(B-R),Le=Math.abs(H-W);ke>20&&Le>20&&fe({x:Re,y:we,clientY:v.clientY,element:"Area selection",elementPath:`region at (${Math.round(R)}, ${Math.round(W)})`,boundingBox:{x:R,y:W+window.scrollY,width:ke,height:Le},isMultiSelect:!0})}se(null)}else C&&(Wo.current=!0);$s.current=null,Nn.current=null,kn(!1),Yo.current&&(Yo.current.innerHTML="")};return document.addEventListener("mouseup",x),()=>document.removeEventListener("mouseup",x)},[A,io]);const Ve=_.useCallback(async(x,v,C)=>{const j=Zt.webhookUrl||k;if(!j||!Zt.webhooksEnabled&&!C)return!1;try{return(await fetch(j,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:x,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...v})})).ok}catch(R){return console.warn("[Agentation] Webhook failed:",R),!1}},[k,Zt.webhookUrl,Zt.webhooksEnabled]),it=_.useCallback(x=>{var C;if(!Y)return;const v={id:Date.now().toString(),x:Y.x,y:Y.y,comment:x,element:Y.element,elementPath:Y.elementPath,timestamp:Date.now(),selectedText:Y.selectedText,boundingBox:Y.boundingBox,nearbyText:Y.nearbyText,cssClasses:Y.cssClasses,isMultiSelect:Y.isMultiSelect,isFixed:Y.isFixed,fullPath:Y.fullPath,accessibility:Y.accessibility,computedStyles:Y.computedStyles,nearbyElements:Y.nearbyElements,reactComponents:Y.reactComponents,sourceFile:Y.sourceFile,elementBoundingBoxes:Y.elementBoundingBoxes,...g&&En?{sessionId:En,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};I(j=>[...j,v]),Jo.current=v.id,Wt(()=>{Jo.current=null},300),Wt(()=>{so(j=>new Set(j).add(v.id))},250),a==null||a(v),Ve("annotation.add",{annotation:v}),Es(!0),Wt(()=>{fe(null),Es(!1)},150),(C=window.getSelection())==null||C.removeAllRanges(),g&&En&&Cl(g,En,v).then(j=>{j.id!==v.id&&(I(R=>R.map(W=>W.id===v.id?{...W,id:j.id}:W)),so(R=>{const W=new Set(R);return W.delete(v.id),W.add(j.id),W}))}).catch(j=>{console.warn("[Agentation] Failed to sync annotation:",j)})},[Y,a,Ve,g,En]),Yt=_.useCallback(()=>{Es(!0),Wt(()=>{fe(null),Es(!1)},150)},[]),Ht=_.useCallback(x=>{const v=D.findIndex(j=>j.id===x),C=D[v];(Q==null?void 0:Q.id)===x&&(oo(!0),Wt(()=>{Ne(null),Ce(null),He([]),oo(!1)},150)),lt(x),Zo(j=>new Set(j).add(x)),C&&(c==null||c(C),Ve("annotation.delete",{annotation:C})),g&&lr(g,x).catch(j=>{console.warn("[Agentation] Failed to delete annotation from server:",j)}),Wt(()=>{I(j=>j.filter(R=>R.id!==x)),Zo(j=>{const R=new Set(j);return R.delete(x),R}),lt(null),v<D.length-1&&(Kt(v),Wt(()=>Kt(null),200))},150)},[D,Q,c,Ve,g]),Ft=_.useCallback(x=>{var v;if(!x){We(null),kt(null),st([]);return}if(We(x.id),(v=x.elementBoundingBoxes)!=null&&v.length){const C=[];for(const j of x.elementBoundingBoxes){const R=j.x+j.width/2,W=j.y+j.height/2-window.scrollY,H=document.elementsFromPoint(R,W).find(Z=>!Z.closest("[data-annotation-marker]")&&!Z.closest("[data-agentation-root]"));H&&C.push(H)}st(C),kt(null)}else if(x.boundingBox){const C=x.boundingBox,j=C.x+C.width/2,R=x.isFixed?C.y+C.height/2:C.y+C.height/2-window.scrollY,W=Lr(j,R);if(W){const B=W.getBoundingClientRect(),H=B.width/C.width,Z=B.height/C.height;H<.5||Z<.5?kt(null):kt(W)}else kt(null);st([])}else kt(null),st([])},[]),fn=_.useCallback(x=>{if(!Q)return;const v={...Q,comment:x};I(C=>C.map(j=>j.id===Q.id?v:j)),u==null||u(v),Ve("annotation.update",{annotation:v}),g&&Nx(g,Q.id,{comment:x}).catch(C=>{console.warn("[Agentation] Failed to update annotation on server:",C)}),oo(!0),Wt(()=>{Ne(null),Ce(null),He([]),oo(!1)},150)},[Q,u,Ve,g]),vn=_.useCallback(()=>{oo(!0),Wt(()=>{Ne(null),Ce(null),He([]),oo(!1)},150)},[]),an=_.useCallback(()=>{const x=D.length,v=Ke.length>0||!!tt;if(x===0&&on.length===0&&!v)return;if(d==null||d(D),Ve("annotations.clear",{annotations:D}),g){Promise.all(D.map(R=>lr(g,R.id).catch(W=>{console.warn("[Agentation] Failed to delete annotation from server:",W)})));for(const[,R]of hs.current)R&&lr(g,R).catch(()=>{});hs.current.clear();for(const[,R]of _o.current)R&&lr(g,R).catch(()=>{});_o.current.clear()}ze(!0),Te(!0),Fs([]);const C=Bs.current;if(C){const R=C.getContext("2d");R&&R.clearRect(0,0,C.width,C.height)}(Ke.length>0||tt)&&(Rn(R=>R+1),as(R=>R+1),Wt(()=>{Lt([]),ds(null)},200)),rt&&It(!1),$t&&Jt(""),eo.current={rearrange:null,placements:[]},vd(Bt);const j=x*30+200;Wt(()=>{I([]),so(new Set),localStorage.removeItem(qd(Bt)),ze(!1)},j),Wt(()=>Te(!1),1500)},[Bt,D,on,Ke,tt,rt,$t,d,Ve,g]),Vn=_.useCallback(async()=>{const x=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Bt,v=De&&rt;let C;if(v){if(Ke.length===0&&!tt&&!$t)return;C=""}else{if(C=Bx(D,x,Zt.outputDetail),!C&&on.length===0&&Ke.length===0&&!tt)return;C||(C=`## Page Feedback: ${x}
`)}if(!v&&on.length>0){const j=new Set;for(const H of D)H.drawingIndex!=null&&j.add(H.drawingIndex);const R=Bs.current;R&&(R.style.visibility="hidden");const W=[],B=window.scrollY;for(let H=0;H<on.length;H++){if(j.has(H))continue;const Z=on[H];if(Z.points.length<2)continue;const ie=Z.fixed?Z.points:Z.points.map(Pn=>({x:Pn.x,y:Pn.y-B}));let ue=1/0,Re=1/0,we=-1/0,ke=-1/0;for(const Pn of ie)ue=Math.min(ue,Pn.x),Re=Math.min(Re,Pn.y),we=Math.max(we,Pn.x),ke=Math.max(ke,Pn.y);const Le=we-ue,vt=ke-Re,zt=Math.hypot(Le,vt),ht=ie[0],xt=ie[ie.length-1],St=Math.hypot(xt.x-ht.x,xt.y-ht.y);let pt;const Pt=St<zt*.35,Dn=Le/Math.max(vt,1);if(Pt&&zt>20){const Pn=Math.max(Le,vt)*.15;let mi=0;for(const Ei of ie){const _r=Ei.x-ue<Pn,Wr=we-Ei.x<Pn,Fr=Ei.y-Re<Pn,Xr=ke-Ei.y<Pn;(_r||Wr)&&(Fr||Xr)&&mi++}pt=mi>ie.length*.15?"box":"circle"}else Dn>3&&vt<40?pt="underline":St>zt*.5?pt="arrow":pt="drawing";const gn=Math.min(10,ie.length),Ss=Math.max(1,Math.floor(ie.length/gn)),ro=new Set,Ln=[],Is=[ht];for(let Pn=Ss;Pn<ie.length-1;Pn+=Ss)Is.push(ie[Pn]);Is.push(xt);for(const Pn of Is){const mi=Lr(Pn.x,Pn.y);if(!mi||ro.has(mi)||oi(mi,"[data-feedback-toolbar]"))continue;ro.add(mi);const{name:Ei}=Nl(mi);Ln.includes(Ei)||Ln.push(Ei)}const To=`${Math.round(ue)},${Math.round(Re)} → ${Math.round(we)},${Math.round(ke)}`;let hi;(pt==="circle"||pt==="box")&&Ln.length>0?hi=`${pt==="box"?"Boxed":"Circled"} **${Ln[0]}**${Ln.length>1?` (and ${Ln.slice(1).join(", ")})`:""} (region: ${To})`:pt==="underline"&&Ln.length>0?hi=`Underlined **${Ln[0]}** (${To})`:pt==="arrow"&&Ln.length>=2?hi=`Arrow from **${Ln[0]}** to **${Ln[Ln.length-1]}** (${Math.round(ht.x)},${Math.round(ht.y)} → ${Math.round(xt.x)},${Math.round(xt.y)})`:Ln.length>0?hi=`${pt==="arrow"?"Arrow":"Drawing"} near **${Ln.join("**, **")}** (region: ${To})`:hi=`Drawing at ${To}`,W.push(hi)}R&&(R.style.visibility=""),W.length>0&&(C+=`
**Drawings:**
`,W.forEach((H,Z)=>{C+=`${Z+1}. ${H}
`}))}if((Ke.length>0||v&&$t)&&(C+=`
`+Mx(Ke,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:rt,wireframePurpose:$t||void 0},Zt.outputDetail)),tt){const j=Ex(tt,Zt.outputDetail,{width:window.innerWidth,height:window.innerHeight});j&&(C+=`
`+j)}if(y)try{await navigator.clipboard.writeText(C)}catch{}h==null||h(C),P(!0),Wt(()=>P(!1),2e3),Zt.autoClearAfterCopy&&Wt(()=>an(),500)},[D,on,Ke,tt,rt,De,tn,$t,Bt,Zt.outputDetail,vs,Zt.autoClearAfterCopy,an,y,h]),_n=_.useCallback(async()=>{const x=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Bt;let v=Bx(D,x,Zt.outputDetail);if(!v&&Ke.length===0&&!tt)return;if(v||(v=`## Page Feedback: ${x}
`),Ke.length>0&&(v+=`
`+Mx(Ke,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:rt,wireframePurpose:$t||void 0},Zt.outputDetail)),tt){const j=Ex(tt,Zt.outputDetail,{width:window.innerWidth,height:window.innerHeight});j&&(v+=`
`+j)}p&&p(v,D),ee("sending"),await new Promise(j=>Wt(j,150));const C=await Ve("submit",{output:v,annotations:D},!0);ee(C?"sent":"failed"),Wt(()=>ee("idle"),2500),C&&Zt.autoClearAfterCopy&&Wt(()=>an(),500)},[p,Ve,D,Ke,tt,rt,tn,Bt,Zt.outputDetail,vs,Zt.autoClearAfterCopy,an]);_.useEffect(()=>{if(!Ds)return;const x=10,v=j=>{const R=j.clientX-Ds.x,W=j.clientY-Ds.y,B=Math.sqrt(R*R+W*W);if(!zs&&B>x&&Ko(!0),zs||B>x){let H=Ds.toolbarX+R,Z=Ds.toolbarY+W;const ie=20,ue=337,Re=44,ke=ue-(A?Os==="connected"?297:257:44),Le=ie-ke,vt=window.innerWidth-ie-ue;H=Math.max(Le,Math.min(vt,H)),Z=Math.max(ie,Math.min(window.innerHeight-Re-ie,Z)),Gs({x:H,y:Z})}},C=()=>{zs&&(Ro.current=!0),Ko(!1),Qo(null)};return document.addEventListener("mousemove",v),document.addEventListener("mouseup",C),()=>{document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",C)}},[Ds,zs,A,Os]);const Vt=_.useCallback(x=>{var W,B;if(x.target.closest("button")||x.target.closest("[data-agentation-settings-panel]"))return;const v=x.currentTarget.parentElement;if(!v)return;const C=v.getBoundingClientRect(),j=(W=xn==null?void 0:xn.x)!=null?W:C.left,R=(B=xn==null?void 0:xn.y)!=null?B:C.top;Qo({x:x.clientX,y:x.clientY,toolbarX:j,toolbarY:R})},[xn]);if(_.useEffect(()=>{if(!xn)return;const x=()=>{let R=xn.x,W=xn.y;const Z=20-(337-(A?Os==="connected"?297:257:44)),ie=window.innerWidth-20-337;R=Math.max(Z,Math.min(ie,R)),W=Math.max(20,Math.min(window.innerHeight-44-20,W)),(R!==xn.x||W!==xn.y)&&Gs({x:R,y:W})};return x(),window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[xn,A,Os]),_.useEffect(()=>{const x=v=>{const C=v.target,j=C.tagName==="INPUT"||C.tagName==="TEXTAREA"||C.isContentEditable;if(v.key==="Escape"){if(De){wt?ct(null):Mi();return}if(Yn){Ws(!1);return}if(Bn.length>0){Ls([]);return}Y||A&&(Xn(),T(!1))}if((v.metaKey||v.ctrlKey)&&v.shiftKey&&(v.key==="f"||v.key==="F")){v.preventDefault(),Xn(),A?Zi():T(!0);return}if(!(j||v.metaKey||v.ctrlKey)&&((v.key==="p"||v.key==="P")&&(v.preventDefault(),Xn(),F()),(v.key==="l"||v.key==="L")&&(v.preventDefault(),Xn(),Yn&&Ws(!1),Ee&&nt(!1),Y&&Yt(),De?Mi():et(!0)),(v.key==="h"||v.key==="H")&&D.length>0&&(v.preventDefault(),Xn(),N(R=>!R)),(v.key==="c"||v.key==="C")&&(D.length>0||Ke.length>0||tt)&&(v.preventDefault(),Xn(),Vn()),(v.key==="x"||v.key==="X")&&(D.length>0||Ke.length>0||tt)&&(v.preventDefault(),Xn(),an(),Ke.length>0&&Lt([]),tt&&ds(null)),v.key==="s"||v.key==="S")){const R=pa(Zt.webhookUrl)||pa(k||"");D.length>0&&R&&ae==="idle"&&(v.preventDefault(),Xn(),_n())}};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[A,Yn,De,wt,Ke,tt,Y,D.length,Zt.webhookUrl,k,ae,_n,F,Vn,an,Bn]),!ot||G)return null;const Tn=D.length>0,nn=D.filter(x=>!Mo.has(x.id)&&x.kind!=="placement"&&x.kind!=="rearrange"),_s=nn.length>0,gs=D.filter(x=>Mo.has(x.id)),Lo=x=>{const W=x.x/100*window.innerWidth,B=typeof x.y=="string"?parseFloat(x.y):x.y,H={};window.innerHeight-B-22-10<80&&(H.top="auto",H.bottom="calc(100% + 10px)");const ie=W-200/2,ue=10;if(ie<ue){const Re=ue-ie;H.left=`calc(50% + ${Re}px)`}else if(ie+200>window.innerWidth-ue){const Re=ie+200-(window.innerWidth-ue);H.left=`calc(50% - ${Re}px)`}return H};return zl.createPortal(l.jsxs("div",{ref:le,style:{display:"contents"},"data-agentation-theme":Gn?"dark":"light","data-agentation-accent":Zt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${qe.toolbar}${M?` ${M}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:xn?{left:xn.x,top:xn.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${qe.toolbarContainer} ${A?qe.expanded:qe.collapsed} ${go?qe.entrance:""} ${U?qe.hiding:""} ${!Zt.webhooksEnabled&&(pa(Zt.webhookUrl)||pa(k||""))?qe.serverConnected:""}`,onClick:A?void 0:x=>{if(Ro.current){Ro.current=!1,x.preventDefault();return}T(!0)},onMouseDown:Vt,role:A?void 0:"button",tabIndex:A?-1:0,title:A?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${qe.toggleContent} ${A?qe.hidden:qe.visible}`,children:[l.jsx(U3,{size:24}),_s&&l.jsx("span",{className:`${qe.badge} ${A?qe.fadeOut:""} ${go?qe.entrance:""}`,children:nn.length})]}),l.jsxs("div",{className:`${qe.controlsContent} ${A?qe.visible:qe.hidden} ${xn&&xn.y<100?qe.tooltipBelow:""} ${Ye||Ee?qe.tooltipsHidden:""} ${Wn?qe.tooltipsInSession:""}`,onMouseEnter:ps,onMouseLeave:no,children:[l.jsxs("div",{className:`${qe.buttonWrapper} ${xn&&xn.x<120?qe.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:qe.controlButton,onClick:x=>{x.stopPropagation(),Xn(),F()},"data-active":J,children:l.jsx(X3,{size:24,isPaused:J})}),l.jsxs("span",{className:qe.buttonTooltip,children:[J?"Resume animations":"Pause animations",l.jsx("span",{className:qe.shortcut,children:"P"})]})]}),l.jsxs("div",{className:qe.buttonWrapper,children:[l.jsx("button",{className:`${qe.controlButton} ${Gn?"":qe.light}`,onClick:x=>{x.stopPropagation(),Xn(),Yn&&Ws(!1),Ee&&nt(!1),Y&&Yt(),De?Mi():et(!0)},"data-active":De,style:De&&rt?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(nj,{size:21})}),l.jsxs("span",{className:qe.buttonTooltip,children:[De?"Exit layout mode":"Layout mode",l.jsx("span",{className:qe.shortcut,children:"L"})]})]}),l.jsxs("div",{className:qe.buttonWrapper,children:[l.jsx("button",{className:qe.controlButton,onClick:x=>{x.stopPropagation(),Xn(),N(!O)},disabled:!Tn||De,children:l.jsx(F3,{size:24,isOpen:O})}),l.jsxs("span",{className:qe.buttonTooltip,children:[O?"Hide markers":"Show markers",l.jsx("span",{className:qe.shortcut,children:"H"})]})]}),l.jsxs("div",{className:qe.buttonWrapper,children:[l.jsx("button",{className:`${qe.controlButton} ${Se?qe.statusShowing:""}`,onClick:x=>{x.stopPropagation(),Xn(),Vn()},disabled:De&&rt?Ke.length===0&&!((ao=tt==null?void 0:tt.sections)!=null&&ao.length):!Tn&&on.length===0&&Ke.length===0&&!((bo=tt==null?void 0:tt.sections)!=null&&bo.length),"data-active":Se,children:l.jsx(Y3,{size:24,copied:Se,tint:De&&rt&&(Ke.length>0||(vo=tt==null?void 0:tt.sections)!=null&&vo.length)?"#f97316":void 0})}),l.jsxs("span",{className:qe.buttonTooltip,children:[De&&rt?"Copy layout":"Copy feedback",l.jsx("span",{className:qe.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${qe.buttonWrapper} ${qe.sendButtonWrapper} ${A&&!Zt.webhooksEnabled&&(pa(Zt.webhookUrl)||pa(k||""))?qe.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${qe.controlButton} ${ae==="sent"||ae==="failed"?qe.statusShowing:""}`,onClick:x=>{x.stopPropagation(),Xn(),_n()},disabled:!Tn||!pa(Zt.webhookUrl)&&!pa(k||"")||ae==="sending","data-no-hover":ae==="sent"||ae==="failed",tabIndex:pa(Zt.webhookUrl)||pa(k||"")?0:-1,children:[l.jsx(W3,{size:24,state:ae}),Tn&&ae==="idle"&&l.jsx("span",{className:qe.buttonBadge,children:D.length})]}),l.jsxs("span",{className:qe.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:qe.shortcut,children:"S"})]})]}),l.jsxs("div",{className:qe.buttonWrapper,children:[l.jsx("button",{className:qe.controlButton,onClick:x=>{x.stopPropagation(),Xn(),an()},disabled:!Tn&&on.length===0&&Ke.length===0&&!((fi=tt==null?void 0:tt.sections)!=null&&fi.length),"data-danger":!0,children:l.jsx(q3,{size:24})}),l.jsxs("span",{className:qe.buttonTooltip,children:["Clear all",l.jsx("span",{className:qe.shortcut,children:"X"})]})]}),l.jsxs("div",{className:qe.buttonWrapper,children:[l.jsx("button",{className:qe.controlButton,onClick:x=>{x.stopPropagation(),Xn(),De&&Mi(),nt(!Ee)},children:l.jsx(G3,{size:24})}),g&&Os!=="disconnected"&&l.jsx("span",{className:`${qe.mcpIndicator} ${qe[Os]} ${Ee?qe.hidden:""}`,title:Os==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:qe.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:qe.divider}),l.jsxs("div",{className:`${qe.buttonWrapper} ${xn&&typeof window<"u"&&xn.x>window.innerWidth-120?qe.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:qe.controlButton,onClick:x=>{x.stopPropagation(),Xn(),Zi()},children:l.jsx(K3,{size:24})}),l.jsxs("span",{className:qe.buttonTooltip,children:["Exit",l.jsx("span",{className:qe.shortcut,children:"Esc"})]})]})]}),l.jsx(N8,{visible:De&&A,activeType:wt,onSelect:x=>{ct(wt===x?null:x)},isDarkMode:Gn,sectionCount:(Oo=tt==null?void 0:tt.sections.length)!=null?Oo:0,onDetectSections:()=>{var B,H;const x=U8(),v=(B=tt==null?void 0:tt.sections)!=null?B:[],C=new Set(v.map(Z=>Z.selector)),j=x.filter(Z=>!C.has(Z.selector)),R=[...v,...j],W=[...(H=tt==null?void 0:tt.originalOrder)!=null?H:[],...j.map(Z=>Z.id)];ds({sections:R,originalOrder:W,detectedAt:Date.now()})},placementCount:Ke.length,onClearPlacements:()=>{Rn(x=>x+1),as(x=>x+1),Wt(()=>{ds({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:rt,onBlankCanvasChange:x=>{const v={sections:[],originalOrder:[],detectedAt:Date.now()};x?(No.current={rearrange:tt,placements:Ke},ds(eo.current.rearrange||v),Lt(eo.current.placements),ct(null)):(eo.current={rearrange:tt,placements:Ke},ds(No.current.rearrange||v),Lt(No.current.placements)),It(x)},wireframePurpose:$t,onWireframePurposeChange:Jt,Tooltip:Pr,onDragStart:(x,v)=>{var Re;v.preventDefault();const C=Ct[x];let j=null,R=!1;const W=v.clientX,B=v.clientY,H=v.target.closest("[data-feedback-toolbar]"),Z=(Re=H==null?void 0:H.getBoundingClientRect().top)!=null?Re:window.innerHeight,ie=we=>{const ke=we.clientX-W,Le=we.clientY-B;if(!R&&(Math.abs(ke)>4||Math.abs(Le)>4)&&(R=!0,j=document.createElement("div"),j.className=`${Pe.dragPreview}${rt?` ${Pe.dragPreviewWireframe}`:""}`,document.body.appendChild(j)),!j)return;const vt=Math.max(0,Z-we.clientY),zt=Math.min(1,vt/180),ht=1-Math.pow(1-zt,2),xt=28,St=20,pt=Math.min(140,C.width*.18),Pt=Math.min(90,C.height*.18),Dn=xt+(pt-xt)*ht,gn=St+(Pt-St)*ht;j.style.width=`${Dn}px`,j.style.height=`${gn}px`,j.style.left=`${we.clientX-Dn/2}px`,j.style.top=`${we.clientY-gn/2}px`,j.style.opacity=`${.5+.5*ht}`,j.textContent=ht>.25?x:""},ue=we=>{if(window.removeEventListener("mousemove",ie),window.removeEventListener("mouseup",ue),j&&document.body.removeChild(j),R){const ke=C.width,Le=C.height,vt=window.scrollY,zt=Math.max(0,we.clientX-ke/2),ht=Math.max(0,we.clientY+vt-Le/2),xt={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:x,x:zt,y:ht,width:ke,height:Le,scrollY:vt,timestamp:Date.now()};Lt(St=>[...St,xt]),ct(null),xs.current=new Set,po(St=>St+1)}};window.addEventListener("mousemove",ie),window.addEventListener("mouseup",ue)}}),l.jsx(QM,{settings:Zt,onSettingsChange:x=>ki(v=>({...v,...x})),isDarkMode:Gn,onToggleTheme:rs,isDevMode:qo,connectionStatus:Os,endpoint:g,isVisible:Ge,toolbarNearBottom:!!xn&&xn.y<230,settingsPage:pe,onSettingsPageChange:Ze,onHideToolbar:di})]})}),(De||_t)&&l.jsx("div",{className:`${Pe.blankCanvas} ${pn?Pe.visible:""} ${At?Pe.gridActive:""}`,style:{"--canvas-opacity":yt},"data-feedback-toolbar":!0}),De&&rt&&pn&&l.jsxs("div",{className:Pe.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:Pe.wireframeOpacityRow,children:[l.jsx("span",{className:Pe.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:Pe.wireframeOpacitySlider,min:0,max:1,step:.01,value:yt,onChange:x=>un(Number(x.target.value))})]}),l.jsxs("div",{className:Pe.wireframeNoticeTitleRow,children:[l.jsx("span",{className:Pe.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:Pe.wireframeNoticeDivider}),l.jsx("button",{className:Pe.wireframeStartOver,onClick:()=>{Rn(x=>x+1),ds({sections:[],originalOrder:[],detectedAt:Date.now()}),eo.current={rearrange:null,placements:[]},Jt(""),vd(Bt)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(De||_t)&&l.jsx(j8,{placements:Ke,onChange:Lt,activeComponent:_t?null:wt,onActiveComponentChange:ct,isDarkMode:Gn,exiting:_t,onInteractionChange:bn,passthrough:!wt,extraSnapRects:tt==null?void 0:tt.sections.map(x=>x.currentRect),deselectSignal:Co,clearSignal:Xt,wireframe:rt,onSelectionChange:(x,v)=>{xs.current=x,v||(bs.current=new Set,is(C=>C+1))},onDragMove:(x,v)=>{const C=bs.current;if(!(!C.size||!tt)){if(!sn.current){sn.current=new Map;for(const j of tt.sections)C.has(j.id)&&sn.current.set(j.id,{x:j.currentRect.x,y:j.currentRect.y})}for(const j of tt.sections){if(!C.has(j.id)||!sn.current.get(j.id))continue;const W=document.querySelector(`[data-rearrange-section="${j.id}"]`);W&&(W.style.transform=`translate(${x}px, ${v}px)`)}}},onDragEnd:(x,v,C)=>{const j=bs.current,R=sn.current;if(sn.current=null,!(!j.size||!tt||!R)){for(const W of j){const B=document.querySelector(`[data-rearrange-section="${W}"]`);B&&(B.style.transform="")}C&&ds(W=>W&&{...W,sections:W.sections.map(B=>{const H=R.get(B.id);return H?{...B,currentRect:{...B.currentRect,x:Math.max(0,H.x+x),y:Math.max(0,H.y+v)}}:B})})}}}),(De||_t)&&tt&&l.jsx(W8,{rearrangeState:tt,onChange:ds,isDarkMode:Gn,exiting:_t,blankCanvas:rt,extraSnapRects:Ke.map(x=>({x:x.x,y:x.y,width:x.width,height:x.height})),clearSignal:en,deselectSignal:Do,onSelectionChange:(x,v)=>{bs.current=x,v||(xs.current=new Set,po(C=>C+1))},onDragMove:(x,v)=>{const C=xs.current;if(C.size){if(!sn.current){sn.current=new Map;for(const j of Ke)C.has(j.id)&&sn.current.set(j.id,{x:j.x,y:j.y})}for(const j of C){const R=document.querySelector(`[data-design-placement="${j}"]`);R&&(R.style.transform=`translate(${x}px, ${v}px)`)}}},onDragEnd:(x,v,C)=>{const j=xs.current,R=sn.current;if(sn.current=null,!(!j.size||!R)){for(const W of j){const B=document.querySelector(`[data-design-placement="${W}"]`);B&&(B.style.transform="")}C&&Lt(W=>W.map(B=>{const H=R.get(B.id);return H?{...B,x:Math.max(0,H.x+x),y:Math.max(0,H.y+v)}:B}))}}}),l.jsx("canvas",{ref:Bs,className:`${qe.drawCanvas} ${Yn?qe.active:""}`,style:{opacity:xo?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:qe.markersLayer,"data-feedback-toolbar":!0,children:[de&&nn.filter(x=>!x.isFixed).map((x,v,C)=>l.jsx(Lx,{annotation:x,globalIndex:nn.findIndex(j=>j.id===x.id),layerIndex:v,layerSize:C.length,isExiting:Ae,isClearing:he,isAnimated:$i.has(x.id),isHovered:!Ae&&Qe===x.id,isDeleting:Dt===x.id,isEditingAny:!!Q,renumberFrom:qt,markerClickBehavior:Zt.markerClickBehavior,tooltipStyle:Lo(x),onHoverEnter:j=>!Ae&&j.id!==Jo.current&&Ft(j),onHoverLeave:()=>Ft(null),onClick:j=>Zt.markerClickBehavior==="delete"?Ht(j.id):Me(j),onContextMenu:Me},x.id)),de&&!Ae&&gs.filter(x=>!x.isFixed).map(x=>l.jsx(Ox,{annotation:x},x.id))]}),l.jsxs("div",{className:qe.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[de&&nn.filter(x=>x.isFixed).map((x,v,C)=>l.jsx(Lx,{annotation:x,globalIndex:nn.findIndex(j=>j.id===x.id),layerIndex:v,layerSize:C.length,isExiting:Ae,isClearing:he,isAnimated:$i.has(x.id),isHovered:!Ae&&Qe===x.id,isDeleting:Dt===x.id,isEditingAny:!!Q,renumberFrom:qt,markerClickBehavior:Zt.markerClickBehavior,tooltipStyle:Lo(x),onHoverEnter:j=>!Ae&&j.id!==Jo.current&&Ft(j),onHoverLeave:()=>Ft(null),onClick:j=>Zt.markerClickBehavior==="delete"?Ht(j.id):Me(j),onContextMenu:Me},x.id)),de&&!Ae&&gs.filter(x=>x.isFixed).map(x=>l.jsx(Ox,{annotation:x,fixed:!0},x.id))]}),A&&l.jsxs("div",{className:qe.overlay,"data-feedback-toolbar":!0,style:Y||Q?{zIndex:99999}:void 0,children:[(oe==null?void 0:oe.rect)&&!Y&&!jt&&!io&&l.jsx("div",{className:`${qe.hoverHighlight} ${qe.enter}`,style:{left:oe.rect.left,top:oe.rect.top,width:oe.rect.width,height:oe.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Bn.filter(x=>document.contains(x.element)).map((x,v)=>{const C=x.element.getBoundingClientRect(),j=Bn.length>1;return l.jsx("div",{className:j?qe.multiSelectOutline:qe.singleSelectOutline,style:{position:"fixed",left:C.left,top:C.top,width:C.width,height:C.height,...j?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},v)}),Qe&&!Y&&(()=>{var R;const x=D.find(W=>W.id===Qe);if(!(x!=null&&x.boundingBox))return null;if((R=x.elementBoundingBoxes)!=null&&R.length)return bt.length>0?bt.filter(W=>document.contains(W)).map((W,B)=>{const H=W.getBoundingClientRect();return l.jsx("div",{className:`${qe.multiSelectOutline} ${qe.enter}`,style:{left:H.left,top:H.top,width:H.width,height:H.height}},`hover-outline-live-${B}`)}):x.elementBoundingBoxes.map((W,B)=>l.jsx("div",{className:`${qe.multiSelectOutline} ${qe.enter}`,style:{left:W.x,top:W.y-ft,width:W.width,height:W.height}},`hover-outline-${B}`));const v=ut&&document.contains(ut)?ut.getBoundingClientRect():null,C=v?{x:v.left,y:v.top,width:v.width,height:v.height}:{x:x.boundingBox.x,y:x.isFixed?x.boundingBox.y:x.boundingBox.y-ft,width:x.boundingBox.width,height:x.boundingBox.height},j=x.isMultiSelect;return l.jsx("div",{className:`${j?qe.multiSelectOutline:qe.singleSelectOutline} ${qe.enter}`,style:{left:C.x,top:C.y,width:C.width,height:C.height,...j?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),oe&&!Y&&!jt&&!io&&l.jsxs("div",{className:`${qe.hoverTooltip} ${qe.enter}`,style:{left:Math.max(8,Math.min(z.x,window.innerWidth-100)),top:Math.max(z.y-(oe.reactComponents?48:32),8)},children:[oe.reactComponents&&l.jsx("div",{className:qe.hoverReactPath,children:oe.reactComponents}),l.jsx("div",{className:qe.hoverElementName,children:oe.elementName})]}),Y&&l.jsxs(l.Fragment,{children:[(zo=Y.multiSelectElements)!=null&&zo.length?Y.multiSelectElements.filter(x=>document.contains(x)).map((x,v)=>{const C=x.getBoundingClientRect();return l.jsx("div",{className:`${qe.multiSelectOutline} ${Un?qe.exit:qe.enter}`,style:{left:C.left,top:C.top,width:C.width,height:C.height}},`pending-multi-${v}`)}):Y.targetElement&&document.contains(Y.targetElement)?(()=>{const x=Y.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${qe.singleSelectOutline} ${Un?qe.exit:qe.enter}`,style:{left:x.left,top:x.top,width:x.width,height:x.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():Y.boundingBox&&l.jsx("div",{className:`${Y.isMultiSelect?qe.multiSelectOutline:qe.singleSelectOutline} ${Un?qe.exit:qe.enter}`,style:{left:Y.boundingBox.x,top:Y.boundingBox.y-ft,width:Y.boundingBox.width,height:Y.boundingBox.height,...Y.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const x=Y.x,v=Y.isFixed?Y.y:Y.y-ft;return l.jsxs(l.Fragment,{children:[l.jsx(HM,{x,y:v,isMultiSelect:Y.isMultiSelect,isExiting:Un}),l.jsx(Xd,{ref:Ii,element:Y.element,selectedText:Y.selectedText,computedStyles:Y.computedStylesObj,placeholder:Y.element==="Area selection"?"What should change in this area?":Y.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:it,onCancel:Yt,isExiting:Un,lightMode:!Gn,accentColor:Y.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,x/100*window.innerWidth)),...v>window.innerHeight-290?{bottom:window.innerHeight-v+20}:{top:v+20}}})]})})()]}),Q&&l.jsxs(l.Fragment,{children:[(ca=Q.elementBoundingBoxes)!=null&&ca.length?dt.length>0?dt.filter(x=>document.contains(x)).map((x,v)=>{const C=x.getBoundingClientRect();return l.jsx("div",{className:`${qe.multiSelectOutline} ${qe.enter}`,style:{left:C.left,top:C.top,width:C.width,height:C.height}},`edit-multi-live-${v}`)}):Q.elementBoundingBoxes.map((x,v)=>l.jsx("div",{className:`${qe.multiSelectOutline} ${qe.enter}`,style:{left:x.x,top:x.y-ft,width:x.width,height:x.height}},`edit-multi-${v}`)):(()=>{const x=at&&document.contains(at)?at.getBoundingClientRect():null,v=x?{x:x.left,y:x.top,width:x.width,height:x.height}:Q.boundingBox?{x:Q.boundingBox.x,y:Q.isFixed?Q.boundingBox.y:Q.boundingBox.y-ft,width:Q.boundingBox.width,height:Q.boundingBox.height}:null;return v?l.jsx("div",{className:`${Q.isMultiSelect?qe.multiSelectOutline:qe.singleSelectOutline} ${qe.enter}`,style:{left:v.x,top:v.y,width:v.width,height:v.height,...Q.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(Xd,{ref:ji,element:Q.element,selectedText:Q.selectedText,computedStyles:$8(Q.computedStyles),placeholder:"Edit your feedback...",initialValue:Q.comment,submitLabel:"Save",onSubmit:fn,onCancel:vn,onDelete:()=>Ht(Q.id),isExiting:Eo,lightMode:!Gn,accentColor:Q.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const x=Q.isFixed?Q.y:Q.y-ft;return{left:Math.max(160,Math.min(window.innerWidth-160,Q.x/100*window.innerWidth)),...x>window.innerHeight-290?{bottom:window.innerHeight-x+20}:{top:x+20}}})()})]}),io&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:Ps,className:qe.dragSelection}),l.jsx("div",{ref:Yo,className:qe.highlightsContainer})]})]})]}),document.body)}var e7=Object.freeze({}),t7=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(e,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(e,{id:e,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(e,{...u}),this.baseValues.set(e,{...u}),this.notifyGlobal()}updatePanel(e,n,i,a){var w;const c=this.panels.get(e);if(!c){this.registerPanel(e,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[k,M]of Object.entries(h))p[k]=this.normalizePreservedValue(c.values[k],M,d.get(k));this.initTransitionModes(i,"",p);for(const[k,M]of Object.entries(c.values)){if(!k.endsWith(".__mode"))continue;const A=k.slice(0,-7),T=d.get(A);(T==null?void 0:T.type)==="transition"&&(p[k]=M)}const y={id:e,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(e,y),this.snapshots.set(e,{...p});const g=(w=this.baseValues.get(e))!=null?w:{},b={};for(const[k,M]of Object.entries(h))b[k]=this.normalizePreservedValue(g[k],M,d.get(k));for(const[k,M]of Object.entries(p))k.endsWith(".__mode")&&(b[k]=M);this.baseValues.set(e,b),this.notify(e),this.notifyGlobal()}unregisterPanel(e){this.panels.delete(e),this.listeners.delete(e),this.snapshots.delete(e),this.actionListeners.delete(e),this.baseValues.delete(e),this.notifyGlobal()}updateValue(e,n,i){var u;const a=this.panels.get(e);if(!a)return;a.values[n]=i;const c=this.activePreset.get(e);if(c){const h=((u=this.presets.get(e))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(e);d&&(d[n]=i)}this.snapshots.set(e,{...a.values}),this.notify(e)}updateSpringMode(e,n,i){this.updateTransitionMode(e,n,i)}getSpringMode(e,n){const i=this.getTransitionMode(e,n);return i==="easing"?"simple":i}updateTransitionMode(e,n,i){const a=this.panels.get(e);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(e,{...a.values}),this.notify(e))}getTransitionMode(e,n){const i=this.panels.get(e);return i&&i.values[`${n}.__mode`]||"simple"}getValue(e,n){const i=this.panels.get(e);return i==null?void 0:i.values[n]}getValues(e){var n;return(n=this.snapshots.get(e))!=null?n:e7}getPanels(){return Array.from(this.panels.values())}getPanel(e){return this.panels.get(e)}subscribe(e,n){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(n),()=>{var i;(i=this.listeners.get(e))==null||i.delete(n)}}subscribeGlobal(e){return this.globalListeners.add(e),()=>this.globalListeners.delete(e)}subscribeActions(e,n){return this.actionListeners.has(e)||this.actionListeners.set(e,new Set),this.actionListeners.get(e).add(n),()=>{var i;(i=this.actionListeners.get(e))==null||i.delete(n)}}triggerAction(e,n){var i;(i=this.actionListeners.get(e))==null||i.forEach(a=>a(n))}savePreset(e,n){var d;const i=this.panels.get(e);if(!i)throw new Error(`Panel ${e} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(e))!=null?d:[];return this.presets.set(e,[...u,c]),this.activePreset.set(e,a),this.snapshots.set(e,{...i.values}),this.notify(e),a}loadPreset(e,n){var u;const i=this.panels.get(e);if(!i)return;const c=((u=this.presets.get(e))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(e,{...i.values}),this.activePreset.set(e,n),this.notify(e))}deletePreset(e,n){var c;const i=(c=this.presets.get(e))!=null?c:[];this.presets.set(e,i.filter(u=>u.id!==n)),this.activePreset.get(e)===n&&this.activePreset.set(e,null);const a=this.panels.get(e);a&&this.snapshots.set(e,{...a.values}),this.notify(e)}getPresets(e){var n;return(n=this.presets.get(e))!=null?n:[]}getActivePresetId(e){var n;return(n=this.activePreset.get(e))!=null?n:null}clearActivePreset(e){const n=this.panels.get(e),i=this.baseValues.get(e);n&&i&&(n.values={...i},this.snapshots.set(e,{...n.values})),this.activePreset.set(e,null),this.notify(e)}resolveShortcutTarget(e,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==e.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const e=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&e.push({panelId:i.id,path:a,control:u,shortcut:c})}return e}findControlByPath(e,n){for(const i of e){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(e){var n;(n=this.listeners.get(e))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(e=>e())}initTransitionModes(e,n,i){for(const[a,c]of Object.entries(e)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(e,n,i){var c;const a=[];for(const[u,d]of Object.entries(e)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),y=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:y});else if(typeof d=="number"){const{min:g,max:b,step:w}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:g,max:b,step:w,shortcut:y})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:y});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const g=d,b="_collapsed"in g?!g._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:b,children:this.parseConfig(g,h,i)})}}return a}flattenValues(e,n){var a,c,u;const i={};for(const[d,h]of Object.entries(e)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const y=h.options[0],g=typeof y=="string"?y:y.value;i[p]=(a=h.default)!=null?a:g}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="spring"}isEasingConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="easing"}isActionConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="action"}isSelectConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="select"&&"options"in e&&Array.isArray(e.options)}isColorConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="color"}isTextConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="text"}isHexColor(e){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(e)}formatLabel(e){return e.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(e){return e>=0&&e<=1?{min:0,max:1,step:.01}:e>=0&&e<=10?{min:0,max:e*3||10,step:.1}:e>=0&&e<=100?{min:0,max:e*3||100,step:1}:e>=0?{min:0,max:e*3||1e3,step:10}:{min:e*3,max:-e*3,step:1}}inferStep(e,n){const i=n-e;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(e,n,i){var a,c,u;if(e===void 0||!i)return n;switch(i.type){case"slider":{if(typeof e!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,e));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof e=="boolean"?e:n;case"select":{if(typeof e!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(e)?e:n}case"color":case"text":return typeof e=="string"?e:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(e)?e:n:this.isEasingConfig(n)&&this.isEasingConfig(e)?e:n;case"action":return n;default:return n}}roundToStep(e,n,i,a){const c=n+Math.round((e-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(e){const n=String(e),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(e){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(e),n}},ln=new t7;function n7(e,n,i){const a=_.useId(),c=`${e}-${a}`,u=_.useRef(n),d=JSON.stringify(n);u.current=n;const h=_.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=_.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const y=JSON.stringify(i==null?void 0:i.shortcuts);_.useEffect(()=>(ln.registerPanel(c,e,u.current,p.current),()=>ln.unregisterPanel(c)),[c,e]);const g=_.useRef(!1);_.useEffect(()=>{if(!g.current){g.current=!0;return}ln.updatePanel(c,e,u.current,p.current)},[c,e,d,y]),_.useEffect(()=>ln.subscribeActions(c,w=>{var k;(k=h.current)==null||k.call(h,w)}),[c]);const b=_.useSyncExternalStore(w=>ln.subscribe(c,w),()=>ln.getValues(c),()=>ln.getValues(c));return y2(n,b,"")}function y2(e,n,i){var c,u,d,h,p,y,g,b,w,k;const a={};for(const[M,A]of Object.entries(e)){if(M==="_collapsed")continue;const T=i?`${i}.${M}`:M;if(Array.isArray(A)&&A.length<=4&&typeof A[0]=="number")a[M]=(c=n[T])!=null?c:A[0];else if(typeof A=="number"||typeof A=="boolean"||typeof A=="string")a[M]=(u=n[T])!=null?u:A;else if(s7(A)||o7(A))a[M]=(d=n[T])!=null?d:A;else if(i7(A))a[M]=(h=n[T])!=null?h:A;else if(a7(A)){const D=(p=A.default)!=null?p:c7(A.options);a[M]=(y=n[T])!=null?y:D}else r7(A)?a[M]=(b=(g=n[T])!=null?g:A.default)!=null?b:"#000000":l7(A)?a[M]=(k=(w=n[T])!=null?w:A.default)!=null?k:"":typeof A=="object"&&A!==null&&(a[M]=y2(A,n,T))}return a}function Hl(e,n){return typeof e=="object"&&e!==null&&"type"in e&&e.type===n}function s7(e){return Hl(e,"spring")}function o7(e){return Hl(e,"easing")}function i7(e){return Hl(e,"action")}function a7(e){return Hl(e,"select")&&"options"in e&&Array.isArray(e.options)}function r7(e){return Hl(e,"color")}function l7(e){return Hl(e,"text")}function c7(e){const n=e[0];return typeof n=="string"?n:n.value}function yp(e){const n=e.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function zd(e,n){const i=Math.round(e/n)*n;return parseFloat(i.toFixed(yp(n)))}function Bc(e,n){var d,h,p,y;const i=(d=e.min)!=null?d:0,c=((h=e.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(y=e.step)!=null?y:1}function Lc(e,n,i,a,c){var y,g;const u=ln.getValue(e,n),d=(y=i.min)!=null?y:0,h=(g=i.max)!=null?g:1,p=Math.max(d,Math.min(h,u+c*a));ln.updateValue(e,n,zd(p,a))}function u7(e,n,i){const a=(e-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):e}function kd(){const e=document.activeElement;if(!e)return!1;const n=e.tagName;return n==="INPUT"||n==="TEXTAREA"||e.contentEditable==="true"}function Bm(e){if(e.altKey)return"alt";if(e.shiftKey)return"shift";if(e.metaKey)return"meta"}function x2(e,n){for(const i of e){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=x2(i.children,n);if(a)return a}}return null}var jd=4;function d7(e){switch(e){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function f7(e){var c;const n=(c=e.interaction)!=null?c:"scroll",i=d7(n);return e.key?`${b2(e.modifier)}${e.key.toUpperCase()}+${i}`:i}function h7(e){return e.key?`${b2(e.modifier)}${e.key.toUpperCase()}`:"Press"}function b2(e){return e==="alt"?"⌥":e==="shift"?"⇧":e==="meta"?"⌘":""}var v2=_.createContext({activePanelId:null,activePath:null});function m7({children:e}){const[n,i]=_.useState({activePanelId:null,activePath:null}),a=_.useRef(new Set),c=_.useRef(!1),u=_.useRef(null),d=_.useRef(0),h=_.useCallback(p=>{var y;for(const g of a.current){const b=ln.getPanels();for(const w of b)for(const[k,M]of Object.entries(w.shortcuts)){if(!M.key||M.key.toLowerCase()!==g||((y=M.interaction)!=null?y:"scroll")!==p)continue;const A=x2(w.controls,k);if(A&&A.type==="slider")return{panelId:w.id,path:k,control:A,shortcut:M}}}return null},[]);return _.useEffect(()=>{const p=A=>{if(kd())return;const T=A.key.toLowerCase();if((T==="arrowleft"||T==="arrowright"||T==="arrowup"||T==="arrowdown")&&a.current.size>0){const N=h("scroll")||h("drag")||h("move");if(N&&N.control.type==="slider"){A.preventDefault();const G=T==="arrowright"||T==="arrowup"?1:-1,X=Bc(N.control,N.shortcut);Lc(N.panelId,N.path,N.control,X,G);return}}const D=a.current.has(T);a.current.add(T);const I=Bm(A),O=ln.resolveShortcutTarget(T,I);if(O&&(i({activePanelId:O.panelId,activePath:O.path}),!D&&O.control.type==="toggle")){const N=ln.getValue(O.panelId,O.path);ln.updateValue(O.panelId,O.path,!N)}D||(u.current=null,d.current=0)},y=A=>{const T=A.key.toLowerCase();if(a.current.delete(T),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let D=!1;for(const I of a.current){const O=Bm(A),N=ln.resolveShortcutTarget(I,O);if(N){i({activePanelId:N.panelId,activePath:N.path}),D=!0;break}}D||i({activePanelId:null,activePath:null})}},g=A=>{var I,O;if(kd())return;const T=Bm(A);if(a.current.size>0)for(const N of a.current){const G=ln.resolveShortcutTarget(N,T);if(!G)continue;const{panelId:X,path:U,control:K}=G;if(((O=(I=K.shortcut)==null?void 0:I.interaction)!=null?O:"scroll")!=="scroll"||K.type!=="slider")continue;A.preventDefault();const de=Bc(K,K.shortcut),me=A.deltaY>0?-1:1;Lc(X,U,K,de,me);return}const D=ln.resolveScrollOnlyTargets();for(const{panelId:N,path:G,control:X,shortcut:U}of D){if(X.type!=="slider")continue;A.preventDefault();const K=Bc(X,U),le=A.deltaY>0?-1:1;Lc(N,G,X,K,le);return}},b=A=>{if(kd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=A.clientX,d.current=0,A.preventDefault())},w=()=>{c.current=!1,u.current=null,d.current=0},k=A=>{if(kd()||a.current.size===0)return;if(c.current){const D=h("drag");if(D&&u.current!==null){const I=A.clientX-u.current;u.current=A.clientX,d.current+=I;const O=Bc(D.control,D.shortcut),N=Math.trunc(d.current/jd);N!==0&&(d.current-=N*jd,Lc(D.panelId,D.path,D.control,O,N))}return}const T=h("move");if(T){if(u.current===null){u.current=A.clientX;return}const D=A.clientX-u.current;u.current=A.clientX,d.current+=D;const I=Bc(T.control,T.shortcut),O=Math.trunc(d.current/jd);O!==0&&(d.current-=O*jd,Lc(T.panelId,T.path,T.control,I,O))}},M=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",y),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("mousedown",b),window.addEventListener("mouseup",w),window.addEventListener("mousemove",k),window.addEventListener("blur",M),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",y),window.removeEventListener("wheel",g),window.removeEventListener("mousedown",b),window.removeEventListener("mouseup",w),window.removeEventListener("mousemove",k),window.removeEventListener("blur",M)}},[h]),l.jsx(v2.Provider,{value:n,children:e})}var i_="M6 9.5L12 15.5L18 9.5",p7="M5 12.75L10 19L19 5",Lm={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},_7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],g7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Ix={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Kd({title:e,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=_.useState(i),[y,g]=_.useState(!i),b=_.useRef(null),[w,k]=_.useState(void 0),[M,A]=_.useState(typeof window<"u"?window.innerHeight:800);_.useEffect(()=>{if(!a)return;const I=()=>A(window.innerHeight);return window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)},[a]),_.useEffect(()=>{const I=b.current;if(!I)return;const O=new ResizeObserver(()=>{if(h){const N=I.offsetHeight;k(G=>G===N?G:N)}});return O.observe(I),()=>O.disconnect()},[h]);const T=()=>{if(c&&a)return;const I=!h;p(I),g(!I),u==null||u(I)},D=l.jsxs("div",{ref:a?b:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:T,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:e})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:e})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Ix.path,fill:"currentColor"}),Ix.circles.map((I,O)=>l.jsx("circle",{cx:I.cx,cy:I.cy,r:I.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},O))]}),!a&&l.jsx(ri.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:i_})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:I=>I.stopPropagation(),children:d})]}),l.jsx(sf,{initial:!1,children:h&&l.jsx(ri.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:D});const I=h?{width:280,height:w!==void 0?Math.min(w+10,M-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(ri.div,{className:"dialkit-panel-inner",style:I,onClick:h?void 0:T,"data-collapsed":y,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:D})}return D}var y7=3,x7=32,b7=200,v7=8;function Go({label:e,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var ot;const y=_.useRef(null),g=_.useRef(null),b=_.useRef(null),w=_.useRef(null),k=_.useRef(null),[M,A]=_.useState(!1),[T,D]=_.useState(!1),[I,O]=_.useState(!1),[N,G]=_.useState(!1),[X,U]=_.useState(!1),[K,le]=_.useState(!1),[de,me]=_.useState(""),Ae=_.useRef(null),Xe=_.useRef(null),oe=_.useRef(!0),se=_.useRef(null),z=_.useRef(null),te=_.useRef(1),Y=(n-a)/(c-a)*100,fe=M||I,Se=cp(Y),P=dd(Se,V=>`${V}%`),ae=dd(Se,V=>`max(5px, calc(${V}% - 9px))`),ee=cp(0),xe=dd(ee,V=>`calc(100% + ${Math.abs(V)}px)`),Te=dd(ee,V=>V<0?V:0);_.useEffect(()=>{!M&&!se.current&&Se.jump(Y)},[Y,M,Se]);const he=_.useCallback(V=>{const J=z.current;if(!J)return n;const Ee=(V-J.left)/te.current,nt=y.current?y.current.offsetWidth:J.width,Ge=Math.max(0,Math.min(1,Ee/nt)),Be=a+Ge*(c-a);return Math.max(a,Math.min(c,Be))},[a,c,n]),ze=_.useCallback(V=>(V-a)/(c-a)*100,[a,c]),Qe=_.useCallback((V,J)=>{const be=z.current;if(!be)return 0;const Ee=J<0?be.left-V:V-be.right,nt=Math.max(0,Ee-x7);return J*v7*Math.sqrt(Math.min(nt/b7,1))},[]),We=_.useCallback(V=>{if(!K&&(V.preventDefault(),V.target.setPointerCapture(V.pointerId),Xe.current={x:V.clientX,y:V.clientY},oe.current=!0,A(!0),y.current)){z.current=y.current.getBoundingClientRect();const J=y.current.offsetWidth;te.current=z.current.width/J}},[K]),ut=_.useCallback(V=>{if(!M||!Xe.current)return;const J=V.clientX-Xe.current.x,be=V.clientY-Xe.current.y,Ee=Math.sqrt(J*J+be*be);if(oe.current&&Ee>y7&&(oe.current=!1,D(!0)),!oe.current){const nt=z.current;nt&&(V.clientX<nt.left?ee.jump(Qe(V.clientX,-1)):V.clientX>nt.right?ee.jump(Qe(V.clientX,1)):ee.jump(0));const Ge=he(V.clientX),Be=ze(Ge);se.current&&(se.current.stop(),se.current=null),Se.jump(Be),i(zd(Ge,u))}},[M,he,ze,i,Se,ee,Qe]),kt=_.useCallback(V=>{if(M){if(oe.current){const J=he(V.clientX),Ee=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((J-a)/u)*u)):u7(J,a,c),nt=ze(Ee);se.current&&se.current.stop(),se.current=nx(Se,nt,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{se.current=null}}),i(zd(Ee,u))}ee.get()!==0&&nx(ee,0,{type:"spring",visualDuration:.35,bounce:.15}),A(!1),D(!1),Xe.current=null}},[M,he,ze,i,a,c,Se,ee]);_.useEffect(()=>(N&&!K&&!X?Ae.current=setTimeout(()=>{U(!0)},800):!N&&!K&&(Ae.current&&(clearTimeout(Ae.current),Ae.current=null),U(!1)),()=>{Ae.current&&clearTimeout(Ae.current)}),[N,K,X]),_.useEffect(()=>{K&&b.current&&(b.current.focus(),b.current.select())},[K]);const bt=V=>{me(V.target.value)},st=()=>{const V=parseFloat(de);if(!isNaN(V)){const J=Math.max(a,Math.min(c,V));i(zd(J,u))}le(!1),G(!1),U(!1)},Dt=V=>{X&&(V.stopPropagation(),V.preventDefault(),le(!0),me(n.toFixed(yp(u))))},lt=V=>{V.key==="Enter"?st():V.key==="Escape"&&(le(!1),G(!1))},qt=()=>{st()},Kt=n.toFixed(yp(u)),Q=8,Ne=10,at=10;let Ce=30,dt=78;const He=(ot=y.current)==null?void 0:ot.offsetWidth;He&&He>0&&(w.current&&(Ce=(Ne+w.current.offsetWidth+Q)/He*100),k.current&&(dt=(He-at-k.current.offsetWidth-Q)/He*100));const ft=Y<Ce||Y>dt,mt=fe?ft?.1:T?.9:.5:0,jt=(c-a)/u,Rt=jt<=10?Array.from({length:jt-1},(V,J)=>{const be=(J+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${be}%`}},J)}):Array.from({length:9},(V,J)=>{const be=(J+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${be}%`}},J)});return l.jsx("div",{ref:y,className:"dialkit-slider-wrapper",children:l.jsxs(ri.div,{ref:g,className:`dialkit-slider ${fe?"dialkit-slider-active":""}`,onPointerDown:We,onPointerMove:ut,onPointerUp:kt,onMouseEnter:()=>O(!0),onMouseLeave:()=>O(!1),style:{width:xe,x:Te},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:Rt}),l.jsx(ri.div,{className:"dialkit-slider-fill",style:{width:P}}),l.jsx(ri.div,{className:"dialkit-slider-handle",style:{left:ae,y:"-50%"},animate:{opacity:mt,scaleX:fe?1:.25,scaleY:fe&&ft?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:w,className:"dialkit-slider-label",children:[e,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:f7(h)})]}),K?l.jsx("input",{ref:b,type:"text",className:"dialkit-slider-input",value:de,onChange:bt,onKeyDown:lt,onBlur:qt,onClick:V=>V.stopPropagation(),onMouseDown:V=>V.stopPropagation()}):l.jsx("span",{ref:k,className:`dialkit-slider-value ${X?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>G(!0),onMouseLeave:()=>G(!1),onClick:Dt,onMouseDown:V=>X&&V.stopPropagation(),style:{cursor:X?"text":"default"},children:Kt})]})})}function a_({options:e,value:n,onChange:i}){const a=_.useRef(null),c=_.useRef(!1),[u,d]=_.useState(null),h=_.useCallback(()=>{const y=a.current;if(!y)return;const g=y.querySelector('[data-active="true"]');g&&d({left:g.offsetLeft,width:g.offsetWidth})},[]);_.useLayoutEffect(()=>{h()},[n,e.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),e.map(y=>{const g=n===y.value;return l.jsx("button",{onClick:()=>i(y.value),className:"dialkit-segmented-button","data-active":String(g),children:y.label},y.value)})]})}function w7({label:e,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[e,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:h7(a)})]}),l.jsx(a_,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function S7(e,n,i,a){const c=[],d=a/100;let h=0,p=0;const y=1;for(let g=0;g<=100;g++){const b=g*d;c.push([b,h]);const w=-e*(h-y),k=-n*p,M=(w+k)/i;p+=M*d,h+=p*d}return c}function w2({spring:e,isSimpleMode:n}){var A,T,D,I,O;let c,u,d;if(n){const N=(A=e.visualDuration)!=null?A:.3,G=(T=e.bounce)!=null?T:.2;d=1,c=2*Math.PI/N,c=Math.pow(c,2),u=2*(1-G)*Math.sqrt(c*d)}else c=(D=e.stiffness)!=null?D:400,u=(I=e.damping)!=null?I:17,d=(O=e.mass)!=null?O:1;const h=2,p=S7(c,u,d,h),y=p.map(([,N])=>N),g=Math.min(...y),w=Math.max(...y)-g,k=p.map(([N,G],X)=>{const U=N/h*256,le=140-((G-g)/(w||1)*140*.6+140*.2);return`${X===0?"M":"L"} ${U} ${le}`}).join(" "),M=[];for(let N=1;N<4;N++){const G=64*N,X=140/4*N;M.push(l.jsx("line",{x1:G,y1:0,x2:G,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${N}`),l.jsx("line",{x1:0,y1:X,x2:256,y2:X,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${N}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[M,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:k,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function C7({panelId:e,path:n,label:i,spring:a,onChange:c}){var g,b,w,k,M;const u=_.useSyncExternalStore(A=>ln.subscribe(e,A),()=>ln.getSpringMode(e,n),()=>ln.getSpringMode(e,n)),d=u==="simple",h=_.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=A=>{ln.updateSpringMode(e,n,A),c(A==="simple"?h.current.simple:h.current.advanced)},y=(A,T)=>{if(d){const{stiffness:D,damping:I,mass:O,...N}=a;c({...N,[A]:T})}else{const{visualDuration:D,bounce:I,...O}=a;c({...O,[A]:T})}};return l.jsx(Kd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(w2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(a_,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Go,{label:"Duration",value:(g=a.visualDuration)!=null?g:.3,onChange:A=>y("visualDuration",A),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Go,{label:"Bounce",value:(b=a.bounce)!=null?b:.2,onChange:A=>y("bounce",A),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Go,{label:"Stiffness",value:(w=a.stiffness)!=null?w:400,onChange:A=>y("stiffness",A),min:1,max:1e3,step:10}),l.jsx(Go,{label:"Damping",value:(k=a.damping)!=null?k:17,onChange:A=>y("damping",A),min:1,max:100,step:1}),l.jsx(Go,{label:"Mass",value:(M=a.mass)!=null?M:1,onChange:A=>y("mass",A),min:.1,max:10,step:.1})]})]})})}function k7({easing:e}){const n=e.ease,i=200,a=10,u=(i-a*2)/2,d=(w,k)=>({x:a+(w+.5)*u,y:a+(1.5-k)*u}),h=d(0,0),p=d(1,1),y=d(n[0],n[1]),g=d(n[2],n[3]),b=`M ${h.x} ${h.y} C ${y.x} ${y.y}, ${g.x} ${g.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:b,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function j7({panelId:e,path:n,label:i,value:a,onChange:c}){var M,A,T,D,I;const u=_.useSyncExternalStore(O=>ln.subscribe(e,O),()=>ln.getTransitionMode(e,n),()=>ln.getTransitionMode(e,n)),d=u==="easing",h=u==="simple",p=_.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const y=a.type==="spring"?a:p.current.simple,g=a.type==="easing"?a:p.current.easing,b=O=>{ln.updateTransitionMode(e,n,O),c(O==="easing"?p.current.easing:O==="simple"?p.current.simple:p.current.advanced)},w=(O,N)=>{if(h){const{stiffness:G,damping:X,mass:U,...K}=y;c({...K,[O]:N})}else{const{visualDuration:G,bounce:X,...U}=y;c({...U,[O]:N})}},k=(O,N)=>{const G=[...g.ease];G[O]=N,c({...g,ease:G})};return l.jsx(Kd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(k7,{easing:g}):l.jsx(w2,{spring:y,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(a_,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:b})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Go,{label:"x1",value:g.ease[0],onChange:O=>k(0,O),min:0,max:1,step:.01}),l.jsx(Go,{label:"y1",value:g.ease[1],onChange:O=>k(1,O),min:-1,max:2,step:.01}),l.jsx(Go,{label:"x2",value:g.ease[2],onChange:O=>k(2,O),min:0,max:1,step:.01}),l.jsx(Go,{label:"y2",value:g.ease[3],onChange:O=>k(3,O),min:-1,max:2,step:.01}),l.jsx(Go,{label:"Duration",value:g.duration,onChange:O=>c({...g,duration:O}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(E7,{ease:g.ease,onChange:O=>c({...g,ease:O})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(Go,{label:"Duration",value:(M=y.visualDuration)!=null?M:.3,onChange:O=>w("visualDuration",O),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Go,{label:"Bounce",value:(A=y.bounce)!=null?A:.2,onChange:O=>w("bounce",O),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Go,{label:"Stiffness",value:(T=y.stiffness)!=null?T:400,onChange:O=>w("stiffness",O),min:1,max:1e3,step:10}),l.jsx(Go,{label:"Damping",value:(D=y.damping)!=null?D:17,onChange:O=>w("damping",O),min:1,max:100,step:1}),l.jsx(Go,{label:"Mass",value:(I=y.mass)!=null?I:1,onChange:O=>w("mass",O),min:.1,max:10,step:.1})]})]})})}function Hx(e){return e.map(n=>parseFloat(n.toFixed(2))).join(", ")}function M7(e){const n=e.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function E7({ease:e,onChange:n}){const[i,a]=_.useState(!1),[c,u]=_.useState(""),d=()=>{u(Hx(e)),a(!0)},h=()=>{const y=M7(c);y&&n(y),a(!1)},p=y=>{y.key==="Enter"&&y.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Hx(e),onChange:y=>u(y.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function T7({label:e,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:e}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function A7(e){return e.replace(/\b\w/g,n=>n.toUpperCase())}function N7(e){return e.map(n=>typeof n=="string"?{value:n,label:A7(n)}:n)}function D7({label:e,value:n,options:i,onChange:a}){var A;const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState(null),[g,b]=_.useState(null),w=N7(i),k=w.find(T=>T.value===n),M=_.useCallback(()=>{const T=d.current;if(!T)return;const D=T.getBoundingClientRect(),I=8+w.length*36,O=window.innerHeight-D.bottom-4,N=O<I&&D.top>O;b({top:N?D.top-4:D.bottom+4,left:D.left,width:D.width,above:N})},[w.length]);return _.useEffect(()=>{var D;const T=(D=d.current)==null?void 0:D.closest(".dialkit-root");y(T!=null?T:document.body)},[]),_.useEffect(()=>{c&&M()},[c,M]),_.useEffect(()=>{if(!c)return;const T=D=>{const I=D.target;d.current&&!d.current.contains(I)&&h.current&&!h.current.contains(I)&&u(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:e}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(A=k==null?void 0:k.label)!=null?A:n}),l.jsx(ri.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:i_})})]})]}),p&&zl.createPortal(l.jsx(sf,{children:c&&g&&l.jsx(ri.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:g.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:g.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:g.left,width:g.width,...g.above?{bottom:window.innerHeight-g.top,transformOrigin:"bottom"}:{top:g.top,transformOrigin:"top"}},children:w.map(T=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(T.value===n),onClick:()=>{a(T.value),u(!1)},children:T.label},T.value))})}),p)]})}var R7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function B7({label:e,value:n,onChange:i}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useRef(null);_.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),R7.test(u)?i(u):d(n)}function y(g){g.key==="Enter"?p():g.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:e}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:g=>d(g.target.value),onBlur:p,onKeyDown:y,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var g;return(g=h.current)==null?void 0:g.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?L7(n):n.slice(0,7),onChange:g=>i(g.target.value)})]})]})}function L7(e){return e.length!==4?e:`#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`}function O7({panelId:e,presets:n,activePresetId:i,onAdd:a}){const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState({top:0,left:0,width:0}),g=n.length>0,b=n.find(D=>D.id===i),w=_.useCallback(()=>{var I;if(!g)return;const D=(I=d.current)==null?void 0:I.getBoundingClientRect();D&&y({top:D.bottom+4,left:D.left,width:D.width}),u(!0)},[g]),k=_.useCallback(()=>u(!1),[]),M=_.useCallback(()=>{c?k():w()},[c,w,k]);_.useEffect(()=>{if(!c)return;const D=I=>{var N,G;const O=I.target;(N=d.current)!=null&&N.contains(O)||(G=h.current)!=null&&G.contains(O)||k()};return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[c,k]);const A=D=>{D?ln.loadPreset(e,D):ln.clearActivePreset(e),k()},T=(D,I)=>{D.stopPropagation(),ln.deletePreset(e,I)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:M,"data-open":String(c),"data-has-preset":String(!!b),"data-disabled":String(!g),children:[l.jsx("span",{className:"dialkit-preset-label",children:b?b.name:"Version 1"}),l.jsx(ri.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:g?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:i_})})]}),zl.createPortal(l.jsx(sf,{children:c&&l.jsxs(ri.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>A(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(D=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(D.id===i),onClick:()=>A(D.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:D.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:I=>T(I,D.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:g7.map((I,O)=>l.jsx("path",{d:I},O))})})]},D.id))]})}),document.body)]})}function z7({panel:e,defaultOpen:n=!0,inline:i=!1}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useContext(v2);Object.keys(e.shortcuts).length>0;const p=_.useSyncExternalStore(T=>ln.subscribe(e.id,T),()=>ln.getValues(e.id),()=>ln.getValues(e.id)),y=ln.getPresets(e.id),g=ln.getActivePresetId(e.id),b=()=>{const T=y.length+2;ln.savePreset(e.id,`Version ${T}`)},w=()=>{const T=JSON.stringify(p,null,2),D=`Update the useDialKit configuration for "${e.name}" with these values:

\`\`\`json
${T}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(D),c(!0),setTimeout(()=>c(!1),1500)},k=T=>{var I,O,N;const D=p[T.path];switch(T.type){case"slider":return l.jsx(Go,{label:T.label,value:D,onChange:G=>ln.updateValue(e.id,T.path,G),min:T.min,max:T.max,step:T.step,shortcut:T.shortcut,shortcutActive:h.activePanelId===e.id&&h.activePath===T.path},T.path);case"toggle":return l.jsx(w7,{label:T.label,checked:D,onChange:G=>ln.updateValue(e.id,T.path,G),shortcut:T.shortcut,shortcutActive:h.activePanelId===e.id&&h.activePath===T.path},T.path);case"spring":return l.jsx(C7,{panelId:e.id,path:T.path,label:T.label,spring:D,onChange:G=>ln.updateValue(e.id,T.path,G)},T.path);case"transition":return l.jsx(j7,{panelId:e.id,path:T.path,label:T.label,value:D,onChange:G=>ln.updateValue(e.id,T.path,G)},T.path);case"folder":return l.jsx(Kd,{title:T.label,defaultOpen:(I=T.defaultOpen)!=null?I:!0,children:(O=T.children)==null?void 0:O.map(k)},T.path);case"text":return l.jsx(T7,{label:T.label,value:D,onChange:G=>ln.updateValue(e.id,T.path,G),placeholder:T.placeholder},T.path);case"select":return l.jsx(D7,{label:T.label,value:D,options:(N=T.options)!=null?N:[],onChange:G=>ln.updateValue(e.id,T.path,G)},T.path);case"color":return l.jsx(B7,{label:T.label,value:D,onChange:G=>ln.updateValue(e.id,T.path,G)},T.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>ln.triggerAction(e.id,T.path),children:T.label},T.path);default:return null}},M=()=>e.controls.map(k),A=l.jsxs(l.Fragment,{children:[l.jsx(ri.button,{className:"dialkit-toolbar-add",onClick:b,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:_7.map((T,D)=>l.jsx("path",{d:T},D))})}),l.jsx(O7,{panelId:e.id,presets:y,activePresetId:g,onAdd:b}),l.jsx(ri.button,{className:"dialkit-toolbar-add",onClick:w,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(sf,{initial:!1,mode:"wait",children:a?l.jsx(ri.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:p7})},"check"):l.jsxs(ri.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:Lm.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:Lm.sparkle,fill:"currentColor"}),l.jsx("path",{d:Lm.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Kd,{title:e.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:A,children:M()})})}var $7=typeof process<"u"?!1:!(typeof import.meta<"u");function P7({position:e="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=$7}){if(!c)return null;const[u,d]=_.useState([]),[h,p]=_.useState(!1),y=i==="inline",g=_.useRef(null),[b,w]=_.useState(null),[k,M]=_.useState(e),A=_.useRef(null),T=_.useRef(!1),D=_.useRef(null),I=_.useRef(!1);_.useEffect(()=>(p(!0),d(ln.getPanels()),ln.subscribeGlobal(()=>{d(ln.getPanels())})),[]),_.useEffect(()=>{if(!g.current||y)return;const K=new MutationObserver(()=>{var me;const le=(me=g.current)==null?void 0:me.querySelector(".dialkit-panel-inner");if(!le)return;if(le.getAttribute("data-collapsed")==="true")A.current&&w(A.current);else{if(b){A.current=b;const Ae=b.x+21,Xe=window.innerWidth/2;M(Ae<Xe?"top-left":"top-right")}else M(e);w(null)}});return K.observe(g.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>K.disconnect()},[y,b,e]);const O=_.useCallback(K=>{var me;const le=(me=g.current)==null?void 0:me.querySelector(".dialkit-panel-inner");if(!le||le.getAttribute("data-collapsed")!=="true")return;const de=g.current.getBoundingClientRect();D.current={pointerX:K.clientX,pointerY:K.clientY,elX:de.left,elY:de.top},I.current=!1,T.current=!0,K.target.setPointerCapture(K.pointerId)},[]),N=_.useCallback(K=>{if(!T.current||!D.current)return;const le=K.clientX-D.current.pointerX,de=K.clientY-D.current.pointerY;!I.current&&Math.abs(le)+Math.abs(de)<4||(I.current=!0,w({x:D.current.elX+le,y:D.current.elY+de}))},[]),G=_.useCallback(K=>{var le;if(T.current&&(T.current=!1,D.current=null,I.current)){K.stopPropagation();const de=(le=g.current)==null?void 0:le.querySelector(".dialkit-panel-inner");if(de){const me=Ae=>{Ae.stopPropagation()};de.addEventListener("click",me,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const X=b?{top:b.y,left:b.x,right:"auto",bottom:"auto"}:void 0,U=l.jsx(m7,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:g,className:"dialkit-panel","data-position":y||b?void 0:k,"data-mode":i,style:X,onPointerDown:y?void 0:O,onPointerMove:y?void 0:N,onPointerUp:y?void 0:G,children:u.map(K=>l.jsx(z7,{panel:K,defaultOpen:y||n,inline:y},K.id))})})});return y?U:zl.createPortal(U,document.body)}const I7=()=>(n7("Git Visualizer",{preview:[1,0,1]}),null),Ux="git-visualizer.chrome-ui-hidden",H7=({children:e})=>{const[n,i]=_.useState(!1);return _.useEffect(()=>{i(window.localStorage.getItem(Ux)==="true")},[]),_.useEffect(()=>{const a=c=>{(c.ctrlKey||c.metaKey)&&c.key.toLowerCase()==="d"&&!c.shiftKey&&!c.altKey&&(c.preventDefault(),i(u=>{const d=!u;return window.localStorage.setItem(Ux,String(d)),d}))};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[]),l.jsxs(l.Fragment,{children:[e,l.jsx(I7,{}),!n&&l.jsxs(l.Fragment,{children:[l.jsx(P7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(JM,{})]})]})};document.addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="r"&&(e.preventDefault(),location.reload())});Gv.createRoot(document.getElementById("root")).render(l.jsx(H7,{children:l.jsx(O3,{})}));

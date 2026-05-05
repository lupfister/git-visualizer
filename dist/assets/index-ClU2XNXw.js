(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Wx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wh={exports:{}},Sc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function Hv(){if(cy)return Sc;cy=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:e,type:a,key:d,ref:c!==void 0?c:null,props:u}}return Sc.Fragment=n,Sc.jsx=i,Sc.jsxs=i,Sc}var uy;function Uv(){return uy||(uy=1,Wh.exports=Hv()),Wh.exports}var l=Uv(),Fh={exports:{}},Cc={},Xh={exports:{}},Gh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dy;function Vv(){return dy||(dy=1,(function(e){function n($,ne){var Y=$.length;$.push(ne);e:for(;0<Y;){var fe=Y-1>>>1,Se=$[fe];if(0<c(Se,ne))$[fe]=ne,$[Y]=Se,Y=fe;else break e}}function i($){return $.length===0?null:$[0]}function a($){if($.length===0)return null;var ne=$[0],Y=$.pop();if(Y!==ne){$[0]=Y;e:for(var fe=0,Se=$.length,I=Se>>>1;fe<I;){var re=2*(fe+1)-1,te=$[re],be=re+1,Te=$[be];if(0>c(te,Y))be<Se&&0>c(Te,te)?($[fe]=Te,$[be]=Y,fe=be):($[fe]=te,$[re]=Y,fe=re);else if(be<Se&&0>c(Te,Y))$[fe]=Te,$[be]=Y,fe=be;else break e}}return ne}function c($,ne){var Y=$.sortIndex-ne.sortIndex;return Y!==0?Y:$.id-ne.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();e.unstable_now=function(){return d.now()-h}}var p=[],y=[],g=1,x=null,b=3,C=!1,M=!1,A=!1,T=!1,D=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function N($){for(var ne=i(y);ne!==null;){if(ne.callback===null)a(y);else if(ne.startTime<=$)a(y),ne.sortIndex=ne.expirationTime,n(p,ne);else break;ne=i(y)}}function q($){if(A=!1,N($),!M)if(i(p)!==null)M=!0,G||(G=!0,De());else{var ne=i(y);ne!==null&&oe(q,ne.startTime-$)}}var G=!1,W=-1,Z=5,ce=-1;function de(){return T?!0:!(e.unstable_now()-ce<Z)}function pe(){if(T=!1,G){var $=e.unstable_now();ce=$;var ne=!0;try{e:{M=!1,A&&(A=!1,V(W),W=-1),C=!0;var Y=b;try{t:{for(N($),x=i(p);x!==null&&!(x.expirationTime>$&&de());){var fe=x.callback;if(typeof fe=="function"){x.callback=null,b=x.priorityLevel;var Se=fe(x.expirationTime<=$);if($=e.unstable_now(),typeof Se=="function"){x.callback=Se,N($),ne=!0;break t}x===i(p)&&a(p),N($)}else a(p);x=i(p)}if(x!==null)ne=!0;else{var I=i(y);I!==null&&oe(q,I.startTime-$),ne=!1}}break e}finally{x=null,b=Y,C=!1}ne=void 0}}finally{ne?De():G=!1}}}var De;if(typeof z=="function")De=function(){z(pe)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,ie=Xe.port2;Xe.port1.onmessage=pe,De=function(){ie.postMessage(null)}}else De=function(){D(pe,0)};function oe($,ne){W=D(function(){$(e.unstable_now())},ne)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_next=function($){switch(b){case 1:case 2:case 3:var ne=3;break;default:ne=b}var Y=b;b=ne;try{return $()}finally{b=Y}},e.unstable_requestPaint=function(){T=!0},e.unstable_runWithPriority=function($,ne){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Y=b;b=$;try{return ne()}finally{b=Y}},e.unstable_scheduleCallback=function($,ne,Y){var fe=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?fe+Y:fe):Y=fe,$){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Y+Se,$={id:g++,callback:ne,priorityLevel:$,startTime:Y,expirationTime:Se,sortIndex:-1},Y>fe?($.sortIndex=Y,n(y,$),i(p)===null&&$===i(y)&&(A?(V(W),W=-1):A=!0,oe(q,Y-fe))):($.sortIndex=Se,n(p,$),M||C||(M=!0,G||(G=!0,De()))),$},e.unstable_shouldYield=de,e.unstable_wrapCallback=function($){var ne=b;return function(){var Y=b;b=ne;try{return $.apply(this,arguments)}finally{b=Y}}}})(Gh)),Gh}var fy;function Yv(){return fy||(fy=1,Xh.exports=Vv()),Xh.exports}var qh={exports:{}},ln={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hy;function Wv(){if(hy)return ln;hy=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function C(I){return I===null||typeof I!="object"?null:(I=b&&I[b]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,T={};function D(I,re,te){this.props=I,this.context=re,this.refs=T,this.updater=te||M}D.prototype.isReactComponent={},D.prototype.setState=function(I,re){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,re,"setState")},D.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function V(){}V.prototype=D.prototype;function z(I,re,te){this.props=I,this.context=re,this.refs=T,this.updater=te||M}var N=z.prototype=new V;N.constructor=z,A(N,D.prototype),N.isPureReactComponent=!0;var q=Array.isArray;function G(){}var W={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function ce(I,re,te){var be=te.ref;return{$$typeof:e,type:I,key:re,ref:be!==void 0?be:null,props:te}}function de(I,re){return ce(I.type,re,I.props)}function pe(I){return typeof I=="object"&&I!==null&&I.$$typeof===e}function De(I){var re={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(te){return re[te]})}var Xe=/\/+/g;function ie(I,re){return typeof I=="object"&&I!==null&&I.key!=null?De(""+I.key):re.toString(36)}function oe(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(G,G):(I.status="pending",I.then(function(re){I.status==="pending"&&(I.status="fulfilled",I.value=re)},function(re){I.status==="pending"&&(I.status="rejected",I.reason=re)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function $(I,re,te,be,Te){var he=typeof I;(he==="undefined"||he==="boolean")&&(I=null);var ze=!1;if(I===null)ze=!0;else switch(he){case"bigint":case"string":case"number":ze=!0;break;case"object":switch(I.$$typeof){case e:case n:ze=!0;break;case g:return ze=I._init,$(ze(I._payload),re,te,be,Te)}}if(ze)return Te=Te(I),ze=be===""?"."+ie(I,0):be,q(Te)?(te="",ze!=null&&(te=ze.replace(Xe,"$&/")+"/"),$(Te,re,te,"",function(ht){return ht})):Te!=null&&(pe(Te)&&(Te=de(Te,te+(Te.key==null||I&&I.key===Te.key?"":(""+Te.key).replace(Xe,"$&/")+"/")+ze)),re.push(Te)),1;ze=0;var Qe=be===""?".":be+":";if(q(I))for(var We=0;We<I.length;We++)be=I[We],he=Qe+ie(be,We),ze+=$(be,re,te,he,Te);else if(We=C(I),typeof We=="function")for(I=We.call(I),We=0;!(be=I.next()).done;)be=be.value,he=Qe+ie(be,We++),ze+=$(be,re,te,he,Te);else if(he==="object"){if(typeof I.then=="function")return $(oe(I),re,te,be,Te);throw re=String(I),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.")}return ze}function ne(I,re,te){if(I==null)return I;var be=[],Te=0;return $(I,be,"","",function(he){return re.call(te,he,Te++)}),be}function Y(I){if(I._status===-1){var re=I._result;re=re(),re.then(function(te){(I._status===0||I._status===-1)&&(I._status=1,I._result=te)},function(te){(I._status===0||I._status===-1)&&(I._status=2,I._result=te)}),I._status===-1&&(I._status=0,I._result=re)}if(I._status===1)return I._result.default;throw I._result}var fe=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var re=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(re))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Se={map:ne,forEach:function(I,re,te){ne(I,function(){re.apply(this,arguments)},te)},count:function(I){var re=0;return ne(I,function(){re++}),re},toArray:function(I){return ne(I,function(re){return re})||[]},only:function(I){if(!pe(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return ln.Activity=x,ln.Children=Se,ln.Component=D,ln.Fragment=i,ln.Profiler=c,ln.PureComponent=z,ln.StrictMode=a,ln.Suspense=p,ln.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,ln.__COMPILER_RUNTIME={__proto__:null,c:function(I){return W.H.useMemoCache(I)}},ln.cache=function(I){return function(){return I.apply(null,arguments)}},ln.cacheSignal=function(){return null},ln.cloneElement=function(I,re,te){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var be=A({},I.props),Te=I.key;if(re!=null)for(he in re.key!==void 0&&(Te=""+re.key),re)!Z.call(re,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&re.ref===void 0||(be[he]=re[he]);var he=arguments.length-2;if(he===1)be.children=te;else if(1<he){for(var ze=Array(he),Qe=0;Qe<he;Qe++)ze[Qe]=arguments[Qe+2];be.children=ze}return ce(I.type,Te,be)},ln.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:u,_context:I},I},ln.createElement=function(I,re,te){var be,Te={},he=null;if(re!=null)for(be in re.key!==void 0&&(he=""+re.key),re)Z.call(re,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Te[be]=re[be]);var ze=arguments.length-2;if(ze===1)Te.children=te;else if(1<ze){for(var Qe=Array(ze),We=0;We<ze;We++)Qe[We]=arguments[We+2];Te.children=Qe}if(I&&I.defaultProps)for(be in ze=I.defaultProps,ze)Te[be]===void 0&&(Te[be]=ze[be]);return ce(I,he,Te)},ln.createRef=function(){return{current:null}},ln.forwardRef=function(I){return{$$typeof:h,render:I}},ln.isValidElement=pe,ln.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:Y}},ln.memo=function(I,re){return{$$typeof:y,type:I,compare:re===void 0?null:re}},ln.startTransition=function(I){var re=W.T,te={};W.T=te;try{var be=I(),Te=W.S;Te!==null&&Te(te,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(G,fe)}catch(he){fe(he)}finally{re!==null&&te.types!==null&&(re.types=te.types),W.T=re}},ln.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},ln.use=function(I){return W.H.use(I)},ln.useActionState=function(I,re,te){return W.H.useActionState(I,re,te)},ln.useCallback=function(I,re){return W.H.useCallback(I,re)},ln.useContext=function(I){return W.H.useContext(I)},ln.useDebugValue=function(){},ln.useDeferredValue=function(I,re){return W.H.useDeferredValue(I,re)},ln.useEffect=function(I,re){return W.H.useEffect(I,re)},ln.useEffectEvent=function(I){return W.H.useEffectEvent(I)},ln.useId=function(){return W.H.useId()},ln.useImperativeHandle=function(I,re,te){return W.H.useImperativeHandle(I,re,te)},ln.useInsertionEffect=function(I,re){return W.H.useInsertionEffect(I,re)},ln.useLayoutEffect=function(I,re){return W.H.useLayoutEffect(I,re)},ln.useMemo=function(I,re){return W.H.useMemo(I,re)},ln.useOptimistic=function(I,re){return W.H.useOptimistic(I,re)},ln.useReducer=function(I,re,te){return W.H.useReducer(I,re,te)},ln.useRef=function(I){return W.H.useRef(I)},ln.useState=function(I){return W.H.useState(I)},ln.useSyncExternalStore=function(I,re,te){return W.H.useSyncExternalStore(I,re,te)},ln.useTransition=function(){return W.H.useTransition()},ln.version="19.2.4",ln}var my;function vp(){return my||(my=1,qh.exports=Wv()),qh.exports}var Kh={exports:{}},qo={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function Fv(){if(py)return qo;py=1;var e=vp();function n(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)y+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,y,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:y,implementation:g}}var d=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return qo.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,qo.createPortal=function(p,y){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(n(299));return u(p,y,null,g)},qo.flushSync=function(p){var y=d.T,g=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=y,a.p=g,a.d.f()}},qo.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(p,y))},qo.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},qo.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin),b=typeof y.integrity=="string"?y.integrity:void 0,C=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;g==="style"?a.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:C}):g==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:C,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},qo.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var g=h(y.as,y.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(p)},qo.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin);a.d.L(p,g,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},qo.preloadModule=function(p,y){if(typeof p=="string")if(y){var g=h(y.as,y.crossOrigin);a.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(p)},qo.requestFormReset=function(p){a.d.r(p)},qo.unstable_batchedUpdates=function(p,y){return p(y)},qo.useFormState=function(p,y,g){return d.H.useFormState(p,y,g)},qo.useFormStatus=function(){return d.H.useHostTransitionStatus()},qo.version="19.2.4",qo}var _y;function Fx(){if(_y)return Kh.exports;_y=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Kh.exports=Fv(),Kh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function Xv(){if(gy)return Cc;gy=1;var e=Yv(),n=vp(),i=Fx();function a(t){var s="https://react.dev/errors/"+t;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+t+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var s=t,o=t;if(t.alternate)for(;s.return;)s=s.return;else{t=s;do s=t,(s.flags&4098)!==0&&(o=s.return),t=s.return;while(t)}return s.tag===3?o:null}function d(t){if(t.tag===13){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function h(t){if(t.tag===31){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(a(188))}function y(t){var s=t.alternate;if(!s){if(s=u(t),s===null)throw Error(a(188));return s!==t?null:t}for(var o=t,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),t;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var S=!1,R=f.child;R;){if(R===o){S=!0,o=f,r=m;break}if(R===r){S=!0,r=f,o=m;break}R=R.sibling}if(!S){for(R=m.child;R;){if(R===o){S=!0,o=m,r=f;break}if(R===r){S=!0,r=m,o=f;break}R=R.sibling}if(!S)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?t:s}function g(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t;for(t=t.child;t!==null;){if(s=g(t),s!==null)return s;t=t.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),z=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),ce=Symbol.for("react.activity"),de=Symbol.for("react.memo_cache_sentinel"),pe=Symbol.iterator;function De(t){return t===null||typeof t!="object"?null:(t=pe&&t[pe]||t["@@iterator"],typeof t=="function"?t:null)}var Xe=Symbol.for("react.client.reference");function ie(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Xe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case D:return"Profiler";case T:return"StrictMode";case q:return"Suspense";case G:return"SuspenseList";case ce:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case z:return t.displayName||"Context";case V:return(t._context.displayName||"Context")+".Consumer";case N:var s=t.render;return t=t.displayName,t||(t=s.displayName||s.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case W:return s=t.displayName||null,s!==null?s:ie(t.type)||"Memo";case Z:s=t._payload,t=t._init;try{return ie(t(s))}catch{}}return null}var oe=Array.isArray,$=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},fe=[],Se=-1;function I(t){return{current:t}}function re(t){0>Se||(t.current=fe[Se],fe[Se]=null,Se--)}function te(t,s){Se++,fe[Se]=t.current,t.current=s}var be=I(null),Te=I(null),he=I(null),ze=I(null);function Qe(t,s){switch(te(he,s),te(Te,t),te(be,null),s.nodeType){case 9:case 11:t=(t=s.documentElement)&&(t=t.namespaceURI)?D0(t):0;break;default:if(t=s.tagName,s=s.namespaceURI)s=D0(s),t=R0(s,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}re(be),te(be,t)}function We(){re(be),re(Te),re(he)}function ht(t){t.memoizedState!==null&&te(ze,t);var s=be.current,o=R0(s,t.type);s!==o&&(te(Te,t),te(be,o))}function jt(t){Te.current===t&&(re(be),re(Te)),ze.current===t&&(re(ze),xc._currentValue=Y)}var vt,st;function Rt(t){if(vt===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);vt=s&&s[1]||"",st=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vt+t+st}var dt=!1;function qt(t,s){if(!t||dt)return"";dt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var Ue=function(){throw Error()};if(Object.defineProperty(Ue.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ue,[])}catch(ke){var we=ke}Reflect.construct(t,[],Ue)}else{try{Ue.call()}catch(ke){we=ke}t.call(Ue.prototype)}}else{try{throw Error()}catch(ke){we=ke}(Ue=t())&&typeof Ue.catch=="function"&&Ue.catch(function(){})}}catch(ke){if(ke&&we&&typeof ke.stack=="string")return[ke.stack,we.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),S=m[0],R=m[1];if(S&&R){var Q=S.split(`
`),ye=R.split(`
`);for(f=r=0;r<Q.length&&!Q[r].includes("DetermineComponentFrameRoot");)r++;for(;f<ye.length&&!ye[f].includes("DetermineComponentFrameRoot");)f++;if(r===Q.length||f===ye.length)for(r=Q.length-1,f=ye.length-1;1<=r&&0<=f&&Q[r]!==ye[f];)f--;for(;1<=r&&0<=f;r--,f--)if(Q[r]!==ye[f]){if(r!==1||f!==1)do if(r--,f--,0>f||Q[r]!==ye[f]){var Oe=`
`+Q[r].replace(" at new "," at ");return t.displayName&&Oe.includes("<anonymous>")&&(Oe=Oe.replace("<anonymous>",t.displayName)),Oe}while(1<=r&&0<=f);break}}}finally{dt=!1,Error.prepareStackTrace=o}return(o=t?t.displayName||t.name:"")?Rt(o):""}function Kt(t,s){switch(t.tag){case 26:case 27:case 5:return Rt(t.type);case 16:return Rt("Lazy");case 13:return t.child!==s&&s!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return qt(t.type,!1);case 11:return qt(t.type.render,!1);case 1:return qt(t.type,!0);case 31:return Rt("Activity");default:return""}}function J(t){try{var s="",o=null;do s+=Kt(t,o),o=t,t=t.return;while(t);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Re=Object.prototype.hasOwnProperty,rt=e.unstable_scheduleCallback,Ce=e.unstable_cancelCallback,mt=e.unstable_shouldYield,He=e.unstable_requestPaint,pt=e.unstable_now,gt=e.unstable_getCurrentPriorityLevel,Mt=e.unstable_ImmediatePriority,Bt=e.unstable_UserBlockingPriority,ot=e.unstable_NormalPriority,F=e.unstable_LowPriority,ee=e.unstable_IdlePriority,ve=e.log,Me=e.unstable_setDisableYieldValue,nt=null,Ge=null;function Le(t){if(typeof ve=="function"&&Me(t),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode(nt,t)}catch{}}var _e=Math.clz32?Math.clz32:Je,Ze=Math.log,Ye=Math.LN2;function Je(t){return t>>>=0,t===0?32:31-(Ze(t)/Ye|0)|0}var Be=256,et=262144,yt=4194304;function xt(t){var s=t&42;if(s!==0)return s;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ke(t,s,o){var r=t.pendingLanes;if(r===0)return 0;var f=0,m=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var R=r&134217727;return R!==0?(r=R&~m,r!==0?f=xt(r):(S&=R,S!==0?f=xt(S):o||(o=R&~t,o!==0&&(f=xt(o))))):(R=r&~m,R!==0?f=xt(R):S!==0?f=xt(S):o||(o=r&~t,o!==0&&(f=xt(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function Ot(t,s){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&s)===0}function wt(t,s){switch(t){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ft(){var t=yt;return yt<<=1,(yt&62914560)===0&&(yt=4194304),t}function un(t){for(var s=[],o=0;31>o;o++)s.push(t);return s}function ut(t,s){t.pendingLanes|=s,s!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function It(t,s,o,r,f,m){var S=t.pendingLanes;t.pendingLanes=o,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=o,t.entangledLanes&=o,t.errorRecoveryDisabledLanes&=o,t.shellSuspendCounter=0;var R=t.entanglements,Q=t.expirationTimes,ye=t.hiddenUpdates;for(o=S&~o;0<o;){var Oe=31-_e(o),Ue=1<<Oe;R[Oe]=0,Q[Oe]=-1;var we=ye[Oe];if(we!==null)for(ye[Oe]=null,Oe=0;Oe<we.length;Oe++){var ke=we[Oe];ke!==null&&(ke.lane&=-536870913)}o&=~Ue}r!==0&&_n(t,r,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(S&~s))}function _n(t,s,o){t.pendingLanes|=s,t.suspendedLanes&=~s;var r=31-_e(s);t.entangledLanes|=s,t.entanglements[r]=t.entanglements[r]|1073741824|o&261930}function Tt(t,s){var o=t.entangledLanes|=s;for(t=t.entanglements;o;){var r=31-_e(o),f=1<<r;f&s|t[r]&s&&(t[r]|=s),o&=~f}}function bt(t,s){var o=s&-s;return o=(o&42)!==0?1:dn(o),(o&(t.suspendedLanes|s))!==0?0:o}function dn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function sn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Zt(){var t=ne.p;return t!==0?t:(t=window.event,t===void 0?32:ny(t.type))}function Pt(t,s){var o=ne.p;try{return ne.p=t,s()}finally{ne.p=o}}var tn=Math.random().toString(36).slice(2),Nt="__reactFiber$"+tn,bn="__reactProps$"+tn,tt="__reactContainer$"+tn,ds="__reactEvents$"+tn,fs="__reactListeners$"+tn,Ro="__reactHandles$"+tn,no="__reactResources$"+tn,jo="__reactMarker$"+tn;function go(t){delete t[Nt],delete t[bn],delete t[ds],delete t[fs],delete t[Ro]}function Bo(t){var s=t[Nt];if(s)return s;for(var o=t.parentNode;o;){if(s=o[tt]||o[Nt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(t=I0(t);t!==null;){if(o=t[Nt])return o;t=I0(t)}return s}t=o,o=t.parentNode}return null}function as(t){if(t=t[Nt]||t[tt]){var s=t.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return t}return null}function Qt(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t.stateNode;throw Error(a(33))}function Ln(t){var s=t[no];return s||(s=t[no]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function nn(t){t[jo]=!0}var rs=new Set,gs={};function ys(t,s){on(t,s),on(t+"Capture",s)}function on(t,s){for(gs[t]=s,t=0;t<s.length;t++)rs.add(s[t])}var Ts=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rs={},hs={};function yo(t){return Re.call(hs,t)?!0:Re.call(Rs,t)?!1:Ts.test(t)?hs[t]=!0:(Rs[t]=!0,!1)}function so(t,s,o){if(yo(s))if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":t.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(s);return}}t.setAttribute(s,""+o)}}function Yn(t,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttribute(s,""+o)}}function Ys(t,s,o,r){if(r===null)t.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(o);return}t.setAttributeNS(s,o,""+r)}}function an(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ws(t){var s=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Si(t,s,o){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,s);if(!t.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(t,s,{configurable:!0,get:function(){return f.call(this)},set:function(S){o=""+S,m.call(this,S)}}),Object.defineProperty(t,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){t._valueTracker=null,delete t[s]}}}}function Ss(t){if(!t._valueTracker){var s=Ws(t)?"checked":"value";t._valueTracker=Si(t,s,""+t[s])}}function Mo(t){if(!t)return!1;var s=t._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return t&&(r=Ws(t)?t.checked?"true":"false":t.value),t=r,t!==o?(s.setValue(t),!0):!1}function Bs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Wn=/[\n"\\]/g;function ms(t){return t.replace(Wn,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Fs(t,s,o,r,f,m,S,R){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),s!=null?S==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+an(s)):t.value!==""+an(s)&&(t.value=""+an(s)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),s!=null?Ls(t,S,an(s)):o!=null?Ls(t,S,an(o)):r!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+an(R):t.removeAttribute("name")}function On(t,s,o,r,f,m,S,R){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){Ss(t);return}o=o!=null?""+an(o):"",s=s!=null?""+an(s):o,R||s===t.value||(t.value=s),t.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=R?t.checked:!!r,t.defaultChecked=!!r,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Ss(t)}function Ls(t,s,o){s==="number"&&Bs(t.ownerDocument)===t||t.defaultValue===""+o||(t.defaultValue=""+o)}function Fn(t,s,o,r){if(t=t.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=s.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&r&&(t[o].defaultSelected=!0)}else{for(o=""+an(o),s=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,r&&(t[f].defaultSelected=!0);return}s!==null||t[f].disabled||(s=t[f])}s!==null&&(s.selected=!0)}}function Xn(t,s,o){if(s!=null&&(s=""+an(s),s!==t.value&&(t.value=s),o==null)){t.defaultValue!==s&&(t.defaultValue=s);return}t.defaultValue=o!=null?""+an(o):""}function ui(t,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(oe(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=an(s),t.defaultValue=o,r=t.textContent,r===o&&r!==""&&r!==null&&(t.value=r),Ss(t)}function ps(t,s){if(s){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=s;return}}t.textContent=s}var oo=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jt(t,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="":r?t.setProperty(s,o):typeof o!="number"||o===0||oo.has(s)?s==="float"?t.cssFloat=o:t[s]=(""+o).trim():t[s]=o+"px"}function Ci(t,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(t=t.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&Jt(t,f,r)}else for(var m in s)s.hasOwnProperty(m)&&Jt(t,m,s[m])}function Gn(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Li=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xo=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function As(t){return xo.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ls(){}var Eo=null;function es(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tn=null,bo=null;function di(t){var s=as(t);if(s&&(t=s.stateNode)){var o=t[bn]||null;e:switch(t=s.stateNode,s.type){case"input":if(Fs(t,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+ms(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==t&&r.form===t.form){var f=r[bn]||null;if(!f)throw Error(a(90));Fs(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===t.form&&Mo(r)}break e;case"textarea":Xn(t,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Fn(t,!!o.multiple,s,!1)}}}var Os=!1;function To(t,s,o){if(Os)return t(s,o);Os=!0;try{var r=t(s);return r}finally{if(Os=!1,(Tn!==null||bo!==null)&&(Bu(),Tn&&(s=Tn,t=bo,bo=Tn=null,di(s),t)))for(s=0;s<t.length;s++)di(t[s])}}function xn(t,s){var o=t.stateNode;if(o===null)return null;var r=o[bn]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Xs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zs=!1;if(Xs)try{var Qo={};Object.defineProperty(Qo,"passive",{get:function(){zs=!0}}),window.addEventListener("test",Qo,Qo),window.removeEventListener("test",Qo,Qo)}catch{zs=!1}var Ns=null,Zo=null,Lo=null;function Oi(){if(Lo)return Lo;var t,s=Zo,o=s.length,r,f="value"in Ns?Ns.value:Ns.textContent,m=f.length;for(t=0;t<o&&s[t]===f[t];t++);var S=o-t;for(r=1;r<=S&&s[o-r]===f[m-r];r++);return Lo=f.slice(t,1<r?1-r:void 0)}function io(t){var s=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&s===13&&(t=13)):t=s,t===10&&(t=13),32<=t||t===13?t:0}function Ao(){return!0}function Jo(){return!1}function Un(t){function s(o,r,f,m,S){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(o=t[R],this[R]=o?o(m):m[R]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ao:Jo,this.isPropagationStopped=Jo,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ao)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ao)},persist:function(){},isPersistent:Ao}),s}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},No=Un(Cs),ao=x({},Cs,{view:0,detail:0}),ro=Un(ao),jn,$s,Rn,Ps=x({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Rn&&(Rn&&t.type==="mousemove"?(jn=t.screenX-Rn.screenX,$s=t.screenY-Rn.screenY):$s=jn=0,Rn=t),jn)},movementY:function(t){return"movementY"in t?t.movementY:$s}}),Vo=Un(Ps),Yo=x({},Ps,{dataTransfer:0}),zi=Un(Yo),ei=x({},ao,{relatedTarget:0}),xs=Un(ei),Gs=x({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),qn=Un(Gs),$i=x({},Cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ki=Un($i),ti=x({},Cs,{data:0}),Lt=Un(ti),vo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qs={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fi={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ni(t){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(t):(t=fi[t])?!!s[t]:!1}function Oo(){return ni}var ji=x({},ao,{key:function(t){if(t.key){var s=vo[t.key]||t.key;if(s!=="Unidentified")return s}return t.type==="keypress"?(t=io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qs[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oo,charCode:function(t){return t.type==="keypress"?io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qi=Un(ji),Zi=x({},Ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Un(Zi),X=x({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oo}),ue=Un(X),je=x({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ve=Un(je),at=x({},Ps,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yt=Un(at),Ht=x({},Cs,{newState:0,oldState:0}),Ft=Un(Ht),hn=[9,13,27,32],vn=Xs&&"CompositionEvent"in window,rn=null;Xs&&"documentMode"in document&&(rn=document.documentMode);var Vn=Xs&&"TextEvent"in window&&!rn,gn=Xs&&(!vn||rn&&8<rn&&11>=rn),Vt=" ",An=!1;function ks(t,s){switch(t){case"keyup":return hn.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wo(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var en=!1;function Ds(t,s){switch(t){case"compositionend":return wo(s);case"keypress":return s.which!==32?null:(An=!0,Vt);case"textInput":return t=s.data,t===Vt&&An?null:t;default:return null}}function lo(t,s){if(en)return t==="compositionend"||!vn&&ks(t,s)?(t=Oi(),Lo=Zo=Ns=null,en=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return gn&&s.locale!=="ko"?null:s.data;default:return null}}var co={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function So(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s==="input"?!!co[t.type]:s==="textarea"}function hi(t,s,o,r){Tn?bo?bo.push(r):bo=[r]:Tn=r,s=Hu(s,"onChange"),0<s.length&&(o=new No("onChange","change",null,o,r),t.push({event:o,listeners:s}))}var Wo=null,Fo=null;function la(t){j0(t,0)}function O(t){var s=Qt(t);if(Mo(s))return t}function U(t,s){if(t==="change")return s}var w=!1;if(Xs){var v;if(Xs){var k="oninput"in document;if(!k){var B=document.createElement("div");B.setAttribute("oninput","return;"),k=typeof B.oninput=="function"}v=k}else v=!1;w=v&&(!document.documentMode||9<document.documentMode)}function j(){Wo&&(Wo.detachEvent("onpropertychange",L),Fo=Wo=null)}function L(t){if(t.propertyName==="value"&&O(Fo)){var s=[];hi(s,Fo,t,es(t)),To(la,s)}}function H(t,s,o){t==="focusin"?(j(),Wo=s,Fo=o,Wo.attachEvent("onpropertychange",L)):t==="focusout"&&j()}function K(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return O(Fo)}function ae(t,s){if(t==="click")return O(s)}function Ee(t,s){if(t==="input"||t==="change")return O(s)}function Ae(t,s){return t===s&&(t!==0||1/t===1/s)||t!==t&&s!==s}var Ne=typeof Object.is=="function"?Object.is:Ae;function me(t,s){if(Ne(t,s))return!0;if(typeof t!="object"||t===null||typeof s!="object"||s===null)return!1;var o=Object.keys(t),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!Re.call(s,f)||!Ne(t[f],s[f]))return!1}return!0}function ct(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _t(t,s){var o=ct(t);t=0;for(var r;o;){if(o.nodeType===3){if(r=t+o.textContent.length,t<=s&&r>=s)return{node:o,offset:s-t};t=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ct(o)}}function zt(t,s){return t&&s?t===s?!0:t&&t.nodeType===3?!1:s&&s.nodeType===3?zt(t,s.parentNode):"contains"in t?t.contains(s):t.compareDocumentPosition?!!(t.compareDocumentPosition(s)&16):!1:!1}function Ct(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var s=Bs(t.document);s instanceof t.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)t=s.contentWindow;else break;s=Bs(t.document)}return s}function it(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s&&(s==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||s==="textarea"||t.contentEditable==="true")}var lt=Xs&&"documentMode"in document&&11>=document.documentMode,St=null,wn=null,fn=null,bs=!1;function Ks(t,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;bs||St==null||St!==Bs(r)||(r=St,"selectionStart"in r&&it(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fn&&me(fn,r)||(fn=r,r=Hu(wn,"onSelect"),0<r.length&&(s=new No("onSelect","select",null,s,o),t.push({event:s,listeners:r}),s.target=St)))}function Bn(t,s){var o={};return o[t.toLowerCase()]=s.toLowerCase(),o["Webkit"+t]="webkit"+s,o["Moz"+t]="moz"+s,o}var Xo={animationend:Bn("Animation","AnimationEnd"),animationiteration:Bn("Animation","AnimationIteration"),animationstart:Bn("Animation","AnimationStart"),transitionrun:Bn("Transition","TransitionRun"),transitionstart:Bn("Transition","TransitionStart"),transitioncancel:Bn("Transition","TransitionCancel"),transitionend:Bn("Transition","TransitionEnd")},Go={},Qs={};Xs&&(Qs=document.createElement("div").style,"AnimationEvent"in window||(delete Xo.animationend.animation,delete Xo.animationiteration.animation,delete Xo.animationstart.animation),"TransitionEvent"in window||delete Xo.transitionend.transition);function Nn(t){if(Go[t])return Go[t];if(!Xo[t])return t;var s=Xo[t],o;for(o in s)if(s.hasOwnProperty(o)&&o in Qs)return Go[t]=s[o];return t}var mi=Nn("animationend"),Mi=Nn("animationiteration"),gr=Nn("animationstart"),Wr=Nn("transitionrun"),Fr=Nn("transitionstart"),Xr=Nn("transitioncancel"),Ul=Nn("transitionend"),Vl=new Map,Gr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gr.push("scrollEnd");function pi(t,s){Vl.set(t,s),ys(s,[t])}var yr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},si=[],xa=0,qr=0;function xr(){for(var t=xa,s=qr=xa=0;s<t;){var o=si[s];si[s++]=null;var r=si[s];si[s++]=null;var f=si[s];si[s++]=null;var m=si[s];if(si[s++]=null,r!==null&&f!==null){var S=r.pending;S===null?f.next=f:(f.next=S.next,S.next=f),r.pending=f}m!==0&&Yl(o,f,m)}}function br(t,s,o,r){si[xa++]=t,si[xa++]=s,si[xa++]=o,si[xa++]=r,qr|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Kr(t,s,o,r){return br(t,s,o,r),vr(t)}function ca(t,s){return br(t,null,null,s),vr(t)}function Yl(t,s,o){t.lanes|=o;var r=t.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=t.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&s!==null&&(f=31-_e(o),t=m.hiddenUpdates,r=t[f],r===null?t[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function vr(t){if(50<fc)throw fc=0,ph=null,Error(a(185));for(var s=t.return;s!==null;)t=s,s=t.return;return t.tag===3?t.stateNode:null}var ba={};function ou(t,s,o,r){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(t,s,o,r){return new ou(t,s,o,r)}function Kn(t){return t=t.prototype,!(!t||!t.isReactComponent)}function js(t,s){var o=t.alternate;return o===null?(o=Gt(t.tag,s,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=s,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&65011712,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,s=t.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o.refCleanup=t.refCleanup,o}function Pi(t,s){t.flags&=65011714;var o=t.alternate;return o===null?(t.childLanes=0,t.lanes=s,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=o.childLanes,t.lanes=o.lanes,t.child=o.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=o.memoizedProps,t.memoizedState=o.memoizedState,t.updateQueue=o.updateQueue,t.type=o.type,s=o.dependencies,t.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),t}function va(t,s,o,r,f,m){var S=0;if(r=t,typeof t=="function")Kn(t)&&(S=1);else if(typeof t=="string")S=Tv(t,o,be.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case ce:return t=Gt(31,o,s,f),t.elementType=ce,t.lanes=m,t;case A:return Zs(o.children,f,m,s);case T:S=8,f|=24;break;case D:return t=Gt(12,o,s,f|2),t.elementType=D,t.lanes=m,t;case q:return t=Gt(13,o,s,f),t.elementType=q,t.lanes=m,t;case G:return t=Gt(19,o,s,f),t.elementType=G,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:S=10;break e;case V:S=9;break e;case N:S=11;break e;case W:S=14;break e;case Z:S=16,r=null;break e}S=29,o=Error(a(130,t===null?"null":typeof t,"")),r=null}return s=Gt(S,o,s,f),s.elementType=t,s.type=r,s.lanes=m,s}function Zs(t,s,o,r){return t=Gt(7,t,r,s),t.lanes=o,t}function Ms(t,s,o){return t=Gt(6,t,null,s),t.lanes=o,t}function c_(t){var s=Gt(18,null,null,0);return s.stateNode=t,s}function cf(t,s,o){return s=Gt(4,t.children!==null?t.children:[],t.key,s),s.lanes=o,s.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},s}var u_=new WeakMap;function Ii(t,s){if(typeof t=="object"&&t!==null){var o=u_.get(t);return o!==void 0?o:(s={value:t,source:s,stack:J(s)},u_.set(t,s),s)}return{value:t,source:s,stack:J(s)}}var Qr=[],Zr=0,iu=null,Wl=0,Hi=[],Ui=0,Ha=null,ua=1,da="";function wa(t,s){Qr[Zr++]=Wl,Qr[Zr++]=iu,iu=t,Wl=s}function d_(t,s,o){Hi[Ui++]=ua,Hi[Ui++]=da,Hi[Ui++]=Ha,Ha=t;var r=ua;t=da;var f=32-_e(r)-1;r&=~(1<<f),o+=1;var m=32-_e(s)+f;if(30<m){var S=f-f%5;m=(r&(1<<S)-1).toString(32),r>>=S,f-=S,ua=1<<32-_e(s)+f|o<<f|r,da=m+t}else ua=1<<m|o<<f|r,da=t}function uf(t){t.return!==null&&(wa(t,1),d_(t,1,0))}function df(t){for(;t===iu;)iu=Qr[--Zr],Qr[Zr]=null,Wl=Qr[--Zr],Qr[Zr]=null;for(;t===Ha;)Ha=Hi[--Ui],Hi[Ui]=null,da=Hi[--Ui],Hi[Ui]=null,ua=Hi[--Ui],Hi[Ui]=null}function f_(t,s){Hi[Ui++]=ua,Hi[Ui++]=da,Hi[Ui++]=Ha,ua=s.id,da=s.overflow,Ha=t}var zo=null,vs=null,Dn=!1,Ua=null,Vi=!1,ff=Error(a(519));function Va(t){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fl(Ii(s,t)),ff}function h_(t){var s=t.stateNode,o=t.type,r=t.memoizedProps;switch(s[Nt]=t,s[bn]=r,o){case"dialog":kn("cancel",s),kn("close",s);break;case"iframe":case"object":case"embed":kn("load",s);break;case"video":case"audio":for(o=0;o<mc.length;o++)kn(mc[o],s);break;case"source":kn("error",s);break;case"img":case"image":case"link":kn("error",s),kn("load",s);break;case"details":kn("toggle",s);break;case"input":kn("invalid",s),On(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":kn("invalid",s);break;case"textarea":kn("invalid",s),ui(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||A0(s.textContent,o)?(r.popover!=null&&(kn("beforetoggle",s),kn("toggle",s)),r.onScroll!=null&&kn("scroll",s),r.onScrollEnd!=null&&kn("scrollend",s),r.onClick!=null&&(s.onclick=ls),s=!0):s=!1,s||Va(t,!0)}function m_(t){for(zo=t.return;zo;)switch(zo.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:zo=zo.return}}function Jr(t){if(t!==zo)return!1;if(!Dn)return m_(t),Dn=!0,!1;var s=t.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=t.type,o=!(o!=="form"&&o!=="button")||Ah(t.type,t.memoizedProps)),o=!o),o&&vs&&Va(t),m_(t),s===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));vs=P0(t)}else if(s===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));vs=P0(t)}else s===27?(s=vs,sr(t.type)?(t=Lh,Lh=null,vs=t):vs=s):vs=zo?Wi(t.stateNode.nextSibling):null;return!0}function wr(){vs=zo=null,Dn=!1}function hf(){var t=Ua;return t!==null&&(xi===null?xi=t:xi.push.apply(xi,t),Ua=null),t}function Fl(t){Ua===null?Ua=[t]:Ua.push(t)}var mf=I(null),Sr=null,Sa=null;function Ya(t,s,o){te(mf,s._currentValue),s._currentValue=o}function Ca(t){t._currentValue=mf.current,re(mf)}function pf(t,s,o){for(;t!==null;){var r=t.alternate;if((t.childLanes&s)!==s?(t.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),t===o)break;t=t.return}}function _f(t,s,o,r){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var S=f.child;m=m.firstContext;e:for(;m!==null;){var R=m;m=f;for(var Q=0;Q<s.length;Q++)if(R.context===s[Q]){m.lanes|=o,R=m.alternate,R!==null&&(R.lanes|=o),pf(m.return,o,t),r||(S=null);break e}m=R.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(a(341));S.lanes|=o,m=S.alternate,m!==null&&(m.lanes|=o),pf(S,o,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function el(t,s,o,r){t=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var R=f.type;Ne(f.pendingProps.value,S.value)||(t!==null?t.push(R):t=[R])}}else if(f===ze.current){if(S=f.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(xc):t=[xc])}f=f.return}t!==null&&_f(s,t,o,r),s.flags|=262144}function au(t){for(t=t.firstContext;t!==null;){if(!Ne(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Cr(t){Sr=t,Sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function $o(t){return p_(Sr,t)}function ru(t,s){return Sr===null&&Cr(t),p_(t,s)}function p_(t,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Sa===null){if(t===null)throw Error(a(308));Sa=s,t.dependencies={lanes:0,firstContext:s},t.flags|=524288}else Sa=Sa.next=s;return o}var k2=typeof AbortController<"u"?AbortController:function(){var t=[],s=this.signal={aborted:!1,addEventListener:function(o,r){t.push(r)}};this.abort=function(){s.aborted=!0,t.forEach(function(o){return o()})}},j2=e.unstable_scheduleCallback,M2=e.unstable_NormalPriority,uo={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gf(){return{controller:new k2,data:new Map,refCount:0}}function Xl(t){t.refCount--,t.refCount===0&&j2(M2,function(){t.controller.abort()})}var Gl=null,yf=0,tl=0,nl=null;function E2(t,s){if(Gl===null){var o=Gl=[];yf=0,tl=vh(),nl={status:"pending",value:void 0,then:function(r){o.push(r)}}}return yf++,s.then(__,__),s}function __(){if(--yf===0&&Gl!==null){nl!==null&&(nl.status="fulfilled");var t=Gl;Gl=null,tl=0,nl=null;for(var s=0;s<t.length;s++)(0,t[s])()}}function T2(t,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return t.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var g_=$.S;$.S=function(t,s){e0=pt(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&E2(t,s),g_!==null&&g_(t,s)};var kr=I(null);function xf(){var t=kr.current;return t!==null?t:cs.pooledCache}function lu(t,s){s===null?te(kr,kr.current):te(kr,s.pool)}function y_(){var t=xf();return t===null?null:{parent:uo._currentValue,pool:t}}var sl=Error(a(460)),bf=Error(a(474)),cu=Error(a(542)),uu={then:function(){}};function x_(t){return t=t.status,t==="fulfilled"||t==="rejected"}function b_(t,s,o){switch(o=t[o],o===void 0?t.push(s):o!==s&&(s.then(ls,ls),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,w_(t),t;default:if(typeof s.status=="string")s.then(ls,ls);else{if(t=cs,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=s,t.status="pending",t.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,w_(t),t}throw Mr=s,sl}}function jr(t){try{var s=t._init;return s(t._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Mr=o,sl):o}}var Mr=null;function v_(){if(Mr===null)throw Error(a(459));var t=Mr;return Mr=null,t}function w_(t){if(t===sl||t===cu)throw Error(a(483))}var ol=null,ql=0;function du(t){var s=ql;return ql+=1,ol===null&&(ol=[]),b_(ol,t,s)}function Kl(t,s){s=s.props.ref,t.ref=s!==void 0?s:null}function fu(t,s){throw s.$$typeof===b?Error(a(525)):(t=Object.prototype.toString.call(s),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":t)))}function S_(t){function s(le,se){if(t){var ge=le.deletions;ge===null?(le.deletions=[se],le.flags|=16):ge.push(se)}}function o(le,se){if(!t)return null;for(;se!==null;)s(le,se),se=se.sibling;return null}function r(le){for(var se=new Map;le!==null;)le.key!==null?se.set(le.key,le):se.set(le.index,le),le=le.sibling;return se}function f(le,se){return le=js(le,se),le.index=0,le.sibling=null,le}function m(le,se,ge){return le.index=ge,t?(ge=le.alternate,ge!==null?(ge=ge.index,ge<se?(le.flags|=67108866,se):ge):(le.flags|=67108866,se)):(le.flags|=1048576,se)}function S(le){return t&&le.alternate===null&&(le.flags|=67108866),le}function R(le,se,ge,Ie){return se===null||se.tag!==6?(se=Ms(ge,le.mode,Ie),se.return=le,se):(se=f(se,ge),se.return=le,se)}function Q(le,se,ge,Ie){var Ut=ge.type;return Ut===A?Oe(le,se,ge.props.children,Ie,ge.key):se!==null&&(se.elementType===Ut||typeof Ut=="object"&&Ut!==null&&Ut.$$typeof===Z&&jr(Ut)===se.type)?(se=f(se,ge.props),Kl(se,ge),se.return=le,se):(se=va(ge.type,ge.key,ge.props,null,le.mode,Ie),Kl(se,ge),se.return=le,se)}function ye(le,se,ge,Ie){return se===null||se.tag!==4||se.stateNode.containerInfo!==ge.containerInfo||se.stateNode.implementation!==ge.implementation?(se=cf(ge,le.mode,Ie),se.return=le,se):(se=f(se,ge.children||[]),se.return=le,se)}function Oe(le,se,ge,Ie,Ut){return se===null||se.tag!==7?(se=Zs(ge,le.mode,Ie,Ut),se.return=le,se):(se=f(se,ge),se.return=le,se)}function Ue(le,se,ge){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return se=Ms(""+se,le.mode,ge),se.return=le,se;if(typeof se=="object"&&se!==null){switch(se.$$typeof){case C:return ge=va(se.type,se.key,se.props,null,le.mode,ge),Kl(ge,se),ge.return=le,ge;case M:return se=cf(se,le.mode,ge),se.return=le,se;case Z:return se=jr(se),Ue(le,se,ge)}if(oe(se)||De(se))return se=Zs(se,le.mode,ge,null),se.return=le,se;if(typeof se.then=="function")return Ue(le,du(se),ge);if(se.$$typeof===z)return Ue(le,ru(le,se),ge);fu(le,se)}return null}function we(le,se,ge,Ie){var Ut=se!==null?se.key:null;if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Ut!==null?null:R(le,se,""+ge,Ie);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case C:return ge.key===Ut?Q(le,se,ge,Ie):null;case M:return ge.key===Ut?ye(le,se,ge,Ie):null;case Z:return ge=jr(ge),we(le,se,ge,Ie)}if(oe(ge)||De(ge))return Ut!==null?null:Oe(le,se,ge,Ie,null);if(typeof ge.then=="function")return we(le,se,du(ge),Ie);if(ge.$$typeof===z)return we(le,se,ru(le,ge),Ie);fu(le,ge)}return null}function ke(le,se,ge,Ie,Ut){if(typeof Ie=="string"&&Ie!==""||typeof Ie=="number"||typeof Ie=="bigint")return le=le.get(ge)||null,R(se,le,""+Ie,Ut);if(typeof Ie=="object"&&Ie!==null){switch(Ie.$$typeof){case C:return le=le.get(Ie.key===null?ge:Ie.key)||null,Q(se,le,Ie,Ut);case M:return le=le.get(Ie.key===null?ge:Ie.key)||null,ye(se,le,Ie,Ut);case Z:return Ie=jr(Ie),ke(le,se,ge,Ie,Ut)}if(oe(Ie)||De(Ie))return le=le.get(ge)||null,Oe(se,le,Ie,Ut,null);if(typeof Ie.then=="function")return ke(le,se,ge,du(Ie),Ut);if(Ie.$$typeof===z)return ke(le,se,ge,ru(se,Ie),Ut);fu(se,Ie)}return null}function At(le,se,ge,Ie){for(var Ut=null,zn=null,$t=se,yn=se=0,En=null;$t!==null&&yn<ge.length;yn++){$t.index>yn?(En=$t,$t=null):En=$t.sibling;var $n=we(le,$t,ge[yn],Ie);if($n===null){$t===null&&($t=En);break}t&&$t&&$n.alternate===null&&s(le,$t),se=m($n,se,yn),zn===null?Ut=$n:zn.sibling=$n,zn=$n,$t=En}if(yn===ge.length)return o(le,$t),Dn&&wa(le,yn),Ut;if($t===null){for(;yn<ge.length;yn++)$t=Ue(le,ge[yn],Ie),$t!==null&&(se=m($t,se,yn),zn===null?Ut=$t:zn.sibling=$t,zn=$t);return Dn&&wa(le,yn),Ut}for($t=r($t);yn<ge.length;yn++)En=ke($t,le,yn,ge[yn],Ie),En!==null&&(t&&En.alternate!==null&&$t.delete(En.key===null?yn:En.key),se=m(En,se,yn),zn===null?Ut=En:zn.sibling=En,zn=En);return t&&$t.forEach(function(lr){return s(le,lr)}),Dn&&wa(le,yn),Ut}function Xt(le,se,ge,Ie){if(ge==null)throw Error(a(151));for(var Ut=null,zn=null,$t=se,yn=se=0,En=null,$n=ge.next();$t!==null&&!$n.done;yn++,$n=ge.next()){$t.index>yn?(En=$t,$t=null):En=$t.sibling;var lr=we(le,$t,$n.value,Ie);if(lr===null){$t===null&&($t=En);break}t&&$t&&lr.alternate===null&&s(le,$t),se=m(lr,se,yn),zn===null?Ut=lr:zn.sibling=lr,zn=lr,$t=En}if($n.done)return o(le,$t),Dn&&wa(le,yn),Ut;if($t===null){for(;!$n.done;yn++,$n=ge.next())$n=Ue(le,$n.value,Ie),$n!==null&&(se=m($n,se,yn),zn===null?Ut=$n:zn.sibling=$n,zn=$n);return Dn&&wa(le,yn),Ut}for($t=r($t);!$n.done;yn++,$n=ge.next())$n=ke($t,le,yn,$n.value,Ie),$n!==null&&(t&&$n.alternate!==null&&$t.delete($n.key===null?yn:$n.key),se=m($n,se,yn),zn===null?Ut=$n:zn.sibling=$n,zn=$n);return t&&$t.forEach(function(Iv){return s(le,Iv)}),Dn&&wa(le,yn),Ut}function ss(le,se,ge,Ie){if(typeof ge=="object"&&ge!==null&&ge.type===A&&ge.key===null&&(ge=ge.props.children),typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case C:e:{for(var Ut=ge.key;se!==null;){if(se.key===Ut){if(Ut=ge.type,Ut===A){if(se.tag===7){o(le,se.sibling),Ie=f(se,ge.props.children),Ie.return=le,le=Ie;break e}}else if(se.elementType===Ut||typeof Ut=="object"&&Ut!==null&&Ut.$$typeof===Z&&jr(Ut)===se.type){o(le,se.sibling),Ie=f(se,ge.props),Kl(Ie,ge),Ie.return=le,le=Ie;break e}o(le,se);break}else s(le,se);se=se.sibling}ge.type===A?(Ie=Zs(ge.props.children,le.mode,Ie,ge.key),Ie.return=le,le=Ie):(Ie=va(ge.type,ge.key,ge.props,null,le.mode,Ie),Kl(Ie,ge),Ie.return=le,le=Ie)}return S(le);case M:e:{for(Ut=ge.key;se!==null;){if(se.key===Ut)if(se.tag===4&&se.stateNode.containerInfo===ge.containerInfo&&se.stateNode.implementation===ge.implementation){o(le,se.sibling),Ie=f(se,ge.children||[]),Ie.return=le,le=Ie;break e}else{o(le,se);break}else s(le,se);se=se.sibling}Ie=cf(ge,le.mode,Ie),Ie.return=le,le=Ie}return S(le);case Z:return ge=jr(ge),ss(le,se,ge,Ie)}if(oe(ge))return At(le,se,ge,Ie);if(De(ge)){if(Ut=De(ge),typeof Ut!="function")throw Error(a(150));return ge=Ut.call(ge),Xt(le,se,ge,Ie)}if(typeof ge.then=="function")return ss(le,se,du(ge),Ie);if(ge.$$typeof===z)return ss(le,se,ru(le,ge),Ie);fu(le,ge)}return typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint"?(ge=""+ge,se!==null&&se.tag===6?(o(le,se.sibling),Ie=f(se,ge),Ie.return=le,le=Ie):(o(le,se),Ie=Ms(ge,le.mode,Ie),Ie.return=le,le=Ie),S(le)):o(le,se)}return function(le,se,ge,Ie){try{ql=0;var Ut=ss(le,se,ge,Ie);return ol=null,Ut}catch($t){if($t===sl||$t===cu)throw $t;var zn=Gt(29,$t,null,le.mode);return zn.lanes=Ie,zn.return=le,zn}finally{}}}var Er=S_(!0),C_=S_(!1),Wa=!1;function vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wf(t,s){t=t.updateQueue,s.updateQueue===t&&(s.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xa(t,s,o){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(In&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=vr(t),Yl(t,null,o),s}return br(t,r,s,o),vr(t)}function Ql(t,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=t.pendingLanes,o|=r,s.lanes=o,Tt(t,o)}}function Sf(t,s){var o=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var S={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=S:m=m.next=S,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=s:t.next=s,o.lastBaseUpdate=s}var Cf=!1;function Zl(){if(Cf){var t=nl;if(t!==null)throw t}}function Jl(t,s,o,r){Cf=!1;var f=t.updateQueue;Wa=!1;var m=f.firstBaseUpdate,S=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var Q=R,ye=Q.next;Q.next=null,S===null?m=ye:S.next=ye,S=Q;var Oe=t.alternate;Oe!==null&&(Oe=Oe.updateQueue,R=Oe.lastBaseUpdate,R!==S&&(R===null?Oe.firstBaseUpdate=ye:R.next=ye,Oe.lastBaseUpdate=Q))}if(m!==null){var Ue=f.baseState;S=0,Oe=ye=Q=null,R=m;do{var we=R.lane&-536870913,ke=we!==R.lane;if(ke?(Mn&we)===we:(r&we)===we){we!==0&&we===tl&&(Cf=!0),Oe!==null&&(Oe=Oe.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var At=t,Xt=R;we=s;var ss=o;switch(Xt.tag){case 1:if(At=Xt.payload,typeof At=="function"){Ue=At.call(ss,Ue,we);break e}Ue=At;break e;case 3:At.flags=At.flags&-65537|128;case 0:if(At=Xt.payload,we=typeof At=="function"?At.call(ss,Ue,we):At,we==null)break e;Ue=x({},Ue,we);break e;case 2:Wa=!0}}we=R.callback,we!==null&&(t.flags|=64,ke&&(t.flags|=8192),ke=f.callbacks,ke===null?f.callbacks=[we]:ke.push(we))}else ke={lane:we,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Oe===null?(ye=Oe=ke,Q=Ue):Oe=Oe.next=ke,S|=we;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;ke=R,R=ke.next,ke.next=null,f.lastBaseUpdate=ke,f.shared.pending=null}}while(!0);Oe===null&&(Q=Ue),f.baseState=Q,f.firstBaseUpdate=ye,f.lastBaseUpdate=Oe,m===null&&(f.shared.lanes=0),Za|=S,t.lanes=S,t.memoizedState=Ue}}function k_(t,s){if(typeof t!="function")throw Error(a(191,t));t.call(s)}function j_(t,s){var o=t.callbacks;if(o!==null)for(t.callbacks=null,t=0;t<o.length;t++)k_(o[t],s)}var il=I(null),hu=I(0);function M_(t,s){t=Ra,te(hu,t),te(il,s),Ra=t|s.baseLanes}function kf(){te(hu,Ra),te(il,il.current)}function jf(){Ra=hu.current,re(il),re(hu)}var Ei=I(null),Yi=null;function Ga(t){var s=t.alternate;te(Js,Js.current&1),te(Ei,t),Yi===null&&(s===null||il.current!==null||s.memoizedState!==null)&&(Yi=t)}function Mf(t){te(Js,Js.current),te(Ei,t),Yi===null&&(Yi=t)}function E_(t){t.tag===22?(te(Js,Js.current),te(Ei,t),Yi===null&&(Yi=t)):qa()}function qa(){te(Js,Js.current),te(Ei,Ei.current)}function Ti(t){re(Ei),Yi===t&&(Yi=null),re(Js)}var Js=I(0);function mu(t){for(var s=t;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Rh(o)||Bh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ka=0,mn=null,ts=null,fo=null,pu=!1,al=!1,Tr=!1,_u=0,ec=0,rl=null,A2=0;function Is(){throw Error(a(321))}function Ef(t,s){if(s===null)return!1;for(var o=0;o<s.length&&o<t.length;o++)if(!Ne(t[o],s[o]))return!1;return!0}function Tf(t,s,o,r,f,m){return ka=m,mn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,$.H=t===null||t.memoizedState===null?dg:Yf,Tr=!1,m=o(r,f),Tr=!1,al&&(m=A_(s,o,r,f)),T_(t),m}function T_(t){$.H=sc;var s=ts!==null&&ts.next!==null;if(ka=0,fo=ts=mn=null,pu=!1,ec=0,rl=null,s)throw Error(a(300));t===null||ho||(t=t.dependencies,t!==null&&au(t)&&(ho=!0))}function A_(t,s,o,r){mn=t;var f=0;do{if(al&&(rl=null),ec=0,al=!1,25<=f)throw Error(a(301));if(f+=1,fo=ts=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}$.H=fg,m=s(o,r)}while(al);return m}function N2(){var t=$.H,s=t.useState()[0];return s=typeof s.then=="function"?tc(s):s,t=t.useState()[0],(ts!==null?ts.memoizedState:null)!==t&&(mn.flags|=1024),s}function Af(){var t=_u!==0;return _u=0,t}function Nf(t,s,o){s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~o}function Df(t){if(pu){for(t=t.memoizedState;t!==null;){var s=t.queue;s!==null&&(s.pending=null),t=t.next}pu=!1}ka=0,fo=ts=mn=null,al=!1,ec=_u=0,rl=null}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fo===null?mn.memoizedState=fo=t:fo=fo.next=t,fo}function eo(){if(ts===null){var t=mn.alternate;t=t!==null?t.memoizedState:null}else t=ts.next;var s=fo===null?mn.memoizedState:fo.next;if(s!==null)fo=s,ts=t;else{if(t===null)throw mn.alternate===null?Error(a(467)):Error(a(310));ts=t,t={memoizedState:ts.memoizedState,baseState:ts.baseState,baseQueue:ts.baseQueue,queue:ts.queue,next:null},fo===null?mn.memoizedState=fo=t:fo=fo.next=t}return fo}function gu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tc(t){var s=ec;return ec+=1,rl===null&&(rl=[]),t=b_(rl,t,s),s=mn,(fo===null?s.memoizedState:fo.next)===null&&(s=s.alternate,$.H=s===null||s.memoizedState===null?dg:Yf),t}function yu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return tc(t);if(t.$$typeof===z)return $o(t)}throw Error(a(438,String(t)))}function Rf(t){var s=null,o=mn.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=mn.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=gu(),mn.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(t),r=0;r<t;r++)o[r]=de;return s.index++,o}function ja(t,s){return typeof s=="function"?s(t):s}function xu(t){var s=eo();return Bf(s,ts,t)}function Bf(t,s,o){var r=t.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=t.baseQueue,m=r.pending;if(m!==null){if(f!==null){var S=f.next;f.next=m.next,m.next=S}s.baseQueue=f=m,r.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{s=f.next;var R=S=null,Q=null,ye=s,Oe=!1;do{var Ue=ye.lane&-536870913;if(Ue!==ye.lane?(Mn&Ue)===Ue:(ka&Ue)===Ue){var we=ye.revertLane;if(we===0)Q!==null&&(Q=Q.next={lane:0,revertLane:0,gesture:null,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null}),Ue===tl&&(Oe=!0);else if((ka&we)===we){ye=ye.next,we===tl&&(Oe=!0);continue}else Ue={lane:0,revertLane:ye.revertLane,gesture:null,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null},Q===null?(R=Q=Ue,S=m):Q=Q.next=Ue,mn.lanes|=we,Za|=we;Ue=ye.action,Tr&&o(m,Ue),m=ye.hasEagerState?ye.eagerState:o(m,Ue)}else we={lane:Ue,revertLane:ye.revertLane,gesture:ye.gesture,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null},Q===null?(R=Q=we,S=m):Q=Q.next=we,mn.lanes|=Ue,Za|=Ue;ye=ye.next}while(ye!==null&&ye!==s);if(Q===null?S=m:Q.next=R,!Ne(m,t.memoizedState)&&(ho=!0,Oe&&(o=nl,o!==null)))throw o;t.memoizedState=m,t.baseState=S,t.baseQueue=Q,r.lastRenderedState=m}return f===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Lf(t){var s=eo(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=t;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var S=f=f.next;do m=t(m,S.action),S=S.next;while(S!==f);Ne(m,s.memoizedState)||(ho=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function N_(t,s,o){var r=mn,f=eo(),m=Dn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var S=!Ne((ts||f).memoizedState,o);if(S&&(f.memoizedState=o,ho=!0),f=f.queue,$f(B_.bind(null,r,f,t),[t]),f.getSnapshot!==s||S||fo!==null&&fo.memoizedState.tag&1){if(r.flags|=2048,ll(9,{destroy:void 0},R_.bind(null,r,f,o,s),null),cs===null)throw Error(a(349));m||(ka&127)!==0||D_(r,s,o)}return o}function D_(t,s,o){t.flags|=16384,t={getSnapshot:s,value:o},s=mn.updateQueue,s===null?(s=gu(),mn.updateQueue=s,s.stores=[t]):(o=s.stores,o===null?s.stores=[t]:o.push(t))}function R_(t,s,o,r){s.value=o,s.getSnapshot=r,L_(s)&&O_(t)}function B_(t,s,o){return o(function(){L_(s)&&O_(t)})}function L_(t){var s=t.getSnapshot;t=t.value;try{var o=s();return!Ne(t,o)}catch{return!0}}function O_(t){var s=ca(t,2);s!==null&&bi(s,t,2)}function Of(t){var s=oi();if(typeof t=="function"){var o=t;if(t=o(),Tr){Le(!0);try{o()}finally{Le(!1)}}}return s.memoizedState=s.baseState=t,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:t},s}function z_(t,s,o,r){return t.baseState=o,Bf(t,ts,typeof r=="function"?r:ja)}function D2(t,s,o,r,f){if(wu(t))throw Error(a(485));if(t=s.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};$.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,$_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function $_(t,s){var o=s.action,r=s.payload,f=t.state;if(s.isTransition){var m=$.T,S={};$.T=S;try{var R=o(f,r),Q=$.S;Q!==null&&Q(S,R),P_(t,s,R)}catch(ye){zf(t,s,ye)}finally{m!==null&&S.types!==null&&(m.types=S.types),$.T=m}}else try{m=o(f,r),P_(t,s,m)}catch(ye){zf(t,s,ye)}}function P_(t,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){I_(t,s,r)},function(r){return zf(t,s,r)}):I_(t,s,o)}function I_(t,s,o){s.status="fulfilled",s.value=o,H_(s),t.state=o,s=t.pending,s!==null&&(o=s.next,o===s?t.pending=null:(o=o.next,s.next=o,$_(t,o)))}function zf(t,s,o){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,H_(s),s=s.next;while(s!==r)}t.action=null}function H_(t){t=t.listeners;for(var s=0;s<t.length;s++)(0,t[s])()}function U_(t,s){return s}function V_(t,s){if(Dn){var o=cs.formState;if(o!==null){e:{var r=mn;if(Dn){if(vs){t:{for(var f=vs,m=Vi;f.nodeType!==8;){if(!m){f=null;break t}if(f=Wi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){vs=Wi(f.nextSibling),r=f.data==="F!";break e}}Va(r)}r=!1}r&&(s=o[0])}}return o=oi(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:U_,lastRenderedState:s},o.queue=r,o=lg.bind(null,mn,r),r.dispatch=o,r=Of(!1),m=Vf.bind(null,mn,!1,r.queue),r=oi(),f={state:s,dispatch:null,action:t,pending:null},r.queue=f,o=D2.bind(null,mn,f,m,o),f.dispatch=o,r.memoizedState=t,[s,o,!1]}function Y_(t){var s=eo();return W_(s,ts,t)}function W_(t,s,o){if(s=Bf(t,s,U_)[0],t=xu(ja)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=tc(s)}catch(S){throw S===sl?cu:S}else r=s;s=eo();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(mn.flags|=2048,ll(9,{destroy:void 0},R2.bind(null,f,o),null)),[r,m,t]}function R2(t,s){t.action=s}function F_(t){var s=eo(),o=ts;if(o!==null)return W_(s,o,t);eo(),s=s.memoizedState,o=eo();var r=o.queue.dispatch;return o.memoizedState=t,[s,r,!1]}function ll(t,s,o,r){return t={tag:t,create:o,deps:r,inst:s,next:null},s=mn.updateQueue,s===null&&(s=gu(),mn.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=t.next=t:(r=o.next,o.next=t,t.next=r,s.lastEffect=t),t}function X_(){return eo().memoizedState}function bu(t,s,o,r){var f=oi();mn.flags|=t,f.memoizedState=ll(1|s,{destroy:void 0},o,r===void 0?null:r)}function vu(t,s,o,r){var f=eo();r=r===void 0?null:r;var m=f.memoizedState.inst;ts!==null&&r!==null&&Ef(r,ts.memoizedState.deps)?f.memoizedState=ll(s,m,o,r):(mn.flags|=t,f.memoizedState=ll(1|s,m,o,r))}function G_(t,s){bu(8390656,8,t,s)}function $f(t,s){vu(2048,8,t,s)}function B2(t){mn.flags|=4;var s=mn.updateQueue;if(s===null)s=gu(),mn.updateQueue=s,s.events=[t];else{var o=s.events;o===null?s.events=[t]:o.push(t)}}function q_(t){var s=eo().memoizedState;return B2({ref:s,nextImpl:t}),function(){if((In&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function K_(t,s){return vu(4,2,t,s)}function Q_(t,s){return vu(4,4,t,s)}function Z_(t,s){if(typeof s=="function"){t=t();var o=s(t);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return t=t(),s.current=t,function(){s.current=null}}function J_(t,s,o){o=o!=null?o.concat([t]):null,vu(4,4,Z_.bind(null,s,t),o)}function Pf(){}function eg(t,s){var o=eo();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&Ef(s,r[1])?r[0]:(o.memoizedState=[t,s],t)}function tg(t,s){var o=eo();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&Ef(s,r[1]))return r[0];if(r=t(),Tr){Le(!0);try{t()}finally{Le(!1)}}return o.memoizedState=[r,s],r}function If(t,s,o){return o===void 0||(ka&1073741824)!==0&&(Mn&261930)===0?t.memoizedState=s:(t.memoizedState=o,t=n0(),mn.lanes|=t,Za|=t,o)}function ng(t,s,o,r){return Ne(o,s)?o:il.current!==null?(t=If(t,o,r),Ne(t,s)||(ho=!0),t):(ka&42)===0||(ka&1073741824)!==0&&(Mn&261930)===0?(ho=!0,t.memoizedState=o):(t=n0(),mn.lanes|=t,Za|=t,s)}function sg(t,s,o,r,f){var m=ne.p;ne.p=m!==0&&8>m?m:8;var S=$.T,R={};$.T=R,Vf(t,!1,s,o);try{var Q=f(),ye=$.S;if(ye!==null&&ye(R,Q),Q!==null&&typeof Q=="object"&&typeof Q.then=="function"){var Oe=T2(Q,r);nc(t,s,Oe,Di(t))}else nc(t,s,r,Di(t))}catch(Ue){nc(t,s,{then:function(){},status:"rejected",reason:Ue},Di())}finally{ne.p=m,S!==null&&R.types!==null&&(S.types=R.types),$.T=S}}function L2(){}function Hf(t,s,o,r){if(t.tag!==5)throw Error(a(476));var f=og(t).queue;sg(t,f,s,Y,o===null?L2:function(){return ig(t),o(r)})}function og(t){var s=t.memoizedState;if(s!==null)return s;s={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:Y},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:o},next:null},t.memoizedState=s,t=t.alternate,t!==null&&(t.memoizedState=s),s}function ig(t){var s=og(t);s.next===null&&(s=t.alternate.memoizedState),nc(t,s.next.queue,{},Di())}function Uf(){return $o(xc)}function ag(){return eo().memoizedState}function rg(){return eo().memoizedState}function O2(t){for(var s=t.return;s!==null;){switch(s.tag){case 24:case 3:var o=Di();t=Fa(o);var r=Xa(s,t,o);r!==null&&(bi(r,s,o),Ql(r,s,o)),s={cache:gf()},t.payload=s;return}s=s.return}}function z2(t,s,o){var r=Di();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},wu(t)?cg(s,o):(o=Kr(t,s,o,r),o!==null&&(bi(o,t,r),ug(o,s,r)))}function lg(t,s,o){var r=Di();nc(t,s,o,r)}function nc(t,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(wu(t))cg(s,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var S=s.lastRenderedState,R=m(S,o);if(f.hasEagerState=!0,f.eagerState=R,Ne(R,S))return br(t,s,f,0),cs===null&&xr(),!1}catch{}finally{}if(o=Kr(t,s,f,r),o!==null)return bi(o,t,r),ug(o,s,r),!0}return!1}function Vf(t,s,o,r){if(r={lane:2,revertLane:vh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},wu(t)){if(s)throw Error(a(479))}else s=Kr(t,o,r,2),s!==null&&bi(s,t,2)}function wu(t){var s=t.alternate;return t===mn||s!==null&&s===mn}function cg(t,s){al=pu=!0;var o=t.pending;o===null?s.next=s:(s.next=o.next,o.next=s),t.pending=s}function ug(t,s,o){if((o&4194048)!==0){var r=s.lanes;r&=t.pendingLanes,o|=r,s.lanes=o,Tt(t,o)}}var sc={readContext:$o,use:yu,useCallback:Is,useContext:Is,useEffect:Is,useImperativeHandle:Is,useLayoutEffect:Is,useInsertionEffect:Is,useMemo:Is,useReducer:Is,useRef:Is,useState:Is,useDebugValue:Is,useDeferredValue:Is,useTransition:Is,useSyncExternalStore:Is,useId:Is,useHostTransitionStatus:Is,useFormState:Is,useActionState:Is,useOptimistic:Is,useMemoCache:Is,useCacheRefresh:Is};sc.useEffectEvent=Is;var dg={readContext:$o,use:yu,useCallback:function(t,s){return oi().memoizedState=[t,s===void 0?null:s],t},useContext:$o,useEffect:G_,useImperativeHandle:function(t,s,o){o=o!=null?o.concat([t]):null,bu(4194308,4,Z_.bind(null,s,t),o)},useLayoutEffect:function(t,s){return bu(4194308,4,t,s)},useInsertionEffect:function(t,s){bu(4,2,t,s)},useMemo:function(t,s){var o=oi();s=s===void 0?null:s;var r=t();if(Tr){Le(!0);try{t()}finally{Le(!1)}}return o.memoizedState=[r,s],r},useReducer:function(t,s,o){var r=oi();if(o!==void 0){var f=o(s);if(Tr){Le(!0);try{o(s)}finally{Le(!1)}}}else f=s;return r.memoizedState=r.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},r.queue=t,t=t.dispatch=z2.bind(null,mn,t),[r.memoizedState,t]},useRef:function(t){var s=oi();return t={current:t},s.memoizedState=t},useState:function(t){t=Of(t);var s=t.queue,o=lg.bind(null,mn,s);return s.dispatch=o,[t.memoizedState,o]},useDebugValue:Pf,useDeferredValue:function(t,s){var o=oi();return If(o,t,s)},useTransition:function(){var t=Of(!1);return t=sg.bind(null,mn,t.queue,!0,!1),oi().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,s,o){var r=mn,f=oi();if(Dn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),cs===null)throw Error(a(349));(Mn&127)!==0||D_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,G_(B_.bind(null,r,m,t),[t]),r.flags|=2048,ll(9,{destroy:void 0},R_.bind(null,r,m,o,s),null),o},useId:function(){var t=oi(),s=cs.identifierPrefix;if(Dn){var o=da,r=ua;o=(r&~(1<<32-_e(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=_u++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=A2++,s="_"+s+"r_"+o.toString(32)+"_";return t.memoizedState=s},useHostTransitionStatus:Uf,useFormState:V_,useActionState:V_,useOptimistic:function(t){var s=oi();s.memoizedState=s.baseState=t;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Vf.bind(null,mn,!0,o),o.dispatch=s,[t,s]},useMemoCache:Rf,useCacheRefresh:function(){return oi().memoizedState=O2.bind(null,mn)},useEffectEvent:function(t){var s=oi(),o={impl:t};return s.memoizedState=o,function(){if((In&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Yf={readContext:$o,use:yu,useCallback:eg,useContext:$o,useEffect:$f,useImperativeHandle:J_,useInsertionEffect:K_,useLayoutEffect:Q_,useMemo:tg,useReducer:xu,useRef:X_,useState:function(){return xu(ja)},useDebugValue:Pf,useDeferredValue:function(t,s){var o=eo();return ng(o,ts.memoizedState,t,s)},useTransition:function(){var t=xu(ja)[0],s=eo().memoizedState;return[typeof t=="boolean"?t:tc(t),s]},useSyncExternalStore:N_,useId:ag,useHostTransitionStatus:Uf,useFormState:Y_,useActionState:Y_,useOptimistic:function(t,s){var o=eo();return z_(o,ts,t,s)},useMemoCache:Rf,useCacheRefresh:rg};Yf.useEffectEvent=q_;var fg={readContext:$o,use:yu,useCallback:eg,useContext:$o,useEffect:$f,useImperativeHandle:J_,useInsertionEffect:K_,useLayoutEffect:Q_,useMemo:tg,useReducer:Lf,useRef:X_,useState:function(){return Lf(ja)},useDebugValue:Pf,useDeferredValue:function(t,s){var o=eo();return ts===null?If(o,t,s):ng(o,ts.memoizedState,t,s)},useTransition:function(){var t=Lf(ja)[0],s=eo().memoizedState;return[typeof t=="boolean"?t:tc(t),s]},useSyncExternalStore:N_,useId:ag,useHostTransitionStatus:Uf,useFormState:F_,useActionState:F_,useOptimistic:function(t,s){var o=eo();return ts!==null?z_(o,ts,t,s):(o.baseState=t,[t,o.queue.dispatch])},useMemoCache:Rf,useCacheRefresh:rg};fg.useEffectEvent=q_;function Wf(t,s,o,r){s=t.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ff={enqueueSetState:function(t,s,o){t=t._reactInternals;var r=Di(),f=Fa(r);f.payload=s,o!=null&&(f.callback=o),s=Xa(t,f,r),s!==null&&(bi(s,t,r),Ql(s,t,r))},enqueueReplaceState:function(t,s,o){t=t._reactInternals;var r=Di(),f=Fa(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Xa(t,f,r),s!==null&&(bi(s,t,r),Ql(s,t,r))},enqueueForceUpdate:function(t,s){t=t._reactInternals;var o=Di(),r=Fa(o);r.tag=2,s!=null&&(r.callback=s),s=Xa(t,r,o),s!==null&&(bi(s,t,o),Ql(s,t,o))}};function hg(t,s,o,r,f,m,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,m,S):s.prototype&&s.prototype.isPureReactComponent?!me(o,r)||!me(f,m):!0}function mg(t,s,o,r){t=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==t&&Ff.enqueueReplaceState(s,s.state,null)}function Ar(t,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(t=t.defaultProps){o===s&&(o=x({},o));for(var f in t)o[f]===void 0&&(o[f]=t[f])}return o}function pg(t){yr(t)}function _g(t){console.error(t)}function gg(t){yr(t)}function Su(t,s){try{var o=t.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function yg(t,s,o){try{var r=t.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Xf(t,s,o){return o=Fa(o),o.tag=3,o.payload={element:null},o.callback=function(){Su(t,s)},o}function xg(t){return t=Fa(t),t.tag=3,t}function bg(t,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;t.payload=function(){return f(m)},t.callback=function(){yg(s,o,r)}}var S=o.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){yg(s,o,r),typeof f!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function $2(t,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&el(s,o,f,!0),o=Ei.current,o!==null){switch(o.tag){case 31:case 13:return Yi===null?Lu():o.alternate===null&&Hs===0&&(Hs=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===uu?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),yh(t,r,f)),!1;case 22:return o.flags|=65536,r===uu?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),yh(t,r,f)),!1}throw Error(a(435,o.tag))}return yh(t,r,f),Lu(),!1}if(Dn)return s=Ei.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==ff&&(t=Error(a(422),{cause:r}),Fl(Ii(t,o)))):(r!==ff&&(s=Error(a(423),{cause:r}),Fl(Ii(s,o))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,r=Ii(r,o),f=Xf(t.stateNode,r,f),Sf(t,f),Hs!==4&&(Hs=2)),!1;var m=Error(a(520),{cause:r});if(m=Ii(m,o),dc===null?dc=[m]:dc.push(m),Hs!==4&&(Hs=2),s===null)return!0;r=Ii(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,t=f&-f,o.lanes|=t,t=Xf(o.stateNode,r,t),Sf(o,t),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ja===null||!Ja.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=xg(f),bg(f,t,o,r),Sf(o,f),!1}o=o.return}while(o!==null);return!1}var Gf=Error(a(461)),ho=!1;function Po(t,s,o,r){s.child=t===null?C_(s,null,o,r):Er(s,t.child,o,r)}function vg(t,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var S={};for(var R in r)R!=="ref"&&(S[R]=r[R])}else S=r;return Cr(s),r=Tf(t,s,o,S,m,f),R=Af(),t!==null&&!ho?(Nf(t,s,f),Ma(t,s,f)):(Dn&&R&&uf(s),s.flags|=1,Po(t,s,r,f),s.child)}function wg(t,s,o,r,f){if(t===null){var m=o.type;return typeof m=="function"&&!Kn(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,Sg(t,s,m,r,f)):(t=va(o.type,null,r,s,s.mode,f),t.ref=s.ref,t.return=s,s.child=t)}if(m=t.child,!nh(t,f)){var S=m.memoizedProps;if(o=o.compare,o=o!==null?o:me,o(S,r)&&t.ref===s.ref)return Ma(t,s,f)}return s.flags|=1,t=js(m,r),t.ref=s.ref,t.return=s,s.child=t}function Sg(t,s,o,r,f){if(t!==null){var m=t.memoizedProps;if(me(m,r)&&t.ref===s.ref)if(ho=!1,s.pendingProps=r=m,nh(t,f))(t.flags&131072)!==0&&(ho=!0);else return s.lanes=t.lanes,Ma(t,s,f)}return qf(t,s,o,r,f)}function Cg(t,s,o,r){var f=r.children,m=t!==null?t.memoizedState:null;if(t===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,t!==null){for(r=s.child=t.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return kg(t,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},t!==null&&lu(s,m!==null?m.cachePool:null),m!==null?M_(s,m):kf(),E_(s);else return r=s.lanes=536870912,kg(t,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(lu(s,m.cachePool),M_(s,m),qa(),s.memoizedState=null):(t!==null&&lu(s,null),kf(),qa());return Po(t,s,f,o),s.child}function oc(t,s){return t!==null&&t.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function kg(t,s,o,r,f){var m=xf();return m=m===null?null:{parent:uo._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},t!==null&&lu(s,null),kf(),E_(s),t!==null&&el(t,s,r,!0),s.childLanes=f,null}function Cu(t,s){return s=ju({mode:s.mode,children:s.children},t.mode),s.ref=t.ref,t.child=s,s.return=t,s}function jg(t,s,o){return Er(s,t.child,null,o),t=Cu(s,s.pendingProps),t.flags|=2,Ti(s),s.memoizedState=null,t}function P2(t,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,t===null){if(Dn){if(r.mode==="hidden")return t=Cu(s,r),s.lanes=536870912,oc(null,t);if(Mf(s),(t=vs)?(t=$0(t,Vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(s.memoizedState={dehydrated:t,treeContext:Ha!==null?{id:ua,overflow:da}:null,retryLane:536870912,hydrationErrors:null},o=c_(t),o.return=s,s.child=o,zo=s,vs=null)):t=null,t===null)throw Va(s);return s.lanes=536870912,null}return Cu(s,r)}var m=t.memoizedState;if(m!==null){var S=m.dehydrated;if(Mf(s),f)if(s.flags&256)s.flags&=-257,s=jg(t,s,o);else if(s.memoizedState!==null)s.child=t.child,s.flags|=128,s=null;else throw Error(a(558));else if(ho||el(t,s,o,!1),f=(o&t.childLanes)!==0,ho||f){if(r=cs,r!==null&&(S=bt(r,o),S!==0&&S!==m.retryLane))throw m.retryLane=S,ca(t,S),bi(r,t,S),Gf;Lu(),s=jg(t,s,o)}else t=m.treeContext,vs=Wi(S.nextSibling),zo=s,Dn=!0,Ua=null,Vi=!1,t!==null&&f_(s,t),s=Cu(s,r),s.flags|=4096;return s}return t=js(t.child,{mode:r.mode,children:r.children}),t.ref=s.ref,s.child=t,t.return=s,t}function ku(t,s){var o=s.ref;if(o===null)t!==null&&t.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(t===null||t.ref!==o)&&(s.flags|=4194816)}}function qf(t,s,o,r,f){return Cr(s),o=Tf(t,s,o,r,void 0,f),r=Af(),t!==null&&!ho?(Nf(t,s,f),Ma(t,s,f)):(Dn&&r&&uf(s),s.flags|=1,Po(t,s,o,f),s.child)}function Mg(t,s,o,r,f,m){return Cr(s),s.updateQueue=null,o=A_(s,r,o,f),T_(t),r=Af(),t!==null&&!ho?(Nf(t,s,m),Ma(t,s,m)):(Dn&&r&&uf(s),s.flags|=1,Po(t,s,o,m),s.child)}function Eg(t,s,o,r,f){if(Cr(s),s.stateNode===null){var m=ba,S=o.contextType;typeof S=="object"&&S!==null&&(m=$o(S)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ff,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},vf(s),S=o.contextType,m.context=typeof S=="object"&&S!==null?$o(S):ba,m.state=s.memoizedState,S=o.getDerivedStateFromProps,typeof S=="function"&&(Wf(s,o,S,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&Ff.enqueueReplaceState(m,m.state,null),Jl(s,r,m,f),Zl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(t===null){m=s.stateNode;var R=s.memoizedProps,Q=Ar(o,R);m.props=Q;var ye=m.context,Oe=o.contextType;S=ba,typeof Oe=="object"&&Oe!==null&&(S=$o(Oe));var Ue=o.getDerivedStateFromProps;Oe=typeof Ue=="function"||typeof m.getSnapshotBeforeUpdate=="function",R=s.pendingProps!==R,Oe||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(R||ye!==S)&&mg(s,m,r,S),Wa=!1;var we=s.memoizedState;m.state=we,Jl(s,r,m,f),Zl(),ye=s.memoizedState,R||we!==ye||Wa?(typeof Ue=="function"&&(Wf(s,o,Ue,r),ye=s.memoizedState),(Q=Wa||hg(s,o,Q,r,we,ye,S))?(Oe||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=ye),m.props=r,m.state=ye,m.context=S,r=Q):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,wf(t,s),S=s.memoizedProps,Oe=Ar(o,S),m.props=Oe,Ue=s.pendingProps,we=m.context,ye=o.contextType,Q=ba,typeof ye=="object"&&ye!==null&&(Q=$o(ye)),R=o.getDerivedStateFromProps,(ye=typeof R=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==Ue||we!==Q)&&mg(s,m,r,Q),Wa=!1,we=s.memoizedState,m.state=we,Jl(s,r,m,f),Zl();var ke=s.memoizedState;S!==Ue||we!==ke||Wa||t!==null&&t.dependencies!==null&&au(t.dependencies)?(typeof R=="function"&&(Wf(s,o,R,r),ke=s.memoizedState),(Oe=Wa||hg(s,o,Oe,r,we,ke,Q)||t!==null&&t.dependencies!==null&&au(t.dependencies))?(ye||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,ke,Q),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,ke,Q)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===t.memoizedProps&&we===t.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&we===t.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=ke),m.props=r,m.state=ke,m.context=Q,r=Oe):(typeof m.componentDidUpdate!="function"||S===t.memoizedProps&&we===t.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&we===t.memoizedState||(s.flags|=1024),r=!1)}return m=r,ku(t,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,t!==null&&r?(s.child=Er(s,t.child,null,f),s.child=Er(s,null,o,f)):Po(t,s,o,f),s.memoizedState=m.state,t=s.child):t=Ma(t,s,f),t}function Tg(t,s,o,r){return wr(),s.flags|=256,Po(t,s,o,r),s.child}var Kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qf(t){return{baseLanes:t,cachePool:y_()}}function Zf(t,s,o){return t=t!==null?t.childLanes&~o:0,s&&(t|=Ni),t}function Ag(t,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,S;if((S=m)||(S=t!==null&&t.memoizedState===null?!1:(Js.current&2)!==0),S&&(f=!0,s.flags&=-129),S=(s.flags&32)!==0,s.flags&=-33,t===null){if(Dn){if(f?Ga(s):qa(),(t=vs)?(t=$0(t,Vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(s.memoizedState={dehydrated:t,treeContext:Ha!==null?{id:ua,overflow:da}:null,retryLane:536870912,hydrationErrors:null},o=c_(t),o.return=s,s.child=o,zo=s,vs=null)):t=null,t===null)throw Va(s);return Bh(t)?s.lanes=32:s.lanes=536870912,null}var R=r.children;return r=r.fallback,f?(qa(),f=s.mode,R=ju({mode:"hidden",children:R},f),r=Zs(r,f,o,null),R.return=s,r.return=s,R.sibling=r,s.child=R,r=s.child,r.memoizedState=Qf(o),r.childLanes=Zf(t,S,o),s.memoizedState=Kf,oc(null,r)):(Ga(s),Jf(s,R))}var Q=t.memoizedState;if(Q!==null&&(R=Q.dehydrated,R!==null)){if(m)s.flags&256?(Ga(s),s.flags&=-257,s=eh(t,s,o)):s.memoizedState!==null?(qa(),s.child=t.child,s.flags|=128,s=null):(qa(),R=r.fallback,f=s.mode,r=ju({mode:"visible",children:r.children},f),R=Zs(R,f,o,null),R.flags|=2,r.return=s,R.return=s,r.sibling=R,s.child=r,Er(s,t.child,null,o),r=s.child,r.memoizedState=Qf(o),r.childLanes=Zf(t,S,o),s.memoizedState=Kf,s=oc(null,r));else if(Ga(s),Bh(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var ye=S.dgst;S=ye,r=Error(a(419)),r.stack="",r.digest=S,Fl({value:r,source:null,stack:null}),s=eh(t,s,o)}else if(ho||el(t,s,o,!1),S=(o&t.childLanes)!==0,ho||S){if(S=cs,S!==null&&(r=bt(S,o),r!==0&&r!==Q.retryLane))throw Q.retryLane=r,ca(t,r),bi(S,t,r),Gf;Rh(R)||Lu(),s=eh(t,s,o)}else Rh(R)?(s.flags|=192,s.child=t.child,s=null):(t=Q.treeContext,vs=Wi(R.nextSibling),zo=s,Dn=!0,Ua=null,Vi=!1,t!==null&&f_(s,t),s=Jf(s,r.children),s.flags|=4096);return s}return f?(qa(),R=r.fallback,f=s.mode,Q=t.child,ye=Q.sibling,r=js(Q,{mode:"hidden",children:r.children}),r.subtreeFlags=Q.subtreeFlags&65011712,ye!==null?R=js(ye,R):(R=Zs(R,f,o,null),R.flags|=2),R.return=s,r.return=s,r.sibling=R,s.child=r,oc(null,r),r=s.child,R=t.child.memoizedState,R===null?R=Qf(o):(f=R.cachePool,f!==null?(Q=uo._currentValue,f=f.parent!==Q?{parent:Q,pool:Q}:f):f=y_(),R={baseLanes:R.baseLanes|o,cachePool:f}),r.memoizedState=R,r.childLanes=Zf(t,S,o),s.memoizedState=Kf,oc(t.child,r)):(Ga(s),o=t.child,t=o.sibling,o=js(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,t!==null&&(S=s.deletions,S===null?(s.deletions=[t],s.flags|=16):S.push(t)),s.child=o,s.memoizedState=null,o)}function Jf(t,s){return s=ju({mode:"visible",children:s},t.mode),s.return=t,t.child=s}function ju(t,s){return t=Gt(22,t,null,s),t.lanes=0,t}function eh(t,s,o){return Er(s,t.child,null,o),t=Jf(s,s.pendingProps.children),t.flags|=2,s.memoizedState=null,t}function Ng(t,s,o){t.lanes|=s;var r=t.alternate;r!==null&&(r.lanes|=s),pf(t.return,s,o)}function th(t,s,o,r,f,m){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(S.isBackwards=s,S.rendering=null,S.renderingStartTime=0,S.last=r,S.tail=o,S.tailMode=f,S.treeForkCount=m)}function Dg(t,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var S=Js.current,R=(S&2)!==0;if(R?(S=S&1|2,s.flags|=128):S&=1,te(Js,S),Po(t,s,r,o),r=Dn?Wl:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=s.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ng(t,o,s);else if(t.tag===19)Ng(t,o,s);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break e;for(;t.sibling===null;){if(t.return===null||t.return===s)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)t=o.alternate,t!==null&&mu(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),th(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(t=f.alternate,t!==null&&mu(t)===null){s.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}th(s,!0,o,null,m,r);break;case"together":th(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function Ma(t,s,o){if(t!==null&&(s.dependencies=t.dependencies),Za|=s.lanes,(o&s.childLanes)===0)if(t!==null){if(el(t,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(t!==null&&s.child!==t.child)throw Error(a(153));if(s.child!==null){for(t=s.child,o=js(t,t.pendingProps),s.child=o,o.return=s;t.sibling!==null;)t=t.sibling,o=o.sibling=js(t,t.pendingProps),o.return=s;o.sibling=null}return s.child}function nh(t,s){return(t.lanes&s)!==0?!0:(t=t.dependencies,!!(t!==null&&au(t)))}function I2(t,s,o){switch(s.tag){case 3:Qe(s,s.stateNode.containerInfo),Ya(s,uo,t.memoizedState.cache),wr();break;case 27:case 5:ht(s);break;case 4:Qe(s,s.stateNode.containerInfo);break;case 10:Ya(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,Mf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(Ga(s),s.flags|=128,null):(o&s.child.childLanes)!==0?Ag(t,s,o):(Ga(s),t=Ma(t,s,o),t!==null?t.sibling:null);Ga(s);break;case 19:var f=(t.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(el(t,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return Dg(t,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),te(Js,Js.current),r)break;return null;case 22:return s.lanes=0,Cg(t,s,o,s.pendingProps);case 24:Ya(s,uo,t.memoizedState.cache)}return Ma(t,s,o)}function Rg(t,s,o){if(t!==null)if(t.memoizedProps!==s.pendingProps)ho=!0;else{if(!nh(t,o)&&(s.flags&128)===0)return ho=!1,I2(t,s,o);ho=(t.flags&131072)!==0}else ho=!1,Dn&&(s.flags&1048576)!==0&&d_(s,Wl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(t=jr(s.elementType),s.type=t,typeof t=="function")Kn(t)?(r=Ar(t,r),s.tag=1,s=Eg(null,s,t,r,o)):(s.tag=0,s=qf(null,s,t,r,o));else{if(t!=null){var f=t.$$typeof;if(f===N){s.tag=11,s=vg(null,s,t,r,o);break e}else if(f===W){s.tag=14,s=wg(null,s,t,r,o);break e}}throw s=ie(t)||t,Error(a(306,s,""))}}return s;case 0:return qf(t,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=Ar(r,s.pendingProps),Eg(t,s,r,f,o);case 3:e:{if(Qe(s,s.stateNode.containerInfo),t===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,wf(t,s),Jl(s,r,null,o);var S=s.memoizedState;if(r=S.cache,Ya(s,uo,r),r!==m.cache&&_f(s,[uo],o,!0),Zl(),r=S.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:S.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=Tg(t,s,r,o);break e}else if(r!==f){f=Ii(Error(a(424)),s),Fl(f),s=Tg(t,s,r,o);break e}else{switch(t=s.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(vs=Wi(t.firstChild),zo=s,Dn=!0,Ua=null,Vi=!0,o=C_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(wr(),r===f){s=Ma(t,s,o);break e}Po(t,s,r,o)}s=s.child}return s;case 26:return ku(t,s),t===null?(o=Y0(s.type,null,s.pendingProps,null))?s.memoizedState=o:Dn||(o=s.type,t=s.pendingProps,r=Uu(he.current).createElement(o),r[Nt]=s,r[bn]=t,Io(r,o,t),nn(r),s.stateNode=r):s.memoizedState=Y0(s.type,t.memoizedProps,s.pendingProps,t.memoizedState),null;case 27:return ht(s),t===null&&Dn&&(r=s.stateNode=H0(s.type,s.pendingProps,he.current),zo=s,Vi=!0,f=vs,sr(s.type)?(Lh=f,vs=Wi(r.firstChild)):vs=f),Po(t,s,s.pendingProps.children,o),ku(t,s),t===null&&(s.flags|=4194304),s.child;case 5:return t===null&&Dn&&((f=r=vs)&&(r=_v(r,s.type,s.pendingProps,Vi),r!==null?(s.stateNode=r,zo=s,vs=Wi(r.firstChild),Vi=!1,f=!0):f=!1),f||Va(s)),ht(s),f=s.type,m=s.pendingProps,S=t!==null?t.memoizedProps:null,r=m.children,Ah(f,m)?r=null:S!==null&&Ah(f,S)&&(s.flags|=32),s.memoizedState!==null&&(f=Tf(t,s,N2,null,null,o),xc._currentValue=f),ku(t,s),Po(t,s,r,o),s.child;case 6:return t===null&&Dn&&((t=o=vs)&&(o=gv(o,s.pendingProps,Vi),o!==null?(s.stateNode=o,zo=s,vs=null,t=!0):t=!1),t||Va(s)),null;case 13:return Ag(t,s,o);case 4:return Qe(s,s.stateNode.containerInfo),r=s.pendingProps,t===null?s.child=Er(s,null,r,o):Po(t,s,r,o),s.child;case 11:return vg(t,s,s.type,s.pendingProps,o);case 7:return Po(t,s,s.pendingProps,o),s.child;case 8:return Po(t,s,s.pendingProps.children,o),s.child;case 12:return Po(t,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,Ya(s,s.type,r.value),Po(t,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,Cr(s),f=$o(f),r=r(f),s.flags|=1,Po(t,s,r,o),s.child;case 14:return wg(t,s,s.type,s.pendingProps,o);case 15:return Sg(t,s,s.type,s.pendingProps,o);case 19:return Dg(t,s,o);case 31:return P2(t,s,o);case 22:return Cg(t,s,o,s.pendingProps);case 24:return Cr(s),r=$o(uo),t===null?(f=xf(),f===null&&(f=cs,m=gf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},vf(s),Ya(s,uo,f)):((t.lanes&o)!==0&&(wf(t,s),Jl(s,null,null,o),Zl()),f=t.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Ya(s,uo,r)):(r=m.cache,Ya(s,uo,r),r!==f.cache&&_f(s,[uo],o,!0))),Po(t,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function Ea(t){t.flags|=4}function sh(t,s,o,r,f){if((s=(t.mode&32)!==0)&&(s=!1),s){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(a0())t.flags|=8192;else throw Mr=uu,bf}else t.flags&=-16777217}function Bg(t,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!q0(s))if(a0())t.flags|=8192;else throw Mr=uu,bf}function Mu(t,s){s!==null&&(t.flags|=4),t.flags&16384&&(s=t.tag!==22?ft():536870912,t.lanes|=s,fl|=s)}function ic(t,s){if(!Dn)switch(t.tailMode){case"hidden":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ws(t){var s=t.alternate!==null&&t.alternate.child===t.child,o=0,r=0;if(s)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=r,t.childLanes=o,s}function H2(t,s,o){var r=s.pendingProps;switch(df(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ws(s),null;case 1:return ws(s),null;case 3:return o=s.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),Ca(uo),We(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(Jr(s)?Ea(s):t===null||t.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,hf())),ws(s),null;case 26:var f=s.type,m=s.memoizedState;return t===null?(Ea(s),m!==null?(ws(s),Bg(s,m)):(ws(s),sh(s,f,null,r,o))):m?m!==t.memoizedState?(Ea(s),ws(s),Bg(s,m)):(ws(s),s.flags&=-16777217):(t=t.memoizedProps,t!==r&&Ea(s),ws(s),sh(s,f,t,r,o)),null;case 27:if(jt(s),o=he.current,f=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==r&&Ea(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return ws(s),null}t=be.current,Jr(s)?h_(s):(t=H0(f,r,o),s.stateNode=t,Ea(s))}return ws(s),null;case 5:if(jt(s),f=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==r&&Ea(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return ws(s),null}if(m=be.current,Jr(s))h_(s);else{var S=Uu(he.current);switch(m){case 1:m=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=S.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?S.createElement("select",{is:r.is}):S.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?S.createElement(f,{is:r.is}):S.createElement(f)}}m[Nt]=s,m[bn]=r;e:for(S=s.child;S!==null;){if(S.tag===5||S.tag===6)m.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===s)break e;for(;S.sibling===null;){if(S.return===null||S.return===s)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}s.stateNode=m;e:switch(Io(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ea(s)}}return ws(s),sh(s,s.type,t===null?null:t.memoizedProps,s.pendingProps,o),null;case 6:if(t&&s.stateNode!=null)t.memoizedProps!==r&&Ea(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(t=he.current,Jr(s)){if(t=s.stateNode,o=s.memoizedProps,r=null,f=zo,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}t[Nt]=s,t=!!(t.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||A0(t.nodeValue,o)),t||Va(s,!0)}else t=Uu(t).createTextNode(r),t[Nt]=s,s.stateNode=t}return ws(s),null;case 31:if(o=s.memoizedState,t===null||t.memoizedState!==null){if(r=Jr(s),o!==null){if(t===null){if(!r)throw Error(a(318));if(t=s.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[Nt]=s}else wr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ws(s),t=!1}else o=hf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=o),t=!0;if(!t)return s.flags&256?(Ti(s),s):(Ti(s),null);if((s.flags&128)!==0)throw Error(a(558))}return ws(s),null;case 13:if(r=s.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Jr(s),r!==null&&r.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[Nt]=s}else wr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ws(s),f=!1}else f=hf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Ti(s),s):(Ti(s),null)}return Ti(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,t=t!==null&&t.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==t&&o&&(s.child.flags|=8192),Mu(s,s.updateQueue),ws(s),null);case 4:return We(),t===null&&kh(s.stateNode.containerInfo),ws(s),null;case 10:return Ca(s.type),ws(s),null;case 19:if(re(Js),r=s.memoizedState,r===null)return ws(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)ic(r,!1);else{if(Hs!==0||t!==null&&(t.flags&128)!==0)for(t=s.child;t!==null;){if(m=mu(t),m!==null){for(s.flags|=128,ic(r,!1),t=m.updateQueue,s.updateQueue=t,Mu(s,t),s.subtreeFlags=0,t=o,o=s.child;o!==null;)Pi(o,t),o=o.sibling;return te(Js,Js.current&1|2),Dn&&wa(s,r.treeForkCount),s.child}t=t.sibling}r.tail!==null&&pt()>Du&&(s.flags|=128,f=!0,ic(r,!1),s.lanes=4194304)}else{if(!f)if(t=mu(m),t!==null){if(s.flags|=128,f=!0,t=t.updateQueue,s.updateQueue=t,Mu(s,t),ic(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!Dn)return ws(s),null}else 2*pt()-r.renderingStartTime>Du&&o!==536870912&&(s.flags|=128,f=!0,ic(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(t=r.last,t!==null?t.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=pt(),t.sibling=null,o=Js.current,te(Js,f?o&1|2:o&1),Dn&&wa(s,r.treeForkCount),t):(ws(s),null);case 22:case 23:return Ti(s),jf(),r=s.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(ws(s),s.subtreeFlags&6&&(s.flags|=8192)):ws(s),o=s.updateQueue,o!==null&&Mu(s,o.retryQueue),o=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),t!==null&&re(kr),null;case 24:return o=null,t!==null&&(o=t.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Ca(uo),ws(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function U2(t,s){switch(df(s),s.tag){case 1:return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 3:return Ca(uo),We(),t=s.flags,(t&65536)!==0&&(t&128)===0?(s.flags=t&-65537|128,s):null;case 26:case 27:case 5:return jt(s),null;case 31:if(s.memoizedState!==null){if(Ti(s),s.alternate===null)throw Error(a(340));wr()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 13:if(Ti(s),t=s.memoizedState,t!==null&&t.dehydrated!==null){if(s.alternate===null)throw Error(a(340));wr()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 19:return re(Js),null;case 4:return We(),null;case 10:return Ca(s.type),null;case 22:case 23:return Ti(s),jf(),t!==null&&re(kr),t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 24:return Ca(uo),null;case 25:return null;default:return null}}function Lg(t,s){switch(df(s),s.tag){case 3:Ca(uo),We();break;case 26:case 27:case 5:jt(s);break;case 4:We();break;case 31:s.memoizedState!==null&&Ti(s);break;case 13:Ti(s);break;case 19:re(Js);break;case 10:Ca(s.type);break;case 22:case 23:Ti(s),jf(),t!==null&&re(kr);break;case 24:Ca(uo)}}function ac(t,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&t)===t){r=void 0;var m=o.create,S=o.inst;r=m(),S.destroy=r}o=o.next}while(o!==f)}}catch(R){Zn(s,s.return,R)}}function Ka(t,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&t)===t){var S=r.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,f=s;var Q=o,ye=R;try{ye()}catch(Oe){Zn(f,Q,Oe)}}}r=r.next}while(r!==m)}}catch(Oe){Zn(s,s.return,Oe)}}function Og(t){var s=t.updateQueue;if(s!==null){var o=t.stateNode;try{j_(s,o)}catch(r){Zn(t,t.return,r)}}}function zg(t,s,o){o.props=Ar(t.type,t.memoizedProps),o.state=t.memoizedState;try{o.componentWillUnmount()}catch(r){Zn(t,s,r)}}function rc(t,s){try{var o=t.ref;if(o!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof o=="function"?t.refCleanup=o(r):o.current=r}}catch(f){Zn(t,s,f)}}function fa(t,s){var o=t.ref,r=t.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Zn(t,s,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Zn(t,s,f)}else o.current=null}function $g(t){var s=t.type,o=t.memoizedProps,r=t.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Zn(t,t.return,f)}}function oh(t,s,o){try{var r=t.stateNode;uv(r,t.type,o,s),r[bn]=s}catch(f){Zn(t,t.return,f)}}function Pg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&sr(t.type)||t.tag===4}function ih(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&sr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ah(t,s,o){var r=t.tag;if(r===5||r===6)t=t.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(t,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(t),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=ls));else if(r!==4&&(r===27&&sr(t.type)&&(o=t.stateNode,s=null),t=t.child,t!==null))for(ah(t,s,o),t=t.sibling;t!==null;)ah(t,s,o),t=t.sibling}function Eu(t,s,o){var r=t.tag;if(r===5||r===6)t=t.stateNode,s?o.insertBefore(t,s):o.appendChild(t);else if(r!==4&&(r===27&&sr(t.type)&&(o=t.stateNode),t=t.child,t!==null))for(Eu(t,s,o),t=t.sibling;t!==null;)Eu(t,s,o),t=t.sibling}function Ig(t){var s=t.stateNode,o=t.memoizedProps;try{for(var r=t.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Io(s,r,o),s[Nt]=t,s[bn]=o}catch(m){Zn(t,t.return,m)}}var Ta=!1,mo=!1,rh=!1,Hg=typeof WeakSet=="function"?WeakSet:Set,Do=null;function V2(t,s){if(t=t.containerInfo,Eh=qu,t=Ct(t),it(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var S=0,R=-1,Q=-1,ye=0,Oe=0,Ue=t,we=null;t:for(;;){for(var ke;Ue!==o||f!==0&&Ue.nodeType!==3||(R=S+f),Ue!==m||r!==0&&Ue.nodeType!==3||(Q=S+r),Ue.nodeType===3&&(S+=Ue.nodeValue.length),(ke=Ue.firstChild)!==null;)we=Ue,Ue=ke;for(;;){if(Ue===t)break t;if(we===o&&++ye===f&&(R=S),we===m&&++Oe===r&&(Q=S),(ke=Ue.nextSibling)!==null)break;Ue=we,we=Ue.parentNode}Ue=ke}o=R===-1||Q===-1?null:{start:R,end:Q}}else o=null}o=o||{start:0,end:0}}else o=null;for(Th={focusedElem:t,selectionRange:o},qu=!1,Do=s;Do!==null;)if(s=Do,t=s.child,(s.subtreeFlags&1028)!==0&&t!==null)t.return=s,Do=t;else for(;Do!==null;){switch(s=Do,m=s.alternate,t=s.flags,s.tag){case 0:if((t&4)!==0&&(t=s.updateQueue,t=t!==null?t.events:null,t!==null))for(o=0;o<t.length;o++)f=t[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var At=Ar(o.type,f);t=r.getSnapshotBeforeUpdate(At,m),r.__reactInternalSnapshotBeforeUpdate=t}catch(Xt){Zn(o,o.return,Xt)}}break;case 3:if((t&1024)!==0){if(t=s.stateNode.containerInfo,o=t.nodeType,o===9)Dh(t);else if(o===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Dh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=s.sibling,t!==null){t.return=s.return,Do=t;break}Do=s.return}}function Ug(t,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:Na(t,o),r&4&&ac(5,o);break;case 1:if(Na(t,o),r&4)if(t=o.stateNode,s===null)try{t.componentDidMount()}catch(S){Zn(o,o.return,S)}else{var f=Ar(o.type,s.memoizedProps);s=s.memoizedState;try{t.componentDidUpdate(f,s,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Zn(o,o.return,S)}}r&64&&Og(o),r&512&&rc(o,o.return);break;case 3:if(Na(t,o),r&64&&(t=o.updateQueue,t!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{j_(t,s)}catch(S){Zn(o,o.return,S)}}break;case 27:s===null&&r&4&&Ig(o);case 26:case 5:Na(t,o),s===null&&r&4&&$g(o),r&512&&rc(o,o.return);break;case 12:Na(t,o);break;case 31:Na(t,o),r&4&&Wg(t,o);break;case 13:Na(t,o),r&4&&Fg(t,o),r&64&&(t=o.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(o=Z2.bind(null,o),yv(t,o))));break;case 22:if(r=o.memoizedState!==null||Ta,!r){s=s!==null&&s.memoizedState!==null||mo,f=Ta;var m=mo;Ta=r,(mo=s)&&!m?Da(t,o,(o.subtreeFlags&8772)!==0):Na(t,o),Ta=f,mo=m}break;case 30:break;default:Na(t,o)}}function Vg(t){var s=t.alternate;s!==null&&(t.alternate=null,Vg(s)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(s=t.stateNode,s!==null&&go(s)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Es=null,_i=!1;function Aa(t,s,o){for(o=o.child;o!==null;)Yg(t,s,o),o=o.sibling}function Yg(t,s,o){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(nt,o)}catch{}switch(o.tag){case 26:mo||fa(o,s),Aa(t,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:mo||fa(o,s);var r=Es,f=_i;sr(o.type)&&(Es=o.stateNode,_i=!1),Aa(t,s,o),_c(o.stateNode),Es=r,_i=f;break;case 5:mo||fa(o,s);case 6:if(r=Es,f=_i,Es=null,Aa(t,s,o),Es=r,_i=f,Es!==null)if(_i)try{(Es.nodeType===9?Es.body:Es.nodeName==="HTML"?Es.ownerDocument.body:Es).removeChild(o.stateNode)}catch(m){Zn(o,s,m)}else try{Es.removeChild(o.stateNode)}catch(m){Zn(o,s,m)}break;case 18:Es!==null&&(_i?(t=Es,O0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,o.stateNode),bl(t)):O0(Es,o.stateNode));break;case 4:r=Es,f=_i,Es=o.stateNode.containerInfo,_i=!0,Aa(t,s,o),Es=r,_i=f;break;case 0:case 11:case 14:case 15:Ka(2,o,s),mo||Ka(4,o,s),Aa(t,s,o);break;case 1:mo||(fa(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&zg(o,s,r)),Aa(t,s,o);break;case 21:Aa(t,s,o);break;case 22:mo=(r=mo)||o.memoizedState!==null,Aa(t,s,o),mo=r;break;default:Aa(t,s,o)}}function Wg(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{bl(t)}catch(o){Zn(s,s.return,o)}}}function Fg(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bl(t)}catch(o){Zn(s,s.return,o)}}function Y2(t){switch(t.tag){case 31:case 13:case 19:var s=t.stateNode;return s===null&&(s=t.stateNode=new Hg),s;case 22:return t=t.stateNode,s=t._retryCache,s===null&&(s=t._retryCache=new Hg),s;default:throw Error(a(435,t.tag))}}function Tu(t,s){var o=Y2(t);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=J2.bind(null,t,r);r.then(f,f)}})}function gi(t,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=t,S=s,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(sr(R.type)){Es=R.stateNode,_i=!1;break e}break;case 5:Es=R.stateNode,_i=!1;break e;case 3:case 4:Es=R.stateNode.containerInfo,_i=!0;break e}R=R.return}if(Es===null)throw Error(a(160));Yg(m,S,f),Es=null,_i=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)Xg(s,t),s=s.sibling}var Ji=null;function Xg(t,s){var o=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:gi(s,t),yi(t),r&4&&(Ka(3,t,t.return),ac(3,t),Ka(5,t,t.return));break;case 1:gi(s,t),yi(t),r&512&&(mo||o===null||fa(o,o.return)),r&64&&Ta&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(o=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=Ji;if(gi(s,t),yi(t),r&512&&(mo||o===null||fa(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=t.memoizedState,o===null)if(r===null)if(t.stateNode===null){e:{r=t.type,o=t.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[jo]||m[Nt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),Io(m,r,o),m[Nt]=t,nn(m),r=m;break e;case"link":var S=X0("link","href",f).get(r+(o.href||""));if(S){for(var R=0;R<S.length;R++)if(m=S[R],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){S.splice(R,1);break t}}m=f.createElement(r),Io(m,r,o),f.head.appendChild(m);break;case"meta":if(S=X0("meta","content",f).get(r+(o.content||""))){for(R=0;R<S.length;R++)if(m=S[R],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){S.splice(R,1);break t}}m=f.createElement(r),Io(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[Nt]=t,nn(m),r=m}t.stateNode=r}else G0(f,t.type,t.stateNode);else t.stateNode=F0(f,r,t.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?G0(f,t.type,t.stateNode):F0(f,r,t.memoizedProps)):r===null&&t.stateNode!==null&&oh(t,t.memoizedProps,o.memoizedProps)}break;case 27:gi(s,t),yi(t),r&512&&(mo||o===null||fa(o,o.return)),o!==null&&r&4&&oh(t,t.memoizedProps,o.memoizedProps);break;case 5:if(gi(s,t),yi(t),r&512&&(mo||o===null||fa(o,o.return)),t.flags&32){f=t.stateNode;try{ps(f,"")}catch(At){Zn(t,t.return,At)}}r&4&&t.stateNode!=null&&(f=t.memoizedProps,oh(t,f,o!==null?o.memoizedProps:f)),r&1024&&(rh=!0);break;case 6:if(gi(s,t),yi(t),r&4){if(t.stateNode===null)throw Error(a(162));r=t.memoizedProps,o=t.stateNode;try{o.nodeValue=r}catch(At){Zn(t,t.return,At)}}break;case 3:if(Wu=null,f=Ji,Ji=Vu(s.containerInfo),gi(s,t),Ji=f,yi(t),r&4&&o!==null&&o.memoizedState.isDehydrated)try{bl(s.containerInfo)}catch(At){Zn(t,t.return,At)}rh&&(rh=!1,Gg(t));break;case 4:r=Ji,Ji=Vu(t.stateNode.containerInfo),gi(s,t),yi(t),Ji=r;break;case 12:gi(s,t),yi(t);break;case 31:gi(s,t),yi(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Tu(t,r)));break;case 13:gi(s,t),yi(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Nu=pt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Tu(t,r)));break;case 22:f=t.memoizedState!==null;var Q=o!==null&&o.memoizedState!==null,ye=Ta,Oe=mo;if(Ta=ye||f,mo=Oe||Q,gi(s,t),mo=Oe,Ta=ye,yi(t),r&8192)e:for(s=t.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||Q||Ta||mo||Nr(t)),o=null,s=t;;){if(s.tag===5||s.tag===26){if(o===null){Q=o=s;try{if(m=Q.stateNode,f)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=Q.stateNode;var Ue=Q.memoizedProps.style,we=Ue!=null&&Ue.hasOwnProperty("display")?Ue.display:null;R.style.display=we==null||typeof we=="boolean"?"":(""+we).trim()}}catch(At){Zn(Q,Q.return,At)}}}else if(s.tag===6){if(o===null){Q=s;try{Q.stateNode.nodeValue=f?"":Q.memoizedProps}catch(At){Zn(Q,Q.return,At)}}}else if(s.tag===18){if(o===null){Q=s;try{var ke=Q.stateNode;f?z0(ke,!0):z0(Q.stateNode,!1)}catch(At){Zn(Q,Q.return,At)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===t)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=t.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,Tu(t,o))));break;case 19:gi(s,t),yi(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Tu(t,r)));break;case 30:break;case 21:break;default:gi(s,t),yi(t)}}function yi(t){var s=t.flags;if(s&2){try{for(var o,r=t.return;r!==null;){if(Pg(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=ih(t);Eu(t,m,f);break;case 5:var S=o.stateNode;o.flags&32&&(ps(S,""),o.flags&=-33);var R=ih(t);Eu(t,R,S);break;case 3:case 4:var Q=o.stateNode.containerInfo,ye=ih(t);ah(t,ye,Q);break;default:throw Error(a(161))}}catch(Oe){Zn(t,t.return,Oe)}t.flags&=-3}s&4096&&(t.flags&=-4097)}function Gg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var s=t;Gg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),t=t.sibling}}function Na(t,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Ug(t,s.alternate,s),s=s.sibling}function Nr(t){for(t=t.child;t!==null;){var s=t;switch(s.tag){case 0:case 11:case 14:case 15:Ka(4,s,s.return),Nr(s);break;case 1:fa(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&zg(s,s.return,o),Nr(s);break;case 27:_c(s.stateNode);case 26:case 5:fa(s,s.return),Nr(s);break;case 22:s.memoizedState===null&&Nr(s);break;case 30:Nr(s);break;default:Nr(s)}t=t.sibling}}function Da(t,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=t,m=s,S=m.flags;switch(m.tag){case 0:case 11:case 15:Da(f,m,o),ac(4,m);break;case 1:if(Da(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ye){Zn(r,r.return,ye)}if(r=m,f=r.updateQueue,f!==null){var R=r.stateNode;try{var Q=f.shared.hiddenCallbacks;if(Q!==null)for(f.shared.hiddenCallbacks=null,f=0;f<Q.length;f++)k_(Q[f],R)}catch(ye){Zn(r,r.return,ye)}}o&&S&64&&Og(m),rc(m,m.return);break;case 27:Ig(m);case 26:case 5:Da(f,m,o),o&&r===null&&S&4&&$g(m),rc(m,m.return);break;case 12:Da(f,m,o);break;case 31:Da(f,m,o),o&&S&4&&Wg(f,m);break;case 13:Da(f,m,o),o&&S&4&&Fg(f,m);break;case 22:m.memoizedState===null&&Da(f,m,o),rc(m,m.return);break;case 30:break;default:Da(f,m,o)}s=s.sibling}}function lh(t,s){var o=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),t=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(t=s.memoizedState.cachePool.pool),t!==o&&(t!=null&&t.refCount++,o!=null&&Xl(o))}function ch(t,s){t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&Xl(t))}function ea(t,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)qg(t,s,o,r),s=s.sibling}function qg(t,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ea(t,s,o,r),f&2048&&ac(9,s);break;case 1:ea(t,s,o,r);break;case 3:ea(t,s,o,r),f&2048&&(t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&Xl(t)));break;case 12:if(f&2048){ea(t,s,o,r),t=s.stateNode;try{var m=s.memoizedProps,S=m.id,R=m.onPostCommit;typeof R=="function"&&R(S,s.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(Q){Zn(s,s.return,Q)}}else ea(t,s,o,r);break;case 31:ea(t,s,o,r);break;case 13:ea(t,s,o,r);break;case 23:break;case 22:m=s.stateNode,S=s.alternate,s.memoizedState!==null?m._visibility&2?ea(t,s,o,r):lc(t,s):m._visibility&2?ea(t,s,o,r):(m._visibility|=2,cl(t,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&lh(S,s);break;case 24:ea(t,s,o,r),f&2048&&ch(s.alternate,s);break;default:ea(t,s,o,r)}}function cl(t,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=t,S=s,R=o,Q=r,ye=S.flags;switch(S.tag){case 0:case 11:case 15:cl(m,S,R,Q,f),ac(8,S);break;case 23:break;case 22:var Oe=S.stateNode;S.memoizedState!==null?Oe._visibility&2?cl(m,S,R,Q,f):lc(m,S):(Oe._visibility|=2,cl(m,S,R,Q,f)),f&&ye&2048&&lh(S.alternate,S);break;case 24:cl(m,S,R,Q,f),f&&ye&2048&&ch(S.alternate,S);break;default:cl(m,S,R,Q,f)}s=s.sibling}}function lc(t,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=t,r=s,f=r.flags;switch(r.tag){case 22:lc(o,r),f&2048&&lh(r.alternate,r);break;case 24:lc(o,r),f&2048&&ch(r.alternate,r);break;default:lc(o,r)}s=s.sibling}}var cc=8192;function ul(t,s,o){if(t.subtreeFlags&cc)for(t=t.child;t!==null;)Kg(t,s,o),t=t.sibling}function Kg(t,s,o){switch(t.tag){case 26:ul(t,s,o),t.flags&cc&&t.memoizedState!==null&&Av(o,Ji,t.memoizedState,t.memoizedProps);break;case 5:ul(t,s,o);break;case 3:case 4:var r=Ji;Ji=Vu(t.stateNode.containerInfo),ul(t,s,o),Ji=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=cc,cc=16777216,ul(t,s,o),cc=r):ul(t,s,o));break;default:ul(t,s,o)}}function Qg(t){var s=t.alternate;if(s!==null&&(t=s.child,t!==null)){s.child=null;do s=t.sibling,t.sibling=null,t=s;while(t!==null)}}function uc(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];Do=r,Jg(r,t)}Qg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zg(t),t=t.sibling}function Zg(t){switch(t.tag){case 0:case 11:case 15:uc(t),t.flags&2048&&Ka(9,t,t.return);break;case 3:uc(t);break;case 12:uc(t);break;case 22:var s=t.stateNode;t.memoizedState!==null&&s._visibility&2&&(t.return===null||t.return.tag!==13)?(s._visibility&=-3,Au(t)):uc(t);break;default:uc(t)}}function Au(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];Do=r,Jg(r,t)}Qg(t)}for(t=t.child;t!==null;){switch(s=t,s.tag){case 0:case 11:case 15:Ka(8,s,s.return),Au(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Au(s));break;default:Au(s)}t=t.sibling}}function Jg(t,s){for(;Do!==null;){var o=Do;switch(o.tag){case 0:case 11:case 15:Ka(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Xl(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,Do=r;else e:for(o=t;Do!==null;){r=Do;var f=r.sibling,m=r.return;if(Vg(r),r===o){Do=null;break e}if(f!==null){f.return=m,Do=f;break e}Do=m}}}var W2={getCacheForType:function(t){var s=$o(uo),o=s.data.get(t);return o===void 0&&(o=t(),s.data.set(t,o)),o},cacheSignal:function(){return $o(uo).controller.signal}},F2=typeof WeakMap=="function"?WeakMap:Map,In=0,cs=null,Cn=null,Mn=0,Qn=0,Ai=null,Qa=!1,dl=!1,uh=!1,Ra=0,Hs=0,Za=0,Dr=0,dh=0,Ni=0,fl=0,dc=null,xi=null,fh=!1,Nu=0,e0=0,Du=1/0,Ru=null,Ja=null,Co=0,er=null,hl=null,Ba=0,hh=0,mh=null,t0=null,fc=0,ph=null;function Di(){return(In&2)!==0&&Mn!==0?Mn&-Mn:$.T!==null?vh():Zt()}function n0(){if(Ni===0)if((Mn&536870912)===0||Dn){var t=et;et<<=1,(et&3932160)===0&&(et=262144),Ni=t}else Ni=536870912;return t=Ei.current,t!==null&&(t.flags|=32),Ni}function bi(t,s,o){(t===cs&&(Qn===2||Qn===9)||t.cancelPendingCommit!==null)&&(ml(t,0),tr(t,Mn,Ni,!1)),ut(t,o),((In&2)===0||t!==cs)&&(t===cs&&((In&2)===0&&(Dr|=o),Hs===4&&tr(t,Mn,Ni,!1)),ha(t))}function s0(t,s,o){if((In&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&t.expiredLanes)===0||Ot(t,s),f=r?q2(t,s):gh(t,s,!0),m=r;do{if(f===0){dl&&!r&&tr(t,s,0,!1);break}else{if(o=t.current.alternate,m&&!X2(o)){f=gh(t,s,!1),m=!1;continue}if(f===2){if(m=s,t.errorRecoveryDisabledLanes&m)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){s=S;e:{var R=t;f=dc;var Q=R.current.memoizedState.isDehydrated;if(Q&&(ml(R,S).flags|=256),S=gh(R,S,!1),S!==2){if(uh&&!Q){R.errorRecoveryDisabledLanes|=m,Dr|=m,f=4;break e}m=xi,xi=f,m!==null&&(xi===null?xi=m:xi.push.apply(xi,m))}f=S}if(m=!1,f!==2)continue}}if(f===1){ml(t,0),tr(t,s,0,!0);break}e:{switch(r=t,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:tr(r,s,Ni,!Qa);break e;case 2:xi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=Nu+300-pt(),10<f)){if(tr(r,s,Ni,!Qa),Ke(r,0,!0)!==0)break e;Ba=s,r.timeoutHandle=B0(o0.bind(null,r,o,xi,Ru,fh,s,Ni,Dr,fl,Qa,m,"Throttled",-0,0),f);break e}o0(r,o,xi,Ru,fh,s,Ni,Dr,fl,Qa,m,null,-0,0)}}break}while(!0);ha(t)}function o0(t,s,o,r,f,m,S,R,Q,ye,Oe,Ue,we,ke){if(t.timeoutHandle=-1,Ue=s.subtreeFlags,Ue&8192||(Ue&16785408)===16785408){Ue={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ls},Kg(s,m,Ue);var At=(m&62914560)===m?Nu-pt():(m&4194048)===m?e0-pt():0;if(At=Nv(Ue,At),At!==null){Ba=m,t.cancelPendingCommit=At(f0.bind(null,t,s,m,o,r,f,S,R,Q,Oe,Ue,null,we,ke)),tr(t,m,S,!ye);return}}f0(t,s,m,o,r,f,S,R,Q)}function X2(t){for(var s=t;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!Ne(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function tr(t,s,o,r){s&=~dh,s&=~Dr,t.suspendedLanes|=s,t.pingedLanes&=~s,r&&(t.warmLanes|=s),r=t.expirationTimes;for(var f=s;0<f;){var m=31-_e(f),S=1<<m;r[m]=-1,f&=~S}o!==0&&_n(t,o,s)}function Bu(){return(In&6)===0?(hc(0),!1):!0}function _h(){if(Cn!==null){if(Qn===0)var t=Cn.return;else t=Cn,Sa=Sr=null,Df(t),ol=null,ql=0,t=Cn;for(;t!==null;)Lg(t.alternate,t),t=t.return;Cn=null}}function ml(t,s){var o=t.timeoutHandle;o!==-1&&(t.timeoutHandle=-1,hv(o)),o=t.cancelPendingCommit,o!==null&&(t.cancelPendingCommit=null,o()),Ba=0,_h(),cs=t,Cn=o=js(t.current,null),Mn=s,Qn=0,Ai=null,Qa=!1,dl=Ot(t,s),uh=!1,fl=Ni=dh=Dr=Za=Hs=0,xi=dc=null,fh=!1,(s&8)!==0&&(s|=s&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=s;0<r;){var f=31-_e(r),m=1<<f;s|=t[f],r&=~m}return Ra=s,xr(),o}function i0(t,s){mn=null,$.H=sc,s===sl||s===cu?(s=v_(),Qn=3):s===bf?(s=v_(),Qn=4):Qn=s===Gf?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Ai=s,Cn===null&&(Hs=1,Su(t,Ii(s,t.current)))}function a0(){var t=Ei.current;return t===null?!0:(Mn&4194048)===Mn?Yi===null:(Mn&62914560)===Mn||(Mn&536870912)!==0?t===Yi:!1}function r0(){var t=$.H;return $.H=sc,t===null?sc:t}function l0(){var t=$.A;return $.A=W2,t}function Lu(){Hs=4,Qa||(Mn&4194048)!==Mn&&Ei.current!==null||(dl=!0),(Za&134217727)===0&&(Dr&134217727)===0||cs===null||tr(cs,Mn,Ni,!1)}function gh(t,s,o){var r=In;In|=2;var f=r0(),m=l0();(cs!==t||Mn!==s)&&(Ru=null,ml(t,s)),s=!1;var S=Hs;e:do try{if(Qn!==0&&Cn!==null){var R=Cn,Q=Ai;switch(Qn){case 8:_h(),S=6;break e;case 3:case 2:case 9:case 6:Ei.current===null&&(s=!0);var ye=Qn;if(Qn=0,Ai=null,pl(t,R,Q,ye),o&&dl){S=0;break e}break;default:ye=Qn,Qn=0,Ai=null,pl(t,R,Q,ye)}}G2(),S=Hs;break}catch(Oe){i0(t,Oe)}while(!0);return s&&t.shellSuspendCounter++,Sa=Sr=null,In=r,$.H=f,$.A=m,Cn===null&&(cs=null,Mn=0,xr()),S}function G2(){for(;Cn!==null;)c0(Cn)}function q2(t,s){var o=In;In|=2;var r=r0(),f=l0();cs!==t||Mn!==s?(Ru=null,Du=pt()+500,ml(t,s)):dl=Ot(t,s);e:do try{if(Qn!==0&&Cn!==null){s=Cn;var m=Ai;t:switch(Qn){case 1:Qn=0,Ai=null,pl(t,s,m,1);break;case 2:case 9:if(x_(m)){Qn=0,Ai=null,u0(s);break}s=function(){Qn!==2&&Qn!==9||cs!==t||(Qn=7),ha(t)},m.then(s,s);break e;case 3:Qn=7;break e;case 4:Qn=5;break e;case 7:x_(m)?(Qn=0,Ai=null,u0(s)):(Qn=0,Ai=null,pl(t,s,m,7));break;case 5:var S=null;switch(Cn.tag){case 26:S=Cn.memoizedState;case 5:case 27:var R=Cn;if(S?q0(S):R.stateNode.complete){Qn=0,Ai=null;var Q=R.sibling;if(Q!==null)Cn=Q;else{var ye=R.return;ye!==null?(Cn=ye,Ou(ye)):Cn=null}break t}}Qn=0,Ai=null,pl(t,s,m,5);break;case 6:Qn=0,Ai=null,pl(t,s,m,6);break;case 8:_h(),Hs=6;break e;default:throw Error(a(462))}}K2();break}catch(Oe){i0(t,Oe)}while(!0);return Sa=Sr=null,$.H=r,$.A=f,In=o,Cn!==null?0:(cs=null,Mn=0,xr(),Hs)}function K2(){for(;Cn!==null&&!mt();)c0(Cn)}function c0(t){var s=Rg(t.alternate,t,Ra);t.memoizedProps=t.pendingProps,s===null?Ou(t):Cn=s}function u0(t){var s=t,o=s.alternate;switch(s.tag){case 15:case 0:s=Mg(o,s,s.pendingProps,s.type,void 0,Mn);break;case 11:s=Mg(o,s,s.pendingProps,s.type.render,s.ref,Mn);break;case 5:Df(s);default:Lg(o,s),s=Cn=Pi(s,Ra),s=Rg(o,s,Ra)}t.memoizedProps=t.pendingProps,s===null?Ou(t):Cn=s}function pl(t,s,o,r){Sa=Sr=null,Df(s),ol=null,ql=0;var f=s.return;try{if($2(t,f,s,o,Mn)){Hs=1,Su(t,Ii(o,t.current)),Cn=null;return}}catch(m){if(f!==null)throw Cn=f,m;Hs=1,Su(t,Ii(o,t.current)),Cn=null;return}s.flags&32768?(Dn||r===1?t=!0:dl||(Mn&536870912)!==0?t=!1:(Qa=t=!0,(r===2||r===9||r===3||r===6)&&(r=Ei.current,r!==null&&r.tag===13&&(r.flags|=16384))),d0(s,t)):Ou(s)}function Ou(t){var s=t;do{if((s.flags&32768)!==0){d0(s,Qa);return}t=s.return;var o=H2(s.alternate,s,Ra);if(o!==null){Cn=o;return}if(s=s.sibling,s!==null){Cn=s;return}Cn=s=t}while(s!==null);Hs===0&&(Hs=5)}function d0(t,s){do{var o=U2(t.alternate,t);if(o!==null){o.flags&=32767,Cn=o;return}if(o=t.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(t=t.sibling,t!==null)){Cn=t;return}Cn=t=o}while(t!==null);Hs=6,Cn=null}function f0(t,s,o,r,f,m,S,R,Q){t.cancelPendingCommit=null;do zu();while(Co!==0);if((In&6)!==0)throw Error(a(327));if(s!==null){if(s===t.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=qr,It(t,o,m,S,R,Q),t===cs&&(Cn=cs=null,Mn=0),hl=s,er=t,Ba=o,hh=m,mh=f,t0=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ev(ot,function(){return g0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=$.T,$.T=null,f=ne.p,ne.p=2,S=In,In|=4;try{V2(t,s,o)}finally{In=S,ne.p=f,$.T=r}}Co=1,h0(),m0(),p0()}}function h0(){if(Co===1){Co=0;var t=er,s=hl,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=$.T,$.T=null;var r=ne.p;ne.p=2;var f=In;In|=4;try{Xg(s,t);var m=Th,S=Ct(t.containerInfo),R=m.focusedElem,Q=m.selectionRange;if(S!==R&&R&&R.ownerDocument&&zt(R.ownerDocument.documentElement,R)){if(Q!==null&&it(R)){var ye=Q.start,Oe=Q.end;if(Oe===void 0&&(Oe=ye),"selectionStart"in R)R.selectionStart=ye,R.selectionEnd=Math.min(Oe,R.value.length);else{var Ue=R.ownerDocument||document,we=Ue&&Ue.defaultView||window;if(we.getSelection){var ke=we.getSelection(),At=R.textContent.length,Xt=Math.min(Q.start,At),ss=Q.end===void 0?Xt:Math.min(Q.end,At);!ke.extend&&Xt>ss&&(S=ss,ss=Xt,Xt=S);var le=_t(R,Xt),se=_t(R,ss);if(le&&se&&(ke.rangeCount!==1||ke.anchorNode!==le.node||ke.anchorOffset!==le.offset||ke.focusNode!==se.node||ke.focusOffset!==se.offset)){var ge=Ue.createRange();ge.setStart(le.node,le.offset),ke.removeAllRanges(),Xt>ss?(ke.addRange(ge),ke.extend(se.node,se.offset)):(ge.setEnd(se.node,se.offset),ke.addRange(ge))}}}}for(Ue=[],ke=R;ke=ke.parentNode;)ke.nodeType===1&&Ue.push({element:ke,left:ke.scrollLeft,top:ke.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Ue.length;R++){var Ie=Ue[R];Ie.element.scrollLeft=Ie.left,Ie.element.scrollTop=Ie.top}}qu=!!Eh,Th=Eh=null}finally{In=f,ne.p=r,$.T=o}}t.current=s,Co=2}}function m0(){if(Co===2){Co=0;var t=er,s=hl,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=$.T,$.T=null;var r=ne.p;ne.p=2;var f=In;In|=4;try{Ug(t,s.alternate,s)}finally{In=f,ne.p=r,$.T=o}}Co=3}}function p0(){if(Co===4||Co===3){Co=0,He();var t=er,s=hl,o=Ba,r=t0;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Co=5:(Co=0,hl=er=null,_0(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ja=null),sn(o),s=s.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(nt,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=$.T,f=ne.p,ne.p=2,$.T=null;try{for(var m=t.onRecoverableError,S=0;S<r.length;S++){var R=r[S];m(R.value,{componentStack:R.stack})}}finally{$.T=s,ne.p=f}}(Ba&3)!==0&&zu(),ha(t),f=t.pendingLanes,(o&261930)!==0&&(f&42)!==0?t===ph?fc++:(fc=0,ph=t):fc=0,hc(0)}}function _0(t,s){(t.pooledCacheLanes&=s)===0&&(s=t.pooledCache,s!=null&&(t.pooledCache=null,Xl(s)))}function zu(){return h0(),m0(),p0(),g0()}function g0(){if(Co!==5)return!1;var t=er,s=hh;hh=0;var o=sn(Ba),r=$.T,f=ne.p;try{ne.p=32>o?32:o,$.T=null,o=mh,mh=null;var m=er,S=Ba;if(Co=0,hl=er=null,Ba=0,(In&6)!==0)throw Error(a(331));var R=In;if(In|=4,Zg(m.current),qg(m,m.current,S,o),In=R,hc(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(nt,m)}catch{}return!0}finally{ne.p=f,$.T=r,_0(t,s)}}function y0(t,s,o){s=Ii(o,s),s=Xf(t.stateNode,s,2),t=Xa(t,s,2),t!==null&&(ut(t,2),ha(t))}function Zn(t,s,o){if(t.tag===3)y0(t,t,o);else for(;s!==null;){if(s.tag===3){y0(s,t,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ja===null||!Ja.has(r))){t=Ii(o,t),o=xg(2),r=Xa(s,o,2),r!==null&&(bg(o,r,s,t),ut(r,2),ha(r));break}}s=s.return}}function yh(t,s,o){var r=t.pingCache;if(r===null){r=t.pingCache=new F2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(uh=!0,f.add(o),t=Q2.bind(null,t,s,o),s.then(t,t))}function Q2(t,s,o){var r=t.pingCache;r!==null&&r.delete(s),t.pingedLanes|=t.suspendedLanes&o,t.warmLanes&=~o,cs===t&&(Mn&o)===o&&(Hs===4||Hs===3&&(Mn&62914560)===Mn&&300>pt()-Nu?(In&2)===0&&ml(t,0):dh|=o,fl===Mn&&(fl=0)),ha(t)}function x0(t,s){s===0&&(s=ft()),t=ca(t,s),t!==null&&(ut(t,s),ha(t))}function Z2(t){var s=t.memoizedState,o=0;s!==null&&(o=s.retryLane),x0(t,o)}function J2(t,s){var o=0;switch(t.tag){case 31:case 13:var r=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),x0(t,o)}function ev(t,s){return rt(t,s)}var $u=null,_l=null,xh=!1,Pu=!1,bh=!1,nr=0;function ha(t){t!==_l&&t.next===null&&(_l===null?$u=_l=t:_l=_l.next=t),Pu=!0,xh||(xh=!0,nv())}function hc(t,s){if(!bh&&Pu){bh=!0;do for(var o=!1,r=$u;r!==null;){if(t!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var S=r.suspendedLanes,R=r.pingedLanes;m=(1<<31-_e(42|t)+1)-1,m&=f&~(S&~R),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,S0(r,m))}else m=Mn,m=Ke(r,r===cs?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||Ot(r,m)||(o=!0,S0(r,m));r=r.next}while(o);bh=!1}}function tv(){b0()}function b0(){Pu=xh=!1;var t=0;nr!==0&&fv()&&(t=nr);for(var s=pt(),o=null,r=$u;r!==null;){var f=r.next,m=v0(r,s);m===0?(r.next=null,o===null?$u=f:o.next=f,f===null&&(_l=o)):(o=r,(t!==0||(m&3)!==0)&&(Pu=!0)),r=f}Co!==0&&Co!==5||hc(t),nr!==0&&(nr=0)}function v0(t,s){for(var o=t.suspendedLanes,r=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var S=31-_e(m),R=1<<S,Q=f[S];Q===-1?((R&o)===0||(R&r)!==0)&&(f[S]=wt(R,s)):Q<=s&&(t.expiredLanes|=R),m&=~R}if(s=cs,o=Mn,o=Ke(t,t===s?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,o===0||t===s&&(Qn===2||Qn===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Ce(r),t.callbackNode=null,t.callbackPriority=0;if((o&3)===0||Ot(t,o)){if(s=o&-o,s===t.callbackPriority)return s;switch(r!==null&&Ce(r),sn(o)){case 2:case 8:o=Bt;break;case 32:o=ot;break;case 268435456:o=ee;break;default:o=ot}return r=w0.bind(null,t),o=rt(o,r),t.callbackPriority=s,t.callbackNode=o,s}return r!==null&&r!==null&&Ce(r),t.callbackPriority=2,t.callbackNode=null,2}function w0(t,s){if(Co!==0&&Co!==5)return t.callbackNode=null,t.callbackPriority=0,null;var o=t.callbackNode;if(zu()&&t.callbackNode!==o)return null;var r=Mn;return r=Ke(t,t===cs?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(s0(t,r,s),v0(t,pt()),t.callbackNode!=null&&t.callbackNode===o?w0.bind(null,t):null)}function S0(t,s){if(zu())return null;s0(t,s,!0)}function nv(){mv(function(){(In&6)!==0?rt(Mt,tv):b0()})}function vh(){if(nr===0){var t=tl;t===0&&(t=Be,Be<<=1,(Be&261888)===0&&(Be=256)),nr=t}return nr}function C0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:As(""+t)}function k0(t,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,t.id&&o.setAttribute("form",t.id),s.parentNode.insertBefore(o,s),t=new FormData(t),o.parentNode.removeChild(o),t}function sv(t,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=C0((f[bn]||null).action),S=r.submitter;S&&(s=(s=S[bn]||null)?C0(s.formAction):S.getAttribute("formAction"),s!==null&&(m=s,S=null));var R=new No("action","action",null,r,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nr!==0){var Q=S?k0(f,S):new FormData(f);Hf(o,{pending:!0,data:Q,method:f.method,action:m},null,Q)}}else typeof m=="function"&&(R.preventDefault(),Q=S?k0(f,S):new FormData(f),Hf(o,{pending:!0,data:Q,method:f.method,action:m},m,Q))},currentTarget:f}]})}}for(var wh=0;wh<Gr.length;wh++){var Sh=Gr[wh],ov=Sh.toLowerCase(),iv=Sh[0].toUpperCase()+Sh.slice(1);pi(ov,"on"+iv)}pi(mi,"onAnimationEnd"),pi(Mi,"onAnimationIteration"),pi(gr,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(Wr,"onTransitionRun"),pi(Fr,"onTransitionStart"),pi(Xr,"onTransitionCancel"),pi(Ul,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),ys("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ys("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ys("onBeforeInput",["compositionend","keypress","textInput","paste"]),ys("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ys("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ys("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),av=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mc));function j0(t,s){s=(s&4)!==0;for(var o=0;o<t.length;o++){var r=t[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var S=r.length-1;0<=S;S--){var R=r[S],Q=R.instance,ye=R.currentTarget;if(R=R.listener,Q!==m&&f.isPropagationStopped())break e;m=R,f.currentTarget=ye;try{m(f)}catch(Oe){yr(Oe)}f.currentTarget=null,m=Q}else for(S=0;S<r.length;S++){if(R=r[S],Q=R.instance,ye=R.currentTarget,R=R.listener,Q!==m&&f.isPropagationStopped())break e;m=R,f.currentTarget=ye;try{m(f)}catch(Oe){yr(Oe)}f.currentTarget=null,m=Q}}}}function kn(t,s){var o=s[ds];o===void 0&&(o=s[ds]=new Set);var r=t+"__bubble";o.has(r)||(M0(s,t,2,!1),o.add(r))}function Ch(t,s,o){var r=0;s&&(r|=4),M0(o,t,r,s)}var Iu="_reactListening"+Math.random().toString(36).slice(2);function kh(t){if(!t[Iu]){t[Iu]=!0,rs.forEach(function(o){o!=="selectionchange"&&(av.has(o)||Ch(o,!1,t),Ch(o,!0,t))});var s=t.nodeType===9?t:t.ownerDocument;s===null||s[Iu]||(s[Iu]=!0,Ch("selectionchange",!1,s))}}function M0(t,s,o,r){switch(ny(s)){case 2:var f=Bv;break;case 8:f=Lv;break;default:f=Ih}o=f.bind(null,s,o,t),f=void 0,!zs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?t.addEventListener(s,o,{capture:!0,passive:f}):t.addEventListener(s,o,!0):f!==void 0?t.addEventListener(s,o,{passive:f}):t.addEventListener(s,o,!1)}function jh(t,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var S=r.tag;if(S===3||S===4){var R=r.stateNode.containerInfo;if(R===f)break;if(S===4)for(S=r.return;S!==null;){var Q=S.tag;if((Q===3||Q===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;R!==null;){if(S=Bo(R),S===null)return;if(Q=S.tag,Q===5||Q===6||Q===26||Q===27){r=m=S;continue e}R=R.parentNode}}r=r.return}To(function(){var ye=m,Oe=es(o),Ue=[];e:{var we=Vl.get(t);if(we!==void 0){var ke=No,At=t;switch(t){case"keypress":if(io(o)===0)break e;case"keydown":case"keyup":ke=Qi;break;case"focusin":At="focus",ke=xs;break;case"focusout":At="blur",ke=xs;break;case"beforeblur":case"afterblur":ke=xs;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Vo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=zi;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=ue;break;case mi:case Mi:case gr:ke=qn;break;case Ul:ke=Ve;break;case"scroll":case"scrollend":ke=ro;break;case"wheel":ke=Yt;break;case"copy":case"cut":case"paste":ke=ki;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=E;break;case"toggle":case"beforetoggle":ke=Ft}var Xt=(s&4)!==0,ss=!Xt&&(t==="scroll"||t==="scrollend"),le=Xt?we!==null?we+"Capture":null:we;Xt=[];for(var se=ye,ge;se!==null;){var Ie=se;if(ge=Ie.stateNode,Ie=Ie.tag,Ie!==5&&Ie!==26&&Ie!==27||ge===null||le===null||(Ie=xn(se,le),Ie!=null&&Xt.push(pc(se,Ie,ge))),ss)break;se=se.return}0<Xt.length&&(we=new ke(we,At,null,o,Oe),Ue.push({event:we,listeners:Xt}))}}if((s&7)===0){e:{if(we=t==="mouseover"||t==="pointerover",ke=t==="mouseout"||t==="pointerout",we&&o!==Eo&&(At=o.relatedTarget||o.fromElement)&&(Bo(At)||At[tt]))break e;if((ke||we)&&(we=Oe.window===Oe?Oe:(we=Oe.ownerDocument)?we.defaultView||we.parentWindow:window,ke?(At=o.relatedTarget||o.toElement,ke=ye,At=At?Bo(At):null,At!==null&&(ss=u(At),Xt=At.tag,At!==ss||Xt!==5&&Xt!==27&&Xt!==6)&&(At=null)):(ke=null,At=ye),ke!==At)){if(Xt=Vo,Ie="onMouseLeave",le="onMouseEnter",se="mouse",(t==="pointerout"||t==="pointerover")&&(Xt=E,Ie="onPointerLeave",le="onPointerEnter",se="pointer"),ss=ke==null?we:Qt(ke),ge=At==null?we:Qt(At),we=new Xt(Ie,se+"leave",ke,o,Oe),we.target=ss,we.relatedTarget=ge,Ie=null,Bo(Oe)===ye&&(Xt=new Xt(le,se+"enter",At,o,Oe),Xt.target=ge,Xt.relatedTarget=ss,Ie=Xt),ss=Ie,ke&&At)t:{for(Xt=rv,le=ke,se=At,ge=0,Ie=le;Ie;Ie=Xt(Ie))ge++;Ie=0;for(var Ut=se;Ut;Ut=Xt(Ut))Ie++;for(;0<ge-Ie;)le=Xt(le),ge--;for(;0<Ie-ge;)se=Xt(se),Ie--;for(;ge--;){if(le===se||se!==null&&le===se.alternate){Xt=le;break t}le=Xt(le),se=Xt(se)}Xt=null}else Xt=null;ke!==null&&E0(Ue,we,ke,Xt,!1),At!==null&&ss!==null&&E0(Ue,ss,At,Xt,!0)}}e:{if(we=ye?Qt(ye):window,ke=we.nodeName&&we.nodeName.toLowerCase(),ke==="select"||ke==="input"&&we.type==="file")var zn=U;else if(So(we))if(w)zn=Ee;else{zn=K;var $t=H}else ke=we.nodeName,!ke||ke.toLowerCase()!=="input"||we.type!=="checkbox"&&we.type!=="radio"?ye&&Gn(ye.elementType)&&(zn=U):zn=ae;if(zn&&(zn=zn(t,ye))){hi(Ue,zn,o,Oe);break e}$t&&$t(t,we,ye),t==="focusout"&&ye&&we.type==="number"&&ye.memoizedProps.value!=null&&Ls(we,"number",we.value)}switch($t=ye?Qt(ye):window,t){case"focusin":(So($t)||$t.contentEditable==="true")&&(St=$t,wn=ye,fn=null);break;case"focusout":fn=wn=St=null;break;case"mousedown":bs=!0;break;case"contextmenu":case"mouseup":case"dragend":bs=!1,Ks(Ue,o,Oe);break;case"selectionchange":if(lt)break;case"keydown":case"keyup":Ks(Ue,o,Oe)}var yn;if(vn)e:{switch(t){case"compositionstart":var En="onCompositionStart";break e;case"compositionend":En="onCompositionEnd";break e;case"compositionupdate":En="onCompositionUpdate";break e}En=void 0}else en?ks(t,o)&&(En="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(En="onCompositionStart");En&&(gn&&o.locale!=="ko"&&(en||En!=="onCompositionStart"?En==="onCompositionEnd"&&en&&(yn=Oi()):(Ns=Oe,Zo="value"in Ns?Ns.value:Ns.textContent,en=!0)),$t=Hu(ye,En),0<$t.length&&(En=new Lt(En,t,null,o,Oe),Ue.push({event:En,listeners:$t}),yn?En.data=yn:(yn=wo(o),yn!==null&&(En.data=yn)))),(yn=Vn?Ds(t,o):lo(t,o))&&(En=Hu(ye,"onBeforeInput"),0<En.length&&($t=new Lt("onBeforeInput","beforeinput",null,o,Oe),Ue.push({event:$t,listeners:En}),$t.data=yn)),sv(Ue,t,ye,o,Oe)}j0(Ue,s)})}function pc(t,s,o){return{instance:t,listener:s,currentTarget:o}}function Hu(t,s){for(var o=s+"Capture",r=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=xn(t,o),f!=null&&r.unshift(pc(t,f,m)),f=xn(t,s),f!=null&&r.push(pc(t,f,m))),t.tag===3)return r;t=t.return}return[]}function rv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function E0(t,s,o,r,f){for(var m=s._reactName,S=[];o!==null&&o!==r;){var R=o,Q=R.alternate,ye=R.stateNode;if(R=R.tag,Q!==null&&Q===r)break;R!==5&&R!==26&&R!==27||ye===null||(Q=ye,f?(ye=xn(o,m),ye!=null&&S.unshift(pc(o,ye,Q))):f||(ye=xn(o,m),ye!=null&&S.push(pc(o,ye,Q)))),o=o.return}S.length!==0&&t.push({event:s,listeners:S})}var lv=/\r\n?/g,cv=/\u0000|\uFFFD/g;function T0(t){return(typeof t=="string"?t:""+t).replace(lv,`
`).replace(cv,"")}function A0(t,s){return s=T0(s),T0(t)===s}function ns(t,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||ps(t,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&ps(t,""+r);break;case"className":Yn(t,"class",r);break;case"tabIndex":Yn(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Yn(t,o,r);break;case"style":Ci(t,r,m);break;case"data":if(s!=="object"){Yn(t,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){t.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(o);break}r=As(""+r),t.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&ns(t,s,"name",f.name,f,null),ns(t,s,"formEncType",f.formEncType,f,null),ns(t,s,"formMethod",f.formMethod,f,null),ns(t,s,"formTarget",f.formTarget,f,null)):(ns(t,s,"encType",f.encType,f,null),ns(t,s,"method",f.method,f,null),ns(t,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(o);break}r=As(""+r),t.setAttribute(o,r);break;case"onClick":r!=null&&(t.onclick=ls);break;case"onScroll":r!=null&&kn("scroll",t);break;case"onScrollEnd":r!=null&&kn("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=o}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}o=As(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,""+r):t.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,""):t.removeAttribute(o);break;case"capture":case"download":r===!0?t.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,r):t.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(o,r):t.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(o):t.setAttribute(o,r);break;case"popover":kn("beforetoggle",t),kn("toggle",t),so(t,"popover",r);break;case"xlinkActuate":Ys(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ys(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ys(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ys(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ys(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ys(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ys(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ys(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ys(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":so(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Li.get(o)||o,so(t,o,r))}}function Mh(t,s,o,r,f,m){switch(o){case"style":Ci(t,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=o}}break;case"children":typeof r=="string"?ps(t,r):(typeof r=="number"||typeof r=="bigint")&&ps(t,""+r);break;case"onScroll":r!=null&&kn("scroll",t);break;case"onScrollEnd":r!=null&&kn("scrollend",t);break;case"onClick":r!=null&&(t.onclick=ls);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!gs.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=t[bn]||null,m=m!=null?m[o]:null,typeof m=="function"&&t.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in t?t[o]=null:t.hasAttribute(o)&&t.removeAttribute(o)),t.addEventListener(s,r,f);break e}o in t?t[o]=r:r===!0?t.setAttribute(o,""):so(t,o,r)}}}function Io(t,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":kn("error",t),kn("load",t);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var S=o[m];if(S!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ns(t,s,m,S,o,null)}}f&&ns(t,s,"srcSet",o.srcSet,o,null),r&&ns(t,s,"src",o.src,o,null);return;case"input":kn("invalid",t);var R=m=S=f=null,Q=null,ye=null;for(r in o)if(o.hasOwnProperty(r)){var Oe=o[r];if(Oe!=null)switch(r){case"name":f=Oe;break;case"type":S=Oe;break;case"checked":Q=Oe;break;case"defaultChecked":ye=Oe;break;case"value":m=Oe;break;case"defaultValue":R=Oe;break;case"children":case"dangerouslySetInnerHTML":if(Oe!=null)throw Error(a(137,s));break;default:ns(t,s,r,Oe,o,null)}}On(t,m,R,Q,ye,S,f,!1);return;case"select":kn("invalid",t),r=S=m=null;for(f in o)if(o.hasOwnProperty(f)&&(R=o[f],R!=null))switch(f){case"value":m=R;break;case"defaultValue":S=R;break;case"multiple":r=R;default:ns(t,s,f,R,o,null)}s=m,o=S,t.multiple=!!r,s!=null?Fn(t,!!r,s,!1):o!=null&&Fn(t,!!r,o,!0);return;case"textarea":kn("invalid",t),m=f=r=null;for(S in o)if(o.hasOwnProperty(S)&&(R=o[S],R!=null))switch(S){case"value":r=R;break;case"defaultValue":f=R;break;case"children":m=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:ns(t,s,S,R,o,null)}ui(t,r,f,m);return;case"option":for(Q in o)if(o.hasOwnProperty(Q)&&(r=o[Q],r!=null))switch(Q){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ns(t,s,Q,r,o,null)}return;case"dialog":kn("beforetoggle",t),kn("toggle",t),kn("cancel",t),kn("close",t);break;case"iframe":case"object":kn("load",t);break;case"video":case"audio":for(r=0;r<mc.length;r++)kn(mc[r],t);break;case"image":kn("error",t),kn("load",t);break;case"details":kn("toggle",t);break;case"embed":case"source":case"link":kn("error",t),kn("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ye in o)if(o.hasOwnProperty(ye)&&(r=o[ye],r!=null))switch(ye){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ns(t,s,ye,r,o,null)}return;default:if(Gn(s)){for(Oe in o)o.hasOwnProperty(Oe)&&(r=o[Oe],r!==void 0&&Mh(t,s,Oe,r,o,void 0));return}}for(R in o)o.hasOwnProperty(R)&&(r=o[R],r!=null&&ns(t,s,R,r,o,null))}function uv(t,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,S=null,R=null,Q=null,ye=null,Oe=null;for(ke in o){var Ue=o[ke];if(o.hasOwnProperty(ke)&&Ue!=null)switch(ke){case"checked":break;case"value":break;case"defaultValue":Q=Ue;default:r.hasOwnProperty(ke)||ns(t,s,ke,null,r,Ue)}}for(var we in r){var ke=r[we];if(Ue=o[we],r.hasOwnProperty(we)&&(ke!=null||Ue!=null))switch(we){case"type":m=ke;break;case"name":f=ke;break;case"checked":ye=ke;break;case"defaultChecked":Oe=ke;break;case"value":S=ke;break;case"defaultValue":R=ke;break;case"children":case"dangerouslySetInnerHTML":if(ke!=null)throw Error(a(137,s));break;default:ke!==Ue&&ns(t,s,we,ke,r,Ue)}}Fs(t,S,R,Q,ye,Oe,m,f);return;case"select":ke=S=R=we=null;for(m in o)if(Q=o[m],o.hasOwnProperty(m)&&Q!=null)switch(m){case"value":break;case"multiple":ke=Q;default:r.hasOwnProperty(m)||ns(t,s,m,null,r,Q)}for(f in r)if(m=r[f],Q=o[f],r.hasOwnProperty(f)&&(m!=null||Q!=null))switch(f){case"value":we=m;break;case"defaultValue":R=m;break;case"multiple":S=m;default:m!==Q&&ns(t,s,f,m,r,Q)}s=R,o=S,r=ke,we!=null?Fn(t,!!o,we,!1):!!r!=!!o&&(s!=null?Fn(t,!!o,s,!0):Fn(t,!!o,o?[]:"",!1));return;case"textarea":ke=we=null;for(R in o)if(f=o[R],o.hasOwnProperty(R)&&f!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:ns(t,s,R,null,r,f)}for(S in r)if(f=r[S],m=o[S],r.hasOwnProperty(S)&&(f!=null||m!=null))switch(S){case"value":we=f;break;case"defaultValue":ke=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&ns(t,s,S,f,r,m)}Xn(t,we,ke);return;case"option":for(var At in o)if(we=o[At],o.hasOwnProperty(At)&&we!=null&&!r.hasOwnProperty(At))switch(At){case"selected":t.selected=!1;break;default:ns(t,s,At,null,r,we)}for(Q in r)if(we=r[Q],ke=o[Q],r.hasOwnProperty(Q)&&we!==ke&&(we!=null||ke!=null))switch(Q){case"selected":t.selected=we&&typeof we!="function"&&typeof we!="symbol";break;default:ns(t,s,Q,we,r,ke)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Xt in o)we=o[Xt],o.hasOwnProperty(Xt)&&we!=null&&!r.hasOwnProperty(Xt)&&ns(t,s,Xt,null,r,we);for(ye in r)if(we=r[ye],ke=o[ye],r.hasOwnProperty(ye)&&we!==ke&&(we!=null||ke!=null))switch(ye){case"children":case"dangerouslySetInnerHTML":if(we!=null)throw Error(a(137,s));break;default:ns(t,s,ye,we,r,ke)}return;default:if(Gn(s)){for(var ss in o)we=o[ss],o.hasOwnProperty(ss)&&we!==void 0&&!r.hasOwnProperty(ss)&&Mh(t,s,ss,void 0,r,we);for(Oe in r)we=r[Oe],ke=o[Oe],!r.hasOwnProperty(Oe)||we===ke||we===void 0&&ke===void 0||Mh(t,s,Oe,we,r,ke);return}}for(var le in o)we=o[le],o.hasOwnProperty(le)&&we!=null&&!r.hasOwnProperty(le)&&ns(t,s,le,null,r,we);for(Ue in r)we=r[Ue],ke=o[Ue],!r.hasOwnProperty(Ue)||we===ke||we==null&&ke==null||ns(t,s,Ue,we,r,ke)}function N0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,S=f.initiatorType,R=f.duration;if(m&&R&&N0(S)){for(S=0,R=f.responseEnd,r+=1;r<o.length;r++){var Q=o[r],ye=Q.startTime;if(ye>R)break;var Oe=Q.transferSize,Ue=Q.initiatorType;Oe&&N0(Ue)&&(Q=Q.responseEnd,S+=Oe*(Q<R?1:(R-ye)/(Q-ye)))}if(--r,s+=8*(m+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return s/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Eh=null,Th=null;function Uu(t){return t.nodeType===9?t:t.ownerDocument}function D0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R0(t,s){if(t===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&s==="foreignObject"?0:t}function Ah(t,s){return t==="textarea"||t==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Nh=null;function fv(){var t=window.event;return t&&t.type==="popstate"?t===Nh?!1:(Nh=t,!0):(Nh=null,!1)}var B0=typeof setTimeout=="function"?setTimeout:void 0,hv=typeof clearTimeout=="function"?clearTimeout:void 0,L0=typeof Promise=="function"?Promise:void 0,mv=typeof queueMicrotask=="function"?queueMicrotask:typeof L0<"u"?function(t){return L0.resolve(null).then(t).catch(pv)}:B0;function pv(t){setTimeout(function(){throw t})}function sr(t){return t==="head"}function O0(t,s){var o=s,r=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){t.removeChild(f),bl(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")_c(t.ownerDocument.documentElement);else if(o==="head"){o=t.ownerDocument.head,_c(o);for(var m=o.firstChild;m;){var S=m.nextSibling,R=m.nodeName;m[jo]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=S}}else o==="body"&&_c(t.ownerDocument.body);o=f}while(o);bl(s)}function z0(t,s){var o=t;t=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(t===0)break;t--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||t++;o=r}while(o)}function Dh(t){var s=t.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Dh(o),go(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}t.removeChild(o)}}function _v(t,s,o,r){for(;t.nodeType===1;){var f=o;if(t.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[jo])switch(s){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(s==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Wi(t.nextSibling),t===null)break}return null}function gv(t,s,o){if(s==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!o||(t=Wi(t.nextSibling),t===null))return null;return t}function $0(t,s){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Wi(t.nextSibling),t===null))return null;return t}function Rh(t){return t.data==="$?"||t.data==="$~"}function Bh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function yv(t,s){var o=t.ownerDocument;if(t.data==="$~")t._reactRetry=s;else if(t.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Wi(t){for(;t!=null;t=t.nextSibling){var s=t.nodeType;if(s===1||s===3)break;if(s===8){if(s=t.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return t}var Lh=null;function P0(t){t=t.nextSibling;for(var s=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"||o==="/&"){if(s===0)return Wi(t.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}t=t.nextSibling}return null}function I0(t){t=t.previousSibling;for(var s=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return t;s--}else o!=="/$"&&o!=="/&"||s++}t=t.previousSibling}return null}function H0(t,s,o){switch(s=Uu(o),t){case"html":if(t=s.documentElement,!t)throw Error(a(452));return t;case"head":if(t=s.head,!t)throw Error(a(453));return t;case"body":if(t=s.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function _c(t){for(var s=t.attributes;s.length;)t.removeAttributeNode(s[0]);go(t)}var Fi=new Map,U0=new Set;function Vu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var La=ne.d;ne.d={f:xv,r:bv,D:vv,C:wv,L:Sv,m:Cv,X:jv,S:kv,M:Mv};function xv(){var t=La.f(),s=Bu();return t||s}function bv(t){var s=as(t);s!==null&&s.tag===5&&s.type==="form"?ig(s):La.r(t)}var gl=typeof document>"u"?null:document;function V0(t,s,o){var r=gl;if(r&&typeof s=="string"&&s){var f=ms(s);f='link[rel="'+t+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),U0.has(f)||(U0.add(f),t={rel:t,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),Io(s,"link",t),nn(s),r.head.appendChild(s)))}}function vv(t){La.D(t),V0("dns-prefetch",t,null)}function wv(t,s){La.C(t,s),V0("preconnect",t,s)}function Sv(t,s,o){La.L(t,s,o);var r=gl;if(r&&t&&s){var f='link[rel="preload"][as="'+ms(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+ms(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+ms(o.imageSizes)+'"]')):f+='[href="'+ms(t)+'"]';var m=f;switch(s){case"style":m=yl(t);break;case"script":m=xl(t)}Fi.has(m)||(t=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:t,as:s},o),Fi.set(m,t),r.querySelector(f)!==null||s==="style"&&r.querySelector(gc(m))||s==="script"&&r.querySelector(yc(m))||(s=r.createElement("link"),Io(s,"link",t),nn(s),r.head.appendChild(s)))}}function Cv(t,s){La.m(t,s);var o=gl;if(o&&t){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+ms(r)+'"][href="'+ms(t)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=xl(t)}if(!Fi.has(m)&&(t=x({rel:"modulepreload",href:t},s),Fi.set(m,t),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(yc(m)))return}r=o.createElement("link"),Io(r,"link",t),nn(r),o.head.appendChild(r)}}}function kv(t,s,o){La.S(t,s,o);var r=gl;if(r&&t){var f=Ln(r).hoistableStyles,m=yl(t);s=s||"default";var S=f.get(m);if(!S){var R={loading:0,preload:null};if(S=r.querySelector(gc(m)))R.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":s},o),(o=Fi.get(m))&&Oh(t,o);var Q=S=r.createElement("link");nn(Q),Io(Q,"link",t),Q._p=new Promise(function(ye,Oe){Q.onload=ye,Q.onerror=Oe}),Q.addEventListener("load",function(){R.loading|=1}),Q.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Yu(S,s,r)}S={type:"stylesheet",instance:S,count:1,state:R},f.set(m,S)}}}function jv(t,s){La.X(t,s);var o=gl;if(o&&t){var r=Ln(o).hoistableScripts,f=xl(t),m=r.get(f);m||(m=o.querySelector(yc(f)),m||(t=x({src:t,async:!0},s),(s=Fi.get(f))&&zh(t,s),m=o.createElement("script"),nn(m),Io(m,"link",t),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function Mv(t,s){La.M(t,s);var o=gl;if(o&&t){var r=Ln(o).hoistableScripts,f=xl(t),m=r.get(f);m||(m=o.querySelector(yc(f)),m||(t=x({src:t,async:!0,type:"module"},s),(s=Fi.get(f))&&zh(t,s),m=o.createElement("script"),nn(m),Io(m,"link",t),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function Y0(t,s,o,r){var f=(f=he.current)?Vu(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=yl(o.href),o=Ln(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){t=yl(o.href);var m=Ln(f).hoistableStyles,S=m.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,S),(m=f.querySelector(gc(t)))&&!m._p&&(S.instance=m,S.state.loading=5),Fi.has(t)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Fi.set(t,o),m||Ev(f,t,o,S.state))),s&&r===null)throw Error(a(528,""));return S}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=xl(o),o=Ln(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function yl(t){return'href="'+ms(t)+'"'}function gc(t){return'link[rel="stylesheet"]['+t+"]"}function W0(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Ev(t,s,o,r){t.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=t.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),Io(s,"link",o),nn(s),t.head.appendChild(s))}function xl(t){return'[src="'+ms(t)+'"]'}function yc(t){return"script[async]"+t}function F0(t,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=t.querySelector('style[data-href~="'+ms(o.href)+'"]');if(r)return s.instance=r,nn(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),nn(r),Io(r,"style",f),Yu(r,o.precedence,t),s.instance=r;case"stylesheet":f=yl(o.href);var m=t.querySelector(gc(f));if(m)return s.state.loading|=4,s.instance=m,nn(m),m;r=W0(o),(f=Fi.get(f))&&Oh(r,f),m=(t.ownerDocument||t).createElement("link"),nn(m);var S=m;return S._p=new Promise(function(R,Q){S.onload=R,S.onerror=Q}),Io(m,"link",r),s.state.loading|=4,Yu(m,o.precedence,t),s.instance=m;case"script":return m=xl(o.src),(f=t.querySelector(yc(m)))?(s.instance=f,nn(f),f):(r=o,(f=Fi.get(m))&&(r=x({},o),zh(r,f)),t=t.ownerDocument||t,f=t.createElement("script"),nn(f),Io(f,"link",r),t.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Yu(r,o.precedence,t));return s.instance}function Yu(t,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,S=0;S<r.length;S++){var R=r[S];if(R.dataset.precedence===s)m=R;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(t,s.firstChild))}function Oh(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.title==null&&(t.title=s.title)}function zh(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.integrity==null&&(t.integrity=s.integrity)}var Wu=null;function X0(t,s,o){if(Wu===null){var r=new Map,f=Wu=new Map;f.set(o,r)}else f=Wu,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(t))return r;for(r.set(t,null),o=o.getElementsByTagName(t),f=0;f<o.length;f++){var m=o[f];if(!(m[jo]||m[Nt]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(s)||"";S=t+S;var R=r.get(S);R?R.push(m):r.set(S,[m])}}return r}function G0(t,s,o){t=t.ownerDocument||t,t.head.insertBefore(o,s==="title"?t.querySelector("head > title"):null)}function Tv(t,s,o){if(o===1||s.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return t=s.disabled,typeof s.precedence=="string"&&t==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function q0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Av(t,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=yl(r.href),m=s.querySelector(gc(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(t.count++,t=Fu.bind(t),s.then(t,t)),o.state.loading|=4,o.instance=m,nn(m);return}m=s.ownerDocument||s,r=W0(r),(f=Fi.get(f))&&Oh(r,f),m=m.createElement("link"),nn(m);var S=m;S._p=new Promise(function(R,Q){S.onload=R,S.onerror=Q}),Io(m,"link",r),o.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(t.count++,o=Fu.bind(t),s.addEventListener("load",o),s.addEventListener("error",o))}}var $h=0;function Nv(t,s){return t.stylesheets&&t.count===0&&Gu(t,t.stylesheets),0<t.count||0<t.imgCount?function(o){var r=setTimeout(function(){if(t.stylesheets&&Gu(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+s);0<t.imgBytes&&$h===0&&($h=62500*dv());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Gu(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>$h?50:800)+s);return t.unsuspend=o,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Fu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Xu=null;function Gu(t,s){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Xu=new Map,s.forEach(Dv,t),Xu=null,Fu.call(t))}function Dv(t,s){if(!(s.state.loading&4)){var o=Xu.get(t);if(o)var r=o.get(null);else{o=new Map,Xu.set(t,o);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var S=f[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(o.set(S.dataset.precedence,S),r=S)}r&&o.set(null,r)}f=s.instance,S=f.getAttribute("data-precedence"),m=o.get(S)||r,m===r&&o.set(null,f),o.set(S,f),this.count++,r=Fu.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),s.state.loading|=4}}var xc={$$typeof:z,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Rv(t,s,o,r,f,m,S,R,Q){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=un(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=un(0),this.hiddenUpdates=un(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Q,this.incompleteTransitions=new Map}function K0(t,s,o,r,f,m,S,R,Q,ye,Oe,Ue){return t=new Rv(t,s,o,S,Q,ye,Oe,Ue,R),s=1,m===!0&&(s|=24),m=Gt(3,null,null,s),t.current=m,m.stateNode=t,s=gf(),s.refCount++,t.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},vf(m),t}function Q0(t){return t?(t=ba,t):ba}function Z0(t,s,o,r,f,m){f=Q0(f),r.context===null?r.context=f:r.pendingContext=f,r=Fa(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Xa(t,r,s),o!==null&&(bi(o,t,s),Ql(o,t,s))}function J0(t,s){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<s?o:s}}function Ph(t,s){J0(t,s),(t=t.alternate)&&J0(t,s)}function ey(t){if(t.tag===13||t.tag===31){var s=ca(t,67108864);s!==null&&bi(s,t,67108864),Ph(t,67108864)}}function ty(t){if(t.tag===13||t.tag===31){var s=Di();s=dn(s);var o=ca(t,s);o!==null&&bi(o,t,s),Ph(t,s)}}var qu=!0;function Bv(t,s,o,r){var f=$.T;$.T=null;var m=ne.p;try{ne.p=2,Ih(t,s,o,r)}finally{ne.p=m,$.T=f}}function Lv(t,s,o,r){var f=$.T;$.T=null;var m=ne.p;try{ne.p=8,Ih(t,s,o,r)}finally{ne.p=m,$.T=f}}function Ih(t,s,o,r){if(qu){var f=Hh(r);if(f===null)jh(t,s,r,Ku,o),sy(t,r);else if(zv(f,t,s,o,r))r.stopPropagation();else if(sy(t,r),s&4&&-1<Ov.indexOf(t)){for(;f!==null;){var m=as(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=xt(m.pendingLanes);if(S!==0){var R=m;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var Q=1<<31-_e(S);R.entanglements[1]|=Q,S&=~Q}ha(m),(In&6)===0&&(Du=pt()+500,hc(0))}}break;case 31:case 13:R=ca(m,2),R!==null&&bi(R,m,2),Bu(),Ph(m,2)}if(m=Hh(r),m===null&&jh(t,s,r,Ku,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else jh(t,s,r,null,o)}}function Hh(t){return t=es(t),Uh(t)}var Ku=null;function Uh(t){if(Ku=null,t=Bo(t),t!==null){var s=u(t);if(s===null)t=null;else{var o=s.tag;if(o===13){if(t=d(s),t!==null)return t;t=null}else if(o===31){if(t=h(s),t!==null)return t;t=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;t=null}else s!==t&&(t=null)}}return Ku=t,null}function ny(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gt()){case Mt:return 2;case Bt:return 8;case ot:case F:return 32;case ee:return 268435456;default:return 32}default:return 32}}var Vh=!1,or=null,ir=null,ar=null,bc=new Map,vc=new Map,rr=[],Ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sy(t,s){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":bc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":vc.delete(s.pointerId)}}function wc(t,s,o,r,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=as(s),s!==null&&ey(s)),t):(t.eventSystemFlags|=r,s=t.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),t)}function zv(t,s,o,r,f){switch(s){case"focusin":return or=wc(or,t,s,o,r,f),!0;case"dragenter":return ir=wc(ir,t,s,o,r,f),!0;case"mouseover":return ar=wc(ar,t,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return bc.set(m,wc(bc.get(m)||null,t,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,vc.set(m,wc(vc.get(m)||null,t,s,o,r,f)),!0}return!1}function oy(t){var s=Bo(t.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){t.blockedOn=s,Pt(t.priority,function(){ty(o)});return}}else if(s===31){if(s=h(o),s!==null){t.blockedOn=s,Pt(t.priority,function(){ty(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qu(t){if(t.blockedOn!==null)return!1;for(var s=t.targetContainers;0<s.length;){var o=Hh(t.nativeEvent);if(o===null){o=t.nativeEvent;var r=new o.constructor(o.type,o);Eo=r,o.target.dispatchEvent(r),Eo=null}else return s=as(o),s!==null&&ey(s),t.blockedOn=o,!1;s.shift()}return!0}function iy(t,s,o){Qu(t)&&o.delete(s)}function $v(){Vh=!1,or!==null&&Qu(or)&&(or=null),ir!==null&&Qu(ir)&&(ir=null),ar!==null&&Qu(ar)&&(ar=null),bc.forEach(iy),vc.forEach(iy)}function Zu(t,s){t.blockedOn===s&&(t.blockedOn=null,Vh||(Vh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$v)))}var Ju=null;function ay(t){Ju!==t&&(Ju=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Ju===t&&(Ju=null);for(var s=0;s<t.length;s+=3){var o=t[s],r=t[s+1],f=t[s+2];if(typeof r!="function"){if(Uh(r||o)===null)continue;break}var m=as(o);m!==null&&(t.splice(s,3),s-=3,Hf(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function bl(t){function s(Q){return Zu(Q,t)}or!==null&&Zu(or,t),ir!==null&&Zu(ir,t),ar!==null&&Zu(ar,t),bc.forEach(s),vc.forEach(s);for(var o=0;o<rr.length;o++){var r=rr[o];r.blockedOn===t&&(r.blockedOn=null)}for(;0<rr.length&&(o=rr[0],o.blockedOn===null);)oy(o),o.blockedOn===null&&rr.shift();if(o=(t.ownerDocument||t).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],S=f[bn]||null;if(typeof m=="function")S||ay(o);else if(S){var R=null;if(m&&m.hasAttribute("formAction")){if(f=m,S=m[bn]||null)R=S.formAction;else if(Uh(f)!==null)continue}else R=S.action;typeof R=="function"?o[r+1]=R:(o.splice(r,3),r-=3),ay(o)}}}function ry(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Yh(t){this._internalRoot=t}ed.prototype.render=Yh.prototype.render=function(t){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=Di();Z0(o,r,t,s,null,null)},ed.prototype.unmount=Yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var s=t.containerInfo;Z0(t.current,2,null,t,null,null),Bu(),s[tt]=null}};function ed(t){this._internalRoot=t}ed.prototype.unstable_scheduleHydration=function(t){if(t){var s=Zt();t={blockedOn:null,target:t,priority:s};for(var o=0;o<rr.length&&s!==0&&s<rr[o].priority;o++);rr.splice(o,0,t),o===0&&oy(t)}};var ly=n.version;if(ly!=="19.2.4")throw Error(a(527,ly,"19.2.4"));ne.findDOMNode=function(t){var s=t._reactInternals;if(s===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=y(s),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Pv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var td=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!td.isDisabled&&td.supportsFiber)try{nt=td.inject(Pv),Ge=td}catch{}}return Cc.createRoot=function(t,s){if(!c(t))throw Error(a(299));var o=!1,r="",f=pg,m=_g,S=gg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(S=s.onRecoverableError)),s=K0(t,1,!1,null,null,o,r,null,f,m,S,ry),t[tt]=s.current,kh(t),new Yh(s)},Cc.hydrateRoot=function(t,s,o){if(!c(t))throw Error(a(299));var r=!1,f="",m=pg,S=_g,R=gg,Q=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(S=o.onCaughtError),o.onRecoverableError!==void 0&&(R=o.onRecoverableError),o.formState!==void 0&&(Q=o.formState)),s=K0(t,1,!0,s,o!=null?o:null,r,f,Q,m,S,R,ry),s.context=Q0(null),o=s.current,r=Di(),r=dn(r),f=Fa(r),f.callback=null,Xa(o,f,r),o=r,s.current.lanes=o,ut(s,o),ha(s),t[tt]=s.current,kh(t),new ed(s)},Cc.version="19.2.4",Cc}var yy;function Gv(){if(yy)return Fh.exports;yy=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Fh.exports=Xv(),Fh.exports}var qv=Gv();const Kv=Wx(qv);var _=vp();const Qv=Wx(_);function Zv(e,n,i,a){if(typeof n=="function"?e!==n||!a:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(e):a?a.value:n.get(e)}function Jv(e,n,i,a,c){if(typeof n=="function"?e!==n||!0:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(e,i),i}var Td;const Ki="__TAURI_TO_IPC_KEY__";function ew(e,n=!1){return window.__TAURI_INTERNALS__.transformCallback(e,n)}async function xe(e,n={},i){return window.__TAURI_INTERNALS__.invoke(e,n,i)}class tw{get rid(){return Zv(this,Td,"f")}constructor(n){Td.set(this,void 0),Jv(this,Td,n)}async close(){return xe("plugin:resources|close",{rid:this.rid})}}Td=new WeakMap;var Ri;(function(e){e.WINDOW_RESIZED="tauri://resize",e.WINDOW_MOVED="tauri://move",e.WINDOW_CLOSE_REQUESTED="tauri://close-requested",e.WINDOW_DESTROYED="tauri://destroyed",e.WINDOW_FOCUS="tauri://focus",e.WINDOW_BLUR="tauri://blur",e.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",e.WINDOW_THEME_CHANGED="tauri://theme-changed",e.WINDOW_CREATED="tauri://window-created",e.WEBVIEW_CREATED="tauri://webview-created",e.DRAG_ENTER="tauri://drag-enter",e.DRAG_OVER="tauri://drag-over",e.DRAG_DROP="tauri://drag-drop",e.DRAG_LEAVE="tauri://drag-leave"})(Ri||(Ri={}));async function Xx(e,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e,n),await xe("plugin:event|unlisten",{event:e,eventId:n})}async function $c(e,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return xe("plugin:event|listen",{event:e,target:c,handler:ew(n)}).then(u=>async()=>Xx(e,u))}async function nw(e,n,i){return $c(e,a=>{Xx(e,a.id),n(a)},i)}async function sw(e,n){await xe("plugin:event|emit",{event:e,payload:n})}async function ow(e,n,i){await xe("plugin:event|emit_to",{target:typeof e=="string"?{kind:"AnyLabel",label:e}:e,event:n,payload:i})}class Gx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new Pc(this.width*n,this.height*n)}[Ki](){return{width:this.width,height:this.height}}toJSON(){return this[Ki]()}}class Pc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Gx(this.width/n,this.height/n)}[Ki](){return{width:this.width,height:this.height}}toJSON(){return this[Ki]()}}class vl{constructor(n){this.size=n}toLogical(n){return this.size instanceof Gx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof Pc?this.size:this.size.toPhysical(n)}[Ki](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[Ki]()}}class qx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new fr(this.x*n,this.y*n)}[Ki](){return{x:this.x,y:this.y}}toJSON(){return this[Ki]()}}class fr{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new qx(this.x/n,this.y/n)}[Ki](){return{x:this.x,y:this.y}}toJSON(){return this[Ki]()}}class nd{constructor(n){this.position=n}toLogical(n){return this.position instanceof qx?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof fr?this.position:this.position.toPhysical(n)}[Ki](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[Ki]()}}class Ic extends tw{constructor(n){super(n)}static async new(n,i,a){return xe("plugin:image|new",{rgba:Id(n),width:i,height:a}).then(c=>new Ic(c))}static async fromBytes(n){return xe("plugin:image|from_bytes",{bytes:Id(n)}).then(i=>new Ic(i))}static async fromPath(n){return xe("plugin:image|from_path",{path:n}).then(i=>new Ic(i))}async rgba(){return xe("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return xe("plugin:image|size",{rid:this.rid})}}function Id(e){return e==null?null:typeof e=="string"?e:e instanceof Ic?e.rid:e}var $m;(function(e){e[e.Critical=1]="Critical",e[e.Informational=2]="Informational"})($m||($m={}));class iw{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var xy;(function(e){e.None="none",e.Normal="normal",e.Indeterminate="indeterminate",e.Paused="paused",e.Error="error"})(xy||(xy={}));function wp(){return new Kx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Qh(){return xe("plugin:window|get_all_windows").then(e=>e.map(n=>new Kx(n,{skip:!0})))}const Zh=["tauri://created","tauri://error"];class Kx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||xe("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Qh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return wp()}static async getAll(){return Qh()}static async getFocusedWindow(){for(const n of await Qh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:$c(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:nw(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Zh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return sw(n,i)}async emitTo(n,i,a){if(Zh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return ow(n,i,a)}_handleTauriEvent(n,i){return Zh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return xe("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return xe("plugin:window|inner_position",{label:this.label}).then(n=>new fr(n))}async outerPosition(){return xe("plugin:window|outer_position",{label:this.label}).then(n=>new fr(n))}async innerSize(){return xe("plugin:window|inner_size",{label:this.label}).then(n=>new Pc(n))}async outerSize(){return xe("plugin:window|outer_size",{label:this.label}).then(n=>new Pc(n))}async isFullscreen(){return xe("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return xe("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return xe("plugin:window|is_maximized",{label:this.label})}async isFocused(){return xe("plugin:window|is_focused",{label:this.label})}async isDecorated(){return xe("plugin:window|is_decorated",{label:this.label})}async isResizable(){return xe("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return xe("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return xe("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return xe("plugin:window|is_closable",{label:this.label})}async isVisible(){return xe("plugin:window|is_visible",{label:this.label})}async title(){return xe("plugin:window|title",{label:this.label})}async theme(){return xe("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return xe("plugin:window|is_always_on_top",{label:this.label})}async center(){return xe("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===$m.Critical?i={type:"Critical"}:i={type:"Informational"}),xe("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return xe("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return xe("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return xe("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return xe("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return xe("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return xe("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return xe("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return xe("plugin:window|maximize",{label:this.label})}async unmaximize(){return xe("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return xe("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return xe("plugin:window|minimize",{label:this.label})}async unminimize(){return xe("plugin:window|unminimize",{label:this.label})}async show(){return xe("plugin:window|show",{label:this.label})}async hide(){return xe("plugin:window|hide",{label:this.label})}async close(){return xe("plugin:window|close",{label:this.label})}async destroy(){return xe("plugin:window|destroy",{label:this.label})}async setDecorations(n){return xe("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return xe("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return xe("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return xe("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return xe("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return xe("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return xe("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return xe("plugin:window|set_size",{label:this.label,value:n instanceof vl?n:new vl(n)})}async setMinSize(n){return xe("plugin:window|set_min_size",{label:this.label,value:n instanceof vl?n:n?new vl(n):null})}async setMaxSize(n){return xe("plugin:window|set_max_size",{label:this.label,value:n instanceof vl?n:n?new vl(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return xe("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return xe("plugin:window|set_position",{label:this.label,value:n instanceof nd?n:new nd(n)})}async setFullscreen(n){return xe("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return xe("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return xe("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return xe("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return xe("plugin:window|set_icon",{label:this.label,value:Id(n)})}async setSkipTaskbar(n){return xe("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return xe("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return xe("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return xe("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return xe("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return xe("plugin:window|set_cursor_position",{label:this.label,value:n instanceof nd?n:new nd(n)})}async setIgnoreCursorEvents(n){return xe("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return xe("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return xe("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return xe("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return xe("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return xe("plugin:window|set_overlay_icon",{label:this.label,value:n?Id(n):void 0})}async setProgressBar(n){return xe("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return xe("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return xe("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return xe("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(Ri.WINDOW_RESIZED,i=>{i.payload=new Pc(i.payload),n(i)})}async onMoved(n){return this.listen(Ri.WINDOW_MOVED,i=>{i.payload=new fr(i.payload),n(i)})}async onCloseRequested(n){return this.listen(Ri.WINDOW_CLOSE_REQUESTED,async i=>{const a=new iw(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(Ri.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new fr(d.payload.position)}})}),a=await this.listen(Ri.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new fr(d.payload.position)}})}),c=await this.listen(Ri.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new fr(d.payload.position)}})}),u=await this.listen(Ri.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(Ri.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(Ri.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(Ri.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(Ri.WINDOW_THEME_CHANGED,n)}}var by;(function(e){e.Disabled="disabled",e.Throttle="throttle",e.Suspend="suspend"})(by||(by={}));var vy;(function(e){e.Default="default",e.FluentOverlay="fluentOverlay"})(vy||(vy={}));var wy;(function(e){e.AppearanceBased="appearanceBased",e.Light="light",e.Dark="dark",e.MediumLight="mediumLight",e.UltraDark="ultraDark",e.Titlebar="titlebar",e.Selection="selection",e.Menu="menu",e.Popover="popover",e.Sidebar="sidebar",e.HeaderView="headerView",e.Sheet="sheet",e.WindowBackground="windowBackground",e.HudWindow="hudWindow",e.FullScreenUI="fullScreenUI",e.Tooltip="tooltip",e.ContentBackground="contentBackground",e.UnderWindowBackground="underWindowBackground",e.UnderPageBackground="underPageBackground",e.Mica="mica",e.Blur="blur",e.Acrylic="acrylic",e.Tabbed="tabbed",e.TabbedDark="tabbedDark",e.TabbedLight="tabbedLight"})(wy||(wy={}));var Sy;(function(e){e.FollowsWindowActiveState="followsWindowActiveState",e.Active="active",e.Inactive="inactive"})(Sy||(Sy={}));async function aw(e={}){return typeof e=="object"&&Object.freeze(e),await xe("plugin:dialog|open",{options:e})}/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=(...e)=>e.filter((n,i,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===i).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,i,a)=>a?a.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=e=>{const n=lw(e);return n.charAt(0).toUpperCase()+n.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=_.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:u,iconNode:d,...h},p)=>_.createElement("svg",{ref:p,...cw,width:n,height:n,stroke:e,strokeWidth:a?Number(i)*24/Number(n):i,className:Qx("lucide",c),...!u&&!uw(h)&&{"aria-hidden":"true"},...h},[...d.map(([y,g])=>_.createElement(y,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=(e,n)=>{const i=_.forwardRef(({className:a,...c},u)=>_.createElement(dw,{ref:u,iconNode:n,className:Qx(`lucide-${rw(Cy(e))}`,`lucide-${e}`,a),...c}));return i.displayName=Cy(e),i};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Zx=ra("chevron-down",fw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],mw=ra("chevron-right",hw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],_w=ra("chevron-up",pw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],yw=ra("ellipsis",gw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],bw=ra("folder-git-2",xw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],Jx=ra("git-branch-plus",vw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],Sw=ra("git-commit-horizontal",ww);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],eb=ra("git-merge",Cw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],jw=ra("panel-left-close",kw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],Ew=ra("panel-left-open",Mw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Aw=ra("search",Tw),Nw=3.7,sd=200,Pm=240,Pn=540,Us=176,Jh=32,Ol=20,Dw=Pm/2,wl=Pn+Dw,Oa=18,za=18,em="var(--border)";function ky(e){var n,i;return{start:new Date((i=(n=e.createdDate)!=null?n:e.divergedFromDate)!=null?i:e.lastCommitDate).getTime(),end:new Date(e.lastCommitDate).getTime()}}function $r(e,n){var a,c,u,d;const i="branch"in n&&n.branch?n.branch:e;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,parentShas:"parentShas"in n?(a=n.parentShas)!=null?a:[]:n.parentSha?[n.parentSha]:[],childShas:"childShas"in n?(c=n.childShas)!=null?c:[]:[],clusterKey:"clusterKey"in n&&(u=n.clusterKey)!=null?u:null,kind:n.kind,isRemote:(d=n.isRemote)!=null?d:!1}}function $a(e){var n,i;return(i=(n=e.id)!=null?n:e.fullSha)!=null?i:""}function Oc(e,n){const i=new Date(e.date).getTime()-new Date(n.date).getTime();return i!==0?i:$a(e).localeCompare($a(n))}function tb(e){return[...e].sort(Oc)}function Rw(e){var h,p,y,g,x,b;if(e.length<=1)return[...e];const n=new Map(e.map(C=>[$a(C),C])),i=new Map,a=new Map;e.forEach(C=>i.set($a(C),0));for(const C of e){const M=((h=C.parentShas)!=null?h:[]).length>0?(p=C.parentShas)!=null?p:[]:C.parentSha?[C.parentSha]:[];for(const A of M){if(!A||!n.has(A))continue;const T=$a(C);i.set(T,((y=i.get(T))!=null?y:0)+1);const D=(g=a.get(A))!=null?g:[];D.push(C),a.set(A,D)}}for(const C of a.values())C.sort(Oc);const c=e.filter(C=>{var M;return((M=i.get($a(C)))!=null?M:0)===0}).sort(Oc),u=[],d=new Set;for(;c.length>0;){const C=c.shift(),M=$a(C);if(!d.has(M)){d.add(M),u.push(C);for(const A of(x=a.get(M))!=null?x:[]){const T=$a(A),D=((b=i.get(T))!=null?b:0)-1;i.set(T,D),D===0&&c.push(A)}c.sort(Oc)}}return u.length===e.length?u:[...u,...e.filter(C=>!d.has($a(C))).sort(Oc)]}function nb(e,n){var i;return tb(((i=n[e])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function sb(e,n,i){return nb(e,i)}function tm(e){var n;return e.length===0?null:(n=[...e].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function Bw(e,n){var u,d;if(!n||e.length===0)return tm(e);const i=new Date(n).getTime();if(!Number.isFinite(i))return tm(e);let a=null,c=null;for(const h of e){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const y=i-p;(!a||y<a.delta)&&(a={delta:y,commit:h})}else{const y=p-i;(!c||y<c.delta)&&(c={delta:y,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:tm(e)}function od(e,n,i){var c,u;if(!n)return null;const a=(c=e.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function Lw(e,n,i){var g,x,b,C,M,A,T;const a=sb(e,i,n);if(a.length===0)return null;const c=a.map(D=>$r(e,D)),u=new Set(c.map(D=>D.id)),d=(x=(g=c[0])==null?void 0:g.parentSha)!=null?x:null,h=(C=(b=c.find(D=>D.kind==="branch-created"))==null?void 0:b.id)!=null?C:null,p=(M=c[0])==null?void 0:M.date,y=c.find(D=>h&&D.id===h||d&&D.id===d?!0:!D.parentSha||!u.has(D.parentSha));return y||((T=(A=Bw(c,p!=null?p:void 0))!=null?A:c[0])!=null?T:null)}function Ow(e,n,i){var c,u,d,h,p;if(e.name===n)return null;const a=nb(e.name,i);if(a.length>0){const y=a.map(b=>$r(e.name,b)),g=new Set(y.map(b=>b.id)),x=(u=(c=y.find(b=>!b.parentSha||!g.has(b.parentSha)))!=null?c:y[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=e.presidesFromSha)!=null?d:e.divergedFromSha)!=null?h:e.createdFromSha)!=null?p:null}function Sp(e,n,i={},a={}){var de,pe,De,Xe;const u=new Map(e.map(ie=>[ie.name,ie])),d=new Map,h=new Map;for(const ie of e){const $=((de=i[ie.name])!=null?de:[]).filter(ne=>ne.kind!=="branch-created").map(ne=>new Date(ne.date).getTime()).filter(ne=>Number.isFinite(ne)).sort((ne,Y)=>ne-Y)[0];$!=null&&h.set(ie.name,$)}const p=ie=>{const oe=h.get(ie.name);return oe!=null?oe:ky(ie).start},y=ie=>{var $;const oe=($=a[ie.name])!=null?$:null;return oe&&oe!==ie.name&&(oe===n||u.has(oe))?oe:ie.name===n?null:ie.parentBranch&&ie.parentBranch!==ie.name&&(ie.parentBranch===n||u.has(ie.parentBranch))?ie.parentBranch:null};for(const ie of e){if(ie.name===n)continue;const oe=(pe=y(ie))!=null?pe:n,$=(De=d.get(oe))!=null?De:[];$.push(ie),d.set(oe,$)}for(const ie of d.values())ie.sort((oe,$)=>p(oe)-p($)||oe.name.localeCompare($.name));const g=new Map,x=[],b=new Map,C=new Map,M=new Map;for(const ie of Object.values(i))for(const oe of ie){const $=new Date(oe.date).getTime();Number.isFinite($)&&(oe.fullSha&&M.set(oe.fullSha,$),oe.sha&&M.set(oe.sha,$))}const A=(ie,oe)=>({start:Math.min(ie,oe),end:Math.max(ie,oe)}),T=ie=>{var te,be;const oe=A(p(ie),ky(ie).end),$=[oe],ne=oe.start,Y=Ow(ie,n,i),fe=Y?M.get(Y):void 0,Se=new Date((be=(te=ie.divergedFromDate)!=null?te:ie.createdDate)!=null?be:ie.lastCommitDate).getTime(),I=Number.isFinite(fe!=null?fe:NaN)?fe:Number.isFinite(Se)?Se:null;if(I==null)return $;const re=A(I,ne);return re.start!==re.end&&$.push(re),$},D=Math.max(1,360*60*1e3*Nw),V=(ie,oe)=>!(ie.start-oe.end>=D||oe.start-ie.end>=D),z=(ie,oe)=>oe.some($=>{var ne;return((ne=C.get(ie))!=null?ne:[]).some(Y=>V($,Y))}),N=(ie,oe=new Set)=>{const $=b.get(ie);if($!=null)return $;if(oe.has(ie))return 1;oe.add(ie);const ne=u.get(ie);if(!ne||ie===n)return oe.delete(ie),b.set(ie,0),0;const Y=y(ne),fe=Y?N(Y,oe)+1:1;return oe.delete(ie),b.set(ie,fe),fe},q=(ie,oe=new Set)=>{var he,ze;const $=g.get(ie);if($)return $.column;if(oe.has(ie))return 0;oe.add(ie);const ne=u.get(ie);if(!ne)return oe.delete(ie),0;if(ie===n){const Qe={name:ie,column:0,parentName:null};g.set(ie,Qe),x.push(Qe);const We=T(ne);return C.set(0,[...(he=C.get(0))!=null?he:[],...We]),oe.delete(ie),0}const Y=y(ne),fe=Y&&!oe.has(Y)?Y:null,Se=fe?q(fe,oe):0,I=Math.max(1,N(ie)),re=Math.max(fe?Se+1:1,I),te=T(ne);let be=re;for(;z(be,te);)be+=1;const Te={name:ie,column:be,parentName:fe};return g.set(ie,Te),x.push(Te),C.set(be,[...(ze=C.get(be))!=null?ze:[],...te]),oe.delete(ie),be};q(n);const G=e.filter(ie=>!g.has(ie.name)).sort((ie,oe)=>p(ie)-p(oe)||ie.name.localeCompare(oe.name)),W=G.filter(ie=>y(ie)!=null),Z=G.filter(ie=>y(ie)==null);for(const ie of W)q(ie.name);let ce=Math.max(0,...x.map(ie=>ie.column))+1+1;for(const ie of Z){const oe=T(ie);let $=ce;for(;z($,oe);)$+=1;const ne={name:ie.name,column:$,parentName:null};g.set(ie.name,ne),x.push(ne),C.set($,[...(Xe=C.get($))!=null?Xe:[],...oe]),ce=$+1}return x.sort((ie,oe)=>ie.column-oe.column||ie.name.localeCompare(oe.name))}function zw(e,n,i,a){const c=new Map(e.map(h=>[h.name,h])),u=h=>{var y;const p=(y=i[h.name])!=null?y:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of e){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const id=2.25,ta=0,nm=0,$w=3600*1e3,Pw=3600*1e3,Xi=e=>{const n=e?new Date(e).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Ho=(e,n)=>!e||!n?!1:e===n||e.startsWith(n)||n.startsWith(e);function jy(e,n,i=new Map){var Z,ce,de,pe,De,Xe,ie,oe,$,ne,Y,fe,Se,I,re;if(e.length===0)return new Map;const a=[...e].sort((te,be)=>{const Te=Xi(te.date)-Xi(be.date);return Te!==0?Te:te.id!==be.id?te.id.localeCompare(be.id):te.visualId.localeCompare(be.visualId)}),c=new Map;for(const te of e){const be=(Z=te.parentSha)!=null?Z:null;if(be){const Te=(ce=c.get(be))!=null?ce:new Set;Te.add(te.id),c.set(be,Te)}for(const Te of(de=i.get(te.id))!=null?de:[]){if(!Te)continue;const he=(pe=c.get(Te))!=null?pe:new Set;he.add(te.id),c.set(Te,he)}}const u=new Map,d=new Map,h=new Map,p=new Set,y=new Map,g=new Map,x=new Map,b=new Map;for(const te of e){const be=(De=y.get(te.branchName))!=null?De:new Set;be.add(te.id),y.set(te.branchName,be);const Te=(ie=(Xe=n.get(te.branchName))==null?void 0:Xe.column)!=null?ie:0,he=(oe=g.get(te.id))!=null?oe:new Set;he.add(Te),g.set(te.id,he);const ze=new Set;te.parentSha&&ze.add(te.parentSha),x.set(te.visualId,ze);const Qe=new Set(ze);for(const We of($=i.get(te.id))!=null?$:[])We&&Qe.add(We);b.set(te.visualId,Qe)}const C=new Set(Array.from(g.keys())),M=Array.from(C),A=new Map,T=te=>{const be=[];for(const Te of M)Ho(Te,te)&&be.push(Te);return be},D=new Map;for(const te of M)D.set(te,new Set);for(const te of e){const be=T(te.id);if(be.length===0)continue;const Te=(ne=b.get(te.visualId))!=null?ne:new Set,he=new Set;for(const ze of Te)for(const Qe of T(ze))he.add(Qe);for(const ze of be){const Qe=(Y=D.get(ze))!=null?Y:new Set;for(const We of he)Qe.add(We);D.set(ze,Qe)}}const V=new Map,z=(te,be=new Set)=>{var Qe;const Te=V.get(te);if(Te)return Te;if(be.has(te))return new Set;be.add(te);const he=(Qe=D.get(te))!=null?Qe:new Set,ze=new Set;for(const We of he){ze.add(We);for(const ht of z(We,be))ze.add(ht)}return be.delete(te),V.set(te,ze),ze},N=(te,be)=>{if(Ho(te,be))return!0;const Te=T(te),he=T(be);for(const ze of Te){const Qe=z(ze);for(const We of he)if(Qe.has(We))return!0}for(const ze of he){const Qe=z(ze);for(const We of Te)if(Qe.has(We))return!0}return!1};let q=1;const G=(te,be)=>{var rt,Ce,mt,He,pt,gt,Mt,Bt,ot;const Te=(Ce=(rt=n.get(te.branchName))==null?void 0:rt.column)!=null?Ce:0,he=(mt=y.get(te.branchName))!=null?mt:new Set,Qe=!(!!te.parentSha&&he.has(te.parentSha))&&te.parentSha?te.parentSha:null,We=Array.from(be).flatMap(F=>T(F).flatMap(ee=>{var ve;return(ve=A.get(ee))!=null?ve:[]})),ht=(te.kind==="branch-created"||te.kind==="stash")&&We.length>0?Math.max(...We)+1:null,jt=We.length>0?Math.max(...We)+1:1,vt=(He=c.get(te.id))!=null?He:new Set,Rt=Array.from(vt).flatMap(F=>{var ee;return Array.from((ee=g.get(F))!=null?ee:[])}).some(F=>F!==Te),dt=new Date(te.date).getTime(),qt=Math.max(jt,1);let Kt=null;for(let F=qt;F<q;F+=1){const ee=(pt=d.get(F))!=null?pt:[];if(ee.length===0||Rt||p.has(F))continue;const ve=(gt=b.get(te.visualId))!=null?gt:new Set;if(!(ee.some(Le=>N(te.id,Le.sha)?!0:Array.from(ve).some(Ze=>Ho(Ze,Le.sha)))||ee.some(Le=>Le.column===Te)||!Number.isFinite(dt)||!ee.every(Le=>{if(!Number.isFinite(Le.time))return!1;const Ze=!!Qe&&!!Le.branchEntryParentSha&&Qe===Le.branchEntryParentSha?Pw:$w;return Math.abs(Le.time-dt)<=Ze}))){Kt=F;break}}ht!=null&&(Kt=ht),Kt==null&&(Kt=Math.max(jt,q)),u.set(te.visualId,Kt),Kt>=q&&(q=Kt+1);const J=(Mt=d.get(Kt))!=null?Mt:[];J.push({visualId:te.visualId,sha:te.id,column:Te,time:dt,branchEntryParentSha:Qe}),d.set(Kt,J),Rt&&p.add(Kt);for(const F of be){const ee=(Bt=h.get(F))!=null?Bt:[];ee.push(Kt),h.set(F,ee)}const Re=(ot=A.get(te.id))!=null?ot:[];Re.push(Kt),A.set(te.id,Re)};for(const te of a){const be=(fe=x.get(te.visualId))!=null?fe:new Set;G(te,be)}const W=Math.max(1,a.length*2);for(let te=0;te<W;te+=1){let be=!1;for(const Te of a){const he=(Se=x.get(Te.visualId))!=null?Se:new Set;if(he.size===0)continue;const ze=(I=u.get(Te.visualId))!=null?I:1;let Qe=1;for(const We of he){const ht=T(We).flatMap(jt=>{var vt;return(vt=A.get(jt))!=null?vt:[]});ht.length>0&&(Qe=Math.max(Qe,Math.max(...ht)+1))}if(ze<Qe){u.set(Te.visualId,Qe);const We=(re=A.get(Te.id))!=null?re:[];We.length===0?A.set(Te.id,[Qe]):A.set(Te.id,[...We.slice(0,-1),Qe]),be=!0}}if(!be)break}return u}function Cp(e){var ps,oo,Jt,Ci,Gn,Li,xo,As,ls,Eo,es,Tn,bo,di,Os,To,xn,Xs,zs,Qo,Ns,Zo,Lo,Oi,io,Ao,Jo,Un,Cs,No,ao,ro,jn,$s,Rn,Ps,Vo,Yo,zi,ei,xs,Gs,qn,$i,ki,ti,Lt,vo,qs,fi,ni,Oo,ji,Qi,Zi;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,unpushedCommitShasByBranch:d={},defaultBranch:h,branchCommitPreviews:p,branchParentByName:y={},branchUniqueAheadCounts:g,manuallyOpenedClumps:x,manuallyClosedClumps:b,isDebugOpen:C,gridSearchQuery:M,gridFocusSha:A,checkedOutRef:T,orientation:D="horizontal",nodePositionOverrides:V={}}=e,z=D==="horizontal",N=new Map(i.map(E=>[E.name,E])),q=new Map(n.map(E=>[E.name,E])),G=Rw([...a.map(E=>{var X,ue,je,Ve;return{id:E.fullSha,branchName:h,message:(X=E.prTitle)!=null?X:E.sha,author:"",date:E.date,parentSha:(je=(ue=E.parentShas)==null?void 0:ue[0])!=null?je:null,parentShas:(Ve=E.parentShas)!=null?Ve:[]}}),...((ps=p[h])!=null?ps:[]).map(E=>$r(h,E)),...c.map(E=>$r(E.branch||"",E)),...u.map(E=>$r(E.branch||"",E))]),W=new Map,Z=new Map;for(const E of i){if(E.name===h)continue;const X=sb(E.name,g,p);Z.set(E.name,X);const ue=tb(X.map(Ht=>$r(E.name,Ht)));if(ue.length>0){W.set(E.name,ue);continue}const je=(Ci=(Jt=(oo=E.presidesFromSha)!=null?oo:E.divergedFromSha)!=null?Jt:E.createdFromSha)!=null?Ci:null;if(!je)continue;const Ve=(Gn=c.find(Ht=>Ho(Ht.fullSha,je)||Ho(Ht.sha,je)))==null?void 0:Gn.date,at=Ve?null:(Li=Object.values(p).flat().find(Ht=>Ho(Ht.fullSha,je)||Ho(Ht.sha,je)))==null?void 0:Li.date,Yt={id:`BRANCH_HEAD:${E.name}:${je}`,branchName:E.name,message:`Branch ${E.name}`,author:E.lastCommitAuthor,date:(ls=(As=(xo=Ve!=null?Ve:at)!=null?xo:E.createdDate)!=null?As:E.divergedFromDate)!=null?ls:E.lastCommitDate,parentSha:je,clusterKey:null,childShas:[],kind:"branch-created"};W.set(E.name,[Yt])}const ce=new Set(G.map(E=>E.id)),de=(Eo=[...G].sort((E,X)=>Xi(E.date)-Xi(X.date)||E.id.localeCompare(X.id))[0])!=null?Eo:null,pe=new Map(Array.from(W.entries()).map(([E,X])=>[E,new Set(X.map(ue=>ue.id))])),De=new Map;for(const E of i){if(E.name===h)continue;const X=Lw(E.name,p,g);if(X){De.set(E.name,X);continue}const ue=(es=W.get(E.name))==null?void 0:es[0];if(ue){const je=(di=(bo=(Tn=E.presidesFromSha)!=null?Tn:E.divergedFromSha)!=null?bo:E.createdFromSha)!=null?di:null;De.set(E.name,{...ue,parentSha:je})}}const Xe=new Map;for(const[E,X]of W.entries()){const ue=X.find(je=>je.kind!=="branch-created");ue&&Xe.set(E,ue)}const ie=new Map;for(const[E,X]of W.entries()){const ue=X.filter(at=>at.kind!=="branch-created"),Ve=(Os=(ue.length>0?ue:X)[0])!=null?Os:null;Ve&&ie.set(E,Ve)}const oe=new Map;for(const E of i){if(E.name===h)continue;const X=(To=ie.get(E.name))!=null?To:null,ue=(Xs=(xn=De.get(E.name))==null?void 0:xn.parentSha)!=null?Xs:null,je=(Ns=(Qo=(zs=E.presidesFromSha)!=null?zs:E.divergedFromSha)!=null?Qo:E.createdFromSha)!=null?Ns:null,Ve=(Zo=X==null?void 0:X.parentSha)!=null?Zo:null,at=(Lo=Ve!=null?Ve:ue)!=null?Lo:je;at&&oe.set(E.name,at)}const $=E=>{var at,Yt,Ht,Ft,hn,vn,rn,Vn;const X=(at=y[E.name])!=null?at:null;if(!(X&&X!==h&&X!==E.name&&N.has(X)))return X!=null?X:"";const je=(Ft=(Ht=(Yt=oe.get(E.name))!=null?Yt:E.presidesFromSha)!=null?Ht:E.divergedFromSha)!=null?Ft:E.createdFromSha;if(je&&((hn=pe.get(X))!=null?hn:new Set).has(je))return X;const Ve=(rn=(vn=De.get(E.name))==null?void 0:vn.parentSha)!=null?rn:null;return Ve&&((Vn=pe.get(X))!=null?Vn:new Set).has(Ve),X},ne=E=>{var Ve,at,Yt,Ht,Ft,hn,vn,rn;const X=De.get(E.name),ue=(Ft=(Ht=(Yt=(at=(Ve=oe.get(E.name))!=null?Ve:X==null?void 0:X.parentSha)!=null?at:E.presidesFromSha)!=null?Yt:E.divergedFromSha)!=null?Ht:E.createdFromSha)!=null?Ft:null;if(!E.parentBranch&&!ue||!ue)return null;if($(E)===h){if(ce.has(ue))return ue;const Vn=(hn=X==null?void 0:X.parentSha)!=null?hn:null;return Vn&&ce.has(Vn)?Vn:(rn=(vn=de==null?void 0:de.id)!=null?vn:Vn)!=null?rn:ue}return ce.has(ue),ue},Y=E=>ne(E),fe=new Map;for(const E of[...c,...u]){const X={...$r(E.branch||"",E),visualId:`${E.branch||""}:${E.fullSha}`};fe.set(E.fullSha,X)}const Se=new Map(fe),I=E=>{Se.has(E.id)||Se.set(E.id,E)},re=new Map(Object.entries(d).map(([E,X])=>[E,new Set(X)])),te=new Map(Array.from(W.entries()).map(([E,X])=>[E,new Set(X.map(ue=>ue.id))])),be=new Set;for(const E of te.values())for(const X of E)be.add(X);for(const E of G)be.has(E.id)||I({...E,visualId:`${E.branchName}:${E.id}`});for(const[E,X]of W.entries())for(const ue of X)I({...ue,visualId:`${E}:${ue.id}`});const he=[...Array.from(Se.values()).map(E=>({...E,visualId:`${E.branchName}:${E.id}`}))].sort((E,X)=>Xi(E.date)-Xi(X.date)||E.id.localeCompare(X.id)),ze=new Map;for(const E of he){const X=(Oi=ze.get(E.branchName))!=null?Oi:new Set;X.add(E.id),ze.set(E.branchName,X)}const Qe=(E,X)=>{const ue=ze.get(E);if(!ue||ue.size===0)return!1;for(const je of ue)if(Ho(je,X))return!0;return!1},We=(E,X)=>{const ue=Array.from(ze.entries()).filter(([je])=>je!==X).filter(([,je])=>Array.from(je).some(Ve=>Ho(Ve,E))).map(([je])=>je);return ue.length>0?ue.sort()[0]:E.slice(0,7)},ht=[],jt=new Map,vt=new Map;for(const E of a){const X=E.fullSha,ue=E.targetBranch,je=E.targetCommitSha;if(!X||!ue||!je||!Qe(ue,je))continue;const Ve=((io=E.parentShas)!=null?io:[]).slice(1).filter(Yt=>!!Yt&&!Ho(Yt,X));if(Ve.length===0)continue;const at=(Ao=vt.get(X))!=null?Ao:new Set;for(const Yt of Ve){at.add(Yt);const Ht=We(Yt,ue);ht.push({sourceCommitSha:Yt,sourceBranchName:Ht,mergeCommitSha:X,targetCommitSha:je,targetBranchName:ue});const Ft=(Jo=jt.get(Ht))!=null?Jo:new Map,hn=(Un=Ft.get(Yt))!=null?Un:new Set;hn.add(ue),Ft.set(Yt,hn),jt.set(Ht,Ft)}vt.set(X,at)}const st=new Map;for(const E of i){if(E.name===h)continue;const X=ne(E);X&&st.set(E.name,X)}const Rt=new Map;for(const E of he){const X=vt.get(E.id);if(X&&X.size>0){const Ve=(Cs=Rt.get(E.id))!=null?Cs:new Set;for(const at of X)Ve.add(at);Rt.set(E.id,Ve)}if(E.branchName===h)continue;const ue=st.get(E.branchName);if(!ue||ue===E.id)continue;const je=(No=Rt.get(E.id))!=null?No:new Set;je.add(ue),Rt.set(E.id,je)}const dt=new Map,qt=new Map;for(const E of he){if(qt.set(E.id,E),E.parentSha){const X=(ao=dt.get(E.parentSha))!=null?ao:new Set;X.add(E.id),dt.set(E.parentSha,X)}for(const X of(ro=Rt.get(E.id))!=null?ro:[]){if(!X)continue;const ue=(jn=dt.get(X))!=null?jn:new Set;ue.add(E.id),dt.set(X,ue)}}const Kt=new Map;for(const[E,X]of dt.entries())Kt.set(E,Array.from(X));const J=new Set(["branch-created","stash"]),Re=new Set,rt=E=>{if(!E)return null;const X=he.find(ue=>Ho(ue.id,E)||Ho(ue.visualId.split(":").slice(1).join(":"),E));return X!=null?X:null};for(const E of he){if(E.parentSha){const ue=rt(E.parentSha),je=!!ue&&Re.has(ue.visualId);ue&&(E.kind==="stash"||E.kind==="branch-created"||je)&&Re.add(ue.visualId)}const X=($s=dt.get(E.id))!=null?$s:new Set;(X.size>1||Array.from(X).map(ue=>qt.get(ue)).some(ue=>ue!=null&&ue.kind!=null&&J.has(ue.kind)))&&Re.add(E.visualId)}const Ce=he.map(E=>{var X,ue;return{...E,childShas:(ue=(X=Kt.get(E.id))!=null?X:E.childShas)!=null?ue:[]}}),mt=jy(Ce,q,Rt),He=new Map;for(const E of Ce){const X=(Rn=He.get(E.branchName))!=null?Rn:[];X.push(E),He.set(E.branchName,X)}const pt=new Map,gt=new Map,Mt=new Map,Bt=new Map,ot=new Map,F=(E,X)=>{var hn,vn,rn,Vn,gn;if(X.length===0)return[];const ue=[...X].sort((Vt,An)=>{var en,Ds;const ks=(en=mt.get(Vt.visualId))!=null?en:Number.MAX_SAFE_INTEGER,wo=(Ds=mt.get(An.visualId))!=null?Ds:Number.MAX_SAFE_INTEGER;return ks!==wo?ks-wo:Xi(Vt.date)-Xi(An.date)||Vt.id.localeCompare(An.id)}),je=new Map;let Ve=null,at=0;const Yt=Vt=>{if(Vt.kind==="uncommitted")return"uncommitted";if(Vt.kind==="stash")return"stash";if(Vt.kind==="branch-created")return"branch-created";const An=re.get(Vt.branchName);return An!=null&&An.has(Vt.id)?"unpushed":"pushed"};let Ht=null;for(const Vt of ue){const An=Vt.kind==="stash"||Vt.kind==="branch-created",ks=Re.has(Vt.visualId);if(An)continue;const wo=Yt(Vt);(!Ve||Ht!=null&&Ht!==wo)&&(at+=1,Ve=`cluster:${E}:segment:${at}`);const en=(hn=je.get(Ve))!=null?hn:[];en.push(Vt),je.set(Ve,en),ks&&(Ve=null),Ht=wo}const Ft=[];for(const[Vt,An]of je.entries()){if(An.length===0)continue;const wo=[...An].sort((lo,co)=>{var Wo,Fo;const So=(Wo=mt.get(lo.visualId))!=null?Wo:Number.MIN_SAFE_INTEGER,hi=(Fo=mt.get(co.visualId))!=null?Fo:Number.MIN_SAFE_INTEGER;return So!==hi?hi-So:Xi(co.date)-Xi(lo.date)||co.id.localeCompare(lo.id)})[0].visualId,en={branchName:E,key:Vt,commitIds:An.map(lo=>lo.visualId),leadId:wo,count:An.length};Ft.push(en);const Ds=(vn=ot.get(Vt))!=null?vn:0;if(!Bt.has(Vt))Bt.set(Vt,wo);else{const lo=Bt.get(Vt),co=qt.get(lo.split(":").slice(1).join(":"));if(co){const So=(rn=mt.get(co.visualId))!=null?rn:Number.MIN_SAFE_INTEGER;((Vn=mt.get(wo))!=null?Vn:Number.MIN_SAFE_INTEGER)>So&&Bt.set(Vt,wo)}}ot.set(Vt,Math.max(Ds,An.length));for(const lo of en.commitIds){gt.set(lo,Vt);const co=lo.split(":").slice(1).join(":"),So=(gn=Mt.get(co))!=null?gn:[];So.includes(Vt)||So.push(Vt),Mt.set(co,So)}}return Ft};for(const[E,X]of He.entries())pt.set(E,F(E,X));const ee=new Map;for(const E of Ce)ee.set(E.id,E);const ve=E=>{if(!E)return"none";const X=Array.from(ee.values()).find(ue=>Ho(ue.id,E)||Ho(ue.id.slice(0,7),E)||Ho(E,ue.id));return X?`${X.id.slice(0,7)} ${X.branchName}`:E.slice(0,7)},Me=C?["Lane rows (expected):",...[...n].sort((E,X)=>E.column-X.column||E.name.localeCompare(X.name)).map(E=>{var X;return`  row=${E.column} branch=${E.name} parent=${(X=E.parentName)!=null?X:"none"}`}),"",...i.flatMap(E=>{var Yt,Ht,Ft,hn,vn,rn,Vn,gn;const X=(Yt=p[E.name])!=null?Yt:[],ue=[...(Ht=Z.get(E.name))!=null?Ht:[]].reverse(),je=new Set(((Ft=W.get(E.name))!=null?Ft:[]).map(Vt=>Vt.id)),Ve=(vn=(hn=ue.find(Vt=>!Vt.parentSha||!ue.some(An=>{var ks;return Ho(An.fullSha,(ks=Vt.parentSha)!=null?ks:"")})))!=null?hn:ue[0])!=null?vn:null,at=(Vn=(rn=Ve==null?void 0:Ve.parentSha)!=null?rn:oe.get(E.name))!=null?Vn:null;return[`Branch ${E.name}`,`  ahead=${(gn=g[E.name])!=null?gn:0} previews=${ue.length} rendered=${je.size}`,`  db parent commit=${ve(at)}`,`  db child commit=${Ve?`${Ve.fullSha.slice(0,7)} ${E.name}`:"none"}`,...ue.map(Vt=>{const An=je.has(Vt.fullSha)?"visible":"hidden",ks=je.has(Vt.fullSha)?"kept by render set":"dropped by render set";return`  ${An} ${Vt.fullSha.slice(0,7)} ${Vt.message} [${ks}]`}),X.length===0?"  no preview data":null].filter(Vt=>Vt!=null)})]:[],nt=C?Array.from(W.entries()).map(([E,X])=>[`Branch debug ${E}`,...X.map(ue=>`  ${ue.id.slice(0,7)} ${ue.message}`)].join(`
`)):[],Ge=mt,Le=Pm/id,_e=20/id,Ze=z?Pn+Le+_e:sd+Le+_e,Ye=z?sd+Le+_e:wl,Je=Math.max(0,...Ce.map(E=>{var X;return(X=Ge.get(E.visualId))!=null?X:1})),Be=Ce.map(E=>{var Ve,at;const X=q.get(E.branchName),ue=(Ve=Ge.get(E.visualId))!=null?Ve:1,je=(at=X==null?void 0:X.column)!=null?at:0;return z?{commit:E,row:ue,column:je,x:za+(ue-1)*Ze,y:Oa+je*Ye}:{commit:E,row:ue,column:je,x:za+je*wl,y:Oa+(Je-ue)*Ze}}),et=E=>{var ue;const X=(ue=V[E.commit.visualId])!=null?ue:V[E.commit.id];return X?{...E,x:X.x,y:X.y}:E},yt=Be.map(et),xt=M.trim().toLowerCase(),Ke=xt?yt.filter(E=>{const X=E.commit.id.toLowerCase(),ue=E.commit.id.slice(0,7).toLowerCase(),je=E.commit.message.toLowerCase(),Ve=E.commit.branchName.toLowerCase();return X.includes(xt)||ue.includes(xt)||je.includes(xt)||Ve.includes(xt)}):yt,Ot=A&&(Ps=yt.find(E=>E.commit.id===A))!=null?Ps:null,wt=new Set(Ke.map(E=>E.commit.id)),ft=(Vo=T==null?void 0:T.headSha)!=null?Vo:null,un=(()=>{var X,ue;const E=(X=T==null?void 0:T.branchName)!=null?X:null;return!ft||!E?null:(ue=gt.get(`${E}:${ft}`))!=null?ue:null})(),ut=new Set;for(const[E,X]of ot.entries())X>1&&E!==un&&ut.add(E);const It=[...he].filter(E=>{var at;const X=gt.get(E.visualId);if(!X)return!0;const ue=Bt.get(X),je=(at=ot.get(X))!=null?at:1,Ve=x.has(X)||!ut.has(X)&&!b.has(X);return je<=1||Ve||ue===E.visualId}),_n=jy(It,q,Rt),Tt=Pm/id,bt=20/id,dn=z?Pn+Tt+bt:sd+Tt+bt,sn=z?sd+Tt+bt:wl,Zt=Math.max(0,...he.map(E=>{var X;return(X=mt.get(E.visualId))!=null?X:1})),Pt=Math.max(0,...It.map(E=>{var X;return(X=_n.get(E.visualId))!=null?X:1})),tn=Math.max(0,Zt-Pt),bn=[...It.map(E=>{var Ve,at;const X=q.get(E.branchName),ue=(Ve=_n.get(E.visualId))!=null?Ve:1,je=(at=X==null?void 0:X.column)!=null?at:0;return et(z?{commit:E,row:ue,column:je,x:za+(tn+ue-1)*dn,y:Oa+je*sn}:{commit:E,row:ue,column:je,x:za+je*wl,y:Oa+(Pt-ue)*dn})})].sort((E,X)=>E.row!==X.row?E.row-X.row:E.column!==X.column?E.column-X.column:E.commit.visualId.localeCompare(X.commit.visualId)).map(E=>({...E})),tt=new Set;for(const E of bn){let X=E.row,ue=`${E.column}:${X}`;for(;tt.has(ue);)X+=1,ue=`${E.column}:${X}`;E.row=X,tt.add(ue)}const ds=Math.max(0,...bn.map(E=>E.row));for(const E of bn){if(z){E.x=za+(tn+E.row-1)*dn,E.y=Oa+E.column*sn;continue}E.x=za+E.column*wl,E.y=Oa+(ds-E.row)*dn}const fs=new Map;for(const E of bn){const X=(Yo=fs.get(E.commit.id))!=null?Yo:[];X.push(E),fs.set(E.commit.id,X)}const Ro=new Map;for(const E of bn){const X=gt.get(E.commit.visualId);if(!X)continue;const ue=Ro.get(X);(!ue||(z?E.x>ue.x:E.y<ue.y))&&Ro.set(X,E)}const no=(E,X)=>`${E.toFixed(1)} ${X.toFixed(1)}`,jo=Math.max(0,...bn.map(E=>E.row)),go=Math.max(0,...n.map(E=>E.column)),Bo=Math.max(0,...bn.map(E=>E.x+Pn)),as=Math.max(0,...bn.map(E=>E.y+Ol+Us)),Qt=Math.max(z?za*2+Math.max(0,jo-1)*dn+Pn+Jh+bt:za*2+(go+1)*wl,Bo+za),Ln=Math.max(z?Oa*2+go*sn+Us+Jh+bt:Oa*2+Math.max(0,jo-1)*dn+Us+Jh+bt,as+Oa),nn=[],rs=new Map(i.map(E=>{var ue,je;const X=new Date((je=(ue=E.createdDate)!=null?ue:E.divergedFromDate)!=null?je:E.lastCommitDate).getTime();return[E.name,Number.isFinite(X)?X:0]})),gs=E=>{var X;return(X=rs.get(E))!=null?X:0},ys=[],on=E=>{C&&ys.push(E)},Ts=new Set,Rs=new Map,hs=(E,X)=>{var je;const ue=(je=Rs.get(E))!=null?je:[];ue.includes(X)||ue.push(X),Rs.set(E,ue)},yo=new Set,so=new Set,Yn=new Set,Ys=(E,X)=>{var Ve,at;if(!E)return null;const ue=od(fs,E,X);if(ue)return ue;const je=(Ve=gt.get(`${X!=null?X:h}:${E}`))!=null?Ve:gt.get(E);return je&&(at=Ro.get(je))!=null?at:null},an=new Set;for(const E of i){const X=Y(E);X&&so.add(X);const ue=(zi=oe.get(E.name))!=null?zi:null;ue&&Yn.add(ue)}const Ws=E=>{var Ve;const X=Ys(E.id,E.branchName);if(X)return X;const ue=gt.get(E.visualId);if(!ue)return null;const je=Bt.get(ue);return je&&(Ve=bn.find(at=>at.commit.id===je))!=null?Ve:null},Si=(E,X)=>E?od(fs,E,X):null,Ss=(E,X)=>z?{x:E.x-ta,y:E.y+Us/2,face:"left"}:{x:E.x+Pn/2,y:E.y+Us+ta,face:"bottom"},Mo=E=>z?{x:E.x-ta,y:E.y+Us/2,face:"left"}:{x:E.x+Pn/2,y:E.y+Us+ta,face:"bottom"},Bs=(E,X)=>E.column!==X.column?!0:z?E.commit.branchName!==X.commit.branchName:!1,Wn=(E,X,ue)=>{if(!z)return{x:X?E.x+Pn:E.x+Pn/2,y:X?E.y+Us/2:E.y,face:X?"right":"top"};if(!X)return{x:E.x+Pn+ta,y:E.y+Us/2,face:"right"};if(ue&&ue.column===E.column&&ue.commit.branchName!==E.commit.branchName){if(ue.x>E.x)return{x:E.x+Pn/2,y:E.y+Us+ta,face:"bottom"};if(ue.x<E.x)return{x:E.x+Pn/2,y:E.y-ta,face:"top"}}return!ue||ue.column===E.column?{x:E.x+Pn+ta,y:E.y+Us/2,face:"right"}:ue.column>E.column?{x:E.x+Pn/2,y:E.y+Us+ta,face:"bottom"}:{x:E.x+Pn/2,y:E.y-ta,face:"top"}},ms=E=>z?{x:E.x+Pn/2,y:E.y+Us+ta,face:"bottom"}:{x:E.x+Pn,y:E.y+Us/2,face:"right"},Fs=(E,X)=>od(fs,E,X),On=(E,X)=>Si(E,X),Ls=[],Fn=new Set;for(const E of ht){const X=(ei=Ys(E.targetCommitSha,E.targetBranchName))!=null?ei:null;if(!X){on({id:`merge:${E.mergeCommitSha}:${E.sourceCommitSha}:target`,kind:"merge",parent:E.sourceCommitSha,child:E.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const ue=E.sourceCommitSha,je=`merge:${E.mergeCommitSha}:${ue!=null?ue:"unknown"}`;if(!ue||Ho(ue,E.targetCommitSha)){on({id:je,kind:"merge",parent:ue!=null?ue:"unknown",child:E.targetCommitSha,rendered:!1,reason:ue?"merged parent equals merge target sha":"missing merged parent sha"});continue}const Ve=(xs=od(fs,ue))!=null?xs:null;if(!Ve){on({id:je,kind:"merge",parent:ue,child:E.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(Ve.commit.id===X.commit.id){on({id:je,kind:"merge",parent:Ve.commit.id,child:X.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let at,Yt,Ht;const Ft=z?X.x+Pn/2:X.x+Pn-nm,hn=z?X.y+Us+nm:X.y+Us/2,vn=z?"bottom":"right";z?(at=Ve.x+Pn+nm,Yt=Ve.y+Us/2,Ht="right"):(at=Ve.x+Pn/2,Yt=Ve.y,Ht="top");const rn=`${at.toFixed(2)}:${Yt.toFixed(2)}:${Ft.toFixed(2)}:${hn.toFixed(2)}`;if(Fn.has(rn)){on({id:je,kind:"merge",parent:Ve.commit.id,child:X.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}Fn.add(rn),Ls.push({id:je,fromX:at,fromY:Yt,toX:Ft,toY:hn,fromFace:Ht,toFace:vn,zIndex:gs(Ve.commit.branchName)}),on({id:je,kind:"merge",parent:Ve.commit.id,child:X.commit.id,rendered:!0,reason:`merge connector rendered to ${E.targetBranchName}`})}const Xn=new Set;for(const E of i){if(E.name===h)continue;const X=De.get(E.name);if(!X)continue;const ue=$(E),je=Fs((Gs=oe.get(E.name))!=null?Gs:"",ue),Ve=(qn=Xe.get(E.name))!=null?qn:X,at=($i=On(Ve.id,E.name))!=null?$i:Ws(Ve);if(!je||!at||je.commit.id===at.commit.id){const vn=gt.get(`${E.name}:${X.id}`),rn=gt.get(`${E.name}:${Ve.id}`),Vn=!!vn&&!ut.has(vn),gn=!!rn&&!ut.has(rn),Vt=!!vn&&!x.has(vn)&&(Vn?b.has(vn):!0),An=!!rn&&!x.has(rn)&&(gn?b.has(rn):!0);!je&&!Vt&&hs((ki=at==null?void 0:at.commit.id)!=null?ki:X.id,"Missing parent node"),!at&&!An&&hs(X.id,"Missing child node"),on({id:`branch:${(ti=je==null?void 0:je.commit.id)!=null?ti:"null"}->${(Lt=at==null?void 0:at.commit.id)!=null?Lt:"null"}`,kind:"branch",parent:(vo=je==null?void 0:je.commit.id)!=null?vo:"null",child:(qs=at==null?void 0:at.commit.id)!=null?qs:"null",rendered:!1,reason:je?at?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Yt=`branch:${je.commit.id}->${at.commit.id}`;if(an.has(Yt)){on({id:Yt,kind:"branch",parent:je.commit.id,child:at.commit.id,rendered:!1,reason:"duplicate connector key"});continue}an.add(Yt),yo.add(je.commit.id);const Ht=Bs(je,at);je.commit.branchName!==at.commit.branchName&&Xn.add(je.commit.id);const Ft=ms(je),hn=Mo(at);nn.push({id:Yt,fromX:Ft.x,fromY:Ft.y,toX:hn.x,toY:hn.y,fromFace:Ft.face,toFace:hn.face,zIndex:gs(at.commit.branchName)}),on({id:Yt,kind:"branch",parent:je.commit.id,child:at.commit.id,rendered:!0,reason:Ht?"branch connector rendered":z?"horizontal connector rendered":"vertical connector rendered"})}for(const E of he){const X=Ws(E);if(!X)continue;const ue=(fi=E.parentSha)!=null?fi:null;if(!ue)continue;const je=(ni=Ys(ue,E.branchName))!=null?ni:Fs(ue,E.branchName);if(!je){const Ft=(Oo=gt.get(`${E.branchName}:${ue}`))!=null?Oo:gt.get(ue),hn=!!Ft&&!ut.has(Ft);!!Ft&&!x.has(Ft)&&(hn?b.has(Ft):!0)||hs(E.id,"Missing parent node"),on({id:`${E.visualId}->${ue}`,kind:"ancestry",parent:ue,child:E.id,rendered:!1,reason:"missing parent node"});continue}if(X.commit.id===je.commit.id){hs(X.commit.id,"Parent and child resolve to the same node"),on({id:`${je.commit.id}->${X.commit.id}`,kind:"ancestry",parent:je.commit.id,child:X.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const Ve=`${E.branchName}:${(ji=je.commit.visualId)!=null?ji:je.commit.id}->${X.commit.visualId}`;if(an.has(Ve)){hs(je.commit.id,"Duplicate connector key"),hs(X.commit.id,"Duplicate connector key"),on({id:Ve,kind:"ancestry",parent:je.commit.id,child:X.commit.id,rendered:!1,reason:"duplicate connector key"});continue}an.add(Ve),yo.add(je.commit.id);const at=Bs(je,X),Yt=Wn(je,at,X),Ht=Ss(X);nn.push({id:Ve,fromX:Yt.x,fromY:Yt.y,toX:Ht.x,toY:Ht.y,fromFace:Yt.face,toFace:Ht.face,zIndex:gs(X.commit.branchName)}),on({id:Ve,kind:"ancestry",parent:je.commit.id,child:X.commit.id,rendered:!0,reason:at?"ancestry connector rendered":z?"horizontal ancestry rendered":"vertical ancestry rendered"}),Ts.add(je.commit.id),Ts.add(X.commit.id)}const ui=new Map;for(const E of bn){const X=(Qi=ui.get(E.commit.branchName))!=null?Qi:[];X.push(E),ui.set(E.commit.branchName,X)}for(const[E,X]of ui.entries()){if(X.length<2)continue;const ue=[...X].sort((je,Ve)=>{var at,Yt,Ht,Ft,hn,vn,rn,Vn;return je.row!==Ve.row?je.row-Ve.row:Xi((Yt=(at=je==null?void 0:je.commit)==null?void 0:at.date)!=null?Yt:null)-Xi((Ft=(Ht=Ve==null?void 0:Ve.commit)==null?void 0:Ht.date)!=null?Ft:null)||((vn=(hn=je==null?void 0:je.commit)==null?void 0:hn.id)!=null?vn:"").localeCompare((Vn=(rn=Ve==null?void 0:Ve.commit)==null?void 0:rn.id)!=null?Vn:"")});for(let je=1;je<ue.length;je+=1){const Ve=ue[je-1],at=ue[je];if(Ve.commit.id===at.commit.id)continue;const Yt=(Zi=at.commit.parentSha)!=null?Zi:null;if(Yt&&Fs(Yt,at.commit.branchName))continue;const Ht=`chain:${E}:${Ve.commit.id}->${at.commit.id}`;if(an.has(Ht)){hs(Ve.commit.id,"Duplicate branch chain connector"),hs(at.commit.id,"Duplicate branch chain connector"),on({id:Ht,kind:"ancestry",parent:Ve.commit.id,child:at.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}an.add(Ht);const Ft=Bs(Ve,at),hn=Wn(Ve,Ft,at),vn=Ss(at);nn.push({id:Ht,fromX:hn.x,fromY:hn.y,toX:vn.x,toY:vn.y,fromFace:hn.face,toFace:vn.face,zIndex:gs(at.commit.branchName)}),on({id:Ht,kind:"ancestry",parent:Ve.commit.id,child:at.commit.id,rendered:!0,reason:"branch chain rendered"}),Ts.add(Ve.commit.id),Ts.add(at.commit.id)}}return{branchByName:N,laneByName:q,mainCommits:G,branchCommitsByLane:W,branchPreviewSets:Z,allCommits:he,clustersByBranch:pt,clusterKeyByCommitId:gt,clusterKeyBySha:Mt,leadByClusterKey:Bt,clusterCounts:ot,debugRows:Me,branchDebugRows:nt,nodes:Be,normalizedSearchQuery:xt,matchingNodes:Ke,matchingNodeIds:wt,focusedNode:Ot,checkedOutClusterKey:un,defaultCollapsedClumps:ut,visibleCommitsList:It,renderNodes:bn,visibleNodesBySha:fs,visibleNodeByClusterKey:Ro,pointFormatter:no,contentWidth:Qt,contentHeight:Ln,connectors:nn,mergeConnectors:Ls,connectorDecisions:ys,nodeWarnings:Rs,connectorParentShas:yo,branchStartShas:so,branchOffNodeShas:Yn,crossBranchOutgoingShas:Xn,commitIdsWithRenderedAncestry:Ts,branchBaseCommitByName:De,firstBranchCommitByName:ie,mergeDestinations:ht,mergeTargetBranchesBySourceBranchAndCommitSha:jt}}const Iw=8,Hw=44,My=120,Ey=e=>e==="left"||e==="right"?"h":e==="top"||e==="bottom"?"v":null;function ob(e,n,i,a,c,u){const d=i-e,h=a-n,p=Math.abs(d),y=Math.abs(h),g=Math.hypot(d,h);if(g<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,y)<Iw){const G=d/g,W=h/g,Z=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:e+G*Z,c1y:n+W*Z,c2x:i-G*Z,c2y:a-W*Z}}if(Math.min(p,y)<Hw){const G=d/g,W=h/g,Z=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:e+G*Z,c1y:n+W*Z,c2x:i-G*Z,c2y:a-W*Z}}const C=Math.min(160,p*.42),M=Math.min(100,p*.22),A=Math.min(120,y*.32),T=Math.min(160,y*.42),D=Ey(c),V=Ey(u);if(!(D==="v"&&V==="h"||D==="v"&&V==null&&y>=p||D==null&&V==="h"&&y>=p||D==="v"&&V==="v"||D==null&&V==null&&y>p)){const G=i,W=n;return{kind:"elbowH",cx:G,cy:W,s1c1x:e+x*C,s1c1y:n,s1c2x:G-x*M,s1c2y:W,s2c1x:G,s2c1y:W+b*A,s2c2x:i,s2c2y:a-b*T}}const N=e,q=a;return{kind:"elbowV",cx:N,cy:q,s1c1x:e,s1c1y:n+b*T,s1c2x:N,s1c2y:q-b*A,s2c1x:N+x*C,s2c1y:q,s2c2x:i-x*M,s2c2y:a}}function Uw(e,n,i,a,c,u){const d=ob(e,n,i,a,c,u);return d.kind==="line"?[{x:e,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:e,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:e,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:e,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function Ty(e,n,i,a,c,u,d){const h=ob(e,n,i,a,u,d);if(h.kind==="line")return[`M ${c(e,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(e,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const C=Math.max(8,Math.min(My,Math.abs(i-e)*.48,Math.abs(a-n)*.48)),M=i>=e?1:-1,A=a>=n?1:-1,T=h.cx-M*C,D=h.cy+A*C;return[`M ${c(e,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(T-M*C*.5,h.cy)} ${c(T,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,D)}`,`C ${c(h.cx,D+A*C*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(My,Math.abs(i-e)*.48,Math.abs(a-n)*.48)),y=i>=e?1:-1,g=a>=n?1:-1,x=h.cy-g*p,b=h.cx+y*p;return[`M ${c(e,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-g*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+y*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const kp=2.25,kc=kp/2,Vw=.45,Yw=.02,ia=kp,Hd=10,Ww=-100,Ay=0,Fw=.25,ad=.001,Xw=12,Gw=Pn+48;function pn(...e){return e.filter(Boolean).join(" ")}function Ny(e){return Math.max(Vw,Math.min(kp,e))}function qw(e,n){if(e===null||e.size!==n.size)return!1;for(const i of e)if(!n.has(i))return!1;return!0}function ib(e,n){return!(n.right<e.left||n.left>e.right||n.bottom<e.top||n.top>e.bottom)}function Kw(e){var u,d,h,p;let n=(d=(u=e[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=e[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const y of e)n=Math.min(n,y.x),i=Math.min(i,y.y),a=Math.max(a,y.x),c=Math.max(c,y.y);return{left:n,top:i,right:a,bottom:c}}function Qw(e,n,i,a,c,u,d){const h=Uw(e,n,i,a,u,d),p=Kw(h);return ib(c,p)}function ab(e,n){return{left:e.x,top:e.y+n,right:e.x+Pn,bottom:e.y+Ol+Us+4}}function Zw(e,n){const i=Gw,a=Math.max(120,Math.ceil(Ol+Us+4-n+24)),c=new Map;for(const u of e){const d=ab(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),y=Math.floor(d.top/a),g=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let C=y;C<=g;C++){const M=`${b},${C}`;let A=c.get(M);A||(A=new Set,c.set(M,A)),A.add(x)}}return{cellW:i,cellH:a,buckets:c}}function Jw(e,n,i,a){const{cellW:c,cellH:u,buckets:d}=e,h=Math.floor(n.left/c),p=Math.floor(n.right/c),y=Math.floor(n.top/u),g=Math.floor(n.bottom/u),x=new Set;for(let C=h;C<=p;C++)for(let M=y;M<=g;M++){const A=d.get(`${C},${M}`);if(A)for(const T of A)x.add(T)}const b=new Set;for(const C of x){const M=i.get(C);if(!M)continue;const A=ab(M,a);ib(n,A)&&b.add(C)}return b}function Dy(e,n,i,a){var d;if(i.zoom<=0||e<=0||n<=0)return null;const c=i.zoom/ia;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(e-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function eS(e,n){return n>0?{left:e.left-n,top:e.top-n,right:e.right+n,bottom:e.bottom+n}:e}function Ry(e,n,i){const a=n/ia;return!Number.isFinite(a)||a<=0?e:eS(e,100/a)}function By(e){return e.replace(/\\/g,"/").replace(/\/+$/,"")}function Bi(e,n){return!e||!n?!1:e===n||e.startsWith(n)||n.startsWith(e)}function Im(e,n){if(n){const i=By(n),a=By(e.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!e.isCurrent}function sm(e,n){return e.pathExists===!1?!1:Im(e,n)}function tS(e){const n=e.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?e:`.../${n.slice(-2).join("/")}`}function nS({compactLabels:e=!1,selectedVisibleCommitShas:n,commitInProgress:i,commitDisabled:a,stashInProgress:c,stashDisabled:u,pushInProgress:d,hasUncommittedChanges:h,createBranchFromNodeInProgress:p,onCommitLocalChanges:y,onStashLocalChanges:g,onPushCurrentBranch:x,onPushAllBranches:b,onPushCommitTargets:C,onMergeRefsIntoBranch:M,selectedPushTargets:A,selectedPushLabel:T,canPushCurrentBranch:D,pushCurrentBranchLabel:V,pushableRemoteBranchCount:z,selectedCommitTargetOption:N,mergeInProgress:q,setMergeTargetCommitSha:G,worktrees:W,currentRepoPath:Z,worktreeMenuOpen:ce,setWorktreeMenuOpen:de,onSwitchToWorktree:pe,onRemoveWorktree:De,removeWorktreeInProgress:Xe,setCommitDialogOpen:ie,setNewBranchDialogOpen:oe,hideMergeControls:$=!1}){var st,Rt;const ne=n.length>0,Y=n.length>0&&n.every(dt=>dt==="WORKING_TREE"),[fe,Se]=_.useState(!1),I=_.useRef(null),re=_.useRef(null),te="inline-flex h-7 items-center rounded-md border border-border bg-background px-2 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",be=!!y&&h&&!a&&!i&&(!ne||Y),Te=!!x&&D&&!ne&&!d,he=!!C&&A.length>0&&!d,ze=!!b&&z>=2&&!ne&&!d,Qe=!!g&&!u&&!ne&&!c,We="Push Selected...",ht=be?{label:i?"Committing...":"Commit",iconSrc:"/icon-commit.svg",run:()=>ie(!0),disabled:!be}:Te?{label:d?"Pushing...":V,iconSrc:"/icon-pushBranch.svg",run:()=>void(x==null?void 0:x()),disabled:!Te}:he?{label:We,iconSrc:"/icon-pushSelected.svg",run:()=>void(C==null?void 0:C(A.map(dt=>({branchName:dt.branchName,targetSha:dt.targetSha})))),disabled:!he}:null,jt=(dt,qt)=>l.jsx("span",{"aria-hidden":"true",className:pn("inline-block shrink-0 bg-current",qt),style:{WebkitMaskImage:`url(${dt})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${dt})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}});return _.useEffect(()=>{const dt=qt=>{var J,Re;const Kt=qt.target;Kt&&((J=I.current)!=null&&J.contains(Kt)||(Re=re.current)!=null&&Re.contains(Kt)||(Se(!1),de(!1)))};return window.addEventListener("pointerdown",dt),()=>window.removeEventListener("pointerdown",dt)},[de]),l.jsx("div",{className:"window-no-drag pointer-events-none z-[60] flex w-full justify-start",children:l.jsxs("div",{className:"pointer-events-auto flex w-fit max-w-full flex-nowrap items-center justify-start gap-[9px]",children:[l.jsxs("div",{ref:I,className:"relative inline-flex h-7 items-stretch rounded-md border border-border bg-background",children:[l.jsx("button",{type:"button",onClick:()=>{ht&&ht.run()},disabled:!ht||ht.disabled,className:pn(te,"h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-muted"),children:l.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[jt((st=ht==null?void 0:ht.iconSrc)!=null?st:"/icon-commit.svg","h-4.5 w-4.5"),e?null:l.jsx("span",{children:(Rt=ht==null?void 0:ht.label)!=null?Rt:"Commit"})]})}),l.jsx("button",{type:"button",onClick:()=>Se(dt=>!dt),disabled:!ht,"aria-haspopup":"menu","aria-expanded":fe,className:pn(te,"h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-muted"),title:"More actions",children:l.jsx(Zx,{className:"h-3.5 w-3.5 shrink-0"})}),fe&&ht?l.jsxs("div",{className:"absolute left-[-1px] top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border bg-background p-1",children:[l.jsxs("button",{type:"button",onClick:()=>{Se(!1),ie(!0)},disabled:!be,className:pn(te,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!be&&"text-foreground opacity-50"),children:[jt("/icon-commit.svg","mr-1.5 h-4.5 w-4.5"),i?"Committing...":"Commit"]}),l.jsxs("button",{type:"button",onClick:()=>{Se(!1),x==null||x()},disabled:!Te,className:pn(te,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!Te&&"text-foreground opacity-50"),children:[jt("/icon-pushBranch.svg","mr-1.5 h-4.5 w-4.5"),d?"Pushing...":V]}),l.jsxs("button",{type:"button",onClick:()=>{Se(!1),C==null||C(A.map(dt=>({branchName:dt.branchName,targetSha:dt.targetSha})))},disabled:!he,className:pn(te,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!he&&"text-foreground opacity-50"),title:T,children:[jt("/icon-pushSelected.svg","mr-1.5 h-4.5 w-4.5"),We]}),l.jsxs("button",{type:"button",onClick:()=>{Se(!1),b==null||b()},disabled:!ze,className:pn(te,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!ze&&"text-foreground opacity-50"),children:[jt("/icon-pushAll.svg","mr-1.5 h-4.5 w-4.5"),"Push all"]}),l.jsxs("button",{type:"button",onClick:()=>{Se(!1),g==null||g()},disabled:!Qe,className:pn(te,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!Qe&&"text-foreground opacity-50"),children:[jt("/icon-stash.svg","mr-1.5 h-4.5 w-4.5"),c?"Stashing...":"Stash"]})]}):null]}),l.jsx("div",{className:"flex w-fit flex-nowrap items-center gap-[9px]",children:l.jsxs("button",{type:"button",onClick:()=>oe(!0),disabled:p,className:pn(te,"pointer-events-auto relative z-10 !bg-background !border-border hover:!bg-muted",e?"w-7 justify-center px-0":""),children:[l.jsx(Jx,{className:pn("h-3.5 w-3.5 shrink-0",e?"":"mr-1.5")}),e?null:p?"Creating...":"Branch"]})}),!$&&n.length>1&&N.options.length>0&&N.targetBranch&&M?l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border bg-background px-2 py-1",children:[l.jsx("span",{className:"px-1 text-[11px] font-medium text-foreground",children:"Merge to"}),N.options.map(dt=>{const qt=dt.targetBranch===N.targetBranch;return l.jsx("button",{type:"button",onClick:()=>G(dt.targetSha),className:pn("rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors",qt?"bg-background text-foreground":"text-foreground hover:bg-muted hover:text-foreground"),children:dt.targetBranch},`merge-${dt.targetBranch}`)}),l.jsxs("button",{type:"button",onClick:()=>void M(N.sources,N.targetBranch),disabled:N.sources.length===0||q,className:"rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(eb,{className:"mr-1 inline h-3 w-3 shrink-0 align-text-bottom"}),q?"Merging...":"Confirm"]})]}):null,W.length>0&&(pe||De)?l.jsxs("div",{ref:re,className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>de(dt=>!dt),className:pn(te,"!bg-background !border-border hover:!bg-muted"),children:[l.jsx(bw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),W.length,e?null:` ${W.length===1?"Worktree":"Worktrees"}`]}),ce?l.jsx("div",{className:"absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-md border border-border bg-background p-1",children:W.map(dt=>{var qt;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:dt.path,children:Im(dt,Z)?tS(dt.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-foreground",children:[(qt=dt.branchName)!=null?qt:"detached"," • ",dt.headSha.slice(0,7)]})]}),Im(dt,Z)?l.jsxs("div",{className:"flex items-center gap-1",children:[pe?l.jsx("button",{type:"button",onClick:()=>{de(!1),pe(dt.path)},disabled:Xe||dt.pathExists===!1,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,De?l.jsx("button",{type:"button",onClick:()=>void De(dt.path,dt.isPrunable),disabled:Xe,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Xe?"...":"Remove"}):null]}):null]},dt.path)})}):null]}):null]})})}function sS({fadeIn:e,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=_.useState(!e);return _.useLayoutEffect(()=>{if(!e){p(!0);return}p(!1);let y=null;const g=requestAnimationFrame(()=>{y=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(g),y!=null&&cancelAnimationFrame(y)}},[e]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:e?"opacity 240ms ease-out":void 0},children:d})}function oS({scrollContainerRef:e,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:y,labelTopPx:g,inverseZoomStyle:x,displayZoom:b,selectedVisibleCommitShas:C,normalizedSearchQuery:M,matchingNodeIds:A,focusedNode:T,renderNodes:D,shouldRenderNode:V,manuallyOpenedClumps:z,manuallyClosedClumps:N,defaultCollapsedClumps:q,leadByClusterKey:G,clusterKeyByCommitId:W,clusterCounts:Z,commitIdsWithRenderedAncestry:ce,nodeWarnings:de,connectorParentShas:pe,branchStartShas:De,branchOffNodeShas:Xe,crossBranchOutgoingShas:ie,branchBaseCommitByName:oe,branchStartAccentClass:$,connectorParentAccentClass:ne,commitCornerRadiusPx:Y,lineStrokeWidth:fe,pointFormatter:Se,connectors:I,mergeConnectors:re,cullConnectorPath:te,flushCameraReactTick:be,setManuallyOpenedClumps:Te,setManuallyClosedClumps:he,onCommitCardClick:ze,unpushedCommitShasSetByBranch:Qe,remoteCommitShas:We,checkedOutHeadSha:ht}){const[jt,vt]=_.useState(new Set),st=_.useRef(null);_.useEffect(()=>{const J=new Set;Z.forEach((Ce,mt)=>{(z.has(mt)||!q.has(mt)&&!N.has(mt))&&J.add(mt)});const Re=st.current;if(Re==null){st.current=J;return}const rt=[];if(J.forEach(Ce=>{Re.has(Ce)||rt.push(Ce)}),rt.length>0){vt(mt=>{const He=new Set(mt);return rt.forEach(pt=>He.add(pt)),He});const Ce=window.setTimeout(()=>{vt(mt=>{const He=new Set(mt);return rt.forEach(pt=>He.delete(pt)),He})},260);return st.current=J,()=>{window.clearTimeout(Ce)}}st.current=J},[Z,q,N,z]);const Rt=(J,Re)=>{const rt=Re.zIndex-J.zIndex;if(rt!==0)return rt;const Ce=Math.min(J.fromY,J.toY),mt=Math.min(Re.fromY,Re.toY),He=Ce-mt;return He!==0?He:J.id.localeCompare(Re.id)},dt=re.filter(J=>te(J)).sort(Rt),qt=I.filter(J=>te(J)).sort(Rt),Kt=D.filter(J=>V(J));return l.jsx("div",{ref:e,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},onWheel:h,onMouseDown:p,children:l.jsx("div",{ref:n,className:"relative min-w-full bg-background p-2.5",style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[Kt.map(J=>{var It,_n,Tt,bt,dn,sn;const Re=W.get(J.commit.visualId),rt=Re?z.has(Re)||!q.has(Re)&&!N.has(Re):!1,Ce=Re?G.get(Re)===J.commit.visualId:!1,mt=Re!=null&&rt&&!Ce&&jt.has(Re),He=Re&&(It=Z.get(Re))!=null?It:1,pt=ce.has(J.commit.id),gt=(_n=de.get(J.commit.id))!=null?_n:[],Mt=gt.length>0&&!pt,Bt=C.includes(J.commit.id),ot=J.commit.id==="WORKING_TREE"||J.commit.kind==="uncommitted",F=J.commit.kind==="stash"||J.commit.id.startsWith("STASH:"),ee=/^STASH:(\d+)$/.exec(J.commit.id),ve=ee?`Stash ${Number.parseInt(ee[1],10)+1}`:null,Me=F?J.commit.message.trim()&&J.commit.message.trim()!=="git-visualizer"?J.commit.message:"Stashed changes":J.commit.message,nt=J.commit.kind==="branch-created"&&J.commit.id.startsWith("BRANCH_HEAD:"),Ge=ot||((bt=(Tt=Qe.get(J.commit.branchName))==null?void 0:Tt.has(J.commit.id))!=null?bt:!1),Le=J.commit.isRemote===!0,_e=!ot&&!Ge&&(Le||We.has(J.commit.id)),Ye=(ot||ht!=null&&J.commit.id===ht)&&!Bt,Je=_e&&!Ye&&!Bt,Be=Ye?"text-checked":Je?"text-remote":Bt?"text-select":"text-foreground",et=Ye?{color:"var(--checked)"}:Je?{color:"var(--remote)"}:Bt?{color:"var(--select)"}:void 0,yt=(dn=et==null?void 0:et.color)!=null?dn:"var(--foreground)",xt=(T==null?void 0:T.commit.id)===J.commit.id?yt:Ye?"var(--checked)":Je?"var(--remote)":Bt?"var(--select)":em,Ke=F||nt||ot?1.25/b:fe,Ot=F||ot||nt,wt=`${12/b} ${6/b}`,ft=Ke/2,un=`M ${ft} ${ft} H ${Pn-ft-Y} Q ${Pn-ft} ${ft} ${Pn-ft} ${ft+Y} V ${176-ft-Y} Q ${Pn-ft} ${176-ft} ${Pn-ft-Y} ${176-ft} H ${ft+Y} Q ${ft} ${176-ft} ${ft} ${176-ft-Y} V ${ft}`,ut=Ge&&!Ye&&!Bt?{color:"var(--muted-foreground)"}:void 0;return l.jsxs(sS,{fadeIn:mt,dataCommitCard:"true",className:pn("group absolute z-20",M&&!A.has(J.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",M&&A.has(J.commit.id)?"scale-[1.01]":"",(T==null?void 0:T.commit.id)===J.commit.id?"z-30":""),style:{left:J.x,top:J.y,width:Pn,height:Ol+Us+4,overflow:"visible"},onClick:Zt=>ze(Zt,J),onPointerDown:Zt=>y(Zt,J),children:[Ot?l.jsx("svg",{className:"pointer-events-none absolute inset-0 z-20 overflow-visible","aria-hidden":"true",viewBox:`0 0 ${Pn} 176`,preserveAspectRatio:"none",children:l.jsx("path",{d:un,fill:"none",stroke:xt,strokeWidth:Ke,strokeDasharray:wt,strokeLinecap:"butt",strokeLinejoin:"round"})}):null,l.jsx("div",{className:"absolute left-0 z-30 w-full",style:{...x,top:`${g}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 bg-transparent pb-0",children:[l.jsx("div",{className:pn("min-w-0 h-4 flex-1 text-sm font-normal leading-none",Be,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:et!=null?et:ut,children:F&&ve?ve:J.commit.branchName?`${J.commit.branchName}/${J.commit.id.slice(0,7)}`:J.commit.id.slice(0,7)}),Ce&&He>1?l.jsx("button",{type:"button",onMouseDown:Zt=>{Zt.stopPropagation()},onClick:Zt=>{if(Zt.stopPropagation(),Zt.preventDefault(),!Re)return;!q.has(Re)?(Te(tn=>{if(!tn.has(Re))return tn;const Nt=new Set(tn);return Nt.delete(Re),Nt}),he(tn=>{const Nt=new Set(tn);return Nt.has(Re)?Nt.delete(Re):Nt.add(Re),Nt})):(he(tn=>{if(!tn.has(Re))return tn;const Nt=new Set(tn);return Nt.delete(Re),Nt}),Te(tn=>{const Nt=new Set(tn);return Nt.has(Re)?Nt.delete(Re):Nt.add(Re),Nt})),be()},className:pn("inline-flex self-start items-center bg-transparent p-0 text-sm font-normal leading-none",Be),style:et!=null?et:ut,children:rt?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`+${He-1}`}):null]})}),l.jsx("div",{className:pn("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",Ye&&!Ge&&!F&&!nt?"bg-checked-muted":Je&&!F&&!nt?"bg-remote-muted":Bt&&!Ge&&!F&&!nt?"bg-select-muted":Ge||F||nt?"bg-transparent":"bg-muted",Ot?"border-solid":"",Xe.has(J.commit.id)||De.has(J.commit.id)||ie.has(J.commit.id)?$:pe.has(J.commit.id)?ne:((sn=oe.get(J.commit.branchName))==null?void 0:sn.id)===J.commit.id?"border-amber-500":Mt?"border-red-500":"",(M&&A.has(J.commit.id)&&!d,"")),style:{top:0,borderWidth:`${Ke}px`,borderColor:Ot?"transparent":xt,borderTopLeftRadius:0,borderTopRightRadius:`${Y}px`,borderBottomRightRadius:`${Y}px`,borderBottomLeftRadius:`${Y}px`},children:l.jsxs("div",{className:"relative z-10 flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:pn("max-w-[38rem] select-text text-sm font-normal leading-tight tracking-tight text-foreground",Be,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),"data-selectable-text":"true",style:et!=null?et:ut,children:Ce&&rt?Me:Ce&&He>1?`${Me} +${He-1}`:Me}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:Mt?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-foreground dark:bg-red-900/20 dark:text-foreground",title:gt.join(`
`),children:"Broken ancestry"}):null})]}),b>.5&&!F?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:pn("select-text text-sm font-normal",Be),"data-selectable-text":"true",style:et!=null?et:ut,children:["@",J.commit.author]}),l.jsx("div",{className:pn("select-text text-sm font-normal",Be),"data-selectable-text":"true",style:et!=null?et:ut,children:new Date(J.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null]})})]},J.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[dt.map(J=>{const{fromX:Re,fromY:rt,toX:Ce,toY:mt}=J,He=Ty(Re,rt,Ce,mt,Se,J.fromFace,J.toFace);return l.jsx("path",{d:He,fill:"none",stroke:em,strokeWidth:fe,strokeLinecap:"round",strokeLinejoin:"round"},J.id)}),qt.map(J=>{const{fromX:Re,fromY:rt,toX:Ce,toY:mt}=J,He=Ty(Re,rt,Ce,mt,Se,J.fromFace,J.toFace);return l.jsx("path",{d:He,fill:"none",stroke:em,strokeWidth:fe,strokeLinecap:"round",strokeLinejoin:"round"},J.id)})]})]})})})}function iS({isOpen:e,onClose:n,visibleBounds:i,renderedNodeCount:a,totalNodeCount:c,renderedMergeConnectorCount:u,totalMergeConnectorCount:d,renderedConnectorCount:h,totalConnectorCount:p,mapGridCullViewportInsetScreenPx:y,debugRows:g,branchDebugRows:x,connectorDecisions:b}){return l.jsx(l.Fragment,{children:e?l.jsxs("div",{className:"absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:n,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${y}px screen/side): ${i?`${(i.right-i.left).toFixed(0)} x ${(i.bottom-i.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${a} / ${c}`,`Rendered merge connectors: ${u} / ${d}`,`Rendered connectors: ${h} / ${p}`,"",...g,...x,"",...b.map(C=>`${C.rendered?"rendered":"skipped"} [${C.kind}] ${C.parent.slice(0,7)} -> ${C.child.slice(0,7)} (${C.reason})`)].join(`
`)})})]}):null})}function aS({commitDialogOpen:e,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:y,deleteInProgress:g,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:C,newBranchCreateMode:M,onNewBranchNameChange:A,onNewBranchCreateModeChange:T,onNewBranchDialogClose:D,onNewBranchConfirm:V,selectedCommitCanCreateBranch:z,currentCheckedOutCommitCanCreateBranch:N,createBranchFromNodeInProgress:q}){return l.jsxs(l.Fragment,{children:[e?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:a,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-background p-4",onClick:G=>G.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:G=>i(G.target.value),onKeyDown:G=>{(G.metaKey||G.ctrlKey)&&G.key==="Enter"&&(G.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(Sw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),u?"Committing...":"Commit"]})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:p,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-background p-4",onClick:G=>G.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(G=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:G},G))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsx("button",{type:"button",onClick:y,disabled:x===0||g,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:g?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:D,children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-background p-4",onClick:G=>G.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>T("from-selected-node"),className:pn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",M==="from-selected-node"?"bg-background text-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>T("new-root"),className:pn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",M==="new-root"?"bg-background text-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:"New root"})]}),M==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:C,onChange:G=>A(G.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:D,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:V,disabled:!C.trim()||q||M==="from-selected-node"&&!z&&!N,className:pn("inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted","disabled:cursor-not-allowed disabled:opacity-50"),children:[l.jsx(Jx,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),q?"Creating...":"Create"]})]})]})}):null]})}const Ly="/icon-GitOrientation.svg";function rS({compactLabels:e=!1,orientation:n,onOrientationChange:i}){const a=n==="horizontal"?"vertical":"horizontal";return l.jsxs("button",{type:"button",onClick:()=>i(a),className:pn("window-no-drag inline-flex h-7 items-center rounded-md border border-border bg-background text-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",e?"w-7 justify-center px-0":"gap-1.5 pl-1.5 pr-2 py-1"),"aria-label":`Rotate view to ${a}`,title:"Rotate View",children:[l.jsx("span",{className:"relative size-4 shrink-0",children:l.jsx("span",{"aria-hidden":"true",className:pn("absolute inset-0 bg-current transition-transform duration-300 ease-in-out",n==="vertical"&&"rotate-[-90deg]"),style:{WebkitMaskImage:`url(${Ly})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${Ly})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}})}),e?null:l.jsx("span",{className:"whitespace-nowrap text-[12px] font-normal leading-none text-foreground transition-colors",children:"Rotate View"})]})}function lS({query:e,onQueryChange:n,resultCount:i,resultIndex:a,onJump:c}){const u=_.useRef(null);return l.jsxs("div",{className:"window-no-drag flex h-7 w-[12rem] shrink-0 items-center gap-2 rounded-full border border-border bg-background pl-1.5 pr-2.5",children:[l.jsx(Aw,{className:"h-3.5 w-3.5 shrink-0 text-foreground"}),l.jsx("input",{ref:u,value:e,onChange:d=>n(d.target.value),onBlur:d=>{const h=d.relatedTarget;h!=null&&h.closest('button, a, input, textarea, select, [contenteditable="true"]')||window.setTimeout(()=>{var p;(p=u.current)==null||p.focus()},0)},onKeyDown:d=>{d.key==="Enter"&&(d.preventDefault(),c(1))},placeholder:"Search",className:"min-w-0 flex-1 bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"}),i!=null&&i>0?l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-[11px] font-medium tabular-nums text-foreground",children:[(a!=null?a:0)+1,"/",i]}),l.jsx("button",{type:"button",onClick:()=>c(-1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-foreground transition-colors hover:text-foreground","aria-label":"Previous search result",title:"Previous result",children:l.jsx(_w,{className:"h-4 w-4 shrink-0"})}),l.jsx("button",{type:"button",onClick:()=>c(1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-foreground transition-colors hover:text-foreground","aria-label":"Next search result",title:"Next result",children:l.jsx(Zx,{className:"h-4 w-4 shrink-0"})})]}):null]})}const cS="git-visualizer:map-grid-camera:";function uS({mapPadHostRef:e,transformLayerRef:n,isEnabled:i=!0,onUserCameraChange:a}){const c=_.useRef({x:0,y:0}),u=_.useRef(kc),d=_.useRef(null),h=_.useRef({panX:0,panY:0,zoom:kc}),p=_.useRef(null),y=_.useRef(kc),g=_.useRef(null),[x,b]=_.useState(!1),[C,M]=_.useState(kc),[A,T]=_.useState(0),D=_.useRef(null),V=_.useRef(0),z=_.useRef(!1),N=_.useCallback(()=>`${cS}${window.location.pathname}`,[]),q=_.useCallback(oe=>{try{window.localStorage.setItem(N(),JSON.stringify(oe))}catch{}},[N]),G=_.useCallback(()=>{const oe=e.current;if(!oe)return null;const $=oe.getBoundingClientRect(),ne=getComputedStyle(oe),Y=Number.parseFloat(ne.borderLeftWidth)||0,fe=Number.parseFloat(ne.borderTopWidth)||0,Se=Number.parseFloat(ne.paddingLeft)||Hd,I=Number.parseFloat(ne.paddingTop)||Hd;return{x:$.left+Y+Se,y:$.top+fe+I}},[e]),W=_.useCallback(()=>{D.current!=null&&(window.clearTimeout(D.current),D.current=null),_.startTransition(()=>{T(oe=>oe+1)}),V.current=performance.now()},[]),Z=_.useCallback((oe,$,ne,Y)=>{const fe=h.current,Se={panX:oe,panY:$,zoom:ne};h.current=Se;const I=n.current;if(I&&(I.style.transform=`translate3d(${oe}px, ${$}px, 0) scale(${ne/ia})`),Math.abs(y.current-ne)>ad&&(y.current=ne,M(ne)),(Y==null?void 0:Y.emitTick)===!1||z.current)return;if(Math.abs(ne-fe.zoom)>ad){W();return}const be=performance.now()-V.current;if(be>=Ay){W();return}D.current!=null&&window.clearTimeout(D.current),D.current=window.setTimeout(()=>{D.current=null,W()},Ay-be)},[W,n]),ce=_.useRef(null),de=_.useCallback(()=>{p.current!=null||!ce.current||(p.current=window.requestAnimationFrame(ce.current))},[]),pe=_.useCallback(()=>{z.current=!0,b(!0),g.current!=null&&window.clearTimeout(g.current),g.current=window.setTimeout(()=>{g.current=null,z.current=!1,b(!1),W(),q(h.current)},90)},[W,q]),De=_.useCallback((oe,$,ne)=>{i&&(c.current={x:oe,y:$},u.current=ne,pe(),de())},[i,pe,de]);ce.current=()=>{p.current=null;const oe=h.current,$=c.current.x,ne=c.current.y,Y=u.current,fe=d.current,Se=Math.abs(Y-oe.zoom)<=ad?Y:oe.zoom+(Y-oe.zoom)*Fw,I=fe!=null?fe.anchorX-fe.worldX*(Se/ia):$,re=fe!=null?fe.anchorY-fe.worldY*(Se/ia):ne;fe!=null&&Math.abs(Se-Y)<=ad&&(d.current=null),Z(I,re,Se),I!==$||re!==ne||Se!==Y?ce.current&&(p.current=window.requestAnimationFrame(ce.current)):W()};const Xe=_.useCallback((oe,$,ne)=>{if(!i)return;const Y=Ny(ne),fe=c.current.x,Se=c.current.y,I=u.current,re=G();if(!re){De(fe,Se,Y);return}const te=oe-re.x,be=$-re.y,Te=I/ia,he=Y/ia,ze=(te-fe)/Te,Qe=(be-Se)/Te,We=te-ze*he,ht=be-Qe*he;d.current={anchorX:te,anchorY:be,worldX:ze,worldY:Qe},De(We,ht,Y)},[G,i,De]),ie=_.useCallback(oe=>{if(!i)return;if(oe.preventDefault(),oe.ctrlKey||oe.metaKey){a==null||a();const fe=Math.exp(-oe.deltaY*Yw);Xe(oe.clientX,oe.clientY,u.current*fe);return}a==null||a(),d.current=null;const $=h.current;c.current={x:$.panX,y:$.panY},u.current=$.zoom;const ne=$.panX-oe.deltaX,Y=$.panY-oe.deltaY;c.current={x:ne,y:Y},Z(ne,Y,$.zoom)},[Z,i,a,Xe]);return _.useLayoutEffect(()=>{if(!i)return;let oe={panX:0,panY:0,zoom:kc};try{const $=window.localStorage.getItem(N());if($){const ne=JSON.parse($);typeof ne.panX=="number"&&Number.isFinite(ne.panX)&&typeof ne.panY=="number"&&Number.isFinite(ne.panY)&&typeof ne.zoom=="number"&&Number.isFinite(ne.zoom)&&(oe={panX:ne.panX,panY:ne.panY,zoom:Ny(ne.zoom)})}}catch{}return c.current={x:oe.panX,y:oe.panY},u.current=oe.zoom,Z(oe.panX,oe.panY,oe.zoom,{emitTick:!1}),()=>{g.current!=null&&window.clearTimeout(g.current),p.current!=null&&window.cancelAnimationFrame(p.current),D.current!=null&&(window.clearTimeout(D.current),D.current=null),q(h.current)}},[Z,N,i,q]),{isCameraMoving:x,renderedZoom:C,cameraRenderTick:A,renderedCameraRef:h,interactionIdleTimeoutRef:g,getTransformLayerOriginScreen:G,flushCameraReactTick:W,syncCamera:De,handleWheel:ie}}function dS(e){const n=Math.min(e.startX,e.currentX),i=Math.min(e.startY,e.currentY),a=Math.abs(e.currentX-e.startX),c=Math.abs(e.currentY-e.startY);return{left:n,top:i,width:a,height:c}}function fS({scrollContainerRef:e,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=_.useRef(null),h=_.useRef(!1),p=_.useRef([]),[y,g]=_.useState(!1),[x,b]=_.useState(null),[C,M]=_.useState([]),[A,T]=_.useState(null),D=_.useCallback(z=>{const N=e.current,q=i();if(!N||!q)return[];const G=N.getBoundingClientRect(),W=n.current.zoom/ia;if(W<=0)return[];const Z=[],ce=z.left,de=z.left+z.width,pe=z.top,De=z.top+z.height;for(const Xe of a){if(!c(Xe))continue;const ie=q.x+n.current.panX+Xe.x*W-G.left,oe=q.y+n.current.panY+Xe.y*W-G.top,$=ie+Pn*W,ne=oe+(Ol+Us)*W;!($<ce||ie>de||ne<pe||oe>De)&&Z.push(Xe.commit.id)}return Z},[i,a,n,e,c]),V=_.useCallback(z=>{if(z.button!==0)return;const N=z.target;if(N!=null&&N.closest("[data-commit-card]")||N!=null&&N.closest("button, a, input, textarea, select"))return;const q=e.current;if(!q)return;z.preventDefault();const G=q.getBoundingClientRect(),W=z.clientX-G.left,Z=z.clientY-G.top;d.current={startX:W,startY:Z,currentX:W,currentY:Z,additive:z.metaKey||z.ctrlKey},h.current=!1,p.current=z.metaKey||z.ctrlKey?C:[],g(!0),b({left:W,top:Z,width:0,height:0})},[e,C]);return _.useEffect(()=>{const z=q=>{var pe;const G=d.current;if(!G)return;const W=e.current;if(!W)return;const Z=W.getBoundingClientRect();G.currentX=q.clientX-Z.left,G.currentY=q.clientY-Z.top,!h.current&&(Math.abs(G.currentX-G.startX)>2||Math.abs(G.currentY-G.startY)>2)&&(h.current=!0);const ce=dS(G);b(ce);const de=D(ce);M(G.additive?Array.from(new Set([...p.current,...de])):Array.from(new Set(de))),G.additive||T((pe=de[de.length-1])!=null?pe:null)},N=()=>{if(d.current){const q=h.current;d.current=null,h.current=!1,g(!1),b(null),q||(M([]),T(null));return}u()};return window.addEventListener("mousemove",z),window.addEventListener("mouseup",N),()=>{window.removeEventListener("mousemove",z),window.removeEventListener("mouseup",N)}},[D,u,e]),{isMarqueeSelecting:y,marqueeRect:x,selectedCommitShas:C,setSelectedCommitShas:M,mergeTargetCommitSha:A,setMergeTargetCommitSha:T,startMarqueeDrag:V}}function hS(){return l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center",children:l.jsx("div",{role:"status","aria-label":"Loading commits",className:"h-5 w-5 rounded-full border-2 border-border border-t-muted-foreground animate-spin"})})}function Oy({branches:e,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:y,staleBranches:g=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:C,mapTopInsetPx:M=0,onMergeRefsIntoBranch:A,mergeInProgress:T=!1,onPushAllBranches:D,onPushCurrentBranch:V,onPushCommitTargets:z,pushInProgress:N=!1,onDeleteSelection:q,deleteInProgress:G=!1,worktrees:W=[],currentRepoPath:Z,onRemoveWorktree:ce,removeWorktreeInProgress:de=!1,onSwitchToWorktree:pe,onStashLocalChanges:De,stashInProgress:Xe=!1,stashDisabled:ie=!1,onCommitLocalChanges:oe,commitInProgress:$=!1,commitDisabled:ne=!1,onStageAllChanges:Y,stageInProgress:fe=!1,onCreateBranchFromNode:Se,onCreateRootBranch:I,createBranchFromNodeInProgress:re=!1,isDebugOpen:te=!1,onDebugClose:be,orientation:Te="horizontal",branchCommitPreviews:he={},branchParentByName:ze={},branchUniqueAheadCounts:Qe={},gridSearchQuery:We="",gridSearchJumpToken:ht=0,gridSearchJumpDirection:jt=1,gridFocusSha:vt=null,checkedOutRef:st=null,onGridSearchResultCountChange:Rt,onGridSearchResultIndexChange:dt,onGridSearchFocusChange:qt,onInteractionChange:Kt,manuallyOpenedClumps:J,manuallyClosedClumps:Re,setManuallyOpenedClumps:rt,setManuallyClosedClumps:Ce,layoutModel:mt,gridHudProps:He}){var co,So,hi,Wo,Fo,la,O,U,w,v,k,B;const pt=_.useRef(null),gt=_.useRef(null),Mt=_.useRef(null),Bt=_.useRef(null),ot=_.useRef(null),F=_.useRef(void 0),ee=_.useRef(void 0),ve=_.useRef(void 0),Me=_.useRef(0),nt=_.useRef(null),[Ge,Le]=_.useState(!1),[_e,Ze]=_.useState(!1),[Ye,Je]=_.useState(""),[Be,et]=_.useState(!1),[yt,xt]=_.useState(!1),[Ke,Ot]=_.useState(""),[wt,ft]=_.useState("from-selected-node"),[un,ut]=_.useState(()=>new Set),[It,_n]=_.useState(()=>new Set),[Tt,bt]=_.useState({}),dn=_.useRef(!1),sn=_.useRef(null),Zt=_.useRef(null),Pt=J!=null?J:un,tn=Re!=null?Re:It,Nt=rt!=null?rt:ut,bn=Ce!=null?Ce:_n,[tt,ds]=_.useState(null),[fs,Ro]=_.useState(null),[no,jo]=_.useState(!1),[go,Bo]=_.useState(!1),as=_.useId(),{isCameraMoving:Qt,renderedZoom:Ln,cameraRenderTick:nn,renderedCameraRef:rs,interactionIdleTimeoutRef:gs,getTransformLayerOriginScreen:ys,flushCameraReactTick:on,syncCamera:Ts,handleWheel:Rs}=uS({mapPadHostRef:Mt,transformLayerRef:Bt}),yo=_.useMemo(()=>{if(mt)return mt;const j=Sp(e,d,he,ze);return Cp({lanes:j,branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,defaultBranch:d,branchCommitPreviews:he,branchParentByName:ze,branchUniqueAheadCounts:Qe,manuallyOpenedClumps:Pt,manuallyClosedClumps:tn,isDebugOpen:te,gridSearchQuery:We,gridFocusSha:vt,checkedOutRef:st!=null?st:null,orientation:Te,nodePositionOverrides:Tt})},[mt,e,n,i,a,c,d,he,ze,Qe,Pt,tn,te,We,vt,(co=st==null?void 0:st.headSha)!=null?co:null,(So=st==null?void 0:st.branchName)!=null?So:null,Te,Tt]),{allCommits:so,clusterKeyByCommitId:Yn,leadByClusterKey:Ys,clusterCounts:an,matchingNodes:Ws,matchingNodeIds:Si,normalizedSearchQuery:Ss,focusedNode:Mo,defaultCollapsedClumps:Bs,renderNodes:Wn,visibleNodesBySha:ms,contentWidth:Fs,contentHeight:On,connectors:Ls,mergeConnectors:Fn,connectorDecisions:Xn,nodeWarnings:ui,commitIdsWithRenderedAncestry:ps,connectorParentShas:oo,branchStartShas:Jt,branchOffNodeShas:Ci,crossBranchOutgoingShas:Gn,branchBaseCommitByName:Li,pointFormatter:xo}=yo,As=!!Ss,ls=Ln/ia,Eo=_.useMemo(()=>({transform:`scale(${1/ls})`,transformOrigin:"top left",width:`${100*ls}%`,height:`${100*ls}%`}),[ls]),es=-(20/ls),Tn=_.useMemo(()=>{const j=new Map;for(const L of Wn)j.set(L.commit.visualId,L);return j},[Wn]),bo=_.useMemo(()=>Zw(Wn,es),[Wn,es]),di=j=>{var ae;const L=j.commit.id,H=j.commit.visualId;if(As&&Si.has(L)||(Mo==null?void 0:Mo.commit.id)===L||tt===null)return!0;if(!tt.has(H))return!1;const K=Yn.get(H);return K&&((ae=an.get(K))!=null?ae:1)>1&&(Pt.has(K)||!Bs.has(K)&&!tn.has(K)),!0},Os=1.25/ls,To=Xw/ls,xn="border-border/70",Xs="border-select",zs=_.useMemo(()=>new Map(e.map(j=>[j.name,j])),[e]),Qo=(hi=st==null?void 0:st.hasUncommittedChanges)!=null?hi:!1;_.useMemo(()=>new Set(e.filter(j=>j.commitsAhead===0&&!j.name.startsWith("*")).map(j=>j.name)),[e]);const Ns=_.useMemo(()=>{var L,H;const j=new Map;for(const K of Wn){const ae=(L=j.get(K.commit.id))!=null?L:new Set;ae.add(K.commit.branchName),j.set(K.commit.id,ae)}for(const K of i){const ae=(H=j.get(K.fullSha))!=null?H:new Set;K.branch&&ae.add(K.branch),j.set(K.fullSha,ae)}return j},[Wn,i,d]),Zo=_.useMemo(()=>new Map(Object.entries(c).map(([j,L])=>[j,new Set(L)])),[c]),Lo=_.useMemo(()=>{var K;const j=new Set(i.map(ae=>ae.fullSha)),L=new Set,H=ae=>{ae&&(L.add(ae),L.add(ae.slice(0,7)))};for(const ae of e){if(ae.commitsBehind<=0)continue;const Ee=(K=he[ae.name])!=null?K:[];for(const Ae of Ee)Ae.kind==="branch-created"||Ae.kind==="uncommitted"||Ae.kind==="stash"||j.has(Ae.fullSha)||H(Ae.fullSha);ae.headSha&&!j.has(ae.headSha)&&H(ae.headSha)}return L},[e,he,i]),Oi=_.useCallback(()=>{gs.current,on()},[on,gs]),{isMarqueeSelecting:io,marqueeRect:Ao,selectedCommitShas:Jo,setSelectedCommitShas:Un,mergeTargetCommitSha:Cs,setMergeTargetCommitSha:No,startMarqueeDrag:ao}=fS({scrollContainerRef:pt,renderedCameraRef:rs,getTransformLayerOriginScreen:ys,renderNodes:Wn,shouldRenderNode:di,onPointerReleaseNoMarquee:Oi}),ro=_.useMemo(()=>new Set(Wn.map(j=>j.commit.id)),[Wn]),jn=_.useMemo(()=>Jo.filter(j=>ro.has(j)),[Jo,ro]),$s=_.useCallback((j,L)=>{var ae;if(!L)return!1;if(((ae=he[j])!=null?ae:[]).some(Ee=>Bi(Ee.fullSha,L)||Bi(Ee.sha,L)))return!0;const K=zs.get(j);return!!(K!=null&&K.headSha&&Bi(K.headSha,L))},[he,zs]),Rn=(Wo=st==null?void 0:st.branchName)!=null?Wo:null,Ps=(Fo=st==null?void 0:st.headSha)!=null?Fo:null,Vo=Rn==null,Yo=_.useMemo(()=>{if(!vt)return null;const j=Wn.filter(L=>L.commit.id===vt);return j.length===0?null:j.length===1||!Mo?j[0]:j.reduce((L,H)=>{const K=(L.x-Mo.x)**2+(L.y-Mo.y)**2;return(H.x-Mo.x)**2+(H.y-Mo.y)**2<K?H:L})},[vt,Wn,Mo]),zi=_.useCallback((j,L,H)=>{for(const K of W){if(!sm(K,Z))continue;if(K.branchName){if(K.branchName===j&&Bi(K.headSha,L))return K;continue}if(!Bi(K.headSha,L)&&!Bi(K.headSha,H))continue;if(K.parentSha&&$s(j,K.parentSha)||$s(j,K.headSha))return K;const ae=zs.get(j);if(ae&&Bi(ae.headSha,K.headSha)||j===d&&i.some(Ee=>Bi(Ee.fullSha,K.headSha)))return K}return null},[W,Z,$s,zs,d,i]),ei=_.useCallback(j=>{for(const L of W)if(sm(L,Z)&&L.branchName===j)return L;return null},[W,Z]),xs=_.useCallback((j,L)=>{for(const H of W)if(sm(H,Z)&&(Bi(H.headSha,j)||Bi(H.headSha,L)))return H;return null},[W,Z]),Gs=_.useCallback(j=>{var L;return Array.from((L=Ns.get(j))!=null?L:[])},[Ns]),qn=_.useMemo(()=>{var Ee,Ae,Ne,me;const j=ct=>!/^stash\b/i.test(ct.trim()),L=new Map;for(const ct of jn){const _t=Gs(ct).filter(j);if(_t.length===0)continue;const zt=(Ee=_t.find(it=>it!==d))!=null?Ee:_t[0],Ct=jn.filter(it=>it!==ct).filter(it=>!new Set(Gs(it).filter(j)).has(zt));L.set(zt,{targetSha:ct,targetBranch:zt,sourceRefs:Ct})}const H=Array.from(L.values()),K=Cs?H.find(ct=>{var _t;return ct.targetSha===Cs||ct.targetBranch===((_t=Gs(Cs)[0])!=null?_t:"")}):null,ae=(Ae=K!=null?K:H[H.length-1])!=null?Ae:null;return{options:H,selected:ae,targetBranch:(Ne=ae==null?void 0:ae.targetBranch)!=null?Ne:null,sources:(me=ae==null?void 0:ae.sourceRefs)!=null?me:[]}},[jn,Gs,d,Cs]),$i=_.useMemo(()=>{const j=L=>!/^stash\b/i.test(L.trim());return jn.some(L=>{const H=Gs(L);return H.length>0&&H.filter(j).length===0})},[jn,Gs]),ki=jn.length>1&&qn.options.length>0&&!!qn.targetBranch&&qn.sources.length>0&&!$i&&!!A,[ti,Lt]=_.useState(!1);_.useEffect(()=>{ki&&Lt(!1)},[ki,jn]);const vo=_.useMemo(()=>{const j=[...Rn===d?[{name:d,headSha:Ps!=null?Ps:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...e].filter(L=>!L.name.startsWith("*")&&L.unpushedCommits>0&&L.remoteSyncStatus!=="on-github").map(L=>[L.name,L]);return new Map(j)},[e,Rn,Ps,d,a.length]),qs=_.useMemo(()=>{const j=K=>{var Ee;const ae=Gs(K).filter(Ae=>vo.has(Ae));return ae.length===0?null:ae.length===1?ae[0]:Rn&&ae.includes(Rn)?Rn:(Ee=ae.find(Ae=>Ae!==d))!=null?Ee:ae[0]},L=K=>{var ae;return K===d?a.map(Ee=>{var Ae,Ne;return{fullSha:Ee.fullSha,sha:Ee.sha,parentSha:(Ae=Ee.parentSha)!=null?Ae:null,message:Ee.message,author:Ee.author,date:Ee.date,kind:(Ne=Ee.kind)!=null?Ne:"commit"}}):(ae=he[K])!=null?ae:[]},H=new Map;for(const K of jn){const ae=j(K);if(!ae)continue;const Ee=vo.get(ae);if(!Ee)continue;const Ae=L(ae).slice(0,Ee.unpushedCommits),Ne=Ae.findIndex(ct=>ct.fullSha===K);if(Ne===-1)continue;const me=H.get(ae);(!me||Ne<me.targetIndex)&&H.set(ae,{branchName:ae,targetSha:K,targetIndex:Ne,commitCount:Ae.length-Ne})}return Array.from(H.values())},[jn,Gs,vo,Rn,d,a,he]),fi=_.useMemo(()=>Array.from(new Set(jn.map(j=>/^STASH:(\d+)$/.exec(j)).filter(j=>!!j).map(j=>parseInt(j[1],10)))).sort((j,L)=>j-L),[jn]),ni=jn.includes("WORKING_TREE"),Oo=(ni?1:0)+fi.length,ji=[...ni?["Uncommitted changes"]:[],...fi.map(j=>`Stash ${j+1}`)],Qi=vo.size,Zi=!Vo&&!!Rn&&vo.has(Rn),E=Rn?`Push ${Rn}`:"Push current branch",X=qs.length===1?qs[0].commitCount>1?`Push ${qs[0].commitCount} commits on ${qs[0].branchName}`:`Push ${qs[0].targetSha.slice(0,7)} on ${qs[0].branchName}`:`Push ${qs.length} selected ranges`,ue=_.useCallback(j=>{const L=j.target;L!=null&&L.closest('.window-no-drag, input, textarea, select, button, [contenteditable="true"]')||wp().startDragging()},[]);_.useEffect(()=>{const j=Qt||io;ot.current!==j&&(ot.current=j,Kt==null||Kt(j))},[Qt,io,Kt]),_.useEffect(()=>{const j=Ss?Ws.length:null;F.current!==j&&(F.current=j,Rt==null||Rt(j))},[Ws.length,Ss,Rt]),_.useEffect(()=>{const j=Ss&&vt?(()=>{const L=Ws.findIndex(H=>H.commit.id===vt);return L>=0?L:null})():null;ee.current!==j&&(ee.current=j,dt==null||dt(j))},[vt,Ws,Ss,dt]);const je=_.useMemo(()=>{var me,ct,_t,zt,Ct,it;if(!Ss)return null;const j=Ss,L=e.map(lt=>lt.name),H=L.find(lt=>lt.toLowerCase()===j),K=H!=null?H:L.find(lt=>lt.toLowerCase().startsWith(j)),Ee=K!=null?K:L.find(lt=>lt.toLowerCase().includes(j));if(!Ee)return null;const Ae=(me=e.find(lt=>lt.name===Ee))!=null?me:null;if(Ae!=null&&Ae.headSha)return Ae.headSha;const Ne=(ct=he[Ee])!=null?ct:[];return Ne.length>0?(zt=(_t=Ne[0])==null?void 0:_t.fullSha)!=null?zt:null:Ee===d&&(it=(Ct=i[0])==null?void 0:Ct.fullSha)!=null?it:null},[Ss,e,he,d,i]);_.useEffect(()=>{var K,ae,Ee;if(!Ss){if(Me.current=ht,ve.current===null)return;ve.current=null,qt==null||qt(null);return}if(ht<=0||Me.current===ht)return;Me.current=ht;let j;const L=vt?Ws.findIndex(Ae=>Ae.commit.id===vt):-1,H=Ws.length>0?L<0?0:(L+jt+Ws.length)%Ws.length:-1;j=(Ee=(ae=(K=Ws[H])==null?void 0:K.commit.id)!=null?ae:je)!=null?Ee:null,ve.current!==j&&(ve.current=j,qt==null||qt(j))},[Ws,Ss,qt,je,ht,jt]),_.useLayoutEffect(()=>{if(!vt)return;const j=`${vt}:${ht}`;if(nt.current===j)return;const L=pt.current,H=Yo;if(!L||!H)return;const K=ys();if(!K)return;const ae=L.getBoundingClientRect(),Ee=rs.current.zoom,Ae=Ee/ia,Ne=H.x+Pn/2,me=H.y+Ol+Us/2,ct=ae.left+ae.width/2,_t=ae.top+ae.height/2;Ts(ct-K.x-Ne*Ae,_t-K.y-me*Ae,Ee),nt.current=j},[vt,ht,Yo,ys,Ts,rs]);const Ve=(U=(O=fs==null?void 0:fs.width)!=null?O:(la=pt.current)==null?void 0:la.clientWidth)!=null?U:0,at=(k=(v=fs==null?void 0:fs.height)!=null?v:(w=pt.current)==null?void 0:w.clientHeight)!=null?k:0,Yt=Ve>0&&at>0?Dy(Ve,at,rs.current,{innerPaddingPx:Hd}):null,Ht=Yt!=null?Ry(Yt,rs.current.zoom):null,Ft=j=>{if(!Ht)return!0;const{fromX:L,fromY:H,toX:K,toY:ae}=j;return Qw(L,H,K,ae,Ht,j.fromFace,j.toFace)};_.useLayoutEffect(()=>{var Ae;const j=pt.current;if(!j||j.clientWidth<=0||j.clientHeight<=0)return;const L=j.clientWidth,H=j.clientHeight;Ro(Ne=>(Ne==null?void 0:Ne.width)===L&&(Ne==null?void 0:Ne.height)===H?Ne:{width:L,height:H});const K=Dy(L,H,rs.current,{innerPaddingPx:Hd});if(!K){ds(Ne=>Ne===null?Ne:null);return}const ae=Ry(K,rs.current.zoom),Ee=Jw(bo,ae,Tn,es);for(const Ne of Wn){const me=Yn.get(Ne.commit.visualId);if(!me||((Ae=an.get(me))!=null?Ae:1)<=1)continue;(Pt.has(me)||!Bs.has(me)&&!tn.has(me))&&Ee.add(Ne.commit.visualId)}ds(Ne=>qw(Ne,Ee)?Ne:Ee)},[Ln,ht,vt,nn,Pt,tn,Bs,Yn,an,Wn,fs,bo,Tn,es]),_.useLayoutEffect(()=>{const j=pt.current;if(!j)return;const L=()=>{const K=j.clientWidth,ae=j.clientHeight;K<=0||ae<=0||Ro(Ee=>(Ee==null?void 0:Ee.width)===K&&(Ee==null?void 0:Ee.height)===ae?Ee:{width:K,height:ae})};L();const H=new ResizeObserver(L);return H.observe(j),()=>H.disconnect()},[so.length]);const hn=Wn.filter(j=>di(j)).length,vn=Fn.filter(j=>Ft(j)).length,rn=Ls.filter(j=>Ft(j)).length,Vn=_.useCallback((j,L)=>{if(dn.current){j.preventDefault(),j.stopPropagation();return}j.stopPropagation();const H=L.commit.id;if(j.shiftKey?(Un(Ae=>Ae.includes(H)?Ae.filter(Ne=>Ne!==H):[...Ae,H]),No(H)):(Un(Ae=>Ae.includes(H)?[]:[H]),No(Ae=>Ae===H?null:H)),!(j.metaKey||j.ctrlKey||j.detail>=2)||H==="WORKING_TREE")return;const ae=H.length>=40?H.slice(0,7):H;let Ee=null;if(L.commit.branchName?(Ee=zi(L.commit.branchName,H,ae),Ee||(Ee=ei(L.commit.branchName))):Ee=xs(H,ae),Ee&&pe){pe(Ee.path);return}h==null||h({commitSha:H})},[xs,zi,ei,h,pe]),gn=_.useCallback((j,L)=>{var Ne,me,ct,_t,zt;if(j.button!==0)return;const H=j.target;if(H!=null&&H.closest('[data-selectable-text="true"]')||H!=null&&H.closest("button, a, input, textarea, select"))return;j.stopPropagation(),j.preventDefault(),dn.current=!1,j.currentTarget.setPointerCapture(j.pointerId);const K=(Ne=Tt[L.commit.visualId])!=null?Ne:Tt[L.commit.id];sn.current={nodeId:L.commit.visualId,startX:j.clientX,startY:j.clientY,baseX:(me=K==null?void 0:K.x)!=null?me:L.x,baseY:(ct=K==null?void 0:K.y)!=null?ct:L.y,moved:!1,pendingX:(_t=K==null?void 0:K.x)!=null?_t:L.x,pendingY:(zt=K==null?void 0:K.y)!=null?zt:L.y};const ae=()=>{Zt.current=null;const Ct=sn.current;Ct&&bt(it=>({...it,[Ct.nodeId]:{x:Ct.pendingX,y:Ct.pendingY}}))},Ee=Ct=>{const it=sn.current;if(!it)return;const lt=rs.current.zoom/ia,St=lt>0?1/lt:1,wn=(Ct.clientX-it.startX)*St,fn=(Ct.clientY-it.startY)*St;(Math.abs(wn)>2||Math.abs(fn)>2)&&(it.moved=!0),it.moved&&(dn.current=!0),it.pendingX=it.baseX+wn,it.pendingY=it.baseY+fn,Zt.current==null&&(Zt.current=window.requestAnimationFrame(ae))},Ae=()=>{window.removeEventListener("pointermove",Ee),window.removeEventListener("pointerup",Ae),window.removeEventListener("pointercancel",Ae),Zt.current!=null&&(window.cancelAnimationFrame(Zt.current),Zt.current=null,ae());try{j.currentTarget.releasePointerCapture(j.pointerId)}catch{}const Ct=sn.current;sn.current=null,Ct&&window.setTimeout(()=>{dn.current=!1},0)};window.addEventListener("pointermove",Ee),window.addEventListener("pointerup",Ae),window.addEventListener("pointercancel",Ae)},[Tt]),Vt=_.useCallback(async()=>{if(!oe)return;await oe(Ye)&&(Ze(!1),Je(""))},[oe,Ye]),An=_.useCallback(async()=>{q&&(await q({branchNames:[],discardUncommittedChanges:ni,stashIndices:fi}),et(!1),Un([]),No(null))},[q,ni,fi]),ks=_.useCallback(async()=>{var L;const j=Ke.trim();if(j){if(wt==="new-root"){if(!I)return;await I(j)}else{if(!Se)return;const H=jn.length===1?jn[0]:(L=st==null?void 0:st.headSha)!=null?L:null;if(!H||!(H==="WORKING_TREE"||H.startsWith("STASH:")||H===(st==null?void 0:st.headSha)))return;await Se(H,j)}xt(!1),Ot(""),ft("from-selected-node"),Un([]),No(null)}},[st==null?void 0:st.headSha,wt,Ke,Se,I,jn]),wo=!!(st!=null&&st.headSha),en=jn.length===0&&wo,Ds=jn.length===1&&(jn[0]==="WORKING_TREE"||jn[0].startsWith("STASH:"))||en,lo=!!I;return _.useEffect(()=>{if(yt){if(!Ds&&!en&&lo){ft("new-root");return}(Ds||en)&&ft("from-selected-node")}},[lo,en,yt,Ds]),_.useEffect(()=>{const j=gt.current;if(!j)return;const L=640,H=440,K=()=>{const Ee=j.getBoundingClientRect().width;jo(Ee<L),Bo(Ee<H)};K();const ae=new ResizeObserver(()=>K());return ae.observe(j),()=>ae.disconnect()},[]),_.useEffect(()=>{const j=L=>{if(!q||Be||jn.length===0)return;const H=L.target;H!=null&&H.closest('input, textarea, select, button, [contenteditable="true"]')||L.key!=="Delete"&&L.key!=="Backspace"||(L.preventDefault(),et(!0))};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[Be,q,jn.length]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-background",children:[l.jsx(iS,{isOpen:te,onClose:()=>be==null?void 0:be(),visibleBounds:Ht,renderedNodeCount:hn,totalNodeCount:Wn.length,renderedMergeConnectorCount:vn,totalMergeConnectorCount:Fn.length,renderedConnectorCount:rn,totalConnectorCount:Ls.length,mapGridCullViewportInsetScreenPx:Ww,debugRows:yo.debugRows,branchDebugRows:yo.branchDebugRows,connectorDecisions:Xn}),He?l.jsxs("header",{"data-tauri-drag-region":!0,onPointerDown:ue,className:"window-drag-region pointer-events-none absolute inset-x-0 top-0 z-[70] flex w-full select-none",children:[l.jsxs("div",{ref:gt,className:"pointer-events-auto ml-auto flex w-full max-w-[calc(100vw-116px)] min-w-0 items-start justify-between gap-3 p-2.25 select-none",children:[l.jsx("div",{className:"flex min-w-0 flex-nowrap items-center justify-start gap-3 overflow-visible",children:l.jsx(nS,{compactLabels:no,selectedVisibleCommitShas:jn,commitInProgress:$,commitDisabled:ne,stageInProgress:fe,stashInProgress:Xe,stashDisabled:ie,pushInProgress:N,hasUncommittedChanges:Qo,createBranchFromNodeInProgress:re,onCommitLocalChanges:oe,onStageAllChanges:Y?()=>void Y():void 0,onStashLocalChanges:De,onPushCurrentBranch:V,onPushAllBranches:D,onPushCommitTargets:z,onMergeRefsIntoBranch:A,selectedPushTargets:qs,selectedPushLabel:X,canPushCurrentBranch:Zi,pushCurrentBranchLabel:E,pushableRemoteBranchCount:Qi,selectedCommitTargetOption:qn,mergeInProgress:T,mergeTargetCommitSha:Cs,setMergeTargetCommitSha:No,worktrees:W,currentRepoPath:Z,worktreeMenuOpen:Ge,setWorktreeMenuOpen:Le,onSwitchToWorktree:pe,onRemoveWorktree:ce,removeWorktreeInProgress:de,setCommitDialogOpen:Ze,setNewBranchDialogOpen:xt,hideMergeControls:!0})}),l.jsx("div",{className:"flex min-w-0 shrink-0 items-center justify-end gap-2",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto flex items-center gap-2",children:[go?null:l.jsx(lS,{query:He.gridSearchQuery,onQueryChange:He.setGridSearchQuery,resultCount:He.gridSearchResultCount,resultIndex:He.gridSearchResultIndex,onJump:j=>{He.setGridSearchJumpDirection(j),He.setGridSearchJumpToken(L=>L+1)}}),l.jsx(rS,{compactLabels:no,orientation:He.mapGridOrientation,onOrientationChange:He.setMapGridOrientation})]})})]}),l.jsxs("div",{className:"pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5",children:[(B=He.githubAuthStatus)!=null&&B.ghAvailable&&!He.githubAuthStatus.authenticated?l.jsx("button",{onClick:He.onGitHubAuthSetup,disabled:He.githubAuthLoading,className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:He.githubAuthLoading?"Connecting GitHub...":"Connect GitHub"}):null,He.githubAuthStatus&&!He.githubAuthStatus.ghAvailable?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] font-medium text-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",children:"Install `gh` for private PR data"})]}):null,He.githubAuthMessage?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] text-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",title:He.githubAuthMessage,children:He.githubAuthMessage})]}):null,He.commitSwitchFeedback?l.jsxs("div",{className:`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200 ${He.isCommitSwitchFeedbackVisible?"opacity-100":"opacity-0"} ${He.commitSwitchFeedback.kind==="error"?"border-red-500/25 bg-red-50/95 text-red-600 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-400":"border-blue-500/25 bg-blue-50/95 text-blue-600 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-400"}`,title:He.commitSwitchFeedback.message,children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium opacity-70",children:He.commitSwitchFeedback.kind==="error"?"Alert":"Update"}),l.jsx("p",{className:"truncate text-[11px]",children:He.commitSwitchFeedback.message})]}):null]})]}):null,ki?l.jsx("div",{className:"pointer-events-none absolute bottom-2.25 left-1/2 z-[80] -translate-x-1/2",children:l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-2.25",children:[l.jsxs("div",{className:"inline-flex h-7 items-center rounded-md border border-border bg-background/95 pl-[2px] pr-[4px] backdrop-blur-sm",children:[l.jsx("span",{className:"px-2 text-[11px] font-medium text-foreground",children:"Merge to..."}),l.jsxs("div",{className:"relative inline-flex h-5 items-center rounded-[2px] bg-muted/30 p-0.5",children:[l.jsx("div",{className:"absolute inset-0.5 overflow-hidden rounded-[1px]",children:l.jsx("div",{className:`h-full rounded-[1px] bg-border ${ti?"transition-all duration-200 ease-in-out":""}`,style:{width:`var(--${as}-active-width, 0px)`,transform:`translateX(var(--${as}-active-offset, 0px))`}})}),qn.options.map(j=>{const L=j.targetBranch===qn.targetBranch;return l.jsx("button",{type:"button",onClick:()=>{j.targetSha!==Cs&&Lt(!0),No(j.targetSha)},ref:H=>{if(!H)return;const K=H.parentElement;if(!K||!L)return;const ae=H.getBoundingClientRect(),Ee=K.getBoundingClientRect();K.style.setProperty(`--${as}-active-width`,`${ae.width}px`),K.style.setProperty(`--${as}-active-offset`,`${ae.left-Ee.left}px`)},className:`relative z-10 h-4.5 px-2 text-[11px] font-medium transition-colors ${L?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:j.targetBranch},`merge-${j.targetBranch}`)})]})]}),l.jsxs("button",{type:"button",onClick:()=>void A(qn.sources,qn.targetBranch),disabled:qn.sources.length===0||T,className:"inline-flex h-7 items-center rounded-md border border-border bg-background px-2 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(eb,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),T?"Merging...":"Confirm"]})]})}):null,x||so.length===0?l.jsx(hS,{}):l.jsx(oS,{scrollContainerRef:pt,mapPadHostRef:Mt,transformLayerRef:Bt,isMarqueeSelecting:io,contentWidth:Fs,contentHeight:On,isCameraMoving:Qt,onWheel:Rs,onMouseDown:ao,onNodePointerDown:gn,labelTopPx:es,inverseZoomStyle:Eo,displayZoom:ls,selectedVisibleCommitShas:jn,normalizedSearchQuery:Ss,matchingNodeIds:Si,focusedNode:Yo,renderNodes:Wn,shouldRenderNode:di,manuallyOpenedClumps:Pt,manuallyClosedClumps:tn,defaultCollapsedClumps:Bs,leadByClusterKey:Ys,clusterKeyByCommitId:Yn,clusterCounts:an,commitIdsWithRenderedAncestry:ps,nodeWarnings:ui,connectorParentShas:oo,branchStartShas:Jt,branchOffNodeShas:Ci,crossBranchOutgoingShas:Gn,branchBaseCommitByName:Li,branchStartAccentClass:Xs,connectorParentAccentClass:xn,commitCornerRadiusPx:To,lineStrokeWidth:Os,pointFormatter:xo,connectors:Ls,mergeConnectors:Fn,cullConnectorPath:Ft,flushCameraReactTick:on,setManuallyOpenedClumps:Nt,setManuallyClosedClumps:bn,onCommitCardClick:Vn,unpushedCommitShasSetByBranch:Zo,remoteCommitShas:Lo,checkedOutHeadSha:Ps,orientation:Te}),Ao&&io?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:Ao.left,top:Ao.top,width:Ao.width,height:Ao.height,borderColor:"var(--select)",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(aS,{commitDialogOpen:_e,commitMessageDraft:Ye,onCommitMessageDraftChange:Je,onCommitDialogClose:()=>Ze(!1),onCommitConfirm:()=>void Vt(),commitInProgress:$,deleteConfirmOpen:Be,deleteSelectionItems:ji,onDeleteConfirmClose:()=>et(!1),onDeleteConfirm:()=>void An(),deleteInProgress:G,deletableSelectionCount:Oo,newBranchDialogOpen:yt,newBranchName:Ke,newBranchCreateMode:wt,onNewBranchNameChange:Ot,onNewBranchCreateModeChange:ft,onNewBranchDialogClose:()=>xt(!1),onNewBranchConfirm:()=>void ks(),selectedCommitCanCreateBranch:Ds,currentCheckedOutCommitCanCreateBranch:en,createBranchFromNodeInProgress:re})]})}function mS({branches:e,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y={},branchCommitPreviews:g={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:C="",gridSearchJumpToken:M=0,gridSearchJumpDirection:A=1,gridFocusSha:T=null,onGridSearchResultCountChange:D,onGridSearchResultIndexChange:V,onGridSearchFocusChange:z,view:N="time",isLoading:q=!1,scrollRequest:G,focusedErrorBranch:W,checkedOutRef:Z=null,mapTopInsetPx:ce=0,onMergeRefsIntoBranch:de,mergeInProgress:pe=!1,onPushAllBranches:De,onPushCurrentBranch:Xe,onPushCommitTargets:ie,pushInProgress:oe=!1,onDeleteSelection:$,worktrees:ne=[],currentRepoPath:Y,onRemoveWorktree:fe,removeWorktreeInProgress:Se=!1,onSwitchToWorktree:I,onStashLocalChanges:re,stashInProgress:te=!1,stashDisabled:be=!1,onCommitLocalChanges:Te,commitInProgress:he=!1,commitDisabled:ze=!1,onStageAllChanges:Qe,stageInProgress:We=!1,onCreateBranchFromNode:ht,onCreateRootBranch:jt,createBranchFromNodeInProgress:vt=!1,isMutationBusy:st=!1,onMoveNodeBackToBranch:Rt,isDebugOpen:dt=!1,onDebugClose:qt,orientation:Kt="horizontal",onInteractionChange:J,manuallyOpenedClumps:Re,manuallyClosedClumps:rt,setManuallyOpenedClumps:Ce,setManuallyClosedClumps:mt,layoutModel:He,gridHudProps:pt}){const gt=new Set(u.map(ee=>ee.branchName)),Mt=14*864e5,Bt=Date.now();function ot(ee){return gt.has(ee.name)||Bt-new Date(ee.lastCommitDate).getTime()<=Mt}const F=e.filter(ee=>ee.status==="stale"&&ot(ee)).sort((ee,ve)=>new Date(ve.lastCommitDate).getTime()-new Date(ee.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:N==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(Oy,{branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:C,gridSearchJumpToken:M,gridSearchJumpDirection:A,gridFocusSha:T,onGridSearchResultCountChange:D,onGridSearchResultIndexChange:V,onGridSearchFocusChange:z,staleBranches:F,isLoading:q,scrollRequest:G,focusedErrorBranch:W,checkedOutRef:Z,mapTopInsetPx:ce,onMergeRefsIntoBranch:de,mergeInProgress:pe,onPushAllBranches:De,onPushCurrentBranch:Xe,onPushCommitTargets:ie,pushInProgress:oe,onDeleteSelection:$,worktrees:ne,currentRepoPath:Y,onRemoveWorktree:fe,removeWorktreeInProgress:Se,onSwitchToWorktree:I,onStashLocalChanges:re,stashInProgress:te,stashDisabled:be,onCommitLocalChanges:Te,commitInProgress:he,commitDisabled:ze,onStageAllChanges:Qe,stageInProgress:We,onCreateBranchFromNode:ht,onCreateRootBranch:jt,createBranchFromNodeInProgress:vt,isMutationBusy:st,onMoveNodeBackToBranch:Rt,isDebugOpen:dt,onDebugClose:qt,orientation:Kt,onInteractionChange:J,manuallyOpenedClumps:Re,manuallyClosedClumps:rt,setManuallyOpenedClumps:Ce,setManuallyClosedClumps:mt,layoutModel:He,gridHudProps:pt})}):N==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(Oy,{branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,isLoading:q,defaultBranch:d,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:C,gridSearchJumpToken:M,gridSearchJumpDirection:A,gridFocusSha:T,checkedOutRef:Z,onGridSearchResultCountChange:D,onGridSearchResultIndexChange:V,onGridSearchFocusChange:z,onInteractionChange:J,manuallyOpenedClumps:Re,manuallyClosedClumps:rt,setManuallyOpenedClumps:Ce,setManuallyClosedClumps:mt,layoutModel:He,isDebugOpen:dt,onDebugClose:qt,orientation:Kt,gridHudProps:pt})}):null})}var zl=Fx();const jp=_.createContext({});function Jc(e){const n=_.useRef(null);return n.current===null&&(n.current=e()),n.current}const pS=typeof window<"u",Mp=pS?_.useLayoutEffect:_.useEffect,ef=_.createContext(null);function Ep(e,n){e.indexOf(n)===-1&&e.push(n)}function Dl(e,n){const i=e.indexOf(n);i>-1&&e.splice(i,1)}const ya=(e,n,i)=>i>n?n:i<e?e:i;let Tp=()=>{};const mr={},rb=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function lb(e){return typeof e=="object"&&e!==null}const cb=e=>/^0[^.\s]+$/u.test(e);function ub(e){let n;return()=>(n===void 0&&(n=e()),n)}const qi=e=>e,_S=(e,n)=>i=>n(e(i)),eu=(...e)=>e.reduce(_S),Rl=(e,n,i)=>{const a=n-e;return a===0?1:(i-e)/a};class Ap{constructor(){this.subscriptions=[]}add(n){return Ep(this.subscriptions,n),()=>Dl(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const wi=e=>e*1e3,Gi=e=>e/1e3;function db(e,n){return n?e*(1e3/n):0}const gS=(e,n,i)=>{const a=n-e;return((i-e)%a+a)%a+e},fb=(e,n,i)=>(((1-3*i+3*n)*e+(3*i-6*n))*e+3*n)*e,yS=1e-7,xS=12;function bS(e,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=fb(d,a,c)-e,u>0?i=d:n=d;while(Math.abs(u)>yS&&++h<xS);return d}function tu(e,n,i,a){if(e===n&&i===a)return qi;const c=u=>bS(u,0,1,e,i);return u=>u===0||u===1?u:fb(c(u),n,a)}const hb=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,mb=e=>n=>1-e(1-n),pb=tu(.33,1.53,.69,.99),Np=mb(pb),_b=hb(Np),gb=e=>e>=1?1:(e*=2)<1?.5*Np(e):.5*(2-Math.pow(2,-10*(e-1))),Dp=e=>1-Math.sin(Math.acos(e)),yb=mb(Dp),xb=hb(Dp),vS=tu(.42,0,1,1),wS=tu(0,0,.58,1),bb=tu(.42,0,.58,1),vb=e=>Array.isArray(e)&&typeof e[0]!="number";function wb(e,n){return vb(e)?e[gS(0,e.length,n)]:e}const Sb=e=>Array.isArray(e)&&typeof e[0]=="number",SS={linear:qi,easeIn:vS,easeInOut:bb,easeOut:wS,circIn:Dp,circInOut:xb,circOut:yb,backIn:Np,backInOut:_b,backOut:pb,anticipate:gb},CS=e=>typeof e=="string",zy=e=>{if(Sb(e)){Tp(e.length===4);const[n,i,a,c]=e;return tu(n,i,a,c)}else if(CS(e))return SS[e];return e},rd=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function kS(e,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(g){d.has(g)&&(y.schedule(g),e()),g(h)}const y={schedule:(g,x=!1,b=!1)=>{const M=b&&c?i:a;return x&&d.add(g),M.add(g),g},cancel:g=>{a.delete(g),d.delete(g)},process:g=>{if(h=g,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,y.process(g))}};return y}const jS=40;function Cb(e,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=rd.reduce((z,N)=>(z[N]=kS(u),z),{}),{setup:h,read:p,resolveKeyframes:y,preUpdate:g,update:x,preRender:b,render:C,postRender:M}=d,A=()=>{const z=mr.useManualTiming,N=z?c.timestamp:performance.now();i=!1,z||(c.delta=a?1e3/60:Math.max(Math.min(N-c.timestamp,jS),1)),c.timestamp=N,c.isProcessing=!0,h.process(c),p.process(c),y.process(c),g.process(c),x.process(c),b.process(c),C.process(c),M.process(c),c.isProcessing=!1,i&&n&&(a=!1,e(A))},T=()=>{i=!0,a=!0,c.isProcessing||e(A)};return{schedule:rd.reduce((z,N)=>{const q=d[N];return z[N]=(G,W=!1,Z=!1)=>(i||T(),q.schedule(G,W,Z)),z},{}),cancel:z=>{for(let N=0;N<rd.length;N++)d[rd[N]].cancel(z)},state:c,steps:d}}const{schedule:is,cancel:Ia,state:Uo,steps:om}=Cb(typeof requestAnimationFrame<"u"?requestAnimationFrame:qi,!0);let Ad;function MS(){Ad=void 0}const ai={now:()=>(Ad===void 0&&ai.set(Uo.isProcessing||mr.useManualTiming?Uo.timestamp:performance.now()),Ad),set:e=>{Ad=e,queueMicrotask(MS)}},kb=e=>n=>typeof n=="string"&&n.startsWith(e),jb=kb("--"),ES=kb("var(--"),Rp=e=>ES(e)?TS.test(e.split("/*")[0].trim()):!1,TS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function $y(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const $l={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Xc={...$l,transform:e=>ya(0,1,e)},ld={...$l,default:1},Hc=e=>Math.round(e*1e5)/1e5,Bp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function AS(e){return e==null}const NS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Lp=(e,n)=>i=>!!(typeof i=="string"&&NS.test(i)&&i.startsWith(e)||n&&!AS(i)&&Object.prototype.hasOwnProperty.call(i,n)),Mb=(e,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(Bp);return{[e]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},DS=e=>ya(0,255,e),im={...$l,transform:e=>Math.round(DS(e))},Ir={test:Lp("rgb","red"),parse:Mb("red","green","blue"),transform:({red:e,green:n,blue:i,alpha:a=1})=>"rgba("+im.transform(e)+", "+im.transform(n)+", "+im.transform(i)+", "+Hc(Xc.transform(a))+")"};function RS(e){let n="",i="",a="",c="";return e.length>5?(n=e.substring(1,3),i=e.substring(3,5),a=e.substring(5,7),c=e.substring(7,9)):(n=e.substring(1,2),i=e.substring(2,3),a=e.substring(3,4),c=e.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const Hm={test:Lp("#"),parse:RS,transform:Ir.transform},nu=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),ur=nu("deg"),ga=nu("%"),Dt=nu("px"),BS=nu("vh"),LS=nu("vw"),Py={...ga,parse:e=>ga.parse(e)/100,transform:e=>ga.transform(e*100)},Ml={test:Lp("hsl","hue"),parse:Mb("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(e)+", "+ga.transform(Hc(n))+", "+ga.transform(Hc(i))+", "+Hc(Xc.transform(a))+")"},_o={test:e=>Ir.test(e)||Hm.test(e)||Ml.test(e),parse:e=>Ir.test(e)?Ir.parse(e):Ml.test(e)?Ml.parse(e):Hm.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Ir.transform(e):Ml.transform(e),getAnimatableNone:e=>{const n=_o.parse(e);return n.alpha=0,_o.transform(n)}},OS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function zS(e){var n,i;return isNaN(e)&&typeof e=="string"&&(((n=e.match(Bp))==null?void 0:n.length)||0)+(((i=e.match(OS))==null?void 0:i.length)||0)>0}const Eb="number",Tb="color",$S="var",PS="var(",Iy="${}",IS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Bl(e){const n=e.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(IS,p=>(_o.test(p)?(a.color.push(u),c.push(Tb),i.push(_o.parse(p))):p.startsWith(PS)?(a.var.push(u),c.push($S),i.push(p)):(a.number.push(u),c.push(Eb),i.push(parseFloat(p))),++u,Iy)).split(Iy);return{values:i,split:h,indexes:a,types:c}}function HS(e){return Bl(e).values}function Ab({split:e,types:n}){const i=e.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=e[u],a[u]!==void 0){const d=n[u];d===Eb?c+=Hc(a[u]):d===Tb?c+=_o.transform(a[u]):c+=a[u]}return c}}function US(e){return Ab(Bl(e))}const VS=e=>typeof e=="number"?0:_o.test(e)?_o.getAnimatableNone(e):e,YS=(e,n)=>typeof e=="number"?n!=null&&n.trim().endsWith("/")?e:0:VS(e);function WS(e){const n=Bl(e);return Ab(n)(n.values.map((a,c)=>YS(a,n.split[c])))}const aa={test:zS,parse:HS,createTransformer:US,getAnimatableNone:WS};function am(e,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(n-e)*6*i:i<1/2?n:i<2/3?e+(n-e)*(2/3-i)*6:e}function FS({hue:e,saturation:n,lightness:i,alpha:a}){e/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=am(p,h,e+1/3),u=am(p,h,e),d=am(p,h,e-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Ud(e,n){return i=>i>0?n:e}const _s=(e,n,i)=>e+(n-e)*i,rm=(e,n,i)=>{const a=e*e,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},XS=[Hm,Ir,Ml],GS=e=>XS.find(n=>n.test(e));function Hy(e){const n=GS(e);if(!n)return!1;let i=n.parse(e);return n===Ml&&(i=FS(i)),i}const Uy=(e,n)=>{const i=Hy(e),a=Hy(n);if(!i||!a)return Ud(e,n);const c={...i};return u=>(c.red=rm(i.red,a.red,u),c.green=rm(i.green,a.green,u),c.blue=rm(i.blue,a.blue,u),c.alpha=_s(i.alpha,a.alpha,u),Ir.transform(c))},Um=new Set(["none","hidden"]);function qS(e,n){return Um.has(e)?i=>i<=0?e:n:i=>i>=1?n:e}function KS(e,n){return i=>_s(e,n,i)}function Op(e){return typeof e=="number"?KS:typeof e=="string"?Rp(e)?Ud:_o.test(e)?Uy:JS:Array.isArray(e)?Nb:typeof e=="object"?_o.test(e)?Uy:QS:Ud}function Nb(e,n){const i=[...e],a=i.length,c=e.map((u,d)=>Op(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function QS(e,n){const i={...e,...n},a={};for(const c in i)e[c]!==void 0&&n[c]!==void 0&&(a[c]=Op(e[c])(e[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function ZS(e,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=e.indexes[d][a[d]],p=(c=e.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const JS=(e,n)=>{const i=aa.createTransformer(n),a=Bl(e),c=Bl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Um.has(e)&&!c.values.length||Um.has(n)&&!a.values.length?qS(e,n):eu(Nb(ZS(a,c),c.values),i):Ud(e,n)};function Db(e,n,i){return typeof e=="number"&&typeof n=="number"&&typeof i=="number"?_s(e,n,i):Op(e)(e,n)}const e4=e=>{const n=({timestamp:i})=>e(i);return{start:(i=!0)=>is.update(n,i),stop:()=>Ia(n),now:()=>Uo.isProcessing?Uo.timestamp:ai.now()}},Rb=(e,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(e(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Vd=2e4;function zp(e){let n=0;const i=50;let a=e.next(n);for(;!a.done&&n<Vd;)n+=i,a=e.next(n);return n>=Vd?1/0:n}function Bb(e,n=100,i){const a=i({...e,keyframes:[0,n]}),c=Math.min(zp(a),Vd);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Gi(c)}}const Vs={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Vm(e,n){return e*Math.sqrt(1-n*n)}const t4=12;function n4(e,n,i){let a=i;for(let c=1;c<t4;c++)a=a-e(a)/n(a);return a}const lm=.001;function s4({duration:e=Vs.duration,bounce:n=Vs.bounce,velocity:i=Vs.velocity,mass:a=Vs.mass}){let c,u,d=1-n;d=ya(Vs.minDamping,Vs.maxDamping,d),e=ya(Vs.minDuration,Vs.maxDuration,Gi(e)),d<1?(c=y=>{const g=y*d,x=g*e,b=g-i,C=Vm(y,d),M=Math.exp(-x);return lm-b/C*M},u=y=>{const x=y*d*e,b=x*i+i,C=Math.pow(d,2)*Math.pow(y,2)*e,M=Math.exp(-x),A=Vm(Math.pow(y,2),d);return(-c(y)+lm>0?-1:1)*((b-C)*M)/A}):(c=y=>{const g=Math.exp(-y*e),x=(y-i)*e+1;return-lm+g*x},u=y=>{const g=Math.exp(-y*e),x=(i-y)*(e*e);return g*x});const h=5/e,p=n4(c,u,h);if(e=wi(e),isNaN(p))return{stiffness:Vs.stiffness,damping:Vs.damping,duration:e};{const y=Math.pow(p,2)*a;return{stiffness:y,damping:d*2*Math.sqrt(a*y),duration:e}}}const o4=["duration","bounce"],i4=["stiffness","damping","mass"];function Vy(e,n){return n.some(i=>e[i]!==void 0)}function a4(e){let n={velocity:Vs.velocity,stiffness:Vs.stiffness,damping:Vs.damping,mass:Vs.mass,isResolvedFromDuration:!1,...e};if(!Vy(e,i4)&&Vy(e,o4))if(n.velocity=0,e.visualDuration){const i=e.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*ya(.05,1,1-(e.bounce||0))*Math.sqrt(c);n={...n,mass:Vs.mass,stiffness:c,damping:u}}else{const i=s4({...e,velocity:0});n={...n,...i,mass:Vs.mass},n.isResolvedFromDuration=!0}return n}function Gc(e=Vs.visualDuration,n=Vs.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:y,mass:g,duration:x,velocity:b,isResolvedFromDuration:C}=a4({...i,velocity:-Gi(i.velocity||0)}),M=b||0,A=y/(2*Math.sqrt(p*g)),T=d-u,D=Gi(Math.sqrt(p/g)),V=Math.abs(T)<5;a||(a=V?Vs.restSpeed.granular:Vs.restSpeed.default),c||(c=V?Vs.restDelta.granular:Vs.restDelta.default);let z,N,q,G,W,Z;if(A<1)q=Vm(D,A),G=(M+A*D*T)/q,z=de=>{const pe=Math.exp(-A*D*de);return d-pe*(G*Math.sin(q*de)+T*Math.cos(q*de))},W=A*D*G+T*q,Z=A*D*T-G*q,N=de=>Math.exp(-A*D*de)*(W*Math.sin(q*de)+Z*Math.cos(q*de));else if(A===1){z=pe=>d-Math.exp(-D*pe)*(T+(M+D*T)*pe);const de=M+D*T;N=pe=>Math.exp(-D*pe)*(D*de*pe-M)}else{const de=D*Math.sqrt(A*A-1);z=ie=>{const oe=Math.exp(-A*D*ie),$=Math.min(de*ie,300);return d-oe*((M+A*D*T)*Math.sinh($)+de*T*Math.cosh($))/de};const pe=(M+A*D*T)/de,De=A*D*pe-T*de,Xe=A*D*T-pe*de;N=ie=>{const oe=Math.exp(-A*D*ie),$=Math.min(de*ie,300);return oe*(De*Math.sinh($)+Xe*Math.cosh($))}}const ce={calculatedDuration:C&&x||null,velocity:de=>wi(N(de)),next:de=>{if(!C&&A<1){const De=Math.exp(-A*D*de),Xe=Math.sin(q*de),ie=Math.cos(q*de),oe=d-De*(G*Xe+T*ie),$=wi(De*(W*Xe+Z*ie));return h.done=Math.abs($)<=a&&Math.abs(d-oe)<=c,h.value=h.done?d:oe,h}const pe=z(de);if(C)h.done=de>=x;else{const De=wi(N(de));h.done=Math.abs(De)<=a&&Math.abs(d-pe)<=c}return h.value=h.done?d:pe,h},toString:()=>{const de=Math.min(zp(ce),Vd),pe=Rb(De=>ce.next(de*De).value,de,30);return de+"ms "+pe},toTransition:()=>{}};return ce}Gc.applyToOptions=e=>{const n=Bb(e,100,Gc);return e.ease=n.ease,e.duration=wi(n.duration),e.type="keyframes",e};const r4=5;function Lb(e,n,i){const a=Math.max(n-r4,0);return db(i-e(a),n-a)}function Ym({keyframes:e,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:y=.5,restSpeed:g}){const x=e[0],b={done:!1,value:x},C=Z=>h!==void 0&&Z<h||p!==void 0&&Z>p,M=Z=>h===void 0?p:p===void 0||Math.abs(h-Z)<Math.abs(p-Z)?h:p;let A=i*n;const T=x+A,D=d===void 0?T:d(T);D!==T&&(A=D-x);const V=Z=>-A*Math.exp(-Z/a),z=Z=>D+V(Z),N=Z=>{const ce=V(Z),de=z(Z);b.done=Math.abs(ce)<=y,b.value=b.done?D:de};let q,G;const W=Z=>{C(b.value)&&(q=Z,G=Gc({keyframes:[b.value,M(b.value)],velocity:Lb(z,Z,b.value),damping:c,stiffness:u,restDelta:y,restSpeed:g}))};return W(0),{calculatedDuration:null,next:Z=>{let ce=!1;return!G&&q===void 0&&(ce=!0,N(Z),W(Z)),q!==void 0&&Z>=q?G.next(Z-q):(!ce&&N(Z),b)}}}function l4(e,n,i){const a=[],c=i||mr.mix||Db,u=e.length-1;for(let d=0;d<u;d++){let h=c(e[d],e[d+1]);if(n){const p=Array.isArray(n)?n[d]||qi:n;h=eu(p,h)}a.push(h)}return a}function Ob(e,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=e.length;if(Tp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=e[0]===e[1];e[0]>e[u-1]&&(e=[...e].reverse(),n=[...n].reverse());const h=l4(n,a,c),p=h.length,y=g=>{if(d&&g<e[0])return n[0];let x=0;if(p>1)for(;x<e.length-2&&!(g<e[x+1]);x++);const b=Rl(e[x],e[x+1],g);return h[x](b)};return i?g=>y(ya(e[0],e[u-1],g)):y}function zb(e,n){const i=e[e.length-1];for(let a=1;a<=n;a++){const c=Rl(0,n,a);e.push(_s(i,1,c))}}function $b(e){const n=[0];return zb(n,e.length-1),n}function c4(e,n){return e.map(i=>i*n)}function u4(e,n){return e.map(()=>n||bb).splice(0,e.length-1)}function Uc({duration:e=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=vb(a)?a.map(zy):zy(a),u={done:!1,value:n[0]},d=c4(i&&i.length===n.length?i:$b(n),e),h=Ob(d,n,{ease:Array.isArray(c)?c:u4(n,c)});return{calculatedDuration:e,next:p=>(u.value=h(p),u.done=p>=e,u)}}const d4=e=>e!==null;function tf(e,{repeat:n,repeatType:i="loop"},a,c=1){const u=e.filter(d4),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const f4={decay:Ym,inertia:Ym,tween:Uc,keyframes:Uc,spring:Gc};function Pb(e){typeof e.type=="string"&&(e.type=f4[e.type])}class $p{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const h4=e=>e/100;class Yd extends $p{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==ai.now()&&this.tick(ai.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Pb(n);const{type:i=Uc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||Uc;p!==Uc&&typeof h[0]!="number"&&(this.mixKeyframes=eu(h4,Db(h[0],h[1])),h=[0,100]);const y=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),y.calculatedDuration===null&&(y.calculatedDuration=zp(y));const{calculatedDuration:g}=y;this.calculatedDuration=g,this.resolvedDuration=g+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=y}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:y=0,keyframes:g,repeat:x,repeatType:b,repeatDelay:C,type:M,onUpdate:A,finalKeyframe:T}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const D=this.currentTime-y*(this.playbackSpeed>=0?1:-1),V=this.playbackSpeed>=0?D<0:D>c;this.currentTime=Math.max(D,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let z=this.currentTime,N=a;if(x){const Z=Math.min(this.currentTime,c)/h;let ce=Math.floor(Z),de=Z%1;!de&&Z>=1&&(de=1),de===1&&ce--,ce=Math.min(ce,x+1),!!(ce%2)&&(b==="reverse"?(de=1-de,C&&(de-=C/h)):b==="mirror"&&(N=d)),z=ya(0,1,de)*h}let q;V?(this.delayState.value=g[0],q=this.delayState):q=N.next(z),u&&!V&&(q.value=u(q.value));let{done:G}=q;!V&&p!==null&&(G=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const W=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&G);return W&&M!==Ym&&(q.value=tf(g,this.options,T,this.speed)),A&&A(q.value),W&&this.finish(),q}then(n,i){return this.finished.then(n,i)}get duration(){return Gi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Gi(n)}get time(){return Gi(this.currentTime)}set time(n){n=wi(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Lb(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(ai.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Gi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=e4,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ai.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function m4(e){var n;for(let i=1;i<e.length;i++)(n=e[i])!=null||(e[i]=e[i-1])}const Hr=e=>e*180/Math.PI,Wm=e=>{const n=Hr(Math.atan2(e[1],e[0]));return Fm(n)},p4={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Wm,rotateZ:Wm,skewX:e=>Hr(Math.atan(e[1])),skewY:e=>Hr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Fm=e=>(e=e%360,e<0&&(e+=360),e),Yy=Wm,Wy=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Fy=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),_4={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Wy,scaleY:Fy,scale:e=>(Wy(e)+Fy(e))/2,rotateX:e=>Fm(Hr(Math.atan2(e[6],e[5]))),rotateY:e=>Fm(Hr(Math.atan2(-e[2],e[0]))),rotateZ:Yy,rotate:Yy,skewX:e=>Hr(Math.atan(e[4])),skewY:e=>Hr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Xm(e){return e.includes("scale")?1:0}function Gm(e,n){if(!e||e==="none")return Xm(n);const i=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=_4,c=i;else{const h=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=p4,c=h}if(!c)return Xm(n);const u=a[n],d=c[1].split(",").map(y4);return typeof u=="function"?u(d):d[u]}const g4=(e,n)=>{const{transform:i="none"}=getComputedStyle(e);return Gm(i,n)};function y4(e){return parseFloat(e.trim())}const Pl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Il=new Set(Pl),Xy=e=>e===$l||e===Dt,x4=new Set(["x","y","z"]),b4=Pl.filter(e=>!x4.has(e));function v4(e){const n=[];return b4.forEach(i=>{const a=e.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const hr={width:({x:e},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=e.max-e.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:e},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=e.max-e.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:(e,{transform:n})=>Gm(n,"x"),y:(e,{transform:n})=>Gm(n,"y")};hr.translateX=hr.x;hr.translateY=hr.y;const Ur=new Set;let qm=!1,Km=!1,Qm=!1;function Ib(){if(Km){const e=Array.from(Ur).filter(a=>a.needsMeasurement),n=new Set(e.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=v4(a);c.length&&(i.set(a,c),a.render())}),e.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Km=!1,qm=!1,Ur.forEach(e=>e.complete(Qm)),Ur.clear()}function Hb(){Ur.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Km=!0)})}function w4(){Qm=!0,Hb(),Ib(),Qm=!1}class Pp{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Ur.add(this),qm||(qm=!0,is.read(Hb),is.resolveKeyframes(Ib))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}m4(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Ur.delete(this)}cancel(){this.state==="scheduled"&&(Ur.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const S4=e=>e.startsWith("--");function Ub(e,n,i){S4(n)?e.style.setProperty(n,i):e.style[n]=i}const C4={};function Vb(e,n){const i=ub(e);return()=>{var a;return(a=C4[n])!=null?a:i()}}const k4=Vb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Yb=Vb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),zc=([e,n,i,a])=>`cubic-bezier(${e}, ${n}, ${i}, ${a})`,Gy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:zc([0,.65,.55,1]),circOut:zc([.55,0,1,.45]),backIn:zc([.31,.01,.66,-.59]),backOut:zc([.33,1.53,.69,.99])};function Wb(e,n){if(e)return typeof e=="function"?Yb()?Rb(e,n):"ease-out":Sb(e)?zc(e):Array.isArray(e)?e.map(i=>Wb(i,n)||Gy.easeOut):Gy[e]}function j4(e,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},y=void 0){const g={[n]:i};p&&(g.offset=p);const x=Wb(h,c);Array.isArray(x)&&(g.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return y&&(b.pseudoElement=y),e.animate(g,b)}function Ip(e){return typeof e=="function"&&"applyToOptions"in e}function M4({type:e,...n}){var i,a;return Ip(e)&&Yb()?e.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Fb extends $p{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,Tp(typeof n.type!="string");const y=M4(n);this.animation=j4(i,a,c,y,u),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=tf(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(g),Ub(i,a,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Gi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Gi(n)}get time(){return Gi(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=wi(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&k4()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),qi):c(this)}}const Xb={anticipate:gb,backInOut:_b,circInOut:xb};function E4(e){return e in Xb}function T4(e){typeof e.ease=="string"&&E4(e.ease)&&(e.ease=Xb[e.ease])}const cm=10;class A4 extends Fb{constructor(n){T4(n),Pb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Yd({...d,autoplay:!1}),p=Math.max(cm,ai.now()-this.startTime),y=ya(0,cm,p-cm),g=h.sample(p).value,{name:x}=this.options;u&&x&&Ub(u,x,g),i.setWithVelocity(h.sample(Math.max(0,p-y)).value,g,y),h.stop()}}const qy=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(aa.test(e)||e==="0")&&!e.startsWith("url("));function N4(e){const n=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}function D4(e,n,i,a){const c=e[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=e[e.length-1],d=qy(c,n),h=qy(u,n);return!d||!h?!1:N4(e)||(i==="spring"||Ip(i))&&a}function Zm(e){e.duration=0,e.type="keyframes"}const Gb=new Set(["opacity","clipPath","filter","transform"]),R4=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function B4(e){for(let n=0;n<e.length;n++)if(typeof e[n]=="string"&&R4.test(e[n]))return!0;return!1}const L4=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),O4=ub(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function z4(e){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=e;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:g}=n.owner.getProps();return O4()&&i&&(Gb.has(i)||L4.has(i)&&B4(h))&&(i!=="transform"||!g)&&!y&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const $4=40;class P4 extends $p{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:y,element:g,...x}){var M;super(),this.stop=()=>{var A,T;this._animation&&(this._animation.stop(),(A=this.stopTimeline)==null||A.call(this)),(T=this.keyframeResolver)==null||T.cancel()},this.createdAt=ai.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:y,element:g,...x},C=(g==null?void 0:g.KeyframeResolver)||Pp;this.keyframeResolver=new C(h,(A,T,D)=>this.onKeyframesResolved(A,T,b,!D),p,y,g),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(n,i,a,c){var D,V;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:y,onUpdate:g}=a;this.resolvedAt=ai.now();let x=!0;D4(n,u,d,h)||(x=!1,(mr.instantAnimations||!p)&&(g==null||g(tf(n,a,i))),n[0]=n[n.length-1],Zm(a),a.repeat=0);const C={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>$4?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},M=x&&!y&&z4(C),A=(V=(D=C.motionValue)==null?void 0:D.owner)==null?void 0:V.current;let T;if(M)try{T=new A4({...C,element:A})}catch{T=new Yd(C)}else T=new Yd(C);T.finished.then(()=>{this.notifyFinished()}).catch(qi),this.pendingTimeline&&(this.stopTimeline=T.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=T}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),w4()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class I4{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return Ky(this.animations,"duration")}get iterationDuration(){return Ky(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Ky(e,n){let i=0;for(let a=0;a<e.length;a++){const c=e[a][n];c!==null&&c>i&&(i=c)}return i}class H4 extends I4{then(n,i){return this.finished.finally(n).then(()=>{})}}function qb(e,n,i,a=0,c=1){const u=Array.from(e).sort((y,g)=>y.sortNodePosition(g)).indexOf(n),d=e.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const U4=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function V4(e){const n=U4.exec(e);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function Kb(e,n,i=1){const[a,c]=V4(e);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return rb(d)?parseFloat(d):d}return Rp(c)?Kb(c,n,i+1):c}const Y4={type:"spring",stiffness:500,damping:25,restSpeed:10},W4=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),F4={type:"keyframes",duration:.8},X4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},G4=(e,{keyframes:n})=>n.length>2?F4:Il.has(e)?e.startsWith("scale")?W4(n[1]):Y4:X4;function Qb(e,n){if(e!=null&&e.inherit&&n){const{inherit:i,...a}=e;return{...n,...a}}return e}function Hp(e,n){var a,c;const i=(c=(a=e==null?void 0:e[n])!=null?a:e==null?void 0:e.default)!=null?c:e;return i!==e?Qb(i,e):i}const q4=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function K4(e){for(const n in e)if(!q4.has(n))return!0;return!1}const Up=(e,n,i,a={},c,u)=>d=>{const h=Hp(a,e)||{},p=h.delay||a.delay||0;let{elapsed:y=0}=a;y=y-wi(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-y,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:e,motionValue:n,element:u?void 0:c};K4(h)||Object.assign(g,G4(e,g)),g.duration&&(g.duration=wi(g.duration)),g.repeatDelay&&(g.repeatDelay=wi(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let x=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Zm(g),g.delay===0&&(x=!0)),(mr.instantAnimations||mr.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,Zm(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=tf(g.keyframes,h);if(b!==void 0){is.update(()=>{g.onUpdate(b),g.onComplete()});return}}return h.isSync?new Yd(g):new P4(g)};function Qy(e){const n=[{},{}];return e==null||e.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Vp(e,n,i,a){if(typeof n=="function"){const[c,u]=Qy(a);n=n(i!==void 0?i:e.custom,c,u)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[c,u]=Qy(a);n=n(i!==void 0?i:e.custom,c,u)}return n}function Vr(e,n,i){const a=e.getProps();return Vp(a,n,i!==void 0?i:a.custom,e)}const Zb=new Set(["width","height","top","left","right","bottom",...Pl]),Zy=30,Q4=e=>!isNaN(parseFloat(e)),Vc={current:void 0};class Z4{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=ai.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=ai.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=Q4(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new Ap);const a=this.events[n].add(i);return n==="change"?()=>{a(),is.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Vc.current&&Vc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=ai.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>Zy)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,Zy);return db(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function pr(e,n){return new Z4(e,n)}const Jm=e=>Array.isArray(e);function J4(e,n,i){e.hasValue(n)?e.getValue(n).set(i):e.addValue(n,pr(i))}function eC(e){return Jm(e)?e[e.length-1]||0:e}function tC(e,n){const i=Vr(e,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=eC(u[d]);J4(e,d,h)}}const ko=e=>!!(e&&e.getVelocity);function nC(e){return!!(ko(e)&&e.add)}function ep(e,n){const i=e.getValue("willChange");if(nC(i))return i.add(n);if(!i&&mr.WillChange){const a=new mr.WillChange("auto");e.addValue("willChange",a),a.add(n)}}function Yp(e){return e.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const sC="framerAppearId",Jb="data-"+Yp(sC);function e5(e){return e.props[Jb]}function oC({protectedKeys:e,needsAnimating:n},i){const a=e.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Wp(e,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=e.getDefaultTransition();u=u?Qb(u,p):p;const y=u==null?void 0:u.reduceMotion;a&&(u=a);const g=[],x=c&&e.animationState&&e.animationState.getState()[c];for(const C in h){const M=e.getValue(C,(b=e.latestValues[C])!=null?b:null),A=h[C];if(A===void 0||x&&oC(x,C))continue;const T={delay:i,...Hp(u||{},C)},D=M.get();if(D!==void 0&&!M.isAnimating()&&!Array.isArray(A)&&A===D&&!T.velocity){is.update(()=>M.set(A));continue}let V=!1;if(window.MotionHandoffAnimation){const q=e5(e);if(q){const G=window.MotionHandoffAnimation(q,C,is);G!==null&&(T.startTime=G,V=!0)}}ep(e,C);const z=y!=null?y:e.shouldReduceMotion;M.start(Up(C,M,A,z&&Zb.has(C)?{type:!1}:T,e,V));const N=M.animation;N&&g.push(N)}if(d){const C=()=>is.update(()=>{d&&tC(e,d)});g.length?Promise.all(g).then(C):C()}return g}function tp(e,n,i={}){var p;const a=Vr(e,n,i.type==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=e.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Wp(e,a,i)):()=>Promise.resolve(),d=e.variantChildren&&e.variantChildren.size?(y=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:b}=c;return iC(e,n,y,g,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[y,g]=h==="beforeChildren"?[u,d]:[d,u];return y().then(()=>g())}else return Promise.all([u(),d(i.delay)])}function iC(e,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of e.variantChildren)p.notify("AnimationStart",n),h.push(tp(p,n,{...d,delay:i+(typeof a=="function"?0:a)+qb(e.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function aC(e,n,i={}){e.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>tp(e,u,i));a=Promise.all(c)}else if(typeof n=="string")a=tp(e,n,i);else{const c=typeof n=="function"?Vr(e,n,i.custom):n;a=Promise.all(Wp(e,c,i))}return a.then(()=>{e.notify("AnimationComplete",n)})}const rC={test:e=>e==="auto",parse:e=>e},t5=e=>n=>n.test(e),n5=[$l,Dt,ga,ur,LS,BS,rC],Jy=e=>n5.find(t5(e));function lC(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||cb(e):!0}const cC=new Set(["brightness","contrast","saturate","opacity"]);function uC(e){const[n,i]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[a]=i.match(Bp)||[];if(!a)return e;const c=i.replace(a,"");let u=cC.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const dC=/\b([a-z-]*)\(.*?\)/gu,np={...aa,getAnimatableNone:e=>{const n=e.match(dC);return n?n.map(uC).join(" "):e}},sp={...aa,getAnimatableNone:e=>{const n=aa.parse(e);return aa.createTransformer(e)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},e1={...$l,transform:Math.round},fC={rotate:ur,rotateX:ur,rotateY:ur,rotateZ:ur,scale:ld,scaleX:ld,scaleY:ld,scaleZ:ld,skew:ur,skewX:ur,skewY:ur,distance:Dt,translateX:Dt,translateY:Dt,translateZ:Dt,x:Dt,y:Dt,z:Dt,perspective:Dt,transformPerspective:Dt,opacity:Xc,originX:Py,originY:Py,originZ:Dt},Fp={borderWidth:Dt,borderTopWidth:Dt,borderRightWidth:Dt,borderBottomWidth:Dt,borderLeftWidth:Dt,borderRadius:Dt,borderTopLeftRadius:Dt,borderTopRightRadius:Dt,borderBottomRightRadius:Dt,borderBottomLeftRadius:Dt,width:Dt,maxWidth:Dt,height:Dt,maxHeight:Dt,top:Dt,right:Dt,bottom:Dt,left:Dt,inset:Dt,insetBlock:Dt,insetBlockStart:Dt,insetBlockEnd:Dt,insetInline:Dt,insetInlineStart:Dt,insetInlineEnd:Dt,padding:Dt,paddingTop:Dt,paddingRight:Dt,paddingBottom:Dt,paddingLeft:Dt,paddingBlock:Dt,paddingBlockStart:Dt,paddingBlockEnd:Dt,paddingInline:Dt,paddingInlineStart:Dt,paddingInlineEnd:Dt,margin:Dt,marginTop:Dt,marginRight:Dt,marginBottom:Dt,marginLeft:Dt,marginBlock:Dt,marginBlockStart:Dt,marginBlockEnd:Dt,marginInline:Dt,marginInlineStart:Dt,marginInlineEnd:Dt,fontSize:Dt,backgroundPositionX:Dt,backgroundPositionY:Dt,...fC,zIndex:e1,fillOpacity:Xc,strokeOpacity:Xc,numOctaves:e1},hC={...Fp,color:_o,backgroundColor:_o,outlineColor:_o,fill:_o,stroke:_o,borderColor:_o,borderTopColor:_o,borderRightColor:_o,borderBottomColor:_o,borderLeftColor:_o,filter:np,WebkitFilter:np,mask:sp,WebkitMask:sp},s5=e=>hC[e],mC=new Set([np,sp]);function o5(e,n){let i=s5(e);return mC.has(i)||(i=aa),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const pC=new Set(["auto","none","0"]);function _C(e,n,i){let a=0,c;for(;a<e.length&&!c;){const u=e[a];typeof u=="string"&&!pC.has(u)&&Bl(u).values.length&&(c=e[a]),a++}if(c&&i)for(const u of n)e[u]=o5(i,c)}class gC extends Pp{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let g=0;g<n.length;g++){let x=n[g];if(typeof x=="string"&&(x=x.trim(),Rp(x))){const b=Kb(x,i.current);b!==void 0&&(n[g]=b),g===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!Zb.has(a)||n.length!==2)return;const[c,u]=n,d=Jy(c),h=Jy(u),p=$y(c),y=$y(u);if(p!==y&&hr[a]){this.needsMeasurement=!0;return}if(d!==h)if(Xy(d)&&Xy(h))for(let g=0;g<n.length;g++){const x=n[g];typeof x=="string"&&(n[g]=parseFloat(x))}else hr[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||lC(n[c]))&&a.push(c);a.length&&_C(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=hr[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=hr[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,y])=>{n.getValue(p).set(y)}),this.resolveNoneKeyframes()}}function Xp(e,n,i){var a;if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[e])!=null?a:c.querySelectorAll(e);return u?Array.from(u):[]}return Array.from(e).filter(c=>c!=null)}const i5=(e,n)=>n&&typeof e=="number"?n.transform(e):e;function Nd(e){return lb(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:Gp}=Cb(queueMicrotask,!1),sa={x:!1,y:!1};function a5(){return sa.x||sa.y}function yC(e){return e==="x"||e==="y"?sa[e]?null:(sa[e]=!0,()=>{sa[e]=!1}):sa.x||sa.y?null:(sa.x=sa.y=!0,()=>{sa.x=sa.y=!1})}function r5(e,n){const i=Xp(e),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function xC(e){return!(e.pointerType==="touch"||a5())}function bC(e,n,i={}){const[a,c,u]=r5(e,i);return a.forEach(d=>{let h=!1,p=!1,y;const g=()=>{d.removeEventListener("pointerleave",M)},x=T=>{y&&(y(T),y=void 0),g()},b=T=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(T))},C=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},M=T=>{if(T.pointerType!=="touch"){if(h){p=!0;return}x(T)}},A=T=>{if(!xC(T))return;p=!1;const D=n(d,T);typeof D=="function"&&(y=D,d.addEventListener("pointerleave",M,c))};d.addEventListener("pointerenter",A,c),d.addEventListener("pointerdown",C,c)}),u}const l5=(e,n)=>n?e===n?!0:l5(e,n.parentElement):!1,qp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,vC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function wC(e){return vC.has(e.tagName)||e.isContentEditable===!0}const SC=new Set(["INPUT","SELECT","TEXTAREA"]);function CC(e){return SC.has(e.tagName)||e.isContentEditable===!0}const Dd=new WeakSet;function t1(e){return n=>{n.key==="Enter"&&e(n)}}function um(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const kC=(e,n)=>{const i=e.currentTarget;if(!i)return;const a=t1(()=>{if(Dd.has(i))return;um(i,"down");const c=t1(()=>{um(i,"up")}),u=()=>um(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function n1(e){return qp(e)&&!a5()}const s1=new WeakSet;function jC(e,n,i={}){const[a,c,u]=r5(e,i),d=h=>{const p=h.currentTarget;if(!n1(h)||s1.has(h))return;Dd.add(p),i.stopPropagation&&s1.add(h);const y=n(p,h),g=(C,M)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),Dd.has(p)&&Dd.delete(p),n1(C)&&typeof y=="function"&&y(C,{success:M})},x=C=>{g(C,p===window||p===document||i.useGlobalTarget||l5(p,C.target))},b=C=>{g(C,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),Nd(h)&&(h.addEventListener("focus",y=>kC(y,c)),!wC(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function nf(e){return lb(e)&&"ownerSVGElement"in e}const Rd=new WeakMap;let dr;const c5=(e,n,i)=>(a,c)=>c&&c[0]?c[0][e+"Size"]:nf(a)&&"getBBox"in a?a.getBBox()[n]:a[i],MC=c5("inline","width","offsetWidth"),EC=c5("block","height","offsetHeight");function TC({target:e,borderBoxSize:n}){var i;(i=Rd.get(e))==null||i.forEach(a=>{a(e,{get width(){return MC(e,n)},get height(){return EC(e,n)}})})}function AC(e){e.forEach(TC)}function NC(){typeof ResizeObserver>"u"||(dr=new ResizeObserver(AC))}function DC(e,n){dr||NC();const i=Xp(e);return i.forEach(a=>{let c=Rd.get(a);c||(c=new Set,Rd.set(a,c)),c.add(n),dr==null||dr.observe(a)}),()=>{i.forEach(a=>{const c=Rd.get(a);c==null||c.delete(n),c!=null&&c.size||dr==null||dr.unobserve(a)})}}const Bd=new Set;let El;function RC(){El=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Bd.forEach(n=>n(e))},window.addEventListener("resize",El)}function BC(e){return Bd.add(e),El||RC(),()=>{Bd.delete(e),!Bd.size&&typeof El=="function"&&(window.removeEventListener("resize",El),El=void 0)}}function o1(e,n){return typeof e=="function"?BC(e):DC(e,n)}function u5(e){return nf(e)&&e.tagName==="svg"}function LC(...e){const n=!Array.isArray(e[0]),i=n?0:-1,a=e[0+i],c=e[1+i],u=e[2+i],d=e[3+i],h=Ob(c,u,d);return n?h(a):h}const OC=[...n5,_o,aa],zC=e=>OC.find(t5(e)),i1=()=>({translate:0,scale:1,origin:0,originPoint:0}),Tl=()=>({x:i1(),y:i1()}),a1=()=>({min:0,max:0}),po=()=>({x:a1(),y:a1()}),qc=new WeakMap;function sf(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Kc(e){return typeof e=="string"||Array.isArray(e)}const Kp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Qp=["initial",...Kp];function of(e){return sf(e.animate)||Qp.some(n=>Kc(e[n]))}function d5(e){return!!(of(e)||e.variants)}function $C(e,n,i){for(const a in n){const c=n[a],u=i[a];if(ko(c))e.addValue(a,c);else if(ko(u))e.addValue(a,pr(c,{owner:e}));else if(u!==c)if(e.hasValue(a)){const d=e.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=e.getStaticValue(a);e.addValue(a,pr(d!==void 0?d:c,{owner:e}))}}for(const a in i)n[a]===void 0&&e.removeValue(a);return n}const op={current:null},f5={current:!1},PC=typeof window<"u";function IC(){if(f5.current=!0,!!PC)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>op.current=e.matches;e.addEventListener("change",n),n()}else op.current=!1}const r1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Wd={};function h5(e){Wd=e}function HC(){return Wd}class m5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Pp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const C=ai.now();this.renderScheduledAt<C&&(this.renderScheduledAt=C,is.render(this.render,!1,!0))};const{latestValues:y,renderState:g}=h;this.latestValues=y,this.baseTarget={...y},this.initialValues=i.initial?{...y}:{},this.renderState=g,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=of(i),this.isVariantNode=d5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const C in b){const M=b[C];y[C]!==void 0&&ko(M)&&M.set(y[C])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,qc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(f5.current||IC(),this.shouldReduceMotion=op.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),Ia(this.notifyUpdate),Ia(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Gb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:y,duration:g}=i.accelerate,x=new Fb({element:this.current,name:n,keyframes:h,times:p,ease:y,duration:wi(g)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=Il.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&is.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Wd){const i=Wd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):po()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<r1.length;a++){const c=r1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=$C(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=pr(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(rb(a)||cb(a))?a=parseFloat(a):!zC(a)&&aa.test(i)&&(a=o5(n,i)),this.setBaseTarget(n,ko(a)?a.get():a)),ko(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Vp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!ko(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new Ap),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Gp.render(this.render)}}class p5 extends m5{constructor(){super(...arguments),this.KeyframeResolver=gC}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;ko(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class _r{constructor(n){this.isMounted=!1,this.node=n}update(){}}function _5({top:e,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:e,max:a}}}function UC({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function VC(e,n){if(!n)return e;const i=n({x:e.left,y:e.top}),a=n({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function dm(e){return e===void 0||e===1}function ip({scale:e,scaleX:n,scaleY:i}){return!dm(e)||!dm(n)||!dm(i)}function zr(e){return ip(e)||g5(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function g5(e){return l1(e.x)||l1(e.y)}function l1(e){return e&&e!=="0%"}function Fd(e,n,i){const a=e-i,c=n*a;return i+c}function c1(e,n,i,a,c){return c!==void 0&&(e=Fd(e,c,a)),Fd(e,i,a)+n}function ap(e,n=0,i=1,a,c){e.min=c1(e.min,n,i,a,c),e.max=c1(e.max,n,i,a,c)}function y5(e,{x:n,y:i}){ap(e.x,n.translate,n.scale,n.originPoint),ap(e.y,i.translate,i.scale,i.originPoint)}const u1=.999999999999,d1=1.0000000000001;function YC(e,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:y}=u.options;y&&y.props.style&&y.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(_a(e.x,-u.scroll.offset.x),_a(e.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,y5(e,d)),a&&zr(u.latestValues)&&Ld(e,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<d1&&n.x>u1&&(n.x=1),n.y<d1&&n.y>u1&&(n.y=1)}function _a(e,n){e.min+=n,e.max+=n}function f1(e,n,i,a,c=.5){const u=_s(e.min,e.max,c);ap(e,n,i,u,a)}function h1(e,n){return typeof e=="string"?parseFloat(e)/100*(n.max-n.min):e}function Ld(e,n,i){const a=i!=null?i:e;f1(e.x,h1(n.x,a.x),n.scaleX,n.scale,n.originX),f1(e.y,h1(n.y,a.y),n.scaleY,n.scale,n.originY)}function x5(e,n){return _5(VC(e.getBoundingClientRect(),n))}function WC(e,n,i){const a=x5(e,i),{scroll:c}=n;return c&&(_a(a.x,c.offset.x),_a(a.y,c.offset.y)),a}const FC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},XC=Pl.length;function GC(e,n,i){let a="",c=!0;for(let u=0;u<XC;u++){const d=Pl[u],h=e[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const y=parseFloat(h);p=d.startsWith("scale")?y===1:y===0}if(!p||i){const y=i5(h,Fp[d]);if(!p){c=!1;const g=FC[d]||d;a+=`${g}(${y}) `}i&&(n[d]=y)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Zp(e,n,i){const{style:a,vars:c,transformOrigin:u}=e;let d=!1,h=!1;for(const p in n){const y=n[p];if(Il.has(p)){d=!0;continue}else if(jb(p)){c[p]=y;continue}else{const g=i5(y,Fp[p]);p.startsWith("origin")?(h=!0,u[p]=g):a[p]=g}}if(n.transform||(d||i?a.transform=GC(n,e.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:y="50%",originZ:g=0}=u;a.transformOrigin=`${p} ${y} ${g}`}}function b5(e,{style:n,vars:i},a,c){const u=e.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function m1(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const jc={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(Dt.test(e))e=parseFloat(e);else return e;const i=m1(e,n.target.x),a=m1(e,n.target.y);return`${i}% ${a}%`}},qC={correct:(e,{treeScale:n,projectionDelta:i})=>{const a=e,c=aa.parse(e);if(c.length>5)return a;const u=aa.createTransformer(e),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const y=_s(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),u(c)}},rp={borderRadius:{...jc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:jc,borderTopRightRadius:jc,borderBottomLeftRadius:jc,borderBottomRightRadius:jc,boxShadow:qC};function v5(e,{layout:n,layoutId:i}){return Il.has(e)||e.startsWith("origin")||(n||i!==void 0)&&(!!rp[e]||e==="opacity")}function Jp(e,n,i){var d;const a=e.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(ko(a[h])||c&&ko(c[h])||v5(h,e)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function KC(e){return window.getComputedStyle(e)}class w5 extends p5{constructor(){super(...arguments),this.type="html",this.renderInstance=b5}readValueFromInstance(n,i){var a;if(Il.has(i))return(a=this.projection)!=null&&a.isProjecting?Xm(i):g4(n,i);{const c=KC(n),u=(jb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return x5(n,i)}build(n,i,a){Zp(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Jp(n,i,a)}}function QC(e,n){return e in n}class ZC extends m5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(QC(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return po()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const JC={offset:"stroke-dashoffset",array:"stroke-dasharray"},e6={offset:"strokeDashoffset",array:"strokeDasharray"};function t6(e,n,i=1,a=0,c=!0){e.pathLength=1;const u=c?JC:e6;e[u.offset]=`${-a}`,e[u.array]=`${n} ${i}`}const n6=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function S5(e,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,y,g){var C,M;if(Zp(e,h,y),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:x,style:b}=e;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(C=x.transformOrigin)!=null?C:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(M=g==null?void 0:g.transformBox)!=null?M:"fill-box",delete x.transformBox);for(const A of n6)x[A]!==void 0&&(b[A]=x[A],delete x[A]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&t6(x,c,u,d,!1)}const C5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),k5=e=>typeof e=="string"&&e.toLowerCase()==="svg";function s6(e,n,i,a){b5(e,n,void 0,a);for(const c in n.attrs)e.setAttribute(C5.has(c)?c:Yp(c),n.attrs[c])}function j5(e,n,i){const a=Jp(e,n,i);for(const c in e)if(ko(e[c])||ko(n[c])){const u=Pl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=e[c]}return a}class M5 extends p5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=po}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(Il.has(i)){const a=s5(i);return a&&a.default||0}return i=C5.has(i)?i:Yp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return j5(n,i,a)}build(n,i,a){S5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){s6(n,i,a,c)}mount(n){this.isSVGTag=k5(n.tagName),super.mount(n)}}const o6=Qp.length;function E5(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?E5(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const n={};for(let i=0;i<o6;i++){const a=Qp[i],c=e.props[a];(Kc(c)||c===!1)&&(n[a]=c)}return n}function T5(e,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==e.length)return!1;for(let a=0;a<i;a++)if(n[a]!==e[a])return!1;return!0}const i6=[...Kp].reverse(),a6=Kp.length;function r6(e){return n=>Promise.all(n.map(({animation:i,options:a})=>aC(e,i,a)))}function l6(e){let n=r6(e),i=p1(),a=!0,c=!1;const u=y=>(g,x)=>{var C;const b=Vr(e,x,y==="exit"?(C=e.presenceContext)==null?void 0:C.custom:void 0);if(b){const{transition:M,transitionEnd:A,...T}=b;g={...g,...T,...A}}return g};function d(y){n=y(e)}function h(y){const{props:g}=e,x=E5(e.parent)||{},b=[],C=new Set;let M={},A=1/0;for(let D=0;D<a6;D++){const V=i6[D],z=i[V],N=g[V]!==void 0?g[V]:x[V],q=Kc(N),G=V===y?z.isActive:null;G===!1&&(A=D);let W=N===x[V]&&N!==g[V]&&q;if(W&&(a||c)&&e.manuallyAnimateOnMount&&(W=!1),z.protectedKeys={...M},!z.isActive&&G===null||!N&&!z.prevProp||sf(N)||typeof N=="boolean")continue;if(V==="exit"&&z.isActive&&G!==!0){z.prevResolvedValues&&(M={...M,...z.prevResolvedValues});continue}const Z=c6(z.prevProp,N);let ce=Z||V===y&&z.isActive&&!W&&q||D>A&&q,de=!1;const pe=Array.isArray(N)?N:[N];let De=pe.reduce(u(V),{});G===!1&&(De={});const{prevResolvedValues:Xe={}}=z,ie={...Xe,...De},oe=Y=>{ce=!0,C.has(Y)&&(de=!0,C.delete(Y)),z.needsAnimating[Y]=!0;const fe=e.getValue(Y);fe&&(fe.liveStyle=!1)};for(const Y in ie){const fe=De[Y],Se=Xe[Y];if(M.hasOwnProperty(Y))continue;let I=!1;Jm(fe)&&Jm(Se)?I=!T5(fe,Se):I=fe!==Se,I?fe!=null?oe(Y):C.add(Y):fe!==void 0&&C.has(Y)?oe(Y):z.protectedKeys[Y]=!0}z.prevProp=N,z.prevResolvedValues=De,z.isActive&&(M={...M,...De}),(a||c)&&e.blockInitialAnimation&&(ce=!1);const $=W&&Z;ce&&(!$||de)&&b.push(...pe.map(Y=>{const fe={type:V};if(typeof Y=="string"&&(a||c)&&!$&&e.manuallyAnimateOnMount&&e.parent){const{parent:Se}=e,I=Vr(Se,Y);if(Se.enteringChildren&&I){const{delayChildren:re}=I.transition||{};fe.delay=qb(Se.enteringChildren,e,re)}}return{animation:Y,options:fe}}))}if(C.size){const D={};if(typeof g.initial!="boolean"){const V=Vr(e,Array.isArray(g.initial)?g.initial[0]:g.initial);V&&V.transition&&(D.transition=V.transition)}C.forEach(V=>{const z=e.getBaseTarget(V),N=e.getValue(V);N&&(N.liveStyle=!0),D[V]=z!=null?z:null}),b.push({animation:D})}let T=!!b.length;return a&&(g.initial===!1||g.initial===g.animate)&&!e.manuallyAnimateOnMount&&(T=!1),a=!1,c=!1,T?n(b):Promise.resolve()}function p(y,g){var b;if(i[y].isActive===g)return Promise.resolve();(b=e.variantChildren)==null||b.forEach(C=>{var M;return(M=C.animationState)==null?void 0:M.setActive(y,g)}),i[y].isActive=g;const x=h(y);for(const C in i)i[C].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=p1(),c=!0}}}function c6(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!T5(n,e):!1}function Rr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function p1(){return{animate:Rr(!0),whileInView:Rr(),whileHover:Rr(),whileTap:Rr(),whileDrag:Rr(),whileFocus:Rr(),exit:Rr()}}function lp(e,n){e.min=n.min,e.max=n.max}function na(e,n){lp(e.x,n.x),lp(e.y,n.y)}function _1(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}const A5=1e-4,u6=1-A5,d6=1+A5,N5=.01,f6=0-N5,h6=0+N5;function ri(e){return e.max-e.min}function m6(e,n,i){return Math.abs(e-n)<=i}function g1(e,n,i,a=.5){e.origin=a,e.originPoint=_s(n.min,n.max,e.origin),e.scale=ri(i)/ri(n),e.translate=_s(i.min,i.max,e.origin)-e.originPoint,(e.scale>=u6&&e.scale<=d6||isNaN(e.scale))&&(e.scale=1),(e.translate>=f6&&e.translate<=h6||isNaN(e.translate))&&(e.translate=0)}function Yc(e,n,i,a){g1(e.x,n.x,i.x,a?a.originX:void 0),g1(e.y,n.y,i.y,a?a.originY:void 0)}function y1(e,n,i,a=0){const c=a?_s(i.min,i.max,a):i.min;e.min=c+n.min,e.max=e.min+ri(n)}function p6(e,n,i,a){y1(e.x,n.x,i.x,a==null?void 0:a.x),y1(e.y,n.y,i.y,a==null?void 0:a.y)}function x1(e,n,i,a=0){const c=a?_s(i.min,i.max,a):i.min;e.min=n.min-c,e.max=e.min+ri(n)}function Xd(e,n,i,a){x1(e.x,n.x,i.x,a==null?void 0:a.x),x1(e.y,n.y,i.y,a==null?void 0:a.y)}function b1(e,n,i,a,c){return e-=n,e=Fd(e,1/i,a),c!==void 0&&(e=Fd(e,1/c,a)),e}function _6(e,n=0,i=1,a=.5,c,u=e,d=e){if(ga.test(n)&&(n=parseFloat(n),n=_s(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=_s(u.min,u.max,a);e===u&&(h-=n),e.min=b1(e.min,n,i,h,c),e.max=b1(e.max,n,i,h,c)}function v1(e,n,[i,a,c],u,d){_6(e,n[i],n[a],n[c],n.scale,u,d)}const g6=["x","scaleX","originX"],y6=["y","scaleY","originY"];function w1(e,n,i,a){v1(e.x,n,g6,i?i.x:void 0,a?a.x:void 0),v1(e.y,n,y6,i?i.y:void 0,a?a.y:void 0)}function S1(e){return e.translate===0&&e.scale===1}function D5(e){return S1(e.x)&&S1(e.y)}function C1(e,n){return e.min===n.min&&e.max===n.max}function x6(e,n){return C1(e.x,n.x)&&C1(e.y,n.y)}function k1(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function R5(e,n){return k1(e.x,n.x)&&k1(e.y,n.y)}function j1(e){return ri(e.x)/ri(e.y)}function M1(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}function pa(e){return[e("x"),e("y")]}function b6(e,n,i){let a="";const c=e.x.translate/n.x,u=e.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:y,rotate:g,rotateX:x,rotateY:b,skewX:C,skewY:M}=i;y&&(a=`perspective(${y}px) ${a}`),g&&(a+=`rotate(${g}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),C&&(a+=`skewX(${C}deg) `),M&&(a+=`skewY(${M}deg) `)}const h=e.x.scale*n.x,p=e.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const B5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],v6=B5.length,E1=e=>typeof e=="string"?parseFloat(e):e,T1=e=>typeof e=="number"||Dt.test(e);function w6(e,n,i,a,c,u){var d,h,p,y;c?(e.opacity=_s(0,(d=i.opacity)!=null?d:1,S6(a)),e.opacityExit=_s((h=n.opacity)!=null?h:1,0,C6(a))):u&&(e.opacity=_s((p=n.opacity)!=null?p:1,(y=i.opacity)!=null?y:1,a));for(let g=0;g<v6;g++){const x=B5[g];let b=A1(n,x),C=A1(i,x);if(b===void 0&&C===void 0)continue;b||(b=0),C||(C=0),b===0||C===0||T1(b)===T1(C)?(e[x]=Math.max(_s(E1(b),E1(C),a),0),(ga.test(C)||ga.test(b))&&(e[x]+="%")):e[x]=C}(n.rotate||i.rotate)&&(e.rotate=_s(n.rotate||0,i.rotate||0,a))}function A1(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const S6=L5(0,.5,yb),C6=L5(.5,.95,qi);function L5(e,n,i){return a=>a<e?0:a>n?1:i(Rl(e,n,a))}function O5(e,n,i){const a=ko(e)?e:pr(e);return a.start(Up("",a,n,i)),a.animation}function Qc(e,n,i,a={passive:!0}){return e.addEventListener(n,i,a),()=>e.removeEventListener(n,i)}const k6=(e,n)=>e.depth-n.depth;class j6{constructor(){this.children=[],this.isDirty=!1}add(n){Ep(this.children,n),this.isDirty=!0}remove(n){Dl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(k6),this.isDirty=!1,this.children.forEach(n)}}function M6(e,n){const i=ai.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(Ia(a),e(u-n))};return is.setup(a,!0),()=>Ia(a)}function Od(e){return ko(e)?e.get():e}class E6{constructor(){this.members=[]}add(n){Ep(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(Dl(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(Dl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const zd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},fm=["","X","Y","Z"],T6=1e3;let A6=0;function hm(e,n,i,a){const{latestValues:c}=n;c[e]&&(i[e]=c[e],n.setStaticValue(e,0),a&&(a[e]=0))}function z5(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const i=e5(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",is,!(c||u))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&z5(a)}function $5({attachResizeListener:e,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=A6++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(R6),this.nodes.forEach(P6),this.nodes.forEach(I6),this.nodes.forEach(B6)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new j6)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Ap),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=nf(d)&&!u5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:y}=this.options;if(y&&!y.current&&y.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),e){let g,x=0;const b=()=>this.root.updateBlockedByResize=!1;is.read(()=>{x=window.innerWidth}),e(d,()=>{const C=window.innerWidth;C!==x&&(x=C,this.root.updateBlockedByResize=!0,g&&g(),g=M6(b,250),zd.hasAnimatedSinceResize&&(zd.hasAnimatedSinceResize=!1,this.nodes.forEach(R1)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&y&&(h||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:C})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||y.getDefaultTransition()||W6,{onLayoutAnimationStart:A,onLayoutAnimationComplete:T}=y.getProps(),D=!this.targetLayout||!R5(this.targetLayout,C),V=!x&&b;if(this.options.layoutRoot||this.resumeFrom||V||x&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const z={...Hp(M,"layout"),onPlay:A,onComplete:T};(y.shouldReduceMotion||this.options.layoutRoot)&&(z.delay=0,z.type=!1),this.startAnimation(z),this.setAnimationOrigin(g,V)}else x||R1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=C})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ia(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(H6),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&z5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const x=this.path[g];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(O6),this.nodes.forEach(N1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(D1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(z6),this.nodes.forEach($6),this.nodes.forEach(N6),this.nodes.forEach(D6)):this.nodes.forEach(D1),this.clearAllSnapshots();const h=ai.now();Uo.delta=ya(0,1e3/60,h-Uo.timestamp),Uo.timestamp=h,Uo.isProcessing=!0,om.update.process(Uo),om.preRender.process(Uo),om.render.process(Uo),Uo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Gp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(L6),this.sharedNodes.forEach(U6)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,is.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){is.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ri(this.snapshot.measuredBox.x)&&!ri(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=po()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!D5(this.projectionDelta),p=this.getTransformTemplate(),y=p?p(this.latestValues,""):void 0,g=y!==this.prevTransformTemplateValue;d&&this.instance&&(h||zr(this.latestValues)||g)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),F6(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var y;const{visualElement:d}=this.options;if(!d)return po();const h=d.measureViewportBox();if(!(((y=this.scroll)==null?void 0:y.wasRoot)||this.path.some(X6))){const{scroll:g}=this.root;g&&(_a(h.x,g.offset.x),_a(h.y,g.offset.y))}return h}removeElementScroll(d){var p;const h=po();if(na(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let y=0;y<this.path.length;y++){const g=this.path[y],{scroll:x,options:b}=g;g!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&na(h,d),_a(h.x,x.offset.x),_a(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var g,x;const y=p||po();na(y,d);for(let b=0;b<this.path.length;b++){const C=this.path[b];!h&&C.options.layoutScroll&&C.scroll&&C!==C.root&&(_a(y.x,-C.scroll.offset.x),_a(y.y,-C.scroll.offset.y)),zr(C.latestValues)&&Ld(y,C.latestValues,(g=C.layout)==null?void 0:g.layoutBox)}return zr(this.latestValues)&&Ld(y,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),y}removeTransform(d){var p;const h=po();na(h,d);for(let y=0;y<this.path.length;y++){const g=this.path[y];if(!zr(g.latestValues))continue;let x;g.instance&&(ip(g.latestValues)&&g.updateSnapshot(),x=po(),na(x,g.measurePageBox())),w1(h,g.latestValues,(p=g.snapshot)==null?void 0:p.layoutBox,x)}return zr(this.latestValues)&&w1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Uo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var C;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(C=this.parent)!=null&&C.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:x}=this.options;if(!this.layout||!(g||x))return;this.resolvedRelativeTargetAt=Uo.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=po(),this.targetWithTransforms=po()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),p6(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):na(this.target,this.layout.layoutBox),y5(this.target,this.targetDelta)):na(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||ip(this.parent.latestValues)||g5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=po(),this.relativeTargetOrigin=po(),Xd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),na(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var M;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Uo.timestamp&&(p=!1),p)return;const{layout:y,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||g))return;na(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;YC(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=po());const{target:C}=d;if(!C){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(_1(this.prevProjectionDelta.x,this.projectionDelta.x),_1(this.prevProjectionDelta.y,this.projectionDelta.y)),Yc(this.projectionDelta,this.layoutCorrected,C,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!M1(this.projectionDelta.x,this.prevProjectionDelta.x)||!M1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",C))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Tl(),this.projectionDelta=Tl(),this.projectionDeltaWithTransform=Tl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,y=p?p.latestValues:{},g={...this.latestValues},x=Tl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=po(),C=p?p.source:void 0,M=this.layout?this.layout.source:void 0,A=C!==M,T=this.getStack(),D=!T||T.members.length<=1,V=!!(A&&!D&&this.options.crossfade===!0&&!this.path.some(Y6));this.animationProgress=0;let z;this.mixTargetDelta=N=>{const q=N/1e3;B1(x.x,d.x,q),B1(x.y,d.y,q),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Xd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),V6(this.relativeTarget,this.relativeTargetOrigin,b,q),z&&x6(this.relativeTarget,z)&&(this.isProjectionDirty=!1),z||(z=po()),na(z,this.relativeTarget)),A&&(this.animationValues=g,w6(g,y,this.latestValues,q,V,D)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=q},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,y;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(y=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||y.stop(),this.pendingAnimation&&(Ia(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=is.update(()=>{zd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=pr(0)),this.motionValue.jump(0,!1),this.currentAnimation=O5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(T6),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:y,latestValues:g}=d;if(!(!h||!p||!y)){if(this!==d&&this.layout&&y&&P5(this.options.animationType,this.layout.layoutBox,y.layoutBox)){p=this.target||po();const x=ri(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=ri(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}na(h,p),Ld(h,g),Yc(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new E6),this.sharedNodes.get(d).add(h);const y=h.options.initialPromotionConfig;h.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const y=this.getStack();y&&y.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const y={};p.z&&hm("z",d,y,this.animationValues);for(let g=0;g<fm.length;g++)hm(`rotate${fm[g]}`,d,y,this.animationValues),hm(`skew${fm[g]}`,d,y,this.animationValues);d.render();for(const g in y)d.setStaticValue(g,y[g]),this.animationValues&&(this.animationValues[g]=y[g]);d.scheduleRender()}applyProjectionStyles(d,h){var M,A;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=Od(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=Od(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!zr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=y.animationValues||y.latestValues;this.applyTransformsToTarget();let x=b6(this.projectionDeltaWithTransform,this.treeScale,g);p&&(x=p(g,x)),d.transform=x;const{x:b,y:C}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${C.origin*100}% 0`,y.animationValues?d.opacity=y===this?(A=(M=g.opacity)!=null?M:this.latestValues.opacity)!=null?A:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=y===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const T in rp){if(g[T]===void 0)continue;const{correct:D,applyTo:V,isCSSVariable:z}=rp[T],N=x==="none"?g[T]:D(g[T],y);if(V){const q=V.length;for(let G=0;G<q;G++)d[V[G]]=N}else z?this.options.visualElement.renderState.vars[T]=N:d[T]=N}this.options.layoutId&&(d.pointerEvents=y===this?Od(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(N1),this.root.sharedNodes.clear()}}}function N6(e){e.updateLayout()}function D6(e){var i;const n=((i=e.resumeFrom)==null?void 0:i.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=e.layout,{animationType:u}=e.options,d=n.source!==e.layout.source;if(u==="size")pa(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],C=ri(b);b.min=a[x].min,b.max=b.min+C});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";lp(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else P5(u,n.layoutBox,a)&&pa(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],C=ri(a[x]);b.max=b.min+C,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[x].max=e.relativeTarget[x].min+C)});const h=Tl();Yc(h,a,n.layoutBox);const p=Tl();d?Yc(p,e.applyTransform(c,!0),n.measuredBox):Yc(p,a,n.layoutBox);const y=!D5(h);let g=!1;if(!e.resumeFrom){const x=e.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:C}=x;if(b&&C){const M=e.options.layoutAnchor||void 0,A=po();Xd(A,n.layoutBox,b.layoutBox,M);const T=po();Xd(T,a,C.layoutBox,M),R5(A,T)||(g=!0),x.options.layoutRoot&&(e.relativeTarget=T,e.relativeTargetOrigin=A,e.relativeParent=x)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:g})}else if(e.isLead()){const{onExitComplete:a}=e.options;a&&a()}e.options.transition=void 0}function R6(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function B6(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function L6(e){e.clearSnapshot()}function N1(e){e.clearMeasurements()}function O6(e){e.isLayoutDirty=!0,e.updateLayout()}function D1(e){e.isLayoutDirty=!1}function z6(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function $6(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function R1(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function P6(e){e.resolveTargetDelta()}function I6(e){e.calcProjection()}function H6(e){e.resetSkewAndRotation()}function U6(e){e.removeLeadSnapshot()}function B1(e,n,i){e.translate=_s(n.translate,0,i),e.scale=_s(n.scale,1,i),e.origin=n.origin,e.originPoint=n.originPoint}function L1(e,n,i,a){e.min=_s(n.min,i.min,a),e.max=_s(n.max,i.max,a)}function V6(e,n,i,a){L1(e.x,n.x,i.x,a),L1(e.y,n.y,i.y,a)}function Y6(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const W6={duration:.45,ease:[.4,0,.1,1]},O1=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),z1=O1("applewebkit/")&&!O1("chrome/")?Math.round:qi;function $1(e){e.min=z1(e.min),e.max=z1(e.max)}function F6(e){$1(e.x),$1(e.y)}function P5(e,n,i){return e==="position"||e==="preserve-aspect"&&!m6(j1(n),j1(i),.2)}function X6(e){var n;return e!==e.root&&((n=e.scroll)==null?void 0:n.wasRoot)}const G6=$5({attachResizeListener:(e,n)=>Qc(e,"resize",n),measureScroll:()=>{var e,n;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),mm={current:void 0},I5=$5({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!mm.current){const e=new G6({});e.mount(window),e.setOptions({layoutScroll:!0}),mm.current=e}return mm.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),af=_.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function P1(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function q6(...e){return n=>{let i=!1;const a=e.map(c=>{const u=P1(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():P1(e[c],null)}}}}function K6(...e){return _.useCallback(q6(...e),e)}class Q6 extends _.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(Nd(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=Nd(a)&&a.offsetWidth||0,u=Nd(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Z6({children:e,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,C;const d=_.useId(),h=_.useRef(null),p=_.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=_.useContext(af),g=(C=(b=e.props)==null?void 0:b.ref)!=null?C:e==null?void 0:e.ref,x=K6(h,g);return _.useInsertionEffect(()=>{const{width:M,height:A,top:T,left:D,right:V,bottom:z}=p.current;if(n||u===!1||!h.current||!M||!A)return;const N=i==="left"?`left: ${D}`:`right: ${V}`,q=a==="bottom"?`bottom: ${z}`:`top: ${T}`;h.current.dataset.motionPopId=d;const G=document.createElement("style");y&&(G.nonce=y);const W=c!=null?c:document.head;return W.appendChild(G),G.sheet&&G.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${M}px !important;
            height: ${A}px !important;
            ${N}px !important;
            ${q}px !important;
          }
        `),()=>{var Z;(Z=h.current)==null||Z.removeAttribute("data-motion-pop-id"),W.contains(G)&&W.removeChild(G)}},[n]),l.jsx(Q6,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?e:_.cloneElement(e,{ref:x})})}const J6=({children:e,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:y})=>{const g=Jc(ek),x=_.useId();let b=!0,C=_.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:M=>{g.set(M,!0);for(const A of g.values())if(!A)return;a&&a()},register:M=>(g.set(M,!1),()=>g.delete(M))}),[i,g,a]);return u&&b&&(C={...C}),_.useMemo(()=>{g.forEach((M,A)=>g.set(A,!1))},[i]),_.useEffect(()=>{!i&&!g.size&&a&&a()},[i]),e=l.jsx(Z6,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:y,children:e}),l.jsx(ef.Provider,{value:C,children:e})};function ek(){return new Map}function H5(e=!0){const n=_.useContext(ef);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=_.useId();_.useEffect(()=>{if(e)return c(u)},[e]);const d=_.useCallback(()=>e&&a&&a(u),[u,a,e]);return!i&&a?[!1,d]:[!0]}const cd=e=>e.key||"";function I1(e){const n=[];return _.Children.forEach(e,i=>{_.isValidElement(i)&&n.push(i)}),n}const rf=({children:e,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:y})=>{const[g,x]=H5(d),b=_.useMemo(()=>I1(e),[e]),C=d&&!g?[]:b.map(cd),M=_.useRef(!0),A=_.useRef(b),T=Jc(()=>new Map),D=_.useRef(new Set),[V,z]=_.useState(b),[N,q]=_.useState(b);Mp(()=>{M.current=!1,A.current=b;for(let Z=0;Z<N.length;Z++){const ce=cd(N[Z]);C.includes(ce)?(T.delete(ce),D.current.delete(ce)):T.get(ce)!==!0&&T.set(ce,!1)}},[N,C.length,C.join("-")]);const G=[];if(b!==V){let Z=[...b];for(let ce=0;ce<N.length;ce++){const de=N[ce],pe=cd(de);C.includes(pe)||(Z.splice(ce,0,de),G.push(de))}return u==="wait"&&G.length&&(Z=G),q(I1(Z)),z(b),null}const{forceRender:W}=_.useContext(jp);return l.jsx(l.Fragment,{children:N.map(Z=>{const ce=cd(Z),de=d&&!g?!1:b===N||C.includes(ce),pe=()=>{if(D.current.has(ce))return;if(T.has(ce))D.current.add(ce),T.set(ce,!0);else return;let De=!0;T.forEach(Xe=>{Xe||(De=!1)}),De&&(W==null||W(),q(A.current),d&&(x==null||x()),a&&a())};return l.jsx(J6,{isPresent:de,initial:!M.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:y,onExitComplete:de?void 0:pe,anchorX:h,anchorY:p,children:Z},ce)})})},U5=_.createContext({strict:!1}),H1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let U1=!1;function tk(){if(U1)return;const e={};for(const n in H1)e[n]={isEnabled:i=>H1[n].some(a=>!!i[a])};h5(e),U1=!0}function V5(){return tk(),HC()}function nk(e){const n=V5();for(const i in e)n[i]={...n[i],...e[i]};h5(n)}const sk=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Gd(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||sk.has(e)}let Y5=e=>!Gd(e);function ok(e){typeof e=="function"&&(Y5=n=>n.startsWith("on")?!Gd(n):e(n))}try{ok(require("@emotion/is-prop-valid").default)}catch{}function ik(e,n,i){const a={};for(const c in e)c==="values"&&typeof e.values=="object"||ko(e[c])||(Y5(c)||i===!0&&Gd(c)||!n&&!Gd(c)||e.draggable&&c.startsWith("onDrag"))&&(a[c]=e[c]);return a}const lf=_.createContext({});function ak(e,n){if(of(e)){const{initial:i,animate:a}=e;return{initial:i===!1||Kc(i)?i:void 0,animate:Kc(a)?a:void 0}}return e.inherit!==!1?n:{}}function rk(e){const{initial:n,animate:i}=ak(e,_.useContext(lf));return _.useMemo(()=>({initial:n,animate:i}),[V1(n),V1(i)])}function V1(e){return Array.isArray(e)?e.join(" "):e}const e_=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function W5(e,n,i){for(const a in n)!ko(n[a])&&!v5(a,i)&&(e[a]=n[a])}function lk({transformTemplate:e},n){return _.useMemo(()=>{const i=e_();return Zp(i,n,e),Object.assign({},i.vars,i.style)},[n])}function ck(e,n){const i=e.style||{},a={};return W5(a,i,e),Object.assign(a,lk(e,n)),a}function uk(e,n){const i={},a=ck(e,n);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=a,i}const F5=()=>({...e_(),attrs:{}});function dk(e,n,i,a){const c=_.useMemo(()=>{const u=F5();return S5(u,n,k5(a),e.transformTemplate,e.style),{...u.attrs,style:{...u.style}}},[n]);if(e.style){const u={};W5(u,e.style,e),c.style={...u,...c.style}}return c}const fk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function t_(e){return typeof e!="string"||e.includes("-")?!1:!!(fk.indexOf(e)>-1||/[A-Z]/u.test(e))}function hk(e,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:t_(e))?dk:uk)(n,a,c,e),y=ik(n,typeof e=="string",u),g=e!==_.Fragment?{...y,...p,ref:i}:{},{children:x}=n,b=_.useMemo(()=>ko(x)?x.get():x,[x]);return _.createElement(e,{...g,children:b})}function mk({scrapeMotionValuesFromProps:e,createRenderState:n},i,a,c){return{latestValues:pk(i,a,c,e),renderState:n()}}function pk(e,n,i,a){const c={},u=a(e,{});for(const b in u)c[b]=Od(u[b]);let{initial:d,animate:h}=e;const p=of(e),y=d5(e);n&&y&&!p&&e.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let g=i?i.initial===!1:!1;g=g||d===!1;const x=g?h:d;if(x&&typeof x!="boolean"&&!sf(x)){const b=Array.isArray(x)?x:[x];for(let C=0;C<b.length;C++){const M=Vp(e,b[C]);if(M){const{transitionEnd:A,transition:T,...D}=M;for(const V in D){let z=D[V];if(Array.isArray(z)){const N=g?z.length-1:0;z=z[N]}z!==null&&(c[V]=z)}for(const V in A)c[V]=A[V]}}}return c}const X5=e=>(n,i)=>{const a=_.useContext(lf),c=_.useContext(ef),u=()=>mk(e,n,a,c);return i?u():Jc(u)},_k=X5({scrapeMotionValuesFromProps:Jp,createRenderState:e_}),gk=X5({scrapeMotionValuesFromProps:j5,createRenderState:F5}),yk=Symbol.for("motionComponentSymbol");function xk(e,n,i){const a=_.useRef(i);_.useInsertionEffect(()=>{a.current=i});const c=_.useRef(null);return _.useCallback(u=>{var h;u&&((h=e.onMount)==null||h.call(e,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const G5=_.createContext({});function jl(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function bk(e,n,i,a,c,u){var z,N;const{visualElement:d}=_.useContext(lf),h=_.useContext(U5),p=_.useContext(ef),y=_.useContext(af),g=y.reducedMotion,x=y.skipAnimations,b=_.useRef(null),C=_.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(e,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g,skipAnimations:x,isSVG:u}),C.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const M=b.current,A=_.useContext(G5);M&&!M.projection&&c&&(M.type==="html"||M.type==="svg")&&vk(b.current,i,c,A);const T=_.useRef(!1);_.useInsertionEffect(()=>{M&&T.current&&M.update(i,p)});const D=i[Jb],V=_.useRef(!!D&&typeof window<"u"&&!((z=window.MotionHandoffIsComplete)!=null&&z.call(window,D))&&((N=window.MotionHasOptimisedAnimation)==null?void 0:N.call(window,D)));return Mp(()=>{C.current=!0,M&&(T.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),V.current&&M.animationState&&M.animationState.animateChanges())}),_.useEffect(()=>{M&&(!V.current&&M.animationState&&M.animationState.animateChanges(),V.current&&(queueMicrotask(()=>{var q;(q=window.MotionHandoffMarkAsComplete)==null||q.call(window,D)}),V.current=!1),M.enteringChildren=void 0)}),M}function vk(e,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:y,layoutAnchor:g,layoutCrossfade:x}=n;e.projection=new i(e.latestValues,n["data-framer-portal-id"]?void 0:q5(e.parent)),e.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&jl(h),visualElement:e,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:y,layoutAnchor:g})}function q5(e){if(e)return e.options.allowProjection!==!1?e.projection:q5(e.parent)}function pm(e,{forwardMotionProps:n=!1,type:i}={},a,c){var y,g;a&&nk(a);const u=i?i==="svg":t_(e),d=u?gk:_k;function h(x,b){let C;const M={..._.useContext(af),...x,layoutId:wk(x)},{isStatic:A}=M,T=rk(x),D=d(x,A);if(!A&&typeof window<"u"){Sk();const V=Ck(M);C=V.MeasureLayout,T.visualElement=bk(e,D,M,c,V.ProjectionNode,u)}return l.jsxs(lf.Provider,{value:T,children:[C&&T.visualElement?l.jsx(C,{visualElement:T.visualElement,...M}):null,hk(e,x,xk(D,T.visualElement,b),D,A,n,u)]})}h.displayName=`motion.${typeof e=="string"?e:`create(${(g=(y=e.displayName)!=null?y:e.name)!=null?g:""})`}`;const p=_.forwardRef(h);return p[yk]=e,p}function wk({layoutId:e}){const n=_.useContext(jp).id;return n&&e!==void 0?n+"-"+e:e}function Sk(e,n){_.useContext(U5).strict}function Ck(e){const n=V5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(e)||a!=null&&a.isEnabled(e)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function kk(e,n){if(typeof Proxy>"u")return pm;const i=new Map,a=(u,d)=>pm(u,d,e,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,pm(d,void 0,e,n)),i.get(d))})}const jk=(e,n)=>{var a;return((a=n.isSVG)!=null?a:t_(e))?new M5(n):new w5(n,{allowProjection:e!==_.Fragment})};class Mk extends _r{constructor(n){super(n),n.animationState||(n.animationState=l6(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();sf(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let Ek=0;class Tk extends _r{constructor(){super(...arguments),this.id=Ek++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Vr(this.node,d,h);if(p){const{transition:y,transitionEnd:g,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const Ak={animation:{Feature:Mk},exit:{Feature:Tk}};function su(e){return{point:{x:e.pageX,y:e.pageY}}}const Nk=e=>n=>qp(n)&&e(n,su(n));function Wc(e,n,i,a){return Qc(e,n,Nk(i),a)}const K5=({current:e})=>e?e.ownerDocument.defaultView:null,Y1=(e,n)=>Math.abs(e-n);function Dk(e,n){const i=Y1(e.x,n.x),a=Y1(e.y,n.y);return Math.sqrt(i**2+a**2)}const W1=new Set(["auto","scroll"]);class Q5{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=C=>{this.handleScroll(C.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ud(this.lastRawMoveEventInfo,this.transformPagePoint));const C=_m(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,A=Dk(C.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!A)return;const{point:T}=C,{timestamp:D}=Uo;this.history.push({...T,timestamp:D});const{onStart:V,onMove:z}=this.handlers;M||(V&&V(this.lastMoveEvent,C),this.startEvent=this.lastMoveEvent),z&&z(this.lastMoveEvent,C)},this.handlePointerMove=(C,M)=>{this.lastMoveEvent=C,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=ud(M,this.transformPagePoint),is.update(this.updatePoint,!0)},this.handlePointerUp=(C,M)=>{this.end();const{onEnd:A,onSessionEnd:T,resumeAnimation:D}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&D&&D(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const V=_m(C.type==="pointercancel"?this.lastMoveEventInfo:ud(M,this.transformPagePoint),this.history);this.startEvent&&A&&A(C,V),T&&T(C,V)},!qp(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=su(n),y=ud(p,this.transformPagePoint),{point:g}=y,{timestamp:x}=Uo;this.history=[{...g,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,_m(y,this.history)),this.removeListeners=eu(Wc(this.contextWindow,"pointermove",this.handlePointerMove),Wc(this.contextWindow,"pointerup",this.handlePointerUp),Wc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(W1.has(a.overflowX)||W1.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),is.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ia(this.updatePoint)}}function ud(e,n){return n?{point:n(e.point)}:e}function F1(e,n){return{x:e.x-n.x,y:e.y-n.y}}function _m({point:e},n){return{point:e,delta:F1(e,Z5(n)),offset:F1(e,Rk(n)),velocity:Bk(n,.1)}}function Rk(e){return e[0]}function Z5(e){return e[e.length-1]}function Bk(e,n){if(e.length<2)return{x:0,y:0};let i=e.length-1,a=null;const c=Z5(e);for(;i>=0&&(a=e[i],!(c.timestamp-a.timestamp>wi(n)));)i--;if(!a)return{x:0,y:0};a===e[0]&&e.length>2&&c.timestamp-a.timestamp>wi(n)*2&&(a=e[1]);const u=Gi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function Lk(e,{min:n,max:i},a){return n!==void 0&&e<n?e=a?_s(n,e,a.min):Math.max(e,n):i!==void 0&&e>i&&(e=a?_s(i,e,a.max):Math.min(e,i)),e}function X1(e,n,i){return{min:n!==void 0?e.min+n:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function Ok(e,{top:n,left:i,bottom:a,right:c}){return{x:X1(e.x,i,c),y:X1(e.y,n,a)}}function G1(e,n){let i=n.min-e.min,a=n.max-e.max;return n.max-n.min<e.max-e.min&&([i,a]=[a,i]),{min:i,max:a}}function zk(e,n){return{x:G1(e.x,n.x),y:G1(e.y,n.y)}}function $k(e,n){let i=.5;const a=ri(e),c=ri(n);return c>a?i=Rl(n.min,n.max-a,e.min):a>c&&(i=Rl(e.min,e.max-c,n.min)),ya(0,1,i)}function Pk(e,n){const i={};return n.min!==void 0&&(i.min=n.min-e.min),n.max!==void 0&&(i.max=n.max-e.min),i}const cp=.35;function Ik(e=cp){return e===!1?e=0:e===!0&&(e=cp),{x:q1(e,"left","right"),y:q1(e,"top","bottom")}}function q1(e,n,i){return{min:K1(e,n),max:K1(e,i)}}function K1(e,n){return typeof e=="number"?e:e[n]||0}const Hk=new WeakMap;class Uk{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=po(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(su(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:C,dragPropagation:M,onDragStart:A}=this.getProps();if(C&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=yC(C),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),pa(D=>{let V=this.getAxisMotionValue(D).get()||0;if(ga.test(V)){const{projection:z}=this.visualElement;if(z&&z.layout){const N=z.layout.layoutBox[D];N&&(V=ri(N)*(parseFloat(V)/100))}}this.originPoint[D]=V}),A&&is.update(()=>A(x,b),!1,!0),ep(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:C,dragDirectionLock:M,onDirectionLock:A,onDrag:T}=this.getProps();if(!C&&!this.openDragLock)return;const{offset:D}=b;if(M&&this.currentDirection===null){this.currentDirection=Yk(D),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",b.point,D),this.updateAxis("y",b.point,D),this.visualElement.render(),T&&is.update(()=>T(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new Q5(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:K5(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&is.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!dd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=Lk(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&jl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=Ok(a.layoutBox,n):this.constraints=!1,this.elastic=Ik(i),c!==this.constraints&&!jl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&pa(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=Pk(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!jl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=WC(a,c.root,this.visualElement.getTransformPagePoint());let d=zk(c.layout.layoutBox,u);if(i){const h=i(UC(d));this.hasMutatedConstraints=!!h,h&&(d=_5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},y=pa(g=>{if(!dd(g,i,this.currentDirection))return;let x=p&&p[g]||{};(d===!0||d===g)&&(x={min:0,max:0});const b=c?200:1e6,C=c?40:1e7,M={type:"inertia",velocity:a?n[g]:0,bounceStiffness:b,bounceDamping:C,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(g,M)});return Promise.all(y).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return ep(this.visualElement,n),a.start(Up(n,a,0,i,this.visualElement,!1))}stopAnimation(){pa(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){pa(i=>{const{drag:a}=this.getProps();if(!dd(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-_s(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!jl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};pa(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=$k({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),pa(d=>{if(!dd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:y}=this.constraints[d];h.set(_s(p,y,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Hk.set(this.visualElement,this);const n=this.visualElement.current,i=Wc(n,"pointerdown",y=>{const{drag:g,dragListener:x=!0}=this.getProps(),b=y.target,C=b!==n&&CC(b);g&&x&&!C&&this.start(y)});let a;const c=()=>{const{dragConstraints:y}=this.getProps();jl(y)&&y.current&&(this.constraints=this.resolveRefConstraints(),a||(a=Vk(n,y.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),is.read(c);const h=Qc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:g})=>{this.isDragging&&g&&(pa(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=y[x].translate,b.set(b.get()+y[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=cp,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function Q1(e){let n=!0;return()=>{if(n){n=!1;return}e()}}function Vk(e,n,i){const a=o1(e,Q1(i)),c=o1(n,Q1(i));return()=>{a(),c()}}function dd(e,n,i){return(n===!0||n===e)&&(i===null||i===e)}function Yk(e,n=10){let i=null;return Math.abs(e.y)>n?i="y":Math.abs(e.x)>n&&(i="x"),i}class Wk extends _r{constructor(n){super(n),this.removeGroupControls=qi,this.removeListeners=qi,this.controls=new Uk(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qi}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const gm=e=>(n,i)=>{e&&is.update(()=>e(n,i),!1,!0)};class Fk extends _r{constructor(){super(...arguments),this.removePointerDownListener=qi}onPointerDown(n){this.session=new Q5(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:K5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:gm(n),onStart:gm(i),onMove:gm(a),onEnd:(u,d)=>{delete this.session,c&&is.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=Wc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let ym=!1;class Xk extends _.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),ym&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),zd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),ym=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||is.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Gp.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;ym=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function J5(e){const[n,i]=H5(),a=_.useContext(jp);return l.jsx(Xk,{...e,layoutGroup:a,switchLayoutGroup:_.useContext(G5),isPresent:n,safeToRemove:i})}const Gk={pan:{Feature:Fk},drag:{Feature:Wk,ProjectionNode:I5,MeasureLayout:J5}};function Z1(e,n,i){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&is.postRender(()=>u(n,su(n)))}class qk extends _r{mount(){const{current:n}=this.node;n&&(this.unmount=bC(n,(i,a)=>(Z1(this.node,a,"Start"),c=>Z1(this.node,c,"End"))))}unmount(){}}class Kk extends _r{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=eu(Qc(this.node.current,"focus",()=>this.onFocus()),Qc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function J1(e,n,i){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&is.postRender(()=>u(n,su(n)))}class Qk extends _r{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=jC(n,(c,u)=>(J1(this.node,u,"Start"),(d,{success:h})=>J1(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const up=new WeakMap,xm=new WeakMap,Zk=e=>{const n=up.get(e.target);n&&n(e)},Jk=e=>{e.forEach(Zk)};function e3({root:e,...n}){const i=e||document;xm.has(i)||xm.set(i,{});const a=xm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(Jk,{root:e,...n})),a[c]}function t3(e,n,i){const a=e3(n);return up.set(e,i),a.observe(e),()=>{up.delete(e),a.unobserve(e)}}const n3={some:0,all:1};class s3 extends _r{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:n3[c]},h=y=>{const{isIntersecting:g}=y;if(this.isInView===g||(this.isInView=g,u&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),C=g?x:b;C&&C(y)};this.stopObserver=t3(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(o3(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function o3({viewport:e={}},{viewport:n={}}={}){return i=>e[i]!==n[i]}const i3={inView:{Feature:s3},tap:{Feature:Qk},focus:{Feature:Kk},hover:{Feature:qk}},a3={layout:{ProjectionNode:I5,MeasureLayout:J5}},r3={...Ak,...i3,...Gk,...a3},li=kk(r3,jk);function dp(e){const n=Jc(()=>pr(e)),{isStatic:i}=_.useContext(af);if(i){const[,a]=_.useState(e);_.useEffect(()=>n.on("change",a),[])}return n}function e2(e,n){const i=dp(n()),a=()=>i.set(n());return a(),Mp(()=>{const c=()=>is.preRender(a,!1,!0),u=e.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),Ia(a)}}),i}function l3(e){Vc.current=[],e();const n=e2(Vc.current,e);return Vc.current=void 0,n}function fd(e,n,i,a){if(typeof e=="function")return l3(e);const u=typeof n=="function"?n:LC(n,i,a),d=Array.isArray(e)?ex(e,u):ex([e],([p])=>u(p)),h=Array.isArray(e)?void 0:e.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function ex(e,n){const i=Jc(()=>[]);return e2(e,()=>{i.length=0;const a=e.length;for(let c=0;c<a;c++)i[c]=e[c].get();return n(i)})}function n_(e){return typeof e=="object"&&!Array.isArray(e)}function t2(e,n,i,a){return e==null?[]:typeof e=="string"&&n_(n)?Xp(e,i,a):e instanceof NodeList?Array.from(e):Array.isArray(e)?e.filter(c=>c!=null):[e]}function c3(e,n,i){return e*(n+1)}function tx(e,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,e+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:e}function u3(e,n,i){for(let a=0;a<e.length;a++){const c=e[a];c.at>n&&c.at<i&&(Dl(e,c),a--)}}function d3(e,n,i,a,c,u){u3(e,c,u);for(let d=0;d<n.length;d++)e.push({value:n[d],at:_s(c,u,a[d]),easing:wb(i,d)})}function f3(e,n){for(let i=0;i<e.length;i++)e[i]=e[i]/(n+1)}function h3(e,n){return e.at===n.at?e.value===null?1:n.value===null?-1:0:e.at-n.at}const m3="easeInOut";function p3(e,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},y=new Map;let g=0,x=0,b=0;for(let C=0;C<e.length;C++){const M=e[C];if(typeof M=="string"){y.set(M,x);continue}else if(!Array.isArray(M)){y.set(M.name,tx(x,M.at,g,y));continue}let[A,T,D={}]=M;D.at!==void 0&&(x=tx(x,D.at,g,y));let V=0;const z=(N,q,G,W=0,Z=0)=>{const ce=_3(N),{delay:de=0,times:pe=$b(ce),type:De=n.type||"keyframes",repeat:Xe,repeatType:ie,repeatDelay:oe=0,...$}=q;let{ease:ne=n.ease||"easeOut",duration:Y}=q;const fe=typeof de=="function"?de(W,Z):de,Se=ce.length,I=Ip(De)?De:c==null?void 0:c[De||"keyframes"];if(Se<=2&&I){let Te=100;if(Se===2&&x3(ce)){const Qe=ce[1]-ce[0];Te=Math.abs(Qe)}const he={...n,...$};Y!==void 0&&(he.duration=wi(Y));const ze=Bb(he,Te,I);ne=ze.ease,Y=ze.duration}Y!=null||(Y=u);const re=x+fe;pe.length===1&&pe[0]===0&&(pe[1]=1);const te=pe.length-ce.length;if(te>0&&zb(pe,te),ce.length===1&&ce.unshift(null),Xe){Y=c3(Y,Xe);const Te=[...ce],he=[...pe];ne=Array.isArray(ne)?[...ne]:[ne];const ze=[...ne];for(let Qe=0;Qe<Xe;Qe++){ce.push(...Te);for(let We=0;We<Te.length;We++)pe.push(he[We]+(Qe+1)),ne.push(We===0?"linear":wb(ze,We-1))}f3(pe,Xe)}const be=re+Y;d3(G,ce,ne,pe,re,be),V=Math.max(fe+Y,V),b=Math.max(be,b)};if(ko(A)){const N=nx(A,h);z(T,D,sx("default",N))}else{const N=t2(A,T,a,p),q=N.length;for(let G=0;G<q;G++){T=T,D=D;const W=N[G],Z=nx(W,h);for(const ce in T)z(T[ce],g3(D,ce),sx(ce,Z),G,q)}}g=x,x+=V}return h.forEach((C,M)=>{for(const A in C){const T=C[A];T.sort(h3);const D=[],V=[],z=[];for(let W=0;W<T.length;W++){const{at:Z,value:ce,easing:de}=T[W];D.push(ce),V.push(Rl(0,b,Z)),z.push(de||"easeOut")}V[0]!==0&&(V.unshift(0),D.unshift(D[0]),z.unshift(m3)),V[V.length-1]!==1&&(V.push(1),D.push(null)),d.has(M)||d.set(M,{keyframes:{},transition:{}});const N=d.get(M);N.keyframes[A]=D;const{type:q,...G}=n;N.transition[A]={...G,duration:b,ease:z,times:V,...i}}}),d}function nx(e,n){return!n.has(e)&&n.set(e,{}),n.get(e)}function sx(e,n){return n[e]||(n[e]=[]),n[e]}function _3(e){return Array.isArray(e)?e:[e]}function g3(e,n){return e&&e[n]?{...e,...e[n]}:{...e}}const y3=e=>typeof e=="number",x3=e=>e.every(y3);function b3(e){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=nf(e)&&!u5(e)?new M5(n):new w5(n);i.mount(e),qc.set(e,i)}function v3(e){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new ZC(n);i.mount(e),qc.set(e,i)}function w3(e,n){return ko(e)||typeof e=="number"||typeof e=="string"&&!n_(n)}function n2(e,n,i,a){const c=[];if(w3(e,n))c.push(O5(e,n_(n)&&n.default||n,i&&(i.default||i)));else{if(e==null)return c;const u=t2(e,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],y=p instanceof Element?b3:v3;qc.has(p)||y(p);const g=qc.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Wp(g,{...n,transition:x},{}))}}return c}function S3(e,n,i){const a=[],c=e.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=pr(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return p3(c,n,i,{spring:Gc}).forEach(({keyframes:d,transition:h},p)=>{a.push(...n2(p,d,h))}),a}function C3(e){return Array.isArray(e)&&e.some(Array.isArray)}function k3(e={}){const{scope:n,reduceMotion:i}=e;function a(c,u,d){let h=[],p;if(C3(c)){const{onComplete:g,...x}=u||{};typeof g=="function"&&(p=g),h=S3(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:g,...x}=d||{};typeof g=="function"&&(p=g),h=n2(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const y=new H4(h);return p&&y.finished.then(p),n&&(n.animations.push(y),y.finished.then(()=>{Dl(n.animations,y)})),y}return a}const ox=k3(),Pa=(e,n)=>!e||!n?!1:e===n||e.startsWith(n)||n.startsWith(e);function ix(e,n){var a;const i=[...(a=e.childShas)!=null?a:[]];return i.includes(n)||i.push(n),{...e,childShas:i}}function j3(e,n,i,a,c,u){if(!i)return{directCommits:e,branchCommitPreviews:n};const d=e.map(p=>Pa(p.fullSha,i)||Pa(p.sha,i)?ix(p,a):p),h=Object.fromEntries(Object.entries(n).map(([p,y])=>[p,y.map(g=>(p===c||p===u)&&(Pa(g.fullSha,i)||Pa(g.sha,i))?ix(g,a):g)]));return{directCommits:d,branchCommitPreviews:h}}function M3(e,n,i,a){if(!e)return null;const c=d=>Pa(d,e);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(y=>c(y.fullSha)||c(y.sha)))return d;return null}function E3(e,n,i,a,c,u,d=!1){const h=e.baseSha,p=`STASH:${e.index}`,y=`Stash ${e.index+1}`,g=M3(h,i,a,u),x=(()=>{var G;if(!h)return null;const q=i.find(W=>Pa(W.fullSha,h)||Pa(W.sha,h));if(q!=null&&q.date)return q.date;if(g&&!d){const W=((G=a[g])!=null?G:[]).find(Z=>Pa(Z.fullSha,h)||Pa(Z.sha,h));if(W!=null&&W.date)return W.date}return null})(),b=x?new Date(x).getTime():Number.NaN,C=Date.now(),M=Number.isFinite(b)?Math.max(C,b+1+e.index):C+e.index,A=new Date(M).toISOString(),T=e.message.trim(),D={fullSha:p,sha:y,parentSha:h,clusterKey:null,childShas:[],message:T||y,author:"You",date:A,kind:"stash"},V=`Stash ${e.index+1}`,z={name:V,commitsAhead:1,commitsBehind:0,lastCommitDate:A,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:p,divergedFromSha:h!=null?h:void 0,parentBranch:g||u},N=j3(i,a,h,p,V,u);return{branches:[z,...n],directCommits:N.directCommits,branchCommitPreviews:{...N.branchCommitPreviews,[V]:[D]},branchUniqueAheadCounts:{...c,[V]:1}}}function s2(e,n,i,a,c,u,d=!1){const h=[...e].sort((y,g)=>y.index-g.index);let p={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const y of h)p=E3(y,p.branches,p.directCommits,p.branchCommitPreviews,p.branchUniqueAheadCounts,u,d);return p}function fp({branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:y,manuallyOpenedClumps:g=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:C=null,orientation:M="horizontal"}){var W,Z;const A=s2(y,e,i,u,h,c,(W=p==null?void 0:p.hasUncommittedChanges)!=null?W:!1);let T=A.branches,D=A.directCommits,V=A.branchCommitPreviews,z=A.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const ce=p.headSha||p.parentSha||null,de=(Y,fe)=>!Y||!fe?!1:Y===fe||Y.startsWith(fe)||fe.startsWith(Y),pe=p.branchName?T.find(Y=>Y.name===p.branchName):void 0,De=(()=>{var fe;if(!ce)return null;const Y=D.find(Se=>de(Se.fullSha,ce)||de(Se.sha,ce));if(Y!=null&&Y.date)return Y.date;if(pe){const Se=((fe=V[pe.name])!=null?fe:[]).find(I=>de(I.fullSha,ce)||de(I.sha,ce));if(Se!=null&&Se.date)return Se.date}return null})(),Xe=De?new Date(De).getTime():Number.NaN,ie=Date.now(),oe=Number.isFinite(Xe)?Math.max(ie,Xe+1):ie,$=new Date(oe).toISOString(),ne={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ce,message:"Local uncommitted changes",author:"You",date:$,kind:"uncommitted"};pe?(T=T.map(Y=>Y.name===pe.name?{...Y,commitsAhead:Y.commitsAhead+1,unpushedCommits:Y.unpushedCommits+1,lastCommitDate:$,headSha:"WORKING_TREE"}:Y),V={...V,[pe.name]:[ne,...V[pe.name]||[]]},z={...z,[pe.name]:Math.max(0,(Z=Object.prototype.hasOwnProperty.call(z,pe.name)?z[pe.name]:pe.commitsAhead)!=null?Z:0)+1}):V={...V,[c]:[ne,...V[c]||[]]}}const N={...d};N[c]=null;const q=Sp(T,c,V,N),G=Cp({lanes:q,branches:T,mergeNodes:n,directCommits:D,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:V,branchParentByName:N,branchUniqueAheadCounts:z,manuallyOpenedClumps:g,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:C,checkedOutRef:p,orientation:M});return{enrichedBranches:T,enrichedBranchCommitPreviews:V,enrichedBranchUniqueAheadCounts:z,enrichedDirectCommits:D,sharedGridLayoutModel:G}}const ax="git-visualizer:expanded-projects",rx="git-visualizer:expanded-branches";function T3(e,n){var u;const i=new Map(e.map(d=>[d.name,d])),a=new Map;for(const d of e){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const y=(u=a.get(h))!=null?u:[];y.push(d.name),a.set(h,y)}const c=(d,h)=>{var g,x,b,C;const p=new Date((x=(g=i.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((C=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?C:0).getTime();return p-y};for(const[d,h]of a.entries())h.sort(c);return a}function A3(e,n,i){const a=new Map(e.map(d=>[d.name,d])),c=(d,h)=>{var g,x,b,C;const p=new Date((x=(g=a.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((C=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?C:0).getTime();return p-y},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return e.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function N3(e,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const y of d){const g=[...h,y];if(y===i.branchName){for(const x of g)c.add(x);return!0}if(u((p=n.get(y))!=null?p:[],g))return!0}return!1};return u(e,[]),c}function bm(e,n){if(!e||!n)return!1;const i=u=>{const d=u.replace(/\\/g,"/").replace(/\/+$/,""),h=new Set([d]);return d.startsWith("/private/")&&h.add(d.slice(8)),Array.from(h)},a=i(e),c=i(n);for(const u of a)for(const d of c)if(u===d||u.toLowerCase()===d.toLowerCase())return!0;return!1}function hp({branchName:e,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:x,showCommits:b,getMergeTargetLabels:C,sourceBranchName:M,clusterKeyByCommitId:A,unpushedCommitShasByBranch:T,isGridClusterOpen:D,onToggleGridCluster:V,onSelectCommit:z,onSelectBranch:N,isActiveProject:q}){var be,Te;if(x.has(e))return null;const G=a.get(e);if(!G)return null;const W=(be=u.get(e))!=null?be:[],Z=W.length>0,ce=_.useMemo(()=>{var he;return[...(he=c[e])!=null?he:[]]},[c,e]),de=b&&ce.length>0,pe=b,De=Z||de,Xe=h.has(e),ie=pe?ce:[],oe=Xe&&ie.length>0,$=y===e||g!=null&&G.headSha===g,ne=new Set(x);ne.add(e);const Y="top-[-0.45rem] h-5 w-[10px]",fe="rounded-bl-[7px]",Se="left-[0.65rem]",I=new Map,re=[];for(const he of W){const ze=d.get(he);if(ze){const Qe=ie.findIndex(We=>Bi(We.fullSha,ze)||Bi(We.sha,ze));if(Qe>=0){const We=(Te=I.get(Qe))!=null?Te:[];We.push(he),I.set(Qe,We);continue}}re.push(he)}const te=_.useMemo(()=>{if(!b||ie.length===0)return[];const he=[];let ze=[],Qe=null;const We=()=>{if(ze.length===0)return;const ht=ze[ze.length-1],jt=`sidebar-single-${e}-${ht.fullSha}`;he.push({key:Qe!=null?Qe:jt,commits:ze,count:ze.length,lead:ht}),ze=[],Qe=null};return ie.forEach(ht=>{var Rt,dt;const jt=(Rt=A.get(`${e}:${ht.fullSha}`))!=null?Rt:null,vt=((dt=T[e])!=null?dt:[]).includes(ht.fullSha),st=`${jt!=null?jt:`sidebar-single-${e}-${ht.fullSha}`}:${vt?"unpushed":"pushed"}`;if(ze.length===0){ze=[ht],Qe=st;return}if(st===Qe){ze.push(ht);return}We(),ze=[ht],Qe=st}),We(),he},[e,b,ie,A,T]);return l.jsxs("li",{className:pn("relative flex flex-col gap-1",n>0?"pl-4":"pl-0",Xe?"mb-2.5":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:pn("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",fe,Se,Y)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:pn("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.25rem]",Se)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("div",{className:pn("branch-row","group flex min-w-0 flex-1 items-center gap-0 rounded-md px-2 h-6 text-left text-sm font-normal transition-colors hover:bg-border/50","text-inherit hover:text-inherit"),"data-active-project":q?"true":"false","data-checked-out-branch":$?"true":"false",style:{color:q?$?"var(--checked)":"var(--foreground)":"var(--muted-foreground)"},role:"button",tabIndex:0,onClick:()=>{q?N==null||N(e):De?p(e):N==null||N(e)},onKeyDown:he=>{(he.key==="Enter"||he.key===" ")&&(he.preventDefault(),q?N==null||N(e):De?p(e):N==null||N(e))},children:[De?l.jsx("button",{type:"button","aria-label":`${Xe?"Collapse":"Expand"} ${e}`,onPointerDown:he=>{he.preventDefault()},onClick:he=>{he.preventDefault(),he.stopPropagation(),p(e)},className:"group/chevron branch-chevron flex h-6 w-6 -ml-2 shrink-0 items-center justify-center rounded-sm p-0 text-[10px] leading-none transition-colors hover:bg-border/50",children:l.jsx(mw,{"aria-hidden":"true",className:pn("h-3.5 w-3.5 shrink-0 transition-transform text-current",Xe?"rotate-90":"")})}):null,l.jsx("span",{className:pn("branch-label min-w-0 flex-1 truncate font-normal whitespace-nowrap overflow-hidden","font-medium"),children:e})]})}),oe?l.jsx("ul",{className:"relative space-y-1 pl-4",children:te.map(he=>{const ze=he.count>1&&!D(he.key);return(ze?[he.lead]:he.commits).map(We=>{var vt;const ht=ie.findIndex(st=>st.fullSha===We.fullSha),jt=C(We.fullSha,M!=null?M:e);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>z==null?void 0:z(We.fullSha),className:"min-w-0 flex-1 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-muted hover:text-muted-foreground",title:We.message,children:[l.jsx("span",{className:"block truncate",children:We.message}),jt.length>0?l.jsx("span",{className:"mt-0 block space-y-2",children:jt.map(st=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:st})]},`${We.fullSha}:${st}`))}):null]}),he.count>1&&We.fullSha===he.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${e}:${he.lead.fullSha}`,onClick:()=>V(he.key,`${e}:${he.lead.fullSha}`),className:pn("shrink-0 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-muted hover:text-muted-foreground",ze?"":"min-w-[2ch] text-center"),children:ze?`+${Math.max(1,he.count-1)}`:"−"}):null]}),(vt=I.get(ht))!=null&&vt.length?l.jsx("ul",{className:"relative space-y-1",children:I.get(ht).map((st,Rt,dt)=>l.jsx(hp,{branchName:st,depth:n+1,isLast:Rt===dt.length-1&&re.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:ne,showCommits:b,getMergeTargetLabels:C,sourceBranchName:st,clusterKeyByCommitId:A,unpushedCommitShasByBranch:T,isGridClusterOpen:D,onToggleGridCluster:V,onSelectCommit:z,onSelectBranch:N,isActiveProject:q},st))}):null]},`${e}:${We.fullSha}`)})})}):null,Z&&Xe&&re.length>0?l.jsx("ul",{className:"relative space-y-1",children:re.map((he,ze)=>l.jsx(hp,{branchName:he,depth:n+1,isLast:ze===re.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:ne,showCommits:b,getMergeTargetLabels:C,sourceBranchName:he,clusterKeyByCommitId:A,unpushedCommitShasByBranch:T,isGridClusterOpen:D,onToggleGridCluster:V,onSelectCommit:z,onSelectBranch:N,isActiveProject:q},he))}):null]})}function D3({open:e}){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-4 w-4 shrink-0 transition-opacity",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e?l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.7031 19H5.97457C4.96341 19 4.11131 18.2453 3.9892 17.2415L2.77269 7.24152C2.62773 6.04996 3.5577 5 4.75805 5H7C7.64911 5 8.28071 5.21053 8.8 5.6L9.2 5.9C9.71929 6.28947 10.3509 6.5 11 6.5H16.2369C17.2445 6.5 18.0947 7.24955 18.2211 8.2492L18.4938 10.4062",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M5.21532 12.0419C5.42789 11.1385 6.23405 10.5 7.16215 10.5H19.8105C20.7133 10.5 21.38 11.3419 21.1733 12.2207L19.9409 17.4581C19.7284 18.3615 18.9222 19 17.9941 19H6.10333C4.81363 19 3.8611 17.7973 4.1565 16.5419L5.21532 12.0419Z",stroke:"currentColor",strokeWidth:"1.5"})]}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 7C4 5.89543 4.89543 5 6 5H9C9.64911 5 10.2807 5.21053 10.8 5.6L11.2 5.9C11.7193 6.28947 12.3509 6.5 13 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 10.5L12.4211 10.5L20 10.5",stroke:"currentColor",strokeWidth:"1.5"})]})})}function R3({projects:e,activeProjectPath:n,onSelectProject:i,onAddProject:a,onRemoveProject:c,onRevealProjectInFinder:u,onReorderProjects:d,projectLoading:h=!1,projectError:p=null,checkedOutRef:y,manuallyOpenedClumpsByProject:g={},manuallyClosedClumpsByProject:x={},manuallyOpenedClumps:b,manuallyClosedClumps:C,setManuallyOpenedClumps:M,setManuallyClosedClumps:A,gridLayoutModel:T,onSelectCommit:D,onSelectBranch:V,showCommits:z,className:N,style:q,collapsed:G=!1}){var Ge,Le;const W=_.useRef(null),Z=_.useRef(null),[ce,de]=_.useState(()=>{if(typeof window>"u")return new Set;try{const _e=window.localStorage.getItem(ax);if(_e){const Ze=JSON.parse(_e);if(Array.isArray(Ze)){const Ye=new Set;for(const Je of Ze)typeof Je=="string"&&Ye.add(Je);return Ye}}}catch{}return new Set}),[pe,De]=_.useState({}),[Xe,ie]=_.useState(()=>new Set),[oe,$]=_.useState(()=>new Set),[ne,Y]=_.useState(null),fe=b!=null?b:Xe,Se=C!=null?C:oe,I=M!=null?M:ie,re=A!=null?A:$,[te,be]=_.useState(null),[Te,he]=_.useState(null),[ze,Qe]=_.useState(null),[We,ht]=_.useState(null),[jt,vt]=_.useState(null),[st,Rt]=_.useState(null),[dt,qt]=_.useState(null),Kt=_.useRef(new Map),J=_.useRef(!1),Re=_.useRef(null),rt=_.useRef(null),Ce=_e=>{try{window.localStorage.setItem(ax,JSON.stringify(Array.from(_e)))}catch{}},mt=_e=>{try{const Ze=Object.fromEntries(Object.entries(_e).map(([Ye,Je])=>[Ye,Array.from(Je)]));window.localStorage.setItem(rx,JSON.stringify(Ze))}catch{}};_.useEffect(()=>{Ce(ce)},[ce]),_.useEffect(()=>{try{const _e=window.localStorage.getItem(rx);if(!_e)return;const Ze=JSON.parse(_e);if(!Ze||typeof Ze!="object")return;const Ye={};for(const[Je,Be]of Object.entries(Ze)){if(!Array.isArray(Be))continue;const et=new Set;for(const yt of Be)typeof yt=="string"&&et.add(yt);Ye[Je]=et}De(Ye)}catch{}},[]),_.useEffect(()=>{mt(pe)},[pe]);const He=e,pt=_.useMemo(()=>{if(!We)return He;const _e=He.find(Be=>Be.path===We);if(!_e)return He;const Ze=He.filter(Be=>Be.path!==We);if(jt==null)return Ze;const Ye=[...Ze],Je=Math.max(0,Math.min(jt,Ye.length));return Ye.splice(Je,0,_e),Ye},[jt,We,He]),gt=_.useCallback(_e=>{d==null||d(_e)},[d]),Mt=_.useCallback(()=>{Qe(null),ht(null),vt(null),Rt(null)},[]);_.useEffect(()=>{if(!ze)return;const _e=Ye=>{const Je=Re.current;!Je||!Je.active||Math.abs(Ye.clientX-Je.startX)<=4&&Math.abs(Ye.clientY-Je.startY)<=4||rt.current==null&&(rt.current=window.requestAnimationFrame(()=>{var Ke,Ot;rt.current=null;const Be=Re.current;if(!Be||!Be.active)return;(Math.abs(Ye.clientX-Be.startX)>4||Math.abs(Ye.clientY-Be.startY)>4)&&(Be.moved=!0,ht(Be.path)),Rt({x:Ye.clientX-Be.offsetX,y:Ye.clientY-Be.offsetY,width:Be.width});const yt=Array.from((Ot=(Ke=Z.current)==null?void 0:Ke.querySelectorAll("[data-project-path]"))!=null?Ot:[]).filter(wt=>wt.dataset.projectPath&&wt.dataset.projectPath!==Be.path);let xt=yt.length;if(yt.length>0)for(let wt=0;wt<yt.length;wt+=1){const ft=yt[wt].getBoundingClientRect(),un=ft.top+ft.height/2;if(Ye.clientY<un){xt=wt;break}}vt(xt)}))},Ze=()=>{const Ye=Re.current;if(Re.current=null,rt.current!=null&&(window.cancelAnimationFrame(rt.current),rt.current=null),!Ye){Mt();return}if(!Ye.moved){Mt();return}J.current=!0;const Je=He.map(Ke=>Ke.path);if(Je.indexOf(Ye.path)<0){Mt();return}const et=jt;if(et==null){Mt();return}const yt=Je.filter(Ke=>Ke!==Ye.path),xt=Math.max(0,Math.min(et,yt.length));yt.splice(xt,0,Ye.path),gt(yt),Mt(),window.requestAnimationFrame(()=>{J.current=!1,Y(null)})};return window.addEventListener("pointermove",_e),window.addEventListener("pointerup",Ze),window.addEventListener("pointercancel",Ze),()=>{window.removeEventListener("pointermove",_e),window.removeEventListener("pointerup",Ze),window.removeEventListener("pointercancel",Ze)}},[Mt,gt,ze,jt,He]);const Bt=_.useCallback((_e,Ze)=>{if(_e.button!==0)return;const Ye=_e.currentTarget.getBoundingClientRect();Re.current={active:!0,path:Ze,startX:_e.clientX,startY:_e.clientY,offsetX:_e.clientX-Ye.left,offsetY:_e.clientY-Ye.top,width:Ye.width,moved:!1},Qe(Ze),ht(null),vt(null),Rt({x:_e.clientX-Ye.left,y:_e.clientY-Ye.top,width:Ye.width})},[]),ot=(Ge=T==null?void 0:T.defaultCollapsedClumps)!=null?Ge:new Set,F=_e=>fe.has(_e)||!ot.has(_e)&&!Se.has(_e),ee=(_e,Ze)=>{const Ye=W.current,Je=Z.current;if(Ye&&Je){const Be=`[data-clump-toggle-id="${Ze}"]`,et=Ye.querySelector(Be);if(et){const yt=et.getBoundingClientRect().top-Je.getBoundingClientRect().top;he({id:Ze,topWithinScrollBody:yt})}else he(null)}else he(null);be(Ze),I(Be=>{const et=new Set(Be),yt=F(_e);return re(xt=>{const Ke=new Set(xt);return yt?(et.delete(_e),Ke.add(_e)):(Ke.delete(_e),et.add(_e)),Ke}),et})};_.useLayoutEffect(()=>{if(!te)return;const _e=W.current,Ze=Z.current;if(!_e||!Ze)return;const Ye=`[data-clump-toggle-id="${te}"]`,Je=_e.querySelector(Ye);if(Je){if((Te==null?void 0:Te.id)===te){const et=Je.getBoundingClientRect().top-Ze.getBoundingClientRect().top-Te.topWithinScrollBody;Number.isFinite(et)&&et!==0&&(Ze.scrollTop+=et)}Je.focus({preventScroll:!0}),be(null),he(null)}},[fe,Se,te,Te]);const ve=(_e,Ze)=>{De(Ye=>{var yt;const Je=(yt=Ye[_e])!=null?yt:new Set,Be=new Set(Je);Be.has(Ze)?Be.delete(Ze):Be.add(Ze);const et={...Ye,[_e]:Be};return mt(et),et})};_.useEffect(()=>{if(ne==null)return;const _e=()=>{const Ye=Kt.current.get(ne);if(!Ye)return;const Je=Ye.getBoundingClientRect();qt({top:Je.bottom+8,right:Math.max(8,window.innerWidth-Je.right)})};_e();const Ze=()=>Y(null);return window.addEventListener("pointerdown",Ze),window.addEventListener("resize",_e),window.addEventListener("scroll",_e,!0),()=>{window.removeEventListener("pointerdown",Ze),window.removeEventListener("resize",_e),window.removeEventListener("scroll",_e,!0)}},[ne]);const Me=_.useMemo(()=>{var Ze,Ye,Je,Be,et,yt,xt,Ke,Ot,wt,ft,un,ut,It,_n,Tt;const _e=new Map;for(const bt of e){const dn=bm(bt.path,n),sn=ce.has(bt.path);if(!dn&&!sn)continue;const Zt=fp({branches:bt.branches,mergeNodes:bt.mergeNodes,directCommits:bt.directCommits,unpushedDirectCommits:bt.unpushedDirectCommits,defaultBranch:bt.defaultBranch,branchCommitPreviews:bt.branchCommitPreviews,branchUniqueAheadCounts:bt.branchUniqueAheadCounts,checkedOutRef:bt.checkedOutRef,stashes:bt.stashes,manuallyOpenedClumps:(Ze=g[bt.path])!=null?Ze:new Set,manuallyClosedClumps:(Ye=x[bt.path])!=null?Ye:new Set}),Pt=Zt.enrichedBranches.some(Qt=>Qt.name===bt.defaultBranch)?Zt.enrichedBranches:[{name:bt.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...Zt.enrichedBranches],tn=new Map(Zt.sharedGridLayoutModel.nodes.map(Qt=>[Qt.commit.visualId,Qt.row])),Nt={};for(const Qt of Zt.sharedGridLayoutModel.allCommits){const Ln=(Je=Nt[Qt.branchName])!=null?Je:[];Ln.push({fullSha:Qt.id,sha:Qt.id.slice(0,7),parentSha:(Be=Qt.parentSha)!=null?Be:null,message:Qt.message,author:Qt.author,date:Qt.date,kind:(et=Qt.kind)!=null?et:"commit"}),Nt[Qt.branchName]=Ln}for(const Qt of Object.keys(Nt))Nt[Qt]=Nt[Qt].sort((Ln,nn)=>{var Ts,Rs;const rs=new Date(Ln.date).getTime(),gs=new Date(nn.date).getTime();if(rs!==gs)return rs-gs;const ys=(Ts=tn.get(`${Qt}:${Ln.fullSha}`))!=null?Ts:Number.MAX_SAFE_INTEGER,on=(Rs=tn.get(`${Qt}:${nn.fullSha}`))!=null?Rs:Number.MAX_SAFE_INTEGER;return ys!==on?ys-on:Ln.fullSha.localeCompare(nn.fullSha)});const bn=(yt=Zt.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?yt:new Map,tt=(Qt,Ln)=>{const nn=bn.get(Ln);if(!nn)return[];for(const[rs,gs]of nn.entries())if(Bi(Qt,rs))return Array.from(gs).sort();return[]},ds=T3(Pt,bt.defaultBranch),fs=A3(Pt,bt.defaultBranch,ds),Ro=new Map(Pt.map(Qt=>[Qt.name,Qt])),no=new Map;for(const Qt of Pt){const Ln=(Ke=(xt=Zt.sharedGridLayoutModel.firstBranchCommitByName.get(Qt.name))==null?void 0:xt.parentSha)!=null?Ke:null,nn=Ln!=null?Ln:null;no.set(Qt.name,nn)}const jo=(Ot=Zt.sharedGridLayoutModel.defaultCollapsedClumps)!=null?Ot:new Set,go=(wt=g[bt.path])!=null?wt:new Set,Bo=(ft=x[bt.path])!=null?ft:new Set,as=Qt=>go.has(Qt)||!jo.has(Qt)&&!Bo.has(Qt);_e.set(bt.path,{rootBranchNames:fs,branchByName:Ro,branchCommitPreviewsFromLayout:Nt,childNamesByParent:ds,branchAnchorShaByName:no,unpushedCommitShasByBranch:bt.unpushedCommitShasByBranch,checkedOutBranchName:(ut=(un=bt.checkedOutRef)==null?void 0:un.branchName)!=null?ut:null,checkedOutHeadSha:(_n=(It=bt.checkedOutRef)==null?void 0:It.headSha)!=null?_n:null,clusterKeyByCommitId:(Tt=Zt.sharedGridLayoutModel.clusterKeyByCommitId)!=null?Tt:new Map,getMergeTargetLabels:tt,isGridClusterOpen:as})}return _e},[n,ce,x,g,e]),nt=(_e,Ze={})=>{var ft,un,ut,It,_n;const Ye=(ft=Ze.ghostMode)!=null?ft:!1,Je=(un=Ze.hideLive)!=null?un:!1,Be=bm(_e.path,n),et=ce.has(_e.path),yt=(ut=_e.treeLoaded)!=null?ut:_e.branches.length>0,xt=Me.get(_e.path),Ke=(It=pe[_e.path])!=null?It:xt?N3(xt.rootBranchNames,xt.childNamesByParent,y,_e.defaultBranch):new Set,Ot=We===_e.path,wt=bm(_e.path,n);return l.jsxs(li.div,{layout:"position",transition:{duration:.12,ease:"easeOut"},"data-project-path":_e.path,"data-active-project":wt?"true":"false",className:pn("project-row relative z-10 flex flex-col gap-1 transition-colors",et&&xt?"mb-2.5":""),children:[jt!==null&&We!==_e.path&&((_n=pt[jt])==null?void 0:_n.path)===_e.path?l.jsx("div",{className:"h-px","aria-hidden":"true",children:l.jsx("div",{className:"mx-1 h-px bg-foreground/60"})}):null,l.jsxs("div",{className:pn("relative z-0 px-1",Je?"pointer-events-none opacity-0":""),children:[l.jsxs("div",{className:pn(Ye?"group flex w-full items-center gap-0 rounded-lg px-0 h-6":"group sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-muted px-0 h-6 transition-all duration-100 ease-out hover:bg-border/50 cursor-grab active:cursor-grabbing",Ot&&!Ye?"opacity-0":""),onPointerDownCapture:Tt=>{if(Ye)return;const bt=Tt.target;bt!=null&&bt.closest('.window-no-drag, button, input, textarea, select, [contenteditable="true"]')||Bt(Tt,_e.path)},onClick:Tt=>{if(Ye||wt||We===_e.path||J.current)return;const bt=Tt.target;bt!=null&&bt.closest('button, input, textarea, select, [contenteditable="true"]')||i(_e.path)},children:[l.jsx("button",{type:"button",onPointerDown:Tt=>Tt.stopPropagation(),onClick:Tt=>{Tt.preventDefault(),Tt.stopPropagation(),de(bt=>{const dn=new Set(bt);return dn.has(_e.path)?dn.delete(_e.path):dn.add(_e.path),Ce(dn),dn})},"aria-expanded":et,"aria-label":`${et?"Collapse":"Expand"} ${_e.name}`,className:pn("project-icon flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-border/50",Ye?"pointer-events-none":""),style:{color:wt?"var(--foreground)":"var(--muted-foreground)"},children:l.jsx(D3,{open:et})}),l.jsx("span",{className:pn("project-name min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors","font-normal"),style:{color:wt?"var(--foreground)":"var(--muted-foreground)"},children:_e.name}),l.jsxs("div",{className:"relative z-[130] shrink-0",children:[l.jsx("button",{type:"button",onPointerDown:Tt=>Tt.stopPropagation(),"aria-label":`Project actions for ${_e.name}`,"aria-expanded":ne===_e.path,ref:Tt=>{Kt.current.set(_e.path,Tt)},onClick:Tt=>{Tt.stopPropagation();const bt=Tt.currentTarget.getBoundingClientRect();qt({top:bt.bottom+8,right:Math.max(8,window.innerWidth-bt.right)}),Y(dn=>dn===_e.path?null:_e.path)},className:pn("pr-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md opacity-0 hover:bg-border/50 group-hover:opacity-100 text-current",Ye?"pointer-events-none":""),children:l.jsx(yw,{className:"h-4 w-4 shrink-0"})}),ne===_e.path&&!Ye&&dt&&typeof document<"u"?zl.createPortal(l.jsxs("div",{role:"menu",className:"fixed z-[10000] inline-flex w-max flex-col overflow-hidden rounded-md border border-border bg-background p-1",style:{top:`${dt.top}px`,right:`${dt.right}px`},onPointerDownCapture:Tt=>Tt.stopPropagation(),onClick:Tt=>Tt.stopPropagation(),children:[l.jsx("button",{type:"button",role:"menuitem",onPointerDown:Tt=>Tt.stopPropagation(),onClick:()=>{Y(null),u(_e.path)},className:"flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",children:"Open in Finder"}),l.jsx("button",{type:"button",role:"menuitem",onPointerDown:Tt=>Tt.stopPropagation(),onClick:()=>{Y(null),c(_e.path)},className:"project-menu-remove flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium",children:"Remove"})]}),document.body):null]})]}),et?yt&&xt?l.jsx("ul",{className:pn("relative z-0 space-y-1 pt-0",Ye?"opacity-70":""),children:xt.rootBranchNames.map((Tt,bt)=>l.jsx(hp,{branchName:Tt,depth:0,isLast:bt===xt.rootBranchNames.length-1,branchByName:xt.branchByName,branchCommitPreviews:xt.branchCommitPreviewsFromLayout,childNamesByParent:xt.childNamesByParent,branchAnchorShaByName:xt.branchAnchorShaByName,expandedBranchNames:Ke,onToggleBranch:dn=>ve(_e.path,dn),checkedOutBranchName:xt.checkedOutBranchName,checkedOutHeadSha:xt.checkedOutHeadSha,ancestors:new Set,showCommits:z,getMergeTargetLabels:xt.getMergeTargetLabels,sourceBranchName:Tt,clusterKeyByCommitId:xt.clusterKeyByCommitId,unpushedCommitShasByBranch:xt.unpushedCommitShasByBranch,isGridClusterOpen:xt.isGridClusterOpen,onToggleGridCluster:ee,onSelectCommit:async dn=>{Be||await i(_e.path),D==null||D(dn)},onSelectBranch:async dn=>{Be||await i(_e.path),V==null||V(dn)},isActiveProject:wt},`${_e.path}:${Tt}`))}):l.jsx("p",{className:pn("px-2 py-2 text-xs text-muted-foreground",Ye?"opacity-70":""),children:"Loading branch tree..."}):null]})]},_e.path)};return l.jsxs("aside",{ref:W,"aria-label":"Dense branch sidebar",className:pn("pointer-events-auto relative z-[120] h-full select-none overflow-hidden bg-muted",N),style:q,children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"absolute inset-x-0 top-0 z-80 h-12"}),l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[p&&l.jsx("div",{className:"px-2.5 pb-2",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:p})}),l.jsx("div",{className:pn("px-2 pb-2",G?"opacity-0 pointer-events-none":""),children:l.jsx("div",{className:"px-1",children:l.jsxs("button",{type:"button",onClick:a,disabled:h,"aria-label":"Add Repo",className:"window-no-drag group flex w-full items-center gap-0 rounded-lg bg-muted px-0 h-6 text-foreground transition-colors hover:bg-border/50 disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors group-hover:bg-border/50 text-foreground",children:l.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-4 w-4 shrink-0",children:l.jsx("path",{d:"M12 5V19M5 12H19",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}),l.jsx("span",{className:"min-w-0 flex-1 truncate pl-0 text-left text-sm font-normal text-foreground",children:"New Project"})]})})}),l.jsx("div",{ref:Z,className:pn("sidebar-scrollbar min-h-0 flex-1 space-y-2 overflow-y-auto px-2",G?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:pt.map(_e=>nt(_e,{hideLive:We===_e.path}))})]}),We&&st?l.jsx("div",{"aria-hidden":"true",className:"pointer-events-none fixed left-0 top-0 z-[90]",style:{transform:`translate3d(${st.x}px, ${st.y}px, 0)`,width:`${st.width}px`},children:nt((Le=e.find(_e=>_e.path===We))!=null?Le:He.find(_e=>_e.path===We),{ghostMode:!0})}):null]})}function vm(e){return{branchByName:Array.from(e.branchByName.entries()),laneByName:Array.from(e.laneByName.entries()),mainCommits:e.mainCommits,branchCommitsByLane:Array.from(e.branchCommitsByLane.entries()),branchPreviewSets:Array.from(e.branchPreviewSets.entries()),allCommits:e.allCommits,clustersByBranch:Array.from(e.clustersByBranch.entries()),clusterKeyByCommitId:Array.from(e.clusterKeyByCommitId.entries()),clusterKeyBySha:Array.from(e.clusterKeyBySha.entries()),leadByClusterKey:Array.from(e.leadByClusterKey.entries()),clusterCounts:Array.from(e.clusterCounts.entries()),debugRows:e.debugRows,branchDebugRows:e.branchDebugRows,nodes:e.nodes,normalizedSearchQuery:e.normalizedSearchQuery,matchingNodes:e.matchingNodes,matchingNodeIds:Array.from(e.matchingNodeIds),focusedNode:e.focusedNode,checkedOutClusterKey:e.checkedOutClusterKey,defaultCollapsedClumps:Array.from(e.defaultCollapsedClumps),visibleCommitsList:e.visibleCommitsList,renderNodes:e.renderNodes,visibleNodesBySha:Array.from(e.visibleNodesBySha.entries()),visibleNodeByClusterKey:Array.from(e.visibleNodeByClusterKey.entries()),contentWidth:e.contentWidth,contentHeight:e.contentHeight,connectors:e.connectors,mergeConnectors:e.mergeConnectors,connectorDecisions:e.connectorDecisions,nodeWarnings:Array.from(e.nodeWarnings.entries()),connectorParentShas:Array.from(e.connectorParentShas),branchStartShas:Array.from(e.branchStartShas),branchOffNodeShas:Array.from(e.branchOffNodeShas),crossBranchOutgoingShas:Array.from(e.crossBranchOutgoingShas),commitIdsWithRenderedAncestry:Array.from(e.commitIdsWithRenderedAncestry),branchBaseCommitByName:Array.from(e.branchBaseCommitByName.entries()),firstBranchCommitByName:Array.from(e.firstBranchCommitByName.entries()),mergeDestinations:e.mergeDestinations,mergeTargetBranchesBySourceBranchAndCommitSha:Array.from(e.mergeTargetBranchesBySourceBranchAndCommitSha.entries()).map(([n,i])=>[n,Array.from(i.entries()).map(([a,c])=>[a,Array.from(c)])])}}function wm(e){var i,a,c,u,d,h,p,y,g,x,b,C,M,A,T,D,V,z,N,q,G,W,Z,ce,de,pe,De,Xe,ie,oe,$,ne,Y,fe,Se,I,re,te,be;const n=new Map(((i=e.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?i:[]).map(([Te,he])=>[Te,new Map(he.map(([ze,Qe])=>[ze,new Set(Qe)]))]));return{branchByName:new Map((a=e.branchByName)!=null?a:[]),laneByName:new Map((c=e.laneByName)!=null?c:[]),mainCommits:(u=e.mainCommits)!=null?u:[],branchCommitsByLane:new Map((d=e.branchCommitsByLane)!=null?d:[]),branchPreviewSets:new Map((h=e.branchPreviewSets)!=null?h:[]),allCommits:(p=e.allCommits)!=null?p:[],clustersByBranch:new Map((y=e.clustersByBranch)!=null?y:[]),clusterKeyByCommitId:new Map((g=e.clusterKeyByCommitId)!=null?g:[]),clusterKeyBySha:new Map((x=e.clusterKeyBySha)!=null?x:[]),leadByClusterKey:new Map((b=e.leadByClusterKey)!=null?b:[]),clusterCounts:new Map((C=e.clusterCounts)!=null?C:[]),debugRows:(M=e.debugRows)!=null?M:[],branchDebugRows:(A=e.branchDebugRows)!=null?A:[],nodes:(T=e.nodes)!=null?T:[],normalizedSearchQuery:(D=e.normalizedSearchQuery)!=null?D:"",matchingNodes:(V=e.matchingNodes)!=null?V:[],matchingNodeIds:new Set((z=e.matchingNodeIds)!=null?z:[]),focusedNode:(N=e.focusedNode)!=null?N:null,checkedOutClusterKey:(q=e.checkedOutClusterKey)!=null?q:null,defaultCollapsedClumps:new Set((G=e.defaultCollapsedClumps)!=null?G:[]),visibleCommitsList:(W=e.visibleCommitsList)!=null?W:[],renderNodes:(Z=e.renderNodes)!=null?Z:[],visibleNodesBySha:new Map((ce=e.visibleNodesBySha)!=null?ce:[]),visibleNodeByClusterKey:new Map((de=e.visibleNodeByClusterKey)!=null?de:[]),pointFormatter:(Te,he)=>`${Te},${he}`,contentWidth:(pe=e.contentWidth)!=null?pe:0,contentHeight:(De=e.contentHeight)!=null?De:0,connectors:(Xe=e.connectors)!=null?Xe:[],mergeConnectors:(ie=e.mergeConnectors)!=null?ie:[],connectorDecisions:(oe=e.connectorDecisions)!=null?oe:[],nodeWarnings:new Map(($=e.nodeWarnings)!=null?$:[]),connectorParentShas:new Set((ne=e.connectorParentShas)!=null?ne:[]),branchStartShas:new Set((Y=e.branchStartShas)!=null?Y:[]),branchOffNodeShas:new Set((fe=e.branchOffNodeShas)!=null?fe:[]),crossBranchOutgoingShas:new Set((Se=e.crossBranchOutgoingShas)!=null?Se:[]),commitIdsWithRenderedAncestry:new Set((I=e.commitIdsWithRenderedAncestry)!=null?I:[]),branchBaseCommitByName:new Map((re=e.branchBaseCommitByName)!=null?re:[]),firstBranchCommitByName:new Map((te=e.firstBranchCommitByName)!=null?te:[]),mergeDestinations:(be=e.mergeDestinations)!=null?be:[],mergeTargetBranchesBySourceBranchAndCommitSha:n}}const B3="git-visualizer",Mc="git-visualizer:projects",Sm="git-visualizer:active-project",lx="git-visualizer:map-orientation",hd=12,cx=1400,L3=180,ux="git-visualizer:sidebar-width",dx="git-visualizer:sidebar-collapsed",fx="git-visualizer:grid-clumps",hx=360,mx=180,px=360;function vi(e){return e==="/"?e:e.replace(/\/+$/,"")}function O3(...e){return e.filter(Boolean).join(" ")}function $d(e){var a;if(!e)return"";const i=e.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function z3(e){return $d(e)===B3}function qd(e){return e.size===0?"__none__":Array.from(e).sort().join(",")}function md(e,n,i,a){return["layout-v3",e,n,qd(i),qd(a)].join("|")}function _x(e){var n,i;return[e.path,e.name,e.defaultBranch,e.updatedAtMs,e.branches.map(a=>[a.name,a.headSha,a.commitsAhead,a.commitsBehind,a.unpushedCommits,a.remoteSyncStatus,a.status,a.lastCommitDate].join(":")).join("|"),e.mergeNodes.map(a=>[a.fullSha,a.targetBranch,a.targetCommitSha].join(":")).join("|"),e.directCommits.map(a=>a.fullSha).join("|"),e.unpushedDirectCommits.map(a=>a.fullSha).join("|"),e.checkedOutRef?[(n=e.checkedOutRef.branchName)!=null?n:"",e.checkedOutRef.headSha,(i=e.checkedOutRef.parentSha)!=null?i:"",e.checkedOutRef.hasUncommittedChanges?"1":"0"].join(":"):"__none__",Object.entries(e.unpushedCommitShasByBranch).map(([a,c])=>`${a}:${c.join(",")}`).join("|"),Object.entries(e.branchCommitPreviews).map(([a,c])=>`${a}:${c.map(u=>u.fullSha).join(",")}`).join("|"),Object.entries(e.branchParentByName).map(([a,c])=>`${a}:${c!=null?c:""}`).join("|"),Object.entries(e.laneByBranch).map(([a,c])=>`${a}:${c}`).join("|"),Object.entries(e.branchUniqueAheadCounts).map(([a,c])=>`${a}:${c}`).join("|")].join("@@")}function $3(){var la,O,U;const[e,n]=_.useState(null),[i,a]=_.useState(""),[c,u]=_.useState([]),[d,h]=_.useState({}),[p,y]=_.useState(!1),[g,x]=_.useState([]),[b,C]=_.useState([]),[M,A]=_.useState([]),[T,D]=_.useState([]),[V,z]=_.useState({}),[N,q]=_.useState("main"),[G,W]=_.useState(null),[Z,ce]=_.useState([]),[de,pe]=_.useState(!1),[De,Xe]=_.useState(""),[ie,oe]=_.useState(0),[$,ne]=_.useState(1),[Y,fe]=_.useState({}),[Se,I]=_.useState({}),[re,te]=_.useState(null),[be,Te]=_.useState(null),[he,ze]=_.useState(null),[Qe,We]=_.useState(!1),[ht,jt]=_.useState(!1),[vt,st]=_.useState(null),[Rt,dt]=_.useState(null),[qt,Kt]=_.useState(!1),[J,Re]=_.useState(null),[rt,Ce]=_.useState(null),[mt,He]=_.useState(!1),[pt,gt]=_.useState(!1),[Mt,Bt]=_.useState(!1),[ot,F]=_.useState(!1),[ee,ve]=_.useState({}),[Me,nt]=_.useState({}),[Ge,Le]=_.useState({}),[_e,Ze]=_.useState({}),[Ye,Je]=_.useState({}),[Be,et]=_.useState([]),[yt,xt]=_.useState([]),[Ke,Ot]=_.useState(!1),[wt,ft]=_.useState(!1),[un,ut]=_.useState(!1),[It,_n]=_.useState(!1),Tt=wt||un||Ke||Mt||ot||pt||de||It,[bt,dn]=_.useState(!1),[sn,Zt]=_.useState("horizontal"),[Pt,tn]=_.useState(null),[Nt,bn]=_.useState(null),[tt,ds]=_.useState(null),[fs,Ro]=_.useState(!1),[no,jo]=_.useState(!1),[go,Bo]=_.useState(hx),[as,Qt]=_.useState(!1),Ln=_.useRef(null),nn=_.useRef(0),rs=_.useRef(0),gs=_.useRef({}),ys=_.useRef(null),on=_.useRef({}),Ts=_.useRef({}),Rs=_.useRef(!1),hs=_.useRef(null),yo=_.useRef(hx),so=_.useRef(null),Yn=_.useRef(null),Ys=z3(e)||!0,an=_.useRef(!1),Ws=_.useRef(!1);_.useRef(!1);const Si=_.useRef(new Set),[Ss,Mo]=_.useState(!1),Bs=_.useRef([]),Wn=_.useRef([]),ms=_.useRef(null),Fs=_.useRef([]),On=_.useRef([]),Ls=_.useRef([]),Fn=_.useRef({}),Xn=_.useRef([]),ui=_.useRef({}),ps=_.useRef(new Map),oo=_.useRef(new Set),Jt=_.useRef(null),[Ci,Gn]=_.useState(null),[Li,xo]=_.useState(null),As=e!=null?e:"__no-repo__",ls=(w,v)=>{try{const k={opened:Object.fromEntries(Object.entries(w).map(([B,j])=>[B,Array.from(j)])),closed:Object.fromEntries(Object.entries(v).map(([B,j])=>[B,Array.from(j)]))};window.localStorage.setItem(fx,JSON.stringify(k))}catch{}};_.useEffect(()=>{var w,v;try{const k=window.localStorage.getItem(fx);if(!k)return;const B=JSON.parse(k);if(!B||typeof B!="object")return;const j={},L={},H=B;for(const[K,ae]of Object.entries((w=H.opened)!=null?w:{}))Array.isArray(ae)&&(j[K]=new Set(ae.filter(Ee=>typeof Ee=="string")));for(const[K,ae]of Object.entries((v=H.closed)!=null?v:{}))Array.isArray(ae)&&(L[K]=new Set(ae.filter(Ee=>typeof Ee=="string")));fe(j),I(L)}catch{}},[]),_.useEffect(()=>{ls(Y,Se)},[Se,Y]);const Eo=_.useMemo(()=>{var w;return(w=Y[As])!=null?w:new Set},[As,Y]),es=_.useMemo(()=>{var w;return(w=Se[As])!=null?w:new Set},[As,Se]),Tn=_.useCallback(w=>{fe(v=>{var L;const k=(L=v[As])!=null?L:new Set,B=typeof w=="function"?w(k):w,j={...v,[As]:new Set(B)};return ls(j,Se),j})},[As,Se]),bo=_.useCallback(w=>{I(v=>{var L;const k=(L=v[As])!=null?L:new Set,B=typeof w=="function"?w(k):w,j={...v,[As]:new Set(B)};return ls(Y,j),j})},[As,Y]),di=_.useMemo(()=>c.map(w=>{var B,j,L,H,K,ae,Ee,Ae,Ne,me,ct,_t,zt,Ct,it;const v=(()=>{if(!e)return!1;const lt=vi(w.path).toLowerCase(),St=vi(e).toLowerCase();return lt===St})(),k=(B=d[w.path])!=null?B:{};return{...w,...k,branches:(j=k.branches)!=null?j:[],mergeNodes:(L=k.mergeNodes)!=null?L:[],directCommits:(H=k.directCommits)!=null?H:[],unpushedDirectCommits:(K=k.unpushedDirectCommits)!=null?K:[],unpushedCommitShasByBranch:(ae=k.unpushedCommitShasByBranch)!=null?ae:{},checkedOutRef:v?G:(Ee=k.checkedOutRef)!=null?Ee:null,worktrees:(Ae=k.worktrees)!=null?Ae:[],stashes:(Ne=k.stashes)!=null?Ne:[],branchCommitPreviews:(me=k.branchCommitPreviews)!=null?me:{},laneByBranch:(ct=k.laneByBranch)!=null?ct:{},branchUniqueAheadCounts:(_t=k.branchUniqueAheadCounts)!=null?_t:{},defaultBranch:(Ct=(zt=k.defaultBranch)!=null?zt:w.branchName)!=null?Ct:"main",treeLoaded:(it=k.loaded)!=null?it:!1}}),[c,d,e,G]),Os=_.useMemo(()=>({githubAuthStatus:Rt,githubAuthLoading:qt,onGitHubAuthSetup:fi,gridSearchQuery:De,setGridSearchQuery:Xe,gridSearchResultCount:re,gridSearchResultIndex:be,setGridSearchJumpDirection:ne,setGridSearchJumpToken:oe,mapGridOrientation:sn,setMapGridOrientation:Zt,setIsGridDebugOpen:jo,githubAuthMessage:J,commitSwitchFeedback:rt,isCommitSwitchFeedbackVisible:mt}),[rt,qt,J,Rt,De,re,be,fi,mt,sn,Xe,ne,oe,jo,Zt]);function To(w,v){const k=_x(v);return gs.current[w]===k?!1:(gs.current={...gs.current,[w]:k},h(j=>j[w]===v?j:{...j,[w]:v}),!0)}function xn(w){var v;return[w.repoPath,w.defaultBranch,w.headSha,(v=w.upstreamSha)!=null?v:"",w.hasUncommittedChanges?"1":"0",w.branchCount,w.worktreeCount,w.stashCount].join("|")}function Xs(w){var v;return[w.repoPath,w.headSha,(v=w.upstreamSha)!=null?v:"",w.hasUncommittedChanges?"1":"0"].join("|")}function zs(w,v){var k,B,j,L,H,K;return{repoPath:w,headSha:(B=(k=v.checkedOutRef)==null?void 0:k.headSha)!=null?B:"",upstreamSha:(L=(j=v.checkedOutRef)==null?void 0:j.parentSha)!=null?L:null,hasUncommittedChanges:(K=(H=v.checkedOutRef)==null?void 0:H.hasUncommittedChanges)!=null?K:!1}}function Qo(w,v,k){var B,j,L,H,K,ae;return{repoPath:w,defaultBranch:v,headSha:(j=(B=k.checkedOutRef)==null?void 0:B.headSha)!=null?j:"",upstreamSha:(H=(L=k.checkedOutRef)==null?void 0:L.parentSha)!=null?H:null,hasUncommittedChanges:(ae=(K=k.checkedOutRef)==null?void 0:K.hasUncommittedChanges)!=null?ae:!1,branchCount:k.branches.length,worktreeCount:k.worktrees.length,stashCount:k.stashes.length}}_.useEffect(()=>{try{const w=localStorage.getItem(Mc);if(!w)return;const v=JSON.parse(w);if(!Array.isArray(v))return;const k=v.filter(B=>typeof B=="object"&&B!==null&&typeof B.path=="string"&&typeof B.name=="string"&&typeof B.lastOpenedAt=="number");u(k.slice(0,hd))}catch{u([])}},[]),_.useEffect(()=>{try{const w=window.localStorage.getItem(lx);(w==="vertical"||w==="horizontal")&&Zt(w)}catch{}},[]),_.useEffect(()=>{var k;if(Ws.current||e||c.length===0||!Ss)return;const w=(()=>{try{return window.localStorage.getItem(Sm)}catch{return null}})(),v=w?c.find(B=>vi(B.path).toLowerCase()===vi(w).toLowerCase()):null;Ws.current=!0,vo((k=v==null?void 0:v.path)!=null?k:c[0].path)},[Ss,c,e]),_.useEffect(()=>{if(e)try{window.localStorage.setItem(Sm,e)}catch{}},[e]),_.useEffect(()=>{try{window.localStorage.setItem(lx,sn)}catch{}},[sn]);const Ns=_.useMemo(()=>b.reduce((w,v)=>(w[v.targetCommitSha]=v.targetBranch,w),{}),[b]);_.useEffect(()=>{e&&(Rs.current||h(w=>{var v,k,B,j;return{...w,[e]:{path:e,name:i||$d(e),branches:g,mergeNodes:b,directCommits:M,unpushedDirectCommits:T,mergeTargetBranchByCommitSha:b.reduce((L,H)=>(L[H.targetCommitSha]=H.targetBranch,L),{}),unpushedCommitShasByBranch:V,checkedOutRef:G,worktrees:Z,stashes:Be,branchCommitPreviews:Me,branchParentByName:Ge,laneByBranch:_e,branchUniqueAheadCounts:Ye,defaultBranch:N,loaded:!0,cacheSchemaVersion:(k=(v=w[e])==null?void 0:v.cacheSchemaVersion)!=null?k:1,updatedAtMs:(j=(B=w[e])==null?void 0:B.updatedAtMs)!=null?j:Date.now()}}}))},[e,i,g,b,M,T,Ns,V,G,Z,Be,Me,Ge,_e,Ye,N]);async function Zo(w,v=!1){var B;const k=vi(w);if(k&&!Si.current.has(k)&&!(!v&&((B=d[k])!=null&&B.loaded))){Si.current.add(k),k===e&&y(!0);try{const j=await xe("get_repo_visual_snapshot",{repoPath:k,forceRefresh:v});To(k,j)}finally{Si.current.delete(k),k===e&&Si.current.size===0&&y(!1)}}}_.useEffect(()=>{if(c.length===0){Mo(!0);return}let w=!1;const v=!1;return(async()=>{try{await Promise.all(c.map(async k=>{await Zo(k.path,v),await xe("watch_repo",{repoPath:k.path}).catch(console.error)}))}catch(k){console.error("Failed to preload project snapshots:",k)}w||(Mo(!0),y(!1))})(),()=>{w=!0}},[c]),_.useEffect(()=>{let w=!1,v=null;return $c("git-activity",k=>{if(w)return;const B=vi(k.payload.repoPath);!B||B===e||Zo(B,!1)}).then(k=>{w?k():v=k}).catch(console.error),()=>{w=!0,v&&v()}},[e]),_.useEffect(()=>{if(ht||Rs.current||c.length===0)return;let w=!1;return(async()=>{var v,k;for(const B of c){const j=vi(B.path),L=d[j];if(!(L!=null&&L.loaded))continue;const H=(v=Y[j])!=null?v:new Set,K=(k=Se[j])!=null?k:new Set,ae=md(j,sn,H,K);if(ps.current.has(ae))continue;const Ee=await xe("get_repo_layout_snapshot",{repoPath:j,layoutKey:ae}).catch(()=>null);if(w)return;if(Ee)try{const ct=JSON.parse(Ee),_t=wm(ct);ps.current.set(ae,_t),oo.current.add(ae);continue}catch{}const Ne=fp({branches:L.branches,mergeNodes:L.mergeNodes,directCommits:L.directCommits,unpushedDirectCommits:L.unpushedDirectCommits,defaultBranch:L.defaultBranch,branchCommitPreviews:L.branchCommitPreviews,branchParentByName:L.branchParentByName,branchUniqueAheadCounts:L.branchUniqueAheadCounts,checkedOutRef:L.checkedOutRef,stashes:L.stashes,manuallyOpenedClumps:H,manuallyClosedClumps:K,gridSearchQuery:"",gridFocusSha:null,orientation:sn}).sharedGridLayoutModel;ps.current.set(ae,Ne),oo.current.add(ae);const me=JSON.stringify(vm(Ne));if(xe("store_repo_layout_snapshot",{repoPath:j,layoutKey:ae,payloadJson:me}).catch(()=>{oo.current.delete(ae)}),await qn(),w)return}})(),()=>{w=!0}},[c,d,sn,Y,Se,ht]);function Lo(w){u(v=>{const k=vi(w.path);if(!k)return v;const B={...w,path:k},L=(v.some(H=>H.path===k)?v.map(H=>H.path===k?B:H):[...v,B]).slice(-hd);try{localStorage.setItem(Mc,JSON.stringify(L))}catch{}return L})}function Oi(w){u(v=>{const k=new Map(v.map(j=>[j.path,j])),B=[];for(const j of w){const L=k.get(j);L&&(B.push(L),k.delete(j))}for(const j of v)k.has(j.path)&&B.push(j);try{localStorage.setItem(Mc,JSON.stringify(B.slice(0,hd)))}catch{}return B.slice(0,hd)})}async function io(w){const v=vi(w);if(v){st(null);try{const[k,B]=await Promise.all([xe("get_repo_info",{repoPath:v}),xe("get_default_branch",{repoPath:v}).catch(()=>"main")]);Lo({path:v,name:k.name,lastOpenedAt:Date.now(),branchName:B}),await Zo(v,!1)}catch(k){st(k instanceof Error?k.message:String(k))}}}function Ao(w,v){u(k=>{const B=k.map(j=>j.path===w?{...j,branchName:v}:j);try{localStorage.setItem(Mc,JSON.stringify(B))}catch{}return B})}function Jo(w){var k,B;const v=vi(w);if(v){u(j=>{const L=j.filter(H=>H.path!==v);try{localStorage.setItem(Mc,JSON.stringify(L))}catch{}return L});try{e&&vi(e).toLowerCase()===v.toLowerCase()&&window.localStorage.removeItem(Sm)}catch{}if(h(j=>{if(!(v in j))return j;const L={...j};return delete L[v],L}),e===v){const j=(B=(k=c.find(L=>L.path!==v))==null?void 0:k.path)!=null?B:null;j?vo(j):(n(null),a(""),x([]),C([]),A([]),D([]),z({}),W(null),ce([]),et([]),nt({}),Le({}),Ze({}),Je({}))}}}async function Un(w){const v=vi(w);if(v)try{await xe("reveal_in_finder",{path:v})}catch(k){st(k instanceof Error?k.message:String(k))}}const Cs=()=>{(async()=>{var w,v;try{const k=await aw({directory:!0,multiple:!1,defaultPath:(v=(w=c[0])==null?void 0:w.path)!=null?v:void 0});typeof k=="string"&&k&&await io(k)}catch(k){st(k instanceof Error?k.message:String(k))}})()};async function No(w,v){const B=[];let j=0;for(;;){const L=await xe("get_merge_nodes",{repoPath:w,branch:v,page:j,perPage:100});if(B.push(...L.nodes),!L.hasMore||L.nodes.length===0)break;j+=1}return B}async function ao(w,v,k){const B=Array.from(new Set([k,...v.map(H=>H.name)].filter(H=>!!H)));if(B.length===0)return[];const j=await Promise.all(B.map(H=>No(w,H).catch(()=>[]))),L=new Map;for(const H of j)for(const K of H){const ae=`${K.targetCommitSha}:${K.targetBranch}`;L.has(ae)||L.set(ae,K)}return Array.from(L.values())}const ro=w=>w.map(v=>`${v.name}|${v.headSha}|${v.commitsAhead}|${v.commitsBehind}|${v.unpushedCommits}|${v.remoteSyncStatus}`).join("||"),jn=w=>w.map(v=>v.fullSha).join("|"),$s=w=>{var v,k;return w?`${(v=w.branchName)!=null?v:""}|${w.headSha}|${(k=w.parentSha)!=null?k:""}|${w.hasUncommittedChanges?1:0}`:"__none__"},Rn=w=>w.map(v=>v.fullSha).join("|"),Ps=w=>w.map(v=>{var k,B;return`${v.path}|${(k=v.branchName)!=null?k:""}|${(B=v.headSha)!=null?B:""}|${v.isCurrent?1:0}`}).join("||"),Vo=w=>w.map(v=>`${v.index}|${v.baseSha}|${v.message}`).join("||"),Yo=w=>Object.entries(w).sort(([v],[k])=>v.localeCompare(k)).map(([v,k])=>`${v}:${k.join(",")}`).join("||");async function zi(w,v,k){const B={graphChanged:!1,remoteTipChanged:!1,unpushedChanged:!1,stashChanged:!1,dirtyChanged:!1,worktreeChanged:!1},[j,L,H,K,ae]=await Promise.all([xe("get_branches",{repoPath:w}).catch(()=>Bs.current),xe("get_all_repo_commits",{repoPath:w}).catch(()=>Wn.current),xe("get_unpushed_direct_commits",{repoPath:w,branch:v}).catch(()=>Fs.current),xe("list_worktrees",{repoPath:w}).catch(()=>On.current),xe("list_stashes",{repoPath:w}).catch(()=>Ls.current)]),Ee=Bs.current,Ae=Wn.current,Ne=ms.current,me=ro(j)!==ro(Ee)||jn(L)!==jn(Ae);B.graphChanged=me;const ct=Rn(H)!==Rn(Fs.current);B.unpushedChanged=ct;const _t=Ps(K)!==Ps(On.current);B.worktreeChanged=_t;const zt=Vo(ae)!==Vo(Ls.current);B.stashChanged=zt;const Ct=!!(k!=null&&k.forceDirtyCheck)||!(Ne!=null&&Ne.hasUncommittedChanges)||!!(k!=null&&k.expectPossibleCleanTransition)||me||zt;let it=Ne;Ct&&(it=await xe("get_checked_out_ref",{repoPath:w}).catch(()=>Ne)),B.dirtyChanged=$s(it)!==$s(Ne);const lt=await xe("get_remote_branch_head_sha",{repoPath:w,branch:v}).catch(()=>Pt),[St,wn]=await Promise.all([lt?xe("get_commit_metadata",{repoPath:w,sha:lt}).catch(()=>null):Promise.resolve(null),lt&&(it!=null&&it.headSha)?xe("get_merge_base",{repoPath:w,leftSha:lt,rightSha:it.headSha}).catch(()=>null):Promise.resolve(null)]),fn=lt!==Pt;B.remoteTipChanged=fn;const bs=me||ct||B.dirtyChanged,Ks=bs?await Promise.all([v,...j.map(Qs=>Qs.name)].map(async Qs=>{const Nn=await xe("get_branch_unpushed_commit_shas",{repoPath:w,branch:Qs}).catch(()=>[]);return[Qs,Nn]})):Object.entries(Fn.current),Bn=Object.fromEntries(Ks),Go=me?await ao(w,j,v).catch(()=>Xn.current):Xn.current;return _.startTransition(()=>{if(me&&(x(j),A(L),C(Go)),ct&&D(H),bs){const Qs=Yo(Bn),Nn=Yo(Fn.current);Qs!==Nn&&z(Bn)}_t&&ce(K),zt&&et(ae),B.dirtyChanged&&(W(it),it!=null&&it.branchName&&Ao(w,it.branchName)),fn&&(tn(lt!=null?lt:null),bn(St&&St.subject.trim().length>0?St:null),ds(wn),Ro(!0))}),B}async function ei(w,v,k){var Ct,it,lt,St;const B=v!=null?v:N,j=(Ct=k==null?void 0:k.includeMergeNodes)!=null?Ct:!0,L=(it=k==null?void 0:k.includeUnpushedShaMap)!=null?it:!0,H=(lt=k==null?void 0:k.includeWorktrees)!=null?lt:!0,K=(St=k==null?void 0:k.includeStashes)!=null?St:!0,[ae,Ee,Ae,Ne,me,ct]=await Promise.all([xe("get_branches",{repoPath:w}),xe("get_all_repo_commits",{repoPath:w}),xe("get_unpushed_direct_commits",{repoPath:w,branch:B}).catch(()=>[]),xe("get_checked_out_ref",{repoPath:w}).catch(()=>null),H?xe("list_worktrees",{repoPath:w}).catch(()=>[]):Promise.resolve(Z),K?xe("list_stashes",{repoPath:w}).catch(()=>[]):Promise.resolve(Be)]),_t=j?await ao(w,ae,B):b,zt=L?await Promise.all([B,...ae.map(wn=>wn.name)].map(async wn=>{const fn=await xe("get_branch_unpushed_commit_shas",{repoPath:w,branch:wn}).catch(()=>[]);return[wn,fn]})):Object.entries(V);_.startTransition(()=>{x(ae),C(_t),A(Ee),D(Ae),z(Object.fromEntries(zt)),W(Ne),ce(me),et(ct)})}async function xs(w,v){await ei(w,v,{includeMergeNodes:!1,includeUnpushedShaMap:!0,includeWorktrees:!1,includeStashes:!1})}async function Gs(w,v){const k=N,[B,j]=await Promise.all([xe("get_branches",{repoPath:w}),xe("get_checked_out_ref",{repoPath:w}).catch(()=>null)]),L=await Promise.all([k,...B.map(H=>H.name)].map(async H=>{const K=await xe("get_branch_unpushed_commit_shas",{repoPath:w,branch:H}).catch(()=>[]);return[H,K]}));_.startTransition(()=>{x(B),z(Object.fromEntries(L)),W(j)})}async function qn(){await new Promise(w=>{window.requestAnimationFrame(()=>w())})}async function $i(w){Ce(null),jt(!0),Rs.current=!0;try{const[v,k]=await Promise.all([xe("get_repo_info",{repoPath:w}),xe("get_default_branch",{repoPath:w})]);a(v.name),q(k),n(w),await ei(w,k),qs(w),Ce({kind:"success",message:`Now targeting worktree at ${w}`})}catch(v){const k=v instanceof Error?v.message:String(v);Ce({kind:"error",message:k}),console.error("Failed to switch worktree:",k)}finally{jt(!1),Rs.current=!1}}async function ki(w,v){if(!(!e||de)){pe(!0),Ce(null);try{await xe("remove_worktree",{repoPath:e,worktreePath:w,force:v}),await xs(e),Ce({kind:"success",message:`Removed worktree at ${w}`})}catch(k){const B=k instanceof Error?k.message:String(k);Ce({kind:"error",message:B}),console.error("Failed to remove worktree:",B)}finally{pe(!1)}}}function ti(w,v){var B,j,L;const k=_x(v);return ys.current===k?!1:(Bs.current=v.branches,Wn.current=v.directCommits,ms.current=v.checkedOutRef,Fs.current=v.unpushedDirectCommits,On.current=v.worktrees,Ls.current=v.stashes,Fn.current=v.unpushedCommitShasByBranch,Xn.current=v.mergeNodes,ui.current=(B=v.branchParentByName)!=null?B:{},ys.current=k,a(v.name||$d(w)),q(v.defaultBranch||"main"),x(v.branches),C(v.mergeNodes),A(v.directCommits),D(v.unpushedDirectCommits),z(v.unpushedCommitShasByBranch),W(v.checkedOutRef),ce(v.worktrees),et(v.stashes),nt(v.branchCommitPreviews),Le((j=v.branchParentByName)!=null?j:{}),Ze((L=v.laneByBranch)!=null?L:{}),Je(v.branchUniqueAheadCounts),n(w),!0)}async function Lt(w,v,k,B){const j=md(w,sn,k,B),L=ps.current.get(j);if(L)return{layoutKey:j,model:L};const H=await xe("get_repo_layout_snapshot",{repoPath:w,layoutKey:j}).catch(()=>null);if(H)try{const Ee=JSON.parse(H),Ae=wm(Ee);return ps.current.set(j,Ae),oo.current.add(j),{layoutKey:j,model:Ae}}catch{}const K=fp({branches:v.branches,mergeNodes:v.mergeNodes,directCommits:v.directCommits,unpushedDirectCommits:v.unpushedDirectCommits,defaultBranch:v.defaultBranch,branchCommitPreviews:v.branchCommitPreviews,branchParentByName:v.branchParentByName,branchUniqueAheadCounts:v.branchUniqueAheadCounts,checkedOutRef:v.checkedOutRef,stashes:v.stashes,manuallyOpenedClumps:k,manuallyClosedClumps:B,gridSearchQuery:"",gridFocusSha:null,orientation:sn}).sharedGridLayoutModel;ps.current.set(j,K),oo.current.add(j);const ae=JSON.stringify(vm(K));return xe("store_repo_layout_snapshot",{repoPath:w,layoutKey:j,payloadJson:ae}).catch(()=>{oo.current.delete(j)}),{layoutKey:j,model:K}}async function vo(w){var ae,Ee;const v=++nn.current,k=vi(w);if(!k)return;e&&en&&ps.current.set(en,Ds);const B=(ae=Y[k])!=null?ae:new Set,j=(Ee=Se[k])!=null?Ee:new Set,L=md(k,sn,B,j),H=ps.current.get(L);if(H?(Gn(H),xo(L)):(Gn(null),xo(null)),Rs.current=!0,jt(!0),We(!0),st(null),await qn(),v!==nn.current)return;const K=d[k];if(K!=null&&K.loaded){Ts.current={...Ts.current,[k]:Xs(zs(k,K))};const Ae=await Lt(k,K,B,j);if(v!==nn.current||(Gn(Ae.model),xo(Ae.layoutKey),ti(k,K),Lo({path:k,name:K.name||$d(k),lastOpenedAt:Date.now(),branchName:K.defaultBranch}),await qn(),await qn(),v!==nn.current))return;jt(!1),We(!1),qs(k),Rs.current=!1;return}if(await new Promise(Ae=>setTimeout(Ae,15)),v===nn.current)try{const[Ae,Ne]=await Promise.all([xe("get_repo_info",{repoPath:k}),xe("get_default_branch",{repoPath:k})]);if(v!==nn.current)return;a(Ae.name),q(Ne);const me=await xe("get_repo_visual_snapshot",{repoPath:k,forceRefresh:!1});if(v!==nn.current)return;const ct=await Lt(k,me,B,j);if(v!==nn.current||(Gn(ct.model),xo(ct.layoutKey),To(k,me),on.current={...on.current,[k]:xn(Qo(k,Ne,me))},Ts.current={...Ts.current,[k]:Xs(zs(k,me))},ti(k,me),Lo({path:k,name:Ae.name,lastOpenedAt:Date.now(),branchName:Ne}),await qn(),await qn(),v!==nn.current))return;jt(!1),We(!1),qs(k)}catch(Ae){if(v!==nn.current)return;console.error("Failed to load repo:",Ae),st(Ae instanceof Error?Ae.message:String(Ae)),n(null),We(!1),jt(!1)}finally{Rs.current=!1}}async function qs(w){const v=++rs.current;try{if(v!==rs.current)return;Re(null);const k=await xe("get_github_info",{repoPath:w}),B=await xe("get_github_auth_status");if(v!==rs.current||(dt(B),!B.ghAvailable||!B.authenticated))return;const j=await xe("get_open_prs",{owner:k.owner,repo:k.repo});if(v!==rs.current)return;xt(j)}catch(k){if(v!==rs.current)return;console.log("GitHub data not available:",k),Re(k instanceof Error?k.message:String(k))}}_.useEffect(()=>{let w=null,v=!1;const k=(()=>{try{return wp().label}catch{return null}})(),B=async L=>{var K;const H=(K=L==null?void 0:L.path)==null?void 0:K.trim();!H||v||e!==H&&await vo(H)};return(async()=>{k==="main"&&(w=await $c("gitviz://open-repo",async H=>{await B(H.payload)}));const L=await xe("take_pending_open_repo");await B(L)})(),()=>{v=!0,w&&w()}},[e]),_.useEffect(()=>{Bs.current=g},[g]),_.useEffect(()=>{Wn.current=M},[M]),_.useEffect(()=>{ms.current=G},[G]),_.useEffect(()=>{Fs.current=T},[T]),_.useEffect(()=>{On.current=Z},[Z]),_.useEffect(()=>{Ls.current=Be},[Be]),_.useEffect(()=>{Fn.current=V},[V]),_.useEffect(()=>{Xn.current=b},[b]),_.useEffect(()=>{ui.current=Ge},[Ge]),_.useEffect(()=>{an.current=bt},[bt]),_.useEffect(()=>{if(!e||!N)return;xe("watch_repo",{repoPath:e}).catch(console.error);let w=!1,v=!1,k=!1,B=!1,j=null,L=null,H=!1,K=Pt;const ae=async(me=!1)=>{if(!w){if(v){k=!0;return}if(an.current){k=!0;return}v=!0;try{await zi(e,N,{forceDirtyCheck:me,expectPossibleCleanTransition:H}),H=!1}catch(ct){console.warn("Project status tick failed:",ct)}finally{v=!1,k&&!w&&(k=!1,window.setTimeout(()=>{ae(!1)},0))}}},Ee=async()=>{var me;if(!(w||B||v||an.current)){B=!0;try{const ct=!((me=ms.current)!=null&&me.hasUncommittedChanges)||H,[_t,zt]=await Promise.all([ct?xe("get_checked_out_ref",{repoPath:e}).catch(()=>ms.current):Promise.resolve(ms.current),xe("get_remote_branch_head_sha",{repoPath:e,branch:N}).catch(()=>K)]),Ct=$s(_t)!==$s(ms.current),it=zt!==K;it&&(K=zt),(Ct||it||H)&&ae(Ct||H)}finally{B=!1}}},Ae=()=>{if(w)return;j!=null&&window.clearTimeout(j);const ct=document.visibilityState!=="visible"?6e4:15e3;j=window.setTimeout(()=>{if(an.current){Ae();return}typeof window.requestIdleCallback=="function"?window.requestIdleCallback(()=>{if(an.current){Ae();return}Ee(),Ae()},{timeout:2e3}):(Ee(),Ae())},ct)};$c("git-activity",me=>{vi(me.payload.repoPath)===e&&(me.payload.kind!=="local"&&(H=!0),ae(me.payload.kind!=="local"))}).then(me=>{w?me():L=me}).catch(console.error);const Ne=window.setTimeout(()=>{an.current||Ee()},250);return Ae(),()=>{w=!0,window.clearTimeout(Ne),j!=null&&window.clearTimeout(j),L&&L()}},[e,N,Ys]);async function fi(){if(e){Kt(!0),Re(null);try{await xe("authenticate_github");const w=await xe("get_github_auth_status");dt(w),w.authenticated?await qs(e):w.message&&Re(w.message)}catch(w){Re(w instanceof Error?w.message:String(w))}finally{Kt(!1)}}}_.useEffect(()=>{ve({}),Yn.current=null,Kt(!1),dt(null),Re(null),xt([]),Ce(null)},[e]),_.useEffect(()=>{var ae,Ee,Ae,Ne;if(!e||!N){ve({}),nt({}),Le({}),Ze({}),Je({}),Yn.current=null;return}const w=g.map(me=>{var ct;return`${me.name}:${me.headSha}:${(ct=me.parentBranch)!=null?ct:""}:${me.commitsAhead}`}).join("|"),v=b.map(me=>{var ct,_t;return`${me.fullSha}:${(_t=(ct=me.parentShas)==null?void 0:ct[1])!=null?_t:""}`}).join("|"),k=`${e}|${N}|${w}|${v}`;if(Yn.current===k)return;Yn.current=k;const B={},j={};for(const me of g){if(me.name===N)continue;const ct=M.filter(_t=>_t.branch===me.name).map(_t=>{var zt;return{fullSha:_t.fullSha,sha:_t.sha,parentSha:(zt=_t.parentSha)!=null?zt:null,message:_t.message,author:_t.author,date:_t.date,kind:"commit"}});B[me.name]=ct,j[me.name]=ct.length}const L=new Map;for(const me of M)L.set(me.fullSha,me.branch);const H=me=>{if(!me)return null;const ct=L.get(me);if(ct)return ct;for(const[_t,zt]of L.entries())if(_t.startsWith(me)||me.startsWith(_t))return zt;return null},K={[N]:null};for(const me of g){if(me.name===N){K[me.name]=null;continue}const ct=M.filter(it=>it.branch===me.name),_t=new Set(ct.map(it=>it.fullSha)),zt=(Ee=(ae=ct.filter(it=>{var St;const lt=(St=it.parentSha)!=null?St:null;return!lt||!_t.has(lt)}).sort((it,lt)=>{const St=new Date(it.date).getTime()-new Date(lt.date).getTime();return St!==0?St:it.fullSha.localeCompare(lt.fullSha)})[0])==null?void 0:ae.parentSha)!=null?Ee:null,Ct=H(zt);K[me.name]=(Ne=(Ae=Ct!=null?Ct:ui.current[me.name])!=null?Ae:me.parentBranch)!=null?Ne:null}ve({}),nt(B),Le(K),Ze(me=>{const ct={};for(const _t of g){const zt=me[_t.name];zt!=null&&Number.isFinite(zt)&&(ct[_t.name]=zt)}return ct}),Je(j)},[e,N,g,b,M]),_.useEffect(()=>{if(!rt){He(!1);return}He(!0);const w=window.setTimeout(()=>{He(!1)},cx),v=window.setTimeout(()=>{Ce(null)},cx+L3);return()=>{window.clearTimeout(w),window.clearTimeout(v)}},[rt]),_.useEffect(()=>{if(!e||g.length===0)return;const w=B=>new Promise(j=>setTimeout(j,B));async function v(){const j=`${await xe("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${j}`),await w(800),await xe("screenshot",{path:`${j}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${j}`)}const k=B=>{if((B.metaKey||B.ctrlKey)&&!B.shiftKey&&!B.altKey&&B.key.toLowerCase()==="b"){B.preventDefault(),Qt(j=>!j);return}(B.metaKey||B.ctrlKey)&&B.shiftKey&&B.key==="S"&&(B.preventDefault(),v())};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[e,i,g]);async function ni(w){if(!e)return;Ce(null);const v=/^STASH:(\d+)$/.exec(w.commitSha);if(v){try{const k=parseInt(v[1],10),B=await xe("apply_stash_restore",{repoPath:e,stashIndex:k});W(B),await xs(e);const j=`Stash ${k+1}`,L=B.branchName?` on branch ${B.branchName}`:" at the stash base (detached HEAD)";Ce({kind:"success",message:`Restored ${j}${L}; stash applied and dropped (uncommitted changes).`})}catch(k){const B=k instanceof Error?k.message:String(k);Ce({kind:"error",message:B}),console.error("Failed to apply stash:",B)}return}if(w.branchName){const k=(j,L)=>{const H=j.replace(/\\/g,"/").replace(/\/+$/,""),K=L.replace(/\\/g,"/").replace(/\/+$/,"");return H===K||H.toLowerCase()===K.toLowerCase()},B=Z.find(j=>j.pathExists===!1||j.isCurrent||e&&k(j.path,e)?!1:j.branchName===w.branchName);if(B){await $i(B.path);return}}try{let k="";(await xe("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges&&(await xe("stash_push",{repoPath:e,includeUntracked:!0}),k="Stashed local changes (including untracked), then ",await xs(e));const j=w.branchName?await xe("checkout_branch",{repoPath:e,branchName:w.branchName}):await xe("checkout_ref",{repoPath:e,refName:w.commitSha}),L=await xe("get_checked_out_ref",{repoPath:e}).catch(()=>j);W(L),await xs(e);const H=L.branchName?L.branchName:`${L.headSha.slice(0,7)} (detached)`;Ce({kind:"success",message:`${k}Checked out ${H}`})}catch(k){const B=k instanceof Error?k.message:String(k);Ce({kind:"error",message:B}),console.error("Failed to checkout commit:",B)}}async function Oo(){if(!(!e||Ke)){Ce(null),Ot(!0);try{if(!(await xe("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges){Ce({kind:"error",message:"No local changes to stash."});return}await xe("stash_push",{repoPath:e,includeUntracked:!0}),await qn(),await xs(e),Ce({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(w){const v=w instanceof Error?w.message:String(w);Ce({kind:"error",message:v}),console.error("Failed to stash:",v)}finally{Ot(!1)}}}async function ji(w){if(!e||wt)return!1;const v=w.trim();if(!v)return Ce({kind:"error",message:"Enter a commit message."}),!1;Ce(null),ft(!0);try{if(!(await xe("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges)return Ce({kind:"error",message:"No local changes to commit."}),!1;const B=await xe("commit_working_tree",{repoPath:e,message:v});return W(B),await qn(),await xs(e),Ce({kind:"success",message:"Committed local changes."}),!0}catch(k){const B=k instanceof Error?k.message:String(k);return Ce({kind:"error",message:B}),console.error("Failed to commit:",B),!1}finally{ft(!1)}}async function Qi(){if(!e||un)return!1;Ce(null),ut(!0);try{if(!(await xe("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges)return Ce({kind:"error",message:"No local changes to stage."}),!1;const v=await xe("stage_working_tree",{repoPath:e});return W(v),await qn(),await xs(e),Ce({kind:"success",message:"Staged all changes."}),!0}catch(w){const v=w instanceof Error?w.message:String(w);return Ce({kind:"error",message:v}),console.error("Failed to stage:",v),!1}finally{ut(!1)}}async function Zi(w,v){if(!(!e||It)){_n(!0),Ce(null);try{const k=/^STASH:(\d+)$/.exec(w);let B;if(k){const j=parseInt(k[1],10);B=await xe("move_stash_to_new_branch",{repoPath:e,stashIndex:j,branchName:v})}else B=await xe("create_branch_from_uncommitted",{repoPath:e,branchName:v});W(B),await xs(e),Ce({kind:"success",message:`Moved to new branch "${v}"`})}catch(k){const B=k instanceof Error?k.message:String(k);Ce({kind:"error",message:B}),console.error("Failed to create branch from node:",B)}finally{_n(!1)}}}async function E(w){if(!(!e||It)){_n(!0),Ce(null);try{const v=await xe("create_root_branch",{repoPath:e,branchName:w});W(v),await xs(e),Ce({kind:"success",message:`Created new root branch "${w}"`})}catch(v){const k=v instanceof Error?v.message:String(v);Ce({kind:"error",message:k}),console.error("Failed to create root branch:",k)}finally{_n(!1)}}}async function X(w,v){if(!e)return;const k=Array.from(new Set(w.filter(B=>!!B&&B!==v)));if(k.length!==0){Ce(null),gt(!0);try{let B=null;for(const j of k)B=await xe("merge_ref_into_branch",{repoPath:e,sourceRef:j,targetBranch:v});await xs(e),B&&W(B),Ce({kind:"success",message:k.length===1?`Merged ${k[0].slice(0,7)} into ${v}`:`Merged ${k.length} commits into ${v}`})}catch(B){const j=B instanceof Error?B.message:String(B);Ce({kind:"error",message:j}),console.error("Failed to merge refs into branch:",j)}finally{gt(!1)}}}async function ue(){if(!(!e||Mt)){Ce(null),Bt(!0);try{let w=[];try{w=await xe("push_all_unpushed_branches",{repoPath:e})}catch(v){const k=v instanceof Error?v.message:String(v);if(!/non-fast-forward|fetch first|rejected/i.test(k))throw v;const j=G==null?void 0:G.branchName;if(!j)throw v;const L=window.confirm(`Push all hit non-fast-forward.

OK: pull --rebase then retry
Cancel: pull --no-rebase then retry`);await xe("pull_branch_with_strategy",{repoPath:e,branchName:j,rebase:L}),w=await xe("push_all_unpushed_branches",{repoPath:e})}await qn(),await Gs(e),Ce({kind:"success",message:w.length>0?w.length===1?`Pushed ${w[0].branchName}`:`Pushed ${w.length} branches`:"Everything local is already pushed."})}catch(w){const v=w instanceof Error?w.message:String(w);Ce({kind:"error",message:v}),console.error("Failed to push all branches:",v)}finally{Bt(!1)}}}async function je(){if(!(!e||Mt)){Ce(null),Bt(!0);try{const w=await xe("push_current_branch",{repoPath:e});await qn(),await Gs(e),Ce({kind:"success",message:`Pushed ${w.branchName}`})}catch(w){const v=w instanceof Error?w.message:String(w);if(/non-fast-forward|fetch first|rejected/i.test(v)){const B=window.confirm(`Push was rejected (non-fast-forward).

OK: pull --rebase then retry push
Cancel: pull --no-rebase then retry push`);try{const j=G==null?void 0:G.branchName;if(!j)throw new Error("Cannot resolve current branch for pull.");await xe("pull_branch_with_strategy",{repoPath:e,branchName:j,rebase:B});const L=await xe("push_current_branch",{repoPath:e});await qn(),await Gs(e),Ce({kind:"success",message:`Pulled (${B?"rebase":"merge"}) and pushed ${L.branchName}`});return}catch(j){const L=j instanceof Error?j.message:String(j);Ce({kind:"error",message:L}),console.error("Failed to resolve non-fast-forward:",L);return}}Ce({kind:"error",message:v}),console.error("Failed to push current branch:",v)}finally{Bt(!1)}}}async function Ve(w){var k;if(!e||Mt)return;const v=Array.from(new Map(w.filter(B=>B.branchName&&B.targetSha).map(B=>[B.branchName,B])).values());if(v.length!==0){Ce(null),Bt(!0);try{for(const B of v)try{await xe("push_branch",{repoPath:e,branchName:B.branchName,targetSha:B.targetSha})}catch(j){const L=j instanceof Error?j.message:String(j);if(!/non-fast-forward|fetch first|rejected/i.test(L))throw j;const K=window.confirm(`Push rejected for ${B.branchName} (non-fast-forward).

OK: pull --rebase then retry
Cancel: pull --no-rebase then retry`);await xe("pull_branch_with_strategy",{repoPath:e,branchName:B.branchName,rebase:K}),await xe("push_branch",{repoPath:e,branchName:B.branchName,targetSha:B.targetSha})}await xs(e),Ce({kind:"success",message:v.length===1?`Pushed ${v[0].branchName} through ${(k=v[0].targetSha)==null?void 0:k.slice(0,7)}`:`Pushed ${v.length} selected commit ranges`})}catch(B){const j=B instanceof Error?B.message:String(B);Ce({kind:"error",message:j}),console.error("Failed to push selected commits:",j)}finally{Bt(!1)}}}async function at(w){var L;if(!e||ot)return;const v=Array.from(new Set(w.branchNames.filter(H=>H&&H!==N))),k=!!w.discardUncommittedChanges,B=(L=w.stashIndices)!=null?L:[],j=Array.from(new Set(B)).sort((H,K)=>K-H);if(!(v.length===0&&!k&&j.length===0)){Ce(null),F(!0);try{for(const ae of j)await xe("stash_drop",{repoPath:e,stashIndex:ae});const H=v.length>0||k?await xe("delete_selected_elements",{repoPath:e,branchNames:v,discardUncommittedChanges:k}):{deletedBranches:[],discardedUncommittedChanges:!1};await xs(e);const K=[];j.length>0&&K.push(j.length===1?`removed stash ${j[0]+1}`:`removed ${j.length} stashes`),H.discardedUncommittedChanges&&K.push("discarded local uncommitted changes"),H.deletedBranches.length>0&&K.push(H.deletedBranches.length===1?`deleted ${H.deletedBranches[0]}`:`deleted ${H.deletedBranches.length} branches`),Ce({kind:"success",message:K.length>0?K.join(" and "):"Nothing to delete."})}catch(H){const K=H instanceof Error?H.message:String(H);Ce({kind:"error",message:K}),console.error("Failed to delete selected elements:",K)}finally{F(!1)}}}function Yt(w){w&&(ze(w),oe(v=>v+1))}function Ht(w){w&&(Xe(w),oe(v=>v+1))}const{enrichedBranches:Ft,enrichedBranchCommitPreviews:hn,enrichedBranchUniqueAheadCounts:vn,enrichedDirectCommits:rn,enrichedUnpushedDirectCommits:Vn,visualCheckedOutRef:gn}=_.useMemo(()=>{var Bn,Xo,Go,Qs,Nn,mi,Mi,gr,Wr,Fr,Xr,Ul,Vl,Gr,pi,yr,si,xa,qr,xr,br,Kr,ca,Yl,vr,ba,ou;const w=s2(Be,g,M,Me,Ye,N,(Bn=G==null?void 0:G.hasUncommittedChanges)!=null?Bn:!1);let v=w.branches,k=w.directCommits,B=T,j=w.branchCommitPreviews,L=w.branchUniqueAheadCounts,H=G;const K=Pt?k.some(Gt=>Gt.fullSha===Pt||Gt.sha===Pt.slice(0,7)):!0;if(Pt&&tt&&!K){const Gt=(mi=(Nn=(Xo=k.find(Zs=>Zs.fullSha===tt||Zs.sha===tt.slice(0,7)))==null?void 0:Xo.date)!=null?Nn:(Qs=(Go=j[N])==null?void 0:Go.find(Zs=>Zs.fullSha===tt||Zs.sha===tt.slice(0,7)))==null?void 0:Qs.date)!=null?mi:null,Kn=Gt?new Date(new Date(Gt).getTime()+1e3).toISOString():new Date().toISOString(),js=(Fr=tt!=null?tt:(Mi=v.find(Zs=>Zs.name===N))==null?void 0:Mi.headSha)!=null?Fr:(Wr=(gr=k[0])==null?void 0:gr.fullSha)!=null?Wr:null,Pi={fullSha:Pt,sha:Pt.slice(0,7),parentSha:js,message:((Xr=Nt==null?void 0:Nt.subject)==null?void 0:Xr.trim())||`Remote commit on origin/${N}`,author:((Ul=Nt==null?void 0:Nt.author)==null?void 0:Ul.trim())||"Unknown",date:Kn,kind:"commit",isRemote:!0};k=[{fullSha:Pt,sha:Pt.slice(0,7),parentSha:js,parentShas:js?[js]:[],childShas:[],branch:N,message:Pi.message,author:Pi.author,date:Kn,kind:"commit",isRemote:!0},...k],j={...j,[N]:[Pi,...(Vl=j[N])!=null?Vl:[]]},v=v.map(Zs=>Zs.name===N?{...Zs,headSha:Pt,lastCommitDate:Kn}:Zs)}if(!!Pt&&!!tt&&!K&&(G==null?void 0:G.branchName)===N&&G.headSha!==Pt&&(G.hasUncommittedChanges||T.length>0)){const Gt=`${N} (local)`,Kn=new Set(T.map(Ms=>Ms.fullSha));G!=null&&G.headSha&&Kn.add(G.headSha);const js=(si=(yr=(Gr=T[0])==null?void 0:Gr.date)!=null?yr:G!=null&&G.headSha?(pi=k.find(Ms=>Ms.fullSha===G.headSha))==null?void 0:pi.date:void 0)!=null?si:new Date().toISOString();v.some(Ms=>Ms.name===Gt)||(v=[...v,{name:Gt,commitsAhead:Math.max(1,Kn.size),commitsBehind:0,lastCommitDate:js,lastCommitAuthor:(xa=G==null?void 0:G.branchName)!=null?xa:"You",status:"fresh",remoteSyncStatus:"unpushed",unpushedCommits:Math.max(1,Kn.size),headSha:(br=G==null?void 0:G.headSha)!=null?br:(xr=(qr=T[0])==null?void 0:qr.fullSha)!=null?xr:"WORKING_TREE",parentBranch:N}]),k=k.map(Ms=>Ms.branch===N&&Kn.has(Ms.fullSha)?{...Ms,branch:Gt}:Ms),B=B.map(Ms=>Ms.branch===N&&Kn.has(Ms.fullSha)?{...Ms,branch:Gt}:Ms);const Pi=(Kr=j[N])!=null?Kr:[],va=Pi.filter(Ms=>Ms.fullSha==="WORKING_TREE"||Kn.has(Ms.fullSha)),Zs=Pi.filter(Ms=>!va.includes(Ms));va.length>0&&(j={...j,[N]:Zs,[Gt]:[...va,...(ca=j[Gt])!=null?ca:[]]}),L={...L,[Gt]:Math.max(1,Kn.size)},(H==null?void 0:H.branchName)===N&&(H={...H,branchName:Gt})}if(!(H!=null&&H.hasUncommittedChanges))return{enrichedBranches:v,enrichedDirectCommits:k,enrichedUnpushedDirectCommits:B,enrichedBranchCommitPreviews:j,enrichedBranchUniqueAheadCounts:L,visualCheckedOutRef:H};const Ae=H.headSha||H.parentSha||null,Ne=(vr=(Yl=k[0])==null?void 0:Yl.fullSha)!=null?vr:null,me=(Gt,Kn)=>!Gt||!Kn?!1:Gt===Kn||Gt.startsWith(Kn)||Kn.startsWith(Gt),ct=[{name:N,headSha:Ne!=null?Ne:"",isDefault:!0},...v.map(Gt=>({name:Gt.name,headSha:Gt.headSha,isDefault:!1}))],_t=H.branchName?ct.find(Gt=>Gt.name===H.branchName):void 0,zt=Ae?ct.filter(Gt=>me(Gt.headSha,Ae)):[],Ct=(ba=_t!=null?_t:zt.find(Gt=>Gt.isDefault))!=null?ba:zt[0],it=Ct&&!Ct.isDefault?v.find(Gt=>Gt.name===Ct.name):void 0,lt=(()=>{var Kn;if(!Ae)return null;const Gt=k.find(js=>me(js.fullSha,Ae)||me(js.sha,Ae));if(Gt!=null&&Gt.date)return Gt.date;if(it){const js=((Kn=j[it.name])!=null?Kn:[]).find(Pi=>me(Pi.fullSha,Ae)||me(Pi.sha,Ae));if(js!=null&&js.date)return js.date}return null})(),St=lt?new Date(lt).getTime():Number.NaN,wn=Date.now(),fn=Number.isFinite(St)?Math.max(wn,St+1):wn,bs=new Date(fn).toISOString(),Ks={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:Ae,message:"Local uncommitted changes",author:"You",date:bs,kind:"uncommitted"};return it?{enrichedBranches:v.map(Kn=>Kn.name===it.name?{...Kn,commitsAhead:Kn.commitsAhead+1,unpushedCommits:Kn.unpushedCommits+1,lastCommitDate:bs,headSha:"WORKING_TREE"}:Kn),enrichedDirectCommits:k,enrichedUnpushedDirectCommits:B,enrichedBranchCommitPreviews:{...j,[it.name]:[Ks,...j[it.name]||[]]},enrichedBranchUniqueAheadCounts:{...L,[it.name]:Math.max(0,(ou=Object.prototype.hasOwnProperty.call(L,it.name)?L[it.name]:it.commitsAhead)!=null?ou:0)+1},visualCheckedOutRef:H}:{enrichedBranches:v,enrichedBranchCommitPreviews:{...j,[N]:[Ks,...j[N]||[]]},enrichedBranchUniqueAheadCounts:{...L},enrichedDirectCommits:k,enrichedUnpushedDirectCommits:B,visualCheckedOutRef:H}},[g,Me,Ye,G,N,M,Nt,tt,Pt,Be,T]);_.useEffect(()=>{var B;if(!(!ht&&!Qe&&(Pt==null||fs&&tt!=null)))return;const v=gn!=null&&gn.hasUncommittedChanges?"WORKING_TREE":(B=gn==null?void 0:gn.headSha)!=null?B:null;if(!v)return;const k=`${e!=null?e:"__no-repo__"}|${sn}|${v}`;Ln.current!==k&&(Ln.current=k,ze(v),oe(j=>j+1))},[fs,Qe,sn,ht,tt,Pt,e,gn==null?void 0:gn.hasUncommittedChanges,gn==null?void 0:gn.headSha]),_.useEffect(()=>{Ln.current=null},[e]);const Vt=_.useMemo(()=>{const w={...Ge};return w[N]=null,w},[Ge,N,Ft]),An=_.useMemo(()=>{var w;return(w=zw(Ft,N,Vt,_e))!=null?w:Sp(Ft,N,hn,Vt)},[Ft,N,hn,Vt,_e]),ks=_.useMemo(()=>qd(Eo),[Eo]),wo=_.useMemo(()=>qd(es),[es]),en=_.useMemo(()=>e?md(e,sn,Eo,es):null,[e,sn,ks,wo]);_.useEffect(()=>{if(!e||!en){Gn(null),xo(null);return}const w=ps.current.get(en);if(w){Gn(w),xo(en),oo.current.add(en);return}let v=!1;return Gn(null),xo(null),xe("get_repo_layout_snapshot",{repoPath:e,layoutKey:en}).then(k=>{if(v||!k)return;const B=JSON.parse(k),j=wm(B);ps.current.set(en,j),oo.current.add(en),Gn(j),xo(en)}).catch(()=>{v||(Gn(null),xo(null))}),()=>{v=!0}},[e,en]);const Ds=_.useMemo(()=>{var w;if(De.trim().length===0&&en&&Li===en&&Ci)return Ci;if(ht){const v=en&&(w=ps.current.get(en))!=null?w:null;if(v)return v;if(Jt.current)return Jt.current}return Cp({lanes:An,branches:Ft,mergeNodes:b,directCommits:rn,unpushedDirectCommits:Vn,defaultBranch:N,branchCommitPreviews:hn,branchParentByName:Vt,branchUniqueAheadCounts:vn,manuallyOpenedClumps:Eo,manuallyClosedClumps:es,isDebugOpen:!1,gridSearchQuery:De,gridFocusSha:he,checkedOutRef:gn!=null?gn:null,orientation:sn})},[An,Ft,b,rn,Vn,N,hn,Vt,vn,Eo,es,De,he,(la=gn==null?void 0:gn.headSha)!=null?la:null,(O=gn==null?void 0:gn.branchName)!=null?O:null,sn,De,en,Li,Ci,ht]);_.useEffect(()=>{Jt.current=Ds},[Ds]),_.useEffect(()=>{if(!e||!en||(ps.current.set(en,Ds),oo.current.has(en)))return;oo.current.add(en);const w=JSON.stringify(vm(Ds));xe("store_repo_layout_snapshot",{repoPath:e,layoutKey:en,payloadJson:w}).catch(()=>{oo.current.delete(en)})},[e,en,Ds]),_.useEffect(()=>{try{const w=window.localStorage.getItem(ux);if(w){const k=Number(w);Number.isFinite(k)&&Bo(Math.min(px,Math.max(mx,k)))}const v=window.localStorage.getItem(dx);v!=null&&Qt(v==="true")}catch{}},[]),_.useEffect(()=>{yo.current=go},[go]),_.useEffect(()=>{const w=so.current;w&&(w.style.width=as?"0px":`${go}px`)},[go,as]),_.useEffect(()=>{try{window.localStorage.setItem(dx,String(as))}catch{}},[as]);const lo=w=>{const v=hs.current;if(!v)return;const k=v.startWidth+(w-v.startX);v.pendingWidth=Math.min(px,Math.max(mx,k));const B=so.current;B&&(B.style.width=`${v.pendingWidth}px`)},co=(w,v)=>{const k=hs.current;if(k&&!(v!=null&&k.pointerId!==v)){hs.current=null,document.body.style.cursor="",document.body.style.userSelect="",Bo(k.pendingWidth);try{window.localStorage.setItem(ux,String(k.pendingWidth))}catch{}}},So=w=>{w.button===0&&(w.preventDefault(),hs.current={startX:w.clientX,startWidth:yo.current,pendingWidth:yo.current,pointerId:w.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",w.currentTarget.setPointerCapture(w.pointerId))},hi=w=>{const v=hs.current;!v||v.pointerId!==w.pointerId||lo(w.clientX)},Wo=w=>{if(hs.current){try{w.currentTarget.releasePointerCapture(w.pointerId)}catch{}co("pointerup",w.pointerId)}},Fo=w=>{if(hs.current){try{w.currentTarget.releasePointerCapture(w.pointerId)}catch{}co("pointercancel",w.pointerId)}};return l.jsx("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:l.jsx("div",{className:"relative z-30 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:so,className:"relative z-[60] flex h-full min-h-0 flex-none overflow-visible",style:{width:as?64:go},children:[l.jsx("button",{type:"button",className:"window-no-drag absolute right-2.5 left-22 top-2.25 z-[9999] inline-flex h-7 w-7 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted","aria-label":as?"Open sidebar":"Collapse sidebar",onClick:()=>Qt(w=>!w),children:as?l.jsx(Ew,{className:"h-4 w-4 shrink-0"}):l.jsx(jw,{className:"h-4 w-4 shrink-0"})}),l.jsx(R3,{className:O3("min-h-0 shrink-0 overflow-hidden pt-14 transition-[width,opacity] duration-300 ease-in-out","opacity-100"),style:{width:"100%"},collapsed:as,projects:di,activeProjectPath:e,onSelectProject:vo,onAddProject:Cs,onRemoveProject:Jo,onReorderProjects:Oi,onRevealProjectInFinder:Un,projectLoading:Qe||(p&&e?!((U=d[e])!=null&&U.loaded):!1),projectError:vt,checkedOutRef:G,showCommits:!1,manuallyOpenedClumpsByProject:Y,manuallyClosedClumpsByProject:Se,manuallyOpenedClumps:Eo,manuallyClosedClumps:es,setManuallyOpenedClumps:Tn,setManuallyClosedClumps:bo,gridLayoutModel:Ds,onSelectCommit:Yt,onSelectBranch:Ht}),as?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:So,onPointerMove:hi,onPointerUp:Wo,onPointerCancel:Fo,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"})]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-40 h-12"}),l.jsx(mS,{branches:Ft,mergeNodes:b,directCommits:rn,unpushedDirectCommits:Vn,unpushedCommitShasByBranch:V,openPRs:yt,defaultBranch:N,branchCommitPreviews:hn,branchParentByName:Vt,branchUniqueAheadCounts:vn,gridSearchQuery:De,gridSearchJumpToken:ie,gridSearchJumpDirection:$,gridFocusSha:he,isLoading:ht||Qe,onGridSearchResultCountChange:te,onGridSearchResultIndexChange:Te,onGridSearchFocusChange:ze,checkedOutRef:gn,onCommitClick:ni,onMergeRefsIntoBranch:X,mergeInProgress:pt,onPushAllBranches:ue,onPushCurrentBranch:je,onPushCommitTargets:Ve,pushInProgress:Mt,onDeleteSelection:at,deleteInProgress:ot,worktrees:Z,currentRepoPath:e!=null?e:void 0,onRemoveWorktree:ki,removeWorktreeInProgress:de,onSwitchToWorktree:$i,onStashLocalChanges:Oo,stashInProgress:Ke,stashDisabled:!1,onCommitLocalChanges:ji,commitInProgress:wt,commitDisabled:!1,onStageAllChanges:Qi,stageInProgress:un,onCreateBranchFromNode:Zi,onCreateRootBranch:E,createBranchFromNodeInProgress:It,isMutationBusy:Tt,isDebugOpen:no,onDebugClose:()=>jo(!1),onInteractionChange:dn,manuallyOpenedClumps:Eo,manuallyClosedClumps:es,setManuallyOpenedClumps:Tn,setManuallyClosedClumps:bo,layoutModel:Ds,orientation:sn,gridHudProps:Os})]})]})})})}var P3=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,I3={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(e)),e.textContent=P3}var us=I3,H3=`.icon-transitions-module__iconState___uqK9J {
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
}`,U3={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-components-icon-transitions");e||(e=document.createElement("style"),e.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(e)),e.textContent=H3}var os=U3,V3=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Y3=({size:e=24,style:n={}})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),W3=({size:e=20,...n})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),F3=({size:e=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${os.iconState} ${n?os.hiddenScaled:os.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${os.iconState} ${n?os.visibleScaled:os.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),X3=({size:e=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${os.iconStateFast} ${i?os.visibleScaled:u?os.sending:os.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${os.iconStateFast} ${a?os.visibleScaled:os.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${os.iconStateFast} ${c?os.visibleScaled:os.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},G3=({size:e=24,isOpen:n=!0})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${os.iconFade} ${n?os.visible:os.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${os.iconFade} ${n?os.hidden:os.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),q3=({size:e=24,isPaused:n=!1})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${os.iconFadeFast} ${n?os.hidden:os.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${os.iconFadeFast} ${n?os.visible:os.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),K3=({size:e=16})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),Q3=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),o2=({size:e=16})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Z3=({size:e=24})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),J3=({size:e=16})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),ej=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),tj=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),nj=({size:e=24})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),sj=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),oj=({size:e=24})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),i2=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Cm=i2.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(""),mp="feedback-freeze-styles",km="__agentation_freeze";function ij(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const e=window;return e[km]||(e[km]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[km]}var Sn=ij();typeof window<"u"&&!Sn.installed&&(Sn.origSetTimeout=window.setTimeout.bind(window),Sn.origSetInterval=window.setInterval.bind(window),Sn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,n,...i)=>typeof e=="string"?Sn.origSetTimeout(e,n):Sn.origSetTimeout((...a)=>{Sn.frozen?Sn.frozenTimeoutQueue.push(()=>e(...a)):e(...a)},n,...i),window.setInterval=(e,n,...i)=>typeof e=="string"?Sn.origSetInterval(e,n):Sn.origSetInterval((...a)=>{Sn.frozen||e(...a)},n,...i),window.requestAnimationFrame=e=>Sn.origRAF(n=>{Sn.frozen?Sn.frozenRAFQueue.push(e):e(n)}),Sn.installed=!0);var Wt=Sn.origSetTimeout,aj=Sn.origSetInterval,Al=Sn.origRAF;function rj(e){return e?i2.some(n=>{var i;return!!((i=e.closest)!=null&&i.call(e,`[${n}]`))}):!1}function lj(){if(typeof document>"u"||Sn.frozen)return;Sn.frozen=!0,Sn.frozenTimeoutQueue=[],Sn.frozenRAFQueue=[];let e=document.getElementById(mp);e||(e=document.createElement("style"),e.id=mp),e.textContent=`
    *${Cm},
    *${Cm}::before,
    *${Cm}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),Sn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;rj(i)||(n.pause(),Sn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function gx(){var i;if(typeof document>"u"||!Sn.frozen)return;Sn.frozen=!1;const e=Sn.frozenTimeoutQueue;Sn.frozenTimeoutQueue=[];for(const a of e)Sn.origSetTimeout(()=>{if(Sn.frozen){Sn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=Sn.frozenRAFQueue;Sn.frozenRAFQueue=[];for(const a of n)Sn.origRAF(c=>{if(Sn.frozen){Sn.frozenRAFQueue.push(a);return}a(c)});for(const a of Sn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}Sn.pausedAnimations=[],(i=document.getElementById(mp))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function jm(e){if(!e)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{e.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var Kd=_.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:y,style:g,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:C=!1,computedStyles:M},A){const[T,D]=_.useState(u),[V,z]=_.useState(!1),[N,q]=_.useState("initial"),[G,W]=_.useState(!1),[Z,ce]=_.useState(!1),de=_.useRef(null),pe=_.useRef(null),De=_.useRef(null),Xe=_.useRef(null);_.useEffect(()=>{b&&N!=="exit"&&q("exit")},[b,N]),_.useEffect(()=>{Wt(()=>{q("enter")},0);const fe=Wt(()=>{q("entered")},200),Se=Wt(()=>{const I=de.current;I&&(jm(I),I.selectionStart=I.selectionEnd=I.value.length,I.scrollTop=I.scrollHeight)},50);return()=>{clearTimeout(fe),clearTimeout(Se),De.current&&clearTimeout(De.current),Xe.current&&clearTimeout(Xe.current)}},[]);const ie=_.useCallback(()=>{Xe.current&&clearTimeout(Xe.current),z(!0),Xe.current=Wt(()=>{z(!1),jm(de.current)},250)},[]);_.useImperativeHandle(A,()=>({shake:ie}),[ie]);const oe=_.useCallback(()=>{q("exit"),De.current=Wt(()=>{p()},150)},[p]),$=_.useCallback(()=>{T.trim()&&h(T.trim())},[T,h]),ne=_.useCallback(fe=>{fe.stopPropagation(),!fe.nativeEvent.isComposing&&(fe.key==="Enter"&&!fe.shiftKey&&(fe.preventDefault(),$()),fe.key==="Escape"&&oe())},[$,oe]),Y=[us.popup,C?us.light:"",N==="enter"?us.enter:"",N==="entered"?us.entered:"",N==="exit"?us.exit:"",V?us.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:pe,className:Y,"data-annotation-popup":!0,style:g,onClick:fe=>fe.stopPropagation(),children:[l.jsxs("div",{className:us.header,children:[M&&Object.keys(M).length>0?l.jsxs("button",{className:us.headerToggle,onClick:()=>{const fe=Z;ce(!Z),fe&&Wt(()=>jm(de.current),0)},type:"button",children:[l.jsx("svg",{className:`${us.chevron} ${Z?us.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:us.element,children:n})]}):l.jsx("span",{className:us.element,children:n}),i&&l.jsx("span",{className:us.timestamp,children:i})]}),M&&Object.keys(M).length>0&&l.jsx("div",{className:`${us.stylesWrapper} ${Z?us.expanded:""}`,children:l.jsx("div",{className:us.stylesInner,children:l.jsx("div",{className:us.stylesBlock,children:Object.entries(M).map(([fe,Se])=>l.jsxs("div",{className:us.styleLine,children:[l.jsx("span",{className:us.styleProperty,children:fe.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:us.styleValue,children:Se}),";"]},fe))})})}),a&&l.jsxs("div",{className:us.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:de,className:us.textarea,style:{borderColor:G?x:void 0},placeholder:c,value:T,onChange:fe=>D(fe.target.value),onFocus:()=>W(!0),onBlur:()=>W(!1),rows:2,onKeyDown:ne}),l.jsxs("div",{className:us.actions,children:[y&&l.jsx("div",{className:us.deleteWrapper,children:l.jsx("button",{className:us.deleteButton,onClick:y,type:"button",children:l.jsx(nj,{size:22})})}),l.jsx("button",{className:us.cancel,onClick:oe,children:"Cancel"}),l.jsx("button",{className:us.submit,style:{backgroundColor:x,opacity:T.trim()?1:.4},onClick:$,disabled:!T.trim(),children:d})]})]})}),cj=({content:e,children:n,...i})=>{const[a,c]=_.useState(!1),[u,d]=_.useState(!1),[h,p]=_.useState({top:0,right:0}),y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=()=>{if(y.current){const A=y.current.getBoundingClientRect();p({top:A.top+A.height/2,right:window.innerWidth-A.left+8})}},C=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),g.current=Wt(()=>{c(!0)},500)},M=()=>{g.current&&(clearTimeout(g.current),g.current=null),c(!1),x.current=Wt(()=>{d(!1)},150)};return _.useEffect(()=>()=>{g.current&&clearTimeout(g.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:y,onMouseEnter:C,onMouseLeave:M,...i,children:n}),u&&zl.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:e}),document.body)]})},uj=`.styles-module__tooltip___mcXL2 {
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
}`,dj={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-help-tooltip-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(e)),e.textContent=uj}var yx=dj,Pr=({content:e})=>l.jsx(cj,{className:yx.tooltip,content:e,children:l.jsx(W3,{className:yx.tooltipIcon})}),kt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},a2=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...kt.navigation},{type:"header",label:"Header",...kt.header},{type:"hero",label:"Hero",...kt.hero},{type:"section",label:"Section",...kt.section},{type:"sidebar",label:"Sidebar",...kt.sidebar},{type:"footer",label:"Footer",...kt.footer},{type:"modal",label:"Modal",...kt.modal},{type:"banner",label:"Banner",...kt.banner},{type:"drawer",label:"Drawer",...kt.drawer},{type:"popover",label:"Popover",...kt.popover},{type:"divider",label:"Divider",...kt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...kt.card},{type:"text",label:"Text",...kt.text},{type:"image",label:"Image",...kt.image},{type:"video",label:"Video",...kt.video},{type:"table",label:"Table",...kt.table},{type:"grid",label:"Grid",...kt.grid},{type:"list",label:"List",...kt.list},{type:"chart",label:"Chart",...kt.chart},{type:"codeBlock",label:"Code Block",...kt.codeBlock},{type:"map",label:"Map",...kt.map},{type:"timeline",label:"Timeline",...kt.timeline},{type:"calendar",label:"Calendar",...kt.calendar},{type:"accordion",label:"Accordion",...kt.accordion},{type:"carousel",label:"Carousel",...kt.carousel},{type:"logo",label:"Logo",...kt.logo},{type:"faq",label:"FAQ",...kt.faq},{type:"gallery",label:"Gallery",...kt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...kt.button},{type:"input",label:"Input",...kt.input},{type:"search",label:"Search",...kt.search},{type:"form",label:"Form",...kt.form},{type:"tabs",label:"Tabs",...kt.tabs},{type:"dropdown",label:"Dropdown",...kt.dropdown},{type:"toggle",label:"Toggle",...kt.toggle},{type:"stepper",label:"Stepper",...kt.stepper},{type:"rating",label:"Rating",...kt.rating},{type:"fileUpload",label:"File Upload",...kt.fileUpload},{type:"checkbox",label:"Checkbox",...kt.checkbox},{type:"radio",label:"Radio",...kt.radio},{type:"slider",label:"Slider",...kt.slider},{type:"datePicker",label:"Date Picker",...kt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...kt.avatar},{type:"badge",label:"Badge",...kt.badge},{type:"tag",label:"Tag",...kt.tag},{type:"breadcrumb",label:"Breadcrumb",...kt.breadcrumb},{type:"pagination",label:"Pagination",...kt.pagination},{type:"progress",label:"Progress",...kt.progress},{type:"alert",label:"Alert",...kt.alert},{type:"toast",label:"Toast",...kt.toast},{type:"notification",label:"Notification",...kt.notification},{type:"tooltip",label:"Tooltip",...kt.tooltip},{type:"stat",label:"Stat",...kt.stat},{type:"skeleton",label:"Skeleton",...kt.skeleton},{type:"chip",label:"Chip",...kt.chip},{type:"icon",label:"Icon",...kt.icon},{type:"spinner",label:"Spinner",...kt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...kt.pricing},{type:"testimonial",label:"Testimonial",...kt.testimonial},{type:"cta",label:"CTA",...kt.cta},{type:"productCard",label:"Product Card",...kt.productCard},{type:"profile",label:"Profile",...kt.profile},{type:"feature",label:"Feature",...kt.feature},{type:"team",label:"Team",...kt.team},{type:"login",label:"Login",...kt.login},{type:"contact",label:"Contact",...kt.contact}]}],oa={};for(const e of a2)for(const n of e.items)oa[n.type]=n;function Fe({w:e,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof e=="number"?`${e}px`:e,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Jn({w:e,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof e=="number"?`${e}px`:e,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function ci({size:e}){return l.jsx("div",{style:{width:e,height:e,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function fj({width:e,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:e*.02},children:[l.jsx(Jn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:e*.03,marginLeft:e*.04},children:[l.jsx(Fe,{w:e*.06}),l.jsx(Fe,{w:e*.07}),l.jsx(Fe,{w:e*.05}),l.jsx(Fe,{w:e*.06})]}),l.jsx(Jn,{w:e*.1,h:Math.min(28,n*.5),radius:4})]})}function hj({width:e,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Fe,{w:e*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Fe,{w:e*.6}),l.jsx(Fe,{w:e*.4}),l.jsx(Jn,{w:Math.min(140,e*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function mj({width:e,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:e*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Fe,{w:e*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Jn,{w:10,h:10,radius:2}),l.jsx(Fe,{w:e*(.4+c*17%30/100)})]},c))]})}function pj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Fe,{w:"60%",h:3,strong:!0}),l.jsx(Fe,{w:"80%",h:2}),l.jsx(Fe,{w:"70%",h:2}),l.jsx(Fe,{w:"60%",h:2})]},c))})}function _j({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Fe,{w:e*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Fe,{w:"90%"}),l.jsx(Fe,{w:"70%"}),l.jsx(Fe,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(Jn,{w:70,h:26,radius:4}),l.jsx(Jn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function gj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Fe,{w:"70%",h:4,strong:!0}),l.jsx(Fe,{w:"95%",h:2}),l.jsx(Fe,{w:"85%",h:2}),l.jsx(Fe,{w:"50%",h:2})]})]})}function yj({width:e,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Fe,{w:e*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Fe,{w:`${70+u*13%25}%`,h:2},u))]})}function xj({width:e,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:e,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:e,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:e*.3,cy:n*.3,r:Math.min(e,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function bj({width:e,height:n}){const i=Math.max(2,Math.min(5,Math.floor(e/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Fe,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Fe,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function vj({width:e,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(ci,{size:8}),l.jsx(Fe,{w:`${55+c*17%35}%`,h:2})]},c))})}function wj({width:e,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Fe,{w:Math.max(20,e*.5),h:3,strong:!0})})}function Sj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Fe,{w:Math.min(80,e*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Fe,{w:"40%",h:2})})]})}function Cj({width:e,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Fe,{w:60+c*17%30,h:2}),l.jsx(Jn,{w:"100%",h:28,radius:4})]},c)),l.jsx(Jn,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function kj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Fe,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Fe,{w:"80%",h:2}),l.jsx(Fe,{w:"65%",h:2}),l.jsx(Fe,{w:"75%",h:2})]})]})}function jj({width:e,height:n}){const i=Math.min(e,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("circle",{cx:e/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:e/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${e/2-i*.55} ${n*.78} C${e/2-i*.55} ${n*.55} ${e/2+i*.55} ${n*.55} ${e/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function Mj({width:e,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Fe,{w:Math.max(16,e*.5),h:2,strong:!0})})}function Ej({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Fe,{w:e*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Fe,{w:e*.35})]})}function Tj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:e*.04},children:[l.jsx(Fe,{w:e*.3,h:4,strong:!0}),l.jsx(Fe,{w:e*.7}),l.jsx(Fe,{w:e*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:e*.03,marginTop:n*.06},children:[l.jsx(Jn,{w:"33%",h:"100%",radius:4}),l.jsx(Jn,{w:"33%",h:"100%",radius:4}),l.jsx(Jn,{w:"33%",h:"100%",radius:4})]})]})}function Aj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(Jn,{w:"100%",h:"100%",radius:4},u))})}function Nj({width:e,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Fe,{w:e*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Fe,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function Dj({width:e,height:n}){const i=Math.min(e,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:e-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:e-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function Rj({width:e,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(ci,{size:Math.min(14,n*.4)}),l.jsx(Fe,{w:"50%",h:2})]})}function Bj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(ci,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:"60%",h:3,strong:!0}),l.jsx(Fe,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function Lj({width:e,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:e,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:e*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function Oj({width:e,height:n}){const i=Math.max(3,Math.min(7,Math.floor(e/50))),a=e/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(Jn,{w:a,h:`${d}%`,radius:2},u)})})}function zj({width:e,height:n}){const i=Math.min(e,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(Jn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function $j({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Fe,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function Pj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Fe,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function Ij({width:e,height:n}){const i=Math.max(3,Math.min(5,Math.floor(e/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(Jn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function Hj({width:e}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function Uj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Fe,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function Vj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Jn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(ci,{size:5}),l.jsx(ci,{size:5}),l.jsx(ci,{size:5})]})]})}function Yj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Fe,{w:e*.4,h:3,strong:!0}),l.jsx(Fe,{w:e*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(ci,{size:5}),l.jsx(Fe,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(Jn,{w:e*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function Wj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Fe,{w:"90%",h:2}),l.jsx(Fe,{w:"75%",h:2}),l.jsx(Fe,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(ci,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Fe,{w:60,h:3,strong:!0}),l.jsx(Fe,{w:40,h:2})]})]})]})}function Fj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Fe,{w:e*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Fe,{w:e*.35}),l.jsx(Jn,{w:Math.min(140,e*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function Xj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:"40%",h:3,strong:!0}),l.jsx(Fe,{w:"70%",h:2})]})]})}function Gj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Fe,{w:e*.4,h:3,strong:!0}),l.jsx(Jn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function qj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Fe,{w:e*.5,h:2}),l.jsx(Fe,{w:e*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Fe,{w:e*.3,h:2})]})}function Kj({width:e,height:n}){const i=Math.max(3,Math.min(5,Math.floor(e/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function Qj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Fe,{w:Math.max(16,e*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function Zj({width:e,height:n}){const a=Math.min(n*.7,e/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function Jj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:e,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:e,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:e*.4,y1:0,x2:e*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function e8({width:e,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(ci,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Fe,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function t8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Fe,{w:e*.4,h:2}),l.jsx(Fe,{w:e*.25,h:2})]})}function n8({width:e,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(ci,{size:6}),l.jsx(ci,{size:6}),l.jsx(ci,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Fe,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function s8({width:e,height:n}){const c=Math.min((e-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Fe,{w:e*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Fe,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function o8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(ci,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:"50%",h:3,strong:!0}),l.jsx(Fe,{w:"75%",h:2})]}),l.jsx(Fe,{w:30,h:2})]})}function i8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Fe,{w:"65%",h:4,strong:!0}),l.jsx(Fe,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Fe,{w:"30%",h:5,strong:!0}),l.jsx(Jn,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function a8({width:e,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(ci,{size:i}),l.jsx(Fe,{w:e*.45,h:4,strong:!0}),l.jsx(Fe,{w:e*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:e*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Fe,{w:20,h:3,strong:!0}),l.jsx(Fe,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Fe,{w:20,h:3,strong:!0}),l.jsx(Fe,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Fe,{w:20,h:3,strong:!0}),l.jsx(Fe,{w:28,h:2})]})]})]})}function r8({width:e,height:n}){const i=Math.max(e*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:e-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:e*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Fe,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Fe,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function l8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Fe,{w:"70%",h:3,strong:!0}),l.jsx(Fe,{w:"90%",h:2}),l.jsx(Fe,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function c8({width:e,height:n}){const i=Math.min(n*.7,e*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:e*.08},children:[l.jsx(Jn,{w:i,h:i,radius:i*.25}),l.jsx(Fe,{w:e*.45,h:Math.max(4,n*.2),strong:!0})]})}function u8({width:e,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Fe,{w:e*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function d8({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function f8({width:e,height:n}){const i=Math.min(e,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function h8({width:e,height:n}){const i=Math.min(e,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("circle",{cx:e/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:e/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function m8({width:e,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=e*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function p8({width:e,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((e-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Fe,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Fe,{w:e*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function _8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function g8({width:e,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Fe,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function y8({width:e,height:n}){const i=Math.min(e,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:l.jsx("path",{d:`M${e/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function x8({width:e,height:n}){const i=Math.min(e,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("circle",{cx:e/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${e/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function b8({width:e,height:n}){const i=Math.min(36,n*.25,e*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:e*.04,alignItems:"flex-start"},children:[l.jsx(Jn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Fe,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Fe,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function v8({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Fe,{w:e*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:e*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(ci,{size:a}),l.jsx(Fe,{w:e*.12,h:3,strong:!0}),l.jsx(Fe,{w:e*.08,h:2})]},u))})]})}function w8({width:e,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:e*.06,gap:n*.04},children:[l.jsx(Fe,{w:e*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Fe,{w:e*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:Math.min(60,e*.2),h:2}),l.jsx(Jn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(Jn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Fe,{w:e*.4,h:2})]})}function S8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:e*.04,gap:n*.03},children:[l.jsx(Fe,{w:e*.4,h:4,strong:!0}),l.jsx(Fe,{w:e*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:50,h:2}),l.jsx(Jn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:40,h:2}),l.jsx(Jn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:50,h:2}),l.jsx(Jn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Fe,{w:60,h:2}),l.jsx(Jn,{w:"100%",h:"100%",radius:4})]}),l.jsx(Jn,{w:Math.min(120,e*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var C8={navigation:fj,hero:hj,sidebar:mj,footer:pj,modal:_j,card:gj,text:yj,image:xj,table:bj,list:vj,button:wj,input:Sj,form:Cj,tabs:kj,avatar:jj,badge:Mj,header:Ej,section:Tj,grid:Aj,dropdown:Nj,toggle:Dj,search:Rj,toast:Bj,progress:Lj,chart:Oj,video:zj,tooltip:$j,breadcrumb:Pj,pagination:Ij,divider:Hj,accordion:Uj,carousel:Vj,pricing:Yj,testimonial:Wj,cta:Fj,alert:Xj,banner:Gj,stat:qj,stepper:Kj,tag:Qj,rating:Zj,map:Jj,timeline:e8,fileUpload:t8,codeBlock:n8,calendar:s8,notification:o8,productCard:i8,profile:a8,drawer:r8,popover:l8,logo:c8,faq:u8,gallery:d8,checkbox:f8,radio:h8,slider:m8,datePicker:p8,skeleton:_8,chip:g8,icon:y8,spinner:x8,feature:b8,team:v8,login:w8,contact:S8};function k8({type:e,width:n,height:i,text:a}){const c=C8[e];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:e})})}var j8=`svg[fill=none] {
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
}`,M8={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-design-mode-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(e)),e.textContent=j8}var Pe=M8,Sl=24,pd=5;function xx(e,n,i,a,c){let u=1/0,d=1/0;const h=e.x,p=e.x+e.width,y=e.x+e.width/2,g=e.y,x=e.y+e.height,b=e.y+e.height/2,C=!a,M=C?[h,p,y]:[...a.left?[h]:[],...a.right?[p]:[]],A=C?[g,x,b]:[...a.top?[g]:[],...a.bottom?[x]:[]],T=[];for(const pe of n)i.has(pe.id)||T.push(pe);c&&T.push(...c);for(const pe of T){const De=pe.x,Xe=pe.x+pe.width,ie=pe.x+pe.width/2,oe=pe.y,$=pe.y+pe.height,ne=pe.y+pe.height/2;for(const Y of M)for(const fe of[De,Xe,ie]){const Se=fe-Y;Math.abs(Se)<pd&&Math.abs(Se)<Math.abs(u)&&(u=Se)}for(const Y of A)for(const fe of[oe,$,ne]){const Se=fe-Y;Math.abs(Se)<pd&&Math.abs(Se)<Math.abs(d)&&(d=Se)}}const D=Math.abs(u)<pd?u:0,V=Math.abs(d)<pd?d:0,z=[],N=new Set,q=h+D,G=p+D,W=y+D,Z=g+V,ce=x+V,de=b+V;for(const pe of T){const De=pe.x,Xe=pe.x+pe.width,ie=pe.x+pe.width/2,oe=pe.y,$=pe.y+pe.height,ne=pe.y+pe.height/2;for(const Y of[De,ie,Xe])for(const fe of[q,W,G])if(Math.abs(fe-Y)<.5){const Se=`x:${Math.round(Y)}`;N.has(Se)||(N.add(Se),z.push({axis:"x",pos:Y}))}for(const Y of[oe,ne,$])for(const fe of[Z,de,ce])if(Math.abs(fe-Y)<.5){const Se=`y:${Math.round(Y)}`;N.has(Se)||(N.add(Se),z.push({axis:"y",pos:Y}))}}return{dx:D,dy:V,guides:z}}function bx(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function E8({placements:e,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:y,onSelectionChange:g,deselectSignal:x,onDragMove:b,onDragEnd:C,clearSignal:M,wireframe:A}){const[T,D]=_.useState(new Set),[V,z]=_.useState(null),[N,q]=_.useState(null),[G,W]=_.useState(null),[Z,ce]=_.useState([]),[de,pe]=_.useState(null),[De,Xe]=_.useState(!1),ie=_.useRef(!1),[oe,$]=_.useState(new Set),ne=_.useRef(new Map),Y=_.useRef(null),fe=_.useRef(null),Se=_.useRef(e);Se.current=e;const I=_.useRef(g);I.current=g;const re=_.useRef(b);re.current=b;const te=_.useRef(C);te.current=C;const be=_.useRef(x);_.useEffect(()=>{x!==be.current&&(be.current=x,D(new Set))},[x]);const Te=_.useRef(M);_.useEffect(()=>{if(M!==void 0&&M!==Te.current){Te.current=M;const J=new Set(Se.current.map(Re=>Re.id));J.size>0&&($(J),D(new Set),fe.current=null,Wt(()=>{n([]),$(new Set)},180))}},[M,n]),_.useEffect(()=>{const J=Re=>{const rt=Re.target;if(!(rt.tagName==="INPUT"||rt.tagName==="TEXTAREA"||rt.isContentEditable)){if((Re.key==="Backspace"||Re.key==="Delete")&&T.size>0){Re.preventDefault();const mt=new Set(T);$(mt),D(new Set),Wt(()=>{n(Se.current.filter(He=>!mt.has(He.id))),$(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Re.key)&&T.size>0){Re.preventDefault();const mt=Re.shiftKey?20:1,He=Re.key==="ArrowLeft"?-mt:Re.key==="ArrowRight"?mt:0,pt=Re.key==="ArrowUp"?-mt:Re.key==="ArrowDown"?mt:0;n(e.map(gt=>T.has(gt.id)?{...gt,x:Math.max(0,gt.x+He),y:Math.max(0,gt.y+pt)}:gt));return}if(Re.key==="Escape"){i?a(null):T.size>0&&D(new Set);return}}};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[T,i,e,n,a]);const he=_.useCallback(J=>{if(J.button!==0||p||J.target.closest(`.${Pe.placement}`))return;J.preventDefault(),J.stopPropagation();const rt=window.scrollY,Ce=J.clientX,mt=J.clientY;if(i){fe.current="place",d==null||d(!0);let He=!1,pt=Ce,gt=mt;const Mt=ot=>{pt=ot.clientX,gt=ot.clientY;const F=Math.abs(pt-Ce),ee=Math.abs(gt-mt);if((F>5||ee>5)&&(He=!0),He){const ve=Math.min(Ce,pt),Me=Math.min(mt,gt),nt=Math.abs(pt-Ce),Ge=Math.abs(gt-mt);z({x:ve,y:Me,w:nt,h:Ge}),W({x:ot.clientX+12,y:ot.clientY+12,text:`${Math.round(nt)} × ${Math.round(Ge)}`})}},Bt=ot=>{window.removeEventListener("mousemove",Mt),window.removeEventListener("mouseup",Bt),z(null),W(null),fe.current=null,d==null||d(!1);const F=kt[i];let ee,ve,Me,nt;He?(ee=Math.min(Ce,pt),ve=Math.min(mt,gt)+rt,Me=Math.max(Sl,Math.abs(pt-Ce)),nt=Math.max(Sl,Math.abs(gt-mt))):(Me=F.width,nt=F.height,ee=Ce-Me/2,ve=mt+rt-nt/2),ee=Math.max(0,ee),ve=Math.max(0,ve);const Ge={id:bx(),type:i,x:ee,y:ve,width:Me,height:nt,scrollY:rt,timestamp:Date.now()},Le=[...e,Ge];n(Le),D(new Set([Ge.id])),a(null)};window.addEventListener("mousemove",Mt),window.addEventListener("mouseup",Bt)}else{J.shiftKey||D(new Set),fe.current="select";let He=!1;const pt=Mt=>{const Bt=Math.abs(Mt.clientX-Ce),ot=Math.abs(Mt.clientY-mt);if((Bt>4||ot>4)&&(He=!0),He){const F=Math.min(Ce,Mt.clientX),ee=Math.min(mt,Mt.clientY);q({x:F,y:ee,w:Math.abs(Mt.clientX-Ce),h:Math.abs(Mt.clientY-mt)})}},gt=Mt=>{if(window.removeEventListener("mousemove",pt),window.removeEventListener("mouseup",gt),fe.current=null,He){const Bt=Math.min(Ce,Mt.clientX),ot=Math.min(mt,Mt.clientY)+rt,F=Math.abs(Mt.clientX-Ce),ee=Math.abs(Mt.clientY-mt),ve=new Set(J.shiftKey?T:new Set);for(const Me of e)Me.y-rt,Me.x+Me.width>Bt&&Me.x<Bt+F&&Me.y+Me.height>ot&&Me.y<ot+ee&&ve.add(Me.id);D(ve)}q(null)};window.addEventListener("mousemove",pt),window.addEventListener("mouseup",gt)}},[i,p,e,n,T]),ze=_.useCallback((J,Re)=>{var Ge;if(J.button!==0)return;const rt=J.target;if(rt.closest(`.${Pe.handle}`)||rt.closest(`.${Pe.deleteButton}`))return;J.preventDefault(),J.stopPropagation();let Ce;J.shiftKey?(Ce=new Set(T),Ce.has(Re)?Ce.delete(Re):Ce.add(Re)):T.has(Re)?Ce=new Set(T):Ce=new Set([Re]),D(Ce),(Ce.size!==T.size||[...Ce].some(Le=>!T.has(Le)))&&((Ge=I.current)==null||Ge.call(I,Ce,J.shiftKey));const He=J.clientX,pt=J.clientY,gt=new Map;for(const Le of e)Ce.has(Le.id)&&gt.set(Le.id,{x:Le.x,y:Le.y});fe.current="move",d==null||d(!0);let Mt=!1,Bt=!1,ot=e,F=0,ee=0;const ve=new Map;for(const Le of e)gt.has(Le.id)&&ve.set(Le.id,{w:Le.width,h:Le.height});const Me=Le=>{var un;const _e=Le.clientX-He,Ze=Le.clientY-pt;if((Math.abs(_e)>2||Math.abs(Ze)>2)&&(Mt=!0),!Mt)return;if(Le.altKey&&!Bt){Bt=!0;const ut=[];for(const It of e)gt.has(It.id)&&ut.push({...It,id:bx(),timestamp:Date.now()});ot=[...e,...ut]}let Ye=1/0,Je=1/0,Be=-1/0,et=-1/0;for(const[ut,It]of gt){const _n=ve.get(ut);_n&&(Ye=Math.min(Ye,It.x+_e),Je=Math.min(Je,It.y+Ze),Be=Math.max(Be,It.x+_e+_n.w),et=Math.max(et,It.y+Ze+_n.h))}const yt={x:Ye,y:Je,width:Be-Ye,height:et-Je},{dx:xt,dy:Ke,guides:Ot}=xx(yt,ot,new Set(gt.keys()),void 0,y);ce(Ot);const wt=_e+xt,ft=Ze+Ke;F=wt,ee=ft,n(ot.map(ut=>{const It=gt.get(ut.id);return It?{...ut,x:Math.max(0,It.x+wt),y:Math.max(0,It.y+ft)}:ut})),(un=re.current)==null||un.call(re,wt,ft)},nt=()=>{var Le;window.removeEventListener("mousemove",Me),window.removeEventListener("mouseup",nt),fe.current=null,d==null||d(!1),ce([]),(Le=te.current)==null||Le.call(te,F,ee,Mt)};window.addEventListener("mousemove",Me),window.addEventListener("mouseup",nt)},[T,e,n,d]),Qe=_.useCallback((J,Re,rt)=>{J.preventDefault(),J.stopPropagation();const Ce=e.find(ve=>ve.id===Re);if(!Ce)return;D(new Set([Re])),fe.current="resize",d==null||d(!0);const mt=J.clientX,He=J.clientY,pt=Ce.width,gt=Ce.height,Mt=Ce.x,Bt=Ce.y,ot={left:rt.includes("w"),right:rt.includes("e"),top:rt.includes("n"),bottom:rt.includes("s")},F=ve=>{const Me=ve.clientX-mt,nt=ve.clientY-He;let Ge=pt,Le=gt,_e=Mt,Ze=Bt;rt.includes("e")&&(Ge=Math.max(Sl,pt+Me)),rt.includes("w")&&(Ge=Math.max(Sl,pt-Me),_e=Mt+pt-Ge),rt.includes("s")&&(Le=Math.max(Sl,gt+nt)),rt.includes("n")&&(Le=Math.max(Sl,gt-nt),Ze=Bt+gt-Le);const Ye={x:_e,y:Ze,width:Ge,height:Le},{dx:Je,dy:Be,guides:et}=xx(Ye,Se.current,new Set([Re]),ot,y);ce(et),Je!==0&&(ot.right?Ge+=Je:ot.left&&(_e+=Je,Ge-=Je)),Be!==0&&(ot.bottom?Le+=Be:ot.top&&(Ze+=Be,Le-=Be)),n(Se.current.map(yt=>yt.id===Re?{...yt,x:_e,y:Ze,width:Ge,height:Le}:yt)),W({x:ve.clientX+12,y:ve.clientY+12,text:`${Math.round(Ge)} × ${Math.round(Le)}`})},ee=()=>{window.removeEventListener("mousemove",F),window.removeEventListener("mouseup",ee),W(null),fe.current=null,d==null||d(!1),ce([])};window.addEventListener("mousemove",F),window.addEventListener("mouseup",ee)},[e,n,d]),We=_.useCallback(J=>{fe.current=null,$(Re=>{const rt=new Set(Re);return rt.add(J),rt}),D(Re=>{const rt=new Set(Re);return rt.delete(J),rt}),Wt(()=>{n(Se.current.filter(Re=>Re.id!==J)),$(Re=>{const rt=new Set(Re);return rt.delete(J),rt})},180)},[n]),ht={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},jt=_.useCallback(J=>{const Re=e.find(rt=>rt.id===J);Re&&(ie.current=!!Re.text,pe(J),Xe(!1))},[e]),vt=_.useCallback(()=>{de&&(Xe(!0),Wt(()=>{pe(null),Xe(!1)},150))},[de]);_.useEffect(()=>{u&&de&&vt()},[u]);const st=_.useCallback(J=>{de&&(n(e.map(Re=>Re.id===de?{...Re,text:J.trim()||void 0}:Re)),vt())},[de,e,n,vt]),Rt=typeof window<"u"?window.scrollY:0,dt=["nw","ne","se","sw"],qt=A?"#f97316":"#3c82f7",Kt=[{dir:"n",cls:Pe.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:qt})})},{dir:"e",cls:Pe.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:qt})})},{dir:"s",cls:Pe.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:qt})})},{dir:"w",cls:Pe.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:qt})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:Y,className:`${Pe.overlay} ${c?"":Pe.light} ${i?Pe.placing:""} ${p?Pe.passthrough:""} ${u?Pe.overlayExiting:""} ${A?Pe.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:he,children:e.map(J=>{var mt;const Re=T.has(J.id),rt=((mt=oa[J.type])==null?void 0:mt.label)||J.type,Ce=J.y-Rt;return l.jsxs("div",{"data-design-placement":J.id,className:`${Pe.placement} ${Re?Pe.selected:""} ${oe.has(J.id)?Pe.exiting:""}`,style:{left:J.x,top:Ce,width:J.width,height:J.height,position:"fixed"},onMouseDown:He=>ze(He,J.id),onDoubleClick:()=>jt(J.id),children:[l.jsx("span",{className:Pe.placementLabel,children:rt}),l.jsx("span",{className:`${Pe.placementAnnotation} ${J.text?Pe.annotationVisible:""}`,children:(J.text&&ne.current.set(J.id,J.text),J.text||ne.current.get(J.id)||"")}),l.jsx("div",{className:Pe.placementContent,children:l.jsx(k8,{type:J.type,width:J.width,height:J.height,text:J.text})}),l.jsx("div",{className:Pe.deleteButton,onMouseDown:He=>He.stopPropagation(),onClick:()=>We(J.id),children:"✕"}),dt.map(He=>l.jsx("div",{className:`${Pe.handle} ${Pe[`handle${He.charAt(0).toUpperCase()}${He.slice(1)}`]}`,onMouseDown:pt=>Qe(pt,J.id,He)},He)),Kt.map(({dir:He,cls:pt,arrow:gt})=>l.jsx("div",{className:`${Pe.edgeHandle} ${pt}`,onMouseDown:Mt=>Qe(Mt,J.id,He),children:gt},He))]},J.id)})}),de&&(()=>{var Bt,ot;const J=e.find(F=>F.id===de);if(!J)return null;const Re=J.y-Rt,rt=J.x+J.width/2,Ce=Re-8,mt=Re+J.height+8,He=Ce>200,pt=mt<window.innerHeight-100,gt=Math.max(160,Math.min(window.innerWidth-160,rt));let Mt;return He?Mt={left:gt,bottom:window.innerHeight-Ce}:pt?Mt={left:gt,top:mt}:Mt={left:gt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(Kd,{element:((Bt=oa[J.type])==null?void 0:Bt.label)||J.type,placeholder:ht[J.type]||"Label or content text",initialValue:(ot=J.text)!=null?ot:"",submitLabel:ie.current?"Save":"Set",onSubmit:st,onCancel:vt,onDelete:ie.current?()=>{st("")}:void 0,isExiting:De,lightMode:!c,style:Mt})})(),V&&l.jsx("div",{className:Pe.drawBox,style:{left:V.x,top:V.y,width:V.w,height:V.h},"data-feedback-toolbar":!0}),N&&l.jsx("div",{className:Pe.selectBox,style:{left:N.x,top:N.y,width:N.w,height:N.h},"data-feedback-toolbar":!0}),G&&l.jsx("div",{className:Pe.sizeIndicator,style:{left:G.x,top:G.y},"data-feedback-toolbar":!0,children:G.text}),Z.map((J,Re)=>l.jsx("div",{className:Pe.guideLine,style:J.axis==="x"?{position:"fixed",left:J.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:J.pos-Rt,right:0,height:1},"data-feedback-toolbar":!0},`${J.axis}-${J.pos}-${Re}`))]})}function T8(e){if(!e)return"";const n=e.scrollTop>2,i=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${n?Pe.fadeTop:""} ${i?Pe.fadeBottom:""}`}var P="currentColor",$e="0.5";function A8({type:e}){switch(e){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:P,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:P,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:P,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:P,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:P,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:P,strokeWidth:$e})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:P,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:P,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:P,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:P,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:P,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:P,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:P,strokeWidth:$e})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:P,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:P,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:P,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:P,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:P,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:P,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:P,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:P,strokeWidth:$e,fill:P,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:P,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:P,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:P,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:P,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:P,strokeWidth:$e})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:P,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:P,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:P,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:P,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:P,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:P,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:P,strokeWidth:$e})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:P,strokeWidth:$e,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:P,strokeWidth:$e,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:P,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:P,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:P,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:P,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:P,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:P,strokeWidth:$e}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:P,strokeWidth:$e,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:P,strokeWidth:$e,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:P,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:P,strokeWidth:$e})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:P,strokeWidth:$e})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:P,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:P,strokeWidth:$e,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:P,strokeWidth:$e,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:P,strokeWidth:$e}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:P,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:P,strokeWidth:$e}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:P,strokeWidth:$e}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:P,strokeWidth:$e})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:P,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:P,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:P,strokeWidth:$e,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:P,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:P,strokeWidth:$e,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:P,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:P,opacity:".15",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:P,strokeWidth:$e})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:P,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:P,strokeWidth:$e,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:P,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:P,strokeWidth:$e})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:P,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:P,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:P,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:P,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:P,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:P,strokeWidth:$e,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:P,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:P,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:P,strokeWidth:$e})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:P,strokeWidth:$e,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:P,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:P,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:P,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:P,strokeWidth:$e})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:P,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:P,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:P,opacity:".2",stroke:P,strokeWidth:$e}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:P,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:P,strokeWidth:$e}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:P,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:P,strokeWidth:$e})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:P,strokeWidth:$e,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:P,strokeWidth:$e,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:P,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:P,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:P,strokeWidth:$e,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:P,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:P,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:P,opacity:".15",stroke:P,strokeWidth:$e})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:P,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:P,opacity:".2",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:P,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:P,strokeWidth:$e,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:P,strokeWidth:$e,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:P,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:P,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:P,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:P,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:P,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:P,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:P,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:P,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:P,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:P,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:P,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:P,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:P,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:P,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:P,strokeWidth:$e,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:P,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:P,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:P,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:P,strokeWidth:$e})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:P,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:P,strokeWidth:$e,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:P,strokeWidth:$e})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:P,strokeWidth:$e}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:P,strokeWidth:$e,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:P,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:P,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:P,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:P,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:P,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:P,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:P,strokeWidth:$e})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:P,strokeWidth:$e,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:P,strokeWidth:$e}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:P,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:P,strokeWidth:$e})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:P,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:P,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:P,strokeWidth:$e,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:P,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:P,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:P,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:P,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:P,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:P,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:P,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:P,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:P,opacity:".08",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:P,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:P,strokeWidth:$e,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:P,strokeWidth:$e,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:P,strokeWidth:$e,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:P,strokeWidth:$e,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:P,strokeWidth:$e,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:P,strokeWidth:$e,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:P,strokeWidth:$e,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:P,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:P,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:P,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:P,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:P,strokeWidth:$e,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:P,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:P,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:P,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:P,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:P,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:P,strokeWidth:$e}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:P,opacity:".2"})]});default:return null}}function N8({activeType:e,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${Pe.placeScroll} ${c||""}`,children:a2.map(d=>l.jsxs("div",{className:Pe.paletteSection,children:[l.jsx("div",{className:Pe.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${Pe.paletteItem} ${e===h.type?Pe.active:""} ${u?Pe.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:Pe.paletteItemIcon,children:l.jsx(A8,{type:h.type})}),l.jsx("span",{className:Pe.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function D8({value:e,suffix:n}){const[i,a]=_.useState(null),[c,u]=_.useState(n),[d,h]=_.useState("up"),p=_.useRef(e),y=_.useRef(n),g=_.useRef(),x=i!==null&&c!==n;return _.useEffect(()=>{if(e!==p.current){if(e===0){p.current=e,y.current=n,a(null);return}h(e>p.current?"up":"down"),a(p.current),u(y.current),p.current=e,y.current=n,clearTimeout(g.current),g.current=Wt(()=>a(null),250)}else y.current=n},[e,n]),i===null?l.jsxs(l.Fragment,{children:[e,n?` ${n}`:""]}):x?l.jsxs("span",{className:Pe.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[e," ",n]}),l.jsxs("span",{className:`${Pe.rollingNum} ${d==="up"?Pe.exitUp:Pe.exitDown}`,children:[i," ",c]},`o${i}-${e}`),l.jsxs("span",{className:`${Pe.rollingNum} ${d==="up"?Pe.enterUp:Pe.enterDown}`,children:[e," ",n]},`n${e}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:Pe.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:e}),l.jsx("span",{className:`${Pe.rollingNum} ${d==="up"?Pe.exitUp:Pe.exitDown}`,children:i},`o${i}-${e}`),l.jsx("span",{className:`${Pe.rollingNum} ${d==="up"?Pe.enterUp:Pe.enterDown}`,children:e},`n${e}`)]}),n?` ${n}`:""]})}function R8({activeType:e,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:y,blankCanvas:g,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:C,Tooltip:M}){const[A,T]=_.useState(!1),[D,V]=_.useState("exit"),[z,N]=_.useState(!1),[q,G]=_.useState(!0),W=_.useRef(0),Z=_.useRef(""),ce=_.useRef(0),de=_.useRef(),pe=_.useRef(null),[De,Xe]=_.useState("");_.useEffect(()=>(u?(T(!0),clearTimeout(de.current),cancelAnimationFrame(ce.current),ce.current=Al(()=>{ce.current=Al(()=>{V("enter")})})):(cancelAnimationFrame(ce.current),V("exit"),clearTimeout(de.current),de.current=Wt(()=>{T(!1),d==null||d()},200)),()=>cancelAnimationFrame(ce.current)),[u]);const ie=h>0||a>0,oe=h+a;return oe>0&&(W.current=oe,Z.current=g?oe===1?"Component":"Components":oe===1?"Change":"Changes"),_.useEffect(()=>{if(ie)z?G(!1):(G(!0),N(!0),Al(()=>{Al(()=>{G(!1)})}));else{G(!0);const $=Wt(()=>N(!1),300);return()=>clearTimeout($)}},[ie]),_.useEffect(()=>{if(!A)return;const $=pe.current;if(!$)return;const ne=()=>Xe(T8($));ne(),$.addEventListener("scroll",ne,{passive:!0});const Y=new ResizeObserver(ne);return Y.observe($),()=>{$.removeEventListener("scroll",ne),Y.disconnect()}},[A]),A?l.jsxs("div",{className:`${Pe.palette} ${Pe[D]} ${i?"":Pe.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:$=>$.stopPropagation(),onMouseDown:$=>$.stopPropagation(),onTransitionEnd:$=>{$.target===$.currentTarget&&(u||(clearTimeout(de.current),T(!1),V("exit"),d==null||d()))},children:[l.jsxs("div",{className:Pe.paletteHeader,children:[l.jsx("div",{className:Pe.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:Pe.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${Pe.canvasToggle} ${g?Pe.active:""}`,onClick:()=>x(!g),children:[l.jsx("span",{className:Pe.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:Pe.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${Pe.wireframePurposeWrap} ${g?"":Pe.collapsed}`,children:l.jsx("div",{className:Pe.wireframePurposeInner,children:l.jsx("textarea",{className:Pe.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:$=>C($.target.value),rows:2})})}),l.jsx(N8,{activeType:e,onSelect:n,onDragStart:y,scrollRef:pe,fadeClass:De,blankCanvas:g}),z&&l.jsx("div",{className:`${Pe.paletteFooterWrap} ${q?Pe.footerHidden:""}`,children:l.jsx("div",{className:Pe.paletteFooterInner,children:l.jsx("div",{className:Pe.paletteFooterInnerContent,children:l.jsxs("div",{className:Pe.paletteFooter,children:[l.jsx("span",{className:Pe.paletteFooterCount,children:l.jsx(D8,{value:W.current,suffix:Z.current})}),l.jsx("button",{className:Pe.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function Ll(e){if(e.parentElement)return e.parentElement;const n=e.getRootNode();return n instanceof ShadowRoot?n.host:null}function ii(e,n){let i=e;for(;i;){if(i.matches(n))return i;i=Ll(i)}return null}function B8(e,n=4){const i=[];let a=e,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(y=>y.length>2&&!y.match(/^[a-z]{1,2}$/)&&!y.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=Ll(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function Nl(e){var a,c,u,d,h,p,y,g;const n=B8(e);if(e.dataset.element)return{name:e.dataset.element,path:n};const i=e.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=ii(e,"svg");if(x){const b=Ll(x);if(b instanceof HTMLElement)return{name:`graphic in ${Nl(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=Ll(e);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=e.textContent)==null?void 0:c.trim(),b=e.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=e.textContent)==null?void 0:u.trim(),b=e.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=e.getAttribute("type")||"text",b=e.getAttribute("placeholder"),C=e.getAttribute("name");return b?{name:`input "${b}"`,path:n}:C?{name:`input [${C}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=e.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=e.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=e.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(y=e.textContent)==null?void 0:y.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(g=e.textContent)==null?void 0:g.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=e.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=e.className,b=e.getAttribute("role"),C=e.getAttribute("aria-label");if(C)return{name:`${i} [${C}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const M=x.split(/[\s_-]+/).map(A=>A.replace(/[A-Z0-9]{5,}.*$/,"")).filter(A=>A.length>2&&!/^[a-z]{1,2}$/.test(A)).slice(0,2);if(M.length>0)return{name:M.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function Ec(e){var u,d,h;const n=[],i=(u=e.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=e.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=e.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function _d(e){const n=Ll(e);if(!n)return"";const c=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(n.children)).filter(g=>g!==e&&g instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(g=>{var M;const x=g.tagName.toLowerCase(),b=g.className;let C="";if(typeof b=="string"&&b){const A=b.split(/\s+/).map(T=>T.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(T=>T.length>2&&!/^[a-z]{1,2}$/.test(T));A&&(C=`.${A}`)}if(x==="button"||x==="a"){const A=(M=g.textContent)==null?void 0:M.trim().slice(0,15);if(A)return`${x}${C} "${A}"`}return`${x}${C}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const g=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));g&&(h=`.${g}`)}const p=n.children.length,y=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+y}function Tc(e){const n=e.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var r2=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),L8=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),O8=new Set(["input","textarea","select"]),z8=new Set(["img","video","canvas","svg"]),$8=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function gd(e){if(typeof window>"u")return{};const n=window.getComputedStyle(e),i={},a=e.tagName.toLowerCase();let c;L8.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&e.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:O8.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:z8.has(a)?c=["width","height","objectFit","borderRadius"]:$8.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!r2.has(h)&&(i[u]=h)}return i}var P8=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function yd(e){if(typeof window>"u")return"";const n=window.getComputedStyle(e),i=[];for(const a of P8){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!r2.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function I8(e){if(!e)return;const n={},i=e.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function xd(e){const n=[],i=e.getAttribute("role"),a=e.getAttribute("aria-label"),c=e.getAttribute("aria-describedby"),u=e.getAttribute("tabindex"),d=e.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),e.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function bd(e){const n=[];let i=e;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=Ll(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var H8=new Set(["nav","header","main","section","article","footer","aside"]),pp={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},vx={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},U8=new Set(["script","style","noscript","link","meta"]),V8=40;function l2(e){let n=e;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Yr(e){const n=e.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className=="string"){const c=e.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=e.parentElement;if(i){const c=Array.from(i.children).indexOf(e)+1;return`${i===document.body?"body":Yr(i)} > ${n}:nth-child(${c})`}return n}function Qd(e){var d;const n=e.tagName.toLowerCase(),i=e.getAttribute("aria-label");if(i)return i;const a=e.getAttribute("role");if(a&&pp[a])return pp[a];if(vx[n])return vx[n];const c=e.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=Nl(e);return u.charAt(0).toUpperCase()+u.slice(1)}function c2(e){const n=e.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function u2(e){var a;const n=(a=e.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function Y8(){const e=document.querySelector("main")||document.body,n=Array.from(e.children);let i=n;e!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(U8.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<V8)return;const y=H8.has(d),g=c.getAttribute("role")&&pp[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!y&&!g&&!x)return;const b=window.scrollY,C=l2(c),M={x:p.x,y:C?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Qd(c),tagName:d,selector:Yr(c),role:c.getAttribute("role"),className:c2(c),textSnippet:u2(c),originalRect:M,currentRect:{...M},originalIndex:u,isFixed:C})}),a}function W8(e){const n=window.scrollY,i=e.getBoundingClientRect(),a=l2(e),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=e.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Qd(e),tagName:e.tagName.toLowerCase(),selector:Yr(e),role:e.getAttribute("role"),className:c2(e),textSnippet:u2(e),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var wx={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Sx=["nw","n","ne","e","se","s","sw","w"],vd=24,Cx=16,wd=5;function kx(e,n,i,a){let c=1/0,u=1/0;const d=e.x,h=e.x+e.width,p=e.x+e.width/2,y=e.y,g=e.y+e.height,x=e.y+e.height/2,b=[];for(const W of n)i.has(W.id)||b.push(W.currentRect);a&&b.push(...a);for(const W of b){const Z=W.x,ce=W.x+W.width,de=W.x+W.width/2,pe=W.y,De=W.y+W.height,Xe=W.y+W.height/2;for(const ie of[d,h,p])for(const oe of[Z,ce,de]){const $=oe-ie;Math.abs($)<wd&&Math.abs($)<Math.abs(c)&&(c=$)}for(const ie of[y,g,x])for(const oe of[pe,De,Xe]){const $=oe-ie;Math.abs($)<wd&&Math.abs($)<Math.abs(u)&&(u=$)}}const C=Math.abs(c)<wd?c:0,M=Math.abs(u)<wd?u:0,A=[],T=new Set,D=d+C,V=h+C,z=p+C,N=y+M,q=g+M,G=x+M;for(const W of b){const Z=W.x,ce=W.x+W.width,de=W.x+W.width/2,pe=W.y,De=W.y+W.height,Xe=W.y+W.height/2;for(const ie of[Z,de,ce])for(const oe of[D,z,V])if(Math.abs(oe-ie)<.5){const $=`x:${Math.round(ie)}`;T.has($)||(T.add($),A.push({axis:"x",pos:ie}))}for(const ie of[pe,Xe,De])for(const oe of[N,G,q])if(Math.abs(oe-ie)<.5){const $=`y:${Math.round(ie)}`;T.has($)||(T.add($),A.push({axis:"y",pos:ie}))}}return{dx:C,dy:M,guides:A}}var F8=new Set(["script","style","noscript","link","meta","br","hr"]);function jx(e){let n=e;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(F8.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Cx&&i.height>=Cx)return n;n=n.parentElement}return null}function X8({rearrangeState:e,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:y,onDragEnd:g,clearSignal:x}){const{sections:b}=e,C=_.useRef(e);C.current=e;const[M,A]=_.useState(new Set),[T,D]=_.useState(!1),V=_.useRef(x);_.useEffect(()=>{x!==void 0&&x!==V.current&&(V.current=x,b.length>0&&D(!0))},[x,b.length]);const z=_.useRef(p);_.useEffect(()=>{p!==z.current&&(z.current=p,A(new Set))},[p]);const[N,q]=_.useState(null),[G,W]=_.useState(!1),Z=_.useRef(!1),ce=_.useCallback(F=>{const ee=b.find(ve=>ve.id===F);ee&&(Z.current=!!ee.note,q(F),W(!1))},[b]),de=_.useCallback(()=>{N&&(W(!0),Wt(()=>{q(null),W(!1)},150))},[N]),pe=_.useCallback(F=>{N&&(n({...e,sections:b.map(ee=>ee.id===N?{...ee,note:F.trim()||void 0}:ee)}),de())},[N,b,e,n,de]);_.useEffect(()=>{a&&N&&de()},[a]);const[De,Xe]=_.useState(new Set),ie=_.useRef(new Map),[oe,$]=_.useState(null),[ne,Y]=_.useState(null),[fe,Se]=_.useState([]),[I,re]=_.useState(0),te=_.useRef(null),be=_.useRef(new Set),Te=_.useRef(new Map),[he,ze]=_.useState(new Map),[Qe,We]=_.useState(new Map),ht=_.useRef(new Set),jt=_.useRef(new Map),vt=_.useRef(h);vt.current=h;const st=_.useRef(y);st.current=y;const Rt=_.useRef(g);Rt.current=g,_.useEffect(()=>{u&&A(new Set)},[u]);const[dt,qt]=_.useState(()=>!e.sections.some(F=>{const ee=F.originalRect,ve=F.currentRect;return Math.abs(ee.x-ve.x)>1||Math.abs(ee.y-ve.y)>1||Math.abs(ee.width-ve.width)>1||Math.abs(ee.height-ve.height)>1}));_.useEffect(()=>{if(!dt){const F=Wt(()=>qt(!0),380);return()=>clearTimeout(F)}},[]);const Kt=_.useRef(new Set);_.useEffect(()=>{Kt.current=new Set(b.map(F=>F.selector))},[b]),_.useEffect(()=>{const F=()=>re(window.scrollY);return F(),window.addEventListener("scroll",F,{passive:!0}),window.addEventListener("resize",F,{passive:!0}),()=>{window.removeEventListener("scroll",F),window.removeEventListener("resize",F)}},[]),_.useEffect(()=>{const F=ee=>{if(te.current){$(null);return}const ve=document.elementFromPoint(ee.clientX,ee.clientY);if(!ve){$(null);return}if(ve.closest("[data-feedback-toolbar]")){$(null);return}if(ve.closest("[data-design-placement]")){$(null);return}if(ve.closest("[data-annotation-popup]")){$(null);return}const Me=jx(ve);if(!Me){$(null);return}for(const Ge of Kt.current)try{const Le=document.querySelector(Ge);if(Le&&(Le===Me||Me.contains(Le))){$(null);return}}catch{}const nt=Me.getBoundingClientRect();$({x:nt.x,y:nt.y,w:nt.width,h:nt.height})};return document.addEventListener("mousemove",F,{passive:!0}),()=>document.removeEventListener("mousemove",F)},[b]),_.useEffect(()=>{const F=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=F}},[]),_.useEffect(()=>{const F=ee=>{var Le,_e,Ze,Ye;if(te.current||ee.button!==0)return;const ve=ee.target;if(!ve||ve.closest("[data-feedback-toolbar]")||ve.closest("[data-design-placement]")||ve.closest("[data-annotation-popup]"))return;const Me=jx(ve);let nt=!1;if(Me)for(const Je of Kt.current)try{const Be=document.querySelector(Je);if(Be&&(Be===Me||Me.contains(Be))){nt=!0;break}}catch{}const Ge=!!(ee.shiftKey||ee.metaKey||ee.ctrlKey);if(Me&&!nt){ee.preventDefault(),ee.stopPropagation();const Je=W8(Me),Be=[...b,Je],et=[...e.originalOrder,Je.id];n({...e,sections:Be,originalOrder:et});const yt=new Set([Je.id]);A(yt),(Le=vt.current)==null||Le.call(vt,yt,Ge),$(null);const xt=ee.clientX,Ke=ee.clientY,Ot={x:Je.currentRect.x,y:Je.currentRect.y};Je.originalRect;let wt=!1,ft=0,un=0;te.current="move";const ut=_n=>{var Nt;const Tt=_n.clientX-xt,bt=_n.clientY-Ke;if(!wt&&(Math.abs(Tt)>2||Math.abs(bt)>2)&&(wt=!0),!wt)return;const dn={x:Ot.x+Tt,y:Ot.y+bt,width:Je.currentRect.width,height:Je.currentRect.height},sn=kx(dn,Be,new Set([Je.id]),d);Se(sn.guides);const Zt=Tt+sn.dx,Pt=bt+sn.dy;ft=Zt,un=Pt;const tn=document.querySelector(`[data-rearrange-section="${Je.id}"]`);tn&&(tn.style.transform=`translate(${Zt}px, ${Pt}px)`),ze(new Map([[Je.id,{x:Ot.x+Zt,y:Ot.y+Pt,width:Je.currentRect.width,height:Je.currentRect.height}]])),(Nt=st.current)==null||Nt.call(st,Zt,Pt)},It=()=>{var Tt;window.removeEventListener("mousemove",ut),window.removeEventListener("mouseup",It),te.current=null,Se([]),ze(new Map);const _n=document.querySelector(`[data-rearrange-section="${Je.id}"]`);_n&&(_n.style.transform=""),wt&&n({...e,sections:Be.map(bt=>bt.id===Je.id?{...bt,currentRect:{...bt.currentRect,x:Math.max(0,Ot.x+ft),y:Math.max(0,Ot.y+un)}}:bt),originalOrder:et}),(Tt=Rt.current)==null||Tt.call(Rt,ft,un,wt)};window.addEventListener("mousemove",ut),window.addEventListener("mouseup",It)}else if(nt&&Me){ee.preventDefault();for(const Je of b)try{const Be=document.querySelector(Je.selector);if(Be&&Be===Me){const et=new Set([Je.id]);A(et),(_e=vt.current)==null||_e.call(vt,et,Ge);return}}catch{}Ge||(A(new Set),(Ze=vt.current)==null||Ze.call(vt,new Set,!1))}else Ge||(A(new Set),(Ye=vt.current)==null||Ye.call(vt,new Set,!1))};return document.addEventListener("mousedown",F,!0),()=>document.removeEventListener("mousedown",F,!0)},[b,e,n]),_.useEffect(()=>{const F=ee=>{const ve=ee.target;if(!(ve.tagName==="INPUT"||ve.tagName==="TEXTAREA"||ve.isContentEditable)){if((ee.key==="Backspace"||ee.key==="Delete")&&M.size>0){ee.preventDefault();const Me=new Set(M);Xe(nt=>{const Ge=new Set(nt);for(const Le of Me)Ge.add(Le);return Ge}),A(new Set),Wt(()=>{const nt=C.current;n({...nt,sections:nt.sections.filter(Ge=>!Me.has(Ge.id)),originalOrder:nt.originalOrder.filter(Ge=>!Me.has(Ge))}),Xe(Ge=>{const Le=new Set(Ge);for(const _e of Me)Le.delete(_e);return Le})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(ee.key)&&M.size>0){ee.preventDefault();const Me=ee.shiftKey?20:1,nt=ee.key==="ArrowLeft"?-Me:ee.key==="ArrowRight"?Me:0,Ge=ee.key==="ArrowUp"?-Me:ee.key==="ArrowDown"?Me:0;n({...e,sections:b.map(Le=>M.has(Le.id)?{...Le,currentRect:{...Le.currentRect,x:Math.max(0,Le.currentRect.x+nt),y:Math.max(0,Le.currentRect.y+Ge)}}:Le)});return}ee.key==="Escape"&&M.size>0&&A(new Set)}};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[M,b,e,n]);const J=_.useCallback((F,ee)=>{var xt;if(F.button!==0)return;const ve=F.target;if(ve.closest(`.${Pe.handle}`)||ve.closest(`.${Pe.deleteButton}`))return;F.preventDefault(),F.stopPropagation();let Me;F.shiftKey||F.metaKey||F.ctrlKey?(Me=new Set(M),Me.has(ee)?Me.delete(ee):Me.add(ee)):M.has(ee)?Me=new Set(M):Me=new Set([ee]),A(Me),(Me.size!==M.size||[...Me].some(Ke=>!M.has(Ke)))&&((xt=vt.current)==null||xt.call(vt,Me,!!(F.shiftKey||F.metaKey||F.ctrlKey)));const Ge=F.clientX,Le=F.clientY,_e=new Map;for(const Ke of b)Me.has(Ke.id)&&_e.set(Ke.id,{x:Ke.currentRect.x,y:Ke.currentRect.y});te.current="move";let Ze=!1,Ye=0,Je=0;const Be=new Map;for(const Ke of b)if(Me.has(Ke.id)){const Ot=document.querySelector(`[data-rearrange-section="${Ke.id}"]`);Be.set(Ke.id,{outlineEl:Ot,curW:Ke.currentRect.width,curH:Ke.currentRect.height})}const et=Ke=>{var sn;const Ot=Ke.clientX-Ge,wt=Ke.clientY-Le;if(Ot===0&&wt===0)return;Ze=!0;let ft=1/0,un=1/0,ut=-1/0,It=-1/0;for(const[Zt,{curW:Pt,curH:tn}]of Be){const Nt=_e.get(Zt);if(!Nt)continue;const bn=Nt.x+Ot,tt=Nt.y+wt;ft=Math.min(ft,bn),un=Math.min(un,tt),ut=Math.max(ut,bn+Pt),It=Math.max(It,tt+tn)}const _n=kx({x:ft,y:un,width:ut-ft,height:It-un},b,Me,d),Tt=Ot+_n.dx,bt=wt+_n.dy;Ye=Tt,Je=bt,Se(_n.guides);for(const[,{outlineEl:Zt}]of Be)Zt&&(Zt.style.transform=`translate(${Tt}px, ${bt}px)`);const dn=new Map;for(const[Zt,{curW:Pt,curH:tn}]of Be){const Nt=_e.get(Zt);if(Nt){const bn={x:Math.max(0,Nt.x+Tt),y:Math.max(0,Nt.y+bt),width:Pt,height:tn};dn.set(Zt,bn)}}ze(dn),(sn=st.current)==null||sn.call(st,Tt,bt)},yt=Ke=>{var Ot,wt;window.removeEventListener("mousemove",et),window.removeEventListener("mouseup",yt),te.current=null,Se([]),ze(new Map);for(const[,{outlineEl:ft}]of Be)ft&&(ft.style.transform="");if(Ze){const ft=Ke.clientX-Ge,un=Ke.clientY-Le;if(Math.abs(ft)<5&&Math.abs(un)<5)n({...e,sections:b.map(ut=>{const It=_e.get(ut.id);return It?{...ut,currentRect:{...ut.currentRect,x:It.x,y:It.y}}:ut})});else{n({...e,sections:b.map(ut=>{const It=_e.get(ut.id);return It?{...ut,currentRect:{...ut.currentRect,x:Math.max(0,It.x+Ye),y:Math.max(0,It.y+Je)}}:ut})}),(Ot=Rt.current)==null||Ot.call(Rt,Ye,Je,!0);return}}(wt=Rt.current)==null||wt.call(Rt,0,0,!1)};window.addEventListener("mousemove",et),window.addEventListener("mouseup",yt)},[M,b,e,n]),Re=_.useCallback((F,ee,ve)=>{F.preventDefault(),F.stopPropagation();const Me=b.find(et=>et.id===ee);if(!Me)return;A(new Set([ee])),te.current="resize";const nt=F.clientX,Ge=F.clientY,Le={...Me.currentRect};Me.originalRect;const _e=Le.width/Le.height;let Ze={...Le};const Ye=document.querySelector(`[data-rearrange-section="${ee}"]`),Je=et=>{const yt=et.clientX-nt,xt=et.clientY-Ge;let Ke=Le.x,Ot=Le.y,wt=Le.width,ft=Le.height;if(ve.includes("e")&&(wt=Math.max(vd,Le.width+yt)),ve.includes("w")&&(wt=Math.max(vd,Le.width-yt),Ke=Le.x+Le.width-wt),ve.includes("s")&&(ft=Math.max(vd,Le.height+xt)),ve.includes("n")&&(ft=Math.max(vd,Le.height-xt),Ot=Le.y+Le.height-ft),et.shiftKey)if(ve.length===2){const ut=Math.abs(wt-Le.width),It=Math.abs(ft-Le.height);ut>It?ft=wt/_e:wt=ft*_e,ve.includes("w")&&(Ke=Le.x+Le.width-wt),ve.includes("n")&&(Ot=Le.y+Le.height-ft)}else ve==="e"||ve==="w"?ft=wt/_e:wt=ft*_e,ve==="w"&&(Ke=Le.x+Le.width-wt),ve==="n"&&(Ot=Le.y+Le.height-ft);Ze={x:Ke,y:Ot,width:wt,height:ft},Ye&&(Ye.style.left=`${Ke}px`,Ye.style.top=`${Ot-I}px`,Ye.style.width=`${wt}px`,Ye.style.height=`${ft}px`),Y({x:et.clientX+12,y:et.clientY+12,text:`${Math.round(wt)} × ${Math.round(ft)}`}),ze(new Map([[ee,Ze]]))},Be=()=>{window.removeEventListener("mousemove",Je),window.removeEventListener("mouseup",Be),Y(null),te.current=null,ze(new Map),n({...e,sections:b.map(et=>et.id===ee?{...et,currentRect:Ze}:et)})};window.addEventListener("mousemove",Je),window.addEventListener("mouseup",Be)},[b,e,n,I]),rt=_.useCallback(F=>{Xe(ee=>{const ve=new Set(ee);return ve.add(F),ve}),A(ee=>{const ve=new Set(ee);return ve.delete(F),ve}),Wt(()=>{const ee=C.current;n({...ee,sections:ee.sections.filter(ve=>ve.id!==F),originalOrder:ee.originalOrder.filter(ve=>ve!==F)}),Xe(ve=>{const Me=new Set(ve);return Me.delete(F),Me})},180)},[n]),Ce=F=>{const ee=F.originalRect,ve=F.currentRect;return Math.abs(ee.x-ve.x)>1||Math.abs(ee.y-ve.y)>1||Math.abs(ee.width-ve.width)>1||Math.abs(ee.height-ve.height)>1},mt=F=>{const ee=F.originalRect,ve=F.currentRect;return Math.abs(ee.x-ve.x)>1||Math.abs(ee.y-ve.y)>1},He=F=>{const ee=F.originalRect,ve=F.currentRect;return Math.abs(ee.width-ve.width)>1||Math.abs(ee.height-ve.height)>1};for(const F of b)Te.current.has(F.id)||(mt(F)?Te.current.set(F.id,"move"):He(F)&&Te.current.set(F.id,"resize"));for(const F of Te.current.keys())b.some(ee=>ee.id===F)||Te.current.delete(F);const pt=b.filter(F=>{try{if(De.has(F.id)||M.has(F.id))return!0;const ee=document.querySelector(F.selector);if(!ee)return!1;const ve=ee.getBoundingClientRect(),Me=F.originalRect;return Math.abs(ve.width-Me.width)+Math.abs(ve.height-Me.height)<200}catch{return!1}}),gt=pt.filter(F=>Ce(F)),Mt=pt.filter(F=>!Ce(F)),Bt=new Set(gt.map(F=>F.id));for(const F of be.current)Bt.has(F)||be.current.delete(F);const ot=[...Bt].sort().join(",");for(const F of gt)jt.current.set(F.id,{currentRect:F.currentRect,originalRect:F.originalRect,isFixed:F.isFixed});return _.useEffect(()=>{const F=ht.current;ht.current=Bt;const ee=new Map;for(const ve of F)if(!Bt.has(ve)){if(!b.some(nt=>nt.id===ve))continue;const Me=jt.current.get(ve);Me&&(ee.set(ve,{orig:Me.originalRect,target:Me.currentRect,isFixed:Me.isFixed}),jt.current.delete(ve))}if(ee.size>0){We(Me=>{const nt=new Map(Me);for(const[Ge,Le]of ee)nt.set(Ge,Le);return nt});const ve=Wt(()=>{We(Me=>{const nt=new Map(Me);for(const Ge of ee.keys())nt.delete(Ge);return nt})},250);return()=>clearTimeout(ve)}},[ot,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${Pe.rearrangeOverlay} ${i?"":Pe.light} ${a?Pe.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[oe&&l.jsx("div",{className:Pe.hoverHighlight,style:{left:oe.x,top:oe.y,width:oe.w,height:oe.h}}),Mt.map(F=>{const ee=F.currentRect,ve=F.isFixed?ee.y:ee.y-I,Me=wx,nt=M.has(F.id);return l.jsxs("div",{"data-rearrange-section":F.id,className:`${Pe.sectionOutline} ${nt?Pe.selected:""} ${T||a||De.has(F.id)?Pe.exiting:""}`,style:{left:ee.x,top:ve,width:ee.width,height:ee.height,borderColor:Me.border,backgroundColor:Me.bg,...dt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Ge=>J(Ge,F.id),onDoubleClick:()=>ce(F.id),children:[l.jsx("span",{className:Pe.sectionLabel,style:{backgroundColor:Me.pill},children:F.label}),l.jsx("span",{className:`${Pe.sectionAnnotation} ${F.note?Pe.annotationVisible:""}`,children:(F.note&&ie.current.set(F.id,F.note),F.note||ie.current.get(F.id)||"")}),l.jsxs("span",{className:Pe.sectionDimensions,children:[Math.round(ee.width)," × ",Math.round(ee.height)]}),l.jsx("div",{className:Pe.deleteButton,onMouseDown:Ge=>Ge.stopPropagation(),onClick:()=>rt(F.id),children:"✕"}),Sx.map(Ge=>l.jsx("div",{className:`${Pe.handle} ${Pe[`handle${Ge.charAt(0).toUpperCase()}${Ge.slice(1)}`]}`,onMouseDown:Le=>Re(Le,F.id,Ge)},Ge))]},F.id)}),gt.map(F=>{const ee=F.currentRect,ve=F.isFixed?ee.y:ee.y-I,Me=M.has(F.id),nt=mt(F),Ge=He(F);if(u&&!Me)return null;const _e=!be.current.has(F.id);return _e&&be.current.add(F.id),l.jsxs("div",{"data-rearrange-section":F.id,className:`${Pe.ghostOutline} ${Me?Pe.selected:""} ${T||a||De.has(F.id)?Pe.exiting:""}`,style:{left:ee.x,top:ve,width:ee.width,height:ee.height,...dt?{}:{opacity:0,animation:"none",transition:"none"},..._e?{}:{animation:"none"}},onMouseDown:Ze=>J(Ze,F.id),onDoubleClick:()=>ce(F.id),children:[l.jsx("span",{className:Pe.sectionLabel,style:{backgroundColor:wx.pill},children:F.label}),l.jsx("span",{className:`${Pe.sectionAnnotation} ${F.note?Pe.annotationVisible:""}`,children:(F.note&&ie.current.set(F.id,F.note),F.note||ie.current.get(F.id)||"")}),l.jsxs("span",{className:Pe.sectionDimensions,children:[Math.round(ee.width)," × ",Math.round(ee.height)]}),l.jsx("div",{className:Pe.deleteButton,onMouseDown:Ze=>Ze.stopPropagation(),onClick:()=>rt(F.id),children:"✕"}),Sx.map(Ze=>l.jsx("div",{className:`${Pe.handle} ${Pe[`handle${Ze.charAt(0).toUpperCase()}${Ze.slice(1)}`]}`,onMouseDown:Ye=>Re(Ye,F.id,Ze)},Ze)),l.jsx("span",{className:Pe.ghostBadge,children:(()=>{const Ze=Te.current.get(F.id);if(nt&&Ge){const[Ye,Je]=Ze==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",Ye," ",l.jsxs("span",{className:Pe.ghostBadgeExtra,children:["& ",Je]})]})}return`Suggested ${Ge?"Resize":"Move"}`})()})]},F.id)})]}),!u&&(()=>{const F=[];for(const ee of gt){const ve=he.get(ee.id);F.push({id:ee.id,orig:ee.originalRect,target:ve||ee.currentRect,isFixed:ee.isFixed,isSelected:M.has(ee.id),isExiting:De.has(ee.id)})}for(const[ee,ve]of he)if(!F.some(Me=>Me.id===ee)){const Me=b.find(nt=>nt.id===ee);Me&&F.push({id:ee,orig:Me.originalRect,target:ve,isFixed:Me.isFixed,isSelected:M.has(ee)})}for(const[ee,ve]of Qe)F.some(Me=>Me.id===ee)||F.push({id:ee,orig:ve.orig,target:ve.target,isFixed:ve.isFixed,isSelected:!1,isExiting:!0});return F.length===0?null:l.jsxs("svg",{className:`${Pe.connectorSvg} ${T||a?Pe.connectorExiting:""}`,children:[F.map(({id:ee,orig:ve,target:Me,isFixed:nt,isSelected:Ge,isExiting:Le})=>{const _e=ve.x+ve.width/2,Ze=(nt?ve.y:ve.y-I)+ve.height/2,Ye=Me.x+Me.width/2,Je=(nt?Me.y:Me.y-I)+Me.height/2,Be=Ye-_e,et=Je-Ze,yt=Math.sqrt(Be*Be+et*et);if(yt<2)return null;const xt=Math.min(1,yt/40),Ke=Math.min(yt*.3,60),Ot=yt>0?-et/yt:0,wt=yt>0?Be/yt:0,ft=(_e+Ye)/2+Ot*Ke,un=(Ze+Je)/2+wt*Ke,ut=he.has(ee),It=ut||Ge?1:.4,_n=ut||Ge?1:.5;return l.jsxs("g",{className:Le?Pe.connectorExiting:"",children:[l.jsx("path",{className:Pe.connectorLine,d:`M ${_e} ${Ze} Q ${ft} ${un} ${Ye} ${Je}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:It*xt}),l.jsx("circle",{className:Pe.connectorDot,cx:_e,cy:Ze,r:4*xt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:_n*xt,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:Pe.connectorDot,cx:Ye,cy:Je,r:4*xt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:_n*xt,filter:"url(#connDotShadow)"})]},`conn-${ee}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),N&&(()=>{var Je;const F=b.find(Be=>Be.id===N);if(!F)return null;const ee=F.currentRect,ve=F.isFixed?ee.y:ee.y-I,Me=ee.x+ee.width/2,nt=ve-8,Ge=ve+ee.height+8,Le=nt>200,_e=Ge<window.innerHeight-100,Ze=Math.max(160,Math.min(window.innerWidth-160,Me));let Ye;return Le?Ye={left:Ze,bottom:window.innerHeight-nt}:_e?Ye={left:Ze,top:Ge}:Ye={left:Ze,top:Math.max(80,window.innerHeight/2-80)},l.jsx(Kd,{element:F.label,placeholder:"Add a note about this section",initialValue:(Je=F.note)!=null?Je:"",submitLabel:Z.current?"Save":"Set",onSubmit:pe,onCancel:de,onDelete:Z.current?()=>{pe("")}:void 0,isExiting:G,lightMode:!i,style:Ye})})(),ne&&l.jsx("div",{className:Pe.sizeIndicator,style:{left:ne.x,top:ne.y},"data-feedback-toolbar":!0,children:ne.text}),fe.map((F,ee)=>l.jsx("div",{className:Pe.guideLine,style:F.axis==="x"?{position:"fixed",left:F.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:F.pos-I,width:"100vw",height:1}},`${F.axis}-${F.pos}-${ee}`))]})}var _p=new Set(["script","style","noscript","link","meta","br","hr"]);function G8(){const e=document.querySelector("main")||document.body,n=[],i=Array.from(e.children),a=e!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||_p.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Qd(c),selector:Yr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||_p.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const y=h.getBoundingClientRect();y.height<10||y.width<10||n.push({label:Qd(h),selector:Yr(h),top:y.top,bottom:y.bottom,left:y.left,right:y.right,area:y.width*y.height})}}}return n}function q8(e){const n=window.scrollY;return e.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function K8(e){const n=window.scrollY,i=e.y-n,a=e.x;return{top:i,bottom:i+e.height,left:a,right:a+e.width,area:e.width*e.height}}function gp(e,n){const i=n?q8(n):G8(),a=K8(e);let c=null,u=null,d=null,h=null,p=null;for(const M of i){if(Math.abs(M.left-a.left)<2&&Math.abs(M.top-a.top)<2&&Math.abs(M.right-M.left-e.width)<2&&Math.abs(M.bottom-M.top-e.height)<2)continue;M.left<=a.left+2&&M.right>=a.right-2&&M.top<=a.top+2&&M.bottom>=a.bottom-2&&M.area>a.area*1.5&&(!p||M.area<p._area)&&(p={label:M.label,selector:M.selector,_area:M.area});const A=a.right>M.left+5&&a.left<M.right-5,T=a.bottom>M.top+5&&a.top<M.bottom-5;if(A&&M.bottom<=a.top+5){const D=Math.round(a.top-M.bottom);(!c||D<c._dist)&&(c={label:M.label,selector:M.selector,gap:Math.max(0,D),_dist:D})}if(A&&M.top>=a.bottom-5){const D=Math.round(M.top-a.bottom);(!u||D<u._dist)&&(u={label:M.label,selector:M.selector,gap:Math.max(0,D),_dist:D})}if(T&&M.right<=a.left+5){const D=Math.round(a.left-M.right);(!d||D<d._dist)&&(d={label:M.label,selector:M.selector,gap:Math.max(0,D),_dist:D})}if(T&&M.left>=a.right-5){const D=Math.round(M.left-a.right);(!h||D<h._dist)&&(h={label:M.label,selector:M.selector,gap:Math.max(0,D),_dist:D})}}const y=window.innerWidth,g=window.innerHeight,x=Z8(e,y),b=M=>M?{label:M.label,selector:M.selector,gap:M.gap}:null,C=Q8(a,e,y,g,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:C}}function Q8(e,n,i,a,c,u){const d={};let h=!1;const p=[];if(e.left<-2&&p.push("left"),e.right>i+2&&p.push("right"),e.top<-2&&p.push("top"),e.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const y=u.find(g=>g.label===c.label&&g.selector===c.selector&&Math.abs(g.area-c._area)<10);if(y){const g=[];e.left<y.left-2&&g.push("left"),e.right>y.right+2&&g.push("right"),e.top<y.top-2&&g.push("top"),e.bottom>y.bottom+2&&g.push("bottom"),g.length>0&&(d.container={label:c.label,edges:g},h=!0)}}return h?d:null}function Z8(e,n){if(e.width/n>.85)return"full-width";const a=e.x+e.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function d2(e){switch(e){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function f2(e,n={}){const i=[];e.above&&i.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:""}`),e.below&&i.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:""}`),n.includeLeftRight&&(e.left&&i.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:""}`),e.right&&i.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:""}`));const a=d2(e.alignment);return e.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${e.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&i.push(`**Outside viewport** (${e.outOfBounds.viewport.join(", ")} edge${e.outOfBounds.viewport.length>1?"s":""})`),e.outOfBounds.container&&i.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")} edge${e.outOfBounds.container.edges.length>1?"s":""})`)),i}function J8(e,n,i){var u,d;const a=[];e.above&&a.push(`below \`${e.above.label}\``),e.below&&a.push(`above \`${e.below.label}\``),e.left&&a.push(`right of \`${e.left.label}\``),e.right&&a.push(`left of \`${e.right.label}\``),e.containedIn&&a.push(`inside \`${e.containedIn.label}\``),a.push(d2(e.alignment)),(u=e.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${e.outOfBounds.viewport.join(", ")})`),(d=e.outOfBounds)!=null&&d.container&&a.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var Mx=15;function Ex(e){if(e.length<2)return[];const n=[],i=new Set;for(let a=0;a<e.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<e.length;u++)i.has(u)||Math.abs(e[a].rect.y-e[u].rect.y)<Mx&&c.push(u);if(c.length>=2){const u=c.map(p=>e[p]);u.sort((p,y)=>p.rect.x-y.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,y)=>p+y.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<e.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<e.length;u++)i.has(u)||Math.abs(e[a].rect.x-e[u].rect.x)<Mx&&c.push(u);if(c.length>=2){const u=c.map(p=>e[p]);u.sort((p,y)=>p.rect.y-y.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,y)=>p+y.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function eM(e){var d;if(e.length<2)return[];const n=Ex(e.map(h=>({label:h.label,rect:h.originalRect}))),i=Ex(e.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let y=null,g=0;for(const x of i){const b=x.labels.filter(C=>p.has(C)).length;b>=2&&b>g&&(y=x,g=b)}if(y){const x=y.labels.filter(C=>p.has(C)),b=x.join(", ");if(y.type!==h.type){const C=h.type==="row"?"y":"x",M=y.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${C}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${y.type} (${M}≈${y.sharedEdge}, ${y.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-y.sharedEdge)>20||Math.abs(h.avgGap-y.avgGap)>5){const C=h.type==="row"?"y":"x",M=Math.abs(h.sharedEdge-y.sharedEdge)>20?` ${C}: ${h.sharedEdge} → ${y.sharedEdge}`:"",A=Math.abs(h.avgGap-y.avgGap)>5?` gaps: ${h.avgGap}px → ${y.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${M}${A}`)}x.forEach(C=>c.add(C))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(C=>c.add(C))}}for(const h of i){if(h.labels.every(g=>c.has(g))||h.labels.filter(g=>!c.has(g)).length<2)continue;if(!n.some(g=>g.labels.filter(b=>h.labels.includes(b)).length>=2)){const g=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${g}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=e.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const y=Math.round(p.currentRect.x/5)*5;((d=h[y])!=null?d:h[y]=[]).push(p.label)}for(const[p,y]of Object.entries(h))y.length>=2&&a.push(`**${y.join(", ")}**: shared left edge at x≈${p}`)}return a}function h2(e){if(typeof document>"u")return{viewport:e,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||_p.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const y of Array.from(p.children))a(y)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const y=getComputedStyle(h);if(y.maxWidth&&y.maxWidth!=="none"&&y.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<e.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:e,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Yr(h)}}}return{viewport:e,contentArea:null}}function tM(e){if(typeof document>"u")return null;const n=document.querySelector(e);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Yr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function m2(e,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(e.x-c),h=Math.round(c+a-(e.x+e.width)),p=(e.width/a*100).toFixed(1),y=e.x+e.width/2,g=Math.abs(y-u)<20,x=e.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(e.width)}px\`)`),g&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function p2(e){const{viewport:n,contentArea:i}=e;let a=`### Reference Frame
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
`,a}function nM(e){const n=tM(e);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Tx(e,n,i,a="standard"){var T,D,V,z;if(e.length===0)return"";const c=[...e].sort((N,q)=>Math.abs(N.y-q.y)<20?N.x-q.x:N.y-q.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${e.length} component${e.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${e.length} component${e.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((N,q)=>{var W;const G=((W=oa[N.type])==null?void 0:W.label)||N.type;u+=`${q+1}. **${G}** — \`${Math.round(N.width)}×${Math.round(N.height)}px\` at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`}),u;const d=h2(n);u+=p2(d),u+=`### Components
`,c.forEach((N,q)=>{var De;const G=((De=oa[N.type])==null?void 0:De.label)||N.type,W={x:N.x,y:N.y,width:N.width,height:N.height};u+=`${q+1}. **${G}** — \`${Math.round(N.width)}×${Math.round(N.height)}px\` at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`;const Z=gp(W),de=f2(Z,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Xe of de)u+=`   - ${Xe}
`;const pe=m2(W,d);pe&&(u+=`   - CSS: ${pe}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const N of c){const q=h.find(G=>Math.abs(G.y-N.y)<30);q?q.items.push(N):h.push({y:N.y,items:[N]})}if(h.sort((N,q)=>N.y-q.y),h.forEach((N,q)=>{N.items.sort((W,Z)=>W.x-Z.x);const G=N.items.map(W=>{var Z;return((Z=oa[W.type])==null?void 0:Z.label)||W.type});if(N.items.length===1){const Z=N.items[0].width>n.width*.8;u+=`- Row ${q+1} (y≈${Math.round(N.y)}): ${G[0]}${Z?" — full width":""}
`}else u+=`- Row ${q+1} (y≈${Math.round(N.y)}): ${G.join(" | ")} — ${N.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let N=0;N<c.length-1;N++){const q=c[N],G=c[N+1],W=((T=oa[q.type])==null?void 0:T.label)||q.type,Z=((D=oa[G.type])==null?void 0:D.label)||G.type,ce=Math.round(G.y-(q.y+q.height)),de=Math.round(G.x-(q.x+q.width));Math.abs(q.y-G.y)<30?u+=`- ${W} → ${Z}: \`${de}px\` horizontal gap
`:u+=`- ${W} → ${Z}: \`${ce}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let N=0;N<c.length;N++)for(let q=N+1;q<c.length;q++){const G=c[N],W=c[q],Z=((V=oa[G.type])==null?void 0:V.label)||G.type,ce=((z=oa[W.type])==null?void 0:z.label)||W.type,de=Math.round(W.y-(G.y+G.height)),pe=Math.round(W.x-(G.x+G.width));u+=`- ${Z} ↔ ${ce}: h=\`${pe}px\` v=\`${de}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,e.forEach((N,q)=>{var W;const G=((W=oa[N.type])==null?void 0:W.label)||N.type;u+=`${q}. ${G} at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(N=>N.type==="navigation"),y=c.some(N=>N.type==="hero"),g=c.some(N=>N.type==="sidebar"),x=c.some(N=>N.type==="footer"),b=c.filter(N=>N.type==="card"),C=c.filter(N=>N.type==="form"),M=c.filter(N=>N.type==="table"),A=c.filter(N=>N.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),y&&(u+=`- Hero section with heading, subtext, and call-to-action
`),g&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),b.length>1?u+=`- ${b.length}-column card grid — use CSS Grid or Flexbox
`:b.length===1&&(u+=`- Card component with image + content area
`),C.length>0&&(u+=`- ${C.length} form${C.length>1?"s":""} — add proper labels, validation, and submit handling
`),M.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),A.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,g){const N=c.find(q=>q.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(N.width)}px 1fr;\`
`}if(b.length>1){const N=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${N}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Ax(e,n="standard",i){const{sections:a}=e,c=[];for(const g of a){const x=g.originalRect,b=g.currentRect,C=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,M=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!C&&!M){n==="forensic"&&c.push({section:g,posMoved:!1,sizeChanged:!1});continue}c.push({section:g,posMoved:C,sizeChanged:M})}if(c.length===0||n!=="forensic"&&c.every(g=>!g.posMoved&&!g.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=h2({width:d,height:h});n!=="compact"&&(u+=p2(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const y=g=>a.map(x=>({label:x.label,selector:x.selector,rect:g==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:g,posMoved:x,sizeChanged:b}of c){const C=g.originalRect,M=g.currentRect;if(!x&&!b){u+=`- ${g.label} — unchanged at (${Math.round(M.x)}, ${Math.round(M.y)}) ${Math.round(M.width)}×${Math.round(M.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${g.label}** to (${Math.round(M.x)}, ${Math.round(M.y)}) ${Math.round(M.width)}×${Math.round(M.height)}px
`:x?u+=`- Suggested: move **${g.label}** to (${Math.round(M.x)}, ${Math.round(M.y)})
`:u+=`- Suggested: resize **${g.label}** to ${Math.round(M.width)}×${Math.round(M.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${g.label}**
`:x?u+=`- Suggested: move **${g.label}**
`:u+=`- Suggested: resize **${g.label}** from ${Math.round(C.width)}×${Math.round(C.height)}px to ${Math.round(M.width)}×${Math.round(M.height)}px
`,x){const T=gp(C,y("original")),D=gp(M,y("current")),V=b?{width:C.width,height:C.height}:void 0;u+=`  - Currently ${J8(T,{x:C.x,y:C.y},V)}
`;const z=b?{width:M.width,height:M.height}:void 0,N=`at (${Math.round(M.x)}, ${Math.round(M.y)})`,q=z?`, ${Math.round(z.width)}×${Math.round(z.height)}px`:"",W=f2(D,{includeLeftRight:n==="detailed"||n==="forensic"});if(W.length>0){u+=`  - Suggested position ${N}${q}: ${W[0]}
`;for(let ce=1;ce<W.length;ce++)u+=`    ${W[ce]}
`}else u+=`  - Suggested position ${N}${q}
`;const Z=m2(M,p);Z&&(u+=`  - CSS: ${Z}
`)}const A=nM(g.selector);if(A&&(u+=`  - ${A}
`),u+=`  - Selector: \`${g.selector}\`
`,n==="detailed"||n==="forensic"){const T=g.className?`${g.tagName}.${g.className.split(" ")[0]}`:g.tagName;T!==g.selector&&(u+=`  - Element: \`${T}\`
`),g.role&&(u+=`  - Role: \`${g.role}\`
`),n==="forensic"&&g.textSnippet&&(u+=`  - Text: "${g.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(C.x)}, y: ${Math.round(C.y)}, w: ${Math.round(C.width)}, h: ${Math.round(C.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(M.x)}, y: ${Math.round(M.y)}, w: ${Math.round(M.width)}, h: ${Math.round(M.height)} }\`
`)}if(n!=="compact"){const g=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=eM(g);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const g=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of g){const b=x.currentRect,C=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${C?" ← suggested":""}
`}}return u}var yp="feedback-annotations-",_2=7;function Zd(e){return`${yp}${e}`}function Mm(e){if(typeof window>"u")return[];try{const n=localStorage.getItem(Zd(e));if(!n)return[];const i=JSON.parse(n),a=Date.now()-_2*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function g2(e,n){if(!(typeof window>"u"))try{localStorage.setItem(Zd(e),JSON.stringify(n))}catch{}}function sM(){const e=new Map;if(typeof window>"u")return e;try{const n=Date.now()-_2*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(yp)){const c=a.slice(yp.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&e.set(c,h)}}}}catch{}return e}function Ac(e,n,i){const a=n.map(c=>({...c,_syncedTo:i}));g2(e,a)}var s_="agentation-design-";function oM(e){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${s_}${e}`);return n?JSON.parse(n):[]}catch{return[]}}function iM(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${s_}${e}`,JSON.stringify(n))}catch{}}function aM(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${s_}${e}`)}catch{}}var o_="agentation-rearrange-";function rM(e){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${o_}${e}`);return n?JSON.parse(n):null}catch{return null}}function lM(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${o_}${e}`,JSON.stringify(n))}catch{}}function cM(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${o_}${e}`)}catch{}}var i_="agentation-wireframe-";function uM(e){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${i_}${e}`);return n?JSON.parse(n):null}catch{return null}}function Nx(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${i_}${e}`,JSON.stringify(n))}catch{}}function Sd(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${i_}${e}`)}catch{}}var y2="agentation-session-";function a_(e){return`${y2}${e}`}function dM(e){if(typeof window>"u")return null;try{return localStorage.getItem(a_(e))}catch{return null}}function Em(e,n){if(!(typeof window>"u"))try{localStorage.setItem(a_(e),n)}catch{}}function fM(e){if(!(typeof window>"u"))try{localStorage.removeItem(a_(e))}catch{}}var x2=`${y2}toolbar-hidden`;function hM(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(x2)==="1"}catch{return!1}}function mM(e){if(!(typeof window>"u"))try{e&&sessionStorage.setItem(x2,"1")}catch{}}async function Tm(e,n){const i=await fetch(`${e}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function Dx(e,n){const i=await fetch(`${e}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function Cl(e,n,i){const a=await fetch(`${e}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function Rx(e,n,i){const a=await fetch(`${e}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function cr(e,n){const i=await fetch(`${e}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var Hn={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Bx=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Lx=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],pM=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function _M(e){var a,c,u,d;const n=(a=e==null?void 0:e.mode)!=null?a:"filtered";let i=Bx;if(e!=null&&e.skipExact){const h=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);i=new Set([...Bx,...h])}return{maxComponents:(c=e==null?void 0:e.maxComponents)!=null?c:6,maxDepth:(u=e==null?void 0:e.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:e!=null&&e.skipPatterns?[...Lx,...e.skipPatterns]:Lx,userPatterns:(d=e==null?void 0:e.userPatterns)!=null?d:pM,filter:e==null?void 0:e.filter}}function gM(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function yM(e,n=10){const i=new Set;let a=e,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function xM(e,n){const i=gM(e);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function bM(e,n,i,a){if(i.filter)return i.filter(e,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(e)||i.skipPatterns.some(c=>c.test(e)));case"smart":return i.skipExact.has(e)||i.skipPatterns.some(c=>c.test(e))?!1:!!(a&&xM(e,a)||i.userPatterns.some(c=>c.test(e)));default:return!0}}var kl=null,vM=new WeakMap;function Am(e){return Object.keys(e).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function wM(){if(kl!==null)return kl;if(typeof document>"u")return!1;if(document.body&&Am(document.body))return kl=!0,!0;const e=["#root","#app","#__next","[data-reactroot]"];for(const n of e){const i=document.querySelector(n);if(i&&Am(i))return kl=!0,!0}if(document.body){for(const n of document.body.children)if(Am(n))return kl=!0,!0}return kl=!1,!1}var Nc={map:vM};function SM(e){return Object.keys(e).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function CM(e){const n=SM(e);return n?e[n]:null}function Br(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function kM(e){var c;const{tag:n,type:i,elementType:a}=e;if(n===Hn.HostComponent||n===Hn.HostText||n===Hn.HostHoistable||n===Hn.HostSingleton||n===Hn.Fragment||n===Hn.Mode||n===Hn.Profiler||n===Hn.DehydratedFragment||n===Hn.HostRoot||n===Hn.HostPortal||n===Hn.ScopeComponent||n===Hn.OffscreenComponent||n===Hn.LegacyHiddenComponent||n===Hn.CacheComponent||n===Hn.TracingMarkerComponent||n===Hn.Throw||n===Hn.ViewTransitionComponent||n===Hn.ActivityComponent)return null;if(n===Hn.ForwardRef){const u=a;if(u!=null&&u.render){const d=Br(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:Br(i)}if(n===Hn.MemoComponent||n===Hn.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=Br(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:Br(i)}if(n===Hn.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===Hn.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===Hn.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?Br(u._result):null}return n===Hn.SuspenseComponent||n===Hn.SuspenseListComponent?null:n===Hn.IncompleteClassComponent||n===Hn.IncompleteFunctionComponent||n===Hn.FunctionComponent||n===Hn.ClassComponent||n===Hn.IndeterminateComponent?Br(i):null}function jM(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function MM(e,n){const i=_M(n),a=i.mode==="all";if(a){const p=Nc.map.get(e);if(p!==void 0)return p}if(!wM()){const p={path:null,components:[]};return a&&Nc.map.set(e,p),p}const c=i.mode==="smart"?yM(e):void 0,u=[];try{let p=CM(e),y=0;for(;p&&y<i.maxDepth&&u.length<i.maxComponents;){const g=kM(p);g&&!jM(g)&&bM(g,y,i,c)&&u.push(g),p=p.return,y++}}catch{const p={path:null,components:[]};return a&&Nc.map.set(e,p),p}if(u.length===0){const p={path:null,components:[]};return a&&Nc.map.set(e,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&Nc.map.set(e,h),h}var Dc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function EM(e){if(!e||typeof e!="object")return null;const n=Object.keys(e),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return e[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return e[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=e[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&e[c]||null}function Zc(e){if(!e.type||typeof e.type=="string")return null;if(typeof e.type=="object"||typeof e.type=="function"){const n=e.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function TM(e,n=50){var c;let i=e,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Zc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Zc(i._debugOwner)};i=i.return,a++}return null}function AM(e){let n=e,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Zc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Zc(n)}}}n=n.return,i++}return null}var Cd=new Map;function NM(e){var c;const n=e.tag,i=e.type,a=e.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===Dc.FunctionComponent||n===Dc.IndeterminateComponent)&&typeof i=="function")return i;if(n===Dc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===Dc.MemoComponent||n===Dc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function DM(){const e=Qv,n=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function RM(e){const n=e.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function BM(e){let n=e;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function LM(e){const n=NM(e);if(!n)return null;if(Cd.has(n))return Cd.get(n);const i=DM();if(!i)return Cd.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=RM(d.stack);h&&(c={fileName:BM(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:Zc(e)||void 0})}}}finally{i.set(a)}return Cd.set(n,c),c}function OM(e,n=15){let i=e,a=0;for(;i&&a<n;){const c=LM(i);if(c)return c;i=i.return,a++}return null}function xp(e){const n=EM(e);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=TM(n);if(i||(i=AM(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=OM(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function zM(e,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=e;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function $M(e,n=10){let i=e,a=0;for(;i&&a<n;){const c=xp(i);if(c.found)return c;i=i.parentElement,a++}return xp(e)}var PM=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,IM={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(e)),e.textContent=PM}var qe=IM,Rc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Ox(e,n,i="standard"){if(e.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var HM=`@keyframes styles-module__markerIn___x4G8D {
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
}`,UM={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-marker-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(e)),e.textContent=HM}var to=UM;function zx({annotation:e,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:y,renumberFrom:g,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:C,onHoverLeave:M,onClick:A,onContextMenu:T}){const D=(h||p)&&!y,V=D&&x==="delete",z=e.isMultiSelect,N=z?"var(--agentation-color-green)":"var(--agentation-color-accent)",q=c?to.exit:u?to.clearing:d?"":to.enter,G=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${to.marker} ${z?to.multiSelect:""} ${q} ${V?to.hovered:""}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y,backgroundColor:V?void 0:N,animationDelay:G},onMouseEnter:()=>C(e),onMouseLeave:M,onClick:W=>{W.stopPropagation(),c||A(e)},onContextMenu:T?W=>{x==="delete"&&(W.preventDefault(),W.stopPropagation(),c||T(e))}:void 0,children:[D?V?l.jsx(o2,{size:z?18:16}):l.jsx(tj,{size:16}):l.jsx("span",{className:g!==null&&n>=g?to.renumber:void 0,children:n+1}),h&&!y&&l.jsxs("div",{className:`${to.markerTooltip} ${to.enter}`,style:b,children:[l.jsxs("span",{className:to.markerQuote,children:[e.element,e.selectedText&&` "${e.selectedText.slice(0,30)}${e.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:to.markerNote,children:e.comment})]})]})}function VM({x:e,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${to.marker} ${to.pending} ${i?to.multiSelect:""} ${a?to.exit:to.enter}`,style:{left:`${e}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(V3,{size:12})})}function $x({annotation:e,fixed:n}){const i=e.isMultiSelect;return l.jsx("div",{className:`${to.marker} ${n?to.fixed:""} ${to.hovered} ${i?to.multiSelect:""} ${to.exit}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y},children:l.jsx(o2,{size:i?12:10})})}var YM=`.styles-module__switchContainer___Ka-AB {
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
}`,WM={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-switch-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-switch-styles",document.head.appendChild(e)),e.textContent=YM}var Nm=WM,Dm=({className:e="",...n})=>l.jsxs("div",{className:`${Nm.switchContainer} ${e}`,children:[l.jsx("input",{className:Nm.switchInput,type:"checkbox",...n}),l.jsx("div",{className:Nm.switchThumb})]}),FM=`.styles-module__checkboxContainer___joqZk {
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
}`,XM={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(e)),e.textContent=FM}var kd=XM,GM=({className:e="",...n})=>l.jsxs("div",{className:`${kd.checkboxContainer} ${e}`,children:[l.jsx("input",{className:kd.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:kd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:kd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),qM=`.styles-module__container___w8eAF {
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
}`,KM={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-field-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(e)),e.textContent=qM}var Px=KM,Ix=({className:e="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=_.useId();return l.jsxs("div",{className:`${Px.container} ${e}`,...u,children:[l.jsx(GM,{id:d,onChange:c,checked:a}),l.jsx("label",{className:Px.label,htmlFor:d,children:n}),i&&l.jsx(Pr,{content:i})]})},QM=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,ZM={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-settings-panel-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(e)),e.textContent=QM}var Et=ZM;function JM({settings:e,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:y,onSettingsPageChange:g,onHideToolbar:x}){var b;return l.jsx("div",{className:`${Et.settingsPanel} ${h?Et.enter:Et.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:Et.settingsPanelContainer,children:[l.jsxs("div",{className:`${Et.settingsPage} ${y==="automations"?Et.slideLeft:""}`,children:[l.jsxs("div",{className:Et.settingsHeader,children:[l.jsx("a",{className:Et.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:Et.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:Et.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:Et.themeIconWrapper,children:l.jsx("span",{className:Et.themeIcon,children:i?l.jsx(J3,{size:20}):l.jsx(ej,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:Et.divider}),l.jsxs("div",{className:Et.settingsSection,children:[l.jsxs("div",{className:Et.settingsRow,children:[l.jsxs("div",{className:Et.settingsLabel,children:["Output Detail",l.jsx(Pr,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:Et.cycleButton,onClick:()=>{const M=(Rc.findIndex(A=>A.value===e.outputDetail)+1)%Rc.length;n({outputDetail:Rc[M].value})},children:[l.jsx("span",{className:Et.cycleButtonText,children:(b=Rc.find(C=>C.value===e.outputDetail))==null?void 0:b.label},e.outputDetail),l.jsx("span",{className:Et.cycleDots,children:Rc.map(C=>l.jsx("span",{className:`${Et.cycleDot} ${e.outputDetail===C.value?Et.active:""}`},C.value))})]})]}),l.jsxs("div",{className:`${Et.settingsRow} ${Et.settingsRowMarginTop} ${c?"":Et.settingsRowDisabled}`,children:[l.jsxs("div",{className:Et.settingsLabel,children:["React Components",l.jsx(Pr,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(Dm,{checked:c&&e.reactEnabled,onChange:C=>n({reactEnabled:C.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${Et.settingsRow} ${Et.settingsRowMarginTop}`,children:[l.jsxs("div",{className:Et.settingsLabel,children:["Hide Until Restart",l.jsx(Pr,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(Dm,{checked:!1,onChange:C=>{C.target.checked&&x()}})]})]}),l.jsx("div",{className:Et.divider}),l.jsxs("div",{className:Et.settingsSection,children:[l.jsx("div",{className:`${Et.settingsLabel} ${Et.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:Et.colorOptions,children:Fc.map(C=>l.jsx("button",{className:`${Et.colorOption} ${e.annotationColorId===C.id?Et.selected:""}`,style:{"--swatch":C.srgb,"--swatch-p3":C.p3},onClick:()=>n({annotationColorId:C.id}),title:C.label,type:"button"},C.id))})]}),l.jsx("div",{className:Et.divider}),l.jsxs("div",{className:Et.settingsSection,children:[l.jsx(Ix,{className:"checkbox-field",label:"Clear on copy/send",checked:e.autoClearAfterCopy,onChange:C=>n({autoClearAfterCopy:C.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(Ix,{className:Et.checkboxField,label:"Block page interactions",checked:e.blockInteractions,onChange:C=>n({blockInteractions:C.target.checked})})]}),l.jsx("div",{className:Et.divider}),l.jsxs("button",{className:Et.settingsNavLink,onClick:()=>g("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:Et.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${Et.mcpNavIndicator} ${Et[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${Et.settingsPage} ${Et.automationsPage} ${y==="automations"?Et.slideIn:""}`,children:[l.jsxs("button",{className:Et.settingsBackButton,onClick:()=>g("main"),children:[l.jsx(sj,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:Et.divider}),l.jsxs("div",{className:Et.settingsSection,children:[l.jsxs("div",{className:Et.settingsRow,children:[l.jsxs("span",{className:Et.automationHeader,children:["MCP Connection",l.jsx(Pr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${Et.mcpStatusDot} ${Et[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:Et.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Et.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:Et.divider}),l.jsxs("div",{className:`${Et.settingsSection} ${Et.settingsSectionGrow}`,children:[l.jsxs("div",{className:Et.settingsRow,children:[l.jsxs("span",{className:Et.automationHeader,children:["Webhooks",l.jsx(Pr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:Et.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${Et.autoSendLabel} ${e.webhooksEnabled?Et.active:""} ${e.webhookUrl?"":Et.disabled}`,children:"Auto-Send"}),l.jsx(Dm,{id:"agentation-auto-send",checked:e.webhooksEnabled,onChange:C=>n({webhooksEnabled:C.target.checked}),disabled:!e.webhookUrl})]})]}),l.jsx("p",{className:Et.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:Et.webhookUrlInput,placeholder:"Webhook URL",value:e.webhookUrl,onKeyDown:C=>C.stopPropagation(),onChange:C=>n({webhookUrl:C.target.value})})]})]})]})})}function Rm(e,n="filtered"){const{name:i,path:a}=Nl(e);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=MM(e,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var Hx=!1,Bm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},ma=e=>{if(!e||!e.trim())return!1;try{const n=new URL(e.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},Fc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],e7=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const e=document.createElement("style");e.id="agentation-color-tokens",e.textContent=[...Fc.map(n=>`
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
    }`].join(""),document.head.appendChild(e)};e7();function Lr(e,n){let i=document.elementFromPoint(e,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(e,n);if(!a||a===i)break;i=a}return i}function Lm(e){let n=e;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function Or(e){return e.status!=="resolved"&&e.status!=="dismissed"}function jd(e){const n=xp(e),i=n.found?n:$M(e);if(i.found&&i.source)return zM(i.source,"path")}function t7({demoAnnotations:e,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:y=!0,endpoint:g,sessionId:x,onSessionCreated:b,webhookUrl:C,className:M}={}){var lo,co,So,hi,Wo,Fo,la;const[A,T]=_.useState(!1),[D,V]=_.useState([]),[z,N]=_.useState(!0),[q,G]=_.useState(()=>hM()),[W,Z]=_.useState(!1),ce=_.useRef(null);_.useEffect(()=>{const O=w=>{const v=ce.current;v&&v.contains(w.target)&&w.stopPropagation()},U=["mousedown","click","pointerdown"];return U.forEach(w=>document.body.addEventListener(w,O)),()=>{U.forEach(w=>document.body.removeEventListener(w,O))}},[]);const[de,pe]=_.useState(!1),[De,Xe]=_.useState(!1),[ie,oe]=_.useState(null),[$,ne]=_.useState({x:0,y:0}),[Y,fe]=_.useState(null),[Se,I]=_.useState(!1),[re,te]=_.useState("idle"),[be,Te]=_.useState(!1),[he,ze]=_.useState(!1),[Qe,We]=_.useState(null),[ht,jt]=_.useState(null),[vt,st]=_.useState([]),[Rt,dt]=_.useState(null),[qt,Kt]=_.useState(null),[J,Re]=_.useState(null),[rt,Ce]=_.useState(null),[mt,He]=_.useState([]),[pt,gt]=_.useState(0),[Mt,Bt]=_.useState(!1),[ot,F]=_.useState(!1),[ee,ve]=_.useState(!1),[Me,nt]=_.useState(!1),[Ge,Le]=_.useState(!1),[_e,Ze]=_.useState("main"),[Ye,Je]=_.useState(!1),[Be,et]=_.useState(!1),[yt,xt]=_.useState(!1),[Ke,Ot]=_.useState([]),[wt,ft]=_.useState(null),un=_.useRef(!1),[ut,It]=_.useState(!1),[_n,Tt]=_.useState(!1),[bt,dn]=_.useState(1),[sn,Zt]=_.useState("new-page"),[Pt,tn]=_.useState(""),[Nt,bn]=_.useState(!1),[tt,ds]=_.useState(null),fs=_.useRef(!1),Ro=_.useRef({rearrange:null,placements:[]}),no=_.useRef({rearrange:null,placements:[]}),[jo,go]=_.useState(0),[Bo,as]=_.useState(0),[Qt,Ln]=_.useState(0),[nn,rs]=_.useState(0),gs=_.useRef(new Set),ys=_.useRef(new Set),on=_.useRef(null),Ts=_.useRef(),Rs=Be&&A&&!yt&&ut;_.useEffect(()=>{if(Rs){Tt(!1);const O=Al(()=>{Tt(!0)});return()=>cancelAnimationFrame(O)}else Tt(!1)},[Rs]);const hs=_.useRef(new Map),yo=_.useRef(new Map),so=_.useRef(),[Yn,Ys]=_.useState(!1),[an,Ws]=_.useState([]),Si=_.useRef(an);Si.current=an;const[Ss,Mo]=_.useState(null),Bs=_.useRef(null);_.useRef(!1),_.useRef([]),_.useRef(0),_.useRef(null),_.useRef(null),_.useRef(1);const[Wn,ms]=_.useState(!1),Fs=_.useRef(null),[On,Ls]=_.useState([]),Fn=_.useRef({cmd:!1,shift:!1}),Xn=()=>{Je(!0)},ui=()=>{Je(!1)},ps=()=>{Wn||(Fs.current=Wt(()=>ms(!0),850))},oo=()=>{Fs.current&&(clearTimeout(Fs.current),Fs.current=null),ms(!1),ui()};_.useEffect(()=>()=>{Fs.current&&clearTimeout(Fs.current)},[]);const[Jt,Ci]=_.useState(()=>{var O;try{const U=JSON.parse((O=localStorage.getItem("feedback-toolbar-settings"))!=null?O:"");return{...Bm,...U,annotationColorId:Fc.find(w=>w.id===U.annotationColorId)?U.annotationColorId:Bm.annotationColorId}}catch{return Bm}}),[Gn,Li]=_.useState(!0),[xo,As]=_.useState(!1),ls=()=>{var O;(O=ce.current)==null||O.classList.add(qe.disableTransitions),Li(U=>!U),Al(()=>{var U;(U=ce.current)==null||U.classList.remove(qe.disableTransitions)})},Eo=!1,es="off",[Tn,bo]=_.useState(x!=null?x:null),di=_.useRef(!1),[Os,To]=_.useState(g?"connecting":"disconnected"),[xn,Xs]=_.useState(null),[zs,Qo]=_.useState(!1),[Ns,Zo]=_.useState(null),Lo=_.useRef(!1),[Oi,io]=_.useState(new Set),[Ao,Jo]=_.useState(new Set),[Un,Cs]=_.useState(!1),[No,ao]=_.useState(!1),[ro,jn]=_.useState(!1),$s=_.useRef(null),Rn=_.useRef(null),Ps=_.useRef(null),Vo=_.useRef(null),Yo=_.useRef(!1),zi=_.useRef(0),ei=_.useRef(null),xs=_.useRef(null),Gs=8,qn=50,$i=_.useRef(null),ki=_.useRef(null),ti=_.useRef(null),Lt=typeof window<"u"?window.location.pathname:"/";_.useEffect(()=>{if(Me)Le(!0);else{Je(!1),Ze("main");const O=Wt(()=>Le(!1),0);return()=>clearTimeout(O)}},[Me]);const vo=A&&z&&!Be;_.useEffect(()=>{if(vo){Xe(!1),pe(!0),io(new Set);const O=Wt(()=>{io(U=>{const w=new Set(U);return D.forEach(v=>w.add(v.id)),w})},350);return()=>clearTimeout(O)}else if(de){Xe(!0);const O=Wt(()=>{pe(!1),Xe(!1)},250);return()=>clearTimeout(O)}},[vo]),_.useEffect(()=>{F(!0),gt(window.scrollY);const O=Mm(Lt);V(O.filter(Or)),Hx||(As(!0),Hx=!0,Wt(()=>As(!1),750));try{const U=localStorage.getItem("feedback-toolbar-theme");U!==null&&Li(U==="dark")}catch{}try{const U=localStorage.getItem("feedback-toolbar-position");if(U){const w=JSON.parse(U);typeof w.x=="number"&&typeof w.y=="number"&&Xs(w)}}catch{}},[Lt]),_.useEffect(()=>{ot&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Jt))},[Jt,ot]),_.useEffect(()=>{ot&&localStorage.setItem("feedback-toolbar-theme",Gn?"dark":"light")},[Gn,ot]);const qs=_.useRef(!1);_.useEffect(()=>{const O=qs.current;qs.current=zs,O&&!zs&&xn&&ot&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(xn))},[zs,xn,ot]),_.useEffect(()=>{if(!g||!ot||di.current)return;di.current=!0,To("connecting"),(async()=>{try{const U=dM(Lt),w=x||U;let v=!1;if(w)try{const k=await Dx(g,w);bo(k.id),To("connected"),Em(Lt,k.id),v=!0;const B=Mm(Lt),j=new Set(k.annotations.map(H=>H.id)),L=B.filter(H=>!j.has(H.id));if(L.length>0){const K=`${typeof window<"u"?window.location.origin:""}${Lt}`,Ee=(await Promise.allSettled(L.map(Ne=>Cl(g,k.id,{...Ne,sessionId:k.id,url:K})))).map((Ne,me)=>Ne.status==="fulfilled"?Ne.value:(console.warn("[Agentation] Failed to sync annotation:",Ne.reason),L[me])),Ae=[...k.annotations,...Ee];V(Ae.filter(Or)),Ac(Lt,Ae.filter(Or),k.id)}else V(k.annotations.filter(Or)),Ac(Lt,k.annotations.filter(Or),k.id)}catch(k){console.warn("[Agentation] Could not join session, creating new:",k),fM(Lt)}if(!v){const k=typeof window<"u"?window.location.href:"/",B=await Tm(g,k);bo(B.id),To("connected"),Em(Lt,B.id),b==null||b(B.id);const j=sM(),L=typeof window<"u"?window.location.origin:"",H=[];for(const[K,ae]of j){const Ee=ae.filter(me=>!me._syncedTo);if(Ee.length===0)continue;const Ae=`${L}${K}`,Ne=K===Lt;H.push((async()=>{try{const me=Ne?B:await Tm(g,Ae),zt=(await Promise.allSettled(Ee.map(Ct=>Cl(g,me.id,{...Ct,sessionId:me.id,url:Ae})))).map((Ct,it)=>Ct.status==="fulfilled"?Ct.value:(console.warn("[Agentation] Failed to sync annotation:",Ct.reason),Ee[it])).filter(Or);if(Ac(K,zt,me.id),Ne){const Ct=new Set(Ee.map(it=>it.id));V(it=>{const lt=it.filter(St=>!Ct.has(St.id));return[...zt,...lt]})}}catch(me){console.warn(`[Agentation] Failed to sync annotations for ${K}:`,me)}})())}await Promise.allSettled(H)}}catch(U){To("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",U)}})()},[g,x,ot,b,Lt]),_.useEffect(()=>{if(!g||!ot)return;const O=async()=>{try{(await fetch(`${g}/health`)).ok?To("connected"):To("disconnected")}catch{To("disconnected")}};O();const U=aj(O,1e4);return()=>clearInterval(U)},[g,ot]),_.useEffect(()=>{if(!g||!ot||!Tn)return;const O=new EventSource(`${g}/sessions/${Tn}/events`),U=["resolved","dismissed"],w=v=>{var k;try{const B=JSON.parse(v.data);if(U.includes((k=B.payload)==null?void 0:k.status)){const j=B.payload.id,L=B.payload.kind;if(L==="placement"){for(const[H,K]of hs.current)if(K===j){hs.current.delete(H),Ot(ae=>ae.filter(Ee=>Ee.id!==H));break}}else if(L==="rearrange"){for(const[H,K]of yo.current)if(K===j){yo.current.delete(H),ds(ae=>{if(!ae)return null;const Ee=ae.sections.filter(Ae=>Ae.id!==H);return Ee.length===0?null:{...ae,sections:Ee}});break}}else Jo(H=>new Set(H).add(j)),Wt(()=>{V(H=>H.filter(K=>K.id!==j)),Jo(H=>{const K=new Set(H);return K.delete(j),K})},150)}}catch{}};return O.addEventListener("annotation.updated",w),()=>{O.removeEventListener("annotation.updated",w),O.close()}},[g,ot,Tn]),_.useEffect(()=>{if(!g||!ot)return;const O=xs.current==="disconnected",U=Os==="connected";xs.current=Os,O&&U&&(async()=>{try{const v=Mm(Lt);if(v.length===0)return;const B=`${typeof window<"u"?window.location.origin:""}${Lt}`;let j=Tn,L=[];if(j)try{L=(await Dx(g,j)).annotations}catch{j=null}j||(j=(await Tm(g,B)).id,bo(j),Em(Lt,j));const H=new Set(L.map(ae=>ae.id)),K=v.filter(ae=>!H.has(ae.id));if(K.length>0){const Ee=(await Promise.allSettled(K.map(me=>Cl(g,j,{...me,sessionId:j,url:B})))).map((me,ct)=>me.status==="fulfilled"?me.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",me.reason),K[ct])),Ne=[...L,...Ee].filter(Or);V(Ne),Ac(Lt,Ne,j)}}catch(v){console.warn("[Agentation] Failed to sync on reconnect:",v)}})()},[Os,g,ot,Tn,Lt]);const fi=_.useCallback(()=>{W||(Z(!0),nt(!1),T(!1),Wt(()=>{mM(!0),G(!0),Z(!1)},400))},[W]);_.useEffect(()=>{if(!i||!ot||!e||e.length===0||D.length>0)return;const O=[];return O.push(Wt(()=>{T(!0)},n-200)),e.forEach((U,w)=>{const v=n+w*300;O.push(Wt(()=>{const k=document.querySelector(U.selector);if(!k)return;const B=k.getBoundingClientRect(),{name:j,path:L}=Nl(k),H={id:`demo-${Date.now()}-${w}`,x:(B.left+B.width/2)/window.innerWidth*100,y:B.top+B.height/2+window.scrollY,comment:U.comment,element:j,elementPath:L,timestamp:Date.now(),selectedText:U.selectedText,boundingBox:{x:B.left,y:B.top+window.scrollY,width:B.width,height:B.height},nearbyText:Ec(k),cssClasses:Tc(k)};V(K=>[...K,H])},v))}),()=>{O.forEach(clearTimeout)}},[i,ot,e,n]),_.useEffect(()=>{const O=()=>{gt(window.scrollY),Bt(!0),ti.current&&clearTimeout(ti.current),ti.current=Wt(()=>{Bt(!1)},150)};return window.addEventListener("scroll",O,{passive:!0}),()=>{window.removeEventListener("scroll",O),ti.current&&clearTimeout(ti.current)}},[]),_.useEffect(()=>{ot&&D.length>0?Tn?Ac(Lt,D,Tn):g2(Lt,D):ot&&D.length===0&&localStorage.removeItem(Zd(Lt))},[D,Lt,ot,Tn]),_.useEffect(()=>{if(ot&&!un.current){un.current=!0;const O=oM(Lt);O.length>0&&Ot(O)}},[ot,Lt]),_.useEffect(()=>{ot&&un.current&&!ut&&(Ke.length>0?iM(Lt,Ke):aM(Lt))},[Ke,Lt,ot,ut]),_.useEffect(()=>{if(ot&&!fs.current){fs.current=!0;const O=rM(Lt);if(O){const U={...O,sections:O.sections.map(w=>{var v;return{...w,currentRect:(v=w.currentRect)!=null?v:{...w.originalRect}}})};ds(U)}}},[ot,Lt]),_.useEffect(()=>{ot&&fs.current&&!ut&&(tt?lM(Lt,tt):cM(Lt))},[tt,Lt,ot,ut]);const ni=_.useRef(!1);_.useEffect(()=>{if(ot&&!ni.current){ni.current=!0;const O=uM(Lt);O&&(no.current={rearrange:O.rearrange,placements:O.placements||[]},O.purpose&&tn(O.purpose))}},[ot,Lt]),_.useEffect(()=>{var U,w,v,k,B;if(!ot||!ni.current)return;const O=no.current;ut?((w=(U=tt==null?void 0:tt.sections)==null?void 0:U.length)!=null?w:0)>0||Ke.length>0||Pt?Nx(Lt,{rearrange:tt,placements:Ke,purpose:Pt}):Sd(Lt):((B=(k=(v=O.rearrange)==null?void 0:v.sections)==null?void 0:k.length)!=null?B:0)>0||O.placements.length>0||Pt?Nx(Lt,{rearrange:O.rearrange,placements:O.placements,purpose:Pt}):Sd(Lt)},[tt,Ke,Pt,ut,Lt,ot]),_.useEffect(()=>{Be&&!tt&&ds({sections:[],originalOrder:[],detectedAt:Date.now()})},[Be,tt]),_.useEffect(()=>{if(!g||!Tn)return;const O=hs.current,U=new Set(Ke.map(w=>w.id));for(const w of Ke){if(O.has(w.id))continue;O.set(w.id,"");const v=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Lt;Cl(g,Tn,{id:w.id,x:w.x/window.innerWidth*100,y:w.y,comment:`Place ${w.type} at (${Math.round(w.x)}, ${Math.round(w.y)}), ${w.width}×${w.height}px${w.text?` — "${w.text}"`:""}`,element:`[design:${w.type}]`,elementPath:"[placement]",timestamp:w.timestamp,url:v,intent:"change",severity:"important",kind:"placement",placement:{componentType:w.type,width:w.width,height:w.height,scrollY:w.scrollY,text:w.text}}).then(k=>{O.has(w.id)&&O.set(w.id,k.id)}).catch(k=>{console.warn("[Agentation] Failed to sync placement annotation:",k),O.delete(w.id)})}for(const[w,v]of O)U.has(w)||(O.delete(w),v&&cr(g,v).catch(()=>{}))},[Ke,g,Tn,Lt]),_.useEffect(()=>{if(!(!g||!Tn))return so.current&&clearTimeout(so.current),so.current=Wt(()=>{const O=yo.current;if(!tt||tt.sections.length===0){for(const[,v]of O)v&&cr(g,v).catch(()=>{});O.clear();return}const U=new Set(tt.sections.map(v=>v.id)),w=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Lt;for(const v of tt.sections){const k=v.originalRect,B=v.currentRect;if(!(Math.abs(k.x-B.x)>1||Math.abs(k.y-B.y)>1||Math.abs(k.width-B.width)>1||Math.abs(k.height-B.height)>1)){const H=O.get(v.id);H&&(O.delete(v.id),cr(g,H).catch(()=>{}));continue}const L=O.get(v.id);L?Rx(g,L,{comment:`Move ${v.label} section (${v.tagName}) — from (${Math.round(k.x)},${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)} to (${Math.round(B.x)},${Math.round(B.y)}) ${Math.round(B.width)}×${Math.round(B.height)}`}).catch(H=>{console.warn("[Agentation] Failed to update rearrange annotation:",H)}):(O.set(v.id,""),Cl(g,Tn,{id:v.id,x:B.x/window.innerWidth*100,y:B.y,comment:`Move ${v.label} section (${v.tagName}) — from (${Math.round(k.x)},${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)} to (${Math.round(B.x)},${Math.round(B.y)}) ${Math.round(B.width)}×${Math.round(B.height)}`,element:v.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:w,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:v.selector,label:v.label,tagName:v.tagName,originalRect:k,currentRect:B}}).then(H=>{O.has(v.id)&&O.set(v.id,H.id)}).catch(H=>{console.warn("[Agentation] Failed to sync rearrange annotation:",H),O.delete(v.id)}))}for(const[v,k]of O)U.has(v)||(O.delete(v),k&&cr(g,k).catch(()=>{}))},300),()=>{so.current&&clearTimeout(so.current)}},[tt,g,Tn,Lt]);const Oo=_.useRef(new Map);_.useLayoutEffect(()=>{var w;const O=(w=tt==null?void 0:tt.sections)!=null?w:[],U=new Set;if((Be||yt)&&A)for(const v of O){U.add(v.id);try{const k=document.querySelector(v.selector);if(!k)continue;if(!Oo.current.has(v.id)){const B={transform:k.style.transform,transformOrigin:k.style.transformOrigin,opacity:k.style.opacity,position:k.style.position,zIndex:k.style.zIndex,display:k.style.display},j=[];let L=k.parentElement;for(;L&&L!==document.body;){const K=getComputedStyle(L);(K.overflow!=="visible"||K.overflowX!=="visible"||K.overflowY!=="visible")&&(j.push({el:L,overflow:L.style.overflow}),L.style.overflow="visible"),L=L.parentElement}getComputedStyle(k).display==="inline"&&(k.style.display="inline-block"),Oo.current.set(v.id,{el:k,origStyles:B,ancestors:j}),k.style.transformOrigin="top left",k.style.zIndex="9999"}}catch{}}for(const[v,k]of Oo.current)if(!U.has(v)){const{el:B,origStyles:j,ancestors:L}=k;B.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",B.style.transform=j.transform,B.style.transformOrigin=j.transformOrigin,B.style.opacity=j.opacity,B.style.position=j.position,B.style.zIndex=j.zIndex,Oo.current.delete(v),Wt(()=>{B.style.transition="",B.style.display=j.display;for(const H of L)H.el.style.overflow=H.overflow},450)}},[tt,Be,yt,A]),_.useEffect(()=>()=>{for(const[,O]of Oo.current){const{el:U,origStyles:w,ancestors:v}=O;U.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",U.style.transform=w.transform,U.style.transformOrigin=w.transformOrigin,U.style.opacity=w.opacity,U.style.position=w.position,U.style.zIndex=w.zIndex,Wt(()=>{U.style.transition="",U.style.display=w.display;for(const k of v)k.el.style.overflow=k.overflow},450)}Oo.current.clear()},[]);const ji=_.useCallback(()=>{xt(!0),et(!1),ft(null),clearTimeout(Ts.current),Ts.current=Wt(()=>{xt(!1)},300)},[]),Qi=_.useCallback(()=>{Be&&(xt(!0),et(!1),ft(null),clearTimeout(Ts.current),Ts.current=Wt(()=>{xt(!1)},300)),T(!1)},[Be]),Zi=_.useCallback(()=>{ee||(lj(),ve(!0))},[ee]),E=_.useCallback(()=>{ee&&(gx(),ve(!1))},[ee]),X=_.useCallback(()=>{ee?E():Zi()},[ee,Zi,E]),ue=_.useCallback(()=>{if(On.length===0)return;const O=On[0],U=O.element,w=On.length>1,v=On.map(k=>k.element.getBoundingClientRect());if(w){const k={left:Math.min(...v.map(me=>me.left)),top:Math.min(...v.map(me=>me.top)),right:Math.max(...v.map(me=>me.right)),bottom:Math.max(...v.map(me=>me.bottom))},B=On.slice(0,5).map(me=>me.name).join(", "),j=On.length>5?` +${On.length-5} more`:"",L=v.map(me=>({x:me.left,y:me.top+window.scrollY,width:me.width,height:me.height})),K=On[On.length-1].element,ae=v[v.length-1],Ee=ae.left+ae.width/2,Ae=ae.top+ae.height/2,Ne=Lm(K);fe({x:Ee/window.innerWidth*100,y:Ne?Ae:Ae+window.scrollY,clientY:Ae,element:`${On.length} elements: ${B}${j}`,elementPath:"multi-select",boundingBox:{x:k.left,y:k.top+window.scrollY,width:k.right-k.left,height:k.bottom-k.top},isMultiSelect:!0,isFixed:Ne,elementBoundingBoxes:L,multiSelectElements:On.map(me=>me.element),targetElement:K,fullPath:bd(U),accessibility:xd(U),computedStyles:yd(U),computedStylesObj:gd(U),nearbyElements:_d(U),cssClasses:Tc(U),nearbyText:Ec(U),sourceFile:jd(U)})}else{const k=v[0],B=Lm(U);fe({x:k.left/window.innerWidth*100,y:B?k.top:k.top+window.scrollY,clientY:k.top,element:O.name,elementPath:O.path,boundingBox:{x:k.left,y:B?k.top:k.top+window.scrollY,width:k.width,height:k.height},isFixed:B,fullPath:bd(U),accessibility:xd(U),computedStyles:yd(U),computedStylesObj:gd(U),nearbyElements:_d(U),cssClasses:Tc(U),nearbyText:Ec(U),reactComponents:O.reactComponents,sourceFile:jd(U)})}Ls([]),oe(null)},[On]);_.useEffect(()=>{A||(fe(null),Re(null),Ce(null),He([]),oe(null),nt(!1),Ls([]),Fn.current={cmd:!1,shift:!1},ee&&E())},[A,ee,E]),_.useEffect(()=>()=>{gx()},[]),_.useEffect(()=>{if(!A)return;const O=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),U=":not([data-agentation-root]):not([data-agentation-root] *)",w=document.createElement("style");return w.id="feedback-cursor-styles",w.textContent=`
      body ${U} {
        cursor: crosshair !important;
      }

      body :is(${O})${U} {
        cursor: text !important;
      }
    `,document.head.appendChild(w),()=>{const v=document.getElementById("feedback-cursor-styles");v&&v.remove()}},[A]),_.useEffect(()=>{if(Ss!==null&&A)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Ss,A]),_.useEffect(()=>{if(!A||Y||Yn||Be)return;const O=U=>{const w=U.composedPath()[0]||U.target;if(ii(w,"[data-feedback-toolbar]")){oe(null);return}const v=Lr(U.clientX,U.clientY);if(!v||ii(v,"[data-feedback-toolbar]")){oe(null);return}const{name:k,elementName:B,path:j,reactComponents:L}=Rm(v,es),H=v.getBoundingClientRect();oe({element:k,elementName:B,elementPath:j,rect:H,reactComponents:L}),ne({x:U.clientX,y:U.clientY})};return document.addEventListener("mousemove",O),()=>document.removeEventListener("mousemove",O)},[A,Y,Yn,Be,es,an]);const je=_.useCallback(O=>{var U;if(Re(O),We(null),jt(null),st([]),(U=O.elementBoundingBoxes)!=null&&U.length){const w=[];for(const v of O.elementBoundingBoxes){const k=v.x+v.width/2,B=v.y+v.height/2-window.scrollY,j=Lr(k,B);j&&w.push(j)}He(w),Ce(null)}else if(O.boundingBox){const w=O.boundingBox,v=w.x+w.width/2,k=O.isFixed?w.y+w.height/2:w.y+w.height/2-window.scrollY,B=Lr(v,k);if(B){const j=B.getBoundingClientRect(),L=j.width/w.width,H=j.height/w.height;L<.5||H<.5?Ce(null):Ce(B)}else Ce(null);He([])}else Ce(null),He([])},[]);_.useEffect(()=>{if(!A||Yn||Be)return;const O=U=>{var _t,zt;if(Yo.current){Yo.current=!1;return}const w=U.composedPath()[0]||U.target;if(ii(w,"[data-feedback-toolbar]")||ii(w,"[data-annotation-popup]")||ii(w,"[data-annotation-marker]"))return;if(U.metaKey&&U.shiftKey&&!Y&&!J){U.preventDefault(),U.stopPropagation();const Ct=Lr(U.clientX,U.clientY);if(!Ct)return;const it=Ct.getBoundingClientRect(),{name:lt,path:St,reactComponents:wn}=Rm(Ct,es),fn=On.findIndex(bs=>bs.element===Ct);fn>=0?Ls(bs=>bs.filter((Ks,Bn)=>Bn!==fn)):Ls(bs=>[...bs,{element:Ct,rect:it,name:lt,path:St,reactComponents:wn!=null?wn:void 0}]);return}const v=ii(w,"button, a, input, select, textarea, [role='button'], [onclick]");if(Jt.blockInteractions&&v&&(U.preventDefault(),U.stopPropagation()),Y){if(v&&!Jt.blockInteractions)return;U.preventDefault(),(_t=$i.current)==null||_t.shake();return}if(J){if(v&&!Jt.blockInteractions)return;U.preventDefault(),(zt=ki.current)==null||zt.shake();return}U.preventDefault();const k=Lr(U.clientX,U.clientY);if(!k)return;const{name:B,path:j,reactComponents:L}=Rm(k,es),H=k.getBoundingClientRect(),K=U.clientX/window.innerWidth*100,ae=Lm(k),Ee=ae?U.clientY:U.clientY+window.scrollY,Ae=window.getSelection();let Ne;Ae&&Ae.toString().trim().length>0&&(Ne=Ae.toString().trim().slice(0,500));const me=gd(k),ct=yd(k);fe({x:K,y:Ee,clientY:U.clientY,element:B,elementPath:j,selectedText:Ne,boundingBox:{x:H.left,y:ae?H.top:H.top+window.scrollY,width:H.width,height:H.height},nearbyText:Ec(k),cssClasses:Tc(k),isFixed:ae,fullPath:bd(k),accessibility:xd(k),computedStyles:ct,computedStylesObj:me,nearbyElements:_d(k),reactComponents:L!=null?L:void 0,sourceFile:jd(k),targetElement:k}),oe(null)};return document.addEventListener("click",O,!0),()=>document.removeEventListener("click",O,!0)},[A,Yn,Be,Y,J,Jt.blockInteractions,es,On]),_.useEffect(()=>{if(!A)return;const O=v=>{v.key==="Meta"&&(Fn.current.cmd=!0),v.key==="Shift"&&(Fn.current.shift=!0)},U=v=>{const k=Fn.current.cmd&&Fn.current.shift;v.key==="Meta"&&(Fn.current.cmd=!1),v.key==="Shift"&&(Fn.current.shift=!1);const B=Fn.current.cmd&&Fn.current.shift;k&&!B&&On.length>0&&ue()},w=()=>{Fn.current={cmd:!1,shift:!1},Ls([])};return document.addEventListener("keydown",O),document.addEventListener("keyup",U),window.addEventListener("blur",w),()=>{document.removeEventListener("keydown",O),document.removeEventListener("keyup",U),window.removeEventListener("blur",w)}},[A,On,ue]),_.useEffect(()=>{if(!A||Y||Yn||Be)return;const O=U=>{const w=U.composedPath()[0]||U.target;ii(w,"[data-feedback-toolbar]")||ii(w,"[data-annotation-marker]")||ii(w,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(w.tagName)||w.isContentEditable||(U.preventDefault(),$s.current={x:U.clientX,y:U.clientY})};return document.addEventListener("mousedown",O),()=>document.removeEventListener("mousedown",O)},[A,Y,Yn,Be]),_.useEffect(()=>{if(!A||Y)return;const O=U=>{if(!$s.current)return;const w=U.clientX-$s.current.x,v=U.clientY-$s.current.y,k=w*w+v*v,B=Gs*Gs;if(!ro&&k>=B&&(Rn.current=$s.current,jn(!0),U.preventDefault()),(ro||k>=B)&&Rn.current){if(Ps.current){const lt=Math.min(Rn.current.x,U.clientX),St=Math.min(Rn.current.y,U.clientY),wn=Math.abs(U.clientX-Rn.current.x),fn=Math.abs(U.clientY-Rn.current.y);Ps.current.style.transform=`translate(${lt}px, ${St}px)`,Ps.current.style.width=`${wn}px`,Ps.current.style.height=`${fn}px`}const j=Date.now();if(j-zi.current<qn)return;zi.current=j;const L=Rn.current.x,H=Rn.current.y,K=Math.min(L,U.clientX),ae=Math.min(H,U.clientY),Ee=Math.max(L,U.clientX),Ae=Math.max(H,U.clientY),Ne=(K+Ee)/2,me=(ae+Ae)/2,ct=new Set,_t=[[K,ae],[Ee,ae],[K,Ae],[Ee,Ae],[Ne,me],[Ne,ae],[Ne,Ae],[K,me],[Ee,me]];for(const[lt,St]of _t){const wn=document.elementsFromPoint(lt,St);for(const fn of wn)fn instanceof HTMLElement&&ct.add(fn)}const zt=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const lt of zt)if(lt instanceof HTMLElement){const St=lt.getBoundingClientRect(),wn=St.left+St.width/2,fn=St.top+St.height/2,bs=wn>=K&&wn<=Ee&&fn>=ae&&fn<=Ae,Ks=Math.min(St.right,Ee)-Math.max(St.left,K),Bn=Math.min(St.bottom,Ae)-Math.max(St.top,ae),Xo=Ks>0&&Bn>0?Ks*Bn:0,Go=St.width*St.height,Qs=Go>0?Xo/Go:0;(bs||Qs>.5)&&ct.add(lt)}const Ct=[],it=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const lt of ct){if(ii(lt,"[data-feedback-toolbar]")||ii(lt,"[data-annotation-marker]"))continue;const St=lt.getBoundingClientRect();if(!(St.width>window.innerWidth*.8&&St.height>window.innerHeight*.5)&&!(St.width<10||St.height<10)&&St.left<Ee&&St.right>K&&St.top<Ae&&St.bottom>ae){const wn=lt.tagName;let fn=it.has(wn);if(!fn&&(wn==="DIV"||wn==="SPAN")){const bs=lt.textContent&&lt.textContent.trim().length>0,Ks=lt.onclick!==null||lt.getAttribute("role")==="button"||lt.getAttribute("role")==="link"||lt.classList.contains("clickable")||lt.hasAttribute("data-clickable");(bs||Ks)&&!lt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(fn=!0)}if(fn){let bs=!1;for(const Ks of Ct)if(Ks.left<=St.left&&Ks.right>=St.right&&Ks.top<=St.top&&Ks.bottom>=St.bottom){bs=!0;break}bs||Ct.push(St)}}}if(Vo.current){const lt=Vo.current;for(;lt.children.length>Ct.length;)lt.removeChild(lt.lastChild);Ct.forEach((St,wn)=>{let fn=lt.children[wn];fn||(fn=document.createElement("div"),fn.className=qe.selectedElementHighlight,lt.appendChild(fn)),fn.style.transform=`translate(${St.left}px, ${St.top}px)`,fn.style.width=`${St.width}px`,fn.style.height=`${St.height}px`})}}};return document.addEventListener("mousemove",O,{passive:!0}),()=>document.removeEventListener("mousemove",O)},[A,Y,ro,Gs]),_.useEffect(()=>{if(!A)return;const O=U=>{const w=ro,v=Rn.current;if(ro&&v){Yo.current=!0;const k=Math.min(v.x,U.clientX),B=Math.min(v.y,U.clientY),j=Math.max(v.x,U.clientX),L=Math.max(v.y,U.clientY),H=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(Ne=>{if(!(Ne instanceof HTMLElement)||ii(Ne,"[data-feedback-toolbar]")||ii(Ne,"[data-annotation-marker]"))return;const me=Ne.getBoundingClientRect();me.width>window.innerWidth*.8&&me.height>window.innerHeight*.5||me.width<10||me.height<10||me.left<j&&me.right>k&&me.top<L&&me.bottom>B&&H.push({element:Ne,rect:me})});const ae=H.filter(({element:Ne})=>!H.some(({element:me})=>me!==Ne&&Ne.contains(me))),Ee=U.clientX/window.innerWidth*100,Ae=U.clientY+window.scrollY;if(ae.length>0){const Ne=ae.reduce((it,{rect:lt})=>({left:Math.min(it.left,lt.left),top:Math.min(it.top,lt.top),right:Math.max(it.right,lt.right),bottom:Math.max(it.bottom,lt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),me=ae.slice(0,5).map(({element:it})=>Nl(it).name).join(", "),ct=ae.length>5?` +${ae.length-5} more`:"",_t=ae[0].element,zt=gd(_t),Ct=yd(_t);fe({x:Ee,y:Ae,clientY:U.clientY,element:`${ae.length} elements: ${me}${ct}`,elementPath:"multi-select",boundingBox:{x:Ne.left,y:Ne.top+window.scrollY,width:Ne.right-Ne.left,height:Ne.bottom-Ne.top},isMultiSelect:!0,fullPath:bd(_t),accessibility:xd(_t),computedStyles:Ct,computedStylesObj:zt,nearbyElements:_d(_t),cssClasses:Tc(_t),nearbyText:Ec(_t),sourceFile:jd(_t)})}else{const Ne=Math.abs(j-k),me=Math.abs(L-B);Ne>20&&me>20&&fe({x:Ee,y:Ae,clientY:U.clientY,element:"Area selection",elementPath:`region at (${Math.round(k)}, ${Math.round(B)})`,boundingBox:{x:k,y:B+window.scrollY,width:Ne,height:me},isMultiSelect:!0})}oe(null)}else w&&(Yo.current=!0);$s.current=null,Rn.current=null,jn(!1),Vo.current&&(Vo.current.innerHTML="")};return document.addEventListener("mouseup",O),()=>document.removeEventListener("mouseup",O)},[A,ro]);const Ve=_.useCallback(async(O,U,w)=>{const v=Jt.webhookUrl||C;if(!v||!Jt.webhooksEnabled&&!w)return!1;try{return(await fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:O,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...U})})).ok}catch(k){return console.warn("[Agentation] Webhook failed:",k),!1}},[C,Jt.webhookUrl,Jt.webhooksEnabled]),at=_.useCallback(O=>{var w;if(!Y)return;const U={id:Date.now().toString(),x:Y.x,y:Y.y,comment:O,element:Y.element,elementPath:Y.elementPath,timestamp:Date.now(),selectedText:Y.selectedText,boundingBox:Y.boundingBox,nearbyText:Y.nearbyText,cssClasses:Y.cssClasses,isMultiSelect:Y.isMultiSelect,isFixed:Y.isFixed,fullPath:Y.fullPath,accessibility:Y.accessibility,computedStyles:Y.computedStyles,nearbyElements:Y.nearbyElements,reactComponents:Y.reactComponents,sourceFile:Y.sourceFile,elementBoundingBoxes:Y.elementBoundingBoxes,...g&&Tn?{sessionId:Tn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};V(v=>[...v,U]),ei.current=U.id,Wt(()=>{ei.current=null},300),Wt(()=>{io(v=>new Set(v).add(U.id))},250),a==null||a(U),Ve("annotation.add",{annotation:U}),Cs(!0),Wt(()=>{fe(null),Cs(!1)},150),(w=window.getSelection())==null||w.removeAllRanges(),g&&Tn&&Cl(g,Tn,U).then(v=>{v.id!==U.id&&(V(k=>k.map(B=>B.id===U.id?{...B,id:v.id}:B)),io(k=>{const B=new Set(k);return B.delete(U.id),B.add(v.id),B}))}).catch(v=>{console.warn("[Agentation] Failed to sync annotation:",v)})},[Y,a,Ve,g,Tn]),Yt=_.useCallback(()=>{Cs(!0),Wt(()=>{fe(null),Cs(!1)},150)},[]),Ht=_.useCallback(O=>{const U=D.findIndex(v=>v.id===O),w=D[U];(J==null?void 0:J.id)===O&&(ao(!0),Wt(()=>{Re(null),Ce(null),He([]),ao(!1)},150)),dt(O),Jo(v=>new Set(v).add(O)),w&&(c==null||c(w),Ve("annotation.delete",{annotation:w})),g&&cr(g,O).catch(v=>{console.warn("[Agentation] Failed to delete annotation from server:",v)}),Wt(()=>{V(v=>v.filter(k=>k.id!==O)),Jo(v=>{const k=new Set(v);return k.delete(O),k}),dt(null),U<D.length-1&&(Kt(U),Wt(()=>Kt(null),200))},150)},[D,J,c,Ve,g]),Ft=_.useCallback(O=>{var U;if(!O){We(null),jt(null),st([]);return}if(We(O.id),(U=O.elementBoundingBoxes)!=null&&U.length){const w=[];for(const v of O.elementBoundingBoxes){const k=v.x+v.width/2,B=v.y+v.height/2-window.scrollY,L=document.elementsFromPoint(k,B).find(H=>!H.closest("[data-annotation-marker]")&&!H.closest("[data-agentation-root]"));L&&w.push(L)}st(w),jt(null)}else if(O.boundingBox){const w=O.boundingBox,v=w.x+w.width/2,k=O.isFixed?w.y+w.height/2:w.y+w.height/2-window.scrollY,B=Lr(v,k);if(B){const j=B.getBoundingClientRect(),L=j.width/w.width,H=j.height/w.height;L<.5||H<.5?jt(null):jt(B)}else jt(null);st([])}else jt(null),st([])},[]),hn=_.useCallback(O=>{if(!J)return;const U={...J,comment:O};V(w=>w.map(v=>v.id===J.id?U:v)),u==null||u(U),Ve("annotation.update",{annotation:U}),g&&Rx(g,J.id,{comment:O}).catch(w=>{console.warn("[Agentation] Failed to update annotation on server:",w)}),ao(!0),Wt(()=>{Re(null),Ce(null),He([]),ao(!1)},150)},[J,u,Ve,g]),vn=_.useCallback(()=>{ao(!0),Wt(()=>{Re(null),Ce(null),He([]),ao(!1)},150)},[]),rn=_.useCallback(()=>{const O=D.length,U=Ke.length>0||!!tt;if(O===0&&an.length===0&&!U)return;if(d==null||d(D),Ve("annotations.clear",{annotations:D}),g){Promise.all(D.map(k=>cr(g,k.id).catch(B=>{console.warn("[Agentation] Failed to delete annotation from server:",B)})));for(const[,k]of hs.current)k&&cr(g,k).catch(()=>{});hs.current.clear();for(const[,k]of yo.current)k&&cr(g,k).catch(()=>{});yo.current.clear()}ze(!0),Te(!0),Ws([]);const w=Bs.current;if(w){const k=w.getContext("2d");k&&k.clearRect(0,0,w.width,w.height)}(Ke.length>0||tt)&&(Ln(k=>k+1),rs(k=>k+1),Wt(()=>{Ot([]),ds(null)},200)),ut&&It(!1),Pt&&tn(""),no.current={rearrange:null,placements:[]},Sd(Lt);const v=O*30+200;Wt(()=>{V([]),io(new Set),localStorage.removeItem(Zd(Lt)),ze(!1)},v),Wt(()=>Te(!1),1500)},[Lt,D,an,Ke,tt,ut,Pt,d,Ve,g]),Vn=_.useCallback(async()=>{const O=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Lt,U=Be&&ut;let w;if(U){if(Ke.length===0&&!tt&&!Pt)return;w=""}else{if(w=Ox(D,O,Jt.outputDetail),!w&&an.length===0&&Ke.length===0&&!tt)return;w||(w=`## Page Feedback: ${O}
`)}if(!U&&an.length>0){const v=new Set;for(const L of D)L.drawingIndex!=null&&v.add(L.drawingIndex);const k=Bs.current;k&&(k.style.visibility="hidden");const B=[],j=window.scrollY;for(let L=0;L<an.length;L++){if(v.has(L))continue;const H=an[L];if(H.points.length<2)continue;const K=H.fixed?H.points:H.points.map(Nn=>({x:Nn.x,y:Nn.y-j}));let ae=1/0,Ee=1/0,Ae=-1/0,Ne=-1/0;for(const Nn of K)ae=Math.min(ae,Nn.x),Ee=Math.min(Ee,Nn.y),Ae=Math.max(Ae,Nn.x),Ne=Math.max(Ne,Nn.y);const me=Ae-ae,ct=Ne-Ee,_t=Math.hypot(me,ct),zt=K[0],Ct=K[K.length-1],it=Math.hypot(Ct.x-zt.x,Ct.y-zt.y);let lt;const St=it<_t*.35,wn=me/Math.max(ct,1);if(St&&_t>20){const Nn=Math.max(me,ct)*.15;let mi=0;for(const Mi of K){const gr=Mi.x-ae<Nn,Wr=Ae-Mi.x<Nn,Fr=Mi.y-Ee<Nn,Xr=Ne-Mi.y<Nn;(gr||Wr)&&(Fr||Xr)&&mi++}lt=mi>K.length*.15?"box":"circle"}else wn>3&&ct<40?lt="underline":it>_t*.5?lt="arrow":lt="drawing";const fn=Math.min(10,K.length),bs=Math.max(1,Math.floor(K.length/fn)),Ks=new Set,Bn=[],Xo=[zt];for(let Nn=bs;Nn<K.length-1;Nn+=bs)Xo.push(K[Nn]);Xo.push(Ct);for(const Nn of Xo){const mi=Lr(Nn.x,Nn.y);if(!mi||Ks.has(mi)||ii(mi,"[data-feedback-toolbar]"))continue;Ks.add(mi);const{name:Mi}=Nl(mi);Bn.includes(Mi)||Bn.push(Mi)}const Go=`${Math.round(ae)},${Math.round(Ee)} → ${Math.round(Ae)},${Math.round(Ne)}`;let Qs;(lt==="circle"||lt==="box")&&Bn.length>0?Qs=`${lt==="box"?"Boxed":"Circled"} **${Bn[0]}**${Bn.length>1?` (and ${Bn.slice(1).join(", ")})`:""} (region: ${Go})`:lt==="underline"&&Bn.length>0?Qs=`Underlined **${Bn[0]}** (${Go})`:lt==="arrow"&&Bn.length>=2?Qs=`Arrow from **${Bn[0]}** to **${Bn[Bn.length-1]}** (${Math.round(zt.x)},${Math.round(zt.y)} → ${Math.round(Ct.x)},${Math.round(Ct.y)})`:Bn.length>0?Qs=`${lt==="arrow"?"Arrow":"Drawing"} near **${Bn.join("**, **")}** (region: ${Go})`:Qs=`Drawing at ${Go}`,B.push(Qs)}k&&(k.style.visibility=""),B.length>0&&(w+=`
**Drawings:**
`,B.forEach((L,H)=>{w+=`${H+1}. ${L}
`}))}if((Ke.length>0||U&&Pt)&&(w+=`
`+Tx(Ke,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ut,wireframePurpose:Pt||void 0},Jt.outputDetail)),tt){const v=Ax(tt,Jt.outputDetail,{width:window.innerWidth,height:window.innerHeight});v&&(w+=`
`+v)}if(y)try{await navigator.clipboard.writeText(w)}catch{}h==null||h(w),I(!0),Wt(()=>I(!1),2e3),Jt.autoClearAfterCopy&&Wt(()=>rn(),500)},[D,an,Ke,tt,ut,Be,sn,Pt,Lt,Jt.outputDetail,es,Jt.autoClearAfterCopy,rn,y,h]),gn=_.useCallback(async()=>{const O=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Lt;let U=Ox(D,O,Jt.outputDetail);if(!U&&Ke.length===0&&!tt)return;if(U||(U=`## Page Feedback: ${O}
`),Ke.length>0&&(U+=`
`+Tx(Ke,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ut,wireframePurpose:Pt||void 0},Jt.outputDetail)),tt){const v=Ax(tt,Jt.outputDetail,{width:window.innerWidth,height:window.innerHeight});v&&(U+=`
`+v)}p&&p(U,D),te("sending"),await new Promise(v=>Wt(v,150));const w=await Ve("submit",{output:U,annotations:D},!0);te(w?"sent":"failed"),Wt(()=>te("idle"),2500),w&&Jt.autoClearAfterCopy&&Wt(()=>rn(),500)},[p,Ve,D,Ke,tt,ut,sn,Lt,Jt.outputDetail,es,Jt.autoClearAfterCopy,rn]);_.useEffect(()=>{if(!Ns)return;const O=10,U=v=>{const k=v.clientX-Ns.x,B=v.clientY-Ns.y,j=Math.sqrt(k*k+B*B);if(!zs&&j>O&&Qo(!0),zs||j>O){let L=Ns.toolbarX+k,H=Ns.toolbarY+B;const K=20,ae=337,Ee=44,Ne=ae-(A?Os==="connected"?297:257:44),me=K-Ne,ct=window.innerWidth-K-ae;L=Math.max(me,Math.min(ct,L)),H=Math.max(K,Math.min(window.innerHeight-Ee-K,H)),Xs({x:L,y:H})}},w=()=>{zs&&(Lo.current=!0),Qo(!1),Zo(null)};return document.addEventListener("mousemove",U),document.addEventListener("mouseup",w),()=>{document.removeEventListener("mousemove",U),document.removeEventListener("mouseup",w)}},[Ns,zs,A,Os]);const Vt=_.useCallback(O=>{var B,j;if(O.target.closest("button")||O.target.closest("[data-agentation-settings-panel]"))return;const U=O.currentTarget.parentElement;if(!U)return;const w=U.getBoundingClientRect(),v=(B=xn==null?void 0:xn.x)!=null?B:w.left,k=(j=xn==null?void 0:xn.y)!=null?j:w.top;Zo({x:O.clientX,y:O.clientY,toolbarX:v,toolbarY:k})},[xn]);if(_.useEffect(()=>{if(!xn)return;const O=()=>{let k=xn.x,B=xn.y;const H=20-(337-(A?Os==="connected"?297:257:44)),K=window.innerWidth-20-337;k=Math.max(H,Math.min(K,k)),B=Math.max(20,Math.min(window.innerHeight-44-20,B)),(k!==xn.x||B!==xn.y)&&Xs({x:k,y:B})};return O(),window.addEventListener("resize",O),()=>window.removeEventListener("resize",O)},[xn,A,Os]),_.useEffect(()=>{const O=U=>{const w=U.target,v=w.tagName==="INPUT"||w.tagName==="TEXTAREA"||w.isContentEditable;if(U.key==="Escape"){if(Be){wt?ft(null):ji();return}if(Yn){Ys(!1);return}if(On.length>0){Ls([]);return}Y||A&&(Xn(),T(!1))}if((U.metaKey||U.ctrlKey)&&U.shiftKey&&(U.key==="f"||U.key==="F")){U.preventDefault(),Xn(),A?Qi():T(!0);return}if(!(v||U.metaKey||U.ctrlKey)&&((U.key==="p"||U.key==="P")&&(U.preventDefault(),Xn(),X()),(U.key==="l"||U.key==="L")&&(U.preventDefault(),Xn(),Yn&&Ys(!1),Me&&nt(!1),Y&&Yt(),Be?ji():et(!0)),(U.key==="h"||U.key==="H")&&D.length>0&&(U.preventDefault(),Xn(),N(k=>!k)),(U.key==="c"||U.key==="C")&&(D.length>0||Ke.length>0||tt)&&(U.preventDefault(),Xn(),Vn()),(U.key==="x"||U.key==="X")&&(D.length>0||Ke.length>0||tt)&&(U.preventDefault(),Xn(),rn(),Ke.length>0&&Ot([]),tt&&ds(null)),U.key==="s"||U.key==="S")){const k=ma(Jt.webhookUrl)||ma(C||"");D.length>0&&k&&re==="idle"&&(U.preventDefault(),Xn(),gn())}};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[A,Yn,Be,wt,Ke,tt,Y,D.length,Jt.webhookUrl,C,re,gn,X,Vn,rn,On]),!ot||q)return null;const An=D.length>0,ks=D.filter(O=>!Ao.has(O.id)&&O.kind!=="placement"&&O.kind!=="rearrange"),wo=ks.length>0,en=D.filter(O=>Ao.has(O.id)),Ds=O=>{const B=O.x/100*window.innerWidth,j=typeof O.y=="string"?parseFloat(O.y):O.y,L={};window.innerHeight-j-22-10<80&&(L.top="auto",L.bottom="calc(100% + 10px)");const K=B-200/2,ae=10;if(K<ae){const Ee=ae-K;L.left=`calc(50% + ${Ee}px)`}else if(K+200>window.innerWidth-ae){const Ee=K+200-(window.innerWidth-ae);L.left=`calc(50% - ${Ee}px)`}return L};return zl.createPortal(l.jsxs("div",{ref:ce,style:{display:"contents"},"data-agentation-theme":Gn?"dark":"light","data-agentation-accent":Jt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${qe.toolbar}${M?` ${M}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:xn?{left:xn.x,top:xn.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${qe.toolbarContainer} ${A?qe.expanded:qe.collapsed} ${xo?qe.entrance:""} ${W?qe.hiding:""} ${!Jt.webhooksEnabled&&(ma(Jt.webhookUrl)||ma(C||""))?qe.serverConnected:""}`,onClick:A?void 0:O=>{if(Lo.current){Lo.current=!1,O.preventDefault();return}T(!0)},onMouseDown:Vt,role:A?void 0:"button",tabIndex:A?-1:0,title:A?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${qe.toggleContent} ${A?qe.hidden:qe.visible}`,children:[l.jsx(Y3,{size:24}),wo&&l.jsx("span",{className:`${qe.badge} ${A?qe.fadeOut:""} ${xo?qe.entrance:""}`,children:ks.length})]}),l.jsxs("div",{className:`${qe.controlsContent} ${A?qe.visible:qe.hidden} ${xn&&xn.y<100?qe.tooltipBelow:""} ${Ye||Me?qe.tooltipsHidden:""} ${Wn?qe.tooltipsInSession:""}`,onMouseEnter:ps,onMouseLeave:oo,children:[l.jsxs("div",{className:`${qe.buttonWrapper} ${xn&&xn.x<120?qe.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:qe.controlButton,onClick:O=>{O.stopPropagation(),Xn(),X()},"data-active":ee,children:l.jsx(q3,{size:24,isPaused:ee})}),l.jsxs("span",{className:qe.buttonTooltip,children:[ee?"Resume animations":"Pause animations",l.jsx("span",{className:qe.shortcut,children:"P"})]})]}),l.jsxs("div",{className:qe.buttonWrapper,children:[l.jsx("button",{className:`${qe.controlButton} ${Gn?"":qe.light}`,onClick:O=>{O.stopPropagation(),Xn(),Yn&&Ys(!1),Me&&nt(!1),Y&&Yt(),Be?ji():et(!0)},"data-active":Be,style:Be&&ut?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(oj,{size:21})}),l.jsxs("span",{className:qe.buttonTooltip,children:[Be?"Exit layout mode":"Layout mode",l.jsx("span",{className:qe.shortcut,children:"L"})]})]}),l.jsxs("div",{className:qe.buttonWrapper,children:[l.jsx("button",{className:qe.controlButton,onClick:O=>{O.stopPropagation(),Xn(),N(!z)},disabled:!An||Be,children:l.jsx(G3,{size:24,isOpen:z})}),l.jsxs("span",{className:qe.buttonTooltip,children:[z?"Hide markers":"Show markers",l.jsx("span",{className:qe.shortcut,children:"H"})]})]}),l.jsxs("div",{className:qe.buttonWrapper,children:[l.jsx("button",{className:`${qe.controlButton} ${Se?qe.statusShowing:""}`,onClick:O=>{O.stopPropagation(),Xn(),Vn()},disabled:Be&&ut?Ke.length===0&&!((lo=tt==null?void 0:tt.sections)!=null&&lo.length):!An&&an.length===0&&Ke.length===0&&!((co=tt==null?void 0:tt.sections)!=null&&co.length),"data-active":Se,children:l.jsx(F3,{size:24,copied:Se,tint:Be&&ut&&(Ke.length>0||(So=tt==null?void 0:tt.sections)!=null&&So.length)?"#f97316":void 0})}),l.jsxs("span",{className:qe.buttonTooltip,children:[Be&&ut?"Copy layout":"Copy feedback",l.jsx("span",{className:qe.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${qe.buttonWrapper} ${qe.sendButtonWrapper} ${A&&!Jt.webhooksEnabled&&(ma(Jt.webhookUrl)||ma(C||""))?qe.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${qe.controlButton} ${re==="sent"||re==="failed"?qe.statusShowing:""}`,onClick:O=>{O.stopPropagation(),Xn(),gn()},disabled:!An||!ma(Jt.webhookUrl)&&!ma(C||"")||re==="sending","data-no-hover":re==="sent"||re==="failed",tabIndex:ma(Jt.webhookUrl)||ma(C||"")?0:-1,children:[l.jsx(X3,{size:24,state:re}),An&&re==="idle"&&l.jsx("span",{className:qe.buttonBadge,children:D.length})]}),l.jsxs("span",{className:qe.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:qe.shortcut,children:"S"})]})]}),l.jsxs("div",{className:qe.buttonWrapper,children:[l.jsx("button",{className:qe.controlButton,onClick:O=>{O.stopPropagation(),Xn(),rn()},disabled:!An&&an.length===0&&Ke.length===0&&!((hi=tt==null?void 0:tt.sections)!=null&&hi.length),"data-danger":!0,children:l.jsx(Q3,{size:24})}),l.jsxs("span",{className:qe.buttonTooltip,children:["Clear all",l.jsx("span",{className:qe.shortcut,children:"X"})]})]}),l.jsxs("div",{className:qe.buttonWrapper,children:[l.jsx("button",{className:qe.controlButton,onClick:O=>{O.stopPropagation(),Xn(),Be&&ji(),nt(!Me)},children:l.jsx(K3,{size:24})}),g&&Os!=="disconnected"&&l.jsx("span",{className:`${qe.mcpIndicator} ${qe[Os]} ${Me?qe.hidden:""}`,title:Os==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:qe.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:qe.divider}),l.jsxs("div",{className:`${qe.buttonWrapper} ${xn&&typeof window<"u"&&xn.x>window.innerWidth-120?qe.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:qe.controlButton,onClick:O=>{O.stopPropagation(),Xn(),Qi()},children:l.jsx(Z3,{size:24})}),l.jsxs("span",{className:qe.buttonTooltip,children:["Exit",l.jsx("span",{className:qe.shortcut,children:"Esc"})]})]})]}),l.jsx(R8,{visible:Be&&A,activeType:wt,onSelect:O=>{ft(wt===O?null:O)},isDarkMode:Gn,sectionCount:(Wo=tt==null?void 0:tt.sections.length)!=null?Wo:0,onDetectSections:()=>{var j,L;const O=Y8(),U=(j=tt==null?void 0:tt.sections)!=null?j:[],w=new Set(U.map(H=>H.selector)),v=O.filter(H=>!w.has(H.selector)),k=[...U,...v],B=[...(L=tt==null?void 0:tt.originalOrder)!=null?L:[],...v.map(H=>H.id)];ds({sections:k,originalOrder:B,detectedAt:Date.now()})},placementCount:Ke.length,onClearPlacements:()=>{Ln(O=>O+1),rs(O=>O+1),Wt(()=>{ds({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:ut,onBlankCanvasChange:O=>{const U={sections:[],originalOrder:[],detectedAt:Date.now()};O?(Ro.current={rearrange:tt,placements:Ke},ds(no.current.rearrange||U),Ot(no.current.placements),ft(null)):(no.current={rearrange:tt,placements:Ke},ds(Ro.current.rearrange||U),Ot(Ro.current.placements)),It(O)},wireframePurpose:Pt,onWireframePurposeChange:tn,Tooltip:Pr,onDragStart:(O,U)=>{var Ee;U.preventDefault();const w=kt[O];let v=null,k=!1;const B=U.clientX,j=U.clientY,L=U.target.closest("[data-feedback-toolbar]"),H=(Ee=L==null?void 0:L.getBoundingClientRect().top)!=null?Ee:window.innerHeight,K=Ae=>{const Ne=Ae.clientX-B,me=Ae.clientY-j;if(!k&&(Math.abs(Ne)>4||Math.abs(me)>4)&&(k=!0,v=document.createElement("div"),v.className=`${Pe.dragPreview}${ut?` ${Pe.dragPreviewWireframe}`:""}`,document.body.appendChild(v)),!v)return;const ct=Math.max(0,H-Ae.clientY),_t=Math.min(1,ct/180),zt=1-Math.pow(1-_t,2),Ct=28,it=20,lt=Math.min(140,w.width*.18),St=Math.min(90,w.height*.18),wn=Ct+(lt-Ct)*zt,fn=it+(St-it)*zt;v.style.width=`${wn}px`,v.style.height=`${fn}px`,v.style.left=`${Ae.clientX-wn/2}px`,v.style.top=`${Ae.clientY-fn/2}px`,v.style.opacity=`${.5+.5*zt}`,v.textContent=zt>.25?O:""},ae=Ae=>{if(window.removeEventListener("mousemove",K),window.removeEventListener("mouseup",ae),v&&document.body.removeChild(v),k){const Ne=w.width,me=w.height,ct=window.scrollY,_t=Math.max(0,Ae.clientX-Ne/2),zt=Math.max(0,Ae.clientY+ct-me/2),Ct={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:O,x:_t,y:zt,width:Ne,height:me,scrollY:ct,timestamp:Date.now()};Ot(it=>[...it,Ct]),ft(null),gs.current=new Set,go(it=>it+1)}};window.addEventListener("mousemove",K),window.addEventListener("mouseup",ae)}}),l.jsx(JM,{settings:Jt,onSettingsChange:O=>Ci(U=>({...U,...O})),isDarkMode:Gn,onToggleTheme:ls,isDevMode:Eo,connectionStatus:Os,endpoint:g,isVisible:Ge,toolbarNearBottom:!!xn&&xn.y<230,settingsPage:_e,onSettingsPageChange:Ze,onHideToolbar:fi})]})}),(Be||yt)&&l.jsx("div",{className:`${Pe.blankCanvas} ${_n?Pe.visible:""} ${Nt?Pe.gridActive:""}`,style:{"--canvas-opacity":bt},"data-feedback-toolbar":!0}),Be&&ut&&_n&&l.jsxs("div",{className:Pe.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:Pe.wireframeOpacityRow,children:[l.jsx("span",{className:Pe.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:Pe.wireframeOpacitySlider,min:0,max:1,step:.01,value:bt,onChange:O=>dn(Number(O.target.value))})]}),l.jsxs("div",{className:Pe.wireframeNoticeTitleRow,children:[l.jsx("span",{className:Pe.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:Pe.wireframeNoticeDivider}),l.jsx("button",{className:Pe.wireframeStartOver,onClick:()=>{Ln(O=>O+1),ds({sections:[],originalOrder:[],detectedAt:Date.now()}),no.current={rearrange:null,placements:[]},tn(""),Sd(Lt)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Be||yt)&&l.jsx(E8,{placements:Ke,onChange:Ot,activeComponent:yt?null:wt,onActiveComponentChange:ft,isDarkMode:Gn,exiting:yt,onInteractionChange:bn,passthrough:!wt,extraSnapRects:tt==null?void 0:tt.sections.map(O=>O.currentRect),deselectSignal:jo,clearSignal:Qt,wireframe:ut,onSelectionChange:(O,U)=>{gs.current=O,U||(ys.current=new Set,as(w=>w+1))},onDragMove:(O,U)=>{const w=ys.current;if(!(!w.size||!tt)){if(!on.current){on.current=new Map;for(const v of tt.sections)w.has(v.id)&&on.current.set(v.id,{x:v.currentRect.x,y:v.currentRect.y})}for(const v of tt.sections){if(!w.has(v.id)||!on.current.get(v.id))continue;const B=document.querySelector(`[data-rearrange-section="${v.id}"]`);B&&(B.style.transform=`translate(${O}px, ${U}px)`)}}},onDragEnd:(O,U,w)=>{const v=ys.current,k=on.current;if(on.current=null,!(!v.size||!tt||!k)){for(const B of v){const j=document.querySelector(`[data-rearrange-section="${B}"]`);j&&(j.style.transform="")}w&&ds(B=>B&&{...B,sections:B.sections.map(j=>{const L=k.get(j.id);return L?{...j,currentRect:{...j.currentRect,x:Math.max(0,L.x+O),y:Math.max(0,L.y+U)}}:j})})}}}),(Be||yt)&&tt&&l.jsx(X8,{rearrangeState:tt,onChange:ds,isDarkMode:Gn,exiting:yt,blankCanvas:ut,extraSnapRects:Ke.map(O=>({x:O.x,y:O.y,width:O.width,height:O.height})),clearSignal:nn,deselectSignal:Bo,onSelectionChange:(O,U)=>{ys.current=O,U||(gs.current=new Set,go(w=>w+1))},onDragMove:(O,U)=>{const w=gs.current;if(w.size){if(!on.current){on.current=new Map;for(const v of Ke)w.has(v.id)&&on.current.set(v.id,{x:v.x,y:v.y})}for(const v of w){const k=document.querySelector(`[data-design-placement="${v}"]`);k&&(k.style.transform=`translate(${O}px, ${U}px)`)}}},onDragEnd:(O,U,w)=>{const v=gs.current,k=on.current;if(on.current=null,!(!v.size||!k)){for(const B of v){const j=document.querySelector(`[data-design-placement="${B}"]`);j&&(j.style.transform="")}w&&Ot(B=>B.map(j=>{const L=k.get(j.id);return L?{...j,x:Math.max(0,L.x+O),y:Math.max(0,L.y+U)}:j}))}}}),l.jsx("canvas",{ref:Bs,className:`${qe.drawCanvas} ${Yn?qe.active:""}`,style:{opacity:vo?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:qe.markersLayer,"data-feedback-toolbar":!0,children:[de&&ks.filter(O=>!O.isFixed).map((O,U,w)=>l.jsx(zx,{annotation:O,globalIndex:ks.findIndex(v=>v.id===O.id),layerIndex:U,layerSize:w.length,isExiting:De,isClearing:he,isAnimated:Oi.has(O.id),isHovered:!De&&Qe===O.id,isDeleting:Rt===O.id,isEditingAny:!!J,renumberFrom:qt,markerClickBehavior:Jt.markerClickBehavior,tooltipStyle:Ds(O),onHoverEnter:v=>!De&&v.id!==ei.current&&Ft(v),onHoverLeave:()=>Ft(null),onClick:v=>Jt.markerClickBehavior==="delete"?Ht(v.id):je(v),onContextMenu:je},O.id)),de&&!De&&en.filter(O=>!O.isFixed).map(O=>l.jsx($x,{annotation:O},O.id))]}),l.jsxs("div",{className:qe.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[de&&ks.filter(O=>O.isFixed).map((O,U,w)=>l.jsx(zx,{annotation:O,globalIndex:ks.findIndex(v=>v.id===O.id),layerIndex:U,layerSize:w.length,isExiting:De,isClearing:he,isAnimated:Oi.has(O.id),isHovered:!De&&Qe===O.id,isDeleting:Rt===O.id,isEditingAny:!!J,renumberFrom:qt,markerClickBehavior:Jt.markerClickBehavior,tooltipStyle:Ds(O),onHoverEnter:v=>!De&&v.id!==ei.current&&Ft(v),onHoverLeave:()=>Ft(null),onClick:v=>Jt.markerClickBehavior==="delete"?Ht(v.id):je(v),onContextMenu:je},O.id)),de&&!De&&en.filter(O=>O.isFixed).map(O=>l.jsx($x,{annotation:O,fixed:!0},O.id))]}),A&&l.jsxs("div",{className:qe.overlay,"data-feedback-toolbar":!0,style:Y||J?{zIndex:99999}:void 0,children:[(ie==null?void 0:ie.rect)&&!Y&&!Mt&&!ro&&l.jsx("div",{className:`${qe.hoverHighlight} ${qe.enter}`,style:{left:ie.rect.left,top:ie.rect.top,width:ie.rect.width,height:ie.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),On.filter(O=>document.contains(O.element)).map((O,U)=>{const w=O.element.getBoundingClientRect(),v=On.length>1;return l.jsx("div",{className:v?qe.multiSelectOutline:qe.singleSelectOutline,style:{position:"fixed",left:w.left,top:w.top,width:w.width,height:w.height,...v?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},U)}),Qe&&!Y&&(()=>{var k;const O=D.find(B=>B.id===Qe);if(!(O!=null&&O.boundingBox))return null;if((k=O.elementBoundingBoxes)!=null&&k.length)return vt.length>0?vt.filter(B=>document.contains(B)).map((B,j)=>{const L=B.getBoundingClientRect();return l.jsx("div",{className:`${qe.multiSelectOutline} ${qe.enter}`,style:{left:L.left,top:L.top,width:L.width,height:L.height}},`hover-outline-live-${j}`)}):O.elementBoundingBoxes.map((B,j)=>l.jsx("div",{className:`${qe.multiSelectOutline} ${qe.enter}`,style:{left:B.x,top:B.y-pt,width:B.width,height:B.height}},`hover-outline-${j}`));const U=ht&&document.contains(ht)?ht.getBoundingClientRect():null,w=U?{x:U.left,y:U.top,width:U.width,height:U.height}:{x:O.boundingBox.x,y:O.isFixed?O.boundingBox.y:O.boundingBox.y-pt,width:O.boundingBox.width,height:O.boundingBox.height},v=O.isMultiSelect;return l.jsx("div",{className:`${v?qe.multiSelectOutline:qe.singleSelectOutline} ${qe.enter}`,style:{left:w.x,top:w.y,width:w.width,height:w.height,...v?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),ie&&!Y&&!Mt&&!ro&&l.jsxs("div",{className:`${qe.hoverTooltip} ${qe.enter}`,style:{left:Math.max(8,Math.min($.x,window.innerWidth-100)),top:Math.max($.y-(ie.reactComponents?48:32),8)},children:[ie.reactComponents&&l.jsx("div",{className:qe.hoverReactPath,children:ie.reactComponents}),l.jsx("div",{className:qe.hoverElementName,children:ie.elementName})]}),Y&&l.jsxs(l.Fragment,{children:[(Fo=Y.multiSelectElements)!=null&&Fo.length?Y.multiSelectElements.filter(O=>document.contains(O)).map((O,U)=>{const w=O.getBoundingClientRect();return l.jsx("div",{className:`${qe.multiSelectOutline} ${Un?qe.exit:qe.enter}`,style:{left:w.left,top:w.top,width:w.width,height:w.height}},`pending-multi-${U}`)}):Y.targetElement&&document.contains(Y.targetElement)?(()=>{const O=Y.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${qe.singleSelectOutline} ${Un?qe.exit:qe.enter}`,style:{left:O.left,top:O.top,width:O.width,height:O.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():Y.boundingBox&&l.jsx("div",{className:`${Y.isMultiSelect?qe.multiSelectOutline:qe.singleSelectOutline} ${Un?qe.exit:qe.enter}`,style:{left:Y.boundingBox.x,top:Y.boundingBox.y-pt,width:Y.boundingBox.width,height:Y.boundingBox.height,...Y.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const O=Y.x,U=Y.isFixed?Y.y:Y.y-pt;return l.jsxs(l.Fragment,{children:[l.jsx(VM,{x:O,y:U,isMultiSelect:Y.isMultiSelect,isExiting:Un}),l.jsx(Kd,{ref:$i,element:Y.element,selectedText:Y.selectedText,computedStyles:Y.computedStylesObj,placeholder:Y.element==="Area selection"?"What should change in this area?":Y.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:at,onCancel:Yt,isExiting:Un,lightMode:!Gn,accentColor:Y.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,O/100*window.innerWidth)),...U>window.innerHeight-290?{bottom:window.innerHeight-U+20}:{top:U+20}}})]})})()]}),J&&l.jsxs(l.Fragment,{children:[(la=J.elementBoundingBoxes)!=null&&la.length?mt.length>0?mt.filter(O=>document.contains(O)).map((O,U)=>{const w=O.getBoundingClientRect();return l.jsx("div",{className:`${qe.multiSelectOutline} ${qe.enter}`,style:{left:w.left,top:w.top,width:w.width,height:w.height}},`edit-multi-live-${U}`)}):J.elementBoundingBoxes.map((O,U)=>l.jsx("div",{className:`${qe.multiSelectOutline} ${qe.enter}`,style:{left:O.x,top:O.y-pt,width:O.width,height:O.height}},`edit-multi-${U}`)):(()=>{const O=rt&&document.contains(rt)?rt.getBoundingClientRect():null,U=O?{x:O.left,y:O.top,width:O.width,height:O.height}:J.boundingBox?{x:J.boundingBox.x,y:J.isFixed?J.boundingBox.y:J.boundingBox.y-pt,width:J.boundingBox.width,height:J.boundingBox.height}:null;return U?l.jsx("div",{className:`${J.isMultiSelect?qe.multiSelectOutline:qe.singleSelectOutline} ${qe.enter}`,style:{left:U.x,top:U.y,width:U.width,height:U.height,...J.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(Kd,{ref:ki,element:J.element,selectedText:J.selectedText,computedStyles:I8(J.computedStyles),placeholder:"Edit your feedback...",initialValue:J.comment,submitLabel:"Save",onSubmit:hn,onCancel:vn,onDelete:()=>Ht(J.id),isExiting:No,lightMode:!Gn,accentColor:J.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const O=J.isFixed?J.y:J.y-pt;return{left:Math.max(160,Math.min(window.innerWidth-160,J.x/100*window.innerWidth)),...O>window.innerHeight-290?{bottom:window.innerHeight-O+20}:{top:O+20}}})()})]}),ro&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:Ps,className:qe.dragSelection}),l.jsx("div",{ref:Vo,className:qe.highlightsContainer})]})]})]}),document.body)}var n7=Object.freeze({}),s7=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(e,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(e,{id:e,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(e,{...u}),this.baseValues.set(e,{...u}),this.notifyGlobal()}updatePanel(e,n,i,a){var b;const c=this.panels.get(e);if(!c){this.registerPanel(e,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[C,M]of Object.entries(h))p[C]=this.normalizePreservedValue(c.values[C],M,d.get(C));this.initTransitionModes(i,"",p);for(const[C,M]of Object.entries(c.values)){if(!C.endsWith(".__mode"))continue;const A=C.slice(0,-7),T=d.get(A);(T==null?void 0:T.type)==="transition"&&(p[C]=M)}const y={id:e,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(e,y),this.snapshots.set(e,{...p});const g=(b=this.baseValues.get(e))!=null?b:{},x={};for(const[C,M]of Object.entries(h))x[C]=this.normalizePreservedValue(g[C],M,d.get(C));for(const[C,M]of Object.entries(p))C.endsWith(".__mode")&&(x[C]=M);this.baseValues.set(e,x),this.notify(e),this.notifyGlobal()}unregisterPanel(e){this.panels.delete(e),this.listeners.delete(e),this.snapshots.delete(e),this.actionListeners.delete(e),this.baseValues.delete(e),this.notifyGlobal()}updateValue(e,n,i){var u;const a=this.panels.get(e);if(!a)return;a.values[n]=i;const c=this.activePreset.get(e);if(c){const h=((u=this.presets.get(e))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(e);d&&(d[n]=i)}this.snapshots.set(e,{...a.values}),this.notify(e)}updateSpringMode(e,n,i){this.updateTransitionMode(e,n,i)}getSpringMode(e,n){const i=this.getTransitionMode(e,n);return i==="easing"?"simple":i}updateTransitionMode(e,n,i){const a=this.panels.get(e);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(e,{...a.values}),this.notify(e))}getTransitionMode(e,n){const i=this.panels.get(e);return i&&i.values[`${n}.__mode`]||"simple"}getValue(e,n){const i=this.panels.get(e);return i==null?void 0:i.values[n]}getValues(e){var n;return(n=this.snapshots.get(e))!=null?n:n7}getPanels(){return Array.from(this.panels.values())}getPanel(e){return this.panels.get(e)}subscribe(e,n){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(n),()=>{var i;(i=this.listeners.get(e))==null||i.delete(n)}}subscribeGlobal(e){return this.globalListeners.add(e),()=>this.globalListeners.delete(e)}subscribeActions(e,n){return this.actionListeners.has(e)||this.actionListeners.set(e,new Set),this.actionListeners.get(e).add(n),()=>{var i;(i=this.actionListeners.get(e))==null||i.delete(n)}}triggerAction(e,n){var i;(i=this.actionListeners.get(e))==null||i.forEach(a=>a(n))}savePreset(e,n){var d;const i=this.panels.get(e);if(!i)throw new Error(`Panel ${e} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(e))!=null?d:[];return this.presets.set(e,[...u,c]),this.activePreset.set(e,a),this.snapshots.set(e,{...i.values}),this.notify(e),a}loadPreset(e,n){var u;const i=this.panels.get(e);if(!i)return;const c=((u=this.presets.get(e))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(e,{...i.values}),this.activePreset.set(e,n),this.notify(e))}deletePreset(e,n){var c;const i=(c=this.presets.get(e))!=null?c:[];this.presets.set(e,i.filter(u=>u.id!==n)),this.activePreset.get(e)===n&&this.activePreset.set(e,null);const a=this.panels.get(e);a&&this.snapshots.set(e,{...a.values}),this.notify(e)}getPresets(e){var n;return(n=this.presets.get(e))!=null?n:[]}getActivePresetId(e){var n;return(n=this.activePreset.get(e))!=null?n:null}clearActivePreset(e){const n=this.panels.get(e),i=this.baseValues.get(e);n&&i&&(n.values={...i},this.snapshots.set(e,{...n.values})),this.activePreset.set(e,null),this.notify(e)}resolveShortcutTarget(e,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==e.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const e=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&e.push({panelId:i.id,path:a,control:u,shortcut:c})}return e}findControlByPath(e,n){for(const i of e){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(e){var n;(n=this.listeners.get(e))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(e=>e())}initTransitionModes(e,n,i){for(const[a,c]of Object.entries(e)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(e,n,i){var c;const a=[];for(const[u,d]of Object.entries(e)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),y=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:y});else if(typeof d=="number"){const{min:g,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:g,max:x,step:b,shortcut:y})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:y});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const g=d,x="_collapsed"in g?!g._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(g,h,i)})}}return a}flattenValues(e,n){var a,c,u;const i={};for(const[d,h]of Object.entries(e)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const y=h.options[0],g=typeof y=="string"?y:y.value;i[p]=(a=h.default)!=null?a:g}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="spring"}isEasingConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="easing"}isActionConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="action"}isSelectConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="select"&&"options"in e&&Array.isArray(e.options)}isColorConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="color"}isTextConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="text"}isHexColor(e){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(e)}formatLabel(e){return e.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(e){return e>=0&&e<=1?{min:0,max:1,step:.01}:e>=0&&e<=10?{min:0,max:e*3||10,step:.1}:e>=0&&e<=100?{min:0,max:e*3||100,step:1}:e>=0?{min:0,max:e*3||1e3,step:10}:{min:e*3,max:-e*3,step:1}}inferStep(e,n){const i=n-e;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(e,n,i){var a,c,u;if(e===void 0||!i)return n;switch(i.type){case"slider":{if(typeof e!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,e));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof e=="boolean"?e:n;case"select":{if(typeof e!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(e)?e:n}case"color":case"text":return typeof e=="string"?e:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(e)?e:n:this.isEasingConfig(n)&&this.isEasingConfig(e)?e:n;case"action":return n;default:return n}}roundToStep(e,n,i,a){const c=n+Math.round((e-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(e){const n=String(e),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(e){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(e),n}},cn=new s7;function o7(e,n,i){const a=_.useId(),c=`${e}-${a}`,u=_.useRef(n),d=JSON.stringify(n);u.current=n;const h=_.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=_.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const y=JSON.stringify(i==null?void 0:i.shortcuts);_.useEffect(()=>(cn.registerPanel(c,e,u.current,p.current),()=>cn.unregisterPanel(c)),[c,e]);const g=_.useRef(!1);_.useEffect(()=>{if(!g.current){g.current=!0;return}cn.updatePanel(c,e,u.current,p.current)},[c,e,d,y]),_.useEffect(()=>cn.subscribeActions(c,b=>{var C;(C=h.current)==null||C.call(h,b)}),[c]);const x=_.useSyncExternalStore(b=>cn.subscribe(c,b),()=>cn.getValues(c),()=>cn.getValues(c));return b2(n,x,"")}function b2(e,n,i){var c,u,d,h,p,y,g,x,b,C;const a={};for(const[M,A]of Object.entries(e)){if(M==="_collapsed")continue;const T=i?`${i}.${M}`:M;if(Array.isArray(A)&&A.length<=4&&typeof A[0]=="number")a[M]=(c=n[T])!=null?c:A[0];else if(typeof A=="number"||typeof A=="boolean"||typeof A=="string")a[M]=(u=n[T])!=null?u:A;else if(i7(A)||a7(A))a[M]=(d=n[T])!=null?d:A;else if(r7(A))a[M]=(h=n[T])!=null?h:A;else if(l7(A)){const D=(p=A.default)!=null?p:d7(A.options);a[M]=(y=n[T])!=null?y:D}else c7(A)?a[M]=(x=(g=n[T])!=null?g:A.default)!=null?x:"#000000":u7(A)?a[M]=(C=(b=n[T])!=null?b:A.default)!=null?C:"":typeof A=="object"&&A!==null&&(a[M]=b2(A,n,T))}return a}function Hl(e,n){return typeof e=="object"&&e!==null&&"type"in e&&e.type===n}function i7(e){return Hl(e,"spring")}function a7(e){return Hl(e,"easing")}function r7(e){return Hl(e,"action")}function l7(e){return Hl(e,"select")&&"options"in e&&Array.isArray(e.options)}function c7(e){return Hl(e,"color")}function u7(e){return Hl(e,"text")}function d7(e){const n=e[0];return typeof n=="string"?n:n.value}function bp(e){const n=e.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function Pd(e,n){const i=Math.round(e/n)*n;return parseFloat(i.toFixed(bp(n)))}function Bc(e,n){var d,h,p,y;const i=(d=e.min)!=null?d:0,c=((h=e.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(y=e.step)!=null?y:1}function Lc(e,n,i,a,c){var y,g;const u=cn.getValue(e,n),d=(y=i.min)!=null?y:0,h=(g=i.max)!=null?g:1,p=Math.max(d,Math.min(h,u+c*a));cn.updateValue(e,n,Pd(p,a))}function f7(e,n,i){const a=(e-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):e}function Md(){const e=document.activeElement;if(!e)return!1;const n=e.tagName;return n==="INPUT"||n==="TEXTAREA"||e.contentEditable==="true"}function Om(e){if(e.altKey)return"alt";if(e.shiftKey)return"shift";if(e.metaKey)return"meta"}function v2(e,n){for(const i of e){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=v2(i.children,n);if(a)return a}}return null}var Ed=4;function h7(e){switch(e){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function m7(e){var c;const n=(c=e.interaction)!=null?c:"scroll",i=h7(n);return e.key?`${w2(e.modifier)}${e.key.toUpperCase()}+${i}`:i}function p7(e){return e.key?`${w2(e.modifier)}${e.key.toUpperCase()}`:"Press"}function w2(e){return e==="alt"?"⌥":e==="shift"?"⇧":e==="meta"?"⌘":""}var S2=_.createContext({activePanelId:null,activePath:null});function _7({children:e}){const[n,i]=_.useState({activePanelId:null,activePath:null}),a=_.useRef(new Set),c=_.useRef(!1),u=_.useRef(null),d=_.useRef(0),h=_.useCallback(p=>{var y;for(const g of a.current){const x=cn.getPanels();for(const b of x)for(const[C,M]of Object.entries(b.shortcuts)){if(!M.key||M.key.toLowerCase()!==g||((y=M.interaction)!=null?y:"scroll")!==p)continue;const A=v2(b.controls,C);if(A&&A.type==="slider")return{panelId:b.id,path:C,control:A,shortcut:M}}}return null},[]);return _.useEffect(()=>{const p=A=>{if(Md())return;const T=A.key.toLowerCase();if((T==="arrowleft"||T==="arrowright"||T==="arrowup"||T==="arrowdown")&&a.current.size>0){const N=h("scroll")||h("drag")||h("move");if(N&&N.control.type==="slider"){A.preventDefault();const q=T==="arrowright"||T==="arrowup"?1:-1,G=Bc(N.control,N.shortcut);Lc(N.panelId,N.path,N.control,G,q);return}}const D=a.current.has(T);a.current.add(T);const V=Om(A),z=cn.resolveShortcutTarget(T,V);if(z&&(i({activePanelId:z.panelId,activePath:z.path}),!D&&z.control.type==="toggle")){const N=cn.getValue(z.panelId,z.path);cn.updateValue(z.panelId,z.path,!N)}D||(u.current=null,d.current=0)},y=A=>{const T=A.key.toLowerCase();if(a.current.delete(T),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let D=!1;for(const V of a.current){const z=Om(A),N=cn.resolveShortcutTarget(V,z);if(N){i({activePanelId:N.panelId,activePath:N.path}),D=!0;break}}D||i({activePanelId:null,activePath:null})}},g=A=>{var V,z;if(Md())return;const T=Om(A);if(a.current.size>0)for(const N of a.current){const q=cn.resolveShortcutTarget(N,T);if(!q)continue;const{panelId:G,path:W,control:Z}=q;if(((z=(V=Z.shortcut)==null?void 0:V.interaction)!=null?z:"scroll")!=="scroll"||Z.type!=="slider")continue;A.preventDefault();const de=Bc(Z,Z.shortcut),pe=A.deltaY>0?-1:1;Lc(G,W,Z,de,pe);return}const D=cn.resolveScrollOnlyTargets();for(const{panelId:N,path:q,control:G,shortcut:W}of D){if(G.type!=="slider")continue;A.preventDefault();const Z=Bc(G,W),ce=A.deltaY>0?-1:1;Lc(N,q,G,Z,ce);return}},x=A=>{if(Md()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=A.clientX,d.current=0,A.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},C=A=>{if(Md()||a.current.size===0)return;if(c.current){const D=h("drag");if(D&&u.current!==null){const V=A.clientX-u.current;u.current=A.clientX,d.current+=V;const z=Bc(D.control,D.shortcut),N=Math.trunc(d.current/Ed);N!==0&&(d.current-=N*Ed,Lc(D.panelId,D.path,D.control,z,N))}return}const T=h("move");if(T){if(u.current===null){u.current=A.clientX;return}const D=A.clientX-u.current;u.current=A.clientX,d.current+=D;const V=Bc(T.control,T.shortcut),z=Math.trunc(d.current/Ed);z!==0&&(d.current-=z*Ed,Lc(T.panelId,T.path,T.control,V,z))}},M=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",y),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",C),window.addEventListener("blur",M),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",y),window.removeEventListener("wheel",g),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",C),window.removeEventListener("blur",M)}},[h]),l.jsx(S2.Provider,{value:n,children:e})}var r_="M6 9.5L12 15.5L18 9.5",g7="M5 12.75L10 19L19 5",zm={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},y7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],x7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Ux={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Jd({title:e,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=_.useState(i),[y,g]=_.useState(!i),x=_.useRef(null),[b,C]=_.useState(void 0),[M,A]=_.useState(typeof window<"u"?window.innerHeight:800);_.useEffect(()=>{if(!a)return;const V=()=>A(window.innerHeight);return window.addEventListener("resize",V),()=>window.removeEventListener("resize",V)},[a]),_.useEffect(()=>{const V=x.current;if(!V)return;const z=new ResizeObserver(()=>{if(h){const N=V.offsetHeight;C(q=>q===N?q:N)}});return z.observe(V),()=>z.disconnect()},[h]);const T=()=>{if(c&&a)return;const V=!h;p(V),g(!V),u==null||u(V)},D=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:T,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:e})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:e})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Ux.path,fill:"currentColor"}),Ux.circles.map((V,z)=>l.jsx("circle",{cx:V.cx,cy:V.cy,r:V.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},z))]}),!a&&l.jsx(li.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:r_})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:V=>V.stopPropagation(),children:d})]}),l.jsx(rf,{initial:!1,children:h&&l.jsx(li.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:D});const V=h?{width:280,height:b!==void 0?Math.min(b+10,M-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(li.div,{className:"dialkit-panel-inner",style:V,onClick:h?void 0:T,"data-collapsed":y,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:D})}return D}var b7=3,v7=32,w7=200,S7=8;function Ko({label:e,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var ot;const y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=_.useRef(null),C=_.useRef(null),[M,A]=_.useState(!1),[T,D]=_.useState(!1),[V,z]=_.useState(!1),[N,q]=_.useState(!1),[G,W]=_.useState(!1),[Z,ce]=_.useState(!1),[de,pe]=_.useState(""),De=_.useRef(null),Xe=_.useRef(null),ie=_.useRef(!0),oe=_.useRef(null),$=_.useRef(null),ne=_.useRef(1),Y=(n-a)/(c-a)*100,fe=M||V,Se=dp(Y),I=fd(Se,F=>`${F}%`),re=fd(Se,F=>`max(5px, calc(${F}% - 9px))`),te=dp(0),be=fd(te,F=>`calc(100% + ${Math.abs(F)}px)`),Te=fd(te,F=>F<0?F:0);_.useEffect(()=>{!M&&!oe.current&&Se.jump(Y)},[Y,M,Se]);const he=_.useCallback(F=>{const ee=$.current;if(!ee)return n;const Me=(F-ee.left)/ne.current,nt=y.current?y.current.offsetWidth:ee.width,Ge=Math.max(0,Math.min(1,Me/nt)),Le=a+Ge*(c-a);return Math.max(a,Math.min(c,Le))},[a,c,n]),ze=_.useCallback(F=>(F-a)/(c-a)*100,[a,c]),Qe=_.useCallback((F,ee)=>{const ve=$.current;if(!ve)return 0;const Me=ee<0?ve.left-F:F-ve.right,nt=Math.max(0,Me-v7);return ee*S7*Math.sqrt(Math.min(nt/w7,1))},[]),We=_.useCallback(F=>{if(!Z&&(F.preventDefault(),F.target.setPointerCapture(F.pointerId),Xe.current={x:F.clientX,y:F.clientY},ie.current=!0,A(!0),y.current)){$.current=y.current.getBoundingClientRect();const ee=y.current.offsetWidth;ne.current=$.current.width/ee}},[Z]),ht=_.useCallback(F=>{if(!M||!Xe.current)return;const ee=F.clientX-Xe.current.x,ve=F.clientY-Xe.current.y,Me=Math.sqrt(ee*ee+ve*ve);if(ie.current&&Me>b7&&(ie.current=!1,D(!0)),!ie.current){const nt=$.current;nt&&(F.clientX<nt.left?te.jump(Qe(F.clientX,-1)):F.clientX>nt.right?te.jump(Qe(F.clientX,1)):te.jump(0));const Ge=he(F.clientX),Le=ze(Ge);oe.current&&(oe.current.stop(),oe.current=null),Se.jump(Le),i(Pd(Ge,u))}},[M,he,ze,i,Se,te,Qe]),jt=_.useCallback(F=>{if(M){if(ie.current){const ee=he(F.clientX),Me=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((ee-a)/u)*u)):f7(ee,a,c),nt=ze(Me);oe.current&&oe.current.stop(),oe.current=ox(Se,nt,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{oe.current=null}}),i(Pd(Me,u))}te.get()!==0&&ox(te,0,{type:"spring",visualDuration:.35,bounce:.15}),A(!1),D(!1),Xe.current=null}},[M,he,ze,i,a,c,Se,te]);_.useEffect(()=>(N&&!Z&&!G?De.current=setTimeout(()=>{W(!0)},800):!N&&!Z&&(De.current&&(clearTimeout(De.current),De.current=null),W(!1)),()=>{De.current&&clearTimeout(De.current)}),[N,Z,G]),_.useEffect(()=>{Z&&x.current&&(x.current.focus(),x.current.select())},[Z]);const vt=F=>{pe(F.target.value)},st=()=>{const F=parseFloat(de);if(!isNaN(F)){const ee=Math.max(a,Math.min(c,F));i(Pd(ee,u))}ce(!1),q(!1),W(!1)},Rt=F=>{G&&(F.stopPropagation(),F.preventDefault(),ce(!0),pe(n.toFixed(bp(u))))},dt=F=>{F.key==="Enter"?st():F.key==="Escape"&&(ce(!1),q(!1))},qt=()=>{st()},Kt=n.toFixed(bp(u)),J=8,Re=10,rt=10;let Ce=30,mt=78;const He=(ot=y.current)==null?void 0:ot.offsetWidth;He&&He>0&&(b.current&&(Ce=(Re+b.current.offsetWidth+J)/He*100),C.current&&(mt=(He-rt-C.current.offsetWidth-J)/He*100));const pt=Y<Ce||Y>mt,gt=fe?pt?.1:T?.9:.5:0,Mt=(c-a)/u,Bt=Mt<=10?Array.from({length:Mt-1},(F,ee)=>{const ve=(ee+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${ve}%`}},ee)}):Array.from({length:9},(F,ee)=>{const ve=(ee+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${ve}%`}},ee)});return l.jsx("div",{ref:y,className:"dialkit-slider-wrapper",children:l.jsxs(li.div,{ref:g,className:`dialkit-slider ${fe?"dialkit-slider-active":""}`,onPointerDown:We,onPointerMove:ht,onPointerUp:jt,onMouseEnter:()=>z(!0),onMouseLeave:()=>z(!1),style:{width:be,x:Te},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:Bt}),l.jsx(li.div,{className:"dialkit-slider-fill",style:{width:I}}),l.jsx(li.div,{className:"dialkit-slider-handle",style:{left:re,y:"-50%"},animate:{opacity:gt,scaleX:fe?1:.25,scaleY:fe&&pt?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[e,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:m7(h)})]}),Z?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:de,onChange:vt,onKeyDown:dt,onBlur:qt,onClick:F=>F.stopPropagation(),onMouseDown:F=>F.stopPropagation()}):l.jsx("span",{ref:C,className:`dialkit-slider-value ${G?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>q(!0),onMouseLeave:()=>q(!1),onClick:Rt,onMouseDown:F=>G&&F.stopPropagation(),style:{cursor:G?"text":"default"},children:Kt})]})})}function l_({options:e,value:n,onChange:i}){const a=_.useRef(null),c=_.useRef(!1),[u,d]=_.useState(null),h=_.useCallback(()=>{const y=a.current;if(!y)return;const g=y.querySelector('[data-active="true"]');g&&d({left:g.offsetLeft,width:g.offsetWidth})},[]);_.useLayoutEffect(()=>{h()},[n,e.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),e.map(y=>{const g=n===y.value;return l.jsx("button",{onClick:()=>i(y.value),className:"dialkit-segmented-button","data-active":String(g),children:y.label},y.value)})]})}function C7({label:e,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[e,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:p7(a)})]}),l.jsx(l_,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function k7(e,n,i,a){const c=[],d=a/100;let h=0,p=0;const y=1;for(let g=0;g<=100;g++){const x=g*d;c.push([x,h]);const b=-e*(h-y),C=-n*p,M=(b+C)/i;p+=M*d,h+=p*d}return c}function C2({spring:e,isSimpleMode:n}){var A,T,D,V,z;let c,u,d;if(n){const N=(A=e.visualDuration)!=null?A:.3,q=(T=e.bounce)!=null?T:.2;d=1,c=2*Math.PI/N,c=Math.pow(c,2),u=2*(1-q)*Math.sqrt(c*d)}else c=(D=e.stiffness)!=null?D:400,u=(V=e.damping)!=null?V:17,d=(z=e.mass)!=null?z:1;const h=2,p=k7(c,u,d,h),y=p.map(([,N])=>N),g=Math.min(...y),b=Math.max(...y)-g,C=p.map(([N,q],G)=>{const W=N/h*256,ce=140-((q-g)/(b||1)*140*.6+140*.2);return`${G===0?"M":"L"} ${W} ${ce}`}).join(" "),M=[];for(let N=1;N<4;N++){const q=64*N,G=140/4*N;M.push(l.jsx("line",{x1:q,y1:0,x2:q,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${N}`),l.jsx("line",{x1:0,y1:G,x2:256,y2:G,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${N}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[M,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:C,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function j7({panelId:e,path:n,label:i,spring:a,onChange:c}){var g,x,b,C,M;const u=_.useSyncExternalStore(A=>cn.subscribe(e,A),()=>cn.getSpringMode(e,n),()=>cn.getSpringMode(e,n)),d=u==="simple",h=_.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=A=>{cn.updateSpringMode(e,n,A),c(A==="simple"?h.current.simple:h.current.advanced)},y=(A,T)=>{if(d){const{stiffness:D,damping:V,mass:z,...N}=a;c({...N,[A]:T})}else{const{visualDuration:D,bounce:V,...z}=a;c({...z,[A]:T})}};return l.jsx(Jd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(C2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(l_,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Ko,{label:"Duration",value:(g=a.visualDuration)!=null?g:.3,onChange:A=>y("visualDuration",A),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Ko,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:A=>y("bounce",A),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Ko,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:A=>y("stiffness",A),min:1,max:1e3,step:10}),l.jsx(Ko,{label:"Damping",value:(C=a.damping)!=null?C:17,onChange:A=>y("damping",A),min:1,max:100,step:1}),l.jsx(Ko,{label:"Mass",value:(M=a.mass)!=null?M:1,onChange:A=>y("mass",A),min:.1,max:10,step:.1})]})]})})}function M7({easing:e}){const n=e.ease,i=200,a=10,u=(i-a*2)/2,d=(b,C)=>({x:a+(b+.5)*u,y:a+(1.5-C)*u}),h=d(0,0),p=d(1,1),y=d(n[0],n[1]),g=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${y.x} ${y.y}, ${g.x} ${g.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function E7({panelId:e,path:n,label:i,value:a,onChange:c}){var M,A,T,D,V;const u=_.useSyncExternalStore(z=>cn.subscribe(e,z),()=>cn.getTransitionMode(e,n),()=>cn.getTransitionMode(e,n)),d=u==="easing",h=u==="simple",p=_.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const y=a.type==="spring"?a:p.current.simple,g=a.type==="easing"?a:p.current.easing,x=z=>{cn.updateTransitionMode(e,n,z),c(z==="easing"?p.current.easing:z==="simple"?p.current.simple:p.current.advanced)},b=(z,N)=>{if(h){const{stiffness:q,damping:G,mass:W,...Z}=y;c({...Z,[z]:N})}else{const{visualDuration:q,bounce:G,...W}=y;c({...W,[z]:N})}},C=(z,N)=>{const q=[...g.ease];q[z]=N,c({...g,ease:q})};return l.jsx(Jd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(M7,{easing:g}):l.jsx(C2,{spring:y,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(l_,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Ko,{label:"x1",value:g.ease[0],onChange:z=>C(0,z),min:0,max:1,step:.01}),l.jsx(Ko,{label:"y1",value:g.ease[1],onChange:z=>C(1,z),min:-1,max:2,step:.01}),l.jsx(Ko,{label:"x2",value:g.ease[2],onChange:z=>C(2,z),min:0,max:1,step:.01}),l.jsx(Ko,{label:"y2",value:g.ease[3],onChange:z=>C(3,z),min:-1,max:2,step:.01}),l.jsx(Ko,{label:"Duration",value:g.duration,onChange:z=>c({...g,duration:z}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(A7,{ease:g.ease,onChange:z=>c({...g,ease:z})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(Ko,{label:"Duration",value:(M=y.visualDuration)!=null?M:.3,onChange:z=>b("visualDuration",z),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Ko,{label:"Bounce",value:(A=y.bounce)!=null?A:.2,onChange:z=>b("bounce",z),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Ko,{label:"Stiffness",value:(T=y.stiffness)!=null?T:400,onChange:z=>b("stiffness",z),min:1,max:1e3,step:10}),l.jsx(Ko,{label:"Damping",value:(D=y.damping)!=null?D:17,onChange:z=>b("damping",z),min:1,max:100,step:1}),l.jsx(Ko,{label:"Mass",value:(V=y.mass)!=null?V:1,onChange:z=>b("mass",z),min:.1,max:10,step:.1})]})]})})}function Vx(e){return e.map(n=>parseFloat(n.toFixed(2))).join(", ")}function T7(e){const n=e.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function A7({ease:e,onChange:n}){const[i,a]=_.useState(!1),[c,u]=_.useState(""),d=()=>{u(Vx(e)),a(!0)},h=()=>{const y=T7(c);y&&n(y),a(!1)},p=y=>{y.key==="Enter"&&y.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Vx(e),onChange:y=>u(y.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function N7({label:e,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:e}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function D7(e){return e.replace(/\b\w/g,n=>n.toUpperCase())}function R7(e){return e.map(n=>typeof n=="string"?{value:n,label:D7(n)}:n)}function B7({label:e,value:n,options:i,onChange:a}){var A;const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState(null),[g,x]=_.useState(null),b=R7(i),C=b.find(T=>T.value===n),M=_.useCallback(()=>{const T=d.current;if(!T)return;const D=T.getBoundingClientRect(),V=8+b.length*36,z=window.innerHeight-D.bottom-4,N=z<V&&D.top>z;x({top:N?D.top-4:D.bottom+4,left:D.left,width:D.width,above:N})},[b.length]);return _.useEffect(()=>{var D;const T=(D=d.current)==null?void 0:D.closest(".dialkit-root");y(T!=null?T:document.body)},[]),_.useEffect(()=>{c&&M()},[c,M]),_.useEffect(()=>{if(!c)return;const T=D=>{const V=D.target;d.current&&!d.current.contains(V)&&h.current&&!h.current.contains(V)&&u(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:e}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(A=C==null?void 0:C.label)!=null?A:n}),l.jsx(li.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:r_})})]})]}),p&&zl.createPortal(l.jsx(rf,{children:c&&g&&l.jsx(li.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:g.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:g.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:g.left,width:g.width,...g.above?{bottom:window.innerHeight-g.top,transformOrigin:"bottom"}:{top:g.top,transformOrigin:"top"}},children:b.map(T=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(T.value===n),onClick:()=>{a(T.value),u(!1)},children:T.label},T.value))})}),p)]})}var L7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function O7({label:e,value:n,onChange:i}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useRef(null);_.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),L7.test(u)?i(u):d(n)}function y(g){g.key==="Enter"?p():g.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:e}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:g=>d(g.target.value),onBlur:p,onKeyDown:y,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var g;return(g=h.current)==null?void 0:g.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?z7(n):n.slice(0,7),onChange:g=>i(g.target.value)})]})]})}function z7(e){return e.length!==4?e:`#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`}function $7({panelId:e,presets:n,activePresetId:i,onAdd:a}){const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState({top:0,left:0,width:0}),g=n.length>0,x=n.find(D=>D.id===i),b=_.useCallback(()=>{var V;if(!g)return;const D=(V=d.current)==null?void 0:V.getBoundingClientRect();D&&y({top:D.bottom+4,left:D.left,width:D.width}),u(!0)},[g]),C=_.useCallback(()=>u(!1),[]),M=_.useCallback(()=>{c?C():b()},[c,b,C]);_.useEffect(()=>{if(!c)return;const D=V=>{var N,q;const z=V.target;(N=d.current)!=null&&N.contains(z)||(q=h.current)!=null&&q.contains(z)||C()};return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[c,C]);const A=D=>{D?cn.loadPreset(e,D):cn.clearActivePreset(e),C()},T=(D,V)=>{D.stopPropagation(),cn.deletePreset(e,V)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:M,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!g),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(li.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:g?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:r_})})]}),zl.createPortal(l.jsx(rf,{children:c&&l.jsxs(li.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>A(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(D=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(D.id===i),onClick:()=>A(D.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:D.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:V=>T(V,D.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:x7.map((V,z)=>l.jsx("path",{d:V},z))})})]},D.id))]})}),document.body)]})}function P7({panel:e,defaultOpen:n=!0,inline:i=!1}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useContext(S2);Object.keys(e.shortcuts).length>0;const p=_.useSyncExternalStore(T=>cn.subscribe(e.id,T),()=>cn.getValues(e.id),()=>cn.getValues(e.id)),y=cn.getPresets(e.id),g=cn.getActivePresetId(e.id),x=()=>{const T=y.length+2;cn.savePreset(e.id,`Version ${T}`)},b=()=>{const T=JSON.stringify(p,null,2),D=`Update the useDialKit configuration for "${e.name}" with these values:

\`\`\`json
${T}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(D),c(!0),setTimeout(()=>c(!1),1500)},C=T=>{var V,z,N;const D=p[T.path];switch(T.type){case"slider":return l.jsx(Ko,{label:T.label,value:D,onChange:q=>cn.updateValue(e.id,T.path,q),min:T.min,max:T.max,step:T.step,shortcut:T.shortcut,shortcutActive:h.activePanelId===e.id&&h.activePath===T.path},T.path);case"toggle":return l.jsx(C7,{label:T.label,checked:D,onChange:q=>cn.updateValue(e.id,T.path,q),shortcut:T.shortcut,shortcutActive:h.activePanelId===e.id&&h.activePath===T.path},T.path);case"spring":return l.jsx(j7,{panelId:e.id,path:T.path,label:T.label,spring:D,onChange:q=>cn.updateValue(e.id,T.path,q)},T.path);case"transition":return l.jsx(E7,{panelId:e.id,path:T.path,label:T.label,value:D,onChange:q=>cn.updateValue(e.id,T.path,q)},T.path);case"folder":return l.jsx(Jd,{title:T.label,defaultOpen:(V=T.defaultOpen)!=null?V:!0,children:(z=T.children)==null?void 0:z.map(C)},T.path);case"text":return l.jsx(N7,{label:T.label,value:D,onChange:q=>cn.updateValue(e.id,T.path,q),placeholder:T.placeholder},T.path);case"select":return l.jsx(B7,{label:T.label,value:D,options:(N=T.options)!=null?N:[],onChange:q=>cn.updateValue(e.id,T.path,q)},T.path);case"color":return l.jsx(O7,{label:T.label,value:D,onChange:q=>cn.updateValue(e.id,T.path,q)},T.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>cn.triggerAction(e.id,T.path),children:T.label},T.path);default:return null}},M=()=>e.controls.map(C),A=l.jsxs(l.Fragment,{children:[l.jsx(li.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:y7.map((T,D)=>l.jsx("path",{d:T},D))})}),l.jsx($7,{panelId:e.id,presets:y,activePresetId:g,onAdd:x}),l.jsx(li.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(rf,{initial:!1,mode:"wait",children:a?l.jsx(li.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:g7})},"check"):l.jsxs(li.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:zm.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:zm.sparkle,fill:"currentColor"}),l.jsx("path",{d:zm.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Jd,{title:e.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:A,children:M()})})}var I7=typeof process<"u"?!1:!(typeof import.meta<"u");function H7({position:e="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=I7}){if(!c)return null;const[u,d]=_.useState([]),[h,p]=_.useState(!1),y=i==="inline",g=_.useRef(null),[x,b]=_.useState(null),[C,M]=_.useState(e),A=_.useRef(null),T=_.useRef(!1),D=_.useRef(null),V=_.useRef(!1);_.useEffect(()=>(p(!0),d(cn.getPanels()),cn.subscribeGlobal(()=>{d(cn.getPanels())})),[]),_.useEffect(()=>{if(!g.current||y)return;const Z=new MutationObserver(()=>{var pe;const ce=(pe=g.current)==null?void 0:pe.querySelector(".dialkit-panel-inner");if(!ce)return;if(ce.getAttribute("data-collapsed")==="true")A.current&&b(A.current);else{if(x){A.current=x;const De=x.x+21,Xe=window.innerWidth/2;M(De<Xe?"top-left":"top-right")}else M(e);b(null)}});return Z.observe(g.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>Z.disconnect()},[y,x,e]);const z=_.useCallback(Z=>{var pe;const ce=(pe=g.current)==null?void 0:pe.querySelector(".dialkit-panel-inner");if(!ce||ce.getAttribute("data-collapsed")!=="true")return;const de=g.current.getBoundingClientRect();D.current={pointerX:Z.clientX,pointerY:Z.clientY,elX:de.left,elY:de.top},V.current=!1,T.current=!0,Z.target.setPointerCapture(Z.pointerId)},[]),N=_.useCallback(Z=>{if(!T.current||!D.current)return;const ce=Z.clientX-D.current.pointerX,de=Z.clientY-D.current.pointerY;!V.current&&Math.abs(ce)+Math.abs(de)<4||(V.current=!0,b({x:D.current.elX+ce,y:D.current.elY+de}))},[]),q=_.useCallback(Z=>{var ce;if(T.current&&(T.current=!1,D.current=null,V.current)){Z.stopPropagation();const de=(ce=g.current)==null?void 0:ce.querySelector(".dialkit-panel-inner");if(de){const pe=De=>{De.stopPropagation()};de.addEventListener("click",pe,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const G=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,W=l.jsx(_7,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:g,className:"dialkit-panel","data-position":y||x?void 0:C,"data-mode":i,style:G,onPointerDown:y?void 0:z,onPointerMove:y?void 0:N,onPointerUp:y?void 0:q,children:u.map(Z=>l.jsx(P7,{panel:Z,defaultOpen:y||n,inline:y},Z.id))})})});return y?W:zl.createPortal(W,document.body)}const U7=()=>(o7("Git Visualizer",{preview:[1,0,1]}),null),Yx="git-visualizer.chrome-ui-hidden",V7=({children:e})=>{const[n,i]=_.useState(!1);return _.useEffect(()=>{i(window.localStorage.getItem(Yx)==="true")},[]),_.useEffect(()=>{const a=c=>{(c.ctrlKey||c.metaKey)&&c.key.toLowerCase()==="d"&&!c.shiftKey&&!c.altKey&&(c.preventDefault(),i(u=>{const d=!u;return window.localStorage.setItem(Yx,String(d)),d}))};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[]),l.jsxs(l.Fragment,{children:[e,l.jsx(U7,{}),!n&&l.jsxs(l.Fragment,{children:[l.jsx(H7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(t7,{})]})]})};document.addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="r"&&(e.preventDefault(),location.reload())});Kv.createRoot(document.getElementById("root")).render(l.jsx(V7,{children:l.jsx($3,{})}));

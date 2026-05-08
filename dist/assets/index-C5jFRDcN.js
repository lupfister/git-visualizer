(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Wx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hh={exports:{}},pc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function Uv(){if(cy)return pc;cy=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:e,type:a,key:d,ref:c!==void 0?c:null,props:u}}return pc.Fragment=n,pc.jsx=i,pc.jsxs=i,pc}var uy;function Vv(){return uy||(uy=1,Hh.exports=Uv()),Hh.exports}var l=Vv(),Uh={exports:{}},_c={},Vh={exports:{}},Yh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dy;function Yv(){return dy||(dy=1,(function(e){function n(B,se){var H=B.length;B.push(se);e:for(;0<H;){var _e=H-1>>>1,ke=B[_e];if(0<c(ke,se))B[_e]=se,B[H]=ke,H=_e;else break e}}function i(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var se=B[0],H=B.pop();if(H!==se){B[0]=H;e:for(var _e=0,ke=B.length,z=ke>>>1;_e<z;){var ce=2*(_e+1)-1,ee=B[ce],we=ce+1,Re=B[we];if(0>c(ee,H))we<ke&&0>c(Re,ee)?(B[_e]=Re,B[we]=H,_e=we):(B[_e]=ee,B[ce]=H,_e=ce);else if(we<ke&&0>c(Re,H))B[_e]=Re,B[we]=H,_e=we;else break e}}return se}function c(B,se){var H=B.sortIndex-se.sortIndex;return H!==0?H:B.id-se.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();e.unstable_now=function(){return d.now()-h}}var p=[],y=[],g=1,x=null,b=3,w=!1,S=!1,j=!1,k=!1,E=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function M(B){for(var se=i(y);se!==null;){if(se.callback===null)a(y);else if(se.startTime<=B)a(y),se.sortIndex=se.expirationTime,n(p,se);else break;se=i(y)}}function X(B){if(j=!1,M(B),!S)if(i(p)!==null)S=!0,F||(F=!0,Le());else{var se=i(y);se!==null&&ie(X,se.startTime-B)}}var F=!1,U=-1,K=5,de=-1;function pe(){return k?!0:!(e.unstable_now()-de<K)}function ye(){if(k=!1,F){var B=e.unstable_now();de=B;var se=!0;try{e:{S=!1,j&&(j=!1,I(U),U=-1),w=!0;var H=b;try{t:{for(M(B),x=i(p);x!==null&&!(x.expirationTime>B&&pe());){var _e=x.callback;if(typeof _e=="function"){x.callback=null,b=x.priorityLevel;var ke=_e(x.expirationTime<=B);if(B=e.unstable_now(),typeof ke=="function"){x.callback=ke,M(B),se=!0;break t}x===i(p)&&a(p),M(B)}else a(p);x=i(p)}if(x!==null)se=!0;else{var z=i(y);z!==null&&ie(X,z.startTime-B),se=!1}}break e}finally{x=null,b=H,w=!1}se=void 0}}finally{se?Le():F=!1}}}var Le;if(typeof N=="function")Le=function(){N(ye)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,ae=Ze.port2;Ze.port1.onmessage=ye,Le=function(){ae.postMessage(null)}}else Le=function(){E(ye,0)};function ie(B,se){U=E(function(){B(e.unstable_now())},se)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_next=function(B){switch(b){case 1:case 2:case 3:var se=3;break;default:se=b}var H=b;b=se;try{return B()}finally{b=H}},e.unstable_requestPaint=function(){k=!0},e.unstable_runWithPriority=function(B,se){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var H=b;b=B;try{return se()}finally{b=H}},e.unstable_scheduleCallback=function(B,se,H){var _e=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?_e+H:_e):H=_e,B){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=H+ke,B={id:g++,callback:se,priorityLevel:B,startTime:H,expirationTime:ke,sortIndex:-1},H>_e?(B.sortIndex=H,n(y,B),i(p)===null&&B===i(y)&&(j?(I(U),U=-1):j=!0,ie(X,H-_e))):(B.sortIndex=ke,n(p,B),S||w||(S=!0,F||(F=!0,Le()))),B},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(B){var se=b;return function(){var H=b;b=se;try{return B.apply(this,arguments)}finally{b=H}}}})(Yh)),Yh}var fy;function Wv(){return fy||(fy=1,Vh.exports=Yv()),Vh.exports}var Wh={exports:{}},fn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hy;function Fv(){if(hy)return fn;hy=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function w(z){return z===null||typeof z!="object"?null:(z=b&&z[b]||z["@@iterator"],typeof z=="function"?z:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,k={};function E(z,ce,ee){this.props=z,this.context=ce,this.refs=k,this.updater=ee||S}E.prototype.isReactComponent={},E.prototype.setState=function(z,ce){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,ce,"setState")},E.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function I(){}I.prototype=E.prototype;function N(z,ce,ee){this.props=z,this.context=ce,this.refs=k,this.updater=ee||S}var M=N.prototype=new I;M.constructor=N,j(M,E.prototype),M.isPureReactComponent=!0;var X=Array.isArray;function F(){}var U={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function de(z,ce,ee){var we=ee.ref;return{$$typeof:e,type:z,key:ce,ref:we!==void 0?we:null,props:ee}}function pe(z,ce){return de(z.type,ce,z.props)}function ye(z){return typeof z=="object"&&z!==null&&z.$$typeof===e}function Le(z){var ce={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(ee){return ce[ee]})}var Ze=/\/+/g;function ae(z,ce){return typeof z=="object"&&z!==null&&z.key!=null?Le(""+z.key):ce.toString(36)}function ie(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(F,F):(z.status="pending",z.then(function(ce){z.status==="pending"&&(z.status="fulfilled",z.value=ce)},function(ce){z.status==="pending"&&(z.status="rejected",z.reason=ce)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function B(z,ce,ee,we,Re){var ge=typeof z;(ge==="undefined"||ge==="boolean")&&(z=null);var Pe=!1;if(z===null)Pe=!0;else switch(ge){case"bigint":case"string":case"number":Pe=!0;break;case"object":switch(z.$$typeof){case e:case n:Pe=!0;break;case g:return Pe=z._init,B(Pe(z._payload),ce,ee,we,Re)}}if(Pe)return Re=Re(z),Pe=we===""?"."+ae(z,0):we,X(Re)?(ee="",Pe!=null&&(ee=Pe.replace(Ze,"$&/")+"/"),B(Re,ce,ee,"",function(yt){return yt})):Re!=null&&(ye(Re)&&(Re=pe(Re,ee+(Re.key==null||z&&z.key===Re.key?"":(""+Re.key).replace(Ze,"$&/")+"/")+Pe)),ce.push(Re)),1;Pe=0;var nt=we===""?".":we+":";if(X(z))for(var Xe=0;Xe<z.length;Xe++)we=z[Xe],ge=nt+ae(we,Xe),Pe+=B(we,ce,ee,ge,Re);else if(Xe=w(z),typeof Xe=="function")for(z=Xe.call(z),Xe=0;!(we=z.next()).done;)we=we.value,ge=nt+ae(we,Xe++),Pe+=B(we,ce,ee,ge,Re);else if(ge==="object"){if(typeof z.then=="function")return B(ie(z),ce,ee,we,Re);throw ce=String(z),Error("Objects are not valid as a React child (found: "+(ce==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":ce)+"). If you meant to render a collection of children, use an array instead.")}return Pe}function se(z,ce,ee){if(z==null)return z;var we=[],Re=0;return B(z,we,"","",function(ge){return ce.call(ee,ge,Re++)}),we}function H(z){if(z._status===-1){var ce=z._result;ce=ce(),ce.then(function(ee){(z._status===0||z._status===-1)&&(z._status=1,z._result=ee)},function(ee){(z._status===0||z._status===-1)&&(z._status=2,z._result=ee)}),z._status===-1&&(z._status=0,z._result=ce)}if(z._status===1)return z._result.default;throw z._result}var _e=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ce=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(ce))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},ke={map:se,forEach:function(z,ce,ee){se(z,function(){ce.apply(this,arguments)},ee)},count:function(z){var ce=0;return se(z,function(){ce++}),ce},toArray:function(z){return se(z,function(ce){return ce})||[]},only:function(z){if(!ye(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return fn.Activity=x,fn.Children=ke,fn.Component=E,fn.Fragment=i,fn.Profiler=c,fn.PureComponent=N,fn.StrictMode=a,fn.Suspense=p,fn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,fn.__COMPILER_RUNTIME={__proto__:null,c:function(z){return U.H.useMemoCache(z)}},fn.cache=function(z){return function(){return z.apply(null,arguments)}},fn.cacheSignal=function(){return null},fn.cloneElement=function(z,ce,ee){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var we=j({},z.props),Re=z.key;if(ce!=null)for(ge in ce.key!==void 0&&(Re=""+ce.key),ce)!K.call(ce,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&ce.ref===void 0||(we[ge]=ce[ge]);var ge=arguments.length-2;if(ge===1)we.children=ee;else if(1<ge){for(var Pe=Array(ge),nt=0;nt<ge;nt++)Pe[nt]=arguments[nt+2];we.children=Pe}return de(z.type,Re,we)},fn.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:u,_context:z},z},fn.createElement=function(z,ce,ee){var we,Re={},ge=null;if(ce!=null)for(we in ce.key!==void 0&&(ge=""+ce.key),ce)K.call(ce,we)&&we!=="key"&&we!=="__self"&&we!=="__source"&&(Re[we]=ce[we]);var Pe=arguments.length-2;if(Pe===1)Re.children=ee;else if(1<Pe){for(var nt=Array(Pe),Xe=0;Xe<Pe;Xe++)nt[Xe]=arguments[Xe+2];Re.children=nt}if(z&&z.defaultProps)for(we in Pe=z.defaultProps,Pe)Re[we]===void 0&&(Re[we]=Pe[we]);return de(z,ge,Re)},fn.createRef=function(){return{current:null}},fn.forwardRef=function(z){return{$$typeof:h,render:z}},fn.isValidElement=ye,fn.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:H}},fn.memo=function(z,ce){return{$$typeof:y,type:z,compare:ce===void 0?null:ce}},fn.startTransition=function(z){var ce=U.T,ee={};U.T=ee;try{var we=z(),Re=U.S;Re!==null&&Re(ee,we),typeof we=="object"&&we!==null&&typeof we.then=="function"&&we.then(F,_e)}catch(ge){_e(ge)}finally{ce!==null&&ee.types!==null&&(ce.types=ee.types),U.T=ce}},fn.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},fn.use=function(z){return U.H.use(z)},fn.useActionState=function(z,ce,ee){return U.H.useActionState(z,ce,ee)},fn.useCallback=function(z,ce){return U.H.useCallback(z,ce)},fn.useContext=function(z){return U.H.useContext(z)},fn.useDebugValue=function(){},fn.useDeferredValue=function(z,ce){return U.H.useDeferredValue(z,ce)},fn.useEffect=function(z,ce){return U.H.useEffect(z,ce)},fn.useEffectEvent=function(z){return U.H.useEffectEvent(z)},fn.useId=function(){return U.H.useId()},fn.useImperativeHandle=function(z,ce,ee){return U.H.useImperativeHandle(z,ce,ee)},fn.useInsertionEffect=function(z,ce){return U.H.useInsertionEffect(z,ce)},fn.useLayoutEffect=function(z,ce){return U.H.useLayoutEffect(z,ce)},fn.useMemo=function(z,ce){return U.H.useMemo(z,ce)},fn.useOptimistic=function(z,ce){return U.H.useOptimistic(z,ce)},fn.useReducer=function(z,ce,ee){return U.H.useReducer(z,ce,ee)},fn.useRef=function(z){return U.H.useRef(z)},fn.useState=function(z){return U.H.useState(z)},fn.useSyncExternalStore=function(z,ce,ee){return U.H.useSyncExternalStore(z,ce,ee)},fn.useTransition=function(){return U.H.useTransition()},fn.version="19.2.4",fn}var my;function xp(){return my||(my=1,Wh.exports=Fv()),Wh.exports}var Fh={exports:{}},Go={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function Xv(){if(py)return Go;py=1;var e=xp();function n(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)y+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,y,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:y,implementation:g}}var d=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Go.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Go.createPortal=function(p,y){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(n(299));return u(p,y,null,g)},Go.flushSync=function(p){var y=d.T,g=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=y,a.p=g,a.d.f()}},Go.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(p,y))},Go.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Go.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin),b=typeof y.integrity=="string"?y.integrity:void 0,w=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;g==="style"?a.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:w}):g==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:w,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Go.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var g=h(y.as,y.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(p)},Go.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin);a.d.L(p,g,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Go.preloadModule=function(p,y){if(typeof p=="string")if(y){var g=h(y.as,y.crossOrigin);a.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(p)},Go.requestFormReset=function(p){a.d.r(p)},Go.unstable_batchedUpdates=function(p,y){return p(y)},Go.useFormState=function(p,y,g){return d.H.useFormState(p,y,g)},Go.useFormStatus=function(){return d.H.useHostTransitionStatus()},Go.version="19.2.4",Go}var _y;function Fx(){if(_y)return Fh.exports;_y=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Fh.exports=Xv(),Fh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function Gv(){if(gy)return _c;gy=1;var e=Wv(),n=xp(),i=Fx();function a(t){var s="https://react.dev/errors/"+t;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+t+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var s=t,o=t;if(t.alternate)for(;s.return;)s=s.return;else{t=s;do s=t,(s.flags&4098)!==0&&(o=s.return),t=s.return;while(t)}return s.tag===3?o:null}function d(t){if(t.tag===13){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function h(t){if(t.tag===31){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(a(188))}function y(t){var s=t.alternate;if(!s){if(s=u(t),s===null)throw Error(a(188));return s!==t?null:t}for(var o=t,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),t;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var v=!1,A=f.child;A;){if(A===o){v=!0,o=f,r=m;break}if(A===r){v=!0,r=f,o=m;break}A=A.sibling}if(!v){for(A=m.child;A;){if(A===o){v=!0,o=m,r=f;break}if(A===r){v=!0,r=m,o=f;break}A=A.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?t:s}function g(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t;for(t=t.child;t!==null;){if(s=g(t),s!==null)return s;t=t.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),N=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),de=Symbol.for("react.activity"),pe=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function Le(t){return t===null||typeof t!="object"?null:(t=ye&&t[ye]||t["@@iterator"],typeof t=="function"?t:null)}var Ze=Symbol.for("react.client.reference");function ae(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ze?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case j:return"Fragment";case E:return"Profiler";case k:return"StrictMode";case X:return"Suspense";case F:return"SuspenseList";case de:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case N:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case M:var s=t.render;return t=t.displayName,t||(t=s.displayName||s.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case U:return s=t.displayName||null,s!==null?s:ae(t.type)||"Memo";case K:s=t._payload,t=t._init;try{return ae(t(s))}catch{}}return null}var ie=Array.isArray,B=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},_e=[],ke=-1;function z(t){return{current:t}}function ce(t){0>ke||(t.current=_e[ke],_e[ke]=null,ke--)}function ee(t,s){ke++,_e[ke]=t.current,t.current=s}var we=z(null),Re=z(null),ge=z(null),Pe=z(null);function nt(t,s){switch(ee(ge,s),ee(Re,t),ee(we,null),s.nodeType){case 9:case 11:t=(t=s.documentElement)&&(t=t.namespaceURI)?D0(t):0;break;default:if(t=s.tagName,s=s.namespaceURI)s=D0(s),t=R0(s,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ce(we),ee(we,t)}function Xe(){ce(we),ce(Re),ce(ge)}function yt(t){t.memoizedState!==null&&ee(Pe,t);var s=we.current,o=R0(s,t.type);s!==o&&(ee(Re,t),ee(we,o))}function Tt(t){Re.current===t&&(ce(we),ce(Re)),Pe.current===t&&(ce(Pe),dc._currentValue=H)}var kt,ut;function Ot(t){if(kt===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);kt=s&&s[1]||"",ut=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kt+t+ut}var _t=!1;function tn(t,s){if(!t||_t)return"";_t=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var We=function(){throw Error()};if(Object.defineProperty(We.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(We,[])}catch(Te){var Ce=Te}Reflect.construct(t,[],We)}else{try{We.call()}catch(Te){Ce=Te}t.call(We.prototype)}}else{try{throw Error()}catch(Te){Ce=Te}(We=t())&&typeof We.catch=="function"&&We.catch(function(){})}}catch(Te){if(Te&&Ce&&typeof Te.stack=="string")return[Te.stack,Ce.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),v=m[0],A=m[1];if(v&&A){var q=v.split(`
`),ve=A.split(`
`);for(f=r=0;r<q.length&&!q[r].includes("DetermineComponentFrameRoot");)r++;for(;f<ve.length&&!ve[f].includes("DetermineComponentFrameRoot");)f++;if(r===q.length||f===ve.length)for(r=q.length-1,f=ve.length-1;1<=r&&0<=f&&q[r]!==ve[f];)f--;for(;1<=r&&0<=f;r--,f--)if(q[r]!==ve[f]){if(r!==1||f!==1)do if(r--,f--,0>f||q[r]!==ve[f]){var Ie=`
`+q[r].replace(" at new "," at ");return t.displayName&&Ie.includes("<anonymous>")&&(Ie=Ie.replace("<anonymous>",t.displayName)),Ie}while(1<=r&&0<=f);break}}}finally{_t=!1,Error.prepareStackTrace=o}return(o=t?t.displayName||t.name:"")?Ot(o):""}function nn(t,s){switch(t.tag){case 26:case 27:case 5:return Ot(t.type);case 16:return Ot("Lazy");case 13:return t.child!==s&&s!==null?Ot("Suspense Fallback"):Ot("Suspense");case 19:return Ot("SuspenseList");case 0:case 15:return tn(t.type,!1);case 11:return tn(t.type.render,!1);case 1:return tn(t.type,!0);case 31:return Ot("Activity");default:return""}}function Q(t){try{var s="",o=null;do s+=nn(t,o),o=t,t=t.return;while(t);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Oe=Object.prototype.hasOwnProperty,ft=e.unstable_scheduleCallback,Ee=e.unstable_cancelCallback,xt=e.unstable_shouldYield,Ye=e.unstable_requestPaint,bt=e.unstable_now,vt=e.unstable_getCurrentPriorityLevel,At=e.unstable_ImmediatePriority,zt=e.unstable_UserBlockingPriority,dt=e.unstable_NormalPriority,V=e.unstable_LowPriority,J=e.unstable_IdlePriority,Se=e.log,Ne=e.unstable_setDisableYieldValue,at=null,Je=null;function $e(t){if(typeof Se=="function"&&Ne(t),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(at,t)}catch{}}var xe=Math.clz32?Math.clz32:ot,st=Math.log,Fe=Math.LN2;function ot(t){return t>>>=0,t===0?32:31-(st(t)/Fe|0)|0}var ze=256,it=262144,wt=4194304;function St(t){var s=t&42;if(s!==0)return s;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function tt(t,s,o){var r=t.pendingLanes;if(r===0)return 0;var f=0,m=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~m,r!==0?f=St(r):(v&=A,v!==0?f=St(v):o||(o=A&~t,o!==0&&(f=St(o))))):(A=r&~m,A!==0?f=St(A):v!==0?f=St(v):o||(o=r&~t,o!==0&&(f=St(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function $t(t,s){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&s)===0}function jt(t,s){switch(t){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(){var t=wt;return wt<<=1,(wt&62914560)===0&&(wt=4194304),t}function mn(t){for(var s=[],o=0;31>o;o++)s.push(t);return s}function pt(t,s){t.pendingLanes|=s,s!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ut(t,s,o,r,f,m){var v=t.pendingLanes;t.pendingLanes=o,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=o,t.entangledLanes&=o,t.errorRecoveryDisabledLanes&=o,t.shellSuspendCounter=0;var A=t.entanglements,q=t.expirationTimes,ve=t.hiddenUpdates;for(o=v&~o;0<o;){var Ie=31-xe(o),We=1<<Ie;A[Ie]=0,q[Ie]=-1;var Ce=ve[Ie];if(Ce!==null)for(ve[Ie]=null,Ie=0;Ie<Ce.length;Ie++){var Te=Ce[Ie];Te!==null&&(Te.lane&=-536870913)}o&=~We}r!==0&&bn(t,r,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(v&~s))}function bn(t,s,o){t.pendingLanes|=s,t.suspendedLanes&=~s;var r=31-xe(s);t.entangledLanes|=s,t.entanglements[r]=t.entanglements[r]|1073741824|o&261930}function Rt(t,s){var o=t.entangledLanes|=s;for(t=t.entanglements;o;){var r=31-xe(o),f=1<<r;f&s|t[r]&s&&(t[r]|=s),o&=~f}}function Ct(t,s){var o=s&-s;return o=(o&42)!==0?1:pn(o),(o&(t.suspendedLanes|s))!==0?0:o}function pn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ln(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function on(){var t=se.p;return t!==0?t:(t=window.event,t===void 0?32:ny(t.type))}function Vt(t,s){var o=se.p;try{return se.p=t,s()}finally{se.p=o}}var qt=Math.random().toString(36).slice(2),Mt="__reactFiber$"+qt,wn="__reactProps$"+qt,mt="__reactContainer$"+qt,ls="__reactEvents$"+qt,ts="__reactListeners$"+qt,Eo="__reactHandles$"+qt,cs="__reactResources$"+qt,To="__reactMarker$"+qt;function Oo(t){delete t[Mt],delete t[wn],delete t[ls],delete t[ts],delete t[Eo]}function js(t){var s=t[Mt];if(s)return s;for(var o=t.parentNode;o;){if(s=o[mt]||o[Mt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(t=P0(t);t!==null;){if(o=t[Mt])return o;t=P0(t)}return s}t=o,o=t.parentNode}return null}function Bs(t){if(t=t[Mt]||t[mt]){var s=t.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return t}return null}function sn(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t.stateNode;throw Error(a(33))}function Gn(t){var s=t[cs];return s||(s=t[cs]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Mn(t){t[To]=!0}var ws=new Set,ns={};function Jn(t,s){un(t,s),un(t+"Capture",s)}function un(t,s){for(ns[t]=s,t=0;t<s.length;t++)ws.add(s[t])}var Os=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),po={},Gs={};function Ao(t){return Oe.call(Gs,t)?!0:Oe.call(po,t)?!1:Os.test(t)?Gs[t]=!0:(po[t]=!0,!1)}function qs(t,s,o){if(Ao(s))if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":t.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(s);return}}t.setAttribute(s,""+o)}}function gs(t,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttribute(s,""+o)}}function zs(t,s,o,r){if(r===null)t.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(o);return}t.setAttributeNS(s,o,""+r)}}function Sn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ks(t){var s=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Qi(t,s,o){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,s);if(!t.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(t,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(t,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){t._valueTracker=null,delete t[s]}}}}function Ns(t){if(!t._valueTracker){var s=Ks(t)?"checked":"value";t._valueTracker=Qi(t,s,""+t[s])}}function No(t){if(!t)return!1;var s=t._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return t&&(r=Ks(t)?t.checked?"true":"false":t.value),t=r,t!==o?(s.setValue(t),!0):!1}function oo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ys=/[\n"\\]/g;function Qs(t){return t.replace(ys,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function io(t,s,o,r,f,m,v,A){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),s!=null?v==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+Sn(s)):t.value!==""+Sn(s)&&(t.value=""+Sn(s)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),s!=null?ss(t,v,Sn(s)):o!=null?ss(t,v,Sn(o)):r!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+Sn(A):t.removeAttribute("name")}function Cn(t,s,o,r,f,m,v,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){Ns(t);return}o=o!=null?""+Sn(o):"",s=s!=null?""+Sn(s):o,A||s===t.value||(t.value=s),t.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Ns(t)}function ss(t,s,o){s==="number"&&oo(t.ownerDocument)===t||t.defaultValue===""+o||(t.defaultValue=""+o)}function us(t,s,o,r){if(t=t.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=s.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&r&&(t[o].defaultSelected=!0)}else{for(o=""+Sn(o),s=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,r&&(t[f].defaultSelected=!0);return}s!==null||t[f].disabled||(s=t[f])}s!==null&&(s.selected=!0)}}function ds(t,s,o){if(s!=null&&(s=""+Sn(s),s!==t.value&&(t.value=s),o==null)){t.defaultValue!==s&&(t.defaultValue=s);return}t.defaultValue=o!=null?""+Sn(o):""}function ao(t,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(ie(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=Sn(s),t.defaultValue=o,r=t.textContent,r===o&&r!==""&&r!==null&&(t.value=r),Ns(t)}function Fo(t,s){if(s){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=s;return}}t.textContent=s}var Do=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wt(t,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="":r?t.setProperty(s,o):typeof o!="number"||o===0||Do.has(s)?s==="float"?t.cssFloat=o:t[s]=(""+o).trim():t[s]=o+"px"}function Si(t,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(t=t.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&Wt(t,f,r)}else for(var m in s)s.hasOwnProperty(m)&&Wt(t,m,s[m])}function xs(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zo=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Oi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qo(t){return Oi.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ms(){}var zi=null;function Ds(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Un=null,_o=null;function Zo(t){var s=Bs(t);if(s&&(t=s.stateNode)){var o=t[wn]||null;e:switch(t=s.stateNode,s.type){case"input":if(io(t,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Qs(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==t&&r.form===t.form){var f=r[wn]||null;if(!f)throw Error(a(90));io(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===t.form&&No(r)}break e;case"textarea":ds(t,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&us(t,!!o.multiple,s,!1)}}}var $s=!1;function $o(t,s,o){if($s)return t(s,o);$s=!0;try{var r=t(s);return r}finally{if($s=!1,(Un!==null||_o!==null)&&(Mu(),Un&&(s=Un,t=_o,_o=Un=null,Zo(s),t)))for(s=0;s<t.length;s++)Zo(t[s])}}function _n(t,s){var o=t.stateNode;if(o===null)return null;var r=o[wn]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Is=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zs=!1;if(Is)try{var Jo={};Object.defineProperty(Jo,"passive",{get:function(){Zs=!0}}),window.addEventListener("test",Jo,Jo),window.removeEventListener("test",Jo,Jo)}catch{Zs=!1}var Ls=null,Ci=null,ei=null;function $i(){if(ei)return ei;var t,s=Ci,o=s.length,r,f="value"in Ls?Ls.value:Ls.textContent,m=f.length;for(t=0;t<o&&s[t]===f[t];t++);var v=o-t;for(r=1;r<=v&&s[o-r]===f[m-r];r++);return ei=f.slice(t,1<r?1-r:void 0)}function ro(t){var s=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&s===13&&(t=13)):t=s,t===10&&(t=13),32<=t||t===13?t:0}function go(){return!0}function Ss(){return!1}function Vn(t){function s(o,r,f,m,v){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(o=t[A],this[A]=o?o(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?go:Ss,this.isPropagationStopped=Ss,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),s}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yo=Vn(Pn),xo=x({},Pn,{view:0,detail:0}),Js=Vn(xo),On,Ps,zn,Hs=x({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:So,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zn&&(zn&&t.type==="mousemove"?(On=t.screenX-zn.screenX,Ps=t.screenY-zn.screenY):Ps=On=0,zn=t),On)},movementY:function(t){return"movementY"in t?t.movementY:Ps}}),ti=Vn(Hs),ni=x({},Hs,{dataTransfer:0}),Ii=Vn(ni),di=x({},xo,{relatedTarget:0}),fi=Vn(di),bo=x({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ro=Vn(bo),Zi=x({},Pn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ki=Vn(Zi),hi=x({},Pn,{data:0}),It=Vn(hi),Xo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bo={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wo(t){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(t):(t=vo[t])?!!s[t]:!1}function So(){return wo}var si=x({},xo,{key:function(t){if(t.key){var s=Xo[t.key]||t.key;if(s!=="Unidentified")return s}return t.type==="keypress"?(t=ro(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bo[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:So,charCode:function(t){return t.type==="keypress"?ro(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ro(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ji=Vn(si),Yn=x({},Hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),C=Vn(Yn),W=x({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:So}),fe=Vn(W),Ae=x({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),De=Vn(Ae),rt=x({},Hs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Kt=Vn(rt),Yt=x({},Pn,{newState:0,oldState:0}),cn=Vn(Yt),Tn=[9,13,27,32],Dn=Is&&"CompositionEvent"in window,gn=null;Is&&"documentMode"in document&&(gn=document.documentMode);var os=Is&&"TextEvent"in window&&!gn,eo=Is&&(!Dn||gn&&8<gn&&11>=gn),en=" ",R=!1;function L(t,s){switch(t){case"keyup":return Tn.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var te=!1;function re(t,s){switch(t){case"compositionend":return $(s);case"keypress":return s.which!==32?null:(R=!0,en);case"textInput":return t=s.data,t===en&&R?null:t;default:return null}}function Be(t,s){if(te)return t==="compositionend"||!Dn&&L(t,s)?(t=$i(),ei=Ci=Ls=null,te=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return eo&&s.locale!=="ko"?null:s.data;default:return null}}var Ke={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ht(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s==="input"?!!Ke[t.type]:s==="textarea"}function Ht(t,s,o,r){Un?_o?_o.push(r):_o=[r]:Un=r,s=Bu(s,"onChange"),0<s.length&&(o=new yo("onChange","change",null,o,r),t.push({event:o,listeners:s}))}var kn=null,an=null;function Cs(t){j0(t,0)}function T(t){var s=sn(t);if(No(s))return t}function D(t,s){if(t==="change")return s}var Y=!1;if(Is){var G;if(Is){var ne="oninput"in document;if(!ne){var he=document.createElement("div");he.setAttribute("oninput","return;"),ne=typeof he.oninput=="function"}G=ne}else G=!1;Y=G&&(!document.documentMode||9<document.documentMode)}function P(){kn&&(kn.detachEvent("onpropertychange",Z),an=kn=null)}function Z(t){if(t.propertyName==="value"&&T(an)){var s=[];Ht(s,an,t,Ds(t)),$o(Cs,s)}}function le(t,s,o){t==="focusin"?(P(),kn=s,an=o,kn.attachEvent("onpropertychange",Z)):t==="focusout"&&P()}function me(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return T(an)}function Me(t,s){if(t==="click")return T(s)}function Ge(t,s){if(t==="input"||t==="change")return T(s)}function ct(t,s){return t===s&&(t!==0||1/t===1/s)||t!==t&&s!==s}var Qe=typeof Object.is=="function"?Object.is:ct;function lt(t,s){if(Qe(t,s))return!0;if(typeof t!="object"||t===null||typeof s!="object"||s===null)return!1;var o=Object.keys(t),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!Oe.call(s,f)||!Qe(t[f],s[f]))return!1}return!0}function rn(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dn(t,s){var o=rn(t);t=0;for(var r;o;){if(o.nodeType===3){if(r=t+o.textContent.length,t<=s&&r>=s)return{node:o,offset:s-t};t=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=rn(o)}}function An(t,s){return t&&s?t===s?!0:t&&t.nodeType===3?!1:s&&s.nodeType===3?An(t,s.parentNode):"contains"in t?t.contains(s):t.compareDocumentPosition?!!(t.compareDocumentPosition(s)&16):!1:!1}function Zt(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var s=oo(t.document);s instanceof t.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)t=s.contentWindow;else break;s=oo(t.document)}return s}function Xt(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s&&(s==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||s==="textarea"||t.contentEditable==="true")}var Nt=Is&&"documentMode"in document&&11>=document.documentMode,Gt=null,qn=null,En=null,Us=!1;function Co(t,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Us||Gt==null||Gt!==oo(r)||(r=Gt,"selectionStart"in r&&Xt(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),En&&lt(En,r)||(En=r,r=Bu(qn,"onSelect"),0<r.length&&(s=new yo("onSelect","select",null,s,o),t.push({event:s,listeners:r}),s.target=Gt)))}function es(t,s){var o={};return o[t.toLowerCase()]=s.toLowerCase(),o["Webkit"+t]="webkit"+s,o["Moz"+t]="moz"+s,o}var oi={animationend:es("Animation","AnimationEnd"),animationiteration:es("Animation","AnimationIteration"),animationstart:es("Animation","AnimationStart"),transitionrun:es("Transition","TransitionRun"),transitionstart:es("Transition","TransitionStart"),transitioncancel:es("Transition","TransitionCancel"),transitionend:es("Transition","TransitionEnd")},mi={},pi={};Is&&(pi=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function Kn(t){if(mi[t])return mi[t];if(!oi[t])return t;var s=oi[t],o;for(o in s)if(s.hasOwnProperty(o)&&o in pi)return mi[t]=s[o];return t}var _i=Kn("animationend"),Mi=Kn("animationiteration"),mr=Kn("animationstart"),Pr=Kn("transitionrun"),Hr=Kn("transitionstart"),Ur=Kn("transitioncancel"),Ll=Kn("transitionend"),Ol=new Map,jn="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jn.push("scrollEnd");function Rn(t,s){Ol.set(t,s),Jn(s,[t])}var ko=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Vs=[],Ji=0,Io=0;function Es(){for(var t=Ji,s=Io=Ji=0;s<t;){var o=Vs[s];Vs[s++]=null;var r=Vs[s];Vs[s++]=null;var f=Vs[s];Vs[s++]=null;var m=Vs[s];if(Vs[s++]=null,r!==null&&f!==null){var v=r.pending;v===null?f.next=f:(f.next=v.next,v.next=f),r.pending=f}m!==0&&r_(o,f,m)}}function qc(t,s,o,r){Vs[Ji++]=t,Vs[Ji++]=s,Vs[Ji++]=o,Vs[Ji++]=r,Io|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function tf(t,s,o,r){return qc(t,s,o,r),Kc(t)}function pr(t,s){return qc(t,null,null,s),Kc(t)}function r_(t,s,o){t.lanes|=o;var r=t.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=t.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&s!==null&&(f=31-xe(o),t=m.hiddenUpdates,r=t[f],r===null?t[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Kc(t){if(50<oc)throw oc=0,dh=null,Error(a(185));for(var s=t.return;s!==null;)t=s,s=t.return;return t.tag===3?t.stateNode:null}var Vr={};function k2(t,s,o,r){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(t,s,o,r){return new k2(t,s,o,r)}function nf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ya(t,s){var o=t.alternate;return o===null?(o=Ei(t.tag,s,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=s,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&65011712,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,s=t.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o.refCleanup=t.refCleanup,o}function l_(t,s){t.flags&=65011714;var o=t.alternate;return o===null?(t.childLanes=0,t.lanes=s,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=o.childLanes,t.lanes=o.lanes,t.child=o.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=o.memoizedProps,t.memoizedState=o.memoizedState,t.updateQueue=o.updateQueue,t.type=o.type,s=o.dependencies,t.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),t}function Qc(t,s,o,r,f,m){var v=0;if(r=t,typeof t=="function")nf(t)&&(v=1);else if(typeof t=="string")v=Av(t,o,we.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case de:return t=Ei(31,o,s,f),t.elementType=de,t.lanes=m,t;case j:return _r(o.children,f,m,s);case k:v=8,f|=24;break;case E:return t=Ei(12,o,s,f|2),t.elementType=E,t.lanes=m,t;case X:return t=Ei(13,o,s,f),t.elementType=X,t.lanes=m,t;case F:return t=Ei(19,o,s,f),t.elementType=F,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:v=10;break e;case I:v=9;break e;case M:v=11;break e;case U:v=14;break e;case K:v=16,r=null;break e}v=29,o=Error(a(130,t===null?"null":typeof t,"")),r=null}return s=Ei(v,o,s,f),s.elementType=t,s.type=r,s.lanes=m,s}function _r(t,s,o,r){return t=Ei(7,t,r,s),t.lanes=o,t}function sf(t,s,o){return t=Ei(6,t,null,s),t.lanes=o,t}function c_(t){var s=Ei(18,null,null,0);return s.stateNode=t,s}function of(t,s,o){return s=Ei(4,t.children!==null?t.children:[],t.key,s),s.lanes=o,s.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},s}var u_=new WeakMap;function Pi(t,s){if(typeof t=="object"&&t!==null){var o=u_.get(t);return o!==void 0?o:(s={value:t,source:s,stack:Q(s)},u_.set(t,s),s)}return{value:t,source:s,stack:Q(s)}}var Yr=[],Wr=0,Zc=null,zl=0,Hi=[],Ui=0,$a=null,ca=1,ua="";function xa(t,s){Yr[Wr++]=zl,Yr[Wr++]=Zc,Zc=t,zl=s}function d_(t,s,o){Hi[Ui++]=ca,Hi[Ui++]=ua,Hi[Ui++]=$a,$a=t;var r=ca;t=ua;var f=32-xe(r)-1;r&=~(1<<f),o+=1;var m=32-xe(s)+f;if(30<m){var v=f-f%5;m=(r&(1<<v)-1).toString(32),r>>=v,f-=v,ca=1<<32-xe(s)+f|o<<f|r,ua=m+t}else ca=1<<m|o<<f|r,ua=t}function af(t){t.return!==null&&(xa(t,1),d_(t,1,0))}function rf(t){for(;t===Zc;)Zc=Yr[--Wr],Yr[Wr]=null,zl=Yr[--Wr],Yr[Wr]=null;for(;t===$a;)$a=Hi[--Ui],Hi[Ui]=null,ua=Hi[--Ui],Hi[Ui]=null,ca=Hi[--Ui],Hi[Ui]=null}function f_(t,s){Hi[Ui++]=ca,Hi[Ui++]=ua,Hi[Ui++]=$a,ca=s.id,ua=s.overflow,$a=t}var Po=null,Ts=null,Hn=!1,Ia=null,Vi=!1,lf=Error(a(519));function Pa(t){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $l(Pi(s,t)),lf}function h_(t){var s=t.stateNode,o=t.type,r=t.memoizedProps;switch(s[Mt]=t,s[wn]=r,o){case"dialog":Ln("cancel",s),Ln("close",s);break;case"iframe":case"object":case"embed":Ln("load",s);break;case"video":case"audio":for(o=0;o<ac.length;o++)Ln(ac[o],s);break;case"source":Ln("error",s);break;case"img":case"image":case"link":Ln("error",s),Ln("load",s);break;case"details":Ln("toggle",s);break;case"input":Ln("invalid",s),Cn(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ln("invalid",s);break;case"textarea":Ln("invalid",s),ao(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||A0(s.textContent,o)?(r.popover!=null&&(Ln("beforetoggle",s),Ln("toggle",s)),r.onScroll!=null&&Ln("scroll",s),r.onScrollEnd!=null&&Ln("scrollend",s),r.onClick!=null&&(s.onclick=Ms),s=!0):s=!1,s||Pa(t,!0)}function m_(t){for(Po=t.return;Po;)switch(Po.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:Po=Po.return}}function Fr(t){if(t!==Po)return!1;if(!Hn)return m_(t),Hn=!0,!1;var s=t.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=t.type,o=!(o!=="form"&&o!=="button")||jh(t.type,t.memoizedProps)),o=!o),o&&Ts&&Pa(t),m_(t),s===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Ts=I0(t)}else if(s===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Ts=I0(t)}else s===27?(s=Ts,er(t.type)?(t=Nh,Nh=null,Ts=t):Ts=s):Ts=Po?Wi(t.stateNode.nextSibling):null;return!0}function gr(){Ts=Po=null,Hn=!1}function cf(){var t=Ia;return t!==null&&(bi===null?bi=t:bi.push.apply(bi,t),Ia=null),t}function $l(t){Ia===null?Ia=[t]:Ia.push(t)}var uf=z(null),yr=null,ba=null;function Ha(t,s,o){ee(uf,s._currentValue),s._currentValue=o}function va(t){t._currentValue=uf.current,ce(uf)}function df(t,s,o){for(;t!==null;){var r=t.alternate;if((t.childLanes&s)!==s?(t.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),t===o)break;t=t.return}}function ff(t,s,o,r){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var q=0;q<s.length;q++)if(A.context===s[q]){m.lanes|=o,A=m.alternate,A!==null&&(A.lanes|=o),df(m.return,o,t),r||(v=null);break e}m=A.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),df(v,o,t),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===t){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Xr(t,s,o,r){t=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var A=f.type;Qe(f.pendingProps.value,v.value)||(t!==null?t.push(A):t=[A])}}else if(f===Pe.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(dc):t=[dc])}f=f.return}t!==null&&ff(s,t,o,r),s.flags|=262144}function Jc(t){for(t=t.firstContext;t!==null;){if(!Qe(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function xr(t){yr=t,ba=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ho(t){return p_(yr,t)}function eu(t,s){return yr===null&&xr(t),p_(t,s)}function p_(t,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},ba===null){if(t===null)throw Error(a(308));ba=s,t.dependencies={lanes:0,firstContext:s},t.flags|=524288}else ba=ba.next=s;return o}var j2=typeof AbortController<"u"?AbortController:function(){var t=[],s=this.signal={aborted:!1,addEventListener:function(o,r){t.push(r)}};this.abort=function(){s.aborted=!0,t.forEach(function(o){return o()})}},M2=e.unstable_scheduleCallback,E2=e.unstable_NormalPriority,lo={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hf(){return{controller:new j2,data:new Map,refCount:0}}function Il(t){t.refCount--,t.refCount===0&&M2(E2,function(){t.controller.abort()})}var Pl=null,mf=0,Gr=0,qr=null;function T2(t,s){if(Pl===null){var o=Pl=[];mf=0,Gr=gh(),qr={status:"pending",value:void 0,then:function(r){o.push(r)}}}return mf++,s.then(__,__),s}function __(){if(--mf===0&&Pl!==null){qr!==null&&(qr.status="fulfilled");var t=Pl;Pl=null,Gr=0,qr=null;for(var s=0;s<t.length;s++)(0,t[s])()}}function A2(t,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return t.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var g_=B.S;B.S=function(t,s){e0=bt(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&T2(t,s),g_!==null&&g_(t,s)};var br=z(null);function pf(){var t=br.current;return t!==null?t:bs.pooledCache}function tu(t,s){s===null?ee(br,br.current):ee(br,s.pool)}function y_(){var t=pf();return t===null?null:{parent:lo._currentValue,pool:t}}var Kr=Error(a(460)),_f=Error(a(474)),nu=Error(a(542)),su={then:function(){}};function x_(t){return t=t.status,t==="fulfilled"||t==="rejected"}function b_(t,s,o){switch(o=t[o],o===void 0?t.push(s):o!==s&&(s.then(Ms,Ms),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,w_(t),t;default:if(typeof s.status=="string")s.then(Ms,Ms);else{if(t=bs,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=s,t.status="pending",t.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,w_(t),t}throw wr=s,Kr}}function vr(t){try{var s=t._init;return s(t._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(wr=o,Kr):o}}var wr=null;function v_(){if(wr===null)throw Error(a(459));var t=wr;return wr=null,t}function w_(t){if(t===Kr||t===nu)throw Error(a(483))}var Qr=null,Hl=0;function ou(t){var s=Hl;return Hl+=1,Qr===null&&(Qr=[]),b_(Qr,t,s)}function Ul(t,s){s=s.props.ref,t.ref=s!==void 0?s:null}function iu(t,s){throw s.$$typeof===b?Error(a(525)):(t=Object.prototype.toString.call(s),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":t)))}function S_(t){function s(ue,oe){if(t){var be=ue.deletions;be===null?(ue.deletions=[oe],ue.flags|=16):be.push(oe)}}function o(ue,oe){if(!t)return null;for(;oe!==null;)s(ue,oe),oe=oe.sibling;return null}function r(ue){for(var oe=new Map;ue!==null;)ue.key!==null?oe.set(ue.key,ue):oe.set(ue.index,ue),ue=ue.sibling;return oe}function f(ue,oe){return ue=ya(ue,oe),ue.index=0,ue.sibling=null,ue}function m(ue,oe,be){return ue.index=be,t?(be=ue.alternate,be!==null?(be=be.index,be<oe?(ue.flags|=67108866,oe):be):(ue.flags|=67108866,oe)):(ue.flags|=1048576,oe)}function v(ue){return t&&ue.alternate===null&&(ue.flags|=67108866),ue}function A(ue,oe,be,Ve){return oe===null||oe.tag!==6?(oe=sf(be,ue.mode,Ve),oe.return=ue,oe):(oe=f(oe,be),oe.return=ue,oe)}function q(ue,oe,be,Ve){var Ft=be.type;return Ft===j?Ie(ue,oe,be.props.children,Ve,be.key):oe!==null&&(oe.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===K&&vr(Ft)===oe.type)?(oe=f(oe,be.props),Ul(oe,be),oe.return=ue,oe):(oe=Qc(be.type,be.key,be.props,null,ue.mode,Ve),Ul(oe,be),oe.return=ue,oe)}function ve(ue,oe,be,Ve){return oe===null||oe.tag!==4||oe.stateNode.containerInfo!==be.containerInfo||oe.stateNode.implementation!==be.implementation?(oe=of(be,ue.mode,Ve),oe.return=ue,oe):(oe=f(oe,be.children||[]),oe.return=ue,oe)}function Ie(ue,oe,be,Ve,Ft){return oe===null||oe.tag!==7?(oe=_r(be,ue.mode,Ve,Ft),oe.return=ue,oe):(oe=f(oe,be),oe.return=ue,oe)}function We(ue,oe,be){if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return oe=sf(""+oe,ue.mode,be),oe.return=ue,oe;if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case w:return be=Qc(oe.type,oe.key,oe.props,null,ue.mode,be),Ul(be,oe),be.return=ue,be;case S:return oe=of(oe,ue.mode,be),oe.return=ue,oe;case K:return oe=vr(oe),We(ue,oe,be)}if(ie(oe)||Le(oe))return oe=_r(oe,ue.mode,be,null),oe.return=ue,oe;if(typeof oe.then=="function")return We(ue,ou(oe),be);if(oe.$$typeof===N)return We(ue,eu(ue,oe),be);iu(ue,oe)}return null}function Ce(ue,oe,be,Ve){var Ft=oe!==null?oe.key:null;if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return Ft!==null?null:A(ue,oe,""+be,Ve);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case w:return be.key===Ft?q(ue,oe,be,Ve):null;case S:return be.key===Ft?ve(ue,oe,be,Ve):null;case K:return be=vr(be),Ce(ue,oe,be,Ve)}if(ie(be)||Le(be))return Ft!==null?null:Ie(ue,oe,be,Ve,null);if(typeof be.then=="function")return Ce(ue,oe,ou(be),Ve);if(be.$$typeof===N)return Ce(ue,oe,eu(ue,be),Ve);iu(ue,be)}return null}function Te(ue,oe,be,Ve,Ft){if(typeof Ve=="string"&&Ve!==""||typeof Ve=="number"||typeof Ve=="bigint")return ue=ue.get(be)||null,A(oe,ue,""+Ve,Ft);if(typeof Ve=="object"&&Ve!==null){switch(Ve.$$typeof){case w:return ue=ue.get(Ve.key===null?be:Ve.key)||null,q(oe,ue,Ve,Ft);case S:return ue=ue.get(Ve.key===null?be:Ve.key)||null,ve(oe,ue,Ve,Ft);case K:return Ve=vr(Ve),Te(ue,oe,be,Ve,Ft)}if(ie(Ve)||Le(Ve))return ue=ue.get(be)||null,Ie(oe,ue,Ve,Ft,null);if(typeof Ve.then=="function")return Te(ue,oe,be,ou(Ve),Ft);if(Ve.$$typeof===N)return Te(ue,oe,be,eu(oe,Ve),Ft);iu(oe,Ve)}return null}function Bt(ue,oe,be,Ve){for(var Ft=null,Wn=null,Pt=oe,vn=oe=0,In=null;Pt!==null&&vn<be.length;vn++){Pt.index>vn?(In=Pt,Pt=null):In=Pt.sibling;var Fn=Ce(ue,Pt,be[vn],Ve);if(Fn===null){Pt===null&&(Pt=In);break}t&&Pt&&Fn.alternate===null&&s(ue,Pt),oe=m(Fn,oe,vn),Wn===null?Ft=Fn:Wn.sibling=Fn,Wn=Fn,Pt=In}if(vn===be.length)return o(ue,Pt),Hn&&xa(ue,vn),Ft;if(Pt===null){for(;vn<be.length;vn++)Pt=We(ue,be[vn],Ve),Pt!==null&&(oe=m(Pt,oe,vn),Wn===null?Ft=Pt:Wn.sibling=Pt,Wn=Pt);return Hn&&xa(ue,vn),Ft}for(Pt=r(Pt);vn<be.length;vn++)In=Te(Pt,ue,vn,be[vn],Ve),In!==null&&(t&&In.alternate!==null&&Pt.delete(In.key===null?vn:In.key),oe=m(In,oe,vn),Wn===null?Ft=In:Wn.sibling=In,Wn=In);return t&&Pt.forEach(function(ir){return s(ue,ir)}),Hn&&xa(ue,vn),Ft}function Jt(ue,oe,be,Ve){if(be==null)throw Error(a(151));for(var Ft=null,Wn=null,Pt=oe,vn=oe=0,In=null,Fn=be.next();Pt!==null&&!Fn.done;vn++,Fn=be.next()){Pt.index>vn?(In=Pt,Pt=null):In=Pt.sibling;var ir=Ce(ue,Pt,Fn.value,Ve);if(ir===null){Pt===null&&(Pt=In);break}t&&Pt&&ir.alternate===null&&s(ue,Pt),oe=m(ir,oe,vn),Wn===null?Ft=ir:Wn.sibling=ir,Wn=ir,Pt=In}if(Fn.done)return o(ue,Pt),Hn&&xa(ue,vn),Ft;if(Pt===null){for(;!Fn.done;vn++,Fn=be.next())Fn=We(ue,Fn.value,Ve),Fn!==null&&(oe=m(Fn,oe,vn),Wn===null?Ft=Fn:Wn.sibling=Fn,Wn=Fn);return Hn&&xa(ue,vn),Ft}for(Pt=r(Pt);!Fn.done;vn++,Fn=be.next())Fn=Te(Pt,ue,vn,Fn.value,Ve),Fn!==null&&(t&&Fn.alternate!==null&&Pt.delete(Fn.key===null?vn:Fn.key),oe=m(Fn,oe,vn),Wn===null?Ft=Fn:Wn.sibling=Fn,Wn=Fn);return t&&Pt.forEach(function(Hv){return s(ue,Hv)}),Hn&&xa(ue,vn),Ft}function ms(ue,oe,be,Ve){if(typeof be=="object"&&be!==null&&be.type===j&&be.key===null&&(be=be.props.children),typeof be=="object"&&be!==null){switch(be.$$typeof){case w:e:{for(var Ft=be.key;oe!==null;){if(oe.key===Ft){if(Ft=be.type,Ft===j){if(oe.tag===7){o(ue,oe.sibling),Ve=f(oe,be.props.children),Ve.return=ue,ue=Ve;break e}}else if(oe.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===K&&vr(Ft)===oe.type){o(ue,oe.sibling),Ve=f(oe,be.props),Ul(Ve,be),Ve.return=ue,ue=Ve;break e}o(ue,oe);break}else s(ue,oe);oe=oe.sibling}be.type===j?(Ve=_r(be.props.children,ue.mode,Ve,be.key),Ve.return=ue,ue=Ve):(Ve=Qc(be.type,be.key,be.props,null,ue.mode,Ve),Ul(Ve,be),Ve.return=ue,ue=Ve)}return v(ue);case S:e:{for(Ft=be.key;oe!==null;){if(oe.key===Ft)if(oe.tag===4&&oe.stateNode.containerInfo===be.containerInfo&&oe.stateNode.implementation===be.implementation){o(ue,oe.sibling),Ve=f(oe,be.children||[]),Ve.return=ue,ue=Ve;break e}else{o(ue,oe);break}else s(ue,oe);oe=oe.sibling}Ve=of(be,ue.mode,Ve),Ve.return=ue,ue=Ve}return v(ue);case K:return be=vr(be),ms(ue,oe,be,Ve)}if(ie(be))return Bt(ue,oe,be,Ve);if(Le(be)){if(Ft=Le(be),typeof Ft!="function")throw Error(a(150));return be=Ft.call(be),Jt(ue,oe,be,Ve)}if(typeof be.then=="function")return ms(ue,oe,ou(be),Ve);if(be.$$typeof===N)return ms(ue,oe,eu(ue,be),Ve);iu(ue,be)}return typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint"?(be=""+be,oe!==null&&oe.tag===6?(o(ue,oe.sibling),Ve=f(oe,be),Ve.return=ue,ue=Ve):(o(ue,oe),Ve=sf(be,ue.mode,Ve),Ve.return=ue,ue=Ve),v(ue)):o(ue,oe)}return function(ue,oe,be,Ve){try{Hl=0;var Ft=ms(ue,oe,be,Ve);return Qr=null,Ft}catch(Pt){if(Pt===Kr||Pt===nu)throw Pt;var Wn=Ei(29,Pt,null,ue.mode);return Wn.lanes=Ve,Wn.return=ue,Wn}finally{}}}var Sr=S_(!0),C_=S_(!1),Ua=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yf(t,s){t=t.updateQueue,s.updateQueue===t&&(s.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ya(t,s,o){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Qn&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Kc(t),r_(t,null,o),s}return qc(t,r,s,o),Kc(t)}function Vl(t,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=t.pendingLanes,o|=r,s.lanes=o,Rt(t,o)}}function xf(t,s){var o=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=s:t.next=s,o.lastBaseUpdate=s}var bf=!1;function Yl(){if(bf){var t=qr;if(t!==null)throw t}}function Wl(t,s,o,r){bf=!1;var f=t.updateQueue;Ua=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var q=A,ve=q.next;q.next=null,v===null?m=ve:v.next=ve,v=q;var Ie=t.alternate;Ie!==null&&(Ie=Ie.updateQueue,A=Ie.lastBaseUpdate,A!==v&&(A===null?Ie.firstBaseUpdate=ve:A.next=ve,Ie.lastBaseUpdate=q))}if(m!==null){var We=f.baseState;v=0,Ie=ve=q=null,A=m;do{var Ce=A.lane&-536870913,Te=Ce!==A.lane;if(Te?($n&Ce)===Ce:(r&Ce)===Ce){Ce!==0&&Ce===Gr&&(bf=!0),Ie!==null&&(Ie=Ie.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Bt=t,Jt=A;Ce=s;var ms=o;switch(Jt.tag){case 1:if(Bt=Jt.payload,typeof Bt=="function"){We=Bt.call(ms,We,Ce);break e}We=Bt;break e;case 3:Bt.flags=Bt.flags&-65537|128;case 0:if(Bt=Jt.payload,Ce=typeof Bt=="function"?Bt.call(ms,We,Ce):Bt,Ce==null)break e;We=x({},We,Ce);break e;case 2:Ua=!0}}Ce=A.callback,Ce!==null&&(t.flags|=64,Te&&(t.flags|=8192),Te=f.callbacks,Te===null?f.callbacks=[Ce]:Te.push(Ce))}else Te={lane:Ce,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Ie===null?(ve=Ie=Te,q=We):Ie=Ie.next=Te,v|=Ce;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;Te=A,A=Te.next,Te.next=null,f.lastBaseUpdate=Te,f.shared.pending=null}}while(!0);Ie===null&&(q=We),f.baseState=q,f.firstBaseUpdate=ve,f.lastBaseUpdate=Ie,m===null&&(f.shared.lanes=0),qa|=v,t.lanes=v,t.memoizedState=We}}function k_(t,s){if(typeof t!="function")throw Error(a(191,t));t.call(s)}function j_(t,s){var o=t.callbacks;if(o!==null)for(t.callbacks=null,t=0;t<o.length;t++)k_(o[t],s)}var Zr=z(null),au=z(0);function M_(t,s){t=Aa,ee(au,t),ee(Zr,s),Aa=t|s.baseLanes}function vf(){ee(au,Aa),ee(Zr,Zr.current)}function wf(){Aa=au.current,ce(Zr),ce(au)}var Ti=z(null),Yi=null;function Wa(t){var s=t.alternate;ee(to,to.current&1),ee(Ti,t),Yi===null&&(s===null||Zr.current!==null||s.memoizedState!==null)&&(Yi=t)}function Sf(t){ee(to,to.current),ee(Ti,t),Yi===null&&(Yi=t)}function E_(t){t.tag===22?(ee(to,to.current),ee(Ti,t),Yi===null&&(Yi=t)):Fa()}function Fa(){ee(to,to.current),ee(Ti,Ti.current)}function Ai(t){ce(Ti),Yi===t&&(Yi=null),ce(to)}var to=z(0);function ru(t){for(var s=t;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Th(o)||Ah(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var wa=0,yn=null,fs=null,co=null,lu=!1,Jr=!1,Cr=!1,cu=0,Fl=0,el=null,N2=0;function Ys(){throw Error(a(321))}function Cf(t,s){if(s===null)return!1;for(var o=0;o<s.length&&o<t.length;o++)if(!Qe(t[o],s[o]))return!1;return!0}function kf(t,s,o,r,f,m){return wa=m,yn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,B.H=t===null||t.memoizedState===null?dg:Pf,Cr=!1,m=o(r,f),Cr=!1,Jr&&(m=A_(s,o,r,f)),T_(t),m}function T_(t){B.H=ql;var s=fs!==null&&fs.next!==null;if(wa=0,co=fs=yn=null,lu=!1,Fl=0,el=null,s)throw Error(a(300));t===null||uo||(t=t.dependencies,t!==null&&Jc(t)&&(uo=!0))}function A_(t,s,o,r){yn=t;var f=0;do{if(Jr&&(el=null),Fl=0,Jr=!1,25<=f)throw Error(a(301));if(f+=1,co=fs=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=fg,m=s(o,r)}while(Jr);return m}function D2(){var t=B.H,s=t.useState()[0];return s=typeof s.then=="function"?Xl(s):s,t=t.useState()[0],(fs!==null?fs.memoizedState:null)!==t&&(yn.flags|=1024),s}function jf(){var t=cu!==0;return cu=0,t}function Mf(t,s,o){s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~o}function Ef(t){if(lu){for(t=t.memoizedState;t!==null;){var s=t.queue;s!==null&&(s.pending=null),t=t.next}lu=!1}wa=0,co=fs=yn=null,Jr=!1,Fl=cu=0,el=null}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return co===null?yn.memoizedState=co=t:co=co.next=t,co}function no(){if(fs===null){var t=yn.alternate;t=t!==null?t.memoizedState:null}else t=fs.next;var s=co===null?yn.memoizedState:co.next;if(s!==null)co=s,fs=t;else{if(t===null)throw yn.alternate===null?Error(a(467)):Error(a(310));fs=t,t={memoizedState:fs.memoizedState,baseState:fs.baseState,baseQueue:fs.baseQueue,queue:fs.queue,next:null},co===null?yn.memoizedState=co=t:co=co.next=t}return co}function uu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xl(t){var s=Fl;return Fl+=1,el===null&&(el=[]),t=b_(el,t,s),s=yn,(co===null?s.memoizedState:co.next)===null&&(s=s.alternate,B.H=s===null||s.memoizedState===null?dg:Pf),t}function du(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xl(t);if(t.$$typeof===N)return Ho(t)}throw Error(a(438,String(t)))}function Tf(t){var s=null,o=yn.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=yn.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=uu(),yn.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(t),r=0;r<t;r++)o[r]=pe;return s.index++,o}function Sa(t,s){return typeof s=="function"?s(t):s}function fu(t){var s=no();return Af(s,fs,t)}function Af(t,s,o){var r=t.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=t.baseQueue,m=r.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,r.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{s=f.next;var A=v=null,q=null,ve=s,Ie=!1;do{var We=ve.lane&-536870913;if(We!==ve.lane?($n&We)===We:(wa&We)===We){var Ce=ve.revertLane;if(Ce===0)q!==null&&(q=q.next={lane:0,revertLane:0,gesture:null,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null}),We===Gr&&(Ie=!0);else if((wa&Ce)===Ce){ve=ve.next,Ce===Gr&&(Ie=!0);continue}else We={lane:0,revertLane:ve.revertLane,gesture:null,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null},q===null?(A=q=We,v=m):q=q.next=We,yn.lanes|=Ce,qa|=Ce;We=ve.action,Cr&&o(m,We),m=ve.hasEagerState?ve.eagerState:o(m,We)}else Ce={lane:We,revertLane:ve.revertLane,gesture:ve.gesture,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null},q===null?(A=q=Ce,v=m):q=q.next=Ce,yn.lanes|=We,qa|=We;ve=ve.next}while(ve!==null&&ve!==s);if(q===null?v=m:q.next=A,!Qe(m,t.memoizedState)&&(uo=!0,Ie&&(o=qr,o!==null)))throw o;t.memoizedState=m,t.baseState=v,t.baseQueue=q,r.lastRenderedState=m}return f===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Nf(t){var s=no(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=t;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=t(m,v.action),v=v.next;while(v!==f);Qe(m,s.memoizedState)||(uo=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function N_(t,s,o){var r=yn,f=no(),m=Hn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!Qe((fs||f).memoizedState,o);if(v&&(f.memoizedState=o,uo=!0),f=f.queue,Bf(B_.bind(null,r,f,t),[t]),f.getSnapshot!==s||v||co!==null&&co.memoizedState.tag&1){if(r.flags|=2048,tl(9,{destroy:void 0},R_.bind(null,r,f,o,s),null),bs===null)throw Error(a(349));m||(wa&127)!==0||D_(r,s,o)}return o}function D_(t,s,o){t.flags|=16384,t={getSnapshot:s,value:o},s=yn.updateQueue,s===null?(s=uu(),yn.updateQueue=s,s.stores=[t]):(o=s.stores,o===null?s.stores=[t]:o.push(t))}function R_(t,s,o,r){s.value=o,s.getSnapshot=r,L_(s)&&O_(t)}function B_(t,s,o){return o(function(){L_(s)&&O_(t)})}function L_(t){var s=t.getSnapshot;t=t.value;try{var o=s();return!Qe(t,o)}catch{return!0}}function O_(t){var s=pr(t,2);s!==null&&vi(s,t,2)}function Df(t){var s=ii();if(typeof t=="function"){var o=t;if(t=o(),Cr){$e(!0);try{o()}finally{$e(!1)}}}return s.memoizedState=s.baseState=t,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},s}function z_(t,s,o,r){return t.baseState=o,Af(t,fs,typeof r=="function"?r:Sa)}function R2(t,s,o,r,f){if(pu(t))throw Error(a(485));if(t=s.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};B.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,$_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function $_(t,s){var o=s.action,r=s.payload,f=t.state;if(s.isTransition){var m=B.T,v={};B.T=v;try{var A=o(f,r),q=B.S;q!==null&&q(v,A),I_(t,s,A)}catch(ve){Rf(t,s,ve)}finally{m!==null&&v.types!==null&&(m.types=v.types),B.T=m}}else try{m=o(f,r),I_(t,s,m)}catch(ve){Rf(t,s,ve)}}function I_(t,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){P_(t,s,r)},function(r){return Rf(t,s,r)}):P_(t,s,o)}function P_(t,s,o){s.status="fulfilled",s.value=o,H_(s),t.state=o,s=t.pending,s!==null&&(o=s.next,o===s?t.pending=null:(o=o.next,s.next=o,$_(t,o)))}function Rf(t,s,o){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,H_(s),s=s.next;while(s!==r)}t.action=null}function H_(t){t=t.listeners;for(var s=0;s<t.length;s++)(0,t[s])()}function U_(t,s){return s}function V_(t,s){if(Hn){var o=bs.formState;if(o!==null){e:{var r=yn;if(Hn){if(Ts){t:{for(var f=Ts,m=Vi;f.nodeType!==8;){if(!m){f=null;break t}if(f=Wi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Ts=Wi(f.nextSibling),r=f.data==="F!";break e}}Pa(r)}r=!1}r&&(s=o[0])}}return o=ii(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:U_,lastRenderedState:s},o.queue=r,o=lg.bind(null,yn,r),r.dispatch=o,r=Df(!1),m=If.bind(null,yn,!1,r.queue),r=ii(),f={state:s,dispatch:null,action:t,pending:null},r.queue=f,o=R2.bind(null,yn,f,m,o),f.dispatch=o,r.memoizedState=t,[s,o,!1]}function Y_(t){var s=no();return W_(s,fs,t)}function W_(t,s,o){if(s=Af(t,s,U_)[0],t=fu(Sa)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=Xl(s)}catch(v){throw v===Kr?nu:v}else r=s;s=no();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(yn.flags|=2048,tl(9,{destroy:void 0},B2.bind(null,f,o),null)),[r,m,t]}function B2(t,s){t.action=s}function F_(t){var s=no(),o=fs;if(o!==null)return W_(s,o,t);no(),s=s.memoizedState,o=no();var r=o.queue.dispatch;return o.memoizedState=t,[s,r,!1]}function tl(t,s,o,r){return t={tag:t,create:o,deps:r,inst:s,next:null},s=yn.updateQueue,s===null&&(s=uu(),yn.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=t.next=t:(r=o.next,o.next=t,t.next=r,s.lastEffect=t),t}function X_(){return no().memoizedState}function hu(t,s,o,r){var f=ii();yn.flags|=t,f.memoizedState=tl(1|s,{destroy:void 0},o,r===void 0?null:r)}function mu(t,s,o,r){var f=no();r=r===void 0?null:r;var m=f.memoizedState.inst;fs!==null&&r!==null&&Cf(r,fs.memoizedState.deps)?f.memoizedState=tl(s,m,o,r):(yn.flags|=t,f.memoizedState=tl(1|s,m,o,r))}function G_(t,s){hu(8390656,8,t,s)}function Bf(t,s){mu(2048,8,t,s)}function L2(t){yn.flags|=4;var s=yn.updateQueue;if(s===null)s=uu(),yn.updateQueue=s,s.events=[t];else{var o=s.events;o===null?s.events=[t]:o.push(t)}}function q_(t){var s=no().memoizedState;return L2({ref:s,nextImpl:t}),function(){if((Qn&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function K_(t,s){return mu(4,2,t,s)}function Q_(t,s){return mu(4,4,t,s)}function Z_(t,s){if(typeof s=="function"){t=t();var o=s(t);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return t=t(),s.current=t,function(){s.current=null}}function J_(t,s,o){o=o!=null?o.concat([t]):null,mu(4,4,Z_.bind(null,s,t),o)}function Lf(){}function eg(t,s){var o=no();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&Cf(s,r[1])?r[0]:(o.memoizedState=[t,s],t)}function tg(t,s){var o=no();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&Cf(s,r[1]))return r[0];if(r=t(),Cr){$e(!0);try{t()}finally{$e(!1)}}return o.memoizedState=[r,s],r}function Of(t,s,o){return o===void 0||(wa&1073741824)!==0&&($n&261930)===0?t.memoizedState=s:(t.memoizedState=o,t=n0(),yn.lanes|=t,qa|=t,o)}function ng(t,s,o,r){return Qe(o,s)?o:Zr.current!==null?(t=Of(t,o,r),Qe(t,s)||(uo=!0),t):(wa&42)===0||(wa&1073741824)!==0&&($n&261930)===0?(uo=!0,t.memoizedState=o):(t=n0(),yn.lanes|=t,qa|=t,s)}function sg(t,s,o,r,f){var m=se.p;se.p=m!==0&&8>m?m:8;var v=B.T,A={};B.T=A,If(t,!1,s,o);try{var q=f(),ve=B.S;if(ve!==null&&ve(A,q),q!==null&&typeof q=="object"&&typeof q.then=="function"){var Ie=A2(q,r);Gl(t,s,Ie,Ri(t))}else Gl(t,s,r,Ri(t))}catch(We){Gl(t,s,{then:function(){},status:"rejected",reason:We},Ri())}finally{se.p=m,v!==null&&A.types!==null&&(v.types=A.types),B.T=v}}function O2(){}function zf(t,s,o,r){if(t.tag!==5)throw Error(a(476));var f=og(t).queue;sg(t,f,s,H,o===null?O2:function(){return ig(t),o(r)})}function og(t){var s=t.memoizedState;if(s!==null)return s;s={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:H},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:o},next:null},t.memoizedState=s,t=t.alternate,t!==null&&(t.memoizedState=s),s}function ig(t){var s=og(t);s.next===null&&(s=t.alternate.memoizedState),Gl(t,s.next.queue,{},Ri())}function $f(){return Ho(dc)}function ag(){return no().memoizedState}function rg(){return no().memoizedState}function z2(t){for(var s=t.return;s!==null;){switch(s.tag){case 24:case 3:var o=Ri();t=Va(o);var r=Ya(s,t,o);r!==null&&(vi(r,s,o),Vl(r,s,o)),s={cache:hf()},t.payload=s;return}s=s.return}}function $2(t,s,o){var r=Ri();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},pu(t)?cg(s,o):(o=tf(t,s,o,r),o!==null&&(vi(o,t,r),ug(o,s,r)))}function lg(t,s,o){var r=Ri();Gl(t,s,o,r)}function Gl(t,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(pu(t))cg(s,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,A=m(v,o);if(f.hasEagerState=!0,f.eagerState=A,Qe(A,v))return qc(t,s,f,0),bs===null&&Es(),!1}catch{}finally{}if(o=tf(t,s,f,r),o!==null)return vi(o,t,r),ug(o,s,r),!0}return!1}function If(t,s,o,r){if(r={lane:2,revertLane:gh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},pu(t)){if(s)throw Error(a(479))}else s=tf(t,o,r,2),s!==null&&vi(s,t,2)}function pu(t){var s=t.alternate;return t===yn||s!==null&&s===yn}function cg(t,s){Jr=lu=!0;var o=t.pending;o===null?s.next=s:(s.next=o.next,o.next=s),t.pending=s}function ug(t,s,o){if((o&4194048)!==0){var r=s.lanes;r&=t.pendingLanes,o|=r,s.lanes=o,Rt(t,o)}}var ql={readContext:Ho,use:du,useCallback:Ys,useContext:Ys,useEffect:Ys,useImperativeHandle:Ys,useLayoutEffect:Ys,useInsertionEffect:Ys,useMemo:Ys,useReducer:Ys,useRef:Ys,useState:Ys,useDebugValue:Ys,useDeferredValue:Ys,useTransition:Ys,useSyncExternalStore:Ys,useId:Ys,useHostTransitionStatus:Ys,useFormState:Ys,useActionState:Ys,useOptimistic:Ys,useMemoCache:Ys,useCacheRefresh:Ys};ql.useEffectEvent=Ys;var dg={readContext:Ho,use:du,useCallback:function(t,s){return ii().memoizedState=[t,s===void 0?null:s],t},useContext:Ho,useEffect:G_,useImperativeHandle:function(t,s,o){o=o!=null?o.concat([t]):null,hu(4194308,4,Z_.bind(null,s,t),o)},useLayoutEffect:function(t,s){return hu(4194308,4,t,s)},useInsertionEffect:function(t,s){hu(4,2,t,s)},useMemo:function(t,s){var o=ii();s=s===void 0?null:s;var r=t();if(Cr){$e(!0);try{t()}finally{$e(!1)}}return o.memoizedState=[r,s],r},useReducer:function(t,s,o){var r=ii();if(o!==void 0){var f=o(s);if(Cr){$e(!0);try{o(s)}finally{$e(!1)}}}else f=s;return r.memoizedState=r.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},r.queue=t,t=t.dispatch=$2.bind(null,yn,t),[r.memoizedState,t]},useRef:function(t){var s=ii();return t={current:t},s.memoizedState=t},useState:function(t){t=Df(t);var s=t.queue,o=lg.bind(null,yn,s);return s.dispatch=o,[t.memoizedState,o]},useDebugValue:Lf,useDeferredValue:function(t,s){var o=ii();return Of(o,t,s)},useTransition:function(){var t=Df(!1);return t=sg.bind(null,yn,t.queue,!0,!1),ii().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,s,o){var r=yn,f=ii();if(Hn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),bs===null)throw Error(a(349));($n&127)!==0||D_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,G_(B_.bind(null,r,m,t),[t]),r.flags|=2048,tl(9,{destroy:void 0},R_.bind(null,r,m,o,s),null),o},useId:function(){var t=ii(),s=bs.identifierPrefix;if(Hn){var o=ua,r=ca;o=(r&~(1<<32-xe(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=cu++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=N2++,s="_"+s+"r_"+o.toString(32)+"_";return t.memoizedState=s},useHostTransitionStatus:$f,useFormState:V_,useActionState:V_,useOptimistic:function(t){var s=ii();s.memoizedState=s.baseState=t;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=If.bind(null,yn,!0,o),o.dispatch=s,[t,s]},useMemoCache:Tf,useCacheRefresh:function(){return ii().memoizedState=z2.bind(null,yn)},useEffectEvent:function(t){var s=ii(),o={impl:t};return s.memoizedState=o,function(){if((Qn&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Pf={readContext:Ho,use:du,useCallback:eg,useContext:Ho,useEffect:Bf,useImperativeHandle:J_,useInsertionEffect:K_,useLayoutEffect:Q_,useMemo:tg,useReducer:fu,useRef:X_,useState:function(){return fu(Sa)},useDebugValue:Lf,useDeferredValue:function(t,s){var o=no();return ng(o,fs.memoizedState,t,s)},useTransition:function(){var t=fu(Sa)[0],s=no().memoizedState;return[typeof t=="boolean"?t:Xl(t),s]},useSyncExternalStore:N_,useId:ag,useHostTransitionStatus:$f,useFormState:Y_,useActionState:Y_,useOptimistic:function(t,s){var o=no();return z_(o,fs,t,s)},useMemoCache:Tf,useCacheRefresh:rg};Pf.useEffectEvent=q_;var fg={readContext:Ho,use:du,useCallback:eg,useContext:Ho,useEffect:Bf,useImperativeHandle:J_,useInsertionEffect:K_,useLayoutEffect:Q_,useMemo:tg,useReducer:Nf,useRef:X_,useState:function(){return Nf(Sa)},useDebugValue:Lf,useDeferredValue:function(t,s){var o=no();return fs===null?Of(o,t,s):ng(o,fs.memoizedState,t,s)},useTransition:function(){var t=Nf(Sa)[0],s=no().memoizedState;return[typeof t=="boolean"?t:Xl(t),s]},useSyncExternalStore:N_,useId:ag,useHostTransitionStatus:$f,useFormState:F_,useActionState:F_,useOptimistic:function(t,s){var o=no();return fs!==null?z_(o,fs,t,s):(o.baseState=t,[t,o.queue.dispatch])},useMemoCache:Tf,useCacheRefresh:rg};fg.useEffectEvent=q_;function Hf(t,s,o,r){s=t.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Uf={enqueueSetState:function(t,s,o){t=t._reactInternals;var r=Ri(),f=Va(r);f.payload=s,o!=null&&(f.callback=o),s=Ya(t,f,r),s!==null&&(vi(s,t,r),Vl(s,t,r))},enqueueReplaceState:function(t,s,o){t=t._reactInternals;var r=Ri(),f=Va(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Ya(t,f,r),s!==null&&(vi(s,t,r),Vl(s,t,r))},enqueueForceUpdate:function(t,s){t=t._reactInternals;var o=Ri(),r=Va(o);r.tag=2,s!=null&&(r.callback=s),s=Ya(t,r,o),s!==null&&(vi(s,t,o),Vl(s,t,o))}};function hg(t,s,o,r,f,m,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,m,v):s.prototype&&s.prototype.isPureReactComponent?!lt(o,r)||!lt(f,m):!0}function mg(t,s,o,r){t=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==t&&Uf.enqueueReplaceState(s,s.state,null)}function kr(t,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(t=t.defaultProps){o===s&&(o=x({},o));for(var f in t)o[f]===void 0&&(o[f]=t[f])}return o}function pg(t){ko(t)}function _g(t){console.error(t)}function gg(t){ko(t)}function _u(t,s){try{var o=t.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function yg(t,s,o){try{var r=t.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Vf(t,s,o){return o=Va(o),o.tag=3,o.payload={element:null},o.callback=function(){_u(t,s)},o}function xg(t){return t=Va(t),t.tag=3,t}function bg(t,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;t.payload=function(){return f(m)},t.callback=function(){yg(s,o,r)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){yg(s,o,r),typeof f!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function I2(t,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&Xr(s,o,f,!0),o=Ti.current,o!==null){switch(o.tag){case 31:case 13:return Yi===null?Eu():o.alternate===null&&Ws===0&&(Ws=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===su?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),mh(t,r,f)),!1;case 22:return o.flags|=65536,r===su?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),mh(t,r,f)),!1}throw Error(a(435,o.tag))}return mh(t,r,f),Eu(),!1}if(Hn)return s=Ti.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==lf&&(t=Error(a(422),{cause:r}),$l(Pi(t,o)))):(r!==lf&&(s=Error(a(423),{cause:r}),$l(Pi(s,o))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,r=Pi(r,o),f=Vf(t.stateNode,r,f),xf(t,f),Ws!==4&&(Ws=2)),!1;var m=Error(a(520),{cause:r});if(m=Pi(m,o),sc===null?sc=[m]:sc.push(m),Ws!==4&&(Ws=2),s===null)return!0;r=Pi(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,t=f&-f,o.lanes|=t,t=Vf(o.stateNode,r,t),xf(o,t),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ka===null||!Ka.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=xg(f),bg(f,t,o,r),xf(o,f),!1}o=o.return}while(o!==null);return!1}var Yf=Error(a(461)),uo=!1;function Uo(t,s,o,r){s.child=t===null?C_(s,null,o,r):Sr(s,t.child,o,r)}function vg(t,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var v={};for(var A in r)A!=="ref"&&(v[A]=r[A])}else v=r;return xr(s),r=kf(t,s,o,v,m,f),A=jf(),t!==null&&!uo?(Mf(t,s,f),Ca(t,s,f)):(Hn&&A&&af(s),s.flags|=1,Uo(t,s,r,f),s.child)}function wg(t,s,o,r,f){if(t===null){var m=o.type;return typeof m=="function"&&!nf(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,Sg(t,s,m,r,f)):(t=Qc(o.type,null,r,s,s.mode,f),t.ref=s.ref,t.return=s,s.child=t)}if(m=t.child,!Zf(t,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:lt,o(v,r)&&t.ref===s.ref)return Ca(t,s,f)}return s.flags|=1,t=ya(m,r),t.ref=s.ref,t.return=s,s.child=t}function Sg(t,s,o,r,f){if(t!==null){var m=t.memoizedProps;if(lt(m,r)&&t.ref===s.ref)if(uo=!1,s.pendingProps=r=m,Zf(t,f))(t.flags&131072)!==0&&(uo=!0);else return s.lanes=t.lanes,Ca(t,s,f)}return Wf(t,s,o,r,f)}function Cg(t,s,o,r){var f=r.children,m=t!==null?t.memoizedState:null;if(t===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,t!==null){for(r=s.child=t.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return kg(t,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},t!==null&&tu(s,m!==null?m.cachePool:null),m!==null?M_(s,m):vf(),E_(s);else return r=s.lanes=536870912,kg(t,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(tu(s,m.cachePool),M_(s,m),Fa(),s.memoizedState=null):(t!==null&&tu(s,null),vf(),Fa());return Uo(t,s,f,o),s.child}function Kl(t,s){return t!==null&&t.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function kg(t,s,o,r,f){var m=pf();return m=m===null?null:{parent:lo._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},t!==null&&tu(s,null),vf(),E_(s),t!==null&&Xr(t,s,r,!0),s.childLanes=f,null}function gu(t,s){return s=xu({mode:s.mode,children:s.children},t.mode),s.ref=t.ref,t.child=s,s.return=t,s}function jg(t,s,o){return Sr(s,t.child,null,o),t=gu(s,s.pendingProps),t.flags|=2,Ai(s),s.memoizedState=null,t}function P2(t,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,t===null){if(Hn){if(r.mode==="hidden")return t=gu(s,r),s.lanes=536870912,Kl(null,t);if(Sf(s),(t=Ts)?(t=$0(t,Vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(s.memoizedState={dehydrated:t,treeContext:$a!==null?{id:ca,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},o=c_(t),o.return=s,s.child=o,Po=s,Ts=null)):t=null,t===null)throw Pa(s);return s.lanes=536870912,null}return gu(s,r)}var m=t.memoizedState;if(m!==null){var v=m.dehydrated;if(Sf(s),f)if(s.flags&256)s.flags&=-257,s=jg(t,s,o);else if(s.memoizedState!==null)s.child=t.child,s.flags|=128,s=null;else throw Error(a(558));else if(uo||Xr(t,s,o,!1),f=(o&t.childLanes)!==0,uo||f){if(r=bs,r!==null&&(v=Ct(r,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,pr(t,v),vi(r,t,v),Yf;Eu(),s=jg(t,s,o)}else t=m.treeContext,Ts=Wi(v.nextSibling),Po=s,Hn=!0,Ia=null,Vi=!1,t!==null&&f_(s,t),s=gu(s,r),s.flags|=4096;return s}return t=ya(t.child,{mode:r.mode,children:r.children}),t.ref=s.ref,s.child=t,t.return=s,t}function yu(t,s){var o=s.ref;if(o===null)t!==null&&t.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(t===null||t.ref!==o)&&(s.flags|=4194816)}}function Wf(t,s,o,r,f){return xr(s),o=kf(t,s,o,r,void 0,f),r=jf(),t!==null&&!uo?(Mf(t,s,f),Ca(t,s,f)):(Hn&&r&&af(s),s.flags|=1,Uo(t,s,o,f),s.child)}function Mg(t,s,o,r,f,m){return xr(s),s.updateQueue=null,o=A_(s,r,o,f),T_(t),r=jf(),t!==null&&!uo?(Mf(t,s,m),Ca(t,s,m)):(Hn&&r&&af(s),s.flags|=1,Uo(t,s,o,m),s.child)}function Eg(t,s,o,r,f){if(xr(s),s.stateNode===null){var m=Vr,v=o.contextType;typeof v=="object"&&v!==null&&(m=Ho(v)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Uf,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},gf(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?Ho(v):Vr,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Hf(s,o,v,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&Uf.enqueueReplaceState(m,m.state,null),Wl(s,r,m,f),Yl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(t===null){m=s.stateNode;var A=s.memoizedProps,q=kr(o,A);m.props=q;var ve=m.context,Ie=o.contextType;v=Vr,typeof Ie=="object"&&Ie!==null&&(v=Ho(Ie));var We=o.getDerivedStateFromProps;Ie=typeof We=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=s.pendingProps!==A,Ie||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||ve!==v)&&mg(s,m,r,v),Ua=!1;var Ce=s.memoizedState;m.state=Ce,Wl(s,r,m,f),Yl(),ve=s.memoizedState,A||Ce!==ve||Ua?(typeof We=="function"&&(Hf(s,o,We,r),ve=s.memoizedState),(q=Ua||hg(s,o,q,r,Ce,ve,v))?(Ie||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=ve),m.props=r,m.state=ve,m.context=v,r=q):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,yf(t,s),v=s.memoizedProps,Ie=kr(o,v),m.props=Ie,We=s.pendingProps,Ce=m.context,ve=o.contextType,q=Vr,typeof ve=="object"&&ve!==null&&(q=Ho(ve)),A=o.getDerivedStateFromProps,(ve=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==We||Ce!==q)&&mg(s,m,r,q),Ua=!1,Ce=s.memoizedState,m.state=Ce,Wl(s,r,m,f),Yl();var Te=s.memoizedState;v!==We||Ce!==Te||Ua||t!==null&&t.dependencies!==null&&Jc(t.dependencies)?(typeof A=="function"&&(Hf(s,o,A,r),Te=s.memoizedState),(Ie=Ua||hg(s,o,Ie,r,Ce,Te,q)||t!==null&&t.dependencies!==null&&Jc(t.dependencies))?(ve||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,Te,q),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,Te,q)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===t.memoizedProps&&Ce===t.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&Ce===t.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=Te),m.props=r,m.state=Te,m.context=q,r=Ie):(typeof m.componentDidUpdate!="function"||v===t.memoizedProps&&Ce===t.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&Ce===t.memoizedState||(s.flags|=1024),r=!1)}return m=r,yu(t,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,t!==null&&r?(s.child=Sr(s,t.child,null,f),s.child=Sr(s,null,o,f)):Uo(t,s,o,f),s.memoizedState=m.state,t=s.child):t=Ca(t,s,f),t}function Tg(t,s,o,r){return gr(),s.flags|=256,Uo(t,s,o,r),s.child}var Ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xf(t){return{baseLanes:t,cachePool:y_()}}function Gf(t,s,o){return t=t!==null?t.childLanes&~o:0,s&&(t|=Di),t}function Ag(t,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=t!==null&&t.memoizedState===null?!1:(to.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,t===null){if(Hn){if(f?Wa(s):Fa(),(t=Ts)?(t=$0(t,Vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(s.memoizedState={dehydrated:t,treeContext:$a!==null?{id:ca,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},o=c_(t),o.return=s,s.child=o,Po=s,Ts=null)):t=null,t===null)throw Pa(s);return Ah(t)?s.lanes=32:s.lanes=536870912,null}var A=r.children;return r=r.fallback,f?(Fa(),f=s.mode,A=xu({mode:"hidden",children:A},f),r=_r(r,f,o,null),A.return=s,r.return=s,A.sibling=r,s.child=A,r=s.child,r.memoizedState=Xf(o),r.childLanes=Gf(t,v,o),s.memoizedState=Ff,Kl(null,r)):(Wa(s),qf(s,A))}var q=t.memoizedState;if(q!==null&&(A=q.dehydrated,A!==null)){if(m)s.flags&256?(Wa(s),s.flags&=-257,s=Kf(t,s,o)):s.memoizedState!==null?(Fa(),s.child=t.child,s.flags|=128,s=null):(Fa(),A=r.fallback,f=s.mode,r=xu({mode:"visible",children:r.children},f),A=_r(A,f,o,null),A.flags|=2,r.return=s,A.return=s,r.sibling=A,s.child=r,Sr(s,t.child,null,o),r=s.child,r.memoizedState=Xf(o),r.childLanes=Gf(t,v,o),s.memoizedState=Ff,s=Kl(null,r));else if(Wa(s),Ah(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var ve=v.dgst;v=ve,r=Error(a(419)),r.stack="",r.digest=v,$l({value:r,source:null,stack:null}),s=Kf(t,s,o)}else if(uo||Xr(t,s,o,!1),v=(o&t.childLanes)!==0,uo||v){if(v=bs,v!==null&&(r=Ct(v,o),r!==0&&r!==q.retryLane))throw q.retryLane=r,pr(t,r),vi(v,t,r),Yf;Th(A)||Eu(),s=Kf(t,s,o)}else Th(A)?(s.flags|=192,s.child=t.child,s=null):(t=q.treeContext,Ts=Wi(A.nextSibling),Po=s,Hn=!0,Ia=null,Vi=!1,t!==null&&f_(s,t),s=qf(s,r.children),s.flags|=4096);return s}return f?(Fa(),A=r.fallback,f=s.mode,q=t.child,ve=q.sibling,r=ya(q,{mode:"hidden",children:r.children}),r.subtreeFlags=q.subtreeFlags&65011712,ve!==null?A=ya(ve,A):(A=_r(A,f,o,null),A.flags|=2),A.return=s,r.return=s,r.sibling=A,s.child=r,Kl(null,r),r=s.child,A=t.child.memoizedState,A===null?A=Xf(o):(f=A.cachePool,f!==null?(q=lo._currentValue,f=f.parent!==q?{parent:q,pool:q}:f):f=y_(),A={baseLanes:A.baseLanes|o,cachePool:f}),r.memoizedState=A,r.childLanes=Gf(t,v,o),s.memoizedState=Ff,Kl(t.child,r)):(Wa(s),o=t.child,t=o.sibling,o=ya(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,t!==null&&(v=s.deletions,v===null?(s.deletions=[t],s.flags|=16):v.push(t)),s.child=o,s.memoizedState=null,o)}function qf(t,s){return s=xu({mode:"visible",children:s},t.mode),s.return=t,t.child=s}function xu(t,s){return t=Ei(22,t,null,s),t.lanes=0,t}function Kf(t,s,o){return Sr(s,t.child,null,o),t=qf(s,s.pendingProps.children),t.flags|=2,s.memoizedState=null,t}function Ng(t,s,o){t.lanes|=s;var r=t.alternate;r!==null&&(r.lanes|=s),df(t.return,s,o)}function Qf(t,s,o,r,f,m){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function Dg(t,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var v=to.current,A=(v&2)!==0;if(A?(v=v&1|2,s.flags|=128):v&=1,ee(to,v),Uo(t,s,r,o),r=Hn?zl:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=s.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ng(t,o,s);else if(t.tag===19)Ng(t,o,s);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break e;for(;t.sibling===null;){if(t.return===null||t.return===s)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)t=o.alternate,t!==null&&ru(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Qf(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(t=f.alternate,t!==null&&ru(t)===null){s.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}Qf(s,!0,o,null,m,r);break;case"together":Qf(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function Ca(t,s,o){if(t!==null&&(s.dependencies=t.dependencies),qa|=s.lanes,(o&s.childLanes)===0)if(t!==null){if(Xr(t,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(t!==null&&s.child!==t.child)throw Error(a(153));if(s.child!==null){for(t=s.child,o=ya(t,t.pendingProps),s.child=o,o.return=s;t.sibling!==null;)t=t.sibling,o=o.sibling=ya(t,t.pendingProps),o.return=s;o.sibling=null}return s.child}function Zf(t,s){return(t.lanes&s)!==0?!0:(t=t.dependencies,!!(t!==null&&Jc(t)))}function H2(t,s,o){switch(s.tag){case 3:nt(s,s.stateNode.containerInfo),Ha(s,lo,t.memoizedState.cache),gr();break;case 27:case 5:yt(s);break;case 4:nt(s,s.stateNode.containerInfo);break;case 10:Ha(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,Sf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(Wa(s),s.flags|=128,null):(o&s.child.childLanes)!==0?Ag(t,s,o):(Wa(s),t=Ca(t,s,o),t!==null?t.sibling:null);Wa(s);break;case 19:var f=(t.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(Xr(t,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return Dg(t,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ee(to,to.current),r)break;return null;case 22:return s.lanes=0,Cg(t,s,o,s.pendingProps);case 24:Ha(s,lo,t.memoizedState.cache)}return Ca(t,s,o)}function Rg(t,s,o){if(t!==null)if(t.memoizedProps!==s.pendingProps)uo=!0;else{if(!Zf(t,o)&&(s.flags&128)===0)return uo=!1,H2(t,s,o);uo=(t.flags&131072)!==0}else uo=!1,Hn&&(s.flags&1048576)!==0&&d_(s,zl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(t=vr(s.elementType),s.type=t,typeof t=="function")nf(t)?(r=kr(t,r),s.tag=1,s=Eg(null,s,t,r,o)):(s.tag=0,s=Wf(null,s,t,r,o));else{if(t!=null){var f=t.$$typeof;if(f===M){s.tag=11,s=vg(null,s,t,r,o);break e}else if(f===U){s.tag=14,s=wg(null,s,t,r,o);break e}}throw s=ae(t)||t,Error(a(306,s,""))}}return s;case 0:return Wf(t,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=kr(r,s.pendingProps),Eg(t,s,r,f,o);case 3:e:{if(nt(s,s.stateNode.containerInfo),t===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,yf(t,s),Wl(s,r,null,o);var v=s.memoizedState;if(r=v.cache,Ha(s,lo,r),r!==m.cache&&ff(s,[lo],o,!0),Yl(),r=v.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=Tg(t,s,r,o);break e}else if(r!==f){f=Pi(Error(a(424)),s),$l(f),s=Tg(t,s,r,o);break e}else{switch(t=s.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ts=Wi(t.firstChild),Po=s,Hn=!0,Ia=null,Vi=!0,o=C_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(gr(),r===f){s=Ca(t,s,o);break e}Uo(t,s,r,o)}s=s.child}return s;case 26:return yu(t,s),t===null?(o=Y0(s.type,null,s.pendingProps,null))?s.memoizedState=o:Hn||(o=s.type,t=s.pendingProps,r=Lu(ge.current).createElement(o),r[Mt]=s,r[wn]=t,Vo(r,o,t),Mn(r),s.stateNode=r):s.memoizedState=Y0(s.type,t.memoizedProps,s.pendingProps,t.memoizedState),null;case 27:return yt(s),t===null&&Hn&&(r=s.stateNode=H0(s.type,s.pendingProps,ge.current),Po=s,Vi=!0,f=Ts,er(s.type)?(Nh=f,Ts=Wi(r.firstChild)):Ts=f),Uo(t,s,s.pendingProps.children,o),yu(t,s),t===null&&(s.flags|=4194304),s.child;case 5:return t===null&&Hn&&((f=r=Ts)&&(r=gv(r,s.type,s.pendingProps,Vi),r!==null?(s.stateNode=r,Po=s,Ts=Wi(r.firstChild),Vi=!1,f=!0):f=!1),f||Pa(s)),yt(s),f=s.type,m=s.pendingProps,v=t!==null?t.memoizedProps:null,r=m.children,jh(f,m)?r=null:v!==null&&jh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=kf(t,s,D2,null,null,o),dc._currentValue=f),yu(t,s),Uo(t,s,r,o),s.child;case 6:return t===null&&Hn&&((t=o=Ts)&&(o=yv(o,s.pendingProps,Vi),o!==null?(s.stateNode=o,Po=s,Ts=null,t=!0):t=!1),t||Pa(s)),null;case 13:return Ag(t,s,o);case 4:return nt(s,s.stateNode.containerInfo),r=s.pendingProps,t===null?s.child=Sr(s,null,r,o):Uo(t,s,r,o),s.child;case 11:return vg(t,s,s.type,s.pendingProps,o);case 7:return Uo(t,s,s.pendingProps,o),s.child;case 8:return Uo(t,s,s.pendingProps.children,o),s.child;case 12:return Uo(t,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,Ha(s,s.type,r.value),Uo(t,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,xr(s),f=Ho(f),r=r(f),s.flags|=1,Uo(t,s,r,o),s.child;case 14:return wg(t,s,s.type,s.pendingProps,o);case 15:return Sg(t,s,s.type,s.pendingProps,o);case 19:return Dg(t,s,o);case 31:return P2(t,s,o);case 22:return Cg(t,s,o,s.pendingProps);case 24:return xr(s),r=Ho(lo),t===null?(f=pf(),f===null&&(f=bs,m=hf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},gf(s),Ha(s,lo,f)):((t.lanes&o)!==0&&(yf(t,s),Wl(s,null,null,o),Yl()),f=t.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Ha(s,lo,r)):(r=m.cache,Ha(s,lo,r),r!==f.cache&&ff(s,[lo],o,!0))),Uo(t,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function ka(t){t.flags|=4}function Jf(t,s,o,r,f){if((s=(t.mode&32)!==0)&&(s=!1),s){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(a0())t.flags|=8192;else throw wr=su,_f}else t.flags&=-16777217}function Bg(t,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!q0(s))if(a0())t.flags|=8192;else throw wr=su,_f}function bu(t,s){s!==null&&(t.flags|=4),t.flags&16384&&(s=t.tag!==22?gt():536870912,t.lanes|=s,il|=s)}function Ql(t,s){if(!Hn)switch(t.tailMode){case"hidden":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function As(t){var s=t.alternate!==null&&t.alternate.child===t.child,o=0,r=0;if(s)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=r,t.childLanes=o,s}function U2(t,s,o){var r=s.pendingProps;switch(rf(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return As(s),null;case 1:return As(s),null;case 3:return o=s.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),va(lo),Xe(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(Fr(s)?ka(s):t===null||t.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,cf())),As(s),null;case 26:var f=s.type,m=s.memoizedState;return t===null?(ka(s),m!==null?(As(s),Bg(s,m)):(As(s),Jf(s,f,null,r,o))):m?m!==t.memoizedState?(ka(s),As(s),Bg(s,m)):(As(s),s.flags&=-16777217):(t=t.memoizedProps,t!==r&&ka(s),As(s),Jf(s,f,t,r,o)),null;case 27:if(Tt(s),o=ge.current,f=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==r&&ka(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return As(s),null}t=we.current,Fr(s)?h_(s):(t=H0(f,r,o),s.stateNode=t,ka(s))}return As(s),null;case 5:if(Tt(s),f=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==r&&ka(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return As(s),null}if(m=we.current,Fr(s))h_(s);else{var v=Lu(ge.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?v.createElement(f,{is:r.is}):v.createElement(f)}}m[Mt]=s,m[wn]=r;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(Vo(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ka(s)}}return As(s),Jf(s,s.type,t===null?null:t.memoizedProps,s.pendingProps,o),null;case 6:if(t&&s.stateNode!=null)t.memoizedProps!==r&&ka(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(t=ge.current,Fr(s)){if(t=s.stateNode,o=s.memoizedProps,r=null,f=Po,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}t[Mt]=s,t=!!(t.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||A0(t.nodeValue,o)),t||Pa(s,!0)}else t=Lu(t).createTextNode(r),t[Mt]=s,s.stateNode=t}return As(s),null;case 31:if(o=s.memoizedState,t===null||t.memoizedState!==null){if(r=Fr(s),o!==null){if(t===null){if(!r)throw Error(a(318));if(t=s.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[Mt]=s}else gr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;As(s),t=!1}else o=cf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=o),t=!0;if(!t)return s.flags&256?(Ai(s),s):(Ai(s),null);if((s.flags&128)!==0)throw Error(a(558))}return As(s),null;case 13:if(r=s.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Fr(s),r!==null&&r.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[Mt]=s}else gr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;As(s),f=!1}else f=cf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Ai(s),s):(Ai(s),null)}return Ai(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,t=t!==null&&t.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==t&&o&&(s.child.flags|=8192),bu(s,s.updateQueue),As(s),null);case 4:return Xe(),t===null&&vh(s.stateNode.containerInfo),As(s),null;case 10:return va(s.type),As(s),null;case 19:if(ce(to),r=s.memoizedState,r===null)return As(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)Ql(r,!1);else{if(Ws!==0||t!==null&&(t.flags&128)!==0)for(t=s.child;t!==null;){if(m=ru(t),m!==null){for(s.flags|=128,Ql(r,!1),t=m.updateQueue,s.updateQueue=t,bu(s,t),s.subtreeFlags=0,t=o,o=s.child;o!==null;)l_(o,t),o=o.sibling;return ee(to,to.current&1|2),Hn&&xa(s,r.treeForkCount),s.child}t=t.sibling}r.tail!==null&&bt()>ku&&(s.flags|=128,f=!0,Ql(r,!1),s.lanes=4194304)}else{if(!f)if(t=ru(m),t!==null){if(s.flags|=128,f=!0,t=t.updateQueue,s.updateQueue=t,bu(s,t),Ql(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!Hn)return As(s),null}else 2*bt()-r.renderingStartTime>ku&&o!==536870912&&(s.flags|=128,f=!0,Ql(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(t=r.last,t!==null?t.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=bt(),t.sibling=null,o=to.current,ee(to,f?o&1|2:o&1),Hn&&xa(s,r.treeForkCount),t):(As(s),null);case 22:case 23:return Ai(s),wf(),r=s.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(As(s),s.subtreeFlags&6&&(s.flags|=8192)):As(s),o=s.updateQueue,o!==null&&bu(s,o.retryQueue),o=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),t!==null&&ce(br),null;case 24:return o=null,t!==null&&(o=t.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),va(lo),As(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function V2(t,s){switch(rf(s),s.tag){case 1:return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 3:return va(lo),Xe(),t=s.flags,(t&65536)!==0&&(t&128)===0?(s.flags=t&-65537|128,s):null;case 26:case 27:case 5:return Tt(s),null;case 31:if(s.memoizedState!==null){if(Ai(s),s.alternate===null)throw Error(a(340));gr()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 13:if(Ai(s),t=s.memoizedState,t!==null&&t.dehydrated!==null){if(s.alternate===null)throw Error(a(340));gr()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 19:return ce(to),null;case 4:return Xe(),null;case 10:return va(s.type),null;case 22:case 23:return Ai(s),wf(),t!==null&&ce(br),t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 24:return va(lo),null;case 25:return null;default:return null}}function Lg(t,s){switch(rf(s),s.tag){case 3:va(lo),Xe();break;case 26:case 27:case 5:Tt(s);break;case 4:Xe();break;case 31:s.memoizedState!==null&&Ai(s);break;case 13:Ai(s);break;case 19:ce(to);break;case 10:va(s.type);break;case 22:case 23:Ai(s),wf(),t!==null&&ce(br);break;case 24:va(lo)}}function Zl(t,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&t)===t){r=void 0;var m=o.create,v=o.inst;r=m(),v.destroy=r}o=o.next}while(o!==f)}}catch(A){as(s,s.return,A)}}function Xa(t,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&t)===t){var v=r.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,f=s;var q=o,ve=A;try{ve()}catch(Ie){as(f,q,Ie)}}}r=r.next}while(r!==m)}}catch(Ie){as(s,s.return,Ie)}}function Og(t){var s=t.updateQueue;if(s!==null){var o=t.stateNode;try{j_(s,o)}catch(r){as(t,t.return,r)}}}function zg(t,s,o){o.props=kr(t.type,t.memoizedProps),o.state=t.memoizedState;try{o.componentWillUnmount()}catch(r){as(t,s,r)}}function Jl(t,s){try{var o=t.ref;if(o!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof o=="function"?t.refCleanup=o(r):o.current=r}}catch(f){as(t,s,f)}}function da(t,s){var o=t.ref,r=t.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){as(t,s,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){as(t,s,f)}else o.current=null}function $g(t){var s=t.type,o=t.memoizedProps,r=t.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){as(t,t.return,f)}}function eh(t,s,o){try{var r=t.stateNode;dv(r,t.type,o,s),r[wn]=s}catch(f){as(t,t.return,f)}}function Ig(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&er(t.type)||t.tag===4}function th(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ig(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&er(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nh(t,s,o){var r=t.tag;if(r===5||r===6)t=t.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(t,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(t),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Ms));else if(r!==4&&(r===27&&er(t.type)&&(o=t.stateNode,s=null),t=t.child,t!==null))for(nh(t,s,o),t=t.sibling;t!==null;)nh(t,s,o),t=t.sibling}function vu(t,s,o){var r=t.tag;if(r===5||r===6)t=t.stateNode,s?o.insertBefore(t,s):o.appendChild(t);else if(r!==4&&(r===27&&er(t.type)&&(o=t.stateNode),t=t.child,t!==null))for(vu(t,s,o),t=t.sibling;t!==null;)vu(t,s,o),t=t.sibling}function Pg(t){var s=t.stateNode,o=t.memoizedProps;try{for(var r=t.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Vo(s,r,o),s[Mt]=t,s[wn]=o}catch(m){as(t,t.return,m)}}var ja=!1,fo=!1,sh=!1,Hg=typeof WeakSet=="function"?WeakSet:Set,Lo=null;function Y2(t,s){if(t=t.containerInfo,Ch=Uu,t=Zt(t),Xt(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,A=-1,q=-1,ve=0,Ie=0,We=t,Ce=null;t:for(;;){for(var Te;We!==o||f!==0&&We.nodeType!==3||(A=v+f),We!==m||r!==0&&We.nodeType!==3||(q=v+r),We.nodeType===3&&(v+=We.nodeValue.length),(Te=We.firstChild)!==null;)Ce=We,We=Te;for(;;){if(We===t)break t;if(Ce===o&&++ve===f&&(A=v),Ce===m&&++Ie===r&&(q=v),(Te=We.nextSibling)!==null)break;We=Ce,Ce=We.parentNode}We=Te}o=A===-1||q===-1?null:{start:A,end:q}}else o=null}o=o||{start:0,end:0}}else o=null;for(kh={focusedElem:t,selectionRange:o},Uu=!1,Lo=s;Lo!==null;)if(s=Lo,t=s.child,(s.subtreeFlags&1028)!==0&&t!==null)t.return=s,Lo=t;else for(;Lo!==null;){switch(s=Lo,m=s.alternate,t=s.flags,s.tag){case 0:if((t&4)!==0&&(t=s.updateQueue,t=t!==null?t.events:null,t!==null))for(o=0;o<t.length;o++)f=t[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var Bt=kr(o.type,f);t=r.getSnapshotBeforeUpdate(Bt,m),r.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){as(o,o.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=s.stateNode.containerInfo,o=t.nodeType,o===9)Eh(t);else if(o===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Eh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=s.sibling,t!==null){t.return=s.return,Lo=t;break}Lo=s.return}}function Ug(t,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:Ea(t,o),r&4&&Zl(5,o);break;case 1:if(Ea(t,o),r&4)if(t=o.stateNode,s===null)try{t.componentDidMount()}catch(v){as(o,o.return,v)}else{var f=kr(o.type,s.memoizedProps);s=s.memoizedState;try{t.componentDidUpdate(f,s,t.__reactInternalSnapshotBeforeUpdate)}catch(v){as(o,o.return,v)}}r&64&&Og(o),r&512&&Jl(o,o.return);break;case 3:if(Ea(t,o),r&64&&(t=o.updateQueue,t!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{j_(t,s)}catch(v){as(o,o.return,v)}}break;case 27:s===null&&r&4&&Pg(o);case 26:case 5:Ea(t,o),s===null&&r&4&&$g(o),r&512&&Jl(o,o.return);break;case 12:Ea(t,o);break;case 31:Ea(t,o),r&4&&Wg(t,o);break;case 13:Ea(t,o),r&4&&Fg(t,o),r&64&&(t=o.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(o=J2.bind(null,o),xv(t,o))));break;case 22:if(r=o.memoizedState!==null||ja,!r){s=s!==null&&s.memoizedState!==null||fo,f=ja;var m=fo;ja=r,(fo=s)&&!m?Ta(t,o,(o.subtreeFlags&8772)!==0):Ea(t,o),ja=f,fo=m}break;case 30:break;default:Ea(t,o)}}function Vg(t){var s=t.alternate;s!==null&&(t.alternate=null,Vg(s)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(s=t.stateNode,s!==null&&Oo(s)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Rs=null,gi=!1;function Ma(t,s,o){for(o=o.child;o!==null;)Yg(t,s,o),o=o.sibling}function Yg(t,s,o){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(at,o)}catch{}switch(o.tag){case 26:fo||da(o,s),Ma(t,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:fo||da(o,s);var r=Rs,f=gi;er(o.type)&&(Rs=o.stateNode,gi=!1),Ma(t,s,o),lc(o.stateNode),Rs=r,gi=f;break;case 5:fo||da(o,s);case 6:if(r=Rs,f=gi,Rs=null,Ma(t,s,o),Rs=r,gi=f,Rs!==null)if(gi)try{(Rs.nodeType===9?Rs.body:Rs.nodeName==="HTML"?Rs.ownerDocument.body:Rs).removeChild(o.stateNode)}catch(m){as(o,s,m)}else try{Rs.removeChild(o.stateNode)}catch(m){as(o,s,m)}break;case 18:Rs!==null&&(gi?(t=Rs,O0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,o.stateNode),hl(t)):O0(Rs,o.stateNode));break;case 4:r=Rs,f=gi,Rs=o.stateNode.containerInfo,gi=!0,Ma(t,s,o),Rs=r,gi=f;break;case 0:case 11:case 14:case 15:Xa(2,o,s),fo||Xa(4,o,s),Ma(t,s,o);break;case 1:fo||(da(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&zg(o,s,r)),Ma(t,s,o);break;case 21:Ma(t,s,o);break;case 22:fo=(r=fo)||o.memoizedState!==null,Ma(t,s,o),fo=r;break;default:Ma(t,s,o)}}function Wg(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{hl(t)}catch(o){as(s,s.return,o)}}}function Fg(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{hl(t)}catch(o){as(s,s.return,o)}}function W2(t){switch(t.tag){case 31:case 13:case 19:var s=t.stateNode;return s===null&&(s=t.stateNode=new Hg),s;case 22:return t=t.stateNode,s=t._retryCache,s===null&&(s=t._retryCache=new Hg),s;default:throw Error(a(435,t.tag))}}function wu(t,s){var o=W2(t);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=ev.bind(null,t,r);r.then(f,f)}})}function yi(t,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=t,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(er(A.type)){Rs=A.stateNode,gi=!1;break e}break;case 5:Rs=A.stateNode,gi=!1;break e;case 3:case 4:Rs=A.stateNode.containerInfo,gi=!0;break e}A=A.return}if(Rs===null)throw Error(a(160));Yg(m,v,f),Rs=null,gi=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)Xg(s,t),s=s.sibling}var ea=null;function Xg(t,s){var o=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:yi(s,t),xi(t),r&4&&(Xa(3,t,t.return),Zl(3,t),Xa(5,t,t.return));break;case 1:yi(s,t),xi(t),r&512&&(fo||o===null||da(o,o.return)),r&64&&ja&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(o=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=ea;if(yi(s,t),xi(t),r&512&&(fo||o===null||da(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=t.memoizedState,o===null)if(r===null)if(t.stateNode===null){e:{r=t.type,o=t.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[To]||m[Mt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),Vo(m,r,o),m[Mt]=t,Mn(m),r=m;break e;case"link":var v=X0("link","href",f).get(r+(o.href||""));if(v){for(var A=0;A<v.length;A++)if(m=v[A],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(A,1);break t}}m=f.createElement(r),Vo(m,r,o),f.head.appendChild(m);break;case"meta":if(v=X0("meta","content",f).get(r+(o.content||""))){for(A=0;A<v.length;A++)if(m=v[A],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(A,1);break t}}m=f.createElement(r),Vo(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[Mt]=t,Mn(m),r=m}t.stateNode=r}else G0(f,t.type,t.stateNode);else t.stateNode=F0(f,r,t.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?G0(f,t.type,t.stateNode):F0(f,r,t.memoizedProps)):r===null&&t.stateNode!==null&&eh(t,t.memoizedProps,o.memoizedProps)}break;case 27:yi(s,t),xi(t),r&512&&(fo||o===null||da(o,o.return)),o!==null&&r&4&&eh(t,t.memoizedProps,o.memoizedProps);break;case 5:if(yi(s,t),xi(t),r&512&&(fo||o===null||da(o,o.return)),t.flags&32){f=t.stateNode;try{Fo(f,"")}catch(Bt){as(t,t.return,Bt)}}r&4&&t.stateNode!=null&&(f=t.memoizedProps,eh(t,f,o!==null?o.memoizedProps:f)),r&1024&&(sh=!0);break;case 6:if(yi(s,t),xi(t),r&4){if(t.stateNode===null)throw Error(a(162));r=t.memoizedProps,o=t.stateNode;try{o.nodeValue=r}catch(Bt){as(t,t.return,Bt)}}break;case 3:if($u=null,f=ea,ea=Ou(s.containerInfo),yi(s,t),ea=f,xi(t),r&4&&o!==null&&o.memoizedState.isDehydrated)try{hl(s.containerInfo)}catch(Bt){as(t,t.return,Bt)}sh&&(sh=!1,Gg(t));break;case 4:r=ea,ea=Ou(t.stateNode.containerInfo),yi(s,t),xi(t),ea=r;break;case 12:yi(s,t),xi(t);break;case 31:yi(s,t),xi(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,wu(t,r)));break;case 13:yi(s,t),xi(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Cu=bt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,wu(t,r)));break;case 22:f=t.memoizedState!==null;var q=o!==null&&o.memoizedState!==null,ve=ja,Ie=fo;if(ja=ve||f,fo=Ie||q,yi(s,t),fo=Ie,ja=ve,xi(t),r&8192)e:for(s=t.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||q||ja||fo||jr(t)),o=null,s=t;;){if(s.tag===5||s.tag===26){if(o===null){q=o=s;try{if(m=q.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=q.stateNode;var We=q.memoizedProps.style,Ce=We!=null&&We.hasOwnProperty("display")?We.display:null;A.style.display=Ce==null||typeof Ce=="boolean"?"":(""+Ce).trim()}}catch(Bt){as(q,q.return,Bt)}}}else if(s.tag===6){if(o===null){q=s;try{q.stateNode.nodeValue=f?"":q.memoizedProps}catch(Bt){as(q,q.return,Bt)}}}else if(s.tag===18){if(o===null){q=s;try{var Te=q.stateNode;f?z0(Te,!0):z0(q.stateNode,!1)}catch(Bt){as(q,q.return,Bt)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===t)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=t.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,wu(t,o))));break;case 19:yi(s,t),xi(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,wu(t,r)));break;case 30:break;case 21:break;default:yi(s,t),xi(t)}}function xi(t){var s=t.flags;if(s&2){try{for(var o,r=t.return;r!==null;){if(Ig(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=th(t);vu(t,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(Fo(v,""),o.flags&=-33);var A=th(t);vu(t,A,v);break;case 3:case 4:var q=o.stateNode.containerInfo,ve=th(t);nh(t,ve,q);break;default:throw Error(a(161))}}catch(Ie){as(t,t.return,Ie)}t.flags&=-3}s&4096&&(t.flags&=-4097)}function Gg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var s=t;Gg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),t=t.sibling}}function Ea(t,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Ug(t,s.alternate,s),s=s.sibling}function jr(t){for(t=t.child;t!==null;){var s=t;switch(s.tag){case 0:case 11:case 14:case 15:Xa(4,s,s.return),jr(s);break;case 1:da(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&zg(s,s.return,o),jr(s);break;case 27:lc(s.stateNode);case 26:case 5:da(s,s.return),jr(s);break;case 22:s.memoizedState===null&&jr(s);break;case 30:jr(s);break;default:jr(s)}t=t.sibling}}function Ta(t,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=t,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:Ta(f,m,o),Zl(4,m);break;case 1:if(Ta(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ve){as(r,r.return,ve)}if(r=m,f=r.updateQueue,f!==null){var A=r.stateNode;try{var q=f.shared.hiddenCallbacks;if(q!==null)for(f.shared.hiddenCallbacks=null,f=0;f<q.length;f++)k_(q[f],A)}catch(ve){as(r,r.return,ve)}}o&&v&64&&Og(m),Jl(m,m.return);break;case 27:Pg(m);case 26:case 5:Ta(f,m,o),o&&r===null&&v&4&&$g(m),Jl(m,m.return);break;case 12:Ta(f,m,o);break;case 31:Ta(f,m,o),o&&v&4&&Wg(f,m);break;case 13:Ta(f,m,o),o&&v&4&&Fg(f,m);break;case 22:m.memoizedState===null&&Ta(f,m,o),Jl(m,m.return);break;case 30:break;default:Ta(f,m,o)}s=s.sibling}}function oh(t,s){var o=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),t=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(t=s.memoizedState.cachePool.pool),t!==o&&(t!=null&&t.refCount++,o!=null&&Il(o))}function ih(t,s){t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&Il(t))}function ta(t,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)qg(t,s,o,r),s=s.sibling}function qg(t,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ta(t,s,o,r),f&2048&&Zl(9,s);break;case 1:ta(t,s,o,r);break;case 3:ta(t,s,o,r),f&2048&&(t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&Il(t)));break;case 12:if(f&2048){ta(t,s,o,r),t=s.stateNode;try{var m=s.memoizedProps,v=m.id,A=m.onPostCommit;typeof A=="function"&&A(v,s.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(q){as(s,s.return,q)}}else ta(t,s,o,r);break;case 31:ta(t,s,o,r);break;case 13:ta(t,s,o,r);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?ta(t,s,o,r):ec(t,s):m._visibility&2?ta(t,s,o,r):(m._visibility|=2,nl(t,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&oh(v,s);break;case 24:ta(t,s,o,r),f&2048&&ih(s.alternate,s);break;default:ta(t,s,o,r)}}function nl(t,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=t,v=s,A=o,q=r,ve=v.flags;switch(v.tag){case 0:case 11:case 15:nl(m,v,A,q,f),Zl(8,v);break;case 23:break;case 22:var Ie=v.stateNode;v.memoizedState!==null?Ie._visibility&2?nl(m,v,A,q,f):ec(m,v):(Ie._visibility|=2,nl(m,v,A,q,f)),f&&ve&2048&&oh(v.alternate,v);break;case 24:nl(m,v,A,q,f),f&&ve&2048&&ih(v.alternate,v);break;default:nl(m,v,A,q,f)}s=s.sibling}}function ec(t,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=t,r=s,f=r.flags;switch(r.tag){case 22:ec(o,r),f&2048&&oh(r.alternate,r);break;case 24:ec(o,r),f&2048&&ih(r.alternate,r);break;default:ec(o,r)}s=s.sibling}}var tc=8192;function sl(t,s,o){if(t.subtreeFlags&tc)for(t=t.child;t!==null;)Kg(t,s,o),t=t.sibling}function Kg(t,s,o){switch(t.tag){case 26:sl(t,s,o),t.flags&tc&&t.memoizedState!==null&&Nv(o,ea,t.memoizedState,t.memoizedProps);break;case 5:sl(t,s,o);break;case 3:case 4:var r=ea;ea=Ou(t.stateNode.containerInfo),sl(t,s,o),ea=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=tc,tc=16777216,sl(t,s,o),tc=r):sl(t,s,o));break;default:sl(t,s,o)}}function Qg(t){var s=t.alternate;if(s!==null&&(t=s.child,t!==null)){s.child=null;do s=t.sibling,t.sibling=null,t=s;while(t!==null)}}function nc(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];Lo=r,Jg(r,t)}Qg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zg(t),t=t.sibling}function Zg(t){switch(t.tag){case 0:case 11:case 15:nc(t),t.flags&2048&&Xa(9,t,t.return);break;case 3:nc(t);break;case 12:nc(t);break;case 22:var s=t.stateNode;t.memoizedState!==null&&s._visibility&2&&(t.return===null||t.return.tag!==13)?(s._visibility&=-3,Su(t)):nc(t);break;default:nc(t)}}function Su(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];Lo=r,Jg(r,t)}Qg(t)}for(t=t.child;t!==null;){switch(s=t,s.tag){case 0:case 11:case 15:Xa(8,s,s.return),Su(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Su(s));break;default:Su(s)}t=t.sibling}}function Jg(t,s){for(;Lo!==null;){var o=Lo;switch(o.tag){case 0:case 11:case 15:Xa(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Il(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,Lo=r;else e:for(o=t;Lo!==null;){r=Lo;var f=r.sibling,m=r.return;if(Vg(r),r===o){Lo=null;break e}if(f!==null){f.return=m,Lo=f;break e}Lo=m}}}var F2={getCacheForType:function(t){var s=Ho(lo),o=s.data.get(t);return o===void 0&&(o=t(),s.data.set(t,o)),o},cacheSignal:function(){return Ho(lo).controller.signal}},X2=typeof WeakMap=="function"?WeakMap:Map,Qn=0,bs=null,Bn=null,$n=0,is=0,Ni=null,Ga=!1,ol=!1,ah=!1,Aa=0,Ws=0,qa=0,Mr=0,rh=0,Di=0,il=0,sc=null,bi=null,lh=!1,Cu=0,e0=0,ku=1/0,ju=null,Ka=null,jo=0,Qa=null,al=null,Na=0,ch=0,uh=null,t0=null,oc=0,dh=null;function Ri(){return(Qn&2)!==0&&$n!==0?$n&-$n:B.T!==null?gh():on()}function n0(){if(Di===0)if(($n&536870912)===0||Hn){var t=it;it<<=1,(it&3932160)===0&&(it=262144),Di=t}else Di=536870912;return t=Ti.current,t!==null&&(t.flags|=32),Di}function vi(t,s,o){(t===bs&&(is===2||is===9)||t.cancelPendingCommit!==null)&&(rl(t,0),Za(t,$n,Di,!1)),pt(t,o),((Qn&2)===0||t!==bs)&&(t===bs&&((Qn&2)===0&&(Mr|=o),Ws===4&&Za(t,$n,Di,!1)),fa(t))}function s0(t,s,o){if((Qn&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&t.expiredLanes)===0||$t(t,s),f=r?K2(t,s):hh(t,s,!0),m=r;do{if(f===0){ol&&!r&&Za(t,s,0,!1);break}else{if(o=t.current.alternate,m&&!G2(o)){f=hh(t,s,!1),m=!1;continue}if(f===2){if(m=s,t.errorRecoveryDisabledLanes&m)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var A=t;f=sc;var q=A.current.memoizedState.isDehydrated;if(q&&(rl(A,v).flags|=256),v=hh(A,v,!1),v!==2){if(ah&&!q){A.errorRecoveryDisabledLanes|=m,Mr|=m,f=4;break e}m=bi,bi=f,m!==null&&(bi===null?bi=m:bi.push.apply(bi,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){rl(t,0),Za(t,s,0,!0);break}e:{switch(r=t,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Za(r,s,Di,!Ga);break e;case 2:bi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=Cu+300-bt(),10<f)){if(Za(r,s,Di,!Ga),tt(r,0,!0)!==0)break e;Na=s,r.timeoutHandle=B0(o0.bind(null,r,o,bi,ju,lh,s,Di,Mr,il,Ga,m,"Throttled",-0,0),f);break e}o0(r,o,bi,ju,lh,s,Di,Mr,il,Ga,m,null,-0,0)}}break}while(!0);fa(t)}function o0(t,s,o,r,f,m,v,A,q,ve,Ie,We,Ce,Te){if(t.timeoutHandle=-1,We=s.subtreeFlags,We&8192||(We&16785408)===16785408){We={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ms},Kg(s,m,We);var Bt=(m&62914560)===m?Cu-bt():(m&4194048)===m?e0-bt():0;if(Bt=Dv(We,Bt),Bt!==null){Na=m,t.cancelPendingCommit=Bt(f0.bind(null,t,s,m,o,r,f,v,A,q,Ie,We,null,Ce,Te)),Za(t,m,v,!ve);return}}f0(t,s,m,o,r,f,v,A,q)}function G2(t){for(var s=t;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!Qe(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Za(t,s,o,r){s&=~rh,s&=~Mr,t.suspendedLanes|=s,t.pingedLanes&=~s,r&&(t.warmLanes|=s),r=t.expirationTimes;for(var f=s;0<f;){var m=31-xe(f),v=1<<m;r[m]=-1,f&=~v}o!==0&&bn(t,o,s)}function Mu(){return(Qn&6)===0?(ic(0),!1):!0}function fh(){if(Bn!==null){if(is===0)var t=Bn.return;else t=Bn,ba=yr=null,Ef(t),Qr=null,Hl=0,t=Bn;for(;t!==null;)Lg(t.alternate,t),t=t.return;Bn=null}}function rl(t,s){var o=t.timeoutHandle;o!==-1&&(t.timeoutHandle=-1,mv(o)),o=t.cancelPendingCommit,o!==null&&(t.cancelPendingCommit=null,o()),Na=0,fh(),bs=t,Bn=o=ya(t.current,null),$n=s,is=0,Ni=null,Ga=!1,ol=$t(t,s),ah=!1,il=Di=rh=Mr=qa=Ws=0,bi=sc=null,lh=!1,(s&8)!==0&&(s|=s&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=s;0<r;){var f=31-xe(r),m=1<<f;s|=t[f],r&=~m}return Aa=s,Es(),o}function i0(t,s){yn=null,B.H=ql,s===Kr||s===nu?(s=v_(),is=3):s===_f?(s=v_(),is=4):is=s===Yf?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Ni=s,Bn===null&&(Ws=1,_u(t,Pi(s,t.current)))}function a0(){var t=Ti.current;return t===null?!0:($n&4194048)===$n?Yi===null:($n&62914560)===$n||($n&536870912)!==0?t===Yi:!1}function r0(){var t=B.H;return B.H=ql,t===null?ql:t}function l0(){var t=B.A;return B.A=F2,t}function Eu(){Ws=4,Ga||($n&4194048)!==$n&&Ti.current!==null||(ol=!0),(qa&134217727)===0&&(Mr&134217727)===0||bs===null||Za(bs,$n,Di,!1)}function hh(t,s,o){var r=Qn;Qn|=2;var f=r0(),m=l0();(bs!==t||$n!==s)&&(ju=null,rl(t,s)),s=!1;var v=Ws;e:do try{if(is!==0&&Bn!==null){var A=Bn,q=Ni;switch(is){case 8:fh(),v=6;break e;case 3:case 2:case 9:case 6:Ti.current===null&&(s=!0);var ve=is;if(is=0,Ni=null,ll(t,A,q,ve),o&&ol){v=0;break e}break;default:ve=is,is=0,Ni=null,ll(t,A,q,ve)}}q2(),v=Ws;break}catch(Ie){i0(t,Ie)}while(!0);return s&&t.shellSuspendCounter++,ba=yr=null,Qn=r,B.H=f,B.A=m,Bn===null&&(bs=null,$n=0,Es()),v}function q2(){for(;Bn!==null;)c0(Bn)}function K2(t,s){var o=Qn;Qn|=2;var r=r0(),f=l0();bs!==t||$n!==s?(ju=null,ku=bt()+500,rl(t,s)):ol=$t(t,s);e:do try{if(is!==0&&Bn!==null){s=Bn;var m=Ni;t:switch(is){case 1:is=0,Ni=null,ll(t,s,m,1);break;case 2:case 9:if(x_(m)){is=0,Ni=null,u0(s);break}s=function(){is!==2&&is!==9||bs!==t||(is=7),fa(t)},m.then(s,s);break e;case 3:is=7;break e;case 4:is=5;break e;case 7:x_(m)?(is=0,Ni=null,u0(s)):(is=0,Ni=null,ll(t,s,m,7));break;case 5:var v=null;switch(Bn.tag){case 26:v=Bn.memoizedState;case 5:case 27:var A=Bn;if(v?q0(v):A.stateNode.complete){is=0,Ni=null;var q=A.sibling;if(q!==null)Bn=q;else{var ve=A.return;ve!==null?(Bn=ve,Tu(ve)):Bn=null}break t}}is=0,Ni=null,ll(t,s,m,5);break;case 6:is=0,Ni=null,ll(t,s,m,6);break;case 8:fh(),Ws=6;break e;default:throw Error(a(462))}}Q2();break}catch(Ie){i0(t,Ie)}while(!0);return ba=yr=null,B.H=r,B.A=f,Qn=o,Bn!==null?0:(bs=null,$n=0,Es(),Ws)}function Q2(){for(;Bn!==null&&!xt();)c0(Bn)}function c0(t){var s=Rg(t.alternate,t,Aa);t.memoizedProps=t.pendingProps,s===null?Tu(t):Bn=s}function u0(t){var s=t,o=s.alternate;switch(s.tag){case 15:case 0:s=Mg(o,s,s.pendingProps,s.type,void 0,$n);break;case 11:s=Mg(o,s,s.pendingProps,s.type.render,s.ref,$n);break;case 5:Ef(s);default:Lg(o,s),s=Bn=l_(s,Aa),s=Rg(o,s,Aa)}t.memoizedProps=t.pendingProps,s===null?Tu(t):Bn=s}function ll(t,s,o,r){ba=yr=null,Ef(s),Qr=null,Hl=0;var f=s.return;try{if(I2(t,f,s,o,$n)){Ws=1,_u(t,Pi(o,t.current)),Bn=null;return}}catch(m){if(f!==null)throw Bn=f,m;Ws=1,_u(t,Pi(o,t.current)),Bn=null;return}s.flags&32768?(Hn||r===1?t=!0:ol||($n&536870912)!==0?t=!1:(Ga=t=!0,(r===2||r===9||r===3||r===6)&&(r=Ti.current,r!==null&&r.tag===13&&(r.flags|=16384))),d0(s,t)):Tu(s)}function Tu(t){var s=t;do{if((s.flags&32768)!==0){d0(s,Ga);return}t=s.return;var o=U2(s.alternate,s,Aa);if(o!==null){Bn=o;return}if(s=s.sibling,s!==null){Bn=s;return}Bn=s=t}while(s!==null);Ws===0&&(Ws=5)}function d0(t,s){do{var o=V2(t.alternate,t);if(o!==null){o.flags&=32767,Bn=o;return}if(o=t.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(t=t.sibling,t!==null)){Bn=t;return}Bn=t=o}while(t!==null);Ws=6,Bn=null}function f0(t,s,o,r,f,m,v,A,q){t.cancelPendingCommit=null;do Au();while(jo!==0);if((Qn&6)!==0)throw Error(a(327));if(s!==null){if(s===t.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=Io,Ut(t,o,m,v,A,q),t===bs&&(Bn=bs=null,$n=0),al=s,Qa=t,Na=o,ch=m,uh=f,t0=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,tv(dt,function(){return g0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=B.T,B.T=null,f=se.p,se.p=2,v=Qn,Qn|=4;try{Y2(t,s,o)}finally{Qn=v,se.p=f,B.T=r}}jo=1,h0(),m0(),p0()}}function h0(){if(jo===1){jo=0;var t=Qa,s=al,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=B.T,B.T=null;var r=se.p;se.p=2;var f=Qn;Qn|=4;try{Xg(s,t);var m=kh,v=Zt(t.containerInfo),A=m.focusedElem,q=m.selectionRange;if(v!==A&&A&&A.ownerDocument&&An(A.ownerDocument.documentElement,A)){if(q!==null&&Xt(A)){var ve=q.start,Ie=q.end;if(Ie===void 0&&(Ie=ve),"selectionStart"in A)A.selectionStart=ve,A.selectionEnd=Math.min(Ie,A.value.length);else{var We=A.ownerDocument||document,Ce=We&&We.defaultView||window;if(Ce.getSelection){var Te=Ce.getSelection(),Bt=A.textContent.length,Jt=Math.min(q.start,Bt),ms=q.end===void 0?Jt:Math.min(q.end,Bt);!Te.extend&&Jt>ms&&(v=ms,ms=Jt,Jt=v);var ue=dn(A,Jt),oe=dn(A,ms);if(ue&&oe&&(Te.rangeCount!==1||Te.anchorNode!==ue.node||Te.anchorOffset!==ue.offset||Te.focusNode!==oe.node||Te.focusOffset!==oe.offset)){var be=We.createRange();be.setStart(ue.node,ue.offset),Te.removeAllRanges(),Jt>ms?(Te.addRange(be),Te.extend(oe.node,oe.offset)):(be.setEnd(oe.node,oe.offset),Te.addRange(be))}}}}for(We=[],Te=A;Te=Te.parentNode;)Te.nodeType===1&&We.push({element:Te,left:Te.scrollLeft,top:Te.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<We.length;A++){var Ve=We[A];Ve.element.scrollLeft=Ve.left,Ve.element.scrollTop=Ve.top}}Uu=!!Ch,kh=Ch=null}finally{Qn=f,se.p=r,B.T=o}}t.current=s,jo=2}}function m0(){if(jo===2){jo=0;var t=Qa,s=al,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=B.T,B.T=null;var r=se.p;se.p=2;var f=Qn;Qn|=4;try{Ug(t,s.alternate,s)}finally{Qn=f,se.p=r,B.T=o}}jo=3}}function p0(){if(jo===4||jo===3){jo=0,Ye();var t=Qa,s=al,o=Na,r=t0;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?jo=5:(jo=0,al=Qa=null,_0(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ka=null),ln(o),s=s.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(at,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=B.T,f=se.p,se.p=2,B.T=null;try{for(var m=t.onRecoverableError,v=0;v<r.length;v++){var A=r[v];m(A.value,{componentStack:A.stack})}}finally{B.T=s,se.p=f}}(Na&3)!==0&&Au(),fa(t),f=t.pendingLanes,(o&261930)!==0&&(f&42)!==0?t===dh?oc++:(oc=0,dh=t):oc=0,ic(0)}}function _0(t,s){(t.pooledCacheLanes&=s)===0&&(s=t.pooledCache,s!=null&&(t.pooledCache=null,Il(s)))}function Au(){return h0(),m0(),p0(),g0()}function g0(){if(jo!==5)return!1;var t=Qa,s=ch;ch=0;var o=ln(Na),r=B.T,f=se.p;try{se.p=32>o?32:o,B.T=null,o=uh,uh=null;var m=Qa,v=Na;if(jo=0,al=Qa=null,Na=0,(Qn&6)!==0)throw Error(a(331));var A=Qn;if(Qn|=4,Zg(m.current),qg(m,m.current,v,o),Qn=A,ic(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(at,m)}catch{}return!0}finally{se.p=f,B.T=r,_0(t,s)}}function y0(t,s,o){s=Pi(o,s),s=Vf(t.stateNode,s,2),t=Ya(t,s,2),t!==null&&(pt(t,2),fa(t))}function as(t,s,o){if(t.tag===3)y0(t,t,o);else for(;s!==null;){if(s.tag===3){y0(s,t,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ka===null||!Ka.has(r))){t=Pi(o,t),o=xg(2),r=Ya(s,o,2),r!==null&&(bg(o,r,s,t),pt(r,2),fa(r));break}}s=s.return}}function mh(t,s,o){var r=t.pingCache;if(r===null){r=t.pingCache=new X2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(ah=!0,f.add(o),t=Z2.bind(null,t,s,o),s.then(t,t))}function Z2(t,s,o){var r=t.pingCache;r!==null&&r.delete(s),t.pingedLanes|=t.suspendedLanes&o,t.warmLanes&=~o,bs===t&&($n&o)===o&&(Ws===4||Ws===3&&($n&62914560)===$n&&300>bt()-Cu?(Qn&2)===0&&rl(t,0):rh|=o,il===$n&&(il=0)),fa(t)}function x0(t,s){s===0&&(s=gt()),t=pr(t,s),t!==null&&(pt(t,s),fa(t))}function J2(t){var s=t.memoizedState,o=0;s!==null&&(o=s.retryLane),x0(t,o)}function ev(t,s){var o=0;switch(t.tag){case 31:case 13:var r=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),x0(t,o)}function tv(t,s){return ft(t,s)}var Nu=null,cl=null,ph=!1,Du=!1,_h=!1,Ja=0;function fa(t){t!==cl&&t.next===null&&(cl===null?Nu=cl=t:cl=cl.next=t),Du=!0,ph||(ph=!0,sv())}function ic(t,s){if(!_h&&Du){_h=!0;do for(var o=!1,r=Nu;r!==null;){if(t!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var v=r.suspendedLanes,A=r.pingedLanes;m=(1<<31-xe(42|t)+1)-1,m&=f&~(v&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,S0(r,m))}else m=$n,m=tt(r,r===bs?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||$t(r,m)||(o=!0,S0(r,m));r=r.next}while(o);_h=!1}}function nv(){b0()}function b0(){Du=ph=!1;var t=0;Ja!==0&&hv()&&(t=Ja);for(var s=bt(),o=null,r=Nu;r!==null;){var f=r.next,m=v0(r,s);m===0?(r.next=null,o===null?Nu=f:o.next=f,f===null&&(cl=o)):(o=r,(t!==0||(m&3)!==0)&&(Du=!0)),r=f}jo!==0&&jo!==5||ic(t),Ja!==0&&(Ja=0)}function v0(t,s){for(var o=t.suspendedLanes,r=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var v=31-xe(m),A=1<<v,q=f[v];q===-1?((A&o)===0||(A&r)!==0)&&(f[v]=jt(A,s)):q<=s&&(t.expiredLanes|=A),m&=~A}if(s=bs,o=$n,o=tt(t,t===s?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,o===0||t===s&&(is===2||is===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Ee(r),t.callbackNode=null,t.callbackPriority=0;if((o&3)===0||$t(t,o)){if(s=o&-o,s===t.callbackPriority)return s;switch(r!==null&&Ee(r),ln(o)){case 2:case 8:o=zt;break;case 32:o=dt;break;case 268435456:o=J;break;default:o=dt}return r=w0.bind(null,t),o=ft(o,r),t.callbackPriority=s,t.callbackNode=o,s}return r!==null&&r!==null&&Ee(r),t.callbackPriority=2,t.callbackNode=null,2}function w0(t,s){if(jo!==0&&jo!==5)return t.callbackNode=null,t.callbackPriority=0,null;var o=t.callbackNode;if(Au()&&t.callbackNode!==o)return null;var r=$n;return r=tt(t,t===bs?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(s0(t,r,s),v0(t,bt()),t.callbackNode!=null&&t.callbackNode===o?w0.bind(null,t):null)}function S0(t,s){if(Au())return null;s0(t,s,!0)}function sv(){pv(function(){(Qn&6)!==0?ft(At,nv):b0()})}function gh(){if(Ja===0){var t=Gr;t===0&&(t=ze,ze<<=1,(ze&261888)===0&&(ze=256)),Ja=t}return Ja}function C0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Qo(""+t)}function k0(t,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,t.id&&o.setAttribute("form",t.id),s.parentNode.insertBefore(o,s),t=new FormData(t),o.parentNode.removeChild(o),t}function ov(t,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=C0((f[wn]||null).action),v=r.submitter;v&&(s=(s=v[wn]||null)?C0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var A=new yo("action","action",null,r,f);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ja!==0){var q=v?k0(f,v):new FormData(f);zf(o,{pending:!0,data:q,method:f.method,action:m},null,q)}}else typeof m=="function"&&(A.preventDefault(),q=v?k0(f,v):new FormData(f),zf(o,{pending:!0,data:q,method:f.method,action:m},m,q))},currentTarget:f}]})}}for(var yh=0;yh<jn.length;yh++){var xh=jn[yh],iv=xh.toLowerCase(),av=xh[0].toUpperCase()+xh.slice(1);Rn(iv,"on"+av)}Rn(_i,"onAnimationEnd"),Rn(Mi,"onAnimationIteration"),Rn(mr,"onAnimationStart"),Rn("dblclick","onDoubleClick"),Rn("focusin","onFocus"),Rn("focusout","onBlur"),Rn(Pr,"onTransitionRun"),Rn(Hr,"onTransitionStart"),Rn(Ur,"onTransitionCancel"),Rn(Ll,"onTransitionEnd"),un("onMouseEnter",["mouseout","mouseover"]),un("onMouseLeave",["mouseout","mouseover"]),un("onPointerEnter",["pointerout","pointerover"]),un("onPointerLeave",["pointerout","pointerover"]),Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ac));function j0(t,s){s=(s&4)!==0;for(var o=0;o<t.length;o++){var r=t[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var v=r.length-1;0<=v;v--){var A=r[v],q=A.instance,ve=A.currentTarget;if(A=A.listener,q!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=ve;try{m(f)}catch(Ie){ko(Ie)}f.currentTarget=null,m=q}else for(v=0;v<r.length;v++){if(A=r[v],q=A.instance,ve=A.currentTarget,A=A.listener,q!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=ve;try{m(f)}catch(Ie){ko(Ie)}f.currentTarget=null,m=q}}}}function Ln(t,s){var o=s[ls];o===void 0&&(o=s[ls]=new Set);var r=t+"__bubble";o.has(r)||(M0(s,t,2,!1),o.add(r))}function bh(t,s,o){var r=0;s&&(r|=4),M0(o,t,r,s)}var Ru="_reactListening"+Math.random().toString(36).slice(2);function vh(t){if(!t[Ru]){t[Ru]=!0,ws.forEach(function(o){o!=="selectionchange"&&(rv.has(o)||bh(o,!1,t),bh(o,!0,t))});var s=t.nodeType===9?t:t.ownerDocument;s===null||s[Ru]||(s[Ru]=!0,bh("selectionchange",!1,s))}}function M0(t,s,o,r){switch(ny(s)){case 2:var f=Lv;break;case 8:f=Ov;break;default:f=Oh}o=f.bind(null,s,o,t),f=void 0,!Zs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?t.addEventListener(s,o,{capture:!0,passive:f}):t.addEventListener(s,o,!0):f!==void 0?t.addEventListener(s,o,{passive:f}):t.addEventListener(s,o,!1)}function wh(t,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var A=r.stateNode.containerInfo;if(A===f)break;if(v===4)for(v=r.return;v!==null;){var q=v.tag;if((q===3||q===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;A!==null;){if(v=js(A),v===null)return;if(q=v.tag,q===5||q===6||q===26||q===27){r=m=v;continue e}A=A.parentNode}}r=r.return}$o(function(){var ve=m,Ie=Ds(o),We=[];e:{var Ce=Ol.get(t);if(Ce!==void 0){var Te=yo,Bt=t;switch(t){case"keypress":if(ro(o)===0)break e;case"keydown":case"keyup":Te=ji;break;case"focusin":Bt="focus",Te=fi;break;case"focusout":Bt="blur",Te=fi;break;case"beforeblur":case"afterblur":Te=fi;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Te=ti;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Te=Ii;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Te=fe;break;case _i:case Mi:case mr:Te=Ro;break;case Ll:Te=De;break;case"scroll":case"scrollend":Te=Js;break;case"wheel":Te=Kt;break;case"copy":case"cut":case"paste":Te=ki;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Te=C;break;case"toggle":case"beforetoggle":Te=cn}var Jt=(s&4)!==0,ms=!Jt&&(t==="scroll"||t==="scrollend"),ue=Jt?Ce!==null?Ce+"Capture":null:Ce;Jt=[];for(var oe=ve,be;oe!==null;){var Ve=oe;if(be=Ve.stateNode,Ve=Ve.tag,Ve!==5&&Ve!==26&&Ve!==27||be===null||ue===null||(Ve=_n(oe,ue),Ve!=null&&Jt.push(rc(oe,Ve,be))),ms)break;oe=oe.return}0<Jt.length&&(Ce=new Te(Ce,Bt,null,o,Ie),We.push({event:Ce,listeners:Jt}))}}if((s&7)===0){e:{if(Ce=t==="mouseover"||t==="pointerover",Te=t==="mouseout"||t==="pointerout",Ce&&o!==zi&&(Bt=o.relatedTarget||o.fromElement)&&(js(Bt)||Bt[mt]))break e;if((Te||Ce)&&(Ce=Ie.window===Ie?Ie:(Ce=Ie.ownerDocument)?Ce.defaultView||Ce.parentWindow:window,Te?(Bt=o.relatedTarget||o.toElement,Te=ve,Bt=Bt?js(Bt):null,Bt!==null&&(ms=u(Bt),Jt=Bt.tag,Bt!==ms||Jt!==5&&Jt!==27&&Jt!==6)&&(Bt=null)):(Te=null,Bt=ve),Te!==Bt)){if(Jt=ti,Ve="onMouseLeave",ue="onMouseEnter",oe="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=C,Ve="onPointerLeave",ue="onPointerEnter",oe="pointer"),ms=Te==null?Ce:sn(Te),be=Bt==null?Ce:sn(Bt),Ce=new Jt(Ve,oe+"leave",Te,o,Ie),Ce.target=ms,Ce.relatedTarget=be,Ve=null,js(Ie)===ve&&(Jt=new Jt(ue,oe+"enter",Bt,o,Ie),Jt.target=be,Jt.relatedTarget=ms,Ve=Jt),ms=Ve,Te&&Bt)t:{for(Jt=lv,ue=Te,oe=Bt,be=0,Ve=ue;Ve;Ve=Jt(Ve))be++;Ve=0;for(var Ft=oe;Ft;Ft=Jt(Ft))Ve++;for(;0<be-Ve;)ue=Jt(ue),be--;for(;0<Ve-be;)oe=Jt(oe),Ve--;for(;be--;){if(ue===oe||oe!==null&&ue===oe.alternate){Jt=ue;break t}ue=Jt(ue),oe=Jt(oe)}Jt=null}else Jt=null;Te!==null&&E0(We,Ce,Te,Jt,!1),Bt!==null&&ms!==null&&E0(We,ms,Bt,Jt,!0)}}e:{if(Ce=ve?sn(ve):window,Te=Ce.nodeName&&Ce.nodeName.toLowerCase(),Te==="select"||Te==="input"&&Ce.type==="file")var Wn=D;else if(ht(Ce))if(Y)Wn=Ge;else{Wn=me;var Pt=le}else Te=Ce.nodeName,!Te||Te.toLowerCase()!=="input"||Ce.type!=="checkbox"&&Ce.type!=="radio"?ve&&xs(ve.elementType)&&(Wn=D):Wn=Me;if(Wn&&(Wn=Wn(t,ve))){Ht(We,Wn,o,Ie);break e}Pt&&Pt(t,Ce,ve),t==="focusout"&&ve&&Ce.type==="number"&&ve.memoizedProps.value!=null&&ss(Ce,"number",Ce.value)}switch(Pt=ve?sn(ve):window,t){case"focusin":(ht(Pt)||Pt.contentEditable==="true")&&(Gt=Pt,qn=ve,En=null);break;case"focusout":En=qn=Gt=null;break;case"mousedown":Us=!0;break;case"contextmenu":case"mouseup":case"dragend":Us=!1,Co(We,o,Ie);break;case"selectionchange":if(Nt)break;case"keydown":case"keyup":Co(We,o,Ie)}var vn;if(Dn)e:{switch(t){case"compositionstart":var In="onCompositionStart";break e;case"compositionend":In="onCompositionEnd";break e;case"compositionupdate":In="onCompositionUpdate";break e}In=void 0}else te?L(t,o)&&(In="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(In="onCompositionStart");In&&(eo&&o.locale!=="ko"&&(te||In!=="onCompositionStart"?In==="onCompositionEnd"&&te&&(vn=$i()):(Ls=Ie,Ci="value"in Ls?Ls.value:Ls.textContent,te=!0)),Pt=Bu(ve,In),0<Pt.length&&(In=new It(In,t,null,o,Ie),We.push({event:In,listeners:Pt}),vn?In.data=vn:(vn=$(o),vn!==null&&(In.data=vn)))),(vn=os?re(t,o):Be(t,o))&&(In=Bu(ve,"onBeforeInput"),0<In.length&&(Pt=new It("onBeforeInput","beforeinput",null,o,Ie),We.push({event:Pt,listeners:In}),Pt.data=vn)),ov(We,t,ve,o,Ie)}j0(We,s)})}function rc(t,s,o){return{instance:t,listener:s,currentTarget:o}}function Bu(t,s){for(var o=s+"Capture",r=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=_n(t,o),f!=null&&r.unshift(rc(t,f,m)),f=_n(t,s),f!=null&&r.push(rc(t,f,m))),t.tag===3)return r;t=t.return}return[]}function lv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function E0(t,s,o,r,f){for(var m=s._reactName,v=[];o!==null&&o!==r;){var A=o,q=A.alternate,ve=A.stateNode;if(A=A.tag,q!==null&&q===r)break;A!==5&&A!==26&&A!==27||ve===null||(q=ve,f?(ve=_n(o,m),ve!=null&&v.unshift(rc(o,ve,q))):f||(ve=_n(o,m),ve!=null&&v.push(rc(o,ve,q)))),o=o.return}v.length!==0&&t.push({event:s,listeners:v})}var cv=/\r\n?/g,uv=/\u0000|\uFFFD/g;function T0(t){return(typeof t=="string"?t:""+t).replace(cv,`
`).replace(uv,"")}function A0(t,s){return s=T0(s),T0(t)===s}function hs(t,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||Fo(t,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&Fo(t,""+r);break;case"className":gs(t,"class",r);break;case"tabIndex":gs(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":gs(t,o,r);break;case"style":Si(t,r,m);break;case"data":if(s!=="object"){gs(t,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){t.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(o);break}r=Qo(""+r),t.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&hs(t,s,"name",f.name,f,null),hs(t,s,"formEncType",f.formEncType,f,null),hs(t,s,"formMethod",f.formMethod,f,null),hs(t,s,"formTarget",f.formTarget,f,null)):(hs(t,s,"encType",f.encType,f,null),hs(t,s,"method",f.method,f,null),hs(t,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(o);break}r=Qo(""+r),t.setAttribute(o,r);break;case"onClick":r!=null&&(t.onclick=Ms);break;case"onScroll":r!=null&&Ln("scroll",t);break;case"onScrollEnd":r!=null&&Ln("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=o}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}o=Qo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,""+r):t.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,""):t.removeAttribute(o);break;case"capture":case"download":r===!0?t.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,r):t.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(o,r):t.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(o):t.setAttribute(o,r);break;case"popover":Ln("beforetoggle",t),Ln("toggle",t),qs(t,"popover",r);break;case"xlinkActuate":zs(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":zs(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":zs(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":zs(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":zs(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":zs(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":zs(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":zs(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":zs(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":qs(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=zo.get(o)||o,qs(t,o,r))}}function Sh(t,s,o,r,f,m){switch(o){case"style":Si(t,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=o}}break;case"children":typeof r=="string"?Fo(t,r):(typeof r=="number"||typeof r=="bigint")&&Fo(t,""+r);break;case"onScroll":r!=null&&Ln("scroll",t);break;case"onScrollEnd":r!=null&&Ln("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Ms);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ns.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=t[wn]||null,m=m!=null?m[o]:null,typeof m=="function"&&t.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in t?t[o]=null:t.hasAttribute(o)&&t.removeAttribute(o)),t.addEventListener(s,r,f);break e}o in t?t[o]=r:r===!0?t.setAttribute(o,""):qs(t,o,r)}}}function Vo(t,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ln("error",t),Ln("load",t);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:hs(t,s,m,v,o,null)}}f&&hs(t,s,"srcSet",o.srcSet,o,null),r&&hs(t,s,"src",o.src,o,null);return;case"input":Ln("invalid",t);var A=m=v=f=null,q=null,ve=null;for(r in o)if(o.hasOwnProperty(r)){var Ie=o[r];if(Ie!=null)switch(r){case"name":f=Ie;break;case"type":v=Ie;break;case"checked":q=Ie;break;case"defaultChecked":ve=Ie;break;case"value":m=Ie;break;case"defaultValue":A=Ie;break;case"children":case"dangerouslySetInnerHTML":if(Ie!=null)throw Error(a(137,s));break;default:hs(t,s,r,Ie,o,null)}}Cn(t,m,A,q,ve,v,f,!1);return;case"select":Ln("invalid",t),r=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":v=A;break;case"multiple":r=A;default:hs(t,s,f,A,o,null)}s=m,o=v,t.multiple=!!r,s!=null?us(t,!!r,s,!1):o!=null&&us(t,!!r,o,!0);return;case"textarea":Ln("invalid",t),m=f=r=null;for(v in o)if(o.hasOwnProperty(v)&&(A=o[v],A!=null))switch(v){case"value":r=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:hs(t,s,v,A,o,null)}ao(t,r,f,m);return;case"option":for(q in o)if(o.hasOwnProperty(q)&&(r=o[q],r!=null))switch(q){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:hs(t,s,q,r,o,null)}return;case"dialog":Ln("beforetoggle",t),Ln("toggle",t),Ln("cancel",t),Ln("close",t);break;case"iframe":case"object":Ln("load",t);break;case"video":case"audio":for(r=0;r<ac.length;r++)Ln(ac[r],t);break;case"image":Ln("error",t),Ln("load",t);break;case"details":Ln("toggle",t);break;case"embed":case"source":case"link":Ln("error",t),Ln("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ve in o)if(o.hasOwnProperty(ve)&&(r=o[ve],r!=null))switch(ve){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:hs(t,s,ve,r,o,null)}return;default:if(xs(s)){for(Ie in o)o.hasOwnProperty(Ie)&&(r=o[Ie],r!==void 0&&Sh(t,s,Ie,r,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(r=o[A],r!=null&&hs(t,s,A,r,o,null))}function dv(t,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,A=null,q=null,ve=null,Ie=null;for(Te in o){var We=o[Te];if(o.hasOwnProperty(Te)&&We!=null)switch(Te){case"checked":break;case"value":break;case"defaultValue":q=We;default:r.hasOwnProperty(Te)||hs(t,s,Te,null,r,We)}}for(var Ce in r){var Te=r[Ce];if(We=o[Ce],r.hasOwnProperty(Ce)&&(Te!=null||We!=null))switch(Ce){case"type":m=Te;break;case"name":f=Te;break;case"checked":ve=Te;break;case"defaultChecked":Ie=Te;break;case"value":v=Te;break;case"defaultValue":A=Te;break;case"children":case"dangerouslySetInnerHTML":if(Te!=null)throw Error(a(137,s));break;default:Te!==We&&hs(t,s,Ce,Te,r,We)}}io(t,v,A,q,ve,Ie,m,f);return;case"select":Te=v=A=Ce=null;for(m in o)if(q=o[m],o.hasOwnProperty(m)&&q!=null)switch(m){case"value":break;case"multiple":Te=q;default:r.hasOwnProperty(m)||hs(t,s,m,null,r,q)}for(f in r)if(m=r[f],q=o[f],r.hasOwnProperty(f)&&(m!=null||q!=null))switch(f){case"value":Ce=m;break;case"defaultValue":A=m;break;case"multiple":v=m;default:m!==q&&hs(t,s,f,m,r,q)}s=A,o=v,r=Te,Ce!=null?us(t,!!o,Ce,!1):!!r!=!!o&&(s!=null?us(t,!!o,s,!0):us(t,!!o,o?[]:"",!1));return;case"textarea":Te=Ce=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:hs(t,s,A,null,r,f)}for(v in r)if(f=r[v],m=o[v],r.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":Ce=f;break;case"defaultValue":Te=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&hs(t,s,v,f,r,m)}ds(t,Ce,Te);return;case"option":for(var Bt in o)if(Ce=o[Bt],o.hasOwnProperty(Bt)&&Ce!=null&&!r.hasOwnProperty(Bt))switch(Bt){case"selected":t.selected=!1;break;default:hs(t,s,Bt,null,r,Ce)}for(q in r)if(Ce=r[q],Te=o[q],r.hasOwnProperty(q)&&Ce!==Te&&(Ce!=null||Te!=null))switch(q){case"selected":t.selected=Ce&&typeof Ce!="function"&&typeof Ce!="symbol";break;default:hs(t,s,q,Ce,r,Te)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in o)Ce=o[Jt],o.hasOwnProperty(Jt)&&Ce!=null&&!r.hasOwnProperty(Jt)&&hs(t,s,Jt,null,r,Ce);for(ve in r)if(Ce=r[ve],Te=o[ve],r.hasOwnProperty(ve)&&Ce!==Te&&(Ce!=null||Te!=null))switch(ve){case"children":case"dangerouslySetInnerHTML":if(Ce!=null)throw Error(a(137,s));break;default:hs(t,s,ve,Ce,r,Te)}return;default:if(xs(s)){for(var ms in o)Ce=o[ms],o.hasOwnProperty(ms)&&Ce!==void 0&&!r.hasOwnProperty(ms)&&Sh(t,s,ms,void 0,r,Ce);for(Ie in r)Ce=r[Ie],Te=o[Ie],!r.hasOwnProperty(Ie)||Ce===Te||Ce===void 0&&Te===void 0||Sh(t,s,Ie,Ce,r,Te);return}}for(var ue in o)Ce=o[ue],o.hasOwnProperty(ue)&&Ce!=null&&!r.hasOwnProperty(ue)&&hs(t,s,ue,null,r,Ce);for(We in r)Ce=r[We],Te=o[We],!r.hasOwnProperty(We)||Ce===Te||Ce==null&&Te==null||hs(t,s,We,Ce,r,Te)}function N0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,v=f.initiatorType,A=f.duration;if(m&&A&&N0(v)){for(v=0,A=f.responseEnd,r+=1;r<o.length;r++){var q=o[r],ve=q.startTime;if(ve>A)break;var Ie=q.transferSize,We=q.initiatorType;Ie&&N0(We)&&(q=q.responseEnd,v+=Ie*(q<A?1:(A-ve)/(q-ve)))}if(--r,s+=8*(m+v)/(f.duration/1e3),t++,10<t)break}}if(0<t)return s/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ch=null,kh=null;function Lu(t){return t.nodeType===9?t:t.ownerDocument}function D0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R0(t,s){if(t===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&s==="foreignObject"?0:t}function jh(t,s){return t==="textarea"||t==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Mh=null;function hv(){var t=window.event;return t&&t.type==="popstate"?t===Mh?!1:(Mh=t,!0):(Mh=null,!1)}var B0=typeof setTimeout=="function"?setTimeout:void 0,mv=typeof clearTimeout=="function"?clearTimeout:void 0,L0=typeof Promise=="function"?Promise:void 0,pv=typeof queueMicrotask=="function"?queueMicrotask:typeof L0<"u"?function(t){return L0.resolve(null).then(t).catch(_v)}:B0;function _v(t){setTimeout(function(){throw t})}function er(t){return t==="head"}function O0(t,s){var o=s,r=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){t.removeChild(f),hl(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")lc(t.ownerDocument.documentElement);else if(o==="head"){o=t.ownerDocument.head,lc(o);for(var m=o.firstChild;m;){var v=m.nextSibling,A=m.nodeName;m[To]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&lc(t.ownerDocument.body);o=f}while(o);hl(s)}function z0(t,s){var o=t;t=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(t===0)break;t--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||t++;o=r}while(o)}function Eh(t){var s=t.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Eh(o),Oo(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}t.removeChild(o)}}function gv(t,s,o,r){for(;t.nodeType===1;){var f=o;if(t.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[To])switch(s){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(s==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Wi(t.nextSibling),t===null)break}return null}function yv(t,s,o){if(s==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!o||(t=Wi(t.nextSibling),t===null))return null;return t}function $0(t,s){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Wi(t.nextSibling),t===null))return null;return t}function Th(t){return t.data==="$?"||t.data==="$~"}function Ah(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function xv(t,s){var o=t.ownerDocument;if(t.data==="$~")t._reactRetry=s;else if(t.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Wi(t){for(;t!=null;t=t.nextSibling){var s=t.nodeType;if(s===1||s===3)break;if(s===8){if(s=t.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return t}var Nh=null;function I0(t){t=t.nextSibling;for(var s=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"||o==="/&"){if(s===0)return Wi(t.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}t=t.nextSibling}return null}function P0(t){t=t.previousSibling;for(var s=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return t;s--}else o!=="/$"&&o!=="/&"||s++}t=t.previousSibling}return null}function H0(t,s,o){switch(s=Lu(o),t){case"html":if(t=s.documentElement,!t)throw Error(a(452));return t;case"head":if(t=s.head,!t)throw Error(a(453));return t;case"body":if(t=s.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function lc(t){for(var s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Oo(t)}var Fi=new Map,U0=new Set;function Ou(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Da=se.d;se.d={f:bv,r:vv,D:wv,C:Sv,L:Cv,m:kv,X:Mv,S:jv,M:Ev};function bv(){var t=Da.f(),s=Mu();return t||s}function vv(t){var s=Bs(t);s!==null&&s.tag===5&&s.type==="form"?ig(s):Da.r(t)}var ul=typeof document>"u"?null:document;function V0(t,s,o){var r=ul;if(r&&typeof s=="string"&&s){var f=Qs(s);f='link[rel="'+t+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),U0.has(f)||(U0.add(f),t={rel:t,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),Vo(s,"link",t),Mn(s),r.head.appendChild(s)))}}function wv(t){Da.D(t),V0("dns-prefetch",t,null)}function Sv(t,s){Da.C(t,s),V0("preconnect",t,s)}function Cv(t,s,o){Da.L(t,s,o);var r=ul;if(r&&t&&s){var f='link[rel="preload"][as="'+Qs(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Qs(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Qs(o.imageSizes)+'"]')):f+='[href="'+Qs(t)+'"]';var m=f;switch(s){case"style":m=dl(t);break;case"script":m=fl(t)}Fi.has(m)||(t=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:t,as:s},o),Fi.set(m,t),r.querySelector(f)!==null||s==="style"&&r.querySelector(cc(m))||s==="script"&&r.querySelector(uc(m))||(s=r.createElement("link"),Vo(s,"link",t),Mn(s),r.head.appendChild(s)))}}function kv(t,s){Da.m(t,s);var o=ul;if(o&&t){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Qs(r)+'"][href="'+Qs(t)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=fl(t)}if(!Fi.has(m)&&(t=x({rel:"modulepreload",href:t},s),Fi.set(m,t),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(uc(m)))return}r=o.createElement("link"),Vo(r,"link",t),Mn(r),o.head.appendChild(r)}}}function jv(t,s,o){Da.S(t,s,o);var r=ul;if(r&&t){var f=Gn(r).hoistableStyles,m=dl(t);s=s||"default";var v=f.get(m);if(!v){var A={loading:0,preload:null};if(v=r.querySelector(cc(m)))A.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":s},o),(o=Fi.get(m))&&Dh(t,o);var q=v=r.createElement("link");Mn(q),Vo(q,"link",t),q._p=new Promise(function(ve,Ie){q.onload=ve,q.onerror=Ie}),q.addEventListener("load",function(){A.loading|=1}),q.addEventListener("error",function(){A.loading|=2}),A.loading|=4,zu(v,s,r)}v={type:"stylesheet",instance:v,count:1,state:A},f.set(m,v)}}}function Mv(t,s){Da.X(t,s);var o=ul;if(o&&t){var r=Gn(o).hoistableScripts,f=fl(t),m=r.get(f);m||(m=o.querySelector(uc(f)),m||(t=x({src:t,async:!0},s),(s=Fi.get(f))&&Rh(t,s),m=o.createElement("script"),Mn(m),Vo(m,"link",t),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function Ev(t,s){Da.M(t,s);var o=ul;if(o&&t){var r=Gn(o).hoistableScripts,f=fl(t),m=r.get(f);m||(m=o.querySelector(uc(f)),m||(t=x({src:t,async:!0,type:"module"},s),(s=Fi.get(f))&&Rh(t,s),m=o.createElement("script"),Mn(m),Vo(m,"link",t),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function Y0(t,s,o,r){var f=(f=ge.current)?Ou(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=dl(o.href),o=Gn(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){t=dl(o.href);var m=Gn(f).hoistableStyles,v=m.get(t);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,v),(m=f.querySelector(cc(t)))&&!m._p&&(v.instance=m,v.state.loading=5),Fi.has(t)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Fi.set(t,o),m||Tv(f,t,o,v.state))),s&&r===null)throw Error(a(528,""));return v}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=fl(o),o=Gn(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function dl(t){return'href="'+Qs(t)+'"'}function cc(t){return'link[rel="stylesheet"]['+t+"]"}function W0(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Tv(t,s,o,r){t.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=t.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),Vo(s,"link",o),Mn(s),t.head.appendChild(s))}function fl(t){return'[src="'+Qs(t)+'"]'}function uc(t){return"script[async]"+t}function F0(t,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=t.querySelector('style[data-href~="'+Qs(o.href)+'"]');if(r)return s.instance=r,Mn(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Mn(r),Vo(r,"style",f),zu(r,o.precedence,t),s.instance=r;case"stylesheet":f=dl(o.href);var m=t.querySelector(cc(f));if(m)return s.state.loading|=4,s.instance=m,Mn(m),m;r=W0(o),(f=Fi.get(f))&&Dh(r,f),m=(t.ownerDocument||t).createElement("link"),Mn(m);var v=m;return v._p=new Promise(function(A,q){v.onload=A,v.onerror=q}),Vo(m,"link",r),s.state.loading|=4,zu(m,o.precedence,t),s.instance=m;case"script":return m=fl(o.src),(f=t.querySelector(uc(m)))?(s.instance=f,Mn(f),f):(r=o,(f=Fi.get(m))&&(r=x({},o),Rh(r,f)),t=t.ownerDocument||t,f=t.createElement("script"),Mn(f),Vo(f,"link",r),t.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,zu(r,o.precedence,t));return s.instance}function zu(t,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,v=0;v<r.length;v++){var A=r[v];if(A.dataset.precedence===s)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(t,s.firstChild))}function Dh(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.title==null&&(t.title=s.title)}function Rh(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.integrity==null&&(t.integrity=s.integrity)}var $u=null;function X0(t,s,o){if($u===null){var r=new Map,f=$u=new Map;f.set(o,r)}else f=$u,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(t))return r;for(r.set(t,null),o=o.getElementsByTagName(t),f=0;f<o.length;f++){var m=o[f];if(!(m[To]||m[Mt]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=t+v;var A=r.get(v);A?A.push(m):r.set(v,[m])}}return r}function G0(t,s,o){t=t.ownerDocument||t,t.head.insertBefore(o,s==="title"?t.querySelector("head > title"):null)}function Av(t,s,o){if(o===1||s.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return t=s.disabled,typeof s.precedence=="string"&&t==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function q0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Nv(t,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=dl(r.href),m=s.querySelector(cc(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(t.count++,t=Iu.bind(t),s.then(t,t)),o.state.loading|=4,o.instance=m,Mn(m);return}m=s.ownerDocument||s,r=W0(r),(f=Fi.get(f))&&Dh(r,f),m=m.createElement("link"),Mn(m);var v=m;v._p=new Promise(function(A,q){v.onload=A,v.onerror=q}),Vo(m,"link",r),o.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(t.count++,o=Iu.bind(t),s.addEventListener("load",o),s.addEventListener("error",o))}}var Bh=0;function Dv(t,s){return t.stylesheets&&t.count===0&&Hu(t,t.stylesheets),0<t.count||0<t.imgCount?function(o){var r=setTimeout(function(){if(t.stylesheets&&Hu(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+s);0<t.imgBytes&&Bh===0&&(Bh=62500*fv());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hu(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>Bh?50:800)+s);return t.unsuspend=o,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Iu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Pu=null;function Hu(t,s){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pu=new Map,s.forEach(Rv,t),Pu=null,Iu.call(t))}function Rv(t,s){if(!(s.state.loading&4)){var o=Pu.get(t);if(o)var r=o.get(null);else{o=new Map,Pu.set(t,o);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),r=v)}r&&o.set(null,r)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||r,m===r&&o.set(null,f),o.set(v,f),this.count++,r=Iu.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),s.state.loading|=4}}var dc={$$typeof:N,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function Bv(t,s,o,r,f,m,v,A,q){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.hiddenUpdates=mn(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=q,this.incompleteTransitions=new Map}function K0(t,s,o,r,f,m,v,A,q,ve,Ie,We){return t=new Bv(t,s,o,v,q,ve,Ie,We,A),s=1,m===!0&&(s|=24),m=Ei(3,null,null,s),t.current=m,m.stateNode=t,s=hf(),s.refCount++,t.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},gf(m),t}function Q0(t){return t?(t=Vr,t):Vr}function Z0(t,s,o,r,f,m){f=Q0(f),r.context===null?r.context=f:r.pendingContext=f,r=Va(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Ya(t,r,s),o!==null&&(vi(o,t,s),Vl(o,t,s))}function J0(t,s){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<s?o:s}}function Lh(t,s){J0(t,s),(t=t.alternate)&&J0(t,s)}function ey(t){if(t.tag===13||t.tag===31){var s=pr(t,67108864);s!==null&&vi(s,t,67108864),Lh(t,67108864)}}function ty(t){if(t.tag===13||t.tag===31){var s=Ri();s=pn(s);var o=pr(t,s);o!==null&&vi(o,t,s),Lh(t,s)}}var Uu=!0;function Lv(t,s,o,r){var f=B.T;B.T=null;var m=se.p;try{se.p=2,Oh(t,s,o,r)}finally{se.p=m,B.T=f}}function Ov(t,s,o,r){var f=B.T;B.T=null;var m=se.p;try{se.p=8,Oh(t,s,o,r)}finally{se.p=m,B.T=f}}function Oh(t,s,o,r){if(Uu){var f=zh(r);if(f===null)wh(t,s,r,Vu,o),sy(t,r);else if($v(f,t,s,o,r))r.stopPropagation();else if(sy(t,r),s&4&&-1<zv.indexOf(t)){for(;f!==null;){var m=Bs(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=St(m.pendingLanes);if(v!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var q=1<<31-xe(v);A.entanglements[1]|=q,v&=~q}fa(m),(Qn&6)===0&&(ku=bt()+500,ic(0))}}break;case 31:case 13:A=pr(m,2),A!==null&&vi(A,m,2),Mu(),Lh(m,2)}if(m=zh(r),m===null&&wh(t,s,r,Vu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else wh(t,s,r,null,o)}}function zh(t){return t=Ds(t),$h(t)}var Vu=null;function $h(t){if(Vu=null,t=js(t),t!==null){var s=u(t);if(s===null)t=null;else{var o=s.tag;if(o===13){if(t=d(s),t!==null)return t;t=null}else if(o===31){if(t=h(s),t!==null)return t;t=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;t=null}else s!==t&&(t=null)}}return Vu=t,null}function ny(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vt()){case At:return 2;case zt:return 8;case dt:case V:return 32;case J:return 268435456;default:return 32}default:return 32}}var Ih=!1,tr=null,nr=null,sr=null,fc=new Map,hc=new Map,or=[],zv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sy(t,s){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":fc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":hc.delete(s.pointerId)}}function mc(t,s,o,r,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=Bs(s),s!==null&&ey(s)),t):(t.eventSystemFlags|=r,s=t.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),t)}function $v(t,s,o,r,f){switch(s){case"focusin":return tr=mc(tr,t,s,o,r,f),!0;case"dragenter":return nr=mc(nr,t,s,o,r,f),!0;case"mouseover":return sr=mc(sr,t,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return fc.set(m,mc(fc.get(m)||null,t,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,hc.set(m,mc(hc.get(m)||null,t,s,o,r,f)),!0}return!1}function oy(t){var s=js(t.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){t.blockedOn=s,Vt(t.priority,function(){ty(o)});return}}else if(s===31){if(s=h(o),s!==null){t.blockedOn=s,Vt(t.priority,function(){ty(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yu(t){if(t.blockedOn!==null)return!1;for(var s=t.targetContainers;0<s.length;){var o=zh(t.nativeEvent);if(o===null){o=t.nativeEvent;var r=new o.constructor(o.type,o);zi=r,o.target.dispatchEvent(r),zi=null}else return s=Bs(o),s!==null&&ey(s),t.blockedOn=o,!1;s.shift()}return!0}function iy(t,s,o){Yu(t)&&o.delete(s)}function Iv(){Ih=!1,tr!==null&&Yu(tr)&&(tr=null),nr!==null&&Yu(nr)&&(nr=null),sr!==null&&Yu(sr)&&(sr=null),fc.forEach(iy),hc.forEach(iy)}function Wu(t,s){t.blockedOn===s&&(t.blockedOn=null,Ih||(Ih=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Iv)))}var Fu=null;function ay(t){Fu!==t&&(Fu=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Fu===t&&(Fu=null);for(var s=0;s<t.length;s+=3){var o=t[s],r=t[s+1],f=t[s+2];if(typeof r!="function"){if($h(r||o)===null)continue;break}var m=Bs(o);m!==null&&(t.splice(s,3),s-=3,zf(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function hl(t){function s(q){return Wu(q,t)}tr!==null&&Wu(tr,t),nr!==null&&Wu(nr,t),sr!==null&&Wu(sr,t),fc.forEach(s),hc.forEach(s);for(var o=0;o<or.length;o++){var r=or[o];r.blockedOn===t&&(r.blockedOn=null)}for(;0<or.length&&(o=or[0],o.blockedOn===null);)oy(o),o.blockedOn===null&&or.shift();if(o=(t.ownerDocument||t).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],v=f[wn]||null;if(typeof m=="function")v||ay(o);else if(v){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[wn]||null)A=v.formAction;else if($h(f)!==null)continue}else A=v.action;typeof A=="function"?o[r+1]=A:(o.splice(r,3),r-=3),ay(o)}}}function ry(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Ph(t){this._internalRoot=t}Xu.prototype.render=Ph.prototype.render=function(t){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=Ri();Z0(o,r,t,s,null,null)},Xu.prototype.unmount=Ph.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var s=t.containerInfo;Z0(t.current,2,null,t,null,null),Mu(),s[mt]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var s=on();t={blockedOn:null,target:t,priority:s};for(var o=0;o<or.length&&s!==0&&s<or[o].priority;o++);or.splice(o,0,t),o===0&&oy(t)}};var ly=n.version;if(ly!=="19.2.4")throw Error(a(527,ly,"19.2.4"));se.findDOMNode=function(t){var s=t._reactInternals;if(s===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=y(s),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Pv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gu.isDisabled&&Gu.supportsFiber)try{at=Gu.inject(Pv),Je=Gu}catch{}}return _c.createRoot=function(t,s){if(!c(t))throw Error(a(299));var o=!1,r="",f=pg,m=_g,v=gg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=K0(t,1,!1,null,null,o,r,null,f,m,v,ry),t[mt]=s.current,vh(t),new Ph(s)},_c.hydrateRoot=function(t,s,o){if(!c(t))throw Error(a(299));var r=!1,f="",m=pg,v=_g,A=gg,q=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.formState!==void 0&&(q=o.formState)),s=K0(t,1,!0,s,o!=null?o:null,r,f,q,m,v,A,ry),s.context=Q0(null),o=s.current,r=Ri(),r=pn(r),f=Va(r),f.callback=null,Ya(o,f,r),o=r,s.current.lanes=o,pt(s,o),fa(s),t[mt]=s.current,vh(t),new Xu(s)},_c.version="19.2.4",_c}var yy;function qv(){if(yy)return Uh.exports;yy=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Uh.exports=Gv(),Uh.exports}var Kv=qv();const Qv=Wx(Kv);var _=xp();const Zv=Wx(_);function Jv(e,n,i,a){if(typeof n=="function"?e!==n||!a:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(e):a?a.value:n.get(e)}function ew(e,n,i,a,c){if(typeof n=="function"?e!==n||!0:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(e,i),i}var Sd;const Ki="__TAURI_TO_IPC_KEY__";function tw(e,n=!1){return window.__TAURI_INTERNALS__.transformCallback(e,n)}async function je(e,n={},i){return window.__TAURI_INTERNALS__.invoke(e,n,i)}class nw{get rid(){return Jv(this,Sd,"f")}constructor(n){Sd.set(this,void 0),ew(this,Sd,n)}async close(){return je("plugin:resources|close",{rid:this.rid})}}Sd=new WeakMap;var Bi;(function(e){e.WINDOW_RESIZED="tauri://resize",e.WINDOW_MOVED="tauri://move",e.WINDOW_CLOSE_REQUESTED="tauri://close-requested",e.WINDOW_DESTROYED="tauri://destroyed",e.WINDOW_FOCUS="tauri://focus",e.WINDOW_BLUR="tauri://blur",e.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",e.WINDOW_THEME_CHANGED="tauri://theme-changed",e.WINDOW_CREATED="tauri://window-created",e.WEBVIEW_CREATED="tauri://webview-created",e.DRAG_ENTER="tauri://drag-enter",e.DRAG_OVER="tauri://drag-over",e.DRAG_DROP="tauri://drag-drop",e.DRAG_LEAVE="tauri://drag-leave"})(Bi||(Bi={}));async function Xx(e,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e,n),await je("plugin:event|unlisten",{event:e,eventId:n})}async function Tc(e,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return je("plugin:event|listen",{event:e,target:c,handler:tw(n)}).then(u=>async()=>Xx(e,u))}async function sw(e,n,i){return Tc(e,a=>{Xx(e,a.id),n(a)},i)}async function ow(e,n){await je("plugin:event|emit",{event:e,payload:n})}async function iw(e,n,i){await je("plugin:event|emit_to",{target:typeof e=="string"?{kind:"AnyLabel",label:e}:e,event:n,payload:i})}class Gx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new Ac(this.width*n,this.height*n)}[Ki](){return{width:this.width,height:this.height}}toJSON(){return this[Ki]()}}class Ac{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Gx(this.width/n,this.height/n)}[Ki](){return{width:this.width,height:this.height}}toJSON(){return this[Ki]()}}class ml{constructor(n){this.size=n}toLogical(n){return this.size instanceof Gx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof Ac?this.size:this.size.toPhysical(n)}[Ki](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[Ki]()}}class qx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new cr(this.x*n,this.y*n)}[Ki](){return{x:this.x,y:this.y}}toJSON(){return this[Ki]()}}class cr{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new qx(this.x/n,this.y/n)}[Ki](){return{x:this.x,y:this.y}}toJSON(){return this[Ki]()}}class qu{constructor(n){this.position=n}toLogical(n){return this.position instanceof qx?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof cr?this.position:this.position.toPhysical(n)}[Ki](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[Ki]()}}class Nc extends nw{constructor(n){super(n)}static async new(n,i,a){return je("plugin:image|new",{rgba:Rd(n),width:i,height:a}).then(c=>new Nc(c))}static async fromBytes(n){return je("plugin:image|from_bytes",{bytes:Rd(n)}).then(i=>new Nc(i))}static async fromPath(n){return je("plugin:image|from_path",{path:n}).then(i=>new Nc(i))}async rgba(){return je("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return je("plugin:image|size",{rid:this.rid})}}function Rd(e){return e==null?null:typeof e=="string"?e:e instanceof Nc?e.rid:e}var Om;(function(e){e[e.Critical=1]="Critical",e[e.Informational=2]="Informational"})(Om||(Om={}));class aw{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var xy;(function(e){e.None="none",e.Normal="normal",e.Indeterminate="indeterminate",e.Paused="paused",e.Error="error"})(xy||(xy={}));function bp(){return new Kx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Xh(){return je("plugin:window|get_all_windows").then(e=>e.map(n=>new Kx(n,{skip:!0})))}const Gh=["tauri://created","tauri://error"];class Kx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||je("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Xh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return bp()}static async getAll(){return Xh()}static async getFocusedWindow(){for(const n of await Xh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Tc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:sw(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Gh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return ow(n,i)}async emitTo(n,i,a){if(Gh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return iw(n,i,a)}_handleTauriEvent(n,i){return Gh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return je("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return je("plugin:window|inner_position",{label:this.label}).then(n=>new cr(n))}async outerPosition(){return je("plugin:window|outer_position",{label:this.label}).then(n=>new cr(n))}async innerSize(){return je("plugin:window|inner_size",{label:this.label}).then(n=>new Ac(n))}async outerSize(){return je("plugin:window|outer_size",{label:this.label}).then(n=>new Ac(n))}async isFullscreen(){return je("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return je("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return je("plugin:window|is_maximized",{label:this.label})}async isFocused(){return je("plugin:window|is_focused",{label:this.label})}async isDecorated(){return je("plugin:window|is_decorated",{label:this.label})}async isResizable(){return je("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return je("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return je("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return je("plugin:window|is_closable",{label:this.label})}async isVisible(){return je("plugin:window|is_visible",{label:this.label})}async title(){return je("plugin:window|title",{label:this.label})}async theme(){return je("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return je("plugin:window|is_always_on_top",{label:this.label})}async center(){return je("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===Om.Critical?i={type:"Critical"}:i={type:"Informational"}),je("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return je("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return je("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return je("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return je("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return je("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return je("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return je("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return je("plugin:window|maximize",{label:this.label})}async unmaximize(){return je("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return je("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return je("plugin:window|minimize",{label:this.label})}async unminimize(){return je("plugin:window|unminimize",{label:this.label})}async show(){return je("plugin:window|show",{label:this.label})}async hide(){return je("plugin:window|hide",{label:this.label})}async close(){return je("plugin:window|close",{label:this.label})}async destroy(){return je("plugin:window|destroy",{label:this.label})}async setDecorations(n){return je("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return je("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return je("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return je("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return je("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return je("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return je("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return je("plugin:window|set_size",{label:this.label,value:n instanceof ml?n:new ml(n)})}async setMinSize(n){return je("plugin:window|set_min_size",{label:this.label,value:n instanceof ml?n:n?new ml(n):null})}async setMaxSize(n){return je("plugin:window|set_max_size",{label:this.label,value:n instanceof ml?n:n?new ml(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return je("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return je("plugin:window|set_position",{label:this.label,value:n instanceof qu?n:new qu(n)})}async setFullscreen(n){return je("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return je("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return je("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return je("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return je("plugin:window|set_icon",{label:this.label,value:Rd(n)})}async setSkipTaskbar(n){return je("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return je("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return je("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return je("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return je("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return je("plugin:window|set_cursor_position",{label:this.label,value:n instanceof qu?n:new qu(n)})}async setIgnoreCursorEvents(n){return je("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return je("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return je("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return je("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return je("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return je("plugin:window|set_overlay_icon",{label:this.label,value:n?Rd(n):void 0})}async setProgressBar(n){return je("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return je("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return je("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return je("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(Bi.WINDOW_RESIZED,i=>{i.payload=new Ac(i.payload),n(i)})}async onMoved(n){return this.listen(Bi.WINDOW_MOVED,i=>{i.payload=new cr(i.payload),n(i)})}async onCloseRequested(n){return this.listen(Bi.WINDOW_CLOSE_REQUESTED,async i=>{const a=new aw(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(Bi.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new cr(d.payload.position)}})}),a=await this.listen(Bi.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new cr(d.payload.position)}})}),c=await this.listen(Bi.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new cr(d.payload.position)}})}),u=await this.listen(Bi.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(Bi.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(Bi.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(Bi.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(Bi.WINDOW_THEME_CHANGED,n)}}var by;(function(e){e.Disabled="disabled",e.Throttle="throttle",e.Suspend="suspend"})(by||(by={}));var vy;(function(e){e.Default="default",e.FluentOverlay="fluentOverlay"})(vy||(vy={}));var wy;(function(e){e.AppearanceBased="appearanceBased",e.Light="light",e.Dark="dark",e.MediumLight="mediumLight",e.UltraDark="ultraDark",e.Titlebar="titlebar",e.Selection="selection",e.Menu="menu",e.Popover="popover",e.Sidebar="sidebar",e.HeaderView="headerView",e.Sheet="sheet",e.WindowBackground="windowBackground",e.HudWindow="hudWindow",e.FullScreenUI="fullScreenUI",e.Tooltip="tooltip",e.ContentBackground="contentBackground",e.UnderWindowBackground="underWindowBackground",e.UnderPageBackground="underPageBackground",e.Mica="mica",e.Blur="blur",e.Acrylic="acrylic",e.Tabbed="tabbed",e.TabbedDark="tabbedDark",e.TabbedLight="tabbedLight"})(wy||(wy={}));var Sy;(function(e){e.FollowsWindowActiveState="followsWindowActiveState",e.Active="active",e.Inactive="inactive"})(Sy||(Sy={}));async function rw(e={}){return typeof e=="object"&&Object.freeze(e),await je("plugin:dialog|open",{options:e})}/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=(...e)=>e.filter((n,i,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===i).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,i,a)=>a?a.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=e=>{const n=cw(e);return n.charAt(0).toUpperCase()+n.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=_.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:u,iconNode:d,...h},p)=>_.createElement("svg",{ref:p,...uw,width:n,height:n,stroke:e,strokeWidth:a?Number(i)*24/Number(n):i,className:Qx("lucide",c),...!u&&!dw(h)&&{"aria-hidden":"true"},...h},[...d.map(([y,g])=>_.createElement(y,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=(e,n)=>{const i=_.forwardRef(({className:a,...c},u)=>_.createElement(fw,{ref:u,iconNode:n,className:Qx(`lucide-${lw(Cy(e))}`,`lucide-${e}`,a),...c}));return i.displayName=Cy(e),i};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Zx=la("chevron-down",hw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],pw=la("chevron-right",mw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],gw=la("chevron-up",_w);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],xw=la("ellipsis",yw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],vw=la("folder-git-2",bw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],Jx=la("git-branch-plus",ww);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],Cw=la("git-commit-horizontal",Sw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],eb=la("git-merge",kw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],Mw=la("panel-left-close",jw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],Tw=la("panel-left-open",Ew);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Nw=la("search",Aw),Dw=3.7,Ku=200,zm=240,Xn=540,Fs=176,qh=32,Tl=20,Rw=zm/2,pl=Xn+Rw,Ra=18,Ba=18,Kh="var(--border)";function ky(e){var n,i;return{start:new Date((i=(n=e.createdDate)!=null?n:e.divergedFromDate)!=null?i:e.lastCommitDate).getTime(),end:new Date(e.lastCommitDate).getTime()}}function Rr(e,n){var a,c,u,d;const i="branch"in n&&n.branch?n.branch:e;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,parentShas:"parentShas"in n?(a=n.parentShas)!=null?a:[]:n.parentSha?[n.parentSha]:[],childShas:"childShas"in n?(c=n.childShas)!=null?c:[]:[],clusterKey:"clusterKey"in n&&(u=n.clusterKey)!=null?u:null,kind:n.kind,isRemote:(d=n.isRemote)!=null?d:!1}}function La(e){var n,i;return(i=(n=e.id)!=null?n:e.fullSha)!=null?i:""}function Mc(e,n){const i=new Date(e.date).getTime()-new Date(n.date).getTime();return i!==0?i:La(e).localeCompare(La(n))}function tb(e){return[...e].sort(Mc)}function Bw(e){var h,p,y,g,x,b;if(e.length<=1)return[...e];const n=new Map(e.map(w=>[La(w),w])),i=new Map,a=new Map;e.forEach(w=>i.set(La(w),0));for(const w of e){const S=((h=w.parentShas)!=null?h:[]).length>0?(p=w.parentShas)!=null?p:[]:w.parentSha?[w.parentSha]:[];for(const j of S){if(!j||!n.has(j))continue;const k=La(w);i.set(k,((y=i.get(k))!=null?y:0)+1);const E=(g=a.get(j))!=null?g:[];E.push(w),a.set(j,E)}}for(const w of a.values())w.sort(Mc);const c=e.filter(w=>{var S;return((S=i.get(La(w)))!=null?S:0)===0}).sort(Mc),u=[],d=new Set;for(;c.length>0;){const w=c.shift(),S=La(w);if(!d.has(S)){d.add(S),u.push(w);for(const j of(x=a.get(S))!=null?x:[]){const k=La(j),E=((b=i.get(k))!=null?b:0)-1;i.set(k,E),E===0&&c.push(j)}c.sort(Mc)}}return u.length===e.length?u:[...u,...e.filter(w=>!d.has(La(w))).sort(Mc)]}function nb(e,n){var i;return tb(((i=n[e])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function sb(e,n,i){return nb(e,i)}function Qh(e){var n;return e.length===0?null:(n=[...e].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function Lw(e,n){var u,d;if(!n||e.length===0)return Qh(e);const i=new Date(n).getTime();if(!Number.isFinite(i))return Qh(e);let a=null,c=null;for(const h of e){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const y=i-p;(!a||y<a.delta)&&(a={delta:y,commit:h})}else{const y=p-i;(!c||y<c.delta)&&(c={delta:y,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Qh(e)}function Qu(e,n,i){var c,u;if(!n)return null;const a=(c=e.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function Ow(e,n,i){var g,x,b,w,S,j,k;const a=sb(e,i,n);if(a.length===0)return null;const c=a.map(E=>Rr(e,E)),u=new Set(c.map(E=>E.id)),d=(x=(g=c[0])==null?void 0:g.parentSha)!=null?x:null,h=(w=(b=c.find(E=>E.kind==="branch-created"))==null?void 0:b.id)!=null?w:null,p=(S=c[0])==null?void 0:S.date,y=c.find(E=>h&&E.id===h||d&&E.id===d?!0:!E.parentSha||!u.has(E.parentSha));return y||((k=(j=Lw(c,p!=null?p:void 0))!=null?j:c[0])!=null?k:null)}function zw(e,n,i){var c,u,d,h,p;if(e.name===n)return null;const a=nb(e.name,i);if(a.length>0){const y=a.map(b=>Rr(e.name,b)),g=new Set(y.map(b=>b.id)),x=(u=(c=y.find(b=>!b.parentSha||!g.has(b.parentSha)))!=null?c:y[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=e.presidesFromSha)!=null?d:e.divergedFromSha)!=null?h:e.createdFromSha)!=null?p:null}function vp(e,n,i={},a={}){var pe,ye,Le,Ze;const u=new Map(e.map(ae=>[ae.name,ae])),d=new Map,h=new Map;for(const ae of e){const B=((pe=i[ae.name])!=null?pe:[]).filter(se=>se.kind!=="branch-created").map(se=>new Date(se.date).getTime()).filter(se=>Number.isFinite(se)).sort((se,H)=>se-H)[0];B!=null&&h.set(ae.name,B)}const p=ae=>{const ie=h.get(ae.name);return ie!=null?ie:ky(ae).start},y=ae=>{var B;const ie=(B=a[ae.name])!=null?B:null;return ie&&ie!==ae.name&&(ie===n||u.has(ie))?ie:ae.name===n?null:ae.parentBranch&&ae.parentBranch!==ae.name&&(ae.parentBranch===n||u.has(ae.parentBranch))?ae.parentBranch:null};for(const ae of e){if(ae.name===n)continue;const ie=(ye=y(ae))!=null?ye:n,B=(Le=d.get(ie))!=null?Le:[];B.push(ae),d.set(ie,B)}for(const ae of d.values())ae.sort((ie,B)=>p(ie)-p(B)||ie.name.localeCompare(B.name));const g=new Map,x=[],b=new Map,w=new Map,S=new Map;for(const ae of Object.values(i))for(const ie of ae){const B=new Date(ie.date).getTime();Number.isFinite(B)&&(ie.fullSha&&S.set(ie.fullSha,B),ie.sha&&S.set(ie.sha,B))}const j=(ae,ie)=>({start:Math.min(ae,ie),end:Math.max(ae,ie)}),k=ae=>{var ee,we;const ie=j(p(ae),ky(ae).end),B=[ie],se=ie.start,H=zw(ae,n,i),_e=H?S.get(H):void 0,ke=new Date((we=(ee=ae.divergedFromDate)!=null?ee:ae.createdDate)!=null?we:ae.lastCommitDate).getTime(),z=Number.isFinite(_e!=null?_e:NaN)?_e:Number.isFinite(ke)?ke:null;if(z==null)return B;const ce=j(z,se);return ce.start!==ce.end&&B.push(ce),B},E=Math.max(1,360*60*1e3*Dw),I=(ae,ie)=>!(ae.start-ie.end>=E||ie.start-ae.end>=E),N=(ae,ie)=>ie.some(B=>{var se;return((se=w.get(ae))!=null?se:[]).some(H=>I(B,H))}),M=(ae,ie=new Set)=>{const B=b.get(ae);if(B!=null)return B;if(ie.has(ae))return 1;ie.add(ae);const se=u.get(ae);if(!se||ae===n)return ie.delete(ae),b.set(ae,0),0;const H=y(se),_e=H?M(H,ie)+1:1;return ie.delete(ae),b.set(ae,_e),_e},X=(ae,ie=new Set)=>{var ge,Pe;const B=g.get(ae);if(B)return B.column;if(ie.has(ae))return 0;ie.add(ae);const se=u.get(ae);if(!se)return ie.delete(ae),0;if(ae===n){const nt={name:ae,column:0,parentName:null};g.set(ae,nt),x.push(nt);const Xe=k(se);return w.set(0,[...(ge=w.get(0))!=null?ge:[],...Xe]),ie.delete(ae),0}const H=y(se),_e=H&&!ie.has(H)?H:null,ke=_e?X(_e,ie):0,z=Math.max(1,M(ae)),ce=Math.max(_e?ke+1:1,z),ee=k(se);let we=ce;for(;N(we,ee);)we+=1;const Re={name:ae,column:we,parentName:_e};return g.set(ae,Re),x.push(Re),w.set(we,[...(Pe=w.get(we))!=null?Pe:[],...ee]),ie.delete(ae),we};X(n);const F=e.filter(ae=>!g.has(ae.name)).sort((ae,ie)=>p(ae)-p(ie)||ae.name.localeCompare(ie.name)),U=F.filter(ae=>y(ae)!=null),K=F.filter(ae=>y(ae)==null);for(const ae of U)X(ae.name);let de=Math.max(0,...x.map(ae=>ae.column))+1+1;for(const ae of K){const ie=k(ae);let B=de;for(;N(B,ie);)B+=1;const se={name:ae.name,column:B,parentName:null};g.set(ae.name,se),x.push(se),w.set(B,[...(Ze=w.get(B))!=null?Ze:[],...ie]),de=B+1}return x.sort((ae,ie)=>ae.column-ie.column||ae.name.localeCompare(ie.name))}function $w(e,n,i,a){const c=new Map(e.map(h=>[h.name,h])),u=h=>{var y;const p=(y=i[h.name])!=null?y:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of e){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const Zu=2.25,na=0,Zh=0,Iw=3600*1e3,Pw=3600*1e3,Xi=e=>{const n=e?new Date(e).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Yo=(e,n)=>!e||!n?!1:e===n||e.startsWith(n)||n.startsWith(e);function jy(e,n,i=new Map){var K,de,pe,ye,Le,Ze,ae,ie,B,se,H,_e,ke,z,ce;if(e.length===0)return new Map;const a=[...e].sort((ee,we)=>{const Re=Xi(ee.date)-Xi(we.date);return Re!==0?Re:ee.id!==we.id?ee.id.localeCompare(we.id):ee.visualId.localeCompare(we.visualId)}),c=new Map;for(const ee of e){const we=(K=ee.parentSha)!=null?K:null;if(we){const Re=(de=c.get(we))!=null?de:new Set;Re.add(ee.id),c.set(we,Re)}for(const Re of(pe=i.get(ee.id))!=null?pe:[]){if(!Re)continue;const ge=(ye=c.get(Re))!=null?ye:new Set;ge.add(ee.id),c.set(Re,ge)}}const u=new Map,d=new Map,h=new Map,p=new Set,y=new Map,g=new Map,x=new Map,b=new Map;for(const ee of e){const we=(Le=y.get(ee.branchName))!=null?Le:new Set;we.add(ee.id),y.set(ee.branchName,we);const Re=(ae=(Ze=n.get(ee.branchName))==null?void 0:Ze.column)!=null?ae:0,ge=(ie=g.get(ee.id))!=null?ie:new Set;ge.add(Re),g.set(ee.id,ge);const Pe=new Set;ee.parentSha&&Pe.add(ee.parentSha),x.set(ee.visualId,Pe);const nt=new Set(Pe);for(const Xe of(B=i.get(ee.id))!=null?B:[])Xe&&nt.add(Xe);b.set(ee.visualId,nt)}const w=new Set(Array.from(g.keys())),S=Array.from(w),j=new Map,k=ee=>{const we=[];for(const Re of S)Yo(Re,ee)&&we.push(Re);return we},E=new Map;for(const ee of S)E.set(ee,new Set);for(const ee of e){const we=k(ee.id);if(we.length===0)continue;const Re=(se=b.get(ee.visualId))!=null?se:new Set,ge=new Set;for(const Pe of Re)for(const nt of k(Pe))ge.add(nt);for(const Pe of we){const nt=(H=E.get(Pe))!=null?H:new Set;for(const Xe of ge)nt.add(Xe);E.set(Pe,nt)}}const I=new Map,N=(ee,we=new Set)=>{var nt;const Re=I.get(ee);if(Re)return Re;if(we.has(ee))return new Set;we.add(ee);const ge=(nt=E.get(ee))!=null?nt:new Set,Pe=new Set;for(const Xe of ge){Pe.add(Xe);for(const yt of N(Xe,we))Pe.add(yt)}return we.delete(ee),I.set(ee,Pe),Pe},M=(ee,we)=>{if(Yo(ee,we))return!0;const Re=k(ee),ge=k(we);for(const Pe of Re){const nt=N(Pe);for(const Xe of ge)if(nt.has(Xe))return!0}for(const Pe of ge){const nt=N(Pe);for(const Xe of Re)if(nt.has(Xe))return!0}return!1};let X=1;const F=(ee,we)=>{var ft,Ee,xt,Ye,bt,vt,At,zt,dt;const Re=(Ee=(ft=n.get(ee.branchName))==null?void 0:ft.column)!=null?Ee:0,ge=(xt=y.get(ee.branchName))!=null?xt:new Set,nt=!(!!ee.parentSha&&ge.has(ee.parentSha))&&ee.parentSha?ee.parentSha:null,Xe=Array.from(we).flatMap(V=>k(V).flatMap(J=>{var Se;return(Se=j.get(J))!=null?Se:[]})),yt=(ee.kind==="branch-created"||ee.kind==="stash")&&Xe.length>0?Math.max(...Xe)+1:null,Tt=Xe.length>0?Math.max(...Xe)+1:1,kt=(Ye=c.get(ee.id))!=null?Ye:new Set,Ot=Array.from(kt).flatMap(V=>{var J;return Array.from((J=g.get(V))!=null?J:[])}).some(V=>V!==Re),_t=new Date(ee.date).getTime(),tn=Math.max(Tt,1);let nn=null;for(let V=tn;V<X;V+=1){const J=(bt=d.get(V))!=null?bt:[];if(J.length===0||Ot||p.has(V))continue;const Se=(vt=b.get(ee.visualId))!=null?vt:new Set;if(!(J.some($e=>M(ee.id,$e.sha)?!0:Array.from(Se).some(st=>Yo(st,$e.sha)))||J.some($e=>$e.column===Re)||!Number.isFinite(_t)||!J.every($e=>{if(!Number.isFinite($e.time))return!1;const st=!!nt&&!!$e.branchEntryParentSha&&nt===$e.branchEntryParentSha?Pw:Iw;return Math.abs($e.time-_t)<=st}))){nn=V;break}}yt!=null&&(nn=yt),nn==null&&(nn=Math.max(Tt,X)),u.set(ee.visualId,nn),nn>=X&&(X=nn+1);const Q=(At=d.get(nn))!=null?At:[];Q.push({visualId:ee.visualId,sha:ee.id,column:Re,time:_t,branchEntryParentSha:nt}),d.set(nn,Q),Ot&&p.add(nn);for(const V of we){const J=(zt=h.get(V))!=null?zt:[];J.push(nn),h.set(V,J)}const Oe=(dt=j.get(ee.id))!=null?dt:[];Oe.push(nn),j.set(ee.id,Oe)};for(const ee of a){const we=(_e=x.get(ee.visualId))!=null?_e:new Set;F(ee,we)}const U=Math.max(1,a.length*2);for(let ee=0;ee<U;ee+=1){let we=!1;for(const Re of a){const ge=(ke=x.get(Re.visualId))!=null?ke:new Set;if(ge.size===0)continue;const Pe=(z=u.get(Re.visualId))!=null?z:1;let nt=1;for(const Xe of ge){const yt=k(Xe).flatMap(Tt=>{var kt;return(kt=j.get(Tt))!=null?kt:[]});yt.length>0&&(nt=Math.max(nt,Math.max(...yt)+1))}if(Pe<nt){u.set(Re.visualId,nt);const Xe=(ce=j.get(Re.id))!=null?ce:[];Xe.length===0?j.set(Re.id,[nt]):j.set(Re.id,[...Xe.slice(0,-1),nt]),we=!0}}if(!we)break}return u}function wp(e){var Fo,Do,Wt,Si,xs,zo,Oi,Qo,Ms,zi,Ds,Un,_o,Zo,$s,$o,_n,Is,Zs,Jo,Ls,Ci,ei,$i,ro,go,Ss,Vn,Pn,yo,xo,Js,On,Ps,zn,Hs,ti,ni,Ii,di,fi,bo,Ro,Zi,ki,hi,It,Xo,Bo,vo,wo,So,si,ji,Yn;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,unpushedCommitShasByBranch:d={},defaultBranch:h,branchCommitPreviews:p,branchParentByName:y={},branchUniqueAheadCounts:g,manuallyOpenedClumps:x,manuallyClosedClumps:b,isDebugOpen:w,gridSearchQuery:S,gridFocusSha:j,checkedOutRef:k,orientation:E="horizontal",nodePositionOverrides:I={}}=e,N=E==="horizontal",M=new Map(i.map(C=>[C.name,C])),X=new Map(n.map(C=>[C.name,C])),F=Bw([...a.map(C=>{var W,fe,Ae,De;return{id:C.fullSha,branchName:h,message:(W=C.prTitle)!=null?W:C.sha,author:"",date:C.date,parentSha:(Ae=(fe=C.parentShas)==null?void 0:fe[0])!=null?Ae:null,parentShas:(De=C.parentShas)!=null?De:[]}}),...((Fo=p[h])!=null?Fo:[]).map(C=>Rr(h,C)),...c.map(C=>Rr(C.branch||"",C)),...u.map(C=>Rr(C.branch||"",C))]),U=new Map,K=new Map;for(const C of i){if(C.name===h)continue;const W=sb(C.name,g,p);K.set(C.name,W);const fe=tb(W.map(Yt=>Rr(C.name,Yt)));if(fe.length>0){U.set(C.name,fe);continue}const Ae=(Si=(Wt=(Do=C.presidesFromSha)!=null?Do:C.divergedFromSha)!=null?Wt:C.createdFromSha)!=null?Si:null;if(!Ae)continue;const De=(xs=c.find(Yt=>Yo(Yt.fullSha,Ae)||Yo(Yt.sha,Ae)))==null?void 0:xs.date,rt=De?null:(zo=Object.values(p).flat().find(Yt=>Yo(Yt.fullSha,Ae)||Yo(Yt.sha,Ae)))==null?void 0:zo.date,Kt={id:`BRANCH_HEAD:${C.name}:${Ae}`,branchName:C.name,message:`Branch ${C.name}`,author:C.lastCommitAuthor,date:(Ms=(Qo=(Oi=De!=null?De:rt)!=null?Oi:C.createdDate)!=null?Qo:C.divergedFromDate)!=null?Ms:C.lastCommitDate,parentSha:Ae,clusterKey:null,childShas:[],kind:"branch-created"};U.set(C.name,[Kt])}const de=new Set(F.map(C=>C.id)),pe=(zi=[...F].sort((C,W)=>Xi(C.date)-Xi(W.date)||C.id.localeCompare(W.id))[0])!=null?zi:null,ye=new Map(Array.from(U.entries()).map(([C,W])=>[C,new Set(W.map(fe=>fe.id))])),Le=new Map;for(const C of i){if(C.name===h)continue;const W=Ow(C.name,p,g);if(W){Le.set(C.name,W);continue}const fe=(Ds=U.get(C.name))==null?void 0:Ds[0];if(fe){const Ae=(Zo=(_o=(Un=C.presidesFromSha)!=null?Un:C.divergedFromSha)!=null?_o:C.createdFromSha)!=null?Zo:null;Le.set(C.name,{...fe,parentSha:Ae})}}const Ze=new Map;for(const[C,W]of U.entries()){const fe=W.find(Ae=>Ae.kind!=="branch-created");fe&&Ze.set(C,fe)}const ae=new Map;for(const[C,W]of U.entries()){const fe=W.filter(rt=>rt.kind!=="branch-created"),De=($s=(fe.length>0?fe:W)[0])!=null?$s:null;De&&ae.set(C,De)}const ie=new Map;for(const C of i){if(C.name===h)continue;const W=($o=ae.get(C.name))!=null?$o:null,fe=(Is=(_n=Le.get(C.name))==null?void 0:_n.parentSha)!=null?Is:null,Ae=(Ls=(Jo=(Zs=C.presidesFromSha)!=null?Zs:C.divergedFromSha)!=null?Jo:C.createdFromSha)!=null?Ls:null,De=(Ci=W==null?void 0:W.parentSha)!=null?Ci:null,rt=(ei=De!=null?De:fe)!=null?ei:Ae;rt&&ie.set(C.name,rt)}const B=C=>{var rt,Kt,Yt,cn,Tn,Dn,gn,os;const W=(rt=y[C.name])!=null?rt:null;if(!(W&&W!==h&&W!==C.name&&M.has(W)))return W!=null?W:"";const Ae=(cn=(Yt=(Kt=ie.get(C.name))!=null?Kt:C.presidesFromSha)!=null?Yt:C.divergedFromSha)!=null?cn:C.createdFromSha;if(Ae&&((Tn=ye.get(W))!=null?Tn:new Set).has(Ae))return W;const De=(gn=(Dn=Le.get(C.name))==null?void 0:Dn.parentSha)!=null?gn:null;return De&&((os=ye.get(W))!=null?os:new Set).has(De),W},se=C=>{var De,rt,Kt,Yt,cn,Tn,Dn,gn;const W=Le.get(C.name),fe=(cn=(Yt=(Kt=(rt=(De=ie.get(C.name))!=null?De:W==null?void 0:W.parentSha)!=null?rt:C.presidesFromSha)!=null?Kt:C.divergedFromSha)!=null?Yt:C.createdFromSha)!=null?cn:null;if(!C.parentBranch&&!fe||!fe)return null;if(B(C)===h){if(de.has(fe))return fe;const os=(Tn=W==null?void 0:W.parentSha)!=null?Tn:null;return os&&de.has(os)?os:(gn=(Dn=pe==null?void 0:pe.id)!=null?Dn:os)!=null?gn:fe}return de.has(fe),fe},H=C=>se(C),_e=new Map;for(const C of[...c,...u]){const W={...Rr(C.branch||"",C),visualId:`${C.branch||""}:${C.fullSha}`};_e.set(C.fullSha,W)}const ke=new Map(_e),z=C=>{ke.has(C.id)||ke.set(C.id,C)},ce=new Map(Object.entries(d).map(([C,W])=>[C,new Set(W)])),ee=new Map(Array.from(U.entries()).map(([C,W])=>[C,new Set(W.map(fe=>fe.id))])),we=new Set;for(const C of ee.values())for(const W of C)we.add(W);for(const C of F)we.has(C.id)||z({...C,visualId:`${C.branchName}:${C.id}`});for(const[C,W]of U.entries())for(const fe of W)z({...fe,visualId:`${C}:${fe.id}`});const ge=[...Array.from(ke.values()).map(C=>({...C,visualId:`${C.branchName}:${C.id}`}))].sort((C,W)=>Xi(C.date)-Xi(W.date)||C.id.localeCompare(W.id)),Pe=new Map;for(const C of ge){const W=($i=Pe.get(C.branchName))!=null?$i:new Set;W.add(C.id),Pe.set(C.branchName,W)}const nt=(C,W)=>{const fe=Pe.get(C);if(!fe||fe.size===0)return!1;for(const Ae of fe)if(Yo(Ae,W))return!0;return!1},Xe=(C,W)=>{const fe=Array.from(Pe.entries()).filter(([Ae])=>Ae!==W).filter(([,Ae])=>Array.from(Ae).some(De=>Yo(De,C))).map(([Ae])=>Ae);return fe.length>0?fe.sort()[0]:C.slice(0,7)},yt=[],Tt=new Map,kt=new Map;for(const C of a){const W=C.fullSha,fe=C.targetBranch,Ae=C.targetCommitSha;if(!W||!fe||!Ae||!nt(fe,Ae))continue;const De=((ro=C.parentShas)!=null?ro:[]).slice(1).filter(Kt=>!!Kt&&!Yo(Kt,W));if(De.length===0)continue;const rt=(go=kt.get(W))!=null?go:new Set;for(const Kt of De){rt.add(Kt);const Yt=Xe(Kt,fe);yt.push({sourceCommitSha:Kt,sourceBranchName:Yt,mergeCommitSha:W,targetCommitSha:Ae,targetBranchName:fe});const cn=(Ss=Tt.get(Yt))!=null?Ss:new Map,Tn=(Vn=cn.get(Kt))!=null?Vn:new Set;Tn.add(fe),cn.set(Kt,Tn),Tt.set(Yt,cn)}kt.set(W,rt)}const ut=new Map;for(const C of i){if(C.name===h)continue;const W=se(C);W&&ut.set(C.name,W)}const Ot=new Map;for(const C of ge){const W=kt.get(C.id);if(W&&W.size>0){const De=(Pn=Ot.get(C.id))!=null?Pn:new Set;for(const rt of W)De.add(rt);Ot.set(C.id,De)}if(C.branchName===h)continue;const fe=ut.get(C.branchName);if(!fe||fe===C.id)continue;const Ae=(yo=Ot.get(C.id))!=null?yo:new Set;Ae.add(fe),Ot.set(C.id,Ae)}const _t=new Map,tn=new Map;for(const C of ge){if(tn.set(C.id,C),C.parentSha){const W=(xo=_t.get(C.parentSha))!=null?xo:new Set;W.add(C.id),_t.set(C.parentSha,W)}for(const W of(Js=Ot.get(C.id))!=null?Js:[]){if(!W)continue;const fe=(On=_t.get(W))!=null?On:new Set;fe.add(C.id),_t.set(W,fe)}}const nn=new Map;for(const[C,W]of _t.entries())nn.set(C,Array.from(W));const Q=new Set(["branch-created","stash"]),Oe=new Set,ft=C=>{if(!C)return null;const W=ge.find(fe=>Yo(fe.id,C)||Yo(fe.visualId.split(":").slice(1).join(":"),C));return W!=null?W:null};for(const C of ge){if(C.parentSha){const fe=ft(C.parentSha),Ae=!!fe&&Oe.has(fe.visualId);fe&&(C.kind==="stash"||C.kind==="branch-created"||Ae)&&Oe.add(fe.visualId)}const W=(Ps=_t.get(C.id))!=null?Ps:new Set;(W.size>1||Array.from(W).map(fe=>tn.get(fe)).some(fe=>fe!=null&&fe.kind!=null&&Q.has(fe.kind)))&&Oe.add(C.visualId)}const Ee=ge.map(C=>{var W,fe;return{...C,childShas:(fe=(W=nn.get(C.id))!=null?W:C.childShas)!=null?fe:[]}}),xt=jy(Ee,X,Ot),Ye=new Map;for(const C of Ee){const W=(zn=Ye.get(C.branchName))!=null?zn:[];W.push(C),Ye.set(C.branchName,W)}const bt=new Map,vt=new Map,At=new Map,zt=new Map,dt=new Map,V=(C,W)=>{var Tn,Dn,gn,os,eo;if(W.length===0)return[];const fe=[...W].sort((en,R)=>{var te,re;const L=(te=xt.get(en.visualId))!=null?te:Number.MAX_SAFE_INTEGER,$=(re=xt.get(R.visualId))!=null?re:Number.MAX_SAFE_INTEGER;return L!==$?L-$:Xi(en.date)-Xi(R.date)||en.id.localeCompare(R.id)}),Ae=new Map;let De=null,rt=0;const Kt=en=>{if(en.kind==="uncommitted")return"uncommitted";if(en.kind==="stash")return"stash";if(en.kind==="branch-created")return"branch-created";const R=ce.get(en.branchName);return R!=null&&R.has(en.id)?"unpushed":"pushed"};let Yt=null;for(const en of fe){const R=en.kind==="stash"||en.kind==="branch-created",L=Oe.has(en.visualId);if(R)continue;const $=Kt(en);(!De||Yt!=null&&Yt!==$)&&(rt+=1,De=`cluster:${C}:segment:${rt}`);const te=(Tn=Ae.get(De))!=null?Tn:[];te.push(en),Ae.set(De,te),L&&(De=null),Yt=$}const cn=[];for(const[en,R]of Ae.entries()){if(R.length===0)continue;const $=[...R].sort((Be,Ke)=>{var kn,an;const ht=(kn=xt.get(Be.visualId))!=null?kn:Number.MIN_SAFE_INTEGER,Ht=(an=xt.get(Ke.visualId))!=null?an:Number.MIN_SAFE_INTEGER;return ht!==Ht?Ht-ht:Xi(Ke.date)-Xi(Be.date)||Ke.id.localeCompare(Be.id)})[0].visualId,te={branchName:C,key:en,commitIds:R.map(Be=>Be.visualId),leadId:$,count:R.length};cn.push(te);const re=(Dn=dt.get(en))!=null?Dn:0;if(!zt.has(en))zt.set(en,$);else{const Be=zt.get(en),Ke=tn.get(Be.split(":").slice(1).join(":"));if(Ke){const ht=(gn=xt.get(Ke.visualId))!=null?gn:Number.MIN_SAFE_INTEGER;((os=xt.get($))!=null?os:Number.MIN_SAFE_INTEGER)>ht&&zt.set(en,$)}}dt.set(en,Math.max(re,R.length));for(const Be of te.commitIds){vt.set(Be,en);const Ke=Be.split(":").slice(1).join(":"),ht=(eo=At.get(Ke))!=null?eo:[];ht.includes(en)||ht.push(en),At.set(Ke,ht)}}return cn};for(const[C,W]of Ye.entries())bt.set(C,V(C,W));const J=new Map;for(const C of Ee)J.set(C.id,C);const Se=C=>{if(!C)return"none";const W=Array.from(J.values()).find(fe=>Yo(fe.id,C)||Yo(fe.id.slice(0,7),C)||Yo(C,fe.id));return W?`${W.id.slice(0,7)} ${W.branchName}`:C.slice(0,7)},Ne=w?["Lane rows (expected):",...[...n].sort((C,W)=>C.column-W.column||C.name.localeCompare(W.name)).map(C=>{var W;return`  row=${C.column} branch=${C.name} parent=${(W=C.parentName)!=null?W:"none"}`}),"",...i.flatMap(C=>{var Kt,Yt,cn,Tn,Dn,gn,os,eo;const W=(Kt=p[C.name])!=null?Kt:[],fe=[...(Yt=K.get(C.name))!=null?Yt:[]].reverse(),Ae=new Set(((cn=U.get(C.name))!=null?cn:[]).map(en=>en.id)),De=(Dn=(Tn=fe.find(en=>!en.parentSha||!fe.some(R=>{var L;return Yo(R.fullSha,(L=en.parentSha)!=null?L:"")})))!=null?Tn:fe[0])!=null?Dn:null,rt=(os=(gn=De==null?void 0:De.parentSha)!=null?gn:ie.get(C.name))!=null?os:null;return[`Branch ${C.name}`,`  ahead=${(eo=g[C.name])!=null?eo:0} previews=${fe.length} rendered=${Ae.size}`,`  db parent commit=${Se(rt)}`,`  db child commit=${De?`${De.fullSha.slice(0,7)} ${C.name}`:"none"}`,...fe.map(en=>{const R=Ae.has(en.fullSha)?"visible":"hidden",L=Ae.has(en.fullSha)?"kept by render set":"dropped by render set";return`  ${R} ${en.fullSha.slice(0,7)} ${en.message} [${L}]`}),W.length===0?"  no preview data":null].filter(en=>en!=null)})]:[],at=w?Array.from(U.entries()).map(([C,W])=>[`Branch debug ${C}`,...W.map(fe=>`  ${fe.id.slice(0,7)} ${fe.message}`)].join(`
`)):[],Je=xt,$e=zm/Zu,xe=20/Zu,st=N?Xn+$e+xe:Ku+$e+xe,Fe=N?Ku+$e+xe:pl,ot=Math.max(0,...Ee.map(C=>{var W;return(W=Je.get(C.visualId))!=null?W:1})),ze=Ee.map(C=>{var De,rt;const W=X.get(C.branchName),fe=(De=Je.get(C.visualId))!=null?De:1,Ae=(rt=W==null?void 0:W.column)!=null?rt:0;return N?{commit:C,row:fe,column:Ae,x:Ba+(fe-1)*st,y:Ra+Ae*Fe}:{commit:C,row:fe,column:Ae,x:Ba+Ae*pl,y:Ra+(ot-fe)*st}}),it=C=>{var fe;const W=(fe=I[C.commit.visualId])!=null?fe:I[C.commit.id];return W?{...C,x:W.x,y:W.y}:C},wt=ze.map(it),St=S.trim().toLowerCase(),tt=St?wt.filter(C=>{const W=C.commit.id.toLowerCase(),fe=C.commit.id.slice(0,7).toLowerCase(),Ae=C.commit.message.toLowerCase(),De=C.commit.branchName.toLowerCase();return W.includes(St)||fe.includes(St)||Ae.includes(St)||De.includes(St)}):wt,$t=j&&(Hs=wt.find(C=>C.commit.id===j))!=null?Hs:null,jt=new Set(tt.map(C=>C.commit.id)),gt=(ti=k==null?void 0:k.headSha)!=null?ti:null,mn=(()=>{var W,fe;const C=(W=k==null?void 0:k.branchName)!=null?W:null;return!gt||!C?null:(fe=vt.get(`${C}:${gt}`))!=null?fe:null})(),pt=new Set;for(const[C,W]of dt.entries())W>1&&C!==mn&&pt.add(C);const Ut=[...ge].filter(C=>{var rt;const W=vt.get(C.visualId);if(!W)return!0;const fe=zt.get(W),Ae=(rt=dt.get(W))!=null?rt:1,De=x.has(W)||!pt.has(W)&&!b.has(W);return Ae<=1||De||fe===C.visualId}),bn=jy(Ut,X,Ot),Rt=zm/Zu,Ct=20/Zu,pn=N?Xn+Rt+Ct:Ku+Rt+Ct,ln=N?Ku+Rt+Ct:pl,on=Math.max(0,...ge.map(C=>{var W;return(W=xt.get(C.visualId))!=null?W:1})),Vt=Math.max(0,...Ut.map(C=>{var W;return(W=bn.get(C.visualId))!=null?W:1})),qt=Math.max(0,on-Vt),wn=[...Ut.map(C=>{var De,rt;const W=X.get(C.branchName),fe=(De=bn.get(C.visualId))!=null?De:1,Ae=(rt=W==null?void 0:W.column)!=null?rt:0;return it(N?{commit:C,row:fe,column:Ae,x:Ba+(qt+fe-1)*pn,y:Ra+Ae*ln}:{commit:C,row:fe,column:Ae,x:Ba+Ae*pl,y:Ra+(Vt-fe)*pn})})].sort((C,W)=>C.row!==W.row?C.row-W.row:C.column!==W.column?C.column-W.column:C.commit.visualId.localeCompare(W.commit.visualId)).map(C=>({...C})),mt=new Set;for(const C of wn){let W=C.row,fe=`${C.column}:${W}`;for(;mt.has(fe);)W+=1,fe=`${C.column}:${W}`;C.row=W,mt.add(fe)}const ls=Math.max(0,...wn.map(C=>C.row));for(const C of wn){if(N){C.x=Ba+(qt+C.row-1)*pn,C.y=Ra+C.column*ln;continue}C.x=Ba+C.column*pl,C.y=Ra+(ls-C.row)*pn}const ts=new Map;for(const C of wn){const W=(ni=ts.get(C.commit.id))!=null?ni:[];W.push(C),ts.set(C.commit.id,W)}const Eo=new Map;for(const C of wn){const W=vt.get(C.commit.visualId);if(!W)continue;const fe=Eo.get(W);(!fe||(N?C.x>fe.x:C.y<fe.y))&&Eo.set(W,C)}const cs=(C,W)=>`${C.toFixed(1)} ${W.toFixed(1)}`,To=Math.max(0,...wn.map(C=>C.row)),Oo=Math.max(0,...n.map(C=>C.column)),js=Math.max(0,...wn.map(C=>C.x+Xn)),Bs=Math.max(0,...wn.map(C=>C.y+Tl+Fs)),sn=Math.max(N?Ba*2+Math.max(0,To-1)*pn+Xn+qh+Ct:Ba*2+(Oo+1)*pl,js+Ba),Gn=Math.max(N?Ra*2+Oo*ln+Fs+qh+Ct:Ra*2+Math.max(0,To-1)*pn+Fs+qh+Ct,Bs+Ra),Mn=[],ws=new Map(i.map(C=>{var fe,Ae;const W=new Date((Ae=(fe=C.createdDate)!=null?fe:C.divergedFromDate)!=null?Ae:C.lastCommitDate).getTime();return[C.name,Number.isFinite(W)?W:0]})),ns=C=>{var W;return(W=ws.get(C))!=null?W:0},Jn=[],un=C=>{w&&Jn.push(C)},Os=new Set,po=new Map,Gs=(C,W)=>{var Ae;const fe=(Ae=po.get(C))!=null?Ae:[];fe.includes(W)||fe.push(W),po.set(C,fe)},Ao=new Set,qs=new Set,gs=new Set,zs=(C,W)=>{var De,rt;if(!C)return null;const fe=Qu(ts,C,W);if(fe)return fe;const Ae=(De=vt.get(`${W!=null?W:h}:${C}`))!=null?De:vt.get(C);return Ae&&(rt=Eo.get(Ae))!=null?rt:null},Sn=new Set;for(const C of i){const W=H(C);W&&qs.add(W);const fe=(Ii=ie.get(C.name))!=null?Ii:null;fe&&gs.add(fe)}const Ks=C=>{var De;const W=zs(C.id,C.branchName);if(W)return W;const fe=vt.get(C.visualId);if(!fe)return null;const Ae=zt.get(fe);return Ae&&(De=wn.find(rt=>rt.commit.id===Ae))!=null?De:null},Qi=(C,W)=>C?Qu(ts,C,W):null,Ns=(C,W)=>N?{x:C.x-na,y:C.y+Fs/2,face:"left"}:{x:C.x+Xn/2,y:C.y+Fs+na,face:"bottom"},No=C=>N?{x:C.x-na,y:C.y+Fs/2,face:"left"}:{x:C.x+Xn/2,y:C.y+Fs+na,face:"bottom"},oo=(C,W)=>C.column!==W.column?!0:N?C.commit.branchName!==W.commit.branchName:!1,ys=(C,W,fe)=>{if(!N)return{x:W?C.x+Xn:C.x+Xn/2,y:W?C.y+Fs/2:C.y,face:W?"right":"top"};if(!W)return{x:C.x+Xn+na,y:C.y+Fs/2,face:"right"};if(fe&&fe.column===C.column&&fe.commit.branchName!==C.commit.branchName){if(fe.x>C.x)return{x:C.x+Xn/2,y:C.y+Fs+na,face:"bottom"};if(fe.x<C.x)return{x:C.x+Xn/2,y:C.y-na,face:"top"}}return!fe||fe.column===C.column?{x:C.x+Xn+na,y:C.y+Fs/2,face:"right"}:fe.column>C.column?{x:C.x+Xn/2,y:C.y+Fs+na,face:"bottom"}:{x:C.x+Xn/2,y:C.y-na,face:"top"}},Qs=C=>N?{x:C.x+Xn/2,y:C.y+Fs+na,face:"bottom"}:{x:C.x+Xn,y:C.y+Fs/2,face:"right"},io=(C,W)=>Qu(ts,C,W),Cn=(C,W)=>Qi(C,W),ss=[],us=new Set;for(const C of yt){const W=(di=zs(C.targetCommitSha,C.targetBranchName))!=null?di:null;if(!W){un({id:`merge:${C.mergeCommitSha}:${C.sourceCommitSha}:target`,kind:"merge",parent:C.sourceCommitSha,child:C.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const fe=C.sourceCommitSha,Ae=`merge:${C.mergeCommitSha}:${fe!=null?fe:"unknown"}`;if(!fe||Yo(fe,C.targetCommitSha)){un({id:Ae,kind:"merge",parent:fe!=null?fe:"unknown",child:C.targetCommitSha,rendered:!1,reason:fe?"merged parent equals merge target sha":"missing merged parent sha"});continue}const De=(fi=Qu(ts,fe))!=null?fi:null;if(!De){un({id:Ae,kind:"merge",parent:fe,child:C.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(De.commit.id===W.commit.id){un({id:Ae,kind:"merge",parent:De.commit.id,child:W.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let rt,Kt,Yt;const cn=N?W.x+Xn/2:W.x+Xn-Zh,Tn=N?W.y+Fs+Zh:W.y+Fs/2,Dn=N?"bottom":"right";N?(rt=De.x+Xn+Zh,Kt=De.y+Fs/2,Yt="right"):(rt=De.x+Xn/2,Kt=De.y,Yt="top");const gn=`${rt.toFixed(2)}:${Kt.toFixed(2)}:${cn.toFixed(2)}:${Tn.toFixed(2)}`;if(us.has(gn)){un({id:Ae,kind:"merge",parent:De.commit.id,child:W.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}us.add(gn),ss.push({id:Ae,fromX:rt,fromY:Kt,toX:cn,toY:Tn,fromFace:Yt,toFace:Dn,zIndex:ns(De.commit.branchName)}),un({id:Ae,kind:"merge",parent:De.commit.id,child:W.commit.id,rendered:!0,reason:`merge connector rendered to ${C.targetBranchName}`})}const ds=new Set;for(const C of i){if(C.name===h)continue;const W=Le.get(C.name);if(!W)continue;const fe=B(C),Ae=io((bo=ie.get(C.name))!=null?bo:"",fe),De=(Ro=Ze.get(C.name))!=null?Ro:W,rt=(Zi=Cn(De.id,C.name))!=null?Zi:Ks(De);if(!Ae||!rt||Ae.commit.id===rt.commit.id){const Dn=vt.get(`${C.name}:${W.id}`),gn=vt.get(`${C.name}:${De.id}`),os=!!Dn&&!pt.has(Dn),eo=!!gn&&!pt.has(gn),en=!!Dn&&!x.has(Dn)&&(os?b.has(Dn):!0),R=!!gn&&!x.has(gn)&&(eo?b.has(gn):!0);!Ae&&!en&&Gs((ki=rt==null?void 0:rt.commit.id)!=null?ki:W.id,"Missing parent node"),!rt&&!R&&Gs(W.id,"Missing child node"),un({id:`branch:${(hi=Ae==null?void 0:Ae.commit.id)!=null?hi:"null"}->${(It=rt==null?void 0:rt.commit.id)!=null?It:"null"}`,kind:"branch",parent:(Xo=Ae==null?void 0:Ae.commit.id)!=null?Xo:"null",child:(Bo=rt==null?void 0:rt.commit.id)!=null?Bo:"null",rendered:!1,reason:Ae?rt?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Kt=`branch:${Ae.commit.id}->${rt.commit.id}`;if(Sn.has(Kt)){un({id:Kt,kind:"branch",parent:Ae.commit.id,child:rt.commit.id,rendered:!1,reason:"duplicate connector key"});continue}Sn.add(Kt),Ao.add(Ae.commit.id);const Yt=oo(Ae,rt);Ae.commit.branchName!==rt.commit.branchName&&ds.add(Ae.commit.id);const cn=Qs(Ae),Tn=No(rt);Mn.push({id:Kt,fromX:cn.x,fromY:cn.y,toX:Tn.x,toY:Tn.y,fromFace:cn.face,toFace:Tn.face,zIndex:ns(rt.commit.branchName)}),un({id:Kt,kind:"branch",parent:Ae.commit.id,child:rt.commit.id,rendered:!0,reason:Yt?"branch connector rendered":N?"horizontal connector rendered":"vertical connector rendered"})}for(const C of ge){const W=Ks(C);if(!W)continue;const fe=(vo=C.parentSha)!=null?vo:null;if(!fe)continue;const Ae=(wo=zs(fe,C.branchName))!=null?wo:io(fe,C.branchName);if(!Ae){const cn=(So=vt.get(`${C.branchName}:${fe}`))!=null?So:vt.get(fe),Tn=!!cn&&!pt.has(cn);!!cn&&!x.has(cn)&&(Tn?b.has(cn):!0)||Gs(C.id,"Missing parent node"),un({id:`${C.visualId}->${fe}`,kind:"ancestry",parent:fe,child:C.id,rendered:!1,reason:"missing parent node"});continue}if(W.commit.id===Ae.commit.id){Gs(W.commit.id,"Parent and child resolve to the same node"),un({id:`${Ae.commit.id}->${W.commit.id}`,kind:"ancestry",parent:Ae.commit.id,child:W.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const De=`${C.branchName}:${(si=Ae.commit.visualId)!=null?si:Ae.commit.id}->${W.commit.visualId}`;if(Sn.has(De)){Gs(Ae.commit.id,"Duplicate connector key"),Gs(W.commit.id,"Duplicate connector key"),un({id:De,kind:"ancestry",parent:Ae.commit.id,child:W.commit.id,rendered:!1,reason:"duplicate connector key"});continue}Sn.add(De),Ao.add(Ae.commit.id);const rt=oo(Ae,W),Kt=ys(Ae,rt,W),Yt=Ns(W);Mn.push({id:De,fromX:Kt.x,fromY:Kt.y,toX:Yt.x,toY:Yt.y,fromFace:Kt.face,toFace:Yt.face,zIndex:ns(W.commit.branchName)}),un({id:De,kind:"ancestry",parent:Ae.commit.id,child:W.commit.id,rendered:!0,reason:rt?"ancestry connector rendered":N?"horizontal ancestry rendered":"vertical ancestry rendered"}),Os.add(Ae.commit.id),Os.add(W.commit.id)}const ao=new Map;for(const C of wn){const W=(ji=ao.get(C.commit.branchName))!=null?ji:[];W.push(C),ao.set(C.commit.branchName,W)}for(const[C,W]of ao.entries()){if(W.length<2)continue;const fe=[...W].sort((Ae,De)=>{var rt,Kt,Yt,cn,Tn,Dn,gn,os;return Ae.row!==De.row?Ae.row-De.row:Xi((Kt=(rt=Ae==null?void 0:Ae.commit)==null?void 0:rt.date)!=null?Kt:null)-Xi((cn=(Yt=De==null?void 0:De.commit)==null?void 0:Yt.date)!=null?cn:null)||((Dn=(Tn=Ae==null?void 0:Ae.commit)==null?void 0:Tn.id)!=null?Dn:"").localeCompare((os=(gn=De==null?void 0:De.commit)==null?void 0:gn.id)!=null?os:"")});for(let Ae=1;Ae<fe.length;Ae+=1){const De=fe[Ae-1],rt=fe[Ae];if(De.commit.id===rt.commit.id)continue;const Kt=(Yn=rt.commit.parentSha)!=null?Yn:null;if(Kt&&io(Kt,rt.commit.branchName))continue;const Yt=`chain:${C}:${De.commit.id}->${rt.commit.id}`;if(Sn.has(Yt)){Gs(De.commit.id,"Duplicate branch chain connector"),Gs(rt.commit.id,"Duplicate branch chain connector"),un({id:Yt,kind:"ancestry",parent:De.commit.id,child:rt.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}Sn.add(Yt);const cn=oo(De,rt),Tn=ys(De,cn,rt),Dn=Ns(rt);Mn.push({id:Yt,fromX:Tn.x,fromY:Tn.y,toX:Dn.x,toY:Dn.y,fromFace:Tn.face,toFace:Dn.face,zIndex:ns(rt.commit.branchName)}),un({id:Yt,kind:"ancestry",parent:De.commit.id,child:rt.commit.id,rendered:!0,reason:"branch chain rendered"}),Os.add(De.commit.id),Os.add(rt.commit.id)}}return{branchByName:M,laneByName:X,mainCommits:F,branchCommitsByLane:U,branchPreviewSets:K,allCommits:ge,clustersByBranch:bt,clusterKeyByCommitId:vt,clusterKeyBySha:At,leadByClusterKey:zt,clusterCounts:dt,debugRows:Ne,branchDebugRows:at,nodes:ze,normalizedSearchQuery:St,matchingNodes:tt,matchingNodeIds:jt,focusedNode:$t,checkedOutClusterKey:mn,defaultCollapsedClumps:pt,visibleCommitsList:Ut,renderNodes:wn,visibleNodesBySha:ts,visibleNodeByClusterKey:Eo,pointFormatter:cs,contentWidth:sn,contentHeight:Gn,connectors:Mn,mergeConnectors:ss,connectorDecisions:Jn,nodeWarnings:po,connectorParentShas:Ao,branchStartShas:qs,branchOffNodeShas:gs,crossBranchOutgoingShas:ds,commitIdsWithRenderedAncestry:Os,branchBaseCommitByName:Le,firstBranchCommitByName:ae,mergeDestinations:yt,mergeTargetBranchesBySourceBranchAndCommitSha:Tt}}const Hw=8,Uw=44,My=120,Ey=e=>e==="left"||e==="right"?"h":e==="top"||e==="bottom"?"v":null;function ob(e,n,i,a,c,u){const d=i-e,h=a-n,p=Math.abs(d),y=Math.abs(h),g=Math.hypot(d,h);if(g<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,y)<Hw){const F=d/g,U=h/g,K=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:e+F*K,c1y:n+U*K,c2x:i-F*K,c2y:a-U*K}}if(Math.min(p,y)<Uw){const F=d/g,U=h/g,K=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:e+F*K,c1y:n+U*K,c2x:i-F*K,c2y:a-U*K}}const w=Math.min(160,p*.42),S=Math.min(100,p*.22),j=Math.min(120,y*.32),k=Math.min(160,y*.42),E=Ey(c),I=Ey(u);if(!(E==="v"&&I==="h"||E==="v"&&I==null&&y>=p||E==null&&I==="h"&&y>=p||E==="v"&&I==="v"||E==null&&I==null&&y>p)){const F=i,U=n;return{kind:"elbowH",cx:F,cy:U,s1c1x:e+x*w,s1c1y:n,s1c2x:F-x*S,s1c2y:U,s2c1x:F,s2c1y:U+b*j,s2c2x:i,s2c2y:a-b*k}}const M=e,X=a;return{kind:"elbowV",cx:M,cy:X,s1c1x:e,s1c1y:n+b*k,s1c2x:M,s1c2y:X-b*j,s2c1x:M+x*w,s2c1y:X,s2c2x:i-x*S,s2c2y:a}}function Vw(e,n,i,a,c,u){const d=ob(e,n,i,a,c,u);return d.kind==="line"?[{x:e,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:e,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:e,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:e,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function Ty(e,n,i,a,c,u,d){const h=ob(e,n,i,a,u,d);if(h.kind==="line")return[`M ${c(e,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(e,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const w=Math.max(8,Math.min(My,Math.abs(i-e)*.48,Math.abs(a-n)*.48)),S=i>=e?1:-1,j=a>=n?1:-1,k=h.cx-S*w,E=h.cy+j*w;return[`M ${c(e,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(k-S*w*.5,h.cy)} ${c(k,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,E)}`,`C ${c(h.cx,E+j*w*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(My,Math.abs(i-e)*.48,Math.abs(a-n)*.48)),y=i>=e?1:-1,g=a>=n?1:-1,x=h.cy-g*p,b=h.cx+y*p;return[`M ${c(e,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-g*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+y*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const Sp=2.25,gc=Sp/2,Yw=.45,Ww=.02,aa=Sp,Bd=10,Fw=-100,Ay=0,Xw=.25,Ju=.001,Gw=12,qw=Xn+48;function xn(...e){return e.filter(Boolean).join(" ")}function Ny(e){return Math.max(Yw,Math.min(Sp,e))}function Kw(e,n){if(e===null||e.size!==n.size)return!1;for(const i of e)if(!n.has(i))return!1;return!0}function ib(e,n){return!(n.right<e.left||n.left>e.right||n.bottom<e.top||n.top>e.bottom)}function Qw(e){var u,d,h,p;let n=(d=(u=e[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=e[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const y of e)n=Math.min(n,y.x),i=Math.min(i,y.y),a=Math.max(a,y.x),c=Math.max(c,y.y);return{left:n,top:i,right:a,bottom:c}}function Zw(e,n,i,a,c,u,d){const h=Vw(e,n,i,a,u,d),p=Qw(h);return ib(c,p)}function ab(e,n){return{left:e.x,top:e.y+n,right:e.x+Xn,bottom:e.y+Tl+Fs+4}}function Jw(e,n){const i=qw,a=Math.max(120,Math.ceil(Tl+Fs+4-n+24)),c=new Map;for(const u of e){const d=ab(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),y=Math.floor(d.top/a),g=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let w=y;w<=g;w++){const S=`${b},${w}`;let j=c.get(S);j||(j=new Set,c.set(S,j)),j.add(x)}}return{cellW:i,cellH:a,buckets:c}}function eS(e,n,i,a){const{cellW:c,cellH:u,buckets:d}=e,h=Math.floor(n.left/c),p=Math.floor(n.right/c),y=Math.floor(n.top/u),g=Math.floor(n.bottom/u),x=new Set;for(let w=h;w<=p;w++)for(let S=y;S<=g;S++){const j=d.get(`${w},${S}`);if(j)for(const k of j)x.add(k)}const b=new Set;for(const w of x){const S=i.get(w);if(!S)continue;const j=ab(S,a);ib(n,j)&&b.add(w)}return b}function Dy(e,n,i,a){var d;if(i.zoom<=0||e<=0||n<=0)return null;const c=i.zoom/aa;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(e-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function tS(e,n){return n>0?{left:e.left-n,top:e.top-n,right:e.right+n,bottom:e.bottom+n}:e}function Ry(e,n,i){const a=n/aa;return!Number.isFinite(a)||a<=0?e:tS(e,100/a)}function By(e){return e.replace(/\\/g,"/").replace(/\/+$/,"")}function Li(e,n){return!e||!n?!1:e===n||e.startsWith(n)||n.startsWith(e)}function $m(e,n){if(n){const i=By(n),a=By(e.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!e.isCurrent}function Jh(e,n){return e.pathExists===!1?!1:$m(e,n)}function nS(e){const n=e.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?e:`.../${n.slice(-2).join("/")}`}function sS({compactLabels:e=!1,selectedVisibleCommitShas:n,commitInProgress:i,commitDisabled:a,stashInProgress:c,stashDisabled:u,pushInProgress:d,hasUncommittedChanges:h,createBranchFromNodeInProgress:p,onCommitLocalChanges:y,onStashLocalChanges:g,onPushCurrentBranch:x,onPushAllBranches:b,onPushCommitTargets:w,onMergeRefsIntoBranch:S,selectedPushTargets:j,selectedPushLabel:k,canPushCurrentBranch:E,pushCurrentBranchLabel:I,pushableRemoteBranchCount:N,selectedCommitTargetOption:M,mergeInProgress:X,setMergeTargetCommitSha:F,worktrees:U,currentRepoPath:K,worktreeMenuOpen:de,setWorktreeMenuOpen:pe,onSwitchToWorktree:ye,onRemoveWorktree:Le,removeWorktreeInProgress:Ze,setCommitDialogOpen:ae,setNewBranchDialogOpen:ie,hideMergeControls:B=!1}){var ut,Ot;const se=n.length>0,H=n.length>0&&n.every(_t=>_t==="WORKING_TREE"),[_e,ke]=_.useState(!1),z=_.useRef(null),ce=_.useRef(null),ee="inline-flex h-7 items-center rounded-md border border-border bg-background px-2 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",we=!!y&&h&&!a&&!i&&(!se||H),Re=!!x&&E&&!se&&!d,ge=!!w&&j.length>0&&!d,Pe=!!b&&N>=2&&!se&&!d,nt=!!g&&!u&&!se&&!c,Xe="Push Selected...",yt=we?{label:i?"Committing...":"Commit",iconSrc:"/icon-commit.svg",run:()=>ae(!0),disabled:!we}:Re?{label:d?"Pushing...":I,iconSrc:"/icon-pushBranch.svg",run:()=>void(x==null?void 0:x()),disabled:!Re}:ge?{label:Xe,iconSrc:"/icon-pushSelected.svg",run:()=>void(w==null?void 0:w(j.map(_t=>({branchName:_t.branchName,targetSha:_t.targetSha})))),disabled:!ge}:null,Tt=(_t,tn)=>l.jsx("span",{"aria-hidden":"true",className:xn("inline-block shrink-0 bg-current",tn),style:{WebkitMaskImage:`url(${_t})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${_t})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}});return _.useEffect(()=>{const _t=tn=>{var Q,Oe;const nn=tn.target;nn&&((Q=z.current)!=null&&Q.contains(nn)||(Oe=ce.current)!=null&&Oe.contains(nn)||(ke(!1),pe(!1)))};return window.addEventListener("pointerdown",_t),()=>window.removeEventListener("pointerdown",_t)},[pe]),l.jsx("div",{className:"window-no-drag pointer-events-none z-[60] flex w-full justify-start",children:l.jsxs("div",{className:"pointer-events-auto flex w-fit max-w-full flex-nowrap items-center justify-start gap-[9px]",children:[l.jsxs("div",{ref:z,className:"relative inline-flex h-7 items-stretch rounded-md border border-border bg-background",children:[l.jsx("button",{type:"button",onClick:()=>{yt&&yt.run()},disabled:!yt||yt.disabled,className:xn(ee,"h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-muted"),children:l.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[Tt((ut=yt==null?void 0:yt.iconSrc)!=null?ut:"/icon-commit.svg","h-4.5 w-4.5"),e?null:l.jsx("span",{children:(Ot=yt==null?void 0:yt.label)!=null?Ot:"Commit"})]})}),l.jsx("button",{type:"button",onClick:()=>ke(_t=>!_t),disabled:!yt,"aria-haspopup":"menu","aria-expanded":_e,className:xn(ee,"h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-muted"),title:"More actions",children:l.jsx(Zx,{className:"h-3.5 w-3.5 shrink-0"})}),_e&&yt?l.jsxs("div",{className:"absolute left-[-1px] top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border bg-background p-1",children:[l.jsxs("button",{type:"button",onClick:()=>{ke(!1),ae(!0)},disabled:!we,className:xn(ee,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!we&&"text-foreground opacity-50"),children:[Tt("/icon-commit.svg","mr-1.5 h-4.5 w-4.5"),i?"Committing...":"Commit"]}),l.jsxs("button",{type:"button",onClick:()=>{ke(!1),x==null||x()},disabled:!Re,className:xn(ee,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!Re&&"text-foreground opacity-50"),children:[Tt("/icon-pushBranch.svg","mr-1.5 h-4.5 w-4.5"),d?"Pushing...":I]}),l.jsxs("button",{type:"button",onClick:()=>{ke(!1),w==null||w(j.map(_t=>({branchName:_t.branchName,targetSha:_t.targetSha})))},disabled:!ge,className:xn(ee,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!ge&&"text-foreground opacity-50"),title:k,children:[Tt("/icon-pushSelected.svg","mr-1.5 h-4.5 w-4.5"),Xe]}),l.jsxs("button",{type:"button",onClick:()=>{ke(!1),b==null||b()},disabled:!Pe,className:xn(ee,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!Pe&&"text-foreground opacity-50"),children:[Tt("/icon-pushAll.svg","mr-1.5 h-4.5 w-4.5"),"Push all"]}),l.jsxs("button",{type:"button",onClick:()=>{ke(!1),g==null||g()},disabled:!nt,className:xn(ee,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!nt&&"text-foreground opacity-50"),children:[Tt("/icon-stash.svg","mr-1.5 h-4.5 w-4.5"),c?"Stashing...":"Stash"]})]}):null]}),l.jsx("div",{className:"flex w-fit flex-nowrap items-center gap-[9px]",children:l.jsxs("button",{type:"button",onClick:()=>ie(!0),disabled:p,className:xn(ee,"pointer-events-auto relative z-10 !bg-background !border-border hover:!bg-muted",e?"w-7 justify-center px-0":""),children:[l.jsx(Jx,{className:xn("h-3.5 w-3.5 shrink-0",e?"":"mr-1.5")}),e?null:p?"Creating...":"Branch"]})}),!B&&n.length>1&&M.options.length>0&&M.targetBranch&&S?l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border bg-background px-2 py-1",children:[l.jsx("span",{className:"px-1 text-[11px] font-medium text-foreground",children:"Merge to"}),M.options.map(_t=>{const tn=_t.targetBranch===M.targetBranch;return l.jsx("button",{type:"button",onClick:()=>F(_t.targetSha),className:xn("rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors",tn?"bg-background text-foreground":"text-foreground hover:bg-muted hover:text-foreground"),children:_t.targetBranch},`merge-${_t.targetBranch}`)}),l.jsxs("button",{type:"button",onClick:()=>void S(M.sources,M.targetBranch),disabled:M.sources.length===0||X,className:"rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(eb,{className:"mr-1 inline h-3 w-3 shrink-0 align-text-bottom"}),X?"Merging...":"Confirm"]})]}):null,U.length>0&&(ye||Le)?l.jsxs("div",{ref:ce,className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>pe(_t=>!_t),className:xn(ee,"!bg-background !border-border hover:!bg-muted"),children:[l.jsx(vw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),U.length,e?null:` ${U.length===1?"Worktree":"Worktrees"}`]}),de?l.jsx("div",{className:"absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-md border border-border bg-background p-1",children:U.map(_t=>{var tn;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:_t.path,children:$m(_t,K)?nS(_t.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-foreground",children:[(tn=_t.branchName)!=null?tn:"detached"," • ",_t.headSha.slice(0,7)]})]}),$m(_t,K)?l.jsxs("div",{className:"flex items-center gap-1",children:[ye?l.jsx("button",{type:"button",onClick:()=>{pe(!1),ye(_t.path)},disabled:Ze||_t.pathExists===!1,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,Le?l.jsx("button",{type:"button",onClick:()=>void Le(_t.path,_t.isPrunable),disabled:Ze,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Ze?"...":"Remove"}):null]}):null]},_t.path)})}):null]}):null]})})}function oS({fadeIn:e,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=_.useState(!e);return _.useLayoutEffect(()=>{if(!e){p(!0);return}p(!1);let y=null;const g=requestAnimationFrame(()=>{y=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(g),y!=null&&cancelAnimationFrame(y)}},[e]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:e?"opacity 240ms ease-out":void 0},children:d})}function iS({scrollContainerRef:e,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:y,labelTopPx:g,inverseZoomStyle:x,displayZoom:b,selectedVisibleCommitShas:w,normalizedSearchQuery:S,matchingNodeIds:j,focusedNode:k,renderNodes:E,shouldRenderNode:I,manuallyOpenedClumps:N,manuallyClosedClumps:M,defaultCollapsedClumps:X,leadByClusterKey:F,clusterKeyByCommitId:U,clusterCounts:K,commitIdsWithRenderedAncestry:de,nodeWarnings:pe,connectorParentShas:ye,branchStartShas:Le,branchOffNodeShas:Ze,crossBranchOutgoingShas:ae,branchBaseCommitByName:ie,branchStartAccentClass:B,connectorParentAccentClass:se,commitCornerRadiusPx:H,lineStrokeWidth:_e,pointFormatter:ke,connectors:z,mergeConnectors:ce,cullConnectorPath:ee,flushCameraReactTick:we,setManuallyOpenedClumps:Re,setManuallyClosedClumps:ge,onCommitCardClick:Pe,unpushedCommitShasSetByBranch:nt,remoteCommitShas:Xe,checkedOutHeadSha:yt}){const[Tt,kt]=_.useState(new Set),ut=_.useRef(null);_.useEffect(()=>{const Q=new Set;K.forEach((Ee,xt)=>{(N.has(xt)||!X.has(xt)&&!M.has(xt))&&Q.add(xt)});const Oe=ut.current;if(Oe==null){ut.current=Q;return}const ft=[];if(Q.forEach(Ee=>{Oe.has(Ee)||ft.push(Ee)}),ft.length>0){kt(xt=>{const Ye=new Set(xt);return ft.forEach(bt=>Ye.add(bt)),Ye});const Ee=window.setTimeout(()=>{kt(xt=>{const Ye=new Set(xt);return ft.forEach(bt=>Ye.delete(bt)),Ye})},260);return ut.current=Q,()=>{window.clearTimeout(Ee)}}ut.current=Q},[K,X,M,N]);const Ot=(Q,Oe)=>{const ft=Oe.zIndex-Q.zIndex;if(ft!==0)return ft;const Ee=Math.min(Q.fromY,Q.toY),xt=Math.min(Oe.fromY,Oe.toY),Ye=Ee-xt;return Ye!==0?Ye:Q.id.localeCompare(Oe.id)},_t=ce.filter(Q=>ee(Q)).sort(Ot),tn=z.filter(Q=>ee(Q)).sort(Ot),nn=E.filter(Q=>I(Q));return l.jsx("div",{ref:e,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},onWheel:h,onMouseDown:p,children:l.jsx("div",{ref:n,className:"relative min-w-full bg-background p-2.5",style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[nn.map(Q=>{var Ut,bn,Rt,Ct,pn,ln;const Oe=U.get(Q.commit.visualId),ft=Oe?N.has(Oe)||!X.has(Oe)&&!M.has(Oe):!1,Ee=Oe?F.get(Oe)===Q.commit.visualId:!1,xt=Oe!=null&&ft&&!Ee&&Tt.has(Oe),Ye=Oe&&(Ut=K.get(Oe))!=null?Ut:1,bt=de.has(Q.commit.id),vt=(bn=pe.get(Q.commit.id))!=null?bn:[],At=vt.length>0&&!bt,zt=w.includes(Q.commit.id),dt=Q.commit.id==="WORKING_TREE"||Q.commit.kind==="uncommitted",V=Q.commit.kind==="stash"||Q.commit.id.startsWith("STASH:"),J=/^STASH:(\d+)$/.exec(Q.commit.id),Se=J?`Stash ${Number.parseInt(J[1],10)+1}`:null,Ne=V?Q.commit.message.trim()&&Q.commit.message.trim()!=="git-visualizer"?Q.commit.message:"Stashed changes":Q.commit.message,at=Q.commit.kind==="branch-created"&&Q.commit.id.startsWith("BRANCH_HEAD:"),Je=dt||((Ct=(Rt=nt.get(Q.commit.branchName))==null?void 0:Rt.has(Q.commit.id))!=null?Ct:!1),$e=Q.commit.isRemote===!0,xe=!dt&&!Je&&($e||Xe.has(Q.commit.id)),Fe=(dt||yt!=null&&Q.commit.id===yt)&&!zt,ot=xe&&!Fe&&!zt,ze=Fe?"text-checked":ot?"text-remote":zt?"text-select":"text-foreground",it=Fe?{color:"var(--checked)"}:ot?{color:"var(--remote)"}:zt?{color:"var(--select)"}:void 0,wt=(pn=it==null?void 0:it.color)!=null?pn:"var(--foreground)",St=(k==null?void 0:k.commit.id)===Q.commit.id?wt:Fe?"var(--checked)":ot?"var(--remote)":zt?"var(--select)":Kh,tt=V||at||dt?1.25/b:_e,$t=V||dt||at,jt=`${12/b} ${6/b}`,gt=tt/2,mn=`M ${gt} ${gt} H ${Xn-gt-H} Q ${Xn-gt} ${gt} ${Xn-gt} ${gt+H} V ${176-gt-H} Q ${Xn-gt} ${176-gt} ${Xn-gt-H} ${176-gt} H ${gt+H} Q ${gt} ${176-gt} ${gt} ${176-gt-H} V ${gt}`,pt=Je&&!Fe&&!zt?{color:"var(--muted-foreground)"}:void 0;return l.jsxs(oS,{fadeIn:xt,dataCommitCard:"true",className:xn("group absolute z-20",S&&!j.has(Q.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",S&&j.has(Q.commit.id)?"scale-[1.01]":"",(k==null?void 0:k.commit.id)===Q.commit.id?"z-30":""),style:{left:Q.x,top:Q.y,width:Xn,height:Tl+Fs+4,overflow:"visible"},onClick:on=>Pe(on,Q),onPointerDown:on=>y(on,Q),children:[$t?l.jsx("svg",{className:"pointer-events-none absolute inset-0 z-20 overflow-visible","aria-hidden":"true",viewBox:`0 0 ${Xn} 176`,preserveAspectRatio:"none",children:l.jsx("path",{d:mn,fill:"none",stroke:St,strokeWidth:tt,strokeDasharray:jt,strokeLinecap:"butt",strokeLinejoin:"round"})}):null,l.jsx("div",{className:"absolute left-0 z-30 w-full",style:{...x,top:`${g}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 bg-transparent pb-0",children:[l.jsx("div",{className:xn("min-w-0 h-4 flex-1 text-sm font-normal leading-none",ze,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:it!=null?it:pt,children:V&&Se?Se:Q.commit.branchName?`${Q.commit.branchName}/${Q.commit.id.slice(0,7)}`:Q.commit.id.slice(0,7)}),Ee&&Ye>1?l.jsx("button",{type:"button",onMouseDown:on=>{on.stopPropagation()},onClick:on=>{if(on.stopPropagation(),on.preventDefault(),!Oe)return;!X.has(Oe)?(Re(qt=>{if(!qt.has(Oe))return qt;const Mt=new Set(qt);return Mt.delete(Oe),Mt}),ge(qt=>{const Mt=new Set(qt);return Mt.has(Oe)?Mt.delete(Oe):Mt.add(Oe),Mt})):(ge(qt=>{if(!qt.has(Oe))return qt;const Mt=new Set(qt);return Mt.delete(Oe),Mt}),Re(qt=>{const Mt=new Set(qt);return Mt.has(Oe)?Mt.delete(Oe):Mt.add(Oe),Mt})),we()},className:xn("inline-flex self-start items-center bg-transparent p-0 text-sm font-normal leading-none",ze),style:it!=null?it:pt,children:ft?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`+${Ye-1}`}):null]})}),l.jsx("div",{className:xn("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",Fe&&!Je&&!V&&!at?"bg-checked-muted":ot&&!V&&!at?"bg-remote-muted":zt&&!Je&&!V&&!at?"bg-select-muted":Je||V||at?"bg-transparent":"bg-muted",$t?"border-solid":"",Ze.has(Q.commit.id)||Le.has(Q.commit.id)||ae.has(Q.commit.id)?B:ye.has(Q.commit.id)?se:((ln=ie.get(Q.commit.branchName))==null?void 0:ln.id)===Q.commit.id?"border-amber-500":At?"border-red-500":"",(S&&j.has(Q.commit.id)&&!d,"")),style:{top:0,borderWidth:`${tt}px`,borderColor:$t?"transparent":St,borderTopLeftRadius:0,borderTopRightRadius:`${H}px`,borderBottomRightRadius:`${H}px`,borderBottomLeftRadius:`${H}px`},children:l.jsxs("div",{className:"relative z-10 flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:xn("max-w-[38rem] select-text text-sm font-normal leading-tight tracking-tight text-foreground",ze,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),"data-selectable-text":"true",style:it!=null?it:pt,children:Ee&&ft?Ne:Ee&&Ye>1?`${Ne} +${Ye-1}`:Ne}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:At?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-foreground dark:bg-red-900/20 dark:text-foreground",title:vt.join(`
`),children:"Broken ancestry"}):null})]}),b>.5&&!V?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:xn("select-text text-sm font-normal",ze),"data-selectable-text":"true",style:it!=null?it:pt,children:["@",Q.commit.author]}),l.jsx("div",{className:xn("select-text text-sm font-normal",ze),"data-selectable-text":"true",style:it!=null?it:pt,children:new Date(Q.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null]})})]},Q.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[_t.map(Q=>{const{fromX:Oe,fromY:ft,toX:Ee,toY:xt}=Q,Ye=Ty(Oe,ft,Ee,xt,ke,Q.fromFace,Q.toFace);return l.jsx("path",{d:Ye,fill:"none",stroke:Kh,strokeWidth:_e,strokeLinecap:"round",strokeLinejoin:"round"},Q.id)}),tn.map(Q=>{const{fromX:Oe,fromY:ft,toX:Ee,toY:xt}=Q,Ye=Ty(Oe,ft,Ee,xt,ke,Q.fromFace,Q.toFace);return l.jsx("path",{d:Ye,fill:"none",stroke:Kh,strokeWidth:_e,strokeLinecap:"round",strokeLinejoin:"round"},Q.id)})]})]})})})}function aS({isOpen:e,onClose:n,visibleBounds:i,renderedNodeCount:a,totalNodeCount:c,renderedMergeConnectorCount:u,totalMergeConnectorCount:d,renderedConnectorCount:h,totalConnectorCount:p,mapGridCullViewportInsetScreenPx:y,debugRows:g,branchDebugRows:x,connectorDecisions:b}){return l.jsx(l.Fragment,{children:e?l.jsxs("div",{className:"absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:n,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${y}px screen/side): ${i?`${(i.right-i.left).toFixed(0)} x ${(i.bottom-i.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${a} / ${c}`,`Rendered merge connectors: ${u} / ${d}`,`Rendered connectors: ${h} / ${p}`,"",...g,...x,"",...b.map(w=>`${w.rendered?"rendered":"skipped"} [${w.kind}] ${w.parent.slice(0,7)} -> ${w.child.slice(0,7)} (${w.reason})`)].join(`
`)})})]}):null})}function rS({commitDialogOpen:e,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:y,deleteInProgress:g,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:w,newBranchCreateMode:S,onNewBranchNameChange:j,onNewBranchCreateModeChange:k,onNewBranchDialogClose:E,onNewBranchConfirm:I,selectedCommitCanCreateBranch:N,currentCheckedOutCommitCanCreateBranch:M,createBranchFromNodeInProgress:X}){return l.jsxs(l.Fragment,{children:[e?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:a,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-background p-4",onClick:F=>F.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:F=>i(F.target.value),onKeyDown:F=>{(F.metaKey||F.ctrlKey)&&F.key==="Enter"&&(F.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(Cw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),u?"Committing...":"Commit"]})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:p,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-background p-4",onClick:F=>F.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(F=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:F},F))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsx("button",{type:"button",onClick:y,disabled:x===0||g,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:g?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:E,children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-background p-4",onClick:F=>F.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>k("from-selected-node"),className:xn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="from-selected-node"?"bg-background text-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>k("new-root"),className:xn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="new-root"?"bg-background text-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:"New root"})]}),S==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:w,onChange:F=>j(F.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:E,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:I,disabled:!w.trim()||X||S==="from-selected-node"&&!N&&!M,className:xn("inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted","disabled:cursor-not-allowed disabled:opacity-50"),children:[l.jsx(Jx,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),X?"Creating...":"Create"]})]})]})}):null]})}const Ly="/icon-GitOrientation.svg";function lS({compactLabels:e=!1,orientation:n,onOrientationChange:i}){const a=n==="horizontal"?"vertical":"horizontal";return l.jsxs("button",{type:"button",onClick:()=>i(a),className:xn("window-no-drag inline-flex h-7 items-center rounded-md border border-border bg-background text-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",e?"w-7 justify-center px-0":"gap-1.5 pl-1.5 pr-2 py-1"),"aria-label":`Rotate view to ${a}`,title:"Rotate View",children:[l.jsx("span",{className:"relative size-4 shrink-0",children:l.jsx("span",{"aria-hidden":"true",className:xn("absolute inset-0 bg-current transition-transform duration-300 ease-in-out",n==="vertical"&&"rotate-[-90deg]"),style:{WebkitMaskImage:`url(${Ly})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${Ly})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}})}),e?null:l.jsx("span",{className:"whitespace-nowrap text-[12px] font-normal leading-none text-foreground transition-colors",children:"Rotate View"})]})}function cS({query:e,onQueryChange:n,resultCount:i,resultIndex:a,onJump:c}){const u=_.useRef(null);return l.jsxs("div",{className:"window-no-drag flex h-7 w-[12rem] shrink-0 items-center gap-2 rounded-full border border-border bg-background pl-1.5 pr-2.5",children:[l.jsx(Nw,{className:"h-3.5 w-3.5 shrink-0 text-foreground"}),l.jsx("input",{ref:u,value:e,onChange:d=>n(d.target.value),onBlur:d=>{const h=d.relatedTarget;h!=null&&h.closest('button, a, input, textarea, select, [contenteditable="true"]')||window.setTimeout(()=>{var p;(p=u.current)==null||p.focus()},0)},onKeyDown:d=>{d.key==="Enter"&&(d.preventDefault(),c(1))},placeholder:"Search",className:"min-w-0 flex-1 bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"}),i!=null&&i>0?l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-[11px] font-medium tabular-nums text-foreground",children:[(a!=null?a:0)+1,"/",i]}),l.jsx("button",{type:"button",onClick:()=>c(-1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-foreground transition-colors hover:text-foreground","aria-label":"Previous search result",title:"Previous result",children:l.jsx(gw,{className:"h-4 w-4 shrink-0"})}),l.jsx("button",{type:"button",onClick:()=>c(1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-foreground transition-colors hover:text-foreground","aria-label":"Next search result",title:"Next result",children:l.jsx(Zx,{className:"h-4 w-4 shrink-0"})})]}):null]})}const uS="git-visualizer:map-grid-camera:";function dS({mapPadHostRef:e,transformLayerRef:n,isEnabled:i=!0,onUserCameraChange:a}){const c=_.useRef({x:0,y:0}),u=_.useRef(gc),d=_.useRef(null),h=_.useRef({panX:0,panY:0,zoom:gc}),p=_.useRef(null),y=_.useRef(gc),g=_.useRef(null),[x,b]=_.useState(!1),[w,S]=_.useState(gc),[j,k]=_.useState(0),E=_.useRef(null),I=_.useRef(0),N=_.useRef(!1),M=_.useCallback(()=>`${uS}${window.location.pathname}`,[]),X=_.useCallback(ie=>{try{window.localStorage.setItem(M(),JSON.stringify(ie))}catch{}},[M]),F=_.useCallback(()=>{const ie=e.current;if(!ie)return null;const B=ie.getBoundingClientRect(),se=getComputedStyle(ie),H=Number.parseFloat(se.borderLeftWidth)||0,_e=Number.parseFloat(se.borderTopWidth)||0,ke=Number.parseFloat(se.paddingLeft)||Bd,z=Number.parseFloat(se.paddingTop)||Bd;return{x:B.left+H+ke,y:B.top+_e+z}},[e]),U=_.useCallback(()=>{E.current!=null&&(window.clearTimeout(E.current),E.current=null),_.startTransition(()=>{k(ie=>ie+1)}),I.current=performance.now()},[]),K=_.useCallback((ie,B,se,H)=>{const _e=h.current,ke={panX:ie,panY:B,zoom:se};h.current=ke;const z=n.current;if(z&&(z.style.transform=`translate3d(${ie}px, ${B}px, 0) scale(${se/aa})`),Math.abs(y.current-se)>Ju&&(y.current=se,S(se)),(H==null?void 0:H.emitTick)===!1||N.current)return;if(Math.abs(se-_e.zoom)>Ju){U();return}const we=performance.now()-I.current;if(we>=Ay){U();return}E.current!=null&&window.clearTimeout(E.current),E.current=window.setTimeout(()=>{E.current=null,U()},Ay-we)},[U,n]),de=_.useRef(null),pe=_.useCallback(()=>{p.current!=null||!de.current||(p.current=window.requestAnimationFrame(de.current))},[]),ye=_.useCallback(()=>{N.current=!0,b(!0),g.current!=null&&window.clearTimeout(g.current),g.current=window.setTimeout(()=>{g.current=null,N.current=!1,b(!1),U(),X(h.current)},90)},[U,X]),Le=_.useCallback((ie,B,se)=>{i&&(c.current={x:ie,y:B},u.current=se,ye(),pe())},[i,ye,pe]);de.current=()=>{p.current=null;const ie=h.current,B=c.current.x,se=c.current.y,H=u.current,_e=d.current,ke=Math.abs(H-ie.zoom)<=Ju?H:ie.zoom+(H-ie.zoom)*Xw,z=_e!=null?_e.anchorX-_e.worldX*(ke/aa):B,ce=_e!=null?_e.anchorY-_e.worldY*(ke/aa):se;_e!=null&&Math.abs(ke-H)<=Ju&&(d.current=null),K(z,ce,ke),z!==B||ce!==se||ke!==H?de.current&&(p.current=window.requestAnimationFrame(de.current)):U()};const Ze=_.useCallback((ie,B,se)=>{if(!i)return;const H=Ny(se),_e=c.current.x,ke=c.current.y,z=u.current,ce=F();if(!ce){Le(_e,ke,H);return}const ee=ie-ce.x,we=B-ce.y,Re=z/aa,ge=H/aa,Pe=(ee-_e)/Re,nt=(we-ke)/Re,Xe=ee-Pe*ge,yt=we-nt*ge;d.current={anchorX:ee,anchorY:we,worldX:Pe,worldY:nt},Le(Xe,yt,H)},[F,i,Le]),ae=_.useCallback(ie=>{if(!i)return;if(ie.preventDefault(),ie.ctrlKey||ie.metaKey){a==null||a();const _e=Math.exp(-ie.deltaY*Ww);Ze(ie.clientX,ie.clientY,u.current*_e);return}a==null||a(),d.current=null;const B=h.current;c.current={x:B.panX,y:B.panY},u.current=B.zoom;const se=B.panX-ie.deltaX,H=B.panY-ie.deltaY;c.current={x:se,y:H},K(se,H,B.zoom)},[K,i,a,Ze]);return _.useLayoutEffect(()=>{if(!i)return;let ie={panX:0,panY:0,zoom:gc};try{const B=window.localStorage.getItem(M());if(B){const se=JSON.parse(B);typeof se.panX=="number"&&Number.isFinite(se.panX)&&typeof se.panY=="number"&&Number.isFinite(se.panY)&&typeof se.zoom=="number"&&Number.isFinite(se.zoom)&&(ie={panX:se.panX,panY:se.panY,zoom:Ny(se.zoom)})}}catch{}return c.current={x:ie.panX,y:ie.panY},u.current=ie.zoom,K(ie.panX,ie.panY,ie.zoom,{emitTick:!1}),()=>{g.current!=null&&window.clearTimeout(g.current),p.current!=null&&window.cancelAnimationFrame(p.current),E.current!=null&&(window.clearTimeout(E.current),E.current=null),X(h.current)}},[K,M,i,X]),{isCameraMoving:x,renderedZoom:w,cameraRenderTick:j,renderedCameraRef:h,interactionIdleTimeoutRef:g,getTransformLayerOriginScreen:F,flushCameraReactTick:U,syncCamera:Le,handleWheel:ae}}function fS(e){const n=Math.min(e.startX,e.currentX),i=Math.min(e.startY,e.currentY),a=Math.abs(e.currentX-e.startX),c=Math.abs(e.currentY-e.startY);return{left:n,top:i,width:a,height:c}}function hS({scrollContainerRef:e,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=_.useRef(null),h=_.useRef(!1),p=_.useRef([]),[y,g]=_.useState(!1),[x,b]=_.useState(null),[w,S]=_.useState([]),[j,k]=_.useState(null),E=_.useCallback(N=>{const M=e.current,X=i();if(!M||!X)return[];const F=M.getBoundingClientRect(),U=n.current.zoom/aa;if(U<=0)return[];const K=[],de=N.left,pe=N.left+N.width,ye=N.top,Le=N.top+N.height;for(const Ze of a){if(!c(Ze))continue;const ae=X.x+n.current.panX+Ze.x*U-F.left,ie=X.y+n.current.panY+Ze.y*U-F.top,B=ae+Xn*U,se=ie+(Tl+Fs)*U;!(B<de||ae>pe||se<ye||ie>Le)&&K.push(Ze.commit.id)}return K},[i,a,n,e,c]),I=_.useCallback(N=>{if(N.button!==0)return;const M=N.target;if(M!=null&&M.closest("[data-commit-card]")||M!=null&&M.closest("button, a, input, textarea, select"))return;const X=e.current;if(!X)return;N.preventDefault();const F=X.getBoundingClientRect(),U=N.clientX-F.left,K=N.clientY-F.top;d.current={startX:U,startY:K,currentX:U,currentY:K,additive:N.metaKey||N.ctrlKey},h.current=!1,p.current=N.metaKey||N.ctrlKey?w:[],g(!0),b({left:U,top:K,width:0,height:0})},[e,w]);return _.useEffect(()=>{const N=X=>{var ye;const F=d.current;if(!F)return;const U=e.current;if(!U)return;const K=U.getBoundingClientRect();F.currentX=X.clientX-K.left,F.currentY=X.clientY-K.top,!h.current&&(Math.abs(F.currentX-F.startX)>2||Math.abs(F.currentY-F.startY)>2)&&(h.current=!0);const de=fS(F);b(de);const pe=E(de);S(F.additive?Array.from(new Set([...p.current,...pe])):Array.from(new Set(pe))),F.additive||k((ye=pe[pe.length-1])!=null?ye:null)},M=()=>{if(d.current){const X=h.current;d.current=null,h.current=!1,g(!1),b(null),X||(S([]),k(null));return}u()};return window.addEventListener("mousemove",N),window.addEventListener("mouseup",M),()=>{window.removeEventListener("mousemove",N),window.removeEventListener("mouseup",M)}},[E,u,e]),{isMarqueeSelecting:y,marqueeRect:x,selectedCommitShas:w,setSelectedCommitShas:S,mergeTargetCommitSha:j,setMergeTargetCommitSha:k,startMarqueeDrag:I}}function mS(){return l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center",children:l.jsx("div",{role:"status","aria-label":"Loading commits",className:"h-5 w-5 rounded-full border-2 border-border border-t-muted-foreground animate-spin"})})}function Oy({branches:e,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:y,staleBranches:g=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:w,mapTopInsetPx:S=0,onMergeRefsIntoBranch:j,mergeInProgress:k=!1,onPushAllBranches:E,onPushCurrentBranch:I,onPushCommitTargets:N,pushInProgress:M=!1,onDeleteSelection:X,deleteInProgress:F=!1,worktrees:U=[],currentRepoPath:K,onRemoveWorktree:de,removeWorktreeInProgress:pe=!1,onSwitchToWorktree:ye,onStashLocalChanges:Le,stashInProgress:Ze=!1,stashDisabled:ae=!1,onCommitLocalChanges:ie,commitInProgress:B=!1,commitDisabled:se=!1,onStageAllChanges:H,stageInProgress:_e=!1,onCreateBranchFromNode:ke,onCreateRootBranch:z,createBranchFromNodeInProgress:ce=!1,isDebugOpen:ee=!1,onDebugClose:we,orientation:Re="horizontal",branchCommitPreviews:ge={},branchParentByName:Pe={},branchUniqueAheadCounts:nt={},gridSearchQuery:Xe="",gridSearchJumpToken:yt=0,gridSearchJumpDirection:Tt=1,gridFocusSha:kt=null,checkedOutRef:ut=null,onGridSearchResultCountChange:Ot,onGridSearchResultIndexChange:_t,onGridSearchFocusChange:tn,onInteractionChange:nn,manuallyOpenedClumps:Q,manuallyClosedClumps:Oe,setManuallyOpenedClumps:ft,setManuallyClosedClumps:Ee,layoutModel:xt,gridHudProps:Ye}){var Ke,ht,Ht,kn,an,Cs,T,D,Y,G,ne,he;const bt=_.useRef(null),vt=_.useRef(null),At=_.useRef(null),zt=_.useRef(null),dt=_.useRef(null),V=_.useRef(void 0),J=_.useRef(void 0),Se=_.useRef(void 0),Ne=_.useRef(0),at=_.useRef(null),[Je,$e]=_.useState(!1),[xe,st]=_.useState(!1),[Fe,ot]=_.useState(""),[ze,it]=_.useState(!1),[wt,St]=_.useState(!1),[tt,$t]=_.useState(""),[jt,gt]=_.useState("from-selected-node"),[mn,pt]=_.useState(()=>new Set),[Ut,bn]=_.useState(()=>new Set),[Rt,Ct]=_.useState({}),pn=_.useRef(!1),ln=_.useRef(null),on=_.useRef(null),Vt=Q!=null?Q:mn,qt=Oe!=null?Oe:Ut,Mt=ft!=null?ft:pt,wn=Ee!=null?Ee:bn,[mt,ls]=_.useState(null),[ts,Eo]=_.useState(null),[cs,To]=_.useState(!1),[Oo,js]=_.useState(!1),Bs=_.useId(),{isCameraMoving:sn,renderedZoom:Gn,cameraRenderTick:Mn,renderedCameraRef:ws,interactionIdleTimeoutRef:ns,getTransformLayerOriginScreen:Jn,flushCameraReactTick:un,syncCamera:Os,handleWheel:po}=dS({mapPadHostRef:At,transformLayerRef:zt}),Ao=_.useMemo(()=>{if(xt)return xt;const P=vp(e,d,ge,Pe);return wp({lanes:P,branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,defaultBranch:d,branchCommitPreviews:ge,branchParentByName:Pe,branchUniqueAheadCounts:nt,manuallyOpenedClumps:Vt,manuallyClosedClumps:qt,isDebugOpen:ee,gridSearchQuery:Xe,gridFocusSha:kt,checkedOutRef:ut!=null?ut:null,orientation:Re,nodePositionOverrides:Rt})},[xt,e,n,i,a,c,d,ge,Pe,nt,Vt,qt,ee,Xe,kt,(Ke=ut==null?void 0:ut.headSha)!=null?Ke:null,(ht=ut==null?void 0:ut.branchName)!=null?ht:null,Re,Rt]),{allCommits:qs,clusterKeyByCommitId:gs,leadByClusterKey:zs,clusterCounts:Sn,matchingNodes:Ks,matchingNodeIds:Qi,normalizedSearchQuery:Ns,focusedNode:No,defaultCollapsedClumps:oo,renderNodes:ys,visibleNodesBySha:Qs,contentWidth:io,contentHeight:Cn,connectors:ss,mergeConnectors:us,connectorDecisions:ds,nodeWarnings:ao,commitIdsWithRenderedAncestry:Fo,connectorParentShas:Do,branchStartShas:Wt,branchOffNodeShas:Si,crossBranchOutgoingShas:xs,branchBaseCommitByName:zo,pointFormatter:Oi}=Ao,Qo=!!Ns,Ms=Gn/aa,zi=_.useMemo(()=>({transform:`scale(${1/Ms})`,transformOrigin:"top left",width:`${100*Ms}%`,height:`${100*Ms}%`}),[Ms]),Ds=-(20/Ms),Un=_.useMemo(()=>{const P=new Map;for(const Z of ys)P.set(Z.commit.visualId,Z);return P},[ys]),_o=_.useMemo(()=>Jw(ys,Ds),[ys,Ds]),Zo=P=>{var Me;const Z=P.commit.id,le=P.commit.visualId;if(Qo&&Qi.has(Z)||(No==null?void 0:No.commit.id)===Z||mt===null)return!0;if(!mt.has(le))return!1;const me=gs.get(le);return me&&((Me=Sn.get(me))!=null?Me:1)>1&&(Vt.has(me)||!oo.has(me)&&!qt.has(me)),!0},$s=1.25/Ms,$o=Gw/Ms,_n="border-border/70",Is="border-select",Zs=_.useMemo(()=>new Map(e.map(P=>[P.name,P])),[e]),Jo=(Ht=ut==null?void 0:ut.hasUncommittedChanges)!=null?Ht:!1;_.useMemo(()=>new Set(e.filter(P=>P.commitsAhead===0&&!P.name.startsWith("*")).map(P=>P.name)),[e]);const Ls=_.useMemo(()=>{var Z,le;const P=new Map;for(const me of ys){const Me=(Z=P.get(me.commit.id))!=null?Z:new Set;Me.add(me.commit.branchName),P.set(me.commit.id,Me)}for(const me of i){const Me=(le=P.get(me.fullSha))!=null?le:new Set;me.branch&&Me.add(me.branch),P.set(me.fullSha,Me)}return P},[ys,i,d]),Ci=_.useMemo(()=>new Map(Object.entries(c).map(([P,Z])=>[P,new Set(Z)])),[c]),ei=_.useMemo(()=>{var me;const P=new Set(i.map(Me=>Me.fullSha)),Z=new Set,le=Me=>{Me&&(Z.add(Me),Z.add(Me.slice(0,7)))};for(const Me of e){if(Me.commitsBehind<=0)continue;const Ge=(me=ge[Me.name])!=null?me:[];for(const ct of Ge)ct.kind==="branch-created"||ct.kind==="uncommitted"||ct.kind==="stash"||P.has(ct.fullSha)||le(ct.fullSha);Me.headSha&&!P.has(Me.headSha)&&le(Me.headSha)}return Z},[e,ge,i]),$i=_.useCallback(()=>{ns.current,un()},[un,ns]),{isMarqueeSelecting:ro,marqueeRect:go,selectedCommitShas:Ss,setSelectedCommitShas:Vn,mergeTargetCommitSha:Pn,setMergeTargetCommitSha:yo,startMarqueeDrag:xo}=hS({scrollContainerRef:bt,renderedCameraRef:ws,getTransformLayerOriginScreen:Jn,renderNodes:ys,shouldRenderNode:Zo,onPointerReleaseNoMarquee:$i}),Js=_.useMemo(()=>new Set(ys.map(P=>P.commit.id)),[ys]),On=_.useMemo(()=>Ss.filter(P=>Js.has(P)),[Ss,Js]),Ps=_.useCallback((P,Z)=>{var Me;if(!Z)return!1;if(((Me=ge[P])!=null?Me:[]).some(Ge=>Li(Ge.fullSha,Z)||Li(Ge.sha,Z)))return!0;const me=Zs.get(P);return!!(me!=null&&me.headSha&&Li(me.headSha,Z))},[ge,Zs]),zn=(kn=ut==null?void 0:ut.branchName)!=null?kn:null,Hs=(an=ut==null?void 0:ut.headSha)!=null?an:null,ti=zn==null,ni=_.useMemo(()=>{if(!kt)return null;const P=ys.filter(Z=>Z.commit.id===kt);return P.length===0?null:P.length===1||!No?P[0]:P.reduce((Z,le)=>{const me=(Z.x-No.x)**2+(Z.y-No.y)**2;return(le.x-No.x)**2+(le.y-No.y)**2<me?le:Z})},[kt,ys,No]),Ii=_.useCallback((P,Z,le)=>{for(const me of U){if(!Jh(me,K))continue;if(me.branchName){if(me.branchName===P&&Li(me.headSha,Z))return me;continue}if(!Li(me.headSha,Z)&&!Li(me.headSha,le))continue;if(me.parentSha&&Ps(P,me.parentSha)||Ps(P,me.headSha))return me;const Me=Zs.get(P);if(Me&&Li(Me.headSha,me.headSha)||P===d&&i.some(Ge=>Li(Ge.fullSha,me.headSha)))return me}return null},[U,K,Ps,Zs,d,i]),di=_.useCallback(P=>{for(const Z of U)if(Jh(Z,K)&&Z.branchName===P)return Z;return null},[U,K]),fi=_.useCallback((P,Z)=>{for(const le of U)if(Jh(le,K)&&(Li(le.headSha,P)||Li(le.headSha,Z)))return le;return null},[U,K]),bo=_.useCallback(P=>{var Z;return Array.from((Z=Ls.get(P))!=null?Z:[])},[Ls]),Ro=_.useMemo(()=>{var Ge,ct,Qe,lt;const P=rn=>!/^stash\b/i.test(rn.trim()),Z=new Map;for(const rn of On){const dn=bo(rn).filter(P);if(dn.length===0)continue;const An=(Ge=dn.find(Xt=>Xt!==d))!=null?Ge:dn[0],Zt=On.filter(Xt=>Xt!==rn).filter(Xt=>!new Set(bo(Xt).filter(P)).has(An));Z.set(An,{targetSha:rn,targetBranch:An,sourceRefs:Zt})}const le=Array.from(Z.values()),me=Pn?le.find(rn=>{var dn;return rn.targetSha===Pn||rn.targetBranch===((dn=bo(Pn)[0])!=null?dn:"")}):null,Me=(ct=me!=null?me:le[le.length-1])!=null?ct:null;return{options:le,selected:Me,targetBranch:(Qe=Me==null?void 0:Me.targetBranch)!=null?Qe:null,sources:(lt=Me==null?void 0:Me.sourceRefs)!=null?lt:[]}},[On,bo,d,Pn]),Zi=_.useMemo(()=>{const P=Z=>!/^stash\b/i.test(Z.trim());return On.some(Z=>{const le=bo(Z);return le.length>0&&le.filter(P).length===0})},[On,bo]),ki=On.length>1&&Ro.options.length>0&&!!Ro.targetBranch&&Ro.sources.length>0&&!Zi&&!!j,[hi,It]=_.useState(!1);_.useEffect(()=>{ki&&It(!1)},[ki,On]);const Xo=_.useMemo(()=>{const P=[...zn===d?[{name:d,headSha:Hs!=null?Hs:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...e].filter(Z=>!Z.name.startsWith("*")&&Z.unpushedCommits>0&&Z.remoteSyncStatus!=="on-github").map(Z=>[Z.name,Z]);return new Map(P)},[e,zn,Hs,d,a.length]),Bo=_.useMemo(()=>{const P=me=>{var Ge;const Me=bo(me).filter(ct=>Xo.has(ct));return Me.length===0?null:Me.length===1?Me[0]:zn&&Me.includes(zn)?zn:(Ge=Me.find(ct=>ct!==d))!=null?Ge:Me[0]},Z=me=>{var Me;return me===d?a.map(Ge=>{var ct,Qe;return{fullSha:Ge.fullSha,sha:Ge.sha,parentSha:(ct=Ge.parentSha)!=null?ct:null,message:Ge.message,author:Ge.author,date:Ge.date,kind:(Qe=Ge.kind)!=null?Qe:"commit"}}):(Me=ge[me])!=null?Me:[]},le=new Map;for(const me of On){const Me=P(me);if(!Me)continue;const Ge=Xo.get(Me);if(!Ge)continue;const ct=Z(Me).slice(0,Ge.unpushedCommits),Qe=ct.findIndex(rn=>rn.fullSha===me);if(Qe===-1)continue;const lt=le.get(Me);(!lt||Qe<lt.targetIndex)&&le.set(Me,{branchName:Me,targetSha:me,targetIndex:Qe,commitCount:ct.length-Qe})}return Array.from(le.values())},[On,bo,Xo,zn,d,a,ge]),vo=_.useMemo(()=>Array.from(new Set(On.map(P=>/^STASH:(\d+)$/.exec(P)).filter(P=>!!P).map(P=>parseInt(P[1],10)))).sort((P,Z)=>P-Z),[On]),wo=On.includes("WORKING_TREE"),So=(wo?1:0)+vo.length,si=[...wo?["Uncommitted changes"]:[],...vo.map(P=>`Stash ${P+1}`)],ji=Xo.size,Yn=!ti&&!!zn&&Xo.has(zn),C=zn?`Push ${zn}`:"Push current branch",W=Bo.length===1?Bo[0].commitCount>1?`Push ${Bo[0].commitCount} commits on ${Bo[0].branchName}`:`Push ${Bo[0].targetSha.slice(0,7)} on ${Bo[0].branchName}`:`Push ${Bo.length} selected ranges`,fe=_.useCallback(P=>{const Z=P.target;Z!=null&&Z.closest('.window-no-drag, input, textarea, select, button, [contenteditable="true"]')||bp().startDragging()},[]);_.useEffect(()=>{const P=sn||ro;dt.current!==P&&(dt.current=P,nn==null||nn(P))},[sn,ro,nn]),_.useEffect(()=>{const P=Ns?Ks.length:null;V.current!==P&&(V.current=P,Ot==null||Ot(P))},[Ks.length,Ns,Ot]),_.useEffect(()=>{const P=Ns&&kt?(()=>{const Z=Ks.findIndex(le=>le.commit.id===kt);return Z>=0?Z:null})():null;J.current!==P&&(J.current=P,_t==null||_t(P))},[kt,Ks,Ns,_t]);const Ae=_.useMemo(()=>{var lt,rn,dn,An,Zt,Xt;if(!Ns)return null;const P=Ns,Z=e.map(Nt=>Nt.name),le=Z.find(Nt=>Nt.toLowerCase()===P),me=le!=null?le:Z.find(Nt=>Nt.toLowerCase().startsWith(P)),Ge=me!=null?me:Z.find(Nt=>Nt.toLowerCase().includes(P));if(!Ge)return null;const ct=(lt=e.find(Nt=>Nt.name===Ge))!=null?lt:null;if(ct!=null&&ct.headSha)return ct.headSha;const Qe=(rn=ge[Ge])!=null?rn:[];return Qe.length>0?(An=(dn=Qe[0])==null?void 0:dn.fullSha)!=null?An:null:Ge===d&&(Xt=(Zt=i[0])==null?void 0:Zt.fullSha)!=null?Xt:null},[Ns,e,ge,d,i]);_.useEffect(()=>{var me,Me,Ge;if(!Ns){if(Ne.current=yt,Se.current===null)return;Se.current=null,tn==null||tn(null);return}if(yt<=0||Ne.current===yt)return;Ne.current=yt;let P;const Z=kt?Ks.findIndex(ct=>ct.commit.id===kt):-1,le=Ks.length>0?Z<0?0:(Z+Tt+Ks.length)%Ks.length:-1;P=(Ge=(Me=(me=Ks[le])==null?void 0:me.commit.id)!=null?Me:Ae)!=null?Ge:null,Se.current!==P&&(Se.current=P,tn==null||tn(P))},[Ks,Ns,tn,Ae,yt,Tt]),_.useLayoutEffect(()=>{if(!kt)return;const P=`${kt}:${yt}`;if(at.current===P)return;const Z=bt.current,le=ni;if(!Z||!le)return;const me=Jn();if(!me)return;const Me=Z.getBoundingClientRect(),Ge=ws.current.zoom,ct=Ge/aa,Qe=le.x+Xn/2,lt=le.y+Tl+Fs/2,rn=Me.left+Me.width/2,dn=Me.top+Me.height/2;Os(rn-me.x-Qe*ct,dn-me.y-lt*ct,Ge),at.current=P},[kt,yt,ni,Jn,Os,ws]);const De=(D=(T=ts==null?void 0:ts.width)!=null?T:(Cs=bt.current)==null?void 0:Cs.clientWidth)!=null?D:0,rt=(ne=(G=ts==null?void 0:ts.height)!=null?G:(Y=bt.current)==null?void 0:Y.clientHeight)!=null?ne:0,Kt=De>0&&rt>0?Dy(De,rt,ws.current,{innerPaddingPx:Bd}):null,Yt=Kt!=null?Ry(Kt,ws.current.zoom):null,cn=P=>{if(!Yt)return!0;const{fromX:Z,fromY:le,toX:me,toY:Me}=P;return Zw(Z,le,me,Me,Yt,P.fromFace,P.toFace)};_.useLayoutEffect(()=>{var ct;const P=bt.current;if(!P||P.clientWidth<=0||P.clientHeight<=0)return;const Z=P.clientWidth,le=P.clientHeight;Eo(Qe=>(Qe==null?void 0:Qe.width)===Z&&(Qe==null?void 0:Qe.height)===le?Qe:{width:Z,height:le});const me=Dy(Z,le,ws.current,{innerPaddingPx:Bd});if(!me){ls(Qe=>Qe===null?Qe:null);return}const Me=Ry(me,ws.current.zoom),Ge=eS(_o,Me,Un,Ds);for(const Qe of ys){const lt=gs.get(Qe.commit.visualId);if(!lt||((ct=Sn.get(lt))!=null?ct:1)<=1)continue;(Vt.has(lt)||!oo.has(lt)&&!qt.has(lt))&&Ge.add(Qe.commit.visualId)}ls(Qe=>Kw(Qe,Ge)?Qe:Ge)},[Gn,yt,kt,Mn,Vt,qt,oo,gs,Sn,ys,ts,_o,Un,Ds]),_.useLayoutEffect(()=>{const P=bt.current;if(!P)return;const Z=()=>{const me=P.clientWidth,Me=P.clientHeight;me<=0||Me<=0||Eo(Ge=>(Ge==null?void 0:Ge.width)===me&&(Ge==null?void 0:Ge.height)===Me?Ge:{width:me,height:Me})};Z();const le=new ResizeObserver(Z);return le.observe(P),()=>le.disconnect()},[qs.length]);const Tn=ys.filter(P=>Zo(P)).length,Dn=us.filter(P=>cn(P)).length,gn=ss.filter(P=>cn(P)).length,os=_.useCallback((P,Z)=>{if(pn.current){P.preventDefault(),P.stopPropagation();return}P.stopPropagation();const le=Z.commit.id;if(P.shiftKey?(Vn(ct=>ct.includes(le)?ct.filter(Qe=>Qe!==le):[...ct,le]),yo(le)):(Vn(ct=>ct.includes(le)?[]:[le]),yo(ct=>ct===le?null:le)),!(P.metaKey||P.ctrlKey||P.detail>=2)||le==="WORKING_TREE")return;const Me=le.length>=40?le.slice(0,7):le;let Ge=null;if(Z.commit.branchName?(Ge=Ii(Z.commit.branchName,le,Me),Ge||(Ge=di(Z.commit.branchName))):Ge=fi(le,Me),Ge&&ye){ye(Ge.path);return}h==null||h({commitSha:le})},[fi,Ii,di,h,ye]),eo=_.useCallback((P,Z)=>{var Qe,lt,rn,dn,An;if(P.button!==0)return;const le=P.target;if(le!=null&&le.closest('[data-selectable-text="true"]')||le!=null&&le.closest("button, a, input, textarea, select"))return;P.stopPropagation(),P.preventDefault(),pn.current=!1,P.currentTarget.setPointerCapture(P.pointerId);const me=(Qe=Rt[Z.commit.visualId])!=null?Qe:Rt[Z.commit.id];ln.current={nodeId:Z.commit.visualId,startX:P.clientX,startY:P.clientY,baseX:(lt=me==null?void 0:me.x)!=null?lt:Z.x,baseY:(rn=me==null?void 0:me.y)!=null?rn:Z.y,moved:!1,pendingX:(dn=me==null?void 0:me.x)!=null?dn:Z.x,pendingY:(An=me==null?void 0:me.y)!=null?An:Z.y};const Me=()=>{on.current=null;const Zt=ln.current;Zt&&Ct(Xt=>({...Xt,[Zt.nodeId]:{x:Zt.pendingX,y:Zt.pendingY}}))},Ge=Zt=>{const Xt=ln.current;if(!Xt)return;const Nt=ws.current.zoom/aa,Gt=Nt>0?1/Nt:1,qn=(Zt.clientX-Xt.startX)*Gt,En=(Zt.clientY-Xt.startY)*Gt;(Math.abs(qn)>2||Math.abs(En)>2)&&(Xt.moved=!0),Xt.moved&&(pn.current=!0),Xt.pendingX=Xt.baseX+qn,Xt.pendingY=Xt.baseY+En,on.current==null&&(on.current=window.requestAnimationFrame(Me))},ct=()=>{window.removeEventListener("pointermove",Ge),window.removeEventListener("pointerup",ct),window.removeEventListener("pointercancel",ct),on.current!=null&&(window.cancelAnimationFrame(on.current),on.current=null,Me());try{P.currentTarget.releasePointerCapture(P.pointerId)}catch{}const Zt=ln.current;ln.current=null,Zt&&window.setTimeout(()=>{pn.current=!1},0)};window.addEventListener("pointermove",Ge),window.addEventListener("pointerup",ct),window.addEventListener("pointercancel",ct)},[Rt]),en=_.useCallback(async()=>{if(!ie)return;await ie(Fe)&&(st(!1),ot(""))},[ie,Fe]),R=_.useCallback(async()=>{X&&(await X({branchNames:[],discardUncommittedChanges:wo,stashIndices:vo}),it(!1),Vn([]),yo(null))},[X,wo,vo]),L=_.useCallback(async()=>{var Z;const P=tt.trim();if(P){if(jt==="new-root"){if(!z)return;await z(P)}else{if(!ke)return;const le=On.length===1?On[0]:(Z=ut==null?void 0:ut.headSha)!=null?Z:null;if(!le||!(le==="WORKING_TREE"||le.startsWith("STASH:")||le===(ut==null?void 0:ut.headSha)))return;await ke(le,P)}St(!1),$t(""),gt("from-selected-node"),Vn([]),yo(null)}},[ut==null?void 0:ut.headSha,jt,tt,ke,z,On]),$=!!(ut!=null&&ut.headSha),te=On.length===0&&$,re=On.length===1&&(On[0]==="WORKING_TREE"||On[0].startsWith("STASH:"))||te,Be=!!z;return _.useEffect(()=>{if(wt){if(!re&&!te&&Be){gt("new-root");return}(re||te)&&gt("from-selected-node")}},[Be,te,wt,re]),_.useEffect(()=>{const P=vt.current;if(!P)return;const Z=640,le=440,me=()=>{const Ge=P.getBoundingClientRect().width;To(Ge<Z),js(Ge<le)};me();const Me=new ResizeObserver(()=>me());return Me.observe(P),()=>Me.disconnect()},[]),_.useEffect(()=>{const P=Z=>{if(!X||ze||On.length===0)return;const le=Z.target;le!=null&&le.closest('input, textarea, select, button, [contenteditable="true"]')||Z.key!=="Delete"&&Z.key!=="Backspace"||(Z.preventDefault(),it(!0))};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[ze,X,On.length]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-background",children:[l.jsx(aS,{isOpen:ee,onClose:()=>we==null?void 0:we(),visibleBounds:Yt,renderedNodeCount:Tn,totalNodeCount:ys.length,renderedMergeConnectorCount:Dn,totalMergeConnectorCount:us.length,renderedConnectorCount:gn,totalConnectorCount:ss.length,mapGridCullViewportInsetScreenPx:Fw,debugRows:Ao.debugRows,branchDebugRows:Ao.branchDebugRows,connectorDecisions:ds}),Ye?l.jsxs("header",{"data-tauri-drag-region":!0,onPointerDown:fe,className:"window-drag-region pointer-events-none absolute inset-x-0 top-0 z-[70] flex w-full select-none",children:[l.jsxs("div",{ref:vt,className:"pointer-events-auto ml-auto flex w-full max-w-[calc(100vw-116px)] min-w-0 items-start justify-between gap-3 p-2.25 select-none",children:[l.jsx("div",{className:"flex min-w-0 flex-nowrap items-center justify-start gap-3 overflow-visible",children:l.jsx(sS,{compactLabels:cs,selectedVisibleCommitShas:On,commitInProgress:B,commitDisabled:se,stageInProgress:_e,stashInProgress:Ze,stashDisabled:ae,pushInProgress:M,hasUncommittedChanges:Jo,createBranchFromNodeInProgress:ce,onCommitLocalChanges:ie,onStageAllChanges:H?()=>void H():void 0,onStashLocalChanges:Le,onPushCurrentBranch:I,onPushAllBranches:E,onPushCommitTargets:N,onMergeRefsIntoBranch:j,selectedPushTargets:Bo,selectedPushLabel:W,canPushCurrentBranch:Yn,pushCurrentBranchLabel:C,pushableRemoteBranchCount:ji,selectedCommitTargetOption:Ro,mergeInProgress:k,mergeTargetCommitSha:Pn,setMergeTargetCommitSha:yo,worktrees:U,currentRepoPath:K,worktreeMenuOpen:Je,setWorktreeMenuOpen:$e,onSwitchToWorktree:ye,onRemoveWorktree:de,removeWorktreeInProgress:pe,setCommitDialogOpen:st,setNewBranchDialogOpen:St,hideMergeControls:!0})}),l.jsx("div",{className:"flex min-w-0 shrink-0 items-center justify-end gap-2",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto flex items-center gap-2",children:[Oo?null:l.jsx(cS,{query:Ye.gridSearchQuery,onQueryChange:Ye.setGridSearchQuery,resultCount:Ye.gridSearchResultCount,resultIndex:Ye.gridSearchResultIndex,onJump:P=>{Ye.setGridSearchJumpDirection(P),Ye.setGridSearchJumpToken(Z=>Z+1)}}),l.jsx(lS,{compactLabels:cs,orientation:Ye.mapGridOrientation,onOrientationChange:Ye.setMapGridOrientation})]})})]}),l.jsxs("div",{className:"pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5",children:[(he=Ye.githubAuthStatus)!=null&&he.ghAvailable&&!Ye.githubAuthStatus.authenticated?l.jsx("button",{onClick:Ye.onGitHubAuthSetup,disabled:Ye.githubAuthLoading,className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Ye.githubAuthLoading?"Connecting GitHub...":"Connect GitHub"}):null,Ye.githubAuthStatus&&!Ye.githubAuthStatus.ghAvailable?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] font-medium text-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",children:"Install `gh` for private PR data"})]}):null,Ye.githubAuthMessage?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] text-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",title:Ye.githubAuthMessage,children:Ye.githubAuthMessage})]}):null,Ye.commitSwitchFeedback?l.jsxs("div",{className:`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200 ${Ye.isCommitSwitchFeedbackVisible?"opacity-100":"opacity-0"} ${Ye.commitSwitchFeedback.kind==="error"?"border-red-500/25 bg-red-50/95 text-red-600 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-400":"border-blue-500/25 bg-blue-50/95 text-blue-600 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-400"}`,title:Ye.commitSwitchFeedback.message,children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium opacity-70",children:Ye.commitSwitchFeedback.kind==="error"?"Alert":"Update"}),l.jsx("p",{className:"truncate text-[11px]",children:Ye.commitSwitchFeedback.message})]}):null]})]}):null,ki?l.jsx("div",{className:"pointer-events-none absolute bottom-2.25 left-1/2 z-[80] -translate-x-1/2",children:l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-2.25",children:[l.jsxs("div",{className:"inline-flex h-7 items-center rounded-md border border-border bg-background/95 pl-[2px] pr-[4px] backdrop-blur-sm",children:[l.jsx("span",{className:"px-2 text-[11px] font-medium text-foreground",children:"Merge to..."}),l.jsxs("div",{className:"relative inline-flex h-5 items-center rounded-[2px] bg-muted/30 p-0.5",children:[l.jsx("div",{className:"absolute inset-0.5 overflow-hidden rounded-[1px]",children:l.jsx("div",{className:`h-full rounded-[1px] bg-border ${hi?"transition-all duration-200 ease-in-out":""}`,style:{width:`var(--${Bs}-active-width, 0px)`,transform:`translateX(var(--${Bs}-active-offset, 0px))`}})}),Ro.options.map(P=>{const Z=P.targetBranch===Ro.targetBranch;return l.jsx("button",{type:"button",onClick:()=>{P.targetSha!==Pn&&It(!0),yo(P.targetSha)},ref:le=>{if(!le)return;const me=le.parentElement;if(!me||!Z)return;const Me=le.getBoundingClientRect(),Ge=me.getBoundingClientRect();me.style.setProperty(`--${Bs}-active-width`,`${Me.width}px`),me.style.setProperty(`--${Bs}-active-offset`,`${Me.left-Ge.left}px`)},className:`relative z-10 h-4.5 px-2 text-[11px] font-medium transition-colors ${Z?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:P.targetBranch},`merge-${P.targetBranch}`)})]})]}),l.jsxs("button",{type:"button",onClick:()=>void j(Ro.sources,Ro.targetBranch),disabled:Ro.sources.length===0||k,className:"inline-flex h-7 items-center rounded-md border border-border bg-background px-2 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(eb,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),k?"Merging...":"Confirm"]})]})}):null,x||qs.length===0?l.jsx(mS,{}):l.jsx(iS,{scrollContainerRef:bt,mapPadHostRef:At,transformLayerRef:zt,isMarqueeSelecting:ro,contentWidth:io,contentHeight:Cn,isCameraMoving:sn,onWheel:po,onMouseDown:xo,onNodePointerDown:eo,labelTopPx:Ds,inverseZoomStyle:zi,displayZoom:Ms,selectedVisibleCommitShas:On,normalizedSearchQuery:Ns,matchingNodeIds:Qi,focusedNode:ni,renderNodes:ys,shouldRenderNode:Zo,manuallyOpenedClumps:Vt,manuallyClosedClumps:qt,defaultCollapsedClumps:oo,leadByClusterKey:zs,clusterKeyByCommitId:gs,clusterCounts:Sn,commitIdsWithRenderedAncestry:Fo,nodeWarnings:ao,connectorParentShas:Do,branchStartShas:Wt,branchOffNodeShas:Si,crossBranchOutgoingShas:xs,branchBaseCommitByName:zo,branchStartAccentClass:Is,connectorParentAccentClass:_n,commitCornerRadiusPx:$o,lineStrokeWidth:$s,pointFormatter:Oi,connectors:ss,mergeConnectors:us,cullConnectorPath:cn,flushCameraReactTick:un,setManuallyOpenedClumps:Mt,setManuallyClosedClumps:wn,onCommitCardClick:os,unpushedCommitShasSetByBranch:Ci,remoteCommitShas:ei,checkedOutHeadSha:Hs,orientation:Re}),go&&ro?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:go.left,top:go.top,width:go.width,height:go.height,borderColor:"var(--select)",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(rS,{commitDialogOpen:xe,commitMessageDraft:Fe,onCommitMessageDraftChange:ot,onCommitDialogClose:()=>st(!1),onCommitConfirm:()=>void en(),commitInProgress:B,deleteConfirmOpen:ze,deleteSelectionItems:si,onDeleteConfirmClose:()=>it(!1),onDeleteConfirm:()=>void R(),deleteInProgress:F,deletableSelectionCount:So,newBranchDialogOpen:wt,newBranchName:tt,newBranchCreateMode:jt,onNewBranchNameChange:$t,onNewBranchCreateModeChange:gt,onNewBranchDialogClose:()=>St(!1),onNewBranchConfirm:()=>void L(),selectedCommitCanCreateBranch:re,currentCheckedOutCommitCanCreateBranch:te,createBranchFromNodeInProgress:ce})]})}function pS({branches:e,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y={},branchCommitPreviews:g={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:w="",gridSearchJumpToken:S=0,gridSearchJumpDirection:j=1,gridFocusSha:k=null,onGridSearchResultCountChange:E,onGridSearchResultIndexChange:I,onGridSearchFocusChange:N,view:M="time",isLoading:X=!1,scrollRequest:F,focusedErrorBranch:U,checkedOutRef:K=null,mapTopInsetPx:de=0,onMergeRefsIntoBranch:pe,mergeInProgress:ye=!1,onPushAllBranches:Le,onPushCurrentBranch:Ze,onPushCommitTargets:ae,pushInProgress:ie=!1,onDeleteSelection:B,worktrees:se=[],currentRepoPath:H,onRemoveWorktree:_e,removeWorktreeInProgress:ke=!1,onSwitchToWorktree:z,onStashLocalChanges:ce,stashInProgress:ee=!1,stashDisabled:we=!1,onCommitLocalChanges:Re,commitInProgress:ge=!1,commitDisabled:Pe=!1,onStageAllChanges:nt,stageInProgress:Xe=!1,onCreateBranchFromNode:yt,onCreateRootBranch:Tt,createBranchFromNodeInProgress:kt=!1,isMutationBusy:ut=!1,onMoveNodeBackToBranch:Ot,isDebugOpen:_t=!1,onDebugClose:tn,orientation:nn="horizontal",onInteractionChange:Q,manuallyOpenedClumps:Oe,manuallyClosedClumps:ft,setManuallyOpenedClumps:Ee,setManuallyClosedClumps:xt,layoutModel:Ye,gridHudProps:bt}){const vt=new Set(u.map(J=>J.branchName)),At=14*864e5,zt=Date.now();function dt(J){return vt.has(J.name)||zt-new Date(J.lastCommitDate).getTime()<=At}const V=e.filter(J=>J.status==="stale"&&dt(J)).sort((J,Se)=>new Date(Se.lastCommitDate).getTime()-new Date(J.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:M==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(Oy,{branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchJumpDirection:j,gridFocusSha:k,onGridSearchResultCountChange:E,onGridSearchResultIndexChange:I,onGridSearchFocusChange:N,staleBranches:V,isLoading:X,scrollRequest:F,focusedErrorBranch:U,checkedOutRef:K,mapTopInsetPx:de,onMergeRefsIntoBranch:pe,mergeInProgress:ye,onPushAllBranches:Le,onPushCurrentBranch:Ze,onPushCommitTargets:ae,pushInProgress:ie,onDeleteSelection:B,worktrees:se,currentRepoPath:H,onRemoveWorktree:_e,removeWorktreeInProgress:ke,onSwitchToWorktree:z,onStashLocalChanges:ce,stashInProgress:ee,stashDisabled:we,onCommitLocalChanges:Re,commitInProgress:ge,commitDisabled:Pe,onStageAllChanges:nt,stageInProgress:Xe,onCreateBranchFromNode:yt,onCreateRootBranch:Tt,createBranchFromNodeInProgress:kt,isMutationBusy:ut,onMoveNodeBackToBranch:Ot,isDebugOpen:_t,onDebugClose:tn,orientation:nn,onInteractionChange:Q,manuallyOpenedClumps:Oe,manuallyClosedClumps:ft,setManuallyOpenedClumps:Ee,setManuallyClosedClumps:xt,layoutModel:Ye,gridHudProps:bt})}):M==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(Oy,{branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,isLoading:X,defaultBranch:d,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchJumpDirection:j,gridFocusSha:k,checkedOutRef:K,onGridSearchResultCountChange:E,onGridSearchResultIndexChange:I,onGridSearchFocusChange:N,onInteractionChange:Q,manuallyOpenedClumps:Oe,manuallyClosedClumps:ft,setManuallyOpenedClumps:Ee,setManuallyClosedClumps:xt,layoutModel:Ye,isDebugOpen:_t,onDebugClose:tn,orientation:nn,gridHudProps:bt})}):null})}var Al=Fx();const Cp=_.createContext({});function Yc(e){const n=_.useRef(null);return n.current===null&&(n.current=e()),n.current}const _S=typeof window<"u",kp=_S?_.useLayoutEffect:_.useEffect,Xd=_.createContext(null);function jp(e,n){e.indexOf(n)===-1&&e.push(n)}function kl(e,n){const i=e.indexOf(n);i>-1&&e.splice(i,1)}const ga=(e,n,i)=>i>n?n:i<e?e:i;let Mp=()=>{};const dr={},rb=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function lb(e){return typeof e=="object"&&e!==null}const cb=e=>/^0[^.\s]+$/u.test(e);function ub(e){let n;return()=>(n===void 0&&(n=e()),n)}const qi=e=>e,gS=(e,n)=>i=>n(e(i)),Wc=(...e)=>e.reduce(gS),jl=(e,n,i)=>{const a=n-e;return a===0?1:(i-e)/a};class Ep{constructor(){this.subscriptions=[]}add(n){return jp(this.subscriptions,n),()=>kl(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const wi=e=>e*1e3,Gi=e=>e/1e3;function db(e,n){return n?e*(1e3/n):0}const yS=(e,n,i)=>{const a=n-e;return((i-e)%a+a)%a+e},fb=(e,n,i)=>(((1-3*i+3*n)*e+(3*i-6*n))*e+3*n)*e,xS=1e-7,bS=12;function vS(e,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=fb(d,a,c)-e,u>0?i=d:n=d;while(Math.abs(u)>xS&&++h<bS);return d}function Fc(e,n,i,a){if(e===n&&i===a)return qi;const c=u=>vS(u,0,1,e,i);return u=>u===0||u===1?u:fb(c(u),n,a)}const hb=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,mb=e=>n=>1-e(1-n),pb=Fc(.33,1.53,.69,.99),Tp=mb(pb),_b=hb(Tp),gb=e=>e>=1?1:(e*=2)<1?.5*Tp(e):.5*(2-Math.pow(2,-10*(e-1))),Ap=e=>1-Math.sin(Math.acos(e)),yb=mb(Ap),xb=hb(Ap),wS=Fc(.42,0,1,1),SS=Fc(0,0,.58,1),bb=Fc(.42,0,.58,1),vb=e=>Array.isArray(e)&&typeof e[0]!="number";function wb(e,n){return vb(e)?e[yS(0,e.length,n)]:e}const Sb=e=>Array.isArray(e)&&typeof e[0]=="number",CS={linear:qi,easeIn:wS,easeInOut:bb,easeOut:SS,circIn:Ap,circInOut:xb,circOut:yb,backIn:Tp,backInOut:_b,backOut:pb,anticipate:gb},kS=e=>typeof e=="string",zy=e=>{if(Sb(e)){Mp(e.length===4);const[n,i,a,c]=e;return Fc(n,i,a,c)}else if(kS(e))return CS[e];return e},ed=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function jS(e,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(g){d.has(g)&&(y.schedule(g),e()),g(h)}const y={schedule:(g,x=!1,b=!1)=>{const S=b&&c?i:a;return x&&d.add(g),S.add(g),g},cancel:g=>{a.delete(g),d.delete(g)},process:g=>{if(h=g,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,y.process(g))}};return y}const MS=40;function Cb(e,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=ed.reduce((N,M)=>(N[M]=jS(u),N),{}),{setup:h,read:p,resolveKeyframes:y,preUpdate:g,update:x,preRender:b,render:w,postRender:S}=d,j=()=>{const N=dr.useManualTiming,M=N?c.timestamp:performance.now();i=!1,N||(c.delta=a?1e3/60:Math.max(Math.min(M-c.timestamp,MS),1)),c.timestamp=M,c.isProcessing=!0,h.process(c),p.process(c),y.process(c),g.process(c),x.process(c),b.process(c),w.process(c),S.process(c),c.isProcessing=!1,i&&n&&(a=!1,e(j))},k=()=>{i=!0,a=!0,c.isProcessing||e(j)};return{schedule:ed.reduce((N,M)=>{const X=d[M];return N[M]=(F,U=!1,K=!1)=>(i||k(),X.schedule(F,U,K)),N},{}),cancel:N=>{for(let M=0;M<ed.length;M++)d[ed[M]].cancel(N)},state:c,steps:d}}const{schedule:_s,cancel:za,state:Wo,steps:em}=Cb(typeof requestAnimationFrame<"u"?requestAnimationFrame:qi,!0);let Cd;function ES(){Cd=void 0}const ri={now:()=>(Cd===void 0&&ri.set(Wo.isProcessing||dr.useManualTiming?Wo.timestamp:performance.now()),Cd),set:e=>{Cd=e,queueMicrotask(ES)}},kb=e=>n=>typeof n=="string"&&n.startsWith(e),jb=kb("--"),TS=kb("var(--"),Np=e=>TS(e)?AS.test(e.split("/*")[0].trim()):!1,AS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function $y(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const Nl={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},$c={...Nl,transform:e=>ga(0,1,e)},td={...Nl,default:1},Dc=e=>Math.round(e*1e5)/1e5,Dp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function NS(e){return e==null}const DS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Rp=(e,n)=>i=>!!(typeof i=="string"&&DS.test(i)&&i.startsWith(e)||n&&!NS(i)&&Object.prototype.hasOwnProperty.call(i,n)),Mb=(e,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(Dp);return{[e]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},RS=e=>ga(0,255,e),tm={...Nl,transform:e=>Math.round(RS(e))},Lr={test:Rp("rgb","red"),parse:Mb("red","green","blue"),transform:({red:e,green:n,blue:i,alpha:a=1})=>"rgba("+tm.transform(e)+", "+tm.transform(n)+", "+tm.transform(i)+", "+Dc($c.transform(a))+")"};function BS(e){let n="",i="",a="",c="";return e.length>5?(n=e.substring(1,3),i=e.substring(3,5),a=e.substring(5,7),c=e.substring(7,9)):(n=e.substring(1,2),i=e.substring(2,3),a=e.substring(3,4),c=e.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const Im={test:Rp("#"),parse:BS,transform:Lr.transform},Xc=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),rr=Xc("deg"),_a=Xc("%"),Lt=Xc("px"),LS=Xc("vh"),OS=Xc("vw"),Iy={..._a,parse:e=>_a.parse(e)/100,transform:e=>_a.transform(e*100)},bl={test:Rp("hsl","hue"),parse:Mb("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(e)+", "+_a.transform(Dc(n))+", "+_a.transform(Dc(i))+", "+Dc($c.transform(a))+")"},mo={test:e=>Lr.test(e)||Im.test(e)||bl.test(e),parse:e=>Lr.test(e)?Lr.parse(e):bl.test(e)?bl.parse(e):Im.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Lr.transform(e):bl.transform(e),getAnimatableNone:e=>{const n=mo.parse(e);return n.alpha=0,mo.transform(n)}},zS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function $S(e){var n,i;return isNaN(e)&&typeof e=="string"&&(((n=e.match(Dp))==null?void 0:n.length)||0)+(((i=e.match(zS))==null?void 0:i.length)||0)>0}const Eb="number",Tb="color",IS="var",PS="var(",Py="${}",HS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ml(e){const n=e.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(HS,p=>(mo.test(p)?(a.color.push(u),c.push(Tb),i.push(mo.parse(p))):p.startsWith(PS)?(a.var.push(u),c.push(IS),i.push(p)):(a.number.push(u),c.push(Eb),i.push(parseFloat(p))),++u,Py)).split(Py);return{values:i,split:h,indexes:a,types:c}}function US(e){return Ml(e).values}function Ab({split:e,types:n}){const i=e.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=e[u],a[u]!==void 0){const d=n[u];d===Eb?c+=Dc(a[u]):d===Tb?c+=mo.transform(a[u]):c+=a[u]}return c}}function VS(e){return Ab(Ml(e))}const YS=e=>typeof e=="number"?0:mo.test(e)?mo.getAnimatableNone(e):e,WS=(e,n)=>typeof e=="number"?n!=null&&n.trim().endsWith("/")?e:0:YS(e);function FS(e){const n=Ml(e);return Ab(n)(n.values.map((a,c)=>WS(a,n.split[c])))}const ra={test:$S,parse:US,createTransformer:VS,getAnimatableNone:FS};function nm(e,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(n-e)*6*i:i<1/2?n:i<2/3?e+(n-e)*(2/3-i)*6:e}function XS({hue:e,saturation:n,lightness:i,alpha:a}){e/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=nm(p,h,e+1/3),u=nm(p,h,e),d=nm(p,h,e-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Ld(e,n){return i=>i>0?n:e}const ks=(e,n,i)=>e+(n-e)*i,sm=(e,n,i)=>{const a=e*e,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},GS=[Im,Lr,bl],qS=e=>GS.find(n=>n.test(e));function Hy(e){const n=qS(e);if(!n)return!1;let i=n.parse(e);return n===bl&&(i=XS(i)),i}const Uy=(e,n)=>{const i=Hy(e),a=Hy(n);if(!i||!a)return Ld(e,n);const c={...i};return u=>(c.red=sm(i.red,a.red,u),c.green=sm(i.green,a.green,u),c.blue=sm(i.blue,a.blue,u),c.alpha=ks(i.alpha,a.alpha,u),Lr.transform(c))},Pm=new Set(["none","hidden"]);function KS(e,n){return Pm.has(e)?i=>i<=0?e:n:i=>i>=1?n:e}function QS(e,n){return i=>ks(e,n,i)}function Bp(e){return typeof e=="number"?QS:typeof e=="string"?Np(e)?Ld:mo.test(e)?Uy:e4:Array.isArray(e)?Nb:typeof e=="object"?mo.test(e)?Uy:ZS:Ld}function Nb(e,n){const i=[...e],a=i.length,c=e.map((u,d)=>Bp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function ZS(e,n){const i={...e,...n},a={};for(const c in i)e[c]!==void 0&&n[c]!==void 0&&(a[c]=Bp(e[c])(e[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function JS(e,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=e.indexes[d][a[d]],p=(c=e.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const e4=(e,n)=>{const i=ra.createTransformer(n),a=Ml(e),c=Ml(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Pm.has(e)&&!c.values.length||Pm.has(n)&&!a.values.length?KS(e,n):Wc(Nb(JS(a,c),c.values),i):Ld(e,n)};function Db(e,n,i){return typeof e=="number"&&typeof n=="number"&&typeof i=="number"?ks(e,n,i):Bp(e)(e,n)}const t4=e=>{const n=({timestamp:i})=>e(i);return{start:(i=!0)=>_s.update(n,i),stop:()=>za(n),now:()=>Wo.isProcessing?Wo.timestamp:ri.now()}},Rb=(e,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(e(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Od=2e4;function Lp(e){let n=0;const i=50;let a=e.next(n);for(;!a.done&&n<Od;)n+=i,a=e.next(n);return n>=Od?1/0:n}function Bb(e,n=100,i){const a=i({...e,keyframes:[0,n]}),c=Math.min(Lp(a),Od);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Gi(c)}}const Xs={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Hm(e,n){return e*Math.sqrt(1-n*n)}const n4=12;function s4(e,n,i){let a=i;for(let c=1;c<n4;c++)a=a-e(a)/n(a);return a}const om=.001;function o4({duration:e=Xs.duration,bounce:n=Xs.bounce,velocity:i=Xs.velocity,mass:a=Xs.mass}){let c,u,d=1-n;d=ga(Xs.minDamping,Xs.maxDamping,d),e=ga(Xs.minDuration,Xs.maxDuration,Gi(e)),d<1?(c=y=>{const g=y*d,x=g*e,b=g-i,w=Hm(y,d),S=Math.exp(-x);return om-b/w*S},u=y=>{const x=y*d*e,b=x*i+i,w=Math.pow(d,2)*Math.pow(y,2)*e,S=Math.exp(-x),j=Hm(Math.pow(y,2),d);return(-c(y)+om>0?-1:1)*((b-w)*S)/j}):(c=y=>{const g=Math.exp(-y*e),x=(y-i)*e+1;return-om+g*x},u=y=>{const g=Math.exp(-y*e),x=(i-y)*(e*e);return g*x});const h=5/e,p=s4(c,u,h);if(e=wi(e),isNaN(p))return{stiffness:Xs.stiffness,damping:Xs.damping,duration:e};{const y=Math.pow(p,2)*a;return{stiffness:y,damping:d*2*Math.sqrt(a*y),duration:e}}}const i4=["duration","bounce"],a4=["stiffness","damping","mass"];function Vy(e,n){return n.some(i=>e[i]!==void 0)}function r4(e){let n={velocity:Xs.velocity,stiffness:Xs.stiffness,damping:Xs.damping,mass:Xs.mass,isResolvedFromDuration:!1,...e};if(!Vy(e,a4)&&Vy(e,i4))if(n.velocity=0,e.visualDuration){const i=e.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*ga(.05,1,1-(e.bounce||0))*Math.sqrt(c);n={...n,mass:Xs.mass,stiffness:c,damping:u}}else{const i=o4({...e,velocity:0});n={...n,...i,mass:Xs.mass},n.isResolvedFromDuration=!0}return n}function Ic(e=Xs.visualDuration,n=Xs.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:y,mass:g,duration:x,velocity:b,isResolvedFromDuration:w}=r4({...i,velocity:-Gi(i.velocity||0)}),S=b||0,j=y/(2*Math.sqrt(p*g)),k=d-u,E=Gi(Math.sqrt(p/g)),I=Math.abs(k)<5;a||(a=I?Xs.restSpeed.granular:Xs.restSpeed.default),c||(c=I?Xs.restDelta.granular:Xs.restDelta.default);let N,M,X,F,U,K;if(j<1)X=Hm(E,j),F=(S+j*E*k)/X,N=pe=>{const ye=Math.exp(-j*E*pe);return d-ye*(F*Math.sin(X*pe)+k*Math.cos(X*pe))},U=j*E*F+k*X,K=j*E*k-F*X,M=pe=>Math.exp(-j*E*pe)*(U*Math.sin(X*pe)+K*Math.cos(X*pe));else if(j===1){N=ye=>d-Math.exp(-E*ye)*(k+(S+E*k)*ye);const pe=S+E*k;M=ye=>Math.exp(-E*ye)*(E*pe*ye-S)}else{const pe=E*Math.sqrt(j*j-1);N=ae=>{const ie=Math.exp(-j*E*ae),B=Math.min(pe*ae,300);return d-ie*((S+j*E*k)*Math.sinh(B)+pe*k*Math.cosh(B))/pe};const ye=(S+j*E*k)/pe,Le=j*E*ye-k*pe,Ze=j*E*k-ye*pe;M=ae=>{const ie=Math.exp(-j*E*ae),B=Math.min(pe*ae,300);return ie*(Le*Math.sinh(B)+Ze*Math.cosh(B))}}const de={calculatedDuration:w&&x||null,velocity:pe=>wi(M(pe)),next:pe=>{if(!w&&j<1){const Le=Math.exp(-j*E*pe),Ze=Math.sin(X*pe),ae=Math.cos(X*pe),ie=d-Le*(F*Ze+k*ae),B=wi(Le*(U*Ze+K*ae));return h.done=Math.abs(B)<=a&&Math.abs(d-ie)<=c,h.value=h.done?d:ie,h}const ye=N(pe);if(w)h.done=pe>=x;else{const Le=wi(M(pe));h.done=Math.abs(Le)<=a&&Math.abs(d-ye)<=c}return h.value=h.done?d:ye,h},toString:()=>{const pe=Math.min(Lp(de),Od),ye=Rb(Le=>de.next(pe*Le).value,pe,30);return pe+"ms "+ye},toTransition:()=>{}};return de}Ic.applyToOptions=e=>{const n=Bb(e,100,Ic);return e.ease=n.ease,e.duration=wi(n.duration),e.type="keyframes",e};const l4=5;function Lb(e,n,i){const a=Math.max(n-l4,0);return db(i-e(a),n-a)}function Um({keyframes:e,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:y=.5,restSpeed:g}){const x=e[0],b={done:!1,value:x},w=K=>h!==void 0&&K<h||p!==void 0&&K>p,S=K=>h===void 0?p:p===void 0||Math.abs(h-K)<Math.abs(p-K)?h:p;let j=i*n;const k=x+j,E=d===void 0?k:d(k);E!==k&&(j=E-x);const I=K=>-j*Math.exp(-K/a),N=K=>E+I(K),M=K=>{const de=I(K),pe=N(K);b.done=Math.abs(de)<=y,b.value=b.done?E:pe};let X,F;const U=K=>{w(b.value)&&(X=K,F=Ic({keyframes:[b.value,S(b.value)],velocity:Lb(N,K,b.value),damping:c,stiffness:u,restDelta:y,restSpeed:g}))};return U(0),{calculatedDuration:null,next:K=>{let de=!1;return!F&&X===void 0&&(de=!0,M(K),U(K)),X!==void 0&&K>=X?F.next(K-X):(!de&&M(K),b)}}}function c4(e,n,i){const a=[],c=i||dr.mix||Db,u=e.length-1;for(let d=0;d<u;d++){let h=c(e[d],e[d+1]);if(n){const p=Array.isArray(n)?n[d]||qi:n;h=Wc(p,h)}a.push(h)}return a}function Ob(e,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=e.length;if(Mp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=e[0]===e[1];e[0]>e[u-1]&&(e=[...e].reverse(),n=[...n].reverse());const h=c4(n,a,c),p=h.length,y=g=>{if(d&&g<e[0])return n[0];let x=0;if(p>1)for(;x<e.length-2&&!(g<e[x+1]);x++);const b=jl(e[x],e[x+1],g);return h[x](b)};return i?g=>y(ga(e[0],e[u-1],g)):y}function zb(e,n){const i=e[e.length-1];for(let a=1;a<=n;a++){const c=jl(0,n,a);e.push(ks(i,1,c))}}function $b(e){const n=[0];return zb(n,e.length-1),n}function u4(e,n){return e.map(i=>i*n)}function d4(e,n){return e.map(()=>n||bb).splice(0,e.length-1)}function Rc({duration:e=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=vb(a)?a.map(zy):zy(a),u={done:!1,value:n[0]},d=u4(i&&i.length===n.length?i:$b(n),e),h=Ob(d,n,{ease:Array.isArray(c)?c:d4(n,c)});return{calculatedDuration:e,next:p=>(u.value=h(p),u.done=p>=e,u)}}const f4=e=>e!==null;function Gd(e,{repeat:n,repeatType:i="loop"},a,c=1){const u=e.filter(f4),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const h4={decay:Um,inertia:Um,tween:Rc,keyframes:Rc,spring:Ic};function Ib(e){typeof e.type=="string"&&(e.type=h4[e.type])}class Op{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const m4=e=>e/100;class zd extends Op{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==ri.now()&&this.tick(ri.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Ib(n);const{type:i=Rc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||Rc;p!==Rc&&typeof h[0]!="number"&&(this.mixKeyframes=Wc(m4,Db(h[0],h[1])),h=[0,100]);const y=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),y.calculatedDuration===null&&(y.calculatedDuration=Lp(y));const{calculatedDuration:g}=y;this.calculatedDuration=g,this.resolvedDuration=g+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=y}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:y=0,keyframes:g,repeat:x,repeatType:b,repeatDelay:w,type:S,onUpdate:j,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const E=this.currentTime-y*(this.playbackSpeed>=0?1:-1),I=this.playbackSpeed>=0?E<0:E>c;this.currentTime=Math.max(E,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let N=this.currentTime,M=a;if(x){const K=Math.min(this.currentTime,c)/h;let de=Math.floor(K),pe=K%1;!pe&&K>=1&&(pe=1),pe===1&&de--,de=Math.min(de,x+1),!!(de%2)&&(b==="reverse"?(pe=1-pe,w&&(pe-=w/h)):b==="mirror"&&(M=d)),N=ga(0,1,pe)*h}let X;I?(this.delayState.value=g[0],X=this.delayState):X=M.next(N),u&&!I&&(X.value=u(X.value));let{done:F}=X;!I&&p!==null&&(F=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return U&&S!==Um&&(X.value=Gd(g,this.options,k,this.speed)),j&&j(X.value),U&&this.finish(),X}then(n,i){return this.finished.then(n,i)}get duration(){return Gi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Gi(n)}get time(){return Gi(this.currentTime)}set time(n){n=wi(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Lb(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(ri.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Gi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=t4,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ri.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function p4(e){var n;for(let i=1;i<e.length;i++)(n=e[i])!=null||(e[i]=e[i-1])}const Or=e=>e*180/Math.PI,Vm=e=>{const n=Or(Math.atan2(e[1],e[0]));return Ym(n)},_4={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Vm,rotateZ:Vm,skewX:e=>Or(Math.atan(e[1])),skewY:e=>Or(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Ym=e=>(e=e%360,e<0&&(e+=360),e),Yy=Vm,Wy=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Fy=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),g4={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Wy,scaleY:Fy,scale:e=>(Wy(e)+Fy(e))/2,rotateX:e=>Ym(Or(Math.atan2(e[6],e[5]))),rotateY:e=>Ym(Or(Math.atan2(-e[2],e[0]))),rotateZ:Yy,rotate:Yy,skewX:e=>Or(Math.atan(e[4])),skewY:e=>Or(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Wm(e){return e.includes("scale")?1:0}function Fm(e,n){if(!e||e==="none")return Wm(n);const i=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=g4,c=i;else{const h=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=_4,c=h}if(!c)return Wm(n);const u=a[n],d=c[1].split(",").map(x4);return typeof u=="function"?u(d):d[u]}const y4=(e,n)=>{const{transform:i="none"}=getComputedStyle(e);return Fm(i,n)};function x4(e){return parseFloat(e.trim())}const Dl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Rl=new Set(Dl),Xy=e=>e===Nl||e===Lt,b4=new Set(["x","y","z"]),v4=Dl.filter(e=>!b4.has(e));function w4(e){const n=[];return v4.forEach(i=>{const a=e.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const ur={width:({x:e},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=e.max-e.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:e},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=e.max-e.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:(e,{transform:n})=>Fm(n,"x"),y:(e,{transform:n})=>Fm(n,"y")};ur.translateX=ur.x;ur.translateY=ur.y;const zr=new Set;let Xm=!1,Gm=!1,qm=!1;function Pb(){if(Gm){const e=Array.from(zr).filter(a=>a.needsMeasurement),n=new Set(e.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=w4(a);c.length&&(i.set(a,c),a.render())}),e.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Gm=!1,Xm=!1,zr.forEach(e=>e.complete(qm)),zr.clear()}function Hb(){zr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Gm=!0)})}function S4(){qm=!0,Hb(),Pb(),qm=!1}class zp{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(zr.add(this),Xm||(Xm=!0,_s.read(Hb),_s.resolveKeyframes(Pb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}p4(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),zr.delete(this)}cancel(){this.state==="scheduled"&&(zr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const C4=e=>e.startsWith("--");function Ub(e,n,i){C4(n)?e.style.setProperty(n,i):e.style[n]=i}const k4={};function Vb(e,n){const i=ub(e);return()=>{var a;return(a=k4[n])!=null?a:i()}}const j4=Vb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Yb=Vb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ec=([e,n,i,a])=>`cubic-bezier(${e}, ${n}, ${i}, ${a})`,Gy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ec([0,.65,.55,1]),circOut:Ec([.55,0,1,.45]),backIn:Ec([.31,.01,.66,-.59]),backOut:Ec([.33,1.53,.69,.99])};function Wb(e,n){if(e)return typeof e=="function"?Yb()?Rb(e,n):"ease-out":Sb(e)?Ec(e):Array.isArray(e)?e.map(i=>Wb(i,n)||Gy.easeOut):Gy[e]}function M4(e,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},y=void 0){const g={[n]:i};p&&(g.offset=p);const x=Wb(h,c);Array.isArray(x)&&(g.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return y&&(b.pseudoElement=y),e.animate(g,b)}function $p(e){return typeof e=="function"&&"applyToOptions"in e}function E4({type:e,...n}){var i,a;return $p(e)&&Yb()?e.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Fb extends Op{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,Mp(typeof n.type!="string");const y=E4(n);this.animation=M4(i,a,c,y,u),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=Gd(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(g),Ub(i,a,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Gi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Gi(n)}get time(){return Gi(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=wi(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&j4()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),qi):c(this)}}const Xb={anticipate:gb,backInOut:_b,circInOut:xb};function T4(e){return e in Xb}function A4(e){typeof e.ease=="string"&&T4(e.ease)&&(e.ease=Xb[e.ease])}const im=10;class N4 extends Fb{constructor(n){A4(n),Ib(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new zd({...d,autoplay:!1}),p=Math.max(im,ri.now()-this.startTime),y=ga(0,im,p-im),g=h.sample(p).value,{name:x}=this.options;u&&x&&Ub(u,x,g),i.setWithVelocity(h.sample(Math.max(0,p-y)).value,g,y),h.stop()}}const qy=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ra.test(e)||e==="0")&&!e.startsWith("url("));function D4(e){const n=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}function R4(e,n,i,a){const c=e[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=e[e.length-1],d=qy(c,n),h=qy(u,n);return!d||!h?!1:D4(e)||(i==="spring"||$p(i))&&a}function Km(e){e.duration=0,e.type="keyframes"}const Gb=new Set(["opacity","clipPath","filter","transform"]),B4=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function L4(e){for(let n=0;n<e.length;n++)if(typeof e[n]=="string"&&B4.test(e[n]))return!0;return!1}const O4=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),z4=ub(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function $4(e){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=e;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:g}=n.owner.getProps();return z4()&&i&&(Gb.has(i)||O4.has(i)&&L4(h))&&(i!=="transform"||!g)&&!y&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const I4=40;class P4 extends Op{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:y,element:g,...x}){var S;super(),this.stop=()=>{var j,k;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(k=this.keyframeResolver)==null||k.cancel()},this.createdAt=ri.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:y,element:g,...x},w=(g==null?void 0:g.KeyframeResolver)||zp;this.keyframeResolver=new w(h,(j,k,E)=>this.onKeyframesResolved(j,k,b,!E),p,y,g),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(n,i,a,c){var E,I;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:y,onUpdate:g}=a;this.resolvedAt=ri.now();let x=!0;R4(n,u,d,h)||(x=!1,(dr.instantAnimations||!p)&&(g==null||g(Gd(n,a,i))),n[0]=n[n.length-1],Km(a),a.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>I4?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},S=x&&!y&&$4(w),j=(I=(E=w.motionValue)==null?void 0:E.owner)==null?void 0:I.current;let k;if(S)try{k=new N4({...w,element:j})}catch{k=new zd(w)}else k=new zd(w);k.finished.then(()=>{this.notifyFinished()}).catch(qi),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),S4()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class H4{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return Ky(this.animations,"duration")}get iterationDuration(){return Ky(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Ky(e,n){let i=0;for(let a=0;a<e.length;a++){const c=e[a][n];c!==null&&c>i&&(i=c)}return i}class U4 extends H4{then(n,i){return this.finished.finally(n).then(()=>{})}}function qb(e,n,i,a=0,c=1){const u=Array.from(e).sort((y,g)=>y.sortNodePosition(g)).indexOf(n),d=e.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const V4=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Y4(e){const n=V4.exec(e);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function Kb(e,n,i=1){const[a,c]=Y4(e);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return rb(d)?parseFloat(d):d}return Np(c)?Kb(c,n,i+1):c}const W4={type:"spring",stiffness:500,damping:25,restSpeed:10},F4=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),X4={type:"keyframes",duration:.8},G4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},q4=(e,{keyframes:n})=>n.length>2?X4:Rl.has(e)?e.startsWith("scale")?F4(n[1]):W4:G4;function Qb(e,n){if(e!=null&&e.inherit&&n){const{inherit:i,...a}=e;return{...n,...a}}return e}function Ip(e,n){var a,c;const i=(c=(a=e==null?void 0:e[n])!=null?a:e==null?void 0:e.default)!=null?c:e;return i!==e?Qb(i,e):i}const K4=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Q4(e){for(const n in e)if(!K4.has(n))return!0;return!1}const Pp=(e,n,i,a={},c,u)=>d=>{const h=Ip(a,e)||{},p=h.delay||a.delay||0;let{elapsed:y=0}=a;y=y-wi(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-y,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:e,motionValue:n,element:u?void 0:c};Q4(h)||Object.assign(g,q4(e,g)),g.duration&&(g.duration=wi(g.duration)),g.repeatDelay&&(g.repeatDelay=wi(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let x=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Km(g),g.delay===0&&(x=!0)),(dr.instantAnimations||dr.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,Km(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=Gd(g.keyframes,h);if(b!==void 0){_s.update(()=>{g.onUpdate(b),g.onComplete()});return}}return h.isSync?new zd(g):new P4(g)};function Qy(e){const n=[{},{}];return e==null||e.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Hp(e,n,i,a){if(typeof n=="function"){const[c,u]=Qy(a);n=n(i!==void 0?i:e.custom,c,u)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[c,u]=Qy(a);n=n(i!==void 0?i:e.custom,c,u)}return n}function $r(e,n,i){const a=e.getProps();return Hp(a,n,i!==void 0?i:a.custom,e)}const Zb=new Set(["width","height","top","left","right","bottom",...Dl]),Zy=30,Z4=e=>!isNaN(parseFloat(e)),Bc={current:void 0};class J4{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=ri.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=ri.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=Z4(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new Ep);const a=this.events[n].add(i);return n==="change"?()=>{a(),_s.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Bc.current&&Bc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=ri.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>Zy)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,Zy);return db(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fr(e,n){return new J4(e,n)}const Qm=e=>Array.isArray(e);function eC(e,n,i){e.hasValue(n)?e.getValue(n).set(i):e.addValue(n,fr(i))}function tC(e){return Qm(e)?e[e.length-1]||0:e}function nC(e,n){const i=$r(e,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=tC(u[d]);eC(e,d,h)}}const Mo=e=>!!(e&&e.getVelocity);function sC(e){return!!(Mo(e)&&e.add)}function Zm(e,n){const i=e.getValue("willChange");if(sC(i))return i.add(n);if(!i&&dr.WillChange){const a=new dr.WillChange("auto");e.addValue("willChange",a),a.add(n)}}function Up(e){return e.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const oC="framerAppearId",Jb="data-"+Up(oC);function e5(e){return e.props[Jb]}function iC({protectedKeys:e,needsAnimating:n},i){const a=e.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Vp(e,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=e.getDefaultTransition();u=u?Qb(u,p):p;const y=u==null?void 0:u.reduceMotion;a&&(u=a);const g=[],x=c&&e.animationState&&e.animationState.getState()[c];for(const w in h){const S=e.getValue(w,(b=e.latestValues[w])!=null?b:null),j=h[w];if(j===void 0||x&&iC(x,w))continue;const k={delay:i,...Ip(u||{},w)},E=S.get();if(E!==void 0&&!S.isAnimating()&&!Array.isArray(j)&&j===E&&!k.velocity){_s.update(()=>S.set(j));continue}let I=!1;if(window.MotionHandoffAnimation){const X=e5(e);if(X){const F=window.MotionHandoffAnimation(X,w,_s);F!==null&&(k.startTime=F,I=!0)}}Zm(e,w);const N=y!=null?y:e.shouldReduceMotion;S.start(Pp(w,S,j,N&&Zb.has(w)?{type:!1}:k,e,I));const M=S.animation;M&&g.push(M)}if(d){const w=()=>_s.update(()=>{d&&nC(e,d)});g.length?Promise.all(g).then(w):w()}return g}function Jm(e,n,i={}){var p;const a=$r(e,n,i.type==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=e.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Vp(e,a,i)):()=>Promise.resolve(),d=e.variantChildren&&e.variantChildren.size?(y=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:b}=c;return aC(e,n,y,g,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[y,g]=h==="beforeChildren"?[u,d]:[d,u];return y().then(()=>g())}else return Promise.all([u(),d(i.delay)])}function aC(e,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of e.variantChildren)p.notify("AnimationStart",n),h.push(Jm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+qb(e.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function rC(e,n,i={}){e.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Jm(e,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Jm(e,n,i);else{const c=typeof n=="function"?$r(e,n,i.custom):n;a=Promise.all(Vp(e,c,i))}return a.then(()=>{e.notify("AnimationComplete",n)})}const lC={test:e=>e==="auto",parse:e=>e},t5=e=>n=>n.test(e),n5=[Nl,Lt,_a,rr,OS,LS,lC],Jy=e=>n5.find(t5(e));function cC(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||cb(e):!0}const uC=new Set(["brightness","contrast","saturate","opacity"]);function dC(e){const[n,i]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[a]=i.match(Dp)||[];if(!a)return e;const c=i.replace(a,"");let u=uC.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const fC=/\b([a-z-]*)\(.*?\)/gu,ep={...ra,getAnimatableNone:e=>{const n=e.match(fC);return n?n.map(dC).join(" "):e}},tp={...ra,getAnimatableNone:e=>{const n=ra.parse(e);return ra.createTransformer(e)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},e1={...Nl,transform:Math.round},hC={rotate:rr,rotateX:rr,rotateY:rr,rotateZ:rr,scale:td,scaleX:td,scaleY:td,scaleZ:td,skew:rr,skewX:rr,skewY:rr,distance:Lt,translateX:Lt,translateY:Lt,translateZ:Lt,x:Lt,y:Lt,z:Lt,perspective:Lt,transformPerspective:Lt,opacity:$c,originX:Iy,originY:Iy,originZ:Lt},Yp={borderWidth:Lt,borderTopWidth:Lt,borderRightWidth:Lt,borderBottomWidth:Lt,borderLeftWidth:Lt,borderRadius:Lt,borderTopLeftRadius:Lt,borderTopRightRadius:Lt,borderBottomRightRadius:Lt,borderBottomLeftRadius:Lt,width:Lt,maxWidth:Lt,height:Lt,maxHeight:Lt,top:Lt,right:Lt,bottom:Lt,left:Lt,inset:Lt,insetBlock:Lt,insetBlockStart:Lt,insetBlockEnd:Lt,insetInline:Lt,insetInlineStart:Lt,insetInlineEnd:Lt,padding:Lt,paddingTop:Lt,paddingRight:Lt,paddingBottom:Lt,paddingLeft:Lt,paddingBlock:Lt,paddingBlockStart:Lt,paddingBlockEnd:Lt,paddingInline:Lt,paddingInlineStart:Lt,paddingInlineEnd:Lt,margin:Lt,marginTop:Lt,marginRight:Lt,marginBottom:Lt,marginLeft:Lt,marginBlock:Lt,marginBlockStart:Lt,marginBlockEnd:Lt,marginInline:Lt,marginInlineStart:Lt,marginInlineEnd:Lt,fontSize:Lt,backgroundPositionX:Lt,backgroundPositionY:Lt,...hC,zIndex:e1,fillOpacity:$c,strokeOpacity:$c,numOctaves:e1},mC={...Yp,color:mo,backgroundColor:mo,outlineColor:mo,fill:mo,stroke:mo,borderColor:mo,borderTopColor:mo,borderRightColor:mo,borderBottomColor:mo,borderLeftColor:mo,filter:ep,WebkitFilter:ep,mask:tp,WebkitMask:tp},s5=e=>mC[e],pC=new Set([ep,tp]);function o5(e,n){let i=s5(e);return pC.has(i)||(i=ra),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const _C=new Set(["auto","none","0"]);function gC(e,n,i){let a=0,c;for(;a<e.length&&!c;){const u=e[a];typeof u=="string"&&!_C.has(u)&&Ml(u).values.length&&(c=e[a]),a++}if(c&&i)for(const u of n)e[u]=o5(i,c)}class yC extends zp{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let g=0;g<n.length;g++){let x=n[g];if(typeof x=="string"&&(x=x.trim(),Np(x))){const b=Kb(x,i.current);b!==void 0&&(n[g]=b),g===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!Zb.has(a)||n.length!==2)return;const[c,u]=n,d=Jy(c),h=Jy(u),p=$y(c),y=$y(u);if(p!==y&&ur[a]){this.needsMeasurement=!0;return}if(d!==h)if(Xy(d)&&Xy(h))for(let g=0;g<n.length;g++){const x=n[g];typeof x=="string"&&(n[g]=parseFloat(x))}else ur[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||cC(n[c]))&&a.push(c);a.length&&gC(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ur[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=ur[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,y])=>{n.getValue(p).set(y)}),this.resolveNoneKeyframes()}}function Wp(e,n,i){var a;if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[e])!=null?a:c.querySelectorAll(e);return u?Array.from(u):[]}return Array.from(e).filter(c=>c!=null)}const i5=(e,n)=>n&&typeof e=="number"?n.transform(e):e;function kd(e){return lb(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:Fp}=Cb(queueMicrotask,!1),oa={x:!1,y:!1};function a5(){return oa.x||oa.y}function xC(e){return e==="x"||e==="y"?oa[e]?null:(oa[e]=!0,()=>{oa[e]=!1}):oa.x||oa.y?null:(oa.x=oa.y=!0,()=>{oa.x=oa.y=!1})}function r5(e,n){const i=Wp(e),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function bC(e){return!(e.pointerType==="touch"||a5())}function vC(e,n,i={}){const[a,c,u]=r5(e,i);return a.forEach(d=>{let h=!1,p=!1,y;const g=()=>{d.removeEventListener("pointerleave",S)},x=k=>{y&&(y(k),y=void 0),g()},b=k=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(k))},w=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},S=k=>{if(k.pointerType!=="touch"){if(h){p=!0;return}x(k)}},j=k=>{if(!bC(k))return;p=!1;const E=n(d,k);typeof E=="function"&&(y=E,d.addEventListener("pointerleave",S,c))};d.addEventListener("pointerenter",j,c),d.addEventListener("pointerdown",w,c)}),u}const l5=(e,n)=>n?e===n?!0:l5(e,n.parentElement):!1,Xp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,wC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function SC(e){return wC.has(e.tagName)||e.isContentEditable===!0}const CC=new Set(["INPUT","SELECT","TEXTAREA"]);function kC(e){return CC.has(e.tagName)||e.isContentEditable===!0}const jd=new WeakSet;function t1(e){return n=>{n.key==="Enter"&&e(n)}}function am(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const jC=(e,n)=>{const i=e.currentTarget;if(!i)return;const a=t1(()=>{if(jd.has(i))return;am(i,"down");const c=t1(()=>{am(i,"up")}),u=()=>am(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function n1(e){return Xp(e)&&!a5()}const s1=new WeakSet;function MC(e,n,i={}){const[a,c,u]=r5(e,i),d=h=>{const p=h.currentTarget;if(!n1(h)||s1.has(h))return;jd.add(p),i.stopPropagation&&s1.add(h);const y=n(p,h),g=(w,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),jd.has(p)&&jd.delete(p),n1(w)&&typeof y=="function"&&y(w,{success:S})},x=w=>{g(w,p===window||p===document||i.useGlobalTarget||l5(p,w.target))},b=w=>{g(w,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),kd(h)&&(h.addEventListener("focus",y=>jC(y,c)),!SC(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function qd(e){return lb(e)&&"ownerSVGElement"in e}const Md=new WeakMap;let lr;const c5=(e,n,i)=>(a,c)=>c&&c[0]?c[0][e+"Size"]:qd(a)&&"getBBox"in a?a.getBBox()[n]:a[i],EC=c5("inline","width","offsetWidth"),TC=c5("block","height","offsetHeight");function AC({target:e,borderBoxSize:n}){var i;(i=Md.get(e))==null||i.forEach(a=>{a(e,{get width(){return EC(e,n)},get height(){return TC(e,n)}})})}function NC(e){e.forEach(AC)}function DC(){typeof ResizeObserver>"u"||(lr=new ResizeObserver(NC))}function RC(e,n){lr||DC();const i=Wp(e);return i.forEach(a=>{let c=Md.get(a);c||(c=new Set,Md.set(a,c)),c.add(n),lr==null||lr.observe(a)}),()=>{i.forEach(a=>{const c=Md.get(a);c==null||c.delete(n),c!=null&&c.size||lr==null||lr.unobserve(a)})}}const Ed=new Set;let vl;function BC(){vl=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Ed.forEach(n=>n(e))},window.addEventListener("resize",vl)}function LC(e){return Ed.add(e),vl||BC(),()=>{Ed.delete(e),!Ed.size&&typeof vl=="function"&&(window.removeEventListener("resize",vl),vl=void 0)}}function o1(e,n){return typeof e=="function"?LC(e):RC(e,n)}function u5(e){return qd(e)&&e.tagName==="svg"}function OC(...e){const n=!Array.isArray(e[0]),i=n?0:-1,a=e[0+i],c=e[1+i],u=e[2+i],d=e[3+i],h=Ob(c,u,d);return n?h(a):h}const zC=[...n5,mo,ra],$C=e=>zC.find(t5(e)),i1=()=>({translate:0,scale:1,origin:0,originPoint:0}),wl=()=>({x:i1(),y:i1()}),a1=()=>({min:0,max:0}),ho=()=>({x:a1(),y:a1()}),Pc=new WeakMap;function Kd(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Hc(e){return typeof e=="string"||Array.isArray(e)}const Gp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],qp=["initial",...Gp];function Qd(e){return Kd(e.animate)||qp.some(n=>Hc(e[n]))}function d5(e){return!!(Qd(e)||e.variants)}function IC(e,n,i){for(const a in n){const c=n[a],u=i[a];if(Mo(c))e.addValue(a,c);else if(Mo(u))e.addValue(a,fr(c,{owner:e}));else if(u!==c)if(e.hasValue(a)){const d=e.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=e.getStaticValue(a);e.addValue(a,fr(d!==void 0?d:c,{owner:e}))}}for(const a in i)n[a]===void 0&&e.removeValue(a);return n}const np={current:null},f5={current:!1},PC=typeof window<"u";function HC(){if(f5.current=!0,!!PC)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>np.current=e.matches;e.addEventListener("change",n),n()}else np.current=!1}const r1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let $d={};function h5(e){$d=e}function UC(){return $d}class m5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=zp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=ri.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,_s.render(this.render,!1,!0))};const{latestValues:y,renderState:g}=h;this.latestValues=y,this.baseTarget={...y},this.initialValues=i.initial?{...y}:{},this.renderState=g,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Qd(i),this.isVariantNode=d5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in b){const S=b[w];y[w]!==void 0&&Mo(S)&&S.set(y[w])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Pc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(f5.current||HC(),this.shouldReduceMotion=np.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),za(this.notifyUpdate),za(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Gb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:y,duration:g}=i.accelerate,x=new Fb({element:this.current,name:n,keyframes:h,times:p,ease:y,duration:wi(g)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=Rl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&_s.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in $d){const i=$d[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ho()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<r1.length;a++){const c=r1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=IC(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=fr(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(rb(a)||cb(a))?a=parseFloat(a):!$C(a)&&ra.test(i)&&(a=o5(n,i)),this.setBaseTarget(n,Mo(a)?a.get():a)),Mo(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Hp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!Mo(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new Ep),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Fp.render(this.render)}}class p5 extends m5{constructor(){super(...arguments),this.KeyframeResolver=yC}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;Mo(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class hr{constructor(n){this.isMounted=!1,this.node=n}update(){}}function _5({top:e,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:e,max:a}}}function VC({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function YC(e,n){if(!n)return e;const i=n({x:e.left,y:e.top}),a=n({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function rm(e){return e===void 0||e===1}function sp({scale:e,scaleX:n,scaleY:i}){return!rm(e)||!rm(n)||!rm(i)}function Dr(e){return sp(e)||g5(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function g5(e){return l1(e.x)||l1(e.y)}function l1(e){return e&&e!=="0%"}function Id(e,n,i){const a=e-i,c=n*a;return i+c}function c1(e,n,i,a,c){return c!==void 0&&(e=Id(e,c,a)),Id(e,i,a)+n}function op(e,n=0,i=1,a,c){e.min=c1(e.min,n,i,a,c),e.max=c1(e.max,n,i,a,c)}function y5(e,{x:n,y:i}){op(e.x,n.translate,n.scale,n.originPoint),op(e.y,i.translate,i.scale,i.originPoint)}const u1=.999999999999,d1=1.0000000000001;function WC(e,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:y}=u.options;y&&y.props.style&&y.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(pa(e.x,-u.scroll.offset.x),pa(e.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,y5(e,d)),a&&Dr(u.latestValues)&&Td(e,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<d1&&n.x>u1&&(n.x=1),n.y<d1&&n.y>u1&&(n.y=1)}function pa(e,n){e.min+=n,e.max+=n}function f1(e,n,i,a,c=.5){const u=ks(e.min,e.max,c);op(e,n,i,u,a)}function h1(e,n){return typeof e=="string"?parseFloat(e)/100*(n.max-n.min):e}function Td(e,n,i){const a=i!=null?i:e;f1(e.x,h1(n.x,a.x),n.scaleX,n.scale,n.originX),f1(e.y,h1(n.y,a.y),n.scaleY,n.scale,n.originY)}function x5(e,n){return _5(YC(e.getBoundingClientRect(),n))}function FC(e,n,i){const a=x5(e,i),{scroll:c}=n;return c&&(pa(a.x,c.offset.x),pa(a.y,c.offset.y)),a}const XC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},GC=Dl.length;function qC(e,n,i){let a="",c=!0;for(let u=0;u<GC;u++){const d=Dl[u],h=e[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const y=parseFloat(h);p=d.startsWith("scale")?y===1:y===0}if(!p||i){const y=i5(h,Yp[d]);if(!p){c=!1;const g=XC[d]||d;a+=`${g}(${y}) `}i&&(n[d]=y)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Kp(e,n,i){const{style:a,vars:c,transformOrigin:u}=e;let d=!1,h=!1;for(const p in n){const y=n[p];if(Rl.has(p)){d=!0;continue}else if(jb(p)){c[p]=y;continue}else{const g=i5(y,Yp[p]);p.startsWith("origin")?(h=!0,u[p]=g):a[p]=g}}if(n.transform||(d||i?a.transform=qC(n,e.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:y="50%",originZ:g=0}=u;a.transformOrigin=`${p} ${y} ${g}`}}function b5(e,{style:n,vars:i},a,c){const u=e.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function m1(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const yc={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(Lt.test(e))e=parseFloat(e);else return e;const i=m1(e,n.target.x),a=m1(e,n.target.y);return`${i}% ${a}%`}},KC={correct:(e,{treeScale:n,projectionDelta:i})=>{const a=e,c=ra.parse(e);if(c.length>5)return a;const u=ra.createTransformer(e),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const y=ks(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),u(c)}},ip={borderRadius:{...yc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:yc,borderTopRightRadius:yc,borderBottomLeftRadius:yc,borderBottomRightRadius:yc,boxShadow:KC};function v5(e,{layout:n,layoutId:i}){return Rl.has(e)||e.startsWith("origin")||(n||i!==void 0)&&(!!ip[e]||e==="opacity")}function Qp(e,n,i){var d;const a=e.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(Mo(a[h])||c&&Mo(c[h])||v5(h,e)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function QC(e){return window.getComputedStyle(e)}class w5 extends p5{constructor(){super(...arguments),this.type="html",this.renderInstance=b5}readValueFromInstance(n,i){var a;if(Rl.has(i))return(a=this.projection)!=null&&a.isProjecting?Wm(i):y4(n,i);{const c=QC(n),u=(jb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return x5(n,i)}build(n,i,a){Kp(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Qp(n,i,a)}}function ZC(e,n){return e in n}class JC extends m5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(ZC(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return ho()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const e6={offset:"stroke-dashoffset",array:"stroke-dasharray"},t6={offset:"strokeDashoffset",array:"strokeDasharray"};function n6(e,n,i=1,a=0,c=!0){e.pathLength=1;const u=c?e6:t6;e[u.offset]=`${-a}`,e[u.array]=`${n} ${i}`}const s6=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function S5(e,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,y,g){var w,S;if(Kp(e,h,y),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:x,style:b}=e;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(w=x.transformOrigin)!=null?w:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(S=g==null?void 0:g.transformBox)!=null?S:"fill-box",delete x.transformBox);for(const j of s6)x[j]!==void 0&&(b[j]=x[j],delete x[j]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&n6(x,c,u,d,!1)}const C5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),k5=e=>typeof e=="string"&&e.toLowerCase()==="svg";function o6(e,n,i,a){b5(e,n,void 0,a);for(const c in n.attrs)e.setAttribute(C5.has(c)?c:Up(c),n.attrs[c])}function j5(e,n,i){const a=Qp(e,n,i);for(const c in e)if(Mo(e[c])||Mo(n[c])){const u=Dl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=e[c]}return a}class M5 extends p5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ho}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(Rl.has(i)){const a=s5(i);return a&&a.default||0}return i=C5.has(i)?i:Up(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return j5(n,i,a)}build(n,i,a){S5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){o6(n,i,a,c)}mount(n){this.isSVGTag=k5(n.tagName),super.mount(n)}}const i6=qp.length;function E5(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?E5(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const n={};for(let i=0;i<i6;i++){const a=qp[i],c=e.props[a];(Hc(c)||c===!1)&&(n[a]=c)}return n}function T5(e,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==e.length)return!1;for(let a=0;a<i;a++)if(n[a]!==e[a])return!1;return!0}const a6=[...Gp].reverse(),r6=Gp.length;function l6(e){return n=>Promise.all(n.map(({animation:i,options:a})=>rC(e,i,a)))}function c6(e){let n=l6(e),i=p1(),a=!0,c=!1;const u=y=>(g,x)=>{var w;const b=$r(e,x,y==="exit"?(w=e.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:S,transitionEnd:j,...k}=b;g={...g,...k,...j}}return g};function d(y){n=y(e)}function h(y){const{props:g}=e,x=E5(e.parent)||{},b=[],w=new Set;let S={},j=1/0;for(let E=0;E<r6;E++){const I=a6[E],N=i[I],M=g[I]!==void 0?g[I]:x[I],X=Hc(M),F=I===y?N.isActive:null;F===!1&&(j=E);let U=M===x[I]&&M!==g[I]&&X;if(U&&(a||c)&&e.manuallyAnimateOnMount&&(U=!1),N.protectedKeys={...S},!N.isActive&&F===null||!M&&!N.prevProp||Kd(M)||typeof M=="boolean")continue;if(I==="exit"&&N.isActive&&F!==!0){N.prevResolvedValues&&(S={...S,...N.prevResolvedValues});continue}const K=u6(N.prevProp,M);let de=K||I===y&&N.isActive&&!U&&X||E>j&&X,pe=!1;const ye=Array.isArray(M)?M:[M];let Le=ye.reduce(u(I),{});F===!1&&(Le={});const{prevResolvedValues:Ze={}}=N,ae={...Ze,...Le},ie=H=>{de=!0,w.has(H)&&(pe=!0,w.delete(H)),N.needsAnimating[H]=!0;const _e=e.getValue(H);_e&&(_e.liveStyle=!1)};for(const H in ae){const _e=Le[H],ke=Ze[H];if(S.hasOwnProperty(H))continue;let z=!1;Qm(_e)&&Qm(ke)?z=!T5(_e,ke):z=_e!==ke,z?_e!=null?ie(H):w.add(H):_e!==void 0&&w.has(H)?ie(H):N.protectedKeys[H]=!0}N.prevProp=M,N.prevResolvedValues=Le,N.isActive&&(S={...S,...Le}),(a||c)&&e.blockInitialAnimation&&(de=!1);const B=U&&K;de&&(!B||pe)&&b.push(...ye.map(H=>{const _e={type:I};if(typeof H=="string"&&(a||c)&&!B&&e.manuallyAnimateOnMount&&e.parent){const{parent:ke}=e,z=$r(ke,H);if(ke.enteringChildren&&z){const{delayChildren:ce}=z.transition||{};_e.delay=qb(ke.enteringChildren,e,ce)}}return{animation:H,options:_e}}))}if(w.size){const E={};if(typeof g.initial!="boolean"){const I=$r(e,Array.isArray(g.initial)?g.initial[0]:g.initial);I&&I.transition&&(E.transition=I.transition)}w.forEach(I=>{const N=e.getBaseTarget(I),M=e.getValue(I);M&&(M.liveStyle=!0),E[I]=N!=null?N:null}),b.push({animation:E})}let k=!!b.length;return a&&(g.initial===!1||g.initial===g.animate)&&!e.manuallyAnimateOnMount&&(k=!1),a=!1,c=!1,k?n(b):Promise.resolve()}function p(y,g){var b;if(i[y].isActive===g)return Promise.resolve();(b=e.variantChildren)==null||b.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(y,g)}),i[y].isActive=g;const x=h(y);for(const w in i)i[w].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=p1(),c=!0}}}function u6(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!T5(n,e):!1}function Er(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function p1(){return{animate:Er(!0),whileInView:Er(),whileHover:Er(),whileTap:Er(),whileDrag:Er(),whileFocus:Er(),exit:Er()}}function ap(e,n){e.min=n.min,e.max=n.max}function sa(e,n){ap(e.x,n.x),ap(e.y,n.y)}function _1(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}const A5=1e-4,d6=1-A5,f6=1+A5,N5=.01,h6=0-N5,m6=0+N5;function li(e){return e.max-e.min}function p6(e,n,i){return Math.abs(e-n)<=i}function g1(e,n,i,a=.5){e.origin=a,e.originPoint=ks(n.min,n.max,e.origin),e.scale=li(i)/li(n),e.translate=ks(i.min,i.max,e.origin)-e.originPoint,(e.scale>=d6&&e.scale<=f6||isNaN(e.scale))&&(e.scale=1),(e.translate>=h6&&e.translate<=m6||isNaN(e.translate))&&(e.translate=0)}function Lc(e,n,i,a){g1(e.x,n.x,i.x,a?a.originX:void 0),g1(e.y,n.y,i.y,a?a.originY:void 0)}function y1(e,n,i,a=0){const c=a?ks(i.min,i.max,a):i.min;e.min=c+n.min,e.max=e.min+li(n)}function _6(e,n,i,a){y1(e.x,n.x,i.x,a==null?void 0:a.x),y1(e.y,n.y,i.y,a==null?void 0:a.y)}function x1(e,n,i,a=0){const c=a?ks(i.min,i.max,a):i.min;e.min=n.min-c,e.max=e.min+li(n)}function Pd(e,n,i,a){x1(e.x,n.x,i.x,a==null?void 0:a.x),x1(e.y,n.y,i.y,a==null?void 0:a.y)}function b1(e,n,i,a,c){return e-=n,e=Id(e,1/i,a),c!==void 0&&(e=Id(e,1/c,a)),e}function g6(e,n=0,i=1,a=.5,c,u=e,d=e){if(_a.test(n)&&(n=parseFloat(n),n=ks(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=ks(u.min,u.max,a);e===u&&(h-=n),e.min=b1(e.min,n,i,h,c),e.max=b1(e.max,n,i,h,c)}function v1(e,n,[i,a,c],u,d){g6(e,n[i],n[a],n[c],n.scale,u,d)}const y6=["x","scaleX","originX"],x6=["y","scaleY","originY"];function w1(e,n,i,a){v1(e.x,n,y6,i?i.x:void 0,a?a.x:void 0),v1(e.y,n,x6,i?i.y:void 0,a?a.y:void 0)}function S1(e){return e.translate===0&&e.scale===1}function D5(e){return S1(e.x)&&S1(e.y)}function C1(e,n){return e.min===n.min&&e.max===n.max}function b6(e,n){return C1(e.x,n.x)&&C1(e.y,n.y)}function k1(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function R5(e,n){return k1(e.x,n.x)&&k1(e.y,n.y)}function j1(e){return li(e.x)/li(e.y)}function M1(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}function ma(e){return[e("x"),e("y")]}function v6(e,n,i){let a="";const c=e.x.translate/n.x,u=e.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:y,rotate:g,rotateX:x,rotateY:b,skewX:w,skewY:S}=i;y&&(a=`perspective(${y}px) ${a}`),g&&(a+=`rotate(${g}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),w&&(a+=`skewX(${w}deg) `),S&&(a+=`skewY(${S}deg) `)}const h=e.x.scale*n.x,p=e.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const B5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],w6=B5.length,E1=e=>typeof e=="string"?parseFloat(e):e,T1=e=>typeof e=="number"||Lt.test(e);function S6(e,n,i,a,c,u){var d,h,p,y;c?(e.opacity=ks(0,(d=i.opacity)!=null?d:1,C6(a)),e.opacityExit=ks((h=n.opacity)!=null?h:1,0,k6(a))):u&&(e.opacity=ks((p=n.opacity)!=null?p:1,(y=i.opacity)!=null?y:1,a));for(let g=0;g<w6;g++){const x=B5[g];let b=A1(n,x),w=A1(i,x);if(b===void 0&&w===void 0)continue;b||(b=0),w||(w=0),b===0||w===0||T1(b)===T1(w)?(e[x]=Math.max(ks(E1(b),E1(w),a),0),(_a.test(w)||_a.test(b))&&(e[x]+="%")):e[x]=w}(n.rotate||i.rotate)&&(e.rotate=ks(n.rotate||0,i.rotate||0,a))}function A1(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const C6=L5(0,.5,yb),k6=L5(.5,.95,qi);function L5(e,n,i){return a=>a<e?0:a>n?1:i(jl(e,n,a))}function O5(e,n,i){const a=Mo(e)?e:fr(e);return a.start(Pp("",a,n,i)),a.animation}function Uc(e,n,i,a={passive:!0}){return e.addEventListener(n,i,a),()=>e.removeEventListener(n,i)}const j6=(e,n)=>e.depth-n.depth;class M6{constructor(){this.children=[],this.isDirty=!1}add(n){jp(this.children,n),this.isDirty=!0}remove(n){kl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(j6),this.isDirty=!1,this.children.forEach(n)}}function E6(e,n){const i=ri.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(za(a),e(u-n))};return _s.setup(a,!0),()=>za(a)}function Ad(e){return Mo(e)?e.get():e}class T6{constructor(){this.members=[]}add(n){jp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(kl(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(kl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const Nd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},lm=["","X","Y","Z"],A6=1e3;let N6=0;function cm(e,n,i,a){const{latestValues:c}=n;c[e]&&(i[e]=c[e],n.setStaticValue(e,0),a&&(a[e]=0))}function z5(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const i=e5(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",_s,!(c||u))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&z5(a)}function $5({attachResizeListener:e,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=N6++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(B6),this.nodes.forEach(P6),this.nodes.forEach(H6),this.nodes.forEach(L6)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new M6)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Ep),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=qd(d)&&!u5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:y}=this.options;if(y&&!y.current&&y.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),e){let g,x=0;const b=()=>this.root.updateBlockedByResize=!1;_s.read(()=>{x=window.innerWidth}),e(d,()=>{const w=window.innerWidth;w!==x&&(x=w,this.root.updateBlockedByResize=!0,g&&g(),g=E6(b,250),Nd.hasAnimatedSinceResize&&(Nd.hasAnimatedSinceResize=!1,this.nodes.forEach(R1)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&y&&(h||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||y.getDefaultTransition()||F6,{onLayoutAnimationStart:j,onLayoutAnimationComplete:k}=y.getProps(),E=!this.targetLayout||!R5(this.targetLayout,w),I=!x&&b;if(this.options.layoutRoot||this.resumeFrom||I||x&&(E||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const N={...Ip(S,"layout"),onPlay:j,onComplete:k};(y.shouldReduceMotion||this.options.layoutRoot)&&(N.delay=0,N.type=!1),this.startAnimation(N),this.setAnimationOrigin(g,I)}else x||R1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),za(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(U6),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&z5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const x=this.path[g];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(z6),this.nodes.forEach(N1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(D1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach($6),this.nodes.forEach(I6),this.nodes.forEach(D6),this.nodes.forEach(R6)):this.nodes.forEach(D1),this.clearAllSnapshots();const h=ri.now();Wo.delta=ga(0,1e3/60,h-Wo.timestamp),Wo.timestamp=h,Wo.isProcessing=!0,em.update.process(Wo),em.preRender.process(Wo),em.render.process(Wo),Wo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Fp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(O6),this.sharedNodes.forEach(V6)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,_s.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){_s.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!li(this.snapshot.measuredBox.x)&&!li(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ho()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!D5(this.projectionDelta),p=this.getTransformTemplate(),y=p?p(this.latestValues,""):void 0,g=y!==this.prevTransformTemplateValue;d&&this.instance&&(h||Dr(this.latestValues)||g)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),X6(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var y;const{visualElement:d}=this.options;if(!d)return ho();const h=d.measureViewportBox();if(!(((y=this.scroll)==null?void 0:y.wasRoot)||this.path.some(G6))){const{scroll:g}=this.root;g&&(pa(h.x,g.offset.x),pa(h.y,g.offset.y))}return h}removeElementScroll(d){var p;const h=ho();if(sa(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let y=0;y<this.path.length;y++){const g=this.path[y],{scroll:x,options:b}=g;g!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&sa(h,d),pa(h.x,x.offset.x),pa(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var g,x;const y=p||ho();sa(y,d);for(let b=0;b<this.path.length;b++){const w=this.path[b];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(pa(y.x,-w.scroll.offset.x),pa(y.y,-w.scroll.offset.y)),Dr(w.latestValues)&&Td(y,w.latestValues,(g=w.layout)==null?void 0:g.layoutBox)}return Dr(this.latestValues)&&Td(y,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),y}removeTransform(d){var p;const h=ho();sa(h,d);for(let y=0;y<this.path.length;y++){const g=this.path[y];if(!Dr(g.latestValues))continue;let x;g.instance&&(sp(g.latestValues)&&g.updateSnapshot(),x=ho(),sa(x,g.measurePageBox())),w1(h,g.latestValues,(p=g.snapshot)==null?void 0:p.layoutBox,x)}return Dr(this.latestValues)&&w1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Wo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:x}=this.options;if(!this.layout||!(g||x))return;this.resolvedRelativeTargetAt=Wo.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ho(),this.targetWithTransforms=ho()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),_6(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):sa(this.target,this.layout.layoutBox),y5(this.target,this.targetDelta)):sa(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||sp(this.parent.latestValues)||g5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ho(),this.relativeTargetOrigin=ho(),Pd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),sa(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Wo.timestamp&&(p=!1),p)return;const{layout:y,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||g))return;sa(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;WC(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=ho());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(_1(this.prevProjectionDelta.x,this.projectionDelta.x),_1(this.prevProjectionDelta.y,this.projectionDelta.y)),Lc(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!M1(this.projectionDelta.x,this.prevProjectionDelta.x)||!M1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=wl(),this.projectionDelta=wl(),this.projectionDeltaWithTransform=wl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,y=p?p.latestValues:{},g={...this.latestValues},x=wl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=ho(),w=p?p.source:void 0,S=this.layout?this.layout.source:void 0,j=w!==S,k=this.getStack(),E=!k||k.members.length<=1,I=!!(j&&!E&&this.options.crossfade===!0&&!this.path.some(W6));this.animationProgress=0;let N;this.mixTargetDelta=M=>{const X=M/1e3;B1(x.x,d.x,X),B1(x.y,d.y,X),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Pd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Y6(this.relativeTarget,this.relativeTargetOrigin,b,X),N&&b6(this.relativeTarget,N)&&(this.isProjectionDirty=!1),N||(N=ho()),sa(N,this.relativeTarget)),j&&(this.animationValues=g,S6(g,y,this.latestValues,X,I,E)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=X},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,y;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(y=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||y.stop(),this.pendingAnimation&&(za(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=_s.update(()=>{Nd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=fr(0)),this.motionValue.jump(0,!1),this.currentAnimation=O5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(A6),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:y,latestValues:g}=d;if(!(!h||!p||!y)){if(this!==d&&this.layout&&y&&I5(this.options.animationType,this.layout.layoutBox,y.layoutBox)){p=this.target||ho();const x=li(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=li(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}sa(h,p),Td(h,g),Lc(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new T6),this.sharedNodes.get(d).add(h);const y=h.options.initialPromotionConfig;h.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const y=this.getStack();y&&y.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const y={};p.z&&cm("z",d,y,this.animationValues);for(let g=0;g<lm.length;g++)cm(`rotate${lm[g]}`,d,y,this.animationValues),cm(`skew${lm[g]}`,d,y,this.animationValues);d.render();for(const g in y)d.setStaticValue(g,y[g]),this.animationValues&&(this.animationValues[g]=y[g]);d.scheduleRender()}applyProjectionStyles(d,h){var S,j;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=Ad(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=Ad(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!Dr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=y.animationValues||y.latestValues;this.applyTransformsToTarget();let x=v6(this.projectionDeltaWithTransform,this.treeScale,g);p&&(x=p(g,x)),d.transform=x;const{x:b,y:w}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,y.animationValues?d.opacity=y===this?(j=(S=g.opacity)!=null?S:this.latestValues.opacity)!=null?j:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=y===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const k in ip){if(g[k]===void 0)continue;const{correct:E,applyTo:I,isCSSVariable:N}=ip[k],M=x==="none"?g[k]:E(g[k],y);if(I){const X=I.length;for(let F=0;F<X;F++)d[I[F]]=M}else N?this.options.visualElement.renderState.vars[k]=M:d[k]=M}this.options.layoutId&&(d.pointerEvents=y===this?Ad(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(N1),this.root.sharedNodes.clear()}}}function D6(e){e.updateLayout()}function R6(e){var i;const n=((i=e.resumeFrom)==null?void 0:i.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=e.layout,{animationType:u}=e.options,d=n.source!==e.layout.source;if(u==="size")ma(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=li(b);b.min=a[x].min,b.max=b.min+w});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";ap(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else I5(u,n.layoutBox,a)&&ma(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=li(a[x]);b.max=b.min+w,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[x].max=e.relativeTarget[x].min+w)});const h=wl();Lc(h,a,n.layoutBox);const p=wl();d?Lc(p,e.applyTransform(c,!0),n.measuredBox):Lc(p,a,n.layoutBox);const y=!D5(h);let g=!1;if(!e.resumeFrom){const x=e.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:w}=x;if(b&&w){const S=e.options.layoutAnchor||void 0,j=ho();Pd(j,n.layoutBox,b.layoutBox,S);const k=ho();Pd(k,a,w.layoutBox,S),R5(j,k)||(g=!0),x.options.layoutRoot&&(e.relativeTarget=k,e.relativeTargetOrigin=j,e.relativeParent=x)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:g})}else if(e.isLead()){const{onExitComplete:a}=e.options;a&&a()}e.options.transition=void 0}function B6(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function L6(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function O6(e){e.clearSnapshot()}function N1(e){e.clearMeasurements()}function z6(e){e.isLayoutDirty=!0,e.updateLayout()}function D1(e){e.isLayoutDirty=!1}function $6(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function I6(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function R1(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function P6(e){e.resolveTargetDelta()}function H6(e){e.calcProjection()}function U6(e){e.resetSkewAndRotation()}function V6(e){e.removeLeadSnapshot()}function B1(e,n,i){e.translate=ks(n.translate,0,i),e.scale=ks(n.scale,1,i),e.origin=n.origin,e.originPoint=n.originPoint}function L1(e,n,i,a){e.min=ks(n.min,i.min,a),e.max=ks(n.max,i.max,a)}function Y6(e,n,i,a){L1(e.x,n.x,i.x,a),L1(e.y,n.y,i.y,a)}function W6(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const F6={duration:.45,ease:[.4,0,.1,1]},O1=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),z1=O1("applewebkit/")&&!O1("chrome/")?Math.round:qi;function $1(e){e.min=z1(e.min),e.max=z1(e.max)}function X6(e){$1(e.x),$1(e.y)}function I5(e,n,i){return e==="position"||e==="preserve-aspect"&&!p6(j1(n),j1(i),.2)}function G6(e){var n;return e!==e.root&&((n=e.scroll)==null?void 0:n.wasRoot)}const q6=$5({attachResizeListener:(e,n)=>Uc(e,"resize",n),measureScroll:()=>{var e,n;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),um={current:void 0},P5=$5({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!um.current){const e=new q6({});e.mount(window),e.setOptions({layoutScroll:!0}),um.current=e}return um.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Zd=_.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function I1(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function K6(...e){return n=>{let i=!1;const a=e.map(c=>{const u=I1(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():I1(e[c],null)}}}}function Q6(...e){return _.useCallback(K6(...e),e)}class Z6 extends _.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(kd(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=kd(a)&&a.offsetWidth||0,u=kd(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function J6({children:e,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,w;const d=_.useId(),h=_.useRef(null),p=_.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=_.useContext(Zd),g=(w=(b=e.props)==null?void 0:b.ref)!=null?w:e==null?void 0:e.ref,x=Q6(h,g);return _.useInsertionEffect(()=>{const{width:S,height:j,top:k,left:E,right:I,bottom:N}=p.current;if(n||u===!1||!h.current||!S||!j)return;const M=i==="left"?`left: ${E}`:`right: ${I}`,X=a==="bottom"?`bottom: ${N}`:`top: ${k}`;h.current.dataset.motionPopId=d;const F=document.createElement("style");y&&(F.nonce=y);const U=c!=null?c:document.head;return U.appendChild(F),F.sheet&&F.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${j}px !important;
            ${M}px !important;
            ${X}px !important;
          }
        `),()=>{var K;(K=h.current)==null||K.removeAttribute("data-motion-pop-id"),U.contains(F)&&U.removeChild(F)}},[n]),l.jsx(Z6,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?e:_.cloneElement(e,{ref:x})})}const ek=({children:e,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:y})=>{const g=Yc(tk),x=_.useId();let b=!0,w=_.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:S=>{g.set(S,!0);for(const j of g.values())if(!j)return;a&&a()},register:S=>(g.set(S,!1),()=>g.delete(S))}),[i,g,a]);return u&&b&&(w={...w}),_.useMemo(()=>{g.forEach((S,j)=>g.set(j,!1))},[i]),_.useEffect(()=>{!i&&!g.size&&a&&a()},[i]),e=l.jsx(J6,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:y,children:e}),l.jsx(Xd.Provider,{value:w,children:e})};function tk(){return new Map}function H5(e=!0){const n=_.useContext(Xd);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=_.useId();_.useEffect(()=>{if(e)return c(u)},[e]);const d=_.useCallback(()=>e&&a&&a(u),[u,a,e]);return!i&&a?[!1,d]:[!0]}const nd=e=>e.key||"";function P1(e){const n=[];return _.Children.forEach(e,i=>{_.isValidElement(i)&&n.push(i)}),n}const Jd=({children:e,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:y})=>{const[g,x]=H5(d),b=_.useMemo(()=>P1(e),[e]),w=d&&!g?[]:b.map(nd),S=_.useRef(!0),j=_.useRef(b),k=Yc(()=>new Map),E=_.useRef(new Set),[I,N]=_.useState(b),[M,X]=_.useState(b);kp(()=>{S.current=!1,j.current=b;for(let K=0;K<M.length;K++){const de=nd(M[K]);w.includes(de)?(k.delete(de),E.current.delete(de)):k.get(de)!==!0&&k.set(de,!1)}},[M,w.length,w.join("-")]);const F=[];if(b!==I){let K=[...b];for(let de=0;de<M.length;de++){const pe=M[de],ye=nd(pe);w.includes(ye)||(K.splice(de,0,pe),F.push(pe))}return u==="wait"&&F.length&&(K=F),X(P1(K)),N(b),null}const{forceRender:U}=_.useContext(Cp);return l.jsx(l.Fragment,{children:M.map(K=>{const de=nd(K),pe=d&&!g?!1:b===M||w.includes(de),ye=()=>{if(E.current.has(de))return;if(k.has(de))E.current.add(de),k.set(de,!0);else return;let Le=!0;k.forEach(Ze=>{Ze||(Le=!1)}),Le&&(U==null||U(),X(j.current),d&&(x==null||x()),a&&a())};return l.jsx(ek,{isPresent:pe,initial:!S.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:y,onExitComplete:pe?void 0:ye,anchorX:h,anchorY:p,children:K},de)})})},U5=_.createContext({strict:!1}),H1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let U1=!1;function nk(){if(U1)return;const e={};for(const n in H1)e[n]={isEnabled:i=>H1[n].some(a=>!!i[a])};h5(e),U1=!0}function V5(){return nk(),UC()}function sk(e){const n=V5();for(const i in e)n[i]={...n[i],...e[i]};h5(n)}const ok=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Hd(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||ok.has(e)}let Y5=e=>!Hd(e);function ik(e){typeof e=="function"&&(Y5=n=>n.startsWith("on")?!Hd(n):e(n))}try{ik(require("@emotion/is-prop-valid").default)}catch{}function ak(e,n,i){const a={};for(const c in e)c==="values"&&typeof e.values=="object"||Mo(e[c])||(Y5(c)||i===!0&&Hd(c)||!n&&!Hd(c)||e.draggable&&c.startsWith("onDrag"))&&(a[c]=e[c]);return a}const ef=_.createContext({});function rk(e,n){if(Qd(e)){const{initial:i,animate:a}=e;return{initial:i===!1||Hc(i)?i:void 0,animate:Hc(a)?a:void 0}}return e.inherit!==!1?n:{}}function lk(e){const{initial:n,animate:i}=rk(e,_.useContext(ef));return _.useMemo(()=>({initial:n,animate:i}),[V1(n),V1(i)])}function V1(e){return Array.isArray(e)?e.join(" "):e}const Zp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function W5(e,n,i){for(const a in n)!Mo(n[a])&&!v5(a,i)&&(e[a]=n[a])}function ck({transformTemplate:e},n){return _.useMemo(()=>{const i=Zp();return Kp(i,n,e),Object.assign({},i.vars,i.style)},[n])}function uk(e,n){const i=e.style||{},a={};return W5(a,i,e),Object.assign(a,ck(e,n)),a}function dk(e,n){const i={},a=uk(e,n);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=a,i}const F5=()=>({...Zp(),attrs:{}});function fk(e,n,i,a){const c=_.useMemo(()=>{const u=F5();return S5(u,n,k5(a),e.transformTemplate,e.style),{...u.attrs,style:{...u.style}}},[n]);if(e.style){const u={};W5(u,e.style,e),c.style={...u,...c.style}}return c}const hk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Jp(e){return typeof e!="string"||e.includes("-")?!1:!!(hk.indexOf(e)>-1||/[A-Z]/u.test(e))}function mk(e,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Jp(e))?fk:dk)(n,a,c,e),y=ak(n,typeof e=="string",u),g=e!==_.Fragment?{...y,...p,ref:i}:{},{children:x}=n,b=_.useMemo(()=>Mo(x)?x.get():x,[x]);return _.createElement(e,{...g,children:b})}function pk({scrapeMotionValuesFromProps:e,createRenderState:n},i,a,c){return{latestValues:_k(i,a,c,e),renderState:n()}}function _k(e,n,i,a){const c={},u=a(e,{});for(const b in u)c[b]=Ad(u[b]);let{initial:d,animate:h}=e;const p=Qd(e),y=d5(e);n&&y&&!p&&e.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let g=i?i.initial===!1:!1;g=g||d===!1;const x=g?h:d;if(x&&typeof x!="boolean"&&!Kd(x)){const b=Array.isArray(x)?x:[x];for(let w=0;w<b.length;w++){const S=Hp(e,b[w]);if(S){const{transitionEnd:j,transition:k,...E}=S;for(const I in E){let N=E[I];if(Array.isArray(N)){const M=g?N.length-1:0;N=N[M]}N!==null&&(c[I]=N)}for(const I in j)c[I]=j[I]}}}return c}const X5=e=>(n,i)=>{const a=_.useContext(ef),c=_.useContext(Xd),u=()=>pk(e,n,a,c);return i?u():Yc(u)},gk=X5({scrapeMotionValuesFromProps:Qp,createRenderState:Zp}),yk=X5({scrapeMotionValuesFromProps:j5,createRenderState:F5}),xk=Symbol.for("motionComponentSymbol");function bk(e,n,i){const a=_.useRef(i);_.useInsertionEffect(()=>{a.current=i});const c=_.useRef(null);return _.useCallback(u=>{var h;u&&((h=e.onMount)==null||h.call(e,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const G5=_.createContext({});function xl(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function vk(e,n,i,a,c,u){var N,M;const{visualElement:d}=_.useContext(ef),h=_.useContext(U5),p=_.useContext(Xd),y=_.useContext(Zd),g=y.reducedMotion,x=y.skipAnimations,b=_.useRef(null),w=_.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(e,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g,skipAnimations:x,isSVG:u}),w.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const S=b.current,j=_.useContext(G5);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&wk(b.current,i,c,j);const k=_.useRef(!1);_.useInsertionEffect(()=>{S&&k.current&&S.update(i,p)});const E=i[Jb],I=_.useRef(!!E&&typeof window<"u"&&!((N=window.MotionHandoffIsComplete)!=null&&N.call(window,E))&&((M=window.MotionHasOptimisedAnimation)==null?void 0:M.call(window,E)));return kp(()=>{w.current=!0,S&&(k.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),I.current&&S.animationState&&S.animationState.animateChanges())}),_.useEffect(()=>{S&&(!I.current&&S.animationState&&S.animationState.animateChanges(),I.current&&(queueMicrotask(()=>{var X;(X=window.MotionHandoffMarkAsComplete)==null||X.call(window,E)}),I.current=!1),S.enteringChildren=void 0)}),S}function wk(e,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:y,layoutAnchor:g,layoutCrossfade:x}=n;e.projection=new i(e.latestValues,n["data-framer-portal-id"]?void 0:q5(e.parent)),e.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&xl(h),visualElement:e,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:y,layoutAnchor:g})}function q5(e){if(e)return e.options.allowProjection!==!1?e.projection:q5(e.parent)}function dm(e,{forwardMotionProps:n=!1,type:i}={},a,c){var y,g;a&&sk(a);const u=i?i==="svg":Jp(e),d=u?yk:gk;function h(x,b){let w;const S={..._.useContext(Zd),...x,layoutId:Sk(x)},{isStatic:j}=S,k=lk(x),E=d(x,j);if(!j&&typeof window<"u"){Ck();const I=kk(S);w=I.MeasureLayout,k.visualElement=vk(e,E,S,c,I.ProjectionNode,u)}return l.jsxs(ef.Provider,{value:k,children:[w&&k.visualElement?l.jsx(w,{visualElement:k.visualElement,...S}):null,mk(e,x,bk(E,k.visualElement,b),E,j,n,u)]})}h.displayName=`motion.${typeof e=="string"?e:`create(${(g=(y=e.displayName)!=null?y:e.name)!=null?g:""})`}`;const p=_.forwardRef(h);return p[xk]=e,p}function Sk({layoutId:e}){const n=_.useContext(Cp).id;return n&&e!==void 0?n+"-"+e:e}function Ck(e,n){_.useContext(U5).strict}function kk(e){const n=V5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(e)||a!=null&&a.isEnabled(e)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function jk(e,n){if(typeof Proxy>"u")return dm;const i=new Map,a=(u,d)=>dm(u,d,e,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,dm(d,void 0,e,n)),i.get(d))})}const Mk=(e,n)=>{var a;return((a=n.isSVG)!=null?a:Jp(e))?new M5(n):new w5(n,{allowProjection:e!==_.Fragment})};class Ek extends hr{constructor(n){super(n),n.animationState||(n.animationState=c6(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Kd(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let Tk=0;class Ak extends hr{constructor(){super(...arguments),this.id=Tk++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=$r(this.node,d,h);if(p){const{transition:y,transitionEnd:g,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const Nk={animation:{Feature:Ek},exit:{Feature:Ak}};function Gc(e){return{point:{x:e.pageX,y:e.pageY}}}const Dk=e=>n=>Xp(n)&&e(n,Gc(n));function Oc(e,n,i,a){return Uc(e,n,Dk(i),a)}const K5=({current:e})=>e?e.ownerDocument.defaultView:null,Y1=(e,n)=>Math.abs(e-n);function Rk(e,n){const i=Y1(e.x,n.x),a=Y1(e.y,n.y);return Math.sqrt(i**2+a**2)}const W1=new Set(["auto","scroll"]);class Q5{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=sd(this.lastRawMoveEventInfo,this.transformPagePoint));const w=fm(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,j=Rk(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!j)return;const{point:k}=w,{timestamp:E}=Wo;this.history.push({...k,timestamp:E});const{onStart:I,onMove:N}=this.handlers;S||(I&&I(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),N&&N(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=sd(S,this.transformPagePoint),_s.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:j,onSessionEnd:k,resumeAnimation:E}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&E&&E(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const I=fm(w.type==="pointercancel"?this.lastMoveEventInfo:sd(S,this.transformPagePoint),this.history);this.startEvent&&j&&j(w,I),k&&k(w,I)},!Xp(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Gc(n),y=sd(p,this.transformPagePoint),{point:g}=y,{timestamp:x}=Wo;this.history=[{...g,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,fm(y,this.history)),this.removeListeners=Wc(Oc(this.contextWindow,"pointermove",this.handlePointerMove),Oc(this.contextWindow,"pointerup",this.handlePointerUp),Oc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(W1.has(a.overflowX)||W1.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),_s.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),za(this.updatePoint)}}function sd(e,n){return n?{point:n(e.point)}:e}function F1(e,n){return{x:e.x-n.x,y:e.y-n.y}}function fm({point:e},n){return{point:e,delta:F1(e,Z5(n)),offset:F1(e,Bk(n)),velocity:Lk(n,.1)}}function Bk(e){return e[0]}function Z5(e){return e[e.length-1]}function Lk(e,n){if(e.length<2)return{x:0,y:0};let i=e.length-1,a=null;const c=Z5(e);for(;i>=0&&(a=e[i],!(c.timestamp-a.timestamp>wi(n)));)i--;if(!a)return{x:0,y:0};a===e[0]&&e.length>2&&c.timestamp-a.timestamp>wi(n)*2&&(a=e[1]);const u=Gi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function Ok(e,{min:n,max:i},a){return n!==void 0&&e<n?e=a?ks(n,e,a.min):Math.max(e,n):i!==void 0&&e>i&&(e=a?ks(i,e,a.max):Math.min(e,i)),e}function X1(e,n,i){return{min:n!==void 0?e.min+n:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function zk(e,{top:n,left:i,bottom:a,right:c}){return{x:X1(e.x,i,c),y:X1(e.y,n,a)}}function G1(e,n){let i=n.min-e.min,a=n.max-e.max;return n.max-n.min<e.max-e.min&&([i,a]=[a,i]),{min:i,max:a}}function $k(e,n){return{x:G1(e.x,n.x),y:G1(e.y,n.y)}}function Ik(e,n){let i=.5;const a=li(e),c=li(n);return c>a?i=jl(n.min,n.max-a,e.min):a>c&&(i=jl(e.min,e.max-c,n.min)),ga(0,1,i)}function Pk(e,n){const i={};return n.min!==void 0&&(i.min=n.min-e.min),n.max!==void 0&&(i.max=n.max-e.min),i}const rp=.35;function Hk(e=rp){return e===!1?e=0:e===!0&&(e=rp),{x:q1(e,"left","right"),y:q1(e,"top","bottom")}}function q1(e,n,i){return{min:K1(e,n),max:K1(e,i)}}function K1(e,n){return typeof e=="number"?e:e[n]||0}const Uk=new WeakMap;class Vk{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ho(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(Gc(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:w,dragPropagation:S,onDragStart:j}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=xC(w),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ma(E=>{let I=this.getAxisMotionValue(E).get()||0;if(_a.test(I)){const{projection:N}=this.visualElement;if(N&&N.layout){const M=N.layout.layoutBox[E];M&&(I=li(M)*(parseFloat(I)/100))}}this.originPoint[E]=I}),j&&_s.update(()=>j(x,b),!1,!0),Zm(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:j,onDrag:k}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:E}=b;if(S&&this.currentDirection===null){this.currentDirection=Wk(E),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",b.point,E),this.updateAxis("y",b.point,E),this.visualElement.render(),k&&_s.update(()=>k(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new Q5(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:K5(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&_s.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!od(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=Ok(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&xl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=zk(a.layoutBox,n):this.constraints=!1,this.elastic=Hk(i),c!==this.constraints&&!xl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&ma(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=Pk(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!xl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=FC(a,c.root,this.visualElement.getTransformPagePoint());let d=$k(c.layout.layoutBox,u);if(i){const h=i(VC(d));this.hasMutatedConstraints=!!h,h&&(d=_5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},y=ma(g=>{if(!od(g,i,this.currentDirection))return;let x=p&&p[g]||{};(d===!0||d===g)&&(x={min:0,max:0});const b=c?200:1e6,w=c?40:1e7,S={type:"inertia",velocity:a?n[g]:0,bounceStiffness:b,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(g,S)});return Promise.all(y).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Zm(this.visualElement,n),a.start(Pp(n,a,0,i,this.visualElement,!1))}stopAnimation(){ma(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){ma(i=>{const{drag:a}=this.getProps();if(!od(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-ks(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!xl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};ma(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=Ik({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),ma(d=>{if(!od(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:y}=this.constraints[d];h.set(ks(p,y,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Uk.set(this.visualElement,this);const n=this.visualElement.current,i=Oc(n,"pointerdown",y=>{const{drag:g,dragListener:x=!0}=this.getProps(),b=y.target,w=b!==n&&kC(b);g&&x&&!w&&this.start(y)});let a;const c=()=>{const{dragConstraints:y}=this.getProps();xl(y)&&y.current&&(this.constraints=this.resolveRefConstraints(),a||(a=Yk(n,y.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),_s.read(c);const h=Uc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:g})=>{this.isDragging&&g&&(ma(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=y[x].translate,b.set(b.get()+y[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=rp,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function Q1(e){let n=!0;return()=>{if(n){n=!1;return}e()}}function Yk(e,n,i){const a=o1(e,Q1(i)),c=o1(n,Q1(i));return()=>{a(),c()}}function od(e,n,i){return(n===!0||n===e)&&(i===null||i===e)}function Wk(e,n=10){let i=null;return Math.abs(e.y)>n?i="y":Math.abs(e.x)>n&&(i="x"),i}class Fk extends hr{constructor(n){super(n),this.removeGroupControls=qi,this.removeListeners=qi,this.controls=new Vk(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qi}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const hm=e=>(n,i)=>{e&&_s.update(()=>e(n,i),!1,!0)};class Xk extends hr{constructor(){super(...arguments),this.removePointerDownListener=qi}onPointerDown(n){this.session=new Q5(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:K5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:hm(n),onStart:hm(i),onMove:hm(a),onEnd:(u,d)=>{delete this.session,c&&_s.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=Oc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let mm=!1;class Gk extends _.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),mm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Nd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),mm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||_s.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Fp.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;mm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function J5(e){const[n,i]=H5(),a=_.useContext(Cp);return l.jsx(Gk,{...e,layoutGroup:a,switchLayoutGroup:_.useContext(G5),isPresent:n,safeToRemove:i})}const qk={pan:{Feature:Xk},drag:{Feature:Fk,ProjectionNode:P5,MeasureLayout:J5}};function Z1(e,n,i){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&_s.postRender(()=>u(n,Gc(n)))}class Kk extends hr{mount(){const{current:n}=this.node;n&&(this.unmount=vC(n,(i,a)=>(Z1(this.node,a,"Start"),c=>Z1(this.node,c,"End"))))}unmount(){}}class Qk extends hr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Wc(Uc(this.node.current,"focus",()=>this.onFocus()),Uc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function J1(e,n,i){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&_s.postRender(()=>u(n,Gc(n)))}class Zk extends hr{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=MC(n,(c,u)=>(J1(this.node,u,"Start"),(d,{success:h})=>J1(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const lp=new WeakMap,pm=new WeakMap,Jk=e=>{const n=lp.get(e.target);n&&n(e)},e3=e=>{e.forEach(Jk)};function t3({root:e,...n}){const i=e||document;pm.has(i)||pm.set(i,{});const a=pm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(e3,{root:e,...n})),a[c]}function n3(e,n,i){const a=t3(n);return lp.set(e,i),a.observe(e),()=>{lp.delete(e),a.unobserve(e)}}const s3={some:0,all:1};class o3 extends hr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:s3[c]},h=y=>{const{isIntersecting:g}=y;if(this.isInView===g||(this.isInView=g,u&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),w=g?x:b;w&&w(y)};this.stopObserver=n3(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(i3(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function i3({viewport:e={}},{viewport:n={}}={}){return i=>e[i]!==n[i]}const a3={inView:{Feature:o3},tap:{Feature:Zk},focus:{Feature:Qk},hover:{Feature:Kk}},r3={layout:{ProjectionNode:P5,MeasureLayout:J5}},l3={...Nk,...a3,...qk,...r3},ci=jk(l3,Mk);function cp(e){const n=Yc(()=>fr(e)),{isStatic:i}=_.useContext(Zd);if(i){const[,a]=_.useState(e);_.useEffect(()=>n.on("change",a),[])}return n}function e2(e,n){const i=cp(n()),a=()=>i.set(n());return a(),kp(()=>{const c=()=>_s.preRender(a,!1,!0),u=e.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),za(a)}}),i}function c3(e){Bc.current=[],e();const n=e2(Bc.current,e);return Bc.current=void 0,n}function id(e,n,i,a){if(typeof e=="function")return c3(e);const u=typeof n=="function"?n:OC(n,i,a),d=Array.isArray(e)?ex(e,u):ex([e],([p])=>u(p)),h=Array.isArray(e)?void 0:e.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function ex(e,n){const i=Yc(()=>[]);return e2(e,()=>{i.length=0;const a=e.length;for(let c=0;c<a;c++)i[c]=e[c].get();return n(i)})}function e_(e){return typeof e=="object"&&!Array.isArray(e)}function t2(e,n,i,a){return e==null?[]:typeof e=="string"&&e_(n)?Wp(e,i,a):e instanceof NodeList?Array.from(e):Array.isArray(e)?e.filter(c=>c!=null):[e]}function u3(e,n,i){return e*(n+1)}function tx(e,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,e+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:e}function d3(e,n,i){for(let a=0;a<e.length;a++){const c=e[a];c.at>n&&c.at<i&&(kl(e,c),a--)}}function f3(e,n,i,a,c,u){d3(e,c,u);for(let d=0;d<n.length;d++)e.push({value:n[d],at:ks(c,u,a[d]),easing:wb(i,d)})}function h3(e,n){for(let i=0;i<e.length;i++)e[i]=e[i]/(n+1)}function m3(e,n){return e.at===n.at?e.value===null?1:n.value===null?-1:0:e.at-n.at}const p3="easeInOut";function _3(e,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},y=new Map;let g=0,x=0,b=0;for(let w=0;w<e.length;w++){const S=e[w];if(typeof S=="string"){y.set(S,x);continue}else if(!Array.isArray(S)){y.set(S.name,tx(x,S.at,g,y));continue}let[j,k,E={}]=S;E.at!==void 0&&(x=tx(x,E.at,g,y));let I=0;const N=(M,X,F,U=0,K=0)=>{const de=g3(M),{delay:pe=0,times:ye=$b(de),type:Le=n.type||"keyframes",repeat:Ze,repeatType:ae,repeatDelay:ie=0,...B}=X;let{ease:se=n.ease||"easeOut",duration:H}=X;const _e=typeof pe=="function"?pe(U,K):pe,ke=de.length,z=$p(Le)?Le:c==null?void 0:c[Le||"keyframes"];if(ke<=2&&z){let Re=100;if(ke===2&&b3(de)){const nt=de[1]-de[0];Re=Math.abs(nt)}const ge={...n,...B};H!==void 0&&(ge.duration=wi(H));const Pe=Bb(ge,Re,z);se=Pe.ease,H=Pe.duration}H!=null||(H=u);const ce=x+_e;ye.length===1&&ye[0]===0&&(ye[1]=1);const ee=ye.length-de.length;if(ee>0&&zb(ye,ee),de.length===1&&de.unshift(null),Ze){H=u3(H,Ze);const Re=[...de],ge=[...ye];se=Array.isArray(se)?[...se]:[se];const Pe=[...se];for(let nt=0;nt<Ze;nt++){de.push(...Re);for(let Xe=0;Xe<Re.length;Xe++)ye.push(ge[Xe]+(nt+1)),se.push(Xe===0?"linear":wb(Pe,Xe-1))}h3(ye,Ze)}const we=ce+H;f3(F,de,se,ye,ce,we),I=Math.max(_e+H,I),b=Math.max(we,b)};if(Mo(j)){const M=nx(j,h);N(k,E,sx("default",M))}else{const M=t2(j,k,a,p),X=M.length;for(let F=0;F<X;F++){k=k,E=E;const U=M[F],K=nx(U,h);for(const de in k)N(k[de],y3(E,de),sx(de,K),F,X)}}g=x,x+=I}return h.forEach((w,S)=>{for(const j in w){const k=w[j];k.sort(m3);const E=[],I=[],N=[];for(let U=0;U<k.length;U++){const{at:K,value:de,easing:pe}=k[U];E.push(de),I.push(jl(0,b,K)),N.push(pe||"easeOut")}I[0]!==0&&(I.unshift(0),E.unshift(E[0]),N.unshift(p3)),I[I.length-1]!==1&&(I.push(1),E.push(null)),d.has(S)||d.set(S,{keyframes:{},transition:{}});const M=d.get(S);M.keyframes[j]=E;const{type:X,...F}=n;M.transition[j]={...F,duration:b,ease:N,times:I,...i}}}),d}function nx(e,n){return!n.has(e)&&n.set(e,{}),n.get(e)}function sx(e,n){return n[e]||(n[e]=[]),n[e]}function g3(e){return Array.isArray(e)?e:[e]}function y3(e,n){return e&&e[n]?{...e,...e[n]}:{...e}}const x3=e=>typeof e=="number",b3=e=>e.every(x3);function v3(e){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=qd(e)&&!u5(e)?new M5(n):new w5(n);i.mount(e),Pc.set(e,i)}function w3(e){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new JC(n);i.mount(e),Pc.set(e,i)}function S3(e,n){return Mo(e)||typeof e=="number"||typeof e=="string"&&!e_(n)}function n2(e,n,i,a){const c=[];if(S3(e,n))c.push(O5(e,e_(n)&&n.default||n,i&&(i.default||i)));else{if(e==null)return c;const u=t2(e,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],y=p instanceof Element?v3:w3;Pc.has(p)||y(p);const g=Pc.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Vp(g,{...n,transition:x},{}))}}return c}function C3(e,n,i){const a=[],c=e.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=fr(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return _3(c,n,i,{spring:Ic}).forEach(({keyframes:d,transition:h},p)=>{a.push(...n2(p,d,h))}),a}function k3(e){return Array.isArray(e)&&e.some(Array.isArray)}function j3(e={}){const{scope:n,reduceMotion:i}=e;function a(c,u,d){let h=[],p;if(k3(c)){const{onComplete:g,...x}=u||{};typeof g=="function"&&(p=g),h=C3(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:g,...x}=d||{};typeof g=="function"&&(p=g),h=n2(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const y=new U4(h);return p&&y.finished.then(p),n&&(n.animations.push(y),y.finished.then(()=>{kl(n.animations,y)})),y}return a}const ox=j3(),Oa=(e,n)=>!e||!n?!1:e===n||e.startsWith(n)||n.startsWith(e);function ix(e,n){var a;const i=[...(a=e.childShas)!=null?a:[]];return i.includes(n)||i.push(n),{...e,childShas:i}}function M3(e,n,i,a,c,u){if(!i)return{directCommits:e,branchCommitPreviews:n};const d=e.map(p=>Oa(p.fullSha,i)||Oa(p.sha,i)?ix(p,a):p),h=Object.fromEntries(Object.entries(n).map(([p,y])=>[p,y.map(g=>(p===c||p===u)&&(Oa(g.fullSha,i)||Oa(g.sha,i))?ix(g,a):g)]));return{directCommits:d,branchCommitPreviews:h}}function E3(e,n,i,a){if(!e)return null;const c=d=>Oa(d,e);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(y=>c(y.fullSha)||c(y.sha)))return d;return null}function T3(e,n,i,a,c,u,d=!1){const h=e.baseSha,p=`STASH:${e.index}`,y=`Stash ${e.index+1}`,g=E3(h,i,a,u),x=(()=>{var F;if(!h)return null;const X=i.find(U=>Oa(U.fullSha,h)||Oa(U.sha,h));if(X!=null&&X.date)return X.date;if(g&&!d){const U=((F=a[g])!=null?F:[]).find(K=>Oa(K.fullSha,h)||Oa(K.sha,h));if(U!=null&&U.date)return U.date}return null})(),b=x?new Date(x).getTime():Number.NaN,w=Date.now(),S=Number.isFinite(b)?Math.max(w,b+1+e.index):w+e.index,j=new Date(S).toISOString(),k=e.message.trim(),E={fullSha:p,sha:y,parentSha:h,clusterKey:null,childShas:[],message:k||y,author:"You",date:j,kind:"stash"},I=`Stash ${e.index+1}`,N={name:I,commitsAhead:1,commitsBehind:0,lastCommitDate:j,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:p,divergedFromSha:h!=null?h:void 0,parentBranch:g||u},M=M3(i,a,h,p,I,u);return{branches:[N,...n],directCommits:M.directCommits,branchCommitPreviews:{...M.branchCommitPreviews,[I]:[E]},branchUniqueAheadCounts:{...c,[I]:1}}}function s2(e,n,i,a,c,u,d=!1){const h=[...e].sort((y,g)=>y.index-g.index);let p={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const y of h)p=T3(y,p.branches,p.directCommits,p.branchCommitPreviews,p.branchUniqueAheadCounts,u,d);return p}function up({branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:y,manuallyOpenedClumps:g=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:w=null,orientation:S="horizontal"}){var U,K;const j=s2(y,e,i,u,h,c,(U=p==null?void 0:p.hasUncommittedChanges)!=null?U:!1);let k=j.branches,E=j.directCommits,I=j.branchCommitPreviews,N=j.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const de=p.headSha||p.parentSha||null,pe=(H,_e)=>!H||!_e?!1:H===_e||H.startsWith(_e)||_e.startsWith(H),ye=p.branchName?k.find(H=>H.name===p.branchName):void 0,Le=(()=>{var _e;if(!de)return null;const H=E.find(ke=>pe(ke.fullSha,de)||pe(ke.sha,de));if(H!=null&&H.date)return H.date;if(ye){const ke=((_e=I[ye.name])!=null?_e:[]).find(z=>pe(z.fullSha,de)||pe(z.sha,de));if(ke!=null&&ke.date)return ke.date}return null})(),Ze=Le?new Date(Le).getTime():Number.NaN,ae=Date.now(),ie=Number.isFinite(Ze)?Math.max(ae,Ze+1):ae,B=new Date(ie).toISOString(),se={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:de,message:"Local uncommitted changes",author:"You",date:B,kind:"uncommitted"};ye?(k=k.map(H=>H.name===ye.name?{...H,commitsAhead:H.commitsAhead+1,unpushedCommits:H.unpushedCommits+1,lastCommitDate:B,headSha:"WORKING_TREE"}:H),I={...I,[ye.name]:[se,...I[ye.name]||[]]},N={...N,[ye.name]:Math.max(0,(K=Object.prototype.hasOwnProperty.call(N,ye.name)?N[ye.name]:ye.commitsAhead)!=null?K:0)+1}):I={...I,[c]:[se,...I[c]||[]]}}const M={...d};M[c]=null;const X=vp(k,c,I,M),F=wp({lanes:X,branches:k,mergeNodes:n,directCommits:E,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:I,branchParentByName:M,branchUniqueAheadCounts:N,manuallyOpenedClumps:g,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:w,checkedOutRef:p,orientation:S});return{enrichedBranches:k,enrichedBranchCommitPreviews:I,enrichedBranchUniqueAheadCounts:N,enrichedDirectCommits:E,sharedGridLayoutModel:F}}const ax="git-visualizer:expanded-projects",rx="git-visualizer:expanded-branches";function A3(e,n){var u;const i=new Map(e.map(d=>[d.name,d])),a=new Map;for(const d of e){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const y=(u=a.get(h))!=null?u:[];y.push(d.name),a.set(h,y)}const c=(d,h)=>{var g,x,b,w;const p=new Date((x=(g=i.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((w=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-y};for(const[d,h]of a.entries())h.sort(c);return a}function N3(e,n,i){const a=new Map(e.map(d=>[d.name,d])),c=(d,h)=>{var g,x,b,w;const p=new Date((x=(g=a.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((w=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-y},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return e.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function D3(e,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const y of d){const g=[...h,y];if(y===i.branchName){for(const x of g)c.add(x);return!0}if(u((p=n.get(y))!=null?p:[],g))return!0}return!1};return u(e,[]),c}function _m(e,n){if(!e||!n)return!1;const i=u=>{const d=u.replace(/\\/g,"/").replace(/\/+$/,""),h=new Set([d]);return d.startsWith("/private/")&&h.add(d.slice(8)),Array.from(h)},a=i(e),c=i(n);for(const u of a)for(const d of c)if(u===d||u.toLowerCase()===d.toLowerCase())return!0;return!1}function dp({branchName:e,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:x,showCommits:b,getMergeTargetLabels:w,sourceBranchName:S,clusterKeyByCommitId:j,unpushedCommitShasByBranch:k,isGridClusterOpen:E,onToggleGridCluster:I,onSelectCommit:N,onSelectBranch:M,isActiveProject:X}){var we,Re;if(x.has(e))return null;const F=a.get(e);if(!F)return null;const U=(we=u.get(e))!=null?we:[],K=U.length>0,de=_.useMemo(()=>{var ge;return[...(ge=c[e])!=null?ge:[]]},[c,e]),pe=b&&de.length>0,ye=b,Le=K||pe,Ze=h.has(e),ae=ye?de:[],ie=Ze&&ae.length>0,B=y===e||g!=null&&F.headSha===g,se=new Set(x);se.add(e);const H="top-[-0.45rem] h-5 w-[10px]",_e="rounded-bl-[7px]",ke="left-[0.65rem]",z=new Map,ce=[];for(const ge of U){const Pe=d.get(ge);if(Pe){const nt=ae.findIndex(Xe=>Li(Xe.fullSha,Pe)||Li(Xe.sha,Pe));if(nt>=0){const Xe=(Re=z.get(nt))!=null?Re:[];Xe.push(ge),z.set(nt,Xe);continue}}ce.push(ge)}const ee=_.useMemo(()=>{if(!b||ae.length===0)return[];const ge=[];let Pe=[],nt=null;const Xe=()=>{if(Pe.length===0)return;const yt=Pe[Pe.length-1],Tt=`sidebar-single-${e}-${yt.fullSha}`;ge.push({key:nt!=null?nt:Tt,commits:Pe,count:Pe.length,lead:yt}),Pe=[],nt=null};return ae.forEach(yt=>{var Ot,_t;const Tt=(Ot=j.get(`${e}:${yt.fullSha}`))!=null?Ot:null,kt=((_t=k[e])!=null?_t:[]).includes(yt.fullSha),ut=`${Tt!=null?Tt:`sidebar-single-${e}-${yt.fullSha}`}:${kt?"unpushed":"pushed"}`;if(Pe.length===0){Pe=[yt],nt=ut;return}if(ut===nt){Pe.push(yt);return}Xe(),Pe=[yt],nt=ut}),Xe(),ge},[e,b,ae,j,k]);return l.jsxs("li",{className:xn("relative flex flex-col gap-1",n>0?"pl-4":"pl-0",Ze?"mb-2.5":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:xn("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",_e,ke,H)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:xn("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.25rem]",ke)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("div",{className:xn("branch-row","group flex min-w-0 flex-1 items-center gap-0 rounded-md px-2 h-6 text-left text-sm font-normal transition-colors hover:bg-border/50","text-inherit hover:text-inherit"),"data-active-project":X?"true":"false","data-checked-out-branch":B?"true":"false",style:{color:X?B?"var(--checked)":"var(--foreground)":"var(--muted-foreground)"},role:"button",tabIndex:0,onClick:()=>{X?M==null||M(e):Le?p(e):M==null||M(e)},onKeyDown:ge=>{(ge.key==="Enter"||ge.key===" ")&&(ge.preventDefault(),X?M==null||M(e):Le?p(e):M==null||M(e))},children:[Le?l.jsx("button",{type:"button","aria-label":`${Ze?"Collapse":"Expand"} ${e}`,onPointerDown:ge=>{ge.preventDefault()},onClick:ge=>{ge.preventDefault(),ge.stopPropagation(),p(e)},className:"group/chevron branch-chevron flex h-6 w-6 -ml-2 shrink-0 items-center justify-center rounded-sm p-0 text-[10px] leading-none transition-colors hover:bg-border/50",children:l.jsx(pw,{"aria-hidden":"true",className:xn("h-3.5 w-3.5 shrink-0 transition-transform text-current",Ze?"rotate-90":"")})}):null,l.jsx("span",{className:xn("branch-label min-w-0 flex-1 truncate font-normal whitespace-nowrap overflow-hidden","font-medium"),children:e})]})}),ie?l.jsx("ul",{className:"relative space-y-1 pl-4",children:ee.map(ge=>{const Pe=ge.count>1&&!E(ge.key);return(Pe?[ge.lead]:ge.commits).map(Xe=>{var kt;const yt=ae.findIndex(ut=>ut.fullSha===Xe.fullSha),Tt=w(Xe.fullSha,S!=null?S:e);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>N==null?void 0:N(Xe.fullSha),className:"min-w-0 flex-1 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-muted hover:text-muted-foreground",title:Xe.message,children:[l.jsx("span",{className:"block truncate",children:Xe.message}),Tt.length>0?l.jsx("span",{className:"mt-0 block space-y-2",children:Tt.map(ut=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:ut})]},`${Xe.fullSha}:${ut}`))}):null]}),ge.count>1&&Xe.fullSha===ge.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${e}:${ge.lead.fullSha}`,onClick:()=>I(ge.key,`${e}:${ge.lead.fullSha}`),className:xn("shrink-0 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-muted hover:text-muted-foreground",Pe?"":"min-w-[2ch] text-center"),children:Pe?`+${Math.max(1,ge.count-1)}`:"−"}):null]}),(kt=z.get(yt))!=null&&kt.length?l.jsx("ul",{className:"relative space-y-1",children:z.get(yt).map((ut,Ot,_t)=>l.jsx(dp,{branchName:ut,depth:n+1,isLast:Ot===_t.length-1&&ce.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:se,showCommits:b,getMergeTargetLabels:w,sourceBranchName:ut,clusterKeyByCommitId:j,unpushedCommitShasByBranch:k,isGridClusterOpen:E,onToggleGridCluster:I,onSelectCommit:N,onSelectBranch:M,isActiveProject:X},ut))}):null]},`${e}:${Xe.fullSha}`)})})}):null,K&&Ze&&ce.length>0?l.jsx("ul",{className:"relative space-y-1",children:ce.map((ge,Pe)=>l.jsx(dp,{branchName:ge,depth:n+1,isLast:Pe===ce.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:se,showCommits:b,getMergeTargetLabels:w,sourceBranchName:ge,clusterKeyByCommitId:j,unpushedCommitShasByBranch:k,isGridClusterOpen:E,onToggleGridCluster:I,onSelectCommit:N,onSelectBranch:M,isActiveProject:X},ge))}):null]})}function R3({open:e}){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-4 w-4 shrink-0 transition-opacity",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e?l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.7031 19H5.97457C4.96341 19 4.11131 18.2453 3.9892 17.2415L2.77269 7.24152C2.62773 6.04996 3.5577 5 4.75805 5H7C7.64911 5 8.28071 5.21053 8.8 5.6L9.2 5.9C9.71929 6.28947 10.3509 6.5 11 6.5H16.2369C17.2445 6.5 18.0947 7.24955 18.2211 8.2492L18.4938 10.4062",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M5.21532 12.0419C5.42789 11.1385 6.23405 10.5 7.16215 10.5H19.8105C20.7133 10.5 21.38 11.3419 21.1733 12.2207L19.9409 17.4581C19.7284 18.3615 18.9222 19 17.9941 19H6.10333C4.81363 19 3.8611 17.7973 4.1565 16.5419L5.21532 12.0419Z",stroke:"currentColor",strokeWidth:"1.5"})]}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 7C4 5.89543 4.89543 5 6 5H9C9.64911 5 10.2807 5.21053 10.8 5.6L11.2 5.9C11.7193 6.28947 12.3509 6.5 13 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 10.5L12.4211 10.5L20 10.5",stroke:"currentColor",strokeWidth:"1.5"})]})})}function B3({projects:e,activeProjectPath:n,onSelectProject:i,onAddProject:a,onRemoveProject:c,onRevealProjectInFinder:u,onReorderProjects:d,projectLoading:h=!1,projectError:p=null,checkedOutRef:y,manuallyOpenedClumpsByProject:g={},manuallyClosedClumpsByProject:x={},manuallyOpenedClumps:b,manuallyClosedClumps:w,setManuallyOpenedClumps:S,setManuallyClosedClumps:j,gridLayoutModel:k,onSelectCommit:E,onSelectBranch:I,showCommits:N,className:M,style:X,collapsed:F=!1}){var Je,$e;const U=_.useRef(null),K=_.useRef(null),[de,pe]=_.useState(()=>{if(typeof window>"u")return new Set;try{const xe=window.localStorage.getItem(ax);if(xe){const st=JSON.parse(xe);if(Array.isArray(st)){const Fe=new Set;for(const ot of st)typeof ot=="string"&&Fe.add(ot);return Fe}}}catch{}return new Set}),[ye,Le]=_.useState({}),[Ze,ae]=_.useState(()=>new Set),[ie,B]=_.useState(()=>new Set),[se,H]=_.useState(null),_e=b!=null?b:Ze,ke=w!=null?w:ie,z=S!=null?S:ae,ce=j!=null?j:B,[ee,we]=_.useState(null),[Re,ge]=_.useState(null),[Pe,nt]=_.useState(null),[Xe,yt]=_.useState(null),[Tt,kt]=_.useState(null),[ut,Ot]=_.useState(null),[_t,tn]=_.useState(null),nn=_.useRef(new Map),Q=_.useRef(!1),Oe=_.useRef(null),ft=_.useRef(null),Ee=xe=>{try{window.localStorage.setItem(ax,JSON.stringify(Array.from(xe)))}catch{}},xt=xe=>{try{const st=Object.fromEntries(Object.entries(xe).map(([Fe,ot])=>[Fe,Array.from(ot)]));window.localStorage.setItem(rx,JSON.stringify(st))}catch{}};_.useEffect(()=>{Ee(de)},[de]),_.useEffect(()=>{try{const xe=window.localStorage.getItem(rx);if(!xe)return;const st=JSON.parse(xe);if(!st||typeof st!="object")return;const Fe={};for(const[ot,ze]of Object.entries(st)){if(!Array.isArray(ze))continue;const it=new Set;for(const wt of ze)typeof wt=="string"&&it.add(wt);Fe[ot]=it}Le(Fe)}catch{}},[]),_.useEffect(()=>{xt(ye)},[ye]);const Ye=e,bt=_.useMemo(()=>{if(!Xe)return Ye;const xe=Ye.find(ze=>ze.path===Xe);if(!xe)return Ye;const st=Ye.filter(ze=>ze.path!==Xe);if(Tt==null)return st;const Fe=[...st],ot=Math.max(0,Math.min(Tt,Fe.length));return Fe.splice(ot,0,xe),Fe},[Tt,Xe,Ye]),vt=_.useCallback(xe=>{d==null||d(xe)},[d]),At=_.useCallback(()=>{nt(null),yt(null),kt(null),Ot(null)},[]);_.useEffect(()=>{if(!Pe)return;const xe=Fe=>{const ot=Oe.current;!ot||!ot.active||Math.abs(Fe.clientX-ot.startX)<=4&&Math.abs(Fe.clientY-ot.startY)<=4||ft.current==null&&(ft.current=window.requestAnimationFrame(()=>{var tt,$t;ft.current=null;const ze=Oe.current;if(!ze||!ze.active)return;(Math.abs(Fe.clientX-ze.startX)>4||Math.abs(Fe.clientY-ze.startY)>4)&&(ze.moved=!0,yt(ze.path)),Ot({x:Fe.clientX-ze.offsetX,y:Fe.clientY-ze.offsetY,width:ze.width});const wt=Array.from(($t=(tt=K.current)==null?void 0:tt.querySelectorAll("[data-project-path]"))!=null?$t:[]).filter(jt=>jt.dataset.projectPath&&jt.dataset.projectPath!==ze.path);let St=wt.length;if(wt.length>0)for(let jt=0;jt<wt.length;jt+=1){const gt=wt[jt].getBoundingClientRect(),mn=gt.top+gt.height/2;if(Fe.clientY<mn){St=jt;break}}kt(St)}))},st=()=>{const Fe=Oe.current;if(Oe.current=null,ft.current!=null&&(window.cancelAnimationFrame(ft.current),ft.current=null),!Fe){At();return}if(!Fe.moved){At();return}Q.current=!0;const ot=Ye.map(tt=>tt.path);if(ot.indexOf(Fe.path)<0){At();return}const it=Tt;if(it==null){At();return}const wt=ot.filter(tt=>tt!==Fe.path),St=Math.max(0,Math.min(it,wt.length));wt.splice(St,0,Fe.path),vt(wt),At(),window.requestAnimationFrame(()=>{Q.current=!1,H(null)})};return window.addEventListener("pointermove",xe),window.addEventListener("pointerup",st),window.addEventListener("pointercancel",st),()=>{window.removeEventListener("pointermove",xe),window.removeEventListener("pointerup",st),window.removeEventListener("pointercancel",st)}},[At,vt,Pe,Tt,Ye]);const zt=_.useCallback((xe,st)=>{if(xe.button!==0)return;const Fe=xe.currentTarget.getBoundingClientRect();Oe.current={active:!0,path:st,startX:xe.clientX,startY:xe.clientY,offsetX:xe.clientX-Fe.left,offsetY:xe.clientY-Fe.top,width:Fe.width,moved:!1},nt(st),yt(null),kt(null),Ot({x:xe.clientX-Fe.left,y:xe.clientY-Fe.top,width:Fe.width})},[]),dt=(Je=k==null?void 0:k.defaultCollapsedClumps)!=null?Je:new Set,V=xe=>_e.has(xe)||!dt.has(xe)&&!ke.has(xe),J=(xe,st)=>{const Fe=U.current,ot=K.current;if(Fe&&ot){const ze=`[data-clump-toggle-id="${st}"]`,it=Fe.querySelector(ze);if(it){const wt=it.getBoundingClientRect().top-ot.getBoundingClientRect().top;ge({id:st,topWithinScrollBody:wt})}else ge(null)}else ge(null);we(st),z(ze=>{const it=new Set(ze),wt=V(xe);return ce(St=>{const tt=new Set(St);return wt?(it.delete(xe),tt.add(xe)):(tt.delete(xe),it.add(xe)),tt}),it})};_.useLayoutEffect(()=>{if(!ee)return;const xe=U.current,st=K.current;if(!xe||!st)return;const Fe=`[data-clump-toggle-id="${ee}"]`,ot=xe.querySelector(Fe);if(ot){if((Re==null?void 0:Re.id)===ee){const it=ot.getBoundingClientRect().top-st.getBoundingClientRect().top-Re.topWithinScrollBody;Number.isFinite(it)&&it!==0&&(st.scrollTop+=it)}ot.focus({preventScroll:!0}),we(null),ge(null)}},[_e,ke,ee,Re]);const Se=(xe,st)=>{Le(Fe=>{var wt;const ot=(wt=Fe[xe])!=null?wt:new Set,ze=new Set(ot);ze.has(st)?ze.delete(st):ze.add(st);const it={...Fe,[xe]:ze};return xt(it),it})};_.useEffect(()=>{if(se==null)return;const xe=()=>{const Fe=nn.current.get(se);if(!Fe)return;const ot=Fe.getBoundingClientRect();tn({top:ot.bottom+8,right:Math.max(8,window.innerWidth-ot.right)})};xe();const st=()=>H(null);return window.addEventListener("pointerdown",st),window.addEventListener("resize",xe),window.addEventListener("scroll",xe,!0),()=>{window.removeEventListener("pointerdown",st),window.removeEventListener("resize",xe),window.removeEventListener("scroll",xe,!0)}},[se]);const Ne=_.useMemo(()=>{var st,Fe,ot,ze,it,wt,St,tt,$t,jt,gt,mn,pt,Ut,bn,Rt;const xe=new Map;for(const Ct of e){const pn=_m(Ct.path,n),ln=de.has(Ct.path);if(!pn&&!ln)continue;const on=up({branches:Ct.branches,mergeNodes:Ct.mergeNodes,directCommits:Ct.directCommits,unpushedDirectCommits:Ct.unpushedDirectCommits,defaultBranch:Ct.defaultBranch,branchCommitPreviews:Ct.branchCommitPreviews,branchUniqueAheadCounts:Ct.branchUniqueAheadCounts,checkedOutRef:Ct.checkedOutRef,stashes:Ct.stashes,manuallyOpenedClumps:(st=g[Ct.path])!=null?st:new Set,manuallyClosedClumps:(Fe=x[Ct.path])!=null?Fe:new Set}),Vt=on.enrichedBranches.some(sn=>sn.name===Ct.defaultBranch)?on.enrichedBranches:[{name:Ct.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...on.enrichedBranches],qt=new Map(on.sharedGridLayoutModel.nodes.map(sn=>[sn.commit.visualId,sn.row])),Mt={};for(const sn of on.sharedGridLayoutModel.allCommits){const Gn=(ot=Mt[sn.branchName])!=null?ot:[];Gn.push({fullSha:sn.id,sha:sn.id.slice(0,7),parentSha:(ze=sn.parentSha)!=null?ze:null,message:sn.message,author:sn.author,date:sn.date,kind:(it=sn.kind)!=null?it:"commit"}),Mt[sn.branchName]=Gn}for(const sn of Object.keys(Mt))Mt[sn]=Mt[sn].sort((Gn,Mn)=>{var Os,po;const ws=new Date(Gn.date).getTime(),ns=new Date(Mn.date).getTime();if(ws!==ns)return ws-ns;const Jn=(Os=qt.get(`${sn}:${Gn.fullSha}`))!=null?Os:Number.MAX_SAFE_INTEGER,un=(po=qt.get(`${sn}:${Mn.fullSha}`))!=null?po:Number.MAX_SAFE_INTEGER;return Jn!==un?Jn-un:Gn.fullSha.localeCompare(Mn.fullSha)});const wn=(wt=on.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?wt:new Map,mt=(sn,Gn)=>{const Mn=wn.get(Gn);if(!Mn)return[];for(const[ws,ns]of Mn.entries())if(Li(sn,ws))return Array.from(ns).sort();return[]},ls=A3(Vt,Ct.defaultBranch),ts=N3(Vt,Ct.defaultBranch,ls),Eo=new Map(Vt.map(sn=>[sn.name,sn])),cs=new Map;for(const sn of Vt){const Gn=(tt=(St=on.sharedGridLayoutModel.firstBranchCommitByName.get(sn.name))==null?void 0:St.parentSha)!=null?tt:null,Mn=Gn!=null?Gn:null;cs.set(sn.name,Mn)}const To=($t=on.sharedGridLayoutModel.defaultCollapsedClumps)!=null?$t:new Set,Oo=(jt=g[Ct.path])!=null?jt:new Set,js=(gt=x[Ct.path])!=null?gt:new Set,Bs=sn=>Oo.has(sn)||!To.has(sn)&&!js.has(sn);xe.set(Ct.path,{rootBranchNames:ts,branchByName:Eo,branchCommitPreviewsFromLayout:Mt,childNamesByParent:ls,branchAnchorShaByName:cs,unpushedCommitShasByBranch:Ct.unpushedCommitShasByBranch,checkedOutBranchName:(pt=(mn=Ct.checkedOutRef)==null?void 0:mn.branchName)!=null?pt:null,checkedOutHeadSha:(bn=(Ut=Ct.checkedOutRef)==null?void 0:Ut.headSha)!=null?bn:null,clusterKeyByCommitId:(Rt=on.sharedGridLayoutModel.clusterKeyByCommitId)!=null?Rt:new Map,getMergeTargetLabels:mt,isGridClusterOpen:Bs})}return xe},[n,de,x,g,e]),at=(xe,st={})=>{var gt,mn,pt,Ut,bn;const Fe=(gt=st.ghostMode)!=null?gt:!1,ot=(mn=st.hideLive)!=null?mn:!1,ze=_m(xe.path,n),it=de.has(xe.path),wt=(pt=xe.treeLoaded)!=null?pt:xe.branches.length>0,St=Ne.get(xe.path),tt=(Ut=ye[xe.path])!=null?Ut:St?D3(St.rootBranchNames,St.childNamesByParent,y,xe.defaultBranch):new Set,$t=Xe===xe.path,jt=_m(xe.path,n);return l.jsxs(ci.div,{layout:"position",transition:{duration:.12,ease:"easeOut"},"data-project-path":xe.path,"data-active-project":jt?"true":"false",className:xn("project-row relative z-10 flex flex-col gap-1 transition-colors",it&&St?"mb-2.5":""),children:[Tt!==null&&Xe!==xe.path&&((bn=bt[Tt])==null?void 0:bn.path)===xe.path?l.jsx("div",{className:"h-px","aria-hidden":"true",children:l.jsx("div",{className:"mx-1 h-px bg-foreground/60"})}):null,l.jsxs("div",{className:xn("relative z-0 px-1",ot?"pointer-events-none opacity-0":""),children:[l.jsxs("div",{className:xn(Fe?"group flex w-full items-center gap-0 rounded-lg px-0 h-6":"group sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-muted px-0 h-6 transition-all duration-100 ease-out hover:bg-border/50 cursor-grab active:cursor-grabbing",$t&&!Fe?"opacity-0":""),onPointerDownCapture:Rt=>{if(Fe)return;const Ct=Rt.target;Ct!=null&&Ct.closest('.window-no-drag, button, input, textarea, select, [contenteditable="true"]')||zt(Rt,xe.path)},onClick:Rt=>{if(Fe||jt||Xe===xe.path||Q.current)return;const Ct=Rt.target;Ct!=null&&Ct.closest('button, input, textarea, select, [contenteditable="true"]')||i(xe.path)},children:[l.jsx("button",{type:"button",onPointerDown:Rt=>Rt.stopPropagation(),onClick:Rt=>{Rt.preventDefault(),Rt.stopPropagation(),pe(Ct=>{const pn=new Set(Ct);return pn.has(xe.path)?pn.delete(xe.path):pn.add(xe.path),Ee(pn),pn})},"aria-expanded":it,"aria-label":`${it?"Collapse":"Expand"} ${xe.name}`,className:xn("project-icon flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-border/50",Fe?"pointer-events-none":""),style:{color:jt?"var(--foreground)":"var(--muted-foreground)"},children:l.jsx(R3,{open:it})}),l.jsx("span",{className:xn("project-name min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors","font-normal"),style:{color:jt?"var(--foreground)":"var(--muted-foreground)"},children:xe.name}),l.jsxs("div",{className:"relative z-[130] shrink-0",children:[l.jsx("button",{type:"button",onPointerDown:Rt=>Rt.stopPropagation(),"aria-label":`Project actions for ${xe.name}`,"aria-expanded":se===xe.path,ref:Rt=>{nn.current.set(xe.path,Rt)},onClick:Rt=>{Rt.stopPropagation();const Ct=Rt.currentTarget.getBoundingClientRect();tn({top:Ct.bottom+8,right:Math.max(8,window.innerWidth-Ct.right)}),H(pn=>pn===xe.path?null:xe.path)},className:xn("pr-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md opacity-0 hover:bg-border/50 group-hover:opacity-100 text-current",Fe?"pointer-events-none":""),children:l.jsx(xw,{className:"h-4 w-4 shrink-0"})}),se===xe.path&&!Fe&&_t&&typeof document<"u"?Al.createPortal(l.jsxs("div",{role:"menu",className:"fixed z-[10000] inline-flex w-max flex-col overflow-hidden rounded-md border border-border bg-background p-1",style:{top:`${_t.top}px`,right:`${_t.right}px`},onPointerDownCapture:Rt=>Rt.stopPropagation(),onClick:Rt=>Rt.stopPropagation(),children:[l.jsx("button",{type:"button",role:"menuitem",onPointerDown:Rt=>Rt.stopPropagation(),onClick:()=>{H(null),u(xe.path)},className:"flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",children:"Open in Finder"}),l.jsx("button",{type:"button",role:"menuitem",onPointerDown:Rt=>Rt.stopPropagation(),onClick:()=>{H(null),c(xe.path)},className:"project-menu-remove flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium",children:"Remove"})]}),document.body):null]})]}),it?wt&&St?l.jsx("ul",{className:xn("relative z-0 space-y-1 pt-0",Fe?"opacity-70":""),children:St.rootBranchNames.map((Rt,Ct)=>l.jsx(dp,{branchName:Rt,depth:0,isLast:Ct===St.rootBranchNames.length-1,branchByName:St.branchByName,branchCommitPreviews:St.branchCommitPreviewsFromLayout,childNamesByParent:St.childNamesByParent,branchAnchorShaByName:St.branchAnchorShaByName,expandedBranchNames:tt,onToggleBranch:pn=>Se(xe.path,pn),checkedOutBranchName:St.checkedOutBranchName,checkedOutHeadSha:St.checkedOutHeadSha,ancestors:new Set,showCommits:N,getMergeTargetLabels:St.getMergeTargetLabels,sourceBranchName:Rt,clusterKeyByCommitId:St.clusterKeyByCommitId,unpushedCommitShasByBranch:St.unpushedCommitShasByBranch,isGridClusterOpen:St.isGridClusterOpen,onToggleGridCluster:J,onSelectCommit:async pn=>{ze||await i(xe.path),E==null||E(pn)},onSelectBranch:async pn=>{ze||await i(xe.path),I==null||I(pn)},isActiveProject:jt},`${xe.path}:${Rt}`))}):l.jsx("p",{className:xn("px-2 py-2 text-xs text-muted-foreground",Fe?"opacity-70":""),children:"Loading branch tree..."}):null]})]},xe.path)};return l.jsxs("aside",{ref:U,"aria-label":"Dense branch sidebar",className:xn("pointer-events-auto relative z-[120] h-full select-none overflow-hidden bg-muted",M),style:X,children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"absolute inset-x-0 top-0 z-80 h-12"}),l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[p&&l.jsx("div",{className:"px-2.5 pb-2",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:p})}),l.jsx("div",{className:xn("px-2 pb-2",F?"opacity-0 pointer-events-none":""),children:l.jsx("div",{className:"px-1",children:l.jsxs("button",{type:"button",onClick:a,disabled:h,"aria-label":"Add Repo",className:"window-no-drag group flex w-full items-center gap-0 rounded-lg bg-muted px-0 h-6 text-foreground transition-colors hover:bg-border/50 disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors group-hover:bg-border/50 text-foreground",children:l.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-4 w-4 shrink-0",children:l.jsx("path",{d:"M12 5V19M5 12H19",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}),l.jsx("span",{className:"min-w-0 flex-1 truncate pl-0 text-left text-sm font-normal text-foreground",children:"New Project"})]})})}),l.jsx("div",{ref:K,className:xn("sidebar-scrollbar min-h-0 flex-1 space-y-2 overflow-y-auto px-2",F?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:bt.map(xe=>at(xe,{hideLive:Xe===xe.path}))})]}),Xe&&ut?l.jsx("div",{"aria-hidden":"true",className:"pointer-events-none fixed left-0 top-0 z-[90]",style:{transform:`translate3d(${ut.x}px, ${ut.y}px, 0)`,width:`${ut.width}px`},children:at(($e=e.find(xe=>xe.path===Xe))!=null?$e:Ye.find(xe=>xe.path===Xe),{ghostMode:!0})}):null]})}function gm(e){return{branchByName:Array.from(e.branchByName.entries()),laneByName:Array.from(e.laneByName.entries()),mainCommits:e.mainCommits,branchCommitsByLane:Array.from(e.branchCommitsByLane.entries()),branchPreviewSets:Array.from(e.branchPreviewSets.entries()),allCommits:e.allCommits,clustersByBranch:Array.from(e.clustersByBranch.entries()),clusterKeyByCommitId:Array.from(e.clusterKeyByCommitId.entries()),clusterKeyBySha:Array.from(e.clusterKeyBySha.entries()),leadByClusterKey:Array.from(e.leadByClusterKey.entries()),clusterCounts:Array.from(e.clusterCounts.entries()),debugRows:e.debugRows,branchDebugRows:e.branchDebugRows,nodes:e.nodes,normalizedSearchQuery:e.normalizedSearchQuery,matchingNodes:e.matchingNodes,matchingNodeIds:Array.from(e.matchingNodeIds),focusedNode:e.focusedNode,checkedOutClusterKey:e.checkedOutClusterKey,defaultCollapsedClumps:Array.from(e.defaultCollapsedClumps),visibleCommitsList:e.visibleCommitsList,renderNodes:e.renderNodes,visibleNodesBySha:Array.from(e.visibleNodesBySha.entries()),visibleNodeByClusterKey:Array.from(e.visibleNodeByClusterKey.entries()),contentWidth:e.contentWidth,contentHeight:e.contentHeight,connectors:e.connectors,mergeConnectors:e.mergeConnectors,connectorDecisions:e.connectorDecisions,nodeWarnings:Array.from(e.nodeWarnings.entries()),connectorParentShas:Array.from(e.connectorParentShas),branchStartShas:Array.from(e.branchStartShas),branchOffNodeShas:Array.from(e.branchOffNodeShas),crossBranchOutgoingShas:Array.from(e.crossBranchOutgoingShas),commitIdsWithRenderedAncestry:Array.from(e.commitIdsWithRenderedAncestry),branchBaseCommitByName:Array.from(e.branchBaseCommitByName.entries()),firstBranchCommitByName:Array.from(e.firstBranchCommitByName.entries()),mergeDestinations:e.mergeDestinations,mergeTargetBranchesBySourceBranchAndCommitSha:Array.from(e.mergeTargetBranchesBySourceBranchAndCommitSha.entries()).map(([n,i])=>[n,Array.from(i.entries()).map(([a,c])=>[a,Array.from(c)])])}}function ym(e){var i,a,c,u,d,h,p,y,g,x,b,w,S,j,k,E,I,N,M,X,F,U,K,de,pe,ye,Le,Ze,ae,ie,B,se,H,_e,ke,z,ce,ee,we;const n=new Map(((i=e.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?i:[]).map(([Re,ge])=>[Re,new Map(ge.map(([Pe,nt])=>[Pe,new Set(nt)]))]));return{branchByName:new Map((a=e.branchByName)!=null?a:[]),laneByName:new Map((c=e.laneByName)!=null?c:[]),mainCommits:(u=e.mainCommits)!=null?u:[],branchCommitsByLane:new Map((d=e.branchCommitsByLane)!=null?d:[]),branchPreviewSets:new Map((h=e.branchPreviewSets)!=null?h:[]),allCommits:(p=e.allCommits)!=null?p:[],clustersByBranch:new Map((y=e.clustersByBranch)!=null?y:[]),clusterKeyByCommitId:new Map((g=e.clusterKeyByCommitId)!=null?g:[]),clusterKeyBySha:new Map((x=e.clusterKeyBySha)!=null?x:[]),leadByClusterKey:new Map((b=e.leadByClusterKey)!=null?b:[]),clusterCounts:new Map((w=e.clusterCounts)!=null?w:[]),debugRows:(S=e.debugRows)!=null?S:[],branchDebugRows:(j=e.branchDebugRows)!=null?j:[],nodes:(k=e.nodes)!=null?k:[],normalizedSearchQuery:(E=e.normalizedSearchQuery)!=null?E:"",matchingNodes:(I=e.matchingNodes)!=null?I:[],matchingNodeIds:new Set((N=e.matchingNodeIds)!=null?N:[]),focusedNode:(M=e.focusedNode)!=null?M:null,checkedOutClusterKey:(X=e.checkedOutClusterKey)!=null?X:null,defaultCollapsedClumps:new Set((F=e.defaultCollapsedClumps)!=null?F:[]),visibleCommitsList:(U=e.visibleCommitsList)!=null?U:[],renderNodes:(K=e.renderNodes)!=null?K:[],visibleNodesBySha:new Map((de=e.visibleNodesBySha)!=null?de:[]),visibleNodeByClusterKey:new Map((pe=e.visibleNodeByClusterKey)!=null?pe:[]),pointFormatter:(Re,ge)=>`${Re},${ge}`,contentWidth:(ye=e.contentWidth)!=null?ye:0,contentHeight:(Le=e.contentHeight)!=null?Le:0,connectors:(Ze=e.connectors)!=null?Ze:[],mergeConnectors:(ae=e.mergeConnectors)!=null?ae:[],connectorDecisions:(ie=e.connectorDecisions)!=null?ie:[],nodeWarnings:new Map((B=e.nodeWarnings)!=null?B:[]),connectorParentShas:new Set((se=e.connectorParentShas)!=null?se:[]),branchStartShas:new Set((H=e.branchStartShas)!=null?H:[]),branchOffNodeShas:new Set((_e=e.branchOffNodeShas)!=null?_e:[]),crossBranchOutgoingShas:new Set((ke=e.crossBranchOutgoingShas)!=null?ke:[]),commitIdsWithRenderedAncestry:new Set((z=e.commitIdsWithRenderedAncestry)!=null?z:[]),branchBaseCommitByName:new Map((ce=e.branchBaseCommitByName)!=null?ce:[]),firstBranchCommitByName:new Map((ee=e.firstBranchCommitByName)!=null?ee:[]),mergeDestinations:(we=e.mergeDestinations)!=null?we:[],mergeTargetBranchesBySourceBranchAndCommitSha:n}}const ad="git-visualizer:projects",xm="git-visualizer:active-project",lx="git-visualizer:map-orientation",rd=12,cx=1400,L3=180,ux="git-visualizer:sidebar-width",dx="git-visualizer:sidebar-collapsed",fx="git-visualizer:grid-clumps",hx=360,mx=180,px=360;function qo(e){return e==="/"?e:e.replace(/\/+$/,"")}function O3(...e){return e.filter(Boolean).join(" ")}function bm(e){var a;if(!e)return"";const i=e.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function Ud(e){return e.size===0?"__none__":Array.from(e).sort().join(",")}function ld(e,n,i,a){return["layout-v3",e,n,Ud(i),Ud(a)].join("|")}function _x(e){var n,i;return[e.path,e.name,e.defaultBranch,e.updatedAtMs,e.branches.map(a=>[a.name,a.headSha,a.commitsAhead,a.commitsBehind,a.unpushedCommits,a.remoteSyncStatus,a.status,a.lastCommitDate].join(":")).join("|"),e.mergeNodes.map(a=>[a.fullSha,a.targetBranch,a.targetCommitSha].join(":")).join("|"),e.directCommits.map(a=>a.fullSha).join("|"),e.unpushedDirectCommits.map(a=>a.fullSha).join("|"),e.checkedOutRef?[(n=e.checkedOutRef.branchName)!=null?n:"",e.checkedOutRef.headSha,(i=e.checkedOutRef.parentSha)!=null?i:"",e.checkedOutRef.hasUncommittedChanges?"1":"0"].join(":"):"__none__",Object.entries(e.unpushedCommitShasByBranch).map(([a,c])=>`${a}:${c.join(",")}`).join("|"),Object.entries(e.branchCommitPreviews).map(([a,c])=>`${a}:${c.map(u=>u.fullSha).join(",")}`).join("|"),Object.entries(e.branchParentByName).map(([a,c])=>`${a}:${c!=null?c:""}`).join("|"),Object.entries(e.laneByBranch).map(([a,c])=>`${a}:${c}`).join("|"),Object.entries(e.branchUniqueAheadCounts).map(([a,c])=>`${a}:${c}`).join("|")].join("@@")}function vm(e){var n,i;return(i=(n=e==null?void 0:e.payload)==null?void 0:n.repoVisualSnapshot)!=null?i:null}function z3(){var os,eo,en;const[e,n]=_.useState(null),[i,a]=_.useState(""),[c,u]=_.useState([]),[d,h]=_.useState({}),[p,y]=_.useState(!1),[g,x]=_.useState([]),[b,w]=_.useState([]),[S,j]=_.useState([]),[k,E]=_.useState([]),[I,N]=_.useState({}),[M,X]=_.useState("main"),[F,U]=_.useState(null),[K,de]=_.useState([]),[pe,ye]=_.useState(!1),[Le,Ze]=_.useState(""),[ae,ie]=_.useState(0),[B,se]=_.useState(1),[H,_e]=_.useState({}),[ke,z]=_.useState({}),[ce,ee]=_.useState(null),[we,Re]=_.useState(null),[ge,Pe]=_.useState(null),[nt,Xe]=_.useState(!1),[yt,Tt]=_.useState(!1),[kt,ut]=_.useState(null),[Ot,_t]=_.useState(null),[tn,nn]=_.useState(!1),[Q,Oe]=_.useState(null),[ft,Ee]=_.useState(null),[xt,Ye]=_.useState(!1),[bt,vt]=_.useState(!1),[At,zt]=_.useState(!1),[dt,V]=_.useState(!1),[J,Se]=_.useState({}),[Ne,at]=_.useState({}),[Je,$e]=_.useState({}),[xe,st]=_.useState({}),[Fe,ot]=_.useState({}),[ze,it]=_.useState([]),[wt,St]=_.useState([]),[tt,$t]=_.useState(!1),[jt,gt]=_.useState(!1),[mn,pt]=_.useState(!1),[Ut,bn]=_.useState(!1),Rt=jt||mn||tt||At||dt||bt||pe||Ut,[Ct,pn]=_.useState(!1),[ln,on]=_.useState("horizontal"),[Vt]=_.useState(null),[qt]=_.useState(null),[Mt]=_.useState(null),[wn]=_.useState(!1),[mt,ls]=_.useState(!1),[ts,Eo]=_.useState(hx),[cs,To]=_.useState(!1),Oo=_.useRef(null),js=_.useRef(0),Bs=_.useRef(0),sn=_.useRef({}),Gn=_.useRef(null),Mn=_.useRef({}),ws=_.useRef({}),ns=_.useRef(!1),Jn=_.useRef(null),un=_.useRef(hx),Os=_.useRef(null),po=_.useRef(null),Gs=_.useRef(!1),Ao=_.useRef(!1);_.useRef(!1);const qs=_.useRef(new Set),[gs,zs]=_.useState(!1),Sn=_.useRef([]),Ks=_.useRef([]),Qi=_.useRef(null),Ns=_.useRef([]),No=_.useRef([]),oo=_.useRef([]),ys=_.useRef({}),Qs=_.useRef([]),io=_.useRef({}),Cn=_.useRef(new Map),ss=_.useRef(new Set),us=_.useRef(null),[ds,ao]=_.useState(null),[Fo,Do]=_.useState(null),Wt=e!=null?e:"__no-repo__",Si=(R,L)=>{try{const $={opened:Object.fromEntries(Object.entries(R).map(([te,re])=>[te,Array.from(re)])),closed:Object.fromEntries(Object.entries(L).map(([te,re])=>[te,Array.from(re)]))};window.localStorage.setItem(fx,JSON.stringify($))}catch{}};_.useEffect(()=>{var R,L;try{const $=window.localStorage.getItem(fx);if(!$)return;const te=JSON.parse($);if(!te||typeof te!="object")return;const re={},Be={},Ke=te;for(const[ht,Ht]of Object.entries((R=Ke.opened)!=null?R:{}))Array.isArray(Ht)&&(re[ht]=new Set(Ht.filter(kn=>typeof kn=="string")));for(const[ht,Ht]of Object.entries((L=Ke.closed)!=null?L:{}))Array.isArray(Ht)&&(Be[ht]=new Set(Ht.filter(kn=>typeof kn=="string")));_e(re),z(Be)}catch{}},[]),_.useEffect(()=>{Si(H,ke)},[ke,H]);const xs=_.useMemo(()=>{var R;return(R=H[Wt])!=null?R:new Set},[Wt,H]),zo=_.useMemo(()=>{var R;return(R=ke[Wt])!=null?R:new Set},[Wt,ke]),Oi=_.useCallback(R=>{_e(L=>{var Be;const $=(Be=L[Wt])!=null?Be:new Set,te=typeof R=="function"?R($):R,re={...L,[Wt]:new Set(te)};return Si(re,ke),re})},[Wt,ke]),Qo=_.useCallback(R=>{z(L=>{var Be;const $=(Be=L[Wt])!=null?Be:new Set,te=typeof R=="function"?R($):R,re={...L,[Wt]:new Set(te)};return Si(H,re),re})},[Wt,H]),Ms=_.useMemo(()=>c.map(R=>{var te,re,Be,Ke,ht,Ht,kn,an,Cs,T,D,Y,G,ne,he;const L=(()=>{if(!e)return!1;const P=qo(R.path).toLowerCase(),Z=qo(e).toLowerCase();return P===Z})(),$=(te=d[R.path])!=null?te:{};return{...R,...$,branches:(re=$.branches)!=null?re:[],mergeNodes:(Be=$.mergeNodes)!=null?Be:[],directCommits:(Ke=$.directCommits)!=null?Ke:[],unpushedDirectCommits:(ht=$.unpushedDirectCommits)!=null?ht:[],unpushedCommitShasByBranch:(Ht=$.unpushedCommitShasByBranch)!=null?Ht:{},checkedOutRef:L?F:(kn=$.checkedOutRef)!=null?kn:null,worktrees:(an=$.worktrees)!=null?an:[],stashes:(Cs=$.stashes)!=null?Cs:[],branchCommitPreviews:(T=$.branchCommitPreviews)!=null?T:{},laneByBranch:(D=$.laneByBranch)!=null?D:{},branchUniqueAheadCounts:(Y=$.branchUniqueAheadCounts)!=null?Y:{},defaultBranch:(ne=(G=$.defaultBranch)!=null?G:R.branchName)!=null?ne:"main",treeLoaded:(he=$.loaded)!=null?he:!1}}),[c,d,e,F]),zi=_.useMemo(()=>({githubAuthStatus:Ot,githubAuthLoading:tn,onGitHubAuthSetup:Hs,gridSearchQuery:Le,setGridSearchQuery:Ze,gridSearchResultCount:ce,gridSearchResultIndex:we,setGridSearchJumpDirection:se,setGridSearchJumpToken:ie,mapGridOrientation:ln,setMapGridOrientation:on,setIsGridDebugOpen:ls,githubAuthMessage:Q,commitSwitchFeedback:ft,isCommitSwitchFeedbackVisible:xt}),[ft,tn,Q,Ot,Le,ce,we,Hs,xt,ln,Ze,se,ie,ls,on]);function Ds(R,L){const $=_x(L);return sn.current[R]===$?!1:(sn.current={...sn.current,[R]:$},h(re=>re[R]===L?re:{...re,[R]:L}),!0)}function Un(R){var L;return[R.repoPath,R.defaultBranch,R.headSha,(L=R.upstreamSha)!=null?L:"",R.hasUncommittedChanges?"1":"0",R.branchCount,R.worktreeCount,R.stashCount].join("|")}function _o(R){var L;return[R.repoPath,R.headSha,(L=R.upstreamSha)!=null?L:"",R.hasUncommittedChanges?"1":"0"].join("|")}function Zo(R,L){var $,te,re,Be,Ke,ht;return{repoPath:R,headSha:(te=($=L.checkedOutRef)==null?void 0:$.headSha)!=null?te:"",upstreamSha:(Be=(re=L.checkedOutRef)==null?void 0:re.parentSha)!=null?Be:null,hasUncommittedChanges:(ht=(Ke=L.checkedOutRef)==null?void 0:Ke.hasUncommittedChanges)!=null?ht:!1}}function $s(R,L,$){var te,re,Be,Ke,ht,Ht;return{repoPath:R,defaultBranch:L,headSha:(re=(te=$.checkedOutRef)==null?void 0:te.headSha)!=null?re:"",upstreamSha:(Ke=(Be=$.checkedOutRef)==null?void 0:Be.parentSha)!=null?Ke:null,hasUncommittedChanges:(Ht=(ht=$.checkedOutRef)==null?void 0:ht.hasUncommittedChanges)!=null?Ht:!1,branchCount:$.branches.length,worktreeCount:$.worktrees.length,stashCount:$.stashes.length}}_.useEffect(()=>{try{const R=localStorage.getItem(ad);if(!R)return;const L=JSON.parse(R);if(!Array.isArray(L))return;const $=L.filter(te=>typeof te=="object"&&te!==null&&typeof te.path=="string"&&typeof te.name=="string"&&typeof te.lastOpenedAt=="number");u($.slice(0,rd))}catch{u([])}},[]),_.useEffect(()=>{try{const R=window.localStorage.getItem(lx);(R==="vertical"||R==="horizontal")&&on(R)}catch{}},[]),_.useEffect(()=>{var $;if(Ao.current||e||c.length===0||!gs)return;const R=(()=>{try{return window.localStorage.getItem(xm)}catch{return null}})(),L=R?c.find(te=>qo(te.path).toLowerCase()===qo(R).toLowerCase()):null;Ao.current=!0,Ps(($=L==null?void 0:L.path)!=null?$:c[0].path)},[gs,c,e]),_.useEffect(()=>{if(e)try{window.localStorage.setItem(xm,e)}catch{}},[e]),_.useEffect(()=>{try{window.localStorage.setItem(lx,ln)}catch{}},[ln]);const $o=_.useMemo(()=>b.reduce((R,L)=>(R[L.targetCommitSha]=L.targetBranch,R),{}),[b]);_.useEffect(()=>{e&&(ns.current||h(R=>{var L,$,te,re;return{...R,[e]:{path:e,name:i||bm(e),branches:g,mergeNodes:b,directCommits:S,unpushedDirectCommits:k,mergeTargetBranchByCommitSha:b.reduce((Be,Ke)=>(Be[Ke.targetCommitSha]=Ke.targetBranch,Be),{}),unpushedCommitShasByBranch:I,checkedOutRef:F,worktrees:K,stashes:ze,branchCommitPreviews:Ne,branchParentByName:Je,laneByBranch:xe,branchUniqueAheadCounts:Fe,defaultBranch:M,loaded:!0,cacheSchemaVersion:($=(L=R[e])==null?void 0:L.cacheSchemaVersion)!=null?$:1,updatedAtMs:(re=(te=R[e])==null?void 0:te.updatedAtMs)!=null?re:Date.now()}}}))},[e,i,g,b,S,k,$o,I,F,K,ze,Ne,Je,xe,Fe,M]);async function _n(R,L=!1){var te;const $=qo(R);if($&&!qs.current.has($)&&!(!L&&((te=d[$])!=null&&te.loaded))){qs.current.add($),$===e&&y(!0);try{let re=null;L?re=await je("add_project_and_ingest",{repoPath:$}):(re=await je("load_project_snapshot",{projectId:$}),re||(re=await je("add_project_and_ingest",{repoPath:$})));const Be=vm(re);if(!Be)throw new Error("Missing repo visual snapshot payload");Ds($,Be)}finally{qs.current.delete($),$===e&&qs.current.size===0&&y(!1)}}}_.useEffect(()=>{if(c.length===0){zs(!0);return}let R=!1;const L=!1;return(async()=>{try{await Promise.all(c.map(async $=>{await _n($.path,L),await je("watch_repo",{repoPath:$.path}).catch(console.error)}))}catch($){console.error("Failed to preload project snapshots:",$)}R||(zs(!0),y(!1))})(),()=>{R=!0}},[c]),_.useEffect(()=>{let R=!1,L=null;return Tc("git-activity",$=>{if(R)return;const te=qo($.payload.repoPath);!te||te===e||_n(te,!1)}).then($=>{R?$():L=$}).catch(console.error),()=>{R=!0,L&&L()}},[e]),_.useEffect(()=>{if(yt||ns.current||c.length===0)return;let R=!1;return(async()=>{var L,$;for(const te of c){const re=qo(te.path),Be=d[re];if(!(Be!=null&&Be.loaded))continue;const Ke=(L=H[re])!=null?L:new Set,ht=($=ke[re])!=null?$:new Set,Ht=ld(re,ln,Ke,ht);if(Cn.current.has(Ht))continue;const kn=await je("get_repo_layout_snapshot",{repoPath:re,layoutKey:Ht}).catch(()=>null);if(R)return;if(kn)try{const D=JSON.parse(kn),Y=ym(D);Cn.current.set(Ht,Y),ss.current.add(Ht);continue}catch{}const Cs=up({branches:Be.branches,mergeNodes:Be.mergeNodes,directCommits:Be.directCommits,unpushedDirectCommits:Be.unpushedDirectCommits,defaultBranch:Be.defaultBranch,branchCommitPreviews:Be.branchCommitPreviews,branchParentByName:Be.branchParentByName,branchUniqueAheadCounts:Be.branchUniqueAheadCounts,checkedOutRef:Be.checkedOutRef,stashes:Be.stashes,manuallyOpenedClumps:Ke,manuallyClosedClumps:ht,gridSearchQuery:"",gridFocusSha:null,orientation:ln}).sharedGridLayoutModel;Cn.current.set(Ht,Cs),ss.current.add(Ht);const T=JSON.stringify(gm(Cs));if(je("store_repo_layout_snapshot",{repoPath:re,layoutKey:Ht,payloadJson:T}).catch(()=>{ss.current.delete(Ht)}),await Pn(),R)return}})(),()=>{R=!0}},[c,d,ln,H,ke,yt]);function Is(R){u(L=>{const $=qo(R.path);if(!$)return L;const te={...R,path:$},Be=(L.some(Ke=>Ke.path===$)?L.map(Ke=>Ke.path===$?te:Ke):[...L,te]).slice(-rd);try{localStorage.setItem(ad,JSON.stringify(Be))}catch{}return Be})}function Zs(R){u(L=>{const $=new Map(L.map(re=>[re.path,re])),te=[];for(const re of R){const Be=$.get(re);Be&&(te.push(Be),$.delete(re))}for(const re of L)$.has(re.path)&&te.push(re);try{localStorage.setItem(ad,JSON.stringify(te.slice(0,rd)))}catch{}return te.slice(0,rd)})}async function Jo(R){const L=qo(R);if(L){ut(null);try{const[$,te]=await Promise.all([je("get_repo_info",{repoPath:L}),je("get_default_branch",{repoPath:L}).catch(()=>"main")]);Is({path:L,name:$.name,lastOpenedAt:Date.now(),branchName:te}),await _n(L,!1)}catch($){ut($ instanceof Error?$.message:String($))}}}function Ls(R){var $,te;const L=qo(R);if(L){u(re=>{const Be=re.filter(Ke=>Ke.path!==L);try{localStorage.setItem(ad,JSON.stringify(Be))}catch{}return Be});try{e&&qo(e).toLowerCase()===L.toLowerCase()&&window.localStorage.removeItem(xm)}catch{}if(h(re=>{if(!(L in re))return re;const Be={...re};return delete Be[L],Be}),e===L){const re=(te=($=c.find(Be=>Be.path!==L))==null?void 0:$.path)!=null?te:null;re?Ps(re):(n(null),a(""),x([]),w([]),j([]),E([]),N({}),U(null),de([]),it([]),at({}),$e({}),st({}),ot({}))}}}async function Ci(R){const L=qo(R);if(L)try{await je("reveal_in_finder",{path:L})}catch($){ut($ instanceof Error?$.message:String($))}}const ei=()=>{(async()=>{var R,L;try{const $=await rw({directory:!0,multiple:!1,defaultPath:(L=(R=c[0])==null?void 0:R.path)!=null?L:void 0});typeof $=="string"&&$&&await Jo($)}catch($){ut($ instanceof Error?$.message:String($))}})()};async function $i(R,L){const te=[];let re=0;for(;;){const Be=await je("get_merge_nodes",{repoPath:R,branch:L,page:re,perPage:100});if(te.push(...Be.nodes),!Be.hasMore||Be.nodes.length===0)break;re+=1}return te}async function ro(R,L,$){const te=Array.from(new Set([$,...L.map(Ke=>Ke.name)].filter(Ke=>!!Ke)));if(te.length===0)return[];const re=await Promise.all(te.map(Ke=>$i(R,Ke).catch(()=>[]))),Be=new Map;for(const Ke of re)for(const ht of Ke){const Ht=`${ht.targetCommitSha}:${ht.targetBranch}`;Be.has(Ht)||Be.set(Ht,ht)}return Array.from(Be.values())}async function go(R,L,$){var ne,he,P,Z;const te=L!=null?L:M,re=(ne=$==null?void 0:$.includeMergeNodes)!=null?ne:!0,Be=(he=$==null?void 0:$.includeUnpushedShaMap)!=null?he:!0,Ke=(P=$==null?void 0:$.includeWorktrees)!=null?P:!0,ht=(Z=$==null?void 0:$.includeStashes)!=null?Z:!0,[Ht,kn,an,Cs,T,D]=await Promise.all([je("get_branches",{repoPath:R}),je("get_all_repo_commits",{repoPath:R}),je("get_unpushed_direct_commits",{repoPath:R,branch:te}).catch(()=>[]),je("get_checked_out_ref",{repoPath:R}).catch(()=>null),Ke?je("list_worktrees",{repoPath:R}).catch(()=>[]):Promise.resolve(K),ht?je("list_stashes",{repoPath:R}).catch(()=>[]):Promise.resolve(ze)]),Y=re?await ro(R,Ht,te):b,G=Be?await Promise.all([te,...Ht.map(le=>le.name)].map(async le=>{const me=await je("get_branch_unpushed_commit_shas",{repoPath:R,branch:le}).catch(()=>[]);return[le,me]})):Object.entries(I);_.startTransition(()=>{x(Ht),w(Y),j(kn),E(an),N(Object.fromEntries(G)),U(Cs),de(T),it(D)})}async function Ss(R,L){await go(R,L,{includeMergeNodes:!1,includeUnpushedShaMap:!0,includeWorktrees:!1,includeStashes:!1})}async function Vn(R,L){const $=M,[te,re]=await Promise.all([je("get_branches",{repoPath:R}),je("get_checked_out_ref",{repoPath:R}).catch(()=>null)]),Be=await Promise.all([$,...te.map(Ke=>Ke.name)].map(async Ke=>{const ht=await je("get_branch_unpushed_commit_shas",{repoPath:R,branch:Ke}).catch(()=>[]);return[Ke,ht]}));_.startTransition(()=>{x(te),N(Object.fromEntries(Be)),U(re)})}async function Pn(){await new Promise(R=>{window.requestAnimationFrame(()=>R())})}async function yo(R){Ee(null),Tt(!0),ns.current=!0;try{const[L,$]=await Promise.all([je("get_repo_info",{repoPath:R}),je("get_default_branch",{repoPath:R})]);a(L.name),X($),n(R),await go(R,$),zn(R),Ee({kind:"success",message:`Now targeting worktree at ${R}`})}catch(L){const $=L instanceof Error?L.message:String(L);Ee({kind:"error",message:$}),console.error("Failed to switch worktree:",$)}finally{Tt(!1),ns.current=!1}}async function xo(R,L){if(!(!e||pe)){ye(!0),Ee(null);try{await je("remove_worktree",{repoPath:e,worktreePath:R,force:L}),await Ss(e),Ee({kind:"success",message:`Removed worktree at ${R}`})}catch($){const te=$ instanceof Error?$.message:String($);Ee({kind:"error",message:te}),console.error("Failed to remove worktree:",te)}finally{ye(!1)}}}function Js(R,L){var te,re,Be;const $=_x(L);return Gn.current===$?!1:(Sn.current=L.branches,Ks.current=L.directCommits,Qi.current=L.checkedOutRef,Ns.current=L.unpushedDirectCommits,No.current=L.worktrees,oo.current=L.stashes,ys.current=L.unpushedCommitShasByBranch,Qs.current=L.mergeNodes,io.current=(te=L.branchParentByName)!=null?te:{},Gn.current=$,a(L.name||bm(R)),X(L.defaultBranch||"main"),x(L.branches),w(L.mergeNodes),j(L.directCommits),E(L.unpushedDirectCommits),N(L.unpushedCommitShasByBranch),U(L.checkedOutRef),de(L.worktrees),it(L.stashes),at(L.branchCommitPreviews),$e((re=L.branchParentByName)!=null?re:{}),st((Be=L.laneByBranch)!=null?Be:{}),ot(L.branchUniqueAheadCounts),n(R),!0)}async function On(R,L,$,te){const re=ld(R,ln,$,te),Be=Cn.current.get(re);if(Be)return{layoutKey:re,model:Be};const Ke=await je("get_repo_layout_snapshot",{repoPath:R,layoutKey:re}).catch(()=>null);if(Ke)try{const kn=JSON.parse(Ke),an=ym(kn);return Cn.current.set(re,an),ss.current.add(re),{layoutKey:re,model:an}}catch{}const ht=up({branches:L.branches,mergeNodes:L.mergeNodes,directCommits:L.directCommits,unpushedDirectCommits:L.unpushedDirectCommits,defaultBranch:L.defaultBranch,branchCommitPreviews:L.branchCommitPreviews,branchParentByName:L.branchParentByName,branchUniqueAheadCounts:L.branchUniqueAheadCounts,checkedOutRef:L.checkedOutRef,stashes:L.stashes,manuallyOpenedClumps:$,manuallyClosedClumps:te,gridSearchQuery:"",gridFocusSha:null,orientation:ln}).sharedGridLayoutModel;Cn.current.set(re,ht),ss.current.add(re);const Ht=JSON.stringify(gm(ht));return je("store_repo_layout_snapshot",{repoPath:R,layoutKey:re,payloadJson:Ht}).catch(()=>{ss.current.delete(re)}),{layoutKey:re,model:ht}}async function Ps(R){var Ht,kn;const L=++js.current,$=qo(R);if(!$)return;e&&De&&Cn.current.set(De,rt);const te=(Ht=H[$])!=null?Ht:new Set,re=(kn=ke[$])!=null?kn:new Set,Be=ld($,ln,te,re),Ke=Cn.current.get(Be);if(Ke?(ao(Ke),Do(Be)):(ao(null),Do(null)),ns.current=!0,Tt(!0),Xe(!0),ut(null),await Pn(),L!==js.current)return;const ht=d[$];if(ht!=null&&ht.loaded){ws.current={...ws.current,[$]:_o(Zo($,ht))};const an=await On($,ht,te,re);if(L!==js.current||(ao(an.model),Do(an.layoutKey),Js($,ht),Is({path:$,name:ht.name||bm($),lastOpenedAt:Date.now(),branchName:ht.defaultBranch}),await Pn(),await Pn(),L!==js.current))return;Tt(!1),Xe(!1),zn($),ns.current=!1;return}if(await new Promise(an=>setTimeout(an,15)),L===js.current)try{const[an,Cs]=await Promise.all([je("get_repo_info",{repoPath:$}),je("get_default_branch",{repoPath:$})]);if(L!==js.current)return;a(an.name),X(Cs);const T=await je("add_project_and_ingest",{repoPath:$}),D=vm(T);if(!D)throw new Error("Missing repo visual snapshot payload");if(L!==js.current)return;const Y=await On($,D,te,re);if(L!==js.current||(ao(Y.model),Do(Y.layoutKey),Ds($,D),Mn.current={...Mn.current,[$]:Un($s($,Cs,D))},ws.current={...ws.current,[$]:_o(Zo($,D))},Js($,D),Is({path:$,name:an.name,lastOpenedAt:Date.now(),branchName:Cs}),await Pn(),await Pn(),L!==js.current))return;Tt(!1),Xe(!1),zn($)}catch(an){if(L!==js.current)return;console.error("Failed to load repo:",an),ut(an instanceof Error?an.message:String(an)),n(null),Xe(!1),Tt(!1)}finally{ns.current=!1}}async function zn(R){const L=++Bs.current;try{if(L!==Bs.current)return;Oe(null);const $=await je("get_github_info",{repoPath:R}),te=await je("get_github_auth_status");if(L!==Bs.current||(_t(te),!te.ghAvailable||!te.authenticated))return;const re=await je("get_open_prs",{owner:$.owner,repo:$.repo});if(L!==Bs.current)return;St(re)}catch($){if(L!==Bs.current)return;console.log("GitHub data not available:",$),Oe($ instanceof Error?$.message:String($))}}_.useEffect(()=>{let R=null,L=!1;const $=(()=>{try{return bp().label}catch{return null}})(),te=async Be=>{var ht;const Ke=(ht=Be==null?void 0:Be.path)==null?void 0:ht.trim();!Ke||L||e!==Ke&&await Ps(Ke)};return(async()=>{$==="main"&&(R=await Tc("gitviz://open-repo",async Ke=>{await te(Ke.payload)}));const Be=await je("take_pending_open_repo");await te(Be)})(),()=>{L=!0,R&&R()}},[e]),_.useEffect(()=>{Sn.current=g},[g]),_.useEffect(()=>{Ks.current=S},[S]),_.useEffect(()=>{Qi.current=F},[F]),_.useEffect(()=>{Ns.current=k},[k]),_.useEffect(()=>{No.current=K},[K]),_.useEffect(()=>{oo.current=ze},[ze]),_.useEffect(()=>{ys.current=I},[I]),_.useEffect(()=>{Qs.current=b},[b]),_.useEffect(()=>{io.current=Je},[Je]),_.useEffect(()=>{Gs.current=Ct},[Ct]),_.useEffect(()=>{if(!e||!M)return;je("watch_repo",{repoPath:e}).catch(console.error);let R=!1,L=!1,$=null,te=null;const re=async()=>{var ht;if(!(R||L||Gs.current)){L=!0;try{const Ht=await je("refresh_project_if_changed",{projectId:e});if(!Ht.updated)return;const kn=vm((ht=Ht.snapshot)!=null?ht:null);if(!kn)return;Ds(e,kn),qo(e)===qo(kn.path)&&Js(e,kn)}catch(Ht){console.warn("Background project refresh failed:",Ht)}finally{L=!1}}},Be=()=>{if(R)return;$!=null&&window.clearTimeout($);const Ht=document.visibilityState!=="visible"?9e4:3e4;$=window.setTimeout(()=>{re(),Be()},Ht)};Tc("git-activity",ht=>{qo(ht.payload.repoPath)===e&&re()}).then(ht=>{R?ht():te=ht}).catch(console.error);const Ke=window.setTimeout(()=>{re()},250);return Be(),()=>{R=!0,window.clearTimeout(Ke),$!=null&&window.clearTimeout($),te&&te()}},[e,M]);async function Hs(){if(e){nn(!0),Oe(null);try{await je("authenticate_github");const R=await je("get_github_auth_status");_t(R),R.authenticated?await zn(e):R.message&&Oe(R.message)}catch(R){Oe(R instanceof Error?R.message:String(R))}finally{nn(!1)}}}_.useEffect(()=>{Se({}),po.current=null,nn(!1),_t(null),Oe(null),St([]),Ee(null)},[e]),_.useEffect(()=>{var Ht,kn,an,Cs;if(!e||!M){Se({}),at({}),$e({}),st({}),ot({}),po.current=null;return}const R=g.map(T=>{var D;return`${T.name}:${T.headSha}:${(D=T.parentBranch)!=null?D:""}:${T.commitsAhead}`}).join("|"),L=b.map(T=>{var D,Y;return`${T.fullSha}:${(Y=(D=T.parentShas)==null?void 0:D[1])!=null?Y:""}`}).join("|"),$=`${e}|${M}|${R}|${L}`;if(po.current===$)return;po.current=$;const te={},re={};for(const T of g){if(T.name===M)continue;const D=S.filter(Y=>Y.branch===T.name).map(Y=>{var G;return{fullSha:Y.fullSha,sha:Y.sha,parentSha:(G=Y.parentSha)!=null?G:null,message:Y.message,author:Y.author,date:Y.date,kind:"commit"}});te[T.name]=D,re[T.name]=D.length}const Be=new Map;for(const T of S)Be.set(T.fullSha,T.branch);const Ke=T=>{if(!T)return null;const D=Be.get(T);if(D)return D;for(const[Y,G]of Be.entries())if(Y.startsWith(T)||T.startsWith(Y))return G;return null},ht={[M]:null};for(const T of g){if(T.name===M){ht[T.name]=null;continue}const D=S.filter(he=>he.branch===T.name),Y=new Set(D.map(he=>he.fullSha)),G=(kn=(Ht=D.filter(he=>{var Z;const P=(Z=he.parentSha)!=null?Z:null;return!P||!Y.has(P)}).sort((he,P)=>{const Z=new Date(he.date).getTime()-new Date(P.date).getTime();return Z!==0?Z:he.fullSha.localeCompare(P.fullSha)})[0])==null?void 0:Ht.parentSha)!=null?kn:null,ne=Ke(G);ht[T.name]=(Cs=(an=ne!=null?ne:io.current[T.name])!=null?an:T.parentBranch)!=null?Cs:null}Se({}),at(te),$e(ht),st(T=>{const D={};for(const Y of g){const G=T[Y.name];G!=null&&Number.isFinite(G)&&(D[Y.name]=G)}return D}),ot(re)},[e,M,g,b,S]),_.useEffect(()=>{if(!ft){Ye(!1);return}Ye(!0);const R=window.setTimeout(()=>{Ye(!1)},cx),L=window.setTimeout(()=>{Ee(null)},cx+L3);return()=>{window.clearTimeout(R),window.clearTimeout(L)}},[ft]),_.useEffect(()=>{if(!e||g.length===0)return;const R=te=>new Promise(re=>setTimeout(re,te));async function L(){const re=`${await je("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${re}`),await R(800),await je("screenshot",{path:`${re}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${re}`)}const $=te=>{if((te.metaKey||te.ctrlKey)&&!te.shiftKey&&!te.altKey&&te.key.toLowerCase()==="b"){te.preventDefault(),To(re=>!re);return}(te.metaKey||te.ctrlKey)&&te.shiftKey&&te.key==="S"&&(te.preventDefault(),L())};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[e,i,g]);async function ti(R){if(!e)return;Ee(null);const L=/^STASH:(\d+)$/.exec(R.commitSha);if(L){try{const $=parseInt(L[1],10),te=await je("apply_stash_restore",{repoPath:e,stashIndex:$});U(te),await Ss(e);const re=`Stash ${$+1}`,Be=te.branchName?` on branch ${te.branchName}`:" at the stash base (detached HEAD)";Ee({kind:"success",message:`Restored ${re}${Be}; stash applied and dropped (uncommitted changes).`})}catch($){const te=$ instanceof Error?$.message:String($);Ee({kind:"error",message:te}),console.error("Failed to apply stash:",te)}return}if(R.branchName){const $=(re,Be)=>{const Ke=re.replace(/\\/g,"/").replace(/\/+$/,""),ht=Be.replace(/\\/g,"/").replace(/\/+$/,"");return Ke===ht||Ke.toLowerCase()===ht.toLowerCase()},te=K.find(re=>re.pathExists===!1||re.isCurrent||e&&$(re.path,e)?!1:re.branchName===R.branchName);if(te){await yo(te.path);return}}try{let $="";(await je("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges&&(await je("stash_push",{repoPath:e,includeUntracked:!0}),$="Stashed local changes (including untracked), then ",await Ss(e));const re=R.branchName?await je("checkout_branch",{repoPath:e,branchName:R.branchName}):await je("checkout_ref",{repoPath:e,refName:R.commitSha}),Be=await je("get_checked_out_ref",{repoPath:e}).catch(()=>re);U(Be),await Ss(e);const Ke=Be.branchName?Be.branchName:`${Be.headSha.slice(0,7)} (detached)`;Ee({kind:"success",message:`${$}Checked out ${Ke}`})}catch($){const te=$ instanceof Error?$.message:String($);Ee({kind:"error",message:te}),console.error("Failed to checkout commit:",te)}}async function ni(){if(!(!e||tt)){Ee(null),$t(!0);try{if(!(await je("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges){Ee({kind:"error",message:"No local changes to stash."});return}await je("stash_push",{repoPath:e,includeUntracked:!0}),await Pn(),await Ss(e),Ee({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(R){const L=R instanceof Error?R.message:String(R);Ee({kind:"error",message:L}),console.error("Failed to stash:",L)}finally{$t(!1)}}}async function Ii(R){if(!e||jt)return!1;const L=R.trim();if(!L)return Ee({kind:"error",message:"Enter a commit message."}),!1;Ee(null),gt(!0);try{if(!(await je("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges)return Ee({kind:"error",message:"No local changes to commit."}),!1;const te=await je("commit_working_tree",{repoPath:e,message:L});return U(te),await Pn(),await Ss(e),Ee({kind:"success",message:"Committed local changes."}),!0}catch($){const te=$ instanceof Error?$.message:String($);return Ee({kind:"error",message:te}),console.error("Failed to commit:",te),!1}finally{gt(!1)}}async function di(){if(!e||mn)return!1;Ee(null),pt(!0);try{if(!(await je("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges)return Ee({kind:"error",message:"No local changes to stage."}),!1;const L=await je("stage_working_tree",{repoPath:e});return U(L),await Pn(),await Ss(e),Ee({kind:"success",message:"Staged all changes."}),!0}catch(R){const L=R instanceof Error?R.message:String(R);return Ee({kind:"error",message:L}),console.error("Failed to stage:",L),!1}finally{pt(!1)}}async function fi(R,L){if(!(!e||Ut)){bn(!0),Ee(null);try{const $=/^STASH:(\d+)$/.exec(R);let te;if($){const re=parseInt($[1],10);te=await je("move_stash_to_new_branch",{repoPath:e,stashIndex:re,branchName:L})}else te=await je("create_branch_from_uncommitted",{repoPath:e,branchName:L});U(te),await Ss(e),Ee({kind:"success",message:`Moved to new branch "${L}"`})}catch($){const te=$ instanceof Error?$.message:String($);Ee({kind:"error",message:te}),console.error("Failed to create branch from node:",te)}finally{bn(!1)}}}async function bo(R){if(!(!e||Ut)){bn(!0),Ee(null);try{const L=await je("create_root_branch",{repoPath:e,branchName:R});U(L),await Ss(e),Ee({kind:"success",message:`Created new root branch "${R}"`})}catch(L){const $=L instanceof Error?L.message:String(L);Ee({kind:"error",message:$}),console.error("Failed to create root branch:",$)}finally{bn(!1)}}}async function Ro(R,L){if(!e)return;const $=Array.from(new Set(R.filter(te=>!!te&&te!==L)));if($.length!==0){Ee(null),vt(!0);try{let te=null;for(const re of $)te=await je("merge_ref_into_branch",{repoPath:e,sourceRef:re,targetBranch:L});await Ss(e),te&&U(te),Ee({kind:"success",message:$.length===1?`Merged ${$[0].slice(0,7)} into ${L}`:`Merged ${$.length} commits into ${L}`})}catch(te){const re=te instanceof Error?te.message:String(te);Ee({kind:"error",message:re}),console.error("Failed to merge refs into branch:",re)}finally{vt(!1)}}}async function Zi(){if(!(!e||At)){Ee(null),zt(!0);try{let R=[];try{R=await je("push_all_unpushed_branches",{repoPath:e})}catch(L){const $=L instanceof Error?L.message:String(L);if(!/non-fast-forward|fetch first|rejected/i.test($))throw L;const re=F==null?void 0:F.branchName;if(!re)throw L;const Be=window.confirm(`Push all hit non-fast-forward.

OK: pull --rebase then retry
Cancel: pull --no-rebase then retry`);await je("pull_branch_with_strategy",{repoPath:e,branchName:re,rebase:Be}),R=await je("push_all_unpushed_branches",{repoPath:e})}await Pn(),await Vn(e),Ee({kind:"success",message:R.length>0?R.length===1?`Pushed ${R[0].branchName}`:`Pushed ${R.length} branches`:"Everything local is already pushed."})}catch(R){const L=R instanceof Error?R.message:String(R);Ee({kind:"error",message:L}),console.error("Failed to push all branches:",L)}finally{zt(!1)}}}async function ki(){if(!(!e||At)){Ee(null),zt(!0);try{const R=await je("push_current_branch",{repoPath:e});await Pn(),await Vn(e),Ee({kind:"success",message:`Pushed ${R.branchName}`})}catch(R){const L=R instanceof Error?R.message:String(R);if(/non-fast-forward|fetch first|rejected/i.test(L)){const te=window.confirm(`Push was rejected (non-fast-forward).

OK: pull --rebase then retry push
Cancel: pull --no-rebase then retry push`);try{const re=F==null?void 0:F.branchName;if(!re)throw new Error("Cannot resolve current branch for pull.");await je("pull_branch_with_strategy",{repoPath:e,branchName:re,rebase:te});const Be=await je("push_current_branch",{repoPath:e});await Pn(),await Vn(e),Ee({kind:"success",message:`Pulled (${te?"rebase":"merge"}) and pushed ${Be.branchName}`});return}catch(re){const Be=re instanceof Error?re.message:String(re);Ee({kind:"error",message:Be}),console.error("Failed to resolve non-fast-forward:",Be);return}}Ee({kind:"error",message:L}),console.error("Failed to push current branch:",L)}finally{zt(!1)}}}async function hi(R){var $;if(!e||At)return;const L=Array.from(new Map(R.filter(te=>te.branchName&&te.targetSha).map(te=>[te.branchName,te])).values());if(L.length!==0){Ee(null),zt(!0);try{for(const te of L)try{await je("push_branch",{repoPath:e,branchName:te.branchName,targetSha:te.targetSha})}catch(re){const Be=re instanceof Error?re.message:String(re);if(!/non-fast-forward|fetch first|rejected/i.test(Be))throw re;const ht=window.confirm(`Push rejected for ${te.branchName} (non-fast-forward).

OK: pull --rebase then retry
Cancel: pull --no-rebase then retry`);await je("pull_branch_with_strategy",{repoPath:e,branchName:te.branchName,rebase:ht}),await je("push_branch",{repoPath:e,branchName:te.branchName,targetSha:te.targetSha})}await Ss(e),Ee({kind:"success",message:L.length===1?`Pushed ${L[0].branchName} through ${($=L[0].targetSha)==null?void 0:$.slice(0,7)}`:`Pushed ${L.length} selected commit ranges`})}catch(te){const re=te instanceof Error?te.message:String(te);Ee({kind:"error",message:re}),console.error("Failed to push selected commits:",re)}finally{zt(!1)}}}async function It(R){var Be;if(!e||dt)return;const L=Array.from(new Set(R.branchNames.filter(Ke=>Ke&&Ke!==M))),$=!!R.discardUncommittedChanges,te=(Be=R.stashIndices)!=null?Be:[],re=Array.from(new Set(te)).sort((Ke,ht)=>ht-Ke);if(!(L.length===0&&!$&&re.length===0)){Ee(null),V(!0);try{for(const Ht of re)await je("stash_drop",{repoPath:e,stashIndex:Ht});const Ke=L.length>0||$?await je("delete_selected_elements",{repoPath:e,branchNames:L,discardUncommittedChanges:$}):{deletedBranches:[],discardedUncommittedChanges:!1};await Ss(e);const ht=[];re.length>0&&ht.push(re.length===1?`removed stash ${re[0]+1}`:`removed ${re.length} stashes`),Ke.discardedUncommittedChanges&&ht.push("discarded local uncommitted changes"),Ke.deletedBranches.length>0&&ht.push(Ke.deletedBranches.length===1?`deleted ${Ke.deletedBranches[0]}`:`deleted ${Ke.deletedBranches.length} branches`),Ee({kind:"success",message:ht.length>0?ht.join(" and "):"Nothing to delete."})}catch(Ke){const ht=Ke instanceof Error?Ke.message:String(Ke);Ee({kind:"error",message:ht}),console.error("Failed to delete selected elements:",ht)}finally{V(!1)}}}function Xo(R){R&&(Pe(R),ie(L=>L+1))}function Bo(R){R&&(Ze(R),ie(L=>L+1))}const{enrichedBranches:vo,enrichedBranchCommitPreviews:wo,enrichedBranchUniqueAheadCounts:So,enrichedDirectCommits:si,enrichedUnpushedDirectCommits:ji,visualCheckedOutRef:Yn}=_.useMemo(()=>{var ct,Qe,lt,rn,dn,An,Zt,Xt,Nt,Gt,qn,En,Us,Co,es,oi,mi,pi,Kn,_i,Mi,mr,Pr,Hr,Ur,Ll,Ol;const R=s2(ze,g,S,Ne,Fe,M,(ct=F==null?void 0:F.hasUncommittedChanges)!=null?ct:!1);let L=R.branches,$=R.directCommits,te=k,re=R.branchCommitPreviews,Be=R.branchUniqueAheadCounts,Ke=F;const ht=Vt?$.some(jn=>jn.fullSha===Vt||jn.sha===Vt.slice(0,7)):!0;if(Vt&&Mt&&!ht){const jn=(An=(dn=(Qe=$.find(Io=>Io.fullSha===Mt||Io.sha===Mt.slice(0,7)))==null?void 0:Qe.date)!=null?dn:(rn=(lt=re[M])==null?void 0:lt.find(Io=>Io.fullSha===Mt||Io.sha===Mt.slice(0,7)))==null?void 0:rn.date)!=null?An:null,Rn=jn?new Date(new Date(jn).getTime()+1e3).toISOString():new Date().toISOString(),ko=(Gt=Mt!=null?Mt:(Zt=L.find(Io=>Io.name===M))==null?void 0:Zt.headSha)!=null?Gt:(Nt=(Xt=$[0])==null?void 0:Xt.fullSha)!=null?Nt:null,Vs={fullSha:Vt,sha:Vt.slice(0,7),parentSha:ko,message:((qn=qt==null?void 0:qt.subject)==null?void 0:qn.trim())||`Remote commit on origin/${M}`,author:((En=qt==null?void 0:qt.author)==null?void 0:En.trim())||"Unknown",date:Rn,kind:"commit",isRemote:!0};$=[{fullSha:Vt,sha:Vt.slice(0,7),parentSha:ko,parentShas:ko?[ko]:[],childShas:[],branch:M,message:Vs.message,author:Vs.author,date:Rn,kind:"commit",isRemote:!0},...$],re={...re,[M]:[Vs,...(Us=re[M])!=null?Us:[]]},L=L.map(Io=>Io.name===M?{...Io,headSha:Vt,lastCommitDate:Rn}:Io)}if(!!Vt&&!!Mt&&!ht&&(F==null?void 0:F.branchName)===M&&F.headSha!==Vt&&(F.hasUncommittedChanges||k.length>0)){const jn=`${M} (local)`,Rn=new Set(k.map(Es=>Es.fullSha));F!=null&&F.headSha&&Rn.add(F.headSha);const ko=(mi=(oi=(Co=k[0])==null?void 0:Co.date)!=null?oi:F!=null&&F.headSha?(es=$.find(Es=>Es.fullSha===F.headSha))==null?void 0:es.date:void 0)!=null?mi:new Date().toISOString();L.some(Es=>Es.name===jn)||(L=[...L,{name:jn,commitsAhead:Math.max(1,Rn.size),commitsBehind:0,lastCommitDate:ko,lastCommitAuthor:(pi=F==null?void 0:F.branchName)!=null?pi:"You",status:"fresh",remoteSyncStatus:"unpushed",unpushedCommits:Math.max(1,Rn.size),headSha:(Mi=F==null?void 0:F.headSha)!=null?Mi:(_i=(Kn=k[0])==null?void 0:Kn.fullSha)!=null?_i:"WORKING_TREE",parentBranch:M}]),$=$.map(Es=>Es.branch===M&&Rn.has(Es.fullSha)?{...Es,branch:jn}:Es),te=te.map(Es=>Es.branch===M&&Rn.has(Es.fullSha)?{...Es,branch:jn}:Es);const Vs=(mr=re[M])!=null?mr:[],Ji=Vs.filter(Es=>Es.fullSha==="WORKING_TREE"||Rn.has(Es.fullSha)),Io=Vs.filter(Es=>!Ji.includes(Es));Ji.length>0&&(re={...re,[M]:Io,[jn]:[...Ji,...(Pr=re[jn])!=null?Pr:[]]}),Be={...Be,[jn]:Math.max(1,Rn.size)},(Ke==null?void 0:Ke.branchName)===M&&(Ke={...Ke,branchName:jn})}if(!(Ke!=null&&Ke.hasUncommittedChanges))return{enrichedBranches:L,enrichedDirectCommits:$,enrichedUnpushedDirectCommits:te,enrichedBranchCommitPreviews:re,enrichedBranchUniqueAheadCounts:Be,visualCheckedOutRef:Ke};const an=Ke.headSha||Ke.parentSha||null,Cs=(Ur=(Hr=$[0])==null?void 0:Hr.fullSha)!=null?Ur:null,T=(jn,Rn)=>!jn||!Rn?!1:jn===Rn||jn.startsWith(Rn)||Rn.startsWith(jn),D=[{name:M,headSha:Cs!=null?Cs:"",isDefault:!0},...L.map(jn=>({name:jn.name,headSha:jn.headSha,isDefault:!1}))],Y=Ke.branchName?D.find(jn=>jn.name===Ke.branchName):void 0,G=an?D.filter(jn=>T(jn.headSha,an)):[],ne=(Ll=Y!=null?Y:G.find(jn=>jn.isDefault))!=null?Ll:G[0],he=ne&&!ne.isDefault?L.find(jn=>jn.name===ne.name):void 0,P=(()=>{var Rn;if(!an)return null;const jn=$.find(ko=>T(ko.fullSha,an)||T(ko.sha,an));if(jn!=null&&jn.date)return jn.date;if(he){const ko=((Rn=re[he.name])!=null?Rn:[]).find(Vs=>T(Vs.fullSha,an)||T(Vs.sha,an));if(ko!=null&&ko.date)return ko.date}return null})(),Z=P?new Date(P).getTime():Number.NaN,le=Date.now(),me=Number.isFinite(Z)?Math.max(le,Z+1):le,Me=new Date(me).toISOString(),Ge={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:an,message:"Local uncommitted changes",author:"You",date:Me,kind:"uncommitted"};return he?{enrichedBranches:L.map(Rn=>Rn.name===he.name?{...Rn,commitsAhead:Rn.commitsAhead+1,unpushedCommits:Rn.unpushedCommits+1,lastCommitDate:Me,headSha:"WORKING_TREE"}:Rn),enrichedDirectCommits:$,enrichedUnpushedDirectCommits:te,enrichedBranchCommitPreviews:{...re,[he.name]:[Ge,...re[he.name]||[]]},enrichedBranchUniqueAheadCounts:{...Be,[he.name]:Math.max(0,(Ol=Object.prototype.hasOwnProperty.call(Be,he.name)?Be[he.name]:he.commitsAhead)!=null?Ol:0)+1},visualCheckedOutRef:Ke}:{enrichedBranches:L,enrichedBranchCommitPreviews:{...re,[M]:[Ge,...re[M]||[]]},enrichedBranchUniqueAheadCounts:{...Be},enrichedDirectCommits:$,enrichedUnpushedDirectCommits:te,visualCheckedOutRef:Ke}},[g,Ne,Fe,F,M,S,qt,Mt,Vt,ze,k]);_.useEffect(()=>{var te;if(!(!yt&&!nt&&(Vt==null||wn&&Mt!=null)))return;const L=Yn!=null&&Yn.hasUncommittedChanges?"WORKING_TREE":(te=Yn==null?void 0:Yn.headSha)!=null?te:null;if(!L)return;const $=`${e!=null?e:"__no-repo__"}|${ln}|${L}`;Oo.current!==$&&(Oo.current=$,Pe(L),ie(re=>re+1))},[wn,nt,ln,yt,Mt,Vt,e,Yn==null?void 0:Yn.hasUncommittedChanges,Yn==null?void 0:Yn.headSha]),_.useEffect(()=>{Oo.current=null},[e]);const C=_.useMemo(()=>{const R={...Je};return R[M]=null,R},[Je,M,vo]),W=_.useMemo(()=>{var R;return(R=$w(vo,M,C,xe))!=null?R:vp(vo,M,wo,C)},[vo,M,wo,C,xe]),fe=_.useMemo(()=>Ud(xs),[xs]),Ae=_.useMemo(()=>Ud(zo),[zo]),De=_.useMemo(()=>e?ld(e,ln,xs,zo):null,[e,ln,fe,Ae]);_.useEffect(()=>{if(!e||!De){ao(null),Do(null);return}const R=Cn.current.get(De);if(R){ao(R),Do(De),ss.current.add(De);return}let L=!1;return ao(null),Do(null),je("get_repo_layout_snapshot",{repoPath:e,layoutKey:De}).then($=>{if(L||!$)return;const te=JSON.parse($),re=ym(te);Cn.current.set(De,re),ss.current.add(De),ao(re),Do(De)}).catch(()=>{L||(ao(null),Do(null))}),()=>{L=!0}},[e,De]);const rt=_.useMemo(()=>{var R;if(Le.trim().length===0&&De&&Fo===De&&ds)return ds;if(yt){const L=De&&(R=Cn.current.get(De))!=null?R:null;if(L)return L;if(us.current)return us.current}return wp({lanes:W,branches:vo,mergeNodes:b,directCommits:si,unpushedDirectCommits:ji,defaultBranch:M,branchCommitPreviews:wo,branchParentByName:C,branchUniqueAheadCounts:So,manuallyOpenedClumps:xs,manuallyClosedClumps:zo,isDebugOpen:!1,gridSearchQuery:Le,gridFocusSha:ge,checkedOutRef:Yn!=null?Yn:null,orientation:ln})},[W,vo,b,si,ji,M,wo,C,So,xs,zo,Le,ge,(os=Yn==null?void 0:Yn.headSha)!=null?os:null,(eo=Yn==null?void 0:Yn.branchName)!=null?eo:null,ln,Le,De,Fo,ds,yt]);_.useEffect(()=>{us.current=rt},[rt]),_.useEffect(()=>{if(!e||!De||(Cn.current.set(De,rt),ss.current.has(De)))return;ss.current.add(De);const R=JSON.stringify(gm(rt));je("store_repo_layout_snapshot",{repoPath:e,layoutKey:De,payloadJson:R}).catch(()=>{ss.current.delete(De)})},[e,De,rt]),_.useEffect(()=>{try{const R=window.localStorage.getItem(ux);if(R){const $=Number(R);Number.isFinite($)&&Eo(Math.min(px,Math.max(mx,$)))}const L=window.localStorage.getItem(dx);L!=null&&To(L==="true")}catch{}},[]),_.useEffect(()=>{un.current=ts},[ts]),_.useEffect(()=>{const R=Os.current;R&&(R.style.width=cs?"0px":`${ts}px`)},[ts,cs]),_.useEffect(()=>{try{window.localStorage.setItem(dx,String(cs))}catch{}},[cs]);const Kt=R=>{const L=Jn.current;if(!L)return;const $=L.startWidth+(R-L.startX);L.pendingWidth=Math.min(px,Math.max(mx,$));const te=Os.current;te&&(te.style.width=`${L.pendingWidth}px`)},Yt=(R,L)=>{const $=Jn.current;if($&&!(L!=null&&$.pointerId!==L)){Jn.current=null,document.body.style.cursor="",document.body.style.userSelect="",Eo($.pendingWidth);try{window.localStorage.setItem(ux,String($.pendingWidth))}catch{}}},cn=R=>{R.button===0&&(R.preventDefault(),Jn.current={startX:R.clientX,startWidth:un.current,pendingWidth:un.current,pointerId:R.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",R.currentTarget.setPointerCapture(R.pointerId))},Tn=R=>{const L=Jn.current;!L||L.pointerId!==R.pointerId||Kt(R.clientX)},Dn=R=>{if(Jn.current){try{R.currentTarget.releasePointerCapture(R.pointerId)}catch{}Yt("pointerup",R.pointerId)}},gn=R=>{if(Jn.current){try{R.currentTarget.releasePointerCapture(R.pointerId)}catch{}Yt("pointercancel",R.pointerId)}};return l.jsx("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:l.jsx("div",{className:"relative z-30 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:Os,className:"relative z-[60] flex h-full min-h-0 flex-none overflow-visible",style:{width:cs?64:ts},children:[l.jsx("button",{type:"button",className:"window-no-drag absolute right-2.5 left-22 top-2.25 z-[9999] inline-flex h-7 w-7 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted","aria-label":cs?"Open sidebar":"Collapse sidebar",onClick:()=>To(R=>!R),children:cs?l.jsx(Tw,{className:"h-4 w-4 shrink-0"}):l.jsx(Mw,{className:"h-4 w-4 shrink-0"})}),l.jsx(B3,{className:O3("min-h-0 shrink-0 overflow-hidden pt-14 transition-[width,opacity] duration-300 ease-in-out","opacity-100"),style:{width:"100%"},collapsed:cs,projects:Ms,activeProjectPath:e,onSelectProject:Ps,onAddProject:ei,onRemoveProject:Ls,onReorderProjects:Zs,onRevealProjectInFinder:Ci,projectLoading:nt||(p&&e?!((en=d[e])!=null&&en.loaded):!1),projectError:kt,checkedOutRef:F,showCommits:!1,manuallyOpenedClumpsByProject:H,manuallyClosedClumpsByProject:ke,manuallyOpenedClumps:xs,manuallyClosedClumps:zo,setManuallyOpenedClumps:Oi,setManuallyClosedClumps:Qo,gridLayoutModel:rt,onSelectCommit:Xo,onSelectBranch:Bo}),cs?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:cn,onPointerMove:Tn,onPointerUp:Dn,onPointerCancel:gn,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"})]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-40 h-12"}),l.jsx(pS,{branches:vo,mergeNodes:b,directCommits:si,unpushedDirectCommits:ji,unpushedCommitShasByBranch:I,openPRs:wt,defaultBranch:M,branchCommitPreviews:wo,branchParentByName:C,branchUniqueAheadCounts:So,gridSearchQuery:Le,gridSearchJumpToken:ae,gridSearchJumpDirection:B,gridFocusSha:ge,isLoading:yt||nt,onGridSearchResultCountChange:ee,onGridSearchResultIndexChange:Re,onGridSearchFocusChange:Pe,checkedOutRef:Yn,onCommitClick:ti,onMergeRefsIntoBranch:Ro,mergeInProgress:bt,onPushAllBranches:Zi,onPushCurrentBranch:ki,onPushCommitTargets:hi,pushInProgress:At,onDeleteSelection:It,deleteInProgress:dt,worktrees:K,currentRepoPath:e!=null?e:void 0,onRemoveWorktree:xo,removeWorktreeInProgress:pe,onSwitchToWorktree:yo,onStashLocalChanges:ni,stashInProgress:tt,stashDisabled:!1,onCommitLocalChanges:Ii,commitInProgress:jt,commitDisabled:!1,onStageAllChanges:di,stageInProgress:mn,onCreateBranchFromNode:fi,onCreateRootBranch:bo,createBranchFromNodeInProgress:Ut,isMutationBusy:Rt,isDebugOpen:mt,onDebugClose:()=>ls(!1),onInteractionChange:pn,manuallyOpenedClumps:xs,manuallyClosedClumps:zo,setManuallyOpenedClumps:Oi,setManuallyClosedClumps:Qo,layoutModel:rt,orientation:ln,gridHudProps:zi})]})]})})})}var $3=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,I3={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(e)),e.textContent=$3}var vs=I3,P3=`.icon-transitions-module__iconState___uqK9J {
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
}`,H3={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-components-icon-transitions");e||(e=document.createElement("style"),e.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(e)),e.textContent=P3}var ps=H3,U3=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),V3=({size:e=24,style:n={}})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Y3=({size:e=20,...n})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),W3=({size:e=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${ps.iconState} ${n?ps.hiddenScaled:ps.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${ps.iconState} ${n?ps.visibleScaled:ps.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),F3=({size:e=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${ps.iconStateFast} ${i?ps.visibleScaled:u?ps.sending:ps.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${ps.iconStateFast} ${a?ps.visibleScaled:ps.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ps.iconStateFast} ${c?ps.visibleScaled:ps.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},X3=({size:e=24,isOpen:n=!0})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ps.iconFade} ${n?ps.visible:ps.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ps.iconFade} ${n?ps.hidden:ps.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),G3=({size:e=24,isPaused:n=!1})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ps.iconFadeFast} ${n?ps.hidden:ps.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${ps.iconFadeFast} ${n?ps.visible:ps.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),q3=({size:e=16})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),K3=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),o2=({size:e=16})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Q3=({size:e=24})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),Z3=({size:e=16})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),J3=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),ej=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),tj=({size:e=24})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),nj=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),sj=({size:e=24})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),i2=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],wm=i2.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(""),fp="feedback-freeze-styles",Sm="__agentation_freeze";function oj(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const e=window;return e[Sm]||(e[Sm]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[Sm]}var Nn=oj();typeof window<"u"&&!Nn.installed&&(Nn.origSetTimeout=window.setTimeout.bind(window),Nn.origSetInterval=window.setInterval.bind(window),Nn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,n,...i)=>typeof e=="string"?Nn.origSetTimeout(e,n):Nn.origSetTimeout((...a)=>{Nn.frozen?Nn.frozenTimeoutQueue.push(()=>e(...a)):e(...a)},n,...i),window.setInterval=(e,n,...i)=>typeof e=="string"?Nn.origSetInterval(e,n):Nn.origSetInterval((...a)=>{Nn.frozen||e(...a)},n,...i),window.requestAnimationFrame=e=>Nn.origRAF(n=>{Nn.frozen?Nn.frozenRAFQueue.push(e):e(n)}),Nn.installed=!0);var Qt=Nn.origSetTimeout,ij=Nn.origSetInterval,Sl=Nn.origRAF;function aj(e){return e?i2.some(n=>{var i;return!!((i=e.closest)!=null&&i.call(e,`[${n}]`))}):!1}function rj(){if(typeof document>"u"||Nn.frozen)return;Nn.frozen=!0,Nn.frozenTimeoutQueue=[],Nn.frozenRAFQueue=[];let e=document.getElementById(fp);e||(e=document.createElement("style"),e.id=fp),e.textContent=`
    *${wm},
    *${wm}::before,
    *${wm}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),Nn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;aj(i)||(n.pause(),Nn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function gx(){var i;if(typeof document>"u"||!Nn.frozen)return;Nn.frozen=!1;const e=Nn.frozenTimeoutQueue;Nn.frozenTimeoutQueue=[];for(const a of e)Nn.origSetTimeout(()=>{if(Nn.frozen){Nn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=Nn.frozenRAFQueue;Nn.frozenRAFQueue=[];for(const a of n)Nn.origRAF(c=>{if(Nn.frozen){Nn.frozenRAFQueue.push(a);return}a(c)});for(const a of Nn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}Nn.pausedAnimations=[],(i=document.getElementById(fp))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Cm(e){if(!e)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{e.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var Vd=_.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:y,style:g,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:w=!1,computedStyles:S},j){const[k,E]=_.useState(u),[I,N]=_.useState(!1),[M,X]=_.useState("initial"),[F,U]=_.useState(!1),[K,de]=_.useState(!1),pe=_.useRef(null),ye=_.useRef(null),Le=_.useRef(null),Ze=_.useRef(null);_.useEffect(()=>{b&&M!=="exit"&&X("exit")},[b,M]),_.useEffect(()=>{Qt(()=>{X("enter")},0);const _e=Qt(()=>{X("entered")},200),ke=Qt(()=>{const z=pe.current;z&&(Cm(z),z.selectionStart=z.selectionEnd=z.value.length,z.scrollTop=z.scrollHeight)},50);return()=>{clearTimeout(_e),clearTimeout(ke),Le.current&&clearTimeout(Le.current),Ze.current&&clearTimeout(Ze.current)}},[]);const ae=_.useCallback(()=>{Ze.current&&clearTimeout(Ze.current),N(!0),Ze.current=Qt(()=>{N(!1),Cm(pe.current)},250)},[]);_.useImperativeHandle(j,()=>({shake:ae}),[ae]);const ie=_.useCallback(()=>{X("exit"),Le.current=Qt(()=>{p()},150)},[p]),B=_.useCallback(()=>{k.trim()&&h(k.trim())},[k,h]),se=_.useCallback(_e=>{_e.stopPropagation(),!_e.nativeEvent.isComposing&&(_e.key==="Enter"&&!_e.shiftKey&&(_e.preventDefault(),B()),_e.key==="Escape"&&ie())},[B,ie]),H=[vs.popup,w?vs.light:"",M==="enter"?vs.enter:"",M==="entered"?vs.entered:"",M==="exit"?vs.exit:"",I?vs.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:ye,className:H,"data-annotation-popup":!0,style:g,onClick:_e=>_e.stopPropagation(),children:[l.jsxs("div",{className:vs.header,children:[S&&Object.keys(S).length>0?l.jsxs("button",{className:vs.headerToggle,onClick:()=>{const _e=K;de(!K),_e&&Qt(()=>Cm(pe.current),0)},type:"button",children:[l.jsx("svg",{className:`${vs.chevron} ${K?vs.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:vs.element,children:n})]}):l.jsx("span",{className:vs.element,children:n}),i&&l.jsx("span",{className:vs.timestamp,children:i})]}),S&&Object.keys(S).length>0&&l.jsx("div",{className:`${vs.stylesWrapper} ${K?vs.expanded:""}`,children:l.jsx("div",{className:vs.stylesInner,children:l.jsx("div",{className:vs.stylesBlock,children:Object.entries(S).map(([_e,ke])=>l.jsxs("div",{className:vs.styleLine,children:[l.jsx("span",{className:vs.styleProperty,children:_e.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:vs.styleValue,children:ke}),";"]},_e))})})}),a&&l.jsxs("div",{className:vs.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:pe,className:vs.textarea,style:{borderColor:F?x:void 0},placeholder:c,value:k,onChange:_e=>E(_e.target.value),onFocus:()=>U(!0),onBlur:()=>U(!1),rows:2,onKeyDown:se}),l.jsxs("div",{className:vs.actions,children:[y&&l.jsx("div",{className:vs.deleteWrapper,children:l.jsx("button",{className:vs.deleteButton,onClick:y,type:"button",children:l.jsx(tj,{size:22})})}),l.jsx("button",{className:vs.cancel,onClick:ie,children:"Cancel"}),l.jsx("button",{className:vs.submit,style:{backgroundColor:x,opacity:k.trim()?1:.4},onClick:B,disabled:!k.trim(),children:d})]})]})}),lj=({content:e,children:n,...i})=>{const[a,c]=_.useState(!1),[u,d]=_.useState(!1),[h,p]=_.useState({top:0,right:0}),y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=()=>{if(y.current){const j=y.current.getBoundingClientRect();p({top:j.top+j.height/2,right:window.innerWidth-j.left+8})}},w=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),g.current=Qt(()=>{c(!0)},500)},S=()=>{g.current&&(clearTimeout(g.current),g.current=null),c(!1),x.current=Qt(()=>{d(!1)},150)};return _.useEffect(()=>()=>{g.current&&clearTimeout(g.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:y,onMouseEnter:w,onMouseLeave:S,...i,children:n}),u&&Al.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:e}),document.body)]})},cj=`.styles-module__tooltip___mcXL2 {
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
}`,uj={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-help-tooltip-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(e)),e.textContent=cj}var yx=uj,Br=({content:e})=>l.jsx(lj,{className:yx.tooltip,content:e,children:l.jsx(Y3,{className:yx.tooltipIcon})}),Et={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},a2=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...Et.navigation},{type:"header",label:"Header",...Et.header},{type:"hero",label:"Hero",...Et.hero},{type:"section",label:"Section",...Et.section},{type:"sidebar",label:"Sidebar",...Et.sidebar},{type:"footer",label:"Footer",...Et.footer},{type:"modal",label:"Modal",...Et.modal},{type:"banner",label:"Banner",...Et.banner},{type:"drawer",label:"Drawer",...Et.drawer},{type:"popover",label:"Popover",...Et.popover},{type:"divider",label:"Divider",...Et.divider}]},{section:"Content",items:[{type:"card",label:"Card",...Et.card},{type:"text",label:"Text",...Et.text},{type:"image",label:"Image",...Et.image},{type:"video",label:"Video",...Et.video},{type:"table",label:"Table",...Et.table},{type:"grid",label:"Grid",...Et.grid},{type:"list",label:"List",...Et.list},{type:"chart",label:"Chart",...Et.chart},{type:"codeBlock",label:"Code Block",...Et.codeBlock},{type:"map",label:"Map",...Et.map},{type:"timeline",label:"Timeline",...Et.timeline},{type:"calendar",label:"Calendar",...Et.calendar},{type:"accordion",label:"Accordion",...Et.accordion},{type:"carousel",label:"Carousel",...Et.carousel},{type:"logo",label:"Logo",...Et.logo},{type:"faq",label:"FAQ",...Et.faq},{type:"gallery",label:"Gallery",...Et.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...Et.button},{type:"input",label:"Input",...Et.input},{type:"search",label:"Search",...Et.search},{type:"form",label:"Form",...Et.form},{type:"tabs",label:"Tabs",...Et.tabs},{type:"dropdown",label:"Dropdown",...Et.dropdown},{type:"toggle",label:"Toggle",...Et.toggle},{type:"stepper",label:"Stepper",...Et.stepper},{type:"rating",label:"Rating",...Et.rating},{type:"fileUpload",label:"File Upload",...Et.fileUpload},{type:"checkbox",label:"Checkbox",...Et.checkbox},{type:"radio",label:"Radio",...Et.radio},{type:"slider",label:"Slider",...Et.slider},{type:"datePicker",label:"Date Picker",...Et.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...Et.avatar},{type:"badge",label:"Badge",...Et.badge},{type:"tag",label:"Tag",...Et.tag},{type:"breadcrumb",label:"Breadcrumb",...Et.breadcrumb},{type:"pagination",label:"Pagination",...Et.pagination},{type:"progress",label:"Progress",...Et.progress},{type:"alert",label:"Alert",...Et.alert},{type:"toast",label:"Toast",...Et.toast},{type:"notification",label:"Notification",...Et.notification},{type:"tooltip",label:"Tooltip",...Et.tooltip},{type:"stat",label:"Stat",...Et.stat},{type:"skeleton",label:"Skeleton",...Et.skeleton},{type:"chip",label:"Chip",...Et.chip},{type:"icon",label:"Icon",...Et.icon},{type:"spinner",label:"Spinner",...Et.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...Et.pricing},{type:"testimonial",label:"Testimonial",...Et.testimonial},{type:"cta",label:"CTA",...Et.cta},{type:"productCard",label:"Product Card",...Et.productCard},{type:"profile",label:"Profile",...Et.profile},{type:"feature",label:"Feature",...Et.feature},{type:"team",label:"Team",...Et.team},{type:"login",label:"Login",...Et.login},{type:"contact",label:"Contact",...Et.contact}]}],ia={};for(const e of a2)for(const n of e.items)ia[n.type]=n;function qe({w:e,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof e=="number"?`${e}px`:e,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function rs({w:e,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof e=="number"?`${e}px`:e,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function ui({size:e}){return l.jsx("div",{style:{width:e,height:e,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function dj({width:e,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:e*.02},children:[l.jsx(rs,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:e*.03,marginLeft:e*.04},children:[l.jsx(qe,{w:e*.06}),l.jsx(qe,{w:e*.07}),l.jsx(qe,{w:e*.05}),l.jsx(qe,{w:e*.06})]}),l.jsx(rs,{w:e*.1,h:Math.min(28,n*.5),radius:4})]})}function fj({width:e,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(qe,{w:e*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(qe,{w:e*.6}),l.jsx(qe,{w:e*.4}),l.jsx(rs,{w:Math.min(140,e*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function hj({width:e,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:e*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(qe,{w:e*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(rs,{w:10,h:10,radius:2}),l.jsx(qe,{w:e*(.4+c*17%30/100)})]},c))]})}function mj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(qe,{w:"60%",h:3,strong:!0}),l.jsx(qe,{w:"80%",h:2}),l.jsx(qe,{w:"70%",h:2}),l.jsx(qe,{w:"60%",h:2})]},c))})}function pj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(qe,{w:e*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(qe,{w:"90%"}),l.jsx(qe,{w:"70%"}),l.jsx(qe,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(rs,{w:70,h:26,radius:4}),l.jsx(rs,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function _j({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(qe,{w:"70%",h:4,strong:!0}),l.jsx(qe,{w:"95%",h:2}),l.jsx(qe,{w:"85%",h:2}),l.jsx(qe,{w:"50%",h:2})]})]})}function gj({width:e,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(qe,{w:e*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(qe,{w:`${70+u*13%25}%`,h:2},u))]})}function yj({width:e,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:e,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:e,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:e*.3,cy:n*.3,r:Math.min(e,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function xj({width:e,height:n}){const i=Math.max(2,Math.min(5,Math.floor(e/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(qe,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(qe,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function bj({width:e,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(ui,{size:8}),l.jsx(qe,{w:`${55+c*17%35}%`,h:2})]},c))})}function vj({width:e,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(qe,{w:Math.max(20,e*.5),h:3,strong:!0})})}function wj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(qe,{w:Math.min(80,e*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(qe,{w:"40%",h:2})})]})}function Sj({width:e,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(qe,{w:60+c*17%30,h:2}),l.jsx(rs,{w:"100%",h:28,radius:4})]},c)),l.jsx(rs,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function Cj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(qe,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(qe,{w:"80%",h:2}),l.jsx(qe,{w:"65%",h:2}),l.jsx(qe,{w:"75%",h:2})]})]})}function kj({width:e,height:n}){const i=Math.min(e,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("circle",{cx:e/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:e/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${e/2-i*.55} ${n*.78} C${e/2-i*.55} ${n*.55} ${e/2+i*.55} ${n*.55} ${e/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function jj({width:e,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(qe,{w:Math.max(16,e*.5),h:2,strong:!0})})}function Mj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(qe,{w:e*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(qe,{w:e*.35})]})}function Ej({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:e*.04},children:[l.jsx(qe,{w:e*.3,h:4,strong:!0}),l.jsx(qe,{w:e*.7}),l.jsx(qe,{w:e*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:e*.03,marginTop:n*.06},children:[l.jsx(rs,{w:"33%",h:"100%",radius:4}),l.jsx(rs,{w:"33%",h:"100%",radius:4}),l.jsx(rs,{w:"33%",h:"100%",radius:4})]})]})}function Tj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(rs,{w:"100%",h:"100%",radius:4},u))})}function Aj({width:e,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(qe,{w:e*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(qe,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function Nj({width:e,height:n}){const i=Math.min(e,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:e-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:e-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function Dj({width:e,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(ui,{size:Math.min(14,n*.4)}),l.jsx(qe,{w:"50%",h:2})]})}function Rj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(ui,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(qe,{w:"60%",h:3,strong:!0}),l.jsx(qe,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function Bj({width:e,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:e,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:e*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function Lj({width:e,height:n}){const i=Math.max(3,Math.min(7,Math.floor(e/50))),a=e/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(rs,{w:a,h:`${d}%`,radius:2},u)})})}function Oj({width:e,height:n}){const i=Math.min(e,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(rs,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function zj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(qe,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function $j({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(qe,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function Ij({width:e,height:n}){const i=Math.max(3,Math.min(5,Math.floor(e/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(rs,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function Pj({width:e}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function Hj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(qe,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function Uj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(rs,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(ui,{size:5}),l.jsx(ui,{size:5}),l.jsx(ui,{size:5})]})]})}function Vj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(qe,{w:e*.4,h:3,strong:!0}),l.jsx(qe,{w:e*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(ui,{size:5}),l.jsx(qe,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(rs,{w:e*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function Yj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(qe,{w:"90%",h:2}),l.jsx(qe,{w:"75%",h:2}),l.jsx(qe,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(ui,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(qe,{w:60,h:3,strong:!0}),l.jsx(qe,{w:40,h:2})]})]})]})}function Wj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(qe,{w:e*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(qe,{w:e*.35}),l.jsx(rs,{w:Math.min(140,e*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function Fj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(qe,{w:"40%",h:3,strong:!0}),l.jsx(qe,{w:"70%",h:2})]})]})}function Xj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(qe,{w:e*.4,h:3,strong:!0}),l.jsx(rs,{w:60,h:Math.min(24,n*.6),radius:4})]})}function Gj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(qe,{w:e*.5,h:2}),l.jsx(qe,{w:e*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(qe,{w:e*.3,h:2})]})}function qj({width:e,height:n}){const i=Math.max(3,Math.min(5,Math.floor(e/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function Kj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(qe,{w:Math.max(16,e*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function Qj({width:e,height:n}){const a=Math.min(n*.7,e/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function Zj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:e,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:e,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:e*.4,y1:0,x2:e*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function Jj({width:e,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(ui,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(qe,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(qe,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function e8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(qe,{w:e*.4,h:2}),l.jsx(qe,{w:e*.25,h:2})]})}function t8({width:e,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(ui,{size:6}),l.jsx(ui,{size:6}),l.jsx(ui,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(qe,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function n8({width:e,height:n}){const c=Math.min((e-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(qe,{w:e*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(qe,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function s8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(ui,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(qe,{w:"50%",h:3,strong:!0}),l.jsx(qe,{w:"75%",h:2})]}),l.jsx(qe,{w:30,h:2})]})}function o8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(qe,{w:"65%",h:4,strong:!0}),l.jsx(qe,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(qe,{w:"30%",h:5,strong:!0}),l.jsx(rs,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function i8({width:e,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(ui,{size:i}),l.jsx(qe,{w:e*.45,h:4,strong:!0}),l.jsx(qe,{w:e*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:e*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(qe,{w:20,h:3,strong:!0}),l.jsx(qe,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(qe,{w:20,h:3,strong:!0}),l.jsx(qe,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(qe,{w:20,h:3,strong:!0}),l.jsx(qe,{w:28,h:2})]})]})]})}function a8({width:e,height:n}){const i=Math.max(e*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:e-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:e*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(qe,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(qe,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function r8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(qe,{w:"70%",h:3,strong:!0}),l.jsx(qe,{w:"90%",h:2}),l.jsx(qe,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function l8({width:e,height:n}){const i=Math.min(n*.7,e*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:e*.08},children:[l.jsx(rs,{w:i,h:i,radius:i*.25}),l.jsx(qe,{w:e*.45,h:Math.max(4,n*.2),strong:!0})]})}function c8({width:e,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(qe,{w:e*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function u8({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function d8({width:e,height:n}){const i=Math.min(e,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function f8({width:e,height:n}){const i=Math.min(e,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("circle",{cx:e/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:e/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function h8({width:e,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=e*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function m8({width:e,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((e-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(qe,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(qe,{w:e*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function p8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function _8({width:e,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(qe,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function g8({width:e,height:n}){const i=Math.min(e,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:l.jsx("path",{d:`M${e/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function y8({width:e,height:n}){const i=Math.min(e,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("circle",{cx:e/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${e/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function x8({width:e,height:n}){const i=Math.min(36,n*.25,e*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:e*.04,alignItems:"flex-start"},children:[l.jsx(rs,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(qe,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(qe,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function b8({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(qe,{w:e*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:e*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(ui,{size:a}),l.jsx(qe,{w:e*.12,h:3,strong:!0}),l.jsx(qe,{w:e*.08,h:2})]},u))})]})}function v8({width:e,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:e*.06,gap:n*.04},children:[l.jsx(qe,{w:e*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(qe,{w:e*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(qe,{w:Math.min(60,e*.2),h:2}),l.jsx(rs,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(rs,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(qe,{w:e*.4,h:2})]})}function w8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:e*.04,gap:n*.03},children:[l.jsx(qe,{w:e*.4,h:4,strong:!0}),l.jsx(qe,{w:e*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(qe,{w:50,h:2}),l.jsx(rs,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(qe,{w:40,h:2}),l.jsx(rs,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(qe,{w:50,h:2}),l.jsx(rs,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(qe,{w:60,h:2}),l.jsx(rs,{w:"100%",h:"100%",radius:4})]}),l.jsx(rs,{w:Math.min(120,e*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var S8={navigation:dj,hero:fj,sidebar:hj,footer:mj,modal:pj,card:_j,text:gj,image:yj,table:xj,list:bj,button:vj,input:wj,form:Sj,tabs:Cj,avatar:kj,badge:jj,header:Mj,section:Ej,grid:Tj,dropdown:Aj,toggle:Nj,search:Dj,toast:Rj,progress:Bj,chart:Lj,video:Oj,tooltip:zj,breadcrumb:$j,pagination:Ij,divider:Pj,accordion:Hj,carousel:Uj,pricing:Vj,testimonial:Yj,cta:Wj,alert:Fj,banner:Xj,stat:Gj,stepper:qj,tag:Kj,rating:Qj,map:Zj,timeline:Jj,fileUpload:e8,codeBlock:t8,calendar:n8,notification:s8,productCard:o8,profile:i8,drawer:a8,popover:r8,logo:l8,faq:c8,gallery:u8,checkbox:d8,radio:f8,slider:h8,datePicker:m8,skeleton:p8,chip:_8,icon:g8,spinner:y8,feature:x8,team:b8,login:v8,contact:w8};function C8({type:e,width:n,height:i,text:a}){const c=S8[e];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:e})})}var k8=`svg[fill=none] {
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
}`,j8={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-design-mode-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(e)),e.textContent=k8}var Ue=j8,_l=24,cd=5;function xx(e,n,i,a,c){let u=1/0,d=1/0;const h=e.x,p=e.x+e.width,y=e.x+e.width/2,g=e.y,x=e.y+e.height,b=e.y+e.height/2,w=!a,S=w?[h,p,y]:[...a.left?[h]:[],...a.right?[p]:[]],j=w?[g,x,b]:[...a.top?[g]:[],...a.bottom?[x]:[]],k=[];for(const ye of n)i.has(ye.id)||k.push(ye);c&&k.push(...c);for(const ye of k){const Le=ye.x,Ze=ye.x+ye.width,ae=ye.x+ye.width/2,ie=ye.y,B=ye.y+ye.height,se=ye.y+ye.height/2;for(const H of S)for(const _e of[Le,Ze,ae]){const ke=_e-H;Math.abs(ke)<cd&&Math.abs(ke)<Math.abs(u)&&(u=ke)}for(const H of j)for(const _e of[ie,B,se]){const ke=_e-H;Math.abs(ke)<cd&&Math.abs(ke)<Math.abs(d)&&(d=ke)}}const E=Math.abs(u)<cd?u:0,I=Math.abs(d)<cd?d:0,N=[],M=new Set,X=h+E,F=p+E,U=y+E,K=g+I,de=x+I,pe=b+I;for(const ye of k){const Le=ye.x,Ze=ye.x+ye.width,ae=ye.x+ye.width/2,ie=ye.y,B=ye.y+ye.height,se=ye.y+ye.height/2;for(const H of[Le,ae,Ze])for(const _e of[X,U,F])if(Math.abs(_e-H)<.5){const ke=`x:${Math.round(H)}`;M.has(ke)||(M.add(ke),N.push({axis:"x",pos:H}))}for(const H of[ie,se,B])for(const _e of[K,pe,de])if(Math.abs(_e-H)<.5){const ke=`y:${Math.round(H)}`;M.has(ke)||(M.add(ke),N.push({axis:"y",pos:H}))}}return{dx:E,dy:I,guides:N}}function bx(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function M8({placements:e,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:y,onSelectionChange:g,deselectSignal:x,onDragMove:b,onDragEnd:w,clearSignal:S,wireframe:j}){const[k,E]=_.useState(new Set),[I,N]=_.useState(null),[M,X]=_.useState(null),[F,U]=_.useState(null),[K,de]=_.useState([]),[pe,ye]=_.useState(null),[Le,Ze]=_.useState(!1),ae=_.useRef(!1),[ie,B]=_.useState(new Set),se=_.useRef(new Map),H=_.useRef(null),_e=_.useRef(null),ke=_.useRef(e);ke.current=e;const z=_.useRef(g);z.current=g;const ce=_.useRef(b);ce.current=b;const ee=_.useRef(w);ee.current=w;const we=_.useRef(x);_.useEffect(()=>{x!==we.current&&(we.current=x,E(new Set))},[x]);const Re=_.useRef(S);_.useEffect(()=>{if(S!==void 0&&S!==Re.current){Re.current=S;const Q=new Set(ke.current.map(Oe=>Oe.id));Q.size>0&&(B(Q),E(new Set),_e.current=null,Qt(()=>{n([]),B(new Set)},180))}},[S,n]),_.useEffect(()=>{const Q=Oe=>{const ft=Oe.target;if(!(ft.tagName==="INPUT"||ft.tagName==="TEXTAREA"||ft.isContentEditable)){if((Oe.key==="Backspace"||Oe.key==="Delete")&&k.size>0){Oe.preventDefault();const xt=new Set(k);B(xt),E(new Set),Qt(()=>{n(ke.current.filter(Ye=>!xt.has(Ye.id))),B(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Oe.key)&&k.size>0){Oe.preventDefault();const xt=Oe.shiftKey?20:1,Ye=Oe.key==="ArrowLeft"?-xt:Oe.key==="ArrowRight"?xt:0,bt=Oe.key==="ArrowUp"?-xt:Oe.key==="ArrowDown"?xt:0;n(e.map(vt=>k.has(vt.id)?{...vt,x:Math.max(0,vt.x+Ye),y:Math.max(0,vt.y+bt)}:vt));return}if(Oe.key==="Escape"){i?a(null):k.size>0&&E(new Set);return}}};return document.addEventListener("keydown",Q),()=>document.removeEventListener("keydown",Q)},[k,i,e,n,a]);const ge=_.useCallback(Q=>{if(Q.button!==0||p||Q.target.closest(`.${Ue.placement}`))return;Q.preventDefault(),Q.stopPropagation();const ft=window.scrollY,Ee=Q.clientX,xt=Q.clientY;if(i){_e.current="place",d==null||d(!0);let Ye=!1,bt=Ee,vt=xt;const At=dt=>{bt=dt.clientX,vt=dt.clientY;const V=Math.abs(bt-Ee),J=Math.abs(vt-xt);if((V>5||J>5)&&(Ye=!0),Ye){const Se=Math.min(Ee,bt),Ne=Math.min(xt,vt),at=Math.abs(bt-Ee),Je=Math.abs(vt-xt);N({x:Se,y:Ne,w:at,h:Je}),U({x:dt.clientX+12,y:dt.clientY+12,text:`${Math.round(at)} × ${Math.round(Je)}`})}},zt=dt=>{window.removeEventListener("mousemove",At),window.removeEventListener("mouseup",zt),N(null),U(null),_e.current=null,d==null||d(!1);const V=Et[i];let J,Se,Ne,at;Ye?(J=Math.min(Ee,bt),Se=Math.min(xt,vt)+ft,Ne=Math.max(_l,Math.abs(bt-Ee)),at=Math.max(_l,Math.abs(vt-xt))):(Ne=V.width,at=V.height,J=Ee-Ne/2,Se=xt+ft-at/2),J=Math.max(0,J),Se=Math.max(0,Se);const Je={id:bx(),type:i,x:J,y:Se,width:Ne,height:at,scrollY:ft,timestamp:Date.now()},$e=[...e,Je];n($e),E(new Set([Je.id])),a(null)};window.addEventListener("mousemove",At),window.addEventListener("mouseup",zt)}else{Q.shiftKey||E(new Set),_e.current="select";let Ye=!1;const bt=At=>{const zt=Math.abs(At.clientX-Ee),dt=Math.abs(At.clientY-xt);if((zt>4||dt>4)&&(Ye=!0),Ye){const V=Math.min(Ee,At.clientX),J=Math.min(xt,At.clientY);X({x:V,y:J,w:Math.abs(At.clientX-Ee),h:Math.abs(At.clientY-xt)})}},vt=At=>{if(window.removeEventListener("mousemove",bt),window.removeEventListener("mouseup",vt),_e.current=null,Ye){const zt=Math.min(Ee,At.clientX),dt=Math.min(xt,At.clientY)+ft,V=Math.abs(At.clientX-Ee),J=Math.abs(At.clientY-xt),Se=new Set(Q.shiftKey?k:new Set);for(const Ne of e)Ne.y-ft,Ne.x+Ne.width>zt&&Ne.x<zt+V&&Ne.y+Ne.height>dt&&Ne.y<dt+J&&Se.add(Ne.id);E(Se)}X(null)};window.addEventListener("mousemove",bt),window.addEventListener("mouseup",vt)}},[i,p,e,n,k]),Pe=_.useCallback((Q,Oe)=>{var Je;if(Q.button!==0)return;const ft=Q.target;if(ft.closest(`.${Ue.handle}`)||ft.closest(`.${Ue.deleteButton}`))return;Q.preventDefault(),Q.stopPropagation();let Ee;Q.shiftKey?(Ee=new Set(k),Ee.has(Oe)?Ee.delete(Oe):Ee.add(Oe)):k.has(Oe)?Ee=new Set(k):Ee=new Set([Oe]),E(Ee),(Ee.size!==k.size||[...Ee].some($e=>!k.has($e)))&&((Je=z.current)==null||Je.call(z,Ee,Q.shiftKey));const Ye=Q.clientX,bt=Q.clientY,vt=new Map;for(const $e of e)Ee.has($e.id)&&vt.set($e.id,{x:$e.x,y:$e.y});_e.current="move",d==null||d(!0);let At=!1,zt=!1,dt=e,V=0,J=0;const Se=new Map;for(const $e of e)vt.has($e.id)&&Se.set($e.id,{w:$e.width,h:$e.height});const Ne=$e=>{var mn;const xe=$e.clientX-Ye,st=$e.clientY-bt;if((Math.abs(xe)>2||Math.abs(st)>2)&&(At=!0),!At)return;if($e.altKey&&!zt){zt=!0;const pt=[];for(const Ut of e)vt.has(Ut.id)&&pt.push({...Ut,id:bx(),timestamp:Date.now()});dt=[...e,...pt]}let Fe=1/0,ot=1/0,ze=-1/0,it=-1/0;for(const[pt,Ut]of vt){const bn=Se.get(pt);bn&&(Fe=Math.min(Fe,Ut.x+xe),ot=Math.min(ot,Ut.y+st),ze=Math.max(ze,Ut.x+xe+bn.w),it=Math.max(it,Ut.y+st+bn.h))}const wt={x:Fe,y:ot,width:ze-Fe,height:it-ot},{dx:St,dy:tt,guides:$t}=xx(wt,dt,new Set(vt.keys()),void 0,y);de($t);const jt=xe+St,gt=st+tt;V=jt,J=gt,n(dt.map(pt=>{const Ut=vt.get(pt.id);return Ut?{...pt,x:Math.max(0,Ut.x+jt),y:Math.max(0,Ut.y+gt)}:pt})),(mn=ce.current)==null||mn.call(ce,jt,gt)},at=()=>{var $e;window.removeEventListener("mousemove",Ne),window.removeEventListener("mouseup",at),_e.current=null,d==null||d(!1),de([]),($e=ee.current)==null||$e.call(ee,V,J,At)};window.addEventListener("mousemove",Ne),window.addEventListener("mouseup",at)},[k,e,n,d]),nt=_.useCallback((Q,Oe,ft)=>{Q.preventDefault(),Q.stopPropagation();const Ee=e.find(Se=>Se.id===Oe);if(!Ee)return;E(new Set([Oe])),_e.current="resize",d==null||d(!0);const xt=Q.clientX,Ye=Q.clientY,bt=Ee.width,vt=Ee.height,At=Ee.x,zt=Ee.y,dt={left:ft.includes("w"),right:ft.includes("e"),top:ft.includes("n"),bottom:ft.includes("s")},V=Se=>{const Ne=Se.clientX-xt,at=Se.clientY-Ye;let Je=bt,$e=vt,xe=At,st=zt;ft.includes("e")&&(Je=Math.max(_l,bt+Ne)),ft.includes("w")&&(Je=Math.max(_l,bt-Ne),xe=At+bt-Je),ft.includes("s")&&($e=Math.max(_l,vt+at)),ft.includes("n")&&($e=Math.max(_l,vt-at),st=zt+vt-$e);const Fe={x:xe,y:st,width:Je,height:$e},{dx:ot,dy:ze,guides:it}=xx(Fe,ke.current,new Set([Oe]),dt,y);de(it),ot!==0&&(dt.right?Je+=ot:dt.left&&(xe+=ot,Je-=ot)),ze!==0&&(dt.bottom?$e+=ze:dt.top&&(st+=ze,$e-=ze)),n(ke.current.map(wt=>wt.id===Oe?{...wt,x:xe,y:st,width:Je,height:$e}:wt)),U({x:Se.clientX+12,y:Se.clientY+12,text:`${Math.round(Je)} × ${Math.round($e)}`})},J=()=>{window.removeEventListener("mousemove",V),window.removeEventListener("mouseup",J),U(null),_e.current=null,d==null||d(!1),de([])};window.addEventListener("mousemove",V),window.addEventListener("mouseup",J)},[e,n,d]),Xe=_.useCallback(Q=>{_e.current=null,B(Oe=>{const ft=new Set(Oe);return ft.add(Q),ft}),E(Oe=>{const ft=new Set(Oe);return ft.delete(Q),ft}),Qt(()=>{n(ke.current.filter(Oe=>Oe.id!==Q)),B(Oe=>{const ft=new Set(Oe);return ft.delete(Q),ft})},180)},[n]),yt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Tt=_.useCallback(Q=>{const Oe=e.find(ft=>ft.id===Q);Oe&&(ae.current=!!Oe.text,ye(Q),Ze(!1))},[e]),kt=_.useCallback(()=>{pe&&(Ze(!0),Qt(()=>{ye(null),Ze(!1)},150))},[pe]);_.useEffect(()=>{u&&pe&&kt()},[u]);const ut=_.useCallback(Q=>{pe&&(n(e.map(Oe=>Oe.id===pe?{...Oe,text:Q.trim()||void 0}:Oe)),kt())},[pe,e,n,kt]),Ot=typeof window<"u"?window.scrollY:0,_t=["nw","ne","se","sw"],tn=j?"#f97316":"#3c82f7",nn=[{dir:"n",cls:Ue.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:tn})})},{dir:"e",cls:Ue.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:tn})})},{dir:"s",cls:Ue.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:tn})})},{dir:"w",cls:Ue.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:tn})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:H,className:`${Ue.overlay} ${c?"":Ue.light} ${i?Ue.placing:""} ${p?Ue.passthrough:""} ${u?Ue.overlayExiting:""} ${j?Ue.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:ge,children:e.map(Q=>{var xt;const Oe=k.has(Q.id),ft=((xt=ia[Q.type])==null?void 0:xt.label)||Q.type,Ee=Q.y-Ot;return l.jsxs("div",{"data-design-placement":Q.id,className:`${Ue.placement} ${Oe?Ue.selected:""} ${ie.has(Q.id)?Ue.exiting:""}`,style:{left:Q.x,top:Ee,width:Q.width,height:Q.height,position:"fixed"},onMouseDown:Ye=>Pe(Ye,Q.id),onDoubleClick:()=>Tt(Q.id),children:[l.jsx("span",{className:Ue.placementLabel,children:ft}),l.jsx("span",{className:`${Ue.placementAnnotation} ${Q.text?Ue.annotationVisible:""}`,children:(Q.text&&se.current.set(Q.id,Q.text),Q.text||se.current.get(Q.id)||"")}),l.jsx("div",{className:Ue.placementContent,children:l.jsx(C8,{type:Q.type,width:Q.width,height:Q.height,text:Q.text})}),l.jsx("div",{className:Ue.deleteButton,onMouseDown:Ye=>Ye.stopPropagation(),onClick:()=>Xe(Q.id),children:"✕"}),_t.map(Ye=>l.jsx("div",{className:`${Ue.handle} ${Ue[`handle${Ye.charAt(0).toUpperCase()}${Ye.slice(1)}`]}`,onMouseDown:bt=>nt(bt,Q.id,Ye)},Ye)),nn.map(({dir:Ye,cls:bt,arrow:vt})=>l.jsx("div",{className:`${Ue.edgeHandle} ${bt}`,onMouseDown:At=>nt(At,Q.id,Ye),children:vt},Ye))]},Q.id)})}),pe&&(()=>{var zt,dt;const Q=e.find(V=>V.id===pe);if(!Q)return null;const Oe=Q.y-Ot,ft=Q.x+Q.width/2,Ee=Oe-8,xt=Oe+Q.height+8,Ye=Ee>200,bt=xt<window.innerHeight-100,vt=Math.max(160,Math.min(window.innerWidth-160,ft));let At;return Ye?At={left:vt,bottom:window.innerHeight-Ee}:bt?At={left:vt,top:xt}:At={left:vt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(Vd,{element:((zt=ia[Q.type])==null?void 0:zt.label)||Q.type,placeholder:yt[Q.type]||"Label or content text",initialValue:(dt=Q.text)!=null?dt:"",submitLabel:ae.current?"Save":"Set",onSubmit:ut,onCancel:kt,onDelete:ae.current?()=>{ut("")}:void 0,isExiting:Le,lightMode:!c,style:At})})(),I&&l.jsx("div",{className:Ue.drawBox,style:{left:I.x,top:I.y,width:I.w,height:I.h},"data-feedback-toolbar":!0}),M&&l.jsx("div",{className:Ue.selectBox,style:{left:M.x,top:M.y,width:M.w,height:M.h},"data-feedback-toolbar":!0}),F&&l.jsx("div",{className:Ue.sizeIndicator,style:{left:F.x,top:F.y},"data-feedback-toolbar":!0,children:F.text}),K.map((Q,Oe)=>l.jsx("div",{className:Ue.guideLine,style:Q.axis==="x"?{position:"fixed",left:Q.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:Q.pos-Ot,right:0,height:1},"data-feedback-toolbar":!0},`${Q.axis}-${Q.pos}-${Oe}`))]})}function E8(e){if(!e)return"";const n=e.scrollTop>2,i=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${n?Ue.fadeTop:""} ${i?Ue.fadeBottom:""}`}var O="currentColor",He="0.5";function T8({type:e}){switch(e){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:O,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:O,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:O,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:O,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:O,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:O,strokeWidth:He})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:O,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:O,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:O,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:O,strokeWidth:He})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:O,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:O,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:O,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:O,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:He}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:O,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:O,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:He}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:O,strokeWidth:He,fill:O,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:O,strokeWidth:He}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:O,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:O,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:O,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:O,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:O,strokeWidth:He})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:O,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:O,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:O,strokeWidth:He})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:O,strokeWidth:He}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:O,strokeWidth:He,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:O,strokeWidth:He,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:O,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:O,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:O,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:O,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:O,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:O,strokeWidth:He}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:O,strokeWidth:He,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:O,strokeWidth:He,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:O,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:O,strokeWidth:He})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:O,strokeWidth:He})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:O,strokeWidth:He,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:O,strokeWidth:He,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:O,strokeWidth:He}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:O,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:O,strokeWidth:He}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:O,strokeWidth:He}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:O,strokeWidth:He})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:O,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:O,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:O,strokeWidth:He,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:O,strokeWidth:He,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:O,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:O,opacity:".15",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:O,strokeWidth:He})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:O,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:O,strokeWidth:He}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:O,strokeWidth:He,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:O,strokeWidth:He})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:O,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:O,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:O,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:O,strokeWidth:He}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:O,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:O,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:O,strokeWidth:He,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:O,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:O,strokeWidth:He})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:O,strokeWidth:He}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:O,strokeWidth:He,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:O,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:O,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:O,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:O,strokeWidth:He})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:O,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:O,opacity:".2",stroke:O,strokeWidth:He}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:O,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:O,strokeWidth:He}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:O,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:O,strokeWidth:He})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:O,strokeWidth:He,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:O,strokeWidth:He,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:O,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:O,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:O,strokeWidth:He,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:He}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:O,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:O,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:O,opacity:".15",stroke:O,strokeWidth:He})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:O,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:O,opacity:".2",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:O,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:O,strokeWidth:He,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:O,strokeWidth:He,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:O,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:He}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:O,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:O,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:O,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:O,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:He}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:O,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:O,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:O,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:O,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:O,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:O,strokeWidth:He}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:O,strokeWidth:He,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:O,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:O,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:O,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:O,strokeWidth:He})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:O,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:O,strokeWidth:He,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:O,strokeWidth:He})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:O,strokeWidth:He}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:O,strokeWidth:He,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:O,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:O,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:O,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:O,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:O,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:He})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:O,strokeWidth:He}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:O,strokeWidth:He,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:O,strokeWidth:He}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:O,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:O,strokeWidth:He})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:O,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:O,strokeWidth:He,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:O,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:O,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:O,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:O,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:O,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:O,opacity:".08",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:O,strokeWidth:He,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:O,strokeWidth:He,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:O,strokeWidth:He,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:O,strokeWidth:He,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:O,strokeWidth:He,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:O,strokeWidth:He,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:O,strokeWidth:He}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:O,strokeWidth:He,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:O,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:O,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:O,strokeWidth:He,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:O,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:O,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:O,strokeWidth:He}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:O,opacity:".2"})]});default:return null}}function A8({activeType:e,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${Ue.placeScroll} ${c||""}`,children:a2.map(d=>l.jsxs("div",{className:Ue.paletteSection,children:[l.jsx("div",{className:Ue.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${Ue.paletteItem} ${e===h.type?Ue.active:""} ${u?Ue.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:Ue.paletteItemIcon,children:l.jsx(T8,{type:h.type})}),l.jsx("span",{className:Ue.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function N8({value:e,suffix:n}){const[i,a]=_.useState(null),[c,u]=_.useState(n),[d,h]=_.useState("up"),p=_.useRef(e),y=_.useRef(n),g=_.useRef(),x=i!==null&&c!==n;return _.useEffect(()=>{if(e!==p.current){if(e===0){p.current=e,y.current=n,a(null);return}h(e>p.current?"up":"down"),a(p.current),u(y.current),p.current=e,y.current=n,clearTimeout(g.current),g.current=Qt(()=>a(null),250)}else y.current=n},[e,n]),i===null?l.jsxs(l.Fragment,{children:[e,n?` ${n}`:""]}):x?l.jsxs("span",{className:Ue.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[e," ",n]}),l.jsxs("span",{className:`${Ue.rollingNum} ${d==="up"?Ue.exitUp:Ue.exitDown}`,children:[i," ",c]},`o${i}-${e}`),l.jsxs("span",{className:`${Ue.rollingNum} ${d==="up"?Ue.enterUp:Ue.enterDown}`,children:[e," ",n]},`n${e}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:Ue.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:e}),l.jsx("span",{className:`${Ue.rollingNum} ${d==="up"?Ue.exitUp:Ue.exitDown}`,children:i},`o${i}-${e}`),l.jsx("span",{className:`${Ue.rollingNum} ${d==="up"?Ue.enterUp:Ue.enterDown}`,children:e},`n${e}`)]}),n?` ${n}`:""]})}function D8({activeType:e,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:y,blankCanvas:g,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:w,Tooltip:S}){const[j,k]=_.useState(!1),[E,I]=_.useState("exit"),[N,M]=_.useState(!1),[X,F]=_.useState(!0),U=_.useRef(0),K=_.useRef(""),de=_.useRef(0),pe=_.useRef(),ye=_.useRef(null),[Le,Ze]=_.useState("");_.useEffect(()=>(u?(k(!0),clearTimeout(pe.current),cancelAnimationFrame(de.current),de.current=Sl(()=>{de.current=Sl(()=>{I("enter")})})):(cancelAnimationFrame(de.current),I("exit"),clearTimeout(pe.current),pe.current=Qt(()=>{k(!1),d==null||d()},200)),()=>cancelAnimationFrame(de.current)),[u]);const ae=h>0||a>0,ie=h+a;return ie>0&&(U.current=ie,K.current=g?ie===1?"Component":"Components":ie===1?"Change":"Changes"),_.useEffect(()=>{if(ae)N?F(!1):(F(!0),M(!0),Sl(()=>{Sl(()=>{F(!1)})}));else{F(!0);const B=Qt(()=>M(!1),300);return()=>clearTimeout(B)}},[ae]),_.useEffect(()=>{if(!j)return;const B=ye.current;if(!B)return;const se=()=>Ze(E8(B));se(),B.addEventListener("scroll",se,{passive:!0});const H=new ResizeObserver(se);return H.observe(B),()=>{B.removeEventListener("scroll",se),H.disconnect()}},[j]),j?l.jsxs("div",{className:`${Ue.palette} ${Ue[E]} ${i?"":Ue.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:B=>B.stopPropagation(),onMouseDown:B=>B.stopPropagation(),onTransitionEnd:B=>{B.target===B.currentTarget&&(u||(clearTimeout(pe.current),k(!1),I("exit"),d==null||d()))},children:[l.jsxs("div",{className:Ue.paletteHeader,children:[l.jsx("div",{className:Ue.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:Ue.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${Ue.canvasToggle} ${g?Ue.active:""}`,onClick:()=>x(!g),children:[l.jsx("span",{className:Ue.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:Ue.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${Ue.wireframePurposeWrap} ${g?"":Ue.collapsed}`,children:l.jsx("div",{className:Ue.wireframePurposeInner,children:l.jsx("textarea",{className:Ue.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:B=>w(B.target.value),rows:2})})}),l.jsx(A8,{activeType:e,onSelect:n,onDragStart:y,scrollRef:ye,fadeClass:Le,blankCanvas:g}),N&&l.jsx("div",{className:`${Ue.paletteFooterWrap} ${X?Ue.footerHidden:""}`,children:l.jsx("div",{className:Ue.paletteFooterInner,children:l.jsx("div",{className:Ue.paletteFooterInnerContent,children:l.jsxs("div",{className:Ue.paletteFooter,children:[l.jsx("span",{className:Ue.paletteFooterCount,children:l.jsx(N8,{value:U.current,suffix:K.current})}),l.jsx("button",{className:Ue.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function El(e){if(e.parentElement)return e.parentElement;const n=e.getRootNode();return n instanceof ShadowRoot?n.host:null}function ai(e,n){let i=e;for(;i;){if(i.matches(n))return i;i=El(i)}return null}function R8(e,n=4){const i=[];let a=e,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(y=>y.length>2&&!y.match(/^[a-z]{1,2}$/)&&!y.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=El(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function Cl(e){var a,c,u,d,h,p,y,g;const n=R8(e);if(e.dataset.element)return{name:e.dataset.element,path:n};const i=e.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=ai(e,"svg");if(x){const b=El(x);if(b instanceof HTMLElement)return{name:`graphic in ${Cl(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=El(e);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=e.textContent)==null?void 0:c.trim(),b=e.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=e.textContent)==null?void 0:u.trim(),b=e.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=e.getAttribute("type")||"text",b=e.getAttribute("placeholder"),w=e.getAttribute("name");return b?{name:`input "${b}"`,path:n}:w?{name:`input [${w}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=e.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=e.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=e.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(y=e.textContent)==null?void 0:y.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(g=e.textContent)==null?void 0:g.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=e.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=e.className,b=e.getAttribute("role"),w=e.getAttribute("aria-label");if(w)return{name:`${i} [${w}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const S=x.split(/[\s_-]+/).map(j=>j.replace(/[A-Z0-9]{5,}.*$/,"")).filter(j=>j.length>2&&!/^[a-z]{1,2}$/.test(j)).slice(0,2);if(S.length>0)return{name:S.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function xc(e){var u,d,h;const n=[],i=(u=e.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=e.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=e.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function ud(e){const n=El(e);if(!n)return"";const c=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(n.children)).filter(g=>g!==e&&g instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(g=>{var S;const x=g.tagName.toLowerCase(),b=g.className;let w="";if(typeof b=="string"&&b){const j=b.split(/\s+/).map(k=>k.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(k=>k.length>2&&!/^[a-z]{1,2}$/.test(k));j&&(w=`.${j}`)}if(x==="button"||x==="a"){const j=(S=g.textContent)==null?void 0:S.trim().slice(0,15);if(j)return`${x}${w} "${j}"`}return`${x}${w}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const g=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));g&&(h=`.${g}`)}const p=n.children.length,y=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+y}function bc(e){const n=e.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var r2=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),B8=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),L8=new Set(["input","textarea","select"]),O8=new Set(["img","video","canvas","svg"]),z8=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function dd(e){if(typeof window>"u")return{};const n=window.getComputedStyle(e),i={},a=e.tagName.toLowerCase();let c;B8.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&e.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:L8.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:O8.has(a)?c=["width","height","objectFit","borderRadius"]:z8.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!r2.has(h)&&(i[u]=h)}return i}var $8=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function fd(e){if(typeof window>"u")return"";const n=window.getComputedStyle(e),i=[];for(const a of $8){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!r2.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function I8(e){if(!e)return;const n={},i=e.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function hd(e){const n=[],i=e.getAttribute("role"),a=e.getAttribute("aria-label"),c=e.getAttribute("aria-describedby"),u=e.getAttribute("tabindex"),d=e.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),e.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function md(e){const n=[];let i=e;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=El(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var P8=new Set(["nav","header","main","section","article","footer","aside"]),hp={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},vx={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},H8=new Set(["script","style","noscript","link","meta"]),U8=40;function l2(e){let n=e;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Ir(e){const n=e.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className=="string"){const c=e.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=e.parentElement;if(i){const c=Array.from(i.children).indexOf(e)+1;return`${i===document.body?"body":Ir(i)} > ${n}:nth-child(${c})`}return n}function Yd(e){var d;const n=e.tagName.toLowerCase(),i=e.getAttribute("aria-label");if(i)return i;const a=e.getAttribute("role");if(a&&hp[a])return hp[a];if(vx[n])return vx[n];const c=e.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=Cl(e);return u.charAt(0).toUpperCase()+u.slice(1)}function c2(e){const n=e.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function u2(e){var a;const n=(a=e.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function V8(){const e=document.querySelector("main")||document.body,n=Array.from(e.children);let i=n;e!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(H8.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<U8)return;const y=P8.has(d),g=c.getAttribute("role")&&hp[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!y&&!g&&!x)return;const b=window.scrollY,w=l2(c),S={x:p.x,y:w?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Yd(c),tagName:d,selector:Ir(c),role:c.getAttribute("role"),className:c2(c),textSnippet:u2(c),originalRect:S,currentRect:{...S},originalIndex:u,isFixed:w})}),a}function Y8(e){const n=window.scrollY,i=e.getBoundingClientRect(),a=l2(e),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=e.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Yd(e),tagName:e.tagName.toLowerCase(),selector:Ir(e),role:e.getAttribute("role"),className:c2(e),textSnippet:u2(e),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var wx={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Sx=["nw","n","ne","e","se","s","sw","w"],pd=24,Cx=16,_d=5;function kx(e,n,i,a){let c=1/0,u=1/0;const d=e.x,h=e.x+e.width,p=e.x+e.width/2,y=e.y,g=e.y+e.height,x=e.y+e.height/2,b=[];for(const U of n)i.has(U.id)||b.push(U.currentRect);a&&b.push(...a);for(const U of b){const K=U.x,de=U.x+U.width,pe=U.x+U.width/2,ye=U.y,Le=U.y+U.height,Ze=U.y+U.height/2;for(const ae of[d,h,p])for(const ie of[K,de,pe]){const B=ie-ae;Math.abs(B)<_d&&Math.abs(B)<Math.abs(c)&&(c=B)}for(const ae of[y,g,x])for(const ie of[ye,Le,Ze]){const B=ie-ae;Math.abs(B)<_d&&Math.abs(B)<Math.abs(u)&&(u=B)}}const w=Math.abs(c)<_d?c:0,S=Math.abs(u)<_d?u:0,j=[],k=new Set,E=d+w,I=h+w,N=p+w,M=y+S,X=g+S,F=x+S;for(const U of b){const K=U.x,de=U.x+U.width,pe=U.x+U.width/2,ye=U.y,Le=U.y+U.height,Ze=U.y+U.height/2;for(const ae of[K,pe,de])for(const ie of[E,N,I])if(Math.abs(ie-ae)<.5){const B=`x:${Math.round(ae)}`;k.has(B)||(k.add(B),j.push({axis:"x",pos:ae}))}for(const ae of[ye,Ze,Le])for(const ie of[M,F,X])if(Math.abs(ie-ae)<.5){const B=`y:${Math.round(ae)}`;k.has(B)||(k.add(B),j.push({axis:"y",pos:ae}))}}return{dx:w,dy:S,guides:j}}var W8=new Set(["script","style","noscript","link","meta","br","hr"]);function jx(e){let n=e;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(W8.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Cx&&i.height>=Cx)return n;n=n.parentElement}return null}function F8({rearrangeState:e,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:y,onDragEnd:g,clearSignal:x}){const{sections:b}=e,w=_.useRef(e);w.current=e;const[S,j]=_.useState(new Set),[k,E]=_.useState(!1),I=_.useRef(x);_.useEffect(()=>{x!==void 0&&x!==I.current&&(I.current=x,b.length>0&&E(!0))},[x,b.length]);const N=_.useRef(p);_.useEffect(()=>{p!==N.current&&(N.current=p,j(new Set))},[p]);const[M,X]=_.useState(null),[F,U]=_.useState(!1),K=_.useRef(!1),de=_.useCallback(V=>{const J=b.find(Se=>Se.id===V);J&&(K.current=!!J.note,X(V),U(!1))},[b]),pe=_.useCallback(()=>{M&&(U(!0),Qt(()=>{X(null),U(!1)},150))},[M]),ye=_.useCallback(V=>{M&&(n({...e,sections:b.map(J=>J.id===M?{...J,note:V.trim()||void 0}:J)}),pe())},[M,b,e,n,pe]);_.useEffect(()=>{a&&M&&pe()},[a]);const[Le,Ze]=_.useState(new Set),ae=_.useRef(new Map),[ie,B]=_.useState(null),[se,H]=_.useState(null),[_e,ke]=_.useState([]),[z,ce]=_.useState(0),ee=_.useRef(null),we=_.useRef(new Set),Re=_.useRef(new Map),[ge,Pe]=_.useState(new Map),[nt,Xe]=_.useState(new Map),yt=_.useRef(new Set),Tt=_.useRef(new Map),kt=_.useRef(h);kt.current=h;const ut=_.useRef(y);ut.current=y;const Ot=_.useRef(g);Ot.current=g,_.useEffect(()=>{u&&j(new Set)},[u]);const[_t,tn]=_.useState(()=>!e.sections.some(V=>{const J=V.originalRect,Se=V.currentRect;return Math.abs(J.x-Se.x)>1||Math.abs(J.y-Se.y)>1||Math.abs(J.width-Se.width)>1||Math.abs(J.height-Se.height)>1}));_.useEffect(()=>{if(!_t){const V=Qt(()=>tn(!0),380);return()=>clearTimeout(V)}},[]);const nn=_.useRef(new Set);_.useEffect(()=>{nn.current=new Set(b.map(V=>V.selector))},[b]),_.useEffect(()=>{const V=()=>ce(window.scrollY);return V(),window.addEventListener("scroll",V,{passive:!0}),window.addEventListener("resize",V,{passive:!0}),()=>{window.removeEventListener("scroll",V),window.removeEventListener("resize",V)}},[]),_.useEffect(()=>{const V=J=>{if(ee.current){B(null);return}const Se=document.elementFromPoint(J.clientX,J.clientY);if(!Se){B(null);return}if(Se.closest("[data-feedback-toolbar]")){B(null);return}if(Se.closest("[data-design-placement]")){B(null);return}if(Se.closest("[data-annotation-popup]")){B(null);return}const Ne=jx(Se);if(!Ne){B(null);return}for(const Je of nn.current)try{const $e=document.querySelector(Je);if($e&&($e===Ne||Ne.contains($e))){B(null);return}}catch{}const at=Ne.getBoundingClientRect();B({x:at.x,y:at.y,w:at.width,h:at.height})};return document.addEventListener("mousemove",V,{passive:!0}),()=>document.removeEventListener("mousemove",V)},[b]),_.useEffect(()=>{const V=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=V}},[]),_.useEffect(()=>{const V=J=>{var $e,xe,st,Fe;if(ee.current||J.button!==0)return;const Se=J.target;if(!Se||Se.closest("[data-feedback-toolbar]")||Se.closest("[data-design-placement]")||Se.closest("[data-annotation-popup]"))return;const Ne=jx(Se);let at=!1;if(Ne)for(const ot of nn.current)try{const ze=document.querySelector(ot);if(ze&&(ze===Ne||Ne.contains(ze))){at=!0;break}}catch{}const Je=!!(J.shiftKey||J.metaKey||J.ctrlKey);if(Ne&&!at){J.preventDefault(),J.stopPropagation();const ot=Y8(Ne),ze=[...b,ot],it=[...e.originalOrder,ot.id];n({...e,sections:ze,originalOrder:it});const wt=new Set([ot.id]);j(wt),($e=kt.current)==null||$e.call(kt,wt,Je),B(null);const St=J.clientX,tt=J.clientY,$t={x:ot.currentRect.x,y:ot.currentRect.y};ot.originalRect;let jt=!1,gt=0,mn=0;ee.current="move";const pt=bn=>{var Mt;const Rt=bn.clientX-St,Ct=bn.clientY-tt;if(!jt&&(Math.abs(Rt)>2||Math.abs(Ct)>2)&&(jt=!0),!jt)return;const pn={x:$t.x+Rt,y:$t.y+Ct,width:ot.currentRect.width,height:ot.currentRect.height},ln=kx(pn,ze,new Set([ot.id]),d);ke(ln.guides);const on=Rt+ln.dx,Vt=Ct+ln.dy;gt=on,mn=Vt;const qt=document.querySelector(`[data-rearrange-section="${ot.id}"]`);qt&&(qt.style.transform=`translate(${on}px, ${Vt}px)`),Pe(new Map([[ot.id,{x:$t.x+on,y:$t.y+Vt,width:ot.currentRect.width,height:ot.currentRect.height}]])),(Mt=ut.current)==null||Mt.call(ut,on,Vt)},Ut=()=>{var Rt;window.removeEventListener("mousemove",pt),window.removeEventListener("mouseup",Ut),ee.current=null,ke([]),Pe(new Map);const bn=document.querySelector(`[data-rearrange-section="${ot.id}"]`);bn&&(bn.style.transform=""),jt&&n({...e,sections:ze.map(Ct=>Ct.id===ot.id?{...Ct,currentRect:{...Ct.currentRect,x:Math.max(0,$t.x+gt),y:Math.max(0,$t.y+mn)}}:Ct),originalOrder:it}),(Rt=Ot.current)==null||Rt.call(Ot,gt,mn,jt)};window.addEventListener("mousemove",pt),window.addEventListener("mouseup",Ut)}else if(at&&Ne){J.preventDefault();for(const ot of b)try{const ze=document.querySelector(ot.selector);if(ze&&ze===Ne){const it=new Set([ot.id]);j(it),(xe=kt.current)==null||xe.call(kt,it,Je);return}}catch{}Je||(j(new Set),(st=kt.current)==null||st.call(kt,new Set,!1))}else Je||(j(new Set),(Fe=kt.current)==null||Fe.call(kt,new Set,!1))};return document.addEventListener("mousedown",V,!0),()=>document.removeEventListener("mousedown",V,!0)},[b,e,n]),_.useEffect(()=>{const V=J=>{const Se=J.target;if(!(Se.tagName==="INPUT"||Se.tagName==="TEXTAREA"||Se.isContentEditable)){if((J.key==="Backspace"||J.key==="Delete")&&S.size>0){J.preventDefault();const Ne=new Set(S);Ze(at=>{const Je=new Set(at);for(const $e of Ne)Je.add($e);return Je}),j(new Set),Qt(()=>{const at=w.current;n({...at,sections:at.sections.filter(Je=>!Ne.has(Je.id)),originalOrder:at.originalOrder.filter(Je=>!Ne.has(Je))}),Ze(Je=>{const $e=new Set(Je);for(const xe of Ne)$e.delete(xe);return $e})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(J.key)&&S.size>0){J.preventDefault();const Ne=J.shiftKey?20:1,at=J.key==="ArrowLeft"?-Ne:J.key==="ArrowRight"?Ne:0,Je=J.key==="ArrowUp"?-Ne:J.key==="ArrowDown"?Ne:0;n({...e,sections:b.map($e=>S.has($e.id)?{...$e,currentRect:{...$e.currentRect,x:Math.max(0,$e.currentRect.x+at),y:Math.max(0,$e.currentRect.y+Je)}}:$e)});return}J.key==="Escape"&&S.size>0&&j(new Set)}};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[S,b,e,n]);const Q=_.useCallback((V,J)=>{var St;if(V.button!==0)return;const Se=V.target;if(Se.closest(`.${Ue.handle}`)||Se.closest(`.${Ue.deleteButton}`))return;V.preventDefault(),V.stopPropagation();let Ne;V.shiftKey||V.metaKey||V.ctrlKey?(Ne=new Set(S),Ne.has(J)?Ne.delete(J):Ne.add(J)):S.has(J)?Ne=new Set(S):Ne=new Set([J]),j(Ne),(Ne.size!==S.size||[...Ne].some(tt=>!S.has(tt)))&&((St=kt.current)==null||St.call(kt,Ne,!!(V.shiftKey||V.metaKey||V.ctrlKey)));const Je=V.clientX,$e=V.clientY,xe=new Map;for(const tt of b)Ne.has(tt.id)&&xe.set(tt.id,{x:tt.currentRect.x,y:tt.currentRect.y});ee.current="move";let st=!1,Fe=0,ot=0;const ze=new Map;for(const tt of b)if(Ne.has(tt.id)){const $t=document.querySelector(`[data-rearrange-section="${tt.id}"]`);ze.set(tt.id,{outlineEl:$t,curW:tt.currentRect.width,curH:tt.currentRect.height})}const it=tt=>{var ln;const $t=tt.clientX-Je,jt=tt.clientY-$e;if($t===0&&jt===0)return;st=!0;let gt=1/0,mn=1/0,pt=-1/0,Ut=-1/0;for(const[on,{curW:Vt,curH:qt}]of ze){const Mt=xe.get(on);if(!Mt)continue;const wn=Mt.x+$t,mt=Mt.y+jt;gt=Math.min(gt,wn),mn=Math.min(mn,mt),pt=Math.max(pt,wn+Vt),Ut=Math.max(Ut,mt+qt)}const bn=kx({x:gt,y:mn,width:pt-gt,height:Ut-mn},b,Ne,d),Rt=$t+bn.dx,Ct=jt+bn.dy;Fe=Rt,ot=Ct,ke(bn.guides);for(const[,{outlineEl:on}]of ze)on&&(on.style.transform=`translate(${Rt}px, ${Ct}px)`);const pn=new Map;for(const[on,{curW:Vt,curH:qt}]of ze){const Mt=xe.get(on);if(Mt){const wn={x:Math.max(0,Mt.x+Rt),y:Math.max(0,Mt.y+Ct),width:Vt,height:qt};pn.set(on,wn)}}Pe(pn),(ln=ut.current)==null||ln.call(ut,Rt,Ct)},wt=tt=>{var $t,jt;window.removeEventListener("mousemove",it),window.removeEventListener("mouseup",wt),ee.current=null,ke([]),Pe(new Map);for(const[,{outlineEl:gt}]of ze)gt&&(gt.style.transform="");if(st){const gt=tt.clientX-Je,mn=tt.clientY-$e;if(Math.abs(gt)<5&&Math.abs(mn)<5)n({...e,sections:b.map(pt=>{const Ut=xe.get(pt.id);return Ut?{...pt,currentRect:{...pt.currentRect,x:Ut.x,y:Ut.y}}:pt})});else{n({...e,sections:b.map(pt=>{const Ut=xe.get(pt.id);return Ut?{...pt,currentRect:{...pt.currentRect,x:Math.max(0,Ut.x+Fe),y:Math.max(0,Ut.y+ot)}}:pt})}),($t=Ot.current)==null||$t.call(Ot,Fe,ot,!0);return}}(jt=Ot.current)==null||jt.call(Ot,0,0,!1)};window.addEventListener("mousemove",it),window.addEventListener("mouseup",wt)},[S,b,e,n]),Oe=_.useCallback((V,J,Se)=>{V.preventDefault(),V.stopPropagation();const Ne=b.find(it=>it.id===J);if(!Ne)return;j(new Set([J])),ee.current="resize";const at=V.clientX,Je=V.clientY,$e={...Ne.currentRect};Ne.originalRect;const xe=$e.width/$e.height;let st={...$e};const Fe=document.querySelector(`[data-rearrange-section="${J}"]`),ot=it=>{const wt=it.clientX-at,St=it.clientY-Je;let tt=$e.x,$t=$e.y,jt=$e.width,gt=$e.height;if(Se.includes("e")&&(jt=Math.max(pd,$e.width+wt)),Se.includes("w")&&(jt=Math.max(pd,$e.width-wt),tt=$e.x+$e.width-jt),Se.includes("s")&&(gt=Math.max(pd,$e.height+St)),Se.includes("n")&&(gt=Math.max(pd,$e.height-St),$t=$e.y+$e.height-gt),it.shiftKey)if(Se.length===2){const pt=Math.abs(jt-$e.width),Ut=Math.abs(gt-$e.height);pt>Ut?gt=jt/xe:jt=gt*xe,Se.includes("w")&&(tt=$e.x+$e.width-jt),Se.includes("n")&&($t=$e.y+$e.height-gt)}else Se==="e"||Se==="w"?gt=jt/xe:jt=gt*xe,Se==="w"&&(tt=$e.x+$e.width-jt),Se==="n"&&($t=$e.y+$e.height-gt);st={x:tt,y:$t,width:jt,height:gt},Fe&&(Fe.style.left=`${tt}px`,Fe.style.top=`${$t-z}px`,Fe.style.width=`${jt}px`,Fe.style.height=`${gt}px`),H({x:it.clientX+12,y:it.clientY+12,text:`${Math.round(jt)} × ${Math.round(gt)}`}),Pe(new Map([[J,st]]))},ze=()=>{window.removeEventListener("mousemove",ot),window.removeEventListener("mouseup",ze),H(null),ee.current=null,Pe(new Map),n({...e,sections:b.map(it=>it.id===J?{...it,currentRect:st}:it)})};window.addEventListener("mousemove",ot),window.addEventListener("mouseup",ze)},[b,e,n,z]),ft=_.useCallback(V=>{Ze(J=>{const Se=new Set(J);return Se.add(V),Se}),j(J=>{const Se=new Set(J);return Se.delete(V),Se}),Qt(()=>{const J=w.current;n({...J,sections:J.sections.filter(Se=>Se.id!==V),originalOrder:J.originalOrder.filter(Se=>Se!==V)}),Ze(Se=>{const Ne=new Set(Se);return Ne.delete(V),Ne})},180)},[n]),Ee=V=>{const J=V.originalRect,Se=V.currentRect;return Math.abs(J.x-Se.x)>1||Math.abs(J.y-Se.y)>1||Math.abs(J.width-Se.width)>1||Math.abs(J.height-Se.height)>1},xt=V=>{const J=V.originalRect,Se=V.currentRect;return Math.abs(J.x-Se.x)>1||Math.abs(J.y-Se.y)>1},Ye=V=>{const J=V.originalRect,Se=V.currentRect;return Math.abs(J.width-Se.width)>1||Math.abs(J.height-Se.height)>1};for(const V of b)Re.current.has(V.id)||(xt(V)?Re.current.set(V.id,"move"):Ye(V)&&Re.current.set(V.id,"resize"));for(const V of Re.current.keys())b.some(J=>J.id===V)||Re.current.delete(V);const bt=b.filter(V=>{try{if(Le.has(V.id)||S.has(V.id))return!0;const J=document.querySelector(V.selector);if(!J)return!1;const Se=J.getBoundingClientRect(),Ne=V.originalRect;return Math.abs(Se.width-Ne.width)+Math.abs(Se.height-Ne.height)<200}catch{return!1}}),vt=bt.filter(V=>Ee(V)),At=bt.filter(V=>!Ee(V)),zt=new Set(vt.map(V=>V.id));for(const V of we.current)zt.has(V)||we.current.delete(V);const dt=[...zt].sort().join(",");for(const V of vt)Tt.current.set(V.id,{currentRect:V.currentRect,originalRect:V.originalRect,isFixed:V.isFixed});return _.useEffect(()=>{const V=yt.current;yt.current=zt;const J=new Map;for(const Se of V)if(!zt.has(Se)){if(!b.some(at=>at.id===Se))continue;const Ne=Tt.current.get(Se);Ne&&(J.set(Se,{orig:Ne.originalRect,target:Ne.currentRect,isFixed:Ne.isFixed}),Tt.current.delete(Se))}if(J.size>0){Xe(Ne=>{const at=new Map(Ne);for(const[Je,$e]of J)at.set(Je,$e);return at});const Se=Qt(()=>{Xe(Ne=>{const at=new Map(Ne);for(const Je of J.keys())at.delete(Je);return at})},250);return()=>clearTimeout(Se)}},[dt,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${Ue.rearrangeOverlay} ${i?"":Ue.light} ${a?Ue.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[ie&&l.jsx("div",{className:Ue.hoverHighlight,style:{left:ie.x,top:ie.y,width:ie.w,height:ie.h}}),At.map(V=>{const J=V.currentRect,Se=V.isFixed?J.y:J.y-z,Ne=wx,at=S.has(V.id);return l.jsxs("div",{"data-rearrange-section":V.id,className:`${Ue.sectionOutline} ${at?Ue.selected:""} ${k||a||Le.has(V.id)?Ue.exiting:""}`,style:{left:J.x,top:Se,width:J.width,height:J.height,borderColor:Ne.border,backgroundColor:Ne.bg,..._t?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Je=>Q(Je,V.id),onDoubleClick:()=>de(V.id),children:[l.jsx("span",{className:Ue.sectionLabel,style:{backgroundColor:Ne.pill},children:V.label}),l.jsx("span",{className:`${Ue.sectionAnnotation} ${V.note?Ue.annotationVisible:""}`,children:(V.note&&ae.current.set(V.id,V.note),V.note||ae.current.get(V.id)||"")}),l.jsxs("span",{className:Ue.sectionDimensions,children:[Math.round(J.width)," × ",Math.round(J.height)]}),l.jsx("div",{className:Ue.deleteButton,onMouseDown:Je=>Je.stopPropagation(),onClick:()=>ft(V.id),children:"✕"}),Sx.map(Je=>l.jsx("div",{className:`${Ue.handle} ${Ue[`handle${Je.charAt(0).toUpperCase()}${Je.slice(1)}`]}`,onMouseDown:$e=>Oe($e,V.id,Je)},Je))]},V.id)}),vt.map(V=>{const J=V.currentRect,Se=V.isFixed?J.y:J.y-z,Ne=S.has(V.id),at=xt(V),Je=Ye(V);if(u&&!Ne)return null;const xe=!we.current.has(V.id);return xe&&we.current.add(V.id),l.jsxs("div",{"data-rearrange-section":V.id,className:`${Ue.ghostOutline} ${Ne?Ue.selected:""} ${k||a||Le.has(V.id)?Ue.exiting:""}`,style:{left:J.x,top:Se,width:J.width,height:J.height,..._t?{}:{opacity:0,animation:"none",transition:"none"},...xe?{}:{animation:"none"}},onMouseDown:st=>Q(st,V.id),onDoubleClick:()=>de(V.id),children:[l.jsx("span",{className:Ue.sectionLabel,style:{backgroundColor:wx.pill},children:V.label}),l.jsx("span",{className:`${Ue.sectionAnnotation} ${V.note?Ue.annotationVisible:""}`,children:(V.note&&ae.current.set(V.id,V.note),V.note||ae.current.get(V.id)||"")}),l.jsxs("span",{className:Ue.sectionDimensions,children:[Math.round(J.width)," × ",Math.round(J.height)]}),l.jsx("div",{className:Ue.deleteButton,onMouseDown:st=>st.stopPropagation(),onClick:()=>ft(V.id),children:"✕"}),Sx.map(st=>l.jsx("div",{className:`${Ue.handle} ${Ue[`handle${st.charAt(0).toUpperCase()}${st.slice(1)}`]}`,onMouseDown:Fe=>Oe(Fe,V.id,st)},st)),l.jsx("span",{className:Ue.ghostBadge,children:(()=>{const st=Re.current.get(V.id);if(at&&Je){const[Fe,ot]=st==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",Fe," ",l.jsxs("span",{className:Ue.ghostBadgeExtra,children:["& ",ot]})]})}return`Suggested ${Je?"Resize":"Move"}`})()})]},V.id)})]}),!u&&(()=>{const V=[];for(const J of vt){const Se=ge.get(J.id);V.push({id:J.id,orig:J.originalRect,target:Se||J.currentRect,isFixed:J.isFixed,isSelected:S.has(J.id),isExiting:Le.has(J.id)})}for(const[J,Se]of ge)if(!V.some(Ne=>Ne.id===J)){const Ne=b.find(at=>at.id===J);Ne&&V.push({id:J,orig:Ne.originalRect,target:Se,isFixed:Ne.isFixed,isSelected:S.has(J)})}for(const[J,Se]of nt)V.some(Ne=>Ne.id===J)||V.push({id:J,orig:Se.orig,target:Se.target,isFixed:Se.isFixed,isSelected:!1,isExiting:!0});return V.length===0?null:l.jsxs("svg",{className:`${Ue.connectorSvg} ${k||a?Ue.connectorExiting:""}`,children:[V.map(({id:J,orig:Se,target:Ne,isFixed:at,isSelected:Je,isExiting:$e})=>{const xe=Se.x+Se.width/2,st=(at?Se.y:Se.y-z)+Se.height/2,Fe=Ne.x+Ne.width/2,ot=(at?Ne.y:Ne.y-z)+Ne.height/2,ze=Fe-xe,it=ot-st,wt=Math.sqrt(ze*ze+it*it);if(wt<2)return null;const St=Math.min(1,wt/40),tt=Math.min(wt*.3,60),$t=wt>0?-it/wt:0,jt=wt>0?ze/wt:0,gt=(xe+Fe)/2+$t*tt,mn=(st+ot)/2+jt*tt,pt=ge.has(J),Ut=pt||Je?1:.4,bn=pt||Je?1:.5;return l.jsxs("g",{className:$e?Ue.connectorExiting:"",children:[l.jsx("path",{className:Ue.connectorLine,d:`M ${xe} ${st} Q ${gt} ${mn} ${Fe} ${ot}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Ut*St}),l.jsx("circle",{className:Ue.connectorDot,cx:xe,cy:st,r:4*St,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:bn*St,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:Ue.connectorDot,cx:Fe,cy:ot,r:4*St,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:bn*St,filter:"url(#connDotShadow)"})]},`conn-${J}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),M&&(()=>{var ot;const V=b.find(ze=>ze.id===M);if(!V)return null;const J=V.currentRect,Se=V.isFixed?J.y:J.y-z,Ne=J.x+J.width/2,at=Se-8,Je=Se+J.height+8,$e=at>200,xe=Je<window.innerHeight-100,st=Math.max(160,Math.min(window.innerWidth-160,Ne));let Fe;return $e?Fe={left:st,bottom:window.innerHeight-at}:xe?Fe={left:st,top:Je}:Fe={left:st,top:Math.max(80,window.innerHeight/2-80)},l.jsx(Vd,{element:V.label,placeholder:"Add a note about this section",initialValue:(ot=V.note)!=null?ot:"",submitLabel:K.current?"Save":"Set",onSubmit:ye,onCancel:pe,onDelete:K.current?()=>{ye("")}:void 0,isExiting:F,lightMode:!i,style:Fe})})(),se&&l.jsx("div",{className:Ue.sizeIndicator,style:{left:se.x,top:se.y},"data-feedback-toolbar":!0,children:se.text}),_e.map((V,J)=>l.jsx("div",{className:Ue.guideLine,style:V.axis==="x"?{position:"fixed",left:V.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:V.pos-z,width:"100vw",height:1}},`${V.axis}-${V.pos}-${J}`))]})}var mp=new Set(["script","style","noscript","link","meta","br","hr"]);function X8(){const e=document.querySelector("main")||document.body,n=[],i=Array.from(e.children),a=e!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||mp.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Yd(c),selector:Ir(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||mp.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const y=h.getBoundingClientRect();y.height<10||y.width<10||n.push({label:Yd(h),selector:Ir(h),top:y.top,bottom:y.bottom,left:y.left,right:y.right,area:y.width*y.height})}}}return n}function G8(e){const n=window.scrollY;return e.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function q8(e){const n=window.scrollY,i=e.y-n,a=e.x;return{top:i,bottom:i+e.height,left:a,right:a+e.width,area:e.width*e.height}}function pp(e,n){const i=n?G8(n):X8(),a=q8(e);let c=null,u=null,d=null,h=null,p=null;for(const S of i){if(Math.abs(S.left-a.left)<2&&Math.abs(S.top-a.top)<2&&Math.abs(S.right-S.left-e.width)<2&&Math.abs(S.bottom-S.top-e.height)<2)continue;S.left<=a.left+2&&S.right>=a.right-2&&S.top<=a.top+2&&S.bottom>=a.bottom-2&&S.area>a.area*1.5&&(!p||S.area<p._area)&&(p={label:S.label,selector:S.selector,_area:S.area});const j=a.right>S.left+5&&a.left<S.right-5,k=a.bottom>S.top+5&&a.top<S.bottom-5;if(j&&S.bottom<=a.top+5){const E=Math.round(a.top-S.bottom);(!c||E<c._dist)&&(c={label:S.label,selector:S.selector,gap:Math.max(0,E),_dist:E})}if(j&&S.top>=a.bottom-5){const E=Math.round(S.top-a.bottom);(!u||E<u._dist)&&(u={label:S.label,selector:S.selector,gap:Math.max(0,E),_dist:E})}if(k&&S.right<=a.left+5){const E=Math.round(a.left-S.right);(!d||E<d._dist)&&(d={label:S.label,selector:S.selector,gap:Math.max(0,E),_dist:E})}if(k&&S.left>=a.right-5){const E=Math.round(S.left-a.right);(!h||E<h._dist)&&(h={label:S.label,selector:S.selector,gap:Math.max(0,E),_dist:E})}}const y=window.innerWidth,g=window.innerHeight,x=Q8(e,y),b=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,w=K8(a,e,y,g,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:w}}function K8(e,n,i,a,c,u){const d={};let h=!1;const p=[];if(e.left<-2&&p.push("left"),e.right>i+2&&p.push("right"),e.top<-2&&p.push("top"),e.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const y=u.find(g=>g.label===c.label&&g.selector===c.selector&&Math.abs(g.area-c._area)<10);if(y){const g=[];e.left<y.left-2&&g.push("left"),e.right>y.right+2&&g.push("right"),e.top<y.top-2&&g.push("top"),e.bottom>y.bottom+2&&g.push("bottom"),g.length>0&&(d.container={label:c.label,edges:g},h=!0)}}return h?d:null}function Q8(e,n){if(e.width/n>.85)return"full-width";const a=e.x+e.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function d2(e){switch(e){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function f2(e,n={}){const i=[];e.above&&i.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:""}`),e.below&&i.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:""}`),n.includeLeftRight&&(e.left&&i.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:""}`),e.right&&i.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:""}`));const a=d2(e.alignment);return e.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${e.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&i.push(`**Outside viewport** (${e.outOfBounds.viewport.join(", ")} edge${e.outOfBounds.viewport.length>1?"s":""})`),e.outOfBounds.container&&i.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")} edge${e.outOfBounds.container.edges.length>1?"s":""})`)),i}function Z8(e,n,i){var u,d;const a=[];e.above&&a.push(`below \`${e.above.label}\``),e.below&&a.push(`above \`${e.below.label}\``),e.left&&a.push(`right of \`${e.left.label}\``),e.right&&a.push(`left of \`${e.right.label}\``),e.containedIn&&a.push(`inside \`${e.containedIn.label}\``),a.push(d2(e.alignment)),(u=e.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${e.outOfBounds.viewport.join(", ")})`),(d=e.outOfBounds)!=null&&d.container&&a.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var Mx=15;function Ex(e){if(e.length<2)return[];const n=[],i=new Set;for(let a=0;a<e.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<e.length;u++)i.has(u)||Math.abs(e[a].rect.y-e[u].rect.y)<Mx&&c.push(u);if(c.length>=2){const u=c.map(p=>e[p]);u.sort((p,y)=>p.rect.x-y.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,y)=>p+y.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<e.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<e.length;u++)i.has(u)||Math.abs(e[a].rect.x-e[u].rect.x)<Mx&&c.push(u);if(c.length>=2){const u=c.map(p=>e[p]);u.sort((p,y)=>p.rect.y-y.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,y)=>p+y.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function J8(e){var d;if(e.length<2)return[];const n=Ex(e.map(h=>({label:h.label,rect:h.originalRect}))),i=Ex(e.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let y=null,g=0;for(const x of i){const b=x.labels.filter(w=>p.has(w)).length;b>=2&&b>g&&(y=x,g=b)}if(y){const x=y.labels.filter(w=>p.has(w)),b=x.join(", ");if(y.type!==h.type){const w=h.type==="row"?"y":"x",S=y.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${w}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${y.type} (${S}≈${y.sharedEdge}, ${y.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-y.sharedEdge)>20||Math.abs(h.avgGap-y.avgGap)>5){const w=h.type==="row"?"y":"x",S=Math.abs(h.sharedEdge-y.sharedEdge)>20?` ${w}: ${h.sharedEdge} → ${y.sharedEdge}`:"",j=Math.abs(h.avgGap-y.avgGap)>5?` gaps: ${h.avgGap}px → ${y.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${S}${j}`)}x.forEach(w=>c.add(w))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(w=>c.add(w))}}for(const h of i){if(h.labels.every(g=>c.has(g))||h.labels.filter(g=>!c.has(g)).length<2)continue;if(!n.some(g=>g.labels.filter(b=>h.labels.includes(b)).length>=2)){const g=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${g}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=e.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const y=Math.round(p.currentRect.x/5)*5;((d=h[y])!=null?d:h[y]=[]).push(p.label)}for(const[p,y]of Object.entries(h))y.length>=2&&a.push(`**${y.join(", ")}**: shared left edge at x≈${p}`)}return a}function h2(e){if(typeof document>"u")return{viewport:e,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||mp.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const y of Array.from(p.children))a(y)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const y=getComputedStyle(h);if(y.maxWidth&&y.maxWidth!=="none"&&y.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<e.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:e,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Ir(h)}}}return{viewport:e,contentArea:null}}function eM(e){if(typeof document>"u")return null;const n=document.querySelector(e);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Ir(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function m2(e,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(e.x-c),h=Math.round(c+a-(e.x+e.width)),p=(e.width/a*100).toFixed(1),y=e.x+e.width/2,g=Math.abs(y-u)<20,x=e.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(e.width)}px\`)`),g&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function p2(e){const{viewport:n,contentArea:i}=e;let a=`### Reference Frame
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
`,a}function tM(e){const n=eM(e);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Tx(e,n,i,a="standard"){var k,E,I,N;if(e.length===0)return"";const c=[...e].sort((M,X)=>Math.abs(M.y-X.y)<20?M.x-X.x:M.y-X.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${e.length} component${e.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${e.length} component${e.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((M,X)=>{var U;const F=((U=ia[M.type])==null?void 0:U.label)||M.type;u+=`${X+1}. **${F}** — \`${Math.round(M.width)}×${Math.round(M.height)}px\` at \`(${Math.round(M.x)}, ${Math.round(M.y)})\`
`}),u;const d=h2(n);u+=p2(d),u+=`### Components
`,c.forEach((M,X)=>{var Le;const F=((Le=ia[M.type])==null?void 0:Le.label)||M.type,U={x:M.x,y:M.y,width:M.width,height:M.height};u+=`${X+1}. **${F}** — \`${Math.round(M.width)}×${Math.round(M.height)}px\` at \`(${Math.round(M.x)}, ${Math.round(M.y)})\`
`;const K=pp(U),pe=f2(K,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Ze of pe)u+=`   - ${Ze}
`;const ye=m2(U,d);ye&&(u+=`   - CSS: ${ye}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const M of c){const X=h.find(F=>Math.abs(F.y-M.y)<30);X?X.items.push(M):h.push({y:M.y,items:[M]})}if(h.sort((M,X)=>M.y-X.y),h.forEach((M,X)=>{M.items.sort((U,K)=>U.x-K.x);const F=M.items.map(U=>{var K;return((K=ia[U.type])==null?void 0:K.label)||U.type});if(M.items.length===1){const K=M.items[0].width>n.width*.8;u+=`- Row ${X+1} (y≈${Math.round(M.y)}): ${F[0]}${K?" — full width":""}
`}else u+=`- Row ${X+1} (y≈${Math.round(M.y)}): ${F.join(" | ")} — ${M.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let M=0;M<c.length-1;M++){const X=c[M],F=c[M+1],U=((k=ia[X.type])==null?void 0:k.label)||X.type,K=((E=ia[F.type])==null?void 0:E.label)||F.type,de=Math.round(F.y-(X.y+X.height)),pe=Math.round(F.x-(X.x+X.width));Math.abs(X.y-F.y)<30?u+=`- ${U} → ${K}: \`${pe}px\` horizontal gap
`:u+=`- ${U} → ${K}: \`${de}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let M=0;M<c.length;M++)for(let X=M+1;X<c.length;X++){const F=c[M],U=c[X],K=((I=ia[F.type])==null?void 0:I.label)||F.type,de=((N=ia[U.type])==null?void 0:N.label)||U.type,pe=Math.round(U.y-(F.y+F.height)),ye=Math.round(U.x-(F.x+F.width));u+=`- ${K} ↔ ${de}: h=\`${ye}px\` v=\`${pe}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,e.forEach((M,X)=>{var U;const F=((U=ia[M.type])==null?void 0:U.label)||M.type;u+=`${X}. ${F} at \`(${Math.round(M.x)}, ${Math.round(M.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(M=>M.type==="navigation"),y=c.some(M=>M.type==="hero"),g=c.some(M=>M.type==="sidebar"),x=c.some(M=>M.type==="footer"),b=c.filter(M=>M.type==="card"),w=c.filter(M=>M.type==="form"),S=c.filter(M=>M.type==="table"),j=c.filter(M=>M.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
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
`,g){const M=c.find(X=>X.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(M.width)}px 1fr;\`
`}if(b.length>1){const M=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${M}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Ax(e,n="standard",i){const{sections:a}=e,c=[];for(const g of a){const x=g.originalRect,b=g.currentRect,w=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,S=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!w&&!S){n==="forensic"&&c.push({section:g,posMoved:!1,sizeChanged:!1});continue}c.push({section:g,posMoved:w,sizeChanged:S})}if(c.length===0||n!=="forensic"&&c.every(g=>!g.posMoved&&!g.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=h2({width:d,height:h});n!=="compact"&&(u+=p2(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const y=g=>a.map(x=>({label:x.label,selector:x.selector,rect:g==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:g,posMoved:x,sizeChanged:b}of c){const w=g.originalRect,S=g.currentRect;if(!x&&!b){u+=`- ${g.label} — unchanged at (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${g.label}** to (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`:x?u+=`- Suggested: move **${g.label}** to (${Math.round(S.x)}, ${Math.round(S.y)})
`:u+=`- Suggested: resize **${g.label}** to ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${g.label}**
`:x?u+=`- Suggested: move **${g.label}**
`:u+=`- Suggested: resize **${g.label}** from ${Math.round(w.width)}×${Math.round(w.height)}px to ${Math.round(S.width)}×${Math.round(S.height)}px
`,x){const k=pp(w,y("original")),E=pp(S,y("current")),I=b?{width:w.width,height:w.height}:void 0;u+=`  - Currently ${Z8(k,{x:w.x,y:w.y},I)}
`;const N=b?{width:S.width,height:S.height}:void 0,M=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,X=N?`, ${Math.round(N.width)}×${Math.round(N.height)}px`:"",U=f2(E,{includeLeftRight:n==="detailed"||n==="forensic"});if(U.length>0){u+=`  - Suggested position ${M}${X}: ${U[0]}
`;for(let de=1;de<U.length;de++)u+=`    ${U[de]}
`}else u+=`  - Suggested position ${M}${X}
`;const K=m2(S,p);K&&(u+=`  - CSS: ${K}
`)}const j=tM(g.selector);if(j&&(u+=`  - ${j}
`),u+=`  - Selector: \`${g.selector}\`
`,n==="detailed"||n==="forensic"){const k=g.className?`${g.tagName}.${g.className.split(" ")[0]}`:g.tagName;k!==g.selector&&(u+=`  - Element: \`${k}\`
`),g.role&&(u+=`  - Role: \`${g.role}\`
`),n==="forensic"&&g.textSnippet&&(u+=`  - Text: "${g.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(w.x)}, y: ${Math.round(w.y)}, w: ${Math.round(w.width)}, h: ${Math.round(w.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`)}if(n!=="compact"){const g=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=J8(g);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const g=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of g){const b=x.currentRect,w=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${w?" ← suggested":""}
`}}return u}var _p="feedback-annotations-",_2=7;function Wd(e){return`${_p}${e}`}function km(e){if(typeof window>"u")return[];try{const n=localStorage.getItem(Wd(e));if(!n)return[];const i=JSON.parse(n),a=Date.now()-_2*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function g2(e,n){if(!(typeof window>"u"))try{localStorage.setItem(Wd(e),JSON.stringify(n))}catch{}}function nM(){const e=new Map;if(typeof window>"u")return e;try{const n=Date.now()-_2*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(_p)){const c=a.slice(_p.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&e.set(c,h)}}}}catch{}return e}function vc(e,n,i){const a=n.map(c=>({...c,_syncedTo:i}));g2(e,a)}var t_="agentation-design-";function sM(e){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${t_}${e}`);return n?JSON.parse(n):[]}catch{return[]}}function oM(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${t_}${e}`,JSON.stringify(n))}catch{}}function iM(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${t_}${e}`)}catch{}}var n_="agentation-rearrange-";function aM(e){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${n_}${e}`);return n?JSON.parse(n):null}catch{return null}}function rM(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${n_}${e}`,JSON.stringify(n))}catch{}}function lM(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${n_}${e}`)}catch{}}var s_="agentation-wireframe-";function cM(e){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${s_}${e}`);return n?JSON.parse(n):null}catch{return null}}function Nx(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${s_}${e}`,JSON.stringify(n))}catch{}}function gd(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${s_}${e}`)}catch{}}var y2="agentation-session-";function o_(e){return`${y2}${e}`}function uM(e){if(typeof window>"u")return null;try{return localStorage.getItem(o_(e))}catch{return null}}function jm(e,n){if(!(typeof window>"u"))try{localStorage.setItem(o_(e),n)}catch{}}function dM(e){if(!(typeof window>"u"))try{localStorage.removeItem(o_(e))}catch{}}var x2=`${y2}toolbar-hidden`;function fM(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(x2)==="1"}catch{return!1}}function hM(e){if(!(typeof window>"u"))try{e&&sessionStorage.setItem(x2,"1")}catch{}}async function Mm(e,n){const i=await fetch(`${e}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function Dx(e,n){const i=await fetch(`${e}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function gl(e,n,i){const a=await fetch(`${e}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function Rx(e,n,i){const a=await fetch(`${e}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function ar(e,n){const i=await fetch(`${e}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var Zn={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Bx=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Lx=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],mM=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function pM(e){var a,c,u,d;const n=(a=e==null?void 0:e.mode)!=null?a:"filtered";let i=Bx;if(e!=null&&e.skipExact){const h=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);i=new Set([...Bx,...h])}return{maxComponents:(c=e==null?void 0:e.maxComponents)!=null?c:6,maxDepth:(u=e==null?void 0:e.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:e!=null&&e.skipPatterns?[...Lx,...e.skipPatterns]:Lx,userPatterns:(d=e==null?void 0:e.userPatterns)!=null?d:mM,filter:e==null?void 0:e.filter}}function _M(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function gM(e,n=10){const i=new Set;let a=e,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function yM(e,n){const i=_M(e);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function xM(e,n,i,a){if(i.filter)return i.filter(e,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(e)||i.skipPatterns.some(c=>c.test(e)));case"smart":return i.skipExact.has(e)||i.skipPatterns.some(c=>c.test(e))?!1:!!(a&&yM(e,a)||i.userPatterns.some(c=>c.test(e)));default:return!0}}var yl=null,bM=new WeakMap;function Em(e){return Object.keys(e).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function vM(){if(yl!==null)return yl;if(typeof document>"u")return!1;if(document.body&&Em(document.body))return yl=!0,!0;const e=["#root","#app","#__next","[data-reactroot]"];for(const n of e){const i=document.querySelector(n);if(i&&Em(i))return yl=!0,!0}if(document.body){for(const n of document.body.children)if(Em(n))return yl=!0,!0}return yl=!1,!1}var wc={map:bM};function wM(e){return Object.keys(e).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function SM(e){const n=wM(e);return n?e[n]:null}function Tr(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function CM(e){var c;const{tag:n,type:i,elementType:a}=e;if(n===Zn.HostComponent||n===Zn.HostText||n===Zn.HostHoistable||n===Zn.HostSingleton||n===Zn.Fragment||n===Zn.Mode||n===Zn.Profiler||n===Zn.DehydratedFragment||n===Zn.HostRoot||n===Zn.HostPortal||n===Zn.ScopeComponent||n===Zn.OffscreenComponent||n===Zn.LegacyHiddenComponent||n===Zn.CacheComponent||n===Zn.TracingMarkerComponent||n===Zn.Throw||n===Zn.ViewTransitionComponent||n===Zn.ActivityComponent)return null;if(n===Zn.ForwardRef){const u=a;if(u!=null&&u.render){const d=Tr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:Tr(i)}if(n===Zn.MemoComponent||n===Zn.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=Tr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:Tr(i)}if(n===Zn.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===Zn.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===Zn.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?Tr(u._result):null}return n===Zn.SuspenseComponent||n===Zn.SuspenseListComponent?null:n===Zn.IncompleteClassComponent||n===Zn.IncompleteFunctionComponent||n===Zn.FunctionComponent||n===Zn.ClassComponent||n===Zn.IndeterminateComponent?Tr(i):null}function kM(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function jM(e,n){const i=pM(n),a=i.mode==="all";if(a){const p=wc.map.get(e);if(p!==void 0)return p}if(!vM()){const p={path:null,components:[]};return a&&wc.map.set(e,p),p}const c=i.mode==="smart"?gM(e):void 0,u=[];try{let p=SM(e),y=0;for(;p&&y<i.maxDepth&&u.length<i.maxComponents;){const g=CM(p);g&&!kM(g)&&xM(g,y,i,c)&&u.push(g),p=p.return,y++}}catch{const p={path:null,components:[]};return a&&wc.map.set(e,p),p}if(u.length===0){const p={path:null,components:[]};return a&&wc.map.set(e,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&wc.map.set(e,h),h}var Sc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function MM(e){if(!e||typeof e!="object")return null;const n=Object.keys(e),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return e[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return e[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=e[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&e[c]||null}function Vc(e){if(!e.type||typeof e.type=="string")return null;if(typeof e.type=="object"||typeof e.type=="function"){const n=e.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function EM(e,n=50){var c;let i=e,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Vc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Vc(i._debugOwner)};i=i.return,a++}return null}function TM(e){let n=e,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Vc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Vc(n)}}}n=n.return,i++}return null}var yd=new Map;function AM(e){var c;const n=e.tag,i=e.type,a=e.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===Sc.FunctionComponent||n===Sc.IndeterminateComponent)&&typeof i=="function")return i;if(n===Sc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===Sc.MemoComponent||n===Sc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function NM(){const e=Zv,n=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function DM(e){const n=e.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function RM(e){let n=e;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function BM(e){const n=AM(e);if(!n)return null;if(yd.has(n))return yd.get(n);const i=NM();if(!i)return yd.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=DM(d.stack);h&&(c={fileName:RM(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:Vc(e)||void 0})}}}finally{i.set(a)}return yd.set(n,c),c}function LM(e,n=15){let i=e,a=0;for(;i&&a<n;){const c=BM(i);if(c)return c;i=i.return,a++}return null}function gp(e){const n=MM(e);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=EM(n);if(i||(i=TM(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=LM(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function OM(e,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=e;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function zM(e,n=10){let i=e,a=0;for(;i&&a<n;){const c=gp(i);if(c.found)return c;i=i.parentElement,a++}return gp(e)}var $M=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,IM={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(e)),e.textContent=$M}var et=IM,Cc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Ox(e,n,i="standard"){if(e.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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
}`,HM={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-marker-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(e)),e.textContent=PM}var so=HM;function zx({annotation:e,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:y,renumberFrom:g,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:w,onHoverLeave:S,onClick:j,onContextMenu:k}){const E=(h||p)&&!y,I=E&&x==="delete",N=e.isMultiSelect,M=N?"var(--agentation-color-green)":"var(--agentation-color-accent)",X=c?so.exit:u?so.clearing:d?"":so.enter,F=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${so.marker} ${N?so.multiSelect:""} ${X} ${I?so.hovered:""}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y,backgroundColor:I?void 0:M,animationDelay:F},onMouseEnter:()=>w(e),onMouseLeave:S,onClick:U=>{U.stopPropagation(),c||j(e)},onContextMenu:k?U=>{x==="delete"&&(U.preventDefault(),U.stopPropagation(),c||k(e))}:void 0,children:[E?I?l.jsx(o2,{size:N?18:16}):l.jsx(ej,{size:16}):l.jsx("span",{className:g!==null&&n>=g?so.renumber:void 0,children:n+1}),h&&!y&&l.jsxs("div",{className:`${so.markerTooltip} ${so.enter}`,style:b,children:[l.jsxs("span",{className:so.markerQuote,children:[e.element,e.selectedText&&` "${e.selectedText.slice(0,30)}${e.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:so.markerNote,children:e.comment})]})]})}function UM({x:e,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${so.marker} ${so.pending} ${i?so.multiSelect:""} ${a?so.exit:so.enter}`,style:{left:`${e}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(U3,{size:12})})}function $x({annotation:e,fixed:n}){const i=e.isMultiSelect;return l.jsx("div",{className:`${so.marker} ${n?so.fixed:""} ${so.hovered} ${i?so.multiSelect:""} ${so.exit}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y},children:l.jsx(o2,{size:i?12:10})})}var VM=`.styles-module__switchContainer___Ka-AB {
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
}`,YM={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-switch-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-switch-styles",document.head.appendChild(e)),e.textContent=VM}var Tm=YM,Am=({className:e="",...n})=>l.jsxs("div",{className:`${Tm.switchContainer} ${e}`,children:[l.jsx("input",{className:Tm.switchInput,type:"checkbox",...n}),l.jsx("div",{className:Tm.switchThumb})]}),WM=`.styles-module__checkboxContainer___joqZk {
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
}`,FM={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(e)),e.textContent=WM}var xd=FM,XM=({className:e="",...n})=>l.jsxs("div",{className:`${xd.checkboxContainer} ${e}`,children:[l.jsx("input",{className:xd.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:xd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:xd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),GM=`.styles-module__container___w8eAF {
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
}`,qM={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-field-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(e)),e.textContent=GM}var Ix=qM,Px=({className:e="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=_.useId();return l.jsxs("div",{className:`${Ix.container} ${e}`,...u,children:[l.jsx(XM,{id:d,onChange:c,checked:a}),l.jsx("label",{className:Ix.label,htmlFor:d,children:n}),i&&l.jsx(Br,{content:i})]})},KM=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,QM={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-settings-panel-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(e)),e.textContent=KM}var Dt=QM;function ZM({settings:e,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:y,onSettingsPageChange:g,onHideToolbar:x}){var b;return l.jsx("div",{className:`${Dt.settingsPanel} ${h?Dt.enter:Dt.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:Dt.settingsPanelContainer,children:[l.jsxs("div",{className:`${Dt.settingsPage} ${y==="automations"?Dt.slideLeft:""}`,children:[l.jsxs("div",{className:Dt.settingsHeader,children:[l.jsx("a",{className:Dt.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:Dt.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:Dt.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:Dt.themeIconWrapper,children:l.jsx("span",{className:Dt.themeIcon,children:i?l.jsx(Z3,{size:20}):l.jsx(J3,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:Dt.divider}),l.jsxs("div",{className:Dt.settingsSection,children:[l.jsxs("div",{className:Dt.settingsRow,children:[l.jsxs("div",{className:Dt.settingsLabel,children:["Output Detail",l.jsx(Br,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:Dt.cycleButton,onClick:()=>{const S=(Cc.findIndex(j=>j.value===e.outputDetail)+1)%Cc.length;n({outputDetail:Cc[S].value})},children:[l.jsx("span",{className:Dt.cycleButtonText,children:(b=Cc.find(w=>w.value===e.outputDetail))==null?void 0:b.label},e.outputDetail),l.jsx("span",{className:Dt.cycleDots,children:Cc.map(w=>l.jsx("span",{className:`${Dt.cycleDot} ${e.outputDetail===w.value?Dt.active:""}`},w.value))})]})]}),l.jsxs("div",{className:`${Dt.settingsRow} ${Dt.settingsRowMarginTop} ${c?"":Dt.settingsRowDisabled}`,children:[l.jsxs("div",{className:Dt.settingsLabel,children:["React Components",l.jsx(Br,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(Am,{checked:c&&e.reactEnabled,onChange:w=>n({reactEnabled:w.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${Dt.settingsRow} ${Dt.settingsRowMarginTop}`,children:[l.jsxs("div",{className:Dt.settingsLabel,children:["Hide Until Restart",l.jsx(Br,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(Am,{checked:!1,onChange:w=>{w.target.checked&&x()}})]})]}),l.jsx("div",{className:Dt.divider}),l.jsxs("div",{className:Dt.settingsSection,children:[l.jsx("div",{className:`${Dt.settingsLabel} ${Dt.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:Dt.colorOptions,children:zc.map(w=>l.jsx("button",{className:`${Dt.colorOption} ${e.annotationColorId===w.id?Dt.selected:""}`,style:{"--swatch":w.srgb,"--swatch-p3":w.p3},onClick:()=>n({annotationColorId:w.id}),title:w.label,type:"button"},w.id))})]}),l.jsx("div",{className:Dt.divider}),l.jsxs("div",{className:Dt.settingsSection,children:[l.jsx(Px,{className:"checkbox-field",label:"Clear on copy/send",checked:e.autoClearAfterCopy,onChange:w=>n({autoClearAfterCopy:w.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(Px,{className:Dt.checkboxField,label:"Block page interactions",checked:e.blockInteractions,onChange:w=>n({blockInteractions:w.target.checked})})]}),l.jsx("div",{className:Dt.divider}),l.jsxs("button",{className:Dt.settingsNavLink,onClick:()=>g("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:Dt.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${Dt.mcpNavIndicator} ${Dt[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${Dt.settingsPage} ${Dt.automationsPage} ${y==="automations"?Dt.slideIn:""}`,children:[l.jsxs("button",{className:Dt.settingsBackButton,onClick:()=>g("main"),children:[l.jsx(nj,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:Dt.divider}),l.jsxs("div",{className:Dt.settingsSection,children:[l.jsxs("div",{className:Dt.settingsRow,children:[l.jsxs("span",{className:Dt.automationHeader,children:["MCP Connection",l.jsx(Br,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${Dt.mcpStatusDot} ${Dt[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:Dt.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Dt.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:Dt.divider}),l.jsxs("div",{className:`${Dt.settingsSection} ${Dt.settingsSectionGrow}`,children:[l.jsxs("div",{className:Dt.settingsRow,children:[l.jsxs("span",{className:Dt.automationHeader,children:["Webhooks",l.jsx(Br,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:Dt.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${Dt.autoSendLabel} ${e.webhooksEnabled?Dt.active:""} ${e.webhookUrl?"":Dt.disabled}`,children:"Auto-Send"}),l.jsx(Am,{id:"agentation-auto-send",checked:e.webhooksEnabled,onChange:w=>n({webhooksEnabled:w.target.checked}),disabled:!e.webhookUrl})]})]}),l.jsx("p",{className:Dt.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:Dt.webhookUrlInput,placeholder:"Webhook URL",value:e.webhookUrl,onKeyDown:w=>w.stopPropagation(),onChange:w=>n({webhookUrl:w.target.value})})]})]})]})})}function Nm(e,n="filtered"){const{name:i,path:a}=Cl(e);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=jM(e,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var Hx=!1,Dm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},ha=e=>{if(!e||!e.trim())return!1;try{const n=new URL(e.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},zc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],JM=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const e=document.createElement("style");e.id="agentation-color-tokens",e.textContent=[...zc.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${zc.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${zc.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(e)};JM();function Ar(e,n){let i=document.elementFromPoint(e,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(e,n);if(!a||a===i)break;i=a}return i}function Rm(e){let n=e;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function Nr(e){return e.status!=="resolved"&&e.status!=="dismissed"}function bd(e){const n=gp(e),i=n.found?n:zM(e);if(i.found&&i.source)return OM(i.source,"path")}function e7({demoAnnotations:e,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:y=!0,endpoint:g,sessionId:x,onSessionCreated:b,webhookUrl:w,className:S}={}){var Be,Ke,ht,Ht,kn,an,Cs;const[j,k]=_.useState(!1),[E,I]=_.useState([]),[N,M]=_.useState(!0),[X,F]=_.useState(()=>fM()),[U,K]=_.useState(!1),de=_.useRef(null);_.useEffect(()=>{const T=Y=>{const G=de.current;G&&G.contains(Y.target)&&Y.stopPropagation()},D=["mousedown","click","pointerdown"];return D.forEach(Y=>document.body.addEventListener(Y,T)),()=>{D.forEach(Y=>document.body.removeEventListener(Y,T))}},[]);const[pe,ye]=_.useState(!1),[Le,Ze]=_.useState(!1),[ae,ie]=_.useState(null),[B,se]=_.useState({x:0,y:0}),[H,_e]=_.useState(null),[ke,z]=_.useState(!1),[ce,ee]=_.useState("idle"),[we,Re]=_.useState(!1),[ge,Pe]=_.useState(!1),[nt,Xe]=_.useState(null),[yt,Tt]=_.useState(null),[kt,ut]=_.useState([]),[Ot,_t]=_.useState(null),[tn,nn]=_.useState(null),[Q,Oe]=_.useState(null),[ft,Ee]=_.useState(null),[xt,Ye]=_.useState([]),[bt,vt]=_.useState(0),[At,zt]=_.useState(!1),[dt,V]=_.useState(!1),[J,Se]=_.useState(!1),[Ne,at]=_.useState(!1),[Je,$e]=_.useState(!1),[xe,st]=_.useState("main"),[Fe,ot]=_.useState(!1),[ze,it]=_.useState(!1),[wt,St]=_.useState(!1),[tt,$t]=_.useState([]),[jt,gt]=_.useState(null),mn=_.useRef(!1),[pt,Ut]=_.useState(!1),[bn,Rt]=_.useState(!1),[Ct,pn]=_.useState(1),[ln,on]=_.useState("new-page"),[Vt,qt]=_.useState(""),[Mt,wn]=_.useState(!1),[mt,ls]=_.useState(null),ts=_.useRef(!1),Eo=_.useRef({rearrange:null,placements:[]}),cs=_.useRef({rearrange:null,placements:[]}),[To,Oo]=_.useState(0),[js,Bs]=_.useState(0),[sn,Gn]=_.useState(0),[Mn,ws]=_.useState(0),ns=_.useRef(new Set),Jn=_.useRef(new Set),un=_.useRef(null),Os=_.useRef(),po=ze&&j&&!wt&&pt;_.useEffect(()=>{if(po){Rt(!1);const T=Sl(()=>{Rt(!0)});return()=>cancelAnimationFrame(T)}else Rt(!1)},[po]);const Gs=_.useRef(new Map),Ao=_.useRef(new Map),qs=_.useRef(),[gs,zs]=_.useState(!1),[Sn,Ks]=_.useState([]),Qi=_.useRef(Sn);Qi.current=Sn;const[Ns,No]=_.useState(null),oo=_.useRef(null);_.useRef(!1),_.useRef([]),_.useRef(0),_.useRef(null),_.useRef(null),_.useRef(1);const[ys,Qs]=_.useState(!1),io=_.useRef(null),[Cn,ss]=_.useState([]),us=_.useRef({cmd:!1,shift:!1}),ds=()=>{ot(!0)},ao=()=>{ot(!1)},Fo=()=>{ys||(io.current=Qt(()=>Qs(!0),850))},Do=()=>{io.current&&(clearTimeout(io.current),io.current=null),Qs(!1),ao()};_.useEffect(()=>()=>{io.current&&clearTimeout(io.current)},[]);const[Wt,Si]=_.useState(()=>{var T;try{const D=JSON.parse((T=localStorage.getItem("feedback-toolbar-settings"))!=null?T:"");return{...Dm,...D,annotationColorId:zc.find(Y=>Y.id===D.annotationColorId)?D.annotationColorId:Dm.annotationColorId}}catch{return Dm}}),[xs,zo]=_.useState(!0),[Oi,Qo]=_.useState(!1),Ms=()=>{var T;(T=de.current)==null||T.classList.add(et.disableTransitions),zo(D=>!D),Sl(()=>{var D;(D=de.current)==null||D.classList.remove(et.disableTransitions)})},zi=!1,Ds="off",[Un,_o]=_.useState(x!=null?x:null),Zo=_.useRef(!1),[$s,$o]=_.useState(g?"connecting":"disconnected"),[_n,Is]=_.useState(null),[Zs,Jo]=_.useState(!1),[Ls,Ci]=_.useState(null),ei=_.useRef(!1),[$i,ro]=_.useState(new Set),[go,Ss]=_.useState(new Set),[Vn,Pn]=_.useState(!1),[yo,xo]=_.useState(!1),[Js,On]=_.useState(!1),Ps=_.useRef(null),zn=_.useRef(null),Hs=_.useRef(null),ti=_.useRef(null),ni=_.useRef(!1),Ii=_.useRef(0),di=_.useRef(null),fi=_.useRef(null),bo=8,Ro=50,Zi=_.useRef(null),ki=_.useRef(null),hi=_.useRef(null),It=typeof window<"u"?window.location.pathname:"/";_.useEffect(()=>{if(Ne)$e(!0);else{ot(!1),st("main");const T=Qt(()=>$e(!1),0);return()=>clearTimeout(T)}},[Ne]);const Xo=j&&N&&!ze;_.useEffect(()=>{if(Xo){Ze(!1),ye(!0),ro(new Set);const T=Qt(()=>{ro(D=>{const Y=new Set(D);return E.forEach(G=>Y.add(G.id)),Y})},350);return()=>clearTimeout(T)}else if(pe){Ze(!0);const T=Qt(()=>{ye(!1),Ze(!1)},250);return()=>clearTimeout(T)}},[Xo]),_.useEffect(()=>{V(!0),vt(window.scrollY);const T=km(It);I(T.filter(Nr)),Hx||(Qo(!0),Hx=!0,Qt(()=>Qo(!1),750));try{const D=localStorage.getItem("feedback-toolbar-theme");D!==null&&zo(D==="dark")}catch{}try{const D=localStorage.getItem("feedback-toolbar-position");if(D){const Y=JSON.parse(D);typeof Y.x=="number"&&typeof Y.y=="number"&&Is(Y)}}catch{}},[It]),_.useEffect(()=>{dt&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Wt))},[Wt,dt]),_.useEffect(()=>{dt&&localStorage.setItem("feedback-toolbar-theme",xs?"dark":"light")},[xs,dt]);const Bo=_.useRef(!1);_.useEffect(()=>{const T=Bo.current;Bo.current=Zs,T&&!Zs&&_n&&dt&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(_n))},[Zs,_n,dt]),_.useEffect(()=>{if(!g||!dt||Zo.current)return;Zo.current=!0,$o("connecting"),(async()=>{try{const D=uM(It),Y=x||D;let G=!1;if(Y)try{const ne=await Dx(g,Y);_o(ne.id),$o("connected"),jm(It,ne.id),G=!0;const he=km(It),P=new Set(ne.annotations.map(le=>le.id)),Z=he.filter(le=>!P.has(le.id));if(Z.length>0){const me=`${typeof window<"u"?window.location.origin:""}${It}`,Ge=(await Promise.allSettled(Z.map(Qe=>gl(g,ne.id,{...Qe,sessionId:ne.id,url:me})))).map((Qe,lt)=>Qe.status==="fulfilled"?Qe.value:(console.warn("[Agentation] Failed to sync annotation:",Qe.reason),Z[lt])),ct=[...ne.annotations,...Ge];I(ct.filter(Nr)),vc(It,ct.filter(Nr),ne.id)}else I(ne.annotations.filter(Nr)),vc(It,ne.annotations.filter(Nr),ne.id)}catch(ne){console.warn("[Agentation] Could not join session, creating new:",ne),dM(It)}if(!G){const ne=typeof window<"u"?window.location.href:"/",he=await Mm(g,ne);_o(he.id),$o("connected"),jm(It,he.id),b==null||b(he.id);const P=nM(),Z=typeof window<"u"?window.location.origin:"",le=[];for(const[me,Me]of P){const Ge=Me.filter(lt=>!lt._syncedTo);if(Ge.length===0)continue;const ct=`${Z}${me}`,Qe=me===It;le.push((async()=>{try{const lt=Qe?he:await Mm(g,ct),An=(await Promise.allSettled(Ge.map(Zt=>gl(g,lt.id,{...Zt,sessionId:lt.id,url:ct})))).map((Zt,Xt)=>Zt.status==="fulfilled"?Zt.value:(console.warn("[Agentation] Failed to sync annotation:",Zt.reason),Ge[Xt])).filter(Nr);if(vc(me,An,lt.id),Qe){const Zt=new Set(Ge.map(Xt=>Xt.id));I(Xt=>{const Nt=Xt.filter(Gt=>!Zt.has(Gt.id));return[...An,...Nt]})}}catch(lt){console.warn(`[Agentation] Failed to sync annotations for ${me}:`,lt)}})())}await Promise.allSettled(le)}}catch(D){$o("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",D)}})()},[g,x,dt,b,It]),_.useEffect(()=>{if(!g||!dt)return;const T=async()=>{try{(await fetch(`${g}/health`)).ok?$o("connected"):$o("disconnected")}catch{$o("disconnected")}};T();const D=ij(T,1e4);return()=>clearInterval(D)},[g,dt]),_.useEffect(()=>{if(!g||!dt||!Un)return;const T=new EventSource(`${g}/sessions/${Un}/events`),D=["resolved","dismissed"],Y=G=>{var ne;try{const he=JSON.parse(G.data);if(D.includes((ne=he.payload)==null?void 0:ne.status)){const P=he.payload.id,Z=he.payload.kind;if(Z==="placement"){for(const[le,me]of Gs.current)if(me===P){Gs.current.delete(le),$t(Me=>Me.filter(Ge=>Ge.id!==le));break}}else if(Z==="rearrange"){for(const[le,me]of Ao.current)if(me===P){Ao.current.delete(le),ls(Me=>{if(!Me)return null;const Ge=Me.sections.filter(ct=>ct.id!==le);return Ge.length===0?null:{...Me,sections:Ge}});break}}else Ss(le=>new Set(le).add(P)),Qt(()=>{I(le=>le.filter(me=>me.id!==P)),Ss(le=>{const me=new Set(le);return me.delete(P),me})},150)}}catch{}};return T.addEventListener("annotation.updated",Y),()=>{T.removeEventListener("annotation.updated",Y),T.close()}},[g,dt,Un]),_.useEffect(()=>{if(!g||!dt)return;const T=fi.current==="disconnected",D=$s==="connected";fi.current=$s,T&&D&&(async()=>{try{const G=km(It);if(G.length===0)return;const he=`${typeof window<"u"?window.location.origin:""}${It}`;let P=Un,Z=[];if(P)try{Z=(await Dx(g,P)).annotations}catch{P=null}P||(P=(await Mm(g,he)).id,_o(P),jm(It,P));const le=new Set(Z.map(Me=>Me.id)),me=G.filter(Me=>!le.has(Me.id));if(me.length>0){const Ge=(await Promise.allSettled(me.map(lt=>gl(g,P,{...lt,sessionId:P,url:he})))).map((lt,rn)=>lt.status==="fulfilled"?lt.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",lt.reason),me[rn])),Qe=[...Z,...Ge].filter(Nr);I(Qe),vc(It,Qe,P)}}catch(G){console.warn("[Agentation] Failed to sync on reconnect:",G)}})()},[$s,g,dt,Un,It]);const vo=_.useCallback(()=>{U||(K(!0),at(!1),k(!1),Qt(()=>{hM(!0),F(!0),K(!1)},400))},[U]);_.useEffect(()=>{if(!i||!dt||!e||e.length===0||E.length>0)return;const T=[];return T.push(Qt(()=>{k(!0)},n-200)),e.forEach((D,Y)=>{const G=n+Y*300;T.push(Qt(()=>{const ne=document.querySelector(D.selector);if(!ne)return;const he=ne.getBoundingClientRect(),{name:P,path:Z}=Cl(ne),le={id:`demo-${Date.now()}-${Y}`,x:(he.left+he.width/2)/window.innerWidth*100,y:he.top+he.height/2+window.scrollY,comment:D.comment,element:P,elementPath:Z,timestamp:Date.now(),selectedText:D.selectedText,boundingBox:{x:he.left,y:he.top+window.scrollY,width:he.width,height:he.height},nearbyText:xc(ne),cssClasses:bc(ne)};I(me=>[...me,le])},G))}),()=>{T.forEach(clearTimeout)}},[i,dt,e,n]),_.useEffect(()=>{const T=()=>{vt(window.scrollY),zt(!0),hi.current&&clearTimeout(hi.current),hi.current=Qt(()=>{zt(!1)},150)};return window.addEventListener("scroll",T,{passive:!0}),()=>{window.removeEventListener("scroll",T),hi.current&&clearTimeout(hi.current)}},[]),_.useEffect(()=>{dt&&E.length>0?Un?vc(It,E,Un):g2(It,E):dt&&E.length===0&&localStorage.removeItem(Wd(It))},[E,It,dt,Un]),_.useEffect(()=>{if(dt&&!mn.current){mn.current=!0;const T=sM(It);T.length>0&&$t(T)}},[dt,It]),_.useEffect(()=>{dt&&mn.current&&!pt&&(tt.length>0?oM(It,tt):iM(It))},[tt,It,dt,pt]),_.useEffect(()=>{if(dt&&!ts.current){ts.current=!0;const T=aM(It);if(T){const D={...T,sections:T.sections.map(Y=>{var G;return{...Y,currentRect:(G=Y.currentRect)!=null?G:{...Y.originalRect}}})};ls(D)}}},[dt,It]),_.useEffect(()=>{dt&&ts.current&&!pt&&(mt?rM(It,mt):lM(It))},[mt,It,dt,pt]);const wo=_.useRef(!1);_.useEffect(()=>{if(dt&&!wo.current){wo.current=!0;const T=cM(It);T&&(cs.current={rearrange:T.rearrange,placements:T.placements||[]},T.purpose&&qt(T.purpose))}},[dt,It]),_.useEffect(()=>{var D,Y,G,ne,he;if(!dt||!wo.current)return;const T=cs.current;pt?((Y=(D=mt==null?void 0:mt.sections)==null?void 0:D.length)!=null?Y:0)>0||tt.length>0||Vt?Nx(It,{rearrange:mt,placements:tt,purpose:Vt}):gd(It):((he=(ne=(G=T.rearrange)==null?void 0:G.sections)==null?void 0:ne.length)!=null?he:0)>0||T.placements.length>0||Vt?Nx(It,{rearrange:T.rearrange,placements:T.placements,purpose:Vt}):gd(It)},[mt,tt,Vt,pt,It,dt]),_.useEffect(()=>{ze&&!mt&&ls({sections:[],originalOrder:[],detectedAt:Date.now()})},[ze,mt]),_.useEffect(()=>{if(!g||!Un)return;const T=Gs.current,D=new Set(tt.map(Y=>Y.id));for(const Y of tt){if(T.has(Y.id))continue;T.set(Y.id,"");const G=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:It;gl(g,Un,{id:Y.id,x:Y.x/window.innerWidth*100,y:Y.y,comment:`Place ${Y.type} at (${Math.round(Y.x)}, ${Math.round(Y.y)}), ${Y.width}×${Y.height}px${Y.text?` — "${Y.text}"`:""}`,element:`[design:${Y.type}]`,elementPath:"[placement]",timestamp:Y.timestamp,url:G,intent:"change",severity:"important",kind:"placement",placement:{componentType:Y.type,width:Y.width,height:Y.height,scrollY:Y.scrollY,text:Y.text}}).then(ne=>{T.has(Y.id)&&T.set(Y.id,ne.id)}).catch(ne=>{console.warn("[Agentation] Failed to sync placement annotation:",ne),T.delete(Y.id)})}for(const[Y,G]of T)D.has(Y)||(T.delete(Y),G&&ar(g,G).catch(()=>{}))},[tt,g,Un,It]),_.useEffect(()=>{if(!(!g||!Un))return qs.current&&clearTimeout(qs.current),qs.current=Qt(()=>{const T=Ao.current;if(!mt||mt.sections.length===0){for(const[,G]of T)G&&ar(g,G).catch(()=>{});T.clear();return}const D=new Set(mt.sections.map(G=>G.id)),Y=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:It;for(const G of mt.sections){const ne=G.originalRect,he=G.currentRect;if(!(Math.abs(ne.x-he.x)>1||Math.abs(ne.y-he.y)>1||Math.abs(ne.width-he.width)>1||Math.abs(ne.height-he.height)>1)){const le=T.get(G.id);le&&(T.delete(G.id),ar(g,le).catch(()=>{}));continue}const Z=T.get(G.id);Z?Rx(g,Z,{comment:`Move ${G.label} section (${G.tagName}) — from (${Math.round(ne.x)},${Math.round(ne.y)}) ${Math.round(ne.width)}×${Math.round(ne.height)} to (${Math.round(he.x)},${Math.round(he.y)}) ${Math.round(he.width)}×${Math.round(he.height)}`}).catch(le=>{console.warn("[Agentation] Failed to update rearrange annotation:",le)}):(T.set(G.id,""),gl(g,Un,{id:G.id,x:he.x/window.innerWidth*100,y:he.y,comment:`Move ${G.label} section (${G.tagName}) — from (${Math.round(ne.x)},${Math.round(ne.y)}) ${Math.round(ne.width)}×${Math.round(ne.height)} to (${Math.round(he.x)},${Math.round(he.y)}) ${Math.round(he.width)}×${Math.round(he.height)}`,element:G.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:Y,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:G.selector,label:G.label,tagName:G.tagName,originalRect:ne,currentRect:he}}).then(le=>{T.has(G.id)&&T.set(G.id,le.id)}).catch(le=>{console.warn("[Agentation] Failed to sync rearrange annotation:",le),T.delete(G.id)}))}for(const[G,ne]of T)D.has(G)||(T.delete(G),ne&&ar(g,ne).catch(()=>{}))},300),()=>{qs.current&&clearTimeout(qs.current)}},[mt,g,Un,It]);const So=_.useRef(new Map);_.useLayoutEffect(()=>{var Y;const T=(Y=mt==null?void 0:mt.sections)!=null?Y:[],D=new Set;if((ze||wt)&&j)for(const G of T){D.add(G.id);try{const ne=document.querySelector(G.selector);if(!ne)continue;if(!So.current.has(G.id)){const he={transform:ne.style.transform,transformOrigin:ne.style.transformOrigin,opacity:ne.style.opacity,position:ne.style.position,zIndex:ne.style.zIndex,display:ne.style.display},P=[];let Z=ne.parentElement;for(;Z&&Z!==document.body;){const me=getComputedStyle(Z);(me.overflow!=="visible"||me.overflowX!=="visible"||me.overflowY!=="visible")&&(P.push({el:Z,overflow:Z.style.overflow}),Z.style.overflow="visible"),Z=Z.parentElement}getComputedStyle(ne).display==="inline"&&(ne.style.display="inline-block"),So.current.set(G.id,{el:ne,origStyles:he,ancestors:P}),ne.style.transformOrigin="top left",ne.style.zIndex="9999"}}catch{}}for(const[G,ne]of So.current)if(!D.has(G)){const{el:he,origStyles:P,ancestors:Z}=ne;he.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",he.style.transform=P.transform,he.style.transformOrigin=P.transformOrigin,he.style.opacity=P.opacity,he.style.position=P.position,he.style.zIndex=P.zIndex,So.current.delete(G),Qt(()=>{he.style.transition="",he.style.display=P.display;for(const le of Z)le.el.style.overflow=le.overflow},450)}},[mt,ze,wt,j]),_.useEffect(()=>()=>{for(const[,T]of So.current){const{el:D,origStyles:Y,ancestors:G}=T;D.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",D.style.transform=Y.transform,D.style.transformOrigin=Y.transformOrigin,D.style.opacity=Y.opacity,D.style.position=Y.position,D.style.zIndex=Y.zIndex,Qt(()=>{D.style.transition="",D.style.display=Y.display;for(const ne of G)ne.el.style.overflow=ne.overflow},450)}So.current.clear()},[]);const si=_.useCallback(()=>{St(!0),it(!1),gt(null),clearTimeout(Os.current),Os.current=Qt(()=>{St(!1)},300)},[]),ji=_.useCallback(()=>{ze&&(St(!0),it(!1),gt(null),clearTimeout(Os.current),Os.current=Qt(()=>{St(!1)},300)),k(!1)},[ze]),Yn=_.useCallback(()=>{J||(rj(),Se(!0))},[J]),C=_.useCallback(()=>{J&&(gx(),Se(!1))},[J]),W=_.useCallback(()=>{J?C():Yn()},[J,Yn,C]),fe=_.useCallback(()=>{if(Cn.length===0)return;const T=Cn[0],D=T.element,Y=Cn.length>1,G=Cn.map(ne=>ne.element.getBoundingClientRect());if(Y){const ne={left:Math.min(...G.map(lt=>lt.left)),top:Math.min(...G.map(lt=>lt.top)),right:Math.max(...G.map(lt=>lt.right)),bottom:Math.max(...G.map(lt=>lt.bottom))},he=Cn.slice(0,5).map(lt=>lt.name).join(", "),P=Cn.length>5?` +${Cn.length-5} more`:"",Z=G.map(lt=>({x:lt.left,y:lt.top+window.scrollY,width:lt.width,height:lt.height})),me=Cn[Cn.length-1].element,Me=G[G.length-1],Ge=Me.left+Me.width/2,ct=Me.top+Me.height/2,Qe=Rm(me);_e({x:Ge/window.innerWidth*100,y:Qe?ct:ct+window.scrollY,clientY:ct,element:`${Cn.length} elements: ${he}${P}`,elementPath:"multi-select",boundingBox:{x:ne.left,y:ne.top+window.scrollY,width:ne.right-ne.left,height:ne.bottom-ne.top},isMultiSelect:!0,isFixed:Qe,elementBoundingBoxes:Z,multiSelectElements:Cn.map(lt=>lt.element),targetElement:me,fullPath:md(D),accessibility:hd(D),computedStyles:fd(D),computedStylesObj:dd(D),nearbyElements:ud(D),cssClasses:bc(D),nearbyText:xc(D),sourceFile:bd(D)})}else{const ne=G[0],he=Rm(D);_e({x:ne.left/window.innerWidth*100,y:he?ne.top:ne.top+window.scrollY,clientY:ne.top,element:T.name,elementPath:T.path,boundingBox:{x:ne.left,y:he?ne.top:ne.top+window.scrollY,width:ne.width,height:ne.height},isFixed:he,fullPath:md(D),accessibility:hd(D),computedStyles:fd(D),computedStylesObj:dd(D),nearbyElements:ud(D),cssClasses:bc(D),nearbyText:xc(D),reactComponents:T.reactComponents,sourceFile:bd(D)})}ss([]),ie(null)},[Cn]);_.useEffect(()=>{j||(_e(null),Oe(null),Ee(null),Ye([]),ie(null),at(!1),ss([]),us.current={cmd:!1,shift:!1},J&&C())},[j,J,C]),_.useEffect(()=>()=>{gx()},[]),_.useEffect(()=>{if(!j)return;const T=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),D=":not([data-agentation-root]):not([data-agentation-root] *)",Y=document.createElement("style");return Y.id="feedback-cursor-styles",Y.textContent=`
      body ${D} {
        cursor: crosshair !important;
      }

      body :is(${T})${D} {
        cursor: text !important;
      }
    `,document.head.appendChild(Y),()=>{const G=document.getElementById("feedback-cursor-styles");G&&G.remove()}},[j]),_.useEffect(()=>{if(Ns!==null&&j)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Ns,j]),_.useEffect(()=>{if(!j||H||gs||ze)return;const T=D=>{const Y=D.composedPath()[0]||D.target;if(ai(Y,"[data-feedback-toolbar]")){ie(null);return}const G=Ar(D.clientX,D.clientY);if(!G||ai(G,"[data-feedback-toolbar]")){ie(null);return}const{name:ne,elementName:he,path:P,reactComponents:Z}=Nm(G,Ds),le=G.getBoundingClientRect();ie({element:ne,elementName:he,elementPath:P,rect:le,reactComponents:Z}),se({x:D.clientX,y:D.clientY})};return document.addEventListener("mousemove",T),()=>document.removeEventListener("mousemove",T)},[j,H,gs,ze,Ds,Sn]);const Ae=_.useCallback(T=>{var D;if(Oe(T),Xe(null),Tt(null),ut([]),(D=T.elementBoundingBoxes)!=null&&D.length){const Y=[];for(const G of T.elementBoundingBoxes){const ne=G.x+G.width/2,he=G.y+G.height/2-window.scrollY,P=Ar(ne,he);P&&Y.push(P)}Ye(Y),Ee(null)}else if(T.boundingBox){const Y=T.boundingBox,G=Y.x+Y.width/2,ne=T.isFixed?Y.y+Y.height/2:Y.y+Y.height/2-window.scrollY,he=Ar(G,ne);if(he){const P=he.getBoundingClientRect(),Z=P.width/Y.width,le=P.height/Y.height;Z<.5||le<.5?Ee(null):Ee(he)}else Ee(null);Ye([])}else Ee(null),Ye([])},[]);_.useEffect(()=>{if(!j||gs||ze)return;const T=D=>{var dn,An;if(ni.current){ni.current=!1;return}const Y=D.composedPath()[0]||D.target;if(ai(Y,"[data-feedback-toolbar]")||ai(Y,"[data-annotation-popup]")||ai(Y,"[data-annotation-marker]"))return;if(D.metaKey&&D.shiftKey&&!H&&!Q){D.preventDefault(),D.stopPropagation();const Zt=Ar(D.clientX,D.clientY);if(!Zt)return;const Xt=Zt.getBoundingClientRect(),{name:Nt,path:Gt,reactComponents:qn}=Nm(Zt,Ds),En=Cn.findIndex(Us=>Us.element===Zt);En>=0?ss(Us=>Us.filter((Co,es)=>es!==En)):ss(Us=>[...Us,{element:Zt,rect:Xt,name:Nt,path:Gt,reactComponents:qn!=null?qn:void 0}]);return}const G=ai(Y,"button, a, input, select, textarea, [role='button'], [onclick]");if(Wt.blockInteractions&&G&&(D.preventDefault(),D.stopPropagation()),H){if(G&&!Wt.blockInteractions)return;D.preventDefault(),(dn=Zi.current)==null||dn.shake();return}if(Q){if(G&&!Wt.blockInteractions)return;D.preventDefault(),(An=ki.current)==null||An.shake();return}D.preventDefault();const ne=Ar(D.clientX,D.clientY);if(!ne)return;const{name:he,path:P,reactComponents:Z}=Nm(ne,Ds),le=ne.getBoundingClientRect(),me=D.clientX/window.innerWidth*100,Me=Rm(ne),Ge=Me?D.clientY:D.clientY+window.scrollY,ct=window.getSelection();let Qe;ct&&ct.toString().trim().length>0&&(Qe=ct.toString().trim().slice(0,500));const lt=dd(ne),rn=fd(ne);_e({x:me,y:Ge,clientY:D.clientY,element:he,elementPath:P,selectedText:Qe,boundingBox:{x:le.left,y:Me?le.top:le.top+window.scrollY,width:le.width,height:le.height},nearbyText:xc(ne),cssClasses:bc(ne),isFixed:Me,fullPath:md(ne),accessibility:hd(ne),computedStyles:rn,computedStylesObj:lt,nearbyElements:ud(ne),reactComponents:Z!=null?Z:void 0,sourceFile:bd(ne),targetElement:ne}),ie(null)};return document.addEventListener("click",T,!0),()=>document.removeEventListener("click",T,!0)},[j,gs,ze,H,Q,Wt.blockInteractions,Ds,Cn]),_.useEffect(()=>{if(!j)return;const T=G=>{G.key==="Meta"&&(us.current.cmd=!0),G.key==="Shift"&&(us.current.shift=!0)},D=G=>{const ne=us.current.cmd&&us.current.shift;G.key==="Meta"&&(us.current.cmd=!1),G.key==="Shift"&&(us.current.shift=!1);const he=us.current.cmd&&us.current.shift;ne&&!he&&Cn.length>0&&fe()},Y=()=>{us.current={cmd:!1,shift:!1},ss([])};return document.addEventListener("keydown",T),document.addEventListener("keyup",D),window.addEventListener("blur",Y),()=>{document.removeEventListener("keydown",T),document.removeEventListener("keyup",D),window.removeEventListener("blur",Y)}},[j,Cn,fe]),_.useEffect(()=>{if(!j||H||gs||ze)return;const T=D=>{const Y=D.composedPath()[0]||D.target;ai(Y,"[data-feedback-toolbar]")||ai(Y,"[data-annotation-marker]")||ai(Y,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(Y.tagName)||Y.isContentEditable||(D.preventDefault(),Ps.current={x:D.clientX,y:D.clientY})};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[j,H,gs,ze]),_.useEffect(()=>{if(!j||H)return;const T=D=>{if(!Ps.current)return;const Y=D.clientX-Ps.current.x,G=D.clientY-Ps.current.y,ne=Y*Y+G*G,he=bo*bo;if(!Js&&ne>=he&&(zn.current=Ps.current,On(!0),D.preventDefault()),(Js||ne>=he)&&zn.current){if(Hs.current){const Nt=Math.min(zn.current.x,D.clientX),Gt=Math.min(zn.current.y,D.clientY),qn=Math.abs(D.clientX-zn.current.x),En=Math.abs(D.clientY-zn.current.y);Hs.current.style.transform=`translate(${Nt}px, ${Gt}px)`,Hs.current.style.width=`${qn}px`,Hs.current.style.height=`${En}px`}const P=Date.now();if(P-Ii.current<Ro)return;Ii.current=P;const Z=zn.current.x,le=zn.current.y,me=Math.min(Z,D.clientX),Me=Math.min(le,D.clientY),Ge=Math.max(Z,D.clientX),ct=Math.max(le,D.clientY),Qe=(me+Ge)/2,lt=(Me+ct)/2,rn=new Set,dn=[[me,Me],[Ge,Me],[me,ct],[Ge,ct],[Qe,lt],[Qe,Me],[Qe,ct],[me,lt],[Ge,lt]];for(const[Nt,Gt]of dn){const qn=document.elementsFromPoint(Nt,Gt);for(const En of qn)En instanceof HTMLElement&&rn.add(En)}const An=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Nt of An)if(Nt instanceof HTMLElement){const Gt=Nt.getBoundingClientRect(),qn=Gt.left+Gt.width/2,En=Gt.top+Gt.height/2,Us=qn>=me&&qn<=Ge&&En>=Me&&En<=ct,Co=Math.min(Gt.right,Ge)-Math.max(Gt.left,me),es=Math.min(Gt.bottom,ct)-Math.max(Gt.top,Me),oi=Co>0&&es>0?Co*es:0,mi=Gt.width*Gt.height,pi=mi>0?oi/mi:0;(Us||pi>.5)&&rn.add(Nt)}const Zt=[],Xt=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Nt of rn){if(ai(Nt,"[data-feedback-toolbar]")||ai(Nt,"[data-annotation-marker]"))continue;const Gt=Nt.getBoundingClientRect();if(!(Gt.width>window.innerWidth*.8&&Gt.height>window.innerHeight*.5)&&!(Gt.width<10||Gt.height<10)&&Gt.left<Ge&&Gt.right>me&&Gt.top<ct&&Gt.bottom>Me){const qn=Nt.tagName;let En=Xt.has(qn);if(!En&&(qn==="DIV"||qn==="SPAN")){const Us=Nt.textContent&&Nt.textContent.trim().length>0,Co=Nt.onclick!==null||Nt.getAttribute("role")==="button"||Nt.getAttribute("role")==="link"||Nt.classList.contains("clickable")||Nt.hasAttribute("data-clickable");(Us||Co)&&!Nt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(En=!0)}if(En){let Us=!1;for(const Co of Zt)if(Co.left<=Gt.left&&Co.right>=Gt.right&&Co.top<=Gt.top&&Co.bottom>=Gt.bottom){Us=!0;break}Us||Zt.push(Gt)}}}if(ti.current){const Nt=ti.current;for(;Nt.children.length>Zt.length;)Nt.removeChild(Nt.lastChild);Zt.forEach((Gt,qn)=>{let En=Nt.children[qn];En||(En=document.createElement("div"),En.className=et.selectedElementHighlight,Nt.appendChild(En)),En.style.transform=`translate(${Gt.left}px, ${Gt.top}px)`,En.style.width=`${Gt.width}px`,En.style.height=`${Gt.height}px`})}}};return document.addEventListener("mousemove",T,{passive:!0}),()=>document.removeEventListener("mousemove",T)},[j,H,Js,bo]),_.useEffect(()=>{if(!j)return;const T=D=>{const Y=Js,G=zn.current;if(Js&&G){ni.current=!0;const ne=Math.min(G.x,D.clientX),he=Math.min(G.y,D.clientY),P=Math.max(G.x,D.clientX),Z=Math.max(G.y,D.clientY),le=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(Qe=>{if(!(Qe instanceof HTMLElement)||ai(Qe,"[data-feedback-toolbar]")||ai(Qe,"[data-annotation-marker]"))return;const lt=Qe.getBoundingClientRect();lt.width>window.innerWidth*.8&&lt.height>window.innerHeight*.5||lt.width<10||lt.height<10||lt.left<P&&lt.right>ne&&lt.top<Z&&lt.bottom>he&&le.push({element:Qe,rect:lt})});const Me=le.filter(({element:Qe})=>!le.some(({element:lt})=>lt!==Qe&&Qe.contains(lt))),Ge=D.clientX/window.innerWidth*100,ct=D.clientY+window.scrollY;if(Me.length>0){const Qe=Me.reduce((Xt,{rect:Nt})=>({left:Math.min(Xt.left,Nt.left),top:Math.min(Xt.top,Nt.top),right:Math.max(Xt.right,Nt.right),bottom:Math.max(Xt.bottom,Nt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),lt=Me.slice(0,5).map(({element:Xt})=>Cl(Xt).name).join(", "),rn=Me.length>5?` +${Me.length-5} more`:"",dn=Me[0].element,An=dd(dn),Zt=fd(dn);_e({x:Ge,y:ct,clientY:D.clientY,element:`${Me.length} elements: ${lt}${rn}`,elementPath:"multi-select",boundingBox:{x:Qe.left,y:Qe.top+window.scrollY,width:Qe.right-Qe.left,height:Qe.bottom-Qe.top},isMultiSelect:!0,fullPath:md(dn),accessibility:hd(dn),computedStyles:Zt,computedStylesObj:An,nearbyElements:ud(dn),cssClasses:bc(dn),nearbyText:xc(dn),sourceFile:bd(dn)})}else{const Qe=Math.abs(P-ne),lt=Math.abs(Z-he);Qe>20&&lt>20&&_e({x:Ge,y:ct,clientY:D.clientY,element:"Area selection",elementPath:`region at (${Math.round(ne)}, ${Math.round(he)})`,boundingBox:{x:ne,y:he+window.scrollY,width:Qe,height:lt},isMultiSelect:!0})}ie(null)}else Y&&(ni.current=!0);Ps.current=null,zn.current=null,On(!1),ti.current&&(ti.current.innerHTML="")};return document.addEventListener("mouseup",T),()=>document.removeEventListener("mouseup",T)},[j,Js]);const De=_.useCallback(async(T,D,Y)=>{const G=Wt.webhookUrl||w;if(!G||!Wt.webhooksEnabled&&!Y)return!1;try{return(await fetch(G,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:T,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...D})})).ok}catch(ne){return console.warn("[Agentation] Webhook failed:",ne),!1}},[w,Wt.webhookUrl,Wt.webhooksEnabled]),rt=_.useCallback(T=>{var Y;if(!H)return;const D={id:Date.now().toString(),x:H.x,y:H.y,comment:T,element:H.element,elementPath:H.elementPath,timestamp:Date.now(),selectedText:H.selectedText,boundingBox:H.boundingBox,nearbyText:H.nearbyText,cssClasses:H.cssClasses,isMultiSelect:H.isMultiSelect,isFixed:H.isFixed,fullPath:H.fullPath,accessibility:H.accessibility,computedStyles:H.computedStyles,nearbyElements:H.nearbyElements,reactComponents:H.reactComponents,sourceFile:H.sourceFile,elementBoundingBoxes:H.elementBoundingBoxes,...g&&Un?{sessionId:Un,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};I(G=>[...G,D]),di.current=D.id,Qt(()=>{di.current=null},300),Qt(()=>{ro(G=>new Set(G).add(D.id))},250),a==null||a(D),De("annotation.add",{annotation:D}),Pn(!0),Qt(()=>{_e(null),Pn(!1)},150),(Y=window.getSelection())==null||Y.removeAllRanges(),g&&Un&&gl(g,Un,D).then(G=>{G.id!==D.id&&(I(ne=>ne.map(he=>he.id===D.id?{...he,id:G.id}:he)),ro(ne=>{const he=new Set(ne);return he.delete(D.id),he.add(G.id),he}))}).catch(G=>{console.warn("[Agentation] Failed to sync annotation:",G)})},[H,a,De,g,Un]),Kt=_.useCallback(()=>{Pn(!0),Qt(()=>{_e(null),Pn(!1)},150)},[]),Yt=_.useCallback(T=>{const D=E.findIndex(G=>G.id===T),Y=E[D];(Q==null?void 0:Q.id)===T&&(xo(!0),Qt(()=>{Oe(null),Ee(null),Ye([]),xo(!1)},150)),_t(T),Ss(G=>new Set(G).add(T)),Y&&(c==null||c(Y),De("annotation.delete",{annotation:Y})),g&&ar(g,T).catch(G=>{console.warn("[Agentation] Failed to delete annotation from server:",G)}),Qt(()=>{I(G=>G.filter(ne=>ne.id!==T)),Ss(G=>{const ne=new Set(G);return ne.delete(T),ne}),_t(null),D<E.length-1&&(nn(D),Qt(()=>nn(null),200))},150)},[E,Q,c,De,g]),cn=_.useCallback(T=>{var D;if(!T){Xe(null),Tt(null),ut([]);return}if(Xe(T.id),(D=T.elementBoundingBoxes)!=null&&D.length){const Y=[];for(const G of T.elementBoundingBoxes){const ne=G.x+G.width/2,he=G.y+G.height/2-window.scrollY,Z=document.elementsFromPoint(ne,he).find(le=>!le.closest("[data-annotation-marker]")&&!le.closest("[data-agentation-root]"));Z&&Y.push(Z)}ut(Y),Tt(null)}else if(T.boundingBox){const Y=T.boundingBox,G=Y.x+Y.width/2,ne=T.isFixed?Y.y+Y.height/2:Y.y+Y.height/2-window.scrollY,he=Ar(G,ne);if(he){const P=he.getBoundingClientRect(),Z=P.width/Y.width,le=P.height/Y.height;Z<.5||le<.5?Tt(null):Tt(he)}else Tt(null);ut([])}else Tt(null),ut([])},[]),Tn=_.useCallback(T=>{if(!Q)return;const D={...Q,comment:T};I(Y=>Y.map(G=>G.id===Q.id?D:G)),u==null||u(D),De("annotation.update",{annotation:D}),g&&Rx(g,Q.id,{comment:T}).catch(Y=>{console.warn("[Agentation] Failed to update annotation on server:",Y)}),xo(!0),Qt(()=>{Oe(null),Ee(null),Ye([]),xo(!1)},150)},[Q,u,De,g]),Dn=_.useCallback(()=>{xo(!0),Qt(()=>{Oe(null),Ee(null),Ye([]),xo(!1)},150)},[]),gn=_.useCallback(()=>{const T=E.length,D=tt.length>0||!!mt;if(T===0&&Sn.length===0&&!D)return;if(d==null||d(E),De("annotations.clear",{annotations:E}),g){Promise.all(E.map(ne=>ar(g,ne.id).catch(he=>{console.warn("[Agentation] Failed to delete annotation from server:",he)})));for(const[,ne]of Gs.current)ne&&ar(g,ne).catch(()=>{});Gs.current.clear();for(const[,ne]of Ao.current)ne&&ar(g,ne).catch(()=>{});Ao.current.clear()}Pe(!0),Re(!0),Ks([]);const Y=oo.current;if(Y){const ne=Y.getContext("2d");ne&&ne.clearRect(0,0,Y.width,Y.height)}(tt.length>0||mt)&&(Gn(ne=>ne+1),ws(ne=>ne+1),Qt(()=>{$t([]),ls(null)},200)),pt&&Ut(!1),Vt&&qt(""),cs.current={rearrange:null,placements:[]},gd(It);const G=T*30+200;Qt(()=>{I([]),ro(new Set),localStorage.removeItem(Wd(It)),Pe(!1)},G),Qt(()=>Re(!1),1500)},[It,E,Sn,tt,mt,pt,Vt,d,De,g]),os=_.useCallback(async()=>{const T=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:It,D=ze&&pt;let Y;if(D){if(tt.length===0&&!mt&&!Vt)return;Y=""}else{if(Y=Ox(E,T,Wt.outputDetail),!Y&&Sn.length===0&&tt.length===0&&!mt)return;Y||(Y=`## Page Feedback: ${T}
`)}if(!D&&Sn.length>0){const G=new Set;for(const Z of E)Z.drawingIndex!=null&&G.add(Z.drawingIndex);const ne=oo.current;ne&&(ne.style.visibility="hidden");const he=[],P=window.scrollY;for(let Z=0;Z<Sn.length;Z++){if(G.has(Z))continue;const le=Sn[Z];if(le.points.length<2)continue;const me=le.fixed?le.points:le.points.map(Kn=>({x:Kn.x,y:Kn.y-P}));let Me=1/0,Ge=1/0,ct=-1/0,Qe=-1/0;for(const Kn of me)Me=Math.min(Me,Kn.x),Ge=Math.min(Ge,Kn.y),ct=Math.max(ct,Kn.x),Qe=Math.max(Qe,Kn.y);const lt=ct-Me,rn=Qe-Ge,dn=Math.hypot(lt,rn),An=me[0],Zt=me[me.length-1],Xt=Math.hypot(Zt.x-An.x,Zt.y-An.y);let Nt;const Gt=Xt<dn*.35,qn=lt/Math.max(rn,1);if(Gt&&dn>20){const Kn=Math.max(lt,rn)*.15;let _i=0;for(const Mi of me){const mr=Mi.x-Me<Kn,Pr=ct-Mi.x<Kn,Hr=Mi.y-Ge<Kn,Ur=Qe-Mi.y<Kn;(mr||Pr)&&(Hr||Ur)&&_i++}Nt=_i>me.length*.15?"box":"circle"}else qn>3&&rn<40?Nt="underline":Xt>dn*.5?Nt="arrow":Nt="drawing";const En=Math.min(10,me.length),Us=Math.max(1,Math.floor(me.length/En)),Co=new Set,es=[],oi=[An];for(let Kn=Us;Kn<me.length-1;Kn+=Us)oi.push(me[Kn]);oi.push(Zt);for(const Kn of oi){const _i=Ar(Kn.x,Kn.y);if(!_i||Co.has(_i)||ai(_i,"[data-feedback-toolbar]"))continue;Co.add(_i);const{name:Mi}=Cl(_i);es.includes(Mi)||es.push(Mi)}const mi=`${Math.round(Me)},${Math.round(Ge)} → ${Math.round(ct)},${Math.round(Qe)}`;let pi;(Nt==="circle"||Nt==="box")&&es.length>0?pi=`${Nt==="box"?"Boxed":"Circled"} **${es[0]}**${es.length>1?` (and ${es.slice(1).join(", ")})`:""} (region: ${mi})`:Nt==="underline"&&es.length>0?pi=`Underlined **${es[0]}** (${mi})`:Nt==="arrow"&&es.length>=2?pi=`Arrow from **${es[0]}** to **${es[es.length-1]}** (${Math.round(An.x)},${Math.round(An.y)} → ${Math.round(Zt.x)},${Math.round(Zt.y)})`:es.length>0?pi=`${Nt==="arrow"?"Arrow":"Drawing"} near **${es.join("**, **")}** (region: ${mi})`:pi=`Drawing at ${mi}`,he.push(pi)}ne&&(ne.style.visibility=""),he.length>0&&(Y+=`
**Drawings:**
`,he.forEach((Z,le)=>{Y+=`${le+1}. ${Z}
`}))}if((tt.length>0||D&&Vt)&&(Y+=`
`+Tx(tt,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:pt,wireframePurpose:Vt||void 0},Wt.outputDetail)),mt){const G=Ax(mt,Wt.outputDetail,{width:window.innerWidth,height:window.innerHeight});G&&(Y+=`
`+G)}if(y)try{await navigator.clipboard.writeText(Y)}catch{}h==null||h(Y),z(!0),Qt(()=>z(!1),2e3),Wt.autoClearAfterCopy&&Qt(()=>gn(),500)},[E,Sn,tt,mt,pt,ze,ln,Vt,It,Wt.outputDetail,Ds,Wt.autoClearAfterCopy,gn,y,h]),eo=_.useCallback(async()=>{const T=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:It;let D=Ox(E,T,Wt.outputDetail);if(!D&&tt.length===0&&!mt)return;if(D||(D=`## Page Feedback: ${T}
`),tt.length>0&&(D+=`
`+Tx(tt,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:pt,wireframePurpose:Vt||void 0},Wt.outputDetail)),mt){const G=Ax(mt,Wt.outputDetail,{width:window.innerWidth,height:window.innerHeight});G&&(D+=`
`+G)}p&&p(D,E),ee("sending"),await new Promise(G=>Qt(G,150));const Y=await De("submit",{output:D,annotations:E},!0);ee(Y?"sent":"failed"),Qt(()=>ee("idle"),2500),Y&&Wt.autoClearAfterCopy&&Qt(()=>gn(),500)},[p,De,E,tt,mt,pt,ln,It,Wt.outputDetail,Ds,Wt.autoClearAfterCopy,gn]);_.useEffect(()=>{if(!Ls)return;const T=10,D=G=>{const ne=G.clientX-Ls.x,he=G.clientY-Ls.y,P=Math.sqrt(ne*ne+he*he);if(!Zs&&P>T&&Jo(!0),Zs||P>T){let Z=Ls.toolbarX+ne,le=Ls.toolbarY+he;const me=20,Me=337,Ge=44,Qe=Me-(j?$s==="connected"?297:257:44),lt=me-Qe,rn=window.innerWidth-me-Me;Z=Math.max(lt,Math.min(rn,Z)),le=Math.max(me,Math.min(window.innerHeight-Ge-me,le)),Is({x:Z,y:le})}},Y=()=>{Zs&&(ei.current=!0),Jo(!1),Ci(null)};return document.addEventListener("mousemove",D),document.addEventListener("mouseup",Y),()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",Y)}},[Ls,Zs,j,$s]);const en=_.useCallback(T=>{var he,P;if(T.target.closest("button")||T.target.closest("[data-agentation-settings-panel]"))return;const D=T.currentTarget.parentElement;if(!D)return;const Y=D.getBoundingClientRect(),G=(he=_n==null?void 0:_n.x)!=null?he:Y.left,ne=(P=_n==null?void 0:_n.y)!=null?P:Y.top;Ci({x:T.clientX,y:T.clientY,toolbarX:G,toolbarY:ne})},[_n]);if(_.useEffect(()=>{if(!_n)return;const T=()=>{let ne=_n.x,he=_n.y;const le=20-(337-(j?$s==="connected"?297:257:44)),me=window.innerWidth-20-337;ne=Math.max(le,Math.min(me,ne)),he=Math.max(20,Math.min(window.innerHeight-44-20,he)),(ne!==_n.x||he!==_n.y)&&Is({x:ne,y:he})};return T(),window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[_n,j,$s]),_.useEffect(()=>{const T=D=>{const Y=D.target,G=Y.tagName==="INPUT"||Y.tagName==="TEXTAREA"||Y.isContentEditable;if(D.key==="Escape"){if(ze){jt?gt(null):si();return}if(gs){zs(!1);return}if(Cn.length>0){ss([]);return}H||j&&(ds(),k(!1))}if((D.metaKey||D.ctrlKey)&&D.shiftKey&&(D.key==="f"||D.key==="F")){D.preventDefault(),ds(),j?ji():k(!0);return}if(!(G||D.metaKey||D.ctrlKey)&&((D.key==="p"||D.key==="P")&&(D.preventDefault(),ds(),W()),(D.key==="l"||D.key==="L")&&(D.preventDefault(),ds(),gs&&zs(!1),Ne&&at(!1),H&&Kt(),ze?si():it(!0)),(D.key==="h"||D.key==="H")&&E.length>0&&(D.preventDefault(),ds(),M(ne=>!ne)),(D.key==="c"||D.key==="C")&&(E.length>0||tt.length>0||mt)&&(D.preventDefault(),ds(),os()),(D.key==="x"||D.key==="X")&&(E.length>0||tt.length>0||mt)&&(D.preventDefault(),ds(),gn(),tt.length>0&&$t([]),mt&&ls(null)),D.key==="s"||D.key==="S")){const ne=ha(Wt.webhookUrl)||ha(w||"");E.length>0&&ne&&ce==="idle"&&(D.preventDefault(),ds(),eo())}};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[j,gs,ze,jt,tt,mt,H,E.length,Wt.webhookUrl,w,ce,eo,W,os,gn,Cn]),!dt||X)return null;const R=E.length>0,L=E.filter(T=>!go.has(T.id)&&T.kind!=="placement"&&T.kind!=="rearrange"),$=L.length>0,te=E.filter(T=>go.has(T.id)),re=T=>{const he=T.x/100*window.innerWidth,P=typeof T.y=="string"?parseFloat(T.y):T.y,Z={};window.innerHeight-P-22-10<80&&(Z.top="auto",Z.bottom="calc(100% + 10px)");const me=he-200/2,Me=10;if(me<Me){const Ge=Me-me;Z.left=`calc(50% + ${Ge}px)`}else if(me+200>window.innerWidth-Me){const Ge=me+200-(window.innerWidth-Me);Z.left=`calc(50% - ${Ge}px)`}return Z};return Al.createPortal(l.jsxs("div",{ref:de,style:{display:"contents"},"data-agentation-theme":xs?"dark":"light","data-agentation-accent":Wt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${et.toolbar}${S?` ${S}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:_n?{left:_n.x,top:_n.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${et.toolbarContainer} ${j?et.expanded:et.collapsed} ${Oi?et.entrance:""} ${U?et.hiding:""} ${!Wt.webhooksEnabled&&(ha(Wt.webhookUrl)||ha(w||""))?et.serverConnected:""}`,onClick:j?void 0:T=>{if(ei.current){ei.current=!1,T.preventDefault();return}k(!0)},onMouseDown:en,role:j?void 0:"button",tabIndex:j?-1:0,title:j?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${et.toggleContent} ${j?et.hidden:et.visible}`,children:[l.jsx(V3,{size:24}),$&&l.jsx("span",{className:`${et.badge} ${j?et.fadeOut:""} ${Oi?et.entrance:""}`,children:L.length})]}),l.jsxs("div",{className:`${et.controlsContent} ${j?et.visible:et.hidden} ${_n&&_n.y<100?et.tooltipBelow:""} ${Fe||Ne?et.tooltipsHidden:""} ${ys?et.tooltipsInSession:""}`,onMouseEnter:Fo,onMouseLeave:Do,children:[l.jsxs("div",{className:`${et.buttonWrapper} ${_n&&_n.x<120?et.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:et.controlButton,onClick:T=>{T.stopPropagation(),ds(),W()},"data-active":J,children:l.jsx(G3,{size:24,isPaused:J})}),l.jsxs("span",{className:et.buttonTooltip,children:[J?"Resume animations":"Pause animations",l.jsx("span",{className:et.shortcut,children:"P"})]})]}),l.jsxs("div",{className:et.buttonWrapper,children:[l.jsx("button",{className:`${et.controlButton} ${xs?"":et.light}`,onClick:T=>{T.stopPropagation(),ds(),gs&&zs(!1),Ne&&at(!1),H&&Kt(),ze?si():it(!0)},"data-active":ze,style:ze&&pt?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(sj,{size:21})}),l.jsxs("span",{className:et.buttonTooltip,children:[ze?"Exit layout mode":"Layout mode",l.jsx("span",{className:et.shortcut,children:"L"})]})]}),l.jsxs("div",{className:et.buttonWrapper,children:[l.jsx("button",{className:et.controlButton,onClick:T=>{T.stopPropagation(),ds(),M(!N)},disabled:!R||ze,children:l.jsx(X3,{size:24,isOpen:N})}),l.jsxs("span",{className:et.buttonTooltip,children:[N?"Hide markers":"Show markers",l.jsx("span",{className:et.shortcut,children:"H"})]})]}),l.jsxs("div",{className:et.buttonWrapper,children:[l.jsx("button",{className:`${et.controlButton} ${ke?et.statusShowing:""}`,onClick:T=>{T.stopPropagation(),ds(),os()},disabled:ze&&pt?tt.length===0&&!((Be=mt==null?void 0:mt.sections)!=null&&Be.length):!R&&Sn.length===0&&tt.length===0&&!((Ke=mt==null?void 0:mt.sections)!=null&&Ke.length),"data-active":ke,children:l.jsx(W3,{size:24,copied:ke,tint:ze&&pt&&(tt.length>0||(ht=mt==null?void 0:mt.sections)!=null&&ht.length)?"#f97316":void 0})}),l.jsxs("span",{className:et.buttonTooltip,children:[ze&&pt?"Copy layout":"Copy feedback",l.jsx("span",{className:et.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${et.buttonWrapper} ${et.sendButtonWrapper} ${j&&!Wt.webhooksEnabled&&(ha(Wt.webhookUrl)||ha(w||""))?et.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${et.controlButton} ${ce==="sent"||ce==="failed"?et.statusShowing:""}`,onClick:T=>{T.stopPropagation(),ds(),eo()},disabled:!R||!ha(Wt.webhookUrl)&&!ha(w||"")||ce==="sending","data-no-hover":ce==="sent"||ce==="failed",tabIndex:ha(Wt.webhookUrl)||ha(w||"")?0:-1,children:[l.jsx(F3,{size:24,state:ce}),R&&ce==="idle"&&l.jsx("span",{className:et.buttonBadge,children:E.length})]}),l.jsxs("span",{className:et.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:et.shortcut,children:"S"})]})]}),l.jsxs("div",{className:et.buttonWrapper,children:[l.jsx("button",{className:et.controlButton,onClick:T=>{T.stopPropagation(),ds(),gn()},disabled:!R&&Sn.length===0&&tt.length===0&&!((Ht=mt==null?void 0:mt.sections)!=null&&Ht.length),"data-danger":!0,children:l.jsx(K3,{size:24})}),l.jsxs("span",{className:et.buttonTooltip,children:["Clear all",l.jsx("span",{className:et.shortcut,children:"X"})]})]}),l.jsxs("div",{className:et.buttonWrapper,children:[l.jsx("button",{className:et.controlButton,onClick:T=>{T.stopPropagation(),ds(),ze&&si(),at(!Ne)},children:l.jsx(q3,{size:24})}),g&&$s!=="disconnected"&&l.jsx("span",{className:`${et.mcpIndicator} ${et[$s]} ${Ne?et.hidden:""}`,title:$s==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:et.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:et.divider}),l.jsxs("div",{className:`${et.buttonWrapper} ${_n&&typeof window<"u"&&_n.x>window.innerWidth-120?et.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:et.controlButton,onClick:T=>{T.stopPropagation(),ds(),ji()},children:l.jsx(Q3,{size:24})}),l.jsxs("span",{className:et.buttonTooltip,children:["Exit",l.jsx("span",{className:et.shortcut,children:"Esc"})]})]})]}),l.jsx(D8,{visible:ze&&j,activeType:jt,onSelect:T=>{gt(jt===T?null:T)},isDarkMode:xs,sectionCount:(kn=mt==null?void 0:mt.sections.length)!=null?kn:0,onDetectSections:()=>{var P,Z;const T=V8(),D=(P=mt==null?void 0:mt.sections)!=null?P:[],Y=new Set(D.map(le=>le.selector)),G=T.filter(le=>!Y.has(le.selector)),ne=[...D,...G],he=[...(Z=mt==null?void 0:mt.originalOrder)!=null?Z:[],...G.map(le=>le.id)];ls({sections:ne,originalOrder:he,detectedAt:Date.now()})},placementCount:tt.length,onClearPlacements:()=>{Gn(T=>T+1),ws(T=>T+1),Qt(()=>{ls({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:pt,onBlankCanvasChange:T=>{const D={sections:[],originalOrder:[],detectedAt:Date.now()};T?(Eo.current={rearrange:mt,placements:tt},ls(cs.current.rearrange||D),$t(cs.current.placements),gt(null)):(cs.current={rearrange:mt,placements:tt},ls(Eo.current.rearrange||D),$t(Eo.current.placements)),Ut(T)},wireframePurpose:Vt,onWireframePurposeChange:qt,Tooltip:Br,onDragStart:(T,D)=>{var Ge;D.preventDefault();const Y=Et[T];let G=null,ne=!1;const he=D.clientX,P=D.clientY,Z=D.target.closest("[data-feedback-toolbar]"),le=(Ge=Z==null?void 0:Z.getBoundingClientRect().top)!=null?Ge:window.innerHeight,me=ct=>{const Qe=ct.clientX-he,lt=ct.clientY-P;if(!ne&&(Math.abs(Qe)>4||Math.abs(lt)>4)&&(ne=!0,G=document.createElement("div"),G.className=`${Ue.dragPreview}${pt?` ${Ue.dragPreviewWireframe}`:""}`,document.body.appendChild(G)),!G)return;const rn=Math.max(0,le-ct.clientY),dn=Math.min(1,rn/180),An=1-Math.pow(1-dn,2),Zt=28,Xt=20,Nt=Math.min(140,Y.width*.18),Gt=Math.min(90,Y.height*.18),qn=Zt+(Nt-Zt)*An,En=Xt+(Gt-Xt)*An;G.style.width=`${qn}px`,G.style.height=`${En}px`,G.style.left=`${ct.clientX-qn/2}px`,G.style.top=`${ct.clientY-En/2}px`,G.style.opacity=`${.5+.5*An}`,G.textContent=An>.25?T:""},Me=ct=>{if(window.removeEventListener("mousemove",me),window.removeEventListener("mouseup",Me),G&&document.body.removeChild(G),ne){const Qe=Y.width,lt=Y.height,rn=window.scrollY,dn=Math.max(0,ct.clientX-Qe/2),An=Math.max(0,ct.clientY+rn-lt/2),Zt={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:T,x:dn,y:An,width:Qe,height:lt,scrollY:rn,timestamp:Date.now()};$t(Xt=>[...Xt,Zt]),gt(null),ns.current=new Set,Oo(Xt=>Xt+1)}};window.addEventListener("mousemove",me),window.addEventListener("mouseup",Me)}}),l.jsx(ZM,{settings:Wt,onSettingsChange:T=>Si(D=>({...D,...T})),isDarkMode:xs,onToggleTheme:Ms,isDevMode:zi,connectionStatus:$s,endpoint:g,isVisible:Je,toolbarNearBottom:!!_n&&_n.y<230,settingsPage:xe,onSettingsPageChange:st,onHideToolbar:vo})]})}),(ze||wt)&&l.jsx("div",{className:`${Ue.blankCanvas} ${bn?Ue.visible:""} ${Mt?Ue.gridActive:""}`,style:{"--canvas-opacity":Ct},"data-feedback-toolbar":!0}),ze&&pt&&bn&&l.jsxs("div",{className:Ue.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:Ue.wireframeOpacityRow,children:[l.jsx("span",{className:Ue.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:Ue.wireframeOpacitySlider,min:0,max:1,step:.01,value:Ct,onChange:T=>pn(Number(T.target.value))})]}),l.jsxs("div",{className:Ue.wireframeNoticeTitleRow,children:[l.jsx("span",{className:Ue.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:Ue.wireframeNoticeDivider}),l.jsx("button",{className:Ue.wireframeStartOver,onClick:()=>{Gn(T=>T+1),ls({sections:[],originalOrder:[],detectedAt:Date.now()}),cs.current={rearrange:null,placements:[]},qt(""),gd(It)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(ze||wt)&&l.jsx(M8,{placements:tt,onChange:$t,activeComponent:wt?null:jt,onActiveComponentChange:gt,isDarkMode:xs,exiting:wt,onInteractionChange:wn,passthrough:!jt,extraSnapRects:mt==null?void 0:mt.sections.map(T=>T.currentRect),deselectSignal:To,clearSignal:sn,wireframe:pt,onSelectionChange:(T,D)=>{ns.current=T,D||(Jn.current=new Set,Bs(Y=>Y+1))},onDragMove:(T,D)=>{const Y=Jn.current;if(!(!Y.size||!mt)){if(!un.current){un.current=new Map;for(const G of mt.sections)Y.has(G.id)&&un.current.set(G.id,{x:G.currentRect.x,y:G.currentRect.y})}for(const G of mt.sections){if(!Y.has(G.id)||!un.current.get(G.id))continue;const he=document.querySelector(`[data-rearrange-section="${G.id}"]`);he&&(he.style.transform=`translate(${T}px, ${D}px)`)}}},onDragEnd:(T,D,Y)=>{const G=Jn.current,ne=un.current;if(un.current=null,!(!G.size||!mt||!ne)){for(const he of G){const P=document.querySelector(`[data-rearrange-section="${he}"]`);P&&(P.style.transform="")}Y&&ls(he=>he&&{...he,sections:he.sections.map(P=>{const Z=ne.get(P.id);return Z?{...P,currentRect:{...P.currentRect,x:Math.max(0,Z.x+T),y:Math.max(0,Z.y+D)}}:P})})}}}),(ze||wt)&&mt&&l.jsx(F8,{rearrangeState:mt,onChange:ls,isDarkMode:xs,exiting:wt,blankCanvas:pt,extraSnapRects:tt.map(T=>({x:T.x,y:T.y,width:T.width,height:T.height})),clearSignal:Mn,deselectSignal:js,onSelectionChange:(T,D)=>{Jn.current=T,D||(ns.current=new Set,Oo(Y=>Y+1))},onDragMove:(T,D)=>{const Y=ns.current;if(Y.size){if(!un.current){un.current=new Map;for(const G of tt)Y.has(G.id)&&un.current.set(G.id,{x:G.x,y:G.y})}for(const G of Y){const ne=document.querySelector(`[data-design-placement="${G}"]`);ne&&(ne.style.transform=`translate(${T}px, ${D}px)`)}}},onDragEnd:(T,D,Y)=>{const G=ns.current,ne=un.current;if(un.current=null,!(!G.size||!ne)){for(const he of G){const P=document.querySelector(`[data-design-placement="${he}"]`);P&&(P.style.transform="")}Y&&$t(he=>he.map(P=>{const Z=ne.get(P.id);return Z?{...P,x:Math.max(0,Z.x+T),y:Math.max(0,Z.y+D)}:P}))}}}),l.jsx("canvas",{ref:oo,className:`${et.drawCanvas} ${gs?et.active:""}`,style:{opacity:Xo?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:et.markersLayer,"data-feedback-toolbar":!0,children:[pe&&L.filter(T=>!T.isFixed).map((T,D,Y)=>l.jsx(zx,{annotation:T,globalIndex:L.findIndex(G=>G.id===T.id),layerIndex:D,layerSize:Y.length,isExiting:Le,isClearing:ge,isAnimated:$i.has(T.id),isHovered:!Le&&nt===T.id,isDeleting:Ot===T.id,isEditingAny:!!Q,renumberFrom:tn,markerClickBehavior:Wt.markerClickBehavior,tooltipStyle:re(T),onHoverEnter:G=>!Le&&G.id!==di.current&&cn(G),onHoverLeave:()=>cn(null),onClick:G=>Wt.markerClickBehavior==="delete"?Yt(G.id):Ae(G),onContextMenu:Ae},T.id)),pe&&!Le&&te.filter(T=>!T.isFixed).map(T=>l.jsx($x,{annotation:T},T.id))]}),l.jsxs("div",{className:et.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[pe&&L.filter(T=>T.isFixed).map((T,D,Y)=>l.jsx(zx,{annotation:T,globalIndex:L.findIndex(G=>G.id===T.id),layerIndex:D,layerSize:Y.length,isExiting:Le,isClearing:ge,isAnimated:$i.has(T.id),isHovered:!Le&&nt===T.id,isDeleting:Ot===T.id,isEditingAny:!!Q,renumberFrom:tn,markerClickBehavior:Wt.markerClickBehavior,tooltipStyle:re(T),onHoverEnter:G=>!Le&&G.id!==di.current&&cn(G),onHoverLeave:()=>cn(null),onClick:G=>Wt.markerClickBehavior==="delete"?Yt(G.id):Ae(G),onContextMenu:Ae},T.id)),pe&&!Le&&te.filter(T=>T.isFixed).map(T=>l.jsx($x,{annotation:T,fixed:!0},T.id))]}),j&&l.jsxs("div",{className:et.overlay,"data-feedback-toolbar":!0,style:H||Q?{zIndex:99999}:void 0,children:[(ae==null?void 0:ae.rect)&&!H&&!At&&!Js&&l.jsx("div",{className:`${et.hoverHighlight} ${et.enter}`,style:{left:ae.rect.left,top:ae.rect.top,width:ae.rect.width,height:ae.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Cn.filter(T=>document.contains(T.element)).map((T,D)=>{const Y=T.element.getBoundingClientRect(),G=Cn.length>1;return l.jsx("div",{className:G?et.multiSelectOutline:et.singleSelectOutline,style:{position:"fixed",left:Y.left,top:Y.top,width:Y.width,height:Y.height,...G?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},D)}),nt&&!H&&(()=>{var ne;const T=E.find(he=>he.id===nt);if(!(T!=null&&T.boundingBox))return null;if((ne=T.elementBoundingBoxes)!=null&&ne.length)return kt.length>0?kt.filter(he=>document.contains(he)).map((he,P)=>{const Z=he.getBoundingClientRect();return l.jsx("div",{className:`${et.multiSelectOutline} ${et.enter}`,style:{left:Z.left,top:Z.top,width:Z.width,height:Z.height}},`hover-outline-live-${P}`)}):T.elementBoundingBoxes.map((he,P)=>l.jsx("div",{className:`${et.multiSelectOutline} ${et.enter}`,style:{left:he.x,top:he.y-bt,width:he.width,height:he.height}},`hover-outline-${P}`));const D=yt&&document.contains(yt)?yt.getBoundingClientRect():null,Y=D?{x:D.left,y:D.top,width:D.width,height:D.height}:{x:T.boundingBox.x,y:T.isFixed?T.boundingBox.y:T.boundingBox.y-bt,width:T.boundingBox.width,height:T.boundingBox.height},G=T.isMultiSelect;return l.jsx("div",{className:`${G?et.multiSelectOutline:et.singleSelectOutline} ${et.enter}`,style:{left:Y.x,top:Y.y,width:Y.width,height:Y.height,...G?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),ae&&!H&&!At&&!Js&&l.jsxs("div",{className:`${et.hoverTooltip} ${et.enter}`,style:{left:Math.max(8,Math.min(B.x,window.innerWidth-100)),top:Math.max(B.y-(ae.reactComponents?48:32),8)},children:[ae.reactComponents&&l.jsx("div",{className:et.hoverReactPath,children:ae.reactComponents}),l.jsx("div",{className:et.hoverElementName,children:ae.elementName})]}),H&&l.jsxs(l.Fragment,{children:[(an=H.multiSelectElements)!=null&&an.length?H.multiSelectElements.filter(T=>document.contains(T)).map((T,D)=>{const Y=T.getBoundingClientRect();return l.jsx("div",{className:`${et.multiSelectOutline} ${Vn?et.exit:et.enter}`,style:{left:Y.left,top:Y.top,width:Y.width,height:Y.height}},`pending-multi-${D}`)}):H.targetElement&&document.contains(H.targetElement)?(()=>{const T=H.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${et.singleSelectOutline} ${Vn?et.exit:et.enter}`,style:{left:T.left,top:T.top,width:T.width,height:T.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():H.boundingBox&&l.jsx("div",{className:`${H.isMultiSelect?et.multiSelectOutline:et.singleSelectOutline} ${Vn?et.exit:et.enter}`,style:{left:H.boundingBox.x,top:H.boundingBox.y-bt,width:H.boundingBox.width,height:H.boundingBox.height,...H.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const T=H.x,D=H.isFixed?H.y:H.y-bt;return l.jsxs(l.Fragment,{children:[l.jsx(UM,{x:T,y:D,isMultiSelect:H.isMultiSelect,isExiting:Vn}),l.jsx(Vd,{ref:Zi,element:H.element,selectedText:H.selectedText,computedStyles:H.computedStylesObj,placeholder:H.element==="Area selection"?"What should change in this area?":H.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:rt,onCancel:Kt,isExiting:Vn,lightMode:!xs,accentColor:H.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,T/100*window.innerWidth)),...D>window.innerHeight-290?{bottom:window.innerHeight-D+20}:{top:D+20}}})]})})()]}),Q&&l.jsxs(l.Fragment,{children:[(Cs=Q.elementBoundingBoxes)!=null&&Cs.length?xt.length>0?xt.filter(T=>document.contains(T)).map((T,D)=>{const Y=T.getBoundingClientRect();return l.jsx("div",{className:`${et.multiSelectOutline} ${et.enter}`,style:{left:Y.left,top:Y.top,width:Y.width,height:Y.height}},`edit-multi-live-${D}`)}):Q.elementBoundingBoxes.map((T,D)=>l.jsx("div",{className:`${et.multiSelectOutline} ${et.enter}`,style:{left:T.x,top:T.y-bt,width:T.width,height:T.height}},`edit-multi-${D}`)):(()=>{const T=ft&&document.contains(ft)?ft.getBoundingClientRect():null,D=T?{x:T.left,y:T.top,width:T.width,height:T.height}:Q.boundingBox?{x:Q.boundingBox.x,y:Q.isFixed?Q.boundingBox.y:Q.boundingBox.y-bt,width:Q.boundingBox.width,height:Q.boundingBox.height}:null;return D?l.jsx("div",{className:`${Q.isMultiSelect?et.multiSelectOutline:et.singleSelectOutline} ${et.enter}`,style:{left:D.x,top:D.y,width:D.width,height:D.height,...Q.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(Vd,{ref:ki,element:Q.element,selectedText:Q.selectedText,computedStyles:I8(Q.computedStyles),placeholder:"Edit your feedback...",initialValue:Q.comment,submitLabel:"Save",onSubmit:Tn,onCancel:Dn,onDelete:()=>Yt(Q.id),isExiting:yo,lightMode:!xs,accentColor:Q.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const T=Q.isFixed?Q.y:Q.y-bt;return{left:Math.max(160,Math.min(window.innerWidth-160,Q.x/100*window.innerWidth)),...T>window.innerHeight-290?{bottom:window.innerHeight-T+20}:{top:T+20}}})()})]}),Js&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:Hs,className:et.dragSelection}),l.jsx("div",{ref:ti,className:et.highlightsContainer})]})]})]}),document.body)}var t7=Object.freeze({}),n7=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(e,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(e,{id:e,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(e,{...u}),this.baseValues.set(e,{...u}),this.notifyGlobal()}updatePanel(e,n,i,a){var b;const c=this.panels.get(e);if(!c){this.registerPanel(e,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[w,S]of Object.entries(h))p[w]=this.normalizePreservedValue(c.values[w],S,d.get(w));this.initTransitionModes(i,"",p);for(const[w,S]of Object.entries(c.values)){if(!w.endsWith(".__mode"))continue;const j=w.slice(0,-7),k=d.get(j);(k==null?void 0:k.type)==="transition"&&(p[w]=S)}const y={id:e,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(e,y),this.snapshots.set(e,{...p});const g=(b=this.baseValues.get(e))!=null?b:{},x={};for(const[w,S]of Object.entries(h))x[w]=this.normalizePreservedValue(g[w],S,d.get(w));for(const[w,S]of Object.entries(p))w.endsWith(".__mode")&&(x[w]=S);this.baseValues.set(e,x),this.notify(e),this.notifyGlobal()}unregisterPanel(e){this.panels.delete(e),this.listeners.delete(e),this.snapshots.delete(e),this.actionListeners.delete(e),this.baseValues.delete(e),this.notifyGlobal()}updateValue(e,n,i){var u;const a=this.panels.get(e);if(!a)return;a.values[n]=i;const c=this.activePreset.get(e);if(c){const h=((u=this.presets.get(e))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(e);d&&(d[n]=i)}this.snapshots.set(e,{...a.values}),this.notify(e)}updateSpringMode(e,n,i){this.updateTransitionMode(e,n,i)}getSpringMode(e,n){const i=this.getTransitionMode(e,n);return i==="easing"?"simple":i}updateTransitionMode(e,n,i){const a=this.panels.get(e);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(e,{...a.values}),this.notify(e))}getTransitionMode(e,n){const i=this.panels.get(e);return i&&i.values[`${n}.__mode`]||"simple"}getValue(e,n){const i=this.panels.get(e);return i==null?void 0:i.values[n]}getValues(e){var n;return(n=this.snapshots.get(e))!=null?n:t7}getPanels(){return Array.from(this.panels.values())}getPanel(e){return this.panels.get(e)}subscribe(e,n){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(n),()=>{var i;(i=this.listeners.get(e))==null||i.delete(n)}}subscribeGlobal(e){return this.globalListeners.add(e),()=>this.globalListeners.delete(e)}subscribeActions(e,n){return this.actionListeners.has(e)||this.actionListeners.set(e,new Set),this.actionListeners.get(e).add(n),()=>{var i;(i=this.actionListeners.get(e))==null||i.delete(n)}}triggerAction(e,n){var i;(i=this.actionListeners.get(e))==null||i.forEach(a=>a(n))}savePreset(e,n){var d;const i=this.panels.get(e);if(!i)throw new Error(`Panel ${e} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(e))!=null?d:[];return this.presets.set(e,[...u,c]),this.activePreset.set(e,a),this.snapshots.set(e,{...i.values}),this.notify(e),a}loadPreset(e,n){var u;const i=this.panels.get(e);if(!i)return;const c=((u=this.presets.get(e))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(e,{...i.values}),this.activePreset.set(e,n),this.notify(e))}deletePreset(e,n){var c;const i=(c=this.presets.get(e))!=null?c:[];this.presets.set(e,i.filter(u=>u.id!==n)),this.activePreset.get(e)===n&&this.activePreset.set(e,null);const a=this.panels.get(e);a&&this.snapshots.set(e,{...a.values}),this.notify(e)}getPresets(e){var n;return(n=this.presets.get(e))!=null?n:[]}getActivePresetId(e){var n;return(n=this.activePreset.get(e))!=null?n:null}clearActivePreset(e){const n=this.panels.get(e),i=this.baseValues.get(e);n&&i&&(n.values={...i},this.snapshots.set(e,{...n.values})),this.activePreset.set(e,null),this.notify(e)}resolveShortcutTarget(e,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==e.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const e=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&e.push({panelId:i.id,path:a,control:u,shortcut:c})}return e}findControlByPath(e,n){for(const i of e){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(e){var n;(n=this.listeners.get(e))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(e=>e())}initTransitionModes(e,n,i){for(const[a,c]of Object.entries(e)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(e,n,i){var c;const a=[];for(const[u,d]of Object.entries(e)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),y=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:y});else if(typeof d=="number"){const{min:g,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:g,max:x,step:b,shortcut:y})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:y});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const g=d,x="_collapsed"in g?!g._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(g,h,i)})}}return a}flattenValues(e,n){var a,c,u;const i={};for(const[d,h]of Object.entries(e)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const y=h.options[0],g=typeof y=="string"?y:y.value;i[p]=(a=h.default)!=null?a:g}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="spring"}isEasingConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="easing"}isActionConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="action"}isSelectConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="select"&&"options"in e&&Array.isArray(e.options)}isColorConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="color"}isTextConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="text"}isHexColor(e){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(e)}formatLabel(e){return e.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(e){return e>=0&&e<=1?{min:0,max:1,step:.01}:e>=0&&e<=10?{min:0,max:e*3||10,step:.1}:e>=0&&e<=100?{min:0,max:e*3||100,step:1}:e>=0?{min:0,max:e*3||1e3,step:10}:{min:e*3,max:-e*3,step:1}}inferStep(e,n){const i=n-e;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(e,n,i){var a,c,u;if(e===void 0||!i)return n;switch(i.type){case"slider":{if(typeof e!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,e));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof e=="boolean"?e:n;case"select":{if(typeof e!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(e)?e:n}case"color":case"text":return typeof e=="string"?e:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(e)?e:n:this.isEasingConfig(n)&&this.isEasingConfig(e)?e:n;case"action":return n;default:return n}}roundToStep(e,n,i,a){const c=n+Math.round((e-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(e){const n=String(e),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(e){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(e),n}},hn=new n7;function s7(e,n,i){const a=_.useId(),c=`${e}-${a}`,u=_.useRef(n),d=JSON.stringify(n);u.current=n;const h=_.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=_.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const y=JSON.stringify(i==null?void 0:i.shortcuts);_.useEffect(()=>(hn.registerPanel(c,e,u.current,p.current),()=>hn.unregisterPanel(c)),[c,e]);const g=_.useRef(!1);_.useEffect(()=>{if(!g.current){g.current=!0;return}hn.updatePanel(c,e,u.current,p.current)},[c,e,d,y]),_.useEffect(()=>hn.subscribeActions(c,b=>{var w;(w=h.current)==null||w.call(h,b)}),[c]);const x=_.useSyncExternalStore(b=>hn.subscribe(c,b),()=>hn.getValues(c),()=>hn.getValues(c));return b2(n,x,"")}function b2(e,n,i){var c,u,d,h,p,y,g,x,b,w;const a={};for(const[S,j]of Object.entries(e)){if(S==="_collapsed")continue;const k=i?`${i}.${S}`:S;if(Array.isArray(j)&&j.length<=4&&typeof j[0]=="number")a[S]=(c=n[k])!=null?c:j[0];else if(typeof j=="number"||typeof j=="boolean"||typeof j=="string")a[S]=(u=n[k])!=null?u:j;else if(o7(j)||i7(j))a[S]=(d=n[k])!=null?d:j;else if(a7(j))a[S]=(h=n[k])!=null?h:j;else if(r7(j)){const E=(p=j.default)!=null?p:u7(j.options);a[S]=(y=n[k])!=null?y:E}else l7(j)?a[S]=(x=(g=n[k])!=null?g:j.default)!=null?x:"#000000":c7(j)?a[S]=(w=(b=n[k])!=null?b:j.default)!=null?w:"":typeof j=="object"&&j!==null&&(a[S]=b2(j,n,k))}return a}function Bl(e,n){return typeof e=="object"&&e!==null&&"type"in e&&e.type===n}function o7(e){return Bl(e,"spring")}function i7(e){return Bl(e,"easing")}function a7(e){return Bl(e,"action")}function r7(e){return Bl(e,"select")&&"options"in e&&Array.isArray(e.options)}function l7(e){return Bl(e,"color")}function c7(e){return Bl(e,"text")}function u7(e){const n=e[0];return typeof n=="string"?n:n.value}function yp(e){const n=e.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function Dd(e,n){const i=Math.round(e/n)*n;return parseFloat(i.toFixed(yp(n)))}function kc(e,n){var d,h,p,y;const i=(d=e.min)!=null?d:0,c=((h=e.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(y=e.step)!=null?y:1}function jc(e,n,i,a,c){var y,g;const u=hn.getValue(e,n),d=(y=i.min)!=null?y:0,h=(g=i.max)!=null?g:1,p=Math.max(d,Math.min(h,u+c*a));hn.updateValue(e,n,Dd(p,a))}function d7(e,n,i){const a=(e-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):e}function vd(){const e=document.activeElement;if(!e)return!1;const n=e.tagName;return n==="INPUT"||n==="TEXTAREA"||e.contentEditable==="true"}function Bm(e){if(e.altKey)return"alt";if(e.shiftKey)return"shift";if(e.metaKey)return"meta"}function v2(e,n){for(const i of e){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=v2(i.children,n);if(a)return a}}return null}var wd=4;function f7(e){switch(e){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function h7(e){var c;const n=(c=e.interaction)!=null?c:"scroll",i=f7(n);return e.key?`${w2(e.modifier)}${e.key.toUpperCase()}+${i}`:i}function m7(e){return e.key?`${w2(e.modifier)}${e.key.toUpperCase()}`:"Press"}function w2(e){return e==="alt"?"⌥":e==="shift"?"⇧":e==="meta"?"⌘":""}var S2=_.createContext({activePanelId:null,activePath:null});function p7({children:e}){const[n,i]=_.useState({activePanelId:null,activePath:null}),a=_.useRef(new Set),c=_.useRef(!1),u=_.useRef(null),d=_.useRef(0),h=_.useCallback(p=>{var y;for(const g of a.current){const x=hn.getPanels();for(const b of x)for(const[w,S]of Object.entries(b.shortcuts)){if(!S.key||S.key.toLowerCase()!==g||((y=S.interaction)!=null?y:"scroll")!==p)continue;const j=v2(b.controls,w);if(j&&j.type==="slider")return{panelId:b.id,path:w,control:j,shortcut:S}}}return null},[]);return _.useEffect(()=>{const p=j=>{if(vd())return;const k=j.key.toLowerCase();if((k==="arrowleft"||k==="arrowright"||k==="arrowup"||k==="arrowdown")&&a.current.size>0){const M=h("scroll")||h("drag")||h("move");if(M&&M.control.type==="slider"){j.preventDefault();const X=k==="arrowright"||k==="arrowup"?1:-1,F=kc(M.control,M.shortcut);jc(M.panelId,M.path,M.control,F,X);return}}const E=a.current.has(k);a.current.add(k);const I=Bm(j),N=hn.resolveShortcutTarget(k,I);if(N&&(i({activePanelId:N.panelId,activePath:N.path}),!E&&N.control.type==="toggle")){const M=hn.getValue(N.panelId,N.path);hn.updateValue(N.panelId,N.path,!M)}E||(u.current=null,d.current=0)},y=j=>{const k=j.key.toLowerCase();if(a.current.delete(k),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let E=!1;for(const I of a.current){const N=Bm(j),M=hn.resolveShortcutTarget(I,N);if(M){i({activePanelId:M.panelId,activePath:M.path}),E=!0;break}}E||i({activePanelId:null,activePath:null})}},g=j=>{var I,N;if(vd())return;const k=Bm(j);if(a.current.size>0)for(const M of a.current){const X=hn.resolveShortcutTarget(M,k);if(!X)continue;const{panelId:F,path:U,control:K}=X;if(((N=(I=K.shortcut)==null?void 0:I.interaction)!=null?N:"scroll")!=="scroll"||K.type!=="slider")continue;j.preventDefault();const pe=kc(K,K.shortcut),ye=j.deltaY>0?-1:1;jc(F,U,K,pe,ye);return}const E=hn.resolveScrollOnlyTargets();for(const{panelId:M,path:X,control:F,shortcut:U}of E){if(F.type!=="slider")continue;j.preventDefault();const K=kc(F,U),de=j.deltaY>0?-1:1;jc(M,X,F,K,de);return}},x=j=>{if(vd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=j.clientX,d.current=0,j.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},w=j=>{if(vd()||a.current.size===0)return;if(c.current){const E=h("drag");if(E&&u.current!==null){const I=j.clientX-u.current;u.current=j.clientX,d.current+=I;const N=kc(E.control,E.shortcut),M=Math.trunc(d.current/wd);M!==0&&(d.current-=M*wd,jc(E.panelId,E.path,E.control,N,M))}return}const k=h("move");if(k){if(u.current===null){u.current=j.clientX;return}const E=j.clientX-u.current;u.current=j.clientX,d.current+=E;const I=kc(k.control,k.shortcut),N=Math.trunc(d.current/wd);N!==0&&(d.current-=N*wd,jc(k.panelId,k.path,k.control,I,N))}},S=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",y),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",w),window.addEventListener("blur",S),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",y),window.removeEventListener("wheel",g),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",w),window.removeEventListener("blur",S)}},[h]),l.jsx(S2.Provider,{value:n,children:e})}var i_="M6 9.5L12 15.5L18 9.5",_7="M5 12.75L10 19L19 5",Lm={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},g7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],y7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Ux={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Fd({title:e,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=_.useState(i),[y,g]=_.useState(!i),x=_.useRef(null),[b,w]=_.useState(void 0),[S,j]=_.useState(typeof window<"u"?window.innerHeight:800);_.useEffect(()=>{if(!a)return;const I=()=>j(window.innerHeight);return window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)},[a]),_.useEffect(()=>{const I=x.current;if(!I)return;const N=new ResizeObserver(()=>{if(h){const M=I.offsetHeight;w(X=>X===M?X:M)}});return N.observe(I),()=>N.disconnect()},[h]);const k=()=>{if(c&&a)return;const I=!h;p(I),g(!I),u==null||u(I)},E=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:k,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:e})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:e})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Ux.path,fill:"currentColor"}),Ux.circles.map((I,N)=>l.jsx("circle",{cx:I.cx,cy:I.cy,r:I.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},N))]}),!a&&l.jsx(ci.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:i_})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:I=>I.stopPropagation(),children:d})]}),l.jsx(Jd,{initial:!1,children:h&&l.jsx(ci.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:E});const I=h?{width:280,height:b!==void 0?Math.min(b+10,S-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(ci.div,{className:"dialkit-panel-inner",style:I,onClick:h?void 0:k,"data-collapsed":y,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:E})}return E}var x7=3,b7=32,v7=200,w7=8;function Ko({label:e,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var dt;const y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=_.useRef(null),w=_.useRef(null),[S,j]=_.useState(!1),[k,E]=_.useState(!1),[I,N]=_.useState(!1),[M,X]=_.useState(!1),[F,U]=_.useState(!1),[K,de]=_.useState(!1),[pe,ye]=_.useState(""),Le=_.useRef(null),Ze=_.useRef(null),ae=_.useRef(!0),ie=_.useRef(null),B=_.useRef(null),se=_.useRef(1),H=(n-a)/(c-a)*100,_e=S||I,ke=cp(H),z=id(ke,V=>`${V}%`),ce=id(ke,V=>`max(5px, calc(${V}% - 9px))`),ee=cp(0),we=id(ee,V=>`calc(100% + ${Math.abs(V)}px)`),Re=id(ee,V=>V<0?V:0);_.useEffect(()=>{!S&&!ie.current&&ke.jump(H)},[H,S,ke]);const ge=_.useCallback(V=>{const J=B.current;if(!J)return n;const Ne=(V-J.left)/se.current,at=y.current?y.current.offsetWidth:J.width,Je=Math.max(0,Math.min(1,Ne/at)),$e=a+Je*(c-a);return Math.max(a,Math.min(c,$e))},[a,c,n]),Pe=_.useCallback(V=>(V-a)/(c-a)*100,[a,c]),nt=_.useCallback((V,J)=>{const Se=B.current;if(!Se)return 0;const Ne=J<0?Se.left-V:V-Se.right,at=Math.max(0,Ne-b7);return J*w7*Math.sqrt(Math.min(at/v7,1))},[]),Xe=_.useCallback(V=>{if(!K&&(V.preventDefault(),V.target.setPointerCapture(V.pointerId),Ze.current={x:V.clientX,y:V.clientY},ae.current=!0,j(!0),y.current)){B.current=y.current.getBoundingClientRect();const J=y.current.offsetWidth;se.current=B.current.width/J}},[K]),yt=_.useCallback(V=>{if(!S||!Ze.current)return;const J=V.clientX-Ze.current.x,Se=V.clientY-Ze.current.y,Ne=Math.sqrt(J*J+Se*Se);if(ae.current&&Ne>x7&&(ae.current=!1,E(!0)),!ae.current){const at=B.current;at&&(V.clientX<at.left?ee.jump(nt(V.clientX,-1)):V.clientX>at.right?ee.jump(nt(V.clientX,1)):ee.jump(0));const Je=ge(V.clientX),$e=Pe(Je);ie.current&&(ie.current.stop(),ie.current=null),ke.jump($e),i(Dd(Je,u))}},[S,ge,Pe,i,ke,ee,nt]),Tt=_.useCallback(V=>{if(S){if(ae.current){const J=ge(V.clientX),Ne=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((J-a)/u)*u)):d7(J,a,c),at=Pe(Ne);ie.current&&ie.current.stop(),ie.current=ox(ke,at,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{ie.current=null}}),i(Dd(Ne,u))}ee.get()!==0&&ox(ee,0,{type:"spring",visualDuration:.35,bounce:.15}),j(!1),E(!1),Ze.current=null}},[S,ge,Pe,i,a,c,ke,ee]);_.useEffect(()=>(M&&!K&&!F?Le.current=setTimeout(()=>{U(!0)},800):!M&&!K&&(Le.current&&(clearTimeout(Le.current),Le.current=null),U(!1)),()=>{Le.current&&clearTimeout(Le.current)}),[M,K,F]),_.useEffect(()=>{K&&x.current&&(x.current.focus(),x.current.select())},[K]);const kt=V=>{ye(V.target.value)},ut=()=>{const V=parseFloat(pe);if(!isNaN(V)){const J=Math.max(a,Math.min(c,V));i(Dd(J,u))}de(!1),X(!1),U(!1)},Ot=V=>{F&&(V.stopPropagation(),V.preventDefault(),de(!0),ye(n.toFixed(yp(u))))},_t=V=>{V.key==="Enter"?ut():V.key==="Escape"&&(de(!1),X(!1))},tn=()=>{ut()},nn=n.toFixed(yp(u)),Q=8,Oe=10,ft=10;let Ee=30,xt=78;const Ye=(dt=y.current)==null?void 0:dt.offsetWidth;Ye&&Ye>0&&(b.current&&(Ee=(Oe+b.current.offsetWidth+Q)/Ye*100),w.current&&(xt=(Ye-ft-w.current.offsetWidth-Q)/Ye*100));const bt=H<Ee||H>xt,vt=_e?bt?.1:k?.9:.5:0,At=(c-a)/u,zt=At<=10?Array.from({length:At-1},(V,J)=>{const Se=(J+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${Se}%`}},J)}):Array.from({length:9},(V,J)=>{const Se=(J+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${Se}%`}},J)});return l.jsx("div",{ref:y,className:"dialkit-slider-wrapper",children:l.jsxs(ci.div,{ref:g,className:`dialkit-slider ${_e?"dialkit-slider-active":""}`,onPointerDown:Xe,onPointerMove:yt,onPointerUp:Tt,onMouseEnter:()=>N(!0),onMouseLeave:()=>N(!1),style:{width:we,x:Re},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:zt}),l.jsx(ci.div,{className:"dialkit-slider-fill",style:{width:z}}),l.jsx(ci.div,{className:"dialkit-slider-handle",style:{left:ce,y:"-50%"},animate:{opacity:vt,scaleX:_e?1:.25,scaleY:_e&&bt?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[e,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:h7(h)})]}),K?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:pe,onChange:kt,onKeyDown:_t,onBlur:tn,onClick:V=>V.stopPropagation(),onMouseDown:V=>V.stopPropagation()}):l.jsx("span",{ref:w,className:`dialkit-slider-value ${F?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>X(!0),onMouseLeave:()=>X(!1),onClick:Ot,onMouseDown:V=>F&&V.stopPropagation(),style:{cursor:F?"text":"default"},children:nn})]})})}function a_({options:e,value:n,onChange:i}){const a=_.useRef(null),c=_.useRef(!1),[u,d]=_.useState(null),h=_.useCallback(()=>{const y=a.current;if(!y)return;const g=y.querySelector('[data-active="true"]');g&&d({left:g.offsetLeft,width:g.offsetWidth})},[]);_.useLayoutEffect(()=>{h()},[n,e.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),e.map(y=>{const g=n===y.value;return l.jsx("button",{onClick:()=>i(y.value),className:"dialkit-segmented-button","data-active":String(g),children:y.label},y.value)})]})}function S7({label:e,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[e,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:m7(a)})]}),l.jsx(a_,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function C7(e,n,i,a){const c=[],d=a/100;let h=0,p=0;const y=1;for(let g=0;g<=100;g++){const x=g*d;c.push([x,h]);const b=-e*(h-y),w=-n*p,S=(b+w)/i;p+=S*d,h+=p*d}return c}function C2({spring:e,isSimpleMode:n}){var j,k,E,I,N;let c,u,d;if(n){const M=(j=e.visualDuration)!=null?j:.3,X=(k=e.bounce)!=null?k:.2;d=1,c=2*Math.PI/M,c=Math.pow(c,2),u=2*(1-X)*Math.sqrt(c*d)}else c=(E=e.stiffness)!=null?E:400,u=(I=e.damping)!=null?I:17,d=(N=e.mass)!=null?N:1;const h=2,p=C7(c,u,d,h),y=p.map(([,M])=>M),g=Math.min(...y),b=Math.max(...y)-g,w=p.map(([M,X],F)=>{const U=M/h*256,de=140-((X-g)/(b||1)*140*.6+140*.2);return`${F===0?"M":"L"} ${U} ${de}`}).join(" "),S=[];for(let M=1;M<4;M++){const X=64*M,F=140/4*M;S.push(l.jsx("line",{x1:X,y1:0,x2:X,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${M}`),l.jsx("line",{x1:0,y1:F,x2:256,y2:F,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${M}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[S,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:w,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function k7({panelId:e,path:n,label:i,spring:a,onChange:c}){var g,x,b,w,S;const u=_.useSyncExternalStore(j=>hn.subscribe(e,j),()=>hn.getSpringMode(e,n),()=>hn.getSpringMode(e,n)),d=u==="simple",h=_.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=j=>{hn.updateSpringMode(e,n,j),c(j==="simple"?h.current.simple:h.current.advanced)},y=(j,k)=>{if(d){const{stiffness:E,damping:I,mass:N,...M}=a;c({...M,[j]:k})}else{const{visualDuration:E,bounce:I,...N}=a;c({...N,[j]:k})}};return l.jsx(Fd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(C2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(a_,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Ko,{label:"Duration",value:(g=a.visualDuration)!=null?g:.3,onChange:j=>y("visualDuration",j),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Ko,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:j=>y("bounce",j),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Ko,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:j=>y("stiffness",j),min:1,max:1e3,step:10}),l.jsx(Ko,{label:"Damping",value:(w=a.damping)!=null?w:17,onChange:j=>y("damping",j),min:1,max:100,step:1}),l.jsx(Ko,{label:"Mass",value:(S=a.mass)!=null?S:1,onChange:j=>y("mass",j),min:.1,max:10,step:.1})]})]})})}function j7({easing:e}){const n=e.ease,i=200,a=10,u=(i-a*2)/2,d=(b,w)=>({x:a+(b+.5)*u,y:a+(1.5-w)*u}),h=d(0,0),p=d(1,1),y=d(n[0],n[1]),g=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${y.x} ${y.y}, ${g.x} ${g.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function M7({panelId:e,path:n,label:i,value:a,onChange:c}){var S,j,k,E,I;const u=_.useSyncExternalStore(N=>hn.subscribe(e,N),()=>hn.getTransitionMode(e,n),()=>hn.getTransitionMode(e,n)),d=u==="easing",h=u==="simple",p=_.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const y=a.type==="spring"?a:p.current.simple,g=a.type==="easing"?a:p.current.easing,x=N=>{hn.updateTransitionMode(e,n,N),c(N==="easing"?p.current.easing:N==="simple"?p.current.simple:p.current.advanced)},b=(N,M)=>{if(h){const{stiffness:X,damping:F,mass:U,...K}=y;c({...K,[N]:M})}else{const{visualDuration:X,bounce:F,...U}=y;c({...U,[N]:M})}},w=(N,M)=>{const X=[...g.ease];X[N]=M,c({...g,ease:X})};return l.jsx(Fd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(j7,{easing:g}):l.jsx(C2,{spring:y,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(a_,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Ko,{label:"x1",value:g.ease[0],onChange:N=>w(0,N),min:0,max:1,step:.01}),l.jsx(Ko,{label:"y1",value:g.ease[1],onChange:N=>w(1,N),min:-1,max:2,step:.01}),l.jsx(Ko,{label:"x2",value:g.ease[2],onChange:N=>w(2,N),min:0,max:1,step:.01}),l.jsx(Ko,{label:"y2",value:g.ease[3],onChange:N=>w(3,N),min:-1,max:2,step:.01}),l.jsx(Ko,{label:"Duration",value:g.duration,onChange:N=>c({...g,duration:N}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(T7,{ease:g.ease,onChange:N=>c({...g,ease:N})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(Ko,{label:"Duration",value:(S=y.visualDuration)!=null?S:.3,onChange:N=>b("visualDuration",N),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Ko,{label:"Bounce",value:(j=y.bounce)!=null?j:.2,onChange:N=>b("bounce",N),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Ko,{label:"Stiffness",value:(k=y.stiffness)!=null?k:400,onChange:N=>b("stiffness",N),min:1,max:1e3,step:10}),l.jsx(Ko,{label:"Damping",value:(E=y.damping)!=null?E:17,onChange:N=>b("damping",N),min:1,max:100,step:1}),l.jsx(Ko,{label:"Mass",value:(I=y.mass)!=null?I:1,onChange:N=>b("mass",N),min:.1,max:10,step:.1})]})]})})}function Vx(e){return e.map(n=>parseFloat(n.toFixed(2))).join(", ")}function E7(e){const n=e.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function T7({ease:e,onChange:n}){const[i,a]=_.useState(!1),[c,u]=_.useState(""),d=()=>{u(Vx(e)),a(!0)},h=()=>{const y=E7(c);y&&n(y),a(!1)},p=y=>{y.key==="Enter"&&y.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Vx(e),onChange:y=>u(y.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function A7({label:e,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:e}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function N7(e){return e.replace(/\b\w/g,n=>n.toUpperCase())}function D7(e){return e.map(n=>typeof n=="string"?{value:n,label:N7(n)}:n)}function R7({label:e,value:n,options:i,onChange:a}){var j;const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState(null),[g,x]=_.useState(null),b=D7(i),w=b.find(k=>k.value===n),S=_.useCallback(()=>{const k=d.current;if(!k)return;const E=k.getBoundingClientRect(),I=8+b.length*36,N=window.innerHeight-E.bottom-4,M=N<I&&E.top>N;x({top:M?E.top-4:E.bottom+4,left:E.left,width:E.width,above:M})},[b.length]);return _.useEffect(()=>{var E;const k=(E=d.current)==null?void 0:E.closest(".dialkit-root");y(k!=null?k:document.body)},[]),_.useEffect(()=>{c&&S()},[c,S]),_.useEffect(()=>{if(!c)return;const k=E=>{const I=E.target;d.current&&!d.current.contains(I)&&h.current&&!h.current.contains(I)&&u(!1)};return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:e}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(j=w==null?void 0:w.label)!=null?j:n}),l.jsx(ci.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:i_})})]})]}),p&&Al.createPortal(l.jsx(Jd,{children:c&&g&&l.jsx(ci.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:g.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:g.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:g.left,width:g.width,...g.above?{bottom:window.innerHeight-g.top,transformOrigin:"bottom"}:{top:g.top,transformOrigin:"top"}},children:b.map(k=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(k.value===n),onClick:()=>{a(k.value),u(!1)},children:k.label},k.value))})}),p)]})}var B7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function L7({label:e,value:n,onChange:i}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useRef(null);_.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),B7.test(u)?i(u):d(n)}function y(g){g.key==="Enter"?p():g.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:e}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:g=>d(g.target.value),onBlur:p,onKeyDown:y,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var g;return(g=h.current)==null?void 0:g.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?O7(n):n.slice(0,7),onChange:g=>i(g.target.value)})]})]})}function O7(e){return e.length!==4?e:`#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`}function z7({panelId:e,presets:n,activePresetId:i,onAdd:a}){const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState({top:0,left:0,width:0}),g=n.length>0,x=n.find(E=>E.id===i),b=_.useCallback(()=>{var I;if(!g)return;const E=(I=d.current)==null?void 0:I.getBoundingClientRect();E&&y({top:E.bottom+4,left:E.left,width:E.width}),u(!0)},[g]),w=_.useCallback(()=>u(!1),[]),S=_.useCallback(()=>{c?w():b()},[c,b,w]);_.useEffect(()=>{if(!c)return;const E=I=>{var M,X;const N=I.target;(M=d.current)!=null&&M.contains(N)||(X=h.current)!=null&&X.contains(N)||w()};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[c,w]);const j=E=>{E?hn.loadPreset(e,E):hn.clearActivePreset(e),w()},k=(E,I)=>{E.stopPropagation(),hn.deletePreset(e,I)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:S,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!g),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(ci.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:g?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:i_})})]}),Al.createPortal(l.jsx(Jd,{children:c&&l.jsxs(ci.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>j(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(E=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(E.id===i),onClick:()=>j(E.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:E.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:I=>k(I,E.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:y7.map((I,N)=>l.jsx("path",{d:I},N))})})]},E.id))]})}),document.body)]})}function $7({panel:e,defaultOpen:n=!0,inline:i=!1}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useContext(S2);Object.keys(e.shortcuts).length>0;const p=_.useSyncExternalStore(k=>hn.subscribe(e.id,k),()=>hn.getValues(e.id),()=>hn.getValues(e.id)),y=hn.getPresets(e.id),g=hn.getActivePresetId(e.id),x=()=>{const k=y.length+2;hn.savePreset(e.id,`Version ${k}`)},b=()=>{const k=JSON.stringify(p,null,2),E=`Update the useDialKit configuration for "${e.name}" with these values:

\`\`\`json
${k}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(E),c(!0),setTimeout(()=>c(!1),1500)},w=k=>{var I,N,M;const E=p[k.path];switch(k.type){case"slider":return l.jsx(Ko,{label:k.label,value:E,onChange:X=>hn.updateValue(e.id,k.path,X),min:k.min,max:k.max,step:k.step,shortcut:k.shortcut,shortcutActive:h.activePanelId===e.id&&h.activePath===k.path},k.path);case"toggle":return l.jsx(S7,{label:k.label,checked:E,onChange:X=>hn.updateValue(e.id,k.path,X),shortcut:k.shortcut,shortcutActive:h.activePanelId===e.id&&h.activePath===k.path},k.path);case"spring":return l.jsx(k7,{panelId:e.id,path:k.path,label:k.label,spring:E,onChange:X=>hn.updateValue(e.id,k.path,X)},k.path);case"transition":return l.jsx(M7,{panelId:e.id,path:k.path,label:k.label,value:E,onChange:X=>hn.updateValue(e.id,k.path,X)},k.path);case"folder":return l.jsx(Fd,{title:k.label,defaultOpen:(I=k.defaultOpen)!=null?I:!0,children:(N=k.children)==null?void 0:N.map(w)},k.path);case"text":return l.jsx(A7,{label:k.label,value:E,onChange:X=>hn.updateValue(e.id,k.path,X),placeholder:k.placeholder},k.path);case"select":return l.jsx(R7,{label:k.label,value:E,options:(M=k.options)!=null?M:[],onChange:X=>hn.updateValue(e.id,k.path,X)},k.path);case"color":return l.jsx(L7,{label:k.label,value:E,onChange:X=>hn.updateValue(e.id,k.path,X)},k.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>hn.triggerAction(e.id,k.path),children:k.label},k.path);default:return null}},S=()=>e.controls.map(w),j=l.jsxs(l.Fragment,{children:[l.jsx(ci.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:g7.map((k,E)=>l.jsx("path",{d:k},E))})}),l.jsx(z7,{panelId:e.id,presets:y,activePresetId:g,onAdd:x}),l.jsx(ci.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Jd,{initial:!1,mode:"wait",children:a?l.jsx(ci.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:_7})},"check"):l.jsxs(ci.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:Lm.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:Lm.sparkle,fill:"currentColor"}),l.jsx("path",{d:Lm.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Fd,{title:e.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:j,children:S()})})}var I7=typeof process<"u"?!1:!(typeof import.meta<"u");function P7({position:e="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=I7}){if(!c)return null;const[u,d]=_.useState([]),[h,p]=_.useState(!1),y=i==="inline",g=_.useRef(null),[x,b]=_.useState(null),[w,S]=_.useState(e),j=_.useRef(null),k=_.useRef(!1),E=_.useRef(null),I=_.useRef(!1);_.useEffect(()=>(p(!0),d(hn.getPanels()),hn.subscribeGlobal(()=>{d(hn.getPanels())})),[]),_.useEffect(()=>{if(!g.current||y)return;const K=new MutationObserver(()=>{var ye;const de=(ye=g.current)==null?void 0:ye.querySelector(".dialkit-panel-inner");if(!de)return;if(de.getAttribute("data-collapsed")==="true")j.current&&b(j.current);else{if(x){j.current=x;const Le=x.x+21,Ze=window.innerWidth/2;S(Le<Ze?"top-left":"top-right")}else S(e);b(null)}});return K.observe(g.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>K.disconnect()},[y,x,e]);const N=_.useCallback(K=>{var ye;const de=(ye=g.current)==null?void 0:ye.querySelector(".dialkit-panel-inner");if(!de||de.getAttribute("data-collapsed")!=="true")return;const pe=g.current.getBoundingClientRect();E.current={pointerX:K.clientX,pointerY:K.clientY,elX:pe.left,elY:pe.top},I.current=!1,k.current=!0,K.target.setPointerCapture(K.pointerId)},[]),M=_.useCallback(K=>{if(!k.current||!E.current)return;const de=K.clientX-E.current.pointerX,pe=K.clientY-E.current.pointerY;!I.current&&Math.abs(de)+Math.abs(pe)<4||(I.current=!0,b({x:E.current.elX+de,y:E.current.elY+pe}))},[]),X=_.useCallback(K=>{var de;if(k.current&&(k.current=!1,E.current=null,I.current)){K.stopPropagation();const pe=(de=g.current)==null?void 0:de.querySelector(".dialkit-panel-inner");if(pe){const ye=Le=>{Le.stopPropagation()};pe.addEventListener("click",ye,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const F=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,U=l.jsx(p7,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:g,className:"dialkit-panel","data-position":y||x?void 0:w,"data-mode":i,style:F,onPointerDown:y?void 0:N,onPointerMove:y?void 0:M,onPointerUp:y?void 0:X,children:u.map(K=>l.jsx($7,{panel:K,defaultOpen:y||n,inline:y},K.id))})})});return y?U:Al.createPortal(U,document.body)}const H7=()=>(s7("Git Visualizer",{preview:[1,0,1]}),null),Yx="git-visualizer.chrome-ui-hidden",U7=({children:e})=>{const[n,i]=_.useState(!1);return _.useEffect(()=>{i(window.localStorage.getItem(Yx)==="true")},[]),_.useEffect(()=>{const a=c=>{(c.ctrlKey||c.metaKey)&&c.key.toLowerCase()==="d"&&!c.shiftKey&&!c.altKey&&(c.preventDefault(),i(u=>{const d=!u;return window.localStorage.setItem(Yx,String(d)),d}))};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[]),l.jsxs(l.Fragment,{children:[e,l.jsx(H7,{}),!n&&l.jsxs(l.Fragment,{children:[l.jsx(P7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(e7,{})]})]})};document.addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="r"&&(e.preventDefault(),location.reload())});Qv.createRoot(document.getElementById("root")).render(l.jsx(U7,{children:l.jsx(z3,{})}));

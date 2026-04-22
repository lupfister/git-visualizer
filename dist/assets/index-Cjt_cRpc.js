(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function mx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mh={exports:{}},Hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function ov(){if(W0)return Hl;W0=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var m in c)m!=="key"&&(u[m]=c[m])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return Hl.Fragment=n,Hl.jsx=i,Hl.jsxs=i,Hl}var Y0;function iv(){return Y0||(Y0=1,Mh.exports=ov()),Mh.exports}var l=iv(),Th={exports:{}},Vl={},Eh={exports:{}},Dh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function av(){return F0||(F0=1,(function(t){function n(P,he){var Z=P.length;P.push(he);e:for(;0<Z;){var ge=Z-1>>>1,Be=P[ge];if(0<c(Be,he))P[ge]=he,P[Z]=Be,Z=ge;else break e}}function i(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var he=P[0],Z=P.pop();if(Z!==he){P[0]=Z;e:for(var ge=0,Be=P.length,z=Be>>>1;ge<z;){var oe=2*(ge+1)-1,H=P[oe],K=oe+1,Se=P[K];if(0>c(H,Z))K<Be&&0>c(Se,H)?(P[ge]=Se,P[K]=Z,ge=K):(P[ge]=H,P[oe]=Z,ge=oe);else if(K<Be&&0>c(Se,Z))P[ge]=Se,P[K]=Z,ge=K;else break e}}return he}function c(P,he){var Z=P.sortIndex-he.sortIndex;return Z!==0?Z:P.id-he.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,m=d.now();t.unstable_now=function(){return d.now()-m}}var p=[],_=[],g=1,x=null,v=3,w=!1,S=!1,C=!1,k=!1,M=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function E(P){for(var he=i(_);he!==null;){if(he.callback===null)a(_);else if(he.startTime<=P)a(_),he.sortIndex=he.expirationTime,n(p,he);else break;he=i(_)}}function $(P){if(C=!1,E(P),!S)if(i(p)!==null)S=!0,q||(q=!0,pe());else{var he=i(_);he!==null&&Ee($,he.startTime-P)}}var q=!1,R=-1,I=5,V=-1;function J(){return k?!0:!(t.unstable_now()-V<I)}function te(){if(k=!1,q){var P=t.unstable_now();V=P;var he=!0;try{e:{S=!1,C&&(C=!1,L(R),R=-1),w=!0;var Z=v;try{t:{for(E(P),x=i(p);x!==null&&!(x.expirationTime>P&&J());){var ge=x.callback;if(typeof ge=="function"){x.callback=null,v=x.priorityLevel;var Be=ge(x.expirationTime<=P);if(P=t.unstable_now(),typeof Be=="function"){x.callback=Be,E(P),he=!0;break t}x===i(p)&&a(p),E(P)}else a(p);x=i(p)}if(x!==null)he=!0;else{var z=i(_);z!==null&&Ee($,z.startTime-P),he=!1}}break e}finally{x=null,v=Z,w=!1}he=void 0}}finally{he?pe():q=!1}}}var pe;if(typeof D=="function")pe=function(){D(te)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,ke=Te.port2;Te.port1.onmessage=te,pe=function(){ke.postMessage(null)}}else pe=function(){M(te,0)};function Ee(P,he){R=M(function(){P(t.unstable_now())},he)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_next=function(P){switch(v){case 1:case 2:case 3:var he=3;break;default:he=v}var Z=v;v=he;try{return P()}finally{v=Z}},t.unstable_requestPaint=function(){k=!0},t.unstable_runWithPriority=function(P,he){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Z=v;v=P;try{return he()}finally{v=Z}},t.unstable_scheduleCallback=function(P,he,Z){var ge=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ge+Z:ge):Z=ge,P){case 1:var Be=-1;break;case 2:Be=250;break;case 5:Be=1073741823;break;case 4:Be=1e4;break;default:Be=5e3}return Be=Z+Be,P={id:g++,callback:he,priorityLevel:P,startTime:Z,expirationTime:Be,sortIndex:-1},Z>ge?(P.sortIndex=Z,n(_,P),i(p)===null&&P===i(_)&&(C?(L(R),R=-1):C=!0,Ee($,Z-ge))):(P.sortIndex=Be,n(p,P),S||w||(S=!0,q||(q=!0,pe()))),P},t.unstable_shouldYield=J,t.unstable_wrapCallback=function(P){var he=v;return function(){var Z=v;v=he;try{return P.apply(this,arguments)}finally{v=Z}}}})(Dh)),Dh}var X0;function rv(){return X0||(X0=1,Eh.exports=av()),Eh.exports}var Ah={exports:{}},sn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function lv(){if(q0)return sn;q0=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),v=Symbol.iterator;function w(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,k={};function M(z,oe,H){this.props=z,this.context=oe,this.refs=k,this.updater=H||S}M.prototype.isReactComponent={},M.prototype.setState=function(z,oe){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,oe,"setState")},M.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function L(){}L.prototype=M.prototype;function D(z,oe,H){this.props=z,this.context=oe,this.refs=k,this.updater=H||S}var E=D.prototype=new L;E.constructor=D,C(E,M.prototype),E.isPureReactComponent=!0;var $=Array.isArray;function q(){}var R={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function V(z,oe,H){var K=H.ref;return{$$typeof:t,type:z,key:oe,ref:K!==void 0?K:null,props:H}}function J(z,oe){return V(z.type,oe,z.props)}function te(z){return typeof z=="object"&&z!==null&&z.$$typeof===t}function pe(z){var oe={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(H){return oe[H]})}var Te=/\/+/g;function ke(z,oe){return typeof z=="object"&&z!==null&&z.key!=null?pe(""+z.key):oe.toString(36)}function Ee(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(q,q):(z.status="pending",z.then(function(oe){z.status==="pending"&&(z.status="fulfilled",z.value=oe)},function(oe){z.status==="pending"&&(z.status="rejected",z.reason=oe)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function P(z,oe,H,K,Se){var $e=typeof z;($e==="undefined"||$e==="boolean")&&(z=null);var Xe=!1;if(z===null)Xe=!0;else switch($e){case"bigint":case"string":case"number":Xe=!0;break;case"object":switch(z.$$typeof){case t:case n:Xe=!0;break;case g:return Xe=z._init,P(Xe(z._payload),oe,H,K,Se)}}if(Xe)return Se=Se(z),Xe=K===""?"."+ke(z,0):K,$(Se)?(H="",Xe!=null&&(H=Xe.replace(Te,"$&/")+"/"),P(Se,oe,H,"",function(Gt){return Gt})):Se!=null&&(te(Se)&&(Se=J(Se,H+(Se.key==null||z&&z.key===Se.key?"":(""+Se.key).replace(Te,"$&/")+"/")+Xe)),oe.push(Se)),1;Xe=0;var Ze=K===""?".":K+":";if($(z))for(var st=0;st<z.length;st++)K=z[st],$e=Ze+ke(K,st),Xe+=P(K,oe,H,$e,Se);else if(st=w(z),typeof st=="function")for(z=st.call(z),st=0;!(K=z.next()).done;)K=K.value,$e=Ze+ke(K,st++),Xe+=P(K,oe,H,$e,Se);else if($e==="object"){if(typeof z.then=="function")return P(Ee(z),oe,H,K,Se);throw oe=String(z),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.")}return Xe}function he(z,oe,H){if(z==null)return z;var K=[],Se=0;return P(z,K,"","",function($e){return oe.call(H,$e,Se++)}),K}function Z(z){if(z._status===-1){var oe=z._result;oe=oe(),oe.then(function(H){(z._status===0||z._status===-1)&&(z._status=1,z._result=H)},function(H){(z._status===0||z._status===-1)&&(z._status=2,z._result=H)}),z._status===-1&&(z._status=0,z._result=oe)}if(z._status===1)return z._result.default;throw z._result}var ge=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var oe=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(oe))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Be={map:he,forEach:function(z,oe,H){he(z,function(){oe.apply(this,arguments)},H)},count:function(z){var oe=0;return he(z,function(){oe++}),oe},toArray:function(z){return he(z,function(oe){return oe})||[]},only:function(z){if(!te(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return sn.Activity=x,sn.Children=Be,sn.Component=M,sn.Fragment=i,sn.Profiler=c,sn.PureComponent=D,sn.StrictMode=a,sn.Suspense=p,sn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,sn.__COMPILER_RUNTIME={__proto__:null,c:function(z){return R.H.useMemoCache(z)}},sn.cache=function(z){return function(){return z.apply(null,arguments)}},sn.cacheSignal=function(){return null},sn.cloneElement=function(z,oe,H){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var K=C({},z.props),Se=z.key;if(oe!=null)for($e in oe.key!==void 0&&(Se=""+oe.key),oe)!I.call(oe,$e)||$e==="key"||$e==="__self"||$e==="__source"||$e==="ref"&&oe.ref===void 0||(K[$e]=oe[$e]);var $e=arguments.length-2;if($e===1)K.children=H;else if(1<$e){for(var Xe=Array($e),Ze=0;Ze<$e;Ze++)Xe[Ze]=arguments[Ze+2];K.children=Xe}return V(z.type,Se,K)},sn.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:u,_context:z},z},sn.createElement=function(z,oe,H){var K,Se={},$e=null;if(oe!=null)for(K in oe.key!==void 0&&($e=""+oe.key),oe)I.call(oe,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(Se[K]=oe[K]);var Xe=arguments.length-2;if(Xe===1)Se.children=H;else if(1<Xe){for(var Ze=Array(Xe),st=0;st<Xe;st++)Ze[st]=arguments[st+2];Se.children=Ze}if(z&&z.defaultProps)for(K in Xe=z.defaultProps,Xe)Se[K]===void 0&&(Se[K]=Xe[K]);return V(z,$e,Se)},sn.createRef=function(){return{current:null}},sn.forwardRef=function(z){return{$$typeof:m,render:z}},sn.isValidElement=te,sn.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:Z}},sn.memo=function(z,oe){return{$$typeof:_,type:z,compare:oe===void 0?null:oe}},sn.startTransition=function(z){var oe=R.T,H={};R.T=H;try{var K=z(),Se=R.S;Se!==null&&Se(H,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(q,ge)}catch($e){ge($e)}finally{oe!==null&&H.types!==null&&(oe.types=H.types),R.T=oe}},sn.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},sn.use=function(z){return R.H.use(z)},sn.useActionState=function(z,oe,H){return R.H.useActionState(z,oe,H)},sn.useCallback=function(z,oe){return R.H.useCallback(z,oe)},sn.useContext=function(z){return R.H.useContext(z)},sn.useDebugValue=function(){},sn.useDeferredValue=function(z,oe){return R.H.useDeferredValue(z,oe)},sn.useEffect=function(z,oe){return R.H.useEffect(z,oe)},sn.useEffectEvent=function(z){return R.H.useEffectEvent(z)},sn.useId=function(){return R.H.useId()},sn.useImperativeHandle=function(z,oe,H){return R.H.useImperativeHandle(z,oe,H)},sn.useInsertionEffect=function(z,oe){return R.H.useInsertionEffect(z,oe)},sn.useLayoutEffect=function(z,oe){return R.H.useLayoutEffect(z,oe)},sn.useMemo=function(z,oe){return R.H.useMemo(z,oe)},sn.useOptimistic=function(z,oe){return R.H.useOptimistic(z,oe)},sn.useReducer=function(z,oe,H){return R.H.useReducer(z,oe,H)},sn.useRef=function(z){return R.H.useRef(z)},sn.useState=function(z){return R.H.useState(z)},sn.useSyncExternalStore=function(z,oe,H){return R.H.useSyncExternalStore(z,oe,H)},sn.useTransition=function(){return R.H.useTransition()},sn.version="19.2.4",sn}var G0;function ep(){return G0||(G0=1,Ah.exports=lv()),Ah.exports}var Rh={exports:{}},co={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function cv(){if(K0)return co;K0=1;var t=ep();function n(p){var _="https://react.dev/errors/"+p;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)_+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,_,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:_,implementation:g}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,_){if(p==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return co.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,co.createPortal=function(p,_){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(n(299));return u(p,_,null,g)},co.flushSync=function(p){var _=d.T,g=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=_,a.p=g,a.d.f()}},co.preconnect=function(p,_){typeof p=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,a.d.C(p,_))},co.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},co.preinit=function(p,_){if(typeof p=="string"&&_&&typeof _.as=="string"){var g=_.as,x=m(g,_.crossOrigin),v=typeof _.integrity=="string"?_.integrity:void 0,w=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;g==="style"?a.d.S(p,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:w}):g==="script"&&a.d.X(p,{crossOrigin:x,integrity:v,fetchPriority:w,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},co.preinitModule=function(p,_){if(typeof p=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var g=m(_.as,_.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&a.d.M(p)},co.preload=function(p,_){if(typeof p=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var g=_.as,x=m(g,_.crossOrigin);a.d.L(p,g,{crossOrigin:x,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},co.preloadModule=function(p,_){if(typeof p=="string")if(_){var g=m(_.as,_.crossOrigin);a.d.m(p,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:g,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else a.d.m(p)},co.requestFormReset=function(p){a.d.r(p)},co.unstable_batchedUpdates=function(p,_){return p(_)},co.useFormState=function(p,_,g){return d.H.useFormState(p,_,g)},co.useFormStatus=function(){return d.H.useHostTransitionStatus()},co.version="19.2.4",co}var Q0;function px(){if(Q0)return Rh.exports;Q0=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Rh.exports=cv(),Rh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function uv(){if(Z0)return Vl;Z0=1;var t=rv(),n=ep(),i=px();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function m(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function _(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var h=f.alternate;if(h===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===o)return p(f),e;if(h===r)return p(f),s;h=h.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=h;else{for(var b=!1,j=f.child;j;){if(j===o){b=!0,o=f,r=h;break}if(j===r){b=!0,r=f,o=h;break}j=j.sibling}if(!b){for(j=h.child;j;){if(j===o){b=!0,o=h,r=f;break}if(j===r){b=!0,r=h,o=f;break}j=j.sibling}if(!b)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function g(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=g(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,v=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),D=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),V=Symbol.for("react.activity"),J=Symbol.for("react.memo_cache_sentinel"),te=Symbol.iterator;function pe(e){return e===null||typeof e!="object"?null:(e=te&&e[te]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Symbol.for("react.client.reference");function ke(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case M:return"Profiler";case k:return"StrictMode";case $:return"Suspense";case q:return"SuspenseList";case V:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case D:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case E:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case R:return s=e.displayName||null,s!==null?s:ke(e.type)||"Memo";case I:s=e._payload,e=e._init;try{return ke(e(s))}catch{}}return null}var Ee=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},ge=[],Be=-1;function z(e){return{current:e}}function oe(e){0>Be||(e.current=ge[Be],ge[Be]=null,Be--)}function H(e,s){Be++,ge[Be]=e.current,e.current=s}var K=z(null),Se=z(null),$e=z(null),Xe=z(null);function Ze(e,s){switch(H($e,s),H(Se,e),H(K,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?h0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=h0(s),e=m0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}oe(K),H(K,e)}function st(){oe(K),oe(Se),oe($e)}function Gt(e){e.memoizedState!==null&&H(Xe,e);var s=K.current,o=m0(s,e.type);s!==o&&(H(Se,e),H(K,o))}function rn(e){Se.current===e&&(oe(K),oe(Se)),Xe.current===e&&(oe(Xe),zl._currentValue=Z)}var Ot,yn;function an(e){if(Ot===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Ot=s&&s[1]||"",yn=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ot+e+yn}var Sn=!1;function hn(e,s){if(!e||Sn)return"";Sn=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var Ne=function(){throw Error()};if(Object.defineProperty(Ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ne,[])}catch(me){var ce=me}Reflect.construct(e,[],Ne)}else{try{Ne.call()}catch(me){ce=me}e.call(Ne.prototype)}}else{try{throw Error()}catch(me){ce=me}(Ne=e())&&typeof Ne.catch=="function"&&Ne.catch(function(){})}}catch(me){if(me&&ce&&typeof me.stack=="string")return[me.stack,ce.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=r.DetermineComponentFrameRoot(),b=h[0],j=h[1];if(b&&j){var Y=b.split(`
`),re=j.split(`
`);for(f=r=0;r<Y.length&&!Y[r].includes("DetermineComponentFrameRoot");)r++;for(;f<re.length&&!re[f].includes("DetermineComponentFrameRoot");)f++;if(r===Y.length||f===re.length)for(r=Y.length-1,f=re.length-1;1<=r&&0<=f&&Y[r]!==re[f];)f--;for(;1<=r&&0<=f;r--,f--)if(Y[r]!==re[f]){if(r!==1||f!==1)do if(r--,f--,0>f||Y[r]!==re[f]){var ve=`
`+Y[r].replace(" at new "," at ");return e.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",e.displayName)),ve}while(1<=r&&0<=f);break}}}finally{Sn=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?an(o):""}function mn(e,s){switch(e.tag){case 26:case 27:case 5:return an(e.type);case 16:return an("Lazy");case 13:return e.child!==s&&s!==null?an("Suspense Fallback"):an("Suspense");case 19:return an("SuspenseList");case 0:case 15:return hn(e.type,!1);case 11:return hn(e.type.render,!1);case 1:return hn(e.type,!0);case 31:return an("Activity");default:return""}}function X(e){try{var s="",o=null;do s+=mn(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Re=Object.prototype.hasOwnProperty,ot=t.unstable_scheduleCallback,Je=t.unstable_cancelCallback,it=t.unstable_shouldYield,Ae=t.unstable_requestPaint,ut=t.unstable_now,Ct=t.unstable_getCurrentPriorityLevel,$t=t.unstable_ImmediatePriority,Ht=t.unstable_UserBlockingPriority,qe=t.unstable_NormalPriority,B=t.unstable_LowPriority,G=t.unstable_IdlePriority,ue=t.log,be=t.unstable_setDisableYieldValue,Ye=null,He=null;function ye(e){if(typeof ue=="function"&&be(e),He&&typeof He.setStrictMode=="function")try{He.setStrictMode(Ye,e)}catch{}}var _t=Math.clz32?Math.clz32:rt,gt=Math.log,Xt=Math.LN2;function rt(e){return e>>>=0,e===0?32:31-(gt(e)/Xt|0)|0}var Ve=256,Vt=262144,bt=4194304;function Nt(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nt(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,h=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var j=r&134217727;return j!==0?(r=j&~h,r!==0?f=Nt(r):(b&=j,b!==0?f=Nt(b):o||(o=j&~e,o!==0&&(f=Nt(o))))):(j=r&~h,j!==0?f=Nt(j):b!==0?f=Nt(b):o||(o=r&~e,o!==0&&(f=Nt(o)))),f===0?0:s!==0&&s!==f&&(s&h)===0&&(h=f&-f,o=s&-s,h>=o||h===32&&(o&4194048)!==0)?s:f}function qt(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function Yt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dt(){var e=bt;return bt<<=1,(bt&62914560)===0&&(bt=4194304),e}function En(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function yt(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Zt(e,s,o,r,f,h){var b=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var j=e.entanglements,Y=e.expirationTimes,re=e.hiddenUpdates;for(o=b&~o;0<o;){var ve=31-_t(o),Ne=1<<ve;j[ve]=0,Y[ve]=-1;var ce=re[ve];if(ce!==null)for(re[ve]=null,ve=0;ve<ce.length;ve++){var me=ce[ve];me!==null&&(me.lane&=-536870913)}o&=~Ne}r!==0&&xn(e,r,0),h!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=h&~(b&~s))}function xn(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-_t(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function is(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-_t(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function Hn(e,s){var o=s&-s;return o=(o&42)!==0?1:Ds(o),(o&(e.suspendedLanes|s))!==0?0:o}function Ds(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vn(){var e=he.p;return e!==0?e:(e=window.event,e===void 0?32:z0(e.type))}function dn(e,s){var o=he.p;try{return he.p=e,s()}finally{he.p=o}}var Ln=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Ln,Xn="__reactProps$"+Ln,Pe="__reactContainer$"+Ln,_s="__reactEvents$"+Ln,fo="__reactListeners$"+Ln,wo="__reactHandles$"+Ln,Us="__reactResources$"+Ln,to="__reactMarker$"+Ln;function Ao(e){delete e[Ut],delete e[Xn],delete e[_s],delete e[fo],delete e[wo]}function no(e){var s=e[Ut];if(s)return s;for(var o=e.parentNode;o;){if(s=o[Pe]||o[Ut]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=v0(e);e!==null;){if(o=e[Ut])return o;e=v0(e)}return s}e=o,o=e.parentNode}return null}function so(e){if(e=e[Ut]||e[Pe]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function ho(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function Ws(e){var s=e[Us];return s||(s=e[Us]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function qn(e){e[to]=!0}var Ro=new Set,mo={};function Bn(e,s){ls(e,s),ls(e+"Capture",s)}function ls(e,s){for(mo[e]=s,e=0;e<s.length;e++)Ro.add(s[e])}var Xs=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),No={},oo={};function io(e){return Re.call(oo,e)?!0:Re.call(No,e)?!1:Xs.test(e)?oo[e]=!0:(No[e]=!0,!1)}function qs(e,s,o){if(io(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function gs(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function As(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function Cn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ri(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function xi(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,h=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(b){o=""+b,h.call(this,b)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(b){o=""+b},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function Lo(e){if(!e._valueTracker){var s=ri(e)?"checked":"value";e._valueTracker=xi(e,s,""+e[s])}}function bi(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=ri(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function Ys(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Xo=/[\n"\\]/g;function bs(e){return e.replace(Xo,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function se(e,s,o,r,f,h,b,j){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),s!=null?b==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+Cn(s)):e.value!==""+Cn(s)&&(e.value=""+Cn(s)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),s!=null?Me(e,b,Cn(s)):o!=null?Me(e,b,Cn(o)):r!=null&&e.removeAttribute("value"),f==null&&h!=null&&(e.defaultChecked=!!h),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),j!=null&&typeof j!="function"&&typeof j!="symbol"&&typeof j!="boolean"?e.name=""+Cn(j):e.removeAttribute("name")}function ae(e,s,o,r,f,h,b,j){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),s!=null||o!=null){if(!(h!=="submit"&&h!=="reset"||s!=null)){Lo(e);return}o=o!=null?""+Cn(o):"",s=s!=null?""+Cn(s):o,j||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=j?e.checked:!!r,e.defaultChecked=!!r,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),Lo(e)}function Me(e,s,o){s==="number"&&Ys(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function Ce(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+Cn(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function Ge(e,s,o){if(s!=null&&(s=""+Cn(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+Cn(o):""}function kt(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(Ee(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=Cn(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),Lo(e)}function ct(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var N=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function U(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||N.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function _e(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&U(e,f,r)}else for(var h in s)s.hasOwnProperty(h)&&U(e,h,s[h])}function xe(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oe=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ke=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Et(e){return Ke.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Kt(){}var ze=null;function We(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tt=null,wt=null;function zt(e){var s=so(e);if(s&&(e=s.stateNode)){var o=e[Xn]||null;e:switch(e=s.stateNode,s.type){case"input":if(se(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+bs(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[Xn]||null;if(!f)throw Error(a(90));se(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&bi(r)}break e;case"textarea":Ge(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Ce(e,!!o.multiple,s,!1)}}}var Qe=!1;function At(e,s,o){if(Qe)return e(s,o);Qe=!0;try{var r=e(s);return r}finally{if(Qe=!1,(tt!==null||wt!==null)&&(uu(),tt&&(s=tt,e=wt,wt=tt=null,zt(s),e)))for(s=0;s<e.length;s++)zt(e[s])}}function ht(e,s){var o=e.stateNode;if(o===null)return null;var r=o[Xn]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dn=!1;if(Jt)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){Dn=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{Dn=!1}var Tt=null,un=null,ts=null;function Un(){if(ts)return ts;var e,s=un,o=s.length,r,f="value"in Tt?Tt.value:Tt.textContent,h=f.length;for(e=0;e<o&&s[e]===f[e];e++);var b=o-e;for(r=1;r<=b&&s[o-r]===f[h-r];r++);return ts=f.slice(e,1<r?1-r:void 0)}function as(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function js(){return!0}function po(){return!1}function On(e){function s(o,r,f,h,b){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=h,this.target=b,this.currentTarget=null;for(var j in e)e.hasOwnProperty(j)&&(o=e[j],this[j]=o?o(h):h[j]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?js:po,this.isPropagationStopped=po,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=js)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=js)},persist:function(){},isPersistent:js}),s}var en={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zn=On(en),$s=x({},en,{view:0,detail:0}),ao=On($s),li,_o,vs,Bo=x({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lt,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vs&&(vs&&e.type==="mousemove"?(li=e.screenX-vs.screenX,_o=e.screenY-vs.screenY):_o=li=0,vs=e),li)},movementY:function(e){return"movementY"in e?e.movementY:_o}}),Oo=On(Bo),An=x({},Bo,{dataTransfer:0}),ys=On(An),Gs=x({},$s,{relatedTarget:0}),ro=On(Gs),So=x({},en,{animationName:0,elapsedTime:0,pseudoElement:0}),sa=On(So),za=x({},en,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$a=On(za),vi=x({},en,{data:0}),le=On(vi),lt={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dt={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pt(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=dt[e])?!!s[e]:!1}function Lt(){return Pt}var Mn=x({},$s,{key:function(e){if(e.key){var s=lt[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=as(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rt[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lt,charCode:function(e){return e.type==="keypress"?as(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?as(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bn=On(Mn),ws=x({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Is=On(ws),wi=x({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lt}),cr=On(wi),qo=x({},en,{propertyName:0,elapsedTime:0,pseudoElement:0}),zo=On(qo),Ld=x({},Bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sl=On(Ld),ol=x({},en,{newState:0,oldState:0}),ur=On(ol),Bd=[9,13,27,32],il=Jt&&"CompositionEvent"in window,$o=null;Jt&&"documentMode"in document&&($o=document.documentMode);var al=Jt&&"TextEvent"in window&&!$o,dr=Jt&&(!il||$o&&8<$o&&11>=$o),Sc=" ",oa=!1;function zi(e,s){switch(e){case"keyup":return Bd.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $i=!1;function Cc(e,s){switch(e){case"compositionend":return kc(s);case"keypress":return s.which!==32?null:(oa=!0,Sc);case"textInput":return e=s.data,e===Sc&&oa?null:e;default:return null}}function jc(e,s){if($i)return e==="compositionend"||!il&&zi(e,s)?(e=Un(),ts=un=Tt=null,$i=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return dr&&s.locale!=="ko"?null:s.data;default:return null}}var Mc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rl(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!Mc[e.type]:s==="textarea"}function ll(e,s,o,r){tt?wt?wt.push(r):wt=[r]:tt=r,s=gu(s,"onChange"),0<s.length&&(o=new zn("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var ia=null,aa=null;function Tc(e){r0(e,0)}function T(e){var s=ho(e);if(bi(s))return e}function O(e,s){if(e==="change")return s}var F=!1;if(Jt){var W;if(Jt){var ee="oninput"in document;if(!ee){var de=document.createElement("div");de.setAttribute("oninput","return;"),ee=typeof de.oninput=="function"}W=ee}else W=!1;F=W&&(!document.documentMode||9<document.documentMode)}function Ue(){ia&&(ia.detachEvent("onpropertychange",Fe),aa=ia=null)}function Fe(e){if(e.propertyName==="value"&&T(aa)){var s=[];ll(s,aa,e,We(e)),At(Tc,s)}}function et(e,s,o){e==="focusin"?(Ue(),ia=s,aa=o,ia.attachEvent("onpropertychange",Fe)):e==="focusout"&&Ue()}function mt(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return T(aa)}function Mt(e,s){if(e==="click")return T(s)}function tn(e,s){if(e==="input"||e==="change")return T(s)}function nn(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var pt=typeof Object.is=="function"?Object.is:nn;function at(e,s){if(pt(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!Re.call(s,f)||!pt(e[f],s[f]))return!1}return!0}function cs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function us(e,s){var o=cs(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=cs(o)}}function ds(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?ds(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function jn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=Ys(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=Ys(e.document)}return s}function Pn(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var Ft=Jt&&"documentMode"in document&&11>=document.documentMode,Qt=null,fs=null,Tn=null,Ps=!1;function lo(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ps||Qt==null||Qt!==Ys(r)||(r=Qt,"selectionStart"in r&&Pn(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tn&&at(Tn,r)||(Tn=r,r=gu(fs,"onSelect"),0<r.length&&(s=new zn("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=Qt)))}function ns(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var Go={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionrun:ns("Transition","TransitionRun"),transitionstart:ns("Transition","TransitionStart"),transitioncancel:ns("Transition","TransitionCancel"),transitionend:ns("Transition","TransitionEnd")},ci={},ui={};Jt&&(ui=document.createElement("div").style,"AnimationEvent"in window||(delete Go.animationend.animation,delete Go.animationiteration.animation,delete Go.animationstart.animation),"TransitionEvent"in window||delete Go.transitionend.transition);function Gn(e){if(ci[e])return ci[e];if(!Go[e])return e;var s=Go[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in ui)return ci[e]=s[o];return e}var di=Gn("animationend"),Si=Gn("animationiteration"),Ec=Gn("animationstart"),Od=Gn("transitionrun"),zd=Gn("transitionstart"),$d=Gn("transitioncancel"),Pp=Gn("transitionend"),Hp=new Map,Id="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Id.push("scrollEnd");function fi(e,s){Hp.set(e,s),Bn(s,[e])}var Dc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ko=[],fr=0,Pd=0;function Ac(){for(var e=fr,s=Pd=fr=0;s<e;){var o=Ko[s];Ko[s++]=null;var r=Ko[s];Ko[s++]=null;var f=Ko[s];Ko[s++]=null;var h=Ko[s];if(Ko[s++]=null,r!==null&&f!==null){var b=r.pending;b===null?f.next=f:(f.next=b.next,b.next=f),r.pending=f}h!==0&&Vp(o,f,h)}}function Rc(e,s,o,r){Ko[fr++]=e,Ko[fr++]=s,Ko[fr++]=o,Ko[fr++]=r,Pd|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Hd(e,s,o,r){return Rc(e,s,o,r),Nc(e)}function Ia(e,s){return Rc(e,null,null,s),Nc(e)}function Vp(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,h=e.return;h!==null;)h.childLanes|=o,r=h.alternate,r!==null&&(r.childLanes|=o),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(f=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,f&&s!==null&&(f=31-_t(o),e=h.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),h):null}function Nc(e){if(50<Dl)throw Dl=0,Qf=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var hr={};function H5(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Io(e,s,o,r){return new H5(e,s,o,r)}function Vd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ii(e,s){var o=e.alternate;return o===null?(o=Io(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function Up(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Lc(e,s,o,r,f,h){var b=0;if(r=e,typeof e=="function")Vd(e)&&(b=1);else if(typeof e=="string")b=F2(e,o,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case V:return e=Io(31,o,s,f),e.elementType=V,e.lanes=h,e;case C:return Pa(o.children,f,h,s);case k:b=8,f|=24;break;case M:return e=Io(12,o,s,f|2),e.elementType=M,e.lanes=h,e;case $:return e=Io(13,o,s,f),e.elementType=$,e.lanes=h,e;case q:return e=Io(19,o,s,f),e.elementType=q,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:b=10;break e;case L:b=9;break e;case E:b=11;break e;case R:b=14;break e;case I:b=16,r=null;break e}b=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=Io(b,o,s,f),s.elementType=e,s.type=r,s.lanes=h,s}function Pa(e,s,o,r){return e=Io(7,e,r,s),e.lanes=o,e}function Ud(e,s,o){return e=Io(6,e,null,s),e.lanes=o,e}function Wp(e){var s=Io(18,null,null,0);return s.stateNode=e,s}function Wd(e,s,o){return s=Io(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var Yp=new WeakMap;function Qo(e,s){if(typeof e=="object"&&e!==null){var o=Yp.get(e);return o!==void 0?o:(s={value:e,source:s,stack:X(s)},Yp.set(e,s),s)}return{value:e,source:s,stack:X(s)}}var mr=[],pr=0,Bc=null,cl=0,Zo=[],Jo=0,ra=null,ki=1,Ci="";function Pi(e,s){mr[pr++]=cl,mr[pr++]=Bc,Bc=e,cl=s}function Fp(e,s,o){Zo[Jo++]=ki,Zo[Jo++]=Ci,Zo[Jo++]=ra,ra=e;var r=ki;e=Ci;var f=32-_t(r)-1;r&=~(1<<f),o+=1;var h=32-_t(s)+f;if(30<h){var b=f-f%5;h=(r&(1<<b)-1).toString(32),r>>=b,f-=b,ki=1<<32-_t(s)+f|o<<f|r,Ci=h+e}else ki=1<<h|o<<f|r,Ci=e}function Yd(e){e.return!==null&&(Pi(e,1),Fp(e,1,0))}function Fd(e){for(;e===Bc;)Bc=mr[--pr],mr[pr]=null,cl=mr[--pr],mr[pr]=null;for(;e===ra;)ra=Zo[--Jo],Zo[Jo]=null,Ci=Zo[--Jo],Zo[Jo]=null,ki=Zo[--Jo],Zo[Jo]=null}function Xp(e,s){Zo[Jo++]=ki,Zo[Jo++]=Ci,Zo[Jo++]=ra,ki=s.id,Ci=s.overflow,ra=e}var Ks=null,hs=null,kn=!1,la=null,ei=!1,Xd=Error(a(519));function ca(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ul(Qo(s,e)),Xd}function qp(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[Ut]=e,s[Xn]=r,o){case"dialog":gn("cancel",s),gn("close",s);break;case"iframe":case"object":case"embed":gn("load",s);break;case"video":case"audio":for(o=0;o<Rl.length;o++)gn(Rl[o],s);break;case"source":gn("error",s);break;case"img":case"image":case"link":gn("error",s),gn("load",s);break;case"details":gn("toggle",s);break;case"input":gn("invalid",s),ae(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":gn("invalid",s);break;case"textarea":gn("invalid",s),kt(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||d0(s.textContent,o)?(r.popover!=null&&(gn("beforetoggle",s),gn("toggle",s)),r.onScroll!=null&&gn("scroll",s),r.onScrollEnd!=null&&gn("scrollend",s),r.onClick!=null&&(s.onclick=Kt),s=!0):s=!1,s||ca(e,!0)}function Gp(e){for(Ks=e.return;Ks;)switch(Ks.tag){case 5:case 31:case 13:ei=!1;return;case 27:case 3:ei=!0;return;default:Ks=Ks.return}}function _r(e){if(e!==Ks)return!1;if(!kn)return Gp(e),kn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||fh(e.type,e.memoizedProps)),o=!o),o&&hs&&ca(e),Gp(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));hs=b0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));hs=b0(e)}else s===27?(s=hs,Sa(e.type)?(e=gh,gh=null,hs=e):hs=s):hs=Ks?ni(e.stateNode.nextSibling):null;return!0}function Ha(){hs=Ks=null,kn=!1}function qd(){var e=la;return e!==null&&(Mo===null?Mo=e:Mo.push.apply(Mo,e),la=null),e}function ul(e){la===null?la=[e]:la.push(e)}var Gd=z(null),Va=null,Hi=null;function ua(e,s,o){H(Gd,s._currentValue),s._currentValue=o}function Vi(e){e._currentValue=Gd.current,oe(Gd)}function Kd(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function Qd(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var h=f.dependencies;if(h!==null){var b=f.child;h=h.firstContext;e:for(;h!==null;){var j=h;h=f;for(var Y=0;Y<s.length;Y++)if(j.context===s[Y]){h.lanes|=o,j=h.alternate,j!==null&&(j.lanes|=o),Kd(h.return,o,e),r||(b=null);break e}h=j.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(a(341));b.lanes|=o,h=b.alternate,h!==null&&(h.lanes|=o),Kd(b,o,e),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===e){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function gr(e,s,o,r){e=null;for(var f=s,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var j=f.type;pt(f.pendingProps.value,b.value)||(e!==null?e.push(j):e=[j])}}else if(f===Xe.current){if(b=f.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(zl):e=[zl])}f=f.return}e!==null&&Qd(s,e,o,r),s.flags|=262144}function Oc(e){for(e=e.firstContext;e!==null;){if(!pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ua(e){Va=e,Hi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qs(e){return Kp(Va,e)}function zc(e,s){return Va===null&&Ua(e),Kp(e,s)}function Kp(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Hi===null){if(e===null)throw Error(a(308));Hi=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else Hi=Hi.next=s;return o}var V5=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},U5=t.unstable_scheduleCallback,W5=t.unstable_NormalPriority,Rs={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zd(){return{controller:new V5,data:new Map,refCount:0}}function dl(e){e.refCount--,e.refCount===0&&U5(W5,function(){e.controller.abort()})}var fl=null,Jd=0,yr=0,xr=null;function Y5(e,s){if(fl===null){var o=fl=[];Jd=0,yr=sh(),xr={status:"pending",value:void 0,then:function(r){o.push(r)}}}return Jd++,s.then(Qp,Qp),s}function Qp(){if(--Jd===0&&fl!==null){xr!==null&&(xr.status="fulfilled");var e=fl;fl=null,yr=0,xr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function F5(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var Zp=P.S;P.S=function(e,s){Bg=ut(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&Y5(e,s),Zp!==null&&Zp(e,s)};var Wa=z(null);function ef(){var e=Wa.current;return e!==null?e:ss.pooledCache}function $c(e,s){s===null?H(Wa,Wa.current):H(Wa,s.pool)}function Jp(){var e=ef();return e===null?null:{parent:Rs._currentValue,pool:e}}var br=Error(a(460)),tf=Error(a(474)),Ic=Error(a(542)),Pc={then:function(){}};function e_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function t_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(Kt,Kt),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,s_(e),e;default:if(typeof s.status=="string")s.then(Kt,Kt);else{if(e=ss,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,s_(e),e}throw Fa=s,br}}function Ya(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Fa=o,br):o}}var Fa=null;function n_(){if(Fa===null)throw Error(a(459));var e=Fa;return Fa=null,e}function s_(e){if(e===br||e===Ic)throw Error(a(483))}var vr=null,hl=0;function Hc(e){var s=hl;return hl+=1,vr===null&&(vr=[]),t_(vr,e,s)}function ml(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Vc(e,s){throw s.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function o_(e){function s(ne,Q){if(e){var ie=ne.deletions;ie===null?(ne.deletions=[Q],ne.flags|=16):ie.push(Q)}}function o(ne,Q){if(!e)return null;for(;Q!==null;)s(ne,Q),Q=Q.sibling;return null}function r(ne){for(var Q=new Map;ne!==null;)ne.key!==null?Q.set(ne.key,ne):Q.set(ne.index,ne),ne=ne.sibling;return Q}function f(ne,Q){return ne=Ii(ne,Q),ne.index=0,ne.sibling=null,ne}function h(ne,Q,ie){return ne.index=ie,e?(ie=ne.alternate,ie!==null?(ie=ie.index,ie<Q?(ne.flags|=67108866,Q):ie):(ne.flags|=67108866,Q)):(ne.flags|=1048576,Q)}function b(ne){return e&&ne.alternate===null&&(ne.flags|=67108866),ne}function j(ne,Q,ie,De){return Q===null||Q.tag!==6?(Q=Ud(ie,ne.mode,De),Q.return=ne,Q):(Q=f(Q,ie),Q.return=ne,Q)}function Y(ne,Q,ie,De){var Bt=ie.type;return Bt===C?ve(ne,Q,ie.props.children,De,ie.key):Q!==null&&(Q.elementType===Bt||typeof Bt=="object"&&Bt!==null&&Bt.$$typeof===I&&Ya(Bt)===Q.type)?(Q=f(Q,ie.props),ml(Q,ie),Q.return=ne,Q):(Q=Lc(ie.type,ie.key,ie.props,null,ne.mode,De),ml(Q,ie),Q.return=ne,Q)}function re(ne,Q,ie,De){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==ie.containerInfo||Q.stateNode.implementation!==ie.implementation?(Q=Wd(ie,ne.mode,De),Q.return=ne,Q):(Q=f(Q,ie.children||[]),Q.return=ne,Q)}function ve(ne,Q,ie,De,Bt){return Q===null||Q.tag!==7?(Q=Pa(ie,ne.mode,De,Bt),Q.return=ne,Q):(Q=f(Q,ie),Q.return=ne,Q)}function Ne(ne,Q,ie){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=Ud(""+Q,ne.mode,ie),Q.return=ne,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case w:return ie=Lc(Q.type,Q.key,Q.props,null,ne.mode,ie),ml(ie,Q),ie.return=ne,ie;case S:return Q=Wd(Q,ne.mode,ie),Q.return=ne,Q;case I:return Q=Ya(Q),Ne(ne,Q,ie)}if(Ee(Q)||pe(Q))return Q=Pa(Q,ne.mode,ie,null),Q.return=ne,Q;if(typeof Q.then=="function")return Ne(ne,Hc(Q),ie);if(Q.$$typeof===D)return Ne(ne,zc(ne,Q),ie);Vc(ne,Q)}return null}function ce(ne,Q,ie,De){var Bt=Q!==null?Q.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return Bt!==null?null:j(ne,Q,""+ie,De);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case w:return ie.key===Bt?Y(ne,Q,ie,De):null;case S:return ie.key===Bt?re(ne,Q,ie,De):null;case I:return ie=Ya(ie),ce(ne,Q,ie,De)}if(Ee(ie)||pe(ie))return Bt!==null?null:ve(ne,Q,ie,De,null);if(typeof ie.then=="function")return ce(ne,Q,Hc(ie),De);if(ie.$$typeof===D)return ce(ne,Q,zc(ne,ie),De);Vc(ne,ie)}return null}function me(ne,Q,ie,De,Bt){if(typeof De=="string"&&De!==""||typeof De=="number"||typeof De=="bigint")return ne=ne.get(ie)||null,j(Q,ne,""+De,Bt);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case w:return ne=ne.get(De.key===null?ie:De.key)||null,Y(Q,ne,De,Bt);case S:return ne=ne.get(De.key===null?ie:De.key)||null,re(Q,ne,De,Bt);case I:return De=Ya(De),me(ne,Q,ie,De,Bt)}if(Ee(De)||pe(De))return ne=ne.get(ie)||null,ve(Q,ne,De,Bt,null);if(typeof De.then=="function")return me(ne,Q,ie,Hc(De),Bt);if(De.$$typeof===D)return me(ne,Q,ie,zc(Q,De),Bt);Vc(Q,De)}return null}function vt(ne,Q,ie,De){for(var Bt=null,Rn=null,jt=Q,cn=Q=0,wn=null;jt!==null&&cn<ie.length;cn++){jt.index>cn?(wn=jt,jt=null):wn=jt.sibling;var Nn=ce(ne,jt,ie[cn],De);if(Nn===null){jt===null&&(jt=wn);break}e&&jt&&Nn.alternate===null&&s(ne,jt),Q=h(Nn,Q,cn),Rn===null?Bt=Nn:Rn.sibling=Nn,Rn=Nn,jt=wn}if(cn===ie.length)return o(ne,jt),kn&&Pi(ne,cn),Bt;if(jt===null){for(;cn<ie.length;cn++)jt=Ne(ne,ie[cn],De),jt!==null&&(Q=h(jt,Q,cn),Rn===null?Bt=jt:Rn.sibling=jt,Rn=jt);return kn&&Pi(ne,cn),Bt}for(jt=r(jt);cn<ie.length;cn++)wn=me(jt,ne,cn,ie[cn],De),wn!==null&&(e&&wn.alternate!==null&&jt.delete(wn.key===null?cn:wn.key),Q=h(wn,Q,cn),Rn===null?Bt=wn:Rn.sibling=wn,Rn=wn);return e&&jt.forEach(function(Ta){return s(ne,Ta)}),kn&&Pi(ne,cn),Bt}function Wt(ne,Q,ie,De){if(ie==null)throw Error(a(151));for(var Bt=null,Rn=null,jt=Q,cn=Q=0,wn=null,Nn=ie.next();jt!==null&&!Nn.done;cn++,Nn=ie.next()){jt.index>cn?(wn=jt,jt=null):wn=jt.sibling;var Ta=ce(ne,jt,Nn.value,De);if(Ta===null){jt===null&&(jt=wn);break}e&&jt&&Ta.alternate===null&&s(ne,jt),Q=h(Ta,Q,cn),Rn===null?Bt=Ta:Rn.sibling=Ta,Rn=Ta,jt=wn}if(Nn.done)return o(ne,jt),kn&&Pi(ne,cn),Bt;if(jt===null){for(;!Nn.done;cn++,Nn=ie.next())Nn=Ne(ne,Nn.value,De),Nn!==null&&(Q=h(Nn,Q,cn),Rn===null?Bt=Nn:Rn.sibling=Nn,Rn=Nn);return kn&&Pi(ne,cn),Bt}for(jt=r(jt);!Nn.done;cn++,Nn=ie.next())Nn=me(jt,ne,cn,Nn.value,De),Nn!==null&&(e&&Nn.alternate!==null&&jt.delete(Nn.key===null?cn:Nn.key),Q=h(Nn,Q,cn),Rn===null?Bt=Nn:Rn.sibling=Nn,Rn=Nn);return e&&jt.forEach(function(sv){return s(ne,sv)}),kn&&Pi(ne,cn),Bt}function Zn(ne,Q,ie,De){if(typeof ie=="object"&&ie!==null&&ie.type===C&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case w:e:{for(var Bt=ie.key;Q!==null;){if(Q.key===Bt){if(Bt=ie.type,Bt===C){if(Q.tag===7){o(ne,Q.sibling),De=f(Q,ie.props.children),De.return=ne,ne=De;break e}}else if(Q.elementType===Bt||typeof Bt=="object"&&Bt!==null&&Bt.$$typeof===I&&Ya(Bt)===Q.type){o(ne,Q.sibling),De=f(Q,ie.props),ml(De,ie),De.return=ne,ne=De;break e}o(ne,Q);break}else s(ne,Q);Q=Q.sibling}ie.type===C?(De=Pa(ie.props.children,ne.mode,De,ie.key),De.return=ne,ne=De):(De=Lc(ie.type,ie.key,ie.props,null,ne.mode,De),ml(De,ie),De.return=ne,ne=De)}return b(ne);case S:e:{for(Bt=ie.key;Q!==null;){if(Q.key===Bt)if(Q.tag===4&&Q.stateNode.containerInfo===ie.containerInfo&&Q.stateNode.implementation===ie.implementation){o(ne,Q.sibling),De=f(Q,ie.children||[]),De.return=ne,ne=De;break e}else{o(ne,Q);break}else s(ne,Q);Q=Q.sibling}De=Wd(ie,ne.mode,De),De.return=ne,ne=De}return b(ne);case I:return ie=Ya(ie),Zn(ne,Q,ie,De)}if(Ee(ie))return vt(ne,Q,ie,De);if(pe(ie)){if(Bt=pe(ie),typeof Bt!="function")throw Error(a(150));return ie=Bt.call(ie),Wt(ne,Q,ie,De)}if(typeof ie.then=="function")return Zn(ne,Q,Hc(ie),De);if(ie.$$typeof===D)return Zn(ne,Q,zc(ne,ie),De);Vc(ne,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,Q!==null&&Q.tag===6?(o(ne,Q.sibling),De=f(Q,ie),De.return=ne,ne=De):(o(ne,Q),De=Ud(ie,ne.mode,De),De.return=ne,ne=De),b(ne)):o(ne,Q)}return function(ne,Q,ie,De){try{hl=0;var Bt=Zn(ne,Q,ie,De);return vr=null,Bt}catch(jt){if(jt===br||jt===Ic)throw jt;var Rn=Io(29,jt,null,ne.mode);return Rn.lanes=De,Rn.return=ne,Rn}finally{}}}var Xa=o_(!0),i_=o_(!1),da=!1;function nf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sf(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ha(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,($n&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Nc(e),Vp(e,null,o),s}return Rc(e,r,s,o),Nc(e)}function pl(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,is(e,o)}}function of(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var b={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};h===null?f=h=b:h=h.next=b,o=o.next}while(o!==null);h===null?f=h=s:h=h.next=s}else f=h=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var af=!1;function _l(){if(af){var e=xr;if(e!==null)throw e}}function gl(e,s,o,r){af=!1;var f=e.updateQueue;da=!1;var h=f.firstBaseUpdate,b=f.lastBaseUpdate,j=f.shared.pending;if(j!==null){f.shared.pending=null;var Y=j,re=Y.next;Y.next=null,b===null?h=re:b.next=re,b=Y;var ve=e.alternate;ve!==null&&(ve=ve.updateQueue,j=ve.lastBaseUpdate,j!==b&&(j===null?ve.firstBaseUpdate=re:j.next=re,ve.lastBaseUpdate=Y))}if(h!==null){var Ne=f.baseState;b=0,ve=re=Y=null,j=h;do{var ce=j.lane&-536870913,me=ce!==j.lane;if(me?(vn&ce)===ce:(r&ce)===ce){ce!==0&&ce===yr&&(af=!0),ve!==null&&(ve=ve.next={lane:0,tag:j.tag,payload:j.payload,callback:null,next:null});e:{var vt=e,Wt=j;ce=s;var Zn=o;switch(Wt.tag){case 1:if(vt=Wt.payload,typeof vt=="function"){Ne=vt.call(Zn,Ne,ce);break e}Ne=vt;break e;case 3:vt.flags=vt.flags&-65537|128;case 0:if(vt=Wt.payload,ce=typeof vt=="function"?vt.call(Zn,Ne,ce):vt,ce==null)break e;Ne=x({},Ne,ce);break e;case 2:da=!0}}ce=j.callback,ce!==null&&(e.flags|=64,me&&(e.flags|=8192),me=f.callbacks,me===null?f.callbacks=[ce]:me.push(ce))}else me={lane:ce,tag:j.tag,payload:j.payload,callback:j.callback,next:null},ve===null?(re=ve=me,Y=Ne):ve=ve.next=me,b|=ce;if(j=j.next,j===null){if(j=f.shared.pending,j===null)break;me=j,j=me.next,me.next=null,f.lastBaseUpdate=me,f.shared.pending=null}}while(!0);ve===null&&(Y=Ne),f.baseState=Y,f.firstBaseUpdate=re,f.lastBaseUpdate=ve,h===null&&(f.shared.lanes=0),ya|=b,e.lanes=b,e.memoizedState=Ne}}function a_(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function r_(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)a_(o[e],s)}var wr=z(null),Uc=z(0);function l_(e,s){e=Qi,H(Uc,e),H(wr,s),Qi=e|s.baseLanes}function rf(){H(Uc,Qi),H(wr,wr.current)}function lf(){Qi=Uc.current,oe(wr),oe(Uc)}var Po=z(null),ti=null;function ma(e){var s=e.alternate;H(Ms,Ms.current&1),H(Po,e),ti===null&&(s===null||wr.current!==null||s.memoizedState!==null)&&(ti=e)}function cf(e){H(Ms,Ms.current),H(Po,e),ti===null&&(ti=e)}function c_(e){e.tag===22?(H(Ms,Ms.current),H(Po,e),ti===null&&(ti=e)):pa()}function pa(){H(Ms,Ms.current),H(Po,Po.current)}function Ho(e){oe(Po),ti===e&&(ti=null),oe(Ms)}var Ms=z(0);function Wc(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||ph(o)||_h(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Ui=0,ln=null,Kn=null,Ns=null,Yc=!1,Sr=!1,qa=!1,Fc=0,yl=0,kr=null,X5=0;function Ss(){throw Error(a(321))}function uf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!pt(e[o],s[o]))return!1;return!0}function df(e,s,o,r,f,h){return Ui=h,ln=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,P.H=e===null||e.memoizedState===null?F_:jf,qa=!1,h=o(r,f),qa=!1,Sr&&(h=d_(s,o,r,f)),u_(e),h}function u_(e){P.H=vl;var s=Kn!==null&&Kn.next!==null;if(Ui=0,Ns=Kn=ln=null,Yc=!1,yl=0,kr=null,s)throw Error(a(300));e===null||Ls||(e=e.dependencies,e!==null&&Oc(e)&&(Ls=!0))}function d_(e,s,o,r){ln=e;var f=0;do{if(Sr&&(kr=null),yl=0,Sr=!1,25<=f)throw Error(a(301));if(f+=1,Ns=Kn=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=X_,h=s(o,r)}while(Sr);return h}function q5(){var e=P.H,s=e.useState()[0];return s=typeof s.then=="function"?xl(s):s,e=e.useState()[0],(Kn!==null?Kn.memoizedState:null)!==e&&(ln.flags|=1024),s}function ff(){var e=Fc!==0;return Fc=0,e}function hf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function mf(e){if(Yc){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}Yc=!1}Ui=0,Ns=Kn=ln=null,Sr=!1,yl=Fc=0,kr=null}function go(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ns===null?ln.memoizedState=Ns=e:Ns=Ns.next=e,Ns}function Ts(){if(Kn===null){var e=ln.alternate;e=e!==null?e.memoizedState:null}else e=Kn.next;var s=Ns===null?ln.memoizedState:Ns.next;if(s!==null)Ns=s,Kn=e;else{if(e===null)throw ln.alternate===null?Error(a(467)):Error(a(310));Kn=e,e={memoizedState:Kn.memoizedState,baseState:Kn.baseState,baseQueue:Kn.baseQueue,queue:Kn.queue,next:null},Ns===null?ln.memoizedState=Ns=e:Ns=Ns.next=e}return Ns}function Xc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xl(e){var s=yl;return yl+=1,kr===null&&(kr=[]),e=t_(kr,e,s),s=ln,(Ns===null?s.memoizedState:Ns.next)===null&&(s=s.alternate,P.H=s===null||s.memoizedState===null?F_:jf),e}function qc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xl(e);if(e.$$typeof===D)return Qs(e)}throw Error(a(438,String(e)))}function pf(e){var s=null,o=ln.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=ln.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Xc(),ln.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=J;return s.index++,o}function Wi(e,s){return typeof s=="function"?s(e):s}function Gc(e){var s=Ts();return _f(s,Kn,e)}function _f(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,h=r.pending;if(h!==null){if(f!==null){var b=f.next;f.next=h.next,h.next=b}s.baseQueue=f=h,r.pending=null}if(h=e.baseState,f===null)e.memoizedState=h;else{s=f.next;var j=b=null,Y=null,re=s,ve=!1;do{var Ne=re.lane&-536870913;if(Ne!==re.lane?(vn&Ne)===Ne:(Ui&Ne)===Ne){var ce=re.revertLane;if(ce===0)Y!==null&&(Y=Y.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),Ne===yr&&(ve=!0);else if((Ui&ce)===ce){re=re.next,ce===yr&&(ve=!0);continue}else Ne={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},Y===null?(j=Y=Ne,b=h):Y=Y.next=Ne,ln.lanes|=ce,ya|=ce;Ne=re.action,qa&&o(h,Ne),h=re.hasEagerState?re.eagerState:o(h,Ne)}else ce={lane:Ne,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},Y===null?(j=Y=ce,b=h):Y=Y.next=ce,ln.lanes|=Ne,ya|=Ne;re=re.next}while(re!==null&&re!==s);if(Y===null?b=h:Y.next=j,!pt(h,e.memoizedState)&&(Ls=!0,ve&&(o=xr,o!==null)))throw o;e.memoizedState=h,e.baseState=b,e.baseQueue=Y,r.lastRenderedState=h}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function gf(e){var s=Ts(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,h=s.memoizedState;if(f!==null){o.pending=null;var b=f=f.next;do h=e(h,b.action),b=b.next;while(b!==f);pt(h,s.memoizedState)||(Ls=!0),s.memoizedState=h,s.baseQueue===null&&(s.baseState=h),o.lastRenderedState=h}return[h,r]}function f_(e,s,o){var r=ln,f=Ts(),h=kn;if(h){if(o===void 0)throw Error(a(407));o=o()}else o=s();var b=!pt((Kn||f).memoizedState,o);if(b&&(f.memoizedState=o,Ls=!0),f=f.queue,bf(p_.bind(null,r,f,e),[e]),f.getSnapshot!==s||b||Ns!==null&&Ns.memoizedState.tag&1){if(r.flags|=2048,Cr(9,{destroy:void 0},m_.bind(null,r,f,o,s),null),ss===null)throw Error(a(349));h||(Ui&127)!==0||h_(r,s,o)}return o}function h_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=ln.updateQueue,s===null?(s=Xc(),ln.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function m_(e,s,o,r){s.value=o,s.getSnapshot=r,__(s)&&g_(e)}function p_(e,s,o){return o(function(){__(s)&&g_(e)})}function __(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!pt(e,o)}catch{return!0}}function g_(e){var s=Ia(e,2);s!==null&&To(s,e,2)}function yf(e){var s=go();if(typeof e=="function"){var o=e;if(e=o(),qa){ye(!0);try{o()}finally{ye(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},s}function y_(e,s,o,r){return e.baseState=o,_f(e,Kn,typeof r=="function"?r:Wi)}function G5(e,s,o,r,f){if(Zc(e))throw Error(a(485));if(e=s.action,e!==null){var h={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){h.listeners.push(b)}};P.T!==null?o(!0):h.isTransition=!1,r(h),o=s.pending,o===null?(h.next=s.pending=h,x_(s,h)):(h.next=o.next,s.pending=o.next=h)}}function x_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var h=P.T,b={};P.T=b;try{var j=o(f,r),Y=P.S;Y!==null&&Y(b,j),b_(e,s,j)}catch(re){xf(e,s,re)}finally{h!==null&&b.types!==null&&(h.types=b.types),P.T=h}}else try{h=o(f,r),b_(e,s,h)}catch(re){xf(e,s,re)}}function b_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){v_(e,s,r)},function(r){return xf(e,s,r)}):v_(e,s,o)}function v_(e,s,o){s.status="fulfilled",s.value=o,w_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,x_(e,o)))}function xf(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,w_(s),s=s.next;while(s!==r)}e.action=null}function w_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function S_(e,s){return s}function k_(e,s){if(kn){var o=ss.formState;if(o!==null){e:{var r=ln;if(kn){if(hs){t:{for(var f=hs,h=ei;f.nodeType!==8;){if(!h){f=null;break t}if(f=ni(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){hs=ni(f.nextSibling),r=f.data==="F!";break e}}ca(r)}r=!1}r&&(s=o[0])}}return o=go(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:S_,lastRenderedState:s},o.queue=r,o=U_.bind(null,ln,r),r.dispatch=o,r=yf(!1),h=Cf.bind(null,ln,!1,r.queue),r=go(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=G5.bind(null,ln,f,h,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function C_(e){var s=Ts();return j_(s,Kn,e)}function j_(e,s,o){if(s=_f(e,s,S_)[0],e=Gc(Wi)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=xl(s)}catch(b){throw b===br?Ic:b}else r=s;s=Ts();var f=s.queue,h=f.dispatch;return o!==s.memoizedState&&(ln.flags|=2048,Cr(9,{destroy:void 0},K5.bind(null,f,o),null)),[r,h,e]}function K5(e,s){e.action=s}function M_(e){var s=Ts(),o=Kn;if(o!==null)return j_(s,o,e);Ts(),s=s.memoizedState,o=Ts();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function Cr(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=ln.updateQueue,s===null&&(s=Xc(),ln.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function T_(){return Ts().memoizedState}function Kc(e,s,o,r){var f=go();ln.flags|=e,f.memoizedState=Cr(1|s,{destroy:void 0},o,r===void 0?null:r)}function Qc(e,s,o,r){var f=Ts();r=r===void 0?null:r;var h=f.memoizedState.inst;Kn!==null&&r!==null&&uf(r,Kn.memoizedState.deps)?f.memoizedState=Cr(s,h,o,r):(ln.flags|=e,f.memoizedState=Cr(1|s,h,o,r))}function E_(e,s){Kc(8390656,8,e,s)}function bf(e,s){Qc(2048,8,e,s)}function Q5(e){ln.flags|=4;var s=ln.updateQueue;if(s===null)s=Xc(),ln.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function D_(e){var s=Ts().memoizedState;return Q5({ref:s,nextImpl:e}),function(){if(($n&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function A_(e,s){return Qc(4,2,e,s)}function R_(e,s){return Qc(4,4,e,s)}function N_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function L_(e,s,o){o=o!=null?o.concat([e]):null,Qc(4,4,N_.bind(null,s,e),o)}function vf(){}function B_(e,s){var o=Ts();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&uf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function O_(e,s){var o=Ts();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&uf(s,r[1]))return r[0];if(r=e(),qa){ye(!0);try{e()}finally{ye(!1)}}return o.memoizedState=[r,s],r}function wf(e,s,o){return o===void 0||(Ui&1073741824)!==0&&(vn&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=zg(),ln.lanes|=e,ya|=e,o)}function z_(e,s,o,r){return pt(o,s)?o:wr.current!==null?(e=wf(e,o,r),pt(e,s)||(Ls=!0),e):(Ui&42)===0||(Ui&1073741824)!==0&&(vn&261930)===0?(Ls=!0,e.memoizedState=o):(e=zg(),ln.lanes|=e,ya|=e,s)}function $_(e,s,o,r,f){var h=he.p;he.p=h!==0&&8>h?h:8;var b=P.T,j={};P.T=j,Cf(e,!1,s,o);try{var Y=f(),re=P.S;if(re!==null&&re(j,Y),Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var ve=F5(Y,r);bl(e,s,ve,Wo(e))}else bl(e,s,r,Wo(e))}catch(Ne){bl(e,s,{then:function(){},status:"rejected",reason:Ne},Wo())}finally{he.p=h,b!==null&&j.types!==null&&(b.types=j.types),P.T=b}}function Z5(){}function Sf(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=I_(e).queue;$_(e,f,s,Z,o===null?Z5:function(){return P_(e),o(r)})}function I_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:Z},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function P_(e){var s=I_(e);s.next===null&&(s=e.alternate.memoizedState),bl(e,s.next.queue,{},Wo())}function kf(){return Qs(zl)}function H_(){return Ts().memoizedState}function V_(){return Ts().memoizedState}function J5(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=Wo();e=fa(o);var r=ha(s,e,o);r!==null&&(To(r,s,o),pl(r,s,o)),s={cache:Zd()},e.payload=s;return}s=s.return}}function e2(e,s,o){var r=Wo();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Zc(e)?W_(s,o):(o=Hd(e,s,o,r),o!==null&&(To(o,e,r),Y_(o,s,r)))}function U_(e,s,o){var r=Wo();bl(e,s,o,r)}function bl(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Zc(e))W_(s,f);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=s.lastRenderedReducer,h!==null))try{var b=s.lastRenderedState,j=h(b,o);if(f.hasEagerState=!0,f.eagerState=j,pt(j,b))return Rc(e,s,f,0),ss===null&&Ac(),!1}catch{}finally{}if(o=Hd(e,s,f,r),o!==null)return To(o,e,r),Y_(o,s,r),!0}return!1}function Cf(e,s,o,r){if(r={lane:2,revertLane:sh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Zc(e)){if(s)throw Error(a(479))}else s=Hd(e,o,r,2),s!==null&&To(s,e,2)}function Zc(e){var s=e.alternate;return e===ln||s!==null&&s===ln}function W_(e,s){Sr=Yc=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function Y_(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,is(e,o)}}var vl={readContext:Qs,use:qc,useCallback:Ss,useContext:Ss,useEffect:Ss,useImperativeHandle:Ss,useLayoutEffect:Ss,useInsertionEffect:Ss,useMemo:Ss,useReducer:Ss,useRef:Ss,useState:Ss,useDebugValue:Ss,useDeferredValue:Ss,useTransition:Ss,useSyncExternalStore:Ss,useId:Ss,useHostTransitionStatus:Ss,useFormState:Ss,useActionState:Ss,useOptimistic:Ss,useMemoCache:Ss,useCacheRefresh:Ss};vl.useEffectEvent=Ss;var F_={readContext:Qs,use:qc,useCallback:function(e,s){return go().memoizedState=[e,s===void 0?null:s],e},useContext:Qs,useEffect:E_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,Kc(4194308,4,N_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return Kc(4194308,4,e,s)},useInsertionEffect:function(e,s){Kc(4,2,e,s)},useMemo:function(e,s){var o=go();s=s===void 0?null:s;var r=e();if(qa){ye(!0);try{e()}finally{ye(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=go();if(o!==void 0){var f=o(s);if(qa){ye(!0);try{o(s)}finally{ye(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=e2.bind(null,ln,e),[r.memoizedState,e]},useRef:function(e){var s=go();return e={current:e},s.memoizedState=e},useState:function(e){e=yf(e);var s=e.queue,o=U_.bind(null,ln,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:vf,useDeferredValue:function(e,s){var o=go();return wf(o,e,s)},useTransition:function(){var e=yf(!1);return e=$_.bind(null,ln,e.queue,!0,!1),go().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=ln,f=go();if(kn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),ss===null)throw Error(a(349));(vn&127)!==0||h_(r,s,o)}f.memoizedState=o;var h={value:o,getSnapshot:s};return f.queue=h,E_(p_.bind(null,r,h,e),[e]),r.flags|=2048,Cr(9,{destroy:void 0},m_.bind(null,r,h,o,s),null),o},useId:function(){var e=go(),s=ss.identifierPrefix;if(kn){var o=Ci,r=ki;o=(r&~(1<<32-_t(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=Fc++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=X5++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:kf,useFormState:k_,useActionState:k_,useOptimistic:function(e){var s=go();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Cf.bind(null,ln,!0,o),o.dispatch=s,[e,s]},useMemoCache:pf,useCacheRefresh:function(){return go().memoizedState=J5.bind(null,ln)},useEffectEvent:function(e){var s=go(),o={impl:e};return s.memoizedState=o,function(){if(($n&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},jf={readContext:Qs,use:qc,useCallback:B_,useContext:Qs,useEffect:bf,useImperativeHandle:L_,useInsertionEffect:A_,useLayoutEffect:R_,useMemo:O_,useReducer:Gc,useRef:T_,useState:function(){return Gc(Wi)},useDebugValue:vf,useDeferredValue:function(e,s){var o=Ts();return z_(o,Kn.memoizedState,e,s)},useTransition:function(){var e=Gc(Wi)[0],s=Ts().memoizedState;return[typeof e=="boolean"?e:xl(e),s]},useSyncExternalStore:f_,useId:H_,useHostTransitionStatus:kf,useFormState:C_,useActionState:C_,useOptimistic:function(e,s){var o=Ts();return y_(o,Kn,e,s)},useMemoCache:pf,useCacheRefresh:V_};jf.useEffectEvent=D_;var X_={readContext:Qs,use:qc,useCallback:B_,useContext:Qs,useEffect:bf,useImperativeHandle:L_,useInsertionEffect:A_,useLayoutEffect:R_,useMemo:O_,useReducer:gf,useRef:T_,useState:function(){return gf(Wi)},useDebugValue:vf,useDeferredValue:function(e,s){var o=Ts();return Kn===null?wf(o,e,s):z_(o,Kn.memoizedState,e,s)},useTransition:function(){var e=gf(Wi)[0],s=Ts().memoizedState;return[typeof e=="boolean"?e:xl(e),s]},useSyncExternalStore:f_,useId:H_,useHostTransitionStatus:kf,useFormState:M_,useActionState:M_,useOptimistic:function(e,s){var o=Ts();return Kn!==null?y_(o,Kn,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:pf,useCacheRefresh:V_};X_.useEffectEvent=D_;function Mf(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Tf={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=Wo(),f=fa(r);f.payload=s,o!=null&&(f.callback=o),s=ha(e,f,r),s!==null&&(To(s,e,r),pl(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=Wo(),f=fa(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=ha(e,f,r),s!==null&&(To(s,e,r),pl(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=Wo(),r=fa(o);r.tag=2,s!=null&&(r.callback=s),s=ha(e,r,o),s!==null&&(To(s,e,o),pl(s,e,o))}};function q_(e,s,o,r,f,h,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,h,b):s.prototype&&s.prototype.isPureReactComponent?!at(o,r)||!at(f,h):!0}function G_(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&Tf.enqueueReplaceState(s,s.state,null)}function Ga(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function K_(e){Dc(e)}function Q_(e){console.error(e)}function Z_(e){Dc(e)}function Jc(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function J_(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Ef(e,s,o){return o=fa(o),o.tag=3,o.payload={element:null},o.callback=function(){Jc(e,s)},o}function eg(e){return e=fa(e),e.tag=3,e}function tg(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var h=r.value;e.payload=function(){return f(h)},e.callback=function(){J_(s,o,r)}}var b=o.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){J_(s,o,r),typeof f!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var j=r.stack;this.componentDidCatch(r.value,{componentStack:j!==null?j:""})})}function t2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&gr(s,o,f,!0),o=Po.current,o!==null){switch(o.tag){case 31:case 13:return ti===null?du():o.alternate===null&&ks===0&&(ks=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===Pc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),eh(e,r,f)),!1;case 22:return o.flags|=65536,r===Pc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),eh(e,r,f)),!1}throw Error(a(435,o.tag))}return eh(e,r,f),du(),!1}if(kn)return s=Po.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==Xd&&(e=Error(a(422),{cause:r}),ul(Qo(e,o)))):(r!==Xd&&(s=Error(a(423),{cause:r}),ul(Qo(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=Qo(r,o),f=Ef(e.stateNode,r,f),of(e,f),ks!==4&&(ks=2)),!1;var h=Error(a(520),{cause:r});if(h=Qo(h,o),El===null?El=[h]:El.push(h),ks!==4&&(ks=2),s===null)return!0;r=Qo(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=Ef(o.stateNode,r,e),of(o,e),!1;case 1:if(s=o.type,h=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(xa===null||!xa.has(h))))return o.flags|=65536,f&=-f,o.lanes|=f,f=eg(f),tg(f,e,o,r),of(o,f),!1}o=o.return}while(o!==null);return!1}var Df=Error(a(461)),Ls=!1;function Zs(e,s,o,r){s.child=e===null?i_(s,null,o,r):Xa(s,e.child,o,r)}function ng(e,s,o,r,f){o=o.render;var h=s.ref;if("ref"in r){var b={};for(var j in r)j!=="ref"&&(b[j]=r[j])}else b=r;return Ua(s),r=df(e,s,o,b,h,f),j=ff(),e!==null&&!Ls?(hf(e,s,f),Yi(e,s,f)):(kn&&j&&Yd(s),s.flags|=1,Zs(e,s,r,f),s.child)}function sg(e,s,o,r,f){if(e===null){var h=o.type;return typeof h=="function"&&!Vd(h)&&h.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=h,og(e,s,h,r,f)):(e=Lc(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(h=e.child,!$f(e,f)){var b=h.memoizedProps;if(o=o.compare,o=o!==null?o:at,o(b,r)&&e.ref===s.ref)return Yi(e,s,f)}return s.flags|=1,e=Ii(h,r),e.ref=s.ref,e.return=s,s.child=e}function og(e,s,o,r,f){if(e!==null){var h=e.memoizedProps;if(at(h,r)&&e.ref===s.ref)if(Ls=!1,s.pendingProps=r=h,$f(e,f))(e.flags&131072)!==0&&(Ls=!0);else return s.lanes=e.lanes,Yi(e,s,f)}return Af(e,s,o,r,f)}function ig(e,s,o,r){var f=r.children,h=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(h=h!==null?h.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~h}else r=0,s.child=null;return ag(e,s,h,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&$c(s,h!==null?h.cachePool:null),h!==null?l_(s,h):rf(),c_(s);else return r=s.lanes=536870912,ag(e,s,h!==null?h.baseLanes|o:o,o,r)}else h!==null?($c(s,h.cachePool),l_(s,h),pa(),s.memoizedState=null):(e!==null&&$c(s,null),rf(),pa());return Zs(e,s,f,o),s.child}function wl(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function ag(e,s,o,r,f){var h=ef();return h=h===null?null:{parent:Rs._currentValue,pool:h},s.memoizedState={baseLanes:o,cachePool:h},e!==null&&$c(s,null),rf(),c_(s),e!==null&&gr(e,s,r,!0),s.childLanes=f,null}function eu(e,s){return s=nu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function rg(e,s,o){return Xa(s,e.child,null,o),e=eu(s,s.pendingProps),e.flags|=2,Ho(s),s.memoizedState=null,e}function n2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(kn){if(r.mode==="hidden")return e=eu(s,r),s.lanes=536870912,wl(null,e);if(cf(s),(e=hs)?(e=x0(e,ei),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:ra!==null?{id:ki,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},o=Wp(e),o.return=s,s.child=o,Ks=s,hs=null)):e=null,e===null)throw ca(s);return s.lanes=536870912,null}return eu(s,r)}var h=e.memoizedState;if(h!==null){var b=h.dehydrated;if(cf(s),f)if(s.flags&256)s.flags&=-257,s=rg(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(Ls||gr(e,s,o,!1),f=(o&e.childLanes)!==0,Ls||f){if(r=ss,r!==null&&(b=Hn(r,o),b!==0&&b!==h.retryLane))throw h.retryLane=b,Ia(e,b),To(r,e,b),Df;du(),s=rg(e,s,o)}else e=h.treeContext,hs=ni(b.nextSibling),Ks=s,kn=!0,la=null,ei=!1,e!==null&&Xp(s,e),s=eu(s,r),s.flags|=4096;return s}return e=Ii(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function tu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function Af(e,s,o,r,f){return Ua(s),o=df(e,s,o,r,void 0,f),r=ff(),e!==null&&!Ls?(hf(e,s,f),Yi(e,s,f)):(kn&&r&&Yd(s),s.flags|=1,Zs(e,s,o,f),s.child)}function lg(e,s,o,r,f,h){return Ua(s),s.updateQueue=null,o=d_(s,r,o,f),u_(e),r=ff(),e!==null&&!Ls?(hf(e,s,h),Yi(e,s,h)):(kn&&r&&Yd(s),s.flags|=1,Zs(e,s,o,h),s.child)}function cg(e,s,o,r,f){if(Ua(s),s.stateNode===null){var h=hr,b=o.contextType;typeof b=="object"&&b!==null&&(h=Qs(b)),h=new o(r,h),s.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Tf,s.stateNode=h,h._reactInternals=s,h=s.stateNode,h.props=r,h.state=s.memoizedState,h.refs={},nf(s),b=o.contextType,h.context=typeof b=="object"&&b!==null?Qs(b):hr,h.state=s.memoizedState,b=o.getDerivedStateFromProps,typeof b=="function"&&(Mf(s,o,b,r),h.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(b=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),b!==h.state&&Tf.enqueueReplaceState(h,h.state,null),gl(s,r,h,f),_l(),h.state=s.memoizedState),typeof h.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){h=s.stateNode;var j=s.memoizedProps,Y=Ga(o,j);h.props=Y;var re=h.context,ve=o.contextType;b=hr,typeof ve=="object"&&ve!==null&&(b=Qs(ve));var Ne=o.getDerivedStateFromProps;ve=typeof Ne=="function"||typeof h.getSnapshotBeforeUpdate=="function",j=s.pendingProps!==j,ve||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(j||re!==b)&&G_(s,h,r,b),da=!1;var ce=s.memoizedState;h.state=ce,gl(s,r,h,f),_l(),re=s.memoizedState,j||ce!==re||da?(typeof Ne=="function"&&(Mf(s,o,Ne,r),re=s.memoizedState),(Y=da||q_(s,o,Y,r,ce,re,b))?(ve||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(s.flags|=4194308)):(typeof h.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=re),h.props=r,h.state=re,h.context=b,r=Y):(typeof h.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{h=s.stateNode,sf(e,s),b=s.memoizedProps,ve=Ga(o,b),h.props=ve,Ne=s.pendingProps,ce=h.context,re=o.contextType,Y=hr,typeof re=="object"&&re!==null&&(Y=Qs(re)),j=o.getDerivedStateFromProps,(re=typeof j=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b!==Ne||ce!==Y)&&G_(s,h,r,Y),da=!1,ce=s.memoizedState,h.state=ce,gl(s,r,h,f),_l();var me=s.memoizedState;b!==Ne||ce!==me||da||e!==null&&e.dependencies!==null&&Oc(e.dependencies)?(typeof j=="function"&&(Mf(s,o,j,r),me=s.memoizedState),(ve=da||q_(s,o,ve,r,ce,me,Y)||e!==null&&e.dependencies!==null&&Oc(e.dependencies))?(re||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(r,me,Y),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(r,me,Y)),typeof h.componentDidUpdate=="function"&&(s.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof h.componentDidUpdate!="function"||b===e.memoizedProps&&ce===e.memoizedState||(s.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&ce===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=me),h.props=r,h.state=me,h.context=Y,r=ve):(typeof h.componentDidUpdate!="function"||b===e.memoizedProps&&ce===e.memoizedState||(s.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&ce===e.memoizedState||(s.flags|=1024),r=!1)}return h=r,tu(e,s),r=(s.flags&128)!==0,h||r?(h=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:h.render(),s.flags|=1,e!==null&&r?(s.child=Xa(s,e.child,null,f),s.child=Xa(s,null,o,f)):Zs(e,s,o,f),s.memoizedState=h.state,e=s.child):e=Yi(e,s,f),e}function ug(e,s,o,r){return Ha(),s.flags|=256,Zs(e,s,o,r),s.child}var Rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nf(e){return{baseLanes:e,cachePool:Jp()}}function Lf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=Uo),e}function dg(e,s,o){var r=s.pendingProps,f=!1,h=(s.flags&128)!==0,b;if((b=h)||(b=e!==null&&e.memoizedState===null?!1:(Ms.current&2)!==0),b&&(f=!0,s.flags&=-129),b=(s.flags&32)!==0,s.flags&=-33,e===null){if(kn){if(f?ma(s):pa(),(e=hs)?(e=x0(e,ei),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:ra!==null?{id:ki,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},o=Wp(e),o.return=s,s.child=o,Ks=s,hs=null)):e=null,e===null)throw ca(s);return _h(e)?s.lanes=32:s.lanes=536870912,null}var j=r.children;return r=r.fallback,f?(pa(),f=s.mode,j=nu({mode:"hidden",children:j},f),r=Pa(r,f,o,null),j.return=s,r.return=s,j.sibling=r,s.child=j,r=s.child,r.memoizedState=Nf(o),r.childLanes=Lf(e,b,o),s.memoizedState=Rf,wl(null,r)):(ma(s),Bf(s,j))}var Y=e.memoizedState;if(Y!==null&&(j=Y.dehydrated,j!==null)){if(h)s.flags&256?(ma(s),s.flags&=-257,s=Of(e,s,o)):s.memoizedState!==null?(pa(),s.child=e.child,s.flags|=128,s=null):(pa(),j=r.fallback,f=s.mode,r=nu({mode:"visible",children:r.children},f),j=Pa(j,f,o,null),j.flags|=2,r.return=s,j.return=s,r.sibling=j,s.child=r,Xa(s,e.child,null,o),r=s.child,r.memoizedState=Nf(o),r.childLanes=Lf(e,b,o),s.memoizedState=Rf,s=wl(null,r));else if(ma(s),_h(j)){if(b=j.nextSibling&&j.nextSibling.dataset,b)var re=b.dgst;b=re,r=Error(a(419)),r.stack="",r.digest=b,ul({value:r,source:null,stack:null}),s=Of(e,s,o)}else if(Ls||gr(e,s,o,!1),b=(o&e.childLanes)!==0,Ls||b){if(b=ss,b!==null&&(r=Hn(b,o),r!==0&&r!==Y.retryLane))throw Y.retryLane=r,Ia(e,r),To(b,e,r),Df;ph(j)||du(),s=Of(e,s,o)}else ph(j)?(s.flags|=192,s.child=e.child,s=null):(e=Y.treeContext,hs=ni(j.nextSibling),Ks=s,kn=!0,la=null,ei=!1,e!==null&&Xp(s,e),s=Bf(s,r.children),s.flags|=4096);return s}return f?(pa(),j=r.fallback,f=s.mode,Y=e.child,re=Y.sibling,r=Ii(Y,{mode:"hidden",children:r.children}),r.subtreeFlags=Y.subtreeFlags&65011712,re!==null?j=Ii(re,j):(j=Pa(j,f,o,null),j.flags|=2),j.return=s,r.return=s,r.sibling=j,s.child=r,wl(null,r),r=s.child,j=e.child.memoizedState,j===null?j=Nf(o):(f=j.cachePool,f!==null?(Y=Rs._currentValue,f=f.parent!==Y?{parent:Y,pool:Y}:f):f=Jp(),j={baseLanes:j.baseLanes|o,cachePool:f}),r.memoizedState=j,r.childLanes=Lf(e,b,o),s.memoizedState=Rf,wl(e.child,r)):(ma(s),o=e.child,e=o.sibling,o=Ii(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(b=s.deletions,b===null?(s.deletions=[e],s.flags|=16):b.push(e)),s.child=o,s.memoizedState=null,o)}function Bf(e,s){return s=nu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function nu(e,s){return e=Io(22,e,null,s),e.lanes=0,e}function Of(e,s,o){return Xa(s,e.child,null,o),e=Bf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function fg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),Kd(e.return,s,o)}function zf(e,s,o,r,f,h){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:h}:(b.isBackwards=s,b.rendering=null,b.renderingStartTime=0,b.last=r,b.tail=o,b.tailMode=f,b.treeForkCount=h)}function hg(e,s,o){var r=s.pendingProps,f=r.revealOrder,h=r.tail;r=r.children;var b=Ms.current,j=(b&2)!==0;if(j?(b=b&1|2,s.flags|=128):b&=1,H(Ms,b),Zs(e,s,r,o),r=kn?cl:0,!j&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fg(e,o,s);else if(e.tag===19)fg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&Wc(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),zf(s,!1,f,o,h,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&Wc(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}zf(s,!0,o,null,h,r);break;case"together":zf(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function Yi(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),ya|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(gr(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=Ii(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=Ii(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function $f(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Oc(e)))}function s2(e,s,o){switch(s.tag){case 3:Ze(s,s.stateNode.containerInfo),ua(s,Rs,e.memoizedState.cache),Ha();break;case 27:case 5:Gt(s);break;case 4:Ze(s,s.stateNode.containerInfo);break;case 10:ua(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,cf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(ma(s),s.flags|=128,null):(o&s.child.childLanes)!==0?dg(e,s,o):(ma(s),e=Yi(e,s,o),e!==null?e.sibling:null);ma(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(gr(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return hg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),H(Ms,Ms.current),r)break;return null;case 22:return s.lanes=0,ig(e,s,o,s.pendingProps);case 24:ua(s,Rs,e.memoizedState.cache)}return Yi(e,s,o)}function mg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)Ls=!0;else{if(!$f(e,o)&&(s.flags&128)===0)return Ls=!1,s2(e,s,o);Ls=(e.flags&131072)!==0}else Ls=!1,kn&&(s.flags&1048576)!==0&&Fp(s,cl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=Ya(s.elementType),s.type=e,typeof e=="function")Vd(e)?(r=Ga(e,r),s.tag=1,s=cg(null,s,e,r,o)):(s.tag=0,s=Af(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===E){s.tag=11,s=ng(null,s,e,r,o);break e}else if(f===R){s.tag=14,s=sg(null,s,e,r,o);break e}}throw s=ke(e)||e,Error(a(306,s,""))}}return s;case 0:return Af(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=Ga(r,s.pendingProps),cg(e,s,r,f,o);case 3:e:{if(Ze(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var h=s.memoizedState;f=h.element,sf(e,s),gl(s,r,null,o);var b=s.memoizedState;if(r=b.cache,ua(s,Rs,r),r!==h.cache&&Qd(s,[Rs],o,!0),_l(),r=b.element,h.isDehydrated)if(h={element:r,isDehydrated:!1,cache:b.cache},s.updateQueue.baseState=h,s.memoizedState=h,s.flags&256){s=ug(e,s,r,o);break e}else if(r!==f){f=Qo(Error(a(424)),s),ul(f),s=ug(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(hs=ni(e.firstChild),Ks=s,kn=!0,la=null,ei=!0,o=i_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Ha(),r===f){s=Yi(e,s,o);break e}Zs(e,s,r,o)}s=s.child}return s;case 26:return tu(e,s),e===null?(o=C0(s.type,null,s.pendingProps,null))?s.memoizedState=o:kn||(o=s.type,e=s.pendingProps,r=yu($e.current).createElement(o),r[Ut]=s,r[Xn]=e,Js(r,o,e),qn(r),s.stateNode=r):s.memoizedState=C0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return Gt(s),e===null&&kn&&(r=s.stateNode=w0(s.type,s.pendingProps,$e.current),Ks=s,ei=!0,f=hs,Sa(s.type)?(gh=f,hs=ni(r.firstChild)):hs=f),Zs(e,s,s.pendingProps.children,o),tu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&kn&&((f=r=hs)&&(r=N2(r,s.type,s.pendingProps,ei),r!==null?(s.stateNode=r,Ks=s,hs=ni(r.firstChild),ei=!1,f=!0):f=!1),f||ca(s)),Gt(s),f=s.type,h=s.pendingProps,b=e!==null?e.memoizedProps:null,r=h.children,fh(f,h)?r=null:b!==null&&fh(f,b)&&(s.flags|=32),s.memoizedState!==null&&(f=df(e,s,q5,null,null,o),zl._currentValue=f),tu(e,s),Zs(e,s,r,o),s.child;case 6:return e===null&&kn&&((e=o=hs)&&(o=L2(o,s.pendingProps,ei),o!==null?(s.stateNode=o,Ks=s,hs=null,e=!0):e=!1),e||ca(s)),null;case 13:return dg(e,s,o);case 4:return Ze(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=Xa(s,null,r,o):Zs(e,s,r,o),s.child;case 11:return ng(e,s,s.type,s.pendingProps,o);case 7:return Zs(e,s,s.pendingProps,o),s.child;case 8:return Zs(e,s,s.pendingProps.children,o),s.child;case 12:return Zs(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,ua(s,s.type,r.value),Zs(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,Ua(s),f=Qs(f),r=r(f),s.flags|=1,Zs(e,s,r,o),s.child;case 14:return sg(e,s,s.type,s.pendingProps,o);case 15:return og(e,s,s.type,s.pendingProps,o);case 19:return hg(e,s,o);case 31:return n2(e,s,o);case 22:return ig(e,s,o,s.pendingProps);case 24:return Ua(s),r=Qs(Rs),e===null?(f=ef(),f===null&&(f=ss,h=Zd(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=o),f=h),s.memoizedState={parent:r,cache:f},nf(s),ua(s,Rs,f)):((e.lanes&o)!==0&&(sf(e,s),gl(s,null,null,o),_l()),f=e.memoizedState,h=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),ua(s,Rs,r)):(r=h.cache,ua(s,Rs,r),r!==f.cache&&Qd(s,[Rs],o,!0))),Zs(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function Fi(e){e.flags|=4}function If(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Hg())e.flags|=8192;else throw Fa=Pc,tf}else e.flags&=-16777217}function pg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!D0(s))if(Hg())e.flags|=8192;else throw Fa=Pc,tf}function su(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?Dt():536870912,e.lanes|=s,Er|=s)}function Sl(e,s){if(!kn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ms(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function o2(e,s,o){var r=s.pendingProps;switch(Fd(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ms(s),null;case 1:return ms(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),Vi(Rs),st(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(_r(s)?Fi(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,qd())),ms(s),null;case 26:var f=s.type,h=s.memoizedState;return e===null?(Fi(s),h!==null?(ms(s),pg(s,h)):(ms(s),If(s,f,null,r,o))):h?h!==e.memoizedState?(Fi(s),ms(s),pg(s,h)):(ms(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&Fi(s),ms(s),If(s,f,e,r,o)),null;case 27:if(rn(s),o=$e.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&Fi(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return ms(s),null}e=K.current,_r(s)?qp(s):(e=w0(f,r,o),s.stateNode=e,Fi(s))}return ms(s),null;case 5:if(rn(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&Fi(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return ms(s),null}if(h=K.current,_r(s))qp(s);else{var b=yu($e.current);switch(h){case 1:h=b.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=b.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=b.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof r.is=="string"?b.createElement("select",{is:r.is}):b.createElement("select"),r.multiple?h.multiple=!0:r.size&&(h.size=r.size);break;default:h=typeof r.is=="string"?b.createElement(f,{is:r.is}):b.createElement(f)}}h[Ut]=s,h[Xn]=r;e:for(b=s.child;b!==null;){if(b.tag===5||b.tag===6)h.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===s)break e;for(;b.sibling===null;){if(b.return===null||b.return===s)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}s.stateNode=h;e:switch(Js(h,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Fi(s)}}return ms(s),If(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&Fi(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=$e.current,_r(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=Ks,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[Ut]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||d0(e.nodeValue,o)),e||ca(s,!0)}else e=yu(e).createTextNode(r),e[Ut]=s,s.stateNode=e}return ms(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=_r(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Ut]=s}else Ha(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ms(s),e=!1}else o=qd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(Ho(s),s):(Ho(s),null);if((s.flags&128)!==0)throw Error(a(558))}return ms(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=_r(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[Ut]=s}else Ha(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ms(s),f=!1}else f=qd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Ho(s),s):(Ho(s),null)}return Ho(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),h=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(h=r.memoizedState.cachePool.pool),h!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),su(s,s.updateQueue),ms(s),null);case 4:return st(),e===null&&rh(s.stateNode.containerInfo),ms(s),null;case 10:return Vi(s.type),ms(s),null;case 19:if(oe(Ms),r=s.memoizedState,r===null)return ms(s),null;if(f=(s.flags&128)!==0,h=r.rendering,h===null)if(f)Sl(r,!1);else{if(ks!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(h=Wc(e),h!==null){for(s.flags|=128,Sl(r,!1),e=h.updateQueue,s.updateQueue=e,su(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)Up(o,e),o=o.sibling;return H(Ms,Ms.current&1|2),kn&&Pi(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&ut()>lu&&(s.flags|=128,f=!0,Sl(r,!1),s.lanes=4194304)}else{if(!f)if(e=Wc(h),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,su(s,e),Sl(r,!0),r.tail===null&&r.tailMode==="hidden"&&!h.alternate&&!kn)return ms(s),null}else 2*ut()-r.renderingStartTime>lu&&o!==536870912&&(s.flags|=128,f=!0,Sl(r,!1),s.lanes=4194304);r.isBackwards?(h.sibling=s.child,s.child=h):(e=r.last,e!==null?e.sibling=h:s.child=h,r.last=h)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ut(),e.sibling=null,o=Ms.current,H(Ms,f?o&1|2:o&1),kn&&Pi(s,r.treeForkCount),e):(ms(s),null);case 22:case 23:return Ho(s),lf(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(ms(s),s.subtreeFlags&6&&(s.flags|=8192)):ms(s),o=s.updateQueue,o!==null&&su(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&oe(Wa),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Vi(Rs),ms(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function i2(e,s){switch(Fd(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return Vi(Rs),st(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return rn(s),null;case 31:if(s.memoizedState!==null){if(Ho(s),s.alternate===null)throw Error(a(340));Ha()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(Ho(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));Ha()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return oe(Ms),null;case 4:return st(),null;case 10:return Vi(s.type),null;case 22:case 23:return Ho(s),lf(),e!==null&&oe(Wa),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return Vi(Rs),null;case 25:return null;default:return null}}function _g(e,s){switch(Fd(s),s.tag){case 3:Vi(Rs),st();break;case 26:case 27:case 5:rn(s);break;case 4:st();break;case 31:s.memoizedState!==null&&Ho(s);break;case 13:Ho(s);break;case 19:oe(Ms);break;case 10:Vi(s.type);break;case 22:case 23:Ho(s),lf(),e!==null&&oe(Wa);break;case 24:Vi(Rs)}}function kl(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var h=o.create,b=o.inst;r=h(),b.destroy=r}o=o.next}while(o!==f)}}catch(j){Yn(s,s.return,j)}}function _a(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var h=f.next;r=h;do{if((r.tag&e)===e){var b=r.inst,j=b.destroy;if(j!==void 0){b.destroy=void 0,f=s;var Y=o,re=j;try{re()}catch(ve){Yn(f,Y,ve)}}}r=r.next}while(r!==h)}}catch(ve){Yn(s,s.return,ve)}}function gg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{r_(s,o)}catch(r){Yn(e,e.return,r)}}}function yg(e,s,o){o.props=Ga(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){Yn(e,s,r)}}function Cl(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){Yn(e,s,f)}}function ji(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Yn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Yn(e,s,f)}else o.current=null}function xg(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Yn(e,e.return,f)}}function Pf(e,s,o){try{var r=e.stateNode;M2(r,e.type,o,s),r[Xn]=s}catch(f){Yn(e,e.return,f)}}function bg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sa(e.type)||e.tag===4}function Hf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vf(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Kt));else if(r!==4&&(r===27&&Sa(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(Vf(e,s,o),e=e.sibling;e!==null;)Vf(e,s,o),e=e.sibling}function ou(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&Sa(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(ou(e,s,o),e=e.sibling;e!==null;)ou(e,s,o),e=e.sibling}function vg(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Js(s,r,o),s[Ut]=e,s[Xn]=o}catch(h){Yn(e,e.return,h)}}var Xi=!1,Bs=!1,Uf=!1,wg=typeof WeakSet=="function"?WeakSet:Set,Fs=null;function a2(e,s){if(e=e.containerInfo,uh=Cu,e=jn(e),Pn(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,h=r.focusNode;r=r.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var b=0,j=-1,Y=-1,re=0,ve=0,Ne=e,ce=null;t:for(;;){for(var me;Ne!==o||f!==0&&Ne.nodeType!==3||(j=b+f),Ne!==h||r!==0&&Ne.nodeType!==3||(Y=b+r),Ne.nodeType===3&&(b+=Ne.nodeValue.length),(me=Ne.firstChild)!==null;)ce=Ne,Ne=me;for(;;){if(Ne===e)break t;if(ce===o&&++re===f&&(j=b),ce===h&&++ve===r&&(Y=b),(me=Ne.nextSibling)!==null)break;Ne=ce,ce=Ne.parentNode}Ne=me}o=j===-1||Y===-1?null:{start:j,end:Y}}else o=null}o=o||{start:0,end:0}}else o=null;for(dh={focusedElem:e,selectionRange:o},Cu=!1,Fs=s;Fs!==null;)if(s=Fs,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,Fs=e;else for(;Fs!==null;){switch(s=Fs,h=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,o=s,f=h.memoizedProps,h=h.memoizedState,r=o.stateNode;try{var vt=Ga(o.type,f);e=r.getSnapshotBeforeUpdate(vt,h),r.__reactInternalSnapshotBeforeUpdate=e}catch(Wt){Yn(o,o.return,Wt)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)mh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,Fs=e;break}Fs=s.return}}function Sg(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:Gi(e,o),r&4&&kl(5,o);break;case 1:if(Gi(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(b){Yn(o,o.return,b)}else{var f=Ga(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Yn(o,o.return,b)}}r&64&&gg(o),r&512&&Cl(o,o.return);break;case 3:if(Gi(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{r_(e,s)}catch(b){Yn(o,o.return,b)}}break;case 27:s===null&&r&4&&vg(o);case 26:case 5:Gi(e,o),s===null&&r&4&&xg(o),r&512&&Cl(o,o.return);break;case 12:Gi(e,o);break;case 31:Gi(e,o),r&4&&jg(e,o);break;case 13:Gi(e,o),r&4&&Mg(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=p2.bind(null,o),B2(e,o))));break;case 22:if(r=o.memoizedState!==null||Xi,!r){s=s!==null&&s.memoizedState!==null||Bs,f=Xi;var h=Bs;Xi=r,(Bs=s)&&!h?Ki(e,o,(o.subtreeFlags&8772)!==0):Gi(e,o),Xi=f,Bs=h}break;case 30:break;default:Gi(e,o)}}function kg(e){var s=e.alternate;s!==null&&(e.alternate=null,kg(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&Ao(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ps=null,ko=!1;function qi(e,s,o){for(o=o.child;o!==null;)Cg(e,s,o),o=o.sibling}function Cg(e,s,o){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Ye,o)}catch{}switch(o.tag){case 26:Bs||ji(o,s),qi(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Bs||ji(o,s);var r=ps,f=ko;Sa(o.type)&&(ps=o.stateNode,ko=!1),qi(e,s,o),Ll(o.stateNode),ps=r,ko=f;break;case 5:Bs||ji(o,s);case 6:if(r=ps,f=ko,ps=null,qi(e,s,o),ps=r,ko=f,ps!==null)if(ko)try{(ps.nodeType===9?ps.body:ps.nodeName==="HTML"?ps.ownerDocument.body:ps).removeChild(o.stateNode)}catch(h){Yn(o,s,h)}else try{ps.removeChild(o.stateNode)}catch(h){Yn(o,s,h)}break;case 18:ps!==null&&(ko?(e=ps,g0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),zr(e)):g0(ps,o.stateNode));break;case 4:r=ps,f=ko,ps=o.stateNode.containerInfo,ko=!0,qi(e,s,o),ps=r,ko=f;break;case 0:case 11:case 14:case 15:_a(2,o,s),Bs||_a(4,o,s),qi(e,s,o);break;case 1:Bs||(ji(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&yg(o,s,r)),qi(e,s,o);break;case 21:qi(e,s,o);break;case 22:Bs=(r=Bs)||o.memoizedState!==null,qi(e,s,o),Bs=r;break;default:qi(e,s,o)}}function jg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zr(e)}catch(o){Yn(s,s.return,o)}}}function Mg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zr(e)}catch(o){Yn(s,s.return,o)}}function r2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new wg),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new wg),s;default:throw Error(a(435,e.tag))}}function iu(e,s){var o=r2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=_2.bind(null,e,r);r.then(f,f)}})}function Co(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],h=e,b=s,j=b;e:for(;j!==null;){switch(j.tag){case 27:if(Sa(j.type)){ps=j.stateNode,ko=!1;break e}break;case 5:ps=j.stateNode,ko=!1;break e;case 3:case 4:ps=j.stateNode.containerInfo,ko=!0;break e}j=j.return}if(ps===null)throw Error(a(160));Cg(h,b,f),ps=null,ko=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)Tg(s,e),s=s.sibling}var hi=null;function Tg(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Co(s,e),jo(e),r&4&&(_a(3,e,e.return),kl(3,e),_a(5,e,e.return));break;case 1:Co(s,e),jo(e),r&512&&(Bs||o===null||ji(o,o.return)),r&64&&Xi&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=hi;if(Co(s,e),jo(e),r&512&&(Bs||o===null||ji(o,o.return)),r&4){var h=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":h=f.getElementsByTagName("title")[0],(!h||h[to]||h[Ut]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(r),f.head.insertBefore(h,f.querySelector("head > title"))),Js(h,r,o),h[Ut]=e,qn(h),r=h;break e;case"link":var b=T0("link","href",f).get(r+(o.href||""));if(b){for(var j=0;j<b.length;j++)if(h=b[j],h.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&h.getAttribute("rel")===(o.rel==null?null:o.rel)&&h.getAttribute("title")===(o.title==null?null:o.title)&&h.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){b.splice(j,1);break t}}h=f.createElement(r),Js(h,r,o),f.head.appendChild(h);break;case"meta":if(b=T0("meta","content",f).get(r+(o.content||""))){for(j=0;j<b.length;j++)if(h=b[j],h.getAttribute("content")===(o.content==null?null:""+o.content)&&h.getAttribute("name")===(o.name==null?null:o.name)&&h.getAttribute("property")===(o.property==null?null:o.property)&&h.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&h.getAttribute("charset")===(o.charSet==null?null:o.charSet)){b.splice(j,1);break t}}h=f.createElement(r),Js(h,r,o),f.head.appendChild(h);break;default:throw Error(a(468,r))}h[Ut]=e,qn(h),r=h}e.stateNode=r}else E0(f,e.type,e.stateNode);else e.stateNode=M0(f,r,e.memoizedProps);else h!==r?(h===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):h.count--,r===null?E0(f,e.type,e.stateNode):M0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Pf(e,e.memoizedProps,o.memoizedProps)}break;case 27:Co(s,e),jo(e),r&512&&(Bs||o===null||ji(o,o.return)),o!==null&&r&4&&Pf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(Co(s,e),jo(e),r&512&&(Bs||o===null||ji(o,o.return)),e.flags&32){f=e.stateNode;try{ct(f,"")}catch(vt){Yn(e,e.return,vt)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,Pf(e,f,o!==null?o.memoizedProps:f)),r&1024&&(Uf=!0);break;case 6:if(Co(s,e),jo(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(vt){Yn(e,e.return,vt)}}break;case 3:if(vu=null,f=hi,hi=xu(s.containerInfo),Co(s,e),hi=f,jo(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{zr(s.containerInfo)}catch(vt){Yn(e,e.return,vt)}Uf&&(Uf=!1,Eg(e));break;case 4:r=hi,hi=xu(e.stateNode.containerInfo),Co(s,e),jo(e),hi=r;break;case 12:Co(s,e),jo(e);break;case 31:Co(s,e),jo(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,iu(e,r)));break;case 13:Co(s,e),jo(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(ru=ut()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,iu(e,r)));break;case 22:f=e.memoizedState!==null;var Y=o!==null&&o.memoizedState!==null,re=Xi,ve=Bs;if(Xi=re||f,Bs=ve||Y,Co(s,e),Bs=ve,Xi=re,jo(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||Y||Xi||Bs||Ka(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){Y=o=s;try{if(h=Y.stateNode,f)b=h.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{j=Y.stateNode;var Ne=Y.memoizedProps.style,ce=Ne!=null&&Ne.hasOwnProperty("display")?Ne.display:null;j.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(vt){Yn(Y,Y.return,vt)}}}else if(s.tag===6){if(o===null){Y=s;try{Y.stateNode.nodeValue=f?"":Y.memoizedProps}catch(vt){Yn(Y,Y.return,vt)}}}else if(s.tag===18){if(o===null){Y=s;try{var me=Y.stateNode;f?y0(me,!0):y0(Y.stateNode,!1)}catch(vt){Yn(Y,Y.return,vt)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,iu(e,o))));break;case 19:Co(s,e),jo(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,iu(e,r)));break;case 30:break;case 21:break;default:Co(s,e),jo(e)}}function jo(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(bg(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,h=Hf(e);ou(e,h,f);break;case 5:var b=o.stateNode;o.flags&32&&(ct(b,""),o.flags&=-33);var j=Hf(e);ou(e,j,b);break;case 3:case 4:var Y=o.stateNode.containerInfo,re=Hf(e);Vf(e,re,Y);break;default:throw Error(a(161))}}catch(ve){Yn(e,e.return,ve)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Eg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;Eg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function Gi(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Sg(e,s.alternate,s),s=s.sibling}function Ka(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:_a(4,s,s.return),Ka(s);break;case 1:ji(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&yg(s,s.return,o),Ka(s);break;case 27:Ll(s.stateNode);case 26:case 5:ji(s,s.return),Ka(s);break;case 22:s.memoizedState===null&&Ka(s);break;case 30:Ka(s);break;default:Ka(s)}e=e.sibling}}function Ki(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,h=s,b=h.flags;switch(h.tag){case 0:case 11:case 15:Ki(f,h,o),kl(4,h);break;case 1:if(Ki(f,h,o),r=h,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(re){Yn(r,r.return,re)}if(r=h,f=r.updateQueue,f!==null){var j=r.stateNode;try{var Y=f.shared.hiddenCallbacks;if(Y!==null)for(f.shared.hiddenCallbacks=null,f=0;f<Y.length;f++)a_(Y[f],j)}catch(re){Yn(r,r.return,re)}}o&&b&64&&gg(h),Cl(h,h.return);break;case 27:vg(h);case 26:case 5:Ki(f,h,o),o&&r===null&&b&4&&xg(h),Cl(h,h.return);break;case 12:Ki(f,h,o);break;case 31:Ki(f,h,o),o&&b&4&&jg(f,h);break;case 13:Ki(f,h,o),o&&b&4&&Mg(f,h);break;case 22:h.memoizedState===null&&Ki(f,h,o),Cl(h,h.return);break;case 30:break;default:Ki(f,h,o)}s=s.sibling}}function Wf(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&dl(o))}function Yf(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&dl(e))}function mi(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Dg(e,s,o,r),s=s.sibling}function Dg(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:mi(e,s,o,r),f&2048&&kl(9,s);break;case 1:mi(e,s,o,r);break;case 3:mi(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&dl(e)));break;case 12:if(f&2048){mi(e,s,o,r),e=s.stateNode;try{var h=s.memoizedProps,b=h.id,j=h.onPostCommit;typeof j=="function"&&j(b,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(Y){Yn(s,s.return,Y)}}else mi(e,s,o,r);break;case 31:mi(e,s,o,r);break;case 13:mi(e,s,o,r);break;case 23:break;case 22:h=s.stateNode,b=s.alternate,s.memoizedState!==null?h._visibility&2?mi(e,s,o,r):jl(e,s):h._visibility&2?mi(e,s,o,r):(h._visibility|=2,jr(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Wf(b,s);break;case 24:mi(e,s,o,r),f&2048&&Yf(s.alternate,s);break;default:mi(e,s,o,r)}}function jr(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var h=e,b=s,j=o,Y=r,re=b.flags;switch(b.tag){case 0:case 11:case 15:jr(h,b,j,Y,f),kl(8,b);break;case 23:break;case 22:var ve=b.stateNode;b.memoizedState!==null?ve._visibility&2?jr(h,b,j,Y,f):jl(h,b):(ve._visibility|=2,jr(h,b,j,Y,f)),f&&re&2048&&Wf(b.alternate,b);break;case 24:jr(h,b,j,Y,f),f&&re&2048&&Yf(b.alternate,b);break;default:jr(h,b,j,Y,f)}s=s.sibling}}function jl(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:jl(o,r),f&2048&&Wf(r.alternate,r);break;case 24:jl(o,r),f&2048&&Yf(r.alternate,r);break;default:jl(o,r)}s=s.sibling}}var Ml=8192;function Mr(e,s,o){if(e.subtreeFlags&Ml)for(e=e.child;e!==null;)Ag(e,s,o),e=e.sibling}function Ag(e,s,o){switch(e.tag){case 26:Mr(e,s,o),e.flags&Ml&&e.memoizedState!==null&&X2(o,hi,e.memoizedState,e.memoizedProps);break;case 5:Mr(e,s,o);break;case 3:case 4:var r=hi;hi=xu(e.stateNode.containerInfo),Mr(e,s,o),hi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ml,Ml=16777216,Mr(e,s,o),Ml=r):Mr(e,s,o));break;default:Mr(e,s,o)}}function Rg(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Tl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];Fs=r,Lg(r,e)}Rg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ng(e),e=e.sibling}function Ng(e){switch(e.tag){case 0:case 11:case 15:Tl(e),e.flags&2048&&_a(9,e,e.return);break;case 3:Tl(e);break;case 12:Tl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,au(e)):Tl(e);break;default:Tl(e)}}function au(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];Fs=r,Lg(r,e)}Rg(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:_a(8,s,s.return),au(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,au(s));break;default:au(s)}e=e.sibling}}function Lg(e,s){for(;Fs!==null;){var o=Fs;switch(o.tag){case 0:case 11:case 15:_a(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:dl(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,Fs=r;else e:for(o=e;Fs!==null;){r=Fs;var f=r.sibling,h=r.return;if(kg(r),r===o){Fs=null;break e}if(f!==null){f.return=h,Fs=f;break e}Fs=h}}}var l2={getCacheForType:function(e){var s=Qs(Rs),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return Qs(Rs).controller.signal}},c2=typeof WeakMap=="function"?WeakMap:Map,$n=0,ss=null,_n=null,vn=0,Wn=0,Vo=null,ga=!1,Tr=!1,Ff=!1,Qi=0,ks=0,ya=0,Qa=0,Xf=0,Uo=0,Er=0,El=null,Mo=null,qf=!1,ru=0,Bg=0,lu=1/0,cu=null,xa=null,Hs=0,ba=null,Dr=null,Zi=0,Gf=0,Kf=null,Og=null,Dl=0,Qf=null;function Wo(){return($n&2)!==0&&vn!==0?vn&-vn:P.T!==null?sh():Vn()}function zg(){if(Uo===0)if((vn&536870912)===0||kn){var e=Vt;Vt<<=1,(Vt&3932160)===0&&(Vt=262144),Uo=e}else Uo=536870912;return e=Po.current,e!==null&&(e.flags|=32),Uo}function To(e,s,o){(e===ss&&(Wn===2||Wn===9)||e.cancelPendingCommit!==null)&&(Ar(e,0),va(e,vn,Uo,!1)),yt(e,o),(($n&2)===0||e!==ss)&&(e===ss&&(($n&2)===0&&(Qa|=o),ks===4&&va(e,vn,Uo,!1)),Mi(e))}function $g(e,s,o){if(($n&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||qt(e,s),f=r?f2(e,s):Jf(e,s,!0),h=r;do{if(f===0){Tr&&!r&&va(e,s,0,!1);break}else{if(o=e.current.alternate,h&&!u2(o)){f=Jf(e,s,!1),h=!1;continue}if(f===2){if(h=s,e.errorRecoveryDisabledLanes&h)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){s=b;e:{var j=e;f=El;var Y=j.current.memoizedState.isDehydrated;if(Y&&(Ar(j,b).flags|=256),b=Jf(j,b,!1),b!==2){if(Ff&&!Y){j.errorRecoveryDisabledLanes|=h,Qa|=h,f=4;break e}h=Mo,Mo=f,h!==null&&(Mo===null?Mo=h:Mo.push.apply(Mo,h))}f=b}if(h=!1,f!==2)continue}}if(f===1){Ar(e,0),va(e,s,0,!0);break}e:{switch(r=e,h=f,h){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:va(r,s,Uo,!ga);break e;case 2:Mo=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=ru+300-ut(),10<f)){if(va(r,s,Uo,!ga),nt(r,0,!0)!==0)break e;Zi=s,r.timeoutHandle=p0(Ig.bind(null,r,o,Mo,cu,qf,s,Uo,Qa,Er,ga,h,"Throttled",-0,0),f);break e}Ig(r,o,Mo,cu,qf,s,Uo,Qa,Er,ga,h,null,-0,0)}}break}while(!0);Mi(e)}function Ig(e,s,o,r,f,h,b,j,Y,re,ve,Ne,ce,me){if(e.timeoutHandle=-1,Ne=s.subtreeFlags,Ne&8192||(Ne&16785408)===16785408){Ne={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Kt},Ag(s,h,Ne);var vt=(h&62914560)===h?ru-ut():(h&4194048)===h?Bg-ut():0;if(vt=q2(Ne,vt),vt!==null){Zi=h,e.cancelPendingCommit=vt(Xg.bind(null,e,s,h,o,r,f,b,j,Y,ve,Ne,null,ce,me)),va(e,h,b,!re);return}}Xg(e,s,h,o,r,f,b,j,Y)}function u2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],h=f.getSnapshot;f=f.value;try{if(!pt(h(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function va(e,s,o,r){s&=~Xf,s&=~Qa,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var h=31-_t(f),b=1<<h;r[h]=-1,f&=~b}o!==0&&xn(e,o,s)}function uu(){return($n&6)===0?(Al(0),!1):!0}function Zf(){if(_n!==null){if(Wn===0)var e=_n.return;else e=_n,Hi=Va=null,mf(e),vr=null,hl=0,e=_n;for(;e!==null;)_g(e.alternate,e),e=e.return;_n=null}}function Ar(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,D2(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),Zi=0,Zf(),ss=e,_n=o=Ii(e.current,null),vn=s,Wn=0,Vo=null,ga=!1,Tr=qt(e,s),Ff=!1,Er=Uo=Xf=Qa=ya=ks=0,Mo=El=null,qf=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-_t(r),h=1<<f;s|=e[f],r&=~h}return Qi=s,Ac(),o}function Pg(e,s){ln=null,P.H=vl,s===br||s===Ic?(s=n_(),Wn=3):s===tf?(s=n_(),Wn=4):Wn=s===Df?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Vo=s,_n===null&&(ks=1,Jc(e,Qo(s,e.current)))}function Hg(){var e=Po.current;return e===null?!0:(vn&4194048)===vn?ti===null:(vn&62914560)===vn||(vn&536870912)!==0?e===ti:!1}function Vg(){var e=P.H;return P.H=vl,e===null?vl:e}function Ug(){var e=P.A;return P.A=l2,e}function du(){ks=4,ga||(vn&4194048)!==vn&&Po.current!==null||(Tr=!0),(ya&134217727)===0&&(Qa&134217727)===0||ss===null||va(ss,vn,Uo,!1)}function Jf(e,s,o){var r=$n;$n|=2;var f=Vg(),h=Ug();(ss!==e||vn!==s)&&(cu=null,Ar(e,s)),s=!1;var b=ks;e:do try{if(Wn!==0&&_n!==null){var j=_n,Y=Vo;switch(Wn){case 8:Zf(),b=6;break e;case 3:case 2:case 9:case 6:Po.current===null&&(s=!0);var re=Wn;if(Wn=0,Vo=null,Rr(e,j,Y,re),o&&Tr){b=0;break e}break;default:re=Wn,Wn=0,Vo=null,Rr(e,j,Y,re)}}d2(),b=ks;break}catch(ve){Pg(e,ve)}while(!0);return s&&e.shellSuspendCounter++,Hi=Va=null,$n=r,P.H=f,P.A=h,_n===null&&(ss=null,vn=0,Ac()),b}function d2(){for(;_n!==null;)Wg(_n)}function f2(e,s){var o=$n;$n|=2;var r=Vg(),f=Ug();ss!==e||vn!==s?(cu=null,lu=ut()+500,Ar(e,s)):Tr=qt(e,s);e:do try{if(Wn!==0&&_n!==null){s=_n;var h=Vo;t:switch(Wn){case 1:Wn=0,Vo=null,Rr(e,s,h,1);break;case 2:case 9:if(e_(h)){Wn=0,Vo=null,Yg(s);break}s=function(){Wn!==2&&Wn!==9||ss!==e||(Wn=7),Mi(e)},h.then(s,s);break e;case 3:Wn=7;break e;case 4:Wn=5;break e;case 7:e_(h)?(Wn=0,Vo=null,Yg(s)):(Wn=0,Vo=null,Rr(e,s,h,7));break;case 5:var b=null;switch(_n.tag){case 26:b=_n.memoizedState;case 5:case 27:var j=_n;if(b?D0(b):j.stateNode.complete){Wn=0,Vo=null;var Y=j.sibling;if(Y!==null)_n=Y;else{var re=j.return;re!==null?(_n=re,fu(re)):_n=null}break t}}Wn=0,Vo=null,Rr(e,s,h,5);break;case 6:Wn=0,Vo=null,Rr(e,s,h,6);break;case 8:Zf(),ks=6;break e;default:throw Error(a(462))}}h2();break}catch(ve){Pg(e,ve)}while(!0);return Hi=Va=null,P.H=r,P.A=f,$n=o,_n!==null?0:(ss=null,vn=0,Ac(),ks)}function h2(){for(;_n!==null&&!it();)Wg(_n)}function Wg(e){var s=mg(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,s===null?fu(e):_n=s}function Yg(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=lg(o,s,s.pendingProps,s.type,void 0,vn);break;case 11:s=lg(o,s,s.pendingProps,s.type.render,s.ref,vn);break;case 5:mf(s);default:_g(o,s),s=_n=Up(s,Qi),s=mg(o,s,Qi)}e.memoizedProps=e.pendingProps,s===null?fu(e):_n=s}function Rr(e,s,o,r){Hi=Va=null,mf(s),vr=null,hl=0;var f=s.return;try{if(t2(e,f,s,o,vn)){ks=1,Jc(e,Qo(o,e.current)),_n=null;return}}catch(h){if(f!==null)throw _n=f,h;ks=1,Jc(e,Qo(o,e.current)),_n=null;return}s.flags&32768?(kn||r===1?e=!0:Tr||(vn&536870912)!==0?e=!1:(ga=e=!0,(r===2||r===9||r===3||r===6)&&(r=Po.current,r!==null&&r.tag===13&&(r.flags|=16384))),Fg(s,e)):fu(s)}function fu(e){var s=e;do{if((s.flags&32768)!==0){Fg(s,ga);return}e=s.return;var o=o2(s.alternate,s,Qi);if(o!==null){_n=o;return}if(s=s.sibling,s!==null){_n=s;return}_n=s=e}while(s!==null);ks===0&&(ks=5)}function Fg(e,s){do{var o=i2(e.alternate,e);if(o!==null){o.flags&=32767,_n=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){_n=e;return}_n=e=o}while(e!==null);ks=6,_n=null}function Xg(e,s,o,r,f,h,b,j,Y){e.cancelPendingCommit=null;do hu();while(Hs!==0);if(($n&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(h=s.lanes|s.childLanes,h|=Pd,Zt(e,o,h,b,j,Y),e===ss&&(_n=ss=null,vn=0),Dr=s,ba=e,Zi=o,Gf=h,Kf=f,Og=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,g2(qe,function(){return Zg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,f=he.p,he.p=2,b=$n,$n|=4;try{a2(e,s,o)}finally{$n=b,he.p=f,P.T=r}}Hs=1,qg(),Gg(),Kg()}}function qg(){if(Hs===1){Hs=0;var e=ba,s=Dr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=P.T,P.T=null;var r=he.p;he.p=2;var f=$n;$n|=4;try{Tg(s,e);var h=dh,b=jn(e.containerInfo),j=h.focusedElem,Y=h.selectionRange;if(b!==j&&j&&j.ownerDocument&&ds(j.ownerDocument.documentElement,j)){if(Y!==null&&Pn(j)){var re=Y.start,ve=Y.end;if(ve===void 0&&(ve=re),"selectionStart"in j)j.selectionStart=re,j.selectionEnd=Math.min(ve,j.value.length);else{var Ne=j.ownerDocument||document,ce=Ne&&Ne.defaultView||window;if(ce.getSelection){var me=ce.getSelection(),vt=j.textContent.length,Wt=Math.min(Y.start,vt),Zn=Y.end===void 0?Wt:Math.min(Y.end,vt);!me.extend&&Wt>Zn&&(b=Zn,Zn=Wt,Wt=b);var ne=us(j,Wt),Q=us(j,Zn);if(ne&&Q&&(me.rangeCount!==1||me.anchorNode!==ne.node||me.anchorOffset!==ne.offset||me.focusNode!==Q.node||me.focusOffset!==Q.offset)){var ie=Ne.createRange();ie.setStart(ne.node,ne.offset),me.removeAllRanges(),Wt>Zn?(me.addRange(ie),me.extend(Q.node,Q.offset)):(ie.setEnd(Q.node,Q.offset),me.addRange(ie))}}}}for(Ne=[],me=j;me=me.parentNode;)me.nodeType===1&&Ne.push({element:me,left:me.scrollLeft,top:me.scrollTop});for(typeof j.focus=="function"&&j.focus(),j=0;j<Ne.length;j++){var De=Ne[j];De.element.scrollLeft=De.left,De.element.scrollTop=De.top}}Cu=!!uh,dh=uh=null}finally{$n=f,he.p=r,P.T=o}}e.current=s,Hs=2}}function Gg(){if(Hs===2){Hs=0;var e=ba,s=Dr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=P.T,P.T=null;var r=he.p;he.p=2;var f=$n;$n|=4;try{Sg(e,s.alternate,s)}finally{$n=f,he.p=r,P.T=o}}Hs=3}}function Kg(){if(Hs===4||Hs===3){Hs=0,Ae();var e=ba,s=Dr,o=Zi,r=Og;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Hs=5:(Hs=0,Dr=ba=null,Qg(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(xa=null),xs(o),s=s.stateNode,He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Ye,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=P.T,f=he.p,he.p=2,P.T=null;try{for(var h=e.onRecoverableError,b=0;b<r.length;b++){var j=r[b];h(j.value,{componentStack:j.stack})}}finally{P.T=s,he.p=f}}(Zi&3)!==0&&hu(),Mi(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===Qf?Dl++:(Dl=0,Qf=e):Dl=0,Al(0)}}function Qg(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,dl(s)))}function hu(){return qg(),Gg(),Kg(),Zg()}function Zg(){if(Hs!==5)return!1;var e=ba,s=Gf;Gf=0;var o=xs(Zi),r=P.T,f=he.p;try{he.p=32>o?32:o,P.T=null,o=Kf,Kf=null;var h=ba,b=Zi;if(Hs=0,Dr=ba=null,Zi=0,($n&6)!==0)throw Error(a(331));var j=$n;if($n|=4,Ng(h.current),Dg(h,h.current,b,o),$n=j,Al(0,!1),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Ye,h)}catch{}return!0}finally{he.p=f,P.T=r,Qg(e,s)}}function Jg(e,s,o){s=Qo(o,s),s=Ef(e.stateNode,s,2),e=ha(e,s,2),e!==null&&(yt(e,2),Mi(e))}function Yn(e,s,o){if(e.tag===3)Jg(e,e,o);else for(;s!==null;){if(s.tag===3){Jg(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xa===null||!xa.has(r))){e=Qo(o,e),o=eg(2),r=ha(s,o,2),r!==null&&(tg(o,r,s,e),yt(r,2),Mi(r));break}}s=s.return}}function eh(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new c2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(Ff=!0,f.add(o),e=m2.bind(null,e,s,o),s.then(e,e))}function m2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,ss===e&&(vn&o)===o&&(ks===4||ks===3&&(vn&62914560)===vn&&300>ut()-ru?($n&2)===0&&Ar(e,0):Xf|=o,Er===vn&&(Er=0)),Mi(e)}function e0(e,s){s===0&&(s=Dt()),e=Ia(e,s),e!==null&&(yt(e,s),Mi(e))}function p2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),e0(e,o)}function _2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),e0(e,o)}function g2(e,s){return ot(e,s)}var mu=null,Nr=null,th=!1,pu=!1,nh=!1,wa=0;function Mi(e){e!==Nr&&e.next===null&&(Nr===null?mu=Nr=e:Nr=Nr.next=e),pu=!0,th||(th=!0,x2())}function Al(e,s){if(!nh&&pu){nh=!0;do for(var o=!1,r=mu;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var h=0;else{var b=r.suspendedLanes,j=r.pingedLanes;h=(1<<31-_t(42|e)+1)-1,h&=f&~(b&~j),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(o=!0,o0(r,h))}else h=vn,h=nt(r,r===ss?h:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(h&3)===0||qt(r,h)||(o=!0,o0(r,h));r=r.next}while(o);nh=!1}}function y2(){t0()}function t0(){pu=th=!1;var e=0;wa!==0&&E2()&&(e=wa);for(var s=ut(),o=null,r=mu;r!==null;){var f=r.next,h=n0(r,s);h===0?(r.next=null,o===null?mu=f:o.next=f,f===null&&(Nr=o)):(o=r,(e!==0||(h&3)!==0)&&(pu=!0)),r=f}Hs!==0&&Hs!==5||Al(e),wa!==0&&(wa=0)}function n0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var b=31-_t(h),j=1<<b,Y=f[b];Y===-1?((j&o)===0||(j&r)!==0)&&(f[b]=Yt(j,s)):Y<=s&&(e.expiredLanes|=j),h&=~j}if(s=ss,o=vn,o=nt(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&(Wn===2||Wn===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Je(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||qt(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&Je(r),xs(o)){case 2:case 8:o=Ht;break;case 32:o=qe;break;case 268435456:o=G;break;default:o=qe}return r=s0.bind(null,e),o=ot(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&Je(r),e.callbackPriority=2,e.callbackNode=null,2}function s0(e,s){if(Hs!==0&&Hs!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(hu()&&e.callbackNode!==o)return null;var r=vn;return r=nt(e,e===ss?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:($g(e,r,s),n0(e,ut()),e.callbackNode!=null&&e.callbackNode===o?s0.bind(null,e):null)}function o0(e,s){if(hu())return null;$g(e,s,!0)}function x2(){A2(function(){($n&6)!==0?ot($t,y2):t0()})}function sh(){if(wa===0){var e=yr;e===0&&(e=Ve,Ve<<=1,(Ve&261888)===0&&(Ve=256)),wa=e}return wa}function i0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Et(""+e)}function a0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function b2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var h=i0((f[Xn]||null).action),b=r.submitter;b&&(s=(s=b[Xn]||null)?i0(s.formAction):b.getAttribute("formAction"),s!==null&&(h=s,b=null));var j=new zn("action","action",null,r,f);e.push({event:j,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(wa!==0){var Y=b?a0(f,b):new FormData(f);Sf(o,{pending:!0,data:Y,method:f.method,action:h},null,Y)}}else typeof h=="function"&&(j.preventDefault(),Y=b?a0(f,b):new FormData(f),Sf(o,{pending:!0,data:Y,method:f.method,action:h},h,Y))},currentTarget:f}]})}}for(var oh=0;oh<Id.length;oh++){var ih=Id[oh],v2=ih.toLowerCase(),w2=ih[0].toUpperCase()+ih.slice(1);fi(v2,"on"+w2)}fi(di,"onAnimationEnd"),fi(Si,"onAnimationIteration"),fi(Ec,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(Od,"onTransitionRun"),fi(zd,"onTransitionStart"),fi($d,"onTransitionCancel"),fi(Pp,"onTransitionEnd"),ls("onMouseEnter",["mouseout","mouseover"]),ls("onMouseLeave",["mouseout","mouseover"]),ls("onPointerEnter",["pointerout","pointerover"]),ls("onPointerLeave",["pointerout","pointerover"]),Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rl));function r0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var h=void 0;if(s)for(var b=r.length-1;0<=b;b--){var j=r[b],Y=j.instance,re=j.currentTarget;if(j=j.listener,Y!==h&&f.isPropagationStopped())break e;h=j,f.currentTarget=re;try{h(f)}catch(ve){Dc(ve)}f.currentTarget=null,h=Y}else for(b=0;b<r.length;b++){if(j=r[b],Y=j.instance,re=j.currentTarget,j=j.listener,Y!==h&&f.isPropagationStopped())break e;h=j,f.currentTarget=re;try{h(f)}catch(ve){Dc(ve)}f.currentTarget=null,h=Y}}}}function gn(e,s){var o=s[_s];o===void 0&&(o=s[_s]=new Set);var r=e+"__bubble";o.has(r)||(l0(s,e,2,!1),o.add(r))}function ah(e,s,o){var r=0;s&&(r|=4),l0(o,e,r,s)}var _u="_reactListening"+Math.random().toString(36).slice(2);function rh(e){if(!e[_u]){e[_u]=!0,Ro.forEach(function(o){o!=="selectionchange"&&(S2.has(o)||ah(o,!1,e),ah(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[_u]||(s[_u]=!0,ah("selectionchange",!1,s))}}function l0(e,s,o,r){switch(z0(s)){case 2:var f=Q2;break;case 8:f=Z2;break;default:f=wh}o=f.bind(null,s,o,e),f=void 0,!Dn||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function lh(e,s,o,r,f){var h=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var b=r.tag;if(b===3||b===4){var j=r.stateNode.containerInfo;if(j===f)break;if(b===4)for(b=r.return;b!==null;){var Y=b.tag;if((Y===3||Y===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;j!==null;){if(b=no(j),b===null)return;if(Y=b.tag,Y===5||Y===6||Y===26||Y===27){r=h=b;continue e}j=j.parentNode}}r=r.return}At(function(){var re=h,ve=We(o),Ne=[];e:{var ce=Hp.get(e);if(ce!==void 0){var me=zn,vt=e;switch(e){case"keypress":if(as(o)===0)break e;case"keydown":case"keyup":me=bn;break;case"focusin":vt="focus",me=ro;break;case"focusout":vt="blur",me=ro;break;case"beforeblur":case"afterblur":me=ro;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=Oo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=ys;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=cr;break;case di:case Si:case Ec:me=sa;break;case Pp:me=zo;break;case"scroll":case"scrollend":me=ao;break;case"wheel":me=sl;break;case"copy":case"cut":case"paste":me=$a;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=Is;break;case"toggle":case"beforetoggle":me=ur}var Wt=(s&4)!==0,Zn=!Wt&&(e==="scroll"||e==="scrollend"),ne=Wt?ce!==null?ce+"Capture":null:ce;Wt=[];for(var Q=re,ie;Q!==null;){var De=Q;if(ie=De.stateNode,De=De.tag,De!==5&&De!==26&&De!==27||ie===null||ne===null||(De=ht(Q,ne),De!=null&&Wt.push(Nl(Q,De,ie))),Zn)break;Q=Q.return}0<Wt.length&&(ce=new me(ce,vt,null,o,ve),Ne.push({event:ce,listeners:Wt}))}}if((s&7)===0){e:{if(ce=e==="mouseover"||e==="pointerover",me=e==="mouseout"||e==="pointerout",ce&&o!==ze&&(vt=o.relatedTarget||o.fromElement)&&(no(vt)||vt[Pe]))break e;if((me||ce)&&(ce=ve.window===ve?ve:(ce=ve.ownerDocument)?ce.defaultView||ce.parentWindow:window,me?(vt=o.relatedTarget||o.toElement,me=re,vt=vt?no(vt):null,vt!==null&&(Zn=u(vt),Wt=vt.tag,vt!==Zn||Wt!==5&&Wt!==27&&Wt!==6)&&(vt=null)):(me=null,vt=re),me!==vt)){if(Wt=Oo,De="onMouseLeave",ne="onMouseEnter",Q="mouse",(e==="pointerout"||e==="pointerover")&&(Wt=Is,De="onPointerLeave",ne="onPointerEnter",Q="pointer"),Zn=me==null?ce:ho(me),ie=vt==null?ce:ho(vt),ce=new Wt(De,Q+"leave",me,o,ve),ce.target=Zn,ce.relatedTarget=ie,De=null,no(ve)===re&&(Wt=new Wt(ne,Q+"enter",vt,o,ve),Wt.target=ie,Wt.relatedTarget=Zn,De=Wt),Zn=De,me&&vt)t:{for(Wt=k2,ne=me,Q=vt,ie=0,De=ne;De;De=Wt(De))ie++;De=0;for(var Bt=Q;Bt;Bt=Wt(Bt))De++;for(;0<ie-De;)ne=Wt(ne),ie--;for(;0<De-ie;)Q=Wt(Q),De--;for(;ie--;){if(ne===Q||Q!==null&&ne===Q.alternate){Wt=ne;break t}ne=Wt(ne),Q=Wt(Q)}Wt=null}else Wt=null;me!==null&&c0(Ne,ce,me,Wt,!1),vt!==null&&Zn!==null&&c0(Ne,Zn,vt,Wt,!0)}}e:{if(ce=re?ho(re):window,me=ce.nodeName&&ce.nodeName.toLowerCase(),me==="select"||me==="input"&&ce.type==="file")var Rn=O;else if(rl(ce))if(F)Rn=tn;else{Rn=mt;var jt=et}else me=ce.nodeName,!me||me.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?re&&xe(re.elementType)&&(Rn=O):Rn=Mt;if(Rn&&(Rn=Rn(e,re))){ll(Ne,Rn,o,ve);break e}jt&&jt(e,ce,re),e==="focusout"&&re&&ce.type==="number"&&re.memoizedProps.value!=null&&Me(ce,"number",ce.value)}switch(jt=re?ho(re):window,e){case"focusin":(rl(jt)||jt.contentEditable==="true")&&(Qt=jt,fs=re,Tn=null);break;case"focusout":Tn=fs=Qt=null;break;case"mousedown":Ps=!0;break;case"contextmenu":case"mouseup":case"dragend":Ps=!1,lo(Ne,o,ve);break;case"selectionchange":if(Ft)break;case"keydown":case"keyup":lo(Ne,o,ve)}var cn;if(il)e:{switch(e){case"compositionstart":var wn="onCompositionStart";break e;case"compositionend":wn="onCompositionEnd";break e;case"compositionupdate":wn="onCompositionUpdate";break e}wn=void 0}else $i?zi(e,o)&&(wn="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(wn="onCompositionStart");wn&&(dr&&o.locale!=="ko"&&($i||wn!=="onCompositionStart"?wn==="onCompositionEnd"&&$i&&(cn=Un()):(Tt=ve,un="value"in Tt?Tt.value:Tt.textContent,$i=!0)),jt=gu(re,wn),0<jt.length&&(wn=new le(wn,e,null,o,ve),Ne.push({event:wn,listeners:jt}),cn?wn.data=cn:(cn=kc(o),cn!==null&&(wn.data=cn)))),(cn=al?Cc(e,o):jc(e,o))&&(wn=gu(re,"onBeforeInput"),0<wn.length&&(jt=new le("onBeforeInput","beforeinput",null,o,ve),Ne.push({event:jt,listeners:wn}),jt.data=cn)),b2(Ne,e,re,o,ve)}r0(Ne,s)})}function Nl(e,s,o){return{instance:e,listener:s,currentTarget:o}}function gu(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=ht(e,o),f!=null&&r.unshift(Nl(e,f,h)),f=ht(e,s),f!=null&&r.push(Nl(e,f,h))),e.tag===3)return r;e=e.return}return[]}function k2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function c0(e,s,o,r,f){for(var h=s._reactName,b=[];o!==null&&o!==r;){var j=o,Y=j.alternate,re=j.stateNode;if(j=j.tag,Y!==null&&Y===r)break;j!==5&&j!==26&&j!==27||re===null||(Y=re,f?(re=ht(o,h),re!=null&&b.unshift(Nl(o,re,Y))):f||(re=ht(o,h),re!=null&&b.push(Nl(o,re,Y)))),o=o.return}b.length!==0&&e.push({event:s,listeners:b})}var C2=/\r\n?/g,j2=/\u0000|\uFFFD/g;function u0(e){return(typeof e=="string"?e:""+e).replace(C2,`
`).replace(j2,"")}function d0(e,s){return s=u0(s),u0(e)===s}function Qn(e,s,o,r,f,h){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||ct(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&ct(e,""+r);break;case"className":gs(e,"class",r);break;case"tabIndex":gs(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":gs(e,o,r);break;case"style":_e(e,r,h);break;case"data":if(s!=="object"){gs(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Et(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(o==="formAction"?(s!=="input"&&Qn(e,s,"name",f.name,f,null),Qn(e,s,"formEncType",f.formEncType,f,null),Qn(e,s,"formMethod",f.formMethod,f,null),Qn(e,s,"formTarget",f.formTarget,f,null)):(Qn(e,s,"encType",f.encType,f,null),Qn(e,s,"method",f.method,f,null),Qn(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Et(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=Kt);break;case"onScroll":r!=null&&gn("scroll",e);break;case"onScrollEnd":r!=null&&gn("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=Et(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":gn("beforetoggle",e),gn("toggle",e),qs(e,"popover",r);break;case"xlinkActuate":As(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":As(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":As(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":As(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":As(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":As(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":As(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":As(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":As(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":qs(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Oe.get(o)||o,qs(e,o,r))}}function ch(e,s,o,r,f,h){switch(o){case"style":_e(e,r,h);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?ct(e,r):(typeof r=="number"||typeof r=="bigint")&&ct(e,""+r);break;case"onScroll":r!=null&&gn("scroll",e);break;case"onScrollEnd":r!=null&&gn("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Kt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mo.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),h=e[Xn]||null,h=h!=null?h[o]:null,typeof h=="function"&&e.removeEventListener(s,h,f),typeof r=="function")){typeof h!="function"&&h!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):qs(e,o,r)}}}function Js(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gn("error",e),gn("load",e);var r=!1,f=!1,h;for(h in o)if(o.hasOwnProperty(h)){var b=o[h];if(b!=null)switch(h){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Qn(e,s,h,b,o,null)}}f&&Qn(e,s,"srcSet",o.srcSet,o,null),r&&Qn(e,s,"src",o.src,o,null);return;case"input":gn("invalid",e);var j=h=b=f=null,Y=null,re=null;for(r in o)if(o.hasOwnProperty(r)){var ve=o[r];if(ve!=null)switch(r){case"name":f=ve;break;case"type":b=ve;break;case"checked":Y=ve;break;case"defaultChecked":re=ve;break;case"value":h=ve;break;case"defaultValue":j=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,s));break;default:Qn(e,s,r,ve,o,null)}}ae(e,h,j,Y,re,b,f,!1);return;case"select":gn("invalid",e),r=b=h=null;for(f in o)if(o.hasOwnProperty(f)&&(j=o[f],j!=null))switch(f){case"value":h=j;break;case"defaultValue":b=j;break;case"multiple":r=j;default:Qn(e,s,f,j,o,null)}s=h,o=b,e.multiple=!!r,s!=null?Ce(e,!!r,s,!1):o!=null&&Ce(e,!!r,o,!0);return;case"textarea":gn("invalid",e),h=f=r=null;for(b in o)if(o.hasOwnProperty(b)&&(j=o[b],j!=null))switch(b){case"value":r=j;break;case"defaultValue":f=j;break;case"children":h=j;break;case"dangerouslySetInnerHTML":if(j!=null)throw Error(a(91));break;default:Qn(e,s,b,j,o,null)}kt(e,r,f,h);return;case"option":for(Y in o)if(o.hasOwnProperty(Y)&&(r=o[Y],r!=null))switch(Y){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Qn(e,s,Y,r,o,null)}return;case"dialog":gn("beforetoggle",e),gn("toggle",e),gn("cancel",e),gn("close",e);break;case"iframe":case"object":gn("load",e);break;case"video":case"audio":for(r=0;r<Rl.length;r++)gn(Rl[r],e);break;case"image":gn("error",e),gn("load",e);break;case"details":gn("toggle",e);break;case"embed":case"source":case"link":gn("error",e),gn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in o)if(o.hasOwnProperty(re)&&(r=o[re],r!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Qn(e,s,re,r,o,null)}return;default:if(xe(s)){for(ve in o)o.hasOwnProperty(ve)&&(r=o[ve],r!==void 0&&ch(e,s,ve,r,o,void 0));return}}for(j in o)o.hasOwnProperty(j)&&(r=o[j],r!=null&&Qn(e,s,j,r,o,null))}function M2(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,b=null,j=null,Y=null,re=null,ve=null;for(me in o){var Ne=o[me];if(o.hasOwnProperty(me)&&Ne!=null)switch(me){case"checked":break;case"value":break;case"defaultValue":Y=Ne;default:r.hasOwnProperty(me)||Qn(e,s,me,null,r,Ne)}}for(var ce in r){var me=r[ce];if(Ne=o[ce],r.hasOwnProperty(ce)&&(me!=null||Ne!=null))switch(ce){case"type":h=me;break;case"name":f=me;break;case"checked":re=me;break;case"defaultChecked":ve=me;break;case"value":b=me;break;case"defaultValue":j=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(a(137,s));break;default:me!==Ne&&Qn(e,s,ce,me,r,Ne)}}se(e,b,j,Y,re,ve,h,f);return;case"select":me=b=j=ce=null;for(h in o)if(Y=o[h],o.hasOwnProperty(h)&&Y!=null)switch(h){case"value":break;case"multiple":me=Y;default:r.hasOwnProperty(h)||Qn(e,s,h,null,r,Y)}for(f in r)if(h=r[f],Y=o[f],r.hasOwnProperty(f)&&(h!=null||Y!=null))switch(f){case"value":ce=h;break;case"defaultValue":j=h;break;case"multiple":b=h;default:h!==Y&&Qn(e,s,f,h,r,Y)}s=j,o=b,r=me,ce!=null?Ce(e,!!o,ce,!1):!!r!=!!o&&(s!=null?Ce(e,!!o,s,!0):Ce(e,!!o,o?[]:"",!1));return;case"textarea":me=ce=null;for(j in o)if(f=o[j],o.hasOwnProperty(j)&&f!=null&&!r.hasOwnProperty(j))switch(j){case"value":break;case"children":break;default:Qn(e,s,j,null,r,f)}for(b in r)if(f=r[b],h=o[b],r.hasOwnProperty(b)&&(f!=null||h!=null))switch(b){case"value":ce=f;break;case"defaultValue":me=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==h&&Qn(e,s,b,f,r,h)}Ge(e,ce,me);return;case"option":for(var vt in o)if(ce=o[vt],o.hasOwnProperty(vt)&&ce!=null&&!r.hasOwnProperty(vt))switch(vt){case"selected":e.selected=!1;break;default:Qn(e,s,vt,null,r,ce)}for(Y in r)if(ce=r[Y],me=o[Y],r.hasOwnProperty(Y)&&ce!==me&&(ce!=null||me!=null))switch(Y){case"selected":e.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:Qn(e,s,Y,ce,r,me)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Wt in o)ce=o[Wt],o.hasOwnProperty(Wt)&&ce!=null&&!r.hasOwnProperty(Wt)&&Qn(e,s,Wt,null,r,ce);for(re in r)if(ce=r[re],me=o[re],r.hasOwnProperty(re)&&ce!==me&&(ce!=null||me!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(a(137,s));break;default:Qn(e,s,re,ce,r,me)}return;default:if(xe(s)){for(var Zn in o)ce=o[Zn],o.hasOwnProperty(Zn)&&ce!==void 0&&!r.hasOwnProperty(Zn)&&ch(e,s,Zn,void 0,r,ce);for(ve in r)ce=r[ve],me=o[ve],!r.hasOwnProperty(ve)||ce===me||ce===void 0&&me===void 0||ch(e,s,ve,ce,r,me);return}}for(var ne in o)ce=o[ne],o.hasOwnProperty(ne)&&ce!=null&&!r.hasOwnProperty(ne)&&Qn(e,s,ne,null,r,ce);for(Ne in r)ce=r[Ne],me=o[Ne],!r.hasOwnProperty(Ne)||ce===me||ce==null&&me==null||Qn(e,s,Ne,ce,r,me)}function f0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function T2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],h=f.transferSize,b=f.initiatorType,j=f.duration;if(h&&j&&f0(b)){for(b=0,j=f.responseEnd,r+=1;r<o.length;r++){var Y=o[r],re=Y.startTime;if(re>j)break;var ve=Y.transferSize,Ne=Y.initiatorType;ve&&f0(Ne)&&(Y=Y.responseEnd,b+=ve*(Y<j?1:(j-re)/(Y-re)))}if(--r,s+=8*(h+b)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uh=null,dh=null;function yu(e){return e.nodeType===9?e:e.ownerDocument}function h0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function m0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function fh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var hh=null;function E2(){var e=window.event;return e&&e.type==="popstate"?e===hh?!1:(hh=e,!0):(hh=null,!1)}var p0=typeof setTimeout=="function"?setTimeout:void 0,D2=typeof clearTimeout=="function"?clearTimeout:void 0,_0=typeof Promise=="function"?Promise:void 0,A2=typeof queueMicrotask=="function"?queueMicrotask:typeof _0<"u"?function(e){return _0.resolve(null).then(e).catch(R2)}:p0;function R2(e){setTimeout(function(){throw e})}function Sa(e){return e==="head"}function g0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),zr(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")Ll(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Ll(o);for(var h=o.firstChild;h;){var b=h.nextSibling,j=h.nodeName;h[to]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&h.rel.toLowerCase()==="stylesheet"||o.removeChild(h),h=b}}else o==="body"&&Ll(e.ownerDocument.body);o=f}while(o);zr(s)}function y0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function mh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":mh(o),Ao(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function N2(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[to])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=ni(e.nextSibling),e===null)break}return null}function L2(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=ni(e.nextSibling),e===null))return null;return e}function x0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=ni(e.nextSibling),e===null))return null;return e}function ph(e){return e.data==="$?"||e.data==="$~"}function _h(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function B2(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ni(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var gh=null;function b0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return ni(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function v0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function w0(e,s,o){switch(s=yu(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ll(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);Ao(e)}var si=new Map,S0=new Set;function xu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=he.d;he.d={f:O2,r:z2,D:$2,C:I2,L:P2,m:H2,X:U2,S:V2,M:W2};function O2(){var e=Ji.f(),s=uu();return e||s}function z2(e){var s=so(e);s!==null&&s.tag===5&&s.type==="form"?P_(s):Ji.r(e)}var Lr=typeof document>"u"?null:document;function k0(e,s,o){var r=Lr;if(r&&typeof s=="string"&&s){var f=bs(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),S0.has(f)||(S0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),Js(s,"link",e),qn(s),r.head.appendChild(s)))}}function $2(e){Ji.D(e),k0("dns-prefetch",e,null)}function I2(e,s){Ji.C(e,s),k0("preconnect",e,s)}function P2(e,s,o){Ji.L(e,s,o);var r=Lr;if(r&&e&&s){var f='link[rel="preload"][as="'+bs(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+bs(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+bs(o.imageSizes)+'"]')):f+='[href="'+bs(e)+'"]';var h=f;switch(s){case"style":h=Br(e);break;case"script":h=Or(e)}si.has(h)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),si.set(h,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(Bl(h))||s==="script"&&r.querySelector(Ol(h))||(s=r.createElement("link"),Js(s,"link",e),qn(s),r.head.appendChild(s)))}}function H2(e,s){Ji.m(e,s);var o=Lr;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+bs(r)+'"][href="'+bs(e)+'"]',h=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Or(e)}if(!si.has(h)&&(e=x({rel:"modulepreload",href:e},s),si.set(h,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Ol(h)))return}r=o.createElement("link"),Js(r,"link",e),qn(r),o.head.appendChild(r)}}}function V2(e,s,o){Ji.S(e,s,o);var r=Lr;if(r&&e){var f=Ws(r).hoistableStyles,h=Br(e);s=s||"default";var b=f.get(h);if(!b){var j={loading:0,preload:null};if(b=r.querySelector(Bl(h)))j.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=si.get(h))&&yh(e,o);var Y=b=r.createElement("link");qn(Y),Js(Y,"link",e),Y._p=new Promise(function(re,ve){Y.onload=re,Y.onerror=ve}),Y.addEventListener("load",function(){j.loading|=1}),Y.addEventListener("error",function(){j.loading|=2}),j.loading|=4,bu(b,s,r)}b={type:"stylesheet",instance:b,count:1,state:j},f.set(h,b)}}}function U2(e,s){Ji.X(e,s);var o=Lr;if(o&&e){var r=Ws(o).hoistableScripts,f=Or(e),h=r.get(f);h||(h=o.querySelector(Ol(f)),h||(e=x({src:e,async:!0},s),(s=si.get(f))&&xh(e,s),h=o.createElement("script"),qn(h),Js(h,"link",e),o.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},r.set(f,h))}}function W2(e,s){Ji.M(e,s);var o=Lr;if(o&&e){var r=Ws(o).hoistableScripts,f=Or(e),h=r.get(f);h||(h=o.querySelector(Ol(f)),h||(e=x({src:e,async:!0,type:"module"},s),(s=si.get(f))&&xh(e,s),h=o.createElement("script"),qn(h),Js(h,"link",e),o.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},r.set(f,h))}}function C0(e,s,o,r){var f=(f=$e.current)?xu(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=Br(o.href),o=Ws(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=Br(o.href);var h=Ws(f).hoistableStyles,b=h.get(e);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,b),(h=f.querySelector(Bl(e)))&&!h._p&&(b.instance=h,b.state.loading=5),si.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},si.set(e,o),h||Y2(f,e,o,b.state))),s&&r===null)throw Error(a(528,""));return b}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=Or(o),o=Ws(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Br(e){return'href="'+bs(e)+'"'}function Bl(e){return'link[rel="stylesheet"]['+e+"]"}function j0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Y2(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),Js(s,"link",o),qn(s),e.head.appendChild(s))}function Or(e){return'[src="'+bs(e)+'"]'}function Ol(e){return"script[async]"+e}function M0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+bs(o.href)+'"]');if(r)return s.instance=r,qn(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),qn(r),Js(r,"style",f),bu(r,o.precedence,e),s.instance=r;case"stylesheet":f=Br(o.href);var h=e.querySelector(Bl(f));if(h)return s.state.loading|=4,s.instance=h,qn(h),h;r=j0(o),(f=si.get(f))&&yh(r,f),h=(e.ownerDocument||e).createElement("link"),qn(h);var b=h;return b._p=new Promise(function(j,Y){b.onload=j,b.onerror=Y}),Js(h,"link",r),s.state.loading|=4,bu(h,o.precedence,e),s.instance=h;case"script":return h=Or(o.src),(f=e.querySelector(Ol(h)))?(s.instance=f,qn(f),f):(r=o,(f=si.get(h))&&(r=x({},o),xh(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),qn(f),Js(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,bu(r,o.precedence,e));return s.instance}function bu(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,h=f,b=0;b<r.length;b++){var j=r[b];if(j.dataset.precedence===s)h=j;else if(h!==f)break}h?h.parentNode.insertBefore(e,h.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function yh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function xh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var vu=null;function T0(e,s,o){if(vu===null){var r=new Map,f=vu=new Map;f.set(o,r)}else f=vu,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var h=o[f];if(!(h[to]||h[Ut]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var b=h.getAttribute(s)||"";b=e+b;var j=r.get(b);j?j.push(h):r.set(b,[h])}}return r}function E0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function F2(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function D0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function X2(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=Br(r.href),h=s.querySelector(Bl(f));if(h){s=h._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=wu.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=h,qn(h);return}h=s.ownerDocument||s,r=j0(r),(f=si.get(f))&&yh(r,f),h=h.createElement("link"),qn(h);var b=h;b._p=new Promise(function(j,Y){b.onload=j,b.onerror=Y}),Js(h,"link",r),o.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=wu.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var bh=0;function q2(e,s){return e.stylesheets&&e.count===0&&ku(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&ku(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+s);0<e.imgBytes&&bh===0&&(bh=62500*T2());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ku(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>bh?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function wu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ku(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Su=null;function ku(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Su=new Map,s.forEach(G2,e),Su=null,wu.call(e))}function G2(e,s){if(!(s.state.loading&4)){var o=Su.get(e);if(o)var r=o.get(null);else{o=new Map,Su.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var b=f[h];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(o.set(b.dataset.precedence,b),r=b)}r&&o.set(null,r)}f=s.instance,b=f.getAttribute("data-precedence"),h=o.get(b)||r,h===r&&o.set(null,f),o.set(b,f),this.count++,r=wu.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),h?h.parentNode.insertBefore(f,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var zl={$$typeof:D,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function K2(e,s,o,r,f,h,b,j,Y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=En(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=En(0),this.hiddenUpdates=En(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Y,this.incompleteTransitions=new Map}function A0(e,s,o,r,f,h,b,j,Y,re,ve,Ne){return e=new K2(e,s,o,b,Y,re,ve,Ne,j),s=1,h===!0&&(s|=24),h=Io(3,null,null,s),e.current=h,h.stateNode=e,s=Zd(),s.refCount++,e.pooledCache=s,s.refCount++,h.memoizedState={element:r,isDehydrated:o,cache:s},nf(h),e}function R0(e){return e?(e=hr,e):hr}function N0(e,s,o,r,f,h){f=R0(f),r.context===null?r.context=f:r.pendingContext=f,r=fa(s),r.payload={element:o},h=h===void 0?null:h,h!==null&&(r.callback=h),o=ha(e,r,s),o!==null&&(To(o,e,s),pl(o,e,s))}function L0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function vh(e,s){L0(e,s),(e=e.alternate)&&L0(e,s)}function B0(e){if(e.tag===13||e.tag===31){var s=Ia(e,67108864);s!==null&&To(s,e,67108864),vh(e,67108864)}}function O0(e){if(e.tag===13||e.tag===31){var s=Wo();s=Ds(s);var o=Ia(e,s);o!==null&&To(o,e,s),vh(e,s)}}var Cu=!0;function Q2(e,s,o,r){var f=P.T;P.T=null;var h=he.p;try{he.p=2,wh(e,s,o,r)}finally{he.p=h,P.T=f}}function Z2(e,s,o,r){var f=P.T;P.T=null;var h=he.p;try{he.p=8,wh(e,s,o,r)}finally{he.p=h,P.T=f}}function wh(e,s,o,r){if(Cu){var f=Sh(r);if(f===null)lh(e,s,r,ju,o),$0(e,r);else if(ev(f,e,s,o,r))r.stopPropagation();else if($0(e,r),s&4&&-1<J2.indexOf(e)){for(;f!==null;){var h=so(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var b=Nt(h.pendingLanes);if(b!==0){var j=h;for(j.pendingLanes|=2,j.entangledLanes|=2;b;){var Y=1<<31-_t(b);j.entanglements[1]|=Y,b&=~Y}Mi(h),($n&6)===0&&(lu=ut()+500,Al(0))}}break;case 31:case 13:j=Ia(h,2),j!==null&&To(j,h,2),uu(),vh(h,2)}if(h=Sh(r),h===null&&lh(e,s,r,ju,o),h===f)break;f=h}f!==null&&r.stopPropagation()}else lh(e,s,r,null,o)}}function Sh(e){return e=We(e),kh(e)}var ju=null;function kh(e){if(ju=null,e=no(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=m(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return ju=e,null}function z0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case $t:return 2;case Ht:return 8;case qe:case B:return 32;case G:return 268435456;default:return 32}default:return 32}}var Ch=!1,ka=null,Ca=null,ja=null,$l=new Map,Il=new Map,Ma=[],J2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $0(e,s){switch(e){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":$l.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(s.pointerId)}}function Pl(e,s,o,r,f,h){return e===null||e.nativeEvent!==h?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:h,targetContainers:[f]},s!==null&&(s=so(s),s!==null&&B0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function ev(e,s,o,r,f){switch(s){case"focusin":return ka=Pl(ka,e,s,o,r,f),!0;case"dragenter":return Ca=Pl(Ca,e,s,o,r,f),!0;case"mouseover":return ja=Pl(ja,e,s,o,r,f),!0;case"pointerover":var h=f.pointerId;return $l.set(h,Pl($l.get(h)||null,e,s,o,r,f)),!0;case"gotpointercapture":return h=f.pointerId,Il.set(h,Pl(Il.get(h)||null,e,s,o,r,f)),!0}return!1}function I0(e){var s=no(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,dn(e.priority,function(){O0(o)});return}}else if(s===31){if(s=m(o),s!==null){e.blockedOn=s,dn(e.priority,function(){O0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mu(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Sh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);ze=r,o.target.dispatchEvent(r),ze=null}else return s=so(o),s!==null&&B0(s),e.blockedOn=o,!1;s.shift()}return!0}function P0(e,s,o){Mu(e)&&o.delete(s)}function tv(){Ch=!1,ka!==null&&Mu(ka)&&(ka=null),Ca!==null&&Mu(Ca)&&(Ca=null),ja!==null&&Mu(ja)&&(ja=null),$l.forEach(P0),Il.forEach(P0)}function Tu(e,s){e.blockedOn===s&&(e.blockedOn=null,Ch||(Ch=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,tv)))}var Eu=null;function H0(e){Eu!==e&&(Eu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Eu===e&&(Eu=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if(kh(r||o)===null)continue;break}var h=so(o);h!==null&&(e.splice(s,3),s-=3,Sf(h,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function zr(e){function s(Y){return Tu(Y,e)}ka!==null&&Tu(ka,e),Ca!==null&&Tu(Ca,e),ja!==null&&Tu(ja,e),$l.forEach(s),Il.forEach(s);for(var o=0;o<Ma.length;o++){var r=Ma[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ma.length&&(o=Ma[0],o.blockedOn===null);)I0(o),o.blockedOn===null&&Ma.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],h=o[r+1],b=f[Xn]||null;if(typeof h=="function")b||H0(o);else if(b){var j=null;if(h&&h.hasAttribute("formAction")){if(f=h,b=h[Xn]||null)j=b.formAction;else if(kh(f)!==null)continue}else j=b.action;typeof j=="function"?o[r+1]=j:(o.splice(r,3),r-=3),H0(o)}}}function V0(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(b){return f=b})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function jh(e){this._internalRoot=e}Du.prototype.render=jh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=Wo();N0(o,r,e,s,null,null)},Du.prototype.unmount=jh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;N0(e.current,2,null,e,null,null),uu(),s[Pe]=null}};function Du(e){this._internalRoot=e}Du.prototype.unstable_scheduleHydration=function(e){if(e){var s=Vn();e={blockedOn:null,target:e,priority:s};for(var o=0;o<Ma.length&&s!==0&&s<Ma[o].priority;o++);Ma.splice(o,0,e),o===0&&I0(e)}};var U0=n.version;if(U0!=="19.2.4")throw Error(a(527,U0,"19.2.4"));he.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=_(s),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var nv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Au.isDisabled&&Au.supportsFiber)try{Ye=Au.inject(nv),He=Au}catch{}}return Vl.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=K_,h=Q_,b=Z_;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(h=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError)),s=A0(e,1,!1,null,null,o,r,null,f,h,b,V0),e[Pe]=s.current,rh(e),new jh(s)},Vl.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",h=K_,b=Q_,j=Z_,Y=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(h=o.onUncaughtError),o.onCaughtError!==void 0&&(b=o.onCaughtError),o.onRecoverableError!==void 0&&(j=o.onRecoverableError),o.formState!==void 0&&(Y=o.formState)),s=A0(e,1,!0,s,o!=null?o:null,r,f,Y,h,b,j,V0),s.context=R0(null),o=s.current,r=Wo(),r=Ds(r),f=fa(r),f.callback=null,ha(o,f,r),o=r,s.current.lanes=o,yt(s,o),Mi(s),e[Pe]=s.current,rh(e),new Du(s)},Vl.version="19.2.4",Vl}var J0;function dv(){if(J0)return Th.exports;J0=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Th.exports=uv(),Th.exports}var fv=dv();const hv=mx(fv);var y=ep();const mv=mx(y);function pv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function _v(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var nd;const ai="__TAURI_TO_IPC_KEY__";function gv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function fe(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class yv{get rid(){return pv(this,nd,"f")}constructor(n){nd.set(this,void 0),_v(this,nd,n)}async close(){return fe("plugin:resources|close",{rid:this.rid})}}nd=new WeakMap;var Yo;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(Yo||(Yo={}));async function _x(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await fe("plugin:event|unlisten",{event:t,eventId:n})}async function tc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return fe("plugin:event|listen",{event:t,target:c,handler:gv(n)}).then(u=>async()=>_x(t,u))}async function xv(t,n,i){return tc(t,a=>{_x(t,a.id),n(a)},i)}async function bv(t,n){await fe("plugin:event|emit",{event:t,payload:n})}async function vv(t,n,i){await fe("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class gx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new nc(this.width*n,this.height*n)}[ai](){return{width:this.width,height:this.height}}toJSON(){return this[ai]()}}class nc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new gx(this.width/n,this.height/n)}[ai](){return{width:this.width,height:this.height}}toJSON(){return this[ai]()}}class $r{constructor(n){this.size=n}toLogical(n){return this.size instanceof gx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof nc?this.size:this.size.toPhysical(n)}[ai](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[ai]()}}class yx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new Ra(this.x*n,this.y*n)}[ai](){return{x:this.x,y:this.y}}toJSON(){return this[ai]()}}class Ra{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new yx(this.x/n,this.y/n)}[ai](){return{x:this.x,y:this.y}}toJSON(){return this[ai]()}}class Ru{constructor(n){this.position=n}toLogical(n){return this.position instanceof yx?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof Ra?this.position:this.position.toPhysical(n)}[ai](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[ai]()}}class sc extends yv{constructor(n){super(n)}static async new(n,i,a){return fe("plugin:image|new",{rgba:fd(n),width:i,height:a}).then(c=>new sc(c))}static async fromBytes(n){return fe("plugin:image|from_bytes",{bytes:fd(n)}).then(i=>new sc(i))}static async fromPath(n){return fe("plugin:image|from_path",{path:n}).then(i=>new sc(i))}async rgba(){return fe("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return fe("plugin:image|size",{rid:this.rid})}}function fd(t){return t==null?null:typeof t=="string"?t:t instanceof sc?t.rid:t}var ym;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(ym||(ym={}));class wv{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var ey;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(ey||(ey={}));function xm(){return new xx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Nh(){return fe("plugin:window|get_all_windows").then(t=>t.map(n=>new xx(n,{skip:!0})))}const Lh=["tauri://created","tauri://error"];class xx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||fe("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Nh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return xm()}static async getAll(){return Nh()}static async getFocusedWindow(){for(const n of await Nh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:tc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:xv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Lh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return bv(n,i)}async emitTo(n,i,a){if(Lh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return vv(n,i,a)}_handleTauriEvent(n,i){return Lh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return fe("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return fe("plugin:window|inner_position",{label:this.label}).then(n=>new Ra(n))}async outerPosition(){return fe("plugin:window|outer_position",{label:this.label}).then(n=>new Ra(n))}async innerSize(){return fe("plugin:window|inner_size",{label:this.label}).then(n=>new nc(n))}async outerSize(){return fe("plugin:window|outer_size",{label:this.label}).then(n=>new nc(n))}async isFullscreen(){return fe("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return fe("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return fe("plugin:window|is_maximized",{label:this.label})}async isFocused(){return fe("plugin:window|is_focused",{label:this.label})}async isDecorated(){return fe("plugin:window|is_decorated",{label:this.label})}async isResizable(){return fe("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return fe("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return fe("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return fe("plugin:window|is_closable",{label:this.label})}async isVisible(){return fe("plugin:window|is_visible",{label:this.label})}async title(){return fe("plugin:window|title",{label:this.label})}async theme(){return fe("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return fe("plugin:window|is_always_on_top",{label:this.label})}async center(){return fe("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===ym.Critical?i={type:"Critical"}:i={type:"Informational"}),fe("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return fe("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return fe("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return fe("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return fe("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return fe("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return fe("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return fe("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return fe("plugin:window|maximize",{label:this.label})}async unmaximize(){return fe("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return fe("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return fe("plugin:window|minimize",{label:this.label})}async unminimize(){return fe("plugin:window|unminimize",{label:this.label})}async show(){return fe("plugin:window|show",{label:this.label})}async hide(){return fe("plugin:window|hide",{label:this.label})}async close(){return fe("plugin:window|close",{label:this.label})}async destroy(){return fe("plugin:window|destroy",{label:this.label})}async setDecorations(n){return fe("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return fe("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return fe("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return fe("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return fe("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return fe("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return fe("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return fe("plugin:window|set_size",{label:this.label,value:n instanceof $r?n:new $r(n)})}async setMinSize(n){return fe("plugin:window|set_min_size",{label:this.label,value:n instanceof $r?n:n?new $r(n):null})}async setMaxSize(n){return fe("plugin:window|set_max_size",{label:this.label,value:n instanceof $r?n:n?new $r(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return fe("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return fe("plugin:window|set_position",{label:this.label,value:n instanceof Ru?n:new Ru(n)})}async setFullscreen(n){return fe("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return fe("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return fe("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return fe("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return fe("plugin:window|set_icon",{label:this.label,value:fd(n)})}async setSkipTaskbar(n){return fe("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return fe("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return fe("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return fe("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return fe("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return fe("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Ru?n:new Ru(n)})}async setIgnoreCursorEvents(n){return fe("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return fe("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return fe("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return fe("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return fe("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return fe("plugin:window|set_overlay_icon",{label:this.label,value:n?fd(n):void 0})}async setProgressBar(n){return fe("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return fe("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return fe("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return fe("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(Yo.WINDOW_RESIZED,i=>{i.payload=new nc(i.payload),n(i)})}async onMoved(n){return this.listen(Yo.WINDOW_MOVED,i=>{i.payload=new Ra(i.payload),n(i)})}async onCloseRequested(n){return this.listen(Yo.WINDOW_CLOSE_REQUESTED,async i=>{const a=new wv(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(Yo.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new Ra(d.payload.position)}})}),a=await this.listen(Yo.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new Ra(d.payload.position)}})}),c=await this.listen(Yo.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new Ra(d.payload.position)}})}),u=await this.listen(Yo.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(Yo.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(Yo.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(Yo.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(Yo.WINDOW_THEME_CHANGED,n)}}var ty;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(ty||(ty={}));var ny;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(ny||(ny={}));var sy;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(sy||(sy={}));var oy;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(oy||(oy={}));function bx({laneX:t,tipY:n,mergeX:i,mergeY:a,cornerR:c,pointFormatter:u}){if(Math.abs(a-n)<.5)return`M ${u(t,n)} L ${u(i,a)}`;const d=i>=t?1:-1,m=Math.max(0,Math.min(c,Math.abs(a-n),Math.abs(i-t)));if(m<.5)return[`M ${u(t,n)}`,`L ${u(t,a)}`,`L ${u(i,a)}`].join(" ");const p=a-Math.sign(a-n)*m,_=t+d*m;return[`M ${u(t,n)}`,`L ${u(t,p)}`,`Q ${u(t,a)} ${u(_,a)}`,`L ${u(i,a)}`].join(" ")}const Sv=3.7,iy=200,bm=240,Fo=540,Ni=176,kv=32,_c=20,Cv=bm/2,Bh=Fo+Cv,Oh=18,zh=18,$h="#E6E6E6";function ay(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function Jl(t,n){return{id:n.fullSha,branchName:t,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,kind:n.kind}}function ea(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function Nu(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:ea(t).localeCompare(ea(n))}function hd(t){var m,p,_,g,x;if(t.length<=1)return[...t];const n=new Map(t.map(v=>[ea(v),v])),i=new Map,a=new Map;t.forEach(v=>i.set(ea(v),0));for(const v of t){const w=(m=v.parentSha)!=null?m:void 0;if(!w||!n.has(w))continue;const S=ea(v);i.set(S,((p=i.get(S))!=null?p:0)+1);const C=(_=a.get(w))!=null?_:[];C.push(v),a.set(w,C)}for(const v of a.values())v.sort(Nu);const c=t.filter(v=>{var w;return((w=i.get(ea(v)))!=null?w:0)===0}).sort(Nu),u=[],d=new Set;for(;c.length>0;){const v=c.shift(),w=ea(v);if(!d.has(w)){d.add(w),u.push(v);for(const S of(g=a.get(w))!=null?g:[]){const C=ea(S),k=((x=i.get(C))!=null?x:0)-1;i.set(C,k),k===0&&c.push(S)}c.sort(Nu)}}return u.length===t.length?u:[...u,...t.filter(v=>!d.has(ea(v))).sort(Nu)]}function jv(t,n){var i;return hd(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function vx(t,n,i){return jv(t,i)}function Mv(t,n,i){const a=t.parentBranch;return!a||a===t.name||!n.has(a)?null:a===i?i:a}function Ih(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function Tv(t,n){var u,d;if(!n||t.length===0)return Ih(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Ih(t);let a=null,c=null;for(const m of t){const p=new Date(m.date).getTime();if(Number.isFinite(p))if(p<=i){const _=i-p;(!a||_<a.delta)&&(a={delta:_,commit:m})}else{const _=p-i;(!c||_<c.delta)&&(c={delta:_,commit:m})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Ih(t)}function Lu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(m=>m.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function Ev(t,n,i){var g,x,v,w,S,C,k;const a=vx(t,i,n);if(a.length===0)return null;const c=a.map(M=>Jl(t,M)),u=new Set(c.map(M=>M.id)),d=(x=(g=c[0])==null?void 0:g.parentSha)!=null?x:null,m=(w=(v=c.find(M=>M.kind==="branch-created"))==null?void 0:v.id)!=null?w:null,p=(S=c[0])==null?void 0:S.date,_=c.find(M=>m&&M.id===m||d&&M.id===d?!0:!M.parentSha||!u.has(M.parentSha));return _||((k=(C=Tv(c,p!=null?p:void 0))!=null?C:c[0])!=null?k:null)}function Dv(t,n,i={}){var E,$,q;const a=new Map(t.map(R=>[R.name,R])),c=new Map,u=(R,I)=>{var J;return I?((J=i[R])!=null?J:[]).some(te=>te.fullSha===I||te.sha===I||te.fullSha.startsWith(I)||I.startsWith(te.fullSha)||te.sha.startsWith(I)||I.startsWith(te.sha)):!1},d=new Map;for(const R of t){const V=((E=i[R.name])!=null?E:[]).filter(J=>J.kind!=="branch-created").map(J=>new Date(J.date).getTime()).filter(J=>Number.isFinite(J)).sort((J,te)=>J-te)[0];V!=null&&d.set(R.name,V)}const m=R=>{const I=d.get(R.name);return I!=null?I:ay(R).start},p=R=>{var V,J,te;const I=Mv(R,a,n);if(I&&I!==n){const pe=(te=(J=(V=R.presidesFromSha)!=null?V:R.divergedFromSha)!=null?J:R.createdFromSha)!=null?te:null;return!pe||u(I,pe)?I:n}return I!=null?I:n};for(const R of t){if(R.name===n)continue;const I=($=p(R))!=null?$:n,V=(q=c.get(I))!=null?q:[];V.push(R),c.set(I,V)}for(const R of c.values())R.sort((I,V)=>m(I)-m(V)||I.name.localeCompare(V.name));const _=new Map,g=[],x=new Map,v=new Map;for(const R of Object.values(i))for(const I of R){const V=new Date(I.date).getTime();Number.isFinite(V)&&(I.fullSha&&v.set(I.fullSha,V),I.sha&&v.set(I.sha,V))}const w=(R,I)=>({start:Math.min(R,I),end:Math.max(R,I)}),S=R=>{var P,he,Z,ge,Be;const I=w(m(R),ay(R).end),V=[I],J=I.start,te=(Z=(he=(P=R.presidesFromSha)!=null?P:R.divergedFromSha)!=null?he:R.createdFromSha)!=null?Z:null,pe=te?v.get(te):void 0,Te=new Date((Be=(ge=R.divergedFromDate)!=null?ge:R.createdDate)!=null?Be:R.lastCommitDate).getTime(),ke=Number.isFinite(pe!=null?pe:NaN)?pe:Number.isFinite(Te)?Te:null;if(ke==null)return V;const Ee=w(ke,J);return Ee.start!==Ee.end&&V.push(Ee),V},C=Math.max(1,360*60*1e3*Sv),k=(R,I)=>!(R.start-I.end>=C||I.start-R.end>=C),M=(R,I)=>I.some(V=>{var J;return((J=x.get(R))!=null?J:[]).some(te=>k(V,te))}),L=R=>{var P,he;const I=_.get(R);if(I)return I.column;const V=a.get(R);if(!V)return 0;if(R===n){const Z={name:R,column:0,parentName:null};_.set(R,Z),g.push(Z);const ge=S(V);return x.set(0,[...(P=x.get(0))!=null?P:[],...ge]),0}const J=p(V),te=J?L(J):0,pe=J?te+1:1,Te=S(V);let ke=pe;for(;M(ke,Te);)ke+=1;const Ee={name:R,column:ke,parentName:J};return _.set(R,Ee),g.push(Ee),x.set(ke,[...(he=x.get(ke))!=null?he:[],...Te]),ke};L(n);const D=t.filter(R=>!_.has(R.name)).sort((R,I)=>m(R)-m(I)||R.name.localeCompare(I.name));for(const R of D)L(R.name);return g.sort((R,I)=>R.column-I.column||R.name.localeCompare(I.name))}const ry=2.25,Av=18,Rv=0,ly=0,Nv=1800*1e3,Lv=1440*60*1e3;function cy(t,n,i=new Map){var te,pe,Te,ke,Ee,P,he,Z,ge,Be,z,oe,H;if(t.length===0)return new Map;const a=(K,Se)=>!K||!Se?!1:K===Se||K.startsWith(Se)||Se.startsWith(K),c=hd(t),u=new Map;for(const K of t){const Se=(te=K.parentSha)!=null?te:null;if(Se){const $e=(pe=u.get(Se))!=null?pe:new Set;$e.add(K.id),u.set(Se,$e)}for(const $e of(Te=i.get(K.id))!=null?Te:[]){if(!$e)continue;const Xe=(ke=u.get($e))!=null?ke:new Set;Xe.add(K.id),u.set($e,Xe)}}const d=new Map,m=new Map,p=new Map,_=new Set,g=new Map,x=new Map,v=new Map,w=new Map;for(const K of t){const Se=(Ee=g.get(K.branchName))!=null?Ee:new Set;Se.add(K.id),g.set(K.branchName,Se);const $e=(he=(P=n.get(K.branchName))==null?void 0:P.column)!=null?he:0,Xe=(Z=x.get(K.id))!=null?Z:new Set;Xe.add($e),x.set(K.id,Xe);const Ze=new Set;K.parentSha&&Ze.add(K.parentSha),v.set(K.visualId,Ze);const st=new Set(Ze);for(const Gt of(ge=i.get(K.id))!=null?ge:[])Gt&&st.add(Gt);w.set(K.visualId,st)}const S=new Set(Array.from(x.keys())),C=Array.from(S),k=new Map,M=K=>{const Se=[];for(const $e of C)a($e,K)&&Se.push($e);return Se},L=new Map;for(const K of C)L.set(K,new Set);for(const K of t){const Se=M(K.id);if(Se.length===0)continue;const $e=(Be=w.get(K.visualId))!=null?Be:new Set,Xe=new Set;for(const Ze of $e)for(const st of M(Ze))Xe.add(st);for(const Ze of Se){const st=(z=L.get(Ze))!=null?z:new Set;for(const Gt of Xe)st.add(Gt);L.set(Ze,st)}}const D=new Map,E=(K,Se=new Set)=>{var st;const $e=D.get(K);if($e)return $e;if(Se.has(K))return new Set;Se.add(K);const Xe=(st=L.get(K))!=null?st:new Set,Ze=new Set;for(const Gt of Xe){Ze.add(Gt);for(const rn of E(Gt,Se))Ze.add(rn)}return Se.delete(K),D.set(K,Ze),Ze},$=(K,Se)=>{if(a(K,Se))return!0;const $e=M(K),Xe=M(Se);for(const Ze of $e){const st=E(Ze);for(const Gt of Xe)if(st.has(Gt))return!0}for(const Ze of Xe){const st=E(Ze);for(const Gt of $e)if(st.has(Gt))return!0}return!1};let q=1;const R=(K,Se)=>{var ot,Je,it,Ae,ut,Ct,$t,Ht,qe;const $e=(Je=(ot=n.get(K.branchName))==null?void 0:ot.column)!=null?Je:0,Xe=(it=g.get(K.branchName))!=null?it:new Set,st=!(!!K.parentSha&&Xe.has(K.parentSha))&&K.parentSha?K.parentSha:null,Gt=Array.from(Se).flatMap(B=>M(B).flatMap(G=>{var ue;return(ue=k.get(G))!=null?ue:[]})),rn=Gt.length>0?Math.max(...Gt)+1:1,Ot=(Ae=u.get(K.id))!=null?Ae:new Set,an=Array.from(Ot).flatMap(B=>{var G;return Array.from((G=x.get(B))!=null?G:[])}).some(B=>B!==$e),Sn=new Date(K.date).getTime(),hn=Math.max(rn,1);let mn=null;for(let B=hn;B<q;B+=1){const G=(ut=m.get(B))!=null?ut:[];if(G.length===0||an||_.has(B))continue;const ue=(Ct=w.get(K.visualId))!=null?Ct:new Set;if(!(G.some(ye=>$(K.id,ye.sha)?!0:Array.from(ue).some(gt=>a(gt,ye.sha)))||G.some(ye=>ye.column===$e)||!Number.isFinite(Sn)||!G.every(ye=>{if(!Number.isFinite(ye.time))return!1;const gt=!!st&&!!ye.branchEntryParentSha&&st===ye.branchEntryParentSha?Lv:Nv;return Math.abs(ye.time-Sn)<=gt}))){mn=B;break}}mn==null&&(mn=Math.max(rn,q)),d.set(K.visualId,mn),mn>=q&&(q=mn+1);const X=($t=m.get(mn))!=null?$t:[];X.push({visualId:K.visualId,sha:K.id,column:$e,time:Sn,branchEntryParentSha:st}),m.set(mn,X),an&&_.add(mn);for(const B of Se){const G=(Ht=p.get(B))!=null?Ht:[];G.push(mn),p.set(B,G)}const Re=(qe=k.get(K.id))!=null?qe:[];Re.push(mn),k.set(K.id,Re)};let I=[...c];for(;I.length>0;){const K=[];let Se=!1;for(const $e of I){const Xe=(oe=v.get($e.visualId))!=null?oe:new Set;if(Array.from(Xe).some(st=>M(st).some(Gt=>{var rn,Ot;return((Ot=(rn=k.get(Gt))==null?void 0:rn.length)!=null?Ot:0)===0}))){K.push($e);continue}R($e,Xe),Se=!0}if(!Se){const $e=K.shift();if(!$e)break;R($e,(H=v.get($e.visualId))!=null?H:new Set)}I=K}const V=Math.max(0,...Array.from(d.values()));if(V<=1)return d;const J=new Map;for(const[K,Se]of d.entries())J.set(K,V-Se+1);return J}function Bv(t,n){if(t.length===0)return[];const i=new Set(Array.from(n).filter(d=>d>=0&&d<t.length)),a=[];let c=[];const u=()=>{c.length!==0&&(a.push({entries:c}),c=[])};for(let d=0;d<t.length;d+=1)c.push(t[d]),i.has(d)&&u();return u(),a}function Ov(t,n){if(t.length===0)return[];const i=[];let a=[],c=null;const u=()=>{a.length!==0&&(i.push(a),a=[])};for(const d of t){const m=n.get(d.item.visualId),p=m!=null&&c!=null&&Math.abs(m-c)===1;a.length>0&&!p&&u(),a.push(d),c=m!=null?m:null}return u(),i}function zv(t){var dn,Ln,Ut,Xn,Pe,_s,fo,wo,Us,to,Ao,no,so,ho,Ws,qn,Ro,mo,Bn,ls,Xs,No,oo,io,qs,gs,As,Cn,ri,xi,Lo,bi,Ys,Xo,bs,se,ae,Me,Ce,Ge,kt,ct;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:m,branchUniqueAheadCounts:p,manuallyOpenedClumps:_,manuallyClosedClumps:g,isDebugOpen:x,gridSearchQuery:v,gridFocusSha:w,checkedOutRef:S}=t,C=new Map(i.map(N=>[N.name,N])),k=new Map(n.map(N=>[N.name,N])),M=hd([...a.map(N=>{var U,_e,xe;return{id:N.fullSha,branchName:d,message:(U=N.prTitle)!=null?U:N.sha,author:"",date:N.date,parentSha:(xe=(_e=N.parentShas)==null?void 0:_e[0])!=null?xe:null}}),...((dn=m[d])!=null?dn:[]).map(N=>Jl(d,N)),...c.map(N=>Jl(d,N)),...u.map(N=>Jl(d,N))]),L=new Map,D=new Map;for(const N of i){if(N.name===d)continue;const U=vx(N.name,p,m);D.set(N.name,U);const _e=hd(U.map(Ke=>Jl(N.name,Ke)));if(_e.length>0){L.set(N.name,_e);continue}const xe=(Xn=(Ut=(Ln=N.presidesFromSha)!=null?Ln:N.divergedFromSha)!=null?Ut:N.createdFromSha)!=null?Xn:null;if(!xe)continue;const Oe={id:`BRANCH_HEAD:${N.name}:${xe}`,branchName:N.name,message:`Branch ${N.name}`,author:N.lastCommitAuthor,date:(_s=(Pe=N.createdDate)!=null?Pe:N.divergedFromDate)!=null?_s:N.lastCommitDate,parentSha:null,kind:"branch-created"};L.set(N.name,[Oe])}const E=new Set(M.map(N=>N.id)),$=(fo=[...M].sort((N,U)=>new Date(N.date).getTime()-new Date(U.date).getTime()||N.id.localeCompare(U.id))[0])!=null?fo:null,q=new Map(Array.from(L.entries()).map(([N,U])=>[N,new Set(U.map(_e=>_e.id))])),R=new Map;for(const N of i){if(N.name===d)continue;const U=Ev(N.name,m,p);if(U){R.set(N.name,U);continue}const _e=(wo=L.get(N.name))==null?void 0:wo[0];if(_e){const xe=(Ao=(to=(Us=N.presidesFromSha)!=null?Us:N.divergedFromSha)!=null?to:N.createdFromSha)!=null?Ao:null;R.set(N.name,{..._e,parentSha:xe})}}const I=new Map;for(const[N,U]of L.entries()){const _e=U.find(xe=>xe.kind!=="branch-created");_e&&I.set(N,_e)}const V=N=>{var Ke,Et,Kt,ze,We,tt;const U=N.parentBranch;if(!(U&&U!==d&&U!==N.name&&C.has(U)))return U!=null?U:d;const xe=(Et=(Ke=N.presidesFromSha)!=null?Ke:N.divergedFromSha)!=null?Et:N.createdFromSha;if(xe&&((Kt=q.get(U))!=null?Kt:new Set).has(xe))return U;const Oe=(We=(ze=R.get(N.name))==null?void 0:ze.parentSha)!=null?We:null;return Oe&&((tt=q.get(U))!=null?tt:new Set).has(Oe),U},J=N=>{var Oe,Ke,Et,Kt,ze,We;const U=R.get(N.name),_e=(Kt=(Et=(Ke=(Oe=N.presidesFromSha)!=null?Oe:N.divergedFromSha)!=null?Ke:N.createdFromSha)!=null?Et:U==null?void 0:U.parentSha)!=null?Kt:null;return _e?V(N)===d?(We=(ze=$==null?void 0:$.id)!=null?ze:U==null?void 0:U.parentSha)!=null?We:_e:(E.has(_e),_e):null},te=N=>J(N),pe=new Set;for(const N of i){const U=te(N);U&&pe.add(U);const _e=(ho=(so=(no=N.presidesFromSha)!=null?no:N.divergedFromSha)!=null?so:N.createdFromSha)!=null?ho:null;_e&&pe.add(_e)}const Te=[],ke=new Map(Array.from(L.entries()).map(([N,U])=>[N,new Set(U.map(_e=>_e.id))])),Ee=new Set;for(const N of ke.values())for(const U of N)Ee.add(U);for(const N of M)Ee.has(N.id)||Te.push({...N,visualId:`${d}:${N.id}`});for(const[N,U]of L.entries())for(const _e of U)Te.push({..._e,visualId:`${N}:${_e.id}`});const P=[...Te].sort((N,U)=>new Date(N.date).getTime()-new Date(U.date).getTime()||N.id.localeCompare(U.id)),he=new Map;for(const N of a){const U=N.fullSha;if(!U)continue;const _e=((Ws=N.parentShas)!=null?Ws:[]).filter(Oe=>!!Oe&&Oe!==U);if(_e.length===0)continue;const xe=(qn=he.get(U))!=null?qn:new Set;for(const Oe of _e)xe.add(Oe);he.set(U,xe)}const Z=new Map;for(const N of i){if(N.name===d)continue;const U=J(N);U&&Z.set(N.name,U)}const ge=new Map;for(const N of P){const U=he.get(N.id);if(U&&U.size>0){const Oe=(Ro=ge.get(N.id))!=null?Ro:new Set;for(const Ke of U)Oe.add(Ke);ge.set(N.id,Oe)}if(N.branchName===d)continue;const _e=Z.get(N.branchName);if(!_e||_e===N.id)continue;const xe=(mo=ge.get(N.id))!=null?mo:new Set;xe.add(_e),ge.set(N.id,xe)}const Be=cy(P,k,ge),z=new Map;for(const N of P){const U=(Bn=z.get(N.branchName))!=null?Bn:[];U.push(N),z.set(N.branchName,U)}const oe=new Map;for(const N of i){if(N.name===d)continue;const U=V(N),_e=(ls=oe.get(U))!=null?ls:[];_e.push(N),oe.set(U,_e)}const H=new Map,K=new Map,Se=new Map,$e=new Map,Xe=new Map,Ze=(Xs=S==null?void 0:S.headSha)!=null?Xs:null,st=(No=S==null?void 0:S.branchName)!=null?No:null,Gt=(N,U)=>!Ze||st&&st!==N?!1:U===Ze||U.startsWith(Ze)||Ze.startsWith(U),rn=(N,U)=>{var Kt;if(U.length===0)return[];const _e=[...U].sort((ze,We)=>new Date(ze.date).getTime()-new Date(We.date).getTime()||ze.id.localeCompare(We.id)),xe=new Set,Oe=(Kt=oe.get(N))!=null?Kt:[];if(Oe.length>0){const ze=_e.map(We=>new Date(We.date).getTime());Oe.forEach(We=>{var Dn,pn,Tt,un,ts;const tt=(Tt=(pn=(Dn=We.presidesFromSha)!=null?Dn:We.divergedFromSha)!=null?pn:We.createdFromSha)!=null?Tt:null;if(tt){const Un=_e.findIndex(as=>as.id===tt||as.id.startsWith(tt)||tt.startsWith(as.id));if(Un>=0){xe.add(Un);return}}const wt=new Date((ts=(un=We.divergedFromDate)!=null?un:We.createdDate)!=null?ts:We.lastCommitDate).getTime();if(!Number.isFinite(wt)||ze.length===0)return;let zt=-1,Qe=Number.POSITIVE_INFINITY,At=-1,ht=Number.POSITIVE_INFINITY;for(let Un=0;Un<ze.length;Un+=1){const as=ze[Un];if(Number.isFinite(as))if(as<=wt){const js=wt-as;js<Qe&&(Qe=js,zt=Un)}else{const js=as-wt;js<ht&&(ht=js,At=Un)}}const Jt=zt>=0?zt:At;Jt>=0&&xe.add(Jt)})}_e.forEach((ze,We)=>{pe.has(ze.id)&&We<_e.length-1&&xe.add(We),(ze.kind==="uncommitted"||ze.kind==="stash"||ze.id==="WORKING_TREE"||ze.id.startsWith("STASH:"))&&(We>0&&xe.add(We-1),xe.add(We)),Gt(N,ze.id)&&(We>0&&xe.add(We-1),xe.add(We))});const Ke=Bv(_e.map(ze=>({item:ze})),xe),Et=[];return Ke.forEach((ze,We)=>{Ov(ze.entries,Be).forEach((wt,zt)=>{var Dn;const Qe=wt.map(pn=>pn.item);if(Qe.length===0)return;const At=`grid-clump-${N}-${Qe[0].id}-${Qe[Qe.length-1].id}-${We}-${zt}`,ht=Qe[Qe.length-1].visualId,Jt={branchName:N,key:At,commitIds:Qe.map(pn=>pn.visualId),leadId:ht,count:Qe.length};Et.push(Jt),$e.set(At,ht),Xe.set(At,Qe.length);for(const pn of Jt.commitIds){K.set(pn,At);const Tt=pn.split(":").slice(1).join(":"),un=(Dn=Se.get(Tt))!=null?Dn:[];un.includes(At)||un.push(At),Se.set(Tt,un)}})}),Et};for(const[N,U]of z.entries())H.set(N,rn(N,U));const Ot=x?i.flatMap(N=>{var Oe,Ke,Et,Kt;const U=(Oe=m[N.name])!=null?Oe:[],_e=[...(Ke=D.get(N.name))!=null?Ke:[]].reverse(),xe=new Set(((Et=L.get(N.name))!=null?Et:[]).map(ze=>ze.id));return[`Branch ${N.name}`,`  ahead=${(Kt=p[N.name])!=null?Kt:0} previews=${_e.length} rendered=${xe.size}`,..._e.map(ze=>{const We=xe.has(ze.fullSha)?"visible":"hidden",tt=xe.has(ze.fullSha)?"kept by render set":"dropped by render set";return`  ${We} ${ze.fullSha.slice(0,7)} ${ze.message} [${tt}]`}),U.length===0?"  no preview data":null].filter(ze=>ze!=null)}):[],yn=x?Array.from(L.entries()).map(([N,U])=>[`Branch debug ${N}`,...U.map(_e=>`  ${_e.id.slice(0,7)} ${_e.message}`)].join(`
`)):[],an=Be,Sn=P.map(N=>{var xe,Oe,Ke;const U=k.get(N.branchName),_e=(xe=an.get(N.visualId))!=null?xe:1;return{commit:N,row:_e,column:(Oe=U==null?void 0:U.column)!=null?Oe:0,x:zh+((Ke=U==null?void 0:U.column)!=null?Ke:0)*Bh,y:Oh+(_e-1)*(iy+bm)}}),hn=v.trim().toLowerCase(),mn=hn?Sn.filter(N=>{const U=N.commit.id.toLowerCase(),_e=N.commit.id.slice(0,7).toLowerCase(),xe=N.commit.message.toLowerCase(),Oe=N.commit.branchName.toLowerCase();return U.includes(hn)||_e.includes(hn)||xe.includes(hn)||Oe.includes(hn)}):Sn,X=w&&(oo=Sn.find(N=>N.commit.id===w))!=null?oo:null,Re=new Set(mn.map(N=>N.commit.id)),ot=(io=S==null?void 0:S.headSha)!=null?io:null,Je=(()=>{var U,_e;const N=(U=S==null?void 0:S.branchName)!=null?U:null;return!ot||!N?null:(_e=K.get(`${N}:${ot}`))!=null?_e:null})(),it=new Set;for(const N of H.values())for(const U of N)U.count>1&&U.key!==Je&&it.add(U.key);const Ae=[...P].reverse().filter(N=>{var Ke;const U=K.get(N.visualId);if(!U)return!0;const _e=$e.get(U),xe=(Ke=Xe.get(U))!=null?Ke:1,Oe=_.has(U)||!it.has(U)&&!g.has(U);return xe<=1||Oe||_e===N.visualId}),ut=cy(Ae,k,ge),Ct=bm/ry,$t=20/ry,Ht=iy+Ct+$t,qe=Ae.map(N=>{var xe,Oe,Ke;const U=k.get(N.branchName),_e=(xe=ut.get(N.visualId))!=null?xe:1;return{commit:N,row:_e,column:(Oe=U==null?void 0:U.column)!=null?Oe:0,x:zh+((Ke=U==null?void 0:U.column)!=null?Ke:0)*Bh,y:Oh+(_e-1)*Ht}}),B=new Map;for(const N of qe){const U=(qs=B.get(N.commit.id))!=null?qs:[];U.push(N),B.set(N.commit.id,U)}const G=new Map;for(const N of qe){const U=K.get(N.commit.visualId);if(!U)continue;const _e=G.get(U);(!_e||N.y<_e.y)&&G.set(U,N)}const ue=(N,U)=>`${N.toFixed(1)} ${U.toFixed(1)}`,be=zh*2+(Math.max(0,...n.map(N=>N.column))+1)*Bh,Ye=Math.max(0,...qe.map(N=>N.row)),He=Oh*2+Math.max(0,Ye-1)*Ht+Ni+kv+$t,ye=[],_t=new Map(i.map(N=>{var _e,xe;const U=new Date((xe=(_e=N.createdDate)!=null?_e:N.divergedFromDate)!=null?xe:N.lastCommitDate).getTime();return[N.name,Number.isFinite(U)?U:0]})),gt=N=>{var U;return(U=_t.get(N))!=null?U:0},Xt=[],rt=N=>{x&&Xt.push(N)},Ve=new Set,Vt=new Map,bt=(N,U)=>{var xe;const _e=(xe=Vt.get(N))!=null?xe:[];_e.includes(U)||_e.push(U),Vt.set(N,_e)},Nt=new Set,nt=new Set,qt=new Set,Yt=(N,U)=>{var Oe,Ke;if(!N)return null;const _e=Lu(B,N,U);if(_e)return _e;const xe=(Oe=K.get(`${U!=null?U:d}:${N}`))!=null?Oe:K.get(N);return xe&&(Ke=G.get(xe))!=null?Ke:null},Dt=new Set;for(const N of i){const U=te(N);U&&nt.add(U);const _e=(Cn=(As=(gs=N.presidesFromSha)!=null?gs:N.divergedFromSha)!=null?As:N.createdFromSha)!=null?Cn:null;_e&&qt.add(_e)}const En=N=>{var Oe;const U=Yt(N.id,N.branchName);if(U)return U;const _e=K.get(N.visualId);if(!_e)return null;const xe=$e.get(_e);return xe&&(Oe=qe.find(Ke=>Ke.commit.id===xe))!=null?Oe:null},yt=(N,U)=>N?Lu(B,N,U):null,Zt=N=>({x:N.x+Fo/2,y:N.y+Ni+Rv}),xn=(N,U)=>({x:U?N.x+Fo:N.x+Fo/2,y:U?N.y+Ni/2:N.y}),is=(N,U)=>Lu(B,N,U),Hn=(N,U)=>yt(N,U),Ds=a.flatMap(N=>{var xe,Oe,Ke,Et,Kt;const U=(Ke=(Oe=Yt(N.fullSha,d))!=null?Oe:(xe=B.get(N.fullSha))==null?void 0:xe[0])!=null?Ke:null;return U?((Kt=(Et=N.parentShas)==null?void 0:Et.slice(1))!=null?Kt:[]).map(ze=>{var tt;if(!ze||ze===N.fullSha)return null;const We=(tt=Lu(B,ze))!=null?tt:null;return!We||We.commit.id===U.commit.id?null:{id:`merge:${N.fullSha}:${ze}`,fromX:We.x+Fo/2,fromY:We.y,toX:U.x+Fo-ly,toY:U.y+Ni/2,zIndex:gt(We.commit.branchName),path:bx({laneX:We.x+Fo/2,tipY:We.y,mergeX:U.x+Fo-ly,mergeY:U.y+Ni/2,cornerR:Av,pointFormatter:ue})}}).filter(ze=>ze!=null):[]}),xs=new Set;for(const N of i){if(N.name===d)continue;const U=R.get(N.name);if(!U)continue;const _e=V(N),xe=is((Lo=(xi=(ri=U.parentSha)!=null?ri:N.divergedFromSha)!=null?xi:N.createdFromSha)!=null?Lo:"",_e),Oe=(bi=I.get(N.name))!=null?bi:U,Ke=(Ys=Hn(Oe.id,N.name))!=null?Ys:En(Oe);if(!xe||!Ke||xe.commit.id===Ke.commit.id){const tt=K.get(`${N.name}:${U.id}`),wt=K.get(`${N.name}:${Oe.id}`),zt=!!tt&&!it.has(tt),Qe=!!wt&&!it.has(wt),At=!!tt&&!_.has(tt)&&(zt?g.has(tt):!0),ht=!!wt&&!_.has(wt)&&(Qe?g.has(wt):!0);!xe&&!At&&bt((Xo=Ke==null?void 0:Ke.commit.id)!=null?Xo:U.id,"Missing parent node"),!Ke&&!ht&&bt(U.id,"Missing child node"),rt({id:`branch:${(bs=xe==null?void 0:xe.commit.id)!=null?bs:"null"}->${(se=Ke==null?void 0:Ke.commit.id)!=null?se:"null"}`,kind:"branch",parent:(ae=xe==null?void 0:xe.commit.id)!=null?ae:"null",child:(Me=Ke==null?void 0:Ke.commit.id)!=null?Me:"null",rendered:!1,reason:xe?Ke?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Et=`branch:${xe.commit.id}->${Ke.commit.id}`;if(Dt.has(Et)){rt({id:Et,kind:"branch",parent:xe.commit.id,child:Ke.commit.id,rendered:!1,reason:"duplicate connector key"});continue}Dt.add(Et),Nt.add(xe.commit.id);const Kt=xe.column!==Ke.column;xe.commit.branchName!==Ke.commit.branchName&&xs.add(xe.commit.id);const ze=xn(xe,Kt),We=Zt(Ke);ye.push({id:Et,fromX:ze.x,fromY:ze.y,toX:We.x,toY:We.y,zIndex:gt(Ke.commit.branchName)}),rt({id:Et,kind:"branch",parent:xe.commit.id,child:Ke.commit.id,rendered:!0,reason:Kt?"branch connector rendered":"vertical connector rendered"})}for(const N of qe){const U=(Ce=N.commit.parentSha)!=null?Ce:null;if(!U)continue;const _e=is(U,N.commit.branchName);if(!_e){const ze=(Ge=K.get(`${N.commit.branchName}:${U}`))!=null?Ge:K.get(U),We=!!ze&&!it.has(ze);!!ze&&!_.has(ze)&&(We?g.has(ze):!0)||bt(N.commit.id,"Missing parent node"),rt({id:`${N.commit.visualId}->${U}`,kind:"ancestry",parent:U,child:N.commit.id,rendered:!1,reason:"missing parent node"});continue}const xe=N;if(xe.commit.id===_e.commit.id){bt(xe.commit.id,"Parent and child resolve to the same node"),rt({id:`${_e.commit.id}->${xe.commit.id}`,kind:"ancestry",parent:_e.commit.id,child:xe.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const Oe=`${N.commit.branchName}:${(kt=_e.commit.visualId)!=null?kt:_e.commit.id}->${xe.commit.visualId}`;if(Dt.has(Oe)){bt(_e.commit.id,"Duplicate connector key"),bt(xe.commit.id,"Duplicate connector key"),rt({id:Oe,kind:"ancestry",parent:_e.commit.id,child:xe.commit.id,rendered:!1,reason:"duplicate connector key"});continue}Dt.add(Oe),Nt.add(_e.commit.id);const Ke=_e.column!==xe.column,Et=xn(_e,Ke),Kt=Zt(xe);ye.push({id:Oe,fromX:Et.x,fromY:Et.y,toX:Kt.x,toY:Kt.y,zIndex:gt(xe.commit.branchName)}),rt({id:Oe,kind:"ancestry",parent:_e.commit.id,child:xe.commit.id,rendered:!0,reason:Ke?"ancestry connector rendered":"vertical ancestry rendered"}),Ve.add(_e.commit.id),Ve.add(xe.commit.id)}const Vn=new Map;for(const N of qe){const U=(ct=Vn.get(N.commit.branchName))!=null?ct:[];U.push(N),Vn.set(N.commit.branchName,U)}for(const[N,U]of Vn.entries()){if(U.length<2)continue;const _e=[...U].sort((xe,Oe)=>{var Kt,ze,We,tt,wt,zt,Qe,At;const Ke=Number.isFinite(new Date((ze=(Kt=xe==null?void 0:xe.commit)==null?void 0:Kt.date)!=null?ze:"").getTime())?new Date(xe.commit.date).getTime():0,Et=Number.isFinite(new Date((tt=(We=Oe==null?void 0:Oe.commit)==null?void 0:We.date)!=null?tt:"").getTime())?new Date(Oe.commit.date).getTime():0;return Ke-Et||((zt=(wt=xe==null?void 0:xe.commit)==null?void 0:wt.id)!=null?zt:"").localeCompare((At=(Qe=Oe==null?void 0:Oe.commit)==null?void 0:Qe.id)!=null?At:"")});for(let xe=1;xe<_e.length;xe+=1){const Oe=_e[xe-1],Ke=_e[xe];if(Oe.commit.id===Ke.commit.id)continue;const Et=`chain:${N}:${Oe.commit.id}->${Ke.commit.id}`;if(Dt.has(Et)){bt(Oe.commit.id,"Duplicate branch chain connector"),bt(Ke.commit.id,"Duplicate branch chain connector"),rt({id:Et,kind:"ancestry",parent:Oe.commit.id,child:Ke.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}Dt.add(Et);const Kt=Oe.column!==Ke.column,ze=xn(Oe,Kt),We=Zt(Ke);ye.push({id:Et,fromX:ze.x,fromY:ze.y,toX:We.x,toY:We.y,zIndex:gt(Ke.commit.branchName)}),rt({id:Et,kind:"ancestry",parent:Oe.commit.id,child:Ke.commit.id,rendered:!0,reason:"branch chain rendered"}),Ve.add(Oe.commit.id),Ve.add(Ke.commit.id)}}return{branchByName:C,laneByName:k,mainCommits:M,branchCommitsByLane:L,branchPreviewSets:D,allCommits:P,clustersByBranch:H,clusterKeyByCommitId:K,clusterKeyBySha:Se,leadByClusterKey:$e,clusterCounts:Xe,debugRows:Ot,branchDebugRows:yn,nodes:Sn,normalizedSearchQuery:hn,matchingNodes:mn,matchingNodeIds:Re,focusedNode:X,checkedOutClusterKey:Je,defaultCollapsedClumps:it,visibleCommitsList:Ae,renderNodes:qe,visibleNodesBySha:B,visibleNodeByClusterKey:G,pointFormatter:ue,contentWidth:be,contentHeight:He,connectors:ye,mergeConnectors:Ds,connectorDecisions:Xt,nodeWarnings:Vt,connectorParentShas:Nt,branchStartShas:nt,branchOffNodeShas:qt,crossBranchOutgoingShas:xs,commitIdsWithRenderedAncestry:Ve,branchBaseCommitByName:R}}function $v(t,n,i,a,c,u,d=0){const m=a-Math.sign(a-n||1)*d,p=Math.max(0,Math.min(c,Math.abs(i-t),Math.abs(a-n)));if(p<.5)return[`M ${u(t,n)}`,`L ${u(i,n)}`,`L ${u(i,m)}`].join(" ");const _=i>=t?1:-1,g=a>=n?1:-1,x=i-_*p,v=m-g*p;return[`M ${u(t,n)}`,`L ${u(x,n)}`,`Q ${u(i,n)} ${u(i,n+g*p)}`,`L ${u(i,v)}`,`L ${u(i,m)}`].join(" ")}const tp=2.25,Ul=tp/2,Iv=.45,Pv=.01,ta=tp,md=10,Hv=-100,uy=0,dy=.9,Vv=.9,fy=.001,Ph=.001,Uv=0,Wv=18,Yv=12,Fv=Fo+48;function Ai(...t){return t.filter(Boolean).join(" ")}function Xv(t){return Math.max(Iv,Math.min(tp,t))}function qv(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function np(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function Li(t,n,i,a,c){const{left:u,top:d,right:m,bottom:p}=c;let _=0,g=1;const x=i-t,v=a-n,w=(S,C)=>{if(Math.abs(S)<1e-12)return C>=0;const k=C/S;if(S<0){if(k>g)return!1;k>_&&(_=k)}else{if(k<_)return!1;k<g&&(g=k)}return!0};return!w(-x,t-u)||!w(x,m-t)||!w(-v,n-d)||!w(v,p-n)?!1:_<=g}function wx(t){var u,d,m,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(m=t[0])==null?void 0:m.y)!=null?p:0,a=n,c=i;for(const _ of t)n=Math.min(n,_.x),i=Math.min(i,_.y),a=Math.max(a,_.x),c=Math.max(c,_.y);return{left:n,top:i,right:a,bottom:c}}function Gv(t,n,i,a,c,u,d){const m=a-Math.sign(a-n||1)*u,p=Math.max(0,Math.min(c,Math.abs(i-t),Math.abs(a-n)));if(p<.5)return Li(t,n,i,n,d)||Li(i,n,i,m,d);const _=i>=t?1:-1,g=a>=n?1:-1,x=i-_*p,v=m-g*p,w=i,S=n+g*p;if(Li(t,n,x,n,d))return!0;const C=wx([{x,y:n},{x:i,y:n},{x:w,y:S}]);return np(d,C)||Li(w,S,i,v,d)?!0:Li(i,v,i,m,d)}function Kv(t,n,i,a,c,u){if(Math.abs(a-n)<.5)return Li(t,n,i,a,u);const d=i>=t?1:-1,m=Math.max(0,Math.min(c,Math.abs(a-n),Math.abs(i-t)));if(m<.5)return Li(t,n,t,a,u)||Li(t,a,i,a,u);const p=a-Math.sign(a-n)*m,_=t+d*m;if(Li(t,n,t,p,u))return!0;const g=wx([{x:t,y:p},{x:t,y:a},{x:_,y:a}]);return np(u,g)?!0:Li(_,a,i,a,u)}function Sx(t,n){return{left:t.x,top:t.y+n,right:t.x+Fo,bottom:t.y+_c+Ni+4}}function Qv(t,n){const i=Fv,a=Math.max(120,Math.ceil(_c+Ni+4-n+24)),c=new Map;for(const u of t){const d=Sx(u,n),m=Math.floor(d.left/i),p=Math.floor(d.right/i),_=Math.floor(d.top/a),g=Math.floor(d.bottom/a),x=u.commit.visualId;for(let v=m;v<=p;v++)for(let w=_;w<=g;w++){const S=`${v},${w}`;let C=c.get(S);C||(C=new Set,c.set(S,C)),C.add(x)}}return{cellW:i,cellH:a,buckets:c}}function Zv(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,m=Math.floor(n.left/c),p=Math.floor(n.right/c),_=Math.floor(n.top/u),g=Math.floor(n.bottom/u),x=new Set;for(let w=m;w<=p;w++)for(let S=_;S<=g;S++){const C=d.get(`${w},${S}`);if(C)for(const k of C)x.add(k)}const v=new Set;for(const w of x){const S=i.get(w);if(!S)continue;const C=Sx(S,a);np(n,C)&&v.add(w)}return v}function hy(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/ta;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function Jv(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function my(t,n,i){const a=n/ta;return!Number.isFinite(a)||a<=0?t:Jv(t,100/a)}function py(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function Ti(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function vm(t,n){if(n){const i=py(n),a=py(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function Hh(t,n){return t.pathExists===!1?!1:vm(t,n)}function ew(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function tw({fadeIn:t,className:n,style:i,onClick:a,dataCommitCard:c,children:u}){const[d,m]=y.useState(!t);return y.useLayoutEffect(()=>{if(!t){m(!0);return}m(!1);let p=null;const _=requestAnimationFrame(()=>{p=requestAnimationFrame(()=>m(!0))});return()=>{cancelAnimationFrame(_),p!=null&&cancelAnimationFrame(p)}},[t]),l.jsx("div",{className:n,"data-commit-card":c,onClick:a,style:{...i,opacity:d?1:0,transition:t?"opacity 240ms ease-out":void 0},children:u})}function nw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:m,onMouseDown:p,labelTopPx:_,inverseZoomStyle:g,displayZoom:x,selectedVisibleCommitShas:v,iconScaleStyle:w,normalizedSearchQuery:S,matchingNodeIds:C,focusedNode:k,renderNodes:M,shouldRenderNode:L,manuallyOpenedClumps:D,manuallyClosedClumps:E,defaultCollapsedClumps:$,leadByClusterKey:q,clusterKeyByCommitId:R,clusterCounts:I,commitIdsWithRenderedAncestry:V,nodeWarnings:J,connectorParentShas:te,branchStartShas:pe,branchOffNodeShas:Te,crossBranchOutgoingShas:ke,branchBaseCommitByName:Ee,branchStartAccentClass:P,connectorParentAccentClass:he,commitCornerRadiusPx:Z,lineStrokeWidth:ge,haloStrokeWidth:Be,connectorCornerRadiusPx:z,pointFormatter:oe,connectors:H,mergeConnectors:K,cullConnectorPath:Se,flushCameraReactTick:$e,setManuallyOpenedClumps:Xe,setManuallyClosedClumps:Ze,onCommitCardClick:st,unpushedCommitShasSetByBranch:Gt,checkedOutHeadSha:rn}){const[Ot,yn]=y.useState(new Set),an=y.useRef(null);y.useEffect(()=>{const X=new Set;I.forEach((Je,it)=>{(D.has(it)||!$.has(it)&&!E.has(it))&&X.add(it)});const Re=an.current;if(Re==null){an.current=X;return}const ot=[];if(X.forEach(Je=>{Re.has(Je)||ot.push(Je)}),ot.length>0){yn(it=>{const Ae=new Set(it);return ot.forEach(ut=>Ae.add(ut)),Ae});const Je=window.setTimeout(()=>{yn(it=>{const Ae=new Set(it);return ot.forEach(ut=>Ae.delete(ut)),Ae})},260);return an.current=X,()=>{window.clearTimeout(Je)}}an.current=X},[I,$,E,D]);const Sn=(X,Re)=>{const ot=Re.zIndex-X.zIndex;if(ot!==0)return ot;const Je=Math.min(X.fromY,X.toY),it=Math.min(Re.fromY,Re.toY),Ae=Je-it;return Ae!==0?Ae:X.id.localeCompare(Re.id)},hn=K.filter(X=>Se(X)).sort(Sn),mn=H.filter(X=>Se(X)).sort(Sn);return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:l.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:m,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[M.filter(X=>L(X)).map(X=>{var ye,_t,gt,Xt,rt;const Re=R.get(X.commit.visualId),ot=Re?D.has(Re)||!$.has(Re)&&!E.has(Re):!1,Je=Re?q.get(Re)===X.commit.visualId:!1,it=Re!=null&&ot&&!Je&&Ot.has(Re),Ae=Re&&(ye=I.get(Re))!=null?ye:1,ut=V.has(X.commit.id),Ct=(_t=J.get(X.commit.id))!=null?_t:[],$t=Ct.length>0&&!ut,Ht=v.includes(X.commit.id),qe=X.commit.id==="WORKING_TREE"||X.commit.kind==="uncommitted",B=X.commit.kind==="stash"||X.commit.id.startsWith("STASH:"),G=qe||((Xt=(gt=Gt.get(X.commit.branchName))==null?void 0:gt.has(X.commit.id))!=null?Xt:!1),be=(qe||rn!=null&&X.commit.id===rn)&&!Ht,Ye=be?"text-[#38BDF2]":Ht?"text-[#158EFC]":"text-muted-foreground",He=be?{color:"#38BDF2"}:Ht?{color:"#158EFC"}:void 0;return l.jsxs(tw,{fadeIn:it,dataCommitCard:"true",className:Ai("group absolute z-20 cursor-pointer",S&&!C.has(X.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",S&&C.has(X.commit.id)?"scale-[1.01]":"",(k==null?void 0:k.commit.id)===X.commit.id?"z-30 scale-[1.015]":""),style:{left:X.x,top:X.y,width:Fo,height:_c+Ni+4,overflow:"visible"},onClick:Ve=>st(Ve,X),children:[l.jsx("div",{className:"absolute left-0 w-full",style:{...g,top:`${_}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[l.jsxs("div",{className:Ai("min-w-0 h-4 flex-1 text-sm font-medium leading-none",Ye,x<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:He,children:[X.commit.branchName,"/",X.commit.id.slice(0,7)]}),Je&&Ae>1?l.jsx("button",{type:"button",onMouseDown:Ve=>{Ve.stopPropagation()},onClick:Ve=>{if(Ve.stopPropagation(),Ve.preventDefault(),!Re)return;!$.has(Re)?(Xe(bt=>{if(!bt.has(Re))return bt;const Nt=new Set(bt);return Nt.delete(Re),Nt}),Ze(bt=>{const Nt=new Set(bt);return Nt.has(Re)?Nt.delete(Re):Nt.add(Re),Nt})):(Ze(bt=>{if(!bt.has(Re))return bt;const Nt=new Set(bt);return Nt.delete(Re),Nt}),Xe(bt=>{const Nt=new Set(bt);return Nt.has(Re)?Nt.delete(Re):Nt.add(Re),Nt})),$e()},className:Ai("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",Ye),style:He,children:ot?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${Ae}`}):null]})}),l.jsx("div",{className:Ai("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",be&&!G&&!B?"bg-[#EBF7FE]":Ht&&!G&&!B?"bg-[#E5F0FF]":G||B?"bg-transparent":"bg-[#F5F5F5]",B||qe?"border-dashed":"",Te.has(X.commit.id)||pe.has(X.commit.id)||ke.has(X.commit.id)?P:te.has(X.commit.id)?he:((rt=Ee.get(X.commit.branchName))==null?void 0:rt.id)===X.commit.id?"border-amber-500":$t?"border-red-500":"",(S&&C.has(X.commit.id)&&!d,"")),style:{top:0,borderWidth:`${B||qe?ge*(2/1.5):ge}px`,borderColor:be?"#38BDF2":Ht?"#158EFC":$h,borderTopLeftRadius:0,borderTopRightRadius:`${Z}px`,borderBottomRightRadius:`${Z}px`,borderBottomLeftRadius:`${Z}px`},children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:g,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:Ai("max-w-[38rem] text-sm font-medium leading-tight tracking-tight text-muted-foreground",Ye,x<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:He,children:Je&&ot?X.commit.message:Je&&Ae>1?`${X.commit.message} +${Ae-1}`:X.commit.message}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:$t?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:Ct.join(`
`),children:"Broken ancestry"}):null})]}),x>.5?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:Ai("text-sm font-medium",Ye),style:He,children:["@",X.commit.author]}),l.jsx("div",{className:Ai("text-sm font-medium",Ye),style:He,children:new Date(X.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null,(k==null?void 0:k.commit.id)===X.commit.id&&S?l.jsx("div",{className:"absolute left-5 top-4 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground",style:w,children:"Search result"}):null]})})]},X.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[hn.map(X=>{const Re=bx({laneX:X.fromX,tipY:X.fromY,mergeX:X.toX,mergeY:X.toY,cornerR:z,pointFormatter:oe});return l.jsxs(y.Fragment,{children:[l.jsx("path",{d:Re,fill:"none",stroke:"#FAFAF9",strokeWidth:Be,strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:Re,fill:"none",stroke:$h,strokeWidth:ge,strokeLinecap:"round",strokeLinejoin:"round"})]},X.id)}),mn.map(X=>{const Re=$v(X.fromX,X.fromY,X.toX,X.toY,z,oe,0);return l.jsxs(y.Fragment,{children:[l.jsx("path",{d:Re,fill:"none",stroke:"#FAFAF9",strokeWidth:Be,strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:Re,fill:"none",stroke:$h,strokeWidth:ge,strokeLinecap:"round",strokeLinejoin:"round"})]},X.id)})]})]})})})}function sw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stageInProgress:a,stashInProgress:c,stashDisabled:u,pushInProgress:d,deleteInProgress:m,createBranchFromNodeInProgress:p,onCommitLocalChanges:_,onStageAllChanges:g,onStashLocalChanges:x,onPushCurrentBranch:v,onPushAllBranches:w,onPushCommitTargets:S,onDeleteSelection:C,onCreateBranchFromNode:k,onMergeRefsIntoBranch:M,selectedPushTargets:L,selectedPushLabel:D,canPushCurrentBranch:E,pushCurrentBranchLabel:$,pushableRemoteBranchCount:q,deletableSelectionCount:R,selectedCommitCanCreateBranch:I,selectedCommitTargetOption:V,mergeInProgress:J,setMergeTargetCommitSha:te,worktrees:pe,currentRepoPath:Te,worktreeMenuOpen:ke,setWorktreeMenuOpen:Ee,onSwitchToWorktree:P,onRemoveWorktree:he,removeWorktreeInProgress:Z,setCommitDialogOpen:ge,setDeleteConfirmOpen:Be,setNewBranchDialogOpen:z}){const oe=t.length>0;return l.jsxs("div",{className:"pointer-events-none absolute bottom-4 left-4 right-4 z-[70] flex flex-wrap items-center gap-2",children:[l.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[l.jsx("button",{type:"button",onClick:()=>ge(!0),disabled:!_||i||oe||n,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:n?"Committing...":"Commit"}),l.jsx("button",{type:"button",onClick:()=>void(g==null?void 0:g()),disabled:!g||i||oe||a,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:a?"Staging...":"Stage all"}),l.jsx("button",{type:"button",onClick:()=>void(x==null?void 0:x()),disabled:!x||u||oe||c,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:c?"Stashing...":"Stash"}),l.jsx("button",{type:"button",onClick:()=>void(v==null?void 0:v()),disabled:!v||!E||oe||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:d?"Pushing...":$}),l.jsx("button",{type:"button",onClick:()=>void(w==null?void 0:w()),disabled:!w||q<2||oe||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Push all"}),l.jsx("button",{type:"button",onClick:()=>void(S==null?void 0:S(L.map(H=>({branchName:H.branchName,targetSha:H.targetSha})))),disabled:!S||L.length===0||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",title:L.length>0?D:"Select commits to push",children:L.length>0?D:"Push selected"}),l.jsx("button",{type:"button",onClick:()=>Be(!0),disabled:!C||R===0||m,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20 disabled:cursor-not-allowed disabled:opacity-50",children:m?"Deleting...":"Delete selection"}),l.jsx("button",{type:"button",onClick:()=>z(!0),disabled:!k||!I||p,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:p?"Creating...":"Create branch"})]}),t.length>1&&V.options.length>0&&V.targetBranch&&M?l.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[l.jsx("span",{className:"px-1 text-xs font-medium text-muted-foreground",children:"merge to"}),V.options.map(H=>{const K=H.targetBranch===V.targetBranch;return l.jsx("button",{type:"button",onClick:()=>te(H.targetSha),className:Ai("rounded-full px-2.5 py-1 text-xs font-medium transition-colors",K?"bg-primary/10 text-primary":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:H.targetBranch},`merge-${H.targetBranch}`)}),l.jsx("button",{type:"button",onClick:()=>void M(V.sources,V.targetBranch),disabled:V.sources.length===0||J,className:"rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",children:J?"Merging...":"Confirm"})]}):null,pe.length>0&&(P||he)?l.jsxs("div",{className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>Ee(H=>!H),className:"rounded-full border border-border bg-card/95 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-accent",children:[pe.length," ",pe.length===1?"Worktree":"Worktrees"]}),ke?l.jsx("div",{className:"absolute bottom-full left-0 mb-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border bg-card p-2",children:pe.map(H=>{var K;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:H.path,children:vm(H,Te)?ew(H.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(K=H.branchName)!=null?K:"detached"," • ",H.headSha.slice(0,7)]})]}),vm(H,Te)?l.jsxs("div",{className:"flex items-center gap-1",children:[P?l.jsx("button",{type:"button",onClick:()=>{Ee(!1),P(H.path)},disabled:Z||H.pathExists===!1,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,he?l.jsx("button",{type:"button",onClick:()=>void he(H.path,H.isPrunable),disabled:Z,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:Z?"...":"Remove"}):null]}):null]},H.path)})}):null]}):null]})}function ow({isOpen:t,onToggle:n,onClose:i,visibleBounds:a,renderedNodeCount:c,totalNodeCount:u,renderedMergeConnectorCount:d,totalMergeConnectorCount:m,renderedConnectorCount:p,totalConnectorCount:_,mapGridCullViewportInsetScreenPx:g,debugRows:x,branchDebugRows:v,connectorDecisions:w}){return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"pointer-events-none absolute bottom-4 right-4 z-[10000] flex items-end gap-2",children:l.jsx("button",{type:"button",onClick:n,className:Ai("pointer-events-auto inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium transition-colors",t?"border-primary/30 bg-primary/10 text-primary":"border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"),children:"Debug"})}),t?l.jsxs("div",{className:"absolute bottom-14 right-4 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:i,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${g}px screen/side): ${a?`${(a.right-a.left).toFixed(0)} x ${(a.bottom-a.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${c} / ${u}`,`Rendered merge connectors: ${d} / ${m}`,`Rendered connectors: ${p} / ${_}`,"",...x,...v,"",...w.map(S=>`${S.rendered?"rendered":"skipped"} [${S.kind}] ${S.parent.slice(0,7)} -> ${S.child.slice(0,7)} (${S.reason})`)].join(`
`)})})]}):null]})}function iw({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:m,onDeleteConfirmClose:p,onDeleteConfirm:_,deleteInProgress:g,deletableSelectionCount:x,newBranchDialogOpen:v,newBranchName:w,onNewBranchNameChange:S,onNewBranchDialogClose:C,onNewBranchConfirm:k,createBranchFromNodeInProgress:M}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:L=>i(L.target.value),onKeyDown:L=>{(L.metaKey||L.ctrlKey)&&L.key==="Enter"&&(L.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:u?"Committing...":"Commit"})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:m.map(L=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:L},L))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:_,disabled:x===0||g,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:g?"Deleting...":"Delete"})]})]})}):null,v?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch from selected node"}),l.jsx("input",{value:w,onChange:L=>S(L.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:C,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:k,disabled:!w.trim()||M,className:Ai("rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:M?"Creating...":"Create"})]})]})}):null]})}function aw({mapPadHostRef:t,transformLayerRef:n}){const i=y.useRef({x:0,y:0}),a=y.useRef(Ul),c=y.useRef({panX:0,panY:0,zoom:Ul}),u=y.useRef(null),d=y.useRef(Ul),m=y.useRef(null),[p,_]=y.useState(!1),[g,x]=y.useState(Ul),[v,w]=y.useState(0),S=y.useRef(null),C=y.useRef(0),k=y.useCallback(()=>{const V=t.current;if(!V)return null;const J=V.getBoundingClientRect(),te=getComputedStyle(V),pe=Number.parseFloat(te.borderLeftWidth)||0,Te=Number.parseFloat(te.borderTopWidth)||0,ke=Number.parseFloat(te.paddingLeft)||md,Ee=Number.parseFloat(te.paddingTop)||md;return{x:J.left+pe+ke,y:J.top+Te+Ee}},[t]),M=y.useCallback(()=>{S.current!=null&&(window.clearTimeout(S.current),S.current=null),y.startTransition(()=>{w(V=>V+1)}),C.current=performance.now()},[]),L=y.useCallback((V,J,te)=>{const pe=c.current;c.current={panX:V,panY:J,zoom:te};const Te=n.current;if(Te&&(Te.style.transform=`translate3d(${V}px, ${J}px, 0) scale(${te/ta})`),Math.abs(d.current-te)>Ph&&(d.current=te,x(te)),Math.abs(te-pe.zoom)>Ph){M();return}const P=performance.now()-C.current;if(P>=uy){M();return}S.current!=null&&window.clearTimeout(S.current),S.current=window.setTimeout(()=>{S.current=null,M()},uy-P)},[M,n]),D=y.useRef(null),E=y.useCallback(()=>{u.current!=null||!D.current||(u.current=window.requestAnimationFrame(D.current))},[]),$=y.useCallback(()=>{_(!0),m.current!=null&&window.clearTimeout(m.current),m.current=window.setTimeout(()=>{m.current=null,_(!1)},90)},[]),q=y.useCallback((V,J,te)=>{i.current={x:V,y:J},a.current=te,$(),E()},[$,E]);D.current=()=>{u.current=null;const V=c.current,J=i.current.x,te=i.current.y,pe=a.current,Te=Math.abs(J-V.panX)<=fy?J:V.panX+(J-V.panX)*dy,ke=Math.abs(te-V.panY)<=fy?te:V.panY+(te-V.panY)*dy,Ee=Math.abs(pe-V.zoom)<=Ph?pe:V.zoom+(pe-V.zoom)*Vv;L(Te,ke,Ee),Te!==J||ke!==te||Ee!==pe?D.current&&(u.current=window.requestAnimationFrame(D.current)):M()};const R=y.useCallback((V,J,te)=>{const pe=Xv(te),Te=c.current,ke=k();if(!ke){q(i.current.x,i.current.y,pe);return}const Ee=V-ke.x,P=J-ke.y,he=Te.zoom/ta,Z=pe/ta,ge=(Ee-Te.panX)/he,Be=(P-Te.panY)/he;q(Ee-ge*Z,P-Be*Z,pe)},[k,q]),I=y.useCallback(V=>{if(V.preventDefault(),V.ctrlKey||V.metaKey){const J=Math.exp(-V.deltaY*Pv);R(V.clientX,V.clientY,a.current*J);return}q(i.current.x-V.deltaX,i.current.y-V.deltaY,a.current)},[q,R]);return y.useLayoutEffect(()=>(L(0,0,Ul),()=>{m.current!=null&&window.clearTimeout(m.current),u.current!=null&&window.cancelAnimationFrame(u.current),S.current!=null&&(window.clearTimeout(S.current),S.current=null)}),[L]),y.useLayoutEffect(()=>{const V=n.current;if(!V)return;const J=c.current;V.style.transform=`translate3d(${J.panX}px, ${J.panY}px, 0) scale(${J.zoom/ta})`}),{isCameraMoving:p,renderedZoom:g,cameraRenderTick:v,renderedCameraRef:c,interactionIdleTimeoutRef:m,getTransformLayerOriginScreen:k,flushCameraReactTick:M,syncCamera:q,handleWheel:I}}function rw(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function lw({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=y.useRef(null),m=y.useRef(!1),p=y.useRef([]),[_,g]=y.useState(!1),[x,v]=y.useState(null),[w,S]=y.useState([]),[C,k]=y.useState(null),M=y.useCallback(D=>{const E=t.current,$=i();if(!E||!$)return[];const q=E.getBoundingClientRect(),R=n.current.zoom/ta;if(R<=0)return[];const I=[],V=D.left,J=D.left+D.width,te=D.top,pe=D.top+D.height;for(const Te of a){if(!c(Te))continue;const ke=$.x+n.current.panX+Te.x*R-q.left,Ee=$.y+n.current.panY+Te.y*R-q.top,P=ke+Fo*R,he=Ee+(_c+Ni)*R;!(P<V||ke>J||he<te||Ee>pe)&&I.push(Te.commit.id)}return I},[i,a,n,t,c]),L=y.useCallback(D=>{if(D.button!==0)return;const E=D.target;if(E!=null&&E.closest("[data-commit-card]")||E!=null&&E.closest("button, a, input, textarea, select"))return;const $=t.current;if(!$)return;D.preventDefault();const q=$.getBoundingClientRect(),R=D.clientX-q.left,I=D.clientY-q.top;d.current={startX:R,startY:I,currentX:R,currentY:I,additive:D.metaKey||D.ctrlKey},m.current=!1,p.current=D.metaKey||D.ctrlKey?w:[],g(!0),v({left:R,top:I,width:0,height:0})},[t,w]);return y.useEffect(()=>{const D=$=>{var te;const q=d.current;if(!q)return;const R=t.current;if(!R)return;const I=R.getBoundingClientRect();q.currentX=$.clientX-I.left,q.currentY=$.clientY-I.top,!m.current&&(Math.abs(q.currentX-q.startX)>2||Math.abs(q.currentY-q.startY)>2)&&(m.current=!0);const V=rw(q);v(V);const J=M(V);S(q.additive?Array.from(new Set([...p.current,...J])):Array.from(new Set(J))),q.additive||k((te=J[J.length-1])!=null?te:null)},E=()=>{if(d.current){const $=m.current;d.current=null,m.current=!1,g(!1),v(null),$||(S([]),k(null));return}u()};return window.addEventListener("mousemove",D),window.addEventListener("mouseup",E),()=>{window.removeEventListener("mousemove",D),window.removeEventListener("mouseup",E)}},[M,u,t]),{isMarqueeSelecting:_,marqueeRect:x,selectedCommitShas:w,setSelectedCommitShas:S,mergeTargetCommitSha:C,setMergeTargetCommitSha:k,startMarqueeDrag:L}}function _y({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:m,onLoadMore:p,view:_,staleBranches:g=[],isLoading:x=!1,scrollRequest:v,focusedErrorBranch:w,mapTopInsetPx:S=0,onMergeRefsIntoBranch:C,mergeInProgress:k=!1,onPushAllBranches:M,onPushCurrentBranch:L,onPushCommitTargets:D,pushInProgress:E=!1,onDeleteSelection:$,deleteInProgress:q=!1,worktrees:R=[],currentRepoPath:I,onRemoveWorktree:V,removeWorktreeInProgress:J=!1,onSwitchToWorktree:te,onStashLocalChanges:pe,stashInProgress:Te=!1,stashDisabled:ke=!1,onCommitLocalChanges:Ee,commitInProgress:P=!1,commitDisabled:he=!1,onStageAllChanges:Z,stageInProgress:ge=!1,onCreateBranchFromNode:Be,createBranchFromNodeInProgress:z=!1,orientation:oe="vertical",branchCommitPreviews:H={},branchUniqueAheadCounts:K={},gridSearchQuery:Se="",gridSearchJumpToken:$e=0,gridFocusSha:Xe=null,checkedOutRef:Ze=null,onGridSearchResultCountChange:st,onGridSearchFocusChange:Gt,onInteractionChange:rn}){var Oo,An,ys,Gs,ro,So,sa,za,$a,vi;const Ot=y.useRef(null),yn=y.useRef(null),an=y.useRef(null),[Sn,hn]=y.useState(!1),[mn,X]=y.useState(!1),[Re,ot]=y.useState(""),[Je,it]=y.useState(!1),[Ae,ut]=y.useState(!1),[Ct,$t]=y.useState(""),[Ht,qe]=y.useState(()=>new Set),[B,G]=y.useState(()=>new Set),[ue,be]=y.useState(!1),[Ye,He]=y.useState(null),[ye,_t]=y.useState(null),{isCameraMoving:gt,renderedZoom:Xt,cameraRenderTick:rt,renderedCameraRef:Ve,interactionIdleTimeoutRef:Vt,getTransformLayerOriginScreen:bt,flushCameraReactTick:Nt,syncCamera:nt,handleWheel:qt}=aw({mapPadHostRef:yn,transformLayerRef:an}),Yt=y.useMemo(()=>Dv(t,d,H),[t,d,H]),Dt=y.useMemo(()=>zv({lanes:Yt,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:H,branchUniqueAheadCounts:K,manuallyOpenedClumps:Ht,manuallyClosedClumps:B,isDebugOpen:ue,gridSearchQuery:Se,gridFocusSha:Xe,checkedOutRef:Ze!=null?Ze:null}),[Yt,t,n,i,a,d,H,K,Ht,B,ue,Se,Xe,(Oo=Ze==null?void 0:Ze.headSha)!=null?Oo:null,(An=Ze==null?void 0:Ze.branchName)!=null?An:null]),{allCommits:En,debugRows:yt,branchDebugRows:Zt,clusterKeyByCommitId:xn,leadByClusterKey:is,clusterCounts:Hn,matchingNodes:Ds,matchingNodeIds:xs,normalizedSearchQuery:Vn,focusedNode:dn,defaultCollapsedClumps:Ln,renderNodes:Ut,visibleNodesBySha:Xn,contentWidth:Pe,contentHeight:_s,connectors:fo,mergeConnectors:wo,connectorDecisions:Us,nodeWarnings:to,commitIdsWithRenderedAncestry:Ao,connectorParentShas:no,branchStartShas:so,branchOffNodeShas:ho,crossBranchOutgoingShas:Ws,branchBaseCommitByName:qn,pointFormatter:Ro}=Dt,mo=!!Vn,Bn=Xt/ta,ls=y.useMemo(()=>({transform:`scale(${1/Bn})`,transformOrigin:"top left",width:`${100*Bn}%`,height:`${100*Bn}%`}),[Bn]),Xs=-(20/Bn),No=y.useMemo(()=>{const le=new Map;for(const lt of Ut)le.set(lt.commit.visualId,lt);return le},[Ut]),oo=y.useMemo(()=>Qv(Ut,Xs),[Ut,Xs]),io=le=>{var Pt;const lt=le.commit.id,Rt=le.commit.visualId;if(mo&&xs.has(lt)||(dn==null?void 0:dn.commit.id)===lt||Ye===null)return!0;if(!Ye.has(Rt))return!1;const dt=xn.get(Rt);return dt&&((Pt=Hn.get(dt))!=null?Pt:1)>1&&(Ht.has(dt)||!Ln.has(dt)&&!B.has(dt)),!0},qs=1.5/Bn,gs=6/Bn,As=Math.max(0,1-Bn)*8,Cn=Math.max(6,Wv-As)/Bn,ri=Yv/Bn,xi=y.useMemo(()=>({transform:`scale(${1/Bn})`,transformOrigin:"center"}),[Bn]),Lo="border-slate-400/70",bi="border-blue-500",Ys=y.useMemo(()=>new Map(t.map(le=>[le.name,le])),[t]);y.useMemo(()=>new Set(t.filter(le=>le.commitsAhead===0&&!le.name.startsWith("*")).map(le=>le.name)),[t]);const Xo=y.useMemo(()=>{var lt,Rt;const le=new Map;for(const dt of Ut){const Pt=(lt=le.get(dt.commit.id))!=null?lt:new Set;Pt.add(dt.commit.branchName),le.set(dt.commit.id,Pt)}for(const dt of i){const Pt=(Rt=le.get(dt.fullSha))!=null?Rt:new Set;Pt.add(d),le.set(dt.fullSha,Pt)}return le},[Ut,i,d]),bs=y.useMemo(()=>new Map(Object.entries(c).map(([le,lt])=>[le,new Set(lt)])),[c]),se=y.useCallback(()=>{Vt.current,Nt()},[Nt,Vt]),{isMarqueeSelecting:ae,marqueeRect:Me,selectedCommitShas:Ce,setSelectedCommitShas:Ge,mergeTargetCommitSha:kt,setMergeTargetCommitSha:ct,startMarqueeDrag:N}=lw({scrollContainerRef:Ot,renderedCameraRef:Ve,getTransformLayerOriginScreen:bt,renderNodes:Ut,shouldRenderNode:io,onPointerReleaseNoMarquee:se}),U=y.useMemo(()=>new Set(Ut.map(le=>le.commit.id)),[Ut]),_e=y.useMemo(()=>Ce.filter(le=>U.has(le)),[Ce,U]),xe=y.useCallback((le,lt)=>{var Pt;if(!lt)return!1;if(((Pt=H[le])!=null?Pt:[]).some(Lt=>Ti(Lt.fullSha,lt)||Ti(Lt.sha,lt)))return!0;const dt=Ys.get(le);return!!(dt!=null&&dt.headSha&&Ti(dt.headSha,lt))},[H,Ys]),Oe=(ys=Ze==null?void 0:Ze.branchName)!=null?ys:null,Ke=(Gs=Ze==null?void 0:Ze.headSha)!=null?Gs:null,Et=Oe==null,Kt=y.useCallback((le,lt,Rt)=>{for(const dt of R){if(!Hh(dt,I))continue;if(dt.branchName){if(dt.branchName===le&&Ti(dt.headSha,lt))return dt;continue}if(!Ti(dt.headSha,lt)&&!Ti(dt.headSha,Rt))continue;if(dt.parentSha&&xe(le,dt.parentSha)||xe(le,dt.headSha))return dt;const Pt=Ys.get(le);if(Pt&&Ti(Pt.headSha,dt.headSha)||le===d&&i.some(Lt=>Ti(Lt.fullSha,dt.headSha)))return dt}return null},[R,I,xe,Ys,d,i]),ze=y.useCallback(le=>{for(const lt of R)if(Hh(lt,I)&&lt.branchName===le)return lt;return null},[R,I]),We=y.useCallback((le,lt)=>{for(const Rt of R)if(Hh(Rt,I)&&(Ti(Rt.headSha,le)||Ti(Rt.headSha,lt)))return Rt;return null},[R,I]),tt=y.useCallback(le=>{var lt;return Array.from((lt=Xo.get(le))!=null?lt:[])},[Xo]),wt=y.useMemo(()=>{var Pt,Lt,Mn,bn;const le=new Map;for(const ws of _e){const Is=tt(ws);if(Is.length===0)continue;const wi=(Pt=Is.find(qo=>qo!==d))!=null?Pt:Is[0],cr=_e.filter(qo=>qo!==ws).filter(qo=>!new Set(tt(qo)).has(wi));le.set(wi,{targetSha:ws,targetBranch:wi,sourceRefs:cr})}const lt=Array.from(le.values()),Rt=kt?lt.find(ws=>{var Is;return ws.targetSha===kt||ws.targetBranch===((Is=tt(kt)[0])!=null?Is:"")}):null,dt=(Lt=Rt!=null?Rt:lt[lt.length-1])!=null?Lt:null;return{options:lt,selected:dt,targetBranch:(Mn=dt==null?void 0:dt.targetBranch)!=null?Mn:null,sources:(bn=dt==null?void 0:dt.sourceRefs)!=null?bn:[]}},[_e,tt,d,kt]),zt=y.useMemo(()=>{const le=[...Oe===d?[{name:d,headSha:Ke!=null?Ke:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(lt=>!lt.name.startsWith("*")&&lt.unpushedCommits>0&&lt.remoteSyncStatus!=="on-github").map(lt=>[lt.name,lt]);return new Map(le)},[t,Oe,Ke,d,a.length]),Qe=y.useMemo(()=>{const le=dt=>{var Lt;const Pt=tt(dt).filter(Mn=>zt.has(Mn));return Pt.length===0?null:Pt.length===1?Pt[0]:Oe&&Pt.includes(Oe)?Oe:(Lt=Pt.find(Mn=>Mn!==d))!=null?Lt:Pt[0]},lt=dt=>{var Pt;return dt===d?a.map(Lt=>{var Mn,bn;return{fullSha:Lt.fullSha,sha:Lt.sha,parentSha:(Mn=Lt.parentSha)!=null?Mn:null,message:Lt.message,author:Lt.author,date:Lt.date,kind:(bn=Lt.kind)!=null?bn:"commit"}}):(Pt=H[dt])!=null?Pt:[]},Rt=new Map;for(const dt of _e){const Pt=le(dt);if(!Pt)continue;const Lt=zt.get(Pt);if(!Lt)continue;const Mn=lt(Pt).slice(0,Lt.unpushedCommits),bn=Mn.findIndex(Is=>Is.fullSha===dt);if(bn===-1)continue;const ws=Rt.get(Pt);(!ws||bn<ws.targetIndex)&&Rt.set(Pt,{branchName:Pt,targetSha:dt,targetIndex:bn,commitCount:Mn.length-bn})}return Array.from(Rt.values())},[_e,tt,zt,Oe,d,a,H]),At=y.useMemo(()=>Array.from(new Set(_e.map(le=>/^STASH:(\d+)$/.exec(le)).filter(le=>!!le).map(le=>parseInt(le[1],10)))).sort((le,lt)=>le-lt),[_e]),ht=_e.includes("WORKING_TREE"),Jt=(ht?1:0)+At.length,Dn=[...ht?["Uncommitted changes"]:[],...At.map(le=>`Stash ${le+1}`)],pn=zt.size,Tt=!Et&&!!Oe&&zt.has(Oe),un=Oe?`Push ${Oe}`:"Push current branch",ts=Qe.length===1?Qe[0].commitCount>1?`Push ${Qe[0].commitCount} commits on ${Qe[0].branchName}`:`Push ${Qe[0].targetSha.slice(0,7)} on ${Qe[0].branchName}`:`Push ${Qe.length} selected ranges`;y.useEffect(()=>{rn==null||rn(gt||ae)},[gt,ae,rn]),y.useEffect(()=>{st==null||st(Vn?Ds.length:null)},[Ds.length,Vn,st]),y.useEffect(()=>{var lt,Rt;if(!Vn){Gt==null||Gt(null);return}const le=(Rt=(lt=Ds[0])==null?void 0:lt.commit.id)!=null?Rt:null;Gt==null||Gt(le)},[Ds,Vn,Gt]),y.useLayoutEffect(()=>{if(!Xe)return;const le=Ot.current,lt=dn;if(!le||!lt)return;const Rt=bt();if(!Rt)return;const dt=le.getBoundingClientRect(),Pt=Ve.current.zoom,Lt=Pt/ta,Mn=lt.x+Fo/2,bn=lt.y+_c+Ni/2,ws=dt.left+dt.width/2,Is=dt.top+dt.height/2;nt(ws-Rt.x-Mn*Lt,Is-Rt.y-bn*Lt,Pt)},[Xe,$e,dn,bt]);const Un=(sa=(So=ye==null?void 0:ye.width)!=null?So:(ro=Ot.current)==null?void 0:ro.clientWidth)!=null?sa:0,as=(vi=($a=ye==null?void 0:ye.height)!=null?$a:(za=Ot.current)==null?void 0:za.clientHeight)!=null?vi:0,js=Un>0&&as>0?hy(Un,as,Ve.current,{innerPaddingPx:md}):null,po=js!=null?my(js,Ve.current.zoom):null,On=le=>po?le.id.startsWith("merge:")?Kv(le.fromX,le.fromY,le.toX,le.toY,Cn,po):Gv(le.fromX,le.fromY,le.toX,le.toY,Cn,Uv,po):!0;y.useLayoutEffect(()=>{var Mn;const le=Ot.current;if(!le||le.clientWidth<=0||le.clientHeight<=0)return;const lt=le.clientWidth,Rt=le.clientHeight;_t(bn=>(bn==null?void 0:bn.width)===lt&&(bn==null?void 0:bn.height)===Rt?bn:{width:lt,height:Rt});const dt=hy(lt,Rt,Ve.current,{innerPaddingPx:md});if(!dt){He(bn=>bn===null?bn:null);return}const Pt=my(dt,Ve.current.zoom),Lt=Zv(oo,Pt,No,Xs);for(const bn of Ut){const ws=xn.get(bn.commit.visualId);if(!ws||((Mn=Hn.get(ws))!=null?Mn:1)<=1)continue;(Ht.has(ws)||!Ln.has(ws)&&!B.has(ws))&&Lt.add(bn.commit.visualId)}He(bn=>qv(bn,Lt)?bn:Lt)},[Xt,$e,Xe,gt,rt,Ht,B,Ln,xn,Hn,Ut,ye,oo,No,Xs]),y.useLayoutEffect(()=>{const le=Ot.current;if(!le)return;const lt=()=>{const dt=le.clientWidth,Pt=le.clientHeight;dt<=0||Pt<=0||_t(Lt=>(Lt==null?void 0:Lt.width)===dt&&(Lt==null?void 0:Lt.height)===Pt?Lt:{width:dt,height:Pt})};lt();const Rt=new ResizeObserver(lt);return Rt.observe(le),()=>Rt.disconnect()},[En.length]);const en=Ut.filter(le=>io(le)).length,zn=wo.filter(le=>On(le)).length,$s=fo.filter(le=>On(le)).length,ao=y.useCallback((le,lt)=>{le.stopPropagation();const Rt=lt.commit.id;if(le.shiftKey?(Ge(Mn=>Mn.includes(Rt)?Mn.filter(bn=>bn!==Rt):[...Mn,Rt]),ct(Rt)):(Ge(Mn=>Mn.includes(Rt)?[]:[Rt]),ct(Mn=>Mn===Rt?null:Rt)),!(le.metaKey||le.ctrlKey||le.detail>=2)||Rt==="WORKING_TREE")return;const Pt=Rt.length>=40?Rt.slice(0,7):Rt;let Lt=null;if(lt.commit.branchName?(Lt=Kt(lt.commit.branchName,Rt,Pt),Lt||(Lt=ze(lt.commit.branchName))):Lt=We(Rt,Pt),Lt&&te){te(Lt.path);return}m==null||m({commitSha:Rt})},[We,Kt,ze,m,te]),li=y.useCallback(async()=>{if(!Ee)return;await Ee(Re)&&(X(!1),ot(""))},[Ee,Re]),_o=y.useCallback(async()=>{$&&(await $({branchNames:[],discardUncommittedChanges:ht,stashIndices:At}),it(!1),Ge([]),ct(null))},[$,ht,At]),vs=y.useCallback(async()=>{if(!Be||_e.length!==1)return;const le=_e[0];if(!(le==="WORKING_TREE"||le.startsWith("STASH:")))return;const lt=Ct.trim();lt&&(await Be(le,lt),ut(!1),$t(""),Ge([]),ct(null))},[Be,_e,Ct]),Bo=_e.length===1&&(_e[0]==="WORKING_TREE"||_e[0].startsWith("STASH:"));return l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-card",children:[l.jsx(ow,{isOpen:ue,onToggle:()=>be(le=>!le),onClose:()=>be(!1),visibleBounds:po,renderedNodeCount:en,totalNodeCount:Ut.length,renderedMergeConnectorCount:zn,totalMergeConnectorCount:wo.length,renderedConnectorCount:$s,totalConnectorCount:fo.length,mapGridCullViewportInsetScreenPx:Hv,debugRows:yt,branchDebugRows:Zt,connectorDecisions:Us}),En.length===0?l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center py-20",children:l.jsx("div",{className:"rounded-xl border border-border/50 bg-muted/30 px-4 py-3",children:l.jsx("p",{className:"text-sm text-muted-foreground",children:"No commits to render"})})}):l.jsx(nw,{scrollContainerRef:Ot,mapPadHostRef:yn,transformLayerRef:an,isMarqueeSelecting:ae,contentWidth:Pe,contentHeight:_s,isCameraMoving:gt,onWheel:qt,onMouseDown:N,labelTopPx:Xs,inverseZoomStyle:ls,displayZoom:Bn,iconScaleStyle:xi,selectedVisibleCommitShas:_e,normalizedSearchQuery:Vn,matchingNodeIds:xs,focusedNode:dn,renderNodes:Ut,shouldRenderNode:io,manuallyOpenedClumps:Ht,manuallyClosedClumps:B,defaultCollapsedClumps:Ln,leadByClusterKey:is,clusterKeyByCommitId:xn,clusterCounts:Hn,commitIdsWithRenderedAncestry:Ao,nodeWarnings:to,connectorParentShas:no,branchStartShas:so,branchOffNodeShas:ho,crossBranchOutgoingShas:Ws,branchBaseCommitByName:qn,branchStartAccentClass:bi,connectorParentAccentClass:Lo,commitCornerRadiusPx:ri,lineStrokeWidth:qs,haloStrokeWidth:gs,connectorCornerRadiusPx:Cn,pointFormatter:Ro,connectors:fo,mergeConnectors:wo,cullConnectorPath:On,flushCameraReactTick:Nt,setManuallyOpenedClumps:qe,setManuallyClosedClumps:G,onCommitCardClick:ao,unpushedCommitShasSetByBranch:bs,checkedOutHeadSha:Ke}),Me&&ae?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:Me.left,top:Me.top,width:Me.width,height:Me.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(sw,{selectedVisibleCommitShas:_e,commitInProgress:P,commitDisabled:he,stageInProgress:ge,stashInProgress:Te,stashDisabled:ke,pushInProgress:E,deleteInProgress:q,createBranchFromNodeInProgress:z,onCommitLocalChanges:Ee,onStageAllChanges:Z?()=>void Z():void 0,onStashLocalChanges:pe,onPushCurrentBranch:L,onPushAllBranches:M,onPushCommitTargets:D,onDeleteSelection:$,onCreateBranchFromNode:Be,onMergeRefsIntoBranch:C,selectedPushTargets:Qe,selectedPushLabel:ts,canPushCurrentBranch:Tt,pushCurrentBranchLabel:un,pushableRemoteBranchCount:pn,deletableSelectionCount:Jt,selectedCommitCanCreateBranch:Bo,selectedCommitTargetOption:wt,mergeInProgress:k,mergeTargetCommitSha:kt,setMergeTargetCommitSha:ct,worktrees:R,currentRepoPath:I,worktreeMenuOpen:Sn,setWorktreeMenuOpen:hn,onSwitchToWorktree:te,onRemoveWorktree:V,removeWorktreeInProgress:J,setCommitDialogOpen:X,setDeleteConfirmOpen:it,setNewBranchDialogOpen:ut}),l.jsx(iw,{commitDialogOpen:mn,commitMessageDraft:Re,onCommitMessageDraftChange:ot,onCommitDialogClose:()=>X(!1),onCommitConfirm:()=>void li(),commitInProgress:P,deleteConfirmOpen:Je,deleteSelectionItems:Dn,onDeleteConfirmClose:()=>it(!1),onDeleteConfirm:()=>void _o(),deleteInProgress:q,deletableSelectionCount:Jt,newBranchDialogOpen:Ae,newBranchName:Ct,onNewBranchNameChange:$t,onNewBranchDialogClose:()=>ut(!1),onNewBranchConfirm:()=>void vs(),createBranchFromNodeInProgress:z})]})}function cw({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:m,onLoadMore:p,branchPromptMeta:_={},branchCommitPreviews:g={},branchUniqueAheadCounts:x={},gridSearchQuery:v="",gridSearchJumpToken:w=0,gridFocusSha:S=null,onGridSearchResultCountChange:C,onGridSearchFocusChange:k,view:M="time",isLoading:L=!1,scrollRequest:D,focusedErrorBranch:E,checkedOutRef:$=null,mapTopInsetPx:q=0,onMergeRefsIntoBranch:R,mergeInProgress:I=!1,onPushAllBranches:V,onPushCurrentBranch:J,onPushCommitTargets:te,pushInProgress:pe=!1,onDeleteSelection:Te,deleteInProgress:ke=!1,worktrees:Ee=[],currentRepoPath:P,onRemoveWorktree:he,removeWorktreeInProgress:Z=!1,onSwitchToWorktree:ge,onStashLocalChanges:Be,stashInProgress:z=!1,stashDisabled:oe=!1,onCommitLocalChanges:H,commitInProgress:K=!1,commitDisabled:Se=!1,onStageAllChanges:$e,stageInProgress:Xe=!1,onCreateBranchFromNode:Ze,createBranchFromNodeInProgress:st=!1,onMoveNodeBackToBranch:Gt,orientation:rn="vertical",onInteractionChange:Ot}){const yn=new Set(u.map(X=>X.branchName)),an=14*864e5,Sn=Date.now();function hn(X){return yn.has(X.name)||Sn-new Date(X.lastCommitDate).getTime()<=an}const mn=t.filter(X=>X.status==="stale"&&hn(X)).sort((X,Re)=>new Date(Re.lastCommitDate).getTime()-new Date(X.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:M==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(_y,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:m,onLoadMore:p,branchPromptMeta:_,branchCommitPreviews:g,branchUniqueAheadCounts:x,staleBranches:mn,isLoading:L,scrollRequest:D,focusedErrorBranch:E,checkedOutRef:$,mapTopInsetPx:q,onMergeRefsIntoBranch:R,mergeInProgress:I,onPushAllBranches:V,onPushCurrentBranch:J,onPushCommitTargets:te,pushInProgress:pe,onDeleteSelection:Te,deleteInProgress:ke,worktrees:Ee,currentRepoPath:P,onRemoveWorktree:he,removeWorktreeInProgress:Z,onSwitchToWorktree:ge,onStashLocalChanges:Be,stashInProgress:z,stashDisabled:oe,onCommitLocalChanges:H,commitInProgress:K,commitDisabled:Se,onStageAllChanges:$e,stageInProgress:Xe,onCreateBranchFromNode:Ze,createBranchFromNodeInProgress:st,onMoveNodeBackToBranch:Gt,orientation:rn,onInteractionChange:Ot})}):M==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(_y,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:g,branchUniqueAheadCounts:x,gridSearchQuery:v,gridSearchJumpToken:w,gridFocusSha:S,checkedOutRef:$,onGridSearchResultCountChange:C,onGridSearchFocusChange:k,onInteractionChange:Ot})}):null})}function uw({onSelect:t,onClose:n}){const[i,a]=y.useState(""),[c,u]=y.useState(""),[d,m]=y.useState([]),[p,_]=y.useState([]),[g,x]=y.useState(!1),[v,w]=y.useState(!1),[S,C]=y.useState(null),[k,M]=y.useState(""),[L,D]=y.useState(0),[E,$]=y.useState(-1),q=y.useRef(null),R=y.useRef(null),I=y.useRef(0),V=i.length>=2;y.useEffect(()=>{fe("get_home_dir").then(H=>{M(H),u(H)})},[]),y.useEffect(()=>{var H;(H=q.current)==null||H.focus()},[]),y.useEffect(()=>{c&&!V&&J(c)},[c,V]),y.useEffect(()=>{if(R.current&&clearTimeout(R.current),!i||i.length<2){_([]),w(!1),I.current+=1;return}w(!0);const H=I.current+1;return I.current=H,R.current=setTimeout(async()=>{try{const Se=await fe("search_directories",{path:c,query:i,maxDepth:c===k?3:2,limit:15});if(I.current!==H)return;_(Se),D(0)}catch(K){if(I.current!==H)return;console.error("Search failed:",K),_([])}finally{if(I.current!==H)return;w(!1)}},220),()=>{R.current&&clearTimeout(R.current)}},[i,c,k]),y.useEffect(()=>{V||D(0)},[d,V]);async function J(H){x(!0),C(null),$(-1);try{const K=await fe("list_directory",{path:H});m(K.filter(Se=>Se.isDir))}catch(K){C(K instanceof Error?K.message:String(K)),m([])}finally{x(!1)}}const te=V?p:d,pe=y.useCallback(H=>{a(""),u(H)},[]),Te=y.useCallback(()=>{if(c==="/")return;const H=c.split("/").slice(0,-1).join("/")||"/";pe(H)},[c,pe]),ke=y.useCallback(()=>{k&&pe(k)},[k,pe]);function Ee(H){H.isRepo?t(H.path):pe(H.path)}function P(){var K;const H=(K=te[L])!=null?K:E>=0?te[E]:void 0;H?Ee(H):t(c)}function he(H){if(H.key==="Escape")i?(a(""),H.preventDefault()):(n(),H.preventDefault());else if(H.key==="Enter")P(),H.preventDefault();else if(H.key==="ArrowDown")H.preventDefault(),D(K=>Math.min(K+1,te.length-1));else if(H.key==="ArrowUp")H.preventDefault(),D(K=>Math.max(K-1,0));else if(H.key==="ArrowLeft"&&!V)H.preventDefault(),Te();else if(H.key==="ArrowRight"||H.key==="Tab"){const K=te[L];K?(H.preventDefault(),pe(K.path)):H.key==="Tab"&&H.preventDefault()}else H.key==="Backspace"&&!i&&!V&&(H.preventDefault(),Te())}function Z(H){H.target===H.currentTarget&&n()}function ge(H){return k&&H.startsWith(k)?"~"+H.slice(k.length):H}function Be(H){const K=H.split("/").filter(Boolean),Se=[];let $e="";for(const Xe of K)$e+="/"+Xe,Se.push({name:Xe,path:$e});return Se}function z(H,K){if(!K)return H;const Se=H.toLowerCase().indexOf(K.toLowerCase());return Se===-1?H:l.jsxs(l.Fragment,{children:[H.slice(0,Se),l.jsx("mark",{className:"bg-primary/20 text-primary rounded px-0.5",children:H.slice(Se,Se+K.length)}),H.slice(Se+K.length)]})}const oe=Be(c);return l.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-start justify-center z-50 pt-[12vh]",onClick:Z,onKeyDown:H=>H.key==="Escape"&&n(),children:l.jsxs("div",{className:"bg-card rounded-xl shadow-lg flex flex-col overflow-hidden border border-border w-[520px] max-w-[90vw] max-h-[65vh]",children:[l.jsxs("div",{className:"flex items-center gap-2 px-4 py-2.5 border-b border-border",children:[l.jsxs("div",{className:"flex-1 flex items-center gap-0.5 overflow-x-auto",children:[l.jsx("button",{className:"flex items-center p-1.5 hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors",onClick:ke,title:"Home (~)",children:l.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})}),oe.map((H,K)=>l.jsxs("span",{className:"flex items-center",children:[l.jsx("svg",{className:"w-3 h-3 text-muted-foreground mx-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),l.jsx("button",{className:`px-1.5 py-1 hover:bg-accent rounded-lg text-sm whitespace-nowrap transition-colors ${K===oe.length-1?"text-foreground font-medium":"text-muted-foreground hover:text-foreground"}`,onClick:()=>pe(H.path),children:H.name})]},H.path))]}),l.jsx("button",{className:"p-1.5 hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors",onClick:n,title:"Close (Esc)",children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 border-b border-border",children:[l.jsx("div",{className:`flex items-center justify-center text-muted-foreground ${v?"opacity-70":""}`,children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),l.jsx("input",{ref:q,type:"text",className:"flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-sm",placeholder:"Search folders...",value:i,onChange:H=>a(H.target.value),onKeyDown:he,autoComplete:"off",spellCheck:!1}),i&&l.jsx("button",{className:"p-1 hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors",onClick:()=>a(""),title:"Clear",children:l.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsx("div",{className:"flex-1 overflow-y-auto py-1",children:g&&!V?l.jsx("div",{className:"py-6 text-center text-muted-foreground text-sm",children:"Loading..."}):S&&!V?l.jsx("div",{className:"py-6 text-center text-destructive text-sm",children:S}):l.jsx(l.Fragment,{children:V?p.length>0?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"flex items-center gap-1.5 px-4 py-2",children:[l.jsx("svg",{className:"w-3 h-3 text-muted-foreground",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),l.jsx("span",{className:"text-[10px] uppercase tracking-wide text-muted-foreground font-medium",children:"Results"})]}),p.map((H,K)=>l.jsxs("button",{className:`w-full flex items-center gap-2.5 px-4 py-2 text-left text-sm transition-colors ${K===E?"bg-primary/10":K===L?"bg-accent":"hover:bg-accent"}`,onClick:()=>{$(K),D(K)},onDoubleClick:()=>Ee(H),onMouseEnter:()=>D(K),children:[l.jsx("svg",{className:`w-4 h-4 flex-shrink-0 ${H.isRepo?"text-blue-400":"text-muted-foreground"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:H.isRepo?l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"}):l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("div",{className:"truncate text-foreground",children:z(H.name,i)}),l.jsx("div",{className:"text-xs text-muted-foreground font-mono truncate",children:z(ge(H.path),i)})]}),l.jsx("svg",{className:"w-3.5 h-3.5 text-muted-foreground",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]},H.path))]}):v?null:l.jsx("div",{className:"py-6 text-center text-muted-foreground text-sm",children:"No matching folders"}):d.length>0?d.map((H,K)=>l.jsxs("button",{className:`w-full flex items-center gap-2.5 px-4 py-2 text-left text-sm transition-colors ${K===E?"bg-primary/10":K===L?"bg-accent":"hover:bg-accent"}`,onClick:()=>{$(K),D(K)},onDoubleClick:()=>Ee(H),onMouseEnter:()=>D(K),children:[l.jsx("svg",{className:`w-4 h-4 flex-shrink-0 ${H.isRepo?"text-blue-400":"text-muted-foreground"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:H.isRepo?l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"}):l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),l.jsx("span",{className:"flex-1 truncate text-foreground",children:H.name}),l.jsx("svg",{className:"w-3.5 h-3.5 text-muted-foreground",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]},H.path)):g?null:l.jsx("div",{className:"py-6 text-center text-muted-foreground text-sm",children:"Empty directory"})})}),l.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 border-t border-border bg-card/50",children:[l.jsxs("span",{className:"text-xs text-muted-foreground",children:[l.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono mx-0.5",children:"↑↓"})," navigate",l.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono mx-0.5 ml-2",children:"Enter"})," open",l.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono mx-0.5 ml-2",children:"Tab"})," drill in",l.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono mx-0.5 ml-2",children:"←"})," back"]}),l.jsx("button",{className:"px-3 py-1.5 bg-primary text-primary-foreground hover:opacity-90 rounded-lg text-sm font-medium transition-opacity",onClick:P,children:"Open"})]})]})})}const Ir=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function dw(t,n,i,a,c,u){var V,J,te,pe;const d=t.baseSha,m=`STASH:${t.index}`,p=`Stash ${t.index+1}`,_=(J=(V=i[0])==null?void 0:V.fullSha)!=null?J:null,g=[{name:u,headSha:_!=null?_:"",isDefault:!0},...n.map(Te=>({name:Te.name,headSha:Te.headSha,isDefault:!1}))],x=d?g.filter(Te=>Ir(Te.headSha,d)):[],v=(te=x.find(Te=>Te.isDefault))!=null?te:x[0],w=!!(v&&d&&Ir(v.headSha,d)),S=v&&!v.isDefault?n.find(Te=>Te.name===v.name):void 0,C=(()=>{var ke;if(!d)return null;const Te=i.find(Ee=>Ir(Ee.fullSha,d)||Ir(Ee.sha,d));if(Te!=null&&Te.date)return Te.date;if(S){const Ee=((ke=a[S.name])!=null?ke:[]).find(P=>Ir(P.fullSha,d)||Ir(P.sha,d));if(Ee!=null&&Ee.date)return Ee.date}return null})(),k=C?new Date(C).getTime():Number.NaN,M=Date.now(),L=Number.isFinite(k)?Math.max(M,k+1+t.index):M+t.index,D=new Date(L).toISOString(),E=t.message.trim(),$={fullSha:m,sha:p,parentSha:d,message:E||p,author:"You",date:D,kind:"stash"},q={fullSha:m,sha:p,parentSha:d,message:E||p,author:"You",date:D,kind:"stash"};if(w&&(v!=null&&v.isDefault))return{branches:n,branchCommitPreviews:a,branchUniqueAheadCounts:c,directCommits:[...i,q]};if(w&&S)return{branches:n.map(ke=>ke.name===S.name?{...ke,commitsAhead:ke.commitsAhead+1,unpushedCommits:ke.unpushedCommits+1,lastCommitDate:D,headSha:m}:ke),directCommits:i,branchCommitPreviews:{...a,[S.name]:[$,...a[S.name]||[]]},branchUniqueAheadCounts:{...c,[S.name]:Math.max(0,(pe=Object.prototype.hasOwnProperty.call(c,S.name)?c[S.name]:S.commitsAhead)!=null?pe:0)+1}};const R=`*Stash:${t.index}`;return{branches:[{name:R,commitsAhead:1,commitsBehind:0,lastCommitDate:D,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:m,divergedFromSha:d!=null?d:void 0,parentBranch:(v==null?void 0:v.name)||u},...n],directCommits:i,branchCommitPreviews:{...a,[R]:[$]},branchUniqueAheadCounts:{...c,[R]:1}}}function fw(t,n,i,a,c,u){const d=[...t].sort((p,_)=>p.index-_.index);let m={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const p of d)m=dw(p,m.branches,m.directCommits,m.branchCommitPreviews,m.branchUniqueAheadCounts,u);return m}const hw="git-visualizer",Bu=!1,gy=1400,mw=180;function pw(...t){return t.filter(Boolean).join(" ")}function _w(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function yy(t){return _w(t)===hw}function gw(){const[t,n]=y.useState(null),[i,a]=y.useState(""),[c,u]=y.useState([]),[d,m]=y.useState([]),[p,_]=y.useState([]),[g,x]=y.useState([]),[v,w]=y.useState({}),[S,C]=y.useState([]),[k,M]=y.useState("main"),[L,D]=y.useState(null),[E,$]=y.useState([]),[q,R]=y.useState(!1),[I,V]=y.useState(""),[J,te]=y.useState(0),[pe,Te]=y.useState(null),[ke,Ee]=y.useState(null),[P,he]=y.useState(!1),[Z,ge]=y.useState(!1),[Be,z]=y.useState(null),[oe,H]=y.useState("landing"),[K,Se]=y.useState(!1),[$e,Xe]=y.useState(!1),[Ze,st]=y.useState("active"),[Gt,rn]=y.useState(null),[Ot,yn]=y.useState(null),[an,Sn]=y.useState(!1),[hn,mn]=y.useState(null),[X,Re]=y.useState(!1),[ot,Je]=y.useState(null),[it,Ae]=y.useState(null),[ut,Ct]=y.useState(!1),[$t,Ht]=y.useState(!1),[qe,B]=y.useState(!1),[G,ue]=y.useState(!1),[be,Ye]=y.useState({}),[He,ye]=y.useState({}),[_t,gt]=y.useState({}),[Xt,rt]=y.useState([]),[Ve,Vt]=y.useState(!1),[bt,Nt]=y.useState(!1),[nt,qt]=y.useState(!1),[Yt,Dt]=y.useState(!1),[En,yt]=y.useState(!1),Zt=y.useRef(null),xn=yy(t),is=y.useRef(!1),Hn=y.useRef([]),Ds=y.useRef([]),xs=y.useRef(null);function Vn(se){if(se.button!==0)return;const ae=se.target;if(ae!=null&&ae.closest(".window-no-drag"))return;const Me=xm();fe("start_window_drag").catch(()=>Me.startDragging()).catch(Ce=>{console.warn("Failed to start window drag:",Ce)})}async function dn(se,ae){const Ce=[];let Ge=0;for(;;){const kt=await fe("get_merge_nodes",{repoPath:se,branch:ae,page:Ge,perPage:100});if(Ce.push(...kt.nodes.map(ct=>({...ct,targetBranch:ae}))),!kt.hasMore||kt.nodes.length===0)break;Ge+=1}return Ce}const Ln=se=>se.map(ae=>`${ae.name}|${ae.headSha}|${ae.commitsAhead}|${ae.commitsBehind}|${ae.unpushedCommits}|${ae.remoteSyncStatus}`).join("||"),Ut=se=>se.map(ae=>ae.fullSha).join("|"),Xn=se=>{var ae,Me;return se?`${(ae=se.branchName)!=null?ae:""}|${se.headSha}|${(Me=se.parentSha)!=null?Me:""}|${se.hasUncommittedChanges?1:0}`:"__none__"};async function Pe(se,ae){const Me=ae!=null?ae:k,[Ce,Ge,kt,ct,N,U,_e]=await Promise.all([fe("get_branches",{repoPath:se}),dn(se,Me),fe("get_direct_commits",{repoPath:se,branch:Me}),fe("get_unpushed_direct_commits",{repoPath:se,branch:Me}).catch(()=>[]),fe("get_checked_out_ref",{repoPath:se}).catch(()=>null),fe("list_worktrees",{repoPath:se}).catch(()=>[]),fe("list_stashes",{repoPath:se}).catch(()=>[])]),xe=await Promise.all([Me,...Ce.map(Oe=>Oe.name)].map(async Oe=>{const Ke=await fe("get_branch_unpushed_commit_shas",{repoPath:se,branch:Oe}).catch(()=>[]);return[Oe,Ke]}));u(Ce),m(Ge),_(kt),x(ct),w(Object.fromEntries(xe)),D(N),$(U),rt(_e)}async function _s(se,ae){const[Me,Ce,Ge]=await Promise.all([fe("get_branches",{repoPath:se}).catch(()=>[]),fe("get_direct_commits",{repoPath:se,branch:ae}).catch(()=>[]),fe("get_checked_out_ref",{repoPath:se}).catch(()=>null)]);return Ln(Me)!==Ln(Hn.current)||Ut(Ce)!==Ut(Ds.current)||Xn(Ge)!==Xn(xs.current)}async function fo(se){Ae(null),ge(!0);try{const[ae,Me]=await Promise.all([fe("get_repo_info",{repoPath:se}),fe("get_default_branch",{repoPath:se})]);a(ae.name),M(Me),n(se),await Pe(se,Me),to(se),Ae({kind:"success",message:`Now targeting worktree at ${se}`})}catch(ae){const Me=ae instanceof Error?ae.message:String(ae);Ae({kind:"error",message:Me}),console.error("Failed to switch worktree:",Me)}finally{ge(!1)}}async function wo(se,ae){if(!(!t||q)){R(!0),Ae(null);try{await fe("remove_worktree",{repoPath:t,worktreePath:se,force:ae}),await Pe(t),Ae({kind:"success",message:`Removed worktree at ${se}`})}catch(Me){const Ce=Me instanceof Error?Me.message:String(Me);Ae({kind:"error",message:Ce}),console.error("Failed to remove worktree:",Ce)}finally{R(!1)}}}async function Us(se){he(!0),ge(!0),z(null),u([]),m([]),_([]),x([]),w({}),H("map"),await new Promise(ae=>setTimeout(ae,15));try{const[ae,Me]=await Promise.all([fe("get_repo_info",{repoPath:se}),fe("get_default_branch",{repoPath:se})]);a(ae.name),M(Me),n(se),yy(se)&&(await Pe(se,Me),ge(!1)),he(!1),to(se)}catch(ae){console.error("Failed to load repo:",ae),z(ae instanceof Error?ae.message:String(ae)),H("landing"),n(null),he(!1),ge(!1)}}async function to(se){try{Sn(!1),Je(null);const ae=await fe("get_github_info",{repoPath:se}),Me=await fe("get_github_auth_status");if(mn(Me),!Me.ghAvailable||!Me.authenticated)return;const Ce=await fe("get_open_prs",{owner:ae.owner,repo:ae.repo});C(Ce),Sn(!0)}catch(ae){console.log("GitHub data not available:",ae),Je(ae instanceof Error?ae.message:String(ae)),Sn(!1)}}y.useEffect(()=>{let se=null,ae=!1;const Me=(()=>{try{return xm().label}catch{return null}})(),Ce=async kt=>{var N;const ct=(N=kt==null?void 0:kt.path)==null?void 0:N.trim();if(!(!ct||ae)){if(t===ct){H("map");return}await Us(ct)}};return(async()=>{Me==="main"&&(se=await tc("gitviz://open-repo",async ct=>{await Ce(ct.payload)}));const kt=await fe("take_pending_open_repo");await Ce(kt)})(),()=>{ae=!0,se&&se()}},[t]),y.useEffect(()=>{Hn.current=c},[c]),y.useEffect(()=>{Ds.current=p},[p]),y.useEffect(()=>{xs.current=L},[L]),y.useEffect(()=>{is.current=En},[En]),y.useEffect(()=>{if(!t||!k||xn)return;fe("watch_repo",{repoPath:t}).catch(console.error);let se=!1,ae=!1,Me,Ce=null;const Ge=new Set;let kt=null,ct=!1,N=!1,U=null,_e=null,xe=null,Oe=null;const Ke=wt=>wt.map(zt=>`${zt.name}|${zt.headSha}|${zt.commitsAhead}|${zt.commitsBehind}|${zt.unpushedCommits}|${zt.remoteSyncStatus}`).join("||"),Et=wt=>wt.map(zt=>zt.fullSha).join("|"),Kt=wt=>wt.map(zt=>zt.fullSha).join("|"),ze=async()=>{if(se){ae=!0;return}se=!0;try{const wt=fe("get_branches",{repoPath:t}),zt=dn(t,k),Qe=fe("get_checked_out_ref",{repoPath:t}).catch(()=>null),At=fe("list_worktrees",{repoPath:t}).catch(()=>[]),ht=fe("get_direct_commits",{repoPath:t,branch:k}),Jt=fe("get_unpushed_direct_commits",{repoPath:t,branch:k}).catch(()=>[]),[Dn,pn,Tt,un,ts]=await Promise.allSettled([wt,Qe,At,ht,Jt]);if(ct)return;const Un=Dn.status==="fulfilled"?Dn.value:null;if(Un){const en=Ke(Un);en!==_e&&(_e=en,u(Un))}if(un.status==="fulfilled"){const en=un.value,zn=Kt(en);zn!==Oe&&(Oe=zn,_(en))}ts.status==="fulfilled"&&x(ts.value),Tt.status==="fulfilled"&&$(Tt.value);const as=[k,...(Un!=null?Un:[]).map(en=>en.name)],js=await Promise.all(as.map(async en=>{const zn=await fe("get_branch_unpushed_commit_shas",{repoPath:t,branch:en}).catch(()=>[]);return[en,zn]}));if(ct||w(Object.fromEntries(js)),fe("list_stashes",{repoPath:t}).then(en=>{ct||rt(en)}).catch(()=>{}),ge(!1),pn.status==="fulfilled"&&pn.value){const en=pn.value;D(zn=>zn&&zn.branchName===en.branchName&&zn.headSha===en.headSha&&zn.parentSha===en.parentSha&&zn.hasUncommittedChanges===en.hasUncommittedChanges?zn:en)}const po=await Promise.allSettled([zt]);if(ct)return;const On=po[0];if(On.status==="fulfilled"){const en=On.value,zn=Et(en);zn!==xe&&(xe=zn,m(en))}}catch(wt){console.error("Auto-refresh failed:",wt)}finally{ge(!1),se=!1,ae&&!ct&&(ae=!1,Me=window.setTimeout(ze,200))}},We=async()=>{var wt;if(!N){N=!0;try{const zt=await fe("get_checked_out_ref",{repoPath:t});if(ct)return;const Qe=`${(wt=zt.branchName)!=null?wt:""}|${zt.headSha}|${zt.hasUncommittedChanges?1:0}`,At=U,ht=!At||At.split("|").slice(0,2).join("|")!==Qe.split("|").slice(0,2).join("|");U=Qe,D(Jt=>Jt&&Jt.branchName===zt.branchName&&Jt.headSha===zt.headSha&&Jt.hasUncommittedChanges===zt.hasUncommittedChanges?Jt:zt),ht&&tt()}catch{}finally{N=!1}}},tt=()=>{clearTimeout(Me),Me=window.setTimeout(ze,100);const wt=[450];for(const zt of wt){const Qe=window.setTimeout(()=>{Ge.delete(Qe),ze()},zt);Ge.add(Qe)}};return tc("git-activity",wt=>{if(wt.payload==="local"){We();return}tt()}).then(wt=>{ct?wt():kt=wt}).catch(console.error),ze(),Ce=window.setInterval(()=>{We()},700),We(),()=>{ct=!0,clearTimeout(Me),Ce!=null&&window.clearInterval(Ce);for(const wt of Ge)window.clearTimeout(wt);Ge.clear(),kt&&kt()}},[t,k,xn]),y.useEffect(()=>{if(!t||!k||!xn)return;fe("watch_repo",{repoPath:t}).catch(console.error);let se=!1,ae=!1,Me=!1,Ce=null;const Ge=async()=>{if(!se){if(is.current){ae=!0;return}if(Me){ae=!0;return}Me=!0;try{if(!await _s(t,k)||se)return;await Pe(t,k)}catch(ct){console.warn("Frozen git-activity refresh failed:",ct)}finally{Me=!1,ae&&!se&&(ae=!1,window.setTimeout(()=>{Ge()},0))}}},kt=()=>{ae=!0,Ge()};return tc("git-activity",()=>{kt()}).then(ct=>{se?ct():Ce=ct}).catch(console.error),()=>{se=!0,Ce&&Ce()}},[t,k,xn]);async function Ao(){if(t){Re(!0),Je(null);try{await fe("authenticate_github");const se=await fe("get_github_auth_status");mn(se),se.authenticated?await to(t):se.message&&Je(se.message)}catch(se){Je(se instanceof Error?se.message:String(se))}finally{Re(!1)}}}const no=new Set(S.map(se=>se.branchName)),so=14*864e5,ho=Date.now(),Ws=c.filter(se=>se.status==="stale"),qn=Ws.filter(se=>no.has(se.name)||ho-new Date(se.lastCommitDate).getTime()<=so),Ro=Ws.filter(se=>!no.has(se.name)&&ho-new Date(se.lastCommitDate).getTime()>so),mo=se=>{var ae;return Object.prototype.hasOwnProperty.call(_t,se.name)?Math.max(0,(ae=_t[se.name])!=null?ae:0):Math.max(0,se.commitsAhead)};y.useEffect(()=>{Ye({}),ye({}),gt({}),Zt.current=null,Re(!1),mn(null),Je(null),D(null),Ae(null)},[t]),y.useEffect(()=>{var xe,Oe,Ke,Et,Kt;if(!t||!k){Ye({}),ye({}),gt({}),Zt.current=null;return}const se=c.map(ze=>{var We;return`${ze.name}:${ze.headSha}:${(We=ze.parentBranch)!=null?We:""}:${ze.commitsAhead}`}).join("|"),ae=d.map(ze=>{var We,tt;return`${ze.fullSha}:${(tt=(We=ze.parentShas)==null?void 0:We[1])!=null?tt:""}`}).join("|"),Me=`${t}|${k}|${se}|${ae}`;if(Zt.current===Me)return;Zt.current=Me;const Ce=new Map;for(const ze of d){const We=(Oe=(xe=ze.parentShas)==null?void 0:xe.slice(1))!=null?Oe:[];for(const tt of We)tt&&!Ce.has(tt)&&Ce.set(tt,ze)}const Ge=c.filter(ze=>ze.name!==k),kt=new Map;for(const ze of Ge){if(!ze.parentBranch||ze.parentBranch===ze.name)continue;const We=(Ke=kt.get(ze.parentBranch))!=null?Ke:0;kt.set(ze.parentBranch,We+1)}const ct=new Map;for(const ze of Ge){if(!ze.headSha)continue;const We=(Et=ct.get(ze.headSha))!=null?Et:[];We.push(ze),ct.set(ze.headSha,We)}const N=new Set;for(const ze of ct.values()){if(ze.length<2)continue;const We=[...ze].sort((tt,wt)=>{var At,ht,Jt,Dn;const zt=(ht=(At=tt.createdDate)!=null?At:tt.divergedFromDate)!=null?ht:tt.lastCommitDate,Qe=(Dn=(Jt=wt.createdDate)!=null?Jt:wt.divergedFromDate)!=null?Dn:wt.lastCommitDate;return zt.localeCompare(Qe)});for(let tt=1;tt<We.length;tt++)N.add(We[tt].name)}for(const ze of Ge){const We=((Kt=kt.get(ze.name))!=null?Kt:0)>0;ze.commitsAhead===0&&ze.headSha&&!Ce.has(ze.headSha)&&!We&&N.add(ze.name)}let U=!1;async function _e(){const ze=await Promise.all(Ge.map(async Qe=>{var At,ht,Jt;try{const Dn=(ht=(At=Qe.createdDate)!=null?At:Qe.divergedFromDate)!=null?ht:Qe.lastCommitDate,pn=new Date(Dn).getTime(),Tt=Qe.parentBranch&&Qe.parentBranch!==Qe.name?Qe.parentBranch:k,un=Ce.get(Qe.headSha),ts=!!un,Un=N.has(Qe.name),as=((Jt=kt.get(Qe.name))!=null?Jt:0)>0,js=Un||!ts&&!as&&Qe.remoteSyncStatus!=="on-github"&&Qe.commitsAhead===0&&!!Qe.headSha&&(Qe.headSha===Qe.createdFromSha||Qe.headSha===Qe.divergedFromSha),On=ts&&Tt===k&&!!(un!=null&&un.fullSha)?un==null?void 0:un.fullSha:void 0;let en=[],zn=!1;if(!js){if(On)en=(await fe("get_branch_commits",{repoPath:t,branch:Qe.name,baseBranch:Tt,mergeCommitSha:On,includePrompts:Bu})).filter(ys=>ys.fullSha!==On),zn=!0;else{const An=[Qe.createdFromSha,Qe.divergedFromSha].filter(ro=>!!ro),ys=Array.from(new Set(Tt===k?[...An,Tt,k]:[Tt,...An,k]));let Gs=null;for(const ro of ys)try{const So=await fe("get_branch_commits",{repoPath:t,branch:Qe.name,baseBranch:ro,includePrompts:Bu});Gs==null&&(Gs=So);const sa=Tt===k&&(ro===Qe.createdFromSha||ro===Qe.divergedFromSha);if(ro===Tt){en=So,zn=!0;break}if(sa){en=So,zn=!0;break}if(So.length>0){en=So,zn=!0;break}}catch{}!zn&&Gs!=null&&(en=Gs,zn=!0)}!zn&&Number.isFinite(pn)&&(en=(await fe("get_recent_log",{repoPath:t,branch:Qe.name,limit:400,firstParent:!1,includePrompts:Bu})).filter(ys=>{const Gs=new Date(ys.date).getTime();return Number.isFinite(Gs)&&Gs>=pn}))}const $s=en.flatMap(An=>{var ys;return(ys=An.agentPrompts)!=null?ys:[]}).sort((An,ys)=>new Date(ys.timestamp).getTime()-new Date(An.timestamp).getTime()),ao=en.map(An=>{var ys;return{fullSha:An.fullSha,sha:An.sha,parentSha:(ys=An.parentSha)!=null?ys:null,message:An.message,author:An.author,date:An.date,kind:"commit"}}),li=js?0:ao.length,_o=ao;if($s.length===0)return[Qe.name,{promptMeta:null,previews:_o,uniqueCount:li}];const vs=$s[0],Oo=[...$s].sort((An,ys)=>new Date(An.timestamp).getTime()-new Date(ys.timestamp).getTime()).map(An=>({id:An.id,agent:An.agent,prompt:An.prompt,timestamp:An.timestamp}));return[Qe.name,{promptMeta:{count:$s.length,latestPrompt:vs.prompt,latestAgent:vs.agent,latestTimestamp:vs.timestamp,markers:Oo},previews:_o,uniqueCount:li}]}catch{return[Qe.name,{promptMeta:null,previews:[],uniqueCount:null}]}}));let We=null;try{const At=(await fe("get_recent_log",{repoPath:t,branch:k,limit:250,firstParent:!1,includePrompts:Bu})).flatMap(ht=>{var Jt;return(Jt=ht.agentPrompts)!=null?Jt:[]}).sort((ht,Jt)=>new Date(Jt.timestamp).getTime()-new Date(ht.timestamp).getTime());if(At.length>0){const ht=At[0],Dn=[...At].sort((pn,Tt)=>new Date(pn.timestamp).getTime()-new Date(Tt.timestamp).getTime()).map(pn=>({id:pn.id,agent:pn.agent,prompt:pn.prompt,timestamp:pn.timestamp}));We={count:At.length,latestPrompt:ht.prompt,latestAgent:ht.agent,latestTimestamp:ht.timestamp,markers:Dn}}}catch{We=null}if(U)return;const tt={},wt={},zt={};for(const[Qe,At]of ze)At.promptMeta&&(tt[Qe]=At.promptMeta),wt[Qe]=[...At.previews],At.uniqueCount!=null&&(zt[Qe]=At.uniqueCount);We&&(tt[k]=We),Ye(tt),ye(wt),gt(zt)}return _e(),()=>{U=!0}},[t,k,c,d]),y.useEffect(()=>{if(!it){Ct(!1);return}Ct(!0);const se=window.setTimeout(()=>{Ct(!1)},gy),ae=window.setTimeout(()=>{Ae(null)},gy+mw);return()=>{window.clearTimeout(se),window.clearTimeout(ae)}},[it]),y.useEffect(()=>{if(!t||c.length===0)return;const se=Ce=>new Promise(Ge=>setTimeout(Ge,Ce));async function ae(){const Ge=`${await fe("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${Ge}`),H("map"),await se(800),await fe("screenshot",{path:`${Ge}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${Ge}`)}const Me=Ce=>{(Ce.metaKey||Ce.ctrlKey)&&Ce.shiftKey&&Ce.key==="S"&&(Ce.preventDefault(),ae())};return window.addEventListener("keydown",Me),()=>window.removeEventListener("keydown",Me)},[t,i,c]);function Bn(){Xe(!0),setTimeout(()=>{Se(!1),Xe(!1),st("active"),yn(null)},100)}async function ls(se){if(!t)return;Ae(null);const ae=/^STASH:(\d+)$/.exec(se.commitSha);if(ae){try{const Me=parseInt(ae[1],10),Ce=await fe("apply_stash_restore",{repoPath:t,stashIndex:Me});D(Ce),await Pe(t);const Ge=`Stash ${Me+1}`,kt=Ce.branchName?` on branch ${Ce.branchName}`:" at the stash base (detached HEAD)";Ae({kind:"success",message:`Restored ${Ge}${kt}; stash applied and dropped (uncommitted changes).`})}catch(Me){const Ce=Me instanceof Error?Me.message:String(Me);Ae({kind:"error",message:Ce}),console.error("Failed to apply stash:",Ce)}return}if(se.branchName){const Me=(Ge,kt)=>{const ct=Ge.replace(/\\/g,"/").replace(/\/+$/,""),N=kt.replace(/\\/g,"/").replace(/\/+$/,"");return ct===N||ct.toLowerCase()===N.toLowerCase()},Ce=E.find(Ge=>Ge.pathExists===!1||Ge.isCurrent||t&&Me(Ge.path,t)?!1:Ge.branchName===se.branchName);if(Ce){await fo(Ce.path);return}}try{let Me="";(await fe("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await fe("stash_push",{repoPath:t,includeUntracked:!0}),Me="Stashed local changes (including untracked), then ",await Pe(t));const Ge=se.branchName?await fe("checkout_branch",{repoPath:t,branchName:se.branchName}):await fe("checkout_ref",{repoPath:t,refName:se.commitSha}),kt=await fe("get_checked_out_ref",{repoPath:t}).catch(()=>Ge);D(kt),await Pe(t);const ct=kt.branchName?kt.branchName:`${kt.headSha.slice(0,7)} (detached)`;Ae({kind:"success",message:`${Me}Checked out ${ct}`})}catch(Me){const Ce=Me instanceof Error?Me.message:String(Me);Ae({kind:"error",message:Ce}),console.error("Failed to checkout commit:",Ce)}}async function Xs(){if(!(!t||Ve)){Ae(null),Vt(!0);try{if(!(await fe("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){Ae({kind:"error",message:"No local changes to stash."});return}await fe("stash_push",{repoPath:t,includeUntracked:!0}),await Pe(t),Ae({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(se){const ae=se instanceof Error?se.message:String(se);Ae({kind:"error",message:ae}),console.error("Failed to stash:",ae)}finally{Vt(!1)}}}async function No(se){if(!t||bt)return!1;const ae=se.trim();if(!ae)return Ae({kind:"error",message:"Enter a commit message."}),!1;Ae(null),Nt(!0);try{if(!(await fe("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Ae({kind:"error",message:"No local changes to commit."}),!1;const Ce=await fe("commit_working_tree",{repoPath:t,message:ae});return D(Ce),await Pe(t),Ae({kind:"success",message:"Committed local changes."}),!0}catch(Me){const Ce=Me instanceof Error?Me.message:String(Me);return Ae({kind:"error",message:Ce}),console.error("Failed to commit:",Ce),!1}finally{Nt(!1)}}async function oo(){if(!t||nt)return!1;Ae(null),qt(!0);try{if(!(await fe("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Ae({kind:"error",message:"No local changes to stage."}),!1;const ae=await fe("stage_working_tree",{repoPath:t});return D(ae),await Pe(t),Ae({kind:"success",message:"Staged all changes."}),!0}catch(se){const ae=se instanceof Error?se.message:String(se);return Ae({kind:"error",message:ae}),console.error("Failed to stage:",ae),!1}finally{qt(!1)}}async function io(se,ae){if(!(!t||Yt)){Dt(!0),Ae(null);try{const Me=/^STASH:(\d+)$/.exec(se);let Ce;if(Me){const Ge=parseInt(Me[1],10);Ce=await fe("move_stash_to_new_branch",{repoPath:t,stashIndex:Ge,branchName:ae})}else Ce=await fe("create_branch_from_uncommitted",{repoPath:t,branchName:ae});D(Ce),await Pe(t),Ae({kind:"success",message:`Moved to new branch "${ae}"`})}catch(Me){const Ce=Me instanceof Error?Me.message:String(Me);Ae({kind:"error",message:Ce}),console.error("Failed to create branch from node:",Ce)}finally{Dt(!1)}}}async function qs(se,ae){if(!t)return;const Me=Array.from(new Set(se.filter(Ce=>!!Ce&&Ce!==ae)));if(Me.length!==0){Ae(null),Ht(!0);try{let Ce=null;for(const Ge of Me)Ce=await fe("merge_ref_into_branch",{repoPath:t,sourceRef:Ge,targetBranch:ae});await Pe(t),Ce&&D(Ce),Ae({kind:"success",message:Me.length===1?`Merged ${Me[0].slice(0,7)} into ${ae}`:`Merged ${Me.length} commits into ${ae}`})}catch(Ce){const Ge=Ce instanceof Error?Ce.message:String(Ce);Ae({kind:"error",message:Ge}),console.error("Failed to merge refs into branch:",Ge)}finally{Ht(!1)}}}async function gs(){if(!(!t||qe)){Ae(null),B(!0);try{const se=await fe("push_all_unpushed_branches",{repoPath:t});await Pe(t),Ae({kind:"success",message:se.length>0?se.length===1?`Pushed ${se[0].branchName}`:`Pushed ${se.length} branches`:"Everything local is already pushed."})}catch(se){const ae=se instanceof Error?se.message:String(se);Ae({kind:"error",message:ae}),console.error("Failed to push all branches:",ae)}finally{B(!1)}}}async function As(){if(!(!t||qe)){Ae(null),B(!0);try{const se=await fe("push_current_branch",{repoPath:t});await Pe(t),Ae({kind:"success",message:`Pushed ${se.branchName}`})}catch(se){const ae=se instanceof Error?se.message:String(se);Ae({kind:"error",message:ae}),console.error("Failed to push current branch:",ae)}finally{B(!1)}}}async function Cn(se){var Me;if(!t||qe)return;const ae=Array.from(new Map(se.filter(Ce=>Ce.branchName&&Ce.targetSha).map(Ce=>[Ce.branchName,Ce])).values());if(ae.length!==0){Ae(null),B(!0);try{for(const Ce of ae)await fe("push_branch",{repoPath:t,branchName:Ce.branchName,targetSha:Ce.targetSha});await Pe(t),Ae({kind:"success",message:ae.length===1?`Pushed ${ae[0].branchName} through ${(Me=ae[0].targetSha)==null?void 0:Me.slice(0,7)}`:`Pushed ${ae.length} selected commit ranges`})}catch(Ce){const Ge=Ce instanceof Error?Ce.message:String(Ce);Ae({kind:"error",message:Ge}),console.error("Failed to push selected commits:",Ge)}finally{B(!1)}}}async function ri(se){var kt;if(!t||G)return;const ae=Array.from(new Set(se.branchNames.filter(ct=>ct&&ct!==k))),Me=!!se.discardUncommittedChanges,Ce=(kt=se.stashIndices)!=null?kt:[],Ge=Array.from(new Set(Ce)).sort((ct,N)=>N-ct);if(!(ae.length===0&&!Me&&Ge.length===0)){Ae(null),ue(!0);try{for(const U of Ge)await fe("stash_drop",{repoPath:t,stashIndex:U});const ct=ae.length>0||Me?await fe("delete_selected_elements",{repoPath:t,branchNames:ae,discardUncommittedChanges:Me}):{deletedBranches:[],discardedUncommittedChanges:!1};await Pe(t);const N=[];Ge.length>0&&N.push(Ge.length===1?`removed stash ${Ge[0]+1}`:`removed ${Ge.length} stashes`),ct.discardedUncommittedChanges&&N.push("discarded local uncommitted changes"),ct.deletedBranches.length>0&&N.push(ct.deletedBranches.length===1?`deleted ${ct.deletedBranches[0]}`:`deleted ${ct.deletedBranches.length} branches`),Ae({kind:"success",message:N.length>0?N.join(" and "):"Nothing to delete."})}catch(ct){const N=ct instanceof Error?ct.message:String(ct);Ae({kind:"error",message:N}),console.error("Failed to delete selected elements:",N)}finally{ue(!1)}}}function xi(se){H("map"),yn(se),rn(ae=>{var Me;return{branch:se,seq:((Me=ae==null?void 0:ae.seq)!=null?Me:0)+1}})}function Lo(){n(null),$([]),C([]),_([]),x([]),w({}),Ye({}),ye({}),gt({}),rt([]),Sn(!1),H("landing")}const{enrichedBranches:bi,enrichedBranchCommitPreviews:Ys,enrichedBranchUniqueAheadCounts:Xo,enrichedDirectCommits:bs}=y.useMemo(()=>{var ht,Jt,Dn,pn;const se=fw(Xt,c,p,He,_t,k);let ae=se.branches,Me=se.directCommits,Ce=se.branchCommitPreviews,Ge=se.branchUniqueAheadCounts;if(!(L!=null&&L.hasUncommittedChanges))return{enrichedBranches:ae,enrichedDirectCommits:Me,enrichedBranchCommitPreviews:Ce,enrichedBranchUniqueAheadCounts:Ge};const kt=L.headSha||L.parentSha||null,ct=(Jt=(ht=Me[0])==null?void 0:ht.fullSha)!=null?Jt:null,N=(Tt,un)=>!Tt||!un?!1:Tt===un||Tt.startsWith(un)||un.startsWith(Tt),U=[{name:k,headSha:ct!=null?ct:"",isDefault:!0},...ae.map(Tt=>({name:Tt.name,headSha:Tt.headSha,isDefault:!1}))],_e=L.branchName?U.find(Tt=>Tt.name===L.branchName):void 0,xe=kt?U.filter(Tt=>N(Tt.headSha,kt)):[],Oe=(Dn=_e!=null?_e:xe.find(Tt=>Tt.isDefault))!=null?Dn:xe[0],Ke=!!(Oe&&kt&&N(Oe.headSha,kt)),Et=Oe&&!Oe.isDefault?ae.find(Tt=>Tt.name===Oe.name):void 0,Kt=(()=>{var un;if(!kt)return null;const Tt=Me.find(ts=>N(ts.fullSha,kt)||N(ts.sha,kt));if(Tt!=null&&Tt.date)return Tt.date;if(Et){const ts=((un=Ce[Et.name])!=null?un:[]).find(Un=>N(Un.fullSha,kt)||N(Un.sha,kt));if(ts!=null&&ts.date)return ts.date}return null})(),ze=Kt?new Date(Kt).getTime():Number.NaN,We=Date.now(),tt=Number.isFinite(ze)?Math.max(We,ze+1):We,wt=new Date(tt).toISOString(),zt={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:kt,message:"Local uncommitted changes",author:"You",date:wt,kind:"uncommitted"},Qe={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:kt,message:"Local uncommitted changes",author:"You",date:wt,kind:"uncommitted"};if(Ke&&(Oe!=null&&Oe.isDefault))return{enrichedBranches:ae,enrichedBranchCommitPreviews:Ce,enrichedBranchUniqueAheadCounts:Ge,enrichedDirectCommits:[...Me,Qe]};if(Ke&&Et)return{enrichedBranches:ae.map(un=>un.name===Et.name?{...un,commitsAhead:un.commitsAhead+1,unpushedCommits:un.unpushedCommits+1,lastCommitDate:wt,headSha:"WORKING_TREE"}:un),enrichedDirectCommits:Me,enrichedBranchCommitPreviews:{...Ce,[Et.name]:[zt,...Ce[Et.name]||[]]},enrichedBranchUniqueAheadCounts:{...Ge,[Et.name]:Math.max(0,(pn=Object.prototype.hasOwnProperty.call(Ge,Et.name)?Ge[Et.name]:Et.commitsAhead)!=null?pn:0)+1}};const At={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:wt,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:kt!=null?kt:void 0,parentBranch:(Oe==null?void 0:Oe.name)||L.branchName||k};return{enrichedBranches:[At,...ae],enrichedBranchCommitPreviews:{...Ce,[At.name]:[zt]},enrichedBranchUniqueAheadCounts:{...Ge,[At.name]:1},enrichedDirectCommits:Me}},[c,He,_t,L,k,p,Xt]);return l.jsxs("div",{className:"h-screen min-h-0 text-foreground flex flex-col relative bg-background",children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"window-drag-region absolute left-0 right-0 top-0 z-[9999] h-12 px-4",style:{paddingTop:"max(env(safe-area-inset-top), 0px)"},onMouseDown:Vn,children:oe==="map"&&l.jsxs("div",{className:"relative z-10 pointer-events-none h-12",children:[l.jsx("button",{onClick:Lo,"aria-label":"Back",title:"Back",className:"window-no-drag pointer-events-auto absolute left-19 top-1/2 inline-flex h-7 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent",children:l.jsx("svg",{className:"h-3.5 w-3.5 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),l.jsx("div",{className:"absolute left-1/2 top-1/2 min-w-0 max-w-[52vw] -translate-x-1/2 -translate-y-1/2 text-center",children:l.jsx("h1",{className:"text-sm font-medium text-foreground truncate",children:i})})]})}),l.jsxs("div",{className:"h-full min-h-0 flex flex-col relative z-10",children:[oe==="landing"&&l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(yw,{onSelect:Us,loading:P,error:Be})}),l.jsx("div",{className:`flex-1 overflow-hidden relative ${oe==="landing"?"hidden":""}`,children:l.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 overflow-hidden",children:l.jsx(cw,{branches:bi,mergeNodes:d,directCommits:bs,unpushedDirectCommits:g,unpushedCommitShasByBranch:v,defaultBranch:k,branchCommitPreviews:Ys,branchUniqueAheadCounts:Xo,gridSearchQuery:I,gridSearchJumpToken:J,gridFocusSha:ke,onGridSearchResultCountChange:Te,onGridSearchFocusChange:Ee,checkedOutRef:L,onCommitClick:ls,onMergeRefsIntoBranch:qs,mergeInProgress:$t,onPushAllBranches:gs,onPushCurrentBranch:As,onPushCommitTargets:Cn,pushInProgress:qe,onDeleteSelection:ri,deleteInProgress:G,worktrees:E,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:wo,removeWorktreeInProgress:q,onSwitchToWorktree:fo,onStashLocalChanges:Xs,stashInProgress:Ve,stashDisabled:!1,onCommitLocalChanges:No,commitInProgress:bt,commitDisabled:!1,onStageAllChanges:oo,stageInProgress:nt,onCreateBranchFromNode:io,createBranchFromNodeInProgress:Yt,onInteractionChange:yt})}),l.jsx("header",{"data-map-ui":!0,className:"absolute left-0 right-0 top-12 z-40 px-4 md:px-8",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto relative z-10 min-h-8 flex flex-wrap items-center gap-2 content-start",children:[(hn==null?void 0:hn.ghAvailable)&&!hn.authenticated&&l.jsx("button",{onClick:Ao,disabled:X,className:"text-xs text-muted-foreground hover:text-foreground border border-border/50 rounded-full px-3 py-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:X?"Connecting GitHub...":"Connect GitHub"}),hn&&!hn.ghAvailable&&l.jsx("span",{className:"text-xs text-muted-foreground border border-border/50 rounded-full px-3 py-1",children:"Install `gh` for private PR data"}),ot&&l.jsx("span",{className:"text-xs text-muted-foreground max-w-64 truncate",title:ot,children:ot}),l.jsxs("div",{className:"window-no-drag flex min-w-56 flex-1 max-w-sm items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-sm",children:[l.jsx("span",{className:"text-[10px] uppercase tracking-wide text-muted-foreground font-medium shrink-0",children:"Search"}),l.jsx("input",{value:I,onChange:se=>V(se.target.value),onKeyDown:se=>{se.key==="Enter"&&(se.preventDefault(),te(ae=>ae+1))},placeholder:"sha, message, or branch",className:"w-full bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground/70"}),l.jsx("button",{type:"button",onClick:()=>te(se=>se+1),className:"shrink-0 rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Jump"})]}),pe!=null&&l.jsxs("span",{className:"text-xs text-muted-foreground",children:[pe," match",pe===1?"":"es"]}),ke&&l.jsxs("span",{className:"text-xs rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary",children:["Focused ",ke.slice(0,7)]}),it&&l.jsx("span",{className:pw("text-xs rounded-full px-3 py-1 max-w-[26rem] truncate transition-opacity duration-200",ut?"opacity-100":"opacity-0",it.kind==="error"?"bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400":"bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"),title:it.message,children:it.message})]})}),K&&l.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl shadow-lg overflow-hidden ${$e?"animate-error-panel-out":"animate-error-panel-in"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[l.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),l.jsx("button",{onClick:Bn,className:"text-muted-foreground hover:text-foreground transition-colors",children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[l.jsxs("button",{onClick:()=>st("active"),className:`text-xs font-medium transition-colors ${Ze==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[qn.length," active"]}),l.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),l.jsxs("button",{onClick:()=>st("inactive"),className:`text-xs font-medium transition-colors ${Ze==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[Ro.length," inactive"]})]}),l.jsx("div",{className:"overflow-y-auto max-h-64",children:(Ze==="active"?qn:Ro).map(se=>{const ae=(Ot==null?void 0:Ot.name)===se.name,Me=mo(se);return l.jsxs("button",{onClick:()=>xi(se),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:`text-sm font-medium truncate ${ae?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:se.name}),l.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[Me>0&&`${Me} ahead`,Me>0&&se.commitsBehind>0&&", ",se.commitsBehind>0&&`${se.commitsBehind} behind`]})]}),l.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},se.name)})})]})]})})]})]})}function yw({onSelect:t,loading:n,error:i}){const a="git-visualizer:recent-repositories",[u,d]=y.useState(""),[m,p]=y.useState(!1),[_,g]=y.useState(!1),[x,v]=y.useState(null),[w,S]=y.useState([]);function C($){return Array.isArray($)?$.filter(q=>typeof q=="object"&&q!==null&&typeof q.path=="string"&&typeof q.name=="string"&&typeof q.lastOpenedAt=="number").slice(0,10):[]}y.useEffect(()=>{try{const $=localStorage.getItem(a);if(!$)return;S(C(JSON.parse($)))}catch{S([])}},[]);function k($){return $==="/"?$:$.replace(/\/+$/,"")}function M($){const q=k($.trim());if(!q)return;const R=q.split("/").pop()||q,V=[{path:q,name:R,lastOpenedAt:Date.now()},...w.filter(J=>J.path!==q)].slice(0,10);S(V);try{localStorage.setItem(a,JSON.stringify(V))}catch{}}function L($){const q=k($);v(null),M(q),t(q)}function D($){p(!1),L($)}function E($){$.preventDefault();const q=u.trim();if(!q)return;if(q.startsWith("http://")||q.startsWith("https://")||q.startsWith("git@")||q.startsWith("github.com/")){v("Enter a local repo folder path (for example: /Users/you/code/repo).");return}L(q)}return l.jsxs("main",{className:"h-full flex flex-col items-center pt-[16vh] bg-background",children:[l.jsxs("div",{className:"w-full max-w-sm flex flex-col items-center px-6",children:[l.jsxs("div",{className:"flex flex-col w-full gap-3 shrink-0",children:[l.jsx("button",{onClick:()=>p(!0),className:"w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-2xl hover:opacity-90 transition-opacity",children:"Browse for repository"}),_?l.jsxs("div",{className:"flex flex-col gap-2",children:[l.jsxs("form",{onSubmit:E,className:"flex items-center border border-border bg-card rounded-2xl",children:[l.jsxs("div",{className:"relative flex-1 min-w-0 overflow-hidden rounded-l-2xl",children:[l.jsx("input",{autoFocus:!0,type:"text",value:u,onChange:$=>{d($.target.value),x&&v(null)},placeholder:"Enter local path",className:"w-full bg-transparent pl-5 pr-2 py-3.5 text-sm focus:outline-none placeholder:text-muted-foreground tabular-nums min-w-0"}),l.jsx("div",{className:"absolute left-0 inset-y-0 w-10 pointer-events-none",style:{background:"linear-gradient(to right, var(--card), transparent)"}})]}),l.jsx("button",{type:"submit",disabled:!u||n,className:"m-1.5 w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground rounded-[14px] hover:opacity-90 transition-opacity shrink-0",children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M9 5l7 7-7 7"})})})]}),x&&l.jsx("p",{className:"text-xs text-destructive px-2",children:x}),!x&&i&&l.jsx("p",{className:"text-xs text-destructive px-2",children:i})]}):l.jsx("button",{onClick:()=>g(!0),className:"w-full flex items-center justify-center gap-2 px-6 py-3 border border-border bg-card text-foreground text-sm font-medium rounded-2xl hover:bg-accent transition-colors disabled:opacity-50",children:"Enter repo path"})]}),w.length>0&&l.jsxs("div",{className:"w-full mt-8 flex flex-col",children:[l.jsx("p",{className:"text-[10px] uppercase tracking-wide text-muted-foreground font-medium mb-3 shrink-0",children:"Recently opened"}),l.jsx("div",{className:"flex flex-col gap-2",children:w.slice(0,5).map($=>l.jsxs("button",{onClick:()=>L($.path),disabled:n,className:"w-full shrink-0 rounded-xl border border-border bg-card text-left px-4 py-2.5 hover:bg-muted transition-colors disabled:opacity-60 disabled:cursor-not-allowed",children:[l.jsx("p",{className:"text-foreground truncate text-sm",children:$.name}),l.jsx("p",{className:"text-xs text-muted-foreground truncate",children:$.path})]},$.path))})]})]}),m&&l.jsx(uw,{onSelect:D,onClose:()=>p(!1)})]})}var gc=px(),xw=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,bw={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=xw}var os=bw,vw=`.icon-transitions-module__iconState___uqK9J {
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
}`,ww={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=vw}var Jn=ww,Sw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),kw=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Cw=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),jw=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${Jn.iconState} ${n?Jn.hiddenScaled:Jn.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${Jn.iconState} ${n?Jn.visibleScaled:Jn.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Mw=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${Jn.iconStateFast} ${i?Jn.visibleScaled:u?Jn.sending:Jn.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${Jn.iconStateFast} ${a?Jn.visibleScaled:Jn.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${Jn.iconStateFast} ${c?Jn.visibleScaled:Jn.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},Tw=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${Jn.iconFade} ${n?Jn.visible:Jn.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${Jn.iconFade} ${n?Jn.hidden:Jn.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),Ew=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${Jn.iconFadeFast} ${n?Jn.hidden:Jn.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${Jn.iconFadeFast} ${n?Jn.visible:Jn.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),Dw=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),Aw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),kx=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Rw=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),Nw=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Lw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),Bw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),Ow=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),zw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),$w=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Cx=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Vh=Cx.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),wm="feedback-freeze-styles",Uh="__agentation_freeze";function Iw(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Uh]||(t[Uh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Uh]}var fn=Iw();typeof window<"u"&&!fn.installed&&(fn.origSetTimeout=window.setTimeout.bind(window),fn.origSetInterval=window.setInterval.bind(window),fn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?fn.origSetTimeout(t,n):fn.origSetTimeout((...a)=>{fn.frozen?fn.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?fn.origSetInterval(t,n):fn.origSetInterval((...a)=>{fn.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>fn.origRAF(n=>{fn.frozen?fn.frozenRAFQueue.push(t):t(n)}),fn.installed=!0);var It=fn.origSetTimeout,Pw=fn.origSetInterval,Wr=fn.origRAF;function Hw(t){return t?Cx.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function Vw(){if(typeof document>"u"||fn.frozen)return;fn.frozen=!0,fn.frozenTimeoutQueue=[],fn.frozenRAFQueue=[];let t=document.getElementById(wm);t||(t=document.createElement("style"),t.id=wm),t.textContent=`
    *${Vh},
    *${Vh}::before,
    *${Vh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),fn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;Hw(i)||(n.pause(),fn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function xy(){var i;if(typeof document>"u"||!fn.frozen)return;fn.frozen=!1;const t=fn.frozenTimeoutQueue;fn.frozenTimeoutQueue=[];for(const a of t)fn.origSetTimeout(()=>{if(fn.frozen){fn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=fn.frozenRAFQueue;fn.frozenRAFQueue=[];for(const a of n)fn.origRAF(c=>{if(fn.frozen){fn.frozenRAFQueue.push(a);return}a(c)});for(const a of fn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}fn.pausedAnimations=[],(i=document.getElementById(wm))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Wh(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var pd=y.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:m,onCancel:p,onDelete:_,style:g,accentColor:x="#3c82f7",isExiting:v=!1,lightMode:w=!1,computedStyles:S},C){const[k,M]=y.useState(u),[L,D]=y.useState(!1),[E,$]=y.useState("initial"),[q,R]=y.useState(!1),[I,V]=y.useState(!1),J=y.useRef(null),te=y.useRef(null),pe=y.useRef(null),Te=y.useRef(null);y.useEffect(()=>{v&&E!=="exit"&&$("exit")},[v,E]),y.useEffect(()=>{It(()=>{$("enter")},0);const ge=It(()=>{$("entered")},200),Be=It(()=>{const z=J.current;z&&(Wh(z),z.selectionStart=z.selectionEnd=z.value.length,z.scrollTop=z.scrollHeight)},50);return()=>{clearTimeout(ge),clearTimeout(Be),pe.current&&clearTimeout(pe.current),Te.current&&clearTimeout(Te.current)}},[]);const ke=y.useCallback(()=>{Te.current&&clearTimeout(Te.current),D(!0),Te.current=It(()=>{D(!1),Wh(J.current)},250)},[]);y.useImperativeHandle(C,()=>({shake:ke}),[ke]);const Ee=y.useCallback(()=>{$("exit"),pe.current=It(()=>{p()},150)},[p]),P=y.useCallback(()=>{k.trim()&&m(k.trim())},[k,m]),he=y.useCallback(ge=>{ge.stopPropagation(),!ge.nativeEvent.isComposing&&(ge.key==="Enter"&&!ge.shiftKey&&(ge.preventDefault(),P()),ge.key==="Escape"&&Ee())},[P,Ee]),Z=[os.popup,w?os.light:"",E==="enter"?os.enter:"",E==="entered"?os.entered:"",E==="exit"?os.exit:"",L?os.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:te,className:Z,"data-annotation-popup":!0,style:g,onClick:ge=>ge.stopPropagation(),children:[l.jsxs("div",{className:os.header,children:[S&&Object.keys(S).length>0?l.jsxs("button",{className:os.headerToggle,onClick:()=>{const ge=I;V(!I),ge&&It(()=>Wh(J.current),0)},type:"button",children:[l.jsx("svg",{className:`${os.chevron} ${I?os.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:os.element,children:n})]}):l.jsx("span",{className:os.element,children:n}),i&&l.jsx("span",{className:os.timestamp,children:i})]}),S&&Object.keys(S).length>0&&l.jsx("div",{className:`${os.stylesWrapper} ${I?os.expanded:""}`,children:l.jsx("div",{className:os.stylesInner,children:l.jsx("div",{className:os.stylesBlock,children:Object.entries(S).map(([ge,Be])=>l.jsxs("div",{className:os.styleLine,children:[l.jsx("span",{className:os.styleProperty,children:ge.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:os.styleValue,children:Be}),";"]},ge))})})}),a&&l.jsxs("div",{className:os.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:J,className:os.textarea,style:{borderColor:q?x:void 0},placeholder:c,value:k,onChange:ge=>M(ge.target.value),onFocus:()=>R(!0),onBlur:()=>R(!1),rows:2,onKeyDown:he}),l.jsxs("div",{className:os.actions,children:[_&&l.jsx("div",{className:os.deleteWrapper,children:l.jsx("button",{className:os.deleteButton,onClick:_,type:"button",children:l.jsx(Ow,{size:22})})}),l.jsx("button",{className:os.cancel,onClick:Ee,children:"Cancel"}),l.jsx("button",{className:os.submit,style:{backgroundColor:x,opacity:k.trim()?1:.4},onClick:P,disabled:!k.trim(),children:d})]})]})}),Uw=({content:t,children:n,...i})=>{const[a,c]=y.useState(!1),[u,d]=y.useState(!1),[m,p]=y.useState({top:0,right:0}),_=y.useRef(null),g=y.useRef(null),x=y.useRef(null),v=()=>{if(_.current){const C=_.current.getBoundingClientRect();p({top:C.top+C.height/2,right:window.innerWidth-C.left+8})}},w=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),v(),g.current=It(()=>{c(!0)},500)},S=()=>{g.current&&(clearTimeout(g.current),g.current=null),c(!1),x.current=It(()=>{d(!1)},150)};return y.useEffect(()=>()=>{g.current&&clearTimeout(g.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:_,onMouseEnter:w,onMouseLeave:S,...i,children:n}),u&&gc.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:m.top,right:m.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},Ww=`.styles-module__tooltip___mcXL2 {
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
}`,Yw={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=Ww}var by=Yw,sr=({content:t})=>l.jsx(Uw,{className:by.tooltip,content:t,children:l.jsx(Cw,{className:by.tooltipIcon})}),ft={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},jx=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...ft.navigation},{type:"header",label:"Header",...ft.header},{type:"hero",label:"Hero",...ft.hero},{type:"section",label:"Section",...ft.section},{type:"sidebar",label:"Sidebar",...ft.sidebar},{type:"footer",label:"Footer",...ft.footer},{type:"modal",label:"Modal",...ft.modal},{type:"banner",label:"Banner",...ft.banner},{type:"drawer",label:"Drawer",...ft.drawer},{type:"popover",label:"Popover",...ft.popover},{type:"divider",label:"Divider",...ft.divider}]},{section:"Content",items:[{type:"card",label:"Card",...ft.card},{type:"text",label:"Text",...ft.text},{type:"image",label:"Image",...ft.image},{type:"video",label:"Video",...ft.video},{type:"table",label:"Table",...ft.table},{type:"grid",label:"Grid",...ft.grid},{type:"list",label:"List",...ft.list},{type:"chart",label:"Chart",...ft.chart},{type:"codeBlock",label:"Code Block",...ft.codeBlock},{type:"map",label:"Map",...ft.map},{type:"timeline",label:"Timeline",...ft.timeline},{type:"calendar",label:"Calendar",...ft.calendar},{type:"accordion",label:"Accordion",...ft.accordion},{type:"carousel",label:"Carousel",...ft.carousel},{type:"logo",label:"Logo",...ft.logo},{type:"faq",label:"FAQ",...ft.faq},{type:"gallery",label:"Gallery",...ft.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...ft.button},{type:"input",label:"Input",...ft.input},{type:"search",label:"Search",...ft.search},{type:"form",label:"Form",...ft.form},{type:"tabs",label:"Tabs",...ft.tabs},{type:"dropdown",label:"Dropdown",...ft.dropdown},{type:"toggle",label:"Toggle",...ft.toggle},{type:"stepper",label:"Stepper",...ft.stepper},{type:"rating",label:"Rating",...ft.rating},{type:"fileUpload",label:"File Upload",...ft.fileUpload},{type:"checkbox",label:"Checkbox",...ft.checkbox},{type:"radio",label:"Radio",...ft.radio},{type:"slider",label:"Slider",...ft.slider},{type:"datePicker",label:"Date Picker",...ft.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...ft.avatar},{type:"badge",label:"Badge",...ft.badge},{type:"tag",label:"Tag",...ft.tag},{type:"breadcrumb",label:"Breadcrumb",...ft.breadcrumb},{type:"pagination",label:"Pagination",...ft.pagination},{type:"progress",label:"Progress",...ft.progress},{type:"alert",label:"Alert",...ft.alert},{type:"toast",label:"Toast",...ft.toast},{type:"notification",label:"Notification",...ft.notification},{type:"tooltip",label:"Tooltip",...ft.tooltip},{type:"stat",label:"Stat",...ft.stat},{type:"skeleton",label:"Skeleton",...ft.skeleton},{type:"chip",label:"Chip",...ft.chip},{type:"icon",label:"Icon",...ft.icon},{type:"spinner",label:"Spinner",...ft.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...ft.pricing},{type:"testimonial",label:"Testimonial",...ft.testimonial},{type:"cta",label:"CTA",...ft.cta},{type:"productCard",label:"Product Card",...ft.productCard},{type:"profile",label:"Profile",...ft.profile},{type:"feature",label:"Feature",...ft.feature},{type:"team",label:"Team",...ft.team},{type:"login",label:"Login",...ft.login},{type:"contact",label:"Contact",...ft.contact}]}],gi={};for(const t of jx)for(const n of t.items)gi[n.type]=n;function Le({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Fn({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function vo({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function Fw({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx(Fn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(Le,{w:t*.06}),l.jsx(Le,{w:t*.07}),l.jsx(Le,{w:t*.05}),l.jsx(Le,{w:t*.06})]}),l.jsx(Fn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function Xw({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Le,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Le,{w:t*.6}),l.jsx(Le,{w:t*.4}),l.jsx(Fn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function qw({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Le,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Fn,{w:10,h:10,radius:2}),l.jsx(Le,{w:t*(.4+c*17%30/100)})]},c))]})}function Gw({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Le,{w:"60%",h:3,strong:!0}),l.jsx(Le,{w:"80%",h:2}),l.jsx(Le,{w:"70%",h:2}),l.jsx(Le,{w:"60%",h:2})]},c))})}function Kw({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Le,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Le,{w:"90%"}),l.jsx(Le,{w:"70%"}),l.jsx(Le,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(Fn,{w:70,h:26,radius:4}),l.jsx(Fn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function Qw({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Le,{w:"70%",h:4,strong:!0}),l.jsx(Le,{w:"95%",h:2}),l.jsx(Le,{w:"85%",h:2}),l.jsx(Le,{w:"50%",h:2})]})]})}function Zw({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Le,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Le,{w:`${70+u*13%25}%`,h:2},u))]})}function Jw({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function eS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Le,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,m)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Le,{w:`${50+(u*7+m*13)%40}%`,h:2})},m))},u))]})}function tS({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(vo,{size:8}),l.jsx(Le,{w:`${55+c*17%35}%`,h:2})]},c))})}function nS({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Le,{w:Math.max(20,t*.5),h:3,strong:!0})})}function sS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Le,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Le,{w:"40%",h:2})})]})}function oS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Le,{w:60+c*17%30,h:2}),l.jsx(Fn,{w:"100%",h:28,radius:4})]},c)),l.jsx(Fn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function iS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Le,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Le,{w:"80%",h:2}),l.jsx(Le,{w:"65%",h:2}),l.jsx(Le,{w:"75%",h:2})]})]})}function aS({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function rS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Le,{w:Math.max(16,t*.5),h:2,strong:!0})})}function lS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Le,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Le,{w:t*.35})]})}function cS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(Le,{w:t*.3,h:4,strong:!0}),l.jsx(Le,{w:t*.7}),l.jsx(Le,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx(Fn,{w:"33%",h:"100%",radius:4}),l.jsx(Fn,{w:"33%",h:"100%",radius:4}),l.jsx(Fn,{w:"33%",h:"100%",radius:4})]})]})}function uS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(Fn,{w:"100%",h:"100%",radius:4},u))})}function dS({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Le,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Le,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function fS({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function hS({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(vo,{size:Math.min(14,n*.4)}),l.jsx(Le,{w:"50%",h:2})]})}function mS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(vo,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:"60%",h:3,strong:!0}),l.jsx(Le,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function pS({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function _S({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(Fn,{w:a,h:`${d}%`,radius:2},u)})})}function gS({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(Fn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function yS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Le,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function xS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Le,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function bS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(Fn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function vS({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function wS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Le,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function SS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Fn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(vo,{size:5}),l.jsx(vo,{size:5}),l.jsx(vo,{size:5})]})]})}function kS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Le,{w:t*.4,h:3,strong:!0}),l.jsx(Le,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(vo,{size:5}),l.jsx(Le,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(Fn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function CS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Le,{w:"90%",h:2}),l.jsx(Le,{w:"75%",h:2}),l.jsx(Le,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(vo,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Le,{w:60,h:3,strong:!0}),l.jsx(Le,{w:40,h:2})]})]})]})}function jS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Le,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Le,{w:t*.35}),l.jsx(Fn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function MS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:"40%",h:3,strong:!0}),l.jsx(Le,{w:"70%",h:2})]})]})}function TS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Le,{w:t*.4,h:3,strong:!0}),l.jsx(Fn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function ES({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Le,{w:t*.5,h:2}),l.jsx(Le,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Le,{w:t*.3,h:2})]})}function DS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function AS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Le,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function RS({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function NS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function LS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(vo,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Le,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function BS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Le,{w:t*.4,h:2}),l.jsx(Le,{w:t*.25,h:2})]})}function OS({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(vo,{size:6}),l.jsx(vo,{size:6}),l.jsx(vo,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Le,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function zS({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Le,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Le,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function $S({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(vo,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:"50%",h:3,strong:!0}),l.jsx(Le,{w:"75%",h:2})]}),l.jsx(Le,{w:30,h:2})]})}function IS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Le,{w:"65%",h:4,strong:!0}),l.jsx(Le,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Le,{w:"30%",h:5,strong:!0}),l.jsx(Fn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function PS({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(vo,{size:i}),l.jsx(Le,{w:t*.45,h:4,strong:!0}),l.jsx(Le,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Le,{w:20,h:3,strong:!0}),l.jsx(Le,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Le,{w:20,h:3,strong:!0}),l.jsx(Le,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Le,{w:20,h:3,strong:!0}),l.jsx(Le,{w:28,h:2})]})]})]})}function HS({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Le,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Le,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function VS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Le,{w:"70%",h:3,strong:!0}),l.jsx(Le,{w:"90%",h:2}),l.jsx(Le,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function US({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx(Fn,{w:i,h:i,radius:i*.25}),l.jsx(Le,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function WS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Le,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function YS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function FS({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function XS({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function qS({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function GS({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Le,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Le,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,m)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:m===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:m===10?1:.25}})})})},m))})]})]})}function KS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function QS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Le,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function ZS({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function JS({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function e4({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx(Fn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Le,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Le,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function t4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Le,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(vo,{size:a}),l.jsx(Le,{w:t*.12,h:3,strong:!0}),l.jsx(Le,{w:t*.08,h:2})]},u))})]})}function n4({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(Le,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Le,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:Math.min(60,t*.2),h:2}),l.jsx(Fn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(Fn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Le,{w:t*.4,h:2})]})}function s4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(Le,{w:t*.4,h:4,strong:!0}),l.jsx(Le,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:50,h:2}),l.jsx(Fn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:40,h:2}),l.jsx(Fn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:50,h:2}),l.jsx(Fn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Le,{w:60,h:2}),l.jsx(Fn,{w:"100%",h:"100%",radius:4})]}),l.jsx(Fn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var o4={navigation:Fw,hero:Xw,sidebar:qw,footer:Gw,modal:Kw,card:Qw,text:Zw,image:Jw,table:eS,list:tS,button:nS,input:sS,form:oS,tabs:iS,avatar:aS,badge:rS,header:lS,section:cS,grid:uS,dropdown:dS,toggle:fS,search:hS,toast:mS,progress:pS,chart:_S,video:gS,tooltip:yS,breadcrumb:xS,pagination:bS,divider:vS,accordion:wS,carousel:SS,pricing:kS,testimonial:CS,cta:jS,alert:MS,banner:TS,stat:ES,stepper:DS,tag:AS,rating:RS,map:NS,timeline:LS,fileUpload:BS,codeBlock:OS,calendar:zS,notification:$S,productCard:IS,profile:PS,drawer:HS,popover:VS,logo:US,faq:WS,gallery:YS,checkbox:FS,radio:XS,slider:qS,datePicker:GS,skeleton:KS,chip:QS,icon:ZS,spinner:JS,feature:e4,team:t4,login:n4,contact:s4};function i4({type:t,width:n,height:i,text:a}){const c=o4[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var a4=`svg[fill=none] {
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
}`,r4={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=a4}var je=r4,Pr=24,Ou=5;function vy(t,n,i,a,c){let u=1/0,d=1/0;const m=t.x,p=t.x+t.width,_=t.x+t.width/2,g=t.y,x=t.y+t.height,v=t.y+t.height/2,w=!a,S=w?[m,p,_]:[...a.left?[m]:[],...a.right?[p]:[]],C=w?[g,x,v]:[...a.top?[g]:[],...a.bottom?[x]:[]],k=[];for(const te of n)i.has(te.id)||k.push(te);c&&k.push(...c);for(const te of k){const pe=te.x,Te=te.x+te.width,ke=te.x+te.width/2,Ee=te.y,P=te.y+te.height,he=te.y+te.height/2;for(const Z of S)for(const ge of[pe,Te,ke]){const Be=ge-Z;Math.abs(Be)<Ou&&Math.abs(Be)<Math.abs(u)&&(u=Be)}for(const Z of C)for(const ge of[Ee,P,he]){const Be=ge-Z;Math.abs(Be)<Ou&&Math.abs(Be)<Math.abs(d)&&(d=Be)}}const M=Math.abs(u)<Ou?u:0,L=Math.abs(d)<Ou?d:0,D=[],E=new Set,$=m+M,q=p+M,R=_+M,I=g+L,V=x+L,J=v+L;for(const te of k){const pe=te.x,Te=te.x+te.width,ke=te.x+te.width/2,Ee=te.y,P=te.y+te.height,he=te.y+te.height/2;for(const Z of[pe,ke,Te])for(const ge of[$,R,q])if(Math.abs(ge-Z)<.5){const Be=`x:${Math.round(Z)}`;E.has(Be)||(E.add(Be),D.push({axis:"x",pos:Z}))}for(const Z of[Ee,he,P])for(const ge of[I,J,V])if(Math.abs(ge-Z)<.5){const Be=`y:${Math.round(Z)}`;E.has(Be)||(E.add(Be),D.push({axis:"y",pos:Z}))}}return{dx:M,dy:L,guides:D}}function wy(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function l4({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:m,passthrough:p,extraSnapRects:_,onSelectionChange:g,deselectSignal:x,onDragMove:v,onDragEnd:w,clearSignal:S,wireframe:C}){const[k,M]=y.useState(new Set),[L,D]=y.useState(null),[E,$]=y.useState(null),[q,R]=y.useState(null),[I,V]=y.useState([]),[J,te]=y.useState(null),[pe,Te]=y.useState(!1),ke=y.useRef(!1),[Ee,P]=y.useState(new Set),he=y.useRef(new Map),Z=y.useRef(null),ge=y.useRef(null),Be=y.useRef(t);Be.current=t;const z=y.useRef(g);z.current=g;const oe=y.useRef(v);oe.current=v;const H=y.useRef(w);H.current=w;const K=y.useRef(x);y.useEffect(()=>{x!==K.current&&(K.current=x,M(new Set))},[x]);const Se=y.useRef(S);y.useEffect(()=>{if(S!==void 0&&S!==Se.current){Se.current=S;const X=new Set(Be.current.map(Re=>Re.id));X.size>0&&(P(X),M(new Set),ge.current=null,It(()=>{n([]),P(new Set)},180))}},[S,n]),y.useEffect(()=>{const X=Re=>{const ot=Re.target;if(!(ot.tagName==="INPUT"||ot.tagName==="TEXTAREA"||ot.isContentEditable)){if((Re.key==="Backspace"||Re.key==="Delete")&&k.size>0){Re.preventDefault();const it=new Set(k);P(it),M(new Set),It(()=>{n(Be.current.filter(Ae=>!it.has(Ae.id))),P(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Re.key)&&k.size>0){Re.preventDefault();const it=Re.shiftKey?20:1,Ae=Re.key==="ArrowLeft"?-it:Re.key==="ArrowRight"?it:0,ut=Re.key==="ArrowUp"?-it:Re.key==="ArrowDown"?it:0;n(t.map(Ct=>k.has(Ct.id)?{...Ct,x:Math.max(0,Ct.x+Ae),y:Math.max(0,Ct.y+ut)}:Ct));return}if(Re.key==="Escape"){i?a(null):k.size>0&&M(new Set);return}}};return document.addEventListener("keydown",X),()=>document.removeEventListener("keydown",X)},[k,i,t,n,a]);const $e=y.useCallback(X=>{if(X.button!==0||p||X.target.closest(`.${je.placement}`))return;X.preventDefault(),X.stopPropagation();const ot=window.scrollY,Je=X.clientX,it=X.clientY;if(i){ge.current="place",d==null||d(!0);let Ae=!1,ut=Je,Ct=it;const $t=qe=>{ut=qe.clientX,Ct=qe.clientY;const B=Math.abs(ut-Je),G=Math.abs(Ct-it);if((B>5||G>5)&&(Ae=!0),Ae){const ue=Math.min(Je,ut),be=Math.min(it,Ct),Ye=Math.abs(ut-Je),He=Math.abs(Ct-it);D({x:ue,y:be,w:Ye,h:He}),R({x:qe.clientX+12,y:qe.clientY+12,text:`${Math.round(Ye)} × ${Math.round(He)}`})}},Ht=qe=>{window.removeEventListener("mousemove",$t),window.removeEventListener("mouseup",Ht),D(null),R(null),ge.current=null,d==null||d(!1);const B=ft[i];let G,ue,be,Ye;Ae?(G=Math.min(Je,ut),ue=Math.min(it,Ct)+ot,be=Math.max(Pr,Math.abs(ut-Je)),Ye=Math.max(Pr,Math.abs(Ct-it))):(be=B.width,Ye=B.height,G=Je-be/2,ue=it+ot-Ye/2),G=Math.max(0,G),ue=Math.max(0,ue);const He={id:wy(),type:i,x:G,y:ue,width:be,height:Ye,scrollY:ot,timestamp:Date.now()},ye=[...t,He];n(ye),M(new Set([He.id])),a(null)};window.addEventListener("mousemove",$t),window.addEventListener("mouseup",Ht)}else{X.shiftKey||M(new Set),ge.current="select";let Ae=!1;const ut=$t=>{const Ht=Math.abs($t.clientX-Je),qe=Math.abs($t.clientY-it);if((Ht>4||qe>4)&&(Ae=!0),Ae){const B=Math.min(Je,$t.clientX),G=Math.min(it,$t.clientY);$({x:B,y:G,w:Math.abs($t.clientX-Je),h:Math.abs($t.clientY-it)})}},Ct=$t=>{if(window.removeEventListener("mousemove",ut),window.removeEventListener("mouseup",Ct),ge.current=null,Ae){const Ht=Math.min(Je,$t.clientX),qe=Math.min(it,$t.clientY)+ot,B=Math.abs($t.clientX-Je),G=Math.abs($t.clientY-it),ue=new Set(X.shiftKey?k:new Set);for(const be of t)be.y-ot,be.x+be.width>Ht&&be.x<Ht+B&&be.y+be.height>qe&&be.y<qe+G&&ue.add(be.id);M(ue)}$(null)};window.addEventListener("mousemove",ut),window.addEventListener("mouseup",Ct)}},[i,p,t,n,k]),Xe=y.useCallback((X,Re)=>{var He;if(X.button!==0)return;const ot=X.target;if(ot.closest(`.${je.handle}`)||ot.closest(`.${je.deleteButton}`))return;X.preventDefault(),X.stopPropagation();let Je;X.shiftKey?(Je=new Set(k),Je.has(Re)?Je.delete(Re):Je.add(Re)):k.has(Re)?Je=new Set(k):Je=new Set([Re]),M(Je),(Je.size!==k.size||[...Je].some(ye=>!k.has(ye)))&&((He=z.current)==null||He.call(z,Je,X.shiftKey));const Ae=X.clientX,ut=X.clientY,Ct=new Map;for(const ye of t)Je.has(ye.id)&&Ct.set(ye.id,{x:ye.x,y:ye.y});ge.current="move",d==null||d(!0);let $t=!1,Ht=!1,qe=t,B=0,G=0;const ue=new Map;for(const ye of t)Ct.has(ye.id)&&ue.set(ye.id,{w:ye.width,h:ye.height});const be=ye=>{var En;const _t=ye.clientX-Ae,gt=ye.clientY-ut;if((Math.abs(_t)>2||Math.abs(gt)>2)&&($t=!0),!$t)return;if(ye.altKey&&!Ht){Ht=!0;const yt=[];for(const Zt of t)Ct.has(Zt.id)&&yt.push({...Zt,id:wy(),timestamp:Date.now()});qe=[...t,...yt]}let Xt=1/0,rt=1/0,Ve=-1/0,Vt=-1/0;for(const[yt,Zt]of Ct){const xn=ue.get(yt);xn&&(Xt=Math.min(Xt,Zt.x+_t),rt=Math.min(rt,Zt.y+gt),Ve=Math.max(Ve,Zt.x+_t+xn.w),Vt=Math.max(Vt,Zt.y+gt+xn.h))}const bt={x:Xt,y:rt,width:Ve-Xt,height:Vt-rt},{dx:Nt,dy:nt,guides:qt}=vy(bt,qe,new Set(Ct.keys()),void 0,_);V(qt);const Yt=_t+Nt,Dt=gt+nt;B=Yt,G=Dt,n(qe.map(yt=>{const Zt=Ct.get(yt.id);return Zt?{...yt,x:Math.max(0,Zt.x+Yt),y:Math.max(0,Zt.y+Dt)}:yt})),(En=oe.current)==null||En.call(oe,Yt,Dt)},Ye=()=>{var ye;window.removeEventListener("mousemove",be),window.removeEventListener("mouseup",Ye),ge.current=null,d==null||d(!1),V([]),(ye=H.current)==null||ye.call(H,B,G,$t)};window.addEventListener("mousemove",be),window.addEventListener("mouseup",Ye)},[k,t,n,d]),Ze=y.useCallback((X,Re,ot)=>{X.preventDefault(),X.stopPropagation();const Je=t.find(ue=>ue.id===Re);if(!Je)return;M(new Set([Re])),ge.current="resize",d==null||d(!0);const it=X.clientX,Ae=X.clientY,ut=Je.width,Ct=Je.height,$t=Je.x,Ht=Je.y,qe={left:ot.includes("w"),right:ot.includes("e"),top:ot.includes("n"),bottom:ot.includes("s")},B=ue=>{const be=ue.clientX-it,Ye=ue.clientY-Ae;let He=ut,ye=Ct,_t=$t,gt=Ht;ot.includes("e")&&(He=Math.max(Pr,ut+be)),ot.includes("w")&&(He=Math.max(Pr,ut-be),_t=$t+ut-He),ot.includes("s")&&(ye=Math.max(Pr,Ct+Ye)),ot.includes("n")&&(ye=Math.max(Pr,Ct-Ye),gt=Ht+Ct-ye);const Xt={x:_t,y:gt,width:He,height:ye},{dx:rt,dy:Ve,guides:Vt}=vy(Xt,Be.current,new Set([Re]),qe,_);V(Vt),rt!==0&&(qe.right?He+=rt:qe.left&&(_t+=rt,He-=rt)),Ve!==0&&(qe.bottom?ye+=Ve:qe.top&&(gt+=Ve,ye-=Ve)),n(Be.current.map(bt=>bt.id===Re?{...bt,x:_t,y:gt,width:He,height:ye}:bt)),R({x:ue.clientX+12,y:ue.clientY+12,text:`${Math.round(He)} × ${Math.round(ye)}`})},G=()=>{window.removeEventListener("mousemove",B),window.removeEventListener("mouseup",G),R(null),ge.current=null,d==null||d(!1),V([])};window.addEventListener("mousemove",B),window.addEventListener("mouseup",G)},[t,n,d]),st=y.useCallback(X=>{ge.current=null,P(Re=>{const ot=new Set(Re);return ot.add(X),ot}),M(Re=>{const ot=new Set(Re);return ot.delete(X),ot}),It(()=>{n(Be.current.filter(Re=>Re.id!==X)),P(Re=>{const ot=new Set(Re);return ot.delete(X),ot})},180)},[n]),Gt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},rn=y.useCallback(X=>{const Re=t.find(ot=>ot.id===X);Re&&(ke.current=!!Re.text,te(X),Te(!1))},[t]),Ot=y.useCallback(()=>{J&&(Te(!0),It(()=>{te(null),Te(!1)},150))},[J]);y.useEffect(()=>{u&&J&&Ot()},[u]);const yn=y.useCallback(X=>{J&&(n(t.map(Re=>Re.id===J?{...Re,text:X.trim()||void 0}:Re)),Ot())},[J,t,n,Ot]),an=typeof window<"u"?window.scrollY:0,Sn=["nw","ne","se","sw"],hn=C?"#f97316":"#3c82f7",mn=[{dir:"n",cls:je.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:hn})})},{dir:"e",cls:je.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:hn})})},{dir:"s",cls:je.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:hn})})},{dir:"w",cls:je.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:hn})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:Z,className:`${je.overlay} ${c?"":je.light} ${i?je.placing:""} ${p?je.passthrough:""} ${u?je.overlayExiting:""} ${C?je.wireframe:""}${m?` ${m}`:""}`,"data-feedback-toolbar":!0,onMouseDown:$e,children:t.map(X=>{var it;const Re=k.has(X.id),ot=((it=gi[X.type])==null?void 0:it.label)||X.type,Je=X.y-an;return l.jsxs("div",{"data-design-placement":X.id,className:`${je.placement} ${Re?je.selected:""} ${Ee.has(X.id)?je.exiting:""}`,style:{left:X.x,top:Je,width:X.width,height:X.height,position:"fixed"},onMouseDown:Ae=>Xe(Ae,X.id),onDoubleClick:()=>rn(X.id),children:[l.jsx("span",{className:je.placementLabel,children:ot}),l.jsx("span",{className:`${je.placementAnnotation} ${X.text?je.annotationVisible:""}`,children:(X.text&&he.current.set(X.id,X.text),X.text||he.current.get(X.id)||"")}),l.jsx("div",{className:je.placementContent,children:l.jsx(i4,{type:X.type,width:X.width,height:X.height,text:X.text})}),l.jsx("div",{className:je.deleteButton,onMouseDown:Ae=>Ae.stopPropagation(),onClick:()=>st(X.id),children:"✕"}),Sn.map(Ae=>l.jsx("div",{className:`${je.handle} ${je[`handle${Ae.charAt(0).toUpperCase()}${Ae.slice(1)}`]}`,onMouseDown:ut=>Ze(ut,X.id,Ae)},Ae)),mn.map(({dir:Ae,cls:ut,arrow:Ct})=>l.jsx("div",{className:`${je.edgeHandle} ${ut}`,onMouseDown:$t=>Ze($t,X.id,Ae),children:Ct},Ae))]},X.id)})}),J&&(()=>{var Ht,qe;const X=t.find(B=>B.id===J);if(!X)return null;const Re=X.y-an,ot=X.x+X.width/2,Je=Re-8,it=Re+X.height+8,Ae=Je>200,ut=it<window.innerHeight-100,Ct=Math.max(160,Math.min(window.innerWidth-160,ot));let $t;return Ae?$t={left:Ct,bottom:window.innerHeight-Je}:ut?$t={left:Ct,top:it}:$t={left:Ct,top:Math.max(80,window.innerHeight/2-80)},l.jsx(pd,{element:((Ht=gi[X.type])==null?void 0:Ht.label)||X.type,placeholder:Gt[X.type]||"Label or content text",initialValue:(qe=X.text)!=null?qe:"",submitLabel:ke.current?"Save":"Set",onSubmit:yn,onCancel:Ot,onDelete:ke.current?()=>{yn("")}:void 0,isExiting:pe,lightMode:!c,style:$t})})(),L&&l.jsx("div",{className:je.drawBox,style:{left:L.x,top:L.y,width:L.w,height:L.h},"data-feedback-toolbar":!0}),E&&l.jsx("div",{className:je.selectBox,style:{left:E.x,top:E.y,width:E.w,height:E.h},"data-feedback-toolbar":!0}),q&&l.jsx("div",{className:je.sizeIndicator,style:{left:q.x,top:q.y},"data-feedback-toolbar":!0,children:q.text}),I.map((X,Re)=>l.jsx("div",{className:je.guideLine,style:X.axis==="x"?{position:"fixed",left:X.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:X.pos-an,right:0,height:1},"data-feedback-toolbar":!0},`${X.axis}-${X.pos}-${Re}`))]})}function c4(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?je.fadeTop:""} ${i?je.fadeBottom:""}`}var A="currentColor",we="0.5";function u4({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:A,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:A,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:A,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:A,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:A,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:A,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:A,strokeWidth:we})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:A,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:A,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:A,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:A,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:A,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:A,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:A,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:A,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:A,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:A,strokeWidth:we})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:A,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:A,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:A,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:A,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:A,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:A,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:A,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:A,strokeWidth:we}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:A,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:A,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:A,strokeWidth:we}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:A,strokeWidth:we,fill:A,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:A,strokeWidth:we}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:A,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:A,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:A,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:A,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:A,strokeWidth:we})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:A,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:A,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:A,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:A,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:A,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:A,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:A,strokeWidth:we})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:A,strokeWidth:we}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:A,strokeWidth:we,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:A,strokeWidth:we,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:A,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:A,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:A,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:A,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:A,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:A,strokeWidth:we}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:A,strokeWidth:we,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:A,strokeWidth:we,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:A,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:A,strokeWidth:we})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:A,strokeWidth:we})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:A,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:A,strokeWidth:we,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:A,strokeWidth:we,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:A,strokeWidth:we}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:A,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:A,strokeWidth:we}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:A,strokeWidth:we}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:A,strokeWidth:we})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:A,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:A,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:A,strokeWidth:we,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:A,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:A,strokeWidth:we,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:A,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:A,opacity:".15",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:A,strokeWidth:we})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:A,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:A,strokeWidth:we}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:A,strokeWidth:we,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:A,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:A,strokeWidth:we})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:A,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:A,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:A,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:A,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:A,strokeWidth:we}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:A,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:A,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:A,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:A,strokeWidth:we,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:A,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:A,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:A,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:A,strokeWidth:we})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:A,strokeWidth:we}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:A,strokeWidth:we,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:A,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:A,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:A,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:A,strokeWidth:we})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:A,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:A,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:A,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:A,opacity:".2",stroke:A,strokeWidth:we}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:A,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:A,strokeWidth:we}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:A,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:A,strokeWidth:we})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:A,strokeWidth:we,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:A,strokeWidth:we,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:A,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:A,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:A,strokeWidth:we,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:A,strokeWidth:we}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:A,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:A,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:A,opacity:".15",stroke:A,strokeWidth:we})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:A,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:A,opacity:".2",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:A,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:A,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:A,strokeWidth:we,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:A,strokeWidth:we,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:A,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:A,strokeWidth:we}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:A,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:A,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:A,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:A,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:A,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:A,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:A,strokeWidth:we}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:A,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:A,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:A,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:A,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:A,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:A,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:A,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:A,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:A,strokeWidth:we}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:A,strokeWidth:we,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:A,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:A,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:A,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:A,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:A,strokeWidth:we})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:A,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:A,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:A,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:A,strokeWidth:we,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:A,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:A,strokeWidth:we})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:A,strokeWidth:we}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:A,strokeWidth:we,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:A,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:A,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:A,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:A,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:A,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:A,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:A,strokeWidth:we})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:A,strokeWidth:we}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:A,strokeWidth:we,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:A,strokeWidth:we}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:A,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:A,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:A,strokeWidth:we})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:A,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:A,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:A,strokeWidth:we,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:A,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:A,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:A,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:A,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:A,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:A,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:A,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:A,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:A,opacity:".08",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:A,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:A,strokeWidth:we,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:A,strokeWidth:we,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:A,strokeWidth:we,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:A,strokeWidth:we,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:A,strokeWidth:we,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:A,strokeWidth:we,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:A,strokeWidth:we}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:A,strokeWidth:we,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:A,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:A,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:A,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:A,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:A,strokeWidth:we,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:A,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:A,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:A,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:A,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:A,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:A,strokeWidth:we}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:A,opacity:".2"})]});default:return null}}function d4({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${je.placeScroll} ${c||""}`,children:jx.map(d=>l.jsxs("div",{className:je.paletteSection,children:[l.jsx("div",{className:je.paletteSectionTitle,children:d.section}),d.items.map(m=>l.jsxs("div",{className:`${je.paletteItem} ${t===m.type?je.active:""} ${u?je.wireframe:""}`,onClick:()=>n(m.type),onMouseDown:p=>{p.button===0&&i(m.type,p)},children:[l.jsx("div",{className:je.paletteItemIcon,children:l.jsx(u4,{type:m.type})}),l.jsx("span",{className:je.paletteItemLabel,children:m.label})]},m.type))]},d.section))})}function f4({value:t,suffix:n}){const[i,a]=y.useState(null),[c,u]=y.useState(n),[d,m]=y.useState("up"),p=y.useRef(t),_=y.useRef(n),g=y.useRef(),x=i!==null&&c!==n;return y.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,_.current=n,a(null);return}m(t>p.current?"up":"down"),a(p.current),u(_.current),p.current=t,_.current=n,clearTimeout(g.current),g.current=It(()=>a(null),250)}else _.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):x?l.jsxs("span",{className:je.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${je.rollingNum} ${d==="up"?je.exitUp:je.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${je.rollingNum} ${d==="up"?je.enterUp:je.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:je.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${je.rollingNum} ${d==="up"?je.exitUp:je.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${je.rollingNum} ${d==="up"?je.enterUp:je.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function h4({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:m,onClearPlacements:p,onDragStart:_,blankCanvas:g,onBlankCanvasChange:x,wireframePurpose:v,onWireframePurposeChange:w,Tooltip:S}){const[C,k]=y.useState(!1),[M,L]=y.useState("exit"),[D,E]=y.useState(!1),[$,q]=y.useState(!0),R=y.useRef(0),I=y.useRef(""),V=y.useRef(0),J=y.useRef(),te=y.useRef(null),[pe,Te]=y.useState("");y.useEffect(()=>(u?(k(!0),clearTimeout(J.current),cancelAnimationFrame(V.current),V.current=Wr(()=>{V.current=Wr(()=>{L("enter")})})):(cancelAnimationFrame(V.current),L("exit"),clearTimeout(J.current),J.current=It(()=>{k(!1),d==null||d()},200)),()=>cancelAnimationFrame(V.current)),[u]);const ke=m>0||a>0,Ee=m+a;return Ee>0&&(R.current=Ee,I.current=g?Ee===1?"Component":"Components":Ee===1?"Change":"Changes"),y.useEffect(()=>{if(ke)D?q(!1):(q(!0),E(!0),Wr(()=>{Wr(()=>{q(!1)})}));else{q(!0);const P=It(()=>E(!1),300);return()=>clearTimeout(P)}},[ke]),y.useEffect(()=>{if(!C)return;const P=te.current;if(!P)return;const he=()=>Te(c4(P));he(),P.addEventListener("scroll",he,{passive:!0});const Z=new ResizeObserver(he);return Z.observe(P),()=>{P.removeEventListener("scroll",he),Z.disconnect()}},[C]),C?l.jsxs("div",{className:`${je.palette} ${je[M]} ${i?"":je.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:P=>P.stopPropagation(),onMouseDown:P=>P.stopPropagation(),onTransitionEnd:P=>{P.target===P.currentTarget&&(u||(clearTimeout(J.current),k(!1),L("exit"),d==null||d()))},children:[l.jsxs("div",{className:je.paletteHeader,children:[l.jsx("div",{className:je.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:je.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${je.canvasToggle} ${g?je.active:""}`,onClick:()=>x(!g),children:[l.jsx("span",{className:je.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:je.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${je.wireframePurposeWrap} ${g?"":je.collapsed}`,children:l.jsx("div",{className:je.wireframePurposeInner,children:l.jsx("textarea",{className:je.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:v,onChange:P=>w(P.target.value),rows:2})})}),l.jsx(d4,{activeType:t,onSelect:n,onDragStart:_,scrollRef:te,fadeClass:pe,blankCanvas:g}),D&&l.jsx("div",{className:`${je.paletteFooterWrap} ${$?je.footerHidden:""}`,children:l.jsx("div",{className:je.paletteFooterInner,children:l.jsx("div",{className:je.paletteFooterInnerContent,children:l.jsxs("div",{className:je.paletteFooter,children:[l.jsx("span",{className:je.paletteFooterCount,children:l.jsx(f4,{value:R.current,suffix:I.current})}),l.jsx("button",{className:je.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function Gr(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function yo(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=Gr(i)}return null}function m4(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(_=>_.length>2&&!_.match(/^[a-z]{1,2}$/)&&!_.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const m=Gr(a);!a.parentElement&&m&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=m,c++}return i.join(" > ")}function qr(t){var a,c,u,d,m,p,_,g;const n=m4(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=yo(t,"svg");if(x){const v=Gr(x);if(v instanceof HTMLElement)return{name:`graphic in ${qr(v).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=Gr(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const v=(a=x.textContent)==null?void 0:a.trim();return{name:v?`icon in "${v}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),v=t.getAttribute("aria-label");return v?{name:`button [${v}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),v=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:v?{name:`link to ${v.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",v=t.getAttribute("placeholder"),w=t.getAttribute("name");return v?{name:`input "${v}"`,path:n}:w?{name:`input [${w}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(m=t.textContent)==null?void 0:m.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(_=t.textContent)==null?void 0:_.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(g=t.textContent)==null?void 0:g.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,v=t.getAttribute("role"),w=t.getAttribute("aria-label");if(w)return{name:`${i} [${w}]`,path:n};if(v)return{name:`${v}`,path:n};if(typeof x=="string"&&x){const S=x.split(/[\s_-]+/).map(C=>C.replace(/[A-Z0-9]{5,}.*$/,"")).filter(C=>C.length>2&&!/^[a-z]{1,2}$/.test(C)).slice(0,2);if(S.length>0)return{name:S.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function Wl(t){var u,d,m;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(m=c.textContent)==null?void 0:m.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function zu(t){const n=Gr(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(g=>g!==t&&g instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(g=>{var S;const x=g.tagName.toLowerCase(),v=g.className;let w="";if(typeof v=="string"&&v){const C=v.split(/\s+/).map(k=>k.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(k=>k.length>2&&!/^[a-z]{1,2}$/.test(k));C&&(w=`.${C}`)}if(x==="button"||x==="a"){const C=(S=g.textContent)==null?void 0:S.trim().slice(0,15);if(C)return`${x}${w} "${C}"`}return`${x}${w}`});let m=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const g=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));g&&(m=`.${g}`)}const p=n.children.length,_=p>u.length+1?` (${p} total in ${m})`:"";return u.join(", ")+_}function Yl(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var Mx=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),p4=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),_4=new Set(["input","textarea","select"]),g4=new Set(["img","video","canvas","svg"]),y4=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function $u(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;p4.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:_4.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:g4.has(a)?c=["width","height","objectFit","borderRadius"]:y4.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),m=n.getPropertyValue(d);m&&!Mx.has(m)&&(i[u]=m)}return i}var x4=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Iu(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of x4){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!Mx.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function b4(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function Pu(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Hu(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(m=>m.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(m=>m.length>2);d&&(c=`${a}.${d}`)}const u=Gr(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var v4=new Set(["nav","header","main","section","article","footer","aside"]),Sm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Sy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},w4=new Set(["script","style","noscript","link","meta"]),S4=40;function Tx(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function lr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":lr(i)} > ${n}:nth-child(${c})`}return n}function _d(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&Sm[a])return Sm[a];if(Sy[n])return Sy[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const m=(d=c.textContent)==null?void 0:d.trim();if(m&&m.length<=50)return m;if(m)return m.slice(0,47)+"..."}const{name:u}=qr(t);return u.charAt(0).toUpperCase()+u.slice(1)}function Ex(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function Dx(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function k4(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(w4.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const m=window.getComputedStyle(c);if(m.display==="none"||m.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<S4)return;const _=v4.has(d),g=c.getAttribute("role")&&Sm[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!_&&!g&&!x)return;const v=window.scrollY,w=Tx(c),S={x:p.x,y:w?p.y:p.y+v,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:_d(c),tagName:d,selector:lr(c),role:c.getAttribute("role"),className:Ex(c),textSnippet:Dx(c),originalRect:S,currentRect:{...S},originalIndex:u,isFixed:w})}),a}function C4(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=Tx(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:_d(t),tagName:t.tagName.toLowerCase(),selector:lr(t),role:t.getAttribute("role"),className:Ex(t),textSnippet:Dx(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var ky={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Cy=["nw","n","ne","e","se","s","sw","w"],Vu=24,jy=16,Uu=5;function My(t,n,i,a){let c=1/0,u=1/0;const d=t.x,m=t.x+t.width,p=t.x+t.width/2,_=t.y,g=t.y+t.height,x=t.y+t.height/2,v=[];for(const R of n)i.has(R.id)||v.push(R.currentRect);a&&v.push(...a);for(const R of v){const I=R.x,V=R.x+R.width,J=R.x+R.width/2,te=R.y,pe=R.y+R.height,Te=R.y+R.height/2;for(const ke of[d,m,p])for(const Ee of[I,V,J]){const P=Ee-ke;Math.abs(P)<Uu&&Math.abs(P)<Math.abs(c)&&(c=P)}for(const ke of[_,g,x])for(const Ee of[te,pe,Te]){const P=Ee-ke;Math.abs(P)<Uu&&Math.abs(P)<Math.abs(u)&&(u=P)}}const w=Math.abs(c)<Uu?c:0,S=Math.abs(u)<Uu?u:0,C=[],k=new Set,M=d+w,L=m+w,D=p+w,E=_+S,$=g+S,q=x+S;for(const R of v){const I=R.x,V=R.x+R.width,J=R.x+R.width/2,te=R.y,pe=R.y+R.height,Te=R.y+R.height/2;for(const ke of[I,J,V])for(const Ee of[M,D,L])if(Math.abs(Ee-ke)<.5){const P=`x:${Math.round(ke)}`;k.has(P)||(k.add(P),C.push({axis:"x",pos:ke}))}for(const ke of[te,Te,pe])for(const Ee of[E,q,$])if(Math.abs(Ee-ke)<.5){const P=`y:${Math.round(ke)}`;k.has(P)||(k.add(P),C.push({axis:"y",pos:ke}))}}return{dx:w,dy:S,guides:C}}var j4=new Set(["script","style","noscript","link","meta","br","hr"]);function Ty(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(j4.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=jy&&i.height>=jy)return n;n=n.parentElement}return null}function M4({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:m,deselectSignal:p,onDragMove:_,onDragEnd:g,clearSignal:x}){const{sections:v}=t,w=y.useRef(t);w.current=t;const[S,C]=y.useState(new Set),[k,M]=y.useState(!1),L=y.useRef(x);y.useEffect(()=>{x!==void 0&&x!==L.current&&(L.current=x,v.length>0&&M(!0))},[x,v.length]);const D=y.useRef(p);y.useEffect(()=>{p!==D.current&&(D.current=p,C(new Set))},[p]);const[E,$]=y.useState(null),[q,R]=y.useState(!1),I=y.useRef(!1),V=y.useCallback(B=>{const G=v.find(ue=>ue.id===B);G&&(I.current=!!G.note,$(B),R(!1))},[v]),J=y.useCallback(()=>{E&&(R(!0),It(()=>{$(null),R(!1)},150))},[E]),te=y.useCallback(B=>{E&&(n({...t,sections:v.map(G=>G.id===E?{...G,note:B.trim()||void 0}:G)}),J())},[E,v,t,n,J]);y.useEffect(()=>{a&&E&&J()},[a]);const[pe,Te]=y.useState(new Set),ke=y.useRef(new Map),[Ee,P]=y.useState(null),[he,Z]=y.useState(null),[ge,Be]=y.useState([]),[z,oe]=y.useState(0),H=y.useRef(null),K=y.useRef(new Set),Se=y.useRef(new Map),[$e,Xe]=y.useState(new Map),[Ze,st]=y.useState(new Map),Gt=y.useRef(new Set),rn=y.useRef(new Map),Ot=y.useRef(m);Ot.current=m;const yn=y.useRef(_);yn.current=_;const an=y.useRef(g);an.current=g,y.useEffect(()=>{u&&C(new Set)},[u]);const[Sn,hn]=y.useState(()=>!t.sections.some(B=>{const G=B.originalRect,ue=B.currentRect;return Math.abs(G.x-ue.x)>1||Math.abs(G.y-ue.y)>1||Math.abs(G.width-ue.width)>1||Math.abs(G.height-ue.height)>1}));y.useEffect(()=>{if(!Sn){const B=It(()=>hn(!0),380);return()=>clearTimeout(B)}},[]);const mn=y.useRef(new Set);y.useEffect(()=>{mn.current=new Set(v.map(B=>B.selector))},[v]),y.useEffect(()=>{const B=()=>oe(window.scrollY);return B(),window.addEventListener("scroll",B,{passive:!0}),window.addEventListener("resize",B,{passive:!0}),()=>{window.removeEventListener("scroll",B),window.removeEventListener("resize",B)}},[]),y.useEffect(()=>{const B=G=>{if(H.current){P(null);return}const ue=document.elementFromPoint(G.clientX,G.clientY);if(!ue){P(null);return}if(ue.closest("[data-feedback-toolbar]")){P(null);return}if(ue.closest("[data-design-placement]")){P(null);return}if(ue.closest("[data-annotation-popup]")){P(null);return}const be=Ty(ue);if(!be){P(null);return}for(const He of mn.current)try{const ye=document.querySelector(He);if(ye&&(ye===be||be.contains(ye))){P(null);return}}catch{}const Ye=be.getBoundingClientRect();P({x:Ye.x,y:Ye.y,w:Ye.width,h:Ye.height})};return document.addEventListener("mousemove",B,{passive:!0}),()=>document.removeEventListener("mousemove",B)},[v]),y.useEffect(()=>{const B=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=B}},[]),y.useEffect(()=>{const B=G=>{var ye,_t,gt,Xt;if(H.current||G.button!==0)return;const ue=G.target;if(!ue||ue.closest("[data-feedback-toolbar]")||ue.closest("[data-design-placement]")||ue.closest("[data-annotation-popup]"))return;const be=Ty(ue);let Ye=!1;if(be)for(const rt of mn.current)try{const Ve=document.querySelector(rt);if(Ve&&(Ve===be||be.contains(Ve))){Ye=!0;break}}catch{}const He=!!(G.shiftKey||G.metaKey||G.ctrlKey);if(be&&!Ye){G.preventDefault(),G.stopPropagation();const rt=C4(be),Ve=[...v,rt],Vt=[...t.originalOrder,rt.id];n({...t,sections:Ve,originalOrder:Vt});const bt=new Set([rt.id]);C(bt),(ye=Ot.current)==null||ye.call(Ot,bt,He),P(null);const Nt=G.clientX,nt=G.clientY,qt={x:rt.currentRect.x,y:rt.currentRect.y};rt.originalRect;let Yt=!1,Dt=0,En=0;H.current="move";const yt=xn=>{var Ut;const is=xn.clientX-Nt,Hn=xn.clientY-nt;if(!Yt&&(Math.abs(is)>2||Math.abs(Hn)>2)&&(Yt=!0),!Yt)return;const Ds={x:qt.x+is,y:qt.y+Hn,width:rt.currentRect.width,height:rt.currentRect.height},xs=My(Ds,Ve,new Set([rt.id]),d);Be(xs.guides);const Vn=is+xs.dx,dn=Hn+xs.dy;Dt=Vn,En=dn;const Ln=document.querySelector(`[data-rearrange-section="${rt.id}"]`);Ln&&(Ln.style.transform=`translate(${Vn}px, ${dn}px)`),Xe(new Map([[rt.id,{x:qt.x+Vn,y:qt.y+dn,width:rt.currentRect.width,height:rt.currentRect.height}]])),(Ut=yn.current)==null||Ut.call(yn,Vn,dn)},Zt=()=>{var is;window.removeEventListener("mousemove",yt),window.removeEventListener("mouseup",Zt),H.current=null,Be([]),Xe(new Map);const xn=document.querySelector(`[data-rearrange-section="${rt.id}"]`);xn&&(xn.style.transform=""),Yt&&n({...t,sections:Ve.map(Hn=>Hn.id===rt.id?{...Hn,currentRect:{...Hn.currentRect,x:Math.max(0,qt.x+Dt),y:Math.max(0,qt.y+En)}}:Hn),originalOrder:Vt}),(is=an.current)==null||is.call(an,Dt,En,Yt)};window.addEventListener("mousemove",yt),window.addEventListener("mouseup",Zt)}else if(Ye&&be){G.preventDefault();for(const rt of v)try{const Ve=document.querySelector(rt.selector);if(Ve&&Ve===be){const Vt=new Set([rt.id]);C(Vt),(_t=Ot.current)==null||_t.call(Ot,Vt,He);return}}catch{}He||(C(new Set),(gt=Ot.current)==null||gt.call(Ot,new Set,!1))}else He||(C(new Set),(Xt=Ot.current)==null||Xt.call(Ot,new Set,!1))};return document.addEventListener("mousedown",B,!0),()=>document.removeEventListener("mousedown",B,!0)},[v,t,n]),y.useEffect(()=>{const B=G=>{const ue=G.target;if(!(ue.tagName==="INPUT"||ue.tagName==="TEXTAREA"||ue.isContentEditable)){if((G.key==="Backspace"||G.key==="Delete")&&S.size>0){G.preventDefault();const be=new Set(S);Te(Ye=>{const He=new Set(Ye);for(const ye of be)He.add(ye);return He}),C(new Set),It(()=>{const Ye=w.current;n({...Ye,sections:Ye.sections.filter(He=>!be.has(He.id)),originalOrder:Ye.originalOrder.filter(He=>!be.has(He))}),Te(He=>{const ye=new Set(He);for(const _t of be)ye.delete(_t);return ye})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(G.key)&&S.size>0){G.preventDefault();const be=G.shiftKey?20:1,Ye=G.key==="ArrowLeft"?-be:G.key==="ArrowRight"?be:0,He=G.key==="ArrowUp"?-be:G.key==="ArrowDown"?be:0;n({...t,sections:v.map(ye=>S.has(ye.id)?{...ye,currentRect:{...ye.currentRect,x:Math.max(0,ye.currentRect.x+Ye),y:Math.max(0,ye.currentRect.y+He)}}:ye)});return}G.key==="Escape"&&S.size>0&&C(new Set)}};return document.addEventListener("keydown",B),()=>document.removeEventListener("keydown",B)},[S,v,t,n]);const X=y.useCallback((B,G)=>{var Nt;if(B.button!==0)return;const ue=B.target;if(ue.closest(`.${je.handle}`)||ue.closest(`.${je.deleteButton}`))return;B.preventDefault(),B.stopPropagation();let be;B.shiftKey||B.metaKey||B.ctrlKey?(be=new Set(S),be.has(G)?be.delete(G):be.add(G)):S.has(G)?be=new Set(S):be=new Set([G]),C(be),(be.size!==S.size||[...be].some(nt=>!S.has(nt)))&&((Nt=Ot.current)==null||Nt.call(Ot,be,!!(B.shiftKey||B.metaKey||B.ctrlKey)));const He=B.clientX,ye=B.clientY,_t=new Map;for(const nt of v)be.has(nt.id)&&_t.set(nt.id,{x:nt.currentRect.x,y:nt.currentRect.y});H.current="move";let gt=!1,Xt=0,rt=0;const Ve=new Map;for(const nt of v)if(be.has(nt.id)){const qt=document.querySelector(`[data-rearrange-section="${nt.id}"]`);Ve.set(nt.id,{outlineEl:qt,curW:nt.currentRect.width,curH:nt.currentRect.height})}const Vt=nt=>{var xs;const qt=nt.clientX-He,Yt=nt.clientY-ye;if(qt===0&&Yt===0)return;gt=!0;let Dt=1/0,En=1/0,yt=-1/0,Zt=-1/0;for(const[Vn,{curW:dn,curH:Ln}]of Ve){const Ut=_t.get(Vn);if(!Ut)continue;const Xn=Ut.x+qt,Pe=Ut.y+Yt;Dt=Math.min(Dt,Xn),En=Math.min(En,Pe),yt=Math.max(yt,Xn+dn),Zt=Math.max(Zt,Pe+Ln)}const xn=My({x:Dt,y:En,width:yt-Dt,height:Zt-En},v,be,d),is=qt+xn.dx,Hn=Yt+xn.dy;Xt=is,rt=Hn,Be(xn.guides);for(const[,{outlineEl:Vn}]of Ve)Vn&&(Vn.style.transform=`translate(${is}px, ${Hn}px)`);const Ds=new Map;for(const[Vn,{curW:dn,curH:Ln}]of Ve){const Ut=_t.get(Vn);if(Ut){const Xn={x:Math.max(0,Ut.x+is),y:Math.max(0,Ut.y+Hn),width:dn,height:Ln};Ds.set(Vn,Xn)}}Xe(Ds),(xs=yn.current)==null||xs.call(yn,is,Hn)},bt=nt=>{var qt,Yt;window.removeEventListener("mousemove",Vt),window.removeEventListener("mouseup",bt),H.current=null,Be([]),Xe(new Map);for(const[,{outlineEl:Dt}]of Ve)Dt&&(Dt.style.transform="");if(gt){const Dt=nt.clientX-He,En=nt.clientY-ye;if(Math.abs(Dt)<5&&Math.abs(En)<5)n({...t,sections:v.map(yt=>{const Zt=_t.get(yt.id);return Zt?{...yt,currentRect:{...yt.currentRect,x:Zt.x,y:Zt.y}}:yt})});else{n({...t,sections:v.map(yt=>{const Zt=_t.get(yt.id);return Zt?{...yt,currentRect:{...yt.currentRect,x:Math.max(0,Zt.x+Xt),y:Math.max(0,Zt.y+rt)}}:yt})}),(qt=an.current)==null||qt.call(an,Xt,rt,!0);return}}(Yt=an.current)==null||Yt.call(an,0,0,!1)};window.addEventListener("mousemove",Vt),window.addEventListener("mouseup",bt)},[S,v,t,n]),Re=y.useCallback((B,G,ue)=>{B.preventDefault(),B.stopPropagation();const be=v.find(Vt=>Vt.id===G);if(!be)return;C(new Set([G])),H.current="resize";const Ye=B.clientX,He=B.clientY,ye={...be.currentRect};be.originalRect;const _t=ye.width/ye.height;let gt={...ye};const Xt=document.querySelector(`[data-rearrange-section="${G}"]`),rt=Vt=>{const bt=Vt.clientX-Ye,Nt=Vt.clientY-He;let nt=ye.x,qt=ye.y,Yt=ye.width,Dt=ye.height;if(ue.includes("e")&&(Yt=Math.max(Vu,ye.width+bt)),ue.includes("w")&&(Yt=Math.max(Vu,ye.width-bt),nt=ye.x+ye.width-Yt),ue.includes("s")&&(Dt=Math.max(Vu,ye.height+Nt)),ue.includes("n")&&(Dt=Math.max(Vu,ye.height-Nt),qt=ye.y+ye.height-Dt),Vt.shiftKey)if(ue.length===2){const yt=Math.abs(Yt-ye.width),Zt=Math.abs(Dt-ye.height);yt>Zt?Dt=Yt/_t:Yt=Dt*_t,ue.includes("w")&&(nt=ye.x+ye.width-Yt),ue.includes("n")&&(qt=ye.y+ye.height-Dt)}else ue==="e"||ue==="w"?Dt=Yt/_t:Yt=Dt*_t,ue==="w"&&(nt=ye.x+ye.width-Yt),ue==="n"&&(qt=ye.y+ye.height-Dt);gt={x:nt,y:qt,width:Yt,height:Dt},Xt&&(Xt.style.left=`${nt}px`,Xt.style.top=`${qt-z}px`,Xt.style.width=`${Yt}px`,Xt.style.height=`${Dt}px`),Z({x:Vt.clientX+12,y:Vt.clientY+12,text:`${Math.round(Yt)} × ${Math.round(Dt)}`}),Xe(new Map([[G,gt]]))},Ve=()=>{window.removeEventListener("mousemove",rt),window.removeEventListener("mouseup",Ve),Z(null),H.current=null,Xe(new Map),n({...t,sections:v.map(Vt=>Vt.id===G?{...Vt,currentRect:gt}:Vt)})};window.addEventListener("mousemove",rt),window.addEventListener("mouseup",Ve)},[v,t,n,z]),ot=y.useCallback(B=>{Te(G=>{const ue=new Set(G);return ue.add(B),ue}),C(G=>{const ue=new Set(G);return ue.delete(B),ue}),It(()=>{const G=w.current;n({...G,sections:G.sections.filter(ue=>ue.id!==B),originalOrder:G.originalOrder.filter(ue=>ue!==B)}),Te(ue=>{const be=new Set(ue);return be.delete(B),be})},180)},[n]),Je=B=>{const G=B.originalRect,ue=B.currentRect;return Math.abs(G.x-ue.x)>1||Math.abs(G.y-ue.y)>1||Math.abs(G.width-ue.width)>1||Math.abs(G.height-ue.height)>1},it=B=>{const G=B.originalRect,ue=B.currentRect;return Math.abs(G.x-ue.x)>1||Math.abs(G.y-ue.y)>1},Ae=B=>{const G=B.originalRect,ue=B.currentRect;return Math.abs(G.width-ue.width)>1||Math.abs(G.height-ue.height)>1};for(const B of v)Se.current.has(B.id)||(it(B)?Se.current.set(B.id,"move"):Ae(B)&&Se.current.set(B.id,"resize"));for(const B of Se.current.keys())v.some(G=>G.id===B)||Se.current.delete(B);const ut=v.filter(B=>{try{if(pe.has(B.id)||S.has(B.id))return!0;const G=document.querySelector(B.selector);if(!G)return!1;const ue=G.getBoundingClientRect(),be=B.originalRect;return Math.abs(ue.width-be.width)+Math.abs(ue.height-be.height)<200}catch{return!1}}),Ct=ut.filter(B=>Je(B)),$t=ut.filter(B=>!Je(B)),Ht=new Set(Ct.map(B=>B.id));for(const B of K.current)Ht.has(B)||K.current.delete(B);const qe=[...Ht].sort().join(",");for(const B of Ct)rn.current.set(B.id,{currentRect:B.currentRect,originalRect:B.originalRect,isFixed:B.isFixed});return y.useEffect(()=>{const B=Gt.current;Gt.current=Ht;const G=new Map;for(const ue of B)if(!Ht.has(ue)){if(!v.some(Ye=>Ye.id===ue))continue;const be=rn.current.get(ue);be&&(G.set(ue,{orig:be.originalRect,target:be.currentRect,isFixed:be.isFixed}),rn.current.delete(ue))}if(G.size>0){st(be=>{const Ye=new Map(be);for(const[He,ye]of G)Ye.set(He,ye);return Ye});const ue=It(()=>{st(be=>{const Ye=new Map(be);for(const He of G.keys())Ye.delete(He);return Ye})},250);return()=>clearTimeout(ue)}},[qe,v]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${je.rearrangeOverlay} ${i?"":je.light} ${a?je.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[Ee&&l.jsx("div",{className:je.hoverHighlight,style:{left:Ee.x,top:Ee.y,width:Ee.w,height:Ee.h}}),$t.map(B=>{const G=B.currentRect,ue=B.isFixed?G.y:G.y-z,be=ky,Ye=S.has(B.id);return l.jsxs("div",{"data-rearrange-section":B.id,className:`${je.sectionOutline} ${Ye?je.selected:""} ${k||a||pe.has(B.id)?je.exiting:""}`,style:{left:G.x,top:ue,width:G.width,height:G.height,borderColor:be.border,backgroundColor:be.bg,...Sn?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:He=>X(He,B.id),onDoubleClick:()=>V(B.id),children:[l.jsx("span",{className:je.sectionLabel,style:{backgroundColor:be.pill},children:B.label}),l.jsx("span",{className:`${je.sectionAnnotation} ${B.note?je.annotationVisible:""}`,children:(B.note&&ke.current.set(B.id,B.note),B.note||ke.current.get(B.id)||"")}),l.jsxs("span",{className:je.sectionDimensions,children:[Math.round(G.width)," × ",Math.round(G.height)]}),l.jsx("div",{className:je.deleteButton,onMouseDown:He=>He.stopPropagation(),onClick:()=>ot(B.id),children:"✕"}),Cy.map(He=>l.jsx("div",{className:`${je.handle} ${je[`handle${He.charAt(0).toUpperCase()}${He.slice(1)}`]}`,onMouseDown:ye=>Re(ye,B.id,He)},He))]},B.id)}),Ct.map(B=>{const G=B.currentRect,ue=B.isFixed?G.y:G.y-z,be=S.has(B.id),Ye=it(B),He=Ae(B);if(u&&!be)return null;const _t=!K.current.has(B.id);return _t&&K.current.add(B.id),l.jsxs("div",{"data-rearrange-section":B.id,className:`${je.ghostOutline} ${be?je.selected:""} ${k||a||pe.has(B.id)?je.exiting:""}`,style:{left:G.x,top:ue,width:G.width,height:G.height,...Sn?{}:{opacity:0,animation:"none",transition:"none"},..._t?{}:{animation:"none"}},onMouseDown:gt=>X(gt,B.id),onDoubleClick:()=>V(B.id),children:[l.jsx("span",{className:je.sectionLabel,style:{backgroundColor:ky.pill},children:B.label}),l.jsx("span",{className:`${je.sectionAnnotation} ${B.note?je.annotationVisible:""}`,children:(B.note&&ke.current.set(B.id,B.note),B.note||ke.current.get(B.id)||"")}),l.jsxs("span",{className:je.sectionDimensions,children:[Math.round(G.width)," × ",Math.round(G.height)]}),l.jsx("div",{className:je.deleteButton,onMouseDown:gt=>gt.stopPropagation(),onClick:()=>ot(B.id),children:"✕"}),Cy.map(gt=>l.jsx("div",{className:`${je.handle} ${je[`handle${gt.charAt(0).toUpperCase()}${gt.slice(1)}`]}`,onMouseDown:Xt=>Re(Xt,B.id,gt)},gt)),l.jsx("span",{className:je.ghostBadge,children:(()=>{const gt=Se.current.get(B.id);if(Ye&&He){const[Xt,rt]=gt==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",Xt," ",l.jsxs("span",{className:je.ghostBadgeExtra,children:["& ",rt]})]})}return`Suggested ${He?"Resize":"Move"}`})()})]},B.id)})]}),!u&&(()=>{const B=[];for(const G of Ct){const ue=$e.get(G.id);B.push({id:G.id,orig:G.originalRect,target:ue||G.currentRect,isFixed:G.isFixed,isSelected:S.has(G.id),isExiting:pe.has(G.id)})}for(const[G,ue]of $e)if(!B.some(be=>be.id===G)){const be=v.find(Ye=>Ye.id===G);be&&B.push({id:G,orig:be.originalRect,target:ue,isFixed:be.isFixed,isSelected:S.has(G)})}for(const[G,ue]of Ze)B.some(be=>be.id===G)||B.push({id:G,orig:ue.orig,target:ue.target,isFixed:ue.isFixed,isSelected:!1,isExiting:!0});return B.length===0?null:l.jsxs("svg",{className:`${je.connectorSvg} ${k||a?je.connectorExiting:""}`,children:[B.map(({id:G,orig:ue,target:be,isFixed:Ye,isSelected:He,isExiting:ye})=>{const _t=ue.x+ue.width/2,gt=(Ye?ue.y:ue.y-z)+ue.height/2,Xt=be.x+be.width/2,rt=(Ye?be.y:be.y-z)+be.height/2,Ve=Xt-_t,Vt=rt-gt,bt=Math.sqrt(Ve*Ve+Vt*Vt);if(bt<2)return null;const Nt=Math.min(1,bt/40),nt=Math.min(bt*.3,60),qt=bt>0?-Vt/bt:0,Yt=bt>0?Ve/bt:0,Dt=(_t+Xt)/2+qt*nt,En=(gt+rt)/2+Yt*nt,yt=$e.has(G),Zt=yt||He?1:.4,xn=yt||He?1:.5;return l.jsxs("g",{className:ye?je.connectorExiting:"",children:[l.jsx("path",{className:je.connectorLine,d:`M ${_t} ${gt} Q ${Dt} ${En} ${Xt} ${rt}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Zt*Nt}),l.jsx("circle",{className:je.connectorDot,cx:_t,cy:gt,r:4*Nt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:xn*Nt,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:je.connectorDot,cx:Xt,cy:rt,r:4*Nt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:xn*Nt,filter:"url(#connDotShadow)"})]},`conn-${G}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),E&&(()=>{var rt;const B=v.find(Ve=>Ve.id===E);if(!B)return null;const G=B.currentRect,ue=B.isFixed?G.y:G.y-z,be=G.x+G.width/2,Ye=ue-8,He=ue+G.height+8,ye=Ye>200,_t=He<window.innerHeight-100,gt=Math.max(160,Math.min(window.innerWidth-160,be));let Xt;return ye?Xt={left:gt,bottom:window.innerHeight-Ye}:_t?Xt={left:gt,top:He}:Xt={left:gt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(pd,{element:B.label,placeholder:"Add a note about this section",initialValue:(rt=B.note)!=null?rt:"",submitLabel:I.current?"Save":"Set",onSubmit:te,onCancel:J,onDelete:I.current?()=>{te("")}:void 0,isExiting:q,lightMode:!i,style:Xt})})(),he&&l.jsx("div",{className:je.sizeIndicator,style:{left:he.x,top:he.y},"data-feedback-toolbar":!0,children:he.text}),ge.map((B,G)=>l.jsx("div",{className:je.guideLine,style:B.axis==="x"?{position:"fixed",left:B.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:B.pos-z,width:"100vw",height:1}},`${B.axis}-${B.pos}-${G}`))]})}var km=new Set(["script","style","noscript","link","meta","br","hr"]);function T4(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||km.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:_d(c),selector:lr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const m of Array.from(c.children)){if(!(m instanceof HTMLElement)||km.has(m.tagName.toLowerCase())||m.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(m);if(p.display==="none"||p.visibility==="hidden")continue;const _=m.getBoundingClientRect();_.height<10||_.width<10||n.push({label:_d(m),selector:lr(m),top:_.top,bottom:_.bottom,left:_.left,right:_.right,area:_.width*_.height})}}}return n}function E4(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function D4(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Cm(t,n){const i=n?E4(n):T4(),a=D4(t);let c=null,u=null,d=null,m=null,p=null;for(const S of i){if(Math.abs(S.left-a.left)<2&&Math.abs(S.top-a.top)<2&&Math.abs(S.right-S.left-t.width)<2&&Math.abs(S.bottom-S.top-t.height)<2)continue;S.left<=a.left+2&&S.right>=a.right-2&&S.top<=a.top+2&&S.bottom>=a.bottom-2&&S.area>a.area*1.5&&(!p||S.area<p._area)&&(p={label:S.label,selector:S.selector,_area:S.area});const C=a.right>S.left+5&&a.left<S.right-5,k=a.bottom>S.top+5&&a.top<S.bottom-5;if(C&&S.bottom<=a.top+5){const M=Math.round(a.top-S.bottom);(!c||M<c._dist)&&(c={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(C&&S.top>=a.bottom-5){const M=Math.round(S.top-a.bottom);(!u||M<u._dist)&&(u={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(k&&S.right<=a.left+5){const M=Math.round(a.left-S.right);(!d||M<d._dist)&&(d={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(k&&S.left>=a.right-5){const M=Math.round(S.left-a.right);(!m||M<m._dist)&&(m={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}}const _=window.innerWidth,g=window.innerHeight,x=R4(t,_),v=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,w=A4(a,t,_,g,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:v(c),below:v(u),left:v(d),right:v(m),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:w}}function A4(t,n,i,a,c,u){const d={};let m=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,m=!0),c){const _=u.find(g=>g.label===c.label&&g.selector===c.selector&&Math.abs(g.area-c._area)<10);if(_){const g=[];t.left<_.left-2&&g.push("left"),t.right>_.right+2&&g.push("right"),t.top<_.top-2&&g.push("top"),t.bottom>_.bottom+2&&g.push("bottom"),g.length>0&&(d.container={label:c.label,edges:g},m=!0)}}return m?d:null}function R4(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function Ax(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function Rx(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=Ax(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function N4(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(Ax(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var Ey=15;function Dy(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<Ey&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,_)=>p.rect.x-_.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const m=Math.round(u.reduce((p,_)=>p+_.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:m,gaps:d,avgGap:d.length?Math.round(d.reduce((p,_)=>p+_,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<Ey&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,_)=>p.rect.y-_.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const m=Math.round(u.reduce((p,_)=>p+_.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:m,gaps:d,avgGap:d.length?Math.round(d.reduce((p,_)=>p+_,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function L4(t){var d;if(t.length<2)return[];const n=Dy(t.map(m=>({label:m.label,rect:m.originalRect}))),i=Dy(t.map(m=>({label:m.label,rect:m.currentRect}))),a=[],c=new Set;for(const m of n){const p=new Set(m.labels);let _=null,g=0;for(const x of i){const v=x.labels.filter(w=>p.has(w)).length;v>=2&&v>g&&(_=x,g=v)}if(_){const x=_.labels.filter(w=>p.has(w)),v=x.join(", ");if(_.type!==m.type){const w=m.type==="row"?"y":"x",S=_.type==="row"?"y":"x";a.push(`**${v}**: ${m.type} (${w}≈${m.sharedEdge}, ${m.avgGap}px gaps) → ${_.type} (${S}≈${_.sharedEdge}, ${_.avgGap}px gaps)`)}else if(Math.abs(m.sharedEdge-_.sharedEdge)>20||Math.abs(m.avgGap-_.avgGap)>5){const w=m.type==="row"?"y":"x",S=Math.abs(m.sharedEdge-_.sharedEdge)>20?` ${w}: ${m.sharedEdge} → ${_.sharedEdge}`:"",C=Math.abs(m.avgGap-_.avgGap)>5?` gaps: ${m.avgGap}px → ${_.avgGap}px`:"";a.push(`**${v}**: ${m.type} shifted —${S}${C}`)}x.forEach(w=>c.add(w))}else{const x=m.labels.join(", "),v=m.type==="row"?"y":"x";a.push(`**${x}**: ${m.type} (${v}≈${m.sharedEdge}) dissolved`),m.labels.forEach(w=>c.add(w))}}for(const m of i){if(m.labels.every(g=>c.has(g))||m.labels.filter(g=>!c.has(g)).length<2)continue;if(!n.some(g=>g.labels.filter(v=>m.labels.includes(v)).length>=2)){const g=m.type==="row"?"y":"x";a.push(`**${m.labels.join(", ")}**: new ${m.type} (${g}≈${m.sharedEdge}, ${m.avgGap}px gaps)`),m.labels.forEach(x=>c.add(x))}}const u=t.filter(m=>!c.has(m.label));if(u.length>=2){const m={};for(const p of u){const _=Math.round(p.currentRect.x/5)*5;((d=m[_])!=null?d:m[_]=[]).push(p.label)}for(const[p,_]of Object.entries(m))_.length>=2&&a.push(`**${_.join(", ")}**: shared left edge at x≈${p}`)}return a}function Nx(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=m=>{i.has(m)||m instanceof HTMLElement&&(m.hasAttribute("data-feedback-toolbar")||km.has(m.tagName.toLowerCase())||(i.add(m),n.push(m)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const m of Array.from(document.body.children))if(a(m),m.children){for(const p of Array.from(m.children))if(a(p),p.children)for(const _ of Array.from(p.children))a(_)}let d=null;for(const m of n){const p=m.getBoundingClientRect();if(p.height<50)continue;const _=getComputedStyle(m);if(_.maxWidth&&_.maxWidth!=="none"&&_.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:m,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:m,rect:p})}if(d){const{el:m,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:lr(m)}}}return{viewport:t,contentArea:null}}function B4(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:lr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function Lx(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),m=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),_=t.x+t.width/2,g=Math.abs(_-u)<20,x=t.width/a>.95,v=[];return x?v.push("`width: 100%` of container"):v.push(`left \`${d}px\` in container, right \`${m}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),g&&!x&&v.push("centered — `margin-inline: auto`"),v.join(" — ")}function Bx(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function O4(t){const n=B4(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Ay(t,n,i,a="standard"){var k,M,L,D;if(t.length===0)return"";const c=[...t].sort((E,$)=>Math.abs(E.y-$.y)<20?E.x-$.x:E.y-$.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((E,$)=>{var R;const q=((R=gi[E.type])==null?void 0:R.label)||E.type;u+=`${$+1}. **${q}** — \`${Math.round(E.width)}×${Math.round(E.height)}px\` at \`(${Math.round(E.x)}, ${Math.round(E.y)})\`
`}),u;const d=Nx(n);u+=Bx(d),u+=`### Components
`,c.forEach((E,$)=>{var pe;const q=((pe=gi[E.type])==null?void 0:pe.label)||E.type,R={x:E.x,y:E.y,width:E.width,height:E.height};u+=`${$+1}. **${q}** — \`${Math.round(E.width)}×${Math.round(E.height)}px\` at \`(${Math.round(E.x)}, ${Math.round(E.y)})\`
`;const I=Cm(R),J=Rx(I,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Te of J)u+=`   - ${Te}
`;const te=Lx(R,d);te&&(u+=`   - CSS: ${te}
`)}),u+=`
### Layout Analysis
`;const m=[];for(const E of c){const $=m.find(q=>Math.abs(q.y-E.y)<30);$?$.items.push(E):m.push({y:E.y,items:[E]})}if(m.sort((E,$)=>E.y-$.y),m.forEach((E,$)=>{E.items.sort((R,I)=>R.x-I.x);const q=E.items.map(R=>{var I;return((I=gi[R.type])==null?void 0:I.label)||R.type});if(E.items.length===1){const I=E.items[0].width>n.width*.8;u+=`- Row ${$+1} (y≈${Math.round(E.y)}): ${q[0]}${I?" — full width":""}
`}else u+=`- Row ${$+1} (y≈${Math.round(E.y)}): ${q.join(" | ")} — ${E.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let E=0;E<c.length-1;E++){const $=c[E],q=c[E+1],R=((k=gi[$.type])==null?void 0:k.label)||$.type,I=((M=gi[q.type])==null?void 0:M.label)||q.type,V=Math.round(q.y-($.y+$.height)),J=Math.round(q.x-($.x+$.width));Math.abs($.y-q.y)<30?u+=`- ${R} → ${I}: \`${J}px\` horizontal gap
`:u+=`- ${R} → ${I}: \`${V}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let E=0;E<c.length;E++)for(let $=E+1;$<c.length;$++){const q=c[E],R=c[$],I=((L=gi[q.type])==null?void 0:L.label)||q.type,V=((D=gi[R.type])==null?void 0:D.label)||R.type,J=Math.round(R.y-(q.y+q.height)),te=Math.round(R.x-(q.x+q.width));u+=`- ${I} ↔ ${V}: h=\`${te}px\` v=\`${J}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((E,$)=>{var R;const q=((R=gi[E.type])==null?void 0:R.label)||E.type;u+=`${$}. ${q} at \`(${Math.round(E.x)}, ${Math.round(E.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(E=>E.type==="navigation"),_=c.some(E=>E.type==="hero"),g=c.some(E=>E.type==="sidebar"),x=c.some(E=>E.type==="footer"),v=c.filter(E=>E.type==="card"),w=c.filter(E=>E.type==="form"),S=c.filter(E=>E.type==="table"),C=c.filter(E=>E.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),_&&(u+=`- Hero section with heading, subtext, and call-to-action
`),g&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),v.length>1?u+=`- ${v.length}-column card grid — use CSS Grid or Flexbox
`:v.length===1&&(u+=`- Card component with image + content area
`),w.length>0&&(u+=`- ${w.length} form${w.length>1?"s":""} — add proper labels, validation, and submit handling
`),S.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),C.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,g){const E=c.find($=>$.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(E.width)}px 1fr;\`
`}if(v.length>1){const E=Math.round(v[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${v.length}, ${E}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Ry(t,n="standard",i){const{sections:a}=t,c=[];for(const g of a){const x=g.originalRect,v=g.currentRect,w=Math.abs(x.x-v.x)>1||Math.abs(x.y-v.y)>1,S=Math.abs(x.width-v.width)>1||Math.abs(x.height-v.height)>1;if(!w&&!S){n==="forensic"&&c.push({section:g,posMoved:!1,sizeChanged:!1});continue}c.push({section:g,posMoved:w,sizeChanged:S})}if(c.length===0||n!=="forensic"&&c.every(g=>!g.posMoved&&!g.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,m=i?i.height:typeof window<"u"?window.innerHeight:0,p=Nx({width:d,height:m});n!=="compact"&&(u+=Bx(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const _=g=>a.map(x=>({label:x.label,selector:x.selector,rect:g==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:g,posMoved:x,sizeChanged:v}of c){const w=g.originalRect,S=g.currentRect;if(!x&&!v){u+=`- ${g.label} — unchanged at (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(n==="compact"){x&&v?u+=`- Suggested: move **${g.label}** to (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`:x?u+=`- Suggested: move **${g.label}** to (${Math.round(S.x)}, ${Math.round(S.y)})
`:u+=`- Suggested: resize **${g.label}** to ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(x&&v?u+=`- Suggested: move and resize **${g.label}**
`:x?u+=`- Suggested: move **${g.label}**
`:u+=`- Suggested: resize **${g.label}** from ${Math.round(w.width)}×${Math.round(w.height)}px to ${Math.round(S.width)}×${Math.round(S.height)}px
`,x){const k=Cm(w,_("original")),M=Cm(S,_("current")),L=v?{width:w.width,height:w.height}:void 0;u+=`  - Currently ${N4(k,{x:w.x,y:w.y},L)}
`;const D=v?{width:S.width,height:S.height}:void 0,E=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,$=D?`, ${Math.round(D.width)}×${Math.round(D.height)}px`:"",R=Rx(M,{includeLeftRight:n==="detailed"||n==="forensic"});if(R.length>0){u+=`  - Suggested position ${E}${$}: ${R[0]}
`;for(let V=1;V<R.length;V++)u+=`    ${R[V]}
`}else u+=`  - Suggested position ${E}${$}
`;const I=Lx(S,p);I&&(u+=`  - CSS: ${I}
`)}const C=O4(g.selector);if(C&&(u+=`  - ${C}
`),u+=`  - Selector: \`${g.selector}\`
`,n==="detailed"||n==="forensic"){const k=g.className?`${g.tagName}.${g.className.split(" ")[0]}`:g.tagName;k!==g.selector&&(u+=`  - Element: \`${k}\`
`),g.role&&(u+=`  - Role: \`${g.role}\`
`),n==="forensic"&&g.textSnippet&&(u+=`  - Text: "${g.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(w.x)}, y: ${Math.round(w.y)}, w: ${Math.round(w.width)}, h: ${Math.round(w.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`)}if(n!=="compact"){const g=c.filter(v=>v.posMoved).map(v=>({label:v.section.label,originalRect:v.section.originalRect,currentRect:v.section.currentRect})),x=L4(g);if(x.length>0){u+=`
### Layout Summary
`;for(const v of x)u+=`- ${v}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const g=[...a].sort((x,v)=>Math.abs(x.currentRect.y-v.currentRect.y)<20?x.currentRect.x-v.currentRect.x:x.currentRect.y-v.currentRect.y);for(const x of g){const v=x.currentRect,w=Math.abs(v.x-x.originalRect.x)>1||Math.abs(v.y-x.originalRect.y)>1||Math.abs(v.width-x.originalRect.width)>1||Math.abs(v.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(v.width)}×${Math.round(v.height)}px\` at \`(${Math.round(v.x)}, ${Math.round(v.y)})\`${w?" ← suggested":""}
`}}return u}var jm="feedback-annotations-",Ox=7;function gd(t){return`${jm}${t}`}function Yh(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(gd(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-Ox*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function zx(t,n){if(!(typeof window>"u"))try{localStorage.setItem(gd(t),JSON.stringify(n))}catch{}}function z4(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-Ox*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(jm)){const c=a.slice(jm.length),u=localStorage.getItem(a);if(u){const m=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);m.length>0&&t.set(c,m)}}}}catch{}return t}function Fl(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));zx(t,a)}var sp="agentation-design-";function $4(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${sp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function I4(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${sp}${t}`,JSON.stringify(n))}catch{}}function P4(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${sp}${t}`)}catch{}}var op="agentation-rearrange-";function H4(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${op}${t}`);return n?JSON.parse(n):null}catch{return null}}function V4(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${op}${t}`,JSON.stringify(n))}catch{}}function U4(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${op}${t}`)}catch{}}var ip="agentation-wireframe-";function W4(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${ip}${t}`);return n?JSON.parse(n):null}catch{return null}}function Ny(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${ip}${t}`,JSON.stringify(n))}catch{}}function Wu(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${ip}${t}`)}catch{}}var $x="agentation-session-";function ap(t){return`${$x}${t}`}function Y4(t){if(typeof window>"u")return null;try{return localStorage.getItem(ap(t))}catch{return null}}function Fh(t,n){if(!(typeof window>"u"))try{localStorage.setItem(ap(t),n)}catch{}}function F4(t){if(!(typeof window>"u"))try{localStorage.removeItem(ap(t))}catch{}}var Ix=`${$x}toolbar-hidden`;function X4(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(Ix)==="1"}catch{return!1}}function q4(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(Ix,"1")}catch{}}async function Xh(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function Ly(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function Hr(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function By(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function Ea(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var In={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Oy=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),zy=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],G4=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function K4(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=Oy;if(t!=null&&t.skipExact){const m=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...Oy,...m])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...zy,...t.skipPatterns]:zy,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:G4,filter:t==null?void 0:t.filter}}function Q4(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function Z4(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function J4(t,n){const i=Q4(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const m of u)if(d===m||d.includes(m)||m.includes(d))return!0}return!1}function e6(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&J4(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var Vr=null,t6=new WeakMap;function qh(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function n6(){if(Vr!==null)return Vr;if(typeof document>"u")return!1;if(document.body&&qh(document.body))return Vr=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&qh(i))return Vr=!0,!0}if(document.body){for(const n of document.body.children)if(qh(n))return Vr=!0,!0}return Vr=!1,!1}var Xl={map:t6};function s6(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function o6(t){const n=s6(t);return n?t[n]:null}function Za(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function i6(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===In.HostComponent||n===In.HostText||n===In.HostHoistable||n===In.HostSingleton||n===In.Fragment||n===In.Mode||n===In.Profiler||n===In.DehydratedFragment||n===In.HostRoot||n===In.HostPortal||n===In.ScopeComponent||n===In.OffscreenComponent||n===In.LegacyHiddenComponent||n===In.CacheComponent||n===In.TracingMarkerComponent||n===In.Throw||n===In.ViewTransitionComponent||n===In.ActivityComponent)return null;if(n===In.ForwardRef){const u=a;if(u!=null&&u.render){const d=Za(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:Za(i)}if(n===In.MemoComponent||n===In.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=Za(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:Za(i)}if(n===In.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===In.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===In.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?Za(u._result):null}return n===In.SuspenseComponent||n===In.SuspenseListComponent?null:n===In.IncompleteClassComponent||n===In.IncompleteFunctionComponent||n===In.FunctionComponent||n===In.ClassComponent||n===In.IndeterminateComponent?Za(i):null}function a6(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function r6(t,n){const i=K4(n),a=i.mode==="all";if(a){const p=Xl.map.get(t);if(p!==void 0)return p}if(!n6()){const p={path:null,components:[]};return a&&Xl.map.set(t,p),p}const c=i.mode==="smart"?Z4(t):void 0,u=[];try{let p=o6(t),_=0;for(;p&&_<i.maxDepth&&u.length<i.maxComponents;){const g=i6(p);g&&!a6(g)&&e6(g,_,i,c)&&u.push(g),p=p.return,_++}}catch{const p={path:null,components:[]};return a&&Xl.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&Xl.map.set(t,p),p}const m={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&Xl.map.set(t,m),m}var ql={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function l6(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function uc(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function c6(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:uc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:uc(i._debugOwner)};i=i.return,a++}return null}function u6(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const m=c[d];if(m&&typeof m=="object"&&"fileName"in m)return{source:m,componentName:uc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const m=d.__source;if(m.fileName&&m.lineNumber)return{source:{fileName:m.fileName,lineNumber:m.lineNumber,columnNumber:m.columnNumber},componentName:uc(n)}}}n=n.return,i++}return null}var Yu=new Map;function d6(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===ql.FunctionComponent||n===ql.IndeterminateComponent)&&typeof i=="function")return i;if(n===ql.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===ql.MemoComponent||n===ql.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function f6(){const t=mv,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function h6(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const m=a.exec(d)||c.exec(d);if(m)return{fileName:m[1],line:parseInt(m[2],10),column:parseInt(m[3],10)}}return null}function m6(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function p6(t){const n=d6(t);if(!n)return null;if(Yu.has(n))return Yu.get(n);const i=f6();if(!i)return Yu.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const m=h6(d.stack);m&&(c={fileName:m6(m.fileName),lineNumber:m.line,columnNumber:m.column,componentName:uc(t)||void 0})}}}finally{i.set(a)}return Yu.set(n,c),c}function _6(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=p6(i);if(c)return c;i=i.return,a++}return null}function Mm(t){const n=l6(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=c6(n);if(i||(i=u6(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=_6(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function g6(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function y6(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=Mm(i);if(c.found)return c;i=i.parentElement,a++}return Mm(t)}var x6=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,b6={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=x6}var Ie=b6,Gl=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function $y(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var v6=`@keyframes styles-module__markerIn___x4G8D {
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
}`,w6={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=v6}var Es=w6;function Iy({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:m,isDeleting:p,isEditingAny:_,renumberFrom:g,markerClickBehavior:x,tooltipStyle:v,onHoverEnter:w,onHoverLeave:S,onClick:C,onContextMenu:k}){const M=(m||p)&&!_,L=M&&x==="delete",D=t.isMultiSelect,E=D?"var(--agentation-color-green)":"var(--agentation-color-accent)",$=c?Es.exit:u?Es.clearing:d?"":Es.enter,q=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${Es.marker} ${D?Es.multiSelect:""} ${$} ${L?Es.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:L?void 0:E,animationDelay:q},onMouseEnter:()=>w(t),onMouseLeave:S,onClick:R=>{R.stopPropagation(),c||C(t)},onContextMenu:k?R=>{x==="delete"&&(R.preventDefault(),R.stopPropagation(),c||k(t))}:void 0,children:[M?L?l.jsx(kx,{size:D?18:16}):l.jsx(Bw,{size:16}):l.jsx("span",{className:g!==null&&n>=g?Es.renumber:void 0,children:n+1}),m&&!_&&l.jsxs("div",{className:`${Es.markerTooltip} ${Es.enter}`,style:v,children:[l.jsxs("span",{className:Es.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:Es.markerNote,children:t.comment})]})]})}function S6({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${Es.marker} ${Es.pending} ${i?Es.multiSelect:""} ${a?Es.exit:Es.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(Sw,{size:12})})}function Py({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${Es.marker} ${n?Es.fixed:""} ${Es.hovered} ${i?Es.multiSelect:""} ${Es.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(kx,{size:i?12:10})})}var k6=`.styles-module__switchContainer___Ka-AB {
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
}`,C6={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=k6}var Gh=C6,Kh=({className:t="",...n})=>l.jsxs("div",{className:`${Gh.switchContainer} ${t}`,children:[l.jsx("input",{className:Gh.switchInput,type:"checkbox",...n}),l.jsx("div",{className:Gh.switchThumb})]}),j6=`.styles-module__checkboxContainer___joqZk {
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
}`,M6={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=j6}var Fu=M6,T6=({className:t="",...n})=>l.jsxs("div",{className:`${Fu.checkboxContainer} ${t}`,children:[l.jsx("input",{className:Fu.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:Fu.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:Fu.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),E6=`.styles-module__container___w8eAF {
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
}`,D6={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=E6}var Hy=D6,Vy=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=y.useId();return l.jsxs("div",{className:`${Hy.container} ${t}`,...u,children:[l.jsx(T6,{id:d,onChange:c,checked:a}),l.jsx("label",{className:Hy.label,htmlFor:d,children:n}),i&&l.jsx(sr,{content:i})]})},A6=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,R6={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=A6}var xt=R6;function N6({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:m,toolbarNearBottom:p,settingsPage:_,onSettingsPageChange:g,onHideToolbar:x}){var v;return l.jsx("div",{className:`${xt.settingsPanel} ${m?xt.enter:xt.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:xt.settingsPanelContainer,children:[l.jsxs("div",{className:`${xt.settingsPage} ${_==="automations"?xt.slideLeft:""}`,children:[l.jsxs("div",{className:xt.settingsHeader,children:[l.jsx("a",{className:xt.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:xt.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:xt.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:xt.themeIconWrapper,children:l.jsx("span",{className:xt.themeIcon,children:i?l.jsx(Nw,{size:20}):l.jsx(Lw,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:xt.divider}),l.jsxs("div",{className:xt.settingsSection,children:[l.jsxs("div",{className:xt.settingsRow,children:[l.jsxs("div",{className:xt.settingsLabel,children:["Output Detail",l.jsx(sr,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:xt.cycleButton,onClick:()=>{const S=(Gl.findIndex(C=>C.value===t.outputDetail)+1)%Gl.length;n({outputDetail:Gl[S].value})},children:[l.jsx("span",{className:xt.cycleButtonText,children:(v=Gl.find(w=>w.value===t.outputDetail))==null?void 0:v.label},t.outputDetail),l.jsx("span",{className:xt.cycleDots,children:Gl.map(w=>l.jsx("span",{className:`${xt.cycleDot} ${t.outputDetail===w.value?xt.active:""}`},w.value))})]})]}),l.jsxs("div",{className:`${xt.settingsRow} ${xt.settingsRowMarginTop} ${c?"":xt.settingsRowDisabled}`,children:[l.jsxs("div",{className:xt.settingsLabel,children:["React Components",l.jsx(sr,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(Kh,{checked:c&&t.reactEnabled,onChange:w=>n({reactEnabled:w.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${xt.settingsRow} ${xt.settingsRowMarginTop}`,children:[l.jsxs("div",{className:xt.settingsLabel,children:["Hide Until Restart",l.jsx(sr,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(Kh,{checked:!1,onChange:w=>{w.target.checked&&x()}})]})]}),l.jsx("div",{className:xt.divider}),l.jsxs("div",{className:xt.settingsSection,children:[l.jsx("div",{className:`${xt.settingsLabel} ${xt.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:xt.colorOptions,children:oc.map(w=>l.jsx("button",{className:`${xt.colorOption} ${t.annotationColorId===w.id?xt.selected:""}`,style:{"--swatch":w.srgb,"--swatch-p3":w.p3},onClick:()=>n({annotationColorId:w.id}),title:w.label,type:"button"},w.id))})]}),l.jsx("div",{className:xt.divider}),l.jsxs("div",{className:xt.settingsSection,children:[l.jsx(Vy,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:w=>n({autoClearAfterCopy:w.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(Vy,{className:xt.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:w=>n({blockInteractions:w.target.checked})})]}),l.jsx("div",{className:xt.divider}),l.jsxs("button",{className:xt.settingsNavLink,onClick:()=>g("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:xt.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${xt.mcpNavIndicator} ${xt[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${xt.settingsPage} ${xt.automationsPage} ${_==="automations"?xt.slideIn:""}`,children:[l.jsxs("button",{className:xt.settingsBackButton,onClick:()=>g("main"),children:[l.jsx(zw,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:xt.divider}),l.jsxs("div",{className:xt.settingsSection,children:[l.jsxs("div",{className:xt.settingsRow,children:[l.jsxs("span",{className:xt.automationHeader,children:["MCP Connection",l.jsx(sr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${xt.mcpStatusDot} ${xt[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:xt.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:xt.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:xt.divider}),l.jsxs("div",{className:`${xt.settingsSection} ${xt.settingsSectionGrow}`,children:[l.jsxs("div",{className:xt.settingsRow,children:[l.jsxs("span",{className:xt.automationHeader,children:["Webhooks",l.jsx(sr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:xt.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${xt.autoSendLabel} ${t.webhooksEnabled?xt.active:""} ${t.webhookUrl?"":xt.disabled}`,children:"Auto-Send"}),l.jsx(Kh,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:w=>n({webhooksEnabled:w.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:xt.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:xt.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:w=>w.stopPropagation(),onChange:w=>n({webhookUrl:w.target.value})})]})]})]})})}function Qh(t,n="filtered"){const{name:i,path:a}=qr(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=r6(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var Uy=!1,Zh={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},Ei=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},oc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],L6=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...oc.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${oc.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${oc.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(t)};L6();function Ja(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function Jh(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function er(t){return t.status!=="resolved"&&t.status!=="dismissed"}function Xu(t){const n=Mm(t),i=n.found?n:y6(t);if(i.found&&i.source)return g6(i.source,"path")}function B6({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:m,onSubmit:p,copyToClipboard:_=!0,endpoint:g,sessionId:x,onSessionCreated:v,webhookUrl:w,className:S}={}){var jc,Mc,rl,ll,ia,aa,Tc;const[C,k]=y.useState(!1),[M,L]=y.useState([]),[D,E]=y.useState(!0),[$,q]=y.useState(()=>X4()),[R,I]=y.useState(!1),V=y.useRef(null);y.useEffect(()=>{const T=F=>{const W=V.current;W&&W.contains(F.target)&&F.stopPropagation()},O=["mousedown","click","pointerdown"];return O.forEach(F=>document.body.addEventListener(F,T)),()=>{O.forEach(F=>document.body.removeEventListener(F,T))}},[]);const[J,te]=y.useState(!1),[pe,Te]=y.useState(!1),[ke,Ee]=y.useState(null),[P,he]=y.useState({x:0,y:0}),[Z,ge]=y.useState(null),[Be,z]=y.useState(!1),[oe,H]=y.useState("idle"),[K,Se]=y.useState(!1),[$e,Xe]=y.useState(!1),[Ze,st]=y.useState(null),[Gt,rn]=y.useState(null),[Ot,yn]=y.useState([]),[an,Sn]=y.useState(null),[hn,mn]=y.useState(null),[X,Re]=y.useState(null),[ot,Je]=y.useState(null),[it,Ae]=y.useState([]),[ut,Ct]=y.useState(0),[$t,Ht]=y.useState(!1),[qe,B]=y.useState(!1),[G,ue]=y.useState(!1),[be,Ye]=y.useState(!1),[He,ye]=y.useState(!1),[_t,gt]=y.useState("main"),[Xt,rt]=y.useState(!1),[Ve,Vt]=y.useState(!1),[bt,Nt]=y.useState(!1),[nt,qt]=y.useState([]),[Yt,Dt]=y.useState(null),En=y.useRef(!1),[yt,Zt]=y.useState(!1),[xn,is]=y.useState(!1),[Hn,Ds]=y.useState(1),[xs,Vn]=y.useState("new-page"),[dn,Ln]=y.useState(""),[Ut,Xn]=y.useState(!1),[Pe,_s]=y.useState(null),fo=y.useRef(!1),wo=y.useRef({rearrange:null,placements:[]}),Us=y.useRef({rearrange:null,placements:[]}),[to,Ao]=y.useState(0),[no,so]=y.useState(0),[ho,Ws]=y.useState(0),[qn,Ro]=y.useState(0),mo=y.useRef(new Set),Bn=y.useRef(new Set),ls=y.useRef(null),Xs=y.useRef(),No=Ve&&C&&!bt&&yt;y.useEffect(()=>{if(No){is(!1);const T=Wr(()=>{is(!0)});return()=>cancelAnimationFrame(T)}else is(!1)},[No]);const oo=y.useRef(new Map),io=y.useRef(new Map),qs=y.useRef(),[gs,As]=y.useState(!1),[Cn,ri]=y.useState([]),xi=y.useRef(Cn);xi.current=Cn;const[Lo,bi]=y.useState(null),Ys=y.useRef(null);y.useRef(!1),y.useRef([]),y.useRef(0),y.useRef(null),y.useRef(null),y.useRef(1);const[Xo,bs]=y.useState(!1),se=y.useRef(null),[ae,Me]=y.useState([]),Ce=y.useRef({cmd:!1,shift:!1}),Ge=()=>{rt(!0)},kt=()=>{rt(!1)},ct=()=>{Xo||(se.current=It(()=>bs(!0),850))},N=()=>{se.current&&(clearTimeout(se.current),se.current=null),bs(!1),kt()};y.useEffect(()=>()=>{se.current&&clearTimeout(se.current)},[]);const[U,_e]=y.useState(()=>{var T;try{const O=JSON.parse((T=localStorage.getItem("feedback-toolbar-settings"))!=null?T:"");return{...Zh,...O,annotationColorId:oc.find(F=>F.id===O.annotationColorId)?O.annotationColorId:Zh.annotationColorId}}catch{return Zh}}),[xe,Oe]=y.useState(!0),[Ke,Et]=y.useState(!1),Kt=()=>{var T;(T=V.current)==null||T.classList.add(Ie.disableTransitions),Oe(O=>!O),Wr(()=>{var O;(O=V.current)==null||O.classList.remove(Ie.disableTransitions)})},ze=!1,We="off",[tt,wt]=y.useState(x!=null?x:null),zt=y.useRef(!1),[Qe,At]=y.useState(g?"connecting":"disconnected"),[ht,Jt]=y.useState(null),[Dn,pn]=y.useState(!1),[Tt,un]=y.useState(null),ts=y.useRef(!1),[Un,as]=y.useState(new Set),[js,po]=y.useState(new Set),[On,en]=y.useState(!1),[zn,$s]=y.useState(!1),[ao,li]=y.useState(!1),_o=y.useRef(null),vs=y.useRef(null),Bo=y.useRef(null),Oo=y.useRef(null),An=y.useRef(!1),ys=y.useRef(0),Gs=y.useRef(null),ro=y.useRef(null),So=8,sa=50,za=y.useRef(null),$a=y.useRef(null),vi=y.useRef(null),le=typeof window<"u"?window.location.pathname:"/";y.useEffect(()=>{if(be)ye(!0);else{rt(!1),gt("main");const T=It(()=>ye(!1),0);return()=>clearTimeout(T)}},[be]);const lt=C&&D&&!Ve;y.useEffect(()=>{if(lt){Te(!1),te(!0),as(new Set);const T=It(()=>{as(O=>{const F=new Set(O);return M.forEach(W=>F.add(W.id)),F})},350);return()=>clearTimeout(T)}else if(J){Te(!0);const T=It(()=>{te(!1),Te(!1)},250);return()=>clearTimeout(T)}},[lt]),y.useEffect(()=>{B(!0),Ct(window.scrollY);const T=Yh(le);L(T.filter(er)),Uy||(Et(!0),Uy=!0,It(()=>Et(!1),750));try{const O=localStorage.getItem("feedback-toolbar-theme");O!==null&&Oe(O==="dark")}catch{}try{const O=localStorage.getItem("feedback-toolbar-position");if(O){const F=JSON.parse(O);typeof F.x=="number"&&typeof F.y=="number"&&Jt(F)}}catch{}},[le]),y.useEffect(()=>{qe&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(U))},[U,qe]),y.useEffect(()=>{qe&&localStorage.setItem("feedback-toolbar-theme",xe?"dark":"light")},[xe,qe]);const Rt=y.useRef(!1);y.useEffect(()=>{const T=Rt.current;Rt.current=Dn,T&&!Dn&&ht&&qe&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(ht))},[Dn,ht,qe]),y.useEffect(()=>{if(!g||!qe||zt.current)return;zt.current=!0,At("connecting"),(async()=>{try{const O=Y4(le),F=x||O;let W=!1;if(F)try{const ee=await Ly(g,F);wt(ee.id),At("connected"),Fh(le,ee.id),W=!0;const de=Yh(le),Ue=new Set(ee.annotations.map(et=>et.id)),Fe=de.filter(et=>!Ue.has(et.id));if(Fe.length>0){const mt=`${typeof window<"u"?window.location.origin:""}${le}`,tn=(await Promise.allSettled(Fe.map(pt=>Hr(g,ee.id,{...pt,sessionId:ee.id,url:mt})))).map((pt,at)=>pt.status==="fulfilled"?pt.value:(console.warn("[Agentation] Failed to sync annotation:",pt.reason),Fe[at])),nn=[...ee.annotations,...tn];L(nn.filter(er)),Fl(le,nn.filter(er),ee.id)}else L(ee.annotations.filter(er)),Fl(le,ee.annotations.filter(er),ee.id)}catch(ee){console.warn("[Agentation] Could not join session, creating new:",ee),F4(le)}if(!W){const ee=typeof window<"u"?window.location.href:"/",de=await Xh(g,ee);wt(de.id),At("connected"),Fh(le,de.id),v==null||v(de.id);const Ue=z4(),Fe=typeof window<"u"?window.location.origin:"",et=[];for(const[mt,Mt]of Ue){const tn=Mt.filter(at=>!at._syncedTo);if(tn.length===0)continue;const nn=`${Fe}${mt}`,pt=mt===le;et.push((async()=>{try{const at=pt?de:await Xh(g,nn),ds=(await Promise.allSettled(tn.map(jn=>Hr(g,at.id,{...jn,sessionId:at.id,url:nn})))).map((jn,Pn)=>jn.status==="fulfilled"?jn.value:(console.warn("[Agentation] Failed to sync annotation:",jn.reason),tn[Pn])).filter(er);if(Fl(mt,ds,at.id),pt){const jn=new Set(tn.map(Pn=>Pn.id));L(Pn=>{const Ft=Pn.filter(Qt=>!jn.has(Qt.id));return[...ds,...Ft]})}}catch(at){console.warn(`[Agentation] Failed to sync annotations for ${mt}:`,at)}})())}await Promise.allSettled(et)}}catch(O){At("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",O)}})()},[g,x,qe,v,le]),y.useEffect(()=>{if(!g||!qe)return;const T=async()=>{try{(await fetch(`${g}/health`)).ok?At("connected"):At("disconnected")}catch{At("disconnected")}};T();const O=Pw(T,1e4);return()=>clearInterval(O)},[g,qe]),y.useEffect(()=>{if(!g||!qe||!tt)return;const T=new EventSource(`${g}/sessions/${tt}/events`),O=["resolved","dismissed"],F=W=>{var ee;try{const de=JSON.parse(W.data);if(O.includes((ee=de.payload)==null?void 0:ee.status)){const Ue=de.payload.id,Fe=de.payload.kind;if(Fe==="placement"){for(const[et,mt]of oo.current)if(mt===Ue){oo.current.delete(et),qt(Mt=>Mt.filter(tn=>tn.id!==et));break}}else if(Fe==="rearrange"){for(const[et,mt]of io.current)if(mt===Ue){io.current.delete(et),_s(Mt=>{if(!Mt)return null;const tn=Mt.sections.filter(nn=>nn.id!==et);return tn.length===0?null:{...Mt,sections:tn}});break}}else po(et=>new Set(et).add(Ue)),It(()=>{L(et=>et.filter(mt=>mt.id!==Ue)),po(et=>{const mt=new Set(et);return mt.delete(Ue),mt})},150)}}catch{}};return T.addEventListener("annotation.updated",F),()=>{T.removeEventListener("annotation.updated",F),T.close()}},[g,qe,tt]),y.useEffect(()=>{if(!g||!qe)return;const T=ro.current==="disconnected",O=Qe==="connected";ro.current=Qe,T&&O&&(async()=>{try{const W=Yh(le);if(W.length===0)return;const de=`${typeof window<"u"?window.location.origin:""}${le}`;let Ue=tt,Fe=[];if(Ue)try{Fe=(await Ly(g,Ue)).annotations}catch{Ue=null}Ue||(Ue=(await Xh(g,de)).id,wt(Ue),Fh(le,Ue));const et=new Set(Fe.map(Mt=>Mt.id)),mt=W.filter(Mt=>!et.has(Mt.id));if(mt.length>0){const tn=(await Promise.allSettled(mt.map(at=>Hr(g,Ue,{...at,sessionId:Ue,url:de})))).map((at,cs)=>at.status==="fulfilled"?at.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",at.reason),mt[cs])),pt=[...Fe,...tn].filter(er);L(pt),Fl(le,pt,Ue)}}catch(W){console.warn("[Agentation] Failed to sync on reconnect:",W)}})()},[Qe,g,qe,tt,le]);const dt=y.useCallback(()=>{R||(I(!0),Ye(!1),k(!1),It(()=>{q4(!0),q(!0),I(!1)},400))},[R]);y.useEffect(()=>{if(!i||!qe||!t||t.length===0||M.length>0)return;const T=[];return T.push(It(()=>{k(!0)},n-200)),t.forEach((O,F)=>{const W=n+F*300;T.push(It(()=>{const ee=document.querySelector(O.selector);if(!ee)return;const de=ee.getBoundingClientRect(),{name:Ue,path:Fe}=qr(ee),et={id:`demo-${Date.now()}-${F}`,x:(de.left+de.width/2)/window.innerWidth*100,y:de.top+de.height/2+window.scrollY,comment:O.comment,element:Ue,elementPath:Fe,timestamp:Date.now(),selectedText:O.selectedText,boundingBox:{x:de.left,y:de.top+window.scrollY,width:de.width,height:de.height},nearbyText:Wl(ee),cssClasses:Yl(ee)};L(mt=>[...mt,et])},W))}),()=>{T.forEach(clearTimeout)}},[i,qe,t,n]),y.useEffect(()=>{const T=()=>{Ct(window.scrollY),Ht(!0),vi.current&&clearTimeout(vi.current),vi.current=It(()=>{Ht(!1)},150)};return window.addEventListener("scroll",T,{passive:!0}),()=>{window.removeEventListener("scroll",T),vi.current&&clearTimeout(vi.current)}},[]),y.useEffect(()=>{qe&&M.length>0?tt?Fl(le,M,tt):zx(le,M):qe&&M.length===0&&localStorage.removeItem(gd(le))},[M,le,qe,tt]),y.useEffect(()=>{if(qe&&!En.current){En.current=!0;const T=$4(le);T.length>0&&qt(T)}},[qe,le]),y.useEffect(()=>{qe&&En.current&&!yt&&(nt.length>0?I4(le,nt):P4(le))},[nt,le,qe,yt]),y.useEffect(()=>{if(qe&&!fo.current){fo.current=!0;const T=H4(le);if(T){const O={...T,sections:T.sections.map(F=>{var W;return{...F,currentRect:(W=F.currentRect)!=null?W:{...F.originalRect}}})};_s(O)}}},[qe,le]),y.useEffect(()=>{qe&&fo.current&&!yt&&(Pe?V4(le,Pe):U4(le))},[Pe,le,qe,yt]);const Pt=y.useRef(!1);y.useEffect(()=>{if(qe&&!Pt.current){Pt.current=!0;const T=W4(le);T&&(Us.current={rearrange:T.rearrange,placements:T.placements||[]},T.purpose&&Ln(T.purpose))}},[qe,le]),y.useEffect(()=>{var O,F,W,ee,de;if(!qe||!Pt.current)return;const T=Us.current;yt?((F=(O=Pe==null?void 0:Pe.sections)==null?void 0:O.length)!=null?F:0)>0||nt.length>0||dn?Ny(le,{rearrange:Pe,placements:nt,purpose:dn}):Wu(le):((de=(ee=(W=T.rearrange)==null?void 0:W.sections)==null?void 0:ee.length)!=null?de:0)>0||T.placements.length>0||dn?Ny(le,{rearrange:T.rearrange,placements:T.placements,purpose:dn}):Wu(le)},[Pe,nt,dn,yt,le,qe]),y.useEffect(()=>{Ve&&!Pe&&_s({sections:[],originalOrder:[],detectedAt:Date.now()})},[Ve,Pe]),y.useEffect(()=>{if(!g||!tt)return;const T=oo.current,O=new Set(nt.map(F=>F.id));for(const F of nt){if(T.has(F.id))continue;T.set(F.id,"");const W=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:le;Hr(g,tt,{id:F.id,x:F.x/window.innerWidth*100,y:F.y,comment:`Place ${F.type} at (${Math.round(F.x)}, ${Math.round(F.y)}), ${F.width}×${F.height}px${F.text?` — "${F.text}"`:""}`,element:`[design:${F.type}]`,elementPath:"[placement]",timestamp:F.timestamp,url:W,intent:"change",severity:"important",kind:"placement",placement:{componentType:F.type,width:F.width,height:F.height,scrollY:F.scrollY,text:F.text}}).then(ee=>{T.has(F.id)&&T.set(F.id,ee.id)}).catch(ee=>{console.warn("[Agentation] Failed to sync placement annotation:",ee),T.delete(F.id)})}for(const[F,W]of T)O.has(F)||(T.delete(F),W&&Ea(g,W).catch(()=>{}))},[nt,g,tt,le]),y.useEffect(()=>{if(!(!g||!tt))return qs.current&&clearTimeout(qs.current),qs.current=It(()=>{const T=io.current;if(!Pe||Pe.sections.length===0){for(const[,W]of T)W&&Ea(g,W).catch(()=>{});T.clear();return}const O=new Set(Pe.sections.map(W=>W.id)),F=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:le;for(const W of Pe.sections){const ee=W.originalRect,de=W.currentRect;if(!(Math.abs(ee.x-de.x)>1||Math.abs(ee.y-de.y)>1||Math.abs(ee.width-de.width)>1||Math.abs(ee.height-de.height)>1)){const et=T.get(W.id);et&&(T.delete(W.id),Ea(g,et).catch(()=>{}));continue}const Fe=T.get(W.id);Fe?By(g,Fe,{comment:`Move ${W.label} section (${W.tagName}) — from (${Math.round(ee.x)},${Math.round(ee.y)}) ${Math.round(ee.width)}×${Math.round(ee.height)} to (${Math.round(de.x)},${Math.round(de.y)}) ${Math.round(de.width)}×${Math.round(de.height)}`}).catch(et=>{console.warn("[Agentation] Failed to update rearrange annotation:",et)}):(T.set(W.id,""),Hr(g,tt,{id:W.id,x:de.x/window.innerWidth*100,y:de.y,comment:`Move ${W.label} section (${W.tagName}) — from (${Math.round(ee.x)},${Math.round(ee.y)}) ${Math.round(ee.width)}×${Math.round(ee.height)} to (${Math.round(de.x)},${Math.round(de.y)}) ${Math.round(de.width)}×${Math.round(de.height)}`,element:W.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:F,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:W.selector,label:W.label,tagName:W.tagName,originalRect:ee,currentRect:de}}).then(et=>{T.has(W.id)&&T.set(W.id,et.id)}).catch(et=>{console.warn("[Agentation] Failed to sync rearrange annotation:",et),T.delete(W.id)}))}for(const[W,ee]of T)O.has(W)||(T.delete(W),ee&&Ea(g,ee).catch(()=>{}))},300),()=>{qs.current&&clearTimeout(qs.current)}},[Pe,g,tt,le]);const Lt=y.useRef(new Map);y.useLayoutEffect(()=>{var F;const T=(F=Pe==null?void 0:Pe.sections)!=null?F:[],O=new Set;if((Ve||bt)&&C)for(const W of T){O.add(W.id);try{const ee=document.querySelector(W.selector);if(!ee)continue;if(!Lt.current.has(W.id)){const de={transform:ee.style.transform,transformOrigin:ee.style.transformOrigin,opacity:ee.style.opacity,position:ee.style.position,zIndex:ee.style.zIndex,display:ee.style.display},Ue=[];let Fe=ee.parentElement;for(;Fe&&Fe!==document.body;){const mt=getComputedStyle(Fe);(mt.overflow!=="visible"||mt.overflowX!=="visible"||mt.overflowY!=="visible")&&(Ue.push({el:Fe,overflow:Fe.style.overflow}),Fe.style.overflow="visible"),Fe=Fe.parentElement}getComputedStyle(ee).display==="inline"&&(ee.style.display="inline-block"),Lt.current.set(W.id,{el:ee,origStyles:de,ancestors:Ue}),ee.style.transformOrigin="top left",ee.style.zIndex="9999"}}catch{}}for(const[W,ee]of Lt.current)if(!O.has(W)){const{el:de,origStyles:Ue,ancestors:Fe}=ee;de.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",de.style.transform=Ue.transform,de.style.transformOrigin=Ue.transformOrigin,de.style.opacity=Ue.opacity,de.style.position=Ue.position,de.style.zIndex=Ue.zIndex,Lt.current.delete(W),It(()=>{de.style.transition="",de.style.display=Ue.display;for(const et of Fe)et.el.style.overflow=et.overflow},450)}},[Pe,Ve,bt,C]),y.useEffect(()=>()=>{for(const[,T]of Lt.current){const{el:O,origStyles:F,ancestors:W}=T;O.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",O.style.transform=F.transform,O.style.transformOrigin=F.transformOrigin,O.style.opacity=F.opacity,O.style.position=F.position,O.style.zIndex=F.zIndex,It(()=>{O.style.transition="",O.style.display=F.display;for(const ee of W)ee.el.style.overflow=ee.overflow},450)}Lt.current.clear()},[]);const Mn=y.useCallback(()=>{Nt(!0),Vt(!1),Dt(null),clearTimeout(Xs.current),Xs.current=It(()=>{Nt(!1)},300)},[]),bn=y.useCallback(()=>{Ve&&(Nt(!0),Vt(!1),Dt(null),clearTimeout(Xs.current),Xs.current=It(()=>{Nt(!1)},300)),k(!1)},[Ve]),ws=y.useCallback(()=>{G||(Vw(),ue(!0))},[G]),Is=y.useCallback(()=>{G&&(xy(),ue(!1))},[G]),wi=y.useCallback(()=>{G?Is():ws()},[G,ws,Is]),cr=y.useCallback(()=>{if(ae.length===0)return;const T=ae[0],O=T.element,F=ae.length>1,W=ae.map(ee=>ee.element.getBoundingClientRect());if(F){const ee={left:Math.min(...W.map(at=>at.left)),top:Math.min(...W.map(at=>at.top)),right:Math.max(...W.map(at=>at.right)),bottom:Math.max(...W.map(at=>at.bottom))},de=ae.slice(0,5).map(at=>at.name).join(", "),Ue=ae.length>5?` +${ae.length-5} more`:"",Fe=W.map(at=>({x:at.left,y:at.top+window.scrollY,width:at.width,height:at.height})),mt=ae[ae.length-1].element,Mt=W[W.length-1],tn=Mt.left+Mt.width/2,nn=Mt.top+Mt.height/2,pt=Jh(mt);ge({x:tn/window.innerWidth*100,y:pt?nn:nn+window.scrollY,clientY:nn,element:`${ae.length} elements: ${de}${Ue}`,elementPath:"multi-select",boundingBox:{x:ee.left,y:ee.top+window.scrollY,width:ee.right-ee.left,height:ee.bottom-ee.top},isMultiSelect:!0,isFixed:pt,elementBoundingBoxes:Fe,multiSelectElements:ae.map(at=>at.element),targetElement:mt,fullPath:Hu(O),accessibility:Pu(O),computedStyles:Iu(O),computedStylesObj:$u(O),nearbyElements:zu(O),cssClasses:Yl(O),nearbyText:Wl(O),sourceFile:Xu(O)})}else{const ee=W[0],de=Jh(O);ge({x:ee.left/window.innerWidth*100,y:de?ee.top:ee.top+window.scrollY,clientY:ee.top,element:T.name,elementPath:T.path,boundingBox:{x:ee.left,y:de?ee.top:ee.top+window.scrollY,width:ee.width,height:ee.height},isFixed:de,fullPath:Hu(O),accessibility:Pu(O),computedStyles:Iu(O),computedStylesObj:$u(O),nearbyElements:zu(O),cssClasses:Yl(O),nearbyText:Wl(O),reactComponents:T.reactComponents,sourceFile:Xu(O)})}Me([]),Ee(null)},[ae]);y.useEffect(()=>{C||(ge(null),Re(null),Je(null),Ae([]),Ee(null),Ye(!1),Me([]),Ce.current={cmd:!1,shift:!1},G&&Is())},[C,G,Is]),y.useEffect(()=>()=>{xy()},[]),y.useEffect(()=>{if(!C)return;const T=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),O=":not([data-agentation-root]):not([data-agentation-root] *)",F=document.createElement("style");return F.id="feedback-cursor-styles",F.textContent=`
      body ${O} {
        cursor: crosshair !important;
      }

      body :is(${T})${O} {
        cursor: text !important;
      }
    `,document.head.appendChild(F),()=>{const W=document.getElementById("feedback-cursor-styles");W&&W.remove()}},[C]),y.useEffect(()=>{if(Lo!==null&&C)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Lo,C]),y.useEffect(()=>{if(!C||Z||gs||Ve)return;const T=O=>{const F=O.composedPath()[0]||O.target;if(yo(F,"[data-feedback-toolbar]")){Ee(null);return}const W=Ja(O.clientX,O.clientY);if(!W||yo(W,"[data-feedback-toolbar]")){Ee(null);return}const{name:ee,elementName:de,path:Ue,reactComponents:Fe}=Qh(W,We),et=W.getBoundingClientRect();Ee({element:ee,elementName:de,elementPath:Ue,rect:et,reactComponents:Fe}),he({x:O.clientX,y:O.clientY})};return document.addEventListener("mousemove",T),()=>document.removeEventListener("mousemove",T)},[C,Z,gs,Ve,We,Cn]);const qo=y.useCallback(T=>{var O;if(Re(T),st(null),rn(null),yn([]),(O=T.elementBoundingBoxes)!=null&&O.length){const F=[];for(const W of T.elementBoundingBoxes){const ee=W.x+W.width/2,de=W.y+W.height/2-window.scrollY,Ue=Ja(ee,de);Ue&&F.push(Ue)}Ae(F),Je(null)}else if(T.boundingBox){const F=T.boundingBox,W=F.x+F.width/2,ee=T.isFixed?F.y+F.height/2:F.y+F.height/2-window.scrollY,de=Ja(W,ee);if(de){const Ue=de.getBoundingClientRect(),Fe=Ue.width/F.width,et=Ue.height/F.height;Fe<.5||et<.5?Je(null):Je(de)}else Je(null);Ae([])}else Je(null),Ae([])},[]);y.useEffect(()=>{if(!C||gs||Ve)return;const T=O=>{var us,ds;if(An.current){An.current=!1;return}const F=O.composedPath()[0]||O.target;if(yo(F,"[data-feedback-toolbar]")||yo(F,"[data-annotation-popup]")||yo(F,"[data-annotation-marker]"))return;if(O.metaKey&&O.shiftKey&&!Z&&!X){O.preventDefault(),O.stopPropagation();const jn=Ja(O.clientX,O.clientY);if(!jn)return;const Pn=jn.getBoundingClientRect(),{name:Ft,path:Qt,reactComponents:fs}=Qh(jn,We),Tn=ae.findIndex(Ps=>Ps.element===jn);Tn>=0?Me(Ps=>Ps.filter((lo,ns)=>ns!==Tn)):Me(Ps=>[...Ps,{element:jn,rect:Pn,name:Ft,path:Qt,reactComponents:fs!=null?fs:void 0}]);return}const W=yo(F,"button, a, input, select, textarea, [role='button'], [onclick]");if(U.blockInteractions&&W&&(O.preventDefault(),O.stopPropagation()),Z){if(W&&!U.blockInteractions)return;O.preventDefault(),(us=za.current)==null||us.shake();return}if(X){if(W&&!U.blockInteractions)return;O.preventDefault(),(ds=$a.current)==null||ds.shake();return}O.preventDefault();const ee=Ja(O.clientX,O.clientY);if(!ee)return;const{name:de,path:Ue,reactComponents:Fe}=Qh(ee,We),et=ee.getBoundingClientRect(),mt=O.clientX/window.innerWidth*100,Mt=Jh(ee),tn=Mt?O.clientY:O.clientY+window.scrollY,nn=window.getSelection();let pt;nn&&nn.toString().trim().length>0&&(pt=nn.toString().trim().slice(0,500));const at=$u(ee),cs=Iu(ee);ge({x:mt,y:tn,clientY:O.clientY,element:de,elementPath:Ue,selectedText:pt,boundingBox:{x:et.left,y:Mt?et.top:et.top+window.scrollY,width:et.width,height:et.height},nearbyText:Wl(ee),cssClasses:Yl(ee),isFixed:Mt,fullPath:Hu(ee),accessibility:Pu(ee),computedStyles:cs,computedStylesObj:at,nearbyElements:zu(ee),reactComponents:Fe!=null?Fe:void 0,sourceFile:Xu(ee),targetElement:ee}),Ee(null)};return document.addEventListener("click",T,!0),()=>document.removeEventListener("click",T,!0)},[C,gs,Ve,Z,X,U.blockInteractions,We,ae]),y.useEffect(()=>{if(!C)return;const T=W=>{W.key==="Meta"&&(Ce.current.cmd=!0),W.key==="Shift"&&(Ce.current.shift=!0)},O=W=>{const ee=Ce.current.cmd&&Ce.current.shift;W.key==="Meta"&&(Ce.current.cmd=!1),W.key==="Shift"&&(Ce.current.shift=!1);const de=Ce.current.cmd&&Ce.current.shift;ee&&!de&&ae.length>0&&cr()},F=()=>{Ce.current={cmd:!1,shift:!1},Me([])};return document.addEventListener("keydown",T),document.addEventListener("keyup",O),window.addEventListener("blur",F),()=>{document.removeEventListener("keydown",T),document.removeEventListener("keyup",O),window.removeEventListener("blur",F)}},[C,ae,cr]),y.useEffect(()=>{if(!C||Z||gs||Ve)return;const T=O=>{const F=O.composedPath()[0]||O.target;yo(F,"[data-feedback-toolbar]")||yo(F,"[data-annotation-marker]")||yo(F,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(F.tagName)||F.isContentEditable||(O.preventDefault(),_o.current={x:O.clientX,y:O.clientY})};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[C,Z,gs,Ve]),y.useEffect(()=>{if(!C||Z)return;const T=O=>{if(!_o.current)return;const F=O.clientX-_o.current.x,W=O.clientY-_o.current.y,ee=F*F+W*W,de=So*So;if(!ao&&ee>=de&&(vs.current=_o.current,li(!0),O.preventDefault()),(ao||ee>=de)&&vs.current){if(Bo.current){const Ft=Math.min(vs.current.x,O.clientX),Qt=Math.min(vs.current.y,O.clientY),fs=Math.abs(O.clientX-vs.current.x),Tn=Math.abs(O.clientY-vs.current.y);Bo.current.style.transform=`translate(${Ft}px, ${Qt}px)`,Bo.current.style.width=`${fs}px`,Bo.current.style.height=`${Tn}px`}const Ue=Date.now();if(Ue-ys.current<sa)return;ys.current=Ue;const Fe=vs.current.x,et=vs.current.y,mt=Math.min(Fe,O.clientX),Mt=Math.min(et,O.clientY),tn=Math.max(Fe,O.clientX),nn=Math.max(et,O.clientY),pt=(mt+tn)/2,at=(Mt+nn)/2,cs=new Set,us=[[mt,Mt],[tn,Mt],[mt,nn],[tn,nn],[pt,at],[pt,Mt],[pt,nn],[mt,at],[tn,at]];for(const[Ft,Qt]of us){const fs=document.elementsFromPoint(Ft,Qt);for(const Tn of fs)Tn instanceof HTMLElement&&cs.add(Tn)}const ds=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Ft of ds)if(Ft instanceof HTMLElement){const Qt=Ft.getBoundingClientRect(),fs=Qt.left+Qt.width/2,Tn=Qt.top+Qt.height/2,Ps=fs>=mt&&fs<=tn&&Tn>=Mt&&Tn<=nn,lo=Math.min(Qt.right,tn)-Math.max(Qt.left,mt),ns=Math.min(Qt.bottom,nn)-Math.max(Qt.top,Mt),Go=lo>0&&ns>0?lo*ns:0,ci=Qt.width*Qt.height,ui=ci>0?Go/ci:0;(Ps||ui>.5)&&cs.add(Ft)}const jn=[],Pn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Ft of cs){if(yo(Ft,"[data-feedback-toolbar]")||yo(Ft,"[data-annotation-marker]"))continue;const Qt=Ft.getBoundingClientRect();if(!(Qt.width>window.innerWidth*.8&&Qt.height>window.innerHeight*.5)&&!(Qt.width<10||Qt.height<10)&&Qt.left<tn&&Qt.right>mt&&Qt.top<nn&&Qt.bottom>Mt){const fs=Ft.tagName;let Tn=Pn.has(fs);if(!Tn&&(fs==="DIV"||fs==="SPAN")){const Ps=Ft.textContent&&Ft.textContent.trim().length>0,lo=Ft.onclick!==null||Ft.getAttribute("role")==="button"||Ft.getAttribute("role")==="link"||Ft.classList.contains("clickable")||Ft.hasAttribute("data-clickable");(Ps||lo)&&!Ft.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Tn=!0)}if(Tn){let Ps=!1;for(const lo of jn)if(lo.left<=Qt.left&&lo.right>=Qt.right&&lo.top<=Qt.top&&lo.bottom>=Qt.bottom){Ps=!0;break}Ps||jn.push(Qt)}}}if(Oo.current){const Ft=Oo.current;for(;Ft.children.length>jn.length;)Ft.removeChild(Ft.lastChild);jn.forEach((Qt,fs)=>{let Tn=Ft.children[fs];Tn||(Tn=document.createElement("div"),Tn.className=Ie.selectedElementHighlight,Ft.appendChild(Tn)),Tn.style.transform=`translate(${Qt.left}px, ${Qt.top}px)`,Tn.style.width=`${Qt.width}px`,Tn.style.height=`${Qt.height}px`})}}};return document.addEventListener("mousemove",T,{passive:!0}),()=>document.removeEventListener("mousemove",T)},[C,Z,ao,So]),y.useEffect(()=>{if(!C)return;const T=O=>{const F=ao,W=vs.current;if(ao&&W){An.current=!0;const ee=Math.min(W.x,O.clientX),de=Math.min(W.y,O.clientY),Ue=Math.max(W.x,O.clientX),Fe=Math.max(W.y,O.clientY),et=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(pt=>{if(!(pt instanceof HTMLElement)||yo(pt,"[data-feedback-toolbar]")||yo(pt,"[data-annotation-marker]"))return;const at=pt.getBoundingClientRect();at.width>window.innerWidth*.8&&at.height>window.innerHeight*.5||at.width<10||at.height<10||at.left<Ue&&at.right>ee&&at.top<Fe&&at.bottom>de&&et.push({element:pt,rect:at})});const Mt=et.filter(({element:pt})=>!et.some(({element:at})=>at!==pt&&pt.contains(at))),tn=O.clientX/window.innerWidth*100,nn=O.clientY+window.scrollY;if(Mt.length>0){const pt=Mt.reduce((Pn,{rect:Ft})=>({left:Math.min(Pn.left,Ft.left),top:Math.min(Pn.top,Ft.top),right:Math.max(Pn.right,Ft.right),bottom:Math.max(Pn.bottom,Ft.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),at=Mt.slice(0,5).map(({element:Pn})=>qr(Pn).name).join(", "),cs=Mt.length>5?` +${Mt.length-5} more`:"",us=Mt[0].element,ds=$u(us),jn=Iu(us);ge({x:tn,y:nn,clientY:O.clientY,element:`${Mt.length} elements: ${at}${cs}`,elementPath:"multi-select",boundingBox:{x:pt.left,y:pt.top+window.scrollY,width:pt.right-pt.left,height:pt.bottom-pt.top},isMultiSelect:!0,fullPath:Hu(us),accessibility:Pu(us),computedStyles:jn,computedStylesObj:ds,nearbyElements:zu(us),cssClasses:Yl(us),nearbyText:Wl(us),sourceFile:Xu(us)})}else{const pt=Math.abs(Ue-ee),at=Math.abs(Fe-de);pt>20&&at>20&&ge({x:tn,y:nn,clientY:O.clientY,element:"Area selection",elementPath:`region at (${Math.round(ee)}, ${Math.round(de)})`,boundingBox:{x:ee,y:de+window.scrollY,width:pt,height:at},isMultiSelect:!0})}Ee(null)}else F&&(An.current=!0);_o.current=null,vs.current=null,li(!1),Oo.current&&(Oo.current.innerHTML="")};return document.addEventListener("mouseup",T),()=>document.removeEventListener("mouseup",T)},[C,ao]);const zo=y.useCallback(async(T,O,F)=>{const W=U.webhookUrl||w;if(!W||!U.webhooksEnabled&&!F)return!1;try{return(await fetch(W,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:T,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...O})})).ok}catch(ee){return console.warn("[Agentation] Webhook failed:",ee),!1}},[w,U.webhookUrl,U.webhooksEnabled]),Ld=y.useCallback(T=>{var F;if(!Z)return;const O={id:Date.now().toString(),x:Z.x,y:Z.y,comment:T,element:Z.element,elementPath:Z.elementPath,timestamp:Date.now(),selectedText:Z.selectedText,boundingBox:Z.boundingBox,nearbyText:Z.nearbyText,cssClasses:Z.cssClasses,isMultiSelect:Z.isMultiSelect,isFixed:Z.isFixed,fullPath:Z.fullPath,accessibility:Z.accessibility,computedStyles:Z.computedStyles,nearbyElements:Z.nearbyElements,reactComponents:Z.reactComponents,sourceFile:Z.sourceFile,elementBoundingBoxes:Z.elementBoundingBoxes,...g&&tt?{sessionId:tt,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};L(W=>[...W,O]),Gs.current=O.id,It(()=>{Gs.current=null},300),It(()=>{as(W=>new Set(W).add(O.id))},250),a==null||a(O),zo("annotation.add",{annotation:O}),en(!0),It(()=>{ge(null),en(!1)},150),(F=window.getSelection())==null||F.removeAllRanges(),g&&tt&&Hr(g,tt,O).then(W=>{W.id!==O.id&&(L(ee=>ee.map(de=>de.id===O.id?{...de,id:W.id}:de)),as(ee=>{const de=new Set(ee);return de.delete(O.id),de.add(W.id),de}))}).catch(W=>{console.warn("[Agentation] Failed to sync annotation:",W)})},[Z,a,zo,g,tt]),sl=y.useCallback(()=>{en(!0),It(()=>{ge(null),en(!1)},150)},[]),ol=y.useCallback(T=>{const O=M.findIndex(W=>W.id===T),F=M[O];(X==null?void 0:X.id)===T&&($s(!0),It(()=>{Re(null),Je(null),Ae([]),$s(!1)},150)),Sn(T),po(W=>new Set(W).add(T)),F&&(c==null||c(F),zo("annotation.delete",{annotation:F})),g&&Ea(g,T).catch(W=>{console.warn("[Agentation] Failed to delete annotation from server:",W)}),It(()=>{L(W=>W.filter(ee=>ee.id!==T)),po(W=>{const ee=new Set(W);return ee.delete(T),ee}),Sn(null),O<M.length-1&&(mn(O),It(()=>mn(null),200))},150)},[M,X,c,zo,g]),ur=y.useCallback(T=>{var O;if(!T){st(null),rn(null),yn([]);return}if(st(T.id),(O=T.elementBoundingBoxes)!=null&&O.length){const F=[];for(const W of T.elementBoundingBoxes){const ee=W.x+W.width/2,de=W.y+W.height/2-window.scrollY,Fe=document.elementsFromPoint(ee,de).find(et=>!et.closest("[data-annotation-marker]")&&!et.closest("[data-agentation-root]"));Fe&&F.push(Fe)}yn(F),rn(null)}else if(T.boundingBox){const F=T.boundingBox,W=F.x+F.width/2,ee=T.isFixed?F.y+F.height/2:F.y+F.height/2-window.scrollY,de=Ja(W,ee);if(de){const Ue=de.getBoundingClientRect(),Fe=Ue.width/F.width,et=Ue.height/F.height;Fe<.5||et<.5?rn(null):rn(de)}else rn(null);yn([])}else rn(null),yn([])},[]),Bd=y.useCallback(T=>{if(!X)return;const O={...X,comment:T};L(F=>F.map(W=>W.id===X.id?O:W)),u==null||u(O),zo("annotation.update",{annotation:O}),g&&By(g,X.id,{comment:T}).catch(F=>{console.warn("[Agentation] Failed to update annotation on server:",F)}),$s(!0),It(()=>{Re(null),Je(null),Ae([]),$s(!1)},150)},[X,u,zo,g]),il=y.useCallback(()=>{$s(!0),It(()=>{Re(null),Je(null),Ae([]),$s(!1)},150)},[]),$o=y.useCallback(()=>{const T=M.length,O=nt.length>0||!!Pe;if(T===0&&Cn.length===0&&!O)return;if(d==null||d(M),zo("annotations.clear",{annotations:M}),g){Promise.all(M.map(ee=>Ea(g,ee.id).catch(de=>{console.warn("[Agentation] Failed to delete annotation from server:",de)})));for(const[,ee]of oo.current)ee&&Ea(g,ee).catch(()=>{});oo.current.clear();for(const[,ee]of io.current)ee&&Ea(g,ee).catch(()=>{});io.current.clear()}Xe(!0),Se(!0),ri([]);const F=Ys.current;if(F){const ee=F.getContext("2d");ee&&ee.clearRect(0,0,F.width,F.height)}(nt.length>0||Pe)&&(Ws(ee=>ee+1),Ro(ee=>ee+1),It(()=>{qt([]),_s(null)},200)),yt&&Zt(!1),dn&&Ln(""),Us.current={rearrange:null,placements:[]},Wu(le);const W=T*30+200;It(()=>{L([]),as(new Set),localStorage.removeItem(gd(le)),Xe(!1)},W),It(()=>Se(!1),1500)},[le,M,Cn,nt,Pe,yt,dn,d,zo,g]),al=y.useCallback(async()=>{const T=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:le,O=Ve&&yt;let F;if(O){if(nt.length===0&&!Pe&&!dn)return;F=""}else{if(F=$y(M,T,U.outputDetail),!F&&Cn.length===0&&nt.length===0&&!Pe)return;F||(F=`## Page Feedback: ${T}
`)}if(!O&&Cn.length>0){const W=new Set;for(const Fe of M)Fe.drawingIndex!=null&&W.add(Fe.drawingIndex);const ee=Ys.current;ee&&(ee.style.visibility="hidden");const de=[],Ue=window.scrollY;for(let Fe=0;Fe<Cn.length;Fe++){if(W.has(Fe))continue;const et=Cn[Fe];if(et.points.length<2)continue;const mt=et.fixed?et.points:et.points.map(Gn=>({x:Gn.x,y:Gn.y-Ue}));let Mt=1/0,tn=1/0,nn=-1/0,pt=-1/0;for(const Gn of mt)Mt=Math.min(Mt,Gn.x),tn=Math.min(tn,Gn.y),nn=Math.max(nn,Gn.x),pt=Math.max(pt,Gn.y);const at=nn-Mt,cs=pt-tn,us=Math.hypot(at,cs),ds=mt[0],jn=mt[mt.length-1],Pn=Math.hypot(jn.x-ds.x,jn.y-ds.y);let Ft;const Qt=Pn<us*.35,fs=at/Math.max(cs,1);if(Qt&&us>20){const Gn=Math.max(at,cs)*.15;let di=0;for(const Si of mt){const Ec=Si.x-Mt<Gn,Od=nn-Si.x<Gn,zd=Si.y-tn<Gn,$d=pt-Si.y<Gn;(Ec||Od)&&(zd||$d)&&di++}Ft=di>mt.length*.15?"box":"circle"}else fs>3&&cs<40?Ft="underline":Pn>us*.5?Ft="arrow":Ft="drawing";const Tn=Math.min(10,mt.length),Ps=Math.max(1,Math.floor(mt.length/Tn)),lo=new Set,ns=[],Go=[ds];for(let Gn=Ps;Gn<mt.length-1;Gn+=Ps)Go.push(mt[Gn]);Go.push(jn);for(const Gn of Go){const di=Ja(Gn.x,Gn.y);if(!di||lo.has(di)||yo(di,"[data-feedback-toolbar]"))continue;lo.add(di);const{name:Si}=qr(di);ns.includes(Si)||ns.push(Si)}const ci=`${Math.round(Mt)},${Math.round(tn)} → ${Math.round(nn)},${Math.round(pt)}`;let ui;(Ft==="circle"||Ft==="box")&&ns.length>0?ui=`${Ft==="box"?"Boxed":"Circled"} **${ns[0]}**${ns.length>1?` (and ${ns.slice(1).join(", ")})`:""} (region: ${ci})`:Ft==="underline"&&ns.length>0?ui=`Underlined **${ns[0]}** (${ci})`:Ft==="arrow"&&ns.length>=2?ui=`Arrow from **${ns[0]}** to **${ns[ns.length-1]}** (${Math.round(ds.x)},${Math.round(ds.y)} → ${Math.round(jn.x)},${Math.round(jn.y)})`:ns.length>0?ui=`${Ft==="arrow"?"Arrow":"Drawing"} near **${ns.join("**, **")}** (region: ${ci})`:ui=`Drawing at ${ci}`,de.push(ui)}ee&&(ee.style.visibility=""),de.length>0&&(F+=`
**Drawings:**
`,de.forEach((Fe,et)=>{F+=`${et+1}. ${Fe}
`}))}if((nt.length>0||O&&dn)&&(F+=`
`+Ay(nt,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:yt,wireframePurpose:dn||void 0},U.outputDetail)),Pe){const W=Ry(Pe,U.outputDetail,{width:window.innerWidth,height:window.innerHeight});W&&(F+=`
`+W)}if(_)try{await navigator.clipboard.writeText(F)}catch{}m==null||m(F),z(!0),It(()=>z(!1),2e3),U.autoClearAfterCopy&&It(()=>$o(),500)},[M,Cn,nt,Pe,yt,Ve,xs,dn,le,U.outputDetail,We,U.autoClearAfterCopy,$o,_,m]),dr=y.useCallback(async()=>{const T=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:le;let O=$y(M,T,U.outputDetail);if(!O&&nt.length===0&&!Pe)return;if(O||(O=`## Page Feedback: ${T}
`),nt.length>0&&(O+=`
`+Ay(nt,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:yt,wireframePurpose:dn||void 0},U.outputDetail)),Pe){const W=Ry(Pe,U.outputDetail,{width:window.innerWidth,height:window.innerHeight});W&&(O+=`
`+W)}p&&p(O,M),H("sending"),await new Promise(W=>It(W,150));const F=await zo("submit",{output:O,annotations:M},!0);H(F?"sent":"failed"),It(()=>H("idle"),2500),F&&U.autoClearAfterCopy&&It(()=>$o(),500)},[p,zo,M,nt,Pe,yt,xs,le,U.outputDetail,We,U.autoClearAfterCopy,$o]);y.useEffect(()=>{if(!Tt)return;const T=10,O=W=>{const ee=W.clientX-Tt.x,de=W.clientY-Tt.y,Ue=Math.sqrt(ee*ee+de*de);if(!Dn&&Ue>T&&pn(!0),Dn||Ue>T){let Fe=Tt.toolbarX+ee,et=Tt.toolbarY+de;const mt=20,Mt=337,tn=44,pt=Mt-(C?Qe==="connected"?297:257:44),at=mt-pt,cs=window.innerWidth-mt-Mt;Fe=Math.max(at,Math.min(cs,Fe)),et=Math.max(mt,Math.min(window.innerHeight-tn-mt,et)),Jt({x:Fe,y:et})}},F=()=>{Dn&&(ts.current=!0),pn(!1),un(null)};return document.addEventListener("mousemove",O),document.addEventListener("mouseup",F),()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",F)}},[Tt,Dn,C,Qe]);const Sc=y.useCallback(T=>{var de,Ue;if(T.target.closest("button")||T.target.closest("[data-agentation-settings-panel]"))return;const O=T.currentTarget.parentElement;if(!O)return;const F=O.getBoundingClientRect(),W=(de=ht==null?void 0:ht.x)!=null?de:F.left,ee=(Ue=ht==null?void 0:ht.y)!=null?Ue:F.top;un({x:T.clientX,y:T.clientY,toolbarX:W,toolbarY:ee})},[ht]);if(y.useEffect(()=>{if(!ht)return;const T=()=>{let ee=ht.x,de=ht.y;const et=20-(337-(C?Qe==="connected"?297:257:44)),mt=window.innerWidth-20-337;ee=Math.max(et,Math.min(mt,ee)),de=Math.max(20,Math.min(window.innerHeight-44-20,de)),(ee!==ht.x||de!==ht.y)&&Jt({x:ee,y:de})};return T(),window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[ht,C,Qe]),y.useEffect(()=>{const T=O=>{const F=O.target,W=F.tagName==="INPUT"||F.tagName==="TEXTAREA"||F.isContentEditable;if(O.key==="Escape"){if(Ve){Yt?Dt(null):Mn();return}if(gs){As(!1);return}if(ae.length>0){Me([]);return}Z||C&&(Ge(),k(!1))}if((O.metaKey||O.ctrlKey)&&O.shiftKey&&(O.key==="f"||O.key==="F")){O.preventDefault(),Ge(),C?bn():k(!0);return}if(!(W||O.metaKey||O.ctrlKey)&&((O.key==="p"||O.key==="P")&&(O.preventDefault(),Ge(),wi()),(O.key==="l"||O.key==="L")&&(O.preventDefault(),Ge(),gs&&As(!1),be&&Ye(!1),Z&&sl(),Ve?Mn():Vt(!0)),(O.key==="h"||O.key==="H")&&M.length>0&&(O.preventDefault(),Ge(),E(ee=>!ee)),(O.key==="c"||O.key==="C")&&(M.length>0||nt.length>0||Pe)&&(O.preventDefault(),Ge(),al()),(O.key==="x"||O.key==="X")&&(M.length>0||nt.length>0||Pe)&&(O.preventDefault(),Ge(),$o(),nt.length>0&&qt([]),Pe&&_s(null)),O.key==="s"||O.key==="S")){const ee=Ei(U.webhookUrl)||Ei(w||"");M.length>0&&ee&&oe==="idle"&&(O.preventDefault(),Ge(),dr())}};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[C,gs,Ve,Yt,nt,Pe,Z,M.length,U.webhookUrl,w,oe,dr,wi,al,$o,ae]),!qe||$)return null;const oa=M.length>0,zi=M.filter(T=>!js.has(T.id)&&T.kind!=="placement"&&T.kind!=="rearrange"),kc=zi.length>0,$i=M.filter(T=>js.has(T.id)),Cc=T=>{const de=T.x/100*window.innerWidth,Ue=typeof T.y=="string"?parseFloat(T.y):T.y,Fe={};window.innerHeight-Ue-22-10<80&&(Fe.top="auto",Fe.bottom="calc(100% + 10px)");const mt=de-200/2,Mt=10;if(mt<Mt){const tn=Mt-mt;Fe.left=`calc(50% + ${tn}px)`}else if(mt+200>window.innerWidth-Mt){const tn=mt+200-(window.innerWidth-Mt);Fe.left=`calc(50% - ${tn}px)`}return Fe};return gc.createPortal(l.jsxs("div",{ref:V,style:{display:"contents"},"data-agentation-theme":xe?"dark":"light","data-agentation-accent":U.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${Ie.toolbar}${S?` ${S}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:ht?{left:ht.x,top:ht.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${Ie.toolbarContainer} ${C?Ie.expanded:Ie.collapsed} ${Ke?Ie.entrance:""} ${R?Ie.hiding:""} ${!U.webhooksEnabled&&(Ei(U.webhookUrl)||Ei(w||""))?Ie.serverConnected:""}`,onClick:C?void 0:T=>{if(ts.current){ts.current=!1,T.preventDefault();return}k(!0)},onMouseDown:Sc,role:C?void 0:"button",tabIndex:C?-1:0,title:C?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${Ie.toggleContent} ${C?Ie.hidden:Ie.visible}`,children:[l.jsx(kw,{size:24}),kc&&l.jsx("span",{className:`${Ie.badge} ${C?Ie.fadeOut:""} ${Ke?Ie.entrance:""}`,children:zi.length})]}),l.jsxs("div",{className:`${Ie.controlsContent} ${C?Ie.visible:Ie.hidden} ${ht&&ht.y<100?Ie.tooltipBelow:""} ${Xt||be?Ie.tooltipsHidden:""} ${Xo?Ie.tooltipsInSession:""}`,onMouseEnter:ct,onMouseLeave:N,children:[l.jsxs("div",{className:`${Ie.buttonWrapper} ${ht&&ht.x<120?Ie.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:Ie.controlButton,onClick:T=>{T.stopPropagation(),Ge(),wi()},"data-active":G,children:l.jsx(Ew,{size:24,isPaused:G})}),l.jsxs("span",{className:Ie.buttonTooltip,children:[G?"Resume animations":"Pause animations",l.jsx("span",{className:Ie.shortcut,children:"P"})]})]}),l.jsxs("div",{className:Ie.buttonWrapper,children:[l.jsx("button",{className:`${Ie.controlButton} ${xe?"":Ie.light}`,onClick:T=>{T.stopPropagation(),Ge(),gs&&As(!1),be&&Ye(!1),Z&&sl(),Ve?Mn():Vt(!0)},"data-active":Ve,style:Ve&&yt?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx($w,{size:21})}),l.jsxs("span",{className:Ie.buttonTooltip,children:[Ve?"Exit layout mode":"Layout mode",l.jsx("span",{className:Ie.shortcut,children:"L"})]})]}),l.jsxs("div",{className:Ie.buttonWrapper,children:[l.jsx("button",{className:Ie.controlButton,onClick:T=>{T.stopPropagation(),Ge(),E(!D)},disabled:!oa||Ve,children:l.jsx(Tw,{size:24,isOpen:D})}),l.jsxs("span",{className:Ie.buttonTooltip,children:[D?"Hide markers":"Show markers",l.jsx("span",{className:Ie.shortcut,children:"H"})]})]}),l.jsxs("div",{className:Ie.buttonWrapper,children:[l.jsx("button",{className:`${Ie.controlButton} ${Be?Ie.statusShowing:""}`,onClick:T=>{T.stopPropagation(),Ge(),al()},disabled:Ve&&yt?nt.length===0&&!((jc=Pe==null?void 0:Pe.sections)!=null&&jc.length):!oa&&Cn.length===0&&nt.length===0&&!((Mc=Pe==null?void 0:Pe.sections)!=null&&Mc.length),"data-active":Be,children:l.jsx(jw,{size:24,copied:Be,tint:Ve&&yt&&(nt.length>0||(rl=Pe==null?void 0:Pe.sections)!=null&&rl.length)?"#f97316":void 0})}),l.jsxs("span",{className:Ie.buttonTooltip,children:[Ve&&yt?"Copy layout":"Copy feedback",l.jsx("span",{className:Ie.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${Ie.buttonWrapper} ${Ie.sendButtonWrapper} ${C&&!U.webhooksEnabled&&(Ei(U.webhookUrl)||Ei(w||""))?Ie.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${Ie.controlButton} ${oe==="sent"||oe==="failed"?Ie.statusShowing:""}`,onClick:T=>{T.stopPropagation(),Ge(),dr()},disabled:!oa||!Ei(U.webhookUrl)&&!Ei(w||"")||oe==="sending","data-no-hover":oe==="sent"||oe==="failed",tabIndex:Ei(U.webhookUrl)||Ei(w||"")?0:-1,children:[l.jsx(Mw,{size:24,state:oe}),oa&&oe==="idle"&&l.jsx("span",{className:Ie.buttonBadge,children:M.length})]}),l.jsxs("span",{className:Ie.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:Ie.shortcut,children:"S"})]})]}),l.jsxs("div",{className:Ie.buttonWrapper,children:[l.jsx("button",{className:Ie.controlButton,onClick:T=>{T.stopPropagation(),Ge(),$o()},disabled:!oa&&Cn.length===0&&nt.length===0&&!((ll=Pe==null?void 0:Pe.sections)!=null&&ll.length),"data-danger":!0,children:l.jsx(Aw,{size:24})}),l.jsxs("span",{className:Ie.buttonTooltip,children:["Clear all",l.jsx("span",{className:Ie.shortcut,children:"X"})]})]}),l.jsxs("div",{className:Ie.buttonWrapper,children:[l.jsx("button",{className:Ie.controlButton,onClick:T=>{T.stopPropagation(),Ge(),Ve&&Mn(),Ye(!be)},children:l.jsx(Dw,{size:24})}),g&&Qe!=="disconnected"&&l.jsx("span",{className:`${Ie.mcpIndicator} ${Ie[Qe]} ${be?Ie.hidden:""}`,title:Qe==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:Ie.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:Ie.divider}),l.jsxs("div",{className:`${Ie.buttonWrapper} ${ht&&typeof window<"u"&&ht.x>window.innerWidth-120?Ie.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:Ie.controlButton,onClick:T=>{T.stopPropagation(),Ge(),bn()},children:l.jsx(Rw,{size:24})}),l.jsxs("span",{className:Ie.buttonTooltip,children:["Exit",l.jsx("span",{className:Ie.shortcut,children:"Esc"})]})]})]}),l.jsx(h4,{visible:Ve&&C,activeType:Yt,onSelect:T=>{Dt(Yt===T?null:T)},isDarkMode:xe,sectionCount:(ia=Pe==null?void 0:Pe.sections.length)!=null?ia:0,onDetectSections:()=>{var Ue,Fe;const T=k4(),O=(Ue=Pe==null?void 0:Pe.sections)!=null?Ue:[],F=new Set(O.map(et=>et.selector)),W=T.filter(et=>!F.has(et.selector)),ee=[...O,...W],de=[...(Fe=Pe==null?void 0:Pe.originalOrder)!=null?Fe:[],...W.map(et=>et.id)];_s({sections:ee,originalOrder:de,detectedAt:Date.now()})},placementCount:nt.length,onClearPlacements:()=>{Ws(T=>T+1),Ro(T=>T+1),It(()=>{_s({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:yt,onBlankCanvasChange:T=>{const O={sections:[],originalOrder:[],detectedAt:Date.now()};T?(wo.current={rearrange:Pe,placements:nt},_s(Us.current.rearrange||O),qt(Us.current.placements),Dt(null)):(Us.current={rearrange:Pe,placements:nt},_s(wo.current.rearrange||O),qt(wo.current.placements)),Zt(T)},wireframePurpose:dn,onWireframePurposeChange:Ln,Tooltip:sr,onDragStart:(T,O)=>{var tn;O.preventDefault();const F=ft[T];let W=null,ee=!1;const de=O.clientX,Ue=O.clientY,Fe=O.target.closest("[data-feedback-toolbar]"),et=(tn=Fe==null?void 0:Fe.getBoundingClientRect().top)!=null?tn:window.innerHeight,mt=nn=>{const pt=nn.clientX-de,at=nn.clientY-Ue;if(!ee&&(Math.abs(pt)>4||Math.abs(at)>4)&&(ee=!0,W=document.createElement("div"),W.className=`${je.dragPreview}${yt?` ${je.dragPreviewWireframe}`:""}`,document.body.appendChild(W)),!W)return;const cs=Math.max(0,et-nn.clientY),us=Math.min(1,cs/180),ds=1-Math.pow(1-us,2),jn=28,Pn=20,Ft=Math.min(140,F.width*.18),Qt=Math.min(90,F.height*.18),fs=jn+(Ft-jn)*ds,Tn=Pn+(Qt-Pn)*ds;W.style.width=`${fs}px`,W.style.height=`${Tn}px`,W.style.left=`${nn.clientX-fs/2}px`,W.style.top=`${nn.clientY-Tn/2}px`,W.style.opacity=`${.5+.5*ds}`,W.textContent=ds>.25?T:""},Mt=nn=>{if(window.removeEventListener("mousemove",mt),window.removeEventListener("mouseup",Mt),W&&document.body.removeChild(W),ee){const pt=F.width,at=F.height,cs=window.scrollY,us=Math.max(0,nn.clientX-pt/2),ds=Math.max(0,nn.clientY+cs-at/2),jn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:T,x:us,y:ds,width:pt,height:at,scrollY:cs,timestamp:Date.now()};qt(Pn=>[...Pn,jn]),Dt(null),mo.current=new Set,Ao(Pn=>Pn+1)}};window.addEventListener("mousemove",mt),window.addEventListener("mouseup",Mt)}}),l.jsx(N6,{settings:U,onSettingsChange:T=>_e(O=>({...O,...T})),isDarkMode:xe,onToggleTheme:Kt,isDevMode:ze,connectionStatus:Qe,endpoint:g,isVisible:He,toolbarNearBottom:!!ht&&ht.y<230,settingsPage:_t,onSettingsPageChange:gt,onHideToolbar:dt})]})}),(Ve||bt)&&l.jsx("div",{className:`${je.blankCanvas} ${xn?je.visible:""} ${Ut?je.gridActive:""}`,style:{"--canvas-opacity":Hn},"data-feedback-toolbar":!0}),Ve&&yt&&xn&&l.jsxs("div",{className:je.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:je.wireframeOpacityRow,children:[l.jsx("span",{className:je.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:je.wireframeOpacitySlider,min:0,max:1,step:.01,value:Hn,onChange:T=>Ds(Number(T.target.value))})]}),l.jsxs("div",{className:je.wireframeNoticeTitleRow,children:[l.jsx("span",{className:je.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:je.wireframeNoticeDivider}),l.jsx("button",{className:je.wireframeStartOver,onClick:()=>{Ws(T=>T+1),_s({sections:[],originalOrder:[],detectedAt:Date.now()}),Us.current={rearrange:null,placements:[]},Ln(""),Wu(le)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Ve||bt)&&l.jsx(l4,{placements:nt,onChange:qt,activeComponent:bt?null:Yt,onActiveComponentChange:Dt,isDarkMode:xe,exiting:bt,onInteractionChange:Xn,passthrough:!Yt,extraSnapRects:Pe==null?void 0:Pe.sections.map(T=>T.currentRect),deselectSignal:to,clearSignal:ho,wireframe:yt,onSelectionChange:(T,O)=>{mo.current=T,O||(Bn.current=new Set,so(F=>F+1))},onDragMove:(T,O)=>{const F=Bn.current;if(!(!F.size||!Pe)){if(!ls.current){ls.current=new Map;for(const W of Pe.sections)F.has(W.id)&&ls.current.set(W.id,{x:W.currentRect.x,y:W.currentRect.y})}for(const W of Pe.sections){if(!F.has(W.id)||!ls.current.get(W.id))continue;const de=document.querySelector(`[data-rearrange-section="${W.id}"]`);de&&(de.style.transform=`translate(${T}px, ${O}px)`)}}},onDragEnd:(T,O,F)=>{const W=Bn.current,ee=ls.current;if(ls.current=null,!(!W.size||!Pe||!ee)){for(const de of W){const Ue=document.querySelector(`[data-rearrange-section="${de}"]`);Ue&&(Ue.style.transform="")}F&&_s(de=>de&&{...de,sections:de.sections.map(Ue=>{const Fe=ee.get(Ue.id);return Fe?{...Ue,currentRect:{...Ue.currentRect,x:Math.max(0,Fe.x+T),y:Math.max(0,Fe.y+O)}}:Ue})})}}}),(Ve||bt)&&Pe&&l.jsx(M4,{rearrangeState:Pe,onChange:_s,isDarkMode:xe,exiting:bt,blankCanvas:yt,extraSnapRects:nt.map(T=>({x:T.x,y:T.y,width:T.width,height:T.height})),clearSignal:qn,deselectSignal:no,onSelectionChange:(T,O)=>{Bn.current=T,O||(mo.current=new Set,Ao(F=>F+1))},onDragMove:(T,O)=>{const F=mo.current;if(F.size){if(!ls.current){ls.current=new Map;for(const W of nt)F.has(W.id)&&ls.current.set(W.id,{x:W.x,y:W.y})}for(const W of F){const ee=document.querySelector(`[data-design-placement="${W}"]`);ee&&(ee.style.transform=`translate(${T}px, ${O}px)`)}}},onDragEnd:(T,O,F)=>{const W=mo.current,ee=ls.current;if(ls.current=null,!(!W.size||!ee)){for(const de of W){const Ue=document.querySelector(`[data-design-placement="${de}"]`);Ue&&(Ue.style.transform="")}F&&qt(de=>de.map(Ue=>{const Fe=ee.get(Ue.id);return Fe?{...Ue,x:Math.max(0,Fe.x+T),y:Math.max(0,Fe.y+O)}:Ue}))}}}),l.jsx("canvas",{ref:Ys,className:`${Ie.drawCanvas} ${gs?Ie.active:""}`,style:{opacity:lt?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:Ie.markersLayer,"data-feedback-toolbar":!0,children:[J&&zi.filter(T=>!T.isFixed).map((T,O,F)=>l.jsx(Iy,{annotation:T,globalIndex:zi.findIndex(W=>W.id===T.id),layerIndex:O,layerSize:F.length,isExiting:pe,isClearing:$e,isAnimated:Un.has(T.id),isHovered:!pe&&Ze===T.id,isDeleting:an===T.id,isEditingAny:!!X,renumberFrom:hn,markerClickBehavior:U.markerClickBehavior,tooltipStyle:Cc(T),onHoverEnter:W=>!pe&&W.id!==Gs.current&&ur(W),onHoverLeave:()=>ur(null),onClick:W=>U.markerClickBehavior==="delete"?ol(W.id):qo(W),onContextMenu:qo},T.id)),J&&!pe&&$i.filter(T=>!T.isFixed).map(T=>l.jsx(Py,{annotation:T},T.id))]}),l.jsxs("div",{className:Ie.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[J&&zi.filter(T=>T.isFixed).map((T,O,F)=>l.jsx(Iy,{annotation:T,globalIndex:zi.findIndex(W=>W.id===T.id),layerIndex:O,layerSize:F.length,isExiting:pe,isClearing:$e,isAnimated:Un.has(T.id),isHovered:!pe&&Ze===T.id,isDeleting:an===T.id,isEditingAny:!!X,renumberFrom:hn,markerClickBehavior:U.markerClickBehavior,tooltipStyle:Cc(T),onHoverEnter:W=>!pe&&W.id!==Gs.current&&ur(W),onHoverLeave:()=>ur(null),onClick:W=>U.markerClickBehavior==="delete"?ol(W.id):qo(W),onContextMenu:qo},T.id)),J&&!pe&&$i.filter(T=>T.isFixed).map(T=>l.jsx(Py,{annotation:T,fixed:!0},T.id))]}),C&&l.jsxs("div",{className:Ie.overlay,"data-feedback-toolbar":!0,style:Z||X?{zIndex:99999}:void 0,children:[(ke==null?void 0:ke.rect)&&!Z&&!$t&&!ao&&l.jsx("div",{className:`${Ie.hoverHighlight} ${Ie.enter}`,style:{left:ke.rect.left,top:ke.rect.top,width:ke.rect.width,height:ke.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),ae.filter(T=>document.contains(T.element)).map((T,O)=>{const F=T.element.getBoundingClientRect(),W=ae.length>1;return l.jsx("div",{className:W?Ie.multiSelectOutline:Ie.singleSelectOutline,style:{position:"fixed",left:F.left,top:F.top,width:F.width,height:F.height,...W?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},O)}),Ze&&!Z&&(()=>{var ee;const T=M.find(de=>de.id===Ze);if(!(T!=null&&T.boundingBox))return null;if((ee=T.elementBoundingBoxes)!=null&&ee.length)return Ot.length>0?Ot.filter(de=>document.contains(de)).map((de,Ue)=>{const Fe=de.getBoundingClientRect();return l.jsx("div",{className:`${Ie.multiSelectOutline} ${Ie.enter}`,style:{left:Fe.left,top:Fe.top,width:Fe.width,height:Fe.height}},`hover-outline-live-${Ue}`)}):T.elementBoundingBoxes.map((de,Ue)=>l.jsx("div",{className:`${Ie.multiSelectOutline} ${Ie.enter}`,style:{left:de.x,top:de.y-ut,width:de.width,height:de.height}},`hover-outline-${Ue}`));const O=Gt&&document.contains(Gt)?Gt.getBoundingClientRect():null,F=O?{x:O.left,y:O.top,width:O.width,height:O.height}:{x:T.boundingBox.x,y:T.isFixed?T.boundingBox.y:T.boundingBox.y-ut,width:T.boundingBox.width,height:T.boundingBox.height},W=T.isMultiSelect;return l.jsx("div",{className:`${W?Ie.multiSelectOutline:Ie.singleSelectOutline} ${Ie.enter}`,style:{left:F.x,top:F.y,width:F.width,height:F.height,...W?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),ke&&!Z&&!$t&&!ao&&l.jsxs("div",{className:`${Ie.hoverTooltip} ${Ie.enter}`,style:{left:Math.max(8,Math.min(P.x,window.innerWidth-100)),top:Math.max(P.y-(ke.reactComponents?48:32),8)},children:[ke.reactComponents&&l.jsx("div",{className:Ie.hoverReactPath,children:ke.reactComponents}),l.jsx("div",{className:Ie.hoverElementName,children:ke.elementName})]}),Z&&l.jsxs(l.Fragment,{children:[(aa=Z.multiSelectElements)!=null&&aa.length?Z.multiSelectElements.filter(T=>document.contains(T)).map((T,O)=>{const F=T.getBoundingClientRect();return l.jsx("div",{className:`${Ie.multiSelectOutline} ${On?Ie.exit:Ie.enter}`,style:{left:F.left,top:F.top,width:F.width,height:F.height}},`pending-multi-${O}`)}):Z.targetElement&&document.contains(Z.targetElement)?(()=>{const T=Z.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${Ie.singleSelectOutline} ${On?Ie.exit:Ie.enter}`,style:{left:T.left,top:T.top,width:T.width,height:T.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():Z.boundingBox&&l.jsx("div",{className:`${Z.isMultiSelect?Ie.multiSelectOutline:Ie.singleSelectOutline} ${On?Ie.exit:Ie.enter}`,style:{left:Z.boundingBox.x,top:Z.boundingBox.y-ut,width:Z.boundingBox.width,height:Z.boundingBox.height,...Z.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const T=Z.x,O=Z.isFixed?Z.y:Z.y-ut;return l.jsxs(l.Fragment,{children:[l.jsx(S6,{x:T,y:O,isMultiSelect:Z.isMultiSelect,isExiting:On}),l.jsx(pd,{ref:za,element:Z.element,selectedText:Z.selectedText,computedStyles:Z.computedStylesObj,placeholder:Z.element==="Area selection"?"What should change in this area?":Z.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Ld,onCancel:sl,isExiting:On,lightMode:!xe,accentColor:Z.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,T/100*window.innerWidth)),...O>window.innerHeight-290?{bottom:window.innerHeight-O+20}:{top:O+20}}})]})})()]}),X&&l.jsxs(l.Fragment,{children:[(Tc=X.elementBoundingBoxes)!=null&&Tc.length?it.length>0?it.filter(T=>document.contains(T)).map((T,O)=>{const F=T.getBoundingClientRect();return l.jsx("div",{className:`${Ie.multiSelectOutline} ${Ie.enter}`,style:{left:F.left,top:F.top,width:F.width,height:F.height}},`edit-multi-live-${O}`)}):X.elementBoundingBoxes.map((T,O)=>l.jsx("div",{className:`${Ie.multiSelectOutline} ${Ie.enter}`,style:{left:T.x,top:T.y-ut,width:T.width,height:T.height}},`edit-multi-${O}`)):(()=>{const T=ot&&document.contains(ot)?ot.getBoundingClientRect():null,O=T?{x:T.left,y:T.top,width:T.width,height:T.height}:X.boundingBox?{x:X.boundingBox.x,y:X.isFixed?X.boundingBox.y:X.boundingBox.y-ut,width:X.boundingBox.width,height:X.boundingBox.height}:null;return O?l.jsx("div",{className:`${X.isMultiSelect?Ie.multiSelectOutline:Ie.singleSelectOutline} ${Ie.enter}`,style:{left:O.x,top:O.y,width:O.width,height:O.height,...X.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(pd,{ref:$a,element:X.element,selectedText:X.selectedText,computedStyles:b4(X.computedStyles),placeholder:"Edit your feedback...",initialValue:X.comment,submitLabel:"Save",onSubmit:Bd,onCancel:il,onDelete:()=>ol(X.id),isExiting:zn,lightMode:!xe,accentColor:X.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const T=X.isFixed?X.y:X.y-ut;return{left:Math.max(160,Math.min(window.innerWidth-160,X.x/100*window.innerWidth)),...T>window.innerHeight-290?{bottom:window.innerHeight-T+20}:{top:T+20}}})()})]}),ao&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:Bo,className:Ie.dragSelection}),l.jsx("div",{ref:Oo,className:Ie.highlightsContainer})]})]})]}),document.body)}const rp=y.createContext({});function yc(t){const n=y.useRef(null);return n.current===null&&(n.current=t()),n.current}const O6=typeof window<"u",lp=O6?y.useLayoutEffect:y.useEffect,jd=y.createContext(null);function cp(t,n){t.indexOf(n)===-1&&t.push(n)}function Kr(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const Oi=(t,n,i)=>i>n?n:i<t?t:i;let up=()=>{};const La={},Px=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Hx(t){return typeof t=="object"&&t!==null}const Vx=t=>/^0[^.\s]+$/u.test(t);function Ux(t){let n;return()=>(n===void 0&&(n=t()),n)}const ii=t=>t,z6=(t,n)=>i=>n(t(i)),xc=(...t)=>t.reduce(z6),Qr=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class dp{constructor(){this.subscriptions=[]}add(n){return cp(this.subscriptions,n),()=>Kr(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Do=t=>t*1e3,oi=t=>t/1e3;function Wx(t,n){return n?t*(1e3/n):0}const $6=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},Yx=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,I6=1e-7,P6=12;function H6(t,n,i,a,c){let u,d,m=0;do d=n+(i-n)/2,u=Yx(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>I6&&++m<P6);return d}function bc(t,n,i,a){if(t===n&&i===a)return ii;const c=u=>H6(u,0,1,t,i);return u=>u===0||u===1?u:Yx(c(u),n,a)}const Fx=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,Xx=t=>n=>1-t(1-n),qx=bc(.33,1.53,.69,.99),fp=Xx(qx),Gx=Fx(fp),Kx=t=>t>=1?1:(t*=2)<1?.5*fp(t):.5*(2-Math.pow(2,-10*(t-1))),hp=t=>1-Math.sin(Math.acos(t)),Qx=Xx(hp),Zx=Fx(hp),V6=bc(.42,0,1,1),U6=bc(0,0,.58,1),Jx=bc(.42,0,.58,1),eb=t=>Array.isArray(t)&&typeof t[0]!="number";function tb(t,n){return eb(t)?t[$6(0,t.length,n)]:t}const nb=t=>Array.isArray(t)&&typeof t[0]=="number",W6={linear:ii,easeIn:V6,easeInOut:Jx,easeOut:U6,circIn:hp,circInOut:Zx,circOut:Qx,backIn:fp,backInOut:Gx,backOut:qx,anticipate:Kx},Y6=t=>typeof t=="string",Wy=t=>{if(nb(t)){up(t.length===4);const[n,i,a,c]=t;return bc(n,i,a,c)}else if(Y6(t))return W6[t];return t},qu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function F6(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1};function p(g){d.has(g)&&(_.schedule(g),t()),g(m)}const _={schedule:(g,x=!1,v=!1)=>{const S=v&&c?i:a;return x&&d.add(g),S.add(g),g},cancel:g=>{a.delete(g),d.delete(g)},process:g=>{if(m=g,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,_.process(g))}};return _}const X6=40;function sb(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=qu.reduce((D,E)=>(D[E]=F6(u),D),{}),{setup:m,read:p,resolveKeyframes:_,preUpdate:g,update:x,preRender:v,render:w,postRender:S}=d,C=()=>{const D=La.useManualTiming,E=D?c.timestamp:performance.now();i=!1,D||(c.delta=a?1e3/60:Math.max(Math.min(E-c.timestamp,X6),1)),c.timestamp=E,c.isProcessing=!0,m.process(c),p.process(c),_.process(c),g.process(c),x.process(c),v.process(c),w.process(c),S.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(C))},k=()=>{i=!0,a=!0,c.isProcessing||t(C)};return{schedule:qu.reduce((D,E)=>{const $=d[E];return D[E]=(q,R=!1,I=!1)=>(i||k(),$.schedule(q,R,I)),D},{}),cancel:D=>{for(let E=0;E<qu.length;E++)d[qu[E]].cancel(D)},state:c,steps:d}}const{schedule:es,cancel:na,state:eo,steps:em}=sb(typeof requestAnimationFrame<"u"?requestAnimationFrame:ii,!0);let sd;function q6(){sd=void 0}const xo={now:()=>(sd===void 0&&xo.set(eo.isProcessing||La.useManualTiming?eo.timestamp:performance.now()),sd),set:t=>{sd=t,queueMicrotask(q6)}},ob=t=>n=>typeof n=="string"&&n.startsWith(t),ib=ob("--"),G6=ob("var(--"),mp=t=>G6(t)?K6.test(t.split("/*")[0].trim()):!1,K6=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Yy(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Jr={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},dc={...Jr,transform:t=>Oi(0,1,t)},Gu={...Jr,default:1},ic=t=>Math.round(t*1e5)/1e5,pp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Q6(t){return t==null}const Z6=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,_p=(t,n)=>i=>!!(typeof i=="string"&&Z6.test(i)&&i.startsWith(t)||n&&!Q6(i)&&Object.prototype.hasOwnProperty.call(i,n)),ab=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,m]=a.match(pp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:m!==void 0?parseFloat(m):1}},J6=t=>Oi(0,255,t),tm={...Jr,transform:t=>Math.round(J6(t))},or={test:_p("rgb","red"),parse:ab("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+tm.transform(t)+", "+tm.transform(n)+", "+tm.transform(i)+", "+ic(dc.transform(a))+")"};function ek(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const Tm={test:_p("#"),parse:ek,transform:or.transform},vc=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Da=vc("deg"),Bi=vc("%"),St=vc("px"),tk=vc("vh"),nk=vc("vw"),Fy={...Bi,parse:t=>Bi.parse(t)/100,transform:t=>Bi.transform(t*100)},Yr={test:_p("hsl","hue"),parse:ab("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+Bi.transform(ic(n))+", "+Bi.transform(ic(i))+", "+ic(dc.transform(a))+")"},zs={test:t=>or.test(t)||Tm.test(t)||Yr.test(t),parse:t=>or.test(t)?or.parse(t):Yr.test(t)?Yr.parse(t):Tm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?or.transform(t):Yr.transform(t),getAnimatableNone:t=>{const n=zs.parse(t);return n.alpha=0,zs.transform(n)}},sk=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ok(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(pp))==null?void 0:n.length)||0)+(((i=t.match(sk))==null?void 0:i.length)||0)>0}const rb="number",lb="color",ik="var",ak="var(",Xy="${}",rk=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Zr(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const m=n.replace(rk,p=>(zs.test(p)?(a.color.push(u),c.push(lb),i.push(zs.parse(p))):p.startsWith(ak)?(a.var.push(u),c.push(ik),i.push(p)):(a.number.push(u),c.push(rb),i.push(parseFloat(p))),++u,Xy)).split(Xy);return{values:i,split:m,indexes:a,types:c}}function lk(t){return Zr(t).values}function cb({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===rb?c+=ic(a[u]):d===lb?c+=zs.transform(a[u]):c+=a[u]}return c}}function ck(t){return cb(Zr(t))}const uk=t=>typeof t=="number"?0:zs.test(t)?zs.getAnimatableNone(t):t,dk=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:uk(t);function fk(t){const n=Zr(t);return cb(n)(n.values.map((a,c)=>dk(a,n.split[c])))}const yi={test:ok,parse:lk,createTransformer:ck,getAnimatableNone:fk};function nm(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function hk({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const m=i<.5?i*(1+n):i+n-i*n,p=2*i-m;c=nm(p,m,t+1/3),u=nm(p,m,t),d=nm(p,m,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function yd(t,n){return i=>i>0?n:t}const rs=(t,n,i)=>t+(n-t)*i,sm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},mk=[Tm,or,Yr],pk=t=>mk.find(n=>n.test(t));function qy(t){const n=pk(t);if(!n)return!1;let i=n.parse(t);return n===Yr&&(i=hk(i)),i}const Gy=(t,n)=>{const i=qy(t),a=qy(n);if(!i||!a)return yd(t,n);const c={...i};return u=>(c.red=sm(i.red,a.red,u),c.green=sm(i.green,a.green,u),c.blue=sm(i.blue,a.blue,u),c.alpha=rs(i.alpha,a.alpha,u),or.transform(c))},Em=new Set(["none","hidden"]);function _k(t,n){return Em.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function gk(t,n){return i=>rs(t,n,i)}function gp(t){return typeof t=="number"?gk:typeof t=="string"?mp(t)?yd:zs.test(t)?Gy:bk:Array.isArray(t)?ub:typeof t=="object"?zs.test(t)?Gy:yk:yd}function ub(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>gp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function yk(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=gp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function xk(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],m=t.indexes[d][a[d]],p=(c=t.values[m])!=null?c:0;i[u]=p,a[d]++}return i}const bk=(t,n)=>{const i=yi.createTransformer(n),a=Zr(t),c=Zr(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Em.has(t)&&!c.values.length||Em.has(n)&&!a.values.length?_k(t,n):xc(ub(xk(a,c),c.values),i):yd(t,n)};function db(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?rs(t,n,i):gp(t)(t,n)}const vk=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>es.update(n,i),stop:()=>na(n),now:()=>eo.isProcessing?eo.timestamp:xo.now()}},fb=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},xd=2e4;function yp(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<xd;)n+=i,a=t.next(n);return n>=xd?1/0:n}function hb(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(yp(a),xd);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:oi(c)}}const Cs={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Dm(t,n){return t*Math.sqrt(1-n*n)}const wk=12;function Sk(t,n,i){let a=i;for(let c=1;c<wk;c++)a=a-t(a)/n(a);return a}const om=.001;function kk({duration:t=Cs.duration,bounce:n=Cs.bounce,velocity:i=Cs.velocity,mass:a=Cs.mass}){let c,u,d=1-n;d=Oi(Cs.minDamping,Cs.maxDamping,d),t=Oi(Cs.minDuration,Cs.maxDuration,oi(t)),d<1?(c=_=>{const g=_*d,x=g*t,v=g-i,w=Dm(_,d),S=Math.exp(-x);return om-v/w*S},u=_=>{const x=_*d*t,v=x*i+i,w=Math.pow(d,2)*Math.pow(_,2)*t,S=Math.exp(-x),C=Dm(Math.pow(_,2),d);return(-c(_)+om>0?-1:1)*((v-w)*S)/C}):(c=_=>{const g=Math.exp(-_*t),x=(_-i)*t+1;return-om+g*x},u=_=>{const g=Math.exp(-_*t),x=(i-_)*(t*t);return g*x});const m=5/t,p=Sk(c,u,m);if(t=Do(t),isNaN(p))return{stiffness:Cs.stiffness,damping:Cs.damping,duration:t};{const _=Math.pow(p,2)*a;return{stiffness:_,damping:d*2*Math.sqrt(a*_),duration:t}}}const Ck=["duration","bounce"],jk=["stiffness","damping","mass"];function Ky(t,n){return n.some(i=>t[i]!==void 0)}function Mk(t){let n={velocity:Cs.velocity,stiffness:Cs.stiffness,damping:Cs.damping,mass:Cs.mass,isResolvedFromDuration:!1,...t};if(!Ky(t,jk)&&Ky(t,Ck))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*Oi(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Cs.mass,stiffness:c,damping:u}}else{const i=kk({...t,velocity:0});n={...n,...i,mass:Cs.mass},n.isResolvedFromDuration=!0}return n}function fc(t=Cs.visualDuration,n=Cs.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],m={done:!1,value:u},{stiffness:p,damping:_,mass:g,duration:x,velocity:v,isResolvedFromDuration:w}=Mk({...i,velocity:-oi(i.velocity||0)}),S=v||0,C=_/(2*Math.sqrt(p*g)),k=d-u,M=oi(Math.sqrt(p/g)),L=Math.abs(k)<5;a||(a=L?Cs.restSpeed.granular:Cs.restSpeed.default),c||(c=L?Cs.restDelta.granular:Cs.restDelta.default);let D,E,$,q,R,I;if(C<1)$=Dm(M,C),q=(S+C*M*k)/$,D=J=>{const te=Math.exp(-C*M*J);return d-te*(q*Math.sin($*J)+k*Math.cos($*J))},R=C*M*q+k*$,I=C*M*k-q*$,E=J=>Math.exp(-C*M*J)*(R*Math.sin($*J)+I*Math.cos($*J));else if(C===1){D=te=>d-Math.exp(-M*te)*(k+(S+M*k)*te);const J=S+M*k;E=te=>Math.exp(-M*te)*(M*J*te-S)}else{const J=M*Math.sqrt(C*C-1);D=ke=>{const Ee=Math.exp(-C*M*ke),P=Math.min(J*ke,300);return d-Ee*((S+C*M*k)*Math.sinh(P)+J*k*Math.cosh(P))/J};const te=(S+C*M*k)/J,pe=C*M*te-k*J,Te=C*M*k-te*J;E=ke=>{const Ee=Math.exp(-C*M*ke),P=Math.min(J*ke,300);return Ee*(pe*Math.sinh(P)+Te*Math.cosh(P))}}const V={calculatedDuration:w&&x||null,velocity:J=>Do(E(J)),next:J=>{if(!w&&C<1){const pe=Math.exp(-C*M*J),Te=Math.sin($*J),ke=Math.cos($*J),Ee=d-pe*(q*Te+k*ke),P=Do(pe*(R*Te+I*ke));return m.done=Math.abs(P)<=a&&Math.abs(d-Ee)<=c,m.value=m.done?d:Ee,m}const te=D(J);if(w)m.done=J>=x;else{const pe=Do(E(J));m.done=Math.abs(pe)<=a&&Math.abs(d-te)<=c}return m.value=m.done?d:te,m},toString:()=>{const J=Math.min(yp(V),xd),te=fb(pe=>V.next(J*pe).value,J,30);return J+"ms "+te},toTransition:()=>{}};return V}fc.applyToOptions=t=>{const n=hb(t,100,fc);return t.ease=n.ease,t.duration=Do(n.duration),t.type="keyframes",t};const Tk=5;function mb(t,n,i){const a=Math.max(n-Tk,0);return Wx(i-t(a),n-a)}function Am({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:m,max:p,restDelta:_=.5,restSpeed:g}){const x=t[0],v={done:!1,value:x},w=I=>m!==void 0&&I<m||p!==void 0&&I>p,S=I=>m===void 0?p:p===void 0||Math.abs(m-I)<Math.abs(p-I)?m:p;let C=i*n;const k=x+C,M=d===void 0?k:d(k);M!==k&&(C=M-x);const L=I=>-C*Math.exp(-I/a),D=I=>M+L(I),E=I=>{const V=L(I),J=D(I);v.done=Math.abs(V)<=_,v.value=v.done?M:J};let $,q;const R=I=>{w(v.value)&&($=I,q=fc({keyframes:[v.value,S(v.value)],velocity:mb(D,I,v.value),damping:c,stiffness:u,restDelta:_,restSpeed:g}))};return R(0),{calculatedDuration:null,next:I=>{let V=!1;return!q&&$===void 0&&(V=!0,E(I),R(I)),$!==void 0&&I>=$?q.next(I-$):(!V&&E(I),v)}}}function Ek(t,n,i){const a=[],c=i||La.mix||db,u=t.length-1;for(let d=0;d<u;d++){let m=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||ii:n;m=xc(p,m)}a.push(m)}return a}function pb(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(up(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const m=Ek(n,a,c),p=m.length,_=g=>{if(d&&g<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(g<t[x+1]);x++);const v=Qr(t[x],t[x+1],g);return m[x](v)};return i?g=>_(Oi(t[0],t[u-1],g)):_}function _b(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=Qr(0,n,a);t.push(rs(i,1,c))}}function gb(t){const n=[0];return _b(n,t.length-1),n}function Dk(t,n){return t.map(i=>i*n)}function Ak(t,n){return t.map(()=>n||Jx).splice(0,t.length-1)}function ac({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=eb(a)?a.map(Wy):Wy(a),u={done:!1,value:n[0]},d=Dk(i&&i.length===n.length?i:gb(n),t),m=pb(d,n,{ease:Array.isArray(c)?c:Ak(n,c)});return{calculatedDuration:t,next:p=>(u.value=m(p),u.done=p>=t,u)}}const Rk=t=>t!==null;function Md(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(Rk),m=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!m||a===void 0?u[m]:a}const Nk={decay:Am,inertia:Am,tween:ac,keyframes:ac,spring:fc};function yb(t){typeof t.type=="string"&&(t.type=Nk[t.type])}class xp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const Lk=t=>t/100;class bd extends xp{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==xo.now()&&this.tick(xo.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;yb(n);const{type:i=ac,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:m}=n;const p=i||ac;p!==ac&&typeof m[0]!="number"&&(this.mixKeyframes=xc(Lk,db(m[0],m[1])),m=[0,100]);const _=p({...n,keyframes:m});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...m].reverse(),velocity:-d})),_.calculatedDuration===null&&(_.calculatedDuration=yp(_));const{calculatedDuration:g}=_;this.calculatedDuration=g,this.resolvedDuration=g+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=_}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:m,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:_=0,keyframes:g,repeat:x,repeatType:v,repeatDelay:w,type:S,onUpdate:C,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const M=this.currentTime-_*(this.playbackSpeed>=0?1:-1),L=this.playbackSpeed>=0?M<0:M>c;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let D=this.currentTime,E=a;if(x){const I=Math.min(this.currentTime,c)/m;let V=Math.floor(I),J=I%1;!J&&I>=1&&(J=1),J===1&&V--,V=Math.min(V,x+1),!!(V%2)&&(v==="reverse"?(J=1-J,w&&(J-=w/m)):v==="mirror"&&(E=d)),D=Oi(0,1,J)*m}let $;L?(this.delayState.value=g[0],$=this.delayState):$=E.next(D),u&&!L&&($.value=u($.value));let{done:q}=$;!L&&p!==null&&(q=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const R=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&q);return R&&S!==Am&&($.value=Md(g,this.options,k,this.speed)),C&&C($.value),R&&this.finish(),$}then(n,i){return this.finished.then(n,i)}get duration(){return oi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+oi(n)}get time(){return oi(this.currentTime)}set time(n){n=Do(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return mb(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(xo.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=oi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=vk,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(xo.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function Bk(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const ir=t=>t*180/Math.PI,Rm=t=>{const n=ir(Math.atan2(t[1],t[0]));return Nm(n)},Ok={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Rm,rotateZ:Rm,skewX:t=>ir(Math.atan(t[1])),skewY:t=>ir(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Nm=t=>(t=t%360,t<0&&(t+=360),t),Qy=Rm,Zy=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Jy=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),zk={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Zy,scaleY:Jy,scale:t=>(Zy(t)+Jy(t))/2,rotateX:t=>Nm(ir(Math.atan2(t[6],t[5]))),rotateY:t=>Nm(ir(Math.atan2(-t[2],t[0]))),rotateZ:Qy,rotate:Qy,skewX:t=>ir(Math.atan(t[4])),skewY:t=>ir(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Lm(t){return t.includes("scale")?1:0}function Bm(t,n){if(!t||t==="none")return Lm(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=zk,c=i;else{const m=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=Ok,c=m}if(!c)return Lm(n);const u=a[n],d=c[1].split(",").map(Ik);return typeof u=="function"?u(d):d[u]}const $k=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Bm(i,n)};function Ik(t){return parseFloat(t.trim())}const el=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],tl=new Set(el),e1=t=>t===Jr||t===St,Pk=new Set(["x","y","z"]),Hk=el.filter(t=>!Pk.has(t));function Vk(t){const n=[];return Hk.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const Na={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Bm(n,"x"),y:(t,{transform:n})=>Bm(n,"y")};Na.translateX=Na.x;Na.translateY=Na.y;const ar=new Set;let Om=!1,zm=!1,$m=!1;function xb(){if(zm){const t=Array.from(ar).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=Vk(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var m;(m=a.getValue(u))==null||m.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}zm=!1,Om=!1,ar.forEach(t=>t.complete($m)),ar.clear()}function bb(){ar.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(zm=!0)})}function Uk(){$m=!0,bb(),xb(),$m=!1}class bp{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(ar.add(this),Om||(Om=!0,es.read(bb),es.resolveKeyframes(xb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const m=a.readValue(i,d);m!=null&&(n[0]=m)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}Bk(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),ar.delete(this)}cancel(){this.state==="scheduled"&&(ar.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Wk=t=>t.startsWith("--");function vb(t,n,i){Wk(n)?t.style.setProperty(n,i):t.style[n]=i}const Yk={};function wb(t,n){const i=Ux(t);return()=>{var a;return(a=Yk[n])!=null?a:i()}}const Fk=wb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Sb=wb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ec=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,t1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ec([0,.65,.55,1]),circOut:ec([.55,0,1,.45]),backIn:ec([.31,.01,.66,-.59]),backOut:ec([.33,1.53,.69,.99])};function kb(t,n){if(t)return typeof t=="function"?Sb()?fb(t,n):"ease-out":nb(t)?ec(t):Array.isArray(t)?t.map(i=>kb(i,n)||t1.easeOut):t1[t]}function Xk(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:m="easeOut",times:p}={},_=void 0){const g={[n]:i};p&&(g.offset=p);const x=kb(m,c);Array.isArray(x)&&(g.easing=x);const v={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return _&&(v.pseudoElement=_),t.animate(g,v)}function vp(t){return typeof t=="function"&&"applyToOptions"in t}function qk({type:t,...n}){var i,a;return vp(t)&&Sb()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Cb extends xp{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:m,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,up(typeof n.type!="string");const _=qk(n);this.animation=Xk(i,a,c,_,u),_.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=Md(c,this.options,m,this.speed);this.updateMotionValue&&this.updateMotionValue(g),vb(i,a,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return oi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+oi(n)}get time(){return oi(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Do(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&Fk()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),ii):c(this)}}const jb={anticipate:Kx,backInOut:Gx,circInOut:Zx};function Gk(t){return t in jb}function Kk(t){typeof t.ease=="string"&&Gk(t.ease)&&(t.ease=jb[t.ease])}const im=10;class Qk extends Cb{constructor(n){Kk(n),yb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const m=new bd({...d,autoplay:!1}),p=Math.max(im,xo.now()-this.startTime),_=Oi(0,im,p-im),g=m.sample(p).value,{name:x}=this.options;u&&x&&vb(u,x,g),i.setWithVelocity(m.sample(Math.max(0,p-_)).value,g,_),m.stop()}}const n1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(yi.test(t)||t==="0")&&!t.startsWith("url("));function Zk(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function Jk(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=n1(c,n),m=n1(u,n);return!d||!m?!1:Zk(t)||(i==="spring"||vp(i))&&a}function Im(t){t.duration=0,t.type="keyframes"}const Mb=new Set(["opacity","clipPath","filter","transform"]),e3=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function t3(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&e3.test(t[n]))return!0;return!1}const n3=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),s3=Ux(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function o3(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:m}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:_,transformTemplate:g}=n.owner.getProps();return s3()&&i&&(Mb.has(i)||n3.has(i)&&t3(m))&&(i!=="transform"||!g)&&!_&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const i3=40;class a3 extends xp{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:m,name:p,motionValue:_,element:g,...x}){var S;super(),this.stop=()=>{var C,k;this._animation&&(this._animation.stop(),(C=this.stopTimeline)==null||C.call(this)),(k=this.keyframeResolver)==null||k.cancel()},this.createdAt=xo.now();const v={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:_,element:g,...x},w=(g==null?void 0:g.KeyframeResolver)||bp;this.keyframeResolver=new w(m,(C,k,M)=>this.onKeyframesResolved(C,k,v,!M),p,_,g),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(n,i,a,c){var M,L;this.keyframeResolver=void 0;const{name:u,type:d,velocity:m,delay:p,isHandoff:_,onUpdate:g}=a;this.resolvedAt=xo.now();let x=!0;Jk(n,u,d,m)||(x=!1,(La.instantAnimations||!p)&&(g==null||g(Md(n,a,i))),n[0]=n[n.length-1],Im(a),a.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>i3?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},S=x&&!_&&o3(w),C=(L=(M=w.motionValue)==null?void 0:M.owner)==null?void 0:L.current;let k;if(S)try{k=new Qk({...w,element:C})}catch{k=new bd(w)}else k=new bd(w);k.finished.then(()=>{this.notifyFinished()}).catch(ii),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),Uk()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class r3{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return s1(this.animations,"duration")}get iterationDuration(){return s1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function s1(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class l3 extends r3{then(n,i){return this.finished.finally(n).then(()=>{})}}function Tb(t,n,i,a=0,c=1){const u=Array.from(t).sort((_,g)=>_.sortNodePosition(g)).indexOf(n),d=t.size,m=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:m-u*a}const c3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function u3(t){const n=c3.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function Eb(t,n,i=1){const[a,c]=u3(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return Px(d)?parseFloat(d):d}return mp(c)?Eb(c,n,i+1):c}const d3={type:"spring",stiffness:500,damping:25,restSpeed:10},f3=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),h3={type:"keyframes",duration:.8},m3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},p3=(t,{keyframes:n})=>n.length>2?h3:tl.has(t)?t.startsWith("scale")?f3(n[1]):d3:m3;function Db(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function wp(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?Db(i,t):i}const _3=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function g3(t){for(const n in t)if(!_3.has(n))return!0;return!1}const Sp=(t,n,i,a={},c,u)=>d=>{const m=wp(a,t)||{},p=m.delay||a.delay||0;let{elapsed:_=0}=a;_=_-Do(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...m,delay:-_,onUpdate:v=>{n.set(v),m.onUpdate&&m.onUpdate(v)},onComplete:()=>{d(),m.onComplete&&m.onComplete()},name:t,motionValue:n,element:u?void 0:c};g3(m)||Object.assign(g,p3(t,g)),g.duration&&(g.duration=Do(g.duration)),g.repeatDelay&&(g.repeatDelay=Do(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let x=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Im(g),g.delay===0&&(x=!0)),(La.instantAnimations||La.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,Im(g),g.delay=0),g.allowFlatten=!m.type&&!m.ease,x&&!u&&n.get()!==void 0){const v=Md(g.keyframes,m);if(v!==void 0){es.update(()=>{g.onUpdate(v),g.onComplete()});return}}return m.isSync?new bd(g):new a3(g)};function o1(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function kp(t,n,i,a){if(typeof n=="function"){const[c,u]=o1(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=o1(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function rr(t,n,i){const a=t.getProps();return kp(a,n,i!==void 0?i:a.custom,t)}const Ab=new Set(["width","height","top","left","right","bottom",...el]),i1=30,y3=t=>!isNaN(parseFloat(t)),rc={current:void 0};class x3{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=xo.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=xo.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=y3(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new dp);const a=this.events[n].add(i);return n==="change"?()=>{a(),es.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return rc.current&&rc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=xo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>i1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,i1);return Wx(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ba(t,n){return new x3(t,n)}const Pm=t=>Array.isArray(t);function b3(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,Ba(i))}function v3(t){return Pm(t)?t[t.length-1]||0:t}function w3(t,n){const i=rr(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const m=v3(u[d]);b3(t,d,m)}}const Vs=t=>!!(t&&t.getVelocity);function S3(t){return!!(Vs(t)&&t.add)}function Hm(t,n){const i=t.getValue("willChange");if(S3(i))return i.add(n);if(!i&&La.WillChange){const a=new La.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Cp(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const k3="framerAppearId",Rb="data-"+Cp(k3);function Nb(t){return t.props[Rb]}function C3({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function jp(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var v;let{transition:u,transitionEnd:d,...m}=n;const p=t.getDefaultTransition();u=u?Db(u,p):p;const _=u==null?void 0:u.reduceMotion;a&&(u=a);const g=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const w in m){const S=t.getValue(w,(v=t.latestValues[w])!=null?v:null),C=m[w];if(C===void 0||x&&C3(x,w))continue;const k={delay:i,...wp(u||{},w)},M=S.get();if(M!==void 0&&!S.isAnimating()&&!Array.isArray(C)&&C===M&&!k.velocity){es.update(()=>S.set(C));continue}let L=!1;if(window.MotionHandoffAnimation){const $=Nb(t);if($){const q=window.MotionHandoffAnimation($,w,es);q!==null&&(k.startTime=q,L=!0)}}Hm(t,w);const D=_!=null?_:t.shouldReduceMotion;S.start(Sp(w,S,C,D&&Ab.has(w)?{type:!1}:k,t,L));const E=S.animation;E&&g.push(E)}if(d){const w=()=>es.update(()=>{d&&w3(t,d)});g.length?Promise.all(g).then(w):w()}return g}function Vm(t,n,i={}){var p;const a=rr(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(jp(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(_=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:v}=c;return j3(t,n,_,g,x,v,i)}:()=>Promise.resolve(),{when:m}=c;if(m){const[_,g]=m==="beforeChildren"?[u,d]:[d,u];return _().then(()=>g())}else return Promise.all([u(),d(i.delay)])}function j3(t,n,i=0,a=0,c=0,u=1,d){const m=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),m.push(Vm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Tb(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(m)}function M3(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Vm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Vm(t,n,i);else{const c=typeof n=="function"?rr(t,n,i.custom):n;a=Promise.all(jp(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const T3={test:t=>t==="auto",parse:t=>t},Lb=t=>n=>n.test(t),Bb=[Jr,St,Bi,Da,nk,tk,T3],a1=t=>Bb.find(Lb(t));function E3(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Vx(t):!0}const D3=new Set(["brightness","contrast","saturate","opacity"]);function A3(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(pp)||[];if(!a)return t;const c=i.replace(a,"");let u=D3.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const R3=/\b([a-z-]*)\(.*?\)/gu,Um={...yi,getAnimatableNone:t=>{const n=t.match(R3);return n?n.map(A3).join(" "):t}},Wm={...yi,getAnimatableNone:t=>{const n=yi.parse(t);return yi.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},r1={...Jr,transform:Math.round},N3={rotate:Da,rotateX:Da,rotateY:Da,rotateZ:Da,scale:Gu,scaleX:Gu,scaleY:Gu,scaleZ:Gu,skew:Da,skewX:Da,skewY:Da,distance:St,translateX:St,translateY:St,translateZ:St,x:St,y:St,z:St,perspective:St,transformPerspective:St,opacity:dc,originX:Fy,originY:Fy,originZ:St},Mp={borderWidth:St,borderTopWidth:St,borderRightWidth:St,borderBottomWidth:St,borderLeftWidth:St,borderRadius:St,borderTopLeftRadius:St,borderTopRightRadius:St,borderBottomRightRadius:St,borderBottomLeftRadius:St,width:St,maxWidth:St,height:St,maxHeight:St,top:St,right:St,bottom:St,left:St,inset:St,insetBlock:St,insetBlockStart:St,insetBlockEnd:St,insetInline:St,insetInlineStart:St,insetInlineEnd:St,padding:St,paddingTop:St,paddingRight:St,paddingBottom:St,paddingLeft:St,paddingBlock:St,paddingBlockStart:St,paddingBlockEnd:St,paddingInline:St,paddingInlineStart:St,paddingInlineEnd:St,margin:St,marginTop:St,marginRight:St,marginBottom:St,marginLeft:St,marginBlock:St,marginBlockStart:St,marginBlockEnd:St,marginInline:St,marginInlineStart:St,marginInlineEnd:St,fontSize:St,backgroundPositionX:St,backgroundPositionY:St,...N3,zIndex:r1,fillOpacity:dc,strokeOpacity:dc,numOctaves:r1},L3={...Mp,color:zs,backgroundColor:zs,outlineColor:zs,fill:zs,stroke:zs,borderColor:zs,borderTopColor:zs,borderRightColor:zs,borderBottomColor:zs,borderLeftColor:zs,filter:Um,WebkitFilter:Um,mask:Wm,WebkitMask:Wm},Ob=t=>L3[t],B3=new Set([Um,Wm]);function zb(t,n){let i=Ob(t);return B3.has(i)||(i=yi),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const O3=new Set(["auto","none","0"]);function z3(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!O3.has(u)&&Zr(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=zb(i,c)}class $3 extends bp{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let g=0;g<n.length;g++){let x=n[g];if(typeof x=="string"&&(x=x.trim(),mp(x))){const v=Eb(x,i.current);v!==void 0&&(n[g]=v),g===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!Ab.has(a)||n.length!==2)return;const[c,u]=n,d=a1(c),m=a1(u),p=Yy(c),_=Yy(u);if(p!==_&&Na[a]){this.needsMeasurement=!0;return}if(d!==m)if(e1(d)&&e1(m))for(let g=0;g<n.length;g++){const x=n[g];typeof x=="string"&&(n[g]=parseFloat(x))}else Na[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||E3(n[c]))&&a.push(c);a.length&&z3(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Na[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var m;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=Na[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(m=this.removedTransforms)!=null&&m.length&&this.removedTransforms.forEach(([p,_])=>{n.getValue(p).set(_)}),this.resolveNoneKeyframes()}}function Tp(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const $b=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function od(t){return Hx(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Ep}=sb(queueMicrotask,!1),_i={x:!1,y:!1};function Ib(){return _i.x||_i.y}function I3(t){return t==="x"||t==="y"?_i[t]?null:(_i[t]=!0,()=>{_i[t]=!1}):_i.x||_i.y?null:(_i.x=_i.y=!0,()=>{_i.x=_i.y=!1})}function Pb(t,n){const i=Tp(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function P3(t){return!(t.pointerType==="touch"||Ib())}function H3(t,n,i={}){const[a,c,u]=Pb(t,i);return a.forEach(d=>{let m=!1,p=!1,_;const g=()=>{d.removeEventListener("pointerleave",S)},x=k=>{_&&(_(k),_=void 0),g()},v=k=>{m=!1,window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",v),p&&(p=!1,x(k))},w=()=>{m=!0,window.addEventListener("pointerup",v,c),window.addEventListener("pointercancel",v,c)},S=k=>{if(k.pointerType!=="touch"){if(m){p=!0;return}x(k)}},C=k=>{if(!P3(k))return;p=!1;const M=n(d,k);typeof M=="function"&&(_=M,d.addEventListener("pointerleave",S,c))};d.addEventListener("pointerenter",C,c),d.addEventListener("pointerdown",w,c)}),u}const Hb=(t,n)=>n?t===n?!0:Hb(t,n.parentElement):!1,Dp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,V3=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function U3(t){return V3.has(t.tagName)||t.isContentEditable===!0}const W3=new Set(["INPUT","SELECT","TEXTAREA"]);function Y3(t){return W3.has(t.tagName)||t.isContentEditable===!0}const id=new WeakSet;function l1(t){return n=>{n.key==="Enter"&&t(n)}}function am(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const F3=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=l1(()=>{if(id.has(i))return;am(i,"down");const c=l1(()=>{am(i,"up")}),u=()=>am(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function c1(t){return Dp(t)&&!Ib()}const u1=new WeakSet;function X3(t,n,i={}){const[a,c,u]=Pb(t,i),d=m=>{const p=m.currentTarget;if(!c1(m)||u1.has(m))return;id.add(p),i.stopPropagation&&u1.add(m);const _=n(p,m),g=(w,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",v),id.has(p)&&id.delete(p),c1(w)&&typeof _=="function"&&_(w,{success:S})},x=w=>{g(w,p===window||p===document||i.useGlobalTarget||Hb(p,w.target))},v=w=>{g(w,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",v,c)};return a.forEach(m=>{(i.useGlobalTarget?window:m).addEventListener("pointerdown",d,c),od(m)&&(m.addEventListener("focus",_=>F3(_,c)),!U3(m)&&!m.hasAttribute("tabindex")&&(m.tabIndex=0))}),u}function Td(t){return Hx(t)&&"ownerSVGElement"in t}const ad=new WeakMap;let Aa;const Vb=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:Td(a)&&"getBBox"in a?a.getBBox()[n]:a[i],q3=Vb("inline","width","offsetWidth"),G3=Vb("block","height","offsetHeight");function K3({target:t,borderBoxSize:n}){var i;(i=ad.get(t))==null||i.forEach(a=>{a(t,{get width(){return q3(t,n)},get height(){return G3(t,n)}})})}function Q3(t){t.forEach(K3)}function Z3(){typeof ResizeObserver>"u"||(Aa=new ResizeObserver(Q3))}function J3(t,n){Aa||Z3();const i=Tp(t);return i.forEach(a=>{let c=ad.get(a);c||(c=new Set,ad.set(a,c)),c.add(n),Aa==null||Aa.observe(a)}),()=>{i.forEach(a=>{const c=ad.get(a);c==null||c.delete(n),c!=null&&c.size||Aa==null||Aa.unobserve(a)})}}const rd=new Set;let Fr;function eC(){Fr=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};rd.forEach(n=>n(t))},window.addEventListener("resize",Fr)}function tC(t){return rd.add(t),Fr||eC(),()=>{rd.delete(t),!rd.size&&typeof Fr=="function"&&(window.removeEventListener("resize",Fr),Fr=void 0)}}function d1(t,n){return typeof t=="function"?tC(t):J3(t,n)}function Ub(t){return Td(t)&&t.tagName==="svg"}function nC(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],m=pb(c,u,d);return n?m(a):m}const sC=[...Bb,zs,yi],oC=t=>sC.find(Lb(t)),f1=()=>({translate:0,scale:1,origin:0,originPoint:0}),Xr=()=>({x:f1(),y:f1()}),h1=()=>({min:0,max:0}),Os=()=>({x:h1(),y:h1()}),hc=new WeakMap;function Ed(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function mc(t){return typeof t=="string"||Array.isArray(t)}const Ap=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Rp=["initial",...Ap];function Dd(t){return Ed(t.animate)||Rp.some(n=>mc(t[n]))}function Wb(t){return!!(Dd(t)||t.variants)}function iC(t,n,i){for(const a in n){const c=n[a],u=i[a];if(Vs(c))t.addValue(a,c);else if(Vs(u))t.addValue(a,Ba(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,Ba(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const Ym={current:null},Yb={current:!1},aC=typeof window<"u";function rC(){if(Yb.current=!0,!!aC)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>Ym.current=t.matches;t.addEventListener("change",n),n()}else Ym.current=!1}const m1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let vd={};function Fb(t){vd=t}function lC(){return vd}class Xb{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:m},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=bp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=xo.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,es.render(this.render,!1,!0))};const{latestValues:_,renderState:g}=m;this.latestValues=_,this.baseTarget={..._},this.initialValues=i.initial?{..._}:{},this.renderState=g,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Dd(i),this.isVariantNode=Wb(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...v}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in v){const S=v[w];_[w]!==void 0&&Vs(S)&&S.set(_[w])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,hc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Yb.current||rC(),this.shouldReduceMotion=Ym.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),na(this.notifyUpdate),na(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Mb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:m,times:p,ease:_,duration:g}=i.accelerate,x=new Cb({element:this.current,name:n,keyframes:m,times:p,ease:_,duration:Do(g)}),v=d(x);this.valueSubscriptions.set(n,()=>{v(),x.cancel()});return}const a=tl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&es.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in vd){const i=vd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Os()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<m1.length;a++){const c=m1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=iC(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=Ba(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(Px(a)||Vx(a))?a=parseFloat(a):!oC(a)&&yi.test(i)&&(a=zb(n,i)),this.setBaseTarget(n,Vs(a)?a.get():a)),Vs(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=kp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!Vs(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new dp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Ep.render(this.render)}}class qb extends Xb{constructor(){super(...arguments),this.KeyframeResolver=$3}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;Vs(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class Oa{constructor(n){this.isMounted=!1,this.node=n}update(){}}function Gb({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function cC({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function uC(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function rm(t){return t===void 0||t===1}function Fm({scale:t,scaleX:n,scaleY:i}){return!rm(t)||!rm(n)||!rm(i)}function nr(t){return Fm(t)||Kb(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Kb(t){return p1(t.x)||p1(t.y)}function p1(t){return t&&t!=="0%"}function wd(t,n,i){const a=t-i,c=n*a;return i+c}function _1(t,n,i,a,c){return c!==void 0&&(t=wd(t,c,a)),wd(t,i,a)+n}function Xm(t,n=0,i=1,a,c){t.min=_1(t.min,n,i,a,c),t.max=_1(t.max,n,i,a,c)}function Qb(t,{x:n,y:i}){Xm(t.x,n.translate,n.scale,n.originPoint),Xm(t.y,i.translate,i.scale,i.originPoint)}const g1=.999999999999,y1=1.0000000000001;function dC(t,n,i,a=!1){var m;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:_}=u.options;_&&_.props.style&&_.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(Ri(t.x,-u.scroll.offset.x),Ri(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,Qb(t,d)),a&&nr(u.latestValues)&&ld(t,u.latestValues,(m=u.layout)==null?void 0:m.layoutBox))}n.x<y1&&n.x>g1&&(n.x=1),n.y<y1&&n.y>g1&&(n.y=1)}function Ri(t,n){t.min+=n,t.max+=n}function x1(t,n,i,a,c=.5){const u=rs(t.min,t.max,c);Xm(t,n,i,u,a)}function b1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function ld(t,n,i){const a=i!=null?i:t;x1(t.x,b1(n.x,a.x),n.scaleX,n.scale,n.originX),x1(t.y,b1(n.y,a.y),n.scaleY,n.scale,n.originY)}function Zb(t,n){return Gb(uC(t.getBoundingClientRect(),n))}function fC(t,n,i){const a=Zb(t,i),{scroll:c}=n;return c&&(Ri(a.x,c.offset.x),Ri(a.y,c.offset.y)),a}const hC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},mC=el.length;function pC(t,n,i){let a="",c=!0;for(let u=0;u<mC;u++){const d=el[u],m=t[d];if(m===void 0)continue;let p=!0;if(typeof m=="number")p=m===(d.startsWith("scale")?1:0);else{const _=parseFloat(m);p=d.startsWith("scale")?_===1:_===0}if(!p||i){const _=$b(m,Mp[d]);if(!p){c=!1;const g=hC[d]||d;a+=`${g}(${_}) `}i&&(n[d]=_)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Np(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,m=!1;for(const p in n){const _=n[p];if(tl.has(p)){d=!0;continue}else if(ib(p)){c[p]=_;continue}else{const g=$b(_,Mp[p]);p.startsWith("origin")?(m=!0,u[p]=g):a[p]=g}}if(n.transform||(d||i?a.transform=pC(n,t.transform,i):a.transform&&(a.transform="none")),m){const{originX:p="50%",originY:_="50%",originZ:g=0}=u;a.transformOrigin=`${p} ${_} ${g}`}}function Jb(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function v1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const Kl={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(St.test(t))t=parseFloat(t);else return t;const i=v1(t,n.target.x),a=v1(t,n.target.y);return`${i}% ${a}%`}},_C={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=yi.parse(t);if(c.length>5)return a;const u=yi.createTransformer(t),d=typeof c[0]!="number"?1:0,m=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=m,c[1+d]/=p;const _=rs(m,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=_),typeof c[3+d]=="number"&&(c[3+d]/=_),u(c)}},qm={borderRadius:{...Kl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Kl,borderTopRightRadius:Kl,borderBottomLeftRadius:Kl,borderBottomRightRadius:Kl,boxShadow:_C};function e5(t,{layout:n,layoutId:i}){return tl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!qm[t]||t==="opacity")}function Lp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const m in a)(Vs(a[m])||c&&Vs(c[m])||e5(m,t)||((d=i==null?void 0:i.getValue(m))==null?void 0:d.liveStyle)!==void 0)&&(u[m]=a[m]);return u}function gC(t){return window.getComputedStyle(t)}class t5 extends qb{constructor(){super(...arguments),this.type="html",this.renderInstance=Jb}readValueFromInstance(n,i){var a;if(tl.has(i))return(a=this.projection)!=null&&a.isProjecting?Lm(i):$k(n,i);{const c=gC(n),u=(ib(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return Zb(n,i)}build(n,i,a){Np(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Lp(n,i,a)}}function yC(t,n){return t in n}class xC extends Xb{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(yC(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return Os()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const bC={offset:"stroke-dashoffset",array:"stroke-dasharray"},vC={offset:"strokeDashoffset",array:"strokeDasharray"};function wC(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?bC:vC;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const SC=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function n5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...m},p,_,g){var w,S;if(Np(t,m,_),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:v}=t;x.transform&&(v.transform=x.transform,delete x.transform),(v.transform||x.transformOrigin)&&(v.transformOrigin=(w=x.transformOrigin)!=null?w:"50% 50%",delete x.transformOrigin),v.transform&&(v.transformBox=(S=g==null?void 0:g.transformBox)!=null?S:"fill-box",delete x.transformBox);for(const C of SC)x[C]!==void 0&&(v[C]=x[C],delete x[C]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&wC(x,c,u,d,!1)}const s5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),o5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function kC(t,n,i,a){Jb(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(s5.has(c)?c:Cp(c),n.attrs[c])}function i5(t,n,i){const a=Lp(t,n,i);for(const c in t)if(Vs(t[c])||Vs(n[c])){const u=el.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class a5 extends qb{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Os}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(tl.has(i)){const a=Ob(i);return a&&a.default||0}return i=s5.has(i)?i:Cp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return i5(n,i,a)}build(n,i,a){n5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){kC(n,i,a,c)}mount(n){this.isSVGTag=o5(n.tagName),super.mount(n)}}const CC=Rp.length;function r5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?r5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<CC;i++){const a=Rp[i],c=t.props[a];(mc(c)||c===!1)&&(n[a]=c)}return n}function l5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const jC=[...Ap].reverse(),MC=Ap.length;function TC(t){return n=>Promise.all(n.map(({animation:i,options:a})=>M3(t,i,a)))}function EC(t){let n=TC(t),i=w1(),a=!0,c=!1;const u=_=>(g,x)=>{var w;const v=rr(t,x,_==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(v){const{transition:S,transitionEnd:C,...k}=v;g={...g,...k,...C}}return g};function d(_){n=_(t)}function m(_){const{props:g}=t,x=r5(t.parent)||{},v=[],w=new Set;let S={},C=1/0;for(let M=0;M<MC;M++){const L=jC[M],D=i[L],E=g[L]!==void 0?g[L]:x[L],$=mc(E),q=L===_?D.isActive:null;q===!1&&(C=M);let R=E===x[L]&&E!==g[L]&&$;if(R&&(a||c)&&t.manuallyAnimateOnMount&&(R=!1),D.protectedKeys={...S},!D.isActive&&q===null||!E&&!D.prevProp||Ed(E)||typeof E=="boolean")continue;if(L==="exit"&&D.isActive&&q!==!0){D.prevResolvedValues&&(S={...S,...D.prevResolvedValues});continue}const I=DC(D.prevProp,E);let V=I||L===_&&D.isActive&&!R&&$||M>C&&$,J=!1;const te=Array.isArray(E)?E:[E];let pe=te.reduce(u(L),{});q===!1&&(pe={});const{prevResolvedValues:Te={}}=D,ke={...Te,...pe},Ee=Z=>{V=!0,w.has(Z)&&(J=!0,w.delete(Z)),D.needsAnimating[Z]=!0;const ge=t.getValue(Z);ge&&(ge.liveStyle=!1)};for(const Z in ke){const ge=pe[Z],Be=Te[Z];if(S.hasOwnProperty(Z))continue;let z=!1;Pm(ge)&&Pm(Be)?z=!l5(ge,Be):z=ge!==Be,z?ge!=null?Ee(Z):w.add(Z):ge!==void 0&&w.has(Z)?Ee(Z):D.protectedKeys[Z]=!0}D.prevProp=E,D.prevResolvedValues=pe,D.isActive&&(S={...S,...pe}),(a||c)&&t.blockInitialAnimation&&(V=!1);const P=R&&I;V&&(!P||J)&&v.push(...te.map(Z=>{const ge={type:L};if(typeof Z=="string"&&(a||c)&&!P&&t.manuallyAnimateOnMount&&t.parent){const{parent:Be}=t,z=rr(Be,Z);if(Be.enteringChildren&&z){const{delayChildren:oe}=z.transition||{};ge.delay=Tb(Be.enteringChildren,t,oe)}}return{animation:Z,options:ge}}))}if(w.size){const M={};if(typeof g.initial!="boolean"){const L=rr(t,Array.isArray(g.initial)?g.initial[0]:g.initial);L&&L.transition&&(M.transition=L.transition)}w.forEach(L=>{const D=t.getBaseTarget(L),E=t.getValue(L);E&&(E.liveStyle=!0),M[L]=D!=null?D:null}),v.push({animation:M})}let k=!!v.length;return a&&(g.initial===!1||g.initial===g.animate)&&!t.manuallyAnimateOnMount&&(k=!1),a=!1,c=!1,k?n(v):Promise.resolve()}function p(_,g){var v;if(i[_].isActive===g)return Promise.resolve();(v=t.variantChildren)==null||v.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(_,g)}),i[_].isActive=g;const x=m(_);for(const w in i)i[w].protectedKeys={};return x}return{animateChanges:m,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=w1(),c=!0}}}function DC(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!l5(n,t):!1}function tr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function w1(){return{animate:tr(!0),whileInView:tr(),whileHover:tr(),whileTap:tr(),whileDrag:tr(),whileFocus:tr(),exit:tr()}}function Gm(t,n){t.min=n.min,t.max=n.max}function pi(t,n){Gm(t.x,n.x),Gm(t.y,n.y)}function S1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const c5=1e-4,AC=1-c5,RC=1+c5,u5=.01,NC=0-u5,LC=0+u5;function bo(t){return t.max-t.min}function BC(t,n,i){return Math.abs(t-n)<=i}function k1(t,n,i,a=.5){t.origin=a,t.originPoint=rs(n.min,n.max,t.origin),t.scale=bo(i)/bo(n),t.translate=rs(i.min,i.max,t.origin)-t.originPoint,(t.scale>=AC&&t.scale<=RC||isNaN(t.scale))&&(t.scale=1),(t.translate>=NC&&t.translate<=LC||isNaN(t.translate))&&(t.translate=0)}function lc(t,n,i,a){k1(t.x,n.x,i.x,a?a.originX:void 0),k1(t.y,n.y,i.y,a?a.originY:void 0)}function C1(t,n,i,a=0){const c=a?rs(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+bo(n)}function OC(t,n,i,a){C1(t.x,n.x,i.x,a==null?void 0:a.x),C1(t.y,n.y,i.y,a==null?void 0:a.y)}function j1(t,n,i,a=0){const c=a?rs(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+bo(n)}function Sd(t,n,i,a){j1(t.x,n.x,i.x,a==null?void 0:a.x),j1(t.y,n.y,i.y,a==null?void 0:a.y)}function M1(t,n,i,a,c){return t-=n,t=wd(t,1/i,a),c!==void 0&&(t=wd(t,1/c,a)),t}function zC(t,n=0,i=1,a=.5,c,u=t,d=t){if(Bi.test(n)&&(n=parseFloat(n),n=rs(d.min,d.max,n/100)-d.min),typeof n!="number")return;let m=rs(u.min,u.max,a);t===u&&(m-=n),t.min=M1(t.min,n,i,m,c),t.max=M1(t.max,n,i,m,c)}function T1(t,n,[i,a,c],u,d){zC(t,n[i],n[a],n[c],n.scale,u,d)}const $C=["x","scaleX","originX"],IC=["y","scaleY","originY"];function E1(t,n,i,a){T1(t.x,n,$C,i?i.x:void 0,a?a.x:void 0),T1(t.y,n,IC,i?i.y:void 0,a?a.y:void 0)}function D1(t){return t.translate===0&&t.scale===1}function d5(t){return D1(t.x)&&D1(t.y)}function A1(t,n){return t.min===n.min&&t.max===n.max}function PC(t,n){return A1(t.x,n.x)&&A1(t.y,n.y)}function R1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function f5(t,n){return R1(t.x,n.x)&&R1(t.y,n.y)}function N1(t){return bo(t.x)/bo(t.y)}function L1(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function Di(t){return[t("x"),t("y")]}function HC(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:_,rotate:g,rotateX:x,rotateY:v,skewX:w,skewY:S}=i;_&&(a=`perspective(${_}px) ${a}`),g&&(a+=`rotate(${g}deg) `),x&&(a+=`rotateX(${x}deg) `),v&&(a+=`rotateY(${v}deg) `),w&&(a+=`skewX(${w}deg) `),S&&(a+=`skewY(${S}deg) `)}const m=t.x.scale*n.x,p=t.y.scale*n.y;return(m!==1||p!==1)&&(a+=`scale(${m}, ${p})`),a||"none"}const h5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],VC=h5.length,B1=t=>typeof t=="string"?parseFloat(t):t,O1=t=>typeof t=="number"||St.test(t);function UC(t,n,i,a,c,u){var d,m,p,_;c?(t.opacity=rs(0,(d=i.opacity)!=null?d:1,WC(a)),t.opacityExit=rs((m=n.opacity)!=null?m:1,0,YC(a))):u&&(t.opacity=rs((p=n.opacity)!=null?p:1,(_=i.opacity)!=null?_:1,a));for(let g=0;g<VC;g++){const x=h5[g];let v=z1(n,x),w=z1(i,x);if(v===void 0&&w===void 0)continue;v||(v=0),w||(w=0),v===0||w===0||O1(v)===O1(w)?(t[x]=Math.max(rs(B1(v),B1(w),a),0),(Bi.test(w)||Bi.test(v))&&(t[x]+="%")):t[x]=w}(n.rotate||i.rotate)&&(t.rotate=rs(n.rotate||0,i.rotate||0,a))}function z1(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const WC=m5(0,.5,Qx),YC=m5(.5,.95,ii);function m5(t,n,i){return a=>a<t?0:a>n?1:i(Qr(t,n,a))}function p5(t,n,i){const a=Vs(t)?t:Ba(t);return a.start(Sp("",a,n,i)),a.animation}function pc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const FC=(t,n)=>t.depth-n.depth;class XC{constructor(){this.children=[],this.isDirty=!1}add(n){cp(this.children,n),this.isDirty=!0}remove(n){Kr(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(FC),this.isDirty=!1,this.children.forEach(n)}}function qC(t,n){const i=xo.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(na(a),t(u-n))};return es.setup(a,!0),()=>na(a)}function cd(t){return Vs(t)?t.get():t}class GC{constructor(){this.members=[]}add(n){cp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(Kr(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(Kr(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const ud={hasAnimatedSinceResize:!0,hasEverUpdated:!1},lm=["","X","Y","Z"],KC=1e3;let QC=0;function cm(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function _5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=Nb(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",es,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&_5(a)}function g5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},m=n==null?void 0:n()){this.id=QC++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(e8),this.nodes.forEach(a8),this.nodes.forEach(r8),this.nodes.forEach(t8)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new XC)}addEventListener(d,m){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new dp),this.eventHandlers.get(d).add(m)}notifyListeners(d,...m){const p=this.eventHandlers.get(d);p&&p.notify(...m)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Td(d)&&!Ub(d),this.instance=d;const{layoutId:m,layout:p,visualElement:_}=this.options;if(_&&!_.current&&_.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||m)&&(this.isLayoutDirty=!0),t){let g,x=0;const v=()=>this.root.updateBlockedByResize=!1;es.read(()=>{x=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==x&&(x=w,this.root.updateBlockedByResize=!0,g&&g(),g=qC(v,250),ud.hasAnimatedSinceResize&&(ud.hasAnimatedSinceResize=!1,this.nodes.forEach(P1)))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&_&&(m||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:x,hasRelativeLayoutChanged:v,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||_.getDefaultTransition()||f8,{onLayoutAnimationStart:C,onLayoutAnimationComplete:k}=_.getProps(),M=!this.targetLayout||!f5(this.targetLayout,w),L=!x&&v;if(this.options.layoutRoot||this.resumeFrom||L||x&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const D={...wp(S,"layout"),onPlay:C,onComplete:k};(_.shouldReduceMotion||this.options.layoutRoot)&&(D.delay=0,D.type=!1),this.startAnimation(D),this.setAnimationOrigin(g,L)}else x||P1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),na(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(l8),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&_5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const x=this.path[g];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:m,layout:p}=this.options;if(m===void 0&&!p)return;const _=this.getTransformTemplate();this.prevTransformTemplateValue=_?_(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(s8),this.nodes.forEach($1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(I1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(o8),this.nodes.forEach(i8),this.nodes.forEach(ZC),this.nodes.forEach(JC)):this.nodes.forEach(I1),this.clearAllSnapshots();const m=xo.now();eo.delta=Oi(0,1e3/60,m-eo.timestamp),eo.timestamp=m,eo.isProcessing=!0,em.update.process(eo),em.preRender.process(eo),em.render.process(eo),eo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ep.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(n8),this.sharedNodes.forEach(c8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,es.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){es.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!bo(this.snapshot.measuredBox.x)&&!bo(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Os()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(m=!1),m&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!d5(this.projectionDelta),p=this.getTransformTemplate(),_=p?p(this.latestValues,""):void 0,g=_!==this.prevTransformTemplateValue;d&&this.instance&&(m||nr(this.latestValues)||g)&&(c(this.instance,_),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const m=this.measurePageBox();let p=this.removeElementScroll(m);return d&&(p=this.removeTransform(p)),h8(p),{animationId:this.root.animationId,measuredBox:m,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var _;const{visualElement:d}=this.options;if(!d)return Os();const m=d.measureViewportBox();if(!(((_=this.scroll)==null?void 0:_.wasRoot)||this.path.some(m8))){const{scroll:g}=this.root;g&&(Ri(m.x,g.offset.x),Ri(m.y,g.offset.y))}return m}removeElementScroll(d){var p;const m=Os();if(pi(m,d),(p=this.scroll)!=null&&p.wasRoot)return m;for(let _=0;_<this.path.length;_++){const g=this.path[_],{scroll:x,options:v}=g;g!==this.root&&x&&v.layoutScroll&&(x.wasRoot&&pi(m,d),Ri(m.x,x.offset.x),Ri(m.y,x.offset.y))}return m}applyTransform(d,m=!1,p){var g,x;const _=p||Os();pi(_,d);for(let v=0;v<this.path.length;v++){const w=this.path[v];!m&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(Ri(_.x,-w.scroll.offset.x),Ri(_.y,-w.scroll.offset.y)),nr(w.latestValues)&&ld(_,w.latestValues,(g=w.layout)==null?void 0:g.layoutBox)}return nr(this.latestValues)&&ld(_,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),_}removeTransform(d){var p;const m=Os();pi(m,d);for(let _=0;_<this.path.length;_++){const g=this.path[_];if(!nr(g.latestValues))continue;let x;g.instance&&(Fm(g.latestValues)&&g.updateSnapshot(),x=Os(),pi(x,g.measurePageBox())),E1(m,g.latestValues,(p=g.snapshot)==null?void 0:p.layoutBox,x)}return nr(this.latestValues)&&E1(m,this.latestValues),m}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==eo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==m;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:x}=this.options;if(!this.layout||!(g||x))return;this.resolvedRelativeTargetAt=eo.timestamp;const v=this.getClosestProjectingParent();v&&this.linkedParentVersion!==v.layoutVersion&&!v.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&v&&v.layout?this.createRelativeTarget(v,this.layout.layoutBox,v.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Os(),this.targetWithTransforms=Os()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),OC(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):pi(this.target,this.layout.layoutBox),Qb(this.target,this.targetDelta)):pi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?this.createRelativeTarget(v,this.target,v.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Fm(this.parent.latestValues)||Kb(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,m,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Os(),this.relativeTargetOrigin=Os(),Sd(this.relativeTargetOrigin,m,p,this.options.layoutAnchor||void 0),pi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),m=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===eo.timestamp&&(p=!1),p)return;const{layout:_,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(_||g))return;pi(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,v=this.treeScale.y;dC(this.layoutCorrected,this.treeScale,this.path,m),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Os());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(S1(this.prevProjectionDelta.x,this.projectionDelta.x),S1(this.prevProjectionDelta.y,this.projectionDelta.y)),lc(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==v||!L1(this.projectionDelta.x,this.prevProjectionDelta.x)||!L1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var m;if((m=this.options.visualElement)==null||m.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Xr(),this.projectionDelta=Xr(),this.projectionDeltaWithTransform=Xr()}setAnimationOrigin(d,m=!1){const p=this.snapshot,_=p?p.latestValues:{},g={...this.latestValues},x=Xr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const v=Os(),w=p?p.source:void 0,S=this.layout?this.layout.source:void 0,C=w!==S,k=this.getStack(),M=!k||k.members.length<=1,L=!!(C&&!M&&this.options.crossfade===!0&&!this.path.some(d8));this.animationProgress=0;let D;this.mixTargetDelta=E=>{const $=E/1e3;H1(x.x,d.x,$),H1(x.y,d.y,$),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Sd(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),u8(this.relativeTarget,this.relativeTargetOrigin,v,$),D&&PC(this.relativeTarget,D)&&(this.isProjectionDirty=!1),D||(D=Os()),pi(D,this.relativeTarget)),C&&(this.animationValues=g,UC(g,_,this.latestValues,$,L,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=$},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var m,p,_;this.notifyListeners("animationStart"),(m=this.currentAnimation)==null||m.stop(),(_=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||_.stop(),this.pendingAnimation&&(na(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=es.update(()=>{ud.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ba(0)),this.motionValue.jump(0,!1),this.currentAnimation=p5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(KC),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:m,target:p,layout:_,latestValues:g}=d;if(!(!m||!p||!_)){if(this!==d&&this.layout&&_&&y5(this.options.animationType,this.layout.layoutBox,_.layoutBox)){p=this.target||Os();const x=bo(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const v=bo(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+v}pi(m,p),ld(m,g),lc(this.projectionDeltaWithTransform,this.layoutCorrected,m,g)}}registerSharedNode(d,m){this.sharedNodes.has(d)||this.sharedNodes.set(d,new GC),this.sharedNodes.get(d).add(m);const _=m.options.initialPromotionConfig;m.promote({transition:_?_.transition:void 0,preserveFollowOpacity:_&&_.shouldPreserveFollowOpacity?_.shouldPreserveFollowOpacity(m):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var m;const{layoutId:d}=this.options;return d?((m=this.getStack())==null?void 0:m.lead)||this:this}getPrevLead(){var m;const{layoutId:d}=this.options;return d?(m=this.getStack())==null?void 0:m.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:m,preserveFollowOpacity:p}={}){const _=this.getStack();_&&_.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let m=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(m=!0),!m)return;const _={};p.z&&cm("z",d,_,this.animationValues);for(let g=0;g<lm.length;g++)cm(`rotate${lm[g]}`,d,_,this.animationValues),cm(`skew${lm[g]}`,d,_,this.animationValues);d.render();for(const g in _)d.setStaticValue(g,_[g]),this.animationValues&&(this.animationValues[g]=_[g]);d.scheduleRender()}applyProjectionStyles(d,m){var S,C;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=cd(m==null?void 0:m.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const _=this.getLead();if(!this.projectionDelta||!this.layout||!_.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=cd(m==null?void 0:m.pointerEvents)||""),this.hasProjected&&!nr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=_.animationValues||_.latestValues;this.applyTransformsToTarget();let x=HC(this.projectionDeltaWithTransform,this.treeScale,g);p&&(x=p(g,x)),d.transform=x;const{x:v,y:w}=this.projectionDelta;d.transformOrigin=`${v.origin*100}% ${w.origin*100}% 0`,_.animationValues?d.opacity=_===this?(C=(S=g.opacity)!=null?S:this.latestValues.opacity)!=null?C:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=_===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const k in qm){if(g[k]===void 0)continue;const{correct:M,applyTo:L,isCSSVariable:D}=qm[k],E=x==="none"?g[k]:M(g[k],_);if(L){const $=L.length;for(let q=0;q<$;q++)d[L[q]]=E}else D?this.options.visualElement.renderState.vars[k]=E:d[k]=E}this.options.layoutId&&(d.pointerEvents=_===this?cd(m==null?void 0:m.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var m;return(m=d.currentAnimation)==null?void 0:m.stop()}),this.root.nodes.forEach($1),this.root.sharedNodes.clear()}}}function ZC(t){t.updateLayout()}function JC(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")Di(x=>{const v=d?n.measuredBox[x]:n.layoutBox[x],w=bo(v);v.min=a[x].min,v.max=v.min+w});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";Gm(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else y5(u,n.layoutBox,a)&&Di(x=>{const v=d?n.measuredBox[x]:n.layoutBox[x],w=bo(a[x]);v.max=v.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+w)});const m=Xr();lc(m,a,n.layoutBox);const p=Xr();d?lc(p,t.applyTransform(c,!0),n.measuredBox):lc(p,a,n.layoutBox);const _=!d5(m);let g=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:v,layout:w}=x;if(v&&w){const S=t.options.layoutAnchor||void 0,C=Os();Sd(C,n.layoutBox,v.layoutBox,S);const k=Os();Sd(k,a,w.layoutBox,S),f5(C,k)||(g=!0),x.options.layoutRoot&&(t.relativeTarget=k,t.relativeTargetOrigin=C,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:m,hasLayoutChanged:_,hasRelativeLayoutChanged:g})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function e8(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function t8(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function n8(t){t.clearSnapshot()}function $1(t){t.clearMeasurements()}function s8(t){t.isLayoutDirty=!0,t.updateLayout()}function I1(t){t.isLayoutDirty=!1}function o8(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function i8(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function P1(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function a8(t){t.resolveTargetDelta()}function r8(t){t.calcProjection()}function l8(t){t.resetSkewAndRotation()}function c8(t){t.removeLeadSnapshot()}function H1(t,n,i){t.translate=rs(n.translate,0,i),t.scale=rs(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function V1(t,n,i,a){t.min=rs(n.min,i.min,a),t.max=rs(n.max,i.max,a)}function u8(t,n,i,a){V1(t.x,n.x,i.x,a),V1(t.y,n.y,i.y,a)}function d8(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const f8={duration:.45,ease:[.4,0,.1,1]},U1=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),W1=U1("applewebkit/")&&!U1("chrome/")?Math.round:ii;function Y1(t){t.min=W1(t.min),t.max=W1(t.max)}function h8(t){Y1(t.x),Y1(t.y)}function y5(t,n,i){return t==="position"||t==="preserve-aspect"&&!BC(N1(n),N1(i),.2)}function m8(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const p8=g5({attachResizeListener:(t,n)=>pc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),um={current:void 0},x5=g5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!um.current){const t=new p8({});t.mount(window),t.setOptions({layoutScroll:!0}),um.current=t}return um.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Ad=y.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function F1(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function _8(...t){return n=>{let i=!1;const a=t.map(c=>{const u=F1(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():F1(t[c],null)}}}}function g8(...t){return y.useCallback(_8(...t),t)}class y8 extends y.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(od(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=od(a)&&a.offsetWidth||0,u=od(a)&&a.offsetHeight||0,d=getComputedStyle(i),m=this.props.sizeRef.current;m.height=parseFloat(d.height),m.width=parseFloat(d.width),m.top=i.offsetTop,m.left=i.offsetLeft,m.right=c-m.width-m.left,m.bottom=u-m.height-m.top}return null}componentDidUpdate(){}render(){return this.props.children}}function x8({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var v,w;const d=y.useId(),m=y.useRef(null),p=y.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:_}=y.useContext(Ad),g=(w=(v=t.props)==null?void 0:v.ref)!=null?w:t==null?void 0:t.ref,x=g8(m,g);return y.useInsertionEffect(()=>{const{width:S,height:C,top:k,left:M,right:L,bottom:D}=p.current;if(n||u===!1||!m.current||!S||!C)return;const E=i==="left"?`left: ${M}`:`right: ${L}`,$=a==="bottom"?`bottom: ${D}`:`top: ${k}`;m.current.dataset.motionPopId=d;const q=document.createElement("style");_&&(q.nonce=_);const R=c!=null?c:document.head;return R.appendChild(q),q.sheet&&q.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${C}px !important;
            ${E}px !important;
            ${$}px !important;
          }
        `),()=>{var I;(I=m.current)==null||I.removeAttribute("data-motion-pop-id"),R.contains(q)&&R.removeChild(q)}},[n]),l.jsx(y8,{isPresent:n,childRef:m,sizeRef:p,pop:u,children:u===!1?t:y.cloneElement(t,{ref:x})})}const b8=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:m,anchorY:p,root:_})=>{const g=yc(v8),x=y.useId();let v=!0,w=y.useMemo(()=>(v=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:S=>{g.set(S,!0);for(const C of g.values())if(!C)return;a&&a()},register:S=>(g.set(S,!1),()=>g.delete(S))}),[i,g,a]);return u&&v&&(w={...w}),y.useMemo(()=>{g.forEach((S,C)=>g.set(C,!1))},[i]),y.useEffect(()=>{!i&&!g.size&&a&&a()},[i]),t=l.jsx(x8,{pop:d==="popLayout",isPresent:i,anchorX:m,anchorY:p,root:_,children:t}),l.jsx(jd.Provider,{value:w,children:t})};function v8(){return new Map}function b5(t=!0){const n=y.useContext(jd);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=y.useId();y.useEffect(()=>{if(t)return c(u)},[t]);const d=y.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const Ku=t=>t.key||"";function X1(t){const n=[];return y.Children.forEach(t,i=>{y.isValidElement(i)&&n.push(i)}),n}const Rd=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:m="left",anchorY:p="top",root:_})=>{const[g,x]=b5(d),v=y.useMemo(()=>X1(t),[t]),w=d&&!g?[]:v.map(Ku),S=y.useRef(!0),C=y.useRef(v),k=yc(()=>new Map),M=y.useRef(new Set),[L,D]=y.useState(v),[E,$]=y.useState(v);lp(()=>{S.current=!1,C.current=v;for(let I=0;I<E.length;I++){const V=Ku(E[I]);w.includes(V)?(k.delete(V),M.current.delete(V)):k.get(V)!==!0&&k.set(V,!1)}},[E,w.length,w.join("-")]);const q=[];if(v!==L){let I=[...v];for(let V=0;V<E.length;V++){const J=E[V],te=Ku(J);w.includes(te)||(I.splice(V,0,J),q.push(J))}return u==="wait"&&q.length&&(I=q),$(X1(I)),D(v),null}const{forceRender:R}=y.useContext(rp);return l.jsx(l.Fragment,{children:E.map(I=>{const V=Ku(I),J=d&&!g?!1:v===E||w.includes(V),te=()=>{if(M.current.has(V))return;if(k.has(V))M.current.add(V),k.set(V,!0);else return;let pe=!0;k.forEach(Te=>{Te||(pe=!1)}),pe&&(R==null||R(),$(C.current),d&&(x==null||x()),a&&a())};return l.jsx(b8,{isPresent:J,initial:!S.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:_,onExitComplete:J?void 0:te,anchorX:m,anchorY:p,children:I},V)})})},v5=y.createContext({strict:!1}),q1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let G1=!1;function w8(){if(G1)return;const t={};for(const n in q1)t[n]={isEnabled:i=>q1[n].some(a=>!!i[a])};Fb(t),G1=!0}function w5(){return w8(),lC()}function S8(t){const n=w5();for(const i in t)n[i]={...n[i],...t[i]};Fb(n)}const k8=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function kd(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||k8.has(t)}let S5=t=>!kd(t);function C8(t){typeof t=="function"&&(S5=n=>n.startsWith("on")?!kd(n):t(n))}try{C8(require("@emotion/is-prop-valid").default)}catch{}function j8(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||Vs(t[c])||(S5(c)||i===!0&&kd(c)||!n&&!kd(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Nd=y.createContext({});function M8(t,n){if(Dd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||mc(i)?i:void 0,animate:mc(a)?a:void 0}}return t.inherit!==!1?n:{}}function T8(t){const{initial:n,animate:i}=M8(t,y.useContext(Nd));return y.useMemo(()=>({initial:n,animate:i}),[K1(n),K1(i)])}function K1(t){return Array.isArray(t)?t.join(" "):t}const Bp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function k5(t,n,i){for(const a in n)!Vs(n[a])&&!e5(a,i)&&(t[a]=n[a])}function E8({transformTemplate:t},n){return y.useMemo(()=>{const i=Bp();return Np(i,n,t),Object.assign({},i.vars,i.style)},[n])}function D8(t,n){const i=t.style||{},a={};return k5(a,i,t),Object.assign(a,E8(t,n)),a}function A8(t,n){const i={},a=D8(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const C5=()=>({...Bp(),attrs:{}});function R8(t,n,i,a){const c=y.useMemo(()=>{const u=C5();return n5(u,n,o5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};k5(u,t.style,t),c.style={...u,...c.style}}return c}const N8=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Op(t){return typeof t!="string"||t.includes("-")?!1:!!(N8.indexOf(t)>-1||/[A-Z]/u.test(t))}function L8(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Op(t))?R8:A8)(n,a,c,t),_=j8(n,typeof t=="string",u),g=t!==y.Fragment?{..._,...p,ref:i}:{},{children:x}=n,v=y.useMemo(()=>Vs(x)?x.get():x,[x]);return y.createElement(t,{...g,children:v})}function B8({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:O8(i,a,c,t),renderState:n()}}function O8(t,n,i,a){const c={},u=a(t,{});for(const v in u)c[v]=cd(u[v]);let{initial:d,animate:m}=t;const p=Dd(t),_=Wb(t);n&&_&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),m===void 0&&(m=n.animate));let g=i?i.initial===!1:!1;g=g||d===!1;const x=g?m:d;if(x&&typeof x!="boolean"&&!Ed(x)){const v=Array.isArray(x)?x:[x];for(let w=0;w<v.length;w++){const S=kp(t,v[w]);if(S){const{transitionEnd:C,transition:k,...M}=S;for(const L in M){let D=M[L];if(Array.isArray(D)){const E=g?D.length-1:0;D=D[E]}D!==null&&(c[L]=D)}for(const L in C)c[L]=C[L]}}}return c}const j5=t=>(n,i)=>{const a=y.useContext(Nd),c=y.useContext(jd),u=()=>B8(t,n,a,c);return i?u():yc(u)},z8=j5({scrapeMotionValuesFromProps:Lp,createRenderState:Bp}),$8=j5({scrapeMotionValuesFromProps:i5,createRenderState:C5}),I8=Symbol.for("motionComponentSymbol");function P8(t,n,i){const a=y.useRef(i);y.useInsertionEffect(()=>{a.current=i});const c=y.useRef(null);return y.useCallback(u=>{var m;u&&((m=t.onMount)==null||m.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const M5=y.createContext({});function Ur(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function H8(t,n,i,a,c,u){var D,E;const{visualElement:d}=y.useContext(Nd),m=y.useContext(v5),p=y.useContext(jd),_=y.useContext(Ad),g=_.reducedMotion,x=_.skipAnimations,v=y.useRef(null),w=y.useRef(!1);a=a||m.renderer,!v.current&&a&&(v.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g,skipAnimations:x,isSVG:u}),w.current&&v.current&&(v.current.manuallyAnimateOnMount=!0));const S=v.current,C=y.useContext(M5);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&V8(v.current,i,c,C);const k=y.useRef(!1);y.useInsertionEffect(()=>{S&&k.current&&S.update(i,p)});const M=i[Rb],L=y.useRef(!!M&&typeof window<"u"&&!((D=window.MotionHandoffIsComplete)!=null&&D.call(window,M))&&((E=window.MotionHasOptimisedAnimation)==null?void 0:E.call(window,M)));return lp(()=>{w.current=!0,S&&(k.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),L.current&&S.animationState&&S.animationState.animateChanges())}),y.useEffect(()=>{S&&(!L.current&&S.animationState&&S.animationState.animateChanges(),L.current&&(queueMicrotask(()=>{var $;($=window.MotionHandoffMarkAsComplete)==null||$.call(window,M)}),L.current=!1),S.enteringChildren=void 0)}),S}function V8(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:m,layoutScroll:p,layoutRoot:_,layoutAnchor:g,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:T5(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||m&&Ur(m),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:_,layoutAnchor:g})}function T5(t){if(t)return t.options.allowProjection!==!1?t.projection:T5(t.parent)}function dm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var _,g;a&&S8(a);const u=i?i==="svg":Op(t),d=u?$8:z8;function m(x,v){let w;const S={...y.useContext(Ad),...x,layoutId:U8(x)},{isStatic:C}=S,k=T8(x),M=d(x,C);if(!C&&typeof window<"u"){W8();const L=Y8(S);w=L.MeasureLayout,k.visualElement=H8(t,M,S,c,L.ProjectionNode,u)}return l.jsxs(Nd.Provider,{value:k,children:[w&&k.visualElement?l.jsx(w,{visualElement:k.visualElement,...S}):null,L8(t,x,P8(M,k.visualElement,v),M,C,n,u)]})}m.displayName=`motion.${typeof t=="string"?t:`create(${(g=(_=t.displayName)!=null?_:t.name)!=null?g:""})`}`;const p=y.forwardRef(m);return p[I8]=t,p}function U8({layoutId:t}){const n=y.useContext(rp).id;return n&&t!==void 0?n+"-"+t:t}function W8(t,n){y.useContext(v5).strict}function Y8(t){const n=w5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function F8(t,n){if(typeof Proxy>"u")return dm;const i=new Map,a=(u,d)=>dm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,dm(d,void 0,t,n)),i.get(d))})}const X8=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Op(t))?new a5(n):new t5(n,{allowProjection:t!==y.Fragment})};class q8 extends Oa{constructor(n){super(n),n.animationState||(n.animationState=EC(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Ed(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let G8=0;class K8 extends Oa{constructor(){super(...arguments),this.id=G8++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:m}=this.node.getProps();if(typeof d=="string"){const p=rr(this.node,d,m);if(p){const{transition:_,transitionEnd:g,...x}=p;for(const v in x)(u=this.node.getValue(v))==null||u.jump(x[v])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const Q8={animation:{Feature:q8},exit:{Feature:K8}};function wc(t){return{point:{x:t.pageX,y:t.pageY}}}const Z8=t=>n=>Dp(n)&&t(n,wc(n));function cc(t,n,i,a){return pc(t,n,Z8(i),a)}const E5=({current:t})=>t?t.ownerDocument.defaultView:null,Q1=(t,n)=>Math.abs(t-n);function J8(t,n){const i=Q1(t.x,n.x),a=Q1(t.y,n.y);return Math.sqrt(i**2+a**2)}const Z1=new Set(["auto","scroll"]);class D5{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:m}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Qu(this.lastRawMoveEventInfo,this.transformPagePoint));const w=fm(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,C=J8(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!C)return;const{point:k}=w,{timestamp:M}=eo;this.history.push({...k,timestamp:M});const{onStart:L,onMove:D}=this.handlers;S||(L&&L(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),D&&D(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=Qu(S,this.transformPagePoint),es.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:C,onSessionEnd:k,resumeAnimation:M}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const L=fm(w.type==="pointercancel"?this.lastMoveEventInfo:Qu(S,this.transformPagePoint),this.history);this.startEvent&&C&&C(w,L),k&&k(w,L)},!Dp(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=wc(n),_=Qu(p,this.transformPagePoint),{point:g}=_,{timestamp:x}=eo;this.history=[{...g,timestamp:x}];const{onSessionStart:v}=i;v&&v(n,fm(_,this.history)),this.removeListeners=xc(cc(this.contextWindow,"pointermove",this.handlePointerMove),cc(this.contextWindow,"pointerup",this.handlePointerUp),cc(this.contextWindow,"pointercancel",this.handlePointerUp)),m&&this.startScrollTracking(m)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(Z1.has(a.overflowX)||Z1.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),es.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),na(this.updatePoint)}}function Qu(t,n){return n?{point:n(t.point)}:t}function J1(t,n){return{x:t.x-n.x,y:t.y-n.y}}function fm({point:t},n){return{point:t,delta:J1(t,A5(n)),offset:J1(t,ej(n)),velocity:tj(n,.1)}}function ej(t){return t[0]}function A5(t){return t[t.length-1]}function tj(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=A5(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>Do(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>Do(n)*2&&(a=t[1]);const u=oi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function nj(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?rs(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?rs(i,t,a.max):Math.min(t,i)),t}function ex(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function sj(t,{top:n,left:i,bottom:a,right:c}){return{x:ex(t.x,i,c),y:ex(t.y,n,a)}}function tx(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function oj(t,n){return{x:tx(t.x,n.x),y:tx(t.y,n.y)}}function ij(t,n){let i=.5;const a=bo(t),c=bo(n);return c>a?i=Qr(n.min,n.max-a,t.min):a>c&&(i=Qr(t.min,t.max-c,n.min)),Oi(0,1,i)}function aj(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const Km=.35;function rj(t=Km){return t===!1?t=0:t===!0&&(t=Km),{x:nx(t,"left","right"),y:nx(t,"top","bottom")}}function nx(t,n,i){return{min:sx(t,n),max:sx(t,i)}}function sx(t,n){return typeof t=="number"?t:t[n]||0}const lj=new WeakMap;class cj{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Os(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(wc(x).point),this.stopAnimation()},d=(x,v)=>{const{drag:w,dragPropagation:S,onDragStart:C}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=I3(w),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Di(M=>{let L=this.getAxisMotionValue(M).get()||0;if(Bi.test(L)){const{projection:D}=this.visualElement;if(D&&D.layout){const E=D.layout.layoutBox[M];E&&(L=bo(E)*(parseFloat(L)/100))}}this.originPoint[M]=L}),C&&es.update(()=>C(x,v),!1,!0),Hm(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},m=(x,v)=>{this.latestPointerEvent=x,this.latestPanInfo=v;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:C,onDrag:k}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:M}=v;if(S&&this.currentDirection===null){this.currentDirection=dj(M),this.currentDirection!==null&&C&&C(this.currentDirection);return}this.updateAxis("x",v.point,M),this.updateAxis("y",v.point,M),this.visualElement.render(),k&&es.update(()=>k(x,v),!1,!0)},p=(x,v)=>{this.latestPointerEvent=x,this.latestPanInfo=v,this.stop(x,v),this.latestPointerEvent=null,this.latestPanInfo=null},_=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new D5(n,{onSessionStart:u,onStart:d,onMove:m,onSessionEnd:p,resumeAnimation:_},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:E5(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:m}=this.getProps();m&&es.postRender(()=>m(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!Zu(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=nj(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&Ur(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=sj(a.layoutBox,n):this.constraints=!1,this.elastic=rj(i),c!==this.constraints&&!Ur(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&Di(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=aj(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!Ur(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=fC(a,c.root,this.visualElement.getTransformPagePoint());let d=oj(c.layout.layoutBox,u);if(i){const m=i(cC(d));this.hasMutatedConstraints=!!m,m&&(d=Gb(m))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:m}=this.getProps(),p=this.constraints||{},_=Di(g=>{if(!Zu(g,i,this.currentDirection))return;let x=p&&p[g]||{};(d===!0||d===g)&&(x={min:0,max:0});const v=c?200:1e6,w=c?40:1e7,S={type:"inertia",velocity:a?n[g]:0,bounceStiffness:v,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(g,S)});return Promise.all(_).then(m)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Hm(this.visualElement,n),a.start(Sp(n,a,0,i,this.visualElement,!1))}stopAnimation(){Di(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){Di(i=>{const{drag:a}=this.getProps();if(!Zu(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:m}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-rs(d,m,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!Ur(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Di(d=>{const m=this.getAxisMotionValue(d);if(m&&this.constraints!==!1){const p=m.get();c[d]=ij({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),Di(d=>{if(!Zu(d,n,null))return;const m=this.getAxisMotionValue(d),{min:p,max:_}=this.constraints[d];m.set(rs(p,_,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;lj.set(this.visualElement,this);const n=this.visualElement.current,i=cc(n,"pointerdown",_=>{const{drag:g,dragListener:x=!0}=this.getProps(),v=_.target,w=v!==n&&Y3(v);g&&x&&!w&&this.start(_)});let a;const c=()=>{const{dragConstraints:_}=this.getProps();Ur(_)&&_.current&&(this.constraints=this.resolveRefConstraints(),a||(a=uj(n,_.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),es.read(c);const m=pc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:_,hasLayoutChanged:g})=>{this.isDragging&&g&&(Di(x=>{const v=this.getAxisMotionValue(x);v&&(this.originPoint[x]+=_[x].translate,v.set(v.get()+_[x].translate))}),this.visualElement.render())}));return()=>{m(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=Km,dragMomentum:m=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:m}}}function ox(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function uj(t,n,i){const a=d1(t,ox(i)),c=d1(n,ox(i));return()=>{a(),c()}}function Zu(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function dj(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class fj extends Oa{constructor(n){super(n),this.removeGroupControls=ii,this.removeListeners=ii,this.controls=new cj(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ii}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const hm=t=>(n,i)=>{t&&es.update(()=>t(n,i),!1,!0)};class hj extends Oa{constructor(){super(...arguments),this.removePointerDownListener=ii}onPointerDown(n){this.session=new D5(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:E5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:hm(n),onStart:hm(i),onMove:hm(a),onEnd:(u,d)=>{delete this.session,c&&es.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=cc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let mm=!1;class mj extends y.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),mm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),ud.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),mm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||es.postRender(()=>{const m=d.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Ep.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;mm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function R5(t){const[n,i]=b5(),a=y.useContext(rp);return l.jsx(mj,{...t,layoutGroup:a,switchLayoutGroup:y.useContext(M5),isPresent:n,safeToRemove:i})}const pj={pan:{Feature:hj},drag:{Feature:fj,ProjectionNode:x5,MeasureLayout:R5}};function ix(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&es.postRender(()=>u(n,wc(n)))}class _j extends Oa{mount(){const{current:n}=this.node;n&&(this.unmount=H3(n,(i,a)=>(ix(this.node,a,"Start"),c=>ix(this.node,c,"End"))))}unmount(){}}class gj extends Oa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=xc(pc(this.node.current,"focus",()=>this.onFocus()),pc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ax(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&es.postRender(()=>u(n,wc(n)))}class yj extends Oa{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=X3(n,(c,u)=>(ax(this.node,u,"Start"),(d,{success:m})=>ax(this.node,d,m?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const Qm=new WeakMap,pm=new WeakMap,xj=t=>{const n=Qm.get(t.target);n&&n(t)},bj=t=>{t.forEach(xj)};function vj({root:t,...n}){const i=t||document;pm.has(i)||pm.set(i,{});const a=pm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(bj,{root:t,...n})),a[c]}function wj(t,n,i){const a=vj(n);return Qm.set(t,i),a.observe(t),()=>{Qm.delete(t),a.unobserve(t)}}const Sj={some:0,all:1};class kj extends Oa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:Sj[c]},m=_=>{const{isIntersecting:g}=_;if(this.isInView===g||(this.isInView=g,u&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:x,onViewportLeave:v}=this.node.getProps(),w=g?x:v;w&&w(_)};this.stopObserver=wj(this.node.current,d,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(Cj(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Cj({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const jj={inView:{Feature:kj},tap:{Feature:yj},focus:{Feature:gj},hover:{Feature:_j}},Mj={layout:{ProjectionNode:x5,MeasureLayout:R5}},Tj={...Q8,...jj,...pj,...Mj},Eo=F8(Tj,X8);function Zm(t){const n=yc(()=>Ba(t)),{isStatic:i}=y.useContext(Ad);if(i){const[,a]=y.useState(t);y.useEffect(()=>n.on("change",a),[])}return n}function N5(t,n){const i=Zm(n()),a=()=>i.set(n());return a(),lp(()=>{const c=()=>es.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),na(a)}}),i}function Ej(t){rc.current=[],t();const n=N5(rc.current,t);return rc.current=void 0,n}function Ju(t,n,i,a){if(typeof t=="function")return Ej(t);const u=typeof n=="function"?n:nC(n,i,a),d=Array.isArray(t)?rx(t,u):rx([t],([p])=>u(p)),m=Array.isArray(t)?void 0:t.accelerate;return m&&!m.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...m,times:n,keyframes:i,isTransformed:!0}),d}function rx(t,n){const i=yc(()=>[]);return N5(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function zp(t){return typeof t=="object"&&!Array.isArray(t)}function L5(t,n,i,a){return t==null?[]:typeof t=="string"&&zp(n)?Tp(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function Dj(t,n,i){return t*(n+1)}function lx(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function Aj(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(Kr(t,c),a--)}}function Rj(t,n,i,a,c,u){Aj(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:rs(c,u,a[d]),easing:tb(i,d)})}function Nj(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function Lj(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const Bj="easeInOut";function Oj(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,m=new Map,p={},_=new Map;let g=0,x=0,v=0;for(let w=0;w<t.length;w++){const S=t[w];if(typeof S=="string"){_.set(S,x);continue}else if(!Array.isArray(S)){_.set(S.name,lx(x,S.at,g,_));continue}let[C,k,M={}]=S;M.at!==void 0&&(x=lx(x,M.at,g,_));let L=0;const D=(E,$,q,R=0,I=0)=>{const V=zj(E),{delay:J=0,times:te=gb(V),type:pe=n.type||"keyframes",repeat:Te,repeatType:ke,repeatDelay:Ee=0,...P}=$;let{ease:he=n.ease||"easeOut",duration:Z}=$;const ge=typeof J=="function"?J(R,I):J,Be=V.length,z=vp(pe)?pe:c==null?void 0:c[pe||"keyframes"];if(Be<=2&&z){let Se=100;if(Be===2&&Pj(V)){const Ze=V[1]-V[0];Se=Math.abs(Ze)}const $e={...n,...P};Z!==void 0&&($e.duration=Do(Z));const Xe=hb($e,Se,z);he=Xe.ease,Z=Xe.duration}Z!=null||(Z=u);const oe=x+ge;te.length===1&&te[0]===0&&(te[1]=1);const H=te.length-V.length;if(H>0&&_b(te,H),V.length===1&&V.unshift(null),Te){Z=Dj(Z,Te);const Se=[...V],$e=[...te];he=Array.isArray(he)?[...he]:[he];const Xe=[...he];for(let Ze=0;Ze<Te;Ze++){V.push(...Se);for(let st=0;st<Se.length;st++)te.push($e[st]+(Ze+1)),he.push(st===0?"linear":tb(Xe,st-1))}Nj(te,Te)}const K=oe+Z;Rj(q,V,he,te,oe,K),L=Math.max(ge+Z,L),v=Math.max(K,v)};if(Vs(C)){const E=cx(C,m);D(k,M,ux("default",E))}else{const E=L5(C,k,a,p),$=E.length;for(let q=0;q<$;q++){k=k,M=M;const R=E[q],I=cx(R,m);for(const V in k)D(k[V],$j(M,V),ux(V,I),q,$)}}g=x,x+=L}return m.forEach((w,S)=>{for(const C in w){const k=w[C];k.sort(Lj);const M=[],L=[],D=[];for(let R=0;R<k.length;R++){const{at:I,value:V,easing:J}=k[R];M.push(V),L.push(Qr(0,v,I)),D.push(J||"easeOut")}L[0]!==0&&(L.unshift(0),M.unshift(M[0]),D.unshift(Bj)),L[L.length-1]!==1&&(L.push(1),M.push(null)),d.has(S)||d.set(S,{keyframes:{},transition:{}});const E=d.get(S);E.keyframes[C]=M;const{type:$,...q}=n;E.transition[C]={...q,duration:v,ease:D,times:L,...i}}}),d}function cx(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function ux(t,n){return n[t]||(n[t]=[]),n[t]}function zj(t){return Array.isArray(t)?t:[t]}function $j(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const Ij=t=>typeof t=="number",Pj=t=>t.every(Ij);function Hj(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Td(t)&&!Ub(t)?new a5(n):new t5(n);i.mount(t),hc.set(t,i)}function Vj(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new xC(n);i.mount(t),hc.set(t,i)}function Uj(t,n){return Vs(t)||typeof t=="number"||typeof t=="string"&&!zp(n)}function B5(t,n,i,a){const c=[];if(Uj(t,n))c.push(p5(t,zp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=L5(t,n,a),d=u.length;for(let m=0;m<d;m++){const p=u[m],_=p instanceof Element?Hj:Vj;hc.has(p)||_(p);const g=hc.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(m,d)),c.push(...jp(g,{...n,transition:x},{}))}}return c}function Wj(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const m=d[0],p=Ba(0);return p.on("change",m),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return Oj(c,n,i,{spring:fc}).forEach(({keyframes:d,transition:m},p)=>{a.push(...B5(p,d,m))}),a}function Yj(t){return Array.isArray(t)&&t.some(Array.isArray)}function Fj(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let m=[],p;if(Yj(c)){const{onComplete:g,...x}=u||{};typeof g=="function"&&(p=g),m=Wj(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:g,...x}=d||{};typeof g=="function"&&(p=g),m=B5(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const _=new l3(m);return p&&_.finished.then(p),n&&(n.animations.push(_),_.finished.then(()=>{Kr(n.animations,_)})),_}return a}const dx=Fj();var Xj=Object.freeze({}),qj=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var v;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),m=this.flattenValues(i,""),p={};for(const[w,S]of Object.entries(m))p[w]=this.normalizePreservedValue(c.values[w],S,d.get(w));this.initTransitionModes(i,"",p);for(const[w,S]of Object.entries(c.values)){if(!w.endsWith(".__mode"))continue;const C=w.slice(0,-7),k=d.get(C);(k==null?void 0:k.type)==="transition"&&(p[w]=S)}const _={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,_),this.snapshots.set(t,{...p});const g=(v=this.baseValues.get(t))!=null?v:{},x={};for(const[w,S]of Object.entries(m))x[w]=this.normalizePreservedValue(g[w],S,d.get(w));for(const[w,S]of Object.entries(p))w.endsWith(".__mode")&&(x[w]=S);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const m=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);m&&(m.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:Xj}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const m=this.findControlByPath(a.controls,c);if(m)return{panelId:a.id,path:c,control:m}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,m=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!m?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const m=n?`${n}.${u}`:u,p=this.formatLabel(u),_=i==null?void 0:i[m];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:m,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:_});else if(typeof d=="number"){const{min:g,max:x,step:v}=this.inferRange(d);a.push({type:"slider",path:m,label:p,min:g,max:x,step:v,shortcut:_})}else if(typeof d=="boolean")a.push({type:"toggle",path:m,label:p,shortcut:_});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:m,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:m,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:m,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:m,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:m,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:m,label:p}):a.push({type:"text",path:m,label:p});else if(typeof d=="object"&&d!==null){const g=d,x="_collapsed"in g?!g._collapsed:!0;a.push({type:"folder",path:m,label:p,defaultOpen:x,children:this.parseConfig(g,m,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,m]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(m)&&m.length<=4&&typeof m[0]=="number")i[p]=m[0];else if(typeof m=="number"||typeof m=="boolean"||typeof m=="string")i[p]=m;else if(this.isSpringConfig(m)||this.isEasingConfig(m))i[p]=m;else if(this.isActionConfig(m))i[p]=m;else if(this.isSelectConfig(m)){const _=m.options[0],g=typeof _=="string"?_:_.value;i[p]=(a=m.default)!=null?a:g}else this.isColorConfig(m)?i[p]=(c=m.default)!=null?c:"#000000":this.isTextConfig(m)?i[p]=(u=m.default)!=null?u:"":typeof m=="object"&&m!==null&&Object.assign(i,this.flattenValues(m,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,m=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(m,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,m,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},on=new qj;function Gj(t,n,i){const a=y.useId(),c=`${t}-${a}`,u=y.useRef(n),d=JSON.stringify(n);u.current=n;const m=y.useRef(i==null?void 0:i.onAction);m.current=i==null?void 0:i.onAction;const p=y.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const _=JSON.stringify(i==null?void 0:i.shortcuts);y.useEffect(()=>(on.registerPanel(c,t,u.current,p.current),()=>on.unregisterPanel(c)),[c,t]);const g=y.useRef(!1);y.useEffect(()=>{if(!g.current){g.current=!0;return}on.updatePanel(c,t,u.current,p.current)},[c,t,d,_]),y.useEffect(()=>on.subscribeActions(c,v=>{var w;(w=m.current)==null||w.call(m,v)}),[c]);const x=y.useSyncExternalStore(v=>on.subscribe(c,v),()=>on.getValues(c),()=>on.getValues(c));return O5(n,x,"")}function O5(t,n,i){var c,u,d,m,p,_,g,x,v,w;const a={};for(const[S,C]of Object.entries(t)){if(S==="_collapsed")continue;const k=i?`${i}.${S}`:S;if(Array.isArray(C)&&C.length<=4&&typeof C[0]=="number")a[S]=(c=n[k])!=null?c:C[0];else if(typeof C=="number"||typeof C=="boolean"||typeof C=="string")a[S]=(u=n[k])!=null?u:C;else if(Kj(C)||Qj(C))a[S]=(d=n[k])!=null?d:C;else if(Zj(C))a[S]=(m=n[k])!=null?m:C;else if(Jj(C)){const M=(p=C.default)!=null?p:n7(C.options);a[S]=(_=n[k])!=null?_:M}else e7(C)?a[S]=(x=(g=n[k])!=null?g:C.default)!=null?x:"#000000":t7(C)?a[S]=(w=(v=n[k])!=null?v:C.default)!=null?w:"":typeof C=="object"&&C!==null&&(a[S]=O5(C,n,k))}return a}function nl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function Kj(t){return nl(t,"spring")}function Qj(t){return nl(t,"easing")}function Zj(t){return nl(t,"action")}function Jj(t){return nl(t,"select")&&"options"in t&&Array.isArray(t.options)}function e7(t){return nl(t,"color")}function t7(t){return nl(t,"text")}function n7(t){const n=t[0];return typeof n=="string"?n:n.value}function Jm(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function dd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(Jm(n)))}function Ql(t,n){var d,m,p,_;const i=(d=t.min)!=null?d:0,c=((m=t.max)!=null?m:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(_=t.step)!=null?_:1}function Zl(t,n,i,a,c){var _,g;const u=on.getValue(t,n),d=(_=i.min)!=null?_:0,m=(g=i.max)!=null?g:1,p=Math.max(d,Math.min(m,u+c*a));on.updateValue(t,n,dd(p,a))}function s7(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function ed(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function _m(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function z5(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=z5(i.children,n);if(a)return a}}return null}var td=4;function o7(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function i7(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=o7(n);return t.key?`${$5(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function a7(t){return t.key?`${$5(t.modifier)}${t.key.toUpperCase()}`:"Press"}function $5(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var I5=y.createContext({activePanelId:null,activePath:null});function r7({children:t}){const[n,i]=y.useState({activePanelId:null,activePath:null}),a=y.useRef(new Set),c=y.useRef(!1),u=y.useRef(null),d=y.useRef(0),m=y.useCallback(p=>{var _;for(const g of a.current){const x=on.getPanels();for(const v of x)for(const[w,S]of Object.entries(v.shortcuts)){if(!S.key||S.key.toLowerCase()!==g||((_=S.interaction)!=null?_:"scroll")!==p)continue;const C=z5(v.controls,w);if(C&&C.type==="slider")return{panelId:v.id,path:w,control:C,shortcut:S}}}return null},[]);return y.useEffect(()=>{const p=C=>{if(ed())return;const k=C.key.toLowerCase();if((k==="arrowleft"||k==="arrowright"||k==="arrowup"||k==="arrowdown")&&a.current.size>0){const E=m("scroll")||m("drag")||m("move");if(E&&E.control.type==="slider"){C.preventDefault();const $=k==="arrowright"||k==="arrowup"?1:-1,q=Ql(E.control,E.shortcut);Zl(E.panelId,E.path,E.control,q,$);return}}const M=a.current.has(k);a.current.add(k);const L=_m(C),D=on.resolveShortcutTarget(k,L);if(D&&(i({activePanelId:D.panelId,activePath:D.path}),!M&&D.control.type==="toggle")){const E=on.getValue(D.panelId,D.path);on.updateValue(D.panelId,D.path,!E)}M||(u.current=null,d.current=0)},_=C=>{const k=C.key.toLowerCase();if(a.current.delete(k),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let M=!1;for(const L of a.current){const D=_m(C),E=on.resolveShortcutTarget(L,D);if(E){i({activePanelId:E.panelId,activePath:E.path}),M=!0;break}}M||i({activePanelId:null,activePath:null})}},g=C=>{var L,D;if(ed())return;const k=_m(C);if(a.current.size>0)for(const E of a.current){const $=on.resolveShortcutTarget(E,k);if(!$)continue;const{panelId:q,path:R,control:I}=$;if(((D=(L=I.shortcut)==null?void 0:L.interaction)!=null?D:"scroll")!=="scroll"||I.type!=="slider")continue;C.preventDefault();const J=Ql(I,I.shortcut),te=C.deltaY>0?-1:1;Zl(q,R,I,J,te);return}const M=on.resolveScrollOnlyTargets();for(const{panelId:E,path:$,control:q,shortcut:R}of M){if(q.type!=="slider")continue;C.preventDefault();const I=Ql(q,R),V=C.deltaY>0?-1:1;Zl(E,$,q,I,V);return}},x=C=>{if(ed()||a.current.size===0)return;m("drag")&&(c.current=!0,u.current=C.clientX,d.current=0,C.preventDefault())},v=()=>{c.current=!1,u.current=null,d.current=0},w=C=>{if(ed()||a.current.size===0)return;if(c.current){const M=m("drag");if(M&&u.current!==null){const L=C.clientX-u.current;u.current=C.clientX,d.current+=L;const D=Ql(M.control,M.shortcut),E=Math.trunc(d.current/td);E!==0&&(d.current-=E*td,Zl(M.panelId,M.path,M.control,D,E))}return}const k=m("move");if(k){if(u.current===null){u.current=C.clientX;return}const M=C.clientX-u.current;u.current=C.clientX,d.current+=M;const L=Ql(k.control,k.shortcut),D=Math.trunc(d.current/td);D!==0&&(d.current-=D*td,Zl(k.panelId,k.path,k.control,L,D))}},S=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",_),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",v),window.addEventListener("mousemove",w),window.addEventListener("blur",S),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",_),window.removeEventListener("wheel",g),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",v),window.removeEventListener("mousemove",w),window.removeEventListener("blur",S)}},[m]),l.jsx(I5.Provider,{value:n,children:t})}var $p="M6 9.5L12 15.5L18 9.5",l7="M5 12.75L10 19L19 5",gm={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},c7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],u7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],fx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Cd({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[m,p]=y.useState(i),[_,g]=y.useState(!i),x=y.useRef(null),[v,w]=y.useState(void 0),[S,C]=y.useState(typeof window<"u"?window.innerHeight:800);y.useEffect(()=>{if(!a)return;const L=()=>C(window.innerHeight);return window.addEventListener("resize",L),()=>window.removeEventListener("resize",L)},[a]),y.useEffect(()=>{const L=x.current;if(!L)return;const D=new ResizeObserver(()=>{if(m){const E=L.offsetHeight;w($=>$===E?$:E)}});return D.observe(L),()=>D.disconnect()},[m]);const k=()=>{if(c&&a)return;const L=!m;p(L),g(!L),u==null||u(L)},M=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:k,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?m&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:fx.path,fill:"currentColor"}),fx.circles.map((L,D)=>l.jsx("circle",{cx:L.cx,cy:L.cy,r:L.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},D))]}),!a&&l.jsx(Eo.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:m?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:$p})})]}),a&&d&&m&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:L=>L.stopPropagation(),children:d})]}),l.jsx(Rd,{initial:!1,children:m&&l.jsx(Eo.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:M});const L=m?{width:280,height:v!==void 0?Math.min(v+10,S-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(Eo.div,{className:"dialkit-panel-inner",style:L,onClick:m?void 0:k,"data-collapsed":_,whileTap:m?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:M})}return M}var d7=3,f7=32,h7=200,m7=8;function uo({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:m,shortcutActive:p}){var qe;const _=y.useRef(null),g=y.useRef(null),x=y.useRef(null),v=y.useRef(null),w=y.useRef(null),[S,C]=y.useState(!1),[k,M]=y.useState(!1),[L,D]=y.useState(!1),[E,$]=y.useState(!1),[q,R]=y.useState(!1),[I,V]=y.useState(!1),[J,te]=y.useState(""),pe=y.useRef(null),Te=y.useRef(null),ke=y.useRef(!0),Ee=y.useRef(null),P=y.useRef(null),he=y.useRef(1),Z=(n-a)/(c-a)*100,ge=S||L,Be=Zm(Z),z=Ju(Be,B=>`${B}%`),oe=Ju(Be,B=>`max(5px, calc(${B}% - 9px))`),H=Zm(0),K=Ju(H,B=>`calc(100% + ${Math.abs(B)}px)`),Se=Ju(H,B=>B<0?B:0);y.useEffect(()=>{!S&&!Ee.current&&Be.jump(Z)},[Z,S,Be]);const $e=y.useCallback(B=>{const G=P.current;if(!G)return n;const be=(B-G.left)/he.current,Ye=_.current?_.current.offsetWidth:G.width,He=Math.max(0,Math.min(1,be/Ye)),ye=a+He*(c-a);return Math.max(a,Math.min(c,ye))},[a,c,n]),Xe=y.useCallback(B=>(B-a)/(c-a)*100,[a,c]),Ze=y.useCallback((B,G)=>{const ue=P.current;if(!ue)return 0;const be=G<0?ue.left-B:B-ue.right,Ye=Math.max(0,be-f7);return G*m7*Math.sqrt(Math.min(Ye/h7,1))},[]),st=y.useCallback(B=>{if(!I&&(B.preventDefault(),B.target.setPointerCapture(B.pointerId),Te.current={x:B.clientX,y:B.clientY},ke.current=!0,C(!0),_.current)){P.current=_.current.getBoundingClientRect();const G=_.current.offsetWidth;he.current=P.current.width/G}},[I]),Gt=y.useCallback(B=>{if(!S||!Te.current)return;const G=B.clientX-Te.current.x,ue=B.clientY-Te.current.y,be=Math.sqrt(G*G+ue*ue);if(ke.current&&be>d7&&(ke.current=!1,M(!0)),!ke.current){const Ye=P.current;Ye&&(B.clientX<Ye.left?H.jump(Ze(B.clientX,-1)):B.clientX>Ye.right?H.jump(Ze(B.clientX,1)):H.jump(0));const He=$e(B.clientX),ye=Xe(He);Ee.current&&(Ee.current.stop(),Ee.current=null),Be.jump(ye),i(dd(He,u))}},[S,$e,Xe,i,Be,H,Ze]),rn=y.useCallback(B=>{if(S){if(ke.current){const G=$e(B.clientX),be=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((G-a)/u)*u)):s7(G,a,c),Ye=Xe(be);Ee.current&&Ee.current.stop(),Ee.current=dx(Be,Ye,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{Ee.current=null}}),i(dd(be,u))}H.get()!==0&&dx(H,0,{type:"spring",visualDuration:.35,bounce:.15}),C(!1),M(!1),Te.current=null}},[S,$e,Xe,i,a,c,Be,H]);y.useEffect(()=>(E&&!I&&!q?pe.current=setTimeout(()=>{R(!0)},800):!E&&!I&&(pe.current&&(clearTimeout(pe.current),pe.current=null),R(!1)),()=>{pe.current&&clearTimeout(pe.current)}),[E,I,q]),y.useEffect(()=>{I&&x.current&&(x.current.focus(),x.current.select())},[I]);const Ot=B=>{te(B.target.value)},yn=()=>{const B=parseFloat(J);if(!isNaN(B)){const G=Math.max(a,Math.min(c,B));i(dd(G,u))}V(!1),$(!1),R(!1)},an=B=>{q&&(B.stopPropagation(),B.preventDefault(),V(!0),te(n.toFixed(Jm(u))))},Sn=B=>{B.key==="Enter"?yn():B.key==="Escape"&&(V(!1),$(!1))},hn=()=>{yn()},mn=n.toFixed(Jm(u)),X=8,Re=10,ot=10;let Je=30,it=78;const Ae=(qe=_.current)==null?void 0:qe.offsetWidth;Ae&&Ae>0&&(v.current&&(Je=(Re+v.current.offsetWidth+X)/Ae*100),w.current&&(it=(Ae-ot-w.current.offsetWidth-X)/Ae*100));const ut=Z<Je||Z>it,Ct=ge?ut?.1:k?.9:.5:0,$t=(c-a)/u,Ht=$t<=10?Array.from({length:$t-1},(B,G)=>{const ue=(G+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${ue}%`}},G)}):Array.from({length:9},(B,G)=>{const ue=(G+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${ue}%`}},G)});return l.jsx("div",{ref:_,className:"dialkit-slider-wrapper",children:l.jsxs(Eo.div,{ref:g,className:`dialkit-slider ${ge?"dialkit-slider-active":""}`,onPointerDown:st,onPointerMove:Gt,onPointerUp:rn,onMouseEnter:()=>D(!0),onMouseLeave:()=>D(!1),style:{width:K,x:Se},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:Ht}),l.jsx(Eo.div,{className:"dialkit-slider-fill",style:{width:z}}),l.jsx(Eo.div,{className:"dialkit-slider-handle",style:{left:oe,y:"-50%"},animate:{opacity:Ct,scaleX:ge?1:.25,scaleY:ge&&ut?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:v,className:"dialkit-slider-label",children:[t,m&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:i7(m)})]}),I?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:J,onChange:Ot,onKeyDown:Sn,onBlur:hn,onClick:B=>B.stopPropagation(),onMouseDown:B=>B.stopPropagation()}):l.jsx("span",{ref:w,className:`dialkit-slider-value ${q?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>$(!0),onMouseLeave:()=>$(!1),onClick:an,onMouseDown:B=>q&&B.stopPropagation(),style:{cursor:q?"text":"default"},children:mn})]})})}function Ip({options:t,value:n,onChange:i}){const a=y.useRef(null),c=y.useRef(!1),[u,d]=y.useState(null),m=y.useCallback(()=>{const _=a.current;if(!_)return;const g=_.querySelector('[data-active="true"]');g&&d({left:g.offsetLeft,width:g.offsetWidth})},[]);y.useLayoutEffect(()=>{m()},[n,t.length,m]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(_=>{const g=n===_.value;return l.jsx("button",{onClick:()=>i(_.value),className:"dialkit-segmented-button","data-active":String(g),children:_.label},_.value)})]})}function p7({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:a7(a)})]}),l.jsx(Ip,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function _7(t,n,i,a){const c=[],d=a/100;let m=0,p=0;const _=1;for(let g=0;g<=100;g++){const x=g*d;c.push([x,m]);const v=-t*(m-_),w=-n*p,S=(v+w)/i;p+=S*d,m+=p*d}return c}function P5({spring:t,isSimpleMode:n}){var C,k,M,L,D;let c,u,d;if(n){const E=(C=t.visualDuration)!=null?C:.3,$=(k=t.bounce)!=null?k:.2;d=1,c=2*Math.PI/E,c=Math.pow(c,2),u=2*(1-$)*Math.sqrt(c*d)}else c=(M=t.stiffness)!=null?M:400,u=(L=t.damping)!=null?L:17,d=(D=t.mass)!=null?D:1;const m=2,p=_7(c,u,d,m),_=p.map(([,E])=>E),g=Math.min(..._),v=Math.max(..._)-g,w=p.map(([E,$],q)=>{const R=E/m*256,V=140-(($-g)/(v||1)*140*.6+140*.2);return`${q===0?"M":"L"} ${R} ${V}`}).join(" "),S=[];for(let E=1;E<4;E++){const $=64*E,q=140/4*E;S.push(l.jsx("line",{x1:$,y1:0,x2:$,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${E}`),l.jsx("line",{x1:0,y1:q,x2:256,y2:q,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${E}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[S,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:w,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function g7({panelId:t,path:n,label:i,spring:a,onChange:c}){var g,x,v,w,S;const u=y.useSyncExternalStore(C=>on.subscribe(t,C),()=>on.getSpringMode(t,n),()=>on.getSpringMode(t,n)),d=u==="simple",m=y.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?m.current.simple=a:m.current.advanced=a;const p=C=>{on.updateSpringMode(t,n,C),c(C==="simple"?m.current.simple:m.current.advanced)},_=(C,k)=>{if(d){const{stiffness:M,damping:L,mass:D,...E}=a;c({...E,[C]:k})}else{const{visualDuration:M,bounce:L,...D}=a;c({...D,[C]:k})}};return l.jsx(Cd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(P5,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Ip,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(uo,{label:"Duration",value:(g=a.visualDuration)!=null?g:.3,onChange:C=>_("visualDuration",C),min:.1,max:1,step:.05,unit:"s"}),l.jsx(uo,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:C=>_("bounce",C),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(uo,{label:"Stiffness",value:(v=a.stiffness)!=null?v:400,onChange:C=>_("stiffness",C),min:1,max:1e3,step:10}),l.jsx(uo,{label:"Damping",value:(w=a.damping)!=null?w:17,onChange:C=>_("damping",C),min:1,max:100,step:1}),l.jsx(uo,{label:"Mass",value:(S=a.mass)!=null?S:1,onChange:C=>_("mass",C),min:.1,max:10,step:.1})]})]})})}function y7({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(v,w)=>({x:a+(v+.5)*u,y:a+(1.5-w)*u}),m=d(0,0),p=d(1,1),_=d(n[0],n[1]),g=d(n[2],n[3]),x=`M ${m.x} ${m.y} C ${_.x} ${_.y}, ${g.x} ${g.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:m.x,y1:m.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function x7({panelId:t,path:n,label:i,value:a,onChange:c}){var S,C,k,M,L;const u=y.useSyncExternalStore(D=>on.subscribe(t,D),()=>on.getTransitionMode(t,n),()=>on.getTransitionMode(t,n)),d=u==="easing",m=u==="simple",p=y.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:m&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const _=a.type==="spring"?a:p.current.simple,g=a.type==="easing"?a:p.current.easing,x=D=>{on.updateTransitionMode(t,n,D),c(D==="easing"?p.current.easing:D==="simple"?p.current.simple:p.current.advanced)},v=(D,E)=>{if(m){const{stiffness:$,damping:q,mass:R,...I}=_;c({...I,[D]:E})}else{const{visualDuration:$,bounce:q,...R}=_;c({...R,[D]:E})}},w=(D,E)=>{const $=[...g.ease];$[D]=E,c({...g,ease:$})};return l.jsx(Cd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(y7,{easing:g}):l.jsx(P5,{spring:_,isSimpleMode:m}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Ip,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(uo,{label:"x1",value:g.ease[0],onChange:D=>w(0,D),min:0,max:1,step:.01}),l.jsx(uo,{label:"y1",value:g.ease[1],onChange:D=>w(1,D),min:-1,max:2,step:.01}),l.jsx(uo,{label:"x2",value:g.ease[2],onChange:D=>w(2,D),min:0,max:1,step:.01}),l.jsx(uo,{label:"y2",value:g.ease[3],onChange:D=>w(3,D),min:-1,max:2,step:.01}),l.jsx(uo,{label:"Duration",value:g.duration,onChange:D=>c({...g,duration:D}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(v7,{ease:g.ease,onChange:D=>c({...g,ease:D})})]}):m?l.jsxs(l.Fragment,{children:[l.jsx(uo,{label:"Duration",value:(S=_.visualDuration)!=null?S:.3,onChange:D=>v("visualDuration",D),min:.1,max:1,step:.05,unit:"s"}),l.jsx(uo,{label:"Bounce",value:(C=_.bounce)!=null?C:.2,onChange:D=>v("bounce",D),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(uo,{label:"Stiffness",value:(k=_.stiffness)!=null?k:400,onChange:D=>v("stiffness",D),min:1,max:1e3,step:10}),l.jsx(uo,{label:"Damping",value:(M=_.damping)!=null?M:17,onChange:D=>v("damping",D),min:1,max:100,step:1}),l.jsx(uo,{label:"Mass",value:(L=_.mass)!=null?L:1,onChange:D=>v("mass",D),min:.1,max:10,step:.1})]})]})})}function hx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function b7(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function v7({ease:t,onChange:n}){const[i,a]=y.useState(!1),[c,u]=y.useState(""),d=()=>{u(hx(t)),a(!0)},m=()=>{const _=b7(c);_&&n(_),a(!1)},p=_=>{_.key==="Enter"&&_.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:hx(t),onChange:_=>u(_.target.value),onFocus:d,onBlur:m,onKeyDown:p,spellCheck:!1})]})}function w7({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function S7(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function k7(t){return t.map(n=>typeof n=="string"?{value:n,label:S7(n)}:n)}function C7({label:t,value:n,options:i,onChange:a}){var C;const[c,u]=y.useState(!1),d=y.useRef(null),m=y.useRef(null),[p,_]=y.useState(null),[g,x]=y.useState(null),v=k7(i),w=v.find(k=>k.value===n),S=y.useCallback(()=>{const k=d.current;if(!k)return;const M=k.getBoundingClientRect(),L=8+v.length*36,D=window.innerHeight-M.bottom-4,E=D<L&&M.top>D;x({top:E?M.top-4:M.bottom+4,left:M.left,width:M.width,above:E})},[v.length]);return y.useEffect(()=>{var M;const k=(M=d.current)==null?void 0:M.closest(".dialkit-root");_(k!=null?k:document.body)},[]),y.useEffect(()=>{c&&S()},[c,S]),y.useEffect(()=>{if(!c)return;const k=M=>{const L=M.target;d.current&&!d.current.contains(L)&&m.current&&!m.current.contains(L)&&u(!1)};return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(C=w==null?void 0:w.label)!=null?C:n}),l.jsx(Eo.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:$p})})]})]}),p&&gc.createPortal(l.jsx(Rd,{children:c&&g&&l.jsx(Eo.div,{ref:m,className:"dialkit-select-dropdown",initial:{opacity:0,y:g.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:g.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:g.left,width:g.width,...g.above?{bottom:window.innerHeight-g.top,transformOrigin:"bottom"}:{top:g.top,transformOrigin:"top"}},children:v.map(k=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(k.value===n),onClick:()=>{a(k.value),u(!1)},children:k.label},k.value))})}),p)]})}var j7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function M7({label:t,value:n,onChange:i}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),m=y.useRef(null);y.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),j7.test(u)?i(u):d(n)}function _(g){g.key==="Enter"?p():g.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:g=>d(g.target.value),onBlur:p,onKeyDown:_,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var g;return(g=m.current)==null?void 0:g.click()},title:"Pick color"}),l.jsx("input",{ref:m,type:"color",className:"dialkit-color-picker-native",value:n.length===4?T7(n):n.slice(0,7),onChange:g=>i(g.target.value)})]})]})}function T7(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function E7({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=y.useState(!1),d=y.useRef(null),m=y.useRef(null),[p,_]=y.useState({top:0,left:0,width:0}),g=n.length>0,x=n.find(M=>M.id===i),v=y.useCallback(()=>{var L;if(!g)return;const M=(L=d.current)==null?void 0:L.getBoundingClientRect();M&&_({top:M.bottom+4,left:M.left,width:M.width}),u(!0)},[g]),w=y.useCallback(()=>u(!1),[]),S=y.useCallback(()=>{c?w():v()},[c,v,w]);y.useEffect(()=>{if(!c)return;const M=L=>{var E,$;const D=L.target;(E=d.current)!=null&&E.contains(D)||($=m.current)!=null&&$.contains(D)||w()};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[c,w]);const C=M=>{M?on.loadPreset(t,M):on.clearActivePreset(t),w()},k=(M,L)=>{M.stopPropagation(),on.deletePreset(t,L)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:S,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!g),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(Eo.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:g?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:$p})})]}),gc.createPortal(l.jsx(Rd,{children:c&&l.jsxs(Eo.div,{ref:m,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>C(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(M=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(M.id===i),onClick:()=>C(M.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:M.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:L=>k(L,M.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u7.map((L,D)=>l.jsx("path",{d:L},D))})})]},M.id))]})}),document.body)]})}function D7({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),m=y.useContext(I5);Object.keys(t.shortcuts).length>0;const p=y.useSyncExternalStore(k=>on.subscribe(t.id,k),()=>on.getValues(t.id),()=>on.getValues(t.id)),_=on.getPresets(t.id),g=on.getActivePresetId(t.id),x=()=>{const k=_.length+2;on.savePreset(t.id,`Version ${k}`)},v=()=>{const k=JSON.stringify(p,null,2),M=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${k}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(M),c(!0),setTimeout(()=>c(!1),1500)},w=k=>{var L,D,E;const M=p[k.path];switch(k.type){case"slider":return l.jsx(uo,{label:k.label,value:M,onChange:$=>on.updateValue(t.id,k.path,$),min:k.min,max:k.max,step:k.step,shortcut:k.shortcut,shortcutActive:m.activePanelId===t.id&&m.activePath===k.path},k.path);case"toggle":return l.jsx(p7,{label:k.label,checked:M,onChange:$=>on.updateValue(t.id,k.path,$),shortcut:k.shortcut,shortcutActive:m.activePanelId===t.id&&m.activePath===k.path},k.path);case"spring":return l.jsx(g7,{panelId:t.id,path:k.path,label:k.label,spring:M,onChange:$=>on.updateValue(t.id,k.path,$)},k.path);case"transition":return l.jsx(x7,{panelId:t.id,path:k.path,label:k.label,value:M,onChange:$=>on.updateValue(t.id,k.path,$)},k.path);case"folder":return l.jsx(Cd,{title:k.label,defaultOpen:(L=k.defaultOpen)!=null?L:!0,children:(D=k.children)==null?void 0:D.map(w)},k.path);case"text":return l.jsx(w7,{label:k.label,value:M,onChange:$=>on.updateValue(t.id,k.path,$),placeholder:k.placeholder},k.path);case"select":return l.jsx(C7,{label:k.label,value:M,options:(E=k.options)!=null?E:[],onChange:$=>on.updateValue(t.id,k.path,$)},k.path);case"color":return l.jsx(M7,{label:k.label,value:M,onChange:$=>on.updateValue(t.id,k.path,$)},k.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>on.triggerAction(t.id,k.path),children:k.label},k.path);default:return null}},S=()=>t.controls.map(w),C=l.jsxs(l.Fragment,{children:[l.jsx(Eo.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:c7.map((k,M)=>l.jsx("path",{d:k},M))})}),l.jsx(E7,{panelId:t.id,presets:_,activePresetId:g,onAdd:x}),l.jsx(Eo.button,{className:"dialkit-toolbar-add",onClick:v,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Rd,{initial:!1,mode:"wait",children:a?l.jsx(Eo.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:l7})},"check"):l.jsxs(Eo.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:gm.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:gm.sparkle,fill:"currentColor"}),l.jsx("path",{d:gm.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Cd,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:C,children:S()})})}var A7=typeof process<"u"?!1:!(typeof import.meta<"u");function R7({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=A7}){if(!c)return null;const[u,d]=y.useState([]),[m,p]=y.useState(!1),_=i==="inline",g=y.useRef(null),[x,v]=y.useState(null),[w,S]=y.useState(t),C=y.useRef(null),k=y.useRef(!1),M=y.useRef(null),L=y.useRef(!1);y.useEffect(()=>(p(!0),d(on.getPanels()),on.subscribeGlobal(()=>{d(on.getPanels())})),[]),y.useEffect(()=>{if(!g.current||_)return;const I=new MutationObserver(()=>{var te;const V=(te=g.current)==null?void 0:te.querySelector(".dialkit-panel-inner");if(!V)return;if(V.getAttribute("data-collapsed")==="true")C.current&&v(C.current);else{if(x){C.current=x;const pe=x.x+21,Te=window.innerWidth/2;S(pe<Te?"top-left":"top-right")}else S(t);v(null)}});return I.observe(g.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>I.disconnect()},[_,x,t]);const D=y.useCallback(I=>{var te;const V=(te=g.current)==null?void 0:te.querySelector(".dialkit-panel-inner");if(!V||V.getAttribute("data-collapsed")!=="true")return;const J=g.current.getBoundingClientRect();M.current={pointerX:I.clientX,pointerY:I.clientY,elX:J.left,elY:J.top},L.current=!1,k.current=!0,I.target.setPointerCapture(I.pointerId)},[]),E=y.useCallback(I=>{if(!k.current||!M.current)return;const V=I.clientX-M.current.pointerX,J=I.clientY-M.current.pointerY;!L.current&&Math.abs(V)+Math.abs(J)<4||(L.current=!0,v({x:M.current.elX+V,y:M.current.elY+J}))},[]),$=y.useCallback(I=>{var V;if(k.current&&(k.current=!1,M.current=null,L.current)){I.stopPropagation();const J=(V=g.current)==null?void 0:V.querySelector(".dialkit-panel-inner");if(J){const te=pe=>{pe.stopPropagation()};J.addEventListener("click",te,{capture:!0,once:!0})}}},[]);if(!m||typeof window>"u"||u.length===0)return null;const q=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,R=l.jsx(r7,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:g,className:"dialkit-panel","data-position":_||x?void 0:w,"data-mode":i,style:q,onPointerDown:_?void 0:D,onPointerMove:_?void 0:E,onPointerUp:_?void 0:$,children:u.map(I=>l.jsx(D7,{panel:I,defaultOpen:_||n,inline:_},I.id))})})});return _?R:gc.createPortal(R,document.body)}const N7=()=>(Gj("Git Visualizer",{preview:[1,0,1]}),null),L7=({children:t})=>l.jsxs(l.Fragment,{children:[t,l.jsx(N7,{}),l.jsx(R7,{productionEnabled:!0,defaultOpen:!0,theme:"system"}),l.jsx(B6,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});hv.createRoot(document.getElementById("root")).render(l.jsx(L7,{children:l.jsx(gw,{})}));

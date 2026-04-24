(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Tx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lh={exports:{}},Jl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function bv(){if(ey)return Jl;ey=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return Jl.Fragment=n,Jl.jsx=i,Jl.jsxs=i,Jl}var ty;function vv(){return ty||(ty=1,Lh.exports=bv()),Lh.exports}var l=vv(),Oh={exports:{}},ec={},zh={exports:{}},$h={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function wv(){return ny||(ny=1,(function(t){function n(L,ne){var U=L.length;L.push(ne);e:for(;0<U;){var he=U-1>>>1,je=L[he];if(0<c(je,ne))L[he]=ne,L[U]=je,U=he;else break e}}function i(L){return L.length===0?null:L[0]}function a(L){if(L.length===0)return null;var ne=L[0],U=L.pop();if(U!==ne){L[0]=U;e:for(var he=0,je=L.length,A=je>>>1;he<A;){var te=2*(he+1)-1,q=L[te],fe=te+1,Te=L[fe];if(0>c(q,U))fe<je&&0>c(Te,q)?(L[he]=Te,L[fe]=U,he=fe):(L[he]=q,L[te]=U,he=te);else if(fe<je&&0>c(Te,U))L[he]=Te,L[fe]=U,he=fe;else break e}}return ne}function c(L,ne){var U=L.sortIndex-ne.sortIndex;return U!==0?U:L.id-ne.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],g=[],_=1,x=null,b=3,S=!1,C=!1,j=!1,k=!1,M=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function D(L){for(var ne=i(g);ne!==null;){if(ne.callback===null)a(g);else if(ne.startTime<=L)a(g),ne.sortIndex=ne.expirationTime,n(p,ne);else break;ne=i(g)}}function $(L){if(j=!1,D(L),!C)if(i(p)!==null)C=!0,F||(F=!0,Se());else{var ne=i(g);ne!==null&&ue($,ne.startTime-L)}}var F=!1,V=-1,H=5,K=-1;function re(){return k?!0:!(t.unstable_now()-K<H)}function le(){if(k=!1,F){var L=t.unstable_now();K=L;var ne=!0;try{e:{C=!1,j&&(j=!1,z(V),V=-1),S=!0;var U=b;try{t:{for(D(L),x=i(p);x!==null&&!(x.expirationTime>L&&re());){var he=x.callback;if(typeof he=="function"){x.callback=null,b=x.priorityLevel;var je=he(x.expirationTime<=L);if(L=t.unstable_now(),typeof je=="function"){x.callback=je,D(L),ne=!0;break t}x===i(p)&&a(p),D(L)}else a(p);x=i(p)}if(x!==null)ne=!0;else{var A=i(g);A!==null&&ue($,A.startTime-L),ne=!1}}break e}finally{x=null,b=U,S=!1}ne=void 0}}finally{ne?Se():F=!1}}}var Se;if(typeof R=="function")Se=function(){R(le)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,J=Ae.port2;Ae.port1.onmessage=le,Se=function(){J.postMessage(null)}}else Se=function(){M(le,0)};function ue(L,ne){V=M(function(){L(t.unstable_now())},ne)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(L){switch(b){case 1:case 2:case 3:var ne=3;break;default:ne=b}var U=b;b=ne;try{return L()}finally{b=U}},t.unstable_requestPaint=function(){k=!0},t.unstable_runWithPriority=function(L,ne){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var U=b;b=L;try{return ne()}finally{b=U}},t.unstable_scheduleCallback=function(L,ne,U){var he=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?he+U:he):U=he,L){case 1:var je=-1;break;case 2:je=250;break;case 5:je=1073741823;break;case 4:je=1e4;break;default:je=5e3}return je=U+je,L={id:_++,callback:ne,priorityLevel:L,startTime:U,expirationTime:je,sortIndex:-1},U>he?(L.sortIndex=U,n(g,L),i(p)===null&&L===i(g)&&(j?(z(V),V=-1):j=!0,ue($,U-he))):(L.sortIndex=je,n(p,L),C||S||(C=!0,F||(F=!0,Se()))),L},t.unstable_shouldYield=re,t.unstable_wrapCallback=function(L){var ne=b;return function(){var U=b;b=ne;try{return L.apply(this,arguments)}finally{b=U}}}})($h)),$h}var sy;function Sv(){return sy||(sy=1,zh.exports=wv()),zh.exports}var Ih={exports:{}},nn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function Cv(){if(oy)return nn;oy=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function S(A){return A===null||typeof A!="object"?null:(A=b&&A[b]||A["@@iterator"],typeof A=="function"?A:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,k={};function M(A,te,q){this.props=A,this.context=te,this.refs=k,this.updater=q||C}M.prototype.isReactComponent={},M.prototype.setState=function(A,te){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,te,"setState")},M.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function z(){}z.prototype=M.prototype;function R(A,te,q){this.props=A,this.context=te,this.refs=k,this.updater=q||C}var D=R.prototype=new z;D.constructor=R,j(D,M.prototype),D.isPureReactComponent=!0;var $=Array.isArray;function F(){}var V={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function K(A,te,q){var fe=q.ref;return{$$typeof:t,type:A,key:te,ref:fe!==void 0?fe:null,props:q}}function re(A,te){return K(A.type,te,A.props)}function le(A){return typeof A=="object"&&A!==null&&A.$$typeof===t}function Se(A){var te={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(q){return te[q]})}var Ae=/\/+/g;function J(A,te){return typeof A=="object"&&A!==null&&A.key!=null?Se(""+A.key):te.toString(36)}function ue(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(F,F):(A.status="pending",A.then(function(te){A.status==="pending"&&(A.status="fulfilled",A.value=te)},function(te){A.status==="pending"&&(A.status="rejected",A.reason=te)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function L(A,te,q,fe,Te){var Ne=typeof A;(Ne==="undefined"||Ne==="boolean")&&(A=null);var ve=!1;if(A===null)ve=!0;else switch(Ne){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(A.$$typeof){case t:case n:ve=!0;break;case _:return ve=A._init,L(ve(A._payload),te,q,fe,Te)}}if(ve)return Te=Te(A),ve=fe===""?"."+J(A,0):fe,$(Te)?(q="",ve!=null&&(q=ve.replace(Ae,"$&/")+"/"),L(Te,te,q,"",function(ze){return ze})):Te!=null&&(le(Te)&&(Te=re(Te,q+(Te.key==null||A&&A.key===Te.key?"":(""+Te.key).replace(Ae,"$&/")+"/")+ve)),te.push(Te)),1;ve=0;var tt=fe===""?".":fe+":";if($(A))for(var Ge=0;Ge<A.length;Ge++)fe=A[Ge],Ne=tt+J(fe,Ge),ve+=L(fe,te,q,Ne,Te);else if(Ge=S(A),typeof Ge=="function")for(A=Ge.call(A),Ge=0;!(fe=A.next()).done;)fe=fe.value,Ne=tt+J(fe,Ge++),ve+=L(fe,te,q,Ne,Te);else if(Ne==="object"){if(typeof A.then=="function")return L(ue(A),te,q,fe,Te);throw te=String(A),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return ve}function ne(A,te,q){if(A==null)return A;var fe=[],Te=0;return L(A,fe,"","",function(Ne){return te.call(q,Ne,Te++)}),fe}function U(A){if(A._status===-1){var te=A._result;te=te(),te.then(function(q){(A._status===0||A._status===-1)&&(A._status=1,A._result=q)},function(q){(A._status===0||A._status===-1)&&(A._status=2,A._result=q)}),A._status===-1&&(A._status=0,A._result=te)}if(A._status===1)return A._result.default;throw A._result}var he=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},je={map:ne,forEach:function(A,te,q){ne(A,function(){te.apply(this,arguments)},q)},count:function(A){var te=0;return ne(A,function(){te++}),te},toArray:function(A){return ne(A,function(te){return te})||[]},only:function(A){if(!le(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return nn.Activity=x,nn.Children=je,nn.Component=M,nn.Fragment=i,nn.Profiler=c,nn.PureComponent=R,nn.StrictMode=a,nn.Suspense=p,nn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,nn.__COMPILER_RUNTIME={__proto__:null,c:function(A){return V.H.useMemoCache(A)}},nn.cache=function(A){return function(){return A.apply(null,arguments)}},nn.cacheSignal=function(){return null},nn.cloneElement=function(A,te,q){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var fe=j({},A.props),Te=A.key;if(te!=null)for(Ne in te.key!==void 0&&(Te=""+te.key),te)!H.call(te,Ne)||Ne==="key"||Ne==="__self"||Ne==="__source"||Ne==="ref"&&te.ref===void 0||(fe[Ne]=te[Ne]);var Ne=arguments.length-2;if(Ne===1)fe.children=q;else if(1<Ne){for(var ve=Array(Ne),tt=0;tt<Ne;tt++)ve[tt]=arguments[tt+2];fe.children=ve}return K(A.type,Te,fe)},nn.createContext=function(A){return A={$$typeof:d,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:u,_context:A},A},nn.createElement=function(A,te,q){var fe,Te={},Ne=null;if(te!=null)for(fe in te.key!==void 0&&(Ne=""+te.key),te)H.call(te,fe)&&fe!=="key"&&fe!=="__self"&&fe!=="__source"&&(Te[fe]=te[fe]);var ve=arguments.length-2;if(ve===1)Te.children=q;else if(1<ve){for(var tt=Array(ve),Ge=0;Ge<ve;Ge++)tt[Ge]=arguments[Ge+2];Te.children=tt}if(A&&A.defaultProps)for(fe in ve=A.defaultProps,ve)Te[fe]===void 0&&(Te[fe]=ve[fe]);return K(A,Ne,Te)},nn.createRef=function(){return{current:null}},nn.forwardRef=function(A){return{$$typeof:h,render:A}},nn.isValidElement=le,nn.lazy=function(A){return{$$typeof:_,_payload:{_status:-1,_result:A},_init:U}},nn.memo=function(A,te){return{$$typeof:g,type:A,compare:te===void 0?null:te}},nn.startTransition=function(A){var te=V.T,q={};V.T=q;try{var fe=A(),Te=V.S;Te!==null&&Te(q,fe),typeof fe=="object"&&fe!==null&&typeof fe.then=="function"&&fe.then(F,he)}catch(Ne){he(Ne)}finally{te!==null&&q.types!==null&&(te.types=q.types),V.T=te}},nn.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},nn.use=function(A){return V.H.use(A)},nn.useActionState=function(A,te,q){return V.H.useActionState(A,te,q)},nn.useCallback=function(A,te){return V.H.useCallback(A,te)},nn.useContext=function(A){return V.H.useContext(A)},nn.useDebugValue=function(){},nn.useDeferredValue=function(A,te){return V.H.useDeferredValue(A,te)},nn.useEffect=function(A,te){return V.H.useEffect(A,te)},nn.useEffectEvent=function(A){return V.H.useEffectEvent(A)},nn.useId=function(){return V.H.useId()},nn.useImperativeHandle=function(A,te,q){return V.H.useImperativeHandle(A,te,q)},nn.useInsertionEffect=function(A,te){return V.H.useInsertionEffect(A,te)},nn.useLayoutEffect=function(A,te){return V.H.useLayoutEffect(A,te)},nn.useMemo=function(A,te){return V.H.useMemo(A,te)},nn.useOptimistic=function(A,te){return V.H.useOptimistic(A,te)},nn.useReducer=function(A,te,q){return V.H.useReducer(A,te,q)},nn.useRef=function(A){return V.H.useRef(A)},nn.useState=function(A){return V.H.useState(A)},nn.useSyncExternalStore=function(A,te,q){return V.H.useSyncExternalStore(A,te,q)},nn.useTransition=function(){return V.H.useTransition()},nn.version="19.2.4",nn}var iy;function up(){return iy||(iy=1,Ih.exports=Cv()),Ih.exports}var Ph={exports:{}},Ao={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function kv(){if(ay)return Ao;ay=1;var t=up();function n(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,g,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:g,implementation:_}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Ao.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Ao.createPortal=function(p,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return u(p,g,null,_)},Ao.flushSync=function(p){var g=d.T,_=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=g,a.p=_,a.d.f()}},Ao.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},Ao.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Ao.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,S=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:S}):_==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:S,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Ao.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=h(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},Ao.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin);a.d.L(p,_,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Ao.preloadModule=function(p,g){if(typeof p=="string")if(g){var _=h(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},Ao.requestFormReset=function(p){a.d.r(p)},Ao.unstable_batchedUpdates=function(p,g){return p(g)},Ao.useFormState=function(p,g,_){return d.H.useFormState(p,g,_)},Ao.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ao.version="19.2.4",Ao}var ry;function Ex(){if(ry)return Ph.exports;ry=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Ph.exports=kv(),Ph.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function jv(){if(ly)return ec;ly=1;var t=Sv(),n=up(),i=Ex();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function g(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var w=!1,E=f.child;E;){if(E===o){w=!0,o=f,r=m;break}if(E===r){w=!0,r=f,o=m;break}E=E.sibling}if(!w){for(E=m.child;E;){if(E===o){w=!0,o=m,r=f;break}if(E===r){w=!0,r=m,o=f;break}E=E.sibling}if(!w)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function _(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=_(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),R=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),K=Symbol.for("react.activity"),re=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function Se(e){return e===null||typeof e!="object"?null:(e=le&&e[le]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Symbol.for("react.client.reference");function J(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case M:return"Profiler";case k:return"StrictMode";case $:return"Suspense";case F:return"SuspenseList";case K:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case R:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case D:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return s=e.displayName||null,s!==null?s:J(e.type)||"Memo";case H:s=e._payload,e=e._init;try{return J(e(s))}catch{}}return null}var ue=Array.isArray,L=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},he=[],je=-1;function A(e){return{current:e}}function te(e){0>je||(e.current=he[je],he[je]=null,je--)}function q(e,s){je++,he[je]=e.current,e.current=s}var fe=A(null),Te=A(null),Ne=A(null),ve=A(null);function tt(e,s){switch(q(Ne,s),q(Te,e),q(fe,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?S0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=S0(s),e=C0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}te(fe),q(fe,e)}function Ge(){te(fe),te(Te),te(Ne)}function ze(e){e.memoizedState!==null&&q(ve,e);var s=fe.current,o=C0(s,e.type);s!==o&&(q(Te,e),q(fe,o))}function ct(e){Te.current===e&&(te(fe),te(Te)),ve.current===e&&(te(ve),Gl._currentValue=U)}var et,zt;function Mt(e){if(et===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);et=s&&s[1]||"",zt=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+et+e+zt}var xt=!1;function Qt(e,s){if(!e||xt)return"";xt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var Re=function(){throw Error()};if(Object.defineProperty(Re.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Re,[])}catch(ye){var _e=ye}Reflect.construct(e,[],Re)}else{try{Re.call()}catch(ye){_e=ye}e.call(Re.prototype)}}else{try{throw Error()}catch(ye){_e=ye}(Re=e())&&typeof Re.catch=="function"&&Re.catch(function(){})}}catch(ye){if(ye&&_e&&typeof ye.stack=="string")return[ye.stack,_e.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),w=m[0],E=m[1];if(w&&E){var W=w.split(`
`),pe=E.split(`
`);for(f=r=0;r<W.length&&!W[r].includes("DetermineComponentFrameRoot");)r++;for(;f<pe.length&&!pe[f].includes("DetermineComponentFrameRoot");)f++;if(r===W.length||f===pe.length)for(r=W.length-1,f=pe.length-1;1<=r&&0<=f&&W[r]!==pe[f];)f--;for(;1<=r&&0<=f;r--,f--)if(W[r]!==pe[f]){if(r!==1||f!==1)do if(r--,f--,0>f||W[r]!==pe[f]){var Ce=`
`+W[r].replace(" at new "," at ");return e.displayName&&Ce.includes("<anonymous>")&&(Ce=Ce.replace("<anonymous>",e.displayName)),Ce}while(1<=r&&0<=f);break}}}finally{xt=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?Mt(o):""}function Oe(e,s){switch(e.tag){case 26:case 27:case 5:return Mt(e.type);case 16:return Mt("Lazy");case 13:return e.child!==s&&s!==null?Mt("Suspense Fallback"):Mt("Suspense");case 19:return Mt("SuspenseList");case 0:case 15:return Qt(e.type,!1);case 11:return Qt(e.type.render,!1);case 1:return Qt(e.type,!0);case 31:return Mt("Activity");default:return""}}function ae(e){try{var s="",o=null;do s+=Oe(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Pe=Object.prototype.hasOwnProperty,Ke=t.unstable_scheduleCallback,Ie=t.unstable_cancelCallback,ut=t.unstable_shouldYield,ot=t.unstable_requestPaint,it=t.unstable_now,rt=t.unstable_getCurrentPriorityLevel,bt=t.unstable_ImmediatePriority,Bt=t.unstable_UserBlockingPriority,Ve=t.unstable_NormalPriority,P=t.unstable_LowPriority,ee=t.unstable_IdlePriority,se=t.log,xe=t.unstable_setDisableYieldValue,He=null,Ye=null;function Me(e){if(typeof se=="function"&&xe(e),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(He,e)}catch{}}var yt=Math.clz32?Math.clz32:ft,Ue=Math.log,Nt=Math.LN2;function ft(e){return e>>>=0,e===0?32:31-(Ue(e)/Nt|0)|0}var We=256,vt=262144,Pt=4194304;function Gt(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qe(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,m=e.suspendedLanes,w=e.pingedLanes;e=e.warmLanes;var E=r&134217727;return E!==0?(r=E&~m,r!==0?f=Gt(r):(w&=E,w!==0?f=Gt(w):o||(o=E&~e,o!==0&&(f=Gt(o))))):(E=r&~m,E!==0?f=Gt(E):w!==0?f=Gt(w):o||(o=r&~e,o!==0&&(f=Gt(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function _t(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function ht(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $t(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function ln(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function gt(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ft(e,s,o,r,f,m){var w=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var E=e.entanglements,W=e.expirationTimes,pe=e.hiddenUpdates;for(o=w&~o;0<o;){var Ce=31-yt(o),Re=1<<Ce;E[Ce]=0,W[Ce]=-1;var _e=pe[Ce];if(_e!==null)for(pe[Ce]=null,Ce=0;Ce<_e.length;Ce++){var ye=_e[Ce];ye!==null&&(ye.lane&=-536870913)}o&=~Re}r!==0&&Ln(e,r,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(w&~s))}function Ln(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-yt(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function os(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-yt(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function xn(e,s){var o=s&-s;return o=(o&42)!==0?1:oo(o),(o&(e.suspendedLanes|s))!==0?0:o}function oo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function is(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ns(){var e=ne.p;return e!==0?e:(e=window.event,e===void 0?32:X0(e.type))}function Kt(e,s){var o=ne.p;try{return ne.p=e,s()}finally{ne.p=o}}var Mn=Math.random().toString(36).slice(2),en="__reactFiber$"+Mn,bn="__reactProps$"+Mn,Qe="__reactContainer$"+Mn,Tn="__reactEvents$"+Mn,So="__reactListeners$"+Mn,io="__reactHandles$"+Mn,zn="__reactResources$"+Mn,Rs="__reactMarker$"+Mn;function ao(e){delete e[en],delete e[bn],delete e[Tn],delete e[So],delete e[io]}function ro(e){var s=e[en];if(s)return s;for(var o=e.parentNode;o;){if(s=o[Qe]||o[en]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=D0(e);e!==null;){if(o=e[en])return o;e=D0(e)}return s}e=o,o=e.parentNode}return null}function bs(e){if(e=e[en]||e[Qe]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function gs(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function vs(e){var s=e[zn];return s||(s=e[zn]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function on(e){e[Rs]=!0}var oi=new Set,No={};function Zs(e,s){Xn(e,s),Xn(e+"Capture",s)}function Xn(e,s){for(No[e]=s,e=0;e<s.length;e++)oi.add(s[e])}var lo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ro={},Bo={};function Fo(e){return Pe.call(Bo,e)?!0:Pe.call(Ro,e)?!1:lo.test(e)?Bo[e]=!0:(Ro[e]=!0,!1)}function mo(e,s,o){if(Fo(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function ws(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function Bs(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function Cn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _i(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function as(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){o=""+w,m.call(this,w)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(w){o=""+w},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function ii(e){if(!e._valueTracker){var s=_i(e)?"checked":"value";e._valueTracker=as(e,s,""+e[s])}}function Us(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=_i(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function Lo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Co=/[\n"\\]/g;function Ss(e){return e.replace(Co,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Vs(e,s,o,r,f,m,w,E){e.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.type=w:e.removeAttribute("type"),s!=null?w==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+Cn(s)):e.value!==""+Cn(s)&&(e.value=""+Cn(s)):w!=="submit"&&w!=="reset"||e.removeAttribute("value"),s!=null?po(e,w,Cn(s)):o!=null?po(e,w,Cn(o)):r!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Cn(E):e.removeAttribute("name")}function vn(e,s,o,r,f,m,w,E){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){ii(e);return}o=o!=null?""+Cn(o):"",s=s!=null?""+Cn(s):o,E||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=E?e.checked:!!r,e.defaultChecked=!!r,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(e.name=w),ii(e)}function po(e,s,o){s==="number"&&Lo(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function rs(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+Cn(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function qn(e,s,o){if(s!=null&&(s=""+Cn(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+Cn(o):""}function gi(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(ue(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=Cn(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),ii(e)}function ko(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var Xo=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xt(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||Xo.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function Di(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&Xt(e,f,r)}else for(var m in s)s.hasOwnProperty(m)&&Xt(e,m,s[m])}function Ls(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qo=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Oo=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zo(e){return Oo.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Os(){}var jo=null;function js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kn=null,co=null;function Gn(e){var s=bs(e);if(s&&(e=s.stateNode)){var o=e[bn]||null;e:switch(e=s.stateNode,s.type){case"input":if(Vs(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Ss(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[bn]||null;if(!f)throw Error(a(90));Vs(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&Us(r)}break e;case"textarea":qn(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&rs(e,!!o.multiple,s,!1)}}}var ys=!1;function Kn(e,s,o){if(ys)return e(s,o);ys=!0;try{var r=e(s);return r}finally{if(ys=!1,(kn!==null||co!==null)&&(yu(),kn&&(s=kn,e=co,co=kn=null,Gn(s),e)))for(s=0;s<e.length;s++)Gn(e[s])}}function tn(e,s){var o=e.stateNode;if(o===null)return null;var r=o[bn]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Ys=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ws=!1;if(Ys)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){Ws=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{Ws=!1}var Qn=null,Mo=null,Ms=null;function _o(){if(Ms)return Ms;var e,s=Mo,o=s.length,r,f="value"in Qn?Qn.value:Qn.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var w=o-e;for(r=1;r<=w&&s[o-r]===f[m-r];r++);return Ms=f.slice(e,1<r?1-r:void 0)}function Ts(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function Es(){return!0}function uo(){return!1}function Nn(e){function s(o,r,f,m,w){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(o=e[E],this[E]=o?o(m):m[E]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Es:uo,this.isPropagationStopped=uo,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Es)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Es)},persist:function(){},isPersistent:Es}),s}var I={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oe=Nn(I),v=x({},I,{view:0,detail:0}),T=Nn(v),X,Q,de,we=x({},v,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Js,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==de&&(de&&e.type==="mousemove"?(X=e.screenX-de.screenX,Q=e.screenY-de.screenY):Q=X=0,de=e),X)},movementY:function(e){return"movementY"in e?e.movementY:Q}}),lt=Nn(we),pt=x({},we,{dataTransfer:0}),Et=Nn(pt),dt=x({},v,{relatedTarget:0}),nt=Nn(dt),Ct=x({},I,{animationName:0,elapsedTime:0,pseudoElement:0}),Ut=Nn(Ct),an=x({},I,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fn=Nn(an),_n=x({},I,{data:0}),at=Nn(_n),ls={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},To={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ai={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Go(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=ai[e])?!!s[e]:!1}function Js(){return Go}var $o=x({},v,{key:function(e){if(e.key){var s=ls[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=Ts(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?To[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Js,charCode:function(e){return e.type==="keypress"?Ts(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ts(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ri=Nn($o),En=x({},we,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zn=Nn(En),eo=x({},v,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Js}),Vi=Nn(eo),ea=x({},I,{propertyName:0,elapsedTime:0,pseudoElement:0}),Io=Nn(ea),kr=x({},we,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Be=Nn(kr),Ze=x({},I,{newState:0,oldState:0}),wt=Nn(Ze),st=[9,13,27,32],It=Ys&&"CompositionEvent"in window,Rt=null;Ys&&"documentMode"in document&&(Rt=document.documentMode);var hn=Ys&&"TextEvent"in window&&!Rt,cn=Ys&&(!It||Rt&&8<Rt&&11>=Rt),cs=" ",ks=!1;function go(e,s){switch(e){case"keyup":return st.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ta(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fo=!1;function ba(e,s){switch(e){case"compositionend":return ta(s);case"keypress":return s.which!==32?null:(ks=!0,cs);case"textInput":return e=s.data,e===cs&&ks?null:e;default:return null}}function Ko(e,s){if(fo)return e==="compositionend"||!It&&go(e,s)?(e=_o(),Ms=Mo=Qn=null,fo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return cn&&s.locale!=="ko"?null:s.data;default:return null}}var Lc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xl(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!Lc[e.type]:s==="textarea"}function bl(e,s,o,r){kn?co?co.push(r):co=[r]:kn=r,s=ku(s,"onChange"),0<s.length&&(o=new oe("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var va=null,wa=null;function Oc(e){g0(e,0)}function N(e){var s=gs(e);if(Us(s))return e}function O(e,s){if(e==="change")return s}var G=!1;if(Ys){var Y;if(Ys){var ie="oninput"in document;if(!ie){var ge=document.createElement("div");ge.setAttribute("oninput","return;"),ie=typeof ge.oninput=="function"}Y=ie}else Y=!1;G=Y&&(!document.documentMode||9<document.documentMode)}function Fe(){va&&(va.detachEvent("onpropertychange",Xe),wa=va=null)}function Xe(e){if(e.propertyName==="value"&&N(wa)){var s=[];bl(s,wa,e,js(e)),Kn(Oc,s)}}function Je(e,s,o){e==="focusin"?(Fe(),va=s,wa=o,va.attachEvent("onpropertychange",Xe)):e==="focusout"&&Fe()}function kt(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return N(wa)}function Ot(e,s){if(e==="click")return N(s)}function Zt(e,s){if(e==="input"||e==="change")return N(s)}function Jt(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var jt=typeof Object.is=="function"?Object.is:Jt;function mt(e,s){if(jt(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!Pe.call(s,f)||!jt(e[f],s[f]))return!1}return!0}function us(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ds(e,s){var o=us(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=us(o)}}function fs(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?fs(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function Sn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=Lo(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=Lo(e.document)}return s}function On(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var Wt=Ys&&"documentMode"in document&&11>=document.documentMode,qt=null,hs=null,jn=null,to=!1;function Eo(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;to||qt==null||qt!==Lo(r)||(r=qt,"selectionStart"in r&&On(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jn&&mt(jn,r)||(jn=r,r=ku(hs,"onSelect"),0<r.length&&(s=new oe("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=qt)))}function Jn(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var yi={animationend:Jn("Animation","AnimationEnd"),animationiteration:Jn("Animation","AnimationIteration"),animationstart:Jn("Animation","AnimationStart"),transitionrun:Jn("Transition","TransitionRun"),transitionstart:Jn("Transition","TransitionStart"),transitioncancel:Jn("Transition","TransitionCancel"),transitionend:Jn("Transition","TransitionEnd")},Ni={},Ri={};Ys&&(Ri=document.createElement("div").style,"AnimationEvent"in window||(delete yi.animationend.animation,delete yi.animationiteration.animation,delete yi.animationstart.animation),"TransitionEvent"in window||delete yi.transitionend.transition);function Hn(e){if(Ni[e])return Ni[e];if(!yi[e])return e;var s=yi[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in Ri)return Ni[e]=s[o];return e}var Bi=Hn("animationend"),Yi=Hn("animationiteration"),zc=Hn("animationstart"),Yd=Hn("transitionrun"),Wd=Hn("transitionstart"),Fd=Hn("transitioncancel"),Kp=Hn("transitionend"),Qp=new Map,Xd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xd.push("scrollEnd");function Li(e,s){Qp.set(e,s),Zs(s,[e])}var $c=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xi=[],jr=0,qd=0;function Ic(){for(var e=jr,s=qd=jr=0;s<e;){var o=xi[s];xi[s++]=null;var r=xi[s];xi[s++]=null;var f=xi[s];xi[s++]=null;var m=xi[s];if(xi[s++]=null,r!==null&&f!==null){var w=r.pending;w===null?f.next=f:(f.next=w.next,w.next=f),r.pending=f}m!==0&&Zp(o,f,m)}}function Pc(e,s,o,r){xi[jr++]=e,xi[jr++]=s,xi[jr++]=o,xi[jr++]=r,qd|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Gd(e,s,o,r){return Pc(e,s,o,r),Hc(e)}function Ja(e,s){return Pc(e,null,null,s),Hc(e)}function Zp(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-yt(o),e=m.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Hc(e){if(50<Ul)throw Ul=0,ih=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var Mr={};function s2(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(e,s,o,r){return new s2(e,s,o,r)}function Kd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function na(e,s){var o=e.alternate;return o===null?(o=li(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function Jp(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Uc(e,s,o,r,f,m){var w=0;if(r=e,typeof e=="function")Kd(e)&&(w=1);else if(typeof e=="string")w=lv(e,o,fe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case K:return e=li(31,o,s,f),e.elementType=K,e.lanes=m,e;case j:return er(o.children,f,m,s);case k:w=8,f|=24;break;case M:return e=li(12,o,s,f|2),e.elementType=M,e.lanes=m,e;case $:return e=li(13,o,s,f),e.elementType=$,e.lanes=m,e;case F:return e=li(19,o,s,f),e.elementType=F,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:w=10;break e;case z:w=9;break e;case D:w=11;break e;case V:w=14;break e;case H:w=16,r=null;break e}w=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=li(w,o,s,f),s.elementType=e,s.type=r,s.lanes=m,s}function er(e,s,o,r){return e=li(7,e,r,s),e.lanes=o,e}function Qd(e,s,o){return e=li(6,e,null,s),e.lanes=o,e}function e_(e){var s=li(18,null,null,0);return s.stateNode=e,s}function Zd(e,s,o){return s=li(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var t_=new WeakMap;function bi(e,s){if(typeof e=="object"&&e!==null){var o=t_.get(e);return o!==void 0?o:(s={value:e,source:s,stack:ae(s)},t_.set(e,s),s)}return{value:e,source:s,stack:ae(s)}}var Tr=[],Er=0,Vc=null,vl=0,vi=[],wi=0,Sa=null,Wi=1,Fi="";function sa(e,s){Tr[Er++]=vl,Tr[Er++]=Vc,Vc=e,vl=s}function n_(e,s,o){vi[wi++]=Wi,vi[wi++]=Fi,vi[wi++]=Sa,Sa=e;var r=Wi;e=Fi;var f=32-yt(r)-1;r&=~(1<<f),o+=1;var m=32-yt(s)+f;if(30<m){var w=f-f%5;m=(r&(1<<w)-1).toString(32),r>>=w,f-=w,Wi=1<<32-yt(s)+f|o<<f|r,Fi=m+e}else Wi=1<<m|o<<f|r,Fi=e}function Jd(e){e.return!==null&&(sa(e,1),n_(e,1,0))}function ef(e){for(;e===Vc;)Vc=Tr[--Er],Tr[Er]=null,vl=Tr[--Er],Tr[Er]=null;for(;e===Sa;)Sa=vi[--wi],vi[wi]=null,Fi=vi[--wi],vi[wi]=null,Wi=vi[--wi],vi[wi]=null}function s_(e,s){vi[wi++]=Wi,vi[wi++]=Fi,vi[wi++]=Sa,Wi=s.id,Fi=s.overflow,Sa=e}var yo=null,ms=null,wn=!1,Ca=null,Si=!1,tf=Error(a(519));function ka(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wl(bi(s,e)),tf}function o_(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[en]=e,s[bn]=r,o){case"dialog":pn("cancel",s),pn("close",s);break;case"iframe":case"object":case"embed":pn("load",s);break;case"video":case"audio":for(o=0;o<Yl.length;o++)pn(Yl[o],s);break;case"source":pn("error",s);break;case"img":case"image":case"link":pn("error",s),pn("load",s);break;case"details":pn("toggle",s);break;case"input":pn("invalid",s),vn(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":pn("invalid",s);break;case"textarea":pn("invalid",s),gi(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||v0(s.textContent,o)?(r.popover!=null&&(pn("beforetoggle",s),pn("toggle",s)),r.onScroll!=null&&pn("scroll",s),r.onScrollEnd!=null&&pn("scrollend",s),r.onClick!=null&&(s.onclick=Os),s=!0):s=!1,s||ka(e,!0)}function i_(e){for(yo=e.return;yo;)switch(yo.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:yo=yo.return}}function Ar(e){if(e!==yo)return!1;if(!wn)return i_(e),wn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||bh(e.type,e.memoizedProps)),o=!o),o&&ms&&ka(e),i_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));ms=A0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));ms=A0(e)}else s===27?(s=ms,Ia(e.type)?(e=kh,kh=null,ms=e):ms=s):ms=yo?ki(e.stateNode.nextSibling):null;return!0}function tr(){ms=yo=null,wn=!1}function nf(){var e=Ca;return e!==null&&(ei===null?ei=e:ei.push.apply(ei,e),Ca=null),e}function wl(e){Ca===null?Ca=[e]:Ca.push(e)}var sf=A(null),nr=null,oa=null;function ja(e,s,o){q(sf,s._currentValue),s._currentValue=o}function ia(e){e._currentValue=sf.current,te(sf)}function of(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function af(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var w=f.child;m=m.firstContext;e:for(;m!==null;){var E=m;m=f;for(var W=0;W<s.length;W++)if(E.context===s[W]){m.lanes|=o,E=m.alternate,E!==null&&(E.lanes|=o),of(m.return,o,e),r||(w=null);break e}m=E.next}}else if(f.tag===18){if(w=f.return,w===null)throw Error(a(341));w.lanes|=o,m=w.alternate,m!==null&&(m.lanes|=o),of(w,o,e),w=null}else w=f.child;if(w!==null)w.return=f;else for(w=f;w!==null;){if(w===e){w=null;break}if(f=w.sibling,f!==null){f.return=w.return,w=f;break}w=w.return}f=w}}function Dr(e,s,o,r){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var w=f.alternate;if(w===null)throw Error(a(387));if(w=w.memoizedProps,w!==null){var E=f.type;jt(f.pendingProps.value,w.value)||(e!==null?e.push(E):e=[E])}}else if(f===ve.current){if(w=f.alternate,w===null)throw Error(a(387));w.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Gl):e=[Gl])}f=f.return}e!==null&&af(s,e,o,r),s.flags|=262144}function Yc(e){for(e=e.firstContext;e!==null;){if(!jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sr(e){nr=e,oa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xo(e){return a_(nr,e)}function Wc(e,s){return nr===null&&sr(e),a_(e,s)}function a_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},oa===null){if(e===null)throw Error(a(308));oa=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else oa=oa.next=s;return o}var o2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},i2=t.unstable_scheduleCallback,a2=t.unstable_NormalPriority,Fs={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rf(){return{controller:new o2,data:new Map,refCount:0}}function Sl(e){e.refCount--,e.refCount===0&&i2(a2,function(){e.controller.abort()})}var Cl=null,lf=0,Nr=0,Rr=null;function r2(e,s){if(Cl===null){var o=Cl=[];lf=0,Nr=dh(),Rr={status:"pending",value:void 0,then:function(r){o.push(r)}}}return lf++,s.then(r_,r_),s}function r_(){if(--lf===0&&Cl!==null){Rr!==null&&(Rr.status="fulfilled");var e=Cl;Cl=null,Nr=0,Rr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function l2(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var l_=L.S;L.S=function(e,s){Wg=it(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&r2(e,s),l_!==null&&l_(e,s)};var or=A(null);function cf(){var e=or.current;return e!==null?e:es.pooledCache}function Fc(e,s){s===null?q(or,or.current):q(or,s.pool)}function c_(){var e=cf();return e===null?null:{parent:Fs._currentValue,pool:e}}var Br=Error(a(460)),uf=Error(a(474)),Xc=Error(a(542)),qc={then:function(){}};function u_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function d_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(Os,Os),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,h_(e),e;default:if(typeof s.status=="string")s.then(Os,Os);else{if(e=es,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,h_(e),e}throw ar=s,Br}}function ir(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(ar=o,Br):o}}var ar=null;function f_(){if(ar===null)throw Error(a(459));var e=ar;return ar=null,e}function h_(e){if(e===Br||e===Xc)throw Error(a(483))}var Lr=null,kl=0;function Gc(e){var s=kl;return kl+=1,Lr===null&&(Lr=[]),d_(Lr,e,s)}function jl(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Kc(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function m_(e){function s(ce,Z){if(e){var me=ce.deletions;me===null?(ce.deletions=[Z],ce.flags|=16):me.push(Z)}}function o(ce,Z){if(!e)return null;for(;Z!==null;)s(ce,Z),Z=Z.sibling;return null}function r(ce){for(var Z=new Map;ce!==null;)ce.key!==null?Z.set(ce.key,ce):Z.set(ce.index,ce),ce=ce.sibling;return Z}function f(ce,Z){return ce=na(ce,Z),ce.index=0,ce.sibling=null,ce}function m(ce,Z,me){return ce.index=me,e?(me=ce.alternate,me!==null?(me=me.index,me<Z?(ce.flags|=67108866,Z):me):(ce.flags|=67108866,Z)):(ce.flags|=1048576,Z)}function w(ce){return e&&ce.alternate===null&&(ce.flags|=67108866),ce}function E(ce,Z,me,De){return Z===null||Z.tag!==6?(Z=Qd(me,ce.mode,De),Z.return=ce,Z):(Z=f(Z,me),Z.return=ce,Z)}function W(ce,Z,me,De){var Ht=me.type;return Ht===j?Ce(ce,Z,me.props.children,De,me.key):Z!==null&&(Z.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===H&&ir(Ht)===Z.type)?(Z=f(Z,me.props),jl(Z,me),Z.return=ce,Z):(Z=Uc(me.type,me.key,me.props,null,ce.mode,De),jl(Z,me),Z.return=ce,Z)}function pe(ce,Z,me,De){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==me.containerInfo||Z.stateNode.implementation!==me.implementation?(Z=Zd(me,ce.mode,De),Z.return=ce,Z):(Z=f(Z,me.children||[]),Z.return=ce,Z)}function Ce(ce,Z,me,De,Ht){return Z===null||Z.tag!==7?(Z=er(me,ce.mode,De,Ht),Z.return=ce,Z):(Z=f(Z,me),Z.return=ce,Z)}function Re(ce,Z,me){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Qd(""+Z,ce.mode,me),Z.return=ce,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case S:return me=Uc(Z.type,Z.key,Z.props,null,ce.mode,me),jl(me,Z),me.return=ce,me;case C:return Z=Zd(Z,ce.mode,me),Z.return=ce,Z;case H:return Z=ir(Z),Re(ce,Z,me)}if(ue(Z)||Se(Z))return Z=er(Z,ce.mode,me,null),Z.return=ce,Z;if(typeof Z.then=="function")return Re(ce,Gc(Z),me);if(Z.$$typeof===R)return Re(ce,Wc(ce,Z),me);Kc(ce,Z)}return null}function _e(ce,Z,me,De){var Ht=Z!==null?Z.key:null;if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Ht!==null?null:E(ce,Z,""+me,De);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case S:return me.key===Ht?W(ce,Z,me,De):null;case C:return me.key===Ht?pe(ce,Z,me,De):null;case H:return me=ir(me),_e(ce,Z,me,De)}if(ue(me)||Se(me))return Ht!==null?null:Ce(ce,Z,me,De,null);if(typeof me.then=="function")return _e(ce,Z,Gc(me),De);if(me.$$typeof===R)return _e(ce,Z,Wc(ce,me),De);Kc(ce,me)}return null}function ye(ce,Z,me,De,Ht){if(typeof De=="string"&&De!==""||typeof De=="number"||typeof De=="bigint")return ce=ce.get(me)||null,E(Z,ce,""+De,Ht);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case S:return ce=ce.get(De.key===null?me:De.key)||null,W(Z,ce,De,Ht);case C:return ce=ce.get(De.key===null?me:De.key)||null,pe(Z,ce,De,Ht);case H:return De=ir(De),ye(ce,Z,me,De,Ht)}if(ue(De)||Se(De))return ce=ce.get(me)||null,Ce(Z,ce,De,Ht,null);if(typeof De.then=="function")return ye(ce,Z,me,Gc(De),Ht);if(De.$$typeof===R)return ye(ce,Z,me,Wc(Z,De),Ht);Kc(Z,De)}return null}function At(ce,Z,me,De){for(var Ht=null,An=null,Lt=Z,un=Z=0,yn=null;Lt!==null&&un<me.length;un++){Lt.index>un?(yn=Lt,Lt=null):yn=Lt.sibling;var Dn=_e(ce,Lt,me[un],De);if(Dn===null){Lt===null&&(Lt=yn);break}e&&Lt&&Dn.alternate===null&&s(ce,Lt),Z=m(Dn,Z,un),An===null?Ht=Dn:An.sibling=Dn,An=Dn,Lt=yn}if(un===me.length)return o(ce,Lt),wn&&sa(ce,un),Ht;if(Lt===null){for(;un<me.length;un++)Lt=Re(ce,me[un],De),Lt!==null&&(Z=m(Lt,Z,un),An===null?Ht=Lt:An.sibling=Lt,An=Lt);return wn&&sa(ce,un),Ht}for(Lt=r(Lt);un<me.length;un++)yn=ye(Lt,ce,un,me[un],De),yn!==null&&(e&&yn.alternate!==null&&Lt.delete(yn.key===null?un:yn.key),Z=m(yn,Z,un),An===null?Ht=yn:An.sibling=yn,An=yn);return e&&Lt.forEach(function(Ya){return s(ce,Ya)}),wn&&sa(ce,un),Ht}function Yt(ce,Z,me,De){if(me==null)throw Error(a(151));for(var Ht=null,An=null,Lt=Z,un=Z=0,yn=null,Dn=me.next();Lt!==null&&!Dn.done;un++,Dn=me.next()){Lt.index>un?(yn=Lt,Lt=null):yn=Lt.sibling;var Ya=_e(ce,Lt,Dn.value,De);if(Ya===null){Lt===null&&(Lt=yn);break}e&&Lt&&Ya.alternate===null&&s(ce,Lt),Z=m(Ya,Z,un),An===null?Ht=Ya:An.sibling=Ya,An=Ya,Lt=yn}if(Dn.done)return o(ce,Lt),wn&&sa(ce,un),Ht;if(Lt===null){for(;!Dn.done;un++,Dn=me.next())Dn=Re(ce,Dn.value,De),Dn!==null&&(Z=m(Dn,Z,un),An===null?Ht=Dn:An.sibling=Dn,An=Dn);return wn&&sa(ce,un),Ht}for(Lt=r(Lt);!Dn.done;un++,Dn=me.next())Dn=ye(Lt,ce,un,Dn.value,De),Dn!==null&&(e&&Dn.alternate!==null&&Lt.delete(Dn.key===null?un:Dn.key),Z=m(Dn,Z,un),An===null?Ht=Dn:An.sibling=Dn,An=Dn);return e&&Lt.forEach(function(xv){return s(ce,xv)}),wn&&sa(ce,un),Ht}function Yn(ce,Z,me,De){if(typeof me=="object"&&me!==null&&me.type===j&&me.key===null&&(me=me.props.children),typeof me=="object"&&me!==null){switch(me.$$typeof){case S:e:{for(var Ht=me.key;Z!==null;){if(Z.key===Ht){if(Ht=me.type,Ht===j){if(Z.tag===7){o(ce,Z.sibling),De=f(Z,me.props.children),De.return=ce,ce=De;break e}}else if(Z.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===H&&ir(Ht)===Z.type){o(ce,Z.sibling),De=f(Z,me.props),jl(De,me),De.return=ce,ce=De;break e}o(ce,Z);break}else s(ce,Z);Z=Z.sibling}me.type===j?(De=er(me.props.children,ce.mode,De,me.key),De.return=ce,ce=De):(De=Uc(me.type,me.key,me.props,null,ce.mode,De),jl(De,me),De.return=ce,ce=De)}return w(ce);case C:e:{for(Ht=me.key;Z!==null;){if(Z.key===Ht)if(Z.tag===4&&Z.stateNode.containerInfo===me.containerInfo&&Z.stateNode.implementation===me.implementation){o(ce,Z.sibling),De=f(Z,me.children||[]),De.return=ce,ce=De;break e}else{o(ce,Z);break}else s(ce,Z);Z=Z.sibling}De=Zd(me,ce.mode,De),De.return=ce,ce=De}return w(ce);case H:return me=ir(me),Yn(ce,Z,me,De)}if(ue(me))return At(ce,Z,me,De);if(Se(me)){if(Ht=Se(me),typeof Ht!="function")throw Error(a(150));return me=Ht.call(me),Yt(ce,Z,me,De)}if(typeof me.then=="function")return Yn(ce,Z,Gc(me),De);if(me.$$typeof===R)return Yn(ce,Z,Wc(ce,me),De);Kc(ce,me)}return typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint"?(me=""+me,Z!==null&&Z.tag===6?(o(ce,Z.sibling),De=f(Z,me),De.return=ce,ce=De):(o(ce,Z),De=Qd(me,ce.mode,De),De.return=ce,ce=De),w(ce)):o(ce,Z)}return function(ce,Z,me,De){try{kl=0;var Ht=Yn(ce,Z,me,De);return Lr=null,Ht}catch(Lt){if(Lt===Br||Lt===Xc)throw Lt;var An=li(29,Lt,null,ce.mode);return An.lanes=De,An.return=ce,An}finally{}}}var rr=m_(!0),p_=m_(!1),Ma=!1;function df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ea(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Rn&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Hc(e),Zp(e,null,o),s}return Pc(e,r,s,o),Hc(e)}function Ml(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,os(e,o)}}function hf(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var w={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=w:m=m.next=w,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var mf=!1;function Tl(){if(mf){var e=Rr;if(e!==null)throw e}}function El(e,s,o,r){mf=!1;var f=e.updateQueue;Ma=!1;var m=f.firstBaseUpdate,w=f.lastBaseUpdate,E=f.shared.pending;if(E!==null){f.shared.pending=null;var W=E,pe=W.next;W.next=null,w===null?m=pe:w.next=pe,w=W;var Ce=e.alternate;Ce!==null&&(Ce=Ce.updateQueue,E=Ce.lastBaseUpdate,E!==w&&(E===null?Ce.firstBaseUpdate=pe:E.next=pe,Ce.lastBaseUpdate=W))}if(m!==null){var Re=f.baseState;w=0,Ce=pe=W=null,E=m;do{var _e=E.lane&-536870913,ye=_e!==E.lane;if(ye?(gn&_e)===_e:(r&_e)===_e){_e!==0&&_e===Nr&&(mf=!0),Ce!==null&&(Ce=Ce.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var At=e,Yt=E;_e=s;var Yn=o;switch(Yt.tag){case 1:if(At=Yt.payload,typeof At=="function"){Re=At.call(Yn,Re,_e);break e}Re=At;break e;case 3:At.flags=At.flags&-65537|128;case 0:if(At=Yt.payload,_e=typeof At=="function"?At.call(Yn,Re,_e):At,_e==null)break e;Re=x({},Re,_e);break e;case 2:Ma=!0}}_e=E.callback,_e!==null&&(e.flags|=64,ye&&(e.flags|=8192),ye=f.callbacks,ye===null?f.callbacks=[_e]:ye.push(_e))}else ye={lane:_e,tag:E.tag,payload:E.payload,callback:E.callback,next:null},Ce===null?(pe=Ce=ye,W=Re):Ce=Ce.next=ye,w|=_e;if(E=E.next,E===null){if(E=f.shared.pending,E===null)break;ye=E,E=ye.next,ye.next=null,f.lastBaseUpdate=ye,f.shared.pending=null}}while(!0);Ce===null&&(W=Re),f.baseState=W,f.firstBaseUpdate=pe,f.lastBaseUpdate=Ce,m===null&&(f.shared.lanes=0),Ba|=w,e.lanes=w,e.memoizedState=Re}}function __(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function g_(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)__(o[e],s)}var Or=A(null),Qc=A(0);function y_(e,s){e=ma,q(Qc,e),q(Or,s),ma=e|s.baseLanes}function pf(){q(Qc,ma),q(Or,Or.current)}function _f(){ma=Qc.current,te(Or),te(Qc)}var ci=A(null),Ci=null;function Aa(e){var s=e.alternate;q(zs,zs.current&1),q(ci,e),Ci===null&&(s===null||Or.current!==null||s.memoizedState!==null)&&(Ci=e)}function gf(e){q(zs,zs.current),q(ci,e),Ci===null&&(Ci=e)}function x_(e){e.tag===22?(q(zs,zs.current),q(ci,e),Ci===null&&(Ci=e)):Da()}function Da(){q(zs,zs.current),q(ci,ci.current)}function ui(e){te(ci),Ci===e&&(Ci=null),te(zs)}var zs=A(0);function Zc(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Sh(o)||Ch(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var aa=0,rn=null,Un=null,Xs=null,Jc=!1,zr=!1,lr=!1,eu=0,Al=0,$r=null,c2=0;function As(){throw Error(a(321))}function yf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!jt(e[o],s[o]))return!1;return!0}function xf(e,s,o,r,f,m){return aa=m,rn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,L.H=e===null||e.memoizedState===null?ng:Bf,lr=!1,m=o(r,f),lr=!1,zr&&(m=v_(s,o,r,f)),b_(e),m}function b_(e){L.H=Rl;var s=Un!==null&&Un.next!==null;if(aa=0,Xs=Un=rn=null,Jc=!1,Al=0,$r=null,s)throw Error(a(300));e===null||qs||(e=e.dependencies,e!==null&&Yc(e)&&(qs=!0))}function v_(e,s,o,r){rn=e;var f=0;do{if(zr&&($r=null),Al=0,zr=!1,25<=f)throw Error(a(301));if(f+=1,Xs=Un=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}L.H=sg,m=s(o,r)}while(zr);return m}function u2(){var e=L.H,s=e.useState()[0];return s=typeof s.then=="function"?Dl(s):s,e=e.useState()[0],(Un!==null?Un.memoizedState:null)!==e&&(rn.flags|=1024),s}function bf(){var e=eu!==0;return eu=0,e}function vf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function wf(e){if(Jc){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}Jc=!1}aa=0,Xs=Un=rn=null,zr=!1,Al=eu=0,$r=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xs===null?rn.memoizedState=Xs=e:Xs=Xs.next=e,Xs}function $s(){if(Un===null){var e=rn.alternate;e=e!==null?e.memoizedState:null}else e=Un.next;var s=Xs===null?rn.memoizedState:Xs.next;if(s!==null)Xs=s,Un=e;else{if(e===null)throw rn.alternate===null?Error(a(467)):Error(a(310));Un=e,e={memoizedState:Un.memoizedState,baseState:Un.baseState,baseQueue:Un.baseQueue,queue:Un.queue,next:null},Xs===null?rn.memoizedState=Xs=e:Xs=Xs.next=e}return Xs}function tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dl(e){var s=Al;return Al+=1,$r===null&&($r=[]),e=d_($r,e,s),s=rn,(Xs===null?s.memoizedState:Xs.next)===null&&(s=s.alternate,L.H=s===null||s.memoizedState===null?ng:Bf),e}function nu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Dl(e);if(e.$$typeof===R)return xo(e)}throw Error(a(438,String(e)))}function Sf(e){var s=null,o=rn.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=rn.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=tu(),rn.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=re;return s.index++,o}function ra(e,s){return typeof s=="function"?s(e):s}function su(e){var s=$s();return Cf(s,Un,e)}function Cf(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,m=r.pending;if(m!==null){if(f!==null){var w=f.next;f.next=m.next,m.next=w}s.baseQueue=f=m,r.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var E=w=null,W=null,pe=s,Ce=!1;do{var Re=pe.lane&-536870913;if(Re!==pe.lane?(gn&Re)===Re:(aa&Re)===Re){var _e=pe.revertLane;if(_e===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),Re===Nr&&(Ce=!0);else if((aa&_e)===_e){pe=pe.next,_e===Nr&&(Ce=!0);continue}else Re={lane:0,revertLane:pe.revertLane,gesture:null,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null},W===null?(E=W=Re,w=m):W=W.next=Re,rn.lanes|=_e,Ba|=_e;Re=pe.action,lr&&o(m,Re),m=pe.hasEagerState?pe.eagerState:o(m,Re)}else _e={lane:Re,revertLane:pe.revertLane,gesture:pe.gesture,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null},W===null?(E=W=_e,w=m):W=W.next=_e,rn.lanes|=Re,Ba|=Re;pe=pe.next}while(pe!==null&&pe!==s);if(W===null?w=m:W.next=E,!jt(m,e.memoizedState)&&(qs=!0,Ce&&(o=Rr,o!==null)))throw o;e.memoizedState=m,e.baseState=w,e.baseQueue=W,r.lastRenderedState=m}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function kf(e){var s=$s(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var w=f=f.next;do m=e(m,w.action),w=w.next;while(w!==f);jt(m,s.memoizedState)||(qs=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function w_(e,s,o){var r=rn,f=$s(),m=wn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var w=!jt((Un||f).memoizedState,o);if(w&&(f.memoizedState=o,qs=!0),f=f.queue,Tf(k_.bind(null,r,f,e),[e]),f.getSnapshot!==s||w||Xs!==null&&Xs.memoizedState.tag&1){if(r.flags|=2048,Ir(9,{destroy:void 0},C_.bind(null,r,f,o,s),null),es===null)throw Error(a(349));m||(aa&127)!==0||S_(r,s,o)}return o}function S_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=rn.updateQueue,s===null?(s=tu(),rn.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function C_(e,s,o,r){s.value=o,s.getSnapshot=r,j_(s)&&M_(e)}function k_(e,s,o){return o(function(){j_(s)&&M_(e)})}function j_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!jt(e,o)}catch{return!0}}function M_(e){var s=Ja(e,2);s!==null&&ti(s,e,2)}function jf(e){var s=Po();if(typeof e=="function"){var o=e;if(e=o(),lr){Me(!0);try{o()}finally{Me(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},s}function T_(e,s,o,r){return e.baseState=o,Cf(e,Un,typeof r=="function"?r:ra)}function d2(e,s,o,r,f){if(au(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){m.listeners.push(w)}};L.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,E_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function E_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var m=L.T,w={};L.T=w;try{var E=o(f,r),W=L.S;W!==null&&W(w,E),A_(e,s,E)}catch(pe){Mf(e,s,pe)}finally{m!==null&&w.types!==null&&(m.types=w.types),L.T=m}}else try{m=o(f,r),A_(e,s,m)}catch(pe){Mf(e,s,pe)}}function A_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){D_(e,s,r)},function(r){return Mf(e,s,r)}):D_(e,s,o)}function D_(e,s,o){s.status="fulfilled",s.value=o,N_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,E_(e,o)))}function Mf(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,N_(s),s=s.next;while(s!==r)}e.action=null}function N_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function R_(e,s){return s}function B_(e,s){if(wn){var o=es.formState;if(o!==null){e:{var r=rn;if(wn){if(ms){t:{for(var f=ms,m=Si;f.nodeType!==8;){if(!m){f=null;break t}if(f=ki(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){ms=ki(f.nextSibling),r=f.data==="F!";break e}}ka(r)}r=!1}r&&(s=o[0])}}return o=Po(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:R_,lastRenderedState:s},o.queue=r,o=J_.bind(null,rn,r),r.dispatch=o,r=jf(!1),m=Rf.bind(null,rn,!1,r.queue),r=Po(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=d2.bind(null,rn,f,m,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function L_(e){var s=$s();return O_(s,Un,e)}function O_(e,s,o){if(s=Cf(e,s,R_)[0],e=su(ra)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=Dl(s)}catch(w){throw w===Br?Xc:w}else r=s;s=$s();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(rn.flags|=2048,Ir(9,{destroy:void 0},f2.bind(null,f,o),null)),[r,m,e]}function f2(e,s){e.action=s}function z_(e){var s=$s(),o=Un;if(o!==null)return O_(s,o,e);$s(),s=s.memoizedState,o=$s();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function Ir(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=rn.updateQueue,s===null&&(s=tu(),rn.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function $_(){return $s().memoizedState}function ou(e,s,o,r){var f=Po();rn.flags|=e,f.memoizedState=Ir(1|s,{destroy:void 0},o,r===void 0?null:r)}function iu(e,s,o,r){var f=$s();r=r===void 0?null:r;var m=f.memoizedState.inst;Un!==null&&r!==null&&yf(r,Un.memoizedState.deps)?f.memoizedState=Ir(s,m,o,r):(rn.flags|=e,f.memoizedState=Ir(1|s,m,o,r))}function I_(e,s){ou(8390656,8,e,s)}function Tf(e,s){iu(2048,8,e,s)}function h2(e){rn.flags|=4;var s=rn.updateQueue;if(s===null)s=tu(),rn.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function P_(e){var s=$s().memoizedState;return h2({ref:s,nextImpl:e}),function(){if((Rn&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function H_(e,s){return iu(4,2,e,s)}function U_(e,s){return iu(4,4,e,s)}function V_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function Y_(e,s,o){o=o!=null?o.concat([e]):null,iu(4,4,V_.bind(null,s,e),o)}function Ef(){}function W_(e,s){var o=$s();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&yf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function F_(e,s){var o=$s();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&yf(s,r[1]))return r[0];if(r=e(),lr){Me(!0);try{e()}finally{Me(!1)}}return o.memoizedState=[r,s],r}function Af(e,s,o){return o===void 0||(aa&1073741824)!==0&&(gn&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=Xg(),rn.lanes|=e,Ba|=e,o)}function X_(e,s,o,r){return jt(o,s)?o:Or.current!==null?(e=Af(e,o,r),jt(e,s)||(qs=!0),e):(aa&42)===0||(aa&1073741824)!==0&&(gn&261930)===0?(qs=!0,e.memoizedState=o):(e=Xg(),rn.lanes|=e,Ba|=e,s)}function q_(e,s,o,r,f){var m=ne.p;ne.p=m!==0&&8>m?m:8;var w=L.T,E={};L.T=E,Rf(e,!1,s,o);try{var W=f(),pe=L.S;if(pe!==null&&pe(E,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var Ce=l2(W,r);Nl(e,s,Ce,hi(e))}else Nl(e,s,r,hi(e))}catch(Re){Nl(e,s,{then:function(){},status:"rejected",reason:Re},hi())}finally{ne.p=m,w!==null&&E.types!==null&&(w.types=E.types),L.T=w}}function m2(){}function Df(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=G_(e).queue;q_(e,f,s,U,o===null?m2:function(){return K_(e),o(r)})}function G_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:U},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function K_(e){var s=G_(e);s.next===null&&(s=e.alternate.memoizedState),Nl(e,s.next.queue,{},hi())}function Nf(){return xo(Gl)}function Q_(){return $s().memoizedState}function Z_(){return $s().memoizedState}function p2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=hi();e=Ta(o);var r=Ea(s,e,o);r!==null&&(ti(r,s,o),Ml(r,s,o)),s={cache:rf()},e.payload=s;return}s=s.return}}function _2(e,s,o){var r=hi();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},au(e)?eg(s,o):(o=Gd(e,s,o,r),o!==null&&(ti(o,e,r),tg(o,s,r)))}function J_(e,s,o){var r=hi();Nl(e,s,o,r)}function Nl(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(au(e))eg(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var w=s.lastRenderedState,E=m(w,o);if(f.hasEagerState=!0,f.eagerState=E,jt(E,w))return Pc(e,s,f,0),es===null&&Ic(),!1}catch{}finally{}if(o=Gd(e,s,f,r),o!==null)return ti(o,e,r),tg(o,s,r),!0}return!1}function Rf(e,s,o,r){if(r={lane:2,revertLane:dh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},au(e)){if(s)throw Error(a(479))}else s=Gd(e,o,r,2),s!==null&&ti(s,e,2)}function au(e){var s=e.alternate;return e===rn||s!==null&&s===rn}function eg(e,s){zr=Jc=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function tg(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,os(e,o)}}var Rl={readContext:xo,use:nu,useCallback:As,useContext:As,useEffect:As,useImperativeHandle:As,useLayoutEffect:As,useInsertionEffect:As,useMemo:As,useReducer:As,useRef:As,useState:As,useDebugValue:As,useDeferredValue:As,useTransition:As,useSyncExternalStore:As,useId:As,useHostTransitionStatus:As,useFormState:As,useActionState:As,useOptimistic:As,useMemoCache:As,useCacheRefresh:As};Rl.useEffectEvent=As;var ng={readContext:xo,use:nu,useCallback:function(e,s){return Po().memoizedState=[e,s===void 0?null:s],e},useContext:xo,useEffect:I_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,ou(4194308,4,V_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return ou(4194308,4,e,s)},useInsertionEffect:function(e,s){ou(4,2,e,s)},useMemo:function(e,s){var o=Po();s=s===void 0?null:s;var r=e();if(lr){Me(!0);try{e()}finally{Me(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=Po();if(o!==void 0){var f=o(s);if(lr){Me(!0);try{o(s)}finally{Me(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=_2.bind(null,rn,e),[r.memoizedState,e]},useRef:function(e){var s=Po();return e={current:e},s.memoizedState=e},useState:function(e){e=jf(e);var s=e.queue,o=J_.bind(null,rn,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Ef,useDeferredValue:function(e,s){var o=Po();return Af(o,e,s)},useTransition:function(){var e=jf(!1);return e=q_.bind(null,rn,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=rn,f=Po();if(wn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),es===null)throw Error(a(349));(gn&127)!==0||S_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,I_(k_.bind(null,r,m,e),[e]),r.flags|=2048,Ir(9,{destroy:void 0},C_.bind(null,r,m,o,s),null),o},useId:function(){var e=Po(),s=es.identifierPrefix;if(wn){var o=Fi,r=Wi;o=(r&~(1<<32-yt(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=eu++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=c2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Nf,useFormState:B_,useActionState:B_,useOptimistic:function(e){var s=Po();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Rf.bind(null,rn,!0,o),o.dispatch=s,[e,s]},useMemoCache:Sf,useCacheRefresh:function(){return Po().memoizedState=p2.bind(null,rn)},useEffectEvent:function(e){var s=Po(),o={impl:e};return s.memoizedState=o,function(){if((Rn&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Bf={readContext:xo,use:nu,useCallback:W_,useContext:xo,useEffect:Tf,useImperativeHandle:Y_,useInsertionEffect:H_,useLayoutEffect:U_,useMemo:F_,useReducer:su,useRef:$_,useState:function(){return su(ra)},useDebugValue:Ef,useDeferredValue:function(e,s){var o=$s();return X_(o,Un.memoizedState,e,s)},useTransition:function(){var e=su(ra)[0],s=$s().memoizedState;return[typeof e=="boolean"?e:Dl(e),s]},useSyncExternalStore:w_,useId:Q_,useHostTransitionStatus:Nf,useFormState:L_,useActionState:L_,useOptimistic:function(e,s){var o=$s();return T_(o,Un,e,s)},useMemoCache:Sf,useCacheRefresh:Z_};Bf.useEffectEvent=P_;var sg={readContext:xo,use:nu,useCallback:W_,useContext:xo,useEffect:Tf,useImperativeHandle:Y_,useInsertionEffect:H_,useLayoutEffect:U_,useMemo:F_,useReducer:kf,useRef:$_,useState:function(){return kf(ra)},useDebugValue:Ef,useDeferredValue:function(e,s){var o=$s();return Un===null?Af(o,e,s):X_(o,Un.memoizedState,e,s)},useTransition:function(){var e=kf(ra)[0],s=$s().memoizedState;return[typeof e=="boolean"?e:Dl(e),s]},useSyncExternalStore:w_,useId:Q_,useHostTransitionStatus:Nf,useFormState:z_,useActionState:z_,useOptimistic:function(e,s){var o=$s();return Un!==null?T_(o,Un,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Sf,useCacheRefresh:Z_};sg.useEffectEvent=P_;function Lf(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Of={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=hi(),f=Ta(r);f.payload=s,o!=null&&(f.callback=o),s=Ea(e,f,r),s!==null&&(ti(s,e,r),Ml(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=hi(),f=Ta(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Ea(e,f,r),s!==null&&(ti(s,e,r),Ml(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=hi(),r=Ta(o);r.tag=2,s!=null&&(r.callback=s),s=Ea(e,r,o),s!==null&&(ti(s,e,o),Ml(s,e,o))}};function og(e,s,o,r,f,m,w){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,m,w):s.prototype&&s.prototype.isPureReactComponent?!mt(o,r)||!mt(f,m):!0}function ig(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&Of.enqueueReplaceState(s,s.state,null)}function cr(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function ag(e){$c(e)}function rg(e){console.error(e)}function lg(e){$c(e)}function ru(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function cg(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function zf(e,s,o){return o=Ta(o),o.tag=3,o.payload={element:null},o.callback=function(){ru(e,s)},o}function ug(e){return e=Ta(e),e.tag=3,e}function dg(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;e.payload=function(){return f(m)},e.callback=function(){cg(s,o,r)}}var w=o.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(e.callback=function(){cg(s,o,r),typeof f!="function"&&(La===null?La=new Set([this]):La.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function g2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&Dr(s,o,f,!0),o=ci.current,o!==null){switch(o.tag){case 31:case 13:return Ci===null?xu():o.alternate===null&&Ds===0&&(Ds=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===qc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),lh(e,r,f)),!1;case 22:return o.flags|=65536,r===qc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),lh(e,r,f)),!1}throw Error(a(435,o.tag))}return lh(e,r,f),xu(),!1}if(wn)return s=ci.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==tf&&(e=Error(a(422),{cause:r}),wl(bi(e,o)))):(r!==tf&&(s=Error(a(423),{cause:r}),wl(bi(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=bi(r,o),f=zf(e.stateNode,r,f),hf(e,f),Ds!==4&&(Ds=2)),!1;var m=Error(a(520),{cause:r});if(m=bi(m,o),Hl===null?Hl=[m]:Hl.push(m),Ds!==4&&(Ds=2),s===null)return!0;r=bi(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=zf(o.stateNode,r,e),hf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(La===null||!La.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=ug(f),dg(f,e,o,r),hf(o,f),!1}o=o.return}while(o!==null);return!1}var $f=Error(a(461)),qs=!1;function bo(e,s,o,r){s.child=e===null?p_(s,null,o,r):rr(s,e.child,o,r)}function fg(e,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var w={};for(var E in r)E!=="ref"&&(w[E]=r[E])}else w=r;return sr(s),r=xf(e,s,o,w,m,f),E=bf(),e!==null&&!qs?(vf(e,s,f),la(e,s,f)):(wn&&E&&Jd(s),s.flags|=1,bo(e,s,r,f),s.child)}function hg(e,s,o,r,f){if(e===null){var m=o.type;return typeof m=="function"&&!Kd(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,mg(e,s,m,r,f)):(e=Uc(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Ff(e,f)){var w=m.memoizedProps;if(o=o.compare,o=o!==null?o:mt,o(w,r)&&e.ref===s.ref)return la(e,s,f)}return s.flags|=1,e=na(m,r),e.ref=s.ref,e.return=s,s.child=e}function mg(e,s,o,r,f){if(e!==null){var m=e.memoizedProps;if(mt(m,r)&&e.ref===s.ref)if(qs=!1,s.pendingProps=r=m,Ff(e,f))(e.flags&131072)!==0&&(qs=!0);else return s.lanes=e.lanes,la(e,s,f)}return If(e,s,o,r,f)}function pg(e,s,o,r){var f=r.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return _g(e,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fc(s,m!==null?m.cachePool:null),m!==null?y_(s,m):pf(),x_(s);else return r=s.lanes=536870912,_g(e,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(Fc(s,m.cachePool),y_(s,m),Da(),s.memoizedState=null):(e!==null&&Fc(s,null),pf(),Da());return bo(e,s,f,o),s.child}function Bl(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function _g(e,s,o,r,f){var m=cf();return m=m===null?null:{parent:Fs._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&Fc(s,null),pf(),x_(s),e!==null&&Dr(e,s,r,!0),s.childLanes=f,null}function lu(e,s){return s=uu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function gg(e,s,o){return rr(s,e.child,null,o),e=lu(s,s.pendingProps),e.flags|=2,ui(s),s.memoizedState=null,e}function y2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(wn){if(r.mode==="hidden")return e=lu(s,r),s.lanes=536870912,Bl(null,e);if(gf(s),(e=ms)?(e=E0(e,Si),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Sa!==null?{id:Wi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},o=e_(e),o.return=s,s.child=o,yo=s,ms=null)):e=null,e===null)throw ka(s);return s.lanes=536870912,null}return lu(s,r)}var m=e.memoizedState;if(m!==null){var w=m.dehydrated;if(gf(s),f)if(s.flags&256)s.flags&=-257,s=gg(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(qs||Dr(e,s,o,!1),f=(o&e.childLanes)!==0,qs||f){if(r=es,r!==null&&(w=xn(r,o),w!==0&&w!==m.retryLane))throw m.retryLane=w,Ja(e,w),ti(r,e,w),$f;xu(),s=gg(e,s,o)}else e=m.treeContext,ms=ki(w.nextSibling),yo=s,wn=!0,Ca=null,Si=!1,e!==null&&s_(s,e),s=lu(s,r),s.flags|=4096;return s}return e=na(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function cu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function If(e,s,o,r,f){return sr(s),o=xf(e,s,o,r,void 0,f),r=bf(),e!==null&&!qs?(vf(e,s,f),la(e,s,f)):(wn&&r&&Jd(s),s.flags|=1,bo(e,s,o,f),s.child)}function yg(e,s,o,r,f,m){return sr(s),s.updateQueue=null,o=v_(s,r,o,f),b_(e),r=bf(),e!==null&&!qs?(vf(e,s,m),la(e,s,m)):(wn&&r&&Jd(s),s.flags|=1,bo(e,s,o,m),s.child)}function xg(e,s,o,r,f){if(sr(s),s.stateNode===null){var m=Mr,w=o.contextType;typeof w=="object"&&w!==null&&(m=xo(w)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Of,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},df(s),w=o.contextType,m.context=typeof w=="object"&&w!==null?xo(w):Mr,m.state=s.memoizedState,w=o.getDerivedStateFromProps,typeof w=="function"&&(Lf(s,o,w,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(w=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),w!==m.state&&Of.enqueueReplaceState(m,m.state,null),El(s,r,m,f),Tl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){m=s.stateNode;var E=s.memoizedProps,W=cr(o,E);m.props=W;var pe=m.context,Ce=o.contextType;w=Mr,typeof Ce=="object"&&Ce!==null&&(w=xo(Ce));var Re=o.getDerivedStateFromProps;Ce=typeof Re=="function"||typeof m.getSnapshotBeforeUpdate=="function",E=s.pendingProps!==E,Ce||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E||pe!==w)&&ig(s,m,r,w),Ma=!1;var _e=s.memoizedState;m.state=_e,El(s,r,m,f),Tl(),pe=s.memoizedState,E||_e!==pe||Ma?(typeof Re=="function"&&(Lf(s,o,Re,r),pe=s.memoizedState),(W=Ma||og(s,o,W,r,_e,pe,w))?(Ce||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=pe),m.props=r,m.state=pe,m.context=w,r=W):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,ff(e,s),w=s.memoizedProps,Ce=cr(o,w),m.props=Ce,Re=s.pendingProps,_e=m.context,pe=o.contextType,W=Mr,typeof pe=="object"&&pe!==null&&(W=xo(pe)),E=o.getDerivedStateFromProps,(pe=typeof E=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==Re||_e!==W)&&ig(s,m,r,W),Ma=!1,_e=s.memoizedState,m.state=_e,El(s,r,m,f),Tl();var ye=s.memoizedState;w!==Re||_e!==ye||Ma||e!==null&&e.dependencies!==null&&Yc(e.dependencies)?(typeof E=="function"&&(Lf(s,o,E,r),ye=s.memoizedState),(Ce=Ma||og(s,o,Ce,r,_e,ye,W)||e!==null&&e.dependencies!==null&&Yc(e.dependencies))?(pe||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,ye,W),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,ye,W)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||w===e.memoizedProps&&_e===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&_e===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=ye),m.props=r,m.state=ye,m.context=W,r=Ce):(typeof m.componentDidUpdate!="function"||w===e.memoizedProps&&_e===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&_e===e.memoizedState||(s.flags|=1024),r=!1)}return m=r,cu(e,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&r?(s.child=rr(s,e.child,null,f),s.child=rr(s,null,o,f)):bo(e,s,o,f),s.memoizedState=m.state,e=s.child):e=la(e,s,f),e}function bg(e,s,o,r){return tr(),s.flags|=256,bo(e,s,o,r),s.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(e){return{baseLanes:e,cachePool:c_()}}function Uf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=fi),e}function vg(e,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,w;if((w=m)||(w=e!==null&&e.memoizedState===null?!1:(zs.current&2)!==0),w&&(f=!0,s.flags&=-129),w=(s.flags&32)!==0,s.flags&=-33,e===null){if(wn){if(f?Aa(s):Da(),(e=ms)?(e=E0(e,Si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Sa!==null?{id:Wi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},o=e_(e),o.return=s,s.child=o,yo=s,ms=null)):e=null,e===null)throw ka(s);return Ch(e)?s.lanes=32:s.lanes=536870912,null}var E=r.children;return r=r.fallback,f?(Da(),f=s.mode,E=uu({mode:"hidden",children:E},f),r=er(r,f,o,null),E.return=s,r.return=s,E.sibling=r,s.child=E,r=s.child,r.memoizedState=Hf(o),r.childLanes=Uf(e,w,o),s.memoizedState=Pf,Bl(null,r)):(Aa(s),Vf(s,E))}var W=e.memoizedState;if(W!==null&&(E=W.dehydrated,E!==null)){if(m)s.flags&256?(Aa(s),s.flags&=-257,s=Yf(e,s,o)):s.memoizedState!==null?(Da(),s.child=e.child,s.flags|=128,s=null):(Da(),E=r.fallback,f=s.mode,r=uu({mode:"visible",children:r.children},f),E=er(E,f,o,null),E.flags|=2,r.return=s,E.return=s,r.sibling=E,s.child=r,rr(s,e.child,null,o),r=s.child,r.memoizedState=Hf(o),r.childLanes=Uf(e,w,o),s.memoizedState=Pf,s=Bl(null,r));else if(Aa(s),Ch(E)){if(w=E.nextSibling&&E.nextSibling.dataset,w)var pe=w.dgst;w=pe,r=Error(a(419)),r.stack="",r.digest=w,wl({value:r,source:null,stack:null}),s=Yf(e,s,o)}else if(qs||Dr(e,s,o,!1),w=(o&e.childLanes)!==0,qs||w){if(w=es,w!==null&&(r=xn(w,o),r!==0&&r!==W.retryLane))throw W.retryLane=r,Ja(e,r),ti(w,e,r),$f;Sh(E)||xu(),s=Yf(e,s,o)}else Sh(E)?(s.flags|=192,s.child=e.child,s=null):(e=W.treeContext,ms=ki(E.nextSibling),yo=s,wn=!0,Ca=null,Si=!1,e!==null&&s_(s,e),s=Vf(s,r.children),s.flags|=4096);return s}return f?(Da(),E=r.fallback,f=s.mode,W=e.child,pe=W.sibling,r=na(W,{mode:"hidden",children:r.children}),r.subtreeFlags=W.subtreeFlags&65011712,pe!==null?E=na(pe,E):(E=er(E,f,o,null),E.flags|=2),E.return=s,r.return=s,r.sibling=E,s.child=r,Bl(null,r),r=s.child,E=e.child.memoizedState,E===null?E=Hf(o):(f=E.cachePool,f!==null?(W=Fs._currentValue,f=f.parent!==W?{parent:W,pool:W}:f):f=c_(),E={baseLanes:E.baseLanes|o,cachePool:f}),r.memoizedState=E,r.childLanes=Uf(e,w,o),s.memoizedState=Pf,Bl(e.child,r)):(Aa(s),o=e.child,e=o.sibling,o=na(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(w=s.deletions,w===null?(s.deletions=[e],s.flags|=16):w.push(e)),s.child=o,s.memoizedState=null,o)}function Vf(e,s){return s=uu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function uu(e,s){return e=li(22,e,null,s),e.lanes=0,e}function Yf(e,s,o){return rr(s,e.child,null,o),e=Vf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function wg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),of(e.return,s,o)}function Wf(e,s,o,r,f,m){var w=e.memoizedState;w===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(w.isBackwards=s,w.rendering=null,w.renderingStartTime=0,w.last=r,w.tail=o,w.tailMode=f,w.treeForkCount=m)}function Sg(e,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var w=zs.current,E=(w&2)!==0;if(E?(w=w&1|2,s.flags|=128):w&=1,q(zs,w),bo(e,s,r,o),r=wn?vl:0,!E&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wg(e,o,s);else if(e.tag===19)wg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&Zc(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Wf(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&Zc(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Wf(s,!0,o,null,m,r);break;case"together":Wf(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function la(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),Ba|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(Dr(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=na(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=na(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Ff(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Yc(e)))}function x2(e,s,o){switch(s.tag){case 3:tt(s,s.stateNode.containerInfo),ja(s,Fs,e.memoizedState.cache),tr();break;case 27:case 5:ze(s);break;case 4:tt(s,s.stateNode.containerInfo);break;case 10:ja(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,gf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(Aa(s),s.flags|=128,null):(o&s.child.childLanes)!==0?vg(e,s,o):(Aa(s),e=la(e,s,o),e!==null?e.sibling:null);Aa(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(Dr(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return Sg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),q(zs,zs.current),r)break;return null;case 22:return s.lanes=0,pg(e,s,o,s.pendingProps);case 24:ja(s,Fs,e.memoizedState.cache)}return la(e,s,o)}function Cg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)qs=!0;else{if(!Ff(e,o)&&(s.flags&128)===0)return qs=!1,x2(e,s,o);qs=(e.flags&131072)!==0}else qs=!1,wn&&(s.flags&1048576)!==0&&n_(s,vl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=ir(s.elementType),s.type=e,typeof e=="function")Kd(e)?(r=cr(e,r),s.tag=1,s=xg(null,s,e,r,o)):(s.tag=0,s=If(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===D){s.tag=11,s=fg(null,s,e,r,o);break e}else if(f===V){s.tag=14,s=hg(null,s,e,r,o);break e}}throw s=J(e)||e,Error(a(306,s,""))}}return s;case 0:return If(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=cr(r,s.pendingProps),xg(e,s,r,f,o);case 3:e:{if(tt(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,ff(e,s),El(s,r,null,o);var w=s.memoizedState;if(r=w.cache,ja(s,Fs,r),r!==m.cache&&af(s,[Fs],o,!0),Tl(),r=w.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:w.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=bg(e,s,r,o);break e}else if(r!==f){f=bi(Error(a(424)),s),wl(f),s=bg(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ms=ki(e.firstChild),yo=s,wn=!0,Ca=null,Si=!0,o=p_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(tr(),r===f){s=la(e,s,o);break e}bo(e,s,r,o)}s=s.child}return s;case 26:return cu(e,s),e===null?(o=L0(s.type,null,s.pendingProps,null))?s.memoizedState=o:wn||(o=s.type,e=s.pendingProps,r=ju(Ne.current).createElement(o),r[en]=s,r[bn]=e,vo(r,o,e),on(r),s.stateNode=r):s.memoizedState=L0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return ze(s),e===null&&wn&&(r=s.stateNode=N0(s.type,s.pendingProps,Ne.current),yo=s,Si=!0,f=ms,Ia(s.type)?(kh=f,ms=ki(r.firstChild)):ms=f),bo(e,s,s.pendingProps.children,o),cu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&wn&&((f=r=ms)&&(r=G2(r,s.type,s.pendingProps,Si),r!==null?(s.stateNode=r,yo=s,ms=ki(r.firstChild),Si=!1,f=!0):f=!1),f||ka(s)),ze(s),f=s.type,m=s.pendingProps,w=e!==null?e.memoizedProps:null,r=m.children,bh(f,m)?r=null:w!==null&&bh(f,w)&&(s.flags|=32),s.memoizedState!==null&&(f=xf(e,s,u2,null,null,o),Gl._currentValue=f),cu(e,s),bo(e,s,r,o),s.child;case 6:return e===null&&wn&&((e=o=ms)&&(o=K2(o,s.pendingProps,Si),o!==null?(s.stateNode=o,yo=s,ms=null,e=!0):e=!1),e||ka(s)),null;case 13:return vg(e,s,o);case 4:return tt(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=rr(s,null,r,o):bo(e,s,r,o),s.child;case 11:return fg(e,s,s.type,s.pendingProps,o);case 7:return bo(e,s,s.pendingProps,o),s.child;case 8:return bo(e,s,s.pendingProps.children,o),s.child;case 12:return bo(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,ja(s,s.type,r.value),bo(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,sr(s),f=xo(f),r=r(f),s.flags|=1,bo(e,s,r,o),s.child;case 14:return hg(e,s,s.type,s.pendingProps,o);case 15:return mg(e,s,s.type,s.pendingProps,o);case 19:return Sg(e,s,o);case 31:return y2(e,s,o);case 22:return pg(e,s,o,s.pendingProps);case 24:return sr(s),r=xo(Fs),e===null?(f=cf(),f===null&&(f=es,m=rf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},df(s),ja(s,Fs,f)):((e.lanes&o)!==0&&(ff(e,s),El(s,null,null,o),Tl()),f=e.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),ja(s,Fs,r)):(r=m.cache,ja(s,Fs,r),r!==f.cache&&af(s,[Fs],o,!0))),bo(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function ca(e){e.flags|=4}function Xf(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Qg())e.flags|=8192;else throw ar=qc,uf}else e.flags&=-16777217}function kg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!P0(s))if(Qg())e.flags|=8192;else throw ar=qc,uf}function du(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?$t():536870912,e.lanes|=s,Vr|=s)}function Ll(e,s){if(!wn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ps(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function b2(e,s,o){var r=s.pendingProps;switch(ef(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ps(s),null;case 1:return ps(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),ia(Fs),Ge(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Ar(s)?ca(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,nf())),ps(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(ca(s),m!==null?(ps(s),kg(s,m)):(ps(s),Xf(s,f,null,r,o))):m?m!==e.memoizedState?(ca(s),ps(s),kg(s,m)):(ps(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&ca(s),ps(s),Xf(s,f,e,r,o)),null;case 27:if(ct(s),o=Ne.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ca(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return ps(s),null}e=fe.current,Ar(s)?o_(s):(e=N0(f,r,o),s.stateNode=e,ca(s))}return ps(s),null;case 5:if(ct(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ca(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return ps(s),null}if(m=fe.current,Ar(s))o_(s);else{var w=ju(Ne.current);switch(m){case 1:m=w.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=w.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=w.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=w.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=w.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?w.createElement("select",{is:r.is}):w.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?w.createElement(f,{is:r.is}):w.createElement(f)}}m[en]=s,m[bn]=r;e:for(w=s.child;w!==null;){if(w.tag===5||w.tag===6)m.appendChild(w.stateNode);else if(w.tag!==4&&w.tag!==27&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===s)break e;for(;w.sibling===null;){if(w.return===null||w.return===s)break e;w=w.return}w.sibling.return=w.return,w=w.sibling}s.stateNode=m;e:switch(vo(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ca(s)}}return ps(s),Xf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&ca(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=Ne.current,Ar(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=yo,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[en]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||v0(e.nodeValue,o)),e||ka(s,!0)}else e=ju(e).createTextNode(r),e[en]=s,s.stateNode=e}return ps(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=Ar(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[en]=s}else tr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ps(s),e=!1}else o=nf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(ui(s),s):(ui(s),null);if((s.flags&128)!==0)throw Error(a(558))}return ps(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Ar(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[en]=s}else tr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ps(s),f=!1}else f=nf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(ui(s),s):(ui(s),null)}return ui(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),du(s,s.updateQueue),ps(s),null);case 4:return Ge(),e===null&&ph(s.stateNode.containerInfo),ps(s),null;case 10:return ia(s.type),ps(s),null;case 19:if(te(zs),r=s.memoizedState,r===null)return ps(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)Ll(r,!1);else{if(Ds!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=Zc(e),m!==null){for(s.flags|=128,Ll(r,!1),e=m.updateQueue,s.updateQueue=e,du(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)Jp(o,e),o=o.sibling;return q(zs,zs.current&1|2),wn&&sa(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&it()>_u&&(s.flags|=128,f=!0,Ll(r,!1),s.lanes=4194304)}else{if(!f)if(e=Zc(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,du(s,e),Ll(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!wn)return ps(s),null}else 2*it()-r.renderingStartTime>_u&&o!==536870912&&(s.flags|=128,f=!0,Ll(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(e=r.last,e!==null?e.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=it(),e.sibling=null,o=zs.current,q(zs,f?o&1|2:o&1),wn&&sa(s,r.treeForkCount),e):(ps(s),null);case 22:case 23:return ui(s),_f(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(ps(s),s.subtreeFlags&6&&(s.flags|=8192)):ps(s),o=s.updateQueue,o!==null&&du(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&te(or),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),ia(Fs),ps(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function v2(e,s){switch(ef(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return ia(Fs),Ge(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return ct(s),null;case 31:if(s.memoizedState!==null){if(ui(s),s.alternate===null)throw Error(a(340));tr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(ui(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));tr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return te(zs),null;case 4:return Ge(),null;case 10:return ia(s.type),null;case 22:case 23:return ui(s),_f(),e!==null&&te(or),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return ia(Fs),null;case 25:return null;default:return null}}function jg(e,s){switch(ef(s),s.tag){case 3:ia(Fs),Ge();break;case 26:case 27:case 5:ct(s);break;case 4:Ge();break;case 31:s.memoizedState!==null&&ui(s);break;case 13:ui(s);break;case 19:te(zs);break;case 10:ia(s.type);break;case 22:case 23:ui(s),_f(),e!==null&&te(or);break;case 24:ia(Fs)}}function Ol(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var m=o.create,w=o.inst;r=m(),w.destroy=r}o=o.next}while(o!==f)}}catch(E){In(s,s.return,E)}}function Na(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&e)===e){var w=r.inst,E=w.destroy;if(E!==void 0){w.destroy=void 0,f=s;var W=o,pe=E;try{pe()}catch(Ce){In(f,W,Ce)}}}r=r.next}while(r!==m)}}catch(Ce){In(s,s.return,Ce)}}function Mg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{g_(s,o)}catch(r){In(e,e.return,r)}}}function Tg(e,s,o){o.props=cr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){In(e,s,r)}}function zl(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){In(e,s,f)}}function Xi(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){In(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){In(e,s,f)}else o.current=null}function Eg(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){In(e,e.return,f)}}function qf(e,s,o){try{var r=e.stateNode;V2(r,e.type,o,s),r[bn]=s}catch(f){In(e,e.return,f)}}function Ag(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ia(e.type)||e.tag===4}function Gf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ag(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kf(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Os));else if(r!==4&&(r===27&&Ia(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(Kf(e,s,o),e=e.sibling;e!==null;)Kf(e,s,o),e=e.sibling}function fu(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&Ia(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(fu(e,s,o),e=e.sibling;e!==null;)fu(e,s,o),e=e.sibling}function Dg(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);vo(s,r,o),s[en]=e,s[bn]=o}catch(m){In(e,e.return,m)}}var ua=!1,Gs=!1,Qf=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,ho=null;function w2(e,s){if(e=e.containerInfo,yh=Ru,e=Sn(e),On(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var w=0,E=-1,W=-1,pe=0,Ce=0,Re=e,_e=null;t:for(;;){for(var ye;Re!==o||f!==0&&Re.nodeType!==3||(E=w+f),Re!==m||r!==0&&Re.nodeType!==3||(W=w+r),Re.nodeType===3&&(w+=Re.nodeValue.length),(ye=Re.firstChild)!==null;)_e=Re,Re=ye;for(;;){if(Re===e)break t;if(_e===o&&++pe===f&&(E=w),_e===m&&++Ce===r&&(W=w),(ye=Re.nextSibling)!==null)break;Re=_e,_e=Re.parentNode}Re=ye}o=E===-1||W===-1?null:{start:E,end:W}}else o=null}o=o||{start:0,end:0}}else o=null;for(xh={focusedElem:e,selectionRange:o},Ru=!1,ho=s;ho!==null;)if(s=ho,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,ho=e;else for(;ho!==null;){switch(s=ho,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var At=cr(o.type,f);e=r.getSnapshotBeforeUpdate(At,m),r.__reactInternalSnapshotBeforeUpdate=e}catch(Yt){In(o,o.return,Yt)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)wh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,ho=e;break}ho=s.return}}function Rg(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:fa(e,o),r&4&&Ol(5,o);break;case 1:if(fa(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(w){In(o,o.return,w)}else{var f=cr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(w){In(o,o.return,w)}}r&64&&Mg(o),r&512&&zl(o,o.return);break;case 3:if(fa(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{g_(e,s)}catch(w){In(o,o.return,w)}}break;case 27:s===null&&r&4&&Dg(o);case 26:case 5:fa(e,o),s===null&&r&4&&Eg(o),r&512&&zl(o,o.return);break;case 12:fa(e,o);break;case 31:fa(e,o),r&4&&Og(e,o);break;case 13:fa(e,o),r&4&&zg(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=D2.bind(null,o),Q2(e,o))));break;case 22:if(r=o.memoizedState!==null||ua,!r){s=s!==null&&s.memoizedState!==null||Gs,f=ua;var m=Gs;ua=r,(Gs=s)&&!m?ha(e,o,(o.subtreeFlags&8772)!==0):fa(e,o),ua=f,Gs=m}break;case 30:break;default:fa(e,o)}}function Bg(e){var s=e.alternate;s!==null&&(e.alternate=null,Bg(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&ao(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xs=null,Qo=!1;function da(e,s,o){for(o=o.child;o!==null;)Lg(e,s,o),o=o.sibling}function Lg(e,s,o){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(He,o)}catch{}switch(o.tag){case 26:Gs||Xi(o,s),da(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Gs||Xi(o,s);var r=xs,f=Qo;Ia(o.type)&&(xs=o.stateNode,Qo=!1),da(e,s,o),Fl(o.stateNode),xs=r,Qo=f;break;case 5:Gs||Xi(o,s);case 6:if(r=xs,f=Qo,xs=null,da(e,s,o),xs=r,Qo=f,xs!==null)if(Qo)try{(xs.nodeType===9?xs.body:xs.nodeName==="HTML"?xs.ownerDocument.body:xs).removeChild(o.stateNode)}catch(m){In(o,s,m)}else try{xs.removeChild(o.stateNode)}catch(m){In(o,s,m)}break;case 18:xs!==null&&(Qo?(e=xs,M0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),Qr(e)):M0(xs,o.stateNode));break;case 4:r=xs,f=Qo,xs=o.stateNode.containerInfo,Qo=!0,da(e,s,o),xs=r,Qo=f;break;case 0:case 11:case 14:case 15:Na(2,o,s),Gs||Na(4,o,s),da(e,s,o);break;case 1:Gs||(Xi(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Tg(o,s,r)),da(e,s,o);break;case 21:da(e,s,o);break;case 22:Gs=(r=Gs)||o.memoizedState!==null,da(e,s,o),Gs=r;break;default:da(e,s,o)}}function Og(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qr(e)}catch(o){In(s,s.return,o)}}}function zg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qr(e)}catch(o){In(s,s.return,o)}}function S2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Ng),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Ng),s;default:throw Error(a(435,e.tag))}}function hu(e,s){var o=S2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=N2.bind(null,e,r);r.then(f,f)}})}function Zo(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=e,w=s,E=w;e:for(;E!==null;){switch(E.tag){case 27:if(Ia(E.type)){xs=E.stateNode,Qo=!1;break e}break;case 5:xs=E.stateNode,Qo=!1;break e;case 3:case 4:xs=E.stateNode.containerInfo,Qo=!0;break e}E=E.return}if(xs===null)throw Error(a(160));Lg(m,w,f),xs=null,Qo=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)$g(s,e),s=s.sibling}var Oi=null;function $g(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zo(s,e),Jo(e),r&4&&(Na(3,e,e.return),Ol(3,e),Na(5,e,e.return));break;case 1:Zo(s,e),Jo(e),r&512&&(Gs||o===null||Xi(o,o.return)),r&64&&ua&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=Oi;if(Zo(s,e),Jo(e),r&512&&(Gs||o===null||Xi(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Rs]||m[en]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),vo(m,r,o),m[en]=e,on(m),r=m;break e;case"link":var w=$0("link","href",f).get(r+(o.href||""));if(w){for(var E=0;E<w.length;E++)if(m=w[E],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){w.splice(E,1);break t}}m=f.createElement(r),vo(m,r,o),f.head.appendChild(m);break;case"meta":if(w=$0("meta","content",f).get(r+(o.content||""))){for(E=0;E<w.length;E++)if(m=w[E],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){w.splice(E,1);break t}}m=f.createElement(r),vo(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[en]=e,on(m),r=m}e.stateNode=r}else I0(f,e.type,e.stateNode);else e.stateNode=z0(f,r,e.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?I0(f,e.type,e.stateNode):z0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&qf(e,e.memoizedProps,o.memoizedProps)}break;case 27:Zo(s,e),Jo(e),r&512&&(Gs||o===null||Xi(o,o.return)),o!==null&&r&4&&qf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(Zo(s,e),Jo(e),r&512&&(Gs||o===null||Xi(o,o.return)),e.flags&32){f=e.stateNode;try{ko(f,"")}catch(At){In(e,e.return,At)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,qf(e,f,o!==null?o.memoizedProps:f)),r&1024&&(Qf=!0);break;case 6:if(Zo(s,e),Jo(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(At){In(e,e.return,At)}}break;case 3:if(Eu=null,f=Oi,Oi=Mu(s.containerInfo),Zo(s,e),Oi=f,Jo(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{Qr(s.containerInfo)}catch(At){In(e,e.return,At)}Qf&&(Qf=!1,Ig(e));break;case 4:r=Oi,Oi=Mu(e.stateNode.containerInfo),Zo(s,e),Jo(e),Oi=r;break;case 12:Zo(s,e),Jo(e);break;case 31:Zo(s,e),Jo(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hu(e,r)));break;case 13:Zo(s,e),Jo(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(pu=it()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hu(e,r)));break;case 22:f=e.memoizedState!==null;var W=o!==null&&o.memoizedState!==null,pe=ua,Ce=Gs;if(ua=pe||f,Gs=Ce||W,Zo(s,e),Gs=Ce,ua=pe,Jo(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||W||ua||Gs||ur(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){W=o=s;try{if(m=W.stateNode,f)w=m.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{E=W.stateNode;var Re=W.memoizedProps.style,_e=Re!=null&&Re.hasOwnProperty("display")?Re.display:null;E.style.display=_e==null||typeof _e=="boolean"?"":(""+_e).trim()}}catch(At){In(W,W.return,At)}}}else if(s.tag===6){if(o===null){W=s;try{W.stateNode.nodeValue=f?"":W.memoizedProps}catch(At){In(W,W.return,At)}}}else if(s.tag===18){if(o===null){W=s;try{var ye=W.stateNode;f?T0(ye,!0):T0(W.stateNode,!1)}catch(At){In(W,W.return,At)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,hu(e,o))));break;case 19:Zo(s,e),Jo(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hu(e,r)));break;case 30:break;case 21:break;default:Zo(s,e),Jo(e)}}function Jo(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(Ag(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Gf(e);fu(e,m,f);break;case 5:var w=o.stateNode;o.flags&32&&(ko(w,""),o.flags&=-33);var E=Gf(e);fu(e,E,w);break;case 3:case 4:var W=o.stateNode.containerInfo,pe=Gf(e);Kf(e,pe,W);break;default:throw Error(a(161))}}catch(Ce){In(e,e.return,Ce)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Ig(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;Ig(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function fa(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Rg(e,s.alternate,s),s=s.sibling}function ur(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:Na(4,s,s.return),ur(s);break;case 1:Xi(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Tg(s,s.return,o),ur(s);break;case 27:Fl(s.stateNode);case 26:case 5:Xi(s,s.return),ur(s);break;case 22:s.memoizedState===null&&ur(s);break;case 30:ur(s);break;default:ur(s)}e=e.sibling}}function ha(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,m=s,w=m.flags;switch(m.tag){case 0:case 11:case 15:ha(f,m,o),Ol(4,m);break;case 1:if(ha(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(pe){In(r,r.return,pe)}if(r=m,f=r.updateQueue,f!==null){var E=r.stateNode;try{var W=f.shared.hiddenCallbacks;if(W!==null)for(f.shared.hiddenCallbacks=null,f=0;f<W.length;f++)__(W[f],E)}catch(pe){In(r,r.return,pe)}}o&&w&64&&Mg(m),zl(m,m.return);break;case 27:Dg(m);case 26:case 5:ha(f,m,o),o&&r===null&&w&4&&Eg(m),zl(m,m.return);break;case 12:ha(f,m,o);break;case 31:ha(f,m,o),o&&w&4&&Og(f,m);break;case 13:ha(f,m,o),o&&w&4&&zg(f,m);break;case 22:m.memoizedState===null&&ha(f,m,o),zl(m,m.return);break;case 30:break;default:ha(f,m,o)}s=s.sibling}}function Zf(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&Sl(o))}function Jf(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Sl(e))}function zi(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Pg(e,s,o,r),s=s.sibling}function Pg(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:zi(e,s,o,r),f&2048&&Ol(9,s);break;case 1:zi(e,s,o,r);break;case 3:zi(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Sl(e)));break;case 12:if(f&2048){zi(e,s,o,r),e=s.stateNode;try{var m=s.memoizedProps,w=m.id,E=m.onPostCommit;typeof E=="function"&&E(w,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(W){In(s,s.return,W)}}else zi(e,s,o,r);break;case 31:zi(e,s,o,r);break;case 13:zi(e,s,o,r);break;case 23:break;case 22:m=s.stateNode,w=s.alternate,s.memoizedState!==null?m._visibility&2?zi(e,s,o,r):$l(e,s):m._visibility&2?zi(e,s,o,r):(m._visibility|=2,Pr(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Zf(w,s);break;case 24:zi(e,s,o,r),f&2048&&Jf(s.alternate,s);break;default:zi(e,s,o,r)}}function Pr(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,w=s,E=o,W=r,pe=w.flags;switch(w.tag){case 0:case 11:case 15:Pr(m,w,E,W,f),Ol(8,w);break;case 23:break;case 22:var Ce=w.stateNode;w.memoizedState!==null?Ce._visibility&2?Pr(m,w,E,W,f):$l(m,w):(Ce._visibility|=2,Pr(m,w,E,W,f)),f&&pe&2048&&Zf(w.alternate,w);break;case 24:Pr(m,w,E,W,f),f&&pe&2048&&Jf(w.alternate,w);break;default:Pr(m,w,E,W,f)}s=s.sibling}}function $l(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:$l(o,r),f&2048&&Zf(r.alternate,r);break;case 24:$l(o,r),f&2048&&Jf(r.alternate,r);break;default:$l(o,r)}s=s.sibling}}var Il=8192;function Hr(e,s,o){if(e.subtreeFlags&Il)for(e=e.child;e!==null;)Hg(e,s,o),e=e.sibling}function Hg(e,s,o){switch(e.tag){case 26:Hr(e,s,o),e.flags&Il&&e.memoizedState!==null&&cv(o,Oi,e.memoizedState,e.memoizedProps);break;case 5:Hr(e,s,o);break;case 3:case 4:var r=Oi;Oi=Mu(e.stateNode.containerInfo),Hr(e,s,o),Oi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Il,Il=16777216,Hr(e,s,o),Il=r):Hr(e,s,o));break;default:Hr(e,s,o)}}function Ug(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Pl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];ho=r,Yg(r,e)}Ug(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vg(e),e=e.sibling}function Vg(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Na(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,mu(e)):Pl(e);break;default:Pl(e)}}function mu(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];ho=r,Yg(r,e)}Ug(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:Na(8,s,s.return),mu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,mu(s));break;default:mu(s)}e=e.sibling}}function Yg(e,s){for(;ho!==null;){var o=ho;switch(o.tag){case 0:case 11:case 15:Na(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Sl(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,ho=r;else e:for(o=e;ho!==null;){r=ho;var f=r.sibling,m=r.return;if(Bg(r),r===o){ho=null;break e}if(f!==null){f.return=m,ho=f;break e}ho=m}}}var C2={getCacheForType:function(e){var s=xo(Fs),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return xo(Fs).controller.signal}},k2=typeof WeakMap=="function"?WeakMap:Map,Rn=0,es=null,mn=null,gn=0,$n=0,di=null,Ra=!1,Ur=!1,eh=!1,ma=0,Ds=0,Ba=0,dr=0,th=0,fi=0,Vr=0,Hl=null,ei=null,nh=!1,pu=0,Wg=0,_u=1/0,gu=null,La=null,no=0,Oa=null,Yr=null,pa=0,sh=0,oh=null,Fg=null,Ul=0,ih=null;function hi(){return(Rn&2)!==0&&gn!==0?gn&-gn:L.T!==null?dh():ns()}function Xg(){if(fi===0)if((gn&536870912)===0||wn){var e=vt;vt<<=1,(vt&3932160)===0&&(vt=262144),fi=e}else fi=536870912;return e=ci.current,e!==null&&(e.flags|=32),fi}function ti(e,s,o){(e===es&&($n===2||$n===9)||e.cancelPendingCommit!==null)&&(Wr(e,0),za(e,gn,fi,!1)),gt(e,o),((Rn&2)===0||e!==es)&&(e===es&&((Rn&2)===0&&(dr|=o),Ds===4&&za(e,gn,fi,!1)),qi(e))}function qg(e,s,o){if((Rn&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||_t(e,s),f=r?T2(e,s):rh(e,s,!0),m=r;do{if(f===0){Ur&&!r&&za(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!j2(o)){f=rh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var w=0;else w=e.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){s=w;e:{var E=e;f=Hl;var W=E.current.memoizedState.isDehydrated;if(W&&(Wr(E,w).flags|=256),w=rh(E,w,!1),w!==2){if(eh&&!W){E.errorRecoveryDisabledLanes|=m,dr|=m,f=4;break e}m=ei,ei=f,m!==null&&(ei===null?ei=m:ei.push.apply(ei,m))}f=w}if(m=!1,f!==2)continue}}if(f===1){Wr(e,0),za(e,s,0,!0);break}e:{switch(r=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:za(r,s,fi,!Ra);break e;case 2:ei=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=pu+300-it(),10<f)){if(za(r,s,fi,!Ra),qe(r,0,!0)!==0)break e;pa=s,r.timeoutHandle=k0(Gg.bind(null,r,o,ei,gu,nh,s,fi,dr,Vr,Ra,m,"Throttled",-0,0),f);break e}Gg(r,o,ei,gu,nh,s,fi,dr,Vr,Ra,m,null,-0,0)}}break}while(!0);qi(e)}function Gg(e,s,o,r,f,m,w,E,W,pe,Ce,Re,_e,ye){if(e.timeoutHandle=-1,Re=s.subtreeFlags,Re&8192||(Re&16785408)===16785408){Re={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Os},Hg(s,m,Re);var At=(m&62914560)===m?pu-it():(m&4194048)===m?Wg-it():0;if(At=uv(Re,At),At!==null){pa=m,e.cancelPendingCommit=At(s0.bind(null,e,s,m,o,r,f,w,E,W,Ce,Re,null,_e,ye)),za(e,m,w,!pe);return}}s0(e,s,m,o,r,f,w,E,W)}function j2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!jt(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function za(e,s,o,r){s&=~th,s&=~dr,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var m=31-yt(f),w=1<<m;r[m]=-1,f&=~w}o!==0&&Ln(e,o,s)}function yu(){return(Rn&6)===0?(Vl(0),!1):!0}function ah(){if(mn!==null){if($n===0)var e=mn.return;else e=mn,oa=nr=null,wf(e),Lr=null,kl=0,e=mn;for(;e!==null;)jg(e.alternate,e),e=e.return;mn=null}}function Wr(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,F2(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),pa=0,ah(),es=e,mn=o=na(e.current,null),gn=s,$n=0,di=null,Ra=!1,Ur=_t(e,s),eh=!1,Vr=fi=th=dr=Ba=Ds=0,ei=Hl=null,nh=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-yt(r),m=1<<f;s|=e[f],r&=~m}return ma=s,Ic(),o}function Kg(e,s){rn=null,L.H=Rl,s===Br||s===Xc?(s=f_(),$n=3):s===uf?(s=f_(),$n=4):$n=s===$f?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,di=s,mn===null&&(Ds=1,ru(e,bi(s,e.current)))}function Qg(){var e=ci.current;return e===null?!0:(gn&4194048)===gn?Ci===null:(gn&62914560)===gn||(gn&536870912)!==0?e===Ci:!1}function Zg(){var e=L.H;return L.H=Rl,e===null?Rl:e}function Jg(){var e=L.A;return L.A=C2,e}function xu(){Ds=4,Ra||(gn&4194048)!==gn&&ci.current!==null||(Ur=!0),(Ba&134217727)===0&&(dr&134217727)===0||es===null||za(es,gn,fi,!1)}function rh(e,s,o){var r=Rn;Rn|=2;var f=Zg(),m=Jg();(es!==e||gn!==s)&&(gu=null,Wr(e,s)),s=!1;var w=Ds;e:do try{if($n!==0&&mn!==null){var E=mn,W=di;switch($n){case 8:ah(),w=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(s=!0);var pe=$n;if($n=0,di=null,Fr(e,E,W,pe),o&&Ur){w=0;break e}break;default:pe=$n,$n=0,di=null,Fr(e,E,W,pe)}}M2(),w=Ds;break}catch(Ce){Kg(e,Ce)}while(!0);return s&&e.shellSuspendCounter++,oa=nr=null,Rn=r,L.H=f,L.A=m,mn===null&&(es=null,gn=0,Ic()),w}function M2(){for(;mn!==null;)e0(mn)}function T2(e,s){var o=Rn;Rn|=2;var r=Zg(),f=Jg();es!==e||gn!==s?(gu=null,_u=it()+500,Wr(e,s)):Ur=_t(e,s);e:do try{if($n!==0&&mn!==null){s=mn;var m=di;t:switch($n){case 1:$n=0,di=null,Fr(e,s,m,1);break;case 2:case 9:if(u_(m)){$n=0,di=null,t0(s);break}s=function(){$n!==2&&$n!==9||es!==e||($n=7),qi(e)},m.then(s,s);break e;case 3:$n=7;break e;case 4:$n=5;break e;case 7:u_(m)?($n=0,di=null,t0(s)):($n=0,di=null,Fr(e,s,m,7));break;case 5:var w=null;switch(mn.tag){case 26:w=mn.memoizedState;case 5:case 27:var E=mn;if(w?P0(w):E.stateNode.complete){$n=0,di=null;var W=E.sibling;if(W!==null)mn=W;else{var pe=E.return;pe!==null?(mn=pe,bu(pe)):mn=null}break t}}$n=0,di=null,Fr(e,s,m,5);break;case 6:$n=0,di=null,Fr(e,s,m,6);break;case 8:ah(),Ds=6;break e;default:throw Error(a(462))}}E2();break}catch(Ce){Kg(e,Ce)}while(!0);return oa=nr=null,L.H=r,L.A=f,Rn=o,mn!==null?0:(es=null,gn=0,Ic(),Ds)}function E2(){for(;mn!==null&&!ut();)e0(mn)}function e0(e){var s=Cg(e.alternate,e,ma);e.memoizedProps=e.pendingProps,s===null?bu(e):mn=s}function t0(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=yg(o,s,s.pendingProps,s.type,void 0,gn);break;case 11:s=yg(o,s,s.pendingProps,s.type.render,s.ref,gn);break;case 5:wf(s);default:jg(o,s),s=mn=Jp(s,ma),s=Cg(o,s,ma)}e.memoizedProps=e.pendingProps,s===null?bu(e):mn=s}function Fr(e,s,o,r){oa=nr=null,wf(s),Lr=null,kl=0;var f=s.return;try{if(g2(e,f,s,o,gn)){Ds=1,ru(e,bi(o,e.current)),mn=null;return}}catch(m){if(f!==null)throw mn=f,m;Ds=1,ru(e,bi(o,e.current)),mn=null;return}s.flags&32768?(wn||r===1?e=!0:Ur||(gn&536870912)!==0?e=!1:(Ra=e=!0,(r===2||r===9||r===3||r===6)&&(r=ci.current,r!==null&&r.tag===13&&(r.flags|=16384))),n0(s,e)):bu(s)}function bu(e){var s=e;do{if((s.flags&32768)!==0){n0(s,Ra);return}e=s.return;var o=b2(s.alternate,s,ma);if(o!==null){mn=o;return}if(s=s.sibling,s!==null){mn=s;return}mn=s=e}while(s!==null);Ds===0&&(Ds=5)}function n0(e,s){do{var o=v2(e.alternate,e);if(o!==null){o.flags&=32767,mn=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){mn=e;return}mn=e=o}while(e!==null);Ds=6,mn=null}function s0(e,s,o,r,f,m,w,E,W){e.cancelPendingCommit=null;do vu();while(no!==0);if((Rn&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=qd,Ft(e,o,m,w,E,W),e===es&&(mn=es=null,gn=0),Yr=s,Oa=e,pa=o,sh=m,oh=f,Fg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,R2(Ve,function(){return l0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=L.T,L.T=null,f=ne.p,ne.p=2,w=Rn,Rn|=4;try{w2(e,s,o)}finally{Rn=w,ne.p=f,L.T=r}}no=1,o0(),i0(),a0()}}function o0(){if(no===1){no=0;var e=Oa,s=Yr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=L.T,L.T=null;var r=ne.p;ne.p=2;var f=Rn;Rn|=4;try{$g(s,e);var m=xh,w=Sn(e.containerInfo),E=m.focusedElem,W=m.selectionRange;if(w!==E&&E&&E.ownerDocument&&fs(E.ownerDocument.documentElement,E)){if(W!==null&&On(E)){var pe=W.start,Ce=W.end;if(Ce===void 0&&(Ce=pe),"selectionStart"in E)E.selectionStart=pe,E.selectionEnd=Math.min(Ce,E.value.length);else{var Re=E.ownerDocument||document,_e=Re&&Re.defaultView||window;if(_e.getSelection){var ye=_e.getSelection(),At=E.textContent.length,Yt=Math.min(W.start,At),Yn=W.end===void 0?Yt:Math.min(W.end,At);!ye.extend&&Yt>Yn&&(w=Yn,Yn=Yt,Yt=w);var ce=ds(E,Yt),Z=ds(E,Yn);if(ce&&Z&&(ye.rangeCount!==1||ye.anchorNode!==ce.node||ye.anchorOffset!==ce.offset||ye.focusNode!==Z.node||ye.focusOffset!==Z.offset)){var me=Re.createRange();me.setStart(ce.node,ce.offset),ye.removeAllRanges(),Yt>Yn?(ye.addRange(me),ye.extend(Z.node,Z.offset)):(me.setEnd(Z.node,Z.offset),ye.addRange(me))}}}}for(Re=[],ye=E;ye=ye.parentNode;)ye.nodeType===1&&Re.push({element:ye,left:ye.scrollLeft,top:ye.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<Re.length;E++){var De=Re[E];De.element.scrollLeft=De.left,De.element.scrollTop=De.top}}Ru=!!yh,xh=yh=null}finally{Rn=f,ne.p=r,L.T=o}}e.current=s,no=2}}function i0(){if(no===2){no=0;var e=Oa,s=Yr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=L.T,L.T=null;var r=ne.p;ne.p=2;var f=Rn;Rn|=4;try{Rg(e,s.alternate,s)}finally{Rn=f,ne.p=r,L.T=o}}no=3}}function a0(){if(no===4||no===3){no=0,ot();var e=Oa,s=Yr,o=pa,r=Fg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?no=5:(no=0,Yr=Oa=null,r0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(La=null),is(o),s=s.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(He,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=L.T,f=ne.p,ne.p=2,L.T=null;try{for(var m=e.onRecoverableError,w=0;w<r.length;w++){var E=r[w];m(E.value,{componentStack:E.stack})}}finally{L.T=s,ne.p=f}}(pa&3)!==0&&vu(),qi(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===ih?Ul++:(Ul=0,ih=e):Ul=0,Vl(0)}}function r0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,Sl(s)))}function vu(){return o0(),i0(),a0(),l0()}function l0(){if(no!==5)return!1;var e=Oa,s=sh;sh=0;var o=is(pa),r=L.T,f=ne.p;try{ne.p=32>o?32:o,L.T=null,o=oh,oh=null;var m=Oa,w=pa;if(no=0,Yr=Oa=null,pa=0,(Rn&6)!==0)throw Error(a(331));var E=Rn;if(Rn|=4,Vg(m.current),Pg(m,m.current,w,o),Rn=E,Vl(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(He,m)}catch{}return!0}finally{ne.p=f,L.T=r,r0(e,s)}}function c0(e,s,o){s=bi(o,s),s=zf(e.stateNode,s,2),e=Ea(e,s,2),e!==null&&(gt(e,2),qi(e))}function In(e,s,o){if(e.tag===3)c0(e,e,o);else for(;s!==null;){if(s.tag===3){c0(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(La===null||!La.has(r))){e=bi(o,e),o=ug(2),r=Ea(s,o,2),r!==null&&(dg(o,r,s,e),gt(r,2),qi(r));break}}s=s.return}}function lh(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new k2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(eh=!0,f.add(o),e=A2.bind(null,e,s,o),s.then(e,e))}function A2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,es===e&&(gn&o)===o&&(Ds===4||Ds===3&&(gn&62914560)===gn&&300>it()-pu?(Rn&2)===0&&Wr(e,0):th|=o,Vr===gn&&(Vr=0)),qi(e)}function u0(e,s){s===0&&(s=$t()),e=Ja(e,s),e!==null&&(gt(e,s),qi(e))}function D2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),u0(e,o)}function N2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),u0(e,o)}function R2(e,s){return Ke(e,s)}var wu=null,Xr=null,ch=!1,Su=!1,uh=!1,$a=0;function qi(e){e!==Xr&&e.next===null&&(Xr===null?wu=Xr=e:Xr=Xr.next=e),Su=!0,ch||(ch=!0,L2())}function Vl(e,s){if(!uh&&Su){uh=!0;do for(var o=!1,r=wu;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var w=r.suspendedLanes,E=r.pingedLanes;m=(1<<31-yt(42|e)+1)-1,m&=f&~(w&~E),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,m0(r,m))}else m=gn,m=qe(r,r===es?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||_t(r,m)||(o=!0,m0(r,m));r=r.next}while(o);uh=!1}}function B2(){d0()}function d0(){Su=ch=!1;var e=0;$a!==0&&W2()&&(e=$a);for(var s=it(),o=null,r=wu;r!==null;){var f=r.next,m=f0(r,s);m===0?(r.next=null,o===null?wu=f:o.next=f,f===null&&(Xr=o)):(o=r,(e!==0||(m&3)!==0)&&(Su=!0)),r=f}no!==0&&no!==5||Vl(e),$a!==0&&($a=0)}function f0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var w=31-yt(m),E=1<<w,W=f[w];W===-1?((E&o)===0||(E&r)!==0)&&(f[w]=ht(E,s)):W<=s&&(e.expiredLanes|=E),m&=~E}if(s=es,o=gn,o=qe(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&($n===2||$n===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ie(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||_t(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&Ie(r),is(o)){case 2:case 8:o=Bt;break;case 32:o=Ve;break;case 268435456:o=ee;break;default:o=Ve}return r=h0.bind(null,e),o=Ke(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&Ie(r),e.callbackPriority=2,e.callbackNode=null,2}function h0(e,s){if(no!==0&&no!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(vu()&&e.callbackNode!==o)return null;var r=gn;return r=qe(e,e===es?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(qg(e,r,s),f0(e,it()),e.callbackNode!=null&&e.callbackNode===o?h0.bind(null,e):null)}function m0(e,s){if(vu())return null;qg(e,s,!0)}function L2(){X2(function(){(Rn&6)!==0?Ke(bt,B2):d0()})}function dh(){if($a===0){var e=Nr;e===0&&(e=We,We<<=1,(We&261888)===0&&(We=256)),$a=e}return $a}function p0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:zo(""+e)}function _0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function O2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=p0((f[bn]||null).action),w=r.submitter;w&&(s=(s=w[bn]||null)?p0(s.formAction):w.getAttribute("formAction"),s!==null&&(m=s,w=null));var E=new oe("action","action",null,r,f);e.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if($a!==0){var W=w?_0(f,w):new FormData(f);Df(o,{pending:!0,data:W,method:f.method,action:m},null,W)}}else typeof m=="function"&&(E.preventDefault(),W=w?_0(f,w):new FormData(f),Df(o,{pending:!0,data:W,method:f.method,action:m},m,W))},currentTarget:f}]})}}for(var fh=0;fh<Xd.length;fh++){var hh=Xd[fh],z2=hh.toLowerCase(),$2=hh[0].toUpperCase()+hh.slice(1);Li(z2,"on"+$2)}Li(Bi,"onAnimationEnd"),Li(Yi,"onAnimationIteration"),Li(zc,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(Yd,"onTransitionRun"),Li(Wd,"onTransitionStart"),Li(Fd,"onTransitionCancel"),Li(Kp,"onTransitionEnd"),Xn("onMouseEnter",["mouseout","mouseover"]),Xn("onMouseLeave",["mouseout","mouseover"]),Xn("onPointerEnter",["pointerout","pointerover"]),Xn("onPointerLeave",["pointerout","pointerover"]),Zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Zs("onBeforeInput",["compositionend","keypress","textInput","paste"]),Zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function g0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var w=r.length-1;0<=w;w--){var E=r[w],W=E.instance,pe=E.currentTarget;if(E=E.listener,W!==m&&f.isPropagationStopped())break e;m=E,f.currentTarget=pe;try{m(f)}catch(Ce){$c(Ce)}f.currentTarget=null,m=W}else for(w=0;w<r.length;w++){if(E=r[w],W=E.instance,pe=E.currentTarget,E=E.listener,W!==m&&f.isPropagationStopped())break e;m=E,f.currentTarget=pe;try{m(f)}catch(Ce){$c(Ce)}f.currentTarget=null,m=W}}}}function pn(e,s){var o=s[Tn];o===void 0&&(o=s[Tn]=new Set);var r=e+"__bubble";o.has(r)||(y0(s,e,2,!1),o.add(r))}function mh(e,s,o){var r=0;s&&(r|=4),y0(o,e,r,s)}var Cu="_reactListening"+Math.random().toString(36).slice(2);function ph(e){if(!e[Cu]){e[Cu]=!0,oi.forEach(function(o){o!=="selectionchange"&&(I2.has(o)||mh(o,!1,e),mh(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Cu]||(s[Cu]=!0,mh("selectionchange",!1,s))}}function y0(e,s,o,r){switch(X0(s)){case 2:var f=hv;break;case 8:f=mv;break;default:f=Ah}o=f.bind(null,s,o,e),f=void 0,!Ws||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function _h(e,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var w=r.tag;if(w===3||w===4){var E=r.stateNode.containerInfo;if(E===f)break;if(w===4)for(w=r.return;w!==null;){var W=w.tag;if((W===3||W===4)&&w.stateNode.containerInfo===f)return;w=w.return}for(;E!==null;){if(w=ro(E),w===null)return;if(W=w.tag,W===5||W===6||W===26||W===27){r=m=w;continue e}E=E.parentNode}}r=r.return}Kn(function(){var pe=m,Ce=js(o),Re=[];e:{var _e=Qp.get(e);if(_e!==void 0){var ye=oe,At=e;switch(e){case"keypress":if(Ts(o)===0)break e;case"keydown":case"keyup":ye=ri;break;case"focusin":At="focus",ye=nt;break;case"focusout":At="blur",ye=nt;break;case"beforeblur":case"afterblur":ye=nt;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=lt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=Et;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=Vi;break;case Bi:case Yi:case zc:ye=Ut;break;case Kp:ye=Io;break;case"scroll":case"scrollend":ye=T;break;case"wheel":ye=Be;break;case"copy":case"cut":case"paste":ye=fn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=Zn;break;case"toggle":case"beforetoggle":ye=wt}var Yt=(s&4)!==0,Yn=!Yt&&(e==="scroll"||e==="scrollend"),ce=Yt?_e!==null?_e+"Capture":null:_e;Yt=[];for(var Z=pe,me;Z!==null;){var De=Z;if(me=De.stateNode,De=De.tag,De!==5&&De!==26&&De!==27||me===null||ce===null||(De=tn(Z,ce),De!=null&&Yt.push(Wl(Z,De,me))),Yn)break;Z=Z.return}0<Yt.length&&(_e=new ye(_e,At,null,o,Ce),Re.push({event:_e,listeners:Yt}))}}if((s&7)===0){e:{if(_e=e==="mouseover"||e==="pointerover",ye=e==="mouseout"||e==="pointerout",_e&&o!==jo&&(At=o.relatedTarget||o.fromElement)&&(ro(At)||At[Qe]))break e;if((ye||_e)&&(_e=Ce.window===Ce?Ce:(_e=Ce.ownerDocument)?_e.defaultView||_e.parentWindow:window,ye?(At=o.relatedTarget||o.toElement,ye=pe,At=At?ro(At):null,At!==null&&(Yn=u(At),Yt=At.tag,At!==Yn||Yt!==5&&Yt!==27&&Yt!==6)&&(At=null)):(ye=null,At=pe),ye!==At)){if(Yt=lt,De="onMouseLeave",ce="onMouseEnter",Z="mouse",(e==="pointerout"||e==="pointerover")&&(Yt=Zn,De="onPointerLeave",ce="onPointerEnter",Z="pointer"),Yn=ye==null?_e:gs(ye),me=At==null?_e:gs(At),_e=new Yt(De,Z+"leave",ye,o,Ce),_e.target=Yn,_e.relatedTarget=me,De=null,ro(Ce)===pe&&(Yt=new Yt(ce,Z+"enter",At,o,Ce),Yt.target=me,Yt.relatedTarget=Yn,De=Yt),Yn=De,ye&&At)t:{for(Yt=P2,ce=ye,Z=At,me=0,De=ce;De;De=Yt(De))me++;De=0;for(var Ht=Z;Ht;Ht=Yt(Ht))De++;for(;0<me-De;)ce=Yt(ce),me--;for(;0<De-me;)Z=Yt(Z),De--;for(;me--;){if(ce===Z||Z!==null&&ce===Z.alternate){Yt=ce;break t}ce=Yt(ce),Z=Yt(Z)}Yt=null}else Yt=null;ye!==null&&x0(Re,_e,ye,Yt,!1),At!==null&&Yn!==null&&x0(Re,Yn,At,Yt,!0)}}e:{if(_e=pe?gs(pe):window,ye=_e.nodeName&&_e.nodeName.toLowerCase(),ye==="select"||ye==="input"&&_e.type==="file")var An=O;else if(xl(_e))if(G)An=Zt;else{An=kt;var Lt=Je}else ye=_e.nodeName,!ye||ye.toLowerCase()!=="input"||_e.type!=="checkbox"&&_e.type!=="radio"?pe&&Ls(pe.elementType)&&(An=O):An=Ot;if(An&&(An=An(e,pe))){bl(Re,An,o,Ce);break e}Lt&&Lt(e,_e,pe),e==="focusout"&&pe&&_e.type==="number"&&pe.memoizedProps.value!=null&&po(_e,"number",_e.value)}switch(Lt=pe?gs(pe):window,e){case"focusin":(xl(Lt)||Lt.contentEditable==="true")&&(qt=Lt,hs=pe,jn=null);break;case"focusout":jn=hs=qt=null;break;case"mousedown":to=!0;break;case"contextmenu":case"mouseup":case"dragend":to=!1,Eo(Re,o,Ce);break;case"selectionchange":if(Wt)break;case"keydown":case"keyup":Eo(Re,o,Ce)}var un;if(It)e:{switch(e){case"compositionstart":var yn="onCompositionStart";break e;case"compositionend":yn="onCompositionEnd";break e;case"compositionupdate":yn="onCompositionUpdate";break e}yn=void 0}else fo?go(e,o)&&(yn="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(yn="onCompositionStart");yn&&(cn&&o.locale!=="ko"&&(fo||yn!=="onCompositionStart"?yn==="onCompositionEnd"&&fo&&(un=_o()):(Qn=Ce,Mo="value"in Qn?Qn.value:Qn.textContent,fo=!0)),Lt=ku(pe,yn),0<Lt.length&&(yn=new at(yn,e,null,o,Ce),Re.push({event:yn,listeners:Lt}),un?yn.data=un:(un=ta(o),un!==null&&(yn.data=un)))),(un=hn?ba(e,o):Ko(e,o))&&(yn=ku(pe,"onBeforeInput"),0<yn.length&&(Lt=new at("onBeforeInput","beforeinput",null,o,Ce),Re.push({event:Lt,listeners:yn}),Lt.data=un)),O2(Re,e,pe,o,Ce)}g0(Re,s)})}function Wl(e,s,o){return{instance:e,listener:s,currentTarget:o}}function ku(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=tn(e,o),f!=null&&r.unshift(Wl(e,f,m)),f=tn(e,s),f!=null&&r.push(Wl(e,f,m))),e.tag===3)return r;e=e.return}return[]}function P2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function x0(e,s,o,r,f){for(var m=s._reactName,w=[];o!==null&&o!==r;){var E=o,W=E.alternate,pe=E.stateNode;if(E=E.tag,W!==null&&W===r)break;E!==5&&E!==26&&E!==27||pe===null||(W=pe,f?(pe=tn(o,m),pe!=null&&w.unshift(Wl(o,pe,W))):f||(pe=tn(o,m),pe!=null&&w.push(Wl(o,pe,W)))),o=o.return}w.length!==0&&e.push({event:s,listeners:w})}var H2=/\r\n?/g,U2=/\u0000|\uFFFD/g;function b0(e){return(typeof e=="string"?e:""+e).replace(H2,`
`).replace(U2,"")}function v0(e,s){return s=b0(s),b0(e)===s}function Vn(e,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||ko(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&ko(e,""+r);break;case"className":ws(e,"class",r);break;case"tabIndex":ws(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ws(e,o,r);break;case"style":Di(e,r,m);break;case"data":if(s!=="object"){ws(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=zo(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&Vn(e,s,"name",f.name,f,null),Vn(e,s,"formEncType",f.formEncType,f,null),Vn(e,s,"formMethod",f.formMethod,f,null),Vn(e,s,"formTarget",f.formTarget,f,null)):(Vn(e,s,"encType",f.encType,f,null),Vn(e,s,"method",f.method,f,null),Vn(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=zo(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=Os);break;case"onScroll":r!=null&&pn("scroll",e);break;case"onScrollEnd":r!=null&&pn("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=zo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":pn("beforetoggle",e),pn("toggle",e),mo(e,"popover",r);break;case"xlinkActuate":Bs(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Bs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Bs(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Bs(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Bs(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Bs(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Bs(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Bs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Bs(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":mo(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=qo.get(o)||o,mo(e,o,r))}}function gh(e,s,o,r,f,m){switch(o){case"style":Di(e,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?ko(e,r):(typeof r=="number"||typeof r=="bigint")&&ko(e,""+r);break;case"onScroll":r!=null&&pn("scroll",e);break;case"onScrollEnd":r!=null&&pn("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Os);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!No.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[bn]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):mo(e,o,r)}}}function vo(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pn("error",e),pn("load",e);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var w=o[m];if(w!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Vn(e,s,m,w,o,null)}}f&&Vn(e,s,"srcSet",o.srcSet,o,null),r&&Vn(e,s,"src",o.src,o,null);return;case"input":pn("invalid",e);var E=m=w=f=null,W=null,pe=null;for(r in o)if(o.hasOwnProperty(r)){var Ce=o[r];if(Ce!=null)switch(r){case"name":f=Ce;break;case"type":w=Ce;break;case"checked":W=Ce;break;case"defaultChecked":pe=Ce;break;case"value":m=Ce;break;case"defaultValue":E=Ce;break;case"children":case"dangerouslySetInnerHTML":if(Ce!=null)throw Error(a(137,s));break;default:Vn(e,s,r,Ce,o,null)}}vn(e,m,E,W,pe,w,f,!1);return;case"select":pn("invalid",e),r=w=m=null;for(f in o)if(o.hasOwnProperty(f)&&(E=o[f],E!=null))switch(f){case"value":m=E;break;case"defaultValue":w=E;break;case"multiple":r=E;default:Vn(e,s,f,E,o,null)}s=m,o=w,e.multiple=!!r,s!=null?rs(e,!!r,s,!1):o!=null&&rs(e,!!r,o,!0);return;case"textarea":pn("invalid",e),m=f=r=null;for(w in o)if(o.hasOwnProperty(w)&&(E=o[w],E!=null))switch(w){case"value":r=E;break;case"defaultValue":f=E;break;case"children":m=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:Vn(e,s,w,E,o,null)}gi(e,r,f,m);return;case"option":for(W in o)if(o.hasOwnProperty(W)&&(r=o[W],r!=null))switch(W){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Vn(e,s,W,r,o,null)}return;case"dialog":pn("beforetoggle",e),pn("toggle",e),pn("cancel",e),pn("close",e);break;case"iframe":case"object":pn("load",e);break;case"video":case"audio":for(r=0;r<Yl.length;r++)pn(Yl[r],e);break;case"image":pn("error",e),pn("load",e);break;case"details":pn("toggle",e);break;case"embed":case"source":case"link":pn("error",e),pn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(pe in o)if(o.hasOwnProperty(pe)&&(r=o[pe],r!=null))switch(pe){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Vn(e,s,pe,r,o,null)}return;default:if(Ls(s)){for(Ce in o)o.hasOwnProperty(Ce)&&(r=o[Ce],r!==void 0&&gh(e,s,Ce,r,o,void 0));return}}for(E in o)o.hasOwnProperty(E)&&(r=o[E],r!=null&&Vn(e,s,E,r,o,null))}function V2(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,w=null,E=null,W=null,pe=null,Ce=null;for(ye in o){var Re=o[ye];if(o.hasOwnProperty(ye)&&Re!=null)switch(ye){case"checked":break;case"value":break;case"defaultValue":W=Re;default:r.hasOwnProperty(ye)||Vn(e,s,ye,null,r,Re)}}for(var _e in r){var ye=r[_e];if(Re=o[_e],r.hasOwnProperty(_e)&&(ye!=null||Re!=null))switch(_e){case"type":m=ye;break;case"name":f=ye;break;case"checked":pe=ye;break;case"defaultChecked":Ce=ye;break;case"value":w=ye;break;case"defaultValue":E=ye;break;case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(a(137,s));break;default:ye!==Re&&Vn(e,s,_e,ye,r,Re)}}Vs(e,w,E,W,pe,Ce,m,f);return;case"select":ye=w=E=_e=null;for(m in o)if(W=o[m],o.hasOwnProperty(m)&&W!=null)switch(m){case"value":break;case"multiple":ye=W;default:r.hasOwnProperty(m)||Vn(e,s,m,null,r,W)}for(f in r)if(m=r[f],W=o[f],r.hasOwnProperty(f)&&(m!=null||W!=null))switch(f){case"value":_e=m;break;case"defaultValue":E=m;break;case"multiple":w=m;default:m!==W&&Vn(e,s,f,m,r,W)}s=E,o=w,r=ye,_e!=null?rs(e,!!o,_e,!1):!!r!=!!o&&(s!=null?rs(e,!!o,s,!0):rs(e,!!o,o?[]:"",!1));return;case"textarea":ye=_e=null;for(E in o)if(f=o[E],o.hasOwnProperty(E)&&f!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Vn(e,s,E,null,r,f)}for(w in r)if(f=r[w],m=o[w],r.hasOwnProperty(w)&&(f!=null||m!=null))switch(w){case"value":_e=f;break;case"defaultValue":ye=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Vn(e,s,w,f,r,m)}qn(e,_e,ye);return;case"option":for(var At in o)if(_e=o[At],o.hasOwnProperty(At)&&_e!=null&&!r.hasOwnProperty(At))switch(At){case"selected":e.selected=!1;break;default:Vn(e,s,At,null,r,_e)}for(W in r)if(_e=r[W],ye=o[W],r.hasOwnProperty(W)&&_e!==ye&&(_e!=null||ye!=null))switch(W){case"selected":e.selected=_e&&typeof _e!="function"&&typeof _e!="symbol";break;default:Vn(e,s,W,_e,r,ye)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in o)_e=o[Yt],o.hasOwnProperty(Yt)&&_e!=null&&!r.hasOwnProperty(Yt)&&Vn(e,s,Yt,null,r,_e);for(pe in r)if(_e=r[pe],ye=o[pe],r.hasOwnProperty(pe)&&_e!==ye&&(_e!=null||ye!=null))switch(pe){case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(a(137,s));break;default:Vn(e,s,pe,_e,r,ye)}return;default:if(Ls(s)){for(var Yn in o)_e=o[Yn],o.hasOwnProperty(Yn)&&_e!==void 0&&!r.hasOwnProperty(Yn)&&gh(e,s,Yn,void 0,r,_e);for(Ce in r)_e=r[Ce],ye=o[Ce],!r.hasOwnProperty(Ce)||_e===ye||_e===void 0&&ye===void 0||gh(e,s,Ce,_e,r,ye);return}}for(var ce in o)_e=o[ce],o.hasOwnProperty(ce)&&_e!=null&&!r.hasOwnProperty(ce)&&Vn(e,s,ce,null,r,_e);for(Re in r)_e=r[Re],ye=o[Re],!r.hasOwnProperty(Re)||_e===ye||_e==null&&ye==null||Vn(e,s,Re,_e,r,ye)}function w0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Y2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,w=f.initiatorType,E=f.duration;if(m&&E&&w0(w)){for(w=0,E=f.responseEnd,r+=1;r<o.length;r++){var W=o[r],pe=W.startTime;if(pe>E)break;var Ce=W.transferSize,Re=W.initiatorType;Ce&&w0(Re)&&(W=W.responseEnd,w+=Ce*(W<E?1:(E-pe)/(W-pe)))}if(--r,s+=8*(m+w)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yh=null,xh=null;function ju(e){return e.nodeType===9?e:e.ownerDocument}function S0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function C0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function bh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var vh=null;function W2(){var e=window.event;return e&&e.type==="popstate"?e===vh?!1:(vh=e,!0):(vh=null,!1)}var k0=typeof setTimeout=="function"?setTimeout:void 0,F2=typeof clearTimeout=="function"?clearTimeout:void 0,j0=typeof Promise=="function"?Promise:void 0,X2=typeof queueMicrotask=="function"?queueMicrotask:typeof j0<"u"?function(e){return j0.resolve(null).then(e).catch(q2)}:k0;function q2(e){setTimeout(function(){throw e})}function Ia(e){return e==="head"}function M0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),Qr(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")Fl(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Fl(o);for(var m=o.firstChild;m;){var w=m.nextSibling,E=m.nodeName;m[Rs]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=w}}else o==="body"&&Fl(e.ownerDocument.body);o=f}while(o);Qr(s)}function T0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function wh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":wh(o),ao(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function G2(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Rs])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=ki(e.nextSibling),e===null)break}return null}function K2(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=ki(e.nextSibling),e===null))return null;return e}function E0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=ki(e.nextSibling),e===null))return null;return e}function Sh(e){return e.data==="$?"||e.data==="$~"}function Ch(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Q2(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ki(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var kh=null;function A0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return ki(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function D0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function N0(e,s,o){switch(s=ju(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Fl(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);ao(e)}var ji=new Map,R0=new Set;function Mu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _a=ne.d;ne.d={f:Z2,r:J2,D:ev,C:tv,L:nv,m:sv,X:iv,S:ov,M:av};function Z2(){var e=_a.f(),s=yu();return e||s}function J2(e){var s=bs(e);s!==null&&s.tag===5&&s.type==="form"?K_(s):_a.r(e)}var qr=typeof document>"u"?null:document;function B0(e,s,o){var r=qr;if(r&&typeof s=="string"&&s){var f=Ss(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),R0.has(f)||(R0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),vo(s,"link",e),on(s),r.head.appendChild(s)))}}function ev(e){_a.D(e),B0("dns-prefetch",e,null)}function tv(e,s){_a.C(e,s),B0("preconnect",e,s)}function nv(e,s,o){_a.L(e,s,o);var r=qr;if(r&&e&&s){var f='link[rel="preload"][as="'+Ss(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Ss(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Ss(o.imageSizes)+'"]')):f+='[href="'+Ss(e)+'"]';var m=f;switch(s){case"style":m=Gr(e);break;case"script":m=Kr(e)}ji.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),ji.set(m,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(Xl(m))||s==="script"&&r.querySelector(ql(m))||(s=r.createElement("link"),vo(s,"link",e),on(s),r.head.appendChild(s)))}}function sv(e,s){_a.m(e,s);var o=qr;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Ss(r)+'"][href="'+Ss(e)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Kr(e)}if(!ji.has(m)&&(e=x({rel:"modulepreload",href:e},s),ji.set(m,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(ql(m)))return}r=o.createElement("link"),vo(r,"link",e),on(r),o.head.appendChild(r)}}}function ov(e,s,o){_a.S(e,s,o);var r=qr;if(r&&e){var f=vs(r).hoistableStyles,m=Gr(e);s=s||"default";var w=f.get(m);if(!w){var E={loading:0,preload:null};if(w=r.querySelector(Xl(m)))E.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=ji.get(m))&&jh(e,o);var W=w=r.createElement("link");on(W),vo(W,"link",e),W._p=new Promise(function(pe,Ce){W.onload=pe,W.onerror=Ce}),W.addEventListener("load",function(){E.loading|=1}),W.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Tu(w,s,r)}w={type:"stylesheet",instance:w,count:1,state:E},f.set(m,w)}}}function iv(e,s){_a.X(e,s);var o=qr;if(o&&e){var r=vs(o).hoistableScripts,f=Kr(e),m=r.get(f);m||(m=o.querySelector(ql(f)),m||(e=x({src:e,async:!0},s),(s=ji.get(f))&&Mh(e,s),m=o.createElement("script"),on(m),vo(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function av(e,s){_a.M(e,s);var o=qr;if(o&&e){var r=vs(o).hoistableScripts,f=Kr(e),m=r.get(f);m||(m=o.querySelector(ql(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=ji.get(f))&&Mh(e,s),m=o.createElement("script"),on(m),vo(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function L0(e,s,o,r){var f=(f=Ne.current)?Mu(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=Gr(o.href),o=vs(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=Gr(o.href);var m=vs(f).hoistableStyles,w=m.get(e);if(w||(f=f.ownerDocument||f,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,w),(m=f.querySelector(Xl(e)))&&!m._p&&(w.instance=m,w.state.loading=5),ji.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ji.set(e,o),m||rv(f,e,o,w.state))),s&&r===null)throw Error(a(528,""));return w}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=Kr(o),o=vs(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Gr(e){return'href="'+Ss(e)+'"'}function Xl(e){return'link[rel="stylesheet"]['+e+"]"}function O0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function rv(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),vo(s,"link",o),on(s),e.head.appendChild(s))}function Kr(e){return'[src="'+Ss(e)+'"]'}function ql(e){return"script[async]"+e}function z0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+Ss(o.href)+'"]');if(r)return s.instance=r,on(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),on(r),vo(r,"style",f),Tu(r,o.precedence,e),s.instance=r;case"stylesheet":f=Gr(o.href);var m=e.querySelector(Xl(f));if(m)return s.state.loading|=4,s.instance=m,on(m),m;r=O0(o),(f=ji.get(f))&&jh(r,f),m=(e.ownerDocument||e).createElement("link"),on(m);var w=m;return w._p=new Promise(function(E,W){w.onload=E,w.onerror=W}),vo(m,"link",r),s.state.loading|=4,Tu(m,o.precedence,e),s.instance=m;case"script":return m=Kr(o.src),(f=e.querySelector(ql(m)))?(s.instance=f,on(f),f):(r=o,(f=ji.get(m))&&(r=x({},o),Mh(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),on(f),vo(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Tu(r,o.precedence,e));return s.instance}function Tu(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,w=0;w<r.length;w++){var E=r[w];if(E.dataset.precedence===s)m=E;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function jh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Mh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Eu=null;function $0(e,s,o){if(Eu===null){var r=new Map,f=Eu=new Map;f.set(o,r)}else f=Eu,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[Rs]||m[en]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var w=m.getAttribute(s)||"";w=e+w;var E=r.get(w);E?E.push(m):r.set(w,[m])}}return r}function I0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function lv(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function P0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function cv(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=Gr(r.href),m=s.querySelector(Xl(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Au.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,on(m);return}m=s.ownerDocument||s,r=O0(r),(f=ji.get(f))&&jh(r,f),m=m.createElement("link"),on(m);var w=m;w._p=new Promise(function(E,W){w.onload=E,w.onerror=W}),vo(m,"link",r),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Au.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Th=0;function uv(e,s){return e.stylesheets&&e.count===0&&Nu(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&Nu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Th===0&&(Th=62500*Y2());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Nu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Th?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Au(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Du=null;function Nu(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Du=new Map,s.forEach(dv,e),Du=null,Au.call(e))}function dv(e,s){if(!(s.state.loading&4)){var o=Du.get(e);if(o)var r=o.get(null);else{o=new Map,Du.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var w=f[m];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(o.set(w.dataset.precedence,w),r=w)}r&&o.set(null,r)}f=s.instance,w=f.getAttribute("data-precedence"),m=o.get(w)||r,m===r&&o.set(null,f),o.set(w,f),this.count++,r=Au.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var Gl={$$typeof:R,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function fv(e,s,o,r,f,m,w,E,W){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ln(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ln(0),this.hiddenUpdates=ln(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map}function H0(e,s,o,r,f,m,w,E,W,pe,Ce,Re){return e=new fv(e,s,o,w,W,pe,Ce,Re,E),s=1,m===!0&&(s|=24),m=li(3,null,null,s),e.current=m,m.stateNode=e,s=rf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},df(m),e}function U0(e){return e?(e=Mr,e):Mr}function V0(e,s,o,r,f,m){f=U0(f),r.context===null?r.context=f:r.pendingContext=f,r=Ta(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Ea(e,r,s),o!==null&&(ti(o,e,s),Ml(o,e,s))}function Y0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Eh(e,s){Y0(e,s),(e=e.alternate)&&Y0(e,s)}function W0(e){if(e.tag===13||e.tag===31){var s=Ja(e,67108864);s!==null&&ti(s,e,67108864),Eh(e,67108864)}}function F0(e){if(e.tag===13||e.tag===31){var s=hi();s=oo(s);var o=Ja(e,s);o!==null&&ti(o,e,s),Eh(e,s)}}var Ru=!0;function hv(e,s,o,r){var f=L.T;L.T=null;var m=ne.p;try{ne.p=2,Ah(e,s,o,r)}finally{ne.p=m,L.T=f}}function mv(e,s,o,r){var f=L.T;L.T=null;var m=ne.p;try{ne.p=8,Ah(e,s,o,r)}finally{ne.p=m,L.T=f}}function Ah(e,s,o,r){if(Ru){var f=Dh(r);if(f===null)_h(e,s,r,Bu,o),q0(e,r);else if(_v(f,e,s,o,r))r.stopPropagation();else if(q0(e,r),s&4&&-1<pv.indexOf(e)){for(;f!==null;){var m=bs(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var w=Gt(m.pendingLanes);if(w!==0){var E=m;for(E.pendingLanes|=2,E.entangledLanes|=2;w;){var W=1<<31-yt(w);E.entanglements[1]|=W,w&=~W}qi(m),(Rn&6)===0&&(_u=it()+500,Vl(0))}}break;case 31:case 13:E=Ja(m,2),E!==null&&ti(E,m,2),yu(),Eh(m,2)}if(m=Dh(r),m===null&&_h(e,s,r,Bu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else _h(e,s,r,null,o)}}function Dh(e){return e=js(e),Nh(e)}var Bu=null;function Nh(e){if(Bu=null,e=ro(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return Bu=e,null}function X0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rt()){case bt:return 2;case Bt:return 8;case Ve:case P:return 32;case ee:return 268435456;default:return 32}default:return 32}}var Rh=!1,Pa=null,Ha=null,Ua=null,Kl=new Map,Ql=new Map,Va=[],pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q0(e,s){switch(e){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":Kl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ql.delete(s.pointerId)}}function Zl(e,s,o,r,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=bs(s),s!==null&&W0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function _v(e,s,o,r,f){switch(s){case"focusin":return Pa=Zl(Pa,e,s,o,r,f),!0;case"dragenter":return Ha=Zl(Ha,e,s,o,r,f),!0;case"mouseover":return Ua=Zl(Ua,e,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return Kl.set(m,Zl(Kl.get(m)||null,e,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,Ql.set(m,Zl(Ql.get(m)||null,e,s,o,r,f)),!0}return!1}function G0(e){var s=ro(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,Kt(e.priority,function(){F0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,Kt(e.priority,function(){F0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lu(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Dh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);jo=r,o.target.dispatchEvent(r),jo=null}else return s=bs(o),s!==null&&W0(s),e.blockedOn=o,!1;s.shift()}return!0}function K0(e,s,o){Lu(e)&&o.delete(s)}function gv(){Rh=!1,Pa!==null&&Lu(Pa)&&(Pa=null),Ha!==null&&Lu(Ha)&&(Ha=null),Ua!==null&&Lu(Ua)&&(Ua=null),Kl.forEach(K0),Ql.forEach(K0)}function Ou(e,s){e.blockedOn===s&&(e.blockedOn=null,Rh||(Rh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,gv)))}var zu=null;function Q0(e){zu!==e&&(zu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){zu===e&&(zu=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if(Nh(r||o)===null)continue;break}var m=bs(o);m!==null&&(e.splice(s,3),s-=3,Df(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function Qr(e){function s(W){return Ou(W,e)}Pa!==null&&Ou(Pa,e),Ha!==null&&Ou(Ha,e),Ua!==null&&Ou(Ua,e),Kl.forEach(s),Ql.forEach(s);for(var o=0;o<Va.length;o++){var r=Va[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Va.length&&(o=Va[0],o.blockedOn===null);)G0(o),o.blockedOn===null&&Va.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],w=f[bn]||null;if(typeof m=="function")w||Q0(o);else if(w){var E=null;if(m&&m.hasAttribute("formAction")){if(f=m,w=m[bn]||null)E=w.formAction;else if(Nh(f)!==null)continue}else E=w.action;typeof E=="function"?o[r+1]=E:(o.splice(r,3),r-=3),Q0(o)}}}function Z0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(w){return f=w})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Bh(e){this._internalRoot=e}$u.prototype.render=Bh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=hi();V0(o,r,e,s,null,null)},$u.prototype.unmount=Bh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;V0(e.current,2,null,e,null,null),yu(),s[Qe]=null}};function $u(e){this._internalRoot=e}$u.prototype.unstable_scheduleHydration=function(e){if(e){var s=ns();e={blockedOn:null,target:e,priority:s};for(var o=0;o<Va.length&&s!==0&&s<Va[o].priority;o++);Va.splice(o,0,e),o===0&&G0(e)}};var J0=n.version;if(J0!=="19.2.4")throw Error(a(527,J0,"19.2.4"));ne.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=g(s),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var yv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Iu.isDisabled&&Iu.supportsFiber)try{He=Iu.inject(yv),Ye=Iu}catch{}}return ec.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=ag,m=rg,w=lg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError)),s=H0(e,1,!1,null,null,o,r,null,f,m,w,Z0),e[Qe]=s.current,ph(e),new Bh(s)},ec.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",m=ag,w=rg,E=lg,W=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(w=o.onCaughtError),o.onRecoverableError!==void 0&&(E=o.onRecoverableError),o.formState!==void 0&&(W=o.formState)),s=H0(e,1,!0,s,o!=null?o:null,r,f,W,m,w,E,Z0),s.context=U0(null),o=s.current,r=hi(),r=oo(r),f=Ta(r),f.callback=null,Ea(o,f,r),o=r,s.current.lanes=o,gt(s,o),qi(s),e[Qe]=s.current,ph(e),new $u(s)},ec.version="19.2.4",ec}var cy;function Mv(){if(cy)return Oh.exports;cy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Oh.exports=jv(),Oh.exports}var Tv=Mv();const Ev=Tx(Tv);var y=up();const Av=Tx(y);function Dv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Nv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var dd;const Ai="__TAURI_TO_IPC_KEY__";function Rv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function be(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Bv{get rid(){return Dv(this,dd,"f")}constructor(n){dd.set(this,void 0),Nv(this,dd,n)}async close(){return be("plugin:resources|close",{rid:this.rid})}}dd=new WeakMap;var mi;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(mi||(mi={}));async function Ax(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await be("plugin:event|unlisten",{event:t,eventId:n})}async function hc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return be("plugin:event|listen",{event:t,target:c,handler:Rv(n)}).then(u=>async()=>Ax(t,u))}async function Lv(t,n,i){return hc(t,a=>{Ax(t,a.id),n(a)},i)}async function Ov(t,n){await be("plugin:event|emit",{event:t,payload:n})}async function zv(t,n,i){await be("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class Dx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new mc(this.width*n,this.height*n)}[Ai](){return{width:this.width,height:this.height}}toJSON(){return this[Ai]()}}class mc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Dx(this.width/n,this.height/n)}[Ai](){return{width:this.width,height:this.height}}toJSON(){return this[Ai]()}}class Zr{constructor(n){this.size=n}toLogical(n){return this.size instanceof Dx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof mc?this.size:this.size.toPhysical(n)}[Ai](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[Ai]()}}class Nx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new qa(this.x*n,this.y*n)}[Ai](){return{x:this.x,y:this.y}}toJSON(){return this[Ai]()}}class qa{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Nx(this.x/n,this.y/n)}[Ai](){return{x:this.x,y:this.y}}toJSON(){return this[Ai]()}}class Pu{constructor(n){this.position=n}toLogical(n){return this.position instanceof Nx?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof qa?this.position:this.position.toPhysical(n)}[Ai](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[Ai]()}}class pc extends Bv{constructor(n){super(n)}static async new(n,i,a){return be("plugin:image|new",{rgba:wd(n),width:i,height:a}).then(c=>new pc(c))}static async fromBytes(n){return be("plugin:image|from_bytes",{bytes:wd(n)}).then(i=>new pc(i))}static async fromPath(n){return be("plugin:image|from_path",{path:n}).then(i=>new pc(i))}async rgba(){return be("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return be("plugin:image|size",{rid:this.rid})}}function wd(t){return t==null?null:typeof t=="string"?t:t instanceof pc?t.rid:t}var jm;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(jm||(jm={}));class $v{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var uy;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(uy||(uy={}));function Mm(){return new Rx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Hh(){return be("plugin:window|get_all_windows").then(t=>t.map(n=>new Rx(n,{skip:!0})))}const Uh=["tauri://created","tauri://error"];class Rx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||be("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Hh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return Mm()}static async getAll(){return Hh()}static async getFocusedWindow(){for(const n of await Hh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:hc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Lv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Uh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Ov(n,i)}async emitTo(n,i,a){if(Uh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return zv(n,i,a)}_handleTauriEvent(n,i){return Uh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return be("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return be("plugin:window|inner_position",{label:this.label}).then(n=>new qa(n))}async outerPosition(){return be("plugin:window|outer_position",{label:this.label}).then(n=>new qa(n))}async innerSize(){return be("plugin:window|inner_size",{label:this.label}).then(n=>new mc(n))}async outerSize(){return be("plugin:window|outer_size",{label:this.label}).then(n=>new mc(n))}async isFullscreen(){return be("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return be("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return be("plugin:window|is_maximized",{label:this.label})}async isFocused(){return be("plugin:window|is_focused",{label:this.label})}async isDecorated(){return be("plugin:window|is_decorated",{label:this.label})}async isResizable(){return be("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return be("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return be("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return be("plugin:window|is_closable",{label:this.label})}async isVisible(){return be("plugin:window|is_visible",{label:this.label})}async title(){return be("plugin:window|title",{label:this.label})}async theme(){return be("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return be("plugin:window|is_always_on_top",{label:this.label})}async center(){return be("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===jm.Critical?i={type:"Critical"}:i={type:"Informational"}),be("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return be("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return be("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return be("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return be("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return be("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return be("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return be("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return be("plugin:window|maximize",{label:this.label})}async unmaximize(){return be("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return be("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return be("plugin:window|minimize",{label:this.label})}async unminimize(){return be("plugin:window|unminimize",{label:this.label})}async show(){return be("plugin:window|show",{label:this.label})}async hide(){return be("plugin:window|hide",{label:this.label})}async close(){return be("plugin:window|close",{label:this.label})}async destroy(){return be("plugin:window|destroy",{label:this.label})}async setDecorations(n){return be("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return be("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return be("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return be("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return be("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return be("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return be("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return be("plugin:window|set_size",{label:this.label,value:n instanceof Zr?n:new Zr(n)})}async setMinSize(n){return be("plugin:window|set_min_size",{label:this.label,value:n instanceof Zr?n:n?new Zr(n):null})}async setMaxSize(n){return be("plugin:window|set_max_size",{label:this.label,value:n instanceof Zr?n:n?new Zr(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return be("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return be("plugin:window|set_position",{label:this.label,value:n instanceof Pu?n:new Pu(n)})}async setFullscreen(n){return be("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return be("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return be("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return be("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return be("plugin:window|set_icon",{label:this.label,value:wd(n)})}async setSkipTaskbar(n){return be("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return be("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return be("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return be("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return be("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return be("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Pu?n:new Pu(n)})}async setIgnoreCursorEvents(n){return be("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return be("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return be("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return be("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return be("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return be("plugin:window|set_overlay_icon",{label:this.label,value:n?wd(n):void 0})}async setProgressBar(n){return be("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return be("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return be("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return be("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(mi.WINDOW_RESIZED,i=>{i.payload=new mc(i.payload),n(i)})}async onMoved(n){return this.listen(mi.WINDOW_MOVED,i=>{i.payload=new qa(i.payload),n(i)})}async onCloseRequested(n){return this.listen(mi.WINDOW_CLOSE_REQUESTED,async i=>{const a=new $v(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(mi.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new qa(d.payload.position)}})}),a=await this.listen(mi.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new qa(d.payload.position)}})}),c=await this.listen(mi.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new qa(d.payload.position)}})}),u=await this.listen(mi.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(mi.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(mi.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(mi.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(mi.WINDOW_THEME_CHANGED,n)}}var dy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(dy||(dy={}));var fy;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(fy||(fy={}));var hy;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(hy||(hy={}));var my;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(my||(my={}));async function Iv(t={}){return typeof t=="object"&&Object.freeze(t),await be("plugin:dialog|open",{options:t})}const Pv=3.7,Hu=200,Tm=240,_s=540,Is=176,Vh=32,Tc=20,Hv=Tm/2,tc=_s+Hv,Jr=18,el=18,Yh="#E6E6E6";function py(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function yr(t,n){var a;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,clusterKey:"clusterKey"in n&&(a=n.clusterKey)!=null?a:null,kind:n.kind}}function ga(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function Uu(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:ga(t).localeCompare(ga(n))}function Em(t){var h,p,g,_,x;if(t.length<=1)return[...t];const n=new Map(t.map(b=>[ga(b),b])),i=new Map,a=new Map;t.forEach(b=>i.set(ga(b),0));for(const b of t){const S=(h=b.parentSha)!=null?h:void 0;if(!S||!n.has(S))continue;const C=ga(b);i.set(C,((p=i.get(C))!=null?p:0)+1);const j=(g=a.get(S))!=null?g:[];j.push(b),a.set(S,j)}for(const b of a.values())b.sort(Uu);const c=t.filter(b=>{var S;return((S=i.get(ga(b)))!=null?S:0)===0}).sort(Uu),u=[],d=new Set;for(;c.length>0;){const b=c.shift(),S=ga(b);if(!d.has(S)){d.add(S),u.push(b);for(const C of(_=a.get(S))!=null?_:[]){const j=ga(C),k=((x=i.get(j))!=null?x:0)-1;i.set(j,k),k===0&&c.push(C)}c.sort(Uu)}}return u.length===t.length?u:[...u,...t.filter(b=>!d.has(ga(b))).sort(Uu)]}function Bx(t,n){var i;return Em(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function Lx(t,n,i){return Bx(t,i)}function Wh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function Uv(t,n){var u,d;if(!n||t.length===0)return Wh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Wh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const g=i-p;(!a||g<a.delta)&&(a={delta:g,commit:h})}else{const g=p-i;(!c||g<c.delta)&&(c={delta:g,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Wh(t)}function Vu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function Vv(t,n,i){var _,x,b,S,C,j,k;const a=Lx(t,i,n);if(a.length===0)return null;const c=a.map(M=>yr(t,M)),u=new Set(c.map(M=>M.id)),d=(x=(_=c[0])==null?void 0:_.parentSha)!=null?x:null,h=(S=(b=c.find(M=>M.kind==="branch-created"))==null?void 0:b.id)!=null?S:null,p=(C=c[0])==null?void 0:C.date,g=c.find(M=>h&&M.id===h||d&&M.id===d?!0:!M.parentSha||!u.has(M.parentSha));return g||((k=(j=Uv(c,p!=null?p:void 0))!=null?j:c[0])!=null?k:null)}function Yv(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Bx(t.name,i);if(a.length>0){const g=a.map(b=>yr(t.name,b)),_=new Set(g.map(b=>b.id)),x=(u=(c=g.find(b=>!b.parentSha||!_.has(b.parentSha)))!=null?c:g[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function dp(t,n,i={},a={}){var re,le,Se,Ae;const u=new Map(t.map(J=>[J.name,J])),d=new Map,h=new Map;for(const J of t){const L=((re=i[J.name])!=null?re:[]).filter(ne=>ne.kind!=="branch-created").map(ne=>new Date(ne.date).getTime()).filter(ne=>Number.isFinite(ne)).sort((ne,U)=>ne-U)[0];L!=null&&h.set(J.name,L)}const p=J=>{const ue=h.get(J.name);return ue!=null?ue:py(J).start},g=J=>{var L;const ue=(L=a[J.name])!=null?L:null;return ue&&ue!==J.name&&(ue===n||u.has(ue))?ue:J.name===n?null:J.parentBranch&&J.parentBranch!==J.name&&(J.parentBranch===n||u.has(J.parentBranch))?J.parentBranch:null};for(const J of t){if(J.name===n)continue;const ue=(le=g(J))!=null?le:n,L=(Se=d.get(ue))!=null?Se:[];L.push(J),d.set(ue,L)}for(const J of d.values())J.sort((ue,L)=>p(ue)-p(L)||ue.name.localeCompare(L.name));const _=new Map,x=[],b=new Map,S=new Map,C=new Map;for(const J of Object.values(i))for(const ue of J){const L=new Date(ue.date).getTime();Number.isFinite(L)&&(ue.fullSha&&C.set(ue.fullSha,L),ue.sha&&C.set(ue.sha,L))}const j=(J,ue)=>({start:Math.min(J,ue),end:Math.max(J,ue)}),k=J=>{var q,fe;const ue=j(p(J),py(J).end),L=[ue],ne=ue.start,U=Yv(J,n,i),he=U?C.get(U):void 0,je=new Date((fe=(q=J.divergedFromDate)!=null?q:J.createdDate)!=null?fe:J.lastCommitDate).getTime(),A=Number.isFinite(he!=null?he:NaN)?he:Number.isFinite(je)?je:null;if(A==null)return L;const te=j(A,ne);return te.start!==te.end&&L.push(te),L},M=Math.max(1,360*60*1e3*Pv),z=(J,ue)=>!(J.start-ue.end>=M||ue.start-J.end>=M),R=(J,ue)=>ue.some(L=>{var ne;return((ne=S.get(J))!=null?ne:[]).some(U=>z(L,U))}),D=(J,ue=new Set)=>{const L=b.get(J);if(L!=null)return L;if(ue.has(J))return 1;ue.add(J);const ne=u.get(J);if(!ne||J===n)return ue.delete(J),b.set(J,0),0;const U=g(ne),he=U?D(U,ue)+1:1;return ue.delete(J),b.set(J,he),he},$=(J,ue=new Set)=>{var Ne,ve;const L=_.get(J);if(L)return L.column;if(ue.has(J))return 0;ue.add(J);const ne=u.get(J);if(!ne)return ue.delete(J),0;if(J===n){const tt={name:J,column:0,parentName:null};_.set(J,tt),x.push(tt);const Ge=k(ne);return S.set(0,[...(Ne=S.get(0))!=null?Ne:[],...Ge]),ue.delete(J),0}const U=g(ne),he=U&&!ue.has(U)?U:null,je=he?$(he,ue):0,A=Math.max(1,D(J)),te=Math.max(he?je+1:1,A),q=k(ne);let fe=te;for(;R(fe,q);)fe+=1;const Te={name:J,column:fe,parentName:he};return _.set(J,Te),x.push(Te),S.set(fe,[...(ve=S.get(fe))!=null?ve:[],...q]),ue.delete(J),fe};$(n);const F=t.filter(J=>!_.has(J.name)).sort((J,ue)=>p(J)-p(ue)||J.name.localeCompare(ue.name)),V=F.filter(J=>g(J)!=null),H=F.filter(J=>g(J)==null);for(const J of V)$(J.name);let K=Math.max(0,...x.map(J=>J.column))+1+1;for(const J of H){const ue=k(J);let L=K;for(;R(L,ue);)L+=1;const ne={name:J.name,column:L,parentName:null};_.set(J.name,ne),x.push(ne),S.set(L,[...(Ae=S.get(L))!=null?Ae:[],...ue]),K=L+1}return x.sort((J,ue)=>J.column-ue.column||J.name.localeCompare(ue.name))}function Wv(t,n,i,a){const c=new Map(t.map(h=>[h.name,h])),u=h=>{var g;const p=(g=i[h.name])!=null?g:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of t){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const Yu=2.25,$i=0,Fh=0,Fv=1800*1e3,Xv=1440*60*1e3,Mi=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Uo=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function _y(t,n,i=new Map){var H,K,re,le,Se,Ae,J,ue,L,ne,U,he,je;if(t.length===0)return new Map;const a=[...t].sort((A,te)=>{const q=Mi(A.date)-Mi(te.date);return q!==0?q:A.id!==te.id?A.id.localeCompare(te.id):A.visualId.localeCompare(te.visualId)}),c=new Map;for(const A of t){const te=(H=A.parentSha)!=null?H:null;if(te){const q=(K=c.get(te))!=null?K:new Set;q.add(A.id),c.set(te,q)}for(const q of(re=i.get(A.id))!=null?re:[]){if(!q)continue;const fe=(le=c.get(q))!=null?le:new Set;fe.add(A.id),c.set(q,fe)}}const u=new Map,d=new Map,h=new Map,p=new Set,g=new Map,_=new Map,x=new Map,b=new Map;for(const A of t){const te=(Se=g.get(A.branchName))!=null?Se:new Set;te.add(A.id),g.set(A.branchName,te);const q=(J=(Ae=n.get(A.branchName))==null?void 0:Ae.column)!=null?J:0,fe=(ue=_.get(A.id))!=null?ue:new Set;fe.add(q),_.set(A.id,fe);const Te=new Set;A.parentSha&&Te.add(A.parentSha),x.set(A.visualId,Te);const Ne=new Set(Te);for(const ve of(L=i.get(A.id))!=null?L:[])ve&&Ne.add(ve);b.set(A.visualId,Ne)}const S=new Set(Array.from(_.keys())),C=Array.from(S),j=new Map,k=A=>{const te=[];for(const q of C)Uo(q,A)&&te.push(q);return te},M=new Map;for(const A of C)M.set(A,new Set);for(const A of t){const te=k(A.id);if(te.length===0)continue;const q=(ne=b.get(A.visualId))!=null?ne:new Set,fe=new Set;for(const Te of q)for(const Ne of k(Te))fe.add(Ne);for(const Te of te){const Ne=(U=M.get(Te))!=null?U:new Set;for(const ve of fe)Ne.add(ve);M.set(Te,Ne)}}const z=new Map,R=(A,te=new Set)=>{var Ne;const q=z.get(A);if(q)return q;if(te.has(A))return new Set;te.add(A);const fe=(Ne=M.get(A))!=null?Ne:new Set,Te=new Set;for(const ve of fe){Te.add(ve);for(const tt of R(ve,te))Te.add(tt)}return te.delete(A),z.set(A,Te),Te},D=(A,te)=>{if(Uo(A,te))return!0;const q=k(A),fe=k(te);for(const Te of q){const Ne=R(Te);for(const ve of fe)if(Ne.has(ve))return!0}for(const Te of fe){const Ne=R(Te);for(const ve of q)if(Ne.has(ve))return!0}return!1};let $=1;const F=(A,te)=>{var ae,Pe,Ke,Ie,ut,ot,it,rt,bt;const q=(Pe=(ae=n.get(A.branchName))==null?void 0:ae.column)!=null?Pe:0,fe=(Ke=g.get(A.branchName))!=null?Ke:new Set,Ne=!(!!A.parentSha&&fe.has(A.parentSha))&&A.parentSha?A.parentSha:null,ve=Array.from(te).flatMap(Bt=>k(Bt).flatMap(Ve=>{var P;return(P=j.get(Ve))!=null?P:[]})),tt=(A.kind==="branch-created"||A.kind==="stash")&&ve.length>0?Math.max(...ve)+1:null,Ge=ve.length>0?Math.max(...ve)+1:1,ze=(Ie=c.get(A.id))!=null?Ie:new Set,et=Array.from(ze).flatMap(Bt=>{var Ve;return Array.from((Ve=_.get(Bt))!=null?Ve:[])}).some(Bt=>Bt!==q),zt=new Date(A.date).getTime(),Mt=Math.max(Ge,1);let xt=null;for(let Bt=Mt;Bt<$;Bt+=1){const Ve=(ut=d.get(Bt))!=null?ut:[];if(Ve.length===0||et||p.has(Bt))continue;const P=(ot=b.get(A.visualId))!=null?ot:new Set;if(!(Ve.some(He=>D(A.id,He.sha)?!0:Array.from(P).some(Me=>Uo(Me,He.sha)))||Ve.some(He=>He.column===q)||!Number.isFinite(zt)||!Ve.every(He=>{if(!Number.isFinite(He.time))return!1;const Me=!!Ne&&!!He.branchEntryParentSha&&Ne===He.branchEntryParentSha?Xv:Fv;return Math.abs(He.time-zt)<=Me}))){xt=Bt;break}}tt!=null&&(xt=tt),xt==null&&(xt=Math.max(Ge,$)),u.set(A.visualId,xt),xt>=$&&($=xt+1);const Qt=(it=d.get(xt))!=null?it:[];Qt.push({visualId:A.visualId,sha:A.id,column:q,time:zt,branchEntryParentSha:Ne}),d.set(xt,Qt),et&&p.add(xt);for(const Bt of te){const Ve=(rt=h.get(Bt))!=null?rt:[];Ve.push(xt),h.set(Bt,Ve)}const Oe=(bt=j.get(A.id))!=null?bt:[];Oe.push(xt),j.set(A.id,Oe)};let V=[...a];for(;V.length>0;){const A=[];let te=!1;for(const q of V){const fe=(he=x.get(q.visualId))!=null?he:new Set;if(Array.from(fe).some(Ne=>k(Ne).some(ve=>{var tt,Ge;return((Ge=(tt=j.get(ve))==null?void 0:tt.length)!=null?Ge:0)===0}))){A.push(q);continue}F(q,fe),te=!0}if(!te){const q=A.shift();if(!q)break;F(q,(je=x.get(q.visualId))!=null?je:new Set)}V=A}return u}function Sd(t){var Bo,Fo,mo,ws,Bs,Cn,_i,as,ii,Us,Lo,Co,Ss,Vs,vn,po,rs,qn,gi,ko,Xo,Xt,Di,Ls,qo,Oo,zo,Os,jo,js,kn,co,Gn,ys,Kn,tn,Ys,Ws,Cs,Qn,Mo,Ms,_o,Ts,Es,uo,Nn,I,oe;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchParentByName:p={},branchUniqueAheadCounts:g,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:b,gridSearchQuery:S,gridFocusSha:C,checkedOutRef:j,orientation:k="horizontal"}=t,M=k==="horizontal",z=new Map(i.map(v=>[v.name,v])),R=new Map(n.map(v=>[v.name,v])),D=Em([...a.map(v=>{var T,X,Q;return{id:v.fullSha,branchName:d,message:(T=v.prTitle)!=null?T:v.sha,author:"",date:v.date,parentSha:(Q=(X=v.parentShas)==null?void 0:X[0])!=null?Q:null}}),...((Bo=h[d])!=null?Bo:[]).map(v=>yr(d,v)),...c.map(v=>yr(v.branch||"",v)),...u.map(v=>yr(v.branch||"",v))]),$=new Map,F=new Map;for(const v of i){if(v.name===d)continue;const T=Lx(v.name,g,h);F.set(v.name,T);const X=Em(T.map(pt=>yr(v.name,pt)));if(X.length>0){$.set(v.name,X);continue}const Q=(ws=(mo=(Fo=v.presidesFromSha)!=null?Fo:v.divergedFromSha)!=null?mo:v.createdFromSha)!=null?ws:null;if(!Q)continue;const de=(Bs=c.find(pt=>Uo(pt.fullSha,Q)||Uo(pt.sha,Q)))==null?void 0:Bs.date,we=de?null:(Cn=Object.values(h).flat().find(pt=>Uo(pt.fullSha,Q)||Uo(pt.sha,Q)))==null?void 0:Cn.date,lt={id:`BRANCH_HEAD:${v.name}:${Q}`,branchName:v.name,message:`Branch ${v.name}`,author:v.lastCommitAuthor,date:(ii=(as=(_i=de!=null?de:we)!=null?_i:v.createdDate)!=null?as:v.divergedFromDate)!=null?ii:v.lastCommitDate,parentSha:Q,kind:"branch-created"};$.set(v.name,[lt])}const V=new Set(D.map(v=>v.id)),H=(Us=[...D].sort((v,T)=>Mi(v.date)-Mi(T.date)||v.id.localeCompare(T.id))[0])!=null?Us:null,K=new Map(Array.from($.entries()).map(([v,T])=>[v,new Set(T.map(X=>X.id))])),re=new Map;for(const v of i){if(v.name===d)continue;const T=Vv(v.name,h,g);if(T){re.set(v.name,T);continue}const X=(Lo=$.get(v.name))==null?void 0:Lo[0];if(X){const Q=(Vs=(Ss=(Co=v.presidesFromSha)!=null?Co:v.divergedFromSha)!=null?Ss:v.createdFromSha)!=null?Vs:null;re.set(v.name,{...X,parentSha:Q})}}const le=new Map;for(const[v,T]of $.entries()){const X=T.find(Q=>Q.kind!=="branch-created");X&&le.set(v,X)}const Se=new Map;for(const[v,T]of $.entries()){const X=T.filter(pt=>pt.kind!=="branch-created"),Q=X.length>0?X:T,de=new Set(Q.map(pt=>pt.id)),we=Q.find(pt=>!pt.parentSha||!de.has(pt.parentSha)),lt=we!=null?we:Q[0];lt&&Se.set(v,lt)}const Ae=new Map;for(const v of i){if(v.name===d)continue;const T=(vn=Se.get(v.name))!=null?vn:null,X=(po=T==null?void 0:T.parentSha)!=null?po:null;if(X){Ae.set(v.name,X);continue}const Q=(qn=(rs=re.get(v.name))==null?void 0:rs.parentSha)!=null?qn:null;if(Q){Ae.set(v.name,Q);continue}const de=(Xo=(ko=(gi=v.presidesFromSha)!=null?gi:v.divergedFromSha)!=null?ko:v.createdFromSha)!=null?Xo:null;de&&Ae.set(v.name,de)}const J=v=>{var we,lt,pt,Et,dt,nt,Ct,Ut;const T=(we=p[v.name])!=null?we:null;if(!(T&&T!==d&&T!==v.name&&z.has(T)))return T!=null?T:"";const Q=(Et=(pt=(lt=Ae.get(v.name))!=null?lt:v.presidesFromSha)!=null?pt:v.divergedFromSha)!=null?Et:v.createdFromSha;if(Q&&((dt=K.get(T))!=null?dt:new Set).has(Q))return T;const de=(Ct=(nt=re.get(v.name))==null?void 0:nt.parentSha)!=null?Ct:null;return de&&((Ut=K.get(T))!=null?Ut:new Set).has(de),T},ue=v=>{var de,we,lt,pt,Et,dt,nt,Ct;const T=re.get(v.name),X=(Et=(pt=(lt=(we=(de=Ae.get(v.name))!=null?de:T==null?void 0:T.parentSha)!=null?we:v.presidesFromSha)!=null?lt:v.divergedFromSha)!=null?pt:v.createdFromSha)!=null?Et:null;if(!v.parentBranch&&!X||!X)return null;if(J(v)===d){if(V.has(X))return X;const Ut=(dt=T==null?void 0:T.parentSha)!=null?dt:null;return Ut&&V.has(Ut)?Ut:(Ct=(nt=H==null?void 0:H.id)!=null?nt:Ut)!=null?Ct:X}return V.has(X),X},L=v=>ue(v),ne=new Map;for(const v of[...c,...u]){const T={...yr(v.branch||"",v),visualId:`${v.branch||""}:${v.fullSha}`};ne.set(v.fullSha,T)}const U=new Map(ne),he=v=>{U.has(v.id)||U.set(v.id,v)},je=new Map(Array.from($.entries()).map(([v,T])=>[v,new Set(T.map(X=>X.id))])),A=new Set;for(const v of je.values())for(const T of v)A.add(T);for(const v of D)A.has(v.id)||he({...v,visualId:`${v.branchName}:${v.id}`});for(const[v,T]of $.entries())for(const X of T)he({...X,visualId:`${v}:${X.id}`});const q=[...Array.from(U.values()).map(v=>({...v,visualId:`${v.branchName}:${v.id}`}))].sort((v,T)=>Mi(v.date)-Mi(T.date)||v.id.localeCompare(T.id)),fe=new Map;for(const v of q){const T=(Xt=fe.get(v.branchName))!=null?Xt:new Set;T.add(v.id),fe.set(v.branchName,T)}const Te=(v,T)=>{const X=fe.get(v);if(!X||X.size===0)return!1;for(const Q of X)if(Uo(Q,T))return!0;return!1},Ne=(v,T)=>{const X=Array.from(fe.entries()).filter(([Q])=>Q!==T).filter(([,Q])=>Array.from(Q).some(de=>Uo(de,v))).map(([Q])=>Q);return X.length>0?X.sort()[0]:v.slice(0,7)},ve=[],tt=new Map,Ge=new Map;for(const v of a){const T=v.fullSha,X=v.targetBranch,Q=v.targetCommitSha;if(!T||!X||!Q||!Te(X,Q))continue;const de=((Di=v.parentShas)!=null?Di:[]).slice(1).filter(lt=>!!lt&&!Uo(lt,T));if(de.length===0)continue;const we=(Ls=Ge.get(T))!=null?Ls:new Set;for(const lt of de){we.add(lt);const pt=Ne(lt,X);ve.push({sourceCommitSha:lt,sourceBranchName:pt,mergeCommitSha:T,targetCommitSha:Q,targetBranchName:X});const Et=(qo=tt.get(pt))!=null?qo:new Map,dt=(Oo=Et.get(lt))!=null?Oo:new Set;dt.add(X),Et.set(lt,dt),tt.set(pt,Et)}Ge.set(T,we)}const ze=new Map;for(const v of i){if(v.name===d)continue;const T=ue(v);T&&ze.set(v.name,T)}const ct=new Map;for(const v of q){const T=Ge.get(v.id);if(T&&T.size>0){const de=(zo=ct.get(v.id))!=null?zo:new Set;for(const we of T)de.add(we);ct.set(v.id,de)}if(v.branchName===d)continue;const X=ze.get(v.branchName);if(!X||X===v.id)continue;const Q=(Os=ct.get(v.id))!=null?Os:new Set;Q.add(X),ct.set(v.id,Q)}const et=_y(q,R,ct),zt=new Map;for(const v of q){const T=(jo=zt.get(v.branchName))!=null?jo:[];T.push(v),zt.set(v.branchName,T)}const Mt=new Map,xt=new Map,Qt=new Map,Oe=new Map,ae=new Map,Pe=(v,T)=>{var we,lt,pt;if(T.length===0)return[];const X=[...T].sort((Et,dt)=>{var Ut,an;const nt=(Ut=et.get(Et.visualId))!=null?Ut:Number.MAX_SAFE_INTEGER,Ct=(an=et.get(dt.visualId))!=null?an:Number.MAX_SAFE_INTEGER;return nt!==Ct?nt-Ct:Mi(Et.date)-Mi(dt.date)||Et.id.localeCompare(dt.id)}),Q=new Map;for(const Et of X){const dt=((we=Et.clusterKey)==null?void 0:we.trim())||`cluster:${v}:${Et.id}`,nt=(lt=Q.get(dt))!=null?lt:[];nt.push(Et),Q.set(dt,nt)}const de=[];for(const[Et,dt]of Q.entries()){if(dt.length===0)continue;const Ct=[...dt].sort((an,fn)=>{var ls,To;const _n=(ls=et.get(an.visualId))!=null?ls:Number.MIN_SAFE_INTEGER,at=(To=et.get(fn.visualId))!=null?To:Number.MIN_SAFE_INTEGER;return _n!==at?at-_n:Mi(fn.date)-Mi(an.date)||fn.id.localeCompare(an.id)})[0].visualId,Ut={branchName:v,key:Et,commitIds:dt.map(an=>an.visualId),leadId:Ct,count:dt.length};de.push(Ut),Oe.set(Et,Ct),ae.set(Et,dt.length);for(const an of Ut.commitIds){xt.set(an,Et);const fn=an.split(":").slice(1).join(":"),_n=(pt=Qt.get(fn))!=null?pt:[];_n.includes(Et)||_n.push(Et),Qt.set(fn,_n)}}return de};for(const[v,T]of zt.entries())Mt.set(v,Pe(v,T));const Ke=new Map;for(const v of q)Ke.set(v.id,v);const Ie=v=>{if(!v)return"none";const T=Array.from(Ke.values()).find(X=>Uo(X.id,v)||Uo(X.id.slice(0,7),v)||Uo(v,X.id));return T?`${T.id.slice(0,7)} ${T.branchName}`:v.slice(0,7)},ut=b?["Lane rows (expected):",...[...n].sort((v,T)=>v.column-T.column||v.name.localeCompare(T.name)).map(v=>{var T;return`  row=${v.column} branch=${v.name} parent=${(T=v.parentName)!=null?T:"none"}`}),"",...i.flatMap(v=>{var lt,pt,Et,dt,nt,Ct,Ut,an;const T=(lt=h[v.name])!=null?lt:[],X=[...(pt=F.get(v.name))!=null?pt:[]].reverse(),Q=new Set(((Et=$.get(v.name))!=null?Et:[]).map(fn=>fn.id)),de=(nt=(dt=X.find(fn=>!fn.parentSha||!X.some(_n=>{var at;return Uo(_n.fullSha,(at=fn.parentSha)!=null?at:"")})))!=null?dt:X[0])!=null?nt:null,we=(Ut=(Ct=de==null?void 0:de.parentSha)!=null?Ct:Ae.get(v.name))!=null?Ut:null;return[`Branch ${v.name}`,`  ahead=${(an=g[v.name])!=null?an:0} previews=${X.length} rendered=${Q.size}`,`  db parent commit=${Ie(we)}`,`  db child commit=${de?`${de.fullSha.slice(0,7)} ${v.name}`:"none"}`,...X.map(fn=>{const _n=Q.has(fn.fullSha)?"visible":"hidden",at=Q.has(fn.fullSha)?"kept by render set":"dropped by render set";return`  ${_n} ${fn.fullSha.slice(0,7)} ${fn.message} [${at}]`}),T.length===0?"  no preview data":null].filter(fn=>fn!=null)})]:[],ot=b?Array.from($.entries()).map(([v,T])=>[`Branch debug ${v}`,...T.map(X=>`  ${X.id.slice(0,7)} ${X.message}`)].join(`
`)):[],it=et,rt=Tm/Yu,bt=20/Yu,Bt=M?_s+rt+bt:Hu+rt+bt,Ve=M?Hu+rt+bt:tc,P=Math.max(0,...q.map(v=>{var T;return(T=it.get(v.visualId))!=null?T:1})),ee=q.map(v=>{var de,we;const T=R.get(v.branchName),X=(de=it.get(v.visualId))!=null?de:1,Q=(we=T==null?void 0:T.column)!=null?we:0;return M?{commit:v,row:X,column:Q,x:el+(X-1)*Bt,y:Jr+Q*Ve}:{commit:v,row:X,column:Q,x:el+Q*tc,y:Jr+(P-X)*Bt}}),se=S.trim().toLowerCase(),xe=se?ee.filter(v=>{const T=v.commit.id.toLowerCase(),X=v.commit.id.slice(0,7).toLowerCase(),Q=v.commit.message.toLowerCase(),de=v.commit.branchName.toLowerCase();return T.includes(se)||X.includes(se)||Q.includes(se)||de.includes(se)}):ee,He=C&&(js=ee.find(v=>v.commit.id===C))!=null?js:null,Ye=new Set(xe.map(v=>v.commit.id)),Me=(kn=j==null?void 0:j.headSha)!=null?kn:null,yt=(()=>{var T,X;const v=(T=j==null?void 0:j.branchName)!=null?T:null;return!Me||!v?null:(X=xt.get(`${v}:${Me}`))!=null?X:null})(),Ue=new Set;for(const v of Mt.values())for(const T of v)T.count>1&&T.key!==yt&&Ue.add(T.key);const Nt=[...q].filter(v=>{var we;const T=xt.get(v.visualId);if(!T)return!0;const X=Oe.get(T),Q=(we=ae.get(T))!=null?we:1,de=_.has(T)||!Ue.has(T)&&!x.has(T);return Q<=1||de||X===v.visualId}),ft=_y(Nt,R,ct),We=Tm/Yu,vt=20/Yu,Pt=M?_s+We+vt:Hu+We+vt,Gt=M?Hu+We+vt:tc,qe=Math.max(0,...Nt.map(v=>{var T;return(T=ft.get(v.visualId))!=null?T:1})),_t=Nt.map(v=>{var de,we;const T=R.get(v.branchName),X=(de=ft.get(v.visualId))!=null?de:1,Q=(we=T==null?void 0:T.column)!=null?we:0;return M?{commit:v,row:X,column:Q,x:el+(X-1)*Pt,y:Jr+Q*Gt}:{commit:v,row:X,column:Q,x:el+Q*tc,y:Jr+(qe-X)*Pt}}),ht=new Map;for(const v of _t){const T=(co=ht.get(v.commit.id))!=null?co:[];T.push(v),ht.set(v.commit.id,T)}const $t=new Map;for(const v of _t){const T=xt.get(v.commit.visualId);if(!T)continue;const X=$t.get(T);(!X||(M?v.x>X.x:v.y<X.y))&&$t.set(T,v)}const ln=(v,T)=>`${v.toFixed(1)} ${T.toFixed(1)}`,gt=Math.max(0,..._t.map(v=>v.row)),Ft=Math.max(0,...n.map(v=>v.column)),Ln=M?el*2+Math.max(0,gt-1)*Pt+_s+Vh+vt:el*2+(Ft+1)*tc,os=M?Jr*2+Ft*Gt+Is+Vh+vt:Jr*2+Math.max(0,gt-1)*Pt+Is+Vh+vt,xn=[],oo=new Map(i.map(v=>{var X,Q;const T=new Date((Q=(X=v.createdDate)!=null?X:v.divergedFromDate)!=null?Q:v.lastCommitDate).getTime();return[v.name,Number.isFinite(T)?T:0]})),is=v=>{var T;return(T=oo.get(v))!=null?T:0},ns=[],Kt=v=>{b&&ns.push(v)},Mn=new Set,en=new Map,bn=(v,T)=>{var Q;const X=(Q=en.get(v))!=null?Q:[];X.includes(T)||X.push(T),en.set(v,X)},Qe=new Set,Tn=new Set,So=new Set,io=(v,T)=>{var de,we;if(!v)return null;const X=Vu(ht,v,T);if(X)return X;const Q=(de=xt.get(`${T!=null?T:d}:${v}`))!=null?de:xt.get(v);return Q&&(we=$t.get(Q))!=null?we:null},zn=new Set;for(const v of i){const T=L(v);T&&Tn.add(T);const X=(Gn=Ae.get(v.name))!=null?Gn:null;X&&So.add(X)}const Rs=v=>{var de;const T=io(v.id,v.branchName);if(T)return T;const X=xt.get(v.visualId);if(!X)return null;const Q=Oe.get(X);return Q&&(de=_t.find(we=>we.commit.id===Q))!=null?de:null},ao=(v,T)=>v?Vu(ht,v,T):null,ro=(v,T)=>M?{x:v.x-$i,y:v.y+Is/2,face:"left"}:{x:v.x+_s/2,y:v.y+Is+$i,face:"bottom"},bs=v=>M?{x:v.x-$i,y:v.y+Is/2,face:"left"}:{x:v.x+_s/2,y:v.y+Is+$i,face:"bottom"},gs=(v,T)=>v.column!==T.column?!0:M?v.commit.branchName!==T.commit.branchName:!1,vs=(v,T,X)=>{if(!M)return{x:T?v.x+_s:v.x+_s/2,y:T?v.y+Is/2:v.y,face:T?"right":"top"};if(!T)return{x:v.x+_s+$i,y:v.y+Is/2,face:"right"};if(X&&X.column===v.column&&X.commit.branchName!==v.commit.branchName){if(X.x>v.x)return{x:v.x+_s/2,y:v.y+Is+$i,face:"bottom"};if(X.x<v.x)return{x:v.x+_s/2,y:v.y-$i,face:"top"}}return!X||X.column===v.column?{x:v.x+_s+$i,y:v.y+Is/2,face:"right"}:X.column>v.column?{x:v.x+_s/2,y:v.y+Is+$i,face:"bottom"}:{x:v.x+_s/2,y:v.y-$i,face:"top"}},on=v=>M?{x:v.x+_s/2,y:v.y+Is+$i,face:"bottom"}:{x:v.x+_s,y:v.y+Is/2,face:"right"},oi=(v,T)=>Vu(ht,v,T),No=(v,T)=>ao(v,T),Zs=[],Xn=new Set;for(const v of ve){const T=(ys=io(v.targetCommitSha,v.targetBranchName))!=null?ys:null;if(!T){Kt({id:`merge:${v.mergeCommitSha}:${v.sourceCommitSha}:target`,kind:"merge",parent:v.sourceCommitSha,child:v.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const X=v.sourceCommitSha,Q=`merge:${v.mergeCommitSha}:${X!=null?X:"unknown"}`;if(!X||Uo(X,v.targetCommitSha)){Kt({id:Q,kind:"merge",parent:X!=null?X:"unknown",child:v.targetCommitSha,rendered:!1,reason:X?"merged parent equals merge target sha":"missing merged parent sha"});continue}const de=(Kn=Vu(ht,X))!=null?Kn:null;if(!de){Kt({id:Q,kind:"merge",parent:X,child:v.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(de.commit.id===T.commit.id){Kt({id:Q,kind:"merge",parent:de.commit.id,child:T.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let we,lt,pt;const Et=M?T.x+_s/2:T.x+_s-Fh,dt=M?T.y+Is+Fh:T.y+Is/2,nt=M?"bottom":"right";M?(we=de.x+_s+Fh,lt=de.y+Is/2,pt="right"):(we=de.x+_s/2,lt=de.y,pt="top");const Ct=`${we.toFixed(2)}:${lt.toFixed(2)}:${Et.toFixed(2)}:${dt.toFixed(2)}`;if(Xn.has(Ct)){Kt({id:Q,kind:"merge",parent:de.commit.id,child:T.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}Xn.add(Ct),Zs.push({id:Q,fromX:we,fromY:lt,toX:Et,toY:dt,fromFace:pt,toFace:nt,zIndex:is(de.commit.branchName)}),Kt({id:Q,kind:"merge",parent:de.commit.id,child:T.commit.id,rendered:!0,reason:`merge connector rendered to ${v.targetBranchName}`})}const lo=new Set;for(const v of i){if(v.name===d)continue;const T=re.get(v.name);if(!T)continue;const X=J(v),Q=oi((tn=Ae.get(v.name))!=null?tn:"",X),de=(Ys=le.get(v.name))!=null?Ys:T,we=(Ws=No(de.id,v.name))!=null?Ws:Rs(de);if(!Q||!we||Q.commit.id===we.commit.id){const nt=xt.get(`${v.name}:${T.id}`),Ct=xt.get(`${v.name}:${de.id}`),Ut=!!nt&&!Ue.has(nt),an=!!Ct&&!Ue.has(Ct),fn=!!nt&&!_.has(nt)&&(Ut?x.has(nt):!0),_n=!!Ct&&!_.has(Ct)&&(an?x.has(Ct):!0);!Q&&!fn&&bn((Cs=we==null?void 0:we.commit.id)!=null?Cs:T.id,"Missing parent node"),!we&&!_n&&bn(T.id,"Missing child node"),Kt({id:`branch:${(Qn=Q==null?void 0:Q.commit.id)!=null?Qn:"null"}->${(Mo=we==null?void 0:we.commit.id)!=null?Mo:"null"}`,kind:"branch",parent:(Ms=Q==null?void 0:Q.commit.id)!=null?Ms:"null",child:(_o=we==null?void 0:we.commit.id)!=null?_o:"null",rendered:!1,reason:Q?we?"parent and child are the same node":"missing child node":"missing parent node"});continue}const lt=`branch:${Q.commit.id}->${we.commit.id}`;if(zn.has(lt)){Kt({id:lt,kind:"branch",parent:Q.commit.id,child:we.commit.id,rendered:!1,reason:"duplicate connector key"});continue}zn.add(lt),Qe.add(Q.commit.id);const pt=gs(Q,we);Q.commit.branchName!==we.commit.branchName&&lo.add(Q.commit.id);const Et=on(Q),dt=bs(we);xn.push({id:lt,fromX:Et.x,fromY:Et.y,toX:dt.x,toY:dt.y,fromFace:Et.face,toFace:dt.face,zIndex:is(we.commit.branchName)}),Kt({id:lt,kind:"branch",parent:Q.commit.id,child:we.commit.id,rendered:!0,reason:pt?"branch connector rendered":M?"horizontal connector rendered":"vertical connector rendered"})}for(const v of q){const T=Rs(v);if(!T)continue;const X=(Ts=v.parentSha)!=null?Ts:null;if(!X)continue;const Q=(Es=io(X,v.branchName))!=null?Es:oi(X,v.branchName);if(!Q){const Et=(uo=xt.get(`${v.branchName}:${X}`))!=null?uo:xt.get(X),dt=!!Et&&!Ue.has(Et);!!Et&&!_.has(Et)&&(dt?x.has(Et):!0)||bn(v.id,"Missing parent node"),Kt({id:`${v.visualId}->${X}`,kind:"ancestry",parent:X,child:v.id,rendered:!1,reason:"missing parent node"});continue}if(T.commit.id===Q.commit.id){bn(T.commit.id,"Parent and child resolve to the same node"),Kt({id:`${Q.commit.id}->${T.commit.id}`,kind:"ancestry",parent:Q.commit.id,child:T.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const de=`${v.branchName}:${(Nn=Q.commit.visualId)!=null?Nn:Q.commit.id}->${T.commit.visualId}`;if(zn.has(de)){bn(Q.commit.id,"Duplicate connector key"),bn(T.commit.id,"Duplicate connector key"),Kt({id:de,kind:"ancestry",parent:Q.commit.id,child:T.commit.id,rendered:!1,reason:"duplicate connector key"});continue}zn.add(de),Qe.add(Q.commit.id);const we=gs(Q,T),lt=vs(Q,we,T),pt=ro(T);xn.push({id:de,fromX:lt.x,fromY:lt.y,toX:pt.x,toY:pt.y,fromFace:lt.face,toFace:pt.face,zIndex:is(T.commit.branchName)}),Kt({id:de,kind:"ancestry",parent:Q.commit.id,child:T.commit.id,rendered:!0,reason:we?"ancestry connector rendered":M?"horizontal ancestry rendered":"vertical ancestry rendered"}),Mn.add(Q.commit.id),Mn.add(T.commit.id)}const Ro=new Map;for(const v of _t){const T=(I=Ro.get(v.commit.branchName))!=null?I:[];T.push(v),Ro.set(v.commit.branchName,T)}for(const[v,T]of Ro.entries()){if(T.length<2)continue;const X=[...T].sort((Q,de)=>{var we,lt,pt,Et,dt,nt,Ct,Ut;return Q.row!==de.row?Q.row-de.row:Mi((lt=(we=Q==null?void 0:Q.commit)==null?void 0:we.date)!=null?lt:null)-Mi((Et=(pt=de==null?void 0:de.commit)==null?void 0:pt.date)!=null?Et:null)||((nt=(dt=Q==null?void 0:Q.commit)==null?void 0:dt.id)!=null?nt:"").localeCompare((Ut=(Ct=de==null?void 0:de.commit)==null?void 0:Ct.id)!=null?Ut:"")});for(let Q=1;Q<X.length;Q+=1){const de=X[Q-1],we=X[Q];if(de.commit.id===we.commit.id)continue;const lt=(oe=we.commit.parentSha)!=null?oe:null;if(lt&&oi(lt,we.commit.branchName))continue;const pt=`chain:${v}:${de.commit.id}->${we.commit.id}`;if(zn.has(pt)){bn(de.commit.id,"Duplicate branch chain connector"),bn(we.commit.id,"Duplicate branch chain connector"),Kt({id:pt,kind:"ancestry",parent:de.commit.id,child:we.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}zn.add(pt);const Et=gs(de,we),dt=vs(de,Et,we),nt=ro(we);xn.push({id:pt,fromX:dt.x,fromY:dt.y,toX:nt.x,toY:nt.y,fromFace:dt.face,toFace:nt.face,zIndex:is(we.commit.branchName)}),Kt({id:pt,kind:"ancestry",parent:de.commit.id,child:we.commit.id,rendered:!0,reason:"branch chain rendered"}),Mn.add(de.commit.id),Mn.add(we.commit.id)}}return{branchByName:z,laneByName:R,mainCommits:D,branchCommitsByLane:$,branchPreviewSets:F,allCommits:q,clustersByBranch:Mt,clusterKeyByCommitId:xt,clusterKeyBySha:Qt,leadByClusterKey:Oe,clusterCounts:ae,debugRows:ut,branchDebugRows:ot,nodes:ee,normalizedSearchQuery:se,matchingNodes:xe,matchingNodeIds:Ye,focusedNode:He,checkedOutClusterKey:yt,defaultCollapsedClumps:Ue,visibleCommitsList:Nt,renderNodes:_t,visibleNodesBySha:ht,visibleNodeByClusterKey:$t,pointFormatter:ln,contentWidth:Ln,contentHeight:os,connectors:xn,mergeConnectors:Zs,connectorDecisions:ns,nodeWarnings:en,connectorParentShas:Qe,branchStartShas:Tn,branchOffNodeShas:So,crossBranchOutgoingShas:lo,commitIdsWithRenderedAncestry:Mn,branchBaseCommitByName:re,firstBranchCommitByName:Se,mergeDestinations:ve,mergeTargetBranchesBySourceBranchAndCommitSha:tt}}const qv=8,Gv=44,gy=120,yy=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Ox(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),g=Math.abs(h),_=Math.hypot(d,h);if(_<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,g)<qv){const F=d/_,V=h/_,H=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+F*H,c1y:n+V*H,c2x:i-F*H,c2y:a-V*H}}if(Math.min(p,g)<Gv){const F=d/_,V=h/_,H=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+F*H,c1y:n+V*H,c2x:i-F*H,c2y:a-V*H}}const S=Math.min(160,p*.42),C=Math.min(100,p*.22),j=Math.min(120,g*.32),k=Math.min(160,g*.42),M=yy(c),z=yy(u);if(!(M==="v"&&z==="h"||M==="v"&&z==null&&g>=p||M==null&&z==="h"&&g>=p||M==="v"&&z==="v"||M==null&&z==null&&g>p)){const F=i,V=n;return{kind:"elbowH",cx:F,cy:V,s1c1x:t+x*S,s1c1y:n,s1c2x:F-x*C,s1c2y:V,s2c1x:F,s2c1y:V+b*j,s2c2x:i,s2c2y:a-b*k}}const D=t,$=a;return{kind:"elbowV",cx:D,cy:$,s1c1x:t,s1c1y:n+b*k,s1c2x:D,s1c2y:$-b*j,s2c1x:D+x*S,s2c1y:$,s2c2x:i-x*C,s2c2y:a}}function Kv(t,n,i,a,c,u){const d=Ox(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function xy(t,n,i,a,c,u,d){const h=Ox(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const S=Math.max(8,Math.min(gy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),C=i>=t?1:-1,j=a>=n?1:-1,k=h.cx-C*S,M=h.cy+j*S;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(k-C*S*.5,h.cy)} ${c(k,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,M)}`,`C ${c(h.cx,M+j*S*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(gy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),g=i>=t?1:-1,_=a>=n?1:-1,x=h.cy-_*p,b=h.cx+g*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-_*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+g*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const fp=2.25,nc=fp/2,Qv=.45,Zv=.01,ya=fp,Cd=10,Jv=-100,by=0,vy=.9,ew=.9,wy=.001,Xh=.001,tw=12,nw=_s+48;function Hs(...t){return t.filter(Boolean).join(" ")}function sw(t){return Math.max(Qv,Math.min(fp,t))}function ow(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function zx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function iw(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const g of t)n=Math.min(n,g.x),i=Math.min(i,g.y),a=Math.max(a,g.x),c=Math.max(c,g.y);return{left:n,top:i,right:a,bottom:c}}function aw(t,n,i,a,c,u,d){const h=Kv(t,n,i,a,u,d),p=iw(h);return zx(c,p)}function $x(t,n){return{left:t.x,top:t.y+n,right:t.x+_s,bottom:t.y+Tc+Is+4}}function rw(t,n){const i=nw,a=Math.max(120,Math.ceil(Tc+Is+4-n+24)),c=new Map;for(const u of t){const d=$x(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),g=Math.floor(d.top/a),_=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let S=g;S<=_;S++){const C=`${b},${S}`;let j=c.get(C);j||(j=new Set,c.set(C,j)),j.add(x)}}return{cellW:i,cellH:a,buckets:c}}function lw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),g=Math.floor(n.top/u),_=Math.floor(n.bottom/u),x=new Set;for(let S=h;S<=p;S++)for(let C=g;C<=_;C++){const j=d.get(`${S},${C}`);if(j)for(const k of j)x.add(k)}const b=new Set;for(const S of x){const C=i.get(S);if(!C)continue;const j=$x(C,a);zx(n,j)&&b.add(S)}return b}function Sy(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/ya;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function cw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function Cy(t,n,i){const a=n/ya;return!Number.isFinite(a)||a<=0?t:cw(t,100/a)}function ky(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function pi(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Am(t,n){if(n){const i=ky(n),a=ky(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function qh(t,n){return t.pathExists===!1?!1:Am(t,n)}function uw(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function dw({fadeIn:t,className:n,style:i,onClick:a,dataCommitCard:c,children:u}){const[d,h]=y.useState(!t);return y.useLayoutEffect(()=>{if(!t){h(!0);return}h(!1);let p=null;const g=requestAnimationFrame(()=>{p=requestAnimationFrame(()=>h(!0))});return()=>{cancelAnimationFrame(g),p!=null&&cancelAnimationFrame(p)}},[t]),l.jsx("div",{className:n,"data-commit-card":c,onClick:a,style:{...i,opacity:d?1:0,transition:t?"opacity 240ms ease-out":void 0},children:u})}function fw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,labelTopPx:g,inverseZoomStyle:_,displayZoom:x,selectedVisibleCommitShas:b,iconScaleStyle:S,normalizedSearchQuery:C,matchingNodeIds:j,focusedNode:k,renderNodes:M,shouldRenderNode:z,manuallyOpenedClumps:R,manuallyClosedClumps:D,defaultCollapsedClumps:$,leadByClusterKey:F,clusterKeyByCommitId:V,clusterCounts:H,commitIdsWithRenderedAncestry:K,nodeWarnings:re,connectorParentShas:le,branchStartShas:Se,branchOffNodeShas:Ae,crossBranchOutgoingShas:J,branchBaseCommitByName:ue,branchStartAccentClass:L,connectorParentAccentClass:ne,commitCornerRadiusPx:U,lineStrokeWidth:he,pointFormatter:je,connectors:A,mergeConnectors:te,cullConnectorPath:q,flushCameraReactTick:fe,setManuallyOpenedClumps:Te,setManuallyClosedClumps:Ne,onCommitCardClick:ve,unpushedCommitShasSetByBranch:tt,checkedOutHeadSha:Ge}){const[ze,ct]=y.useState(new Set),et=y.useRef(null);y.useEffect(()=>{const Oe=new Set;H.forEach((Ke,Ie)=>{(R.has(Ie)||!$.has(Ie)&&!D.has(Ie))&&Oe.add(Ie)});const ae=et.current;if(ae==null){et.current=Oe;return}const Pe=[];if(Oe.forEach(Ke=>{ae.has(Ke)||Pe.push(Ke)}),Pe.length>0){ct(Ie=>{const ut=new Set(Ie);return Pe.forEach(ot=>ut.add(ot)),ut});const Ke=window.setTimeout(()=>{ct(Ie=>{const ut=new Set(Ie);return Pe.forEach(ot=>ut.delete(ot)),ut})},260);return et.current=Oe,()=>{window.clearTimeout(Ke)}}et.current=Oe},[H,$,D,R]);const zt=(Oe,ae)=>{const Pe=ae.zIndex-Oe.zIndex;if(Pe!==0)return Pe;const Ke=Math.min(Oe.fromY,Oe.toY),Ie=Math.min(ae.fromY,ae.toY),ut=Ke-Ie;return ut!==0?ut:Oe.id.localeCompare(ae.id)},Mt=te.filter(Oe=>q(Oe)).sort(zt),xt=A.filter(Oe=>q(Oe)).sort(zt),Qt=M.filter(Oe=>z(Oe));return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:l.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[Qt.map(Oe=>{var Nt,ft,We,vt,Pt;const ae=V.get(Oe.commit.visualId),Pe=ae?R.has(ae)||!$.has(ae)&&!D.has(ae):!1,Ke=ae?F.get(ae)===Oe.commit.visualId:!1,Ie=ae!=null&&Pe&&!Ke&&ze.has(ae),ut=ae&&(Nt=H.get(ae))!=null?Nt:1,ot=K.has(Oe.commit.id),it=(ft=re.get(Oe.commit.id))!=null?ft:[],rt=it.length>0&&!ot,bt=b.includes(Oe.commit.id),Bt=Oe.commit.id==="WORKING_TREE"||Oe.commit.kind==="uncommitted",Ve=Oe.commit.kind==="stash"||Oe.commit.id.startsWith("STASH:"),P=/^STASH:(\d+)$/.exec(Oe.commit.id),ee=P?`Stash:${P[1]}`:null,se=Ve?Oe.commit.message.trim()&&Oe.commit.message.trim()!=="git-visualizer"?Oe.commit.message:"Stashed changes":Oe.commit.message,xe=Oe.commit.kind==="branch-created"&&Oe.commit.id.startsWith("BRANCH_HEAD:"),He=Bt||((vt=(We=tt.get(Oe.commit.branchName))==null?void 0:We.has(Oe.commit.id))!=null?vt:!1),Me=(Bt||Ge!=null&&Oe.commit.id===Ge)&&!bt,yt=Me?"text-[#38BDF2]":bt?"text-[#158EFC]":"text-muted-foreground",Ue=Me?{color:"#38BDF2"}:bt?{color:"#158EFC"}:void 0;return l.jsxs(dw,{fadeIn:Ie,dataCommitCard:"true",className:Hs("group absolute z-20 cursor-pointer",C&&!j.has(Oe.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",C&&j.has(Oe.commit.id)?"scale-[1.01]":"",(k==null?void 0:k.commit.id)===Oe.commit.id?"z-30 scale-[1.015]":""),style:{left:Oe.x,top:Oe.y,width:_s,height:Tc+Is+4,overflow:"visible"},onClick:Gt=>ve(Gt,Oe),children:[l.jsx("div",{className:"absolute left-0 w-full",style:{..._,top:`${g}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[l.jsx("div",{className:Hs("min-w-0 h-4 flex-1 text-sm font-medium leading-none",yt,x<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Ue,children:Ve&&ee?ee:Oe.commit.branchName?`${Oe.commit.branchName}/${Oe.commit.id.slice(0,7)}`:Oe.commit.id.slice(0,7)}),Ke&&ut>1?l.jsx("button",{type:"button",onMouseDown:Gt=>{Gt.stopPropagation()},onClick:Gt=>{if(Gt.stopPropagation(),Gt.preventDefault(),!ae)return;!$.has(ae)?(Te(_t=>{if(!_t.has(ae))return _t;const ht=new Set(_t);return ht.delete(ae),ht}),Ne(_t=>{const ht=new Set(_t);return ht.has(ae)?ht.delete(ae):ht.add(ae),ht})):(Ne(_t=>{if(!_t.has(ae))return _t;const ht=new Set(_t);return ht.delete(ae),ht}),Te(_t=>{const ht=new Set(_t);return ht.has(ae)?ht.delete(ae):ht.add(ae),ht})),fe()},className:Hs("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",yt),style:Ue,children:Pe?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${ut}`}):null]})}),l.jsx("div",{className:Hs("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",Me&&!He&&!Ve&&!xe?"bg-[#EBF7FE]":bt&&!He&&!Ve&&!xe?"bg-[#E5F0FF]":He||Ve||xe?"bg-transparent":"bg-[#F5F5F5]",Ve||Bt||xe?"border-dashed":"",Ae.has(Oe.commit.id)||Se.has(Oe.commit.id)||J.has(Oe.commit.id)?L:le.has(Oe.commit.id)?ne:((Pt=ue.get(Oe.commit.branchName))==null?void 0:Pt.id)===Oe.commit.id?"border-amber-500":rt?"border-red-500":"",(C&&j.has(Oe.commit.id)&&!d,"")),style:{top:0,borderWidth:`${Ve||Bt||xe?he*(2/1.5):he}px`,borderColor:Me?"#38BDF2":bt?"#158EFC":Yh,borderTopLeftRadius:0,borderTopRightRadius:`${U}px`,borderBottomRightRadius:`${U}px`,borderBottomLeftRadius:`${U}px`},children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:_,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:Hs("max-w-[38rem] text-sm font-medium leading-tight tracking-tight text-muted-foreground",yt,x<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Ue,children:Ke&&Pe?se:Ke&&ut>1?`${se} +${ut-1}`:se}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:rt?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:it.join(`
`),children:"Broken ancestry"}):null})]}),x>.5?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:Hs("text-sm font-medium",yt),style:Ue,children:["@",Oe.commit.author]}),l.jsx("div",{className:Hs("text-sm font-medium",yt),style:Ue,children:new Date(Oe.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null,(k==null?void 0:k.commit.id)===Oe.commit.id&&C?l.jsx("div",{className:"absolute left-5 top-4 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground",style:S,children:"Search result"}):null]})})]},Oe.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[Mt.map(Oe=>{const{fromX:ae,fromY:Pe,toX:Ke,toY:Ie}=Oe,ut=xy(ae,Pe,Ke,Ie,je,Oe.fromFace,Oe.toFace);return l.jsx("path",{d:ut,fill:"none",stroke:Yh,strokeWidth:he,strokeLinecap:"round",strokeLinejoin:"round"},Oe.id)}),xt.map(Oe=>{const{fromX:ae,fromY:Pe,toX:Ke,toY:Ie}=Oe,ut=xy(ae,Pe,Ke,Ie,je,Oe.fromFace,Oe.toFace);return l.jsx("path",{d:ut,fill:"none",stroke:Yh,strokeWidth:he,strokeLinecap:"round",strokeLinejoin:"round"},Oe.id)})]})]})})})}function hw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stageInProgress:a,stashInProgress:c,stashDisabled:u,pushInProgress:d,deleteInProgress:h,createBranchFromNodeInProgress:p,onCommitLocalChanges:g,onStageAllChanges:_,onStashLocalChanges:x,onPushCurrentBranch:b,onPushAllBranches:S,onPushCommitTargets:C,onDeleteSelection:j,onCreateBranchFromNode:k,onMergeRefsIntoBranch:M,selectedPushTargets:z,selectedPushLabel:R,canPushCurrentBranch:D,pushCurrentBranchLabel:$,pushableRemoteBranchCount:F,deletableSelectionCount:V,canCreateRootBranch:H,selectedCommitTargetOption:K,mergeInProgress:re,setMergeTargetCommitSha:le,worktrees:Se,currentRepoPath:Ae,worktreeMenuOpen:J,setWorktreeMenuOpen:ue,onSwitchToWorktree:L,onRemoveWorktree:ne,removeWorktreeInProgress:U,setCommitDialogOpen:he,setDeleteConfirmOpen:je,setNewBranchDialogOpen:A}){const te=t.length>0;return l.jsxs("div",{className:"pointer-events-none absolute bottom-4 left-4 right-4 z-[70] flex flex-wrap items-center gap-2",children:[l.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[l.jsx("button",{type:"button",onClick:()=>he(!0),disabled:!g||i||te||n,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:n?"Committing...":"Commit"}),l.jsx("button",{type:"button",onClick:()=>void(_==null?void 0:_()),disabled:!_||i||te||a,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:a?"Staging...":"Stage all"}),l.jsx("button",{type:"button",onClick:()=>void(x==null?void 0:x()),disabled:!x||u||te||c,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:c?"Stashing...":"Stash"}),l.jsx("button",{type:"button",onClick:()=>void(b==null?void 0:b()),disabled:!b||!D||te||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:d?"Pushing...":$}),l.jsx("button",{type:"button",onClick:()=>void(S==null?void 0:S()),disabled:!S||F<2||te||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Push all"}),l.jsx("button",{type:"button",onClick:()=>void(C==null?void 0:C(z.map(q=>({branchName:q.branchName,targetSha:q.targetSha})))),disabled:!C||z.length===0||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",title:z.length>0?R:"Select commits to push",children:z.length>0?R:"Push selected"}),l.jsx("button",{type:"button",onClick:()=>je(!0),disabled:!j||V===0||h,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20 disabled:cursor-not-allowed disabled:opacity-50",children:h?"Deleting...":"Delete selection"}),l.jsx("button",{type:"button",onClick:()=>A(!0),disabled:!k&&!H||p,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:p?"Creating...":"Create branch"})]}),t.length>1&&K.options.length>0&&K.targetBranch&&M?l.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[l.jsx("span",{className:"px-1 text-xs font-medium text-muted-foreground",children:"merge to"}),K.options.map(q=>{const fe=q.targetBranch===K.targetBranch;return l.jsx("button",{type:"button",onClick:()=>le(q.targetSha),className:Hs("rounded-full px-2.5 py-1 text-xs font-medium transition-colors",fe?"bg-primary/10 text-primary":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:q.targetBranch},`merge-${q.targetBranch}`)}),l.jsx("button",{type:"button",onClick:()=>void M(K.sources,K.targetBranch),disabled:K.sources.length===0||re,className:"rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",children:re?"Merging...":"Confirm"})]}):null,Se.length>0&&(L||ne)?l.jsxs("div",{className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>ue(q=>!q),className:"rounded-full border border-border bg-card/95 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-accent",children:[Se.length," ",Se.length===1?"Worktree":"Worktrees"]}),J?l.jsx("div",{className:"absolute bottom-full left-0 mb-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border bg-card p-2",children:Se.map(q=>{var fe;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:q.path,children:Am(q,Ae)?uw(q.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(fe=q.branchName)!=null?fe:"detached"," • ",q.headSha.slice(0,7)]})]}),Am(q,Ae)?l.jsxs("div",{className:"flex items-center gap-1",children:[L?l.jsx("button",{type:"button",onClick:()=>{ue(!1),L(q.path)},disabled:U||q.pathExists===!1,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,ne?l.jsx("button",{type:"button",onClick:()=>void ne(q.path,q.isPrunable),disabled:U,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:U?"...":"Remove"}):null]}):null]},q.path)})}):null]}):null]})}function mw({isOpen:t,onToggle:n,onClose:i,visibleBounds:a,renderedNodeCount:c,totalNodeCount:u,renderedMergeConnectorCount:d,totalMergeConnectorCount:h,renderedConnectorCount:p,totalConnectorCount:g,mapGridCullViewportInsetScreenPx:_,debugRows:x,branchDebugRows:b,connectorDecisions:S}){return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"pointer-events-none absolute bottom-4 right-4 z-[10000] flex items-end gap-2",children:l.jsx("button",{type:"button",onClick:n,className:Hs("pointer-events-auto inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium transition-colors",t?"border-primary/30 bg-primary/10 text-primary":"border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"),children:"Debug"})}),t?l.jsxs("div",{className:"absolute bottom-14 right-4 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:i,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${_}px screen/side): ${a?`${(a.right-a.left).toFixed(0)} x ${(a.bottom-a.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${c} / ${u}`,`Rendered merge connectors: ${d} / ${h}`,`Rendered connectors: ${p} / ${g}`,"",...x,...b,"",...S.map(C=>`${C.rendered?"rendered":"skipped"} [${C.kind}] ${C.parent.slice(0,7)} -> ${C.child.slice(0,7)} (${C.reason})`)].join(`
`)})})]}):null]})}function pw({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:g,deleteInProgress:_,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:S,newBranchCreateMode:C,onNewBranchNameChange:j,onNewBranchCreateModeChange:k,onNewBranchDialogClose:M,onNewBranchConfirm:z,selectedCommitCanCreateBranch:R,createBranchFromNodeInProgress:D}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:$=>i($.target.value),onKeyDown:$=>{($.metaKey||$.ctrlKey)&&$.key==="Enter"&&($.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:u?"Committing...":"Commit"})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map($=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:$},$))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:g,disabled:x===0||_,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:_?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>k("from-selected-node"),className:Hs("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",C==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>k("new-root"),className:Hs("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",C==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),C==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:S,onChange:$=>j($.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:M,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:z,disabled:!S.trim()||D||C==="from-selected-node"&&!R,className:Hs("rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:D?"Creating...":"Create"})]})]})}):null]})}function _w({mapPadHostRef:t,transformLayerRef:n}){const i=y.useRef({x:0,y:0}),a=y.useRef(nc),c=y.useRef({panX:0,panY:0,zoom:nc}),u=y.useRef(null),d=y.useRef(nc),h=y.useRef(null),[p,g]=y.useState(!1),[_,x]=y.useState(nc),[b,S]=y.useState(0),C=y.useRef(null),j=y.useRef(0),k=y.useCallback(()=>{const K=t.current;if(!K)return null;const re=K.getBoundingClientRect(),le=getComputedStyle(K),Se=Number.parseFloat(le.borderLeftWidth)||0,Ae=Number.parseFloat(le.borderTopWidth)||0,J=Number.parseFloat(le.paddingLeft)||Cd,ue=Number.parseFloat(le.paddingTop)||Cd;return{x:re.left+Se+J,y:re.top+Ae+ue}},[t]),M=y.useCallback(()=>{C.current!=null&&(window.clearTimeout(C.current),C.current=null),y.startTransition(()=>{S(K=>K+1)}),j.current=performance.now()},[]),z=y.useCallback((K,re,le)=>{const Se=c.current;c.current={panX:K,panY:re,zoom:le};const Ae=n.current;if(Ae&&(Ae.style.transform=`translate3d(${K}px, ${re}px, 0) scale(${le/ya})`),Math.abs(d.current-le)>Xh&&(d.current=le,x(le)),Math.abs(le-Se.zoom)>Xh){M();return}const L=performance.now()-j.current;if(L>=by){M();return}C.current!=null&&window.clearTimeout(C.current),C.current=window.setTimeout(()=>{C.current=null,M()},by-L)},[M,n]),R=y.useRef(null),D=y.useCallback(()=>{u.current!=null||!R.current||(u.current=window.requestAnimationFrame(R.current))},[]),$=y.useCallback(()=>{g(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,g(!1)},90)},[]),F=y.useCallback((K,re,le)=>{i.current={x:K,y:re},a.current=le,$(),D()},[$,D]);R.current=()=>{u.current=null;const K=c.current,re=i.current.x,le=i.current.y,Se=a.current,Ae=Math.abs(re-K.panX)<=wy?re:K.panX+(re-K.panX)*vy,J=Math.abs(le-K.panY)<=wy?le:K.panY+(le-K.panY)*vy,ue=Math.abs(Se-K.zoom)<=Xh?Se:K.zoom+(Se-K.zoom)*ew;z(Ae,J,ue),Ae!==re||J!==le||ue!==Se?R.current&&(u.current=window.requestAnimationFrame(R.current)):M()};const V=y.useCallback((K,re,le)=>{const Se=sw(le),Ae=c.current,J=k();if(!J){F(i.current.x,i.current.y,Se);return}const ue=K-J.x,L=re-J.y,ne=Ae.zoom/ya,U=Se/ya,he=(ue-Ae.panX)/ne,je=(L-Ae.panY)/ne;F(ue-he*U,L-je*U,Se)},[k,F]),H=y.useCallback(K=>{if(K.preventDefault(),K.ctrlKey||K.metaKey){const re=Math.exp(-K.deltaY*Zv);V(K.clientX,K.clientY,a.current*re);return}F(i.current.x-K.deltaX,i.current.y-K.deltaY,a.current)},[F,V]);return y.useLayoutEffect(()=>(z(0,0,nc),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),C.current!=null&&(window.clearTimeout(C.current),C.current=null)}),[z]),y.useLayoutEffect(()=>{const K=n.current;if(!K)return;const re=c.current;K.style.transform=`translate3d(${re.panX}px, ${re.panY}px, 0) scale(${re.zoom/ya})`}),{isCameraMoving:p,renderedZoom:_,cameraRenderTick:b,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:k,flushCameraReactTick:M,syncCamera:F,handleWheel:H}}function gw(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function yw({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=y.useRef(null),h=y.useRef(!1),p=y.useRef([]),[g,_]=y.useState(!1),[x,b]=y.useState(null),[S,C]=y.useState([]),[j,k]=y.useState(null),M=y.useCallback(R=>{const D=t.current,$=i();if(!D||!$)return[];const F=D.getBoundingClientRect(),V=n.current.zoom/ya;if(V<=0)return[];const H=[],K=R.left,re=R.left+R.width,le=R.top,Se=R.top+R.height;for(const Ae of a){if(!c(Ae))continue;const J=$.x+n.current.panX+Ae.x*V-F.left,ue=$.y+n.current.panY+Ae.y*V-F.top,L=J+_s*V,ne=ue+(Tc+Is)*V;!(L<K||J>re||ne<le||ue>Se)&&H.push(Ae.commit.id)}return H},[i,a,n,t,c]),z=y.useCallback(R=>{if(R.button!==0)return;const D=R.target;if(D!=null&&D.closest("[data-commit-card]")||D!=null&&D.closest("button, a, input, textarea, select"))return;const $=t.current;if(!$)return;R.preventDefault();const F=$.getBoundingClientRect(),V=R.clientX-F.left,H=R.clientY-F.top;d.current={startX:V,startY:H,currentX:V,currentY:H,additive:R.metaKey||R.ctrlKey},h.current=!1,p.current=R.metaKey||R.ctrlKey?S:[],_(!0),b({left:V,top:H,width:0,height:0})},[t,S]);return y.useEffect(()=>{const R=$=>{var le;const F=d.current;if(!F)return;const V=t.current;if(!V)return;const H=V.getBoundingClientRect();F.currentX=$.clientX-H.left,F.currentY=$.clientY-H.top,!h.current&&(Math.abs(F.currentX-F.startX)>2||Math.abs(F.currentY-F.startY)>2)&&(h.current=!0);const K=gw(F);b(K);const re=M(K);C(F.additive?Array.from(new Set([...p.current,...re])):Array.from(new Set(re))),F.additive||k((le=re[re.length-1])!=null?le:null)},D=()=>{if(d.current){const $=h.current;d.current=null,h.current=!1,_(!1),b(null),$||(C([]),k(null));return}u()};return window.addEventListener("mousemove",R),window.addEventListener("mouseup",D),()=>{window.removeEventListener("mousemove",R),window.removeEventListener("mouseup",D)}},[M,u,t]),{isMarqueeSelecting:g,marqueeRect:x,selectedCommitShas:S,setSelectedCommitShas:C,mergeTargetCommitSha:j,setMergeTargetCommitSha:k,startMarqueeDrag:z}}function jy({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:g,staleBranches:_=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:S,mapTopInsetPx:C=0,onMergeRefsIntoBranch:j,mergeInProgress:k=!1,onPushAllBranches:M,onPushCurrentBranch:z,onPushCommitTargets:R,pushInProgress:D=!1,onDeleteSelection:$,deleteInProgress:F=!1,worktrees:V=[],currentRepoPath:H,onRemoveWorktree:K,removeWorktreeInProgress:re=!1,onSwitchToWorktree:le,onStashLocalChanges:Se,stashInProgress:Ae=!1,stashDisabled:J=!1,onCommitLocalChanges:ue,commitInProgress:L=!1,commitDisabled:ne=!1,onStageAllChanges:U,stageInProgress:he=!1,onCreateBranchFromNode:je,onCreateRootBranch:A,createBranchFromNodeInProgress:te=!1,orientation:q="horizontal",branchCommitPreviews:fe={},branchParentByName:Te={},branchUniqueAheadCounts:Ne={},gridSearchQuery:ve="",gridSearchJumpToken:tt=0,gridFocusSha:Ge=null,checkedOutRef:ze=null,onGridSearchResultCountChange:ct,onGridSearchFocusChange:et,onInteractionChange:zt,manuallyOpenedClumps:Mt,manuallyClosedClumps:xt,setManuallyOpenedClumps:Qt,setManuallyClosedClumps:Oe,layoutModel:ae}){var ai,Go,Js,$o,ri,En,Zn,eo,Vi,ea,Io,kr;const Pe=y.useRef(null),Ke=y.useRef(null),Ie=y.useRef(null),[ut,ot]=y.useState(!1),[it,rt]=y.useState(!1),[bt,Bt]=y.useState(""),[Ve,P]=y.useState(!1),[ee,se]=y.useState(!1),[xe,He]=y.useState(""),[Ye,Me]=y.useState("from-selected-node"),[yt,Ue]=y.useState(()=>new Set),[Nt,ft]=y.useState(()=>new Set),We=Mt!=null?Mt:yt,vt=xt!=null?xt:Nt,Pt=Qt!=null?Qt:Ue,Gt=Oe!=null?Oe:ft,[qe,_t]=y.useState(!1),[ht,$t]=y.useState(null),[ln,gt]=y.useState(null),{isCameraMoving:Ft,renderedZoom:Ln,cameraRenderTick:os,renderedCameraRef:xn,interactionIdleTimeoutRef:oo,getTransformLayerOriginScreen:is,flushCameraReactTick:ns,syncCamera:Kt,handleWheel:Mn}=_w({mapPadHostRef:Ke,transformLayerRef:Ie}),en=y.useMemo(()=>dp(t,d,fe,Te),[t,d,fe,Te]),bn=y.useMemo(()=>Sd({lanes:en,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:fe,branchParentByName:Te,branchUniqueAheadCounts:Ne,manuallyOpenedClumps:We,manuallyClosedClumps:vt,isDebugOpen:qe,gridSearchQuery:ve,gridFocusSha:Ge,checkedOutRef:ze!=null?ze:null,orientation:q}),[en,t,n,i,a,d,fe,Te,Ne,We,vt,qe,ve,Ge,(ai=ze==null?void 0:ze.headSha)!=null?ai:null,(Go=ze==null?void 0:ze.branchName)!=null?Go:null,q]),Qe=ae!=null?ae:bn,Tn=y.useMemo(()=>Sd({lanes:en,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:fe,branchParentByName:Te,branchUniqueAheadCounts:Ne,manuallyOpenedClumps:We,manuallyClosedClumps:vt,isDebugOpen:qe,gridSearchQuery:ve,gridFocusSha:Ge,checkedOutRef:ze!=null?ze:null,orientation:q}),[en,t,n,i,a,d,fe,Te,Ne,We,vt,qe,ve,Ge,(Js=ze==null?void 0:ze.headSha)!=null?Js:null,($o=ze==null?void 0:ze.branchName)!=null?$o:null,q]),{allCommits:So,clusterKeyByCommitId:io,leadByClusterKey:zn,clusterCounts:Rs,matchingNodes:ao,matchingNodeIds:ro,normalizedSearchQuery:bs,focusedNode:gs,defaultCollapsedClumps:vs,renderNodes:on,visibleNodesBySha:oi,contentWidth:No,contentHeight:Zs,connectors:Xn,mergeConnectors:lo,connectorDecisions:Ro,nodeWarnings:Bo,commitIdsWithRenderedAncestry:Fo,connectorParentShas:mo,branchStartShas:ws,branchOffNodeShas:Bs,crossBranchOutgoingShas:Cn,branchBaseCommitByName:_i,pointFormatter:as}=Qe,ii=!!bs,Us=Ln/ya,Lo=y.useMemo(()=>({transform:`scale(${1/Us})`,transformOrigin:"top left",width:`${100*Us}%`,height:`${100*Us}%`}),[Us]),Co=-(20/Us),Ss=y.useMemo(()=>{const Be=new Map;for(const Ze of on)Be.set(Ze.commit.visualId,Ze);return Be},[on]),Vs=y.useMemo(()=>rw(on,Co),[on,Co]),vn=Be=>{var It;const Ze=Be.commit.id,wt=Be.commit.visualId;if(ii&&ro.has(Ze)||(gs==null?void 0:gs.commit.id)===Ze||ht===null)return!0;if(!ht.has(wt))return!1;const st=io.get(wt);return st&&((It=Rs.get(st))!=null?It:1)>1&&(We.has(st)||!vs.has(st)&&!vt.has(st)),!0},po=1.5/Us,rs=tw/Us,qn=y.useMemo(()=>({transform:`scale(${1/Us})`,transformOrigin:"center"}),[Us]),gi="border-slate-400/70",ko="border-blue-500",Xo=y.useMemo(()=>new Map(t.map(Be=>[Be.name,Be])),[t]);y.useMemo(()=>new Set(t.filter(Be=>Be.commitsAhead===0&&!Be.name.startsWith("*")).map(Be=>Be.name)),[t]);const Xt=y.useMemo(()=>{var Ze,wt;const Be=new Map;for(const st of on){const It=(Ze=Be.get(st.commit.id))!=null?Ze:new Set;It.add(st.commit.branchName),Be.set(st.commit.id,It)}for(const st of i){const It=(wt=Be.get(st.fullSha))!=null?wt:new Set;st.branch&&It.add(st.branch),Be.set(st.fullSha,It)}return Be},[on,i,d]),Di=y.useMemo(()=>new Map(Object.entries(c).map(([Be,Ze])=>[Be,new Set(Ze)])),[c]),Ls=y.useCallback(()=>{oo.current,ns()},[ns,oo]),{isMarqueeSelecting:qo,marqueeRect:Oo,selectedCommitShas:zo,setSelectedCommitShas:Os,mergeTargetCommitSha:jo,setMergeTargetCommitSha:js,startMarqueeDrag:kn}=yw({scrollContainerRef:Pe,renderedCameraRef:xn,getTransformLayerOriginScreen:is,renderNodes:on,shouldRenderNode:vn,onPointerReleaseNoMarquee:Ls}),co=y.useMemo(()=>new Set(on.map(Be=>Be.commit.id)),[on]),Gn=y.useMemo(()=>zo.filter(Be=>co.has(Be)),[zo,co]),ys=y.useCallback((Be,Ze)=>{var It;if(!Ze)return!1;if(((It=fe[Be])!=null?It:[]).some(Rt=>pi(Rt.fullSha,Ze)||pi(Rt.sha,Ze)))return!0;const st=Xo.get(Be);return!!(st!=null&&st.headSha&&pi(st.headSha,Ze))},[fe,Xo]),Kn=(ri=ze==null?void 0:ze.branchName)!=null?ri:null,tn=(En=ze==null?void 0:ze.headSha)!=null?En:null,Ys=Kn==null,Ws=y.useMemo(()=>{if(!Ge)return null;const Be=on.filter(Ze=>Ze.commit.id===Ge);return Be.length===0?null:Be.length===1||!gs?Be[0]:Be.reduce((Ze,wt)=>{const st=(Ze.x-gs.x)**2+(Ze.y-gs.y)**2;return(wt.x-gs.x)**2+(wt.y-gs.y)**2<st?wt:Ze})},[Ge,on,gs]),Cs=y.useCallback((Be,Ze,wt)=>{for(const st of V){if(!qh(st,H))continue;if(st.branchName){if(st.branchName===Be&&pi(st.headSha,Ze))return st;continue}if(!pi(st.headSha,Ze)&&!pi(st.headSha,wt))continue;if(st.parentSha&&ys(Be,st.parentSha)||ys(Be,st.headSha))return st;const It=Xo.get(Be);if(It&&pi(It.headSha,st.headSha)||Be===d&&i.some(Rt=>pi(Rt.fullSha,st.headSha)))return st}return null},[V,H,ys,Xo,d,i]),Qn=y.useCallback(Be=>{for(const Ze of V)if(qh(Ze,H)&&Ze.branchName===Be)return Ze;return null},[V,H]),Mo=y.useCallback((Be,Ze)=>{for(const wt of V)if(qh(wt,H)&&(pi(wt.headSha,Be)||pi(wt.headSha,Ze)))return wt;return null},[V,H]),Ms=y.useCallback(Be=>{var Ze;return Array.from((Ze=Xt.get(Be))!=null?Ze:[])},[Xt]),_o=y.useMemo(()=>{var It,Rt,hn,cn;const Be=new Map;for(const cs of Gn){const ks=Ms(cs);if(ks.length===0)continue;const go=(It=ks.find(fo=>fo!==d))!=null?It:ks[0],ta=Gn.filter(fo=>fo!==cs).filter(fo=>!new Set(Ms(fo)).has(go));Be.set(go,{targetSha:cs,targetBranch:go,sourceRefs:ta})}const Ze=Array.from(Be.values()),wt=jo?Ze.find(cs=>{var ks;return cs.targetSha===jo||cs.targetBranch===((ks=Ms(jo)[0])!=null?ks:"")}):null,st=(Rt=wt!=null?wt:Ze[Ze.length-1])!=null?Rt:null;return{options:Ze,selected:st,targetBranch:(hn=st==null?void 0:st.targetBranch)!=null?hn:null,sources:(cn=st==null?void 0:st.sourceRefs)!=null?cn:[]}},[Gn,Ms,d,jo]),Ts=y.useMemo(()=>{const Be=[...Kn===d?[{name:d,headSha:tn!=null?tn:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(Ze=>!Ze.name.startsWith("*")&&Ze.unpushedCommits>0&&Ze.remoteSyncStatus!=="on-github").map(Ze=>[Ze.name,Ze]);return new Map(Be)},[t,Kn,tn,d,a.length]),Es=y.useMemo(()=>{const Be=st=>{var Rt;const It=Ms(st).filter(hn=>Ts.has(hn));return It.length===0?null:It.length===1?It[0]:Kn&&It.includes(Kn)?Kn:(Rt=It.find(hn=>hn!==d))!=null?Rt:It[0]},Ze=st=>{var It;return st===d?a.map(Rt=>{var hn,cn;return{fullSha:Rt.fullSha,sha:Rt.sha,parentSha:(hn=Rt.parentSha)!=null?hn:null,message:Rt.message,author:Rt.author,date:Rt.date,kind:(cn=Rt.kind)!=null?cn:"commit"}}):(It=fe[st])!=null?It:[]},wt=new Map;for(const st of Gn){const It=Be(st);if(!It)continue;const Rt=Ts.get(It);if(!Rt)continue;const hn=Ze(It).slice(0,Rt.unpushedCommits),cn=hn.findIndex(ks=>ks.fullSha===st);if(cn===-1)continue;const cs=wt.get(It);(!cs||cn<cs.targetIndex)&&wt.set(It,{branchName:It,targetSha:st,targetIndex:cn,commitCount:hn.length-cn})}return Array.from(wt.values())},[Gn,Ms,Ts,Kn,d,a,fe]),uo=y.useMemo(()=>Array.from(new Set(Gn.map(Be=>/^STASH:(\d+)$/.exec(Be)).filter(Be=>!!Be).map(Be=>parseInt(Be[1],10)))).sort((Be,Ze)=>Be-Ze),[Gn]),Nn=Gn.includes("WORKING_TREE"),I=(Nn?1:0)+uo.length,oe=[...Nn?["Uncommitted changes"]:[],...uo.map(Be=>`Stash ${Be+1}`)],v=Ts.size,T=!Ys&&!!Kn&&Ts.has(Kn),X=Kn?`Push ${Kn}`:"Push current branch",Q=Es.length===1?Es[0].commitCount>1?`Push ${Es[0].commitCount} commits on ${Es[0].branchName}`:`Push ${Es[0].targetSha.slice(0,7)} on ${Es[0].branchName}`:`Push ${Es.length} selected ranges`;y.useEffect(()=>{zt==null||zt(Ft||qo)},[Ft,qo,zt]),y.useEffect(()=>{ct==null||ct(bs?ao.length:null)},[ao.length,bs,ct]);const de=y.useMemo(()=>{var cs,ks,go,ta,fo,ba;if(!bs)return null;const Be=bs,Ze=t.map(Ko=>Ko.name),wt=Ze.find(Ko=>Ko.toLowerCase()===Be),st=wt!=null?wt:Ze.find(Ko=>Ko.toLowerCase().startsWith(Be)),Rt=st!=null?st:Ze.find(Ko=>Ko.toLowerCase().includes(Be));if(!Rt)return null;const hn=(cs=t.find(Ko=>Ko.name===Rt))!=null?cs:null;if(hn!=null&&hn.headSha)return hn.headSha;const cn=(ks=fe[Rt])!=null?ks:[];return cn.length>0?(ta=(go=cn[0])==null?void 0:go.fullSha)!=null?ta:null:Rt===d&&(ba=(fo=i[0])==null?void 0:fo.fullSha)!=null?ba:null},[bs,t,fe,d,i]);y.useEffect(()=>{var Ze,wt;if(!bs){et==null||et(null);return}if(tt<=0)return;if(de){et==null||et(de);return}const Be=(wt=(Ze=ao[0])==null?void 0:Ze.commit.id)!=null?wt:null;et==null||et(Be)},[ao,bs,et,de,tt]),y.useLayoutEffect(()=>{if(!Ge)return;const Be=Pe.current,Ze=Ws;if(!Be||!Ze)return;const wt=is();if(!wt)return;const st=Be.getBoundingClientRect(),It=xn.current.zoom,Rt=It/ya,hn=Ze.x+_s/2,cn=Ze.y+Tc+Is/2,cs=st.left+st.width/2,ks=st.top+st.height/2;Kt(cs-wt.x-hn*Rt,ks-wt.y-cn*Rt,It)},[Ge,tt,Ws,is,Kt,xn]);const we=(Vi=(eo=ln==null?void 0:ln.width)!=null?eo:(Zn=Pe.current)==null?void 0:Zn.clientWidth)!=null?Vi:0,lt=(kr=(Io=ln==null?void 0:ln.height)!=null?Io:(ea=Pe.current)==null?void 0:ea.clientHeight)!=null?kr:0,pt=we>0&&lt>0?Sy(we,lt,xn.current,{innerPaddingPx:Cd}):null,Et=pt!=null?Cy(pt,xn.current.zoom):null,dt=Be=>{if(!Et)return!0;const{fromX:Ze,fromY:wt,toX:st,toY:It}=Be;return aw(Ze,wt,st,It,Et,Be.fromFace,Be.toFace)};y.useLayoutEffect(()=>{var hn;const Be=Pe.current;if(!Be||Be.clientWidth<=0||Be.clientHeight<=0)return;const Ze=Be.clientWidth,wt=Be.clientHeight;gt(cn=>(cn==null?void 0:cn.width)===Ze&&(cn==null?void 0:cn.height)===wt?cn:{width:Ze,height:wt});const st=Sy(Ze,wt,xn.current,{innerPaddingPx:Cd});if(!st){$t(cn=>cn===null?cn:null);return}const It=Cy(st,xn.current.zoom),Rt=lw(Vs,It,Ss,Co);for(const cn of on){const cs=io.get(cn.commit.visualId);if(!cs||((hn=Rs.get(cs))!=null?hn:1)<=1)continue;(We.has(cs)||!vs.has(cs)&&!vt.has(cs))&&Rt.add(cn.commit.visualId)}$t(cn=>ow(cn,Rt)?cn:Rt)},[Ln,tt,Ge,Ft,os,We,vt,vs,io,Rs,on,ln,Vs,Ss,Co]),y.useLayoutEffect(()=>{const Be=Pe.current;if(!Be)return;const Ze=()=>{const st=Be.clientWidth,It=Be.clientHeight;st<=0||It<=0||gt(Rt=>(Rt==null?void 0:Rt.width)===st&&(Rt==null?void 0:Rt.height)===It?Rt:{width:st,height:It})};Ze();const wt=new ResizeObserver(Ze);return wt.observe(Be),()=>wt.disconnect()},[So.length]);const nt=on.filter(Be=>vn(Be)).length,Ct=lo.filter(Be=>dt(Be)).length,Ut=Xn.filter(Be=>dt(Be)).length,an=y.useCallback((Be,Ze)=>{Be.stopPropagation();const wt=Ze.commit.id;if(Be.shiftKey?(Os(hn=>hn.includes(wt)?hn.filter(cn=>cn!==wt):[...hn,wt]),js(wt)):(Os(hn=>hn.includes(wt)?[]:[wt]),js(hn=>hn===wt?null:wt)),!(Be.metaKey||Be.ctrlKey||Be.detail>=2)||wt==="WORKING_TREE")return;const It=wt.length>=40?wt.slice(0,7):wt;let Rt=null;if(Ze.commit.branchName?(Rt=Cs(Ze.commit.branchName,wt,It),Rt||(Rt=Qn(Ze.commit.branchName))):Rt=Mo(wt,It),Rt&&le){le(Rt.path);return}h==null||h({commitSha:wt})},[Mo,Cs,Qn,h,le]),fn=y.useCallback(async()=>{if(!ue)return;await ue(bt)&&(rt(!1),Bt(""))},[ue,bt]),_n=y.useCallback(async()=>{$&&(await $({branchNames:[],discardUncommittedChanges:Nn,stashIndices:uo}),P(!1),Os([]),js(null))},[$,Nn,uo]),at=y.useCallback(async()=>{const Be=xe.trim();if(Be){if(Ye==="new-root"){if(!A)return;await A(Be)}else{if(!je||Gn.length!==1)return;const Ze=Gn[0];if(!(Ze==="WORKING_TREE"||Ze.startsWith("STASH:")))return;await je(Ze,Be)}se(!1),He(""),Me("from-selected-node"),Os([]),js(null)}},[Ye,xe,je,A,Gn]),ls=Gn.length===1&&(Gn[0]==="WORKING_TREE"||Gn[0].startsWith("STASH:")),To=!!A;return y.useEffect(()=>{if(ee){if(!ls&&To){Me("new-root");return}ls&&Me("from-selected-node")}},[To,ee,ls]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border border-border bg-card",children:[l.jsx(mw,{isOpen:qe,onToggle:()=>_t(Be=>!Be),onClose:()=>_t(!1),visibleBounds:Et,renderedNodeCount:nt,totalNodeCount:on.length,renderedMergeConnectorCount:Ct,totalMergeConnectorCount:lo.length,renderedConnectorCount:Ut,totalConnectorCount:Xn.length,mapGridCullViewportInsetScreenPx:Jv,debugRows:Tn.debugRows,branchDebugRows:Tn.branchDebugRows,connectorDecisions:Ro}),So.length===0?l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center py-20",children:l.jsx("div",{className:"rounded-xl border border-border/50 bg-muted/30 px-4 py-3",children:l.jsx("p",{className:"text-sm text-muted-foreground",children:"No commits to render"})})}):l.jsx(fw,{scrollContainerRef:Pe,mapPadHostRef:Ke,transformLayerRef:Ie,isMarqueeSelecting:qo,contentWidth:No,contentHeight:Zs,isCameraMoving:Ft,onWheel:Mn,onMouseDown:kn,labelTopPx:Co,inverseZoomStyle:Lo,displayZoom:Us,iconScaleStyle:qn,selectedVisibleCommitShas:Gn,normalizedSearchQuery:bs,matchingNodeIds:ro,focusedNode:Ws,renderNodes:on,shouldRenderNode:vn,manuallyOpenedClumps:We,manuallyClosedClumps:vt,defaultCollapsedClumps:vs,leadByClusterKey:zn,clusterKeyByCommitId:io,clusterCounts:Rs,commitIdsWithRenderedAncestry:Fo,nodeWarnings:Bo,connectorParentShas:mo,branchStartShas:ws,branchOffNodeShas:Bs,crossBranchOutgoingShas:Cn,branchBaseCommitByName:_i,branchStartAccentClass:ko,connectorParentAccentClass:gi,commitCornerRadiusPx:rs,lineStrokeWidth:po,pointFormatter:as,connectors:Xn,mergeConnectors:lo,cullConnectorPath:dt,flushCameraReactTick:ns,setManuallyOpenedClumps:Pt,setManuallyClosedClumps:Gt,onCommitCardClick:an,unpushedCommitShasSetByBranch:Di,checkedOutHeadSha:tn}),Oo&&qo?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:Oo.left,top:Oo.top,width:Oo.width,height:Oo.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(hw,{selectedVisibleCommitShas:Gn,commitInProgress:L,commitDisabled:ne,stageInProgress:he,stashInProgress:Ae,stashDisabled:J,pushInProgress:D,deleteInProgress:F,createBranchFromNodeInProgress:te,onCommitLocalChanges:ue,onStageAllChanges:U?()=>void U():void 0,onStashLocalChanges:Se,onPushCurrentBranch:z,onPushAllBranches:M,onPushCommitTargets:R,onDeleteSelection:$,onCreateBranchFromNode:je,onMergeRefsIntoBranch:j,selectedPushTargets:Es,selectedPushLabel:Q,canPushCurrentBranch:T,pushCurrentBranchLabel:X,pushableRemoteBranchCount:v,deletableSelectionCount:I,canCreateRootBranch:To,selectedCommitTargetOption:_o,mergeInProgress:k,mergeTargetCommitSha:jo,setMergeTargetCommitSha:js,worktrees:V,currentRepoPath:H,worktreeMenuOpen:ut,setWorktreeMenuOpen:ot,onSwitchToWorktree:le,onRemoveWorktree:K,removeWorktreeInProgress:re,setCommitDialogOpen:rt,setDeleteConfirmOpen:P,setNewBranchDialogOpen:se}),l.jsx(pw,{commitDialogOpen:it,commitMessageDraft:bt,onCommitMessageDraftChange:Bt,onCommitDialogClose:()=>rt(!1),onCommitConfirm:()=>void fn(),commitInProgress:L,deleteConfirmOpen:Ve,deleteSelectionItems:oe,onDeleteConfirmClose:()=>P(!1),onDeleteConfirm:()=>void _n(),deleteInProgress:F,deletableSelectionCount:I,newBranchDialogOpen:ee,newBranchName:xe,newBranchCreateMode:Ye,onNewBranchNameChange:He,onNewBranchCreateModeChange:Me,onNewBranchDialogClose:()=>se(!1),onNewBranchConfirm:()=>void at(),selectedCommitCanCreateBranch:ls,createBranchFromNodeInProgress:te})]})}function xw({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g={},branchCommitPreviews:_={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:S="",gridSearchJumpToken:C=0,gridFocusSha:j=null,onGridSearchResultCountChange:k,onGridSearchFocusChange:M,view:z="time",isLoading:R=!1,scrollRequest:D,focusedErrorBranch:$,checkedOutRef:F=null,mapTopInsetPx:V=0,onMergeRefsIntoBranch:H,mergeInProgress:K=!1,onPushAllBranches:re,onPushCurrentBranch:le,onPushCommitTargets:Se,pushInProgress:Ae=!1,onDeleteSelection:J,deleteInProgress:ue=!1,worktrees:L=[],currentRepoPath:ne,onRemoveWorktree:U,removeWorktreeInProgress:he=!1,onSwitchToWorktree:je,onStashLocalChanges:A,stashInProgress:te=!1,stashDisabled:q=!1,onCommitLocalChanges:fe,commitInProgress:Te=!1,commitDisabled:Ne=!1,onStageAllChanges:ve,stageInProgress:tt=!1,onCreateBranchFromNode:Ge,onCreateRootBranch:ze,createBranchFromNodeInProgress:ct=!1,onMoveNodeBackToBranch:et,orientation:zt="horizontal",onInteractionChange:Mt,manuallyOpenedClumps:xt,manuallyClosedClumps:Qt,setManuallyOpenedClumps:Oe,setManuallyClosedClumps:ae,layoutModel:Pe}){const Ke=new Set(u.map(rt=>rt.branchName)),Ie=14*864e5,ut=Date.now();function ot(rt){return Ke.has(rt.name)||ut-new Date(rt.lastCommitDate).getTime()<=Ie}const it=t.filter(rt=>rt.status==="stale"&&ot(rt)).sort((rt,bt)=>new Date(bt.lastCommitDate).getTime()-new Date(rt.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:z==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(jy,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:S,gridSearchJumpToken:C,gridFocusSha:j,onGridSearchResultCountChange:k,onGridSearchFocusChange:M,staleBranches:it,isLoading:R,scrollRequest:D,focusedErrorBranch:$,checkedOutRef:F,mapTopInsetPx:V,onMergeRefsIntoBranch:H,mergeInProgress:K,onPushAllBranches:re,onPushCurrentBranch:le,onPushCommitTargets:Se,pushInProgress:Ae,onDeleteSelection:J,deleteInProgress:ue,worktrees:L,currentRepoPath:ne,onRemoveWorktree:U,removeWorktreeInProgress:he,onSwitchToWorktree:je,onStashLocalChanges:A,stashInProgress:te,stashDisabled:q,onCommitLocalChanges:fe,commitInProgress:Te,commitDisabled:Ne,onStageAllChanges:ve,stageInProgress:tt,onCreateBranchFromNode:Ge,onCreateRootBranch:ze,createBranchFromNodeInProgress:ct,onMoveNodeBackToBranch:et,orientation:zt,onInteractionChange:Mt,manuallyOpenedClumps:xt,manuallyClosedClumps:Qt,setManuallyOpenedClumps:Oe,setManuallyClosedClumps:ae,layoutModel:Pe})}):z==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(jy,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:S,gridSearchJumpToken:C,gridFocusSha:j,checkedOutRef:F,onGridSearchResultCountChange:k,onGridSearchFocusChange:M,onInteractionChange:Mt,manuallyOpenedClumps:xt,manuallyClosedClumps:Qt,setManuallyOpenedClumps:Oe,setManuallyClosedClumps:ae,layoutModel:Pe,orientation:zt})}):null})}const _r=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function bw(t,n,i,a){if(!t)return null;const c=d=>_r(d,t);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(g=>c(g.fullSha)||c(g.sha)))return d;return null}function vw(t,n,i,a,c,u){var le,Se,Ae,J,ue,L;const d=t.baseSha,h=`STASH:${t.index}`,p=`Stash ${t.index+1}`,g=(Se=(le=i[0])==null?void 0:le.fullSha)!=null?Se:null,_=[{name:u,headSha:g!=null?g:"",isDefault:!0},...n.map(ne=>({name:ne.name,headSha:ne.headSha,isDefault:!1}))],x=d?_.filter(ne=>_r(ne.headSha,d)):[],b=bw(d,i,a,u),S=b?_.find(ne=>ne.name===b):void 0,C=(J=(Ae=x.find(ne=>ne.isDefault))!=null?Ae:x[0])!=null?J:S,j=!!(C&&d&&_r(C.headSha,d)),k=C&&!C.isDefault?n.find(ne=>ne.name===C.name):void 0,M=(()=>{var U;if(!d)return null;const ne=i.find(he=>_r(he.fullSha,d)||_r(he.sha,d));if(ne!=null&&ne.date)return ne.date;if(k){const he=((U=a[k.name])!=null?U:[]).find(je=>_r(je.fullSha,d)||_r(je.sha,d));if(he!=null&&he.date)return he.date}return null})(),z=M?new Date(M).getTime():Number.NaN,R=Date.now(),D=Number.isFinite(z)?Math.max(R,z+1+t.index):R+t.index,$=new Date(D).toISOString(),F=t.message.trim(),V={fullSha:h,sha:p,parentSha:d,message:F||p,author:"You",date:$,kind:"stash"},H={fullSha:h,sha:p,parentSha:d,childShas:[],branch:(ue=k==null?void 0:k.name)!=null?ue:u,message:F||p,author:"You",date:$,kind:"stash"};if(j&&(C!=null&&C.isDefault))return{branches:n,branchCommitPreviews:a,branchUniqueAheadCounts:c,directCommits:[...i,H]};if(j&&k)return{branches:n.map(U=>U.name===k.name?{...U,commitsAhead:U.commitsAhead+1,unpushedCommits:U.unpushedCommits+1,lastCommitDate:$,headSha:h}:U),directCommits:i,branchCommitPreviews:{...a,[k.name]:[V,...a[k.name]||[]]},branchUniqueAheadCounts:{...c,[k.name]:Math.max(0,(L=Object.prototype.hasOwnProperty.call(c,k.name)?c[k.name]:k.commitsAhead)!=null?L:0)+1}};const K=`*Stash:${t.index}`;return{branches:[{name:K,commitsAhead:1,commitsBehind:0,lastCommitDate:$,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:h,divergedFromSha:d!=null?d:void 0,parentBranch:(C==null?void 0:C.name)||u},...n],directCommits:i,branchCommitPreviews:{...a,[K]:[V]},branchUniqueAheadCounts:{...c,[K]:1}}}function Ix(t,n,i,a,c,u){const d=[...t].sort((p,g)=>p.index-g.index);let h={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const p of d)h=vw(p,h.branches,h.directCommits,h.branchCommitPreviews,h.branchUniqueAheadCounts,u);return h}function ww({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:g,manuallyOpenedClumps:_=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:S=null,orientation:C="horizontal"}){var V,H,K,re;const j=Ix(g,t,i,u,h,c);let k=j.branches,M=j.directCommits,z=j.branchCommitPreviews,R=j.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const le=p.headSha||p.parentSha||null,Se=(H=(V=M[0])==null?void 0:V.fullSha)!=null?H:null,Ae=(ve,tt)=>!ve||!tt?!1:ve===tt||ve.startsWith(tt)||tt.startsWith(ve),J=[{name:c,headSha:Se!=null?Se:"",isDefault:!0},...k.map(ve=>({name:ve.name,headSha:ve.headSha,isDefault:!1}))],ue=p.branchName?J.find(ve=>ve.name===p.branchName):void 0,L=le?J.filter(ve=>Ae(ve.headSha,le)):[],ne=(K=ue!=null?ue:L.find(ve=>ve.isDefault))!=null?K:L[0],U=!!(ne&&le&&Ae(ne.headSha,le)),he=ne&&!ne.isDefault?k.find(ve=>ve.name===ne.name):void 0,je=(()=>{var tt;if(!le)return null;const ve=M.find(Ge=>Ae(Ge.fullSha,le)||Ae(Ge.sha,le));if(ve!=null&&ve.date)return ve.date;if(he){const Ge=((tt=z[he.name])!=null?tt:[]).find(ze=>Ae(ze.fullSha,le)||Ae(ze.sha,le));if(Ge!=null&&Ge.date)return Ge.date}return null})(),A=je?new Date(je).getTime():Number.NaN,te=Date.now(),q=Number.isFinite(A)?Math.max(te,A+1):te,fe=new Date(q).toISOString(),Te={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:le,message:"Local uncommitted changes",author:"You",date:fe,kind:"uncommitted"},Ne={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:le,childShas:[],branch:c,message:"Local uncommitted changes",author:"You",date:fe,kind:"uncommitted"};if(U&&(ne!=null&&ne.isDefault))M=[...M,Ne];else if(U&&he)k=k.map(ve=>ve.name===he.name?{...ve,commitsAhead:ve.commitsAhead+1,unpushedCommits:ve.unpushedCommits+1,lastCommitDate:fe,headSha:"WORKING_TREE"}:ve),z={...z,[he.name]:[Te,...z[he.name]||[]]},R={...R,[he.name]:Math.max(0,(re=Object.prototype.hasOwnProperty.call(R,he.name)?R[he.name]:he.commitsAhead)!=null?re:0)+1};else{const ve={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:fe,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:le!=null?le:void 0,parentBranch:(ne==null?void 0:ne.name)||p.branchName||c};k=[ve,...k],z={...z,[ve.name]:[Te]},R={...R,[ve.name]:1}}}const D={...d};D[c]=null;const $=dp(k,c,z,D),F=Sd({lanes:$,branches:k,mergeNodes:n,directCommits:M,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:z,branchParentByName:D,branchUniqueAheadCounts:R,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:S,checkedOutRef:p,orientation:C});return{enrichedBranches:k,enrichedBranchCommitPreviews:z,enrichedBranchUniqueAheadCounts:R,enrichedDirectCommits:M,sharedGridLayoutModel:F}}function My(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const g=(u=a.get(h))!=null?u:[];g.push(d.name),a.set(h,g)}const c=(d,h)=>{var _,x,b,S;const p=new Date((x=(_=i.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((S=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?S:0).getTime();return p-g};for(const[d,h]of a.entries())h.sort(c);return a}function Ty(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var _,x,b,S;const p=new Date((x=(_=a.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((S=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?S:0).getTime();return p-g},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function Ey(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const g of d){const _=[...h,g];if(g===i.branchName){for(const x of _)c.add(x);return!0}if(u((p=n.get(g))!=null?p:[],_))return!0}return!1};return u(t,[]),c}function Dm({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:_,showCommits:x,getMergeTargetLabels:b,sourceBranchName:S,clusterKeyByCommitId:C,isGridClusterOpen:j,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:z}){var A,te;if(_.has(t)||!a.get(t))return null;const D=(A=u.get(t))!=null?A:[],$=D.length>0,F=y.useMemo(()=>{var q;return[...(q=c[t])!=null?q:[]]},[c,t]),V=x&&F.length>0,H=x,K=$||V,re=h.has(t),le=H?F:[],Se=re&&le.length>0,Ae=g===t,J=new Set(_);J.add(t);const ue="top-[-0.2rem] h-4.5 w-[10px]",L="rounded-bl-[7px]",ne="left-[0.65rem]",U=new Map,he=[];for(const q of D){const fe=d.get(q);if(fe){const Te=le.findIndex(Ne=>pi(Ne.fullSha,fe)||pi(Ne.sha,fe));if(Te>=0){const Ne=(te=U.get(Te))!=null?te:[];Ne.push(q),U.set(Te,Ne);continue}}he.push(q)}const je=y.useMemo(()=>{if(!x||le.length===0)return[];const q=[];let fe=[],Te=null;const Ne=()=>{if(fe.length===0)return;const ve=fe[fe.length-1],tt=`sidebar-single-${t}-${ve.fullSha}`;q.push({key:Te!=null?Te:tt,commits:fe,count:fe.length,lead:ve}),fe=[],Te=null};return le.forEach(ve=>{var Ge;const tt=(Ge=C.get(`${t}:${ve.fullSha}`))!=null?Ge:null;if(fe.length===0){fe=[ve],Te=tt;return}if(tt===Te){fe.push(ve);return}Ne(),fe=[ve],Te=tt}),Ne(),q},[t,x,le,C]);return l.jsxs("li",{className:Hs("relative",n>0?"pl-4":"pl-0",n===0&&!i?re?"mb-5":"mb-1":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:Hs("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",L,ne,ue)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:Hs("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.5rem]",ne)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("button",{type:"button",onClick:()=>{K&&p(t),z==null||z(t)},className:Hs("group flex min-w-0 flex-1 items-center gap-2 rounded-md px-2 py-1 text-left text-sm transition-colors hover:bg-accent",Ae?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[K?l.jsx("span",{className:Hs("inline-block text-[10px] text-muted-foreground transition-transform",re?"rotate-90":""),children:"▶"}):null,l.jsx("span",{className:"min-w-0 break-words",children:l.jsx("span",{className:Hs(Ae?"font-medium text-foreground":"font-normal"),children:t})})]})}),Se?l.jsx("ul",{className:"relative space-y-1 pl-4",children:je.map(q=>{const fe=q.count>1&&!j(q.key);return(fe?[q.lead]:q.commits).map(Ne=>{var Ge;const ve=le.findIndex(ze=>ze.fullSha===Ne.fullSha),tt=b(Ne.fullSha,S!=null?S:t);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>M==null?void 0:M(Ne.fullSha),className:"min-w-0 flex-1 rounded-md px-2 py-1 text-left text-xs leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:Ne.message,children:[l.jsx("span",{className:"block truncate",children:Ne.message}),tt.length>0?l.jsx("span",{className:"mt-0 block space-y-0.5",children:tt.map(ze=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:ze})]},`${Ne.fullSha}:${ze}`))}):null]}),q.count>1&&Ne.fullSha===q.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${q.lead.fullSha}`,onClick:()=>k(q.key,`${t}:${q.lead.fullSha}`),className:Hs("shrink-0 rounded-md px-2 py-1 text-left text-xs leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",fe?"":"min-w-[2ch] text-center"),children:fe?`+${Math.max(1,q.count-1)}`:"−"}):null]}),(Ge=U.get(ve))!=null&&Ge.length?l.jsx("ul",{className:"relative mb-1.75 space-y-0",children:U.get(ve).map((ze,ct,et)=>l.jsx(Dm,{branchName:ze,depth:n+1,isLast:ct===et.length-1&&he.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:J,showCommits:x,getMergeTargetLabels:b,sourceBranchName:ze,clusterKeyByCommitId:C,isGridClusterOpen:j,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:z},ze))}):null]},`${t}:${Ne.fullSha}`)})})}):null,$&&re&&he.length>0?l.jsx("ul",{className:"relative mb-1.75 space-y-1.75",children:he.map((q,fe)=>l.jsx(Dm,{branchName:q,depth:n+1,isLast:fe===he.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:J,showCommits:x,getMergeTargetLabels:b,sourceBranchName:q,clusterKeyByCommitId:C,isGridClusterOpen:j,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:z},q))}):null]})}function Sw({projects:t,activeProjectPath:n,onSelectProject:i,onAddProject:a,projectLoading:c=!1,projectError:u=null,branches:d,defaultBranch:h,checkedOutRef:p,manuallyOpenedClumps:g,manuallyClosedClumps:_,setManuallyOpenedClumps:x,setManuallyClosedClumps:b,gridLayoutModel:S,onSelectCommit:C,onSelectBranch:j,className:k}){var Ge;const M=y.useRef(null),z=y.useRef(null),[R,D]=y.useState(!1),[$,F]=y.useState(()=>new Set),[V,H]=y.useState(()=>new Set),[K,re]=y.useState(()=>new Set),le=g!=null?g:V,Se=_!=null?_:K,Ae=x!=null?x:H,J=b!=null?b:re,[ue,L]=y.useState(null),[ne,U]=y.useState(null),he=y.useMemo(()=>d.some(ct=>ct.name===h)?d:[{name:h,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...d],[d,h]),je=y.useMemo(()=>My(he,h),[he,h]),A=y.useMemo(()=>Ty(he,h,je),[he,h,je]),[te,q]=y.useState(()=>Ey(A,je,p,h));y.useEffect(()=>{q(ze=>{const ct=Ey(A,je,p,h),et=new Set(ze);for(const zt of ct)et.add(zt);return et})},[A,je,p,h]);const fe=(Ge=S==null?void 0:S.defaultCollapsedClumps)!=null?Ge:new Set,Te=ze=>le.has(ze)||!fe.has(ze)&&!Se.has(ze),Ne=(ze,ct)=>{const et=M.current,zt=z.current;if(et&&zt){const Mt=`[data-clump-toggle-id="${ct}"]`,xt=et.querySelector(Mt);if(xt){const Qt=xt.getBoundingClientRect().top-zt.getBoundingClientRect().top;U({id:ct,topWithinScrollBody:Qt})}else U(null)}else U(null);L(ct),Ae(Mt=>{const xt=new Set(Mt),Qt=Te(ze);return J(Oe=>{const ae=new Set(Oe);return Qt?(xt.delete(ze),ae.add(ze)):(ae.delete(ze),xt.add(ze)),ae}),xt})};y.useLayoutEffect(()=>{if(!ue)return;const ze=M.current,ct=z.current;if(!ze||!ct)return;const et=`[data-clump-toggle-id="${ue}"]`,zt=ze.querySelector(et);if(zt){if((ne==null?void 0:ne.id)===ue){const xt=zt.getBoundingClientRect().top-ct.getBoundingClientRect().top-ne.topWithinScrollBody;Number.isFinite(xt)&&xt!==0&&(ct.scrollTop+=xt)}zt.focus({preventScroll:!0}),L(null),U(null)}},[le,Se,ue,ne]);const ve=ze=>{q(ct=>{const et=new Set(ct);return et.has(ze)?et.delete(ze):et.add(ze),et})};y.useEffect(()=>{F(ze=>{const ct=new Set(ze);for(const et of t)ct.add(et.path);return n&&ct.add(n),ct})},[n,t]);const tt=y.useMemo(()=>{var ct,et,zt,Mt,xt,Qt,Oe,ae,Pe,Ke;const ze=new Map;for(const Ie of t){const ut=Ie.path===n,ot=ww({branches:Ie.branches,mergeNodes:Ie.mergeNodes,directCommits:Ie.directCommits,unpushedDirectCommits:Ie.unpushedDirectCommits,defaultBranch:Ie.defaultBranch,branchCommitPreviews:Ie.branchCommitPreviews,branchUniqueAheadCounts:Ie.branchUniqueAheadCounts,checkedOutRef:Ie.checkedOutRef,stashes:Ie.stashes,manuallyOpenedClumps:ut?le:new Set,manuallyClosedClumps:ut?Se:new Set}),it=ot.enrichedBranches.some(Ue=>Ue.name===Ie.defaultBranch)?ot.enrichedBranches:[{name:Ie.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...ot.enrichedBranches],rt=new Map(ot.sharedGridLayoutModel.nodes.map(Ue=>[Ue.commit.visualId,Ue.row])),bt={};for(const Ue of ot.sharedGridLayoutModel.allCommits){const Nt=(ct=bt[Ue.branchName])!=null?ct:[];Nt.push({fullSha:Ue.id,sha:Ue.id.slice(0,7),parentSha:(et=Ue.parentSha)!=null?et:null,message:Ue.message,author:Ue.author,date:Ue.date,kind:(zt=Ue.kind)!=null?zt:"commit"}),bt[Ue.branchName]=Nt}for(const Ue of Object.keys(bt))bt[Ue]=bt[Ue].sort((Nt,ft)=>{var qe,_t;const We=(qe=rt.get(`${Ue}:${Nt.fullSha}`))!=null?qe:Number.MAX_SAFE_INTEGER,vt=(_t=rt.get(`${Ue}:${ft.fullSha}`))!=null?_t:Number.MAX_SAFE_INTEGER;if(We!==vt)return We-vt;const Pt=new Date(Nt.date).getTime(),Gt=new Date(ft.date).getTime();return Pt!==Gt?Pt-Gt:Nt.fullSha.localeCompare(ft.fullSha)});const Bt=(Mt=ot.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?Mt:new Map,Ve=(Ue,Nt)=>{const ft=Bt.get(Nt);if(!ft)return[];for(const[We,vt]of ft.entries())if(pi(Ue,We))return Array.from(vt).sort();return[]},P=My(it,Ie.defaultBranch),ee=Ty(it,Ie.defaultBranch,P),se=new Map(it.map(Ue=>[Ue.name,Ue])),xe=new Map;for(const Ue of it){const Nt=(Qt=(xt=ot.sharedGridLayoutModel.firstBranchCommitByName.get(Ue.name))==null?void 0:xt.parentSha)!=null?Qt:null,ft=Nt!=null?Nt:null;xe.set(Ue.name,ft)}const He=(Oe=ot.sharedGridLayoutModel.defaultCollapsedClumps)!=null?Oe:new Set,Ye=ut?le:new Set,Me=ut?Se:new Set,yt=Ue=>Ye.has(Ue)||!He.has(Ue)&&!Me.has(Ue);ze.set(Ie.path,{rootBranchNames:ee,branchByName:se,branchCommitPreviewsFromLayout:bt,childNamesByParent:P,branchAnchorShaByName:xe,checkedOutBranchName:(Pe=(ae=Ie.checkedOutRef)==null?void 0:ae.branchName)!=null?Pe:null,clusterKeyByCommitId:(Ke=ot.sharedGridLayoutModel.clusterKeyByCommitId)!=null?Ke:new Map,getMergeTargetLabels:Ve,isGridClusterOpen:yt})}return ze},[n,Se,le,t]);return l.jsx("aside",{ref:M,"aria-label":"Dense branch sidebar",className:Hs("pointer-events-auto h-full",k),children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[l.jsxs("div",{className:"mb-2 flex items-center justify-between gap-3 px-5",children:[l.jsx("h2",{className:"text-sm font-medium text-foreground",children:"Projects"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("button",{type:"button",onClick:a,disabled:c,className:"shrink-0 rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Add repo"}),l.jsx("button",{type:"button",onClick:()=>D(ze=>!ze),className:"shrink-0 rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:R?"Hide commits":"Show commits"})]})]}),u&&l.jsx("div",{className:"px-5 pb-3",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:u})}),l.jsx("div",{ref:z,className:"mb-3 min-h-0 flex-1 space-y-2 overflow-y-auto px-5",children:t.map(ze=>{var Qt,Oe;const ct=ze.path===n,et=$.has(ze.path)||ct,zt=(Qt=ze.treeLoaded)!=null?Qt:ze.branches.length>0,Mt=tt.get(ze.path),xt=ct?te:new Set(Mt?Array.from(Mt.branchByName.keys()):[]);return l.jsxs("div",{className:"rounded-xl border border-border/50 bg-card",children:[l.jsxs("button",{type:"button",onClick:()=>{i(ze.path)},className:Hs("flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors",ct?"bg-primary/10 text-foreground":"hover:bg-accent"),children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("p",{className:"truncate text-sm font-medium",children:ze.name}),l.jsx("p",{className:"truncate text-xs text-muted-foreground",children:ze.path})]}),l.jsx("span",{className:"shrink-0 text-xs text-muted-foreground",children:(Oe=ze.branchName)!=null?Oe:"branch"})]}),et&&l.jsx("div",{className:"border-t border-border/50 px-3 py-3",children:zt&&Mt?l.jsx("ul",{className:"space-y-1",children:Mt.rootBranchNames.map((ae,Pe)=>l.jsx(Dm,{branchName:ae,depth:0,isLast:Pe===Mt.rootBranchNames.length-1,branchByName:Mt.branchByName,branchCommitPreviews:Mt.branchCommitPreviewsFromLayout,childNamesByParent:Mt.childNamesByParent,branchAnchorShaByName:Mt.branchAnchorShaByName,expandedBranchNames:xt,onToggleBranch:ve,checkedOutBranchName:Mt.checkedOutBranchName,ancestors:new Set,showCommits:R,getMergeTargetLabels:Mt.getMergeTargetLabels,sourceBranchName:ae,clusterKeyByCommitId:Mt.clusterKeyByCommitId,isGridClusterOpen:Mt.isGridClusterOpen,onToggleGridCluster:Ne,onSelectCommit:async Ke=>{ct||await i(ze.path),C==null||C(Ke)},onSelectBranch:async Ke=>{ct||await i(ze.path),j==null||j(Ke)}},`${ze.path}:${ae}`))}):l.jsx("p",{className:"px-2 py-1 text-xs text-muted-foreground",children:"Loading branch tree..."})})]},ze.path)})})]})})}const Cw="git-visualizer",Ay="git-visualizer:projects",Dy=12,Ny=1400,kw=180;function tl(t){return t==="/"?t:t.replace(/\/+$/,"")}function Gh(...t){return t.filter(Boolean).join(" ")}function fd(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function jw(t){return fd(t)===Cw}function Mw(){var uo,Nn;const[t,n]=y.useState(null),[i,a]=y.useState(""),[c,u]=y.useState([]),[d,h]=y.useState({}),[p,g]=y.useState(!1),[_,x]=y.useState([]),[b,S]=y.useState([]),[C,j]=y.useState([]),[k,M]=y.useState([]),[z,R]=y.useState({}),[D,$]=y.useState([]),[F,V]=y.useState("main"),[H,K]=y.useState(null),[re,le]=y.useState([]),[Se,Ae]=y.useState(!1),[J,ue]=y.useState(""),[L,ne]=y.useState(0),[U,he]=y.useState(()=>new Set),[je,A]=y.useState(()=>new Set),[te,q]=y.useState(null),[fe,Te]=y.useState(null),[Ne,ve]=y.useState(!1),[tt,Ge]=y.useState(!1),[ze,ct]=y.useState(null),[et,zt]=y.useState(!1),[Mt,xt]=y.useState(!1),[Qt,Oe]=y.useState("active"),[ae,Pe]=y.useState(null),[Ke,Ie]=y.useState(null),[ut,ot]=y.useState(!1),[it,rt]=y.useState(null),[bt,Bt]=y.useState(!1),[Ve,P]=y.useState(null),[ee,se]=y.useState(null),[xe,He]=y.useState(!1),[Ye,Me]=y.useState(!1),[yt,Ue]=y.useState(!1),[Nt,ft]=y.useState(!1),[We,vt]=y.useState({}),[Pt,Gt]=y.useState({}),[qe,_t]=y.useState({}),[ht,$t]=y.useState({}),[ln,gt]=y.useState({}),[Ft,Ln]=y.useState([]),[os,xn]=y.useState(!1),[oo,is]=y.useState(!1),[ns,Kt]=y.useState(!1),[Mn,en]=y.useState(!1),[bn,Qe]=y.useState(!1),[Tn,So]=y.useState("horizontal"),io=y.useRef(null),zn=y.useRef(0),Rs=y.useRef(0),ao=y.useRef(null),ro=jw(t)||!0,bs=y.useRef(!1),gs=y.useRef(!1),vs=y.useRef(new Set),on=y.useRef([]),oi=y.useRef([]),No=y.useRef(null),Zs=y.useMemo(()=>c.map(I=>{var oe,v,T,X,Q,de,we,lt,pt,Et,dt,nt,Ct,Ut,an,fn,_n,at,ls,To,ai,Go,Js,$o,ri,En,Zn,eo;return{...I,...(oe=d[I.path])!=null?oe:{},branches:(T=(v=d[I.path])==null?void 0:v.branches)!=null?T:[],mergeNodes:(Q=(X=d[I.path])==null?void 0:X.mergeNodes)!=null?Q:[],directCommits:(we=(de=d[I.path])==null?void 0:de.directCommits)!=null?we:[],unpushedDirectCommits:(pt=(lt=d[I.path])==null?void 0:lt.unpushedDirectCommits)!=null?pt:[],unpushedCommitShasByBranch:(dt=(Et=d[I.path])==null?void 0:Et.unpushedCommitShasByBranch)!=null?dt:{},checkedOutRef:(Ct=(nt=d[I.path])==null?void 0:nt.checkedOutRef)!=null?Ct:null,worktrees:(an=(Ut=d[I.path])==null?void 0:Ut.worktrees)!=null?an:[],stashes:(_n=(fn=d[I.path])==null?void 0:fn.stashes)!=null?_n:[],branchCommitPreviews:(ls=(at=d[I.path])==null?void 0:at.branchCommitPreviews)!=null?ls:{},laneByBranch:(ai=(To=d[I.path])==null?void 0:To.laneByBranch)!=null?ai:{},branchUniqueAheadCounts:(Js=(Go=d[I.path])==null?void 0:Go.branchUniqueAheadCounts)!=null?Js:{},defaultBranch:(En=(ri=($o=d[I.path])==null?void 0:$o.defaultBranch)!=null?ri:I.branchName)!=null?En:"main",treeLoaded:(eo=(Zn=d[I.path])==null?void 0:Zn.loaded)!=null?eo:!1}}),[c,d]);y.useEffect(()=>{try{const I=localStorage.getItem(Ay);if(!I)return;const oe=JSON.parse(I);if(!Array.isArray(oe))return;const v=oe.filter(T=>typeof T=="object"&&T!==null&&typeof T.path=="string"&&typeof T.name=="string"&&typeof T.lastOpenedAt=="number");u(v.slice(0,Dy))}catch{u([])}},[]),y.useEffect(()=>{gs.current||t||c.length!==0&&(gs.current=!0,Vs(c[0].path))},[c,t]);const Xn=y.useMemo(()=>b.reduce((I,oe)=>(I[oe.targetCommitSha]=oe.targetBranch,I),{}),[b]);y.useEffect(()=>{t&&h(I=>{var oe,v;return{...I,[t]:{path:t,name:i||fd(t),branches:_,mergeNodes:b,directCommits:C,unpushedDirectCommits:k,mergeTargetBranchByCommitSha:b.reduce((T,X)=>(T[X.targetCommitSha]=X.targetBranch,T),{}),unpushedCommitShasByBranch:z,checkedOutRef:H,worktrees:re,stashes:Ft,branchCommitPreviews:Pt,branchParentByName:qe,laneByBranch:ht,branchUniqueAheadCounts:ln,defaultBranch:F,loaded:!0,cacheSchemaVersion:(v=(oe=I[t])==null?void 0:oe.cacheSchemaVersion)!=null?v:1,updatedAtMs:Date.now()}}})},[t,i,_,b,C,k,Xn,z,H,re,Ft,Pt,qe,ht,ln,F]);async function lo(I,oe=!1){var T;const v=tl(I);if(v&&!vs.current.has(v)&&!(!oe&&((T=d[v])!=null&&T.loaded))){vs.current.add(v),g(!0);try{const X=await be("get_repo_visual_snapshot",{repoPath:v,forceRefresh:oe});h(Q=>({...Q,[v]:X}))}finally{vs.current.delete(v),vs.current.size===0&&g(!1)}}}y.useEffect(()=>{c.length!==0&&c.forEach(I=>{lo(I.path),be("watch_repo",{repoPath:I.path}).catch(console.error)})},[c]),y.useEffect(()=>{let I=!1,oe=null;return hc("git-activity",v=>{if(I)return;const T=tl(v.payload.repoPath);!T||T===t||lo(T,!0)}).then(v=>{I?v():oe=v}).catch(console.error),()=>{I=!0,oe&&oe()}},[t]);function Ro(I){u(oe=>{const v=tl(I.path);if(!v)return oe;const T={...I,path:v},Q=(oe.some(de=>de.path===v)?oe.map(de=>de.path===v?T:de):[...oe,T]).slice(-Dy);try{localStorage.setItem(Ay,JSON.stringify(Q))}catch{}return Q})}async function Bo(I){const oe=tl(I);if(oe){ct(null);try{const[v,T]=await Promise.all([be("get_repo_info",{repoPath:oe}),be("get_default_branch",{repoPath:oe}).catch(()=>"main")]);Ro({path:oe,name:v.name,lastOpenedAt:Date.now(),branchName:T}),await lo(oe,!0)}catch(v){ct(v instanceof Error?v.message:String(v))}}}function Fo(I){if(I.button!==0)return;const oe=I.target;if(oe!=null&&oe.closest(".window-no-drag"))return;const v=Mm();be("start_window_drag").catch(()=>v.startDragging()).catch(T=>{console.warn("Failed to start window drag:",T)})}async function mo(I,oe){const T=[];let X=0;for(;;){const Q=await be("get_merge_nodes",{repoPath:I,branch:oe,page:X,perPage:100});if(T.push(...Q.nodes),!Q.hasMore||Q.nodes.length===0)break;X+=1}return T}async function ws(I,oe,v){const T=Array.from(new Set([v,...oe.map(de=>de.name)].filter(de=>!!de)));if(T.length===0)return[];const X=await Promise.all(T.map(de=>mo(I,de).catch(()=>[]))),Q=new Map;for(const de of X)for(const we of de){const lt=`${we.targetCommitSha}:${we.targetBranch}`;Q.has(lt)||Q.set(lt,we)}return Array.from(Q.values())}const Bs=I=>I.map(oe=>`${oe.name}|${oe.headSha}|${oe.commitsAhead}|${oe.commitsBehind}|${oe.unpushedCommits}|${oe.remoteSyncStatus}`).join("||"),Cn=I=>I.map(oe=>oe.fullSha).join("|"),_i=I=>{var oe,v;return I?`${(oe=I.branchName)!=null?oe:""}|${I.headSha}|${(v=I.parentSha)!=null?v:""}|${I.hasUncommittedChanges?1:0}`:"__none__"};async function as(I,oe){const v=oe!=null?oe:F,[T,X,Q,de,we,lt]=await Promise.all([be("get_branches",{repoPath:I}),be("get_all_repo_commits",{repoPath:I}),be("get_unpushed_direct_commits",{repoPath:I,branch:v}).catch(()=>[]),be("get_checked_out_ref",{repoPath:I}).catch(()=>null),be("list_worktrees",{repoPath:I}).catch(()=>[]),be("list_stashes",{repoPath:I}).catch(()=>[])]),pt=await ws(I,T,v),Et=await Promise.all([v,...T.map(dt=>dt.name)].map(async dt=>{const nt=await be("get_branch_unpushed_commit_shas",{repoPath:I,branch:dt}).catch(()=>[]);return[dt,nt]}));x(T),S(pt),j(X),M(Q),R(Object.fromEntries(Et)),K(de),le(we),Ln(lt)}async function ii(I){const[oe,v,T]=await Promise.all([be("get_branches",{repoPath:I}).catch(()=>[]),be("get_all_repo_commits",{repoPath:I}).catch(()=>[]),be("get_checked_out_ref",{repoPath:I}).catch(()=>null)]);return Bs(oe)!==Bs(on.current)||Cn(v)!==Cn(oi.current)||_i(T)!==_i(No.current)}async function Us(I){se(null),Ge(!0);try{const[oe,v]=await Promise.all([be("get_repo_info",{repoPath:I}),be("get_default_branch",{repoPath:I})]);a(oe.name),V(v),n(I),await as(I,v),vn(I),se({kind:"success",message:`Now targeting worktree at ${I}`})}catch(oe){const v=oe instanceof Error?oe.message:String(oe);se({kind:"error",message:v}),console.error("Failed to switch worktree:",v)}finally{Ge(!1)}}async function Lo(I,oe){if(!(!t||Se)){Ae(!0),se(null);try{await be("remove_worktree",{repoPath:t,worktreePath:I,force:oe}),await as(t),se({kind:"success",message:`Removed worktree at ${I}`})}catch(v){const T=v instanceof Error?v.message:String(v);se({kind:"error",message:T}),console.error("Failed to remove worktree:",T)}finally{Ae(!1)}}}function Co(I,oe){var v,T;a(oe.name||fd(I)),V(oe.defaultBranch||"main"),x(oe.branches),S(oe.mergeNodes),j(oe.directCommits),M(oe.unpushedDirectCommits),R(oe.unpushedCommitShasByBranch),K(oe.checkedOutRef),le(oe.worktrees),Ln(oe.stashes),Gt(oe.branchCommitPreviews),_t((v=oe.branchParentByName)!=null?v:{}),$t((T=oe.laneByBranch)!=null?T:{}),gt(oe.branchUniqueAheadCounts),n(I)}async function Ss(I,oe,v){const T=v==null?void 0:v.forceRefresh,X=v==null?void 0:v.applyToActiveState;try{const[Q,de]=await Promise.all([be("get_repo_info",{repoPath:I}),be("get_default_branch",{repoPath:I})]);if(oe!==zn.current)return;const we=await be("get_repo_visual_snapshot",{repoPath:I,forceRefresh:T});if(oe!==zn.current)return;h(lt=>({...lt,[I]:we})),X&&(t===I||zn.current),vn(I)}catch(Q){if(oe!==zn.current)return;console.error("Background snapshot refresh failed:",Q)}}async function Vs(I){const oe=++zn.current,v=tl(I);if(!v)return;const T=d[v];if(T!=null&&T.loaded){ct(null),Co(v,T),Ro({path:v,name:T.name||fd(v),lastOpenedAt:Date.now(),branchName:T.defaultBranch}),Ge(!1),ve(!1),Ss(v,oe,{forceRefresh:!1,applyToActiveState:!1});return}if(ve(!0),Ge(!0),ct(null),await new Promise(X=>setTimeout(X,15)),oe===zn.current)try{const[X,Q]=await Promise.all([be("get_repo_info",{repoPath:v}),be("get_default_branch",{repoPath:v})]);if(oe!==zn.current)return;a(X.name),V(Q);const de=await be("get_repo_visual_snapshot",{repoPath:v,forceRefresh:!0});if(oe!==zn.current)return;h(we=>({...we,[v]:de})),Co(v,de),Ro({path:v,name:X.name,lastOpenedAt:Date.now(),branchName:Q}),Ge(!1),ve(!1),vn(v)}catch(X){if(oe!==zn.current)return;console.error("Failed to load repo:",X),ct(X instanceof Error?X.message:String(X)),n(null),ve(!1),Ge(!1)}}async function vn(I){const oe=++Rs.current;try{if(oe!==Rs.current)return;ot(!1),P(null);const v=await be("get_github_info",{repoPath:I}),T=await be("get_github_auth_status");if(oe!==Rs.current||(rt(T),!T.ghAvailable||!T.authenticated))return;const X=await be("get_open_prs",{owner:v.owner,repo:v.repo});if(oe!==Rs.current)return;$(X),ot(!0)}catch(v){if(oe!==Rs.current)return;console.log("GitHub data not available:",v),P(v instanceof Error?v.message:String(v)),ot(!1)}}y.useEffect(()=>{let I=null,oe=!1;const v=(()=>{try{return Mm().label}catch{return null}})(),T=async Q=>{var we;const de=(we=Q==null?void 0:Q.path)==null?void 0:we.trim();!de||oe||t!==de&&await Vs(de)};return(async()=>{v==="main"&&(I=await hc("gitviz://open-repo",async de=>{await T(de.payload)}));const Q=await be("take_pending_open_repo");await T(Q)})(),()=>{oe=!0,I&&I()}},[t]),y.useEffect(()=>{on.current=_},[_]),y.useEffect(()=>{oi.current=C},[C]),y.useEffect(()=>{No.current=H},[H]),y.useEffect(()=>{bs.current=bn},[bn]),y.useEffect(()=>{},[t,F,ro]),y.useEffect(()=>{if(!t||!F||!ro)return;be("watch_repo",{repoPath:t}).catch(console.error);let I=!1,oe=!1,v=!1,T=null;const X=async()=>{if(!I){if(bs.current){oe=!0;return}if(v){oe=!0;return}v=!0;try{if(!await ii(t)||I)return;await as(t,F)}catch(de){console.warn("Frozen git-activity refresh failed:",de)}finally{v=!1,oe&&!I&&(oe=!1,window.setTimeout(()=>{X()},0))}}},Q=()=>{oe=!0,X()};return hc("git-activity",de=>{tl(de.payload.repoPath)===t&&(lo(t,!0),Q())}).then(de=>{I?de():T=de}).catch(console.error),()=>{I=!0,T&&T()}},[t,F,ro]);async function po(){if(t){Bt(!0),P(null);try{await be("authenticate_github");const I=await be("get_github_auth_status");rt(I),I.authenticated?await vn(t):I.message&&P(I.message)}catch(I){P(I instanceof Error?I.message:String(I))}finally{Bt(!1)}}}const rs=new Set(D.map(I=>I.branchName)),qn=14*864e5,gi=Date.now(),ko=_.filter(I=>I.status==="stale"),Xo=ko.filter(I=>rs.has(I.name)||gi-new Date(I.lastCommitDate).getTime()<=qn),Xt=ko.filter(I=>!rs.has(I.name)&&gi-new Date(I.lastCommitDate).getTime()>qn),Di=I=>{var oe;return Object.prototype.hasOwnProperty.call(ln,I.name)?Math.max(0,(oe=ln[I.name])!=null?oe:0):Math.max(0,I.commitsAhead)};y.useEffect(()=>{vt({}),ao.current=null,Bt(!1),rt(null),P(null),$([]),se(null)},[t]),y.useEffect(()=>{var lt,pt,Et,dt;if(!t||!F){vt({}),Gt({}),_t({}),$t({}),gt({}),ao.current=null;return}const I=_.map(nt=>{var Ct;return`${nt.name}:${nt.headSha}:${(Ct=nt.parentBranch)!=null?Ct:""}:${nt.commitsAhead}`}).join("|"),oe=b.map(nt=>{var Ct,Ut;return`${nt.fullSha}:${(Ut=(Ct=nt.parentShas)==null?void 0:Ct[1])!=null?Ut:""}`}).join("|"),v=`${t}|${F}|${I}|${oe}`;if(ao.current===v)return;ao.current=v;const T={},X={};for(const nt of _){if(nt.name===F)continue;const Ct=C.filter(Ut=>Ut.branch===nt.name).map(Ut=>{var an;return{fullSha:Ut.fullSha,sha:Ut.sha,parentSha:(an=Ut.parentSha)!=null?an:null,message:Ut.message,author:Ut.author,date:Ut.date,kind:"commit"}});T[nt.name]=Ct,X[nt.name]=Ct.length}const Q=new Map;for(const nt of C)Q.set(nt.fullSha,nt.branch);const de=nt=>{if(!nt)return null;const Ct=Q.get(nt);if(Ct)return Ct;for(const[Ut,an]of Q.entries())if(Ut.startsWith(nt)||nt.startsWith(Ut))return an;return null},we={[F]:null};for(const nt of _){if(nt.name===F){we[nt.name]=null;continue}const Ct=C.filter(_n=>_n.branch===nt.name),Ut=new Set(Ct.map(_n=>_n.fullSha)),an=(pt=(lt=Ct.filter(_n=>{var ls;const at=(ls=_n.parentSha)!=null?ls:null;return!at||!Ut.has(at)}).sort((_n,at)=>{const ls=new Date(_n.date).getTime()-new Date(at.date).getTime();return ls!==0?ls:_n.fullSha.localeCompare(at.fullSha)})[0])==null?void 0:lt.parentSha)!=null?pt:null,fn=de(an);we[nt.name]=(dt=(Et=fn!=null?fn:qe[nt.name])!=null?Et:nt.parentBranch)!=null?dt:null}vt({}),Gt(T),_t(we),$t(nt=>{const Ct={};for(const Ut of _){const an=nt[Ut.name];an!=null&&Number.isFinite(an)&&(Ct[Ut.name]=an)}return Ct}),gt(X)},[t,F,_,b,C,qe]),y.useEffect(()=>{if(!ee){He(!1);return}He(!0);const I=window.setTimeout(()=>{He(!1)},Ny),oe=window.setTimeout(()=>{se(null)},Ny+kw);return()=>{window.clearTimeout(I),window.clearTimeout(oe)}},[ee]),y.useEffect(()=>{if(!t||_.length===0)return;const I=T=>new Promise(X=>setTimeout(X,T));async function oe(){const X=`${await be("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${X}`),await I(800),await be("screenshot",{path:`${X}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${X}`)}const v=T=>{(T.metaKey||T.ctrlKey)&&T.shiftKey&&T.key==="S"&&(T.preventDefault(),oe())};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[t,i,_]);function Ls(){xt(!0),setTimeout(()=>{zt(!1),xt(!1),Oe("active"),Ie(null)},100)}async function qo(I){if(!t)return;se(null);const oe=/^STASH:(\d+)$/.exec(I.commitSha);if(oe){try{const v=parseInt(oe[1],10),T=await be("apply_stash_restore",{repoPath:t,stashIndex:v});K(T),await as(t);const X=`Stash ${v+1}`,Q=T.branchName?` on branch ${T.branchName}`:" at the stash base (detached HEAD)";se({kind:"success",message:`Restored ${X}${Q}; stash applied and dropped (uncommitted changes).`})}catch(v){const T=v instanceof Error?v.message:String(v);se({kind:"error",message:T}),console.error("Failed to apply stash:",T)}return}if(I.branchName){const v=(X,Q)=>{const de=X.replace(/\\/g,"/").replace(/\/+$/,""),we=Q.replace(/\\/g,"/").replace(/\/+$/,"");return de===we||de.toLowerCase()===we.toLowerCase()},T=re.find(X=>X.pathExists===!1||X.isCurrent||t&&v(X.path,t)?!1:X.branchName===I.branchName);if(T){await Us(T.path);return}}try{let v="";(await be("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await be("stash_push",{repoPath:t,includeUntracked:!0}),v="Stashed local changes (including untracked), then ",await as(t));const X=I.branchName?await be("checkout_branch",{repoPath:t,branchName:I.branchName}):await be("checkout_ref",{repoPath:t,refName:I.commitSha}),Q=await be("get_checked_out_ref",{repoPath:t}).catch(()=>X);K(Q),await as(t);const de=Q.branchName?Q.branchName:`${Q.headSha.slice(0,7)} (detached)`;se({kind:"success",message:`${v}Checked out ${de}`})}catch(v){const T=v instanceof Error?v.message:String(v);se({kind:"error",message:T}),console.error("Failed to checkout commit:",T)}}async function Oo(){if(!(!t||os)){se(null),xn(!0);try{if(!(await be("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){se({kind:"error",message:"No local changes to stash."});return}await be("stash_push",{repoPath:t,includeUntracked:!0}),await as(t),se({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(I){const oe=I instanceof Error?I.message:String(I);se({kind:"error",message:oe}),console.error("Failed to stash:",oe)}finally{xn(!1)}}}async function zo(I){if(!t||oo)return!1;const oe=I.trim();if(!oe)return se({kind:"error",message:"Enter a commit message."}),!1;se(null),is(!0);try{if(!(await be("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return se({kind:"error",message:"No local changes to commit."}),!1;const T=await be("commit_working_tree",{repoPath:t,message:oe});return K(T),await as(t),se({kind:"success",message:"Committed local changes."}),!0}catch(v){const T=v instanceof Error?v.message:String(v);return se({kind:"error",message:T}),console.error("Failed to commit:",T),!1}finally{is(!1)}}async function Os(){if(!t||ns)return!1;se(null),Kt(!0);try{if(!(await be("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return se({kind:"error",message:"No local changes to stage."}),!1;const oe=await be("stage_working_tree",{repoPath:t});return K(oe),await as(t),se({kind:"success",message:"Staged all changes."}),!0}catch(I){const oe=I instanceof Error?I.message:String(I);return se({kind:"error",message:oe}),console.error("Failed to stage:",oe),!1}finally{Kt(!1)}}async function jo(I,oe){if(!(!t||Mn)){en(!0),se(null);try{const v=/^STASH:(\d+)$/.exec(I);let T;if(v){const X=parseInt(v[1],10);T=await be("move_stash_to_new_branch",{repoPath:t,stashIndex:X,branchName:oe})}else T=await be("create_branch_from_uncommitted",{repoPath:t,branchName:oe});K(T),await as(t),se({kind:"success",message:`Moved to new branch "${oe}"`})}catch(v){const T=v instanceof Error?v.message:String(v);se({kind:"error",message:T}),console.error("Failed to create branch from node:",T)}finally{en(!1)}}}async function js(I){if(!(!t||Mn)){en(!0),se(null);try{const oe=await be("create_root_branch",{repoPath:t,branchName:I});K(oe),await as(t),se({kind:"success",message:`Created new root branch "${I}"`})}catch(oe){const v=oe instanceof Error?oe.message:String(oe);se({kind:"error",message:v}),console.error("Failed to create root branch:",v)}finally{en(!1)}}}async function kn(I,oe){if(!t)return;const v=Array.from(new Set(I.filter(T=>!!T&&T!==oe)));if(v.length!==0){se(null),Me(!0);try{let T=null;for(const X of v)T=await be("merge_ref_into_branch",{repoPath:t,sourceRef:X,targetBranch:oe});await as(t),T&&K(T),se({kind:"success",message:v.length===1?`Merged ${v[0].slice(0,7)} into ${oe}`:`Merged ${v.length} commits into ${oe}`})}catch(T){const X=T instanceof Error?T.message:String(T);se({kind:"error",message:X}),console.error("Failed to merge refs into branch:",X)}finally{Me(!1)}}}async function co(){if(!(!t||yt)){se(null),Ue(!0);try{const I=await be("push_all_unpushed_branches",{repoPath:t});await as(t),se({kind:"success",message:I.length>0?I.length===1?`Pushed ${I[0].branchName}`:`Pushed ${I.length} branches`:"Everything local is already pushed."})}catch(I){const oe=I instanceof Error?I.message:String(I);se({kind:"error",message:oe}),console.error("Failed to push all branches:",oe)}finally{Ue(!1)}}}async function Gn(){if(!(!t||yt)){se(null),Ue(!0);try{const I=await be("push_current_branch",{repoPath:t});await as(t),se({kind:"success",message:`Pushed ${I.branchName}`})}catch(I){const oe=I instanceof Error?I.message:String(I);se({kind:"error",message:oe}),console.error("Failed to push current branch:",oe)}finally{Ue(!1)}}}async function ys(I){var v;if(!t||yt)return;const oe=Array.from(new Map(I.filter(T=>T.branchName&&T.targetSha).map(T=>[T.branchName,T])).values());if(oe.length!==0){se(null),Ue(!0);try{for(const T of oe)await be("push_branch",{repoPath:t,branchName:T.branchName,targetSha:T.targetSha});await as(t),se({kind:"success",message:oe.length===1?`Pushed ${oe[0].branchName} through ${(v=oe[0].targetSha)==null?void 0:v.slice(0,7)}`:`Pushed ${oe.length} selected commit ranges`})}catch(T){const X=T instanceof Error?T.message:String(T);se({kind:"error",message:X}),console.error("Failed to push selected commits:",X)}finally{Ue(!1)}}}async function Kn(I){var Q;if(!t||Nt)return;const oe=Array.from(new Set(I.branchNames.filter(de=>de&&de!==F))),v=!!I.discardUncommittedChanges,T=(Q=I.stashIndices)!=null?Q:[],X=Array.from(new Set(T)).sort((de,we)=>we-de);if(!(oe.length===0&&!v&&X.length===0)){se(null),ft(!0);try{for(const lt of X)await be("stash_drop",{repoPath:t,stashIndex:lt});const de=oe.length>0||v?await be("delete_selected_elements",{repoPath:t,branchNames:oe,discardUncommittedChanges:v}):{deletedBranches:[],discardedUncommittedChanges:!1};await as(t);const we=[];X.length>0&&we.push(X.length===1?`removed stash ${X[0]+1}`:`removed ${X.length} stashes`),de.discardedUncommittedChanges&&we.push("discarded local uncommitted changes"),de.deletedBranches.length>0&&we.push(de.deletedBranches.length===1?`deleted ${de.deletedBranches[0]}`:`deleted ${de.deletedBranches.length} branches`),se({kind:"success",message:we.length>0?we.join(" and "):"Nothing to delete."})}catch(de){const we=de instanceof Error?de.message:String(de);se({kind:"error",message:we}),console.error("Failed to delete selected elements:",we)}finally{ft(!1)}}}function tn(I){Ie(I),Pe(oe=>{var v;return{branch:I,seq:((v=oe==null?void 0:oe.seq)!=null?v:0)+1}})}function Ys(I){I&&(Te(I),ne(oe=>oe+1))}function Ws(I){I&&(ue(I),ne(oe=>oe+1))}y.useEffect(()=>{var v;const I=H!=null&&H.hasUncommittedChanges?"WORKING_TREE":(v=H==null?void 0:H.headSha)!=null?v:null;if(!I)return;const oe=`${t!=null?t:"__no-repo__"}|${Tn}|${I}`;io.current!==oe&&(io.current=oe,Te(I),ne(T=>T+1))},[H==null?void 0:H.hasUncommittedChanges,H==null?void 0:H.headSha,Tn,t]),y.useEffect(()=>{io.current=null},[t]);const{enrichedBranches:Cs,enrichedBranchCommitPreviews:Qn,enrichedBranchUniqueAheadCounts:Mo,enrichedDirectCommits:Ms}=y.useMemo(()=>{var Go,Js,$o,ri;const I=Ix(Ft,_,C,Pt,ln,F);let oe=I.branches,v=I.directCommits,T=I.branchCommitPreviews,X=I.branchUniqueAheadCounts;if(!(H!=null&&H.hasUncommittedChanges))return{enrichedBranches:oe,enrichedDirectCommits:v,enrichedBranchCommitPreviews:T,enrichedBranchUniqueAheadCounts:X};const Q=H.headSha||H.parentSha||null,de=(Js=(Go=v[0])==null?void 0:Go.fullSha)!=null?Js:null,we=(En,Zn)=>!En||!Zn?!1:En===Zn||En.startsWith(Zn)||Zn.startsWith(En),lt=[{name:F,headSha:de!=null?de:"",isDefault:!0},...oe.map(En=>({name:En.name,headSha:En.headSha,isDefault:!1}))],pt=H.branchName?lt.find(En=>En.name===H.branchName):void 0,Et=Q?lt.filter(En=>we(En.headSha,Q)):[],dt=($o=pt!=null?pt:Et.find(En=>En.isDefault))!=null?$o:Et[0],nt=!!(dt&&Q&&we(dt.headSha,Q)),Ct=dt&&!dt.isDefault?oe.find(En=>En.name===dt.name):void 0,Ut=(()=>{var Zn;if(!Q)return null;const En=v.find(eo=>we(eo.fullSha,Q)||we(eo.sha,Q));if(En!=null&&En.date)return En.date;if(Ct){const eo=((Zn=T[Ct.name])!=null?Zn:[]).find(Vi=>we(Vi.fullSha,Q)||we(Vi.sha,Q));if(eo!=null&&eo.date)return eo.date}return null})(),an=Ut?new Date(Ut).getTime():Number.NaN,fn=Date.now(),_n=Number.isFinite(an)?Math.max(fn,an+1):fn,at=new Date(_n).toISOString(),ls={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:Q,message:"Local uncommitted changes",author:"You",date:at,kind:"uncommitted"},To={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:Q,childShas:[],branch:F,message:"Local uncommitted changes",author:"You",date:at,kind:"uncommitted"};if(nt&&(dt!=null&&dt.isDefault))return{enrichedBranches:oe,enrichedBranchCommitPreviews:T,enrichedBranchUniqueAheadCounts:X,enrichedDirectCommits:[...v,To]};if(nt&&Ct)return{enrichedBranches:oe.map(Zn=>Zn.name===Ct.name?{...Zn,commitsAhead:Zn.commitsAhead+1,unpushedCommits:Zn.unpushedCommits+1,lastCommitDate:at,headSha:"WORKING_TREE"}:Zn),enrichedDirectCommits:v,enrichedBranchCommitPreviews:{...T,[Ct.name]:[ls,...T[Ct.name]||[]]},enrichedBranchUniqueAheadCounts:{...X,[Ct.name]:Math.max(0,(ri=Object.prototype.hasOwnProperty.call(X,Ct.name)?X[Ct.name]:Ct.commitsAhead)!=null?ri:0)+1}};const ai={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:at,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:Q!=null?Q:void 0,parentBranch:(dt==null?void 0:dt.name)||H.branchName||F};return{enrichedBranches:[ai,...oe],enrichedBranchCommitPreviews:{...T,[ai.name]:[ls]},enrichedBranchUniqueAheadCounts:{...X,[ai.name]:1},enrichedDirectCommits:v}},[_,Pt,ln,H,F,C,Ft]),_o=y.useMemo(()=>{const I={...qe};return I[F]=null,I},[qe,F,Cs]),Ts=y.useMemo(()=>{var I;return(I=Wv(Cs,F,_o,ht))!=null?I:dp(Cs,F,Qn,_o)},[Cs,F,Qn,_o,ht]),Es=y.useMemo(()=>Sd({lanes:Ts,branches:Cs,mergeNodes:b,directCommits:Ms,unpushedDirectCommits:k,defaultBranch:F,branchCommitPreviews:Qn,branchParentByName:_o,branchUniqueAheadCounts:Mo,manuallyOpenedClumps:U,manuallyClosedClumps:je,isDebugOpen:!1,gridSearchQuery:J,gridFocusSha:fe,checkedOutRef:H!=null?H:null,orientation:Tn}),[Ts,Cs,b,Ms,k,F,Qn,_o,Mo,U,je,J,fe,(uo=H==null?void 0:H.headSha)!=null?uo:null,(Nn=H==null?void 0:H.branchName)!=null?Nn:null,Tn]);return l.jsxs("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"window-drag-region absolute left-0 right-0 top-0 z-[9999] h-12 px-4",style:{paddingTop:"max(env(safe-area-inset-top), 0px)"},onMouseDown:Fo}),l.jsx("div",{className:"relative z-10 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsx(Sw,{className:"min-h-0 w-[27rem] shrink-0 border-r border-border/50 pb-4 pt-16",projects:Zs,activeProjectPath:t,onSelectProject:Vs,onAddProject:()=>{(async()=>{var I,oe;try{const v=await Iv({directory:!0,multiple:!1,defaultPath:(oe=(I=c[0])==null?void 0:I.path)!=null?oe:void 0});typeof v=="string"&&v&&await Bo(v)}catch(v){ct(v instanceof Error?v.message:String(v))}})()},projectLoading:Ne||p,projectError:ze,branches:Cs,defaultBranch:F,checkedOutRef:H,manuallyOpenedClumps:U,manuallyClosedClumps:je,setManuallyOpenedClumps:he,setManuallyClosedClumps:A,gridLayoutModel:Es,onSelectCommit:Ys,onSelectBranch:Ws}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx(xw,{branches:Cs,mergeNodes:b,directCommits:Ms,unpushedDirectCommits:k,unpushedCommitShasByBranch:z,defaultBranch:F,branchCommitPreviews:Qn,branchParentByName:_o,branchUniqueAheadCounts:Mo,gridSearchQuery:J,gridSearchJumpToken:L,gridFocusSha:fe,onGridSearchResultCountChange:q,onGridSearchFocusChange:Te,checkedOutRef:H,onCommitClick:qo,onMergeRefsIntoBranch:kn,mergeInProgress:Ye,onPushAllBranches:co,onPushCurrentBranch:Gn,onPushCommitTargets:ys,pushInProgress:yt,onDeleteSelection:Kn,deleteInProgress:Nt,worktrees:re,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:Lo,removeWorktreeInProgress:Se,onSwitchToWorktree:Us,onStashLocalChanges:Oo,stashInProgress:os,stashDisabled:!1,onCommitLocalChanges:zo,commitInProgress:oo,commitDisabled:!1,onStageAllChanges:Os,stageInProgress:ns,onCreateBranchFromNode:jo,onCreateRootBranch:js,createBranchFromNodeInProgress:Mn,onInteractionChange:Qe,manuallyOpenedClumps:U,manuallyClosedClumps:je,setManuallyOpenedClumps:he,setManuallyClosedClumps:A,layoutModel:Es,orientation:Tn}),l.jsx("header",{"data-map-ui":!0,className:"absolute left-0 right-0 top-12 z-40 px-4 md:px-8",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto relative z-10 min-h-8 content-start flex flex-wrap items-center gap-2",children:[l.jsxs("div",{className:"flex shrink-0 rounded-full border border-border bg-muted/20 p-0.5 shadow-sm",role:"radiogroup","aria-label":"Commit map layout",children:[l.jsx("button",{type:"button",role:"radio","aria-checked":Tn==="horizontal",tabIndex:0,onClick:()=>So("horizontal"),onKeyDown:I=>{(I.key==="ArrowRight"||I.key==="ArrowDown")&&(I.preventDefault(),So("vertical"))},className:Gh("rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",Tn==="horizontal"?"border border-border/50 bg-card text-foreground shadow-sm":"text-muted-foreground hover:text-foreground"),children:"Horizontal"}),l.jsx("button",{type:"button",role:"radio","aria-checked":Tn==="vertical",tabIndex:0,onClick:()=>So("vertical"),onKeyDown:I=>{(I.key==="ArrowLeft"||I.key==="ArrowUp")&&(I.preventDefault(),So("horizontal"))},className:Gh("rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",Tn==="vertical"?"border border-border/50 bg-card text-foreground shadow-sm":"text-muted-foreground hover:text-foreground"),children:"Vertical"})]}),(it==null?void 0:it.ghAvailable)&&!it.authenticated&&l.jsx("button",{onClick:po,disabled:bt,className:"text-xs text-muted-foreground hover:text-foreground border border-border/50 rounded-full px-3 py-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:bt?"Connecting GitHub...":"Connect GitHub"}),it&&!it.ghAvailable&&l.jsx("span",{className:"text-xs text-muted-foreground border border-border/50 rounded-full px-3 py-1",children:"Install `gh` for private PR data"}),Ve&&l.jsx("span",{className:"text-xs text-muted-foreground max-w-64 truncate",title:Ve,children:Ve}),l.jsxs("div",{className:"window-no-drag flex min-w-56 flex-1 max-w-sm items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-sm",children:[l.jsx("span",{className:"text-[10px] uppercase tracking-wide text-muted-foreground font-medium shrink-0",children:"Search"}),l.jsx("input",{value:J,onChange:I=>ue(I.target.value),onKeyDown:I=>{I.key==="Enter"&&(I.preventDefault(),ne(oe=>oe+1))},placeholder:"sha, message, or branch",className:"w-full bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground/70"}),l.jsx("button",{type:"button",onClick:()=>ne(I=>I+1),className:"shrink-0 rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Jump"})]}),te!=null&&l.jsxs("span",{className:"text-xs text-muted-foreground",children:[te," match",te===1?"":"es"]}),fe&&l.jsxs("span",{className:"text-xs rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary",children:["Focused ",fe.slice(0,7)]}),ee&&l.jsx("span",{className:Gh("text-xs rounded-full px-3 py-1 max-w-[26rem] truncate transition-opacity duration-200",xe?"opacity-100":"opacity-0",ee.kind==="error"?"bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400":"bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"),title:ee.message,children:ee.message})]})})]}),et&&l.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl shadow-lg overflow-hidden ${Mt?"animate-error-panel-out":"animate-error-panel-in"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[l.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),l.jsx("button",{onClick:Ls,className:"text-muted-foreground hover:text-foreground transition-colors",children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[l.jsxs("button",{onClick:()=>Oe("active"),className:`text-xs font-medium transition-colors ${Qt==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[Xo.length," active"]}),l.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),l.jsxs("button",{onClick:()=>Oe("inactive"),className:`text-xs font-medium transition-colors ${Qt==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[Xt.length," inactive"]})]}),l.jsx("div",{className:"overflow-y-auto max-h-64",children:(Qt==="active"?Xo:Xt).map(I=>{const oe=(Ke==null?void 0:Ke.name)===I.name,v=Di(I);return l.jsxs("button",{onClick:()=>tn(I),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:`text-sm font-medium truncate ${oe?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:I.name}),l.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[v>0&&`${v} ahead`,v>0&&I.commitsBehind>0&&", ",I.commitsBehind>0&&`${I.commitsBehind} behind`]})]}),l.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},I.name)})})]})]})})]})}var Ec=Ex(),Tw=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,Ew={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=Tw}var ts=Ew,Aw=`.icon-transitions-module__iconState___uqK9J {
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
}`,Dw={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=Aw}var Wn=Dw,Nw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Rw=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Bw=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),Lw=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${Wn.iconState} ${n?Wn.hiddenScaled:Wn.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${Wn.iconState} ${n?Wn.visibleScaled:Wn.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Ow=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${Wn.iconStateFast} ${i?Wn.visibleScaled:u?Wn.sending:Wn.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${Wn.iconStateFast} ${a?Wn.visibleScaled:Wn.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${Wn.iconStateFast} ${c?Wn.visibleScaled:Wn.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},zw=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${Wn.iconFade} ${n?Wn.visible:Wn.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${Wn.iconFade} ${n?Wn.hidden:Wn.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),$w=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${Wn.iconFadeFast} ${n?Wn.hidden:Wn.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${Wn.iconFadeFast} ${n?Wn.visible:Wn.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),Iw=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),Pw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Px=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Hw=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),Uw=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Vw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),Yw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),Ww=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Fw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Xw=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Hx=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Kh=Hx.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Nm="feedback-freeze-styles",Qh="__agentation_freeze";function qw(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Qh]||(t[Qh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Qh]}var dn=qw();typeof window<"u"&&!dn.installed&&(dn.origSetTimeout=window.setTimeout.bind(window),dn.origSetInterval=window.setInterval.bind(window),dn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?dn.origSetTimeout(t,n):dn.origSetTimeout((...a)=>{dn.frozen?dn.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?dn.origSetInterval(t,n):dn.origSetInterval((...a)=>{dn.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>dn.origRAF(n=>{dn.frozen?dn.frozenRAFQueue.push(t):t(n)}),dn.installed=!0);var Vt=dn.origSetTimeout,Gw=dn.origSetInterval,al=dn.origRAF;function Kw(t){return t?Hx.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function Qw(){if(typeof document>"u"||dn.frozen)return;dn.frozen=!0,dn.frozenTimeoutQueue=[],dn.frozenRAFQueue=[];let t=document.getElementById(Nm);t||(t=document.createElement("style"),t.id=Nm),t.textContent=`
    *${Kh},
    *${Kh}::before,
    *${Kh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),dn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;Kw(i)||(n.pause(),dn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function Ry(){var i;if(typeof document>"u"||!dn.frozen)return;dn.frozen=!1;const t=dn.frozenTimeoutQueue;dn.frozenTimeoutQueue=[];for(const a of t)dn.origSetTimeout(()=>{if(dn.frozen){dn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=dn.frozenRAFQueue;dn.frozenRAFQueue=[];for(const a of n)dn.origRAF(c=>{if(dn.frozen){dn.frozenRAFQueue.push(a);return}a(c)});for(const a of dn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}dn.pausedAnimations=[],(i=document.getElementById(Nm))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Zh(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var kd=y.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:g,style:_,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:S=!1,computedStyles:C},j){const[k,M]=y.useState(u),[z,R]=y.useState(!1),[D,$]=y.useState("initial"),[F,V]=y.useState(!1),[H,K]=y.useState(!1),re=y.useRef(null),le=y.useRef(null),Se=y.useRef(null),Ae=y.useRef(null);y.useEffect(()=>{b&&D!=="exit"&&$("exit")},[b,D]),y.useEffect(()=>{Vt(()=>{$("enter")},0);const he=Vt(()=>{$("entered")},200),je=Vt(()=>{const A=re.current;A&&(Zh(A),A.selectionStart=A.selectionEnd=A.value.length,A.scrollTop=A.scrollHeight)},50);return()=>{clearTimeout(he),clearTimeout(je),Se.current&&clearTimeout(Se.current),Ae.current&&clearTimeout(Ae.current)}},[]);const J=y.useCallback(()=>{Ae.current&&clearTimeout(Ae.current),R(!0),Ae.current=Vt(()=>{R(!1),Zh(re.current)},250)},[]);y.useImperativeHandle(j,()=>({shake:J}),[J]);const ue=y.useCallback(()=>{$("exit"),Se.current=Vt(()=>{p()},150)},[p]),L=y.useCallback(()=>{k.trim()&&h(k.trim())},[k,h]),ne=y.useCallback(he=>{he.stopPropagation(),!he.nativeEvent.isComposing&&(he.key==="Enter"&&!he.shiftKey&&(he.preventDefault(),L()),he.key==="Escape"&&ue())},[L,ue]),U=[ts.popup,S?ts.light:"",D==="enter"?ts.enter:"",D==="entered"?ts.entered:"",D==="exit"?ts.exit:"",z?ts.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:le,className:U,"data-annotation-popup":!0,style:_,onClick:he=>he.stopPropagation(),children:[l.jsxs("div",{className:ts.header,children:[C&&Object.keys(C).length>0?l.jsxs("button",{className:ts.headerToggle,onClick:()=>{const he=H;K(!H),he&&Vt(()=>Zh(re.current),0)},type:"button",children:[l.jsx("svg",{className:`${ts.chevron} ${H?ts.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:ts.element,children:n})]}):l.jsx("span",{className:ts.element,children:n}),i&&l.jsx("span",{className:ts.timestamp,children:i})]}),C&&Object.keys(C).length>0&&l.jsx("div",{className:`${ts.stylesWrapper} ${H?ts.expanded:""}`,children:l.jsx("div",{className:ts.stylesInner,children:l.jsx("div",{className:ts.stylesBlock,children:Object.entries(C).map(([he,je])=>l.jsxs("div",{className:ts.styleLine,children:[l.jsx("span",{className:ts.styleProperty,children:he.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:ts.styleValue,children:je}),";"]},he))})})}),a&&l.jsxs("div",{className:ts.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:re,className:ts.textarea,style:{borderColor:F?x:void 0},placeholder:c,value:k,onChange:he=>M(he.target.value),onFocus:()=>V(!0),onBlur:()=>V(!1),rows:2,onKeyDown:ne}),l.jsxs("div",{className:ts.actions,children:[g&&l.jsx("div",{className:ts.deleteWrapper,children:l.jsx("button",{className:ts.deleteButton,onClick:g,type:"button",children:l.jsx(Ww,{size:22})})}),l.jsx("button",{className:ts.cancel,onClick:ue,children:"Cancel"}),l.jsx("button",{className:ts.submit,style:{backgroundColor:x,opacity:k.trim()?1:.4},onClick:L,disabled:!k.trim(),children:d})]})]})}),Zw=({content:t,children:n,...i})=>{const[a,c]=y.useState(!1),[u,d]=y.useState(!1),[h,p]=y.useState({top:0,right:0}),g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=()=>{if(g.current){const j=g.current.getBoundingClientRect();p({top:j.top+j.height/2,right:window.innerWidth-j.left+8})}},S=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),_.current=Vt(()=>{c(!0)},500)},C=()=>{_.current&&(clearTimeout(_.current),_.current=null),c(!1),x.current=Vt(()=>{d(!1)},150)};return y.useEffect(()=>()=>{_.current&&clearTimeout(_.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:g,onMouseEnter:S,onMouseLeave:C,...i,children:n}),u&&Ec.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},Jw=`.styles-module__tooltip___mcXL2 {
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
}`,eS={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=Jw}var By=eS,xr=({content:t})=>l.jsx(Zw,{className:By.tooltip,content:t,children:l.jsx(Bw,{className:By.tooltipIcon})}),St={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Ux=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...St.navigation},{type:"header",label:"Header",...St.header},{type:"hero",label:"Hero",...St.hero},{type:"section",label:"Section",...St.section},{type:"sidebar",label:"Sidebar",...St.sidebar},{type:"footer",label:"Footer",...St.footer},{type:"modal",label:"Modal",...St.modal},{type:"banner",label:"Banner",...St.banner},{type:"drawer",label:"Drawer",...St.drawer},{type:"popover",label:"Popover",...St.popover},{type:"divider",label:"Divider",...St.divider}]},{section:"Content",items:[{type:"card",label:"Card",...St.card},{type:"text",label:"Text",...St.text},{type:"image",label:"Image",...St.image},{type:"video",label:"Video",...St.video},{type:"table",label:"Table",...St.table},{type:"grid",label:"Grid",...St.grid},{type:"list",label:"List",...St.list},{type:"chart",label:"Chart",...St.chart},{type:"codeBlock",label:"Code Block",...St.codeBlock},{type:"map",label:"Map",...St.map},{type:"timeline",label:"Timeline",...St.timeline},{type:"calendar",label:"Calendar",...St.calendar},{type:"accordion",label:"Accordion",...St.accordion},{type:"carousel",label:"Carousel",...St.carousel},{type:"logo",label:"Logo",...St.logo},{type:"faq",label:"FAQ",...St.faq},{type:"gallery",label:"Gallery",...St.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...St.button},{type:"input",label:"Input",...St.input},{type:"search",label:"Search",...St.search},{type:"form",label:"Form",...St.form},{type:"tabs",label:"Tabs",...St.tabs},{type:"dropdown",label:"Dropdown",...St.dropdown},{type:"toggle",label:"Toggle",...St.toggle},{type:"stepper",label:"Stepper",...St.stepper},{type:"rating",label:"Rating",...St.rating},{type:"fileUpload",label:"File Upload",...St.fileUpload},{type:"checkbox",label:"Checkbox",...St.checkbox},{type:"radio",label:"Radio",...St.radio},{type:"slider",label:"Slider",...St.slider},{type:"datePicker",label:"Date Picker",...St.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...St.avatar},{type:"badge",label:"Badge",...St.badge},{type:"tag",label:"Tag",...St.tag},{type:"breadcrumb",label:"Breadcrumb",...St.breadcrumb},{type:"pagination",label:"Pagination",...St.pagination},{type:"progress",label:"Progress",...St.progress},{type:"alert",label:"Alert",...St.alert},{type:"toast",label:"Toast",...St.toast},{type:"notification",label:"Notification",...St.notification},{type:"tooltip",label:"Tooltip",...St.tooltip},{type:"stat",label:"Stat",...St.stat},{type:"skeleton",label:"Skeleton",...St.skeleton},{type:"chip",label:"Chip",...St.chip},{type:"icon",label:"Icon",...St.icon},{type:"spinner",label:"Spinner",...St.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...St.pricing},{type:"testimonial",label:"Testimonial",...St.testimonial},{type:"cta",label:"CTA",...St.cta},{type:"productCard",label:"Product Card",...St.productCard},{type:"profile",label:"Profile",...St.profile},{type:"feature",label:"Feature",...St.feature},{type:"team",label:"Team",...St.team},{type:"login",label:"Login",...St.login},{type:"contact",label:"Contact",...St.contact}]}],Hi={};for(const t of Ux)for(const n of t.items)Hi[n.type]=n;function Le({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Pn({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function Wo({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function tS({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx(Pn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(Le,{w:t*.06}),l.jsx(Le,{w:t*.07}),l.jsx(Le,{w:t*.05}),l.jsx(Le,{w:t*.06})]}),l.jsx(Pn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function nS({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Le,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Le,{w:t*.6}),l.jsx(Le,{w:t*.4}),l.jsx(Pn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function sS({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Le,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Pn,{w:10,h:10,radius:2}),l.jsx(Le,{w:t*(.4+c*17%30/100)})]},c))]})}function oS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Le,{w:"60%",h:3,strong:!0}),l.jsx(Le,{w:"80%",h:2}),l.jsx(Le,{w:"70%",h:2}),l.jsx(Le,{w:"60%",h:2})]},c))})}function iS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Le,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Le,{w:"90%"}),l.jsx(Le,{w:"70%"}),l.jsx(Le,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(Pn,{w:70,h:26,radius:4}),l.jsx(Pn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function aS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Le,{w:"70%",h:4,strong:!0}),l.jsx(Le,{w:"95%",h:2}),l.jsx(Le,{w:"85%",h:2}),l.jsx(Le,{w:"50%",h:2})]})]})}function rS({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Le,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Le,{w:`${70+u*13%25}%`,h:2},u))]})}function lS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function cS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Le,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Le,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function uS({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(Wo,{size:8}),l.jsx(Le,{w:`${55+c*17%35}%`,h:2})]},c))})}function dS({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Le,{w:Math.max(20,t*.5),h:3,strong:!0})})}function fS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Le,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Le,{w:"40%",h:2})})]})}function hS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Le,{w:60+c*17%30,h:2}),l.jsx(Pn,{w:"100%",h:28,radius:4})]},c)),l.jsx(Pn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function mS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Le,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Le,{w:"80%",h:2}),l.jsx(Le,{w:"65%",h:2}),l.jsx(Le,{w:"75%",h:2})]})]})}function pS({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function _S({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Le,{w:Math.max(16,t*.5),h:2,strong:!0})})}function gS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Le,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Le,{w:t*.35})]})}function yS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(Le,{w:t*.3,h:4,strong:!0}),l.jsx(Le,{w:t*.7}),l.jsx(Le,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx(Pn,{w:"33%",h:"100%",radius:4}),l.jsx(Pn,{w:"33%",h:"100%",radius:4}),l.jsx(Pn,{w:"33%",h:"100%",radius:4})]})]})}function xS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(Pn,{w:"100%",h:"100%",radius:4},u))})}function bS({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Le,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Le,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function vS({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function wS({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(Wo,{size:Math.min(14,n*.4)}),l.jsx(Le,{w:"50%",h:2})]})}function SS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Wo,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:"60%",h:3,strong:!0}),l.jsx(Le,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function CS({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function kS({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(Pn,{w:a,h:`${d}%`,radius:2},u)})})}function jS({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(Pn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function MS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Le,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function TS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Le,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function ES({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(Pn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function AS({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function DS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Le,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function NS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Pn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(Wo,{size:5}),l.jsx(Wo,{size:5}),l.jsx(Wo,{size:5})]})]})}function RS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Le,{w:t*.4,h:3,strong:!0}),l.jsx(Le,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(Wo,{size:5}),l.jsx(Le,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(Pn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function BS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Le,{w:"90%",h:2}),l.jsx(Le,{w:"75%",h:2}),l.jsx(Le,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Wo,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Le,{w:60,h:3,strong:!0}),l.jsx(Le,{w:40,h:2})]})]})]})}function LS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Le,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Le,{w:t*.35}),l.jsx(Pn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function OS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:"40%",h:3,strong:!0}),l.jsx(Le,{w:"70%",h:2})]})]})}function zS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Le,{w:t*.4,h:3,strong:!0}),l.jsx(Pn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function $S({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Le,{w:t*.5,h:2}),l.jsx(Le,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Le,{w:t*.3,h:2})]})}function IS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function PS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Le,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function HS({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function US({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function VS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(Wo,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Le,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function YS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Le,{w:t*.4,h:2}),l.jsx(Le,{w:t*.25,h:2})]})}function WS({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(Wo,{size:6}),l.jsx(Wo,{size:6}),l.jsx(Wo,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Le,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function FS({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Le,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Le,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function XS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Wo,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:"50%",h:3,strong:!0}),l.jsx(Le,{w:"75%",h:2})]}),l.jsx(Le,{w:30,h:2})]})}function qS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Le,{w:"65%",h:4,strong:!0}),l.jsx(Le,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Le,{w:"30%",h:5,strong:!0}),l.jsx(Pn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function GS({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Wo,{size:i}),l.jsx(Le,{w:t*.45,h:4,strong:!0}),l.jsx(Le,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Le,{w:20,h:3,strong:!0}),l.jsx(Le,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Le,{w:20,h:3,strong:!0}),l.jsx(Le,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Le,{w:20,h:3,strong:!0}),l.jsx(Le,{w:28,h:2})]})]})]})}function KS({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Le,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Le,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function QS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Le,{w:"70%",h:3,strong:!0}),l.jsx(Le,{w:"90%",h:2}),l.jsx(Le,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function ZS({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx(Pn,{w:i,h:i,radius:i*.25}),l.jsx(Le,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function JS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Le,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function e4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function t4({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function n4({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function s4({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function o4({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Le,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Le,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function i4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function a4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Le,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function r4({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function l4({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function c4({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx(Pn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Le,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Le,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function u4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Le,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(Wo,{size:a}),l.jsx(Le,{w:t*.12,h:3,strong:!0}),l.jsx(Le,{w:t*.08,h:2})]},u))})]})}function d4({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(Le,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Le,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:Math.min(60,t*.2),h:2}),l.jsx(Pn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(Pn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Le,{w:t*.4,h:2})]})}function f4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(Le,{w:t*.4,h:4,strong:!0}),l.jsx(Le,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:50,h:2}),l.jsx(Pn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:40,h:2}),l.jsx(Pn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:50,h:2}),l.jsx(Pn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Le,{w:60,h:2}),l.jsx(Pn,{w:"100%",h:"100%",radius:4})]}),l.jsx(Pn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var h4={navigation:tS,hero:nS,sidebar:sS,footer:oS,modal:iS,card:aS,text:rS,image:lS,table:cS,list:uS,button:dS,input:fS,form:hS,tabs:mS,avatar:pS,badge:_S,header:gS,section:yS,grid:xS,dropdown:bS,toggle:vS,search:wS,toast:SS,progress:CS,chart:kS,video:jS,tooltip:MS,breadcrumb:TS,pagination:ES,divider:AS,accordion:DS,carousel:NS,pricing:RS,testimonial:BS,cta:LS,alert:OS,banner:zS,stat:$S,stepper:IS,tag:PS,rating:HS,map:US,timeline:VS,fileUpload:YS,codeBlock:WS,calendar:FS,notification:XS,productCard:qS,profile:GS,drawer:KS,popover:QS,logo:ZS,faq:JS,gallery:e4,checkbox:t4,radio:n4,slider:s4,datePicker:o4,skeleton:i4,chip:a4,icon:r4,spinner:l4,feature:c4,team:u4,login:d4,contact:f4};function m4({type:t,width:n,height:i,text:a}){const c=h4[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var p4=`svg[fill=none] {
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
}`,_4={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=p4}var Ee=_4,nl=24,Wu=5;function Ly(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,g=t.x+t.width/2,_=t.y,x=t.y+t.height,b=t.y+t.height/2,S=!a,C=S?[h,p,g]:[...a.left?[h]:[],...a.right?[p]:[]],j=S?[_,x,b]:[...a.top?[_]:[],...a.bottom?[x]:[]],k=[];for(const le of n)i.has(le.id)||k.push(le);c&&k.push(...c);for(const le of k){const Se=le.x,Ae=le.x+le.width,J=le.x+le.width/2,ue=le.y,L=le.y+le.height,ne=le.y+le.height/2;for(const U of C)for(const he of[Se,Ae,J]){const je=he-U;Math.abs(je)<Wu&&Math.abs(je)<Math.abs(u)&&(u=je)}for(const U of j)for(const he of[ue,L,ne]){const je=he-U;Math.abs(je)<Wu&&Math.abs(je)<Math.abs(d)&&(d=je)}}const M=Math.abs(u)<Wu?u:0,z=Math.abs(d)<Wu?d:0,R=[],D=new Set,$=h+M,F=p+M,V=g+M,H=_+z,K=x+z,re=b+z;for(const le of k){const Se=le.x,Ae=le.x+le.width,J=le.x+le.width/2,ue=le.y,L=le.y+le.height,ne=le.y+le.height/2;for(const U of[Se,J,Ae])for(const he of[$,V,F])if(Math.abs(he-U)<.5){const je=`x:${Math.round(U)}`;D.has(je)||(D.add(je),R.push({axis:"x",pos:U}))}for(const U of[ue,ne,L])for(const he of[H,re,K])if(Math.abs(he-U)<.5){const je=`y:${Math.round(U)}`;D.has(je)||(D.add(je),R.push({axis:"y",pos:U}))}}return{dx:M,dy:z,guides:R}}function Oy(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function g4({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:g,onSelectionChange:_,deselectSignal:x,onDragMove:b,onDragEnd:S,clearSignal:C,wireframe:j}){const[k,M]=y.useState(new Set),[z,R]=y.useState(null),[D,$]=y.useState(null),[F,V]=y.useState(null),[H,K]=y.useState([]),[re,le]=y.useState(null),[Se,Ae]=y.useState(!1),J=y.useRef(!1),[ue,L]=y.useState(new Set),ne=y.useRef(new Map),U=y.useRef(null),he=y.useRef(null),je=y.useRef(t);je.current=t;const A=y.useRef(_);A.current=_;const te=y.useRef(b);te.current=b;const q=y.useRef(S);q.current=S;const fe=y.useRef(x);y.useEffect(()=>{x!==fe.current&&(fe.current=x,M(new Set))},[x]);const Te=y.useRef(C);y.useEffect(()=>{if(C!==void 0&&C!==Te.current){Te.current=C;const ae=new Set(je.current.map(Pe=>Pe.id));ae.size>0&&(L(ae),M(new Set),he.current=null,Vt(()=>{n([]),L(new Set)},180))}},[C,n]),y.useEffect(()=>{const ae=Pe=>{const Ke=Pe.target;if(!(Ke.tagName==="INPUT"||Ke.tagName==="TEXTAREA"||Ke.isContentEditable)){if((Pe.key==="Backspace"||Pe.key==="Delete")&&k.size>0){Pe.preventDefault();const ut=new Set(k);L(ut),M(new Set),Vt(()=>{n(je.current.filter(ot=>!ut.has(ot.id))),L(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Pe.key)&&k.size>0){Pe.preventDefault();const ut=Pe.shiftKey?20:1,ot=Pe.key==="ArrowLeft"?-ut:Pe.key==="ArrowRight"?ut:0,it=Pe.key==="ArrowUp"?-ut:Pe.key==="ArrowDown"?ut:0;n(t.map(rt=>k.has(rt.id)?{...rt,x:Math.max(0,rt.x+ot),y:Math.max(0,rt.y+it)}:rt));return}if(Pe.key==="Escape"){i?a(null):k.size>0&&M(new Set);return}}};return document.addEventListener("keydown",ae),()=>document.removeEventListener("keydown",ae)},[k,i,t,n,a]);const Ne=y.useCallback(ae=>{if(ae.button!==0||p||ae.target.closest(`.${Ee.placement}`))return;ae.preventDefault(),ae.stopPropagation();const Ke=window.scrollY,Ie=ae.clientX,ut=ae.clientY;if(i){he.current="place",d==null||d(!0);let ot=!1,it=Ie,rt=ut;const bt=Ve=>{it=Ve.clientX,rt=Ve.clientY;const P=Math.abs(it-Ie),ee=Math.abs(rt-ut);if((P>5||ee>5)&&(ot=!0),ot){const se=Math.min(Ie,it),xe=Math.min(ut,rt),He=Math.abs(it-Ie),Ye=Math.abs(rt-ut);R({x:se,y:xe,w:He,h:Ye}),V({x:Ve.clientX+12,y:Ve.clientY+12,text:`${Math.round(He)} × ${Math.round(Ye)}`})}},Bt=Ve=>{window.removeEventListener("mousemove",bt),window.removeEventListener("mouseup",Bt),R(null),V(null),he.current=null,d==null||d(!1);const P=St[i];let ee,se,xe,He;ot?(ee=Math.min(Ie,it),se=Math.min(ut,rt)+Ke,xe=Math.max(nl,Math.abs(it-Ie)),He=Math.max(nl,Math.abs(rt-ut))):(xe=P.width,He=P.height,ee=Ie-xe/2,se=ut+Ke-He/2),ee=Math.max(0,ee),se=Math.max(0,se);const Ye={id:Oy(),type:i,x:ee,y:se,width:xe,height:He,scrollY:Ke,timestamp:Date.now()},Me=[...t,Ye];n(Me),M(new Set([Ye.id])),a(null)};window.addEventListener("mousemove",bt),window.addEventListener("mouseup",Bt)}else{ae.shiftKey||M(new Set),he.current="select";let ot=!1;const it=bt=>{const Bt=Math.abs(bt.clientX-Ie),Ve=Math.abs(bt.clientY-ut);if((Bt>4||Ve>4)&&(ot=!0),ot){const P=Math.min(Ie,bt.clientX),ee=Math.min(ut,bt.clientY);$({x:P,y:ee,w:Math.abs(bt.clientX-Ie),h:Math.abs(bt.clientY-ut)})}},rt=bt=>{if(window.removeEventListener("mousemove",it),window.removeEventListener("mouseup",rt),he.current=null,ot){const Bt=Math.min(Ie,bt.clientX),Ve=Math.min(ut,bt.clientY)+Ke,P=Math.abs(bt.clientX-Ie),ee=Math.abs(bt.clientY-ut),se=new Set(ae.shiftKey?k:new Set);for(const xe of t)xe.y-Ke,xe.x+xe.width>Bt&&xe.x<Bt+P&&xe.y+xe.height>Ve&&xe.y<Ve+ee&&se.add(xe.id);M(se)}$(null)};window.addEventListener("mousemove",it),window.addEventListener("mouseup",rt)}},[i,p,t,n,k]),ve=y.useCallback((ae,Pe)=>{var Ye;if(ae.button!==0)return;const Ke=ae.target;if(Ke.closest(`.${Ee.handle}`)||Ke.closest(`.${Ee.deleteButton}`))return;ae.preventDefault(),ae.stopPropagation();let Ie;ae.shiftKey?(Ie=new Set(k),Ie.has(Pe)?Ie.delete(Pe):Ie.add(Pe)):k.has(Pe)?Ie=new Set(k):Ie=new Set([Pe]),M(Ie),(Ie.size!==k.size||[...Ie].some(Me=>!k.has(Me)))&&((Ye=A.current)==null||Ye.call(A,Ie,ae.shiftKey));const ot=ae.clientX,it=ae.clientY,rt=new Map;for(const Me of t)Ie.has(Me.id)&&rt.set(Me.id,{x:Me.x,y:Me.y});he.current="move",d==null||d(!0);let bt=!1,Bt=!1,Ve=t,P=0,ee=0;const se=new Map;for(const Me of t)rt.has(Me.id)&&se.set(Me.id,{w:Me.width,h:Me.height});const xe=Me=>{var ln;const yt=Me.clientX-ot,Ue=Me.clientY-it;if((Math.abs(yt)>2||Math.abs(Ue)>2)&&(bt=!0),!bt)return;if(Me.altKey&&!Bt){Bt=!0;const gt=[];for(const Ft of t)rt.has(Ft.id)&&gt.push({...Ft,id:Oy(),timestamp:Date.now()});Ve=[...t,...gt]}let Nt=1/0,ft=1/0,We=-1/0,vt=-1/0;for(const[gt,Ft]of rt){const Ln=se.get(gt);Ln&&(Nt=Math.min(Nt,Ft.x+yt),ft=Math.min(ft,Ft.y+Ue),We=Math.max(We,Ft.x+yt+Ln.w),vt=Math.max(vt,Ft.y+Ue+Ln.h))}const Pt={x:Nt,y:ft,width:We-Nt,height:vt-ft},{dx:Gt,dy:qe,guides:_t}=Ly(Pt,Ve,new Set(rt.keys()),void 0,g);K(_t);const ht=yt+Gt,$t=Ue+qe;P=ht,ee=$t,n(Ve.map(gt=>{const Ft=rt.get(gt.id);return Ft?{...gt,x:Math.max(0,Ft.x+ht),y:Math.max(0,Ft.y+$t)}:gt})),(ln=te.current)==null||ln.call(te,ht,$t)},He=()=>{var Me;window.removeEventListener("mousemove",xe),window.removeEventListener("mouseup",He),he.current=null,d==null||d(!1),K([]),(Me=q.current)==null||Me.call(q,P,ee,bt)};window.addEventListener("mousemove",xe),window.addEventListener("mouseup",He)},[k,t,n,d]),tt=y.useCallback((ae,Pe,Ke)=>{ae.preventDefault(),ae.stopPropagation();const Ie=t.find(se=>se.id===Pe);if(!Ie)return;M(new Set([Pe])),he.current="resize",d==null||d(!0);const ut=ae.clientX,ot=ae.clientY,it=Ie.width,rt=Ie.height,bt=Ie.x,Bt=Ie.y,Ve={left:Ke.includes("w"),right:Ke.includes("e"),top:Ke.includes("n"),bottom:Ke.includes("s")},P=se=>{const xe=se.clientX-ut,He=se.clientY-ot;let Ye=it,Me=rt,yt=bt,Ue=Bt;Ke.includes("e")&&(Ye=Math.max(nl,it+xe)),Ke.includes("w")&&(Ye=Math.max(nl,it-xe),yt=bt+it-Ye),Ke.includes("s")&&(Me=Math.max(nl,rt+He)),Ke.includes("n")&&(Me=Math.max(nl,rt-He),Ue=Bt+rt-Me);const Nt={x:yt,y:Ue,width:Ye,height:Me},{dx:ft,dy:We,guides:vt}=Ly(Nt,je.current,new Set([Pe]),Ve,g);K(vt),ft!==0&&(Ve.right?Ye+=ft:Ve.left&&(yt+=ft,Ye-=ft)),We!==0&&(Ve.bottom?Me+=We:Ve.top&&(Ue+=We,Me-=We)),n(je.current.map(Pt=>Pt.id===Pe?{...Pt,x:yt,y:Ue,width:Ye,height:Me}:Pt)),V({x:se.clientX+12,y:se.clientY+12,text:`${Math.round(Ye)} × ${Math.round(Me)}`})},ee=()=>{window.removeEventListener("mousemove",P),window.removeEventListener("mouseup",ee),V(null),he.current=null,d==null||d(!1),K([])};window.addEventListener("mousemove",P),window.addEventListener("mouseup",ee)},[t,n,d]),Ge=y.useCallback(ae=>{he.current=null,L(Pe=>{const Ke=new Set(Pe);return Ke.add(ae),Ke}),M(Pe=>{const Ke=new Set(Pe);return Ke.delete(ae),Ke}),Vt(()=>{n(je.current.filter(Pe=>Pe.id!==ae)),L(Pe=>{const Ke=new Set(Pe);return Ke.delete(ae),Ke})},180)},[n]),ze={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},ct=y.useCallback(ae=>{const Pe=t.find(Ke=>Ke.id===ae);Pe&&(J.current=!!Pe.text,le(ae),Ae(!1))},[t]),et=y.useCallback(()=>{re&&(Ae(!0),Vt(()=>{le(null),Ae(!1)},150))},[re]);y.useEffect(()=>{u&&re&&et()},[u]);const zt=y.useCallback(ae=>{re&&(n(t.map(Pe=>Pe.id===re?{...Pe,text:ae.trim()||void 0}:Pe)),et())},[re,t,n,et]),Mt=typeof window<"u"?window.scrollY:0,xt=["nw","ne","se","sw"],Qt=j?"#f97316":"#3c82f7",Oe=[{dir:"n",cls:Ee.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:Qt})})},{dir:"e",cls:Ee.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:Qt})})},{dir:"s",cls:Ee.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:Qt})})},{dir:"w",cls:Ee.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:Qt})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:U,className:`${Ee.overlay} ${c?"":Ee.light} ${i?Ee.placing:""} ${p?Ee.passthrough:""} ${u?Ee.overlayExiting:""} ${j?Ee.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Ne,children:t.map(ae=>{var ut;const Pe=k.has(ae.id),Ke=((ut=Hi[ae.type])==null?void 0:ut.label)||ae.type,Ie=ae.y-Mt;return l.jsxs("div",{"data-design-placement":ae.id,className:`${Ee.placement} ${Pe?Ee.selected:""} ${ue.has(ae.id)?Ee.exiting:""}`,style:{left:ae.x,top:Ie,width:ae.width,height:ae.height,position:"fixed"},onMouseDown:ot=>ve(ot,ae.id),onDoubleClick:()=>ct(ae.id),children:[l.jsx("span",{className:Ee.placementLabel,children:Ke}),l.jsx("span",{className:`${Ee.placementAnnotation} ${ae.text?Ee.annotationVisible:""}`,children:(ae.text&&ne.current.set(ae.id,ae.text),ae.text||ne.current.get(ae.id)||"")}),l.jsx("div",{className:Ee.placementContent,children:l.jsx(m4,{type:ae.type,width:ae.width,height:ae.height,text:ae.text})}),l.jsx("div",{className:Ee.deleteButton,onMouseDown:ot=>ot.stopPropagation(),onClick:()=>Ge(ae.id),children:"✕"}),xt.map(ot=>l.jsx("div",{className:`${Ee.handle} ${Ee[`handle${ot.charAt(0).toUpperCase()}${ot.slice(1)}`]}`,onMouseDown:it=>tt(it,ae.id,ot)},ot)),Oe.map(({dir:ot,cls:it,arrow:rt})=>l.jsx("div",{className:`${Ee.edgeHandle} ${it}`,onMouseDown:bt=>tt(bt,ae.id,ot),children:rt},ot))]},ae.id)})}),re&&(()=>{var Bt,Ve;const ae=t.find(P=>P.id===re);if(!ae)return null;const Pe=ae.y-Mt,Ke=ae.x+ae.width/2,Ie=Pe-8,ut=Pe+ae.height+8,ot=Ie>200,it=ut<window.innerHeight-100,rt=Math.max(160,Math.min(window.innerWidth-160,Ke));let bt;return ot?bt={left:rt,bottom:window.innerHeight-Ie}:it?bt={left:rt,top:ut}:bt={left:rt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(kd,{element:((Bt=Hi[ae.type])==null?void 0:Bt.label)||ae.type,placeholder:ze[ae.type]||"Label or content text",initialValue:(Ve=ae.text)!=null?Ve:"",submitLabel:J.current?"Save":"Set",onSubmit:zt,onCancel:et,onDelete:J.current?()=>{zt("")}:void 0,isExiting:Se,lightMode:!c,style:bt})})(),z&&l.jsx("div",{className:Ee.drawBox,style:{left:z.x,top:z.y,width:z.w,height:z.h},"data-feedback-toolbar":!0}),D&&l.jsx("div",{className:Ee.selectBox,style:{left:D.x,top:D.y,width:D.w,height:D.h},"data-feedback-toolbar":!0}),F&&l.jsx("div",{className:Ee.sizeIndicator,style:{left:F.x,top:F.y},"data-feedback-toolbar":!0,children:F.text}),H.map((ae,Pe)=>l.jsx("div",{className:Ee.guideLine,style:ae.axis==="x"?{position:"fixed",left:ae.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:ae.pos-Mt,right:0,height:1},"data-feedback-toolbar":!0},`${ae.axis}-${ae.pos}-${Pe}`))]})}function y4(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?Ee.fadeTop:""} ${i?Ee.fadeBottom:""}`}var B="currentColor",ke="0.5";function x4({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:B,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:B,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:B,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:B,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:B,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:B,strokeWidth:ke})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:B,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:B,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:B,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:B,strokeWidth:ke})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:B,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:B,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:B,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:B,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:B,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:B,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:B,strokeWidth:ke,fill:B,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:B,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:B,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:B,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:B,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:B,strokeWidth:ke})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:B,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:B,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:B,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:B,strokeWidth:ke})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:B,strokeWidth:ke,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:B,strokeWidth:ke,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:B,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:B,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:B,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:B,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:B,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:B,strokeWidth:ke}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:B,strokeWidth:ke,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:B,strokeWidth:ke,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:B,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:B,strokeWidth:ke})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:B,strokeWidth:ke})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:B,strokeWidth:ke,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:B,strokeWidth:ke,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:B,strokeWidth:ke}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:B,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:B,strokeWidth:ke}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:B,strokeWidth:ke}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:B,strokeWidth:ke})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:B,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:B,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:B,strokeWidth:ke,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:B,strokeWidth:ke,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:B,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:B,opacity:".15",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:B,strokeWidth:ke})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:B,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:B,strokeWidth:ke,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:B,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:B,strokeWidth:ke})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:B,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:B,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:B,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:B,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:B,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:B,strokeWidth:ke,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:B,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:B,strokeWidth:ke})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:B,strokeWidth:ke,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:B,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:B,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:B,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:B,strokeWidth:ke})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:B,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:B,opacity:".2",stroke:B,strokeWidth:ke}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:B,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:B,strokeWidth:ke}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:B,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:B,strokeWidth:ke})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:B,strokeWidth:ke,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:B,strokeWidth:ke,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:B,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:B,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:B,strokeWidth:ke,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:B,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:B,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:B,opacity:".15",stroke:B,strokeWidth:ke})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:B,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:B,opacity:".2",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:B,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:B,strokeWidth:ke,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:B,strokeWidth:ke,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:B,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:B,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:B,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:B,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:B,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:B,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:B,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:B,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:B,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:B,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:B,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:B,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:B,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:B,strokeWidth:ke,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:B,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:B,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:B,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:B,strokeWidth:ke})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:B,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:B,strokeWidth:ke,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:B,strokeWidth:ke})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:B,strokeWidth:ke}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:B,strokeWidth:ke,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:B,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:B,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:B,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:B,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:B,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:B,strokeWidth:ke})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:B,strokeWidth:ke,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:B,strokeWidth:ke}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:B,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:B,strokeWidth:ke})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:B,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:B,strokeWidth:ke,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:B,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:B,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:B,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:B,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:B,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:B,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:B,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:B,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:B,opacity:".08",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:B,strokeWidth:ke,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:B,strokeWidth:ke,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:B,strokeWidth:ke,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:B,strokeWidth:ke,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:B,strokeWidth:ke,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:B,strokeWidth:ke,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:B,strokeWidth:ke,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:B,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:B,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:B,strokeWidth:ke,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:B,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:B,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:B,opacity:".2"})]});default:return null}}function b4({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${Ee.placeScroll} ${c||""}`,children:Ux.map(d=>l.jsxs("div",{className:Ee.paletteSection,children:[l.jsx("div",{className:Ee.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${Ee.paletteItem} ${t===h.type?Ee.active:""} ${u?Ee.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:Ee.paletteItemIcon,children:l.jsx(x4,{type:h.type})}),l.jsx("span",{className:Ee.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function v4({value:t,suffix:n}){const[i,a]=y.useState(null),[c,u]=y.useState(n),[d,h]=y.useState("up"),p=y.useRef(t),g=y.useRef(n),_=y.useRef(),x=i!==null&&c!==n;return y.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,g.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(g.current),p.current=t,g.current=n,clearTimeout(_.current),_.current=Vt(()=>a(null),250)}else g.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):x?l.jsxs("span",{className:Ee.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${Ee.rollingNum} ${d==="up"?Ee.exitUp:Ee.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${Ee.rollingNum} ${d==="up"?Ee.enterUp:Ee.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:Ee.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${Ee.rollingNum} ${d==="up"?Ee.exitUp:Ee.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${Ee.rollingNum} ${d==="up"?Ee.enterUp:Ee.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function w4({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:g,blankCanvas:_,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:S,Tooltip:C}){const[j,k]=y.useState(!1),[M,z]=y.useState("exit"),[R,D]=y.useState(!1),[$,F]=y.useState(!0),V=y.useRef(0),H=y.useRef(""),K=y.useRef(0),re=y.useRef(),le=y.useRef(null),[Se,Ae]=y.useState("");y.useEffect(()=>(u?(k(!0),clearTimeout(re.current),cancelAnimationFrame(K.current),K.current=al(()=>{K.current=al(()=>{z("enter")})})):(cancelAnimationFrame(K.current),z("exit"),clearTimeout(re.current),re.current=Vt(()=>{k(!1),d==null||d()},200)),()=>cancelAnimationFrame(K.current)),[u]);const J=h>0||a>0,ue=h+a;return ue>0&&(V.current=ue,H.current=_?ue===1?"Component":"Components":ue===1?"Change":"Changes"),y.useEffect(()=>{if(J)R?F(!1):(F(!0),D(!0),al(()=>{al(()=>{F(!1)})}));else{F(!0);const L=Vt(()=>D(!1),300);return()=>clearTimeout(L)}},[J]),y.useEffect(()=>{if(!j)return;const L=le.current;if(!L)return;const ne=()=>Ae(y4(L));ne(),L.addEventListener("scroll",ne,{passive:!0});const U=new ResizeObserver(ne);return U.observe(L),()=>{L.removeEventListener("scroll",ne),U.disconnect()}},[j]),j?l.jsxs("div",{className:`${Ee.palette} ${Ee[M]} ${i?"":Ee.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:L=>L.stopPropagation(),onMouseDown:L=>L.stopPropagation(),onTransitionEnd:L=>{L.target===L.currentTarget&&(u||(clearTimeout(re.current),k(!1),z("exit"),d==null||d()))},children:[l.jsxs("div",{className:Ee.paletteHeader,children:[l.jsx("div",{className:Ee.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:Ee.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${Ee.canvasToggle} ${_?Ee.active:""}`,onClick:()=>x(!_),children:[l.jsx("span",{className:Ee.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:Ee.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${Ee.wireframePurposeWrap} ${_?"":Ee.collapsed}`,children:l.jsx("div",{className:Ee.wireframePurposeInner,children:l.jsx("textarea",{className:Ee.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:L=>S(L.target.value),rows:2})})}),l.jsx(b4,{activeType:t,onSelect:n,onDragStart:g,scrollRef:le,fadeClass:Se,blankCanvas:_}),R&&l.jsx("div",{className:`${Ee.paletteFooterWrap} ${$?Ee.footerHidden:""}`,children:l.jsx("div",{className:Ee.paletteFooterInner,children:l.jsx("div",{className:Ee.paletteFooterInnerContent,children:l.jsxs("div",{className:Ee.paletteFooter,children:[l.jsx("span",{className:Ee.paletteFooterCount,children:l.jsx(v4,{value:V.current,suffix:H.current})}),l.jsx("button",{className:Ee.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function dl(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function Ho(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=dl(i)}return null}function S4(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(g=>g.length>2&&!g.match(/^[a-z]{1,2}$/)&&!g.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=dl(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function ul(t){var a,c,u,d,h,p,g,_;const n=S4(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=Ho(t,"svg");if(x){const b=dl(x);if(b instanceof HTMLElement)return{name:`graphic in ${ul(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=dl(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),S=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:S?{name:`input [${S}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(g=t.textContent)==null?void 0:g.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(_=t.textContent)==null?void 0:_.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),S=t.getAttribute("aria-label");if(S)return{name:`${i} [${S}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const C=x.split(/[\s_-]+/).map(j=>j.replace(/[A-Z0-9]{5,}.*$/,"")).filter(j=>j.length>2&&!/^[a-z]{1,2}$/.test(j)).slice(0,2);if(C.length>0)return{name:C.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function sc(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function Fu(t){const n=dl(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(_=>_!==t&&_ instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(_=>{var C;const x=_.tagName.toLowerCase(),b=_.className;let S="";if(typeof b=="string"&&b){const j=b.split(/\s+/).map(k=>k.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(k=>k.length>2&&!/^[a-z]{1,2}$/.test(k));j&&(S=`.${j}`)}if(x==="button"||x==="a"){const j=(C=_.textContent)==null?void 0:C.trim().slice(0,15);if(j)return`${x}${S} "${j}"`}return`${x}${S}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const _=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));_&&(h=`.${_}`)}const p=n.children.length,g=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+g}function oc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var Vx=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),C4=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),k4=new Set(["input","textarea","select"]),j4=new Set(["img","video","canvas","svg"]),M4=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Xu(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;C4.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:k4.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:j4.has(a)?c=["width","height","objectFit","borderRadius"]:M4.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!Vx.has(h)&&(i[u]=h)}return i}var T4=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function qu(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of T4){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!Vx.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function E4(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function Gu(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Ku(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=dl(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var A4=new Set(["nav","header","main","section","article","footer","aside"]),Rm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},zy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},D4=new Set(["script","style","noscript","link","meta"]),N4=40;function Yx(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Cr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":Cr(i)} > ${n}:nth-child(${c})`}return n}function jd(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&Rm[a])return Rm[a];if(zy[n])return zy[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=ul(t);return u.charAt(0).toUpperCase()+u.slice(1)}function Wx(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function Fx(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function R4(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(D4.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<N4)return;const g=A4.has(d),_=c.getAttribute("role")&&Rm[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!g&&!_&&!x)return;const b=window.scrollY,S=Yx(c),C={x:p.x,y:S?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:jd(c),tagName:d,selector:Cr(c),role:c.getAttribute("role"),className:Wx(c),textSnippet:Fx(c),originalRect:C,currentRect:{...C},originalIndex:u,isFixed:S})}),a}function B4(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=Yx(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:jd(t),tagName:t.tagName.toLowerCase(),selector:Cr(t),role:t.getAttribute("role"),className:Wx(t),textSnippet:Fx(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var $y={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Iy=["nw","n","ne","e","se","s","sw","w"],Qu=24,Py=16,Zu=5;function Hy(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,g=t.y,_=t.y+t.height,x=t.y+t.height/2,b=[];for(const V of n)i.has(V.id)||b.push(V.currentRect);a&&b.push(...a);for(const V of b){const H=V.x,K=V.x+V.width,re=V.x+V.width/2,le=V.y,Se=V.y+V.height,Ae=V.y+V.height/2;for(const J of[d,h,p])for(const ue of[H,K,re]){const L=ue-J;Math.abs(L)<Zu&&Math.abs(L)<Math.abs(c)&&(c=L)}for(const J of[g,_,x])for(const ue of[le,Se,Ae]){const L=ue-J;Math.abs(L)<Zu&&Math.abs(L)<Math.abs(u)&&(u=L)}}const S=Math.abs(c)<Zu?c:0,C=Math.abs(u)<Zu?u:0,j=[],k=new Set,M=d+S,z=h+S,R=p+S,D=g+C,$=_+C,F=x+C;for(const V of b){const H=V.x,K=V.x+V.width,re=V.x+V.width/2,le=V.y,Se=V.y+V.height,Ae=V.y+V.height/2;for(const J of[H,re,K])for(const ue of[M,R,z])if(Math.abs(ue-J)<.5){const L=`x:${Math.round(J)}`;k.has(L)||(k.add(L),j.push({axis:"x",pos:J}))}for(const J of[le,Ae,Se])for(const ue of[D,F,$])if(Math.abs(ue-J)<.5){const L=`y:${Math.round(J)}`;k.has(L)||(k.add(L),j.push({axis:"y",pos:J}))}}return{dx:S,dy:C,guides:j}}var L4=new Set(["script","style","noscript","link","meta","br","hr"]);function Uy(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(L4.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Py&&i.height>=Py)return n;n=n.parentElement}return null}function O4({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:g,onDragEnd:_,clearSignal:x}){const{sections:b}=t,S=y.useRef(t);S.current=t;const[C,j]=y.useState(new Set),[k,M]=y.useState(!1),z=y.useRef(x);y.useEffect(()=>{x!==void 0&&x!==z.current&&(z.current=x,b.length>0&&M(!0))},[x,b.length]);const R=y.useRef(p);y.useEffect(()=>{p!==R.current&&(R.current=p,j(new Set))},[p]);const[D,$]=y.useState(null),[F,V]=y.useState(!1),H=y.useRef(!1),K=y.useCallback(P=>{const ee=b.find(se=>se.id===P);ee&&(H.current=!!ee.note,$(P),V(!1))},[b]),re=y.useCallback(()=>{D&&(V(!0),Vt(()=>{$(null),V(!1)},150))},[D]),le=y.useCallback(P=>{D&&(n({...t,sections:b.map(ee=>ee.id===D?{...ee,note:P.trim()||void 0}:ee)}),re())},[D,b,t,n,re]);y.useEffect(()=>{a&&D&&re()},[a]);const[Se,Ae]=y.useState(new Set),J=y.useRef(new Map),[ue,L]=y.useState(null),[ne,U]=y.useState(null),[he,je]=y.useState([]),[A,te]=y.useState(0),q=y.useRef(null),fe=y.useRef(new Set),Te=y.useRef(new Map),[Ne,ve]=y.useState(new Map),[tt,Ge]=y.useState(new Map),ze=y.useRef(new Set),ct=y.useRef(new Map),et=y.useRef(h);et.current=h;const zt=y.useRef(g);zt.current=g;const Mt=y.useRef(_);Mt.current=_,y.useEffect(()=>{u&&j(new Set)},[u]);const[xt,Qt]=y.useState(()=>!t.sections.some(P=>{const ee=P.originalRect,se=P.currentRect;return Math.abs(ee.x-se.x)>1||Math.abs(ee.y-se.y)>1||Math.abs(ee.width-se.width)>1||Math.abs(ee.height-se.height)>1}));y.useEffect(()=>{if(!xt){const P=Vt(()=>Qt(!0),380);return()=>clearTimeout(P)}},[]);const Oe=y.useRef(new Set);y.useEffect(()=>{Oe.current=new Set(b.map(P=>P.selector))},[b]),y.useEffect(()=>{const P=()=>te(window.scrollY);return P(),window.addEventListener("scroll",P,{passive:!0}),window.addEventListener("resize",P,{passive:!0}),()=>{window.removeEventListener("scroll",P),window.removeEventListener("resize",P)}},[]),y.useEffect(()=>{const P=ee=>{if(q.current){L(null);return}const se=document.elementFromPoint(ee.clientX,ee.clientY);if(!se){L(null);return}if(se.closest("[data-feedback-toolbar]")){L(null);return}if(se.closest("[data-design-placement]")){L(null);return}if(se.closest("[data-annotation-popup]")){L(null);return}const xe=Uy(se);if(!xe){L(null);return}for(const Ye of Oe.current)try{const Me=document.querySelector(Ye);if(Me&&(Me===xe||xe.contains(Me))){L(null);return}}catch{}const He=xe.getBoundingClientRect();L({x:He.x,y:He.y,w:He.width,h:He.height})};return document.addEventListener("mousemove",P,{passive:!0}),()=>document.removeEventListener("mousemove",P)},[b]),y.useEffect(()=>{const P=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=P}},[]),y.useEffect(()=>{const P=ee=>{var Me,yt,Ue,Nt;if(q.current||ee.button!==0)return;const se=ee.target;if(!se||se.closest("[data-feedback-toolbar]")||se.closest("[data-design-placement]")||se.closest("[data-annotation-popup]"))return;const xe=Uy(se);let He=!1;if(xe)for(const ft of Oe.current)try{const We=document.querySelector(ft);if(We&&(We===xe||xe.contains(We))){He=!0;break}}catch{}const Ye=!!(ee.shiftKey||ee.metaKey||ee.ctrlKey);if(xe&&!He){ee.preventDefault(),ee.stopPropagation();const ft=B4(xe),We=[...b,ft],vt=[...t.originalOrder,ft.id];n({...t,sections:We,originalOrder:vt});const Pt=new Set([ft.id]);j(Pt),(Me=et.current)==null||Me.call(et,Pt,Ye),L(null);const Gt=ee.clientX,qe=ee.clientY,_t={x:ft.currentRect.x,y:ft.currentRect.y};ft.originalRect;let ht=!1,$t=0,ln=0;q.current="move";const gt=Ln=>{var en;const os=Ln.clientX-Gt,xn=Ln.clientY-qe;if(!ht&&(Math.abs(os)>2||Math.abs(xn)>2)&&(ht=!0),!ht)return;const oo={x:_t.x+os,y:_t.y+xn,width:ft.currentRect.width,height:ft.currentRect.height},is=Hy(oo,We,new Set([ft.id]),d);je(is.guides);const ns=os+is.dx,Kt=xn+is.dy;$t=ns,ln=Kt;const Mn=document.querySelector(`[data-rearrange-section="${ft.id}"]`);Mn&&(Mn.style.transform=`translate(${ns}px, ${Kt}px)`),ve(new Map([[ft.id,{x:_t.x+ns,y:_t.y+Kt,width:ft.currentRect.width,height:ft.currentRect.height}]])),(en=zt.current)==null||en.call(zt,ns,Kt)},Ft=()=>{var os;window.removeEventListener("mousemove",gt),window.removeEventListener("mouseup",Ft),q.current=null,je([]),ve(new Map);const Ln=document.querySelector(`[data-rearrange-section="${ft.id}"]`);Ln&&(Ln.style.transform=""),ht&&n({...t,sections:We.map(xn=>xn.id===ft.id?{...xn,currentRect:{...xn.currentRect,x:Math.max(0,_t.x+$t),y:Math.max(0,_t.y+ln)}}:xn),originalOrder:vt}),(os=Mt.current)==null||os.call(Mt,$t,ln,ht)};window.addEventListener("mousemove",gt),window.addEventListener("mouseup",Ft)}else if(He&&xe){ee.preventDefault();for(const ft of b)try{const We=document.querySelector(ft.selector);if(We&&We===xe){const vt=new Set([ft.id]);j(vt),(yt=et.current)==null||yt.call(et,vt,Ye);return}}catch{}Ye||(j(new Set),(Ue=et.current)==null||Ue.call(et,new Set,!1))}else Ye||(j(new Set),(Nt=et.current)==null||Nt.call(et,new Set,!1))};return document.addEventListener("mousedown",P,!0),()=>document.removeEventListener("mousedown",P,!0)},[b,t,n]),y.useEffect(()=>{const P=ee=>{const se=ee.target;if(!(se.tagName==="INPUT"||se.tagName==="TEXTAREA"||se.isContentEditable)){if((ee.key==="Backspace"||ee.key==="Delete")&&C.size>0){ee.preventDefault();const xe=new Set(C);Ae(He=>{const Ye=new Set(He);for(const Me of xe)Ye.add(Me);return Ye}),j(new Set),Vt(()=>{const He=S.current;n({...He,sections:He.sections.filter(Ye=>!xe.has(Ye.id)),originalOrder:He.originalOrder.filter(Ye=>!xe.has(Ye))}),Ae(Ye=>{const Me=new Set(Ye);for(const yt of xe)Me.delete(yt);return Me})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(ee.key)&&C.size>0){ee.preventDefault();const xe=ee.shiftKey?20:1,He=ee.key==="ArrowLeft"?-xe:ee.key==="ArrowRight"?xe:0,Ye=ee.key==="ArrowUp"?-xe:ee.key==="ArrowDown"?xe:0;n({...t,sections:b.map(Me=>C.has(Me.id)?{...Me,currentRect:{...Me.currentRect,x:Math.max(0,Me.currentRect.x+He),y:Math.max(0,Me.currentRect.y+Ye)}}:Me)});return}ee.key==="Escape"&&C.size>0&&j(new Set)}};return document.addEventListener("keydown",P),()=>document.removeEventListener("keydown",P)},[C,b,t,n]);const ae=y.useCallback((P,ee)=>{var Gt;if(P.button!==0)return;const se=P.target;if(se.closest(`.${Ee.handle}`)||se.closest(`.${Ee.deleteButton}`))return;P.preventDefault(),P.stopPropagation();let xe;P.shiftKey||P.metaKey||P.ctrlKey?(xe=new Set(C),xe.has(ee)?xe.delete(ee):xe.add(ee)):C.has(ee)?xe=new Set(C):xe=new Set([ee]),j(xe),(xe.size!==C.size||[...xe].some(qe=>!C.has(qe)))&&((Gt=et.current)==null||Gt.call(et,xe,!!(P.shiftKey||P.metaKey||P.ctrlKey)));const Ye=P.clientX,Me=P.clientY,yt=new Map;for(const qe of b)xe.has(qe.id)&&yt.set(qe.id,{x:qe.currentRect.x,y:qe.currentRect.y});q.current="move";let Ue=!1,Nt=0,ft=0;const We=new Map;for(const qe of b)if(xe.has(qe.id)){const _t=document.querySelector(`[data-rearrange-section="${qe.id}"]`);We.set(qe.id,{outlineEl:_t,curW:qe.currentRect.width,curH:qe.currentRect.height})}const vt=qe=>{var is;const _t=qe.clientX-Ye,ht=qe.clientY-Me;if(_t===0&&ht===0)return;Ue=!0;let $t=1/0,ln=1/0,gt=-1/0,Ft=-1/0;for(const[ns,{curW:Kt,curH:Mn}]of We){const en=yt.get(ns);if(!en)continue;const bn=en.x+_t,Qe=en.y+ht;$t=Math.min($t,bn),ln=Math.min(ln,Qe),gt=Math.max(gt,bn+Kt),Ft=Math.max(Ft,Qe+Mn)}const Ln=Hy({x:$t,y:ln,width:gt-$t,height:Ft-ln},b,xe,d),os=_t+Ln.dx,xn=ht+Ln.dy;Nt=os,ft=xn,je(Ln.guides);for(const[,{outlineEl:ns}]of We)ns&&(ns.style.transform=`translate(${os}px, ${xn}px)`);const oo=new Map;for(const[ns,{curW:Kt,curH:Mn}]of We){const en=yt.get(ns);if(en){const bn={x:Math.max(0,en.x+os),y:Math.max(0,en.y+xn),width:Kt,height:Mn};oo.set(ns,bn)}}ve(oo),(is=zt.current)==null||is.call(zt,os,xn)},Pt=qe=>{var _t,ht;window.removeEventListener("mousemove",vt),window.removeEventListener("mouseup",Pt),q.current=null,je([]),ve(new Map);for(const[,{outlineEl:$t}]of We)$t&&($t.style.transform="");if(Ue){const $t=qe.clientX-Ye,ln=qe.clientY-Me;if(Math.abs($t)<5&&Math.abs(ln)<5)n({...t,sections:b.map(gt=>{const Ft=yt.get(gt.id);return Ft?{...gt,currentRect:{...gt.currentRect,x:Ft.x,y:Ft.y}}:gt})});else{n({...t,sections:b.map(gt=>{const Ft=yt.get(gt.id);return Ft?{...gt,currentRect:{...gt.currentRect,x:Math.max(0,Ft.x+Nt),y:Math.max(0,Ft.y+ft)}}:gt})}),(_t=Mt.current)==null||_t.call(Mt,Nt,ft,!0);return}}(ht=Mt.current)==null||ht.call(Mt,0,0,!1)};window.addEventListener("mousemove",vt),window.addEventListener("mouseup",Pt)},[C,b,t,n]),Pe=y.useCallback((P,ee,se)=>{P.preventDefault(),P.stopPropagation();const xe=b.find(vt=>vt.id===ee);if(!xe)return;j(new Set([ee])),q.current="resize";const He=P.clientX,Ye=P.clientY,Me={...xe.currentRect};xe.originalRect;const yt=Me.width/Me.height;let Ue={...Me};const Nt=document.querySelector(`[data-rearrange-section="${ee}"]`),ft=vt=>{const Pt=vt.clientX-He,Gt=vt.clientY-Ye;let qe=Me.x,_t=Me.y,ht=Me.width,$t=Me.height;if(se.includes("e")&&(ht=Math.max(Qu,Me.width+Pt)),se.includes("w")&&(ht=Math.max(Qu,Me.width-Pt),qe=Me.x+Me.width-ht),se.includes("s")&&($t=Math.max(Qu,Me.height+Gt)),se.includes("n")&&($t=Math.max(Qu,Me.height-Gt),_t=Me.y+Me.height-$t),vt.shiftKey)if(se.length===2){const gt=Math.abs(ht-Me.width),Ft=Math.abs($t-Me.height);gt>Ft?$t=ht/yt:ht=$t*yt,se.includes("w")&&(qe=Me.x+Me.width-ht),se.includes("n")&&(_t=Me.y+Me.height-$t)}else se==="e"||se==="w"?$t=ht/yt:ht=$t*yt,se==="w"&&(qe=Me.x+Me.width-ht),se==="n"&&(_t=Me.y+Me.height-$t);Ue={x:qe,y:_t,width:ht,height:$t},Nt&&(Nt.style.left=`${qe}px`,Nt.style.top=`${_t-A}px`,Nt.style.width=`${ht}px`,Nt.style.height=`${$t}px`),U({x:vt.clientX+12,y:vt.clientY+12,text:`${Math.round(ht)} × ${Math.round($t)}`}),ve(new Map([[ee,Ue]]))},We=()=>{window.removeEventListener("mousemove",ft),window.removeEventListener("mouseup",We),U(null),q.current=null,ve(new Map),n({...t,sections:b.map(vt=>vt.id===ee?{...vt,currentRect:Ue}:vt)})};window.addEventListener("mousemove",ft),window.addEventListener("mouseup",We)},[b,t,n,A]),Ke=y.useCallback(P=>{Ae(ee=>{const se=new Set(ee);return se.add(P),se}),j(ee=>{const se=new Set(ee);return se.delete(P),se}),Vt(()=>{const ee=S.current;n({...ee,sections:ee.sections.filter(se=>se.id!==P),originalOrder:ee.originalOrder.filter(se=>se!==P)}),Ae(se=>{const xe=new Set(se);return xe.delete(P),xe})},180)},[n]),Ie=P=>{const ee=P.originalRect,se=P.currentRect;return Math.abs(ee.x-se.x)>1||Math.abs(ee.y-se.y)>1||Math.abs(ee.width-se.width)>1||Math.abs(ee.height-se.height)>1},ut=P=>{const ee=P.originalRect,se=P.currentRect;return Math.abs(ee.x-se.x)>1||Math.abs(ee.y-se.y)>1},ot=P=>{const ee=P.originalRect,se=P.currentRect;return Math.abs(ee.width-se.width)>1||Math.abs(ee.height-se.height)>1};for(const P of b)Te.current.has(P.id)||(ut(P)?Te.current.set(P.id,"move"):ot(P)&&Te.current.set(P.id,"resize"));for(const P of Te.current.keys())b.some(ee=>ee.id===P)||Te.current.delete(P);const it=b.filter(P=>{try{if(Se.has(P.id)||C.has(P.id))return!0;const ee=document.querySelector(P.selector);if(!ee)return!1;const se=ee.getBoundingClientRect(),xe=P.originalRect;return Math.abs(se.width-xe.width)+Math.abs(se.height-xe.height)<200}catch{return!1}}),rt=it.filter(P=>Ie(P)),bt=it.filter(P=>!Ie(P)),Bt=new Set(rt.map(P=>P.id));for(const P of fe.current)Bt.has(P)||fe.current.delete(P);const Ve=[...Bt].sort().join(",");for(const P of rt)ct.current.set(P.id,{currentRect:P.currentRect,originalRect:P.originalRect,isFixed:P.isFixed});return y.useEffect(()=>{const P=ze.current;ze.current=Bt;const ee=new Map;for(const se of P)if(!Bt.has(se)){if(!b.some(He=>He.id===se))continue;const xe=ct.current.get(se);xe&&(ee.set(se,{orig:xe.originalRect,target:xe.currentRect,isFixed:xe.isFixed}),ct.current.delete(se))}if(ee.size>0){Ge(xe=>{const He=new Map(xe);for(const[Ye,Me]of ee)He.set(Ye,Me);return He});const se=Vt(()=>{Ge(xe=>{const He=new Map(xe);for(const Ye of ee.keys())He.delete(Ye);return He})},250);return()=>clearTimeout(se)}},[Ve,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${Ee.rearrangeOverlay} ${i?"":Ee.light} ${a?Ee.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[ue&&l.jsx("div",{className:Ee.hoverHighlight,style:{left:ue.x,top:ue.y,width:ue.w,height:ue.h}}),bt.map(P=>{const ee=P.currentRect,se=P.isFixed?ee.y:ee.y-A,xe=$y,He=C.has(P.id);return l.jsxs("div",{"data-rearrange-section":P.id,className:`${Ee.sectionOutline} ${He?Ee.selected:""} ${k||a||Se.has(P.id)?Ee.exiting:""}`,style:{left:ee.x,top:se,width:ee.width,height:ee.height,borderColor:xe.border,backgroundColor:xe.bg,...xt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Ye=>ae(Ye,P.id),onDoubleClick:()=>K(P.id),children:[l.jsx("span",{className:Ee.sectionLabel,style:{backgroundColor:xe.pill},children:P.label}),l.jsx("span",{className:`${Ee.sectionAnnotation} ${P.note?Ee.annotationVisible:""}`,children:(P.note&&J.current.set(P.id,P.note),P.note||J.current.get(P.id)||"")}),l.jsxs("span",{className:Ee.sectionDimensions,children:[Math.round(ee.width)," × ",Math.round(ee.height)]}),l.jsx("div",{className:Ee.deleteButton,onMouseDown:Ye=>Ye.stopPropagation(),onClick:()=>Ke(P.id),children:"✕"}),Iy.map(Ye=>l.jsx("div",{className:`${Ee.handle} ${Ee[`handle${Ye.charAt(0).toUpperCase()}${Ye.slice(1)}`]}`,onMouseDown:Me=>Pe(Me,P.id,Ye)},Ye))]},P.id)}),rt.map(P=>{const ee=P.currentRect,se=P.isFixed?ee.y:ee.y-A,xe=C.has(P.id),He=ut(P),Ye=ot(P);if(u&&!xe)return null;const yt=!fe.current.has(P.id);return yt&&fe.current.add(P.id),l.jsxs("div",{"data-rearrange-section":P.id,className:`${Ee.ghostOutline} ${xe?Ee.selected:""} ${k||a||Se.has(P.id)?Ee.exiting:""}`,style:{left:ee.x,top:se,width:ee.width,height:ee.height,...xt?{}:{opacity:0,animation:"none",transition:"none"},...yt?{}:{animation:"none"}},onMouseDown:Ue=>ae(Ue,P.id),onDoubleClick:()=>K(P.id),children:[l.jsx("span",{className:Ee.sectionLabel,style:{backgroundColor:$y.pill},children:P.label}),l.jsx("span",{className:`${Ee.sectionAnnotation} ${P.note?Ee.annotationVisible:""}`,children:(P.note&&J.current.set(P.id,P.note),P.note||J.current.get(P.id)||"")}),l.jsxs("span",{className:Ee.sectionDimensions,children:[Math.round(ee.width)," × ",Math.round(ee.height)]}),l.jsx("div",{className:Ee.deleteButton,onMouseDown:Ue=>Ue.stopPropagation(),onClick:()=>Ke(P.id),children:"✕"}),Iy.map(Ue=>l.jsx("div",{className:`${Ee.handle} ${Ee[`handle${Ue.charAt(0).toUpperCase()}${Ue.slice(1)}`]}`,onMouseDown:Nt=>Pe(Nt,P.id,Ue)},Ue)),l.jsx("span",{className:Ee.ghostBadge,children:(()=>{const Ue=Te.current.get(P.id);if(He&&Ye){const[Nt,ft]=Ue==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",Nt," ",l.jsxs("span",{className:Ee.ghostBadgeExtra,children:["& ",ft]})]})}return`Suggested ${Ye?"Resize":"Move"}`})()})]},P.id)})]}),!u&&(()=>{const P=[];for(const ee of rt){const se=Ne.get(ee.id);P.push({id:ee.id,orig:ee.originalRect,target:se||ee.currentRect,isFixed:ee.isFixed,isSelected:C.has(ee.id),isExiting:Se.has(ee.id)})}for(const[ee,se]of Ne)if(!P.some(xe=>xe.id===ee)){const xe=b.find(He=>He.id===ee);xe&&P.push({id:ee,orig:xe.originalRect,target:se,isFixed:xe.isFixed,isSelected:C.has(ee)})}for(const[ee,se]of tt)P.some(xe=>xe.id===ee)||P.push({id:ee,orig:se.orig,target:se.target,isFixed:se.isFixed,isSelected:!1,isExiting:!0});return P.length===0?null:l.jsxs("svg",{className:`${Ee.connectorSvg} ${k||a?Ee.connectorExiting:""}`,children:[P.map(({id:ee,orig:se,target:xe,isFixed:He,isSelected:Ye,isExiting:Me})=>{const yt=se.x+se.width/2,Ue=(He?se.y:se.y-A)+se.height/2,Nt=xe.x+xe.width/2,ft=(He?xe.y:xe.y-A)+xe.height/2,We=Nt-yt,vt=ft-Ue,Pt=Math.sqrt(We*We+vt*vt);if(Pt<2)return null;const Gt=Math.min(1,Pt/40),qe=Math.min(Pt*.3,60),_t=Pt>0?-vt/Pt:0,ht=Pt>0?We/Pt:0,$t=(yt+Nt)/2+_t*qe,ln=(Ue+ft)/2+ht*qe,gt=Ne.has(ee),Ft=gt||Ye?1:.4,Ln=gt||Ye?1:.5;return l.jsxs("g",{className:Me?Ee.connectorExiting:"",children:[l.jsx("path",{className:Ee.connectorLine,d:`M ${yt} ${Ue} Q ${$t} ${ln} ${Nt} ${ft}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Ft*Gt}),l.jsx("circle",{className:Ee.connectorDot,cx:yt,cy:Ue,r:4*Gt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Ln*Gt,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:Ee.connectorDot,cx:Nt,cy:ft,r:4*Gt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Ln*Gt,filter:"url(#connDotShadow)"})]},`conn-${ee}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),D&&(()=>{var ft;const P=b.find(We=>We.id===D);if(!P)return null;const ee=P.currentRect,se=P.isFixed?ee.y:ee.y-A,xe=ee.x+ee.width/2,He=se-8,Ye=se+ee.height+8,Me=He>200,yt=Ye<window.innerHeight-100,Ue=Math.max(160,Math.min(window.innerWidth-160,xe));let Nt;return Me?Nt={left:Ue,bottom:window.innerHeight-He}:yt?Nt={left:Ue,top:Ye}:Nt={left:Ue,top:Math.max(80,window.innerHeight/2-80)},l.jsx(kd,{element:P.label,placeholder:"Add a note about this section",initialValue:(ft=P.note)!=null?ft:"",submitLabel:H.current?"Save":"Set",onSubmit:le,onCancel:re,onDelete:H.current?()=>{le("")}:void 0,isExiting:F,lightMode:!i,style:Nt})})(),ne&&l.jsx("div",{className:Ee.sizeIndicator,style:{left:ne.x,top:ne.y},"data-feedback-toolbar":!0,children:ne.text}),he.map((P,ee)=>l.jsx("div",{className:Ee.guideLine,style:P.axis==="x"?{position:"fixed",left:P.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:P.pos-A,width:"100vw",height:1}},`${P.axis}-${P.pos}-${ee}`))]})}var Bm=new Set(["script","style","noscript","link","meta","br","hr"]);function z4(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||Bm.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:jd(c),selector:Cr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||Bm.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const g=h.getBoundingClientRect();g.height<10||g.width<10||n.push({label:jd(h),selector:Cr(h),top:g.top,bottom:g.bottom,left:g.left,right:g.right,area:g.width*g.height})}}}return n}function $4(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function I4(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Lm(t,n){const i=n?$4(n):z4(),a=I4(t);let c=null,u=null,d=null,h=null,p=null;for(const C of i){if(Math.abs(C.left-a.left)<2&&Math.abs(C.top-a.top)<2&&Math.abs(C.right-C.left-t.width)<2&&Math.abs(C.bottom-C.top-t.height)<2)continue;C.left<=a.left+2&&C.right>=a.right-2&&C.top<=a.top+2&&C.bottom>=a.bottom-2&&C.area>a.area*1.5&&(!p||C.area<p._area)&&(p={label:C.label,selector:C.selector,_area:C.area});const j=a.right>C.left+5&&a.left<C.right-5,k=a.bottom>C.top+5&&a.top<C.bottom-5;if(j&&C.bottom<=a.top+5){const M=Math.round(a.top-C.bottom);(!c||M<c._dist)&&(c={label:C.label,selector:C.selector,gap:Math.max(0,M),_dist:M})}if(j&&C.top>=a.bottom-5){const M=Math.round(C.top-a.bottom);(!u||M<u._dist)&&(u={label:C.label,selector:C.selector,gap:Math.max(0,M),_dist:M})}if(k&&C.right<=a.left+5){const M=Math.round(a.left-C.right);(!d||M<d._dist)&&(d={label:C.label,selector:C.selector,gap:Math.max(0,M),_dist:M})}if(k&&C.left>=a.right-5){const M=Math.round(C.left-a.right);(!h||M<h._dist)&&(h={label:C.label,selector:C.selector,gap:Math.max(0,M),_dist:M})}}const g=window.innerWidth,_=window.innerHeight,x=H4(t,g),b=C=>C?{label:C.label,selector:C.selector,gap:C.gap}:null,S=P4(a,t,g,_,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:S}}function P4(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const g=u.find(_=>_.label===c.label&&_.selector===c.selector&&Math.abs(_.area-c._area)<10);if(g){const _=[];t.left<g.left-2&&_.push("left"),t.right>g.right+2&&_.push("right"),t.top<g.top-2&&_.push("top"),t.bottom>g.bottom+2&&_.push("bottom"),_.length>0&&(d.container={label:c.label,edges:_},h=!0)}}return h?d:null}function H4(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function Xx(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function qx(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=Xx(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function U4(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(Xx(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var Vy=15;function Yy(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<Vy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.x-g.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,g)=>p+g.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<Vy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.y-g.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,g)=>p+g.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function V4(t){var d;if(t.length<2)return[];const n=Yy(t.map(h=>({label:h.label,rect:h.originalRect}))),i=Yy(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let g=null,_=0;for(const x of i){const b=x.labels.filter(S=>p.has(S)).length;b>=2&&b>_&&(g=x,_=b)}if(g){const x=g.labels.filter(S=>p.has(S)),b=x.join(", ");if(g.type!==h.type){const S=h.type==="row"?"y":"x",C=g.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${S}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${g.type} (${C}≈${g.sharedEdge}, ${g.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-g.sharedEdge)>20||Math.abs(h.avgGap-g.avgGap)>5){const S=h.type==="row"?"y":"x",C=Math.abs(h.sharedEdge-g.sharedEdge)>20?` ${S}: ${h.sharedEdge} → ${g.sharedEdge}`:"",j=Math.abs(h.avgGap-g.avgGap)>5?` gaps: ${h.avgGap}px → ${g.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${C}${j}`)}x.forEach(S=>c.add(S))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(S=>c.add(S))}}for(const h of i){if(h.labels.every(_=>c.has(_))||h.labels.filter(_=>!c.has(_)).length<2)continue;if(!n.some(_=>_.labels.filter(b=>h.labels.includes(b)).length>=2)){const _=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${_}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const g=Math.round(p.currentRect.x/5)*5;((d=h[g])!=null?d:h[g]=[]).push(p.label)}for(const[p,g]of Object.entries(h))g.length>=2&&a.push(`**${g.join(", ")}**: shared left edge at x≈${p}`)}return a}function Gx(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||Bm.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const g of Array.from(p.children))a(g)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const g=getComputedStyle(h);if(g.maxWidth&&g.maxWidth!=="none"&&g.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Cr(h)}}}return{viewport:t,contentArea:null}}function Y4(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Cr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function Kx(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),g=t.x+t.width/2,_=Math.abs(g-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),_&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function Qx(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function W4(t){const n=Y4(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Wy(t,n,i,a="standard"){var k,M,z,R;if(t.length===0)return"";const c=[...t].sort((D,$)=>Math.abs(D.y-$.y)<20?D.x-$.x:D.y-$.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((D,$)=>{var V;const F=((V=Hi[D.type])==null?void 0:V.label)||D.type;u+=`${$+1}. **${F}** — \`${Math.round(D.width)}×${Math.round(D.height)}px\` at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`}),u;const d=Gx(n);u+=Qx(d),u+=`### Components
`,c.forEach((D,$)=>{var Se;const F=((Se=Hi[D.type])==null?void 0:Se.label)||D.type,V={x:D.x,y:D.y,width:D.width,height:D.height};u+=`${$+1}. **${F}** — \`${Math.round(D.width)}×${Math.round(D.height)}px\` at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`;const H=Lm(V),re=qx(H,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Ae of re)u+=`   - ${Ae}
`;const le=Kx(V,d);le&&(u+=`   - CSS: ${le}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const D of c){const $=h.find(F=>Math.abs(F.y-D.y)<30);$?$.items.push(D):h.push({y:D.y,items:[D]})}if(h.sort((D,$)=>D.y-$.y),h.forEach((D,$)=>{D.items.sort((V,H)=>V.x-H.x);const F=D.items.map(V=>{var H;return((H=Hi[V.type])==null?void 0:H.label)||V.type});if(D.items.length===1){const H=D.items[0].width>n.width*.8;u+=`- Row ${$+1} (y≈${Math.round(D.y)}): ${F[0]}${H?" — full width":""}
`}else u+=`- Row ${$+1} (y≈${Math.round(D.y)}): ${F.join(" | ")} — ${D.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let D=0;D<c.length-1;D++){const $=c[D],F=c[D+1],V=((k=Hi[$.type])==null?void 0:k.label)||$.type,H=((M=Hi[F.type])==null?void 0:M.label)||F.type,K=Math.round(F.y-($.y+$.height)),re=Math.round(F.x-($.x+$.width));Math.abs($.y-F.y)<30?u+=`- ${V} → ${H}: \`${re}px\` horizontal gap
`:u+=`- ${V} → ${H}: \`${K}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let D=0;D<c.length;D++)for(let $=D+1;$<c.length;$++){const F=c[D],V=c[$],H=((z=Hi[F.type])==null?void 0:z.label)||F.type,K=((R=Hi[V.type])==null?void 0:R.label)||V.type,re=Math.round(V.y-(F.y+F.height)),le=Math.round(V.x-(F.x+F.width));u+=`- ${H} ↔ ${K}: h=\`${le}px\` v=\`${re}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((D,$)=>{var V;const F=((V=Hi[D.type])==null?void 0:V.label)||D.type;u+=`${$}. ${F} at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(D=>D.type==="navigation"),g=c.some(D=>D.type==="hero"),_=c.some(D=>D.type==="sidebar"),x=c.some(D=>D.type==="footer"),b=c.filter(D=>D.type==="card"),S=c.filter(D=>D.type==="form"),C=c.filter(D=>D.type==="table"),j=c.filter(D=>D.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),g&&(u+=`- Hero section with heading, subtext, and call-to-action
`),_&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),b.length>1?u+=`- ${b.length}-column card grid — use CSS Grid or Flexbox
`:b.length===1&&(u+=`- Card component with image + content area
`),S.length>0&&(u+=`- ${S.length} form${S.length>1?"s":""} — add proper labels, validation, and submit handling
`),C.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),j.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,_){const D=c.find($=>$.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(D.width)}px 1fr;\`
`}if(b.length>1){const D=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${D}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Fy(t,n="standard",i){const{sections:a}=t,c=[];for(const _ of a){const x=_.originalRect,b=_.currentRect,S=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,C=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!S&&!C){n==="forensic"&&c.push({section:_,posMoved:!1,sizeChanged:!1});continue}c.push({section:_,posMoved:S,sizeChanged:C})}if(c.length===0||n!=="forensic"&&c.every(_=>!_.posMoved&&!_.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=Gx({width:d,height:h});n!=="compact"&&(u+=Qx(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const g=_=>a.map(x=>({label:x.label,selector:x.selector,rect:_==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:_,posMoved:x,sizeChanged:b}of c){const S=_.originalRect,C=_.currentRect;if(!x&&!b){u+=`- ${_.label} — unchanged at (${Math.round(C.x)}, ${Math.round(C.y)}) ${Math.round(C.width)}×${Math.round(C.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${_.label}** to (${Math.round(C.x)}, ${Math.round(C.y)}) ${Math.round(C.width)}×${Math.round(C.height)}px
`:x?u+=`- Suggested: move **${_.label}** to (${Math.round(C.x)}, ${Math.round(C.y)})
`:u+=`- Suggested: resize **${_.label}** to ${Math.round(C.width)}×${Math.round(C.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${_.label}**
`:x?u+=`- Suggested: move **${_.label}**
`:u+=`- Suggested: resize **${_.label}** from ${Math.round(S.width)}×${Math.round(S.height)}px to ${Math.round(C.width)}×${Math.round(C.height)}px
`,x){const k=Lm(S,g("original")),M=Lm(C,g("current")),z=b?{width:S.width,height:S.height}:void 0;u+=`  - Currently ${U4(k,{x:S.x,y:S.y},z)}
`;const R=b?{width:C.width,height:C.height}:void 0,D=`at (${Math.round(C.x)}, ${Math.round(C.y)})`,$=R?`, ${Math.round(R.width)}×${Math.round(R.height)}px`:"",V=qx(M,{includeLeftRight:n==="detailed"||n==="forensic"});if(V.length>0){u+=`  - Suggested position ${D}${$}: ${V[0]}
`;for(let K=1;K<V.length;K++)u+=`    ${V[K]}
`}else u+=`  - Suggested position ${D}${$}
`;const H=Kx(C,p);H&&(u+=`  - CSS: ${H}
`)}const j=W4(_.selector);if(j&&(u+=`  - ${j}
`),u+=`  - Selector: \`${_.selector}\`
`,n==="detailed"||n==="forensic"){const k=_.className?`${_.tagName}.${_.className.split(" ")[0]}`:_.tagName;k!==_.selector&&(u+=`  - Element: \`${k}\`
`),_.role&&(u+=`  - Role: \`${_.role}\`
`),n==="forensic"&&_.textSnippet&&(u+=`  - Text: "${_.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(C.x)}, y: ${Math.round(C.y)}, w: ${Math.round(C.width)}, h: ${Math.round(C.height)} }\`
`)}if(n!=="compact"){const _=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=V4(_);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const _=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of _){const b=x.currentRect,S=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${S?" ← suggested":""}
`}}return u}var Om="feedback-annotations-",Zx=7;function Md(t){return`${Om}${t}`}function Jh(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(Md(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-Zx*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function Jx(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Md(t),JSON.stringify(n))}catch{}}function F4(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-Zx*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(Om)){const c=a.slice(Om.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function ic(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));Jx(t,a)}var hp="agentation-design-";function X4(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${hp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function q4(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${hp}${t}`,JSON.stringify(n))}catch{}}function G4(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${hp}${t}`)}catch{}}var mp="agentation-rearrange-";function K4(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${mp}${t}`);return n?JSON.parse(n):null}catch{return null}}function Q4(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${mp}${t}`,JSON.stringify(n))}catch{}}function Z4(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${mp}${t}`)}catch{}}var pp="agentation-wireframe-";function J4(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${pp}${t}`);return n?JSON.parse(n):null}catch{return null}}function Xy(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${pp}${t}`,JSON.stringify(n))}catch{}}function Ju(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${pp}${t}`)}catch{}}var eb="agentation-session-";function _p(t){return`${eb}${t}`}function e6(t){if(typeof window>"u")return null;try{return localStorage.getItem(_p(t))}catch{return null}}function em(t,n){if(!(typeof window>"u"))try{localStorage.setItem(_p(t),n)}catch{}}function t6(t){if(!(typeof window>"u"))try{localStorage.removeItem(_p(t))}catch{}}var tb=`${eb}toolbar-hidden`;function n6(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(tb)==="1"}catch{return!1}}function s6(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(tb,"1")}catch{}}async function tm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function qy(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function sl(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function Gy(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function Wa(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var Bn={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Ky=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Qy=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],o6=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function i6(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=Ky;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...Ky,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...Qy,...t.skipPatterns]:Qy,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:o6,filter:t==null?void 0:t.filter}}function a6(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function r6(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function l6(t,n){const i=a6(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function c6(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&l6(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var ol=null,u6=new WeakMap;function nm(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function d6(){if(ol!==null)return ol;if(typeof document>"u")return!1;if(document.body&&nm(document.body))return ol=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&nm(i))return ol=!0,!0}if(document.body){for(const n of document.body.children)if(nm(n))return ol=!0,!0}return ol=!1,!1}var ac={map:u6};function f6(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function h6(t){const n=f6(t);return n?t[n]:null}function fr(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function m6(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===Bn.HostComponent||n===Bn.HostText||n===Bn.HostHoistable||n===Bn.HostSingleton||n===Bn.Fragment||n===Bn.Mode||n===Bn.Profiler||n===Bn.DehydratedFragment||n===Bn.HostRoot||n===Bn.HostPortal||n===Bn.ScopeComponent||n===Bn.OffscreenComponent||n===Bn.LegacyHiddenComponent||n===Bn.CacheComponent||n===Bn.TracingMarkerComponent||n===Bn.Throw||n===Bn.ViewTransitionComponent||n===Bn.ActivityComponent)return null;if(n===Bn.ForwardRef){const u=a;if(u!=null&&u.render){const d=fr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:fr(i)}if(n===Bn.MemoComponent||n===Bn.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=fr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:fr(i)}if(n===Bn.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===Bn.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===Bn.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?fr(u._result):null}return n===Bn.SuspenseComponent||n===Bn.SuspenseListComponent?null:n===Bn.IncompleteClassComponent||n===Bn.IncompleteFunctionComponent||n===Bn.FunctionComponent||n===Bn.ClassComponent||n===Bn.IndeterminateComponent?fr(i):null}function p6(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function _6(t,n){const i=i6(n),a=i.mode==="all";if(a){const p=ac.map.get(t);if(p!==void 0)return p}if(!d6()){const p={path:null,components:[]};return a&&ac.map.set(t,p),p}const c=i.mode==="smart"?r6(t):void 0,u=[];try{let p=h6(t),g=0;for(;p&&g<i.maxDepth&&u.length<i.maxComponents;){const _=m6(p);_&&!p6(_)&&c6(_,g,i,c)&&u.push(_),p=p.return,g++}}catch{const p={path:null,components:[]};return a&&ac.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&ac.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&ac.map.set(t,h),h}var rc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function g6(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function wc(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function y6(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:wc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:wc(i._debugOwner)};i=i.return,a++}return null}function x6(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:wc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:wc(n)}}}n=n.return,i++}return null}var ed=new Map;function b6(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===rc.FunctionComponent||n===rc.IndeterminateComponent)&&typeof i=="function")return i;if(n===rc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===rc.MemoComponent||n===rc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function v6(){const t=Av,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function w6(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function S6(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function C6(t){const n=b6(t);if(!n)return null;if(ed.has(n))return ed.get(n);const i=v6();if(!i)return ed.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=w6(d.stack);h&&(c={fileName:S6(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:wc(t)||void 0})}}}finally{i.set(a)}return ed.set(n,c),c}function k6(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=C6(i);if(c)return c;i=i.return,a++}return null}function zm(t){const n=g6(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=y6(n);if(i||(i=x6(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=k6(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function j6(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function M6(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=zm(i);if(c.found)return c;i=i.parentElement,a++}return zm(t)}var T6=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,E6={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=T6}var $e=E6,lc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Zy(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var A6=`@keyframes styles-module__markerIn___x4G8D {
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
}`,D6={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=A6}var Ps=D6;function Jy({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:g,renumberFrom:_,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:S,onHoverLeave:C,onClick:j,onContextMenu:k}){const M=(h||p)&&!g,z=M&&x==="delete",R=t.isMultiSelect,D=R?"var(--agentation-color-green)":"var(--agentation-color-accent)",$=c?Ps.exit:u?Ps.clearing:d?"":Ps.enter,F=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${Ps.marker} ${R?Ps.multiSelect:""} ${$} ${z?Ps.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:z?void 0:D,animationDelay:F},onMouseEnter:()=>S(t),onMouseLeave:C,onClick:V=>{V.stopPropagation(),c||j(t)},onContextMenu:k?V=>{x==="delete"&&(V.preventDefault(),V.stopPropagation(),c||k(t))}:void 0,children:[M?z?l.jsx(Px,{size:R?18:16}):l.jsx(Yw,{size:16}):l.jsx("span",{className:_!==null&&n>=_?Ps.renumber:void 0,children:n+1}),h&&!g&&l.jsxs("div",{className:`${Ps.markerTooltip} ${Ps.enter}`,style:b,children:[l.jsxs("span",{className:Ps.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:Ps.markerNote,children:t.comment})]})]})}function N6({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${Ps.marker} ${Ps.pending} ${i?Ps.multiSelect:""} ${a?Ps.exit:Ps.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(Nw,{size:12})})}function e1({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${Ps.marker} ${n?Ps.fixed:""} ${Ps.hovered} ${i?Ps.multiSelect:""} ${Ps.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(Px,{size:i?12:10})})}var R6=`.styles-module__switchContainer___Ka-AB {
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
}`,B6={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=R6}var sm=B6,om=({className:t="",...n})=>l.jsxs("div",{className:`${sm.switchContainer} ${t}`,children:[l.jsx("input",{className:sm.switchInput,type:"checkbox",...n}),l.jsx("div",{className:sm.switchThumb})]}),L6=`.styles-module__checkboxContainer___joqZk {
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
}`,O6={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=L6}var td=O6,z6=({className:t="",...n})=>l.jsxs("div",{className:`${td.checkboxContainer} ${t}`,children:[l.jsx("input",{className:td.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:td.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:td.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),$6=`.styles-module__container___w8eAF {
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
}`,I6={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=$6}var t1=I6,n1=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=y.useId();return l.jsxs("div",{className:`${t1.container} ${t}`,...u,children:[l.jsx(z6,{id:d,onChange:c,checked:a}),l.jsx("label",{className:t1.label,htmlFor:d,children:n}),i&&l.jsx(xr,{content:i})]})},P6=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,H6={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=P6}var Tt=H6;function U6({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:g,onSettingsPageChange:_,onHideToolbar:x}){var b;return l.jsx("div",{className:`${Tt.settingsPanel} ${h?Tt.enter:Tt.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:Tt.settingsPanelContainer,children:[l.jsxs("div",{className:`${Tt.settingsPage} ${g==="automations"?Tt.slideLeft:""}`,children:[l.jsxs("div",{className:Tt.settingsHeader,children:[l.jsx("a",{className:Tt.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:Tt.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:Tt.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:Tt.themeIconWrapper,children:l.jsx("span",{className:Tt.themeIcon,children:i?l.jsx(Uw,{size:20}):l.jsx(Vw,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:Tt.divider}),l.jsxs("div",{className:Tt.settingsSection,children:[l.jsxs("div",{className:Tt.settingsRow,children:[l.jsxs("div",{className:Tt.settingsLabel,children:["Output Detail",l.jsx(xr,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:Tt.cycleButton,onClick:()=>{const C=(lc.findIndex(j=>j.value===t.outputDetail)+1)%lc.length;n({outputDetail:lc[C].value})},children:[l.jsx("span",{className:Tt.cycleButtonText,children:(b=lc.find(S=>S.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),l.jsx("span",{className:Tt.cycleDots,children:lc.map(S=>l.jsx("span",{className:`${Tt.cycleDot} ${t.outputDetail===S.value?Tt.active:""}`},S.value))})]})]}),l.jsxs("div",{className:`${Tt.settingsRow} ${Tt.settingsRowMarginTop} ${c?"":Tt.settingsRowDisabled}`,children:[l.jsxs("div",{className:Tt.settingsLabel,children:["React Components",l.jsx(xr,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(om,{checked:c&&t.reactEnabled,onChange:S=>n({reactEnabled:S.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${Tt.settingsRow} ${Tt.settingsRowMarginTop}`,children:[l.jsxs("div",{className:Tt.settingsLabel,children:["Hide Until Restart",l.jsx(xr,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(om,{checked:!1,onChange:S=>{S.target.checked&&x()}})]})]}),l.jsx("div",{className:Tt.divider}),l.jsxs("div",{className:Tt.settingsSection,children:[l.jsx("div",{className:`${Tt.settingsLabel} ${Tt.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:Tt.colorOptions,children:_c.map(S=>l.jsx("button",{className:`${Tt.colorOption} ${t.annotationColorId===S.id?Tt.selected:""}`,style:{"--swatch":S.srgb,"--swatch-p3":S.p3},onClick:()=>n({annotationColorId:S.id}),title:S.label,type:"button"},S.id))})]}),l.jsx("div",{className:Tt.divider}),l.jsxs("div",{className:Tt.settingsSection,children:[l.jsx(n1,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:S=>n({autoClearAfterCopy:S.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(n1,{className:Tt.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:S=>n({blockInteractions:S.target.checked})})]}),l.jsx("div",{className:Tt.divider}),l.jsxs("button",{className:Tt.settingsNavLink,onClick:()=>_("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:Tt.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${Tt.mcpNavIndicator} ${Tt[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${Tt.settingsPage} ${Tt.automationsPage} ${g==="automations"?Tt.slideIn:""}`,children:[l.jsxs("button",{className:Tt.settingsBackButton,onClick:()=>_("main"),children:[l.jsx(Fw,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:Tt.divider}),l.jsxs("div",{className:Tt.settingsSection,children:[l.jsxs("div",{className:Tt.settingsRow,children:[l.jsxs("span",{className:Tt.automationHeader,children:["MCP Connection",l.jsx(xr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${Tt.mcpStatusDot} ${Tt[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:Tt.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Tt.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:Tt.divider}),l.jsxs("div",{className:`${Tt.settingsSection} ${Tt.settingsSectionGrow}`,children:[l.jsxs("div",{className:Tt.settingsRow,children:[l.jsxs("span",{className:Tt.automationHeader,children:["Webhooks",l.jsx(xr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:Tt.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${Tt.autoSendLabel} ${t.webhooksEnabled?Tt.active:""} ${t.webhookUrl?"":Tt.disabled}`,children:"Auto-Send"}),l.jsx(om,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:S=>n({webhooksEnabled:S.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:Tt.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:Tt.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:S=>S.stopPropagation(),onChange:S=>n({webhookUrl:S.target.value})})]})]})]})})}function im(t,n="filtered"){const{name:i,path:a}=ul(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=_6(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var s1=!1,am={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},Gi=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},_c=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],V6=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[..._c.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${_c.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${_c.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(t)};V6();function hr(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function rm(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function mr(t){return t.status!=="resolved"&&t.status!=="dismissed"}function nd(t){const n=zm(t),i=n.found?n:M6(t);if(i.found&&i.source)return j6(i.source,"path")}function Y6({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:g=!0,endpoint:_,sessionId:x,onSessionCreated:b,webhookUrl:S,className:C}={}){var Ko,Lc,xl,bl,va,wa,Oc;const[j,k]=y.useState(!1),[M,z]=y.useState([]),[R,D]=y.useState(!0),[$,F]=y.useState(()=>n6()),[V,H]=y.useState(!1),K=y.useRef(null);y.useEffect(()=>{const N=G=>{const Y=K.current;Y&&Y.contains(G.target)&&G.stopPropagation()},O=["mousedown","click","pointerdown"];return O.forEach(G=>document.body.addEventListener(G,N)),()=>{O.forEach(G=>document.body.removeEventListener(G,N))}},[]);const[re,le]=y.useState(!1),[Se,Ae]=y.useState(!1),[J,ue]=y.useState(null),[L,ne]=y.useState({x:0,y:0}),[U,he]=y.useState(null),[je,A]=y.useState(!1),[te,q]=y.useState("idle"),[fe,Te]=y.useState(!1),[Ne,ve]=y.useState(!1),[tt,Ge]=y.useState(null),[ze,ct]=y.useState(null),[et,zt]=y.useState([]),[Mt,xt]=y.useState(null),[Qt,Oe]=y.useState(null),[ae,Pe]=y.useState(null),[Ke,Ie]=y.useState(null),[ut,ot]=y.useState([]),[it,rt]=y.useState(0),[bt,Bt]=y.useState(!1),[Ve,P]=y.useState(!1),[ee,se]=y.useState(!1),[xe,He]=y.useState(!1),[Ye,Me]=y.useState(!1),[yt,Ue]=y.useState("main"),[Nt,ft]=y.useState(!1),[We,vt]=y.useState(!1),[Pt,Gt]=y.useState(!1),[qe,_t]=y.useState([]),[ht,$t]=y.useState(null),ln=y.useRef(!1),[gt,Ft]=y.useState(!1),[Ln,os]=y.useState(!1),[xn,oo]=y.useState(1),[is,ns]=y.useState("new-page"),[Kt,Mn]=y.useState(""),[en,bn]=y.useState(!1),[Qe,Tn]=y.useState(null),So=y.useRef(!1),io=y.useRef({rearrange:null,placements:[]}),zn=y.useRef({rearrange:null,placements:[]}),[Rs,ao]=y.useState(0),[ro,bs]=y.useState(0),[gs,vs]=y.useState(0),[on,oi]=y.useState(0),No=y.useRef(new Set),Zs=y.useRef(new Set),Xn=y.useRef(null),lo=y.useRef(),Ro=We&&j&&!Pt&&gt;y.useEffect(()=>{if(Ro){os(!1);const N=al(()=>{os(!0)});return()=>cancelAnimationFrame(N)}else os(!1)},[Ro]);const Bo=y.useRef(new Map),Fo=y.useRef(new Map),mo=y.useRef(),[ws,Bs]=y.useState(!1),[Cn,_i]=y.useState([]),as=y.useRef(Cn);as.current=Cn;const[ii,Us]=y.useState(null),Lo=y.useRef(null);y.useRef(!1),y.useRef([]),y.useRef(0),y.useRef(null),y.useRef(null),y.useRef(1);const[Co,Ss]=y.useState(!1),Vs=y.useRef(null),[vn,po]=y.useState([]),rs=y.useRef({cmd:!1,shift:!1}),qn=()=>{ft(!0)},gi=()=>{ft(!1)},ko=()=>{Co||(Vs.current=Vt(()=>Ss(!0),850))},Xo=()=>{Vs.current&&(clearTimeout(Vs.current),Vs.current=null),Ss(!1),gi()};y.useEffect(()=>()=>{Vs.current&&clearTimeout(Vs.current)},[]);const[Xt,Di]=y.useState(()=>{var N;try{const O=JSON.parse((N=localStorage.getItem("feedback-toolbar-settings"))!=null?N:"");return{...am,...O,annotationColorId:_c.find(G=>G.id===O.annotationColorId)?O.annotationColorId:am.annotationColorId}}catch{return am}}),[Ls,qo]=y.useState(!0),[Oo,zo]=y.useState(!1),Os=()=>{var N;(N=K.current)==null||N.classList.add($e.disableTransitions),qo(O=>!O),al(()=>{var O;(O=K.current)==null||O.classList.remove($e.disableTransitions)})},jo=!1,js="off",[kn,co]=y.useState(x!=null?x:null),Gn=y.useRef(!1),[ys,Kn]=y.useState(_?"connecting":"disconnected"),[tn,Ys]=y.useState(null),[Ws,Cs]=y.useState(!1),[Qn,Mo]=y.useState(null),Ms=y.useRef(!1),[_o,Ts]=y.useState(new Set),[Es,uo]=y.useState(new Set),[Nn,I]=y.useState(!1),[oe,v]=y.useState(!1),[T,X]=y.useState(!1),Q=y.useRef(null),de=y.useRef(null),we=y.useRef(null),lt=y.useRef(null),pt=y.useRef(!1),Et=y.useRef(0),dt=y.useRef(null),nt=y.useRef(null),Ct=8,Ut=50,an=y.useRef(null),fn=y.useRef(null),_n=y.useRef(null),at=typeof window<"u"?window.location.pathname:"/";y.useEffect(()=>{if(xe)Me(!0);else{ft(!1),Ue("main");const N=Vt(()=>Me(!1),0);return()=>clearTimeout(N)}},[xe]);const ls=j&&R&&!We;y.useEffect(()=>{if(ls){Ae(!1),le(!0),Ts(new Set);const N=Vt(()=>{Ts(O=>{const G=new Set(O);return M.forEach(Y=>G.add(Y.id)),G})},350);return()=>clearTimeout(N)}else if(re){Ae(!0);const N=Vt(()=>{le(!1),Ae(!1)},250);return()=>clearTimeout(N)}},[ls]),y.useEffect(()=>{P(!0),rt(window.scrollY);const N=Jh(at);z(N.filter(mr)),s1||(zo(!0),s1=!0,Vt(()=>zo(!1),750));try{const O=localStorage.getItem("feedback-toolbar-theme");O!==null&&qo(O==="dark")}catch{}try{const O=localStorage.getItem("feedback-toolbar-position");if(O){const G=JSON.parse(O);typeof G.x=="number"&&typeof G.y=="number"&&Ys(G)}}catch{}},[at]),y.useEffect(()=>{Ve&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Xt))},[Xt,Ve]),y.useEffect(()=>{Ve&&localStorage.setItem("feedback-toolbar-theme",Ls?"dark":"light")},[Ls,Ve]);const To=y.useRef(!1);y.useEffect(()=>{const N=To.current;To.current=Ws,N&&!Ws&&tn&&Ve&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(tn))},[Ws,tn,Ve]),y.useEffect(()=>{if(!_||!Ve||Gn.current)return;Gn.current=!0,Kn("connecting"),(async()=>{try{const O=e6(at),G=x||O;let Y=!1;if(G)try{const ie=await qy(_,G);co(ie.id),Kn("connected"),em(at,ie.id),Y=!0;const ge=Jh(at),Fe=new Set(ie.annotations.map(Je=>Je.id)),Xe=ge.filter(Je=>!Fe.has(Je.id));if(Xe.length>0){const kt=`${typeof window<"u"?window.location.origin:""}${at}`,Zt=(await Promise.allSettled(Xe.map(jt=>sl(_,ie.id,{...jt,sessionId:ie.id,url:kt})))).map((jt,mt)=>jt.status==="fulfilled"?jt.value:(console.warn("[Agentation] Failed to sync annotation:",jt.reason),Xe[mt])),Jt=[...ie.annotations,...Zt];z(Jt.filter(mr)),ic(at,Jt.filter(mr),ie.id)}else z(ie.annotations.filter(mr)),ic(at,ie.annotations.filter(mr),ie.id)}catch(ie){console.warn("[Agentation] Could not join session, creating new:",ie),t6(at)}if(!Y){const ie=typeof window<"u"?window.location.href:"/",ge=await tm(_,ie);co(ge.id),Kn("connected"),em(at,ge.id),b==null||b(ge.id);const Fe=F4(),Xe=typeof window<"u"?window.location.origin:"",Je=[];for(const[kt,Ot]of Fe){const Zt=Ot.filter(mt=>!mt._syncedTo);if(Zt.length===0)continue;const Jt=`${Xe}${kt}`,jt=kt===at;Je.push((async()=>{try{const mt=jt?ge:await tm(_,Jt),fs=(await Promise.allSettled(Zt.map(Sn=>sl(_,mt.id,{...Sn,sessionId:mt.id,url:Jt})))).map((Sn,On)=>Sn.status==="fulfilled"?Sn.value:(console.warn("[Agentation] Failed to sync annotation:",Sn.reason),Zt[On])).filter(mr);if(ic(kt,fs,mt.id),jt){const Sn=new Set(Zt.map(On=>On.id));z(On=>{const Wt=On.filter(qt=>!Sn.has(qt.id));return[...fs,...Wt]})}}catch(mt){console.warn(`[Agentation] Failed to sync annotations for ${kt}:`,mt)}})())}await Promise.allSettled(Je)}}catch(O){Kn("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",O)}})()},[_,x,Ve,b,at]),y.useEffect(()=>{if(!_||!Ve)return;const N=async()=>{try{(await fetch(`${_}/health`)).ok?Kn("connected"):Kn("disconnected")}catch{Kn("disconnected")}};N();const O=Gw(N,1e4);return()=>clearInterval(O)},[_,Ve]),y.useEffect(()=>{if(!_||!Ve||!kn)return;const N=new EventSource(`${_}/sessions/${kn}/events`),O=["resolved","dismissed"],G=Y=>{var ie;try{const ge=JSON.parse(Y.data);if(O.includes((ie=ge.payload)==null?void 0:ie.status)){const Fe=ge.payload.id,Xe=ge.payload.kind;if(Xe==="placement"){for(const[Je,kt]of Bo.current)if(kt===Fe){Bo.current.delete(Je),_t(Ot=>Ot.filter(Zt=>Zt.id!==Je));break}}else if(Xe==="rearrange"){for(const[Je,kt]of Fo.current)if(kt===Fe){Fo.current.delete(Je),Tn(Ot=>{if(!Ot)return null;const Zt=Ot.sections.filter(Jt=>Jt.id!==Je);return Zt.length===0?null:{...Ot,sections:Zt}});break}}else uo(Je=>new Set(Je).add(Fe)),Vt(()=>{z(Je=>Je.filter(kt=>kt.id!==Fe)),uo(Je=>{const kt=new Set(Je);return kt.delete(Fe),kt})},150)}}catch{}};return N.addEventListener("annotation.updated",G),()=>{N.removeEventListener("annotation.updated",G),N.close()}},[_,Ve,kn]),y.useEffect(()=>{if(!_||!Ve)return;const N=nt.current==="disconnected",O=ys==="connected";nt.current=ys,N&&O&&(async()=>{try{const Y=Jh(at);if(Y.length===0)return;const ge=`${typeof window<"u"?window.location.origin:""}${at}`;let Fe=kn,Xe=[];if(Fe)try{Xe=(await qy(_,Fe)).annotations}catch{Fe=null}Fe||(Fe=(await tm(_,ge)).id,co(Fe),em(at,Fe));const Je=new Set(Xe.map(Ot=>Ot.id)),kt=Y.filter(Ot=>!Je.has(Ot.id));if(kt.length>0){const Zt=(await Promise.allSettled(kt.map(mt=>sl(_,Fe,{...mt,sessionId:Fe,url:ge})))).map((mt,us)=>mt.status==="fulfilled"?mt.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",mt.reason),kt[us])),jt=[...Xe,...Zt].filter(mr);z(jt),ic(at,jt,Fe)}}catch(Y){console.warn("[Agentation] Failed to sync on reconnect:",Y)}})()},[ys,_,Ve,kn,at]);const ai=y.useCallback(()=>{V||(H(!0),He(!1),k(!1),Vt(()=>{s6(!0),F(!0),H(!1)},400))},[V]);y.useEffect(()=>{if(!i||!Ve||!t||t.length===0||M.length>0)return;const N=[];return N.push(Vt(()=>{k(!0)},n-200)),t.forEach((O,G)=>{const Y=n+G*300;N.push(Vt(()=>{const ie=document.querySelector(O.selector);if(!ie)return;const ge=ie.getBoundingClientRect(),{name:Fe,path:Xe}=ul(ie),Je={id:`demo-${Date.now()}-${G}`,x:(ge.left+ge.width/2)/window.innerWidth*100,y:ge.top+ge.height/2+window.scrollY,comment:O.comment,element:Fe,elementPath:Xe,timestamp:Date.now(),selectedText:O.selectedText,boundingBox:{x:ge.left,y:ge.top+window.scrollY,width:ge.width,height:ge.height},nearbyText:sc(ie),cssClasses:oc(ie)};z(kt=>[...kt,Je])},Y))}),()=>{N.forEach(clearTimeout)}},[i,Ve,t,n]),y.useEffect(()=>{const N=()=>{rt(window.scrollY),Bt(!0),_n.current&&clearTimeout(_n.current),_n.current=Vt(()=>{Bt(!1)},150)};return window.addEventListener("scroll",N,{passive:!0}),()=>{window.removeEventListener("scroll",N),_n.current&&clearTimeout(_n.current)}},[]),y.useEffect(()=>{Ve&&M.length>0?kn?ic(at,M,kn):Jx(at,M):Ve&&M.length===0&&localStorage.removeItem(Md(at))},[M,at,Ve,kn]),y.useEffect(()=>{if(Ve&&!ln.current){ln.current=!0;const N=X4(at);N.length>0&&_t(N)}},[Ve,at]),y.useEffect(()=>{Ve&&ln.current&&!gt&&(qe.length>0?q4(at,qe):G4(at))},[qe,at,Ve,gt]),y.useEffect(()=>{if(Ve&&!So.current){So.current=!0;const N=K4(at);if(N){const O={...N,sections:N.sections.map(G=>{var Y;return{...G,currentRect:(Y=G.currentRect)!=null?Y:{...G.originalRect}}})};Tn(O)}}},[Ve,at]),y.useEffect(()=>{Ve&&So.current&&!gt&&(Qe?Q4(at,Qe):Z4(at))},[Qe,at,Ve,gt]);const Go=y.useRef(!1);y.useEffect(()=>{if(Ve&&!Go.current){Go.current=!0;const N=J4(at);N&&(zn.current={rearrange:N.rearrange,placements:N.placements||[]},N.purpose&&Mn(N.purpose))}},[Ve,at]),y.useEffect(()=>{var O,G,Y,ie,ge;if(!Ve||!Go.current)return;const N=zn.current;gt?((G=(O=Qe==null?void 0:Qe.sections)==null?void 0:O.length)!=null?G:0)>0||qe.length>0||Kt?Xy(at,{rearrange:Qe,placements:qe,purpose:Kt}):Ju(at):((ge=(ie=(Y=N.rearrange)==null?void 0:Y.sections)==null?void 0:ie.length)!=null?ge:0)>0||N.placements.length>0||Kt?Xy(at,{rearrange:N.rearrange,placements:N.placements,purpose:Kt}):Ju(at)},[Qe,qe,Kt,gt,at,Ve]),y.useEffect(()=>{We&&!Qe&&Tn({sections:[],originalOrder:[],detectedAt:Date.now()})},[We,Qe]),y.useEffect(()=>{if(!_||!kn)return;const N=Bo.current,O=new Set(qe.map(G=>G.id));for(const G of qe){if(N.has(G.id))continue;N.set(G.id,"");const Y=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:at;sl(_,kn,{id:G.id,x:G.x/window.innerWidth*100,y:G.y,comment:`Place ${G.type} at (${Math.round(G.x)}, ${Math.round(G.y)}), ${G.width}×${G.height}px${G.text?` — "${G.text}"`:""}`,element:`[design:${G.type}]`,elementPath:"[placement]",timestamp:G.timestamp,url:Y,intent:"change",severity:"important",kind:"placement",placement:{componentType:G.type,width:G.width,height:G.height,scrollY:G.scrollY,text:G.text}}).then(ie=>{N.has(G.id)&&N.set(G.id,ie.id)}).catch(ie=>{console.warn("[Agentation] Failed to sync placement annotation:",ie),N.delete(G.id)})}for(const[G,Y]of N)O.has(G)||(N.delete(G),Y&&Wa(_,Y).catch(()=>{}))},[qe,_,kn,at]),y.useEffect(()=>{if(!(!_||!kn))return mo.current&&clearTimeout(mo.current),mo.current=Vt(()=>{const N=Fo.current;if(!Qe||Qe.sections.length===0){for(const[,Y]of N)Y&&Wa(_,Y).catch(()=>{});N.clear();return}const O=new Set(Qe.sections.map(Y=>Y.id)),G=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:at;for(const Y of Qe.sections){const ie=Y.originalRect,ge=Y.currentRect;if(!(Math.abs(ie.x-ge.x)>1||Math.abs(ie.y-ge.y)>1||Math.abs(ie.width-ge.width)>1||Math.abs(ie.height-ge.height)>1)){const Je=N.get(Y.id);Je&&(N.delete(Y.id),Wa(_,Je).catch(()=>{}));continue}const Xe=N.get(Y.id);Xe?Gy(_,Xe,{comment:`Move ${Y.label} section (${Y.tagName}) — from (${Math.round(ie.x)},${Math.round(ie.y)}) ${Math.round(ie.width)}×${Math.round(ie.height)} to (${Math.round(ge.x)},${Math.round(ge.y)}) ${Math.round(ge.width)}×${Math.round(ge.height)}`}).catch(Je=>{console.warn("[Agentation] Failed to update rearrange annotation:",Je)}):(N.set(Y.id,""),sl(_,kn,{id:Y.id,x:ge.x/window.innerWidth*100,y:ge.y,comment:`Move ${Y.label} section (${Y.tagName}) — from (${Math.round(ie.x)},${Math.round(ie.y)}) ${Math.round(ie.width)}×${Math.round(ie.height)} to (${Math.round(ge.x)},${Math.round(ge.y)}) ${Math.round(ge.width)}×${Math.round(ge.height)}`,element:Y.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:G,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:Y.selector,label:Y.label,tagName:Y.tagName,originalRect:ie,currentRect:ge}}).then(Je=>{N.has(Y.id)&&N.set(Y.id,Je.id)}).catch(Je=>{console.warn("[Agentation] Failed to sync rearrange annotation:",Je),N.delete(Y.id)}))}for(const[Y,ie]of N)O.has(Y)||(N.delete(Y),ie&&Wa(_,ie).catch(()=>{}))},300),()=>{mo.current&&clearTimeout(mo.current)}},[Qe,_,kn,at]);const Js=y.useRef(new Map);y.useLayoutEffect(()=>{var G;const N=(G=Qe==null?void 0:Qe.sections)!=null?G:[],O=new Set;if((We||Pt)&&j)for(const Y of N){O.add(Y.id);try{const ie=document.querySelector(Y.selector);if(!ie)continue;if(!Js.current.has(Y.id)){const ge={transform:ie.style.transform,transformOrigin:ie.style.transformOrigin,opacity:ie.style.opacity,position:ie.style.position,zIndex:ie.style.zIndex,display:ie.style.display},Fe=[];let Xe=ie.parentElement;for(;Xe&&Xe!==document.body;){const kt=getComputedStyle(Xe);(kt.overflow!=="visible"||kt.overflowX!=="visible"||kt.overflowY!=="visible")&&(Fe.push({el:Xe,overflow:Xe.style.overflow}),Xe.style.overflow="visible"),Xe=Xe.parentElement}getComputedStyle(ie).display==="inline"&&(ie.style.display="inline-block"),Js.current.set(Y.id,{el:ie,origStyles:ge,ancestors:Fe}),ie.style.transformOrigin="top left",ie.style.zIndex="9999"}}catch{}}for(const[Y,ie]of Js.current)if(!O.has(Y)){const{el:ge,origStyles:Fe,ancestors:Xe}=ie;ge.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",ge.style.transform=Fe.transform,ge.style.transformOrigin=Fe.transformOrigin,ge.style.opacity=Fe.opacity,ge.style.position=Fe.position,ge.style.zIndex=Fe.zIndex,Js.current.delete(Y),Vt(()=>{ge.style.transition="",ge.style.display=Fe.display;for(const Je of Xe)Je.el.style.overflow=Je.overflow},450)}},[Qe,We,Pt,j]),y.useEffect(()=>()=>{for(const[,N]of Js.current){const{el:O,origStyles:G,ancestors:Y}=N;O.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",O.style.transform=G.transform,O.style.transformOrigin=G.transformOrigin,O.style.opacity=G.opacity,O.style.position=G.position,O.style.zIndex=G.zIndex,Vt(()=>{O.style.transition="",O.style.display=G.display;for(const ie of Y)ie.el.style.overflow=ie.overflow},450)}Js.current.clear()},[]);const $o=y.useCallback(()=>{Gt(!0),vt(!1),$t(null),clearTimeout(lo.current),lo.current=Vt(()=>{Gt(!1)},300)},[]),ri=y.useCallback(()=>{We&&(Gt(!0),vt(!1),$t(null),clearTimeout(lo.current),lo.current=Vt(()=>{Gt(!1)},300)),k(!1)},[We]),En=y.useCallback(()=>{ee||(Qw(),se(!0))},[ee]),Zn=y.useCallback(()=>{ee&&(Ry(),se(!1))},[ee]),eo=y.useCallback(()=>{ee?Zn():En()},[ee,En,Zn]),Vi=y.useCallback(()=>{if(vn.length===0)return;const N=vn[0],O=N.element,G=vn.length>1,Y=vn.map(ie=>ie.element.getBoundingClientRect());if(G){const ie={left:Math.min(...Y.map(mt=>mt.left)),top:Math.min(...Y.map(mt=>mt.top)),right:Math.max(...Y.map(mt=>mt.right)),bottom:Math.max(...Y.map(mt=>mt.bottom))},ge=vn.slice(0,5).map(mt=>mt.name).join(", "),Fe=vn.length>5?` +${vn.length-5} more`:"",Xe=Y.map(mt=>({x:mt.left,y:mt.top+window.scrollY,width:mt.width,height:mt.height})),kt=vn[vn.length-1].element,Ot=Y[Y.length-1],Zt=Ot.left+Ot.width/2,Jt=Ot.top+Ot.height/2,jt=rm(kt);he({x:Zt/window.innerWidth*100,y:jt?Jt:Jt+window.scrollY,clientY:Jt,element:`${vn.length} elements: ${ge}${Fe}`,elementPath:"multi-select",boundingBox:{x:ie.left,y:ie.top+window.scrollY,width:ie.right-ie.left,height:ie.bottom-ie.top},isMultiSelect:!0,isFixed:jt,elementBoundingBoxes:Xe,multiSelectElements:vn.map(mt=>mt.element),targetElement:kt,fullPath:Ku(O),accessibility:Gu(O),computedStyles:qu(O),computedStylesObj:Xu(O),nearbyElements:Fu(O),cssClasses:oc(O),nearbyText:sc(O),sourceFile:nd(O)})}else{const ie=Y[0],ge=rm(O);he({x:ie.left/window.innerWidth*100,y:ge?ie.top:ie.top+window.scrollY,clientY:ie.top,element:N.name,elementPath:N.path,boundingBox:{x:ie.left,y:ge?ie.top:ie.top+window.scrollY,width:ie.width,height:ie.height},isFixed:ge,fullPath:Ku(O),accessibility:Gu(O),computedStyles:qu(O),computedStylesObj:Xu(O),nearbyElements:Fu(O),cssClasses:oc(O),nearbyText:sc(O),reactComponents:N.reactComponents,sourceFile:nd(O)})}po([]),ue(null)},[vn]);y.useEffect(()=>{j||(he(null),Pe(null),Ie(null),ot([]),ue(null),He(!1),po([]),rs.current={cmd:!1,shift:!1},ee&&Zn())},[j,ee,Zn]),y.useEffect(()=>()=>{Ry()},[]),y.useEffect(()=>{if(!j)return;const N=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),O=":not([data-agentation-root]):not([data-agentation-root] *)",G=document.createElement("style");return G.id="feedback-cursor-styles",G.textContent=`
      body ${O} {
        cursor: crosshair !important;
      }

      body :is(${N})${O} {
        cursor: text !important;
      }
    `,document.head.appendChild(G),()=>{const Y=document.getElementById("feedback-cursor-styles");Y&&Y.remove()}},[j]),y.useEffect(()=>{if(ii!==null&&j)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[ii,j]),y.useEffect(()=>{if(!j||U||ws||We)return;const N=O=>{const G=O.composedPath()[0]||O.target;if(Ho(G,"[data-feedback-toolbar]")){ue(null);return}const Y=hr(O.clientX,O.clientY);if(!Y||Ho(Y,"[data-feedback-toolbar]")){ue(null);return}const{name:ie,elementName:ge,path:Fe,reactComponents:Xe}=im(Y,js),Je=Y.getBoundingClientRect();ue({element:ie,elementName:ge,elementPath:Fe,rect:Je,reactComponents:Xe}),ne({x:O.clientX,y:O.clientY})};return document.addEventListener("mousemove",N),()=>document.removeEventListener("mousemove",N)},[j,U,ws,We,js,Cn]);const ea=y.useCallback(N=>{var O;if(Pe(N),Ge(null),ct(null),zt([]),(O=N.elementBoundingBoxes)!=null&&O.length){const G=[];for(const Y of N.elementBoundingBoxes){const ie=Y.x+Y.width/2,ge=Y.y+Y.height/2-window.scrollY,Fe=hr(ie,ge);Fe&&G.push(Fe)}ot(G),Ie(null)}else if(N.boundingBox){const G=N.boundingBox,Y=G.x+G.width/2,ie=N.isFixed?G.y+G.height/2:G.y+G.height/2-window.scrollY,ge=hr(Y,ie);if(ge){const Fe=ge.getBoundingClientRect(),Xe=Fe.width/G.width,Je=Fe.height/G.height;Xe<.5||Je<.5?Ie(null):Ie(ge)}else Ie(null);ot([])}else Ie(null),ot([])},[]);y.useEffect(()=>{if(!j||ws||We)return;const N=O=>{var ds,fs;if(pt.current){pt.current=!1;return}const G=O.composedPath()[0]||O.target;if(Ho(G,"[data-feedback-toolbar]")||Ho(G,"[data-annotation-popup]")||Ho(G,"[data-annotation-marker]"))return;if(O.metaKey&&O.shiftKey&&!U&&!ae){O.preventDefault(),O.stopPropagation();const Sn=hr(O.clientX,O.clientY);if(!Sn)return;const On=Sn.getBoundingClientRect(),{name:Wt,path:qt,reactComponents:hs}=im(Sn,js),jn=vn.findIndex(to=>to.element===Sn);jn>=0?po(to=>to.filter((Eo,Jn)=>Jn!==jn)):po(to=>[...to,{element:Sn,rect:On,name:Wt,path:qt,reactComponents:hs!=null?hs:void 0}]);return}const Y=Ho(G,"button, a, input, select, textarea, [role='button'], [onclick]");if(Xt.blockInteractions&&Y&&(O.preventDefault(),O.stopPropagation()),U){if(Y&&!Xt.blockInteractions)return;O.preventDefault(),(ds=an.current)==null||ds.shake();return}if(ae){if(Y&&!Xt.blockInteractions)return;O.preventDefault(),(fs=fn.current)==null||fs.shake();return}O.preventDefault();const ie=hr(O.clientX,O.clientY);if(!ie)return;const{name:ge,path:Fe,reactComponents:Xe}=im(ie,js),Je=ie.getBoundingClientRect(),kt=O.clientX/window.innerWidth*100,Ot=rm(ie),Zt=Ot?O.clientY:O.clientY+window.scrollY,Jt=window.getSelection();let jt;Jt&&Jt.toString().trim().length>0&&(jt=Jt.toString().trim().slice(0,500));const mt=Xu(ie),us=qu(ie);he({x:kt,y:Zt,clientY:O.clientY,element:ge,elementPath:Fe,selectedText:jt,boundingBox:{x:Je.left,y:Ot?Je.top:Je.top+window.scrollY,width:Je.width,height:Je.height},nearbyText:sc(ie),cssClasses:oc(ie),isFixed:Ot,fullPath:Ku(ie),accessibility:Gu(ie),computedStyles:us,computedStylesObj:mt,nearbyElements:Fu(ie),reactComponents:Xe!=null?Xe:void 0,sourceFile:nd(ie),targetElement:ie}),ue(null)};return document.addEventListener("click",N,!0),()=>document.removeEventListener("click",N,!0)},[j,ws,We,U,ae,Xt.blockInteractions,js,vn]),y.useEffect(()=>{if(!j)return;const N=Y=>{Y.key==="Meta"&&(rs.current.cmd=!0),Y.key==="Shift"&&(rs.current.shift=!0)},O=Y=>{const ie=rs.current.cmd&&rs.current.shift;Y.key==="Meta"&&(rs.current.cmd=!1),Y.key==="Shift"&&(rs.current.shift=!1);const ge=rs.current.cmd&&rs.current.shift;ie&&!ge&&vn.length>0&&Vi()},G=()=>{rs.current={cmd:!1,shift:!1},po([])};return document.addEventListener("keydown",N),document.addEventListener("keyup",O),window.addEventListener("blur",G),()=>{document.removeEventListener("keydown",N),document.removeEventListener("keyup",O),window.removeEventListener("blur",G)}},[j,vn,Vi]),y.useEffect(()=>{if(!j||U||ws||We)return;const N=O=>{const G=O.composedPath()[0]||O.target;Ho(G,"[data-feedback-toolbar]")||Ho(G,"[data-annotation-marker]")||Ho(G,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(G.tagName)||G.isContentEditable||(O.preventDefault(),Q.current={x:O.clientX,y:O.clientY})};return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[j,U,ws,We]),y.useEffect(()=>{if(!j||U)return;const N=O=>{if(!Q.current)return;const G=O.clientX-Q.current.x,Y=O.clientY-Q.current.y,ie=G*G+Y*Y,ge=Ct*Ct;if(!T&&ie>=ge&&(de.current=Q.current,X(!0),O.preventDefault()),(T||ie>=ge)&&de.current){if(we.current){const Wt=Math.min(de.current.x,O.clientX),qt=Math.min(de.current.y,O.clientY),hs=Math.abs(O.clientX-de.current.x),jn=Math.abs(O.clientY-de.current.y);we.current.style.transform=`translate(${Wt}px, ${qt}px)`,we.current.style.width=`${hs}px`,we.current.style.height=`${jn}px`}const Fe=Date.now();if(Fe-Et.current<Ut)return;Et.current=Fe;const Xe=de.current.x,Je=de.current.y,kt=Math.min(Xe,O.clientX),Ot=Math.min(Je,O.clientY),Zt=Math.max(Xe,O.clientX),Jt=Math.max(Je,O.clientY),jt=(kt+Zt)/2,mt=(Ot+Jt)/2,us=new Set,ds=[[kt,Ot],[Zt,Ot],[kt,Jt],[Zt,Jt],[jt,mt],[jt,Ot],[jt,Jt],[kt,mt],[Zt,mt]];for(const[Wt,qt]of ds){const hs=document.elementsFromPoint(Wt,qt);for(const jn of hs)jn instanceof HTMLElement&&us.add(jn)}const fs=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Wt of fs)if(Wt instanceof HTMLElement){const qt=Wt.getBoundingClientRect(),hs=qt.left+qt.width/2,jn=qt.top+qt.height/2,to=hs>=kt&&hs<=Zt&&jn>=Ot&&jn<=Jt,Eo=Math.min(qt.right,Zt)-Math.max(qt.left,kt),Jn=Math.min(qt.bottom,Jt)-Math.max(qt.top,Ot),yi=Eo>0&&Jn>0?Eo*Jn:0,Ni=qt.width*qt.height,Ri=Ni>0?yi/Ni:0;(to||Ri>.5)&&us.add(Wt)}const Sn=[],On=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Wt of us){if(Ho(Wt,"[data-feedback-toolbar]")||Ho(Wt,"[data-annotation-marker]"))continue;const qt=Wt.getBoundingClientRect();if(!(qt.width>window.innerWidth*.8&&qt.height>window.innerHeight*.5)&&!(qt.width<10||qt.height<10)&&qt.left<Zt&&qt.right>kt&&qt.top<Jt&&qt.bottom>Ot){const hs=Wt.tagName;let jn=On.has(hs);if(!jn&&(hs==="DIV"||hs==="SPAN")){const to=Wt.textContent&&Wt.textContent.trim().length>0,Eo=Wt.onclick!==null||Wt.getAttribute("role")==="button"||Wt.getAttribute("role")==="link"||Wt.classList.contains("clickable")||Wt.hasAttribute("data-clickable");(to||Eo)&&!Wt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(jn=!0)}if(jn){let to=!1;for(const Eo of Sn)if(Eo.left<=qt.left&&Eo.right>=qt.right&&Eo.top<=qt.top&&Eo.bottom>=qt.bottom){to=!0;break}to||Sn.push(qt)}}}if(lt.current){const Wt=lt.current;for(;Wt.children.length>Sn.length;)Wt.removeChild(Wt.lastChild);Sn.forEach((qt,hs)=>{let jn=Wt.children[hs];jn||(jn=document.createElement("div"),jn.className=$e.selectedElementHighlight,Wt.appendChild(jn)),jn.style.transform=`translate(${qt.left}px, ${qt.top}px)`,jn.style.width=`${qt.width}px`,jn.style.height=`${qt.height}px`})}}};return document.addEventListener("mousemove",N,{passive:!0}),()=>document.removeEventListener("mousemove",N)},[j,U,T,Ct]),y.useEffect(()=>{if(!j)return;const N=O=>{const G=T,Y=de.current;if(T&&Y){pt.current=!0;const ie=Math.min(Y.x,O.clientX),ge=Math.min(Y.y,O.clientY),Fe=Math.max(Y.x,O.clientX),Xe=Math.max(Y.y,O.clientY),Je=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(jt=>{if(!(jt instanceof HTMLElement)||Ho(jt,"[data-feedback-toolbar]")||Ho(jt,"[data-annotation-marker]"))return;const mt=jt.getBoundingClientRect();mt.width>window.innerWidth*.8&&mt.height>window.innerHeight*.5||mt.width<10||mt.height<10||mt.left<Fe&&mt.right>ie&&mt.top<Xe&&mt.bottom>ge&&Je.push({element:jt,rect:mt})});const Ot=Je.filter(({element:jt})=>!Je.some(({element:mt})=>mt!==jt&&jt.contains(mt))),Zt=O.clientX/window.innerWidth*100,Jt=O.clientY+window.scrollY;if(Ot.length>0){const jt=Ot.reduce((On,{rect:Wt})=>({left:Math.min(On.left,Wt.left),top:Math.min(On.top,Wt.top),right:Math.max(On.right,Wt.right),bottom:Math.max(On.bottom,Wt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),mt=Ot.slice(0,5).map(({element:On})=>ul(On).name).join(", "),us=Ot.length>5?` +${Ot.length-5} more`:"",ds=Ot[0].element,fs=Xu(ds),Sn=qu(ds);he({x:Zt,y:Jt,clientY:O.clientY,element:`${Ot.length} elements: ${mt}${us}`,elementPath:"multi-select",boundingBox:{x:jt.left,y:jt.top+window.scrollY,width:jt.right-jt.left,height:jt.bottom-jt.top},isMultiSelect:!0,fullPath:Ku(ds),accessibility:Gu(ds),computedStyles:Sn,computedStylesObj:fs,nearbyElements:Fu(ds),cssClasses:oc(ds),nearbyText:sc(ds),sourceFile:nd(ds)})}else{const jt=Math.abs(Fe-ie),mt=Math.abs(Xe-ge);jt>20&&mt>20&&he({x:Zt,y:Jt,clientY:O.clientY,element:"Area selection",elementPath:`region at (${Math.round(ie)}, ${Math.round(ge)})`,boundingBox:{x:ie,y:ge+window.scrollY,width:jt,height:mt},isMultiSelect:!0})}ue(null)}else G&&(pt.current=!0);Q.current=null,de.current=null,X(!1),lt.current&&(lt.current.innerHTML="")};return document.addEventListener("mouseup",N),()=>document.removeEventListener("mouseup",N)},[j,T]);const Io=y.useCallback(async(N,O,G)=>{const Y=Xt.webhookUrl||S;if(!Y||!Xt.webhooksEnabled&&!G)return!1;try{return(await fetch(Y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:N,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...O})})).ok}catch(ie){return console.warn("[Agentation] Webhook failed:",ie),!1}},[S,Xt.webhookUrl,Xt.webhooksEnabled]),kr=y.useCallback(N=>{var G;if(!U)return;const O={id:Date.now().toString(),x:U.x,y:U.y,comment:N,element:U.element,elementPath:U.elementPath,timestamp:Date.now(),selectedText:U.selectedText,boundingBox:U.boundingBox,nearbyText:U.nearbyText,cssClasses:U.cssClasses,isMultiSelect:U.isMultiSelect,isFixed:U.isFixed,fullPath:U.fullPath,accessibility:U.accessibility,computedStyles:U.computedStyles,nearbyElements:U.nearbyElements,reactComponents:U.reactComponents,sourceFile:U.sourceFile,elementBoundingBoxes:U.elementBoundingBoxes,..._&&kn?{sessionId:kn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};z(Y=>[...Y,O]),dt.current=O.id,Vt(()=>{dt.current=null},300),Vt(()=>{Ts(Y=>new Set(Y).add(O.id))},250),a==null||a(O),Io("annotation.add",{annotation:O}),I(!0),Vt(()=>{he(null),I(!1)},150),(G=window.getSelection())==null||G.removeAllRanges(),_&&kn&&sl(_,kn,O).then(Y=>{Y.id!==O.id&&(z(ie=>ie.map(ge=>ge.id===O.id?{...ge,id:Y.id}:ge)),Ts(ie=>{const ge=new Set(ie);return ge.delete(O.id),ge.add(Y.id),ge}))}).catch(Y=>{console.warn("[Agentation] Failed to sync annotation:",Y)})},[U,a,Io,_,kn]),Be=y.useCallback(()=>{I(!0),Vt(()=>{he(null),I(!1)},150)},[]),Ze=y.useCallback(N=>{const O=M.findIndex(Y=>Y.id===N),G=M[O];(ae==null?void 0:ae.id)===N&&(v(!0),Vt(()=>{Pe(null),Ie(null),ot([]),v(!1)},150)),xt(N),uo(Y=>new Set(Y).add(N)),G&&(c==null||c(G),Io("annotation.delete",{annotation:G})),_&&Wa(_,N).catch(Y=>{console.warn("[Agentation] Failed to delete annotation from server:",Y)}),Vt(()=>{z(Y=>Y.filter(ie=>ie.id!==N)),uo(Y=>{const ie=new Set(Y);return ie.delete(N),ie}),xt(null),O<M.length-1&&(Oe(O),Vt(()=>Oe(null),200))},150)},[M,ae,c,Io,_]),wt=y.useCallback(N=>{var O;if(!N){Ge(null),ct(null),zt([]);return}if(Ge(N.id),(O=N.elementBoundingBoxes)!=null&&O.length){const G=[];for(const Y of N.elementBoundingBoxes){const ie=Y.x+Y.width/2,ge=Y.y+Y.height/2-window.scrollY,Xe=document.elementsFromPoint(ie,ge).find(Je=>!Je.closest("[data-annotation-marker]")&&!Je.closest("[data-agentation-root]"));Xe&&G.push(Xe)}zt(G),ct(null)}else if(N.boundingBox){const G=N.boundingBox,Y=G.x+G.width/2,ie=N.isFixed?G.y+G.height/2:G.y+G.height/2-window.scrollY,ge=hr(Y,ie);if(ge){const Fe=ge.getBoundingClientRect(),Xe=Fe.width/G.width,Je=Fe.height/G.height;Xe<.5||Je<.5?ct(null):ct(ge)}else ct(null);zt([])}else ct(null),zt([])},[]),st=y.useCallback(N=>{if(!ae)return;const O={...ae,comment:N};z(G=>G.map(Y=>Y.id===ae.id?O:Y)),u==null||u(O),Io("annotation.update",{annotation:O}),_&&Gy(_,ae.id,{comment:N}).catch(G=>{console.warn("[Agentation] Failed to update annotation on server:",G)}),v(!0),Vt(()=>{Pe(null),Ie(null),ot([]),v(!1)},150)},[ae,u,Io,_]),It=y.useCallback(()=>{v(!0),Vt(()=>{Pe(null),Ie(null),ot([]),v(!1)},150)},[]),Rt=y.useCallback(()=>{const N=M.length,O=qe.length>0||!!Qe;if(N===0&&Cn.length===0&&!O)return;if(d==null||d(M),Io("annotations.clear",{annotations:M}),_){Promise.all(M.map(ie=>Wa(_,ie.id).catch(ge=>{console.warn("[Agentation] Failed to delete annotation from server:",ge)})));for(const[,ie]of Bo.current)ie&&Wa(_,ie).catch(()=>{});Bo.current.clear();for(const[,ie]of Fo.current)ie&&Wa(_,ie).catch(()=>{});Fo.current.clear()}ve(!0),Te(!0),_i([]);const G=Lo.current;if(G){const ie=G.getContext("2d");ie&&ie.clearRect(0,0,G.width,G.height)}(qe.length>0||Qe)&&(vs(ie=>ie+1),oi(ie=>ie+1),Vt(()=>{_t([]),Tn(null)},200)),gt&&Ft(!1),Kt&&Mn(""),zn.current={rearrange:null,placements:[]},Ju(at);const Y=N*30+200;Vt(()=>{z([]),Ts(new Set),localStorage.removeItem(Md(at)),ve(!1)},Y),Vt(()=>Te(!1),1500)},[at,M,Cn,qe,Qe,gt,Kt,d,Io,_]),hn=y.useCallback(async()=>{const N=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:at,O=We&&gt;let G;if(O){if(qe.length===0&&!Qe&&!Kt)return;G=""}else{if(G=Zy(M,N,Xt.outputDetail),!G&&Cn.length===0&&qe.length===0&&!Qe)return;G||(G=`## Page Feedback: ${N}
`)}if(!O&&Cn.length>0){const Y=new Set;for(const Xe of M)Xe.drawingIndex!=null&&Y.add(Xe.drawingIndex);const ie=Lo.current;ie&&(ie.style.visibility="hidden");const ge=[],Fe=window.scrollY;for(let Xe=0;Xe<Cn.length;Xe++){if(Y.has(Xe))continue;const Je=Cn[Xe];if(Je.points.length<2)continue;const kt=Je.fixed?Je.points:Je.points.map(Hn=>({x:Hn.x,y:Hn.y-Fe}));let Ot=1/0,Zt=1/0,Jt=-1/0,jt=-1/0;for(const Hn of kt)Ot=Math.min(Ot,Hn.x),Zt=Math.min(Zt,Hn.y),Jt=Math.max(Jt,Hn.x),jt=Math.max(jt,Hn.y);const mt=Jt-Ot,us=jt-Zt,ds=Math.hypot(mt,us),fs=kt[0],Sn=kt[kt.length-1],On=Math.hypot(Sn.x-fs.x,Sn.y-fs.y);let Wt;const qt=On<ds*.35,hs=mt/Math.max(us,1);if(qt&&ds>20){const Hn=Math.max(mt,us)*.15;let Bi=0;for(const Yi of kt){const zc=Yi.x-Ot<Hn,Yd=Jt-Yi.x<Hn,Wd=Yi.y-Zt<Hn,Fd=jt-Yi.y<Hn;(zc||Yd)&&(Wd||Fd)&&Bi++}Wt=Bi>kt.length*.15?"box":"circle"}else hs>3&&us<40?Wt="underline":On>ds*.5?Wt="arrow":Wt="drawing";const jn=Math.min(10,kt.length),to=Math.max(1,Math.floor(kt.length/jn)),Eo=new Set,Jn=[],yi=[fs];for(let Hn=to;Hn<kt.length-1;Hn+=to)yi.push(kt[Hn]);yi.push(Sn);for(const Hn of yi){const Bi=hr(Hn.x,Hn.y);if(!Bi||Eo.has(Bi)||Ho(Bi,"[data-feedback-toolbar]"))continue;Eo.add(Bi);const{name:Yi}=ul(Bi);Jn.includes(Yi)||Jn.push(Yi)}const Ni=`${Math.round(Ot)},${Math.round(Zt)} → ${Math.round(Jt)},${Math.round(jt)}`;let Ri;(Wt==="circle"||Wt==="box")&&Jn.length>0?Ri=`${Wt==="box"?"Boxed":"Circled"} **${Jn[0]}**${Jn.length>1?` (and ${Jn.slice(1).join(", ")})`:""} (region: ${Ni})`:Wt==="underline"&&Jn.length>0?Ri=`Underlined **${Jn[0]}** (${Ni})`:Wt==="arrow"&&Jn.length>=2?Ri=`Arrow from **${Jn[0]}** to **${Jn[Jn.length-1]}** (${Math.round(fs.x)},${Math.round(fs.y)} → ${Math.round(Sn.x)},${Math.round(Sn.y)})`:Jn.length>0?Ri=`${Wt==="arrow"?"Arrow":"Drawing"} near **${Jn.join("**, **")}** (region: ${Ni})`:Ri=`Drawing at ${Ni}`,ge.push(Ri)}ie&&(ie.style.visibility=""),ge.length>0&&(G+=`
**Drawings:**
`,ge.forEach((Xe,Je)=>{G+=`${Je+1}. ${Xe}
`}))}if((qe.length>0||O&&Kt)&&(G+=`
`+Wy(qe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:gt,wireframePurpose:Kt||void 0},Xt.outputDetail)),Qe){const Y=Fy(Qe,Xt.outputDetail,{width:window.innerWidth,height:window.innerHeight});Y&&(G+=`
`+Y)}if(g)try{await navigator.clipboard.writeText(G)}catch{}h==null||h(G),A(!0),Vt(()=>A(!1),2e3),Xt.autoClearAfterCopy&&Vt(()=>Rt(),500)},[M,Cn,qe,Qe,gt,We,is,Kt,at,Xt.outputDetail,js,Xt.autoClearAfterCopy,Rt,g,h]),cn=y.useCallback(async()=>{const N=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:at;let O=Zy(M,N,Xt.outputDetail);if(!O&&qe.length===0&&!Qe)return;if(O||(O=`## Page Feedback: ${N}
`),qe.length>0&&(O+=`
`+Wy(qe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:gt,wireframePurpose:Kt||void 0},Xt.outputDetail)),Qe){const Y=Fy(Qe,Xt.outputDetail,{width:window.innerWidth,height:window.innerHeight});Y&&(O+=`
`+Y)}p&&p(O,M),q("sending"),await new Promise(Y=>Vt(Y,150));const G=await Io("submit",{output:O,annotations:M},!0);q(G?"sent":"failed"),Vt(()=>q("idle"),2500),G&&Xt.autoClearAfterCopy&&Vt(()=>Rt(),500)},[p,Io,M,qe,Qe,gt,is,at,Xt.outputDetail,js,Xt.autoClearAfterCopy,Rt]);y.useEffect(()=>{if(!Qn)return;const N=10,O=Y=>{const ie=Y.clientX-Qn.x,ge=Y.clientY-Qn.y,Fe=Math.sqrt(ie*ie+ge*ge);if(!Ws&&Fe>N&&Cs(!0),Ws||Fe>N){let Xe=Qn.toolbarX+ie,Je=Qn.toolbarY+ge;const kt=20,Ot=337,Zt=44,jt=Ot-(j?ys==="connected"?297:257:44),mt=kt-jt,us=window.innerWidth-kt-Ot;Xe=Math.max(mt,Math.min(us,Xe)),Je=Math.max(kt,Math.min(window.innerHeight-Zt-kt,Je)),Ys({x:Xe,y:Je})}},G=()=>{Ws&&(Ms.current=!0),Cs(!1),Mo(null)};return document.addEventListener("mousemove",O),document.addEventListener("mouseup",G),()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",G)}},[Qn,Ws,j,ys]);const cs=y.useCallback(N=>{var ge,Fe;if(N.target.closest("button")||N.target.closest("[data-agentation-settings-panel]"))return;const O=N.currentTarget.parentElement;if(!O)return;const G=O.getBoundingClientRect(),Y=(ge=tn==null?void 0:tn.x)!=null?ge:G.left,ie=(Fe=tn==null?void 0:tn.y)!=null?Fe:G.top;Mo({x:N.clientX,y:N.clientY,toolbarX:Y,toolbarY:ie})},[tn]);if(y.useEffect(()=>{if(!tn)return;const N=()=>{let ie=tn.x,ge=tn.y;const Je=20-(337-(j?ys==="connected"?297:257:44)),kt=window.innerWidth-20-337;ie=Math.max(Je,Math.min(kt,ie)),ge=Math.max(20,Math.min(window.innerHeight-44-20,ge)),(ie!==tn.x||ge!==tn.y)&&Ys({x:ie,y:ge})};return N(),window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[tn,j,ys]),y.useEffect(()=>{const N=O=>{const G=O.target,Y=G.tagName==="INPUT"||G.tagName==="TEXTAREA"||G.isContentEditable;if(O.key==="Escape"){if(We){ht?$t(null):$o();return}if(ws){Bs(!1);return}if(vn.length>0){po([]);return}U||j&&(qn(),k(!1))}if((O.metaKey||O.ctrlKey)&&O.shiftKey&&(O.key==="f"||O.key==="F")){O.preventDefault(),qn(),j?ri():k(!0);return}if(!(Y||O.metaKey||O.ctrlKey)&&((O.key==="p"||O.key==="P")&&(O.preventDefault(),qn(),eo()),(O.key==="l"||O.key==="L")&&(O.preventDefault(),qn(),ws&&Bs(!1),xe&&He(!1),U&&Be(),We?$o():vt(!0)),(O.key==="h"||O.key==="H")&&M.length>0&&(O.preventDefault(),qn(),D(ie=>!ie)),(O.key==="c"||O.key==="C")&&(M.length>0||qe.length>0||Qe)&&(O.preventDefault(),qn(),hn()),(O.key==="x"||O.key==="X")&&(M.length>0||qe.length>0||Qe)&&(O.preventDefault(),qn(),Rt(),qe.length>0&&_t([]),Qe&&Tn(null)),O.key==="s"||O.key==="S")){const ie=Gi(Xt.webhookUrl)||Gi(S||"");M.length>0&&ie&&te==="idle"&&(O.preventDefault(),qn(),cn())}};return document.addEventListener("keydown",N),()=>document.removeEventListener("keydown",N)},[j,ws,We,ht,qe,Qe,U,M.length,Xt.webhookUrl,S,te,cn,eo,hn,Rt,vn]),!Ve||$)return null;const ks=M.length>0,go=M.filter(N=>!Es.has(N.id)&&N.kind!=="placement"&&N.kind!=="rearrange"),ta=go.length>0,fo=M.filter(N=>Es.has(N.id)),ba=N=>{const ge=N.x/100*window.innerWidth,Fe=typeof N.y=="string"?parseFloat(N.y):N.y,Xe={};window.innerHeight-Fe-22-10<80&&(Xe.top="auto",Xe.bottom="calc(100% + 10px)");const kt=ge-200/2,Ot=10;if(kt<Ot){const Zt=Ot-kt;Xe.left=`calc(50% + ${Zt}px)`}else if(kt+200>window.innerWidth-Ot){const Zt=kt+200-(window.innerWidth-Ot);Xe.left=`calc(50% - ${Zt}px)`}return Xe};return Ec.createPortal(l.jsxs("div",{ref:K,style:{display:"contents"},"data-agentation-theme":Ls?"dark":"light","data-agentation-accent":Xt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${$e.toolbar}${C?` ${C}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:tn?{left:tn.x,top:tn.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${$e.toolbarContainer} ${j?$e.expanded:$e.collapsed} ${Oo?$e.entrance:""} ${V?$e.hiding:""} ${!Xt.webhooksEnabled&&(Gi(Xt.webhookUrl)||Gi(S||""))?$e.serverConnected:""}`,onClick:j?void 0:N=>{if(Ms.current){Ms.current=!1,N.preventDefault();return}k(!0)},onMouseDown:cs,role:j?void 0:"button",tabIndex:j?-1:0,title:j?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${$e.toggleContent} ${j?$e.hidden:$e.visible}`,children:[l.jsx(Rw,{size:24}),ta&&l.jsx("span",{className:`${$e.badge} ${j?$e.fadeOut:""} ${Oo?$e.entrance:""}`,children:go.length})]}),l.jsxs("div",{className:`${$e.controlsContent} ${j?$e.visible:$e.hidden} ${tn&&tn.y<100?$e.tooltipBelow:""} ${Nt||xe?$e.tooltipsHidden:""} ${Co?$e.tooltipsInSession:""}`,onMouseEnter:ko,onMouseLeave:Xo,children:[l.jsxs("div",{className:`${$e.buttonWrapper} ${tn&&tn.x<120?$e.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:$e.controlButton,onClick:N=>{N.stopPropagation(),qn(),eo()},"data-active":ee,children:l.jsx($w,{size:24,isPaused:ee})}),l.jsxs("span",{className:$e.buttonTooltip,children:[ee?"Resume animations":"Pause animations",l.jsx("span",{className:$e.shortcut,children:"P"})]})]}),l.jsxs("div",{className:$e.buttonWrapper,children:[l.jsx("button",{className:`${$e.controlButton} ${Ls?"":$e.light}`,onClick:N=>{N.stopPropagation(),qn(),ws&&Bs(!1),xe&&He(!1),U&&Be(),We?$o():vt(!0)},"data-active":We,style:We&&gt?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(Xw,{size:21})}),l.jsxs("span",{className:$e.buttonTooltip,children:[We?"Exit layout mode":"Layout mode",l.jsx("span",{className:$e.shortcut,children:"L"})]})]}),l.jsxs("div",{className:$e.buttonWrapper,children:[l.jsx("button",{className:$e.controlButton,onClick:N=>{N.stopPropagation(),qn(),D(!R)},disabled:!ks||We,children:l.jsx(zw,{size:24,isOpen:R})}),l.jsxs("span",{className:$e.buttonTooltip,children:[R?"Hide markers":"Show markers",l.jsx("span",{className:$e.shortcut,children:"H"})]})]}),l.jsxs("div",{className:$e.buttonWrapper,children:[l.jsx("button",{className:`${$e.controlButton} ${je?$e.statusShowing:""}`,onClick:N=>{N.stopPropagation(),qn(),hn()},disabled:We&&gt?qe.length===0&&!((Ko=Qe==null?void 0:Qe.sections)!=null&&Ko.length):!ks&&Cn.length===0&&qe.length===0&&!((Lc=Qe==null?void 0:Qe.sections)!=null&&Lc.length),"data-active":je,children:l.jsx(Lw,{size:24,copied:je,tint:We&&gt&&(qe.length>0||(xl=Qe==null?void 0:Qe.sections)!=null&&xl.length)?"#f97316":void 0})}),l.jsxs("span",{className:$e.buttonTooltip,children:[We&&gt?"Copy layout":"Copy feedback",l.jsx("span",{className:$e.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${$e.buttonWrapper} ${$e.sendButtonWrapper} ${j&&!Xt.webhooksEnabled&&(Gi(Xt.webhookUrl)||Gi(S||""))?$e.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${$e.controlButton} ${te==="sent"||te==="failed"?$e.statusShowing:""}`,onClick:N=>{N.stopPropagation(),qn(),cn()},disabled:!ks||!Gi(Xt.webhookUrl)&&!Gi(S||"")||te==="sending","data-no-hover":te==="sent"||te==="failed",tabIndex:Gi(Xt.webhookUrl)||Gi(S||"")?0:-1,children:[l.jsx(Ow,{size:24,state:te}),ks&&te==="idle"&&l.jsx("span",{className:$e.buttonBadge,children:M.length})]}),l.jsxs("span",{className:$e.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:$e.shortcut,children:"S"})]})]}),l.jsxs("div",{className:$e.buttonWrapper,children:[l.jsx("button",{className:$e.controlButton,onClick:N=>{N.stopPropagation(),qn(),Rt()},disabled:!ks&&Cn.length===0&&qe.length===0&&!((bl=Qe==null?void 0:Qe.sections)!=null&&bl.length),"data-danger":!0,children:l.jsx(Pw,{size:24})}),l.jsxs("span",{className:$e.buttonTooltip,children:["Clear all",l.jsx("span",{className:$e.shortcut,children:"X"})]})]}),l.jsxs("div",{className:$e.buttonWrapper,children:[l.jsx("button",{className:$e.controlButton,onClick:N=>{N.stopPropagation(),qn(),We&&$o(),He(!xe)},children:l.jsx(Iw,{size:24})}),_&&ys!=="disconnected"&&l.jsx("span",{className:`${$e.mcpIndicator} ${$e[ys]} ${xe?$e.hidden:""}`,title:ys==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:$e.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:$e.divider}),l.jsxs("div",{className:`${$e.buttonWrapper} ${tn&&typeof window<"u"&&tn.x>window.innerWidth-120?$e.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:$e.controlButton,onClick:N=>{N.stopPropagation(),qn(),ri()},children:l.jsx(Hw,{size:24})}),l.jsxs("span",{className:$e.buttonTooltip,children:["Exit",l.jsx("span",{className:$e.shortcut,children:"Esc"})]})]})]}),l.jsx(w4,{visible:We&&j,activeType:ht,onSelect:N=>{$t(ht===N?null:N)},isDarkMode:Ls,sectionCount:(va=Qe==null?void 0:Qe.sections.length)!=null?va:0,onDetectSections:()=>{var Fe,Xe;const N=R4(),O=(Fe=Qe==null?void 0:Qe.sections)!=null?Fe:[],G=new Set(O.map(Je=>Je.selector)),Y=N.filter(Je=>!G.has(Je.selector)),ie=[...O,...Y],ge=[...(Xe=Qe==null?void 0:Qe.originalOrder)!=null?Xe:[],...Y.map(Je=>Je.id)];Tn({sections:ie,originalOrder:ge,detectedAt:Date.now()})},placementCount:qe.length,onClearPlacements:()=>{vs(N=>N+1),oi(N=>N+1),Vt(()=>{Tn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:gt,onBlankCanvasChange:N=>{const O={sections:[],originalOrder:[],detectedAt:Date.now()};N?(io.current={rearrange:Qe,placements:qe},Tn(zn.current.rearrange||O),_t(zn.current.placements),$t(null)):(zn.current={rearrange:Qe,placements:qe},Tn(io.current.rearrange||O),_t(io.current.placements)),Ft(N)},wireframePurpose:Kt,onWireframePurposeChange:Mn,Tooltip:xr,onDragStart:(N,O)=>{var Zt;O.preventDefault();const G=St[N];let Y=null,ie=!1;const ge=O.clientX,Fe=O.clientY,Xe=O.target.closest("[data-feedback-toolbar]"),Je=(Zt=Xe==null?void 0:Xe.getBoundingClientRect().top)!=null?Zt:window.innerHeight,kt=Jt=>{const jt=Jt.clientX-ge,mt=Jt.clientY-Fe;if(!ie&&(Math.abs(jt)>4||Math.abs(mt)>4)&&(ie=!0,Y=document.createElement("div"),Y.className=`${Ee.dragPreview}${gt?` ${Ee.dragPreviewWireframe}`:""}`,document.body.appendChild(Y)),!Y)return;const us=Math.max(0,Je-Jt.clientY),ds=Math.min(1,us/180),fs=1-Math.pow(1-ds,2),Sn=28,On=20,Wt=Math.min(140,G.width*.18),qt=Math.min(90,G.height*.18),hs=Sn+(Wt-Sn)*fs,jn=On+(qt-On)*fs;Y.style.width=`${hs}px`,Y.style.height=`${jn}px`,Y.style.left=`${Jt.clientX-hs/2}px`,Y.style.top=`${Jt.clientY-jn/2}px`,Y.style.opacity=`${.5+.5*fs}`,Y.textContent=fs>.25?N:""},Ot=Jt=>{if(window.removeEventListener("mousemove",kt),window.removeEventListener("mouseup",Ot),Y&&document.body.removeChild(Y),ie){const jt=G.width,mt=G.height,us=window.scrollY,ds=Math.max(0,Jt.clientX-jt/2),fs=Math.max(0,Jt.clientY+us-mt/2),Sn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:N,x:ds,y:fs,width:jt,height:mt,scrollY:us,timestamp:Date.now()};_t(On=>[...On,Sn]),$t(null),No.current=new Set,ao(On=>On+1)}};window.addEventListener("mousemove",kt),window.addEventListener("mouseup",Ot)}}),l.jsx(U6,{settings:Xt,onSettingsChange:N=>Di(O=>({...O,...N})),isDarkMode:Ls,onToggleTheme:Os,isDevMode:jo,connectionStatus:ys,endpoint:_,isVisible:Ye,toolbarNearBottom:!!tn&&tn.y<230,settingsPage:yt,onSettingsPageChange:Ue,onHideToolbar:ai})]})}),(We||Pt)&&l.jsx("div",{className:`${Ee.blankCanvas} ${Ln?Ee.visible:""} ${en?Ee.gridActive:""}`,style:{"--canvas-opacity":xn},"data-feedback-toolbar":!0}),We&&gt&&Ln&&l.jsxs("div",{className:Ee.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:Ee.wireframeOpacityRow,children:[l.jsx("span",{className:Ee.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:Ee.wireframeOpacitySlider,min:0,max:1,step:.01,value:xn,onChange:N=>oo(Number(N.target.value))})]}),l.jsxs("div",{className:Ee.wireframeNoticeTitleRow,children:[l.jsx("span",{className:Ee.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:Ee.wireframeNoticeDivider}),l.jsx("button",{className:Ee.wireframeStartOver,onClick:()=>{vs(N=>N+1),Tn({sections:[],originalOrder:[],detectedAt:Date.now()}),zn.current={rearrange:null,placements:[]},Mn(""),Ju(at)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(We||Pt)&&l.jsx(g4,{placements:qe,onChange:_t,activeComponent:Pt?null:ht,onActiveComponentChange:$t,isDarkMode:Ls,exiting:Pt,onInteractionChange:bn,passthrough:!ht,extraSnapRects:Qe==null?void 0:Qe.sections.map(N=>N.currentRect),deselectSignal:Rs,clearSignal:gs,wireframe:gt,onSelectionChange:(N,O)=>{No.current=N,O||(Zs.current=new Set,bs(G=>G+1))},onDragMove:(N,O)=>{const G=Zs.current;if(!(!G.size||!Qe)){if(!Xn.current){Xn.current=new Map;for(const Y of Qe.sections)G.has(Y.id)&&Xn.current.set(Y.id,{x:Y.currentRect.x,y:Y.currentRect.y})}for(const Y of Qe.sections){if(!G.has(Y.id)||!Xn.current.get(Y.id))continue;const ge=document.querySelector(`[data-rearrange-section="${Y.id}"]`);ge&&(ge.style.transform=`translate(${N}px, ${O}px)`)}}},onDragEnd:(N,O,G)=>{const Y=Zs.current,ie=Xn.current;if(Xn.current=null,!(!Y.size||!Qe||!ie)){for(const ge of Y){const Fe=document.querySelector(`[data-rearrange-section="${ge}"]`);Fe&&(Fe.style.transform="")}G&&Tn(ge=>ge&&{...ge,sections:ge.sections.map(Fe=>{const Xe=ie.get(Fe.id);return Xe?{...Fe,currentRect:{...Fe.currentRect,x:Math.max(0,Xe.x+N),y:Math.max(0,Xe.y+O)}}:Fe})})}}}),(We||Pt)&&Qe&&l.jsx(O4,{rearrangeState:Qe,onChange:Tn,isDarkMode:Ls,exiting:Pt,blankCanvas:gt,extraSnapRects:qe.map(N=>({x:N.x,y:N.y,width:N.width,height:N.height})),clearSignal:on,deselectSignal:ro,onSelectionChange:(N,O)=>{Zs.current=N,O||(No.current=new Set,ao(G=>G+1))},onDragMove:(N,O)=>{const G=No.current;if(G.size){if(!Xn.current){Xn.current=new Map;for(const Y of qe)G.has(Y.id)&&Xn.current.set(Y.id,{x:Y.x,y:Y.y})}for(const Y of G){const ie=document.querySelector(`[data-design-placement="${Y}"]`);ie&&(ie.style.transform=`translate(${N}px, ${O}px)`)}}},onDragEnd:(N,O,G)=>{const Y=No.current,ie=Xn.current;if(Xn.current=null,!(!Y.size||!ie)){for(const ge of Y){const Fe=document.querySelector(`[data-design-placement="${ge}"]`);Fe&&(Fe.style.transform="")}G&&_t(ge=>ge.map(Fe=>{const Xe=ie.get(Fe.id);return Xe?{...Fe,x:Math.max(0,Xe.x+N),y:Math.max(0,Xe.y+O)}:Fe}))}}}),l.jsx("canvas",{ref:Lo,className:`${$e.drawCanvas} ${ws?$e.active:""}`,style:{opacity:ls?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:$e.markersLayer,"data-feedback-toolbar":!0,children:[re&&go.filter(N=>!N.isFixed).map((N,O,G)=>l.jsx(Jy,{annotation:N,globalIndex:go.findIndex(Y=>Y.id===N.id),layerIndex:O,layerSize:G.length,isExiting:Se,isClearing:Ne,isAnimated:_o.has(N.id),isHovered:!Se&&tt===N.id,isDeleting:Mt===N.id,isEditingAny:!!ae,renumberFrom:Qt,markerClickBehavior:Xt.markerClickBehavior,tooltipStyle:ba(N),onHoverEnter:Y=>!Se&&Y.id!==dt.current&&wt(Y),onHoverLeave:()=>wt(null),onClick:Y=>Xt.markerClickBehavior==="delete"?Ze(Y.id):ea(Y),onContextMenu:ea},N.id)),re&&!Se&&fo.filter(N=>!N.isFixed).map(N=>l.jsx(e1,{annotation:N},N.id))]}),l.jsxs("div",{className:$e.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[re&&go.filter(N=>N.isFixed).map((N,O,G)=>l.jsx(Jy,{annotation:N,globalIndex:go.findIndex(Y=>Y.id===N.id),layerIndex:O,layerSize:G.length,isExiting:Se,isClearing:Ne,isAnimated:_o.has(N.id),isHovered:!Se&&tt===N.id,isDeleting:Mt===N.id,isEditingAny:!!ae,renumberFrom:Qt,markerClickBehavior:Xt.markerClickBehavior,tooltipStyle:ba(N),onHoverEnter:Y=>!Se&&Y.id!==dt.current&&wt(Y),onHoverLeave:()=>wt(null),onClick:Y=>Xt.markerClickBehavior==="delete"?Ze(Y.id):ea(Y),onContextMenu:ea},N.id)),re&&!Se&&fo.filter(N=>N.isFixed).map(N=>l.jsx(e1,{annotation:N,fixed:!0},N.id))]}),j&&l.jsxs("div",{className:$e.overlay,"data-feedback-toolbar":!0,style:U||ae?{zIndex:99999}:void 0,children:[(J==null?void 0:J.rect)&&!U&&!bt&&!T&&l.jsx("div",{className:`${$e.hoverHighlight} ${$e.enter}`,style:{left:J.rect.left,top:J.rect.top,width:J.rect.width,height:J.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),vn.filter(N=>document.contains(N.element)).map((N,O)=>{const G=N.element.getBoundingClientRect(),Y=vn.length>1;return l.jsx("div",{className:Y?$e.multiSelectOutline:$e.singleSelectOutline,style:{position:"fixed",left:G.left,top:G.top,width:G.width,height:G.height,...Y?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},O)}),tt&&!U&&(()=>{var ie;const N=M.find(ge=>ge.id===tt);if(!(N!=null&&N.boundingBox))return null;if((ie=N.elementBoundingBoxes)!=null&&ie.length)return et.length>0?et.filter(ge=>document.contains(ge)).map((ge,Fe)=>{const Xe=ge.getBoundingClientRect();return l.jsx("div",{className:`${$e.multiSelectOutline} ${$e.enter}`,style:{left:Xe.left,top:Xe.top,width:Xe.width,height:Xe.height}},`hover-outline-live-${Fe}`)}):N.elementBoundingBoxes.map((ge,Fe)=>l.jsx("div",{className:`${$e.multiSelectOutline} ${$e.enter}`,style:{left:ge.x,top:ge.y-it,width:ge.width,height:ge.height}},`hover-outline-${Fe}`));const O=ze&&document.contains(ze)?ze.getBoundingClientRect():null,G=O?{x:O.left,y:O.top,width:O.width,height:O.height}:{x:N.boundingBox.x,y:N.isFixed?N.boundingBox.y:N.boundingBox.y-it,width:N.boundingBox.width,height:N.boundingBox.height},Y=N.isMultiSelect;return l.jsx("div",{className:`${Y?$e.multiSelectOutline:$e.singleSelectOutline} ${$e.enter}`,style:{left:G.x,top:G.y,width:G.width,height:G.height,...Y?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),J&&!U&&!bt&&!T&&l.jsxs("div",{className:`${$e.hoverTooltip} ${$e.enter}`,style:{left:Math.max(8,Math.min(L.x,window.innerWidth-100)),top:Math.max(L.y-(J.reactComponents?48:32),8)},children:[J.reactComponents&&l.jsx("div",{className:$e.hoverReactPath,children:J.reactComponents}),l.jsx("div",{className:$e.hoverElementName,children:J.elementName})]}),U&&l.jsxs(l.Fragment,{children:[(wa=U.multiSelectElements)!=null&&wa.length?U.multiSelectElements.filter(N=>document.contains(N)).map((N,O)=>{const G=N.getBoundingClientRect();return l.jsx("div",{className:`${$e.multiSelectOutline} ${Nn?$e.exit:$e.enter}`,style:{left:G.left,top:G.top,width:G.width,height:G.height}},`pending-multi-${O}`)}):U.targetElement&&document.contains(U.targetElement)?(()=>{const N=U.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${$e.singleSelectOutline} ${Nn?$e.exit:$e.enter}`,style:{left:N.left,top:N.top,width:N.width,height:N.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():U.boundingBox&&l.jsx("div",{className:`${U.isMultiSelect?$e.multiSelectOutline:$e.singleSelectOutline} ${Nn?$e.exit:$e.enter}`,style:{left:U.boundingBox.x,top:U.boundingBox.y-it,width:U.boundingBox.width,height:U.boundingBox.height,...U.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const N=U.x,O=U.isFixed?U.y:U.y-it;return l.jsxs(l.Fragment,{children:[l.jsx(N6,{x:N,y:O,isMultiSelect:U.isMultiSelect,isExiting:Nn}),l.jsx(kd,{ref:an,element:U.element,selectedText:U.selectedText,computedStyles:U.computedStylesObj,placeholder:U.element==="Area selection"?"What should change in this area?":U.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:kr,onCancel:Be,isExiting:Nn,lightMode:!Ls,accentColor:U.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,N/100*window.innerWidth)),...O>window.innerHeight-290?{bottom:window.innerHeight-O+20}:{top:O+20}}})]})})()]}),ae&&l.jsxs(l.Fragment,{children:[(Oc=ae.elementBoundingBoxes)!=null&&Oc.length?ut.length>0?ut.filter(N=>document.contains(N)).map((N,O)=>{const G=N.getBoundingClientRect();return l.jsx("div",{className:`${$e.multiSelectOutline} ${$e.enter}`,style:{left:G.left,top:G.top,width:G.width,height:G.height}},`edit-multi-live-${O}`)}):ae.elementBoundingBoxes.map((N,O)=>l.jsx("div",{className:`${$e.multiSelectOutline} ${$e.enter}`,style:{left:N.x,top:N.y-it,width:N.width,height:N.height}},`edit-multi-${O}`)):(()=>{const N=Ke&&document.contains(Ke)?Ke.getBoundingClientRect():null,O=N?{x:N.left,y:N.top,width:N.width,height:N.height}:ae.boundingBox?{x:ae.boundingBox.x,y:ae.isFixed?ae.boundingBox.y:ae.boundingBox.y-it,width:ae.boundingBox.width,height:ae.boundingBox.height}:null;return O?l.jsx("div",{className:`${ae.isMultiSelect?$e.multiSelectOutline:$e.singleSelectOutline} ${$e.enter}`,style:{left:O.x,top:O.y,width:O.width,height:O.height,...ae.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(kd,{ref:fn,element:ae.element,selectedText:ae.selectedText,computedStyles:E4(ae.computedStyles),placeholder:"Edit your feedback...",initialValue:ae.comment,submitLabel:"Save",onSubmit:st,onCancel:It,onDelete:()=>Ze(ae.id),isExiting:oe,lightMode:!Ls,accentColor:ae.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const N=ae.isFixed?ae.y:ae.y-it;return{left:Math.max(160,Math.min(window.innerWidth-160,ae.x/100*window.innerWidth)),...N>window.innerHeight-290?{bottom:window.innerHeight-N+20}:{top:N+20}}})()})]}),T&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:we,className:$e.dragSelection}),l.jsx("div",{ref:lt,className:$e.highlightsContainer})]})]})]}),document.body)}const gp=y.createContext({});function Ac(t){const n=y.useRef(null);return n.current===null&&(n.current=t()),n.current}const W6=typeof window<"u",yp=W6?y.useLayoutEffect:y.useEffect,Od=y.createContext(null);function xp(t,n){t.indexOf(n)===-1&&t.push(n)}function fl(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const Ji=(t,n,i)=>i>n?n:i<t?t:i;let bp=()=>{};const Ka={},nb=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function sb(t){return typeof t=="object"&&t!==null}const ob=t=>/^0[^.\s]+$/u.test(t);function ib(t){let n;return()=>(n===void 0&&(n=t()),n)}const Ei=t=>t,F6=(t,n)=>i=>n(t(i)),Dc=(...t)=>t.reduce(F6),hl=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class vp{constructor(){this.subscriptions=[]}add(n){return xp(this.subscriptions,n),()=>fl(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const si=t=>t*1e3,Ti=t=>t/1e3;function ab(t,n){return n?t*(1e3/n):0}const X6=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},rb=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,q6=1e-7,G6=12;function K6(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=rb(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>q6&&++h<G6);return d}function Nc(t,n,i,a){if(t===n&&i===a)return Ei;const c=u=>K6(u,0,1,t,i);return u=>u===0||u===1?u:rb(c(u),n,a)}const lb=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,cb=t=>n=>1-t(1-n),ub=Nc(.33,1.53,.69,.99),wp=cb(ub),db=lb(wp),fb=t=>t>=1?1:(t*=2)<1?.5*wp(t):.5*(2-Math.pow(2,-10*(t-1))),Sp=t=>1-Math.sin(Math.acos(t)),hb=cb(Sp),mb=lb(Sp),Q6=Nc(.42,0,1,1),Z6=Nc(0,0,.58,1),pb=Nc(.42,0,.58,1),_b=t=>Array.isArray(t)&&typeof t[0]!="number";function gb(t,n){return _b(t)?t[X6(0,t.length,n)]:t}const yb=t=>Array.isArray(t)&&typeof t[0]=="number",J6={linear:Ei,easeIn:Q6,easeInOut:pb,easeOut:Z6,circIn:Sp,circInOut:mb,circOut:hb,backIn:wp,backInOut:db,backOut:ub,anticipate:fb},eC=t=>typeof t=="string",o1=t=>{if(yb(t)){bp(t.length===4);const[n,i,a,c]=t;return Nc(n,i,a,c)}else if(eC(t))return J6[t];return t},sd=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function tC(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(_){d.has(_)&&(g.schedule(_),t()),_(h)}const g={schedule:(_,x=!1,b=!1)=>{const C=b&&c?i:a;return x&&d.add(_),C.add(_),_},cancel:_=>{a.delete(_),d.delete(_)},process:_=>{if(h=_,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,g.process(_))}};return g}const nC=40;function xb(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=sd.reduce((R,D)=>(R[D]=tC(u),R),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:_,update:x,preRender:b,render:S,postRender:C}=d,j=()=>{const R=Ka.useManualTiming,D=R?c.timestamp:performance.now();i=!1,R||(c.delta=a?1e3/60:Math.max(Math.min(D-c.timestamp,nC),1)),c.timestamp=D,c.isProcessing=!0,h.process(c),p.process(c),g.process(c),_.process(c),x.process(c),b.process(c),S.process(c),C.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(j))},k=()=>{i=!0,a=!0,c.isProcessing||t(j)};return{schedule:sd.reduce((R,D)=>{const $=d[D];return R[D]=(F,V=!1,H=!1)=>(i||k(),$.schedule(F,V,H)),R},{}),cancel:R=>{for(let D=0;D<sd.length;D++)d[sd[D]].cancel(R)},state:c,steps:d}}const{schedule:Fn,cancel:xa,state:wo,steps:lm}=xb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ei,!0);let hd;function sC(){hd=void 0}const Vo={now:()=>(hd===void 0&&Vo.set(wo.isProcessing||Ka.useManualTiming?wo.timestamp:performance.now()),hd),set:t=>{hd=t,queueMicrotask(sC)}},bb=t=>n=>typeof n=="string"&&n.startsWith(t),vb=bb("--"),oC=bb("var(--"),Cp=t=>oC(t)?iC.test(t.split("/*")[0].trim()):!1,iC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function i1(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const pl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Sc={...pl,transform:t=>Ji(0,1,t)},od={...pl,default:1},gc=t=>Math.round(t*1e5)/1e5,kp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function aC(t){return t==null}const rC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,jp=(t,n)=>i=>!!(typeof i=="string"&&rC.test(i)&&i.startsWith(t)||n&&!aC(i)&&Object.prototype.hasOwnProperty.call(i,n)),wb=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(kp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},lC=t=>Ji(0,255,t),cm={...pl,transform:t=>Math.round(lC(t))},br={test:jp("rgb","red"),parse:wb("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+cm.transform(t)+", "+cm.transform(n)+", "+cm.transform(i)+", "+gc(Sc.transform(a))+")"};function cC(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const $m={test:jp("#"),parse:cC,transform:br.transform},Rc=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Fa=Rc("deg"),Zi=Rc("%"),Dt=Rc("px"),uC=Rc("vh"),dC=Rc("vw"),a1={...Zi,parse:t=>Zi.parse(t)/100,transform:t=>Zi.transform(t*100)},rl={test:jp("hsl","hue"),parse:wb("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+Zi.transform(gc(n))+", "+Zi.transform(gc(i))+", "+gc(Sc.transform(a))+")"},Qs={test:t=>br.test(t)||$m.test(t)||rl.test(t),parse:t=>br.test(t)?br.parse(t):rl.test(t)?rl.parse(t):$m.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?br.transform(t):rl.transform(t),getAnimatableNone:t=>{const n=Qs.parse(t);return n.alpha=0,Qs.transform(n)}},fC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function hC(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(kp))==null?void 0:n.length)||0)+(((i=t.match(fC))==null?void 0:i.length)||0)>0}const Sb="number",Cb="color",mC="var",pC="var(",r1="${}",_C=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ml(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(_C,p=>(Qs.test(p)?(a.color.push(u),c.push(Cb),i.push(Qs.parse(p))):p.startsWith(pC)?(a.var.push(u),c.push(mC),i.push(p)):(a.number.push(u),c.push(Sb),i.push(parseFloat(p))),++u,r1)).split(r1);return{values:i,split:h,indexes:a,types:c}}function gC(t){return ml(t).values}function kb({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===Sb?c+=gc(a[u]):d===Cb?c+=Qs.transform(a[u]):c+=a[u]}return c}}function yC(t){return kb(ml(t))}const xC=t=>typeof t=="number"?0:Qs.test(t)?Qs.getAnimatableNone(t):t,bC=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:xC(t);function vC(t){const n=ml(t);return kb(n)(n.values.map((a,c)=>bC(a,n.split[c])))}const Ui={test:hC,parse:gC,createTransformer:yC,getAnimatableNone:vC};function um(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function wC({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=um(p,h,t+1/3),u=um(p,h,t),d=um(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Td(t,n){return i=>i>0?n:t}const ss=(t,n,i)=>t+(n-t)*i,dm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},SC=[$m,br,rl],CC=t=>SC.find(n=>n.test(t));function l1(t){const n=CC(t);if(!n)return!1;let i=n.parse(t);return n===rl&&(i=wC(i)),i}const c1=(t,n)=>{const i=l1(t),a=l1(n);if(!i||!a)return Td(t,n);const c={...i};return u=>(c.red=dm(i.red,a.red,u),c.green=dm(i.green,a.green,u),c.blue=dm(i.blue,a.blue,u),c.alpha=ss(i.alpha,a.alpha,u),br.transform(c))},Im=new Set(["none","hidden"]);function kC(t,n){return Im.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function jC(t,n){return i=>ss(t,n,i)}function Mp(t){return typeof t=="number"?jC:typeof t=="string"?Cp(t)?Td:Qs.test(t)?c1:EC:Array.isArray(t)?jb:typeof t=="object"?Qs.test(t)?c1:MC:Td}function jb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>Mp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function MC(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=Mp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function TC(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const EC=(t,n)=>{const i=Ui.createTransformer(n),a=ml(t),c=ml(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Im.has(t)&&!c.values.length||Im.has(n)&&!a.values.length?kC(t,n):Dc(jb(TC(a,c),c.values),i):Td(t,n)};function Mb(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?ss(t,n,i):Mp(t)(t,n)}const AC=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>Fn.update(n,i),stop:()=>xa(n),now:()=>wo.isProcessing?wo.timestamp:Vo.now()}},Tb=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Ed=2e4;function Tp(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Ed;)n+=i,a=t.next(n);return n>=Ed?1/0:n}function Eb(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(Tp(a),Ed);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Ti(c)}}const Ns={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Pm(t,n){return t*Math.sqrt(1-n*n)}const DC=12;function NC(t,n,i){let a=i;for(let c=1;c<DC;c++)a=a-t(a)/n(a);return a}const fm=.001;function RC({duration:t=Ns.duration,bounce:n=Ns.bounce,velocity:i=Ns.velocity,mass:a=Ns.mass}){let c,u,d=1-n;d=Ji(Ns.minDamping,Ns.maxDamping,d),t=Ji(Ns.minDuration,Ns.maxDuration,Ti(t)),d<1?(c=g=>{const _=g*d,x=_*t,b=_-i,S=Pm(g,d),C=Math.exp(-x);return fm-b/S*C},u=g=>{const x=g*d*t,b=x*i+i,S=Math.pow(d,2)*Math.pow(g,2)*t,C=Math.exp(-x),j=Pm(Math.pow(g,2),d);return(-c(g)+fm>0?-1:1)*((b-S)*C)/j}):(c=g=>{const _=Math.exp(-g*t),x=(g-i)*t+1;return-fm+_*x},u=g=>{const _=Math.exp(-g*t),x=(i-g)*(t*t);return _*x});const h=5/t,p=NC(c,u,h);if(t=si(t),isNaN(p))return{stiffness:Ns.stiffness,damping:Ns.damping,duration:t};{const g=Math.pow(p,2)*a;return{stiffness:g,damping:d*2*Math.sqrt(a*g),duration:t}}}const BC=["duration","bounce"],LC=["stiffness","damping","mass"];function u1(t,n){return n.some(i=>t[i]!==void 0)}function OC(t){let n={velocity:Ns.velocity,stiffness:Ns.stiffness,damping:Ns.damping,mass:Ns.mass,isResolvedFromDuration:!1,...t};if(!u1(t,LC)&&u1(t,BC))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*Ji(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Ns.mass,stiffness:c,damping:u}}else{const i=RC({...t,velocity:0});n={...n,...i,mass:Ns.mass},n.isResolvedFromDuration=!0}return n}function Cc(t=Ns.visualDuration,n=Ns.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:g,mass:_,duration:x,velocity:b,isResolvedFromDuration:S}=OC({...i,velocity:-Ti(i.velocity||0)}),C=b||0,j=g/(2*Math.sqrt(p*_)),k=d-u,M=Ti(Math.sqrt(p/_)),z=Math.abs(k)<5;a||(a=z?Ns.restSpeed.granular:Ns.restSpeed.default),c||(c=z?Ns.restDelta.granular:Ns.restDelta.default);let R,D,$,F,V,H;if(j<1)$=Pm(M,j),F=(C+j*M*k)/$,R=re=>{const le=Math.exp(-j*M*re);return d-le*(F*Math.sin($*re)+k*Math.cos($*re))},V=j*M*F+k*$,H=j*M*k-F*$,D=re=>Math.exp(-j*M*re)*(V*Math.sin($*re)+H*Math.cos($*re));else if(j===1){R=le=>d-Math.exp(-M*le)*(k+(C+M*k)*le);const re=C+M*k;D=le=>Math.exp(-M*le)*(M*re*le-C)}else{const re=M*Math.sqrt(j*j-1);R=J=>{const ue=Math.exp(-j*M*J),L=Math.min(re*J,300);return d-ue*((C+j*M*k)*Math.sinh(L)+re*k*Math.cosh(L))/re};const le=(C+j*M*k)/re,Se=j*M*le-k*re,Ae=j*M*k-le*re;D=J=>{const ue=Math.exp(-j*M*J),L=Math.min(re*J,300);return ue*(Se*Math.sinh(L)+Ae*Math.cosh(L))}}const K={calculatedDuration:S&&x||null,velocity:re=>si(D(re)),next:re=>{if(!S&&j<1){const Se=Math.exp(-j*M*re),Ae=Math.sin($*re),J=Math.cos($*re),ue=d-Se*(F*Ae+k*J),L=si(Se*(V*Ae+H*J));return h.done=Math.abs(L)<=a&&Math.abs(d-ue)<=c,h.value=h.done?d:ue,h}const le=R(re);if(S)h.done=re>=x;else{const Se=si(D(re));h.done=Math.abs(Se)<=a&&Math.abs(d-le)<=c}return h.value=h.done?d:le,h},toString:()=>{const re=Math.min(Tp(K),Ed),le=Tb(Se=>K.next(re*Se).value,re,30);return re+"ms "+le},toTransition:()=>{}};return K}Cc.applyToOptions=t=>{const n=Eb(t,100,Cc);return t.ease=n.ease,t.duration=si(n.duration),t.type="keyframes",t};const zC=5;function Ab(t,n,i){const a=Math.max(n-zC,0);return ab(i-t(a),n-a)}function Hm({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:g=.5,restSpeed:_}){const x=t[0],b={done:!1,value:x},S=H=>h!==void 0&&H<h||p!==void 0&&H>p,C=H=>h===void 0?p:p===void 0||Math.abs(h-H)<Math.abs(p-H)?h:p;let j=i*n;const k=x+j,M=d===void 0?k:d(k);M!==k&&(j=M-x);const z=H=>-j*Math.exp(-H/a),R=H=>M+z(H),D=H=>{const K=z(H),re=R(H);b.done=Math.abs(K)<=g,b.value=b.done?M:re};let $,F;const V=H=>{S(b.value)&&($=H,F=Cc({keyframes:[b.value,C(b.value)],velocity:Ab(R,H,b.value),damping:c,stiffness:u,restDelta:g,restSpeed:_}))};return V(0),{calculatedDuration:null,next:H=>{let K=!1;return!F&&$===void 0&&(K=!0,D(H),V(H)),$!==void 0&&H>=$?F.next(H-$):(!K&&D(H),b)}}}function $C(t,n,i){const a=[],c=i||Ka.mix||Mb,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||Ei:n;h=Dc(p,h)}a.push(h)}return a}function Db(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(bp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=$C(n,a,c),p=h.length,g=_=>{if(d&&_<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(_<t[x+1]);x++);const b=hl(t[x],t[x+1],_);return h[x](b)};return i?_=>g(Ji(t[0],t[u-1],_)):g}function Nb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=hl(0,n,a);t.push(ss(i,1,c))}}function Rb(t){const n=[0];return Nb(n,t.length-1),n}function IC(t,n){return t.map(i=>i*n)}function PC(t,n){return t.map(()=>n||pb).splice(0,t.length-1)}function yc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=_b(a)?a.map(o1):o1(a),u={done:!1,value:n[0]},d=IC(i&&i.length===n.length?i:Rb(n),t),h=Db(d,n,{ease:Array.isArray(c)?c:PC(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const HC=t=>t!==null;function zd(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(HC),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const UC={decay:Hm,inertia:Hm,tween:yc,keyframes:yc,spring:Cc};function Bb(t){typeof t.type=="string"&&(t.type=UC[t.type])}class Ep{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const VC=t=>t/100;class Ad extends Ep{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==Vo.now()&&this.tick(Vo.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Bb(n);const{type:i=yc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||yc;p!==yc&&typeof h[0]!="number"&&(this.mixKeyframes=Dc(VC,Mb(h[0],h[1])),h=[0,100]);const g=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=Tp(g));const{calculatedDuration:_}=g;this.calculatedDuration=_,this.resolvedDuration=_+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=g}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:g=0,keyframes:_,repeat:x,repeatType:b,repeatDelay:S,type:C,onUpdate:j,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const M=this.currentTime-g*(this.playbackSpeed>=0?1:-1),z=this.playbackSpeed>=0?M<0:M>c;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let R=this.currentTime,D=a;if(x){const H=Math.min(this.currentTime,c)/h;let K=Math.floor(H),re=H%1;!re&&H>=1&&(re=1),re===1&&K--,K=Math.min(K,x+1),!!(K%2)&&(b==="reverse"?(re=1-re,S&&(re-=S/h)):b==="mirror"&&(D=d)),R=Ji(0,1,re)*h}let $;z?(this.delayState.value=_[0],$=this.delayState):$=D.next(R),u&&!z&&($.value=u($.value));let{done:F}=$;!z&&p!==null&&(F=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const V=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return V&&C!==Hm&&($.value=zd(_,this.options,k,this.speed)),j&&j($.value),V&&this.finish(),$}then(n,i){return this.finished.then(n,i)}get duration(){return Ti(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Ti(n)}get time(){return Ti(this.currentTime)}set time(n){n=si(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Ab(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(Vo.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Ti(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=AC,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Vo.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function YC(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const vr=t=>t*180/Math.PI,Um=t=>{const n=vr(Math.atan2(t[1],t[0]));return Vm(n)},WC={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Um,rotateZ:Um,skewX:t=>vr(Math.atan(t[1])),skewY:t=>vr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Vm=t=>(t=t%360,t<0&&(t+=360),t),d1=Um,f1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),h1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),FC={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:f1,scaleY:h1,scale:t=>(f1(t)+h1(t))/2,rotateX:t=>Vm(vr(Math.atan2(t[6],t[5]))),rotateY:t=>Vm(vr(Math.atan2(-t[2],t[0]))),rotateZ:d1,rotate:d1,skewX:t=>vr(Math.atan(t[4])),skewY:t=>vr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Ym(t){return t.includes("scale")?1:0}function Wm(t,n){if(!t||t==="none")return Ym(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=FC,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=WC,c=h}if(!c)return Ym(n);const u=a[n],d=c[1].split(",").map(qC);return typeof u=="function"?u(d):d[u]}const XC=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Wm(i,n)};function qC(t){return parseFloat(t.trim())}const _l=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],gl=new Set(_l),m1=t=>t===pl||t===Dt,GC=new Set(["x","y","z"]),KC=_l.filter(t=>!GC.has(t));function QC(t){const n=[];return KC.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const Ga={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Wm(n,"x"),y:(t,{transform:n})=>Wm(n,"y")};Ga.translateX=Ga.x;Ga.translateY=Ga.y;const wr=new Set;let Fm=!1,Xm=!1,qm=!1;function Lb(){if(Xm){const t=Array.from(wr).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=QC(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Xm=!1,Fm=!1,wr.forEach(t=>t.complete(qm)),wr.clear()}function Ob(){wr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Xm=!0)})}function ZC(){qm=!0,Ob(),Lb(),qm=!1}class Ap{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(wr.add(this),Fm||(Fm=!0,Fn.read(Ob),Fn.resolveKeyframes(Lb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}YC(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),wr.delete(this)}cancel(){this.state==="scheduled"&&(wr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const JC=t=>t.startsWith("--");function zb(t,n,i){JC(n)?t.style.setProperty(n,i):t.style[n]=i}const e3={};function $b(t,n){const i=ib(t);return()=>{var a;return(a=e3[n])!=null?a:i()}}const t3=$b(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Ib=$b(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),fc=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,p1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:fc([0,.65,.55,1]),circOut:fc([.55,0,1,.45]),backIn:fc([.31,.01,.66,-.59]),backOut:fc([.33,1.53,.69,.99])};function Pb(t,n){if(t)return typeof t=="function"?Ib()?Tb(t,n):"ease-out":yb(t)?fc(t):Array.isArray(t)?t.map(i=>Pb(i,n)||p1.easeOut):p1[t]}function n3(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},g=void 0){const _={[n]:i};p&&(_.offset=p);const x=Pb(h,c);Array.isArray(x)&&(_.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return g&&(b.pseudoElement=g),t.animate(_,b)}function Dp(t){return typeof t=="function"&&"applyToOptions"in t}function s3({type:t,...n}){var i,a;return Dp(t)&&Ib()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Hb extends Ep{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,bp(typeof n.type!="string");const g=s3(n);this.animation=n3(i,a,c,g,u),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const _=zd(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(_),zb(i,a,_),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Ti(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Ti(n)}get time(){return Ti(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=si(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&t3()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),Ei):c(this)}}const Ub={anticipate:fb,backInOut:db,circInOut:mb};function o3(t){return t in Ub}function i3(t){typeof t.ease=="string"&&o3(t.ease)&&(t.ease=Ub[t.ease])}const hm=10;class a3 extends Hb{constructor(n){i3(n),Bb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Ad({...d,autoplay:!1}),p=Math.max(hm,Vo.now()-this.startTime),g=Ji(0,hm,p-hm),_=h.sample(p).value,{name:x}=this.options;u&&x&&zb(u,x,_),i.setWithVelocity(h.sample(Math.max(0,p-g)).value,_,g),h.stop()}}const _1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ui.test(t)||t==="0")&&!t.startsWith("url("));function r3(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function l3(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=_1(c,n),h=_1(u,n);return!d||!h?!1:r3(t)||(i==="spring"||Dp(i))&&a}function Gm(t){t.duration=0,t.type="keyframes"}const Vb=new Set(["opacity","clipPath","filter","transform"]),c3=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function u3(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&c3.test(t[n]))return!0;return!1}const d3=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),f3=ib(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function h3(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:_}=n.owner.getProps();return f3()&&i&&(Vb.has(i)||d3.has(i)&&u3(h))&&(i!=="transform"||!_)&&!g&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const m3=40;class p3 extends Ep{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:g,element:_,...x}){var C;super(),this.stop=()=>{var j,k;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(k=this.keyframeResolver)==null||k.cancel()},this.createdAt=Vo.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:g,element:_,...x},S=(_==null?void 0:_.KeyframeResolver)||Ap;this.keyframeResolver=new S(h,(j,k,M)=>this.onKeyframesResolved(j,k,b,!M),p,g,_),(C=this.keyframeResolver)==null||C.scheduleResolve()}onKeyframesResolved(n,i,a,c){var M,z;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:g,onUpdate:_}=a;this.resolvedAt=Vo.now();let x=!0;l3(n,u,d,h)||(x=!1,(Ka.instantAnimations||!p)&&(_==null||_(zd(n,a,i))),n[0]=n[n.length-1],Gm(a),a.repeat=0);const S={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>m3?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},C=x&&!g&&h3(S),j=(z=(M=S.motionValue)==null?void 0:M.owner)==null?void 0:z.current;let k;if(C)try{k=new a3({...S,element:j})}catch{k=new Ad(S)}else k=new Ad(S);k.finished.then(()=>{this.notifyFinished()}).catch(Ei),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),ZC()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class _3{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return g1(this.animations,"duration")}get iterationDuration(){return g1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function g1(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class g3 extends _3{then(n,i){return this.finished.finally(n).then(()=>{})}}function Yb(t,n,i,a=0,c=1){const u=Array.from(t).sort((g,_)=>g.sortNodePosition(_)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const y3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function x3(t){const n=y3.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function Wb(t,n,i=1){const[a,c]=x3(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return nb(d)?parseFloat(d):d}return Cp(c)?Wb(c,n,i+1):c}const b3={type:"spring",stiffness:500,damping:25,restSpeed:10},v3=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),w3={type:"keyframes",duration:.8},S3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},C3=(t,{keyframes:n})=>n.length>2?w3:gl.has(t)?t.startsWith("scale")?v3(n[1]):b3:S3;function Fb(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Np(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?Fb(i,t):i}const k3=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function j3(t){for(const n in t)if(!k3.has(n))return!0;return!1}const Rp=(t,n,i,a={},c,u)=>d=>{const h=Np(a,t)||{},p=h.delay||a.delay||0;let{elapsed:g=0}=a;g=g-si(p);const _={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-g,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};j3(h)||Object.assign(_,C3(t,_)),_.duration&&(_.duration=si(_.duration)),_.repeatDelay&&(_.repeatDelay=si(_.repeatDelay)),_.from!==void 0&&(_.keyframes[0]=_.from);let x=!1;if((_.type===!1||_.duration===0&&!_.repeatDelay)&&(Gm(_),_.delay===0&&(x=!0)),(Ka.instantAnimations||Ka.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,Gm(_),_.delay=0),_.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=zd(_.keyframes,h);if(b!==void 0){Fn.update(()=>{_.onUpdate(b),_.onComplete()});return}}return h.isSync?new Ad(_):new p3(_)};function y1(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Bp(t,n,i,a){if(typeof n=="function"){const[c,u]=y1(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=y1(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function Sr(t,n,i){const a=t.getProps();return Bp(a,n,i!==void 0?i:a.custom,t)}const Xb=new Set(["width","height","top","left","right","bottom",..._l]),x1=30,M3=t=>!isNaN(parseFloat(t)),xc={current:void 0};class T3{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=Vo.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Vo.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=M3(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new vp);const a=this.events[n].add(i);return n==="change"?()=>{a(),Fn.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return xc.current&&xc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=Vo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>x1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,x1);return ab(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Qa(t,n){return new T3(t,n)}const Km=t=>Array.isArray(t);function E3(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,Qa(i))}function A3(t){return Km(t)?t[t.length-1]||0:t}function D3(t,n){const i=Sr(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=A3(u[d]);E3(t,d,h)}}const so=t=>!!(t&&t.getVelocity);function N3(t){return!!(so(t)&&t.add)}function Qm(t,n){const i=t.getValue("willChange");if(N3(i))return i.add(n);if(!i&&Ka.WillChange){const a=new Ka.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Lp(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const R3="framerAppearId",qb="data-"+Lp(R3);function Gb(t){return t.props[qb]}function B3({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Op(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?Fb(u,p):p;const g=u==null?void 0:u.reduceMotion;a&&(u=a);const _=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const S in h){const C=t.getValue(S,(b=t.latestValues[S])!=null?b:null),j=h[S];if(j===void 0||x&&B3(x,S))continue;const k={delay:i,...Np(u||{},S)},M=C.get();if(M!==void 0&&!C.isAnimating()&&!Array.isArray(j)&&j===M&&!k.velocity){Fn.update(()=>C.set(j));continue}let z=!1;if(window.MotionHandoffAnimation){const $=Gb(t);if($){const F=window.MotionHandoffAnimation($,S,Fn);F!==null&&(k.startTime=F,z=!0)}}Qm(t,S);const R=g!=null?g:t.shouldReduceMotion;C.start(Rp(S,C,j,R&&Xb.has(S)?{type:!1}:k,t,z));const D=C.animation;D&&_.push(D)}if(d){const S=()=>Fn.update(()=>{d&&D3(t,d)});_.length?Promise.all(_).then(S):S()}return _}function Zm(t,n,i={}){var p;const a=Sr(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Op(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:_=0,staggerChildren:x,staggerDirection:b}=c;return L3(t,n,g,_,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[g,_]=h==="beforeChildren"?[u,d]:[d,u];return g().then(()=>_())}else return Promise.all([u(),d(i.delay)])}function L3(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Zm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Yb(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function O3(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Zm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Zm(t,n,i);else{const c=typeof n=="function"?Sr(t,n,i.custom):n;a=Promise.all(Op(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const z3={test:t=>t==="auto",parse:t=>t},Kb=t=>n=>n.test(t),Qb=[pl,Dt,Zi,Fa,dC,uC,z3],b1=t=>Qb.find(Kb(t));function $3(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||ob(t):!0}const I3=new Set(["brightness","contrast","saturate","opacity"]);function P3(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(kp)||[];if(!a)return t;const c=i.replace(a,"");let u=I3.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const H3=/\b([a-z-]*)\(.*?\)/gu,Jm={...Ui,getAnimatableNone:t=>{const n=t.match(H3);return n?n.map(P3).join(" "):t}},ep={...Ui,getAnimatableNone:t=>{const n=Ui.parse(t);return Ui.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},v1={...pl,transform:Math.round},U3={rotate:Fa,rotateX:Fa,rotateY:Fa,rotateZ:Fa,scale:od,scaleX:od,scaleY:od,scaleZ:od,skew:Fa,skewX:Fa,skewY:Fa,distance:Dt,translateX:Dt,translateY:Dt,translateZ:Dt,x:Dt,y:Dt,z:Dt,perspective:Dt,transformPerspective:Dt,opacity:Sc,originX:a1,originY:a1,originZ:Dt},zp={borderWidth:Dt,borderTopWidth:Dt,borderRightWidth:Dt,borderBottomWidth:Dt,borderLeftWidth:Dt,borderRadius:Dt,borderTopLeftRadius:Dt,borderTopRightRadius:Dt,borderBottomRightRadius:Dt,borderBottomLeftRadius:Dt,width:Dt,maxWidth:Dt,height:Dt,maxHeight:Dt,top:Dt,right:Dt,bottom:Dt,left:Dt,inset:Dt,insetBlock:Dt,insetBlockStart:Dt,insetBlockEnd:Dt,insetInline:Dt,insetInlineStart:Dt,insetInlineEnd:Dt,padding:Dt,paddingTop:Dt,paddingRight:Dt,paddingBottom:Dt,paddingLeft:Dt,paddingBlock:Dt,paddingBlockStart:Dt,paddingBlockEnd:Dt,paddingInline:Dt,paddingInlineStart:Dt,paddingInlineEnd:Dt,margin:Dt,marginTop:Dt,marginRight:Dt,marginBottom:Dt,marginLeft:Dt,marginBlock:Dt,marginBlockStart:Dt,marginBlockEnd:Dt,marginInline:Dt,marginInlineStart:Dt,marginInlineEnd:Dt,fontSize:Dt,backgroundPositionX:Dt,backgroundPositionY:Dt,...U3,zIndex:v1,fillOpacity:Sc,strokeOpacity:Sc,numOctaves:v1},V3={...zp,color:Qs,backgroundColor:Qs,outlineColor:Qs,fill:Qs,stroke:Qs,borderColor:Qs,borderTopColor:Qs,borderRightColor:Qs,borderBottomColor:Qs,borderLeftColor:Qs,filter:Jm,WebkitFilter:Jm,mask:ep,WebkitMask:ep},Zb=t=>V3[t],Y3=new Set([Jm,ep]);function Jb(t,n){let i=Zb(t);return Y3.has(i)||(i=Ui),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const W3=new Set(["auto","none","0"]);function F3(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!W3.has(u)&&ml(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=Jb(i,c)}class X3 extends Ap{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let _=0;_<n.length;_++){let x=n[_];if(typeof x=="string"&&(x=x.trim(),Cp(x))){const b=Wb(x,i.current);b!==void 0&&(n[_]=b),_===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!Xb.has(a)||n.length!==2)return;const[c,u]=n,d=b1(c),h=b1(u),p=i1(c),g=i1(u);if(p!==g&&Ga[a]){this.needsMeasurement=!0;return}if(d!==h)if(m1(d)&&m1(h))for(let _=0;_<n.length;_++){const x=n[_];typeof x=="string"&&(n[_]=parseFloat(x))}else Ga[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||$3(n[c]))&&a.push(c);a.length&&F3(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ga[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=Ga[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{n.getValue(p).set(g)}),this.resolveNoneKeyframes()}}function $p(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const e5=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function md(t){return sb(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Ip}=xb(queueMicrotask,!1),Pi={x:!1,y:!1};function t5(){return Pi.x||Pi.y}function q3(t){return t==="x"||t==="y"?Pi[t]?null:(Pi[t]=!0,()=>{Pi[t]=!1}):Pi.x||Pi.y?null:(Pi.x=Pi.y=!0,()=>{Pi.x=Pi.y=!1})}function n5(t,n){const i=$p(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function G3(t){return!(t.pointerType==="touch"||t5())}function K3(t,n,i={}){const[a,c,u]=n5(t,i);return a.forEach(d=>{let h=!1,p=!1,g;const _=()=>{d.removeEventListener("pointerleave",C)},x=k=>{g&&(g(k),g=void 0),_()},b=k=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(k))},S=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},C=k=>{if(k.pointerType!=="touch"){if(h){p=!0;return}x(k)}},j=k=>{if(!G3(k))return;p=!1;const M=n(d,k);typeof M=="function"&&(g=M,d.addEventListener("pointerleave",C,c))};d.addEventListener("pointerenter",j,c),d.addEventListener("pointerdown",S,c)}),u}const s5=(t,n)=>n?t===n?!0:s5(t,n.parentElement):!1,Pp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Q3=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Z3(t){return Q3.has(t.tagName)||t.isContentEditable===!0}const J3=new Set(["INPUT","SELECT","TEXTAREA"]);function ek(t){return J3.has(t.tagName)||t.isContentEditable===!0}const pd=new WeakSet;function w1(t){return n=>{n.key==="Enter"&&t(n)}}function mm(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const tk=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=w1(()=>{if(pd.has(i))return;mm(i,"down");const c=w1(()=>{mm(i,"up")}),u=()=>mm(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function S1(t){return Pp(t)&&!t5()}const C1=new WeakSet;function nk(t,n,i={}){const[a,c,u]=n5(t,i),d=h=>{const p=h.currentTarget;if(!S1(h)||C1.has(h))return;pd.add(p),i.stopPropagation&&C1.add(h);const g=n(p,h),_=(S,C)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),pd.has(p)&&pd.delete(p),S1(S)&&typeof g=="function"&&g(S,{success:C})},x=S=>{_(S,p===window||p===document||i.useGlobalTarget||s5(p,S.target))},b=S=>{_(S,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),md(h)&&(h.addEventListener("focus",g=>tk(g,c)),!Z3(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function $d(t){return sb(t)&&"ownerSVGElement"in t}const _d=new WeakMap;let Xa;const o5=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:$d(a)&&"getBBox"in a?a.getBBox()[n]:a[i],sk=o5("inline","width","offsetWidth"),ok=o5("block","height","offsetHeight");function ik({target:t,borderBoxSize:n}){var i;(i=_d.get(t))==null||i.forEach(a=>{a(t,{get width(){return sk(t,n)},get height(){return ok(t,n)}})})}function ak(t){t.forEach(ik)}function rk(){typeof ResizeObserver>"u"||(Xa=new ResizeObserver(ak))}function lk(t,n){Xa||rk();const i=$p(t);return i.forEach(a=>{let c=_d.get(a);c||(c=new Set,_d.set(a,c)),c.add(n),Xa==null||Xa.observe(a)}),()=>{i.forEach(a=>{const c=_d.get(a);c==null||c.delete(n),c!=null&&c.size||Xa==null||Xa.unobserve(a)})}}const gd=new Set;let ll;function ck(){ll=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};gd.forEach(n=>n(t))},window.addEventListener("resize",ll)}function uk(t){return gd.add(t),ll||ck(),()=>{gd.delete(t),!gd.size&&typeof ll=="function"&&(window.removeEventListener("resize",ll),ll=void 0)}}function k1(t,n){return typeof t=="function"?uk(t):lk(t,n)}function i5(t){return $d(t)&&t.tagName==="svg"}function dk(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Db(c,u,d);return n?h(a):h}const fk=[...Qb,Qs,Ui],hk=t=>fk.find(Kb(t)),j1=()=>({translate:0,scale:1,origin:0,originPoint:0}),cl=()=>({x:j1(),y:j1()}),M1=()=>({min:0,max:0}),Ks=()=>({x:M1(),y:M1()}),kc=new WeakMap;function Id(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function jc(t){return typeof t=="string"||Array.isArray(t)}const Hp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Up=["initial",...Hp];function Pd(t){return Id(t.animate)||Up.some(n=>jc(t[n]))}function a5(t){return!!(Pd(t)||t.variants)}function mk(t,n,i){for(const a in n){const c=n[a],u=i[a];if(so(c))t.addValue(a,c);else if(so(u))t.addValue(a,Qa(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,Qa(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const tp={current:null},r5={current:!1},pk=typeof window<"u";function _k(){if(r5.current=!0,!!pk)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>tp.current=t.matches;t.addEventListener("change",n),n()}else tp.current=!1}const T1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Dd={};function l5(t){Dd=t}function gk(){return Dd}class c5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ap,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Vo.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Fn.render(this.render,!1,!0))};const{latestValues:g,renderState:_}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=i.initial?{...g}:{},this.renderState=_,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Pd(i),this.isVariantNode=a5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const S in b){const C=b[S];g[S]!==void 0&&so(C)&&C.set(g[S])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,kc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(r5.current||_k(),this.shouldReduceMotion=tp.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),xa(this.notifyUpdate),xa(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Vb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:g,duration:_}=i.accelerate,x=new Hb({element:this.current,name:n,keyframes:h,times:p,ease:g,duration:si(_)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=gl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&Fn.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Dd){const i=Dd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ks()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<T1.length;a++){const c=T1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=mk(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=Qa(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(nb(a)||ob(a))?a=parseFloat(a):!hk(a)&&Ui.test(i)&&(a=Jb(n,i)),this.setBaseTarget(n,so(a)?a.get():a)),so(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Bp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!so(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new vp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Ip.render(this.render)}}class u5 extends c5{constructor(){super(...arguments),this.KeyframeResolver=X3}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;so(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class Za{constructor(n){this.isMounted=!1,this.node=n}update(){}}function d5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function yk({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function xk(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function pm(t){return t===void 0||t===1}function np({scale:t,scaleX:n,scaleY:i}){return!pm(t)||!pm(n)||!pm(i)}function gr(t){return np(t)||f5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function f5(t){return E1(t.x)||E1(t.y)}function E1(t){return t&&t!=="0%"}function Nd(t,n,i){const a=t-i,c=n*a;return i+c}function A1(t,n,i,a,c){return c!==void 0&&(t=Nd(t,c,a)),Nd(t,i,a)+n}function sp(t,n=0,i=1,a,c){t.min=A1(t.min,n,i,a,c),t.max=A1(t.max,n,i,a,c)}function h5(t,{x:n,y:i}){sp(t.x,n.translate,n.scale,n.originPoint),sp(t.y,i.translate,i.scale,i.originPoint)}const D1=.999999999999,N1=1.0000000000001;function bk(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:g}=u.options;g&&g.props.style&&g.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(Qi(t.x,-u.scroll.offset.x),Qi(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,h5(t,d)),a&&gr(u.latestValues)&&yd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<N1&&n.x>D1&&(n.x=1),n.y<N1&&n.y>D1&&(n.y=1)}function Qi(t,n){t.min+=n,t.max+=n}function R1(t,n,i,a,c=.5){const u=ss(t.min,t.max,c);sp(t,n,i,u,a)}function B1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function yd(t,n,i){const a=i!=null?i:t;R1(t.x,B1(n.x,a.x),n.scaleX,n.scale,n.originX),R1(t.y,B1(n.y,a.y),n.scaleY,n.scale,n.originY)}function m5(t,n){return d5(xk(t.getBoundingClientRect(),n))}function vk(t,n,i){const a=m5(t,i),{scroll:c}=n;return c&&(Qi(a.x,c.offset.x),Qi(a.y,c.offset.y)),a}const wk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Sk=_l.length;function Ck(t,n,i){let a="",c=!0;for(let u=0;u<Sk;u++){const d=_l[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const g=parseFloat(h);p=d.startsWith("scale")?g===1:g===0}if(!p||i){const g=e5(h,zp[d]);if(!p){c=!1;const _=wk[d]||d;a+=`${_}(${g}) `}i&&(n[d]=g)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Vp(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const g=n[p];if(gl.has(p)){d=!0;continue}else if(vb(p)){c[p]=g;continue}else{const _=e5(g,zp[p]);p.startsWith("origin")?(h=!0,u[p]=_):a[p]=_}}if(n.transform||(d||i?a.transform=Ck(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:_=0}=u;a.transformOrigin=`${p} ${g} ${_}`}}function p5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function L1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const cc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(Dt.test(t))t=parseFloat(t);else return t;const i=L1(t,n.target.x),a=L1(t,n.target.y);return`${i}% ${a}%`}},kk={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=Ui.parse(t);if(c.length>5)return a;const u=Ui.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const g=ss(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),u(c)}},op={borderRadius:{...cc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:cc,borderTopRightRadius:cc,borderBottomLeftRadius:cc,borderBottomRightRadius:cc,boxShadow:kk};function _5(t,{layout:n,layoutId:i}){return gl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!op[t]||t==="opacity")}function Yp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(so(a[h])||c&&so(c[h])||_5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function jk(t){return window.getComputedStyle(t)}class g5 extends u5{constructor(){super(...arguments),this.type="html",this.renderInstance=p5}readValueFromInstance(n,i){var a;if(gl.has(i))return(a=this.projection)!=null&&a.isProjecting?Ym(i):XC(n,i);{const c=jk(n),u=(vb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return m5(n,i)}build(n,i,a){Vp(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Yp(n,i,a)}}function Mk(t,n){return t in n}class Tk extends c5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(Mk(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return Ks()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const Ek={offset:"stroke-dashoffset",array:"stroke-dasharray"},Ak={offset:"strokeDashoffset",array:"strokeDasharray"};function Dk(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?Ek:Ak;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const Nk=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function y5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,g,_){var S,C;if(Vp(t,h,g),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(S=x.transformOrigin)!=null?S:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(C=_==null?void 0:_.transformBox)!=null?C:"fill-box",delete x.transformBox);for(const j of Nk)x[j]!==void 0&&(b[j]=x[j],delete x[j]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&Dk(x,c,u,d,!1)}const x5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),b5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Rk(t,n,i,a){p5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(x5.has(c)?c:Lp(c),n.attrs[c])}function v5(t,n,i){const a=Yp(t,n,i);for(const c in t)if(so(t[c])||so(n[c])){const u=_l.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class w5 extends u5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ks}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(gl.has(i)){const a=Zb(i);return a&&a.default||0}return i=x5.has(i)?i:Lp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return v5(n,i,a)}build(n,i,a){y5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){Rk(n,i,a,c)}mount(n){this.isSVGTag=b5(n.tagName),super.mount(n)}}const Bk=Up.length;function S5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?S5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<Bk;i++){const a=Up[i],c=t.props[a];(jc(c)||c===!1)&&(n[a]=c)}return n}function C5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const Lk=[...Hp].reverse(),Ok=Hp.length;function zk(t){return n=>Promise.all(n.map(({animation:i,options:a})=>O3(t,i,a)))}function $k(t){let n=zk(t),i=O1(),a=!0,c=!1;const u=g=>(_,x)=>{var S;const b=Sr(t,x,g==="exit"?(S=t.presenceContext)==null?void 0:S.custom:void 0);if(b){const{transition:C,transitionEnd:j,...k}=b;_={..._,...k,...j}}return _};function d(g){n=g(t)}function h(g){const{props:_}=t,x=S5(t.parent)||{},b=[],S=new Set;let C={},j=1/0;for(let M=0;M<Ok;M++){const z=Lk[M],R=i[z],D=_[z]!==void 0?_[z]:x[z],$=jc(D),F=z===g?R.isActive:null;F===!1&&(j=M);let V=D===x[z]&&D!==_[z]&&$;if(V&&(a||c)&&t.manuallyAnimateOnMount&&(V=!1),R.protectedKeys={...C},!R.isActive&&F===null||!D&&!R.prevProp||Id(D)||typeof D=="boolean")continue;if(z==="exit"&&R.isActive&&F!==!0){R.prevResolvedValues&&(C={...C,...R.prevResolvedValues});continue}const H=Ik(R.prevProp,D);let K=H||z===g&&R.isActive&&!V&&$||M>j&&$,re=!1;const le=Array.isArray(D)?D:[D];let Se=le.reduce(u(z),{});F===!1&&(Se={});const{prevResolvedValues:Ae={}}=R,J={...Ae,...Se},ue=U=>{K=!0,S.has(U)&&(re=!0,S.delete(U)),R.needsAnimating[U]=!0;const he=t.getValue(U);he&&(he.liveStyle=!1)};for(const U in J){const he=Se[U],je=Ae[U];if(C.hasOwnProperty(U))continue;let A=!1;Km(he)&&Km(je)?A=!C5(he,je):A=he!==je,A?he!=null?ue(U):S.add(U):he!==void 0&&S.has(U)?ue(U):R.protectedKeys[U]=!0}R.prevProp=D,R.prevResolvedValues=Se,R.isActive&&(C={...C,...Se}),(a||c)&&t.blockInitialAnimation&&(K=!1);const L=V&&H;K&&(!L||re)&&b.push(...le.map(U=>{const he={type:z};if(typeof U=="string"&&(a||c)&&!L&&t.manuallyAnimateOnMount&&t.parent){const{parent:je}=t,A=Sr(je,U);if(je.enteringChildren&&A){const{delayChildren:te}=A.transition||{};he.delay=Yb(je.enteringChildren,t,te)}}return{animation:U,options:he}}))}if(S.size){const M={};if(typeof _.initial!="boolean"){const z=Sr(t,Array.isArray(_.initial)?_.initial[0]:_.initial);z&&z.transition&&(M.transition=z.transition)}S.forEach(z=>{const R=t.getBaseTarget(z),D=t.getValue(z);D&&(D.liveStyle=!0),M[z]=R!=null?R:null}),b.push({animation:M})}let k=!!b.length;return a&&(_.initial===!1||_.initial===_.animate)&&!t.manuallyAnimateOnMount&&(k=!1),a=!1,c=!1,k?n(b):Promise.resolve()}function p(g,_){var b;if(i[g].isActive===_)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(S=>{var C;return(C=S.animationState)==null?void 0:C.setActive(g,_)}),i[g].isActive=_;const x=h(g);for(const S in i)i[S].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=O1(),c=!0}}}function Ik(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!C5(n,t):!1}function pr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function O1(){return{animate:pr(!0),whileInView:pr(),whileHover:pr(),whileTap:pr(),whileDrag:pr(),whileFocus:pr(),exit:pr()}}function ip(t,n){t.min=n.min,t.max=n.max}function Ii(t,n){ip(t.x,n.x),ip(t.y,n.y)}function z1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const k5=1e-4,Pk=1-k5,Hk=1+k5,j5=.01,Uk=0-j5,Vk=0+j5;function Yo(t){return t.max-t.min}function Yk(t,n,i){return Math.abs(t-n)<=i}function $1(t,n,i,a=.5){t.origin=a,t.originPoint=ss(n.min,n.max,t.origin),t.scale=Yo(i)/Yo(n),t.translate=ss(i.min,i.max,t.origin)-t.originPoint,(t.scale>=Pk&&t.scale<=Hk||isNaN(t.scale))&&(t.scale=1),(t.translate>=Uk&&t.translate<=Vk||isNaN(t.translate))&&(t.translate=0)}function bc(t,n,i,a){$1(t.x,n.x,i.x,a?a.originX:void 0),$1(t.y,n.y,i.y,a?a.originY:void 0)}function I1(t,n,i,a=0){const c=a?ss(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+Yo(n)}function Wk(t,n,i,a){I1(t.x,n.x,i.x,a==null?void 0:a.x),I1(t.y,n.y,i.y,a==null?void 0:a.y)}function P1(t,n,i,a=0){const c=a?ss(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+Yo(n)}function Rd(t,n,i,a){P1(t.x,n.x,i.x,a==null?void 0:a.x),P1(t.y,n.y,i.y,a==null?void 0:a.y)}function H1(t,n,i,a,c){return t-=n,t=Nd(t,1/i,a),c!==void 0&&(t=Nd(t,1/c,a)),t}function Fk(t,n=0,i=1,a=.5,c,u=t,d=t){if(Zi.test(n)&&(n=parseFloat(n),n=ss(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=ss(u.min,u.max,a);t===u&&(h-=n),t.min=H1(t.min,n,i,h,c),t.max=H1(t.max,n,i,h,c)}function U1(t,n,[i,a,c],u,d){Fk(t,n[i],n[a],n[c],n.scale,u,d)}const Xk=["x","scaleX","originX"],qk=["y","scaleY","originY"];function V1(t,n,i,a){U1(t.x,n,Xk,i?i.x:void 0,a?a.x:void 0),U1(t.y,n,qk,i?i.y:void 0,a?a.y:void 0)}function Y1(t){return t.translate===0&&t.scale===1}function M5(t){return Y1(t.x)&&Y1(t.y)}function W1(t,n){return t.min===n.min&&t.max===n.max}function Gk(t,n){return W1(t.x,n.x)&&W1(t.y,n.y)}function F1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function T5(t,n){return F1(t.x,n.x)&&F1(t.y,n.y)}function X1(t){return Yo(t.x)/Yo(t.y)}function q1(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function Ki(t){return[t("x"),t("y")]}function Kk(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:g,rotate:_,rotateX:x,rotateY:b,skewX:S,skewY:C}=i;g&&(a=`perspective(${g}px) ${a}`),_&&(a+=`rotate(${_}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),S&&(a+=`skewX(${S}deg) `),C&&(a+=`skewY(${C}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const E5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Qk=E5.length,G1=t=>typeof t=="string"?parseFloat(t):t,K1=t=>typeof t=="number"||Dt.test(t);function Zk(t,n,i,a,c,u){var d,h,p,g;c?(t.opacity=ss(0,(d=i.opacity)!=null?d:1,Jk(a)),t.opacityExit=ss((h=n.opacity)!=null?h:1,0,e8(a))):u&&(t.opacity=ss((p=n.opacity)!=null?p:1,(g=i.opacity)!=null?g:1,a));for(let _=0;_<Qk;_++){const x=E5[_];let b=Q1(n,x),S=Q1(i,x);if(b===void 0&&S===void 0)continue;b||(b=0),S||(S=0),b===0||S===0||K1(b)===K1(S)?(t[x]=Math.max(ss(G1(b),G1(S),a),0),(Zi.test(S)||Zi.test(b))&&(t[x]+="%")):t[x]=S}(n.rotate||i.rotate)&&(t.rotate=ss(n.rotate||0,i.rotate||0,a))}function Q1(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const Jk=A5(0,.5,hb),e8=A5(.5,.95,Ei);function A5(t,n,i){return a=>a<t?0:a>n?1:i(hl(t,n,a))}function D5(t,n,i){const a=so(t)?t:Qa(t);return a.start(Rp("",a,n,i)),a.animation}function Mc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const t8=(t,n)=>t.depth-n.depth;class n8{constructor(){this.children=[],this.isDirty=!1}add(n){xp(this.children,n),this.isDirty=!0}remove(n){fl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(t8),this.isDirty=!1,this.children.forEach(n)}}function s8(t,n){const i=Vo.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(xa(a),t(u-n))};return Fn.setup(a,!0),()=>xa(a)}function xd(t){return so(t)?t.get():t}class o8{constructor(){this.members=[]}add(n){xp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(fl(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(fl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const bd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},_m=["","X","Y","Z"],i8=1e3;let a8=0;function gm(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function N5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=Gb(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",Fn,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&N5(a)}function R5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=a8++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(c8),this.nodes.forEach(p8),this.nodes.forEach(_8),this.nodes.forEach(u8)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new n8)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new vp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=$d(d)&&!i5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let _,x=0;const b=()=>this.root.updateBlockedByResize=!1;Fn.read(()=>{x=window.innerWidth}),t(d,()=>{const S=window.innerWidth;S!==x&&(x=S,this.root.updateBlockedByResize=!0,_&&_(),_=s8(b,250),bd.hasAnimatedSinceResize&&(bd.hasAnimatedSinceResize=!1,this.nodes.forEach(ex)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:_,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const C=this.options.transition||g.getDefaultTransition()||v8,{onLayoutAnimationStart:j,onLayoutAnimationComplete:k}=g.getProps(),M=!this.targetLayout||!T5(this.targetLayout,S),z=!x&&b;if(this.options.layoutRoot||this.resumeFrom||z||x&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const R={...Np(C,"layout"),onPlay:j,onComplete:k};(g.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R),this.setAnimationOrigin(_,z)}else x||ex(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),xa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(g8),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&N5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let _=0;_<this.path.length;_++){const x=this.path[_];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(f8),this.nodes.forEach(Z1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(J1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(h8),this.nodes.forEach(m8),this.nodes.forEach(r8),this.nodes.forEach(l8)):this.nodes.forEach(J1),this.clearAllSnapshots();const h=Vo.now();wo.delta=Ji(0,1e3/60,h-wo.timestamp),wo.timestamp=h,wo.isProcessing=!0,lm.update.process(wo),lm.preRender.process(wo),lm.render.process(wo),wo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ip.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(d8),this.sharedNodes.forEach(y8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Fn.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Fn.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Yo(this.snapshot.measuredBox.x)&&!Yo(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Ks()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!M5(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,_=g!==this.prevTransformTemplateValue;d&&this.instance&&(h||gr(this.latestValues)||_)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),w8(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return Ks();const h=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(S8))){const{scroll:_}=this.root;_&&(Qi(h.x,_.offset.x),Qi(h.y,_.offset.y))}return h}removeElementScroll(d){var p;const h=Ks();if(Ii(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const _=this.path[g],{scroll:x,options:b}=_;_!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&Ii(h,d),Qi(h.x,x.offset.x),Qi(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var _,x;const g=p||Ks();Ii(g,d);for(let b=0;b<this.path.length;b++){const S=this.path[b];!h&&S.options.layoutScroll&&S.scroll&&S!==S.root&&(Qi(g.x,-S.scroll.offset.x),Qi(g.y,-S.scroll.offset.y)),gr(S.latestValues)&&yd(g,S.latestValues,(_=S.layout)==null?void 0:_.layoutBox)}return gr(this.latestValues)&&yd(g,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),g}removeTransform(d){var p;const h=Ks();Ii(h,d);for(let g=0;g<this.path.length;g++){const _=this.path[g];if(!gr(_.latestValues))continue;let x;_.instance&&(np(_.latestValues)&&_.updateSnapshot(),x=Ks(),Ii(x,_.measurePageBox())),V1(h,_.latestValues,(p=_.snapshot)==null?void 0:p.layoutBox,x)}return gr(this.latestValues)&&V1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==wo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var S;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:_,layoutId:x}=this.options;if(!this.layout||!(_||x))return;this.resolvedRelativeTargetAt=wo.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ks(),this.targetWithTransforms=Ks()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Wk(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ii(this.target,this.layout.layoutBox),h5(this.target,this.targetDelta)):Ii(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||np(this.parent.latestValues)||f5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ks(),this.relativeTargetOrigin=Ks(),Rd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),Ii(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var C;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(C=this.parent)!=null&&C.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===wo.timestamp&&(p=!1),p)return;const{layout:g,layoutId:_}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||_))return;Ii(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;bk(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Ks());const{target:S}=d;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(z1(this.prevProjectionDelta.x,this.projectionDelta.x),z1(this.prevProjectionDelta.y,this.projectionDelta.y)),bc(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!q1(this.projectionDelta.x,this.prevProjectionDelta.x)||!q1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=cl(),this.projectionDelta=cl(),this.projectionDeltaWithTransform=cl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,g=p?p.latestValues:{},_={...this.latestValues},x=cl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=Ks(),S=p?p.source:void 0,C=this.layout?this.layout.source:void 0,j=S!==C,k=this.getStack(),M=!k||k.members.length<=1,z=!!(j&&!M&&this.options.crossfade===!0&&!this.path.some(b8));this.animationProgress=0;let R;this.mixTargetDelta=D=>{const $=D/1e3;tx(x.x,d.x,$),tx(x.y,d.y,$),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Rd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),x8(this.relativeTarget,this.relativeTargetOrigin,b,$),R&&Gk(this.relativeTarget,R)&&(this.isProjectionDirty=!1),R||(R=Ks()),Ii(R,this.relativeTarget)),j&&(this.animationValues=_,Zk(_,g,this.latestValues,$,z,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=$},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(xa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Fn.update(()=>{bd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Qa(0)),this.motionValue.jump(0,!1),this.currentAnimation=D5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:_=>{this.mixTargetDelta(_),d.onUpdate&&d.onUpdate(_)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(i8),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:_}=d;if(!(!h||!p||!g)){if(this!==d&&this.layout&&g&&B5(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||Ks();const x=Yo(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=Yo(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}Ii(h,p),yd(h,_),bc(this.projectionDeltaWithTransform,this.layoutCorrected,h,_)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new o8),this.sharedNodes.get(d).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&gm("z",d,g,this.animationValues);for(let _=0;_<_m.length;_++)gm(`rotate${_m[_]}`,d,g,this.animationValues),gm(`skew${_m[_]}`,d,g,this.animationValues);d.render();for(const _ in g)d.setStaticValue(_,g[_]),this.animationValues&&(this.animationValues[_]=g[_]);d.scheduleRender()}applyProjectionStyles(d,h){var C,j;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=xd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=xd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!gr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const _=g.animationValues||g.latestValues;this.applyTransformsToTarget();let x=Kk(this.projectionDeltaWithTransform,this.treeScale,_);p&&(x=p(_,x)),d.transform=x;const{x:b,y:S}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${S.origin*100}% 0`,g.animationValues?d.opacity=g===this?(j=(C=_.opacity)!=null?C:this.latestValues.opacity)!=null?j:1:this.preserveOpacity?this.latestValues.opacity:_.opacityExit:d.opacity=g===this?_.opacity!==void 0?_.opacity:"":_.opacityExit!==void 0?_.opacityExit:0;for(const k in op){if(_[k]===void 0)continue;const{correct:M,applyTo:z,isCSSVariable:R}=op[k],D=x==="none"?_[k]:M(_[k],g);if(z){const $=z.length;for(let F=0;F<$;F++)d[z[F]]=D}else R?this.options.visualElement.renderState.vars[k]=D:d[k]=D}this.options.layoutId&&(d.pointerEvents=g===this?xd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(Z1),this.root.sharedNodes.clear()}}}function r8(t){t.updateLayout()}function l8(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")Ki(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],S=Yo(b);b.min=a[x].min,b.max=b.min+S});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";ip(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else B5(u,n.layoutBox,a)&&Ki(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],S=Yo(a[x]);b.max=b.min+S,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+S)});const h=cl();bc(h,a,n.layoutBox);const p=cl();d?bc(p,t.applyTransform(c,!0),n.measuredBox):bc(p,a,n.layoutBox);const g=!M5(h);let _=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:S}=x;if(b&&S){const C=t.options.layoutAnchor||void 0,j=Ks();Rd(j,n.layoutBox,b.layoutBox,C);const k=Ks();Rd(k,a,S.layoutBox,C),T5(j,k)||(_=!0),x.options.layoutRoot&&(t.relativeTarget=k,t.relativeTargetOrigin=j,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:_})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function c8(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function u8(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function d8(t){t.clearSnapshot()}function Z1(t){t.clearMeasurements()}function f8(t){t.isLayoutDirty=!0,t.updateLayout()}function J1(t){t.isLayoutDirty=!1}function h8(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function m8(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function ex(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function p8(t){t.resolveTargetDelta()}function _8(t){t.calcProjection()}function g8(t){t.resetSkewAndRotation()}function y8(t){t.removeLeadSnapshot()}function tx(t,n,i){t.translate=ss(n.translate,0,i),t.scale=ss(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function nx(t,n,i,a){t.min=ss(n.min,i.min,a),t.max=ss(n.max,i.max,a)}function x8(t,n,i,a){nx(t.x,n.x,i.x,a),nx(t.y,n.y,i.y,a)}function b8(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const v8={duration:.45,ease:[.4,0,.1,1]},sx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),ox=sx("applewebkit/")&&!sx("chrome/")?Math.round:Ei;function ix(t){t.min=ox(t.min),t.max=ox(t.max)}function w8(t){ix(t.x),ix(t.y)}function B5(t,n,i){return t==="position"||t==="preserve-aspect"&&!Yk(X1(n),X1(i),.2)}function S8(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const C8=R5({attachResizeListener:(t,n)=>Mc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),ym={current:void 0},L5=R5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!ym.current){const t=new C8({});t.mount(window),t.setOptions({layoutScroll:!0}),ym.current=t}return ym.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Hd=y.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function ax(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function k8(...t){return n=>{let i=!1;const a=t.map(c=>{const u=ax(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():ax(t[c],null)}}}}function j8(...t){return y.useCallback(k8(...t),t)}class M8 extends y.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(md(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=md(a)&&a.offsetWidth||0,u=md(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function T8({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,S;const d=y.useId(),h=y.useRef(null),p=y.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=y.useContext(Hd),_=(S=(b=t.props)==null?void 0:b.ref)!=null?S:t==null?void 0:t.ref,x=j8(h,_);return y.useInsertionEffect(()=>{const{width:C,height:j,top:k,left:M,right:z,bottom:R}=p.current;if(n||u===!1||!h.current||!C||!j)return;const D=i==="left"?`left: ${M}`:`right: ${z}`,$=a==="bottom"?`bottom: ${R}`:`top: ${k}`;h.current.dataset.motionPopId=d;const F=document.createElement("style");g&&(F.nonce=g);const V=c!=null?c:document.head;return V.appendChild(F),F.sheet&&F.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${C}px !important;
            height: ${j}px !important;
            ${D}px !important;
            ${$}px !important;
          }
        `),()=>{var H;(H=h.current)==null||H.removeAttribute("data-motion-pop-id"),V.contains(F)&&V.removeChild(F)}},[n]),l.jsx(M8,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:y.cloneElement(t,{ref:x})})}const E8=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:g})=>{const _=Ac(A8),x=y.useId();let b=!0,S=y.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:C=>{_.set(C,!0);for(const j of _.values())if(!j)return;a&&a()},register:C=>(_.set(C,!1),()=>_.delete(C))}),[i,_,a]);return u&&b&&(S={...S}),y.useMemo(()=>{_.forEach((C,j)=>_.set(j,!1))},[i]),y.useEffect(()=>{!i&&!_.size&&a&&a()},[i]),t=l.jsx(T8,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:g,children:t}),l.jsx(Od.Provider,{value:S,children:t})};function A8(){return new Map}function O5(t=!0){const n=y.useContext(Od);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=y.useId();y.useEffect(()=>{if(t)return c(u)},[t]);const d=y.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const id=t=>t.key||"";function rx(t){const n=[];return y.Children.forEach(t,i=>{y.isValidElement(i)&&n.push(i)}),n}const Ud=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[_,x]=O5(d),b=y.useMemo(()=>rx(t),[t]),S=d&&!_?[]:b.map(id),C=y.useRef(!0),j=y.useRef(b),k=Ac(()=>new Map),M=y.useRef(new Set),[z,R]=y.useState(b),[D,$]=y.useState(b);yp(()=>{C.current=!1,j.current=b;for(let H=0;H<D.length;H++){const K=id(D[H]);S.includes(K)?(k.delete(K),M.current.delete(K)):k.get(K)!==!0&&k.set(K,!1)}},[D,S.length,S.join("-")]);const F=[];if(b!==z){let H=[...b];for(let K=0;K<D.length;K++){const re=D[K],le=id(re);S.includes(le)||(H.splice(K,0,re),F.push(re))}return u==="wait"&&F.length&&(H=F),$(rx(H)),R(b),null}const{forceRender:V}=y.useContext(gp);return l.jsx(l.Fragment,{children:D.map(H=>{const K=id(H),re=d&&!_?!1:b===D||S.includes(K),le=()=>{if(M.current.has(K))return;if(k.has(K))M.current.add(K),k.set(K,!0);else return;let Se=!0;k.forEach(Ae=>{Ae||(Se=!1)}),Se&&(V==null||V(),$(j.current),d&&(x==null||x()),a&&a())};return l.jsx(E8,{isPresent:re,initial:!C.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:g,onExitComplete:re?void 0:le,anchorX:h,anchorY:p,children:H},K)})})},z5=y.createContext({strict:!1}),lx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let cx=!1;function D8(){if(cx)return;const t={};for(const n in lx)t[n]={isEnabled:i=>lx[n].some(a=>!!i[a])};l5(t),cx=!0}function $5(){return D8(),gk()}function N8(t){const n=$5();for(const i in t)n[i]={...n[i],...t[i]};l5(n)}const R8=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Bd(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||R8.has(t)}let I5=t=>!Bd(t);function B8(t){typeof t=="function"&&(I5=n=>n.startsWith("on")?!Bd(n):t(n))}try{B8(require("@emotion/is-prop-valid").default)}catch{}function L8(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||so(t[c])||(I5(c)||i===!0&&Bd(c)||!n&&!Bd(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Vd=y.createContext({});function O8(t,n){if(Pd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||jc(i)?i:void 0,animate:jc(a)?a:void 0}}return t.inherit!==!1?n:{}}function z8(t){const{initial:n,animate:i}=O8(t,y.useContext(Vd));return y.useMemo(()=>({initial:n,animate:i}),[ux(n),ux(i)])}function ux(t){return Array.isArray(t)?t.join(" "):t}const Wp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function P5(t,n,i){for(const a in n)!so(n[a])&&!_5(a,i)&&(t[a]=n[a])}function $8({transformTemplate:t},n){return y.useMemo(()=>{const i=Wp();return Vp(i,n,t),Object.assign({},i.vars,i.style)},[n])}function I8(t,n){const i=t.style||{},a={};return P5(a,i,t),Object.assign(a,$8(t,n)),a}function P8(t,n){const i={},a=I8(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const H5=()=>({...Wp(),attrs:{}});function H8(t,n,i,a){const c=y.useMemo(()=>{const u=H5();return y5(u,n,b5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};P5(u,t.style,t),c.style={...u,...c.style}}return c}const U8=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fp(t){return typeof t!="string"||t.includes("-")?!1:!!(U8.indexOf(t)>-1||/[A-Z]/u.test(t))}function V8(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Fp(t))?H8:P8)(n,a,c,t),g=L8(n,typeof t=="string",u),_=t!==y.Fragment?{...g,...p,ref:i}:{},{children:x}=n,b=y.useMemo(()=>so(x)?x.get():x,[x]);return y.createElement(t,{..._,children:b})}function Y8({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:W8(i,a,c,t),renderState:n()}}function W8(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=xd(u[b]);let{initial:d,animate:h}=t;const p=Pd(t),g=a5(t);n&&g&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let _=i?i.initial===!1:!1;_=_||d===!1;const x=_?h:d;if(x&&typeof x!="boolean"&&!Id(x)){const b=Array.isArray(x)?x:[x];for(let S=0;S<b.length;S++){const C=Bp(t,b[S]);if(C){const{transitionEnd:j,transition:k,...M}=C;for(const z in M){let R=M[z];if(Array.isArray(R)){const D=_?R.length-1:0;R=R[D]}R!==null&&(c[z]=R)}for(const z in j)c[z]=j[z]}}}return c}const U5=t=>(n,i)=>{const a=y.useContext(Vd),c=y.useContext(Od),u=()=>Y8(t,n,a,c);return i?u():Ac(u)},F8=U5({scrapeMotionValuesFromProps:Yp,createRenderState:Wp}),X8=U5({scrapeMotionValuesFromProps:v5,createRenderState:H5}),q8=Symbol.for("motionComponentSymbol");function G8(t,n,i){const a=y.useRef(i);y.useInsertionEffect(()=>{a.current=i});const c=y.useRef(null);return y.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const V5=y.createContext({});function il(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function K8(t,n,i,a,c,u){var R,D;const{visualElement:d}=y.useContext(Vd),h=y.useContext(z5),p=y.useContext(Od),g=y.useContext(Hd),_=g.reducedMotion,x=g.skipAnimations,b=y.useRef(null),S=y.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:_,skipAnimations:x,isSVG:u}),S.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const C=b.current,j=y.useContext(V5);C&&!C.projection&&c&&(C.type==="html"||C.type==="svg")&&Q8(b.current,i,c,j);const k=y.useRef(!1);y.useInsertionEffect(()=>{C&&k.current&&C.update(i,p)});const M=i[qb],z=y.useRef(!!M&&typeof window<"u"&&!((R=window.MotionHandoffIsComplete)!=null&&R.call(window,M))&&((D=window.MotionHasOptimisedAnimation)==null?void 0:D.call(window,M)));return yp(()=>{S.current=!0,C&&(k.current=!0,window.MotionIsMounted=!0,C.updateFeatures(),C.scheduleRenderMicrotask(),z.current&&C.animationState&&C.animationState.animateChanges())}),y.useEffect(()=>{C&&(!z.current&&C.animationState&&C.animationState.animateChanges(),z.current&&(queueMicrotask(()=>{var $;($=window.MotionHandoffMarkAsComplete)==null||$.call(window,M)}),z.current=!1),C.enteringChildren=void 0)}),C}function Q8(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutAnchor:_,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:Y5(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&il(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:g,layoutAnchor:_})}function Y5(t){if(t)return t.options.allowProjection!==!1?t.projection:Y5(t.parent)}function xm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var g,_;a&&N8(a);const u=i?i==="svg":Fp(t),d=u?X8:F8;function h(x,b){let S;const C={...y.useContext(Hd),...x,layoutId:Z8(x)},{isStatic:j}=C,k=z8(x),M=d(x,j);if(!j&&typeof window<"u"){J8();const z=ej(C);S=z.MeasureLayout,k.visualElement=K8(t,M,C,c,z.ProjectionNode,u)}return l.jsxs(Vd.Provider,{value:k,children:[S&&k.visualElement?l.jsx(S,{visualElement:k.visualElement,...C}):null,V8(t,x,G8(M,k.visualElement,b),M,j,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(_=(g=t.displayName)!=null?g:t.name)!=null?_:""})`}`;const p=y.forwardRef(h);return p[q8]=t,p}function Z8({layoutId:t}){const n=y.useContext(gp).id;return n&&t!==void 0?n+"-"+t:t}function J8(t,n){y.useContext(z5).strict}function ej(t){const n=$5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function tj(t,n){if(typeof Proxy>"u")return xm;const i=new Map,a=(u,d)=>xm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,xm(d,void 0,t,n)),i.get(d))})}const nj=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Fp(t))?new w5(n):new g5(n,{allowProjection:t!==y.Fragment})};class sj extends Za{constructor(n){super(n),n.animationState||(n.animationState=$k(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Id(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let oj=0;class ij extends Za{constructor(){super(...arguments),this.id=oj++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Sr(this.node,d,h);if(p){const{transition:g,transitionEnd:_,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const aj={animation:{Feature:sj},exit:{Feature:ij}};function Bc(t){return{point:{x:t.pageX,y:t.pageY}}}const rj=t=>n=>Pp(n)&&t(n,Bc(n));function vc(t,n,i,a){return Mc(t,n,rj(i),a)}const W5=({current:t})=>t?t.ownerDocument.defaultView:null,dx=(t,n)=>Math.abs(t-n);function lj(t,n){const i=dx(t.x,n.x),a=dx(t.y,n.y);return Math.sqrt(i**2+a**2)}const fx=new Set(["auto","scroll"]);class F5{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=S=>{this.handleScroll(S.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ad(this.lastRawMoveEventInfo,this.transformPagePoint));const S=bm(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,j=lj(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!j)return;const{point:k}=S,{timestamp:M}=wo;this.history.push({...k,timestamp:M});const{onStart:z,onMove:R}=this.handlers;C||(z&&z(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,S)},this.handlePointerMove=(S,C)=>{this.lastMoveEvent=S,this.lastRawMoveEventInfo=C,this.lastMoveEventInfo=ad(C,this.transformPagePoint),Fn.update(this.updatePoint,!0)},this.handlePointerUp=(S,C)=>{this.end();const{onEnd:j,onSessionEnd:k,resumeAnimation:M}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const z=bm(S.type==="pointercancel"?this.lastMoveEventInfo:ad(C,this.transformPagePoint),this.history);this.startEvent&&j&&j(S,z),k&&k(S,z)},!Pp(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Bc(n),g=ad(p,this.transformPagePoint),{point:_}=g,{timestamp:x}=wo;this.history=[{..._,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,bm(g,this.history)),this.removeListeners=Dc(vc(this.contextWindow,"pointermove",this.handlePointerMove),vc(this.contextWindow,"pointerup",this.handlePointerUp),vc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(fx.has(a.overflowX)||fx.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),Fn.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),xa(this.updatePoint)}}function ad(t,n){return n?{point:n(t.point)}:t}function hx(t,n){return{x:t.x-n.x,y:t.y-n.y}}function bm({point:t},n){return{point:t,delta:hx(t,X5(n)),offset:hx(t,cj(n)),velocity:uj(n,.1)}}function cj(t){return t[0]}function X5(t){return t[t.length-1]}function uj(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=X5(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>si(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>si(n)*2&&(a=t[1]);const u=Ti(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function dj(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?ss(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?ss(i,t,a.max):Math.min(t,i)),t}function mx(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function fj(t,{top:n,left:i,bottom:a,right:c}){return{x:mx(t.x,i,c),y:mx(t.y,n,a)}}function px(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function hj(t,n){return{x:px(t.x,n.x),y:px(t.y,n.y)}}function mj(t,n){let i=.5;const a=Yo(t),c=Yo(n);return c>a?i=hl(n.min,n.max-a,t.min):a>c&&(i=hl(t.min,t.max-c,n.min)),Ji(0,1,i)}function pj(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const ap=.35;function _j(t=ap){return t===!1?t=0:t===!0&&(t=ap),{x:_x(t,"left","right"),y:_x(t,"top","bottom")}}function _x(t,n,i){return{min:gx(t,n),max:gx(t,i)}}function gx(t,n){return typeof t=="number"?t:t[n]||0}const gj=new WeakMap;class yj{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ks(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(Bc(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:S,dragPropagation:C,onDragStart:j}=this.getProps();if(S&&!C&&(this.openDragLock&&this.openDragLock(),this.openDragLock=q3(S),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ki(M=>{let z=this.getAxisMotionValue(M).get()||0;if(Zi.test(z)){const{projection:R}=this.visualElement;if(R&&R.layout){const D=R.layout.layoutBox[M];D&&(z=Yo(D)*(parseFloat(z)/100))}}this.originPoint[M]=z}),j&&Fn.update(()=>j(x,b),!1,!0),Qm(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:S,dragDirectionLock:C,onDirectionLock:j,onDrag:k}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:M}=b;if(C&&this.currentDirection===null){this.currentDirection=bj(M),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",b.point,M),this.updateAxis("y",b.point,M),this.visualElement.render(),k&&Fn.update(()=>k(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:_}=this.getProps();this.panSession=new F5(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:_,distanceThreshold:a,contextWindow:W5(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&Fn.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!rd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=dj(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&il(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=fj(a.layoutBox,n):this.constraints=!1,this.elastic=_j(i),c!==this.constraints&&!il(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&Ki(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=pj(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!il(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=vk(a,c.root,this.visualElement.getTransformPagePoint());let d=hj(c.layout.layoutBox,u);if(i){const h=i(yk(d));this.hasMutatedConstraints=!!h,h&&(d=d5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=Ki(_=>{if(!rd(_,i,this.currentDirection))return;let x=p&&p[_]||{};(d===!0||d===_)&&(x={min:0,max:0});const b=c?200:1e6,S=c?40:1e7,C={type:"inertia",velocity:a?n[_]:0,bounceStiffness:b,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(_,C)});return Promise.all(g).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Qm(this.visualElement,n),a.start(Rp(n,a,0,i,this.visualElement,!1))}stopAnimation(){Ki(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){Ki(i=>{const{drag:a}=this.getProps();if(!rd(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-ss(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!il(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Ki(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=mj({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),Ki(d=>{if(!rd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];h.set(ss(p,g,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;gj.set(this.visualElement,this);const n=this.visualElement.current,i=vc(n,"pointerdown",g=>{const{drag:_,dragListener:x=!0}=this.getProps(),b=g.target,S=b!==n&&ek(b);_&&x&&!S&&this.start(g)});let a;const c=()=>{const{dragConstraints:g}=this.getProps();il(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),a||(a=xj(n,g.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),Fn.read(c);const h=Mc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:_})=>{this.isDragging&&_&&(Ki(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=g[x].translate,b.set(b.get()+g[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=ap,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function yx(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function xj(t,n,i){const a=k1(t,yx(i)),c=k1(n,yx(i));return()=>{a(),c()}}function rd(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function bj(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class vj extends Za{constructor(n){super(n),this.removeGroupControls=Ei,this.removeListeners=Ei,this.controls=new yj(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ei}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const vm=t=>(n,i)=>{t&&Fn.update(()=>t(n,i),!1,!0)};class wj extends Za{constructor(){super(...arguments),this.removePointerDownListener=Ei}onPointerDown(n){this.session=new F5(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:W5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:vm(n),onStart:vm(i),onMove:vm(a),onEnd:(u,d)=>{delete this.session,c&&Fn.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=vc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let wm=!1;class Sj extends y.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),wm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),bd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),wm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||Fn.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Ip.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;wm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function q5(t){const[n,i]=O5(),a=y.useContext(gp);return l.jsx(Sj,{...t,layoutGroup:a,switchLayoutGroup:y.useContext(V5),isPresent:n,safeToRemove:i})}const Cj={pan:{Feature:wj},drag:{Feature:vj,ProjectionNode:L5,MeasureLayout:q5}};function xx(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&Fn.postRender(()=>u(n,Bc(n)))}class kj extends Za{mount(){const{current:n}=this.node;n&&(this.unmount=K3(n,(i,a)=>(xx(this.node,a,"Start"),c=>xx(this.node,c,"End"))))}unmount(){}}class jj extends Za{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Dc(Mc(this.node.current,"focus",()=>this.onFocus()),Mc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function bx(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&Fn.postRender(()=>u(n,Bc(n)))}class Mj extends Za{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=nk(n,(c,u)=>(bx(this.node,u,"Start"),(d,{success:h})=>bx(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const rp=new WeakMap,Sm=new WeakMap,Tj=t=>{const n=rp.get(t.target);n&&n(t)},Ej=t=>{t.forEach(Tj)};function Aj({root:t,...n}){const i=t||document;Sm.has(i)||Sm.set(i,{});const a=Sm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(Ej,{root:t,...n})),a[c]}function Dj(t,n,i){const a=Aj(n);return rp.set(t,i),a.observe(t),()=>{rp.delete(t),a.unobserve(t)}}const Nj={some:0,all:1};class Rj extends Za{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:Nj[c]},h=g=>{const{isIntersecting:_}=g;if(this.isInView===_||(this.isInView=_,u&&!_&&this.hasEnteredView))return;_&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",_);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),S=_?x:b;S&&S(g)};this.stopObserver=Dj(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(Bj(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Bj({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const Lj={inView:{Feature:Rj},tap:{Feature:Mj},focus:{Feature:jj},hover:{Feature:kj}},Oj={layout:{ProjectionNode:L5,MeasureLayout:q5}},zj={...aj,...Lj,...Cj,...Oj},ni=tj(zj,nj);function lp(t){const n=Ac(()=>Qa(t)),{isStatic:i}=y.useContext(Hd);if(i){const[,a]=y.useState(t);y.useEffect(()=>n.on("change",a),[])}return n}function G5(t,n){const i=lp(n()),a=()=>i.set(n());return a(),yp(()=>{const c=()=>Fn.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),xa(a)}}),i}function $j(t){xc.current=[],t();const n=G5(xc.current,t);return xc.current=void 0,n}function ld(t,n,i,a){if(typeof t=="function")return $j(t);const u=typeof n=="function"?n:dk(n,i,a),d=Array.isArray(t)?vx(t,u):vx([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function vx(t,n){const i=Ac(()=>[]);return G5(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Xp(t){return typeof t=="object"&&!Array.isArray(t)}function K5(t,n,i,a){return t==null?[]:typeof t=="string"&&Xp(n)?$p(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function Ij(t,n,i){return t*(n+1)}function wx(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function Pj(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(fl(t,c),a--)}}function Hj(t,n,i,a,c,u){Pj(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:ss(c,u,a[d]),easing:gb(i,d)})}function Uj(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function Vj(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const Yj="easeInOut";function Wj(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},g=new Map;let _=0,x=0,b=0;for(let S=0;S<t.length;S++){const C=t[S];if(typeof C=="string"){g.set(C,x);continue}else if(!Array.isArray(C)){g.set(C.name,wx(x,C.at,_,g));continue}let[j,k,M={}]=C;M.at!==void 0&&(x=wx(x,M.at,_,g));let z=0;const R=(D,$,F,V=0,H=0)=>{const K=Fj(D),{delay:re=0,times:le=Rb(K),type:Se=n.type||"keyframes",repeat:Ae,repeatType:J,repeatDelay:ue=0,...L}=$;let{ease:ne=n.ease||"easeOut",duration:U}=$;const he=typeof re=="function"?re(V,H):re,je=K.length,A=Dp(Se)?Se:c==null?void 0:c[Se||"keyframes"];if(je<=2&&A){let Te=100;if(je===2&&Gj(K)){const tt=K[1]-K[0];Te=Math.abs(tt)}const Ne={...n,...L};U!==void 0&&(Ne.duration=si(U));const ve=Eb(Ne,Te,A);ne=ve.ease,U=ve.duration}U!=null||(U=u);const te=x+he;le.length===1&&le[0]===0&&(le[1]=1);const q=le.length-K.length;if(q>0&&Nb(le,q),K.length===1&&K.unshift(null),Ae){U=Ij(U,Ae);const Te=[...K],Ne=[...le];ne=Array.isArray(ne)?[...ne]:[ne];const ve=[...ne];for(let tt=0;tt<Ae;tt++){K.push(...Te);for(let Ge=0;Ge<Te.length;Ge++)le.push(Ne[Ge]+(tt+1)),ne.push(Ge===0?"linear":gb(ve,Ge-1))}Uj(le,Ae)}const fe=te+U;Hj(F,K,ne,le,te,fe),z=Math.max(he+U,z),b=Math.max(fe,b)};if(so(j)){const D=Sx(j,h);R(k,M,Cx("default",D))}else{const D=K5(j,k,a,p),$=D.length;for(let F=0;F<$;F++){k=k,M=M;const V=D[F],H=Sx(V,h);for(const K in k)R(k[K],Xj(M,K),Cx(K,H),F,$)}}_=x,x+=z}return h.forEach((S,C)=>{for(const j in S){const k=S[j];k.sort(Vj);const M=[],z=[],R=[];for(let V=0;V<k.length;V++){const{at:H,value:K,easing:re}=k[V];M.push(K),z.push(hl(0,b,H)),R.push(re||"easeOut")}z[0]!==0&&(z.unshift(0),M.unshift(M[0]),R.unshift(Yj)),z[z.length-1]!==1&&(z.push(1),M.push(null)),d.has(C)||d.set(C,{keyframes:{},transition:{}});const D=d.get(C);D.keyframes[j]=M;const{type:$,...F}=n;D.transition[j]={...F,duration:b,ease:R,times:z,...i}}}),d}function Sx(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function Cx(t,n){return n[t]||(n[t]=[]),n[t]}function Fj(t){return Array.isArray(t)?t:[t]}function Xj(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const qj=t=>typeof t=="number",Gj=t=>t.every(qj);function Kj(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=$d(t)&&!i5(t)?new w5(n):new g5(n);i.mount(t),kc.set(t,i)}function Qj(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new Tk(n);i.mount(t),kc.set(t,i)}function Zj(t,n){return so(t)||typeof t=="number"||typeof t=="string"&&!Xp(n)}function Q5(t,n,i,a){const c=[];if(Zj(t,n))c.push(D5(t,Xp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=K5(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],g=p instanceof Element?Kj:Qj;kc.has(p)||g(p);const _=kc.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Op(_,{...n,transition:x},{}))}}return c}function Jj(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=Qa(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return Wj(c,n,i,{spring:Cc}).forEach(({keyframes:d,transition:h},p)=>{a.push(...Q5(p,d,h))}),a}function eM(t){return Array.isArray(t)&&t.some(Array.isArray)}function tM(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(eM(c)){const{onComplete:_,...x}=u||{};typeof _=="function"&&(p=_),h=Jj(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:_,...x}=d||{};typeof _=="function"&&(p=_),h=Q5(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const g=new g3(h);return p&&g.finished.then(p),n&&(n.animations.push(g),g.finished.then(()=>{fl(n.animations,g)})),g}return a}const kx=tM();var nM=Object.freeze({}),sM=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[S,C]of Object.entries(h))p[S]=this.normalizePreservedValue(c.values[S],C,d.get(S));this.initTransitionModes(i,"",p);for(const[S,C]of Object.entries(c.values)){if(!S.endsWith(".__mode"))continue;const j=S.slice(0,-7),k=d.get(j);(k==null?void 0:k.type)==="transition"&&(p[S]=C)}const g={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,g),this.snapshots.set(t,{...p});const _=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[S,C]of Object.entries(h))x[S]=this.normalizePreservedValue(_[S],C,d.get(S));for(const[S,C]of Object.entries(p))S.endsWith(".__mode")&&(x[S]=C);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:nM}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),g=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:g});else if(typeof d=="number"){const{min:_,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:_,max:x,step:b,shortcut:g})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:g});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const _=d,x="_collapsed"in _?!_._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(_,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const g=h.options[0],_=typeof g=="string"?g:g.value;i[p]=(a=h.default)!=null?a:_}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},sn=new sM;function oM(t,n,i){const a=y.useId(),c=`${t}-${a}`,u=y.useRef(n),d=JSON.stringify(n);u.current=n;const h=y.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=y.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const g=JSON.stringify(i==null?void 0:i.shortcuts);y.useEffect(()=>(sn.registerPanel(c,t,u.current,p.current),()=>sn.unregisterPanel(c)),[c,t]);const _=y.useRef(!1);y.useEffect(()=>{if(!_.current){_.current=!0;return}sn.updatePanel(c,t,u.current,p.current)},[c,t,d,g]),y.useEffect(()=>sn.subscribeActions(c,b=>{var S;(S=h.current)==null||S.call(h,b)}),[c]);const x=y.useSyncExternalStore(b=>sn.subscribe(c,b),()=>sn.getValues(c),()=>sn.getValues(c));return Z5(n,x,"")}function Z5(t,n,i){var c,u,d,h,p,g,_,x,b,S;const a={};for(const[C,j]of Object.entries(t)){if(C==="_collapsed")continue;const k=i?`${i}.${C}`:C;if(Array.isArray(j)&&j.length<=4&&typeof j[0]=="number")a[C]=(c=n[k])!=null?c:j[0];else if(typeof j=="number"||typeof j=="boolean"||typeof j=="string")a[C]=(u=n[k])!=null?u:j;else if(iM(j)||aM(j))a[C]=(d=n[k])!=null?d:j;else if(rM(j))a[C]=(h=n[k])!=null?h:j;else if(lM(j)){const M=(p=j.default)!=null?p:dM(j.options);a[C]=(g=n[k])!=null?g:M}else cM(j)?a[C]=(x=(_=n[k])!=null?_:j.default)!=null?x:"#000000":uM(j)?a[C]=(S=(b=n[k])!=null?b:j.default)!=null?S:"":typeof j=="object"&&j!==null&&(a[C]=Z5(j,n,k))}return a}function yl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function iM(t){return yl(t,"spring")}function aM(t){return yl(t,"easing")}function rM(t){return yl(t,"action")}function lM(t){return yl(t,"select")&&"options"in t&&Array.isArray(t.options)}function cM(t){return yl(t,"color")}function uM(t){return yl(t,"text")}function dM(t){const n=t[0];return typeof n=="string"?n:n.value}function cp(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function vd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(cp(n)))}function uc(t,n){var d,h,p,g;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(g=t.step)!=null?g:1}function dc(t,n,i,a,c){var g,_;const u=sn.getValue(t,n),d=(g=i.min)!=null?g:0,h=(_=i.max)!=null?_:1,p=Math.max(d,Math.min(h,u+c*a));sn.updateValue(t,n,vd(p,a))}function fM(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function cd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function Cm(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function J5(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=J5(i.children,n);if(a)return a}}return null}var ud=4;function hM(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function mM(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=hM(n);return t.key?`${e2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function pM(t){return t.key?`${e2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function e2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var t2=y.createContext({activePanelId:null,activePath:null});function _M({children:t}){const[n,i]=y.useState({activePanelId:null,activePath:null}),a=y.useRef(new Set),c=y.useRef(!1),u=y.useRef(null),d=y.useRef(0),h=y.useCallback(p=>{var g;for(const _ of a.current){const x=sn.getPanels();for(const b of x)for(const[S,C]of Object.entries(b.shortcuts)){if(!C.key||C.key.toLowerCase()!==_||((g=C.interaction)!=null?g:"scroll")!==p)continue;const j=J5(b.controls,S);if(j&&j.type==="slider")return{panelId:b.id,path:S,control:j,shortcut:C}}}return null},[]);return y.useEffect(()=>{const p=j=>{if(cd())return;const k=j.key.toLowerCase();if((k==="arrowleft"||k==="arrowright"||k==="arrowup"||k==="arrowdown")&&a.current.size>0){const D=h("scroll")||h("drag")||h("move");if(D&&D.control.type==="slider"){j.preventDefault();const $=k==="arrowright"||k==="arrowup"?1:-1,F=uc(D.control,D.shortcut);dc(D.panelId,D.path,D.control,F,$);return}}const M=a.current.has(k);a.current.add(k);const z=Cm(j),R=sn.resolveShortcutTarget(k,z);if(R&&(i({activePanelId:R.panelId,activePath:R.path}),!M&&R.control.type==="toggle")){const D=sn.getValue(R.panelId,R.path);sn.updateValue(R.panelId,R.path,!D)}M||(u.current=null,d.current=0)},g=j=>{const k=j.key.toLowerCase();if(a.current.delete(k),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let M=!1;for(const z of a.current){const R=Cm(j),D=sn.resolveShortcutTarget(z,R);if(D){i({activePanelId:D.panelId,activePath:D.path}),M=!0;break}}M||i({activePanelId:null,activePath:null})}},_=j=>{var z,R;if(cd())return;const k=Cm(j);if(a.current.size>0)for(const D of a.current){const $=sn.resolveShortcutTarget(D,k);if(!$)continue;const{panelId:F,path:V,control:H}=$;if(((R=(z=H.shortcut)==null?void 0:z.interaction)!=null?R:"scroll")!=="scroll"||H.type!=="slider")continue;j.preventDefault();const re=uc(H,H.shortcut),le=j.deltaY>0?-1:1;dc(F,V,H,re,le);return}const M=sn.resolveScrollOnlyTargets();for(const{panelId:D,path:$,control:F,shortcut:V}of M){if(F.type!=="slider")continue;j.preventDefault();const H=uc(F,V),K=j.deltaY>0?-1:1;dc(D,$,F,H,K);return}},x=j=>{if(cd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=j.clientX,d.current=0,j.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},S=j=>{if(cd()||a.current.size===0)return;if(c.current){const M=h("drag");if(M&&u.current!==null){const z=j.clientX-u.current;u.current=j.clientX,d.current+=z;const R=uc(M.control,M.shortcut),D=Math.trunc(d.current/ud);D!==0&&(d.current-=D*ud,dc(M.panelId,M.path,M.control,R,D))}return}const k=h("move");if(k){if(u.current===null){u.current=j.clientX;return}const M=j.clientX-u.current;u.current=j.clientX,d.current+=M;const z=uc(k.control,k.shortcut),R=Math.trunc(d.current/ud);R!==0&&(d.current-=R*ud,dc(k.panelId,k.path,k.control,z,R))}},C=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",g),window.addEventListener("wheel",_,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",S),window.addEventListener("blur",C),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",g),window.removeEventListener("wheel",_),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",S),window.removeEventListener("blur",C)}},[h]),l.jsx(t2.Provider,{value:n,children:t})}var qp="M6 9.5L12 15.5L18 9.5",gM="M5 12.75L10 19L19 5",km={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},yM=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],xM=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],jx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Ld({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=y.useState(i),[g,_]=y.useState(!i),x=y.useRef(null),[b,S]=y.useState(void 0),[C,j]=y.useState(typeof window<"u"?window.innerHeight:800);y.useEffect(()=>{if(!a)return;const z=()=>j(window.innerHeight);return window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)},[a]),y.useEffect(()=>{const z=x.current;if(!z)return;const R=new ResizeObserver(()=>{if(h){const D=z.offsetHeight;S($=>$===D?$:D)}});return R.observe(z),()=>R.disconnect()},[h]);const k=()=>{if(c&&a)return;const z=!h;p(z),_(!z),u==null||u(z)},M=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:k,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:jx.path,fill:"currentColor"}),jx.circles.map((z,R)=>l.jsx("circle",{cx:z.cx,cy:z.cy,r:z.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},R))]}),!a&&l.jsx(ni.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:qp})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:z=>z.stopPropagation(),children:d})]}),l.jsx(Ud,{initial:!1,children:h&&l.jsx(ni.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:M});const z=h?{width:280,height:b!==void 0?Math.min(b+10,C-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(ni.div,{className:"dialkit-panel-inner",style:z,onClick:h?void 0:k,"data-collapsed":g,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:M})}return M}var bM=3,vM=32,wM=200,SM=8;function Do({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var Ve;const g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=y.useRef(null),S=y.useRef(null),[C,j]=y.useState(!1),[k,M]=y.useState(!1),[z,R]=y.useState(!1),[D,$]=y.useState(!1),[F,V]=y.useState(!1),[H,K]=y.useState(!1),[re,le]=y.useState(""),Se=y.useRef(null),Ae=y.useRef(null),J=y.useRef(!0),ue=y.useRef(null),L=y.useRef(null),ne=y.useRef(1),U=(n-a)/(c-a)*100,he=C||z,je=lp(U),A=ld(je,P=>`${P}%`),te=ld(je,P=>`max(5px, calc(${P}% - 9px))`),q=lp(0),fe=ld(q,P=>`calc(100% + ${Math.abs(P)}px)`),Te=ld(q,P=>P<0?P:0);y.useEffect(()=>{!C&&!ue.current&&je.jump(U)},[U,C,je]);const Ne=y.useCallback(P=>{const ee=L.current;if(!ee)return n;const xe=(P-ee.left)/ne.current,He=g.current?g.current.offsetWidth:ee.width,Ye=Math.max(0,Math.min(1,xe/He)),Me=a+Ye*(c-a);return Math.max(a,Math.min(c,Me))},[a,c,n]),ve=y.useCallback(P=>(P-a)/(c-a)*100,[a,c]),tt=y.useCallback((P,ee)=>{const se=L.current;if(!se)return 0;const xe=ee<0?se.left-P:P-se.right,He=Math.max(0,xe-vM);return ee*SM*Math.sqrt(Math.min(He/wM,1))},[]),Ge=y.useCallback(P=>{if(!H&&(P.preventDefault(),P.target.setPointerCapture(P.pointerId),Ae.current={x:P.clientX,y:P.clientY},J.current=!0,j(!0),g.current)){L.current=g.current.getBoundingClientRect();const ee=g.current.offsetWidth;ne.current=L.current.width/ee}},[H]),ze=y.useCallback(P=>{if(!C||!Ae.current)return;const ee=P.clientX-Ae.current.x,se=P.clientY-Ae.current.y,xe=Math.sqrt(ee*ee+se*se);if(J.current&&xe>bM&&(J.current=!1,M(!0)),!J.current){const He=L.current;He&&(P.clientX<He.left?q.jump(tt(P.clientX,-1)):P.clientX>He.right?q.jump(tt(P.clientX,1)):q.jump(0));const Ye=Ne(P.clientX),Me=ve(Ye);ue.current&&(ue.current.stop(),ue.current=null),je.jump(Me),i(vd(Ye,u))}},[C,Ne,ve,i,je,q,tt]),ct=y.useCallback(P=>{if(C){if(J.current){const ee=Ne(P.clientX),xe=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((ee-a)/u)*u)):fM(ee,a,c),He=ve(xe);ue.current&&ue.current.stop(),ue.current=kx(je,He,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{ue.current=null}}),i(vd(xe,u))}q.get()!==0&&kx(q,0,{type:"spring",visualDuration:.35,bounce:.15}),j(!1),M(!1),Ae.current=null}},[C,Ne,ve,i,a,c,je,q]);y.useEffect(()=>(D&&!H&&!F?Se.current=setTimeout(()=>{V(!0)},800):!D&&!H&&(Se.current&&(clearTimeout(Se.current),Se.current=null),V(!1)),()=>{Se.current&&clearTimeout(Se.current)}),[D,H,F]),y.useEffect(()=>{H&&x.current&&(x.current.focus(),x.current.select())},[H]);const et=P=>{le(P.target.value)},zt=()=>{const P=parseFloat(re);if(!isNaN(P)){const ee=Math.max(a,Math.min(c,P));i(vd(ee,u))}K(!1),$(!1),V(!1)},Mt=P=>{F&&(P.stopPropagation(),P.preventDefault(),K(!0),le(n.toFixed(cp(u))))},xt=P=>{P.key==="Enter"?zt():P.key==="Escape"&&(K(!1),$(!1))},Qt=()=>{zt()},Oe=n.toFixed(cp(u)),ae=8,Pe=10,Ke=10;let Ie=30,ut=78;const ot=(Ve=g.current)==null?void 0:Ve.offsetWidth;ot&&ot>0&&(b.current&&(Ie=(Pe+b.current.offsetWidth+ae)/ot*100),S.current&&(ut=(ot-Ke-S.current.offsetWidth-ae)/ot*100));const it=U<Ie||U>ut,rt=he?it?.1:k?.9:.5:0,bt=(c-a)/u,Bt=bt<=10?Array.from({length:bt-1},(P,ee)=>{const se=(ee+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${se}%`}},ee)}):Array.from({length:9},(P,ee)=>{const se=(ee+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${se}%`}},ee)});return l.jsx("div",{ref:g,className:"dialkit-slider-wrapper",children:l.jsxs(ni.div,{ref:_,className:`dialkit-slider ${he?"dialkit-slider-active":""}`,onPointerDown:Ge,onPointerMove:ze,onPointerUp:ct,onMouseEnter:()=>R(!0),onMouseLeave:()=>R(!1),style:{width:fe,x:Te},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:Bt}),l.jsx(ni.div,{className:"dialkit-slider-fill",style:{width:A}}),l.jsx(ni.div,{className:"dialkit-slider-handle",style:{left:te,y:"-50%"},animate:{opacity:rt,scaleX:he?1:.25,scaleY:he&&it?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:mM(h)})]}),H?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:re,onChange:et,onKeyDown:xt,onBlur:Qt,onClick:P=>P.stopPropagation(),onMouseDown:P=>P.stopPropagation()}):l.jsx("span",{ref:S,className:`dialkit-slider-value ${F?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>$(!0),onMouseLeave:()=>$(!1),onClick:Mt,onMouseDown:P=>F&&P.stopPropagation(),style:{cursor:F?"text":"default"},children:Oe})]})})}function Gp({options:t,value:n,onChange:i}){const a=y.useRef(null),c=y.useRef(!1),[u,d]=y.useState(null),h=y.useCallback(()=>{const g=a.current;if(!g)return;const _=g.querySelector('[data-active="true"]');_&&d({left:_.offsetLeft,width:_.offsetWidth})},[]);y.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(g=>{const _=n===g.value;return l.jsx("button",{onClick:()=>i(g.value),className:"dialkit-segmented-button","data-active":String(_),children:g.label},g.value)})]})}function CM({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:pM(a)})]}),l.jsx(Gp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function kM(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const g=1;for(let _=0;_<=100;_++){const x=_*d;c.push([x,h]);const b=-t*(h-g),S=-n*p,C=(b+S)/i;p+=C*d,h+=p*d}return c}function n2({spring:t,isSimpleMode:n}){var j,k,M,z,R;let c,u,d;if(n){const D=(j=t.visualDuration)!=null?j:.3,$=(k=t.bounce)!=null?k:.2;d=1,c=2*Math.PI/D,c=Math.pow(c,2),u=2*(1-$)*Math.sqrt(c*d)}else c=(M=t.stiffness)!=null?M:400,u=(z=t.damping)!=null?z:17,d=(R=t.mass)!=null?R:1;const h=2,p=kM(c,u,d,h),g=p.map(([,D])=>D),_=Math.min(...g),b=Math.max(...g)-_,S=p.map(([D,$],F)=>{const V=D/h*256,K=140-(($-_)/(b||1)*140*.6+140*.2);return`${F===0?"M":"L"} ${V} ${K}`}).join(" "),C=[];for(let D=1;D<4;D++){const $=64*D,F=140/4*D;C.push(l.jsx("line",{x1:$,y1:0,x2:$,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${D}`),l.jsx("line",{x1:0,y1:F,x2:256,y2:F,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${D}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[C,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:S,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function jM({panelId:t,path:n,label:i,spring:a,onChange:c}){var _,x,b,S,C;const u=y.useSyncExternalStore(j=>sn.subscribe(t,j),()=>sn.getSpringMode(t,n),()=>sn.getSpringMode(t,n)),d=u==="simple",h=y.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=j=>{sn.updateSpringMode(t,n,j),c(j==="simple"?h.current.simple:h.current.advanced)},g=(j,k)=>{if(d){const{stiffness:M,damping:z,mass:R,...D}=a;c({...D,[j]:k})}else{const{visualDuration:M,bounce:z,...R}=a;c({...R,[j]:k})}};return l.jsx(Ld,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(n2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Gp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Do,{label:"Duration",value:(_=a.visualDuration)!=null?_:.3,onChange:j=>g("visualDuration",j),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Do,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:j=>g("bounce",j),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Do,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:j=>g("stiffness",j),min:1,max:1e3,step:10}),l.jsx(Do,{label:"Damping",value:(S=a.damping)!=null?S:17,onChange:j=>g("damping",j),min:1,max:100,step:1}),l.jsx(Do,{label:"Mass",value:(C=a.mass)!=null?C:1,onChange:j=>g("mass",j),min:.1,max:10,step:.1})]})]})})}function MM({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,S)=>({x:a+(b+.5)*u,y:a+(1.5-S)*u}),h=d(0,0),p=d(1,1),g=d(n[0],n[1]),_=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${g.x} ${g.y}, ${_.x} ${_.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function TM({panelId:t,path:n,label:i,value:a,onChange:c}){var C,j,k,M,z;const u=y.useSyncExternalStore(R=>sn.subscribe(t,R),()=>sn.getTransitionMode(t,n),()=>sn.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=y.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const g=a.type==="spring"?a:p.current.simple,_=a.type==="easing"?a:p.current.easing,x=R=>{sn.updateTransitionMode(t,n,R),c(R==="easing"?p.current.easing:R==="simple"?p.current.simple:p.current.advanced)},b=(R,D)=>{if(h){const{stiffness:$,damping:F,mass:V,...H}=g;c({...H,[R]:D})}else{const{visualDuration:$,bounce:F,...V}=g;c({...V,[R]:D})}},S=(R,D)=>{const $=[..._.ease];$[R]=D,c({..._,ease:$})};return l.jsx(Ld,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(MM,{easing:_}):l.jsx(n2,{spring:g,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Gp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Do,{label:"x1",value:_.ease[0],onChange:R=>S(0,R),min:0,max:1,step:.01}),l.jsx(Do,{label:"y1",value:_.ease[1],onChange:R=>S(1,R),min:-1,max:2,step:.01}),l.jsx(Do,{label:"x2",value:_.ease[2],onChange:R=>S(2,R),min:0,max:1,step:.01}),l.jsx(Do,{label:"y2",value:_.ease[3],onChange:R=>S(3,R),min:-1,max:2,step:.01}),l.jsx(Do,{label:"Duration",value:_.duration,onChange:R=>c({..._,duration:R}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(AM,{ease:_.ease,onChange:R=>c({..._,ease:R})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(Do,{label:"Duration",value:(C=g.visualDuration)!=null?C:.3,onChange:R=>b("visualDuration",R),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Do,{label:"Bounce",value:(j=g.bounce)!=null?j:.2,onChange:R=>b("bounce",R),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Do,{label:"Stiffness",value:(k=g.stiffness)!=null?k:400,onChange:R=>b("stiffness",R),min:1,max:1e3,step:10}),l.jsx(Do,{label:"Damping",value:(M=g.damping)!=null?M:17,onChange:R=>b("damping",R),min:1,max:100,step:1}),l.jsx(Do,{label:"Mass",value:(z=g.mass)!=null?z:1,onChange:R=>b("mass",R),min:.1,max:10,step:.1})]})]})})}function Mx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function EM(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function AM({ease:t,onChange:n}){const[i,a]=y.useState(!1),[c,u]=y.useState(""),d=()=>{u(Mx(t)),a(!0)},h=()=>{const g=EM(c);g&&n(g),a(!1)},p=g=>{g.key==="Enter"&&g.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Mx(t),onChange:g=>u(g.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function DM({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function NM(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function RM(t){return t.map(n=>typeof n=="string"?{value:n,label:NM(n)}:n)}function BM({label:t,value:n,options:i,onChange:a}){var j;const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState(null),[_,x]=y.useState(null),b=RM(i),S=b.find(k=>k.value===n),C=y.useCallback(()=>{const k=d.current;if(!k)return;const M=k.getBoundingClientRect(),z=8+b.length*36,R=window.innerHeight-M.bottom-4,D=R<z&&M.top>R;x({top:D?M.top-4:M.bottom+4,left:M.left,width:M.width,above:D})},[b.length]);return y.useEffect(()=>{var M;const k=(M=d.current)==null?void 0:M.closest(".dialkit-root");g(k!=null?k:document.body)},[]),y.useEffect(()=>{c&&C()},[c,C]),y.useEffect(()=>{if(!c)return;const k=M=>{const z=M.target;d.current&&!d.current.contains(z)&&h.current&&!h.current.contains(z)&&u(!1)};return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(j=S==null?void 0:S.label)!=null?j:n}),l.jsx(ni.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:qp})})]})]}),p&&Ec.createPortal(l.jsx(Ud,{children:c&&_&&l.jsx(ni.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:_.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:_.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:_.left,width:_.width,..._.above?{bottom:window.innerHeight-_.top,transformOrigin:"bottom"}:{top:_.top,transformOrigin:"top"}},children:b.map(k=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(k.value===n),onClick:()=>{a(k.value),u(!1)},children:k.label},k.value))})}),p)]})}var LM=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function OM({label:t,value:n,onChange:i}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useRef(null);y.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),LM.test(u)?i(u):d(n)}function g(_){_.key==="Enter"?p():_.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:_=>d(_.target.value),onBlur:p,onKeyDown:g,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var _;return(_=h.current)==null?void 0:_.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?zM(n):n.slice(0,7),onChange:_=>i(_.target.value)})]})]})}function zM(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function $M({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState({top:0,left:0,width:0}),_=n.length>0,x=n.find(M=>M.id===i),b=y.useCallback(()=>{var z;if(!_)return;const M=(z=d.current)==null?void 0:z.getBoundingClientRect();M&&g({top:M.bottom+4,left:M.left,width:M.width}),u(!0)},[_]),S=y.useCallback(()=>u(!1),[]),C=y.useCallback(()=>{c?S():b()},[c,b,S]);y.useEffect(()=>{if(!c)return;const M=z=>{var D,$;const R=z.target;(D=d.current)!=null&&D.contains(R)||($=h.current)!=null&&$.contains(R)||S()};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[c,S]);const j=M=>{M?sn.loadPreset(t,M):sn.clearActivePreset(t),S()},k=(M,z)=>{M.stopPropagation(),sn.deletePreset(t,z)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:C,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!_),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(ni.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:_?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:qp})})]}),Ec.createPortal(l.jsx(Ud,{children:c&&l.jsxs(ni.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>j(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(M=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(M.id===i),onClick:()=>j(M.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:M.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:z=>k(z,M.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:xM.map((z,R)=>l.jsx("path",{d:z},R))})})]},M.id))]})}),document.body)]})}function IM({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useContext(t2);Object.keys(t.shortcuts).length>0;const p=y.useSyncExternalStore(k=>sn.subscribe(t.id,k),()=>sn.getValues(t.id),()=>sn.getValues(t.id)),g=sn.getPresets(t.id),_=sn.getActivePresetId(t.id),x=()=>{const k=g.length+2;sn.savePreset(t.id,`Version ${k}`)},b=()=>{const k=JSON.stringify(p,null,2),M=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${k}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(M),c(!0),setTimeout(()=>c(!1),1500)},S=k=>{var z,R,D;const M=p[k.path];switch(k.type){case"slider":return l.jsx(Do,{label:k.label,value:M,onChange:$=>sn.updateValue(t.id,k.path,$),min:k.min,max:k.max,step:k.step,shortcut:k.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===k.path},k.path);case"toggle":return l.jsx(CM,{label:k.label,checked:M,onChange:$=>sn.updateValue(t.id,k.path,$),shortcut:k.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===k.path},k.path);case"spring":return l.jsx(jM,{panelId:t.id,path:k.path,label:k.label,spring:M,onChange:$=>sn.updateValue(t.id,k.path,$)},k.path);case"transition":return l.jsx(TM,{panelId:t.id,path:k.path,label:k.label,value:M,onChange:$=>sn.updateValue(t.id,k.path,$)},k.path);case"folder":return l.jsx(Ld,{title:k.label,defaultOpen:(z=k.defaultOpen)!=null?z:!0,children:(R=k.children)==null?void 0:R.map(S)},k.path);case"text":return l.jsx(DM,{label:k.label,value:M,onChange:$=>sn.updateValue(t.id,k.path,$),placeholder:k.placeholder},k.path);case"select":return l.jsx(BM,{label:k.label,value:M,options:(D=k.options)!=null?D:[],onChange:$=>sn.updateValue(t.id,k.path,$)},k.path);case"color":return l.jsx(OM,{label:k.label,value:M,onChange:$=>sn.updateValue(t.id,k.path,$)},k.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>sn.triggerAction(t.id,k.path),children:k.label},k.path);default:return null}},C=()=>t.controls.map(S),j=l.jsxs(l.Fragment,{children:[l.jsx(ni.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:yM.map((k,M)=>l.jsx("path",{d:k},M))})}),l.jsx($M,{panelId:t.id,presets:g,activePresetId:_,onAdd:x}),l.jsx(ni.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Ud,{initial:!1,mode:"wait",children:a?l.jsx(ni.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:gM})},"check"):l.jsxs(ni.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:km.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:km.sparkle,fill:"currentColor"}),l.jsx("path",{d:km.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Ld,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:j,children:C()})})}var PM=typeof process<"u"?!1:!(typeof import.meta<"u");function HM({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=PM}){if(!c)return null;const[u,d]=y.useState([]),[h,p]=y.useState(!1),g=i==="inline",_=y.useRef(null),[x,b]=y.useState(null),[S,C]=y.useState(t),j=y.useRef(null),k=y.useRef(!1),M=y.useRef(null),z=y.useRef(!1);y.useEffect(()=>(p(!0),d(sn.getPanels()),sn.subscribeGlobal(()=>{d(sn.getPanels())})),[]),y.useEffect(()=>{if(!_.current||g)return;const H=new MutationObserver(()=>{var le;const K=(le=_.current)==null?void 0:le.querySelector(".dialkit-panel-inner");if(!K)return;if(K.getAttribute("data-collapsed")==="true")j.current&&b(j.current);else{if(x){j.current=x;const Se=x.x+21,Ae=window.innerWidth/2;C(Se<Ae?"top-left":"top-right")}else C(t);b(null)}});return H.observe(_.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>H.disconnect()},[g,x,t]);const R=y.useCallback(H=>{var le;const K=(le=_.current)==null?void 0:le.querySelector(".dialkit-panel-inner");if(!K||K.getAttribute("data-collapsed")!=="true")return;const re=_.current.getBoundingClientRect();M.current={pointerX:H.clientX,pointerY:H.clientY,elX:re.left,elY:re.top},z.current=!1,k.current=!0,H.target.setPointerCapture(H.pointerId)},[]),D=y.useCallback(H=>{if(!k.current||!M.current)return;const K=H.clientX-M.current.pointerX,re=H.clientY-M.current.pointerY;!z.current&&Math.abs(K)+Math.abs(re)<4||(z.current=!0,b({x:M.current.elX+K,y:M.current.elY+re}))},[]),$=y.useCallback(H=>{var K;if(k.current&&(k.current=!1,M.current=null,z.current)){H.stopPropagation();const re=(K=_.current)==null?void 0:K.querySelector(".dialkit-panel-inner");if(re){const le=Se=>{Se.stopPropagation()};re.addEventListener("click",le,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const F=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,V=l.jsx(_M,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:_,className:"dialkit-panel","data-position":g||x?void 0:S,"data-mode":i,style:F,onPointerDown:g?void 0:R,onPointerMove:g?void 0:D,onPointerUp:g?void 0:$,children:u.map(H=>l.jsx(IM,{panel:H,defaultOpen:g||n,inline:g},H.id))})})});return g?V:Ec.createPortal(V,document.body)}const UM=()=>(oM("Git Visualizer",{preview:[1,0,1]}),null),VM=({children:t})=>l.jsxs(l.Fragment,{children:[t,l.jsx(UM,{}),l.jsx(HM,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(Y6,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});Ev.createRoot(document.getElementById("root")).render(l.jsx(VM,{children:l.jsx(Mw,{})}));

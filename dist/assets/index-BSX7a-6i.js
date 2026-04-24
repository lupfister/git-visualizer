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
 */var ny;function wv(){return ny||(ny=1,(function(t){function n(z,ae){var q=z.length;z.push(ae);e:for(;0<q;){var me=q-1>>>1,Me=z[me];if(0<c(Me,ae))z[me]=ae,z[q]=Me,q=me;else break e}}function i(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var ae=z[0],q=z.pop();if(q!==ae){z[0]=q;e:for(var me=0,Me=z.length,D=Me>>>1;me<D;){var te=2*(me+1)-1,G=z[te],de=te+1,ke=z[de];if(0>c(G,q))de<Me&&0>c(ke,G)?(z[me]=ke,z[de]=q,me=de):(z[me]=G,z[te]=q,me=te);else if(de<Me&&0>c(ke,q))z[me]=ke,z[de]=q,me=de;else break e}}return ae}function c(z,ae){var q=z.sortIndex-ae.sortIndex;return q!==0?q:z.id-ae.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],g=[],_=1,x=null,b=3,S=!1,C=!1,k=!1,j=!1,M=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(z){for(var ae=i(g);ae!==null;){if(ae.callback===null)a(g);else if(ae.startTime<=z)a(g),ae.sortIndex=ae.expirationTime,n(p,ae);else break;ae=i(g)}}function P(z){if(k=!1,N(z),!C)if(i(p)!==null)C=!0,X||(X=!0,be());else{var ae=i(g);ae!==null&&le(P,ae.startTime-z)}}var X=!1,Y=-1,U=5,Z=-1;function oe(){return j?!0:!(t.unstable_now()-Z<U)}function ie(){if(j=!1,X){var z=t.unstable_now();Z=z;var ae=!0;try{e:{C=!1,k&&(k=!1,I(Y),Y=-1),S=!0;var q=b;try{t:{for(N(z),x=i(p);x!==null&&!(x.expirationTime>z&&oe());){var me=x.callback;if(typeof me=="function"){x.callback=null,b=x.priorityLevel;var Me=me(x.expirationTime<=z);if(z=t.unstable_now(),typeof Me=="function"){x.callback=Me,N(z),ae=!0;break t}x===i(p)&&a(p),N(z)}else a(p);x=i(p)}if(x!==null)ae=!0;else{var D=i(g);D!==null&&le(P,D.startTime-z),ae=!1}}break e}finally{x=null,b=q,S=!1}ae=void 0}}finally{ae?be():X=!1}}}var be;if(typeof L=="function")be=function(){L(ie)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,Q=Te.port2;Te.port1.onmessage=ie,be=function(){Q.postMessage(null)}}else be=function(){M(ie,0)};function le(z,ae){Y=M(function(){z(t.unstable_now())},ae)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(z){switch(b){case 1:case 2:case 3:var ae=3;break;default:ae=b}var q=b;b=ae;try{return z()}finally{b=q}},t.unstable_requestPaint=function(){j=!0},t.unstable_runWithPriority=function(z,ae){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var q=b;b=z;try{return ae()}finally{b=q}},t.unstable_scheduleCallback=function(z,ae,q){var me=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?me+q:me):q=me,z){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=q+Me,z={id:_++,callback:ae,priorityLevel:z,startTime:q,expirationTime:Me,sortIndex:-1},q>me?(z.sortIndex=q,n(g,z),i(p)===null&&z===i(g)&&(k?(I(Y),Y=-1):k=!0,le(P,q-me))):(z.sortIndex=Me,n(p,z),C||S||(C=!0,X||(X=!0,be()))),z},t.unstable_shouldYield=oe,t.unstable_wrapCallback=function(z){var ae=b;return function(){var q=b;b=ae;try{return z.apply(this,arguments)}finally{b=q}}}})($h)),$h}var sy;function Sv(){return sy||(sy=1,zh.exports=wv()),zh.exports}var Ih={exports:{}},nn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function Cv(){if(oy)return nn;oy=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function S(D){return D===null||typeof D!="object"?null:(D=b&&D[b]||D["@@iterator"],typeof D=="function"?D:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,j={};function M(D,te,G){this.props=D,this.context=te,this.refs=j,this.updater=G||C}M.prototype.isReactComponent={},M.prototype.setState=function(D,te){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,te,"setState")},M.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function I(){}I.prototype=M.prototype;function L(D,te,G){this.props=D,this.context=te,this.refs=j,this.updater=G||C}var N=L.prototype=new I;N.constructor=L,k(N,M.prototype),N.isPureReactComponent=!0;var P=Array.isArray;function X(){}var Y={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function Z(D,te,G){var de=G.ref;return{$$typeof:t,type:D,key:te,ref:de!==void 0?de:null,props:G}}function oe(D,te){return Z(D.type,te,D.props)}function ie(D){return typeof D=="object"&&D!==null&&D.$$typeof===t}function be(D){var te={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(G){return te[G]})}var Te=/\/+/g;function Q(D,te){return typeof D=="object"&&D!==null&&D.key!=null?be(""+D.key):te.toString(36)}function le(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(X,X):(D.status="pending",D.then(function(te){D.status==="pending"&&(D.status="fulfilled",D.value=te)},function(te){D.status==="pending"&&(D.status="rejected",D.reason=te)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function z(D,te,G,de,ke){var Ne=typeof D;(Ne==="undefined"||Ne==="boolean")&&(D=null);var ve=!1;if(D===null)ve=!0;else switch(Ne){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(D.$$typeof){case t:case n:ve=!0;break;case _:return ve=D._init,z(ve(D._payload),te,G,de,ke)}}if(ve)return ke=ke(D),ve=de===""?"."+Q(D,0):de,P(ke)?(G="",ve!=null&&(G=ve.replace(Te,"$&/")+"/"),z(ke,te,G,"",function($e){return $e})):ke!=null&&(ie(ke)&&(ke=oe(ke,G+(ke.key==null||D&&D.key===ke.key?"":(""+ke.key).replace(Te,"$&/")+"/")+ve)),te.push(ke)),1;ve=0;var st=de===""?".":de+":";if(P(D))for(var Ge=0;Ge<D.length;Ge++)de=D[Ge],Ne=st+Q(de,Ge),ve+=z(de,te,G,Ne,ke);else if(Ge=S(D),typeof Ge=="function")for(D=Ge.call(D),Ge=0;!(de=D.next()).done;)de=de.value,Ne=st+Q(de,Ge++),ve+=z(de,te,G,Ne,ke);else if(Ne==="object"){if(typeof D.then=="function")return z(le(D),te,G,de,ke);throw te=String(D),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return ve}function ae(D,te,G){if(D==null)return D;var de=[],ke=0;return z(D,de,"","",function(Ne){return te.call(G,Ne,ke++)}),de}function q(D){if(D._status===-1){var te=D._result;te=te(),te.then(function(G){(D._status===0||D._status===-1)&&(D._status=1,D._result=G)},function(G){(D._status===0||D._status===-1)&&(D._status=2,D._result=G)}),D._status===-1&&(D._status=0,D._result=te)}if(D._status===1)return D._result.default;throw D._result}var me=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},Me={map:ae,forEach:function(D,te,G){ae(D,function(){te.apply(this,arguments)},G)},count:function(D){var te=0;return ae(D,function(){te++}),te},toArray:function(D){return ae(D,function(te){return te})||[]},only:function(D){if(!ie(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return nn.Activity=x,nn.Children=Me,nn.Component=M,nn.Fragment=i,nn.Profiler=c,nn.PureComponent=L,nn.StrictMode=a,nn.Suspense=p,nn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,nn.__COMPILER_RUNTIME={__proto__:null,c:function(D){return Y.H.useMemoCache(D)}},nn.cache=function(D){return function(){return D.apply(null,arguments)}},nn.cacheSignal=function(){return null},nn.cloneElement=function(D,te,G){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var de=k({},D.props),ke=D.key;if(te!=null)for(Ne in te.key!==void 0&&(ke=""+te.key),te)!U.call(te,Ne)||Ne==="key"||Ne==="__self"||Ne==="__source"||Ne==="ref"&&te.ref===void 0||(de[Ne]=te[Ne]);var Ne=arguments.length-2;if(Ne===1)de.children=G;else if(1<Ne){for(var ve=Array(Ne),st=0;st<Ne;st++)ve[st]=arguments[st+2];de.children=ve}return Z(D.type,ke,de)},nn.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},nn.createElement=function(D,te,G){var de,ke={},Ne=null;if(te!=null)for(de in te.key!==void 0&&(Ne=""+te.key),te)U.call(te,de)&&de!=="key"&&de!=="__self"&&de!=="__source"&&(ke[de]=te[de]);var ve=arguments.length-2;if(ve===1)ke.children=G;else if(1<ve){for(var st=Array(ve),Ge=0;Ge<ve;Ge++)st[Ge]=arguments[Ge+2];ke.children=st}if(D&&D.defaultProps)for(de in ve=D.defaultProps,ve)ke[de]===void 0&&(ke[de]=ve[de]);return Z(D,Ne,ke)},nn.createRef=function(){return{current:null}},nn.forwardRef=function(D){return{$$typeof:h,render:D}},nn.isValidElement=ie,nn.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:q}},nn.memo=function(D,te){return{$$typeof:g,type:D,compare:te===void 0?null:te}},nn.startTransition=function(D){var te=Y.T,G={};Y.T=G;try{var de=D(),ke=Y.S;ke!==null&&ke(G,de),typeof de=="object"&&de!==null&&typeof de.then=="function"&&de.then(X,me)}catch(Ne){me(Ne)}finally{te!==null&&G.types!==null&&(te.types=G.types),Y.T=te}},nn.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},nn.use=function(D){return Y.H.use(D)},nn.useActionState=function(D,te,G){return Y.H.useActionState(D,te,G)},nn.useCallback=function(D,te){return Y.H.useCallback(D,te)},nn.useContext=function(D){return Y.H.useContext(D)},nn.useDebugValue=function(){},nn.useDeferredValue=function(D,te){return Y.H.useDeferredValue(D,te)},nn.useEffect=function(D,te){return Y.H.useEffect(D,te)},nn.useEffectEvent=function(D){return Y.H.useEffectEvent(D)},nn.useId=function(){return Y.H.useId()},nn.useImperativeHandle=function(D,te,G){return Y.H.useImperativeHandle(D,te,G)},nn.useInsertionEffect=function(D,te){return Y.H.useInsertionEffect(D,te)},nn.useLayoutEffect=function(D,te){return Y.H.useLayoutEffect(D,te)},nn.useMemo=function(D,te){return Y.H.useMemo(D,te)},nn.useOptimistic=function(D,te){return Y.H.useOptimistic(D,te)},nn.useReducer=function(D,te,G){return Y.H.useReducer(D,te,G)},nn.useRef=function(D){return Y.H.useRef(D)},nn.useState=function(D){return Y.H.useState(D)},nn.useSyncExternalStore=function(D,te,G){return Y.H.useSyncExternalStore(D,te,G)},nn.useTransition=function(){return Y.H.useTransition()},nn.version="19.2.4",nn}var iy;function up(){return iy||(iy=1,Ih.exports=Cv()),Ih.exports}var Ph={exports:{}},Eo={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function kv(){if(ay)return Eo;ay=1;var t=up();function n(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,g,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:g,implementation:_}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Eo.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Eo.createPortal=function(p,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return u(p,g,null,_)},Eo.flushSync=function(p){var g=d.T,_=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=g,a.p=_,a.d.f()}},Eo.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},Eo.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Eo.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,S=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:S}):_==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:S,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Eo.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=h(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},Eo.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin);a.d.L(p,_,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Eo.preloadModule=function(p,g){if(typeof p=="string")if(g){var _=h(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},Eo.requestFormReset=function(p){a.d.r(p)},Eo.unstable_batchedUpdates=function(p,g){return p(g)},Eo.useFormState=function(p,g,_){return d.H.useFormState(p,g,_)},Eo.useFormStatus=function(){return d.H.useHostTransitionStatus()},Eo.version="19.2.4",Eo}var ry;function Ex(){if(ry)return Ph.exports;ry=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Ph.exports=kv(),Ph.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function jv(){if(ly)return ec;ly=1;var t=Sv(),n=up(),i=Ex();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function g(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var v=!1,E=f.child;E;){if(E===o){v=!0,o=f,r=m;break}if(E===r){v=!0,r=f,o=m;break}E=E.sibling}if(!v){for(E=m.child;E;){if(E===o){v=!0,o=m,r=f;break}if(E===r){v=!0,r=m,o=f;break}E=E.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function _(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=_(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),oe=Symbol.for("react.memo_cache_sentinel"),ie=Symbol.iterator;function be(e){return e===null||typeof e!="object"?null:(e=ie&&e[ie]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Symbol.for("react.client.reference");function Q(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case M:return"Profiler";case j:return"StrictMode";case P:return"Suspense";case X:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case L:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case N:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return s=e.displayName||null,s!==null?s:Q(e.type)||"Memo";case U:s=e._payload,e=e._init;try{return Q(e(s))}catch{}}return null}var le=Array.isArray,z=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},me=[],Me=-1;function D(e){return{current:e}}function te(e){0>Me||(e.current=me[Me],me[Me]=null,Me--)}function G(e,s){Me++,me[Me]=e.current,e.current=s}var de=D(null),ke=D(null),Ne=D(null),ve=D(null);function st(e,s){switch(G(Ne,s),G(ke,e),G(de,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?S0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=S0(s),e=C0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}te(de),G(de,e)}function Ge(){te(de),te(ke),te(Ne)}function $e(e){e.memoizedState!==null&&G(ve,e);var s=de.current,o=C0(s,e.type);s!==o&&(G(ke,e),G(de,o))}function rt(e){ke.current===e&&(te(de),te(ke)),ve.current===e&&(te(ve),Gl._currentValue=q)}var tt,$t;function lt(e){if(tt===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);tt=s&&s[1]||"",$t=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tt+e+$t}var Rt=!1;function Oe(e,s){if(!e||Rt)return"";Rt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var Re=function(){throw Error()};if(Object.defineProperty(Re.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Re,[])}catch(ye){var pe=ye}Reflect.construct(e,[],Re)}else{try{Re.call()}catch(ye){pe=ye}e.call(Re.prototype)}}else{try{throw Error()}catch(ye){pe=ye}(Re=e())&&typeof Re.catch=="function"&&Re.catch(function(){})}}catch(ye){if(ye&&pe&&typeof ye.stack=="string")return[ye.stack,pe.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),v=m[0],E=m[1];if(v&&E){var F=v.split(`
`),he=E.split(`
`);for(f=r=0;r<F.length&&!F[r].includes("DetermineComponentFrameRoot");)r++;for(;f<he.length&&!he[f].includes("DetermineComponentFrameRoot");)f++;if(r===F.length||f===he.length)for(r=F.length-1,f=he.length-1;1<=r&&0<=f&&F[r]!==he[f];)f--;for(;1<=r&&0<=f;r--,f--)if(F[r]!==he[f]){if(r!==1||f!==1)do if(r--,f--,0>f||F[r]!==he[f]){var we=`
`+F[r].replace(" at new "," at ");return e.displayName&&we.includes("<anonymous>")&&(we=we.replace("<anonymous>",e.displayName)),we}while(1<=r&&0<=f);break}}}finally{Rt=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?lt(o):""}function ct(e,s){switch(e.tag){case 26:case 27:case 5:return lt(e.type);case 16:return lt("Lazy");case 13:return e.child!==s&&s!==null?lt("Suspense Fallback"):lt("Suspense");case 19:return lt("SuspenseList");case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return lt("Activity");default:return""}}function ce(e){try{var s="",o=null;do s+=ct(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var He=Object.prototype.hasOwnProperty,Ke=t.unstable_scheduleCallback,ze=t.unstable_cancelCallback,Tt=t.unstable_shouldYield,ut=t.unstable_requestPaint,at=t.unstable_now,ot=t.unstable_getCurrentPriorityLevel,it=t.unstable_ImmediatePriority,At=t.unstable_UserBlockingPriority,Qe=t.unstable_NormalPriority,H=t.unstable_LowPriority,J=t.unstable_IdlePriority,ne=t.log,_e=t.unstable_setDisableYieldValue,Xe=null,Ue=null;function De(e){if(typeof ne=="function"&&_e(e),Ue&&typeof Ue.setStrictMode=="function")try{Ue.setStrictMode(Xe,e)}catch{}}var St=Math.clz32?Math.clz32:ht,Ye=Math.log,bt=Math.LN2;function ht(e){return e>>>=0,e===0?32:31-(Ye(e)/bt|0)|0}var Ie=256,nt=262144,Vt=4194304;function un(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qe(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var E=r&134217727;return E!==0?(r=E&~m,r!==0?f=un(r):(v&=E,v!==0?f=un(v):o||(o=E&~e,o!==0&&(f=un(o))))):(E=r&~m,E!==0?f=un(E):v!==0?f=un(v):o||(o=r&~e,o!==0&&(f=un(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function Bt(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function Ot(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(){var e=Vt;return Vt<<=1,(Vt&62914560)===0&&(Vt=4194304),e}function rn(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function mt(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ft(e,s,o,r,f,m){var v=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var E=e.entanglements,F=e.expirationTimes,he=e.hiddenUpdates;for(o=v&~o;0<o;){var we=31-St(o),Re=1<<we;E[we]=0,F[we]=-1;var pe=he[we];if(pe!==null)for(he[we]=null,we=0;we<pe.length;we++){var ye=pe[we];ye!==null&&(ye.lane&=-536870913)}o&=~Re}r!==0&&Rn(e,r,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function Rn(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-St(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function os(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-St(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function gn(e,s){var o=s&-s;return o=(o&42)!==0?1:oo(o),(o&(e.suspendedLanes|s))!==0?0:o}function oo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function is(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function es(){var e=ae.p;return e!==0?e:(e=window.event,e===void 0?32:X0(e.type))}function Gt(e,s){var o=ae.p;try{return ae.p=e,s()}finally{ae.p=o}}var kn=Math.random().toString(36).slice(2),Jt="__reactFiber$"+kn,yn="__reactProps$"+kn,Ze="__reactContainer$"+kn,jn="__reactEvents$"+kn,So="__reactListeners$"+kn,io="__reactHandles$"+kn,Ln="__reactResources$"+kn,Ns="__reactMarker$"+kn;function ao(e){delete e[Jt],delete e[yn],delete e[jn],delete e[So],delete e[io]}function ro(e){var s=e[Jt];if(s)return s;for(var o=e.parentNode;o;){if(s=o[Ze]||o[Jt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=D0(e);e!==null;){if(o=e[Jt])return o;e=D0(e)}return s}e=o,o=e.parentNode}return null}function ys(e){if(e=e[Jt]||e[Ze]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function ps(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function xs(e){var s=e[Ln];return s||(s=e[Ln]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function on(e){e[Ns]=!0}var ni=new Set,Do={};function Qs(e,s){Wn(e,s),Wn(e+"Capture",s)}function Wn(e,s){for(Do[e]=s,e=0;e<s.length;e++)ni.add(s[e])}var lo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),No={},Ro={};function Yo(e){return He.call(Ro,e)?!0:He.call(No,e)?!1:lo.test(e)?Ro[e]=!0:(No[e]=!0,!1)}function mo(e,s,o){if(Yo(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function bs(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function Rs(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function wn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pi(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function as(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function si(e){if(!e._valueTracker){var s=pi(e)?"checked":"value";e._valueTracker=as(e,s,""+e[s])}}function Hs(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=pi(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function Bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Co=/[\n"\\]/g;function vs(e){return e.replace(Co,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Us(e,s,o,r,f,m,v,E){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+wn(s)):e.value!==""+wn(s)&&(e.value=""+wn(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?po(e,v,wn(s)):o!=null?po(e,v,wn(o)):r!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+wn(E):e.removeAttribute("name")}function xn(e,s,o,r,f,m,v,E){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){si(e);return}o=o!=null?""+wn(o):"",s=s!=null?""+wn(s):o,E||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=E?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),si(e)}function po(e,s,o){s==="number"&&Bo(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function rs(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+wn(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function Fn(e,s,o){if(s!=null&&(s=""+wn(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+wn(o):""}function _i(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(le(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=wn(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),si(e)}function ko(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var Wo=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xt(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||Wo.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function Ai(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&Xt(e,f,r)}else for(var m in s)s.hasOwnProperty(m)&&Xt(e,m,s[m])}function Bs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fo=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Lo=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Oo(e){return Lo.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ls(){}var jo=null;function Cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sn=null,co=null;function Xn(e){var s=ys(e);if(s&&(e=s.stateNode)){var o=e[yn]||null;e:switch(e=s.stateNode,s.type){case"input":if(Us(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+vs(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[yn]||null;if(!f)throw Error(a(90));Us(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&Hs(r)}break e;case"textarea":Fn(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&rs(e,!!o.multiple,s,!1)}}}var _s=!1;function qn(e,s,o){if(_s)return e(s,o);_s=!0;try{var r=e(s);return r}finally{if(_s=!1,(Sn!==null||co!==null)&&(yu(),Sn&&(s=Sn,e=co,co=Sn=null,Xn(s),e)))for(s=0;s<e.length;s++)Xn(e[s])}}function en(e,s){var o=e.stateNode;if(o===null)return null;var r=o[yn]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Vs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ys=!1;if(Vs)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){Ys=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{Ys=!1}var Gn=null,Mo=null,ks=null;function _o(){if(ks)return ks;var e,s=Mo,o=s.length,r,f="value"in Gn?Gn.value:Gn.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var v=o-e;for(r=1;r<=v&&s[o-r]===f[m-r];r++);return ks=f.slice(e,1<r?1-r:void 0)}function js(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function Ms(){return!0}function uo(){return!1}function T(e){function s(o,r,f,m,v){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(o=e[E],this[E]=o?o(m):m[E]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ms:uo,this.isPropagationStopped=uo,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ms)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ms)},persist:function(){},isPersistent:Ms}),s}var w={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},A=T(w),B=x({},w,{view:0,detail:0}),V=T(B),ue,Ee,Ce,Ve=x({},B,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Js,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ce&&(Ce&&e.type==="mousemove"?(ue=e.screenX-Ce.screenX,Ee=e.screenY-Ce.screenY):Ee=ue=0,Ce=e),ue)},movementY:function(e){return"movementY"in e?e.movementY:Ee}}),pt=T(Ve),Ht=x({},Ve,{dataTransfer:0}),Kt=T(Ht),It=x({},B,{relatedTarget:0}),kt=T(It),Dt=x({},w,{animationName:0,elapsedTime:0,pseudoElement:0}),tn=T(Dt),An=x({},w,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zs=T(An),ts=x({},w,{data:0}),_t=T(ts),Ts={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ii={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xo(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=ii[e])?!!s[e]:!1}function Js(){return Xo}var zo=x({},B,{key:function(e){if(e.key){var s=Ts[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=js(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oi[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Js,charCode:function(e){return e.type==="keypress"?js(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?js(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ai=T(zo),Mn=x({},Ve,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kn=T(Mn),eo=x({},B,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Js}),Vi=T(eo),ea=x({},w,{propertyName:0,elapsedTime:0,pseudoElement:0}),$o=T(ea),Cr=x({},Ve,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Be=T(Cr),Je=x({},w,{newState:0,oldState:0}),yt=T(Je),ft=[9,13,27,32],Lt=Vs&&"CompositionEvent"in window,gt=null;Vs&&"documentMode"in document&&(gt=document.documentMode);var fn=Vs&&"TextEvent"in window&&!gt,ln=Vs&&(!Lt||gt&&8<gt&&11>=gt),ls=" ",Ss=!1;function go(e,s){switch(e){case"keyup":return ft.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ta(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fo=!1;function ba(e,s){switch(e){case"compositionend":return ta(s);case"keypress":return s.which!==32?null:(Ss=!0,ls);case"textInput":return e=s.data,e===ls&&Ss?null:e;default:return null}}function qo(e,s){if(fo)return e==="compositionend"||!Lt&&go(e,s)?(e=_o(),ks=Mo=Gn=null,fo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ln&&s.locale!=="ko"?null:s.data;default:return null}}var Lc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xl(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!Lc[e.type]:s==="textarea"}function bl(e,s,o,r){Sn?co?co.push(r):co=[r]:Sn=r,s=ku(s,"onChange"),0<s.length&&(o=new A("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var va=null,wa=null;function Oc(e){g0(e,0)}function R(e){var s=ps(e);if(Hs(s))return e}function $(e,s){if(e==="change")return s}var K=!1;if(Vs){var W;if(Vs){var se="oninput"in document;if(!se){var ge=document.createElement("div");ge.setAttribute("oninput","return;"),se=typeof ge.oninput=="function"}W=se}else W=!1;K=W&&(!document.documentMode||9<document.documentMode)}function We(){va&&(va.detachEvent("onpropertychange",Fe),wa=va=null)}function Fe(e){if(e.propertyName==="value"&&R(wa)){var s=[];bl(s,wa,e,Cs(e)),qn(Oc,s)}}function et(e,s,o){e==="focusin"?(We(),va=s,wa=o,va.attachEvent("onpropertychange",Fe)):e==="focusout"&&We()}function vt(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return R(wa)}function Nt(e,s){if(e==="click")return R(s)}function Qt(e,s){if(e==="input"||e==="change")return R(s)}function Zt(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var wt=typeof Object.is=="function"?Object.is:Zt;function dt(e,s){if(wt(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!He.call(s,f)||!wt(e[f],s[f]))return!1}return!0}function cs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function us(e,s){var o=cs(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=cs(o)}}function ds(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?ds(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function vn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=Bo(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=Bo(e.document)}return s}function Bn(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var Wt=Vs&&"documentMode"in document&&11>=document.documentMode,qt=null,fs=null,Cn=null,to=!1;function To(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;to||qt==null||qt!==Bo(r)||(r=qt,"selectionStart"in r&&Bn(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cn&&dt(Cn,r)||(Cn=r,r=ku(fs,"onSelect"),0<r.length&&(s=new A("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=qt)))}function Qn(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var gi={animationend:Qn("Animation","AnimationEnd"),animationiteration:Qn("Animation","AnimationIteration"),animationstart:Qn("Animation","AnimationStart"),transitionrun:Qn("Transition","TransitionRun"),transitionstart:Qn("Transition","TransitionStart"),transitioncancel:Qn("Transition","TransitionCancel"),transitionend:Qn("Transition","TransitionEnd")},Di={},Ni={};Vs&&(Ni=document.createElement("div").style,"AnimationEvent"in window||(delete gi.animationend.animation,delete gi.animationiteration.animation,delete gi.animationstart.animation),"TransitionEvent"in window||delete gi.transitionend.transition);function In(e){if(Di[e])return Di[e];if(!gi[e])return e;var s=gi[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in Ni)return Di[e]=s[o];return e}var Ri=In("animationend"),Yi=In("animationiteration"),zc=In("animationstart"),Yd=In("transitionrun"),Wd=In("transitionstart"),Fd=In("transitioncancel"),Kp=In("transitionend"),Qp=new Map,Xd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xd.push("scrollEnd");function Bi(e,s){Qp.set(e,s),Qs(s,[e])}var $c=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yi=[],kr=0,qd=0;function Ic(){for(var e=kr,s=qd=kr=0;s<e;){var o=yi[s];yi[s++]=null;var r=yi[s];yi[s++]=null;var f=yi[s];yi[s++]=null;var m=yi[s];if(yi[s++]=null,r!==null&&f!==null){var v=r.pending;v===null?f.next=f:(f.next=v.next,v.next=f),r.pending=f}m!==0&&Zp(o,f,m)}}function Pc(e,s,o,r){yi[kr++]=e,yi[kr++]=s,yi[kr++]=o,yi[kr++]=r,qd|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Gd(e,s,o,r){return Pc(e,s,o,r),Hc(e)}function Ja(e,s){return Pc(e,null,null,s),Hc(e)}function Zp(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-St(o),e=m.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Hc(e){if(50<Ul)throw Ul=0,ih=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var jr={};function s2(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(e,s,o,r){return new s2(e,s,o,r)}function Kd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function na(e,s){var o=e.alternate;return o===null?(o=ri(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function Jp(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Uc(e,s,o,r,f,m){var v=0;if(r=e,typeof e=="function")Kd(e)&&(v=1);else if(typeof e=="string")v=lv(e,o,de.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Z:return e=ri(31,o,s,f),e.elementType=Z,e.lanes=m,e;case k:return er(o.children,f,m,s);case j:v=8,f|=24;break;case M:return e=ri(12,o,s,f|2),e.elementType=M,e.lanes=m,e;case P:return e=ri(13,o,s,f),e.elementType=P,e.lanes=m,e;case X:return e=ri(19,o,s,f),e.elementType=X,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break e;case I:v=9;break e;case N:v=11;break e;case Y:v=14;break e;case U:v=16,r=null;break e}v=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=ri(v,o,s,f),s.elementType=e,s.type=r,s.lanes=m,s}function er(e,s,o,r){return e=ri(7,e,r,s),e.lanes=o,e}function Qd(e,s,o){return e=ri(6,e,null,s),e.lanes=o,e}function e_(e){var s=ri(18,null,null,0);return s.stateNode=e,s}function Zd(e,s,o){return s=ri(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var t_=new WeakMap;function xi(e,s){if(typeof e=="object"&&e!==null){var o=t_.get(e);return o!==void 0?o:(s={value:e,source:s,stack:ce(s)},t_.set(e,s),s)}return{value:e,source:s,stack:ce(s)}}var Mr=[],Tr=0,Vc=null,vl=0,bi=[],vi=0,Sa=null,Wi=1,Fi="";function sa(e,s){Mr[Tr++]=vl,Mr[Tr++]=Vc,Vc=e,vl=s}function n_(e,s,o){bi[vi++]=Wi,bi[vi++]=Fi,bi[vi++]=Sa,Sa=e;var r=Wi;e=Fi;var f=32-St(r)-1;r&=~(1<<f),o+=1;var m=32-St(s)+f;if(30<m){var v=f-f%5;m=(r&(1<<v)-1).toString(32),r>>=v,f-=v,Wi=1<<32-St(s)+f|o<<f|r,Fi=m+e}else Wi=1<<m|o<<f|r,Fi=e}function Jd(e){e.return!==null&&(sa(e,1),n_(e,1,0))}function ef(e){for(;e===Vc;)Vc=Mr[--Tr],Mr[Tr]=null,vl=Mr[--Tr],Mr[Tr]=null;for(;e===Sa;)Sa=bi[--vi],bi[vi]=null,Fi=bi[--vi],bi[vi]=null,Wi=bi[--vi],bi[vi]=null}function s_(e,s){bi[vi++]=Wi,bi[vi++]=Fi,bi[vi++]=Sa,Wi=s.id,Fi=s.overflow,Sa=e}var yo=null,hs=null,bn=!1,Ca=null,wi=!1,tf=Error(a(519));function ka(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wl(xi(s,e)),tf}function o_(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[Jt]=e,s[yn]=r,o){case"dialog":mn("cancel",s),mn("close",s);break;case"iframe":case"object":case"embed":mn("load",s);break;case"video":case"audio":for(o=0;o<Yl.length;o++)mn(Yl[o],s);break;case"source":mn("error",s);break;case"img":case"image":case"link":mn("error",s),mn("load",s);break;case"details":mn("toggle",s);break;case"input":mn("invalid",s),xn(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":mn("invalid",s);break;case"textarea":mn("invalid",s),_i(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||v0(s.textContent,o)?(r.popover!=null&&(mn("beforetoggle",s),mn("toggle",s)),r.onScroll!=null&&mn("scroll",s),r.onScrollEnd!=null&&mn("scrollend",s),r.onClick!=null&&(s.onclick=Ls),s=!0):s=!1,s||ka(e,!0)}function i_(e){for(yo=e.return;yo;)switch(yo.tag){case 5:case 31:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:yo=yo.return}}function Er(e){if(e!==yo)return!1;if(!bn)return i_(e),bn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||bh(e.type,e.memoizedProps)),o=!o),o&&hs&&ka(e),i_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));hs=A0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));hs=A0(e)}else s===27?(s=hs,Ia(e.type)?(e=kh,kh=null,hs=e):hs=s):hs=yo?Ci(e.stateNode.nextSibling):null;return!0}function tr(){hs=yo=null,bn=!1}function nf(){var e=Ca;return e!==null&&(Zo===null?Zo=e:Zo.push.apply(Zo,e),Ca=null),e}function wl(e){Ca===null?Ca=[e]:Ca.push(e)}var sf=D(null),nr=null,oa=null;function ja(e,s,o){G(sf,s._currentValue),s._currentValue=o}function ia(e){e._currentValue=sf.current,te(sf)}function of(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function af(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var E=m;m=f;for(var F=0;F<s.length;F++)if(E.context===s[F]){m.lanes|=o,E=m.alternate,E!==null&&(E.lanes|=o),of(m.return,o,e),r||(v=null);break e}m=E.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),of(v,o,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Ar(e,s,o,r){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var E=f.type;wt(f.pendingProps.value,v.value)||(e!==null?e.push(E):e=[E])}}else if(f===ve.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Gl):e=[Gl])}f=f.return}e!==null&&af(s,e,o,r),s.flags|=262144}function Yc(e){for(e=e.firstContext;e!==null;){if(!wt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sr(e){nr=e,oa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xo(e){return a_(nr,e)}function Wc(e,s){return nr===null&&sr(e),a_(e,s)}function a_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},oa===null){if(e===null)throw Error(a(308));oa=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else oa=oa.next=s;return o}var o2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},i2=t.unstable_scheduleCallback,a2=t.unstable_NormalPriority,Ws={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rf(){return{controller:new o2,data:new Map,refCount:0}}function Sl(e){e.refCount--,e.refCount===0&&i2(a2,function(){e.controller.abort()})}var Cl=null,lf=0,Dr=0,Nr=null;function r2(e,s){if(Cl===null){var o=Cl=[];lf=0,Dr=dh(),Nr={status:"pending",value:void 0,then:function(r){o.push(r)}}}return lf++,s.then(r_,r_),s}function r_(){if(--lf===0&&Cl!==null){Nr!==null&&(Nr.status="fulfilled");var e=Cl;Cl=null,Dr=0,Nr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function l2(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var l_=z.S;z.S=function(e,s){Wg=at(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&r2(e,s),l_!==null&&l_(e,s)};var or=D(null);function cf(){var e=or.current;return e!==null?e:Zn.pooledCache}function Fc(e,s){s===null?G(or,or.current):G(or,s.pool)}function c_(){var e=cf();return e===null?null:{parent:Ws._currentValue,pool:e}}var Rr=Error(a(460)),uf=Error(a(474)),Xc=Error(a(542)),qc={then:function(){}};function u_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function d_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(Ls,Ls),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,h_(e),e;default:if(typeof s.status=="string")s.then(Ls,Ls);else{if(e=Zn,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,h_(e),e}throw ar=s,Rr}}function ir(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(ar=o,Rr):o}}var ar=null;function f_(){if(ar===null)throw Error(a(459));var e=ar;return ar=null,e}function h_(e){if(e===Rr||e===Xc)throw Error(a(483))}var Br=null,kl=0;function Gc(e){var s=kl;return kl+=1,Br===null&&(Br=[]),d_(Br,e,s)}function jl(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Kc(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function m_(e){function s(re,ee){if(e){var fe=re.deletions;fe===null?(re.deletions=[ee],re.flags|=16):fe.push(ee)}}function o(re,ee){if(!e)return null;for(;ee!==null;)s(re,ee),ee=ee.sibling;return null}function r(re){for(var ee=new Map;re!==null;)re.key!==null?ee.set(re.key,re):ee.set(re.index,re),re=re.sibling;return ee}function f(re,ee){return re=na(re,ee),re.index=0,re.sibling=null,re}function m(re,ee,fe){return re.index=fe,e?(fe=re.alternate,fe!==null?(fe=fe.index,fe<ee?(re.flags|=67108866,ee):fe):(re.flags|=67108866,ee)):(re.flags|=1048576,ee)}function v(re){return e&&re.alternate===null&&(re.flags|=67108866),re}function E(re,ee,fe,Ae){return ee===null||ee.tag!==6?(ee=Qd(fe,re.mode,Ae),ee.return=re,ee):(ee=f(ee,fe),ee.return=re,ee)}function F(re,ee,fe,Ae){var Pt=fe.type;return Pt===k?we(re,ee,fe.props.children,Ae,fe.key):ee!==null&&(ee.elementType===Pt||typeof Pt=="object"&&Pt!==null&&Pt.$$typeof===U&&ir(Pt)===ee.type)?(ee=f(ee,fe.props),jl(ee,fe),ee.return=re,ee):(ee=Uc(fe.type,fe.key,fe.props,null,re.mode,Ae),jl(ee,fe),ee.return=re,ee)}function he(re,ee,fe,Ae){return ee===null||ee.tag!==4||ee.stateNode.containerInfo!==fe.containerInfo||ee.stateNode.implementation!==fe.implementation?(ee=Zd(fe,re.mode,Ae),ee.return=re,ee):(ee=f(ee,fe.children||[]),ee.return=re,ee)}function we(re,ee,fe,Ae,Pt){return ee===null||ee.tag!==7?(ee=er(fe,re.mode,Ae,Pt),ee.return=re,ee):(ee=f(ee,fe),ee.return=re,ee)}function Re(re,ee,fe){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return ee=Qd(""+ee,re.mode,fe),ee.return=re,ee;if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case S:return fe=Uc(ee.type,ee.key,ee.props,null,re.mode,fe),jl(fe,ee),fe.return=re,fe;case C:return ee=Zd(ee,re.mode,fe),ee.return=re,ee;case U:return ee=ir(ee),Re(re,ee,fe)}if(le(ee)||be(ee))return ee=er(ee,re.mode,fe,null),ee.return=re,ee;if(typeof ee.then=="function")return Re(re,Gc(ee),fe);if(ee.$$typeof===L)return Re(re,Wc(re,ee),fe);Kc(re,ee)}return null}function pe(re,ee,fe,Ae){var Pt=ee!==null?ee.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint")return Pt!==null?null:E(re,ee,""+fe,Ae);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case S:return fe.key===Pt?F(re,ee,fe,Ae):null;case C:return fe.key===Pt?he(re,ee,fe,Ae):null;case U:return fe=ir(fe),pe(re,ee,fe,Ae)}if(le(fe)||be(fe))return Pt!==null?null:we(re,ee,fe,Ae,null);if(typeof fe.then=="function")return pe(re,ee,Gc(fe),Ae);if(fe.$$typeof===L)return pe(re,ee,Wc(re,fe),Ae);Kc(re,fe)}return null}function ye(re,ee,fe,Ae,Pt){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number"||typeof Ae=="bigint")return re=re.get(fe)||null,E(ee,re,""+Ae,Pt);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case S:return re=re.get(Ae.key===null?fe:Ae.key)||null,F(ee,re,Ae,Pt);case C:return re=re.get(Ae.key===null?fe:Ae.key)||null,he(ee,re,Ae,Pt);case U:return Ae=ir(Ae),ye(re,ee,fe,Ae,Pt)}if(le(Ae)||be(Ae))return re=re.get(fe)||null,we(ee,re,Ae,Pt,null);if(typeof Ae.then=="function")return ye(re,ee,fe,Gc(Ae),Pt);if(Ae.$$typeof===L)return ye(re,ee,fe,Wc(ee,Ae),Pt);Kc(ee,Ae)}return null}function jt(re,ee,fe,Ae){for(var Pt=null,Tn=null,Et=ee,cn=ee=0,_n=null;Et!==null&&cn<fe.length;cn++){Et.index>cn?(_n=Et,Et=null):_n=Et.sibling;var En=pe(re,Et,fe[cn],Ae);if(En===null){Et===null&&(Et=_n);break}e&&Et&&En.alternate===null&&s(re,Et),ee=m(En,ee,cn),Tn===null?Pt=En:Tn.sibling=En,Tn=En,Et=_n}if(cn===fe.length)return o(re,Et),bn&&sa(re,cn),Pt;if(Et===null){for(;cn<fe.length;cn++)Et=Re(re,fe[cn],Ae),Et!==null&&(ee=m(Et,ee,cn),Tn===null?Pt=Et:Tn.sibling=Et,Tn=Et);return bn&&sa(re,cn),Pt}for(Et=r(Et);cn<fe.length;cn++)_n=ye(Et,re,cn,fe[cn],Ae),_n!==null&&(e&&_n.alternate!==null&&Et.delete(_n.key===null?cn:_n.key),ee=m(_n,ee,cn),Tn===null?Pt=_n:Tn.sibling=_n,Tn=_n);return e&&Et.forEach(function(Ya){return s(re,Ya)}),bn&&sa(re,cn),Pt}function Yt(re,ee,fe,Ae){if(fe==null)throw Error(a(151));for(var Pt=null,Tn=null,Et=ee,cn=ee=0,_n=null,En=fe.next();Et!==null&&!En.done;cn++,En=fe.next()){Et.index>cn?(_n=Et,Et=null):_n=Et.sibling;var Ya=pe(re,Et,En.value,Ae);if(Ya===null){Et===null&&(Et=_n);break}e&&Et&&Ya.alternate===null&&s(re,Et),ee=m(Ya,ee,cn),Tn===null?Pt=Ya:Tn.sibling=Ya,Tn=Ya,Et=_n}if(En.done)return o(re,Et),bn&&sa(re,cn),Pt;if(Et===null){for(;!En.done;cn++,En=fe.next())En=Re(re,En.value,Ae),En!==null&&(ee=m(En,ee,cn),Tn===null?Pt=En:Tn.sibling=En,Tn=En);return bn&&sa(re,cn),Pt}for(Et=r(Et);!En.done;cn++,En=fe.next())En=ye(Et,re,cn,En.value,Ae),En!==null&&(e&&En.alternate!==null&&Et.delete(En.key===null?cn:En.key),ee=m(En,ee,cn),Tn===null?Pt=En:Tn.sibling=En,Tn=En);return e&&Et.forEach(function(xv){return s(re,xv)}),bn&&sa(re,cn),Pt}function Un(re,ee,fe,Ae){if(typeof fe=="object"&&fe!==null&&fe.type===k&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case S:e:{for(var Pt=fe.key;ee!==null;){if(ee.key===Pt){if(Pt=fe.type,Pt===k){if(ee.tag===7){o(re,ee.sibling),Ae=f(ee,fe.props.children),Ae.return=re,re=Ae;break e}}else if(ee.elementType===Pt||typeof Pt=="object"&&Pt!==null&&Pt.$$typeof===U&&ir(Pt)===ee.type){o(re,ee.sibling),Ae=f(ee,fe.props),jl(Ae,fe),Ae.return=re,re=Ae;break e}o(re,ee);break}else s(re,ee);ee=ee.sibling}fe.type===k?(Ae=er(fe.props.children,re.mode,Ae,fe.key),Ae.return=re,re=Ae):(Ae=Uc(fe.type,fe.key,fe.props,null,re.mode,Ae),jl(Ae,fe),Ae.return=re,re=Ae)}return v(re);case C:e:{for(Pt=fe.key;ee!==null;){if(ee.key===Pt)if(ee.tag===4&&ee.stateNode.containerInfo===fe.containerInfo&&ee.stateNode.implementation===fe.implementation){o(re,ee.sibling),Ae=f(ee,fe.children||[]),Ae.return=re,re=Ae;break e}else{o(re,ee);break}else s(re,ee);ee=ee.sibling}Ae=Zd(fe,re.mode,Ae),Ae.return=re,re=Ae}return v(re);case U:return fe=ir(fe),Un(re,ee,fe,Ae)}if(le(fe))return jt(re,ee,fe,Ae);if(be(fe)){if(Pt=be(fe),typeof Pt!="function")throw Error(a(150));return fe=Pt.call(fe),Yt(re,ee,fe,Ae)}if(typeof fe.then=="function")return Un(re,ee,Gc(fe),Ae);if(fe.$$typeof===L)return Un(re,ee,Wc(re,fe),Ae);Kc(re,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint"?(fe=""+fe,ee!==null&&ee.tag===6?(o(re,ee.sibling),Ae=f(ee,fe),Ae.return=re,re=Ae):(o(re,ee),Ae=Qd(fe,re.mode,Ae),Ae.return=re,re=Ae),v(re)):o(re,ee)}return function(re,ee,fe,Ae){try{kl=0;var Pt=Un(re,ee,fe,Ae);return Br=null,Pt}catch(Et){if(Et===Rr||Et===Xc)throw Et;var Tn=ri(29,Et,null,re.mode);return Tn.lanes=Ae,Tn.return=re,Tn}finally{}}}var rr=m_(!0),p_=m_(!1),Ma=!1;function df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ea(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Dn&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Hc(e),Zp(e,null,o),s}return Pc(e,r,s,o),Hc(e)}function Ml(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,os(e,o)}}function hf(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var mf=!1;function Tl(){if(mf){var e=Nr;if(e!==null)throw e}}function El(e,s,o,r){mf=!1;var f=e.updateQueue;Ma=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,E=f.shared.pending;if(E!==null){f.shared.pending=null;var F=E,he=F.next;F.next=null,v===null?m=he:v.next=he,v=F;var we=e.alternate;we!==null&&(we=we.updateQueue,E=we.lastBaseUpdate,E!==v&&(E===null?we.firstBaseUpdate=he:E.next=he,we.lastBaseUpdate=F))}if(m!==null){var Re=f.baseState;v=0,we=he=F=null,E=m;do{var pe=E.lane&-536870913,ye=pe!==E.lane;if(ye?(pn&pe)===pe:(r&pe)===pe){pe!==0&&pe===Dr&&(mf=!0),we!==null&&(we=we.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var jt=e,Yt=E;pe=s;var Un=o;switch(Yt.tag){case 1:if(jt=Yt.payload,typeof jt=="function"){Re=jt.call(Un,Re,pe);break e}Re=jt;break e;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=Yt.payload,pe=typeof jt=="function"?jt.call(Un,Re,pe):jt,pe==null)break e;Re=x({},Re,pe);break e;case 2:Ma=!0}}pe=E.callback,pe!==null&&(e.flags|=64,ye&&(e.flags|=8192),ye=f.callbacks,ye===null?f.callbacks=[pe]:ye.push(pe))}else ye={lane:pe,tag:E.tag,payload:E.payload,callback:E.callback,next:null},we===null?(he=we=ye,F=Re):we=we.next=ye,v|=pe;if(E=E.next,E===null){if(E=f.shared.pending,E===null)break;ye=E,E=ye.next,ye.next=null,f.lastBaseUpdate=ye,f.shared.pending=null}}while(!0);we===null&&(F=Re),f.baseState=F,f.firstBaseUpdate=he,f.lastBaseUpdate=we,m===null&&(f.shared.lanes=0),Ba|=v,e.lanes=v,e.memoizedState=Re}}function __(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function g_(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)__(o[e],s)}var Lr=D(null),Qc=D(0);function y_(e,s){e=ma,G(Qc,e),G(Lr,s),ma=e|s.baseLanes}function pf(){G(Qc,ma),G(Lr,Lr.current)}function _f(){ma=Qc.current,te(Lr),te(Qc)}var li=D(null),Si=null;function Aa(e){var s=e.alternate;G(Os,Os.current&1),G(li,e),Si===null&&(s===null||Lr.current!==null||s.memoizedState!==null)&&(Si=e)}function gf(e){G(Os,Os.current),G(li,e),Si===null&&(Si=e)}function x_(e){e.tag===22?(G(Os,Os.current),G(li,e),Si===null&&(Si=e)):Da()}function Da(){G(Os,Os.current),G(li,li.current)}function ci(e){te(li),Si===e&&(Si=null),te(Os)}var Os=D(0);function Zc(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Sh(o)||Ch(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var aa=0,an=null,Pn=null,Fs=null,Jc=!1,Or=!1,lr=!1,eu=0,Al=0,zr=null,c2=0;function Es(){throw Error(a(321))}function yf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!wt(e[o],s[o]))return!1;return!0}function xf(e,s,o,r,f,m){return aa=m,an=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,z.H=e===null||e.memoizedState===null?ng:Bf,lr=!1,m=o(r,f),lr=!1,Or&&(m=v_(s,o,r,f)),b_(e),m}function b_(e){z.H=Rl;var s=Pn!==null&&Pn.next!==null;if(aa=0,Fs=Pn=an=null,Jc=!1,Al=0,zr=null,s)throw Error(a(300));e===null||Xs||(e=e.dependencies,e!==null&&Yc(e)&&(Xs=!0))}function v_(e,s,o,r){an=e;var f=0;do{if(Or&&(zr=null),Al=0,Or=!1,25<=f)throw Error(a(301));if(f+=1,Fs=Pn=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=sg,m=s(o,r)}while(Or);return m}function u2(){var e=z.H,s=e.useState()[0];return s=typeof s.then=="function"?Dl(s):s,e=e.useState()[0],(Pn!==null?Pn.memoizedState:null)!==e&&(an.flags|=1024),s}function bf(){var e=eu!==0;return eu=0,e}function vf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function wf(e){if(Jc){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}Jc=!1}aa=0,Fs=Pn=an=null,Or=!1,Al=eu=0,zr=null}function Io(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fs===null?an.memoizedState=Fs=e:Fs=Fs.next=e,Fs}function zs(){if(Pn===null){var e=an.alternate;e=e!==null?e.memoizedState:null}else e=Pn.next;var s=Fs===null?an.memoizedState:Fs.next;if(s!==null)Fs=s,Pn=e;else{if(e===null)throw an.alternate===null?Error(a(467)):Error(a(310));Pn=e,e={memoizedState:Pn.memoizedState,baseState:Pn.baseState,baseQueue:Pn.baseQueue,queue:Pn.queue,next:null},Fs===null?an.memoizedState=Fs=e:Fs=Fs.next=e}return Fs}function tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dl(e){var s=Al;return Al+=1,zr===null&&(zr=[]),e=d_(zr,e,s),s=an,(Fs===null?s.memoizedState:Fs.next)===null&&(s=s.alternate,z.H=s===null||s.memoizedState===null?ng:Bf),e}function nu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Dl(e);if(e.$$typeof===L)return xo(e)}throw Error(a(438,String(e)))}function Sf(e){var s=null,o=an.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=an.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=tu(),an.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=oe;return s.index++,o}function ra(e,s){return typeof s=="function"?s(e):s}function su(e){var s=zs();return Cf(s,Pn,e)}function Cf(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,m=r.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,r.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var E=v=null,F=null,he=s,we=!1;do{var Re=he.lane&-536870913;if(Re!==he.lane?(pn&Re)===Re:(aa&Re)===Re){var pe=he.revertLane;if(pe===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),Re===Dr&&(we=!0);else if((aa&pe)===pe){he=he.next,pe===Dr&&(we=!0);continue}else Re={lane:0,revertLane:he.revertLane,gesture:null,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null},F===null?(E=F=Re,v=m):F=F.next=Re,an.lanes|=pe,Ba|=pe;Re=he.action,lr&&o(m,Re),m=he.hasEagerState?he.eagerState:o(m,Re)}else pe={lane:Re,revertLane:he.revertLane,gesture:he.gesture,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null},F===null?(E=F=pe,v=m):F=F.next=pe,an.lanes|=Re,Ba|=Re;he=he.next}while(he!==null&&he!==s);if(F===null?v=m:F.next=E,!wt(m,e.memoizedState)&&(Xs=!0,we&&(o=Nr,o!==null)))throw o;e.memoizedState=m,e.baseState=v,e.baseQueue=F,r.lastRenderedState=m}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function kf(e){var s=zs(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);wt(m,s.memoizedState)||(Xs=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function w_(e,s,o){var r=an,f=zs(),m=bn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!wt((Pn||f).memoizedState,o);if(v&&(f.memoizedState=o,Xs=!0),f=f.queue,Tf(k_.bind(null,r,f,e),[e]),f.getSnapshot!==s||v||Fs!==null&&Fs.memoizedState.tag&1){if(r.flags|=2048,$r(9,{destroy:void 0},C_.bind(null,r,f,o,s),null),Zn===null)throw Error(a(349));m||(aa&127)!==0||S_(r,s,o)}return o}function S_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=an.updateQueue,s===null?(s=tu(),an.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function C_(e,s,o,r){s.value=o,s.getSnapshot=r,j_(s)&&M_(e)}function k_(e,s,o){return o(function(){j_(s)&&M_(e)})}function j_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!wt(e,o)}catch{return!0}}function M_(e){var s=Ja(e,2);s!==null&&Jo(s,e,2)}function jf(e){var s=Io();if(typeof e=="function"){var o=e;if(e=o(),lr){De(!0);try{o()}finally{De(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},s}function T_(e,s,o,r){return e.baseState=o,Cf(e,Pn,typeof r=="function"?r:ra)}function d2(e,s,o,r,f){if(au(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};z.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,E_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function E_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var m=z.T,v={};z.T=v;try{var E=o(f,r),F=z.S;F!==null&&F(v,E),A_(e,s,E)}catch(he){Mf(e,s,he)}finally{m!==null&&v.types!==null&&(m.types=v.types),z.T=m}}else try{m=o(f,r),A_(e,s,m)}catch(he){Mf(e,s,he)}}function A_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){D_(e,s,r)},function(r){return Mf(e,s,r)}):D_(e,s,o)}function D_(e,s,o){s.status="fulfilled",s.value=o,N_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,E_(e,o)))}function Mf(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,N_(s),s=s.next;while(s!==r)}e.action=null}function N_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function R_(e,s){return s}function B_(e,s){if(bn){var o=Zn.formState;if(o!==null){e:{var r=an;if(bn){if(hs){t:{for(var f=hs,m=wi;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ci(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){hs=Ci(f.nextSibling),r=f.data==="F!";break e}}ka(r)}r=!1}r&&(s=o[0])}}return o=Io(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:R_,lastRenderedState:s},o.queue=r,o=J_.bind(null,an,r),r.dispatch=o,r=jf(!1),m=Rf.bind(null,an,!1,r.queue),r=Io(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=d2.bind(null,an,f,m,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function L_(e){var s=zs();return O_(s,Pn,e)}function O_(e,s,o){if(s=Cf(e,s,R_)[0],e=su(ra)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=Dl(s)}catch(v){throw v===Rr?Xc:v}else r=s;s=zs();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(an.flags|=2048,$r(9,{destroy:void 0},f2.bind(null,f,o),null)),[r,m,e]}function f2(e,s){e.action=s}function z_(e){var s=zs(),o=Pn;if(o!==null)return O_(s,o,e);zs(),s=s.memoizedState,o=zs();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function $r(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=an.updateQueue,s===null&&(s=tu(),an.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function $_(){return zs().memoizedState}function ou(e,s,o,r){var f=Io();an.flags|=e,f.memoizedState=$r(1|s,{destroy:void 0},o,r===void 0?null:r)}function iu(e,s,o,r){var f=zs();r=r===void 0?null:r;var m=f.memoizedState.inst;Pn!==null&&r!==null&&yf(r,Pn.memoizedState.deps)?f.memoizedState=$r(s,m,o,r):(an.flags|=e,f.memoizedState=$r(1|s,m,o,r))}function I_(e,s){ou(8390656,8,e,s)}function Tf(e,s){iu(2048,8,e,s)}function h2(e){an.flags|=4;var s=an.updateQueue;if(s===null)s=tu(),an.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function P_(e){var s=zs().memoizedState;return h2({ref:s,nextImpl:e}),function(){if((Dn&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function H_(e,s){return iu(4,2,e,s)}function U_(e,s){return iu(4,4,e,s)}function V_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function Y_(e,s,o){o=o!=null?o.concat([e]):null,iu(4,4,V_.bind(null,s,e),o)}function Ef(){}function W_(e,s){var o=zs();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&yf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function F_(e,s){var o=zs();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&yf(s,r[1]))return r[0];if(r=e(),lr){De(!0);try{e()}finally{De(!1)}}return o.memoizedState=[r,s],r}function Af(e,s,o){return o===void 0||(aa&1073741824)!==0&&(pn&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=Xg(),an.lanes|=e,Ba|=e,o)}function X_(e,s,o,r){return wt(o,s)?o:Lr.current!==null?(e=Af(e,o,r),wt(e,s)||(Xs=!0),e):(aa&42)===0||(aa&1073741824)!==0&&(pn&261930)===0?(Xs=!0,e.memoizedState=o):(e=Xg(),an.lanes|=e,Ba|=e,s)}function q_(e,s,o,r,f){var m=ae.p;ae.p=m!==0&&8>m?m:8;var v=z.T,E={};z.T=E,Rf(e,!1,s,o);try{var F=f(),he=z.S;if(he!==null&&he(E,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var we=l2(F,r);Nl(e,s,we,fi(e))}else Nl(e,s,r,fi(e))}catch(Re){Nl(e,s,{then:function(){},status:"rejected",reason:Re},fi())}finally{ae.p=m,v!==null&&E.types!==null&&(v.types=E.types),z.T=v}}function m2(){}function Df(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=G_(e).queue;q_(e,f,s,q,o===null?m2:function(){return K_(e),o(r)})}function G_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:q},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function K_(e){var s=G_(e);s.next===null&&(s=e.alternate.memoizedState),Nl(e,s.next.queue,{},fi())}function Nf(){return xo(Gl)}function Q_(){return zs().memoizedState}function Z_(){return zs().memoizedState}function p2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=fi();e=Ta(o);var r=Ea(s,e,o);r!==null&&(Jo(r,s,o),Ml(r,s,o)),s={cache:rf()},e.payload=s;return}s=s.return}}function _2(e,s,o){var r=fi();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},au(e)?eg(s,o):(o=Gd(e,s,o,r),o!==null&&(Jo(o,e,r),tg(o,s,r)))}function J_(e,s,o){var r=fi();Nl(e,s,o,r)}function Nl(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(au(e))eg(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,E=m(v,o);if(f.hasEagerState=!0,f.eagerState=E,wt(E,v))return Pc(e,s,f,0),Zn===null&&Ic(),!1}catch{}finally{}if(o=Gd(e,s,f,r),o!==null)return Jo(o,e,r),tg(o,s,r),!0}return!1}function Rf(e,s,o,r){if(r={lane:2,revertLane:dh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},au(e)){if(s)throw Error(a(479))}else s=Gd(e,o,r,2),s!==null&&Jo(s,e,2)}function au(e){var s=e.alternate;return e===an||s!==null&&s===an}function eg(e,s){Or=Jc=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function tg(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,os(e,o)}}var Rl={readContext:xo,use:nu,useCallback:Es,useContext:Es,useEffect:Es,useImperativeHandle:Es,useLayoutEffect:Es,useInsertionEffect:Es,useMemo:Es,useReducer:Es,useRef:Es,useState:Es,useDebugValue:Es,useDeferredValue:Es,useTransition:Es,useSyncExternalStore:Es,useId:Es,useHostTransitionStatus:Es,useFormState:Es,useActionState:Es,useOptimistic:Es,useMemoCache:Es,useCacheRefresh:Es};Rl.useEffectEvent=Es;var ng={readContext:xo,use:nu,useCallback:function(e,s){return Io().memoizedState=[e,s===void 0?null:s],e},useContext:xo,useEffect:I_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,ou(4194308,4,V_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return ou(4194308,4,e,s)},useInsertionEffect:function(e,s){ou(4,2,e,s)},useMemo:function(e,s){var o=Io();s=s===void 0?null:s;var r=e();if(lr){De(!0);try{e()}finally{De(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=Io();if(o!==void 0){var f=o(s);if(lr){De(!0);try{o(s)}finally{De(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=_2.bind(null,an,e),[r.memoizedState,e]},useRef:function(e){var s=Io();return e={current:e},s.memoizedState=e},useState:function(e){e=jf(e);var s=e.queue,o=J_.bind(null,an,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Ef,useDeferredValue:function(e,s){var o=Io();return Af(o,e,s)},useTransition:function(){var e=jf(!1);return e=q_.bind(null,an,e.queue,!0,!1),Io().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=an,f=Io();if(bn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),Zn===null)throw Error(a(349));(pn&127)!==0||S_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,I_(k_.bind(null,r,m,e),[e]),r.flags|=2048,$r(9,{destroy:void 0},C_.bind(null,r,m,o,s),null),o},useId:function(){var e=Io(),s=Zn.identifierPrefix;if(bn){var o=Fi,r=Wi;o=(r&~(1<<32-St(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=eu++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=c2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Nf,useFormState:B_,useActionState:B_,useOptimistic:function(e){var s=Io();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Rf.bind(null,an,!0,o),o.dispatch=s,[e,s]},useMemoCache:Sf,useCacheRefresh:function(){return Io().memoizedState=p2.bind(null,an)},useEffectEvent:function(e){var s=Io(),o={impl:e};return s.memoizedState=o,function(){if((Dn&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Bf={readContext:xo,use:nu,useCallback:W_,useContext:xo,useEffect:Tf,useImperativeHandle:Y_,useInsertionEffect:H_,useLayoutEffect:U_,useMemo:F_,useReducer:su,useRef:$_,useState:function(){return su(ra)},useDebugValue:Ef,useDeferredValue:function(e,s){var o=zs();return X_(o,Pn.memoizedState,e,s)},useTransition:function(){var e=su(ra)[0],s=zs().memoizedState;return[typeof e=="boolean"?e:Dl(e),s]},useSyncExternalStore:w_,useId:Q_,useHostTransitionStatus:Nf,useFormState:L_,useActionState:L_,useOptimistic:function(e,s){var o=zs();return T_(o,Pn,e,s)},useMemoCache:Sf,useCacheRefresh:Z_};Bf.useEffectEvent=P_;var sg={readContext:xo,use:nu,useCallback:W_,useContext:xo,useEffect:Tf,useImperativeHandle:Y_,useInsertionEffect:H_,useLayoutEffect:U_,useMemo:F_,useReducer:kf,useRef:$_,useState:function(){return kf(ra)},useDebugValue:Ef,useDeferredValue:function(e,s){var o=zs();return Pn===null?Af(o,e,s):X_(o,Pn.memoizedState,e,s)},useTransition:function(){var e=kf(ra)[0],s=zs().memoizedState;return[typeof e=="boolean"?e:Dl(e),s]},useSyncExternalStore:w_,useId:Q_,useHostTransitionStatus:Nf,useFormState:z_,useActionState:z_,useOptimistic:function(e,s){var o=zs();return Pn!==null?T_(o,Pn,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Sf,useCacheRefresh:Z_};sg.useEffectEvent=P_;function Lf(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Of={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=fi(),f=Ta(r);f.payload=s,o!=null&&(f.callback=o),s=Ea(e,f,r),s!==null&&(Jo(s,e,r),Ml(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=fi(),f=Ta(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Ea(e,f,r),s!==null&&(Jo(s,e,r),Ml(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=fi(),r=Ta(o);r.tag=2,s!=null&&(r.callback=s),s=Ea(e,r,o),s!==null&&(Jo(s,e,o),Ml(s,e,o))}};function og(e,s,o,r,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,m,v):s.prototype&&s.prototype.isPureReactComponent?!dt(o,r)||!dt(f,m):!0}function ig(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&Of.enqueueReplaceState(s,s.state,null)}function cr(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function ag(e){$c(e)}function rg(e){console.error(e)}function lg(e){$c(e)}function ru(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function cg(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function zf(e,s,o){return o=Ta(o),o.tag=3,o.payload={element:null},o.callback=function(){ru(e,s)},o}function ug(e){return e=Ta(e),e.tag=3,e}function dg(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;e.payload=function(){return f(m)},e.callback=function(){cg(s,o,r)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){cg(s,o,r),typeof f!="function"&&(La===null?La=new Set([this]):La.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function g2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&Ar(s,o,f,!0),o=li.current,o!==null){switch(o.tag){case 31:case 13:return Si===null?xu():o.alternate===null&&As===0&&(As=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===qc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),lh(e,r,f)),!1;case 22:return o.flags|=65536,r===qc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),lh(e,r,f)),!1}throw Error(a(435,o.tag))}return lh(e,r,f),xu(),!1}if(bn)return s=li.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==tf&&(e=Error(a(422),{cause:r}),wl(xi(e,o)))):(r!==tf&&(s=Error(a(423),{cause:r}),wl(xi(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=xi(r,o),f=zf(e.stateNode,r,f),hf(e,f),As!==4&&(As=2)),!1;var m=Error(a(520),{cause:r});if(m=xi(m,o),Hl===null?Hl=[m]:Hl.push(m),As!==4&&(As=2),s===null)return!0;r=xi(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=zf(o.stateNode,r,e),hf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(La===null||!La.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=ug(f),dg(f,e,o,r),hf(o,f),!1}o=o.return}while(o!==null);return!1}var $f=Error(a(461)),Xs=!1;function bo(e,s,o,r){s.child=e===null?p_(s,null,o,r):rr(s,e.child,o,r)}function fg(e,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var v={};for(var E in r)E!=="ref"&&(v[E]=r[E])}else v=r;return sr(s),r=xf(e,s,o,v,m,f),E=bf(),e!==null&&!Xs?(vf(e,s,f),la(e,s,f)):(bn&&E&&Jd(s),s.flags|=1,bo(e,s,r,f),s.child)}function hg(e,s,o,r,f){if(e===null){var m=o.type;return typeof m=="function"&&!Kd(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,mg(e,s,m,r,f)):(e=Uc(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Ff(e,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:dt,o(v,r)&&e.ref===s.ref)return la(e,s,f)}return s.flags|=1,e=na(m,r),e.ref=s.ref,e.return=s,s.child=e}function mg(e,s,o,r,f){if(e!==null){var m=e.memoizedProps;if(dt(m,r)&&e.ref===s.ref)if(Xs=!1,s.pendingProps=r=m,Ff(e,f))(e.flags&131072)!==0&&(Xs=!0);else return s.lanes=e.lanes,la(e,s,f)}return If(e,s,o,r,f)}function pg(e,s,o,r){var f=r.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return _g(e,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fc(s,m!==null?m.cachePool:null),m!==null?y_(s,m):pf(),x_(s);else return r=s.lanes=536870912,_g(e,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(Fc(s,m.cachePool),y_(s,m),Da(),s.memoizedState=null):(e!==null&&Fc(s,null),pf(),Da());return bo(e,s,f,o),s.child}function Bl(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function _g(e,s,o,r,f){var m=cf();return m=m===null?null:{parent:Ws._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&Fc(s,null),pf(),x_(s),e!==null&&Ar(e,s,r,!0),s.childLanes=f,null}function lu(e,s){return s=uu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function gg(e,s,o){return rr(s,e.child,null,o),e=lu(s,s.pendingProps),e.flags|=2,ci(s),s.memoizedState=null,e}function y2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(bn){if(r.mode==="hidden")return e=lu(s,r),s.lanes=536870912,Bl(null,e);if(gf(s),(e=hs)?(e=E0(e,wi),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Sa!==null?{id:Wi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},o=e_(e),o.return=s,s.child=o,yo=s,hs=null)):e=null,e===null)throw ka(s);return s.lanes=536870912,null}return lu(s,r)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(gf(s),f)if(s.flags&256)s.flags&=-257,s=gg(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(Xs||Ar(e,s,o,!1),f=(o&e.childLanes)!==0,Xs||f){if(r=Zn,r!==null&&(v=gn(r,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,Ja(e,v),Jo(r,e,v),$f;xu(),s=gg(e,s,o)}else e=m.treeContext,hs=Ci(v.nextSibling),yo=s,bn=!0,Ca=null,wi=!1,e!==null&&s_(s,e),s=lu(s,r),s.flags|=4096;return s}return e=na(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function cu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function If(e,s,o,r,f){return sr(s),o=xf(e,s,o,r,void 0,f),r=bf(),e!==null&&!Xs?(vf(e,s,f),la(e,s,f)):(bn&&r&&Jd(s),s.flags|=1,bo(e,s,o,f),s.child)}function yg(e,s,o,r,f,m){return sr(s),s.updateQueue=null,o=v_(s,r,o,f),b_(e),r=bf(),e!==null&&!Xs?(vf(e,s,m),la(e,s,m)):(bn&&r&&Jd(s),s.flags|=1,bo(e,s,o,m),s.child)}function xg(e,s,o,r,f){if(sr(s),s.stateNode===null){var m=jr,v=o.contextType;typeof v=="object"&&v!==null&&(m=xo(v)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Of,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},df(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?xo(v):jr,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Lf(s,o,v,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&Of.enqueueReplaceState(m,m.state,null),El(s,r,m,f),Tl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){m=s.stateNode;var E=s.memoizedProps,F=cr(o,E);m.props=F;var he=m.context,we=o.contextType;v=jr,typeof we=="object"&&we!==null&&(v=xo(we));var Re=o.getDerivedStateFromProps;we=typeof Re=="function"||typeof m.getSnapshotBeforeUpdate=="function",E=s.pendingProps!==E,we||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E||he!==v)&&ig(s,m,r,v),Ma=!1;var pe=s.memoizedState;m.state=pe,El(s,r,m,f),Tl(),he=s.memoizedState,E||pe!==he||Ma?(typeof Re=="function"&&(Lf(s,o,Re,r),he=s.memoizedState),(F=Ma||og(s,o,F,r,pe,he,v))?(we||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=he),m.props=r,m.state=he,m.context=v,r=F):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,ff(e,s),v=s.memoizedProps,we=cr(o,v),m.props=we,Re=s.pendingProps,pe=m.context,he=o.contextType,F=jr,typeof he=="object"&&he!==null&&(F=xo(he)),E=o.getDerivedStateFromProps,(he=typeof E=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==Re||pe!==F)&&ig(s,m,r,F),Ma=!1,pe=s.memoizedState,m.state=pe,El(s,r,m,f),Tl();var ye=s.memoizedState;v!==Re||pe!==ye||Ma||e!==null&&e.dependencies!==null&&Yc(e.dependencies)?(typeof E=="function"&&(Lf(s,o,E,r),ye=s.memoizedState),(we=Ma||og(s,o,we,r,pe,ye,F)||e!==null&&e.dependencies!==null&&Yc(e.dependencies))?(he||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,ye,F),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,ye,F)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&pe===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&pe===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=ye),m.props=r,m.state=ye,m.context=F,r=we):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&pe===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&pe===e.memoizedState||(s.flags|=1024),r=!1)}return m=r,cu(e,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&r?(s.child=rr(s,e.child,null,f),s.child=rr(s,null,o,f)):bo(e,s,o,f),s.memoizedState=m.state,e=s.child):e=la(e,s,f),e}function bg(e,s,o,r){return tr(),s.flags|=256,bo(e,s,o,r),s.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(e){return{baseLanes:e,cachePool:c_()}}function Uf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=di),e}function vg(e,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(Os.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if(bn){if(f?Aa(s):Da(),(e=hs)?(e=E0(e,wi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Sa!==null?{id:Wi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},o=e_(e),o.return=s,s.child=o,yo=s,hs=null)):e=null,e===null)throw ka(s);return Ch(e)?s.lanes=32:s.lanes=536870912,null}var E=r.children;return r=r.fallback,f?(Da(),f=s.mode,E=uu({mode:"hidden",children:E},f),r=er(r,f,o,null),E.return=s,r.return=s,E.sibling=r,s.child=E,r=s.child,r.memoizedState=Hf(o),r.childLanes=Uf(e,v,o),s.memoizedState=Pf,Bl(null,r)):(Aa(s),Vf(s,E))}var F=e.memoizedState;if(F!==null&&(E=F.dehydrated,E!==null)){if(m)s.flags&256?(Aa(s),s.flags&=-257,s=Yf(e,s,o)):s.memoizedState!==null?(Da(),s.child=e.child,s.flags|=128,s=null):(Da(),E=r.fallback,f=s.mode,r=uu({mode:"visible",children:r.children},f),E=er(E,f,o,null),E.flags|=2,r.return=s,E.return=s,r.sibling=E,s.child=r,rr(s,e.child,null,o),r=s.child,r.memoizedState=Hf(o),r.childLanes=Uf(e,v,o),s.memoizedState=Pf,s=Bl(null,r));else if(Aa(s),Ch(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var he=v.dgst;v=he,r=Error(a(419)),r.stack="",r.digest=v,wl({value:r,source:null,stack:null}),s=Yf(e,s,o)}else if(Xs||Ar(e,s,o,!1),v=(o&e.childLanes)!==0,Xs||v){if(v=Zn,v!==null&&(r=gn(v,o),r!==0&&r!==F.retryLane))throw F.retryLane=r,Ja(e,r),Jo(v,e,r),$f;Sh(E)||xu(),s=Yf(e,s,o)}else Sh(E)?(s.flags|=192,s.child=e.child,s=null):(e=F.treeContext,hs=Ci(E.nextSibling),yo=s,bn=!0,Ca=null,wi=!1,e!==null&&s_(s,e),s=Vf(s,r.children),s.flags|=4096);return s}return f?(Da(),E=r.fallback,f=s.mode,F=e.child,he=F.sibling,r=na(F,{mode:"hidden",children:r.children}),r.subtreeFlags=F.subtreeFlags&65011712,he!==null?E=na(he,E):(E=er(E,f,o,null),E.flags|=2),E.return=s,r.return=s,r.sibling=E,s.child=r,Bl(null,r),r=s.child,E=e.child.memoizedState,E===null?E=Hf(o):(f=E.cachePool,f!==null?(F=Ws._currentValue,f=f.parent!==F?{parent:F,pool:F}:f):f=c_(),E={baseLanes:E.baseLanes|o,cachePool:f}),r.memoizedState=E,r.childLanes=Uf(e,v,o),s.memoizedState=Pf,Bl(e.child,r)):(Aa(s),o=e.child,e=o.sibling,o=na(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=o,s.memoizedState=null,o)}function Vf(e,s){return s=uu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function uu(e,s){return e=ri(22,e,null,s),e.lanes=0,e}function Yf(e,s,o){return rr(s,e.child,null,o),e=Vf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function wg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),of(e.return,s,o)}function Wf(e,s,o,r,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function Sg(e,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var v=Os.current,E=(v&2)!==0;if(E?(v=v&1|2,s.flags|=128):v&=1,G(Os,v),bo(e,s,r,o),r=bn?vl:0,!E&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wg(e,o,s);else if(e.tag===19)wg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&Zc(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Wf(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&Zc(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Wf(s,!0,o,null,m,r);break;case"together":Wf(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function la(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),Ba|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(Ar(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=na(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=na(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Ff(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Yc(e)))}function x2(e,s,o){switch(s.tag){case 3:st(s,s.stateNode.containerInfo),ja(s,Ws,e.memoizedState.cache),tr();break;case 27:case 5:$e(s);break;case 4:st(s,s.stateNode.containerInfo);break;case 10:ja(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,gf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(Aa(s),s.flags|=128,null):(o&s.child.childLanes)!==0?vg(e,s,o):(Aa(s),e=la(e,s,o),e!==null?e.sibling:null);Aa(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(Ar(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return Sg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),G(Os,Os.current),r)break;return null;case 22:return s.lanes=0,pg(e,s,o,s.pendingProps);case 24:ja(s,Ws,e.memoizedState.cache)}return la(e,s,o)}function Cg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)Xs=!0;else{if(!Ff(e,o)&&(s.flags&128)===0)return Xs=!1,x2(e,s,o);Xs=(e.flags&131072)!==0}else Xs=!1,bn&&(s.flags&1048576)!==0&&n_(s,vl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=ir(s.elementType),s.type=e,typeof e=="function")Kd(e)?(r=cr(e,r),s.tag=1,s=xg(null,s,e,r,o)):(s.tag=0,s=If(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===N){s.tag=11,s=fg(null,s,e,r,o);break e}else if(f===Y){s.tag=14,s=hg(null,s,e,r,o);break e}}throw s=Q(e)||e,Error(a(306,s,""))}}return s;case 0:return If(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=cr(r,s.pendingProps),xg(e,s,r,f,o);case 3:e:{if(st(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,ff(e,s),El(s,r,null,o);var v=s.memoizedState;if(r=v.cache,ja(s,Ws,r),r!==m.cache&&af(s,[Ws],o,!0),Tl(),r=v.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=bg(e,s,r,o);break e}else if(r!==f){f=xi(Error(a(424)),s),wl(f),s=bg(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(hs=Ci(e.firstChild),yo=s,bn=!0,Ca=null,wi=!0,o=p_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(tr(),r===f){s=la(e,s,o);break e}bo(e,s,r,o)}s=s.child}return s;case 26:return cu(e,s),e===null?(o=L0(s.type,null,s.pendingProps,null))?s.memoizedState=o:bn||(o=s.type,e=s.pendingProps,r=ju(Ne.current).createElement(o),r[Jt]=s,r[yn]=e,vo(r,o,e),on(r),s.stateNode=r):s.memoizedState=L0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return $e(s),e===null&&bn&&(r=s.stateNode=N0(s.type,s.pendingProps,Ne.current),yo=s,wi=!0,f=hs,Ia(s.type)?(kh=f,hs=Ci(r.firstChild)):hs=f),bo(e,s,s.pendingProps.children,o),cu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&bn&&((f=r=hs)&&(r=G2(r,s.type,s.pendingProps,wi),r!==null?(s.stateNode=r,yo=s,hs=Ci(r.firstChild),wi=!1,f=!0):f=!1),f||ka(s)),$e(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,r=m.children,bh(f,m)?r=null:v!==null&&bh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=xf(e,s,u2,null,null,o),Gl._currentValue=f),cu(e,s),bo(e,s,r,o),s.child;case 6:return e===null&&bn&&((e=o=hs)&&(o=K2(o,s.pendingProps,wi),o!==null?(s.stateNode=o,yo=s,hs=null,e=!0):e=!1),e||ka(s)),null;case 13:return vg(e,s,o);case 4:return st(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=rr(s,null,r,o):bo(e,s,r,o),s.child;case 11:return fg(e,s,s.type,s.pendingProps,o);case 7:return bo(e,s,s.pendingProps,o),s.child;case 8:return bo(e,s,s.pendingProps.children,o),s.child;case 12:return bo(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,ja(s,s.type,r.value),bo(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,sr(s),f=xo(f),r=r(f),s.flags|=1,bo(e,s,r,o),s.child;case 14:return hg(e,s,s.type,s.pendingProps,o);case 15:return mg(e,s,s.type,s.pendingProps,o);case 19:return Sg(e,s,o);case 31:return y2(e,s,o);case 22:return pg(e,s,o,s.pendingProps);case 24:return sr(s),r=xo(Ws),e===null?(f=cf(),f===null&&(f=Zn,m=rf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},df(s),ja(s,Ws,f)):((e.lanes&o)!==0&&(ff(e,s),El(s,null,null,o),Tl()),f=e.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),ja(s,Ws,r)):(r=m.cache,ja(s,Ws,r),r!==f.cache&&af(s,[Ws],o,!0))),bo(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function ca(e){e.flags|=4}function Xf(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Qg())e.flags|=8192;else throw ar=qc,uf}else e.flags&=-16777217}function kg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!P0(s))if(Qg())e.flags|=8192;else throw ar=qc,uf}function du(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?zt():536870912,e.lanes|=s,Ur|=s)}function Ll(e,s){if(!bn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ms(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function b2(e,s,o){var r=s.pendingProps;switch(ef(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ms(s),null;case 1:return ms(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),ia(Ws),Ge(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Er(s)?ca(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,nf())),ms(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(ca(s),m!==null?(ms(s),kg(s,m)):(ms(s),Xf(s,f,null,r,o))):m?m!==e.memoizedState?(ca(s),ms(s),kg(s,m)):(ms(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&ca(s),ms(s),Xf(s,f,e,r,o)),null;case 27:if(rt(s),o=Ne.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ca(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return ms(s),null}e=de.current,Er(s)?o_(s):(e=N0(f,r,o),s.stateNode=e,ca(s))}return ms(s),null;case 5:if(rt(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ca(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return ms(s),null}if(m=de.current,Er(s))o_(s);else{var v=ju(Ne.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?v.createElement(f,{is:r.is}):v.createElement(f)}}m[Jt]=s,m[yn]=r;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(vo(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ca(s)}}return ms(s),Xf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&ca(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=Ne.current,Er(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=yo,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[Jt]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||v0(e.nodeValue,o)),e||ka(s,!0)}else e=ju(e).createTextNode(r),e[Jt]=s,s.stateNode=e}return ms(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=Er(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Jt]=s}else tr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ms(s),e=!1}else o=nf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(ci(s),s):(ci(s),null);if((s.flags&128)!==0)throw Error(a(558))}return ms(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Er(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[Jt]=s}else tr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ms(s),f=!1}else f=nf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(ci(s),s):(ci(s),null)}return ci(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),du(s,s.updateQueue),ms(s),null);case 4:return Ge(),e===null&&ph(s.stateNode.containerInfo),ms(s),null;case 10:return ia(s.type),ms(s),null;case 19:if(te(Os),r=s.memoizedState,r===null)return ms(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)Ll(r,!1);else{if(As!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=Zc(e),m!==null){for(s.flags|=128,Ll(r,!1),e=m.updateQueue,s.updateQueue=e,du(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)Jp(o,e),o=o.sibling;return G(Os,Os.current&1|2),bn&&sa(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&at()>_u&&(s.flags|=128,f=!0,Ll(r,!1),s.lanes=4194304)}else{if(!f)if(e=Zc(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,du(s,e),Ll(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!bn)return ms(s),null}else 2*at()-r.renderingStartTime>_u&&o!==536870912&&(s.flags|=128,f=!0,Ll(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(e=r.last,e!==null?e.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=at(),e.sibling=null,o=Os.current,G(Os,f?o&1|2:o&1),bn&&sa(s,r.treeForkCount),e):(ms(s),null);case 22:case 23:return ci(s),_f(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(ms(s),s.subtreeFlags&6&&(s.flags|=8192)):ms(s),o=s.updateQueue,o!==null&&du(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&te(or),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),ia(Ws),ms(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function v2(e,s){switch(ef(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return ia(Ws),Ge(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return rt(s),null;case 31:if(s.memoizedState!==null){if(ci(s),s.alternate===null)throw Error(a(340));tr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(ci(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));tr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return te(Os),null;case 4:return Ge(),null;case 10:return ia(s.type),null;case 22:case 23:return ci(s),_f(),e!==null&&te(or),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return ia(Ws),null;case 25:return null;default:return null}}function jg(e,s){switch(ef(s),s.tag){case 3:ia(Ws),Ge();break;case 26:case 27:case 5:rt(s);break;case 4:Ge();break;case 31:s.memoizedState!==null&&ci(s);break;case 13:ci(s);break;case 19:te(Os);break;case 10:ia(s.type);break;case 22:case 23:ci(s),_f(),e!==null&&te(or);break;case 24:ia(Ws)}}function Ol(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var m=o.create,v=o.inst;r=m(),v.destroy=r}o=o.next}while(o!==f)}}catch(E){zn(s,s.return,E)}}function Na(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&e)===e){var v=r.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,f=s;var F=o,he=E;try{he()}catch(we){zn(f,F,we)}}}r=r.next}while(r!==m)}}catch(we){zn(s,s.return,we)}}function Mg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{g_(s,o)}catch(r){zn(e,e.return,r)}}}function Tg(e,s,o){o.props=cr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){zn(e,s,r)}}function zl(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){zn(e,s,f)}}function Xi(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){zn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){zn(e,s,f)}else o.current=null}function Eg(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){zn(e,e.return,f)}}function qf(e,s,o){try{var r=e.stateNode;V2(r,e.type,o,s),r[yn]=s}catch(f){zn(e,e.return,f)}}function Ag(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ia(e.type)||e.tag===4}function Gf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ag(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kf(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Ls));else if(r!==4&&(r===27&&Ia(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(Kf(e,s,o),e=e.sibling;e!==null;)Kf(e,s,o),e=e.sibling}function fu(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&Ia(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(fu(e,s,o),e=e.sibling;e!==null;)fu(e,s,o),e=e.sibling}function Dg(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);vo(s,r,o),s[Jt]=e,s[yn]=o}catch(m){zn(e,e.return,m)}}var ua=!1,qs=!1,Qf=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,ho=null;function w2(e,s){if(e=e.containerInfo,yh=Ru,e=vn(e),Bn(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,E=-1,F=-1,he=0,we=0,Re=e,pe=null;t:for(;;){for(var ye;Re!==o||f!==0&&Re.nodeType!==3||(E=v+f),Re!==m||r!==0&&Re.nodeType!==3||(F=v+r),Re.nodeType===3&&(v+=Re.nodeValue.length),(ye=Re.firstChild)!==null;)pe=Re,Re=ye;for(;;){if(Re===e)break t;if(pe===o&&++he===f&&(E=v),pe===m&&++we===r&&(F=v),(ye=Re.nextSibling)!==null)break;Re=pe,pe=Re.parentNode}Re=ye}o=E===-1||F===-1?null:{start:E,end:F}}else o=null}o=o||{start:0,end:0}}else o=null;for(xh={focusedElem:e,selectionRange:o},Ru=!1,ho=s;ho!==null;)if(s=ho,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,ho=e;else for(;ho!==null;){switch(s=ho,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var jt=cr(o.type,f);e=r.getSnapshotBeforeUpdate(jt,m),r.__reactInternalSnapshotBeforeUpdate=e}catch(Yt){zn(o,o.return,Yt)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)wh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,ho=e;break}ho=s.return}}function Rg(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:fa(e,o),r&4&&Ol(5,o);break;case 1:if(fa(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(v){zn(o,o.return,v)}else{var f=cr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){zn(o,o.return,v)}}r&64&&Mg(o),r&512&&zl(o,o.return);break;case 3:if(fa(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{g_(e,s)}catch(v){zn(o,o.return,v)}}break;case 27:s===null&&r&4&&Dg(o);case 26:case 5:fa(e,o),s===null&&r&4&&Eg(o),r&512&&zl(o,o.return);break;case 12:fa(e,o);break;case 31:fa(e,o),r&4&&Og(e,o);break;case 13:fa(e,o),r&4&&zg(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=D2.bind(null,o),Q2(e,o))));break;case 22:if(r=o.memoizedState!==null||ua,!r){s=s!==null&&s.memoizedState!==null||qs,f=ua;var m=qs;ua=r,(qs=s)&&!m?ha(e,o,(o.subtreeFlags&8772)!==0):fa(e,o),ua=f,qs=m}break;case 30:break;default:fa(e,o)}}function Bg(e){var s=e.alternate;s!==null&&(e.alternate=null,Bg(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&ao(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var gs=null,Go=!1;function da(e,s,o){for(o=o.child;o!==null;)Lg(e,s,o),o=o.sibling}function Lg(e,s,o){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(Xe,o)}catch{}switch(o.tag){case 26:qs||Xi(o,s),da(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:qs||Xi(o,s);var r=gs,f=Go;Ia(o.type)&&(gs=o.stateNode,Go=!1),da(e,s,o),Fl(o.stateNode),gs=r,Go=f;break;case 5:qs||Xi(o,s);case 6:if(r=gs,f=Go,gs=null,da(e,s,o),gs=r,Go=f,gs!==null)if(Go)try{(gs.nodeType===9?gs.body:gs.nodeName==="HTML"?gs.ownerDocument.body:gs).removeChild(o.stateNode)}catch(m){zn(o,s,m)}else try{gs.removeChild(o.stateNode)}catch(m){zn(o,s,m)}break;case 18:gs!==null&&(Go?(e=gs,M0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),Kr(e)):M0(gs,o.stateNode));break;case 4:r=gs,f=Go,gs=o.stateNode.containerInfo,Go=!0,da(e,s,o),gs=r,Go=f;break;case 0:case 11:case 14:case 15:Na(2,o,s),qs||Na(4,o,s),da(e,s,o);break;case 1:qs||(Xi(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Tg(o,s,r)),da(e,s,o);break;case 21:da(e,s,o);break;case 22:qs=(r=qs)||o.memoizedState!==null,da(e,s,o),qs=r;break;default:da(e,s,o)}}function Og(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Kr(e)}catch(o){zn(s,s.return,o)}}}function zg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Kr(e)}catch(o){zn(s,s.return,o)}}function S2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Ng),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Ng),s;default:throw Error(a(435,e.tag))}}function hu(e,s){var o=S2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=N2.bind(null,e,r);r.then(f,f)}})}function Ko(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=e,v=s,E=v;e:for(;E!==null;){switch(E.tag){case 27:if(Ia(E.type)){gs=E.stateNode,Go=!1;break e}break;case 5:gs=E.stateNode,Go=!1;break e;case 3:case 4:gs=E.stateNode.containerInfo,Go=!0;break e}E=E.return}if(gs===null)throw Error(a(160));Lg(m,v,f),gs=null,Go=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)$g(s,e),s=s.sibling}var Li=null;function $g(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ko(s,e),Qo(e),r&4&&(Na(3,e,e.return),Ol(3,e),Na(5,e,e.return));break;case 1:Ko(s,e),Qo(e),r&512&&(qs||o===null||Xi(o,o.return)),r&64&&ua&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=Li;if(Ko(s,e),Qo(e),r&512&&(qs||o===null||Xi(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ns]||m[Jt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),vo(m,r,o),m[Jt]=e,on(m),r=m;break e;case"link":var v=$0("link","href",f).get(r+(o.href||""));if(v){for(var E=0;E<v.length;E++)if(m=v[E],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(E,1);break t}}m=f.createElement(r),vo(m,r,o),f.head.appendChild(m);break;case"meta":if(v=$0("meta","content",f).get(r+(o.content||""))){for(E=0;E<v.length;E++)if(m=v[E],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(E,1);break t}}m=f.createElement(r),vo(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[Jt]=e,on(m),r=m}e.stateNode=r}else I0(f,e.type,e.stateNode);else e.stateNode=z0(f,r,e.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?I0(f,e.type,e.stateNode):z0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&qf(e,e.memoizedProps,o.memoizedProps)}break;case 27:Ko(s,e),Qo(e),r&512&&(qs||o===null||Xi(o,o.return)),o!==null&&r&4&&qf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(Ko(s,e),Qo(e),r&512&&(qs||o===null||Xi(o,o.return)),e.flags&32){f=e.stateNode;try{ko(f,"")}catch(jt){zn(e,e.return,jt)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,qf(e,f,o!==null?o.memoizedProps:f)),r&1024&&(Qf=!0);break;case 6:if(Ko(s,e),Qo(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(jt){zn(e,e.return,jt)}}break;case 3:if(Eu=null,f=Li,Li=Mu(s.containerInfo),Ko(s,e),Li=f,Qo(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{Kr(s.containerInfo)}catch(jt){zn(e,e.return,jt)}Qf&&(Qf=!1,Ig(e));break;case 4:r=Li,Li=Mu(e.stateNode.containerInfo),Ko(s,e),Qo(e),Li=r;break;case 12:Ko(s,e),Qo(e);break;case 31:Ko(s,e),Qo(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hu(e,r)));break;case 13:Ko(s,e),Qo(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(pu=at()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hu(e,r)));break;case 22:f=e.memoizedState!==null;var F=o!==null&&o.memoizedState!==null,he=ua,we=qs;if(ua=he||f,qs=we||F,Ko(s,e),qs=we,ua=he,Qo(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||F||ua||qs||ur(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){F=o=s;try{if(m=F.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=F.stateNode;var Re=F.memoizedProps.style,pe=Re!=null&&Re.hasOwnProperty("display")?Re.display:null;E.style.display=pe==null||typeof pe=="boolean"?"":(""+pe).trim()}}catch(jt){zn(F,F.return,jt)}}}else if(s.tag===6){if(o===null){F=s;try{F.stateNode.nodeValue=f?"":F.memoizedProps}catch(jt){zn(F,F.return,jt)}}}else if(s.tag===18){if(o===null){F=s;try{var ye=F.stateNode;f?T0(ye,!0):T0(F.stateNode,!1)}catch(jt){zn(F,F.return,jt)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,hu(e,o))));break;case 19:Ko(s,e),Qo(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hu(e,r)));break;case 30:break;case 21:break;default:Ko(s,e),Qo(e)}}function Qo(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(Ag(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Gf(e);fu(e,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(ko(v,""),o.flags&=-33);var E=Gf(e);fu(e,E,v);break;case 3:case 4:var F=o.stateNode.containerInfo,he=Gf(e);Kf(e,he,F);break;default:throw Error(a(161))}}catch(we){zn(e,e.return,we)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Ig(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;Ig(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function fa(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Rg(e,s.alternate,s),s=s.sibling}function ur(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:Na(4,s,s.return),ur(s);break;case 1:Xi(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Tg(s,s.return,o),ur(s);break;case 27:Fl(s.stateNode);case 26:case 5:Xi(s,s.return),ur(s);break;case 22:s.memoizedState===null&&ur(s);break;case 30:ur(s);break;default:ur(s)}e=e.sibling}}function ha(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:ha(f,m,o),Ol(4,m);break;case 1:if(ha(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(he){zn(r,r.return,he)}if(r=m,f=r.updateQueue,f!==null){var E=r.stateNode;try{var F=f.shared.hiddenCallbacks;if(F!==null)for(f.shared.hiddenCallbacks=null,f=0;f<F.length;f++)__(F[f],E)}catch(he){zn(r,r.return,he)}}o&&v&64&&Mg(m),zl(m,m.return);break;case 27:Dg(m);case 26:case 5:ha(f,m,o),o&&r===null&&v&4&&Eg(m),zl(m,m.return);break;case 12:ha(f,m,o);break;case 31:ha(f,m,o),o&&v&4&&Og(f,m);break;case 13:ha(f,m,o),o&&v&4&&zg(f,m);break;case 22:m.memoizedState===null&&ha(f,m,o),zl(m,m.return);break;case 30:break;default:ha(f,m,o)}s=s.sibling}}function Zf(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&Sl(o))}function Jf(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Sl(e))}function Oi(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Pg(e,s,o,r),s=s.sibling}function Pg(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Oi(e,s,o,r),f&2048&&Ol(9,s);break;case 1:Oi(e,s,o,r);break;case 3:Oi(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Sl(e)));break;case 12:if(f&2048){Oi(e,s,o,r),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,E=m.onPostCommit;typeof E=="function"&&E(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){zn(s,s.return,F)}}else Oi(e,s,o,r);break;case 31:Oi(e,s,o,r);break;case 13:Oi(e,s,o,r);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?Oi(e,s,o,r):$l(e,s):m._visibility&2?Oi(e,s,o,r):(m._visibility|=2,Ir(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Zf(v,s);break;case 24:Oi(e,s,o,r),f&2048&&Jf(s.alternate,s);break;default:Oi(e,s,o,r)}}function Ir(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,E=o,F=r,he=v.flags;switch(v.tag){case 0:case 11:case 15:Ir(m,v,E,F,f),Ol(8,v);break;case 23:break;case 22:var we=v.stateNode;v.memoizedState!==null?we._visibility&2?Ir(m,v,E,F,f):$l(m,v):(we._visibility|=2,Ir(m,v,E,F,f)),f&&he&2048&&Zf(v.alternate,v);break;case 24:Ir(m,v,E,F,f),f&&he&2048&&Jf(v.alternate,v);break;default:Ir(m,v,E,F,f)}s=s.sibling}}function $l(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:$l(o,r),f&2048&&Zf(r.alternate,r);break;case 24:$l(o,r),f&2048&&Jf(r.alternate,r);break;default:$l(o,r)}s=s.sibling}}var Il=8192;function Pr(e,s,o){if(e.subtreeFlags&Il)for(e=e.child;e!==null;)Hg(e,s,o),e=e.sibling}function Hg(e,s,o){switch(e.tag){case 26:Pr(e,s,o),e.flags&Il&&e.memoizedState!==null&&cv(o,Li,e.memoizedState,e.memoizedProps);break;case 5:Pr(e,s,o);break;case 3:case 4:var r=Li;Li=Mu(e.stateNode.containerInfo),Pr(e,s,o),Li=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Il,Il=16777216,Pr(e,s,o),Il=r):Pr(e,s,o));break;default:Pr(e,s,o)}}function Ug(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Pl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];ho=r,Yg(r,e)}Ug(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vg(e),e=e.sibling}function Vg(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Na(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,mu(e)):Pl(e);break;default:Pl(e)}}function mu(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];ho=r,Yg(r,e)}Ug(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:Na(8,s,s.return),mu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,mu(s));break;default:mu(s)}e=e.sibling}}function Yg(e,s){for(;ho!==null;){var o=ho;switch(o.tag){case 0:case 11:case 15:Na(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Sl(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,ho=r;else e:for(o=e;ho!==null;){r=ho;var f=r.sibling,m=r.return;if(Bg(r),r===o){ho=null;break e}if(f!==null){f.return=m,ho=f;break e}ho=m}}}var C2={getCacheForType:function(e){var s=xo(Ws),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return xo(Ws).controller.signal}},k2=typeof WeakMap=="function"?WeakMap:Map,Dn=0,Zn=null,hn=null,pn=0,On=0,ui=null,Ra=!1,Hr=!1,eh=!1,ma=0,As=0,Ba=0,dr=0,th=0,di=0,Ur=0,Hl=null,Zo=null,nh=!1,pu=0,Wg=0,_u=1/0,gu=null,La=null,no=0,Oa=null,Vr=null,pa=0,sh=0,oh=null,Fg=null,Ul=0,ih=null;function fi(){return(Dn&2)!==0&&pn!==0?pn&-pn:z.T!==null?dh():es()}function Xg(){if(di===0)if((pn&536870912)===0||bn){var e=nt;nt<<=1,(nt&3932160)===0&&(nt=262144),di=e}else di=536870912;return e=li.current,e!==null&&(e.flags|=32),di}function Jo(e,s,o){(e===Zn&&(On===2||On===9)||e.cancelPendingCommit!==null)&&(Yr(e,0),za(e,pn,di,!1)),mt(e,o),((Dn&2)===0||e!==Zn)&&(e===Zn&&((Dn&2)===0&&(dr|=o),As===4&&za(e,pn,di,!1)),qi(e))}function qg(e,s,o){if((Dn&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||Bt(e,s),f=r?T2(e,s):rh(e,s,!0),m=r;do{if(f===0){Hr&&!r&&za(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!j2(o)){f=rh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var E=e;f=Hl;var F=E.current.memoizedState.isDehydrated;if(F&&(Yr(E,v).flags|=256),v=rh(E,v,!1),v!==2){if(eh&&!F){E.errorRecoveryDisabledLanes|=m,dr|=m,f=4;break e}m=Zo,Zo=f,m!==null&&(Zo===null?Zo=m:Zo.push.apply(Zo,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){Yr(e,0),za(e,s,0,!0);break}e:{switch(r=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:za(r,s,di,!Ra);break e;case 2:Zo=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=pu+300-at(),10<f)){if(za(r,s,di,!Ra),qe(r,0,!0)!==0)break e;pa=s,r.timeoutHandle=k0(Gg.bind(null,r,o,Zo,gu,nh,s,di,dr,Ur,Ra,m,"Throttled",-0,0),f);break e}Gg(r,o,Zo,gu,nh,s,di,dr,Ur,Ra,m,null,-0,0)}}break}while(!0);qi(e)}function Gg(e,s,o,r,f,m,v,E,F,he,we,Re,pe,ye){if(e.timeoutHandle=-1,Re=s.subtreeFlags,Re&8192||(Re&16785408)===16785408){Re={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ls},Hg(s,m,Re);var jt=(m&62914560)===m?pu-at():(m&4194048)===m?Wg-at():0;if(jt=uv(Re,jt),jt!==null){pa=m,e.cancelPendingCommit=jt(s0.bind(null,e,s,m,o,r,f,v,E,F,we,Re,null,pe,ye)),za(e,m,v,!he);return}}s0(e,s,m,o,r,f,v,E,F)}function j2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!wt(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function za(e,s,o,r){s&=~th,s&=~dr,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var m=31-St(f),v=1<<m;r[m]=-1,f&=~v}o!==0&&Rn(e,o,s)}function yu(){return(Dn&6)===0?(Vl(0),!1):!0}function ah(){if(hn!==null){if(On===0)var e=hn.return;else e=hn,oa=nr=null,wf(e),Br=null,kl=0,e=hn;for(;e!==null;)jg(e.alternate,e),e=e.return;hn=null}}function Yr(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,F2(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),pa=0,ah(),Zn=e,hn=o=na(e.current,null),pn=s,On=0,ui=null,Ra=!1,Hr=Bt(e,s),eh=!1,Ur=di=th=dr=Ba=As=0,Zo=Hl=null,nh=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-St(r),m=1<<f;s|=e[f],r&=~m}return ma=s,Ic(),o}function Kg(e,s){an=null,z.H=Rl,s===Rr||s===Xc?(s=f_(),On=3):s===uf?(s=f_(),On=4):On=s===$f?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,ui=s,hn===null&&(As=1,ru(e,xi(s,e.current)))}function Qg(){var e=li.current;return e===null?!0:(pn&4194048)===pn?Si===null:(pn&62914560)===pn||(pn&536870912)!==0?e===Si:!1}function Zg(){var e=z.H;return z.H=Rl,e===null?Rl:e}function Jg(){var e=z.A;return z.A=C2,e}function xu(){As=4,Ra||(pn&4194048)!==pn&&li.current!==null||(Hr=!0),(Ba&134217727)===0&&(dr&134217727)===0||Zn===null||za(Zn,pn,di,!1)}function rh(e,s,o){var r=Dn;Dn|=2;var f=Zg(),m=Jg();(Zn!==e||pn!==s)&&(gu=null,Yr(e,s)),s=!1;var v=As;e:do try{if(On!==0&&hn!==null){var E=hn,F=ui;switch(On){case 8:ah(),v=6;break e;case 3:case 2:case 9:case 6:li.current===null&&(s=!0);var he=On;if(On=0,ui=null,Wr(e,E,F,he),o&&Hr){v=0;break e}break;default:he=On,On=0,ui=null,Wr(e,E,F,he)}}M2(),v=As;break}catch(we){Kg(e,we)}while(!0);return s&&e.shellSuspendCounter++,oa=nr=null,Dn=r,z.H=f,z.A=m,hn===null&&(Zn=null,pn=0,Ic()),v}function M2(){for(;hn!==null;)e0(hn)}function T2(e,s){var o=Dn;Dn|=2;var r=Zg(),f=Jg();Zn!==e||pn!==s?(gu=null,_u=at()+500,Yr(e,s)):Hr=Bt(e,s);e:do try{if(On!==0&&hn!==null){s=hn;var m=ui;t:switch(On){case 1:On=0,ui=null,Wr(e,s,m,1);break;case 2:case 9:if(u_(m)){On=0,ui=null,t0(s);break}s=function(){On!==2&&On!==9||Zn!==e||(On=7),qi(e)},m.then(s,s);break e;case 3:On=7;break e;case 4:On=5;break e;case 7:u_(m)?(On=0,ui=null,t0(s)):(On=0,ui=null,Wr(e,s,m,7));break;case 5:var v=null;switch(hn.tag){case 26:v=hn.memoizedState;case 5:case 27:var E=hn;if(v?P0(v):E.stateNode.complete){On=0,ui=null;var F=E.sibling;if(F!==null)hn=F;else{var he=E.return;he!==null?(hn=he,bu(he)):hn=null}break t}}On=0,ui=null,Wr(e,s,m,5);break;case 6:On=0,ui=null,Wr(e,s,m,6);break;case 8:ah(),As=6;break e;default:throw Error(a(462))}}E2();break}catch(we){Kg(e,we)}while(!0);return oa=nr=null,z.H=r,z.A=f,Dn=o,hn!==null?0:(Zn=null,pn=0,Ic(),As)}function E2(){for(;hn!==null&&!Tt();)e0(hn)}function e0(e){var s=Cg(e.alternate,e,ma);e.memoizedProps=e.pendingProps,s===null?bu(e):hn=s}function t0(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=yg(o,s,s.pendingProps,s.type,void 0,pn);break;case 11:s=yg(o,s,s.pendingProps,s.type.render,s.ref,pn);break;case 5:wf(s);default:jg(o,s),s=hn=Jp(s,ma),s=Cg(o,s,ma)}e.memoizedProps=e.pendingProps,s===null?bu(e):hn=s}function Wr(e,s,o,r){oa=nr=null,wf(s),Br=null,kl=0;var f=s.return;try{if(g2(e,f,s,o,pn)){As=1,ru(e,xi(o,e.current)),hn=null;return}}catch(m){if(f!==null)throw hn=f,m;As=1,ru(e,xi(o,e.current)),hn=null;return}s.flags&32768?(bn||r===1?e=!0:Hr||(pn&536870912)!==0?e=!1:(Ra=e=!0,(r===2||r===9||r===3||r===6)&&(r=li.current,r!==null&&r.tag===13&&(r.flags|=16384))),n0(s,e)):bu(s)}function bu(e){var s=e;do{if((s.flags&32768)!==0){n0(s,Ra);return}e=s.return;var o=b2(s.alternate,s,ma);if(o!==null){hn=o;return}if(s=s.sibling,s!==null){hn=s;return}hn=s=e}while(s!==null);As===0&&(As=5)}function n0(e,s){do{var o=v2(e.alternate,e);if(o!==null){o.flags&=32767,hn=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){hn=e;return}hn=e=o}while(e!==null);As=6,hn=null}function s0(e,s,o,r,f,m,v,E,F){e.cancelPendingCommit=null;do vu();while(no!==0);if((Dn&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=qd,Ft(e,o,m,v,E,F),e===Zn&&(hn=Zn=null,pn=0),Vr=s,Oa=e,pa=o,sh=m,oh=f,Fg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,R2(Qe,function(){return l0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,f=ae.p,ae.p=2,v=Dn,Dn|=4;try{w2(e,s,o)}finally{Dn=v,ae.p=f,z.T=r}}no=1,o0(),i0(),a0()}}function o0(){if(no===1){no=0;var e=Oa,s=Vr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=z.T,z.T=null;var r=ae.p;ae.p=2;var f=Dn;Dn|=4;try{$g(s,e);var m=xh,v=vn(e.containerInfo),E=m.focusedElem,F=m.selectionRange;if(v!==E&&E&&E.ownerDocument&&ds(E.ownerDocument.documentElement,E)){if(F!==null&&Bn(E)){var he=F.start,we=F.end;if(we===void 0&&(we=he),"selectionStart"in E)E.selectionStart=he,E.selectionEnd=Math.min(we,E.value.length);else{var Re=E.ownerDocument||document,pe=Re&&Re.defaultView||window;if(pe.getSelection){var ye=pe.getSelection(),jt=E.textContent.length,Yt=Math.min(F.start,jt),Un=F.end===void 0?Yt:Math.min(F.end,jt);!ye.extend&&Yt>Un&&(v=Un,Un=Yt,Yt=v);var re=us(E,Yt),ee=us(E,Un);if(re&&ee&&(ye.rangeCount!==1||ye.anchorNode!==re.node||ye.anchorOffset!==re.offset||ye.focusNode!==ee.node||ye.focusOffset!==ee.offset)){var fe=Re.createRange();fe.setStart(re.node,re.offset),ye.removeAllRanges(),Yt>Un?(ye.addRange(fe),ye.extend(ee.node,ee.offset)):(fe.setEnd(ee.node,ee.offset),ye.addRange(fe))}}}}for(Re=[],ye=E;ye=ye.parentNode;)ye.nodeType===1&&Re.push({element:ye,left:ye.scrollLeft,top:ye.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<Re.length;E++){var Ae=Re[E];Ae.element.scrollLeft=Ae.left,Ae.element.scrollTop=Ae.top}}Ru=!!yh,xh=yh=null}finally{Dn=f,ae.p=r,z.T=o}}e.current=s,no=2}}function i0(){if(no===2){no=0;var e=Oa,s=Vr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=z.T,z.T=null;var r=ae.p;ae.p=2;var f=Dn;Dn|=4;try{Rg(e,s.alternate,s)}finally{Dn=f,ae.p=r,z.T=o}}no=3}}function a0(){if(no===4||no===3){no=0,ut();var e=Oa,s=Vr,o=pa,r=Fg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?no=5:(no=0,Vr=Oa=null,r0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(La=null),is(o),s=s.stateNode,Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(Xe,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=z.T,f=ae.p,ae.p=2,z.T=null;try{for(var m=e.onRecoverableError,v=0;v<r.length;v++){var E=r[v];m(E.value,{componentStack:E.stack})}}finally{z.T=s,ae.p=f}}(pa&3)!==0&&vu(),qi(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===ih?Ul++:(Ul=0,ih=e):Ul=0,Vl(0)}}function r0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,Sl(s)))}function vu(){return o0(),i0(),a0(),l0()}function l0(){if(no!==5)return!1;var e=Oa,s=sh;sh=0;var o=is(pa),r=z.T,f=ae.p;try{ae.p=32>o?32:o,z.T=null,o=oh,oh=null;var m=Oa,v=pa;if(no=0,Vr=Oa=null,pa=0,(Dn&6)!==0)throw Error(a(331));var E=Dn;if(Dn|=4,Vg(m.current),Pg(m,m.current,v,o),Dn=E,Vl(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(Xe,m)}catch{}return!0}finally{ae.p=f,z.T=r,r0(e,s)}}function c0(e,s,o){s=xi(o,s),s=zf(e.stateNode,s,2),e=Ea(e,s,2),e!==null&&(mt(e,2),qi(e))}function zn(e,s,o){if(e.tag===3)c0(e,e,o);else for(;s!==null;){if(s.tag===3){c0(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(La===null||!La.has(r))){e=xi(o,e),o=ug(2),r=Ea(s,o,2),r!==null&&(dg(o,r,s,e),mt(r,2),qi(r));break}}s=s.return}}function lh(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new k2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(eh=!0,f.add(o),e=A2.bind(null,e,s,o),s.then(e,e))}function A2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,Zn===e&&(pn&o)===o&&(As===4||As===3&&(pn&62914560)===pn&&300>at()-pu?(Dn&2)===0&&Yr(e,0):th|=o,Ur===pn&&(Ur=0)),qi(e)}function u0(e,s){s===0&&(s=zt()),e=Ja(e,s),e!==null&&(mt(e,s),qi(e))}function D2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),u0(e,o)}function N2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),u0(e,o)}function R2(e,s){return Ke(e,s)}var wu=null,Fr=null,ch=!1,Su=!1,uh=!1,$a=0;function qi(e){e!==Fr&&e.next===null&&(Fr===null?wu=Fr=e:Fr=Fr.next=e),Su=!0,ch||(ch=!0,L2())}function Vl(e,s){if(!uh&&Su){uh=!0;do for(var o=!1,r=wu;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var v=r.suspendedLanes,E=r.pingedLanes;m=(1<<31-St(42|e)+1)-1,m&=f&~(v&~E),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,m0(r,m))}else m=pn,m=qe(r,r===Zn?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||Bt(r,m)||(o=!0,m0(r,m));r=r.next}while(o);uh=!1}}function B2(){d0()}function d0(){Su=ch=!1;var e=0;$a!==0&&W2()&&(e=$a);for(var s=at(),o=null,r=wu;r!==null;){var f=r.next,m=f0(r,s);m===0?(r.next=null,o===null?wu=f:o.next=f,f===null&&(Fr=o)):(o=r,(e!==0||(m&3)!==0)&&(Su=!0)),r=f}no!==0&&no!==5||Vl(e),$a!==0&&($a=0)}function f0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-St(m),E=1<<v,F=f[v];F===-1?((E&o)===0||(E&r)!==0)&&(f[v]=Ot(E,s)):F<=s&&(e.expiredLanes|=E),m&=~E}if(s=Zn,o=pn,o=qe(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&(On===2||On===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ze(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||Bt(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&ze(r),is(o)){case 2:case 8:o=At;break;case 32:o=Qe;break;case 268435456:o=J;break;default:o=Qe}return r=h0.bind(null,e),o=Ke(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&ze(r),e.callbackPriority=2,e.callbackNode=null,2}function h0(e,s){if(no!==0&&no!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(vu()&&e.callbackNode!==o)return null;var r=pn;return r=qe(e,e===Zn?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(qg(e,r,s),f0(e,at()),e.callbackNode!=null&&e.callbackNode===o?h0.bind(null,e):null)}function m0(e,s){if(vu())return null;qg(e,s,!0)}function L2(){X2(function(){(Dn&6)!==0?Ke(it,B2):d0()})}function dh(){if($a===0){var e=Dr;e===0&&(e=Ie,Ie<<=1,(Ie&261888)===0&&(Ie=256)),$a=e}return $a}function p0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Oo(""+e)}function _0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function O2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=p0((f[yn]||null).action),v=r.submitter;v&&(s=(s=v[yn]||null)?p0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var E=new A("action","action",null,r,f);e.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if($a!==0){var F=v?_0(f,v):new FormData(f);Df(o,{pending:!0,data:F,method:f.method,action:m},null,F)}}else typeof m=="function"&&(E.preventDefault(),F=v?_0(f,v):new FormData(f),Df(o,{pending:!0,data:F,method:f.method,action:m},m,F))},currentTarget:f}]})}}for(var fh=0;fh<Xd.length;fh++){var hh=Xd[fh],z2=hh.toLowerCase(),$2=hh[0].toUpperCase()+hh.slice(1);Bi(z2,"on"+$2)}Bi(Ri,"onAnimationEnd"),Bi(Yi,"onAnimationIteration"),Bi(zc,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(Yd,"onTransitionRun"),Bi(Wd,"onTransitionStart"),Bi(Fd,"onTransitionCancel"),Bi(Kp,"onTransitionEnd"),Wn("onMouseEnter",["mouseout","mouseover"]),Wn("onMouseLeave",["mouseout","mouseover"]),Wn("onPointerEnter",["pointerout","pointerover"]),Wn("onPointerLeave",["pointerout","pointerover"]),Qs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qs("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function g0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var v=r.length-1;0<=v;v--){var E=r[v],F=E.instance,he=E.currentTarget;if(E=E.listener,F!==m&&f.isPropagationStopped())break e;m=E,f.currentTarget=he;try{m(f)}catch(we){$c(we)}f.currentTarget=null,m=F}else for(v=0;v<r.length;v++){if(E=r[v],F=E.instance,he=E.currentTarget,E=E.listener,F!==m&&f.isPropagationStopped())break e;m=E,f.currentTarget=he;try{m(f)}catch(we){$c(we)}f.currentTarget=null,m=F}}}}function mn(e,s){var o=s[jn];o===void 0&&(o=s[jn]=new Set);var r=e+"__bubble";o.has(r)||(y0(s,e,2,!1),o.add(r))}function mh(e,s,o){var r=0;s&&(r|=4),y0(o,e,r,s)}var Cu="_reactListening"+Math.random().toString(36).slice(2);function ph(e){if(!e[Cu]){e[Cu]=!0,ni.forEach(function(o){o!=="selectionchange"&&(I2.has(o)||mh(o,!1,e),mh(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Cu]||(s[Cu]=!0,mh("selectionchange",!1,s))}}function y0(e,s,o,r){switch(X0(s)){case 2:var f=hv;break;case 8:f=mv;break;default:f=Ah}o=f.bind(null,s,o,e),f=void 0,!Ys||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function _h(e,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var E=r.stateNode.containerInfo;if(E===f)break;if(v===4)for(v=r.return;v!==null;){var F=v.tag;if((F===3||F===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;E!==null;){if(v=ro(E),v===null)return;if(F=v.tag,F===5||F===6||F===26||F===27){r=m=v;continue e}E=E.parentNode}}r=r.return}qn(function(){var he=m,we=Cs(o),Re=[];e:{var pe=Qp.get(e);if(pe!==void 0){var ye=A,jt=e;switch(e){case"keypress":if(js(o)===0)break e;case"keydown":case"keyup":ye=ai;break;case"focusin":jt="focus",ye=kt;break;case"focusout":jt="blur",ye=kt;break;case"beforeblur":case"afterblur":ye=kt;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=pt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=Kt;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=Vi;break;case Ri:case Yi:case zc:ye=tn;break;case Kp:ye=$o;break;case"scroll":case"scrollend":ye=V;break;case"wheel":ye=Be;break;case"copy":case"cut":case"paste":ye=Zs;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=Kn;break;case"toggle":case"beforetoggle":ye=yt}var Yt=(s&4)!==0,Un=!Yt&&(e==="scroll"||e==="scrollend"),re=Yt?pe!==null?pe+"Capture":null:pe;Yt=[];for(var ee=he,fe;ee!==null;){var Ae=ee;if(fe=Ae.stateNode,Ae=Ae.tag,Ae!==5&&Ae!==26&&Ae!==27||fe===null||re===null||(Ae=en(ee,re),Ae!=null&&Yt.push(Wl(ee,Ae,fe))),Un)break;ee=ee.return}0<Yt.length&&(pe=new ye(pe,jt,null,o,we),Re.push({event:pe,listeners:Yt}))}}if((s&7)===0){e:{if(pe=e==="mouseover"||e==="pointerover",ye=e==="mouseout"||e==="pointerout",pe&&o!==jo&&(jt=o.relatedTarget||o.fromElement)&&(ro(jt)||jt[Ze]))break e;if((ye||pe)&&(pe=we.window===we?we:(pe=we.ownerDocument)?pe.defaultView||pe.parentWindow:window,ye?(jt=o.relatedTarget||o.toElement,ye=he,jt=jt?ro(jt):null,jt!==null&&(Un=u(jt),Yt=jt.tag,jt!==Un||Yt!==5&&Yt!==27&&Yt!==6)&&(jt=null)):(ye=null,jt=he),ye!==jt)){if(Yt=pt,Ae="onMouseLeave",re="onMouseEnter",ee="mouse",(e==="pointerout"||e==="pointerover")&&(Yt=Kn,Ae="onPointerLeave",re="onPointerEnter",ee="pointer"),Un=ye==null?pe:ps(ye),fe=jt==null?pe:ps(jt),pe=new Yt(Ae,ee+"leave",ye,o,we),pe.target=Un,pe.relatedTarget=fe,Ae=null,ro(we)===he&&(Yt=new Yt(re,ee+"enter",jt,o,we),Yt.target=fe,Yt.relatedTarget=Un,Ae=Yt),Un=Ae,ye&&jt)t:{for(Yt=P2,re=ye,ee=jt,fe=0,Ae=re;Ae;Ae=Yt(Ae))fe++;Ae=0;for(var Pt=ee;Pt;Pt=Yt(Pt))Ae++;for(;0<fe-Ae;)re=Yt(re),fe--;for(;0<Ae-fe;)ee=Yt(ee),Ae--;for(;fe--;){if(re===ee||ee!==null&&re===ee.alternate){Yt=re;break t}re=Yt(re),ee=Yt(ee)}Yt=null}else Yt=null;ye!==null&&x0(Re,pe,ye,Yt,!1),jt!==null&&Un!==null&&x0(Re,Un,jt,Yt,!0)}}e:{if(pe=he?ps(he):window,ye=pe.nodeName&&pe.nodeName.toLowerCase(),ye==="select"||ye==="input"&&pe.type==="file")var Tn=$;else if(xl(pe))if(K)Tn=Qt;else{Tn=vt;var Et=et}else ye=pe.nodeName,!ye||ye.toLowerCase()!=="input"||pe.type!=="checkbox"&&pe.type!=="radio"?he&&Bs(he.elementType)&&(Tn=$):Tn=Nt;if(Tn&&(Tn=Tn(e,he))){bl(Re,Tn,o,we);break e}Et&&Et(e,pe,he),e==="focusout"&&he&&pe.type==="number"&&he.memoizedProps.value!=null&&po(pe,"number",pe.value)}switch(Et=he?ps(he):window,e){case"focusin":(xl(Et)||Et.contentEditable==="true")&&(qt=Et,fs=he,Cn=null);break;case"focusout":Cn=fs=qt=null;break;case"mousedown":to=!0;break;case"contextmenu":case"mouseup":case"dragend":to=!1,To(Re,o,we);break;case"selectionchange":if(Wt)break;case"keydown":case"keyup":To(Re,o,we)}var cn;if(Lt)e:{switch(e){case"compositionstart":var _n="onCompositionStart";break e;case"compositionend":_n="onCompositionEnd";break e;case"compositionupdate":_n="onCompositionUpdate";break e}_n=void 0}else fo?go(e,o)&&(_n="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(_n="onCompositionStart");_n&&(ln&&o.locale!=="ko"&&(fo||_n!=="onCompositionStart"?_n==="onCompositionEnd"&&fo&&(cn=_o()):(Gn=we,Mo="value"in Gn?Gn.value:Gn.textContent,fo=!0)),Et=ku(he,_n),0<Et.length&&(_n=new _t(_n,e,null,o,we),Re.push({event:_n,listeners:Et}),cn?_n.data=cn:(cn=ta(o),cn!==null&&(_n.data=cn)))),(cn=fn?ba(e,o):qo(e,o))&&(_n=ku(he,"onBeforeInput"),0<_n.length&&(Et=new _t("onBeforeInput","beforeinput",null,o,we),Re.push({event:Et,listeners:_n}),Et.data=cn)),O2(Re,e,he,o,we)}g0(Re,s)})}function Wl(e,s,o){return{instance:e,listener:s,currentTarget:o}}function ku(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=en(e,o),f!=null&&r.unshift(Wl(e,f,m)),f=en(e,s),f!=null&&r.push(Wl(e,f,m))),e.tag===3)return r;e=e.return}return[]}function P2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function x0(e,s,o,r,f){for(var m=s._reactName,v=[];o!==null&&o!==r;){var E=o,F=E.alternate,he=E.stateNode;if(E=E.tag,F!==null&&F===r)break;E!==5&&E!==26&&E!==27||he===null||(F=he,f?(he=en(o,m),he!=null&&v.unshift(Wl(o,he,F))):f||(he=en(o,m),he!=null&&v.push(Wl(o,he,F)))),o=o.return}v.length!==0&&e.push({event:s,listeners:v})}var H2=/\r\n?/g,U2=/\u0000|\uFFFD/g;function b0(e){return(typeof e=="string"?e:""+e).replace(H2,`
`).replace(U2,"")}function v0(e,s){return s=b0(s),b0(e)===s}function Hn(e,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||ko(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&ko(e,""+r);break;case"className":bs(e,"class",r);break;case"tabIndex":bs(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":bs(e,o,r);break;case"style":Ai(e,r,m);break;case"data":if(s!=="object"){bs(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Oo(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&Hn(e,s,"name",f.name,f,null),Hn(e,s,"formEncType",f.formEncType,f,null),Hn(e,s,"formMethod",f.formMethod,f,null),Hn(e,s,"formTarget",f.formTarget,f,null)):(Hn(e,s,"encType",f.encType,f,null),Hn(e,s,"method",f.method,f,null),Hn(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Oo(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=Ls);break;case"onScroll":r!=null&&mn("scroll",e);break;case"onScrollEnd":r!=null&&mn("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=Oo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":mn("beforetoggle",e),mn("toggle",e),mo(e,"popover",r);break;case"xlinkActuate":Rs(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Rs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Rs(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Rs(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Rs(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Rs(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Rs(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Rs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Rs(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":mo(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Fo.get(o)||o,mo(e,o,r))}}function gh(e,s,o,r,f,m){switch(o){case"style":Ai(e,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?ko(e,r):(typeof r=="number"||typeof r=="bigint")&&ko(e,""+r);break;case"onScroll":r!=null&&mn("scroll",e);break;case"onScrollEnd":r!=null&&mn("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Ls);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Do.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[yn]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):mo(e,o,r)}}}function vo(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mn("error",e),mn("load",e);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Hn(e,s,m,v,o,null)}}f&&Hn(e,s,"srcSet",o.srcSet,o,null),r&&Hn(e,s,"src",o.src,o,null);return;case"input":mn("invalid",e);var E=m=v=f=null,F=null,he=null;for(r in o)if(o.hasOwnProperty(r)){var we=o[r];if(we!=null)switch(r){case"name":f=we;break;case"type":v=we;break;case"checked":F=we;break;case"defaultChecked":he=we;break;case"value":m=we;break;case"defaultValue":E=we;break;case"children":case"dangerouslySetInnerHTML":if(we!=null)throw Error(a(137,s));break;default:Hn(e,s,r,we,o,null)}}xn(e,m,E,F,he,v,f,!1);return;case"select":mn("invalid",e),r=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(E=o[f],E!=null))switch(f){case"value":m=E;break;case"defaultValue":v=E;break;case"multiple":r=E;default:Hn(e,s,f,E,o,null)}s=m,o=v,e.multiple=!!r,s!=null?rs(e,!!r,s,!1):o!=null&&rs(e,!!r,o,!0);return;case"textarea":mn("invalid",e),m=f=r=null;for(v in o)if(o.hasOwnProperty(v)&&(E=o[v],E!=null))switch(v){case"value":r=E;break;case"defaultValue":f=E;break;case"children":m=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:Hn(e,s,v,E,o,null)}_i(e,r,f,m);return;case"option":for(F in o)if(o.hasOwnProperty(F)&&(r=o[F],r!=null))switch(F){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Hn(e,s,F,r,o,null)}return;case"dialog":mn("beforetoggle",e),mn("toggle",e),mn("cancel",e),mn("close",e);break;case"iframe":case"object":mn("load",e);break;case"video":case"audio":for(r=0;r<Yl.length;r++)mn(Yl[r],e);break;case"image":mn("error",e),mn("load",e);break;case"details":mn("toggle",e);break;case"embed":case"source":case"link":mn("error",e),mn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(he in o)if(o.hasOwnProperty(he)&&(r=o[he],r!=null))switch(he){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Hn(e,s,he,r,o,null)}return;default:if(Bs(s)){for(we in o)o.hasOwnProperty(we)&&(r=o[we],r!==void 0&&gh(e,s,we,r,o,void 0));return}}for(E in o)o.hasOwnProperty(E)&&(r=o[E],r!=null&&Hn(e,s,E,r,o,null))}function V2(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,E=null,F=null,he=null,we=null;for(ye in o){var Re=o[ye];if(o.hasOwnProperty(ye)&&Re!=null)switch(ye){case"checked":break;case"value":break;case"defaultValue":F=Re;default:r.hasOwnProperty(ye)||Hn(e,s,ye,null,r,Re)}}for(var pe in r){var ye=r[pe];if(Re=o[pe],r.hasOwnProperty(pe)&&(ye!=null||Re!=null))switch(pe){case"type":m=ye;break;case"name":f=ye;break;case"checked":he=ye;break;case"defaultChecked":we=ye;break;case"value":v=ye;break;case"defaultValue":E=ye;break;case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(a(137,s));break;default:ye!==Re&&Hn(e,s,pe,ye,r,Re)}}Us(e,v,E,F,he,we,m,f);return;case"select":ye=v=E=pe=null;for(m in o)if(F=o[m],o.hasOwnProperty(m)&&F!=null)switch(m){case"value":break;case"multiple":ye=F;default:r.hasOwnProperty(m)||Hn(e,s,m,null,r,F)}for(f in r)if(m=r[f],F=o[f],r.hasOwnProperty(f)&&(m!=null||F!=null))switch(f){case"value":pe=m;break;case"defaultValue":E=m;break;case"multiple":v=m;default:m!==F&&Hn(e,s,f,m,r,F)}s=E,o=v,r=ye,pe!=null?rs(e,!!o,pe,!1):!!r!=!!o&&(s!=null?rs(e,!!o,s,!0):rs(e,!!o,o?[]:"",!1));return;case"textarea":ye=pe=null;for(E in o)if(f=o[E],o.hasOwnProperty(E)&&f!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Hn(e,s,E,null,r,f)}for(v in r)if(f=r[v],m=o[v],r.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":pe=f;break;case"defaultValue":ye=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Hn(e,s,v,f,r,m)}Fn(e,pe,ye);return;case"option":for(var jt in o)if(pe=o[jt],o.hasOwnProperty(jt)&&pe!=null&&!r.hasOwnProperty(jt))switch(jt){case"selected":e.selected=!1;break;default:Hn(e,s,jt,null,r,pe)}for(F in r)if(pe=r[F],ye=o[F],r.hasOwnProperty(F)&&pe!==ye&&(pe!=null||ye!=null))switch(F){case"selected":e.selected=pe&&typeof pe!="function"&&typeof pe!="symbol";break;default:Hn(e,s,F,pe,r,ye)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in o)pe=o[Yt],o.hasOwnProperty(Yt)&&pe!=null&&!r.hasOwnProperty(Yt)&&Hn(e,s,Yt,null,r,pe);for(he in r)if(pe=r[he],ye=o[he],r.hasOwnProperty(he)&&pe!==ye&&(pe!=null||ye!=null))switch(he){case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(a(137,s));break;default:Hn(e,s,he,pe,r,ye)}return;default:if(Bs(s)){for(var Un in o)pe=o[Un],o.hasOwnProperty(Un)&&pe!==void 0&&!r.hasOwnProperty(Un)&&gh(e,s,Un,void 0,r,pe);for(we in r)pe=r[we],ye=o[we],!r.hasOwnProperty(we)||pe===ye||pe===void 0&&ye===void 0||gh(e,s,we,pe,r,ye);return}}for(var re in o)pe=o[re],o.hasOwnProperty(re)&&pe!=null&&!r.hasOwnProperty(re)&&Hn(e,s,re,null,r,pe);for(Re in r)pe=r[Re],ye=o[Re],!r.hasOwnProperty(Re)||pe===ye||pe==null&&ye==null||Hn(e,s,Re,pe,r,ye)}function w0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Y2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,v=f.initiatorType,E=f.duration;if(m&&E&&w0(v)){for(v=0,E=f.responseEnd,r+=1;r<o.length;r++){var F=o[r],he=F.startTime;if(he>E)break;var we=F.transferSize,Re=F.initiatorType;we&&w0(Re)&&(F=F.responseEnd,v+=we*(F<E?1:(E-he)/(F-he)))}if(--r,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yh=null,xh=null;function ju(e){return e.nodeType===9?e:e.ownerDocument}function S0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function C0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function bh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var vh=null;function W2(){var e=window.event;return e&&e.type==="popstate"?e===vh?!1:(vh=e,!0):(vh=null,!1)}var k0=typeof setTimeout=="function"?setTimeout:void 0,F2=typeof clearTimeout=="function"?clearTimeout:void 0,j0=typeof Promise=="function"?Promise:void 0,X2=typeof queueMicrotask=="function"?queueMicrotask:typeof j0<"u"?function(e){return j0.resolve(null).then(e).catch(q2)}:k0;function q2(e){setTimeout(function(){throw e})}function Ia(e){return e==="head"}function M0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),Kr(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")Fl(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Fl(o);for(var m=o.firstChild;m;){var v=m.nextSibling,E=m.nodeName;m[Ns]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&Fl(e.ownerDocument.body);o=f}while(o);Kr(s)}function T0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function wh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":wh(o),ao(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function G2(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ns])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ci(e.nextSibling),e===null)break}return null}function K2(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Ci(e.nextSibling),e===null))return null;return e}function E0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ci(e.nextSibling),e===null))return null;return e}function Sh(e){return e.data==="$?"||e.data==="$~"}function Ch(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Q2(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ci(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var kh=null;function A0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return Ci(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function D0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function N0(e,s,o){switch(s=ju(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Fl(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);ao(e)}var ki=new Map,R0=new Set;function Mu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _a=ae.d;ae.d={f:Z2,r:J2,D:ev,C:tv,L:nv,m:sv,X:iv,S:ov,M:av};function Z2(){var e=_a.f(),s=yu();return e||s}function J2(e){var s=ys(e);s!==null&&s.tag===5&&s.type==="form"?K_(s):_a.r(e)}var Xr=typeof document>"u"?null:document;function B0(e,s,o){var r=Xr;if(r&&typeof s=="string"&&s){var f=vs(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),R0.has(f)||(R0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),vo(s,"link",e),on(s),r.head.appendChild(s)))}}function ev(e){_a.D(e),B0("dns-prefetch",e,null)}function tv(e,s){_a.C(e,s),B0("preconnect",e,s)}function nv(e,s,o){_a.L(e,s,o);var r=Xr;if(r&&e&&s){var f='link[rel="preload"][as="'+vs(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+vs(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+vs(o.imageSizes)+'"]')):f+='[href="'+vs(e)+'"]';var m=f;switch(s){case"style":m=qr(e);break;case"script":m=Gr(e)}ki.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),ki.set(m,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(Xl(m))||s==="script"&&r.querySelector(ql(m))||(s=r.createElement("link"),vo(s,"link",e),on(s),r.head.appendChild(s)))}}function sv(e,s){_a.m(e,s);var o=Xr;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+vs(r)+'"][href="'+vs(e)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Gr(e)}if(!ki.has(m)&&(e=x({rel:"modulepreload",href:e},s),ki.set(m,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(ql(m)))return}r=o.createElement("link"),vo(r,"link",e),on(r),o.head.appendChild(r)}}}function ov(e,s,o){_a.S(e,s,o);var r=Xr;if(r&&e){var f=xs(r).hoistableStyles,m=qr(e);s=s||"default";var v=f.get(m);if(!v){var E={loading:0,preload:null};if(v=r.querySelector(Xl(m)))E.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=ki.get(m))&&jh(e,o);var F=v=r.createElement("link");on(F),vo(F,"link",e),F._p=new Promise(function(he,we){F.onload=he,F.onerror=we}),F.addEventListener("load",function(){E.loading|=1}),F.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Tu(v,s,r)}v={type:"stylesheet",instance:v,count:1,state:E},f.set(m,v)}}}function iv(e,s){_a.X(e,s);var o=Xr;if(o&&e){var r=xs(o).hoistableScripts,f=Gr(e),m=r.get(f);m||(m=o.querySelector(ql(f)),m||(e=x({src:e,async:!0},s),(s=ki.get(f))&&Mh(e,s),m=o.createElement("script"),on(m),vo(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function av(e,s){_a.M(e,s);var o=Xr;if(o&&e){var r=xs(o).hoistableScripts,f=Gr(e),m=r.get(f);m||(m=o.querySelector(ql(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=ki.get(f))&&Mh(e,s),m=o.createElement("script"),on(m),vo(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function L0(e,s,o,r){var f=(f=Ne.current)?Mu(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=qr(o.href),o=xs(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=qr(o.href);var m=xs(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(Xl(e)))&&!m._p&&(v.instance=m,v.state.loading=5),ki.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ki.set(e,o),m||rv(f,e,o,v.state))),s&&r===null)throw Error(a(528,""));return v}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=Gr(o),o=xs(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function qr(e){return'href="'+vs(e)+'"'}function Xl(e){return'link[rel="stylesheet"]['+e+"]"}function O0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function rv(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),vo(s,"link",o),on(s),e.head.appendChild(s))}function Gr(e){return'[src="'+vs(e)+'"]'}function ql(e){return"script[async]"+e}function z0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+vs(o.href)+'"]');if(r)return s.instance=r,on(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),on(r),vo(r,"style",f),Tu(r,o.precedence,e),s.instance=r;case"stylesheet":f=qr(o.href);var m=e.querySelector(Xl(f));if(m)return s.state.loading|=4,s.instance=m,on(m),m;r=O0(o),(f=ki.get(f))&&jh(r,f),m=(e.ownerDocument||e).createElement("link"),on(m);var v=m;return v._p=new Promise(function(E,F){v.onload=E,v.onerror=F}),vo(m,"link",r),s.state.loading|=4,Tu(m,o.precedence,e),s.instance=m;case"script":return m=Gr(o.src),(f=e.querySelector(ql(m)))?(s.instance=f,on(f),f):(r=o,(f=ki.get(m))&&(r=x({},o),Mh(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),on(f),vo(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Tu(r,o.precedence,e));return s.instance}function Tu(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,v=0;v<r.length;v++){var E=r[v];if(E.dataset.precedence===s)m=E;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function jh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Mh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Eu=null;function $0(e,s,o){if(Eu===null){var r=new Map,f=Eu=new Map;f.set(o,r)}else f=Eu,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[Ns]||m[Jt]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var E=r.get(v);E?E.push(m):r.set(v,[m])}}return r}function I0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function lv(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function P0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function cv(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=qr(r.href),m=s.querySelector(Xl(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Au.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,on(m);return}m=s.ownerDocument||s,r=O0(r),(f=ki.get(f))&&jh(r,f),m=m.createElement("link"),on(m);var v=m;v._p=new Promise(function(E,F){v.onload=E,v.onerror=F}),vo(m,"link",r),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Au.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Th=0;function uv(e,s){return e.stylesheets&&e.count===0&&Nu(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&Nu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Th===0&&(Th=62500*Y2());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Nu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Th?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Au(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Du=null;function Nu(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Du=new Map,s.forEach(dv,e),Du=null,Au.call(e))}function dv(e,s){if(!(s.state.loading&4)){var o=Du.get(e);if(o)var r=o.get(null);else{o=new Map,Du.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),r=v)}r&&o.set(null,r)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||r,m===r&&o.set(null,f),o.set(v,f),this.count++,r=Au.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var Gl={$$typeof:L,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function fv(e,s,o,r,f,m,v,E,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rn(0),this.hiddenUpdates=rn(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function H0(e,s,o,r,f,m,v,E,F,he,we,Re){return e=new fv(e,s,o,v,F,he,we,Re,E),s=1,m===!0&&(s|=24),m=ri(3,null,null,s),e.current=m,m.stateNode=e,s=rf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},df(m),e}function U0(e){return e?(e=jr,e):jr}function V0(e,s,o,r,f,m){f=U0(f),r.context===null?r.context=f:r.pendingContext=f,r=Ta(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Ea(e,r,s),o!==null&&(Jo(o,e,s),Ml(o,e,s))}function Y0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Eh(e,s){Y0(e,s),(e=e.alternate)&&Y0(e,s)}function W0(e){if(e.tag===13||e.tag===31){var s=Ja(e,67108864);s!==null&&Jo(s,e,67108864),Eh(e,67108864)}}function F0(e){if(e.tag===13||e.tag===31){var s=fi();s=oo(s);var o=Ja(e,s);o!==null&&Jo(o,e,s),Eh(e,s)}}var Ru=!0;function hv(e,s,o,r){var f=z.T;z.T=null;var m=ae.p;try{ae.p=2,Ah(e,s,o,r)}finally{ae.p=m,z.T=f}}function mv(e,s,o,r){var f=z.T;z.T=null;var m=ae.p;try{ae.p=8,Ah(e,s,o,r)}finally{ae.p=m,z.T=f}}function Ah(e,s,o,r){if(Ru){var f=Dh(r);if(f===null)_h(e,s,r,Bu,o),q0(e,r);else if(_v(f,e,s,o,r))r.stopPropagation();else if(q0(e,r),s&4&&-1<pv.indexOf(e)){for(;f!==null;){var m=ys(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=un(m.pendingLanes);if(v!==0){var E=m;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var F=1<<31-St(v);E.entanglements[1]|=F,v&=~F}qi(m),(Dn&6)===0&&(_u=at()+500,Vl(0))}}break;case 31:case 13:E=Ja(m,2),E!==null&&Jo(E,m,2),yu(),Eh(m,2)}if(m=Dh(r),m===null&&_h(e,s,r,Bu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else _h(e,s,r,null,o)}}function Dh(e){return e=Cs(e),Nh(e)}var Bu=null;function Nh(e){if(Bu=null,e=ro(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return Bu=e,null}function X0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ot()){case it:return 2;case At:return 8;case Qe:case H:return 32;case J:return 268435456;default:return 32}default:return 32}}var Rh=!1,Pa=null,Ha=null,Ua=null,Kl=new Map,Ql=new Map,Va=[],pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q0(e,s){switch(e){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":Kl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ql.delete(s.pointerId)}}function Zl(e,s,o,r,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=ys(s),s!==null&&W0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function _v(e,s,o,r,f){switch(s){case"focusin":return Pa=Zl(Pa,e,s,o,r,f),!0;case"dragenter":return Ha=Zl(Ha,e,s,o,r,f),!0;case"mouseover":return Ua=Zl(Ua,e,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return Kl.set(m,Zl(Kl.get(m)||null,e,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,Ql.set(m,Zl(Ql.get(m)||null,e,s,o,r,f)),!0}return!1}function G0(e){var s=ro(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,Gt(e.priority,function(){F0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,Gt(e.priority,function(){F0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lu(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Dh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);jo=r,o.target.dispatchEvent(r),jo=null}else return s=ys(o),s!==null&&W0(s),e.blockedOn=o,!1;s.shift()}return!0}function K0(e,s,o){Lu(e)&&o.delete(s)}function gv(){Rh=!1,Pa!==null&&Lu(Pa)&&(Pa=null),Ha!==null&&Lu(Ha)&&(Ha=null),Ua!==null&&Lu(Ua)&&(Ua=null),Kl.forEach(K0),Ql.forEach(K0)}function Ou(e,s){e.blockedOn===s&&(e.blockedOn=null,Rh||(Rh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,gv)))}var zu=null;function Q0(e){zu!==e&&(zu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){zu===e&&(zu=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if(Nh(r||o)===null)continue;break}var m=ys(o);m!==null&&(e.splice(s,3),s-=3,Df(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function Kr(e){function s(F){return Ou(F,e)}Pa!==null&&Ou(Pa,e),Ha!==null&&Ou(Ha,e),Ua!==null&&Ou(Ua,e),Kl.forEach(s),Ql.forEach(s);for(var o=0;o<Va.length;o++){var r=Va[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Va.length&&(o=Va[0],o.blockedOn===null);)G0(o),o.blockedOn===null&&Va.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],v=f[yn]||null;if(typeof m=="function")v||Q0(o);else if(v){var E=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[yn]||null)E=v.formAction;else if(Nh(f)!==null)continue}else E=v.action;typeof E=="function"?o[r+1]=E:(o.splice(r,3),r-=3),Q0(o)}}}function Z0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Bh(e){this._internalRoot=e}$u.prototype.render=Bh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=fi();V0(o,r,e,s,null,null)},$u.prototype.unmount=Bh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;V0(e.current,2,null,e,null,null),yu(),s[Ze]=null}};function $u(e){this._internalRoot=e}$u.prototype.unstable_scheduleHydration=function(e){if(e){var s=es();e={blockedOn:null,target:e,priority:s};for(var o=0;o<Va.length&&s!==0&&s<Va[o].priority;o++);Va.splice(o,0,e),o===0&&G0(e)}};var J0=n.version;if(J0!=="19.2.4")throw Error(a(527,J0,"19.2.4"));ae.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=g(s),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var yv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Iu.isDisabled&&Iu.supportsFiber)try{Xe=Iu.inject(yv),Ue=Iu}catch{}}return ec.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=ag,m=rg,v=lg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=H0(e,1,!1,null,null,o,r,null,f,m,v,Z0),e[Ze]=s.current,ph(e),new Bh(s)},ec.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",m=ag,v=rg,E=lg,F=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(E=o.onRecoverableError),o.formState!==void 0&&(F=o.formState)),s=H0(e,1,!0,s,o!=null?o:null,r,f,F,m,v,E,Z0),s.context=U0(null),o=s.current,r=fi(),r=oo(r),f=Ta(r),f.callback=null,Ea(o,f,r),o=r,s.current.lanes=o,mt(s,o),qi(s),e[Ze]=s.current,ph(e),new $u(s)},ec.version="19.2.4",ec}var cy;function Mv(){if(cy)return Oh.exports;cy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Oh.exports=jv(),Oh.exports}var Tv=Mv();const Ev=Tx(Tv);var y=up();const Av=Tx(y);function Dv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Nv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var dd;const Ei="__TAURI_TO_IPC_KEY__";function Rv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function xe(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Bv{get rid(){return Dv(this,dd,"f")}constructor(n){dd.set(this,void 0),Nv(this,dd,n)}async close(){return xe("plugin:resources|close",{rid:this.rid})}}dd=new WeakMap;var hi;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(hi||(hi={}));async function Ax(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await xe("plugin:event|unlisten",{event:t,eventId:n})}async function hc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return xe("plugin:event|listen",{event:t,target:c,handler:Rv(n)}).then(u=>async()=>Ax(t,u))}async function Lv(t,n,i){return hc(t,a=>{Ax(t,a.id),n(a)},i)}async function Ov(t,n){await xe("plugin:event|emit",{event:t,payload:n})}async function zv(t,n,i){await xe("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class Dx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new mc(this.width*n,this.height*n)}[Ei](){return{width:this.width,height:this.height}}toJSON(){return this[Ei]()}}class mc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Dx(this.width/n,this.height/n)}[Ei](){return{width:this.width,height:this.height}}toJSON(){return this[Ei]()}}class Qr{constructor(n){this.size=n}toLogical(n){return this.size instanceof Dx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof mc?this.size:this.size.toPhysical(n)}[Ei](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[Ei]()}}class Nx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new qa(this.x*n,this.y*n)}[Ei](){return{x:this.x,y:this.y}}toJSON(){return this[Ei]()}}class qa{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Nx(this.x/n,this.y/n)}[Ei](){return{x:this.x,y:this.y}}toJSON(){return this[Ei]()}}class Pu{constructor(n){this.position=n}toLogical(n){return this.position instanceof Nx?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof qa?this.position:this.position.toPhysical(n)}[Ei](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[Ei]()}}class pc extends Bv{constructor(n){super(n)}static async new(n,i,a){return xe("plugin:image|new",{rgba:wd(n),width:i,height:a}).then(c=>new pc(c))}static async fromBytes(n){return xe("plugin:image|from_bytes",{bytes:wd(n)}).then(i=>new pc(i))}static async fromPath(n){return xe("plugin:image|from_path",{path:n}).then(i=>new pc(i))}async rgba(){return xe("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return xe("plugin:image|size",{rid:this.rid})}}function wd(t){return t==null?null:typeof t=="string"?t:t instanceof pc?t.rid:t}var jm;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(jm||(jm={}));class $v{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var uy;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(uy||(uy={}));function Mm(){return new Rx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Hh(){return xe("plugin:window|get_all_windows").then(t=>t.map(n=>new Rx(n,{skip:!0})))}const Uh=["tauri://created","tauri://error"];class Rx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||xe("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Hh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return Mm()}static async getAll(){return Hh()}static async getFocusedWindow(){for(const n of await Hh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:hc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Lv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Uh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Ov(n,i)}async emitTo(n,i,a){if(Uh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return zv(n,i,a)}_handleTauriEvent(n,i){return Uh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return xe("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return xe("plugin:window|inner_position",{label:this.label}).then(n=>new qa(n))}async outerPosition(){return xe("plugin:window|outer_position",{label:this.label}).then(n=>new qa(n))}async innerSize(){return xe("plugin:window|inner_size",{label:this.label}).then(n=>new mc(n))}async outerSize(){return xe("plugin:window|outer_size",{label:this.label}).then(n=>new mc(n))}async isFullscreen(){return xe("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return xe("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return xe("plugin:window|is_maximized",{label:this.label})}async isFocused(){return xe("plugin:window|is_focused",{label:this.label})}async isDecorated(){return xe("plugin:window|is_decorated",{label:this.label})}async isResizable(){return xe("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return xe("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return xe("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return xe("plugin:window|is_closable",{label:this.label})}async isVisible(){return xe("plugin:window|is_visible",{label:this.label})}async title(){return xe("plugin:window|title",{label:this.label})}async theme(){return xe("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return xe("plugin:window|is_always_on_top",{label:this.label})}async center(){return xe("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===jm.Critical?i={type:"Critical"}:i={type:"Informational"}),xe("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return xe("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return xe("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return xe("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return xe("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return xe("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return xe("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return xe("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return xe("plugin:window|maximize",{label:this.label})}async unmaximize(){return xe("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return xe("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return xe("plugin:window|minimize",{label:this.label})}async unminimize(){return xe("plugin:window|unminimize",{label:this.label})}async show(){return xe("plugin:window|show",{label:this.label})}async hide(){return xe("plugin:window|hide",{label:this.label})}async close(){return xe("plugin:window|close",{label:this.label})}async destroy(){return xe("plugin:window|destroy",{label:this.label})}async setDecorations(n){return xe("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return xe("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return xe("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return xe("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return xe("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return xe("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return xe("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return xe("plugin:window|set_size",{label:this.label,value:n instanceof Qr?n:new Qr(n)})}async setMinSize(n){return xe("plugin:window|set_min_size",{label:this.label,value:n instanceof Qr?n:n?new Qr(n):null})}async setMaxSize(n){return xe("plugin:window|set_max_size",{label:this.label,value:n instanceof Qr?n:n?new Qr(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return xe("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return xe("plugin:window|set_position",{label:this.label,value:n instanceof Pu?n:new Pu(n)})}async setFullscreen(n){return xe("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return xe("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return xe("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return xe("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return xe("plugin:window|set_icon",{label:this.label,value:wd(n)})}async setSkipTaskbar(n){return xe("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return xe("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return xe("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return xe("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return xe("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return xe("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Pu?n:new Pu(n)})}async setIgnoreCursorEvents(n){return xe("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return xe("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return xe("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return xe("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return xe("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return xe("plugin:window|set_overlay_icon",{label:this.label,value:n?wd(n):void 0})}async setProgressBar(n){return xe("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return xe("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return xe("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return xe("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(hi.WINDOW_RESIZED,i=>{i.payload=new mc(i.payload),n(i)})}async onMoved(n){return this.listen(hi.WINDOW_MOVED,i=>{i.payload=new qa(i.payload),n(i)})}async onCloseRequested(n){return this.listen(hi.WINDOW_CLOSE_REQUESTED,async i=>{const a=new $v(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(hi.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new qa(d.payload.position)}})}),a=await this.listen(hi.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new qa(d.payload.position)}})}),c=await this.listen(hi.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new qa(d.payload.position)}})}),u=await this.listen(hi.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(hi.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(hi.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(hi.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(hi.WINDOW_THEME_CHANGED,n)}}var dy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(dy||(dy={}));var fy;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(fy||(fy={}));var hy;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(hy||(hy={}));var my;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(my||(my={}));async function Iv(t={}){return typeof t=="object"&&Object.freeze(t),await xe("plugin:dialog|open",{options:t})}const Pv=3.7,Hu=200,Tm=240,ns=540,$s=176,Vh=32,Tc=20,Hv=Tm/2,tc=ns+Hv,Zr=18,Jr=18,Yh="#E6E6E6";function py(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function gr(t,n){var a;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,clusterKey:"clusterKey"in n&&(a=n.clusterKey)!=null?a:null,kind:n.kind}}function ga(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function Uu(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:ga(t).localeCompare(ga(n))}function Em(t){var h,p,g,_,x;if(t.length<=1)return[...t];const n=new Map(t.map(b=>[ga(b),b])),i=new Map,a=new Map;t.forEach(b=>i.set(ga(b),0));for(const b of t){const S=(h=b.parentSha)!=null?h:void 0;if(!S||!n.has(S))continue;const C=ga(b);i.set(C,((p=i.get(C))!=null?p:0)+1);const k=(g=a.get(S))!=null?g:[];k.push(b),a.set(S,k)}for(const b of a.values())b.sort(Uu);const c=t.filter(b=>{var S;return((S=i.get(ga(b)))!=null?S:0)===0}).sort(Uu),u=[],d=new Set;for(;c.length>0;){const b=c.shift(),S=ga(b);if(!d.has(S)){d.add(S),u.push(b);for(const C of(_=a.get(S))!=null?_:[]){const k=ga(C),j=((x=i.get(k))!=null?x:0)-1;i.set(k,j),j===0&&c.push(C)}c.sort(Uu)}}return u.length===t.length?u:[...u,...t.filter(b=>!d.has(ga(b))).sort(Uu)]}function Bx(t,n){var i;return Em(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function Lx(t,n,i){return Bx(t,i)}function Wh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function Uv(t,n){var u,d;if(!n||t.length===0)return Wh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Wh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const g=i-p;(!a||g<a.delta)&&(a={delta:g,commit:h})}else{const g=p-i;(!c||g<c.delta)&&(c={delta:g,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Wh(t)}function Vu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function Vv(t,n,i){var _,x,b,S,C,k,j;const a=Lx(t,i,n);if(a.length===0)return null;const c=a.map(M=>gr(t,M)),u=new Set(c.map(M=>M.id)),d=(x=(_=c[0])==null?void 0:_.parentSha)!=null?x:null,h=(S=(b=c.find(M=>M.kind==="branch-created"))==null?void 0:b.id)!=null?S:null,p=(C=c[0])==null?void 0:C.date,g=c.find(M=>h&&M.id===h||d&&M.id===d?!0:!M.parentSha||!u.has(M.parentSha));return g||((j=(k=Uv(c,p!=null?p:void 0))!=null?k:c[0])!=null?j:null)}function Yv(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Bx(t.name,i);if(a.length>0){const g=a.map(b=>gr(t.name,b)),_=new Set(g.map(b=>b.id)),x=(u=(c=g.find(b=>!b.parentSha||!_.has(b.parentSha)))!=null?c:g[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function dp(t,n,i={},a={}){var oe,ie,be,Te;const u=new Map(t.map(Q=>[Q.name,Q])),d=new Map,h=new Map;for(const Q of t){const z=((oe=i[Q.name])!=null?oe:[]).filter(ae=>ae.kind!=="branch-created").map(ae=>new Date(ae.date).getTime()).filter(ae=>Number.isFinite(ae)).sort((ae,q)=>ae-q)[0];z!=null&&h.set(Q.name,z)}const p=Q=>{const le=h.get(Q.name);return le!=null?le:py(Q).start},g=Q=>{var z;const le=(z=a[Q.name])!=null?z:null;return le&&le!==Q.name&&(le===n||u.has(le))?le:Q.name===n?null:Q.parentBranch&&Q.parentBranch!==Q.name&&u.has(Q.parentBranch)?Q.parentBranch:null};for(const Q of t){if(Q.name===n)continue;const le=(ie=g(Q))!=null?ie:n,z=(be=d.get(le))!=null?be:[];z.push(Q),d.set(le,z)}for(const Q of d.values())Q.sort((le,z)=>p(le)-p(z)||le.name.localeCompare(z.name));const _=new Map,x=[],b=new Map,S=new Map,C=new Map;for(const Q of Object.values(i))for(const le of Q){const z=new Date(le.date).getTime();Number.isFinite(z)&&(le.fullSha&&C.set(le.fullSha,z),le.sha&&C.set(le.sha,z))}const k=(Q,le)=>({start:Math.min(Q,le),end:Math.max(Q,le)}),j=Q=>{var G,de;const le=k(p(Q),py(Q).end),z=[le],ae=le.start,q=Yv(Q,n,i),me=q?C.get(q):void 0,Me=new Date((de=(G=Q.divergedFromDate)!=null?G:Q.createdDate)!=null?de:Q.lastCommitDate).getTime(),D=Number.isFinite(me!=null?me:NaN)?me:Number.isFinite(Me)?Me:null;if(D==null)return z;const te=k(D,ae);return te.start!==te.end&&z.push(te),z},M=Math.max(1,360*60*1e3*Pv),I=(Q,le)=>!(Q.start-le.end>=M||le.start-Q.end>=M),L=(Q,le)=>le.some(z=>{var ae;return((ae=S.get(Q))!=null?ae:[]).some(q=>I(z,q))}),N=(Q,le=new Set)=>{const z=b.get(Q);if(z!=null)return z;if(le.has(Q))return 1;le.add(Q);const ae=u.get(Q);if(!ae||Q===n)return le.delete(Q),b.set(Q,0),0;const q=g(ae),me=q?N(q,le)+1:1;return le.delete(Q),b.set(Q,me),me},P=(Q,le=new Set)=>{var Ne,ve;const z=_.get(Q);if(z)return z.column;if(le.has(Q))return 0;le.add(Q);const ae=u.get(Q);if(!ae)return le.delete(Q),0;if(Q===n){const st={name:Q,column:0,parentName:null};_.set(Q,st),x.push(st);const Ge=j(ae);return S.set(0,[...(Ne=S.get(0))!=null?Ne:[],...Ge]),le.delete(Q),0}const q=g(ae),me=q&&!le.has(q)?q:null,Me=me?P(me,le):0,D=Math.max(1,N(Q)),te=Math.max(me?Me+1:1,D),G=j(ae);let de=te;for(;L(de,G);)de+=1;const ke={name:Q,column:de,parentName:me};return _.set(Q,ke),x.push(ke),S.set(de,[...(ve=S.get(de))!=null?ve:[],...G]),le.delete(Q),de};P(n);const X=t.filter(Q=>!_.has(Q.name)).sort((Q,le)=>p(Q)-p(le)||Q.name.localeCompare(le.name)),Y=X.filter(Q=>g(Q)!=null),U=X.filter(Q=>g(Q)==null);for(const Q of Y)P(Q.name);let Z=Math.max(0,...x.map(Q=>Q.column))+1+1;for(const Q of U){const le=j(Q);let z=Z;for(;L(z,le);)z+=1;const ae={name:Q.name,column:z,parentName:null};_.set(Q.name,ae),x.push(ae),S.set(z,[...(Te=S.get(z))!=null?Te:[],...le]),Z=z+1}return x.sort((Q,le)=>Q.column-le.column||Q.name.localeCompare(le.name))}function Wv(t,n,i,a){const c=new Map(t.map(h=>[h.name,h])),u=h=>{var g;const p=(g=i[h.name])!=null?g:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&c.has(h.parentBranch)?h.parentBranch:null},d=[];for(const h of t){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const Yu=2.25,zi=0,Fh=0,Fv=1800*1e3,Xv=1440*60*1e3,ji=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Pi=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function _y(t,n,i=new Map){var U,Z,oe,ie,be,Te,Q,le,z,ae,q,me,Me;if(t.length===0)return new Map;const a=[...t].sort((D,te)=>{const G=ji(D.date)-ji(te.date);return G!==0?G:D.id!==te.id?D.id.localeCompare(te.id):D.visualId.localeCompare(te.visualId)}),c=new Map;for(const D of t){const te=(U=D.parentSha)!=null?U:null;if(te){const G=(Z=c.get(te))!=null?Z:new Set;G.add(D.id),c.set(te,G)}for(const G of(oe=i.get(D.id))!=null?oe:[]){if(!G)continue;const de=(ie=c.get(G))!=null?ie:new Set;de.add(D.id),c.set(G,de)}}const u=new Map,d=new Map,h=new Map,p=new Set,g=new Map,_=new Map,x=new Map,b=new Map;for(const D of t){const te=(be=g.get(D.branchName))!=null?be:new Set;te.add(D.id),g.set(D.branchName,te);const G=(Q=(Te=n.get(D.branchName))==null?void 0:Te.column)!=null?Q:0,de=(le=_.get(D.id))!=null?le:new Set;de.add(G),_.set(D.id,de);const ke=new Set;D.parentSha&&ke.add(D.parentSha),x.set(D.visualId,ke);const Ne=new Set(ke);for(const ve of(z=i.get(D.id))!=null?z:[])ve&&Ne.add(ve);b.set(D.visualId,Ne)}const S=new Set(Array.from(_.keys())),C=Array.from(S),k=new Map,j=D=>{const te=[];for(const G of C)Pi(G,D)&&te.push(G);return te},M=new Map;for(const D of C)M.set(D,new Set);for(const D of t){const te=j(D.id);if(te.length===0)continue;const G=(ae=b.get(D.visualId))!=null?ae:new Set,de=new Set;for(const ke of G)for(const Ne of j(ke))de.add(Ne);for(const ke of te){const Ne=(q=M.get(ke))!=null?q:new Set;for(const ve of de)Ne.add(ve);M.set(ke,Ne)}}const I=new Map,L=(D,te=new Set)=>{var Ne;const G=I.get(D);if(G)return G;if(te.has(D))return new Set;te.add(D);const de=(Ne=M.get(D))!=null?Ne:new Set,ke=new Set;for(const ve of de){ke.add(ve);for(const st of L(ve,te))ke.add(st)}return te.delete(D),I.set(D,ke),ke},N=(D,te)=>{if(Pi(D,te))return!0;const G=j(D),de=j(te);for(const ke of G){const Ne=L(ke);for(const ve of de)if(Ne.has(ve))return!0}for(const ke of de){const Ne=L(ke);for(const ve of G)if(Ne.has(ve))return!0}return!1};let P=1;const X=(D,te)=>{var ct,ce,He,Ke,ze,Tt,ut,at,ot;const G=(ce=(ct=n.get(D.branchName))==null?void 0:ct.column)!=null?ce:0,de=(He=g.get(D.branchName))!=null?He:new Set,Ne=!(!!D.parentSha&&de.has(D.parentSha))&&D.parentSha?D.parentSha:null,ve=Array.from(te).flatMap(it=>j(it).flatMap(At=>{var Qe;return(Qe=k.get(At))!=null?Qe:[]})),st=ve.length>0?Math.max(...ve)+1:1,Ge=(Ke=c.get(D.id))!=null?Ke:new Set,rt=Array.from(Ge).flatMap(it=>{var At;return Array.from((At=_.get(it))!=null?At:[])}).some(it=>it!==G),tt=new Date(D.date).getTime(),$t=Math.max(st,1);let lt=null;for(let it=$t;it<P;it+=1){const At=(ze=d.get(it))!=null?ze:[];if(At.length===0||rt||p.has(it))continue;const Qe=(Tt=b.get(D.visualId))!=null?Tt:new Set;if(!(At.some(_e=>N(D.id,_e.sha)?!0:Array.from(Qe).some(Ue=>Pi(Ue,_e.sha)))||At.some(_e=>_e.column===G)||!Number.isFinite(tt)||!At.every(_e=>{if(!Number.isFinite(_e.time))return!1;const Ue=!!Ne&&!!_e.branchEntryParentSha&&Ne===_e.branchEntryParentSha?Xv:Fv;return Math.abs(_e.time-tt)<=Ue}))){lt=it;break}}lt==null&&(lt=Math.max(st,P)),u.set(D.visualId,lt),lt>=P&&(P=lt+1);const Rt=(ut=d.get(lt))!=null?ut:[];Rt.push({visualId:D.visualId,sha:D.id,column:G,time:tt,branchEntryParentSha:Ne}),d.set(lt,Rt),rt&&p.add(lt);for(const it of te){const At=(at=h.get(it))!=null?at:[];At.push(lt),h.set(it,At)}const Oe=(ot=k.get(D.id))!=null?ot:[];Oe.push(lt),k.set(D.id,Oe)};let Y=[...a];for(;Y.length>0;){const D=[];let te=!1;for(const G of Y){const de=(me=x.get(G.visualId))!=null?me:new Set;if(Array.from(de).some(Ne=>j(Ne).some(ve=>{var st,Ge;return((Ge=(st=k.get(ve))==null?void 0:st.length)!=null?Ge:0)===0}))){D.push(G);continue}X(G,de),te=!0}if(!te){const G=D.shift();if(!G)break;X(G,(Me=x.get(G.visualId))!=null?Me:new Set)}Y=D}return u}function Sd(t){var Ro,Yo,mo,bs,Rs,wn,pi,as,si,Hs,Bo,Co,vs,Us,xn,po,rs,Fn,_i,ko,Wo,Xt,Ai,Bs,Fo,Lo,Oo,Ls,jo,Cs,Sn,co,Xn,_s,qn,en,Vs,Ys,ws,Gn,Mo,ks,_o,js,Ms,uo;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchParentByName:p={},branchUniqueAheadCounts:g,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:b,gridSearchQuery:S,gridFocusSha:C,checkedOutRef:k,orientation:j="horizontal"}=t,M=j==="horizontal",I=new Map(i.map(T=>[T.name,T])),L=new Map(n.map(T=>[T.name,T])),N=Em([...a.map(T=>{var w,A,B;return{id:T.fullSha,branchName:d,message:(w=T.prTitle)!=null?w:T.sha,author:"",date:T.date,parentSha:(B=(A=T.parentShas)==null?void 0:A[0])!=null?B:null}}),...((Ro=h[d])!=null?Ro:[]).map(T=>gr(d,T)),...c.map(T=>gr(d,T)),...u.map(T=>gr(d,T))]),P=new Map,X=new Map;for(const T of i){if(T.name===d)continue;const w=Lx(T.name,g,h);X.set(T.name,w);const A=Em(w.map(ue=>gr(T.name,ue)));if(A.length>0){P.set(T.name,A);continue}const B=(bs=(mo=(Yo=T.presidesFromSha)!=null?Yo:T.divergedFromSha)!=null?mo:T.createdFromSha)!=null?bs:null;if(!B)continue;const V={id:`BRANCH_HEAD:${T.name}:${B}`,branchName:T.name,message:`Branch ${T.name}`,author:T.lastCommitAuthor,date:(wn=(Rs=T.createdDate)!=null?Rs:T.divergedFromDate)!=null?wn:T.lastCommitDate,parentSha:null,kind:"branch-created"};P.set(T.name,[V])}const Y=new Set(N.map(T=>T.id)),U=(pi=[...N].sort((T,w)=>ji(T.date)-ji(w.date)||T.id.localeCompare(w.id))[0])!=null?pi:null,Z=new Map(Array.from(P.entries()).map(([T,w])=>[T,new Set(w.map(A=>A.id))])),oe=new Map;for(const T of i){if(T.name===d)continue;const w=Vv(T.name,h,g);if(w){oe.set(T.name,w);continue}const A=(as=P.get(T.name))==null?void 0:as[0];if(A){const B=(Bo=(Hs=(si=T.presidesFromSha)!=null?si:T.divergedFromSha)!=null?Hs:T.createdFromSha)!=null?Bo:null;oe.set(T.name,{...A,parentSha:B})}}const ie=new Map;for(const[T,w]of P.entries()){const A=w.find(B=>B.kind!=="branch-created");A&&ie.set(T,A)}const be=new Map;for(const[T,w]of P.entries()){const A=w.filter(Ce=>Ce.kind!=="branch-created"),B=A.length>0?A:w,V=new Set(B.map(Ce=>Ce.id)),ue=B.find(Ce=>!Ce.parentSha||!V.has(Ce.parentSha)),Ee=ue!=null?ue:B[0];Ee&&be.set(T,Ee)}const Te=new Map;for(const T of i){if(T.name===d)continue;const w=(Co=be.get(T.name))!=null?Co:null,A=(vs=w==null?void 0:w.parentSha)!=null?vs:null;if(A){Te.set(T.name,A);continue}const B=(xn=(Us=oe.get(T.name))==null?void 0:Us.parentSha)!=null?xn:null;if(B){Te.set(T.name,B);continue}const V=(Fn=(rs=(po=T.presidesFromSha)!=null?po:T.divergedFromSha)!=null?rs:T.createdFromSha)!=null?Fn:null;V&&Te.set(T.name,V)}const Q=T=>{var ue,Ee,Ce,Ve,pt,Ht,Kt,It;const w=(ue=p[T.name])!=null?ue:null;if(!(w&&w!==d&&w!==T.name&&I.has(w)))return w!=null?w:d;const B=(Ve=(Ce=(Ee=Te.get(T.name))!=null?Ee:T.presidesFromSha)!=null?Ce:T.divergedFromSha)!=null?Ve:T.createdFromSha;if(B&&((pt=Z.get(w))!=null?pt:new Set).has(B))return w;const V=(Kt=(Ht=oe.get(T.name))==null?void 0:Ht.parentSha)!=null?Kt:null;return V&&((It=Z.get(w))!=null?It:new Set).has(V),w},le=T=>{var V,ue,Ee,Ce,Ve,pt,Ht,Kt;const w=oe.get(T.name),A=(Ve=(Ce=(Ee=(ue=(V=Te.get(T.name))!=null?V:w==null?void 0:w.parentSha)!=null?ue:T.presidesFromSha)!=null?Ee:T.divergedFromSha)!=null?Ce:T.createdFromSha)!=null?Ve:null;if(!T.parentBranch&&!A||!A)return null;if(Q(T)===d){if(Y.has(A))return A;const It=(pt=w==null?void 0:w.parentSha)!=null?pt:null;return It&&Y.has(It)?It:(Kt=(Ht=U==null?void 0:U.id)!=null?Ht:It)!=null?Kt:A}return Y.has(A),A},z=T=>le(T),ae=new Map;for(const T of[...c,...u]){const w={...gr(T.branch||d,T),visualId:`${T.branch||d}:${T.fullSha}`};ae.set(T.fullSha,w)}const q=new Map(ae),me=T=>{q.has(T.id)||q.set(T.id,T)},Me=new Map(Array.from(P.entries()).map(([T,w])=>[T,new Set(w.map(A=>A.id))])),D=new Set;for(const T of Me.values())for(const w of T)D.add(w);for(const T of N)D.has(T.id)||me({...T,visualId:`${T.branchName}:${T.id}`});for(const[T,w]of P.entries())for(const A of w)me({...A,visualId:`${T}:${A.id}`});const G=[...Array.from(q.values()).map(T=>({...T,visualId:`${T.branchName}:${T.id}`}))].sort((T,w)=>ji(T.date)-ji(w.date)||T.id.localeCompare(w.id)),de=new Map;for(const T of G){const w=(_i=de.get(T.branchName))!=null?_i:new Set;w.add(T.id),de.set(T.branchName,w)}const ke=(T,w)=>{const A=de.get(T);if(!A||A.size===0)return!1;for(const B of A)if(Pi(B,w))return!0;return!1},Ne=(T,w)=>{const A=Array.from(de.entries()).filter(([B])=>B!==w).filter(([,B])=>Array.from(B).some(V=>Pi(V,T))).map(([B])=>B);return A.length>0?A.sort()[0]:T.slice(0,7)},ve=[],st=new Map,Ge=new Map;for(const T of a){const w=T.fullSha,A=T.targetBranch,B=T.targetCommitSha;if(!w||!A||!B||!ke(A,B))continue;const V=((ko=T.parentShas)!=null?ko:[]).slice(1).filter(Ee=>!!Ee&&!Pi(Ee,w));if(V.length===0)continue;const ue=(Wo=Ge.get(w))!=null?Wo:new Set;for(const Ee of V){ue.add(Ee);const Ce=Ne(Ee,A);ve.push({sourceCommitSha:Ee,sourceBranchName:Ce,mergeCommitSha:w,targetCommitSha:B,targetBranchName:A});const Ve=(Xt=st.get(Ce))!=null?Xt:new Map,pt=(Ai=Ve.get(Ee))!=null?Ai:new Set;pt.add(A),Ve.set(Ee,pt),st.set(Ce,Ve)}Ge.set(w,ue)}const $e=new Map;for(const T of i){if(T.name===d)continue;const w=le(T);w&&$e.set(T.name,w)}const rt=new Map;for(const T of G){const w=Ge.get(T.id);if(w&&w.size>0){const V=(Bs=rt.get(T.id))!=null?Bs:new Set;for(const ue of w)V.add(ue);rt.set(T.id,V)}if(T.branchName===d)continue;const A=$e.get(T.branchName);if(!A||A===T.id)continue;const B=(Fo=rt.get(T.id))!=null?Fo:new Set;B.add(A),rt.set(T.id,B)}const tt=_y(G,L,rt),$t=new Map;for(const T of G){const w=(Lo=$t.get(T.branchName))!=null?Lo:[];w.push(T),$t.set(T.branchName,w)}const lt=new Map,Rt=new Map,Oe=new Map,ct=new Map,ce=new Map,He=(T,w)=>{var ue,Ee,Ce;if(w.length===0)return[];const A=[...w].sort((Ve,pt)=>{var It,kt;const Ht=(It=tt.get(Ve.visualId))!=null?It:Number.MAX_SAFE_INTEGER,Kt=(kt=tt.get(pt.visualId))!=null?kt:Number.MAX_SAFE_INTEGER;return Ht!==Kt?Ht-Kt:ji(Ve.date)-ji(pt.date)||Ve.id.localeCompare(pt.id)}),B=new Map;for(const Ve of A){const pt=((ue=Ve.clusterKey)==null?void 0:ue.trim())||`cluster:${T}:${Ve.id}`,Ht=(Ee=B.get(pt))!=null?Ee:[];Ht.push(Ve),B.set(pt,Ht)}const V=[];for(const[Ve,pt]of B.entries()){if(pt.length===0)continue;const Kt=[...pt].sort((kt,Dt)=>{var Zs,ts;const tn=(Zs=tt.get(kt.visualId))!=null?Zs:Number.MIN_SAFE_INTEGER,An=(ts=tt.get(Dt.visualId))!=null?ts:Number.MIN_SAFE_INTEGER;return tn!==An?An-tn:ji(Dt.date)-ji(kt.date)||Dt.id.localeCompare(kt.id)})[0].visualId,It={branchName:T,key:Ve,commitIds:pt.map(kt=>kt.visualId),leadId:Kt,count:pt.length};V.push(It),ct.set(Ve,Kt),ce.set(Ve,pt.length);for(const kt of It.commitIds){Rt.set(kt,Ve);const Dt=kt.split(":").slice(1).join(":"),tn=(Ce=Oe.get(Dt))!=null?Ce:[];tn.includes(Ve)||tn.push(Ve),Oe.set(Dt,tn)}}return V};for(const[T,w]of $t.entries())lt.set(T,He(T,w));const Ke=new Map;for(const T of G)Ke.set(T.id,T);const ze=T=>{if(!T)return"none";const w=Array.from(Ke.values()).find(A=>Pi(A.id,T)||Pi(A.id.slice(0,7),T)||Pi(T,A.id));return w?`${w.id.slice(0,7)} ${w.branchName}`:T.slice(0,7)},Tt=b?["Lane rows (expected):",...[...n].sort((T,w)=>T.column-w.column||T.name.localeCompare(w.name)).map(T=>{var w;return`  row=${T.column} branch=${T.name} parent=${(w=T.parentName)!=null?w:"none"}`}),"",...i.flatMap(T=>{var Ee,Ce,Ve,pt,Ht,Kt,It,kt;const w=(Ee=h[T.name])!=null?Ee:[],A=[...(Ce=X.get(T.name))!=null?Ce:[]].reverse(),B=new Set(((Ve=P.get(T.name))!=null?Ve:[]).map(Dt=>Dt.id)),V=(Ht=(pt=A.find(Dt=>!Dt.parentSha||!A.some(tn=>{var An;return Pi(tn.fullSha,(An=Dt.parentSha)!=null?An:"")})))!=null?pt:A[0])!=null?Ht:null,ue=(It=(Kt=V==null?void 0:V.parentSha)!=null?Kt:Te.get(T.name))!=null?It:null;return[`Branch ${T.name}`,`  ahead=${(kt=g[T.name])!=null?kt:0} previews=${A.length} rendered=${B.size}`,`  db parent commit=${ze(ue)}`,`  db child commit=${V?`${V.fullSha.slice(0,7)} ${T.name}`:"none"}`,...A.map(Dt=>{const tn=B.has(Dt.fullSha)?"visible":"hidden",An=B.has(Dt.fullSha)?"kept by render set":"dropped by render set";return`  ${tn} ${Dt.fullSha.slice(0,7)} ${Dt.message} [${An}]`}),w.length===0?"  no preview data":null].filter(Dt=>Dt!=null)})]:[],ut=b?Array.from(P.entries()).map(([T,w])=>[`Branch debug ${T}`,...w.map(A=>`  ${A.id.slice(0,7)} ${A.message}`)].join(`
`)):[],at=tt,ot=Tm/Yu,it=20/Yu,At=M?ns+ot+it:Hu+ot+it,Qe=M?Hu+ot+it:tc,H=Math.max(0,...G.map(T=>{var w;return(w=at.get(T.visualId))!=null?w:1})),J=G.map(T=>{var V,ue;const w=L.get(T.branchName),A=(V=at.get(T.visualId))!=null?V:1,B=(ue=w==null?void 0:w.column)!=null?ue:0;return M?{commit:T,row:A,column:B,x:Jr+(A-1)*At,y:Zr+B*Qe}:{commit:T,row:A,column:B,x:Jr+B*tc,y:Zr+(H-A)*At}}),ne=S.trim().toLowerCase(),_e=ne?J.filter(T=>{const w=T.commit.id.toLowerCase(),A=T.commit.id.slice(0,7).toLowerCase(),B=T.commit.message.toLowerCase(),V=T.commit.branchName.toLowerCase();return w.includes(ne)||A.includes(ne)||B.includes(ne)||V.includes(ne)}):J,Xe=C&&(Oo=J.find(T=>T.commit.id===C))!=null?Oo:null,Ue=new Set(_e.map(T=>T.commit.id)),De=(Ls=k==null?void 0:k.headSha)!=null?Ls:null,St=(()=>{var w,A;const T=(w=k==null?void 0:k.branchName)!=null?w:null;return!De||!T?null:(A=Rt.get(`${T}:${De}`))!=null?A:null})(),Ye=new Set;for(const T of lt.values())for(const w of T)w.count>1&&w.key!==St&&Ye.add(w.key);const bt=[...G].filter(T=>{var ue;const w=Rt.get(T.visualId);if(!w)return!0;const A=ct.get(w),B=(ue=ce.get(w))!=null?ue:1,V=_.has(w)||!Ye.has(w)&&!x.has(w);return B<=1||V||A===T.visualId}),ht=_y(bt,L,rt),Ie=Tm/Yu,nt=20/Yu,Vt=M?ns+Ie+nt:Hu+Ie+nt,un=M?Hu+Ie+nt:tc,qe=Math.max(0,...bt.map(T=>{var w;return(w=ht.get(T.visualId))!=null?w:1})),Bt=bt.map(T=>{var V,ue;const w=L.get(T.branchName),A=(V=ht.get(T.visualId))!=null?V:1,B=(ue=w==null?void 0:w.column)!=null?ue:0;return M?{commit:T,row:A,column:B,x:Jr+(A-1)*Vt,y:Zr+B*un}:{commit:T,row:A,column:B,x:Jr+B*tc,y:Zr+(qe-A)*Vt}}),Ot=new Map;for(const T of Bt){const w=(jo=Ot.get(T.commit.id))!=null?jo:[];w.push(T),Ot.set(T.commit.id,w)}const zt=new Map;for(const T of Bt){const w=Rt.get(T.commit.visualId);if(!w)continue;const A=zt.get(w);(!A||(M?T.x>A.x:T.y<A.y))&&zt.set(w,T)}const rn=(T,w)=>`${T.toFixed(1)} ${w.toFixed(1)}`,mt=Math.max(0,...Bt.map(T=>T.row)),Ft=Math.max(0,...n.map(T=>T.column)),Rn=M?Jr*2+Math.max(0,mt-1)*Vt+ns+Vh+nt:Jr*2+(Ft+1)*tc,os=M?Zr*2+Ft*un+$s+Vh+nt:Zr*2+Math.max(0,mt-1)*Vt+$s+Vh+nt,gn=[],oo=new Map(i.map(T=>{var A,B;const w=new Date((B=(A=T.createdDate)!=null?A:T.divergedFromDate)!=null?B:T.lastCommitDate).getTime();return[T.name,Number.isFinite(w)?w:0]})),is=T=>{var w;return(w=oo.get(T))!=null?w:0},es=[],Gt=T=>{b&&es.push(T)},kn=new Set,Jt=new Map,yn=(T,w)=>{var B;const A=(B=Jt.get(T))!=null?B:[];A.includes(w)||A.push(w),Jt.set(T,A)},Ze=new Set,jn=new Set,So=new Set,io=(T,w)=>{var V,ue;if(!T)return null;const A=Vu(Ot,T,w);if(A)return A;const B=(V=Rt.get(`${w!=null?w:d}:${T}`))!=null?V:Rt.get(T);return B&&(ue=zt.get(B))!=null?ue:null},Ln=new Set;for(const T of i){const w=z(T);w&&jn.add(w);const A=(Cs=Te.get(T.name))!=null?Cs:null;A&&So.add(A)}const Ns=T=>{var V;const w=io(T.id,T.branchName);if(w)return w;const A=Rt.get(T.visualId);if(!A)return null;const B=ct.get(A);return B&&(V=Bt.find(ue=>ue.commit.id===B))!=null?V:null},ao=(T,w)=>T?Vu(Ot,T,w):null,ro=(T,w)=>M?{x:T.x-zi,y:T.y+$s/2,face:"left"}:{x:T.x+ns/2,y:T.y+$s+zi,face:"bottom"},ys=T=>M?{x:T.x+ns+zi,y:T.y+$s/2,face:"right"}:{x:T.x+ns/2,y:T.y+$s+zi,face:"bottom"},ps=(T,w)=>T.column!==w.column?!0:M?T.commit.branchName!==w.commit.branchName:!1,xs=(T,w,A)=>{if(!M)return{x:w?T.x+ns:T.x+ns/2,y:w?T.y+$s/2:T.y,face:w?"right":"top"};if(!w)return{x:T.x+ns+zi,y:T.y+$s/2,face:"right"};if(A&&A.column===T.column&&A.commit.branchName!==T.commit.branchName){if(A.x>T.x)return{x:T.x+ns/2,y:T.y+$s+zi,face:"bottom"};if(A.x<T.x)return{x:T.x+ns/2,y:T.y-zi,face:"top"}}return!A||A.column===T.column?{x:T.x+ns+zi,y:T.y+$s/2,face:"right"}:A.column>T.column?{x:T.x+ns/2,y:T.y+$s+zi,face:"bottom"}:{x:T.x+ns/2,y:T.y-zi,face:"top"}},on=T=>M?{x:T.x+ns/2,y:T.y+$s+zi,face:"bottom"}:{x:T.x+ns,y:T.y+$s/2,face:"right"},ni=(T,w)=>Vu(Ot,T,w),Do=(T,w)=>ao(T,w),Qs=[],Wn=new Set;for(const T of ve){const w=(Sn=io(T.targetCommitSha,T.targetBranchName))!=null?Sn:null;if(!w){Gt({id:`merge:${T.mergeCommitSha}:${T.sourceCommitSha}:target`,kind:"merge",parent:T.sourceCommitSha,child:T.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const A=T.sourceCommitSha,B=`merge:${T.mergeCommitSha}:${A!=null?A:"unknown"}`;if(!A||Pi(A,T.targetCommitSha)){Gt({id:B,kind:"merge",parent:A!=null?A:"unknown",child:T.targetCommitSha,rendered:!1,reason:A?"merged parent equals merge target sha":"missing merged parent sha"});continue}const V=(co=Vu(Ot,A))!=null?co:null;if(!V){Gt({id:B,kind:"merge",parent:A,child:T.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(V.commit.id===w.commit.id){Gt({id:B,kind:"merge",parent:V.commit.id,child:w.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let ue,Ee,Ce;const Ve=M?w.x+ns/2:w.x+ns-Fh,pt=M?w.y+$s+Fh:w.y+$s/2,Ht=M?"bottom":"right";M?(ue=V.x+ns+Fh,Ee=V.y+$s/2,Ce="right"):(ue=V.x+ns/2,Ee=V.y,Ce="top");const Kt=`${ue.toFixed(2)}:${Ee.toFixed(2)}:${Ve.toFixed(2)}:${pt.toFixed(2)}`;if(Wn.has(Kt)){Gt({id:B,kind:"merge",parent:V.commit.id,child:w.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}Wn.add(Kt),Qs.push({id:B,fromX:ue,fromY:Ee,toX:Ve,toY:pt,fromFace:Ce,toFace:Ht,zIndex:is(V.commit.branchName)}),Gt({id:B,kind:"merge",parent:V.commit.id,child:w.commit.id,rendered:!0,reason:`merge connector rendered to ${T.targetBranchName}`})}const lo=new Set;for(const T of i){if(T.name===d)continue;const w=oe.get(T.name);if(!w)continue;const A=Q(T),B=ni((Xn=Te.get(T.name))!=null?Xn:"",A),V=(_s=ie.get(T.name))!=null?_s:w,ue=(qn=Do(V.id,T.name))!=null?qn:Ns(V);if(!B||!ue||B.commit.id===ue.commit.id){const Ht=Rt.get(`${T.name}:${w.id}`),Kt=Rt.get(`${T.name}:${V.id}`),It=!!Ht&&!Ye.has(Ht),kt=!!Kt&&!Ye.has(Kt),Dt=!!Ht&&!_.has(Ht)&&(It?x.has(Ht):!0),tn=!!Kt&&!_.has(Kt)&&(kt?x.has(Kt):!0);!B&&!Dt&&yn((en=ue==null?void 0:ue.commit.id)!=null?en:w.id,"Missing parent node"),!ue&&!tn&&yn(w.id,"Missing child node"),Gt({id:`branch:${(Vs=B==null?void 0:B.commit.id)!=null?Vs:"null"}->${(Ys=ue==null?void 0:ue.commit.id)!=null?Ys:"null"}`,kind:"branch",parent:(ws=B==null?void 0:B.commit.id)!=null?ws:"null",child:(Gn=ue==null?void 0:ue.commit.id)!=null?Gn:"null",rendered:!1,reason:B?ue?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Ee=`branch:${B.commit.id}->${ue.commit.id}`;if(Ln.has(Ee)){Gt({id:Ee,kind:"branch",parent:B.commit.id,child:ue.commit.id,rendered:!1,reason:"duplicate connector key"});continue}Ln.add(Ee),Ze.add(B.commit.id);const Ce=ps(B,ue);B.commit.branchName!==ue.commit.branchName&&lo.add(B.commit.id);const Ve=on(B),pt=ys(ue);gn.push({id:Ee,fromX:Ve.x,fromY:Ve.y,toX:pt.x,toY:pt.y,fromFace:Ve.face,toFace:pt.face,zIndex:is(ue.commit.branchName)}),Gt({id:Ee,kind:"branch",parent:B.commit.id,child:ue.commit.id,rendered:!0,reason:Ce?"branch connector rendered":M?"horizontal connector rendered":"vertical connector rendered"})}for(const T of G){const w=Ns(T);if(!w)continue;const A=(Mo=T.parentSha)!=null?Mo:null;if(!A)continue;const B=(ks=io(A,T.branchName))!=null?ks:ni(A,T.branchName);if(!B){const Ve=(_o=Rt.get(`${T.branchName}:${A}`))!=null?_o:Rt.get(A),pt=!!Ve&&!Ye.has(Ve);!!Ve&&!_.has(Ve)&&(pt?x.has(Ve):!0)||yn(T.id,"Missing parent node"),Gt({id:`${T.visualId}->${A}`,kind:"ancestry",parent:A,child:T.id,rendered:!1,reason:"missing parent node"});continue}if(w.commit.id===B.commit.id){yn(w.commit.id,"Parent and child resolve to the same node"),Gt({id:`${B.commit.id}->${w.commit.id}`,kind:"ancestry",parent:B.commit.id,child:w.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const V=`${T.branchName}:${(js=B.commit.visualId)!=null?js:B.commit.id}->${w.commit.visualId}`;if(Ln.has(V)){yn(B.commit.id,"Duplicate connector key"),yn(w.commit.id,"Duplicate connector key"),Gt({id:V,kind:"ancestry",parent:B.commit.id,child:w.commit.id,rendered:!1,reason:"duplicate connector key"});continue}Ln.add(V),Ze.add(B.commit.id);const ue=ps(B,w),Ee=xs(B,ue,w),Ce=ro(w);gn.push({id:V,fromX:Ee.x,fromY:Ee.y,toX:Ce.x,toY:Ce.y,fromFace:Ee.face,toFace:Ce.face,zIndex:is(w.commit.branchName)}),Gt({id:V,kind:"ancestry",parent:B.commit.id,child:w.commit.id,rendered:!0,reason:ue?"ancestry connector rendered":M?"horizontal ancestry rendered":"vertical ancestry rendered"}),kn.add(B.commit.id),kn.add(w.commit.id)}const No=new Map;for(const T of Bt){const w=(Ms=No.get(T.commit.branchName))!=null?Ms:[];w.push(T),No.set(T.commit.branchName,w)}for(const[T,w]of No.entries()){if(w.length<2)continue;const A=[...w].sort((B,V)=>{var ue,Ee,Ce,Ve,pt,Ht,Kt,It;return B.row!==V.row?B.row-V.row:ji((Ee=(ue=B==null?void 0:B.commit)==null?void 0:ue.date)!=null?Ee:null)-ji((Ve=(Ce=V==null?void 0:V.commit)==null?void 0:Ce.date)!=null?Ve:null)||((Ht=(pt=B==null?void 0:B.commit)==null?void 0:pt.id)!=null?Ht:"").localeCompare((It=(Kt=V==null?void 0:V.commit)==null?void 0:Kt.id)!=null?It:"")});for(let B=1;B<A.length;B+=1){const V=A[B-1],ue=A[B];if(V.commit.id===ue.commit.id)continue;const Ee=(uo=ue.commit.parentSha)!=null?uo:null;if(Ee&&ni(Ee,ue.commit.branchName))continue;const Ce=`chain:${T}:${V.commit.id}->${ue.commit.id}`;if(Ln.has(Ce)){yn(V.commit.id,"Duplicate branch chain connector"),yn(ue.commit.id,"Duplicate branch chain connector"),Gt({id:Ce,kind:"ancestry",parent:V.commit.id,child:ue.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}Ln.add(Ce);const Ve=ps(V,ue),pt=xs(V,Ve,ue),Ht=ro(ue);gn.push({id:Ce,fromX:pt.x,fromY:pt.y,toX:Ht.x,toY:Ht.y,fromFace:pt.face,toFace:Ht.face,zIndex:is(ue.commit.branchName)}),Gt({id:Ce,kind:"ancestry",parent:V.commit.id,child:ue.commit.id,rendered:!0,reason:"branch chain rendered"}),kn.add(V.commit.id),kn.add(ue.commit.id)}}return{branchByName:I,laneByName:L,mainCommits:N,branchCommitsByLane:P,branchPreviewSets:X,allCommits:G,clustersByBranch:lt,clusterKeyByCommitId:Rt,clusterKeyBySha:Oe,leadByClusterKey:ct,clusterCounts:ce,debugRows:Tt,branchDebugRows:ut,nodes:J,normalizedSearchQuery:ne,matchingNodes:_e,matchingNodeIds:Ue,focusedNode:Xe,checkedOutClusterKey:St,defaultCollapsedClumps:Ye,visibleCommitsList:bt,renderNodes:Bt,visibleNodesBySha:Ot,visibleNodeByClusterKey:zt,pointFormatter:rn,contentWidth:Rn,contentHeight:os,connectors:gn,mergeConnectors:Qs,connectorDecisions:es,nodeWarnings:Jt,connectorParentShas:Ze,branchStartShas:jn,branchOffNodeShas:So,crossBranchOutgoingShas:lo,commitIdsWithRenderedAncestry:kn,branchBaseCommitByName:oe,firstBranchCommitByName:be,mergeDestinations:ve,mergeTargetBranchesBySourceBranchAndCommitSha:st}}const qv=8,Gv=44,gy=120,yy=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Ox(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),g=Math.abs(h),_=Math.hypot(d,h);if(_<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,g)<qv){const X=d/_,Y=h/_,U=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+X*U,c1y:n+Y*U,c2x:i-X*U,c2y:a-Y*U}}if(Math.min(p,g)<Gv){const X=d/_,Y=h/_,U=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+X*U,c1y:n+Y*U,c2x:i-X*U,c2y:a-Y*U}}const S=Math.min(160,p*.42),C=Math.min(100,p*.22),k=Math.min(120,g*.32),j=Math.min(160,g*.42),M=yy(c),I=yy(u);if(!(M==="v"&&I==="h"||M==="v"&&I==null&&g>=p||M==null&&I==="h"&&g>=p||M==="v"&&I==="v"||M==null&&I==null&&g>p)){const X=i,Y=n;return{kind:"elbowH",cx:X,cy:Y,s1c1x:t+x*S,s1c1y:n,s1c2x:X-x*C,s1c2y:Y,s2c1x:X,s2c1y:Y+b*k,s2c2x:i,s2c2y:a-b*j}}const N=t,P=a;return{kind:"elbowV",cx:N,cy:P,s1c1x:t,s1c1y:n+b*j,s1c2x:N,s1c2y:P-b*k,s2c1x:N+x*S,s2c1y:P,s2c2x:i-x*C,s2c2y:a}}function Kv(t,n,i,a,c,u){const d=Ox(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function xy(t,n,i,a,c,u,d){const h=Ox(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const S=Math.max(8,Math.min(gy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),C=i>=t?1:-1,k=a>=n?1:-1,j=h.cx-C*S,M=h.cy+k*S;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(j-C*S*.5,h.cy)} ${c(j,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,M)}`,`C ${c(h.cx,M+k*S*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(gy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),g=i>=t?1:-1,_=a>=n?1:-1,x=h.cy-_*p,b=h.cx+g*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-_*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+g*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const fp=2.25,nc=fp/2,Qv=.45,Zv=.01,ya=fp,Cd=10,Jv=-100,by=0,vy=.9,ew=.9,wy=.001,Xh=.001,tw=12,nw=ns+48;function Ps(...t){return t.filter(Boolean).join(" ")}function sw(t){return Math.max(Qv,Math.min(fp,t))}function ow(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function zx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function iw(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const g of t)n=Math.min(n,g.x),i=Math.min(i,g.y),a=Math.max(a,g.x),c=Math.max(c,g.y);return{left:n,top:i,right:a,bottom:c}}function aw(t,n,i,a,c,u,d){const h=Kv(t,n,i,a,u,d),p=iw(h);return zx(c,p)}function $x(t,n){return{left:t.x,top:t.y+n,right:t.x+ns,bottom:t.y+Tc+$s+4}}function rw(t,n){const i=nw,a=Math.max(120,Math.ceil(Tc+$s+4-n+24)),c=new Map;for(const u of t){const d=$x(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),g=Math.floor(d.top/a),_=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let S=g;S<=_;S++){const C=`${b},${S}`;let k=c.get(C);k||(k=new Set,c.set(C,k)),k.add(x)}}return{cellW:i,cellH:a,buckets:c}}function lw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),g=Math.floor(n.top/u),_=Math.floor(n.bottom/u),x=new Set;for(let S=h;S<=p;S++)for(let C=g;C<=_;C++){const k=d.get(`${S},${C}`);if(k)for(const j of k)x.add(j)}const b=new Set;for(const S of x){const C=i.get(S);if(!C)continue;const k=$x(C,a);zx(n,k)&&b.add(S)}return b}function Sy(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/ya;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function cw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function Cy(t,n,i){const a=n/ya;return!Number.isFinite(a)||a<=0?t:cw(t,100/a)}function ky(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function mi(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Am(t,n){if(n){const i=ky(n),a=ky(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function qh(t,n){return t.pathExists===!1?!1:Am(t,n)}function uw(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function dw({fadeIn:t,className:n,style:i,onClick:a,dataCommitCard:c,children:u}){const[d,h]=y.useState(!t);return y.useLayoutEffect(()=>{if(!t){h(!0);return}h(!1);let p=null;const g=requestAnimationFrame(()=>{p=requestAnimationFrame(()=>h(!0))});return()=>{cancelAnimationFrame(g),p!=null&&cancelAnimationFrame(p)}},[t]),l.jsx("div",{className:n,"data-commit-card":c,onClick:a,style:{...i,opacity:d?1:0,transition:t?"opacity 240ms ease-out":void 0},children:u})}function fw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,labelTopPx:g,inverseZoomStyle:_,displayZoom:x,selectedVisibleCommitShas:b,iconScaleStyle:S,normalizedSearchQuery:C,matchingNodeIds:k,focusedNode:j,renderNodes:M,shouldRenderNode:I,manuallyOpenedClumps:L,manuallyClosedClumps:N,defaultCollapsedClumps:P,leadByClusterKey:X,clusterKeyByCommitId:Y,clusterCounts:U,commitIdsWithRenderedAncestry:Z,nodeWarnings:oe,connectorParentShas:ie,branchStartShas:be,branchOffNodeShas:Te,crossBranchOutgoingShas:Q,branchBaseCommitByName:le,branchStartAccentClass:z,connectorParentAccentClass:ae,commitCornerRadiusPx:q,lineStrokeWidth:me,pointFormatter:Me,connectors:D,mergeConnectors:te,cullConnectorPath:G,flushCameraReactTick:de,setManuallyOpenedClumps:ke,setManuallyClosedClumps:Ne,onCommitCardClick:ve,unpushedCommitShasSetByBranch:st,checkedOutHeadSha:Ge}){const[$e,rt]=y.useState(new Set),tt=y.useRef(null);y.useEffect(()=>{const Oe=new Set;U.forEach((He,Ke)=>{(L.has(Ke)||!P.has(Ke)&&!N.has(Ke))&&Oe.add(Ke)});const ct=tt.current;if(ct==null){tt.current=Oe;return}const ce=[];if(Oe.forEach(He=>{ct.has(He)||ce.push(He)}),ce.length>0){rt(Ke=>{const ze=new Set(Ke);return ce.forEach(Tt=>ze.add(Tt)),ze});const He=window.setTimeout(()=>{rt(Ke=>{const ze=new Set(Ke);return ce.forEach(Tt=>ze.delete(Tt)),ze})},260);return tt.current=Oe,()=>{window.clearTimeout(He)}}tt.current=Oe},[U,P,N,L]);const $t=(Oe,ct)=>{const ce=ct.zIndex-Oe.zIndex;if(ce!==0)return ce;const He=Math.min(Oe.fromY,Oe.toY),Ke=Math.min(ct.fromY,ct.toY),ze=He-Ke;return ze!==0?ze:Oe.id.localeCompare(ct.id)},lt=te.filter(Oe=>G(Oe)).sort($t),Rt=D.filter(Oe=>G(Oe)).sort($t);return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:l.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[M.filter(Oe=>I(Oe)).map(Oe=>{var Xe,Ue,De,St,Ye;const ct=Y.get(Oe.commit.visualId),ce=ct?L.has(ct)||!P.has(ct)&&!N.has(ct):!1,He=ct?X.get(ct)===Oe.commit.visualId:!1,Ke=ct!=null&&ce&&!He&&$e.has(ct),ze=ct&&(Xe=U.get(ct))!=null?Xe:1,Tt=Z.has(Oe.commit.id),ut=(Ue=oe.get(Oe.commit.id))!=null?Ue:[],at=ut.length>0&&!Tt,ot=b.includes(Oe.commit.id),it=Oe.commit.id==="WORKING_TREE"||Oe.commit.kind==="uncommitted",At=Oe.commit.kind==="stash"||Oe.commit.id.startsWith("STASH:"),Qe=it||((St=(De=st.get(Oe.commit.branchName))==null?void 0:De.has(Oe.commit.id))!=null?St:!1),J=(it||Ge!=null&&Oe.commit.id===Ge)&&!ot,ne=J?"text-[#38BDF2]":ot?"text-[#158EFC]":"text-muted-foreground",_e=J?{color:"#38BDF2"}:ot?{color:"#158EFC"}:void 0;return l.jsxs(dw,{fadeIn:Ke,dataCommitCard:"true",className:Ps("group absolute z-20 cursor-pointer",C&&!k.has(Oe.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",C&&k.has(Oe.commit.id)?"scale-[1.01]":"",(j==null?void 0:j.commit.id)===Oe.commit.id?"z-30 scale-[1.015]":""),style:{left:Oe.x,top:Oe.y,width:ns,height:Tc+$s+4,overflow:"visible"},onClick:bt=>ve(bt,Oe),children:[l.jsx("div",{className:"absolute left-0 w-full",style:{..._,top:`${g}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[l.jsxs("div",{className:Ps("min-w-0 h-4 flex-1 text-sm font-medium leading-none",ne,x<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:_e,children:[Oe.commit.branchName,"/",Oe.commit.id.slice(0,7)]}),He&&ze>1?l.jsx("button",{type:"button",onMouseDown:bt=>{bt.stopPropagation()},onClick:bt=>{if(bt.stopPropagation(),bt.preventDefault(),!ct)return;!P.has(ct)?(ke(Ie=>{if(!Ie.has(ct))return Ie;const nt=new Set(Ie);return nt.delete(ct),nt}),Ne(Ie=>{const nt=new Set(Ie);return nt.has(ct)?nt.delete(ct):nt.add(ct),nt})):(Ne(Ie=>{if(!Ie.has(ct))return Ie;const nt=new Set(Ie);return nt.delete(ct),nt}),ke(Ie=>{const nt=new Set(Ie);return nt.has(ct)?nt.delete(ct):nt.add(ct),nt})),de()},className:Ps("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",ne),style:_e,children:ce?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${ze}`}):null]})}),l.jsx("div",{className:Ps("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",J&&!Qe&&!At?"bg-[#EBF7FE]":ot&&!Qe&&!At?"bg-[#E5F0FF]":Qe||At?"bg-transparent":"bg-[#F5F5F5]",At||it?"border-dashed":"",Te.has(Oe.commit.id)||be.has(Oe.commit.id)||Q.has(Oe.commit.id)?z:ie.has(Oe.commit.id)?ae:((Ye=le.get(Oe.commit.branchName))==null?void 0:Ye.id)===Oe.commit.id?"border-amber-500":at?"border-red-500":"",(C&&k.has(Oe.commit.id)&&!d,"")),style:{top:0,borderWidth:`${At||it?me*(2/1.5):me}px`,borderColor:J?"#38BDF2":ot?"#158EFC":Yh,borderTopLeftRadius:0,borderTopRightRadius:`${q}px`,borderBottomRightRadius:`${q}px`,borderBottomLeftRadius:`${q}px`},children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:_,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:Ps("max-w-[38rem] text-sm font-medium leading-tight tracking-tight text-muted-foreground",ne,x<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:_e,children:He&&ce?Oe.commit.message:He&&ze>1?`${Oe.commit.message} +${ze-1}`:Oe.commit.message}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:at?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:ut.join(`
`),children:"Broken ancestry"}):null})]}),x>.5?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:Ps("text-sm font-medium",ne),style:_e,children:["@",Oe.commit.author]}),l.jsx("div",{className:Ps("text-sm font-medium",ne),style:_e,children:new Date(Oe.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null,(j==null?void 0:j.commit.id)===Oe.commit.id&&C?l.jsx("div",{className:"absolute left-5 top-4 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground",style:S,children:"Search result"}):null]})})]},Oe.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[lt.map(Oe=>{const{fromX:ct,fromY:ce,toX:He,toY:Ke}=Oe,ze=xy(ct,ce,He,Ke,Me,Oe.fromFace,Oe.toFace);return l.jsx("path",{d:ze,fill:"none",stroke:Yh,strokeWidth:me,strokeLinecap:"round",strokeLinejoin:"round"},Oe.id)}),Rt.map(Oe=>{const{fromX:ct,fromY:ce,toX:He,toY:Ke}=Oe,ze=xy(ct,ce,He,Ke,Me,Oe.fromFace,Oe.toFace);return l.jsx("path",{d:ze,fill:"none",stroke:Yh,strokeWidth:me,strokeLinecap:"round",strokeLinejoin:"round"},Oe.id)})]})]})})})}function hw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stageInProgress:a,stashInProgress:c,stashDisabled:u,pushInProgress:d,deleteInProgress:h,createBranchFromNodeInProgress:p,onCommitLocalChanges:g,onStageAllChanges:_,onStashLocalChanges:x,onPushCurrentBranch:b,onPushAllBranches:S,onPushCommitTargets:C,onDeleteSelection:k,onCreateBranchFromNode:j,onMergeRefsIntoBranch:M,selectedPushTargets:I,selectedPushLabel:L,canPushCurrentBranch:N,pushCurrentBranchLabel:P,pushableRemoteBranchCount:X,deletableSelectionCount:Y,canCreateRootBranch:U,selectedCommitTargetOption:Z,mergeInProgress:oe,setMergeTargetCommitSha:ie,worktrees:be,currentRepoPath:Te,worktreeMenuOpen:Q,setWorktreeMenuOpen:le,onSwitchToWorktree:z,onRemoveWorktree:ae,removeWorktreeInProgress:q,setCommitDialogOpen:me,setDeleteConfirmOpen:Me,setNewBranchDialogOpen:D}){const te=t.length>0;return l.jsxs("div",{className:"pointer-events-none absolute bottom-4 left-4 right-4 z-[70] flex flex-wrap items-center gap-2",children:[l.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[l.jsx("button",{type:"button",onClick:()=>me(!0),disabled:!g||i||te||n,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:n?"Committing...":"Commit"}),l.jsx("button",{type:"button",onClick:()=>void(_==null?void 0:_()),disabled:!_||i||te||a,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:a?"Staging...":"Stage all"}),l.jsx("button",{type:"button",onClick:()=>void(x==null?void 0:x()),disabled:!x||u||te||c,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:c?"Stashing...":"Stash"}),l.jsx("button",{type:"button",onClick:()=>void(b==null?void 0:b()),disabled:!b||!N||te||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:d?"Pushing...":P}),l.jsx("button",{type:"button",onClick:()=>void(S==null?void 0:S()),disabled:!S||X<2||te||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Push all"}),l.jsx("button",{type:"button",onClick:()=>void(C==null?void 0:C(I.map(G=>({branchName:G.branchName,targetSha:G.targetSha})))),disabled:!C||I.length===0||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",title:I.length>0?L:"Select commits to push",children:I.length>0?L:"Push selected"}),l.jsx("button",{type:"button",onClick:()=>Me(!0),disabled:!k||Y===0||h,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20 disabled:cursor-not-allowed disabled:opacity-50",children:h?"Deleting...":"Delete selection"}),l.jsx("button",{type:"button",onClick:()=>D(!0),disabled:!j&&!U||p,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:p?"Creating...":"Create branch"})]}),t.length>1&&Z.options.length>0&&Z.targetBranch&&M?l.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[l.jsx("span",{className:"px-1 text-xs font-medium text-muted-foreground",children:"merge to"}),Z.options.map(G=>{const de=G.targetBranch===Z.targetBranch;return l.jsx("button",{type:"button",onClick:()=>ie(G.targetSha),className:Ps("rounded-full px-2.5 py-1 text-xs font-medium transition-colors",de?"bg-primary/10 text-primary":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:G.targetBranch},`merge-${G.targetBranch}`)}),l.jsx("button",{type:"button",onClick:()=>void M(Z.sources,Z.targetBranch),disabled:Z.sources.length===0||oe,className:"rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",children:oe?"Merging...":"Confirm"})]}):null,be.length>0&&(z||ae)?l.jsxs("div",{className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>le(G=>!G),className:"rounded-full border border-border bg-card/95 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-accent",children:[be.length," ",be.length===1?"Worktree":"Worktrees"]}),Q?l.jsx("div",{className:"absolute bottom-full left-0 mb-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border bg-card p-2",children:be.map(G=>{var de;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:G.path,children:Am(G,Te)?uw(G.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(de=G.branchName)!=null?de:"detached"," • ",G.headSha.slice(0,7)]})]}),Am(G,Te)?l.jsxs("div",{className:"flex items-center gap-1",children:[z?l.jsx("button",{type:"button",onClick:()=>{le(!1),z(G.path)},disabled:q||G.pathExists===!1,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,ae?l.jsx("button",{type:"button",onClick:()=>void ae(G.path,G.isPrunable),disabled:q,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:q?"...":"Remove"}):null]}):null]},G.path)})}):null]}):null]})}function mw({isOpen:t,onToggle:n,onClose:i,visibleBounds:a,renderedNodeCount:c,totalNodeCount:u,renderedMergeConnectorCount:d,totalMergeConnectorCount:h,renderedConnectorCount:p,totalConnectorCount:g,mapGridCullViewportInsetScreenPx:_,debugRows:x,branchDebugRows:b,connectorDecisions:S}){return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"pointer-events-none absolute bottom-4 right-4 z-[10000] flex items-end gap-2",children:l.jsx("button",{type:"button",onClick:n,className:Ps("pointer-events-auto inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium transition-colors",t?"border-primary/30 bg-primary/10 text-primary":"border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"),children:"Debug"})}),t?l.jsxs("div",{className:"absolute bottom-14 right-4 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:i,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${_}px screen/side): ${a?`${(a.right-a.left).toFixed(0)} x ${(a.bottom-a.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${c} / ${u}`,`Rendered merge connectors: ${d} / ${h}`,`Rendered connectors: ${p} / ${g}`,"",...x,...b,"",...S.map(C=>`${C.rendered?"rendered":"skipped"} [${C.kind}] ${C.parent.slice(0,7)} -> ${C.child.slice(0,7)} (${C.reason})`)].join(`
`)})})]}):null]})}function pw({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:g,deleteInProgress:_,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:S,newBranchCreateMode:C,onNewBranchNameChange:k,onNewBranchCreateModeChange:j,onNewBranchDialogClose:M,onNewBranchConfirm:I,selectedCommitCanCreateBranch:L,createBranchFromNodeInProgress:N}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:P=>i(P.target.value),onKeyDown:P=>{(P.metaKey||P.ctrlKey)&&P.key==="Enter"&&(P.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:u?"Committing...":"Commit"})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(P=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:P},P))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:g,disabled:x===0||_,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:_?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>j("from-selected-node"),className:Ps("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",C==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>j("new-root"),className:Ps("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",C==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),C==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:S,onChange:P=>k(P.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:M,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:I,disabled:!S.trim()||N||C==="from-selected-node"&&!L,className:Ps("rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:N?"Creating...":"Create"})]})]})}):null]})}function _w({mapPadHostRef:t,transformLayerRef:n}){const i=y.useRef({x:0,y:0}),a=y.useRef(nc),c=y.useRef({panX:0,panY:0,zoom:nc}),u=y.useRef(null),d=y.useRef(nc),h=y.useRef(null),[p,g]=y.useState(!1),[_,x]=y.useState(nc),[b,S]=y.useState(0),C=y.useRef(null),k=y.useRef(0),j=y.useCallback(()=>{const Z=t.current;if(!Z)return null;const oe=Z.getBoundingClientRect(),ie=getComputedStyle(Z),be=Number.parseFloat(ie.borderLeftWidth)||0,Te=Number.parseFloat(ie.borderTopWidth)||0,Q=Number.parseFloat(ie.paddingLeft)||Cd,le=Number.parseFloat(ie.paddingTop)||Cd;return{x:oe.left+be+Q,y:oe.top+Te+le}},[t]),M=y.useCallback(()=>{C.current!=null&&(window.clearTimeout(C.current),C.current=null),y.startTransition(()=>{S(Z=>Z+1)}),k.current=performance.now()},[]),I=y.useCallback((Z,oe,ie)=>{const be=c.current;c.current={panX:Z,panY:oe,zoom:ie};const Te=n.current;if(Te&&(Te.style.transform=`translate3d(${Z}px, ${oe}px, 0) scale(${ie/ya})`),Math.abs(d.current-ie)>Xh&&(d.current=ie,x(ie)),Math.abs(ie-be.zoom)>Xh){M();return}const z=performance.now()-k.current;if(z>=by){M();return}C.current!=null&&window.clearTimeout(C.current),C.current=window.setTimeout(()=>{C.current=null,M()},by-z)},[M,n]),L=y.useRef(null),N=y.useCallback(()=>{u.current!=null||!L.current||(u.current=window.requestAnimationFrame(L.current))},[]),P=y.useCallback(()=>{g(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,g(!1)},90)},[]),X=y.useCallback((Z,oe,ie)=>{i.current={x:Z,y:oe},a.current=ie,P(),N()},[P,N]);L.current=()=>{u.current=null;const Z=c.current,oe=i.current.x,ie=i.current.y,be=a.current,Te=Math.abs(oe-Z.panX)<=wy?oe:Z.panX+(oe-Z.panX)*vy,Q=Math.abs(ie-Z.panY)<=wy?ie:Z.panY+(ie-Z.panY)*vy,le=Math.abs(be-Z.zoom)<=Xh?be:Z.zoom+(be-Z.zoom)*ew;I(Te,Q,le),Te!==oe||Q!==ie||le!==be?L.current&&(u.current=window.requestAnimationFrame(L.current)):M()};const Y=y.useCallback((Z,oe,ie)=>{const be=sw(ie),Te=c.current,Q=j();if(!Q){X(i.current.x,i.current.y,be);return}const le=Z-Q.x,z=oe-Q.y,ae=Te.zoom/ya,q=be/ya,me=(le-Te.panX)/ae,Me=(z-Te.panY)/ae;X(le-me*q,z-Me*q,be)},[j,X]),U=y.useCallback(Z=>{if(Z.preventDefault(),Z.ctrlKey||Z.metaKey){const oe=Math.exp(-Z.deltaY*Zv);Y(Z.clientX,Z.clientY,a.current*oe);return}X(i.current.x-Z.deltaX,i.current.y-Z.deltaY,a.current)},[X,Y]);return y.useLayoutEffect(()=>(I(0,0,nc),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),C.current!=null&&(window.clearTimeout(C.current),C.current=null)}),[I]),y.useLayoutEffect(()=>{const Z=n.current;if(!Z)return;const oe=c.current;Z.style.transform=`translate3d(${oe.panX}px, ${oe.panY}px, 0) scale(${oe.zoom/ya})`}),{isCameraMoving:p,renderedZoom:_,cameraRenderTick:b,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:j,flushCameraReactTick:M,syncCamera:X,handleWheel:U}}function gw(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function yw({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=y.useRef(null),h=y.useRef(!1),p=y.useRef([]),[g,_]=y.useState(!1),[x,b]=y.useState(null),[S,C]=y.useState([]),[k,j]=y.useState(null),M=y.useCallback(L=>{const N=t.current,P=i();if(!N||!P)return[];const X=N.getBoundingClientRect(),Y=n.current.zoom/ya;if(Y<=0)return[];const U=[],Z=L.left,oe=L.left+L.width,ie=L.top,be=L.top+L.height;for(const Te of a){if(!c(Te))continue;const Q=P.x+n.current.panX+Te.x*Y-X.left,le=P.y+n.current.panY+Te.y*Y-X.top,z=Q+ns*Y,ae=le+(Tc+$s)*Y;!(z<Z||Q>oe||ae<ie||le>be)&&U.push(Te.commit.id)}return U},[i,a,n,t,c]),I=y.useCallback(L=>{if(L.button!==0)return;const N=L.target;if(N!=null&&N.closest("[data-commit-card]")||N!=null&&N.closest("button, a, input, textarea, select"))return;const P=t.current;if(!P)return;L.preventDefault();const X=P.getBoundingClientRect(),Y=L.clientX-X.left,U=L.clientY-X.top;d.current={startX:Y,startY:U,currentX:Y,currentY:U,additive:L.metaKey||L.ctrlKey},h.current=!1,p.current=L.metaKey||L.ctrlKey?S:[],_(!0),b({left:Y,top:U,width:0,height:0})},[t,S]);return y.useEffect(()=>{const L=P=>{var ie;const X=d.current;if(!X)return;const Y=t.current;if(!Y)return;const U=Y.getBoundingClientRect();X.currentX=P.clientX-U.left,X.currentY=P.clientY-U.top,!h.current&&(Math.abs(X.currentX-X.startX)>2||Math.abs(X.currentY-X.startY)>2)&&(h.current=!0);const Z=gw(X);b(Z);const oe=M(Z);C(X.additive?Array.from(new Set([...p.current,...oe])):Array.from(new Set(oe))),X.additive||j((ie=oe[oe.length-1])!=null?ie:null)},N=()=>{if(d.current){const P=h.current;d.current=null,h.current=!1,_(!1),b(null),P||(C([]),j(null));return}u()};return window.addEventListener("mousemove",L),window.addEventListener("mouseup",N),()=>{window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",N)}},[M,u,t]),{isMarqueeSelecting:g,marqueeRect:x,selectedCommitShas:S,setSelectedCommitShas:C,mergeTargetCommitSha:k,setMergeTargetCommitSha:j,startMarqueeDrag:I}}function jy({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:g,staleBranches:_=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:S,mapTopInsetPx:C=0,onMergeRefsIntoBranch:k,mergeInProgress:j=!1,onPushAllBranches:M,onPushCurrentBranch:I,onPushCommitTargets:L,pushInProgress:N=!1,onDeleteSelection:P,deleteInProgress:X=!1,worktrees:Y=[],currentRepoPath:U,onRemoveWorktree:Z,removeWorktreeInProgress:oe=!1,onSwitchToWorktree:ie,onStashLocalChanges:be,stashInProgress:Te=!1,stashDisabled:Q=!1,onCommitLocalChanges:le,commitInProgress:z=!1,commitDisabled:ae=!1,onStageAllChanges:q,stageInProgress:me=!1,onCreateBranchFromNode:Me,onCreateRootBranch:D,createBranchFromNodeInProgress:te=!1,orientation:G="horizontal",branchCommitPreviews:de={},branchParentByName:ke={},branchUniqueAheadCounts:Ne={},gridSearchQuery:ve="",gridSearchJumpToken:st=0,gridFocusSha:Ge=null,checkedOutRef:$e=null,onGridSearchResultCountChange:rt,onGridSearchFocusChange:tt,onInteractionChange:$t,manuallyOpenedClumps:lt,manuallyClosedClumps:Rt,setManuallyOpenedClumps:Oe,setManuallyClosedClumps:ct,layoutModel:ce}){var ii,Xo,Js,zo,ai,Mn,Kn,eo,Vi,ea,$o,Cr;const He=y.useRef(null),Ke=y.useRef(null),ze=y.useRef(null),[Tt,ut]=y.useState(!1),[at,ot]=y.useState(!1),[it,At]=y.useState(""),[Qe,H]=y.useState(!1),[J,ne]=y.useState(!1),[_e,Xe]=y.useState(""),[Ue,De]=y.useState("from-selected-node"),[St,Ye]=y.useState(()=>new Set),[bt,ht]=y.useState(()=>new Set),Ie=lt!=null?lt:St,nt=Rt!=null?Rt:bt,Vt=Oe!=null?Oe:Ye,un=ct!=null?ct:ht,[qe,Bt]=y.useState(!1),[Ot,zt]=y.useState(null),[rn,mt]=y.useState(null),{isCameraMoving:Ft,renderedZoom:Rn,cameraRenderTick:os,renderedCameraRef:gn,interactionIdleTimeoutRef:oo,getTransformLayerOriginScreen:is,flushCameraReactTick:es,syncCamera:Gt,handleWheel:kn}=_w({mapPadHostRef:Ke,transformLayerRef:ze}),Jt=y.useMemo(()=>dp(t,d,de,ke),[t,d,de,ke]),yn=y.useMemo(()=>Sd({lanes:Jt,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:de,branchParentByName:ke,branchUniqueAheadCounts:Ne,manuallyOpenedClumps:Ie,manuallyClosedClumps:nt,isDebugOpen:qe,gridSearchQuery:ve,gridFocusSha:Ge,checkedOutRef:$e!=null?$e:null,orientation:G}),[Jt,t,n,i,a,d,de,ke,Ne,Ie,nt,qe,ve,Ge,(ii=$e==null?void 0:$e.headSha)!=null?ii:null,(Xo=$e==null?void 0:$e.branchName)!=null?Xo:null,G]),Ze=ce!=null?ce:yn,jn=y.useMemo(()=>Sd({lanes:Jt,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:de,branchParentByName:ke,branchUniqueAheadCounts:Ne,manuallyOpenedClumps:Ie,manuallyClosedClumps:nt,isDebugOpen:qe,gridSearchQuery:ve,gridFocusSha:Ge,checkedOutRef:$e!=null?$e:null,orientation:G}),[Jt,t,n,i,a,d,de,ke,Ne,Ie,nt,qe,ve,Ge,(Js=$e==null?void 0:$e.headSha)!=null?Js:null,(zo=$e==null?void 0:$e.branchName)!=null?zo:null,G]),{allCommits:So,clusterKeyByCommitId:io,leadByClusterKey:Ln,clusterCounts:Ns,matchingNodes:ao,matchingNodeIds:ro,normalizedSearchQuery:ys,focusedNode:ps,defaultCollapsedClumps:xs,renderNodes:on,visibleNodesBySha:ni,contentWidth:Do,contentHeight:Qs,connectors:Wn,mergeConnectors:lo,connectorDecisions:No,nodeWarnings:Ro,commitIdsWithRenderedAncestry:Yo,connectorParentShas:mo,branchStartShas:bs,branchOffNodeShas:Rs,crossBranchOutgoingShas:wn,branchBaseCommitByName:pi,pointFormatter:as}=Ze,si=!!ys,Hs=Rn/ya,Bo=y.useMemo(()=>({transform:`scale(${1/Hs})`,transformOrigin:"top left",width:`${100*Hs}%`,height:`${100*Hs}%`}),[Hs]),Co=-(20/Hs),vs=y.useMemo(()=>{const Be=new Map;for(const Je of on)Be.set(Je.commit.visualId,Je);return Be},[on]),Us=y.useMemo(()=>rw(on,Co),[on,Co]),xn=Be=>{var Lt;const Je=Be.commit.id,yt=Be.commit.visualId;if(si&&ro.has(Je)||(ps==null?void 0:ps.commit.id)===Je||Ot===null)return!0;if(!Ot.has(yt))return!1;const ft=io.get(yt);return ft&&((Lt=Ns.get(ft))!=null?Lt:1)>1&&(Ie.has(ft)||!xs.has(ft)&&!nt.has(ft)),!0},po=1.5/Hs,rs=tw/Hs,Fn=y.useMemo(()=>({transform:`scale(${1/Hs})`,transformOrigin:"center"}),[Hs]),_i="border-slate-400/70",ko="border-blue-500",Wo=y.useMemo(()=>new Map(t.map(Be=>[Be.name,Be])),[t]);y.useMemo(()=>new Set(t.filter(Be=>Be.commitsAhead===0&&!Be.name.startsWith("*")).map(Be=>Be.name)),[t]);const Xt=y.useMemo(()=>{var Je,yt,ft;const Be=new Map;for(const Lt of on){const gt=(Je=Be.get(Lt.commit.id))!=null?Je:new Set;gt.add(Lt.commit.branchName),Be.set(Lt.commit.id,gt)}for(const Lt of i){const gt=(yt=Be.get(Lt.fullSha))!=null?yt:new Set;gt.add((ft=Lt.branch)!=null?ft:d),Be.set(Lt.fullSha,gt)}return Be},[on,i,d]),Ai=y.useMemo(()=>new Map(Object.entries(c).map(([Be,Je])=>[Be,new Set(Je)])),[c]),Bs=y.useCallback(()=>{oo.current,es()},[es,oo]),{isMarqueeSelecting:Fo,marqueeRect:Lo,selectedCommitShas:Oo,setSelectedCommitShas:Ls,mergeTargetCommitSha:jo,setMergeTargetCommitSha:Cs,startMarqueeDrag:Sn}=yw({scrollContainerRef:He,renderedCameraRef:gn,getTransformLayerOriginScreen:is,renderNodes:on,shouldRenderNode:xn,onPointerReleaseNoMarquee:Bs}),co=y.useMemo(()=>new Set(on.map(Be=>Be.commit.id)),[on]),Xn=y.useMemo(()=>Oo.filter(Be=>co.has(Be)),[Oo,co]),_s=y.useCallback((Be,Je)=>{var Lt;if(!Je)return!1;if(((Lt=de[Be])!=null?Lt:[]).some(gt=>mi(gt.fullSha,Je)||mi(gt.sha,Je)))return!0;const ft=Wo.get(Be);return!!(ft!=null&&ft.headSha&&mi(ft.headSha,Je))},[de,Wo]),qn=(ai=$e==null?void 0:$e.branchName)!=null?ai:null,en=(Mn=$e==null?void 0:$e.headSha)!=null?Mn:null,Vs=qn==null,Ys=y.useMemo(()=>{if(!Ge)return null;const Be=on.filter(Je=>Je.commit.id===Ge);return Be.length===0?null:Be.length===1||!ps?Be[0]:Be.reduce((Je,yt)=>{const ft=(Je.x-ps.x)**2+(Je.y-ps.y)**2;return(yt.x-ps.x)**2+(yt.y-ps.y)**2<ft?yt:Je})},[Ge,on,ps]),ws=y.useCallback((Be,Je,yt)=>{for(const ft of Y){if(!qh(ft,U))continue;if(ft.branchName){if(ft.branchName===Be&&mi(ft.headSha,Je))return ft;continue}if(!mi(ft.headSha,Je)&&!mi(ft.headSha,yt))continue;if(ft.parentSha&&_s(Be,ft.parentSha)||_s(Be,ft.headSha))return ft;const Lt=Wo.get(Be);if(Lt&&mi(Lt.headSha,ft.headSha)||Be===d&&i.some(gt=>mi(gt.fullSha,ft.headSha)))return ft}return null},[Y,U,_s,Wo,d,i]),Gn=y.useCallback(Be=>{for(const Je of Y)if(qh(Je,U)&&Je.branchName===Be)return Je;return null},[Y,U]),Mo=y.useCallback((Be,Je)=>{for(const yt of Y)if(qh(yt,U)&&(mi(yt.headSha,Be)||mi(yt.headSha,Je)))return yt;return null},[Y,U]),ks=y.useCallback(Be=>{var Je;return Array.from((Je=Xt.get(Be))!=null?Je:[])},[Xt]),_o=y.useMemo(()=>{var Lt,gt,fn,ln;const Be=new Map;for(const ls of Xn){const Ss=ks(ls);if(Ss.length===0)continue;const go=(Lt=Ss.find(fo=>fo!==d))!=null?Lt:Ss[0],ta=Xn.filter(fo=>fo!==ls).filter(fo=>!new Set(ks(fo)).has(go));Be.set(go,{targetSha:ls,targetBranch:go,sourceRefs:ta})}const Je=Array.from(Be.values()),yt=jo?Je.find(ls=>{var Ss;return ls.targetSha===jo||ls.targetBranch===((Ss=ks(jo)[0])!=null?Ss:"")}):null,ft=(gt=yt!=null?yt:Je[Je.length-1])!=null?gt:null;return{options:Je,selected:ft,targetBranch:(fn=ft==null?void 0:ft.targetBranch)!=null?fn:null,sources:(ln=ft==null?void 0:ft.sourceRefs)!=null?ln:[]}},[Xn,ks,d,jo]),js=y.useMemo(()=>{const Be=[...qn===d?[{name:d,headSha:en!=null?en:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(Je=>!Je.name.startsWith("*")&&Je.unpushedCommits>0&&Je.remoteSyncStatus!=="on-github").map(Je=>[Je.name,Je]);return new Map(Be)},[t,qn,en,d,a.length]),Ms=y.useMemo(()=>{const Be=ft=>{var gt;const Lt=ks(ft).filter(fn=>js.has(fn));return Lt.length===0?null:Lt.length===1?Lt[0]:qn&&Lt.includes(qn)?qn:(gt=Lt.find(fn=>fn!==d))!=null?gt:Lt[0]},Je=ft=>{var Lt;return ft===d?a.map(gt=>{var fn,ln;return{fullSha:gt.fullSha,sha:gt.sha,parentSha:(fn=gt.parentSha)!=null?fn:null,message:gt.message,author:gt.author,date:gt.date,kind:(ln=gt.kind)!=null?ln:"commit"}}):(Lt=de[ft])!=null?Lt:[]},yt=new Map;for(const ft of Xn){const Lt=Be(ft);if(!Lt)continue;const gt=js.get(Lt);if(!gt)continue;const fn=Je(Lt).slice(0,gt.unpushedCommits),ln=fn.findIndex(Ss=>Ss.fullSha===ft);if(ln===-1)continue;const ls=yt.get(Lt);(!ls||ln<ls.targetIndex)&&yt.set(Lt,{branchName:Lt,targetSha:ft,targetIndex:ln,commitCount:fn.length-ln})}return Array.from(yt.values())},[Xn,ks,js,qn,d,a,de]),uo=y.useMemo(()=>Array.from(new Set(Xn.map(Be=>/^STASH:(\d+)$/.exec(Be)).filter(Be=>!!Be).map(Be=>parseInt(Be[1],10)))).sort((Be,Je)=>Be-Je),[Xn]),T=Xn.includes("WORKING_TREE"),w=(T?1:0)+uo.length,A=[...T?["Uncommitted changes"]:[],...uo.map(Be=>`Stash ${Be+1}`)],B=js.size,V=!Vs&&!!qn&&js.has(qn),ue=qn?`Push ${qn}`:"Push current branch",Ee=Ms.length===1?Ms[0].commitCount>1?`Push ${Ms[0].commitCount} commits on ${Ms[0].branchName}`:`Push ${Ms[0].targetSha.slice(0,7)} on ${Ms[0].branchName}`:`Push ${Ms.length} selected ranges`;y.useEffect(()=>{$t==null||$t(Ft||Fo)},[Ft,Fo,$t]),y.useEffect(()=>{rt==null||rt(ys?ao.length:null)},[ao.length,ys,rt]);const Ce=y.useMemo(()=>{var ls,Ss,go,ta,fo,ba;if(!ys)return null;const Be=ys,Je=t.map(qo=>qo.name),yt=Je.find(qo=>qo.toLowerCase()===Be),ft=yt!=null?yt:Je.find(qo=>qo.toLowerCase().startsWith(Be)),gt=ft!=null?ft:Je.find(qo=>qo.toLowerCase().includes(Be));if(!gt)return null;const fn=(ls=t.find(qo=>qo.name===gt))!=null?ls:null;if(fn!=null&&fn.headSha)return fn.headSha;const ln=(Ss=de[gt])!=null?Ss:[];return ln.length>0?(ta=(go=ln[0])==null?void 0:go.fullSha)!=null?ta:null:gt===d&&(ba=(fo=i[0])==null?void 0:fo.fullSha)!=null?ba:null},[ys,t,de,d,i]);y.useEffect(()=>{var Je,yt;if(!ys){tt==null||tt(null);return}if(st<=0)return;if(Ce){tt==null||tt(Ce);return}const Be=(yt=(Je=ao[0])==null?void 0:Je.commit.id)!=null?yt:null;tt==null||tt(Be)},[ao,ys,tt,Ce,st]),y.useLayoutEffect(()=>{if(!Ge)return;const Be=He.current,Je=Ys;if(!Be||!Je)return;const yt=is();if(!yt)return;const ft=Be.getBoundingClientRect(),Lt=gn.current.zoom,gt=Lt/ya,fn=Je.x+ns/2,ln=Je.y+Tc+$s/2,ls=ft.left+ft.width/2,Ss=ft.top+ft.height/2;Gt(ls-yt.x-fn*gt,Ss-yt.y-ln*gt,Lt)},[Ge,st,Ys,is,Gt,gn]);const Ve=(Vi=(eo=rn==null?void 0:rn.width)!=null?eo:(Kn=He.current)==null?void 0:Kn.clientWidth)!=null?Vi:0,pt=(Cr=($o=rn==null?void 0:rn.height)!=null?$o:(ea=He.current)==null?void 0:ea.clientHeight)!=null?Cr:0,Ht=Ve>0&&pt>0?Sy(Ve,pt,gn.current,{innerPaddingPx:Cd}):null,Kt=Ht!=null?Cy(Ht,gn.current.zoom):null,It=Be=>{if(!Kt)return!0;const{fromX:Je,fromY:yt,toX:ft,toY:Lt}=Be;return aw(Je,yt,ft,Lt,Kt,Be.fromFace,Be.toFace)};y.useLayoutEffect(()=>{var fn;const Be=He.current;if(!Be||Be.clientWidth<=0||Be.clientHeight<=0)return;const Je=Be.clientWidth,yt=Be.clientHeight;mt(ln=>(ln==null?void 0:ln.width)===Je&&(ln==null?void 0:ln.height)===yt?ln:{width:Je,height:yt});const ft=Sy(Je,yt,gn.current,{innerPaddingPx:Cd});if(!ft){zt(ln=>ln===null?ln:null);return}const Lt=Cy(ft,gn.current.zoom),gt=lw(Us,Lt,vs,Co);for(const ln of on){const ls=io.get(ln.commit.visualId);if(!ls||((fn=Ns.get(ls))!=null?fn:1)<=1)continue;(Ie.has(ls)||!xs.has(ls)&&!nt.has(ls))&&gt.add(ln.commit.visualId)}zt(ln=>ow(ln,gt)?ln:gt)},[Rn,st,Ge,Ft,os,Ie,nt,xs,io,Ns,on,rn,Us,vs,Co]),y.useLayoutEffect(()=>{const Be=He.current;if(!Be)return;const Je=()=>{const ft=Be.clientWidth,Lt=Be.clientHeight;ft<=0||Lt<=0||mt(gt=>(gt==null?void 0:gt.width)===ft&&(gt==null?void 0:gt.height)===Lt?gt:{width:ft,height:Lt})};Je();const yt=new ResizeObserver(Je);return yt.observe(Be),()=>yt.disconnect()},[So.length]);const kt=on.filter(Be=>xn(Be)).length,Dt=lo.filter(Be=>It(Be)).length,tn=Wn.filter(Be=>It(Be)).length,An=y.useCallback((Be,Je)=>{Be.stopPropagation();const yt=Je.commit.id;if(Be.shiftKey?(Ls(fn=>fn.includes(yt)?fn.filter(ln=>ln!==yt):[...fn,yt]),Cs(yt)):(Ls(fn=>fn.includes(yt)?[]:[yt]),Cs(fn=>fn===yt?null:yt)),!(Be.metaKey||Be.ctrlKey||Be.detail>=2)||yt==="WORKING_TREE")return;const Lt=yt.length>=40?yt.slice(0,7):yt;let gt=null;if(Je.commit.branchName?(gt=ws(Je.commit.branchName,yt,Lt),gt||(gt=Gn(Je.commit.branchName))):gt=Mo(yt,Lt),gt&&ie){ie(gt.path);return}h==null||h({commitSha:yt})},[Mo,ws,Gn,h,ie]),Zs=y.useCallback(async()=>{if(!le)return;await le(it)&&(ot(!1),At(""))},[le,it]),ts=y.useCallback(async()=>{P&&(await P({branchNames:[],discardUncommittedChanges:T,stashIndices:uo}),H(!1),Ls([]),Cs(null))},[P,T,uo]),_t=y.useCallback(async()=>{const Be=_e.trim();if(Be){if(Ue==="new-root"){if(!D)return;await D(Be)}else{if(!Me||Xn.length!==1)return;const Je=Xn[0];if(!(Je==="WORKING_TREE"||Je.startsWith("STASH:")))return;await Me(Je,Be)}ne(!1),Xe(""),De("from-selected-node"),Ls([]),Cs(null)}},[Ue,_e,Me,D,Xn]),Ts=Xn.length===1&&(Xn[0]==="WORKING_TREE"||Xn[0].startsWith("STASH:")),oi=!!D;return y.useEffect(()=>{if(J){if(!Ts&&oi){De("new-root");return}Ts&&De("from-selected-node")}},[oi,J,Ts]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border border-border bg-card",children:[l.jsx(mw,{isOpen:qe,onToggle:()=>Bt(Be=>!Be),onClose:()=>Bt(!1),visibleBounds:Kt,renderedNodeCount:kt,totalNodeCount:on.length,renderedMergeConnectorCount:Dt,totalMergeConnectorCount:lo.length,renderedConnectorCount:tn,totalConnectorCount:Wn.length,mapGridCullViewportInsetScreenPx:Jv,debugRows:jn.debugRows,branchDebugRows:jn.branchDebugRows,connectorDecisions:No}),So.length===0?l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center py-20",children:l.jsx("div",{className:"rounded-xl border border-border/50 bg-muted/30 px-4 py-3",children:l.jsx("p",{className:"text-sm text-muted-foreground",children:"No commits to render"})})}):l.jsx(fw,{scrollContainerRef:He,mapPadHostRef:Ke,transformLayerRef:ze,isMarqueeSelecting:Fo,contentWidth:Do,contentHeight:Qs,isCameraMoving:Ft,onWheel:kn,onMouseDown:Sn,labelTopPx:Co,inverseZoomStyle:Bo,displayZoom:Hs,iconScaleStyle:Fn,selectedVisibleCommitShas:Xn,normalizedSearchQuery:ys,matchingNodeIds:ro,focusedNode:Ys,renderNodes:on,shouldRenderNode:xn,manuallyOpenedClumps:Ie,manuallyClosedClumps:nt,defaultCollapsedClumps:xs,leadByClusterKey:Ln,clusterKeyByCommitId:io,clusterCounts:Ns,commitIdsWithRenderedAncestry:Yo,nodeWarnings:Ro,connectorParentShas:mo,branchStartShas:bs,branchOffNodeShas:Rs,crossBranchOutgoingShas:wn,branchBaseCommitByName:pi,branchStartAccentClass:ko,connectorParentAccentClass:_i,commitCornerRadiusPx:rs,lineStrokeWidth:po,pointFormatter:as,connectors:Wn,mergeConnectors:lo,cullConnectorPath:It,flushCameraReactTick:es,setManuallyOpenedClumps:Vt,setManuallyClosedClumps:un,onCommitCardClick:An,unpushedCommitShasSetByBranch:Ai,checkedOutHeadSha:en}),Lo&&Fo?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:Lo.left,top:Lo.top,width:Lo.width,height:Lo.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(hw,{selectedVisibleCommitShas:Xn,commitInProgress:z,commitDisabled:ae,stageInProgress:me,stashInProgress:Te,stashDisabled:Q,pushInProgress:N,deleteInProgress:X,createBranchFromNodeInProgress:te,onCommitLocalChanges:le,onStageAllChanges:q?()=>void q():void 0,onStashLocalChanges:be,onPushCurrentBranch:I,onPushAllBranches:M,onPushCommitTargets:L,onDeleteSelection:P,onCreateBranchFromNode:Me,onMergeRefsIntoBranch:k,selectedPushTargets:Ms,selectedPushLabel:Ee,canPushCurrentBranch:V,pushCurrentBranchLabel:ue,pushableRemoteBranchCount:B,deletableSelectionCount:w,canCreateRootBranch:oi,selectedCommitTargetOption:_o,mergeInProgress:j,mergeTargetCommitSha:jo,setMergeTargetCommitSha:Cs,worktrees:Y,currentRepoPath:U,worktreeMenuOpen:Tt,setWorktreeMenuOpen:ut,onSwitchToWorktree:ie,onRemoveWorktree:Z,removeWorktreeInProgress:oe,setCommitDialogOpen:ot,setDeleteConfirmOpen:H,setNewBranchDialogOpen:ne}),l.jsx(pw,{commitDialogOpen:at,commitMessageDraft:it,onCommitMessageDraftChange:At,onCommitDialogClose:()=>ot(!1),onCommitConfirm:()=>void Zs(),commitInProgress:z,deleteConfirmOpen:Qe,deleteSelectionItems:A,onDeleteConfirmClose:()=>H(!1),onDeleteConfirm:()=>void ts(),deleteInProgress:X,deletableSelectionCount:w,newBranchDialogOpen:J,newBranchName:_e,newBranchCreateMode:Ue,onNewBranchNameChange:Xe,onNewBranchCreateModeChange:De,onNewBranchDialogClose:()=>ne(!1),onNewBranchConfirm:()=>void _t(),selectedCommitCanCreateBranch:Ts,createBranchFromNodeInProgress:te})]})}function xw({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g={},branchCommitPreviews:_={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:S="",gridSearchJumpToken:C=0,gridFocusSha:k=null,onGridSearchResultCountChange:j,onGridSearchFocusChange:M,view:I="time",isLoading:L=!1,scrollRequest:N,focusedErrorBranch:P,checkedOutRef:X=null,mapTopInsetPx:Y=0,onMergeRefsIntoBranch:U,mergeInProgress:Z=!1,onPushAllBranches:oe,onPushCurrentBranch:ie,onPushCommitTargets:be,pushInProgress:Te=!1,onDeleteSelection:Q,deleteInProgress:le=!1,worktrees:z=[],currentRepoPath:ae,onRemoveWorktree:q,removeWorktreeInProgress:me=!1,onSwitchToWorktree:Me,onStashLocalChanges:D,stashInProgress:te=!1,stashDisabled:G=!1,onCommitLocalChanges:de,commitInProgress:ke=!1,commitDisabled:Ne=!1,onStageAllChanges:ve,stageInProgress:st=!1,onCreateBranchFromNode:Ge,onCreateRootBranch:$e,createBranchFromNodeInProgress:rt=!1,onMoveNodeBackToBranch:tt,orientation:$t="horizontal",onInteractionChange:lt,manuallyOpenedClumps:Rt,manuallyClosedClumps:Oe,setManuallyOpenedClumps:ct,setManuallyClosedClumps:ce,layoutModel:He}){const Ke=new Set(u.map(ot=>ot.branchName)),ze=14*864e5,Tt=Date.now();function ut(ot){return Ke.has(ot.name)||Tt-new Date(ot.lastCommitDate).getTime()<=ze}const at=t.filter(ot=>ot.status==="stale"&&ut(ot)).sort((ot,it)=>new Date(it.lastCommitDate).getTime()-new Date(ot.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:I==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(jy,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:S,gridSearchJumpToken:C,gridFocusSha:k,onGridSearchResultCountChange:j,onGridSearchFocusChange:M,staleBranches:at,isLoading:L,scrollRequest:N,focusedErrorBranch:P,checkedOutRef:X,mapTopInsetPx:Y,onMergeRefsIntoBranch:U,mergeInProgress:Z,onPushAllBranches:oe,onPushCurrentBranch:ie,onPushCommitTargets:be,pushInProgress:Te,onDeleteSelection:Q,deleteInProgress:le,worktrees:z,currentRepoPath:ae,onRemoveWorktree:q,removeWorktreeInProgress:me,onSwitchToWorktree:Me,onStashLocalChanges:D,stashInProgress:te,stashDisabled:G,onCommitLocalChanges:de,commitInProgress:ke,commitDisabled:Ne,onStageAllChanges:ve,stageInProgress:st,onCreateBranchFromNode:Ge,onCreateRootBranch:$e,createBranchFromNodeInProgress:rt,onMoveNodeBackToBranch:tt,orientation:$t,onInteractionChange:lt,manuallyOpenedClumps:Rt,manuallyClosedClumps:Oe,setManuallyOpenedClumps:ct,setManuallyClosedClumps:ce,layoutModel:He})}):I==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(jy,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:S,gridSearchJumpToken:C,gridFocusSha:k,checkedOutRef:X,onGridSearchResultCountChange:j,onGridSearchFocusChange:M,onInteractionChange:lt,manuallyOpenedClumps:Rt,manuallyClosedClumps:Oe,setManuallyOpenedClumps:ct,setManuallyClosedClumps:ce,layoutModel:He,orientation:$t})}):null})}const el=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function bw(t,n,i,a,c,u){var Z,oe,ie,be,Te;const d=t.baseSha,h=`STASH:${t.index}`,p=`Stash ${t.index+1}`,g=(oe=(Z=i[0])==null?void 0:Z.fullSha)!=null?oe:null,_=[{name:u,headSha:g!=null?g:"",isDefault:!0},...n.map(Q=>({name:Q.name,headSha:Q.headSha,isDefault:!1}))],x=d?_.filter(Q=>el(Q.headSha,d)):[],b=(ie=x.find(Q=>Q.isDefault))!=null?ie:x[0],S=!!(b&&d&&el(b.headSha,d)),C=b&&!b.isDefault?n.find(Q=>Q.name===b.name):void 0,k=(()=>{var le;if(!d)return null;const Q=i.find(z=>el(z.fullSha,d)||el(z.sha,d));if(Q!=null&&Q.date)return Q.date;if(C){const z=((le=a[C.name])!=null?le:[]).find(ae=>el(ae.fullSha,d)||el(ae.sha,d));if(z!=null&&z.date)return z.date}return null})(),j=k?new Date(k).getTime():Number.NaN,M=Date.now(),I=Number.isFinite(j)?Math.max(M,j+1+t.index):M+t.index,L=new Date(I).toISOString(),N=t.message.trim(),P={fullSha:h,sha:p,parentSha:d,message:N||p,author:"You",date:L,kind:"stash"},X={fullSha:h,sha:p,parentSha:d,childShas:[],branch:(be=C==null?void 0:C.name)!=null?be:u,message:N||p,author:"You",date:L,kind:"stash"};if(S&&(b!=null&&b.isDefault))return{branches:n,branchCommitPreviews:a,branchUniqueAheadCounts:c,directCommits:[...i,X]};if(S&&C)return{branches:n.map(le=>le.name===C.name?{...le,commitsAhead:le.commitsAhead+1,unpushedCommits:le.unpushedCommits+1,lastCommitDate:L,headSha:h}:le),directCommits:i,branchCommitPreviews:{...a,[C.name]:[P,...a[C.name]||[]]},branchUniqueAheadCounts:{...c,[C.name]:Math.max(0,(Te=Object.prototype.hasOwnProperty.call(c,C.name)?c[C.name]:C.commitsAhead)!=null?Te:0)+1}};const Y=`*Stash:${t.index}`;return{branches:[{name:Y,commitsAhead:1,commitsBehind:0,lastCommitDate:L,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:h,divergedFromSha:d!=null?d:void 0,parentBranch:(b==null?void 0:b.name)||u},...n],directCommits:i,branchCommitPreviews:{...a,[Y]:[P]},branchUniqueAheadCounts:{...c,[Y]:1}}}function Ix(t,n,i,a,c,u){const d=[...t].sort((p,g)=>p.index-g.index);let h={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const p of d)h=bw(p,h.branches,h.directCommits,h.branchCommitPreviews,h.branchUniqueAheadCounts,u);return h}function vw({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:g,manuallyOpenedClumps:_=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:S=null,orientation:C="horizontal"}){var Y,U,Z,oe;const k=Ix(g,t,i,u,h,c);let j=k.branches,M=k.directCommits,I=k.branchCommitPreviews,L=k.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const ie=p.headSha||p.parentSha||null,be=(U=(Y=M[0])==null?void 0:Y.fullSha)!=null?U:null,Te=(ve,st)=>!ve||!st?!1:ve===st||ve.startsWith(st)||st.startsWith(ve),Q=[{name:c,headSha:be!=null?be:"",isDefault:!0},...j.map(ve=>({name:ve.name,headSha:ve.headSha,isDefault:!1}))],le=p.branchName?Q.find(ve=>ve.name===p.branchName):void 0,z=ie?Q.filter(ve=>Te(ve.headSha,ie)):[],ae=(Z=le!=null?le:z.find(ve=>ve.isDefault))!=null?Z:z[0],q=!!(ae&&ie&&Te(ae.headSha,ie)),me=ae&&!ae.isDefault?j.find(ve=>ve.name===ae.name):void 0,Me=(()=>{var st;if(!ie)return null;const ve=M.find(Ge=>Te(Ge.fullSha,ie)||Te(Ge.sha,ie));if(ve!=null&&ve.date)return ve.date;if(me){const Ge=((st=I[me.name])!=null?st:[]).find($e=>Te($e.fullSha,ie)||Te($e.sha,ie));if(Ge!=null&&Ge.date)return Ge.date}return null})(),D=Me?new Date(Me).getTime():Number.NaN,te=Date.now(),G=Number.isFinite(D)?Math.max(te,D+1):te,de=new Date(G).toISOString(),ke={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ie,message:"Local uncommitted changes",author:"You",date:de,kind:"uncommitted"},Ne={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ie,childShas:[],branch:c,message:"Local uncommitted changes",author:"You",date:de,kind:"uncommitted"};if(q&&(ae!=null&&ae.isDefault))M=[...M,Ne];else if(q&&me)j=j.map(ve=>ve.name===me.name?{...ve,commitsAhead:ve.commitsAhead+1,unpushedCommits:ve.unpushedCommits+1,lastCommitDate:de,headSha:"WORKING_TREE"}:ve),I={...I,[me.name]:[ke,...I[me.name]||[]]},L={...L,[me.name]:Math.max(0,(oe=Object.prototype.hasOwnProperty.call(L,me.name)?L[me.name]:me.commitsAhead)!=null?oe:0)+1};else{const ve={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:de,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:ie!=null?ie:void 0,parentBranch:(ae==null?void 0:ae.name)||p.branchName||c};j=[ve,...j],I={...I,[ve.name]:[ke]},L={...L,[ve.name]:1}}}const N={...d};N[c]=null;const P=dp(j,c,I,N),X=Sd({lanes:P,branches:j,mergeNodes:n,directCommits:M,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:I,branchParentByName:N,branchUniqueAheadCounts:L,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:S,checkedOutRef:p,orientation:C});return{enrichedBranches:j,enrichedBranchCommitPreviews:I,enrichedBranchUniqueAheadCounts:L,enrichedDirectCommits:M,sharedGridLayoutModel:X}}function My(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const g=(u=a.get(h))!=null?u:[];g.push(d.name),a.set(h,g)}const c=(d,h)=>{var _,x,b,S;const p=new Date((x=(_=i.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((S=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?S:0).getTime();return p-g};for(const[d,h]of a.entries())h.sort(c);return a}function Ty(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var _,x,b,S;const p=new Date((x=(_=a.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((S=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?S:0).getTime();return p-g},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function Ey(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const g of d){const _=[...h,g];if(g===i.branchName){for(const x of _)c.add(x);return!0}if(u((p=n.get(g))!=null?p:[],_))return!0}return!1};return u(t,[]),c}function Dm({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:_,showCommits:x,getMergeTargetLabels:b,sourceBranchName:S,clusterKeyByCommitId:C,isGridClusterOpen:k,onToggleGridCluster:j,onSelectCommit:M,onSelectBranch:I}){var D,te;if(_.has(t)||!a.get(t))return null;const N=(D=u.get(t))!=null?D:[],P=N.length>0,X=y.useMemo(()=>{var G;return[...(G=c[t])!=null?G:[]]},[c,t]),Y=x&&X.length>0,U=x,Z=P||Y,oe=h.has(t),ie=U?X:[],be=oe&&ie.length>0,Te=g===t,Q=new Set(_);Q.add(t);const le="top-[-0.2rem] h-4.5 w-[10px]",z="rounded-bl-[7px]",ae="left-[0.65rem]",q=new Map,me=[];for(const G of N){const de=d.get(G);if(de){const ke=ie.findIndex(Ne=>mi(Ne.fullSha,de)||mi(Ne.sha,de));if(ke>=0){const Ne=(te=q.get(ke))!=null?te:[];Ne.push(G),q.set(ke,Ne);continue}}me.push(G)}const Me=y.useMemo(()=>{if(!x||ie.length===0)return[];const G=[];let de=[],ke=null;const Ne=()=>{if(de.length===0)return;const ve=de[de.length-1],st=`sidebar-single-${t}-${ve.fullSha}`;G.push({key:ke!=null?ke:st,commits:de,count:de.length,lead:ve}),de=[],ke=null};return ie.forEach(ve=>{var Ge;const st=(Ge=C.get(`${t}:${ve.fullSha}`))!=null?Ge:null;if(de.length===0){de=[ve],ke=st;return}if(st===ke){de.push(ve);return}Ne(),de=[ve],ke=st}),Ne(),G},[t,x,ie,C]);return l.jsxs("li",{className:Ps("relative",n>0?"pl-4":"pl-0",n===0&&!i?oe?"mb-5":"mb-1":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:Ps("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",z,ae,le)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:Ps("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.5rem]",ae)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("button",{type:"button",onClick:()=>{Z&&p(t),I==null||I(t)},className:Ps("group flex min-w-0 flex-1 items-center gap-2 rounded-md px-2 py-1 text-left text-sm transition-colors hover:bg-accent",Te?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[Z?l.jsx("span",{className:Ps("inline-block text-[10px] text-muted-foreground transition-transform",oe?"rotate-90":""),children:"▶"}):null,l.jsx("span",{className:"min-w-0 break-words",children:l.jsx("span",{className:Ps(Te?"font-medium text-foreground":"font-normal"),children:t})})]})}),be?l.jsx("ul",{className:"relative space-y-1 pl-4",children:Me.map(G=>{const de=G.count>1&&!k(G.key);return(de?[G.lead]:G.commits).map(Ne=>{var Ge;const ve=ie.findIndex($e=>$e.fullSha===Ne.fullSha),st=b(Ne.fullSha,S!=null?S:t);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>M==null?void 0:M(Ne.fullSha),className:"min-w-0 flex-1 rounded-md px-2 py-1 text-left text-xs leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:Ne.message,children:[l.jsx("span",{className:"block truncate",children:Ne.message}),st.length>0?l.jsx("span",{className:"mt-0 block space-y-0.5",children:st.map($e=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:$e})]},`${Ne.fullSha}:${$e}`))}):null]}),G.count>1&&Ne.fullSha===G.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${G.lead.fullSha}`,onClick:()=>j(G.key,`${t}:${G.lead.fullSha}`),className:Ps("shrink-0 rounded-md px-2 py-1 text-left text-xs leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",de?"":"min-w-[2ch] text-center"),children:de?`+${Math.max(1,G.count-1)}`:"−"}):null]}),(Ge=q.get(ve))!=null&&Ge.length?l.jsx("ul",{className:"relative mb-1.75 space-y-0",children:q.get(ve).map(($e,rt,tt)=>l.jsx(Dm,{branchName:$e,depth:n+1,isLast:rt===tt.length-1&&me.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:Q,showCommits:x,getMergeTargetLabels:b,sourceBranchName:$e,clusterKeyByCommitId:C,isGridClusterOpen:k,onToggleGridCluster:j,onSelectCommit:M,onSelectBranch:I},$e))}):null]},`${t}:${Ne.fullSha}`)})})}):null,P&&oe&&me.length>0?l.jsx("ul",{className:"relative mb-1.75 space-y-1.75",children:me.map((G,de)=>l.jsx(Dm,{branchName:G,depth:n+1,isLast:de===me.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:Q,showCommits:x,getMergeTargetLabels:b,sourceBranchName:G,clusterKeyByCommitId:C,isGridClusterOpen:k,onToggleGridCluster:j,onSelectCommit:M,onSelectBranch:I},G))}):null]})}function ww({projects:t,activeProjectPath:n,onSelectProject:i,onAddProject:a,projectLoading:c=!1,projectError:u=null,branches:d,defaultBranch:h,checkedOutRef:p,manuallyOpenedClumps:g,manuallyClosedClumps:_,setManuallyOpenedClumps:x,setManuallyClosedClumps:b,gridLayoutModel:S,onSelectCommit:C,onSelectBranch:k,className:j}){var Ge;const M=y.useRef(null),I=y.useRef(null),[L,N]=y.useState(!1),[P,X]=y.useState(()=>new Set),[Y,U]=y.useState(()=>new Set),[Z,oe]=y.useState(()=>new Set),ie=g!=null?g:Y,be=_!=null?_:Z,Te=x!=null?x:U,Q=b!=null?b:oe,[le,z]=y.useState(null),[ae,q]=y.useState(null),me=y.useMemo(()=>d.some(rt=>rt.name===h)?d:[{name:h,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...d],[d,h]),Me=y.useMemo(()=>My(me,h),[me,h]),D=y.useMemo(()=>Ty(me,h,Me),[me,h,Me]),[te,G]=y.useState(()=>Ey(D,Me,p,h));y.useEffect(()=>{G($e=>{const rt=Ey(D,Me,p,h),tt=new Set($e);for(const $t of rt)tt.add($t);return tt})},[D,Me,p,h]);const de=(Ge=S==null?void 0:S.defaultCollapsedClumps)!=null?Ge:new Set,ke=$e=>ie.has($e)||!de.has($e)&&!be.has($e),Ne=($e,rt)=>{const tt=M.current,$t=I.current;if(tt&&$t){const lt=`[data-clump-toggle-id="${rt}"]`,Rt=tt.querySelector(lt);if(Rt){const Oe=Rt.getBoundingClientRect().top-$t.getBoundingClientRect().top;q({id:rt,topWithinScrollBody:Oe})}else q(null)}else q(null);z(rt),Te(lt=>{const Rt=new Set(lt),Oe=ke($e);return Q(ct=>{const ce=new Set(ct);return Oe?(Rt.delete($e),ce.add($e)):(ce.delete($e),Rt.add($e)),ce}),Rt})};y.useLayoutEffect(()=>{if(!le)return;const $e=M.current,rt=I.current;if(!$e||!rt)return;const tt=`[data-clump-toggle-id="${le}"]`,$t=$e.querySelector(tt);if($t){if((ae==null?void 0:ae.id)===le){const Rt=$t.getBoundingClientRect().top-rt.getBoundingClientRect().top-ae.topWithinScrollBody;Number.isFinite(Rt)&&Rt!==0&&(rt.scrollTop+=Rt)}$t.focus({preventScroll:!0}),z(null),q(null)}},[ie,be,le,ae]);const ve=$e=>{G(rt=>{const tt=new Set(rt);return tt.has($e)?tt.delete($e):tt.add($e),tt})};y.useEffect(()=>{X($e=>{const rt=new Set($e);for(const tt of t)rt.add(tt.path);return n&&rt.add(n),rt})},[n,t]);const st=y.useMemo(()=>{var rt,tt,$t,lt,Rt,Oe,ct,ce,He,Ke;const $e=new Map;for(const ze of t){const Tt=ze.path===n,ut=vw({branches:ze.branches,mergeNodes:ze.mergeNodes,directCommits:ze.directCommits,unpushedDirectCommits:ze.unpushedDirectCommits,defaultBranch:ze.defaultBranch,branchCommitPreviews:ze.branchCommitPreviews,branchUniqueAheadCounts:ze.branchUniqueAheadCounts,checkedOutRef:ze.checkedOutRef,stashes:ze.stashes,manuallyOpenedClumps:Tt?ie:new Set,manuallyClosedClumps:Tt?be:new Set}),at=ut.enrichedBranches.some(Ye=>Ye.name===ze.defaultBranch)?ut.enrichedBranches:[{name:ze.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...ut.enrichedBranches],ot=new Map(ut.sharedGridLayoutModel.nodes.map(Ye=>[Ye.commit.visualId,Ye.row])),it={};for(const Ye of ut.sharedGridLayoutModel.allCommits){const bt=(rt=it[Ye.branchName])!=null?rt:[];bt.push({fullSha:Ye.id,sha:Ye.id.slice(0,7),parentSha:(tt=Ye.parentSha)!=null?tt:null,message:Ye.message,author:Ye.author,date:Ye.date,kind:($t=Ye.kind)!=null?$t:"commit"}),it[Ye.branchName]=bt}for(const Ye of Object.keys(it))it[Ye]=it[Ye].sort((bt,ht)=>{var qe,Bt;const Ie=(qe=ot.get(`${Ye}:${bt.fullSha}`))!=null?qe:Number.MAX_SAFE_INTEGER,nt=(Bt=ot.get(`${Ye}:${ht.fullSha}`))!=null?Bt:Number.MAX_SAFE_INTEGER;if(Ie!==nt)return Ie-nt;const Vt=new Date(bt.date).getTime(),un=new Date(ht.date).getTime();return Vt!==un?Vt-un:bt.fullSha.localeCompare(ht.fullSha)});const At=(lt=ut.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?lt:new Map,Qe=(Ye,bt)=>{const ht=At.get(bt);if(!ht)return[];for(const[Ie,nt]of ht.entries())if(mi(Ye,Ie))return Array.from(nt).sort();return[]},H=My(at,ze.defaultBranch),J=Ty(at,ze.defaultBranch,H),ne=new Map(at.map(Ye=>[Ye.name,Ye])),_e=new Map;for(const Ye of at){const bt=(Oe=(Rt=ut.sharedGridLayoutModel.firstBranchCommitByName.get(Ye.name))==null?void 0:Rt.parentSha)!=null?Oe:null,ht=bt!=null?bt:null;_e.set(Ye.name,ht)}const Xe=(ct=ut.sharedGridLayoutModel.defaultCollapsedClumps)!=null?ct:new Set,Ue=Tt?ie:new Set,De=Tt?be:new Set,St=Ye=>Ue.has(Ye)||!Xe.has(Ye)&&!De.has(Ye);$e.set(ze.path,{rootBranchNames:J,branchByName:ne,branchCommitPreviewsFromLayout:it,childNamesByParent:H,branchAnchorShaByName:_e,checkedOutBranchName:(He=(ce=ze.checkedOutRef)==null?void 0:ce.branchName)!=null?He:null,clusterKeyByCommitId:(Ke=ut.sharedGridLayoutModel.clusterKeyByCommitId)!=null?Ke:new Map,getMergeTargetLabels:Qe,isGridClusterOpen:St})}return $e},[n,be,ie,t]);return l.jsx("aside",{ref:M,"aria-label":"Dense branch sidebar",className:Ps("pointer-events-auto h-full",j),children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[l.jsxs("div",{className:"mb-2 flex items-center justify-between gap-3 px-5",children:[l.jsx("h2",{className:"text-sm font-medium text-foreground",children:"Projects"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("button",{type:"button",onClick:a,disabled:c,className:"shrink-0 rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Add repo"}),l.jsx("button",{type:"button",onClick:()=>N($e=>!$e),className:"shrink-0 rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:L?"Hide commits":"Show commits"})]})]}),u&&l.jsx("div",{className:"px-5 pb-3",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:u})}),l.jsx("div",{ref:I,className:"mb-3 min-h-0 flex-1 space-y-2 overflow-y-auto px-5",children:t.map($e=>{var Oe,ct;const rt=$e.path===n,tt=P.has($e.path)||rt,$t=(Oe=$e.treeLoaded)!=null?Oe:$e.branches.length>0,lt=st.get($e.path),Rt=rt?te:new Set(lt?Array.from(lt.branchByName.keys()):[]);return l.jsxs("div",{className:"rounded-xl border border-border/50 bg-card",children:[l.jsxs("button",{type:"button",onClick:()=>{i($e.path)},className:Ps("flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors",rt?"bg-primary/10 text-foreground":"hover:bg-accent"),children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("p",{className:"truncate text-sm font-medium",children:$e.name}),l.jsx("p",{className:"truncate text-xs text-muted-foreground",children:$e.path})]}),l.jsx("span",{className:"shrink-0 text-xs text-muted-foreground",children:(ct=$e.branchName)!=null?ct:"branch"})]}),tt&&l.jsx("div",{className:"border-t border-border/50 px-3 py-3",children:$t&&lt?l.jsx("ul",{className:"space-y-1",children:lt.rootBranchNames.map((ce,He)=>l.jsx(Dm,{branchName:ce,depth:0,isLast:He===lt.rootBranchNames.length-1,branchByName:lt.branchByName,branchCommitPreviews:lt.branchCommitPreviewsFromLayout,childNamesByParent:lt.childNamesByParent,branchAnchorShaByName:lt.branchAnchorShaByName,expandedBranchNames:Rt,onToggleBranch:ve,checkedOutBranchName:lt.checkedOutBranchName,ancestors:new Set,showCommits:L,getMergeTargetLabels:lt.getMergeTargetLabels,sourceBranchName:ce,clusterKeyByCommitId:lt.clusterKeyByCommitId,isGridClusterOpen:lt.isGridClusterOpen,onToggleGridCluster:Ne,onSelectCommit:async Ke=>{rt||await i($e.path),C==null||C(Ke)},onSelectBranch:async Ke=>{rt||await i($e.path),k==null||k(Ke)}},`${$e.path}:${ce}`))}):l.jsx("p",{className:"px-2 py-1 text-xs text-muted-foreground",children:"Loading branch tree..."})})]},$e.path)})})]})})}const Sw="git-visualizer",Ay="git-visualizer:projects",Dy=12,Ny=1400,Cw=180;function tl(t){return t==="/"?t:t.replace(/\/+$/,"")}function Gh(...t){return t.filter(Boolean).join(" ")}function fd(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function kw(t){return fd(t)===Sw}function jw(){var uo,T;const[t,n]=y.useState(null),[i,a]=y.useState(""),[c,u]=y.useState([]),[d,h]=y.useState({}),[p,g]=y.useState(!1),[_,x]=y.useState([]),[b,S]=y.useState([]),[C,k]=y.useState([]),[j,M]=y.useState([]),[I,L]=y.useState({}),[N,P]=y.useState([]),[X,Y]=y.useState("main"),[U,Z]=y.useState(null),[oe,ie]=y.useState([]),[be,Te]=y.useState(!1),[Q,le]=y.useState(""),[z,ae]=y.useState(0),[q,me]=y.useState(()=>new Set),[Me,D]=y.useState(()=>new Set),[te,G]=y.useState(null),[de,ke]=y.useState(null),[Ne,ve]=y.useState(!1),[st,Ge]=y.useState(!1),[$e,rt]=y.useState(null),[tt,$t]=y.useState(!1),[lt,Rt]=y.useState(!1),[Oe,ct]=y.useState("active"),[ce,He]=y.useState(null),[Ke,ze]=y.useState(null),[Tt,ut]=y.useState(!1),[at,ot]=y.useState(null),[it,At]=y.useState(!1),[Qe,H]=y.useState(null),[J,ne]=y.useState(null),[_e,Xe]=y.useState(!1),[Ue,De]=y.useState(!1),[St,Ye]=y.useState(!1),[bt,ht]=y.useState(!1),[Ie,nt]=y.useState({}),[Vt,un]=y.useState({}),[qe,Bt]=y.useState({}),[Ot,zt]=y.useState({}),[rn,mt]=y.useState({}),[Ft,Rn]=y.useState([]),[os,gn]=y.useState(!1),[oo,is]=y.useState(!1),[es,Gt]=y.useState(!1),[kn,Jt]=y.useState(!1),[yn,Ze]=y.useState(!1),[jn,So]=y.useState("horizontal"),io=y.useRef(null),Ln=y.useRef(0),Ns=y.useRef(0),ao=y.useRef(null),ro=kw(t)||!0,ys=y.useRef(!1),ps=y.useRef(!1),xs=y.useRef(new Set),on=y.useRef([]),ni=y.useRef([]),Do=y.useRef(null),Qs=y.useMemo(()=>c.map(w=>{var A,B,V,ue,Ee,Ce,Ve,pt,Ht,Kt,It,kt,Dt,tn,An,Zs,ts,_t,Ts,oi,ii,Xo,Js,zo,ai,Mn,Kn,eo;return{...w,...(A=d[w.path])!=null?A:{},branches:(V=(B=d[w.path])==null?void 0:B.branches)!=null?V:[],mergeNodes:(Ee=(ue=d[w.path])==null?void 0:ue.mergeNodes)!=null?Ee:[],directCommits:(Ve=(Ce=d[w.path])==null?void 0:Ce.directCommits)!=null?Ve:[],unpushedDirectCommits:(Ht=(pt=d[w.path])==null?void 0:pt.unpushedDirectCommits)!=null?Ht:[],unpushedCommitShasByBranch:(It=(Kt=d[w.path])==null?void 0:Kt.unpushedCommitShasByBranch)!=null?It:{},checkedOutRef:(Dt=(kt=d[w.path])==null?void 0:kt.checkedOutRef)!=null?Dt:null,worktrees:(An=(tn=d[w.path])==null?void 0:tn.worktrees)!=null?An:[],stashes:(ts=(Zs=d[w.path])==null?void 0:Zs.stashes)!=null?ts:[],branchCommitPreviews:(Ts=(_t=d[w.path])==null?void 0:_t.branchCommitPreviews)!=null?Ts:{},laneByBranch:(ii=(oi=d[w.path])==null?void 0:oi.laneByBranch)!=null?ii:{},branchUniqueAheadCounts:(Js=(Xo=d[w.path])==null?void 0:Xo.branchUniqueAheadCounts)!=null?Js:{},defaultBranch:(Mn=(ai=(zo=d[w.path])==null?void 0:zo.defaultBranch)!=null?ai:w.branchName)!=null?Mn:"main",treeLoaded:(eo=(Kn=d[w.path])==null?void 0:Kn.loaded)!=null?eo:!1}}),[c,d]);y.useEffect(()=>{try{const w=localStorage.getItem(Ay);if(!w)return;const A=JSON.parse(w);if(!Array.isArray(A))return;const B=A.filter(V=>typeof V=="object"&&V!==null&&typeof V.path=="string"&&typeof V.name=="string"&&typeof V.lastOpenedAt=="number");u(B.slice(0,Dy))}catch{u([])}},[]),y.useEffect(()=>{ps.current||t||c.length!==0&&(ps.current=!0,Us(c[0].path))},[c,t]);const Wn=y.useMemo(()=>b.reduce((w,A)=>(w[A.targetCommitSha]=A.targetBranch,w),{}),[b]);y.useEffect(()=>{t&&h(w=>{var A,B;return{...w,[t]:{path:t,name:i||fd(t),branches:_,mergeNodes:b,directCommits:C,unpushedDirectCommits:j,mergeTargetBranchByCommitSha:b.reduce((V,ue)=>(V[ue.targetCommitSha]=ue.targetBranch,V),{}),unpushedCommitShasByBranch:I,checkedOutRef:U,worktrees:oe,stashes:Ft,branchCommitPreviews:Vt,branchParentByName:qe,laneByBranch:Ot,branchUniqueAheadCounts:rn,defaultBranch:X,loaded:!0,cacheSchemaVersion:(B=(A=w[t])==null?void 0:A.cacheSchemaVersion)!=null?B:1,updatedAtMs:Date.now()}}})},[t,i,_,b,C,j,Wn,I,U,oe,Ft,Vt,qe,Ot,rn,X]);async function lo(w,A=!1){var V;const B=tl(w);if(B&&!xs.current.has(B)&&!(!A&&((V=d[B])!=null&&V.loaded))){xs.current.add(B),g(!0);try{const ue=await xe("get_repo_visual_snapshot",{repoPath:B,forceRefresh:A});h(Ee=>({...Ee,[B]:ue}))}finally{xs.current.delete(B),xs.current.size===0&&g(!1)}}}y.useEffect(()=>{c.length!==0&&c.forEach(w=>{lo(w.path),xe("watch_repo",{repoPath:w.path}).catch(console.error)})},[c]),y.useEffect(()=>{let w=!1,A=null;return hc("git-activity",B=>{if(w)return;const V=tl(B.payload.repoPath);!V||V===t||lo(V,!0)}).then(B=>{w?B():A=B}).catch(console.error),()=>{w=!0,A&&A()}},[t]);function No(w){u(A=>{const B=tl(w.path);if(!B)return A;const V={...w,path:B},Ee=(A.some(Ce=>Ce.path===B)?A.map(Ce=>Ce.path===B?V:Ce):[...A,V]).slice(-Dy);try{localStorage.setItem(Ay,JSON.stringify(Ee))}catch{}return Ee})}async function Ro(w){const A=tl(w);if(A){rt(null);try{const[B,V]=await Promise.all([xe("get_repo_info",{repoPath:A}),xe("get_default_branch",{repoPath:A}).catch(()=>"main")]);No({path:A,name:B.name,lastOpenedAt:Date.now(),branchName:V}),await lo(A,!0)}catch(B){rt(B instanceof Error?B.message:String(B))}}}function Yo(w){if(w.button!==0)return;const A=w.target;if(A!=null&&A.closest(".window-no-drag"))return;const B=Mm();xe("start_window_drag").catch(()=>B.startDragging()).catch(V=>{console.warn("Failed to start window drag:",V)})}async function mo(w,A){const V=[];let ue=0;for(;;){const Ee=await xe("get_merge_nodes",{repoPath:w,branch:A,page:ue,perPage:100});if(V.push(...Ee.nodes),!Ee.hasMore||Ee.nodes.length===0)break;ue+=1}return V}async function bs(w,A,B){const V=Array.from(new Set([B,...A.map(Ce=>Ce.name)].filter(Ce=>!!Ce)));if(V.length===0)return[];const ue=await Promise.all(V.map(Ce=>mo(w,Ce).catch(()=>[]))),Ee=new Map;for(const Ce of ue)for(const Ve of Ce){const pt=`${Ve.targetCommitSha}:${Ve.targetBranch}`;Ee.has(pt)||Ee.set(pt,Ve)}return Array.from(Ee.values())}const Rs=w=>w.map(A=>`${A.name}|${A.headSha}|${A.commitsAhead}|${A.commitsBehind}|${A.unpushedCommits}|${A.remoteSyncStatus}`).join("||"),wn=w=>w.map(A=>A.fullSha).join("|"),pi=w=>{var A,B;return w?`${(A=w.branchName)!=null?A:""}|${w.headSha}|${(B=w.parentSha)!=null?B:""}|${w.hasUncommittedChanges?1:0}`:"__none__"};async function as(w,A){const B=A!=null?A:X,[V,ue,Ee,Ce,Ve,pt]=await Promise.all([xe("get_branches",{repoPath:w}),xe("get_all_repo_commits",{repoPath:w}),xe("get_unpushed_direct_commits",{repoPath:w,branch:B}).catch(()=>[]),xe("get_checked_out_ref",{repoPath:w}).catch(()=>null),xe("list_worktrees",{repoPath:w}).catch(()=>[]),xe("list_stashes",{repoPath:w}).catch(()=>[])]),Ht=await bs(w,V,B),Kt=await Promise.all([B,...V.map(It=>It.name)].map(async It=>{const kt=await xe("get_branch_unpushed_commit_shas",{repoPath:w,branch:It}).catch(()=>[]);return[It,kt]}));x(V),S(Ht),k(ue),M(Ee),L(Object.fromEntries(Kt)),Z(Ce),ie(Ve),Rn(pt)}async function si(w){const[A,B,V]=await Promise.all([xe("get_branches",{repoPath:w}).catch(()=>[]),xe("get_all_repo_commits",{repoPath:w}).catch(()=>[]),xe("get_checked_out_ref",{repoPath:w}).catch(()=>null)]);return Rs(A)!==Rs(on.current)||wn(B)!==wn(ni.current)||pi(V)!==pi(Do.current)}async function Hs(w){ne(null),Ge(!0);try{const[A,B]=await Promise.all([xe("get_repo_info",{repoPath:w}),xe("get_default_branch",{repoPath:w})]);a(A.name),Y(B),n(w),await as(w,B),xn(w),ne({kind:"success",message:`Now targeting worktree at ${w}`})}catch(A){const B=A instanceof Error?A.message:String(A);ne({kind:"error",message:B}),console.error("Failed to switch worktree:",B)}finally{Ge(!1)}}async function Bo(w,A){if(!(!t||be)){Te(!0),ne(null);try{await xe("remove_worktree",{repoPath:t,worktreePath:w,force:A}),await as(t),ne({kind:"success",message:`Removed worktree at ${w}`})}catch(B){const V=B instanceof Error?B.message:String(B);ne({kind:"error",message:V}),console.error("Failed to remove worktree:",V)}finally{Te(!1)}}}function Co(w,A){var B,V;a(A.name||fd(w)),Y(A.defaultBranch||"main"),x(A.branches),S(A.mergeNodes),k(A.directCommits),M(A.unpushedDirectCommits),L(A.unpushedCommitShasByBranch),Z(A.checkedOutRef),ie(A.worktrees),Rn(A.stashes),un(A.branchCommitPreviews),Bt((B=A.branchParentByName)!=null?B:{}),zt((V=A.laneByBranch)!=null?V:{}),mt(A.branchUniqueAheadCounts),n(w)}async function vs(w,A,B){const V=B==null?void 0:B.forceRefresh,ue=B==null?void 0:B.applyToActiveState;try{const[Ee,Ce]=await Promise.all([xe("get_repo_info",{repoPath:w}),xe("get_default_branch",{repoPath:w})]);if(A!==Ln.current)return;const Ve=await xe("get_repo_visual_snapshot",{repoPath:w,forceRefresh:V});if(A!==Ln.current)return;h(pt=>({...pt,[w]:Ve})),ue&&(t===w||Ln.current),xn(w)}catch(Ee){if(A!==Ln.current)return;console.error("Background snapshot refresh failed:",Ee)}}async function Us(w){const A=++Ln.current,B=tl(w);if(!B)return;const V=d[B];if(V!=null&&V.loaded){rt(null),Co(B,V),No({path:B,name:V.name||fd(B),lastOpenedAt:Date.now(),branchName:V.defaultBranch}),Ge(!1),ve(!1),vs(B,A,{forceRefresh:!1,applyToActiveState:!1});return}if(ve(!0),Ge(!0),rt(null),await new Promise(ue=>setTimeout(ue,15)),A===Ln.current)try{const[ue,Ee]=await Promise.all([xe("get_repo_info",{repoPath:B}),xe("get_default_branch",{repoPath:B})]);if(A!==Ln.current)return;a(ue.name),Y(Ee);const Ce=await xe("get_repo_visual_snapshot",{repoPath:B,forceRefresh:!0});if(A!==Ln.current)return;h(Ve=>({...Ve,[B]:Ce})),Co(B,Ce),No({path:B,name:ue.name,lastOpenedAt:Date.now(),branchName:Ee}),Ge(!1),ve(!1),xn(B)}catch(ue){if(A!==Ln.current)return;console.error("Failed to load repo:",ue),rt(ue instanceof Error?ue.message:String(ue)),n(null),ve(!1),Ge(!1)}}async function xn(w){const A=++Ns.current;try{if(A!==Ns.current)return;ut(!1),H(null);const B=await xe("get_github_info",{repoPath:w}),V=await xe("get_github_auth_status");if(A!==Ns.current||(ot(V),!V.ghAvailable||!V.authenticated))return;const ue=await xe("get_open_prs",{owner:B.owner,repo:B.repo});if(A!==Ns.current)return;P(ue),ut(!0)}catch(B){if(A!==Ns.current)return;console.log("GitHub data not available:",B),H(B instanceof Error?B.message:String(B)),ut(!1)}}y.useEffect(()=>{let w=null,A=!1;const B=(()=>{try{return Mm().label}catch{return null}})(),V=async Ee=>{var Ve;const Ce=(Ve=Ee==null?void 0:Ee.path)==null?void 0:Ve.trim();!Ce||A||t!==Ce&&await Us(Ce)};return(async()=>{B==="main"&&(w=await hc("gitviz://open-repo",async Ce=>{await V(Ce.payload)}));const Ee=await xe("take_pending_open_repo");await V(Ee)})(),()=>{A=!0,w&&w()}},[t]),y.useEffect(()=>{on.current=_},[_]),y.useEffect(()=>{ni.current=C},[C]),y.useEffect(()=>{Do.current=U},[U]),y.useEffect(()=>{ys.current=yn},[yn]),y.useEffect(()=>{},[t,X,ro]),y.useEffect(()=>{if(!t||!X||!ro)return;xe("watch_repo",{repoPath:t}).catch(console.error);let w=!1,A=!1,B=!1,V=null;const ue=async()=>{if(!w){if(ys.current){A=!0;return}if(B){A=!0;return}B=!0;try{if(!await si(t)||w)return;await as(t,X)}catch(Ce){console.warn("Frozen git-activity refresh failed:",Ce)}finally{B=!1,A&&!w&&(A=!1,window.setTimeout(()=>{ue()},0))}}},Ee=()=>{A=!0,ue()};return hc("git-activity",Ce=>{tl(Ce.payload.repoPath)===t&&(lo(t,!0),Ee())}).then(Ce=>{w?Ce():V=Ce}).catch(console.error),()=>{w=!0,V&&V()}},[t,X,ro]);async function po(){if(t){At(!0),H(null);try{await xe("authenticate_github");const w=await xe("get_github_auth_status");ot(w),w.authenticated?await xn(t):w.message&&H(w.message)}catch(w){H(w instanceof Error?w.message:String(w))}finally{At(!1)}}}const rs=new Set(N.map(w=>w.branchName)),Fn=14*864e5,_i=Date.now(),ko=_.filter(w=>w.status==="stale"),Wo=ko.filter(w=>rs.has(w.name)||_i-new Date(w.lastCommitDate).getTime()<=Fn),Xt=ko.filter(w=>!rs.has(w.name)&&_i-new Date(w.lastCommitDate).getTime()>Fn),Ai=w=>{var A;return Object.prototype.hasOwnProperty.call(rn,w.name)?Math.max(0,(A=rn[w.name])!=null?A:0):Math.max(0,w.commitsAhead)};y.useEffect(()=>{nt({}),ao.current=null,At(!1),ot(null),H(null),P([]),ne(null)},[t]),y.useEffect(()=>{var pt,Ht,Kt,It;if(!t||!X){nt({}),un({}),Bt({}),zt({}),mt({}),ao.current=null;return}const w=_.map(kt=>{var Dt;return`${kt.name}:${kt.headSha}:${(Dt=kt.parentBranch)!=null?Dt:""}:${kt.commitsAhead}`}).join("|"),A=b.map(kt=>{var Dt,tn;return`${kt.fullSha}:${(tn=(Dt=kt.parentShas)==null?void 0:Dt[1])!=null?tn:""}`}).join("|"),B=`${t}|${X}|${w}|${A}`;if(ao.current===B)return;ao.current=B;const V={},ue={};for(const kt of _){if(kt.name===X)continue;const Dt=C.filter(tn=>tn.branch===kt.name).map(tn=>{var An;return{fullSha:tn.fullSha,sha:tn.sha,parentSha:(An=tn.parentSha)!=null?An:null,message:tn.message,author:tn.author,date:tn.date,kind:"commit"}});V[kt.name]=Dt,ue[kt.name]=Dt.length}const Ee=new Map;for(const kt of C)Ee.set(kt.fullSha,kt.branch);const Ce=kt=>{if(!kt)return null;const Dt=Ee.get(kt);if(Dt)return Dt;for(const[tn,An]of Ee.entries())if(tn.startsWith(kt)||kt.startsWith(tn))return An;return null},Ve={[X]:null};for(const kt of _){if(kt.name===X){Ve[kt.name]=null;continue}const Dt=C.filter(ts=>ts.branch===kt.name),tn=new Set(Dt.map(ts=>ts.fullSha)),An=(Ht=(pt=Dt.filter(ts=>{var Ts;const _t=(Ts=ts.parentSha)!=null?Ts:null;return!_t||!tn.has(_t)}).sort((ts,_t)=>{const Ts=new Date(ts.date).getTime()-new Date(_t.date).getTime();return Ts!==0?Ts:ts.fullSha.localeCompare(_t.fullSha)})[0])==null?void 0:pt.parentSha)!=null?Ht:null,Zs=Ce(An);Ve[kt.name]=(It=(Kt=Zs!=null?Zs:qe[kt.name])!=null?Kt:kt.parentBranch)!=null?It:null}nt({}),un(V),Bt(Ve),zt(kt=>{const Dt={};for(const tn of _){const An=kt[tn.name];An!=null&&Number.isFinite(An)&&(Dt[tn.name]=An)}return Dt}),mt(ue)},[t,X,_,b,C,qe]),y.useEffect(()=>{if(!J){Xe(!1);return}Xe(!0);const w=window.setTimeout(()=>{Xe(!1)},Ny),A=window.setTimeout(()=>{ne(null)},Ny+Cw);return()=>{window.clearTimeout(w),window.clearTimeout(A)}},[J]),y.useEffect(()=>{if(!t||_.length===0)return;const w=V=>new Promise(ue=>setTimeout(ue,V));async function A(){const ue=`${await xe("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${ue}`),await w(800),await xe("screenshot",{path:`${ue}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${ue}`)}const B=V=>{(V.metaKey||V.ctrlKey)&&V.shiftKey&&V.key==="S"&&(V.preventDefault(),A())};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[t,i,_]);function Bs(){Rt(!0),setTimeout(()=>{$t(!1),Rt(!1),ct("active"),ze(null)},100)}async function Fo(w){if(!t)return;ne(null);const A=/^STASH:(\d+)$/.exec(w.commitSha);if(A){try{const B=parseInt(A[1],10),V=await xe("apply_stash_restore",{repoPath:t,stashIndex:B});Z(V),await as(t);const ue=`Stash ${B+1}`,Ee=V.branchName?` on branch ${V.branchName}`:" at the stash base (detached HEAD)";ne({kind:"success",message:`Restored ${ue}${Ee}; stash applied and dropped (uncommitted changes).`})}catch(B){const V=B instanceof Error?B.message:String(B);ne({kind:"error",message:V}),console.error("Failed to apply stash:",V)}return}if(w.branchName){const B=(ue,Ee)=>{const Ce=ue.replace(/\\/g,"/").replace(/\/+$/,""),Ve=Ee.replace(/\\/g,"/").replace(/\/+$/,"");return Ce===Ve||Ce.toLowerCase()===Ve.toLowerCase()},V=oe.find(ue=>ue.pathExists===!1||ue.isCurrent||t&&B(ue.path,t)?!1:ue.branchName===w.branchName);if(V){await Hs(V.path);return}}try{let B="";(await xe("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await xe("stash_push",{repoPath:t,includeUntracked:!0}),B="Stashed local changes (including untracked), then ",await as(t));const ue=w.branchName?await xe("checkout_branch",{repoPath:t,branchName:w.branchName}):await xe("checkout_ref",{repoPath:t,refName:w.commitSha}),Ee=await xe("get_checked_out_ref",{repoPath:t}).catch(()=>ue);Z(Ee),await as(t);const Ce=Ee.branchName?Ee.branchName:`${Ee.headSha.slice(0,7)} (detached)`;ne({kind:"success",message:`${B}Checked out ${Ce}`})}catch(B){const V=B instanceof Error?B.message:String(B);ne({kind:"error",message:V}),console.error("Failed to checkout commit:",V)}}async function Lo(){if(!(!t||os)){ne(null),gn(!0);try{if(!(await xe("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){ne({kind:"error",message:"No local changes to stash."});return}await xe("stash_push",{repoPath:t,includeUntracked:!0}),await as(t),ne({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(w){const A=w instanceof Error?w.message:String(w);ne({kind:"error",message:A}),console.error("Failed to stash:",A)}finally{gn(!1)}}}async function Oo(w){if(!t||oo)return!1;const A=w.trim();if(!A)return ne({kind:"error",message:"Enter a commit message."}),!1;ne(null),is(!0);try{if(!(await xe("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return ne({kind:"error",message:"No local changes to commit."}),!1;const V=await xe("commit_working_tree",{repoPath:t,message:A});return Z(V),await as(t),ne({kind:"success",message:"Committed local changes."}),!0}catch(B){const V=B instanceof Error?B.message:String(B);return ne({kind:"error",message:V}),console.error("Failed to commit:",V),!1}finally{is(!1)}}async function Ls(){if(!t||es)return!1;ne(null),Gt(!0);try{if(!(await xe("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return ne({kind:"error",message:"No local changes to stage."}),!1;const A=await xe("stage_working_tree",{repoPath:t});return Z(A),await as(t),ne({kind:"success",message:"Staged all changes."}),!0}catch(w){const A=w instanceof Error?w.message:String(w);return ne({kind:"error",message:A}),console.error("Failed to stage:",A),!1}finally{Gt(!1)}}async function jo(w,A){if(!(!t||kn)){Jt(!0),ne(null);try{const B=/^STASH:(\d+)$/.exec(w);let V;if(B){const ue=parseInt(B[1],10);V=await xe("move_stash_to_new_branch",{repoPath:t,stashIndex:ue,branchName:A})}else V=await xe("create_branch_from_uncommitted",{repoPath:t,branchName:A});Z(V),await as(t),ne({kind:"success",message:`Moved to new branch "${A}"`})}catch(B){const V=B instanceof Error?B.message:String(B);ne({kind:"error",message:V}),console.error("Failed to create branch from node:",V)}finally{Jt(!1)}}}async function Cs(w){if(!(!t||kn)){Jt(!0),ne(null);try{const A=await xe("create_root_branch",{repoPath:t,branchName:w});Z(A),await as(t),ne({kind:"success",message:`Created new root branch "${w}"`})}catch(A){const B=A instanceof Error?A.message:String(A);ne({kind:"error",message:B}),console.error("Failed to create root branch:",B)}finally{Jt(!1)}}}async function Sn(w,A){if(!t)return;const B=Array.from(new Set(w.filter(V=>!!V&&V!==A)));if(B.length!==0){ne(null),De(!0);try{let V=null;for(const ue of B)V=await xe("merge_ref_into_branch",{repoPath:t,sourceRef:ue,targetBranch:A});await as(t),V&&Z(V),ne({kind:"success",message:B.length===1?`Merged ${B[0].slice(0,7)} into ${A}`:`Merged ${B.length} commits into ${A}`})}catch(V){const ue=V instanceof Error?V.message:String(V);ne({kind:"error",message:ue}),console.error("Failed to merge refs into branch:",ue)}finally{De(!1)}}}async function co(){if(!(!t||St)){ne(null),Ye(!0);try{const w=await xe("push_all_unpushed_branches",{repoPath:t});await as(t),ne({kind:"success",message:w.length>0?w.length===1?`Pushed ${w[0].branchName}`:`Pushed ${w.length} branches`:"Everything local is already pushed."})}catch(w){const A=w instanceof Error?w.message:String(w);ne({kind:"error",message:A}),console.error("Failed to push all branches:",A)}finally{Ye(!1)}}}async function Xn(){if(!(!t||St)){ne(null),Ye(!0);try{const w=await xe("push_current_branch",{repoPath:t});await as(t),ne({kind:"success",message:`Pushed ${w.branchName}`})}catch(w){const A=w instanceof Error?w.message:String(w);ne({kind:"error",message:A}),console.error("Failed to push current branch:",A)}finally{Ye(!1)}}}async function _s(w){var B;if(!t||St)return;const A=Array.from(new Map(w.filter(V=>V.branchName&&V.targetSha).map(V=>[V.branchName,V])).values());if(A.length!==0){ne(null),Ye(!0);try{for(const V of A)await xe("push_branch",{repoPath:t,branchName:V.branchName,targetSha:V.targetSha});await as(t),ne({kind:"success",message:A.length===1?`Pushed ${A[0].branchName} through ${(B=A[0].targetSha)==null?void 0:B.slice(0,7)}`:`Pushed ${A.length} selected commit ranges`})}catch(V){const ue=V instanceof Error?V.message:String(V);ne({kind:"error",message:ue}),console.error("Failed to push selected commits:",ue)}finally{Ye(!1)}}}async function qn(w){var Ee;if(!t||bt)return;const A=Array.from(new Set(w.branchNames.filter(Ce=>Ce&&Ce!==X))),B=!!w.discardUncommittedChanges,V=(Ee=w.stashIndices)!=null?Ee:[],ue=Array.from(new Set(V)).sort((Ce,Ve)=>Ve-Ce);if(!(A.length===0&&!B&&ue.length===0)){ne(null),ht(!0);try{for(const pt of ue)await xe("stash_drop",{repoPath:t,stashIndex:pt});const Ce=A.length>0||B?await xe("delete_selected_elements",{repoPath:t,branchNames:A,discardUncommittedChanges:B}):{deletedBranches:[],discardedUncommittedChanges:!1};await as(t);const Ve=[];ue.length>0&&Ve.push(ue.length===1?`removed stash ${ue[0]+1}`:`removed ${ue.length} stashes`),Ce.discardedUncommittedChanges&&Ve.push("discarded local uncommitted changes"),Ce.deletedBranches.length>0&&Ve.push(Ce.deletedBranches.length===1?`deleted ${Ce.deletedBranches[0]}`:`deleted ${Ce.deletedBranches.length} branches`),ne({kind:"success",message:Ve.length>0?Ve.join(" and "):"Nothing to delete."})}catch(Ce){const Ve=Ce instanceof Error?Ce.message:String(Ce);ne({kind:"error",message:Ve}),console.error("Failed to delete selected elements:",Ve)}finally{ht(!1)}}}function en(w){ze(w),He(A=>{var B;return{branch:w,seq:((B=A==null?void 0:A.seq)!=null?B:0)+1}})}function Vs(w){w&&(ke(w),ae(A=>A+1))}function Ys(w){w&&(le(w),ae(A=>A+1))}y.useEffect(()=>{var B;const w=U!=null&&U.hasUncommittedChanges?"WORKING_TREE":(B=U==null?void 0:U.headSha)!=null?B:null;if(!w)return;const A=`${t!=null?t:"__no-repo__"}|${jn}|${w}`;io.current!==A&&(io.current=A,ke(w),ae(V=>V+1))},[U==null?void 0:U.hasUncommittedChanges,U==null?void 0:U.headSha,jn,t]),y.useEffect(()=>{io.current=null},[t]);const{enrichedBranches:ws,enrichedBranchCommitPreviews:Gn,enrichedBranchUniqueAheadCounts:Mo,enrichedDirectCommits:ks}=y.useMemo(()=>{var Xo,Js,zo,ai;const w=Ix(Ft,_,C,Vt,rn,X);let A=w.branches,B=w.directCommits,V=w.branchCommitPreviews,ue=w.branchUniqueAheadCounts;if(!(U!=null&&U.hasUncommittedChanges))return{enrichedBranches:A,enrichedDirectCommits:B,enrichedBranchCommitPreviews:V,enrichedBranchUniqueAheadCounts:ue};const Ee=U.headSha||U.parentSha||null,Ce=(Js=(Xo=B[0])==null?void 0:Xo.fullSha)!=null?Js:null,Ve=(Mn,Kn)=>!Mn||!Kn?!1:Mn===Kn||Mn.startsWith(Kn)||Kn.startsWith(Mn),pt=[{name:X,headSha:Ce!=null?Ce:"",isDefault:!0},...A.map(Mn=>({name:Mn.name,headSha:Mn.headSha,isDefault:!1}))],Ht=U.branchName?pt.find(Mn=>Mn.name===U.branchName):void 0,Kt=Ee?pt.filter(Mn=>Ve(Mn.headSha,Ee)):[],It=(zo=Ht!=null?Ht:Kt.find(Mn=>Mn.isDefault))!=null?zo:Kt[0],kt=!!(It&&Ee&&Ve(It.headSha,Ee)),Dt=It&&!It.isDefault?A.find(Mn=>Mn.name===It.name):void 0,tn=(()=>{var Kn;if(!Ee)return null;const Mn=B.find(eo=>Ve(eo.fullSha,Ee)||Ve(eo.sha,Ee));if(Mn!=null&&Mn.date)return Mn.date;if(Dt){const eo=((Kn=V[Dt.name])!=null?Kn:[]).find(Vi=>Ve(Vi.fullSha,Ee)||Ve(Vi.sha,Ee));if(eo!=null&&eo.date)return eo.date}return null})(),An=tn?new Date(tn).getTime():Number.NaN,Zs=Date.now(),ts=Number.isFinite(An)?Math.max(Zs,An+1):Zs,_t=new Date(ts).toISOString(),Ts={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:Ee,message:"Local uncommitted changes",author:"You",date:_t,kind:"uncommitted"},oi={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:Ee,childShas:[],branch:X,message:"Local uncommitted changes",author:"You",date:_t,kind:"uncommitted"};if(kt&&(It!=null&&It.isDefault))return{enrichedBranches:A,enrichedBranchCommitPreviews:V,enrichedBranchUniqueAheadCounts:ue,enrichedDirectCommits:[...B,oi]};if(kt&&Dt)return{enrichedBranches:A.map(Kn=>Kn.name===Dt.name?{...Kn,commitsAhead:Kn.commitsAhead+1,unpushedCommits:Kn.unpushedCommits+1,lastCommitDate:_t,headSha:"WORKING_TREE"}:Kn),enrichedDirectCommits:B,enrichedBranchCommitPreviews:{...V,[Dt.name]:[Ts,...V[Dt.name]||[]]},enrichedBranchUniqueAheadCounts:{...ue,[Dt.name]:Math.max(0,(ai=Object.prototype.hasOwnProperty.call(ue,Dt.name)?ue[Dt.name]:Dt.commitsAhead)!=null?ai:0)+1}};const ii={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:_t,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:Ee!=null?Ee:void 0,parentBranch:(It==null?void 0:It.name)||U.branchName||X};return{enrichedBranches:[ii,...A],enrichedBranchCommitPreviews:{...V,[ii.name]:[Ts]},enrichedBranchUniqueAheadCounts:{...ue,[ii.name]:1},enrichedDirectCommits:B}},[_,Vt,rn,U,X,C,Ft]),_o=y.useMemo(()=>{const w={...qe};return w[X]=null,w},[qe,X,ws]),js=y.useMemo(()=>{var w;return(w=Wv(ws,X,_o,Ot))!=null?w:dp(ws,X,Gn,_o)},[ws,X,Gn,_o,Ot]),Ms=y.useMemo(()=>Sd({lanes:js,branches:ws,mergeNodes:b,directCommits:ks,unpushedDirectCommits:j,defaultBranch:X,branchCommitPreviews:Gn,branchParentByName:_o,branchUniqueAheadCounts:Mo,manuallyOpenedClumps:q,manuallyClosedClumps:Me,isDebugOpen:!1,gridSearchQuery:Q,gridFocusSha:de,checkedOutRef:U!=null?U:null,orientation:jn}),[js,ws,b,ks,j,X,Gn,_o,Mo,q,Me,Q,de,(uo=U==null?void 0:U.headSha)!=null?uo:null,(T=U==null?void 0:U.branchName)!=null?T:null,jn]);return l.jsxs("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"window-drag-region absolute left-0 right-0 top-0 z-[9999] h-12 px-4",style:{paddingTop:"max(env(safe-area-inset-top), 0px)"},onMouseDown:Yo}),l.jsx("div",{className:"relative z-10 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsx(ww,{className:"min-h-0 w-[27rem] shrink-0 border-r border-border/50 pb-4 pt-16",projects:Qs,activeProjectPath:t,onSelectProject:Us,onAddProject:()=>{(async()=>{var w,A;try{const B=await Iv({directory:!0,multiple:!1,defaultPath:(A=(w=c[0])==null?void 0:w.path)!=null?A:void 0});typeof B=="string"&&B&&await Ro(B)}catch(B){rt(B instanceof Error?B.message:String(B))}})()},projectLoading:Ne||p,projectError:$e,branches:ws,defaultBranch:X,checkedOutRef:U,manuallyOpenedClumps:q,manuallyClosedClumps:Me,setManuallyOpenedClumps:me,setManuallyClosedClumps:D,gridLayoutModel:Ms,onSelectCommit:Vs,onSelectBranch:Ys}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx(xw,{branches:ws,mergeNodes:b,directCommits:ks,unpushedDirectCommits:j,unpushedCommitShasByBranch:I,defaultBranch:X,branchCommitPreviews:Gn,branchParentByName:_o,branchUniqueAheadCounts:Mo,gridSearchQuery:Q,gridSearchJumpToken:z,gridFocusSha:de,onGridSearchResultCountChange:G,onGridSearchFocusChange:ke,checkedOutRef:U,onCommitClick:Fo,onMergeRefsIntoBranch:Sn,mergeInProgress:Ue,onPushAllBranches:co,onPushCurrentBranch:Xn,onPushCommitTargets:_s,pushInProgress:St,onDeleteSelection:qn,deleteInProgress:bt,worktrees:oe,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:Bo,removeWorktreeInProgress:be,onSwitchToWorktree:Hs,onStashLocalChanges:Lo,stashInProgress:os,stashDisabled:!1,onCommitLocalChanges:Oo,commitInProgress:oo,commitDisabled:!1,onStageAllChanges:Ls,stageInProgress:es,onCreateBranchFromNode:jo,onCreateRootBranch:Cs,createBranchFromNodeInProgress:kn,onInteractionChange:Ze,manuallyOpenedClumps:q,manuallyClosedClumps:Me,setManuallyOpenedClumps:me,setManuallyClosedClumps:D,layoutModel:Ms,orientation:jn}),l.jsx("header",{"data-map-ui":!0,className:"absolute left-0 right-0 top-12 z-40 px-4 md:px-8",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto relative z-10 min-h-8 content-start flex flex-wrap items-center gap-2",children:[l.jsxs("div",{className:"flex shrink-0 rounded-full border border-border bg-muted/20 p-0.5 shadow-sm",role:"radiogroup","aria-label":"Commit map layout",children:[l.jsx("button",{type:"button",role:"radio","aria-checked":jn==="horizontal",tabIndex:0,onClick:()=>So("horizontal"),onKeyDown:w=>{(w.key==="ArrowRight"||w.key==="ArrowDown")&&(w.preventDefault(),So("vertical"))},className:Gh("rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",jn==="horizontal"?"border border-border/50 bg-card text-foreground shadow-sm":"text-muted-foreground hover:text-foreground"),children:"Horizontal"}),l.jsx("button",{type:"button",role:"radio","aria-checked":jn==="vertical",tabIndex:0,onClick:()=>So("vertical"),onKeyDown:w=>{(w.key==="ArrowLeft"||w.key==="ArrowUp")&&(w.preventDefault(),So("horizontal"))},className:Gh("rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",jn==="vertical"?"border border-border/50 bg-card text-foreground shadow-sm":"text-muted-foreground hover:text-foreground"),children:"Vertical"})]}),(at==null?void 0:at.ghAvailable)&&!at.authenticated&&l.jsx("button",{onClick:po,disabled:it,className:"text-xs text-muted-foreground hover:text-foreground border border-border/50 rounded-full px-3 py-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:it?"Connecting GitHub...":"Connect GitHub"}),at&&!at.ghAvailable&&l.jsx("span",{className:"text-xs text-muted-foreground border border-border/50 rounded-full px-3 py-1",children:"Install `gh` for private PR data"}),Qe&&l.jsx("span",{className:"text-xs text-muted-foreground max-w-64 truncate",title:Qe,children:Qe}),l.jsxs("div",{className:"window-no-drag flex min-w-56 flex-1 max-w-sm items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-sm",children:[l.jsx("span",{className:"text-[10px] uppercase tracking-wide text-muted-foreground font-medium shrink-0",children:"Search"}),l.jsx("input",{value:Q,onChange:w=>le(w.target.value),onKeyDown:w=>{w.key==="Enter"&&(w.preventDefault(),ae(A=>A+1))},placeholder:"sha, message, or branch",className:"w-full bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground/70"}),l.jsx("button",{type:"button",onClick:()=>ae(w=>w+1),className:"shrink-0 rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Jump"})]}),te!=null&&l.jsxs("span",{className:"text-xs text-muted-foreground",children:[te," match",te===1?"":"es"]}),de&&l.jsxs("span",{className:"text-xs rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary",children:["Focused ",de.slice(0,7)]}),J&&l.jsx("span",{className:Gh("text-xs rounded-full px-3 py-1 max-w-[26rem] truncate transition-opacity duration-200",_e?"opacity-100":"opacity-0",J.kind==="error"?"bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400":"bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"),title:J.message,children:J.message})]})})]}),tt&&l.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl shadow-lg overflow-hidden ${lt?"animate-error-panel-out":"animate-error-panel-in"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[l.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),l.jsx("button",{onClick:Bs,className:"text-muted-foreground hover:text-foreground transition-colors",children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[l.jsxs("button",{onClick:()=>ct("active"),className:`text-xs font-medium transition-colors ${Oe==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[Wo.length," active"]}),l.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),l.jsxs("button",{onClick:()=>ct("inactive"),className:`text-xs font-medium transition-colors ${Oe==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[Xt.length," inactive"]})]}),l.jsx("div",{className:"overflow-y-auto max-h-64",children:(Oe==="active"?Wo:Xt).map(w=>{const A=(Ke==null?void 0:Ke.name)===w.name,B=Ai(w);return l.jsxs("button",{onClick:()=>en(w),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:`text-sm font-medium truncate ${A?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:w.name}),l.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[B>0&&`${B} ahead`,B>0&&w.commitsBehind>0&&", ",w.commitsBehind>0&&`${w.commitsBehind} behind`]})]}),l.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},w.name)})})]})]})})]})}var Ec=Ex(),Mw=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,Tw={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=Mw}var Jn=Tw,Ew=`.icon-transitions-module__iconState___uqK9J {
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
}`,Aw={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=Ew}var Vn=Aw,Dw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Nw=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Rw=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),Bw=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${Vn.iconState} ${n?Vn.hiddenScaled:Vn.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${Vn.iconState} ${n?Vn.visibleScaled:Vn.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Lw=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${Vn.iconStateFast} ${i?Vn.visibleScaled:u?Vn.sending:Vn.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${Vn.iconStateFast} ${a?Vn.visibleScaled:Vn.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${Vn.iconStateFast} ${c?Vn.visibleScaled:Vn.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},Ow=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${Vn.iconFade} ${n?Vn.visible:Vn.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${Vn.iconFade} ${n?Vn.hidden:Vn.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),zw=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${Vn.iconFadeFast} ${n?Vn.hidden:Vn.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${Vn.iconFadeFast} ${n?Vn.visible:Vn.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),$w=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),Iw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Px=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Pw=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),Hw=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Uw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),Vw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),Yw=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Ww=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Fw=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Hx=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Kh=Hx.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Nm="feedback-freeze-styles",Qh="__agentation_freeze";function Xw(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Qh]||(t[Qh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Qh]}var dn=Xw();typeof window<"u"&&!dn.installed&&(dn.origSetTimeout=window.setTimeout.bind(window),dn.origSetInterval=window.setInterval.bind(window),dn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?dn.origSetTimeout(t,n):dn.origSetTimeout((...a)=>{dn.frozen?dn.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?dn.origSetInterval(t,n):dn.origSetInterval((...a)=>{dn.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>dn.origRAF(n=>{dn.frozen?dn.frozenRAFQueue.push(t):t(n)}),dn.installed=!0);var Ut=dn.origSetTimeout,qw=dn.origSetInterval,al=dn.origRAF;function Gw(t){return t?Hx.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function Kw(){if(typeof document>"u"||dn.frozen)return;dn.frozen=!0,dn.frozenTimeoutQueue=[],dn.frozenRAFQueue=[];let t=document.getElementById(Nm);t||(t=document.createElement("style"),t.id=Nm),t.textContent=`
    *${Kh},
    *${Kh}::before,
    *${Kh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),dn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;Gw(i)||(n.pause(),dn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function Ry(){var i;if(typeof document>"u"||!dn.frozen)return;dn.frozen=!1;const t=dn.frozenTimeoutQueue;dn.frozenTimeoutQueue=[];for(const a of t)dn.origSetTimeout(()=>{if(dn.frozen){dn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=dn.frozenRAFQueue;dn.frozenRAFQueue=[];for(const a of n)dn.origRAF(c=>{if(dn.frozen){dn.frozenRAFQueue.push(a);return}a(c)});for(const a of dn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}dn.pausedAnimations=[],(i=document.getElementById(Nm))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Zh(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var kd=y.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:g,style:_,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:S=!1,computedStyles:C},k){const[j,M]=y.useState(u),[I,L]=y.useState(!1),[N,P]=y.useState("initial"),[X,Y]=y.useState(!1),[U,Z]=y.useState(!1),oe=y.useRef(null),ie=y.useRef(null),be=y.useRef(null),Te=y.useRef(null);y.useEffect(()=>{b&&N!=="exit"&&P("exit")},[b,N]),y.useEffect(()=>{Ut(()=>{P("enter")},0);const me=Ut(()=>{P("entered")},200),Me=Ut(()=>{const D=oe.current;D&&(Zh(D),D.selectionStart=D.selectionEnd=D.value.length,D.scrollTop=D.scrollHeight)},50);return()=>{clearTimeout(me),clearTimeout(Me),be.current&&clearTimeout(be.current),Te.current&&clearTimeout(Te.current)}},[]);const Q=y.useCallback(()=>{Te.current&&clearTimeout(Te.current),L(!0),Te.current=Ut(()=>{L(!1),Zh(oe.current)},250)},[]);y.useImperativeHandle(k,()=>({shake:Q}),[Q]);const le=y.useCallback(()=>{P("exit"),be.current=Ut(()=>{p()},150)},[p]),z=y.useCallback(()=>{j.trim()&&h(j.trim())},[j,h]),ae=y.useCallback(me=>{me.stopPropagation(),!me.nativeEvent.isComposing&&(me.key==="Enter"&&!me.shiftKey&&(me.preventDefault(),z()),me.key==="Escape"&&le())},[z,le]),q=[Jn.popup,S?Jn.light:"",N==="enter"?Jn.enter:"",N==="entered"?Jn.entered:"",N==="exit"?Jn.exit:"",I?Jn.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:ie,className:q,"data-annotation-popup":!0,style:_,onClick:me=>me.stopPropagation(),children:[l.jsxs("div",{className:Jn.header,children:[C&&Object.keys(C).length>0?l.jsxs("button",{className:Jn.headerToggle,onClick:()=>{const me=U;Z(!U),me&&Ut(()=>Zh(oe.current),0)},type:"button",children:[l.jsx("svg",{className:`${Jn.chevron} ${U?Jn.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:Jn.element,children:n})]}):l.jsx("span",{className:Jn.element,children:n}),i&&l.jsx("span",{className:Jn.timestamp,children:i})]}),C&&Object.keys(C).length>0&&l.jsx("div",{className:`${Jn.stylesWrapper} ${U?Jn.expanded:""}`,children:l.jsx("div",{className:Jn.stylesInner,children:l.jsx("div",{className:Jn.stylesBlock,children:Object.entries(C).map(([me,Me])=>l.jsxs("div",{className:Jn.styleLine,children:[l.jsx("span",{className:Jn.styleProperty,children:me.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:Jn.styleValue,children:Me}),";"]},me))})})}),a&&l.jsxs("div",{className:Jn.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:oe,className:Jn.textarea,style:{borderColor:X?x:void 0},placeholder:c,value:j,onChange:me=>M(me.target.value),onFocus:()=>Y(!0),onBlur:()=>Y(!1),rows:2,onKeyDown:ae}),l.jsxs("div",{className:Jn.actions,children:[g&&l.jsx("div",{className:Jn.deleteWrapper,children:l.jsx("button",{className:Jn.deleteButton,onClick:g,type:"button",children:l.jsx(Yw,{size:22})})}),l.jsx("button",{className:Jn.cancel,onClick:le,children:"Cancel"}),l.jsx("button",{className:Jn.submit,style:{backgroundColor:x,opacity:j.trim()?1:.4},onClick:z,disabled:!j.trim(),children:d})]})]})}),Qw=({content:t,children:n,...i})=>{const[a,c]=y.useState(!1),[u,d]=y.useState(!1),[h,p]=y.useState({top:0,right:0}),g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=()=>{if(g.current){const k=g.current.getBoundingClientRect();p({top:k.top+k.height/2,right:window.innerWidth-k.left+8})}},S=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),_.current=Ut(()=>{c(!0)},500)},C=()=>{_.current&&(clearTimeout(_.current),_.current=null),c(!1),x.current=Ut(()=>{d(!1)},150)};return y.useEffect(()=>()=>{_.current&&clearTimeout(_.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:g,onMouseEnter:S,onMouseLeave:C,...i,children:n}),u&&Ec.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},Zw=`.styles-module__tooltip___mcXL2 {
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
}`,Jw={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=Zw}var By=Jw,yr=({content:t})=>l.jsx(Qw,{className:By.tooltip,content:t,children:l.jsx(Rw,{className:By.tooltipIcon})}),xt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Ux=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...xt.navigation},{type:"header",label:"Header",...xt.header},{type:"hero",label:"Hero",...xt.hero},{type:"section",label:"Section",...xt.section},{type:"sidebar",label:"Sidebar",...xt.sidebar},{type:"footer",label:"Footer",...xt.footer},{type:"modal",label:"Modal",...xt.modal},{type:"banner",label:"Banner",...xt.banner},{type:"drawer",label:"Drawer",...xt.drawer},{type:"popover",label:"Popover",...xt.popover},{type:"divider",label:"Divider",...xt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...xt.card},{type:"text",label:"Text",...xt.text},{type:"image",label:"Image",...xt.image},{type:"video",label:"Video",...xt.video},{type:"table",label:"Table",...xt.table},{type:"grid",label:"Grid",...xt.grid},{type:"list",label:"List",...xt.list},{type:"chart",label:"Chart",...xt.chart},{type:"codeBlock",label:"Code Block",...xt.codeBlock},{type:"map",label:"Map",...xt.map},{type:"timeline",label:"Timeline",...xt.timeline},{type:"calendar",label:"Calendar",...xt.calendar},{type:"accordion",label:"Accordion",...xt.accordion},{type:"carousel",label:"Carousel",...xt.carousel},{type:"logo",label:"Logo",...xt.logo},{type:"faq",label:"FAQ",...xt.faq},{type:"gallery",label:"Gallery",...xt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...xt.button},{type:"input",label:"Input",...xt.input},{type:"search",label:"Search",...xt.search},{type:"form",label:"Form",...xt.form},{type:"tabs",label:"Tabs",...xt.tabs},{type:"dropdown",label:"Dropdown",...xt.dropdown},{type:"toggle",label:"Toggle",...xt.toggle},{type:"stepper",label:"Stepper",...xt.stepper},{type:"rating",label:"Rating",...xt.rating},{type:"fileUpload",label:"File Upload",...xt.fileUpload},{type:"checkbox",label:"Checkbox",...xt.checkbox},{type:"radio",label:"Radio",...xt.radio},{type:"slider",label:"Slider",...xt.slider},{type:"datePicker",label:"Date Picker",...xt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...xt.avatar},{type:"badge",label:"Badge",...xt.badge},{type:"tag",label:"Tag",...xt.tag},{type:"breadcrumb",label:"Breadcrumb",...xt.breadcrumb},{type:"pagination",label:"Pagination",...xt.pagination},{type:"progress",label:"Progress",...xt.progress},{type:"alert",label:"Alert",...xt.alert},{type:"toast",label:"Toast",...xt.toast},{type:"notification",label:"Notification",...xt.notification},{type:"tooltip",label:"Tooltip",...xt.tooltip},{type:"stat",label:"Stat",...xt.stat},{type:"skeleton",label:"Skeleton",...xt.skeleton},{type:"chip",label:"Chip",...xt.chip},{type:"icon",label:"Icon",...xt.icon},{type:"spinner",label:"Spinner",...xt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...xt.pricing},{type:"testimonial",label:"Testimonial",...xt.testimonial},{type:"cta",label:"CTA",...xt.cta},{type:"productCard",label:"Product Card",...xt.productCard},{type:"profile",label:"Profile",...xt.profile},{type:"feature",label:"Feature",...xt.feature},{type:"team",label:"Team",...xt.team},{type:"login",label:"Login",...xt.login},{type:"contact",label:"Contact",...xt.contact}]}],Hi={};for(const t of Ux)for(const n of t.items)Hi[n.type]=n;function Le({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function $n({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function Vo({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function eS({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx($n,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(Le,{w:t*.06}),l.jsx(Le,{w:t*.07}),l.jsx(Le,{w:t*.05}),l.jsx(Le,{w:t*.06})]}),l.jsx($n,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function tS({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Le,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Le,{w:t*.6}),l.jsx(Le,{w:t*.4}),l.jsx($n,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function nS({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Le,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx($n,{w:10,h:10,radius:2}),l.jsx(Le,{w:t*(.4+c*17%30/100)})]},c))]})}function sS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Le,{w:"60%",h:3,strong:!0}),l.jsx(Le,{w:"80%",h:2}),l.jsx(Le,{w:"70%",h:2}),l.jsx(Le,{w:"60%",h:2})]},c))})}function oS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Le,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Le,{w:"90%"}),l.jsx(Le,{w:"70%"}),l.jsx(Le,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx($n,{w:70,h:26,radius:4}),l.jsx($n,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function iS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Le,{w:"70%",h:4,strong:!0}),l.jsx(Le,{w:"95%",h:2}),l.jsx(Le,{w:"85%",h:2}),l.jsx(Le,{w:"50%",h:2})]})]})}function aS({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Le,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Le,{w:`${70+u*13%25}%`,h:2},u))]})}function rS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function lS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Le,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Le,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function cS({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(Vo,{size:8}),l.jsx(Le,{w:`${55+c*17%35}%`,h:2})]},c))})}function uS({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Le,{w:Math.max(20,t*.5),h:3,strong:!0})})}function dS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Le,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Le,{w:"40%",h:2})})]})}function fS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Le,{w:60+c*17%30,h:2}),l.jsx($n,{w:"100%",h:28,radius:4})]},c)),l.jsx($n,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function hS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Le,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Le,{w:"80%",h:2}),l.jsx(Le,{w:"65%",h:2}),l.jsx(Le,{w:"75%",h:2})]})]})}function mS({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function pS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Le,{w:Math.max(16,t*.5),h:2,strong:!0})})}function _S({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Le,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Le,{w:t*.35})]})}function gS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(Le,{w:t*.3,h:4,strong:!0}),l.jsx(Le,{w:t*.7}),l.jsx(Le,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx($n,{w:"33%",h:"100%",radius:4}),l.jsx($n,{w:"33%",h:"100%",radius:4}),l.jsx($n,{w:"33%",h:"100%",radius:4})]})]})}function yS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx($n,{w:"100%",h:"100%",radius:4},u))})}function xS({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Le,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Le,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function bS({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function vS({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(Vo,{size:Math.min(14,n*.4)}),l.jsx(Le,{w:"50%",h:2})]})}function wS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Vo,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:"60%",h:3,strong:!0}),l.jsx(Le,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function SS({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function CS({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx($n,{w:a,h:`${d}%`,radius:2},u)})})}function kS({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx($n,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function jS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Le,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function MS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Le,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function TS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx($n,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function ES({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function AS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Le,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function DS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx($n,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(Vo,{size:5}),l.jsx(Vo,{size:5}),l.jsx(Vo,{size:5})]})]})}function NS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Le,{w:t*.4,h:3,strong:!0}),l.jsx(Le,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(Vo,{size:5}),l.jsx(Le,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx($n,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function RS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Le,{w:"90%",h:2}),l.jsx(Le,{w:"75%",h:2}),l.jsx(Le,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Vo,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Le,{w:60,h:3,strong:!0}),l.jsx(Le,{w:40,h:2})]})]})]})}function BS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Le,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Le,{w:t*.35}),l.jsx($n,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function LS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:"40%",h:3,strong:!0}),l.jsx(Le,{w:"70%",h:2})]})]})}function OS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Le,{w:t*.4,h:3,strong:!0}),l.jsx($n,{w:60,h:Math.min(24,n*.6),radius:4})]})}function zS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Le,{w:t*.5,h:2}),l.jsx(Le,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Le,{w:t*.3,h:2})]})}function $S({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function IS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Le,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function PS({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function HS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function US({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(Vo,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Le,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function VS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Le,{w:t*.4,h:2}),l.jsx(Le,{w:t*.25,h:2})]})}function YS({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(Vo,{size:6}),l.jsx(Vo,{size:6}),l.jsx(Vo,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Le,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function WS({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Le,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Le,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function FS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Vo,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:"50%",h:3,strong:!0}),l.jsx(Le,{w:"75%",h:2})]}),l.jsx(Le,{w:30,h:2})]})}function XS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Le,{w:"65%",h:4,strong:!0}),l.jsx(Le,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Le,{w:"30%",h:5,strong:!0}),l.jsx($n,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function qS({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Vo,{size:i}),l.jsx(Le,{w:t*.45,h:4,strong:!0}),l.jsx(Le,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Le,{w:20,h:3,strong:!0}),l.jsx(Le,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Le,{w:20,h:3,strong:!0}),l.jsx(Le,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Le,{w:20,h:3,strong:!0}),l.jsx(Le,{w:28,h:2})]})]})]})}function GS({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Le,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Le,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function KS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Le,{w:"70%",h:3,strong:!0}),l.jsx(Le,{w:"90%",h:2}),l.jsx(Le,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function QS({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx($n,{w:i,h:i,radius:i*.25}),l.jsx(Le,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function ZS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Le,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function JS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function e4({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function t4({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function n4({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function s4({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Le,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Le,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function o4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function i4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Le,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function a4({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function r4({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function l4({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx($n,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Le,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Le,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function c4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Le,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(Vo,{size:a}),l.jsx(Le,{w:t*.12,h:3,strong:!0}),l.jsx(Le,{w:t*.08,h:2})]},u))})]})}function u4({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(Le,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Le,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:Math.min(60,t*.2),h:2}),l.jsx($n,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx($n,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Le,{w:t*.4,h:2})]})}function d4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(Le,{w:t*.4,h:4,strong:!0}),l.jsx(Le,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:50,h:2}),l.jsx($n,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:40,h:2}),l.jsx($n,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:50,h:2}),l.jsx($n,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Le,{w:60,h:2}),l.jsx($n,{w:"100%",h:"100%",radius:4})]}),l.jsx($n,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var f4={navigation:eS,hero:tS,sidebar:nS,footer:sS,modal:oS,card:iS,text:aS,image:rS,table:lS,list:cS,button:uS,input:dS,form:fS,tabs:hS,avatar:mS,badge:pS,header:_S,section:gS,grid:yS,dropdown:xS,toggle:bS,search:vS,toast:wS,progress:SS,chart:CS,video:kS,tooltip:jS,breadcrumb:MS,pagination:TS,divider:ES,accordion:AS,carousel:DS,pricing:NS,testimonial:RS,cta:BS,alert:LS,banner:OS,stat:zS,stepper:$S,tag:IS,rating:PS,map:HS,timeline:US,fileUpload:VS,codeBlock:YS,calendar:WS,notification:FS,productCard:XS,profile:qS,drawer:GS,popover:KS,logo:QS,faq:ZS,gallery:JS,checkbox:e4,radio:t4,slider:n4,datePicker:s4,skeleton:o4,chip:i4,icon:a4,spinner:r4,feature:l4,team:c4,login:u4,contact:d4};function h4({type:t,width:n,height:i,text:a}){const c=f4[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var m4=`svg[fill=none] {
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
}`,p4={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=m4}var je=p4,nl=24,Wu=5;function Ly(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,g=t.x+t.width/2,_=t.y,x=t.y+t.height,b=t.y+t.height/2,S=!a,C=S?[h,p,g]:[...a.left?[h]:[],...a.right?[p]:[]],k=S?[_,x,b]:[...a.top?[_]:[],...a.bottom?[x]:[]],j=[];for(const ie of n)i.has(ie.id)||j.push(ie);c&&j.push(...c);for(const ie of j){const be=ie.x,Te=ie.x+ie.width,Q=ie.x+ie.width/2,le=ie.y,z=ie.y+ie.height,ae=ie.y+ie.height/2;for(const q of C)for(const me of[be,Te,Q]){const Me=me-q;Math.abs(Me)<Wu&&Math.abs(Me)<Math.abs(u)&&(u=Me)}for(const q of k)for(const me of[le,z,ae]){const Me=me-q;Math.abs(Me)<Wu&&Math.abs(Me)<Math.abs(d)&&(d=Me)}}const M=Math.abs(u)<Wu?u:0,I=Math.abs(d)<Wu?d:0,L=[],N=new Set,P=h+M,X=p+M,Y=g+M,U=_+I,Z=x+I,oe=b+I;for(const ie of j){const be=ie.x,Te=ie.x+ie.width,Q=ie.x+ie.width/2,le=ie.y,z=ie.y+ie.height,ae=ie.y+ie.height/2;for(const q of[be,Q,Te])for(const me of[P,Y,X])if(Math.abs(me-q)<.5){const Me=`x:${Math.round(q)}`;N.has(Me)||(N.add(Me),L.push({axis:"x",pos:q}))}for(const q of[le,ae,z])for(const me of[U,oe,Z])if(Math.abs(me-q)<.5){const Me=`y:${Math.round(q)}`;N.has(Me)||(N.add(Me),L.push({axis:"y",pos:q}))}}return{dx:M,dy:I,guides:L}}function Oy(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function _4({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:g,onSelectionChange:_,deselectSignal:x,onDragMove:b,onDragEnd:S,clearSignal:C,wireframe:k}){const[j,M]=y.useState(new Set),[I,L]=y.useState(null),[N,P]=y.useState(null),[X,Y]=y.useState(null),[U,Z]=y.useState([]),[oe,ie]=y.useState(null),[be,Te]=y.useState(!1),Q=y.useRef(!1),[le,z]=y.useState(new Set),ae=y.useRef(new Map),q=y.useRef(null),me=y.useRef(null),Me=y.useRef(t);Me.current=t;const D=y.useRef(_);D.current=_;const te=y.useRef(b);te.current=b;const G=y.useRef(S);G.current=S;const de=y.useRef(x);y.useEffect(()=>{x!==de.current&&(de.current=x,M(new Set))},[x]);const ke=y.useRef(C);y.useEffect(()=>{if(C!==void 0&&C!==ke.current){ke.current=C;const ce=new Set(Me.current.map(He=>He.id));ce.size>0&&(z(ce),M(new Set),me.current=null,Ut(()=>{n([]),z(new Set)},180))}},[C,n]),y.useEffect(()=>{const ce=He=>{const Ke=He.target;if(!(Ke.tagName==="INPUT"||Ke.tagName==="TEXTAREA"||Ke.isContentEditable)){if((He.key==="Backspace"||He.key==="Delete")&&j.size>0){He.preventDefault();const Tt=new Set(j);z(Tt),M(new Set),Ut(()=>{n(Me.current.filter(ut=>!Tt.has(ut.id))),z(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(He.key)&&j.size>0){He.preventDefault();const Tt=He.shiftKey?20:1,ut=He.key==="ArrowLeft"?-Tt:He.key==="ArrowRight"?Tt:0,at=He.key==="ArrowUp"?-Tt:He.key==="ArrowDown"?Tt:0;n(t.map(ot=>j.has(ot.id)?{...ot,x:Math.max(0,ot.x+ut),y:Math.max(0,ot.y+at)}:ot));return}if(He.key==="Escape"){i?a(null):j.size>0&&M(new Set);return}}};return document.addEventListener("keydown",ce),()=>document.removeEventListener("keydown",ce)},[j,i,t,n,a]);const Ne=y.useCallback(ce=>{if(ce.button!==0||p||ce.target.closest(`.${je.placement}`))return;ce.preventDefault(),ce.stopPropagation();const Ke=window.scrollY,ze=ce.clientX,Tt=ce.clientY;if(i){me.current="place",d==null||d(!0);let ut=!1,at=ze,ot=Tt;const it=Qe=>{at=Qe.clientX,ot=Qe.clientY;const H=Math.abs(at-ze),J=Math.abs(ot-Tt);if((H>5||J>5)&&(ut=!0),ut){const ne=Math.min(ze,at),_e=Math.min(Tt,ot),Xe=Math.abs(at-ze),Ue=Math.abs(ot-Tt);L({x:ne,y:_e,w:Xe,h:Ue}),Y({x:Qe.clientX+12,y:Qe.clientY+12,text:`${Math.round(Xe)} × ${Math.round(Ue)}`})}},At=Qe=>{window.removeEventListener("mousemove",it),window.removeEventListener("mouseup",At),L(null),Y(null),me.current=null,d==null||d(!1);const H=xt[i];let J,ne,_e,Xe;ut?(J=Math.min(ze,at),ne=Math.min(Tt,ot)+Ke,_e=Math.max(nl,Math.abs(at-ze)),Xe=Math.max(nl,Math.abs(ot-Tt))):(_e=H.width,Xe=H.height,J=ze-_e/2,ne=Tt+Ke-Xe/2),J=Math.max(0,J),ne=Math.max(0,ne);const Ue={id:Oy(),type:i,x:J,y:ne,width:_e,height:Xe,scrollY:Ke,timestamp:Date.now()},De=[...t,Ue];n(De),M(new Set([Ue.id])),a(null)};window.addEventListener("mousemove",it),window.addEventListener("mouseup",At)}else{ce.shiftKey||M(new Set),me.current="select";let ut=!1;const at=it=>{const At=Math.abs(it.clientX-ze),Qe=Math.abs(it.clientY-Tt);if((At>4||Qe>4)&&(ut=!0),ut){const H=Math.min(ze,it.clientX),J=Math.min(Tt,it.clientY);P({x:H,y:J,w:Math.abs(it.clientX-ze),h:Math.abs(it.clientY-Tt)})}},ot=it=>{if(window.removeEventListener("mousemove",at),window.removeEventListener("mouseup",ot),me.current=null,ut){const At=Math.min(ze,it.clientX),Qe=Math.min(Tt,it.clientY)+Ke,H=Math.abs(it.clientX-ze),J=Math.abs(it.clientY-Tt),ne=new Set(ce.shiftKey?j:new Set);for(const _e of t)_e.y-Ke,_e.x+_e.width>At&&_e.x<At+H&&_e.y+_e.height>Qe&&_e.y<Qe+J&&ne.add(_e.id);M(ne)}P(null)};window.addEventListener("mousemove",at),window.addEventListener("mouseup",ot)}},[i,p,t,n,j]),ve=y.useCallback((ce,He)=>{var Ue;if(ce.button!==0)return;const Ke=ce.target;if(Ke.closest(`.${je.handle}`)||Ke.closest(`.${je.deleteButton}`))return;ce.preventDefault(),ce.stopPropagation();let ze;ce.shiftKey?(ze=new Set(j),ze.has(He)?ze.delete(He):ze.add(He)):j.has(He)?ze=new Set(j):ze=new Set([He]),M(ze),(ze.size!==j.size||[...ze].some(De=>!j.has(De)))&&((Ue=D.current)==null||Ue.call(D,ze,ce.shiftKey));const ut=ce.clientX,at=ce.clientY,ot=new Map;for(const De of t)ze.has(De.id)&&ot.set(De.id,{x:De.x,y:De.y});me.current="move",d==null||d(!0);let it=!1,At=!1,Qe=t,H=0,J=0;const ne=new Map;for(const De of t)ot.has(De.id)&&ne.set(De.id,{w:De.width,h:De.height});const _e=De=>{var rn;const St=De.clientX-ut,Ye=De.clientY-at;if((Math.abs(St)>2||Math.abs(Ye)>2)&&(it=!0),!it)return;if(De.altKey&&!At){At=!0;const mt=[];for(const Ft of t)ot.has(Ft.id)&&mt.push({...Ft,id:Oy(),timestamp:Date.now()});Qe=[...t,...mt]}let bt=1/0,ht=1/0,Ie=-1/0,nt=-1/0;for(const[mt,Ft]of ot){const Rn=ne.get(mt);Rn&&(bt=Math.min(bt,Ft.x+St),ht=Math.min(ht,Ft.y+Ye),Ie=Math.max(Ie,Ft.x+St+Rn.w),nt=Math.max(nt,Ft.y+Ye+Rn.h))}const Vt={x:bt,y:ht,width:Ie-bt,height:nt-ht},{dx:un,dy:qe,guides:Bt}=Ly(Vt,Qe,new Set(ot.keys()),void 0,g);Z(Bt);const Ot=St+un,zt=Ye+qe;H=Ot,J=zt,n(Qe.map(mt=>{const Ft=ot.get(mt.id);return Ft?{...mt,x:Math.max(0,Ft.x+Ot),y:Math.max(0,Ft.y+zt)}:mt})),(rn=te.current)==null||rn.call(te,Ot,zt)},Xe=()=>{var De;window.removeEventListener("mousemove",_e),window.removeEventListener("mouseup",Xe),me.current=null,d==null||d(!1),Z([]),(De=G.current)==null||De.call(G,H,J,it)};window.addEventListener("mousemove",_e),window.addEventListener("mouseup",Xe)},[j,t,n,d]),st=y.useCallback((ce,He,Ke)=>{ce.preventDefault(),ce.stopPropagation();const ze=t.find(ne=>ne.id===He);if(!ze)return;M(new Set([He])),me.current="resize",d==null||d(!0);const Tt=ce.clientX,ut=ce.clientY,at=ze.width,ot=ze.height,it=ze.x,At=ze.y,Qe={left:Ke.includes("w"),right:Ke.includes("e"),top:Ke.includes("n"),bottom:Ke.includes("s")},H=ne=>{const _e=ne.clientX-Tt,Xe=ne.clientY-ut;let Ue=at,De=ot,St=it,Ye=At;Ke.includes("e")&&(Ue=Math.max(nl,at+_e)),Ke.includes("w")&&(Ue=Math.max(nl,at-_e),St=it+at-Ue),Ke.includes("s")&&(De=Math.max(nl,ot+Xe)),Ke.includes("n")&&(De=Math.max(nl,ot-Xe),Ye=At+ot-De);const bt={x:St,y:Ye,width:Ue,height:De},{dx:ht,dy:Ie,guides:nt}=Ly(bt,Me.current,new Set([He]),Qe,g);Z(nt),ht!==0&&(Qe.right?Ue+=ht:Qe.left&&(St+=ht,Ue-=ht)),Ie!==0&&(Qe.bottom?De+=Ie:Qe.top&&(Ye+=Ie,De-=Ie)),n(Me.current.map(Vt=>Vt.id===He?{...Vt,x:St,y:Ye,width:Ue,height:De}:Vt)),Y({x:ne.clientX+12,y:ne.clientY+12,text:`${Math.round(Ue)} × ${Math.round(De)}`})},J=()=>{window.removeEventListener("mousemove",H),window.removeEventListener("mouseup",J),Y(null),me.current=null,d==null||d(!1),Z([])};window.addEventListener("mousemove",H),window.addEventListener("mouseup",J)},[t,n,d]),Ge=y.useCallback(ce=>{me.current=null,z(He=>{const Ke=new Set(He);return Ke.add(ce),Ke}),M(He=>{const Ke=new Set(He);return Ke.delete(ce),Ke}),Ut(()=>{n(Me.current.filter(He=>He.id!==ce)),z(He=>{const Ke=new Set(He);return Ke.delete(ce),Ke})},180)},[n]),$e={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},rt=y.useCallback(ce=>{const He=t.find(Ke=>Ke.id===ce);He&&(Q.current=!!He.text,ie(ce),Te(!1))},[t]),tt=y.useCallback(()=>{oe&&(Te(!0),Ut(()=>{ie(null),Te(!1)},150))},[oe]);y.useEffect(()=>{u&&oe&&tt()},[u]);const $t=y.useCallback(ce=>{oe&&(n(t.map(He=>He.id===oe?{...He,text:ce.trim()||void 0}:He)),tt())},[oe,t,n,tt]),lt=typeof window<"u"?window.scrollY:0,Rt=["nw","ne","se","sw"],Oe=k?"#f97316":"#3c82f7",ct=[{dir:"n",cls:je.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:Oe})})},{dir:"e",cls:je.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:Oe})})},{dir:"s",cls:je.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:Oe})})},{dir:"w",cls:je.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:Oe})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:q,className:`${je.overlay} ${c?"":je.light} ${i?je.placing:""} ${p?je.passthrough:""} ${u?je.overlayExiting:""} ${k?je.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Ne,children:t.map(ce=>{var Tt;const He=j.has(ce.id),Ke=((Tt=Hi[ce.type])==null?void 0:Tt.label)||ce.type,ze=ce.y-lt;return l.jsxs("div",{"data-design-placement":ce.id,className:`${je.placement} ${He?je.selected:""} ${le.has(ce.id)?je.exiting:""}`,style:{left:ce.x,top:ze,width:ce.width,height:ce.height,position:"fixed"},onMouseDown:ut=>ve(ut,ce.id),onDoubleClick:()=>rt(ce.id),children:[l.jsx("span",{className:je.placementLabel,children:Ke}),l.jsx("span",{className:`${je.placementAnnotation} ${ce.text?je.annotationVisible:""}`,children:(ce.text&&ae.current.set(ce.id,ce.text),ce.text||ae.current.get(ce.id)||"")}),l.jsx("div",{className:je.placementContent,children:l.jsx(h4,{type:ce.type,width:ce.width,height:ce.height,text:ce.text})}),l.jsx("div",{className:je.deleteButton,onMouseDown:ut=>ut.stopPropagation(),onClick:()=>Ge(ce.id),children:"✕"}),Rt.map(ut=>l.jsx("div",{className:`${je.handle} ${je[`handle${ut.charAt(0).toUpperCase()}${ut.slice(1)}`]}`,onMouseDown:at=>st(at,ce.id,ut)},ut)),ct.map(({dir:ut,cls:at,arrow:ot})=>l.jsx("div",{className:`${je.edgeHandle} ${at}`,onMouseDown:it=>st(it,ce.id,ut),children:ot},ut))]},ce.id)})}),oe&&(()=>{var At,Qe;const ce=t.find(H=>H.id===oe);if(!ce)return null;const He=ce.y-lt,Ke=ce.x+ce.width/2,ze=He-8,Tt=He+ce.height+8,ut=ze>200,at=Tt<window.innerHeight-100,ot=Math.max(160,Math.min(window.innerWidth-160,Ke));let it;return ut?it={left:ot,bottom:window.innerHeight-ze}:at?it={left:ot,top:Tt}:it={left:ot,top:Math.max(80,window.innerHeight/2-80)},l.jsx(kd,{element:((At=Hi[ce.type])==null?void 0:At.label)||ce.type,placeholder:$e[ce.type]||"Label or content text",initialValue:(Qe=ce.text)!=null?Qe:"",submitLabel:Q.current?"Save":"Set",onSubmit:$t,onCancel:tt,onDelete:Q.current?()=>{$t("")}:void 0,isExiting:be,lightMode:!c,style:it})})(),I&&l.jsx("div",{className:je.drawBox,style:{left:I.x,top:I.y,width:I.w,height:I.h},"data-feedback-toolbar":!0}),N&&l.jsx("div",{className:je.selectBox,style:{left:N.x,top:N.y,width:N.w,height:N.h},"data-feedback-toolbar":!0}),X&&l.jsx("div",{className:je.sizeIndicator,style:{left:X.x,top:X.y},"data-feedback-toolbar":!0,children:X.text}),U.map((ce,He)=>l.jsx("div",{className:je.guideLine,style:ce.axis==="x"?{position:"fixed",left:ce.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:ce.pos-lt,right:0,height:1},"data-feedback-toolbar":!0},`${ce.axis}-${ce.pos}-${He}`))]})}function g4(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?je.fadeTop:""} ${i?je.fadeBottom:""}`}var O="currentColor",Se="0.5";function y4({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:O,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:O,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:O,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:O,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:O,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:O,strokeWidth:Se})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:O,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:O,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:O,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:O,strokeWidth:Se})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:O,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:O,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:O,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:O,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:O,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:O,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:O,strokeWidth:Se,fill:O,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:O,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:O,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:O,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:O,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:O,strokeWidth:Se})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:O,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:O,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:O,strokeWidth:Se})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:O,strokeWidth:Se,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:O,strokeWidth:Se,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:O,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:O,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:O,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:O,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:O,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:O,strokeWidth:Se}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:O,strokeWidth:Se,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:O,strokeWidth:Se,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:O,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:O,strokeWidth:Se})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:O,strokeWidth:Se})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:O,strokeWidth:Se,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:O,strokeWidth:Se,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:O,strokeWidth:Se}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:O,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:O,strokeWidth:Se}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:O,strokeWidth:Se}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:O,strokeWidth:Se})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:O,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:O,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:O,strokeWidth:Se,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:O,strokeWidth:Se,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:O,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:O,opacity:".15",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:O,strokeWidth:Se})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:O,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:O,strokeWidth:Se}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:O,strokeWidth:Se,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:O,strokeWidth:Se})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:O,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:O,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:O,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:O,strokeWidth:Se}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:O,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:O,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:O,strokeWidth:Se,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:O,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:O,strokeWidth:Se})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:O,strokeWidth:Se}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:O,strokeWidth:Se,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:O,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:O,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:O,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:O,strokeWidth:Se})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:O,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:O,opacity:".2",stroke:O,strokeWidth:Se}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:O,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:O,strokeWidth:Se}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:O,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:O,strokeWidth:Se})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:O,strokeWidth:Se,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:O,strokeWidth:Se,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:O,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:O,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:O,strokeWidth:Se,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:O,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:O,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:O,opacity:".15",stroke:O,strokeWidth:Se})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:O,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:O,opacity:".2",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:O,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:O,strokeWidth:Se,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:O,strokeWidth:Se,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:O,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:O,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:O,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:O,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:O,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:O,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:O,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:O,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:O,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:O,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:O,strokeWidth:Se}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:O,strokeWidth:Se,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:O,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:O,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:O,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:O,strokeWidth:Se})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:O,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:O,strokeWidth:Se,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:O,strokeWidth:Se})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:O,strokeWidth:Se}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:O,strokeWidth:Se,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:O,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:O,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:O,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:O,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:O,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:Se})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:O,strokeWidth:Se}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:O,strokeWidth:Se,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:O,strokeWidth:Se}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:O,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:O,strokeWidth:Se})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:O,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:O,strokeWidth:Se,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:O,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:O,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:O,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:O,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:O,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:O,opacity:".08",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:O,strokeWidth:Se,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:O,strokeWidth:Se,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:O,strokeWidth:Se,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:O,strokeWidth:Se,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:O,strokeWidth:Se,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:O,strokeWidth:Se,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:O,strokeWidth:Se}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:O,strokeWidth:Se,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:O,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:O,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:O,strokeWidth:Se,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:O,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:O,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:O,strokeWidth:Se}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:O,opacity:".2"})]});default:return null}}function x4({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${je.placeScroll} ${c||""}`,children:Ux.map(d=>l.jsxs("div",{className:je.paletteSection,children:[l.jsx("div",{className:je.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${je.paletteItem} ${t===h.type?je.active:""} ${u?je.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:je.paletteItemIcon,children:l.jsx(y4,{type:h.type})}),l.jsx("span",{className:je.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function b4({value:t,suffix:n}){const[i,a]=y.useState(null),[c,u]=y.useState(n),[d,h]=y.useState("up"),p=y.useRef(t),g=y.useRef(n),_=y.useRef(),x=i!==null&&c!==n;return y.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,g.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(g.current),p.current=t,g.current=n,clearTimeout(_.current),_.current=Ut(()=>a(null),250)}else g.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):x?l.jsxs("span",{className:je.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${je.rollingNum} ${d==="up"?je.exitUp:je.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${je.rollingNum} ${d==="up"?je.enterUp:je.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:je.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${je.rollingNum} ${d==="up"?je.exitUp:je.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${je.rollingNum} ${d==="up"?je.enterUp:je.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function v4({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:g,blankCanvas:_,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:S,Tooltip:C}){const[k,j]=y.useState(!1),[M,I]=y.useState("exit"),[L,N]=y.useState(!1),[P,X]=y.useState(!0),Y=y.useRef(0),U=y.useRef(""),Z=y.useRef(0),oe=y.useRef(),ie=y.useRef(null),[be,Te]=y.useState("");y.useEffect(()=>(u?(j(!0),clearTimeout(oe.current),cancelAnimationFrame(Z.current),Z.current=al(()=>{Z.current=al(()=>{I("enter")})})):(cancelAnimationFrame(Z.current),I("exit"),clearTimeout(oe.current),oe.current=Ut(()=>{j(!1),d==null||d()},200)),()=>cancelAnimationFrame(Z.current)),[u]);const Q=h>0||a>0,le=h+a;return le>0&&(Y.current=le,U.current=_?le===1?"Component":"Components":le===1?"Change":"Changes"),y.useEffect(()=>{if(Q)L?X(!1):(X(!0),N(!0),al(()=>{al(()=>{X(!1)})}));else{X(!0);const z=Ut(()=>N(!1),300);return()=>clearTimeout(z)}},[Q]),y.useEffect(()=>{if(!k)return;const z=ie.current;if(!z)return;const ae=()=>Te(g4(z));ae(),z.addEventListener("scroll",ae,{passive:!0});const q=new ResizeObserver(ae);return q.observe(z),()=>{z.removeEventListener("scroll",ae),q.disconnect()}},[k]),k?l.jsxs("div",{className:`${je.palette} ${je[M]} ${i?"":je.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:z=>z.stopPropagation(),onMouseDown:z=>z.stopPropagation(),onTransitionEnd:z=>{z.target===z.currentTarget&&(u||(clearTimeout(oe.current),j(!1),I("exit"),d==null||d()))},children:[l.jsxs("div",{className:je.paletteHeader,children:[l.jsx("div",{className:je.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:je.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${je.canvasToggle} ${_?je.active:""}`,onClick:()=>x(!_),children:[l.jsx("span",{className:je.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:je.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${je.wireframePurposeWrap} ${_?"":je.collapsed}`,children:l.jsx("div",{className:je.wireframePurposeInner,children:l.jsx("textarea",{className:je.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:z=>S(z.target.value),rows:2})})}),l.jsx(x4,{activeType:t,onSelect:n,onDragStart:g,scrollRef:ie,fadeClass:be,blankCanvas:_}),L&&l.jsx("div",{className:`${je.paletteFooterWrap} ${P?je.footerHidden:""}`,children:l.jsx("div",{className:je.paletteFooterInner,children:l.jsx("div",{className:je.paletteFooterInnerContent,children:l.jsxs("div",{className:je.paletteFooter,children:[l.jsx("span",{className:je.paletteFooterCount,children:l.jsx(b4,{value:Y.current,suffix:U.current})}),l.jsx("button",{className:je.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function dl(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function Po(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=dl(i)}return null}function w4(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(g=>g.length>2&&!g.match(/^[a-z]{1,2}$/)&&!g.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=dl(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function ul(t){var a,c,u,d,h,p,g,_;const n=w4(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=Po(t,"svg");if(x){const b=dl(x);if(b instanceof HTMLElement)return{name:`graphic in ${ul(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=dl(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),S=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:S?{name:`input [${S}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(g=t.textContent)==null?void 0:g.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(_=t.textContent)==null?void 0:_.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),S=t.getAttribute("aria-label");if(S)return{name:`${i} [${S}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const C=x.split(/[\s_-]+/).map(k=>k.replace(/[A-Z0-9]{5,}.*$/,"")).filter(k=>k.length>2&&!/^[a-z]{1,2}$/.test(k)).slice(0,2);if(C.length>0)return{name:C.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function sc(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function Fu(t){const n=dl(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(_=>_!==t&&_ instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(_=>{var C;const x=_.tagName.toLowerCase(),b=_.className;let S="";if(typeof b=="string"&&b){const k=b.split(/\s+/).map(j=>j.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(j=>j.length>2&&!/^[a-z]{1,2}$/.test(j));k&&(S=`.${k}`)}if(x==="button"||x==="a"){const k=(C=_.textContent)==null?void 0:C.trim().slice(0,15);if(k)return`${x}${S} "${k}"`}return`${x}${S}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const _=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));_&&(h=`.${_}`)}const p=n.children.length,g=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+g}function oc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var Vx=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),S4=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),C4=new Set(["input","textarea","select"]),k4=new Set(["img","video","canvas","svg"]),j4=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Xu(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;S4.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:C4.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:k4.has(a)?c=["width","height","objectFit","borderRadius"]:j4.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!Vx.has(h)&&(i[u]=h)}return i}var M4=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function qu(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of M4){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!Vx.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function T4(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function Gu(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Ku(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=dl(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var E4=new Set(["nav","header","main","section","article","footer","aside"]),Rm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},zy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},A4=new Set(["script","style","noscript","link","meta"]),D4=40;function Yx(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Sr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":Sr(i)} > ${n}:nth-child(${c})`}return n}function jd(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&Rm[a])return Rm[a];if(zy[n])return zy[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=ul(t);return u.charAt(0).toUpperCase()+u.slice(1)}function Wx(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function Fx(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function N4(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(A4.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<D4)return;const g=E4.has(d),_=c.getAttribute("role")&&Rm[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!g&&!_&&!x)return;const b=window.scrollY,S=Yx(c),C={x:p.x,y:S?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:jd(c),tagName:d,selector:Sr(c),role:c.getAttribute("role"),className:Wx(c),textSnippet:Fx(c),originalRect:C,currentRect:{...C},originalIndex:u,isFixed:S})}),a}function R4(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=Yx(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:jd(t),tagName:t.tagName.toLowerCase(),selector:Sr(t),role:t.getAttribute("role"),className:Wx(t),textSnippet:Fx(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var $y={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Iy=["nw","n","ne","e","se","s","sw","w"],Qu=24,Py=16,Zu=5;function Hy(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,g=t.y,_=t.y+t.height,x=t.y+t.height/2,b=[];for(const Y of n)i.has(Y.id)||b.push(Y.currentRect);a&&b.push(...a);for(const Y of b){const U=Y.x,Z=Y.x+Y.width,oe=Y.x+Y.width/2,ie=Y.y,be=Y.y+Y.height,Te=Y.y+Y.height/2;for(const Q of[d,h,p])for(const le of[U,Z,oe]){const z=le-Q;Math.abs(z)<Zu&&Math.abs(z)<Math.abs(c)&&(c=z)}for(const Q of[g,_,x])for(const le of[ie,be,Te]){const z=le-Q;Math.abs(z)<Zu&&Math.abs(z)<Math.abs(u)&&(u=z)}}const S=Math.abs(c)<Zu?c:0,C=Math.abs(u)<Zu?u:0,k=[],j=new Set,M=d+S,I=h+S,L=p+S,N=g+C,P=_+C,X=x+C;for(const Y of b){const U=Y.x,Z=Y.x+Y.width,oe=Y.x+Y.width/2,ie=Y.y,be=Y.y+Y.height,Te=Y.y+Y.height/2;for(const Q of[U,oe,Z])for(const le of[M,L,I])if(Math.abs(le-Q)<.5){const z=`x:${Math.round(Q)}`;j.has(z)||(j.add(z),k.push({axis:"x",pos:Q}))}for(const Q of[ie,Te,be])for(const le of[N,X,P])if(Math.abs(le-Q)<.5){const z=`y:${Math.round(Q)}`;j.has(z)||(j.add(z),k.push({axis:"y",pos:Q}))}}return{dx:S,dy:C,guides:k}}var B4=new Set(["script","style","noscript","link","meta","br","hr"]);function Uy(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(B4.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Py&&i.height>=Py)return n;n=n.parentElement}return null}function L4({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:g,onDragEnd:_,clearSignal:x}){const{sections:b}=t,S=y.useRef(t);S.current=t;const[C,k]=y.useState(new Set),[j,M]=y.useState(!1),I=y.useRef(x);y.useEffect(()=>{x!==void 0&&x!==I.current&&(I.current=x,b.length>0&&M(!0))},[x,b.length]);const L=y.useRef(p);y.useEffect(()=>{p!==L.current&&(L.current=p,k(new Set))},[p]);const[N,P]=y.useState(null),[X,Y]=y.useState(!1),U=y.useRef(!1),Z=y.useCallback(H=>{const J=b.find(ne=>ne.id===H);J&&(U.current=!!J.note,P(H),Y(!1))},[b]),oe=y.useCallback(()=>{N&&(Y(!0),Ut(()=>{P(null),Y(!1)},150))},[N]),ie=y.useCallback(H=>{N&&(n({...t,sections:b.map(J=>J.id===N?{...J,note:H.trim()||void 0}:J)}),oe())},[N,b,t,n,oe]);y.useEffect(()=>{a&&N&&oe()},[a]);const[be,Te]=y.useState(new Set),Q=y.useRef(new Map),[le,z]=y.useState(null),[ae,q]=y.useState(null),[me,Me]=y.useState([]),[D,te]=y.useState(0),G=y.useRef(null),de=y.useRef(new Set),ke=y.useRef(new Map),[Ne,ve]=y.useState(new Map),[st,Ge]=y.useState(new Map),$e=y.useRef(new Set),rt=y.useRef(new Map),tt=y.useRef(h);tt.current=h;const $t=y.useRef(g);$t.current=g;const lt=y.useRef(_);lt.current=_,y.useEffect(()=>{u&&k(new Set)},[u]);const[Rt,Oe]=y.useState(()=>!t.sections.some(H=>{const J=H.originalRect,ne=H.currentRect;return Math.abs(J.x-ne.x)>1||Math.abs(J.y-ne.y)>1||Math.abs(J.width-ne.width)>1||Math.abs(J.height-ne.height)>1}));y.useEffect(()=>{if(!Rt){const H=Ut(()=>Oe(!0),380);return()=>clearTimeout(H)}},[]);const ct=y.useRef(new Set);y.useEffect(()=>{ct.current=new Set(b.map(H=>H.selector))},[b]),y.useEffect(()=>{const H=()=>te(window.scrollY);return H(),window.addEventListener("scroll",H,{passive:!0}),window.addEventListener("resize",H,{passive:!0}),()=>{window.removeEventListener("scroll",H),window.removeEventListener("resize",H)}},[]),y.useEffect(()=>{const H=J=>{if(G.current){z(null);return}const ne=document.elementFromPoint(J.clientX,J.clientY);if(!ne){z(null);return}if(ne.closest("[data-feedback-toolbar]")){z(null);return}if(ne.closest("[data-design-placement]")){z(null);return}if(ne.closest("[data-annotation-popup]")){z(null);return}const _e=Uy(ne);if(!_e){z(null);return}for(const Ue of ct.current)try{const De=document.querySelector(Ue);if(De&&(De===_e||_e.contains(De))){z(null);return}}catch{}const Xe=_e.getBoundingClientRect();z({x:Xe.x,y:Xe.y,w:Xe.width,h:Xe.height})};return document.addEventListener("mousemove",H,{passive:!0}),()=>document.removeEventListener("mousemove",H)},[b]),y.useEffect(()=>{const H=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=H}},[]),y.useEffect(()=>{const H=J=>{var De,St,Ye,bt;if(G.current||J.button!==0)return;const ne=J.target;if(!ne||ne.closest("[data-feedback-toolbar]")||ne.closest("[data-design-placement]")||ne.closest("[data-annotation-popup]"))return;const _e=Uy(ne);let Xe=!1;if(_e)for(const ht of ct.current)try{const Ie=document.querySelector(ht);if(Ie&&(Ie===_e||_e.contains(Ie))){Xe=!0;break}}catch{}const Ue=!!(J.shiftKey||J.metaKey||J.ctrlKey);if(_e&&!Xe){J.preventDefault(),J.stopPropagation();const ht=R4(_e),Ie=[...b,ht],nt=[...t.originalOrder,ht.id];n({...t,sections:Ie,originalOrder:nt});const Vt=new Set([ht.id]);k(Vt),(De=tt.current)==null||De.call(tt,Vt,Ue),z(null);const un=J.clientX,qe=J.clientY,Bt={x:ht.currentRect.x,y:ht.currentRect.y};ht.originalRect;let Ot=!1,zt=0,rn=0;G.current="move";const mt=Rn=>{var Jt;const os=Rn.clientX-un,gn=Rn.clientY-qe;if(!Ot&&(Math.abs(os)>2||Math.abs(gn)>2)&&(Ot=!0),!Ot)return;const oo={x:Bt.x+os,y:Bt.y+gn,width:ht.currentRect.width,height:ht.currentRect.height},is=Hy(oo,Ie,new Set([ht.id]),d);Me(is.guides);const es=os+is.dx,Gt=gn+is.dy;zt=es,rn=Gt;const kn=document.querySelector(`[data-rearrange-section="${ht.id}"]`);kn&&(kn.style.transform=`translate(${es}px, ${Gt}px)`),ve(new Map([[ht.id,{x:Bt.x+es,y:Bt.y+Gt,width:ht.currentRect.width,height:ht.currentRect.height}]])),(Jt=$t.current)==null||Jt.call($t,es,Gt)},Ft=()=>{var os;window.removeEventListener("mousemove",mt),window.removeEventListener("mouseup",Ft),G.current=null,Me([]),ve(new Map);const Rn=document.querySelector(`[data-rearrange-section="${ht.id}"]`);Rn&&(Rn.style.transform=""),Ot&&n({...t,sections:Ie.map(gn=>gn.id===ht.id?{...gn,currentRect:{...gn.currentRect,x:Math.max(0,Bt.x+zt),y:Math.max(0,Bt.y+rn)}}:gn),originalOrder:nt}),(os=lt.current)==null||os.call(lt,zt,rn,Ot)};window.addEventListener("mousemove",mt),window.addEventListener("mouseup",Ft)}else if(Xe&&_e){J.preventDefault();for(const ht of b)try{const Ie=document.querySelector(ht.selector);if(Ie&&Ie===_e){const nt=new Set([ht.id]);k(nt),(St=tt.current)==null||St.call(tt,nt,Ue);return}}catch{}Ue||(k(new Set),(Ye=tt.current)==null||Ye.call(tt,new Set,!1))}else Ue||(k(new Set),(bt=tt.current)==null||bt.call(tt,new Set,!1))};return document.addEventListener("mousedown",H,!0),()=>document.removeEventListener("mousedown",H,!0)},[b,t,n]),y.useEffect(()=>{const H=J=>{const ne=J.target;if(!(ne.tagName==="INPUT"||ne.tagName==="TEXTAREA"||ne.isContentEditable)){if((J.key==="Backspace"||J.key==="Delete")&&C.size>0){J.preventDefault();const _e=new Set(C);Te(Xe=>{const Ue=new Set(Xe);for(const De of _e)Ue.add(De);return Ue}),k(new Set),Ut(()=>{const Xe=S.current;n({...Xe,sections:Xe.sections.filter(Ue=>!_e.has(Ue.id)),originalOrder:Xe.originalOrder.filter(Ue=>!_e.has(Ue))}),Te(Ue=>{const De=new Set(Ue);for(const St of _e)De.delete(St);return De})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(J.key)&&C.size>0){J.preventDefault();const _e=J.shiftKey?20:1,Xe=J.key==="ArrowLeft"?-_e:J.key==="ArrowRight"?_e:0,Ue=J.key==="ArrowUp"?-_e:J.key==="ArrowDown"?_e:0;n({...t,sections:b.map(De=>C.has(De.id)?{...De,currentRect:{...De.currentRect,x:Math.max(0,De.currentRect.x+Xe),y:Math.max(0,De.currentRect.y+Ue)}}:De)});return}J.key==="Escape"&&C.size>0&&k(new Set)}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[C,b,t,n]);const ce=y.useCallback((H,J)=>{var un;if(H.button!==0)return;const ne=H.target;if(ne.closest(`.${je.handle}`)||ne.closest(`.${je.deleteButton}`))return;H.preventDefault(),H.stopPropagation();let _e;H.shiftKey||H.metaKey||H.ctrlKey?(_e=new Set(C),_e.has(J)?_e.delete(J):_e.add(J)):C.has(J)?_e=new Set(C):_e=new Set([J]),k(_e),(_e.size!==C.size||[..._e].some(qe=>!C.has(qe)))&&((un=tt.current)==null||un.call(tt,_e,!!(H.shiftKey||H.metaKey||H.ctrlKey)));const Ue=H.clientX,De=H.clientY,St=new Map;for(const qe of b)_e.has(qe.id)&&St.set(qe.id,{x:qe.currentRect.x,y:qe.currentRect.y});G.current="move";let Ye=!1,bt=0,ht=0;const Ie=new Map;for(const qe of b)if(_e.has(qe.id)){const Bt=document.querySelector(`[data-rearrange-section="${qe.id}"]`);Ie.set(qe.id,{outlineEl:Bt,curW:qe.currentRect.width,curH:qe.currentRect.height})}const nt=qe=>{var is;const Bt=qe.clientX-Ue,Ot=qe.clientY-De;if(Bt===0&&Ot===0)return;Ye=!0;let zt=1/0,rn=1/0,mt=-1/0,Ft=-1/0;for(const[es,{curW:Gt,curH:kn}]of Ie){const Jt=St.get(es);if(!Jt)continue;const yn=Jt.x+Bt,Ze=Jt.y+Ot;zt=Math.min(zt,yn),rn=Math.min(rn,Ze),mt=Math.max(mt,yn+Gt),Ft=Math.max(Ft,Ze+kn)}const Rn=Hy({x:zt,y:rn,width:mt-zt,height:Ft-rn},b,_e,d),os=Bt+Rn.dx,gn=Ot+Rn.dy;bt=os,ht=gn,Me(Rn.guides);for(const[,{outlineEl:es}]of Ie)es&&(es.style.transform=`translate(${os}px, ${gn}px)`);const oo=new Map;for(const[es,{curW:Gt,curH:kn}]of Ie){const Jt=St.get(es);if(Jt){const yn={x:Math.max(0,Jt.x+os),y:Math.max(0,Jt.y+gn),width:Gt,height:kn};oo.set(es,yn)}}ve(oo),(is=$t.current)==null||is.call($t,os,gn)},Vt=qe=>{var Bt,Ot;window.removeEventListener("mousemove",nt),window.removeEventListener("mouseup",Vt),G.current=null,Me([]),ve(new Map);for(const[,{outlineEl:zt}]of Ie)zt&&(zt.style.transform="");if(Ye){const zt=qe.clientX-Ue,rn=qe.clientY-De;if(Math.abs(zt)<5&&Math.abs(rn)<5)n({...t,sections:b.map(mt=>{const Ft=St.get(mt.id);return Ft?{...mt,currentRect:{...mt.currentRect,x:Ft.x,y:Ft.y}}:mt})});else{n({...t,sections:b.map(mt=>{const Ft=St.get(mt.id);return Ft?{...mt,currentRect:{...mt.currentRect,x:Math.max(0,Ft.x+bt),y:Math.max(0,Ft.y+ht)}}:mt})}),(Bt=lt.current)==null||Bt.call(lt,bt,ht,!0);return}}(Ot=lt.current)==null||Ot.call(lt,0,0,!1)};window.addEventListener("mousemove",nt),window.addEventListener("mouseup",Vt)},[C,b,t,n]),He=y.useCallback((H,J,ne)=>{H.preventDefault(),H.stopPropagation();const _e=b.find(nt=>nt.id===J);if(!_e)return;k(new Set([J])),G.current="resize";const Xe=H.clientX,Ue=H.clientY,De={..._e.currentRect};_e.originalRect;const St=De.width/De.height;let Ye={...De};const bt=document.querySelector(`[data-rearrange-section="${J}"]`),ht=nt=>{const Vt=nt.clientX-Xe,un=nt.clientY-Ue;let qe=De.x,Bt=De.y,Ot=De.width,zt=De.height;if(ne.includes("e")&&(Ot=Math.max(Qu,De.width+Vt)),ne.includes("w")&&(Ot=Math.max(Qu,De.width-Vt),qe=De.x+De.width-Ot),ne.includes("s")&&(zt=Math.max(Qu,De.height+un)),ne.includes("n")&&(zt=Math.max(Qu,De.height-un),Bt=De.y+De.height-zt),nt.shiftKey)if(ne.length===2){const mt=Math.abs(Ot-De.width),Ft=Math.abs(zt-De.height);mt>Ft?zt=Ot/St:Ot=zt*St,ne.includes("w")&&(qe=De.x+De.width-Ot),ne.includes("n")&&(Bt=De.y+De.height-zt)}else ne==="e"||ne==="w"?zt=Ot/St:Ot=zt*St,ne==="w"&&(qe=De.x+De.width-Ot),ne==="n"&&(Bt=De.y+De.height-zt);Ye={x:qe,y:Bt,width:Ot,height:zt},bt&&(bt.style.left=`${qe}px`,bt.style.top=`${Bt-D}px`,bt.style.width=`${Ot}px`,bt.style.height=`${zt}px`),q({x:nt.clientX+12,y:nt.clientY+12,text:`${Math.round(Ot)} × ${Math.round(zt)}`}),ve(new Map([[J,Ye]]))},Ie=()=>{window.removeEventListener("mousemove",ht),window.removeEventListener("mouseup",Ie),q(null),G.current=null,ve(new Map),n({...t,sections:b.map(nt=>nt.id===J?{...nt,currentRect:Ye}:nt)})};window.addEventListener("mousemove",ht),window.addEventListener("mouseup",Ie)},[b,t,n,D]),Ke=y.useCallback(H=>{Te(J=>{const ne=new Set(J);return ne.add(H),ne}),k(J=>{const ne=new Set(J);return ne.delete(H),ne}),Ut(()=>{const J=S.current;n({...J,sections:J.sections.filter(ne=>ne.id!==H),originalOrder:J.originalOrder.filter(ne=>ne!==H)}),Te(ne=>{const _e=new Set(ne);return _e.delete(H),_e})},180)},[n]),ze=H=>{const J=H.originalRect,ne=H.currentRect;return Math.abs(J.x-ne.x)>1||Math.abs(J.y-ne.y)>1||Math.abs(J.width-ne.width)>1||Math.abs(J.height-ne.height)>1},Tt=H=>{const J=H.originalRect,ne=H.currentRect;return Math.abs(J.x-ne.x)>1||Math.abs(J.y-ne.y)>1},ut=H=>{const J=H.originalRect,ne=H.currentRect;return Math.abs(J.width-ne.width)>1||Math.abs(J.height-ne.height)>1};for(const H of b)ke.current.has(H.id)||(Tt(H)?ke.current.set(H.id,"move"):ut(H)&&ke.current.set(H.id,"resize"));for(const H of ke.current.keys())b.some(J=>J.id===H)||ke.current.delete(H);const at=b.filter(H=>{try{if(be.has(H.id)||C.has(H.id))return!0;const J=document.querySelector(H.selector);if(!J)return!1;const ne=J.getBoundingClientRect(),_e=H.originalRect;return Math.abs(ne.width-_e.width)+Math.abs(ne.height-_e.height)<200}catch{return!1}}),ot=at.filter(H=>ze(H)),it=at.filter(H=>!ze(H)),At=new Set(ot.map(H=>H.id));for(const H of de.current)At.has(H)||de.current.delete(H);const Qe=[...At].sort().join(",");for(const H of ot)rt.current.set(H.id,{currentRect:H.currentRect,originalRect:H.originalRect,isFixed:H.isFixed});return y.useEffect(()=>{const H=$e.current;$e.current=At;const J=new Map;for(const ne of H)if(!At.has(ne)){if(!b.some(Xe=>Xe.id===ne))continue;const _e=rt.current.get(ne);_e&&(J.set(ne,{orig:_e.originalRect,target:_e.currentRect,isFixed:_e.isFixed}),rt.current.delete(ne))}if(J.size>0){Ge(_e=>{const Xe=new Map(_e);for(const[Ue,De]of J)Xe.set(Ue,De);return Xe});const ne=Ut(()=>{Ge(_e=>{const Xe=new Map(_e);for(const Ue of J.keys())Xe.delete(Ue);return Xe})},250);return()=>clearTimeout(ne)}},[Qe,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${je.rearrangeOverlay} ${i?"":je.light} ${a?je.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[le&&l.jsx("div",{className:je.hoverHighlight,style:{left:le.x,top:le.y,width:le.w,height:le.h}}),it.map(H=>{const J=H.currentRect,ne=H.isFixed?J.y:J.y-D,_e=$y,Xe=C.has(H.id);return l.jsxs("div",{"data-rearrange-section":H.id,className:`${je.sectionOutline} ${Xe?je.selected:""} ${j||a||be.has(H.id)?je.exiting:""}`,style:{left:J.x,top:ne,width:J.width,height:J.height,borderColor:_e.border,backgroundColor:_e.bg,...Rt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Ue=>ce(Ue,H.id),onDoubleClick:()=>Z(H.id),children:[l.jsx("span",{className:je.sectionLabel,style:{backgroundColor:_e.pill},children:H.label}),l.jsx("span",{className:`${je.sectionAnnotation} ${H.note?je.annotationVisible:""}`,children:(H.note&&Q.current.set(H.id,H.note),H.note||Q.current.get(H.id)||"")}),l.jsxs("span",{className:je.sectionDimensions,children:[Math.round(J.width)," × ",Math.round(J.height)]}),l.jsx("div",{className:je.deleteButton,onMouseDown:Ue=>Ue.stopPropagation(),onClick:()=>Ke(H.id),children:"✕"}),Iy.map(Ue=>l.jsx("div",{className:`${je.handle} ${je[`handle${Ue.charAt(0).toUpperCase()}${Ue.slice(1)}`]}`,onMouseDown:De=>He(De,H.id,Ue)},Ue))]},H.id)}),ot.map(H=>{const J=H.currentRect,ne=H.isFixed?J.y:J.y-D,_e=C.has(H.id),Xe=Tt(H),Ue=ut(H);if(u&&!_e)return null;const St=!de.current.has(H.id);return St&&de.current.add(H.id),l.jsxs("div",{"data-rearrange-section":H.id,className:`${je.ghostOutline} ${_e?je.selected:""} ${j||a||be.has(H.id)?je.exiting:""}`,style:{left:J.x,top:ne,width:J.width,height:J.height,...Rt?{}:{opacity:0,animation:"none",transition:"none"},...St?{}:{animation:"none"}},onMouseDown:Ye=>ce(Ye,H.id),onDoubleClick:()=>Z(H.id),children:[l.jsx("span",{className:je.sectionLabel,style:{backgroundColor:$y.pill},children:H.label}),l.jsx("span",{className:`${je.sectionAnnotation} ${H.note?je.annotationVisible:""}`,children:(H.note&&Q.current.set(H.id,H.note),H.note||Q.current.get(H.id)||"")}),l.jsxs("span",{className:je.sectionDimensions,children:[Math.round(J.width)," × ",Math.round(J.height)]}),l.jsx("div",{className:je.deleteButton,onMouseDown:Ye=>Ye.stopPropagation(),onClick:()=>Ke(H.id),children:"✕"}),Iy.map(Ye=>l.jsx("div",{className:`${je.handle} ${je[`handle${Ye.charAt(0).toUpperCase()}${Ye.slice(1)}`]}`,onMouseDown:bt=>He(bt,H.id,Ye)},Ye)),l.jsx("span",{className:je.ghostBadge,children:(()=>{const Ye=ke.current.get(H.id);if(Xe&&Ue){const[bt,ht]=Ye==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",bt," ",l.jsxs("span",{className:je.ghostBadgeExtra,children:["& ",ht]})]})}return`Suggested ${Ue?"Resize":"Move"}`})()})]},H.id)})]}),!u&&(()=>{const H=[];for(const J of ot){const ne=Ne.get(J.id);H.push({id:J.id,orig:J.originalRect,target:ne||J.currentRect,isFixed:J.isFixed,isSelected:C.has(J.id),isExiting:be.has(J.id)})}for(const[J,ne]of Ne)if(!H.some(_e=>_e.id===J)){const _e=b.find(Xe=>Xe.id===J);_e&&H.push({id:J,orig:_e.originalRect,target:ne,isFixed:_e.isFixed,isSelected:C.has(J)})}for(const[J,ne]of st)H.some(_e=>_e.id===J)||H.push({id:J,orig:ne.orig,target:ne.target,isFixed:ne.isFixed,isSelected:!1,isExiting:!0});return H.length===0?null:l.jsxs("svg",{className:`${je.connectorSvg} ${j||a?je.connectorExiting:""}`,children:[H.map(({id:J,orig:ne,target:_e,isFixed:Xe,isSelected:Ue,isExiting:De})=>{const St=ne.x+ne.width/2,Ye=(Xe?ne.y:ne.y-D)+ne.height/2,bt=_e.x+_e.width/2,ht=(Xe?_e.y:_e.y-D)+_e.height/2,Ie=bt-St,nt=ht-Ye,Vt=Math.sqrt(Ie*Ie+nt*nt);if(Vt<2)return null;const un=Math.min(1,Vt/40),qe=Math.min(Vt*.3,60),Bt=Vt>0?-nt/Vt:0,Ot=Vt>0?Ie/Vt:0,zt=(St+bt)/2+Bt*qe,rn=(Ye+ht)/2+Ot*qe,mt=Ne.has(J),Ft=mt||Ue?1:.4,Rn=mt||Ue?1:.5;return l.jsxs("g",{className:De?je.connectorExiting:"",children:[l.jsx("path",{className:je.connectorLine,d:`M ${St} ${Ye} Q ${zt} ${rn} ${bt} ${ht}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Ft*un}),l.jsx("circle",{className:je.connectorDot,cx:St,cy:Ye,r:4*un,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Rn*un,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:je.connectorDot,cx:bt,cy:ht,r:4*un,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Rn*un,filter:"url(#connDotShadow)"})]},`conn-${J}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),N&&(()=>{var ht;const H=b.find(Ie=>Ie.id===N);if(!H)return null;const J=H.currentRect,ne=H.isFixed?J.y:J.y-D,_e=J.x+J.width/2,Xe=ne-8,Ue=ne+J.height+8,De=Xe>200,St=Ue<window.innerHeight-100,Ye=Math.max(160,Math.min(window.innerWidth-160,_e));let bt;return De?bt={left:Ye,bottom:window.innerHeight-Xe}:St?bt={left:Ye,top:Ue}:bt={left:Ye,top:Math.max(80,window.innerHeight/2-80)},l.jsx(kd,{element:H.label,placeholder:"Add a note about this section",initialValue:(ht=H.note)!=null?ht:"",submitLabel:U.current?"Save":"Set",onSubmit:ie,onCancel:oe,onDelete:U.current?()=>{ie("")}:void 0,isExiting:X,lightMode:!i,style:bt})})(),ae&&l.jsx("div",{className:je.sizeIndicator,style:{left:ae.x,top:ae.y},"data-feedback-toolbar":!0,children:ae.text}),me.map((H,J)=>l.jsx("div",{className:je.guideLine,style:H.axis==="x"?{position:"fixed",left:H.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:H.pos-D,width:"100vw",height:1}},`${H.axis}-${H.pos}-${J}`))]})}var Bm=new Set(["script","style","noscript","link","meta","br","hr"]);function O4(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||Bm.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:jd(c),selector:Sr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||Bm.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const g=h.getBoundingClientRect();g.height<10||g.width<10||n.push({label:jd(h),selector:Sr(h),top:g.top,bottom:g.bottom,left:g.left,right:g.right,area:g.width*g.height})}}}return n}function z4(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function $4(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Lm(t,n){const i=n?z4(n):O4(),a=$4(t);let c=null,u=null,d=null,h=null,p=null;for(const C of i){if(Math.abs(C.left-a.left)<2&&Math.abs(C.top-a.top)<2&&Math.abs(C.right-C.left-t.width)<2&&Math.abs(C.bottom-C.top-t.height)<2)continue;C.left<=a.left+2&&C.right>=a.right-2&&C.top<=a.top+2&&C.bottom>=a.bottom-2&&C.area>a.area*1.5&&(!p||C.area<p._area)&&(p={label:C.label,selector:C.selector,_area:C.area});const k=a.right>C.left+5&&a.left<C.right-5,j=a.bottom>C.top+5&&a.top<C.bottom-5;if(k&&C.bottom<=a.top+5){const M=Math.round(a.top-C.bottom);(!c||M<c._dist)&&(c={label:C.label,selector:C.selector,gap:Math.max(0,M),_dist:M})}if(k&&C.top>=a.bottom-5){const M=Math.round(C.top-a.bottom);(!u||M<u._dist)&&(u={label:C.label,selector:C.selector,gap:Math.max(0,M),_dist:M})}if(j&&C.right<=a.left+5){const M=Math.round(a.left-C.right);(!d||M<d._dist)&&(d={label:C.label,selector:C.selector,gap:Math.max(0,M),_dist:M})}if(j&&C.left>=a.right-5){const M=Math.round(C.left-a.right);(!h||M<h._dist)&&(h={label:C.label,selector:C.selector,gap:Math.max(0,M),_dist:M})}}const g=window.innerWidth,_=window.innerHeight,x=P4(t,g),b=C=>C?{label:C.label,selector:C.selector,gap:C.gap}:null,S=I4(a,t,g,_,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:S}}function I4(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const g=u.find(_=>_.label===c.label&&_.selector===c.selector&&Math.abs(_.area-c._area)<10);if(g){const _=[];t.left<g.left-2&&_.push("left"),t.right>g.right+2&&_.push("right"),t.top<g.top-2&&_.push("top"),t.bottom>g.bottom+2&&_.push("bottom"),_.length>0&&(d.container={label:c.label,edges:_},h=!0)}}return h?d:null}function P4(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function Xx(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function qx(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=Xx(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function H4(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(Xx(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var Vy=15;function Yy(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<Vy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.x-g.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,g)=>p+g.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<Vy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.y-g.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,g)=>p+g.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function U4(t){var d;if(t.length<2)return[];const n=Yy(t.map(h=>({label:h.label,rect:h.originalRect}))),i=Yy(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let g=null,_=0;for(const x of i){const b=x.labels.filter(S=>p.has(S)).length;b>=2&&b>_&&(g=x,_=b)}if(g){const x=g.labels.filter(S=>p.has(S)),b=x.join(", ");if(g.type!==h.type){const S=h.type==="row"?"y":"x",C=g.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${S}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${g.type} (${C}≈${g.sharedEdge}, ${g.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-g.sharedEdge)>20||Math.abs(h.avgGap-g.avgGap)>5){const S=h.type==="row"?"y":"x",C=Math.abs(h.sharedEdge-g.sharedEdge)>20?` ${S}: ${h.sharedEdge} → ${g.sharedEdge}`:"",k=Math.abs(h.avgGap-g.avgGap)>5?` gaps: ${h.avgGap}px → ${g.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${C}${k}`)}x.forEach(S=>c.add(S))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(S=>c.add(S))}}for(const h of i){if(h.labels.every(_=>c.has(_))||h.labels.filter(_=>!c.has(_)).length<2)continue;if(!n.some(_=>_.labels.filter(b=>h.labels.includes(b)).length>=2)){const _=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${_}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const g=Math.round(p.currentRect.x/5)*5;((d=h[g])!=null?d:h[g]=[]).push(p.label)}for(const[p,g]of Object.entries(h))g.length>=2&&a.push(`**${g.join(", ")}**: shared left edge at x≈${p}`)}return a}function Gx(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||Bm.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const g of Array.from(p.children))a(g)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const g=getComputedStyle(h);if(g.maxWidth&&g.maxWidth!=="none"&&g.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Sr(h)}}}return{viewport:t,contentArea:null}}function V4(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Sr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function Kx(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),g=t.x+t.width/2,_=Math.abs(g-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),_&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function Qx(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function Y4(t){const n=V4(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Wy(t,n,i,a="standard"){var j,M,I,L;if(t.length===0)return"";const c=[...t].sort((N,P)=>Math.abs(N.y-P.y)<20?N.x-P.x:N.y-P.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((N,P)=>{var Y;const X=((Y=Hi[N.type])==null?void 0:Y.label)||N.type;u+=`${P+1}. **${X}** — \`${Math.round(N.width)}×${Math.round(N.height)}px\` at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`}),u;const d=Gx(n);u+=Qx(d),u+=`### Components
`,c.forEach((N,P)=>{var be;const X=((be=Hi[N.type])==null?void 0:be.label)||N.type,Y={x:N.x,y:N.y,width:N.width,height:N.height};u+=`${P+1}. **${X}** — \`${Math.round(N.width)}×${Math.round(N.height)}px\` at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`;const U=Lm(Y),oe=qx(U,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Te of oe)u+=`   - ${Te}
`;const ie=Kx(Y,d);ie&&(u+=`   - CSS: ${ie}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const N of c){const P=h.find(X=>Math.abs(X.y-N.y)<30);P?P.items.push(N):h.push({y:N.y,items:[N]})}if(h.sort((N,P)=>N.y-P.y),h.forEach((N,P)=>{N.items.sort((Y,U)=>Y.x-U.x);const X=N.items.map(Y=>{var U;return((U=Hi[Y.type])==null?void 0:U.label)||Y.type});if(N.items.length===1){const U=N.items[0].width>n.width*.8;u+=`- Row ${P+1} (y≈${Math.round(N.y)}): ${X[0]}${U?" — full width":""}
`}else u+=`- Row ${P+1} (y≈${Math.round(N.y)}): ${X.join(" | ")} — ${N.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let N=0;N<c.length-1;N++){const P=c[N],X=c[N+1],Y=((j=Hi[P.type])==null?void 0:j.label)||P.type,U=((M=Hi[X.type])==null?void 0:M.label)||X.type,Z=Math.round(X.y-(P.y+P.height)),oe=Math.round(X.x-(P.x+P.width));Math.abs(P.y-X.y)<30?u+=`- ${Y} → ${U}: \`${oe}px\` horizontal gap
`:u+=`- ${Y} → ${U}: \`${Z}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let N=0;N<c.length;N++)for(let P=N+1;P<c.length;P++){const X=c[N],Y=c[P],U=((I=Hi[X.type])==null?void 0:I.label)||X.type,Z=((L=Hi[Y.type])==null?void 0:L.label)||Y.type,oe=Math.round(Y.y-(X.y+X.height)),ie=Math.round(Y.x-(X.x+X.width));u+=`- ${U} ↔ ${Z}: h=\`${ie}px\` v=\`${oe}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((N,P)=>{var Y;const X=((Y=Hi[N.type])==null?void 0:Y.label)||N.type;u+=`${P}. ${X} at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(N=>N.type==="navigation"),g=c.some(N=>N.type==="hero"),_=c.some(N=>N.type==="sidebar"),x=c.some(N=>N.type==="footer"),b=c.filter(N=>N.type==="card"),S=c.filter(N=>N.type==="form"),C=c.filter(N=>N.type==="table"),k=c.filter(N=>N.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),g&&(u+=`- Hero section with heading, subtext, and call-to-action
`),_&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),b.length>1?u+=`- ${b.length}-column card grid — use CSS Grid or Flexbox
`:b.length===1&&(u+=`- Card component with image + content area
`),S.length>0&&(u+=`- ${S.length} form${S.length>1?"s":""} — add proper labels, validation, and submit handling
`),C.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),k.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,_){const N=c.find(P=>P.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(N.width)}px 1fr;\`
`}if(b.length>1){const N=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${N}px); gap: 16px;\`
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
`,x){const j=Lm(S,g("original")),M=Lm(C,g("current")),I=b?{width:S.width,height:S.height}:void 0;u+=`  - Currently ${H4(j,{x:S.x,y:S.y},I)}
`;const L=b?{width:C.width,height:C.height}:void 0,N=`at (${Math.round(C.x)}, ${Math.round(C.y)})`,P=L?`, ${Math.round(L.width)}×${Math.round(L.height)}px`:"",Y=qx(M,{includeLeftRight:n==="detailed"||n==="forensic"});if(Y.length>0){u+=`  - Suggested position ${N}${P}: ${Y[0]}
`;for(let Z=1;Z<Y.length;Z++)u+=`    ${Y[Z]}
`}else u+=`  - Suggested position ${N}${P}
`;const U=Kx(C,p);U&&(u+=`  - CSS: ${U}
`)}const k=Y4(_.selector);if(k&&(u+=`  - ${k}
`),u+=`  - Selector: \`${_.selector}\`
`,n==="detailed"||n==="forensic"){const j=_.className?`${_.tagName}.${_.className.split(" ")[0]}`:_.tagName;j!==_.selector&&(u+=`  - Element: \`${j}\`
`),_.role&&(u+=`  - Role: \`${_.role}\`
`),n==="forensic"&&_.textSnippet&&(u+=`  - Text: "${_.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(C.x)}, y: ${Math.round(C.y)}, w: ${Math.round(C.width)}, h: ${Math.round(C.height)} }\`
`)}if(n!=="compact"){const _=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=U4(_);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const _=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of _){const b=x.currentRect,S=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${S?" ← suggested":""}
`}}return u}var Om="feedback-annotations-",Zx=7;function Md(t){return`${Om}${t}`}function Jh(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(Md(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-Zx*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function Jx(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Md(t),JSON.stringify(n))}catch{}}function W4(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-Zx*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(Om)){const c=a.slice(Om.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function ic(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));Jx(t,a)}var hp="agentation-design-";function F4(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${hp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function X4(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${hp}${t}`,JSON.stringify(n))}catch{}}function q4(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${hp}${t}`)}catch{}}var mp="agentation-rearrange-";function G4(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${mp}${t}`);return n?JSON.parse(n):null}catch{return null}}function K4(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${mp}${t}`,JSON.stringify(n))}catch{}}function Q4(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${mp}${t}`)}catch{}}var pp="agentation-wireframe-";function Z4(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${pp}${t}`);return n?JSON.parse(n):null}catch{return null}}function Xy(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${pp}${t}`,JSON.stringify(n))}catch{}}function Ju(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${pp}${t}`)}catch{}}var eb="agentation-session-";function _p(t){return`${eb}${t}`}function J4(t){if(typeof window>"u")return null;try{return localStorage.getItem(_p(t))}catch{return null}}function em(t,n){if(!(typeof window>"u"))try{localStorage.setItem(_p(t),n)}catch{}}function e6(t){if(!(typeof window>"u"))try{localStorage.removeItem(_p(t))}catch{}}var tb=`${eb}toolbar-hidden`;function t6(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(tb)==="1"}catch{return!1}}function n6(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(tb,"1")}catch{}}async function tm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function qy(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function sl(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function Gy(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function Wa(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var Nn={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Ky=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Qy=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],s6=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function o6(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=Ky;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...Ky,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...Qy,...t.skipPatterns]:Qy,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:s6,filter:t==null?void 0:t.filter}}function i6(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function a6(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function r6(t,n){const i=i6(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function l6(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&r6(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var ol=null,c6=new WeakMap;function nm(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function u6(){if(ol!==null)return ol;if(typeof document>"u")return!1;if(document.body&&nm(document.body))return ol=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&nm(i))return ol=!0,!0}if(document.body){for(const n of document.body.children)if(nm(n))return ol=!0,!0}return ol=!1,!1}var ac={map:c6};function d6(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function f6(t){const n=d6(t);return n?t[n]:null}function fr(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function h6(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===Nn.HostComponent||n===Nn.HostText||n===Nn.HostHoistable||n===Nn.HostSingleton||n===Nn.Fragment||n===Nn.Mode||n===Nn.Profiler||n===Nn.DehydratedFragment||n===Nn.HostRoot||n===Nn.HostPortal||n===Nn.ScopeComponent||n===Nn.OffscreenComponent||n===Nn.LegacyHiddenComponent||n===Nn.CacheComponent||n===Nn.TracingMarkerComponent||n===Nn.Throw||n===Nn.ViewTransitionComponent||n===Nn.ActivityComponent)return null;if(n===Nn.ForwardRef){const u=a;if(u!=null&&u.render){const d=fr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:fr(i)}if(n===Nn.MemoComponent||n===Nn.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=fr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:fr(i)}if(n===Nn.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===Nn.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===Nn.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?fr(u._result):null}return n===Nn.SuspenseComponent||n===Nn.SuspenseListComponent?null:n===Nn.IncompleteClassComponent||n===Nn.IncompleteFunctionComponent||n===Nn.FunctionComponent||n===Nn.ClassComponent||n===Nn.IndeterminateComponent?fr(i):null}function m6(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function p6(t,n){const i=o6(n),a=i.mode==="all";if(a){const p=ac.map.get(t);if(p!==void 0)return p}if(!u6()){const p={path:null,components:[]};return a&&ac.map.set(t,p),p}const c=i.mode==="smart"?a6(t):void 0,u=[];try{let p=f6(t),g=0;for(;p&&g<i.maxDepth&&u.length<i.maxComponents;){const _=h6(p);_&&!m6(_)&&l6(_,g,i,c)&&u.push(_),p=p.return,g++}}catch{const p={path:null,components:[]};return a&&ac.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&ac.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&ac.map.set(t,h),h}var rc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function _6(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function wc(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function g6(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:wc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:wc(i._debugOwner)};i=i.return,a++}return null}function y6(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:wc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:wc(n)}}}n=n.return,i++}return null}var ed=new Map;function x6(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===rc.FunctionComponent||n===rc.IndeterminateComponent)&&typeof i=="function")return i;if(n===rc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===rc.MemoComponent||n===rc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function b6(){const t=Av,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function v6(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function w6(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function S6(t){const n=x6(t);if(!n)return null;if(ed.has(n))return ed.get(n);const i=b6();if(!i)return ed.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=v6(d.stack);h&&(c={fileName:w6(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:wc(t)||void 0})}}}finally{i.set(a)}return ed.set(n,c),c}function C6(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=S6(i);if(c)return c;i=i.return,a++}return null}function zm(t){const n=_6(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=g6(n);if(i||(i=y6(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=C6(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function k6(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function j6(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=zm(i);if(c.found)return c;i=i.parentElement,a++}return zm(t)}var M6=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,T6={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=M6}var Pe=T6,lc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Zy(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var E6=`@keyframes styles-module__markerIn___x4G8D {
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
}`,A6={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=E6}var Is=A6;function Jy({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:g,renumberFrom:_,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:S,onHoverLeave:C,onClick:k,onContextMenu:j}){const M=(h||p)&&!g,I=M&&x==="delete",L=t.isMultiSelect,N=L?"var(--agentation-color-green)":"var(--agentation-color-accent)",P=c?Is.exit:u?Is.clearing:d?"":Is.enter,X=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${Is.marker} ${L?Is.multiSelect:""} ${P} ${I?Is.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:I?void 0:N,animationDelay:X},onMouseEnter:()=>S(t),onMouseLeave:C,onClick:Y=>{Y.stopPropagation(),c||k(t)},onContextMenu:j?Y=>{x==="delete"&&(Y.preventDefault(),Y.stopPropagation(),c||j(t))}:void 0,children:[M?I?l.jsx(Px,{size:L?18:16}):l.jsx(Vw,{size:16}):l.jsx("span",{className:_!==null&&n>=_?Is.renumber:void 0,children:n+1}),h&&!g&&l.jsxs("div",{className:`${Is.markerTooltip} ${Is.enter}`,style:b,children:[l.jsxs("span",{className:Is.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:Is.markerNote,children:t.comment})]})]})}function D6({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${Is.marker} ${Is.pending} ${i?Is.multiSelect:""} ${a?Is.exit:Is.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(Dw,{size:12})})}function e1({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${Is.marker} ${n?Is.fixed:""} ${Is.hovered} ${i?Is.multiSelect:""} ${Is.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(Px,{size:i?12:10})})}var N6=`.styles-module__switchContainer___Ka-AB {
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
}`,R6={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=N6}var sm=R6,om=({className:t="",...n})=>l.jsxs("div",{className:`${sm.switchContainer} ${t}`,children:[l.jsx("input",{className:sm.switchInput,type:"checkbox",...n}),l.jsx("div",{className:sm.switchThumb})]}),B6=`.styles-module__checkboxContainer___joqZk {
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
}`,L6={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=B6}var td=L6,O6=({className:t="",...n})=>l.jsxs("div",{className:`${td.checkboxContainer} ${t}`,children:[l.jsx("input",{className:td.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:td.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:td.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),z6=`.styles-module__container___w8eAF {
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
}`,$6={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=z6}var t1=$6,n1=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=y.useId();return l.jsxs("div",{className:`${t1.container} ${t}`,...u,children:[l.jsx(O6,{id:d,onChange:c,checked:a}),l.jsx("label",{className:t1.label,htmlFor:d,children:n}),i&&l.jsx(yr,{content:i})]})},I6=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,P6={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=I6}var Ct=P6;function H6({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:g,onSettingsPageChange:_,onHideToolbar:x}){var b;return l.jsx("div",{className:`${Ct.settingsPanel} ${h?Ct.enter:Ct.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:Ct.settingsPanelContainer,children:[l.jsxs("div",{className:`${Ct.settingsPage} ${g==="automations"?Ct.slideLeft:""}`,children:[l.jsxs("div",{className:Ct.settingsHeader,children:[l.jsx("a",{className:Ct.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:Ct.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:Ct.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:Ct.themeIconWrapper,children:l.jsx("span",{className:Ct.themeIcon,children:i?l.jsx(Hw,{size:20}):l.jsx(Uw,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsxs("div",{className:Ct.settingsRow,children:[l.jsxs("div",{className:Ct.settingsLabel,children:["Output Detail",l.jsx(yr,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:Ct.cycleButton,onClick:()=>{const C=(lc.findIndex(k=>k.value===t.outputDetail)+1)%lc.length;n({outputDetail:lc[C].value})},children:[l.jsx("span",{className:Ct.cycleButtonText,children:(b=lc.find(S=>S.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),l.jsx("span",{className:Ct.cycleDots,children:lc.map(S=>l.jsx("span",{className:`${Ct.cycleDot} ${t.outputDetail===S.value?Ct.active:""}`},S.value))})]})]}),l.jsxs("div",{className:`${Ct.settingsRow} ${Ct.settingsRowMarginTop} ${c?"":Ct.settingsRowDisabled}`,children:[l.jsxs("div",{className:Ct.settingsLabel,children:["React Components",l.jsx(yr,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(om,{checked:c&&t.reactEnabled,onChange:S=>n({reactEnabled:S.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${Ct.settingsRow} ${Ct.settingsRowMarginTop}`,children:[l.jsxs("div",{className:Ct.settingsLabel,children:["Hide Until Restart",l.jsx(yr,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(om,{checked:!1,onChange:S=>{S.target.checked&&x()}})]})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsx("div",{className:`${Ct.settingsLabel} ${Ct.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:Ct.colorOptions,children:_c.map(S=>l.jsx("button",{className:`${Ct.colorOption} ${t.annotationColorId===S.id?Ct.selected:""}`,style:{"--swatch":S.srgb,"--swatch-p3":S.p3},onClick:()=>n({annotationColorId:S.id}),title:S.label,type:"button"},S.id))})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsx(n1,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:S=>n({autoClearAfterCopy:S.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(n1,{className:Ct.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:S=>n({blockInteractions:S.target.checked})})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("button",{className:Ct.settingsNavLink,onClick:()=>_("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:Ct.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${Ct.mcpNavIndicator} ${Ct[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${Ct.settingsPage} ${Ct.automationsPage} ${g==="automations"?Ct.slideIn:""}`,children:[l.jsxs("button",{className:Ct.settingsBackButton,onClick:()=>_("main"),children:[l.jsx(Ww,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsxs("div",{className:Ct.settingsRow,children:[l.jsxs("span",{className:Ct.automationHeader,children:["MCP Connection",l.jsx(yr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${Ct.mcpStatusDot} ${Ct[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:Ct.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Ct.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:`${Ct.settingsSection} ${Ct.settingsSectionGrow}`,children:[l.jsxs("div",{className:Ct.settingsRow,children:[l.jsxs("span",{className:Ct.automationHeader,children:["Webhooks",l.jsx(yr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:Ct.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${Ct.autoSendLabel} ${t.webhooksEnabled?Ct.active:""} ${t.webhookUrl?"":Ct.disabled}`,children:"Auto-Send"}),l.jsx(om,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:S=>n({webhooksEnabled:S.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:Ct.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:Ct.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:S=>S.stopPropagation(),onChange:S=>n({webhookUrl:S.target.value})})]})]})]})})}function im(t,n="filtered"){const{name:i,path:a}=ul(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=p6(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var s1=!1,am={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},Gi=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},_c=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],U6=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[..._c.map(n=>`
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
    }`].join(""),document.head.appendChild(t)};U6();function hr(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function rm(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function mr(t){return t.status!=="resolved"&&t.status!=="dismissed"}function nd(t){const n=zm(t),i=n.found?n:j6(t);if(i.found&&i.source)return k6(i.source,"path")}function V6({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:g=!0,endpoint:_,sessionId:x,onSessionCreated:b,webhookUrl:S,className:C}={}){var qo,Lc,xl,bl,va,wa,Oc;const[k,j]=y.useState(!1),[M,I]=y.useState([]),[L,N]=y.useState(!0),[P,X]=y.useState(()=>t6()),[Y,U]=y.useState(!1),Z=y.useRef(null);y.useEffect(()=>{const R=K=>{const W=Z.current;W&&W.contains(K.target)&&K.stopPropagation()},$=["mousedown","click","pointerdown"];return $.forEach(K=>document.body.addEventListener(K,R)),()=>{$.forEach(K=>document.body.removeEventListener(K,R))}},[]);const[oe,ie]=y.useState(!1),[be,Te]=y.useState(!1),[Q,le]=y.useState(null),[z,ae]=y.useState({x:0,y:0}),[q,me]=y.useState(null),[Me,D]=y.useState(!1),[te,G]=y.useState("idle"),[de,ke]=y.useState(!1),[Ne,ve]=y.useState(!1),[st,Ge]=y.useState(null),[$e,rt]=y.useState(null),[tt,$t]=y.useState([]),[lt,Rt]=y.useState(null),[Oe,ct]=y.useState(null),[ce,He]=y.useState(null),[Ke,ze]=y.useState(null),[Tt,ut]=y.useState([]),[at,ot]=y.useState(0),[it,At]=y.useState(!1),[Qe,H]=y.useState(!1),[J,ne]=y.useState(!1),[_e,Xe]=y.useState(!1),[Ue,De]=y.useState(!1),[St,Ye]=y.useState("main"),[bt,ht]=y.useState(!1),[Ie,nt]=y.useState(!1),[Vt,un]=y.useState(!1),[qe,Bt]=y.useState([]),[Ot,zt]=y.useState(null),rn=y.useRef(!1),[mt,Ft]=y.useState(!1),[Rn,os]=y.useState(!1),[gn,oo]=y.useState(1),[is,es]=y.useState("new-page"),[Gt,kn]=y.useState(""),[Jt,yn]=y.useState(!1),[Ze,jn]=y.useState(null),So=y.useRef(!1),io=y.useRef({rearrange:null,placements:[]}),Ln=y.useRef({rearrange:null,placements:[]}),[Ns,ao]=y.useState(0),[ro,ys]=y.useState(0),[ps,xs]=y.useState(0),[on,ni]=y.useState(0),Do=y.useRef(new Set),Qs=y.useRef(new Set),Wn=y.useRef(null),lo=y.useRef(),No=Ie&&k&&!Vt&&mt;y.useEffect(()=>{if(No){os(!1);const R=al(()=>{os(!0)});return()=>cancelAnimationFrame(R)}else os(!1)},[No]);const Ro=y.useRef(new Map),Yo=y.useRef(new Map),mo=y.useRef(),[bs,Rs]=y.useState(!1),[wn,pi]=y.useState([]),as=y.useRef(wn);as.current=wn;const[si,Hs]=y.useState(null),Bo=y.useRef(null);y.useRef(!1),y.useRef([]),y.useRef(0),y.useRef(null),y.useRef(null),y.useRef(1);const[Co,vs]=y.useState(!1),Us=y.useRef(null),[xn,po]=y.useState([]),rs=y.useRef({cmd:!1,shift:!1}),Fn=()=>{ht(!0)},_i=()=>{ht(!1)},ko=()=>{Co||(Us.current=Ut(()=>vs(!0),850))},Wo=()=>{Us.current&&(clearTimeout(Us.current),Us.current=null),vs(!1),_i()};y.useEffect(()=>()=>{Us.current&&clearTimeout(Us.current)},[]);const[Xt,Ai]=y.useState(()=>{var R;try{const $=JSON.parse((R=localStorage.getItem("feedback-toolbar-settings"))!=null?R:"");return{...am,...$,annotationColorId:_c.find(K=>K.id===$.annotationColorId)?$.annotationColorId:am.annotationColorId}}catch{return am}}),[Bs,Fo]=y.useState(!0),[Lo,Oo]=y.useState(!1),Ls=()=>{var R;(R=Z.current)==null||R.classList.add(Pe.disableTransitions),Fo($=>!$),al(()=>{var $;($=Z.current)==null||$.classList.remove(Pe.disableTransitions)})},jo=!1,Cs="off",[Sn,co]=y.useState(x!=null?x:null),Xn=y.useRef(!1),[_s,qn]=y.useState(_?"connecting":"disconnected"),[en,Vs]=y.useState(null),[Ys,ws]=y.useState(!1),[Gn,Mo]=y.useState(null),ks=y.useRef(!1),[_o,js]=y.useState(new Set),[Ms,uo]=y.useState(new Set),[T,w]=y.useState(!1),[A,B]=y.useState(!1),[V,ue]=y.useState(!1),Ee=y.useRef(null),Ce=y.useRef(null),Ve=y.useRef(null),pt=y.useRef(null),Ht=y.useRef(!1),Kt=y.useRef(0),It=y.useRef(null),kt=y.useRef(null),Dt=8,tn=50,An=y.useRef(null),Zs=y.useRef(null),ts=y.useRef(null),_t=typeof window<"u"?window.location.pathname:"/";y.useEffect(()=>{if(_e)De(!0);else{ht(!1),Ye("main");const R=Ut(()=>De(!1),0);return()=>clearTimeout(R)}},[_e]);const Ts=k&&L&&!Ie;y.useEffect(()=>{if(Ts){Te(!1),ie(!0),js(new Set);const R=Ut(()=>{js($=>{const K=new Set($);return M.forEach(W=>K.add(W.id)),K})},350);return()=>clearTimeout(R)}else if(oe){Te(!0);const R=Ut(()=>{ie(!1),Te(!1)},250);return()=>clearTimeout(R)}},[Ts]),y.useEffect(()=>{H(!0),ot(window.scrollY);const R=Jh(_t);I(R.filter(mr)),s1||(Oo(!0),s1=!0,Ut(()=>Oo(!1),750));try{const $=localStorage.getItem("feedback-toolbar-theme");$!==null&&Fo($==="dark")}catch{}try{const $=localStorage.getItem("feedback-toolbar-position");if($){const K=JSON.parse($);typeof K.x=="number"&&typeof K.y=="number"&&Vs(K)}}catch{}},[_t]),y.useEffect(()=>{Qe&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Xt))},[Xt,Qe]),y.useEffect(()=>{Qe&&localStorage.setItem("feedback-toolbar-theme",Bs?"dark":"light")},[Bs,Qe]);const oi=y.useRef(!1);y.useEffect(()=>{const R=oi.current;oi.current=Ys,R&&!Ys&&en&&Qe&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(en))},[Ys,en,Qe]),y.useEffect(()=>{if(!_||!Qe||Xn.current)return;Xn.current=!0,qn("connecting"),(async()=>{try{const $=J4(_t),K=x||$;let W=!1;if(K)try{const se=await qy(_,K);co(se.id),qn("connected"),em(_t,se.id),W=!0;const ge=Jh(_t),We=new Set(se.annotations.map(et=>et.id)),Fe=ge.filter(et=>!We.has(et.id));if(Fe.length>0){const vt=`${typeof window<"u"?window.location.origin:""}${_t}`,Qt=(await Promise.allSettled(Fe.map(wt=>sl(_,se.id,{...wt,sessionId:se.id,url:vt})))).map((wt,dt)=>wt.status==="fulfilled"?wt.value:(console.warn("[Agentation] Failed to sync annotation:",wt.reason),Fe[dt])),Zt=[...se.annotations,...Qt];I(Zt.filter(mr)),ic(_t,Zt.filter(mr),se.id)}else I(se.annotations.filter(mr)),ic(_t,se.annotations.filter(mr),se.id)}catch(se){console.warn("[Agentation] Could not join session, creating new:",se),e6(_t)}if(!W){const se=typeof window<"u"?window.location.href:"/",ge=await tm(_,se);co(ge.id),qn("connected"),em(_t,ge.id),b==null||b(ge.id);const We=W4(),Fe=typeof window<"u"?window.location.origin:"",et=[];for(const[vt,Nt]of We){const Qt=Nt.filter(dt=>!dt._syncedTo);if(Qt.length===0)continue;const Zt=`${Fe}${vt}`,wt=vt===_t;et.push((async()=>{try{const dt=wt?ge:await tm(_,Zt),ds=(await Promise.allSettled(Qt.map(vn=>sl(_,dt.id,{...vn,sessionId:dt.id,url:Zt})))).map((vn,Bn)=>vn.status==="fulfilled"?vn.value:(console.warn("[Agentation] Failed to sync annotation:",vn.reason),Qt[Bn])).filter(mr);if(ic(vt,ds,dt.id),wt){const vn=new Set(Qt.map(Bn=>Bn.id));I(Bn=>{const Wt=Bn.filter(qt=>!vn.has(qt.id));return[...ds,...Wt]})}}catch(dt){console.warn(`[Agentation] Failed to sync annotations for ${vt}:`,dt)}})())}await Promise.allSettled(et)}}catch($){qn("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",$)}})()},[_,x,Qe,b,_t]),y.useEffect(()=>{if(!_||!Qe)return;const R=async()=>{try{(await fetch(`${_}/health`)).ok?qn("connected"):qn("disconnected")}catch{qn("disconnected")}};R();const $=qw(R,1e4);return()=>clearInterval($)},[_,Qe]),y.useEffect(()=>{if(!_||!Qe||!Sn)return;const R=new EventSource(`${_}/sessions/${Sn}/events`),$=["resolved","dismissed"],K=W=>{var se;try{const ge=JSON.parse(W.data);if($.includes((se=ge.payload)==null?void 0:se.status)){const We=ge.payload.id,Fe=ge.payload.kind;if(Fe==="placement"){for(const[et,vt]of Ro.current)if(vt===We){Ro.current.delete(et),Bt(Nt=>Nt.filter(Qt=>Qt.id!==et));break}}else if(Fe==="rearrange"){for(const[et,vt]of Yo.current)if(vt===We){Yo.current.delete(et),jn(Nt=>{if(!Nt)return null;const Qt=Nt.sections.filter(Zt=>Zt.id!==et);return Qt.length===0?null:{...Nt,sections:Qt}});break}}else uo(et=>new Set(et).add(We)),Ut(()=>{I(et=>et.filter(vt=>vt.id!==We)),uo(et=>{const vt=new Set(et);return vt.delete(We),vt})},150)}}catch{}};return R.addEventListener("annotation.updated",K),()=>{R.removeEventListener("annotation.updated",K),R.close()}},[_,Qe,Sn]),y.useEffect(()=>{if(!_||!Qe)return;const R=kt.current==="disconnected",$=_s==="connected";kt.current=_s,R&&$&&(async()=>{try{const W=Jh(_t);if(W.length===0)return;const ge=`${typeof window<"u"?window.location.origin:""}${_t}`;let We=Sn,Fe=[];if(We)try{Fe=(await qy(_,We)).annotations}catch{We=null}We||(We=(await tm(_,ge)).id,co(We),em(_t,We));const et=new Set(Fe.map(Nt=>Nt.id)),vt=W.filter(Nt=>!et.has(Nt.id));if(vt.length>0){const Qt=(await Promise.allSettled(vt.map(dt=>sl(_,We,{...dt,sessionId:We,url:ge})))).map((dt,cs)=>dt.status==="fulfilled"?dt.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",dt.reason),vt[cs])),wt=[...Fe,...Qt].filter(mr);I(wt),ic(_t,wt,We)}}catch(W){console.warn("[Agentation] Failed to sync on reconnect:",W)}})()},[_s,_,Qe,Sn,_t]);const ii=y.useCallback(()=>{Y||(U(!0),Xe(!1),j(!1),Ut(()=>{n6(!0),X(!0),U(!1)},400))},[Y]);y.useEffect(()=>{if(!i||!Qe||!t||t.length===0||M.length>0)return;const R=[];return R.push(Ut(()=>{j(!0)},n-200)),t.forEach(($,K)=>{const W=n+K*300;R.push(Ut(()=>{const se=document.querySelector($.selector);if(!se)return;const ge=se.getBoundingClientRect(),{name:We,path:Fe}=ul(se),et={id:`demo-${Date.now()}-${K}`,x:(ge.left+ge.width/2)/window.innerWidth*100,y:ge.top+ge.height/2+window.scrollY,comment:$.comment,element:We,elementPath:Fe,timestamp:Date.now(),selectedText:$.selectedText,boundingBox:{x:ge.left,y:ge.top+window.scrollY,width:ge.width,height:ge.height},nearbyText:sc(se),cssClasses:oc(se)};I(vt=>[...vt,et])},W))}),()=>{R.forEach(clearTimeout)}},[i,Qe,t,n]),y.useEffect(()=>{const R=()=>{ot(window.scrollY),At(!0),ts.current&&clearTimeout(ts.current),ts.current=Ut(()=>{At(!1)},150)};return window.addEventListener("scroll",R,{passive:!0}),()=>{window.removeEventListener("scroll",R),ts.current&&clearTimeout(ts.current)}},[]),y.useEffect(()=>{Qe&&M.length>0?Sn?ic(_t,M,Sn):Jx(_t,M):Qe&&M.length===0&&localStorage.removeItem(Md(_t))},[M,_t,Qe,Sn]),y.useEffect(()=>{if(Qe&&!rn.current){rn.current=!0;const R=F4(_t);R.length>0&&Bt(R)}},[Qe,_t]),y.useEffect(()=>{Qe&&rn.current&&!mt&&(qe.length>0?X4(_t,qe):q4(_t))},[qe,_t,Qe,mt]),y.useEffect(()=>{if(Qe&&!So.current){So.current=!0;const R=G4(_t);if(R){const $={...R,sections:R.sections.map(K=>{var W;return{...K,currentRect:(W=K.currentRect)!=null?W:{...K.originalRect}}})};jn($)}}},[Qe,_t]),y.useEffect(()=>{Qe&&So.current&&!mt&&(Ze?K4(_t,Ze):Q4(_t))},[Ze,_t,Qe,mt]);const Xo=y.useRef(!1);y.useEffect(()=>{if(Qe&&!Xo.current){Xo.current=!0;const R=Z4(_t);R&&(Ln.current={rearrange:R.rearrange,placements:R.placements||[]},R.purpose&&kn(R.purpose))}},[Qe,_t]),y.useEffect(()=>{var $,K,W,se,ge;if(!Qe||!Xo.current)return;const R=Ln.current;mt?((K=($=Ze==null?void 0:Ze.sections)==null?void 0:$.length)!=null?K:0)>0||qe.length>0||Gt?Xy(_t,{rearrange:Ze,placements:qe,purpose:Gt}):Ju(_t):((ge=(se=(W=R.rearrange)==null?void 0:W.sections)==null?void 0:se.length)!=null?ge:0)>0||R.placements.length>0||Gt?Xy(_t,{rearrange:R.rearrange,placements:R.placements,purpose:Gt}):Ju(_t)},[Ze,qe,Gt,mt,_t,Qe]),y.useEffect(()=>{Ie&&!Ze&&jn({sections:[],originalOrder:[],detectedAt:Date.now()})},[Ie,Ze]),y.useEffect(()=>{if(!_||!Sn)return;const R=Ro.current,$=new Set(qe.map(K=>K.id));for(const K of qe){if(R.has(K.id))continue;R.set(K.id,"");const W=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:_t;sl(_,Sn,{id:K.id,x:K.x/window.innerWidth*100,y:K.y,comment:`Place ${K.type} at (${Math.round(K.x)}, ${Math.round(K.y)}), ${K.width}×${K.height}px${K.text?` — "${K.text}"`:""}`,element:`[design:${K.type}]`,elementPath:"[placement]",timestamp:K.timestamp,url:W,intent:"change",severity:"important",kind:"placement",placement:{componentType:K.type,width:K.width,height:K.height,scrollY:K.scrollY,text:K.text}}).then(se=>{R.has(K.id)&&R.set(K.id,se.id)}).catch(se=>{console.warn("[Agentation] Failed to sync placement annotation:",se),R.delete(K.id)})}for(const[K,W]of R)$.has(K)||(R.delete(K),W&&Wa(_,W).catch(()=>{}))},[qe,_,Sn,_t]),y.useEffect(()=>{if(!(!_||!Sn))return mo.current&&clearTimeout(mo.current),mo.current=Ut(()=>{const R=Yo.current;if(!Ze||Ze.sections.length===0){for(const[,W]of R)W&&Wa(_,W).catch(()=>{});R.clear();return}const $=new Set(Ze.sections.map(W=>W.id)),K=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:_t;for(const W of Ze.sections){const se=W.originalRect,ge=W.currentRect;if(!(Math.abs(se.x-ge.x)>1||Math.abs(se.y-ge.y)>1||Math.abs(se.width-ge.width)>1||Math.abs(se.height-ge.height)>1)){const et=R.get(W.id);et&&(R.delete(W.id),Wa(_,et).catch(()=>{}));continue}const Fe=R.get(W.id);Fe?Gy(_,Fe,{comment:`Move ${W.label} section (${W.tagName}) — from (${Math.round(se.x)},${Math.round(se.y)}) ${Math.round(se.width)}×${Math.round(se.height)} to (${Math.round(ge.x)},${Math.round(ge.y)}) ${Math.round(ge.width)}×${Math.round(ge.height)}`}).catch(et=>{console.warn("[Agentation] Failed to update rearrange annotation:",et)}):(R.set(W.id,""),sl(_,Sn,{id:W.id,x:ge.x/window.innerWidth*100,y:ge.y,comment:`Move ${W.label} section (${W.tagName}) — from (${Math.round(se.x)},${Math.round(se.y)}) ${Math.round(se.width)}×${Math.round(se.height)} to (${Math.round(ge.x)},${Math.round(ge.y)}) ${Math.round(ge.width)}×${Math.round(ge.height)}`,element:W.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:K,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:W.selector,label:W.label,tagName:W.tagName,originalRect:se,currentRect:ge}}).then(et=>{R.has(W.id)&&R.set(W.id,et.id)}).catch(et=>{console.warn("[Agentation] Failed to sync rearrange annotation:",et),R.delete(W.id)}))}for(const[W,se]of R)$.has(W)||(R.delete(W),se&&Wa(_,se).catch(()=>{}))},300),()=>{mo.current&&clearTimeout(mo.current)}},[Ze,_,Sn,_t]);const Js=y.useRef(new Map);y.useLayoutEffect(()=>{var K;const R=(K=Ze==null?void 0:Ze.sections)!=null?K:[],$=new Set;if((Ie||Vt)&&k)for(const W of R){$.add(W.id);try{const se=document.querySelector(W.selector);if(!se)continue;if(!Js.current.has(W.id)){const ge={transform:se.style.transform,transformOrigin:se.style.transformOrigin,opacity:se.style.opacity,position:se.style.position,zIndex:se.style.zIndex,display:se.style.display},We=[];let Fe=se.parentElement;for(;Fe&&Fe!==document.body;){const vt=getComputedStyle(Fe);(vt.overflow!=="visible"||vt.overflowX!=="visible"||vt.overflowY!=="visible")&&(We.push({el:Fe,overflow:Fe.style.overflow}),Fe.style.overflow="visible"),Fe=Fe.parentElement}getComputedStyle(se).display==="inline"&&(se.style.display="inline-block"),Js.current.set(W.id,{el:se,origStyles:ge,ancestors:We}),se.style.transformOrigin="top left",se.style.zIndex="9999"}}catch{}}for(const[W,se]of Js.current)if(!$.has(W)){const{el:ge,origStyles:We,ancestors:Fe}=se;ge.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",ge.style.transform=We.transform,ge.style.transformOrigin=We.transformOrigin,ge.style.opacity=We.opacity,ge.style.position=We.position,ge.style.zIndex=We.zIndex,Js.current.delete(W),Ut(()=>{ge.style.transition="",ge.style.display=We.display;for(const et of Fe)et.el.style.overflow=et.overflow},450)}},[Ze,Ie,Vt,k]),y.useEffect(()=>()=>{for(const[,R]of Js.current){const{el:$,origStyles:K,ancestors:W}=R;$.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",$.style.transform=K.transform,$.style.transformOrigin=K.transformOrigin,$.style.opacity=K.opacity,$.style.position=K.position,$.style.zIndex=K.zIndex,Ut(()=>{$.style.transition="",$.style.display=K.display;for(const se of W)se.el.style.overflow=se.overflow},450)}Js.current.clear()},[]);const zo=y.useCallback(()=>{un(!0),nt(!1),zt(null),clearTimeout(lo.current),lo.current=Ut(()=>{un(!1)},300)},[]),ai=y.useCallback(()=>{Ie&&(un(!0),nt(!1),zt(null),clearTimeout(lo.current),lo.current=Ut(()=>{un(!1)},300)),j(!1)},[Ie]),Mn=y.useCallback(()=>{J||(Kw(),ne(!0))},[J]),Kn=y.useCallback(()=>{J&&(Ry(),ne(!1))},[J]),eo=y.useCallback(()=>{J?Kn():Mn()},[J,Mn,Kn]),Vi=y.useCallback(()=>{if(xn.length===0)return;const R=xn[0],$=R.element,K=xn.length>1,W=xn.map(se=>se.element.getBoundingClientRect());if(K){const se={left:Math.min(...W.map(dt=>dt.left)),top:Math.min(...W.map(dt=>dt.top)),right:Math.max(...W.map(dt=>dt.right)),bottom:Math.max(...W.map(dt=>dt.bottom))},ge=xn.slice(0,5).map(dt=>dt.name).join(", "),We=xn.length>5?` +${xn.length-5} more`:"",Fe=W.map(dt=>({x:dt.left,y:dt.top+window.scrollY,width:dt.width,height:dt.height})),vt=xn[xn.length-1].element,Nt=W[W.length-1],Qt=Nt.left+Nt.width/2,Zt=Nt.top+Nt.height/2,wt=rm(vt);me({x:Qt/window.innerWidth*100,y:wt?Zt:Zt+window.scrollY,clientY:Zt,element:`${xn.length} elements: ${ge}${We}`,elementPath:"multi-select",boundingBox:{x:se.left,y:se.top+window.scrollY,width:se.right-se.left,height:se.bottom-se.top},isMultiSelect:!0,isFixed:wt,elementBoundingBoxes:Fe,multiSelectElements:xn.map(dt=>dt.element),targetElement:vt,fullPath:Ku($),accessibility:Gu($),computedStyles:qu($),computedStylesObj:Xu($),nearbyElements:Fu($),cssClasses:oc($),nearbyText:sc($),sourceFile:nd($)})}else{const se=W[0],ge=rm($);me({x:se.left/window.innerWidth*100,y:ge?se.top:se.top+window.scrollY,clientY:se.top,element:R.name,elementPath:R.path,boundingBox:{x:se.left,y:ge?se.top:se.top+window.scrollY,width:se.width,height:se.height},isFixed:ge,fullPath:Ku($),accessibility:Gu($),computedStyles:qu($),computedStylesObj:Xu($),nearbyElements:Fu($),cssClasses:oc($),nearbyText:sc($),reactComponents:R.reactComponents,sourceFile:nd($)})}po([]),le(null)},[xn]);y.useEffect(()=>{k||(me(null),He(null),ze(null),ut([]),le(null),Xe(!1),po([]),rs.current={cmd:!1,shift:!1},J&&Kn())},[k,J,Kn]),y.useEffect(()=>()=>{Ry()},[]),y.useEffect(()=>{if(!k)return;const R=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),$=":not([data-agentation-root]):not([data-agentation-root] *)",K=document.createElement("style");return K.id="feedback-cursor-styles",K.textContent=`
      body ${$} {
        cursor: crosshair !important;
      }

      body :is(${R})${$} {
        cursor: text !important;
      }
    `,document.head.appendChild(K),()=>{const W=document.getElementById("feedback-cursor-styles");W&&W.remove()}},[k]),y.useEffect(()=>{if(si!==null&&k)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[si,k]),y.useEffect(()=>{if(!k||q||bs||Ie)return;const R=$=>{const K=$.composedPath()[0]||$.target;if(Po(K,"[data-feedback-toolbar]")){le(null);return}const W=hr($.clientX,$.clientY);if(!W||Po(W,"[data-feedback-toolbar]")){le(null);return}const{name:se,elementName:ge,path:We,reactComponents:Fe}=im(W,Cs),et=W.getBoundingClientRect();le({element:se,elementName:ge,elementPath:We,rect:et,reactComponents:Fe}),ae({x:$.clientX,y:$.clientY})};return document.addEventListener("mousemove",R),()=>document.removeEventListener("mousemove",R)},[k,q,bs,Ie,Cs,wn]);const ea=y.useCallback(R=>{var $;if(He(R),Ge(null),rt(null),$t([]),($=R.elementBoundingBoxes)!=null&&$.length){const K=[];for(const W of R.elementBoundingBoxes){const se=W.x+W.width/2,ge=W.y+W.height/2-window.scrollY,We=hr(se,ge);We&&K.push(We)}ut(K),ze(null)}else if(R.boundingBox){const K=R.boundingBox,W=K.x+K.width/2,se=R.isFixed?K.y+K.height/2:K.y+K.height/2-window.scrollY,ge=hr(W,se);if(ge){const We=ge.getBoundingClientRect(),Fe=We.width/K.width,et=We.height/K.height;Fe<.5||et<.5?ze(null):ze(ge)}else ze(null);ut([])}else ze(null),ut([])},[]);y.useEffect(()=>{if(!k||bs||Ie)return;const R=$=>{var us,ds;if(Ht.current){Ht.current=!1;return}const K=$.composedPath()[0]||$.target;if(Po(K,"[data-feedback-toolbar]")||Po(K,"[data-annotation-popup]")||Po(K,"[data-annotation-marker]"))return;if($.metaKey&&$.shiftKey&&!q&&!ce){$.preventDefault(),$.stopPropagation();const vn=hr($.clientX,$.clientY);if(!vn)return;const Bn=vn.getBoundingClientRect(),{name:Wt,path:qt,reactComponents:fs}=im(vn,Cs),Cn=xn.findIndex(to=>to.element===vn);Cn>=0?po(to=>to.filter((To,Qn)=>Qn!==Cn)):po(to=>[...to,{element:vn,rect:Bn,name:Wt,path:qt,reactComponents:fs!=null?fs:void 0}]);return}const W=Po(K,"button, a, input, select, textarea, [role='button'], [onclick]");if(Xt.blockInteractions&&W&&($.preventDefault(),$.stopPropagation()),q){if(W&&!Xt.blockInteractions)return;$.preventDefault(),(us=An.current)==null||us.shake();return}if(ce){if(W&&!Xt.blockInteractions)return;$.preventDefault(),(ds=Zs.current)==null||ds.shake();return}$.preventDefault();const se=hr($.clientX,$.clientY);if(!se)return;const{name:ge,path:We,reactComponents:Fe}=im(se,Cs),et=se.getBoundingClientRect(),vt=$.clientX/window.innerWidth*100,Nt=rm(se),Qt=Nt?$.clientY:$.clientY+window.scrollY,Zt=window.getSelection();let wt;Zt&&Zt.toString().trim().length>0&&(wt=Zt.toString().trim().slice(0,500));const dt=Xu(se),cs=qu(se);me({x:vt,y:Qt,clientY:$.clientY,element:ge,elementPath:We,selectedText:wt,boundingBox:{x:et.left,y:Nt?et.top:et.top+window.scrollY,width:et.width,height:et.height},nearbyText:sc(se),cssClasses:oc(se),isFixed:Nt,fullPath:Ku(se),accessibility:Gu(se),computedStyles:cs,computedStylesObj:dt,nearbyElements:Fu(se),reactComponents:Fe!=null?Fe:void 0,sourceFile:nd(se),targetElement:se}),le(null)};return document.addEventListener("click",R,!0),()=>document.removeEventListener("click",R,!0)},[k,bs,Ie,q,ce,Xt.blockInteractions,Cs,xn]),y.useEffect(()=>{if(!k)return;const R=W=>{W.key==="Meta"&&(rs.current.cmd=!0),W.key==="Shift"&&(rs.current.shift=!0)},$=W=>{const se=rs.current.cmd&&rs.current.shift;W.key==="Meta"&&(rs.current.cmd=!1),W.key==="Shift"&&(rs.current.shift=!1);const ge=rs.current.cmd&&rs.current.shift;se&&!ge&&xn.length>0&&Vi()},K=()=>{rs.current={cmd:!1,shift:!1},po([])};return document.addEventListener("keydown",R),document.addEventListener("keyup",$),window.addEventListener("blur",K),()=>{document.removeEventListener("keydown",R),document.removeEventListener("keyup",$),window.removeEventListener("blur",K)}},[k,xn,Vi]),y.useEffect(()=>{if(!k||q||bs||Ie)return;const R=$=>{const K=$.composedPath()[0]||$.target;Po(K,"[data-feedback-toolbar]")||Po(K,"[data-annotation-marker]")||Po(K,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(K.tagName)||K.isContentEditable||($.preventDefault(),Ee.current={x:$.clientX,y:$.clientY})};return document.addEventListener("mousedown",R),()=>document.removeEventListener("mousedown",R)},[k,q,bs,Ie]),y.useEffect(()=>{if(!k||q)return;const R=$=>{if(!Ee.current)return;const K=$.clientX-Ee.current.x,W=$.clientY-Ee.current.y,se=K*K+W*W,ge=Dt*Dt;if(!V&&se>=ge&&(Ce.current=Ee.current,ue(!0),$.preventDefault()),(V||se>=ge)&&Ce.current){if(Ve.current){const Wt=Math.min(Ce.current.x,$.clientX),qt=Math.min(Ce.current.y,$.clientY),fs=Math.abs($.clientX-Ce.current.x),Cn=Math.abs($.clientY-Ce.current.y);Ve.current.style.transform=`translate(${Wt}px, ${qt}px)`,Ve.current.style.width=`${fs}px`,Ve.current.style.height=`${Cn}px`}const We=Date.now();if(We-Kt.current<tn)return;Kt.current=We;const Fe=Ce.current.x,et=Ce.current.y,vt=Math.min(Fe,$.clientX),Nt=Math.min(et,$.clientY),Qt=Math.max(Fe,$.clientX),Zt=Math.max(et,$.clientY),wt=(vt+Qt)/2,dt=(Nt+Zt)/2,cs=new Set,us=[[vt,Nt],[Qt,Nt],[vt,Zt],[Qt,Zt],[wt,dt],[wt,Nt],[wt,Zt],[vt,dt],[Qt,dt]];for(const[Wt,qt]of us){const fs=document.elementsFromPoint(Wt,qt);for(const Cn of fs)Cn instanceof HTMLElement&&cs.add(Cn)}const ds=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Wt of ds)if(Wt instanceof HTMLElement){const qt=Wt.getBoundingClientRect(),fs=qt.left+qt.width/2,Cn=qt.top+qt.height/2,to=fs>=vt&&fs<=Qt&&Cn>=Nt&&Cn<=Zt,To=Math.min(qt.right,Qt)-Math.max(qt.left,vt),Qn=Math.min(qt.bottom,Zt)-Math.max(qt.top,Nt),gi=To>0&&Qn>0?To*Qn:0,Di=qt.width*qt.height,Ni=Di>0?gi/Di:0;(to||Ni>.5)&&cs.add(Wt)}const vn=[],Bn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Wt of cs){if(Po(Wt,"[data-feedback-toolbar]")||Po(Wt,"[data-annotation-marker]"))continue;const qt=Wt.getBoundingClientRect();if(!(qt.width>window.innerWidth*.8&&qt.height>window.innerHeight*.5)&&!(qt.width<10||qt.height<10)&&qt.left<Qt&&qt.right>vt&&qt.top<Zt&&qt.bottom>Nt){const fs=Wt.tagName;let Cn=Bn.has(fs);if(!Cn&&(fs==="DIV"||fs==="SPAN")){const to=Wt.textContent&&Wt.textContent.trim().length>0,To=Wt.onclick!==null||Wt.getAttribute("role")==="button"||Wt.getAttribute("role")==="link"||Wt.classList.contains("clickable")||Wt.hasAttribute("data-clickable");(to||To)&&!Wt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Cn=!0)}if(Cn){let to=!1;for(const To of vn)if(To.left<=qt.left&&To.right>=qt.right&&To.top<=qt.top&&To.bottom>=qt.bottom){to=!0;break}to||vn.push(qt)}}}if(pt.current){const Wt=pt.current;for(;Wt.children.length>vn.length;)Wt.removeChild(Wt.lastChild);vn.forEach((qt,fs)=>{let Cn=Wt.children[fs];Cn||(Cn=document.createElement("div"),Cn.className=Pe.selectedElementHighlight,Wt.appendChild(Cn)),Cn.style.transform=`translate(${qt.left}px, ${qt.top}px)`,Cn.style.width=`${qt.width}px`,Cn.style.height=`${qt.height}px`})}}};return document.addEventListener("mousemove",R,{passive:!0}),()=>document.removeEventListener("mousemove",R)},[k,q,V,Dt]),y.useEffect(()=>{if(!k)return;const R=$=>{const K=V,W=Ce.current;if(V&&W){Ht.current=!0;const se=Math.min(W.x,$.clientX),ge=Math.min(W.y,$.clientY),We=Math.max(W.x,$.clientX),Fe=Math.max(W.y,$.clientY),et=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(wt=>{if(!(wt instanceof HTMLElement)||Po(wt,"[data-feedback-toolbar]")||Po(wt,"[data-annotation-marker]"))return;const dt=wt.getBoundingClientRect();dt.width>window.innerWidth*.8&&dt.height>window.innerHeight*.5||dt.width<10||dt.height<10||dt.left<We&&dt.right>se&&dt.top<Fe&&dt.bottom>ge&&et.push({element:wt,rect:dt})});const Nt=et.filter(({element:wt})=>!et.some(({element:dt})=>dt!==wt&&wt.contains(dt))),Qt=$.clientX/window.innerWidth*100,Zt=$.clientY+window.scrollY;if(Nt.length>0){const wt=Nt.reduce((Bn,{rect:Wt})=>({left:Math.min(Bn.left,Wt.left),top:Math.min(Bn.top,Wt.top),right:Math.max(Bn.right,Wt.right),bottom:Math.max(Bn.bottom,Wt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),dt=Nt.slice(0,5).map(({element:Bn})=>ul(Bn).name).join(", "),cs=Nt.length>5?` +${Nt.length-5} more`:"",us=Nt[0].element,ds=Xu(us),vn=qu(us);me({x:Qt,y:Zt,clientY:$.clientY,element:`${Nt.length} elements: ${dt}${cs}`,elementPath:"multi-select",boundingBox:{x:wt.left,y:wt.top+window.scrollY,width:wt.right-wt.left,height:wt.bottom-wt.top},isMultiSelect:!0,fullPath:Ku(us),accessibility:Gu(us),computedStyles:vn,computedStylesObj:ds,nearbyElements:Fu(us),cssClasses:oc(us),nearbyText:sc(us),sourceFile:nd(us)})}else{const wt=Math.abs(We-se),dt=Math.abs(Fe-ge);wt>20&&dt>20&&me({x:Qt,y:Zt,clientY:$.clientY,element:"Area selection",elementPath:`region at (${Math.round(se)}, ${Math.round(ge)})`,boundingBox:{x:se,y:ge+window.scrollY,width:wt,height:dt},isMultiSelect:!0})}le(null)}else K&&(Ht.current=!0);Ee.current=null,Ce.current=null,ue(!1),pt.current&&(pt.current.innerHTML="")};return document.addEventListener("mouseup",R),()=>document.removeEventListener("mouseup",R)},[k,V]);const $o=y.useCallback(async(R,$,K)=>{const W=Xt.webhookUrl||S;if(!W||!Xt.webhooksEnabled&&!K)return!1;try{return(await fetch(W,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:R,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...$})})).ok}catch(se){return console.warn("[Agentation] Webhook failed:",se),!1}},[S,Xt.webhookUrl,Xt.webhooksEnabled]),Cr=y.useCallback(R=>{var K;if(!q)return;const $={id:Date.now().toString(),x:q.x,y:q.y,comment:R,element:q.element,elementPath:q.elementPath,timestamp:Date.now(),selectedText:q.selectedText,boundingBox:q.boundingBox,nearbyText:q.nearbyText,cssClasses:q.cssClasses,isMultiSelect:q.isMultiSelect,isFixed:q.isFixed,fullPath:q.fullPath,accessibility:q.accessibility,computedStyles:q.computedStyles,nearbyElements:q.nearbyElements,reactComponents:q.reactComponents,sourceFile:q.sourceFile,elementBoundingBoxes:q.elementBoundingBoxes,..._&&Sn?{sessionId:Sn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};I(W=>[...W,$]),It.current=$.id,Ut(()=>{It.current=null},300),Ut(()=>{js(W=>new Set(W).add($.id))},250),a==null||a($),$o("annotation.add",{annotation:$}),w(!0),Ut(()=>{me(null),w(!1)},150),(K=window.getSelection())==null||K.removeAllRanges(),_&&Sn&&sl(_,Sn,$).then(W=>{W.id!==$.id&&(I(se=>se.map(ge=>ge.id===$.id?{...ge,id:W.id}:ge)),js(se=>{const ge=new Set(se);return ge.delete($.id),ge.add(W.id),ge}))}).catch(W=>{console.warn("[Agentation] Failed to sync annotation:",W)})},[q,a,$o,_,Sn]),Be=y.useCallback(()=>{w(!0),Ut(()=>{me(null),w(!1)},150)},[]),Je=y.useCallback(R=>{const $=M.findIndex(W=>W.id===R),K=M[$];(ce==null?void 0:ce.id)===R&&(B(!0),Ut(()=>{He(null),ze(null),ut([]),B(!1)},150)),Rt(R),uo(W=>new Set(W).add(R)),K&&(c==null||c(K),$o("annotation.delete",{annotation:K})),_&&Wa(_,R).catch(W=>{console.warn("[Agentation] Failed to delete annotation from server:",W)}),Ut(()=>{I(W=>W.filter(se=>se.id!==R)),uo(W=>{const se=new Set(W);return se.delete(R),se}),Rt(null),$<M.length-1&&(ct($),Ut(()=>ct(null),200))},150)},[M,ce,c,$o,_]),yt=y.useCallback(R=>{var $;if(!R){Ge(null),rt(null),$t([]);return}if(Ge(R.id),($=R.elementBoundingBoxes)!=null&&$.length){const K=[];for(const W of R.elementBoundingBoxes){const se=W.x+W.width/2,ge=W.y+W.height/2-window.scrollY,Fe=document.elementsFromPoint(se,ge).find(et=>!et.closest("[data-annotation-marker]")&&!et.closest("[data-agentation-root]"));Fe&&K.push(Fe)}$t(K),rt(null)}else if(R.boundingBox){const K=R.boundingBox,W=K.x+K.width/2,se=R.isFixed?K.y+K.height/2:K.y+K.height/2-window.scrollY,ge=hr(W,se);if(ge){const We=ge.getBoundingClientRect(),Fe=We.width/K.width,et=We.height/K.height;Fe<.5||et<.5?rt(null):rt(ge)}else rt(null);$t([])}else rt(null),$t([])},[]),ft=y.useCallback(R=>{if(!ce)return;const $={...ce,comment:R};I(K=>K.map(W=>W.id===ce.id?$:W)),u==null||u($),$o("annotation.update",{annotation:$}),_&&Gy(_,ce.id,{comment:R}).catch(K=>{console.warn("[Agentation] Failed to update annotation on server:",K)}),B(!0),Ut(()=>{He(null),ze(null),ut([]),B(!1)},150)},[ce,u,$o,_]),Lt=y.useCallback(()=>{B(!0),Ut(()=>{He(null),ze(null),ut([]),B(!1)},150)},[]),gt=y.useCallback(()=>{const R=M.length,$=qe.length>0||!!Ze;if(R===0&&wn.length===0&&!$)return;if(d==null||d(M),$o("annotations.clear",{annotations:M}),_){Promise.all(M.map(se=>Wa(_,se.id).catch(ge=>{console.warn("[Agentation] Failed to delete annotation from server:",ge)})));for(const[,se]of Ro.current)se&&Wa(_,se).catch(()=>{});Ro.current.clear();for(const[,se]of Yo.current)se&&Wa(_,se).catch(()=>{});Yo.current.clear()}ve(!0),ke(!0),pi([]);const K=Bo.current;if(K){const se=K.getContext("2d");se&&se.clearRect(0,0,K.width,K.height)}(qe.length>0||Ze)&&(xs(se=>se+1),ni(se=>se+1),Ut(()=>{Bt([]),jn(null)},200)),mt&&Ft(!1),Gt&&kn(""),Ln.current={rearrange:null,placements:[]},Ju(_t);const W=R*30+200;Ut(()=>{I([]),js(new Set),localStorage.removeItem(Md(_t)),ve(!1)},W),Ut(()=>ke(!1),1500)},[_t,M,wn,qe,Ze,mt,Gt,d,$o,_]),fn=y.useCallback(async()=>{const R=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:_t,$=Ie&&mt;let K;if($){if(qe.length===0&&!Ze&&!Gt)return;K=""}else{if(K=Zy(M,R,Xt.outputDetail),!K&&wn.length===0&&qe.length===0&&!Ze)return;K||(K=`## Page Feedback: ${R}
`)}if(!$&&wn.length>0){const W=new Set;for(const Fe of M)Fe.drawingIndex!=null&&W.add(Fe.drawingIndex);const se=Bo.current;se&&(se.style.visibility="hidden");const ge=[],We=window.scrollY;for(let Fe=0;Fe<wn.length;Fe++){if(W.has(Fe))continue;const et=wn[Fe];if(et.points.length<2)continue;const vt=et.fixed?et.points:et.points.map(In=>({x:In.x,y:In.y-We}));let Nt=1/0,Qt=1/0,Zt=-1/0,wt=-1/0;for(const In of vt)Nt=Math.min(Nt,In.x),Qt=Math.min(Qt,In.y),Zt=Math.max(Zt,In.x),wt=Math.max(wt,In.y);const dt=Zt-Nt,cs=wt-Qt,us=Math.hypot(dt,cs),ds=vt[0],vn=vt[vt.length-1],Bn=Math.hypot(vn.x-ds.x,vn.y-ds.y);let Wt;const qt=Bn<us*.35,fs=dt/Math.max(cs,1);if(qt&&us>20){const In=Math.max(dt,cs)*.15;let Ri=0;for(const Yi of vt){const zc=Yi.x-Nt<In,Yd=Zt-Yi.x<In,Wd=Yi.y-Qt<In,Fd=wt-Yi.y<In;(zc||Yd)&&(Wd||Fd)&&Ri++}Wt=Ri>vt.length*.15?"box":"circle"}else fs>3&&cs<40?Wt="underline":Bn>us*.5?Wt="arrow":Wt="drawing";const Cn=Math.min(10,vt.length),to=Math.max(1,Math.floor(vt.length/Cn)),To=new Set,Qn=[],gi=[ds];for(let In=to;In<vt.length-1;In+=to)gi.push(vt[In]);gi.push(vn);for(const In of gi){const Ri=hr(In.x,In.y);if(!Ri||To.has(Ri)||Po(Ri,"[data-feedback-toolbar]"))continue;To.add(Ri);const{name:Yi}=ul(Ri);Qn.includes(Yi)||Qn.push(Yi)}const Di=`${Math.round(Nt)},${Math.round(Qt)} → ${Math.round(Zt)},${Math.round(wt)}`;let Ni;(Wt==="circle"||Wt==="box")&&Qn.length>0?Ni=`${Wt==="box"?"Boxed":"Circled"} **${Qn[0]}**${Qn.length>1?` (and ${Qn.slice(1).join(", ")})`:""} (region: ${Di})`:Wt==="underline"&&Qn.length>0?Ni=`Underlined **${Qn[0]}** (${Di})`:Wt==="arrow"&&Qn.length>=2?Ni=`Arrow from **${Qn[0]}** to **${Qn[Qn.length-1]}** (${Math.round(ds.x)},${Math.round(ds.y)} → ${Math.round(vn.x)},${Math.round(vn.y)})`:Qn.length>0?Ni=`${Wt==="arrow"?"Arrow":"Drawing"} near **${Qn.join("**, **")}** (region: ${Di})`:Ni=`Drawing at ${Di}`,ge.push(Ni)}se&&(se.style.visibility=""),ge.length>0&&(K+=`
**Drawings:**
`,ge.forEach((Fe,et)=>{K+=`${et+1}. ${Fe}
`}))}if((qe.length>0||$&&Gt)&&(K+=`
`+Wy(qe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:mt,wireframePurpose:Gt||void 0},Xt.outputDetail)),Ze){const W=Fy(Ze,Xt.outputDetail,{width:window.innerWidth,height:window.innerHeight});W&&(K+=`
`+W)}if(g)try{await navigator.clipboard.writeText(K)}catch{}h==null||h(K),D(!0),Ut(()=>D(!1),2e3),Xt.autoClearAfterCopy&&Ut(()=>gt(),500)},[M,wn,qe,Ze,mt,Ie,is,Gt,_t,Xt.outputDetail,Cs,Xt.autoClearAfterCopy,gt,g,h]),ln=y.useCallback(async()=>{const R=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:_t;let $=Zy(M,R,Xt.outputDetail);if(!$&&qe.length===0&&!Ze)return;if($||($=`## Page Feedback: ${R}
`),qe.length>0&&($+=`
`+Wy(qe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:mt,wireframePurpose:Gt||void 0},Xt.outputDetail)),Ze){const W=Fy(Ze,Xt.outputDetail,{width:window.innerWidth,height:window.innerHeight});W&&($+=`
`+W)}p&&p($,M),G("sending"),await new Promise(W=>Ut(W,150));const K=await $o("submit",{output:$,annotations:M},!0);G(K?"sent":"failed"),Ut(()=>G("idle"),2500),K&&Xt.autoClearAfterCopy&&Ut(()=>gt(),500)},[p,$o,M,qe,Ze,mt,is,_t,Xt.outputDetail,Cs,Xt.autoClearAfterCopy,gt]);y.useEffect(()=>{if(!Gn)return;const R=10,$=W=>{const se=W.clientX-Gn.x,ge=W.clientY-Gn.y,We=Math.sqrt(se*se+ge*ge);if(!Ys&&We>R&&ws(!0),Ys||We>R){let Fe=Gn.toolbarX+se,et=Gn.toolbarY+ge;const vt=20,Nt=337,Qt=44,wt=Nt-(k?_s==="connected"?297:257:44),dt=vt-wt,cs=window.innerWidth-vt-Nt;Fe=Math.max(dt,Math.min(cs,Fe)),et=Math.max(vt,Math.min(window.innerHeight-Qt-vt,et)),Vs({x:Fe,y:et})}},K=()=>{Ys&&(ks.current=!0),ws(!1),Mo(null)};return document.addEventListener("mousemove",$),document.addEventListener("mouseup",K),()=>{document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",K)}},[Gn,Ys,k,_s]);const ls=y.useCallback(R=>{var ge,We;if(R.target.closest("button")||R.target.closest("[data-agentation-settings-panel]"))return;const $=R.currentTarget.parentElement;if(!$)return;const K=$.getBoundingClientRect(),W=(ge=en==null?void 0:en.x)!=null?ge:K.left,se=(We=en==null?void 0:en.y)!=null?We:K.top;Mo({x:R.clientX,y:R.clientY,toolbarX:W,toolbarY:se})},[en]);if(y.useEffect(()=>{if(!en)return;const R=()=>{let se=en.x,ge=en.y;const et=20-(337-(k?_s==="connected"?297:257:44)),vt=window.innerWidth-20-337;se=Math.max(et,Math.min(vt,se)),ge=Math.max(20,Math.min(window.innerHeight-44-20,ge)),(se!==en.x||ge!==en.y)&&Vs({x:se,y:ge})};return R(),window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[en,k,_s]),y.useEffect(()=>{const R=$=>{const K=$.target,W=K.tagName==="INPUT"||K.tagName==="TEXTAREA"||K.isContentEditable;if($.key==="Escape"){if(Ie){Ot?zt(null):zo();return}if(bs){Rs(!1);return}if(xn.length>0){po([]);return}q||k&&(Fn(),j(!1))}if(($.metaKey||$.ctrlKey)&&$.shiftKey&&($.key==="f"||$.key==="F")){$.preventDefault(),Fn(),k?ai():j(!0);return}if(!(W||$.metaKey||$.ctrlKey)&&(($.key==="p"||$.key==="P")&&($.preventDefault(),Fn(),eo()),($.key==="l"||$.key==="L")&&($.preventDefault(),Fn(),bs&&Rs(!1),_e&&Xe(!1),q&&Be(),Ie?zo():nt(!0)),($.key==="h"||$.key==="H")&&M.length>0&&($.preventDefault(),Fn(),N(se=>!se)),($.key==="c"||$.key==="C")&&(M.length>0||qe.length>0||Ze)&&($.preventDefault(),Fn(),fn()),($.key==="x"||$.key==="X")&&(M.length>0||qe.length>0||Ze)&&($.preventDefault(),Fn(),gt(),qe.length>0&&Bt([]),Ze&&jn(null)),$.key==="s"||$.key==="S")){const se=Gi(Xt.webhookUrl)||Gi(S||"");M.length>0&&se&&te==="idle"&&($.preventDefault(),Fn(),ln())}};return document.addEventListener("keydown",R),()=>document.removeEventListener("keydown",R)},[k,bs,Ie,Ot,qe,Ze,q,M.length,Xt.webhookUrl,S,te,ln,eo,fn,gt,xn]),!Qe||P)return null;const Ss=M.length>0,go=M.filter(R=>!Ms.has(R.id)&&R.kind!=="placement"&&R.kind!=="rearrange"),ta=go.length>0,fo=M.filter(R=>Ms.has(R.id)),ba=R=>{const ge=R.x/100*window.innerWidth,We=typeof R.y=="string"?parseFloat(R.y):R.y,Fe={};window.innerHeight-We-22-10<80&&(Fe.top="auto",Fe.bottom="calc(100% + 10px)");const vt=ge-200/2,Nt=10;if(vt<Nt){const Qt=Nt-vt;Fe.left=`calc(50% + ${Qt}px)`}else if(vt+200>window.innerWidth-Nt){const Qt=vt+200-(window.innerWidth-Nt);Fe.left=`calc(50% - ${Qt}px)`}return Fe};return Ec.createPortal(l.jsxs("div",{ref:Z,style:{display:"contents"},"data-agentation-theme":Bs?"dark":"light","data-agentation-accent":Xt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${Pe.toolbar}${C?` ${C}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:en?{left:en.x,top:en.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${Pe.toolbarContainer} ${k?Pe.expanded:Pe.collapsed} ${Lo?Pe.entrance:""} ${Y?Pe.hiding:""} ${!Xt.webhooksEnabled&&(Gi(Xt.webhookUrl)||Gi(S||""))?Pe.serverConnected:""}`,onClick:k?void 0:R=>{if(ks.current){ks.current=!1,R.preventDefault();return}j(!0)},onMouseDown:ls,role:k?void 0:"button",tabIndex:k?-1:0,title:k?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${Pe.toggleContent} ${k?Pe.hidden:Pe.visible}`,children:[l.jsx(Nw,{size:24}),ta&&l.jsx("span",{className:`${Pe.badge} ${k?Pe.fadeOut:""} ${Lo?Pe.entrance:""}`,children:go.length})]}),l.jsxs("div",{className:`${Pe.controlsContent} ${k?Pe.visible:Pe.hidden} ${en&&en.y<100?Pe.tooltipBelow:""} ${bt||_e?Pe.tooltipsHidden:""} ${Co?Pe.tooltipsInSession:""}`,onMouseEnter:ko,onMouseLeave:Wo,children:[l.jsxs("div",{className:`${Pe.buttonWrapper} ${en&&en.x<120?Pe.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:Pe.controlButton,onClick:R=>{R.stopPropagation(),Fn(),eo()},"data-active":J,children:l.jsx(zw,{size:24,isPaused:J})}),l.jsxs("span",{className:Pe.buttonTooltip,children:[J?"Resume animations":"Pause animations",l.jsx("span",{className:Pe.shortcut,children:"P"})]})]}),l.jsxs("div",{className:Pe.buttonWrapper,children:[l.jsx("button",{className:`${Pe.controlButton} ${Bs?"":Pe.light}`,onClick:R=>{R.stopPropagation(),Fn(),bs&&Rs(!1),_e&&Xe(!1),q&&Be(),Ie?zo():nt(!0)},"data-active":Ie,style:Ie&&mt?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(Fw,{size:21})}),l.jsxs("span",{className:Pe.buttonTooltip,children:[Ie?"Exit layout mode":"Layout mode",l.jsx("span",{className:Pe.shortcut,children:"L"})]})]}),l.jsxs("div",{className:Pe.buttonWrapper,children:[l.jsx("button",{className:Pe.controlButton,onClick:R=>{R.stopPropagation(),Fn(),N(!L)},disabled:!Ss||Ie,children:l.jsx(Ow,{size:24,isOpen:L})}),l.jsxs("span",{className:Pe.buttonTooltip,children:[L?"Hide markers":"Show markers",l.jsx("span",{className:Pe.shortcut,children:"H"})]})]}),l.jsxs("div",{className:Pe.buttonWrapper,children:[l.jsx("button",{className:`${Pe.controlButton} ${Me?Pe.statusShowing:""}`,onClick:R=>{R.stopPropagation(),Fn(),fn()},disabled:Ie&&mt?qe.length===0&&!((qo=Ze==null?void 0:Ze.sections)!=null&&qo.length):!Ss&&wn.length===0&&qe.length===0&&!((Lc=Ze==null?void 0:Ze.sections)!=null&&Lc.length),"data-active":Me,children:l.jsx(Bw,{size:24,copied:Me,tint:Ie&&mt&&(qe.length>0||(xl=Ze==null?void 0:Ze.sections)!=null&&xl.length)?"#f97316":void 0})}),l.jsxs("span",{className:Pe.buttonTooltip,children:[Ie&&mt?"Copy layout":"Copy feedback",l.jsx("span",{className:Pe.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${Pe.buttonWrapper} ${Pe.sendButtonWrapper} ${k&&!Xt.webhooksEnabled&&(Gi(Xt.webhookUrl)||Gi(S||""))?Pe.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${Pe.controlButton} ${te==="sent"||te==="failed"?Pe.statusShowing:""}`,onClick:R=>{R.stopPropagation(),Fn(),ln()},disabled:!Ss||!Gi(Xt.webhookUrl)&&!Gi(S||"")||te==="sending","data-no-hover":te==="sent"||te==="failed",tabIndex:Gi(Xt.webhookUrl)||Gi(S||"")?0:-1,children:[l.jsx(Lw,{size:24,state:te}),Ss&&te==="idle"&&l.jsx("span",{className:Pe.buttonBadge,children:M.length})]}),l.jsxs("span",{className:Pe.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:Pe.shortcut,children:"S"})]})]}),l.jsxs("div",{className:Pe.buttonWrapper,children:[l.jsx("button",{className:Pe.controlButton,onClick:R=>{R.stopPropagation(),Fn(),gt()},disabled:!Ss&&wn.length===0&&qe.length===0&&!((bl=Ze==null?void 0:Ze.sections)!=null&&bl.length),"data-danger":!0,children:l.jsx(Iw,{size:24})}),l.jsxs("span",{className:Pe.buttonTooltip,children:["Clear all",l.jsx("span",{className:Pe.shortcut,children:"X"})]})]}),l.jsxs("div",{className:Pe.buttonWrapper,children:[l.jsx("button",{className:Pe.controlButton,onClick:R=>{R.stopPropagation(),Fn(),Ie&&zo(),Xe(!_e)},children:l.jsx($w,{size:24})}),_&&_s!=="disconnected"&&l.jsx("span",{className:`${Pe.mcpIndicator} ${Pe[_s]} ${_e?Pe.hidden:""}`,title:_s==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:Pe.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:Pe.divider}),l.jsxs("div",{className:`${Pe.buttonWrapper} ${en&&typeof window<"u"&&en.x>window.innerWidth-120?Pe.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:Pe.controlButton,onClick:R=>{R.stopPropagation(),Fn(),ai()},children:l.jsx(Pw,{size:24})}),l.jsxs("span",{className:Pe.buttonTooltip,children:["Exit",l.jsx("span",{className:Pe.shortcut,children:"Esc"})]})]})]}),l.jsx(v4,{visible:Ie&&k,activeType:Ot,onSelect:R=>{zt(Ot===R?null:R)},isDarkMode:Bs,sectionCount:(va=Ze==null?void 0:Ze.sections.length)!=null?va:0,onDetectSections:()=>{var We,Fe;const R=N4(),$=(We=Ze==null?void 0:Ze.sections)!=null?We:[],K=new Set($.map(et=>et.selector)),W=R.filter(et=>!K.has(et.selector)),se=[...$,...W],ge=[...(Fe=Ze==null?void 0:Ze.originalOrder)!=null?Fe:[],...W.map(et=>et.id)];jn({sections:se,originalOrder:ge,detectedAt:Date.now()})},placementCount:qe.length,onClearPlacements:()=>{xs(R=>R+1),ni(R=>R+1),Ut(()=>{jn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:mt,onBlankCanvasChange:R=>{const $={sections:[],originalOrder:[],detectedAt:Date.now()};R?(io.current={rearrange:Ze,placements:qe},jn(Ln.current.rearrange||$),Bt(Ln.current.placements),zt(null)):(Ln.current={rearrange:Ze,placements:qe},jn(io.current.rearrange||$),Bt(io.current.placements)),Ft(R)},wireframePurpose:Gt,onWireframePurposeChange:kn,Tooltip:yr,onDragStart:(R,$)=>{var Qt;$.preventDefault();const K=xt[R];let W=null,se=!1;const ge=$.clientX,We=$.clientY,Fe=$.target.closest("[data-feedback-toolbar]"),et=(Qt=Fe==null?void 0:Fe.getBoundingClientRect().top)!=null?Qt:window.innerHeight,vt=Zt=>{const wt=Zt.clientX-ge,dt=Zt.clientY-We;if(!se&&(Math.abs(wt)>4||Math.abs(dt)>4)&&(se=!0,W=document.createElement("div"),W.className=`${je.dragPreview}${mt?` ${je.dragPreviewWireframe}`:""}`,document.body.appendChild(W)),!W)return;const cs=Math.max(0,et-Zt.clientY),us=Math.min(1,cs/180),ds=1-Math.pow(1-us,2),vn=28,Bn=20,Wt=Math.min(140,K.width*.18),qt=Math.min(90,K.height*.18),fs=vn+(Wt-vn)*ds,Cn=Bn+(qt-Bn)*ds;W.style.width=`${fs}px`,W.style.height=`${Cn}px`,W.style.left=`${Zt.clientX-fs/2}px`,W.style.top=`${Zt.clientY-Cn/2}px`,W.style.opacity=`${.5+.5*ds}`,W.textContent=ds>.25?R:""},Nt=Zt=>{if(window.removeEventListener("mousemove",vt),window.removeEventListener("mouseup",Nt),W&&document.body.removeChild(W),se){const wt=K.width,dt=K.height,cs=window.scrollY,us=Math.max(0,Zt.clientX-wt/2),ds=Math.max(0,Zt.clientY+cs-dt/2),vn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:R,x:us,y:ds,width:wt,height:dt,scrollY:cs,timestamp:Date.now()};Bt(Bn=>[...Bn,vn]),zt(null),Do.current=new Set,ao(Bn=>Bn+1)}};window.addEventListener("mousemove",vt),window.addEventListener("mouseup",Nt)}}),l.jsx(H6,{settings:Xt,onSettingsChange:R=>Ai($=>({...$,...R})),isDarkMode:Bs,onToggleTheme:Ls,isDevMode:jo,connectionStatus:_s,endpoint:_,isVisible:Ue,toolbarNearBottom:!!en&&en.y<230,settingsPage:St,onSettingsPageChange:Ye,onHideToolbar:ii})]})}),(Ie||Vt)&&l.jsx("div",{className:`${je.blankCanvas} ${Rn?je.visible:""} ${Jt?je.gridActive:""}`,style:{"--canvas-opacity":gn},"data-feedback-toolbar":!0}),Ie&&mt&&Rn&&l.jsxs("div",{className:je.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:je.wireframeOpacityRow,children:[l.jsx("span",{className:je.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:je.wireframeOpacitySlider,min:0,max:1,step:.01,value:gn,onChange:R=>oo(Number(R.target.value))})]}),l.jsxs("div",{className:je.wireframeNoticeTitleRow,children:[l.jsx("span",{className:je.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:je.wireframeNoticeDivider}),l.jsx("button",{className:je.wireframeStartOver,onClick:()=>{xs(R=>R+1),jn({sections:[],originalOrder:[],detectedAt:Date.now()}),Ln.current={rearrange:null,placements:[]},kn(""),Ju(_t)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Ie||Vt)&&l.jsx(_4,{placements:qe,onChange:Bt,activeComponent:Vt?null:Ot,onActiveComponentChange:zt,isDarkMode:Bs,exiting:Vt,onInteractionChange:yn,passthrough:!Ot,extraSnapRects:Ze==null?void 0:Ze.sections.map(R=>R.currentRect),deselectSignal:Ns,clearSignal:ps,wireframe:mt,onSelectionChange:(R,$)=>{Do.current=R,$||(Qs.current=new Set,ys(K=>K+1))},onDragMove:(R,$)=>{const K=Qs.current;if(!(!K.size||!Ze)){if(!Wn.current){Wn.current=new Map;for(const W of Ze.sections)K.has(W.id)&&Wn.current.set(W.id,{x:W.currentRect.x,y:W.currentRect.y})}for(const W of Ze.sections){if(!K.has(W.id)||!Wn.current.get(W.id))continue;const ge=document.querySelector(`[data-rearrange-section="${W.id}"]`);ge&&(ge.style.transform=`translate(${R}px, ${$}px)`)}}},onDragEnd:(R,$,K)=>{const W=Qs.current,se=Wn.current;if(Wn.current=null,!(!W.size||!Ze||!se)){for(const ge of W){const We=document.querySelector(`[data-rearrange-section="${ge}"]`);We&&(We.style.transform="")}K&&jn(ge=>ge&&{...ge,sections:ge.sections.map(We=>{const Fe=se.get(We.id);return Fe?{...We,currentRect:{...We.currentRect,x:Math.max(0,Fe.x+R),y:Math.max(0,Fe.y+$)}}:We})})}}}),(Ie||Vt)&&Ze&&l.jsx(L4,{rearrangeState:Ze,onChange:jn,isDarkMode:Bs,exiting:Vt,blankCanvas:mt,extraSnapRects:qe.map(R=>({x:R.x,y:R.y,width:R.width,height:R.height})),clearSignal:on,deselectSignal:ro,onSelectionChange:(R,$)=>{Qs.current=R,$||(Do.current=new Set,ao(K=>K+1))},onDragMove:(R,$)=>{const K=Do.current;if(K.size){if(!Wn.current){Wn.current=new Map;for(const W of qe)K.has(W.id)&&Wn.current.set(W.id,{x:W.x,y:W.y})}for(const W of K){const se=document.querySelector(`[data-design-placement="${W}"]`);se&&(se.style.transform=`translate(${R}px, ${$}px)`)}}},onDragEnd:(R,$,K)=>{const W=Do.current,se=Wn.current;if(Wn.current=null,!(!W.size||!se)){for(const ge of W){const We=document.querySelector(`[data-design-placement="${ge}"]`);We&&(We.style.transform="")}K&&Bt(ge=>ge.map(We=>{const Fe=se.get(We.id);return Fe?{...We,x:Math.max(0,Fe.x+R),y:Math.max(0,Fe.y+$)}:We}))}}}),l.jsx("canvas",{ref:Bo,className:`${Pe.drawCanvas} ${bs?Pe.active:""}`,style:{opacity:Ts?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:Pe.markersLayer,"data-feedback-toolbar":!0,children:[oe&&go.filter(R=>!R.isFixed).map((R,$,K)=>l.jsx(Jy,{annotation:R,globalIndex:go.findIndex(W=>W.id===R.id),layerIndex:$,layerSize:K.length,isExiting:be,isClearing:Ne,isAnimated:_o.has(R.id),isHovered:!be&&st===R.id,isDeleting:lt===R.id,isEditingAny:!!ce,renumberFrom:Oe,markerClickBehavior:Xt.markerClickBehavior,tooltipStyle:ba(R),onHoverEnter:W=>!be&&W.id!==It.current&&yt(W),onHoverLeave:()=>yt(null),onClick:W=>Xt.markerClickBehavior==="delete"?Je(W.id):ea(W),onContextMenu:ea},R.id)),oe&&!be&&fo.filter(R=>!R.isFixed).map(R=>l.jsx(e1,{annotation:R},R.id))]}),l.jsxs("div",{className:Pe.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[oe&&go.filter(R=>R.isFixed).map((R,$,K)=>l.jsx(Jy,{annotation:R,globalIndex:go.findIndex(W=>W.id===R.id),layerIndex:$,layerSize:K.length,isExiting:be,isClearing:Ne,isAnimated:_o.has(R.id),isHovered:!be&&st===R.id,isDeleting:lt===R.id,isEditingAny:!!ce,renumberFrom:Oe,markerClickBehavior:Xt.markerClickBehavior,tooltipStyle:ba(R),onHoverEnter:W=>!be&&W.id!==It.current&&yt(W),onHoverLeave:()=>yt(null),onClick:W=>Xt.markerClickBehavior==="delete"?Je(W.id):ea(W),onContextMenu:ea},R.id)),oe&&!be&&fo.filter(R=>R.isFixed).map(R=>l.jsx(e1,{annotation:R,fixed:!0},R.id))]}),k&&l.jsxs("div",{className:Pe.overlay,"data-feedback-toolbar":!0,style:q||ce?{zIndex:99999}:void 0,children:[(Q==null?void 0:Q.rect)&&!q&&!it&&!V&&l.jsx("div",{className:`${Pe.hoverHighlight} ${Pe.enter}`,style:{left:Q.rect.left,top:Q.rect.top,width:Q.rect.width,height:Q.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),xn.filter(R=>document.contains(R.element)).map((R,$)=>{const K=R.element.getBoundingClientRect(),W=xn.length>1;return l.jsx("div",{className:W?Pe.multiSelectOutline:Pe.singleSelectOutline,style:{position:"fixed",left:K.left,top:K.top,width:K.width,height:K.height,...W?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},$)}),st&&!q&&(()=>{var se;const R=M.find(ge=>ge.id===st);if(!(R!=null&&R.boundingBox))return null;if((se=R.elementBoundingBoxes)!=null&&se.length)return tt.length>0?tt.filter(ge=>document.contains(ge)).map((ge,We)=>{const Fe=ge.getBoundingClientRect();return l.jsx("div",{className:`${Pe.multiSelectOutline} ${Pe.enter}`,style:{left:Fe.left,top:Fe.top,width:Fe.width,height:Fe.height}},`hover-outline-live-${We}`)}):R.elementBoundingBoxes.map((ge,We)=>l.jsx("div",{className:`${Pe.multiSelectOutline} ${Pe.enter}`,style:{left:ge.x,top:ge.y-at,width:ge.width,height:ge.height}},`hover-outline-${We}`));const $=$e&&document.contains($e)?$e.getBoundingClientRect():null,K=$?{x:$.left,y:$.top,width:$.width,height:$.height}:{x:R.boundingBox.x,y:R.isFixed?R.boundingBox.y:R.boundingBox.y-at,width:R.boundingBox.width,height:R.boundingBox.height},W=R.isMultiSelect;return l.jsx("div",{className:`${W?Pe.multiSelectOutline:Pe.singleSelectOutline} ${Pe.enter}`,style:{left:K.x,top:K.y,width:K.width,height:K.height,...W?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),Q&&!q&&!it&&!V&&l.jsxs("div",{className:`${Pe.hoverTooltip} ${Pe.enter}`,style:{left:Math.max(8,Math.min(z.x,window.innerWidth-100)),top:Math.max(z.y-(Q.reactComponents?48:32),8)},children:[Q.reactComponents&&l.jsx("div",{className:Pe.hoverReactPath,children:Q.reactComponents}),l.jsx("div",{className:Pe.hoverElementName,children:Q.elementName})]}),q&&l.jsxs(l.Fragment,{children:[(wa=q.multiSelectElements)!=null&&wa.length?q.multiSelectElements.filter(R=>document.contains(R)).map((R,$)=>{const K=R.getBoundingClientRect();return l.jsx("div",{className:`${Pe.multiSelectOutline} ${T?Pe.exit:Pe.enter}`,style:{left:K.left,top:K.top,width:K.width,height:K.height}},`pending-multi-${$}`)}):q.targetElement&&document.contains(q.targetElement)?(()=>{const R=q.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${Pe.singleSelectOutline} ${T?Pe.exit:Pe.enter}`,style:{left:R.left,top:R.top,width:R.width,height:R.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():q.boundingBox&&l.jsx("div",{className:`${q.isMultiSelect?Pe.multiSelectOutline:Pe.singleSelectOutline} ${T?Pe.exit:Pe.enter}`,style:{left:q.boundingBox.x,top:q.boundingBox.y-at,width:q.boundingBox.width,height:q.boundingBox.height,...q.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const R=q.x,$=q.isFixed?q.y:q.y-at;return l.jsxs(l.Fragment,{children:[l.jsx(D6,{x:R,y:$,isMultiSelect:q.isMultiSelect,isExiting:T}),l.jsx(kd,{ref:An,element:q.element,selectedText:q.selectedText,computedStyles:q.computedStylesObj,placeholder:q.element==="Area selection"?"What should change in this area?":q.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Cr,onCancel:Be,isExiting:T,lightMode:!Bs,accentColor:q.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,R/100*window.innerWidth)),...$>window.innerHeight-290?{bottom:window.innerHeight-$+20}:{top:$+20}}})]})})()]}),ce&&l.jsxs(l.Fragment,{children:[(Oc=ce.elementBoundingBoxes)!=null&&Oc.length?Tt.length>0?Tt.filter(R=>document.contains(R)).map((R,$)=>{const K=R.getBoundingClientRect();return l.jsx("div",{className:`${Pe.multiSelectOutline} ${Pe.enter}`,style:{left:K.left,top:K.top,width:K.width,height:K.height}},`edit-multi-live-${$}`)}):ce.elementBoundingBoxes.map((R,$)=>l.jsx("div",{className:`${Pe.multiSelectOutline} ${Pe.enter}`,style:{left:R.x,top:R.y-at,width:R.width,height:R.height}},`edit-multi-${$}`)):(()=>{const R=Ke&&document.contains(Ke)?Ke.getBoundingClientRect():null,$=R?{x:R.left,y:R.top,width:R.width,height:R.height}:ce.boundingBox?{x:ce.boundingBox.x,y:ce.isFixed?ce.boundingBox.y:ce.boundingBox.y-at,width:ce.boundingBox.width,height:ce.boundingBox.height}:null;return $?l.jsx("div",{className:`${ce.isMultiSelect?Pe.multiSelectOutline:Pe.singleSelectOutline} ${Pe.enter}`,style:{left:$.x,top:$.y,width:$.width,height:$.height,...ce.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(kd,{ref:Zs,element:ce.element,selectedText:ce.selectedText,computedStyles:T4(ce.computedStyles),placeholder:"Edit your feedback...",initialValue:ce.comment,submitLabel:"Save",onSubmit:ft,onCancel:Lt,onDelete:()=>Je(ce.id),isExiting:A,lightMode:!Bs,accentColor:ce.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const R=ce.isFixed?ce.y:ce.y-at;return{left:Math.max(160,Math.min(window.innerWidth-160,ce.x/100*window.innerWidth)),...R>window.innerHeight-290?{bottom:window.innerHeight-R+20}:{top:R+20}}})()})]}),V&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:Ve,className:Pe.dragSelection}),l.jsx("div",{ref:pt,className:Pe.highlightsContainer})]})]})]}),document.body)}const gp=y.createContext({});function Ac(t){const n=y.useRef(null);return n.current===null&&(n.current=t()),n.current}const Y6=typeof window<"u",yp=Y6?y.useLayoutEffect:y.useEffect,Od=y.createContext(null);function xp(t,n){t.indexOf(n)===-1&&t.push(n)}function fl(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const Ji=(t,n,i)=>i>n?n:i<t?t:i;let bp=()=>{};const Ka={},nb=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function sb(t){return typeof t=="object"&&t!==null}const ob=t=>/^0[^.\s]+$/u.test(t);function ib(t){let n;return()=>(n===void 0&&(n=t()),n)}const Ti=t=>t,W6=(t,n)=>i=>n(t(i)),Dc=(...t)=>t.reduce(W6),hl=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class vp{constructor(){this.subscriptions=[]}add(n){return xp(this.subscriptions,n),()=>fl(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ti=t=>t*1e3,Mi=t=>t/1e3;function ab(t,n){return n?t*(1e3/n):0}const F6=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},rb=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,X6=1e-7,q6=12;function G6(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=rb(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>X6&&++h<q6);return d}function Nc(t,n,i,a){if(t===n&&i===a)return Ti;const c=u=>G6(u,0,1,t,i);return u=>u===0||u===1?u:rb(c(u),n,a)}const lb=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,cb=t=>n=>1-t(1-n),ub=Nc(.33,1.53,.69,.99),wp=cb(ub),db=lb(wp),fb=t=>t>=1?1:(t*=2)<1?.5*wp(t):.5*(2-Math.pow(2,-10*(t-1))),Sp=t=>1-Math.sin(Math.acos(t)),hb=cb(Sp),mb=lb(Sp),K6=Nc(.42,0,1,1),Q6=Nc(0,0,.58,1),pb=Nc(.42,0,.58,1),_b=t=>Array.isArray(t)&&typeof t[0]!="number";function gb(t,n){return _b(t)?t[F6(0,t.length,n)]:t}const yb=t=>Array.isArray(t)&&typeof t[0]=="number",Z6={linear:Ti,easeIn:K6,easeInOut:pb,easeOut:Q6,circIn:Sp,circInOut:mb,circOut:hb,backIn:wp,backInOut:db,backOut:ub,anticipate:fb},J6=t=>typeof t=="string",o1=t=>{if(yb(t)){bp(t.length===4);const[n,i,a,c]=t;return Nc(n,i,a,c)}else if(J6(t))return Z6[t];return t},sd=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function eC(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(_){d.has(_)&&(g.schedule(_),t()),_(h)}const g={schedule:(_,x=!1,b=!1)=>{const C=b&&c?i:a;return x&&d.add(_),C.add(_),_},cancel:_=>{a.delete(_),d.delete(_)},process:_=>{if(h=_,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,g.process(_))}};return g}const tC=40;function xb(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=sd.reduce((L,N)=>(L[N]=eC(u),L),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:_,update:x,preRender:b,render:S,postRender:C}=d,k=()=>{const L=Ka.useManualTiming,N=L?c.timestamp:performance.now();i=!1,L||(c.delta=a?1e3/60:Math.max(Math.min(N-c.timestamp,tC),1)),c.timestamp=N,c.isProcessing=!0,h.process(c),p.process(c),g.process(c),_.process(c),x.process(c),b.process(c),S.process(c),C.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(k))},j=()=>{i=!0,a=!0,c.isProcessing||t(k)};return{schedule:sd.reduce((L,N)=>{const P=d[N];return L[N]=(X,Y=!1,U=!1)=>(i||j(),P.schedule(X,Y,U)),L},{}),cancel:L=>{for(let N=0;N<sd.length;N++)d[sd[N]].cancel(L)},state:c,steps:d}}const{schedule:Yn,cancel:xa,state:wo,steps:lm}=xb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ti,!0);let hd;function nC(){hd=void 0}const Ho={now:()=>(hd===void 0&&Ho.set(wo.isProcessing||Ka.useManualTiming?wo.timestamp:performance.now()),hd),set:t=>{hd=t,queueMicrotask(nC)}},bb=t=>n=>typeof n=="string"&&n.startsWith(t),vb=bb("--"),sC=bb("var(--"),Cp=t=>sC(t)?oC.test(t.split("/*")[0].trim()):!1,oC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function i1(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const pl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Sc={...pl,transform:t=>Ji(0,1,t)},od={...pl,default:1},gc=t=>Math.round(t*1e5)/1e5,kp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function iC(t){return t==null}const aC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,jp=(t,n)=>i=>!!(typeof i=="string"&&aC.test(i)&&i.startsWith(t)||n&&!iC(i)&&Object.prototype.hasOwnProperty.call(i,n)),wb=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(kp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},rC=t=>Ji(0,255,t),cm={...pl,transform:t=>Math.round(rC(t))},xr={test:jp("rgb","red"),parse:wb("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+cm.transform(t)+", "+cm.transform(n)+", "+cm.transform(i)+", "+gc(Sc.transform(a))+")"};function lC(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const $m={test:jp("#"),parse:lC,transform:xr.transform},Rc=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Fa=Rc("deg"),Zi=Rc("%"),Mt=Rc("px"),cC=Rc("vh"),uC=Rc("vw"),a1={...Zi,parse:t=>Zi.parse(t)/100,transform:t=>Zi.transform(t*100)},rl={test:jp("hsl","hue"),parse:wb("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+Zi.transform(gc(n))+", "+Zi.transform(gc(i))+", "+gc(Sc.transform(a))+")"},Ks={test:t=>xr.test(t)||$m.test(t)||rl.test(t),parse:t=>xr.test(t)?xr.parse(t):rl.test(t)?rl.parse(t):$m.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?xr.transform(t):rl.transform(t),getAnimatableNone:t=>{const n=Ks.parse(t);return n.alpha=0,Ks.transform(n)}},dC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function fC(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(kp))==null?void 0:n.length)||0)+(((i=t.match(dC))==null?void 0:i.length)||0)>0}const Sb="number",Cb="color",hC="var",mC="var(",r1="${}",pC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ml(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(pC,p=>(Ks.test(p)?(a.color.push(u),c.push(Cb),i.push(Ks.parse(p))):p.startsWith(mC)?(a.var.push(u),c.push(hC),i.push(p)):(a.number.push(u),c.push(Sb),i.push(parseFloat(p))),++u,r1)).split(r1);return{values:i,split:h,indexes:a,types:c}}function _C(t){return ml(t).values}function kb({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===Sb?c+=gc(a[u]):d===Cb?c+=Ks.transform(a[u]):c+=a[u]}return c}}function gC(t){return kb(ml(t))}const yC=t=>typeof t=="number"?0:Ks.test(t)?Ks.getAnimatableNone(t):t,xC=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:yC(t);function bC(t){const n=ml(t);return kb(n)(n.values.map((a,c)=>xC(a,n.split[c])))}const Ui={test:fC,parse:_C,createTransformer:gC,getAnimatableNone:bC};function um(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function vC({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=um(p,h,t+1/3),u=um(p,h,t),d=um(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Td(t,n){return i=>i>0?n:t}const ss=(t,n,i)=>t+(n-t)*i,dm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},wC=[$m,xr,rl],SC=t=>wC.find(n=>n.test(t));function l1(t){const n=SC(t);if(!n)return!1;let i=n.parse(t);return n===rl&&(i=vC(i)),i}const c1=(t,n)=>{const i=l1(t),a=l1(n);if(!i||!a)return Td(t,n);const c={...i};return u=>(c.red=dm(i.red,a.red,u),c.green=dm(i.green,a.green,u),c.blue=dm(i.blue,a.blue,u),c.alpha=ss(i.alpha,a.alpha,u),xr.transform(c))},Im=new Set(["none","hidden"]);function CC(t,n){return Im.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function kC(t,n){return i=>ss(t,n,i)}function Mp(t){return typeof t=="number"?kC:typeof t=="string"?Cp(t)?Td:Ks.test(t)?c1:TC:Array.isArray(t)?jb:typeof t=="object"?Ks.test(t)?c1:jC:Td}function jb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>Mp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function jC(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=Mp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function MC(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const TC=(t,n)=>{const i=Ui.createTransformer(n),a=ml(t),c=ml(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Im.has(t)&&!c.values.length||Im.has(n)&&!a.values.length?CC(t,n):Dc(jb(MC(a,c),c.values),i):Td(t,n)};function Mb(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?ss(t,n,i):Mp(t)(t,n)}const EC=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>Yn.update(n,i),stop:()=>xa(n),now:()=>wo.isProcessing?wo.timestamp:Ho.now()}},Tb=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Ed=2e4;function Tp(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Ed;)n+=i,a=t.next(n);return n>=Ed?1/0:n}function Eb(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(Tp(a),Ed);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Mi(c)}}const Ds={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Pm(t,n){return t*Math.sqrt(1-n*n)}const AC=12;function DC(t,n,i){let a=i;for(let c=1;c<AC;c++)a=a-t(a)/n(a);return a}const fm=.001;function NC({duration:t=Ds.duration,bounce:n=Ds.bounce,velocity:i=Ds.velocity,mass:a=Ds.mass}){let c,u,d=1-n;d=Ji(Ds.minDamping,Ds.maxDamping,d),t=Ji(Ds.minDuration,Ds.maxDuration,Mi(t)),d<1?(c=g=>{const _=g*d,x=_*t,b=_-i,S=Pm(g,d),C=Math.exp(-x);return fm-b/S*C},u=g=>{const x=g*d*t,b=x*i+i,S=Math.pow(d,2)*Math.pow(g,2)*t,C=Math.exp(-x),k=Pm(Math.pow(g,2),d);return(-c(g)+fm>0?-1:1)*((b-S)*C)/k}):(c=g=>{const _=Math.exp(-g*t),x=(g-i)*t+1;return-fm+_*x},u=g=>{const _=Math.exp(-g*t),x=(i-g)*(t*t);return _*x});const h=5/t,p=DC(c,u,h);if(t=ti(t),isNaN(p))return{stiffness:Ds.stiffness,damping:Ds.damping,duration:t};{const g=Math.pow(p,2)*a;return{stiffness:g,damping:d*2*Math.sqrt(a*g),duration:t}}}const RC=["duration","bounce"],BC=["stiffness","damping","mass"];function u1(t,n){return n.some(i=>t[i]!==void 0)}function LC(t){let n={velocity:Ds.velocity,stiffness:Ds.stiffness,damping:Ds.damping,mass:Ds.mass,isResolvedFromDuration:!1,...t};if(!u1(t,BC)&&u1(t,RC))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*Ji(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Ds.mass,stiffness:c,damping:u}}else{const i=NC({...t,velocity:0});n={...n,...i,mass:Ds.mass},n.isResolvedFromDuration=!0}return n}function Cc(t=Ds.visualDuration,n=Ds.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:g,mass:_,duration:x,velocity:b,isResolvedFromDuration:S}=LC({...i,velocity:-Mi(i.velocity||0)}),C=b||0,k=g/(2*Math.sqrt(p*_)),j=d-u,M=Mi(Math.sqrt(p/_)),I=Math.abs(j)<5;a||(a=I?Ds.restSpeed.granular:Ds.restSpeed.default),c||(c=I?Ds.restDelta.granular:Ds.restDelta.default);let L,N,P,X,Y,U;if(k<1)P=Pm(M,k),X=(C+k*M*j)/P,L=oe=>{const ie=Math.exp(-k*M*oe);return d-ie*(X*Math.sin(P*oe)+j*Math.cos(P*oe))},Y=k*M*X+j*P,U=k*M*j-X*P,N=oe=>Math.exp(-k*M*oe)*(Y*Math.sin(P*oe)+U*Math.cos(P*oe));else if(k===1){L=ie=>d-Math.exp(-M*ie)*(j+(C+M*j)*ie);const oe=C+M*j;N=ie=>Math.exp(-M*ie)*(M*oe*ie-C)}else{const oe=M*Math.sqrt(k*k-1);L=Q=>{const le=Math.exp(-k*M*Q),z=Math.min(oe*Q,300);return d-le*((C+k*M*j)*Math.sinh(z)+oe*j*Math.cosh(z))/oe};const ie=(C+k*M*j)/oe,be=k*M*ie-j*oe,Te=k*M*j-ie*oe;N=Q=>{const le=Math.exp(-k*M*Q),z=Math.min(oe*Q,300);return le*(be*Math.sinh(z)+Te*Math.cosh(z))}}const Z={calculatedDuration:S&&x||null,velocity:oe=>ti(N(oe)),next:oe=>{if(!S&&k<1){const be=Math.exp(-k*M*oe),Te=Math.sin(P*oe),Q=Math.cos(P*oe),le=d-be*(X*Te+j*Q),z=ti(be*(Y*Te+U*Q));return h.done=Math.abs(z)<=a&&Math.abs(d-le)<=c,h.value=h.done?d:le,h}const ie=L(oe);if(S)h.done=oe>=x;else{const be=ti(N(oe));h.done=Math.abs(be)<=a&&Math.abs(d-ie)<=c}return h.value=h.done?d:ie,h},toString:()=>{const oe=Math.min(Tp(Z),Ed),ie=Tb(be=>Z.next(oe*be).value,oe,30);return oe+"ms "+ie},toTransition:()=>{}};return Z}Cc.applyToOptions=t=>{const n=Eb(t,100,Cc);return t.ease=n.ease,t.duration=ti(n.duration),t.type="keyframes",t};const OC=5;function Ab(t,n,i){const a=Math.max(n-OC,0);return ab(i-t(a),n-a)}function Hm({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:g=.5,restSpeed:_}){const x=t[0],b={done:!1,value:x},S=U=>h!==void 0&&U<h||p!==void 0&&U>p,C=U=>h===void 0?p:p===void 0||Math.abs(h-U)<Math.abs(p-U)?h:p;let k=i*n;const j=x+k,M=d===void 0?j:d(j);M!==j&&(k=M-x);const I=U=>-k*Math.exp(-U/a),L=U=>M+I(U),N=U=>{const Z=I(U),oe=L(U);b.done=Math.abs(Z)<=g,b.value=b.done?M:oe};let P,X;const Y=U=>{S(b.value)&&(P=U,X=Cc({keyframes:[b.value,C(b.value)],velocity:Ab(L,U,b.value),damping:c,stiffness:u,restDelta:g,restSpeed:_}))};return Y(0),{calculatedDuration:null,next:U=>{let Z=!1;return!X&&P===void 0&&(Z=!0,N(U),Y(U)),P!==void 0&&U>=P?X.next(U-P):(!Z&&N(U),b)}}}function zC(t,n,i){const a=[],c=i||Ka.mix||Mb,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||Ti:n;h=Dc(p,h)}a.push(h)}return a}function Db(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(bp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=zC(n,a,c),p=h.length,g=_=>{if(d&&_<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(_<t[x+1]);x++);const b=hl(t[x],t[x+1],_);return h[x](b)};return i?_=>g(Ji(t[0],t[u-1],_)):g}function Nb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=hl(0,n,a);t.push(ss(i,1,c))}}function Rb(t){const n=[0];return Nb(n,t.length-1),n}function $C(t,n){return t.map(i=>i*n)}function IC(t,n){return t.map(()=>n||pb).splice(0,t.length-1)}function yc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=_b(a)?a.map(o1):o1(a),u={done:!1,value:n[0]},d=$C(i&&i.length===n.length?i:Rb(n),t),h=Db(d,n,{ease:Array.isArray(c)?c:IC(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const PC=t=>t!==null;function zd(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(PC),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const HC={decay:Hm,inertia:Hm,tween:yc,keyframes:yc,spring:Cc};function Bb(t){typeof t.type=="string"&&(t.type=HC[t.type])}class Ep{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const UC=t=>t/100;class Ad extends Ep{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==Ho.now()&&this.tick(Ho.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Bb(n);const{type:i=yc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||yc;p!==yc&&typeof h[0]!="number"&&(this.mixKeyframes=Dc(UC,Mb(h[0],h[1])),h=[0,100]);const g=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=Tp(g));const{calculatedDuration:_}=g;this.calculatedDuration=_,this.resolvedDuration=_+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=g}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:g=0,keyframes:_,repeat:x,repeatType:b,repeatDelay:S,type:C,onUpdate:k,finalKeyframe:j}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const M=this.currentTime-g*(this.playbackSpeed>=0?1:-1),I=this.playbackSpeed>=0?M<0:M>c;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let L=this.currentTime,N=a;if(x){const U=Math.min(this.currentTime,c)/h;let Z=Math.floor(U),oe=U%1;!oe&&U>=1&&(oe=1),oe===1&&Z--,Z=Math.min(Z,x+1),!!(Z%2)&&(b==="reverse"?(oe=1-oe,S&&(oe-=S/h)):b==="mirror"&&(N=d)),L=Ji(0,1,oe)*h}let P;I?(this.delayState.value=_[0],P=this.delayState):P=N.next(L),u&&!I&&(P.value=u(P.value));let{done:X}=P;!I&&p!==null&&(X=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const Y=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&X);return Y&&C!==Hm&&(P.value=zd(_,this.options,j,this.speed)),k&&k(P.value),Y&&this.finish(),P}then(n,i){return this.finished.then(n,i)}get duration(){return Mi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Mi(n)}get time(){return Mi(this.currentTime)}set time(n){n=ti(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Ab(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(Ho.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Mi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=EC,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ho.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function VC(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const br=t=>t*180/Math.PI,Um=t=>{const n=br(Math.atan2(t[1],t[0]));return Vm(n)},YC={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Um,rotateZ:Um,skewX:t=>br(Math.atan(t[1])),skewY:t=>br(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Vm=t=>(t=t%360,t<0&&(t+=360),t),d1=Um,f1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),h1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),WC={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:f1,scaleY:h1,scale:t=>(f1(t)+h1(t))/2,rotateX:t=>Vm(br(Math.atan2(t[6],t[5]))),rotateY:t=>Vm(br(Math.atan2(-t[2],t[0]))),rotateZ:d1,rotate:d1,skewX:t=>br(Math.atan(t[4])),skewY:t=>br(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Ym(t){return t.includes("scale")?1:0}function Wm(t,n){if(!t||t==="none")return Ym(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=WC,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=YC,c=h}if(!c)return Ym(n);const u=a[n],d=c[1].split(",").map(XC);return typeof u=="function"?u(d):d[u]}const FC=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Wm(i,n)};function XC(t){return parseFloat(t.trim())}const _l=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],gl=new Set(_l),m1=t=>t===pl||t===Mt,qC=new Set(["x","y","z"]),GC=_l.filter(t=>!qC.has(t));function KC(t){const n=[];return GC.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const Ga={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Wm(n,"x"),y:(t,{transform:n})=>Wm(n,"y")};Ga.translateX=Ga.x;Ga.translateY=Ga.y;const vr=new Set;let Fm=!1,Xm=!1,qm=!1;function Lb(){if(Xm){const t=Array.from(vr).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=KC(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Xm=!1,Fm=!1,vr.forEach(t=>t.complete(qm)),vr.clear()}function Ob(){vr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Xm=!0)})}function QC(){qm=!0,Ob(),Lb(),qm=!1}class Ap{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(vr.add(this),Fm||(Fm=!0,Yn.read(Ob),Yn.resolveKeyframes(Lb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}VC(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),vr.delete(this)}cancel(){this.state==="scheduled"&&(vr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const ZC=t=>t.startsWith("--");function zb(t,n,i){ZC(n)?t.style.setProperty(n,i):t.style[n]=i}const JC={};function $b(t,n){const i=ib(t);return()=>{var a;return(a=JC[n])!=null?a:i()}}const e3=$b(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Ib=$b(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),fc=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,p1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:fc([0,.65,.55,1]),circOut:fc([.55,0,1,.45]),backIn:fc([.31,.01,.66,-.59]),backOut:fc([.33,1.53,.69,.99])};function Pb(t,n){if(t)return typeof t=="function"?Ib()?Tb(t,n):"ease-out":yb(t)?fc(t):Array.isArray(t)?t.map(i=>Pb(i,n)||p1.easeOut):p1[t]}function t3(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},g=void 0){const _={[n]:i};p&&(_.offset=p);const x=Pb(h,c);Array.isArray(x)&&(_.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return g&&(b.pseudoElement=g),t.animate(_,b)}function Dp(t){return typeof t=="function"&&"applyToOptions"in t}function n3({type:t,...n}){var i,a;return Dp(t)&&Ib()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Hb extends Ep{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,bp(typeof n.type!="string");const g=n3(n);this.animation=t3(i,a,c,g,u),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const _=zd(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(_),zb(i,a,_),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Mi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Mi(n)}get time(){return Mi(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ti(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&e3()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),Ti):c(this)}}const Ub={anticipate:fb,backInOut:db,circInOut:mb};function s3(t){return t in Ub}function o3(t){typeof t.ease=="string"&&s3(t.ease)&&(t.ease=Ub[t.ease])}const hm=10;class i3 extends Hb{constructor(n){o3(n),Bb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Ad({...d,autoplay:!1}),p=Math.max(hm,Ho.now()-this.startTime),g=Ji(0,hm,p-hm),_=h.sample(p).value,{name:x}=this.options;u&&x&&zb(u,x,_),i.setWithVelocity(h.sample(Math.max(0,p-g)).value,_,g),h.stop()}}const _1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ui.test(t)||t==="0")&&!t.startsWith("url("));function a3(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function r3(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=_1(c,n),h=_1(u,n);return!d||!h?!1:a3(t)||(i==="spring"||Dp(i))&&a}function Gm(t){t.duration=0,t.type="keyframes"}const Vb=new Set(["opacity","clipPath","filter","transform"]),l3=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function c3(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&l3.test(t[n]))return!0;return!1}const u3=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),d3=ib(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function f3(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:_}=n.owner.getProps();return d3()&&i&&(Vb.has(i)||u3.has(i)&&c3(h))&&(i!=="transform"||!_)&&!g&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const h3=40;class m3 extends Ep{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:g,element:_,...x}){var C;super(),this.stop=()=>{var k,j;this._animation&&(this._animation.stop(),(k=this.stopTimeline)==null||k.call(this)),(j=this.keyframeResolver)==null||j.cancel()},this.createdAt=Ho.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:g,element:_,...x},S=(_==null?void 0:_.KeyframeResolver)||Ap;this.keyframeResolver=new S(h,(k,j,M)=>this.onKeyframesResolved(k,j,b,!M),p,g,_),(C=this.keyframeResolver)==null||C.scheduleResolve()}onKeyframesResolved(n,i,a,c){var M,I;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:g,onUpdate:_}=a;this.resolvedAt=Ho.now();let x=!0;r3(n,u,d,h)||(x=!1,(Ka.instantAnimations||!p)&&(_==null||_(zd(n,a,i))),n[0]=n[n.length-1],Gm(a),a.repeat=0);const S={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>h3?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},C=x&&!g&&f3(S),k=(I=(M=S.motionValue)==null?void 0:M.owner)==null?void 0:I.current;let j;if(C)try{j=new i3({...S,element:k})}catch{j=new Ad(S)}else j=new Ad(S);j.finished.then(()=>{this.notifyFinished()}).catch(Ti),this.pendingTimeline&&(this.stopTimeline=j.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=j}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),QC()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class p3{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return g1(this.animations,"duration")}get iterationDuration(){return g1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function g1(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class _3 extends p3{then(n,i){return this.finished.finally(n).then(()=>{})}}function Yb(t,n,i,a=0,c=1){const u=Array.from(t).sort((g,_)=>g.sortNodePosition(_)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const g3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function y3(t){const n=g3.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function Wb(t,n,i=1){const[a,c]=y3(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return nb(d)?parseFloat(d):d}return Cp(c)?Wb(c,n,i+1):c}const x3={type:"spring",stiffness:500,damping:25,restSpeed:10},b3=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),v3={type:"keyframes",duration:.8},w3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},S3=(t,{keyframes:n})=>n.length>2?v3:gl.has(t)?t.startsWith("scale")?b3(n[1]):x3:w3;function Fb(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Np(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?Fb(i,t):i}const C3=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function k3(t){for(const n in t)if(!C3.has(n))return!0;return!1}const Rp=(t,n,i,a={},c,u)=>d=>{const h=Np(a,t)||{},p=h.delay||a.delay||0;let{elapsed:g=0}=a;g=g-ti(p);const _={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-g,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};k3(h)||Object.assign(_,S3(t,_)),_.duration&&(_.duration=ti(_.duration)),_.repeatDelay&&(_.repeatDelay=ti(_.repeatDelay)),_.from!==void 0&&(_.keyframes[0]=_.from);let x=!1;if((_.type===!1||_.duration===0&&!_.repeatDelay)&&(Gm(_),_.delay===0&&(x=!0)),(Ka.instantAnimations||Ka.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,Gm(_),_.delay=0),_.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=zd(_.keyframes,h);if(b!==void 0){Yn.update(()=>{_.onUpdate(b),_.onComplete()});return}}return h.isSync?new Ad(_):new m3(_)};function y1(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Bp(t,n,i,a){if(typeof n=="function"){const[c,u]=y1(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=y1(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function wr(t,n,i){const a=t.getProps();return Bp(a,n,i!==void 0?i:a.custom,t)}const Xb=new Set(["width","height","top","left","right","bottom",..._l]),x1=30,j3=t=>!isNaN(parseFloat(t)),xc={current:void 0};class M3{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=Ho.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Ho.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=j3(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new vp);const a=this.events[n].add(i);return n==="change"?()=>{a(),Yn.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return xc.current&&xc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=Ho.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>x1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,x1);return ab(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Qa(t,n){return new M3(t,n)}const Km=t=>Array.isArray(t);function T3(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,Qa(i))}function E3(t){return Km(t)?t[t.length-1]||0:t}function A3(t,n){const i=wr(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=E3(u[d]);T3(t,d,h)}}const so=t=>!!(t&&t.getVelocity);function D3(t){return!!(so(t)&&t.add)}function Qm(t,n){const i=t.getValue("willChange");if(D3(i))return i.add(n);if(!i&&Ka.WillChange){const a=new Ka.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Lp(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const N3="framerAppearId",qb="data-"+Lp(N3);function Gb(t){return t.props[qb]}function R3({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Op(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?Fb(u,p):p;const g=u==null?void 0:u.reduceMotion;a&&(u=a);const _=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const S in h){const C=t.getValue(S,(b=t.latestValues[S])!=null?b:null),k=h[S];if(k===void 0||x&&R3(x,S))continue;const j={delay:i,...Np(u||{},S)},M=C.get();if(M!==void 0&&!C.isAnimating()&&!Array.isArray(k)&&k===M&&!j.velocity){Yn.update(()=>C.set(k));continue}let I=!1;if(window.MotionHandoffAnimation){const P=Gb(t);if(P){const X=window.MotionHandoffAnimation(P,S,Yn);X!==null&&(j.startTime=X,I=!0)}}Qm(t,S);const L=g!=null?g:t.shouldReduceMotion;C.start(Rp(S,C,k,L&&Xb.has(S)?{type:!1}:j,t,I));const N=C.animation;N&&_.push(N)}if(d){const S=()=>Yn.update(()=>{d&&A3(t,d)});_.length?Promise.all(_).then(S):S()}return _}function Zm(t,n,i={}){var p;const a=wr(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Op(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:_=0,staggerChildren:x,staggerDirection:b}=c;return B3(t,n,g,_,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[g,_]=h==="beforeChildren"?[u,d]:[d,u];return g().then(()=>_())}else return Promise.all([u(),d(i.delay)])}function B3(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Zm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Yb(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function L3(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Zm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Zm(t,n,i);else{const c=typeof n=="function"?wr(t,n,i.custom):n;a=Promise.all(Op(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const O3={test:t=>t==="auto",parse:t=>t},Kb=t=>n=>n.test(t),Qb=[pl,Mt,Zi,Fa,uC,cC,O3],b1=t=>Qb.find(Kb(t));function z3(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||ob(t):!0}const $3=new Set(["brightness","contrast","saturate","opacity"]);function I3(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(kp)||[];if(!a)return t;const c=i.replace(a,"");let u=$3.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const P3=/\b([a-z-]*)\(.*?\)/gu,Jm={...Ui,getAnimatableNone:t=>{const n=t.match(P3);return n?n.map(I3).join(" "):t}},ep={...Ui,getAnimatableNone:t=>{const n=Ui.parse(t);return Ui.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},v1={...pl,transform:Math.round},H3={rotate:Fa,rotateX:Fa,rotateY:Fa,rotateZ:Fa,scale:od,scaleX:od,scaleY:od,scaleZ:od,skew:Fa,skewX:Fa,skewY:Fa,distance:Mt,translateX:Mt,translateY:Mt,translateZ:Mt,x:Mt,y:Mt,z:Mt,perspective:Mt,transformPerspective:Mt,opacity:Sc,originX:a1,originY:a1,originZ:Mt},zp={borderWidth:Mt,borderTopWidth:Mt,borderRightWidth:Mt,borderBottomWidth:Mt,borderLeftWidth:Mt,borderRadius:Mt,borderTopLeftRadius:Mt,borderTopRightRadius:Mt,borderBottomRightRadius:Mt,borderBottomLeftRadius:Mt,width:Mt,maxWidth:Mt,height:Mt,maxHeight:Mt,top:Mt,right:Mt,bottom:Mt,left:Mt,inset:Mt,insetBlock:Mt,insetBlockStart:Mt,insetBlockEnd:Mt,insetInline:Mt,insetInlineStart:Mt,insetInlineEnd:Mt,padding:Mt,paddingTop:Mt,paddingRight:Mt,paddingBottom:Mt,paddingLeft:Mt,paddingBlock:Mt,paddingBlockStart:Mt,paddingBlockEnd:Mt,paddingInline:Mt,paddingInlineStart:Mt,paddingInlineEnd:Mt,margin:Mt,marginTop:Mt,marginRight:Mt,marginBottom:Mt,marginLeft:Mt,marginBlock:Mt,marginBlockStart:Mt,marginBlockEnd:Mt,marginInline:Mt,marginInlineStart:Mt,marginInlineEnd:Mt,fontSize:Mt,backgroundPositionX:Mt,backgroundPositionY:Mt,...H3,zIndex:v1,fillOpacity:Sc,strokeOpacity:Sc,numOctaves:v1},U3={...zp,color:Ks,backgroundColor:Ks,outlineColor:Ks,fill:Ks,stroke:Ks,borderColor:Ks,borderTopColor:Ks,borderRightColor:Ks,borderBottomColor:Ks,borderLeftColor:Ks,filter:Jm,WebkitFilter:Jm,mask:ep,WebkitMask:ep},Zb=t=>U3[t],V3=new Set([Jm,ep]);function Jb(t,n){let i=Zb(t);return V3.has(i)||(i=Ui),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const Y3=new Set(["auto","none","0"]);function W3(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!Y3.has(u)&&ml(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=Jb(i,c)}class F3 extends Ap{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let _=0;_<n.length;_++){let x=n[_];if(typeof x=="string"&&(x=x.trim(),Cp(x))){const b=Wb(x,i.current);b!==void 0&&(n[_]=b),_===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!Xb.has(a)||n.length!==2)return;const[c,u]=n,d=b1(c),h=b1(u),p=i1(c),g=i1(u);if(p!==g&&Ga[a]){this.needsMeasurement=!0;return}if(d!==h)if(m1(d)&&m1(h))for(let _=0;_<n.length;_++){const x=n[_];typeof x=="string"&&(n[_]=parseFloat(x))}else Ga[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||z3(n[c]))&&a.push(c);a.length&&W3(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ga[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=Ga[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{n.getValue(p).set(g)}),this.resolveNoneKeyframes()}}function $p(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const e5=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function md(t){return sb(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Ip}=xb(queueMicrotask,!1),Ii={x:!1,y:!1};function t5(){return Ii.x||Ii.y}function X3(t){return t==="x"||t==="y"?Ii[t]?null:(Ii[t]=!0,()=>{Ii[t]=!1}):Ii.x||Ii.y?null:(Ii.x=Ii.y=!0,()=>{Ii.x=Ii.y=!1})}function n5(t,n){const i=$p(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function q3(t){return!(t.pointerType==="touch"||t5())}function G3(t,n,i={}){const[a,c,u]=n5(t,i);return a.forEach(d=>{let h=!1,p=!1,g;const _=()=>{d.removeEventListener("pointerleave",C)},x=j=>{g&&(g(j),g=void 0),_()},b=j=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(j))},S=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},C=j=>{if(j.pointerType!=="touch"){if(h){p=!0;return}x(j)}},k=j=>{if(!q3(j))return;p=!1;const M=n(d,j);typeof M=="function"&&(g=M,d.addEventListener("pointerleave",C,c))};d.addEventListener("pointerenter",k,c),d.addEventListener("pointerdown",S,c)}),u}const s5=(t,n)=>n?t===n?!0:s5(t,n.parentElement):!1,Pp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,K3=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Q3(t){return K3.has(t.tagName)||t.isContentEditable===!0}const Z3=new Set(["INPUT","SELECT","TEXTAREA"]);function J3(t){return Z3.has(t.tagName)||t.isContentEditable===!0}const pd=new WeakSet;function w1(t){return n=>{n.key==="Enter"&&t(n)}}function mm(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const ek=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=w1(()=>{if(pd.has(i))return;mm(i,"down");const c=w1(()=>{mm(i,"up")}),u=()=>mm(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function S1(t){return Pp(t)&&!t5()}const C1=new WeakSet;function tk(t,n,i={}){const[a,c,u]=n5(t,i),d=h=>{const p=h.currentTarget;if(!S1(h)||C1.has(h))return;pd.add(p),i.stopPropagation&&C1.add(h);const g=n(p,h),_=(S,C)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),pd.has(p)&&pd.delete(p),S1(S)&&typeof g=="function"&&g(S,{success:C})},x=S=>{_(S,p===window||p===document||i.useGlobalTarget||s5(p,S.target))},b=S=>{_(S,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),md(h)&&(h.addEventListener("focus",g=>ek(g,c)),!Q3(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function $d(t){return sb(t)&&"ownerSVGElement"in t}const _d=new WeakMap;let Xa;const o5=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:$d(a)&&"getBBox"in a?a.getBBox()[n]:a[i],nk=o5("inline","width","offsetWidth"),sk=o5("block","height","offsetHeight");function ok({target:t,borderBoxSize:n}){var i;(i=_d.get(t))==null||i.forEach(a=>{a(t,{get width(){return nk(t,n)},get height(){return sk(t,n)}})})}function ik(t){t.forEach(ok)}function ak(){typeof ResizeObserver>"u"||(Xa=new ResizeObserver(ik))}function rk(t,n){Xa||ak();const i=$p(t);return i.forEach(a=>{let c=_d.get(a);c||(c=new Set,_d.set(a,c)),c.add(n),Xa==null||Xa.observe(a)}),()=>{i.forEach(a=>{const c=_d.get(a);c==null||c.delete(n),c!=null&&c.size||Xa==null||Xa.unobserve(a)})}}const gd=new Set;let ll;function lk(){ll=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};gd.forEach(n=>n(t))},window.addEventListener("resize",ll)}function ck(t){return gd.add(t),ll||lk(),()=>{gd.delete(t),!gd.size&&typeof ll=="function"&&(window.removeEventListener("resize",ll),ll=void 0)}}function k1(t,n){return typeof t=="function"?ck(t):rk(t,n)}function i5(t){return $d(t)&&t.tagName==="svg"}function uk(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Db(c,u,d);return n?h(a):h}const dk=[...Qb,Ks,Ui],fk=t=>dk.find(Kb(t)),j1=()=>({translate:0,scale:1,origin:0,originPoint:0}),cl=()=>({x:j1(),y:j1()}),M1=()=>({min:0,max:0}),Gs=()=>({x:M1(),y:M1()}),kc=new WeakMap;function Id(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function jc(t){return typeof t=="string"||Array.isArray(t)}const Hp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Up=["initial",...Hp];function Pd(t){return Id(t.animate)||Up.some(n=>jc(t[n]))}function a5(t){return!!(Pd(t)||t.variants)}function hk(t,n,i){for(const a in n){const c=n[a],u=i[a];if(so(c))t.addValue(a,c);else if(so(u))t.addValue(a,Qa(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,Qa(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const tp={current:null},r5={current:!1},mk=typeof window<"u";function pk(){if(r5.current=!0,!!mk)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>tp.current=t.matches;t.addEventListener("change",n),n()}else tp.current=!1}const T1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Dd={};function l5(t){Dd=t}function _k(){return Dd}class c5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ap,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Ho.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Yn.render(this.render,!1,!0))};const{latestValues:g,renderState:_}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=i.initial?{...g}:{},this.renderState=_,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Pd(i),this.isVariantNode=a5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const S in b){const C=b[S];g[S]!==void 0&&so(C)&&C.set(g[S])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,kc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(r5.current||pk(),this.shouldReduceMotion=tp.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),xa(this.notifyUpdate),xa(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Vb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:g,duration:_}=i.accelerate,x=new Hb({element:this.current,name:n,keyframes:h,times:p,ease:g,duration:ti(_)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=gl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&Yn.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Dd){const i=Dd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Gs()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<T1.length;a++){const c=T1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=hk(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=Qa(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(nb(a)||ob(a))?a=parseFloat(a):!fk(a)&&Ui.test(i)&&(a=Jb(n,i)),this.setBaseTarget(n,so(a)?a.get():a)),so(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Bp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!so(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new vp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Ip.render(this.render)}}class u5 extends c5{constructor(){super(...arguments),this.KeyframeResolver=F3}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;so(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class Za{constructor(n){this.isMounted=!1,this.node=n}update(){}}function d5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function gk({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function yk(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function pm(t){return t===void 0||t===1}function np({scale:t,scaleX:n,scaleY:i}){return!pm(t)||!pm(n)||!pm(i)}function _r(t){return np(t)||f5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function f5(t){return E1(t.x)||E1(t.y)}function E1(t){return t&&t!=="0%"}function Nd(t,n,i){const a=t-i,c=n*a;return i+c}function A1(t,n,i,a,c){return c!==void 0&&(t=Nd(t,c,a)),Nd(t,i,a)+n}function sp(t,n=0,i=1,a,c){t.min=A1(t.min,n,i,a,c),t.max=A1(t.max,n,i,a,c)}function h5(t,{x:n,y:i}){sp(t.x,n.translate,n.scale,n.originPoint),sp(t.y,i.translate,i.scale,i.originPoint)}const D1=.999999999999,N1=1.0000000000001;function xk(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:g}=u.options;g&&g.props.style&&g.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(Qi(t.x,-u.scroll.offset.x),Qi(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,h5(t,d)),a&&_r(u.latestValues)&&yd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<N1&&n.x>D1&&(n.x=1),n.y<N1&&n.y>D1&&(n.y=1)}function Qi(t,n){t.min+=n,t.max+=n}function R1(t,n,i,a,c=.5){const u=ss(t.min,t.max,c);sp(t,n,i,u,a)}function B1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function yd(t,n,i){const a=i!=null?i:t;R1(t.x,B1(n.x,a.x),n.scaleX,n.scale,n.originX),R1(t.y,B1(n.y,a.y),n.scaleY,n.scale,n.originY)}function m5(t,n){return d5(yk(t.getBoundingClientRect(),n))}function bk(t,n,i){const a=m5(t,i),{scroll:c}=n;return c&&(Qi(a.x,c.offset.x),Qi(a.y,c.offset.y)),a}const vk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},wk=_l.length;function Sk(t,n,i){let a="",c=!0;for(let u=0;u<wk;u++){const d=_l[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const g=parseFloat(h);p=d.startsWith("scale")?g===1:g===0}if(!p||i){const g=e5(h,zp[d]);if(!p){c=!1;const _=vk[d]||d;a+=`${_}(${g}) `}i&&(n[d]=g)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Vp(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const g=n[p];if(gl.has(p)){d=!0;continue}else if(vb(p)){c[p]=g;continue}else{const _=e5(g,zp[p]);p.startsWith("origin")?(h=!0,u[p]=_):a[p]=_}}if(n.transform||(d||i?a.transform=Sk(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:_=0}=u;a.transformOrigin=`${p} ${g} ${_}`}}function p5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function L1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const cc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(Mt.test(t))t=parseFloat(t);else return t;const i=L1(t,n.target.x),a=L1(t,n.target.y);return`${i}% ${a}%`}},Ck={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=Ui.parse(t);if(c.length>5)return a;const u=Ui.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const g=ss(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),u(c)}},op={borderRadius:{...cc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:cc,borderTopRightRadius:cc,borderBottomLeftRadius:cc,borderBottomRightRadius:cc,boxShadow:Ck};function _5(t,{layout:n,layoutId:i}){return gl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!op[t]||t==="opacity")}function Yp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(so(a[h])||c&&so(c[h])||_5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function kk(t){return window.getComputedStyle(t)}class g5 extends u5{constructor(){super(...arguments),this.type="html",this.renderInstance=p5}readValueFromInstance(n,i){var a;if(gl.has(i))return(a=this.projection)!=null&&a.isProjecting?Ym(i):FC(n,i);{const c=kk(n),u=(vb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return m5(n,i)}build(n,i,a){Vp(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Yp(n,i,a)}}function jk(t,n){return t in n}class Mk extends c5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(jk(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return Gs()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const Tk={offset:"stroke-dashoffset",array:"stroke-dasharray"},Ek={offset:"strokeDashoffset",array:"strokeDasharray"};function Ak(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?Tk:Ek;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const Dk=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function y5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,g,_){var S,C;if(Vp(t,h,g),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(S=x.transformOrigin)!=null?S:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(C=_==null?void 0:_.transformBox)!=null?C:"fill-box",delete x.transformBox);for(const k of Dk)x[k]!==void 0&&(b[k]=x[k],delete x[k]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&Ak(x,c,u,d,!1)}const x5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),b5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Nk(t,n,i,a){p5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(x5.has(c)?c:Lp(c),n.attrs[c])}function v5(t,n,i){const a=Yp(t,n,i);for(const c in t)if(so(t[c])||so(n[c])){const u=_l.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class w5 extends u5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Gs}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(gl.has(i)){const a=Zb(i);return a&&a.default||0}return i=x5.has(i)?i:Lp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return v5(n,i,a)}build(n,i,a){y5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){Nk(n,i,a,c)}mount(n){this.isSVGTag=b5(n.tagName),super.mount(n)}}const Rk=Up.length;function S5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?S5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<Rk;i++){const a=Up[i],c=t.props[a];(jc(c)||c===!1)&&(n[a]=c)}return n}function C5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const Bk=[...Hp].reverse(),Lk=Hp.length;function Ok(t){return n=>Promise.all(n.map(({animation:i,options:a})=>L3(t,i,a)))}function zk(t){let n=Ok(t),i=O1(),a=!0,c=!1;const u=g=>(_,x)=>{var S;const b=wr(t,x,g==="exit"?(S=t.presenceContext)==null?void 0:S.custom:void 0);if(b){const{transition:C,transitionEnd:k,...j}=b;_={..._,...j,...k}}return _};function d(g){n=g(t)}function h(g){const{props:_}=t,x=S5(t.parent)||{},b=[],S=new Set;let C={},k=1/0;for(let M=0;M<Lk;M++){const I=Bk[M],L=i[I],N=_[I]!==void 0?_[I]:x[I],P=jc(N),X=I===g?L.isActive:null;X===!1&&(k=M);let Y=N===x[I]&&N!==_[I]&&P;if(Y&&(a||c)&&t.manuallyAnimateOnMount&&(Y=!1),L.protectedKeys={...C},!L.isActive&&X===null||!N&&!L.prevProp||Id(N)||typeof N=="boolean")continue;if(I==="exit"&&L.isActive&&X!==!0){L.prevResolvedValues&&(C={...C,...L.prevResolvedValues});continue}const U=$k(L.prevProp,N);let Z=U||I===g&&L.isActive&&!Y&&P||M>k&&P,oe=!1;const ie=Array.isArray(N)?N:[N];let be=ie.reduce(u(I),{});X===!1&&(be={});const{prevResolvedValues:Te={}}=L,Q={...Te,...be},le=q=>{Z=!0,S.has(q)&&(oe=!0,S.delete(q)),L.needsAnimating[q]=!0;const me=t.getValue(q);me&&(me.liveStyle=!1)};for(const q in Q){const me=be[q],Me=Te[q];if(C.hasOwnProperty(q))continue;let D=!1;Km(me)&&Km(Me)?D=!C5(me,Me):D=me!==Me,D?me!=null?le(q):S.add(q):me!==void 0&&S.has(q)?le(q):L.protectedKeys[q]=!0}L.prevProp=N,L.prevResolvedValues=be,L.isActive&&(C={...C,...be}),(a||c)&&t.blockInitialAnimation&&(Z=!1);const z=Y&&U;Z&&(!z||oe)&&b.push(...ie.map(q=>{const me={type:I};if(typeof q=="string"&&(a||c)&&!z&&t.manuallyAnimateOnMount&&t.parent){const{parent:Me}=t,D=wr(Me,q);if(Me.enteringChildren&&D){const{delayChildren:te}=D.transition||{};me.delay=Yb(Me.enteringChildren,t,te)}}return{animation:q,options:me}}))}if(S.size){const M={};if(typeof _.initial!="boolean"){const I=wr(t,Array.isArray(_.initial)?_.initial[0]:_.initial);I&&I.transition&&(M.transition=I.transition)}S.forEach(I=>{const L=t.getBaseTarget(I),N=t.getValue(I);N&&(N.liveStyle=!0),M[I]=L!=null?L:null}),b.push({animation:M})}let j=!!b.length;return a&&(_.initial===!1||_.initial===_.animate)&&!t.manuallyAnimateOnMount&&(j=!1),a=!1,c=!1,j?n(b):Promise.resolve()}function p(g,_){var b;if(i[g].isActive===_)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(S=>{var C;return(C=S.animationState)==null?void 0:C.setActive(g,_)}),i[g].isActive=_;const x=h(g);for(const S in i)i[S].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=O1(),c=!0}}}function $k(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!C5(n,t):!1}function pr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function O1(){return{animate:pr(!0),whileInView:pr(),whileHover:pr(),whileTap:pr(),whileDrag:pr(),whileFocus:pr(),exit:pr()}}function ip(t,n){t.min=n.min,t.max=n.max}function $i(t,n){ip(t.x,n.x),ip(t.y,n.y)}function z1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const k5=1e-4,Ik=1-k5,Pk=1+k5,j5=.01,Hk=0-j5,Uk=0+j5;function Uo(t){return t.max-t.min}function Vk(t,n,i){return Math.abs(t-n)<=i}function $1(t,n,i,a=.5){t.origin=a,t.originPoint=ss(n.min,n.max,t.origin),t.scale=Uo(i)/Uo(n),t.translate=ss(i.min,i.max,t.origin)-t.originPoint,(t.scale>=Ik&&t.scale<=Pk||isNaN(t.scale))&&(t.scale=1),(t.translate>=Hk&&t.translate<=Uk||isNaN(t.translate))&&(t.translate=0)}function bc(t,n,i,a){$1(t.x,n.x,i.x,a?a.originX:void 0),$1(t.y,n.y,i.y,a?a.originY:void 0)}function I1(t,n,i,a=0){const c=a?ss(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+Uo(n)}function Yk(t,n,i,a){I1(t.x,n.x,i.x,a==null?void 0:a.x),I1(t.y,n.y,i.y,a==null?void 0:a.y)}function P1(t,n,i,a=0){const c=a?ss(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+Uo(n)}function Rd(t,n,i,a){P1(t.x,n.x,i.x,a==null?void 0:a.x),P1(t.y,n.y,i.y,a==null?void 0:a.y)}function H1(t,n,i,a,c){return t-=n,t=Nd(t,1/i,a),c!==void 0&&(t=Nd(t,1/c,a)),t}function Wk(t,n=0,i=1,a=.5,c,u=t,d=t){if(Zi.test(n)&&(n=parseFloat(n),n=ss(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=ss(u.min,u.max,a);t===u&&(h-=n),t.min=H1(t.min,n,i,h,c),t.max=H1(t.max,n,i,h,c)}function U1(t,n,[i,a,c],u,d){Wk(t,n[i],n[a],n[c],n.scale,u,d)}const Fk=["x","scaleX","originX"],Xk=["y","scaleY","originY"];function V1(t,n,i,a){U1(t.x,n,Fk,i?i.x:void 0,a?a.x:void 0),U1(t.y,n,Xk,i?i.y:void 0,a?a.y:void 0)}function Y1(t){return t.translate===0&&t.scale===1}function M5(t){return Y1(t.x)&&Y1(t.y)}function W1(t,n){return t.min===n.min&&t.max===n.max}function qk(t,n){return W1(t.x,n.x)&&W1(t.y,n.y)}function F1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function T5(t,n){return F1(t.x,n.x)&&F1(t.y,n.y)}function X1(t){return Uo(t.x)/Uo(t.y)}function q1(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function Ki(t){return[t("x"),t("y")]}function Gk(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:g,rotate:_,rotateX:x,rotateY:b,skewX:S,skewY:C}=i;g&&(a=`perspective(${g}px) ${a}`),_&&(a+=`rotate(${_}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),S&&(a+=`skewX(${S}deg) `),C&&(a+=`skewY(${C}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const E5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Kk=E5.length,G1=t=>typeof t=="string"?parseFloat(t):t,K1=t=>typeof t=="number"||Mt.test(t);function Qk(t,n,i,a,c,u){var d,h,p,g;c?(t.opacity=ss(0,(d=i.opacity)!=null?d:1,Zk(a)),t.opacityExit=ss((h=n.opacity)!=null?h:1,0,Jk(a))):u&&(t.opacity=ss((p=n.opacity)!=null?p:1,(g=i.opacity)!=null?g:1,a));for(let _=0;_<Kk;_++){const x=E5[_];let b=Q1(n,x),S=Q1(i,x);if(b===void 0&&S===void 0)continue;b||(b=0),S||(S=0),b===0||S===0||K1(b)===K1(S)?(t[x]=Math.max(ss(G1(b),G1(S),a),0),(Zi.test(S)||Zi.test(b))&&(t[x]+="%")):t[x]=S}(n.rotate||i.rotate)&&(t.rotate=ss(n.rotate||0,i.rotate||0,a))}function Q1(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const Zk=A5(0,.5,hb),Jk=A5(.5,.95,Ti);function A5(t,n,i){return a=>a<t?0:a>n?1:i(hl(t,n,a))}function D5(t,n,i){const a=so(t)?t:Qa(t);return a.start(Rp("",a,n,i)),a.animation}function Mc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const e8=(t,n)=>t.depth-n.depth;class t8{constructor(){this.children=[],this.isDirty=!1}add(n){xp(this.children,n),this.isDirty=!0}remove(n){fl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(e8),this.isDirty=!1,this.children.forEach(n)}}function n8(t,n){const i=Ho.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(xa(a),t(u-n))};return Yn.setup(a,!0),()=>xa(a)}function xd(t){return so(t)?t.get():t}class s8{constructor(){this.members=[]}add(n){xp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(fl(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(fl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const bd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},_m=["","X","Y","Z"],o8=1e3;let i8=0;function gm(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function N5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=Gb(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",Yn,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&N5(a)}function R5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=i8++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(l8),this.nodes.forEach(m8),this.nodes.forEach(p8),this.nodes.forEach(c8)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new t8)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new vp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=$d(d)&&!i5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let _,x=0;const b=()=>this.root.updateBlockedByResize=!1;Yn.read(()=>{x=window.innerWidth}),t(d,()=>{const S=window.innerWidth;S!==x&&(x=S,this.root.updateBlockedByResize=!0,_&&_(),_=n8(b,250),bd.hasAnimatedSinceResize&&(bd.hasAnimatedSinceResize=!1,this.nodes.forEach(ex)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:_,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const C=this.options.transition||g.getDefaultTransition()||b8,{onLayoutAnimationStart:k,onLayoutAnimationComplete:j}=g.getProps(),M=!this.targetLayout||!T5(this.targetLayout,S),I=!x&&b;if(this.options.layoutRoot||this.resumeFrom||I||x&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...Np(C,"layout"),onPlay:k,onComplete:j};(g.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(_,I)}else x||ex(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),xa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(_8),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&N5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let _=0;_<this.path.length;_++){const x=this.path[_];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(d8),this.nodes.forEach(Z1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(J1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(f8),this.nodes.forEach(h8),this.nodes.forEach(a8),this.nodes.forEach(r8)):this.nodes.forEach(J1),this.clearAllSnapshots();const h=Ho.now();wo.delta=Ji(0,1e3/60,h-wo.timestamp),wo.timestamp=h,wo.isProcessing=!0,lm.update.process(wo),lm.preRender.process(wo),lm.render.process(wo),wo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ip.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(u8),this.sharedNodes.forEach(g8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Yn.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Yn.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Uo(this.snapshot.measuredBox.x)&&!Uo(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Gs()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!M5(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,_=g!==this.prevTransformTemplateValue;d&&this.instance&&(h||_r(this.latestValues)||_)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),v8(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return Gs();const h=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(w8))){const{scroll:_}=this.root;_&&(Qi(h.x,_.offset.x),Qi(h.y,_.offset.y))}return h}removeElementScroll(d){var p;const h=Gs();if($i(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const _=this.path[g],{scroll:x,options:b}=_;_!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&$i(h,d),Qi(h.x,x.offset.x),Qi(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var _,x;const g=p||Gs();$i(g,d);for(let b=0;b<this.path.length;b++){const S=this.path[b];!h&&S.options.layoutScroll&&S.scroll&&S!==S.root&&(Qi(g.x,-S.scroll.offset.x),Qi(g.y,-S.scroll.offset.y)),_r(S.latestValues)&&yd(g,S.latestValues,(_=S.layout)==null?void 0:_.layoutBox)}return _r(this.latestValues)&&yd(g,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),g}removeTransform(d){var p;const h=Gs();$i(h,d);for(let g=0;g<this.path.length;g++){const _=this.path[g];if(!_r(_.latestValues))continue;let x;_.instance&&(np(_.latestValues)&&_.updateSnapshot(),x=Gs(),$i(x,_.measurePageBox())),V1(h,_.latestValues,(p=_.snapshot)==null?void 0:p.layoutBox,x)}return _r(this.latestValues)&&V1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==wo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var S;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:_,layoutId:x}=this.options;if(!this.layout||!(_||x))return;this.resolvedRelativeTargetAt=wo.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Gs(),this.targetWithTransforms=Gs()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Yk(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):$i(this.target,this.layout.layoutBox),h5(this.target,this.targetDelta)):$i(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||np(this.parent.latestValues)||f5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Gs(),this.relativeTargetOrigin=Gs(),Rd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),$i(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var C;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(C=this.parent)!=null&&C.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===wo.timestamp&&(p=!1),p)return;const{layout:g,layoutId:_}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||_))return;$i(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;xk(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Gs());const{target:S}=d;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(z1(this.prevProjectionDelta.x,this.projectionDelta.x),z1(this.prevProjectionDelta.y,this.projectionDelta.y)),bc(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!q1(this.projectionDelta.x,this.prevProjectionDelta.x)||!q1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=cl(),this.projectionDelta=cl(),this.projectionDeltaWithTransform=cl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,g=p?p.latestValues:{},_={...this.latestValues},x=cl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=Gs(),S=p?p.source:void 0,C=this.layout?this.layout.source:void 0,k=S!==C,j=this.getStack(),M=!j||j.members.length<=1,I=!!(k&&!M&&this.options.crossfade===!0&&!this.path.some(x8));this.animationProgress=0;let L;this.mixTargetDelta=N=>{const P=N/1e3;tx(x.x,d.x,P),tx(x.y,d.y,P),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Rd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),y8(this.relativeTarget,this.relativeTargetOrigin,b,P),L&&qk(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=Gs()),$i(L,this.relativeTarget)),k&&(this.animationValues=_,Qk(_,g,this.latestValues,P,I,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(xa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Yn.update(()=>{bd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Qa(0)),this.motionValue.jump(0,!1),this.currentAnimation=D5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:_=>{this.mixTargetDelta(_),d.onUpdate&&d.onUpdate(_)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(o8),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:_}=d;if(!(!h||!p||!g)){if(this!==d&&this.layout&&g&&B5(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||Gs();const x=Uo(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=Uo(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}$i(h,p),yd(h,_),bc(this.projectionDeltaWithTransform,this.layoutCorrected,h,_)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new s8),this.sharedNodes.get(d).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&gm("z",d,g,this.animationValues);for(let _=0;_<_m.length;_++)gm(`rotate${_m[_]}`,d,g,this.animationValues),gm(`skew${_m[_]}`,d,g,this.animationValues);d.render();for(const _ in g)d.setStaticValue(_,g[_]),this.animationValues&&(this.animationValues[_]=g[_]);d.scheduleRender()}applyProjectionStyles(d,h){var C,k;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=xd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=xd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!_r(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const _=g.animationValues||g.latestValues;this.applyTransformsToTarget();let x=Gk(this.projectionDeltaWithTransform,this.treeScale,_);p&&(x=p(_,x)),d.transform=x;const{x:b,y:S}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${S.origin*100}% 0`,g.animationValues?d.opacity=g===this?(k=(C=_.opacity)!=null?C:this.latestValues.opacity)!=null?k:1:this.preserveOpacity?this.latestValues.opacity:_.opacityExit:d.opacity=g===this?_.opacity!==void 0?_.opacity:"":_.opacityExit!==void 0?_.opacityExit:0;for(const j in op){if(_[j]===void 0)continue;const{correct:M,applyTo:I,isCSSVariable:L}=op[j],N=x==="none"?_[j]:M(_[j],g);if(I){const P=I.length;for(let X=0;X<P;X++)d[I[X]]=N}else L?this.options.visualElement.renderState.vars[j]=N:d[j]=N}this.options.layoutId&&(d.pointerEvents=g===this?xd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(Z1),this.root.sharedNodes.clear()}}}function a8(t){t.updateLayout()}function r8(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")Ki(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],S=Uo(b);b.min=a[x].min,b.max=b.min+S});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";ip(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else B5(u,n.layoutBox,a)&&Ki(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],S=Uo(a[x]);b.max=b.min+S,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+S)});const h=cl();bc(h,a,n.layoutBox);const p=cl();d?bc(p,t.applyTransform(c,!0),n.measuredBox):bc(p,a,n.layoutBox);const g=!M5(h);let _=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:S}=x;if(b&&S){const C=t.options.layoutAnchor||void 0,k=Gs();Rd(k,n.layoutBox,b.layoutBox,C);const j=Gs();Rd(j,a,S.layoutBox,C),T5(k,j)||(_=!0),x.options.layoutRoot&&(t.relativeTarget=j,t.relativeTargetOrigin=k,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:_})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function l8(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function c8(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function u8(t){t.clearSnapshot()}function Z1(t){t.clearMeasurements()}function d8(t){t.isLayoutDirty=!0,t.updateLayout()}function J1(t){t.isLayoutDirty=!1}function f8(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function h8(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function ex(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function m8(t){t.resolveTargetDelta()}function p8(t){t.calcProjection()}function _8(t){t.resetSkewAndRotation()}function g8(t){t.removeLeadSnapshot()}function tx(t,n,i){t.translate=ss(n.translate,0,i),t.scale=ss(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function nx(t,n,i,a){t.min=ss(n.min,i.min,a),t.max=ss(n.max,i.max,a)}function y8(t,n,i,a){nx(t.x,n.x,i.x,a),nx(t.y,n.y,i.y,a)}function x8(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const b8={duration:.45,ease:[.4,0,.1,1]},sx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),ox=sx("applewebkit/")&&!sx("chrome/")?Math.round:Ti;function ix(t){t.min=ox(t.min),t.max=ox(t.max)}function v8(t){ix(t.x),ix(t.y)}function B5(t,n,i){return t==="position"||t==="preserve-aspect"&&!Vk(X1(n),X1(i),.2)}function w8(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const S8=R5({attachResizeListener:(t,n)=>Mc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),ym={current:void 0},L5=R5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!ym.current){const t=new S8({});t.mount(window),t.setOptions({layoutScroll:!0}),ym.current=t}return ym.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Hd=y.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function ax(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function C8(...t){return n=>{let i=!1;const a=t.map(c=>{const u=ax(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():ax(t[c],null)}}}}function k8(...t){return y.useCallback(C8(...t),t)}class j8 extends y.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(md(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=md(a)&&a.offsetWidth||0,u=md(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function M8({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,S;const d=y.useId(),h=y.useRef(null),p=y.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=y.useContext(Hd),_=(S=(b=t.props)==null?void 0:b.ref)!=null?S:t==null?void 0:t.ref,x=k8(h,_);return y.useInsertionEffect(()=>{const{width:C,height:k,top:j,left:M,right:I,bottom:L}=p.current;if(n||u===!1||!h.current||!C||!k)return;const N=i==="left"?`left: ${M}`:`right: ${I}`,P=a==="bottom"?`bottom: ${L}`:`top: ${j}`;h.current.dataset.motionPopId=d;const X=document.createElement("style");g&&(X.nonce=g);const Y=c!=null?c:document.head;return Y.appendChild(X),X.sheet&&X.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${C}px !important;
            height: ${k}px !important;
            ${N}px !important;
            ${P}px !important;
          }
        `),()=>{var U;(U=h.current)==null||U.removeAttribute("data-motion-pop-id"),Y.contains(X)&&Y.removeChild(X)}},[n]),l.jsx(j8,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:y.cloneElement(t,{ref:x})})}const T8=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:g})=>{const _=Ac(E8),x=y.useId();let b=!0,S=y.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:C=>{_.set(C,!0);for(const k of _.values())if(!k)return;a&&a()},register:C=>(_.set(C,!1),()=>_.delete(C))}),[i,_,a]);return u&&b&&(S={...S}),y.useMemo(()=>{_.forEach((C,k)=>_.set(k,!1))},[i]),y.useEffect(()=>{!i&&!_.size&&a&&a()},[i]),t=l.jsx(M8,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:g,children:t}),l.jsx(Od.Provider,{value:S,children:t})};function E8(){return new Map}function O5(t=!0){const n=y.useContext(Od);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=y.useId();y.useEffect(()=>{if(t)return c(u)},[t]);const d=y.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const id=t=>t.key||"";function rx(t){const n=[];return y.Children.forEach(t,i=>{y.isValidElement(i)&&n.push(i)}),n}const Ud=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[_,x]=O5(d),b=y.useMemo(()=>rx(t),[t]),S=d&&!_?[]:b.map(id),C=y.useRef(!0),k=y.useRef(b),j=Ac(()=>new Map),M=y.useRef(new Set),[I,L]=y.useState(b),[N,P]=y.useState(b);yp(()=>{C.current=!1,k.current=b;for(let U=0;U<N.length;U++){const Z=id(N[U]);S.includes(Z)?(j.delete(Z),M.current.delete(Z)):j.get(Z)!==!0&&j.set(Z,!1)}},[N,S.length,S.join("-")]);const X=[];if(b!==I){let U=[...b];for(let Z=0;Z<N.length;Z++){const oe=N[Z],ie=id(oe);S.includes(ie)||(U.splice(Z,0,oe),X.push(oe))}return u==="wait"&&X.length&&(U=X),P(rx(U)),L(b),null}const{forceRender:Y}=y.useContext(gp);return l.jsx(l.Fragment,{children:N.map(U=>{const Z=id(U),oe=d&&!_?!1:b===N||S.includes(Z),ie=()=>{if(M.current.has(Z))return;if(j.has(Z))M.current.add(Z),j.set(Z,!0);else return;let be=!0;j.forEach(Te=>{Te||(be=!1)}),be&&(Y==null||Y(),P(k.current),d&&(x==null||x()),a&&a())};return l.jsx(T8,{isPresent:oe,initial:!C.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:g,onExitComplete:oe?void 0:ie,anchorX:h,anchorY:p,children:U},Z)})})},z5=y.createContext({strict:!1}),lx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let cx=!1;function A8(){if(cx)return;const t={};for(const n in lx)t[n]={isEnabled:i=>lx[n].some(a=>!!i[a])};l5(t),cx=!0}function $5(){return A8(),_k()}function D8(t){const n=$5();for(const i in t)n[i]={...n[i],...t[i]};l5(n)}const N8=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Bd(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||N8.has(t)}let I5=t=>!Bd(t);function R8(t){typeof t=="function"&&(I5=n=>n.startsWith("on")?!Bd(n):t(n))}try{R8(require("@emotion/is-prop-valid").default)}catch{}function B8(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||so(t[c])||(I5(c)||i===!0&&Bd(c)||!n&&!Bd(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Vd=y.createContext({});function L8(t,n){if(Pd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||jc(i)?i:void 0,animate:jc(a)?a:void 0}}return t.inherit!==!1?n:{}}function O8(t){const{initial:n,animate:i}=L8(t,y.useContext(Vd));return y.useMemo(()=>({initial:n,animate:i}),[ux(n),ux(i)])}function ux(t){return Array.isArray(t)?t.join(" "):t}const Wp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function P5(t,n,i){for(const a in n)!so(n[a])&&!_5(a,i)&&(t[a]=n[a])}function z8({transformTemplate:t},n){return y.useMemo(()=>{const i=Wp();return Vp(i,n,t),Object.assign({},i.vars,i.style)},[n])}function $8(t,n){const i=t.style||{},a={};return P5(a,i,t),Object.assign(a,z8(t,n)),a}function I8(t,n){const i={},a=$8(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const H5=()=>({...Wp(),attrs:{}});function P8(t,n,i,a){const c=y.useMemo(()=>{const u=H5();return y5(u,n,b5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};P5(u,t.style,t),c.style={...u,...c.style}}return c}const H8=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fp(t){return typeof t!="string"||t.includes("-")?!1:!!(H8.indexOf(t)>-1||/[A-Z]/u.test(t))}function U8(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Fp(t))?P8:I8)(n,a,c,t),g=B8(n,typeof t=="string",u),_=t!==y.Fragment?{...g,...p,ref:i}:{},{children:x}=n,b=y.useMemo(()=>so(x)?x.get():x,[x]);return y.createElement(t,{..._,children:b})}function V8({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:Y8(i,a,c,t),renderState:n()}}function Y8(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=xd(u[b]);let{initial:d,animate:h}=t;const p=Pd(t),g=a5(t);n&&g&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let _=i?i.initial===!1:!1;_=_||d===!1;const x=_?h:d;if(x&&typeof x!="boolean"&&!Id(x)){const b=Array.isArray(x)?x:[x];for(let S=0;S<b.length;S++){const C=Bp(t,b[S]);if(C){const{transitionEnd:k,transition:j,...M}=C;for(const I in M){let L=M[I];if(Array.isArray(L)){const N=_?L.length-1:0;L=L[N]}L!==null&&(c[I]=L)}for(const I in k)c[I]=k[I]}}}return c}const U5=t=>(n,i)=>{const a=y.useContext(Vd),c=y.useContext(Od),u=()=>V8(t,n,a,c);return i?u():Ac(u)},W8=U5({scrapeMotionValuesFromProps:Yp,createRenderState:Wp}),F8=U5({scrapeMotionValuesFromProps:v5,createRenderState:H5}),X8=Symbol.for("motionComponentSymbol");function q8(t,n,i){const a=y.useRef(i);y.useInsertionEffect(()=>{a.current=i});const c=y.useRef(null);return y.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const V5=y.createContext({});function il(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function G8(t,n,i,a,c,u){var L,N;const{visualElement:d}=y.useContext(Vd),h=y.useContext(z5),p=y.useContext(Od),g=y.useContext(Hd),_=g.reducedMotion,x=g.skipAnimations,b=y.useRef(null),S=y.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:_,skipAnimations:x,isSVG:u}),S.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const C=b.current,k=y.useContext(V5);C&&!C.projection&&c&&(C.type==="html"||C.type==="svg")&&K8(b.current,i,c,k);const j=y.useRef(!1);y.useInsertionEffect(()=>{C&&j.current&&C.update(i,p)});const M=i[qb],I=y.useRef(!!M&&typeof window<"u"&&!((L=window.MotionHandoffIsComplete)!=null&&L.call(window,M))&&((N=window.MotionHasOptimisedAnimation)==null?void 0:N.call(window,M)));return yp(()=>{S.current=!0,C&&(j.current=!0,window.MotionIsMounted=!0,C.updateFeatures(),C.scheduleRenderMicrotask(),I.current&&C.animationState&&C.animationState.animateChanges())}),y.useEffect(()=>{C&&(!I.current&&C.animationState&&C.animationState.animateChanges(),I.current&&(queueMicrotask(()=>{var P;(P=window.MotionHandoffMarkAsComplete)==null||P.call(window,M)}),I.current=!1),C.enteringChildren=void 0)}),C}function K8(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutAnchor:_,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:Y5(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&il(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:g,layoutAnchor:_})}function Y5(t){if(t)return t.options.allowProjection!==!1?t.projection:Y5(t.parent)}function xm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var g,_;a&&D8(a);const u=i?i==="svg":Fp(t),d=u?F8:W8;function h(x,b){let S;const C={...y.useContext(Hd),...x,layoutId:Q8(x)},{isStatic:k}=C,j=O8(x),M=d(x,k);if(!k&&typeof window<"u"){Z8();const I=J8(C);S=I.MeasureLayout,j.visualElement=G8(t,M,C,c,I.ProjectionNode,u)}return l.jsxs(Vd.Provider,{value:j,children:[S&&j.visualElement?l.jsx(S,{visualElement:j.visualElement,...C}):null,U8(t,x,q8(M,j.visualElement,b),M,k,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(_=(g=t.displayName)!=null?g:t.name)!=null?_:""})`}`;const p=y.forwardRef(h);return p[X8]=t,p}function Q8({layoutId:t}){const n=y.useContext(gp).id;return n&&t!==void 0?n+"-"+t:t}function Z8(t,n){y.useContext(z5).strict}function J8(t){const n=$5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function ej(t,n){if(typeof Proxy>"u")return xm;const i=new Map,a=(u,d)=>xm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,xm(d,void 0,t,n)),i.get(d))})}const tj=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Fp(t))?new w5(n):new g5(n,{allowProjection:t!==y.Fragment})};class nj extends Za{constructor(n){super(n),n.animationState||(n.animationState=zk(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Id(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let sj=0;class oj extends Za{constructor(){super(...arguments),this.id=sj++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=wr(this.node,d,h);if(p){const{transition:g,transitionEnd:_,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const ij={animation:{Feature:nj},exit:{Feature:oj}};function Bc(t){return{point:{x:t.pageX,y:t.pageY}}}const aj=t=>n=>Pp(n)&&t(n,Bc(n));function vc(t,n,i,a){return Mc(t,n,aj(i),a)}const W5=({current:t})=>t?t.ownerDocument.defaultView:null,dx=(t,n)=>Math.abs(t-n);function rj(t,n){const i=dx(t.x,n.x),a=dx(t.y,n.y);return Math.sqrt(i**2+a**2)}const fx=new Set(["auto","scroll"]);class F5{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=S=>{this.handleScroll(S.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ad(this.lastRawMoveEventInfo,this.transformPagePoint));const S=bm(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,k=rj(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!k)return;const{point:j}=S,{timestamp:M}=wo;this.history.push({...j,timestamp:M});const{onStart:I,onMove:L}=this.handlers;C||(I&&I(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,S)},this.handlePointerMove=(S,C)=>{this.lastMoveEvent=S,this.lastRawMoveEventInfo=C,this.lastMoveEventInfo=ad(C,this.transformPagePoint),Yn.update(this.updatePoint,!0)},this.handlePointerUp=(S,C)=>{this.end();const{onEnd:k,onSessionEnd:j,resumeAnimation:M}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const I=bm(S.type==="pointercancel"?this.lastMoveEventInfo:ad(C,this.transformPagePoint),this.history);this.startEvent&&k&&k(S,I),j&&j(S,I)},!Pp(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Bc(n),g=ad(p,this.transformPagePoint),{point:_}=g,{timestamp:x}=wo;this.history=[{..._,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,bm(g,this.history)),this.removeListeners=Dc(vc(this.contextWindow,"pointermove",this.handlePointerMove),vc(this.contextWindow,"pointerup",this.handlePointerUp),vc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(fx.has(a.overflowX)||fx.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),Yn.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),xa(this.updatePoint)}}function ad(t,n){return n?{point:n(t.point)}:t}function hx(t,n){return{x:t.x-n.x,y:t.y-n.y}}function bm({point:t},n){return{point:t,delta:hx(t,X5(n)),offset:hx(t,lj(n)),velocity:cj(n,.1)}}function lj(t){return t[0]}function X5(t){return t[t.length-1]}function cj(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=X5(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>ti(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>ti(n)*2&&(a=t[1]);const u=Mi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function uj(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?ss(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?ss(i,t,a.max):Math.min(t,i)),t}function mx(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function dj(t,{top:n,left:i,bottom:a,right:c}){return{x:mx(t.x,i,c),y:mx(t.y,n,a)}}function px(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function fj(t,n){return{x:px(t.x,n.x),y:px(t.y,n.y)}}function hj(t,n){let i=.5;const a=Uo(t),c=Uo(n);return c>a?i=hl(n.min,n.max-a,t.min):a>c&&(i=hl(t.min,t.max-c,n.min)),Ji(0,1,i)}function mj(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const ap=.35;function pj(t=ap){return t===!1?t=0:t===!0&&(t=ap),{x:_x(t,"left","right"),y:_x(t,"top","bottom")}}function _x(t,n,i){return{min:gx(t,n),max:gx(t,i)}}function gx(t,n){return typeof t=="number"?t:t[n]||0}const _j=new WeakMap;class gj{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Gs(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(Bc(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:S,dragPropagation:C,onDragStart:k}=this.getProps();if(S&&!C&&(this.openDragLock&&this.openDragLock(),this.openDragLock=X3(S),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ki(M=>{let I=this.getAxisMotionValue(M).get()||0;if(Zi.test(I)){const{projection:L}=this.visualElement;if(L&&L.layout){const N=L.layout.layoutBox[M];N&&(I=Uo(N)*(parseFloat(I)/100))}}this.originPoint[M]=I}),k&&Yn.update(()=>k(x,b),!1,!0),Qm(this.visualElement,"transform");const{animationState:j}=this.visualElement;j&&j.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:S,dragDirectionLock:C,onDirectionLock:k,onDrag:j}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:M}=b;if(C&&this.currentDirection===null){this.currentDirection=xj(M),this.currentDirection!==null&&k&&k(this.currentDirection);return}this.updateAxis("x",b.point,M),this.updateAxis("y",b.point,M),this.visualElement.render(),j&&Yn.update(()=>j(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:_}=this.getProps();this.panSession=new F5(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:_,distanceThreshold:a,contextWindow:W5(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&Yn.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!rd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=uj(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&il(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=dj(a.layoutBox,n):this.constraints=!1,this.elastic=pj(i),c!==this.constraints&&!il(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&Ki(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=mj(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!il(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=bk(a,c.root,this.visualElement.getTransformPagePoint());let d=fj(c.layout.layoutBox,u);if(i){const h=i(gk(d));this.hasMutatedConstraints=!!h,h&&(d=d5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=Ki(_=>{if(!rd(_,i,this.currentDirection))return;let x=p&&p[_]||{};(d===!0||d===_)&&(x={min:0,max:0});const b=c?200:1e6,S=c?40:1e7,C={type:"inertia",velocity:a?n[_]:0,bounceStiffness:b,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(_,C)});return Promise.all(g).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Qm(this.visualElement,n),a.start(Rp(n,a,0,i,this.visualElement,!1))}stopAnimation(){Ki(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){Ki(i=>{const{drag:a}=this.getProps();if(!rd(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-ss(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!il(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Ki(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=hj({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),Ki(d=>{if(!rd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];h.set(ss(p,g,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;_j.set(this.visualElement,this);const n=this.visualElement.current,i=vc(n,"pointerdown",g=>{const{drag:_,dragListener:x=!0}=this.getProps(),b=g.target,S=b!==n&&J3(b);_&&x&&!S&&this.start(g)});let a;const c=()=>{const{dragConstraints:g}=this.getProps();il(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),a||(a=yj(n,g.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),Yn.read(c);const h=Mc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:_})=>{this.isDragging&&_&&(Ki(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=g[x].translate,b.set(b.get()+g[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=ap,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function yx(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function yj(t,n,i){const a=k1(t,yx(i)),c=k1(n,yx(i));return()=>{a(),c()}}function rd(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function xj(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class bj extends Za{constructor(n){super(n),this.removeGroupControls=Ti,this.removeListeners=Ti,this.controls=new gj(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ti}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const vm=t=>(n,i)=>{t&&Yn.update(()=>t(n,i),!1,!0)};class vj extends Za{constructor(){super(...arguments),this.removePointerDownListener=Ti}onPointerDown(n){this.session=new F5(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:W5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:vm(n),onStart:vm(i),onMove:vm(a),onEnd:(u,d)=>{delete this.session,c&&Yn.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=vc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let wm=!1;class wj extends y.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),wm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),bd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),wm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||Yn.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Ip.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;wm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function q5(t){const[n,i]=O5(),a=y.useContext(gp);return l.jsx(wj,{...t,layoutGroup:a,switchLayoutGroup:y.useContext(V5),isPresent:n,safeToRemove:i})}const Sj={pan:{Feature:vj},drag:{Feature:bj,ProjectionNode:L5,MeasureLayout:q5}};function xx(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&Yn.postRender(()=>u(n,Bc(n)))}class Cj extends Za{mount(){const{current:n}=this.node;n&&(this.unmount=G3(n,(i,a)=>(xx(this.node,a,"Start"),c=>xx(this.node,c,"End"))))}unmount(){}}class kj extends Za{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Dc(Mc(this.node.current,"focus",()=>this.onFocus()),Mc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function bx(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&Yn.postRender(()=>u(n,Bc(n)))}class jj extends Za{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=tk(n,(c,u)=>(bx(this.node,u,"Start"),(d,{success:h})=>bx(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const rp=new WeakMap,Sm=new WeakMap,Mj=t=>{const n=rp.get(t.target);n&&n(t)},Tj=t=>{t.forEach(Mj)};function Ej({root:t,...n}){const i=t||document;Sm.has(i)||Sm.set(i,{});const a=Sm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(Tj,{root:t,...n})),a[c]}function Aj(t,n,i){const a=Ej(n);return rp.set(t,i),a.observe(t),()=>{rp.delete(t),a.unobserve(t)}}const Dj={some:0,all:1};class Nj extends Za{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:Dj[c]},h=g=>{const{isIntersecting:_}=g;if(this.isInView===_||(this.isInView=_,u&&!_&&this.hasEnteredView))return;_&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",_);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),S=_?x:b;S&&S(g)};this.stopObserver=Aj(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(Rj(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Rj({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const Bj={inView:{Feature:Nj},tap:{Feature:jj},focus:{Feature:kj},hover:{Feature:Cj}},Lj={layout:{ProjectionNode:L5,MeasureLayout:q5}},Oj={...ij,...Bj,...Sj,...Lj},ei=ej(Oj,tj);function lp(t){const n=Ac(()=>Qa(t)),{isStatic:i}=y.useContext(Hd);if(i){const[,a]=y.useState(t);y.useEffect(()=>n.on("change",a),[])}return n}function G5(t,n){const i=lp(n()),a=()=>i.set(n());return a(),yp(()=>{const c=()=>Yn.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),xa(a)}}),i}function zj(t){xc.current=[],t();const n=G5(xc.current,t);return xc.current=void 0,n}function ld(t,n,i,a){if(typeof t=="function")return zj(t);const u=typeof n=="function"?n:uk(n,i,a),d=Array.isArray(t)?vx(t,u):vx([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function vx(t,n){const i=Ac(()=>[]);return G5(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Xp(t){return typeof t=="object"&&!Array.isArray(t)}function K5(t,n,i,a){return t==null?[]:typeof t=="string"&&Xp(n)?$p(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function $j(t,n,i){return t*(n+1)}function wx(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function Ij(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(fl(t,c),a--)}}function Pj(t,n,i,a,c,u){Ij(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:ss(c,u,a[d]),easing:gb(i,d)})}function Hj(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function Uj(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const Vj="easeInOut";function Yj(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},g=new Map;let _=0,x=0,b=0;for(let S=0;S<t.length;S++){const C=t[S];if(typeof C=="string"){g.set(C,x);continue}else if(!Array.isArray(C)){g.set(C.name,wx(x,C.at,_,g));continue}let[k,j,M={}]=C;M.at!==void 0&&(x=wx(x,M.at,_,g));let I=0;const L=(N,P,X,Y=0,U=0)=>{const Z=Wj(N),{delay:oe=0,times:ie=Rb(Z),type:be=n.type||"keyframes",repeat:Te,repeatType:Q,repeatDelay:le=0,...z}=P;let{ease:ae=n.ease||"easeOut",duration:q}=P;const me=typeof oe=="function"?oe(Y,U):oe,Me=Z.length,D=Dp(be)?be:c==null?void 0:c[be||"keyframes"];if(Me<=2&&D){let ke=100;if(Me===2&&qj(Z)){const st=Z[1]-Z[0];ke=Math.abs(st)}const Ne={...n,...z};q!==void 0&&(Ne.duration=ti(q));const ve=Eb(Ne,ke,D);ae=ve.ease,q=ve.duration}q!=null||(q=u);const te=x+me;ie.length===1&&ie[0]===0&&(ie[1]=1);const G=ie.length-Z.length;if(G>0&&Nb(ie,G),Z.length===1&&Z.unshift(null),Te){q=$j(q,Te);const ke=[...Z],Ne=[...ie];ae=Array.isArray(ae)?[...ae]:[ae];const ve=[...ae];for(let st=0;st<Te;st++){Z.push(...ke);for(let Ge=0;Ge<ke.length;Ge++)ie.push(Ne[Ge]+(st+1)),ae.push(Ge===0?"linear":gb(ve,Ge-1))}Hj(ie,Te)}const de=te+q;Pj(X,Z,ae,ie,te,de),I=Math.max(me+q,I),b=Math.max(de,b)};if(so(k)){const N=Sx(k,h);L(j,M,Cx("default",N))}else{const N=K5(k,j,a,p),P=N.length;for(let X=0;X<P;X++){j=j,M=M;const Y=N[X],U=Sx(Y,h);for(const Z in j)L(j[Z],Fj(M,Z),Cx(Z,U),X,P)}}_=x,x+=I}return h.forEach((S,C)=>{for(const k in S){const j=S[k];j.sort(Uj);const M=[],I=[],L=[];for(let Y=0;Y<j.length;Y++){const{at:U,value:Z,easing:oe}=j[Y];M.push(Z),I.push(hl(0,b,U)),L.push(oe||"easeOut")}I[0]!==0&&(I.unshift(0),M.unshift(M[0]),L.unshift(Vj)),I[I.length-1]!==1&&(I.push(1),M.push(null)),d.has(C)||d.set(C,{keyframes:{},transition:{}});const N=d.get(C);N.keyframes[k]=M;const{type:P,...X}=n;N.transition[k]={...X,duration:b,ease:L,times:I,...i}}}),d}function Sx(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function Cx(t,n){return n[t]||(n[t]=[]),n[t]}function Wj(t){return Array.isArray(t)?t:[t]}function Fj(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const Xj=t=>typeof t=="number",qj=t=>t.every(Xj);function Gj(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=$d(t)&&!i5(t)?new w5(n):new g5(n);i.mount(t),kc.set(t,i)}function Kj(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new Mk(n);i.mount(t),kc.set(t,i)}function Qj(t,n){return so(t)||typeof t=="number"||typeof t=="string"&&!Xp(n)}function Q5(t,n,i,a){const c=[];if(Qj(t,n))c.push(D5(t,Xp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=K5(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],g=p instanceof Element?Gj:Kj;kc.has(p)||g(p);const _=kc.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Op(_,{...n,transition:x},{}))}}return c}function Zj(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=Qa(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return Yj(c,n,i,{spring:Cc}).forEach(({keyframes:d,transition:h},p)=>{a.push(...Q5(p,d,h))}),a}function Jj(t){return Array.isArray(t)&&t.some(Array.isArray)}function eM(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(Jj(c)){const{onComplete:_,...x}=u||{};typeof _=="function"&&(p=_),h=Zj(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:_,...x}=d||{};typeof _=="function"&&(p=_),h=Q5(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const g=new _3(h);return p&&g.finished.then(p),n&&(n.animations.push(g),g.finished.then(()=>{fl(n.animations,g)})),g}return a}const kx=eM();var tM=Object.freeze({}),nM=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[S,C]of Object.entries(h))p[S]=this.normalizePreservedValue(c.values[S],C,d.get(S));this.initTransitionModes(i,"",p);for(const[S,C]of Object.entries(c.values)){if(!S.endsWith(".__mode"))continue;const k=S.slice(0,-7),j=d.get(k);(j==null?void 0:j.type)==="transition"&&(p[S]=C)}const g={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,g),this.snapshots.set(t,{...p});const _=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[S,C]of Object.entries(h))x[S]=this.normalizePreservedValue(_[S],C,d.get(S));for(const[S,C]of Object.entries(p))S.endsWith(".__mode")&&(x[S]=C);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:tM}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),g=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:g});else if(typeof d=="number"){const{min:_,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:_,max:x,step:b,shortcut:g})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:g});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const _=d,x="_collapsed"in _?!_._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(_,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const g=h.options[0],_=typeof g=="string"?g:g.value;i[p]=(a=h.default)!=null?a:_}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},sn=new nM;function sM(t,n,i){const a=y.useId(),c=`${t}-${a}`,u=y.useRef(n),d=JSON.stringify(n);u.current=n;const h=y.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=y.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const g=JSON.stringify(i==null?void 0:i.shortcuts);y.useEffect(()=>(sn.registerPanel(c,t,u.current,p.current),()=>sn.unregisterPanel(c)),[c,t]);const _=y.useRef(!1);y.useEffect(()=>{if(!_.current){_.current=!0;return}sn.updatePanel(c,t,u.current,p.current)},[c,t,d,g]),y.useEffect(()=>sn.subscribeActions(c,b=>{var S;(S=h.current)==null||S.call(h,b)}),[c]);const x=y.useSyncExternalStore(b=>sn.subscribe(c,b),()=>sn.getValues(c),()=>sn.getValues(c));return Z5(n,x,"")}function Z5(t,n,i){var c,u,d,h,p,g,_,x,b,S;const a={};for(const[C,k]of Object.entries(t)){if(C==="_collapsed")continue;const j=i?`${i}.${C}`:C;if(Array.isArray(k)&&k.length<=4&&typeof k[0]=="number")a[C]=(c=n[j])!=null?c:k[0];else if(typeof k=="number"||typeof k=="boolean"||typeof k=="string")a[C]=(u=n[j])!=null?u:k;else if(oM(k)||iM(k))a[C]=(d=n[j])!=null?d:k;else if(aM(k))a[C]=(h=n[j])!=null?h:k;else if(rM(k)){const M=(p=k.default)!=null?p:uM(k.options);a[C]=(g=n[j])!=null?g:M}else lM(k)?a[C]=(x=(_=n[j])!=null?_:k.default)!=null?x:"#000000":cM(k)?a[C]=(S=(b=n[j])!=null?b:k.default)!=null?S:"":typeof k=="object"&&k!==null&&(a[C]=Z5(k,n,j))}return a}function yl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function oM(t){return yl(t,"spring")}function iM(t){return yl(t,"easing")}function aM(t){return yl(t,"action")}function rM(t){return yl(t,"select")&&"options"in t&&Array.isArray(t.options)}function lM(t){return yl(t,"color")}function cM(t){return yl(t,"text")}function uM(t){const n=t[0];return typeof n=="string"?n:n.value}function cp(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function vd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(cp(n)))}function uc(t,n){var d,h,p,g;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(g=t.step)!=null?g:1}function dc(t,n,i,a,c){var g,_;const u=sn.getValue(t,n),d=(g=i.min)!=null?g:0,h=(_=i.max)!=null?_:1,p=Math.max(d,Math.min(h,u+c*a));sn.updateValue(t,n,vd(p,a))}function dM(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function cd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function Cm(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function J5(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=J5(i.children,n);if(a)return a}}return null}var ud=4;function fM(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function hM(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=fM(n);return t.key?`${e2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function mM(t){return t.key?`${e2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function e2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var t2=y.createContext({activePanelId:null,activePath:null});function pM({children:t}){const[n,i]=y.useState({activePanelId:null,activePath:null}),a=y.useRef(new Set),c=y.useRef(!1),u=y.useRef(null),d=y.useRef(0),h=y.useCallback(p=>{var g;for(const _ of a.current){const x=sn.getPanels();for(const b of x)for(const[S,C]of Object.entries(b.shortcuts)){if(!C.key||C.key.toLowerCase()!==_||((g=C.interaction)!=null?g:"scroll")!==p)continue;const k=J5(b.controls,S);if(k&&k.type==="slider")return{panelId:b.id,path:S,control:k,shortcut:C}}}return null},[]);return y.useEffect(()=>{const p=k=>{if(cd())return;const j=k.key.toLowerCase();if((j==="arrowleft"||j==="arrowright"||j==="arrowup"||j==="arrowdown")&&a.current.size>0){const N=h("scroll")||h("drag")||h("move");if(N&&N.control.type==="slider"){k.preventDefault();const P=j==="arrowright"||j==="arrowup"?1:-1,X=uc(N.control,N.shortcut);dc(N.panelId,N.path,N.control,X,P);return}}const M=a.current.has(j);a.current.add(j);const I=Cm(k),L=sn.resolveShortcutTarget(j,I);if(L&&(i({activePanelId:L.panelId,activePath:L.path}),!M&&L.control.type==="toggle")){const N=sn.getValue(L.panelId,L.path);sn.updateValue(L.panelId,L.path,!N)}M||(u.current=null,d.current=0)},g=k=>{const j=k.key.toLowerCase();if(a.current.delete(j),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let M=!1;for(const I of a.current){const L=Cm(k),N=sn.resolveShortcutTarget(I,L);if(N){i({activePanelId:N.panelId,activePath:N.path}),M=!0;break}}M||i({activePanelId:null,activePath:null})}},_=k=>{var I,L;if(cd())return;const j=Cm(k);if(a.current.size>0)for(const N of a.current){const P=sn.resolveShortcutTarget(N,j);if(!P)continue;const{panelId:X,path:Y,control:U}=P;if(((L=(I=U.shortcut)==null?void 0:I.interaction)!=null?L:"scroll")!=="scroll"||U.type!=="slider")continue;k.preventDefault();const oe=uc(U,U.shortcut),ie=k.deltaY>0?-1:1;dc(X,Y,U,oe,ie);return}const M=sn.resolveScrollOnlyTargets();for(const{panelId:N,path:P,control:X,shortcut:Y}of M){if(X.type!=="slider")continue;k.preventDefault();const U=uc(X,Y),Z=k.deltaY>0?-1:1;dc(N,P,X,U,Z);return}},x=k=>{if(cd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=k.clientX,d.current=0,k.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},S=k=>{if(cd()||a.current.size===0)return;if(c.current){const M=h("drag");if(M&&u.current!==null){const I=k.clientX-u.current;u.current=k.clientX,d.current+=I;const L=uc(M.control,M.shortcut),N=Math.trunc(d.current/ud);N!==0&&(d.current-=N*ud,dc(M.panelId,M.path,M.control,L,N))}return}const j=h("move");if(j){if(u.current===null){u.current=k.clientX;return}const M=k.clientX-u.current;u.current=k.clientX,d.current+=M;const I=uc(j.control,j.shortcut),L=Math.trunc(d.current/ud);L!==0&&(d.current-=L*ud,dc(j.panelId,j.path,j.control,I,L))}},C=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",g),window.addEventListener("wheel",_,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",S),window.addEventListener("blur",C),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",g),window.removeEventListener("wheel",_),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",S),window.removeEventListener("blur",C)}},[h]),l.jsx(t2.Provider,{value:n,children:t})}var qp="M6 9.5L12 15.5L18 9.5",_M="M5 12.75L10 19L19 5",km={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},gM=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],yM=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],jx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Ld({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=y.useState(i),[g,_]=y.useState(!i),x=y.useRef(null),[b,S]=y.useState(void 0),[C,k]=y.useState(typeof window<"u"?window.innerHeight:800);y.useEffect(()=>{if(!a)return;const I=()=>k(window.innerHeight);return window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)},[a]),y.useEffect(()=>{const I=x.current;if(!I)return;const L=new ResizeObserver(()=>{if(h){const N=I.offsetHeight;S(P=>P===N?P:N)}});return L.observe(I),()=>L.disconnect()},[h]);const j=()=>{if(c&&a)return;const I=!h;p(I),_(!I),u==null||u(I)},M=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:j,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:jx.path,fill:"currentColor"}),jx.circles.map((I,L)=>l.jsx("circle",{cx:I.cx,cy:I.cy,r:I.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},L))]}),!a&&l.jsx(ei.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:qp})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:I=>I.stopPropagation(),children:d})]}),l.jsx(Ud,{initial:!1,children:h&&l.jsx(ei.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:M});const I=h?{width:280,height:b!==void 0?Math.min(b+10,C-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(ei.div,{className:"dialkit-panel-inner",style:I,onClick:h?void 0:j,"data-collapsed":g,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:M})}return M}var xM=3,bM=32,vM=200,wM=8;function Ao({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var Qe;const g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=y.useRef(null),S=y.useRef(null),[C,k]=y.useState(!1),[j,M]=y.useState(!1),[I,L]=y.useState(!1),[N,P]=y.useState(!1),[X,Y]=y.useState(!1),[U,Z]=y.useState(!1),[oe,ie]=y.useState(""),be=y.useRef(null),Te=y.useRef(null),Q=y.useRef(!0),le=y.useRef(null),z=y.useRef(null),ae=y.useRef(1),q=(n-a)/(c-a)*100,me=C||I,Me=lp(q),D=ld(Me,H=>`${H}%`),te=ld(Me,H=>`max(5px, calc(${H}% - 9px))`),G=lp(0),de=ld(G,H=>`calc(100% + ${Math.abs(H)}px)`),ke=ld(G,H=>H<0?H:0);y.useEffect(()=>{!C&&!le.current&&Me.jump(q)},[q,C,Me]);const Ne=y.useCallback(H=>{const J=z.current;if(!J)return n;const _e=(H-J.left)/ae.current,Xe=g.current?g.current.offsetWidth:J.width,Ue=Math.max(0,Math.min(1,_e/Xe)),De=a+Ue*(c-a);return Math.max(a,Math.min(c,De))},[a,c,n]),ve=y.useCallback(H=>(H-a)/(c-a)*100,[a,c]),st=y.useCallback((H,J)=>{const ne=z.current;if(!ne)return 0;const _e=J<0?ne.left-H:H-ne.right,Xe=Math.max(0,_e-bM);return J*wM*Math.sqrt(Math.min(Xe/vM,1))},[]),Ge=y.useCallback(H=>{if(!U&&(H.preventDefault(),H.target.setPointerCapture(H.pointerId),Te.current={x:H.clientX,y:H.clientY},Q.current=!0,k(!0),g.current)){z.current=g.current.getBoundingClientRect();const J=g.current.offsetWidth;ae.current=z.current.width/J}},[U]),$e=y.useCallback(H=>{if(!C||!Te.current)return;const J=H.clientX-Te.current.x,ne=H.clientY-Te.current.y,_e=Math.sqrt(J*J+ne*ne);if(Q.current&&_e>xM&&(Q.current=!1,M(!0)),!Q.current){const Xe=z.current;Xe&&(H.clientX<Xe.left?G.jump(st(H.clientX,-1)):H.clientX>Xe.right?G.jump(st(H.clientX,1)):G.jump(0));const Ue=Ne(H.clientX),De=ve(Ue);le.current&&(le.current.stop(),le.current=null),Me.jump(De),i(vd(Ue,u))}},[C,Ne,ve,i,Me,G,st]),rt=y.useCallback(H=>{if(C){if(Q.current){const J=Ne(H.clientX),_e=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((J-a)/u)*u)):dM(J,a,c),Xe=ve(_e);le.current&&le.current.stop(),le.current=kx(Me,Xe,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{le.current=null}}),i(vd(_e,u))}G.get()!==0&&kx(G,0,{type:"spring",visualDuration:.35,bounce:.15}),k(!1),M(!1),Te.current=null}},[C,Ne,ve,i,a,c,Me,G]);y.useEffect(()=>(N&&!U&&!X?be.current=setTimeout(()=>{Y(!0)},800):!N&&!U&&(be.current&&(clearTimeout(be.current),be.current=null),Y(!1)),()=>{be.current&&clearTimeout(be.current)}),[N,U,X]),y.useEffect(()=>{U&&x.current&&(x.current.focus(),x.current.select())},[U]);const tt=H=>{ie(H.target.value)},$t=()=>{const H=parseFloat(oe);if(!isNaN(H)){const J=Math.max(a,Math.min(c,H));i(vd(J,u))}Z(!1),P(!1),Y(!1)},lt=H=>{X&&(H.stopPropagation(),H.preventDefault(),Z(!0),ie(n.toFixed(cp(u))))},Rt=H=>{H.key==="Enter"?$t():H.key==="Escape"&&(Z(!1),P(!1))},Oe=()=>{$t()},ct=n.toFixed(cp(u)),ce=8,He=10,Ke=10;let ze=30,Tt=78;const ut=(Qe=g.current)==null?void 0:Qe.offsetWidth;ut&&ut>0&&(b.current&&(ze=(He+b.current.offsetWidth+ce)/ut*100),S.current&&(Tt=(ut-Ke-S.current.offsetWidth-ce)/ut*100));const at=q<ze||q>Tt,ot=me?at?.1:j?.9:.5:0,it=(c-a)/u,At=it<=10?Array.from({length:it-1},(H,J)=>{const ne=(J+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${ne}%`}},J)}):Array.from({length:9},(H,J)=>{const ne=(J+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${ne}%`}},J)});return l.jsx("div",{ref:g,className:"dialkit-slider-wrapper",children:l.jsxs(ei.div,{ref:_,className:`dialkit-slider ${me?"dialkit-slider-active":""}`,onPointerDown:Ge,onPointerMove:$e,onPointerUp:rt,onMouseEnter:()=>L(!0),onMouseLeave:()=>L(!1),style:{width:de,x:ke},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:At}),l.jsx(ei.div,{className:"dialkit-slider-fill",style:{width:D}}),l.jsx(ei.div,{className:"dialkit-slider-handle",style:{left:te,y:"-50%"},animate:{opacity:ot,scaleX:me?1:.25,scaleY:me&&at?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:hM(h)})]}),U?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:oe,onChange:tt,onKeyDown:Rt,onBlur:Oe,onClick:H=>H.stopPropagation(),onMouseDown:H=>H.stopPropagation()}):l.jsx("span",{ref:S,className:`dialkit-slider-value ${X?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>P(!0),onMouseLeave:()=>P(!1),onClick:lt,onMouseDown:H=>X&&H.stopPropagation(),style:{cursor:X?"text":"default"},children:ct})]})})}function Gp({options:t,value:n,onChange:i}){const a=y.useRef(null),c=y.useRef(!1),[u,d]=y.useState(null),h=y.useCallback(()=>{const g=a.current;if(!g)return;const _=g.querySelector('[data-active="true"]');_&&d({left:_.offsetLeft,width:_.offsetWidth})},[]);y.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(g=>{const _=n===g.value;return l.jsx("button",{onClick:()=>i(g.value),className:"dialkit-segmented-button","data-active":String(_),children:g.label},g.value)})]})}function SM({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:mM(a)})]}),l.jsx(Gp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function CM(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const g=1;for(let _=0;_<=100;_++){const x=_*d;c.push([x,h]);const b=-t*(h-g),S=-n*p,C=(b+S)/i;p+=C*d,h+=p*d}return c}function n2({spring:t,isSimpleMode:n}){var k,j,M,I,L;let c,u,d;if(n){const N=(k=t.visualDuration)!=null?k:.3,P=(j=t.bounce)!=null?j:.2;d=1,c=2*Math.PI/N,c=Math.pow(c,2),u=2*(1-P)*Math.sqrt(c*d)}else c=(M=t.stiffness)!=null?M:400,u=(I=t.damping)!=null?I:17,d=(L=t.mass)!=null?L:1;const h=2,p=CM(c,u,d,h),g=p.map(([,N])=>N),_=Math.min(...g),b=Math.max(...g)-_,S=p.map(([N,P],X)=>{const Y=N/h*256,Z=140-((P-_)/(b||1)*140*.6+140*.2);return`${X===0?"M":"L"} ${Y} ${Z}`}).join(" "),C=[];for(let N=1;N<4;N++){const P=64*N,X=140/4*N;C.push(l.jsx("line",{x1:P,y1:0,x2:P,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${N}`),l.jsx("line",{x1:0,y1:X,x2:256,y2:X,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${N}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[C,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:S,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function kM({panelId:t,path:n,label:i,spring:a,onChange:c}){var _,x,b,S,C;const u=y.useSyncExternalStore(k=>sn.subscribe(t,k),()=>sn.getSpringMode(t,n),()=>sn.getSpringMode(t,n)),d=u==="simple",h=y.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=k=>{sn.updateSpringMode(t,n,k),c(k==="simple"?h.current.simple:h.current.advanced)},g=(k,j)=>{if(d){const{stiffness:M,damping:I,mass:L,...N}=a;c({...N,[k]:j})}else{const{visualDuration:M,bounce:I,...L}=a;c({...L,[k]:j})}};return l.jsx(Ld,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(n2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Gp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Ao,{label:"Duration",value:(_=a.visualDuration)!=null?_:.3,onChange:k=>g("visualDuration",k),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Ao,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:k=>g("bounce",k),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Ao,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:k=>g("stiffness",k),min:1,max:1e3,step:10}),l.jsx(Ao,{label:"Damping",value:(S=a.damping)!=null?S:17,onChange:k=>g("damping",k),min:1,max:100,step:1}),l.jsx(Ao,{label:"Mass",value:(C=a.mass)!=null?C:1,onChange:k=>g("mass",k),min:.1,max:10,step:.1})]})]})})}function jM({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,S)=>({x:a+(b+.5)*u,y:a+(1.5-S)*u}),h=d(0,0),p=d(1,1),g=d(n[0],n[1]),_=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${g.x} ${g.y}, ${_.x} ${_.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function MM({panelId:t,path:n,label:i,value:a,onChange:c}){var C,k,j,M,I;const u=y.useSyncExternalStore(L=>sn.subscribe(t,L),()=>sn.getTransitionMode(t,n),()=>sn.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=y.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const g=a.type==="spring"?a:p.current.simple,_=a.type==="easing"?a:p.current.easing,x=L=>{sn.updateTransitionMode(t,n,L),c(L==="easing"?p.current.easing:L==="simple"?p.current.simple:p.current.advanced)},b=(L,N)=>{if(h){const{stiffness:P,damping:X,mass:Y,...U}=g;c({...U,[L]:N})}else{const{visualDuration:P,bounce:X,...Y}=g;c({...Y,[L]:N})}},S=(L,N)=>{const P=[..._.ease];P[L]=N,c({..._,ease:P})};return l.jsx(Ld,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(jM,{easing:_}):l.jsx(n2,{spring:g,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Gp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Ao,{label:"x1",value:_.ease[0],onChange:L=>S(0,L),min:0,max:1,step:.01}),l.jsx(Ao,{label:"y1",value:_.ease[1],onChange:L=>S(1,L),min:-1,max:2,step:.01}),l.jsx(Ao,{label:"x2",value:_.ease[2],onChange:L=>S(2,L),min:0,max:1,step:.01}),l.jsx(Ao,{label:"y2",value:_.ease[3],onChange:L=>S(3,L),min:-1,max:2,step:.01}),l.jsx(Ao,{label:"Duration",value:_.duration,onChange:L=>c({..._,duration:L}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(EM,{ease:_.ease,onChange:L=>c({..._,ease:L})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(Ao,{label:"Duration",value:(C=g.visualDuration)!=null?C:.3,onChange:L=>b("visualDuration",L),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Ao,{label:"Bounce",value:(k=g.bounce)!=null?k:.2,onChange:L=>b("bounce",L),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Ao,{label:"Stiffness",value:(j=g.stiffness)!=null?j:400,onChange:L=>b("stiffness",L),min:1,max:1e3,step:10}),l.jsx(Ao,{label:"Damping",value:(M=g.damping)!=null?M:17,onChange:L=>b("damping",L),min:1,max:100,step:1}),l.jsx(Ao,{label:"Mass",value:(I=g.mass)!=null?I:1,onChange:L=>b("mass",L),min:.1,max:10,step:.1})]})]})})}function Mx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function TM(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function EM({ease:t,onChange:n}){const[i,a]=y.useState(!1),[c,u]=y.useState(""),d=()=>{u(Mx(t)),a(!0)},h=()=>{const g=TM(c);g&&n(g),a(!1)},p=g=>{g.key==="Enter"&&g.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Mx(t),onChange:g=>u(g.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function AM({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function DM(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function NM(t){return t.map(n=>typeof n=="string"?{value:n,label:DM(n)}:n)}function RM({label:t,value:n,options:i,onChange:a}){var k;const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState(null),[_,x]=y.useState(null),b=NM(i),S=b.find(j=>j.value===n),C=y.useCallback(()=>{const j=d.current;if(!j)return;const M=j.getBoundingClientRect(),I=8+b.length*36,L=window.innerHeight-M.bottom-4,N=L<I&&M.top>L;x({top:N?M.top-4:M.bottom+4,left:M.left,width:M.width,above:N})},[b.length]);return y.useEffect(()=>{var M;const j=(M=d.current)==null?void 0:M.closest(".dialkit-root");g(j!=null?j:document.body)},[]),y.useEffect(()=>{c&&C()},[c,C]),y.useEffect(()=>{if(!c)return;const j=M=>{const I=M.target;d.current&&!d.current.contains(I)&&h.current&&!h.current.contains(I)&&u(!1)};return document.addEventListener("mousedown",j),()=>document.removeEventListener("mousedown",j)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(k=S==null?void 0:S.label)!=null?k:n}),l.jsx(ei.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:qp})})]})]}),p&&Ec.createPortal(l.jsx(Ud,{children:c&&_&&l.jsx(ei.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:_.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:_.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:_.left,width:_.width,..._.above?{bottom:window.innerHeight-_.top,transformOrigin:"bottom"}:{top:_.top,transformOrigin:"top"}},children:b.map(j=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(j.value===n),onClick:()=>{a(j.value),u(!1)},children:j.label},j.value))})}),p)]})}var BM=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function LM({label:t,value:n,onChange:i}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useRef(null);y.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),BM.test(u)?i(u):d(n)}function g(_){_.key==="Enter"?p():_.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:_=>d(_.target.value),onBlur:p,onKeyDown:g,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var _;return(_=h.current)==null?void 0:_.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?OM(n):n.slice(0,7),onChange:_=>i(_.target.value)})]})]})}function OM(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function zM({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState({top:0,left:0,width:0}),_=n.length>0,x=n.find(M=>M.id===i),b=y.useCallback(()=>{var I;if(!_)return;const M=(I=d.current)==null?void 0:I.getBoundingClientRect();M&&g({top:M.bottom+4,left:M.left,width:M.width}),u(!0)},[_]),S=y.useCallback(()=>u(!1),[]),C=y.useCallback(()=>{c?S():b()},[c,b,S]);y.useEffect(()=>{if(!c)return;const M=I=>{var N,P;const L=I.target;(N=d.current)!=null&&N.contains(L)||(P=h.current)!=null&&P.contains(L)||S()};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[c,S]);const k=M=>{M?sn.loadPreset(t,M):sn.clearActivePreset(t),S()},j=(M,I)=>{M.stopPropagation(),sn.deletePreset(t,I)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:C,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!_),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(ei.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:_?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:qp})})]}),Ec.createPortal(l.jsx(Ud,{children:c&&l.jsxs(ei.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>k(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(M=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(M.id===i),onClick:()=>k(M.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:M.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:I=>j(I,M.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:yM.map((I,L)=>l.jsx("path",{d:I},L))})})]},M.id))]})}),document.body)]})}function $M({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useContext(t2);Object.keys(t.shortcuts).length>0;const p=y.useSyncExternalStore(j=>sn.subscribe(t.id,j),()=>sn.getValues(t.id),()=>sn.getValues(t.id)),g=sn.getPresets(t.id),_=sn.getActivePresetId(t.id),x=()=>{const j=g.length+2;sn.savePreset(t.id,`Version ${j}`)},b=()=>{const j=JSON.stringify(p,null,2),M=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${j}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(M),c(!0),setTimeout(()=>c(!1),1500)},S=j=>{var I,L,N;const M=p[j.path];switch(j.type){case"slider":return l.jsx(Ao,{label:j.label,value:M,onChange:P=>sn.updateValue(t.id,j.path,P),min:j.min,max:j.max,step:j.step,shortcut:j.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===j.path},j.path);case"toggle":return l.jsx(SM,{label:j.label,checked:M,onChange:P=>sn.updateValue(t.id,j.path,P),shortcut:j.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===j.path},j.path);case"spring":return l.jsx(kM,{panelId:t.id,path:j.path,label:j.label,spring:M,onChange:P=>sn.updateValue(t.id,j.path,P)},j.path);case"transition":return l.jsx(MM,{panelId:t.id,path:j.path,label:j.label,value:M,onChange:P=>sn.updateValue(t.id,j.path,P)},j.path);case"folder":return l.jsx(Ld,{title:j.label,defaultOpen:(I=j.defaultOpen)!=null?I:!0,children:(L=j.children)==null?void 0:L.map(S)},j.path);case"text":return l.jsx(AM,{label:j.label,value:M,onChange:P=>sn.updateValue(t.id,j.path,P),placeholder:j.placeholder},j.path);case"select":return l.jsx(RM,{label:j.label,value:M,options:(N=j.options)!=null?N:[],onChange:P=>sn.updateValue(t.id,j.path,P)},j.path);case"color":return l.jsx(LM,{label:j.label,value:M,onChange:P=>sn.updateValue(t.id,j.path,P)},j.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>sn.triggerAction(t.id,j.path),children:j.label},j.path);default:return null}},C=()=>t.controls.map(S),k=l.jsxs(l.Fragment,{children:[l.jsx(ei.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:gM.map((j,M)=>l.jsx("path",{d:j},M))})}),l.jsx(zM,{panelId:t.id,presets:g,activePresetId:_,onAdd:x}),l.jsx(ei.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Ud,{initial:!1,mode:"wait",children:a?l.jsx(ei.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:_M})},"check"):l.jsxs(ei.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:km.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:km.sparkle,fill:"currentColor"}),l.jsx("path",{d:km.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Ld,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:k,children:C()})})}var IM=typeof process<"u"?!1:!(typeof import.meta<"u");function PM({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=IM}){if(!c)return null;const[u,d]=y.useState([]),[h,p]=y.useState(!1),g=i==="inline",_=y.useRef(null),[x,b]=y.useState(null),[S,C]=y.useState(t),k=y.useRef(null),j=y.useRef(!1),M=y.useRef(null),I=y.useRef(!1);y.useEffect(()=>(p(!0),d(sn.getPanels()),sn.subscribeGlobal(()=>{d(sn.getPanels())})),[]),y.useEffect(()=>{if(!_.current||g)return;const U=new MutationObserver(()=>{var ie;const Z=(ie=_.current)==null?void 0:ie.querySelector(".dialkit-panel-inner");if(!Z)return;if(Z.getAttribute("data-collapsed")==="true")k.current&&b(k.current);else{if(x){k.current=x;const be=x.x+21,Te=window.innerWidth/2;C(be<Te?"top-left":"top-right")}else C(t);b(null)}});return U.observe(_.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>U.disconnect()},[g,x,t]);const L=y.useCallback(U=>{var ie;const Z=(ie=_.current)==null?void 0:ie.querySelector(".dialkit-panel-inner");if(!Z||Z.getAttribute("data-collapsed")!=="true")return;const oe=_.current.getBoundingClientRect();M.current={pointerX:U.clientX,pointerY:U.clientY,elX:oe.left,elY:oe.top},I.current=!1,j.current=!0,U.target.setPointerCapture(U.pointerId)},[]),N=y.useCallback(U=>{if(!j.current||!M.current)return;const Z=U.clientX-M.current.pointerX,oe=U.clientY-M.current.pointerY;!I.current&&Math.abs(Z)+Math.abs(oe)<4||(I.current=!0,b({x:M.current.elX+Z,y:M.current.elY+oe}))},[]),P=y.useCallback(U=>{var Z;if(j.current&&(j.current=!1,M.current=null,I.current)){U.stopPropagation();const oe=(Z=_.current)==null?void 0:Z.querySelector(".dialkit-panel-inner");if(oe){const ie=be=>{be.stopPropagation()};oe.addEventListener("click",ie,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const X=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,Y=l.jsx(pM,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:_,className:"dialkit-panel","data-position":g||x?void 0:S,"data-mode":i,style:X,onPointerDown:g?void 0:L,onPointerMove:g?void 0:N,onPointerUp:g?void 0:P,children:u.map(U=>l.jsx($M,{panel:U,defaultOpen:g||n,inline:g},U.id))})})});return g?Y:Ec.createPortal(Y,document.body)}const HM=()=>(sM("Git Visualizer",{preview:[1,0,1]}),null),UM=({children:t})=>l.jsxs(l.Fragment,{children:[t,l.jsx(HM,{}),l.jsx(PM,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(V6,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});Ev.createRoot(document.getElementById("root")).render(l.jsx(UM,{children:l.jsx(jw,{})}));

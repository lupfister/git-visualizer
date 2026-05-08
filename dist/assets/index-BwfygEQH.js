(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Xx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yh={exports:{}},Sc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uy;function Vv(){if(uy)return Sc;uy=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:e,type:a,key:d,ref:c!==void 0?c:null,props:u}}return Sc.Fragment=n,Sc.jsx=i,Sc.jsxs=i,Sc}var dy;function Yv(){return dy||(dy=1,Yh.exports=Vv()),Yh.exports}var l=Yv(),Wh={exports:{}},Cc={},Fh={exports:{}},Xh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy;function Wv(){return fy||(fy=1,(function(e){function n(O,se){var I=O.length;O.push(se);e:for(;0<I;){var fe=I-1>>>1,xe=O[fe];if(0<c(xe,se))O[fe]=se,O[I]=xe,I=fe;else break e}}function i(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var se=O[0],I=O.pop();if(I!==se){O[0]=I;e:for(var fe=0,xe=O.length,z=xe>>>1;fe<z;){var ae=2*(fe+1)-1,Q=O[ae],be=ae+1,Me=O[be];if(0>c(Q,I))be<xe&&0>c(Me,Q)?(O[fe]=Me,O[be]=I,fe=be):(O[fe]=Q,O[ae]=I,fe=ae);else if(be<xe&&0>c(Me,I))O[fe]=Me,O[be]=I,fe=be;else break e}}return se}function c(O,se){var I=O.sortIndex-se.sortIndex;return I!==0?I:O.id-se.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();e.unstable_now=function(){return d.now()-h}}var p=[],y=[],g=1,x=null,w=3,C=!1,j=!1,A=!1,T=!1,R=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(O){for(var se=i(y);se!==null;){if(se.callback===null)a(y);else if(se.startTime<=O)a(y),se.sortIndex=se.expirationTime,n(p,se);else break;se=i(y)}}function F(O){if(A=!1,D(O),!j)if(i(p)!==null)j=!0,Y||(Y=!0,Ne());else{var se=i(y);se!==null&&de(F,se.startTime-O)}}var Y=!1,V=-1,X=5,le=-1;function ue(){return T?!0:!(e.unstable_now()-le<X)}function pe(){if(T=!1,Y){var O=e.unstable_now();le=O;var se=!0;try{e:{j=!1,A&&(A=!1,P(V),V=-1),C=!0;var I=w;try{t:{for(D(O),x=i(p);x!==null&&!(x.expirationTime>O&&ue());){var fe=x.callback;if(typeof fe=="function"){x.callback=null,w=x.priorityLevel;var xe=fe(x.expirationTime<=O);if(O=e.unstable_now(),typeof xe=="function"){x.callback=xe,D(O),se=!0;break t}x===i(p)&&a(p),D(O)}else a(p);x=i(p)}if(x!==null)se=!0;else{var z=i(y);z!==null&&de(F,z.startTime-O),se=!1}}break e}finally{x=null,w=I,C=!1}se=void 0}}finally{se?Ne():Y=!1}}}var Ne;if(typeof L=="function")Ne=function(){L(pe)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,ne=Fe.port2;Fe.port1.onmessage=pe,Ne=function(){ne.postMessage(null)}}else Ne=function(){R(pe,0)};function de(O,se){V=R(function(){O(e.unstable_now())},se)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_next=function(O){switch(w){case 1:case 2:case 3:var se=3;break;default:se=w}var I=w;w=se;try{return O()}finally{w=I}},e.unstable_requestPaint=function(){T=!0},e.unstable_runWithPriority=function(O,se){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var I=w;w=O;try{return se()}finally{w=I}},e.unstable_scheduleCallback=function(O,se,I){var fe=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?fe+I:fe):I=fe,O){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=I+xe,O={id:g++,callback:se,priorityLevel:O,startTime:I,expirationTime:xe,sortIndex:-1},I>fe?(O.sortIndex=I,n(y,O),i(p)===null&&O===i(y)&&(A?(P(V),V=-1):A=!0,de(F,I-fe))):(O.sortIndex=xe,n(p,O),j||C||(j=!0,Y||(Y=!0,Ne()))),O},e.unstable_shouldYield=ue,e.unstable_wrapCallback=function(O){var se=w;return function(){var I=w;w=se;try{return O.apply(this,arguments)}finally{w=I}}}})(Xh)),Xh}var hy;function Fv(){return hy||(hy=1,Fh.exports=Wv()),Fh.exports}var Gh={exports:{}},on={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my;function Xv(){if(my)return on;my=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),w=Symbol.iterator;function C(z){return z===null||typeof z!="object"?null:(z=w&&z[w]||z["@@iterator"],typeof z=="function"?z:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,T={};function R(z,ae,Q){this.props=z,this.context=ae,this.refs=T,this.updater=Q||j}R.prototype.isReactComponent={},R.prototype.setState=function(z,ae){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,ae,"setState")},R.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function P(){}P.prototype=R.prototype;function L(z,ae,Q){this.props=z,this.context=ae,this.refs=T,this.updater=Q||j}var D=L.prototype=new P;D.constructor=L,A(D,R.prototype),D.isPureReactComponent=!0;var F=Array.isArray;function Y(){}var V={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function le(z,ae,Q){var be=Q.ref;return{$$typeof:e,type:z,key:ae,ref:be!==void 0?be:null,props:Q}}function ue(z,ae){return le(z.type,ae,z.props)}function pe(z){return typeof z=="object"&&z!==null&&z.$$typeof===e}function Ne(z){var ae={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Q){return ae[Q]})}var Fe=/\/+/g;function ne(z,ae){return typeof z=="object"&&z!==null&&z.key!=null?Ne(""+z.key):ae.toString(36)}function de(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(Y,Y):(z.status="pending",z.then(function(ae){z.status==="pending"&&(z.status="fulfilled",z.value=ae)},function(ae){z.status==="pending"&&(z.status="rejected",z.reason=ae)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function O(z,ae,Q,be,Me){var me=typeof z;(me==="undefined"||me==="boolean")&&(z=null);var Le=!1;if(z===null)Le=!0;else switch(me){case"bigint":case"string":case"number":Le=!0;break;case"object":switch(z.$$typeof){case e:case n:Le=!0;break;case g:return Le=z._init,O(Le(z._payload),ae,Q,be,Me)}}if(Le)return Me=Me(z),Le=be===""?"."+ne(z,0):be,F(Me)?(Q="",Le!=null&&(Q=Le.replace(Fe,"$&/")+"/"),O(Me,ae,Q,"",function(ht){return ht})):Me!=null&&(pe(Me)&&(Me=ue(Me,Q+(Me.key==null||z&&z.key===Me.key?"":(""+Me.key).replace(Fe,"$&/")+"/")+Le)),ae.push(Me)),1;Le=0;var Ze=be===""?".":be+":";if(F(z))for(var Ve=0;Ve<z.length;Ve++)be=z[Ve],me=Ze+ne(be,Ve),Le+=O(be,ae,Q,me,Me);else if(Ve=C(z),typeof Ve=="function")for(z=Ve.call(z),Ve=0;!(be=z.next()).done;)be=be.value,me=Ze+ne(be,Ve++),Le+=O(be,ae,Q,me,Me);else if(me==="object"){if(typeof z.then=="function")return O(de(z),ae,Q,be,Me);throw ae=String(z),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return Le}function se(z,ae,Q){if(z==null)return z;var be=[],Me=0;return O(z,be,"","",function(me){return ae.call(Q,me,Me++)}),be}function I(z){if(z._status===-1){var ae=z._result;ae=ae(),ae.then(function(Q){(z._status===0||z._status===-1)&&(z._status=1,z._result=Q)},function(Q){(z._status===0||z._status===-1)&&(z._status=2,z._result=Q)}),z._status===-1&&(z._status=0,z._result=ae)}if(z._status===1)return z._result.default;throw z._result}var fe=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},xe={map:se,forEach:function(z,ae,Q){se(z,function(){ae.apply(this,arguments)},Q)},count:function(z){var ae=0;return se(z,function(){ae++}),ae},toArray:function(z){return se(z,function(ae){return ae})||[]},only:function(z){if(!pe(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return on.Activity=x,on.Children=xe,on.Component=R,on.Fragment=i,on.Profiler=c,on.PureComponent=L,on.StrictMode=a,on.Suspense=p,on.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,on.__COMPILER_RUNTIME={__proto__:null,c:function(z){return V.H.useMemoCache(z)}},on.cache=function(z){return function(){return z.apply(null,arguments)}},on.cacheSignal=function(){return null},on.cloneElement=function(z,ae,Q){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var be=A({},z.props),Me=z.key;if(ae!=null)for(me in ae.key!==void 0&&(Me=""+ae.key),ae)!X.call(ae,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&ae.ref===void 0||(be[me]=ae[me]);var me=arguments.length-2;if(me===1)be.children=Q;else if(1<me){for(var Le=Array(me),Ze=0;Ze<me;Ze++)Le[Ze]=arguments[Ze+2];be.children=Le}return le(z.type,Me,be)},on.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:u,_context:z},z},on.createElement=function(z,ae,Q){var be,Me={},me=null;if(ae!=null)for(be in ae.key!==void 0&&(me=""+ae.key),ae)X.call(ae,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Me[be]=ae[be]);var Le=arguments.length-2;if(Le===1)Me.children=Q;else if(1<Le){for(var Ze=Array(Le),Ve=0;Ve<Le;Ve++)Ze[Ve]=arguments[Ve+2];Me.children=Ze}if(z&&z.defaultProps)for(be in Le=z.defaultProps,Le)Me[be]===void 0&&(Me[be]=Le[be]);return le(z,me,Me)},on.createRef=function(){return{current:null}},on.forwardRef=function(z){return{$$typeof:h,render:z}},on.isValidElement=pe,on.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:I}},on.memo=function(z,ae){return{$$typeof:y,type:z,compare:ae===void 0?null:ae}},on.startTransition=function(z){var ae=V.T,Q={};V.T=Q;try{var be=z(),Me=V.S;Me!==null&&Me(Q,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(Y,fe)}catch(me){fe(me)}finally{ae!==null&&Q.types!==null&&(ae.types=Q.types),V.T=ae}},on.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},on.use=function(z){return V.H.use(z)},on.useActionState=function(z,ae,Q){return V.H.useActionState(z,ae,Q)},on.useCallback=function(z,ae){return V.H.useCallback(z,ae)},on.useContext=function(z){return V.H.useContext(z)},on.useDebugValue=function(){},on.useDeferredValue=function(z,ae){return V.H.useDeferredValue(z,ae)},on.useEffect=function(z,ae){return V.H.useEffect(z,ae)},on.useEffectEvent=function(z){return V.H.useEffectEvent(z)},on.useId=function(){return V.H.useId()},on.useImperativeHandle=function(z,ae,Q){return V.H.useImperativeHandle(z,ae,Q)},on.useInsertionEffect=function(z,ae){return V.H.useInsertionEffect(z,ae)},on.useLayoutEffect=function(z,ae){return V.H.useLayoutEffect(z,ae)},on.useMemo=function(z,ae){return V.H.useMemo(z,ae)},on.useOptimistic=function(z,ae){return V.H.useOptimistic(z,ae)},on.useReducer=function(z,ae,Q){return V.H.useReducer(z,ae,Q)},on.useRef=function(z){return V.H.useRef(z)},on.useState=function(z){return V.H.useState(z)},on.useSyncExternalStore=function(z,ae,Q){return V.H.useSyncExternalStore(z,ae,Q)},on.useTransition=function(){return V.H.useTransition()},on.version="19.2.4",on}var py;function wp(){return py||(py=1,Gh.exports=Xv()),Gh.exports}var qh={exports:{}},Xo={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y;function Gv(){if(_y)return Xo;_y=1;var e=wp();function n(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)y+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,y,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:y,implementation:g}}var d=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Xo.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Xo.createPortal=function(p,y){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(n(299));return u(p,y,null,g)},Xo.flushSync=function(p){var y=d.T,g=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=y,a.p=g,a.d.f()}},Xo.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(p,y))},Xo.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Xo.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin),w=typeof y.integrity=="string"?y.integrity:void 0,C=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;g==="style"?a.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:w,fetchPriority:C}):g==="script"&&a.d.X(p,{crossOrigin:x,integrity:w,fetchPriority:C,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Xo.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var g=h(y.as,y.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(p)},Xo.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin);a.d.L(p,g,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Xo.preloadModule=function(p,y){if(typeof p=="string")if(y){var g=h(y.as,y.crossOrigin);a.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(p)},Xo.requestFormReset=function(p){a.d.r(p)},Xo.unstable_batchedUpdates=function(p,y){return p(y)},Xo.useFormState=function(p,y,g){return d.H.useFormState(p,y,g)},Xo.useFormStatus=function(){return d.H.useHostTransitionStatus()},Xo.version="19.2.4",Xo}var gy;function Gx(){if(gy)return qh.exports;gy=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),qh.exports=Gv(),qh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy;function qv(){if(yy)return Cc;yy=1;var e=Fv(),n=wp(),i=Gx();function a(t){var s="https://react.dev/errors/"+t;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+t+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var s=t,o=t;if(t.alternate)for(;s.return;)s=s.return;else{t=s;do s=t,(s.flags&4098)!==0&&(o=s.return),t=s.return;while(t)}return s.tag===3?o:null}function d(t){if(t.tag===13){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function h(t){if(t.tag===31){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(a(188))}function y(t){var s=t.alternate;if(!s){if(s=u(t),s===null)throw Error(a(188));return s!==t?null:t}for(var o=t,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),t;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var S=!1,B=f.child;B;){if(B===o){S=!0,o=f,r=m;break}if(B===r){S=!0,r=f,o=m;break}B=B.sibling}if(!S){for(B=m.child;B;){if(B===o){S=!0,o=m,r=f;break}if(B===r){S=!0,r=m,o=f;break}B=B.sibling}if(!S)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?t:s}function g(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t;for(t=t.child;t!==null;){if(s=g(t),s!==null)return s;t=t.sibling}return null}var x=Object.assign,w=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),le=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),pe=Symbol.iterator;function Ne(t){return t===null||typeof t!="object"?null:(t=pe&&t[pe]||t["@@iterator"],typeof t=="function"?t:null)}var Fe=Symbol.for("react.client.reference");function ne(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Fe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case R:return"Profiler";case T:return"StrictMode";case F:return"Suspense";case Y:return"SuspenseList";case le:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case j:return"Portal";case L:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case D:var s=t.render;return t=t.displayName,t||(t=s.displayName||s.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V:return s=t.displayName||null,s!==null?s:ne(t.type)||"Memo";case X:s=t._payload,t=t._init;try{return ne(t(s))}catch{}}return null}var de=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},fe=[],xe=-1;function z(t){return{current:t}}function ae(t){0>xe||(t.current=fe[xe],fe[xe]=null,xe--)}function Q(t,s){xe++,fe[xe]=t.current,t.current=s}var be=z(null),Me=z(null),me=z(null),Le=z(null);function Ze(t,s){switch(Q(me,s),Q(Me,t),Q(be,null),s.nodeType){case 9:case 11:t=(t=s.documentElement)&&(t=t.namespaceURI)?R0(t):0;break;default:if(t=s.tagName,s=s.namespaceURI)s=R0(s),t=B0(s,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ae(be),Q(be,t)}function Ve(){ae(be),ae(Me),ae(me)}function ht(t){t.memoizedState!==null&&Q(Le,t);var s=be.current,o=B0(s,t.type);s!==o&&(Q(Me,t),Q(be,o))}function Tt(t){Me.current===t&&(ae(be),ae(Me)),Le.current===t&&(ae(Le),xc._currentValue=I)}var Ct,lt;function $t(t){if(Ct===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Ct=s&&s[1]||"",lt=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ct+t+lt}var pt=!1;function qt(t,s){if(!t||pt)return"";pt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var He=function(){throw Error()};if(Object.defineProperty(He.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(He,[])}catch(ke){var ve=ke}Reflect.construct(t,[],He)}else{try{He.call()}catch(ke){ve=ke}t.call(He.prototype)}}else{try{throw Error()}catch(ke){ve=ke}(He=t())&&typeof He.catch=="function"&&He.catch(function(){})}}catch(ke){if(ke&&ve&&typeof ke.stack=="string")return[ke.stack,ve.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),S=m[0],B=m[1];if(S&&B){var G=S.split(`
`),ge=B.split(`
`);for(f=r=0;r<G.length&&!G[r].includes("DetermineComponentFrameRoot");)r++;for(;f<ge.length&&!ge[f].includes("DetermineComponentFrameRoot");)f++;if(r===G.length||f===ge.length)for(r=G.length-1,f=ge.length-1;1<=r&&0<=f&&G[r]!==ge[f];)f--;for(;1<=r&&0<=f;r--,f--)if(G[r]!==ge[f]){if(r!==1||f!==1)do if(r--,f--,0>f||G[r]!==ge[f]){var Be=`
`+G[r].replace(" at new "," at ");return t.displayName&&Be.includes("<anonymous>")&&(Be=Be.replace("<anonymous>",t.displayName)),Be}while(1<=r&&0<=f);break}}}finally{pt=!1,Error.prepareStackTrace=o}return(o=t?t.displayName||t.name:"")?$t(o):""}function Kt(t,s){switch(t.tag){case 26:case 27:case 5:return $t(t.type);case 16:return $t("Lazy");case 13:return t.child!==s&&s!==null?$t("Suspense Fallback"):$t("Suspense");case 19:return $t("SuspenseList");case 0:case 15:return qt(t.type,!1);case 11:return qt(t.type.render,!1);case 1:return qt(t.type,!0);case 31:return $t("Activity");default:return""}}function K(t){try{var s="",o=null;do s+=Kt(t,o),o=t,t=t.return;while(t);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var De=Object.prototype.hasOwnProperty,ct=e.unstable_scheduleCallback,at=e.unstable_cancelCallback,_t=e.unstable_shouldYield,Ie=e.unstable_requestPaint,xt=e.unstable_now,gt=e.unstable_getCurrentPriorityLevel,kt=e.unstable_ImmediatePriority,Xe=e.unstable_UserBlockingPriority,ot=e.unstable_NormalPriority,U=e.unstable_LowPriority,J=e.unstable_IdlePriority,we=e.log,je=e.unstable_setDisableYieldValue,tt=null,Ue=null;function Ae(t){if(typeof we=="function"&&je(t),Ue&&typeof Ue.setStrictMode=="function")try{Ue.setStrictMode(tt,t)}catch{}}var ye=Math.clz32?Math.clz32:nt,st=Math.log,We=Math.LN2;function nt(t){return t>>>=0,t===0?32:31-(st(t)/We|0)|0}var Re=256,Je=262144,bt=4194304;function vt(t){var s=t&42;if(s!==0)return s;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ke(t,s,o){var r=t.pendingLanes;if(r===0)return 0;var f=0,m=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var B=r&134217727;return B!==0?(r=B&~m,r!==0?f=vt(r):(S&=B,S!==0?f=vt(S):o||(o=B&~t,o!==0&&(f=vt(o))))):(B=r&~m,B!==0?f=vt(B):S!==0?f=vt(S):o||(o=r&~t,o!==0&&(f=vt(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function Rt(t,s){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&s)===0}function wt(t,s){switch(t){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mt(){var t=bt;return bt<<=1,(bt&62914560)===0&&(bt=4194304),t}function rn(t){for(var s=[],o=0;31>o;o++)s.push(t);return s}function ft(t,s){t.pendingLanes|=s,s!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ht(t,s,o,r,f,m){var S=t.pendingLanes;t.pendingLanes=o,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=o,t.entangledLanes&=o,t.errorRecoveryDisabledLanes&=o,t.shellSuspendCounter=0;var B=t.entanglements,G=t.expirationTimes,ge=t.hiddenUpdates;for(o=S&~o;0<o;){var Be=31-ye(o),He=1<<Be;B[Be]=0,G[Be]=-1;var ve=ge[Be];if(ve!==null)for(ge[Be]=null,Be=0;Be<ve.length;Be++){var ke=ve[Be];ke!==null&&(ke.lane&=-536870913)}o&=~He}r!==0&&dn(t,r,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(S&~s))}function dn(t,s,o){t.pendingLanes|=s,t.suspendedLanes&=~s;var r=31-ye(s);t.entangledLanes|=s,t.entanglements[r]=t.entanglements[r]|1073741824|o&261930}function Ot(t,s){var o=t.entangledLanes|=s;for(t=t.entanglements;o;){var r=31-ye(o),f=1<<r;f&s|t[r]&s&&(t[r]|=s),o&=~f}}function St(t,s){var o=s&-s;return o=(o&42)!==0?1:fn(o),(o&(t.suspendedLanes|s))!==0?0:o}function fn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ls(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Qt(){var t=se.p;return t!==0?t:(t=window.event,t===void 0?32:sy(t.type))}function pn(t,s){var o=se.p;try{return se.p=t,s()}finally{se.p=o}}var Jt=Math.random().toString(36).slice(2),zt="__reactFiber$"+Jt,tn="__reactProps$"+Jt,Ge="__reactContainer$"+Jt,$n="__reactEvents$"+Jt,In="__reactListeners$"+Jt,Ds="__reactHandles$"+Jt,Vn="__reactResources$"+Jt,bo="__reactMarker$"+Jt;function Is(t){delete t[zt],delete t[tn],delete t[$n],delete t[In],delete t[Ds]}function lo(t){var s=t[zt];if(s)return s;for(var o=t.parentNode;o;){if(s=o[Ge]||o[zt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(t=H0(t);t!==null;){if(o=t[zt])return o;t=H0(t)}return s}t=o,o=t.parentNode}return null}function Ps(t){if(t=t[zt]||t[Ge]){var s=t.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return t}return null}function Zt(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t.stateNode;throw Error(a(33))}function jn(t){var s=t[Vn];return s||(s=t[Vn]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function yn(t){t[bo]=!0}var Hs=new Set,Rn={};function hs(t,s){en(t,s),en(t+"Capture",s)}function en(t,s){for(Rn[t]=s,t=0;t<s.length;t++)Hs.add(s[t])}var es=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vo={},ws={};function Ks(t){return De.call(ws,t)?!0:De.call(vo,t)?!1:es.test(t)?ws[t]=!0:(vo[t]=!0,!1)}function Rs(t,s,o){if(Ks(s))if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":t.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(s);return}}t.setAttribute(s,""+o)}}function qn(t,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttribute(s,""+o)}}function gs(t,s,o,r){if(r===null)t.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(o);return}t.setAttributeNS(s,o,""+r)}}function Mn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Uo(t){var s=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Si(t,s,o){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,s);if(!t.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(t,s,{configurable:!0,get:function(){return f.call(this)},set:function(S){o=""+S,m.call(this,S)}}),Object.defineProperty(t,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){t._valueTracker=null,delete t[s]}}}}function Eo(t){if(!t._valueTracker){var s=Uo(t)?"checked":"value";t._valueTracker=Si(t,s,""+t[s])}}function Ii(t){if(!t)return!1;var s=t._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return t&&(r=Uo(t)?t.checked?"true":"false":t.value),t=r,t!==o?(s.setValue(t),!0):!1}function Qs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Us=/[\n"\\]/g;function Cs(t){return t.replace(Us,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Kn(t,s,o,r,f,m,S,B){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),s!=null?S==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+Mn(s)):t.value!==""+Mn(s)&&(t.value=""+Mn(s)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),s!=null?Vs(t,S,Mn(s)):o!=null?Vs(t,S,Mn(o)):r!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),B!=null&&typeof B!="function"&&typeof B!="symbol"&&typeof B!="boolean"?t.name=""+Mn(B):t.removeAttribute("name")}function wn(t,s,o,r,f,m,S,B){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){Eo(t);return}o=o!=null?""+Mn(o):"",s=s!=null?""+Mn(s):o,B||s===t.value||(t.value=s),t.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=B?t.checked:!!r,t.defaultChecked=!!r,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Eo(t)}function Vs(t,s,o){s==="number"&&Qs(t.ownerDocument)===t||t.defaultValue===""+o||(t.defaultValue=""+o)}function xn(t,s,o,r){if(t=t.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=s.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&r&&(t[o].defaultSelected=!0)}else{for(o=""+Mn(o),s=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,r&&(t[f].defaultSelected=!0);return}s!==null||t[f].disabled||(s=t[f])}s!==null&&(s.selected=!0)}}function ms(t,s,o){if(s!=null&&(s=""+Mn(s),s!==t.value&&(t.value=s),o==null)){t.defaultValue!==s&&(t.defaultValue=s);return}t.defaultValue=o!=null?""+Mn(o):""}function Ci(t,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(de(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=Mn(s),t.defaultValue=o,r=t.textContent,r===o&&r!==""&&r!==null&&(t.value=r),Eo(t)}function Vo(t,s){if(s){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=s;return}}t.textContent=s}var ci=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pt(t,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="":r?t.setProperty(s,o):typeof o!="number"||o===0||ci.has(s)?s==="float"?t.cssFloat=o:t[s]=(""+o).trim():t[s]=o+"px"}function Ys(t,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(t=t.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&Pt(t,f,r)}else for(var m in s)s.hasOwnProperty(m)&&Pt(t,m,s[m])}function ks(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ki=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),co=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ko(t){return co.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ps(){}var Ws=null;function Zs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bn=null,js=null;function Js(t){var s=Ps(t);if(s&&(t=s.stateNode)){var o=t[tn]||null;e:switch(t=s.stateNode,s.type){case"input":if(Kn(t,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Cs(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==t&&r.form===t.form){var f=r[tn]||null;if(!f)throw Error(a(90));Kn(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===t.form&&Ii(r)}break e;case"textarea":ms(t,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&xn(t,!!o.multiple,s,!1)}}}var Ms=!1;function Fs(t,s,o){if(Ms)return t(s,o);Ms=!0;try{var r=t(s);return r}finally{if(Ms=!1,(bn!==null||js!==null)&&(Du(),bn&&(s=bn,t=js,js=bn=null,Js(s),t)))for(s=0;s<t.length;s++)Js(t[s])}}function _n(t,s){var o=t.stateNode;if(o===null)return null;var r=o[tn]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Es=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eo=!1;if(Es)try{var Yo={};Object.defineProperty(Yo,"passive",{get:function(){eo=!0}}),window.addEventListener("test",Yo,Yo),window.removeEventListener("test",Yo,Yo)}catch{eo=!1}var Ts=null,ji=null,Qo=null;function To(){if(Qo)return Qo;var t,s=ji,o=s.length,r,f="value"in Ts?Ts.value:Ts.textContent,m=f.length;for(t=0;t<o&&s[t]===f[t];t++);var S=o-t;for(r=1;r<=S&&s[o-r]===f[m-r];r++);return Qo=f.slice(t,1<r?1-r:void 0)}function uo(t){var s=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&s===13&&(t=13)):t=s,t===10&&(t=13),32<=t||t===13?t:0}function Zo(){return!0}function ui(){return!1}function cs(t){function s(o,r,f,m,S){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var B in t)t.hasOwnProperty(B)&&(o=t[B],this[B]=o?o(m):m[B]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Zo:ui,this.isPropagationStopped=ui,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),s}var fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=cs(fo),As=x({},fo,{view:0,detail:0}),ho=cs(As),Ao,Ln,Xn,ts=x({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xn&&(Xn&&t.type==="mousemove"?(Ao=t.screenX-Xn.screenX,Ln=t.screenY-Xn.screenY):Ln=Ao=0,Xn=t),Ao)},movementY:function(t){return"movementY"in t?t.movementY:Ln}}),No=cs(ts),Sn=x({},ts,{dataTransfer:0}),di=cs(Sn),Ns=x({},As,{relatedTarget:0}),mo=cs(Ns),Mi=x({},fo,{animationName:0,elapsedTime:0,pseudoElement:0}),Jo=cs(Mi),ei=x({},fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ei=cs(ei),ti=x({},fo,{data:0}),Et=cs(ti),to={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ji={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pi={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hi(t){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(t):(t=Pi[t])?!!s[t]:!1}function wo(){return Hi}var Do=x({},As,{key:function(t){if(t.key){var s=to[t.key]||t.key;if(s!=="Unidentified")return s}return t.type==="keypress"?(t=uo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ji[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wo,charCode:function(t){return t.type==="keypress"?uo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),So=cs(Do),fi=x({},ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=cs(fi),W=x({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wo}),ce=cs(W),Ce=x({},fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pe=cs(Ce),rt=x({},ts,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wt=cs(rt),Vt=x({},fo,{newState:0,oldState:0}),At=cs(Vt),nn=[9,13,27,32],vn=Es&&"CompositionEvent"in window,ln=null;Es&&"documentMode"in document&&(ln=document.documentMode);var Gn=Es&&"TextEvent"in window&&!ln,sn=Es&&(!vn||ln&&8<ln&&11>=ln),Ut=" ",Bn=!1;function ys(t,s){switch(t){case"keyup":return nn.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function po(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bs=!1;function Ti(t,s){switch(t){case"compositionend":return po(s);case"keypress":return s.which!==32?null:(Bn=!0,Ut);case"textInput":return t=s.data,t===Ut&&Bn?null:t;default:return null}}function _o(t,s){if(Bs)return t==="compositionend"||!vn&&ys(t,s)?(t=To(),Qo=ji=Ts=null,Bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return sn&&s.locale!=="ko"?null:s.data;default:return null}}var Co={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ko(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s==="input"?!!Co[t.type]:s==="textarea"}function Ro(t,s,o,r){bn?js?js.push(r):js=[r]:bn=r,s=Iu(s,"onChange"),0<s.length&&(o=new Wo("onChange","change",null,o,r),t.push({event:o,listeners:s}))}var go=null,Bo=null;function ca(t){M0(t,0)}function b(t){var s=Zt(t);if(Ii(s))return t}function v(t,s){if(t==="change")return s}var k=!1;if(Es){var M;if(Es){var N="oninput"in document;if(!N){var H=document.createElement("div");H.setAttribute("oninput","return;"),N=typeof H.oninput=="function"}M=N}else M=!1;k=M&&(!document.documentMode||9<document.documentMode)}function oe(){go&&(go.detachEvent("onpropertychange",he),Bo=go=null)}function he(t){if(t.propertyName==="value"&&b(Bo)){var s=[];Ro(s,Bo,t,Zs(t)),Fs(ca,s)}}function Te(t,s,o){t==="focusin"?(oe(),go=s,Bo=o,go.attachEvent("onpropertychange",he)):t==="focusout"&&oe()}function et(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return b(Bo)}function ut(t,s){if(t==="click")return b(s)}function q(t,s){if(t==="input"||t==="change")return b(s)}function Z(t,s){return t===s&&(t!==0||1/t===1/s)||t!==t&&s!==s}var ie=typeof Object.is=="function"?Object.is:Z;function ee(t,s){if(ie(t,s))return!0;if(typeof t!="object"||t===null||typeof s!="object"||s===null)return!1;var o=Object.keys(t),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!De.call(s,f)||!ie(t[f],s[f]))return!1}return!0}function Ee(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qe(t,s){var o=Ee(t);t=0;for(var r;o;){if(o.nodeType===3){if(r=t+o.textContent.length,t<=s&&r>=s)return{node:o,offset:s-t};t=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ee(o)}}function it(t,s){return t&&s?t===s?!0:t&&t.nodeType===3?!1:s&&s.nodeType===3?it(t,s.parentNode):"contains"in t?t.contains(s):t.compareDocumentPosition?!!(t.compareDocumentPosition(s)&16):!1:!1}function dt(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var s=Qs(t.document);s instanceof t.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)t=s.contentWindow;else break;s=Qs(t.document)}return s}function Bt(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s&&(s==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||s==="textarea"||t.contentEditable==="true")}var yt=Es&&"documentMode"in document&&11>=document.documentMode,jt=null,Cn=null,Xt=null,cn=!1;function On(t,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;cn||jt==null||jt!==Qs(r)||(r=jt,"selectionStart"in r&&Bt(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xt&&ee(Xt,r)||(Xt=r,r=Iu(Cn,"onSelect"),0<r.length&&(s=new Wo("onSelect","select",null,s,o),t.push({event:s,listeners:r}),s.target=jt)))}function zn(t,s){var o={};return o[t.toLowerCase()]=s.toLowerCase(),o["Webkit"+t]="webkit"+s,o["Moz"+t]="moz"+s,o}var jo={animationend:zn("Animation","AnimationEnd"),animationiteration:zn("Animation","AnimationIteration"),animationstart:zn("Animation","AnimationStart"),transitionrun:zn("Transition","TransitionRun"),transitionstart:zn("Transition","TransitionStart"),transitioncancel:zn("Transition","TransitionCancel"),transitionend:zn("Transition","TransitionEnd")},Lo={},hi={};Es&&(hi=document.createElement("div").style,"AnimationEvent"in window||(delete jo.animationend.animation,delete jo.animationiteration.animation,delete jo.animationstart.animation),"TransitionEvent"in window||delete jo.transitionend.transition);function Yn(t){if(Lo[t])return Lo[t];if(!jo[t])return t;var s=jo[t],o;for(o in s)if(s.hasOwnProperty(o)&&o in hi)return Lo[t]=s[o];return t}var mi=Yn("animationend"),Ai=Yn("animationiteration"),_r=Yn("animationstart"),Wr=Yn("transitionrun"),Fr=Yn("transitionstart"),Xr=Yn("transitioncancel"),Ul=Yn("transitionend"),Vl=new Map,Gr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gr.push("scrollEnd");function pi(t,s){Vl.set(t,s),hs(s,[t])}var gr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ni=[],ba=0,qr=0;function yr(){for(var t=ba,s=qr=ba=0;s<t;){var o=ni[s];ni[s++]=null;var r=ni[s];ni[s++]=null;var f=ni[s];ni[s++]=null;var m=ni[s];if(ni[s++]=null,r!==null&&f!==null){var S=r.pending;S===null?f.next=f:(f.next=S.next,S.next=f),r.pending=f}m!==0&&Yl(o,f,m)}}function xr(t,s,o,r){ni[ba++]=t,ni[ba++]=s,ni[ba++]=o,ni[ba++]=r,qr|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Kr(t,s,o,r){return xr(t,s,o,r),br(t)}function ua(t,s){return xr(t,null,null,s),br(t)}function Yl(t,s,o){t.lanes|=o;var r=t.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=t.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&s!==null&&(f=31-ye(o),t=m.hiddenUpdates,r=t[f],r===null?t[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function br(t){if(50<fc)throw fc=0,mh=null,Error(a(185));for(var s=t.return;s!==null;)t=s,s=t.return;return t.tag===3?t.stateNode:null}var un={};function us(t,s,o,r){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ns(t,s,o,r){return new us(t,s,o,r)}function Ni(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _i(t,s){var o=t.alternate;return o===null?(o=ns(t.tag,s,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=s,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&65011712,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,s=t.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o.refCleanup=t.refCleanup,o}function Fo(t,s){t.flags&=65011714;var o=t.alternate;return o===null?(t.childLanes=0,t.lanes=s,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=o.childLanes,t.lanes=o.lanes,t.child=o.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=o.memoizedProps,t.memoizedState=o.memoizedState,t.updateQueue=o.updateQueue,t.type=o.type,s=o.dependencies,t.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),t}function xs(t,s,o,r,f,m){var S=0;if(r=t,typeof t=="function")Ni(t)&&(S=1);else if(typeof t=="string")S=Nv(t,o,be.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case le:return t=ns(31,o,s,f),t.elementType=le,t.lanes=m,t;case A:return vr(o.children,f,m,s);case T:S=8,f|=24;break;case R:return t=ns(12,o,s,f|2),t.elementType=R,t.lanes=m,t;case F:return t=ns(13,o,s,f),t.elementType=F,t.lanes=m,t;case Y:return t=ns(19,o,s,f),t.elementType=Y,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:S=10;break e;case P:S=9;break e;case D:S=11;break e;case V:S=14;break e;case X:S=16,r=null;break e}S=29,o=Error(a(130,t===null?"null":typeof t,"")),r=null}return s=ns(S,o,s,f),s.elementType=t,s.type=r,s.lanes=m,s}function vr(t,s,o,r){return t=ns(7,t,r,s),t.lanes=o,t}function rf(t,s,o){return t=ns(6,t,null,s),t.lanes=o,t}function u_(t){var s=ns(18,null,null,0);return s.stateNode=t,s}function lf(t,s,o){return s=ns(4,t.children!==null?t.children:[],t.key,s),s.lanes=o,s.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},s}var d_=new WeakMap;function Ui(t,s){if(typeof t=="object"&&t!==null){var o=d_.get(t);return o!==void 0?o:(s={value:t,source:s,stack:K(s)},d_.set(t,s),s)}return{value:t,source:s,stack:K(s)}}var Qr=[],Zr=0,su=null,Wl=0,Vi=[],Yi=0,Pa=null,da=1,fa="";function va(t,s){Qr[Zr++]=Wl,Qr[Zr++]=su,su=t,Wl=s}function f_(t,s,o){Vi[Yi++]=da,Vi[Yi++]=fa,Vi[Yi++]=Pa,Pa=t;var r=da;t=fa;var f=32-ye(r)-1;r&=~(1<<f),o+=1;var m=32-ye(s)+f;if(30<m){var S=f-f%5;m=(r&(1<<S)-1).toString(32),r>>=S,f-=S,da=1<<32-ye(s)+f|o<<f|r,fa=m+t}else da=1<<m|o<<f|r,fa=t}function cf(t){t.return!==null&&(va(t,1),f_(t,1,0))}function uf(t){for(;t===su;)su=Qr[--Zr],Qr[Zr]=null,Wl=Qr[--Zr],Qr[Zr]=null;for(;t===Pa;)Pa=Vi[--Yi],Vi[Yi]=null,fa=Vi[--Yi],Vi[Yi]=null,da=Vi[--Yi],Vi[Yi]=null}function h_(t,s){Vi[Yi++]=da,Vi[Yi++]=fa,Vi[Yi++]=Pa,da=s.id,fa=s.overflow,Pa=t}var Oo=null,bs=null,Dn=!1,Ha=null,Wi=!1,df=Error(a(519));function Ua(t){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fl(Ui(s,t)),df}function m_(t){var s=t.stateNode,o=t.type,r=t.memoizedProps;switch(s[zt]=t,s[tn]=r,o){case"dialog":Tn("cancel",s),Tn("close",s);break;case"iframe":case"object":case"embed":Tn("load",s);break;case"video":case"audio":for(o=0;o<mc.length;o++)Tn(mc[o],s);break;case"source":Tn("error",s);break;case"img":case"image":case"link":Tn("error",s),Tn("load",s);break;case"details":Tn("toggle",s);break;case"input":Tn("invalid",s),wn(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Tn("invalid",s);break;case"textarea":Tn("invalid",s),Ci(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||N0(s.textContent,o)?(r.popover!=null&&(Tn("beforetoggle",s),Tn("toggle",s)),r.onScroll!=null&&Tn("scroll",s),r.onScrollEnd!=null&&Tn("scrollend",s),r.onClick!=null&&(s.onclick=ps),s=!0):s=!1,s||Ua(t,!0)}function p_(t){for(Oo=t.return;Oo;)switch(Oo.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Oo=Oo.return}}function Jr(t){if(t!==Oo)return!1;if(!Dn)return p_(t),Dn=!0,!1;var s=t.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=t.type,o=!(o!=="form"&&o!=="button")||Th(t.type,t.memoizedProps)),o=!o),o&&bs&&Ua(t),p_(t),s===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));bs=P0(t)}else if(s===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));bs=P0(t)}else s===27?(s=bs,nr(t.type)?(t=Bh,Bh=null,bs=t):bs=s):bs=Oo?Xi(t.stateNode.nextSibling):null;return!0}function wr(){bs=Oo=null,Dn=!1}function ff(){var t=Ha;return t!==null&&(bi===null?bi=t:bi.push.apply(bi,t),Ha=null),t}function Fl(t){Ha===null?Ha=[t]:Ha.push(t)}var hf=z(null),Sr=null,wa=null;function Va(t,s,o){Q(hf,s._currentValue),s._currentValue=o}function Sa(t){t._currentValue=hf.current,ae(hf)}function mf(t,s,o){for(;t!==null;){var r=t.alternate;if((t.childLanes&s)!==s?(t.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),t===o)break;t=t.return}}function pf(t,s,o,r){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var S=f.child;m=m.firstContext;e:for(;m!==null;){var B=m;m=f;for(var G=0;G<s.length;G++)if(B.context===s[G]){m.lanes|=o,B=m.alternate,B!==null&&(B.lanes|=o),mf(m.return,o,t),r||(S=null);break e}m=B.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(a(341));S.lanes|=o,m=S.alternate,m!==null&&(m.lanes|=o),mf(S,o,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function el(t,s,o,r){t=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var B=f.type;ie(f.pendingProps.value,S.value)||(t!==null?t.push(B):t=[B])}}else if(f===Le.current){if(S=f.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(xc):t=[xc])}f=f.return}t!==null&&pf(s,t,o,r),s.flags|=262144}function ou(t){for(t=t.firstContext;t!==null;){if(!ie(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Cr(t){Sr=t,wa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function zo(t){return __(Sr,t)}function iu(t,s){return Sr===null&&Cr(t),__(t,s)}function __(t,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},wa===null){if(t===null)throw Error(a(308));wa=s,t.dependencies={lanes:0,firstContext:s},t.flags|=524288}else wa=wa.next=s;return o}var M2=typeof AbortController<"u"?AbortController:function(){var t=[],s=this.signal={aborted:!1,addEventListener:function(o,r){t.push(r)}};this.abort=function(){s.aborted=!0,t.forEach(function(o){return o()})}},E2=e.unstable_scheduleCallback,T2=e.unstable_NormalPriority,no={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _f(){return{controller:new M2,data:new Map,refCount:0}}function Xl(t){t.refCount--,t.refCount===0&&E2(T2,function(){t.controller.abort()})}var Gl=null,gf=0,tl=0,nl=null;function A2(t,s){if(Gl===null){var o=Gl=[];gf=0,tl=bh(),nl={status:"pending",value:void 0,then:function(r){o.push(r)}}}return gf++,s.then(g_,g_),s}function g_(){if(--gf===0&&Gl!==null){nl!==null&&(nl.status="fulfilled");var t=Gl;Gl=null,tl=0,nl=null;for(var s=0;s<t.length;s++)(0,t[s])()}}function N2(t,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return t.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var y_=O.S;O.S=function(t,s){t0=xt(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&A2(t,s),y_!==null&&y_(t,s)};var kr=z(null);function yf(){var t=kr.current;return t!==null?t:ds.pooledCache}function au(t,s){s===null?Q(kr,kr.current):Q(kr,s.pool)}function x_(){var t=yf();return t===null?null:{parent:no._currentValue,pool:t}}var sl=Error(a(460)),xf=Error(a(474)),ru=Error(a(542)),lu={then:function(){}};function b_(t){return t=t.status,t==="fulfilled"||t==="rejected"}function v_(t,s,o){switch(o=t[o],o===void 0?t.push(s):o!==s&&(s.then(ps,ps),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,S_(t),t;default:if(typeof s.status=="string")s.then(ps,ps);else{if(t=ds,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=s,t.status="pending",t.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,S_(t),t}throw Mr=s,sl}}function jr(t){try{var s=t._init;return s(t._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Mr=o,sl):o}}var Mr=null;function w_(){if(Mr===null)throw Error(a(459));var t=Mr;return Mr=null,t}function S_(t){if(t===sl||t===ru)throw Error(a(483))}var ol=null,ql=0;function cu(t){var s=ql;return ql+=1,ol===null&&(ol=[]),v_(ol,t,s)}function Kl(t,s){s=s.props.ref,t.ref=s!==void 0?s:null}function uu(t,s){throw s.$$typeof===w?Error(a(525)):(t=Object.prototype.toString.call(s),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":t)))}function C_(t){function s(re,te){if(t){var _e=re.deletions;_e===null?(re.deletions=[te],re.flags|=16):_e.push(te)}}function o(re,te){if(!t)return null;for(;te!==null;)s(re,te),te=te.sibling;return null}function r(re){for(var te=new Map;re!==null;)re.key!==null?te.set(re.key,re):te.set(re.index,re),re=re.sibling;return te}function f(re,te){return re=_i(re,te),re.index=0,re.sibling=null,re}function m(re,te,_e){return re.index=_e,t?(_e=re.alternate,_e!==null?(_e=_e.index,_e<te?(re.flags|=67108866,te):_e):(re.flags|=67108866,te)):(re.flags|=1048576,te)}function S(re){return t&&re.alternate===null&&(re.flags|=67108866),re}function B(re,te,_e,$e){return te===null||te.tag!==6?(te=rf(_e,re.mode,$e),te.return=re,te):(te=f(te,_e),te.return=re,te)}function G(re,te,_e,$e){var Yt=_e.type;return Yt===A?Be(re,te,_e.props.children,$e,_e.key):te!==null&&(te.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===X&&jr(Yt)===te.type)?(te=f(te,_e.props),Kl(te,_e),te.return=re,te):(te=xs(_e.type,_e.key,_e.props,null,re.mode,$e),Kl(te,_e),te.return=re,te)}function ge(re,te,_e,$e){return te===null||te.tag!==4||te.stateNode.containerInfo!==_e.containerInfo||te.stateNode.implementation!==_e.implementation?(te=lf(_e,re.mode,$e),te.return=re,te):(te=f(te,_e.children||[]),te.return=re,te)}function Be(re,te,_e,$e,Yt){return te===null||te.tag!==7?(te=vr(_e,re.mode,$e,Yt),te.return=re,te):(te=f(te,_e),te.return=re,te)}function He(re,te,_e){if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return te=rf(""+te,re.mode,_e),te.return=re,te;if(typeof te=="object"&&te!==null){switch(te.$$typeof){case C:return _e=xs(te.type,te.key,te.props,null,re.mode,_e),Kl(_e,te),_e.return=re,_e;case j:return te=lf(te,re.mode,_e),te.return=re,te;case X:return te=jr(te),He(re,te,_e)}if(de(te)||Ne(te))return te=vr(te,re.mode,_e,null),te.return=re,te;if(typeof te.then=="function")return He(re,cu(te),_e);if(te.$$typeof===L)return He(re,iu(re,te),_e);uu(re,te)}return null}function ve(re,te,_e,$e){var Yt=te!==null?te.key:null;if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Yt!==null?null:B(re,te,""+_e,$e);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case C:return _e.key===Yt?G(re,te,_e,$e):null;case j:return _e.key===Yt?ge(re,te,_e,$e):null;case X:return _e=jr(_e),ve(re,te,_e,$e)}if(de(_e)||Ne(_e))return Yt!==null?null:Be(re,te,_e,$e,null);if(typeof _e.then=="function")return ve(re,te,cu(_e),$e);if(_e.$$typeof===L)return ve(re,te,iu(re,_e),$e);uu(re,_e)}return null}function ke(re,te,_e,$e,Yt){if(typeof $e=="string"&&$e!==""||typeof $e=="number"||typeof $e=="bigint")return re=re.get(_e)||null,B(te,re,""+$e,Yt);if(typeof $e=="object"&&$e!==null){switch($e.$$typeof){case C:return re=re.get($e.key===null?_e:$e.key)||null,G(te,re,$e,Yt);case j:return re=re.get($e.key===null?_e:$e.key)||null,ge(te,re,$e,Yt);case X:return $e=jr($e),ke(re,te,_e,$e,Yt)}if(de($e)||Ne($e))return re=re.get(_e)||null,Be(te,re,$e,Yt,null);if(typeof $e.then=="function")return ke(re,te,_e,cu($e),Yt);if($e.$$typeof===L)return ke(re,te,_e,iu(te,$e),Yt);uu(te,$e)}return null}function Dt(re,te,_e,$e){for(var Yt=null,Pn=null,It=te,gn=te=0,Nn=null;It!==null&&gn<_e.length;gn++){It.index>gn?(Nn=It,It=null):Nn=It.sibling;var Hn=ve(re,It,_e[gn],$e);if(Hn===null){It===null&&(It=Nn);break}t&&It&&Hn.alternate===null&&s(re,It),te=m(Hn,te,gn),Pn===null?Yt=Hn:Pn.sibling=Hn,Pn=Hn,It=Nn}if(gn===_e.length)return o(re,It),Dn&&va(re,gn),Yt;if(It===null){for(;gn<_e.length;gn++)It=He(re,_e[gn],$e),It!==null&&(te=m(It,te,gn),Pn===null?Yt=It:Pn.sibling=It,Pn=It);return Dn&&va(re,gn),Yt}for(It=r(It);gn<_e.length;gn++)Nn=ke(It,re,gn,_e[gn],$e),Nn!==null&&(t&&Nn.alternate!==null&&It.delete(Nn.key===null?gn:Nn.key),te=m(Nn,te,gn),Pn===null?Yt=Nn:Pn.sibling=Nn,Pn=Nn);return t&&It.forEach(function(rr){return s(re,rr)}),Dn&&va(re,gn),Yt}function Gt(re,te,_e,$e){if(_e==null)throw Error(a(151));for(var Yt=null,Pn=null,It=te,gn=te=0,Nn=null,Hn=_e.next();It!==null&&!Hn.done;gn++,Hn=_e.next()){It.index>gn?(Nn=It,It=null):Nn=It.sibling;var rr=ve(re,It,Hn.value,$e);if(rr===null){It===null&&(It=Nn);break}t&&It&&rr.alternate===null&&s(re,It),te=m(rr,te,gn),Pn===null?Yt=rr:Pn.sibling=rr,Pn=rr,It=Nn}if(Hn.done)return o(re,It),Dn&&va(re,gn),Yt;if(It===null){for(;!Hn.done;gn++,Hn=_e.next())Hn=He(re,Hn.value,$e),Hn!==null&&(te=m(Hn,te,gn),Pn===null?Yt=Hn:Pn.sibling=Hn,Pn=Hn);return Dn&&va(re,gn),Yt}for(It=r(It);!Hn.done;gn++,Hn=_e.next())Hn=ke(It,re,gn,Hn.value,$e),Hn!==null&&(t&&Hn.alternate!==null&&It.delete(Hn.key===null?gn:Hn.key),te=m(Hn,te,gn),Pn===null?Yt=Hn:Pn.sibling=Hn,Pn=Hn);return t&&It.forEach(function(Uv){return s(re,Uv)}),Dn&&va(re,gn),Yt}function is(re,te,_e,$e){if(typeof _e=="object"&&_e!==null&&_e.type===A&&_e.key===null&&(_e=_e.props.children),typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case C:e:{for(var Yt=_e.key;te!==null;){if(te.key===Yt){if(Yt=_e.type,Yt===A){if(te.tag===7){o(re,te.sibling),$e=f(te,_e.props.children),$e.return=re,re=$e;break e}}else if(te.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===X&&jr(Yt)===te.type){o(re,te.sibling),$e=f(te,_e.props),Kl($e,_e),$e.return=re,re=$e;break e}o(re,te);break}else s(re,te);te=te.sibling}_e.type===A?($e=vr(_e.props.children,re.mode,$e,_e.key),$e.return=re,re=$e):($e=xs(_e.type,_e.key,_e.props,null,re.mode,$e),Kl($e,_e),$e.return=re,re=$e)}return S(re);case j:e:{for(Yt=_e.key;te!==null;){if(te.key===Yt)if(te.tag===4&&te.stateNode.containerInfo===_e.containerInfo&&te.stateNode.implementation===_e.implementation){o(re,te.sibling),$e=f(te,_e.children||[]),$e.return=re,re=$e;break e}else{o(re,te);break}else s(re,te);te=te.sibling}$e=lf(_e,re.mode,$e),$e.return=re,re=$e}return S(re);case X:return _e=jr(_e),is(re,te,_e,$e)}if(de(_e))return Dt(re,te,_e,$e);if(Ne(_e)){if(Yt=Ne(_e),typeof Yt!="function")throw Error(a(150));return _e=Yt.call(_e),Gt(re,te,_e,$e)}if(typeof _e.then=="function")return is(re,te,cu(_e),$e);if(_e.$$typeof===L)return is(re,te,iu(re,_e),$e);uu(re,_e)}return typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint"?(_e=""+_e,te!==null&&te.tag===6?(o(re,te.sibling),$e=f(te,_e),$e.return=re,re=$e):(o(re,te),$e=rf(_e,re.mode,$e),$e.return=re,re=$e),S(re)):o(re,te)}return function(re,te,_e,$e){try{ql=0;var Yt=is(re,te,_e,$e);return ol=null,Yt}catch(It){if(It===sl||It===ru)throw It;var Pn=ns(29,It,null,re.mode);return Pn.lanes=$e,Pn.return=re,Pn}finally{}}}var Er=C_(!0),k_=C_(!1),Ya=!1;function bf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vf(t,s){t=t.updateQueue,s.updateQueue===t&&(s.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Wa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Fa(t,s,o){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Wn&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=br(t),Yl(t,null,o),s}return xr(t,r,s,o),br(t)}function Ql(t,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=t.pendingLanes,o|=r,s.lanes=o,Ot(t,o)}}function wf(t,s){var o=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var S={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=S:m=m.next=S,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=s:t.next=s,o.lastBaseUpdate=s}var Sf=!1;function Zl(){if(Sf){var t=nl;if(t!==null)throw t}}function Jl(t,s,o,r){Sf=!1;var f=t.updateQueue;Ya=!1;var m=f.firstBaseUpdate,S=f.lastBaseUpdate,B=f.shared.pending;if(B!==null){f.shared.pending=null;var G=B,ge=G.next;G.next=null,S===null?m=ge:S.next=ge,S=G;var Be=t.alternate;Be!==null&&(Be=Be.updateQueue,B=Be.lastBaseUpdate,B!==S&&(B===null?Be.firstBaseUpdate=ge:B.next=ge,Be.lastBaseUpdate=G))}if(m!==null){var He=f.baseState;S=0,Be=ge=G=null,B=m;do{var ve=B.lane&-536870913,ke=ve!==B.lane;if(ke?(An&ve)===ve:(r&ve)===ve){ve!==0&&ve===tl&&(Sf=!0),Be!==null&&(Be=Be.next={lane:0,tag:B.tag,payload:B.payload,callback:null,next:null});e:{var Dt=t,Gt=B;ve=s;var is=o;switch(Gt.tag){case 1:if(Dt=Gt.payload,typeof Dt=="function"){He=Dt.call(is,He,ve);break e}He=Dt;break e;case 3:Dt.flags=Dt.flags&-65537|128;case 0:if(Dt=Gt.payload,ve=typeof Dt=="function"?Dt.call(is,He,ve):Dt,ve==null)break e;He=x({},He,ve);break e;case 2:Ya=!0}}ve=B.callback,ve!==null&&(t.flags|=64,ke&&(t.flags|=8192),ke=f.callbacks,ke===null?f.callbacks=[ve]:ke.push(ve))}else ke={lane:ve,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Be===null?(ge=Be=ke,G=He):Be=Be.next=ke,S|=ve;if(B=B.next,B===null){if(B=f.shared.pending,B===null)break;ke=B,B=ke.next,ke.next=null,f.lastBaseUpdate=ke,f.shared.pending=null}}while(!0);Be===null&&(G=He),f.baseState=G,f.firstBaseUpdate=ge,f.lastBaseUpdate=Be,m===null&&(f.shared.lanes=0),Qa|=S,t.lanes=S,t.memoizedState=He}}function j_(t,s){if(typeof t!="function")throw Error(a(191,t));t.call(s)}function M_(t,s){var o=t.callbacks;if(o!==null)for(t.callbacks=null,t=0;t<o.length;t++)j_(o[t],s)}var il=z(null),du=z(0);function E_(t,s){t=Da,Q(du,t),Q(il,s),Da=t|s.baseLanes}function Cf(){Q(du,Da),Q(il,il.current)}function kf(){Da=du.current,ae(il),ae(du)}var Di=z(null),Fi=null;function Xa(t){var s=t.alternate;Q(Xs,Xs.current&1),Q(Di,t),Fi===null&&(s===null||il.current!==null||s.memoizedState!==null)&&(Fi=t)}function jf(t){Q(Xs,Xs.current),Q(Di,t),Fi===null&&(Fi=t)}function T_(t){t.tag===22?(Q(Xs,Xs.current),Q(Di,t),Fi===null&&(Fi=t)):Ga()}function Ga(){Q(Xs,Xs.current),Q(Di,Di.current)}function Ri(t){ae(Di),Fi===t&&(Fi=null),ae(Xs)}var Xs=z(0);function fu(t){for(var s=t;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Dh(o)||Rh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Ca=0,hn=null,ss=null,so=null,hu=!1,al=!1,Tr=!1,mu=0,ec=0,rl=null,D2=0;function Ls(){throw Error(a(321))}function Mf(t,s){if(s===null)return!1;for(var o=0;o<s.length&&o<t.length;o++)if(!ie(t[o],s[o]))return!1;return!0}function Ef(t,s,o,r,f,m){return Ca=m,hn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,O.H=t===null||t.memoizedState===null?fg:Vf,Tr=!1,m=o(r,f),Tr=!1,al&&(m=N_(s,o,r,f)),A_(t),m}function A_(t){O.H=sc;var s=ss!==null&&ss.next!==null;if(Ca=0,so=ss=hn=null,hu=!1,ec=0,rl=null,s)throw Error(a(300));t===null||oo||(t=t.dependencies,t!==null&&ou(t)&&(oo=!0))}function N_(t,s,o,r){hn=t;var f=0;do{if(al&&(rl=null),ec=0,al=!1,25<=f)throw Error(a(301));if(f+=1,so=ss=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}O.H=hg,m=s(o,r)}while(al);return m}function R2(){var t=O.H,s=t.useState()[0];return s=typeof s.then=="function"?tc(s):s,t=t.useState()[0],(ss!==null?ss.memoizedState:null)!==t&&(hn.flags|=1024),s}function Tf(){var t=mu!==0;return mu=0,t}function Af(t,s,o){s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~o}function Nf(t){if(hu){for(t=t.memoizedState;t!==null;){var s=t.queue;s!==null&&(s.pending=null),t=t.next}hu=!1}Ca=0,so=ss=hn=null,al=!1,ec=mu=0,rl=null}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return so===null?hn.memoizedState=so=t:so=so.next=t,so}function Gs(){if(ss===null){var t=hn.alternate;t=t!==null?t.memoizedState:null}else t=ss.next;var s=so===null?hn.memoizedState:so.next;if(s!==null)so=s,ss=t;else{if(t===null)throw hn.alternate===null?Error(a(467)):Error(a(310));ss=t,t={memoizedState:ss.memoizedState,baseState:ss.baseState,baseQueue:ss.baseQueue,queue:ss.queue,next:null},so===null?hn.memoizedState=so=t:so=so.next=t}return so}function pu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tc(t){var s=ec;return ec+=1,rl===null&&(rl=[]),t=v_(rl,t,s),s=hn,(so===null?s.memoizedState:so.next)===null&&(s=s.alternate,O.H=s===null||s.memoizedState===null?fg:Vf),t}function _u(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return tc(t);if(t.$$typeof===L)return zo(t)}throw Error(a(438,String(t)))}function Df(t){var s=null,o=hn.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=hn.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=pu(),hn.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(t),r=0;r<t;r++)o[r]=ue;return s.index++,o}function ka(t,s){return typeof s=="function"?s(t):s}function gu(t){var s=Gs();return Rf(s,ss,t)}function Rf(t,s,o){var r=t.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=t.baseQueue,m=r.pending;if(m!==null){if(f!==null){var S=f.next;f.next=m.next,m.next=S}s.baseQueue=f=m,r.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{s=f.next;var B=S=null,G=null,ge=s,Be=!1;do{var He=ge.lane&-536870913;if(He!==ge.lane?(An&He)===He:(Ca&He)===He){var ve=ge.revertLane;if(ve===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null}),He===tl&&(Be=!0);else if((Ca&ve)===ve){ge=ge.next,ve===tl&&(Be=!0);continue}else He={lane:0,revertLane:ge.revertLane,gesture:null,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null},G===null?(B=G=He,S=m):G=G.next=He,hn.lanes|=ve,Qa|=ve;He=ge.action,Tr&&o(m,He),m=ge.hasEagerState?ge.eagerState:o(m,He)}else ve={lane:He,revertLane:ge.revertLane,gesture:ge.gesture,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null},G===null?(B=G=ve,S=m):G=G.next=ve,hn.lanes|=He,Qa|=He;ge=ge.next}while(ge!==null&&ge!==s);if(G===null?S=m:G.next=B,!ie(m,t.memoizedState)&&(oo=!0,Be&&(o=nl,o!==null)))throw o;t.memoizedState=m,t.baseState=S,t.baseQueue=G,r.lastRenderedState=m}return f===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Bf(t){var s=Gs(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=t;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var S=f=f.next;do m=t(m,S.action),S=S.next;while(S!==f);ie(m,s.memoizedState)||(oo=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function D_(t,s,o){var r=hn,f=Gs(),m=Dn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var S=!ie((ss||f).memoizedState,o);if(S&&(f.memoizedState=o,oo=!0),f=f.queue,zf(L_.bind(null,r,f,t),[t]),f.getSnapshot!==s||S||so!==null&&so.memoizedState.tag&1){if(r.flags|=2048,ll(9,{destroy:void 0},B_.bind(null,r,f,o,s),null),ds===null)throw Error(a(349));m||(Ca&127)!==0||R_(r,s,o)}return o}function R_(t,s,o){t.flags|=16384,t={getSnapshot:s,value:o},s=hn.updateQueue,s===null?(s=pu(),hn.updateQueue=s,s.stores=[t]):(o=s.stores,o===null?s.stores=[t]:o.push(t))}function B_(t,s,o,r){s.value=o,s.getSnapshot=r,O_(s)&&z_(t)}function L_(t,s,o){return o(function(){O_(s)&&z_(t)})}function O_(t){var s=t.getSnapshot;t=t.value;try{var o=s();return!ie(t,o)}catch{return!0}}function z_(t){var s=ua(t,2);s!==null&&vi(s,t,2)}function Lf(t){var s=si();if(typeof t=="function"){var o=t;if(t=o(),Tr){Ae(!0);try{o()}finally{Ae(!1)}}}return s.memoizedState=s.baseState=t,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:t},s}function $_(t,s,o,r){return t.baseState=o,Rf(t,ss,typeof r=="function"?r:ka)}function B2(t,s,o,r,f){if(bu(t))throw Error(a(485));if(t=s.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};O.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,I_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function I_(t,s){var o=s.action,r=s.payload,f=t.state;if(s.isTransition){var m=O.T,S={};O.T=S;try{var B=o(f,r),G=O.S;G!==null&&G(S,B),P_(t,s,B)}catch(ge){Of(t,s,ge)}finally{m!==null&&S.types!==null&&(m.types=S.types),O.T=m}}else try{m=o(f,r),P_(t,s,m)}catch(ge){Of(t,s,ge)}}function P_(t,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){H_(t,s,r)},function(r){return Of(t,s,r)}):H_(t,s,o)}function H_(t,s,o){s.status="fulfilled",s.value=o,U_(s),t.state=o,s=t.pending,s!==null&&(o=s.next,o===s?t.pending=null:(o=o.next,s.next=o,I_(t,o)))}function Of(t,s,o){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,U_(s),s=s.next;while(s!==r)}t.action=null}function U_(t){t=t.listeners;for(var s=0;s<t.length;s++)(0,t[s])()}function V_(t,s){return s}function Y_(t,s){if(Dn){var o=ds.formState;if(o!==null){e:{var r=hn;if(Dn){if(bs){t:{for(var f=bs,m=Wi;f.nodeType!==8;){if(!m){f=null;break t}if(f=Xi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){bs=Xi(f.nextSibling),r=f.data==="F!";break e}}Ua(r)}r=!1}r&&(s=o[0])}}return o=si(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:V_,lastRenderedState:s},o.queue=r,o=cg.bind(null,hn,r),r.dispatch=o,r=Lf(!1),m=Uf.bind(null,hn,!1,r.queue),r=si(),f={state:s,dispatch:null,action:t,pending:null},r.queue=f,o=B2.bind(null,hn,f,m,o),f.dispatch=o,r.memoizedState=t,[s,o,!1]}function W_(t){var s=Gs();return F_(s,ss,t)}function F_(t,s,o){if(s=Rf(t,s,V_)[0],t=gu(ka)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=tc(s)}catch(S){throw S===sl?ru:S}else r=s;s=Gs();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(hn.flags|=2048,ll(9,{destroy:void 0},L2.bind(null,f,o),null)),[r,m,t]}function L2(t,s){t.action=s}function X_(t){var s=Gs(),o=ss;if(o!==null)return F_(s,o,t);Gs(),s=s.memoizedState,o=Gs();var r=o.queue.dispatch;return o.memoizedState=t,[s,r,!1]}function ll(t,s,o,r){return t={tag:t,create:o,deps:r,inst:s,next:null},s=hn.updateQueue,s===null&&(s=pu(),hn.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=t.next=t:(r=o.next,o.next=t,t.next=r,s.lastEffect=t),t}function G_(){return Gs().memoizedState}function yu(t,s,o,r){var f=si();hn.flags|=t,f.memoizedState=ll(1|s,{destroy:void 0},o,r===void 0?null:r)}function xu(t,s,o,r){var f=Gs();r=r===void 0?null:r;var m=f.memoizedState.inst;ss!==null&&r!==null&&Mf(r,ss.memoizedState.deps)?f.memoizedState=ll(s,m,o,r):(hn.flags|=t,f.memoizedState=ll(1|s,m,o,r))}function q_(t,s){yu(8390656,8,t,s)}function zf(t,s){xu(2048,8,t,s)}function O2(t){hn.flags|=4;var s=hn.updateQueue;if(s===null)s=pu(),hn.updateQueue=s,s.events=[t];else{var o=s.events;o===null?s.events=[t]:o.push(t)}}function K_(t){var s=Gs().memoizedState;return O2({ref:s,nextImpl:t}),function(){if((Wn&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function Q_(t,s){return xu(4,2,t,s)}function Z_(t,s){return xu(4,4,t,s)}function J_(t,s){if(typeof s=="function"){t=t();var o=s(t);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return t=t(),s.current=t,function(){s.current=null}}function eg(t,s,o){o=o!=null?o.concat([t]):null,xu(4,4,J_.bind(null,s,t),o)}function $f(){}function tg(t,s){var o=Gs();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&Mf(s,r[1])?r[0]:(o.memoizedState=[t,s],t)}function ng(t,s){var o=Gs();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&Mf(s,r[1]))return r[0];if(r=t(),Tr){Ae(!0);try{t()}finally{Ae(!1)}}return o.memoizedState=[r,s],r}function If(t,s,o){return o===void 0||(Ca&1073741824)!==0&&(An&261930)===0?t.memoizedState=s:(t.memoizedState=o,t=s0(),hn.lanes|=t,Qa|=t,o)}function sg(t,s,o,r){return ie(o,s)?o:il.current!==null?(t=If(t,o,r),ie(t,s)||(oo=!0),t):(Ca&42)===0||(Ca&1073741824)!==0&&(An&261930)===0?(oo=!0,t.memoizedState=o):(t=s0(),hn.lanes|=t,Qa|=t,s)}function og(t,s,o,r,f){var m=se.p;se.p=m!==0&&8>m?m:8;var S=O.T,B={};O.T=B,Uf(t,!1,s,o);try{var G=f(),ge=O.S;if(ge!==null&&ge(B,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var Be=N2(G,r);nc(t,s,Be,Oi(t))}else nc(t,s,r,Oi(t))}catch(He){nc(t,s,{then:function(){},status:"rejected",reason:He},Oi())}finally{se.p=m,S!==null&&B.types!==null&&(S.types=B.types),O.T=S}}function z2(){}function Pf(t,s,o,r){if(t.tag!==5)throw Error(a(476));var f=ig(t).queue;og(t,f,s,I,o===null?z2:function(){return ag(t),o(r)})}function ig(t){var s=t.memoizedState;if(s!==null)return s;s={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:I},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:o},next:null},t.memoizedState=s,t=t.alternate,t!==null&&(t.memoizedState=s),s}function ag(t){var s=ig(t);s.next===null&&(s=t.alternate.memoizedState),nc(t,s.next.queue,{},Oi())}function Hf(){return zo(xc)}function rg(){return Gs().memoizedState}function lg(){return Gs().memoizedState}function $2(t){for(var s=t.return;s!==null;){switch(s.tag){case 24:case 3:var o=Oi();t=Wa(o);var r=Fa(s,t,o);r!==null&&(vi(r,s,o),Ql(r,s,o)),s={cache:_f()},t.payload=s;return}s=s.return}}function I2(t,s,o){var r=Oi();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},bu(t)?ug(s,o):(o=Kr(t,s,o,r),o!==null&&(vi(o,t,r),dg(o,s,r)))}function cg(t,s,o){var r=Oi();nc(t,s,o,r)}function nc(t,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(bu(t))ug(s,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var S=s.lastRenderedState,B=m(S,o);if(f.hasEagerState=!0,f.eagerState=B,ie(B,S))return xr(t,s,f,0),ds===null&&yr(),!1}catch{}finally{}if(o=Kr(t,s,f,r),o!==null)return vi(o,t,r),dg(o,s,r),!0}return!1}function Uf(t,s,o,r){if(r={lane:2,revertLane:bh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},bu(t)){if(s)throw Error(a(479))}else s=Kr(t,o,r,2),s!==null&&vi(s,t,2)}function bu(t){var s=t.alternate;return t===hn||s!==null&&s===hn}function ug(t,s){al=hu=!0;var o=t.pending;o===null?s.next=s:(s.next=o.next,o.next=s),t.pending=s}function dg(t,s,o){if((o&4194048)!==0){var r=s.lanes;r&=t.pendingLanes,o|=r,s.lanes=o,Ot(t,o)}}var sc={readContext:zo,use:_u,useCallback:Ls,useContext:Ls,useEffect:Ls,useImperativeHandle:Ls,useLayoutEffect:Ls,useInsertionEffect:Ls,useMemo:Ls,useReducer:Ls,useRef:Ls,useState:Ls,useDebugValue:Ls,useDeferredValue:Ls,useTransition:Ls,useSyncExternalStore:Ls,useId:Ls,useHostTransitionStatus:Ls,useFormState:Ls,useActionState:Ls,useOptimistic:Ls,useMemoCache:Ls,useCacheRefresh:Ls};sc.useEffectEvent=Ls;var fg={readContext:zo,use:_u,useCallback:function(t,s){return si().memoizedState=[t,s===void 0?null:s],t},useContext:zo,useEffect:q_,useImperativeHandle:function(t,s,o){o=o!=null?o.concat([t]):null,yu(4194308,4,J_.bind(null,s,t),o)},useLayoutEffect:function(t,s){return yu(4194308,4,t,s)},useInsertionEffect:function(t,s){yu(4,2,t,s)},useMemo:function(t,s){var o=si();s=s===void 0?null:s;var r=t();if(Tr){Ae(!0);try{t()}finally{Ae(!1)}}return o.memoizedState=[r,s],r},useReducer:function(t,s,o){var r=si();if(o!==void 0){var f=o(s);if(Tr){Ae(!0);try{o(s)}finally{Ae(!1)}}}else f=s;return r.memoizedState=r.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},r.queue=t,t=t.dispatch=I2.bind(null,hn,t),[r.memoizedState,t]},useRef:function(t){var s=si();return t={current:t},s.memoizedState=t},useState:function(t){t=Lf(t);var s=t.queue,o=cg.bind(null,hn,s);return s.dispatch=o,[t.memoizedState,o]},useDebugValue:$f,useDeferredValue:function(t,s){var o=si();return If(o,t,s)},useTransition:function(){var t=Lf(!1);return t=og.bind(null,hn,t.queue,!0,!1),si().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,s,o){var r=hn,f=si();if(Dn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),ds===null)throw Error(a(349));(An&127)!==0||R_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,q_(L_.bind(null,r,m,t),[t]),r.flags|=2048,ll(9,{destroy:void 0},B_.bind(null,r,m,o,s),null),o},useId:function(){var t=si(),s=ds.identifierPrefix;if(Dn){var o=fa,r=da;o=(r&~(1<<32-ye(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=mu++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=D2++,s="_"+s+"r_"+o.toString(32)+"_";return t.memoizedState=s},useHostTransitionStatus:Hf,useFormState:Y_,useActionState:Y_,useOptimistic:function(t){var s=si();s.memoizedState=s.baseState=t;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Uf.bind(null,hn,!0,o),o.dispatch=s,[t,s]},useMemoCache:Df,useCacheRefresh:function(){return si().memoizedState=$2.bind(null,hn)},useEffectEvent:function(t){var s=si(),o={impl:t};return s.memoizedState=o,function(){if((Wn&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Vf={readContext:zo,use:_u,useCallback:tg,useContext:zo,useEffect:zf,useImperativeHandle:eg,useInsertionEffect:Q_,useLayoutEffect:Z_,useMemo:ng,useReducer:gu,useRef:G_,useState:function(){return gu(ka)},useDebugValue:$f,useDeferredValue:function(t,s){var o=Gs();return sg(o,ss.memoizedState,t,s)},useTransition:function(){var t=gu(ka)[0],s=Gs().memoizedState;return[typeof t=="boolean"?t:tc(t),s]},useSyncExternalStore:D_,useId:rg,useHostTransitionStatus:Hf,useFormState:W_,useActionState:W_,useOptimistic:function(t,s){var o=Gs();return $_(o,ss,t,s)},useMemoCache:Df,useCacheRefresh:lg};Vf.useEffectEvent=K_;var hg={readContext:zo,use:_u,useCallback:tg,useContext:zo,useEffect:zf,useImperativeHandle:eg,useInsertionEffect:Q_,useLayoutEffect:Z_,useMemo:ng,useReducer:Bf,useRef:G_,useState:function(){return Bf(ka)},useDebugValue:$f,useDeferredValue:function(t,s){var o=Gs();return ss===null?If(o,t,s):sg(o,ss.memoizedState,t,s)},useTransition:function(){var t=Bf(ka)[0],s=Gs().memoizedState;return[typeof t=="boolean"?t:tc(t),s]},useSyncExternalStore:D_,useId:rg,useHostTransitionStatus:Hf,useFormState:X_,useActionState:X_,useOptimistic:function(t,s){var o=Gs();return ss!==null?$_(o,ss,t,s):(o.baseState=t,[t,o.queue.dispatch])},useMemoCache:Df,useCacheRefresh:lg};hg.useEffectEvent=K_;function Yf(t,s,o,r){s=t.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Wf={enqueueSetState:function(t,s,o){t=t._reactInternals;var r=Oi(),f=Wa(r);f.payload=s,o!=null&&(f.callback=o),s=Fa(t,f,r),s!==null&&(vi(s,t,r),Ql(s,t,r))},enqueueReplaceState:function(t,s,o){t=t._reactInternals;var r=Oi(),f=Wa(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Fa(t,f,r),s!==null&&(vi(s,t,r),Ql(s,t,r))},enqueueForceUpdate:function(t,s){t=t._reactInternals;var o=Oi(),r=Wa(o);r.tag=2,s!=null&&(r.callback=s),s=Fa(t,r,o),s!==null&&(vi(s,t,o),Ql(s,t,o))}};function mg(t,s,o,r,f,m,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,m,S):s.prototype&&s.prototype.isPureReactComponent?!ee(o,r)||!ee(f,m):!0}function pg(t,s,o,r){t=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==t&&Wf.enqueueReplaceState(s,s.state,null)}function Ar(t,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(t=t.defaultProps){o===s&&(o=x({},o));for(var f in t)o[f]===void 0&&(o[f]=t[f])}return o}function _g(t){gr(t)}function gg(t){console.error(t)}function yg(t){gr(t)}function vu(t,s){try{var o=t.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function xg(t,s,o){try{var r=t.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Ff(t,s,o){return o=Wa(o),o.tag=3,o.payload={element:null},o.callback=function(){vu(t,s)},o}function bg(t){return t=Wa(t),t.tag=3,t}function vg(t,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;t.payload=function(){return f(m)},t.callback=function(){xg(s,o,r)}}var S=o.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){xg(s,o,r),typeof f!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var B=r.stack;this.componentDidCatch(r.value,{componentStack:B!==null?B:""})})}function P2(t,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&el(s,o,f,!0),o=Di.current,o!==null){switch(o.tag){case 31:case 13:return Fi===null?Ru():o.alternate===null&&Os===0&&(Os=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===lu?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),gh(t,r,f)),!1;case 22:return o.flags|=65536,r===lu?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),gh(t,r,f)),!1}throw Error(a(435,o.tag))}return gh(t,r,f),Ru(),!1}if(Dn)return s=Di.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==df&&(t=Error(a(422),{cause:r}),Fl(Ui(t,o)))):(r!==df&&(s=Error(a(423),{cause:r}),Fl(Ui(s,o))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,r=Ui(r,o),f=Ff(t.stateNode,r,f),wf(t,f),Os!==4&&(Os=2)),!1;var m=Error(a(520),{cause:r});if(m=Ui(m,o),dc===null?dc=[m]:dc.push(m),Os!==4&&(Os=2),s===null)return!0;r=Ui(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,t=f&-f,o.lanes|=t,t=Ff(o.stateNode,r,t),wf(o,t),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Za===null||!Za.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=bg(f),vg(f,t,o,r),wf(o,f),!1}o=o.return}while(o!==null);return!1}var Xf=Error(a(461)),oo=!1;function $o(t,s,o,r){s.child=t===null?k_(s,null,o,r):Er(s,t.child,o,r)}function wg(t,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var S={};for(var B in r)B!=="ref"&&(S[B]=r[B])}else S=r;return Cr(s),r=Ef(t,s,o,S,m,f),B=Tf(),t!==null&&!oo?(Af(t,s,f),ja(t,s,f)):(Dn&&B&&cf(s),s.flags|=1,$o(t,s,r,f),s.child)}function Sg(t,s,o,r,f){if(t===null){var m=o.type;return typeof m=="function"&&!Ni(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,Cg(t,s,m,r,f)):(t=xs(o.type,null,r,s,s.mode,f),t.ref=s.ref,t.return=s,s.child=t)}if(m=t.child,!th(t,f)){var S=m.memoizedProps;if(o=o.compare,o=o!==null?o:ee,o(S,r)&&t.ref===s.ref)return ja(t,s,f)}return s.flags|=1,t=_i(m,r),t.ref=s.ref,t.return=s,s.child=t}function Cg(t,s,o,r,f){if(t!==null){var m=t.memoizedProps;if(ee(m,r)&&t.ref===s.ref)if(oo=!1,s.pendingProps=r=m,th(t,f))(t.flags&131072)!==0&&(oo=!0);else return s.lanes=t.lanes,ja(t,s,f)}return Gf(t,s,o,r,f)}function kg(t,s,o,r){var f=r.children,m=t!==null?t.memoizedState:null;if(t===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,t!==null){for(r=s.child=t.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return jg(t,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},t!==null&&au(s,m!==null?m.cachePool:null),m!==null?E_(s,m):Cf(),T_(s);else return r=s.lanes=536870912,jg(t,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(au(s,m.cachePool),E_(s,m),Ga(),s.memoizedState=null):(t!==null&&au(s,null),Cf(),Ga());return $o(t,s,f,o),s.child}function oc(t,s){return t!==null&&t.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function jg(t,s,o,r,f){var m=yf();return m=m===null?null:{parent:no._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},t!==null&&au(s,null),Cf(),T_(s),t!==null&&el(t,s,r,!0),s.childLanes=f,null}function wu(t,s){return s=Cu({mode:s.mode,children:s.children},t.mode),s.ref=t.ref,t.child=s,s.return=t,s}function Mg(t,s,o){return Er(s,t.child,null,o),t=wu(s,s.pendingProps),t.flags|=2,Ri(s),s.memoizedState=null,t}function H2(t,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,t===null){if(Dn){if(r.mode==="hidden")return t=wu(s,r),s.lanes=536870912,oc(null,t);if(jf(s),(t=bs)?(t=I0(t,Wi),t=t!==null&&t.data==="&"?t:null,t!==null&&(s.memoizedState={dehydrated:t,treeContext:Pa!==null?{id:da,overflow:fa}:null,retryLane:536870912,hydrationErrors:null},o=u_(t),o.return=s,s.child=o,Oo=s,bs=null)):t=null,t===null)throw Ua(s);return s.lanes=536870912,null}return wu(s,r)}var m=t.memoizedState;if(m!==null){var S=m.dehydrated;if(jf(s),f)if(s.flags&256)s.flags&=-257,s=Mg(t,s,o);else if(s.memoizedState!==null)s.child=t.child,s.flags|=128,s=null;else throw Error(a(558));else if(oo||el(t,s,o,!1),f=(o&t.childLanes)!==0,oo||f){if(r=ds,r!==null&&(S=St(r,o),S!==0&&S!==m.retryLane))throw m.retryLane=S,ua(t,S),vi(r,t,S),Xf;Ru(),s=Mg(t,s,o)}else t=m.treeContext,bs=Xi(S.nextSibling),Oo=s,Dn=!0,Ha=null,Wi=!1,t!==null&&h_(s,t),s=wu(s,r),s.flags|=4096;return s}return t=_i(t.child,{mode:r.mode,children:r.children}),t.ref=s.ref,s.child=t,t.return=s,t}function Su(t,s){var o=s.ref;if(o===null)t!==null&&t.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(t===null||t.ref!==o)&&(s.flags|=4194816)}}function Gf(t,s,o,r,f){return Cr(s),o=Ef(t,s,o,r,void 0,f),r=Tf(),t!==null&&!oo?(Af(t,s,f),ja(t,s,f)):(Dn&&r&&cf(s),s.flags|=1,$o(t,s,o,f),s.child)}function Eg(t,s,o,r,f,m){return Cr(s),s.updateQueue=null,o=N_(s,r,o,f),A_(t),r=Tf(),t!==null&&!oo?(Af(t,s,m),ja(t,s,m)):(Dn&&r&&cf(s),s.flags|=1,$o(t,s,o,m),s.child)}function Tg(t,s,o,r,f){if(Cr(s),s.stateNode===null){var m=un,S=o.contextType;typeof S=="object"&&S!==null&&(m=zo(S)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Wf,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},bf(s),S=o.contextType,m.context=typeof S=="object"&&S!==null?zo(S):un,m.state=s.memoizedState,S=o.getDerivedStateFromProps,typeof S=="function"&&(Yf(s,o,S,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&Wf.enqueueReplaceState(m,m.state,null),Jl(s,r,m,f),Zl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(t===null){m=s.stateNode;var B=s.memoizedProps,G=Ar(o,B);m.props=G;var ge=m.context,Be=o.contextType;S=un,typeof Be=="object"&&Be!==null&&(S=zo(Be));var He=o.getDerivedStateFromProps;Be=typeof He=="function"||typeof m.getSnapshotBeforeUpdate=="function",B=s.pendingProps!==B,Be||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(B||ge!==S)&&pg(s,m,r,S),Ya=!1;var ve=s.memoizedState;m.state=ve,Jl(s,r,m,f),Zl(),ge=s.memoizedState,B||ve!==ge||Ya?(typeof He=="function"&&(Yf(s,o,He,r),ge=s.memoizedState),(G=Ya||mg(s,o,G,r,ve,ge,S))?(Be||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=ge),m.props=r,m.state=ge,m.context=S,r=G):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,vf(t,s),S=s.memoizedProps,Be=Ar(o,S),m.props=Be,He=s.pendingProps,ve=m.context,ge=o.contextType,G=un,typeof ge=="object"&&ge!==null&&(G=zo(ge)),B=o.getDerivedStateFromProps,(ge=typeof B=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==He||ve!==G)&&pg(s,m,r,G),Ya=!1,ve=s.memoizedState,m.state=ve,Jl(s,r,m,f),Zl();var ke=s.memoizedState;S!==He||ve!==ke||Ya||t!==null&&t.dependencies!==null&&ou(t.dependencies)?(typeof B=="function"&&(Yf(s,o,B,r),ke=s.memoizedState),(Be=Ya||mg(s,o,Be,r,ve,ke,G)||t!==null&&t.dependencies!==null&&ou(t.dependencies))?(ge||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,ke,G),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,ke,G)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===t.memoizedProps&&ve===t.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ve===t.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=ke),m.props=r,m.state=ke,m.context=G,r=Be):(typeof m.componentDidUpdate!="function"||S===t.memoizedProps&&ve===t.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ve===t.memoizedState||(s.flags|=1024),r=!1)}return m=r,Su(t,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,t!==null&&r?(s.child=Er(s,t.child,null,f),s.child=Er(s,null,o,f)):$o(t,s,o,f),s.memoizedState=m.state,t=s.child):t=ja(t,s,f),t}function Ag(t,s,o,r){return wr(),s.flags|=256,$o(t,s,o,r),s.child}var qf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kf(t){return{baseLanes:t,cachePool:x_()}}function Qf(t,s,o){return t=t!==null?t.childLanes&~o:0,s&&(t|=Li),t}function Ng(t,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,S;if((S=m)||(S=t!==null&&t.memoizedState===null?!1:(Xs.current&2)!==0),S&&(f=!0,s.flags&=-129),S=(s.flags&32)!==0,s.flags&=-33,t===null){if(Dn){if(f?Xa(s):Ga(),(t=bs)?(t=I0(t,Wi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(s.memoizedState={dehydrated:t,treeContext:Pa!==null?{id:da,overflow:fa}:null,retryLane:536870912,hydrationErrors:null},o=u_(t),o.return=s,s.child=o,Oo=s,bs=null)):t=null,t===null)throw Ua(s);return Rh(t)?s.lanes=32:s.lanes=536870912,null}var B=r.children;return r=r.fallback,f?(Ga(),f=s.mode,B=Cu({mode:"hidden",children:B},f),r=vr(r,f,o,null),B.return=s,r.return=s,B.sibling=r,s.child=B,r=s.child,r.memoizedState=Kf(o),r.childLanes=Qf(t,S,o),s.memoizedState=qf,oc(null,r)):(Xa(s),Zf(s,B))}var G=t.memoizedState;if(G!==null&&(B=G.dehydrated,B!==null)){if(m)s.flags&256?(Xa(s),s.flags&=-257,s=Jf(t,s,o)):s.memoizedState!==null?(Ga(),s.child=t.child,s.flags|=128,s=null):(Ga(),B=r.fallback,f=s.mode,r=Cu({mode:"visible",children:r.children},f),B=vr(B,f,o,null),B.flags|=2,r.return=s,B.return=s,r.sibling=B,s.child=r,Er(s,t.child,null,o),r=s.child,r.memoizedState=Kf(o),r.childLanes=Qf(t,S,o),s.memoizedState=qf,s=oc(null,r));else if(Xa(s),Rh(B)){if(S=B.nextSibling&&B.nextSibling.dataset,S)var ge=S.dgst;S=ge,r=Error(a(419)),r.stack="",r.digest=S,Fl({value:r,source:null,stack:null}),s=Jf(t,s,o)}else if(oo||el(t,s,o,!1),S=(o&t.childLanes)!==0,oo||S){if(S=ds,S!==null&&(r=St(S,o),r!==0&&r!==G.retryLane))throw G.retryLane=r,ua(t,r),vi(S,t,r),Xf;Dh(B)||Ru(),s=Jf(t,s,o)}else Dh(B)?(s.flags|=192,s.child=t.child,s=null):(t=G.treeContext,bs=Xi(B.nextSibling),Oo=s,Dn=!0,Ha=null,Wi=!1,t!==null&&h_(s,t),s=Zf(s,r.children),s.flags|=4096);return s}return f?(Ga(),B=r.fallback,f=s.mode,G=t.child,ge=G.sibling,r=_i(G,{mode:"hidden",children:r.children}),r.subtreeFlags=G.subtreeFlags&65011712,ge!==null?B=_i(ge,B):(B=vr(B,f,o,null),B.flags|=2),B.return=s,r.return=s,r.sibling=B,s.child=r,oc(null,r),r=s.child,B=t.child.memoizedState,B===null?B=Kf(o):(f=B.cachePool,f!==null?(G=no._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=x_(),B={baseLanes:B.baseLanes|o,cachePool:f}),r.memoizedState=B,r.childLanes=Qf(t,S,o),s.memoizedState=qf,oc(t.child,r)):(Xa(s),o=t.child,t=o.sibling,o=_i(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,t!==null&&(S=s.deletions,S===null?(s.deletions=[t],s.flags|=16):S.push(t)),s.child=o,s.memoizedState=null,o)}function Zf(t,s){return s=Cu({mode:"visible",children:s},t.mode),s.return=t,t.child=s}function Cu(t,s){return t=ns(22,t,null,s),t.lanes=0,t}function Jf(t,s,o){return Er(s,t.child,null,o),t=Zf(s,s.pendingProps.children),t.flags|=2,s.memoizedState=null,t}function Dg(t,s,o){t.lanes|=s;var r=t.alternate;r!==null&&(r.lanes|=s),mf(t.return,s,o)}function eh(t,s,o,r,f,m){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(S.isBackwards=s,S.rendering=null,S.renderingStartTime=0,S.last=r,S.tail=o,S.tailMode=f,S.treeForkCount=m)}function Rg(t,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var S=Xs.current,B=(S&2)!==0;if(B?(S=S&1|2,s.flags|=128):S&=1,Q(Xs,S),$o(t,s,r,o),r=Dn?Wl:0,!B&&t!==null&&(t.flags&128)!==0)e:for(t=s.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dg(t,o,s);else if(t.tag===19)Dg(t,o,s);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break e;for(;t.sibling===null;){if(t.return===null||t.return===s)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)t=o.alternate,t!==null&&fu(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),eh(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(t=f.alternate,t!==null&&fu(t)===null){s.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}eh(s,!0,o,null,m,r);break;case"together":eh(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function ja(t,s,o){if(t!==null&&(s.dependencies=t.dependencies),Qa|=s.lanes,(o&s.childLanes)===0)if(t!==null){if(el(t,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(t!==null&&s.child!==t.child)throw Error(a(153));if(s.child!==null){for(t=s.child,o=_i(t,t.pendingProps),s.child=o,o.return=s;t.sibling!==null;)t=t.sibling,o=o.sibling=_i(t,t.pendingProps),o.return=s;o.sibling=null}return s.child}function th(t,s){return(t.lanes&s)!==0?!0:(t=t.dependencies,!!(t!==null&&ou(t)))}function U2(t,s,o){switch(s.tag){case 3:Ze(s,s.stateNode.containerInfo),Va(s,no,t.memoizedState.cache),wr();break;case 27:case 5:ht(s);break;case 4:Ze(s,s.stateNode.containerInfo);break;case 10:Va(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,jf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(Xa(s),s.flags|=128,null):(o&s.child.childLanes)!==0?Ng(t,s,o):(Xa(s),t=ja(t,s,o),t!==null?t.sibling:null);Xa(s);break;case 19:var f=(t.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(el(t,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return Rg(t,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Q(Xs,Xs.current),r)break;return null;case 22:return s.lanes=0,kg(t,s,o,s.pendingProps);case 24:Va(s,no,t.memoizedState.cache)}return ja(t,s,o)}function Bg(t,s,o){if(t!==null)if(t.memoizedProps!==s.pendingProps)oo=!0;else{if(!th(t,o)&&(s.flags&128)===0)return oo=!1,U2(t,s,o);oo=(t.flags&131072)!==0}else oo=!1,Dn&&(s.flags&1048576)!==0&&f_(s,Wl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(t=jr(s.elementType),s.type=t,typeof t=="function")Ni(t)?(r=Ar(t,r),s.tag=1,s=Tg(null,s,t,r,o)):(s.tag=0,s=Gf(null,s,t,r,o));else{if(t!=null){var f=t.$$typeof;if(f===D){s.tag=11,s=wg(null,s,t,r,o);break e}else if(f===V){s.tag=14,s=Sg(null,s,t,r,o);break e}}throw s=ne(t)||t,Error(a(306,s,""))}}return s;case 0:return Gf(t,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=Ar(r,s.pendingProps),Tg(t,s,r,f,o);case 3:e:{if(Ze(s,s.stateNode.containerInfo),t===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,vf(t,s),Jl(s,r,null,o);var S=s.memoizedState;if(r=S.cache,Va(s,no,r),r!==m.cache&&pf(s,[no],o,!0),Zl(),r=S.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:S.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=Ag(t,s,r,o);break e}else if(r!==f){f=Ui(Error(a(424)),s),Fl(f),s=Ag(t,s,r,o);break e}else{switch(t=s.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(bs=Xi(t.firstChild),Oo=s,Dn=!0,Ha=null,Wi=!0,o=k_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(wr(),r===f){s=ja(t,s,o);break e}$o(t,s,r,o)}s=s.child}return s;case 26:return Su(t,s),t===null?(o=W0(s.type,null,s.pendingProps,null))?s.memoizedState=o:Dn||(o=s.type,t=s.pendingProps,r=Pu(me.current).createElement(o),r[zt]=s,r[tn]=t,Io(r,o,t),yn(r),s.stateNode=r):s.memoizedState=W0(s.type,t.memoizedProps,s.pendingProps,t.memoizedState),null;case 27:return ht(s),t===null&&Dn&&(r=s.stateNode=U0(s.type,s.pendingProps,me.current),Oo=s,Wi=!0,f=bs,nr(s.type)?(Bh=f,bs=Xi(r.firstChild)):bs=f),$o(t,s,s.pendingProps.children,o),Su(t,s),t===null&&(s.flags|=4194304),s.child;case 5:return t===null&&Dn&&((f=r=bs)&&(r=yv(r,s.type,s.pendingProps,Wi),r!==null?(s.stateNode=r,Oo=s,bs=Xi(r.firstChild),Wi=!1,f=!0):f=!1),f||Ua(s)),ht(s),f=s.type,m=s.pendingProps,S=t!==null?t.memoizedProps:null,r=m.children,Th(f,m)?r=null:S!==null&&Th(f,S)&&(s.flags|=32),s.memoizedState!==null&&(f=Ef(t,s,R2,null,null,o),xc._currentValue=f),Su(t,s),$o(t,s,r,o),s.child;case 6:return t===null&&Dn&&((t=o=bs)&&(o=xv(o,s.pendingProps,Wi),o!==null?(s.stateNode=o,Oo=s,bs=null,t=!0):t=!1),t||Ua(s)),null;case 13:return Ng(t,s,o);case 4:return Ze(s,s.stateNode.containerInfo),r=s.pendingProps,t===null?s.child=Er(s,null,r,o):$o(t,s,r,o),s.child;case 11:return wg(t,s,s.type,s.pendingProps,o);case 7:return $o(t,s,s.pendingProps,o),s.child;case 8:return $o(t,s,s.pendingProps.children,o),s.child;case 12:return $o(t,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,Va(s,s.type,r.value),$o(t,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,Cr(s),f=zo(f),r=r(f),s.flags|=1,$o(t,s,r,o),s.child;case 14:return Sg(t,s,s.type,s.pendingProps,o);case 15:return Cg(t,s,s.type,s.pendingProps,o);case 19:return Rg(t,s,o);case 31:return H2(t,s,o);case 22:return kg(t,s,o,s.pendingProps);case 24:return Cr(s),r=zo(no),t===null?(f=yf(),f===null&&(f=ds,m=_f(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},bf(s),Va(s,no,f)):((t.lanes&o)!==0&&(vf(t,s),Jl(s,null,null,o),Zl()),f=t.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Va(s,no,r)):(r=m.cache,Va(s,no,r),r!==f.cache&&pf(s,[no],o,!0))),$o(t,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function Ma(t){t.flags|=4}function nh(t,s,o,r,f){if((s=(t.mode&32)!==0)&&(s=!1),s){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(r0())t.flags|=8192;else throw Mr=lu,xf}else t.flags&=-16777217}function Lg(t,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!K0(s))if(r0())t.flags|=8192;else throw Mr=lu,xf}function ku(t,s){s!==null&&(t.flags|=4),t.flags&16384&&(s=t.tag!==22?mt():536870912,t.lanes|=s,fl|=s)}function ic(t,s){if(!Dn)switch(t.tailMode){case"hidden":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function vs(t){var s=t.alternate!==null&&t.alternate.child===t.child,o=0,r=0;if(s)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=r,t.childLanes=o,s}function V2(t,s,o){var r=s.pendingProps;switch(uf(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vs(s),null;case 1:return vs(s),null;case 3:return o=s.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),Sa(no),Ve(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(Jr(s)?Ma(s):t===null||t.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,ff())),vs(s),null;case 26:var f=s.type,m=s.memoizedState;return t===null?(Ma(s),m!==null?(vs(s),Lg(s,m)):(vs(s),nh(s,f,null,r,o))):m?m!==t.memoizedState?(Ma(s),vs(s),Lg(s,m)):(vs(s),s.flags&=-16777217):(t=t.memoizedProps,t!==r&&Ma(s),vs(s),nh(s,f,t,r,o)),null;case 27:if(Tt(s),o=me.current,f=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==r&&Ma(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return vs(s),null}t=be.current,Jr(s)?m_(s):(t=U0(f,r,o),s.stateNode=t,Ma(s))}return vs(s),null;case 5:if(Tt(s),f=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==r&&Ma(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return vs(s),null}if(m=be.current,Jr(s))m_(s);else{var S=Pu(me.current);switch(m){case 1:m=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=S.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?S.createElement("select",{is:r.is}):S.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?S.createElement(f,{is:r.is}):S.createElement(f)}}m[zt]=s,m[tn]=r;e:for(S=s.child;S!==null;){if(S.tag===5||S.tag===6)m.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===s)break e;for(;S.sibling===null;){if(S.return===null||S.return===s)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}s.stateNode=m;e:switch(Io(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ma(s)}}return vs(s),nh(s,s.type,t===null?null:t.memoizedProps,s.pendingProps,o),null;case 6:if(t&&s.stateNode!=null)t.memoizedProps!==r&&Ma(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(t=me.current,Jr(s)){if(t=s.stateNode,o=s.memoizedProps,r=null,f=Oo,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}t[zt]=s,t=!!(t.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||N0(t.nodeValue,o)),t||Ua(s,!0)}else t=Pu(t).createTextNode(r),t[zt]=s,s.stateNode=t}return vs(s),null;case 31:if(o=s.memoizedState,t===null||t.memoizedState!==null){if(r=Jr(s),o!==null){if(t===null){if(!r)throw Error(a(318));if(t=s.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[zt]=s}else wr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;vs(s),t=!1}else o=ff(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=o),t=!0;if(!t)return s.flags&256?(Ri(s),s):(Ri(s),null);if((s.flags&128)!==0)throw Error(a(558))}return vs(s),null;case 13:if(r=s.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Jr(s),r!==null&&r.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[zt]=s}else wr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;vs(s),f=!1}else f=ff(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Ri(s),s):(Ri(s),null)}return Ri(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,t=t!==null&&t.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==t&&o&&(s.child.flags|=8192),ku(s,s.updateQueue),vs(s),null);case 4:return Ve(),t===null&&Ch(s.stateNode.containerInfo),vs(s),null;case 10:return Sa(s.type),vs(s),null;case 19:if(ae(Xs),r=s.memoizedState,r===null)return vs(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)ic(r,!1);else{if(Os!==0||t!==null&&(t.flags&128)!==0)for(t=s.child;t!==null;){if(m=fu(t),m!==null){for(s.flags|=128,ic(r,!1),t=m.updateQueue,s.updateQueue=t,ku(s,t),s.subtreeFlags=0,t=o,o=s.child;o!==null;)Fo(o,t),o=o.sibling;return Q(Xs,Xs.current&1|2),Dn&&va(s,r.treeForkCount),s.child}t=t.sibling}r.tail!==null&&xt()>Au&&(s.flags|=128,f=!0,ic(r,!1),s.lanes=4194304)}else{if(!f)if(t=fu(m),t!==null){if(s.flags|=128,f=!0,t=t.updateQueue,s.updateQueue=t,ku(s,t),ic(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!Dn)return vs(s),null}else 2*xt()-r.renderingStartTime>Au&&o!==536870912&&(s.flags|=128,f=!0,ic(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(t=r.last,t!==null?t.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=xt(),t.sibling=null,o=Xs.current,Q(Xs,f?o&1|2:o&1),Dn&&va(s,r.treeForkCount),t):(vs(s),null);case 22:case 23:return Ri(s),kf(),r=s.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(vs(s),s.subtreeFlags&6&&(s.flags|=8192)):vs(s),o=s.updateQueue,o!==null&&ku(s,o.retryQueue),o=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),t!==null&&ae(kr),null;case 24:return o=null,t!==null&&(o=t.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Sa(no),vs(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function Y2(t,s){switch(uf(s),s.tag){case 1:return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 3:return Sa(no),Ve(),t=s.flags,(t&65536)!==0&&(t&128)===0?(s.flags=t&-65537|128,s):null;case 26:case 27:case 5:return Tt(s),null;case 31:if(s.memoizedState!==null){if(Ri(s),s.alternate===null)throw Error(a(340));wr()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 13:if(Ri(s),t=s.memoizedState,t!==null&&t.dehydrated!==null){if(s.alternate===null)throw Error(a(340));wr()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 19:return ae(Xs),null;case 4:return Ve(),null;case 10:return Sa(s.type),null;case 22:case 23:return Ri(s),kf(),t!==null&&ae(kr),t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 24:return Sa(no),null;case 25:return null;default:return null}}function Og(t,s){switch(uf(s),s.tag){case 3:Sa(no),Ve();break;case 26:case 27:case 5:Tt(s);break;case 4:Ve();break;case 31:s.memoizedState!==null&&Ri(s);break;case 13:Ri(s);break;case 19:ae(Xs);break;case 10:Sa(s.type);break;case 22:case 23:Ri(s),kf(),t!==null&&ae(kr);break;case 24:Sa(no)}}function ac(t,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&t)===t){r=void 0;var m=o.create,S=o.inst;r=m(),S.destroy=r}o=o.next}while(o!==f)}}catch(B){Zn(s,s.return,B)}}function qa(t,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&t)===t){var S=r.inst,B=S.destroy;if(B!==void 0){S.destroy=void 0,f=s;var G=o,ge=B;try{ge()}catch(Be){Zn(f,G,Be)}}}r=r.next}while(r!==m)}}catch(Be){Zn(s,s.return,Be)}}function zg(t){var s=t.updateQueue;if(s!==null){var o=t.stateNode;try{M_(s,o)}catch(r){Zn(t,t.return,r)}}}function $g(t,s,o){o.props=Ar(t.type,t.memoizedProps),o.state=t.memoizedState;try{o.componentWillUnmount()}catch(r){Zn(t,s,r)}}function rc(t,s){try{var o=t.ref;if(o!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof o=="function"?t.refCleanup=o(r):o.current=r}}catch(f){Zn(t,s,f)}}function ha(t,s){var o=t.ref,r=t.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Zn(t,s,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Zn(t,s,f)}else o.current=null}function Ig(t){var s=t.type,o=t.memoizedProps,r=t.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Zn(t,t.return,f)}}function sh(t,s,o){try{var r=t.stateNode;fv(r,t.type,o,s),r[tn]=s}catch(f){Zn(t,t.return,f)}}function Pg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&nr(t.type)||t.tag===4}function oh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&nr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,s,o){var r=t.tag;if(r===5||r===6)t=t.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(t,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(t),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=ps));else if(r!==4&&(r===27&&nr(t.type)&&(o=t.stateNode,s=null),t=t.child,t!==null))for(ih(t,s,o),t=t.sibling;t!==null;)ih(t,s,o),t=t.sibling}function ju(t,s,o){var r=t.tag;if(r===5||r===6)t=t.stateNode,s?o.insertBefore(t,s):o.appendChild(t);else if(r!==4&&(r===27&&nr(t.type)&&(o=t.stateNode),t=t.child,t!==null))for(ju(t,s,o),t=t.sibling;t!==null;)ju(t,s,o),t=t.sibling}function Hg(t){var s=t.stateNode,o=t.memoizedProps;try{for(var r=t.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Io(s,r,o),s[zt]=t,s[tn]=o}catch(m){Zn(t,t.return,m)}}var Ea=!1,io=!1,ah=!1,Ug=typeof WeakSet=="function"?WeakSet:Set,Mo=null;function W2(t,s){if(t=t.containerInfo,Mh=Xu,t=dt(t),Bt(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var S=0,B=-1,G=-1,ge=0,Be=0,He=t,ve=null;t:for(;;){for(var ke;He!==o||f!==0&&He.nodeType!==3||(B=S+f),He!==m||r!==0&&He.nodeType!==3||(G=S+r),He.nodeType===3&&(S+=He.nodeValue.length),(ke=He.firstChild)!==null;)ve=He,He=ke;for(;;){if(He===t)break t;if(ve===o&&++ge===f&&(B=S),ve===m&&++Be===r&&(G=S),(ke=He.nextSibling)!==null)break;He=ve,ve=He.parentNode}He=ke}o=B===-1||G===-1?null:{start:B,end:G}}else o=null}o=o||{start:0,end:0}}else o=null;for(Eh={focusedElem:t,selectionRange:o},Xu=!1,Mo=s;Mo!==null;)if(s=Mo,t=s.child,(s.subtreeFlags&1028)!==0&&t!==null)t.return=s,Mo=t;else for(;Mo!==null;){switch(s=Mo,m=s.alternate,t=s.flags,s.tag){case 0:if((t&4)!==0&&(t=s.updateQueue,t=t!==null?t.events:null,t!==null))for(o=0;o<t.length;o++)f=t[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var Dt=Ar(o.type,f);t=r.getSnapshotBeforeUpdate(Dt,m),r.__reactInternalSnapshotBeforeUpdate=t}catch(Gt){Zn(o,o.return,Gt)}}break;case 3:if((t&1024)!==0){if(t=s.stateNode.containerInfo,o=t.nodeType,o===9)Nh(t);else if(o===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Nh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=s.sibling,t!==null){t.return=s.return,Mo=t;break}Mo=s.return}}function Vg(t,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:Aa(t,o),r&4&&ac(5,o);break;case 1:if(Aa(t,o),r&4)if(t=o.stateNode,s===null)try{t.componentDidMount()}catch(S){Zn(o,o.return,S)}else{var f=Ar(o.type,s.memoizedProps);s=s.memoizedState;try{t.componentDidUpdate(f,s,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Zn(o,o.return,S)}}r&64&&zg(o),r&512&&rc(o,o.return);break;case 3:if(Aa(t,o),r&64&&(t=o.updateQueue,t!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{M_(t,s)}catch(S){Zn(o,o.return,S)}}break;case 27:s===null&&r&4&&Hg(o);case 26:case 5:Aa(t,o),s===null&&r&4&&Ig(o),r&512&&rc(o,o.return);break;case 12:Aa(t,o);break;case 31:Aa(t,o),r&4&&Fg(t,o);break;case 13:Aa(t,o),r&4&&Xg(t,o),r&64&&(t=o.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(o=ev.bind(null,o),bv(t,o))));break;case 22:if(r=o.memoizedState!==null||Ea,!r){s=s!==null&&s.memoizedState!==null||io,f=Ea;var m=io;Ea=r,(io=s)&&!m?Na(t,o,(o.subtreeFlags&8772)!==0):Aa(t,o),Ea=f,io=m}break;case 30:break;default:Aa(t,o)}}function Yg(t){var s=t.alternate;s!==null&&(t.alternate=null,Yg(s)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(s=t.stateNode,s!==null&&Is(s)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ss=null,gi=!1;function Ta(t,s,o){for(o=o.child;o!==null;)Wg(t,s,o),o=o.sibling}function Wg(t,s,o){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(tt,o)}catch{}switch(o.tag){case 26:io||ha(o,s),Ta(t,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:io||ha(o,s);var r=Ss,f=gi;nr(o.type)&&(Ss=o.stateNode,gi=!1),Ta(t,s,o),_c(o.stateNode),Ss=r,gi=f;break;case 5:io||ha(o,s);case 6:if(r=Ss,f=gi,Ss=null,Ta(t,s,o),Ss=r,gi=f,Ss!==null)if(gi)try{(Ss.nodeType===9?Ss.body:Ss.nodeName==="HTML"?Ss.ownerDocument.body:Ss).removeChild(o.stateNode)}catch(m){Zn(o,s,m)}else try{Ss.removeChild(o.stateNode)}catch(m){Zn(o,s,m)}break;case 18:Ss!==null&&(gi?(t=Ss,z0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,o.stateNode),bl(t)):z0(Ss,o.stateNode));break;case 4:r=Ss,f=gi,Ss=o.stateNode.containerInfo,gi=!0,Ta(t,s,o),Ss=r,gi=f;break;case 0:case 11:case 14:case 15:qa(2,o,s),io||qa(4,o,s),Ta(t,s,o);break;case 1:io||(ha(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&$g(o,s,r)),Ta(t,s,o);break;case 21:Ta(t,s,o);break;case 22:io=(r=io)||o.memoizedState!==null,Ta(t,s,o),io=r;break;default:Ta(t,s,o)}}function Fg(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{bl(t)}catch(o){Zn(s,s.return,o)}}}function Xg(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bl(t)}catch(o){Zn(s,s.return,o)}}function F2(t){switch(t.tag){case 31:case 13:case 19:var s=t.stateNode;return s===null&&(s=t.stateNode=new Ug),s;case 22:return t=t.stateNode,s=t._retryCache,s===null&&(s=t._retryCache=new Ug),s;default:throw Error(a(435,t.tag))}}function Mu(t,s){var o=F2(t);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=tv.bind(null,t,r);r.then(f,f)}})}function yi(t,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=t,S=s,B=S;e:for(;B!==null;){switch(B.tag){case 27:if(nr(B.type)){Ss=B.stateNode,gi=!1;break e}break;case 5:Ss=B.stateNode,gi=!1;break e;case 3:case 4:Ss=B.stateNode.containerInfo,gi=!0;break e}B=B.return}if(Ss===null)throw Error(a(160));Wg(m,S,f),Ss=null,gi=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)Gg(s,t),s=s.sibling}var ea=null;function Gg(t,s){var o=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:yi(s,t),xi(t),r&4&&(qa(3,t,t.return),ac(3,t),qa(5,t,t.return));break;case 1:yi(s,t),xi(t),r&512&&(io||o===null||ha(o,o.return)),r&64&&Ea&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(o=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=ea;if(yi(s,t),xi(t),r&512&&(io||o===null||ha(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=t.memoizedState,o===null)if(r===null)if(t.stateNode===null){e:{r=t.type,o=t.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[bo]||m[zt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),Io(m,r,o),m[zt]=t,yn(m),r=m;break e;case"link":var S=G0("link","href",f).get(r+(o.href||""));if(S){for(var B=0;B<S.length;B++)if(m=S[B],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){S.splice(B,1);break t}}m=f.createElement(r),Io(m,r,o),f.head.appendChild(m);break;case"meta":if(S=G0("meta","content",f).get(r+(o.content||""))){for(B=0;B<S.length;B++)if(m=S[B],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){S.splice(B,1);break t}}m=f.createElement(r),Io(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[zt]=t,yn(m),r=m}t.stateNode=r}else q0(f,t.type,t.stateNode);else t.stateNode=X0(f,r,t.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?q0(f,t.type,t.stateNode):X0(f,r,t.memoizedProps)):r===null&&t.stateNode!==null&&sh(t,t.memoizedProps,o.memoizedProps)}break;case 27:yi(s,t),xi(t),r&512&&(io||o===null||ha(o,o.return)),o!==null&&r&4&&sh(t,t.memoizedProps,o.memoizedProps);break;case 5:if(yi(s,t),xi(t),r&512&&(io||o===null||ha(o,o.return)),t.flags&32){f=t.stateNode;try{Vo(f,"")}catch(Dt){Zn(t,t.return,Dt)}}r&4&&t.stateNode!=null&&(f=t.memoizedProps,sh(t,f,o!==null?o.memoizedProps:f)),r&1024&&(ah=!0);break;case 6:if(yi(s,t),xi(t),r&4){if(t.stateNode===null)throw Error(a(162));r=t.memoizedProps,o=t.stateNode;try{o.nodeValue=r}catch(Dt){Zn(t,t.return,Dt)}}break;case 3:if(Vu=null,f=ea,ea=Hu(s.containerInfo),yi(s,t),ea=f,xi(t),r&4&&o!==null&&o.memoizedState.isDehydrated)try{bl(s.containerInfo)}catch(Dt){Zn(t,t.return,Dt)}ah&&(ah=!1,qg(t));break;case 4:r=ea,ea=Hu(t.stateNode.containerInfo),yi(s,t),xi(t),ea=r;break;case 12:yi(s,t),xi(t);break;case 31:yi(s,t),xi(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Mu(t,r)));break;case 13:yi(s,t),xi(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Tu=xt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Mu(t,r)));break;case 22:f=t.memoizedState!==null;var G=o!==null&&o.memoizedState!==null,ge=Ea,Be=io;if(Ea=ge||f,io=Be||G,yi(s,t),io=Be,Ea=ge,xi(t),r&8192)e:for(s=t.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||G||Ea||io||Nr(t)),o=null,s=t;;){if(s.tag===5||s.tag===26){if(o===null){G=o=s;try{if(m=G.stateNode,f)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{B=G.stateNode;var He=G.memoizedProps.style,ve=He!=null&&He.hasOwnProperty("display")?He.display:null;B.style.display=ve==null||typeof ve=="boolean"?"":(""+ve).trim()}}catch(Dt){Zn(G,G.return,Dt)}}}else if(s.tag===6){if(o===null){G=s;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(Dt){Zn(G,G.return,Dt)}}}else if(s.tag===18){if(o===null){G=s;try{var ke=G.stateNode;f?$0(ke,!0):$0(G.stateNode,!1)}catch(Dt){Zn(G,G.return,Dt)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===t)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=t.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,Mu(t,o))));break;case 19:yi(s,t),xi(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Mu(t,r)));break;case 30:break;case 21:break;default:yi(s,t),xi(t)}}function xi(t){var s=t.flags;if(s&2){try{for(var o,r=t.return;r!==null;){if(Pg(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=oh(t);ju(t,m,f);break;case 5:var S=o.stateNode;o.flags&32&&(Vo(S,""),o.flags&=-33);var B=oh(t);ju(t,B,S);break;case 3:case 4:var G=o.stateNode.containerInfo,ge=oh(t);ih(t,ge,G);break;default:throw Error(a(161))}}catch(Be){Zn(t,t.return,Be)}t.flags&=-3}s&4096&&(t.flags&=-4097)}function qg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var s=t;qg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),t=t.sibling}}function Aa(t,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Vg(t,s.alternate,s),s=s.sibling}function Nr(t){for(t=t.child;t!==null;){var s=t;switch(s.tag){case 0:case 11:case 14:case 15:qa(4,s,s.return),Nr(s);break;case 1:ha(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&$g(s,s.return,o),Nr(s);break;case 27:_c(s.stateNode);case 26:case 5:ha(s,s.return),Nr(s);break;case 22:s.memoizedState===null&&Nr(s);break;case 30:Nr(s);break;default:Nr(s)}t=t.sibling}}function Na(t,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=t,m=s,S=m.flags;switch(m.tag){case 0:case 11:case 15:Na(f,m,o),ac(4,m);break;case 1:if(Na(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ge){Zn(r,r.return,ge)}if(r=m,f=r.updateQueue,f!==null){var B=r.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)j_(G[f],B)}catch(ge){Zn(r,r.return,ge)}}o&&S&64&&zg(m),rc(m,m.return);break;case 27:Hg(m);case 26:case 5:Na(f,m,o),o&&r===null&&S&4&&Ig(m),rc(m,m.return);break;case 12:Na(f,m,o);break;case 31:Na(f,m,o),o&&S&4&&Fg(f,m);break;case 13:Na(f,m,o),o&&S&4&&Xg(f,m);break;case 22:m.memoizedState===null&&Na(f,m,o),rc(m,m.return);break;case 30:break;default:Na(f,m,o)}s=s.sibling}}function rh(t,s){var o=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),t=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(t=s.memoizedState.cachePool.pool),t!==o&&(t!=null&&t.refCount++,o!=null&&Xl(o))}function lh(t,s){t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&Xl(t))}function ta(t,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Kg(t,s,o,r),s=s.sibling}function Kg(t,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ta(t,s,o,r),f&2048&&ac(9,s);break;case 1:ta(t,s,o,r);break;case 3:ta(t,s,o,r),f&2048&&(t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&Xl(t)));break;case 12:if(f&2048){ta(t,s,o,r),t=s.stateNode;try{var m=s.memoizedProps,S=m.id,B=m.onPostCommit;typeof B=="function"&&B(S,s.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Zn(s,s.return,G)}}else ta(t,s,o,r);break;case 31:ta(t,s,o,r);break;case 13:ta(t,s,o,r);break;case 23:break;case 22:m=s.stateNode,S=s.alternate,s.memoizedState!==null?m._visibility&2?ta(t,s,o,r):lc(t,s):m._visibility&2?ta(t,s,o,r):(m._visibility|=2,cl(t,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&rh(S,s);break;case 24:ta(t,s,o,r),f&2048&&lh(s.alternate,s);break;default:ta(t,s,o,r)}}function cl(t,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=t,S=s,B=o,G=r,ge=S.flags;switch(S.tag){case 0:case 11:case 15:cl(m,S,B,G,f),ac(8,S);break;case 23:break;case 22:var Be=S.stateNode;S.memoizedState!==null?Be._visibility&2?cl(m,S,B,G,f):lc(m,S):(Be._visibility|=2,cl(m,S,B,G,f)),f&&ge&2048&&rh(S.alternate,S);break;case 24:cl(m,S,B,G,f),f&&ge&2048&&lh(S.alternate,S);break;default:cl(m,S,B,G,f)}s=s.sibling}}function lc(t,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=t,r=s,f=r.flags;switch(r.tag){case 22:lc(o,r),f&2048&&rh(r.alternate,r);break;case 24:lc(o,r),f&2048&&lh(r.alternate,r);break;default:lc(o,r)}s=s.sibling}}var cc=8192;function ul(t,s,o){if(t.subtreeFlags&cc)for(t=t.child;t!==null;)Qg(t,s,o),t=t.sibling}function Qg(t,s,o){switch(t.tag){case 26:ul(t,s,o),t.flags&cc&&t.memoizedState!==null&&Dv(o,ea,t.memoizedState,t.memoizedProps);break;case 5:ul(t,s,o);break;case 3:case 4:var r=ea;ea=Hu(t.stateNode.containerInfo),ul(t,s,o),ea=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=cc,cc=16777216,ul(t,s,o),cc=r):ul(t,s,o));break;default:ul(t,s,o)}}function Zg(t){var s=t.alternate;if(s!==null&&(t=s.child,t!==null)){s.child=null;do s=t.sibling,t.sibling=null,t=s;while(t!==null)}}function uc(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];Mo=r,e0(r,t)}Zg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jg(t),t=t.sibling}function Jg(t){switch(t.tag){case 0:case 11:case 15:uc(t),t.flags&2048&&qa(9,t,t.return);break;case 3:uc(t);break;case 12:uc(t);break;case 22:var s=t.stateNode;t.memoizedState!==null&&s._visibility&2&&(t.return===null||t.return.tag!==13)?(s._visibility&=-3,Eu(t)):uc(t);break;default:uc(t)}}function Eu(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];Mo=r,e0(r,t)}Zg(t)}for(t=t.child;t!==null;){switch(s=t,s.tag){case 0:case 11:case 15:qa(8,s,s.return),Eu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Eu(s));break;default:Eu(s)}t=t.sibling}}function e0(t,s){for(;Mo!==null;){var o=Mo;switch(o.tag){case 0:case 11:case 15:qa(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Xl(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,Mo=r;else e:for(o=t;Mo!==null;){r=Mo;var f=r.sibling,m=r.return;if(Yg(r),r===o){Mo=null;break e}if(f!==null){f.return=m,Mo=f;break e}Mo=m}}}var X2={getCacheForType:function(t){var s=zo(no),o=s.data.get(t);return o===void 0&&(o=t(),s.data.set(t,o)),o},cacheSignal:function(){return zo(no).controller.signal}},G2=typeof WeakMap=="function"?WeakMap:Map,Wn=0,ds=null,En=null,An=0,Qn=0,Bi=null,Ka=!1,dl=!1,ch=!1,Da=0,Os=0,Qa=0,Dr=0,uh=0,Li=0,fl=0,dc=null,bi=null,dh=!1,Tu=0,t0=0,Au=1/0,Nu=null,Za=null,yo=0,Ja=null,hl=null,Ra=0,fh=0,hh=null,n0=null,fc=0,mh=null;function Oi(){return(Wn&2)!==0&&An!==0?An&-An:O.T!==null?bh():Qt()}function s0(){if(Li===0)if((An&536870912)===0||Dn){var t=Je;Je<<=1,(Je&3932160)===0&&(Je=262144),Li=t}else Li=536870912;return t=Di.current,t!==null&&(t.flags|=32),Li}function vi(t,s,o){(t===ds&&(Qn===2||Qn===9)||t.cancelPendingCommit!==null)&&(ml(t,0),er(t,An,Li,!1)),ft(t,o),((Wn&2)===0||t!==ds)&&(t===ds&&((Wn&2)===0&&(Dr|=o),Os===4&&er(t,An,Li,!1)),ma(t))}function o0(t,s,o){if((Wn&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&t.expiredLanes)===0||Rt(t,s),f=r?Q2(t,s):_h(t,s,!0),m=r;do{if(f===0){dl&&!r&&er(t,s,0,!1);break}else{if(o=t.current.alternate,m&&!q2(o)){f=_h(t,s,!1),m=!1;continue}if(f===2){if(m=s,t.errorRecoveryDisabledLanes&m)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){s=S;e:{var B=t;f=dc;var G=B.current.memoizedState.isDehydrated;if(G&&(ml(B,S).flags|=256),S=_h(B,S,!1),S!==2){if(ch&&!G){B.errorRecoveryDisabledLanes|=m,Dr|=m,f=4;break e}m=bi,bi=f,m!==null&&(bi===null?bi=m:bi.push.apply(bi,m))}f=S}if(m=!1,f!==2)continue}}if(f===1){ml(t,0),er(t,s,0,!0);break}e:{switch(r=t,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:er(r,s,Li,!Ka);break e;case 2:bi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=Tu+300-xt(),10<f)){if(er(r,s,Li,!Ka),Ke(r,0,!0)!==0)break e;Ra=s,r.timeoutHandle=L0(i0.bind(null,r,o,bi,Nu,dh,s,Li,Dr,fl,Ka,m,"Throttled",-0,0),f);break e}i0(r,o,bi,Nu,dh,s,Li,Dr,fl,Ka,m,null,-0,0)}}break}while(!0);ma(t)}function i0(t,s,o,r,f,m,S,B,G,ge,Be,He,ve,ke){if(t.timeoutHandle=-1,He=s.subtreeFlags,He&8192||(He&16785408)===16785408){He={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ps},Qg(s,m,He);var Dt=(m&62914560)===m?Tu-xt():(m&4194048)===m?t0-xt():0;if(Dt=Rv(He,Dt),Dt!==null){Ra=m,t.cancelPendingCommit=Dt(h0.bind(null,t,s,m,o,r,f,S,B,G,Be,He,null,ve,ke)),er(t,m,S,!ge);return}}h0(t,s,m,o,r,f,S,B,G)}function q2(t){for(var s=t;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!ie(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function er(t,s,o,r){s&=~uh,s&=~Dr,t.suspendedLanes|=s,t.pingedLanes&=~s,r&&(t.warmLanes|=s),r=t.expirationTimes;for(var f=s;0<f;){var m=31-ye(f),S=1<<m;r[m]=-1,f&=~S}o!==0&&dn(t,o,s)}function Du(){return(Wn&6)===0?(hc(0),!1):!0}function ph(){if(En!==null){if(Qn===0)var t=En.return;else t=En,wa=Sr=null,Nf(t),ol=null,ql=0,t=En;for(;t!==null;)Og(t.alternate,t),t=t.return;En=null}}function ml(t,s){var o=t.timeoutHandle;o!==-1&&(t.timeoutHandle=-1,pv(o)),o=t.cancelPendingCommit,o!==null&&(t.cancelPendingCommit=null,o()),Ra=0,ph(),ds=t,En=o=_i(t.current,null),An=s,Qn=0,Bi=null,Ka=!1,dl=Rt(t,s),ch=!1,fl=Li=uh=Dr=Qa=Os=0,bi=dc=null,dh=!1,(s&8)!==0&&(s|=s&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=s;0<r;){var f=31-ye(r),m=1<<f;s|=t[f],r&=~m}return Da=s,yr(),o}function a0(t,s){hn=null,O.H=sc,s===sl||s===ru?(s=w_(),Qn=3):s===xf?(s=w_(),Qn=4):Qn=s===Xf?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Bi=s,En===null&&(Os=1,vu(t,Ui(s,t.current)))}function r0(){var t=Di.current;return t===null?!0:(An&4194048)===An?Fi===null:(An&62914560)===An||(An&536870912)!==0?t===Fi:!1}function l0(){var t=O.H;return O.H=sc,t===null?sc:t}function c0(){var t=O.A;return O.A=X2,t}function Ru(){Os=4,Ka||(An&4194048)!==An&&Di.current!==null||(dl=!0),(Qa&134217727)===0&&(Dr&134217727)===0||ds===null||er(ds,An,Li,!1)}function _h(t,s,o){var r=Wn;Wn|=2;var f=l0(),m=c0();(ds!==t||An!==s)&&(Nu=null,ml(t,s)),s=!1;var S=Os;e:do try{if(Qn!==0&&En!==null){var B=En,G=Bi;switch(Qn){case 8:ph(),S=6;break e;case 3:case 2:case 9:case 6:Di.current===null&&(s=!0);var ge=Qn;if(Qn=0,Bi=null,pl(t,B,G,ge),o&&dl){S=0;break e}break;default:ge=Qn,Qn=0,Bi=null,pl(t,B,G,ge)}}K2(),S=Os;break}catch(Be){a0(t,Be)}while(!0);return s&&t.shellSuspendCounter++,wa=Sr=null,Wn=r,O.H=f,O.A=m,En===null&&(ds=null,An=0,yr()),S}function K2(){for(;En!==null;)u0(En)}function Q2(t,s){var o=Wn;Wn|=2;var r=l0(),f=c0();ds!==t||An!==s?(Nu=null,Au=xt()+500,ml(t,s)):dl=Rt(t,s);e:do try{if(Qn!==0&&En!==null){s=En;var m=Bi;t:switch(Qn){case 1:Qn=0,Bi=null,pl(t,s,m,1);break;case 2:case 9:if(b_(m)){Qn=0,Bi=null,d0(s);break}s=function(){Qn!==2&&Qn!==9||ds!==t||(Qn=7),ma(t)},m.then(s,s);break e;case 3:Qn=7;break e;case 4:Qn=5;break e;case 7:b_(m)?(Qn=0,Bi=null,d0(s)):(Qn=0,Bi=null,pl(t,s,m,7));break;case 5:var S=null;switch(En.tag){case 26:S=En.memoizedState;case 5:case 27:var B=En;if(S?K0(S):B.stateNode.complete){Qn=0,Bi=null;var G=B.sibling;if(G!==null)En=G;else{var ge=B.return;ge!==null?(En=ge,Bu(ge)):En=null}break t}}Qn=0,Bi=null,pl(t,s,m,5);break;case 6:Qn=0,Bi=null,pl(t,s,m,6);break;case 8:ph(),Os=6;break e;default:throw Error(a(462))}}Z2();break}catch(Be){a0(t,Be)}while(!0);return wa=Sr=null,O.H=r,O.A=f,Wn=o,En!==null?0:(ds=null,An=0,yr(),Os)}function Z2(){for(;En!==null&&!_t();)u0(En)}function u0(t){var s=Bg(t.alternate,t,Da);t.memoizedProps=t.pendingProps,s===null?Bu(t):En=s}function d0(t){var s=t,o=s.alternate;switch(s.tag){case 15:case 0:s=Eg(o,s,s.pendingProps,s.type,void 0,An);break;case 11:s=Eg(o,s,s.pendingProps,s.type.render,s.ref,An);break;case 5:Nf(s);default:Og(o,s),s=En=Fo(s,Da),s=Bg(o,s,Da)}t.memoizedProps=t.pendingProps,s===null?Bu(t):En=s}function pl(t,s,o,r){wa=Sr=null,Nf(s),ol=null,ql=0;var f=s.return;try{if(P2(t,f,s,o,An)){Os=1,vu(t,Ui(o,t.current)),En=null;return}}catch(m){if(f!==null)throw En=f,m;Os=1,vu(t,Ui(o,t.current)),En=null;return}s.flags&32768?(Dn||r===1?t=!0:dl||(An&536870912)!==0?t=!1:(Ka=t=!0,(r===2||r===9||r===3||r===6)&&(r=Di.current,r!==null&&r.tag===13&&(r.flags|=16384))),f0(s,t)):Bu(s)}function Bu(t){var s=t;do{if((s.flags&32768)!==0){f0(s,Ka);return}t=s.return;var o=V2(s.alternate,s,Da);if(o!==null){En=o;return}if(s=s.sibling,s!==null){En=s;return}En=s=t}while(s!==null);Os===0&&(Os=5)}function f0(t,s){do{var o=Y2(t.alternate,t);if(o!==null){o.flags&=32767,En=o;return}if(o=t.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(t=t.sibling,t!==null)){En=t;return}En=t=o}while(t!==null);Os=6,En=null}function h0(t,s,o,r,f,m,S,B,G){t.cancelPendingCommit=null;do Lu();while(yo!==0);if((Wn&6)!==0)throw Error(a(327));if(s!==null){if(s===t.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=qr,Ht(t,o,m,S,B,G),t===ds&&(En=ds=null,An=0),hl=s,Ja=t,Ra=o,fh=m,hh=f,n0=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,nv(ot,function(){return y0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,f=se.p,se.p=2,S=Wn,Wn|=4;try{W2(t,s,o)}finally{Wn=S,se.p=f,O.T=r}}yo=1,m0(),p0(),_0()}}function m0(){if(yo===1){yo=0;var t=Ja,s=hl,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=O.T,O.T=null;var r=se.p;se.p=2;var f=Wn;Wn|=4;try{Gg(s,t);var m=Eh,S=dt(t.containerInfo),B=m.focusedElem,G=m.selectionRange;if(S!==B&&B&&B.ownerDocument&&it(B.ownerDocument.documentElement,B)){if(G!==null&&Bt(B)){var ge=G.start,Be=G.end;if(Be===void 0&&(Be=ge),"selectionStart"in B)B.selectionStart=ge,B.selectionEnd=Math.min(Be,B.value.length);else{var He=B.ownerDocument||document,ve=He&&He.defaultView||window;if(ve.getSelection){var ke=ve.getSelection(),Dt=B.textContent.length,Gt=Math.min(G.start,Dt),is=G.end===void 0?Gt:Math.min(G.end,Dt);!ke.extend&&Gt>is&&(S=is,is=Gt,Gt=S);var re=qe(B,Gt),te=qe(B,is);if(re&&te&&(ke.rangeCount!==1||ke.anchorNode!==re.node||ke.anchorOffset!==re.offset||ke.focusNode!==te.node||ke.focusOffset!==te.offset)){var _e=He.createRange();_e.setStart(re.node,re.offset),ke.removeAllRanges(),Gt>is?(ke.addRange(_e),ke.extend(te.node,te.offset)):(_e.setEnd(te.node,te.offset),ke.addRange(_e))}}}}for(He=[],ke=B;ke=ke.parentNode;)ke.nodeType===1&&He.push({element:ke,left:ke.scrollLeft,top:ke.scrollTop});for(typeof B.focus=="function"&&B.focus(),B=0;B<He.length;B++){var $e=He[B];$e.element.scrollLeft=$e.left,$e.element.scrollTop=$e.top}}Xu=!!Mh,Eh=Mh=null}finally{Wn=f,se.p=r,O.T=o}}t.current=s,yo=2}}function p0(){if(yo===2){yo=0;var t=Ja,s=hl,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=O.T,O.T=null;var r=se.p;se.p=2;var f=Wn;Wn|=4;try{Vg(t,s.alternate,s)}finally{Wn=f,se.p=r,O.T=o}}yo=3}}function _0(){if(yo===4||yo===3){yo=0,Ie();var t=Ja,s=hl,o=Ra,r=n0;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?yo=5:(yo=0,hl=Ja=null,g0(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Za=null),ls(o),s=s.stateNode,Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(tt,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=O.T,f=se.p,se.p=2,O.T=null;try{for(var m=t.onRecoverableError,S=0;S<r.length;S++){var B=r[S];m(B.value,{componentStack:B.stack})}}finally{O.T=s,se.p=f}}(Ra&3)!==0&&Lu(),ma(t),f=t.pendingLanes,(o&261930)!==0&&(f&42)!==0?t===mh?fc++:(fc=0,mh=t):fc=0,hc(0)}}function g0(t,s){(t.pooledCacheLanes&=s)===0&&(s=t.pooledCache,s!=null&&(t.pooledCache=null,Xl(s)))}function Lu(){return m0(),p0(),_0(),y0()}function y0(){if(yo!==5)return!1;var t=Ja,s=fh;fh=0;var o=ls(Ra),r=O.T,f=se.p;try{se.p=32>o?32:o,O.T=null,o=hh,hh=null;var m=Ja,S=Ra;if(yo=0,hl=Ja=null,Ra=0,(Wn&6)!==0)throw Error(a(331));var B=Wn;if(Wn|=4,Jg(m.current),Kg(m,m.current,S,o),Wn=B,hc(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(tt,m)}catch{}return!0}finally{se.p=f,O.T=r,g0(t,s)}}function x0(t,s,o){s=Ui(o,s),s=Ff(t.stateNode,s,2),t=Fa(t,s,2),t!==null&&(ft(t,2),ma(t))}function Zn(t,s,o){if(t.tag===3)x0(t,t,o);else for(;s!==null;){if(s.tag===3){x0(s,t,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Za===null||!Za.has(r))){t=Ui(o,t),o=bg(2),r=Fa(s,o,2),r!==null&&(vg(o,r,s,t),ft(r,2),ma(r));break}}s=s.return}}function gh(t,s,o){var r=t.pingCache;if(r===null){r=t.pingCache=new G2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(ch=!0,f.add(o),t=J2.bind(null,t,s,o),s.then(t,t))}function J2(t,s,o){var r=t.pingCache;r!==null&&r.delete(s),t.pingedLanes|=t.suspendedLanes&o,t.warmLanes&=~o,ds===t&&(An&o)===o&&(Os===4||Os===3&&(An&62914560)===An&&300>xt()-Tu?(Wn&2)===0&&ml(t,0):uh|=o,fl===An&&(fl=0)),ma(t)}function b0(t,s){s===0&&(s=mt()),t=ua(t,s),t!==null&&(ft(t,s),ma(t))}function ev(t){var s=t.memoizedState,o=0;s!==null&&(o=s.retryLane),b0(t,o)}function tv(t,s){var o=0;switch(t.tag){case 31:case 13:var r=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),b0(t,o)}function nv(t,s){return ct(t,s)}var Ou=null,_l=null,yh=!1,zu=!1,xh=!1,tr=0;function ma(t){t!==_l&&t.next===null&&(_l===null?Ou=_l=t:_l=_l.next=t),zu=!0,yh||(yh=!0,ov())}function hc(t,s){if(!xh&&zu){xh=!0;do for(var o=!1,r=Ou;r!==null;){if(t!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var S=r.suspendedLanes,B=r.pingedLanes;m=(1<<31-ye(42|t)+1)-1,m&=f&~(S&~B),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,C0(r,m))}else m=An,m=Ke(r,r===ds?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||Rt(r,m)||(o=!0,C0(r,m));r=r.next}while(o);xh=!1}}function sv(){v0()}function v0(){zu=yh=!1;var t=0;tr!==0&&mv()&&(t=tr);for(var s=xt(),o=null,r=Ou;r!==null;){var f=r.next,m=w0(r,s);m===0?(r.next=null,o===null?Ou=f:o.next=f,f===null&&(_l=o)):(o=r,(t!==0||(m&3)!==0)&&(zu=!0)),r=f}yo!==0&&yo!==5||hc(t),tr!==0&&(tr=0)}function w0(t,s){for(var o=t.suspendedLanes,r=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var S=31-ye(m),B=1<<S,G=f[S];G===-1?((B&o)===0||(B&r)!==0)&&(f[S]=wt(B,s)):G<=s&&(t.expiredLanes|=B),m&=~B}if(s=ds,o=An,o=Ke(t,t===s?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,o===0||t===s&&(Qn===2||Qn===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&at(r),t.callbackNode=null,t.callbackPriority=0;if((o&3)===0||Rt(t,o)){if(s=o&-o,s===t.callbackPriority)return s;switch(r!==null&&at(r),ls(o)){case 2:case 8:o=Xe;break;case 32:o=ot;break;case 268435456:o=J;break;default:o=ot}return r=S0.bind(null,t),o=ct(o,r),t.callbackPriority=s,t.callbackNode=o,s}return r!==null&&r!==null&&at(r),t.callbackPriority=2,t.callbackNode=null,2}function S0(t,s){if(yo!==0&&yo!==5)return t.callbackNode=null,t.callbackPriority=0,null;var o=t.callbackNode;if(Lu()&&t.callbackNode!==o)return null;var r=An;return r=Ke(t,t===ds?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(o0(t,r,s),w0(t,xt()),t.callbackNode!=null&&t.callbackNode===o?S0.bind(null,t):null)}function C0(t,s){if(Lu())return null;o0(t,s,!0)}function ov(){_v(function(){(Wn&6)!==0?ct(kt,sv):v0()})}function bh(){if(tr===0){var t=tl;t===0&&(t=Re,Re<<=1,(Re&261888)===0&&(Re=256)),tr=t}return tr}function k0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ko(""+t)}function j0(t,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,t.id&&o.setAttribute("form",t.id),s.parentNode.insertBefore(o,s),t=new FormData(t),o.parentNode.removeChild(o),t}function iv(t,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=k0((f[tn]||null).action),S=r.submitter;S&&(s=(s=S[tn]||null)?k0(s.formAction):S.getAttribute("formAction"),s!==null&&(m=s,S=null));var B=new Wo("action","action",null,r,f);t.push({event:B,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(tr!==0){var G=S?j0(f,S):new FormData(f);Pf(o,{pending:!0,data:G,method:f.method,action:m},null,G)}}else typeof m=="function"&&(B.preventDefault(),G=S?j0(f,S):new FormData(f),Pf(o,{pending:!0,data:G,method:f.method,action:m},m,G))},currentTarget:f}]})}}for(var vh=0;vh<Gr.length;vh++){var wh=Gr[vh],av=wh.toLowerCase(),rv=wh[0].toUpperCase()+wh.slice(1);pi(av,"on"+rv)}pi(mi,"onAnimationEnd"),pi(Ai,"onAnimationIteration"),pi(_r,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(Wr,"onTransitionRun"),pi(Fr,"onTransitionStart"),pi(Xr,"onTransitionCancel"),pi(Ul,"onTransitionEnd"),en("onMouseEnter",["mouseout","mouseover"]),en("onMouseLeave",["mouseout","mouseover"]),en("onPointerEnter",["pointerout","pointerover"]),en("onPointerLeave",["pointerout","pointerover"]),hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hs("onBeforeInput",["compositionend","keypress","textInput","paste"]),hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mc));function M0(t,s){s=(s&4)!==0;for(var o=0;o<t.length;o++){var r=t[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var S=r.length-1;0<=S;S--){var B=r[S],G=B.instance,ge=B.currentTarget;if(B=B.listener,G!==m&&f.isPropagationStopped())break e;m=B,f.currentTarget=ge;try{m(f)}catch(Be){gr(Be)}f.currentTarget=null,m=G}else for(S=0;S<r.length;S++){if(B=r[S],G=B.instance,ge=B.currentTarget,B=B.listener,G!==m&&f.isPropagationStopped())break e;m=B,f.currentTarget=ge;try{m(f)}catch(Be){gr(Be)}f.currentTarget=null,m=G}}}}function Tn(t,s){var o=s[$n];o===void 0&&(o=s[$n]=new Set);var r=t+"__bubble";o.has(r)||(E0(s,t,2,!1),o.add(r))}function Sh(t,s,o){var r=0;s&&(r|=4),E0(o,t,r,s)}var $u="_reactListening"+Math.random().toString(36).slice(2);function Ch(t){if(!t[$u]){t[$u]=!0,Hs.forEach(function(o){o!=="selectionchange"&&(lv.has(o)||Sh(o,!1,t),Sh(o,!0,t))});var s=t.nodeType===9?t:t.ownerDocument;s===null||s[$u]||(s[$u]=!0,Sh("selectionchange",!1,s))}}function E0(t,s,o,r){switch(sy(s)){case 2:var f=Ov;break;case 8:f=zv;break;default:f=Ih}o=f.bind(null,s,o,t),f=void 0,!eo||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?t.addEventListener(s,o,{capture:!0,passive:f}):t.addEventListener(s,o,!0):f!==void 0?t.addEventListener(s,o,{passive:f}):t.addEventListener(s,o,!1)}function kh(t,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var S=r.tag;if(S===3||S===4){var B=r.stateNode.containerInfo;if(B===f)break;if(S===4)for(S=r.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;B!==null;){if(S=lo(B),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){r=m=S;continue e}B=B.parentNode}}r=r.return}Fs(function(){var ge=m,Be=Zs(o),He=[];e:{var ve=Vl.get(t);if(ve!==void 0){var ke=Wo,Dt=t;switch(t){case"keypress":if(uo(o)===0)break e;case"keydown":case"keyup":ke=So;break;case"focusin":Dt="focus",ke=mo;break;case"focusout":Dt="blur",ke=mo;break;case"beforeblur":case"afterblur":ke=mo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=No;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=di;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=ce;break;case mi:case Ai:case _r:ke=Jo;break;case Ul:ke=Pe;break;case"scroll":case"scrollend":ke=ho;break;case"wheel":ke=Wt;break;case"copy":case"cut":case"paste":ke=Ei;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=E;break;case"toggle":case"beforetoggle":ke=At}var Gt=(s&4)!==0,is=!Gt&&(t==="scroll"||t==="scrollend"),re=Gt?ve!==null?ve+"Capture":null:ve;Gt=[];for(var te=ge,_e;te!==null;){var $e=te;if(_e=$e.stateNode,$e=$e.tag,$e!==5&&$e!==26&&$e!==27||_e===null||re===null||($e=_n(te,re),$e!=null&&Gt.push(pc(te,$e,_e))),is)break;te=te.return}0<Gt.length&&(ve=new ke(ve,Dt,null,o,Be),He.push({event:ve,listeners:Gt}))}}if((s&7)===0){e:{if(ve=t==="mouseover"||t==="pointerover",ke=t==="mouseout"||t==="pointerout",ve&&o!==Ws&&(Dt=o.relatedTarget||o.fromElement)&&(lo(Dt)||Dt[Ge]))break e;if((ke||ve)&&(ve=Be.window===Be?Be:(ve=Be.ownerDocument)?ve.defaultView||ve.parentWindow:window,ke?(Dt=o.relatedTarget||o.toElement,ke=ge,Dt=Dt?lo(Dt):null,Dt!==null&&(is=u(Dt),Gt=Dt.tag,Dt!==is||Gt!==5&&Gt!==27&&Gt!==6)&&(Dt=null)):(ke=null,Dt=ge),ke!==Dt)){if(Gt=No,$e="onMouseLeave",re="onMouseEnter",te="mouse",(t==="pointerout"||t==="pointerover")&&(Gt=E,$e="onPointerLeave",re="onPointerEnter",te="pointer"),is=ke==null?ve:Zt(ke),_e=Dt==null?ve:Zt(Dt),ve=new Gt($e,te+"leave",ke,o,Be),ve.target=is,ve.relatedTarget=_e,$e=null,lo(Be)===ge&&(Gt=new Gt(re,te+"enter",Dt,o,Be),Gt.target=_e,Gt.relatedTarget=is,$e=Gt),is=$e,ke&&Dt)t:{for(Gt=cv,re=ke,te=Dt,_e=0,$e=re;$e;$e=Gt($e))_e++;$e=0;for(var Yt=te;Yt;Yt=Gt(Yt))$e++;for(;0<_e-$e;)re=Gt(re),_e--;for(;0<$e-_e;)te=Gt(te),$e--;for(;_e--;){if(re===te||te!==null&&re===te.alternate){Gt=re;break t}re=Gt(re),te=Gt(te)}Gt=null}else Gt=null;ke!==null&&T0(He,ve,ke,Gt,!1),Dt!==null&&is!==null&&T0(He,is,Dt,Gt,!0)}}e:{if(ve=ge?Zt(ge):window,ke=ve.nodeName&&ve.nodeName.toLowerCase(),ke==="select"||ke==="input"&&ve.type==="file")var Pn=v;else if(ko(ve))if(k)Pn=q;else{Pn=et;var It=Te}else ke=ve.nodeName,!ke||ke.toLowerCase()!=="input"||ve.type!=="checkbox"&&ve.type!=="radio"?ge&&ks(ge.elementType)&&(Pn=v):Pn=ut;if(Pn&&(Pn=Pn(t,ge))){Ro(He,Pn,o,Be);break e}It&&It(t,ve,ge),t==="focusout"&&ge&&ve.type==="number"&&ge.memoizedProps.value!=null&&Vs(ve,"number",ve.value)}switch(It=ge?Zt(ge):window,t){case"focusin":(ko(It)||It.contentEditable==="true")&&(jt=It,Cn=ge,Xt=null);break;case"focusout":Xt=Cn=jt=null;break;case"mousedown":cn=!0;break;case"contextmenu":case"mouseup":case"dragend":cn=!1,On(He,o,Be);break;case"selectionchange":if(yt)break;case"keydown":case"keyup":On(He,o,Be)}var gn;if(vn)e:{switch(t){case"compositionstart":var Nn="onCompositionStart";break e;case"compositionend":Nn="onCompositionEnd";break e;case"compositionupdate":Nn="onCompositionUpdate";break e}Nn=void 0}else Bs?ys(t,o)&&(Nn="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Nn="onCompositionStart");Nn&&(sn&&o.locale!=="ko"&&(Bs||Nn!=="onCompositionStart"?Nn==="onCompositionEnd"&&Bs&&(gn=To()):(Ts=Be,ji="value"in Ts?Ts.value:Ts.textContent,Bs=!0)),It=Iu(ge,Nn),0<It.length&&(Nn=new Et(Nn,t,null,o,Be),He.push({event:Nn,listeners:It}),gn?Nn.data=gn:(gn=po(o),gn!==null&&(Nn.data=gn)))),(gn=Gn?Ti(t,o):_o(t,o))&&(Nn=Iu(ge,"onBeforeInput"),0<Nn.length&&(It=new Et("onBeforeInput","beforeinput",null,o,Be),He.push({event:It,listeners:Nn}),It.data=gn)),iv(He,t,ge,o,Be)}M0(He,s)})}function pc(t,s,o){return{instance:t,listener:s,currentTarget:o}}function Iu(t,s){for(var o=s+"Capture",r=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=_n(t,o),f!=null&&r.unshift(pc(t,f,m)),f=_n(t,s),f!=null&&r.push(pc(t,f,m))),t.tag===3)return r;t=t.return}return[]}function cv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function T0(t,s,o,r,f){for(var m=s._reactName,S=[];o!==null&&o!==r;){var B=o,G=B.alternate,ge=B.stateNode;if(B=B.tag,G!==null&&G===r)break;B!==5&&B!==26&&B!==27||ge===null||(G=ge,f?(ge=_n(o,m),ge!=null&&S.unshift(pc(o,ge,G))):f||(ge=_n(o,m),ge!=null&&S.push(pc(o,ge,G)))),o=o.return}S.length!==0&&t.push({event:s,listeners:S})}var uv=/\r\n?/g,dv=/\u0000|\uFFFD/g;function A0(t){return(typeof t=="string"?t:""+t).replace(uv,`
`).replace(dv,"")}function N0(t,s){return s=A0(s),A0(t)===s}function os(t,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||Vo(t,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&Vo(t,""+r);break;case"className":qn(t,"class",r);break;case"tabIndex":qn(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":qn(t,o,r);break;case"style":Ys(t,r,m);break;case"data":if(s!=="object"){qn(t,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){t.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(o);break}r=Ko(""+r),t.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&os(t,s,"name",f.name,f,null),os(t,s,"formEncType",f.formEncType,f,null),os(t,s,"formMethod",f.formMethod,f,null),os(t,s,"formTarget",f.formTarget,f,null)):(os(t,s,"encType",f.encType,f,null),os(t,s,"method",f.method,f,null),os(t,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(o);break}r=Ko(""+r),t.setAttribute(o,r);break;case"onClick":r!=null&&(t.onclick=ps);break;case"onScroll":r!=null&&Tn("scroll",t);break;case"onScrollEnd":r!=null&&Tn("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=o}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}o=Ko(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,""+r):t.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,""):t.removeAttribute(o);break;case"capture":case"download":r===!0?t.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,r):t.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(o,r):t.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(o):t.setAttribute(o,r);break;case"popover":Tn("beforetoggle",t),Tn("toggle",t),Rs(t,"popover",r);break;case"xlinkActuate":gs(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":gs(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":gs(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":gs(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":gs(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":gs(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":gs(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":gs(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":gs(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Rs(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=ki.get(o)||o,Rs(t,o,r))}}function jh(t,s,o,r,f,m){switch(o){case"style":Ys(t,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=o}}break;case"children":typeof r=="string"?Vo(t,r):(typeof r=="number"||typeof r=="bigint")&&Vo(t,""+r);break;case"onScroll":r!=null&&Tn("scroll",t);break;case"onScrollEnd":r!=null&&Tn("scrollend",t);break;case"onClick":r!=null&&(t.onclick=ps);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rn.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=t[tn]||null,m=m!=null?m[o]:null,typeof m=="function"&&t.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in t?t[o]=null:t.hasAttribute(o)&&t.removeAttribute(o)),t.addEventListener(s,r,f);break e}o in t?t[o]=r:r===!0?t.setAttribute(o,""):Rs(t,o,r)}}}function Io(t,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tn("error",t),Tn("load",t);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var S=o[m];if(S!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:os(t,s,m,S,o,null)}}f&&os(t,s,"srcSet",o.srcSet,o,null),r&&os(t,s,"src",o.src,o,null);return;case"input":Tn("invalid",t);var B=m=S=f=null,G=null,ge=null;for(r in o)if(o.hasOwnProperty(r)){var Be=o[r];if(Be!=null)switch(r){case"name":f=Be;break;case"type":S=Be;break;case"checked":G=Be;break;case"defaultChecked":ge=Be;break;case"value":m=Be;break;case"defaultValue":B=Be;break;case"children":case"dangerouslySetInnerHTML":if(Be!=null)throw Error(a(137,s));break;default:os(t,s,r,Be,o,null)}}wn(t,m,B,G,ge,S,f,!1);return;case"select":Tn("invalid",t),r=S=m=null;for(f in o)if(o.hasOwnProperty(f)&&(B=o[f],B!=null))switch(f){case"value":m=B;break;case"defaultValue":S=B;break;case"multiple":r=B;default:os(t,s,f,B,o,null)}s=m,o=S,t.multiple=!!r,s!=null?xn(t,!!r,s,!1):o!=null&&xn(t,!!r,o,!0);return;case"textarea":Tn("invalid",t),m=f=r=null;for(S in o)if(o.hasOwnProperty(S)&&(B=o[S],B!=null))switch(S){case"value":r=B;break;case"defaultValue":f=B;break;case"children":m=B;break;case"dangerouslySetInnerHTML":if(B!=null)throw Error(a(91));break;default:os(t,s,S,B,o,null)}Ci(t,r,f,m);return;case"option":for(G in o)if(o.hasOwnProperty(G)&&(r=o[G],r!=null))switch(G){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:os(t,s,G,r,o,null)}return;case"dialog":Tn("beforetoggle",t),Tn("toggle",t),Tn("cancel",t),Tn("close",t);break;case"iframe":case"object":Tn("load",t);break;case"video":case"audio":for(r=0;r<mc.length;r++)Tn(mc[r],t);break;case"image":Tn("error",t),Tn("load",t);break;case"details":Tn("toggle",t);break;case"embed":case"source":case"link":Tn("error",t),Tn("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ge in o)if(o.hasOwnProperty(ge)&&(r=o[ge],r!=null))switch(ge){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:os(t,s,ge,r,o,null)}return;default:if(ks(s)){for(Be in o)o.hasOwnProperty(Be)&&(r=o[Be],r!==void 0&&jh(t,s,Be,r,o,void 0));return}}for(B in o)o.hasOwnProperty(B)&&(r=o[B],r!=null&&os(t,s,B,r,o,null))}function fv(t,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,S=null,B=null,G=null,ge=null,Be=null;for(ke in o){var He=o[ke];if(o.hasOwnProperty(ke)&&He!=null)switch(ke){case"checked":break;case"value":break;case"defaultValue":G=He;default:r.hasOwnProperty(ke)||os(t,s,ke,null,r,He)}}for(var ve in r){var ke=r[ve];if(He=o[ve],r.hasOwnProperty(ve)&&(ke!=null||He!=null))switch(ve){case"type":m=ke;break;case"name":f=ke;break;case"checked":ge=ke;break;case"defaultChecked":Be=ke;break;case"value":S=ke;break;case"defaultValue":B=ke;break;case"children":case"dangerouslySetInnerHTML":if(ke!=null)throw Error(a(137,s));break;default:ke!==He&&os(t,s,ve,ke,r,He)}}Kn(t,S,B,G,ge,Be,m,f);return;case"select":ke=S=B=ve=null;for(m in o)if(G=o[m],o.hasOwnProperty(m)&&G!=null)switch(m){case"value":break;case"multiple":ke=G;default:r.hasOwnProperty(m)||os(t,s,m,null,r,G)}for(f in r)if(m=r[f],G=o[f],r.hasOwnProperty(f)&&(m!=null||G!=null))switch(f){case"value":ve=m;break;case"defaultValue":B=m;break;case"multiple":S=m;default:m!==G&&os(t,s,f,m,r,G)}s=B,o=S,r=ke,ve!=null?xn(t,!!o,ve,!1):!!r!=!!o&&(s!=null?xn(t,!!o,s,!0):xn(t,!!o,o?[]:"",!1));return;case"textarea":ke=ve=null;for(B in o)if(f=o[B],o.hasOwnProperty(B)&&f!=null&&!r.hasOwnProperty(B))switch(B){case"value":break;case"children":break;default:os(t,s,B,null,r,f)}for(S in r)if(f=r[S],m=o[S],r.hasOwnProperty(S)&&(f!=null||m!=null))switch(S){case"value":ve=f;break;case"defaultValue":ke=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&os(t,s,S,f,r,m)}ms(t,ve,ke);return;case"option":for(var Dt in o)if(ve=o[Dt],o.hasOwnProperty(Dt)&&ve!=null&&!r.hasOwnProperty(Dt))switch(Dt){case"selected":t.selected=!1;break;default:os(t,s,Dt,null,r,ve)}for(G in r)if(ve=r[G],ke=o[G],r.hasOwnProperty(G)&&ve!==ke&&(ve!=null||ke!=null))switch(G){case"selected":t.selected=ve&&typeof ve!="function"&&typeof ve!="symbol";break;default:os(t,s,G,ve,r,ke)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Gt in o)ve=o[Gt],o.hasOwnProperty(Gt)&&ve!=null&&!r.hasOwnProperty(Gt)&&os(t,s,Gt,null,r,ve);for(ge in r)if(ve=r[ge],ke=o[ge],r.hasOwnProperty(ge)&&ve!==ke&&(ve!=null||ke!=null))switch(ge){case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,s));break;default:os(t,s,ge,ve,r,ke)}return;default:if(ks(s)){for(var is in o)ve=o[is],o.hasOwnProperty(is)&&ve!==void 0&&!r.hasOwnProperty(is)&&jh(t,s,is,void 0,r,ve);for(Be in r)ve=r[Be],ke=o[Be],!r.hasOwnProperty(Be)||ve===ke||ve===void 0&&ke===void 0||jh(t,s,Be,ve,r,ke);return}}for(var re in o)ve=o[re],o.hasOwnProperty(re)&&ve!=null&&!r.hasOwnProperty(re)&&os(t,s,re,null,r,ve);for(He in r)ve=r[He],ke=o[He],!r.hasOwnProperty(He)||ve===ke||ve==null&&ke==null||os(t,s,He,ve,r,ke)}function D0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,S=f.initiatorType,B=f.duration;if(m&&B&&D0(S)){for(S=0,B=f.responseEnd,r+=1;r<o.length;r++){var G=o[r],ge=G.startTime;if(ge>B)break;var Be=G.transferSize,He=G.initiatorType;Be&&D0(He)&&(G=G.responseEnd,S+=Be*(G<B?1:(B-ge)/(G-ge)))}if(--r,s+=8*(m+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return s/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Mh=null,Eh=null;function Pu(t){return t.nodeType===9?t:t.ownerDocument}function R0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function B0(t,s){if(t===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&s==="foreignObject"?0:t}function Th(t,s){return t==="textarea"||t==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Ah=null;function mv(){var t=window.event;return t&&t.type==="popstate"?t===Ah?!1:(Ah=t,!0):(Ah=null,!1)}var L0=typeof setTimeout=="function"?setTimeout:void 0,pv=typeof clearTimeout=="function"?clearTimeout:void 0,O0=typeof Promise=="function"?Promise:void 0,_v=typeof queueMicrotask=="function"?queueMicrotask:typeof O0<"u"?function(t){return O0.resolve(null).then(t).catch(gv)}:L0;function gv(t){setTimeout(function(){throw t})}function nr(t){return t==="head"}function z0(t,s){var o=s,r=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){t.removeChild(f),bl(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")_c(t.ownerDocument.documentElement);else if(o==="head"){o=t.ownerDocument.head,_c(o);for(var m=o.firstChild;m;){var S=m.nextSibling,B=m.nodeName;m[bo]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=S}}else o==="body"&&_c(t.ownerDocument.body);o=f}while(o);bl(s)}function $0(t,s){var o=t;t=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(t===0)break;t--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||t++;o=r}while(o)}function Nh(t){var s=t.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Nh(o),Is(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}t.removeChild(o)}}function yv(t,s,o,r){for(;t.nodeType===1;){var f=o;if(t.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[bo])switch(s){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(s==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Xi(t.nextSibling),t===null)break}return null}function xv(t,s,o){if(s==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!o||(t=Xi(t.nextSibling),t===null))return null;return t}function I0(t,s){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Xi(t.nextSibling),t===null))return null;return t}function Dh(t){return t.data==="$?"||t.data==="$~"}function Rh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function bv(t,s){var o=t.ownerDocument;if(t.data==="$~")t._reactRetry=s;else if(t.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Xi(t){for(;t!=null;t=t.nextSibling){var s=t.nodeType;if(s===1||s===3)break;if(s===8){if(s=t.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return t}var Bh=null;function P0(t){t=t.nextSibling;for(var s=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"||o==="/&"){if(s===0)return Xi(t.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}t=t.nextSibling}return null}function H0(t){t=t.previousSibling;for(var s=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return t;s--}else o!=="/$"&&o!=="/&"||s++}t=t.previousSibling}return null}function U0(t,s,o){switch(s=Pu(o),t){case"html":if(t=s.documentElement,!t)throw Error(a(452));return t;case"head":if(t=s.head,!t)throw Error(a(453));return t;case"body":if(t=s.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function _c(t){for(var s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Is(t)}var Gi=new Map,V0=new Set;function Hu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ba=se.d;se.d={f:vv,r:wv,D:Sv,C:Cv,L:kv,m:jv,X:Ev,S:Mv,M:Tv};function vv(){var t=Ba.f(),s=Du();return t||s}function wv(t){var s=Ps(t);s!==null&&s.tag===5&&s.type==="form"?ag(s):Ba.r(t)}var gl=typeof document>"u"?null:document;function Y0(t,s,o){var r=gl;if(r&&typeof s=="string"&&s){var f=Cs(s);f='link[rel="'+t+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),V0.has(f)||(V0.add(f),t={rel:t,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),Io(s,"link",t),yn(s),r.head.appendChild(s)))}}function Sv(t){Ba.D(t),Y0("dns-prefetch",t,null)}function Cv(t,s){Ba.C(t,s),Y0("preconnect",t,s)}function kv(t,s,o){Ba.L(t,s,o);var r=gl;if(r&&t&&s){var f='link[rel="preload"][as="'+Cs(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Cs(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Cs(o.imageSizes)+'"]')):f+='[href="'+Cs(t)+'"]';var m=f;switch(s){case"style":m=yl(t);break;case"script":m=xl(t)}Gi.has(m)||(t=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:t,as:s},o),Gi.set(m,t),r.querySelector(f)!==null||s==="style"&&r.querySelector(gc(m))||s==="script"&&r.querySelector(yc(m))||(s=r.createElement("link"),Io(s,"link",t),yn(s),r.head.appendChild(s)))}}function jv(t,s){Ba.m(t,s);var o=gl;if(o&&t){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Cs(r)+'"][href="'+Cs(t)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=xl(t)}if(!Gi.has(m)&&(t=x({rel:"modulepreload",href:t},s),Gi.set(m,t),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(yc(m)))return}r=o.createElement("link"),Io(r,"link",t),yn(r),o.head.appendChild(r)}}}function Mv(t,s,o){Ba.S(t,s,o);var r=gl;if(r&&t){var f=jn(r).hoistableStyles,m=yl(t);s=s||"default";var S=f.get(m);if(!S){var B={loading:0,preload:null};if(S=r.querySelector(gc(m)))B.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":s},o),(o=Gi.get(m))&&Lh(t,o);var G=S=r.createElement("link");yn(G),Io(G,"link",t),G._p=new Promise(function(ge,Be){G.onload=ge,G.onerror=Be}),G.addEventListener("load",function(){B.loading|=1}),G.addEventListener("error",function(){B.loading|=2}),B.loading|=4,Uu(S,s,r)}S={type:"stylesheet",instance:S,count:1,state:B},f.set(m,S)}}}function Ev(t,s){Ba.X(t,s);var o=gl;if(o&&t){var r=jn(o).hoistableScripts,f=xl(t),m=r.get(f);m||(m=o.querySelector(yc(f)),m||(t=x({src:t,async:!0},s),(s=Gi.get(f))&&Oh(t,s),m=o.createElement("script"),yn(m),Io(m,"link",t),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function Tv(t,s){Ba.M(t,s);var o=gl;if(o&&t){var r=jn(o).hoistableScripts,f=xl(t),m=r.get(f);m||(m=o.querySelector(yc(f)),m||(t=x({src:t,async:!0,type:"module"},s),(s=Gi.get(f))&&Oh(t,s),m=o.createElement("script"),yn(m),Io(m,"link",t),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function W0(t,s,o,r){var f=(f=me.current)?Hu(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=yl(o.href),o=jn(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){t=yl(o.href);var m=jn(f).hoistableStyles,S=m.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,S),(m=f.querySelector(gc(t)))&&!m._p&&(S.instance=m,S.state.loading=5),Gi.has(t)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Gi.set(t,o),m||Av(f,t,o,S.state))),s&&r===null)throw Error(a(528,""));return S}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=xl(o),o=jn(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function yl(t){return'href="'+Cs(t)+'"'}function gc(t){return'link[rel="stylesheet"]['+t+"]"}function F0(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Av(t,s,o,r){t.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=t.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),Io(s,"link",o),yn(s),t.head.appendChild(s))}function xl(t){return'[src="'+Cs(t)+'"]'}function yc(t){return"script[async]"+t}function X0(t,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=t.querySelector('style[data-href~="'+Cs(o.href)+'"]');if(r)return s.instance=r,yn(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),yn(r),Io(r,"style",f),Uu(r,o.precedence,t),s.instance=r;case"stylesheet":f=yl(o.href);var m=t.querySelector(gc(f));if(m)return s.state.loading|=4,s.instance=m,yn(m),m;r=F0(o),(f=Gi.get(f))&&Lh(r,f),m=(t.ownerDocument||t).createElement("link"),yn(m);var S=m;return S._p=new Promise(function(B,G){S.onload=B,S.onerror=G}),Io(m,"link",r),s.state.loading|=4,Uu(m,o.precedence,t),s.instance=m;case"script":return m=xl(o.src),(f=t.querySelector(yc(m)))?(s.instance=f,yn(f),f):(r=o,(f=Gi.get(m))&&(r=x({},o),Oh(r,f)),t=t.ownerDocument||t,f=t.createElement("script"),yn(f),Io(f,"link",r),t.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Uu(r,o.precedence,t));return s.instance}function Uu(t,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,S=0;S<r.length;S++){var B=r[S];if(B.dataset.precedence===s)m=B;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(t,s.firstChild))}function Lh(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.title==null&&(t.title=s.title)}function Oh(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.integrity==null&&(t.integrity=s.integrity)}var Vu=null;function G0(t,s,o){if(Vu===null){var r=new Map,f=Vu=new Map;f.set(o,r)}else f=Vu,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(t))return r;for(r.set(t,null),o=o.getElementsByTagName(t),f=0;f<o.length;f++){var m=o[f];if(!(m[bo]||m[zt]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(s)||"";S=t+S;var B=r.get(S);B?B.push(m):r.set(S,[m])}}return r}function q0(t,s,o){t=t.ownerDocument||t,t.head.insertBefore(o,s==="title"?t.querySelector("head > title"):null)}function Nv(t,s,o){if(o===1||s.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return t=s.disabled,typeof s.precedence=="string"&&t==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function K0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Dv(t,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=yl(r.href),m=s.querySelector(gc(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(t.count++,t=Yu.bind(t),s.then(t,t)),o.state.loading|=4,o.instance=m,yn(m);return}m=s.ownerDocument||s,r=F0(r),(f=Gi.get(f))&&Lh(r,f),m=m.createElement("link"),yn(m);var S=m;S._p=new Promise(function(B,G){S.onload=B,S.onerror=G}),Io(m,"link",r),o.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(t.count++,o=Yu.bind(t),s.addEventListener("load",o),s.addEventListener("error",o))}}var zh=0;function Rv(t,s){return t.stylesheets&&t.count===0&&Fu(t,t.stylesheets),0<t.count||0<t.imgCount?function(o){var r=setTimeout(function(){if(t.stylesheets&&Fu(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+s);0<t.imgBytes&&zh===0&&(zh=62500*hv());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Fu(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>zh?50:800)+s);return t.unsuspend=o,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Yu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Wu=null;function Fu(t,s){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Wu=new Map,s.forEach(Bv,t),Wu=null,Yu.call(t))}function Bv(t,s){if(!(s.state.loading&4)){var o=Wu.get(t);if(o)var r=o.get(null);else{o=new Map,Wu.set(t,o);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var S=f[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(o.set(S.dataset.precedence,S),r=S)}r&&o.set(null,r)}f=s.instance,S=f.getAttribute("data-precedence"),m=o.get(S)||r,m===r&&o.set(null,f),o.set(S,f),this.count++,r=Yu.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),s.state.loading|=4}}var xc={$$typeof:L,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function Lv(t,s,o,r,f,m,S,B,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rn(0),this.hiddenUpdates=rn(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Q0(t,s,o,r,f,m,S,B,G,ge,Be,He){return t=new Lv(t,s,o,S,G,ge,Be,He,B),s=1,m===!0&&(s|=24),m=ns(3,null,null,s),t.current=m,m.stateNode=t,s=_f(),s.refCount++,t.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},bf(m),t}function Z0(t){return t?(t=un,t):un}function J0(t,s,o,r,f,m){f=Z0(f),r.context===null?r.context=f:r.pendingContext=f,r=Wa(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Fa(t,r,s),o!==null&&(vi(o,t,s),Ql(o,t,s))}function ey(t,s){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<s?o:s}}function $h(t,s){ey(t,s),(t=t.alternate)&&ey(t,s)}function ty(t){if(t.tag===13||t.tag===31){var s=ua(t,67108864);s!==null&&vi(s,t,67108864),$h(t,67108864)}}function ny(t){if(t.tag===13||t.tag===31){var s=Oi();s=fn(s);var o=ua(t,s);o!==null&&vi(o,t,s),$h(t,s)}}var Xu=!0;function Ov(t,s,o,r){var f=O.T;O.T=null;var m=se.p;try{se.p=2,Ih(t,s,o,r)}finally{se.p=m,O.T=f}}function zv(t,s,o,r){var f=O.T;O.T=null;var m=se.p;try{se.p=8,Ih(t,s,o,r)}finally{se.p=m,O.T=f}}function Ih(t,s,o,r){if(Xu){var f=Ph(r);if(f===null)kh(t,s,r,Gu,o),oy(t,r);else if(Iv(f,t,s,o,r))r.stopPropagation();else if(oy(t,r),s&4&&-1<$v.indexOf(t)){for(;f!==null;){var m=Ps(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=vt(m.pendingLanes);if(S!==0){var B=m;for(B.pendingLanes|=2,B.entangledLanes|=2;S;){var G=1<<31-ye(S);B.entanglements[1]|=G,S&=~G}ma(m),(Wn&6)===0&&(Au=xt()+500,hc(0))}}break;case 31:case 13:B=ua(m,2),B!==null&&vi(B,m,2),Du(),$h(m,2)}if(m=Ph(r),m===null&&kh(t,s,r,Gu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else kh(t,s,r,null,o)}}function Ph(t){return t=Zs(t),Hh(t)}var Gu=null;function Hh(t){if(Gu=null,t=lo(t),t!==null){var s=u(t);if(s===null)t=null;else{var o=s.tag;if(o===13){if(t=d(s),t!==null)return t;t=null}else if(o===31){if(t=h(s),t!==null)return t;t=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;t=null}else s!==t&&(t=null)}}return Gu=t,null}function sy(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gt()){case kt:return 2;case Xe:return 8;case ot:case U:return 32;case J:return 268435456;default:return 32}default:return 32}}var Uh=!1,sr=null,or=null,ir=null,bc=new Map,vc=new Map,ar=[],$v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function oy(t,s){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":bc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":vc.delete(s.pointerId)}}function wc(t,s,o,r,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=Ps(s),s!==null&&ty(s)),t):(t.eventSystemFlags|=r,s=t.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),t)}function Iv(t,s,o,r,f){switch(s){case"focusin":return sr=wc(sr,t,s,o,r,f),!0;case"dragenter":return or=wc(or,t,s,o,r,f),!0;case"mouseover":return ir=wc(ir,t,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return bc.set(m,wc(bc.get(m)||null,t,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,vc.set(m,wc(vc.get(m)||null,t,s,o,r,f)),!0}return!1}function iy(t){var s=lo(t.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){t.blockedOn=s,pn(t.priority,function(){ny(o)});return}}else if(s===31){if(s=h(o),s!==null){t.blockedOn=s,pn(t.priority,function(){ny(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qu(t){if(t.blockedOn!==null)return!1;for(var s=t.targetContainers;0<s.length;){var o=Ph(t.nativeEvent);if(o===null){o=t.nativeEvent;var r=new o.constructor(o.type,o);Ws=r,o.target.dispatchEvent(r),Ws=null}else return s=Ps(o),s!==null&&ty(s),t.blockedOn=o,!1;s.shift()}return!0}function ay(t,s,o){qu(t)&&o.delete(s)}function Pv(){Uh=!1,sr!==null&&qu(sr)&&(sr=null),or!==null&&qu(or)&&(or=null),ir!==null&&qu(ir)&&(ir=null),bc.forEach(ay),vc.forEach(ay)}function Ku(t,s){t.blockedOn===s&&(t.blockedOn=null,Uh||(Uh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Pv)))}var Qu=null;function ry(t){Qu!==t&&(Qu=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Qu===t&&(Qu=null);for(var s=0;s<t.length;s+=3){var o=t[s],r=t[s+1],f=t[s+2];if(typeof r!="function"){if(Hh(r||o)===null)continue;break}var m=Ps(o);m!==null&&(t.splice(s,3),s-=3,Pf(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function bl(t){function s(G){return Ku(G,t)}sr!==null&&Ku(sr,t),or!==null&&Ku(or,t),ir!==null&&Ku(ir,t),bc.forEach(s),vc.forEach(s);for(var o=0;o<ar.length;o++){var r=ar[o];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ar.length&&(o=ar[0],o.blockedOn===null);)iy(o),o.blockedOn===null&&ar.shift();if(o=(t.ownerDocument||t).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],S=f[tn]||null;if(typeof m=="function")S||ry(o);else if(S){var B=null;if(m&&m.hasAttribute("formAction")){if(f=m,S=m[tn]||null)B=S.formAction;else if(Hh(f)!==null)continue}else B=S.action;typeof B=="function"?o[r+1]=B:(o.splice(r,3),r-=3),ry(o)}}}function ly(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Vh(t){this._internalRoot=t}Zu.prototype.render=Vh.prototype.render=function(t){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=Oi();J0(o,r,t,s,null,null)},Zu.prototype.unmount=Vh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var s=t.containerInfo;J0(t.current,2,null,t,null,null),Du(),s[Ge]=null}};function Zu(t){this._internalRoot=t}Zu.prototype.unstable_scheduleHydration=function(t){if(t){var s=Qt();t={blockedOn:null,target:t,priority:s};for(var o=0;o<ar.length&&s!==0&&s<ar[o].priority;o++);ar.splice(o,0,t),o===0&&iy(t)}};var cy=n.version;if(cy!=="19.2.4")throw Error(a(527,cy,"19.2.4"));se.findDOMNode=function(t){var s=t._reactInternals;if(s===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=y(s),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Hv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ju.isDisabled&&Ju.supportsFiber)try{tt=Ju.inject(Hv),Ue=Ju}catch{}}return Cc.createRoot=function(t,s){if(!c(t))throw Error(a(299));var o=!1,r="",f=_g,m=gg,S=yg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(S=s.onRecoverableError)),s=Q0(t,1,!1,null,null,o,r,null,f,m,S,ly),t[Ge]=s.current,Ch(t),new Vh(s)},Cc.hydrateRoot=function(t,s,o){if(!c(t))throw Error(a(299));var r=!1,f="",m=_g,S=gg,B=yg,G=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(S=o.onCaughtError),o.onRecoverableError!==void 0&&(B=o.onRecoverableError),o.formState!==void 0&&(G=o.formState)),s=Q0(t,1,!0,s,o!=null?o:null,r,f,G,m,S,B,ly),s.context=Z0(null),o=s.current,r=Oi(),r=fn(r),f=Wa(r),f.callback=null,Fa(o,f,r),o=r,s.current.lanes=o,ft(s,o),ma(s),t[Ge]=s.current,Ch(t),new Zu(s)},Cc.version="19.2.4",Cc}var xy;function Kv(){if(xy)return Wh.exports;xy=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Wh.exports=qv(),Wh.exports}var Qv=Kv();const Zv=Xx(Qv);var _=wp();const Jv=Xx(_);function ew(e,n,i,a){if(typeof n=="function"?e!==n||!a:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(e):a?a.value:n.get(e)}function tw(e,n,i,a,c){if(typeof n=="function"?e!==n||!0:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(e,i),i}var Ed;const Zi="__TAURI_TO_IPC_KEY__";function nw(e,n=!1){return window.__TAURI_INTERNALS__.transformCallback(e,n)}async function Se(e,n={},i){return window.__TAURI_INTERNALS__.invoke(e,n,i)}class sw{get rid(){return ew(this,Ed,"f")}constructor(n){Ed.set(this,void 0),tw(this,Ed,n)}async close(){return Se("plugin:resources|close",{rid:this.rid})}}Ed=new WeakMap;var zi;(function(e){e.WINDOW_RESIZED="tauri://resize",e.WINDOW_MOVED="tauri://move",e.WINDOW_CLOSE_REQUESTED="tauri://close-requested",e.WINDOW_DESTROYED="tauri://destroyed",e.WINDOW_FOCUS="tauri://focus",e.WINDOW_BLUR="tauri://blur",e.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",e.WINDOW_THEME_CHANGED="tauri://theme-changed",e.WINDOW_CREATED="tauri://window-created",e.WEBVIEW_CREATED="tauri://webview-created",e.DRAG_ENTER="tauri://drag-enter",e.DRAG_OVER="tauri://drag-over",e.DRAG_DROP="tauri://drag-drop",e.DRAG_LEAVE="tauri://drag-leave"})(zi||(zi={}));async function qx(e,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e,n),await Se("plugin:event|unlisten",{event:e,eventId:n})}async function zc(e,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return Se("plugin:event|listen",{event:e,target:c,handler:nw(n)}).then(u=>async()=>qx(e,u))}async function ow(e,n,i){return zc(e,a=>{qx(e,a.id),n(a)},i)}async function iw(e,n){await Se("plugin:event|emit",{event:e,payload:n})}async function aw(e,n,i){await Se("plugin:event|emit_to",{target:typeof e=="string"?{kind:"AnyLabel",label:e}:e,event:n,payload:i})}class Kx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new $c(this.width*n,this.height*n)}[Zi](){return{width:this.width,height:this.height}}toJSON(){return this[Zi]()}}class $c{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Kx(this.width/n,this.height/n)}[Zi](){return{width:this.width,height:this.height}}toJSON(){return this[Zi]()}}class vl{constructor(n){this.size=n}toLogical(n){return this.size instanceof Kx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof $c?this.size:this.size.toPhysical(n)}[Zi](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[Zi]()}}class Qx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new dr(this.x*n,this.y*n)}[Zi](){return{x:this.x,y:this.y}}toJSON(){return this[Zi]()}}class dr{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Qx(this.x/n,this.y/n)}[Zi](){return{x:this.x,y:this.y}}toJSON(){return this[Zi]()}}class ed{constructor(n){this.position=n}toLogical(n){return this.position instanceof Qx?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof dr?this.position:this.position.toPhysical(n)}[Zi](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[Zi]()}}class Ic extends sw{constructor(n){super(n)}static async new(n,i,a){return Se("plugin:image|new",{rgba:$d(n),width:i,height:a}).then(c=>new Ic(c))}static async fromBytes(n){return Se("plugin:image|from_bytes",{bytes:$d(n)}).then(i=>new Ic(i))}static async fromPath(n){return Se("plugin:image|from_path",{path:n}).then(i=>new Ic(i))}async rgba(){return Se("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return Se("plugin:image|size",{rid:this.rid})}}function $d(e){return e==null?null:typeof e=="string"?e:e instanceof Ic?e.rid:e}var Im;(function(e){e[e.Critical=1]="Critical",e[e.Informational=2]="Informational"})(Im||(Im={}));class rw{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var by;(function(e){e.None="none",e.Normal="normal",e.Indeterminate="indeterminate",e.Paused="paused",e.Error="error"})(by||(by={}));function Sp(){return new Zx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Kh(){return Se("plugin:window|get_all_windows").then(e=>e.map(n=>new Zx(n,{skip:!0})))}const Qh=["tauri://created","tauri://error"];class Zx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||Se("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Kh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return Sp()}static async getAll(){return Kh()}static async getFocusedWindow(){for(const n of await Kh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:zc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:ow(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Qh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return iw(n,i)}async emitTo(n,i,a){if(Qh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return aw(n,i,a)}_handleTauriEvent(n,i){return Qh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return Se("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return Se("plugin:window|inner_position",{label:this.label}).then(n=>new dr(n))}async outerPosition(){return Se("plugin:window|outer_position",{label:this.label}).then(n=>new dr(n))}async innerSize(){return Se("plugin:window|inner_size",{label:this.label}).then(n=>new $c(n))}async outerSize(){return Se("plugin:window|outer_size",{label:this.label}).then(n=>new $c(n))}async isFullscreen(){return Se("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return Se("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return Se("plugin:window|is_maximized",{label:this.label})}async isFocused(){return Se("plugin:window|is_focused",{label:this.label})}async isDecorated(){return Se("plugin:window|is_decorated",{label:this.label})}async isResizable(){return Se("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return Se("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return Se("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return Se("plugin:window|is_closable",{label:this.label})}async isVisible(){return Se("plugin:window|is_visible",{label:this.label})}async title(){return Se("plugin:window|title",{label:this.label})}async theme(){return Se("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return Se("plugin:window|is_always_on_top",{label:this.label})}async center(){return Se("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===Im.Critical?i={type:"Critical"}:i={type:"Informational"}),Se("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return Se("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return Se("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return Se("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return Se("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return Se("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return Se("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return Se("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return Se("plugin:window|maximize",{label:this.label})}async unmaximize(){return Se("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return Se("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return Se("plugin:window|minimize",{label:this.label})}async unminimize(){return Se("plugin:window|unminimize",{label:this.label})}async show(){return Se("plugin:window|show",{label:this.label})}async hide(){return Se("plugin:window|hide",{label:this.label})}async close(){return Se("plugin:window|close",{label:this.label})}async destroy(){return Se("plugin:window|destroy",{label:this.label})}async setDecorations(n){return Se("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return Se("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return Se("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return Se("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return Se("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return Se("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return Se("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return Se("plugin:window|set_size",{label:this.label,value:n instanceof vl?n:new vl(n)})}async setMinSize(n){return Se("plugin:window|set_min_size",{label:this.label,value:n instanceof vl?n:n?new vl(n):null})}async setMaxSize(n){return Se("plugin:window|set_max_size",{label:this.label,value:n instanceof vl?n:n?new vl(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return Se("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return Se("plugin:window|set_position",{label:this.label,value:n instanceof ed?n:new ed(n)})}async setFullscreen(n){return Se("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return Se("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return Se("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return Se("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return Se("plugin:window|set_icon",{label:this.label,value:$d(n)})}async setSkipTaskbar(n){return Se("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return Se("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return Se("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return Se("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return Se("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return Se("plugin:window|set_cursor_position",{label:this.label,value:n instanceof ed?n:new ed(n)})}async setIgnoreCursorEvents(n){return Se("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return Se("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return Se("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return Se("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return Se("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return Se("plugin:window|set_overlay_icon",{label:this.label,value:n?$d(n):void 0})}async setProgressBar(n){return Se("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return Se("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return Se("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return Se("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(zi.WINDOW_RESIZED,i=>{i.payload=new $c(i.payload),n(i)})}async onMoved(n){return this.listen(zi.WINDOW_MOVED,i=>{i.payload=new dr(i.payload),n(i)})}async onCloseRequested(n){return this.listen(zi.WINDOW_CLOSE_REQUESTED,async i=>{const a=new rw(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(zi.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new dr(d.payload.position)}})}),a=await this.listen(zi.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new dr(d.payload.position)}})}),c=await this.listen(zi.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new dr(d.payload.position)}})}),u=await this.listen(zi.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(zi.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(zi.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(zi.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(zi.WINDOW_THEME_CHANGED,n)}}var vy;(function(e){e.Disabled="disabled",e.Throttle="throttle",e.Suspend="suspend"})(vy||(vy={}));var wy;(function(e){e.Default="default",e.FluentOverlay="fluentOverlay"})(wy||(wy={}));var Sy;(function(e){e.AppearanceBased="appearanceBased",e.Light="light",e.Dark="dark",e.MediumLight="mediumLight",e.UltraDark="ultraDark",e.Titlebar="titlebar",e.Selection="selection",e.Menu="menu",e.Popover="popover",e.Sidebar="sidebar",e.HeaderView="headerView",e.Sheet="sheet",e.WindowBackground="windowBackground",e.HudWindow="hudWindow",e.FullScreenUI="fullScreenUI",e.Tooltip="tooltip",e.ContentBackground="contentBackground",e.UnderWindowBackground="underWindowBackground",e.UnderPageBackground="underPageBackground",e.Mica="mica",e.Blur="blur",e.Acrylic="acrylic",e.Tabbed="tabbed",e.TabbedDark="tabbedDark",e.TabbedLight="tabbedLight"})(Sy||(Sy={}));var Cy;(function(e){e.FollowsWindowActiveState="followsWindowActiveState",e.Active="active",e.Inactive="inactive"})(Cy||(Cy={}));async function lw(e={}){return typeof e=="object"&&Object.freeze(e),await Se("plugin:dialog|open",{options:e})}/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=(...e)=>e.filter((n,i,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===i).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,i,a)=>a?a.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=e=>{const n=uw(e);return n.charAt(0).toUpperCase()+n.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=_.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:u,iconNode:d,...h},p)=>_.createElement("svg",{ref:p,...dw,width:n,height:n,stroke:e,strokeWidth:a?Number(i)*24/Number(n):i,className:Jx("lucide",c),...!u&&!fw(h)&&{"aria-hidden":"true"},...h},[...d.map(([y,g])=>_.createElement(y,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=(e,n)=>{const i=_.forwardRef(({className:a,...c},u)=>_.createElement(hw,{ref:u,iconNode:n,className:Jx(`lucide-${cw(ky(e))}`,`lucide-${e}`,a),...c}));return i.displayName=ky(e),i};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],eb=la("chevron-down",mw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],_w=la("chevron-right",pw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],yw=la("chevron-up",gw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],bw=la("ellipsis",xw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],ww=la("folder-git-2",vw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],tb=la("git-branch-plus",Sw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],kw=la("git-commit-horizontal",Cw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],nb=la("git-merge",jw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],Ew=la("panel-left-close",Mw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],Aw=la("panel-left-open",Tw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Dw=la("search",Nw),Rw=3.7,td=200,Pm=240,Un=540,zs=176,Zh=32,Ol=20,Bw=Pm/2,wl=Un+Bw,La=18,Oa=18,Jh="var(--border)";function jy(e){var n,i;return{start:new Date((i=(n=e.createdDate)!=null?n:e.divergedFromDate)!=null?i:e.lastCommitDate).getTime(),end:new Date(e.lastCommitDate).getTime()}}function $r(e,n){var a,c,u,d;const i="branch"in n&&n.branch?n.branch:e;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,parentShas:"parentShas"in n?(a=n.parentShas)!=null?a:[]:n.parentSha?[n.parentSha]:[],childShas:"childShas"in n?(c=n.childShas)!=null?c:[]:[],clusterKey:"clusterKey"in n&&(u=n.clusterKey)!=null?u:null,kind:n.kind,isRemote:(d=n.isRemote)!=null?d:!1}}function za(e){var n,i;return(i=(n=e.id)!=null?n:e.fullSha)!=null?i:""}function Lc(e,n){const i=new Date(e.date).getTime()-new Date(n.date).getTime();return i!==0?i:za(e).localeCompare(za(n))}function sb(e){return[...e].sort(Lc)}function Lw(e){var h,p,y,g,x,w;if(e.length<=1)return[...e];const n=new Map(e.map(C=>[za(C),C])),i=new Map,a=new Map;e.forEach(C=>i.set(za(C),0));for(const C of e){const j=((h=C.parentShas)!=null?h:[]).length>0?(p=C.parentShas)!=null?p:[]:C.parentSha?[C.parentSha]:[];for(const A of j){if(!A||!n.has(A))continue;const T=za(C);i.set(T,((y=i.get(T))!=null?y:0)+1);const R=(g=a.get(A))!=null?g:[];R.push(C),a.set(A,R)}}for(const C of a.values())C.sort(Lc);const c=e.filter(C=>{var j;return((j=i.get(za(C)))!=null?j:0)===0}).sort(Lc),u=[],d=new Set;for(;c.length>0;){const C=c.shift(),j=za(C);if(!d.has(j)){d.add(j),u.push(C);for(const A of(x=a.get(j))!=null?x:[]){const T=za(A),R=((w=i.get(T))!=null?w:0)-1;i.set(T,R),R===0&&c.push(A)}c.sort(Lc)}}return u.length===e.length?u:[...u,...e.filter(C=>!d.has(za(C))).sort(Lc)]}function ob(e,n){var i;return sb(((i=n[e])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function ib(e,n,i){return ob(e,i)}function em(e){var n;return e.length===0?null:(n=[...e].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function Ow(e,n){var u,d;if(!n||e.length===0)return em(e);const i=new Date(n).getTime();if(!Number.isFinite(i))return em(e);let a=null,c=null;for(const h of e){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const y=i-p;(!a||y<a.delta)&&(a={delta:y,commit:h})}else{const y=p-i;(!c||y<c.delta)&&(c={delta:y,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:em(e)}function nd(e,n,i){var c,u;if(!n)return null;const a=(c=e.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function zw(e,n,i){var g,x,w,C,j,A,T;const a=ib(e,i,n);if(a.length===0)return null;const c=a.map(R=>$r(e,R)),u=new Set(c.map(R=>R.id)),d=(x=(g=c[0])==null?void 0:g.parentSha)!=null?x:null,h=(C=(w=c.find(R=>R.kind==="branch-created"))==null?void 0:w.id)!=null?C:null,p=(j=c[0])==null?void 0:j.date,y=c.find(R=>h&&R.id===h||d&&R.id===d?!0:!R.parentSha||!u.has(R.parentSha));return y||((T=(A=Ow(c,p!=null?p:void 0))!=null?A:c[0])!=null?T:null)}function $w(e,n,i){var c,u,d,h,p;if(e.name===n)return null;const a=ob(e.name,i);if(a.length>0){const y=a.map(w=>$r(e.name,w)),g=new Set(y.map(w=>w.id)),x=(u=(c=y.find(w=>!w.parentSha||!g.has(w.parentSha)))!=null?c:y[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=e.presidesFromSha)!=null?d:e.divergedFromSha)!=null?h:e.createdFromSha)!=null?p:null}function Cp(e,n,i={},a={}){var ue,pe,Ne,Fe;const u=new Map(e.map(ne=>[ne.name,ne])),d=new Map,h=new Map;for(const ne of e){const O=((ue=i[ne.name])!=null?ue:[]).filter(se=>se.kind!=="branch-created").map(se=>new Date(se.date).getTime()).filter(se=>Number.isFinite(se)).sort((se,I)=>se-I)[0];O!=null&&h.set(ne.name,O)}const p=ne=>{const de=h.get(ne.name);return de!=null?de:jy(ne).start},y=ne=>{var O;const de=(O=a[ne.name])!=null?O:null;return de&&de!==ne.name&&(de===n||u.has(de))?de:ne.name===n?null:ne.parentBranch&&ne.parentBranch!==ne.name&&(ne.parentBranch===n||u.has(ne.parentBranch))?ne.parentBranch:null};for(const ne of e){if(ne.name===n)continue;const de=(pe=y(ne))!=null?pe:n,O=(Ne=d.get(de))!=null?Ne:[];O.push(ne),d.set(de,O)}for(const ne of d.values())ne.sort((de,O)=>p(de)-p(O)||de.name.localeCompare(O.name));const g=new Map,x=[],w=new Map,C=new Map,j=new Map;for(const ne of Object.values(i))for(const de of ne){const O=new Date(de.date).getTime();Number.isFinite(O)&&(de.fullSha&&j.set(de.fullSha,O),de.sha&&j.set(de.sha,O))}const A=(ne,de)=>({start:Math.min(ne,de),end:Math.max(ne,de)}),T=ne=>{var Q,be;const de=A(p(ne),jy(ne).end),O=[de],se=de.start,I=$w(ne,n,i),fe=I?j.get(I):void 0,xe=new Date((be=(Q=ne.divergedFromDate)!=null?Q:ne.createdDate)!=null?be:ne.lastCommitDate).getTime(),z=Number.isFinite(fe!=null?fe:NaN)?fe:Number.isFinite(xe)?xe:null;if(z==null)return O;const ae=A(z,se);return ae.start!==ae.end&&O.push(ae),O},R=Math.max(1,360*60*1e3*Rw),P=(ne,de)=>!(ne.start-de.end>=R||de.start-ne.end>=R),L=(ne,de)=>de.some(O=>{var se;return((se=C.get(ne))!=null?se:[]).some(I=>P(O,I))}),D=(ne,de=new Set)=>{const O=w.get(ne);if(O!=null)return O;if(de.has(ne))return 1;de.add(ne);const se=u.get(ne);if(!se||ne===n)return de.delete(ne),w.set(ne,0),0;const I=y(se),fe=I?D(I,de)+1:1;return de.delete(ne),w.set(ne,fe),fe},F=(ne,de=new Set)=>{var me,Le;const O=g.get(ne);if(O)return O.column;if(de.has(ne))return 0;de.add(ne);const se=u.get(ne);if(!se)return de.delete(ne),0;if(ne===n){const Ze={name:ne,column:0,parentName:null};g.set(ne,Ze),x.push(Ze);const Ve=T(se);return C.set(0,[...(me=C.get(0))!=null?me:[],...Ve]),de.delete(ne),0}const I=y(se),fe=I&&!de.has(I)?I:null,xe=fe?F(fe,de):0,z=Math.max(1,D(ne)),ae=Math.max(fe?xe+1:1,z),Q=T(se);let be=ae;for(;L(be,Q);)be+=1;const Me={name:ne,column:be,parentName:fe};return g.set(ne,Me),x.push(Me),C.set(be,[...(Le=C.get(be))!=null?Le:[],...Q]),de.delete(ne),be};F(n);const Y=e.filter(ne=>!g.has(ne.name)).sort((ne,de)=>p(ne)-p(de)||ne.name.localeCompare(de.name)),V=Y.filter(ne=>y(ne)!=null),X=Y.filter(ne=>y(ne)==null);for(const ne of V)F(ne.name);let le=Math.max(0,...x.map(ne=>ne.column))+1+1;for(const ne of X){const de=T(ne);let O=le;for(;L(O,de);)O+=1;const se={name:ne.name,column:O,parentName:null};g.set(ne.name,se),x.push(se),C.set(O,[...(Fe=C.get(O))!=null?Fe:[],...de]),le=O+1}return x.sort((ne,de)=>ne.column-de.column||ne.name.localeCompare(de.name))}function Iw(e,n,i,a){const c=new Map(e.map(h=>[h.name,h])),u=h=>{var y;const p=(y=i[h.name])!=null?y:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of e){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const sd=2.25,na=0,tm=0,Pw=3600*1e3,Hw=3600*1e3,qi=e=>{const n=e?new Date(e).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Po=(e,n)=>!e||!n?!1:e===n||e.startsWith(n)||n.startsWith(e);function My(e,n,i=new Map){var X,le,ue,pe,Ne,Fe,ne,de,O,se,I,fe,xe,z,ae;if(e.length===0)return new Map;const a=[...e].sort((Q,be)=>{const Me=qi(Q.date)-qi(be.date);return Me!==0?Me:Q.id!==be.id?Q.id.localeCompare(be.id):Q.visualId.localeCompare(be.visualId)}),c=new Map;for(const Q of e){const be=(X=Q.parentSha)!=null?X:null;if(be){const Me=(le=c.get(be))!=null?le:new Set;Me.add(Q.id),c.set(be,Me)}for(const Me of(ue=i.get(Q.id))!=null?ue:[]){if(!Me)continue;const me=(pe=c.get(Me))!=null?pe:new Set;me.add(Q.id),c.set(Me,me)}}const u=new Map,d=new Map,h=new Map,p=new Set,y=new Map,g=new Map,x=new Map,w=new Map;for(const Q of e){const be=(Ne=y.get(Q.branchName))!=null?Ne:new Set;be.add(Q.id),y.set(Q.branchName,be);const Me=(ne=(Fe=n.get(Q.branchName))==null?void 0:Fe.column)!=null?ne:0,me=(de=g.get(Q.id))!=null?de:new Set;me.add(Me),g.set(Q.id,me);const Le=new Set;Q.parentSha&&Le.add(Q.parentSha),x.set(Q.visualId,Le);const Ze=new Set(Le);for(const Ve of(O=i.get(Q.id))!=null?O:[])Ve&&Ze.add(Ve);w.set(Q.visualId,Ze)}const C=new Set(Array.from(g.keys())),j=Array.from(C),A=new Map,T=Q=>{const be=[];for(const Me of j)Po(Me,Q)&&be.push(Me);return be},R=new Map;for(const Q of j)R.set(Q,new Set);for(const Q of e){const be=T(Q.id);if(be.length===0)continue;const Me=(se=w.get(Q.visualId))!=null?se:new Set,me=new Set;for(const Le of Me)for(const Ze of T(Le))me.add(Ze);for(const Le of be){const Ze=(I=R.get(Le))!=null?I:new Set;for(const Ve of me)Ze.add(Ve);R.set(Le,Ze)}}const P=new Map,L=(Q,be=new Set)=>{var Ze;const Me=P.get(Q);if(Me)return Me;if(be.has(Q))return new Set;be.add(Q);const me=(Ze=R.get(Q))!=null?Ze:new Set,Le=new Set;for(const Ve of me){Le.add(Ve);for(const ht of L(Ve,be))Le.add(ht)}return be.delete(Q),P.set(Q,Le),Le},D=(Q,be)=>{if(Po(Q,be))return!0;const Me=T(Q),me=T(be);for(const Le of Me){const Ze=L(Le);for(const Ve of me)if(Ze.has(Ve))return!0}for(const Le of me){const Ze=L(Le);for(const Ve of Me)if(Ze.has(Ve))return!0}return!1};let F=1;const Y=(Q,be)=>{var ct,at,_t,Ie,xt,gt,kt,Xe,ot;const Me=(at=(ct=n.get(Q.branchName))==null?void 0:ct.column)!=null?at:0,me=(_t=y.get(Q.branchName))!=null?_t:new Set,Ze=!(!!Q.parentSha&&me.has(Q.parentSha))&&Q.parentSha?Q.parentSha:null,Ve=Array.from(be).flatMap(U=>T(U).flatMap(J=>{var we;return(we=A.get(J))!=null?we:[]})),ht=(Q.kind==="branch-created"||Q.kind==="stash")&&Ve.length>0?Math.max(...Ve)+1:null,Tt=Ve.length>0?Math.max(...Ve)+1:1,Ct=(Ie=c.get(Q.id))!=null?Ie:new Set,$t=Array.from(Ct).flatMap(U=>{var J;return Array.from((J=g.get(U))!=null?J:[])}).some(U=>U!==Me),pt=new Date(Q.date).getTime(),qt=Math.max(Tt,1);let Kt=null;for(let U=qt;U<F;U+=1){const J=(xt=d.get(U))!=null?xt:[];if(J.length===0||$t||p.has(U))continue;const we=(gt=w.get(Q.visualId))!=null?gt:new Set;if(!(J.some(Ae=>D(Q.id,Ae.sha)?!0:Array.from(we).some(st=>Po(st,Ae.sha)))||J.some(Ae=>Ae.column===Me)||!Number.isFinite(pt)||!J.every(Ae=>{if(!Number.isFinite(Ae.time))return!1;const st=!!Ze&&!!Ae.branchEntryParentSha&&Ze===Ae.branchEntryParentSha?Hw:Pw;return Math.abs(Ae.time-pt)<=st}))){Kt=U;break}}ht!=null&&(Kt=ht),Kt==null&&(Kt=Math.max(Tt,F)),u.set(Q.visualId,Kt),Kt>=F&&(F=Kt+1);const K=(kt=d.get(Kt))!=null?kt:[];K.push({visualId:Q.visualId,sha:Q.id,column:Me,time:pt,branchEntryParentSha:Ze}),d.set(Kt,K),$t&&p.add(Kt);for(const U of be){const J=(Xe=h.get(U))!=null?Xe:[];J.push(Kt),h.set(U,J)}const De=(ot=A.get(Q.id))!=null?ot:[];De.push(Kt),A.set(Q.id,De)};for(const Q of a){const be=(fe=x.get(Q.visualId))!=null?fe:new Set;Y(Q,be)}const V=Math.max(1,a.length*2);for(let Q=0;Q<V;Q+=1){let be=!1;for(const Me of a){const me=(xe=x.get(Me.visualId))!=null?xe:new Set;if(me.size===0)continue;const Le=(z=u.get(Me.visualId))!=null?z:1;let Ze=1;for(const Ve of me){const ht=T(Ve).flatMap(Tt=>{var Ct;return(Ct=A.get(Tt))!=null?Ct:[]});ht.length>0&&(Ze=Math.max(Ze,Math.max(...ht)+1))}if(Le<Ze){u.set(Me.visualId,Ze);const Ve=(ae=A.get(Me.id))!=null?ae:[];Ve.length===0?A.set(Me.id,[Ze]):A.set(Me.id,[...Ve.slice(0,-1),Ze]),be=!0}}if(!be)break}return u}function kp(e){var Vo,ci,Pt,Ys,ks,ki,co,Ko,ps,Ws,Zs,bn,js,Js,Ms,Fs,_n,Es,eo,Yo,Ts,ji,Qo,To,uo,Zo,ui,cs,fo,Wo,As,ho,Ao,Ln,Xn,ts,No,Sn,di,Ns,mo,Mi,Jo,ei,Ei,ti,Et,to,Ji,Pi,Hi,wo,Do,So,fi;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,unpushedCommitShasByBranch:d={},defaultBranch:h,branchCommitPreviews:p,branchParentByName:y={},branchUniqueAheadCounts:g,manuallyOpenedClumps:x,manuallyClosedClumps:w,isDebugOpen:C,gridSearchQuery:j,gridFocusSha:A,checkedOutRef:T,orientation:R="horizontal",nodePositionOverrides:P={}}=e,L=R==="horizontal",D=new Map(i.map(E=>[E.name,E])),F=new Map(n.map(E=>[E.name,E])),Y=Lw([...a.map(E=>{var W,ce,Ce,Pe;return{id:E.fullSha,branchName:h,message:(W=E.prTitle)!=null?W:E.sha,author:"",date:E.date,parentSha:(Ce=(ce=E.parentShas)==null?void 0:ce[0])!=null?Ce:null,parentShas:(Pe=E.parentShas)!=null?Pe:[]}}),...((Vo=p[h])!=null?Vo:[]).map(E=>$r(h,E)),...c.map(E=>$r(E.branch||"",E)),...u.map(E=>$r(E.branch||"",E))]),V=new Map,X=new Map;for(const E of i){if(E.name===h)continue;const W=ib(E.name,g,p);X.set(E.name,W);const ce=sb(W.map(Vt=>$r(E.name,Vt)));if(ce.length>0){V.set(E.name,ce);continue}const Ce=(Ys=(Pt=(ci=E.presidesFromSha)!=null?ci:E.divergedFromSha)!=null?Pt:E.createdFromSha)!=null?Ys:null;if(!Ce)continue;const Pe=(ks=c.find(Vt=>Po(Vt.fullSha,Ce)||Po(Vt.sha,Ce)))==null?void 0:ks.date,rt=Pe?null:(ki=Object.values(p).flat().find(Vt=>Po(Vt.fullSha,Ce)||Po(Vt.sha,Ce)))==null?void 0:ki.date,Wt={id:`BRANCH_HEAD:${E.name}:${Ce}`,branchName:E.name,message:`Branch ${E.name}`,author:E.lastCommitAuthor,date:(ps=(Ko=(co=Pe!=null?Pe:rt)!=null?co:E.createdDate)!=null?Ko:E.divergedFromDate)!=null?ps:E.lastCommitDate,parentSha:Ce,clusterKey:null,childShas:[],kind:"branch-created"};V.set(E.name,[Wt])}const le=new Set(Y.map(E=>E.id)),ue=(Ws=[...Y].sort((E,W)=>qi(E.date)-qi(W.date)||E.id.localeCompare(W.id))[0])!=null?Ws:null,pe=new Map(Array.from(V.entries()).map(([E,W])=>[E,new Set(W.map(ce=>ce.id))])),Ne=new Map;for(const E of i){if(E.name===h)continue;const W=zw(E.name,p,g);if(W){Ne.set(E.name,W);continue}const ce=(Zs=V.get(E.name))==null?void 0:Zs[0];if(ce){const Ce=(Js=(js=(bn=E.presidesFromSha)!=null?bn:E.divergedFromSha)!=null?js:E.createdFromSha)!=null?Js:null;Ne.set(E.name,{...ce,parentSha:Ce})}}const Fe=new Map;for(const[E,W]of V.entries()){const ce=W.find(Ce=>Ce.kind!=="branch-created");ce&&Fe.set(E,ce)}const ne=new Map;for(const[E,W]of V.entries()){const ce=W.filter(rt=>rt.kind!=="branch-created"),Pe=(Ms=(ce.length>0?ce:W)[0])!=null?Ms:null;Pe&&ne.set(E,Pe)}const de=new Map;for(const E of i){if(E.name===h)continue;const W=(Fs=ne.get(E.name))!=null?Fs:null,ce=(Es=(_n=Ne.get(E.name))==null?void 0:_n.parentSha)!=null?Es:null,Ce=(Ts=(Yo=(eo=E.presidesFromSha)!=null?eo:E.divergedFromSha)!=null?Yo:E.createdFromSha)!=null?Ts:null,Pe=(ji=W==null?void 0:W.parentSha)!=null?ji:null,rt=(Qo=Pe!=null?Pe:ce)!=null?Qo:Ce;rt&&de.set(E.name,rt)}const O=E=>{var rt,Wt,Vt,At,nn,vn,ln,Gn;const W=(rt=y[E.name])!=null?rt:null;if(!(W&&W!==h&&W!==E.name&&D.has(W)))return W!=null?W:"";const Ce=(At=(Vt=(Wt=de.get(E.name))!=null?Wt:E.presidesFromSha)!=null?Vt:E.divergedFromSha)!=null?At:E.createdFromSha;if(Ce&&((nn=pe.get(W))!=null?nn:new Set).has(Ce))return W;const Pe=(ln=(vn=Ne.get(E.name))==null?void 0:vn.parentSha)!=null?ln:null;return Pe&&((Gn=pe.get(W))!=null?Gn:new Set).has(Pe),W},se=E=>{var Pe,rt,Wt,Vt,At,nn,vn,ln;const W=Ne.get(E.name),ce=(At=(Vt=(Wt=(rt=(Pe=de.get(E.name))!=null?Pe:W==null?void 0:W.parentSha)!=null?rt:E.presidesFromSha)!=null?Wt:E.divergedFromSha)!=null?Vt:E.createdFromSha)!=null?At:null;if(!E.parentBranch&&!ce||!ce)return null;if(O(E)===h){if(le.has(ce))return ce;const Gn=(nn=W==null?void 0:W.parentSha)!=null?nn:null;return Gn&&le.has(Gn)?Gn:(ln=(vn=ue==null?void 0:ue.id)!=null?vn:Gn)!=null?ln:ce}return le.has(ce),ce},I=E=>se(E),fe=new Map;for(const E of[...c,...u]){const W={...$r(E.branch||"",E),visualId:`${E.branch||""}:${E.fullSha}`};fe.set(E.fullSha,W)}const xe=new Map(fe),z=E=>{xe.has(E.id)||xe.set(E.id,E)},ae=new Map(Object.entries(d).map(([E,W])=>[E,new Set(W)])),Q=new Map(Array.from(V.entries()).map(([E,W])=>[E,new Set(W.map(ce=>ce.id))])),be=new Set;for(const E of Q.values())for(const W of E)be.add(W);for(const E of Y)be.has(E.id)||z({...E,visualId:`${E.branchName}:${E.id}`});for(const[E,W]of V.entries())for(const ce of W)z({...ce,visualId:`${E}:${ce.id}`});const me=[...Array.from(xe.values()).map(E=>({...E,visualId:`${E.branchName}:${E.id}`}))].sort((E,W)=>qi(E.date)-qi(W.date)||E.id.localeCompare(W.id)),Le=new Map;for(const E of me){const W=(To=Le.get(E.branchName))!=null?To:new Set;W.add(E.id),Le.set(E.branchName,W)}const Ze=(E,W)=>{const ce=Le.get(E);if(!ce||ce.size===0)return!1;for(const Ce of ce)if(Po(Ce,W))return!0;return!1},Ve=(E,W)=>{const ce=Array.from(Le.entries()).filter(([Ce])=>Ce!==W).filter(([,Ce])=>Array.from(Ce).some(Pe=>Po(Pe,E))).map(([Ce])=>Ce);return ce.length>0?ce.sort()[0]:E.slice(0,7)},ht=[],Tt=new Map,Ct=new Map;for(const E of a){const W=E.fullSha,ce=E.targetBranch,Ce=E.targetCommitSha;if(!W||!ce||!Ce||!Ze(ce,Ce))continue;const Pe=((uo=E.parentShas)!=null?uo:[]).slice(1).filter(Wt=>!!Wt&&!Po(Wt,W));if(Pe.length===0)continue;const rt=(Zo=Ct.get(W))!=null?Zo:new Set;for(const Wt of Pe){rt.add(Wt);const Vt=Ve(Wt,ce);ht.push({sourceCommitSha:Wt,sourceBranchName:Vt,mergeCommitSha:W,targetCommitSha:Ce,targetBranchName:ce});const At=(ui=Tt.get(Vt))!=null?ui:new Map,nn=(cs=At.get(Wt))!=null?cs:new Set;nn.add(ce),At.set(Wt,nn),Tt.set(Vt,At)}Ct.set(W,rt)}const lt=new Map;for(const E of i){if(E.name===h)continue;const W=se(E);W&&lt.set(E.name,W)}const $t=new Map;for(const E of me){const W=Ct.get(E.id);if(W&&W.size>0){const Pe=(fo=$t.get(E.id))!=null?fo:new Set;for(const rt of W)Pe.add(rt);$t.set(E.id,Pe)}if(E.branchName===h)continue;const ce=lt.get(E.branchName);if(!ce||ce===E.id)continue;const Ce=(Wo=$t.get(E.id))!=null?Wo:new Set;Ce.add(ce),$t.set(E.id,Ce)}const pt=new Map,qt=new Map;for(const E of me){if(qt.set(E.id,E),E.parentSha){const W=(As=pt.get(E.parentSha))!=null?As:new Set;W.add(E.id),pt.set(E.parentSha,W)}for(const W of(ho=$t.get(E.id))!=null?ho:[]){if(!W)continue;const ce=(Ao=pt.get(W))!=null?Ao:new Set;ce.add(E.id),pt.set(W,ce)}}const Kt=new Map;for(const[E,W]of pt.entries())Kt.set(E,Array.from(W));const K=new Set(["branch-created","stash"]),De=new Set,ct=E=>{if(!E)return null;const W=me.find(ce=>Po(ce.id,E)||Po(ce.visualId.split(":").slice(1).join(":"),E));return W!=null?W:null};for(const E of me){if(E.parentSha){const ce=ct(E.parentSha),Ce=!!ce&&De.has(ce.visualId);ce&&(E.kind==="stash"||E.kind==="branch-created"||Ce)&&De.add(ce.visualId)}const W=(Ln=pt.get(E.id))!=null?Ln:new Set;(W.size>1||Array.from(W).map(ce=>qt.get(ce)).some(ce=>ce!=null&&ce.kind!=null&&K.has(ce.kind)))&&De.add(E.visualId)}const at=me.map(E=>{var W,ce;return{...E,childShas:(ce=(W=Kt.get(E.id))!=null?W:E.childShas)!=null?ce:[]}}),_t=My(at,F,$t),Ie=new Map;for(const E of at){const W=(Xn=Ie.get(E.branchName))!=null?Xn:[];W.push(E),Ie.set(E.branchName,W)}const xt=new Map,gt=new Map,kt=new Map,Xe=new Map,ot=new Map,U=(E,W)=>{var nn,vn,ln,Gn,sn;if(W.length===0)return[];const ce=[...W].sort((Ut,Bn)=>{var Bs,Ti;const ys=(Bs=_t.get(Ut.visualId))!=null?Bs:Number.MAX_SAFE_INTEGER,po=(Ti=_t.get(Bn.visualId))!=null?Ti:Number.MAX_SAFE_INTEGER;return ys!==po?ys-po:qi(Ut.date)-qi(Bn.date)||Ut.id.localeCompare(Bn.id)}),Ce=new Map;let Pe=null,rt=0;const Wt=Ut=>{if(Ut.kind==="uncommitted")return"uncommitted";if(Ut.kind==="stash")return"stash";if(Ut.kind==="branch-created")return"branch-created";const Bn=ae.get(Ut.branchName);return Bn!=null&&Bn.has(Ut.id)?"unpushed":"pushed"};let Vt=null;for(const Ut of ce){const Bn=Ut.kind==="stash"||Ut.kind==="branch-created",ys=De.has(Ut.visualId);if(Bn)continue;const po=Wt(Ut);(!Pe||Vt!=null&&Vt!==po)&&(rt+=1,Pe=`cluster:${E}:segment:${rt}`);const Bs=(nn=Ce.get(Pe))!=null?nn:[];Bs.push(Ut),Ce.set(Pe,Bs),ys&&(Pe=null),Vt=po}const At=[];for(const[Ut,Bn]of Ce.entries()){if(Bn.length===0)continue;const po=[...Bn].sort((_o,Co)=>{var go,Bo;const ko=(go=_t.get(_o.visualId))!=null?go:Number.MIN_SAFE_INTEGER,Ro=(Bo=_t.get(Co.visualId))!=null?Bo:Number.MIN_SAFE_INTEGER;return ko!==Ro?Ro-ko:qi(Co.date)-qi(_o.date)||Co.id.localeCompare(_o.id)})[0].visualId,Bs={branchName:E,key:Ut,commitIds:Bn.map(_o=>_o.visualId),leadId:po,count:Bn.length};At.push(Bs);const Ti=(vn=ot.get(Ut))!=null?vn:0;if(!Xe.has(Ut))Xe.set(Ut,po);else{const _o=Xe.get(Ut),Co=qt.get(_o.split(":").slice(1).join(":"));if(Co){const ko=(ln=_t.get(Co.visualId))!=null?ln:Number.MIN_SAFE_INTEGER;((Gn=_t.get(po))!=null?Gn:Number.MIN_SAFE_INTEGER)>ko&&Xe.set(Ut,po)}}ot.set(Ut,Math.max(Ti,Bn.length));for(const _o of Bs.commitIds){gt.set(_o,Ut);const Co=_o.split(":").slice(1).join(":"),ko=(sn=kt.get(Co))!=null?sn:[];ko.includes(Ut)||ko.push(Ut),kt.set(Co,ko)}}return At};for(const[E,W]of Ie.entries())xt.set(E,U(E,W));const J=new Map;for(const E of at)J.set(E.id,E);const we=E=>{if(!E)return"none";const W=Array.from(J.values()).find(ce=>Po(ce.id,E)||Po(ce.id.slice(0,7),E)||Po(E,ce.id));return W?`${W.id.slice(0,7)} ${W.branchName}`:E.slice(0,7)},je=C?["Lane rows (expected):",...[...n].sort((E,W)=>E.column-W.column||E.name.localeCompare(W.name)).map(E=>{var W;return`  row=${E.column} branch=${E.name} parent=${(W=E.parentName)!=null?W:"none"}`}),"",...i.flatMap(E=>{var Wt,Vt,At,nn,vn,ln,Gn,sn;const W=(Wt=p[E.name])!=null?Wt:[],ce=[...(Vt=X.get(E.name))!=null?Vt:[]].reverse(),Ce=new Set(((At=V.get(E.name))!=null?At:[]).map(Ut=>Ut.id)),Pe=(vn=(nn=ce.find(Ut=>!Ut.parentSha||!ce.some(Bn=>{var ys;return Po(Bn.fullSha,(ys=Ut.parentSha)!=null?ys:"")})))!=null?nn:ce[0])!=null?vn:null,rt=(Gn=(ln=Pe==null?void 0:Pe.parentSha)!=null?ln:de.get(E.name))!=null?Gn:null;return[`Branch ${E.name}`,`  ahead=${(sn=g[E.name])!=null?sn:0} previews=${ce.length} rendered=${Ce.size}`,`  db parent commit=${we(rt)}`,`  db child commit=${Pe?`${Pe.fullSha.slice(0,7)} ${E.name}`:"none"}`,...ce.map(Ut=>{const Bn=Ce.has(Ut.fullSha)?"visible":"hidden",ys=Ce.has(Ut.fullSha)?"kept by render set":"dropped by render set";return`  ${Bn} ${Ut.fullSha.slice(0,7)} ${Ut.message} [${ys}]`}),W.length===0?"  no preview data":null].filter(Ut=>Ut!=null)})]:[],tt=C?Array.from(V.entries()).map(([E,W])=>[`Branch debug ${E}`,...W.map(ce=>`  ${ce.id.slice(0,7)} ${ce.message}`)].join(`
`)):[],Ue=_t,Ae=Pm/sd,ye=20/sd,st=L?Un+Ae+ye:td+Ae+ye,We=L?td+Ae+ye:wl,nt=Math.max(0,...at.map(E=>{var W;return(W=Ue.get(E.visualId))!=null?W:1})),Re=at.map(E=>{var Pe,rt;const W=F.get(E.branchName),ce=(Pe=Ue.get(E.visualId))!=null?Pe:1,Ce=(rt=W==null?void 0:W.column)!=null?rt:0;return L?{commit:E,row:ce,column:Ce,x:Oa+(ce-1)*st,y:La+Ce*We}:{commit:E,row:ce,column:Ce,x:Oa+Ce*wl,y:La+(nt-ce)*st}}),Je=E=>{var ce;const W=(ce=P[E.commit.visualId])!=null?ce:P[E.commit.id];return W?{...E,x:W.x,y:W.y}:E},bt=Re.map(Je),vt=j.trim().toLowerCase(),Ke=vt?bt.filter(E=>{const W=E.commit.id.toLowerCase(),ce=E.commit.id.slice(0,7).toLowerCase(),Ce=E.commit.message.toLowerCase(),Pe=E.commit.branchName.toLowerCase();return W.includes(vt)||ce.includes(vt)||Ce.includes(vt)||Pe.includes(vt)}):bt,Rt=A&&(ts=bt.find(E=>E.commit.id===A))!=null?ts:null,wt=new Set(Ke.map(E=>E.commit.id)),mt=(No=T==null?void 0:T.headSha)!=null?No:null,rn=(()=>{var W,ce;const E=(W=T==null?void 0:T.branchName)!=null?W:null;return!mt||!E?null:(ce=gt.get(`${E}:${mt}`))!=null?ce:null})(),ft=new Set;for(const[E,W]of ot.entries())W>1&&E!==rn&&ft.add(E);const Ht=[...me].filter(E=>{var rt;const W=gt.get(E.visualId);if(!W)return!0;const ce=Xe.get(W),Ce=(rt=ot.get(W))!=null?rt:1,Pe=x.has(W)||!ft.has(W)&&!w.has(W);return Ce<=1||Pe||ce===E.visualId}),dn=My(Ht,F,$t),Ot=Pm/sd,St=20/sd,fn=L?Un+Ot+St:td+Ot+St,ls=L?td+Ot+St:wl,Qt=Math.max(0,...me.map(E=>{var W;return(W=_t.get(E.visualId))!=null?W:1})),pn=Math.max(0,...Ht.map(E=>{var W;return(W=dn.get(E.visualId))!=null?W:1})),Jt=Math.max(0,Qt-pn),tn=[...Ht.map(E=>{var Pe,rt;const W=F.get(E.branchName),ce=(Pe=dn.get(E.visualId))!=null?Pe:1,Ce=(rt=W==null?void 0:W.column)!=null?rt:0;return Je(L?{commit:E,row:ce,column:Ce,x:Oa+(Jt+ce-1)*fn,y:La+Ce*ls}:{commit:E,row:ce,column:Ce,x:Oa+Ce*wl,y:La+(pn-ce)*fn})})].sort((E,W)=>E.row!==W.row?E.row-W.row:E.column!==W.column?E.column-W.column:E.commit.visualId.localeCompare(W.commit.visualId)).map(E=>({...E})),Ge=new Set;for(const E of tn){let W=E.row,ce=`${E.column}:${W}`;for(;Ge.has(ce);)W+=1,ce=`${E.column}:${W}`;E.row=W,Ge.add(ce)}const $n=Math.max(0,...tn.map(E=>E.row));for(const E of tn){if(L){E.x=Oa+(Jt+E.row-1)*fn,E.y=La+E.column*ls;continue}E.x=Oa+E.column*wl,E.y=La+($n-E.row)*fn}const In=new Map;for(const E of tn){const W=(Sn=In.get(E.commit.id))!=null?Sn:[];W.push(E),In.set(E.commit.id,W)}const Ds=new Map;for(const E of tn){const W=gt.get(E.commit.visualId);if(!W)continue;const ce=Ds.get(W);(!ce||(L?E.x>ce.x:E.y<ce.y))&&Ds.set(W,E)}const Vn=(E,W)=>`${E.toFixed(1)} ${W.toFixed(1)}`,bo=Math.max(0,...tn.map(E=>E.row)),Is=Math.max(0,...n.map(E=>E.column)),lo=Math.max(0,...tn.map(E=>E.x+Un)),Ps=Math.max(0,...tn.map(E=>E.y+Ol+zs)),Zt=Math.max(L?Oa*2+Math.max(0,bo-1)*fn+Un+Zh+St:Oa*2+(Is+1)*wl,lo+Oa),jn=Math.max(L?La*2+Is*ls+zs+Zh+St:La*2+Math.max(0,bo-1)*fn+zs+Zh+St,Ps+La),yn=[],Hs=new Map(i.map(E=>{var ce,Ce;const W=new Date((Ce=(ce=E.createdDate)!=null?ce:E.divergedFromDate)!=null?Ce:E.lastCommitDate).getTime();return[E.name,Number.isFinite(W)?W:0]})),Rn=E=>{var W;return(W=Hs.get(E))!=null?W:0},hs=[],en=E=>{C&&hs.push(E)},es=new Set,vo=new Map,ws=(E,W)=>{var Ce;const ce=(Ce=vo.get(E))!=null?Ce:[];ce.includes(W)||ce.push(W),vo.set(E,ce)},Ks=new Set,Rs=new Set,qn=new Set,gs=(E,W)=>{var Pe,rt;if(!E)return null;const ce=nd(In,E,W);if(ce)return ce;const Ce=(Pe=gt.get(`${W!=null?W:h}:${E}`))!=null?Pe:gt.get(E);return Ce&&(rt=Ds.get(Ce))!=null?rt:null},Mn=new Set;for(const E of i){const W=I(E);W&&Rs.add(W);const ce=(di=de.get(E.name))!=null?di:null;ce&&qn.add(ce)}const Uo=E=>{var Pe;const W=gs(E.id,E.branchName);if(W)return W;const ce=gt.get(E.visualId);if(!ce)return null;const Ce=Xe.get(ce);return Ce&&(Pe=tn.find(rt=>rt.commit.id===Ce))!=null?Pe:null},Si=(E,W)=>E?nd(In,E,W):null,Eo=(E,W)=>L?{x:E.x-na,y:E.y+zs/2,face:"left"}:{x:E.x+Un/2,y:E.y+zs+na,face:"bottom"},Ii=E=>L?{x:E.x-na,y:E.y+zs/2,face:"left"}:{x:E.x+Un/2,y:E.y+zs+na,face:"bottom"},Qs=(E,W)=>E.column!==W.column?!0:L?E.commit.branchName!==W.commit.branchName:!1,Us=(E,W,ce)=>{if(!L)return{x:W?E.x+Un:E.x+Un/2,y:W?E.y+zs/2:E.y,face:W?"right":"top"};if(!W)return{x:E.x+Un+na,y:E.y+zs/2,face:"right"};if(ce&&ce.column===E.column&&ce.commit.branchName!==E.commit.branchName){if(ce.x>E.x)return{x:E.x+Un/2,y:E.y+zs+na,face:"bottom"};if(ce.x<E.x)return{x:E.x+Un/2,y:E.y-na,face:"top"}}return!ce||ce.column===E.column?{x:E.x+Un+na,y:E.y+zs/2,face:"right"}:ce.column>E.column?{x:E.x+Un/2,y:E.y+zs+na,face:"bottom"}:{x:E.x+Un/2,y:E.y-na,face:"top"}},Cs=E=>L?{x:E.x+Un/2,y:E.y+zs+na,face:"bottom"}:{x:E.x+Un,y:E.y+zs/2,face:"right"},Kn=(E,W)=>nd(In,E,W),wn=(E,W)=>Si(E,W),Vs=[],xn=new Set;for(const E of ht){const W=(Ns=gs(E.targetCommitSha,E.targetBranchName))!=null?Ns:null;if(!W){en({id:`merge:${E.mergeCommitSha}:${E.sourceCommitSha}:target`,kind:"merge",parent:E.sourceCommitSha,child:E.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const ce=E.sourceCommitSha,Ce=`merge:${E.mergeCommitSha}:${ce!=null?ce:"unknown"}`;if(!ce||Po(ce,E.targetCommitSha)){en({id:Ce,kind:"merge",parent:ce!=null?ce:"unknown",child:E.targetCommitSha,rendered:!1,reason:ce?"merged parent equals merge target sha":"missing merged parent sha"});continue}const Pe=(mo=nd(In,ce))!=null?mo:null;if(!Pe){en({id:Ce,kind:"merge",parent:ce,child:E.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(Pe.commit.id===W.commit.id){en({id:Ce,kind:"merge",parent:Pe.commit.id,child:W.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let rt,Wt,Vt;const At=L?W.x+Un/2:W.x+Un-tm,nn=L?W.y+zs+tm:W.y+zs/2,vn=L?"bottom":"right";L?(rt=Pe.x+Un+tm,Wt=Pe.y+zs/2,Vt="right"):(rt=Pe.x+Un/2,Wt=Pe.y,Vt="top");const ln=`${rt.toFixed(2)}:${Wt.toFixed(2)}:${At.toFixed(2)}:${nn.toFixed(2)}`;if(xn.has(ln)){en({id:Ce,kind:"merge",parent:Pe.commit.id,child:W.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}xn.add(ln),Vs.push({id:Ce,fromX:rt,fromY:Wt,toX:At,toY:nn,fromFace:Vt,toFace:vn,zIndex:Rn(Pe.commit.branchName)}),en({id:Ce,kind:"merge",parent:Pe.commit.id,child:W.commit.id,rendered:!0,reason:`merge connector rendered to ${E.targetBranchName}`})}const ms=new Set;for(const E of i){if(E.name===h)continue;const W=Ne.get(E.name);if(!W)continue;const ce=O(E),Ce=Kn((Mi=de.get(E.name))!=null?Mi:"",ce),Pe=(Jo=Fe.get(E.name))!=null?Jo:W,rt=(ei=wn(Pe.id,E.name))!=null?ei:Uo(Pe);if(!Ce||!rt||Ce.commit.id===rt.commit.id){const vn=gt.get(`${E.name}:${W.id}`),ln=gt.get(`${E.name}:${Pe.id}`),Gn=!!vn&&!ft.has(vn),sn=!!ln&&!ft.has(ln),Ut=!!vn&&!x.has(vn)&&(Gn?w.has(vn):!0),Bn=!!ln&&!x.has(ln)&&(sn?w.has(ln):!0);!Ce&&!Ut&&ws((Ei=rt==null?void 0:rt.commit.id)!=null?Ei:W.id,"Missing parent node"),!rt&&!Bn&&ws(W.id,"Missing child node"),en({id:`branch:${(ti=Ce==null?void 0:Ce.commit.id)!=null?ti:"null"}->${(Et=rt==null?void 0:rt.commit.id)!=null?Et:"null"}`,kind:"branch",parent:(to=Ce==null?void 0:Ce.commit.id)!=null?to:"null",child:(Ji=rt==null?void 0:rt.commit.id)!=null?Ji:"null",rendered:!1,reason:Ce?rt?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Wt=`branch:${Ce.commit.id}->${rt.commit.id}`;if(Mn.has(Wt)){en({id:Wt,kind:"branch",parent:Ce.commit.id,child:rt.commit.id,rendered:!1,reason:"duplicate connector key"});continue}Mn.add(Wt),Ks.add(Ce.commit.id);const Vt=Qs(Ce,rt);Ce.commit.branchName!==rt.commit.branchName&&ms.add(Ce.commit.id);const At=Cs(Ce),nn=Ii(rt);yn.push({id:Wt,fromX:At.x,fromY:At.y,toX:nn.x,toY:nn.y,fromFace:At.face,toFace:nn.face,zIndex:Rn(rt.commit.branchName)}),en({id:Wt,kind:"branch",parent:Ce.commit.id,child:rt.commit.id,rendered:!0,reason:Vt?"branch connector rendered":L?"horizontal connector rendered":"vertical connector rendered"})}for(const E of me){const W=Uo(E);if(!W)continue;const ce=(Pi=E.parentSha)!=null?Pi:null;if(!ce)continue;const Ce=(Hi=gs(ce,E.branchName))!=null?Hi:Kn(ce,E.branchName);if(!Ce){const At=(wo=gt.get(`${E.branchName}:${ce}`))!=null?wo:gt.get(ce),nn=!!At&&!ft.has(At);!!At&&!x.has(At)&&(nn?w.has(At):!0)||ws(E.id,"Missing parent node"),en({id:`${E.visualId}->${ce}`,kind:"ancestry",parent:ce,child:E.id,rendered:!1,reason:"missing parent node"});continue}if(W.commit.id===Ce.commit.id){ws(W.commit.id,"Parent and child resolve to the same node"),en({id:`${Ce.commit.id}->${W.commit.id}`,kind:"ancestry",parent:Ce.commit.id,child:W.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const Pe=`${E.branchName}:${(Do=Ce.commit.visualId)!=null?Do:Ce.commit.id}->${W.commit.visualId}`;if(Mn.has(Pe)){ws(Ce.commit.id,"Duplicate connector key"),ws(W.commit.id,"Duplicate connector key"),en({id:Pe,kind:"ancestry",parent:Ce.commit.id,child:W.commit.id,rendered:!1,reason:"duplicate connector key"});continue}Mn.add(Pe),Ks.add(Ce.commit.id);const rt=Qs(Ce,W),Wt=Us(Ce,rt,W),Vt=Eo(W);yn.push({id:Pe,fromX:Wt.x,fromY:Wt.y,toX:Vt.x,toY:Vt.y,fromFace:Wt.face,toFace:Vt.face,zIndex:Rn(W.commit.branchName)}),en({id:Pe,kind:"ancestry",parent:Ce.commit.id,child:W.commit.id,rendered:!0,reason:rt?"ancestry connector rendered":L?"horizontal ancestry rendered":"vertical ancestry rendered"}),es.add(Ce.commit.id),es.add(W.commit.id)}const Ci=new Map;for(const E of tn){const W=(So=Ci.get(E.commit.branchName))!=null?So:[];W.push(E),Ci.set(E.commit.branchName,W)}for(const[E,W]of Ci.entries()){if(W.length<2)continue;const ce=[...W].sort((Ce,Pe)=>{var rt,Wt,Vt,At,nn,vn,ln,Gn;return Ce.row!==Pe.row?Ce.row-Pe.row:qi((Wt=(rt=Ce==null?void 0:Ce.commit)==null?void 0:rt.date)!=null?Wt:null)-qi((At=(Vt=Pe==null?void 0:Pe.commit)==null?void 0:Vt.date)!=null?At:null)||((vn=(nn=Ce==null?void 0:Ce.commit)==null?void 0:nn.id)!=null?vn:"").localeCompare((Gn=(ln=Pe==null?void 0:Pe.commit)==null?void 0:ln.id)!=null?Gn:"")});for(let Ce=1;Ce<ce.length;Ce+=1){const Pe=ce[Ce-1],rt=ce[Ce];if(Pe.commit.id===rt.commit.id)continue;const Wt=(fi=rt.commit.parentSha)!=null?fi:null;if(Wt&&Kn(Wt,rt.commit.branchName))continue;const Vt=`chain:${E}:${Pe.commit.id}->${rt.commit.id}`;if(Mn.has(Vt)){ws(Pe.commit.id,"Duplicate branch chain connector"),ws(rt.commit.id,"Duplicate branch chain connector"),en({id:Vt,kind:"ancestry",parent:Pe.commit.id,child:rt.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}Mn.add(Vt);const At=Qs(Pe,rt),nn=Us(Pe,At,rt),vn=Eo(rt);yn.push({id:Vt,fromX:nn.x,fromY:nn.y,toX:vn.x,toY:vn.y,fromFace:nn.face,toFace:vn.face,zIndex:Rn(rt.commit.branchName)}),en({id:Vt,kind:"ancestry",parent:Pe.commit.id,child:rt.commit.id,rendered:!0,reason:"branch chain rendered"}),es.add(Pe.commit.id),es.add(rt.commit.id)}}return{branchByName:D,laneByName:F,mainCommits:Y,branchCommitsByLane:V,branchPreviewSets:X,allCommits:me,clustersByBranch:xt,clusterKeyByCommitId:gt,clusterKeyBySha:kt,leadByClusterKey:Xe,clusterCounts:ot,debugRows:je,branchDebugRows:tt,nodes:Re,normalizedSearchQuery:vt,matchingNodes:Ke,matchingNodeIds:wt,focusedNode:Rt,checkedOutClusterKey:rn,defaultCollapsedClumps:ft,visibleCommitsList:Ht,renderNodes:tn,visibleNodesBySha:In,visibleNodeByClusterKey:Ds,pointFormatter:Vn,contentWidth:Zt,contentHeight:jn,connectors:yn,mergeConnectors:Vs,connectorDecisions:hs,nodeWarnings:vo,connectorParentShas:Ks,branchStartShas:Rs,branchOffNodeShas:qn,crossBranchOutgoingShas:ms,commitIdsWithRenderedAncestry:es,branchBaseCommitByName:Ne,firstBranchCommitByName:ne,mergeDestinations:ht,mergeTargetBranchesBySourceBranchAndCommitSha:Tt}}const Uw=8,Vw=44,Ey=120,Ty=e=>e==="left"||e==="right"?"h":e==="top"||e==="bottom"?"v":null;function ab(e,n,i,a,c,u){const d=i-e,h=a-n,p=Math.abs(d),y=Math.abs(h),g=Math.hypot(d,h);if(g<.5)return{kind:"line"};const x=d>=0?1:-1,w=h>=0?1:-1;if(Math.min(p,y)<Uw){const Y=d/g,V=h/g,X=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:e+Y*X,c1y:n+V*X,c2x:i-Y*X,c2y:a-V*X}}if(Math.min(p,y)<Vw){const Y=d/g,V=h/g,X=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:e+Y*X,c1y:n+V*X,c2x:i-Y*X,c2y:a-V*X}}const C=Math.min(160,p*.42),j=Math.min(100,p*.22),A=Math.min(120,y*.32),T=Math.min(160,y*.42),R=Ty(c),P=Ty(u);if(!(R==="v"&&P==="h"||R==="v"&&P==null&&y>=p||R==null&&P==="h"&&y>=p||R==="v"&&P==="v"||R==null&&P==null&&y>p)){const Y=i,V=n;return{kind:"elbowH",cx:Y,cy:V,s1c1x:e+x*C,s1c1y:n,s1c2x:Y-x*j,s1c2y:V,s2c1x:Y,s2c1y:V+w*A,s2c2x:i,s2c2y:a-w*T}}const D=e,F=a;return{kind:"elbowV",cx:D,cy:F,s1c1x:e,s1c1y:n+w*T,s1c2x:D,s1c2y:F-w*A,s2c1x:D+x*C,s2c1y:F,s2c2x:i-x*j,s2c2y:a}}function Yw(e,n,i,a,c,u){const d=ab(e,n,i,a,c,u);return d.kind==="line"?[{x:e,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:e,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:e,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:e,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function Ay(e,n,i,a,c,u,d){const h=ab(e,n,i,a,u,d);if(h.kind==="line")return[`M ${c(e,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(e,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const C=Math.max(8,Math.min(Ey,Math.abs(i-e)*.48,Math.abs(a-n)*.48)),j=i>=e?1:-1,A=a>=n?1:-1,T=h.cx-j*C,R=h.cy+A*C;return[`M ${c(e,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(T-j*C*.5,h.cy)} ${c(T,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,R)}`,`C ${c(h.cx,R+A*C*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(Ey,Math.abs(i-e)*.48,Math.abs(a-n)*.48)),y=i>=e?1:-1,g=a>=n?1:-1,x=h.cy-g*p,w=h.cx+y*p;return[`M ${c(e,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-g*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(w,h.cy)}`,`C ${c(w+y*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const jp=2.25,kc=jp/2,Ww=.45,Fw=.02,aa=jp,Id=10,Xw=-100,Ny=0,Gw=.25,od=.001,qw=12,Kw=Un+48;function mn(...e){return e.filter(Boolean).join(" ")}function Dy(e){return Math.max(Ww,Math.min(jp,e))}function Qw(e,n){if(e===null||e.size!==n.size)return!1;for(const i of e)if(!n.has(i))return!1;return!0}function rb(e,n){return!(n.right<e.left||n.left>e.right||n.bottom<e.top||n.top>e.bottom)}function Zw(e){var u,d,h,p;let n=(d=(u=e[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=e[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const y of e)n=Math.min(n,y.x),i=Math.min(i,y.y),a=Math.max(a,y.x),c=Math.max(c,y.y);return{left:n,top:i,right:a,bottom:c}}function Jw(e,n,i,a,c,u,d){const h=Yw(e,n,i,a,u,d),p=Zw(h);return rb(c,p)}function lb(e,n){return{left:e.x,top:e.y+n,right:e.x+Un,bottom:e.y+Ol+zs+4}}function eS(e,n){const i=Kw,a=Math.max(120,Math.ceil(Ol+zs+4-n+24)),c=new Map;for(const u of e){const d=lb(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),y=Math.floor(d.top/a),g=Math.floor(d.bottom/a),x=u.commit.visualId;for(let w=h;w<=p;w++)for(let C=y;C<=g;C++){const j=`${w},${C}`;let A=c.get(j);A||(A=new Set,c.set(j,A)),A.add(x)}}return{cellW:i,cellH:a,buckets:c}}function tS(e,n,i,a){const{cellW:c,cellH:u,buckets:d}=e,h=Math.floor(n.left/c),p=Math.floor(n.right/c),y=Math.floor(n.top/u),g=Math.floor(n.bottom/u),x=new Set;for(let C=h;C<=p;C++)for(let j=y;j<=g;j++){const A=d.get(`${C},${j}`);if(A)for(const T of A)x.add(T)}const w=new Set;for(const C of x){const j=i.get(C);if(!j)continue;const A=lb(j,a);rb(n,A)&&w.add(C)}return w}function Ry(e,n,i,a){var d;if(i.zoom<=0||e<=0||n<=0)return null;const c=i.zoom/aa;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(e-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function nS(e,n){return n>0?{left:e.left-n,top:e.top-n,right:e.right+n,bottom:e.bottom+n}:e}function By(e,n,i){const a=n/aa;return!Number.isFinite(a)||a<=0?e:nS(e,100/a)}function Ly(e){return e.replace(/\\/g,"/").replace(/\/+$/,"")}function $i(e,n){return!e||!n?!1:e===n||e.startsWith(n)||n.startsWith(e)}function Hm(e,n){if(n){const i=Ly(n),a=Ly(e.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!e.isCurrent}function nm(e,n){return e.pathExists===!1?!1:Hm(e,n)}function sS(e){const n=e.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?e:`.../${n.slice(-2).join("/")}`}function oS({compactLabels:e=!1,selectedVisibleCommitShas:n,commitInProgress:i,commitDisabled:a,stashInProgress:c,stashDisabled:u,pushInProgress:d,hasUncommittedChanges:h,createBranchFromNodeInProgress:p,onCommitLocalChanges:y,onStashLocalChanges:g,onPushCurrentBranch:x,onPushAllBranches:w,onPushCommitTargets:C,onMergeRefsIntoBranch:j,selectedPushTargets:A,selectedPushLabel:T,canPushCurrentBranch:R,pushCurrentBranchLabel:P,pushableRemoteBranchCount:L,selectedCommitTargetOption:D,mergeInProgress:F,setMergeTargetCommitSha:Y,worktrees:V,currentRepoPath:X,worktreeMenuOpen:le,setWorktreeMenuOpen:ue,onSwitchToWorktree:pe,onRemoveWorktree:Ne,removeWorktreeInProgress:Fe,setCommitDialogOpen:ne,setNewBranchDialogOpen:de,hideMergeControls:O=!1}){var lt,$t;const se=n.length>0,I=n.length>0&&n.every(pt=>pt==="WORKING_TREE"),[fe,xe]=_.useState(!1),z=_.useRef(null),ae=_.useRef(null),Q="inline-flex h-7 items-center rounded-md border border-border bg-background px-2 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",be=!!y&&h&&!a&&!i&&(!se||I),Me=!!x&&R&&!se&&!d,me=!!C&&A.length>0&&!d,Le=!!w&&L>=2&&!se&&!d,Ze=!!g&&!u&&!se&&!c,Ve="Push Selected...",ht=be?{label:i?"Committing...":"Commit",iconSrc:"/icon-commit.svg",run:()=>ne(!0),disabled:!be}:Me?{label:d?"Pushing...":P,iconSrc:"/icon-pushBranch.svg",run:()=>void(x==null?void 0:x()),disabled:!Me}:me?{label:Ve,iconSrc:"/icon-pushSelected.svg",run:()=>void(C==null?void 0:C(A.map(pt=>({branchName:pt.branchName,targetSha:pt.targetSha})))),disabled:!me}:null,Tt=(pt,qt)=>l.jsx("span",{"aria-hidden":"true",className:mn("inline-block shrink-0 bg-current",qt),style:{WebkitMaskImage:`url(${pt})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${pt})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}});return _.useEffect(()=>{const pt=qt=>{var K,De;const Kt=qt.target;Kt&&((K=z.current)!=null&&K.contains(Kt)||(De=ae.current)!=null&&De.contains(Kt)||(xe(!1),ue(!1)))};return window.addEventListener("pointerdown",pt),()=>window.removeEventListener("pointerdown",pt)},[ue]),l.jsx("div",{className:"window-no-drag pointer-events-none z-[60] flex w-full justify-start",children:l.jsxs("div",{className:"pointer-events-auto flex w-fit max-w-full flex-nowrap items-center justify-start gap-[9px]",children:[l.jsxs("div",{ref:z,className:"relative inline-flex h-7 items-stretch rounded-md border border-border bg-background",children:[l.jsx("button",{type:"button",onClick:()=>{ht&&ht.run()},disabled:!ht||ht.disabled,className:mn(Q,"h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-muted"),children:l.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[Tt((lt=ht==null?void 0:ht.iconSrc)!=null?lt:"/icon-commit.svg","h-4.5 w-4.5"),e?null:l.jsx("span",{children:($t=ht==null?void 0:ht.label)!=null?$t:"Commit"})]})}),l.jsx("button",{type:"button",onClick:()=>xe(pt=>!pt),disabled:!ht,"aria-haspopup":"menu","aria-expanded":fe,className:mn(Q,"h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-muted"),title:"More actions",children:l.jsx(eb,{className:"h-3.5 w-3.5 shrink-0"})}),fe&&ht?l.jsxs("div",{className:"absolute left-[-1px] top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border bg-background p-1",children:[l.jsxs("button",{type:"button",onClick:()=>{xe(!1),ne(!0)},disabled:!be,className:mn(Q,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!be&&"text-foreground opacity-50"),children:[Tt("/icon-commit.svg","mr-1.5 h-4.5 w-4.5"),i?"Committing...":"Commit"]}),l.jsxs("button",{type:"button",onClick:()=>{xe(!1),x==null||x()},disabled:!Me,className:mn(Q,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!Me&&"text-foreground opacity-50"),children:[Tt("/icon-pushBranch.svg","mr-1.5 h-4.5 w-4.5"),d?"Pushing...":P]}),l.jsxs("button",{type:"button",onClick:()=>{xe(!1),C==null||C(A.map(pt=>({branchName:pt.branchName,targetSha:pt.targetSha})))},disabled:!me,className:mn(Q,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!me&&"text-foreground opacity-50"),title:T,children:[Tt("/icon-pushSelected.svg","mr-1.5 h-4.5 w-4.5"),Ve]}),l.jsxs("button",{type:"button",onClick:()=>{xe(!1),w==null||w()},disabled:!Le,className:mn(Q,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!Le&&"text-foreground opacity-50"),children:[Tt("/icon-pushAll.svg","mr-1.5 h-4.5 w-4.5"),"Push all"]}),l.jsxs("button",{type:"button",onClick:()=>{xe(!1),g==null||g()},disabled:!Ze,className:mn(Q,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!Ze&&"text-foreground opacity-50"),children:[Tt("/icon-stash.svg","mr-1.5 h-4.5 w-4.5"),c?"Stashing...":"Stash"]})]}):null]}),l.jsx("div",{className:"flex w-fit flex-nowrap items-center gap-[9px]",children:l.jsxs("button",{type:"button",onClick:()=>de(!0),disabled:p,className:mn(Q,"pointer-events-auto relative z-10 !bg-background !border-border hover:!bg-muted",e?"w-7 justify-center px-0":""),children:[l.jsx(tb,{className:mn("h-3.5 w-3.5 shrink-0",e?"":"mr-1.5")}),e?null:p?"Creating...":"Branch"]})}),!O&&n.length>1&&D.options.length>0&&D.targetBranch&&j?l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border bg-background px-2 py-1",children:[l.jsx("span",{className:"px-1 text-[11px] font-medium text-foreground",children:"Merge to"}),D.options.map(pt=>{const qt=pt.targetBranch===D.targetBranch;return l.jsx("button",{type:"button",onClick:()=>Y(pt.targetSha),className:mn("rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors",qt?"bg-background text-foreground":"text-foreground hover:bg-muted hover:text-foreground"),children:pt.targetBranch},`merge-${pt.targetBranch}`)}),l.jsxs("button",{type:"button",onClick:()=>void j(D.sources,D.targetBranch),disabled:D.sources.length===0||F,className:"rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(nb,{className:"mr-1 inline h-3 w-3 shrink-0 align-text-bottom"}),F?"Merging...":"Confirm"]})]}):null,V.length>0&&(pe||Ne)?l.jsxs("div",{ref:ae,className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>ue(pt=>!pt),className:mn(Q,"!bg-background !border-border hover:!bg-muted"),children:[l.jsx(ww,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),V.length,e?null:` ${V.length===1?"Worktree":"Worktrees"}`]}),le?l.jsx("div",{className:"absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-md border border-border bg-background p-1",children:V.map(pt=>{var qt;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:pt.path,children:Hm(pt,X)?sS(pt.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-foreground",children:[(qt=pt.branchName)!=null?qt:"detached"," • ",pt.headSha.slice(0,7)]})]}),Hm(pt,X)?l.jsxs("div",{className:"flex items-center gap-1",children:[pe?l.jsx("button",{type:"button",onClick:()=>{ue(!1),pe(pt.path)},disabled:Fe||pt.pathExists===!1,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,Ne?l.jsx("button",{type:"button",onClick:()=>void Ne(pt.path,pt.isPrunable),disabled:Fe,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Fe?"...":"Remove"}):null]}):null]},pt.path)})}):null]}):null]})})}function iS({fadeIn:e,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=_.useState(!e);return _.useLayoutEffect(()=>{if(!e){p(!0);return}p(!1);let y=null;const g=requestAnimationFrame(()=>{y=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(g),y!=null&&cancelAnimationFrame(y)}},[e]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:e?"opacity 240ms ease-out":void 0},children:d})}function aS({scrollContainerRef:e,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:y,labelTopPx:g,inverseZoomStyle:x,displayZoom:w,selectedVisibleCommitShas:C,normalizedSearchQuery:j,matchingNodeIds:A,focusedNode:T,renderNodes:R,shouldRenderNode:P,manuallyOpenedClumps:L,manuallyClosedClumps:D,defaultCollapsedClumps:F,leadByClusterKey:Y,clusterKeyByCommitId:V,clusterCounts:X,commitIdsWithRenderedAncestry:le,nodeWarnings:ue,connectorParentShas:pe,branchStartShas:Ne,branchOffNodeShas:Fe,crossBranchOutgoingShas:ne,branchBaseCommitByName:de,branchStartAccentClass:O,connectorParentAccentClass:se,commitCornerRadiusPx:I,lineStrokeWidth:fe,pointFormatter:xe,connectors:z,mergeConnectors:ae,cullConnectorPath:Q,flushCameraReactTick:be,setManuallyOpenedClumps:Me,setManuallyClosedClumps:me,onCommitCardClick:Le,unpushedCommitShasSetByBranch:Ze,remoteCommitShas:Ve,checkedOutHeadSha:ht}){const[Tt,Ct]=_.useState(new Set),lt=_.useRef(null);_.useEffect(()=>{const K=new Set;X.forEach((at,_t)=>{(L.has(_t)||!F.has(_t)&&!D.has(_t))&&K.add(_t)});const De=lt.current;if(De==null){lt.current=K;return}const ct=[];if(K.forEach(at=>{De.has(at)||ct.push(at)}),ct.length>0){Ct(_t=>{const Ie=new Set(_t);return ct.forEach(xt=>Ie.add(xt)),Ie});const at=window.setTimeout(()=>{Ct(_t=>{const Ie=new Set(_t);return ct.forEach(xt=>Ie.delete(xt)),Ie})},260);return lt.current=K,()=>{window.clearTimeout(at)}}lt.current=K},[X,F,D,L]);const $t=(K,De)=>{const ct=De.zIndex-K.zIndex;if(ct!==0)return ct;const at=Math.min(K.fromY,K.toY),_t=Math.min(De.fromY,De.toY),Ie=at-_t;return Ie!==0?Ie:K.id.localeCompare(De.id)},pt=ae.filter(K=>Q(K)).sort($t),qt=z.filter(K=>Q(K)).sort($t),Kt=R.filter(K=>P(K));return l.jsx("div",{ref:e,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},onWheel:h,onMouseDown:p,children:l.jsx("div",{ref:n,className:"relative min-w-full bg-background p-2.5",style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[Kt.map(K=>{var Ht,dn,Ot,St,fn,ls;const De=V.get(K.commit.visualId),ct=De?L.has(De)||!F.has(De)&&!D.has(De):!1,at=De?Y.get(De)===K.commit.visualId:!1,_t=De!=null&&ct&&!at&&Tt.has(De),Ie=De&&(Ht=X.get(De))!=null?Ht:1,xt=le.has(K.commit.id),gt=(dn=ue.get(K.commit.id))!=null?dn:[],kt=gt.length>0&&!xt,Xe=C.includes(K.commit.id),ot=K.commit.id==="WORKING_TREE"||K.commit.kind==="uncommitted",U=K.commit.kind==="stash"||K.commit.id.startsWith("STASH:"),J=/^STASH:(\d+)$/.exec(K.commit.id),we=J?`Stash ${Number.parseInt(J[1],10)+1}`:null,je=U?K.commit.message.trim()&&K.commit.message.trim()!=="git-visualizer"?K.commit.message:"Stashed changes":K.commit.message,tt=K.commit.kind==="branch-created"&&K.commit.id.startsWith("BRANCH_HEAD:"),Ue=ot||((St=(Ot=Ze.get(K.commit.branchName))==null?void 0:Ot.has(K.commit.id))!=null?St:!1),Ae=K.commit.isRemote===!0,ye=!ot&&!Ue&&(Ae||Ve.has(K.commit.id)),We=(ot||ht!=null&&K.commit.id===ht)&&!Xe,nt=ye&&!We&&!Xe,Re=We?"text-checked":nt?"text-remote":Xe?"text-select":"text-foreground",Je=We?{color:"var(--checked)"}:nt?{color:"var(--remote)"}:Xe?{color:"var(--select)"}:void 0,bt=(fn=Je==null?void 0:Je.color)!=null?fn:"var(--foreground)",vt=(T==null?void 0:T.commit.id)===K.commit.id?bt:We?"var(--checked)":nt?"var(--remote)":Xe?"var(--select)":Jh,Ke=U||tt||ot?1.25/w:fe,Rt=U||ot||tt,wt=`${12/w} ${6/w}`,mt=Ke/2,rn=`M ${mt} ${mt} H ${Un-mt-I} Q ${Un-mt} ${mt} ${Un-mt} ${mt+I} V ${176-mt-I} Q ${Un-mt} ${176-mt} ${Un-mt-I} ${176-mt} H ${mt+I} Q ${mt} ${176-mt} ${mt} ${176-mt-I} V ${mt}`,ft=Ue&&!We&&!Xe?{color:"var(--muted-foreground)"}:void 0;return l.jsxs(iS,{fadeIn:_t,dataCommitCard:"true",className:mn("group absolute z-20",j&&!A.has(K.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",j&&A.has(K.commit.id)?"scale-[1.01]":"",(T==null?void 0:T.commit.id)===K.commit.id?"z-30":""),style:{left:K.x,top:K.y,width:Un,height:Ol+zs+4,overflow:"visible"},onClick:Qt=>Le(Qt,K),onPointerDown:Qt=>y(Qt,K),children:[Rt?l.jsx("svg",{className:"pointer-events-none absolute inset-0 z-20 overflow-visible","aria-hidden":"true",viewBox:`0 0 ${Un} 176`,preserveAspectRatio:"none",children:l.jsx("path",{d:rn,fill:"none",stroke:vt,strokeWidth:Ke,strokeDasharray:wt,strokeLinecap:"butt",strokeLinejoin:"round"})}):null,l.jsx("div",{className:"absolute left-0 z-30 w-full",style:{...x,top:`${g}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 bg-transparent pb-0",children:[l.jsx("div",{className:mn("min-w-0 h-4 flex-1 text-sm font-normal leading-none",Re,w<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Je!=null?Je:ft,children:U&&we?we:K.commit.branchName?`${K.commit.branchName}/${K.commit.id.slice(0,7)}`:K.commit.id.slice(0,7)}),at&&Ie>1?l.jsx("button",{type:"button",onMouseDown:Qt=>{Qt.stopPropagation()},onClick:Qt=>{if(Qt.stopPropagation(),Qt.preventDefault(),!De)return;!F.has(De)?(Me(Jt=>{if(!Jt.has(De))return Jt;const zt=new Set(Jt);return zt.delete(De),zt}),me(Jt=>{const zt=new Set(Jt);return zt.has(De)?zt.delete(De):zt.add(De),zt})):(me(Jt=>{if(!Jt.has(De))return Jt;const zt=new Set(Jt);return zt.delete(De),zt}),Me(Jt=>{const zt=new Set(Jt);return zt.has(De)?zt.delete(De):zt.add(De),zt})),be()},className:mn("inline-flex self-start items-center bg-transparent p-0 text-sm font-normal leading-none",Re),style:Je!=null?Je:ft,children:ct?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`+${Ie-1}`}):null]})}),l.jsx("div",{className:mn("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",We&&!Ue&&!U&&!tt?"bg-checked-muted":nt&&!U&&!tt?"bg-remote-muted":Xe&&!Ue&&!U&&!tt?"bg-select-muted":Ue||U||tt?"bg-transparent":"bg-muted",Rt?"border-solid":"",Fe.has(K.commit.id)||Ne.has(K.commit.id)||ne.has(K.commit.id)?O:pe.has(K.commit.id)?se:((ls=de.get(K.commit.branchName))==null?void 0:ls.id)===K.commit.id?"border-amber-500":kt?"border-red-500":"",(j&&A.has(K.commit.id)&&!d,"")),style:{top:0,borderWidth:`${Ke}px`,borderColor:Rt?"transparent":vt,borderTopLeftRadius:0,borderTopRightRadius:`${I}px`,borderBottomRightRadius:`${I}px`,borderBottomLeftRadius:`${I}px`},children:l.jsxs("div",{className:"relative z-10 flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:mn("max-w-[38rem] select-text text-sm font-normal leading-tight tracking-tight text-foreground",Re,w<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),"data-selectable-text":"true",style:Je!=null?Je:ft,children:at&&ct?je:at&&Ie>1?`${je} +${Ie-1}`:je}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:kt?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-foreground dark:bg-red-900/20 dark:text-foreground",title:gt.join(`
`),children:"Broken ancestry"}):null})]}),w>.5&&!U?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:mn("select-text text-sm font-normal",Re),"data-selectable-text":"true",style:Je!=null?Je:ft,children:["@",K.commit.author]}),l.jsx("div",{className:mn("select-text text-sm font-normal",Re),"data-selectable-text":"true",style:Je!=null?Je:ft,children:new Date(K.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null]})})]},K.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[pt.map(K=>{const{fromX:De,fromY:ct,toX:at,toY:_t}=K,Ie=Ay(De,ct,at,_t,xe,K.fromFace,K.toFace);return l.jsx("path",{d:Ie,fill:"none",stroke:Jh,strokeWidth:fe,strokeLinecap:"round",strokeLinejoin:"round"},K.id)}),qt.map(K=>{const{fromX:De,fromY:ct,toX:at,toY:_t}=K,Ie=Ay(De,ct,at,_t,xe,K.fromFace,K.toFace);return l.jsx("path",{d:Ie,fill:"none",stroke:Jh,strokeWidth:fe,strokeLinecap:"round",strokeLinejoin:"round"},K.id)})]})]})})})}function rS({isOpen:e,onClose:n,visibleBounds:i,renderedNodeCount:a,totalNodeCount:c,renderedMergeConnectorCount:u,totalMergeConnectorCount:d,renderedConnectorCount:h,totalConnectorCount:p,mapGridCullViewportInsetScreenPx:y,debugRows:g,branchDebugRows:x,connectorDecisions:w}){return l.jsx(l.Fragment,{children:e?l.jsxs("div",{className:"absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:n,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${y}px screen/side): ${i?`${(i.right-i.left).toFixed(0)} x ${(i.bottom-i.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${a} / ${c}`,`Rendered merge connectors: ${u} / ${d}`,`Rendered connectors: ${h} / ${p}`,"",...g,...x,"",...w.map(C=>`${C.rendered?"rendered":"skipped"} [${C.kind}] ${C.parent.slice(0,7)} -> ${C.child.slice(0,7)} (${C.reason})`)].join(`
`)})})]}):null})}function lS({commitDialogOpen:e,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:y,deleteInProgress:g,deletableSelectionCount:x,newBranchDialogOpen:w,newBranchName:C,newBranchCreateMode:j,onNewBranchNameChange:A,onNewBranchCreateModeChange:T,onNewBranchDialogClose:R,onNewBranchConfirm:P,selectedCommitCanCreateBranch:L,currentCheckedOutCommitCanCreateBranch:D,createBranchFromNodeInProgress:F}){return l.jsxs(l.Fragment,{children:[e?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:a,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-background p-4",onClick:Y=>Y.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:Y=>i(Y.target.value),onKeyDown:Y=>{(Y.metaKey||Y.ctrlKey)&&Y.key==="Enter"&&(Y.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(kw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),u?"Committing...":"Commit"]})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:p,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-background p-4",onClick:Y=>Y.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(Y=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:Y},Y))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsx("button",{type:"button",onClick:y,disabled:x===0||g,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:g?"Deleting...":"Delete"})]})]})}):null,w?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:R,children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-background p-4",onClick:Y=>Y.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>T("from-selected-node"),className:mn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",j==="from-selected-node"?"bg-background text-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>T("new-root"),className:mn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",j==="new-root"?"bg-background text-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:"New root"})]}),j==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:C,onChange:Y=>A(Y.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:R,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:P,disabled:!C.trim()||F||j==="from-selected-node"&&!L&&!D,className:mn("inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted","disabled:cursor-not-allowed disabled:opacity-50"),children:[l.jsx(tb,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),F?"Creating...":"Create"]})]})]})}):null]})}const Oy="/icon-GitOrientation.svg";function cS({compactLabels:e=!1,orientation:n,onOrientationChange:i}){const a=n==="horizontal"?"vertical":"horizontal";return l.jsxs("button",{type:"button",onClick:()=>i(a),className:mn("window-no-drag inline-flex h-7 items-center rounded-md border border-border bg-background text-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",e?"w-7 justify-center px-0":"gap-1.5 pl-1.5 pr-2 py-1"),"aria-label":`Rotate view to ${a}`,title:"Rotate View",children:[l.jsx("span",{className:"relative size-4 shrink-0",children:l.jsx("span",{"aria-hidden":"true",className:mn("absolute inset-0 bg-current transition-transform duration-300 ease-in-out",n==="vertical"&&"rotate-[-90deg]"),style:{WebkitMaskImage:`url(${Oy})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${Oy})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}})}),e?null:l.jsx("span",{className:"whitespace-nowrap text-[12px] font-normal leading-none text-foreground transition-colors",children:"Rotate View"})]})}function uS({query:e,onQueryChange:n,resultCount:i,resultIndex:a,onJump:c}){const u=_.useRef(null);return l.jsxs("div",{className:"window-no-drag flex h-7 w-[12rem] shrink-0 items-center gap-2 rounded-full border border-border bg-background pl-1.5 pr-2.5",children:[l.jsx(Dw,{className:"h-3.5 w-3.5 shrink-0 text-foreground"}),l.jsx("input",{ref:u,value:e,onChange:d=>n(d.target.value),onBlur:d=>{const h=d.relatedTarget;h!=null&&h.closest('button, a, input, textarea, select, [contenteditable="true"]')||window.setTimeout(()=>{var p;(p=u.current)==null||p.focus()},0)},onKeyDown:d=>{d.key==="Enter"&&(d.preventDefault(),c(1))},placeholder:"Search",className:"min-w-0 flex-1 bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"}),i!=null&&i>0?l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-[11px] font-medium tabular-nums text-foreground",children:[(a!=null?a:0)+1,"/",i]}),l.jsx("button",{type:"button",onClick:()=>c(-1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-foreground transition-colors hover:text-foreground","aria-label":"Previous search result",title:"Previous result",children:l.jsx(yw,{className:"h-4 w-4 shrink-0"})}),l.jsx("button",{type:"button",onClick:()=>c(1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-foreground transition-colors hover:text-foreground","aria-label":"Next search result",title:"Next result",children:l.jsx(eb,{className:"h-4 w-4 shrink-0"})})]}):null]})}const dS="git-visualizer:map-grid-camera:",zy=2e5;function fS({mapPadHostRef:e,transformLayerRef:n,isEnabled:i=!0,onUserCameraChange:a,cameraStorageScopeKey:c}){const u=_.useRef({x:0,y:0}),d=_.useRef(kc),h=_.useRef(null),p=_.useRef({panX:0,panY:0,zoom:kc}),y=_.useRef(null),g=_.useRef(kc),x=_.useRef(null),[w,C]=_.useState(!1),[j,A]=_.useState(kc),[T,R]=_.useState(0),P=_.useRef(null),L=_.useRef(0),D=_.useRef(!1),F=_.useCallback(()=>{const O=(c==null?void 0:c.trim())||window.location.pathname;return`${dS}${O}`},[c]),Y=_.useCallback(O=>{try{window.localStorage.setItem(F(),JSON.stringify(O))}catch{}},[F]),V=_.useCallback(()=>{const O=e.current;if(!O)return null;const se=O.getBoundingClientRect(),I=getComputedStyle(O),fe=Number.parseFloat(I.borderLeftWidth)||0,xe=Number.parseFloat(I.borderTopWidth)||0,z=Number.parseFloat(I.paddingLeft)||Id,ae=Number.parseFloat(I.paddingTop)||Id;return{x:se.left+fe+z,y:se.top+xe+ae}},[e]),X=_.useCallback(()=>{P.current!=null&&(window.clearTimeout(P.current),P.current=null),_.startTransition(()=>{R(O=>O+1)}),L.current=performance.now()},[]),le=_.useCallback((O,se,I,fe)=>{const xe=p.current,z={panX:O,panY:se,zoom:I};p.current=z;const ae=n.current;if(ae&&(ae.style.transform=`translate3d(${O}px, ${se}px, 0) scale(${I/aa})`),Math.abs(g.current-I)>od&&(g.current=I,A(I)),(fe==null?void 0:fe.emitTick)===!1||D.current)return;if(Math.abs(I-xe.zoom)>od){X();return}const Me=performance.now()-L.current;if(Me>=Ny){X();return}P.current!=null&&window.clearTimeout(P.current),P.current=window.setTimeout(()=>{P.current=null,X()},Ny-Me)},[X,n]),ue=_.useRef(null),pe=_.useCallback(()=>{y.current!=null||!ue.current||(y.current=window.requestAnimationFrame(ue.current))},[]),Ne=_.useCallback(()=>{D.current=!0,C(!0),x.current!=null&&window.clearTimeout(x.current),x.current=window.setTimeout(()=>{x.current=null,D.current=!1,C(!1),X(),Y(p.current)},90)},[X,Y]),Fe=_.useCallback((O,se,I)=>{i&&(u.current={x:O,y:se},d.current=I,Ne(),pe())},[i,Ne,pe]);ue.current=()=>{y.current=null;const O=p.current,se=u.current.x,I=u.current.y,fe=d.current,xe=h.current,z=Math.abs(fe-O.zoom)<=od?fe:O.zoom+(fe-O.zoom)*Gw,ae=xe!=null?xe.anchorX-xe.worldX*(z/aa):se,Q=xe!=null?xe.anchorY-xe.worldY*(z/aa):I;xe!=null&&Math.abs(z-fe)<=od&&(h.current=null),le(ae,Q,z),ae!==se||Q!==I||z!==fe?ue.current&&(y.current=window.requestAnimationFrame(ue.current)):X()};const ne=_.useCallback((O,se,I)=>{if(!i)return;const fe=Dy(I),xe=u.current.x,z=u.current.y,ae=d.current,Q=V();if(!Q){Fe(xe,z,fe);return}const be=O-Q.x,Me=se-Q.y,me=ae/aa,Le=fe/aa,Ze=(be-xe)/me,Ve=(Me-z)/me,ht=be-Ze*Le,Tt=Me-Ve*Le;h.current={anchorX:be,anchorY:Me,worldX:Ze,worldY:Ve},Fe(ht,Tt,fe)},[V,i,Fe]),de=_.useCallback(O=>{if(!i)return;if(O.preventDefault(),O.ctrlKey||O.metaKey){a==null||a();const xe=Math.exp(-O.deltaY*Fw);ne(O.clientX,O.clientY,d.current*xe);return}a==null||a(),h.current=null;const se=p.current;u.current={x:se.panX,y:se.panY},d.current=se.zoom;const I=se.panX-O.deltaX,fe=se.panY-O.deltaY;u.current={x:I,y:fe},le(I,fe,se.zoom)},[le,i,a,ne]);return _.useLayoutEffect(()=>{if(!i)return;let O={panX:0,panY:0,zoom:kc};try{const se=window.localStorage.getItem(F());if(se){const I=JSON.parse(se);typeof I.panX=="number"&&Number.isFinite(I.panX)&&Math.abs(I.panX)<=zy&&typeof I.panY=="number"&&Number.isFinite(I.panY)&&Math.abs(I.panY)<=zy&&typeof I.zoom=="number"&&Number.isFinite(I.zoom)&&(O={panX:I.panX,panY:I.panY,zoom:Dy(I.zoom)})}}catch{}return u.current={x:O.panX,y:O.panY},d.current=O.zoom,le(O.panX,O.panY,O.zoom,{emitTick:!1}),()=>{x.current!=null&&window.clearTimeout(x.current),y.current!=null&&window.cancelAnimationFrame(y.current),P.current!=null&&(window.clearTimeout(P.current),P.current=null),Y(p.current)}},[le,F,i,Y]),{isCameraMoving:w,renderedZoom:j,cameraRenderTick:T,renderedCameraRef:p,interactionIdleTimeoutRef:x,getTransformLayerOriginScreen:V,flushCameraReactTick:X,syncCamera:Fe,handleWheel:de}}function hS(e){const n=Math.min(e.startX,e.currentX),i=Math.min(e.startY,e.currentY),a=Math.abs(e.currentX-e.startX),c=Math.abs(e.currentY-e.startY);return{left:n,top:i,width:a,height:c}}function mS({scrollContainerRef:e,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=_.useRef(null),h=_.useRef(!1),p=_.useRef([]),[y,g]=_.useState(!1),[x,w]=_.useState(null),[C,j]=_.useState([]),[A,T]=_.useState(null),R=_.useCallback(L=>{const D=e.current,F=i();if(!D||!F)return[];const Y=D.getBoundingClientRect(),V=n.current.zoom/aa;if(V<=0)return[];const X=[],le=L.left,ue=L.left+L.width,pe=L.top,Ne=L.top+L.height;for(const Fe of a){if(!c(Fe))continue;const ne=F.x+n.current.panX+Fe.x*V-Y.left,de=F.y+n.current.panY+Fe.y*V-Y.top,O=ne+Un*V,se=de+(Ol+zs)*V;!(O<le||ne>ue||se<pe||de>Ne)&&X.push(Fe.commit.id)}return X},[i,a,n,e,c]),P=_.useCallback(L=>{if(L.button!==0)return;const D=L.target;if(D!=null&&D.closest("[data-commit-card]")||D!=null&&D.closest("button, a, input, textarea, select"))return;const F=e.current;if(!F)return;L.preventDefault();const Y=F.getBoundingClientRect(),V=L.clientX-Y.left,X=L.clientY-Y.top;d.current={startX:V,startY:X,currentX:V,currentY:X,additive:L.metaKey||L.ctrlKey},h.current=!1,p.current=L.metaKey||L.ctrlKey?C:[],g(!0),w({left:V,top:X,width:0,height:0})},[e,C]);return _.useEffect(()=>{const L=F=>{var pe;const Y=d.current;if(!Y)return;const V=e.current;if(!V)return;const X=V.getBoundingClientRect();Y.currentX=F.clientX-X.left,Y.currentY=F.clientY-X.top,!h.current&&(Math.abs(Y.currentX-Y.startX)>2||Math.abs(Y.currentY-Y.startY)>2)&&(h.current=!0);const le=hS(Y);w(le);const ue=R(le);j(Y.additive?Array.from(new Set([...p.current,...ue])):Array.from(new Set(ue))),Y.additive||T((pe=ue[ue.length-1])!=null?pe:null)},D=()=>{if(d.current){const F=h.current;d.current=null,h.current=!1,g(!1),w(null),F||(j([]),T(null));return}u()};return window.addEventListener("mousemove",L),window.addEventListener("mouseup",D),()=>{window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",D)}},[R,u,e]),{isMarqueeSelecting:y,marqueeRect:x,selectedCommitShas:C,setSelectedCommitShas:j,mergeTargetCommitSha:A,setMergeTargetCommitSha:T,startMarqueeDrag:P}}function pS(){return l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center",children:l.jsx("div",{role:"status","aria-label":"Loading commits",className:"h-5 w-5 rounded-full border-2 border-border border-t-muted-foreground animate-spin"})})}function _S(){return l.jsx("div",{className:"pointer-events-auto absolute inset-0 z-[120] flex min-h-0 items-center justify-center bg-background/80 backdrop-blur-sm",children:l.jsx("div",{role:"status","aria-label":"Preparing map",className:"h-5 w-5 rounded-full border-2 border-border border-t-muted-foreground animate-spin"})})}function $y({branches:e,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:y,staleBranches:g=[],isLoading:x=!1,scrollRequest:w,focusedErrorBranch:C,mapTopInsetPx:j=0,onMergeRefsIntoBranch:A,mergeInProgress:T=!1,onPushAllBranches:R,onPushCurrentBranch:P,onPushCommitTargets:L,pushInProgress:D=!1,onDeleteSelection:F,deleteInProgress:Y=!1,worktrees:V=[],currentRepoPath:X,onRemoveWorktree:le,removeWorktreeInProgress:ue=!1,onSwitchToWorktree:pe,onStashLocalChanges:Ne,stashInProgress:Fe=!1,stashDisabled:ne=!1,onCommitLocalChanges:de,commitInProgress:O=!1,commitDisabled:se=!1,onStageAllChanges:I,stageInProgress:fe=!1,onCreateBranchFromNode:xe,onCreateRootBranch:z,createBranchFromNodeInProgress:ae=!1,isDebugOpen:Q=!1,onDebugClose:be,orientation:Me="horizontal",branchCommitPreviews:me={},branchParentByName:Le={},branchUniqueAheadCounts:Ze={},gridSearchQuery:Ve="",gridSearchJumpToken:ht=0,gridSearchJumpDirection:Tt=1,gridFocusSha:Ct=null,checkedOutRef:lt=null,onGridSearchResultCountChange:$t,onGridSearchResultIndexChange:pt,onGridSearchFocusChange:qt,onInteractionChange:Kt,manuallyOpenedClumps:K,manuallyClosedClumps:De,setManuallyOpenedClumps:ct,setManuallyClosedClumps:at,layoutModel:_t,gridHudProps:Ie,blockMapInteraction:xt=!1,blockMapDisplay:gt=!1,mapReadyEpoch:kt=0,onMapReadyForDisplay:Xe}){var ca,b,v,k,M,N,H,oe,he,Te,et,ut;const ot=_.useRef(null),U=_.useRef(null),J=_.useRef(null),we=_.useRef(null),je=_.useRef(null),tt=_.useRef(void 0),Ue=_.useRef(void 0),Ae=_.useRef(void 0),ye=_.useRef(0),st=_.useRef(null),[We,nt]=_.useState(!1),[Re,Je]=_.useState(!1),[bt,vt]=_.useState(""),[Ke,Rt]=_.useState(!1),[wt,mt]=_.useState(!1),[rn,ft]=_.useState(""),[Ht,dn]=_.useState("from-selected-node"),[Ot,St]=_.useState(()=>new Set),[fn,ls]=_.useState(()=>new Set),[Qt,pn]=_.useState({}),Jt=_.useRef(!1),zt=_.useRef(null),tn=_.useRef(null),Ge=K!=null?K:Ot,$n=De!=null?De:fn,In=ct!=null?ct:St,Ds=at!=null?at:ls,[Vn,bo]=_.useState(null),[Is,lo]=_.useState(null),[Ps,Zt]=_.useState(!1),[jn,yn]=_.useState(!1),Hs=_.useId(),{isCameraMoving:Rn,renderedZoom:hs,cameraRenderTick:en,renderedCameraRef:es,interactionIdleTimeoutRef:vo,getTransformLayerOriginScreen:ws,flushCameraReactTick:Ks,syncCamera:Rs,handleWheel:qn}=fS({mapPadHostRef:J,transformLayerRef:we,isEnabled:!xt,cameraStorageScopeKey:`${X!=null?X:"__no-repo__"}::${Me}`}),gs=_.useRef(0),Uo=_.useMemo(()=>{if(_t)return _t;const q=Cp(e,d,me,Le);return kp({lanes:q,branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,defaultBranch:d,branchCommitPreviews:me,branchParentByName:Le,branchUniqueAheadCounts:Ze,manuallyOpenedClumps:Ge,manuallyClosedClumps:$n,isDebugOpen:Q,gridSearchQuery:Ve,gridFocusSha:Ct,checkedOutRef:lt!=null?lt:null,orientation:Me,nodePositionOverrides:Qt})},[_t,e,n,i,a,c,d,me,Le,Ze,Ge,$n,Q,Ve,Ct,(ca=lt==null?void 0:lt.headSha)!=null?ca:null,(b=lt==null?void 0:lt.branchName)!=null?b:null,Me,Qt]),{allCommits:Si,clusterKeyByCommitId:Eo,leadByClusterKey:Ii,clusterCounts:Qs,matchingNodes:Us,matchingNodeIds:Cs,normalizedSearchQuery:Kn,focusedNode:wn,defaultCollapsedClumps:Vs,renderNodes:xn,visibleNodesBySha:ms,contentWidth:Ci,contentHeight:Vo,connectors:ci,mergeConnectors:Pt,connectorDecisions:Ys,nodeWarnings:ks,commitIdsWithRenderedAncestry:ki,connectorParentShas:co,branchStartShas:Ko,branchOffNodeShas:ps,crossBranchOutgoingShas:Ws,branchBaseCommitByName:Zs,pointFormatter:bn}=Uo,js=!!Kn,Js=hs/aa,Ms=_.useMemo(()=>({transform:`scale(${1/Js})`,transformOrigin:"top left",width:`${100*Js}%`,height:`${100*Js}%`}),[Js]),Fs=-(20/Js),_n=_.useMemo(()=>{const q=new Map;for(const Z of xn)q.set(Z.commit.visualId,Z);return q},[xn]),Es=_.useMemo(()=>eS(xn,Fs),[xn,Fs]),eo=q=>{var Ee;const Z=q.commit.id,ie=q.commit.visualId;if(js&&Cs.has(Z)||(wn==null?void 0:wn.commit.id)===Z||Vn===null)return!0;if(!Vn.has(ie))return!1;const ee=Eo.get(ie);return ee&&((Ee=Qs.get(ee))!=null?Ee:1)>1&&(Ge.has(ee)||!Vs.has(ee)&&!$n.has(ee)),!0},Yo=1.25/Js,Ts=qw/Js,ji="border-border/70",Qo="border-select",To=_.useMemo(()=>new Map(e.map(q=>[q.name,q])),[e]),uo=(v=lt==null?void 0:lt.hasUncommittedChanges)!=null?v:!1;_.useMemo(()=>new Set(e.filter(q=>q.commitsAhead===0&&!q.name.startsWith("*")).map(q=>q.name)),[e]);const Zo=_.useMemo(()=>{var Z,ie;const q=new Map;for(const ee of xn){const Ee=(Z=q.get(ee.commit.id))!=null?Z:new Set;Ee.add(ee.commit.branchName),q.set(ee.commit.id,Ee)}for(const ee of i){const Ee=(ie=q.get(ee.fullSha))!=null?ie:new Set;ee.branch&&Ee.add(ee.branch),q.set(ee.fullSha,Ee)}return q},[xn,i,d]),ui=_.useMemo(()=>new Map(Object.entries(c).map(([q,Z])=>[q,new Set(Z)])),[c]),cs=_.useMemo(()=>{var ee;const q=new Set(i.map(Ee=>Ee.fullSha)),Z=new Set,ie=Ee=>{Ee&&(Z.add(Ee),Z.add(Ee.slice(0,7)))};for(const Ee of e){if(Ee.commitsBehind<=0)continue;const qe=(ee=me[Ee.name])!=null?ee:[];for(const it of qe)it.kind==="branch-created"||it.kind==="uncommitted"||it.kind==="stash"||q.has(it.fullSha)||ie(it.fullSha);Ee.headSha&&!q.has(Ee.headSha)&&ie(Ee.headSha)}return Z},[e,me,i]),fo=_.useCallback(()=>{vo.current,Ks()},[Ks,vo]),{isMarqueeSelecting:Wo,marqueeRect:As,selectedCommitShas:ho,setSelectedCommitShas:Ao,mergeTargetCommitSha:Ln,setMergeTargetCommitSha:Xn,startMarqueeDrag:ts}=mS({scrollContainerRef:ot,renderedCameraRef:es,getTransformLayerOriginScreen:ws,renderNodes:xn,shouldRenderNode:eo,onPointerReleaseNoMarquee:fo}),No=_.useMemo(()=>new Set(xn.map(q=>q.commit.id)),[xn]),Sn=_.useMemo(()=>ho.filter(q=>No.has(q)),[ho,No]),di=_.useCallback((q,Z)=>{var Ee;if(!Z)return!1;if(((Ee=me[q])!=null?Ee:[]).some(qe=>$i(qe.fullSha,Z)||$i(qe.sha,Z)))return!0;const ee=To.get(q);return!!(ee!=null&&ee.headSha&&$i(ee.headSha,Z))},[me,To]),Ns=(k=lt==null?void 0:lt.branchName)!=null?k:null,mo=(M=lt==null?void 0:lt.headSha)!=null?M:null,Mi=Ns==null,Jo=_.useMemo(()=>{if(!Ct)return null;const q=xn.filter(Z=>Z.commit.id===Ct);return q.length===0?null:q.length===1||!wn?q[0]:q.reduce((Z,ie)=>{const ee=(Z.x-wn.x)**2+(Z.y-wn.y)**2;return(ie.x-wn.x)**2+(ie.y-wn.y)**2<ee?ie:Z})},[Ct,xn,wn]),ei=_.useCallback((q,Z,ie)=>{for(const ee of V){if(!nm(ee,X))continue;if(ee.branchName){if(ee.branchName===q&&$i(ee.headSha,Z))return ee;continue}if(!$i(ee.headSha,Z)&&!$i(ee.headSha,ie))continue;if(ee.parentSha&&di(q,ee.parentSha)||di(q,ee.headSha))return ee;const Ee=To.get(q);if(Ee&&$i(Ee.headSha,ee.headSha)||q===d&&i.some(qe=>$i(qe.fullSha,ee.headSha)))return ee}return null},[V,X,di,To,d,i]),Ei=_.useCallback(q=>{for(const Z of V)if(nm(Z,X)&&Z.branchName===q)return Z;return null},[V,X]),ti=_.useCallback((q,Z)=>{for(const ie of V)if(nm(ie,X)&&($i(ie.headSha,q)||$i(ie.headSha,Z)))return ie;return null},[V,X]),Et=_.useCallback(q=>{var Z;return Array.from((Z=Zo.get(q))!=null?Z:[])},[Zo]),to=_.useMemo(()=>{var qe,it,dt,Bt;const q=yt=>!/^stash\b/i.test(yt.trim()),Z=new Map;for(const yt of Sn){const jt=Et(yt).filter(q);if(jt.length===0)continue;const Cn=(qe=jt.find(cn=>cn!==d))!=null?qe:jt[0],Xt=Sn.filter(cn=>cn!==yt).filter(cn=>!new Set(Et(cn).filter(q)).has(Cn));Z.set(Cn,{targetSha:yt,targetBranch:Cn,sourceRefs:Xt})}const ie=Array.from(Z.values()),ee=Ln?ie.find(yt=>{var jt;return yt.targetSha===Ln||yt.targetBranch===((jt=Et(Ln)[0])!=null?jt:"")}):null,Ee=(it=ee!=null?ee:ie[ie.length-1])!=null?it:null;return{options:ie,selected:Ee,targetBranch:(dt=Ee==null?void 0:Ee.targetBranch)!=null?dt:null,sources:(Bt=Ee==null?void 0:Ee.sourceRefs)!=null?Bt:[]}},[Sn,Et,d,Ln]),Ji=_.useMemo(()=>{const q=Z=>!/^stash\b/i.test(Z.trim());return Sn.some(Z=>{const ie=Et(Z);return ie.length>0&&ie.filter(q).length===0})},[Sn,Et]),Pi=Sn.length>1&&to.options.length>0&&!!to.targetBranch&&to.sources.length>0&&!Ji&&!!A,[Hi,wo]=_.useState(!1);_.useEffect(()=>{Pi&&wo(!1)},[Pi,Sn]);const Do=_.useMemo(()=>{const q=[...Ns===d?[{name:d,headSha:mo!=null?mo:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...e].filter(Z=>!Z.name.startsWith("*")&&Z.unpushedCommits>0&&Z.remoteSyncStatus!=="on-github").map(Z=>[Z.name,Z]);return new Map(q)},[e,Ns,mo,d,a.length]),So=_.useMemo(()=>{const q=ee=>{var qe;const Ee=Et(ee).filter(it=>Do.has(it));return Ee.length===0?null:Ee.length===1?Ee[0]:Ns&&Ee.includes(Ns)?Ns:(qe=Ee.find(it=>it!==d))!=null?qe:Ee[0]},Z=ee=>{var Ee;return ee===d?a.map(qe=>{var it,dt;return{fullSha:qe.fullSha,sha:qe.sha,parentSha:(it=qe.parentSha)!=null?it:null,message:qe.message,author:qe.author,date:qe.date,kind:(dt=qe.kind)!=null?dt:"commit"}}):(Ee=me[ee])!=null?Ee:[]},ie=new Map;for(const ee of Sn){const Ee=q(ee);if(!Ee)continue;const qe=Do.get(Ee);if(!qe)continue;const it=Z(Ee).slice(0,qe.unpushedCommits),dt=it.findIndex(yt=>yt.fullSha===ee);if(dt===-1)continue;const Bt=ie.get(Ee);(!Bt||dt<Bt.targetIndex)&&ie.set(Ee,{branchName:Ee,targetSha:ee,targetIndex:dt,commitCount:it.length-dt})}return Array.from(ie.values())},[Sn,Et,Do,Ns,d,a,me]),fi=_.useMemo(()=>Array.from(new Set(Sn.map(q=>/^STASH:(\d+)$/.exec(q)).filter(q=>!!q).map(q=>parseInt(q[1],10)))).sort((q,Z)=>q-Z),[Sn]),E=Sn.includes("WORKING_TREE"),W=(E?1:0)+fi.length,ce=[...E?["Uncommitted changes"]:[],...fi.map(q=>`Stash ${q+1}`)],Ce=Do.size,Pe=!Mi&&!!Ns&&Do.has(Ns),rt=Ns?`Push ${Ns}`:"Push current branch",Wt=So.length===1?So[0].commitCount>1?`Push ${So[0].commitCount} commits on ${So[0].branchName}`:`Push ${So[0].targetSha.slice(0,7)} on ${So[0].branchName}`:`Push ${So.length} selected ranges`,Vt=_.useCallback(q=>{const Z=q.target;Z!=null&&Z.closest('.window-no-drag, input, textarea, select, button, [contenteditable="true"]')||Sp().startDragging()},[]);_.useEffect(()=>{const q=Rn||Wo;je.current!==q&&(je.current=q,Kt==null||Kt(q))},[Rn,Wo,Kt]),_.useEffect(()=>{const q=Kn?Us.length:null;tt.current!==q&&(tt.current=q,$t==null||$t(q))},[Us.length,Kn,$t]),_.useEffect(()=>{const q=Kn&&Ct?(()=>{const Z=Us.findIndex(ie=>ie.commit.id===Ct);return Z>=0?Z:null})():null;Ue.current!==q&&(Ue.current=q,pt==null||pt(q))},[Ct,Us,Kn,pt]);const At=_.useMemo(()=>{var Bt,yt,jt,Cn,Xt,cn;if(!Kn)return null;const q=Kn,Z=e.map(On=>On.name),ie=Z.find(On=>On.toLowerCase()===q),ee=ie!=null?ie:Z.find(On=>On.toLowerCase().startsWith(q)),qe=ee!=null?ee:Z.find(On=>On.toLowerCase().includes(q));if(!qe)return null;const it=(Bt=e.find(On=>On.name===qe))!=null?Bt:null;if(it!=null&&it.headSha)return it.headSha;const dt=(yt=me[qe])!=null?yt:[];return dt.length>0?(Cn=(jt=dt[0])==null?void 0:jt.fullSha)!=null?Cn:null:qe===d&&(cn=(Xt=i[0])==null?void 0:Xt.fullSha)!=null?cn:null},[Kn,e,me,d,i]);_.useEffect(()=>{var ee,Ee,qe;if(!Kn){if(ye.current=ht,Ae.current===null)return;Ae.current=null,qt==null||qt(null);return}if(ht<=0||ye.current===ht)return;ye.current=ht;let q;const Z=Ct?Us.findIndex(it=>it.commit.id===Ct):-1,ie=Us.length>0?Z<0?0:(Z+Tt+Us.length)%Us.length:-1;q=(qe=(Ee=(ee=Us[ie])==null?void 0:ee.commit.id)!=null?Ee:At)!=null?qe:null,Ae.current!==q&&(Ae.current=q,qt==null||qt(q))},[Us,Kn,qt,At,ht,Tt]),_.useLayoutEffect(()=>{if(!Ct)return;const q=`${Ct}:${ht}`;if(st.current===q)return;const Z=ot.current,ie=Jo;if(!Z||!ie)return;const ee=ws();if(!ee)return;const Ee=Z.getBoundingClientRect(),qe=es.current.zoom,it=qe/aa,dt=ie.x+Un/2,Bt=ie.y+Ol+zs/2,yt=Ee.left+Ee.width/2,jt=Ee.top+Ee.height/2;Rs(yt-ee.x-dt*it,jt-ee.y-Bt*it,qe),st.current=q},[Ct,ht,Jo,ws,Rs,es]);const nn=(oe=(H=Is==null?void 0:Is.width)!=null?H:(N=ot.current)==null?void 0:N.clientWidth)!=null?oe:0,vn=(et=(Te=Is==null?void 0:Is.height)!=null?Te:(he=ot.current)==null?void 0:he.clientHeight)!=null?et:0,ln=nn>0&&vn>0?Ry(nn,vn,es.current,{innerPaddingPx:Id}):null,Gn=ln!=null?By(ln,es.current.zoom):null,sn=q=>{if(!Gn)return!0;const{fromX:Z,fromY:ie,toX:ee,toY:Ee}=q;return Jw(Z,ie,ee,Ee,Gn,q.fromFace,q.toFace)};_.useLayoutEffect(()=>{var it;const q=ot.current;if(!q||q.clientWidth<=0||q.clientHeight<=0)return;const Z=q.clientWidth,ie=q.clientHeight;lo(dt=>(dt==null?void 0:dt.width)===Z&&(dt==null?void 0:dt.height)===ie?dt:{width:Z,height:ie});const ee=Ry(Z,ie,es.current,{innerPaddingPx:Id});if(!ee){bo(dt=>dt===null?dt:null);return}const Ee=By(ee,es.current.zoom),qe=tS(Es,Ee,_n,Fs);for(const dt of xn){const Bt=Eo.get(dt.commit.visualId);if(!Bt||((it=Qs.get(Bt))!=null?it:1)<=1)continue;(Ge.has(Bt)||!Vs.has(Bt)&&!$n.has(Bt))&&qe.add(dt.commit.visualId)}bo(dt=>Qw(dt,qe)?dt:qe)},[hs,ht,Ct,en,Ge,$n,Vs,Eo,Qs,xn,Is,Es,_n,Fs]),_.useLayoutEffect(()=>{const q=ot.current;if(!q)return;const Z=()=>{const ee=q.clientWidth,Ee=q.clientHeight;ee<=0||Ee<=0||lo(qe=>(qe==null?void 0:qe.width)===ee&&(qe==null?void 0:qe.height)===Ee?qe:{width:ee,height:Ee})};Z();const ie=new ResizeObserver(Z);return ie.observe(q),()=>ie.disconnect()},[Si.length]);const Ut=xn.filter(q=>eo(q)).length,Bn=Pt.filter(q=>sn(q)).length,ys=ci.filter(q=>sn(q)).length,po=_.useCallback((q,Z)=>{if(Jt.current){q.preventDefault(),q.stopPropagation();return}q.stopPropagation();const ie=Z.commit.id;if(q.shiftKey?(Ao(it=>it.includes(ie)?it.filter(dt=>dt!==ie):[...it,ie]),Xn(ie)):(Ao(it=>it.includes(ie)?[]:[ie]),Xn(it=>it===ie?null:ie)),!(q.metaKey||q.ctrlKey||q.detail>=2)||ie==="WORKING_TREE")return;const Ee=ie.length>=40?ie.slice(0,7):ie;let qe=null;if(Z.commit.branchName?(qe=ei(Z.commit.branchName,ie,Ee),qe||(qe=Ei(Z.commit.branchName))):qe=ti(ie,Ee),qe&&pe){pe(qe.path);return}h==null||h({commitSha:ie})},[ti,ei,Ei,h,pe]),Bs=_.useCallback((q,Z)=>{var dt,Bt,yt,jt,Cn;if(q.button!==0)return;const ie=q.target;if(ie!=null&&ie.closest('[data-selectable-text="true"]')||ie!=null&&ie.closest("button, a, input, textarea, select"))return;q.stopPropagation(),q.preventDefault(),Jt.current=!1,q.currentTarget.setPointerCapture(q.pointerId);const ee=(dt=Qt[Z.commit.visualId])!=null?dt:Qt[Z.commit.id];zt.current={nodeId:Z.commit.visualId,startX:q.clientX,startY:q.clientY,baseX:(Bt=ee==null?void 0:ee.x)!=null?Bt:Z.x,baseY:(yt=ee==null?void 0:ee.y)!=null?yt:Z.y,moved:!1,pendingX:(jt=ee==null?void 0:ee.x)!=null?jt:Z.x,pendingY:(Cn=ee==null?void 0:ee.y)!=null?Cn:Z.y};const Ee=()=>{tn.current=null;const Xt=zt.current;Xt&&pn(cn=>({...cn,[Xt.nodeId]:{x:Xt.pendingX,y:Xt.pendingY}}))},qe=Xt=>{const cn=zt.current;if(!cn)return;const On=es.current.zoom/aa,zn=On>0?1/On:1,jo=(Xt.clientX-cn.startX)*zn,Lo=(Xt.clientY-cn.startY)*zn;(Math.abs(jo)>2||Math.abs(Lo)>2)&&(cn.moved=!0),cn.moved&&(Jt.current=!0),cn.pendingX=cn.baseX+jo,cn.pendingY=cn.baseY+Lo,tn.current==null&&(tn.current=window.requestAnimationFrame(Ee))},it=()=>{window.removeEventListener("pointermove",qe),window.removeEventListener("pointerup",it),window.removeEventListener("pointercancel",it),tn.current!=null&&(window.cancelAnimationFrame(tn.current),tn.current=null,Ee());try{q.currentTarget.releasePointerCapture(q.pointerId)}catch{}const Xt=zt.current;zt.current=null,Xt&&window.setTimeout(()=>{Jt.current=!1},0)};window.addEventListener("pointermove",qe),window.addEventListener("pointerup",it),window.addEventListener("pointercancel",it)},[Qt]),Ti=_.useCallback(async()=>{if(!de)return;await de(bt)&&(Je(!1),vt(""))},[de,bt]),_o=_.useCallback(async()=>{F&&(await F({branchNames:[],discardUncommittedChanges:E,stashIndices:fi}),Rt(!1),Ao([]),Xn(null))},[F,E,fi]),Co=_.useCallback(async()=>{var Z;const q=rn.trim();if(q){if(Ht==="new-root"){if(!z)return;await z(q)}else{if(!xe)return;const ie=Sn.length===1?Sn[0]:(Z=lt==null?void 0:lt.headSha)!=null?Z:null;if(!ie||!(ie==="WORKING_TREE"||ie.startsWith("STASH:")||ie===(lt==null?void 0:lt.headSha)))return;await xe(ie,q)}mt(!1),ft(""),dn("from-selected-node"),Ao([]),Xn(null)}},[lt==null?void 0:lt.headSha,Ht,rn,xe,z,Sn]),ko=!!(lt!=null&&lt.headSha),Ro=Sn.length===0&&ko,go=Sn.length===1&&(Sn[0]==="WORKING_TREE"||Sn[0].startsWith("STASH:"))||Ro,Bo=!!z;return _.useEffect(()=>{if(wt){if(!go&&!Ro&&Bo){dn("new-root");return}(go||Ro)&&dn("from-selected-node")}},[Bo,Ro,wt,go]),_.useEffect(()=>{const q=U.current;if(!q)return;const Z=640,ie=440,ee=()=>{const qe=q.getBoundingClientRect().width;Zt(qe<Z),yn(qe<ie)};ee();const Ee=new ResizeObserver(()=>ee());return Ee.observe(q),()=>Ee.disconnect()},[]),_.useEffect(()=>{const q=Z=>{if(!F||Ke||Sn.length===0)return;const ie=Z.target;ie!=null&&ie.closest('input, textarea, select, button, [contenteditable="true"]')||Z.key!=="Delete"&&Z.key!=="Backspace"||(Z.preventDefault(),Rt(!0))};return window.addEventListener("keydown",q),()=>window.removeEventListener("keydown",q)},[Ke,F,Sn.length]),_.useLayoutEffect(()=>{if(x||xt||Si.length===0||gs.current===kt)return;const q=window.requestAnimationFrame(()=>{gs.current!==kt&&(gs.current=kt,Xe==null||Xe(kt))});return()=>window.cancelAnimationFrame(q)},[Si.length,x,xt,kt,Xe]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-background",children:[l.jsx(rS,{isOpen:Q,onClose:()=>be==null?void 0:be(),visibleBounds:Gn,renderedNodeCount:Ut,totalNodeCount:xn.length,renderedMergeConnectorCount:Bn,totalMergeConnectorCount:Pt.length,renderedConnectorCount:ys,totalConnectorCount:ci.length,mapGridCullViewportInsetScreenPx:Xw,debugRows:Uo.debugRows,branchDebugRows:Uo.branchDebugRows,connectorDecisions:Ys}),Ie?l.jsxs("header",{"data-tauri-drag-region":!0,onPointerDown:Vt,className:"window-drag-region pointer-events-none absolute inset-x-0 top-0 z-[70] flex w-full select-none",children:[l.jsxs("div",{ref:U,className:"pointer-events-auto ml-auto flex w-full max-w-[calc(100vw-116px)] min-w-0 items-start justify-between gap-3 p-2.25 select-none",children:[l.jsx("div",{className:"flex min-w-0 flex-nowrap items-center justify-start gap-3 overflow-visible",children:l.jsx(oS,{compactLabels:Ps,selectedVisibleCommitShas:Sn,commitInProgress:O,commitDisabled:se,stageInProgress:fe,stashInProgress:Fe,stashDisabled:ne,pushInProgress:D,hasUncommittedChanges:uo,createBranchFromNodeInProgress:ae,onCommitLocalChanges:de,onStageAllChanges:I?()=>void I():void 0,onStashLocalChanges:Ne,onPushCurrentBranch:P,onPushAllBranches:R,onPushCommitTargets:L,onMergeRefsIntoBranch:A,selectedPushTargets:So,selectedPushLabel:Wt,canPushCurrentBranch:Pe,pushCurrentBranchLabel:rt,pushableRemoteBranchCount:Ce,selectedCommitTargetOption:to,mergeInProgress:T,mergeTargetCommitSha:Ln,setMergeTargetCommitSha:Xn,worktrees:V,currentRepoPath:X,worktreeMenuOpen:We,setWorktreeMenuOpen:nt,onSwitchToWorktree:pe,onRemoveWorktree:le,removeWorktreeInProgress:ue,setCommitDialogOpen:Je,setNewBranchDialogOpen:mt,hideMergeControls:!0})}),l.jsx("div",{className:"flex min-w-0 shrink-0 items-center justify-end gap-2",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto flex items-center gap-2",children:[jn?null:l.jsx(uS,{query:Ie.gridSearchQuery,onQueryChange:Ie.setGridSearchQuery,resultCount:Ie.gridSearchResultCount,resultIndex:Ie.gridSearchResultIndex,onJump:q=>{Ie.setGridSearchJumpDirection(q),Ie.setGridSearchJumpToken(Z=>Z+1)}}),l.jsx(cS,{compactLabels:Ps,orientation:Ie.mapGridOrientation,onOrientationChange:Ie.setMapGridOrientation})]})})]}),l.jsxs("div",{className:"pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5",children:[(ut=Ie.githubAuthStatus)!=null&&ut.ghAvailable&&!Ie.githubAuthStatus.authenticated?l.jsx("button",{onClick:Ie.onGitHubAuthSetup,disabled:Ie.githubAuthLoading,className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Ie.githubAuthLoading?"Connecting GitHub...":"Connect GitHub"}):null,Ie.githubAuthStatus&&!Ie.githubAuthStatus.ghAvailable?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] font-medium text-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",children:"Install `gh` for private PR data"})]}):null,Ie.githubAuthMessage?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] text-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",title:Ie.githubAuthMessage,children:Ie.githubAuthMessage})]}):null,Ie.commitSwitchFeedback?l.jsxs("div",{className:`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200 ${Ie.isCommitSwitchFeedbackVisible?"opacity-100":"opacity-0"} ${Ie.commitSwitchFeedback.kind==="error"?"border-red-500/25 bg-red-50/95 text-red-600 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-400":"border-blue-500/25 bg-blue-50/95 text-blue-600 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-400"}`,title:Ie.commitSwitchFeedback.message,children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium opacity-70",children:Ie.commitSwitchFeedback.kind==="error"?"Alert":"Update"}),l.jsx("p",{className:"truncate text-[11px]",children:Ie.commitSwitchFeedback.message})]}):null]})]}):null,Pi?l.jsx("div",{className:"pointer-events-none absolute bottom-2.25 left-1/2 z-[80] -translate-x-1/2",children:l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-2.25",children:[l.jsxs("div",{className:"inline-flex h-7 items-center rounded-md border border-border bg-background/95 pl-[2px] pr-[4px] backdrop-blur-sm",children:[l.jsx("span",{className:"px-2 text-[11px] font-medium text-foreground",children:"Merge to..."}),l.jsxs("div",{className:"relative inline-flex h-5 items-center rounded-[2px] bg-muted/30 p-0.5",children:[l.jsx("div",{className:"absolute inset-0.5 overflow-hidden rounded-[1px]",children:l.jsx("div",{className:`h-full rounded-[1px] bg-border ${Hi?"transition-all duration-200 ease-in-out":""}`,style:{width:`var(--${Hs}-active-width, 0px)`,transform:`translateX(var(--${Hs}-active-offset, 0px))`}})}),to.options.map(q=>{const Z=q.targetBranch===to.targetBranch;return l.jsx("button",{type:"button",onClick:()=>{q.targetSha!==Ln&&wo(!0),Xn(q.targetSha)},ref:ie=>{if(!ie)return;const ee=ie.parentElement;if(!ee||!Z)return;const Ee=ie.getBoundingClientRect(),qe=ee.getBoundingClientRect();ee.style.setProperty(`--${Hs}-active-width`,`${Ee.width}px`),ee.style.setProperty(`--${Hs}-active-offset`,`${Ee.left-qe.left}px`)},className:`relative z-10 h-4.5 px-2 text-[11px] font-medium transition-colors ${Z?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:q.targetBranch},`merge-${q.targetBranch}`)})]})]}),l.jsxs("button",{type:"button",onClick:()=>void A(to.sources,to.targetBranch),disabled:to.sources.length===0||T,className:"inline-flex h-7 items-center rounded-md border border-border bg-background px-2 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(nb,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),T?"Merging...":"Confirm"]})]})}):null,x||Si.length===0?l.jsx(pS,{}):l.jsx(aS,{scrollContainerRef:ot,mapPadHostRef:J,transformLayerRef:we,isMarqueeSelecting:Wo,contentWidth:Ci,contentHeight:Vo,isCameraMoving:Rn,onWheel:qn,onMouseDown:ts,onNodePointerDown:Bs,labelTopPx:Fs,inverseZoomStyle:Ms,displayZoom:Js,selectedVisibleCommitShas:Sn,normalizedSearchQuery:Kn,matchingNodeIds:Cs,focusedNode:Jo,renderNodes:xn,shouldRenderNode:eo,manuallyOpenedClumps:Ge,manuallyClosedClumps:$n,defaultCollapsedClumps:Vs,leadByClusterKey:Ii,clusterKeyByCommitId:Eo,clusterCounts:Qs,commitIdsWithRenderedAncestry:ki,nodeWarnings:ks,connectorParentShas:co,branchStartShas:Ko,branchOffNodeShas:ps,crossBranchOutgoingShas:Ws,branchBaseCommitByName:Zs,branchStartAccentClass:Qo,connectorParentAccentClass:ji,commitCornerRadiusPx:Ts,lineStrokeWidth:Yo,pointFormatter:bn,connectors:ci,mergeConnectors:Pt,cullConnectorPath:sn,flushCameraReactTick:Ks,setManuallyOpenedClumps:In,setManuallyClosedClumps:Ds,onCommitCardClick:po,unpushedCommitShasSetByBranch:ui,remoteCommitShas:cs,checkedOutHeadSha:mo,orientation:Me}),gt?l.jsx(_S,{}):null,As&&Wo?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:As.left,top:As.top,width:As.width,height:As.height,borderColor:"var(--select)",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(lS,{commitDialogOpen:Re,commitMessageDraft:bt,onCommitMessageDraftChange:vt,onCommitDialogClose:()=>Je(!1),onCommitConfirm:()=>void Ti(),commitInProgress:O,deleteConfirmOpen:Ke,deleteSelectionItems:ce,onDeleteConfirmClose:()=>Rt(!1),onDeleteConfirm:()=>void _o(),deleteInProgress:Y,deletableSelectionCount:W,newBranchDialogOpen:wt,newBranchName:rn,newBranchCreateMode:Ht,onNewBranchNameChange:ft,onNewBranchCreateModeChange:dn,onNewBranchDialogClose:()=>mt(!1),onNewBranchConfirm:()=>void Co(),selectedCommitCanCreateBranch:go,currentCheckedOutCommitCanCreateBranch:Ro,createBranchFromNodeInProgress:ae})]})}function gS({branches:e,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y={},branchCommitPreviews:g={},branchParentByName:x={},branchUniqueAheadCounts:w={},gridSearchQuery:C="",gridSearchJumpToken:j=0,gridSearchJumpDirection:A=1,gridFocusSha:T=null,onGridSearchResultCountChange:R,onGridSearchResultIndexChange:P,onGridSearchFocusChange:L,view:D="time",isLoading:F=!1,scrollRequest:Y,focusedErrorBranch:V,checkedOutRef:X=null,mapTopInsetPx:le=0,onMergeRefsIntoBranch:ue,mergeInProgress:pe=!1,onPushAllBranches:Ne,onPushCurrentBranch:Fe,onPushCommitTargets:ne,pushInProgress:de=!1,onDeleteSelection:O,worktrees:se=[],currentRepoPath:I,onRemoveWorktree:fe,removeWorktreeInProgress:xe=!1,onSwitchToWorktree:z,onStashLocalChanges:ae,stashInProgress:Q=!1,stashDisabled:be=!1,onCommitLocalChanges:Me,commitInProgress:me=!1,commitDisabled:Le=!1,onStageAllChanges:Ze,stageInProgress:Ve=!1,onCreateBranchFromNode:ht,onCreateRootBranch:Tt,createBranchFromNodeInProgress:Ct=!1,isMutationBusy:lt=!1,onMoveNodeBackToBranch:$t,isDebugOpen:pt=!1,onDebugClose:qt,orientation:Kt="horizontal",onInteractionChange:K,manuallyOpenedClumps:De,manuallyClosedClumps:ct,setManuallyOpenedClumps:at,setManuallyClosedClumps:_t,layoutModel:Ie,gridHudProps:xt,blockMapInteraction:gt=!1,blockMapDisplay:kt=!1,mapReadyEpoch:Xe=0,onMapReadyForDisplay:ot}){const U=new Set(u.map(Ue=>Ue.branchName)),J=14*864e5,we=Date.now();function je(Ue){return U.has(Ue.name)||we-new Date(Ue.lastCommitDate).getTime()<=J}const tt=e.filter(Ue=>Ue.status==="stale"&&je(Ue)).sort((Ue,Ae)=>new Date(Ae.lastCommitDate).getTime()-new Date(Ue.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:D==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx($y,{branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:w,gridSearchQuery:C,gridSearchJumpToken:j,gridSearchJumpDirection:A,gridFocusSha:T,onGridSearchResultCountChange:R,onGridSearchResultIndexChange:P,onGridSearchFocusChange:L,staleBranches:tt,isLoading:F,scrollRequest:Y,focusedErrorBranch:V,checkedOutRef:X,mapTopInsetPx:le,onMergeRefsIntoBranch:ue,mergeInProgress:pe,onPushAllBranches:Ne,onPushCurrentBranch:Fe,onPushCommitTargets:ne,pushInProgress:de,onDeleteSelection:O,worktrees:se,currentRepoPath:I,onRemoveWorktree:fe,removeWorktreeInProgress:xe,onSwitchToWorktree:z,onStashLocalChanges:ae,stashInProgress:Q,stashDisabled:be,onCommitLocalChanges:Me,commitInProgress:me,commitDisabled:Le,onStageAllChanges:Ze,stageInProgress:Ve,onCreateBranchFromNode:ht,onCreateRootBranch:Tt,createBranchFromNodeInProgress:Ct,isMutationBusy:lt,onMoveNodeBackToBranch:$t,isDebugOpen:pt,onDebugClose:qt,orientation:Kt,onInteractionChange:K,manuallyOpenedClumps:De,manuallyClosedClumps:ct,setManuallyOpenedClumps:at,setManuallyClosedClumps:_t,layoutModel:Ie,gridHudProps:xt,blockMapInteraction:gt,blockMapDisplay:kt,mapReadyEpoch:Xe,onMapReadyForDisplay:ot})}):D==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx($y,{branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,isLoading:F,defaultBranch:d,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:w,gridSearchQuery:C,gridSearchJumpToken:j,gridSearchJumpDirection:A,gridFocusSha:T,checkedOutRef:X,onGridSearchResultCountChange:R,onGridSearchResultIndexChange:P,onGridSearchFocusChange:L,onInteractionChange:K,manuallyOpenedClumps:De,manuallyClosedClumps:ct,setManuallyOpenedClumps:at,setManuallyClosedClumps:_t,layoutModel:Ie,isDebugOpen:pt,onDebugClose:qt,orientation:Kt,gridHudProps:xt,blockMapInteraction:gt,blockMapDisplay:kt,mapReadyEpoch:Xe,onMapReadyForDisplay:ot})}):null})}var zl=Gx();const Mp=_.createContext({});function Zc(e){const n=_.useRef(null);return n.current===null&&(n.current=e()),n.current}const yS=typeof window<"u",Ep=yS?_.useLayoutEffect:_.useEffect,Zd=_.createContext(null);function Tp(e,n){e.indexOf(n)===-1&&e.push(n)}function Dl(e,n){const i=e.indexOf(n);i>-1&&e.splice(i,1)}const xa=(e,n,i)=>i>n?n:i<e?e:i;let Ap=()=>{};const hr={},cb=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function ub(e){return typeof e=="object"&&e!==null}const db=e=>/^0[^.\s]+$/u.test(e);function fb(e){let n;return()=>(n===void 0&&(n=e()),n)}const Qi=e=>e,xS=(e,n)=>i=>n(e(i)),Jc=(...e)=>e.reduce(xS),Rl=(e,n,i)=>{const a=n-e;return a===0?1:(i-e)/a};class Np{constructor(){this.subscriptions=[]}add(n){return Tp(this.subscriptions,n),()=>Dl(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const wi=e=>e*1e3,Ki=e=>e/1e3;function hb(e,n){return n?e*(1e3/n):0}const bS=(e,n,i)=>{const a=n-e;return((i-e)%a+a)%a+e},mb=(e,n,i)=>(((1-3*i+3*n)*e+(3*i-6*n))*e+3*n)*e,vS=1e-7,wS=12;function SS(e,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=mb(d,a,c)-e,u>0?i=d:n=d;while(Math.abs(u)>vS&&++h<wS);return d}function eu(e,n,i,a){if(e===n&&i===a)return Qi;const c=u=>SS(u,0,1,e,i);return u=>u===0||u===1?u:mb(c(u),n,a)}const pb=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,_b=e=>n=>1-e(1-n),gb=eu(.33,1.53,.69,.99),Dp=_b(gb),yb=pb(Dp),xb=e=>e>=1?1:(e*=2)<1?.5*Dp(e):.5*(2-Math.pow(2,-10*(e-1))),Rp=e=>1-Math.sin(Math.acos(e)),bb=_b(Rp),vb=pb(Rp),CS=eu(.42,0,1,1),kS=eu(0,0,.58,1),wb=eu(.42,0,.58,1),Sb=e=>Array.isArray(e)&&typeof e[0]!="number";function Cb(e,n){return Sb(e)?e[bS(0,e.length,n)]:e}const kb=e=>Array.isArray(e)&&typeof e[0]=="number",jS={linear:Qi,easeIn:CS,easeInOut:wb,easeOut:kS,circIn:Rp,circInOut:vb,circOut:bb,backIn:Dp,backInOut:yb,backOut:gb,anticipate:xb},MS=e=>typeof e=="string",Iy=e=>{if(kb(e)){Ap(e.length===4);const[n,i,a,c]=e;return eu(n,i,a,c)}else if(MS(e))return jS[e];return e},id=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function ES(e,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(g){d.has(g)&&(y.schedule(g),e()),g(h)}const y={schedule:(g,x=!1,w=!1)=>{const j=w&&c?i:a;return x&&d.add(g),j.add(g),g},cancel:g=>{a.delete(g),d.delete(g)},process:g=>{if(h=g,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,y.process(g))}};return y}const TS=40;function jb(e,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=id.reduce((L,D)=>(L[D]=ES(u),L),{}),{setup:h,read:p,resolveKeyframes:y,preUpdate:g,update:x,preRender:w,render:C,postRender:j}=d,A=()=>{const L=hr.useManualTiming,D=L?c.timestamp:performance.now();i=!1,L||(c.delta=a?1e3/60:Math.max(Math.min(D-c.timestamp,TS),1)),c.timestamp=D,c.isProcessing=!0,h.process(c),p.process(c),y.process(c),g.process(c),x.process(c),w.process(c),C.process(c),j.process(c),c.isProcessing=!1,i&&n&&(a=!1,e(A))},T=()=>{i=!0,a=!0,c.isProcessing||e(A)};return{schedule:id.reduce((L,D)=>{const F=d[D];return L[D]=(Y,V=!1,X=!1)=>(i||T(),F.schedule(Y,V,X)),L},{}),cancel:L=>{for(let D=0;D<id.length;D++)d[id[D]].cancel(L)},state:c,steps:d}}const{schedule:rs,cancel:Ia,state:Ho,steps:sm}=jb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Qi,!0);let Td;function AS(){Td=void 0}const ii={now:()=>(Td===void 0&&ii.set(Ho.isProcessing||hr.useManualTiming?Ho.timestamp:performance.now()),Td),set:e=>{Td=e,queueMicrotask(AS)}},Mb=e=>n=>typeof n=="string"&&n.startsWith(e),Eb=Mb("--"),NS=Mb("var(--"),Bp=e=>NS(e)?DS.test(e.split("/*")[0].trim()):!1,DS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Py(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const $l={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Fc={...$l,transform:e=>xa(0,1,e)},ad={...$l,default:1},Pc=e=>Math.round(e*1e5)/1e5,Lp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function RS(e){return e==null}const BS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Op=(e,n)=>i=>!!(typeof i=="string"&&BS.test(i)&&i.startsWith(e)||n&&!RS(i)&&Object.prototype.hasOwnProperty.call(i,n)),Tb=(e,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(Lp);return{[e]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},LS=e=>xa(0,255,e),om={...$l,transform:e=>Math.round(LS(e))},Pr={test:Op("rgb","red"),parse:Tb("red","green","blue"),transform:({red:e,green:n,blue:i,alpha:a=1})=>"rgba("+om.transform(e)+", "+om.transform(n)+", "+om.transform(i)+", "+Pc(Fc.transform(a))+")"};function OS(e){let n="",i="",a="",c="";return e.length>5?(n=e.substring(1,3),i=e.substring(3,5),a=e.substring(5,7),c=e.substring(7,9)):(n=e.substring(1,2),i=e.substring(2,3),a=e.substring(3,4),c=e.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const Um={test:Op("#"),parse:OS,transform:Pr.transform},tu=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),cr=tu("deg"),ya=tu("%"),Lt=tu("px"),zS=tu("vh"),$S=tu("vw"),Hy={...ya,parse:e=>ya.parse(e)/100,transform:e=>ya.transform(e*100)},Ml={test:Op("hsl","hue"),parse:Tb("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(e)+", "+ya.transform(Pc(n))+", "+ya.transform(Pc(i))+", "+Pc(Fc.transform(a))+")"},ro={test:e=>Pr.test(e)||Um.test(e)||Ml.test(e),parse:e=>Pr.test(e)?Pr.parse(e):Ml.test(e)?Ml.parse(e):Um.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Pr.transform(e):Ml.transform(e),getAnimatableNone:e=>{const n=ro.parse(e);return n.alpha=0,ro.transform(n)}},IS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function PS(e){var n,i;return isNaN(e)&&typeof e=="string"&&(((n=e.match(Lp))==null?void 0:n.length)||0)+(((i=e.match(IS))==null?void 0:i.length)||0)>0}const Ab="number",Nb="color",HS="var",US="var(",Uy="${}",VS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Bl(e){const n=e.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(VS,p=>(ro.test(p)?(a.color.push(u),c.push(Nb),i.push(ro.parse(p))):p.startsWith(US)?(a.var.push(u),c.push(HS),i.push(p)):(a.number.push(u),c.push(Ab),i.push(parseFloat(p))),++u,Uy)).split(Uy);return{values:i,split:h,indexes:a,types:c}}function YS(e){return Bl(e).values}function Db({split:e,types:n}){const i=e.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=e[u],a[u]!==void 0){const d=n[u];d===Ab?c+=Pc(a[u]):d===Nb?c+=ro.transform(a[u]):c+=a[u]}return c}}function WS(e){return Db(Bl(e))}const FS=e=>typeof e=="number"?0:ro.test(e)?ro.getAnimatableNone(e):e,XS=(e,n)=>typeof e=="number"?n!=null&&n.trim().endsWith("/")?e:0:FS(e);function GS(e){const n=Bl(e);return Db(n)(n.values.map((a,c)=>XS(a,n.split[c])))}const ra={test:PS,parse:YS,createTransformer:WS,getAnimatableNone:GS};function im(e,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(n-e)*6*i:i<1/2?n:i<2/3?e+(n-e)*(2/3-i)*6:e}function qS({hue:e,saturation:n,lightness:i,alpha:a}){e/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=im(p,h,e+1/3),u=im(p,h,e),d=im(p,h,e-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Pd(e,n){return i=>i>0?n:e}const _s=(e,n,i)=>e+(n-e)*i,am=(e,n,i)=>{const a=e*e,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},KS=[Um,Pr,Ml],QS=e=>KS.find(n=>n.test(e));function Vy(e){const n=QS(e);if(!n)return!1;let i=n.parse(e);return n===Ml&&(i=qS(i)),i}const Yy=(e,n)=>{const i=Vy(e),a=Vy(n);if(!i||!a)return Pd(e,n);const c={...i};return u=>(c.red=am(i.red,a.red,u),c.green=am(i.green,a.green,u),c.blue=am(i.blue,a.blue,u),c.alpha=_s(i.alpha,a.alpha,u),Pr.transform(c))},Vm=new Set(["none","hidden"]);function ZS(e,n){return Vm.has(e)?i=>i<=0?e:n:i=>i>=1?n:e}function JS(e,n){return i=>_s(e,n,i)}function zp(e){return typeof e=="number"?JS:typeof e=="string"?Bp(e)?Pd:ro.test(e)?Yy:n4:Array.isArray(e)?Rb:typeof e=="object"?ro.test(e)?Yy:e4:Pd}function Rb(e,n){const i=[...e],a=i.length,c=e.map((u,d)=>zp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function e4(e,n){const i={...e,...n},a={};for(const c in i)e[c]!==void 0&&n[c]!==void 0&&(a[c]=zp(e[c])(e[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function t4(e,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=e.indexes[d][a[d]],p=(c=e.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const n4=(e,n)=>{const i=ra.createTransformer(n),a=Bl(e),c=Bl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Vm.has(e)&&!c.values.length||Vm.has(n)&&!a.values.length?ZS(e,n):Jc(Rb(t4(a,c),c.values),i):Pd(e,n)};function Bb(e,n,i){return typeof e=="number"&&typeof n=="number"&&typeof i=="number"?_s(e,n,i):zp(e)(e,n)}const s4=e=>{const n=({timestamp:i})=>e(i);return{start:(i=!0)=>rs.update(n,i),stop:()=>Ia(n),now:()=>Ho.isProcessing?Ho.timestamp:ii.now()}},Lb=(e,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(e(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Hd=2e4;function $p(e){let n=0;const i=50;let a=e.next(n);for(;!a.done&&n<Hd;)n+=i,a=e.next(n);return n>=Hd?1/0:n}function Ob(e,n=100,i){const a=i({...e,keyframes:[0,n]}),c=Math.min($p(a),Hd);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Ki(c)}}const $s={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Ym(e,n){return e*Math.sqrt(1-n*n)}const o4=12;function i4(e,n,i){let a=i;for(let c=1;c<o4;c++)a=a-e(a)/n(a);return a}const rm=.001;function a4({duration:e=$s.duration,bounce:n=$s.bounce,velocity:i=$s.velocity,mass:a=$s.mass}){let c,u,d=1-n;d=xa($s.minDamping,$s.maxDamping,d),e=xa($s.minDuration,$s.maxDuration,Ki(e)),d<1?(c=y=>{const g=y*d,x=g*e,w=g-i,C=Ym(y,d),j=Math.exp(-x);return rm-w/C*j},u=y=>{const x=y*d*e,w=x*i+i,C=Math.pow(d,2)*Math.pow(y,2)*e,j=Math.exp(-x),A=Ym(Math.pow(y,2),d);return(-c(y)+rm>0?-1:1)*((w-C)*j)/A}):(c=y=>{const g=Math.exp(-y*e),x=(y-i)*e+1;return-rm+g*x},u=y=>{const g=Math.exp(-y*e),x=(i-y)*(e*e);return g*x});const h=5/e,p=i4(c,u,h);if(e=wi(e),isNaN(p))return{stiffness:$s.stiffness,damping:$s.damping,duration:e};{const y=Math.pow(p,2)*a;return{stiffness:y,damping:d*2*Math.sqrt(a*y),duration:e}}}const r4=["duration","bounce"],l4=["stiffness","damping","mass"];function Wy(e,n){return n.some(i=>e[i]!==void 0)}function c4(e){let n={velocity:$s.velocity,stiffness:$s.stiffness,damping:$s.damping,mass:$s.mass,isResolvedFromDuration:!1,...e};if(!Wy(e,l4)&&Wy(e,r4))if(n.velocity=0,e.visualDuration){const i=e.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*xa(.05,1,1-(e.bounce||0))*Math.sqrt(c);n={...n,mass:$s.mass,stiffness:c,damping:u}}else{const i=a4({...e,velocity:0});n={...n,...i,mass:$s.mass},n.isResolvedFromDuration=!0}return n}function Xc(e=$s.visualDuration,n=$s.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:y,mass:g,duration:x,velocity:w,isResolvedFromDuration:C}=c4({...i,velocity:-Ki(i.velocity||0)}),j=w||0,A=y/(2*Math.sqrt(p*g)),T=d-u,R=Ki(Math.sqrt(p/g)),P=Math.abs(T)<5;a||(a=P?$s.restSpeed.granular:$s.restSpeed.default),c||(c=P?$s.restDelta.granular:$s.restDelta.default);let L,D,F,Y,V,X;if(A<1)F=Ym(R,A),Y=(j+A*R*T)/F,L=ue=>{const pe=Math.exp(-A*R*ue);return d-pe*(Y*Math.sin(F*ue)+T*Math.cos(F*ue))},V=A*R*Y+T*F,X=A*R*T-Y*F,D=ue=>Math.exp(-A*R*ue)*(V*Math.sin(F*ue)+X*Math.cos(F*ue));else if(A===1){L=pe=>d-Math.exp(-R*pe)*(T+(j+R*T)*pe);const ue=j+R*T;D=pe=>Math.exp(-R*pe)*(R*ue*pe-j)}else{const ue=R*Math.sqrt(A*A-1);L=ne=>{const de=Math.exp(-A*R*ne),O=Math.min(ue*ne,300);return d-de*((j+A*R*T)*Math.sinh(O)+ue*T*Math.cosh(O))/ue};const pe=(j+A*R*T)/ue,Ne=A*R*pe-T*ue,Fe=A*R*T-pe*ue;D=ne=>{const de=Math.exp(-A*R*ne),O=Math.min(ue*ne,300);return de*(Ne*Math.sinh(O)+Fe*Math.cosh(O))}}const le={calculatedDuration:C&&x||null,velocity:ue=>wi(D(ue)),next:ue=>{if(!C&&A<1){const Ne=Math.exp(-A*R*ue),Fe=Math.sin(F*ue),ne=Math.cos(F*ue),de=d-Ne*(Y*Fe+T*ne),O=wi(Ne*(V*Fe+X*ne));return h.done=Math.abs(O)<=a&&Math.abs(d-de)<=c,h.value=h.done?d:de,h}const pe=L(ue);if(C)h.done=ue>=x;else{const Ne=wi(D(ue));h.done=Math.abs(Ne)<=a&&Math.abs(d-pe)<=c}return h.value=h.done?d:pe,h},toString:()=>{const ue=Math.min($p(le),Hd),pe=Lb(Ne=>le.next(ue*Ne).value,ue,30);return ue+"ms "+pe},toTransition:()=>{}};return le}Xc.applyToOptions=e=>{const n=Ob(e,100,Xc);return e.ease=n.ease,e.duration=wi(n.duration),e.type="keyframes",e};const u4=5;function zb(e,n,i){const a=Math.max(n-u4,0);return hb(i-e(a),n-a)}function Wm({keyframes:e,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:y=.5,restSpeed:g}){const x=e[0],w={done:!1,value:x},C=X=>h!==void 0&&X<h||p!==void 0&&X>p,j=X=>h===void 0?p:p===void 0||Math.abs(h-X)<Math.abs(p-X)?h:p;let A=i*n;const T=x+A,R=d===void 0?T:d(T);R!==T&&(A=R-x);const P=X=>-A*Math.exp(-X/a),L=X=>R+P(X),D=X=>{const le=P(X),ue=L(X);w.done=Math.abs(le)<=y,w.value=w.done?R:ue};let F,Y;const V=X=>{C(w.value)&&(F=X,Y=Xc({keyframes:[w.value,j(w.value)],velocity:zb(L,X,w.value),damping:c,stiffness:u,restDelta:y,restSpeed:g}))};return V(0),{calculatedDuration:null,next:X=>{let le=!1;return!Y&&F===void 0&&(le=!0,D(X),V(X)),F!==void 0&&X>=F?Y.next(X-F):(!le&&D(X),w)}}}function d4(e,n,i){const a=[],c=i||hr.mix||Bb,u=e.length-1;for(let d=0;d<u;d++){let h=c(e[d],e[d+1]);if(n){const p=Array.isArray(n)?n[d]||Qi:n;h=Jc(p,h)}a.push(h)}return a}function $b(e,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=e.length;if(Ap(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=e[0]===e[1];e[0]>e[u-1]&&(e=[...e].reverse(),n=[...n].reverse());const h=d4(n,a,c),p=h.length,y=g=>{if(d&&g<e[0])return n[0];let x=0;if(p>1)for(;x<e.length-2&&!(g<e[x+1]);x++);const w=Rl(e[x],e[x+1],g);return h[x](w)};return i?g=>y(xa(e[0],e[u-1],g)):y}function Ib(e,n){const i=e[e.length-1];for(let a=1;a<=n;a++){const c=Rl(0,n,a);e.push(_s(i,1,c))}}function Pb(e){const n=[0];return Ib(n,e.length-1),n}function f4(e,n){return e.map(i=>i*n)}function h4(e,n){return e.map(()=>n||wb).splice(0,e.length-1)}function Hc({duration:e=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=Sb(a)?a.map(Iy):Iy(a),u={done:!1,value:n[0]},d=f4(i&&i.length===n.length?i:Pb(n),e),h=$b(d,n,{ease:Array.isArray(c)?c:h4(n,c)});return{calculatedDuration:e,next:p=>(u.value=h(p),u.done=p>=e,u)}}const m4=e=>e!==null;function Jd(e,{repeat:n,repeatType:i="loop"},a,c=1){const u=e.filter(m4),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const p4={decay:Wm,inertia:Wm,tween:Hc,keyframes:Hc,spring:Xc};function Hb(e){typeof e.type=="string"&&(e.type=p4[e.type])}class Ip{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const _4=e=>e/100;class Ud extends Ip{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==ii.now()&&this.tick(ii.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Hb(n);const{type:i=Hc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||Hc;p!==Hc&&typeof h[0]!="number"&&(this.mixKeyframes=Jc(_4,Bb(h[0],h[1])),h=[0,100]);const y=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),y.calculatedDuration===null&&(y.calculatedDuration=$p(y));const{calculatedDuration:g}=y;this.calculatedDuration=g,this.resolvedDuration=g+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=y}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:y=0,keyframes:g,repeat:x,repeatType:w,repeatDelay:C,type:j,onUpdate:A,finalKeyframe:T}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const R=this.currentTime-y*(this.playbackSpeed>=0?1:-1),P=this.playbackSpeed>=0?R<0:R>c;this.currentTime=Math.max(R,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let L=this.currentTime,D=a;if(x){const X=Math.min(this.currentTime,c)/h;let le=Math.floor(X),ue=X%1;!ue&&X>=1&&(ue=1),ue===1&&le--,le=Math.min(le,x+1),!!(le%2)&&(w==="reverse"?(ue=1-ue,C&&(ue-=C/h)):w==="mirror"&&(D=d)),L=xa(0,1,ue)*h}let F;P?(this.delayState.value=g[0],F=this.delayState):F=D.next(L),u&&!P&&(F.value=u(F.value));let{done:Y}=F;!P&&p!==null&&(Y=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const V=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Y);return V&&j!==Wm&&(F.value=Jd(g,this.options,T,this.speed)),A&&A(F.value),V&&this.finish(),F}then(n,i){return this.finished.then(n,i)}get duration(){return Ki(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Ki(n)}get time(){return Ki(this.currentTime)}set time(n){n=wi(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return zb(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(ii.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Ki(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=s4,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ii.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function g4(e){var n;for(let i=1;i<e.length;i++)(n=e[i])!=null||(e[i]=e[i-1])}const Hr=e=>e*180/Math.PI,Fm=e=>{const n=Hr(Math.atan2(e[1],e[0]));return Xm(n)},y4={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Fm,rotateZ:Fm,skewX:e=>Hr(Math.atan(e[1])),skewY:e=>Hr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Xm=e=>(e=e%360,e<0&&(e+=360),e),Fy=Fm,Xy=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Gy=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),x4={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Xy,scaleY:Gy,scale:e=>(Xy(e)+Gy(e))/2,rotateX:e=>Xm(Hr(Math.atan2(e[6],e[5]))),rotateY:e=>Xm(Hr(Math.atan2(-e[2],e[0]))),rotateZ:Fy,rotate:Fy,skewX:e=>Hr(Math.atan(e[4])),skewY:e=>Hr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Gm(e){return e.includes("scale")?1:0}function qm(e,n){if(!e||e==="none")return Gm(n);const i=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=x4,c=i;else{const h=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=y4,c=h}if(!c)return Gm(n);const u=a[n],d=c[1].split(",").map(v4);return typeof u=="function"?u(d):d[u]}const b4=(e,n)=>{const{transform:i="none"}=getComputedStyle(e);return qm(i,n)};function v4(e){return parseFloat(e.trim())}const Il=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Pl=new Set(Il),qy=e=>e===$l||e===Lt,w4=new Set(["x","y","z"]),S4=Il.filter(e=>!w4.has(e));function C4(e){const n=[];return S4.forEach(i=>{const a=e.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const fr={width:({x:e},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=e.max-e.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:e},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=e.max-e.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:(e,{transform:n})=>qm(n,"x"),y:(e,{transform:n})=>qm(n,"y")};fr.translateX=fr.x;fr.translateY=fr.y;const Ur=new Set;let Km=!1,Qm=!1,Zm=!1;function Ub(){if(Qm){const e=Array.from(Ur).filter(a=>a.needsMeasurement),n=new Set(e.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=C4(a);c.length&&(i.set(a,c),a.render())}),e.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Qm=!1,Km=!1,Ur.forEach(e=>e.complete(Zm)),Ur.clear()}function Vb(){Ur.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Qm=!0)})}function k4(){Zm=!0,Vb(),Ub(),Zm=!1}class Pp{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Ur.add(this),Km||(Km=!0,rs.read(Vb),rs.resolveKeyframes(Ub))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}g4(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Ur.delete(this)}cancel(){this.state==="scheduled"&&(Ur.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const j4=e=>e.startsWith("--");function Yb(e,n,i){j4(n)?e.style.setProperty(n,i):e.style[n]=i}const M4={};function Wb(e,n){const i=fb(e);return()=>{var a;return(a=M4[n])!=null?a:i()}}const E4=Wb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Fb=Wb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Oc=([e,n,i,a])=>`cubic-bezier(${e}, ${n}, ${i}, ${a})`,Ky={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Oc([0,.65,.55,1]),circOut:Oc([.55,0,1,.45]),backIn:Oc([.31,.01,.66,-.59]),backOut:Oc([.33,1.53,.69,.99])};function Xb(e,n){if(e)return typeof e=="function"?Fb()?Lb(e,n):"ease-out":kb(e)?Oc(e):Array.isArray(e)?e.map(i=>Xb(i,n)||Ky.easeOut):Ky[e]}function T4(e,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},y=void 0){const g={[n]:i};p&&(g.offset=p);const x=Xb(h,c);Array.isArray(x)&&(g.easing=x);const w={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return y&&(w.pseudoElement=y),e.animate(g,w)}function Hp(e){return typeof e=="function"&&"applyToOptions"in e}function A4({type:e,...n}){var i,a;return Hp(e)&&Fb()?e.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Gb extends Ip{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,Ap(typeof n.type!="string");const y=A4(n);this.animation=T4(i,a,c,y,u),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=Jd(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(g),Yb(i,a,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Ki(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Ki(n)}get time(){return Ki(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=wi(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&E4()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),Qi):c(this)}}const qb={anticipate:xb,backInOut:yb,circInOut:vb};function N4(e){return e in qb}function D4(e){typeof e.ease=="string"&&N4(e.ease)&&(e.ease=qb[e.ease])}const lm=10;class R4 extends Gb{constructor(n){D4(n),Hb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Ud({...d,autoplay:!1}),p=Math.max(lm,ii.now()-this.startTime),y=xa(0,lm,p-lm),g=h.sample(p).value,{name:x}=this.options;u&&x&&Yb(u,x,g),i.setWithVelocity(h.sample(Math.max(0,p-y)).value,g,y),h.stop()}}const Qy=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ra.test(e)||e==="0")&&!e.startsWith("url("));function B4(e){const n=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}function L4(e,n,i,a){const c=e[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=e[e.length-1],d=Qy(c,n),h=Qy(u,n);return!d||!h?!1:B4(e)||(i==="spring"||Hp(i))&&a}function Jm(e){e.duration=0,e.type="keyframes"}const Kb=new Set(["opacity","clipPath","filter","transform"]),O4=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function z4(e){for(let n=0;n<e.length;n++)if(typeof e[n]=="string"&&O4.test(e[n]))return!0;return!1}const $4=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),I4=fb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function P4(e){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=e;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:g}=n.owner.getProps();return I4()&&i&&(Kb.has(i)||$4.has(i)&&z4(h))&&(i!=="transform"||!g)&&!y&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const H4=40;class U4 extends Ip{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:y,element:g,...x}){var j;super(),this.stop=()=>{var A,T;this._animation&&(this._animation.stop(),(A=this.stopTimeline)==null||A.call(this)),(T=this.keyframeResolver)==null||T.cancel()},this.createdAt=ii.now();const w={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:y,element:g,...x},C=(g==null?void 0:g.KeyframeResolver)||Pp;this.keyframeResolver=new C(h,(A,T,R)=>this.onKeyframesResolved(A,T,w,!R),p,y,g),(j=this.keyframeResolver)==null||j.scheduleResolve()}onKeyframesResolved(n,i,a,c){var R,P;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:y,onUpdate:g}=a;this.resolvedAt=ii.now();let x=!0;L4(n,u,d,h)||(x=!1,(hr.instantAnimations||!p)&&(g==null||g(Jd(n,a,i))),n[0]=n[n.length-1],Jm(a),a.repeat=0);const C={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>H4?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},j=x&&!y&&P4(C),A=(P=(R=C.motionValue)==null?void 0:R.owner)==null?void 0:P.current;let T;if(j)try{T=new R4({...C,element:A})}catch{T=new Ud(C)}else T=new Ud(C);T.finished.then(()=>{this.notifyFinished()}).catch(Qi),this.pendingTimeline&&(this.stopTimeline=T.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=T}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),k4()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class V4{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return Zy(this.animations,"duration")}get iterationDuration(){return Zy(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Zy(e,n){let i=0;for(let a=0;a<e.length;a++){const c=e[a][n];c!==null&&c>i&&(i=c)}return i}class Y4 extends V4{then(n,i){return this.finished.finally(n).then(()=>{})}}function Qb(e,n,i,a=0,c=1){const u=Array.from(e).sort((y,g)=>y.sortNodePosition(g)).indexOf(n),d=e.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const W4=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function F4(e){const n=W4.exec(e);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function Zb(e,n,i=1){const[a,c]=F4(e);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return cb(d)?parseFloat(d):d}return Bp(c)?Zb(c,n,i+1):c}const X4={type:"spring",stiffness:500,damping:25,restSpeed:10},G4=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),q4={type:"keyframes",duration:.8},K4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Q4=(e,{keyframes:n})=>n.length>2?q4:Pl.has(e)?e.startsWith("scale")?G4(n[1]):X4:K4;function Jb(e,n){if(e!=null&&e.inherit&&n){const{inherit:i,...a}=e;return{...n,...a}}return e}function Up(e,n){var a,c;const i=(c=(a=e==null?void 0:e[n])!=null?a:e==null?void 0:e.default)!=null?c:e;return i!==e?Jb(i,e):i}const Z4=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function J4(e){for(const n in e)if(!Z4.has(n))return!0;return!1}const Vp=(e,n,i,a={},c,u)=>d=>{const h=Up(a,e)||{},p=h.delay||a.delay||0;let{elapsed:y=0}=a;y=y-wi(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-y,onUpdate:w=>{n.set(w),h.onUpdate&&h.onUpdate(w)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:e,motionValue:n,element:u?void 0:c};J4(h)||Object.assign(g,Q4(e,g)),g.duration&&(g.duration=wi(g.duration)),g.repeatDelay&&(g.repeatDelay=wi(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let x=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Jm(g),g.delay===0&&(x=!0)),(hr.instantAnimations||hr.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,Jm(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const w=Jd(g.keyframes,h);if(w!==void 0){rs.update(()=>{g.onUpdate(w),g.onComplete()});return}}return h.isSync?new Ud(g):new U4(g)};function Jy(e){const n=[{},{}];return e==null||e.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Yp(e,n,i,a){if(typeof n=="function"){const[c,u]=Jy(a);n=n(i!==void 0?i:e.custom,c,u)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[c,u]=Jy(a);n=n(i!==void 0?i:e.custom,c,u)}return n}function Vr(e,n,i){const a=e.getProps();return Yp(a,n,i!==void 0?i:a.custom,e)}const e5=new Set(["width","height","top","left","right","bottom",...Il]),e1=30,eC=e=>!isNaN(parseFloat(e)),Uc={current:void 0};class tC{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=ii.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=ii.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=eC(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new Np);const a=this.events[n].add(i);return n==="change"?()=>{a(),rs.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Uc.current&&Uc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=ii.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>e1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,e1);return hb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function mr(e,n){return new tC(e,n)}const ep=e=>Array.isArray(e);function nC(e,n,i){e.hasValue(n)?e.getValue(n).set(i):e.addValue(n,mr(i))}function sC(e){return ep(e)?e[e.length-1]||0:e}function oC(e,n){const i=Vr(e,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=sC(u[d]);nC(e,d,h)}}const xo=e=>!!(e&&e.getVelocity);function iC(e){return!!(xo(e)&&e.add)}function tp(e,n){const i=e.getValue("willChange");if(iC(i))return i.add(n);if(!i&&hr.WillChange){const a=new hr.WillChange("auto");e.addValue("willChange",a),a.add(n)}}function Wp(e){return e.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const aC="framerAppearId",t5="data-"+Wp(aC);function n5(e){return e.props[t5]}function rC({protectedKeys:e,needsAnimating:n},i){const a=e.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Fp(e,n,{delay:i=0,transitionOverride:a,type:c}={}){var w;let{transition:u,transitionEnd:d,...h}=n;const p=e.getDefaultTransition();u=u?Jb(u,p):p;const y=u==null?void 0:u.reduceMotion;a&&(u=a);const g=[],x=c&&e.animationState&&e.animationState.getState()[c];for(const C in h){const j=e.getValue(C,(w=e.latestValues[C])!=null?w:null),A=h[C];if(A===void 0||x&&rC(x,C))continue;const T={delay:i,...Up(u||{},C)},R=j.get();if(R!==void 0&&!j.isAnimating()&&!Array.isArray(A)&&A===R&&!T.velocity){rs.update(()=>j.set(A));continue}let P=!1;if(window.MotionHandoffAnimation){const F=n5(e);if(F){const Y=window.MotionHandoffAnimation(F,C,rs);Y!==null&&(T.startTime=Y,P=!0)}}tp(e,C);const L=y!=null?y:e.shouldReduceMotion;j.start(Vp(C,j,A,L&&e5.has(C)?{type:!1}:T,e,P));const D=j.animation;D&&g.push(D)}if(d){const C=()=>rs.update(()=>{d&&oC(e,d)});g.length?Promise.all(g).then(C):C()}return g}function np(e,n,i={}){var p;const a=Vr(e,n,i.type==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=e.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Fp(e,a,i)):()=>Promise.resolve(),d=e.variantChildren&&e.variantChildren.size?(y=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:w}=c;return lC(e,n,y,g,x,w,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[y,g]=h==="beforeChildren"?[u,d]:[d,u];return y().then(()=>g())}else return Promise.all([u(),d(i.delay)])}function lC(e,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of e.variantChildren)p.notify("AnimationStart",n),h.push(np(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Qb(e.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function cC(e,n,i={}){e.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>np(e,u,i));a=Promise.all(c)}else if(typeof n=="string")a=np(e,n,i);else{const c=typeof n=="function"?Vr(e,n,i.custom):n;a=Promise.all(Fp(e,c,i))}return a.then(()=>{e.notify("AnimationComplete",n)})}const uC={test:e=>e==="auto",parse:e=>e},s5=e=>n=>n.test(e),o5=[$l,Lt,ya,cr,$S,zS,uC],t1=e=>o5.find(s5(e));function dC(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||db(e):!0}const fC=new Set(["brightness","contrast","saturate","opacity"]);function hC(e){const[n,i]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[a]=i.match(Lp)||[];if(!a)return e;const c=i.replace(a,"");let u=fC.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const mC=/\b([a-z-]*)\(.*?\)/gu,sp={...ra,getAnimatableNone:e=>{const n=e.match(mC);return n?n.map(hC).join(" "):e}},op={...ra,getAnimatableNone:e=>{const n=ra.parse(e);return ra.createTransformer(e)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},n1={...$l,transform:Math.round},pC={rotate:cr,rotateX:cr,rotateY:cr,rotateZ:cr,scale:ad,scaleX:ad,scaleY:ad,scaleZ:ad,skew:cr,skewX:cr,skewY:cr,distance:Lt,translateX:Lt,translateY:Lt,translateZ:Lt,x:Lt,y:Lt,z:Lt,perspective:Lt,transformPerspective:Lt,opacity:Fc,originX:Hy,originY:Hy,originZ:Lt},Xp={borderWidth:Lt,borderTopWidth:Lt,borderRightWidth:Lt,borderBottomWidth:Lt,borderLeftWidth:Lt,borderRadius:Lt,borderTopLeftRadius:Lt,borderTopRightRadius:Lt,borderBottomRightRadius:Lt,borderBottomLeftRadius:Lt,width:Lt,maxWidth:Lt,height:Lt,maxHeight:Lt,top:Lt,right:Lt,bottom:Lt,left:Lt,inset:Lt,insetBlock:Lt,insetBlockStart:Lt,insetBlockEnd:Lt,insetInline:Lt,insetInlineStart:Lt,insetInlineEnd:Lt,padding:Lt,paddingTop:Lt,paddingRight:Lt,paddingBottom:Lt,paddingLeft:Lt,paddingBlock:Lt,paddingBlockStart:Lt,paddingBlockEnd:Lt,paddingInline:Lt,paddingInlineStart:Lt,paddingInlineEnd:Lt,margin:Lt,marginTop:Lt,marginRight:Lt,marginBottom:Lt,marginLeft:Lt,marginBlock:Lt,marginBlockStart:Lt,marginBlockEnd:Lt,marginInline:Lt,marginInlineStart:Lt,marginInlineEnd:Lt,fontSize:Lt,backgroundPositionX:Lt,backgroundPositionY:Lt,...pC,zIndex:n1,fillOpacity:Fc,strokeOpacity:Fc,numOctaves:n1},_C={...Xp,color:ro,backgroundColor:ro,outlineColor:ro,fill:ro,stroke:ro,borderColor:ro,borderTopColor:ro,borderRightColor:ro,borderBottomColor:ro,borderLeftColor:ro,filter:sp,WebkitFilter:sp,mask:op,WebkitMask:op},i5=e=>_C[e],gC=new Set([sp,op]);function a5(e,n){let i=i5(e);return gC.has(i)||(i=ra),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const yC=new Set(["auto","none","0"]);function xC(e,n,i){let a=0,c;for(;a<e.length&&!c;){const u=e[a];typeof u=="string"&&!yC.has(u)&&Bl(u).values.length&&(c=e[a]),a++}if(c&&i)for(const u of n)e[u]=a5(i,c)}class bC extends Pp{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let g=0;g<n.length;g++){let x=n[g];if(typeof x=="string"&&(x=x.trim(),Bp(x))){const w=Zb(x,i.current);w!==void 0&&(n[g]=w),g===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!e5.has(a)||n.length!==2)return;const[c,u]=n,d=t1(c),h=t1(u),p=Py(c),y=Py(u);if(p!==y&&fr[a]){this.needsMeasurement=!0;return}if(d!==h)if(qy(d)&&qy(h))for(let g=0;g<n.length;g++){const x=n[g];typeof x=="string"&&(n[g]=parseFloat(x))}else fr[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||dC(n[c]))&&a.push(c);a.length&&xC(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=fr[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=fr[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,y])=>{n.getValue(p).set(y)}),this.resolveNoneKeyframes()}}function Gp(e,n,i){var a;if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[e])!=null?a:c.querySelectorAll(e);return u?Array.from(u):[]}return Array.from(e).filter(c=>c!=null)}const r5=(e,n)=>n&&typeof e=="number"?n.transform(e):e;function Ad(e){return ub(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:qp}=jb(queueMicrotask,!1),oa={x:!1,y:!1};function l5(){return oa.x||oa.y}function vC(e){return e==="x"||e==="y"?oa[e]?null:(oa[e]=!0,()=>{oa[e]=!1}):oa.x||oa.y?null:(oa.x=oa.y=!0,()=>{oa.x=oa.y=!1})}function c5(e,n){const i=Gp(e),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function wC(e){return!(e.pointerType==="touch"||l5())}function SC(e,n,i={}){const[a,c,u]=c5(e,i);return a.forEach(d=>{let h=!1,p=!1,y;const g=()=>{d.removeEventListener("pointerleave",j)},x=T=>{y&&(y(T),y=void 0),g()},w=T=>{h=!1,window.removeEventListener("pointerup",w),window.removeEventListener("pointercancel",w),p&&(p=!1,x(T))},C=()=>{h=!0,window.addEventListener("pointerup",w,c),window.addEventListener("pointercancel",w,c)},j=T=>{if(T.pointerType!=="touch"){if(h){p=!0;return}x(T)}},A=T=>{if(!wC(T))return;p=!1;const R=n(d,T);typeof R=="function"&&(y=R,d.addEventListener("pointerleave",j,c))};d.addEventListener("pointerenter",A,c),d.addEventListener("pointerdown",C,c)}),u}const u5=(e,n)=>n?e===n?!0:u5(e,n.parentElement):!1,Kp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,CC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function kC(e){return CC.has(e.tagName)||e.isContentEditable===!0}const jC=new Set(["INPUT","SELECT","TEXTAREA"]);function MC(e){return jC.has(e.tagName)||e.isContentEditable===!0}const Nd=new WeakSet;function s1(e){return n=>{n.key==="Enter"&&e(n)}}function cm(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const EC=(e,n)=>{const i=e.currentTarget;if(!i)return;const a=s1(()=>{if(Nd.has(i))return;cm(i,"down");const c=s1(()=>{cm(i,"up")}),u=()=>cm(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function o1(e){return Kp(e)&&!l5()}const i1=new WeakSet;function TC(e,n,i={}){const[a,c,u]=c5(e,i),d=h=>{const p=h.currentTarget;if(!o1(h)||i1.has(h))return;Nd.add(p),i.stopPropagation&&i1.add(h);const y=n(p,h),g=(C,j)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",w),Nd.has(p)&&Nd.delete(p),o1(C)&&typeof y=="function"&&y(C,{success:j})},x=C=>{g(C,p===window||p===document||i.useGlobalTarget||u5(p,C.target))},w=C=>{g(C,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",w,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),Ad(h)&&(h.addEventListener("focus",y=>EC(y,c)),!kC(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function ef(e){return ub(e)&&"ownerSVGElement"in e}const Dd=new WeakMap;let ur;const d5=(e,n,i)=>(a,c)=>c&&c[0]?c[0][e+"Size"]:ef(a)&&"getBBox"in a?a.getBBox()[n]:a[i],AC=d5("inline","width","offsetWidth"),NC=d5("block","height","offsetHeight");function DC({target:e,borderBoxSize:n}){var i;(i=Dd.get(e))==null||i.forEach(a=>{a(e,{get width(){return AC(e,n)},get height(){return NC(e,n)}})})}function RC(e){e.forEach(DC)}function BC(){typeof ResizeObserver>"u"||(ur=new ResizeObserver(RC))}function LC(e,n){ur||BC();const i=Gp(e);return i.forEach(a=>{let c=Dd.get(a);c||(c=new Set,Dd.set(a,c)),c.add(n),ur==null||ur.observe(a)}),()=>{i.forEach(a=>{const c=Dd.get(a);c==null||c.delete(n),c!=null&&c.size||ur==null||ur.unobserve(a)})}}const Rd=new Set;let El;function OC(){El=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Rd.forEach(n=>n(e))},window.addEventListener("resize",El)}function zC(e){return Rd.add(e),El||OC(),()=>{Rd.delete(e),!Rd.size&&typeof El=="function"&&(window.removeEventListener("resize",El),El=void 0)}}function a1(e,n){return typeof e=="function"?zC(e):LC(e,n)}function f5(e){return ef(e)&&e.tagName==="svg"}function $C(...e){const n=!Array.isArray(e[0]),i=n?0:-1,a=e[0+i],c=e[1+i],u=e[2+i],d=e[3+i],h=$b(c,u,d);return n?h(a):h}const IC=[...o5,ro,ra],PC=e=>IC.find(s5(e)),r1=()=>({translate:0,scale:1,origin:0,originPoint:0}),Tl=()=>({x:r1(),y:r1()}),l1=()=>({min:0,max:0}),ao=()=>({x:l1(),y:l1()}),Gc=new WeakMap;function tf(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function qc(e){return typeof e=="string"||Array.isArray(e)}const Qp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Zp=["initial",...Qp];function nf(e){return tf(e.animate)||Zp.some(n=>qc(e[n]))}function h5(e){return!!(nf(e)||e.variants)}function HC(e,n,i){for(const a in n){const c=n[a],u=i[a];if(xo(c))e.addValue(a,c);else if(xo(u))e.addValue(a,mr(c,{owner:e}));else if(u!==c)if(e.hasValue(a)){const d=e.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=e.getStaticValue(a);e.addValue(a,mr(d!==void 0?d:c,{owner:e}))}}for(const a in i)n[a]===void 0&&e.removeValue(a);return n}const ip={current:null},m5={current:!1},UC=typeof window<"u";function VC(){if(m5.current=!0,!!UC)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>ip.current=e.matches;e.addEventListener("change",n),n()}else ip.current=!1}const c1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Vd={};function p5(e){Vd=e}function YC(){return Vd}class _5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Pp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const C=ii.now();this.renderScheduledAt<C&&(this.renderScheduledAt=C,rs.render(this.render,!1,!0))};const{latestValues:y,renderState:g}=h;this.latestValues=y,this.baseTarget={...y},this.initialValues=i.initial?{...y}:{},this.renderState=g,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=nf(i),this.isVariantNode=h5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...w}=this.scrapeMotionValuesFromProps(i,{},this);for(const C in w){const j=w[C];y[C]!==void 0&&xo(j)&&j.set(y[C])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Gc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(m5.current||VC(),this.shouldReduceMotion=ip.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),Ia(this.notifyUpdate),Ia(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Kb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:y,duration:g}=i.accelerate,x=new Gb({element:this.current,name:n,keyframes:h,times:p,ease:y,duration:wi(g)}),w=d(x);this.valueSubscriptions.set(n,()=>{w(),x.cancel()});return}const a=Pl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&rs.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Vd){const i=Vd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ao()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<c1.length;a++){const c=c1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=HC(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=mr(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(cb(a)||db(a))?a=parseFloat(a):!PC(a)&&ra.test(i)&&(a=a5(n,i)),this.setBaseTarget(n,xo(a)?a.get():a)),xo(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Yp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!xo(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new Np),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){qp.render(this.render)}}class g5 extends _5{constructor(){super(...arguments),this.KeyframeResolver=bC}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;xo(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class pr{constructor(n){this.isMounted=!1,this.node=n}update(){}}function y5({top:e,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:e,max:a}}}function WC({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function FC(e,n){if(!n)return e;const i=n({x:e.left,y:e.top}),a=n({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function um(e){return e===void 0||e===1}function ap({scale:e,scaleX:n,scaleY:i}){return!um(e)||!um(n)||!um(i)}function zr(e){return ap(e)||x5(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function x5(e){return u1(e.x)||u1(e.y)}function u1(e){return e&&e!=="0%"}function Yd(e,n,i){const a=e-i,c=n*a;return i+c}function d1(e,n,i,a,c){return c!==void 0&&(e=Yd(e,c,a)),Yd(e,i,a)+n}function rp(e,n=0,i=1,a,c){e.min=d1(e.min,n,i,a,c),e.max=d1(e.max,n,i,a,c)}function b5(e,{x:n,y:i}){rp(e.x,n.translate,n.scale,n.originPoint),rp(e.y,i.translate,i.scale,i.originPoint)}const f1=.999999999999,h1=1.0000000000001;function XC(e,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:y}=u.options;y&&y.props.style&&y.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(ga(e.x,-u.scroll.offset.x),ga(e.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,b5(e,d)),a&&zr(u.latestValues)&&Bd(e,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<h1&&n.x>f1&&(n.x=1),n.y<h1&&n.y>f1&&(n.y=1)}function ga(e,n){e.min+=n,e.max+=n}function m1(e,n,i,a,c=.5){const u=_s(e.min,e.max,c);rp(e,n,i,u,a)}function p1(e,n){return typeof e=="string"?parseFloat(e)/100*(n.max-n.min):e}function Bd(e,n,i){const a=i!=null?i:e;m1(e.x,p1(n.x,a.x),n.scaleX,n.scale,n.originX),m1(e.y,p1(n.y,a.y),n.scaleY,n.scale,n.originY)}function v5(e,n){return y5(FC(e.getBoundingClientRect(),n))}function GC(e,n,i){const a=v5(e,i),{scroll:c}=n;return c&&(ga(a.x,c.offset.x),ga(a.y,c.offset.y)),a}const qC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},KC=Il.length;function QC(e,n,i){let a="",c=!0;for(let u=0;u<KC;u++){const d=Il[u],h=e[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const y=parseFloat(h);p=d.startsWith("scale")?y===1:y===0}if(!p||i){const y=r5(h,Xp[d]);if(!p){c=!1;const g=qC[d]||d;a+=`${g}(${y}) `}i&&(n[d]=y)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Jp(e,n,i){const{style:a,vars:c,transformOrigin:u}=e;let d=!1,h=!1;for(const p in n){const y=n[p];if(Pl.has(p)){d=!0;continue}else if(Eb(p)){c[p]=y;continue}else{const g=r5(y,Xp[p]);p.startsWith("origin")?(h=!0,u[p]=g):a[p]=g}}if(n.transform||(d||i?a.transform=QC(n,e.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:y="50%",originZ:g=0}=u;a.transformOrigin=`${p} ${y} ${g}`}}function w5(e,{style:n,vars:i},a,c){const u=e.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function _1(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const jc={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(Lt.test(e))e=parseFloat(e);else return e;const i=_1(e,n.target.x),a=_1(e,n.target.y);return`${i}% ${a}%`}},ZC={correct:(e,{treeScale:n,projectionDelta:i})=>{const a=e,c=ra.parse(e);if(c.length>5)return a;const u=ra.createTransformer(e),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const y=_s(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),u(c)}},lp={borderRadius:{...jc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:jc,borderTopRightRadius:jc,borderBottomLeftRadius:jc,borderBottomRightRadius:jc,boxShadow:ZC};function S5(e,{layout:n,layoutId:i}){return Pl.has(e)||e.startsWith("origin")||(n||i!==void 0)&&(!!lp[e]||e==="opacity")}function e_(e,n,i){var d;const a=e.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(xo(a[h])||c&&xo(c[h])||S5(h,e)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function JC(e){return window.getComputedStyle(e)}class C5 extends g5{constructor(){super(...arguments),this.type="html",this.renderInstance=w5}readValueFromInstance(n,i){var a;if(Pl.has(i))return(a=this.projection)!=null&&a.isProjecting?Gm(i):b4(n,i);{const c=JC(n),u=(Eb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return v5(n,i)}build(n,i,a){Jp(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return e_(n,i,a)}}function e6(e,n){return e in n}class t6 extends _5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(e6(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return ao()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const n6={offset:"stroke-dashoffset",array:"stroke-dasharray"},s6={offset:"strokeDashoffset",array:"strokeDasharray"};function o6(e,n,i=1,a=0,c=!0){e.pathLength=1;const u=c?n6:s6;e[u.offset]=`${-a}`,e[u.array]=`${n} ${i}`}const i6=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function k5(e,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,y,g){var C,j;if(Jp(e,h,y),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:x,style:w}=e;x.transform&&(w.transform=x.transform,delete x.transform),(w.transform||x.transformOrigin)&&(w.transformOrigin=(C=x.transformOrigin)!=null?C:"50% 50%",delete x.transformOrigin),w.transform&&(w.transformBox=(j=g==null?void 0:g.transformBox)!=null?j:"fill-box",delete x.transformBox);for(const A of i6)x[A]!==void 0&&(w[A]=x[A],delete x[A]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&o6(x,c,u,d,!1)}const j5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),M5=e=>typeof e=="string"&&e.toLowerCase()==="svg";function a6(e,n,i,a){w5(e,n,void 0,a);for(const c in n.attrs)e.setAttribute(j5.has(c)?c:Wp(c),n.attrs[c])}function E5(e,n,i){const a=e_(e,n,i);for(const c in e)if(xo(e[c])||xo(n[c])){const u=Il.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=e[c]}return a}class T5 extends g5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ao}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(Pl.has(i)){const a=i5(i);return a&&a.default||0}return i=j5.has(i)?i:Wp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return E5(n,i,a)}build(n,i,a){k5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){a6(n,i,a,c)}mount(n){this.isSVGTag=M5(n.tagName),super.mount(n)}}const r6=Zp.length;function A5(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?A5(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const n={};for(let i=0;i<r6;i++){const a=Zp[i],c=e.props[a];(qc(c)||c===!1)&&(n[a]=c)}return n}function N5(e,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==e.length)return!1;for(let a=0;a<i;a++)if(n[a]!==e[a])return!1;return!0}const l6=[...Qp].reverse(),c6=Qp.length;function u6(e){return n=>Promise.all(n.map(({animation:i,options:a})=>cC(e,i,a)))}function d6(e){let n=u6(e),i=g1(),a=!0,c=!1;const u=y=>(g,x)=>{var C;const w=Vr(e,x,y==="exit"?(C=e.presenceContext)==null?void 0:C.custom:void 0);if(w){const{transition:j,transitionEnd:A,...T}=w;g={...g,...T,...A}}return g};function d(y){n=y(e)}function h(y){const{props:g}=e,x=A5(e.parent)||{},w=[],C=new Set;let j={},A=1/0;for(let R=0;R<c6;R++){const P=l6[R],L=i[P],D=g[P]!==void 0?g[P]:x[P],F=qc(D),Y=P===y?L.isActive:null;Y===!1&&(A=R);let V=D===x[P]&&D!==g[P]&&F;if(V&&(a||c)&&e.manuallyAnimateOnMount&&(V=!1),L.protectedKeys={...j},!L.isActive&&Y===null||!D&&!L.prevProp||tf(D)||typeof D=="boolean")continue;if(P==="exit"&&L.isActive&&Y!==!0){L.prevResolvedValues&&(j={...j,...L.prevResolvedValues});continue}const X=f6(L.prevProp,D);let le=X||P===y&&L.isActive&&!V&&F||R>A&&F,ue=!1;const pe=Array.isArray(D)?D:[D];let Ne=pe.reduce(u(P),{});Y===!1&&(Ne={});const{prevResolvedValues:Fe={}}=L,ne={...Fe,...Ne},de=I=>{le=!0,C.has(I)&&(ue=!0,C.delete(I)),L.needsAnimating[I]=!0;const fe=e.getValue(I);fe&&(fe.liveStyle=!1)};for(const I in ne){const fe=Ne[I],xe=Fe[I];if(j.hasOwnProperty(I))continue;let z=!1;ep(fe)&&ep(xe)?z=!N5(fe,xe):z=fe!==xe,z?fe!=null?de(I):C.add(I):fe!==void 0&&C.has(I)?de(I):L.protectedKeys[I]=!0}L.prevProp=D,L.prevResolvedValues=Ne,L.isActive&&(j={...j,...Ne}),(a||c)&&e.blockInitialAnimation&&(le=!1);const O=V&&X;le&&(!O||ue)&&w.push(...pe.map(I=>{const fe={type:P};if(typeof I=="string"&&(a||c)&&!O&&e.manuallyAnimateOnMount&&e.parent){const{parent:xe}=e,z=Vr(xe,I);if(xe.enteringChildren&&z){const{delayChildren:ae}=z.transition||{};fe.delay=Qb(xe.enteringChildren,e,ae)}}return{animation:I,options:fe}}))}if(C.size){const R={};if(typeof g.initial!="boolean"){const P=Vr(e,Array.isArray(g.initial)?g.initial[0]:g.initial);P&&P.transition&&(R.transition=P.transition)}C.forEach(P=>{const L=e.getBaseTarget(P),D=e.getValue(P);D&&(D.liveStyle=!0),R[P]=L!=null?L:null}),w.push({animation:R})}let T=!!w.length;return a&&(g.initial===!1||g.initial===g.animate)&&!e.manuallyAnimateOnMount&&(T=!1),a=!1,c=!1,T?n(w):Promise.resolve()}function p(y,g){var w;if(i[y].isActive===g)return Promise.resolve();(w=e.variantChildren)==null||w.forEach(C=>{var j;return(j=C.animationState)==null?void 0:j.setActive(y,g)}),i[y].isActive=g;const x=h(y);for(const C in i)i[C].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=g1(),c=!0}}}function f6(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!N5(n,e):!1}function Rr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function g1(){return{animate:Rr(!0),whileInView:Rr(),whileHover:Rr(),whileTap:Rr(),whileDrag:Rr(),whileFocus:Rr(),exit:Rr()}}function cp(e,n){e.min=n.min,e.max=n.max}function sa(e,n){cp(e.x,n.x),cp(e.y,n.y)}function y1(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}const D5=1e-4,h6=1-D5,m6=1+D5,R5=.01,p6=0-R5,_6=0+R5;function ai(e){return e.max-e.min}function g6(e,n,i){return Math.abs(e-n)<=i}function x1(e,n,i,a=.5){e.origin=a,e.originPoint=_s(n.min,n.max,e.origin),e.scale=ai(i)/ai(n),e.translate=_s(i.min,i.max,e.origin)-e.originPoint,(e.scale>=h6&&e.scale<=m6||isNaN(e.scale))&&(e.scale=1),(e.translate>=p6&&e.translate<=_6||isNaN(e.translate))&&(e.translate=0)}function Vc(e,n,i,a){x1(e.x,n.x,i.x,a?a.originX:void 0),x1(e.y,n.y,i.y,a?a.originY:void 0)}function b1(e,n,i,a=0){const c=a?_s(i.min,i.max,a):i.min;e.min=c+n.min,e.max=e.min+ai(n)}function y6(e,n,i,a){b1(e.x,n.x,i.x,a==null?void 0:a.x),b1(e.y,n.y,i.y,a==null?void 0:a.y)}function v1(e,n,i,a=0){const c=a?_s(i.min,i.max,a):i.min;e.min=n.min-c,e.max=e.min+ai(n)}function Wd(e,n,i,a){v1(e.x,n.x,i.x,a==null?void 0:a.x),v1(e.y,n.y,i.y,a==null?void 0:a.y)}function w1(e,n,i,a,c){return e-=n,e=Yd(e,1/i,a),c!==void 0&&(e=Yd(e,1/c,a)),e}function x6(e,n=0,i=1,a=.5,c,u=e,d=e){if(ya.test(n)&&(n=parseFloat(n),n=_s(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=_s(u.min,u.max,a);e===u&&(h-=n),e.min=w1(e.min,n,i,h,c),e.max=w1(e.max,n,i,h,c)}function S1(e,n,[i,a,c],u,d){x6(e,n[i],n[a],n[c],n.scale,u,d)}const b6=["x","scaleX","originX"],v6=["y","scaleY","originY"];function C1(e,n,i,a){S1(e.x,n,b6,i?i.x:void 0,a?a.x:void 0),S1(e.y,n,v6,i?i.y:void 0,a?a.y:void 0)}function k1(e){return e.translate===0&&e.scale===1}function B5(e){return k1(e.x)&&k1(e.y)}function j1(e,n){return e.min===n.min&&e.max===n.max}function w6(e,n){return j1(e.x,n.x)&&j1(e.y,n.y)}function M1(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function L5(e,n){return M1(e.x,n.x)&&M1(e.y,n.y)}function E1(e){return ai(e.x)/ai(e.y)}function T1(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}function _a(e){return[e("x"),e("y")]}function S6(e,n,i){let a="";const c=e.x.translate/n.x,u=e.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:y,rotate:g,rotateX:x,rotateY:w,skewX:C,skewY:j}=i;y&&(a=`perspective(${y}px) ${a}`),g&&(a+=`rotate(${g}deg) `),x&&(a+=`rotateX(${x}deg) `),w&&(a+=`rotateY(${w}deg) `),C&&(a+=`skewX(${C}deg) `),j&&(a+=`skewY(${j}deg) `)}const h=e.x.scale*n.x,p=e.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const O5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],C6=O5.length,A1=e=>typeof e=="string"?parseFloat(e):e,N1=e=>typeof e=="number"||Lt.test(e);function k6(e,n,i,a,c,u){var d,h,p,y;c?(e.opacity=_s(0,(d=i.opacity)!=null?d:1,j6(a)),e.opacityExit=_s((h=n.opacity)!=null?h:1,0,M6(a))):u&&(e.opacity=_s((p=n.opacity)!=null?p:1,(y=i.opacity)!=null?y:1,a));for(let g=0;g<C6;g++){const x=O5[g];let w=D1(n,x),C=D1(i,x);if(w===void 0&&C===void 0)continue;w||(w=0),C||(C=0),w===0||C===0||N1(w)===N1(C)?(e[x]=Math.max(_s(A1(w),A1(C),a),0),(ya.test(C)||ya.test(w))&&(e[x]+="%")):e[x]=C}(n.rotate||i.rotate)&&(e.rotate=_s(n.rotate||0,i.rotate||0,a))}function D1(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const j6=z5(0,.5,bb),M6=z5(.5,.95,Qi);function z5(e,n,i){return a=>a<e?0:a>n?1:i(Rl(e,n,a))}function $5(e,n,i){const a=xo(e)?e:mr(e);return a.start(Vp("",a,n,i)),a.animation}function Kc(e,n,i,a={passive:!0}){return e.addEventListener(n,i,a),()=>e.removeEventListener(n,i)}const E6=(e,n)=>e.depth-n.depth;class T6{constructor(){this.children=[],this.isDirty=!1}add(n){Tp(this.children,n),this.isDirty=!0}remove(n){Dl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(E6),this.isDirty=!1,this.children.forEach(n)}}function A6(e,n){const i=ii.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(Ia(a),e(u-n))};return rs.setup(a,!0),()=>Ia(a)}function Ld(e){return xo(e)?e.get():e}class N6{constructor(){this.members=[]}add(n){Tp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(Dl(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(Dl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const Od={hasAnimatedSinceResize:!0,hasEverUpdated:!1},dm=["","X","Y","Z"],D6=1e3;let R6=0;function fm(e,n,i,a){const{latestValues:c}=n;c[e]&&(i[e]=c[e],n.setStaticValue(e,0),a&&(a[e]=0))}function I5(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const i=n5(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",rs,!(c||u))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&I5(a)}function P5({attachResizeListener:e,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=R6++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(O6),this.nodes.forEach(U6),this.nodes.forEach(V6),this.nodes.forEach(z6)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new T6)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Np),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=ef(d)&&!f5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:y}=this.options;if(y&&!y.current&&y.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),e){let g,x=0;const w=()=>this.root.updateBlockedByResize=!1;rs.read(()=>{x=window.innerWidth}),e(d,()=>{const C=window.innerWidth;C!==x&&(x=C,this.root.updateBlockedByResize=!0,g&&g(),g=A6(w,250),Od.hasAnimatedSinceResize&&(Od.hasAnimatedSinceResize=!1,this.nodes.forEach(L1)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&y&&(h||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:x,hasRelativeLayoutChanged:w,layout:C})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const j=this.options.transition||y.getDefaultTransition()||G6,{onLayoutAnimationStart:A,onLayoutAnimationComplete:T}=y.getProps(),R=!this.targetLayout||!L5(this.targetLayout,C),P=!x&&w;if(this.options.layoutRoot||this.resumeFrom||P||x&&(R||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...Up(j,"layout"),onPlay:A,onComplete:T};(y.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(g,P)}else x||L1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=C})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ia(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Y6),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&I5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const x=this.path[g];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(I6),this.nodes.forEach(R1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(B1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(P6),this.nodes.forEach(H6),this.nodes.forEach(B6),this.nodes.forEach(L6)):this.nodes.forEach(B1),this.clearAllSnapshots();const h=ii.now();Ho.delta=xa(0,1e3/60,h-Ho.timestamp),Ho.timestamp=h,Ho.isProcessing=!0,sm.update.process(Ho),sm.preRender.process(Ho),sm.render.process(Ho),Ho.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,qp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach($6),this.sharedNodes.forEach(W6)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,rs.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){rs.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ai(this.snapshot.measuredBox.x)&&!ai(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ao()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!B5(this.projectionDelta),p=this.getTransformTemplate(),y=p?p(this.latestValues,""):void 0,g=y!==this.prevTransformTemplateValue;d&&this.instance&&(h||zr(this.latestValues)||g)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),q6(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var y;const{visualElement:d}=this.options;if(!d)return ao();const h=d.measureViewportBox();if(!(((y=this.scroll)==null?void 0:y.wasRoot)||this.path.some(K6))){const{scroll:g}=this.root;g&&(ga(h.x,g.offset.x),ga(h.y,g.offset.y))}return h}removeElementScroll(d){var p;const h=ao();if(sa(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let y=0;y<this.path.length;y++){const g=this.path[y],{scroll:x,options:w}=g;g!==this.root&&x&&w.layoutScroll&&(x.wasRoot&&sa(h,d),ga(h.x,x.offset.x),ga(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var g,x;const y=p||ao();sa(y,d);for(let w=0;w<this.path.length;w++){const C=this.path[w];!h&&C.options.layoutScroll&&C.scroll&&C!==C.root&&(ga(y.x,-C.scroll.offset.x),ga(y.y,-C.scroll.offset.y)),zr(C.latestValues)&&Bd(y,C.latestValues,(g=C.layout)==null?void 0:g.layoutBox)}return zr(this.latestValues)&&Bd(y,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),y}removeTransform(d){var p;const h=ao();sa(h,d);for(let y=0;y<this.path.length;y++){const g=this.path[y];if(!zr(g.latestValues))continue;let x;g.instance&&(ap(g.latestValues)&&g.updateSnapshot(),x=ao(),sa(x,g.measurePageBox())),C1(h,g.latestValues,(p=g.snapshot)==null?void 0:p.layoutBox,x)}return zr(this.latestValues)&&C1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ho.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var C;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(C=this.parent)!=null&&C.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:x}=this.options;if(!this.layout||!(g||x))return;this.resolvedRelativeTargetAt=Ho.timestamp;const w=this.getClosestProjectingParent();w&&this.linkedParentVersion!==w.layoutVersion&&!w.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&w&&w.layout?this.createRelativeTarget(w,this.layout.layoutBox,w.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ao(),this.targetWithTransforms=ao()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),y6(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):sa(this.target,this.layout.layoutBox),b5(this.target,this.targetDelta)):sa(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?this.createRelativeTarget(w,this.target,w.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||ap(this.parent.latestValues)||x5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ao(),this.relativeTargetOrigin=ao(),Wd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),sa(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var j;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(j=this.parent)!=null&&j.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Ho.timestamp&&(p=!1),p)return;const{layout:y,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||g))return;sa(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,w=this.treeScale.y;XC(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=ao());const{target:C}=d;if(!C){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(y1(this.prevProjectionDelta.x,this.projectionDelta.x),y1(this.prevProjectionDelta.y,this.projectionDelta.y)),Vc(this.projectionDelta,this.layoutCorrected,C,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==w||!T1(this.projectionDelta.x,this.prevProjectionDelta.x)||!T1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",C))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Tl(),this.projectionDelta=Tl(),this.projectionDeltaWithTransform=Tl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,y=p?p.latestValues:{},g={...this.latestValues},x=Tl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const w=ao(),C=p?p.source:void 0,j=this.layout?this.layout.source:void 0,A=C!==j,T=this.getStack(),R=!T||T.members.length<=1,P=!!(A&&!R&&this.options.crossfade===!0&&!this.path.some(X6));this.animationProgress=0;let L;this.mixTargetDelta=D=>{const F=D/1e3;O1(x.x,d.x,F),O1(x.y,d.y,F),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Wd(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),F6(this.relativeTarget,this.relativeTargetOrigin,w,F),L&&w6(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=ao()),sa(L,this.relativeTarget)),A&&(this.animationValues=g,k6(g,y,this.latestValues,F,P,R)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=F},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,y;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(y=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||y.stop(),this.pendingAnimation&&(Ia(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=rs.update(()=>{Od.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=mr(0)),this.motionValue.jump(0,!1),this.currentAnimation=$5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(D6),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:y,latestValues:g}=d;if(!(!h||!p||!y)){if(this!==d&&this.layout&&y&&H5(this.options.animationType,this.layout.layoutBox,y.layoutBox)){p=this.target||ao();const x=ai(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const w=ai(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+w}sa(h,p),Bd(h,g),Vc(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new N6),this.sharedNodes.get(d).add(h);const y=h.options.initialPromotionConfig;h.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const y=this.getStack();y&&y.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const y={};p.z&&fm("z",d,y,this.animationValues);for(let g=0;g<dm.length;g++)fm(`rotate${dm[g]}`,d,y,this.animationValues),fm(`skew${dm[g]}`,d,y,this.animationValues);d.render();for(const g in y)d.setStaticValue(g,y[g]),this.animationValues&&(this.animationValues[g]=y[g]);d.scheduleRender()}applyProjectionStyles(d,h){var j,A;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=Ld(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=Ld(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!zr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=y.animationValues||y.latestValues;this.applyTransformsToTarget();let x=S6(this.projectionDeltaWithTransform,this.treeScale,g);p&&(x=p(g,x)),d.transform=x;const{x:w,y:C}=this.projectionDelta;d.transformOrigin=`${w.origin*100}% ${C.origin*100}% 0`,y.animationValues?d.opacity=y===this?(A=(j=g.opacity)!=null?j:this.latestValues.opacity)!=null?A:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=y===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const T in lp){if(g[T]===void 0)continue;const{correct:R,applyTo:P,isCSSVariable:L}=lp[T],D=x==="none"?g[T]:R(g[T],y);if(P){const F=P.length;for(let Y=0;Y<F;Y++)d[P[Y]]=D}else L?this.options.visualElement.renderState.vars[T]=D:d[T]=D}this.options.layoutId&&(d.pointerEvents=y===this?Ld(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(R1),this.root.sharedNodes.clear()}}}function B6(e){e.updateLayout()}function L6(e){var i;const n=((i=e.resumeFrom)==null?void 0:i.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=e.layout,{animationType:u}=e.options,d=n.source!==e.layout.source;if(u==="size")_a(x=>{const w=d?n.measuredBox[x]:n.layoutBox[x],C=ai(w);w.min=a[x].min,w.max=w.min+C});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";cp(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else H5(u,n.layoutBox,a)&&_a(x=>{const w=d?n.measuredBox[x]:n.layoutBox[x],C=ai(a[x]);w.max=w.min+C,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[x].max=e.relativeTarget[x].min+C)});const h=Tl();Vc(h,a,n.layoutBox);const p=Tl();d?Vc(p,e.applyTransform(c,!0),n.measuredBox):Vc(p,a,n.layoutBox);const y=!B5(h);let g=!1;if(!e.resumeFrom){const x=e.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:w,layout:C}=x;if(w&&C){const j=e.options.layoutAnchor||void 0,A=ao();Wd(A,n.layoutBox,w.layoutBox,j);const T=ao();Wd(T,a,C.layoutBox,j),L5(A,T)||(g=!0),x.options.layoutRoot&&(e.relativeTarget=T,e.relativeTargetOrigin=A,e.relativeParent=x)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:g})}else if(e.isLead()){const{onExitComplete:a}=e.options;a&&a()}e.options.transition=void 0}function O6(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function z6(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function $6(e){e.clearSnapshot()}function R1(e){e.clearMeasurements()}function I6(e){e.isLayoutDirty=!0,e.updateLayout()}function B1(e){e.isLayoutDirty=!1}function P6(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function H6(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function L1(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function U6(e){e.resolveTargetDelta()}function V6(e){e.calcProjection()}function Y6(e){e.resetSkewAndRotation()}function W6(e){e.removeLeadSnapshot()}function O1(e,n,i){e.translate=_s(n.translate,0,i),e.scale=_s(n.scale,1,i),e.origin=n.origin,e.originPoint=n.originPoint}function z1(e,n,i,a){e.min=_s(n.min,i.min,a),e.max=_s(n.max,i.max,a)}function F6(e,n,i,a){z1(e.x,n.x,i.x,a),z1(e.y,n.y,i.y,a)}function X6(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const G6={duration:.45,ease:[.4,0,.1,1]},$1=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),I1=$1("applewebkit/")&&!$1("chrome/")?Math.round:Qi;function P1(e){e.min=I1(e.min),e.max=I1(e.max)}function q6(e){P1(e.x),P1(e.y)}function H5(e,n,i){return e==="position"||e==="preserve-aspect"&&!g6(E1(n),E1(i),.2)}function K6(e){var n;return e!==e.root&&((n=e.scroll)==null?void 0:n.wasRoot)}const Q6=P5({attachResizeListener:(e,n)=>Kc(e,"resize",n),measureScroll:()=>{var e,n;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),hm={current:void 0},U5=P5({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!hm.current){const e=new Q6({});e.mount(window),e.setOptions({layoutScroll:!0}),hm.current=e}return hm.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),sf=_.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function H1(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function Z6(...e){return n=>{let i=!1;const a=e.map(c=>{const u=H1(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():H1(e[c],null)}}}}function J6(...e){return _.useCallback(Z6(...e),e)}class ek extends _.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(Ad(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=Ad(a)&&a.offsetWidth||0,u=Ad(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function tk({children:e,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var w,C;const d=_.useId(),h=_.useRef(null),p=_.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=_.useContext(sf),g=(C=(w=e.props)==null?void 0:w.ref)!=null?C:e==null?void 0:e.ref,x=J6(h,g);return _.useInsertionEffect(()=>{const{width:j,height:A,top:T,left:R,right:P,bottom:L}=p.current;if(n||u===!1||!h.current||!j||!A)return;const D=i==="left"?`left: ${R}`:`right: ${P}`,F=a==="bottom"?`bottom: ${L}`:`top: ${T}`;h.current.dataset.motionPopId=d;const Y=document.createElement("style");y&&(Y.nonce=y);const V=c!=null?c:document.head;return V.appendChild(Y),Y.sheet&&Y.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${j}px !important;
            height: ${A}px !important;
            ${D}px !important;
            ${F}px !important;
          }
        `),()=>{var X;(X=h.current)==null||X.removeAttribute("data-motion-pop-id"),V.contains(Y)&&V.removeChild(Y)}},[n]),l.jsx(ek,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?e:_.cloneElement(e,{ref:x})})}const nk=({children:e,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:y})=>{const g=Zc(sk),x=_.useId();let w=!0,C=_.useMemo(()=>(w=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:j=>{g.set(j,!0);for(const A of g.values())if(!A)return;a&&a()},register:j=>(g.set(j,!1),()=>g.delete(j))}),[i,g,a]);return u&&w&&(C={...C}),_.useMemo(()=>{g.forEach((j,A)=>g.set(A,!1))},[i]),_.useEffect(()=>{!i&&!g.size&&a&&a()},[i]),e=l.jsx(tk,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:y,children:e}),l.jsx(Zd.Provider,{value:C,children:e})};function sk(){return new Map}function V5(e=!0){const n=_.useContext(Zd);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=_.useId();_.useEffect(()=>{if(e)return c(u)},[e]);const d=_.useCallback(()=>e&&a&&a(u),[u,a,e]);return!i&&a?[!1,d]:[!0]}const rd=e=>e.key||"";function U1(e){const n=[];return _.Children.forEach(e,i=>{_.isValidElement(i)&&n.push(i)}),n}const of=({children:e,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:y})=>{const[g,x]=V5(d),w=_.useMemo(()=>U1(e),[e]),C=d&&!g?[]:w.map(rd),j=_.useRef(!0),A=_.useRef(w),T=Zc(()=>new Map),R=_.useRef(new Set),[P,L]=_.useState(w),[D,F]=_.useState(w);Ep(()=>{j.current=!1,A.current=w;for(let X=0;X<D.length;X++){const le=rd(D[X]);C.includes(le)?(T.delete(le),R.current.delete(le)):T.get(le)!==!0&&T.set(le,!1)}},[D,C.length,C.join("-")]);const Y=[];if(w!==P){let X=[...w];for(let le=0;le<D.length;le++){const ue=D[le],pe=rd(ue);C.includes(pe)||(X.splice(le,0,ue),Y.push(ue))}return u==="wait"&&Y.length&&(X=Y),F(U1(X)),L(w),null}const{forceRender:V}=_.useContext(Mp);return l.jsx(l.Fragment,{children:D.map(X=>{const le=rd(X),ue=d&&!g?!1:w===D||C.includes(le),pe=()=>{if(R.current.has(le))return;if(T.has(le))R.current.add(le),T.set(le,!0);else return;let Ne=!0;T.forEach(Fe=>{Fe||(Ne=!1)}),Ne&&(V==null||V(),F(A.current),d&&(x==null||x()),a&&a())};return l.jsx(nk,{isPresent:ue,initial:!j.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:y,onExitComplete:ue?void 0:pe,anchorX:h,anchorY:p,children:X},le)})})},Y5=_.createContext({strict:!1}),V1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Y1=!1;function ok(){if(Y1)return;const e={};for(const n in V1)e[n]={isEnabled:i=>V1[n].some(a=>!!i[a])};p5(e),Y1=!0}function W5(){return ok(),YC()}function ik(e){const n=W5();for(const i in e)n[i]={...n[i],...e[i]};p5(n)}const ak=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Fd(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||ak.has(e)}let F5=e=>!Fd(e);function rk(e){typeof e=="function"&&(F5=n=>n.startsWith("on")?!Fd(n):e(n))}try{rk(require("@emotion/is-prop-valid").default)}catch{}function lk(e,n,i){const a={};for(const c in e)c==="values"&&typeof e.values=="object"||xo(e[c])||(F5(c)||i===!0&&Fd(c)||!n&&!Fd(c)||e.draggable&&c.startsWith("onDrag"))&&(a[c]=e[c]);return a}const af=_.createContext({});function ck(e,n){if(nf(e)){const{initial:i,animate:a}=e;return{initial:i===!1||qc(i)?i:void 0,animate:qc(a)?a:void 0}}return e.inherit!==!1?n:{}}function uk(e){const{initial:n,animate:i}=ck(e,_.useContext(af));return _.useMemo(()=>({initial:n,animate:i}),[W1(n),W1(i)])}function W1(e){return Array.isArray(e)?e.join(" "):e}const t_=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function X5(e,n,i){for(const a in n)!xo(n[a])&&!S5(a,i)&&(e[a]=n[a])}function dk({transformTemplate:e},n){return _.useMemo(()=>{const i=t_();return Jp(i,n,e),Object.assign({},i.vars,i.style)},[n])}function fk(e,n){const i=e.style||{},a={};return X5(a,i,e),Object.assign(a,dk(e,n)),a}function hk(e,n){const i={},a=fk(e,n);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=a,i}const G5=()=>({...t_(),attrs:{}});function mk(e,n,i,a){const c=_.useMemo(()=>{const u=G5();return k5(u,n,M5(a),e.transformTemplate,e.style),{...u.attrs,style:{...u.style}}},[n]);if(e.style){const u={};X5(u,e.style,e),c.style={...u,...c.style}}return c}const pk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function n_(e){return typeof e!="string"||e.includes("-")?!1:!!(pk.indexOf(e)>-1||/[A-Z]/u.test(e))}function _k(e,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:n_(e))?mk:hk)(n,a,c,e),y=lk(n,typeof e=="string",u),g=e!==_.Fragment?{...y,...p,ref:i}:{},{children:x}=n,w=_.useMemo(()=>xo(x)?x.get():x,[x]);return _.createElement(e,{...g,children:w})}function gk({scrapeMotionValuesFromProps:e,createRenderState:n},i,a,c){return{latestValues:yk(i,a,c,e),renderState:n()}}function yk(e,n,i,a){const c={},u=a(e,{});for(const w in u)c[w]=Ld(u[w]);let{initial:d,animate:h}=e;const p=nf(e),y=h5(e);n&&y&&!p&&e.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let g=i?i.initial===!1:!1;g=g||d===!1;const x=g?h:d;if(x&&typeof x!="boolean"&&!tf(x)){const w=Array.isArray(x)?x:[x];for(let C=0;C<w.length;C++){const j=Yp(e,w[C]);if(j){const{transitionEnd:A,transition:T,...R}=j;for(const P in R){let L=R[P];if(Array.isArray(L)){const D=g?L.length-1:0;L=L[D]}L!==null&&(c[P]=L)}for(const P in A)c[P]=A[P]}}}return c}const q5=e=>(n,i)=>{const a=_.useContext(af),c=_.useContext(Zd),u=()=>gk(e,n,a,c);return i?u():Zc(u)},xk=q5({scrapeMotionValuesFromProps:e_,createRenderState:t_}),bk=q5({scrapeMotionValuesFromProps:E5,createRenderState:G5}),vk=Symbol.for("motionComponentSymbol");function wk(e,n,i){const a=_.useRef(i);_.useInsertionEffect(()=>{a.current=i});const c=_.useRef(null);return _.useCallback(u=>{var h;u&&((h=e.onMount)==null||h.call(e,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const K5=_.createContext({});function jl(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Sk(e,n,i,a,c,u){var L,D;const{visualElement:d}=_.useContext(af),h=_.useContext(Y5),p=_.useContext(Zd),y=_.useContext(sf),g=y.reducedMotion,x=y.skipAnimations,w=_.useRef(null),C=_.useRef(!1);a=a||h.renderer,!w.current&&a&&(w.current=a(e,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g,skipAnimations:x,isSVG:u}),C.current&&w.current&&(w.current.manuallyAnimateOnMount=!0));const j=w.current,A=_.useContext(K5);j&&!j.projection&&c&&(j.type==="html"||j.type==="svg")&&Ck(w.current,i,c,A);const T=_.useRef(!1);_.useInsertionEffect(()=>{j&&T.current&&j.update(i,p)});const R=i[t5],P=_.useRef(!!R&&typeof window<"u"&&!((L=window.MotionHandoffIsComplete)!=null&&L.call(window,R))&&((D=window.MotionHasOptimisedAnimation)==null?void 0:D.call(window,R)));return Ep(()=>{C.current=!0,j&&(T.current=!0,window.MotionIsMounted=!0,j.updateFeatures(),j.scheduleRenderMicrotask(),P.current&&j.animationState&&j.animationState.animateChanges())}),_.useEffect(()=>{j&&(!P.current&&j.animationState&&j.animationState.animateChanges(),P.current&&(queueMicrotask(()=>{var F;(F=window.MotionHandoffMarkAsComplete)==null||F.call(window,R)}),P.current=!1),j.enteringChildren=void 0)}),j}function Ck(e,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:y,layoutAnchor:g,layoutCrossfade:x}=n;e.projection=new i(e.latestValues,n["data-framer-portal-id"]?void 0:Q5(e.parent)),e.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&jl(h),visualElement:e,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:y,layoutAnchor:g})}function Q5(e){if(e)return e.options.allowProjection!==!1?e.projection:Q5(e.parent)}function mm(e,{forwardMotionProps:n=!1,type:i}={},a,c){var y,g;a&&ik(a);const u=i?i==="svg":n_(e),d=u?bk:xk;function h(x,w){let C;const j={..._.useContext(sf),...x,layoutId:kk(x)},{isStatic:A}=j,T=uk(x),R=d(x,A);if(!A&&typeof window<"u"){jk();const P=Mk(j);C=P.MeasureLayout,T.visualElement=Sk(e,R,j,c,P.ProjectionNode,u)}return l.jsxs(af.Provider,{value:T,children:[C&&T.visualElement?l.jsx(C,{visualElement:T.visualElement,...j}):null,_k(e,x,wk(R,T.visualElement,w),R,A,n,u)]})}h.displayName=`motion.${typeof e=="string"?e:`create(${(g=(y=e.displayName)!=null?y:e.name)!=null?g:""})`}`;const p=_.forwardRef(h);return p[vk]=e,p}function kk({layoutId:e}){const n=_.useContext(Mp).id;return n&&e!==void 0?n+"-"+e:e}function jk(e,n){_.useContext(Y5).strict}function Mk(e){const n=W5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(e)||a!=null&&a.isEnabled(e)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function Ek(e,n){if(typeof Proxy>"u")return mm;const i=new Map,a=(u,d)=>mm(u,d,e,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,mm(d,void 0,e,n)),i.get(d))})}const Tk=(e,n)=>{var a;return((a=n.isSVG)!=null?a:n_(e))?new T5(n):new C5(n,{allowProjection:e!==_.Fragment})};class Ak extends pr{constructor(n){super(n),n.animationState||(n.animationState=d6(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();tf(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let Nk=0;class Dk extends pr{constructor(){super(...arguments),this.id=Nk++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Vr(this.node,d,h);if(p){const{transition:y,transitionEnd:g,...x}=p;for(const w in x)(u=this.node.getValue(w))==null||u.jump(x[w])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const Rk={animation:{Feature:Ak},exit:{Feature:Dk}};function nu(e){return{point:{x:e.pageX,y:e.pageY}}}const Bk=e=>n=>Kp(n)&&e(n,nu(n));function Yc(e,n,i,a){return Kc(e,n,Bk(i),a)}const Z5=({current:e})=>e?e.ownerDocument.defaultView:null,F1=(e,n)=>Math.abs(e-n);function Lk(e,n){const i=F1(e.x,n.x),a=F1(e.y,n.y);return Math.sqrt(i**2+a**2)}const X1=new Set(["auto","scroll"]);class J5{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=C=>{this.handleScroll(C.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ld(this.lastRawMoveEventInfo,this.transformPagePoint));const C=pm(this.lastMoveEventInfo,this.history),j=this.startEvent!==null,A=Lk(C.offset,{x:0,y:0})>=this.distanceThreshold;if(!j&&!A)return;const{point:T}=C,{timestamp:R}=Ho;this.history.push({...T,timestamp:R});const{onStart:P,onMove:L}=this.handlers;j||(P&&P(this.lastMoveEvent,C),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,C)},this.handlePointerMove=(C,j)=>{this.lastMoveEvent=C,this.lastRawMoveEventInfo=j,this.lastMoveEventInfo=ld(j,this.transformPagePoint),rs.update(this.updatePoint,!0)},this.handlePointerUp=(C,j)=>{this.end();const{onEnd:A,onSessionEnd:T,resumeAnimation:R}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&R&&R(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const P=pm(C.type==="pointercancel"?this.lastMoveEventInfo:ld(j,this.transformPagePoint),this.history);this.startEvent&&A&&A(C,P),T&&T(C,P)},!Kp(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=nu(n),y=ld(p,this.transformPagePoint),{point:g}=y,{timestamp:x}=Ho;this.history=[{...g,timestamp:x}];const{onSessionStart:w}=i;w&&w(n,pm(y,this.history)),this.removeListeners=Jc(Yc(this.contextWindow,"pointermove",this.handlePointerMove),Yc(this.contextWindow,"pointerup",this.handlePointerUp),Yc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(X1.has(a.overflowX)||X1.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),rs.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ia(this.updatePoint)}}function ld(e,n){return n?{point:n(e.point)}:e}function G1(e,n){return{x:e.x-n.x,y:e.y-n.y}}function pm({point:e},n){return{point:e,delta:G1(e,e2(n)),offset:G1(e,Ok(n)),velocity:zk(n,.1)}}function Ok(e){return e[0]}function e2(e){return e[e.length-1]}function zk(e,n){if(e.length<2)return{x:0,y:0};let i=e.length-1,a=null;const c=e2(e);for(;i>=0&&(a=e[i],!(c.timestamp-a.timestamp>wi(n)));)i--;if(!a)return{x:0,y:0};a===e[0]&&e.length>2&&c.timestamp-a.timestamp>wi(n)*2&&(a=e[1]);const u=Ki(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function $k(e,{min:n,max:i},a){return n!==void 0&&e<n?e=a?_s(n,e,a.min):Math.max(e,n):i!==void 0&&e>i&&(e=a?_s(i,e,a.max):Math.min(e,i)),e}function q1(e,n,i){return{min:n!==void 0?e.min+n:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function Ik(e,{top:n,left:i,bottom:a,right:c}){return{x:q1(e.x,i,c),y:q1(e.y,n,a)}}function K1(e,n){let i=n.min-e.min,a=n.max-e.max;return n.max-n.min<e.max-e.min&&([i,a]=[a,i]),{min:i,max:a}}function Pk(e,n){return{x:K1(e.x,n.x),y:K1(e.y,n.y)}}function Hk(e,n){let i=.5;const a=ai(e),c=ai(n);return c>a?i=Rl(n.min,n.max-a,e.min):a>c&&(i=Rl(e.min,e.max-c,n.min)),xa(0,1,i)}function Uk(e,n){const i={};return n.min!==void 0&&(i.min=n.min-e.min),n.max!==void 0&&(i.max=n.max-e.min),i}const up=.35;function Vk(e=up){return e===!1?e=0:e===!0&&(e=up),{x:Q1(e,"left","right"),y:Q1(e,"top","bottom")}}function Q1(e,n,i){return{min:Z1(e,n),max:Z1(e,i)}}function Z1(e,n){return typeof e=="number"?e:e[n]||0}const Yk=new WeakMap;class Wk{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ao(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(nu(x).point),this.stopAnimation()},d=(x,w)=>{const{drag:C,dragPropagation:j,onDragStart:A}=this.getProps();if(C&&!j&&(this.openDragLock&&this.openDragLock(),this.openDragLock=vC(C),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=w,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),_a(R=>{let P=this.getAxisMotionValue(R).get()||0;if(ya.test(P)){const{projection:L}=this.visualElement;if(L&&L.layout){const D=L.layout.layoutBox[R];D&&(P=ai(D)*(parseFloat(P)/100))}}this.originPoint[R]=P}),A&&rs.update(()=>A(x,w),!1,!0),tp(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},h=(x,w)=>{this.latestPointerEvent=x,this.latestPanInfo=w;const{dragPropagation:C,dragDirectionLock:j,onDirectionLock:A,onDrag:T}=this.getProps();if(!C&&!this.openDragLock)return;const{offset:R}=w;if(j&&this.currentDirection===null){this.currentDirection=Xk(R),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",w.point,R),this.updateAxis("y",w.point,R),this.visualElement.render(),T&&rs.update(()=>T(x,w),!1,!0)},p=(x,w)=>{this.latestPointerEvent=x,this.latestPanInfo=w,this.stop(x,w),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new J5(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:Z5(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&rs.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!cd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=$k(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&jl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=Ik(a.layoutBox,n):this.constraints=!1,this.elastic=Vk(i),c!==this.constraints&&!jl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&_a(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=Uk(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!jl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=GC(a,c.root,this.visualElement.getTransformPagePoint());let d=Pk(c.layout.layoutBox,u);if(i){const h=i(WC(d));this.hasMutatedConstraints=!!h,h&&(d=y5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},y=_a(g=>{if(!cd(g,i,this.currentDirection))return;let x=p&&p[g]||{};(d===!0||d===g)&&(x={min:0,max:0});const w=c?200:1e6,C=c?40:1e7,j={type:"inertia",velocity:a?n[g]:0,bounceStiffness:w,bounceDamping:C,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(g,j)});return Promise.all(y).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return tp(this.visualElement,n),a.start(Vp(n,a,0,i,this.visualElement,!1))}stopAnimation(){_a(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){_a(i=>{const{drag:a}=this.getProps();if(!cd(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-_s(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!jl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};_a(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=Hk({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),_a(d=>{if(!cd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:y}=this.constraints[d];h.set(_s(p,y,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Yk.set(this.visualElement,this);const n=this.visualElement.current,i=Yc(n,"pointerdown",y=>{const{drag:g,dragListener:x=!0}=this.getProps(),w=y.target,C=w!==n&&MC(w);g&&x&&!C&&this.start(y)});let a;const c=()=>{const{dragConstraints:y}=this.getProps();jl(y)&&y.current&&(this.constraints=this.resolveRefConstraints(),a||(a=Fk(n,y.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),rs.read(c);const h=Kc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:g})=>{this.isDragging&&g&&(_a(x=>{const w=this.getAxisMotionValue(x);w&&(this.originPoint[x]+=y[x].translate,w.set(w.get()+y[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=up,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function J1(e){let n=!0;return()=>{if(n){n=!1;return}e()}}function Fk(e,n,i){const a=a1(e,J1(i)),c=a1(n,J1(i));return()=>{a(),c()}}function cd(e,n,i){return(n===!0||n===e)&&(i===null||i===e)}function Xk(e,n=10){let i=null;return Math.abs(e.y)>n?i="y":Math.abs(e.x)>n&&(i="x"),i}class Gk extends pr{constructor(n){super(n),this.removeGroupControls=Qi,this.removeListeners=Qi,this.controls=new Wk(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Qi}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const _m=e=>(n,i)=>{e&&rs.update(()=>e(n,i),!1,!0)};class qk extends pr{constructor(){super(...arguments),this.removePointerDownListener=Qi}onPointerDown(n){this.session=new J5(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Z5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:_m(n),onStart:_m(i),onMove:_m(a),onEnd:(u,d)=>{delete this.session,c&&rs.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=Yc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let gm=!1;class Kk extends _.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),gm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Od.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),gm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||rs.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),qp.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;gm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function t2(e){const[n,i]=V5(),a=_.useContext(Mp);return l.jsx(Kk,{...e,layoutGroup:a,switchLayoutGroup:_.useContext(K5),isPresent:n,safeToRemove:i})}const Qk={pan:{Feature:qk},drag:{Feature:Gk,ProjectionNode:U5,MeasureLayout:t2}};function ex(e,n,i){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&rs.postRender(()=>u(n,nu(n)))}class Zk extends pr{mount(){const{current:n}=this.node;n&&(this.unmount=SC(n,(i,a)=>(ex(this.node,a,"Start"),c=>ex(this.node,c,"End"))))}unmount(){}}class Jk extends pr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Jc(Kc(this.node.current,"focus",()=>this.onFocus()),Kc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function tx(e,n,i){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&rs.postRender(()=>u(n,nu(n)))}class e3 extends pr{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=TC(n,(c,u)=>(tx(this.node,u,"Start"),(d,{success:h})=>tx(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const dp=new WeakMap,ym=new WeakMap,t3=e=>{const n=dp.get(e.target);n&&n(e)},n3=e=>{e.forEach(t3)};function s3({root:e,...n}){const i=e||document;ym.has(i)||ym.set(i,{});const a=ym.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(n3,{root:e,...n})),a[c]}function o3(e,n,i){const a=s3(n);return dp.set(e,i),a.observe(e),()=>{dp.delete(e),a.unobserve(e)}}const i3={some:0,all:1};class a3 extends pr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:i3[c]},h=y=>{const{isIntersecting:g}=y;if(this.isInView===g||(this.isInView=g,u&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:x,onViewportLeave:w}=this.node.getProps(),C=g?x:w;C&&C(y)};this.stopObserver=o3(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(r3(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function r3({viewport:e={}},{viewport:n={}}={}){return i=>e[i]!==n[i]}const l3={inView:{Feature:a3},tap:{Feature:e3},focus:{Feature:Jk},hover:{Feature:Zk}},c3={layout:{ProjectionNode:U5,MeasureLayout:t2}},u3={...Rk,...l3,...Qk,...c3},ri=Ek(u3,Tk);function fp(e){const n=Zc(()=>mr(e)),{isStatic:i}=_.useContext(sf);if(i){const[,a]=_.useState(e);_.useEffect(()=>n.on("change",a),[])}return n}function n2(e,n){const i=fp(n()),a=()=>i.set(n());return a(),Ep(()=>{const c=()=>rs.preRender(a,!1,!0),u=e.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),Ia(a)}}),i}function d3(e){Uc.current=[],e();const n=n2(Uc.current,e);return Uc.current=void 0,n}function ud(e,n,i,a){if(typeof e=="function")return d3(e);const u=typeof n=="function"?n:$C(n,i,a),d=Array.isArray(e)?nx(e,u):nx([e],([p])=>u(p)),h=Array.isArray(e)?void 0:e.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function nx(e,n){const i=Zc(()=>[]);return n2(e,()=>{i.length=0;const a=e.length;for(let c=0;c<a;c++)i[c]=e[c].get();return n(i)})}function s_(e){return typeof e=="object"&&!Array.isArray(e)}function s2(e,n,i,a){return e==null?[]:typeof e=="string"&&s_(n)?Gp(e,i,a):e instanceof NodeList?Array.from(e):Array.isArray(e)?e.filter(c=>c!=null):[e]}function f3(e,n,i){return e*(n+1)}function sx(e,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,e+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:e}function h3(e,n,i){for(let a=0;a<e.length;a++){const c=e[a];c.at>n&&c.at<i&&(Dl(e,c),a--)}}function m3(e,n,i,a,c,u){h3(e,c,u);for(let d=0;d<n.length;d++)e.push({value:n[d],at:_s(c,u,a[d]),easing:Cb(i,d)})}function p3(e,n){for(let i=0;i<e.length;i++)e[i]=e[i]/(n+1)}function _3(e,n){return e.at===n.at?e.value===null?1:n.value===null?-1:0:e.at-n.at}const g3="easeInOut";function y3(e,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},y=new Map;let g=0,x=0,w=0;for(let C=0;C<e.length;C++){const j=e[C];if(typeof j=="string"){y.set(j,x);continue}else if(!Array.isArray(j)){y.set(j.name,sx(x,j.at,g,y));continue}let[A,T,R={}]=j;R.at!==void 0&&(x=sx(x,R.at,g,y));let P=0;const L=(D,F,Y,V=0,X=0)=>{const le=x3(D),{delay:ue=0,times:pe=Pb(le),type:Ne=n.type||"keyframes",repeat:Fe,repeatType:ne,repeatDelay:de=0,...O}=F;let{ease:se=n.ease||"easeOut",duration:I}=F;const fe=typeof ue=="function"?ue(V,X):ue,xe=le.length,z=Hp(Ne)?Ne:c==null?void 0:c[Ne||"keyframes"];if(xe<=2&&z){let Me=100;if(xe===2&&w3(le)){const Ze=le[1]-le[0];Me=Math.abs(Ze)}const me={...n,...O};I!==void 0&&(me.duration=wi(I));const Le=Ob(me,Me,z);se=Le.ease,I=Le.duration}I!=null||(I=u);const ae=x+fe;pe.length===1&&pe[0]===0&&(pe[1]=1);const Q=pe.length-le.length;if(Q>0&&Ib(pe,Q),le.length===1&&le.unshift(null),Fe){I=f3(I,Fe);const Me=[...le],me=[...pe];se=Array.isArray(se)?[...se]:[se];const Le=[...se];for(let Ze=0;Ze<Fe;Ze++){le.push(...Me);for(let Ve=0;Ve<Me.length;Ve++)pe.push(me[Ve]+(Ze+1)),se.push(Ve===0?"linear":Cb(Le,Ve-1))}p3(pe,Fe)}const be=ae+I;m3(Y,le,se,pe,ae,be),P=Math.max(fe+I,P),w=Math.max(be,w)};if(xo(A)){const D=ox(A,h);L(T,R,ix("default",D))}else{const D=s2(A,T,a,p),F=D.length;for(let Y=0;Y<F;Y++){T=T,R=R;const V=D[Y],X=ox(V,h);for(const le in T)L(T[le],b3(R,le),ix(le,X),Y,F)}}g=x,x+=P}return h.forEach((C,j)=>{for(const A in C){const T=C[A];T.sort(_3);const R=[],P=[],L=[];for(let V=0;V<T.length;V++){const{at:X,value:le,easing:ue}=T[V];R.push(le),P.push(Rl(0,w,X)),L.push(ue||"easeOut")}P[0]!==0&&(P.unshift(0),R.unshift(R[0]),L.unshift(g3)),P[P.length-1]!==1&&(P.push(1),R.push(null)),d.has(j)||d.set(j,{keyframes:{},transition:{}});const D=d.get(j);D.keyframes[A]=R;const{type:F,...Y}=n;D.transition[A]={...Y,duration:w,ease:L,times:P,...i}}}),d}function ox(e,n){return!n.has(e)&&n.set(e,{}),n.get(e)}function ix(e,n){return n[e]||(n[e]=[]),n[e]}function x3(e){return Array.isArray(e)?e:[e]}function b3(e,n){return e&&e[n]?{...e,...e[n]}:{...e}}const v3=e=>typeof e=="number",w3=e=>e.every(v3);function S3(e){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=ef(e)&&!f5(e)?new T5(n):new C5(n);i.mount(e),Gc.set(e,i)}function C3(e){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new t6(n);i.mount(e),Gc.set(e,i)}function k3(e,n){return xo(e)||typeof e=="number"||typeof e=="string"&&!s_(n)}function o2(e,n,i,a){const c=[];if(k3(e,n))c.push($5(e,s_(n)&&n.default||n,i&&(i.default||i)));else{if(e==null)return c;const u=s2(e,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],y=p instanceof Element?S3:C3;Gc.has(p)||y(p);const g=Gc.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Fp(g,{...n,transition:x},{}))}}return c}function j3(e,n,i){const a=[],c=e.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=mr(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return y3(c,n,i,{spring:Xc}).forEach(({keyframes:d,transition:h},p)=>{a.push(...o2(p,d,h))}),a}function M3(e){return Array.isArray(e)&&e.some(Array.isArray)}function E3(e={}){const{scope:n,reduceMotion:i}=e;function a(c,u,d){let h=[],p;if(M3(c)){const{onComplete:g,...x}=u||{};typeof g=="function"&&(p=g),h=j3(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:g,...x}=d||{};typeof g=="function"&&(p=g),h=o2(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const y=new Y4(h);return p&&y.finished.then(p),n&&(n.animations.push(y),y.finished.then(()=>{Dl(n.animations,y)})),y}return a}const ax=E3(),$a=(e,n)=>!e||!n?!1:e===n||e.startsWith(n)||n.startsWith(e);function rx(e,n){var a;const i=[...(a=e.childShas)!=null?a:[]];return i.includes(n)||i.push(n),{...e,childShas:i}}function T3(e,n,i,a,c,u){if(!i)return{directCommits:e,branchCommitPreviews:n};const d=e.map(p=>$a(p.fullSha,i)||$a(p.sha,i)?rx(p,a):p),h=Object.fromEntries(Object.entries(n).map(([p,y])=>[p,y.map(g=>(p===c||p===u)&&($a(g.fullSha,i)||$a(g.sha,i))?rx(g,a):g)]));return{directCommits:d,branchCommitPreviews:h}}function A3(e,n,i,a){if(!e)return null;const c=d=>$a(d,e);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(y=>c(y.fullSha)||c(y.sha)))return d;return null}function N3(e,n,i,a,c,u,d=!1){const h=e.baseSha,p=`STASH:${e.index}`,y=`Stash ${e.index+1}`,g=A3(h,i,a,u),x=(()=>{var Y;if(!h)return null;const F=i.find(V=>$a(V.fullSha,h)||$a(V.sha,h));if(F!=null&&F.date)return F.date;if(g&&!d){const V=((Y=a[g])!=null?Y:[]).find(X=>$a(X.fullSha,h)||$a(X.sha,h));if(V!=null&&V.date)return V.date}return null})(),w=x?new Date(x).getTime():Number.NaN,C=Date.now(),j=Number.isFinite(w)?Math.max(C,w+1+e.index):C+e.index,A=new Date(j).toISOString(),T=e.message.trim(),R={fullSha:p,sha:y,parentSha:h,clusterKey:null,childShas:[],message:T||y,author:"You",date:A,kind:"stash"},P=`Stash ${e.index+1}`,L={name:P,commitsAhead:1,commitsBehind:0,lastCommitDate:A,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:p,divergedFromSha:h!=null?h:void 0,parentBranch:g||u},D=T3(i,a,h,p,P,u);return{branches:[L,...n],directCommits:D.directCommits,branchCommitPreviews:{...D.branchCommitPreviews,[P]:[R]},branchUniqueAheadCounts:{...c,[P]:1}}}function i2(e,n,i,a,c,u,d=!1){const h=[...e].sort((y,g)=>y.index-g.index);let p={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const y of h)p=N3(y,p.branches,p.directCommits,p.branchCommitPreviews,p.branchUniqueAheadCounts,u,d);return p}function hp({branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:y,manuallyOpenedClumps:g=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:w="",gridFocusSha:C=null,orientation:j="horizontal"}){var V,X;const A=i2(y,e,i,u,h,c,(V=p==null?void 0:p.hasUncommittedChanges)!=null?V:!1);let T=A.branches,R=A.directCommits,P=A.branchCommitPreviews,L=A.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const le=p.headSha||p.parentSha||null,ue=(I,fe)=>!I||!fe?!1:I===fe||I.startsWith(fe)||fe.startsWith(I),pe=p.branchName?T.find(I=>I.name===p.branchName):void 0,Ne=(()=>{var fe;if(!le)return null;const I=R.find(xe=>ue(xe.fullSha,le)||ue(xe.sha,le));if(I!=null&&I.date)return I.date;if(pe){const xe=((fe=P[pe.name])!=null?fe:[]).find(z=>ue(z.fullSha,le)||ue(z.sha,le));if(xe!=null&&xe.date)return xe.date}return null})(),Fe=Ne?new Date(Ne).getTime():Number.NaN,ne=Date.now(),de=Number.isFinite(Fe)?Math.max(ne,Fe+1):ne,O=new Date(de).toISOString(),se={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:le,message:"Local uncommitted changes",author:"You",date:O,kind:"uncommitted"};pe?(T=T.map(I=>I.name===pe.name?{...I,commitsAhead:I.commitsAhead+1,unpushedCommits:I.unpushedCommits+1,lastCommitDate:O,headSha:"WORKING_TREE"}:I),P={...P,[pe.name]:[se,...P[pe.name]||[]]},L={...L,[pe.name]:Math.max(0,(X=Object.prototype.hasOwnProperty.call(L,pe.name)?L[pe.name]:pe.commitsAhead)!=null?X:0)+1}):P={...P,[c]:[se,...P[c]||[]]}}const D={...d};D[c]=null;const F=Cp(T,c,P,D),Y=kp({lanes:F,branches:T,mergeNodes:n,directCommits:R,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:P,branchParentByName:D,branchUniqueAheadCounts:L,manuallyOpenedClumps:g,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:w,gridFocusSha:C,checkedOutRef:p,orientation:j});return{enrichedBranches:T,enrichedBranchCommitPreviews:P,enrichedBranchUniqueAheadCounts:L,enrichedDirectCommits:R,sharedGridLayoutModel:Y}}const lx="git-visualizer:expanded-projects",cx="git-visualizer:expanded-branches";function D3(e,n){var u;const i=new Map(e.map(d=>[d.name,d])),a=new Map;for(const d of e){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const y=(u=a.get(h))!=null?u:[];y.push(d.name),a.set(h,y)}const c=(d,h)=>{var g,x,w,C;const p=new Date((x=(g=i.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((C=(w=i.get(h))==null?void 0:w.lastCommitDate)!=null?C:0).getTime();return p-y};for(const[d,h]of a.entries())h.sort(c);return a}function R3(e,n,i){const a=new Map(e.map(d=>[d.name,d])),c=(d,h)=>{var g,x,w,C;const p=new Date((x=(g=a.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((C=(w=a.get(h))==null?void 0:w.lastCommitDate)!=null?C:0).getTime();return p-y},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return e.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function B3(e,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const y of d){const g=[...h,y];if(y===i.branchName){for(const x of g)c.add(x);return!0}if(u((p=n.get(y))!=null?p:[],g))return!0}return!1};return u(e,[]),c}function xm(e,n){if(!e||!n)return!1;const i=u=>{const d=u.replace(/\\/g,"/").replace(/\/+$/,""),h=new Set([d]);return d.startsWith("/private/")&&h.add(d.slice(8)),Array.from(h)},a=i(e),c=i(n);for(const u of a)for(const d of c)if(u===d||u.toLowerCase()===d.toLowerCase())return!0;return!1}function mp({branchName:e,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:x,showCommits:w,getMergeTargetLabels:C,sourceBranchName:j,clusterKeyByCommitId:A,unpushedCommitShasByBranch:T,isGridClusterOpen:R,onToggleGridCluster:P,onSelectCommit:L,onSelectBranch:D,isActiveProject:F}){var be,Me;if(x.has(e))return null;const Y=a.get(e);if(!Y)return null;const V=(be=u.get(e))!=null?be:[],X=V.length>0,le=_.useMemo(()=>{var me;return[...(me=c[e])!=null?me:[]]},[c,e]),ue=w&&le.length>0,pe=w,Ne=X||ue,Fe=h.has(e),ne=pe?le:[],de=Fe&&ne.length>0,O=y===e||g!=null&&Y.headSha===g,se=new Set(x);se.add(e);const I="top-[-0.45rem] h-5 w-[10px]",fe="rounded-bl-[7px]",xe="left-[0.65rem]",z=new Map,ae=[];for(const me of V){const Le=d.get(me);if(Le){const Ze=ne.findIndex(Ve=>$i(Ve.fullSha,Le)||$i(Ve.sha,Le));if(Ze>=0){const Ve=(Me=z.get(Ze))!=null?Me:[];Ve.push(me),z.set(Ze,Ve);continue}}ae.push(me)}const Q=_.useMemo(()=>{if(!w||ne.length===0)return[];const me=[];let Le=[],Ze=null;const Ve=()=>{if(Le.length===0)return;const ht=Le[Le.length-1],Tt=`sidebar-single-${e}-${ht.fullSha}`;me.push({key:Ze!=null?Ze:Tt,commits:Le,count:Le.length,lead:ht}),Le=[],Ze=null};return ne.forEach(ht=>{var $t,pt;const Tt=($t=A.get(`${e}:${ht.fullSha}`))!=null?$t:null,Ct=((pt=T[e])!=null?pt:[]).includes(ht.fullSha),lt=`${Tt!=null?Tt:`sidebar-single-${e}-${ht.fullSha}`}:${Ct?"unpushed":"pushed"}`;if(Le.length===0){Le=[ht],Ze=lt;return}if(lt===Ze){Le.push(ht);return}Ve(),Le=[ht],Ze=lt}),Ve(),me},[e,w,ne,A,T]);return l.jsxs("li",{className:mn("relative flex flex-col gap-1",n>0?"pl-4":"pl-0",Fe?"mb-2.5":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:mn("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",fe,xe,I)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:mn("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.25rem]",xe)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("div",{className:mn("branch-row","group flex min-w-0 flex-1 items-center gap-0 rounded-md px-2 h-6 text-left text-sm font-normal transition-colors hover:bg-border/50","text-inherit hover:text-inherit"),"data-active-project":F?"true":"false","data-checked-out-branch":O?"true":"false",style:{color:F?O?"var(--checked)":"var(--foreground)":"var(--muted-foreground)"},role:"button",tabIndex:0,onClick:()=>{F?D==null||D(e):Ne?p(e):D==null||D(e)},onKeyDown:me=>{(me.key==="Enter"||me.key===" ")&&(me.preventDefault(),F?D==null||D(e):Ne?p(e):D==null||D(e))},children:[Ne?l.jsx("button",{type:"button","aria-label":`${Fe?"Collapse":"Expand"} ${e}`,onPointerDown:me=>{me.preventDefault()},onClick:me=>{me.preventDefault(),me.stopPropagation(),p(e)},className:"group/chevron branch-chevron flex h-6 w-6 -ml-2 shrink-0 items-center justify-center rounded-sm p-0 text-[10px] leading-none transition-colors hover:bg-border/50",children:l.jsx(_w,{"aria-hidden":"true",className:mn("h-3.5 w-3.5 shrink-0 transition-transform text-current",Fe?"rotate-90":"")})}):null,l.jsx("span",{className:mn("branch-label min-w-0 flex-1 truncate font-normal whitespace-nowrap overflow-hidden","font-medium"),children:e})]})}),de?l.jsx("ul",{className:"relative space-y-1 pl-4",children:Q.map(me=>{const Le=me.count>1&&!R(me.key);return(Le?[me.lead]:me.commits).map(Ve=>{var Ct;const ht=ne.findIndex(lt=>lt.fullSha===Ve.fullSha),Tt=C(Ve.fullSha,j!=null?j:e);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>L==null?void 0:L(Ve.fullSha),className:"min-w-0 flex-1 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-muted hover:text-muted-foreground",title:Ve.message,children:[l.jsx("span",{className:"block truncate",children:Ve.message}),Tt.length>0?l.jsx("span",{className:"mt-0 block space-y-2",children:Tt.map(lt=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:lt})]},`${Ve.fullSha}:${lt}`))}):null]}),me.count>1&&Ve.fullSha===me.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${e}:${me.lead.fullSha}`,onClick:()=>P(me.key,`${e}:${me.lead.fullSha}`),className:mn("shrink-0 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-muted hover:text-muted-foreground",Le?"":"min-w-[2ch] text-center"),children:Le?`+${Math.max(1,me.count-1)}`:"−"}):null]}),(Ct=z.get(ht))!=null&&Ct.length?l.jsx("ul",{className:"relative space-y-1",children:z.get(ht).map((lt,$t,pt)=>l.jsx(mp,{branchName:lt,depth:n+1,isLast:$t===pt.length-1&&ae.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:se,showCommits:w,getMergeTargetLabels:C,sourceBranchName:lt,clusterKeyByCommitId:A,unpushedCommitShasByBranch:T,isGridClusterOpen:R,onToggleGridCluster:P,onSelectCommit:L,onSelectBranch:D,isActiveProject:F},lt))}):null]},`${e}:${Ve.fullSha}`)})})}):null,X&&Fe&&ae.length>0?l.jsx("ul",{className:"relative space-y-1",children:ae.map((me,Le)=>l.jsx(mp,{branchName:me,depth:n+1,isLast:Le===ae.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:se,showCommits:w,getMergeTargetLabels:C,sourceBranchName:me,clusterKeyByCommitId:A,unpushedCommitShasByBranch:T,isGridClusterOpen:R,onToggleGridCluster:P,onSelectCommit:L,onSelectBranch:D,isActiveProject:F},me))}):null]})}function L3({open:e}){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-4 w-4 shrink-0 transition-opacity",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e?l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.7031 19H5.97457C4.96341 19 4.11131 18.2453 3.9892 17.2415L2.77269 7.24152C2.62773 6.04996 3.5577 5 4.75805 5H7C7.64911 5 8.28071 5.21053 8.8 5.6L9.2 5.9C9.71929 6.28947 10.3509 6.5 11 6.5H16.2369C17.2445 6.5 18.0947 7.24955 18.2211 8.2492L18.4938 10.4062",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M5.21532 12.0419C5.42789 11.1385 6.23405 10.5 7.16215 10.5H19.8105C20.7133 10.5 21.38 11.3419 21.1733 12.2207L19.9409 17.4581C19.7284 18.3615 18.9222 19 17.9941 19H6.10333C4.81363 19 3.8611 17.7973 4.1565 16.5419L5.21532 12.0419Z",stroke:"currentColor",strokeWidth:"1.5"})]}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 7C4 5.89543 4.89543 5 6 5H9C9.64911 5 10.2807 5.21053 10.8 5.6L11.2 5.9C11.7193 6.28947 12.3509 6.5 13 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 10.5L12.4211 10.5L20 10.5",stroke:"currentColor",strokeWidth:"1.5"})]})})}function O3({projects:e,activeProjectPath:n,onSelectProject:i,onAddProject:a,onRemoveProject:c,onRevealProjectInFinder:u,onReorderProjects:d,projectLoading:h=!1,projectError:p=null,checkedOutRef:y,manuallyOpenedClumpsByProject:g={},manuallyClosedClumpsByProject:x={},manuallyOpenedClumps:w,manuallyClosedClumps:C,setManuallyOpenedClumps:j,setManuallyClosedClumps:A,gridLayoutModel:T,onSelectCommit:R,onSelectBranch:P,showCommits:L,className:D,style:F,collapsed:Y=!1}){var Ue,Ae;const V=_.useRef(null),X=_.useRef(null),[le,ue]=_.useState(()=>{if(typeof window>"u")return new Set;try{const ye=window.localStorage.getItem(lx);if(ye){const st=JSON.parse(ye);if(Array.isArray(st)){const We=new Set;for(const nt of st)typeof nt=="string"&&We.add(nt);return We}}}catch{}return new Set}),[pe,Ne]=_.useState({}),[Fe,ne]=_.useState(()=>new Set),[de,O]=_.useState(()=>new Set),[se,I]=_.useState(null),fe=w!=null?w:Fe,xe=C!=null?C:de,z=j!=null?j:ne,ae=A!=null?A:O,[Q,be]=_.useState(null),[Me,me]=_.useState(null),[Le,Ze]=_.useState(null),[Ve,ht]=_.useState(null),[Tt,Ct]=_.useState(null),[lt,$t]=_.useState(null),[pt,qt]=_.useState(null),Kt=_.useRef(new Map),K=_.useRef(!1),De=_.useRef(null),ct=_.useRef(null),at=ye=>{try{window.localStorage.setItem(lx,JSON.stringify(Array.from(ye)))}catch{}},_t=ye=>{try{const st=Object.fromEntries(Object.entries(ye).map(([We,nt])=>[We,Array.from(nt)]));window.localStorage.setItem(cx,JSON.stringify(st))}catch{}};_.useEffect(()=>{at(le)},[le]),_.useEffect(()=>{try{const ye=window.localStorage.getItem(cx);if(!ye)return;const st=JSON.parse(ye);if(!st||typeof st!="object")return;const We={};for(const[nt,Re]of Object.entries(st)){if(!Array.isArray(Re))continue;const Je=new Set;for(const bt of Re)typeof bt=="string"&&Je.add(bt);We[nt]=Je}Ne(We)}catch{}},[]),_.useEffect(()=>{_t(pe)},[pe]);const Ie=e,xt=_.useMemo(()=>{if(!Ve)return Ie;const ye=Ie.find(Re=>Re.path===Ve);if(!ye)return Ie;const st=Ie.filter(Re=>Re.path!==Ve);if(Tt==null)return st;const We=[...st],nt=Math.max(0,Math.min(Tt,We.length));return We.splice(nt,0,ye),We},[Tt,Ve,Ie]),gt=_.useCallback(ye=>{d==null||d(ye)},[d]),kt=_.useCallback(()=>{Ze(null),ht(null),Ct(null),$t(null)},[]);_.useEffect(()=>{if(!Le)return;const ye=We=>{const nt=De.current;!nt||!nt.active||Math.abs(We.clientX-nt.startX)<=4&&Math.abs(We.clientY-nt.startY)<=4||ct.current==null&&(ct.current=window.requestAnimationFrame(()=>{var Ke,Rt;ct.current=null;const Re=De.current;if(!Re||!Re.active)return;(Math.abs(We.clientX-Re.startX)>4||Math.abs(We.clientY-Re.startY)>4)&&(Re.moved=!0,ht(Re.path)),$t({x:We.clientX-Re.offsetX,y:We.clientY-Re.offsetY,width:Re.width});const bt=Array.from((Rt=(Ke=X.current)==null?void 0:Ke.querySelectorAll("[data-project-path]"))!=null?Rt:[]).filter(wt=>wt.dataset.projectPath&&wt.dataset.projectPath!==Re.path);let vt=bt.length;if(bt.length>0)for(let wt=0;wt<bt.length;wt+=1){const mt=bt[wt].getBoundingClientRect(),rn=mt.top+mt.height/2;if(We.clientY<rn){vt=wt;break}}Ct(vt)}))},st=()=>{const We=De.current;if(De.current=null,ct.current!=null&&(window.cancelAnimationFrame(ct.current),ct.current=null),!We){kt();return}if(!We.moved){kt();return}K.current=!0;const nt=Ie.map(Ke=>Ke.path);if(nt.indexOf(We.path)<0){kt();return}const Je=Tt;if(Je==null){kt();return}const bt=nt.filter(Ke=>Ke!==We.path),vt=Math.max(0,Math.min(Je,bt.length));bt.splice(vt,0,We.path),gt(bt),kt(),window.requestAnimationFrame(()=>{K.current=!1,I(null)})};return window.addEventListener("pointermove",ye),window.addEventListener("pointerup",st),window.addEventListener("pointercancel",st),()=>{window.removeEventListener("pointermove",ye),window.removeEventListener("pointerup",st),window.removeEventListener("pointercancel",st)}},[kt,gt,Le,Tt,Ie]);const Xe=_.useCallback((ye,st)=>{if(ye.button!==0)return;const We=ye.currentTarget.getBoundingClientRect();De.current={active:!0,path:st,startX:ye.clientX,startY:ye.clientY,offsetX:ye.clientX-We.left,offsetY:ye.clientY-We.top,width:We.width,moved:!1},Ze(st),ht(null),Ct(null),$t({x:ye.clientX-We.left,y:ye.clientY-We.top,width:We.width})},[]),ot=(Ue=T==null?void 0:T.defaultCollapsedClumps)!=null?Ue:new Set,U=ye=>fe.has(ye)||!ot.has(ye)&&!xe.has(ye),J=(ye,st)=>{const We=V.current,nt=X.current;if(We&&nt){const Re=`[data-clump-toggle-id="${st}"]`,Je=We.querySelector(Re);if(Je){const bt=Je.getBoundingClientRect().top-nt.getBoundingClientRect().top;me({id:st,topWithinScrollBody:bt})}else me(null)}else me(null);be(st),z(Re=>{const Je=new Set(Re),bt=U(ye);return ae(vt=>{const Ke=new Set(vt);return bt?(Je.delete(ye),Ke.add(ye)):(Ke.delete(ye),Je.add(ye)),Ke}),Je})};_.useLayoutEffect(()=>{if(!Q)return;const ye=V.current,st=X.current;if(!ye||!st)return;const We=`[data-clump-toggle-id="${Q}"]`,nt=ye.querySelector(We);if(nt){if((Me==null?void 0:Me.id)===Q){const Je=nt.getBoundingClientRect().top-st.getBoundingClientRect().top-Me.topWithinScrollBody;Number.isFinite(Je)&&Je!==0&&(st.scrollTop+=Je)}nt.focus({preventScroll:!0}),be(null),me(null)}},[fe,xe,Q,Me]);const we=(ye,st)=>{Ne(We=>{var bt;const nt=(bt=We[ye])!=null?bt:new Set,Re=new Set(nt);Re.has(st)?Re.delete(st):Re.add(st);const Je={...We,[ye]:Re};return _t(Je),Je})};_.useEffect(()=>{if(se==null)return;const ye=()=>{const We=Kt.current.get(se);if(!We)return;const nt=We.getBoundingClientRect();qt({top:nt.bottom+8,right:Math.max(8,window.innerWidth-nt.right)})};ye();const st=()=>I(null);return window.addEventListener("pointerdown",st),window.addEventListener("resize",ye),window.addEventListener("scroll",ye,!0),()=>{window.removeEventListener("pointerdown",st),window.removeEventListener("resize",ye),window.removeEventListener("scroll",ye,!0)}},[se]);const je=_.useMemo(()=>{var st,We,nt,Re,Je,bt,vt,Ke,Rt,wt,mt,rn,ft,Ht,dn,Ot;const ye=new Map;for(const St of e){const fn=xm(St.path,n),ls=le.has(St.path);if(!fn&&!ls)continue;const Qt=hp({branches:St.branches,mergeNodes:St.mergeNodes,directCommits:St.directCommits,unpushedDirectCommits:St.unpushedDirectCommits,defaultBranch:St.defaultBranch,branchCommitPreviews:St.branchCommitPreviews,branchUniqueAheadCounts:St.branchUniqueAheadCounts,checkedOutRef:St.checkedOutRef,stashes:St.stashes,manuallyOpenedClumps:(st=g[St.path])!=null?st:new Set,manuallyClosedClumps:(We=x[St.path])!=null?We:new Set}),pn=Qt.enrichedBranches.some(Zt=>Zt.name===St.defaultBranch)?Qt.enrichedBranches:[{name:St.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...Qt.enrichedBranches],Jt=new Map(Qt.sharedGridLayoutModel.nodes.map(Zt=>[Zt.commit.visualId,Zt.row])),zt={};for(const Zt of Qt.sharedGridLayoutModel.allCommits){const jn=(nt=zt[Zt.branchName])!=null?nt:[];jn.push({fullSha:Zt.id,sha:Zt.id.slice(0,7),parentSha:(Re=Zt.parentSha)!=null?Re:null,message:Zt.message,author:Zt.author,date:Zt.date,kind:(Je=Zt.kind)!=null?Je:"commit"}),zt[Zt.branchName]=jn}for(const Zt of Object.keys(zt))zt[Zt]=zt[Zt].sort((jn,yn)=>{var es,vo;const Hs=new Date(jn.date).getTime(),Rn=new Date(yn.date).getTime();if(Hs!==Rn)return Hs-Rn;const hs=(es=Jt.get(`${Zt}:${jn.fullSha}`))!=null?es:Number.MAX_SAFE_INTEGER,en=(vo=Jt.get(`${Zt}:${yn.fullSha}`))!=null?vo:Number.MAX_SAFE_INTEGER;return hs!==en?hs-en:jn.fullSha.localeCompare(yn.fullSha)});const tn=(bt=Qt.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?bt:new Map,Ge=(Zt,jn)=>{const yn=tn.get(jn);if(!yn)return[];for(const[Hs,Rn]of yn.entries())if($i(Zt,Hs))return Array.from(Rn).sort();return[]},$n=D3(pn,St.defaultBranch),In=R3(pn,St.defaultBranch,$n),Ds=new Map(pn.map(Zt=>[Zt.name,Zt])),Vn=new Map;for(const Zt of pn){const jn=(Ke=(vt=Qt.sharedGridLayoutModel.firstBranchCommitByName.get(Zt.name))==null?void 0:vt.parentSha)!=null?Ke:null,yn=jn!=null?jn:null;Vn.set(Zt.name,yn)}const bo=(Rt=Qt.sharedGridLayoutModel.defaultCollapsedClumps)!=null?Rt:new Set,Is=(wt=g[St.path])!=null?wt:new Set,lo=(mt=x[St.path])!=null?mt:new Set,Ps=Zt=>Is.has(Zt)||!bo.has(Zt)&&!lo.has(Zt);ye.set(St.path,{rootBranchNames:In,branchByName:Ds,branchCommitPreviewsFromLayout:zt,childNamesByParent:$n,branchAnchorShaByName:Vn,unpushedCommitShasByBranch:St.unpushedCommitShasByBranch,checkedOutBranchName:(ft=(rn=St.checkedOutRef)==null?void 0:rn.branchName)!=null?ft:null,checkedOutHeadSha:(dn=(Ht=St.checkedOutRef)==null?void 0:Ht.headSha)!=null?dn:null,clusterKeyByCommitId:(Ot=Qt.sharedGridLayoutModel.clusterKeyByCommitId)!=null?Ot:new Map,getMergeTargetLabels:Ge,isGridClusterOpen:Ps})}return ye},[n,le,x,g,e]),tt=(ye,st={})=>{var mt,rn,ft,Ht,dn;const We=(mt=st.ghostMode)!=null?mt:!1,nt=(rn=st.hideLive)!=null?rn:!1,Re=xm(ye.path,n),Je=le.has(ye.path),bt=(ft=ye.treeLoaded)!=null?ft:ye.branches.length>0,vt=je.get(ye.path),Ke=(Ht=pe[ye.path])!=null?Ht:vt?B3(vt.rootBranchNames,vt.childNamesByParent,y,ye.defaultBranch):new Set,Rt=Ve===ye.path,wt=xm(ye.path,n);return l.jsxs(ri.div,{layout:"position",transition:{duration:.12,ease:"easeOut"},"data-project-path":ye.path,"data-active-project":wt?"true":"false",className:mn("project-row relative z-10 flex flex-col gap-1 transition-colors",Je&&vt?"mb-2.5":""),children:[Tt!==null&&Ve!==ye.path&&((dn=xt[Tt])==null?void 0:dn.path)===ye.path?l.jsx("div",{className:"h-px","aria-hidden":"true",children:l.jsx("div",{className:"mx-1 h-px bg-foreground/60"})}):null,l.jsxs("div",{className:mn("relative z-0 px-1",nt?"pointer-events-none opacity-0":""),children:[l.jsxs("div",{className:mn(We?"group flex w-full items-center gap-0 rounded-lg px-0 h-6":"group sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-muted px-0 h-6 transition-all duration-100 ease-out hover:bg-border/50 cursor-grab active:cursor-grabbing",Rt&&!We?"opacity-0":""),onPointerDownCapture:Ot=>{if(We)return;const St=Ot.target;St!=null&&St.closest('.window-no-drag, button, input, textarea, select, [contenteditable="true"]')||Xe(Ot,ye.path)},onClick:Ot=>{if(We||wt||Ve===ye.path||K.current)return;const St=Ot.target;St!=null&&St.closest('button, input, textarea, select, [contenteditable="true"]')||i(ye.path)},children:[l.jsx("button",{type:"button",onPointerDown:Ot=>Ot.stopPropagation(),onClick:Ot=>{Ot.preventDefault(),Ot.stopPropagation(),ue(St=>{const fn=new Set(St);return fn.has(ye.path)?fn.delete(ye.path):fn.add(ye.path),at(fn),fn})},"aria-expanded":Je,"aria-label":`${Je?"Collapse":"Expand"} ${ye.name}`,className:mn("project-icon flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-border/50",We?"pointer-events-none":""),style:{color:wt?"var(--foreground)":"var(--muted-foreground)"},children:l.jsx(L3,{open:Je})}),l.jsx("span",{className:mn("project-name min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors","font-normal"),style:{color:wt?"var(--foreground)":"var(--muted-foreground)"},children:ye.name}),l.jsxs("div",{className:"relative z-[130] shrink-0",children:[l.jsx("button",{type:"button",onPointerDown:Ot=>Ot.stopPropagation(),"aria-label":`Project actions for ${ye.name}`,"aria-expanded":se===ye.path,ref:Ot=>{Kt.current.set(ye.path,Ot)},onClick:Ot=>{Ot.stopPropagation();const St=Ot.currentTarget.getBoundingClientRect();qt({top:St.bottom+8,right:Math.max(8,window.innerWidth-St.right)}),I(fn=>fn===ye.path?null:ye.path)},className:mn("pr-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md opacity-0 hover:bg-border/50 group-hover:opacity-100 text-current",We?"pointer-events-none":""),children:l.jsx(bw,{className:"h-4 w-4 shrink-0"})}),se===ye.path&&!We&&pt&&typeof document<"u"?zl.createPortal(l.jsxs("div",{role:"menu",className:"fixed z-[10000] inline-flex w-max flex-col overflow-hidden rounded-md border border-border bg-background p-1",style:{top:`${pt.top}px`,right:`${pt.right}px`},onPointerDownCapture:Ot=>Ot.stopPropagation(),onClick:Ot=>Ot.stopPropagation(),children:[l.jsx("button",{type:"button",role:"menuitem",onPointerDown:Ot=>Ot.stopPropagation(),onClick:()=>{I(null),u(ye.path)},className:"flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",children:"Open in Finder"}),l.jsx("button",{type:"button",role:"menuitem",onPointerDown:Ot=>Ot.stopPropagation(),onClick:()=>{I(null),c(ye.path)},className:"project-menu-remove flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium",children:"Remove"})]}),document.body):null]})]}),Je?bt&&vt?l.jsx("ul",{className:mn("relative z-0 space-y-1 pt-0",We?"opacity-70":""),children:vt.rootBranchNames.map((Ot,St)=>l.jsx(mp,{branchName:Ot,depth:0,isLast:St===vt.rootBranchNames.length-1,branchByName:vt.branchByName,branchCommitPreviews:vt.branchCommitPreviewsFromLayout,childNamesByParent:vt.childNamesByParent,branchAnchorShaByName:vt.branchAnchorShaByName,expandedBranchNames:Ke,onToggleBranch:fn=>we(ye.path,fn),checkedOutBranchName:vt.checkedOutBranchName,checkedOutHeadSha:vt.checkedOutHeadSha,ancestors:new Set,showCommits:L,getMergeTargetLabels:vt.getMergeTargetLabels,sourceBranchName:Ot,clusterKeyByCommitId:vt.clusterKeyByCommitId,unpushedCommitShasByBranch:vt.unpushedCommitShasByBranch,isGridClusterOpen:vt.isGridClusterOpen,onToggleGridCluster:J,onSelectCommit:async fn=>{Re||await i(ye.path),R==null||R(fn)},onSelectBranch:async fn=>{Re||await i(ye.path),P==null||P(fn)},isActiveProject:wt},`${ye.path}:${Ot}`))}):l.jsx("p",{className:mn("px-2 py-2 text-xs text-muted-foreground",We?"opacity-70":""),children:"Loading branch tree..."}):null]})]},ye.path)};return l.jsxs("aside",{ref:V,"aria-label":"Dense branch sidebar",className:mn("pointer-events-auto relative z-[120] h-full select-none overflow-hidden bg-muted",D),style:F,children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"absolute inset-x-0 top-0 z-80 h-12"}),l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[p&&l.jsx("div",{className:"px-2.5 pb-2",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:p})}),l.jsx("div",{className:mn("px-2 pb-2",Y?"opacity-0 pointer-events-none":""),children:l.jsx("div",{className:"px-1",children:l.jsxs("button",{type:"button",onClick:a,disabled:h,"aria-label":"Add Repo",className:"window-no-drag group flex w-full items-center gap-0 rounded-lg bg-muted px-0 h-6 text-foreground transition-colors hover:bg-border/50 disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors group-hover:bg-border/50 text-foreground",children:l.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-4 w-4 shrink-0",children:l.jsx("path",{d:"M12 5V19M5 12H19",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}),l.jsx("span",{className:"min-w-0 flex-1 truncate pl-0 text-left text-sm font-normal text-foreground",children:"New Project"})]})})}),l.jsx("div",{ref:X,className:mn("sidebar-scrollbar min-h-0 flex-1 space-y-2 overflow-y-auto px-2",Y?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:xt.map(ye=>tt(ye,{hideLive:Ve===ye.path}))})]}),Ve&&lt?l.jsx("div",{"aria-hidden":"true",className:"pointer-events-none fixed left-0 top-0 z-[90]",style:{transform:`translate3d(${lt.x}px, ${lt.y}px, 0)`,width:`${lt.width}px`},children:tt((Ae=e.find(ye=>ye.path===Ve))!=null?Ae:Ie.find(ye=>ye.path===Ve),{ghostMode:!0})}):null]})}function bm(e){return{branchByName:Array.from(e.branchByName.entries()),laneByName:Array.from(e.laneByName.entries()),mainCommits:e.mainCommits,branchCommitsByLane:Array.from(e.branchCommitsByLane.entries()),branchPreviewSets:Array.from(e.branchPreviewSets.entries()),allCommits:e.allCommits,clustersByBranch:Array.from(e.clustersByBranch.entries()),clusterKeyByCommitId:Array.from(e.clusterKeyByCommitId.entries()),clusterKeyBySha:Array.from(e.clusterKeyBySha.entries()),leadByClusterKey:Array.from(e.leadByClusterKey.entries()),clusterCounts:Array.from(e.clusterCounts.entries()),debugRows:e.debugRows,branchDebugRows:e.branchDebugRows,nodes:e.nodes,normalizedSearchQuery:e.normalizedSearchQuery,matchingNodes:e.matchingNodes,matchingNodeIds:Array.from(e.matchingNodeIds),focusedNode:e.focusedNode,checkedOutClusterKey:e.checkedOutClusterKey,defaultCollapsedClumps:Array.from(e.defaultCollapsedClumps),visibleCommitsList:e.visibleCommitsList,renderNodes:e.renderNodes,visibleNodesBySha:Array.from(e.visibleNodesBySha.entries()),visibleNodeByClusterKey:Array.from(e.visibleNodeByClusterKey.entries()),contentWidth:e.contentWidth,contentHeight:e.contentHeight,connectors:e.connectors,mergeConnectors:e.mergeConnectors,connectorDecisions:e.connectorDecisions,nodeWarnings:Array.from(e.nodeWarnings.entries()),connectorParentShas:Array.from(e.connectorParentShas),branchStartShas:Array.from(e.branchStartShas),branchOffNodeShas:Array.from(e.branchOffNodeShas),crossBranchOutgoingShas:Array.from(e.crossBranchOutgoingShas),commitIdsWithRenderedAncestry:Array.from(e.commitIdsWithRenderedAncestry),branchBaseCommitByName:Array.from(e.branchBaseCommitByName.entries()),firstBranchCommitByName:Array.from(e.firstBranchCommitByName.entries()),mergeDestinations:e.mergeDestinations,mergeTargetBranchesBySourceBranchAndCommitSha:Array.from(e.mergeTargetBranchesBySourceBranchAndCommitSha.entries()).map(([n,i])=>[n,Array.from(i.entries()).map(([a,c])=>[a,Array.from(c)])])}}function vm(e){var i,a,c,u,d,h,p,y,g,x,w,C,j,A,T,R,P,L,D,F,Y,V,X,le,ue,pe,Ne,Fe,ne,de,O,se,I,fe,xe,z,ae,Q,be;const n=new Map(((i=e.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?i:[]).map(([Me,me])=>[Me,new Map(me.map(([Le,Ze])=>[Le,new Set(Ze)]))]));return{branchByName:new Map((a=e.branchByName)!=null?a:[]),laneByName:new Map((c=e.laneByName)!=null?c:[]),mainCommits:(u=e.mainCommits)!=null?u:[],branchCommitsByLane:new Map((d=e.branchCommitsByLane)!=null?d:[]),branchPreviewSets:new Map((h=e.branchPreviewSets)!=null?h:[]),allCommits:(p=e.allCommits)!=null?p:[],clustersByBranch:new Map((y=e.clustersByBranch)!=null?y:[]),clusterKeyByCommitId:new Map((g=e.clusterKeyByCommitId)!=null?g:[]),clusterKeyBySha:new Map((x=e.clusterKeyBySha)!=null?x:[]),leadByClusterKey:new Map((w=e.leadByClusterKey)!=null?w:[]),clusterCounts:new Map((C=e.clusterCounts)!=null?C:[]),debugRows:(j=e.debugRows)!=null?j:[],branchDebugRows:(A=e.branchDebugRows)!=null?A:[],nodes:(T=e.nodes)!=null?T:[],normalizedSearchQuery:(R=e.normalizedSearchQuery)!=null?R:"",matchingNodes:(P=e.matchingNodes)!=null?P:[],matchingNodeIds:new Set((L=e.matchingNodeIds)!=null?L:[]),focusedNode:(D=e.focusedNode)!=null?D:null,checkedOutClusterKey:(F=e.checkedOutClusterKey)!=null?F:null,defaultCollapsedClumps:new Set((Y=e.defaultCollapsedClumps)!=null?Y:[]),visibleCommitsList:(V=e.visibleCommitsList)!=null?V:[],renderNodes:(X=e.renderNodes)!=null?X:[],visibleNodesBySha:new Map((le=e.visibleNodesBySha)!=null?le:[]),visibleNodeByClusterKey:new Map((ue=e.visibleNodeByClusterKey)!=null?ue:[]),pointFormatter:(Me,me)=>`${Me},${me}`,contentWidth:(pe=e.contentWidth)!=null?pe:0,contentHeight:(Ne=e.contentHeight)!=null?Ne:0,connectors:(Fe=e.connectors)!=null?Fe:[],mergeConnectors:(ne=e.mergeConnectors)!=null?ne:[],connectorDecisions:(de=e.connectorDecisions)!=null?de:[],nodeWarnings:new Map((O=e.nodeWarnings)!=null?O:[]),connectorParentShas:new Set((se=e.connectorParentShas)!=null?se:[]),branchStartShas:new Set((I=e.branchStartShas)!=null?I:[]),branchOffNodeShas:new Set((fe=e.branchOffNodeShas)!=null?fe:[]),crossBranchOutgoingShas:new Set((xe=e.crossBranchOutgoingShas)!=null?xe:[]),commitIdsWithRenderedAncestry:new Set((z=e.commitIdsWithRenderedAncestry)!=null?z:[]),branchBaseCommitByName:new Map((ae=e.branchBaseCommitByName)!=null?ae:[]),firstBranchCommitByName:new Map((Q=e.firstBranchCommitByName)!=null?Q:[]),mergeDestinations:(be=e.mergeDestinations)!=null?be:[],mergeTargetBranchesBySourceBranchAndCommitSha:n}}const dd="git-visualizer:projects",wm="git-visualizer:active-project",ux="git-visualizer:map-orientation",fd=12,dx=1400,z3=180,fx="git-visualizer:sidebar-width",hx="git-visualizer:sidebar-collapsed",mx="git-visualizer:grid-clumps",px=360,_x=180,gx=360;function Go(e){return e==="/"?e:e.replace(/\/+$/,"")}function $3(...e){return e.filter(Boolean).join(" ")}function Sm(e){var a;if(!e)return"";const i=e.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function Xd(e){return e.size===0?"__none__":Array.from(e).sort().join(",")}function hd(e,n,i,a){return["layout-v3",e,n,Xd(i),Xd(a)].join("|")}function yx(e){var n,i;return[e.path,e.name,e.defaultBranch,e.updatedAtMs,e.branches.map(a=>[a.name,a.headSha,a.commitsAhead,a.commitsBehind,a.unpushedCommits,a.remoteSyncStatus,a.status,a.lastCommitDate].join(":")).join("|"),e.mergeNodes.map(a=>[a.fullSha,a.targetBranch,a.targetCommitSha].join(":")).join("|"),e.directCommits.map(a=>a.fullSha).join("|"),e.unpushedDirectCommits.map(a=>a.fullSha).join("|"),e.checkedOutRef?[(n=e.checkedOutRef.branchName)!=null?n:"",e.checkedOutRef.headSha,(i=e.checkedOutRef.parentSha)!=null?i:"",e.checkedOutRef.hasUncommittedChanges?"1":"0"].join(":"):"__none__",Object.entries(e.unpushedCommitShasByBranch).map(([a,c])=>`${a}:${c.join(",")}`).join("|"),Object.entries(e.branchCommitPreviews).map(([a,c])=>`${a}:${c.map(u=>u.fullSha).join(",")}`).join("|"),Object.entries(e.branchParentByName).map(([a,c])=>`${a}:${c!=null?c:""}`).join("|"),Object.entries(e.laneByBranch).map(([a,c])=>`${a}:${c}`).join("|"),Object.entries(e.branchUniqueAheadCounts).map(([a,c])=>`${a}:${c}`).join("|")].join("@@")}function Cm(e){var n,i;return(i=(n=e==null?void 0:e.payload)==null?void 0:n.repoVisualSnapshot)!=null?i:null}function I3(){var go,Bo,ca;const[e,n]=_.useState(null),[i,a]=_.useState(""),[c,u]=_.useState([]),[d,h]=_.useState({}),[p,y]=_.useState(!1),[g,x]=_.useState([]),[w,C]=_.useState([]),[j,A]=_.useState([]),[T,R]=_.useState([]),[P,L]=_.useState({}),[D,F]=_.useState("main"),[Y,V]=_.useState(null),[X,le]=_.useState([]),[ue,pe]=_.useState(!1),[Ne,Fe]=_.useState(""),[ne,de]=_.useState(0),[O,se]=_.useState(1),[I,fe]=_.useState({}),[xe,z]=_.useState({}),[ae,Q]=_.useState(null),[be,Me]=_.useState(null),[me,Le]=_.useState(null),[Ze,Ve]=_.useState(!1),[ht,Tt]=_.useState(!1),[Ct,lt]=_.useState(0),[$t,pt]=_.useState(!1),[qt,Kt]=_.useState("loading"),[K,De]=_.useState(null),[ct,at]=_.useState(null),[_t,Ie]=_.useState(!1),[xt,gt]=_.useState(null),[kt,Xe]=_.useState(null),[ot,U]=_.useState(!1),[J,we]=_.useState(!1),[je,tt]=_.useState(!1),[Ue,Ae]=_.useState(!1),[ye,st]=_.useState({}),[We,nt]=_.useState({}),[Re,Je]=_.useState({}),[bt,vt]=_.useState({}),[Ke,Rt]=_.useState({}),[wt,mt]=_.useState([]),[rn,ft]=_.useState([]),[Ht,dn]=_.useState(!1),[Ot,St]=_.useState(!1),[fn,ls]=_.useState(!1),[Qt,pn]=_.useState(!1),Jt=Ot||fn||Ht||je||Ue||J||ue||Qt,[zt,tn]=_.useState(!1),[Ge,$n]=_.useState("horizontal"),[In]=_.useState(null),[Ds]=_.useState(null),[Vn]=_.useState(null),[bo]=_.useState(!1),[Is,lo]=_.useState(!1),[Ps,Zt]=_.useState(px),[jn,yn]=_.useState(!1),Hs=_.useRef(null),Rn=_.useRef(0),hs=_.useRef(0),en=_.useRef(0),es=_.useRef({}),vo=_.useRef(null),ws=_.useRef({}),Ks=_.useRef({}),Rs=_.useRef(!1),qn=_.useRef(null),gs=_.useRef(px),Mn=_.useRef(null),Uo=_.useRef(null),Si=_.useRef(!1),Eo=_.useRef(!1);_.useRef(!1);const Ii=_.useRef(new Set),[Qs,Us]=_.useState(!1),Cs=_.useRef([]),Kn=_.useRef([]),wn=_.useRef(null),Vs=_.useRef([]),xn=_.useRef([]),ms=_.useRef([]),Ci=_.useRef({}),Vo=_.useRef([]),ci=_.useRef({}),Pt=_.useRef(new Map),Ys=_.useRef(new Set),ks=_.useRef(null),[ki,co]=_.useState(null),[Ko,ps]=_.useState(null),Ws=e!=null?e:"__no-repo__",Zs=(b,v)=>{try{const k={opened:Object.fromEntries(Object.entries(b).map(([M,N])=>[M,Array.from(N)])),closed:Object.fromEntries(Object.entries(v).map(([M,N])=>[M,Array.from(N)]))};window.localStorage.setItem(mx,JSON.stringify(k))}catch{}};_.useEffect(()=>{var b,v;try{const k=window.localStorage.getItem(mx);if(!k)return;const M=JSON.parse(k);if(!M||typeof M!="object")return;const N={},H={},oe=M;for(const[he,Te]of Object.entries((b=oe.opened)!=null?b:{}))Array.isArray(Te)&&(N[he]=new Set(Te.filter(et=>typeof et=="string")));for(const[he,Te]of Object.entries((v=oe.closed)!=null?v:{}))Array.isArray(Te)&&(H[he]=new Set(Te.filter(et=>typeof et=="string")));fe(N),z(H)}catch{}},[]),_.useEffect(()=>{Zs(I,xe)},[xe,I]);const bn=_.useMemo(()=>{var b;return(b=I[Ws])!=null?b:new Set},[Ws,I]),js=_.useMemo(()=>{var b;return(b=xe[Ws])!=null?b:new Set},[Ws,xe]),Js=_.useCallback(b=>{fe(v=>{var H;const k=(H=v[Ws])!=null?H:new Set,M=typeof b=="function"?b(k):b,N={...v,[Ws]:new Set(M)};return Zs(N,xe),N})},[Ws,xe]),Ms=_.useCallback(b=>{z(v=>{var H;const k=(H=v[Ws])!=null?H:new Set,M=typeof b=="function"?b(k):b,N={...v,[Ws]:new Set(M)};return Zs(I,N),N})},[Ws,I]),Fs=_.useMemo(()=>c.map(b=>{var M,N,H,oe,he,Te,et,ut,q,Z,ie,ee,Ee,qe,it;const v=(()=>{if(!e)return!1;const dt=Go(b.path).toLowerCase(),Bt=Go(e).toLowerCase();return dt===Bt})(),k=(M=d[b.path])!=null?M:{};return{...b,...k,branches:(N=k.branches)!=null?N:[],mergeNodes:(H=k.mergeNodes)!=null?H:[],directCommits:(oe=k.directCommits)!=null?oe:[],unpushedDirectCommits:(he=k.unpushedDirectCommits)!=null?he:[],unpushedCommitShasByBranch:(Te=k.unpushedCommitShasByBranch)!=null?Te:{},checkedOutRef:v?Y:(et=k.checkedOutRef)!=null?et:null,worktrees:(ut=k.worktrees)!=null?ut:[],stashes:(q=k.stashes)!=null?q:[],branchCommitPreviews:(Z=k.branchCommitPreviews)!=null?Z:{},laneByBranch:(ie=k.laneByBranch)!=null?ie:{},branchUniqueAheadCounts:(ee=k.branchUniqueAheadCounts)!=null?ee:{},defaultBranch:(qe=(Ee=k.defaultBranch)!=null?Ee:b.branchName)!=null?qe:"main",treeLoaded:(it=k.loaded)!=null?it:!1}}),[c,d,e,Y]),_n=_.useMemo(()=>({githubAuthStatus:ct,githubAuthLoading:_t,onGitHubAuthSetup:Ei,gridSearchQuery:Ne,setGridSearchQuery:Fe,gridSearchResultCount:ae,gridSearchResultIndex:be,setGridSearchJumpDirection:se,setGridSearchJumpToken:de,mapGridOrientation:Ge,setMapGridOrientation:$n,setIsGridDebugOpen:lo,githubAuthMessage:xt,commitSwitchFeedback:kt,isCommitSwitchFeedbackVisible:ot}),[kt,_t,xt,ct,Ne,ae,be,Ei,ot,Ge,Fe,se,de,lo,$n]);function Es(b,v){const k=yx(v);return es.current[b]===k?!1:(es.current={...es.current,[b]:k},h(N=>N[b]===v?N:{...N,[b]:v}),!0)}function eo(b){var v;return[b.repoPath,b.defaultBranch,b.headSha,(v=b.upstreamSha)!=null?v:"",b.hasUncommittedChanges?"1":"0",b.branchCount,b.worktreeCount,b.stashCount].join("|")}function Yo(b){var v;return[b.repoPath,b.headSha,(v=b.upstreamSha)!=null?v:"",b.hasUncommittedChanges?"1":"0"].join("|")}function Ts(b,v){var k,M,N,H,oe,he;return{repoPath:b,headSha:(M=(k=v.checkedOutRef)==null?void 0:k.headSha)!=null?M:"",upstreamSha:(H=(N=v.checkedOutRef)==null?void 0:N.parentSha)!=null?H:null,hasUncommittedChanges:(he=(oe=v.checkedOutRef)==null?void 0:oe.hasUncommittedChanges)!=null?he:!1}}function ji(b,v,k){var M,N,H,oe,he,Te;return{repoPath:b,defaultBranch:v,headSha:(N=(M=k.checkedOutRef)==null?void 0:M.headSha)!=null?N:"",upstreamSha:(oe=(H=k.checkedOutRef)==null?void 0:H.parentSha)!=null?oe:null,hasUncommittedChanges:(Te=(he=k.checkedOutRef)==null?void 0:he.hasUncommittedChanges)!=null?Te:!1,branchCount:k.branches.length,worktreeCount:k.worktrees.length,stashCount:k.stashes.length}}_.useEffect(()=>{try{const b=localStorage.getItem(dd);if(!b)return;const v=JSON.parse(b);if(!Array.isArray(v))return;const k=v.filter(M=>typeof M=="object"&&M!==null&&typeof M.path=="string"&&typeof M.name=="string"&&typeof M.lastOpenedAt=="number");u(k.slice(0,fd))}catch{u([])}},[]),_.useEffect(()=>{try{const b=window.localStorage.getItem(ux);(b==="vertical"||b==="horizontal")&&$n(b)}catch{}},[]),_.useEffect(()=>{var k;if(Eo.current||e||c.length===0||!Qs)return;const b=(()=>{try{return window.localStorage.getItem(wm)}catch{return null}})(),v=b?c.find(M=>Go(M.path).toLowerCase()===Go(b).toLowerCase()):null;Eo.current=!0,Jo((k=v==null?void 0:v.path)!=null?k:c[0].path)},[Qs,c,e]),_.useEffect(()=>{if(e)try{window.localStorage.setItem(wm,e)}catch{}},[e]),_.useEffect(()=>{try{window.localStorage.setItem(ux,Ge)}catch{}},[Ge]);const Qo=_.useMemo(()=>w.reduce((b,v)=>(b[v.targetCommitSha]=v.targetBranch,b),{}),[w]);_.useEffect(()=>{e&&(Rs.current||h(b=>{var v,k,M,N;return{...b,[e]:{path:e,name:i||Sm(e),branches:g,mergeNodes:w,directCommits:j,unpushedDirectCommits:T,mergeTargetBranchByCommitSha:w.reduce((H,oe)=>(H[oe.targetCommitSha]=oe.targetBranch,H),{}),unpushedCommitShasByBranch:P,checkedOutRef:Y,worktrees:X,stashes:wt,branchCommitPreviews:We,branchParentByName:Re,laneByBranch:bt,branchUniqueAheadCounts:Ke,defaultBranch:D,loaded:!0,cacheSchemaVersion:(k=(v=b[e])==null?void 0:v.cacheSchemaVersion)!=null?k:1,updatedAtMs:(N=(M=b[e])==null?void 0:M.updatedAtMs)!=null?N:Date.now()}}}))},[e,i,g,w,j,T,Qo,P,Y,X,wt,We,Re,bt,Ke,D]);async function To(b,v=!1){var M;const k=Go(b);if(k&&!Ii.current.has(k)&&!(!v&&((M=d[k])!=null&&M.loaded))){Ii.current.add(k),k===e&&y(!0);try{let N=null;v?N=await Se("add_project_and_ingest",{repoPath:k}):(N=await Se("load_project_snapshot",{projectId:k}),N||(N=await Se("add_project_and_ingest",{repoPath:k})));const H=Cm(N);if(!H)throw new Error("Missing repo visual snapshot payload");Es(k,H)}finally{Ii.current.delete(k),k===e&&Ii.current.size===0&&y(!1)}}}_.useEffect(()=>{if(c.length===0){Us(!0);return}let b=!1;const v=!1;return(async()=>{try{await Promise.all(c.map(async k=>{await To(k.path,v),await Se("watch_repo",{repoPath:k.path}).catch(console.error)}))}catch(k){console.error("Failed to preload project snapshots:",k)}b||(Us(!0),y(!1))})(),()=>{b=!0}},[c]),_.useEffect(()=>{let b=!1,v=null;return zc("git-activity",k=>{if(b)return;const M=Go(k.payload.repoPath);!M||M===e||To(M,!1)}).then(k=>{b?k():v=k}).catch(console.error),()=>{b=!0,v&&v()}},[e]),_.useEffect(()=>{if(ht||Rs.current||c.length===0)return;let b=!1;return(async()=>{var v,k;for(const M of c){const N=Go(M.path),H=d[N];if(!(H!=null&&H.loaded))continue;const oe=(v=I[N])!=null?v:new Set,he=(k=xe[N])!=null?k:new Set,Te=hd(N,Ge,oe,he);if(Pt.current.has(Te))continue;const et=await Se("get_repo_layout_snapshot",{repoPath:N,layoutKey:Te}).catch(()=>null);if(b)return;if(et)try{const ie=JSON.parse(et),ee=vm(ie);Pt.current.set(Te,ee),Ys.current.add(Te);continue}catch{}const q=hp({branches:H.branches,mergeNodes:H.mergeNodes,directCommits:H.directCommits,unpushedDirectCommits:H.unpushedDirectCommits,defaultBranch:H.defaultBranch,branchCommitPreviews:H.branchCommitPreviews,branchParentByName:H.branchParentByName,branchUniqueAheadCounts:H.branchUniqueAheadCounts,checkedOutRef:H.checkedOutRef,stashes:H.stashes,manuallyOpenedClumps:oe,manuallyClosedClumps:he,gridSearchQuery:"",gridFocusSha:null,orientation:Ge}).sharedGridLayoutModel;Pt.current.set(Te,q),Ys.current.add(Te);const Z=JSON.stringify(bm(q));if(Se("store_repo_layout_snapshot",{repoPath:N,layoutKey:Te,payloadJson:Z}).catch(()=>{Ys.current.delete(Te)}),await ts(),b)return}})(),()=>{b=!0}},[c,d,Ge,I,xe,ht]);function uo(b){u(v=>{const k=Go(b.path);if(!k)return v;const M={...b,path:k},H=(v.some(oe=>oe.path===k)?v.map(oe=>oe.path===k?M:oe):[...v,M]).slice(-fd);try{localStorage.setItem(dd,JSON.stringify(H))}catch{}return H})}function Zo(b){u(v=>{const k=new Map(v.map(N=>[N.path,N])),M=[];for(const N of b){const H=k.get(N);H&&(M.push(H),k.delete(N))}for(const N of v)k.has(N.path)&&M.push(N);try{localStorage.setItem(dd,JSON.stringify(M.slice(0,fd)))}catch{}return M.slice(0,fd)})}async function ui(b){const v=Go(b);if(v){De(null);try{const[k,M]=await Promise.all([Se("get_repo_info",{repoPath:v}),Se("get_default_branch",{repoPath:v}).catch(()=>"main")]);uo({path:v,name:k.name,lastOpenedAt:Date.now(),branchName:M}),await To(v,!1)}catch(k){De(k instanceof Error?k.message:String(k))}}}function cs(b){var k,M;const v=Go(b);if(v){u(N=>{const H=N.filter(oe=>oe.path!==v);try{localStorage.setItem(dd,JSON.stringify(H))}catch{}return H});try{e&&Go(e).toLowerCase()===v.toLowerCase()&&window.localStorage.removeItem(wm)}catch{}if(h(N=>{if(!(v in N))return N;const H={...N};return delete H[v],H}),e===v){const N=(M=(k=c.find(H=>H.path!==v))==null?void 0:k.path)!=null?M:null;N?Jo(N):(n(null),a(""),x([]),C([]),A([]),R([]),L({}),V(null),le([]),mt([]),nt({}),Je({}),vt({}),Rt({}))}}}async function fo(b){const v=Go(b);if(v)try{await Se("reveal_in_finder",{path:v})}catch(k){De(k instanceof Error?k.message:String(k))}}const Wo=()=>{(async()=>{var b,v;try{const k=await lw({directory:!0,multiple:!1,defaultPath:(v=(b=c[0])==null?void 0:b.path)!=null?v:void 0});typeof k=="string"&&k&&await ui(k)}catch(k){De(k instanceof Error?k.message:String(k))}})()};async function As(b,v){const M=[];let N=0;for(;;){const H=await Se("get_merge_nodes",{repoPath:b,branch:v,page:N,perPage:100});if(M.push(...H.nodes),!H.hasMore||H.nodes.length===0)break;N+=1}return M}async function ho(b,v,k){const M=Array.from(new Set([k,...v.map(oe=>oe.name)].filter(oe=>!!oe)));if(M.length===0)return[];const N=await Promise.all(M.map(oe=>As(b,oe).catch(()=>[]))),H=new Map;for(const oe of N)for(const he of oe){const Te=`${he.targetCommitSha}:${he.targetBranch}`;H.has(Te)||H.set(Te,he)}return Array.from(H.values())}async function Ao(b,v,k){var qe,it,dt,Bt;const M=v!=null?v:D,N=(qe=k==null?void 0:k.includeMergeNodes)!=null?qe:!0,H=(it=k==null?void 0:k.includeUnpushedShaMap)!=null?it:!0,oe=(dt=k==null?void 0:k.includeWorktrees)!=null?dt:!0,he=(Bt=k==null?void 0:k.includeStashes)!=null?Bt:!0,[Te,et,ut,q,Z,ie]=await Promise.all([Se("get_branches",{repoPath:b}),Se("get_all_repo_commits",{repoPath:b}),Se("get_unpushed_direct_commits",{repoPath:b,branch:M}).catch(()=>[]),Se("get_checked_out_ref",{repoPath:b}).catch(()=>null),oe?Se("list_worktrees",{repoPath:b}).catch(()=>[]):Promise.resolve(X),he?Se("list_stashes",{repoPath:b}).catch(()=>[]):Promise.resolve(wt)]),ee=N?await ho(b,Te,M):w,Ee=H?await Promise.all([M,...Te.map(yt=>yt.name)].map(async yt=>{const jt=await Se("get_branch_unpushed_commit_shas",{repoPath:b,branch:yt}).catch(()=>[]);return[yt,jt]})):Object.entries(P);_.startTransition(()=>{x(Te),C(ee),A(et),R(ut),L(Object.fromEntries(Ee)),V(q),le(Z),mt(ie)})}async function Ln(b,v){await Ao(b,v,{includeMergeNodes:!1,includeUnpushedShaMap:!0,includeWorktrees:!1,includeStashes:!1})}async function Xn(b,v){const k=D,[M,N]=await Promise.all([Se("get_branches",{repoPath:b}),Se("get_checked_out_ref",{repoPath:b}).catch(()=>null)]),H=await Promise.all([k,...M.map(oe=>oe.name)].map(async oe=>{const he=await Se("get_branch_unpushed_commit_shas",{repoPath:b,branch:oe}).catch(()=>[]);return[oe,he]}));_.startTransition(()=>{x(M),L(Object.fromEntries(H)),V(N)})}async function ts(){await new Promise(b=>{window.requestAnimationFrame(()=>b())})}function No(){const b=hs.current+1;return hs.current=b,lt(b),pt(!1),Kt("loading"),b}function Sn(b,v="ready"){b===hs.current&&(Tt(!1),Rs.current=!1,Kt(v))}async function di(b){const v=No();let k=!1;Xe(null),Tt(!0),Rs.current=!0;try{const[M,N]=await Promise.all([Se("get_repo_info",{repoPath:b}),Se("get_default_branch",{repoPath:b})]);a(M.name),F(N),n(b),await Ao(b,N),ei(b),Xe({kind:"success",message:`Now targeting worktree at ${b}`})}catch(M){k=!0;const N=M instanceof Error?M.message:String(M);Xe({kind:"error",message:N}),console.error("Failed to switch worktree:",N)}finally{Sn(v,k?"error":"ready")}}async function Ns(b,v){if(!(!e||ue)){pe(!0),Xe(null);try{await Se("remove_worktree",{repoPath:e,worktreePath:b,force:v}),await Ln(e),Xe({kind:"success",message:`Removed worktree at ${b}`})}catch(k){const M=k instanceof Error?k.message:String(k);Xe({kind:"error",message:M}),console.error("Failed to remove worktree:",M)}finally{pe(!1)}}}function mo(b,v){var M,N,H;const k=yx(v);return vo.current===k?!1:(Cs.current=v.branches,Kn.current=v.directCommits,wn.current=v.checkedOutRef,Vs.current=v.unpushedDirectCommits,xn.current=v.worktrees,ms.current=v.stashes,Ci.current=v.unpushedCommitShasByBranch,Vo.current=v.mergeNodes,ci.current=(M=v.branchParentByName)!=null?M:{},vo.current=k,a(v.name||Sm(b)),F(v.defaultBranch||"main"),x(v.branches),C(v.mergeNodes),A(v.directCommits),R(v.unpushedDirectCommits),L(v.unpushedCommitShasByBranch),V(v.checkedOutRef),le(v.worktrees),mt(v.stashes),nt(v.branchCommitPreviews),Je((N=v.branchParentByName)!=null?N:{}),vt((H=v.laneByBranch)!=null?H:{}),Rt(v.branchUniqueAheadCounts),n(b),!0)}async function Mi(b,v,k,M){const N=hd(b,Ge,k,M),H=Pt.current.get(N);if(H)return{layoutKey:N,model:H};const oe=await Se("get_repo_layout_snapshot",{repoPath:b,layoutKey:N}).catch(()=>null);if(oe)try{const et=JSON.parse(oe),ut=vm(et);return Pt.current.set(N,ut),Ys.current.add(N),{layoutKey:N,model:ut}}catch{}const he=hp({branches:v.branches,mergeNodes:v.mergeNodes,directCommits:v.directCommits,unpushedDirectCommits:v.unpushedDirectCommits,defaultBranch:v.defaultBranch,branchCommitPreviews:v.branchCommitPreviews,branchParentByName:v.branchParentByName,branchUniqueAheadCounts:v.branchUniqueAheadCounts,checkedOutRef:v.checkedOutRef,stashes:v.stashes,manuallyOpenedClumps:k,manuallyClosedClumps:M,gridSearchQuery:"",gridFocusSha:null,orientation:Ge}).sharedGridLayoutModel;Pt.current.set(N,he),Ys.current.add(N);const Te=JSON.stringify(bm(he));return Se("store_repo_layout_snapshot",{repoPath:b,layoutKey:N,payloadJson:Te}).catch(()=>{Ys.current.delete(N)}),{layoutKey:N,model:he}}async function Jo(b){var ut,q;const v=++Rn.current,k=No();let M=!1;const N=Go(b);if(!N)return;e&&sn&&Pt.current.set(sn,Ut);const H=(ut=I[N])!=null?ut:new Set,oe=(q=xe[N])!=null?q:new Set,he=hd(N,Ge,H,oe),Te=Pt.current.get(he);if(Te?(co(Te),ps(he)):(co(null),ps(null)),Rs.current=!0,Tt(!0),Ve(!0),De(null),await ts(),v!==Rn.current)return;const et=d[N];if(et!=null&&et.loaded){Ks.current={...Ks.current,[N]:Yo(Ts(N,et))};const Z=await Mi(N,et,H,oe);if(v!==Rn.current||(co(Z.model),ps(Z.layoutKey),mo(N,et),uo({path:N,name:et.name||Sm(N),lastOpenedAt:Date.now(),branchName:et.defaultBranch}),await ts(),await ts(),v!==Rn.current))return;Sn(k,"ready"),Ve(!1),ei(N);return}if(await new Promise(Z=>setTimeout(Z,15)),v===Rn.current)try{const[Z,ie]=await Promise.all([Se("get_repo_info",{repoPath:N}),Se("get_default_branch",{repoPath:N})]);if(v!==Rn.current)return;a(Z.name),F(ie);const ee=await Se("add_project_and_ingest",{repoPath:N}),Ee=Cm(ee);if(!Ee)throw new Error("Missing repo visual snapshot payload");if(v!==Rn.current)return;const qe=await Mi(N,Ee,H,oe);if(v!==Rn.current||(co(qe.model),ps(qe.layoutKey),Es(N,Ee),ws.current={...ws.current,[N]:eo(ji(N,ie,Ee))},Ks.current={...Ks.current,[N]:Yo(Ts(N,Ee))},mo(N,Ee),uo({path:N,name:Z.name,lastOpenedAt:Date.now(),branchName:ie}),await ts(),await ts(),v!==Rn.current))return;Sn(k,"ready"),Ve(!1),ei(N)}catch(Z){if(M=!0,v!==Rn.current)return;console.error("Failed to load repo:",Z),De(Z instanceof Error?Z.message:String(Z)),n(null),Ve(!1)}finally{if(v!==Rn.current)return;Sn(k,M?"error":"ready")}}async function ei(b){const v=++en.current;try{if(v!==en.current)return;gt(null);const k=await Se("get_github_info",{repoPath:b}),M=await Se("get_github_auth_status");if(v!==en.current||(at(M),!M.ghAvailable||!M.authenticated))return;const N=await Se("get_open_prs",{owner:k.owner,repo:k.repo});if(v!==en.current)return;ft(N)}catch(k){if(v!==en.current)return;console.log("GitHub data not available:",k),gt(k instanceof Error?k.message:String(k))}}_.useEffect(()=>{let b=null,v=!1;const k=(()=>{try{return Sp().label}catch{return null}})(),M=async H=>{var he;const oe=(he=H==null?void 0:H.path)==null?void 0:he.trim();!oe||v||e!==oe&&await Jo(oe)};return(async()=>{k==="main"&&(b=await zc("gitviz://open-repo",async oe=>{await M(oe.payload)}));const H=await Se("take_pending_open_repo");await M(H)})(),()=>{v=!0,b&&b()}},[e]),_.useEffect(()=>{Cs.current=g},[g]),_.useEffect(()=>{Kn.current=j},[j]),_.useEffect(()=>{wn.current=Y},[Y]),_.useEffect(()=>{Vs.current=T},[T]),_.useEffect(()=>{xn.current=X},[X]),_.useEffect(()=>{ms.current=wt},[wt]),_.useEffect(()=>{Ci.current=P},[P]),_.useEffect(()=>{Vo.current=w},[w]),_.useEffect(()=>{ci.current=Re},[Re]),_.useEffect(()=>{Si.current=zt},[zt]),_.useEffect(()=>{if(!e||!D)return;Se("watch_repo",{repoPath:e}).catch(console.error);let b=!1,v=!1,k=null,M=null;const N=async()=>{var he;if(!(b||v||Si.current)){v=!0;try{const Te=await Se("refresh_project_if_changed",{projectId:e});if(!Te.updated)return;const et=Cm((he=Te.snapshot)!=null?he:null);if(!et)return;Es(e,et),Go(e)===Go(et.path)&&mo(e,et)}catch(Te){console.warn("Background project refresh failed:",Te)}finally{v=!1}}},H=()=>{if(b)return;k!=null&&window.clearTimeout(k);const Te=document.visibilityState!=="visible"?9e4:3e4;k=window.setTimeout(()=>{N(),H()},Te)};zc("git-activity",he=>{Go(he.payload.repoPath)===e&&N()}).then(he=>{b?he():M=he}).catch(console.error);const oe=window.setTimeout(()=>{N()},250);return H(),()=>{b=!0,window.clearTimeout(oe),k!=null&&window.clearTimeout(k),M&&M()}},[e,D]);async function Ei(){if(e){Ie(!0),gt(null);try{await Se("authenticate_github");const b=await Se("get_github_auth_status");at(b),b.authenticated?await ei(e):b.message&&gt(b.message)}catch(b){gt(b instanceof Error?b.message:String(b))}finally{Ie(!1)}}}_.useEffect(()=>{st({}),Uo.current=null,Ie(!1),at(null),gt(null),ft([]),Xe(null)},[e]),_.useEffect(()=>{var Te,et,ut,q;if(!e||!D){st({}),nt({}),Je({}),vt({}),Rt({}),Uo.current=null;return}const b=g.map(Z=>{var ie;return`${Z.name}:${Z.headSha}:${(ie=Z.parentBranch)!=null?ie:""}:${Z.commitsAhead}`}).join("|"),v=w.map(Z=>{var ie,ee;return`${Z.fullSha}:${(ee=(ie=Z.parentShas)==null?void 0:ie[1])!=null?ee:""}`}).join("|"),k=`${e}|${D}|${b}|${v}`;if(Uo.current===k)return;Uo.current=k;const M={},N={};for(const Z of g){if(Z.name===D)continue;const ie=j.filter(ee=>ee.branch===Z.name).map(ee=>{var Ee;return{fullSha:ee.fullSha,sha:ee.sha,parentSha:(Ee=ee.parentSha)!=null?Ee:null,message:ee.message,author:ee.author,date:ee.date,kind:"commit"}});M[Z.name]=ie,N[Z.name]=ie.length}const H=new Map;for(const Z of j)H.set(Z.fullSha,Z.branch);const oe=Z=>{if(!Z)return null;const ie=H.get(Z);if(ie)return ie;for(const[ee,Ee]of H.entries())if(ee.startsWith(Z)||Z.startsWith(ee))return Ee;return null},he={[D]:null};for(const Z of g){if(Z.name===D){he[Z.name]=null;continue}const ie=j.filter(it=>it.branch===Z.name),ee=new Set(ie.map(it=>it.fullSha)),Ee=(et=(Te=ie.filter(it=>{var Bt;const dt=(Bt=it.parentSha)!=null?Bt:null;return!dt||!ee.has(dt)}).sort((it,dt)=>{const Bt=new Date(it.date).getTime()-new Date(dt.date).getTime();return Bt!==0?Bt:it.fullSha.localeCompare(dt.fullSha)})[0])==null?void 0:Te.parentSha)!=null?et:null,qe=oe(Ee);he[Z.name]=(q=(ut=qe!=null?qe:ci.current[Z.name])!=null?ut:Z.parentBranch)!=null?q:null}st({}),nt(M),Je(he),vt(Z=>{const ie={};for(const ee of g){const Ee=Z[ee.name];Ee!=null&&Number.isFinite(Ee)&&(ie[ee.name]=Ee)}return ie}),Rt(N)},[e,D,g,w,j]),_.useEffect(()=>{if(!kt){U(!1);return}U(!0);const b=window.setTimeout(()=>{U(!1)},dx),v=window.setTimeout(()=>{Xe(null)},dx+z3);return()=>{window.clearTimeout(b),window.clearTimeout(v)}},[kt]),_.useEffect(()=>{if(!e||g.length===0)return;const b=M=>new Promise(N=>setTimeout(N,M));async function v(){const N=`${await Se("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${N}`),await b(800),await Se("screenshot",{path:`${N}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${N}`)}const k=M=>{if((M.metaKey||M.ctrlKey)&&!M.shiftKey&&!M.altKey&&M.key.toLowerCase()==="b"){M.preventDefault(),yn(N=>!N);return}(M.metaKey||M.ctrlKey)&&M.shiftKey&&M.key==="S"&&(M.preventDefault(),v())};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[e,i,g]);async function ti(b){if(!e)return;Xe(null);const v=/^STASH:(\d+)$/.exec(b.commitSha);if(v){try{const k=parseInt(v[1],10),M=await Se("apply_stash_restore",{repoPath:e,stashIndex:k});V(M),await Ln(e);const N=`Stash ${k+1}`,H=M.branchName?` on branch ${M.branchName}`:" at the stash base (detached HEAD)";Xe({kind:"success",message:`Restored ${N}${H}; stash applied and dropped (uncommitted changes).`})}catch(k){const M=k instanceof Error?k.message:String(k);Xe({kind:"error",message:M}),console.error("Failed to apply stash:",M)}return}if(b.branchName){const k=(N,H)=>{const oe=N.replace(/\\/g,"/").replace(/\/+$/,""),he=H.replace(/\\/g,"/").replace(/\/+$/,"");return oe===he||oe.toLowerCase()===he.toLowerCase()},M=X.find(N=>N.pathExists===!1||N.isCurrent||e&&k(N.path,e)?!1:N.branchName===b.branchName);if(M){await di(M.path);return}}try{let k="";(await Se("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges&&(await Se("stash_push",{repoPath:e,includeUntracked:!0}),k="Stashed local changes (including untracked), then ",await Ln(e));const N=b.branchName?await Se("checkout_branch",{repoPath:e,branchName:b.branchName}):await Se("checkout_ref",{repoPath:e,refName:b.commitSha}),H=await Se("get_checked_out_ref",{repoPath:e}).catch(()=>N);V(H),await Ln(e);const oe=H.branchName?H.branchName:`${H.headSha.slice(0,7)} (detached)`;Xe({kind:"success",message:`${k}Checked out ${oe}`})}catch(k){const M=k instanceof Error?k.message:String(k);Xe({kind:"error",message:M}),console.error("Failed to checkout commit:",M)}}async function Et(){if(!(!e||Ht)){Xe(null),dn(!0);try{if(!(await Se("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges){Xe({kind:"error",message:"No local changes to stash."});return}await Se("stash_push",{repoPath:e,includeUntracked:!0}),await ts(),await Ln(e),Xe({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(b){const v=b instanceof Error?b.message:String(b);Xe({kind:"error",message:v}),console.error("Failed to stash:",v)}finally{dn(!1)}}}async function to(b){if(!e||Ot)return!1;const v=b.trim();if(!v)return Xe({kind:"error",message:"Enter a commit message."}),!1;Xe(null),St(!0);try{if(!(await Se("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges)return Xe({kind:"error",message:"No local changes to commit."}),!1;const M=await Se("commit_working_tree",{repoPath:e,message:v});return V(M),await ts(),await Ln(e),Xe({kind:"success",message:"Committed local changes."}),!0}catch(k){const M=k instanceof Error?k.message:String(k);return Xe({kind:"error",message:M}),console.error("Failed to commit:",M),!1}finally{St(!1)}}async function Ji(){if(!e||fn)return!1;Xe(null),ls(!0);try{if(!(await Se("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges)return Xe({kind:"error",message:"No local changes to stage."}),!1;const v=await Se("stage_working_tree",{repoPath:e});return V(v),await ts(),await Ln(e),Xe({kind:"success",message:"Staged all changes."}),!0}catch(b){const v=b instanceof Error?b.message:String(b);return Xe({kind:"error",message:v}),console.error("Failed to stage:",v),!1}finally{ls(!1)}}async function Pi(b,v){if(!(!e||Qt)){pn(!0),Xe(null);try{const k=/^STASH:(\d+)$/.exec(b);let M;if(k){const N=parseInt(k[1],10);M=await Se("move_stash_to_new_branch",{repoPath:e,stashIndex:N,branchName:v})}else M=await Se("create_branch_from_uncommitted",{repoPath:e,branchName:v});V(M),await Ln(e),Xe({kind:"success",message:`Moved to new branch "${v}"`})}catch(k){const M=k instanceof Error?k.message:String(k);Xe({kind:"error",message:M}),console.error("Failed to create branch from node:",M)}finally{pn(!1)}}}async function Hi(b){if(!(!e||Qt)){pn(!0),Xe(null);try{const v=await Se("create_root_branch",{repoPath:e,branchName:b});V(v),await Ln(e),Xe({kind:"success",message:`Created new root branch "${b}"`})}catch(v){const k=v instanceof Error?v.message:String(v);Xe({kind:"error",message:k}),console.error("Failed to create root branch:",k)}finally{pn(!1)}}}async function wo(b,v){if(!e)return;const k=Array.from(new Set(b.filter(M=>!!M&&M!==v)));if(k.length!==0){Xe(null),we(!0);try{let M=null;for(const N of k)M=await Se("merge_ref_into_branch",{repoPath:e,sourceRef:N,targetBranch:v});await Ln(e),M&&V(M),Xe({kind:"success",message:k.length===1?`Merged ${k[0].slice(0,7)} into ${v}`:`Merged ${k.length} commits into ${v}`})}catch(M){const N=M instanceof Error?M.message:String(M);Xe({kind:"error",message:N}),console.error("Failed to merge refs into branch:",N)}finally{we(!1)}}}async function Do(){if(!(!e||je)){Xe(null),tt(!0);try{let b=[];try{b=await Se("push_all_unpushed_branches",{repoPath:e})}catch(v){const k=v instanceof Error?v.message:String(v);if(!/non-fast-forward|fetch first|rejected/i.test(k))throw v;const N=Y==null?void 0:Y.branchName;if(!N)throw v;const H=window.confirm(`Push all hit non-fast-forward.

OK: pull --rebase then retry
Cancel: pull --no-rebase then retry`);await Se("pull_branch_with_strategy",{repoPath:e,branchName:N,rebase:H}),b=await Se("push_all_unpushed_branches",{repoPath:e})}await ts(),await Xn(e),Xe({kind:"success",message:b.length>0?b.length===1?`Pushed ${b[0].branchName}`:`Pushed ${b.length} branches`:"Everything local is already pushed."})}catch(b){const v=b instanceof Error?b.message:String(b);Xe({kind:"error",message:v}),console.error("Failed to push all branches:",v)}finally{tt(!1)}}}async function So(){if(!(!e||je)){Xe(null),tt(!0);try{const b=await Se("push_current_branch",{repoPath:e});await ts(),await Xn(e),Xe({kind:"success",message:`Pushed ${b.branchName}`})}catch(b){const v=b instanceof Error?b.message:String(b);if(/non-fast-forward|fetch first|rejected/i.test(v)){const M=window.confirm(`Push was rejected (non-fast-forward).

OK: pull --rebase then retry push
Cancel: pull --no-rebase then retry push`);try{const N=Y==null?void 0:Y.branchName;if(!N)throw new Error("Cannot resolve current branch for pull.");await Se("pull_branch_with_strategy",{repoPath:e,branchName:N,rebase:M});const H=await Se("push_current_branch",{repoPath:e});await ts(),await Xn(e),Xe({kind:"success",message:`Pulled (${M?"rebase":"merge"}) and pushed ${H.branchName}`});return}catch(N){const H=N instanceof Error?N.message:String(N);Xe({kind:"error",message:H}),console.error("Failed to resolve non-fast-forward:",H);return}}Xe({kind:"error",message:v}),console.error("Failed to push current branch:",v)}finally{tt(!1)}}}async function fi(b){var k;if(!e||je)return;const v=Array.from(new Map(b.filter(M=>M.branchName&&M.targetSha).map(M=>[M.branchName,M])).values());if(v.length!==0){Xe(null),tt(!0);try{for(const M of v)try{await Se("push_branch",{repoPath:e,branchName:M.branchName,targetSha:M.targetSha})}catch(N){const H=N instanceof Error?N.message:String(N);if(!/non-fast-forward|fetch first|rejected/i.test(H))throw N;const he=window.confirm(`Push rejected for ${M.branchName} (non-fast-forward).

OK: pull --rebase then retry
Cancel: pull --no-rebase then retry`);await Se("pull_branch_with_strategy",{repoPath:e,branchName:M.branchName,rebase:he}),await Se("push_branch",{repoPath:e,branchName:M.branchName,targetSha:M.targetSha})}await Ln(e),Xe({kind:"success",message:v.length===1?`Pushed ${v[0].branchName} through ${(k=v[0].targetSha)==null?void 0:k.slice(0,7)}`:`Pushed ${v.length} selected commit ranges`})}catch(M){const N=M instanceof Error?M.message:String(M);Xe({kind:"error",message:N}),console.error("Failed to push selected commits:",N)}finally{tt(!1)}}}async function E(b){var H;if(!e||Ue)return;const v=Array.from(new Set(b.branchNames.filter(oe=>oe&&oe!==D))),k=!!b.discardUncommittedChanges,M=(H=b.stashIndices)!=null?H:[],N=Array.from(new Set(M)).sort((oe,he)=>he-oe);if(!(v.length===0&&!k&&N.length===0)){Xe(null),Ae(!0);try{for(const Te of N)await Se("stash_drop",{repoPath:e,stashIndex:Te});const oe=v.length>0||k?await Se("delete_selected_elements",{repoPath:e,branchNames:v,discardUncommittedChanges:k}):{deletedBranches:[],discardedUncommittedChanges:!1};await Ln(e);const he=[];N.length>0&&he.push(N.length===1?`removed stash ${N[0]+1}`:`removed ${N.length} stashes`),oe.discardedUncommittedChanges&&he.push("discarded local uncommitted changes"),oe.deletedBranches.length>0&&he.push(oe.deletedBranches.length===1?`deleted ${oe.deletedBranches[0]}`:`deleted ${oe.deletedBranches.length} branches`),Xe({kind:"success",message:he.length>0?he.join(" and "):"Nothing to delete."})}catch(oe){const he=oe instanceof Error?oe.message:String(oe);Xe({kind:"error",message:he}),console.error("Failed to delete selected elements:",he)}finally{Ae(!1)}}}function W(b){b&&(Le(b),de(v=>v+1))}function ce(b){b&&(Fe(b),de(v=>v+1))}const{enrichedBranches:Ce,enrichedBranchCommitPreviews:Pe,enrichedBranchUniqueAheadCounts:rt,enrichedDirectCommits:Wt,enrichedUnpushedDirectCommits:Vt,visualCheckedOutRef:At}=_.useMemo(()=>{var cn,On,zn,jo,Lo,hi,Yn,mi,Ai,_r,Wr,Fr,Xr,Ul,Vl,Gr,pi,gr,ni,ba,qr,yr,xr,Kr,ua,Yl,br;const b=i2(wt,g,j,We,Ke,D,(cn=Y==null?void 0:Y.hasUncommittedChanges)!=null?cn:!1);let v=b.branches,k=b.directCommits,M=T,N=b.branchCommitPreviews,H=b.branchUniqueAheadCounts,oe=Y;const he=In?k.some(un=>un.fullSha===In||un.sha===In.slice(0,7)):!0;if(In&&Vn&&!he){const un=(hi=(Lo=(On=k.find(Fo=>Fo.fullSha===Vn||Fo.sha===Vn.slice(0,7)))==null?void 0:On.date)!=null?Lo:(jo=(zn=N[D])==null?void 0:zn.find(Fo=>Fo.fullSha===Vn||Fo.sha===Vn.slice(0,7)))==null?void 0:jo.date)!=null?hi:null,us=un?new Date(new Date(un).getTime()+1e3).toISOString():new Date().toISOString(),ns=(_r=Vn!=null?Vn:(Yn=v.find(Fo=>Fo.name===D))==null?void 0:Yn.headSha)!=null?_r:(Ai=(mi=k[0])==null?void 0:mi.fullSha)!=null?Ai:null,Ni={fullSha:In,sha:In.slice(0,7),parentSha:ns,message:((Wr=Ds==null?void 0:Ds.subject)==null?void 0:Wr.trim())||`Remote commit on origin/${D}`,author:((Fr=Ds==null?void 0:Ds.author)==null?void 0:Fr.trim())||"Unknown",date:us,kind:"commit",isRemote:!0};k=[{fullSha:In,sha:In.slice(0,7),parentSha:ns,parentShas:ns?[ns]:[],childShas:[],branch:D,message:Ni.message,author:Ni.author,date:us,kind:"commit",isRemote:!0},...k],N={...N,[D]:[Ni,...(Xr=N[D])!=null?Xr:[]]},v=v.map(Fo=>Fo.name===D?{...Fo,headSha:In,lastCommitDate:us}:Fo)}if(!!In&&!!Vn&&!he&&(Y==null?void 0:Y.branchName)===D&&Y.headSha!==In&&(Y.hasUncommittedChanges||T.length>0)){const un=`${D} (local)`,us=new Set(T.map(xs=>xs.fullSha));Y!=null&&Y.headSha&&us.add(Y.headSha);const ns=(pi=(Gr=(Ul=T[0])==null?void 0:Ul.date)!=null?Gr:Y!=null&&Y.headSha?(Vl=k.find(xs=>xs.fullSha===Y.headSha))==null?void 0:Vl.date:void 0)!=null?pi:new Date().toISOString();v.some(xs=>xs.name===un)||(v=[...v,{name:un,commitsAhead:Math.max(1,us.size),commitsBehind:0,lastCommitDate:ns,lastCommitAuthor:(gr=Y==null?void 0:Y.branchName)!=null?gr:"You",status:"fresh",remoteSyncStatus:"unpushed",unpushedCommits:Math.max(1,us.size),headSha:(qr=Y==null?void 0:Y.headSha)!=null?qr:(ba=(ni=T[0])==null?void 0:ni.fullSha)!=null?ba:"WORKING_TREE",parentBranch:D}]),k=k.map(xs=>xs.branch===D&&us.has(xs.fullSha)?{...xs,branch:un}:xs),M=M.map(xs=>xs.branch===D&&us.has(xs.fullSha)?{...xs,branch:un}:xs);const Ni=(yr=N[D])!=null?yr:[],_i=Ni.filter(xs=>xs.fullSha==="WORKING_TREE"||us.has(xs.fullSha)),Fo=Ni.filter(xs=>!_i.includes(xs));_i.length>0&&(N={...N,[D]:Fo,[un]:[..._i,...(xr=N[un])!=null?xr:[]]}),H={...H,[un]:Math.max(1,us.size)},(oe==null?void 0:oe.branchName)===D&&(oe={...oe,branchName:un})}if(!(oe!=null&&oe.hasUncommittedChanges))return{enrichedBranches:v,enrichedDirectCommits:k,enrichedUnpushedDirectCommits:M,enrichedBranchCommitPreviews:N,enrichedBranchUniqueAheadCounts:H,visualCheckedOutRef:oe};const ut=oe.headSha||oe.parentSha||null,q=(ua=(Kr=k[0])==null?void 0:Kr.fullSha)!=null?ua:null,Z=(un,us)=>!un||!us?!1:un===us||un.startsWith(us)||us.startsWith(un),ie=[{name:D,headSha:q!=null?q:"",isDefault:!0},...v.map(un=>({name:un.name,headSha:un.headSha,isDefault:!1}))],ee=oe.branchName?ie.find(un=>un.name===oe.branchName):void 0,Ee=ut?ie.filter(un=>Z(un.headSha,ut)):[],qe=(Yl=ee!=null?ee:Ee.find(un=>un.isDefault))!=null?Yl:Ee[0],it=qe&&!qe.isDefault?v.find(un=>un.name===qe.name):void 0,dt=(()=>{var us;if(!ut)return null;const un=k.find(ns=>Z(ns.fullSha,ut)||Z(ns.sha,ut));if(un!=null&&un.date)return un.date;if(it){const ns=((us=N[it.name])!=null?us:[]).find(Ni=>Z(Ni.fullSha,ut)||Z(Ni.sha,ut));if(ns!=null&&ns.date)return ns.date}return null})(),Bt=dt?new Date(dt).getTime():Number.NaN,yt=Date.now(),jt=Number.isFinite(Bt)?Math.max(yt,Bt+1):yt,Cn=new Date(jt).toISOString(),Xt={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ut,message:"Local uncommitted changes",author:"You",date:Cn,kind:"uncommitted"};return it?{enrichedBranches:v.map(us=>us.name===it.name?{...us,commitsAhead:us.commitsAhead+1,unpushedCommits:us.unpushedCommits+1,lastCommitDate:Cn,headSha:"WORKING_TREE"}:us),enrichedDirectCommits:k,enrichedUnpushedDirectCommits:M,enrichedBranchCommitPreviews:{...N,[it.name]:[Xt,...N[it.name]||[]]},enrichedBranchUniqueAheadCounts:{...H,[it.name]:Math.max(0,(br=Object.prototype.hasOwnProperty.call(H,it.name)?H[it.name]:it.commitsAhead)!=null?br:0)+1},visualCheckedOutRef:oe}:{enrichedBranches:v,enrichedBranchCommitPreviews:{...N,[D]:[Xt,...N[D]||[]]},enrichedBranchUniqueAheadCounts:{...H},enrichedDirectCommits:k,enrichedUnpushedDirectCommits:M,visualCheckedOutRef:oe}},[g,We,Ke,Y,D,j,Ds,Vn,In,wt,T]);_.useEffect(()=>{var M;if(!(!ht&&!Ze&&(In==null||bo&&Vn!=null)))return;const v=At!=null&&At.hasUncommittedChanges?"WORKING_TREE":(M=At==null?void 0:At.headSha)!=null?M:null;if(!v)return;const k=`${e!=null?e:"__no-repo__"}|${Ge}|${v}`;Hs.current!==k&&(Hs.current=k,Le(v),de(N=>N+1))},[bo,Ze,Ge,ht,Vn,In,e,At==null?void 0:At.hasUncommittedChanges,At==null?void 0:At.headSha]),_.useEffect(()=>{Hs.current=null},[e]);const nn=_.useMemo(()=>{const b={...Re};return b[D]=null,b},[Re,D,Ce]),vn=_.useMemo(()=>{var b;return(b=Iw(Ce,D,nn,bt))!=null?b:Cp(Ce,D,Pe,nn)},[Ce,D,Pe,nn,bt]),ln=_.useMemo(()=>Xd(bn),[bn]),Gn=_.useMemo(()=>Xd(js),[js]),sn=_.useMemo(()=>e?hd(e,Ge,bn,js):null,[e,Ge,ln,Gn]);_.useEffect(()=>{if(!e||!sn){co(null),ps(null);return}const b=Pt.current.get(sn);if(b){co(b),ps(sn),Ys.current.add(sn);return}let v=!1;return co(null),ps(null),Se("get_repo_layout_snapshot",{repoPath:e,layoutKey:sn}).then(k=>{if(v||!k)return;const M=JSON.parse(k),N=vm(M);Pt.current.set(sn,N),Ys.current.add(sn),co(N),ps(sn)}).catch(()=>{v||(co(null),ps(null))}),()=>{v=!0}},[e,sn]);const Ut=_.useMemo(()=>{var b;if(Ne.trim().length===0&&sn&&Ko===sn&&ki)return ki;if(ht){const v=sn&&(b=Pt.current.get(sn))!=null?b:null;if(v)return v;if(ks.current)return ks.current}return kp({lanes:vn,branches:Ce,mergeNodes:w,directCommits:Wt,unpushedDirectCommits:Vt,defaultBranch:D,branchCommitPreviews:Pe,branchParentByName:nn,branchUniqueAheadCounts:rt,manuallyOpenedClumps:bn,manuallyClosedClumps:js,isDebugOpen:!1,gridSearchQuery:Ne,gridFocusSha:me,checkedOutRef:At!=null?At:null,orientation:Ge})},[vn,Ce,w,Wt,Vt,D,Pe,nn,rt,bn,js,Ne,me,(go=At==null?void 0:At.headSha)!=null?go:null,(Bo=At==null?void 0:At.branchName)!=null?Bo:null,Ge,Ne,sn,Ko,ki,ht]);_.useEffect(()=>{ks.current=Ut},[Ut]),_.useEffect(()=>{if(!e||!sn||(Pt.current.set(sn,Ut),Ys.current.has(sn)))return;Ys.current.add(sn);const b=JSON.stringify(bm(Ut));Se("store_repo_layout_snapshot",{repoPath:e,layoutKey:sn,payloadJson:b}).catch(()=>{Ys.current.delete(sn)})},[e,sn,Ut]),_.useEffect(()=>{try{const b=window.localStorage.getItem(fx);if(b){const k=Number(b);Number.isFinite(k)&&Zt(Math.min(gx,Math.max(_x,k)))}const v=window.localStorage.getItem(hx);v!=null&&yn(v==="true")}catch{}},[]),_.useEffect(()=>{gs.current=Ps},[Ps]),_.useEffect(()=>{const b=Mn.current;b&&(b.style.width=jn?"0px":`${Ps}px`)},[Ps,jn]),_.useEffect(()=>{try{window.localStorage.setItem(hx,String(jn))}catch{}},[jn]);const Bn=b=>{const v=qn.current;if(!v)return;const k=v.startWidth+(b-v.startX);v.pendingWidth=Math.min(gx,Math.max(_x,k));const M=Mn.current;M&&(M.style.width=`${v.pendingWidth}px`)},ys=(b,v)=>{const k=qn.current;if(k&&!(v!=null&&k.pointerId!==v)){qn.current=null,document.body.style.cursor="",document.body.style.userSelect="",Zt(k.pendingWidth);try{window.localStorage.setItem(fx,String(k.pendingWidth))}catch{}}},po=b=>{b.button===0&&(b.preventDefault(),qn.current={startX:b.clientX,startWidth:gs.current,pendingWidth:gs.current,pointerId:b.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",b.currentTarget.setPointerCapture(b.pointerId))},Bs=b=>{const v=qn.current;!v||v.pointerId!==b.pointerId||Bn(b.clientX)},Ti=b=>{if(qn.current){try{b.currentTarget.releasePointerCapture(b.pointerId)}catch{}ys("pointerup",b.pointerId)}},_o=b=>{if(qn.current){try{b.currentTarget.releasePointerCapture(b.pointerId)}catch{}ys("pointercancel",b.pointerId)}},Co=_.useCallback(b=>{b===hs.current&&qt==="ready"&&pt(!0)},[qt]),ko=!$t||qt!=="ready",Ro=ht||Ze;return l.jsx("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:l.jsx("div",{className:"relative z-30 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:Mn,className:"relative z-[60] flex h-full min-h-0 flex-none overflow-visible",style:{width:jn?64:Ps},children:[l.jsx("button",{type:"button",className:"window-no-drag absolute right-2.5 left-22 top-2.25 z-[9999] inline-flex h-7 w-7 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted","aria-label":jn?"Open sidebar":"Collapse sidebar",onClick:()=>yn(b=>!b),children:jn?l.jsx(Aw,{className:"h-4 w-4 shrink-0"}):l.jsx(Ew,{className:"h-4 w-4 shrink-0"})}),l.jsx(O3,{className:$3("min-h-0 shrink-0 overflow-hidden pt-14 transition-[width,opacity] duration-300 ease-in-out","opacity-100"),style:{width:"100%"},collapsed:jn,projects:Fs,activeProjectPath:e,onSelectProject:Jo,onAddProject:Wo,onRemoveProject:cs,onReorderProjects:Zo,onRevealProjectInFinder:fo,projectLoading:Ze||(p&&e?!((ca=d[e])!=null&&ca.loaded):!1),projectError:K,checkedOutRef:Y,showCommits:!1,manuallyOpenedClumpsByProject:I,manuallyClosedClumpsByProject:xe,manuallyOpenedClumps:bn,manuallyClosedClumps:js,setManuallyOpenedClumps:Js,setManuallyClosedClumps:Ms,gridLayoutModel:Ut,onSelectCommit:W,onSelectBranch:ce}),jn?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:po,onPointerMove:Bs,onPointerUp:Ti,onPointerCancel:_o,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"})]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-40 h-12"}),l.jsx(gS,{branches:Ce,mergeNodes:w,directCommits:Wt,unpushedDirectCommits:Vt,unpushedCommitShasByBranch:P,openPRs:rn,defaultBranch:D,branchCommitPreviews:Pe,branchParentByName:nn,branchUniqueAheadCounts:rt,gridSearchQuery:Ne,gridSearchJumpToken:ne,gridSearchJumpDirection:O,gridFocusSha:me,isLoading:ht||Ze,blockMapDisplay:ko,blockMapInteraction:Ro,mapReadyEpoch:Ct,onMapReadyForDisplay:Co,onGridSearchResultCountChange:Q,onGridSearchResultIndexChange:Me,onGridSearchFocusChange:Le,checkedOutRef:At,onCommitClick:ti,onMergeRefsIntoBranch:wo,mergeInProgress:J,onPushAllBranches:Do,onPushCurrentBranch:So,onPushCommitTargets:fi,pushInProgress:je,onDeleteSelection:E,deleteInProgress:Ue,worktrees:X,currentRepoPath:e!=null?e:void 0,onRemoveWorktree:Ns,removeWorktreeInProgress:ue,onSwitchToWorktree:di,onStashLocalChanges:Et,stashInProgress:Ht,stashDisabled:!1,onCommitLocalChanges:to,commitInProgress:Ot,commitDisabled:!1,onStageAllChanges:Ji,stageInProgress:fn,onCreateBranchFromNode:Pi,onCreateRootBranch:Hi,createBranchFromNodeInProgress:Qt,isMutationBusy:Jt,isDebugOpen:Is,onDebugClose:()=>lo(!1),onInteractionChange:tn,manuallyOpenedClumps:bn,manuallyClosedClumps:js,setManuallyOpenedClumps:Js,setManuallyClosedClumps:Ms,layoutModel:Ut,orientation:Ge,gridHudProps:_n})]})]})})})}var P3=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,H3={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(e)),e.textContent=P3}var fs=H3,U3=`.icon-transitions-module__iconState___uqK9J {
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
}`,V3={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-components-icon-transitions");e||(e=document.createElement("style"),e.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(e)),e.textContent=U3}var as=V3,Y3=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),W3=({size:e=24,style:n={}})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),F3=({size:e=20,...n})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),X3=({size:e=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${as.iconState} ${n?as.hiddenScaled:as.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${as.iconState} ${n?as.visibleScaled:as.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),G3=({size:e=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${as.iconStateFast} ${i?as.visibleScaled:u?as.sending:as.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${as.iconStateFast} ${a?as.visibleScaled:as.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${as.iconStateFast} ${c?as.visibleScaled:as.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},q3=({size:e=24,isOpen:n=!0})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${as.iconFade} ${n?as.visible:as.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${as.iconFade} ${n?as.hidden:as.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),K3=({size:e=24,isPaused:n=!1})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${as.iconFadeFast} ${n?as.hidden:as.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${as.iconFadeFast} ${n?as.visible:as.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),Q3=({size:e=16})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),Z3=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),a2=({size:e=16})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),J3=({size:e=24})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),ej=({size:e=16})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),tj=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),nj=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),sj=({size:e=24})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),oj=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),ij=({size:e=24})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),r2=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],km=r2.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(""),pp="feedback-freeze-styles",jm="__agentation_freeze";function aj(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const e=window;return e[jm]||(e[jm]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[jm]}var kn=aj();typeof window<"u"&&!kn.installed&&(kn.origSetTimeout=window.setTimeout.bind(window),kn.origSetInterval=window.setInterval.bind(window),kn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,n,...i)=>typeof e=="string"?kn.origSetTimeout(e,n):kn.origSetTimeout((...a)=>{kn.frozen?kn.frozenTimeoutQueue.push(()=>e(...a)):e(...a)},n,...i),window.setInterval=(e,n,...i)=>typeof e=="string"?kn.origSetInterval(e,n):kn.origSetInterval((...a)=>{kn.frozen||e(...a)},n,...i),window.requestAnimationFrame=e=>kn.origRAF(n=>{kn.frozen?kn.frozenRAFQueue.push(e):e(n)}),kn.installed=!0);var Ft=kn.origSetTimeout,rj=kn.origSetInterval,Al=kn.origRAF;function lj(e){return e?r2.some(n=>{var i;return!!((i=e.closest)!=null&&i.call(e,`[${n}]`))}):!1}function cj(){if(typeof document>"u"||kn.frozen)return;kn.frozen=!0,kn.frozenTimeoutQueue=[],kn.frozenRAFQueue=[];let e=document.getElementById(pp);e||(e=document.createElement("style"),e.id=pp),e.textContent=`
    *${km},
    *${km}::before,
    *${km}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),kn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;lj(i)||(n.pause(),kn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function xx(){var i;if(typeof document>"u"||!kn.frozen)return;kn.frozen=!1;const e=kn.frozenTimeoutQueue;kn.frozenTimeoutQueue=[];for(const a of e)kn.origSetTimeout(()=>{if(kn.frozen){kn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=kn.frozenRAFQueue;kn.frozenRAFQueue=[];for(const a of n)kn.origRAF(c=>{if(kn.frozen){kn.frozenRAFQueue.push(a);return}a(c)});for(const a of kn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}kn.pausedAnimations=[],(i=document.getElementById(pp))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Mm(e){if(!e)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{e.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var Gd=_.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:y,style:g,accentColor:x="#3c82f7",isExiting:w=!1,lightMode:C=!1,computedStyles:j},A){const[T,R]=_.useState(u),[P,L]=_.useState(!1),[D,F]=_.useState("initial"),[Y,V]=_.useState(!1),[X,le]=_.useState(!1),ue=_.useRef(null),pe=_.useRef(null),Ne=_.useRef(null),Fe=_.useRef(null);_.useEffect(()=>{w&&D!=="exit"&&F("exit")},[w,D]),_.useEffect(()=>{Ft(()=>{F("enter")},0);const fe=Ft(()=>{F("entered")},200),xe=Ft(()=>{const z=ue.current;z&&(Mm(z),z.selectionStart=z.selectionEnd=z.value.length,z.scrollTop=z.scrollHeight)},50);return()=>{clearTimeout(fe),clearTimeout(xe),Ne.current&&clearTimeout(Ne.current),Fe.current&&clearTimeout(Fe.current)}},[]);const ne=_.useCallback(()=>{Fe.current&&clearTimeout(Fe.current),L(!0),Fe.current=Ft(()=>{L(!1),Mm(ue.current)},250)},[]);_.useImperativeHandle(A,()=>({shake:ne}),[ne]);const de=_.useCallback(()=>{F("exit"),Ne.current=Ft(()=>{p()},150)},[p]),O=_.useCallback(()=>{T.trim()&&h(T.trim())},[T,h]),se=_.useCallback(fe=>{fe.stopPropagation(),!fe.nativeEvent.isComposing&&(fe.key==="Enter"&&!fe.shiftKey&&(fe.preventDefault(),O()),fe.key==="Escape"&&de())},[O,de]),I=[fs.popup,C?fs.light:"",D==="enter"?fs.enter:"",D==="entered"?fs.entered:"",D==="exit"?fs.exit:"",P?fs.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:pe,className:I,"data-annotation-popup":!0,style:g,onClick:fe=>fe.stopPropagation(),children:[l.jsxs("div",{className:fs.header,children:[j&&Object.keys(j).length>0?l.jsxs("button",{className:fs.headerToggle,onClick:()=>{const fe=X;le(!X),fe&&Ft(()=>Mm(ue.current),0)},type:"button",children:[l.jsx("svg",{className:`${fs.chevron} ${X?fs.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:fs.element,children:n})]}):l.jsx("span",{className:fs.element,children:n}),i&&l.jsx("span",{className:fs.timestamp,children:i})]}),j&&Object.keys(j).length>0&&l.jsx("div",{className:`${fs.stylesWrapper} ${X?fs.expanded:""}`,children:l.jsx("div",{className:fs.stylesInner,children:l.jsx("div",{className:fs.stylesBlock,children:Object.entries(j).map(([fe,xe])=>l.jsxs("div",{className:fs.styleLine,children:[l.jsx("span",{className:fs.styleProperty,children:fe.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:fs.styleValue,children:xe}),";"]},fe))})})}),a&&l.jsxs("div",{className:fs.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:ue,className:fs.textarea,style:{borderColor:Y?x:void 0},placeholder:c,value:T,onChange:fe=>R(fe.target.value),onFocus:()=>V(!0),onBlur:()=>V(!1),rows:2,onKeyDown:se}),l.jsxs("div",{className:fs.actions,children:[y&&l.jsx("div",{className:fs.deleteWrapper,children:l.jsx("button",{className:fs.deleteButton,onClick:y,type:"button",children:l.jsx(sj,{size:22})})}),l.jsx("button",{className:fs.cancel,onClick:de,children:"Cancel"}),l.jsx("button",{className:fs.submit,style:{backgroundColor:x,opacity:T.trim()?1:.4},onClick:O,disabled:!T.trim(),children:d})]})]})}),uj=({content:e,children:n,...i})=>{const[a,c]=_.useState(!1),[u,d]=_.useState(!1),[h,p]=_.useState({top:0,right:0}),y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),w=()=>{if(y.current){const A=y.current.getBoundingClientRect();p({top:A.top+A.height/2,right:window.innerWidth-A.left+8})}},C=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),w(),g.current=Ft(()=>{c(!0)},500)},j=()=>{g.current&&(clearTimeout(g.current),g.current=null),c(!1),x.current=Ft(()=>{d(!1)},150)};return _.useEffect(()=>()=>{g.current&&clearTimeout(g.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:y,onMouseEnter:C,onMouseLeave:j,...i,children:n}),u&&zl.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:e}),document.body)]})},dj=`.styles-module__tooltip___mcXL2 {
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
}`,fj={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-help-tooltip-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(e)),e.textContent=dj}var bx=fj,Ir=({content:e})=>l.jsx(uj,{className:bx.tooltip,content:e,children:l.jsx(F3,{className:bx.tooltipIcon})}),Mt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},l2=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...Mt.navigation},{type:"header",label:"Header",...Mt.header},{type:"hero",label:"Hero",...Mt.hero},{type:"section",label:"Section",...Mt.section},{type:"sidebar",label:"Sidebar",...Mt.sidebar},{type:"footer",label:"Footer",...Mt.footer},{type:"modal",label:"Modal",...Mt.modal},{type:"banner",label:"Banner",...Mt.banner},{type:"drawer",label:"Drawer",...Mt.drawer},{type:"popover",label:"Popover",...Mt.popover},{type:"divider",label:"Divider",...Mt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...Mt.card},{type:"text",label:"Text",...Mt.text},{type:"image",label:"Image",...Mt.image},{type:"video",label:"Video",...Mt.video},{type:"table",label:"Table",...Mt.table},{type:"grid",label:"Grid",...Mt.grid},{type:"list",label:"List",...Mt.list},{type:"chart",label:"Chart",...Mt.chart},{type:"codeBlock",label:"Code Block",...Mt.codeBlock},{type:"map",label:"Map",...Mt.map},{type:"timeline",label:"Timeline",...Mt.timeline},{type:"calendar",label:"Calendar",...Mt.calendar},{type:"accordion",label:"Accordion",...Mt.accordion},{type:"carousel",label:"Carousel",...Mt.carousel},{type:"logo",label:"Logo",...Mt.logo},{type:"faq",label:"FAQ",...Mt.faq},{type:"gallery",label:"Gallery",...Mt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...Mt.button},{type:"input",label:"Input",...Mt.input},{type:"search",label:"Search",...Mt.search},{type:"form",label:"Form",...Mt.form},{type:"tabs",label:"Tabs",...Mt.tabs},{type:"dropdown",label:"Dropdown",...Mt.dropdown},{type:"toggle",label:"Toggle",...Mt.toggle},{type:"stepper",label:"Stepper",...Mt.stepper},{type:"rating",label:"Rating",...Mt.rating},{type:"fileUpload",label:"File Upload",...Mt.fileUpload},{type:"checkbox",label:"Checkbox",...Mt.checkbox},{type:"radio",label:"Radio",...Mt.radio},{type:"slider",label:"Slider",...Mt.slider},{type:"datePicker",label:"Date Picker",...Mt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...Mt.avatar},{type:"badge",label:"Badge",...Mt.badge},{type:"tag",label:"Tag",...Mt.tag},{type:"breadcrumb",label:"Breadcrumb",...Mt.breadcrumb},{type:"pagination",label:"Pagination",...Mt.pagination},{type:"progress",label:"Progress",...Mt.progress},{type:"alert",label:"Alert",...Mt.alert},{type:"toast",label:"Toast",...Mt.toast},{type:"notification",label:"Notification",...Mt.notification},{type:"tooltip",label:"Tooltip",...Mt.tooltip},{type:"stat",label:"Stat",...Mt.stat},{type:"skeleton",label:"Skeleton",...Mt.skeleton},{type:"chip",label:"Chip",...Mt.chip},{type:"icon",label:"Icon",...Mt.icon},{type:"spinner",label:"Spinner",...Mt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...Mt.pricing},{type:"testimonial",label:"Testimonial",...Mt.testimonial},{type:"cta",label:"CTA",...Mt.cta},{type:"productCard",label:"Product Card",...Mt.productCard},{type:"profile",label:"Profile",...Mt.profile},{type:"feature",label:"Feature",...Mt.feature},{type:"team",label:"Team",...Mt.team},{type:"login",label:"Login",...Mt.login},{type:"contact",label:"Contact",...Mt.contact}]}],ia={};for(const e of l2)for(const n of e.items)ia[n.type]=n;function Ye({w:e,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof e=="number"?`${e}px`:e,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Jn({w:e,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof e=="number"?`${e}px`:e,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function li({size:e}){return l.jsx("div",{style:{width:e,height:e,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function hj({width:e,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:e*.02},children:[l.jsx(Jn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:e*.03,marginLeft:e*.04},children:[l.jsx(Ye,{w:e*.06}),l.jsx(Ye,{w:e*.07}),l.jsx(Ye,{w:e*.05}),l.jsx(Ye,{w:e*.06})]}),l.jsx(Jn,{w:e*.1,h:Math.min(28,n*.5),radius:4})]})}function mj({width:e,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Ye,{w:e*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Ye,{w:e*.6}),l.jsx(Ye,{w:e*.4}),l.jsx(Jn,{w:Math.min(140,e*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function pj({width:e,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:e*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Ye,{w:e*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Jn,{w:10,h:10,radius:2}),l.jsx(Ye,{w:e*(.4+c*17%30/100)})]},c))]})}function _j({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ye,{w:"60%",h:3,strong:!0}),l.jsx(Ye,{w:"80%",h:2}),l.jsx(Ye,{w:"70%",h:2}),l.jsx(Ye,{w:"60%",h:2})]},c))})}function gj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ye,{w:e*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Ye,{w:"90%"}),l.jsx(Ye,{w:"70%"}),l.jsx(Ye,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(Jn,{w:70,h:26,radius:4}),l.jsx(Jn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function yj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ye,{w:"70%",h:4,strong:!0}),l.jsx(Ye,{w:"95%",h:2}),l.jsx(Ye,{w:"85%",h:2}),l.jsx(Ye,{w:"50%",h:2})]})]})}function xj({width:e,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Ye,{w:e*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Ye,{w:`${70+u*13%25}%`,h:2},u))]})}function bj({width:e,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:e,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:e,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:e*.3,cy:n*.3,r:Math.min(e,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function vj({width:e,height:n}){const i=Math.max(2,Math.min(5,Math.floor(e/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Ye,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Ye,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function wj({width:e,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(li,{size:8}),l.jsx(Ye,{w:`${55+c*17%35}%`,h:2})]},c))})}function Sj({width:e,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Ye,{w:Math.max(20,e*.5),h:3,strong:!0})})}function Cj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Ye,{w:Math.min(80,e*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Ye,{w:"40%",h:2})})]})}function kj({width:e,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ye,{w:60+c*17%30,h:2}),l.jsx(Jn,{w:"100%",h:28,radius:4})]},c)),l.jsx(Jn,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function jj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Ye,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Ye,{w:"80%",h:2}),l.jsx(Ye,{w:"65%",h:2}),l.jsx(Ye,{w:"75%",h:2})]})]})}function Mj({width:e,height:n}){const i=Math.min(e,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("circle",{cx:e/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:e/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${e/2-i*.55} ${n*.78} C${e/2-i*.55} ${n*.55} ${e/2+i*.55} ${n*.55} ${e/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function Ej({width:e,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Ye,{w:Math.max(16,e*.5),h:2,strong:!0})})}function Tj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Ye,{w:e*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Ye,{w:e*.35})]})}function Aj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:e*.04},children:[l.jsx(Ye,{w:e*.3,h:4,strong:!0}),l.jsx(Ye,{w:e*.7}),l.jsx(Ye,{w:e*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:e*.03,marginTop:n*.06},children:[l.jsx(Jn,{w:"33%",h:"100%",radius:4}),l.jsx(Jn,{w:"33%",h:"100%",radius:4}),l.jsx(Jn,{w:"33%",h:"100%",radius:4})]})]})}function Nj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(Jn,{w:"100%",h:"100%",radius:4},u))})}function Dj({width:e,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Ye,{w:e*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Ye,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function Rj({width:e,height:n}){const i=Math.min(e,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:e-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:e-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function Bj({width:e,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(li,{size:Math.min(14,n*.4)}),l.jsx(Ye,{w:"50%",h:2})]})}function Lj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(li,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ye,{w:"60%",h:3,strong:!0}),l.jsx(Ye,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function Oj({width:e,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:e,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:e*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function zj({width:e,height:n}){const i=Math.max(3,Math.min(7,Math.floor(e/50))),a=e/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(Jn,{w:a,h:`${d}%`,radius:2},u)})})}function $j({width:e,height:n}){const i=Math.min(e,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(Jn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function Ij({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Ye,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function Pj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Ye,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function Hj({width:e,height:n}){const i=Math.max(3,Math.min(5,Math.floor(e/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(Jn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function Uj({width:e}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function Vj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Ye,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function Yj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Jn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(li,{size:5}),l.jsx(li,{size:5}),l.jsx(li,{size:5})]})]})}function Wj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Ye,{w:e*.4,h:3,strong:!0}),l.jsx(Ye,{w:e*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(li,{size:5}),l.jsx(Ye,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(Jn,{w:e*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function Fj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ye,{w:"90%",h:2}),l.jsx(Ye,{w:"75%",h:2}),l.jsx(Ye,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(li,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Ye,{w:60,h:3,strong:!0}),l.jsx(Ye,{w:40,h:2})]})]})]})}function Xj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Ye,{w:e*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Ye,{w:e*.35}),l.jsx(Jn,{w:Math.min(140,e*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function Gj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ye,{w:"40%",h:3,strong:!0}),l.jsx(Ye,{w:"70%",h:2})]})]})}function qj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Ye,{w:e*.4,h:3,strong:!0}),l.jsx(Jn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function Kj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Ye,{w:e*.5,h:2}),l.jsx(Ye,{w:e*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Ye,{w:e*.3,h:2})]})}function Qj({width:e,height:n}){const i=Math.max(3,Math.min(5,Math.floor(e/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function Zj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Ye,{w:Math.max(16,e*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function Jj({width:e,height:n}){const a=Math.min(n*.7,e/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function e8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:e,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:e,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:e*.4,y1:0,x2:e*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function t8({width:e,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(li,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ye,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Ye,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function n8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Ye,{w:e*.4,h:2}),l.jsx(Ye,{w:e*.25,h:2})]})}function s8({width:e,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(li,{size:6}),l.jsx(li,{size:6}),l.jsx(li,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Ye,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function o8({width:e,height:n}){const c=Math.min((e-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Ye,{w:e*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Ye,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function i8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(li,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ye,{w:"50%",h:3,strong:!0}),l.jsx(Ye,{w:"75%",h:2})]}),l.jsx(Ye,{w:30,h:2})]})}function a8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ye,{w:"65%",h:4,strong:!0}),l.jsx(Ye,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ye,{w:"30%",h:5,strong:!0}),l.jsx(Jn,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function r8({width:e,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(li,{size:i}),l.jsx(Ye,{w:e*.45,h:4,strong:!0}),l.jsx(Ye,{w:e*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:e*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ye,{w:20,h:3,strong:!0}),l.jsx(Ye,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ye,{w:20,h:3,strong:!0}),l.jsx(Ye,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ye,{w:20,h:3,strong:!0}),l.jsx(Ye,{w:28,h:2})]})]})]})}function l8({width:e,height:n}){const i=Math.max(e*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:e-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:e*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Ye,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Ye,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function c8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ye,{w:"70%",h:3,strong:!0}),l.jsx(Ye,{w:"90%",h:2}),l.jsx(Ye,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function u8({width:e,height:n}){const i=Math.min(n*.7,e*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:e*.08},children:[l.jsx(Jn,{w:i,h:i,radius:i*.25}),l.jsx(Ye,{w:e*.45,h:Math.max(4,n*.2),strong:!0})]})}function d8({width:e,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Ye,{w:e*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function f8({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function h8({width:e,height:n}){const i=Math.min(e,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function m8({width:e,height:n}){const i=Math.min(e,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("circle",{cx:e/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:e/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function p8({width:e,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=e*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function _8({width:e,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((e-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Ye,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Ye,{w:e*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function g8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function y8({width:e,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Ye,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function x8({width:e,height:n}){const i=Math.min(e,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:l.jsx("path",{d:`M${e/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function b8({width:e,height:n}){const i=Math.min(e,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("circle",{cx:e/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${e/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function v8({width:e,height:n}){const i=Math.min(36,n*.25,e*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:e*.04,alignItems:"flex-start"},children:[l.jsx(Jn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ye,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Ye,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function w8({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Ye,{w:e*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:e*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(li,{size:a}),l.jsx(Ye,{w:e*.12,h:3,strong:!0}),l.jsx(Ye,{w:e*.08,h:2})]},u))})]})}function S8({width:e,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:e*.06,gap:n*.04},children:[l.jsx(Ye,{w:e*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Ye,{w:e*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ye,{w:Math.min(60,e*.2),h:2}),l.jsx(Jn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(Jn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Ye,{w:e*.4,h:2})]})}function C8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:e*.04,gap:n*.03},children:[l.jsx(Ye,{w:e*.4,h:4,strong:!0}),l.jsx(Ye,{w:e*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ye,{w:50,h:2}),l.jsx(Jn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ye,{w:40,h:2}),l.jsx(Jn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ye,{w:50,h:2}),l.jsx(Jn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Ye,{w:60,h:2}),l.jsx(Jn,{w:"100%",h:"100%",radius:4})]}),l.jsx(Jn,{w:Math.min(120,e*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var k8={navigation:hj,hero:mj,sidebar:pj,footer:_j,modal:gj,card:yj,text:xj,image:bj,table:vj,list:wj,button:Sj,input:Cj,form:kj,tabs:jj,avatar:Mj,badge:Ej,header:Tj,section:Aj,grid:Nj,dropdown:Dj,toggle:Rj,search:Bj,toast:Lj,progress:Oj,chart:zj,video:$j,tooltip:Ij,breadcrumb:Pj,pagination:Hj,divider:Uj,accordion:Vj,carousel:Yj,pricing:Wj,testimonial:Fj,cta:Xj,alert:Gj,banner:qj,stat:Kj,stepper:Qj,tag:Zj,rating:Jj,map:e8,timeline:t8,fileUpload:n8,codeBlock:s8,calendar:o8,notification:i8,productCard:a8,profile:r8,drawer:l8,popover:c8,logo:u8,faq:d8,gallery:f8,checkbox:h8,radio:m8,slider:p8,datePicker:_8,skeleton:g8,chip:y8,icon:x8,spinner:b8,feature:v8,team:w8,login:S8,contact:C8};function j8({type:e,width:n,height:i,text:a}){const c=k8[e];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:e})})}var M8=`svg[fill=none] {
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
}`,E8={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-design-mode-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(e)),e.textContent=M8}var ze=E8,Sl=24,md=5;function vx(e,n,i,a,c){let u=1/0,d=1/0;const h=e.x,p=e.x+e.width,y=e.x+e.width/2,g=e.y,x=e.y+e.height,w=e.y+e.height/2,C=!a,j=C?[h,p,y]:[...a.left?[h]:[],...a.right?[p]:[]],A=C?[g,x,w]:[...a.top?[g]:[],...a.bottom?[x]:[]],T=[];for(const pe of n)i.has(pe.id)||T.push(pe);c&&T.push(...c);for(const pe of T){const Ne=pe.x,Fe=pe.x+pe.width,ne=pe.x+pe.width/2,de=pe.y,O=pe.y+pe.height,se=pe.y+pe.height/2;for(const I of j)for(const fe of[Ne,Fe,ne]){const xe=fe-I;Math.abs(xe)<md&&Math.abs(xe)<Math.abs(u)&&(u=xe)}for(const I of A)for(const fe of[de,O,se]){const xe=fe-I;Math.abs(xe)<md&&Math.abs(xe)<Math.abs(d)&&(d=xe)}}const R=Math.abs(u)<md?u:0,P=Math.abs(d)<md?d:0,L=[],D=new Set,F=h+R,Y=p+R,V=y+R,X=g+P,le=x+P,ue=w+P;for(const pe of T){const Ne=pe.x,Fe=pe.x+pe.width,ne=pe.x+pe.width/2,de=pe.y,O=pe.y+pe.height,se=pe.y+pe.height/2;for(const I of[Ne,ne,Fe])for(const fe of[F,V,Y])if(Math.abs(fe-I)<.5){const xe=`x:${Math.round(I)}`;D.has(xe)||(D.add(xe),L.push({axis:"x",pos:I}))}for(const I of[de,se,O])for(const fe of[X,ue,le])if(Math.abs(fe-I)<.5){const xe=`y:${Math.round(I)}`;D.has(xe)||(D.add(xe),L.push({axis:"y",pos:I}))}}return{dx:R,dy:P,guides:L}}function wx(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function T8({placements:e,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:y,onSelectionChange:g,deselectSignal:x,onDragMove:w,onDragEnd:C,clearSignal:j,wireframe:A}){const[T,R]=_.useState(new Set),[P,L]=_.useState(null),[D,F]=_.useState(null),[Y,V]=_.useState(null),[X,le]=_.useState([]),[ue,pe]=_.useState(null),[Ne,Fe]=_.useState(!1),ne=_.useRef(!1),[de,O]=_.useState(new Set),se=_.useRef(new Map),I=_.useRef(null),fe=_.useRef(null),xe=_.useRef(e);xe.current=e;const z=_.useRef(g);z.current=g;const ae=_.useRef(w);ae.current=w;const Q=_.useRef(C);Q.current=C;const be=_.useRef(x);_.useEffect(()=>{x!==be.current&&(be.current=x,R(new Set))},[x]);const Me=_.useRef(j);_.useEffect(()=>{if(j!==void 0&&j!==Me.current){Me.current=j;const K=new Set(xe.current.map(De=>De.id));K.size>0&&(O(K),R(new Set),fe.current=null,Ft(()=>{n([]),O(new Set)},180))}},[j,n]),_.useEffect(()=>{const K=De=>{const ct=De.target;if(!(ct.tagName==="INPUT"||ct.tagName==="TEXTAREA"||ct.isContentEditable)){if((De.key==="Backspace"||De.key==="Delete")&&T.size>0){De.preventDefault();const _t=new Set(T);O(_t),R(new Set),Ft(()=>{n(xe.current.filter(Ie=>!_t.has(Ie.id))),O(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(De.key)&&T.size>0){De.preventDefault();const _t=De.shiftKey?20:1,Ie=De.key==="ArrowLeft"?-_t:De.key==="ArrowRight"?_t:0,xt=De.key==="ArrowUp"?-_t:De.key==="ArrowDown"?_t:0;n(e.map(gt=>T.has(gt.id)?{...gt,x:Math.max(0,gt.x+Ie),y:Math.max(0,gt.y+xt)}:gt));return}if(De.key==="Escape"){i?a(null):T.size>0&&R(new Set);return}}};return document.addEventListener("keydown",K),()=>document.removeEventListener("keydown",K)},[T,i,e,n,a]);const me=_.useCallback(K=>{if(K.button!==0||p||K.target.closest(`.${ze.placement}`))return;K.preventDefault(),K.stopPropagation();const ct=window.scrollY,at=K.clientX,_t=K.clientY;if(i){fe.current="place",d==null||d(!0);let Ie=!1,xt=at,gt=_t;const kt=ot=>{xt=ot.clientX,gt=ot.clientY;const U=Math.abs(xt-at),J=Math.abs(gt-_t);if((U>5||J>5)&&(Ie=!0),Ie){const we=Math.min(at,xt),je=Math.min(_t,gt),tt=Math.abs(xt-at),Ue=Math.abs(gt-_t);L({x:we,y:je,w:tt,h:Ue}),V({x:ot.clientX+12,y:ot.clientY+12,text:`${Math.round(tt)} × ${Math.round(Ue)}`})}},Xe=ot=>{window.removeEventListener("mousemove",kt),window.removeEventListener("mouseup",Xe),L(null),V(null),fe.current=null,d==null||d(!1);const U=Mt[i];let J,we,je,tt;Ie?(J=Math.min(at,xt),we=Math.min(_t,gt)+ct,je=Math.max(Sl,Math.abs(xt-at)),tt=Math.max(Sl,Math.abs(gt-_t))):(je=U.width,tt=U.height,J=at-je/2,we=_t+ct-tt/2),J=Math.max(0,J),we=Math.max(0,we);const Ue={id:wx(),type:i,x:J,y:we,width:je,height:tt,scrollY:ct,timestamp:Date.now()},Ae=[...e,Ue];n(Ae),R(new Set([Ue.id])),a(null)};window.addEventListener("mousemove",kt),window.addEventListener("mouseup",Xe)}else{K.shiftKey||R(new Set),fe.current="select";let Ie=!1;const xt=kt=>{const Xe=Math.abs(kt.clientX-at),ot=Math.abs(kt.clientY-_t);if((Xe>4||ot>4)&&(Ie=!0),Ie){const U=Math.min(at,kt.clientX),J=Math.min(_t,kt.clientY);F({x:U,y:J,w:Math.abs(kt.clientX-at),h:Math.abs(kt.clientY-_t)})}},gt=kt=>{if(window.removeEventListener("mousemove",xt),window.removeEventListener("mouseup",gt),fe.current=null,Ie){const Xe=Math.min(at,kt.clientX),ot=Math.min(_t,kt.clientY)+ct,U=Math.abs(kt.clientX-at),J=Math.abs(kt.clientY-_t),we=new Set(K.shiftKey?T:new Set);for(const je of e)je.y-ct,je.x+je.width>Xe&&je.x<Xe+U&&je.y+je.height>ot&&je.y<ot+J&&we.add(je.id);R(we)}F(null)};window.addEventListener("mousemove",xt),window.addEventListener("mouseup",gt)}},[i,p,e,n,T]),Le=_.useCallback((K,De)=>{var Ue;if(K.button!==0)return;const ct=K.target;if(ct.closest(`.${ze.handle}`)||ct.closest(`.${ze.deleteButton}`))return;K.preventDefault(),K.stopPropagation();let at;K.shiftKey?(at=new Set(T),at.has(De)?at.delete(De):at.add(De)):T.has(De)?at=new Set(T):at=new Set([De]),R(at),(at.size!==T.size||[...at].some(Ae=>!T.has(Ae)))&&((Ue=z.current)==null||Ue.call(z,at,K.shiftKey));const Ie=K.clientX,xt=K.clientY,gt=new Map;for(const Ae of e)at.has(Ae.id)&&gt.set(Ae.id,{x:Ae.x,y:Ae.y});fe.current="move",d==null||d(!0);let kt=!1,Xe=!1,ot=e,U=0,J=0;const we=new Map;for(const Ae of e)gt.has(Ae.id)&&we.set(Ae.id,{w:Ae.width,h:Ae.height});const je=Ae=>{var rn;const ye=Ae.clientX-Ie,st=Ae.clientY-xt;if((Math.abs(ye)>2||Math.abs(st)>2)&&(kt=!0),!kt)return;if(Ae.altKey&&!Xe){Xe=!0;const ft=[];for(const Ht of e)gt.has(Ht.id)&&ft.push({...Ht,id:wx(),timestamp:Date.now()});ot=[...e,...ft]}let We=1/0,nt=1/0,Re=-1/0,Je=-1/0;for(const[ft,Ht]of gt){const dn=we.get(ft);dn&&(We=Math.min(We,Ht.x+ye),nt=Math.min(nt,Ht.y+st),Re=Math.max(Re,Ht.x+ye+dn.w),Je=Math.max(Je,Ht.y+st+dn.h))}const bt={x:We,y:nt,width:Re-We,height:Je-nt},{dx:vt,dy:Ke,guides:Rt}=vx(bt,ot,new Set(gt.keys()),void 0,y);le(Rt);const wt=ye+vt,mt=st+Ke;U=wt,J=mt,n(ot.map(ft=>{const Ht=gt.get(ft.id);return Ht?{...ft,x:Math.max(0,Ht.x+wt),y:Math.max(0,Ht.y+mt)}:ft})),(rn=ae.current)==null||rn.call(ae,wt,mt)},tt=()=>{var Ae;window.removeEventListener("mousemove",je),window.removeEventListener("mouseup",tt),fe.current=null,d==null||d(!1),le([]),(Ae=Q.current)==null||Ae.call(Q,U,J,kt)};window.addEventListener("mousemove",je),window.addEventListener("mouseup",tt)},[T,e,n,d]),Ze=_.useCallback((K,De,ct)=>{K.preventDefault(),K.stopPropagation();const at=e.find(we=>we.id===De);if(!at)return;R(new Set([De])),fe.current="resize",d==null||d(!0);const _t=K.clientX,Ie=K.clientY,xt=at.width,gt=at.height,kt=at.x,Xe=at.y,ot={left:ct.includes("w"),right:ct.includes("e"),top:ct.includes("n"),bottom:ct.includes("s")},U=we=>{const je=we.clientX-_t,tt=we.clientY-Ie;let Ue=xt,Ae=gt,ye=kt,st=Xe;ct.includes("e")&&(Ue=Math.max(Sl,xt+je)),ct.includes("w")&&(Ue=Math.max(Sl,xt-je),ye=kt+xt-Ue),ct.includes("s")&&(Ae=Math.max(Sl,gt+tt)),ct.includes("n")&&(Ae=Math.max(Sl,gt-tt),st=Xe+gt-Ae);const We={x:ye,y:st,width:Ue,height:Ae},{dx:nt,dy:Re,guides:Je}=vx(We,xe.current,new Set([De]),ot,y);le(Je),nt!==0&&(ot.right?Ue+=nt:ot.left&&(ye+=nt,Ue-=nt)),Re!==0&&(ot.bottom?Ae+=Re:ot.top&&(st+=Re,Ae-=Re)),n(xe.current.map(bt=>bt.id===De?{...bt,x:ye,y:st,width:Ue,height:Ae}:bt)),V({x:we.clientX+12,y:we.clientY+12,text:`${Math.round(Ue)} × ${Math.round(Ae)}`})},J=()=>{window.removeEventListener("mousemove",U),window.removeEventListener("mouseup",J),V(null),fe.current=null,d==null||d(!1),le([])};window.addEventListener("mousemove",U),window.addEventListener("mouseup",J)},[e,n,d]),Ve=_.useCallback(K=>{fe.current=null,O(De=>{const ct=new Set(De);return ct.add(K),ct}),R(De=>{const ct=new Set(De);return ct.delete(K),ct}),Ft(()=>{n(xe.current.filter(De=>De.id!==K)),O(De=>{const ct=new Set(De);return ct.delete(K),ct})},180)},[n]),ht={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Tt=_.useCallback(K=>{const De=e.find(ct=>ct.id===K);De&&(ne.current=!!De.text,pe(K),Fe(!1))},[e]),Ct=_.useCallback(()=>{ue&&(Fe(!0),Ft(()=>{pe(null),Fe(!1)},150))},[ue]);_.useEffect(()=>{u&&ue&&Ct()},[u]);const lt=_.useCallback(K=>{ue&&(n(e.map(De=>De.id===ue?{...De,text:K.trim()||void 0}:De)),Ct())},[ue,e,n,Ct]),$t=typeof window<"u"?window.scrollY:0,pt=["nw","ne","se","sw"],qt=A?"#f97316":"#3c82f7",Kt=[{dir:"n",cls:ze.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:qt})})},{dir:"e",cls:ze.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:qt})})},{dir:"s",cls:ze.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:qt})})},{dir:"w",cls:ze.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:qt})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:I,className:`${ze.overlay} ${c?"":ze.light} ${i?ze.placing:""} ${p?ze.passthrough:""} ${u?ze.overlayExiting:""} ${A?ze.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:me,children:e.map(K=>{var _t;const De=T.has(K.id),ct=((_t=ia[K.type])==null?void 0:_t.label)||K.type,at=K.y-$t;return l.jsxs("div",{"data-design-placement":K.id,className:`${ze.placement} ${De?ze.selected:""} ${de.has(K.id)?ze.exiting:""}`,style:{left:K.x,top:at,width:K.width,height:K.height,position:"fixed"},onMouseDown:Ie=>Le(Ie,K.id),onDoubleClick:()=>Tt(K.id),children:[l.jsx("span",{className:ze.placementLabel,children:ct}),l.jsx("span",{className:`${ze.placementAnnotation} ${K.text?ze.annotationVisible:""}`,children:(K.text&&se.current.set(K.id,K.text),K.text||se.current.get(K.id)||"")}),l.jsx("div",{className:ze.placementContent,children:l.jsx(j8,{type:K.type,width:K.width,height:K.height,text:K.text})}),l.jsx("div",{className:ze.deleteButton,onMouseDown:Ie=>Ie.stopPropagation(),onClick:()=>Ve(K.id),children:"✕"}),pt.map(Ie=>l.jsx("div",{className:`${ze.handle} ${ze[`handle${Ie.charAt(0).toUpperCase()}${Ie.slice(1)}`]}`,onMouseDown:xt=>Ze(xt,K.id,Ie)},Ie)),Kt.map(({dir:Ie,cls:xt,arrow:gt})=>l.jsx("div",{className:`${ze.edgeHandle} ${xt}`,onMouseDown:kt=>Ze(kt,K.id,Ie),children:gt},Ie))]},K.id)})}),ue&&(()=>{var Xe,ot;const K=e.find(U=>U.id===ue);if(!K)return null;const De=K.y-$t,ct=K.x+K.width/2,at=De-8,_t=De+K.height+8,Ie=at>200,xt=_t<window.innerHeight-100,gt=Math.max(160,Math.min(window.innerWidth-160,ct));let kt;return Ie?kt={left:gt,bottom:window.innerHeight-at}:xt?kt={left:gt,top:_t}:kt={left:gt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(Gd,{element:((Xe=ia[K.type])==null?void 0:Xe.label)||K.type,placeholder:ht[K.type]||"Label or content text",initialValue:(ot=K.text)!=null?ot:"",submitLabel:ne.current?"Save":"Set",onSubmit:lt,onCancel:Ct,onDelete:ne.current?()=>{lt("")}:void 0,isExiting:Ne,lightMode:!c,style:kt})})(),P&&l.jsx("div",{className:ze.drawBox,style:{left:P.x,top:P.y,width:P.w,height:P.h},"data-feedback-toolbar":!0}),D&&l.jsx("div",{className:ze.selectBox,style:{left:D.x,top:D.y,width:D.w,height:D.h},"data-feedback-toolbar":!0}),Y&&l.jsx("div",{className:ze.sizeIndicator,style:{left:Y.x,top:Y.y},"data-feedback-toolbar":!0,children:Y.text}),X.map((K,De)=>l.jsx("div",{className:ze.guideLine,style:K.axis==="x"?{position:"fixed",left:K.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:K.pos-$t,right:0,height:1},"data-feedback-toolbar":!0},`${K.axis}-${K.pos}-${De}`))]})}function A8(e){if(!e)return"";const n=e.scrollTop>2,i=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${n?ze.fadeTop:""} ${i?ze.fadeBottom:""}`}var $="currentColor",Oe="0.5";function N8({type:e}){switch(e){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:$,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:$,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:$,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:$,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:$,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:$,strokeWidth:Oe})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:$,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:$,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:$,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:$,strokeWidth:Oe})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:$,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:$,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:$,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:$,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:$,strokeWidth:Oe,fill:$,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:Oe})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:$,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:$,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:$,strokeWidth:Oe})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:$,strokeWidth:Oe,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:$,strokeWidth:Oe,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:$,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:$,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:$,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:$,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:$,strokeWidth:Oe}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:$,strokeWidth:Oe,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:$,strokeWidth:Oe,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:$,strokeWidth:Oe})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:$,strokeWidth:Oe})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:$,strokeWidth:Oe,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:$,strokeWidth:Oe,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:$,strokeWidth:Oe}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:$,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:$,strokeWidth:Oe}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:$,strokeWidth:Oe}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:$,strokeWidth:Oe})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:$,strokeWidth:Oe,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:$,strokeWidth:Oe,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:$,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:$,opacity:".15",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:Oe})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:$,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:$,strokeWidth:Oe}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:$,strokeWidth:Oe,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:$,strokeWidth:Oe})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:$,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:$,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:$,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:Oe}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:$,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:$,strokeWidth:Oe,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:$,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:$,strokeWidth:Oe})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:$,strokeWidth:Oe}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:$,strokeWidth:Oe,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:$,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:$,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:$,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:$,strokeWidth:Oe})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:$,opacity:".2",stroke:$,strokeWidth:Oe}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:$,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:$,strokeWidth:Oe}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:$,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:$,strokeWidth:Oe})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:$,strokeWidth:Oe,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:$,strokeWidth:Oe,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:$,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:$,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:$,strokeWidth:Oe,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:$,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:$,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:$,opacity:".15",stroke:$,strokeWidth:Oe})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:$,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:$,opacity:".2",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:$,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:Oe,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:$,strokeWidth:Oe,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:$,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:$,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:$,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:$,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:$,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:$,strokeWidth:Oe}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:$,strokeWidth:Oe,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:$,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:$,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:$,strokeWidth:Oe})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:$,strokeWidth:Oe,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:$,strokeWidth:Oe})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:$,strokeWidth:Oe}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:$,strokeWidth:Oe,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:$,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:$,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:$,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:$,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Oe})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:$,strokeWidth:Oe}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:$,strokeWidth:Oe,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:$,strokeWidth:Oe}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:$,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:$,strokeWidth:Oe})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:$,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:$,strokeWidth:Oe,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:$,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:$,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:$,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:$,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:$,opacity:".08",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:$,strokeWidth:Oe,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:$,strokeWidth:Oe,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:$,strokeWidth:Oe,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:$,strokeWidth:Oe,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:$,strokeWidth:Oe,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:$,strokeWidth:Oe,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:$,strokeWidth:Oe}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:$,strokeWidth:Oe,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:$,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:$,strokeWidth:Oe,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:$,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:$,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:$,strokeWidth:Oe}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:$,opacity:".2"})]});default:return null}}function D8({activeType:e,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${ze.placeScroll} ${c||""}`,children:l2.map(d=>l.jsxs("div",{className:ze.paletteSection,children:[l.jsx("div",{className:ze.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${ze.paletteItem} ${e===h.type?ze.active:""} ${u?ze.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:ze.paletteItemIcon,children:l.jsx(N8,{type:h.type})}),l.jsx("span",{className:ze.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function R8({value:e,suffix:n}){const[i,a]=_.useState(null),[c,u]=_.useState(n),[d,h]=_.useState("up"),p=_.useRef(e),y=_.useRef(n),g=_.useRef(),x=i!==null&&c!==n;return _.useEffect(()=>{if(e!==p.current){if(e===0){p.current=e,y.current=n,a(null);return}h(e>p.current?"up":"down"),a(p.current),u(y.current),p.current=e,y.current=n,clearTimeout(g.current),g.current=Ft(()=>a(null),250)}else y.current=n},[e,n]),i===null?l.jsxs(l.Fragment,{children:[e,n?` ${n}`:""]}):x?l.jsxs("span",{className:ze.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[e," ",n]}),l.jsxs("span",{className:`${ze.rollingNum} ${d==="up"?ze.exitUp:ze.exitDown}`,children:[i," ",c]},`o${i}-${e}`),l.jsxs("span",{className:`${ze.rollingNum} ${d==="up"?ze.enterUp:ze.enterDown}`,children:[e," ",n]},`n${e}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:ze.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:e}),l.jsx("span",{className:`${ze.rollingNum} ${d==="up"?ze.exitUp:ze.exitDown}`,children:i},`o${i}-${e}`),l.jsx("span",{className:`${ze.rollingNum} ${d==="up"?ze.enterUp:ze.enterDown}`,children:e},`n${e}`)]}),n?` ${n}`:""]})}function B8({activeType:e,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:y,blankCanvas:g,onBlankCanvasChange:x,wireframePurpose:w,onWireframePurposeChange:C,Tooltip:j}){const[A,T]=_.useState(!1),[R,P]=_.useState("exit"),[L,D]=_.useState(!1),[F,Y]=_.useState(!0),V=_.useRef(0),X=_.useRef(""),le=_.useRef(0),ue=_.useRef(),pe=_.useRef(null),[Ne,Fe]=_.useState("");_.useEffect(()=>(u?(T(!0),clearTimeout(ue.current),cancelAnimationFrame(le.current),le.current=Al(()=>{le.current=Al(()=>{P("enter")})})):(cancelAnimationFrame(le.current),P("exit"),clearTimeout(ue.current),ue.current=Ft(()=>{T(!1),d==null||d()},200)),()=>cancelAnimationFrame(le.current)),[u]);const ne=h>0||a>0,de=h+a;return de>0&&(V.current=de,X.current=g?de===1?"Component":"Components":de===1?"Change":"Changes"),_.useEffect(()=>{if(ne)L?Y(!1):(Y(!0),D(!0),Al(()=>{Al(()=>{Y(!1)})}));else{Y(!0);const O=Ft(()=>D(!1),300);return()=>clearTimeout(O)}},[ne]),_.useEffect(()=>{if(!A)return;const O=pe.current;if(!O)return;const se=()=>Fe(A8(O));se(),O.addEventListener("scroll",se,{passive:!0});const I=new ResizeObserver(se);return I.observe(O),()=>{O.removeEventListener("scroll",se),I.disconnect()}},[A]),A?l.jsxs("div",{className:`${ze.palette} ${ze[R]} ${i?"":ze.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:O=>O.stopPropagation(),onMouseDown:O=>O.stopPropagation(),onTransitionEnd:O=>{O.target===O.currentTarget&&(u||(clearTimeout(ue.current),T(!1),P("exit"),d==null||d()))},children:[l.jsxs("div",{className:ze.paletteHeader,children:[l.jsx("div",{className:ze.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:ze.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${ze.canvasToggle} ${g?ze.active:""}`,onClick:()=>x(!g),children:[l.jsx("span",{className:ze.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:ze.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${ze.wireframePurposeWrap} ${g?"":ze.collapsed}`,children:l.jsx("div",{className:ze.wireframePurposeInner,children:l.jsx("textarea",{className:ze.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:w,onChange:O=>C(O.target.value),rows:2})})}),l.jsx(D8,{activeType:e,onSelect:n,onDragStart:y,scrollRef:pe,fadeClass:Ne,blankCanvas:g}),L&&l.jsx("div",{className:`${ze.paletteFooterWrap} ${F?ze.footerHidden:""}`,children:l.jsx("div",{className:ze.paletteFooterInner,children:l.jsx("div",{className:ze.paletteFooterInnerContent,children:l.jsxs("div",{className:ze.paletteFooter,children:[l.jsx("span",{className:ze.paletteFooterCount,children:l.jsx(R8,{value:V.current,suffix:X.current})}),l.jsx("button",{className:ze.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function Ll(e){if(e.parentElement)return e.parentElement;const n=e.getRootNode();return n instanceof ShadowRoot?n.host:null}function oi(e,n){let i=e;for(;i;){if(i.matches(n))return i;i=Ll(i)}return null}function L8(e,n=4){const i=[];let a=e,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(y=>y.length>2&&!y.match(/^[a-z]{1,2}$/)&&!y.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=Ll(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function Nl(e){var a,c,u,d,h,p,y,g;const n=L8(e);if(e.dataset.element)return{name:e.dataset.element,path:n};const i=e.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=oi(e,"svg");if(x){const w=Ll(x);if(w instanceof HTMLElement)return{name:`graphic in ${Nl(w).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=Ll(e);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const w=(a=x.textContent)==null?void 0:a.trim();return{name:w?`icon in "${w}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=e.textContent)==null?void 0:c.trim(),w=e.getAttribute("aria-label");return w?{name:`button [${w}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=e.textContent)==null?void 0:u.trim(),w=e.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:w?{name:`link to ${w.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=e.getAttribute("type")||"text",w=e.getAttribute("placeholder"),C=e.getAttribute("name");return w?{name:`input "${w}"`,path:n}:C?{name:`input [${C}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=e.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=e.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=e.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(y=e.textContent)==null?void 0:y.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(g=e.textContent)==null?void 0:g.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=e.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=e.className,w=e.getAttribute("role"),C=e.getAttribute("aria-label");if(C)return{name:`${i} [${C}]`,path:n};if(w)return{name:`${w}`,path:n};if(typeof x=="string"&&x){const j=x.split(/[\s_-]+/).map(A=>A.replace(/[A-Z0-9]{5,}.*$/,"")).filter(A=>A.length>2&&!/^[a-z]{1,2}$/.test(A)).slice(0,2);if(j.length>0)return{name:j.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function Mc(e){var u,d,h;const n=[],i=(u=e.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=e.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=e.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function pd(e){const n=Ll(e);if(!n)return"";const c=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(n.children)).filter(g=>g!==e&&g instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(g=>{var j;const x=g.tagName.toLowerCase(),w=g.className;let C="";if(typeof w=="string"&&w){const A=w.split(/\s+/).map(T=>T.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(T=>T.length>2&&!/^[a-z]{1,2}$/.test(T));A&&(C=`.${A}`)}if(x==="button"||x==="a"){const A=(j=g.textContent)==null?void 0:j.trim().slice(0,15);if(A)return`${x}${C} "${A}"`}return`${x}${C}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const g=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));g&&(h=`.${g}`)}const p=n.children.length,y=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+y}function Ec(e){const n=e.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var c2=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),O8=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),z8=new Set(["input","textarea","select"]),$8=new Set(["img","video","canvas","svg"]),I8=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function _d(e){if(typeof window>"u")return{};const n=window.getComputedStyle(e),i={},a=e.tagName.toLowerCase();let c;O8.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&e.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:z8.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:$8.has(a)?c=["width","height","objectFit","borderRadius"]:I8.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!c2.has(h)&&(i[u]=h)}return i}var P8=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function gd(e){if(typeof window>"u")return"";const n=window.getComputedStyle(e),i=[];for(const a of P8){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!c2.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function H8(e){if(!e)return;const n={},i=e.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function yd(e){const n=[],i=e.getAttribute("role"),a=e.getAttribute("aria-label"),c=e.getAttribute("aria-describedby"),u=e.getAttribute("tabindex"),d=e.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),e.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function xd(e){const n=[];let i=e;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=Ll(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var U8=new Set(["nav","header","main","section","article","footer","aside"]),_p={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Sx={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},V8=new Set(["script","style","noscript","link","meta"]),Y8=40;function u2(e){let n=e;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Yr(e){const n=e.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className=="string"){const c=e.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=e.parentElement;if(i){const c=Array.from(i.children).indexOf(e)+1;return`${i===document.body?"body":Yr(i)} > ${n}:nth-child(${c})`}return n}function qd(e){var d;const n=e.tagName.toLowerCase(),i=e.getAttribute("aria-label");if(i)return i;const a=e.getAttribute("role");if(a&&_p[a])return _p[a];if(Sx[n])return Sx[n];const c=e.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=Nl(e);return u.charAt(0).toUpperCase()+u.slice(1)}function d2(e){const n=e.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function f2(e){var a;const n=(a=e.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function W8(){const e=document.querySelector("main")||document.body,n=Array.from(e.children);let i=n;e!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(V8.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<Y8)return;const y=U8.has(d),g=c.getAttribute("role")&&_p[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!y&&!g&&!x)return;const w=window.scrollY,C=u2(c),j={x:p.x,y:C?p.y:p.y+w,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:qd(c),tagName:d,selector:Yr(c),role:c.getAttribute("role"),className:d2(c),textSnippet:f2(c),originalRect:j,currentRect:{...j},originalIndex:u,isFixed:C})}),a}function F8(e){const n=window.scrollY,i=e.getBoundingClientRect(),a=u2(e),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=e.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:qd(e),tagName:e.tagName.toLowerCase(),selector:Yr(e),role:e.getAttribute("role"),className:d2(e),textSnippet:f2(e),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var Cx={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},kx=["nw","n","ne","e","se","s","sw","w"],bd=24,jx=16,vd=5;function Mx(e,n,i,a){let c=1/0,u=1/0;const d=e.x,h=e.x+e.width,p=e.x+e.width/2,y=e.y,g=e.y+e.height,x=e.y+e.height/2,w=[];for(const V of n)i.has(V.id)||w.push(V.currentRect);a&&w.push(...a);for(const V of w){const X=V.x,le=V.x+V.width,ue=V.x+V.width/2,pe=V.y,Ne=V.y+V.height,Fe=V.y+V.height/2;for(const ne of[d,h,p])for(const de of[X,le,ue]){const O=de-ne;Math.abs(O)<vd&&Math.abs(O)<Math.abs(c)&&(c=O)}for(const ne of[y,g,x])for(const de of[pe,Ne,Fe]){const O=de-ne;Math.abs(O)<vd&&Math.abs(O)<Math.abs(u)&&(u=O)}}const C=Math.abs(c)<vd?c:0,j=Math.abs(u)<vd?u:0,A=[],T=new Set,R=d+C,P=h+C,L=p+C,D=y+j,F=g+j,Y=x+j;for(const V of w){const X=V.x,le=V.x+V.width,ue=V.x+V.width/2,pe=V.y,Ne=V.y+V.height,Fe=V.y+V.height/2;for(const ne of[X,ue,le])for(const de of[R,L,P])if(Math.abs(de-ne)<.5){const O=`x:${Math.round(ne)}`;T.has(O)||(T.add(O),A.push({axis:"x",pos:ne}))}for(const ne of[pe,Fe,Ne])for(const de of[D,Y,F])if(Math.abs(de-ne)<.5){const O=`y:${Math.round(ne)}`;T.has(O)||(T.add(O),A.push({axis:"y",pos:ne}))}}return{dx:C,dy:j,guides:A}}var X8=new Set(["script","style","noscript","link","meta","br","hr"]);function Ex(e){let n=e;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(X8.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=jx&&i.height>=jx)return n;n=n.parentElement}return null}function G8({rearrangeState:e,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:y,onDragEnd:g,clearSignal:x}){const{sections:w}=e,C=_.useRef(e);C.current=e;const[j,A]=_.useState(new Set),[T,R]=_.useState(!1),P=_.useRef(x);_.useEffect(()=>{x!==void 0&&x!==P.current&&(P.current=x,w.length>0&&R(!0))},[x,w.length]);const L=_.useRef(p);_.useEffect(()=>{p!==L.current&&(L.current=p,A(new Set))},[p]);const[D,F]=_.useState(null),[Y,V]=_.useState(!1),X=_.useRef(!1),le=_.useCallback(U=>{const J=w.find(we=>we.id===U);J&&(X.current=!!J.note,F(U),V(!1))},[w]),ue=_.useCallback(()=>{D&&(V(!0),Ft(()=>{F(null),V(!1)},150))},[D]),pe=_.useCallback(U=>{D&&(n({...e,sections:w.map(J=>J.id===D?{...J,note:U.trim()||void 0}:J)}),ue())},[D,w,e,n,ue]);_.useEffect(()=>{a&&D&&ue()},[a]);const[Ne,Fe]=_.useState(new Set),ne=_.useRef(new Map),[de,O]=_.useState(null),[se,I]=_.useState(null),[fe,xe]=_.useState([]),[z,ae]=_.useState(0),Q=_.useRef(null),be=_.useRef(new Set),Me=_.useRef(new Map),[me,Le]=_.useState(new Map),[Ze,Ve]=_.useState(new Map),ht=_.useRef(new Set),Tt=_.useRef(new Map),Ct=_.useRef(h);Ct.current=h;const lt=_.useRef(y);lt.current=y;const $t=_.useRef(g);$t.current=g,_.useEffect(()=>{u&&A(new Set)},[u]);const[pt,qt]=_.useState(()=>!e.sections.some(U=>{const J=U.originalRect,we=U.currentRect;return Math.abs(J.x-we.x)>1||Math.abs(J.y-we.y)>1||Math.abs(J.width-we.width)>1||Math.abs(J.height-we.height)>1}));_.useEffect(()=>{if(!pt){const U=Ft(()=>qt(!0),380);return()=>clearTimeout(U)}},[]);const Kt=_.useRef(new Set);_.useEffect(()=>{Kt.current=new Set(w.map(U=>U.selector))},[w]),_.useEffect(()=>{const U=()=>ae(window.scrollY);return U(),window.addEventListener("scroll",U,{passive:!0}),window.addEventListener("resize",U,{passive:!0}),()=>{window.removeEventListener("scroll",U),window.removeEventListener("resize",U)}},[]),_.useEffect(()=>{const U=J=>{if(Q.current){O(null);return}const we=document.elementFromPoint(J.clientX,J.clientY);if(!we){O(null);return}if(we.closest("[data-feedback-toolbar]")){O(null);return}if(we.closest("[data-design-placement]")){O(null);return}if(we.closest("[data-annotation-popup]")){O(null);return}const je=Ex(we);if(!je){O(null);return}for(const Ue of Kt.current)try{const Ae=document.querySelector(Ue);if(Ae&&(Ae===je||je.contains(Ae))){O(null);return}}catch{}const tt=je.getBoundingClientRect();O({x:tt.x,y:tt.y,w:tt.width,h:tt.height})};return document.addEventListener("mousemove",U,{passive:!0}),()=>document.removeEventListener("mousemove",U)},[w]),_.useEffect(()=>{const U=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=U}},[]),_.useEffect(()=>{const U=J=>{var Ae,ye,st,We;if(Q.current||J.button!==0)return;const we=J.target;if(!we||we.closest("[data-feedback-toolbar]")||we.closest("[data-design-placement]")||we.closest("[data-annotation-popup]"))return;const je=Ex(we);let tt=!1;if(je)for(const nt of Kt.current)try{const Re=document.querySelector(nt);if(Re&&(Re===je||je.contains(Re))){tt=!0;break}}catch{}const Ue=!!(J.shiftKey||J.metaKey||J.ctrlKey);if(je&&!tt){J.preventDefault(),J.stopPropagation();const nt=F8(je),Re=[...w,nt],Je=[...e.originalOrder,nt.id];n({...e,sections:Re,originalOrder:Je});const bt=new Set([nt.id]);A(bt),(Ae=Ct.current)==null||Ae.call(Ct,bt,Ue),O(null);const vt=J.clientX,Ke=J.clientY,Rt={x:nt.currentRect.x,y:nt.currentRect.y};nt.originalRect;let wt=!1,mt=0,rn=0;Q.current="move";const ft=dn=>{var zt;const Ot=dn.clientX-vt,St=dn.clientY-Ke;if(!wt&&(Math.abs(Ot)>2||Math.abs(St)>2)&&(wt=!0),!wt)return;const fn={x:Rt.x+Ot,y:Rt.y+St,width:nt.currentRect.width,height:nt.currentRect.height},ls=Mx(fn,Re,new Set([nt.id]),d);xe(ls.guides);const Qt=Ot+ls.dx,pn=St+ls.dy;mt=Qt,rn=pn;const Jt=document.querySelector(`[data-rearrange-section="${nt.id}"]`);Jt&&(Jt.style.transform=`translate(${Qt}px, ${pn}px)`),Le(new Map([[nt.id,{x:Rt.x+Qt,y:Rt.y+pn,width:nt.currentRect.width,height:nt.currentRect.height}]])),(zt=lt.current)==null||zt.call(lt,Qt,pn)},Ht=()=>{var Ot;window.removeEventListener("mousemove",ft),window.removeEventListener("mouseup",Ht),Q.current=null,xe([]),Le(new Map);const dn=document.querySelector(`[data-rearrange-section="${nt.id}"]`);dn&&(dn.style.transform=""),wt&&n({...e,sections:Re.map(St=>St.id===nt.id?{...St,currentRect:{...St.currentRect,x:Math.max(0,Rt.x+mt),y:Math.max(0,Rt.y+rn)}}:St),originalOrder:Je}),(Ot=$t.current)==null||Ot.call($t,mt,rn,wt)};window.addEventListener("mousemove",ft),window.addEventListener("mouseup",Ht)}else if(tt&&je){J.preventDefault();for(const nt of w)try{const Re=document.querySelector(nt.selector);if(Re&&Re===je){const Je=new Set([nt.id]);A(Je),(ye=Ct.current)==null||ye.call(Ct,Je,Ue);return}}catch{}Ue||(A(new Set),(st=Ct.current)==null||st.call(Ct,new Set,!1))}else Ue||(A(new Set),(We=Ct.current)==null||We.call(Ct,new Set,!1))};return document.addEventListener("mousedown",U,!0),()=>document.removeEventListener("mousedown",U,!0)},[w,e,n]),_.useEffect(()=>{const U=J=>{const we=J.target;if(!(we.tagName==="INPUT"||we.tagName==="TEXTAREA"||we.isContentEditable)){if((J.key==="Backspace"||J.key==="Delete")&&j.size>0){J.preventDefault();const je=new Set(j);Fe(tt=>{const Ue=new Set(tt);for(const Ae of je)Ue.add(Ae);return Ue}),A(new Set),Ft(()=>{const tt=C.current;n({...tt,sections:tt.sections.filter(Ue=>!je.has(Ue.id)),originalOrder:tt.originalOrder.filter(Ue=>!je.has(Ue))}),Fe(Ue=>{const Ae=new Set(Ue);for(const ye of je)Ae.delete(ye);return Ae})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(J.key)&&j.size>0){J.preventDefault();const je=J.shiftKey?20:1,tt=J.key==="ArrowLeft"?-je:J.key==="ArrowRight"?je:0,Ue=J.key==="ArrowUp"?-je:J.key==="ArrowDown"?je:0;n({...e,sections:w.map(Ae=>j.has(Ae.id)?{...Ae,currentRect:{...Ae.currentRect,x:Math.max(0,Ae.currentRect.x+tt),y:Math.max(0,Ae.currentRect.y+Ue)}}:Ae)});return}J.key==="Escape"&&j.size>0&&A(new Set)}};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[j,w,e,n]);const K=_.useCallback((U,J)=>{var vt;if(U.button!==0)return;const we=U.target;if(we.closest(`.${ze.handle}`)||we.closest(`.${ze.deleteButton}`))return;U.preventDefault(),U.stopPropagation();let je;U.shiftKey||U.metaKey||U.ctrlKey?(je=new Set(j),je.has(J)?je.delete(J):je.add(J)):j.has(J)?je=new Set(j):je=new Set([J]),A(je),(je.size!==j.size||[...je].some(Ke=>!j.has(Ke)))&&((vt=Ct.current)==null||vt.call(Ct,je,!!(U.shiftKey||U.metaKey||U.ctrlKey)));const Ue=U.clientX,Ae=U.clientY,ye=new Map;for(const Ke of w)je.has(Ke.id)&&ye.set(Ke.id,{x:Ke.currentRect.x,y:Ke.currentRect.y});Q.current="move";let st=!1,We=0,nt=0;const Re=new Map;for(const Ke of w)if(je.has(Ke.id)){const Rt=document.querySelector(`[data-rearrange-section="${Ke.id}"]`);Re.set(Ke.id,{outlineEl:Rt,curW:Ke.currentRect.width,curH:Ke.currentRect.height})}const Je=Ke=>{var ls;const Rt=Ke.clientX-Ue,wt=Ke.clientY-Ae;if(Rt===0&&wt===0)return;st=!0;let mt=1/0,rn=1/0,ft=-1/0,Ht=-1/0;for(const[Qt,{curW:pn,curH:Jt}]of Re){const zt=ye.get(Qt);if(!zt)continue;const tn=zt.x+Rt,Ge=zt.y+wt;mt=Math.min(mt,tn),rn=Math.min(rn,Ge),ft=Math.max(ft,tn+pn),Ht=Math.max(Ht,Ge+Jt)}const dn=Mx({x:mt,y:rn,width:ft-mt,height:Ht-rn},w,je,d),Ot=Rt+dn.dx,St=wt+dn.dy;We=Ot,nt=St,xe(dn.guides);for(const[,{outlineEl:Qt}]of Re)Qt&&(Qt.style.transform=`translate(${Ot}px, ${St}px)`);const fn=new Map;for(const[Qt,{curW:pn,curH:Jt}]of Re){const zt=ye.get(Qt);if(zt){const tn={x:Math.max(0,zt.x+Ot),y:Math.max(0,zt.y+St),width:pn,height:Jt};fn.set(Qt,tn)}}Le(fn),(ls=lt.current)==null||ls.call(lt,Ot,St)},bt=Ke=>{var Rt,wt;window.removeEventListener("mousemove",Je),window.removeEventListener("mouseup",bt),Q.current=null,xe([]),Le(new Map);for(const[,{outlineEl:mt}]of Re)mt&&(mt.style.transform="");if(st){const mt=Ke.clientX-Ue,rn=Ke.clientY-Ae;if(Math.abs(mt)<5&&Math.abs(rn)<5)n({...e,sections:w.map(ft=>{const Ht=ye.get(ft.id);return Ht?{...ft,currentRect:{...ft.currentRect,x:Ht.x,y:Ht.y}}:ft})});else{n({...e,sections:w.map(ft=>{const Ht=ye.get(ft.id);return Ht?{...ft,currentRect:{...ft.currentRect,x:Math.max(0,Ht.x+We),y:Math.max(0,Ht.y+nt)}}:ft})}),(Rt=$t.current)==null||Rt.call($t,We,nt,!0);return}}(wt=$t.current)==null||wt.call($t,0,0,!1)};window.addEventListener("mousemove",Je),window.addEventListener("mouseup",bt)},[j,w,e,n]),De=_.useCallback((U,J,we)=>{U.preventDefault(),U.stopPropagation();const je=w.find(Je=>Je.id===J);if(!je)return;A(new Set([J])),Q.current="resize";const tt=U.clientX,Ue=U.clientY,Ae={...je.currentRect};je.originalRect;const ye=Ae.width/Ae.height;let st={...Ae};const We=document.querySelector(`[data-rearrange-section="${J}"]`),nt=Je=>{const bt=Je.clientX-tt,vt=Je.clientY-Ue;let Ke=Ae.x,Rt=Ae.y,wt=Ae.width,mt=Ae.height;if(we.includes("e")&&(wt=Math.max(bd,Ae.width+bt)),we.includes("w")&&(wt=Math.max(bd,Ae.width-bt),Ke=Ae.x+Ae.width-wt),we.includes("s")&&(mt=Math.max(bd,Ae.height+vt)),we.includes("n")&&(mt=Math.max(bd,Ae.height-vt),Rt=Ae.y+Ae.height-mt),Je.shiftKey)if(we.length===2){const ft=Math.abs(wt-Ae.width),Ht=Math.abs(mt-Ae.height);ft>Ht?mt=wt/ye:wt=mt*ye,we.includes("w")&&(Ke=Ae.x+Ae.width-wt),we.includes("n")&&(Rt=Ae.y+Ae.height-mt)}else we==="e"||we==="w"?mt=wt/ye:wt=mt*ye,we==="w"&&(Ke=Ae.x+Ae.width-wt),we==="n"&&(Rt=Ae.y+Ae.height-mt);st={x:Ke,y:Rt,width:wt,height:mt},We&&(We.style.left=`${Ke}px`,We.style.top=`${Rt-z}px`,We.style.width=`${wt}px`,We.style.height=`${mt}px`),I({x:Je.clientX+12,y:Je.clientY+12,text:`${Math.round(wt)} × ${Math.round(mt)}`}),Le(new Map([[J,st]]))},Re=()=>{window.removeEventListener("mousemove",nt),window.removeEventListener("mouseup",Re),I(null),Q.current=null,Le(new Map),n({...e,sections:w.map(Je=>Je.id===J?{...Je,currentRect:st}:Je)})};window.addEventListener("mousemove",nt),window.addEventListener("mouseup",Re)},[w,e,n,z]),ct=_.useCallback(U=>{Fe(J=>{const we=new Set(J);return we.add(U),we}),A(J=>{const we=new Set(J);return we.delete(U),we}),Ft(()=>{const J=C.current;n({...J,sections:J.sections.filter(we=>we.id!==U),originalOrder:J.originalOrder.filter(we=>we!==U)}),Fe(we=>{const je=new Set(we);return je.delete(U),je})},180)},[n]),at=U=>{const J=U.originalRect,we=U.currentRect;return Math.abs(J.x-we.x)>1||Math.abs(J.y-we.y)>1||Math.abs(J.width-we.width)>1||Math.abs(J.height-we.height)>1},_t=U=>{const J=U.originalRect,we=U.currentRect;return Math.abs(J.x-we.x)>1||Math.abs(J.y-we.y)>1},Ie=U=>{const J=U.originalRect,we=U.currentRect;return Math.abs(J.width-we.width)>1||Math.abs(J.height-we.height)>1};for(const U of w)Me.current.has(U.id)||(_t(U)?Me.current.set(U.id,"move"):Ie(U)&&Me.current.set(U.id,"resize"));for(const U of Me.current.keys())w.some(J=>J.id===U)||Me.current.delete(U);const xt=w.filter(U=>{try{if(Ne.has(U.id)||j.has(U.id))return!0;const J=document.querySelector(U.selector);if(!J)return!1;const we=J.getBoundingClientRect(),je=U.originalRect;return Math.abs(we.width-je.width)+Math.abs(we.height-je.height)<200}catch{return!1}}),gt=xt.filter(U=>at(U)),kt=xt.filter(U=>!at(U)),Xe=new Set(gt.map(U=>U.id));for(const U of be.current)Xe.has(U)||be.current.delete(U);const ot=[...Xe].sort().join(",");for(const U of gt)Tt.current.set(U.id,{currentRect:U.currentRect,originalRect:U.originalRect,isFixed:U.isFixed});return _.useEffect(()=>{const U=ht.current;ht.current=Xe;const J=new Map;for(const we of U)if(!Xe.has(we)){if(!w.some(tt=>tt.id===we))continue;const je=Tt.current.get(we);je&&(J.set(we,{orig:je.originalRect,target:je.currentRect,isFixed:je.isFixed}),Tt.current.delete(we))}if(J.size>0){Ve(je=>{const tt=new Map(je);for(const[Ue,Ae]of J)tt.set(Ue,Ae);return tt});const we=Ft(()=>{Ve(je=>{const tt=new Map(je);for(const Ue of J.keys())tt.delete(Ue);return tt})},250);return()=>clearTimeout(we)}},[ot,w]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${ze.rearrangeOverlay} ${i?"":ze.light} ${a?ze.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[de&&l.jsx("div",{className:ze.hoverHighlight,style:{left:de.x,top:de.y,width:de.w,height:de.h}}),kt.map(U=>{const J=U.currentRect,we=U.isFixed?J.y:J.y-z,je=Cx,tt=j.has(U.id);return l.jsxs("div",{"data-rearrange-section":U.id,className:`${ze.sectionOutline} ${tt?ze.selected:""} ${T||a||Ne.has(U.id)?ze.exiting:""}`,style:{left:J.x,top:we,width:J.width,height:J.height,borderColor:je.border,backgroundColor:je.bg,...pt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Ue=>K(Ue,U.id),onDoubleClick:()=>le(U.id),children:[l.jsx("span",{className:ze.sectionLabel,style:{backgroundColor:je.pill},children:U.label}),l.jsx("span",{className:`${ze.sectionAnnotation} ${U.note?ze.annotationVisible:""}`,children:(U.note&&ne.current.set(U.id,U.note),U.note||ne.current.get(U.id)||"")}),l.jsxs("span",{className:ze.sectionDimensions,children:[Math.round(J.width)," × ",Math.round(J.height)]}),l.jsx("div",{className:ze.deleteButton,onMouseDown:Ue=>Ue.stopPropagation(),onClick:()=>ct(U.id),children:"✕"}),kx.map(Ue=>l.jsx("div",{className:`${ze.handle} ${ze[`handle${Ue.charAt(0).toUpperCase()}${Ue.slice(1)}`]}`,onMouseDown:Ae=>De(Ae,U.id,Ue)},Ue))]},U.id)}),gt.map(U=>{const J=U.currentRect,we=U.isFixed?J.y:J.y-z,je=j.has(U.id),tt=_t(U),Ue=Ie(U);if(u&&!je)return null;const ye=!be.current.has(U.id);return ye&&be.current.add(U.id),l.jsxs("div",{"data-rearrange-section":U.id,className:`${ze.ghostOutline} ${je?ze.selected:""} ${T||a||Ne.has(U.id)?ze.exiting:""}`,style:{left:J.x,top:we,width:J.width,height:J.height,...pt?{}:{opacity:0,animation:"none",transition:"none"},...ye?{}:{animation:"none"}},onMouseDown:st=>K(st,U.id),onDoubleClick:()=>le(U.id),children:[l.jsx("span",{className:ze.sectionLabel,style:{backgroundColor:Cx.pill},children:U.label}),l.jsx("span",{className:`${ze.sectionAnnotation} ${U.note?ze.annotationVisible:""}`,children:(U.note&&ne.current.set(U.id,U.note),U.note||ne.current.get(U.id)||"")}),l.jsxs("span",{className:ze.sectionDimensions,children:[Math.round(J.width)," × ",Math.round(J.height)]}),l.jsx("div",{className:ze.deleteButton,onMouseDown:st=>st.stopPropagation(),onClick:()=>ct(U.id),children:"✕"}),kx.map(st=>l.jsx("div",{className:`${ze.handle} ${ze[`handle${st.charAt(0).toUpperCase()}${st.slice(1)}`]}`,onMouseDown:We=>De(We,U.id,st)},st)),l.jsx("span",{className:ze.ghostBadge,children:(()=>{const st=Me.current.get(U.id);if(tt&&Ue){const[We,nt]=st==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",We," ",l.jsxs("span",{className:ze.ghostBadgeExtra,children:["& ",nt]})]})}return`Suggested ${Ue?"Resize":"Move"}`})()})]},U.id)})]}),!u&&(()=>{const U=[];for(const J of gt){const we=me.get(J.id);U.push({id:J.id,orig:J.originalRect,target:we||J.currentRect,isFixed:J.isFixed,isSelected:j.has(J.id),isExiting:Ne.has(J.id)})}for(const[J,we]of me)if(!U.some(je=>je.id===J)){const je=w.find(tt=>tt.id===J);je&&U.push({id:J,orig:je.originalRect,target:we,isFixed:je.isFixed,isSelected:j.has(J)})}for(const[J,we]of Ze)U.some(je=>je.id===J)||U.push({id:J,orig:we.orig,target:we.target,isFixed:we.isFixed,isSelected:!1,isExiting:!0});return U.length===0?null:l.jsxs("svg",{className:`${ze.connectorSvg} ${T||a?ze.connectorExiting:""}`,children:[U.map(({id:J,orig:we,target:je,isFixed:tt,isSelected:Ue,isExiting:Ae})=>{const ye=we.x+we.width/2,st=(tt?we.y:we.y-z)+we.height/2,We=je.x+je.width/2,nt=(tt?je.y:je.y-z)+je.height/2,Re=We-ye,Je=nt-st,bt=Math.sqrt(Re*Re+Je*Je);if(bt<2)return null;const vt=Math.min(1,bt/40),Ke=Math.min(bt*.3,60),Rt=bt>0?-Je/bt:0,wt=bt>0?Re/bt:0,mt=(ye+We)/2+Rt*Ke,rn=(st+nt)/2+wt*Ke,ft=me.has(J),Ht=ft||Ue?1:.4,dn=ft||Ue?1:.5;return l.jsxs("g",{className:Ae?ze.connectorExiting:"",children:[l.jsx("path",{className:ze.connectorLine,d:`M ${ye} ${st} Q ${mt} ${rn} ${We} ${nt}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Ht*vt}),l.jsx("circle",{className:ze.connectorDot,cx:ye,cy:st,r:4*vt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:dn*vt,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:ze.connectorDot,cx:We,cy:nt,r:4*vt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:dn*vt,filter:"url(#connDotShadow)"})]},`conn-${J}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),D&&(()=>{var nt;const U=w.find(Re=>Re.id===D);if(!U)return null;const J=U.currentRect,we=U.isFixed?J.y:J.y-z,je=J.x+J.width/2,tt=we-8,Ue=we+J.height+8,Ae=tt>200,ye=Ue<window.innerHeight-100,st=Math.max(160,Math.min(window.innerWidth-160,je));let We;return Ae?We={left:st,bottom:window.innerHeight-tt}:ye?We={left:st,top:Ue}:We={left:st,top:Math.max(80,window.innerHeight/2-80)},l.jsx(Gd,{element:U.label,placeholder:"Add a note about this section",initialValue:(nt=U.note)!=null?nt:"",submitLabel:X.current?"Save":"Set",onSubmit:pe,onCancel:ue,onDelete:X.current?()=>{pe("")}:void 0,isExiting:Y,lightMode:!i,style:We})})(),se&&l.jsx("div",{className:ze.sizeIndicator,style:{left:se.x,top:se.y},"data-feedback-toolbar":!0,children:se.text}),fe.map((U,J)=>l.jsx("div",{className:ze.guideLine,style:U.axis==="x"?{position:"fixed",left:U.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:U.pos-z,width:"100vw",height:1}},`${U.axis}-${U.pos}-${J}`))]})}var gp=new Set(["script","style","noscript","link","meta","br","hr"]);function q8(){const e=document.querySelector("main")||document.body,n=[],i=Array.from(e.children),a=e!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||gp.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:qd(c),selector:Yr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||gp.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const y=h.getBoundingClientRect();y.height<10||y.width<10||n.push({label:qd(h),selector:Yr(h),top:y.top,bottom:y.bottom,left:y.left,right:y.right,area:y.width*y.height})}}}return n}function K8(e){const n=window.scrollY;return e.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function Q8(e){const n=window.scrollY,i=e.y-n,a=e.x;return{top:i,bottom:i+e.height,left:a,right:a+e.width,area:e.width*e.height}}function yp(e,n){const i=n?K8(n):q8(),a=Q8(e);let c=null,u=null,d=null,h=null,p=null;for(const j of i){if(Math.abs(j.left-a.left)<2&&Math.abs(j.top-a.top)<2&&Math.abs(j.right-j.left-e.width)<2&&Math.abs(j.bottom-j.top-e.height)<2)continue;j.left<=a.left+2&&j.right>=a.right-2&&j.top<=a.top+2&&j.bottom>=a.bottom-2&&j.area>a.area*1.5&&(!p||j.area<p._area)&&(p={label:j.label,selector:j.selector,_area:j.area});const A=a.right>j.left+5&&a.left<j.right-5,T=a.bottom>j.top+5&&a.top<j.bottom-5;if(A&&j.bottom<=a.top+5){const R=Math.round(a.top-j.bottom);(!c||R<c._dist)&&(c={label:j.label,selector:j.selector,gap:Math.max(0,R),_dist:R})}if(A&&j.top>=a.bottom-5){const R=Math.round(j.top-a.bottom);(!u||R<u._dist)&&(u={label:j.label,selector:j.selector,gap:Math.max(0,R),_dist:R})}if(T&&j.right<=a.left+5){const R=Math.round(a.left-j.right);(!d||R<d._dist)&&(d={label:j.label,selector:j.selector,gap:Math.max(0,R),_dist:R})}if(T&&j.left>=a.right-5){const R=Math.round(j.left-a.right);(!h||R<h._dist)&&(h={label:j.label,selector:j.selector,gap:Math.max(0,R),_dist:R})}}const y=window.innerWidth,g=window.innerHeight,x=J8(e,y),w=j=>j?{label:j.label,selector:j.selector,gap:j.gap}:null,C=Z8(a,e,y,g,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:w(c),below:w(u),left:w(d),right:w(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:C}}function Z8(e,n,i,a,c,u){const d={};let h=!1;const p=[];if(e.left<-2&&p.push("left"),e.right>i+2&&p.push("right"),e.top<-2&&p.push("top"),e.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const y=u.find(g=>g.label===c.label&&g.selector===c.selector&&Math.abs(g.area-c._area)<10);if(y){const g=[];e.left<y.left-2&&g.push("left"),e.right>y.right+2&&g.push("right"),e.top<y.top-2&&g.push("top"),e.bottom>y.bottom+2&&g.push("bottom"),g.length>0&&(d.container={label:c.label,edges:g},h=!0)}}return h?d:null}function J8(e,n){if(e.width/n>.85)return"full-width";const a=e.x+e.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function h2(e){switch(e){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function m2(e,n={}){const i=[];e.above&&i.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:""}`),e.below&&i.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:""}`),n.includeLeftRight&&(e.left&&i.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:""}`),e.right&&i.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:""}`));const a=h2(e.alignment);return e.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${e.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&i.push(`**Outside viewport** (${e.outOfBounds.viewport.join(", ")} edge${e.outOfBounds.viewport.length>1?"s":""})`),e.outOfBounds.container&&i.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")} edge${e.outOfBounds.container.edges.length>1?"s":""})`)),i}function eM(e,n,i){var u,d;const a=[];e.above&&a.push(`below \`${e.above.label}\``),e.below&&a.push(`above \`${e.below.label}\``),e.left&&a.push(`right of \`${e.left.label}\``),e.right&&a.push(`left of \`${e.right.label}\``),e.containedIn&&a.push(`inside \`${e.containedIn.label}\``),a.push(h2(e.alignment)),(u=e.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${e.outOfBounds.viewport.join(", ")})`),(d=e.outOfBounds)!=null&&d.container&&a.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var Tx=15;function Ax(e){if(e.length<2)return[];const n=[],i=new Set;for(let a=0;a<e.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<e.length;u++)i.has(u)||Math.abs(e[a].rect.y-e[u].rect.y)<Tx&&c.push(u);if(c.length>=2){const u=c.map(p=>e[p]);u.sort((p,y)=>p.rect.x-y.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,y)=>p+y.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<e.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<e.length;u++)i.has(u)||Math.abs(e[a].rect.x-e[u].rect.x)<Tx&&c.push(u);if(c.length>=2){const u=c.map(p=>e[p]);u.sort((p,y)=>p.rect.y-y.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,y)=>p+y.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function tM(e){var d;if(e.length<2)return[];const n=Ax(e.map(h=>({label:h.label,rect:h.originalRect}))),i=Ax(e.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let y=null,g=0;for(const x of i){const w=x.labels.filter(C=>p.has(C)).length;w>=2&&w>g&&(y=x,g=w)}if(y){const x=y.labels.filter(C=>p.has(C)),w=x.join(", ");if(y.type!==h.type){const C=h.type==="row"?"y":"x",j=y.type==="row"?"y":"x";a.push(`**${w}**: ${h.type} (${C}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${y.type} (${j}≈${y.sharedEdge}, ${y.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-y.sharedEdge)>20||Math.abs(h.avgGap-y.avgGap)>5){const C=h.type==="row"?"y":"x",j=Math.abs(h.sharedEdge-y.sharedEdge)>20?` ${C}: ${h.sharedEdge} → ${y.sharedEdge}`:"",A=Math.abs(h.avgGap-y.avgGap)>5?` gaps: ${h.avgGap}px → ${y.avgGap}px`:"";a.push(`**${w}**: ${h.type} shifted —${j}${A}`)}x.forEach(C=>c.add(C))}else{const x=h.labels.join(", "),w=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${w}≈${h.sharedEdge}) dissolved`),h.labels.forEach(C=>c.add(C))}}for(const h of i){if(h.labels.every(g=>c.has(g))||h.labels.filter(g=>!c.has(g)).length<2)continue;if(!n.some(g=>g.labels.filter(w=>h.labels.includes(w)).length>=2)){const g=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${g}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=e.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const y=Math.round(p.currentRect.x/5)*5;((d=h[y])!=null?d:h[y]=[]).push(p.label)}for(const[p,y]of Object.entries(h))y.length>=2&&a.push(`**${y.join(", ")}**: shared left edge at x≈${p}`)}return a}function p2(e){if(typeof document>"u")return{viewport:e,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||gp.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const y of Array.from(p.children))a(y)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const y=getComputedStyle(h);if(y.maxWidth&&y.maxWidth!=="none"&&y.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<e.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:e,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Yr(h)}}}return{viewport:e,contentArea:null}}function nM(e){if(typeof document>"u")return null;const n=document.querySelector(e);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Yr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function _2(e,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(e.x-c),h=Math.round(c+a-(e.x+e.width)),p=(e.width/a*100).toFixed(1),y=e.x+e.width/2,g=Math.abs(y-u)<20,x=e.width/a>.95,w=[];return x?w.push("`width: 100%` of container"):w.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(e.width)}px\`)`),g&&!x&&w.push("centered — `margin-inline: auto`"),w.join(" — ")}function g2(e){const{viewport:n,contentArea:i}=e;let a=`### Reference Frame
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
`,a}function sM(e){const n=nM(e);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Nx(e,n,i,a="standard"){var T,R,P,L;if(e.length===0)return"";const c=[...e].sort((D,F)=>Math.abs(D.y-F.y)<20?D.x-F.x:D.y-F.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${e.length} component${e.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${e.length} component${e.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((D,F)=>{var V;const Y=((V=ia[D.type])==null?void 0:V.label)||D.type;u+=`${F+1}. **${Y}** — \`${Math.round(D.width)}×${Math.round(D.height)}px\` at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`}),u;const d=p2(n);u+=g2(d),u+=`### Components
`,c.forEach((D,F)=>{var Ne;const Y=((Ne=ia[D.type])==null?void 0:Ne.label)||D.type,V={x:D.x,y:D.y,width:D.width,height:D.height};u+=`${F+1}. **${Y}** — \`${Math.round(D.width)}×${Math.round(D.height)}px\` at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`;const X=yp(V),ue=m2(X,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Fe of ue)u+=`   - ${Fe}
`;const pe=_2(V,d);pe&&(u+=`   - CSS: ${pe}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const D of c){const F=h.find(Y=>Math.abs(Y.y-D.y)<30);F?F.items.push(D):h.push({y:D.y,items:[D]})}if(h.sort((D,F)=>D.y-F.y),h.forEach((D,F)=>{D.items.sort((V,X)=>V.x-X.x);const Y=D.items.map(V=>{var X;return((X=ia[V.type])==null?void 0:X.label)||V.type});if(D.items.length===1){const X=D.items[0].width>n.width*.8;u+=`- Row ${F+1} (y≈${Math.round(D.y)}): ${Y[0]}${X?" — full width":""}
`}else u+=`- Row ${F+1} (y≈${Math.round(D.y)}): ${Y.join(" | ")} — ${D.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let D=0;D<c.length-1;D++){const F=c[D],Y=c[D+1],V=((T=ia[F.type])==null?void 0:T.label)||F.type,X=((R=ia[Y.type])==null?void 0:R.label)||Y.type,le=Math.round(Y.y-(F.y+F.height)),ue=Math.round(Y.x-(F.x+F.width));Math.abs(F.y-Y.y)<30?u+=`- ${V} → ${X}: \`${ue}px\` horizontal gap
`:u+=`- ${V} → ${X}: \`${le}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let D=0;D<c.length;D++)for(let F=D+1;F<c.length;F++){const Y=c[D],V=c[F],X=((P=ia[Y.type])==null?void 0:P.label)||Y.type,le=((L=ia[V.type])==null?void 0:L.label)||V.type,ue=Math.round(V.y-(Y.y+Y.height)),pe=Math.round(V.x-(Y.x+Y.width));u+=`- ${X} ↔ ${le}: h=\`${pe}px\` v=\`${ue}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,e.forEach((D,F)=>{var V;const Y=((V=ia[D.type])==null?void 0:V.label)||D.type;u+=`${F}. ${Y} at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(D=>D.type==="navigation"),y=c.some(D=>D.type==="hero"),g=c.some(D=>D.type==="sidebar"),x=c.some(D=>D.type==="footer"),w=c.filter(D=>D.type==="card"),C=c.filter(D=>D.type==="form"),j=c.filter(D=>D.type==="table"),A=c.filter(D=>D.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),y&&(u+=`- Hero section with heading, subtext, and call-to-action
`),g&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),w.length>1?u+=`- ${w.length}-column card grid — use CSS Grid or Flexbox
`:w.length===1&&(u+=`- Card component with image + content area
`),C.length>0&&(u+=`- ${C.length} form${C.length>1?"s":""} — add proper labels, validation, and submit handling
`),j.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),A.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,g){const D=c.find(F=>F.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(D.width)}px 1fr;\`
`}if(w.length>1){const D=Math.round(w[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${w.length}, ${D}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Dx(e,n="standard",i){const{sections:a}=e,c=[];for(const g of a){const x=g.originalRect,w=g.currentRect,C=Math.abs(x.x-w.x)>1||Math.abs(x.y-w.y)>1,j=Math.abs(x.width-w.width)>1||Math.abs(x.height-w.height)>1;if(!C&&!j){n==="forensic"&&c.push({section:g,posMoved:!1,sizeChanged:!1});continue}c.push({section:g,posMoved:C,sizeChanged:j})}if(c.length===0||n!=="forensic"&&c.every(g=>!g.posMoved&&!g.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=p2({width:d,height:h});n!=="compact"&&(u+=g2(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const y=g=>a.map(x=>({label:x.label,selector:x.selector,rect:g==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:g,posMoved:x,sizeChanged:w}of c){const C=g.originalRect,j=g.currentRect;if(!x&&!w){u+=`- ${g.label} — unchanged at (${Math.round(j.x)}, ${Math.round(j.y)}) ${Math.round(j.width)}×${Math.round(j.height)}px
`;continue}if(n==="compact"){x&&w?u+=`- Suggested: move **${g.label}** to (${Math.round(j.x)}, ${Math.round(j.y)}) ${Math.round(j.width)}×${Math.round(j.height)}px
`:x?u+=`- Suggested: move **${g.label}** to (${Math.round(j.x)}, ${Math.round(j.y)})
`:u+=`- Suggested: resize **${g.label}** to ${Math.round(j.width)}×${Math.round(j.height)}px
`;continue}if(x&&w?u+=`- Suggested: move and resize **${g.label}**
`:x?u+=`- Suggested: move **${g.label}**
`:u+=`- Suggested: resize **${g.label}** from ${Math.round(C.width)}×${Math.round(C.height)}px to ${Math.round(j.width)}×${Math.round(j.height)}px
`,x){const T=yp(C,y("original")),R=yp(j,y("current")),P=w?{width:C.width,height:C.height}:void 0;u+=`  - Currently ${eM(T,{x:C.x,y:C.y},P)}
`;const L=w?{width:j.width,height:j.height}:void 0,D=`at (${Math.round(j.x)}, ${Math.round(j.y)})`,F=L?`, ${Math.round(L.width)}×${Math.round(L.height)}px`:"",V=m2(R,{includeLeftRight:n==="detailed"||n==="forensic"});if(V.length>0){u+=`  - Suggested position ${D}${F}: ${V[0]}
`;for(let le=1;le<V.length;le++)u+=`    ${V[le]}
`}else u+=`  - Suggested position ${D}${F}
`;const X=_2(j,p);X&&(u+=`  - CSS: ${X}
`)}const A=sM(g.selector);if(A&&(u+=`  - ${A}
`),u+=`  - Selector: \`${g.selector}\`
`,n==="detailed"||n==="forensic"){const T=g.className?`${g.tagName}.${g.className.split(" ")[0]}`:g.tagName;T!==g.selector&&(u+=`  - Element: \`${T}\`
`),g.role&&(u+=`  - Role: \`${g.role}\`
`),n==="forensic"&&g.textSnippet&&(u+=`  - Text: "${g.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(C.x)}, y: ${Math.round(C.y)}, w: ${Math.round(C.width)}, h: ${Math.round(C.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(j.x)}, y: ${Math.round(j.y)}, w: ${Math.round(j.width)}, h: ${Math.round(j.height)} }\`
`)}if(n!=="compact"){const g=c.filter(w=>w.posMoved).map(w=>({label:w.section.label,originalRect:w.section.originalRect,currentRect:w.section.currentRect})),x=tM(g);if(x.length>0){u+=`
### Layout Summary
`;for(const w of x)u+=`- ${w}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const g=[...a].sort((x,w)=>Math.abs(x.currentRect.y-w.currentRect.y)<20?x.currentRect.x-w.currentRect.x:x.currentRect.y-w.currentRect.y);for(const x of g){const w=x.currentRect,C=Math.abs(w.x-x.originalRect.x)>1||Math.abs(w.y-x.originalRect.y)>1||Math.abs(w.width-x.originalRect.width)>1||Math.abs(w.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(w.width)}×${Math.round(w.height)}px\` at \`(${Math.round(w.x)}, ${Math.round(w.y)})\`${C?" ← suggested":""}
`}}return u}var xp="feedback-annotations-",y2=7;function Kd(e){return`${xp}${e}`}function Em(e){if(typeof window>"u")return[];try{const n=localStorage.getItem(Kd(e));if(!n)return[];const i=JSON.parse(n),a=Date.now()-y2*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function x2(e,n){if(!(typeof window>"u"))try{localStorage.setItem(Kd(e),JSON.stringify(n))}catch{}}function oM(){const e=new Map;if(typeof window>"u")return e;try{const n=Date.now()-y2*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(xp)){const c=a.slice(xp.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&e.set(c,h)}}}}catch{}return e}function Tc(e,n,i){const a=n.map(c=>({...c,_syncedTo:i}));x2(e,a)}var o_="agentation-design-";function iM(e){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${o_}${e}`);return n?JSON.parse(n):[]}catch{return[]}}function aM(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${o_}${e}`,JSON.stringify(n))}catch{}}function rM(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${o_}${e}`)}catch{}}var i_="agentation-rearrange-";function lM(e){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${i_}${e}`);return n?JSON.parse(n):null}catch{return null}}function cM(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${i_}${e}`,JSON.stringify(n))}catch{}}function uM(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${i_}${e}`)}catch{}}var a_="agentation-wireframe-";function dM(e){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${a_}${e}`);return n?JSON.parse(n):null}catch{return null}}function Rx(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${a_}${e}`,JSON.stringify(n))}catch{}}function wd(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${a_}${e}`)}catch{}}var b2="agentation-session-";function r_(e){return`${b2}${e}`}function fM(e){if(typeof window>"u")return null;try{return localStorage.getItem(r_(e))}catch{return null}}function Tm(e,n){if(!(typeof window>"u"))try{localStorage.setItem(r_(e),n)}catch{}}function hM(e){if(!(typeof window>"u"))try{localStorage.removeItem(r_(e))}catch{}}var v2=`${b2}toolbar-hidden`;function mM(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(v2)==="1"}catch{return!1}}function pM(e){if(!(typeof window>"u"))try{e&&sessionStorage.setItem(v2,"1")}catch{}}async function Am(e,n){const i=await fetch(`${e}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function Bx(e,n){const i=await fetch(`${e}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function Cl(e,n,i){const a=await fetch(`${e}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function Lx(e,n,i){const a=await fetch(`${e}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function lr(e,n){const i=await fetch(`${e}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var Fn={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Ox=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),zx=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],_M=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function gM(e){var a,c,u,d;const n=(a=e==null?void 0:e.mode)!=null?a:"filtered";let i=Ox;if(e!=null&&e.skipExact){const h=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);i=new Set([...Ox,...h])}return{maxComponents:(c=e==null?void 0:e.maxComponents)!=null?c:6,maxDepth:(u=e==null?void 0:e.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:e!=null&&e.skipPatterns?[...zx,...e.skipPatterns]:zx,userPatterns:(d=e==null?void 0:e.userPatterns)!=null?d:_M,filter:e==null?void 0:e.filter}}function yM(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function xM(e,n=10){const i=new Set;let a=e,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function bM(e,n){const i=yM(e);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function vM(e,n,i,a){if(i.filter)return i.filter(e,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(e)||i.skipPatterns.some(c=>c.test(e)));case"smart":return i.skipExact.has(e)||i.skipPatterns.some(c=>c.test(e))?!1:!!(a&&bM(e,a)||i.userPatterns.some(c=>c.test(e)));default:return!0}}var kl=null,wM=new WeakMap;function Nm(e){return Object.keys(e).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function SM(){if(kl!==null)return kl;if(typeof document>"u")return!1;if(document.body&&Nm(document.body))return kl=!0,!0;const e=["#root","#app","#__next","[data-reactroot]"];for(const n of e){const i=document.querySelector(n);if(i&&Nm(i))return kl=!0,!0}if(document.body){for(const n of document.body.children)if(Nm(n))return kl=!0,!0}return kl=!1,!1}var Ac={map:wM};function CM(e){return Object.keys(e).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function kM(e){const n=CM(e);return n?e[n]:null}function Br(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function jM(e){var c;const{tag:n,type:i,elementType:a}=e;if(n===Fn.HostComponent||n===Fn.HostText||n===Fn.HostHoistable||n===Fn.HostSingleton||n===Fn.Fragment||n===Fn.Mode||n===Fn.Profiler||n===Fn.DehydratedFragment||n===Fn.HostRoot||n===Fn.HostPortal||n===Fn.ScopeComponent||n===Fn.OffscreenComponent||n===Fn.LegacyHiddenComponent||n===Fn.CacheComponent||n===Fn.TracingMarkerComponent||n===Fn.Throw||n===Fn.ViewTransitionComponent||n===Fn.ActivityComponent)return null;if(n===Fn.ForwardRef){const u=a;if(u!=null&&u.render){const d=Br(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:Br(i)}if(n===Fn.MemoComponent||n===Fn.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=Br(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:Br(i)}if(n===Fn.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===Fn.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===Fn.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?Br(u._result):null}return n===Fn.SuspenseComponent||n===Fn.SuspenseListComponent?null:n===Fn.IncompleteClassComponent||n===Fn.IncompleteFunctionComponent||n===Fn.FunctionComponent||n===Fn.ClassComponent||n===Fn.IndeterminateComponent?Br(i):null}function MM(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function EM(e,n){const i=gM(n),a=i.mode==="all";if(a){const p=Ac.map.get(e);if(p!==void 0)return p}if(!SM()){const p={path:null,components:[]};return a&&Ac.map.set(e,p),p}const c=i.mode==="smart"?xM(e):void 0,u=[];try{let p=kM(e),y=0;for(;p&&y<i.maxDepth&&u.length<i.maxComponents;){const g=jM(p);g&&!MM(g)&&vM(g,y,i,c)&&u.push(g),p=p.return,y++}}catch{const p={path:null,components:[]};return a&&Ac.map.set(e,p),p}if(u.length===0){const p={path:null,components:[]};return a&&Ac.map.set(e,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&Ac.map.set(e,h),h}var Nc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function TM(e){if(!e||typeof e!="object")return null;const n=Object.keys(e),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return e[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return e[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=e[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&e[c]||null}function Qc(e){if(!e.type||typeof e.type=="string")return null;if(typeof e.type=="object"||typeof e.type=="function"){const n=e.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function AM(e,n=50){var c;let i=e,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Qc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Qc(i._debugOwner)};i=i.return,a++}return null}function NM(e){let n=e,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Qc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Qc(n)}}}n=n.return,i++}return null}var Sd=new Map;function DM(e){var c;const n=e.tag,i=e.type,a=e.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===Nc.FunctionComponent||n===Nc.IndeterminateComponent)&&typeof i=="function")return i;if(n===Nc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===Nc.MemoComponent||n===Nc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function RM(){const e=Jv,n=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function BM(e){const n=e.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function LM(e){let n=e;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function OM(e){const n=DM(e);if(!n)return null;if(Sd.has(n))return Sd.get(n);const i=RM();if(!i)return Sd.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=BM(d.stack);h&&(c={fileName:LM(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:Qc(e)||void 0})}}}finally{i.set(a)}return Sd.set(n,c),c}function zM(e,n=15){let i=e,a=0;for(;i&&a<n;){const c=OM(i);if(c)return c;i=i.return,a++}return null}function bp(e){const n=TM(e);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=AM(n);if(i||(i=NM(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=zM(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function $M(e,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=e;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function IM(e,n=10){let i=e,a=0;for(;i&&a<n;){const c=bp(i);if(c.found)return c;i=i.parentElement,a++}return bp(e)}var PM=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,HM={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(e)),e.textContent=PM}var Qe=HM,Dc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function $x(e,n,i="standard"){if(e.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var UM=`@keyframes styles-module__markerIn___x4G8D {
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
}`,VM={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-marker-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(e)),e.textContent=UM}var qs=VM;function Ix({annotation:e,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:y,renumberFrom:g,markerClickBehavior:x,tooltipStyle:w,onHoverEnter:C,onHoverLeave:j,onClick:A,onContextMenu:T}){const R=(h||p)&&!y,P=R&&x==="delete",L=e.isMultiSelect,D=L?"var(--agentation-color-green)":"var(--agentation-color-accent)",F=c?qs.exit:u?qs.clearing:d?"":qs.enter,Y=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${qs.marker} ${L?qs.multiSelect:""} ${F} ${P?qs.hovered:""}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y,backgroundColor:P?void 0:D,animationDelay:Y},onMouseEnter:()=>C(e),onMouseLeave:j,onClick:V=>{V.stopPropagation(),c||A(e)},onContextMenu:T?V=>{x==="delete"&&(V.preventDefault(),V.stopPropagation(),c||T(e))}:void 0,children:[R?P?l.jsx(a2,{size:L?18:16}):l.jsx(nj,{size:16}):l.jsx("span",{className:g!==null&&n>=g?qs.renumber:void 0,children:n+1}),h&&!y&&l.jsxs("div",{className:`${qs.markerTooltip} ${qs.enter}`,style:w,children:[l.jsxs("span",{className:qs.markerQuote,children:[e.element,e.selectedText&&` "${e.selectedText.slice(0,30)}${e.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:qs.markerNote,children:e.comment})]})]})}function YM({x:e,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${qs.marker} ${qs.pending} ${i?qs.multiSelect:""} ${a?qs.exit:qs.enter}`,style:{left:`${e}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(Y3,{size:12})})}function Px({annotation:e,fixed:n}){const i=e.isMultiSelect;return l.jsx("div",{className:`${qs.marker} ${n?qs.fixed:""} ${qs.hovered} ${i?qs.multiSelect:""} ${qs.exit}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y},children:l.jsx(a2,{size:i?12:10})})}var WM=`.styles-module__switchContainer___Ka-AB {
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
}`,FM={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-switch-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-switch-styles",document.head.appendChild(e)),e.textContent=WM}var Dm=FM,Rm=({className:e="",...n})=>l.jsxs("div",{className:`${Dm.switchContainer} ${e}`,children:[l.jsx("input",{className:Dm.switchInput,type:"checkbox",...n}),l.jsx("div",{className:Dm.switchThumb})]}),XM=`.styles-module__checkboxContainer___joqZk {
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
}`,GM={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(e)),e.textContent=XM}var Cd=GM,qM=({className:e="",...n})=>l.jsxs("div",{className:`${Cd.checkboxContainer} ${e}`,children:[l.jsx("input",{className:Cd.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:Cd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:Cd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),KM=`.styles-module__container___w8eAF {
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
}`,QM={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-field-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(e)),e.textContent=KM}var Hx=QM,Ux=({className:e="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=_.useId();return l.jsxs("div",{className:`${Hx.container} ${e}`,...u,children:[l.jsx(qM,{id:d,onChange:c,checked:a}),l.jsx("label",{className:Hx.label,htmlFor:d,children:n}),i&&l.jsx(Ir,{content:i})]})},ZM=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,JM={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-settings-panel-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(e)),e.textContent=ZM}var Nt=JM;function e7({settings:e,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:y,onSettingsPageChange:g,onHideToolbar:x}){var w;return l.jsx("div",{className:`${Nt.settingsPanel} ${h?Nt.enter:Nt.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:Nt.settingsPanelContainer,children:[l.jsxs("div",{className:`${Nt.settingsPage} ${y==="automations"?Nt.slideLeft:""}`,children:[l.jsxs("div",{className:Nt.settingsHeader,children:[l.jsx("a",{className:Nt.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:Nt.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:Nt.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:Nt.themeIconWrapper,children:l.jsx("span",{className:Nt.themeIcon,children:i?l.jsx(ej,{size:20}):l.jsx(tj,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:Nt.divider}),l.jsxs("div",{className:Nt.settingsSection,children:[l.jsxs("div",{className:Nt.settingsRow,children:[l.jsxs("div",{className:Nt.settingsLabel,children:["Output Detail",l.jsx(Ir,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:Nt.cycleButton,onClick:()=>{const j=(Dc.findIndex(A=>A.value===e.outputDetail)+1)%Dc.length;n({outputDetail:Dc[j].value})},children:[l.jsx("span",{className:Nt.cycleButtonText,children:(w=Dc.find(C=>C.value===e.outputDetail))==null?void 0:w.label},e.outputDetail),l.jsx("span",{className:Nt.cycleDots,children:Dc.map(C=>l.jsx("span",{className:`${Nt.cycleDot} ${e.outputDetail===C.value?Nt.active:""}`},C.value))})]})]}),l.jsxs("div",{className:`${Nt.settingsRow} ${Nt.settingsRowMarginTop} ${c?"":Nt.settingsRowDisabled}`,children:[l.jsxs("div",{className:Nt.settingsLabel,children:["React Components",l.jsx(Ir,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(Rm,{checked:c&&e.reactEnabled,onChange:C=>n({reactEnabled:C.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${Nt.settingsRow} ${Nt.settingsRowMarginTop}`,children:[l.jsxs("div",{className:Nt.settingsLabel,children:["Hide Until Restart",l.jsx(Ir,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(Rm,{checked:!1,onChange:C=>{C.target.checked&&x()}})]})]}),l.jsx("div",{className:Nt.divider}),l.jsxs("div",{className:Nt.settingsSection,children:[l.jsx("div",{className:`${Nt.settingsLabel} ${Nt.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:Nt.colorOptions,children:Wc.map(C=>l.jsx("button",{className:`${Nt.colorOption} ${e.annotationColorId===C.id?Nt.selected:""}`,style:{"--swatch":C.srgb,"--swatch-p3":C.p3},onClick:()=>n({annotationColorId:C.id}),title:C.label,type:"button"},C.id))})]}),l.jsx("div",{className:Nt.divider}),l.jsxs("div",{className:Nt.settingsSection,children:[l.jsx(Ux,{className:"checkbox-field",label:"Clear on copy/send",checked:e.autoClearAfterCopy,onChange:C=>n({autoClearAfterCopy:C.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(Ux,{className:Nt.checkboxField,label:"Block page interactions",checked:e.blockInteractions,onChange:C=>n({blockInteractions:C.target.checked})})]}),l.jsx("div",{className:Nt.divider}),l.jsxs("button",{className:Nt.settingsNavLink,onClick:()=>g("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:Nt.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${Nt.mcpNavIndicator} ${Nt[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${Nt.settingsPage} ${Nt.automationsPage} ${y==="automations"?Nt.slideIn:""}`,children:[l.jsxs("button",{className:Nt.settingsBackButton,onClick:()=>g("main"),children:[l.jsx(oj,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:Nt.divider}),l.jsxs("div",{className:Nt.settingsSection,children:[l.jsxs("div",{className:Nt.settingsRow,children:[l.jsxs("span",{className:Nt.automationHeader,children:["MCP Connection",l.jsx(Ir,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${Nt.mcpStatusDot} ${Nt[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:Nt.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Nt.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:Nt.divider}),l.jsxs("div",{className:`${Nt.settingsSection} ${Nt.settingsSectionGrow}`,children:[l.jsxs("div",{className:Nt.settingsRow,children:[l.jsxs("span",{className:Nt.automationHeader,children:["Webhooks",l.jsx(Ir,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:Nt.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${Nt.autoSendLabel} ${e.webhooksEnabled?Nt.active:""} ${e.webhookUrl?"":Nt.disabled}`,children:"Auto-Send"}),l.jsx(Rm,{id:"agentation-auto-send",checked:e.webhooksEnabled,onChange:C=>n({webhooksEnabled:C.target.checked}),disabled:!e.webhookUrl})]})]}),l.jsx("p",{className:Nt.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:Nt.webhookUrlInput,placeholder:"Webhook URL",value:e.webhookUrl,onKeyDown:C=>C.stopPropagation(),onChange:C=>n({webhookUrl:C.target.value})})]})]})]})})}function Bm(e,n="filtered"){const{name:i,path:a}=Nl(e);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=EM(e,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var Vx=!1,Lm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},pa=e=>{if(!e||!e.trim())return!1;try{const n=new URL(e.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},Wc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],t7=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const e=document.createElement("style");e.id="agentation-color-tokens",e.textContent=[...Wc.map(n=>`
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
    }`].join(""),document.head.appendChild(e)};t7();function Lr(e,n){let i=document.elementFromPoint(e,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(e,n);if(!a||a===i)break;i=a}return i}function Om(e){let n=e;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function Or(e){return e.status!=="resolved"&&e.status!=="dismissed"}function kd(e){const n=bp(e),i=n.found?n:IM(e);if(i.found&&i.source)return $M(i.source,"path")}function n7({demoAnnotations:e,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:y=!0,endpoint:g,sessionId:x,onSessionCreated:w,webhookUrl:C,className:j}={}){var _o,Co,ko,Ro,go,Bo,ca;const[A,T]=_.useState(!1),[R,P]=_.useState([]),[L,D]=_.useState(!0),[F,Y]=_.useState(()=>mM()),[V,X]=_.useState(!1),le=_.useRef(null);_.useEffect(()=>{const b=k=>{const M=le.current;M&&M.contains(k.target)&&k.stopPropagation()},v=["mousedown","click","pointerdown"];return v.forEach(k=>document.body.addEventListener(k,b)),()=>{v.forEach(k=>document.body.removeEventListener(k,b))}},[]);const[ue,pe]=_.useState(!1),[Ne,Fe]=_.useState(!1),[ne,de]=_.useState(null),[O,se]=_.useState({x:0,y:0}),[I,fe]=_.useState(null),[xe,z]=_.useState(!1),[ae,Q]=_.useState("idle"),[be,Me]=_.useState(!1),[me,Le]=_.useState(!1),[Ze,Ve]=_.useState(null),[ht,Tt]=_.useState(null),[Ct,lt]=_.useState([]),[$t,pt]=_.useState(null),[qt,Kt]=_.useState(null),[K,De]=_.useState(null),[ct,at]=_.useState(null),[_t,Ie]=_.useState([]),[xt,gt]=_.useState(0),[kt,Xe]=_.useState(!1),[ot,U]=_.useState(!1),[J,we]=_.useState(!1),[je,tt]=_.useState(!1),[Ue,Ae]=_.useState(!1),[ye,st]=_.useState("main"),[We,nt]=_.useState(!1),[Re,Je]=_.useState(!1),[bt,vt]=_.useState(!1),[Ke,Rt]=_.useState([]),[wt,mt]=_.useState(null),rn=_.useRef(!1),[ft,Ht]=_.useState(!1),[dn,Ot]=_.useState(!1),[St,fn]=_.useState(1),[ls,Qt]=_.useState("new-page"),[pn,Jt]=_.useState(""),[zt,tn]=_.useState(!1),[Ge,$n]=_.useState(null),In=_.useRef(!1),Ds=_.useRef({rearrange:null,placements:[]}),Vn=_.useRef({rearrange:null,placements:[]}),[bo,Is]=_.useState(0),[lo,Ps]=_.useState(0),[Zt,jn]=_.useState(0),[yn,Hs]=_.useState(0),Rn=_.useRef(new Set),hs=_.useRef(new Set),en=_.useRef(null),es=_.useRef(),vo=Re&&A&&!bt&&ft;_.useEffect(()=>{if(vo){Ot(!1);const b=Al(()=>{Ot(!0)});return()=>cancelAnimationFrame(b)}else Ot(!1)},[vo]);const ws=_.useRef(new Map),Ks=_.useRef(new Map),Rs=_.useRef(),[qn,gs]=_.useState(!1),[Mn,Uo]=_.useState([]),Si=_.useRef(Mn);Si.current=Mn;const[Eo,Ii]=_.useState(null),Qs=_.useRef(null);_.useRef(!1),_.useRef([]),_.useRef(0),_.useRef(null),_.useRef(null),_.useRef(1);const[Us,Cs]=_.useState(!1),Kn=_.useRef(null),[wn,Vs]=_.useState([]),xn=_.useRef({cmd:!1,shift:!1}),ms=()=>{nt(!0)},Ci=()=>{nt(!1)},Vo=()=>{Us||(Kn.current=Ft(()=>Cs(!0),850))},ci=()=>{Kn.current&&(clearTimeout(Kn.current),Kn.current=null),Cs(!1),Ci()};_.useEffect(()=>()=>{Kn.current&&clearTimeout(Kn.current)},[]);const[Pt,Ys]=_.useState(()=>{var b;try{const v=JSON.parse((b=localStorage.getItem("feedback-toolbar-settings"))!=null?b:"");return{...Lm,...v,annotationColorId:Wc.find(k=>k.id===v.annotationColorId)?v.annotationColorId:Lm.annotationColorId}}catch{return Lm}}),[ks,ki]=_.useState(!0),[co,Ko]=_.useState(!1),ps=()=>{var b;(b=le.current)==null||b.classList.add(Qe.disableTransitions),ki(v=>!v),Al(()=>{var v;(v=le.current)==null||v.classList.remove(Qe.disableTransitions)})},Ws=!1,Zs="off",[bn,js]=_.useState(x!=null?x:null),Js=_.useRef(!1),[Ms,Fs]=_.useState(g?"connecting":"disconnected"),[_n,Es]=_.useState(null),[eo,Yo]=_.useState(!1),[Ts,ji]=_.useState(null),Qo=_.useRef(!1),[To,uo]=_.useState(new Set),[Zo,ui]=_.useState(new Set),[cs,fo]=_.useState(!1),[Wo,As]=_.useState(!1),[ho,Ao]=_.useState(!1),Ln=_.useRef(null),Xn=_.useRef(null),ts=_.useRef(null),No=_.useRef(null),Sn=_.useRef(!1),di=_.useRef(0),Ns=_.useRef(null),mo=_.useRef(null),Mi=8,Jo=50,ei=_.useRef(null),Ei=_.useRef(null),ti=_.useRef(null),Et=typeof window<"u"?window.location.pathname:"/";_.useEffect(()=>{if(je)Ae(!0);else{nt(!1),st("main");const b=Ft(()=>Ae(!1),0);return()=>clearTimeout(b)}},[je]);const to=A&&L&&!Re;_.useEffect(()=>{if(to){Fe(!1),pe(!0),uo(new Set);const b=Ft(()=>{uo(v=>{const k=new Set(v);return R.forEach(M=>k.add(M.id)),k})},350);return()=>clearTimeout(b)}else if(ue){Fe(!0);const b=Ft(()=>{pe(!1),Fe(!1)},250);return()=>clearTimeout(b)}},[to]),_.useEffect(()=>{U(!0),gt(window.scrollY);const b=Em(Et);P(b.filter(Or)),Vx||(Ko(!0),Vx=!0,Ft(()=>Ko(!1),750));try{const v=localStorage.getItem("feedback-toolbar-theme");v!==null&&ki(v==="dark")}catch{}try{const v=localStorage.getItem("feedback-toolbar-position");if(v){const k=JSON.parse(v);typeof k.x=="number"&&typeof k.y=="number"&&Es(k)}}catch{}},[Et]),_.useEffect(()=>{ot&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Pt))},[Pt,ot]),_.useEffect(()=>{ot&&localStorage.setItem("feedback-toolbar-theme",ks?"dark":"light")},[ks,ot]);const Ji=_.useRef(!1);_.useEffect(()=>{const b=Ji.current;Ji.current=eo,b&&!eo&&_n&&ot&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(_n))},[eo,_n,ot]),_.useEffect(()=>{if(!g||!ot||Js.current)return;Js.current=!0,Fs("connecting"),(async()=>{try{const v=fM(Et),k=x||v;let M=!1;if(k)try{const N=await Bx(g,k);js(N.id),Fs("connected"),Tm(Et,N.id),M=!0;const H=Em(Et),oe=new Set(N.annotations.map(Te=>Te.id)),he=H.filter(Te=>!oe.has(Te.id));if(he.length>0){const et=`${typeof window<"u"?window.location.origin:""}${Et}`,q=(await Promise.allSettled(he.map(ie=>Cl(g,N.id,{...ie,sessionId:N.id,url:et})))).map((ie,ee)=>ie.status==="fulfilled"?ie.value:(console.warn("[Agentation] Failed to sync annotation:",ie.reason),he[ee])),Z=[...N.annotations,...q];P(Z.filter(Or)),Tc(Et,Z.filter(Or),N.id)}else P(N.annotations.filter(Or)),Tc(Et,N.annotations.filter(Or),N.id)}catch(N){console.warn("[Agentation] Could not join session, creating new:",N),hM(Et)}if(!M){const N=typeof window<"u"?window.location.href:"/",H=await Am(g,N);js(H.id),Fs("connected"),Tm(Et,H.id),w==null||w(H.id);const oe=oM(),he=typeof window<"u"?window.location.origin:"",Te=[];for(const[et,ut]of oe){const q=ut.filter(ee=>!ee._syncedTo);if(q.length===0)continue;const Z=`${he}${et}`,ie=et===Et;Te.push((async()=>{try{const ee=ie?H:await Am(g,Z),it=(await Promise.allSettled(q.map(dt=>Cl(g,ee.id,{...dt,sessionId:ee.id,url:Z})))).map((dt,Bt)=>dt.status==="fulfilled"?dt.value:(console.warn("[Agentation] Failed to sync annotation:",dt.reason),q[Bt])).filter(Or);if(Tc(et,it,ee.id),ie){const dt=new Set(q.map(Bt=>Bt.id));P(Bt=>{const yt=Bt.filter(jt=>!dt.has(jt.id));return[...it,...yt]})}}catch(ee){console.warn(`[Agentation] Failed to sync annotations for ${et}:`,ee)}})())}await Promise.allSettled(Te)}}catch(v){Fs("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",v)}})()},[g,x,ot,w,Et]),_.useEffect(()=>{if(!g||!ot)return;const b=async()=>{try{(await fetch(`${g}/health`)).ok?Fs("connected"):Fs("disconnected")}catch{Fs("disconnected")}};b();const v=rj(b,1e4);return()=>clearInterval(v)},[g,ot]),_.useEffect(()=>{if(!g||!ot||!bn)return;const b=new EventSource(`${g}/sessions/${bn}/events`),v=["resolved","dismissed"],k=M=>{var N;try{const H=JSON.parse(M.data);if(v.includes((N=H.payload)==null?void 0:N.status)){const oe=H.payload.id,he=H.payload.kind;if(he==="placement"){for(const[Te,et]of ws.current)if(et===oe){ws.current.delete(Te),Rt(ut=>ut.filter(q=>q.id!==Te));break}}else if(he==="rearrange"){for(const[Te,et]of Ks.current)if(et===oe){Ks.current.delete(Te),$n(ut=>{if(!ut)return null;const q=ut.sections.filter(Z=>Z.id!==Te);return q.length===0?null:{...ut,sections:q}});break}}else ui(Te=>new Set(Te).add(oe)),Ft(()=>{P(Te=>Te.filter(et=>et.id!==oe)),ui(Te=>{const et=new Set(Te);return et.delete(oe),et})},150)}}catch{}};return b.addEventListener("annotation.updated",k),()=>{b.removeEventListener("annotation.updated",k),b.close()}},[g,ot,bn]),_.useEffect(()=>{if(!g||!ot)return;const b=mo.current==="disconnected",v=Ms==="connected";mo.current=Ms,b&&v&&(async()=>{try{const M=Em(Et);if(M.length===0)return;const H=`${typeof window<"u"?window.location.origin:""}${Et}`;let oe=bn,he=[];if(oe)try{he=(await Bx(g,oe)).annotations}catch{oe=null}oe||(oe=(await Am(g,H)).id,js(oe),Tm(Et,oe));const Te=new Set(he.map(ut=>ut.id)),et=M.filter(ut=>!Te.has(ut.id));if(et.length>0){const q=(await Promise.allSettled(et.map(ee=>Cl(g,oe,{...ee,sessionId:oe,url:H})))).map((ee,Ee)=>ee.status==="fulfilled"?ee.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",ee.reason),et[Ee])),ie=[...he,...q].filter(Or);P(ie),Tc(Et,ie,oe)}}catch(M){console.warn("[Agentation] Failed to sync on reconnect:",M)}})()},[Ms,g,ot,bn,Et]);const Pi=_.useCallback(()=>{V||(X(!0),tt(!1),T(!1),Ft(()=>{pM(!0),Y(!0),X(!1)},400))},[V]);_.useEffect(()=>{if(!i||!ot||!e||e.length===0||R.length>0)return;const b=[];return b.push(Ft(()=>{T(!0)},n-200)),e.forEach((v,k)=>{const M=n+k*300;b.push(Ft(()=>{const N=document.querySelector(v.selector);if(!N)return;const H=N.getBoundingClientRect(),{name:oe,path:he}=Nl(N),Te={id:`demo-${Date.now()}-${k}`,x:(H.left+H.width/2)/window.innerWidth*100,y:H.top+H.height/2+window.scrollY,comment:v.comment,element:oe,elementPath:he,timestamp:Date.now(),selectedText:v.selectedText,boundingBox:{x:H.left,y:H.top+window.scrollY,width:H.width,height:H.height},nearbyText:Mc(N),cssClasses:Ec(N)};P(et=>[...et,Te])},M))}),()=>{b.forEach(clearTimeout)}},[i,ot,e,n]),_.useEffect(()=>{const b=()=>{gt(window.scrollY),Xe(!0),ti.current&&clearTimeout(ti.current),ti.current=Ft(()=>{Xe(!1)},150)};return window.addEventListener("scroll",b,{passive:!0}),()=>{window.removeEventListener("scroll",b),ti.current&&clearTimeout(ti.current)}},[]),_.useEffect(()=>{ot&&R.length>0?bn?Tc(Et,R,bn):x2(Et,R):ot&&R.length===0&&localStorage.removeItem(Kd(Et))},[R,Et,ot,bn]),_.useEffect(()=>{if(ot&&!rn.current){rn.current=!0;const b=iM(Et);b.length>0&&Rt(b)}},[ot,Et]),_.useEffect(()=>{ot&&rn.current&&!ft&&(Ke.length>0?aM(Et,Ke):rM(Et))},[Ke,Et,ot,ft]),_.useEffect(()=>{if(ot&&!In.current){In.current=!0;const b=lM(Et);if(b){const v={...b,sections:b.sections.map(k=>{var M;return{...k,currentRect:(M=k.currentRect)!=null?M:{...k.originalRect}}})};$n(v)}}},[ot,Et]),_.useEffect(()=>{ot&&In.current&&!ft&&(Ge?cM(Et,Ge):uM(Et))},[Ge,Et,ot,ft]);const Hi=_.useRef(!1);_.useEffect(()=>{if(ot&&!Hi.current){Hi.current=!0;const b=dM(Et);b&&(Vn.current={rearrange:b.rearrange,placements:b.placements||[]},b.purpose&&Jt(b.purpose))}},[ot,Et]),_.useEffect(()=>{var v,k,M,N,H;if(!ot||!Hi.current)return;const b=Vn.current;ft?((k=(v=Ge==null?void 0:Ge.sections)==null?void 0:v.length)!=null?k:0)>0||Ke.length>0||pn?Rx(Et,{rearrange:Ge,placements:Ke,purpose:pn}):wd(Et):((H=(N=(M=b.rearrange)==null?void 0:M.sections)==null?void 0:N.length)!=null?H:0)>0||b.placements.length>0||pn?Rx(Et,{rearrange:b.rearrange,placements:b.placements,purpose:pn}):wd(Et)},[Ge,Ke,pn,ft,Et,ot]),_.useEffect(()=>{Re&&!Ge&&$n({sections:[],originalOrder:[],detectedAt:Date.now()})},[Re,Ge]),_.useEffect(()=>{if(!g||!bn)return;const b=ws.current,v=new Set(Ke.map(k=>k.id));for(const k of Ke){if(b.has(k.id))continue;b.set(k.id,"");const M=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Et;Cl(g,bn,{id:k.id,x:k.x/window.innerWidth*100,y:k.y,comment:`Place ${k.type} at (${Math.round(k.x)}, ${Math.round(k.y)}), ${k.width}×${k.height}px${k.text?` — "${k.text}"`:""}`,element:`[design:${k.type}]`,elementPath:"[placement]",timestamp:k.timestamp,url:M,intent:"change",severity:"important",kind:"placement",placement:{componentType:k.type,width:k.width,height:k.height,scrollY:k.scrollY,text:k.text}}).then(N=>{b.has(k.id)&&b.set(k.id,N.id)}).catch(N=>{console.warn("[Agentation] Failed to sync placement annotation:",N),b.delete(k.id)})}for(const[k,M]of b)v.has(k)||(b.delete(k),M&&lr(g,M).catch(()=>{}))},[Ke,g,bn,Et]),_.useEffect(()=>{if(!(!g||!bn))return Rs.current&&clearTimeout(Rs.current),Rs.current=Ft(()=>{const b=Ks.current;if(!Ge||Ge.sections.length===0){for(const[,M]of b)M&&lr(g,M).catch(()=>{});b.clear();return}const v=new Set(Ge.sections.map(M=>M.id)),k=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Et;for(const M of Ge.sections){const N=M.originalRect,H=M.currentRect;if(!(Math.abs(N.x-H.x)>1||Math.abs(N.y-H.y)>1||Math.abs(N.width-H.width)>1||Math.abs(N.height-H.height)>1)){const Te=b.get(M.id);Te&&(b.delete(M.id),lr(g,Te).catch(()=>{}));continue}const he=b.get(M.id);he?Lx(g,he,{comment:`Move ${M.label} section (${M.tagName}) — from (${Math.round(N.x)},${Math.round(N.y)}) ${Math.round(N.width)}×${Math.round(N.height)} to (${Math.round(H.x)},${Math.round(H.y)}) ${Math.round(H.width)}×${Math.round(H.height)}`}).catch(Te=>{console.warn("[Agentation] Failed to update rearrange annotation:",Te)}):(b.set(M.id,""),Cl(g,bn,{id:M.id,x:H.x/window.innerWidth*100,y:H.y,comment:`Move ${M.label} section (${M.tagName}) — from (${Math.round(N.x)},${Math.round(N.y)}) ${Math.round(N.width)}×${Math.round(N.height)} to (${Math.round(H.x)},${Math.round(H.y)}) ${Math.round(H.width)}×${Math.round(H.height)}`,element:M.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:k,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:M.selector,label:M.label,tagName:M.tagName,originalRect:N,currentRect:H}}).then(Te=>{b.has(M.id)&&b.set(M.id,Te.id)}).catch(Te=>{console.warn("[Agentation] Failed to sync rearrange annotation:",Te),b.delete(M.id)}))}for(const[M,N]of b)v.has(M)||(b.delete(M),N&&lr(g,N).catch(()=>{}))},300),()=>{Rs.current&&clearTimeout(Rs.current)}},[Ge,g,bn,Et]);const wo=_.useRef(new Map);_.useLayoutEffect(()=>{var k;const b=(k=Ge==null?void 0:Ge.sections)!=null?k:[],v=new Set;if((Re||bt)&&A)for(const M of b){v.add(M.id);try{const N=document.querySelector(M.selector);if(!N)continue;if(!wo.current.has(M.id)){const H={transform:N.style.transform,transformOrigin:N.style.transformOrigin,opacity:N.style.opacity,position:N.style.position,zIndex:N.style.zIndex,display:N.style.display},oe=[];let he=N.parentElement;for(;he&&he!==document.body;){const et=getComputedStyle(he);(et.overflow!=="visible"||et.overflowX!=="visible"||et.overflowY!=="visible")&&(oe.push({el:he,overflow:he.style.overflow}),he.style.overflow="visible"),he=he.parentElement}getComputedStyle(N).display==="inline"&&(N.style.display="inline-block"),wo.current.set(M.id,{el:N,origStyles:H,ancestors:oe}),N.style.transformOrigin="top left",N.style.zIndex="9999"}}catch{}}for(const[M,N]of wo.current)if(!v.has(M)){const{el:H,origStyles:oe,ancestors:he}=N;H.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",H.style.transform=oe.transform,H.style.transformOrigin=oe.transformOrigin,H.style.opacity=oe.opacity,H.style.position=oe.position,H.style.zIndex=oe.zIndex,wo.current.delete(M),Ft(()=>{H.style.transition="",H.style.display=oe.display;for(const Te of he)Te.el.style.overflow=Te.overflow},450)}},[Ge,Re,bt,A]),_.useEffect(()=>()=>{for(const[,b]of wo.current){const{el:v,origStyles:k,ancestors:M}=b;v.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",v.style.transform=k.transform,v.style.transformOrigin=k.transformOrigin,v.style.opacity=k.opacity,v.style.position=k.position,v.style.zIndex=k.zIndex,Ft(()=>{v.style.transition="",v.style.display=k.display;for(const N of M)N.el.style.overflow=N.overflow},450)}wo.current.clear()},[]);const Do=_.useCallback(()=>{vt(!0),Je(!1),mt(null),clearTimeout(es.current),es.current=Ft(()=>{vt(!1)},300)},[]),So=_.useCallback(()=>{Re&&(vt(!0),Je(!1),mt(null),clearTimeout(es.current),es.current=Ft(()=>{vt(!1)},300)),T(!1)},[Re]),fi=_.useCallback(()=>{J||(cj(),we(!0))},[J]),E=_.useCallback(()=>{J&&(xx(),we(!1))},[J]),W=_.useCallback(()=>{J?E():fi()},[J,fi,E]),ce=_.useCallback(()=>{if(wn.length===0)return;const b=wn[0],v=b.element,k=wn.length>1,M=wn.map(N=>N.element.getBoundingClientRect());if(k){const N={left:Math.min(...M.map(ee=>ee.left)),top:Math.min(...M.map(ee=>ee.top)),right:Math.max(...M.map(ee=>ee.right)),bottom:Math.max(...M.map(ee=>ee.bottom))},H=wn.slice(0,5).map(ee=>ee.name).join(", "),oe=wn.length>5?` +${wn.length-5} more`:"",he=M.map(ee=>({x:ee.left,y:ee.top+window.scrollY,width:ee.width,height:ee.height})),et=wn[wn.length-1].element,ut=M[M.length-1],q=ut.left+ut.width/2,Z=ut.top+ut.height/2,ie=Om(et);fe({x:q/window.innerWidth*100,y:ie?Z:Z+window.scrollY,clientY:Z,element:`${wn.length} elements: ${H}${oe}`,elementPath:"multi-select",boundingBox:{x:N.left,y:N.top+window.scrollY,width:N.right-N.left,height:N.bottom-N.top},isMultiSelect:!0,isFixed:ie,elementBoundingBoxes:he,multiSelectElements:wn.map(ee=>ee.element),targetElement:et,fullPath:xd(v),accessibility:yd(v),computedStyles:gd(v),computedStylesObj:_d(v),nearbyElements:pd(v),cssClasses:Ec(v),nearbyText:Mc(v),sourceFile:kd(v)})}else{const N=M[0],H=Om(v);fe({x:N.left/window.innerWidth*100,y:H?N.top:N.top+window.scrollY,clientY:N.top,element:b.name,elementPath:b.path,boundingBox:{x:N.left,y:H?N.top:N.top+window.scrollY,width:N.width,height:N.height},isFixed:H,fullPath:xd(v),accessibility:yd(v),computedStyles:gd(v),computedStylesObj:_d(v),nearbyElements:pd(v),cssClasses:Ec(v),nearbyText:Mc(v),reactComponents:b.reactComponents,sourceFile:kd(v)})}Vs([]),de(null)},[wn]);_.useEffect(()=>{A||(fe(null),De(null),at(null),Ie([]),de(null),tt(!1),Vs([]),xn.current={cmd:!1,shift:!1},J&&E())},[A,J,E]),_.useEffect(()=>()=>{xx()},[]),_.useEffect(()=>{if(!A)return;const b=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),v=":not([data-agentation-root]):not([data-agentation-root] *)",k=document.createElement("style");return k.id="feedback-cursor-styles",k.textContent=`
      body ${v} {
        cursor: crosshair !important;
      }

      body :is(${b})${v} {
        cursor: text !important;
      }
    `,document.head.appendChild(k),()=>{const M=document.getElementById("feedback-cursor-styles");M&&M.remove()}},[A]),_.useEffect(()=>{if(Eo!==null&&A)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Eo,A]),_.useEffect(()=>{if(!A||I||qn||Re)return;const b=v=>{const k=v.composedPath()[0]||v.target;if(oi(k,"[data-feedback-toolbar]")){de(null);return}const M=Lr(v.clientX,v.clientY);if(!M||oi(M,"[data-feedback-toolbar]")){de(null);return}const{name:N,elementName:H,path:oe,reactComponents:he}=Bm(M,Zs),Te=M.getBoundingClientRect();de({element:N,elementName:H,elementPath:oe,rect:Te,reactComponents:he}),se({x:v.clientX,y:v.clientY})};return document.addEventListener("mousemove",b),()=>document.removeEventListener("mousemove",b)},[A,I,qn,Re,Zs,Mn]);const Ce=_.useCallback(b=>{var v;if(De(b),Ve(null),Tt(null),lt([]),(v=b.elementBoundingBoxes)!=null&&v.length){const k=[];for(const M of b.elementBoundingBoxes){const N=M.x+M.width/2,H=M.y+M.height/2-window.scrollY,oe=Lr(N,H);oe&&k.push(oe)}Ie(k),at(null)}else if(b.boundingBox){const k=b.boundingBox,M=k.x+k.width/2,N=b.isFixed?k.y+k.height/2:k.y+k.height/2-window.scrollY,H=Lr(M,N);if(H){const oe=H.getBoundingClientRect(),he=oe.width/k.width,Te=oe.height/k.height;he<.5||Te<.5?at(null):at(H)}else at(null);Ie([])}else at(null),Ie([])},[]);_.useEffect(()=>{if(!A||qn||Re)return;const b=v=>{var qe,it;if(Sn.current){Sn.current=!1;return}const k=v.composedPath()[0]||v.target;if(oi(k,"[data-feedback-toolbar]")||oi(k,"[data-annotation-popup]")||oi(k,"[data-annotation-marker]"))return;if(v.metaKey&&v.shiftKey&&!I&&!K){v.preventDefault(),v.stopPropagation();const dt=Lr(v.clientX,v.clientY);if(!dt)return;const Bt=dt.getBoundingClientRect(),{name:yt,path:jt,reactComponents:Cn}=Bm(dt,Zs),Xt=wn.findIndex(cn=>cn.element===dt);Xt>=0?Vs(cn=>cn.filter((On,zn)=>zn!==Xt)):Vs(cn=>[...cn,{element:dt,rect:Bt,name:yt,path:jt,reactComponents:Cn!=null?Cn:void 0}]);return}const M=oi(k,"button, a, input, select, textarea, [role='button'], [onclick]");if(Pt.blockInteractions&&M&&(v.preventDefault(),v.stopPropagation()),I){if(M&&!Pt.blockInteractions)return;v.preventDefault(),(qe=ei.current)==null||qe.shake();return}if(K){if(M&&!Pt.blockInteractions)return;v.preventDefault(),(it=Ei.current)==null||it.shake();return}v.preventDefault();const N=Lr(v.clientX,v.clientY);if(!N)return;const{name:H,path:oe,reactComponents:he}=Bm(N,Zs),Te=N.getBoundingClientRect(),et=v.clientX/window.innerWidth*100,ut=Om(N),q=ut?v.clientY:v.clientY+window.scrollY,Z=window.getSelection();let ie;Z&&Z.toString().trim().length>0&&(ie=Z.toString().trim().slice(0,500));const ee=_d(N),Ee=gd(N);fe({x:et,y:q,clientY:v.clientY,element:H,elementPath:oe,selectedText:ie,boundingBox:{x:Te.left,y:ut?Te.top:Te.top+window.scrollY,width:Te.width,height:Te.height},nearbyText:Mc(N),cssClasses:Ec(N),isFixed:ut,fullPath:xd(N),accessibility:yd(N),computedStyles:Ee,computedStylesObj:ee,nearbyElements:pd(N),reactComponents:he!=null?he:void 0,sourceFile:kd(N),targetElement:N}),de(null)};return document.addEventListener("click",b,!0),()=>document.removeEventListener("click",b,!0)},[A,qn,Re,I,K,Pt.blockInteractions,Zs,wn]),_.useEffect(()=>{if(!A)return;const b=M=>{M.key==="Meta"&&(xn.current.cmd=!0),M.key==="Shift"&&(xn.current.shift=!0)},v=M=>{const N=xn.current.cmd&&xn.current.shift;M.key==="Meta"&&(xn.current.cmd=!1),M.key==="Shift"&&(xn.current.shift=!1);const H=xn.current.cmd&&xn.current.shift;N&&!H&&wn.length>0&&ce()},k=()=>{xn.current={cmd:!1,shift:!1},Vs([])};return document.addEventListener("keydown",b),document.addEventListener("keyup",v),window.addEventListener("blur",k),()=>{document.removeEventListener("keydown",b),document.removeEventListener("keyup",v),window.removeEventListener("blur",k)}},[A,wn,ce]),_.useEffect(()=>{if(!A||I||qn||Re)return;const b=v=>{const k=v.composedPath()[0]||v.target;oi(k,"[data-feedback-toolbar]")||oi(k,"[data-annotation-marker]")||oi(k,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(k.tagName)||k.isContentEditable||(v.preventDefault(),Ln.current={x:v.clientX,y:v.clientY})};return document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)},[A,I,qn,Re]),_.useEffect(()=>{if(!A||I)return;const b=v=>{if(!Ln.current)return;const k=v.clientX-Ln.current.x,M=v.clientY-Ln.current.y,N=k*k+M*M,H=Mi*Mi;if(!ho&&N>=H&&(Xn.current=Ln.current,Ao(!0),v.preventDefault()),(ho||N>=H)&&Xn.current){if(ts.current){const yt=Math.min(Xn.current.x,v.clientX),jt=Math.min(Xn.current.y,v.clientY),Cn=Math.abs(v.clientX-Xn.current.x),Xt=Math.abs(v.clientY-Xn.current.y);ts.current.style.transform=`translate(${yt}px, ${jt}px)`,ts.current.style.width=`${Cn}px`,ts.current.style.height=`${Xt}px`}const oe=Date.now();if(oe-di.current<Jo)return;di.current=oe;const he=Xn.current.x,Te=Xn.current.y,et=Math.min(he,v.clientX),ut=Math.min(Te,v.clientY),q=Math.max(he,v.clientX),Z=Math.max(Te,v.clientY),ie=(et+q)/2,ee=(ut+Z)/2,Ee=new Set,qe=[[et,ut],[q,ut],[et,Z],[q,Z],[ie,ee],[ie,ut],[ie,Z],[et,ee],[q,ee]];for(const[yt,jt]of qe){const Cn=document.elementsFromPoint(yt,jt);for(const Xt of Cn)Xt instanceof HTMLElement&&Ee.add(Xt)}const it=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const yt of it)if(yt instanceof HTMLElement){const jt=yt.getBoundingClientRect(),Cn=jt.left+jt.width/2,Xt=jt.top+jt.height/2,cn=Cn>=et&&Cn<=q&&Xt>=ut&&Xt<=Z,On=Math.min(jt.right,q)-Math.max(jt.left,et),zn=Math.min(jt.bottom,Z)-Math.max(jt.top,ut),jo=On>0&&zn>0?On*zn:0,Lo=jt.width*jt.height,hi=Lo>0?jo/Lo:0;(cn||hi>.5)&&Ee.add(yt)}const dt=[],Bt=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const yt of Ee){if(oi(yt,"[data-feedback-toolbar]")||oi(yt,"[data-annotation-marker]"))continue;const jt=yt.getBoundingClientRect();if(!(jt.width>window.innerWidth*.8&&jt.height>window.innerHeight*.5)&&!(jt.width<10||jt.height<10)&&jt.left<q&&jt.right>et&&jt.top<Z&&jt.bottom>ut){const Cn=yt.tagName;let Xt=Bt.has(Cn);if(!Xt&&(Cn==="DIV"||Cn==="SPAN")){const cn=yt.textContent&&yt.textContent.trim().length>0,On=yt.onclick!==null||yt.getAttribute("role")==="button"||yt.getAttribute("role")==="link"||yt.classList.contains("clickable")||yt.hasAttribute("data-clickable");(cn||On)&&!yt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Xt=!0)}if(Xt){let cn=!1;for(const On of dt)if(On.left<=jt.left&&On.right>=jt.right&&On.top<=jt.top&&On.bottom>=jt.bottom){cn=!0;break}cn||dt.push(jt)}}}if(No.current){const yt=No.current;for(;yt.children.length>dt.length;)yt.removeChild(yt.lastChild);dt.forEach((jt,Cn)=>{let Xt=yt.children[Cn];Xt||(Xt=document.createElement("div"),Xt.className=Qe.selectedElementHighlight,yt.appendChild(Xt)),Xt.style.transform=`translate(${jt.left}px, ${jt.top}px)`,Xt.style.width=`${jt.width}px`,Xt.style.height=`${jt.height}px`})}}};return document.addEventListener("mousemove",b,{passive:!0}),()=>document.removeEventListener("mousemove",b)},[A,I,ho,Mi]),_.useEffect(()=>{if(!A)return;const b=v=>{const k=ho,M=Xn.current;if(ho&&M){Sn.current=!0;const N=Math.min(M.x,v.clientX),H=Math.min(M.y,v.clientY),oe=Math.max(M.x,v.clientX),he=Math.max(M.y,v.clientY),Te=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(ie=>{if(!(ie instanceof HTMLElement)||oi(ie,"[data-feedback-toolbar]")||oi(ie,"[data-annotation-marker]"))return;const ee=ie.getBoundingClientRect();ee.width>window.innerWidth*.8&&ee.height>window.innerHeight*.5||ee.width<10||ee.height<10||ee.left<oe&&ee.right>N&&ee.top<he&&ee.bottom>H&&Te.push({element:ie,rect:ee})});const ut=Te.filter(({element:ie})=>!Te.some(({element:ee})=>ee!==ie&&ie.contains(ee))),q=v.clientX/window.innerWidth*100,Z=v.clientY+window.scrollY;if(ut.length>0){const ie=ut.reduce((Bt,{rect:yt})=>({left:Math.min(Bt.left,yt.left),top:Math.min(Bt.top,yt.top),right:Math.max(Bt.right,yt.right),bottom:Math.max(Bt.bottom,yt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),ee=ut.slice(0,5).map(({element:Bt})=>Nl(Bt).name).join(", "),Ee=ut.length>5?` +${ut.length-5} more`:"",qe=ut[0].element,it=_d(qe),dt=gd(qe);fe({x:q,y:Z,clientY:v.clientY,element:`${ut.length} elements: ${ee}${Ee}`,elementPath:"multi-select",boundingBox:{x:ie.left,y:ie.top+window.scrollY,width:ie.right-ie.left,height:ie.bottom-ie.top},isMultiSelect:!0,fullPath:xd(qe),accessibility:yd(qe),computedStyles:dt,computedStylesObj:it,nearbyElements:pd(qe),cssClasses:Ec(qe),nearbyText:Mc(qe),sourceFile:kd(qe)})}else{const ie=Math.abs(oe-N),ee=Math.abs(he-H);ie>20&&ee>20&&fe({x:q,y:Z,clientY:v.clientY,element:"Area selection",elementPath:`region at (${Math.round(N)}, ${Math.round(H)})`,boundingBox:{x:N,y:H+window.scrollY,width:ie,height:ee},isMultiSelect:!0})}de(null)}else k&&(Sn.current=!0);Ln.current=null,Xn.current=null,Ao(!1),No.current&&(No.current.innerHTML="")};return document.addEventListener("mouseup",b),()=>document.removeEventListener("mouseup",b)},[A,ho]);const Pe=_.useCallback(async(b,v,k)=>{const M=Pt.webhookUrl||C;if(!M||!Pt.webhooksEnabled&&!k)return!1;try{return(await fetch(M,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:b,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...v})})).ok}catch(N){return console.warn("[Agentation] Webhook failed:",N),!1}},[C,Pt.webhookUrl,Pt.webhooksEnabled]),rt=_.useCallback(b=>{var k;if(!I)return;const v={id:Date.now().toString(),x:I.x,y:I.y,comment:b,element:I.element,elementPath:I.elementPath,timestamp:Date.now(),selectedText:I.selectedText,boundingBox:I.boundingBox,nearbyText:I.nearbyText,cssClasses:I.cssClasses,isMultiSelect:I.isMultiSelect,isFixed:I.isFixed,fullPath:I.fullPath,accessibility:I.accessibility,computedStyles:I.computedStyles,nearbyElements:I.nearbyElements,reactComponents:I.reactComponents,sourceFile:I.sourceFile,elementBoundingBoxes:I.elementBoundingBoxes,...g&&bn?{sessionId:bn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};P(M=>[...M,v]),Ns.current=v.id,Ft(()=>{Ns.current=null},300),Ft(()=>{uo(M=>new Set(M).add(v.id))},250),a==null||a(v),Pe("annotation.add",{annotation:v}),fo(!0),Ft(()=>{fe(null),fo(!1)},150),(k=window.getSelection())==null||k.removeAllRanges(),g&&bn&&Cl(g,bn,v).then(M=>{M.id!==v.id&&(P(N=>N.map(H=>H.id===v.id?{...H,id:M.id}:H)),uo(N=>{const H=new Set(N);return H.delete(v.id),H.add(M.id),H}))}).catch(M=>{console.warn("[Agentation] Failed to sync annotation:",M)})},[I,a,Pe,g,bn]),Wt=_.useCallback(()=>{fo(!0),Ft(()=>{fe(null),fo(!1)},150)},[]),Vt=_.useCallback(b=>{const v=R.findIndex(M=>M.id===b),k=R[v];(K==null?void 0:K.id)===b&&(As(!0),Ft(()=>{De(null),at(null),Ie([]),As(!1)},150)),pt(b),ui(M=>new Set(M).add(b)),k&&(c==null||c(k),Pe("annotation.delete",{annotation:k})),g&&lr(g,b).catch(M=>{console.warn("[Agentation] Failed to delete annotation from server:",M)}),Ft(()=>{P(M=>M.filter(N=>N.id!==b)),ui(M=>{const N=new Set(M);return N.delete(b),N}),pt(null),v<R.length-1&&(Kt(v),Ft(()=>Kt(null),200))},150)},[R,K,c,Pe,g]),At=_.useCallback(b=>{var v;if(!b){Ve(null),Tt(null),lt([]);return}if(Ve(b.id),(v=b.elementBoundingBoxes)!=null&&v.length){const k=[];for(const M of b.elementBoundingBoxes){const N=M.x+M.width/2,H=M.y+M.height/2-window.scrollY,he=document.elementsFromPoint(N,H).find(Te=>!Te.closest("[data-annotation-marker]")&&!Te.closest("[data-agentation-root]"));he&&k.push(he)}lt(k),Tt(null)}else if(b.boundingBox){const k=b.boundingBox,M=k.x+k.width/2,N=b.isFixed?k.y+k.height/2:k.y+k.height/2-window.scrollY,H=Lr(M,N);if(H){const oe=H.getBoundingClientRect(),he=oe.width/k.width,Te=oe.height/k.height;he<.5||Te<.5?Tt(null):Tt(H)}else Tt(null);lt([])}else Tt(null),lt([])},[]),nn=_.useCallback(b=>{if(!K)return;const v={...K,comment:b};P(k=>k.map(M=>M.id===K.id?v:M)),u==null||u(v),Pe("annotation.update",{annotation:v}),g&&Lx(g,K.id,{comment:b}).catch(k=>{console.warn("[Agentation] Failed to update annotation on server:",k)}),As(!0),Ft(()=>{De(null),at(null),Ie([]),As(!1)},150)},[K,u,Pe,g]),vn=_.useCallback(()=>{As(!0),Ft(()=>{De(null),at(null),Ie([]),As(!1)},150)},[]),ln=_.useCallback(()=>{const b=R.length,v=Ke.length>0||!!Ge;if(b===0&&Mn.length===0&&!v)return;if(d==null||d(R),Pe("annotations.clear",{annotations:R}),g){Promise.all(R.map(N=>lr(g,N.id).catch(H=>{console.warn("[Agentation] Failed to delete annotation from server:",H)})));for(const[,N]of ws.current)N&&lr(g,N).catch(()=>{});ws.current.clear();for(const[,N]of Ks.current)N&&lr(g,N).catch(()=>{});Ks.current.clear()}Le(!0),Me(!0),Uo([]);const k=Qs.current;if(k){const N=k.getContext("2d");N&&N.clearRect(0,0,k.width,k.height)}(Ke.length>0||Ge)&&(jn(N=>N+1),Hs(N=>N+1),Ft(()=>{Rt([]),$n(null)},200)),ft&&Ht(!1),pn&&Jt(""),Vn.current={rearrange:null,placements:[]},wd(Et);const M=b*30+200;Ft(()=>{P([]),uo(new Set),localStorage.removeItem(Kd(Et)),Le(!1)},M),Ft(()=>Me(!1),1500)},[Et,R,Mn,Ke,Ge,ft,pn,d,Pe,g]),Gn=_.useCallback(async()=>{const b=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Et,v=Re&&ft;let k;if(v){if(Ke.length===0&&!Ge&&!pn)return;k=""}else{if(k=$x(R,b,Pt.outputDetail),!k&&Mn.length===0&&Ke.length===0&&!Ge)return;k||(k=`## Page Feedback: ${b}
`)}if(!v&&Mn.length>0){const M=new Set;for(const he of R)he.drawingIndex!=null&&M.add(he.drawingIndex);const N=Qs.current;N&&(N.style.visibility="hidden");const H=[],oe=window.scrollY;for(let he=0;he<Mn.length;he++){if(M.has(he))continue;const Te=Mn[he];if(Te.points.length<2)continue;const et=Te.fixed?Te.points:Te.points.map(Yn=>({x:Yn.x,y:Yn.y-oe}));let ut=1/0,q=1/0,Z=-1/0,ie=-1/0;for(const Yn of et)ut=Math.min(ut,Yn.x),q=Math.min(q,Yn.y),Z=Math.max(Z,Yn.x),ie=Math.max(ie,Yn.y);const ee=Z-ut,Ee=ie-q,qe=Math.hypot(ee,Ee),it=et[0],dt=et[et.length-1],Bt=Math.hypot(dt.x-it.x,dt.y-it.y);let yt;const jt=Bt<qe*.35,Cn=ee/Math.max(Ee,1);if(jt&&qe>20){const Yn=Math.max(ee,Ee)*.15;let mi=0;for(const Ai of et){const _r=Ai.x-ut<Yn,Wr=Z-Ai.x<Yn,Fr=Ai.y-q<Yn,Xr=ie-Ai.y<Yn;(_r||Wr)&&(Fr||Xr)&&mi++}yt=mi>et.length*.15?"box":"circle"}else Cn>3&&Ee<40?yt="underline":Bt>qe*.5?yt="arrow":yt="drawing";const Xt=Math.min(10,et.length),cn=Math.max(1,Math.floor(et.length/Xt)),On=new Set,zn=[],jo=[it];for(let Yn=cn;Yn<et.length-1;Yn+=cn)jo.push(et[Yn]);jo.push(dt);for(const Yn of jo){const mi=Lr(Yn.x,Yn.y);if(!mi||On.has(mi)||oi(mi,"[data-feedback-toolbar]"))continue;On.add(mi);const{name:Ai}=Nl(mi);zn.includes(Ai)||zn.push(Ai)}const Lo=`${Math.round(ut)},${Math.round(q)} → ${Math.round(Z)},${Math.round(ie)}`;let hi;(yt==="circle"||yt==="box")&&zn.length>0?hi=`${yt==="box"?"Boxed":"Circled"} **${zn[0]}**${zn.length>1?` (and ${zn.slice(1).join(", ")})`:""} (region: ${Lo})`:yt==="underline"&&zn.length>0?hi=`Underlined **${zn[0]}** (${Lo})`:yt==="arrow"&&zn.length>=2?hi=`Arrow from **${zn[0]}** to **${zn[zn.length-1]}** (${Math.round(it.x)},${Math.round(it.y)} → ${Math.round(dt.x)},${Math.round(dt.y)})`:zn.length>0?hi=`${yt==="arrow"?"Arrow":"Drawing"} near **${zn.join("**, **")}** (region: ${Lo})`:hi=`Drawing at ${Lo}`,H.push(hi)}N&&(N.style.visibility=""),H.length>0&&(k+=`
**Drawings:**
`,H.forEach((he,Te)=>{k+=`${Te+1}. ${he}
`}))}if((Ke.length>0||v&&pn)&&(k+=`
`+Nx(Ke,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ft,wireframePurpose:pn||void 0},Pt.outputDetail)),Ge){const M=Dx(Ge,Pt.outputDetail,{width:window.innerWidth,height:window.innerHeight});M&&(k+=`
`+M)}if(y)try{await navigator.clipboard.writeText(k)}catch{}h==null||h(k),z(!0),Ft(()=>z(!1),2e3),Pt.autoClearAfterCopy&&Ft(()=>ln(),500)},[R,Mn,Ke,Ge,ft,Re,ls,pn,Et,Pt.outputDetail,Zs,Pt.autoClearAfterCopy,ln,y,h]),sn=_.useCallback(async()=>{const b=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Et;let v=$x(R,b,Pt.outputDetail);if(!v&&Ke.length===0&&!Ge)return;if(v||(v=`## Page Feedback: ${b}
`),Ke.length>0&&(v+=`
`+Nx(Ke,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ft,wireframePurpose:pn||void 0},Pt.outputDetail)),Ge){const M=Dx(Ge,Pt.outputDetail,{width:window.innerWidth,height:window.innerHeight});M&&(v+=`
`+M)}p&&p(v,R),Q("sending"),await new Promise(M=>Ft(M,150));const k=await Pe("submit",{output:v,annotations:R},!0);Q(k?"sent":"failed"),Ft(()=>Q("idle"),2500),k&&Pt.autoClearAfterCopy&&Ft(()=>ln(),500)},[p,Pe,R,Ke,Ge,ft,ls,Et,Pt.outputDetail,Zs,Pt.autoClearAfterCopy,ln]);_.useEffect(()=>{if(!Ts)return;const b=10,v=M=>{const N=M.clientX-Ts.x,H=M.clientY-Ts.y,oe=Math.sqrt(N*N+H*H);if(!eo&&oe>b&&Yo(!0),eo||oe>b){let he=Ts.toolbarX+N,Te=Ts.toolbarY+H;const et=20,ut=337,q=44,ie=ut-(A?Ms==="connected"?297:257:44),ee=et-ie,Ee=window.innerWidth-et-ut;he=Math.max(ee,Math.min(Ee,he)),Te=Math.max(et,Math.min(window.innerHeight-q-et,Te)),Es({x:he,y:Te})}},k=()=>{eo&&(Qo.current=!0),Yo(!1),ji(null)};return document.addEventListener("mousemove",v),document.addEventListener("mouseup",k),()=>{document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",k)}},[Ts,eo,A,Ms]);const Ut=_.useCallback(b=>{var H,oe;if(b.target.closest("button")||b.target.closest("[data-agentation-settings-panel]"))return;const v=b.currentTarget.parentElement;if(!v)return;const k=v.getBoundingClientRect(),M=(H=_n==null?void 0:_n.x)!=null?H:k.left,N=(oe=_n==null?void 0:_n.y)!=null?oe:k.top;ji({x:b.clientX,y:b.clientY,toolbarX:M,toolbarY:N})},[_n]);if(_.useEffect(()=>{if(!_n)return;const b=()=>{let N=_n.x,H=_n.y;const Te=20-(337-(A?Ms==="connected"?297:257:44)),et=window.innerWidth-20-337;N=Math.max(Te,Math.min(et,N)),H=Math.max(20,Math.min(window.innerHeight-44-20,H)),(N!==_n.x||H!==_n.y)&&Es({x:N,y:H})};return b(),window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[_n,A,Ms]),_.useEffect(()=>{const b=v=>{const k=v.target,M=k.tagName==="INPUT"||k.tagName==="TEXTAREA"||k.isContentEditable;if(v.key==="Escape"){if(Re){wt?mt(null):Do();return}if(qn){gs(!1);return}if(wn.length>0){Vs([]);return}I||A&&(ms(),T(!1))}if((v.metaKey||v.ctrlKey)&&v.shiftKey&&(v.key==="f"||v.key==="F")){v.preventDefault(),ms(),A?So():T(!0);return}if(!(M||v.metaKey||v.ctrlKey)&&((v.key==="p"||v.key==="P")&&(v.preventDefault(),ms(),W()),(v.key==="l"||v.key==="L")&&(v.preventDefault(),ms(),qn&&gs(!1),je&&tt(!1),I&&Wt(),Re?Do():Je(!0)),(v.key==="h"||v.key==="H")&&R.length>0&&(v.preventDefault(),ms(),D(N=>!N)),(v.key==="c"||v.key==="C")&&(R.length>0||Ke.length>0||Ge)&&(v.preventDefault(),ms(),Gn()),(v.key==="x"||v.key==="X")&&(R.length>0||Ke.length>0||Ge)&&(v.preventDefault(),ms(),ln(),Ke.length>0&&Rt([]),Ge&&$n(null)),v.key==="s"||v.key==="S")){const N=pa(Pt.webhookUrl)||pa(C||"");R.length>0&&N&&ae==="idle"&&(v.preventDefault(),ms(),sn())}};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[A,qn,Re,wt,Ke,Ge,I,R.length,Pt.webhookUrl,C,ae,sn,W,Gn,ln,wn]),!ot||F)return null;const Bn=R.length>0,ys=R.filter(b=>!Zo.has(b.id)&&b.kind!=="placement"&&b.kind!=="rearrange"),po=ys.length>0,Bs=R.filter(b=>Zo.has(b.id)),Ti=b=>{const H=b.x/100*window.innerWidth,oe=typeof b.y=="string"?parseFloat(b.y):b.y,he={};window.innerHeight-oe-22-10<80&&(he.top="auto",he.bottom="calc(100% + 10px)");const et=H-200/2,ut=10;if(et<ut){const q=ut-et;he.left=`calc(50% + ${q}px)`}else if(et+200>window.innerWidth-ut){const q=et+200-(window.innerWidth-ut);he.left=`calc(50% - ${q}px)`}return he};return zl.createPortal(l.jsxs("div",{ref:le,style:{display:"contents"},"data-agentation-theme":ks?"dark":"light","data-agentation-accent":Pt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${Qe.toolbar}${j?` ${j}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:_n?{left:_n.x,top:_n.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${Qe.toolbarContainer} ${A?Qe.expanded:Qe.collapsed} ${co?Qe.entrance:""} ${V?Qe.hiding:""} ${!Pt.webhooksEnabled&&(pa(Pt.webhookUrl)||pa(C||""))?Qe.serverConnected:""}`,onClick:A?void 0:b=>{if(Qo.current){Qo.current=!1,b.preventDefault();return}T(!0)},onMouseDown:Ut,role:A?void 0:"button",tabIndex:A?-1:0,title:A?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${Qe.toggleContent} ${A?Qe.hidden:Qe.visible}`,children:[l.jsx(W3,{size:24}),po&&l.jsx("span",{className:`${Qe.badge} ${A?Qe.fadeOut:""} ${co?Qe.entrance:""}`,children:ys.length})]}),l.jsxs("div",{className:`${Qe.controlsContent} ${A?Qe.visible:Qe.hidden} ${_n&&_n.y<100?Qe.tooltipBelow:""} ${We||je?Qe.tooltipsHidden:""} ${Us?Qe.tooltipsInSession:""}`,onMouseEnter:Vo,onMouseLeave:ci,children:[l.jsxs("div",{className:`${Qe.buttonWrapper} ${_n&&_n.x<120?Qe.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:Qe.controlButton,onClick:b=>{b.stopPropagation(),ms(),W()},"data-active":J,children:l.jsx(K3,{size:24,isPaused:J})}),l.jsxs("span",{className:Qe.buttonTooltip,children:[J?"Resume animations":"Pause animations",l.jsx("span",{className:Qe.shortcut,children:"P"})]})]}),l.jsxs("div",{className:Qe.buttonWrapper,children:[l.jsx("button",{className:`${Qe.controlButton} ${ks?"":Qe.light}`,onClick:b=>{b.stopPropagation(),ms(),qn&&gs(!1),je&&tt(!1),I&&Wt(),Re?Do():Je(!0)},"data-active":Re,style:Re&&ft?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(ij,{size:21})}),l.jsxs("span",{className:Qe.buttonTooltip,children:[Re?"Exit layout mode":"Layout mode",l.jsx("span",{className:Qe.shortcut,children:"L"})]})]}),l.jsxs("div",{className:Qe.buttonWrapper,children:[l.jsx("button",{className:Qe.controlButton,onClick:b=>{b.stopPropagation(),ms(),D(!L)},disabled:!Bn||Re,children:l.jsx(q3,{size:24,isOpen:L})}),l.jsxs("span",{className:Qe.buttonTooltip,children:[L?"Hide markers":"Show markers",l.jsx("span",{className:Qe.shortcut,children:"H"})]})]}),l.jsxs("div",{className:Qe.buttonWrapper,children:[l.jsx("button",{className:`${Qe.controlButton} ${xe?Qe.statusShowing:""}`,onClick:b=>{b.stopPropagation(),ms(),Gn()},disabled:Re&&ft?Ke.length===0&&!((_o=Ge==null?void 0:Ge.sections)!=null&&_o.length):!Bn&&Mn.length===0&&Ke.length===0&&!((Co=Ge==null?void 0:Ge.sections)!=null&&Co.length),"data-active":xe,children:l.jsx(X3,{size:24,copied:xe,tint:Re&&ft&&(Ke.length>0||(ko=Ge==null?void 0:Ge.sections)!=null&&ko.length)?"#f97316":void 0})}),l.jsxs("span",{className:Qe.buttonTooltip,children:[Re&&ft?"Copy layout":"Copy feedback",l.jsx("span",{className:Qe.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${Qe.buttonWrapper} ${Qe.sendButtonWrapper} ${A&&!Pt.webhooksEnabled&&(pa(Pt.webhookUrl)||pa(C||""))?Qe.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${Qe.controlButton} ${ae==="sent"||ae==="failed"?Qe.statusShowing:""}`,onClick:b=>{b.stopPropagation(),ms(),sn()},disabled:!Bn||!pa(Pt.webhookUrl)&&!pa(C||"")||ae==="sending","data-no-hover":ae==="sent"||ae==="failed",tabIndex:pa(Pt.webhookUrl)||pa(C||"")?0:-1,children:[l.jsx(G3,{size:24,state:ae}),Bn&&ae==="idle"&&l.jsx("span",{className:Qe.buttonBadge,children:R.length})]}),l.jsxs("span",{className:Qe.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:Qe.shortcut,children:"S"})]})]}),l.jsxs("div",{className:Qe.buttonWrapper,children:[l.jsx("button",{className:Qe.controlButton,onClick:b=>{b.stopPropagation(),ms(),ln()},disabled:!Bn&&Mn.length===0&&Ke.length===0&&!((Ro=Ge==null?void 0:Ge.sections)!=null&&Ro.length),"data-danger":!0,children:l.jsx(Z3,{size:24})}),l.jsxs("span",{className:Qe.buttonTooltip,children:["Clear all",l.jsx("span",{className:Qe.shortcut,children:"X"})]})]}),l.jsxs("div",{className:Qe.buttonWrapper,children:[l.jsx("button",{className:Qe.controlButton,onClick:b=>{b.stopPropagation(),ms(),Re&&Do(),tt(!je)},children:l.jsx(Q3,{size:24})}),g&&Ms!=="disconnected"&&l.jsx("span",{className:`${Qe.mcpIndicator} ${Qe[Ms]} ${je?Qe.hidden:""}`,title:Ms==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:Qe.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:Qe.divider}),l.jsxs("div",{className:`${Qe.buttonWrapper} ${_n&&typeof window<"u"&&_n.x>window.innerWidth-120?Qe.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:Qe.controlButton,onClick:b=>{b.stopPropagation(),ms(),So()},children:l.jsx(J3,{size:24})}),l.jsxs("span",{className:Qe.buttonTooltip,children:["Exit",l.jsx("span",{className:Qe.shortcut,children:"Esc"})]})]})]}),l.jsx(B8,{visible:Re&&A,activeType:wt,onSelect:b=>{mt(wt===b?null:b)},isDarkMode:ks,sectionCount:(go=Ge==null?void 0:Ge.sections.length)!=null?go:0,onDetectSections:()=>{var oe,he;const b=W8(),v=(oe=Ge==null?void 0:Ge.sections)!=null?oe:[],k=new Set(v.map(Te=>Te.selector)),M=b.filter(Te=>!k.has(Te.selector)),N=[...v,...M],H=[...(he=Ge==null?void 0:Ge.originalOrder)!=null?he:[],...M.map(Te=>Te.id)];$n({sections:N,originalOrder:H,detectedAt:Date.now()})},placementCount:Ke.length,onClearPlacements:()=>{jn(b=>b+1),Hs(b=>b+1),Ft(()=>{$n({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:ft,onBlankCanvasChange:b=>{const v={sections:[],originalOrder:[],detectedAt:Date.now()};b?(Ds.current={rearrange:Ge,placements:Ke},$n(Vn.current.rearrange||v),Rt(Vn.current.placements),mt(null)):(Vn.current={rearrange:Ge,placements:Ke},$n(Ds.current.rearrange||v),Rt(Ds.current.placements)),Ht(b)},wireframePurpose:pn,onWireframePurposeChange:Jt,Tooltip:Ir,onDragStart:(b,v)=>{var q;v.preventDefault();const k=Mt[b];let M=null,N=!1;const H=v.clientX,oe=v.clientY,he=v.target.closest("[data-feedback-toolbar]"),Te=(q=he==null?void 0:he.getBoundingClientRect().top)!=null?q:window.innerHeight,et=Z=>{const ie=Z.clientX-H,ee=Z.clientY-oe;if(!N&&(Math.abs(ie)>4||Math.abs(ee)>4)&&(N=!0,M=document.createElement("div"),M.className=`${ze.dragPreview}${ft?` ${ze.dragPreviewWireframe}`:""}`,document.body.appendChild(M)),!M)return;const Ee=Math.max(0,Te-Z.clientY),qe=Math.min(1,Ee/180),it=1-Math.pow(1-qe,2),dt=28,Bt=20,yt=Math.min(140,k.width*.18),jt=Math.min(90,k.height*.18),Cn=dt+(yt-dt)*it,Xt=Bt+(jt-Bt)*it;M.style.width=`${Cn}px`,M.style.height=`${Xt}px`,M.style.left=`${Z.clientX-Cn/2}px`,M.style.top=`${Z.clientY-Xt/2}px`,M.style.opacity=`${.5+.5*it}`,M.textContent=it>.25?b:""},ut=Z=>{if(window.removeEventListener("mousemove",et),window.removeEventListener("mouseup",ut),M&&document.body.removeChild(M),N){const ie=k.width,ee=k.height,Ee=window.scrollY,qe=Math.max(0,Z.clientX-ie/2),it=Math.max(0,Z.clientY+Ee-ee/2),dt={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:b,x:qe,y:it,width:ie,height:ee,scrollY:Ee,timestamp:Date.now()};Rt(Bt=>[...Bt,dt]),mt(null),Rn.current=new Set,Is(Bt=>Bt+1)}};window.addEventListener("mousemove",et),window.addEventListener("mouseup",ut)}}),l.jsx(e7,{settings:Pt,onSettingsChange:b=>Ys(v=>({...v,...b})),isDarkMode:ks,onToggleTheme:ps,isDevMode:Ws,connectionStatus:Ms,endpoint:g,isVisible:Ue,toolbarNearBottom:!!_n&&_n.y<230,settingsPage:ye,onSettingsPageChange:st,onHideToolbar:Pi})]})}),(Re||bt)&&l.jsx("div",{className:`${ze.blankCanvas} ${dn?ze.visible:""} ${zt?ze.gridActive:""}`,style:{"--canvas-opacity":St},"data-feedback-toolbar":!0}),Re&&ft&&dn&&l.jsxs("div",{className:ze.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:ze.wireframeOpacityRow,children:[l.jsx("span",{className:ze.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:ze.wireframeOpacitySlider,min:0,max:1,step:.01,value:St,onChange:b=>fn(Number(b.target.value))})]}),l.jsxs("div",{className:ze.wireframeNoticeTitleRow,children:[l.jsx("span",{className:ze.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:ze.wireframeNoticeDivider}),l.jsx("button",{className:ze.wireframeStartOver,onClick:()=>{jn(b=>b+1),$n({sections:[],originalOrder:[],detectedAt:Date.now()}),Vn.current={rearrange:null,placements:[]},Jt(""),wd(Et)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Re||bt)&&l.jsx(T8,{placements:Ke,onChange:Rt,activeComponent:bt?null:wt,onActiveComponentChange:mt,isDarkMode:ks,exiting:bt,onInteractionChange:tn,passthrough:!wt,extraSnapRects:Ge==null?void 0:Ge.sections.map(b=>b.currentRect),deselectSignal:bo,clearSignal:Zt,wireframe:ft,onSelectionChange:(b,v)=>{Rn.current=b,v||(hs.current=new Set,Ps(k=>k+1))},onDragMove:(b,v)=>{const k=hs.current;if(!(!k.size||!Ge)){if(!en.current){en.current=new Map;for(const M of Ge.sections)k.has(M.id)&&en.current.set(M.id,{x:M.currentRect.x,y:M.currentRect.y})}for(const M of Ge.sections){if(!k.has(M.id)||!en.current.get(M.id))continue;const H=document.querySelector(`[data-rearrange-section="${M.id}"]`);H&&(H.style.transform=`translate(${b}px, ${v}px)`)}}},onDragEnd:(b,v,k)=>{const M=hs.current,N=en.current;if(en.current=null,!(!M.size||!Ge||!N)){for(const H of M){const oe=document.querySelector(`[data-rearrange-section="${H}"]`);oe&&(oe.style.transform="")}k&&$n(H=>H&&{...H,sections:H.sections.map(oe=>{const he=N.get(oe.id);return he?{...oe,currentRect:{...oe.currentRect,x:Math.max(0,he.x+b),y:Math.max(0,he.y+v)}}:oe})})}}}),(Re||bt)&&Ge&&l.jsx(G8,{rearrangeState:Ge,onChange:$n,isDarkMode:ks,exiting:bt,blankCanvas:ft,extraSnapRects:Ke.map(b=>({x:b.x,y:b.y,width:b.width,height:b.height})),clearSignal:yn,deselectSignal:lo,onSelectionChange:(b,v)=>{hs.current=b,v||(Rn.current=new Set,Is(k=>k+1))},onDragMove:(b,v)=>{const k=Rn.current;if(k.size){if(!en.current){en.current=new Map;for(const M of Ke)k.has(M.id)&&en.current.set(M.id,{x:M.x,y:M.y})}for(const M of k){const N=document.querySelector(`[data-design-placement="${M}"]`);N&&(N.style.transform=`translate(${b}px, ${v}px)`)}}},onDragEnd:(b,v,k)=>{const M=Rn.current,N=en.current;if(en.current=null,!(!M.size||!N)){for(const H of M){const oe=document.querySelector(`[data-design-placement="${H}"]`);oe&&(oe.style.transform="")}k&&Rt(H=>H.map(oe=>{const he=N.get(oe.id);return he?{...oe,x:Math.max(0,he.x+b),y:Math.max(0,he.y+v)}:oe}))}}}),l.jsx("canvas",{ref:Qs,className:`${Qe.drawCanvas} ${qn?Qe.active:""}`,style:{opacity:to?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:Qe.markersLayer,"data-feedback-toolbar":!0,children:[ue&&ys.filter(b=>!b.isFixed).map((b,v,k)=>l.jsx(Ix,{annotation:b,globalIndex:ys.findIndex(M=>M.id===b.id),layerIndex:v,layerSize:k.length,isExiting:Ne,isClearing:me,isAnimated:To.has(b.id),isHovered:!Ne&&Ze===b.id,isDeleting:$t===b.id,isEditingAny:!!K,renumberFrom:qt,markerClickBehavior:Pt.markerClickBehavior,tooltipStyle:Ti(b),onHoverEnter:M=>!Ne&&M.id!==Ns.current&&At(M),onHoverLeave:()=>At(null),onClick:M=>Pt.markerClickBehavior==="delete"?Vt(M.id):Ce(M),onContextMenu:Ce},b.id)),ue&&!Ne&&Bs.filter(b=>!b.isFixed).map(b=>l.jsx(Px,{annotation:b},b.id))]}),l.jsxs("div",{className:Qe.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[ue&&ys.filter(b=>b.isFixed).map((b,v,k)=>l.jsx(Ix,{annotation:b,globalIndex:ys.findIndex(M=>M.id===b.id),layerIndex:v,layerSize:k.length,isExiting:Ne,isClearing:me,isAnimated:To.has(b.id),isHovered:!Ne&&Ze===b.id,isDeleting:$t===b.id,isEditingAny:!!K,renumberFrom:qt,markerClickBehavior:Pt.markerClickBehavior,tooltipStyle:Ti(b),onHoverEnter:M=>!Ne&&M.id!==Ns.current&&At(M),onHoverLeave:()=>At(null),onClick:M=>Pt.markerClickBehavior==="delete"?Vt(M.id):Ce(M),onContextMenu:Ce},b.id)),ue&&!Ne&&Bs.filter(b=>b.isFixed).map(b=>l.jsx(Px,{annotation:b,fixed:!0},b.id))]}),A&&l.jsxs("div",{className:Qe.overlay,"data-feedback-toolbar":!0,style:I||K?{zIndex:99999}:void 0,children:[(ne==null?void 0:ne.rect)&&!I&&!kt&&!ho&&l.jsx("div",{className:`${Qe.hoverHighlight} ${Qe.enter}`,style:{left:ne.rect.left,top:ne.rect.top,width:ne.rect.width,height:ne.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),wn.filter(b=>document.contains(b.element)).map((b,v)=>{const k=b.element.getBoundingClientRect(),M=wn.length>1;return l.jsx("div",{className:M?Qe.multiSelectOutline:Qe.singleSelectOutline,style:{position:"fixed",left:k.left,top:k.top,width:k.width,height:k.height,...M?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},v)}),Ze&&!I&&(()=>{var N;const b=R.find(H=>H.id===Ze);if(!(b!=null&&b.boundingBox))return null;if((N=b.elementBoundingBoxes)!=null&&N.length)return Ct.length>0?Ct.filter(H=>document.contains(H)).map((H,oe)=>{const he=H.getBoundingClientRect();return l.jsx("div",{className:`${Qe.multiSelectOutline} ${Qe.enter}`,style:{left:he.left,top:he.top,width:he.width,height:he.height}},`hover-outline-live-${oe}`)}):b.elementBoundingBoxes.map((H,oe)=>l.jsx("div",{className:`${Qe.multiSelectOutline} ${Qe.enter}`,style:{left:H.x,top:H.y-xt,width:H.width,height:H.height}},`hover-outline-${oe}`));const v=ht&&document.contains(ht)?ht.getBoundingClientRect():null,k=v?{x:v.left,y:v.top,width:v.width,height:v.height}:{x:b.boundingBox.x,y:b.isFixed?b.boundingBox.y:b.boundingBox.y-xt,width:b.boundingBox.width,height:b.boundingBox.height},M=b.isMultiSelect;return l.jsx("div",{className:`${M?Qe.multiSelectOutline:Qe.singleSelectOutline} ${Qe.enter}`,style:{left:k.x,top:k.y,width:k.width,height:k.height,...M?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),ne&&!I&&!kt&&!ho&&l.jsxs("div",{className:`${Qe.hoverTooltip} ${Qe.enter}`,style:{left:Math.max(8,Math.min(O.x,window.innerWidth-100)),top:Math.max(O.y-(ne.reactComponents?48:32),8)},children:[ne.reactComponents&&l.jsx("div",{className:Qe.hoverReactPath,children:ne.reactComponents}),l.jsx("div",{className:Qe.hoverElementName,children:ne.elementName})]}),I&&l.jsxs(l.Fragment,{children:[(Bo=I.multiSelectElements)!=null&&Bo.length?I.multiSelectElements.filter(b=>document.contains(b)).map((b,v)=>{const k=b.getBoundingClientRect();return l.jsx("div",{className:`${Qe.multiSelectOutline} ${cs?Qe.exit:Qe.enter}`,style:{left:k.left,top:k.top,width:k.width,height:k.height}},`pending-multi-${v}`)}):I.targetElement&&document.contains(I.targetElement)?(()=>{const b=I.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${Qe.singleSelectOutline} ${cs?Qe.exit:Qe.enter}`,style:{left:b.left,top:b.top,width:b.width,height:b.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():I.boundingBox&&l.jsx("div",{className:`${I.isMultiSelect?Qe.multiSelectOutline:Qe.singleSelectOutline} ${cs?Qe.exit:Qe.enter}`,style:{left:I.boundingBox.x,top:I.boundingBox.y-xt,width:I.boundingBox.width,height:I.boundingBox.height,...I.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const b=I.x,v=I.isFixed?I.y:I.y-xt;return l.jsxs(l.Fragment,{children:[l.jsx(YM,{x:b,y:v,isMultiSelect:I.isMultiSelect,isExiting:cs}),l.jsx(Gd,{ref:ei,element:I.element,selectedText:I.selectedText,computedStyles:I.computedStylesObj,placeholder:I.element==="Area selection"?"What should change in this area?":I.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:rt,onCancel:Wt,isExiting:cs,lightMode:!ks,accentColor:I.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,b/100*window.innerWidth)),...v>window.innerHeight-290?{bottom:window.innerHeight-v+20}:{top:v+20}}})]})})()]}),K&&l.jsxs(l.Fragment,{children:[(ca=K.elementBoundingBoxes)!=null&&ca.length?_t.length>0?_t.filter(b=>document.contains(b)).map((b,v)=>{const k=b.getBoundingClientRect();return l.jsx("div",{className:`${Qe.multiSelectOutline} ${Qe.enter}`,style:{left:k.left,top:k.top,width:k.width,height:k.height}},`edit-multi-live-${v}`)}):K.elementBoundingBoxes.map((b,v)=>l.jsx("div",{className:`${Qe.multiSelectOutline} ${Qe.enter}`,style:{left:b.x,top:b.y-xt,width:b.width,height:b.height}},`edit-multi-${v}`)):(()=>{const b=ct&&document.contains(ct)?ct.getBoundingClientRect():null,v=b?{x:b.left,y:b.top,width:b.width,height:b.height}:K.boundingBox?{x:K.boundingBox.x,y:K.isFixed?K.boundingBox.y:K.boundingBox.y-xt,width:K.boundingBox.width,height:K.boundingBox.height}:null;return v?l.jsx("div",{className:`${K.isMultiSelect?Qe.multiSelectOutline:Qe.singleSelectOutline} ${Qe.enter}`,style:{left:v.x,top:v.y,width:v.width,height:v.height,...K.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(Gd,{ref:Ei,element:K.element,selectedText:K.selectedText,computedStyles:H8(K.computedStyles),placeholder:"Edit your feedback...",initialValue:K.comment,submitLabel:"Save",onSubmit:nn,onCancel:vn,onDelete:()=>Vt(K.id),isExiting:Wo,lightMode:!ks,accentColor:K.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const b=K.isFixed?K.y:K.y-xt;return{left:Math.max(160,Math.min(window.innerWidth-160,K.x/100*window.innerWidth)),...b>window.innerHeight-290?{bottom:window.innerHeight-b+20}:{top:b+20}}})()})]}),ho&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:ts,className:Qe.dragSelection}),l.jsx("div",{ref:No,className:Qe.highlightsContainer})]})]})]}),document.body)}var s7=Object.freeze({}),o7=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(e,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(e,{id:e,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(e,{...u}),this.baseValues.set(e,{...u}),this.notifyGlobal()}updatePanel(e,n,i,a){var w;const c=this.panels.get(e);if(!c){this.registerPanel(e,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[C,j]of Object.entries(h))p[C]=this.normalizePreservedValue(c.values[C],j,d.get(C));this.initTransitionModes(i,"",p);for(const[C,j]of Object.entries(c.values)){if(!C.endsWith(".__mode"))continue;const A=C.slice(0,-7),T=d.get(A);(T==null?void 0:T.type)==="transition"&&(p[C]=j)}const y={id:e,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(e,y),this.snapshots.set(e,{...p});const g=(w=this.baseValues.get(e))!=null?w:{},x={};for(const[C,j]of Object.entries(h))x[C]=this.normalizePreservedValue(g[C],j,d.get(C));for(const[C,j]of Object.entries(p))C.endsWith(".__mode")&&(x[C]=j);this.baseValues.set(e,x),this.notify(e),this.notifyGlobal()}unregisterPanel(e){this.panels.delete(e),this.listeners.delete(e),this.snapshots.delete(e),this.actionListeners.delete(e),this.baseValues.delete(e),this.notifyGlobal()}updateValue(e,n,i){var u;const a=this.panels.get(e);if(!a)return;a.values[n]=i;const c=this.activePreset.get(e);if(c){const h=((u=this.presets.get(e))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(e);d&&(d[n]=i)}this.snapshots.set(e,{...a.values}),this.notify(e)}updateSpringMode(e,n,i){this.updateTransitionMode(e,n,i)}getSpringMode(e,n){const i=this.getTransitionMode(e,n);return i==="easing"?"simple":i}updateTransitionMode(e,n,i){const a=this.panels.get(e);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(e,{...a.values}),this.notify(e))}getTransitionMode(e,n){const i=this.panels.get(e);return i&&i.values[`${n}.__mode`]||"simple"}getValue(e,n){const i=this.panels.get(e);return i==null?void 0:i.values[n]}getValues(e){var n;return(n=this.snapshots.get(e))!=null?n:s7}getPanels(){return Array.from(this.panels.values())}getPanel(e){return this.panels.get(e)}subscribe(e,n){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(n),()=>{var i;(i=this.listeners.get(e))==null||i.delete(n)}}subscribeGlobal(e){return this.globalListeners.add(e),()=>this.globalListeners.delete(e)}subscribeActions(e,n){return this.actionListeners.has(e)||this.actionListeners.set(e,new Set),this.actionListeners.get(e).add(n),()=>{var i;(i=this.actionListeners.get(e))==null||i.delete(n)}}triggerAction(e,n){var i;(i=this.actionListeners.get(e))==null||i.forEach(a=>a(n))}savePreset(e,n){var d;const i=this.panels.get(e);if(!i)throw new Error(`Panel ${e} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(e))!=null?d:[];return this.presets.set(e,[...u,c]),this.activePreset.set(e,a),this.snapshots.set(e,{...i.values}),this.notify(e),a}loadPreset(e,n){var u;const i=this.panels.get(e);if(!i)return;const c=((u=this.presets.get(e))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(e,{...i.values}),this.activePreset.set(e,n),this.notify(e))}deletePreset(e,n){var c;const i=(c=this.presets.get(e))!=null?c:[];this.presets.set(e,i.filter(u=>u.id!==n)),this.activePreset.get(e)===n&&this.activePreset.set(e,null);const a=this.panels.get(e);a&&this.snapshots.set(e,{...a.values}),this.notify(e)}getPresets(e){var n;return(n=this.presets.get(e))!=null?n:[]}getActivePresetId(e){var n;return(n=this.activePreset.get(e))!=null?n:null}clearActivePreset(e){const n=this.panels.get(e),i=this.baseValues.get(e);n&&i&&(n.values={...i},this.snapshots.set(e,{...n.values})),this.activePreset.set(e,null),this.notify(e)}resolveShortcutTarget(e,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==e.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const e=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&e.push({panelId:i.id,path:a,control:u,shortcut:c})}return e}findControlByPath(e,n){for(const i of e){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(e){var n;(n=this.listeners.get(e))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(e=>e())}initTransitionModes(e,n,i){for(const[a,c]of Object.entries(e)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(e,n,i){var c;const a=[];for(const[u,d]of Object.entries(e)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),y=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:y});else if(typeof d=="number"){const{min:g,max:x,step:w}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:g,max:x,step:w,shortcut:y})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:y});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const g=d,x="_collapsed"in g?!g._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(g,h,i)})}}return a}flattenValues(e,n){var a,c,u;const i={};for(const[d,h]of Object.entries(e)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const y=h.options[0],g=typeof y=="string"?y:y.value;i[p]=(a=h.default)!=null?a:g}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="spring"}isEasingConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="easing"}isActionConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="action"}isSelectConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="select"&&"options"in e&&Array.isArray(e.options)}isColorConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="color"}isTextConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="text"}isHexColor(e){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(e)}formatLabel(e){return e.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(e){return e>=0&&e<=1?{min:0,max:1,step:.01}:e>=0&&e<=10?{min:0,max:e*3||10,step:.1}:e>=0&&e<=100?{min:0,max:e*3||100,step:1}:e>=0?{min:0,max:e*3||1e3,step:10}:{min:e*3,max:-e*3,step:1}}inferStep(e,n){const i=n-e;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(e,n,i){var a,c,u;if(e===void 0||!i)return n;switch(i.type){case"slider":{if(typeof e!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,e));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof e=="boolean"?e:n;case"select":{if(typeof e!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(e)?e:n}case"color":case"text":return typeof e=="string"?e:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(e)?e:n:this.isEasingConfig(n)&&this.isEasingConfig(e)?e:n;case"action":return n;default:return n}}roundToStep(e,n,i,a){const c=n+Math.round((e-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(e){const n=String(e),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(e){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(e),n}},an=new o7;function i7(e,n,i){const a=_.useId(),c=`${e}-${a}`,u=_.useRef(n),d=JSON.stringify(n);u.current=n;const h=_.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=_.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const y=JSON.stringify(i==null?void 0:i.shortcuts);_.useEffect(()=>(an.registerPanel(c,e,u.current,p.current),()=>an.unregisterPanel(c)),[c,e]);const g=_.useRef(!1);_.useEffect(()=>{if(!g.current){g.current=!0;return}an.updatePanel(c,e,u.current,p.current)},[c,e,d,y]),_.useEffect(()=>an.subscribeActions(c,w=>{var C;(C=h.current)==null||C.call(h,w)}),[c]);const x=_.useSyncExternalStore(w=>an.subscribe(c,w),()=>an.getValues(c),()=>an.getValues(c));return w2(n,x,"")}function w2(e,n,i){var c,u,d,h,p,y,g,x,w,C;const a={};for(const[j,A]of Object.entries(e)){if(j==="_collapsed")continue;const T=i?`${i}.${j}`:j;if(Array.isArray(A)&&A.length<=4&&typeof A[0]=="number")a[j]=(c=n[T])!=null?c:A[0];else if(typeof A=="number"||typeof A=="boolean"||typeof A=="string")a[j]=(u=n[T])!=null?u:A;else if(a7(A)||r7(A))a[j]=(d=n[T])!=null?d:A;else if(l7(A))a[j]=(h=n[T])!=null?h:A;else if(c7(A)){const R=(p=A.default)!=null?p:f7(A.options);a[j]=(y=n[T])!=null?y:R}else u7(A)?a[j]=(x=(g=n[T])!=null?g:A.default)!=null?x:"#000000":d7(A)?a[j]=(C=(w=n[T])!=null?w:A.default)!=null?C:"":typeof A=="object"&&A!==null&&(a[j]=w2(A,n,T))}return a}function Hl(e,n){return typeof e=="object"&&e!==null&&"type"in e&&e.type===n}function a7(e){return Hl(e,"spring")}function r7(e){return Hl(e,"easing")}function l7(e){return Hl(e,"action")}function c7(e){return Hl(e,"select")&&"options"in e&&Array.isArray(e.options)}function u7(e){return Hl(e,"color")}function d7(e){return Hl(e,"text")}function f7(e){const n=e[0];return typeof n=="string"?n:n.value}function vp(e){const n=e.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function zd(e,n){const i=Math.round(e/n)*n;return parseFloat(i.toFixed(vp(n)))}function Rc(e,n){var d,h,p,y;const i=(d=e.min)!=null?d:0,c=((h=e.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(y=e.step)!=null?y:1}function Bc(e,n,i,a,c){var y,g;const u=an.getValue(e,n),d=(y=i.min)!=null?y:0,h=(g=i.max)!=null?g:1,p=Math.max(d,Math.min(h,u+c*a));an.updateValue(e,n,zd(p,a))}function h7(e,n,i){const a=(e-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):e}function jd(){const e=document.activeElement;if(!e)return!1;const n=e.tagName;return n==="INPUT"||n==="TEXTAREA"||e.contentEditable==="true"}function zm(e){if(e.altKey)return"alt";if(e.shiftKey)return"shift";if(e.metaKey)return"meta"}function S2(e,n){for(const i of e){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=S2(i.children,n);if(a)return a}}return null}var Md=4;function m7(e){switch(e){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function p7(e){var c;const n=(c=e.interaction)!=null?c:"scroll",i=m7(n);return e.key?`${C2(e.modifier)}${e.key.toUpperCase()}+${i}`:i}function _7(e){return e.key?`${C2(e.modifier)}${e.key.toUpperCase()}`:"Press"}function C2(e){return e==="alt"?"⌥":e==="shift"?"⇧":e==="meta"?"⌘":""}var k2=_.createContext({activePanelId:null,activePath:null});function g7({children:e}){const[n,i]=_.useState({activePanelId:null,activePath:null}),a=_.useRef(new Set),c=_.useRef(!1),u=_.useRef(null),d=_.useRef(0),h=_.useCallback(p=>{var y;for(const g of a.current){const x=an.getPanels();for(const w of x)for(const[C,j]of Object.entries(w.shortcuts)){if(!j.key||j.key.toLowerCase()!==g||((y=j.interaction)!=null?y:"scroll")!==p)continue;const A=S2(w.controls,C);if(A&&A.type==="slider")return{panelId:w.id,path:C,control:A,shortcut:j}}}return null},[]);return _.useEffect(()=>{const p=A=>{if(jd())return;const T=A.key.toLowerCase();if((T==="arrowleft"||T==="arrowright"||T==="arrowup"||T==="arrowdown")&&a.current.size>0){const D=h("scroll")||h("drag")||h("move");if(D&&D.control.type==="slider"){A.preventDefault();const F=T==="arrowright"||T==="arrowup"?1:-1,Y=Rc(D.control,D.shortcut);Bc(D.panelId,D.path,D.control,Y,F);return}}const R=a.current.has(T);a.current.add(T);const P=zm(A),L=an.resolveShortcutTarget(T,P);if(L&&(i({activePanelId:L.panelId,activePath:L.path}),!R&&L.control.type==="toggle")){const D=an.getValue(L.panelId,L.path);an.updateValue(L.panelId,L.path,!D)}R||(u.current=null,d.current=0)},y=A=>{const T=A.key.toLowerCase();if(a.current.delete(T),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let R=!1;for(const P of a.current){const L=zm(A),D=an.resolveShortcutTarget(P,L);if(D){i({activePanelId:D.panelId,activePath:D.path}),R=!0;break}}R||i({activePanelId:null,activePath:null})}},g=A=>{var P,L;if(jd())return;const T=zm(A);if(a.current.size>0)for(const D of a.current){const F=an.resolveShortcutTarget(D,T);if(!F)continue;const{panelId:Y,path:V,control:X}=F;if(((L=(P=X.shortcut)==null?void 0:P.interaction)!=null?L:"scroll")!=="scroll"||X.type!=="slider")continue;A.preventDefault();const ue=Rc(X,X.shortcut),pe=A.deltaY>0?-1:1;Bc(Y,V,X,ue,pe);return}const R=an.resolveScrollOnlyTargets();for(const{panelId:D,path:F,control:Y,shortcut:V}of R){if(Y.type!=="slider")continue;A.preventDefault();const X=Rc(Y,V),le=A.deltaY>0?-1:1;Bc(D,F,Y,X,le);return}},x=A=>{if(jd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=A.clientX,d.current=0,A.preventDefault())},w=()=>{c.current=!1,u.current=null,d.current=0},C=A=>{if(jd()||a.current.size===0)return;if(c.current){const R=h("drag");if(R&&u.current!==null){const P=A.clientX-u.current;u.current=A.clientX,d.current+=P;const L=Rc(R.control,R.shortcut),D=Math.trunc(d.current/Md);D!==0&&(d.current-=D*Md,Bc(R.panelId,R.path,R.control,L,D))}return}const T=h("move");if(T){if(u.current===null){u.current=A.clientX;return}const R=A.clientX-u.current;u.current=A.clientX,d.current+=R;const P=Rc(T.control,T.shortcut),L=Math.trunc(d.current/Md);L!==0&&(d.current-=L*Md,Bc(T.panelId,T.path,T.control,P,L))}},j=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",y),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",w),window.addEventListener("mousemove",C),window.addEventListener("blur",j),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",y),window.removeEventListener("wheel",g),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",w),window.removeEventListener("mousemove",C),window.removeEventListener("blur",j)}},[h]),l.jsx(k2.Provider,{value:n,children:e})}var l_="M6 9.5L12 15.5L18 9.5",y7="M5 12.75L10 19L19 5",$m={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},x7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],b7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Yx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Qd({title:e,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=_.useState(i),[y,g]=_.useState(!i),x=_.useRef(null),[w,C]=_.useState(void 0),[j,A]=_.useState(typeof window<"u"?window.innerHeight:800);_.useEffect(()=>{if(!a)return;const P=()=>A(window.innerHeight);return window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[a]),_.useEffect(()=>{const P=x.current;if(!P)return;const L=new ResizeObserver(()=>{if(h){const D=P.offsetHeight;C(F=>F===D?F:D)}});return L.observe(P),()=>L.disconnect()},[h]);const T=()=>{if(c&&a)return;const P=!h;p(P),g(!P),u==null||u(P)},R=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:T,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:e})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:e})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Yx.path,fill:"currentColor"}),Yx.circles.map((P,L)=>l.jsx("circle",{cx:P.cx,cy:P.cy,r:P.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},L))]}),!a&&l.jsx(ri.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:l_})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:P=>P.stopPropagation(),children:d})]}),l.jsx(of,{initial:!1,children:h&&l.jsx(ri.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:R});const P=h?{width:280,height:w!==void 0?Math.min(w+10,j-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(ri.div,{className:"dialkit-panel-inner",style:P,onClick:h?void 0:T,"data-collapsed":y,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:R})}return R}var v7=3,w7=32,S7=200,C7=8;function qo({label:e,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var ot;const y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),w=_.useRef(null),C=_.useRef(null),[j,A]=_.useState(!1),[T,R]=_.useState(!1),[P,L]=_.useState(!1),[D,F]=_.useState(!1),[Y,V]=_.useState(!1),[X,le]=_.useState(!1),[ue,pe]=_.useState(""),Ne=_.useRef(null),Fe=_.useRef(null),ne=_.useRef(!0),de=_.useRef(null),O=_.useRef(null),se=_.useRef(1),I=(n-a)/(c-a)*100,fe=j||P,xe=fp(I),z=ud(xe,U=>`${U}%`),ae=ud(xe,U=>`max(5px, calc(${U}% - 9px))`),Q=fp(0),be=ud(Q,U=>`calc(100% + ${Math.abs(U)}px)`),Me=ud(Q,U=>U<0?U:0);_.useEffect(()=>{!j&&!de.current&&xe.jump(I)},[I,j,xe]);const me=_.useCallback(U=>{const J=O.current;if(!J)return n;const je=(U-J.left)/se.current,tt=y.current?y.current.offsetWidth:J.width,Ue=Math.max(0,Math.min(1,je/tt)),Ae=a+Ue*(c-a);return Math.max(a,Math.min(c,Ae))},[a,c,n]),Le=_.useCallback(U=>(U-a)/(c-a)*100,[a,c]),Ze=_.useCallback((U,J)=>{const we=O.current;if(!we)return 0;const je=J<0?we.left-U:U-we.right,tt=Math.max(0,je-w7);return J*C7*Math.sqrt(Math.min(tt/S7,1))},[]),Ve=_.useCallback(U=>{if(!X&&(U.preventDefault(),U.target.setPointerCapture(U.pointerId),Fe.current={x:U.clientX,y:U.clientY},ne.current=!0,A(!0),y.current)){O.current=y.current.getBoundingClientRect();const J=y.current.offsetWidth;se.current=O.current.width/J}},[X]),ht=_.useCallback(U=>{if(!j||!Fe.current)return;const J=U.clientX-Fe.current.x,we=U.clientY-Fe.current.y,je=Math.sqrt(J*J+we*we);if(ne.current&&je>v7&&(ne.current=!1,R(!0)),!ne.current){const tt=O.current;tt&&(U.clientX<tt.left?Q.jump(Ze(U.clientX,-1)):U.clientX>tt.right?Q.jump(Ze(U.clientX,1)):Q.jump(0));const Ue=me(U.clientX),Ae=Le(Ue);de.current&&(de.current.stop(),de.current=null),xe.jump(Ae),i(zd(Ue,u))}},[j,me,Le,i,xe,Q,Ze]),Tt=_.useCallback(U=>{if(j){if(ne.current){const J=me(U.clientX),je=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((J-a)/u)*u)):h7(J,a,c),tt=Le(je);de.current&&de.current.stop(),de.current=ax(xe,tt,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{de.current=null}}),i(zd(je,u))}Q.get()!==0&&ax(Q,0,{type:"spring",visualDuration:.35,bounce:.15}),A(!1),R(!1),Fe.current=null}},[j,me,Le,i,a,c,xe,Q]);_.useEffect(()=>(D&&!X&&!Y?Ne.current=setTimeout(()=>{V(!0)},800):!D&&!X&&(Ne.current&&(clearTimeout(Ne.current),Ne.current=null),V(!1)),()=>{Ne.current&&clearTimeout(Ne.current)}),[D,X,Y]),_.useEffect(()=>{X&&x.current&&(x.current.focus(),x.current.select())},[X]);const Ct=U=>{pe(U.target.value)},lt=()=>{const U=parseFloat(ue);if(!isNaN(U)){const J=Math.max(a,Math.min(c,U));i(zd(J,u))}le(!1),F(!1),V(!1)},$t=U=>{Y&&(U.stopPropagation(),U.preventDefault(),le(!0),pe(n.toFixed(vp(u))))},pt=U=>{U.key==="Enter"?lt():U.key==="Escape"&&(le(!1),F(!1))},qt=()=>{lt()},Kt=n.toFixed(vp(u)),K=8,De=10,ct=10;let at=30,_t=78;const Ie=(ot=y.current)==null?void 0:ot.offsetWidth;Ie&&Ie>0&&(w.current&&(at=(De+w.current.offsetWidth+K)/Ie*100),C.current&&(_t=(Ie-ct-C.current.offsetWidth-K)/Ie*100));const xt=I<at||I>_t,gt=fe?xt?.1:T?.9:.5:0,kt=(c-a)/u,Xe=kt<=10?Array.from({length:kt-1},(U,J)=>{const we=(J+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${we}%`}},J)}):Array.from({length:9},(U,J)=>{const we=(J+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${we}%`}},J)});return l.jsx("div",{ref:y,className:"dialkit-slider-wrapper",children:l.jsxs(ri.div,{ref:g,className:`dialkit-slider ${fe?"dialkit-slider-active":""}`,onPointerDown:Ve,onPointerMove:ht,onPointerUp:Tt,onMouseEnter:()=>L(!0),onMouseLeave:()=>L(!1),style:{width:be,x:Me},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:Xe}),l.jsx(ri.div,{className:"dialkit-slider-fill",style:{width:z}}),l.jsx(ri.div,{className:"dialkit-slider-handle",style:{left:ae,y:"-50%"},animate:{opacity:gt,scaleX:fe?1:.25,scaleY:fe&&xt?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:w,className:"dialkit-slider-label",children:[e,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:p7(h)})]}),X?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:ue,onChange:Ct,onKeyDown:pt,onBlur:qt,onClick:U=>U.stopPropagation(),onMouseDown:U=>U.stopPropagation()}):l.jsx("span",{ref:C,className:`dialkit-slider-value ${Y?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>F(!0),onMouseLeave:()=>F(!1),onClick:$t,onMouseDown:U=>Y&&U.stopPropagation(),style:{cursor:Y?"text":"default"},children:Kt})]})})}function c_({options:e,value:n,onChange:i}){const a=_.useRef(null),c=_.useRef(!1),[u,d]=_.useState(null),h=_.useCallback(()=>{const y=a.current;if(!y)return;const g=y.querySelector('[data-active="true"]');g&&d({left:g.offsetLeft,width:g.offsetWidth})},[]);_.useLayoutEffect(()=>{h()},[n,e.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),e.map(y=>{const g=n===y.value;return l.jsx("button",{onClick:()=>i(y.value),className:"dialkit-segmented-button","data-active":String(g),children:y.label},y.value)})]})}function k7({label:e,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[e,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:_7(a)})]}),l.jsx(c_,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function j7(e,n,i,a){const c=[],d=a/100;let h=0,p=0;const y=1;for(let g=0;g<=100;g++){const x=g*d;c.push([x,h]);const w=-e*(h-y),C=-n*p,j=(w+C)/i;p+=j*d,h+=p*d}return c}function j2({spring:e,isSimpleMode:n}){var A,T,R,P,L;let c,u,d;if(n){const D=(A=e.visualDuration)!=null?A:.3,F=(T=e.bounce)!=null?T:.2;d=1,c=2*Math.PI/D,c=Math.pow(c,2),u=2*(1-F)*Math.sqrt(c*d)}else c=(R=e.stiffness)!=null?R:400,u=(P=e.damping)!=null?P:17,d=(L=e.mass)!=null?L:1;const h=2,p=j7(c,u,d,h),y=p.map(([,D])=>D),g=Math.min(...y),w=Math.max(...y)-g,C=p.map(([D,F],Y)=>{const V=D/h*256,le=140-((F-g)/(w||1)*140*.6+140*.2);return`${Y===0?"M":"L"} ${V} ${le}`}).join(" "),j=[];for(let D=1;D<4;D++){const F=64*D,Y=140/4*D;j.push(l.jsx("line",{x1:F,y1:0,x2:F,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${D}`),l.jsx("line",{x1:0,y1:Y,x2:256,y2:Y,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${D}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[j,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:C,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function M7({panelId:e,path:n,label:i,spring:a,onChange:c}){var g,x,w,C,j;const u=_.useSyncExternalStore(A=>an.subscribe(e,A),()=>an.getSpringMode(e,n),()=>an.getSpringMode(e,n)),d=u==="simple",h=_.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=A=>{an.updateSpringMode(e,n,A),c(A==="simple"?h.current.simple:h.current.advanced)},y=(A,T)=>{if(d){const{stiffness:R,damping:P,mass:L,...D}=a;c({...D,[A]:T})}else{const{visualDuration:R,bounce:P,...L}=a;c({...L,[A]:T})}};return l.jsx(Qd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(j2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(c_,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(qo,{label:"Duration",value:(g=a.visualDuration)!=null?g:.3,onChange:A=>y("visualDuration",A),min:.1,max:1,step:.05,unit:"s"}),l.jsx(qo,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:A=>y("bounce",A),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(qo,{label:"Stiffness",value:(w=a.stiffness)!=null?w:400,onChange:A=>y("stiffness",A),min:1,max:1e3,step:10}),l.jsx(qo,{label:"Damping",value:(C=a.damping)!=null?C:17,onChange:A=>y("damping",A),min:1,max:100,step:1}),l.jsx(qo,{label:"Mass",value:(j=a.mass)!=null?j:1,onChange:A=>y("mass",A),min:.1,max:10,step:.1})]})]})})}function E7({easing:e}){const n=e.ease,i=200,a=10,u=(i-a*2)/2,d=(w,C)=>({x:a+(w+.5)*u,y:a+(1.5-C)*u}),h=d(0,0),p=d(1,1),y=d(n[0],n[1]),g=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${y.x} ${y.y}, ${g.x} ${g.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function T7({panelId:e,path:n,label:i,value:a,onChange:c}){var j,A,T,R,P;const u=_.useSyncExternalStore(L=>an.subscribe(e,L),()=>an.getTransitionMode(e,n),()=>an.getTransitionMode(e,n)),d=u==="easing",h=u==="simple",p=_.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const y=a.type==="spring"?a:p.current.simple,g=a.type==="easing"?a:p.current.easing,x=L=>{an.updateTransitionMode(e,n,L),c(L==="easing"?p.current.easing:L==="simple"?p.current.simple:p.current.advanced)},w=(L,D)=>{if(h){const{stiffness:F,damping:Y,mass:V,...X}=y;c({...X,[L]:D})}else{const{visualDuration:F,bounce:Y,...V}=y;c({...V,[L]:D})}},C=(L,D)=>{const F=[...g.ease];F[L]=D,c({...g,ease:F})};return l.jsx(Qd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(E7,{easing:g}):l.jsx(j2,{spring:y,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(c_,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(qo,{label:"x1",value:g.ease[0],onChange:L=>C(0,L),min:0,max:1,step:.01}),l.jsx(qo,{label:"y1",value:g.ease[1],onChange:L=>C(1,L),min:-1,max:2,step:.01}),l.jsx(qo,{label:"x2",value:g.ease[2],onChange:L=>C(2,L),min:0,max:1,step:.01}),l.jsx(qo,{label:"y2",value:g.ease[3],onChange:L=>C(3,L),min:-1,max:2,step:.01}),l.jsx(qo,{label:"Duration",value:g.duration,onChange:L=>c({...g,duration:L}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(N7,{ease:g.ease,onChange:L=>c({...g,ease:L})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(qo,{label:"Duration",value:(j=y.visualDuration)!=null?j:.3,onChange:L=>w("visualDuration",L),min:.1,max:1,step:.05,unit:"s"}),l.jsx(qo,{label:"Bounce",value:(A=y.bounce)!=null?A:.2,onChange:L=>w("bounce",L),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(qo,{label:"Stiffness",value:(T=y.stiffness)!=null?T:400,onChange:L=>w("stiffness",L),min:1,max:1e3,step:10}),l.jsx(qo,{label:"Damping",value:(R=y.damping)!=null?R:17,onChange:L=>w("damping",L),min:1,max:100,step:1}),l.jsx(qo,{label:"Mass",value:(P=y.mass)!=null?P:1,onChange:L=>w("mass",L),min:.1,max:10,step:.1})]})]})})}function Wx(e){return e.map(n=>parseFloat(n.toFixed(2))).join(", ")}function A7(e){const n=e.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function N7({ease:e,onChange:n}){const[i,a]=_.useState(!1),[c,u]=_.useState(""),d=()=>{u(Wx(e)),a(!0)},h=()=>{const y=A7(c);y&&n(y),a(!1)},p=y=>{y.key==="Enter"&&y.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Wx(e),onChange:y=>u(y.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function D7({label:e,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:e}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function R7(e){return e.replace(/\b\w/g,n=>n.toUpperCase())}function B7(e){return e.map(n=>typeof n=="string"?{value:n,label:R7(n)}:n)}function L7({label:e,value:n,options:i,onChange:a}){var A;const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState(null),[g,x]=_.useState(null),w=B7(i),C=w.find(T=>T.value===n),j=_.useCallback(()=>{const T=d.current;if(!T)return;const R=T.getBoundingClientRect(),P=8+w.length*36,L=window.innerHeight-R.bottom-4,D=L<P&&R.top>L;x({top:D?R.top-4:R.bottom+4,left:R.left,width:R.width,above:D})},[w.length]);return _.useEffect(()=>{var R;const T=(R=d.current)==null?void 0:R.closest(".dialkit-root");y(T!=null?T:document.body)},[]),_.useEffect(()=>{c&&j()},[c,j]),_.useEffect(()=>{if(!c)return;const T=R=>{const P=R.target;d.current&&!d.current.contains(P)&&h.current&&!h.current.contains(P)&&u(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:e}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(A=C==null?void 0:C.label)!=null?A:n}),l.jsx(ri.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:l_})})]})]}),p&&zl.createPortal(l.jsx(of,{children:c&&g&&l.jsx(ri.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:g.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:g.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:g.left,width:g.width,...g.above?{bottom:window.innerHeight-g.top,transformOrigin:"bottom"}:{top:g.top,transformOrigin:"top"}},children:w.map(T=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(T.value===n),onClick:()=>{a(T.value),u(!1)},children:T.label},T.value))})}),p)]})}var O7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function z7({label:e,value:n,onChange:i}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useRef(null);_.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),O7.test(u)?i(u):d(n)}function y(g){g.key==="Enter"?p():g.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:e}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:g=>d(g.target.value),onBlur:p,onKeyDown:y,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var g;return(g=h.current)==null?void 0:g.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?$7(n):n.slice(0,7),onChange:g=>i(g.target.value)})]})]})}function $7(e){return e.length!==4?e:`#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`}function I7({panelId:e,presets:n,activePresetId:i,onAdd:a}){const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState({top:0,left:0,width:0}),g=n.length>0,x=n.find(R=>R.id===i),w=_.useCallback(()=>{var P;if(!g)return;const R=(P=d.current)==null?void 0:P.getBoundingClientRect();R&&y({top:R.bottom+4,left:R.left,width:R.width}),u(!0)},[g]),C=_.useCallback(()=>u(!1),[]),j=_.useCallback(()=>{c?C():w()},[c,w,C]);_.useEffect(()=>{if(!c)return;const R=P=>{var D,F;const L=P.target;(D=d.current)!=null&&D.contains(L)||(F=h.current)!=null&&F.contains(L)||C()};return document.addEventListener("mousedown",R),()=>document.removeEventListener("mousedown",R)},[c,C]);const A=R=>{R?an.loadPreset(e,R):an.clearActivePreset(e),C()},T=(R,P)=>{R.stopPropagation(),an.deletePreset(e,P)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:j,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!g),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(ri.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:g?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:l_})})]}),zl.createPortal(l.jsx(of,{children:c&&l.jsxs(ri.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>A(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(R=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(R.id===i),onClick:()=>A(R.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:R.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:P=>T(P,R.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:b7.map((P,L)=>l.jsx("path",{d:P},L))})})]},R.id))]})}),document.body)]})}function P7({panel:e,defaultOpen:n=!0,inline:i=!1}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useContext(k2);Object.keys(e.shortcuts).length>0;const p=_.useSyncExternalStore(T=>an.subscribe(e.id,T),()=>an.getValues(e.id),()=>an.getValues(e.id)),y=an.getPresets(e.id),g=an.getActivePresetId(e.id),x=()=>{const T=y.length+2;an.savePreset(e.id,`Version ${T}`)},w=()=>{const T=JSON.stringify(p,null,2),R=`Update the useDialKit configuration for "${e.name}" with these values:

\`\`\`json
${T}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(R),c(!0),setTimeout(()=>c(!1),1500)},C=T=>{var P,L,D;const R=p[T.path];switch(T.type){case"slider":return l.jsx(qo,{label:T.label,value:R,onChange:F=>an.updateValue(e.id,T.path,F),min:T.min,max:T.max,step:T.step,shortcut:T.shortcut,shortcutActive:h.activePanelId===e.id&&h.activePath===T.path},T.path);case"toggle":return l.jsx(k7,{label:T.label,checked:R,onChange:F=>an.updateValue(e.id,T.path,F),shortcut:T.shortcut,shortcutActive:h.activePanelId===e.id&&h.activePath===T.path},T.path);case"spring":return l.jsx(M7,{panelId:e.id,path:T.path,label:T.label,spring:R,onChange:F=>an.updateValue(e.id,T.path,F)},T.path);case"transition":return l.jsx(T7,{panelId:e.id,path:T.path,label:T.label,value:R,onChange:F=>an.updateValue(e.id,T.path,F)},T.path);case"folder":return l.jsx(Qd,{title:T.label,defaultOpen:(P=T.defaultOpen)!=null?P:!0,children:(L=T.children)==null?void 0:L.map(C)},T.path);case"text":return l.jsx(D7,{label:T.label,value:R,onChange:F=>an.updateValue(e.id,T.path,F),placeholder:T.placeholder},T.path);case"select":return l.jsx(L7,{label:T.label,value:R,options:(D=T.options)!=null?D:[],onChange:F=>an.updateValue(e.id,T.path,F)},T.path);case"color":return l.jsx(z7,{label:T.label,value:R,onChange:F=>an.updateValue(e.id,T.path,F)},T.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>an.triggerAction(e.id,T.path),children:T.label},T.path);default:return null}},j=()=>e.controls.map(C),A=l.jsxs(l.Fragment,{children:[l.jsx(ri.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:x7.map((T,R)=>l.jsx("path",{d:T},R))})}),l.jsx(I7,{panelId:e.id,presets:y,activePresetId:g,onAdd:x}),l.jsx(ri.button,{className:"dialkit-toolbar-add",onClick:w,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(of,{initial:!1,mode:"wait",children:a?l.jsx(ri.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:y7})},"check"):l.jsxs(ri.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:$m.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:$m.sparkle,fill:"currentColor"}),l.jsx("path",{d:$m.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Qd,{title:e.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:A,children:j()})})}var H7=typeof process<"u"?!1:!(typeof import.meta<"u");function U7({position:e="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=H7}){if(!c)return null;const[u,d]=_.useState([]),[h,p]=_.useState(!1),y=i==="inline",g=_.useRef(null),[x,w]=_.useState(null),[C,j]=_.useState(e),A=_.useRef(null),T=_.useRef(!1),R=_.useRef(null),P=_.useRef(!1);_.useEffect(()=>(p(!0),d(an.getPanels()),an.subscribeGlobal(()=>{d(an.getPanels())})),[]),_.useEffect(()=>{if(!g.current||y)return;const X=new MutationObserver(()=>{var pe;const le=(pe=g.current)==null?void 0:pe.querySelector(".dialkit-panel-inner");if(!le)return;if(le.getAttribute("data-collapsed")==="true")A.current&&w(A.current);else{if(x){A.current=x;const Ne=x.x+21,Fe=window.innerWidth/2;j(Ne<Fe?"top-left":"top-right")}else j(e);w(null)}});return X.observe(g.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>X.disconnect()},[y,x,e]);const L=_.useCallback(X=>{var pe;const le=(pe=g.current)==null?void 0:pe.querySelector(".dialkit-panel-inner");if(!le||le.getAttribute("data-collapsed")!=="true")return;const ue=g.current.getBoundingClientRect();R.current={pointerX:X.clientX,pointerY:X.clientY,elX:ue.left,elY:ue.top},P.current=!1,T.current=!0,X.target.setPointerCapture(X.pointerId)},[]),D=_.useCallback(X=>{if(!T.current||!R.current)return;const le=X.clientX-R.current.pointerX,ue=X.clientY-R.current.pointerY;!P.current&&Math.abs(le)+Math.abs(ue)<4||(P.current=!0,w({x:R.current.elX+le,y:R.current.elY+ue}))},[]),F=_.useCallback(X=>{var le;if(T.current&&(T.current=!1,R.current=null,P.current)){X.stopPropagation();const ue=(le=g.current)==null?void 0:le.querySelector(".dialkit-panel-inner");if(ue){const pe=Ne=>{Ne.stopPropagation()};ue.addEventListener("click",pe,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const Y=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,V=l.jsx(g7,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:g,className:"dialkit-panel","data-position":y||x?void 0:C,"data-mode":i,style:Y,onPointerDown:y?void 0:L,onPointerMove:y?void 0:D,onPointerUp:y?void 0:F,children:u.map(X=>l.jsx(P7,{panel:X,defaultOpen:y||n,inline:y},X.id))})})});return y?V:zl.createPortal(V,document.body)}const V7=()=>(i7("Git Visualizer",{preview:[1,0,1]}),null),Fx="git-visualizer.chrome-ui-hidden",Y7=({children:e})=>{const[n,i]=_.useState(!1);return _.useEffect(()=>{i(window.localStorage.getItem(Fx)==="true")},[]),_.useEffect(()=>{const a=c=>{(c.ctrlKey||c.metaKey)&&c.key.toLowerCase()==="d"&&!c.shiftKey&&!c.altKey&&(c.preventDefault(),i(u=>{const d=!u;return window.localStorage.setItem(Fx,String(d)),d}))};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[]),l.jsxs(l.Fragment,{children:[e,l.jsx(V7,{}),!n&&l.jsxs(l.Fragment,{children:[l.jsx(U7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(n7,{})]})]})};document.addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="r"&&(e.preventDefault(),location.reload())});Zv.createRoot(document.getElementById("root")).render(l.jsx(Y7,{children:l.jsx(I3,{})}));

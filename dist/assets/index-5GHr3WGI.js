(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function $x(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Oh={exports:{}},oc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty;function Bv(){if(ty)return oc;ty=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return oc.Fragment=n,oc.jsx=i,oc.jsxs=i,oc}var ny;function Lv(){return ny||(ny=1,Oh.exports=Bv()),Oh.exports}var l=Lv(),zh={exports:{}},ic={},$h={exports:{}},Ih={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function Ov(){return sy||(sy=1,(function(t){function n(P,ae){var F=P.length;P.push(ae);e:for(;0<F;){var pe=F-1>>>1,Te=P[pe];if(0<c(Te,ae))P[pe]=ae,P[F]=Te,F=pe;else break e}}function i(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var ae=P[0],F=P.pop();if(F!==ae){P[0]=F;e:for(var pe=0,Te=P.length,I=Te>>>1;pe<I;){var fe=2*(pe+1)-1,G=P[fe],_e=fe+1,Se=P[_e];if(0>c(G,F))_e<Te&&0>c(Se,G)?(P[pe]=Se,P[_e]=F,pe=_e):(P[pe]=G,P[fe]=F,pe=fe);else if(_e<Te&&0>c(Se,F))P[pe]=Se,P[_e]=F,pe=_e;else break e}}return ae}function c(P,ae){var F=P.sortIndex-ae.sortIndex;return F!==0?F:P.id-ae.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],y=[],g=1,x=null,b=3,S=!1,k=!1,j=!1,E=!1,T=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var ae=i(y);ae!==null;){if(ae.callback===null)a(y);else if(ae.startTime<=P)a(y),ae.sortIndex=ae.expirationTime,n(p,ae);else break;ae=i(y)}}function K(P){if(j=!1,D(P),!k)if(i(p)!==null)k=!0,Y||(Y=!0,De());else{var ae=i(y);ae!==null&&me(K,ae.startTime-P)}}var Y=!1,Q=-1,V=5,ee=-1;function le(){return E?!0:!(t.unstable_now()-ee<V)}function re(){if(E=!1,Y){var P=t.unstable_now();ee=P;var ae=!0;try{e:{k=!1,j&&(j=!1,z(Q),Q=-1),S=!0;var F=b;try{t:{for(D(P),x=i(p);x!==null&&!(x.expirationTime>P&&le());){var pe=x.callback;if(typeof pe=="function"){x.callback=null,b=x.priorityLevel;var Te=pe(x.expirationTime<=P);if(P=t.unstable_now(),typeof Te=="function"){x.callback=Te,D(P),ae=!0;break t}x===i(p)&&a(p),D(P)}else a(p);x=i(p)}if(x!==null)ae=!0;else{var I=i(y);I!==null&&me(K,I.startTime-P),ae=!1}}break e}finally{x=null,b=F,S=!1}ae=void 0}}finally{ae?De():Y=!1}}}var De;if(typeof O=="function")De=function(){O(re)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,se=Ye.port2;Ye.port1.onmessage=re,De=function(){se.postMessage(null)}}else De=function(){T(re,0)};function me(P,ae){Q=T(function(){P(t.unstable_now())},ae)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(P){switch(b){case 1:case 2:case 3:var ae=3;break;default:ae=b}var F=b;b=ae;try{return P()}finally{b=F}},t.unstable_requestPaint=function(){E=!0},t.unstable_runWithPriority=function(P,ae){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var F=b;b=P;try{return ae()}finally{b=F}},t.unstable_scheduleCallback=function(P,ae,F){var pe=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?pe+F:pe):F=pe,P){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=F+Te,P={id:g++,callback:ae,priorityLevel:P,startTime:F,expirationTime:Te,sortIndex:-1},F>pe?(P.sortIndex=F,n(y,P),i(p)===null&&P===i(y)&&(j?(z(Q),Q=-1):j=!0,me(K,F-pe))):(P.sortIndex=Te,n(p,P),k||S||(k=!0,Y||(Y=!0,De()))),P},t.unstable_shouldYield=le,t.unstable_wrapCallback=function(P){var ae=b;return function(){var F=b;b=ae;try{return P.apply(this,arguments)}finally{b=F}}}})(Ih)),Ih}var oy;function zv(){return oy||(oy=1,$h.exports=Ov()),$h.exports}var Ph={exports:{}},Zt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy;function $v(){if(iy)return Zt;iy=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=b&&I[b]||I["@@iterator"],typeof I=="function"?I:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,E={};function T(I,fe,G){this.props=I,this.context=fe,this.refs=E,this.updater=G||k}T.prototype.isReactComponent={},T.prototype.setState=function(I,fe){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,fe,"setState")},T.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function z(){}z.prototype=T.prototype;function O(I,fe,G){this.props=I,this.context=fe,this.refs=E,this.updater=G||k}var D=O.prototype=new z;D.constructor=O,j(D,T.prototype),D.isPureReactComponent=!0;var K=Array.isArray;function Y(){}var Q={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function ee(I,fe,G){var _e=G.ref;return{$$typeof:t,type:I,key:fe,ref:_e!==void 0?_e:null,props:G}}function le(I,fe){return ee(I.type,fe,I.props)}function re(I){return typeof I=="object"&&I!==null&&I.$$typeof===t}function De(I){var fe={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(G){return fe[G]})}var Ye=/\/+/g;function se(I,fe){return typeof I=="object"&&I!==null&&I.key!=null?De(""+I.key):fe.toString(36)}function me(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(Y,Y):(I.status="pending",I.then(function(fe){I.status==="pending"&&(I.status="fulfilled",I.value=fe)},function(fe){I.status==="pending"&&(I.status="rejected",I.reason=fe)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function P(I,fe,G,_e,Se){var Ne=typeof I;(Ne==="undefined"||Ne==="boolean")&&(I=null);var He=!1;if(I===null)He=!0;else switch(Ne){case"bigint":case"string":case"number":He=!0;break;case"object":switch(I.$$typeof){case t:case n:He=!0;break;case g:return He=I._init,P(He(I._payload),fe,G,_e,Se)}}if(He)return Se=Se(I),He=_e===""?"."+se(I,0):_e,K(Se)?(G="",He!=null&&(G=He.replace(Ye,"$&/")+"/"),P(Se,fe,G,"",function(Rt){return Rt})):Se!=null&&(re(Se)&&(Se=le(Se,G+(Se.key==null||I&&I.key===Se.key?"":(""+Se.key).replace(Ye,"$&/")+"/")+He)),fe.push(Se)),1;He=0;var We=_e===""?".":_e+":";if(K(I))for(var ot=0;ot<I.length;ot++)_e=I[ot],Ne=We+se(_e,ot),He+=P(_e,fe,G,Ne,Se);else if(ot=S(I),typeof ot=="function")for(I=ot.call(I),ot=0;!(_e=I.next()).done;)_e=_e.value,Ne=We+se(_e,ot++),He+=P(_e,fe,G,Ne,Se);else if(Ne==="object"){if(typeof I.then=="function")return P(me(I),fe,G,_e,Se);throw fe=String(I),Error("Objects are not valid as a React child (found: "+(fe==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":fe)+"). If you meant to render a collection of children, use an array instead.")}return He}function ae(I,fe,G){if(I==null)return I;var _e=[],Se=0;return P(I,_e,"","",function(Ne){return fe.call(G,Ne,Se++)}),_e}function F(I){if(I._status===-1){var fe=I._result;fe=fe(),fe.then(function(G){(I._status===0||I._status===-1)&&(I._status=1,I._result=G)},function(G){(I._status===0||I._status===-1)&&(I._status=2,I._result=G)}),I._status===-1&&(I._status=0,I._result=fe)}if(I._status===1)return I._result.default;throw I._result}var pe=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var fe=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(fe))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Te={map:ae,forEach:function(I,fe,G){ae(I,function(){fe.apply(this,arguments)},G)},count:function(I){var fe=0;return ae(I,function(){fe++}),fe},toArray:function(I){return ae(I,function(fe){return fe})||[]},only:function(I){if(!re(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return Zt.Activity=x,Zt.Children=Te,Zt.Component=T,Zt.Fragment=i,Zt.Profiler=c,Zt.PureComponent=O,Zt.StrictMode=a,Zt.Suspense=p,Zt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,Zt.__COMPILER_RUNTIME={__proto__:null,c:function(I){return Q.H.useMemoCache(I)}},Zt.cache=function(I){return function(){return I.apply(null,arguments)}},Zt.cacheSignal=function(){return null},Zt.cloneElement=function(I,fe,G){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var _e=j({},I.props),Se=I.key;if(fe!=null)for(Ne in fe.key!==void 0&&(Se=""+fe.key),fe)!V.call(fe,Ne)||Ne==="key"||Ne==="__self"||Ne==="__source"||Ne==="ref"&&fe.ref===void 0||(_e[Ne]=fe[Ne]);var Ne=arguments.length-2;if(Ne===1)_e.children=G;else if(1<Ne){for(var He=Array(Ne),We=0;We<Ne;We++)He[We]=arguments[We+2];_e.children=He}return ee(I.type,Se,_e)},Zt.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:u,_context:I},I},Zt.createElement=function(I,fe,G){var _e,Se={},Ne=null;if(fe!=null)for(_e in fe.key!==void 0&&(Ne=""+fe.key),fe)V.call(fe,_e)&&_e!=="key"&&_e!=="__self"&&_e!=="__source"&&(Se[_e]=fe[_e]);var He=arguments.length-2;if(He===1)Se.children=G;else if(1<He){for(var We=Array(He),ot=0;ot<He;ot++)We[ot]=arguments[ot+2];Se.children=We}if(I&&I.defaultProps)for(_e in He=I.defaultProps,He)Se[_e]===void 0&&(Se[_e]=He[_e]);return ee(I,Ne,Se)},Zt.createRef=function(){return{current:null}},Zt.forwardRef=function(I){return{$$typeof:h,render:I}},Zt.isValidElement=re,Zt.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:F}},Zt.memo=function(I,fe){return{$$typeof:y,type:I,compare:fe===void 0?null:fe}},Zt.startTransition=function(I){var fe=Q.T,G={};Q.T=G;try{var _e=I(),Se=Q.S;Se!==null&&Se(G,_e),typeof _e=="object"&&_e!==null&&typeof _e.then=="function"&&_e.then(Y,pe)}catch(Ne){pe(Ne)}finally{fe!==null&&G.types!==null&&(fe.types=G.types),Q.T=fe}},Zt.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},Zt.use=function(I){return Q.H.use(I)},Zt.useActionState=function(I,fe,G){return Q.H.useActionState(I,fe,G)},Zt.useCallback=function(I,fe){return Q.H.useCallback(I,fe)},Zt.useContext=function(I){return Q.H.useContext(I)},Zt.useDebugValue=function(){},Zt.useDeferredValue=function(I,fe){return Q.H.useDeferredValue(I,fe)},Zt.useEffect=function(I,fe){return Q.H.useEffect(I,fe)},Zt.useEffectEvent=function(I){return Q.H.useEffectEvent(I)},Zt.useId=function(){return Q.H.useId()},Zt.useImperativeHandle=function(I,fe,G){return Q.H.useImperativeHandle(I,fe,G)},Zt.useInsertionEffect=function(I,fe){return Q.H.useInsertionEffect(I,fe)},Zt.useLayoutEffect=function(I,fe){return Q.H.useLayoutEffect(I,fe)},Zt.useMemo=function(I,fe){return Q.H.useMemo(I,fe)},Zt.useOptimistic=function(I,fe){return Q.H.useOptimistic(I,fe)},Zt.useReducer=function(I,fe,G){return Q.H.useReducer(I,fe,G)},Zt.useRef=function(I){return Q.H.useRef(I)},Zt.useState=function(I){return Q.H.useState(I)},Zt.useSyncExternalStore=function(I,fe,G){return Q.H.useSyncExternalStore(I,fe,G)},Zt.useTransition=function(){return Q.H.useTransition()},Zt.version="19.2.4",Zt}var ay;function up(){return ay||(ay=1,Ph.exports=$v()),Ph.exports}var Hh={exports:{}},Io={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function Iv(){if(ry)return Io;ry=1;var t=up();function n(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)y+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,y,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:y,implementation:g}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Io.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Io.createPortal=function(p,y){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(n(299));return u(p,y,null,g)},Io.flushSync=function(p){var y=d.T,g=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=y,a.p=g,a.d.f()}},Io.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(p,y))},Io.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Io.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin),b=typeof y.integrity=="string"?y.integrity:void 0,S=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;g==="style"?a.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:S}):g==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:S,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Io.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var g=h(y.as,y.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(p)},Io.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin);a.d.L(p,g,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Io.preloadModule=function(p,y){if(typeof p=="string")if(y){var g=h(y.as,y.crossOrigin);a.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(p)},Io.requestFormReset=function(p){a.d.r(p)},Io.unstable_batchedUpdates=function(p,y){return p(y)},Io.useFormState=function(p,y,g){return d.H.useFormState(p,y,g)},Io.useFormStatus=function(){return d.H.useHostTransitionStatus()},Io.version="19.2.4",Io}var ly;function Ix(){if(ly)return Hh.exports;ly=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Hh.exports=Iv(),Hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function Pv(){if(cy)return ic;cy=1;var t=zv(),n=up(),i=Ix();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function y(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var v=!1,A=f.child;A;){if(A===o){v=!0,o=f,r=m;break}if(A===r){v=!0,r=f,o=m;break}A=A.sibling}if(!v){for(A=m.child;A;){if(A===o){v=!0,o=m,r=f;break}if(A===r){v=!0,r=m,o=f;break}A=A.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function g(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=g(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),ee=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function De(e){return e===null||typeof e!="object"?null:(e=re&&e[re]||e["@@iterator"],typeof e=="function"?e:null)}var Ye=Symbol.for("react.client.reference");function se(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ye?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case T:return"Profiler";case E:return"StrictMode";case K:return"Suspense";case Y:return"SuspenseList";case ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case O:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case D:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return s=e.displayName||null,s!==null?s:se(e.type)||"Memo";case V:s=e._payload,e=e._init;try{return se(e(s))}catch{}}return null}var me=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},pe=[],Te=-1;function I(e){return{current:e}}function fe(e){0>Te||(e.current=pe[Te],pe[Te]=null,Te--)}function G(e,s){Te++,pe[Te]=e.current,e.current=s}var _e=I(null),Se=I(null),Ne=I(null),He=I(null);function We(e,s){switch(G(Ne,s),G(Se,e),G(_e,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?C0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=C0(s),e=k0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}fe(_e),G(_e,e)}function ot(){fe(_e),fe(Se),fe(Ne)}function Rt(e){e.memoizedState!==null&&G(He,e);var s=_e.current,o=k0(s,e.type);s!==o&&(G(Se,e),G(_e,o))}function Ut(e){Se.current===e&&(fe(_e),fe(Se)),He.current===e&&(fe(He),ec._currentValue=F)}var Ke,et;function Bt(e){if(Ke===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Ke=s&&s[1]||"",et=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+e+et}var Kt=!1;function Qt(e,s){if(!e||Kt)return"";Kt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var Pe=function(){throw Error()};if(Object.defineProperty(Pe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Pe,[])}catch(Ce){var ve=Ce}Reflect.construct(e,[],Pe)}else{try{Pe.call()}catch(Ce){ve=Ce}e.call(Pe.prototype)}}else{try{throw Error()}catch(Ce){ve=Ce}(Pe=e())&&typeof Pe.catch=="function"&&Pe.catch(function(){})}}catch(Ce){if(Ce&&ve&&typeof Ce.stack=="string")return[Ce.stack,ve.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),v=m[0],A=m[1];if(v&&A){var Z=v.split(`
`),ye=A.split(`
`);for(f=r=0;r<Z.length&&!Z[r].includes("DetermineComponentFrameRoot");)r++;for(;f<ye.length&&!ye[f].includes("DetermineComponentFrameRoot");)f++;if(r===Z.length||f===ye.length)for(r=Z.length-1,f=ye.length-1;1<=r&&0<=f&&Z[r]!==ye[f];)f--;for(;1<=r&&0<=f;r--,f--)if(Z[r]!==ye[f]){if(r!==1||f!==1)do if(r--,f--,0>f||Z[r]!==ye[f]){var Re=`
`+Z[r].replace(" at new "," at ");return e.displayName&&Re.includes("<anonymous>")&&(Re=Re.replace("<anonymous>",e.displayName)),Re}while(1<=r&&0<=f);break}}}finally{Kt=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?Bt(o):""}function ze(e,s){switch(e.tag){case 26:case 27:case 5:return Bt(e.type);case 16:return Bt("Lazy");case 13:return e.child!==s&&s!==null?Bt("Suspense Fallback"):Bt("Suspense");case 19:return Bt("SuspenseList");case 0:case 15:return Qt(e.type,!1);case 11:return Qt(e.type.render,!1);case 1:return Qt(e.type,!0);case 31:return Bt("Activity");default:return""}}function ce(e){try{var s="",o=null;do s+=ze(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var tt=Object.prototype.hasOwnProperty,nt=t.unstable_scheduleCallback,Ze=t.unstable_cancelCallback,Qe=t.unstable_shouldYield,ct=t.unstable_requestPaint,ft=t.unstable_now,Ct=t.unstable_getCurrentPriorityLevel,bt=t.unstable_ImmediatePriority,$t=t.unstable_UserBlockingPriority,it=t.unstable_NormalPriority,H=t.unstable_LowPriority,oe=t.unstable_IdlePriority,be=t.log,J=t.unstable_setDisableYieldValue,Me=null,we=null;function he(e){if(typeof be=="function"&&J(e),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(Me,e)}catch{}}var Ie=Math.clz32?Math.clz32:dt,Ee=Math.log,gt=Math.LN2;function dt(e){return e>>>=0,e===0?32:31-(Ee(e)/gt|0)|0}var qe=256,ht=262144,yt=4194304;function Et(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function at(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~m,r!==0?f=Et(r):(v&=A,v!==0?f=Et(v):o||(o=A&~e,o!==0&&(f=Et(o))))):(A=r&~m,A!==0?f=Et(A):v!==0?f=Et(v):o||(o=r&~e,o!==0&&(f=Et(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function Mt(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function Vt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lt(){var e=yt;return yt<<=1,(yt&62914560)===0&&(yt=4194304),e}function kt(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function mt(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Lt(e,s,o,r,f,m){var v=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var A=e.entanglements,Z=e.expirationTimes,ye=e.hiddenUpdates;for(o=v&~o;0<o;){var Re=31-Ie(o),Pe=1<<Re;A[Re]=0,Z[Re]=-1;var ve=ye[Re];if(ve!==null)for(ye[Re]=null,Re=0;Re<ve.length;Re++){var Ce=ve[Re];Ce!==null&&(Ce.lane&=-536870913)}o&=~Pe}r!==0&&on(e,r,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function on(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-Ie(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function un(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-Ie(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function ln(e,s){var o=s&-s;return o=(o&42)!==0?1:Rn(o),(o&(e.suspendedLanes|s))!==0?0:o}function Rn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function bn(){var e=ae.p;return e!==0?e:(e=window.event,e===void 0?32:G0(e.type))}function dn(e,s){var o=ae.p;try{return ae.p=e,s()}finally{ae.p=o}}var qn=Math.random().toString(36).slice(2),Xt="__reactFiber$"+qn,En="__reactProps$"+qn,st="__reactContainer$"+qn,Tt="__reactEvents$"+qn,Ln="__reactListeners$"+qn,ks="__reactHandles$"+qn,hs="__reactResources$"+qn,ss="__reactMarker$"+qn;function Do(e){delete e[Xt],delete e[En],delete e[Tt],delete e[Ln],delete e[ks]}function os(e){var s=e[Xt];if(s)return s;for(var o=e.parentNode;o;){if(s=o[st]||o[Xt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=D0(e);e!==null;){if(o=e[Xt])return o;e=D0(e)}return s}e=o,o=e.parentNode}return null}function Ws(e){if(e=e[Xt]||e[st]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function wo(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function zs(e){var s=e[hs];return s||(s=e[hs]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function jn(e){e[ss]=!0}var Zo=new Set,js={};function vn(e,s){Yn(e,s),Yn(e+"Capture",s)}function Yn(e,s){for(js[e]=s,e=0;e<s.length;e++)Zo.add(s[e])}var ao=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fs={},us={};function is(e){return tt.call(us,e)?!0:tt.call(Fs,e)?!1:ao.test(e)?us[e]=!0:(Fs[e]=!0,!1)}function Xs(e,s,o){if(is(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function wn(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function pn(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function en(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Un(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ho(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function Uo(e){if(!e._valueTracker){var s=Un(e)?"checked":"value";e._valueTracker=Ho(e,s,""+e[s])}}function li(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=Un(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function Gs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Jo=/[\n"\\]/g;function bs(e){return e.replace(Jo,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function So(e,s,o,r,f,m,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+en(s)):e.value!==""+en(s)&&(e.value=""+en(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?go(e,v,en(s)):o!=null?go(e,v,en(o)):r!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+en(A):e.removeAttribute("name")}function Mn(e,s,o,r,f,m,v,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){Uo(e);return}o=o!=null?""+en(o):"",s=s!=null?""+en(s):o,A||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Uo(e)}function go(e,s,o){s==="number"&&Gs(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function ms(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+en(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function Kn(e,s,o){if(s!=null&&(s=""+en(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+en(o):""}function bi(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(me(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=en(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),Uo(e)}function vs(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var vi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yt(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||vi.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function ws(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&Yt(e,f,r)}else for(var m in s)s.hasOwnProperty(m)&&Yt(e,m,s[m])}function As(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ro=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vo(e){return wi.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ns(){}var ci=null;function $s(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sn=null,Co=null;function Yo(e){var s=Ws(e);if(s&&(e=s.stateNode)){var o=e[En]||null;e:switch(e=s.stateNode,s.type){case"input":if(So(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+bs(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[En]||null;if(!f)throw Error(a(90));So(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&li(r)}break e;case"textarea":Kn(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&ms(e,!!o.multiple,s,!1)}}}var ps=!1;function qs(e,s,o){if(ps)return e(s,o);ps=!0;try{var r=e(s);return r}finally{if(ps=!1,(Sn!==null||Co!==null)&&(vu(),Sn&&(s=Sn,e=Co,Co=Sn=null,Yo(s),e)))for(s=0;s<e.length;s++)Yo(e[s])}}function an(e,s){var o=e.stateNode;if(o===null)return null;var r=o[En]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Ks=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Is=!1;if(Ks)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){Is=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{Is=!1}var Ms=null,Bo=null,Qs=null;function ko(){if(Qs)return Qs;var e,s=Bo,o=s.length,r,f="value"in Ms?Ms.value:Ms.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var v=o-e;for(r=1;r<=v&&s[o-r]===f[m-r];r++);return Qs=f.slice(e,1<r?1-r:void 0)}function yo(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function On(){return!0}function Tn(){return!1}function Vn(e){function s(o,r,f,m,v){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(o=e[A],this[A]=o?o(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?On:Tn,this.isPropagationStopped=Tn,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=On)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=On)},persist:function(){},isPersistent:On}),s}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lo=Vn(Wn),Ds=x({},Wn,{view:0,detail:0}),Es=Vn(Ds),Wo,co,_s,Ts=x({},Ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_s&&(_s&&e.type==="mousemove"?(Wo=e.screenX-_s.screenX,co=e.screenY-_s.screenY):co=Wo=0,_s=e),Wo)},movementY:function(e){return"movementY"in e?e.movementY:co}}),Lo=Vn(Ts),xo=x({},Ts,{dataTransfer:0}),uo=Vn(xo),Oo=x({},Ds,{relatedTarget:0}),zo=Vn(Oo),Si=x({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),ta=Vn(Si),Ii=x({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pi=Vn(Ii),ei=x({},Wn,{data:0}),Nt=Vn(ei),Ci={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ki={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hi={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ui(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=Hi[e])?!!s[e]:!1}function bo(){return ui}var Fo=x({},Ds,{key:function(e){if(e.key){var s=Ci[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ki[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bo,charCode:function(e){return e.type==="keypress"?yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),di=Vn(Fo),M=x({},Ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),U=Vn(M),ue=x({},Ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bo}),ke=Vn(ue),Ve=x({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=Vn(Ve),Pt=x({},Ts,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),It=Vn(Pt),Gt=x({},Wn,{newState:0,oldState:0}),qt=Vn(Gt),nn=[9,13,27,32],_n=Ks&&"CompositionEvent"in window,fn=null;Ks&&"documentMode"in document&&(fn=document.documentMode);var Ps=Ks&&"TextEvent"in window&&!fn,Wt=Ks&&(!_n||fn&&8<fn&&11>=fn),as=" ",Ss=!1;function gs(e,s){switch(e){case"keyup":return nn.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zs=!1;function Hs(e,s){switch(e){case"compositionend":return fo(s);case"keypress":return s.which!==32?null:(Ss=!0,as);case"textInput":return e=s.data,e===as&&Ss?null:e;default:return null}}function Js(e,s){if(Zs)return e==="compositionend"||!_n&&gs(e,s)?(e=ko(),Qs=Bo=Ms=null,Zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Wt&&s.locale!=="ko"?null:s.data;default:return null}}var ho={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function B(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!ho[e.type]:s==="textarea"}function X(e,s,o,r){Sn?Co?Co.push(r):Co=[r]:Sn=r,s=Eu(s,"onChange"),0<s.length&&(o=new lo("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var q=null,R=null;function ne(e){y0(e,0)}function w(e){var s=wo(e);if(li(s))return e}function C(e,s){if(e==="change")return s}var N=!1;if(Ks){var L;if(Ks){var W="oninput"in document;if(!W){var te=document.createElement("div");te.setAttribute("oninput","return;"),W=typeof te.oninput=="function"}L=W}else L=!1;N=L&&(!document.documentMode||9<document.documentMode)}function Ae(){q&&(q.detachEvent("onpropertychange",xe),R=q=null)}function xe(e){if(e.propertyName==="value"&&w(R)){var s=[];X(s,R,e,$s(e)),qs(ne,s)}}function Le(e,s,o){e==="focusin"?(Ae(),q=s,R=o,q.attachEvent("onpropertychange",xe)):e==="focusout"&&Ae()}function Xe(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return w(R)}function Je(e,s){if(e==="click")return w(s)}function pt(e,s){if(e==="input"||e==="change")return w(s)}function _t(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var ut=typeof Object.is=="function"?Object.is:_t;function rt(e,s){if(ut(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!tt.call(s,f)||!ut(e[f],s[f]))return!1}return!0}function kn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zn(e,s){var o=kn(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=kn(o)}}function $n(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?$n(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function rn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=Gs(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=Gs(e.document)}return s}function Ot(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var vt=Ks&&"documentMode"in document&&11>=document.documentMode,Dt=null,In=null,gn=null,mo=!1;function $o(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;mo||Dt==null||Dt!==Gs(r)||(r=Dt,"selectionStart"in r&&Ot(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gn&&rt(gn,r)||(gn=r,r=Eu(In,"onSelect"),0<r.length&&(s=new lo("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=Dt)))}function rs(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var ji={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionrun:rs("Transition","TransitionRun"),transitionstart:rs("Transition","TransitionStart"),transitioncancel:rs("Transition","TransitionCancel"),transitionend:rs("Transition","TransitionEnd")},Ui={},Vi={};Ks&&(Vi=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);function Qn(e){if(Ui[e])return Ui[e];if(!ji[e])return e;var s=ji[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in Vi)return Ui[e]=s[o];return e}var Yi=Qn("animationend"),na=Qn("animationiteration"),Pc=Qn("animationstart"),Wd=Qn("transitionrun"),Fd=Qn("transitionstart"),Xd=Qn("transitioncancel"),Qp=Qn("transitionend"),Zp=new Map,Gd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gd.push("scrollEnd");function Wi(e,s){Zp.set(e,s),vn(s,[e])}var Hc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Mi=[],Br=0,qd=0;function Uc(){for(var e=Br,s=qd=Br=0;s<e;){var o=Mi[s];Mi[s++]=null;var r=Mi[s];Mi[s++]=null;var f=Mi[s];Mi[s++]=null;var m=Mi[s];if(Mi[s++]=null,r!==null&&f!==null){var v=r.pending;v===null?f.next=f:(f.next=v.next,v.next=f),r.pending=f}m!==0&&Jp(o,f,m)}}function Vc(e,s,o,r){Mi[Br++]=e,Mi[Br++]=s,Mi[Br++]=o,Mi[Br++]=r,qd|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Kd(e,s,o,r){return Vc(e,s,o,r),Yc(e)}function cr(e,s){return Vc(e,null,null,s),Yc(e)}function Jp(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-Ie(o),e=m.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Yc(e){if(50<Xl)throw Xl=0,ah=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var Lr={};function g2(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(e,s,o,r){return new g2(e,s,o,r)}function Qd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ha(e,s){var o=e.alternate;return o===null?(o=fi(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function e_(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Wc(e,s,o,r,f,m){var v=0;if(r=e,typeof e=="function")Qd(e)&&(v=1);else if(typeof e=="string")v=wv(e,o,_e.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ee:return e=fi(31,o,s,f),e.elementType=ee,e.lanes=m,e;case j:return ur(o.children,f,m,s);case E:v=8,f|=24;break;case T:return e=fi(12,o,s,f|2),e.elementType=T,e.lanes=m,e;case K:return e=fi(13,o,s,f),e.elementType=K,e.lanes=m,e;case Y:return e=fi(19,o,s,f),e.elementType=Y,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:v=10;break e;case z:v=9;break e;case D:v=11;break e;case Q:v=14;break e;case V:v=16,r=null;break e}v=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=fi(v,o,s,f),s.elementType=e,s.type=r,s.lanes=m,s}function ur(e,s,o,r){return e=fi(7,e,r,s),e.lanes=o,e}function Zd(e,s,o){return e=fi(6,e,null,s),e.lanes=o,e}function t_(e){var s=fi(18,null,null,0);return s.stateNode=e,s}function Jd(e,s,o){return s=fi(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var n_=new WeakMap;function Ei(e,s){if(typeof e=="object"&&e!==null){var o=n_.get(e);return o!==void 0?o:(s={value:e,source:s,stack:ce(s)},n_.set(e,s),s)}return{value:e,source:s,stack:ce(s)}}var Or=[],zr=0,Fc=null,jl=0,Ti=[],Ai=0,Da=null,sa=1,oa="";function ma(e,s){Or[zr++]=jl,Or[zr++]=Fc,Fc=e,jl=s}function s_(e,s,o){Ti[Ai++]=sa,Ti[Ai++]=oa,Ti[Ai++]=Da,Da=e;var r=sa;e=oa;var f=32-Ie(r)-1;r&=~(1<<f),o+=1;var m=32-Ie(s)+f;if(30<m){var v=f-f%5;m=(r&(1<<v)-1).toString(32),r>>=v,f-=v,sa=1<<32-Ie(s)+f|o<<f|r,oa=m+e}else sa=1<<m|o<<f|r,oa=e}function ef(e){e.return!==null&&(ma(e,1),s_(e,1,0))}function tf(e){for(;e===Fc;)Fc=Or[--zr],Or[zr]=null,jl=Or[--zr],Or[zr]=null;for(;e===Da;)Da=Ti[--Ai],Ti[Ai]=null,oa=Ti[--Ai],Ti[Ai]=null,sa=Ti[--Ai],Ti[Ai]=null}function o_(e,s){Ti[Ai++]=sa,Ti[Ai++]=oa,Ti[Ai++]=Da,sa=s.id,oa=s.overflow,Da=e}var jo=null,ys=null,Cn=!1,Ra=null,Ni=!1,nf=Error(a(519));function Ba(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ml(Ei(s,e)),nf}function i_(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[Xt]=e,s[En]=r,o){case"dialog":mn("cancel",s),mn("close",s);break;case"iframe":case"object":case"embed":mn("load",s);break;case"video":case"audio":for(o=0;o<ql.length;o++)mn(ql[o],s);break;case"source":mn("error",s);break;case"img":case"image":case"link":mn("error",s),mn("load",s);break;case"details":mn("toggle",s);break;case"input":mn("invalid",s),Mn(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":mn("invalid",s);break;case"textarea":mn("invalid",s),bi(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||w0(s.textContent,o)?(r.popover!=null&&(mn("beforetoggle",s),mn("toggle",s)),r.onScroll!=null&&mn("scroll",s),r.onScrollEnd!=null&&mn("scrollend",s),r.onClick!=null&&(s.onclick=Ns),s=!0):s=!1,s||Ba(e,!0)}function a_(e){for(jo=e.return;jo;)switch(jo.tag){case 5:case 31:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:jo=jo.return}}function $r(e){if(e!==jo)return!1;if(!Cn)return a_(e),Cn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||vh(e.type,e.memoizedProps)),o=!o),o&&ys&&Ba(e),a_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));ys=N0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));ys=N0(e)}else s===27?(s=ys,Ga(e.type)?(e=jh,jh=null,ys=e):ys=s):ys=jo?Ri(e.stateNode.nextSibling):null;return!0}function dr(){ys=jo=null,Cn=!1}function sf(){var e=Ra;return e!==null&&(oi===null?oi=e:oi.push.apply(oi,e),Ra=null),e}function Ml(e){Ra===null?Ra=[e]:Ra.push(e)}var of=I(null),fr=null,pa=null;function La(e,s,o){G(of,s._currentValue),s._currentValue=o}function _a(e){e._currentValue=of.current,fe(of)}function af(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function rf(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var Z=0;Z<s.length;Z++)if(A.context===s[Z]){m.lanes|=o,A=m.alternate,A!==null&&(A.lanes|=o),af(m.return,o,e),r||(v=null);break e}m=A.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),af(v,o,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Ir(e,s,o,r){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var A=f.type;ut(f.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(f===He.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(ec):e=[ec])}f=f.return}e!==null&&rf(s,e,o,r),s.flags|=262144}function Xc(e){for(e=e.firstContext;e!==null;){if(!ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hr(e){fr=e,pa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mo(e){return r_(fr,e)}function Gc(e,s){return fr===null&&hr(e),r_(e,s)}function r_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},pa===null){if(e===null)throw Error(a(308));pa=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else pa=pa.next=s;return o}var y2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},x2=t.unstable_scheduleCallback,b2=t.unstable_NormalPriority,eo={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new y2,data:new Map,refCount:0}}function El(e){e.refCount--,e.refCount===0&&x2(b2,function(){e.controller.abort()})}var Tl=null,cf=0,Pr=0,Hr=null;function v2(e,s){if(Tl===null){var o=Tl=[];cf=0,Pr=fh(),Hr={status:"pending",value:void 0,then:function(r){o.push(r)}}}return cf++,s.then(l_,l_),s}function l_(){if(--cf===0&&Tl!==null){Hr!==null&&(Hr.status="fulfilled");var e=Tl;Tl=null,Pr=0,Hr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function w2(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var c_=P.S;P.S=function(e,s){Fg=ft(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&v2(e,s),c_!==null&&c_(e,s)};var mr=I(null);function uf(){var e=mr.current;return e!==null?e:ls.pooledCache}function qc(e,s){s===null?G(mr,mr.current):G(mr,s.pool)}function u_(){var e=uf();return e===null?null:{parent:eo._currentValue,pool:e}}var Ur=Error(a(460)),df=Error(a(474)),Kc=Error(a(542)),Qc={then:function(){}};function d_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function f_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(Ns,Ns),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,m_(e),e;default:if(typeof s.status=="string")s.then(Ns,Ns);else{if(e=ls,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,m_(e),e}throw _r=s,Ur}}function pr(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(_r=o,Ur):o}}var _r=null;function h_(){if(_r===null)throw Error(a(459));var e=_r;return _r=null,e}function m_(e){if(e===Ur||e===Kc)throw Error(a(483))}var Vr=null,Al=0;function Zc(e){var s=Al;return Al+=1,Vr===null&&(Vr=[]),f_(Vr,e,s)}function Nl(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Jc(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function p_(e){function s(de,ie){if(e){var ge=de.deletions;ge===null?(de.deletions=[ie],de.flags|=16):ge.push(ie)}}function o(de,ie){if(!e)return null;for(;ie!==null;)s(de,ie),ie=ie.sibling;return null}function r(de){for(var ie=new Map;de!==null;)de.key!==null?ie.set(de.key,de):ie.set(de.index,de),de=de.sibling;return ie}function f(de,ie){return de=ha(de,ie),de.index=0,de.sibling=null,de}function m(de,ie,ge){return de.index=ge,e?(ge=de.alternate,ge!==null?(ge=ge.index,ge<ie?(de.flags|=67108866,ie):ge):(de.flags|=67108866,ie)):(de.flags|=1048576,ie)}function v(de){return e&&de.alternate===null&&(de.flags|=67108866),de}function A(de,ie,ge,$e){return ie===null||ie.tag!==6?(ie=Zd(ge,de.mode,$e),ie.return=de,ie):(ie=f(ie,ge),ie.return=de,ie)}function Z(de,ie,ge,$e){var zt=ge.type;return zt===j?Re(de,ie,ge.props.children,$e,ge.key):ie!==null&&(ie.elementType===zt||typeof zt=="object"&&zt!==null&&zt.$$typeof===V&&pr(zt)===ie.type)?(ie=f(ie,ge.props),Nl(ie,ge),ie.return=de,ie):(ie=Wc(ge.type,ge.key,ge.props,null,de.mode,$e),Nl(ie,ge),ie.return=de,ie)}function ye(de,ie,ge,$e){return ie===null||ie.tag!==4||ie.stateNode.containerInfo!==ge.containerInfo||ie.stateNode.implementation!==ge.implementation?(ie=Jd(ge,de.mode,$e),ie.return=de,ie):(ie=f(ie,ge.children||[]),ie.return=de,ie)}function Re(de,ie,ge,$e,zt){return ie===null||ie.tag!==7?(ie=ur(ge,de.mode,$e,zt),ie.return=de,ie):(ie=f(ie,ge),ie.return=de,ie)}function Pe(de,ie,ge){if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return ie=Zd(""+ie,de.mode,ge),ie.return=de,ie;if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case S:return ge=Wc(ie.type,ie.key,ie.props,null,de.mode,ge),Nl(ge,ie),ge.return=de,ge;case k:return ie=Jd(ie,de.mode,ge),ie.return=de,ie;case V:return ie=pr(ie),Pe(de,ie,ge)}if(me(ie)||De(ie))return ie=ur(ie,de.mode,ge,null),ie.return=de,ie;if(typeof ie.then=="function")return Pe(de,Zc(ie),ge);if(ie.$$typeof===O)return Pe(de,Gc(de,ie),ge);Jc(de,ie)}return null}function ve(de,ie,ge,$e){var zt=ie!==null?ie.key:null;if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return zt!==null?null:A(de,ie,""+ge,$e);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case S:return ge.key===zt?Z(de,ie,ge,$e):null;case k:return ge.key===zt?ye(de,ie,ge,$e):null;case V:return ge=pr(ge),ve(de,ie,ge,$e)}if(me(ge)||De(ge))return zt!==null?null:Re(de,ie,ge,$e,null);if(typeof ge.then=="function")return ve(de,ie,Zc(ge),$e);if(ge.$$typeof===O)return ve(de,ie,Gc(de,ge),$e);Jc(de,ge)}return null}function Ce(de,ie,ge,$e,zt){if(typeof $e=="string"&&$e!==""||typeof $e=="number"||typeof $e=="bigint")return de=de.get(ge)||null,A(ie,de,""+$e,zt);if(typeof $e=="object"&&$e!==null){switch($e.$$typeof){case S:return de=de.get($e.key===null?ge:$e.key)||null,Z(ie,de,$e,zt);case k:return de=de.get($e.key===null?ge:$e.key)||null,ye(ie,de,$e,zt);case V:return $e=pr($e),Ce(de,ie,ge,$e,zt)}if(me($e)||De($e))return de=de.get(ge)||null,Re(ie,de,$e,zt,null);if(typeof $e.then=="function")return Ce(de,ie,ge,Zc($e),zt);if($e.$$typeof===O)return Ce(de,ie,ge,Gc(ie,$e),zt);Jc(ie,$e)}return null}function St(de,ie,ge,$e){for(var zt=null,An=null,At=ie,sn=ie=0,xn=null;At!==null&&sn<ge.length;sn++){At.index>sn?(xn=At,At=null):xn=At.sibling;var Nn=ve(de,At,ge[sn],$e);if(Nn===null){At===null&&(At=xn);break}e&&At&&Nn.alternate===null&&s(de,At),ie=m(Nn,ie,sn),An===null?zt=Nn:An.sibling=Nn,An=Nn,At=xn}if(sn===ge.length)return o(de,At),Cn&&ma(de,sn),zt;if(At===null){for(;sn<ge.length;sn++)At=Pe(de,ge[sn],$e),At!==null&&(ie=m(At,ie,sn),An===null?zt=At:An.sibling=At,An=At);return Cn&&ma(de,sn),zt}for(At=r(At);sn<ge.length;sn++)xn=Ce(At,de,sn,ge[sn],$e),xn!==null&&(e&&xn.alternate!==null&&At.delete(xn.key===null?sn:xn.key),ie=m(xn,ie,sn),An===null?zt=xn:An.sibling=xn,An=xn);return e&&At.forEach(function(Ja){return s(de,Ja)}),Cn&&ma(de,sn),zt}function Ft(de,ie,ge,$e){if(ge==null)throw Error(a(151));for(var zt=null,An=null,At=ie,sn=ie=0,xn=null,Nn=ge.next();At!==null&&!Nn.done;sn++,Nn=ge.next()){At.index>sn?(xn=At,At=null):xn=At.sibling;var Ja=ve(de,At,Nn.value,$e);if(Ja===null){At===null&&(At=xn);break}e&&At&&Ja.alternate===null&&s(de,At),ie=m(Ja,ie,sn),An===null?zt=Ja:An.sibling=Ja,An=Ja,At=xn}if(Nn.done)return o(de,At),Cn&&ma(de,sn),zt;if(At===null){for(;!Nn.done;sn++,Nn=ge.next())Nn=Pe(de,Nn.value,$e),Nn!==null&&(ie=m(Nn,ie,sn),An===null?zt=Nn:An.sibling=Nn,An=Nn);return Cn&&ma(de,sn),zt}for(At=r(At);!Nn.done;sn++,Nn=ge.next())Nn=Ce(At,de,sn,Nn.value,$e),Nn!==null&&(e&&Nn.alternate!==null&&At.delete(Nn.key===null?sn:Nn.key),ie=m(Nn,ie,sn),An===null?zt=Nn:An.sibling=Nn,An=Nn);return e&&At.forEach(function(Rv){return s(de,Rv)}),Cn&&ma(de,sn),zt}function es(de,ie,ge,$e){if(typeof ge=="object"&&ge!==null&&ge.type===j&&ge.key===null&&(ge=ge.props.children),typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case S:e:{for(var zt=ge.key;ie!==null;){if(ie.key===zt){if(zt=ge.type,zt===j){if(ie.tag===7){o(de,ie.sibling),$e=f(ie,ge.props.children),$e.return=de,de=$e;break e}}else if(ie.elementType===zt||typeof zt=="object"&&zt!==null&&zt.$$typeof===V&&pr(zt)===ie.type){o(de,ie.sibling),$e=f(ie,ge.props),Nl($e,ge),$e.return=de,de=$e;break e}o(de,ie);break}else s(de,ie);ie=ie.sibling}ge.type===j?($e=ur(ge.props.children,de.mode,$e,ge.key),$e.return=de,de=$e):($e=Wc(ge.type,ge.key,ge.props,null,de.mode,$e),Nl($e,ge),$e.return=de,de=$e)}return v(de);case k:e:{for(zt=ge.key;ie!==null;){if(ie.key===zt)if(ie.tag===4&&ie.stateNode.containerInfo===ge.containerInfo&&ie.stateNode.implementation===ge.implementation){o(de,ie.sibling),$e=f(ie,ge.children||[]),$e.return=de,de=$e;break e}else{o(de,ie);break}else s(de,ie);ie=ie.sibling}$e=Jd(ge,de.mode,$e),$e.return=de,de=$e}return v(de);case V:return ge=pr(ge),es(de,ie,ge,$e)}if(me(ge))return St(de,ie,ge,$e);if(De(ge)){if(zt=De(ge),typeof zt!="function")throw Error(a(150));return ge=zt.call(ge),Ft(de,ie,ge,$e)}if(typeof ge.then=="function")return es(de,ie,Zc(ge),$e);if(ge.$$typeof===O)return es(de,ie,Gc(de,ge),$e);Jc(de,ge)}return typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint"?(ge=""+ge,ie!==null&&ie.tag===6?(o(de,ie.sibling),$e=f(ie,ge),$e.return=de,de=$e):(o(de,ie),$e=Zd(ge,de.mode,$e),$e.return=de,de=$e),v(de)):o(de,ie)}return function(de,ie,ge,$e){try{Al=0;var zt=es(de,ie,ge,$e);return Vr=null,zt}catch(At){if(At===Ur||At===Kc)throw At;var An=fi(29,At,null,de.mode);return An.lanes=$e,An.return=de,An}finally{}}}var gr=p_(!0),__=p_(!1),Oa=!1;function ff(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $a(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Pn&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Yc(e),Jp(e,null,o),s}return Vc(e,r,s,o),Yc(e)}function Dl(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,un(e,o)}}function mf(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var pf=!1;function Rl(){if(pf){var e=Hr;if(e!==null)throw e}}function Bl(e,s,o,r){pf=!1;var f=e.updateQueue;Oa=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var Z=A,ye=Z.next;Z.next=null,v===null?m=ye:v.next=ye,v=Z;var Re=e.alternate;Re!==null&&(Re=Re.updateQueue,A=Re.lastBaseUpdate,A!==v&&(A===null?Re.firstBaseUpdate=ye:A.next=ye,Re.lastBaseUpdate=Z))}if(m!==null){var Pe=f.baseState;v=0,Re=ye=Z=null,A=m;do{var ve=A.lane&-536870913,Ce=ve!==A.lane;if(Ce?(yn&ve)===ve:(r&ve)===ve){ve!==0&&ve===Pr&&(pf=!0),Re!==null&&(Re=Re.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var St=e,Ft=A;ve=s;var es=o;switch(Ft.tag){case 1:if(St=Ft.payload,typeof St=="function"){Pe=St.call(es,Pe,ve);break e}Pe=St;break e;case 3:St.flags=St.flags&-65537|128;case 0:if(St=Ft.payload,ve=typeof St=="function"?St.call(es,Pe,ve):St,ve==null)break e;Pe=x({},Pe,ve);break e;case 2:Oa=!0}}ve=A.callback,ve!==null&&(e.flags|=64,Ce&&(e.flags|=8192),Ce=f.callbacks,Ce===null?f.callbacks=[ve]:Ce.push(ve))}else Ce={lane:ve,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Re===null?(ye=Re=Ce,Z=Pe):Re=Re.next=Ce,v|=ve;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;Ce=A,A=Ce.next,Ce.next=null,f.lastBaseUpdate=Ce,f.shared.pending=null}}while(!0);Re===null&&(Z=Pe),f.baseState=Z,f.firstBaseUpdate=ye,f.lastBaseUpdate=Re,m===null&&(f.shared.lanes=0),Va|=v,e.lanes=v,e.memoizedState=Pe}}function g_(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function y_(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)g_(o[e],s)}var Yr=I(null),eu=I(0);function x_(e,s){e=ka,G(eu,e),G(Yr,s),ka=e|s.baseLanes}function _f(){G(eu,ka),G(Yr,Yr.current)}function gf(){ka=eu.current,fe(Yr),fe(eu)}var hi=I(null),Di=null;function Ia(e){var s=e.alternate;G(Us,Us.current&1),G(hi,e),Di===null&&(s===null||Yr.current!==null||s.memoizedState!==null)&&(Di=e)}function yf(e){G(Us,Us.current),G(hi,e),Di===null&&(Di=e)}function b_(e){e.tag===22?(G(Us,Us.current),G(hi,e),Di===null&&(Di=e)):Pa()}function Pa(){G(Us,Us.current),G(hi,hi.current)}function mi(e){fe(hi),Di===e&&(Di=null),fe(Us)}var Us=I(0);function tu(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Ch(o)||kh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ga=0,tn=null,Zn=null,to=null,nu=!1,Wr=!1,yr=!1,su=0,Ll=0,Fr=null,S2=0;function Rs(){throw Error(a(321))}function xf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!ut(e[o],s[o]))return!1;return!0}function bf(e,s,o,r,f,m){return ga=m,tn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,P.H=e===null||e.memoizedState===null?sg:Lf,yr=!1,m=o(r,f),yr=!1,Wr&&(m=w_(s,o,r,f)),v_(e),m}function v_(e){P.H=$l;var s=Zn!==null&&Zn.next!==null;if(ga=0,to=Zn=tn=null,nu=!1,Ll=0,Fr=null,s)throw Error(a(300));e===null||no||(e=e.dependencies,e!==null&&Xc(e)&&(no=!0))}function w_(e,s,o,r){tn=e;var f=0;do{if(Wr&&(Fr=null),Ll=0,Wr=!1,25<=f)throw Error(a(301));if(f+=1,to=Zn=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}P.H=og,m=s(o,r)}while(Wr);return m}function C2(){var e=P.H,s=e.useState()[0];return s=typeof s.then=="function"?Ol(s):s,e=e.useState()[0],(Zn!==null?Zn.memoizedState:null)!==e&&(tn.flags|=1024),s}function vf(){var e=su!==0;return su=0,e}function wf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function Sf(e){if(nu){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}nu=!1}ga=0,to=Zn=tn=null,Wr=!1,Ll=su=0,Fr=null}function Xo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return to===null?tn.memoizedState=to=e:to=to.next=e,to}function Vs(){if(Zn===null){var e=tn.alternate;e=e!==null?e.memoizedState:null}else e=Zn.next;var s=to===null?tn.memoizedState:to.next;if(s!==null)to=s,Zn=e;else{if(e===null)throw tn.alternate===null?Error(a(467)):Error(a(310));Zn=e,e={memoizedState:Zn.memoizedState,baseState:Zn.baseState,baseQueue:Zn.baseQueue,queue:Zn.queue,next:null},to===null?tn.memoizedState=to=e:to=to.next=e}return to}function ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ol(e){var s=Ll;return Ll+=1,Fr===null&&(Fr=[]),e=f_(Fr,e,s),s=tn,(to===null?s.memoizedState:to.next)===null&&(s=s.alternate,P.H=s===null||s.memoizedState===null?sg:Lf),e}function iu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ol(e);if(e.$$typeof===O)return Mo(e)}throw Error(a(438,String(e)))}function Cf(e){var s=null,o=tn.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=tn.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=ou(),tn.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=le;return s.index++,o}function ya(e,s){return typeof s=="function"?s(e):s}function au(e){var s=Vs();return kf(s,Zn,e)}function kf(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,m=r.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,r.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var A=v=null,Z=null,ye=s,Re=!1;do{var Pe=ye.lane&-536870913;if(Pe!==ye.lane?(yn&Pe)===Pe:(ga&Pe)===Pe){var ve=ye.revertLane;if(ve===0)Z!==null&&(Z=Z.next={lane:0,revertLane:0,gesture:null,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null}),Pe===Pr&&(Re=!0);else if((ga&ve)===ve){ye=ye.next,ve===Pr&&(Re=!0);continue}else Pe={lane:0,revertLane:ye.revertLane,gesture:null,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null},Z===null?(A=Z=Pe,v=m):Z=Z.next=Pe,tn.lanes|=ve,Va|=ve;Pe=ye.action,yr&&o(m,Pe),m=ye.hasEagerState?ye.eagerState:o(m,Pe)}else ve={lane:Pe,revertLane:ye.revertLane,gesture:ye.gesture,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null},Z===null?(A=Z=ve,v=m):Z=Z.next=ve,tn.lanes|=Pe,Va|=Pe;ye=ye.next}while(ye!==null&&ye!==s);if(Z===null?v=m:Z.next=A,!ut(m,e.memoizedState)&&(no=!0,Re&&(o=Hr,o!==null)))throw o;e.memoizedState=m,e.baseState=v,e.baseQueue=Z,r.lastRenderedState=m}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function jf(e){var s=Vs(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);ut(m,s.memoizedState)||(no=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function S_(e,s,o){var r=tn,f=Vs(),m=Cn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!ut((Zn||f).memoizedState,o);if(v&&(f.memoizedState=o,no=!0),f=f.queue,Tf(j_.bind(null,r,f,e),[e]),f.getSnapshot!==s||v||to!==null&&to.memoizedState.tag&1){if(r.flags|=2048,Xr(9,{destroy:void 0},k_.bind(null,r,f,o,s),null),ls===null)throw Error(a(349));m||(ga&127)!==0||C_(r,s,o)}return o}function C_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=tn.updateQueue,s===null?(s=ou(),tn.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function k_(e,s,o,r){s.value=o,s.getSnapshot=r,M_(s)&&E_(e)}function j_(e,s,o){return o(function(){M_(s)&&E_(e)})}function M_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!ut(e,o)}catch{return!0}}function E_(e){var s=cr(e,2);s!==null&&ii(s,e,2)}function Mf(e){var s=Xo();if(typeof e=="function"){var o=e;if(e=o(),yr){he(!0);try{o()}finally{he(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:e},s}function T_(e,s,o,r){return e.baseState=o,kf(e,Zn,typeof r=="function"?r:ya)}function k2(e,s,o,r,f){if(cu(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};P.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,A_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function A_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var m=P.T,v={};P.T=v;try{var A=o(f,r),Z=P.S;Z!==null&&Z(v,A),N_(e,s,A)}catch(ye){Ef(e,s,ye)}finally{m!==null&&v.types!==null&&(m.types=v.types),P.T=m}}else try{m=o(f,r),N_(e,s,m)}catch(ye){Ef(e,s,ye)}}function N_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){D_(e,s,r)},function(r){return Ef(e,s,r)}):D_(e,s,o)}function D_(e,s,o){s.status="fulfilled",s.value=o,R_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,A_(e,o)))}function Ef(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,R_(s),s=s.next;while(s!==r)}e.action=null}function R_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function B_(e,s){return s}function L_(e,s){if(Cn){var o=ls.formState;if(o!==null){e:{var r=tn;if(Cn){if(ys){t:{for(var f=ys,m=Ni;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ri(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){ys=Ri(f.nextSibling),r=f.data==="F!";break e}}Ba(r)}r=!1}r&&(s=o[0])}}return o=Xo(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:B_,lastRenderedState:s},o.queue=r,o=eg.bind(null,tn,r),r.dispatch=o,r=Mf(!1),m=Bf.bind(null,tn,!1,r.queue),r=Xo(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=k2.bind(null,tn,f,m,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function O_(e){var s=Vs();return z_(s,Zn,e)}function z_(e,s,o){if(s=kf(e,s,B_)[0],e=au(ya)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=Ol(s)}catch(v){throw v===Ur?Kc:v}else r=s;s=Vs();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(tn.flags|=2048,Xr(9,{destroy:void 0},j2.bind(null,f,o),null)),[r,m,e]}function j2(e,s){e.action=s}function $_(e){var s=Vs(),o=Zn;if(o!==null)return z_(s,o,e);Vs(),s=s.memoizedState,o=Vs();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function Xr(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=tn.updateQueue,s===null&&(s=ou(),tn.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function I_(){return Vs().memoizedState}function ru(e,s,o,r){var f=Xo();tn.flags|=e,f.memoizedState=Xr(1|s,{destroy:void 0},o,r===void 0?null:r)}function lu(e,s,o,r){var f=Vs();r=r===void 0?null:r;var m=f.memoizedState.inst;Zn!==null&&r!==null&&xf(r,Zn.memoizedState.deps)?f.memoizedState=Xr(s,m,o,r):(tn.flags|=e,f.memoizedState=Xr(1|s,m,o,r))}function P_(e,s){ru(8390656,8,e,s)}function Tf(e,s){lu(2048,8,e,s)}function M2(e){tn.flags|=4;var s=tn.updateQueue;if(s===null)s=ou(),tn.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function H_(e){var s=Vs().memoizedState;return M2({ref:s,nextImpl:e}),function(){if((Pn&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function U_(e,s){return lu(4,2,e,s)}function V_(e,s){return lu(4,4,e,s)}function Y_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function W_(e,s,o){o=o!=null?o.concat([e]):null,lu(4,4,Y_.bind(null,s,e),o)}function Af(){}function F_(e,s){var o=Vs();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&xf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function X_(e,s){var o=Vs();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&xf(s,r[1]))return r[0];if(r=e(),yr){he(!0);try{e()}finally{he(!1)}}return o.memoizedState=[r,s],r}function Nf(e,s,o){return o===void 0||(ga&1073741824)!==0&&(yn&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=Gg(),tn.lanes|=e,Va|=e,o)}function G_(e,s,o,r){return ut(o,s)?o:Yr.current!==null?(e=Nf(e,o,r),ut(e,s)||(no=!0),e):(ga&42)===0||(ga&1073741824)!==0&&(yn&261930)===0?(no=!0,e.memoizedState=o):(e=Gg(),tn.lanes|=e,Va|=e,s)}function q_(e,s,o,r,f){var m=ae.p;ae.p=m!==0&&8>m?m:8;var v=P.T,A={};P.T=A,Bf(e,!1,s,o);try{var Z=f(),ye=P.S;if(ye!==null&&ye(A,Z),Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var Re=w2(Z,r);zl(e,s,Re,gi(e))}else zl(e,s,r,gi(e))}catch(Pe){zl(e,s,{then:function(){},status:"rejected",reason:Pe},gi())}finally{ae.p=m,v!==null&&A.types!==null&&(v.types=A.types),P.T=v}}function E2(){}function Df(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=K_(e).queue;q_(e,f,s,F,o===null?E2:function(){return Q_(e),o(r)})}function K_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:F},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function Q_(e){var s=K_(e);s.next===null&&(s=e.alternate.memoizedState),zl(e,s.next.queue,{},gi())}function Rf(){return Mo(ec)}function Z_(){return Vs().memoizedState}function J_(){return Vs().memoizedState}function T2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=gi();e=za(o);var r=$a(s,e,o);r!==null&&(ii(r,s,o),Dl(r,s,o)),s={cache:lf()},e.payload=s;return}s=s.return}}function A2(e,s,o){var r=gi();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},cu(e)?tg(s,o):(o=Kd(e,s,o,r),o!==null&&(ii(o,e,r),ng(o,s,r)))}function eg(e,s,o){var r=gi();zl(e,s,o,r)}function zl(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(cu(e))tg(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,A=m(v,o);if(f.hasEagerState=!0,f.eagerState=A,ut(A,v))return Vc(e,s,f,0),ls===null&&Uc(),!1}catch{}finally{}if(o=Kd(e,s,f,r),o!==null)return ii(o,e,r),ng(o,s,r),!0}return!1}function Bf(e,s,o,r){if(r={lane:2,revertLane:fh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},cu(e)){if(s)throw Error(a(479))}else s=Kd(e,o,r,2),s!==null&&ii(s,e,2)}function cu(e){var s=e.alternate;return e===tn||s!==null&&s===tn}function tg(e,s){Wr=nu=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function ng(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,un(e,o)}}var $l={readContext:Mo,use:iu,useCallback:Rs,useContext:Rs,useEffect:Rs,useImperativeHandle:Rs,useLayoutEffect:Rs,useInsertionEffect:Rs,useMemo:Rs,useReducer:Rs,useRef:Rs,useState:Rs,useDebugValue:Rs,useDeferredValue:Rs,useTransition:Rs,useSyncExternalStore:Rs,useId:Rs,useHostTransitionStatus:Rs,useFormState:Rs,useActionState:Rs,useOptimistic:Rs,useMemoCache:Rs,useCacheRefresh:Rs};$l.useEffectEvent=Rs;var sg={readContext:Mo,use:iu,useCallback:function(e,s){return Xo().memoizedState=[e,s===void 0?null:s],e},useContext:Mo,useEffect:P_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,ru(4194308,4,Y_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return ru(4194308,4,e,s)},useInsertionEffect:function(e,s){ru(4,2,e,s)},useMemo:function(e,s){var o=Xo();s=s===void 0?null:s;var r=e();if(yr){he(!0);try{e()}finally{he(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=Xo();if(o!==void 0){var f=o(s);if(yr){he(!0);try{o(s)}finally{he(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=A2.bind(null,tn,e),[r.memoizedState,e]},useRef:function(e){var s=Xo();return e={current:e},s.memoizedState=e},useState:function(e){e=Mf(e);var s=e.queue,o=eg.bind(null,tn,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Af,useDeferredValue:function(e,s){var o=Xo();return Nf(o,e,s)},useTransition:function(){var e=Mf(!1);return e=q_.bind(null,tn,e.queue,!0,!1),Xo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=tn,f=Xo();if(Cn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),ls===null)throw Error(a(349));(yn&127)!==0||C_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,P_(j_.bind(null,r,m,e),[e]),r.flags|=2048,Xr(9,{destroy:void 0},k_.bind(null,r,m,o,s),null),o},useId:function(){var e=Xo(),s=ls.identifierPrefix;if(Cn){var o=oa,r=sa;o=(r&~(1<<32-Ie(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=su++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=S2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Rf,useFormState:L_,useActionState:L_,useOptimistic:function(e){var s=Xo();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Bf.bind(null,tn,!0,o),o.dispatch=s,[e,s]},useMemoCache:Cf,useCacheRefresh:function(){return Xo().memoizedState=T2.bind(null,tn)},useEffectEvent:function(e){var s=Xo(),o={impl:e};return s.memoizedState=o,function(){if((Pn&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Lf={readContext:Mo,use:iu,useCallback:F_,useContext:Mo,useEffect:Tf,useImperativeHandle:W_,useInsertionEffect:U_,useLayoutEffect:V_,useMemo:X_,useReducer:au,useRef:I_,useState:function(){return au(ya)},useDebugValue:Af,useDeferredValue:function(e,s){var o=Vs();return G_(o,Zn.memoizedState,e,s)},useTransition:function(){var e=au(ya)[0],s=Vs().memoizedState;return[typeof e=="boolean"?e:Ol(e),s]},useSyncExternalStore:S_,useId:Z_,useHostTransitionStatus:Rf,useFormState:O_,useActionState:O_,useOptimistic:function(e,s){var o=Vs();return T_(o,Zn,e,s)},useMemoCache:Cf,useCacheRefresh:J_};Lf.useEffectEvent=H_;var og={readContext:Mo,use:iu,useCallback:F_,useContext:Mo,useEffect:Tf,useImperativeHandle:W_,useInsertionEffect:U_,useLayoutEffect:V_,useMemo:X_,useReducer:jf,useRef:I_,useState:function(){return jf(ya)},useDebugValue:Af,useDeferredValue:function(e,s){var o=Vs();return Zn===null?Nf(o,e,s):G_(o,Zn.memoizedState,e,s)},useTransition:function(){var e=jf(ya)[0],s=Vs().memoizedState;return[typeof e=="boolean"?e:Ol(e),s]},useSyncExternalStore:S_,useId:Z_,useHostTransitionStatus:Rf,useFormState:$_,useActionState:$_,useOptimistic:function(e,s){var o=Vs();return Zn!==null?T_(o,Zn,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:J_};og.useEffectEvent=H_;function Of(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var zf={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=gi(),f=za(r);f.payload=s,o!=null&&(f.callback=o),s=$a(e,f,r),s!==null&&(ii(s,e,r),Dl(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=gi(),f=za(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=$a(e,f,r),s!==null&&(ii(s,e,r),Dl(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=gi(),r=za(o);r.tag=2,s!=null&&(r.callback=s),s=$a(e,r,o),s!==null&&(ii(s,e,o),Dl(s,e,o))}};function ig(e,s,o,r,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,m,v):s.prototype&&s.prototype.isPureReactComponent?!rt(o,r)||!rt(f,m):!0}function ag(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&zf.enqueueReplaceState(s,s.state,null)}function xr(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function rg(e){Hc(e)}function lg(e){console.error(e)}function cg(e){Hc(e)}function uu(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function ug(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function $f(e,s,o){return o=za(o),o.tag=3,o.payload={element:null},o.callback=function(){uu(e,s)},o}function dg(e){return e=za(e),e.tag=3,e}function fg(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;e.payload=function(){return f(m)},e.callback=function(){ug(s,o,r)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){ug(s,o,r),typeof f!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function N2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&Ir(s,o,f,!0),o=hi.current,o!==null){switch(o.tag){case 31:case 13:return Di===null?wu():o.alternate===null&&Bs===0&&(Bs=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),ch(e,r,f)),!1;case 22:return o.flags|=65536,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),ch(e,r,f)),!1}throw Error(a(435,o.tag))}return ch(e,r,f),wu(),!1}if(Cn)return s=hi.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==nf&&(e=Error(a(422),{cause:r}),Ml(Ei(e,o)))):(r!==nf&&(s=Error(a(423),{cause:r}),Ml(Ei(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=Ei(r,o),f=$f(e.stateNode,r,f),mf(e,f),Bs!==4&&(Bs=2)),!1;var m=Error(a(520),{cause:r});if(m=Ei(m,o),Fl===null?Fl=[m]:Fl.push(m),Bs!==4&&(Bs=2),s===null)return!0;r=Ei(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=$f(o.stateNode,r,e),mf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ya===null||!Ya.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=dg(f),fg(f,e,o,r),mf(o,f),!1}o=o.return}while(o!==null);return!1}var If=Error(a(461)),no=!1;function Eo(e,s,o,r){s.child=e===null?__(s,null,o,r):gr(s,e.child,o,r)}function hg(e,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var v={};for(var A in r)A!=="ref"&&(v[A]=r[A])}else v=r;return hr(s),r=bf(e,s,o,v,m,f),A=vf(),e!==null&&!no?(wf(e,s,f),xa(e,s,f)):(Cn&&A&&ef(s),s.flags|=1,Eo(e,s,r,f),s.child)}function mg(e,s,o,r,f){if(e===null){var m=o.type;return typeof m=="function"&&!Qd(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,pg(e,s,m,r,f)):(e=Wc(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Xf(e,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:rt,o(v,r)&&e.ref===s.ref)return xa(e,s,f)}return s.flags|=1,e=ha(m,r),e.ref=s.ref,e.return=s,s.child=e}function pg(e,s,o,r,f){if(e!==null){var m=e.memoizedProps;if(rt(m,r)&&e.ref===s.ref)if(no=!1,s.pendingProps=r=m,Xf(e,f))(e.flags&131072)!==0&&(no=!0);else return s.lanes=e.lanes,xa(e,s,f)}return Pf(e,s,o,r,f)}function _g(e,s,o,r){var f=r.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return gg(e,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&qc(s,m!==null?m.cachePool:null),m!==null?x_(s,m):_f(),b_(s);else return r=s.lanes=536870912,gg(e,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(qc(s,m.cachePool),x_(s,m),Pa(),s.memoizedState=null):(e!==null&&qc(s,null),_f(),Pa());return Eo(e,s,f,o),s.child}function Il(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function gg(e,s,o,r,f){var m=uf();return m=m===null?null:{parent:eo._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&qc(s,null),_f(),b_(s),e!==null&&Ir(e,s,r,!0),s.childLanes=f,null}function du(e,s){return s=hu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function yg(e,s,o){return gr(s,e.child,null,o),e=du(s,s.pendingProps),e.flags|=2,mi(s),s.memoizedState=null,e}function D2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(Cn){if(r.mode==="hidden")return e=du(s,r),s.lanes=536870912,Il(null,e);if(yf(s),(e=ys)?(e=A0(e,Ni),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Da!==null?{id:sa,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},o=t_(e),o.return=s,s.child=o,jo=s,ys=null)):e=null,e===null)throw Ba(s);return s.lanes=536870912,null}return du(s,r)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(yf(s),f)if(s.flags&256)s.flags&=-257,s=yg(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(no||Ir(e,s,o,!1),f=(o&e.childLanes)!==0,no||f){if(r=ls,r!==null&&(v=ln(r,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,cr(e,v),ii(r,e,v),If;wu(),s=yg(e,s,o)}else e=m.treeContext,ys=Ri(v.nextSibling),jo=s,Cn=!0,Ra=null,Ni=!1,e!==null&&o_(s,e),s=du(s,r),s.flags|=4096;return s}return e=ha(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function fu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function Pf(e,s,o,r,f){return hr(s),o=bf(e,s,o,r,void 0,f),r=vf(),e!==null&&!no?(wf(e,s,f),xa(e,s,f)):(Cn&&r&&ef(s),s.flags|=1,Eo(e,s,o,f),s.child)}function xg(e,s,o,r,f,m){return hr(s),s.updateQueue=null,o=w_(s,r,o,f),v_(e),r=vf(),e!==null&&!no?(wf(e,s,m),xa(e,s,m)):(Cn&&r&&ef(s),s.flags|=1,Eo(e,s,o,m),s.child)}function bg(e,s,o,r,f){if(hr(s),s.stateNode===null){var m=Lr,v=o.contextType;typeof v=="object"&&v!==null&&(m=Mo(v)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=zf,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},ff(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?Mo(v):Lr,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Of(s,o,v,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&zf.enqueueReplaceState(m,m.state,null),Bl(s,r,m,f),Rl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){m=s.stateNode;var A=s.memoizedProps,Z=xr(o,A);m.props=Z;var ye=m.context,Re=o.contextType;v=Lr,typeof Re=="object"&&Re!==null&&(v=Mo(Re));var Pe=o.getDerivedStateFromProps;Re=typeof Pe=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=s.pendingProps!==A,Re||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||ye!==v)&&ag(s,m,r,v),Oa=!1;var ve=s.memoizedState;m.state=ve,Bl(s,r,m,f),Rl(),ye=s.memoizedState,A||ve!==ye||Oa?(typeof Pe=="function"&&(Of(s,o,Pe,r),ye=s.memoizedState),(Z=Oa||ig(s,o,Z,r,ve,ye,v))?(Re||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=ye),m.props=r,m.state=ye,m.context=v,r=Z):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,hf(e,s),v=s.memoizedProps,Re=xr(o,v),m.props=Re,Pe=s.pendingProps,ve=m.context,ye=o.contextType,Z=Lr,typeof ye=="object"&&ye!==null&&(Z=Mo(ye)),A=o.getDerivedStateFromProps,(ye=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==Pe||ve!==Z)&&ag(s,m,r,Z),Oa=!1,ve=s.memoizedState,m.state=ve,Bl(s,r,m,f),Rl();var Ce=s.memoizedState;v!==Pe||ve!==Ce||Oa||e!==null&&e.dependencies!==null&&Xc(e.dependencies)?(typeof A=="function"&&(Of(s,o,A,r),Ce=s.memoizedState),(Re=Oa||ig(s,o,Re,r,ve,Ce,Z)||e!==null&&e.dependencies!==null&&Xc(e.dependencies))?(ye||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,Ce,Z),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,Ce,Z)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&ve===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ve===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=Ce),m.props=r,m.state=Ce,m.context=Z,r=Re):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&ve===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ve===e.memoizedState||(s.flags|=1024),r=!1)}return m=r,fu(e,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&r?(s.child=gr(s,e.child,null,f),s.child=gr(s,null,o,f)):Eo(e,s,o,f),s.memoizedState=m.state,e=s.child):e=xa(e,s,f),e}function vg(e,s,o,r){return dr(),s.flags|=256,Eo(e,s,o,r),s.child}var Hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(e){return{baseLanes:e,cachePool:u_()}}function Vf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=_i),e}function wg(e,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(Us.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if(Cn){if(f?Ia(s):Pa(),(e=ys)?(e=A0(e,Ni),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Da!==null?{id:sa,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},o=t_(e),o.return=s,s.child=o,jo=s,ys=null)):e=null,e===null)throw Ba(s);return kh(e)?s.lanes=32:s.lanes=536870912,null}var A=r.children;return r=r.fallback,f?(Pa(),f=s.mode,A=hu({mode:"hidden",children:A},f),r=ur(r,f,o,null),A.return=s,r.return=s,A.sibling=r,s.child=A,r=s.child,r.memoizedState=Uf(o),r.childLanes=Vf(e,v,o),s.memoizedState=Hf,Il(null,r)):(Ia(s),Yf(s,A))}var Z=e.memoizedState;if(Z!==null&&(A=Z.dehydrated,A!==null)){if(m)s.flags&256?(Ia(s),s.flags&=-257,s=Wf(e,s,o)):s.memoizedState!==null?(Pa(),s.child=e.child,s.flags|=128,s=null):(Pa(),A=r.fallback,f=s.mode,r=hu({mode:"visible",children:r.children},f),A=ur(A,f,o,null),A.flags|=2,r.return=s,A.return=s,r.sibling=A,s.child=r,gr(s,e.child,null,o),r=s.child,r.memoizedState=Uf(o),r.childLanes=Vf(e,v,o),s.memoizedState=Hf,s=Il(null,r));else if(Ia(s),kh(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var ye=v.dgst;v=ye,r=Error(a(419)),r.stack="",r.digest=v,Ml({value:r,source:null,stack:null}),s=Wf(e,s,o)}else if(no||Ir(e,s,o,!1),v=(o&e.childLanes)!==0,no||v){if(v=ls,v!==null&&(r=ln(v,o),r!==0&&r!==Z.retryLane))throw Z.retryLane=r,cr(e,r),ii(v,e,r),If;Ch(A)||wu(),s=Wf(e,s,o)}else Ch(A)?(s.flags|=192,s.child=e.child,s=null):(e=Z.treeContext,ys=Ri(A.nextSibling),jo=s,Cn=!0,Ra=null,Ni=!1,e!==null&&o_(s,e),s=Yf(s,r.children),s.flags|=4096);return s}return f?(Pa(),A=r.fallback,f=s.mode,Z=e.child,ye=Z.sibling,r=ha(Z,{mode:"hidden",children:r.children}),r.subtreeFlags=Z.subtreeFlags&65011712,ye!==null?A=ha(ye,A):(A=ur(A,f,o,null),A.flags|=2),A.return=s,r.return=s,r.sibling=A,s.child=r,Il(null,r),r=s.child,A=e.child.memoizedState,A===null?A=Uf(o):(f=A.cachePool,f!==null?(Z=eo._currentValue,f=f.parent!==Z?{parent:Z,pool:Z}:f):f=u_(),A={baseLanes:A.baseLanes|o,cachePool:f}),r.memoizedState=A,r.childLanes=Vf(e,v,o),s.memoizedState=Hf,Il(e.child,r)):(Ia(s),o=e.child,e=o.sibling,o=ha(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=o,s.memoizedState=null,o)}function Yf(e,s){return s=hu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function hu(e,s){return e=fi(22,e,null,s),e.lanes=0,e}function Wf(e,s,o){return gr(s,e.child,null,o),e=Yf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function Sg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),af(e.return,s,o)}function Ff(e,s,o,r,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function Cg(e,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var v=Us.current,A=(v&2)!==0;if(A?(v=v&1|2,s.flags|=128):v&=1,G(Us,v),Eo(e,s,r,o),r=Cn?jl:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sg(e,o,s);else if(e.tag===19)Sg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&tu(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Ff(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&tu(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Ff(s,!0,o,null,m,r);break;case"together":Ff(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function xa(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),Va|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(Ir(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=ha(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=ha(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Xf(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Xc(e)))}function R2(e,s,o){switch(s.tag){case 3:We(s,s.stateNode.containerInfo),La(s,eo,e.memoizedState.cache),dr();break;case 27:case 5:Rt(s);break;case 4:We(s,s.stateNode.containerInfo);break;case 10:La(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,yf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(Ia(s),s.flags|=128,null):(o&s.child.childLanes)!==0?wg(e,s,o):(Ia(s),e=xa(e,s,o),e!==null?e.sibling:null);Ia(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(Ir(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return Cg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),G(Us,Us.current),r)break;return null;case 22:return s.lanes=0,_g(e,s,o,s.pendingProps);case 24:La(s,eo,e.memoizedState.cache)}return xa(e,s,o)}function kg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)no=!0;else{if(!Xf(e,o)&&(s.flags&128)===0)return no=!1,R2(e,s,o);no=(e.flags&131072)!==0}else no=!1,Cn&&(s.flags&1048576)!==0&&s_(s,jl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=pr(s.elementType),s.type=e,typeof e=="function")Qd(e)?(r=xr(e,r),s.tag=1,s=bg(null,s,e,r,o)):(s.tag=0,s=Pf(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===D){s.tag=11,s=hg(null,s,e,r,o);break e}else if(f===Q){s.tag=14,s=mg(null,s,e,r,o);break e}}throw s=se(e)||e,Error(a(306,s,""))}}return s;case 0:return Pf(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=xr(r,s.pendingProps),bg(e,s,r,f,o);case 3:e:{if(We(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,hf(e,s),Bl(s,r,null,o);var v=s.memoizedState;if(r=v.cache,La(s,eo,r),r!==m.cache&&rf(s,[eo],o,!0),Rl(),r=v.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=vg(e,s,r,o);break e}else if(r!==f){f=Ei(Error(a(424)),s),Ml(f),s=vg(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ys=Ri(e.firstChild),jo=s,Cn=!0,Ra=null,Ni=!0,o=__(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(dr(),r===f){s=xa(e,s,o);break e}Eo(e,s,r,o)}s=s.child}return s;case 26:return fu(e,s),e===null?(o=O0(s.type,null,s.pendingProps,null))?s.memoizedState=o:Cn||(o=s.type,e=s.pendingProps,r=Tu(Ne.current).createElement(o),r[Xt]=s,r[En]=e,To(r,o,e),jn(r),s.stateNode=r):s.memoizedState=O0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return Rt(s),e===null&&Cn&&(r=s.stateNode=R0(s.type,s.pendingProps,Ne.current),jo=s,Ni=!0,f=ys,Ga(s.type)?(jh=f,ys=Ri(r.firstChild)):ys=f),Eo(e,s,s.pendingProps.children,o),fu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&Cn&&((f=r=ys)&&(r=cv(r,s.type,s.pendingProps,Ni),r!==null?(s.stateNode=r,jo=s,ys=Ri(r.firstChild),Ni=!1,f=!0):f=!1),f||Ba(s)),Rt(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,r=m.children,vh(f,m)?r=null:v!==null&&vh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=bf(e,s,C2,null,null,o),ec._currentValue=f),fu(e,s),Eo(e,s,r,o),s.child;case 6:return e===null&&Cn&&((e=o=ys)&&(o=uv(o,s.pendingProps,Ni),o!==null?(s.stateNode=o,jo=s,ys=null,e=!0):e=!1),e||Ba(s)),null;case 13:return wg(e,s,o);case 4:return We(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=gr(s,null,r,o):Eo(e,s,r,o),s.child;case 11:return hg(e,s,s.type,s.pendingProps,o);case 7:return Eo(e,s,s.pendingProps,o),s.child;case 8:return Eo(e,s,s.pendingProps.children,o),s.child;case 12:return Eo(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,La(s,s.type,r.value),Eo(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,hr(s),f=Mo(f),r=r(f),s.flags|=1,Eo(e,s,r,o),s.child;case 14:return mg(e,s,s.type,s.pendingProps,o);case 15:return pg(e,s,s.type,s.pendingProps,o);case 19:return Cg(e,s,o);case 31:return D2(e,s,o);case 22:return _g(e,s,o,s.pendingProps);case 24:return hr(s),r=Mo(eo),e===null?(f=uf(),f===null&&(f=ls,m=lf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},ff(s),La(s,eo,f)):((e.lanes&o)!==0&&(hf(e,s),Bl(s,null,null,o),Rl()),f=e.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),La(s,eo,r)):(r=m.cache,La(s,eo,r),r!==f.cache&&rf(s,[eo],o,!0))),Eo(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function ba(e){e.flags|=4}function Gf(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Zg())e.flags|=8192;else throw _r=Qc,df}else e.flags&=-16777217}function jg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!H0(s))if(Zg())e.flags|=8192;else throw _r=Qc,df}function mu(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?lt():536870912,e.lanes|=s,Qr|=s)}function Pl(e,s){if(!Cn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xs(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function B2(e,s,o){var r=s.pendingProps;switch(tf(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xs(s),null;case 1:return xs(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),_a(eo),ot(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&($r(s)?ba(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,sf())),xs(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(ba(s),m!==null?(xs(s),jg(s,m)):(xs(s),Gf(s,f,null,r,o))):m?m!==e.memoizedState?(ba(s),xs(s),jg(s,m)):(xs(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&ba(s),xs(s),Gf(s,f,e,r,o)),null;case 27:if(Ut(s),o=Ne.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ba(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return xs(s),null}e=_e.current,$r(s)?i_(s):(e=R0(f,r,o),s.stateNode=e,ba(s))}return xs(s),null;case 5:if(Ut(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ba(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return xs(s),null}if(m=_e.current,$r(s))i_(s);else{var v=Tu(Ne.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?v.createElement(f,{is:r.is}):v.createElement(f)}}m[Xt]=s,m[En]=r;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(To(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ba(s)}}return xs(s),Gf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&ba(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=Ne.current,$r(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=jo,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[Xt]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||w0(e.nodeValue,o)),e||Ba(s,!0)}else e=Tu(e).createTextNode(r),e[Xt]=s,s.stateNode=e}return xs(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=$r(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Xt]=s}else dr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;xs(s),e=!1}else o=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(mi(s),s):(mi(s),null);if((s.flags&128)!==0)throw Error(a(558))}return xs(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=$r(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[Xt]=s}else dr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;xs(s),f=!1}else f=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(mi(s),s):(mi(s),null)}return mi(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),mu(s,s.updateQueue),xs(s),null);case 4:return ot(),e===null&&_h(s.stateNode.containerInfo),xs(s),null;case 10:return _a(s.type),xs(s),null;case 19:if(fe(Us),r=s.memoizedState,r===null)return xs(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)Pl(r,!1);else{if(Bs!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=tu(e),m!==null){for(s.flags|=128,Pl(r,!1),e=m.updateQueue,s.updateQueue=e,mu(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)e_(o,e),o=o.sibling;return G(Us,Us.current&1|2),Cn&&ma(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&ft()>xu&&(s.flags|=128,f=!0,Pl(r,!1),s.lanes=4194304)}else{if(!f)if(e=tu(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,mu(s,e),Pl(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!Cn)return xs(s),null}else 2*ft()-r.renderingStartTime>xu&&o!==536870912&&(s.flags|=128,f=!0,Pl(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(e=r.last,e!==null?e.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ft(),e.sibling=null,o=Us.current,G(Us,f?o&1|2:o&1),Cn&&ma(s,r.treeForkCount),e):(xs(s),null);case 22:case 23:return mi(s),gf(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(xs(s),s.subtreeFlags&6&&(s.flags|=8192)):xs(s),o=s.updateQueue,o!==null&&mu(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&fe(mr),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),_a(eo),xs(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function L2(e,s){switch(tf(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return _a(eo),ot(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return Ut(s),null;case 31:if(s.memoizedState!==null){if(mi(s),s.alternate===null)throw Error(a(340));dr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(mi(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));dr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return fe(Us),null;case 4:return ot(),null;case 10:return _a(s.type),null;case 22:case 23:return mi(s),gf(),e!==null&&fe(mr),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return _a(eo),null;case 25:return null;default:return null}}function Mg(e,s){switch(tf(s),s.tag){case 3:_a(eo),ot();break;case 26:case 27:case 5:Ut(s);break;case 4:ot();break;case 31:s.memoizedState!==null&&mi(s);break;case 13:mi(s);break;case 19:fe(Us);break;case 10:_a(s.type);break;case 22:case 23:mi(s),gf(),e!==null&&fe(mr);break;case 24:_a(eo)}}function Hl(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var m=o.create,v=o.inst;r=m(),v.destroy=r}o=o.next}while(o!==f)}}catch(A){Xn(s,s.return,A)}}function Ha(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&e)===e){var v=r.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,f=s;var Z=o,ye=A;try{ye()}catch(Re){Xn(f,Z,Re)}}}r=r.next}while(r!==m)}}catch(Re){Xn(s,s.return,Re)}}function Eg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{y_(s,o)}catch(r){Xn(e,e.return,r)}}}function Tg(e,s,o){o.props=xr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){Xn(e,s,r)}}function Ul(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){Xn(e,s,f)}}function ia(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Xn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Xn(e,s,f)}else o.current=null}function Ag(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Xn(e,e.return,f)}}function qf(e,s,o){try{var r=e.stateNode;sv(r,e.type,o,s),r[En]=s}catch(f){Xn(e,e.return,f)}}function Ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function Kf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qf(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Ns));else if(r!==4&&(r===27&&Ga(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(Qf(e,s,o),e=e.sibling;e!==null;)Qf(e,s,o),e=e.sibling}function pu(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&Ga(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(pu(e,s,o),e=e.sibling;e!==null;)pu(e,s,o),e=e.sibling}function Dg(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);To(s,r,o),s[Xt]=e,s[En]=o}catch(m){Xn(e,e.return,m)}}var va=!1,so=!1,Zf=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,vo=null;function O2(e,s){if(e=e.containerInfo,xh=Ou,e=rn(e),Ot(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,A=-1,Z=-1,ye=0,Re=0,Pe=e,ve=null;t:for(;;){for(var Ce;Pe!==o||f!==0&&Pe.nodeType!==3||(A=v+f),Pe!==m||r!==0&&Pe.nodeType!==3||(Z=v+r),Pe.nodeType===3&&(v+=Pe.nodeValue.length),(Ce=Pe.firstChild)!==null;)ve=Pe,Pe=Ce;for(;;){if(Pe===e)break t;if(ve===o&&++ye===f&&(A=v),ve===m&&++Re===r&&(Z=v),(Ce=Pe.nextSibling)!==null)break;Pe=ve,ve=Pe.parentNode}Pe=Ce}o=A===-1||Z===-1?null:{start:A,end:Z}}else o=null}o=o||{start:0,end:0}}else o=null;for(bh={focusedElem:e,selectionRange:o},Ou=!1,vo=s;vo!==null;)if(s=vo,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,vo=e;else for(;vo!==null;){switch(s=vo,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var St=xr(o.type,f);e=r.getSnapshotBeforeUpdate(St,m),r.__reactInternalSnapshotBeforeUpdate=e}catch(Ft){Xn(o,o.return,Ft)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)Sh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,vo=e;break}vo=s.return}}function Bg(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:Sa(e,o),r&4&&Hl(5,o);break;case 1:if(Sa(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(v){Xn(o,o.return,v)}else{var f=xr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Xn(o,o.return,v)}}r&64&&Eg(o),r&512&&Ul(o,o.return);break;case 3:if(Sa(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{y_(e,s)}catch(v){Xn(o,o.return,v)}}break;case 27:s===null&&r&4&&Dg(o);case 26:case 5:Sa(e,o),s===null&&r&4&&Ag(o),r&512&&Ul(o,o.return);break;case 12:Sa(e,o);break;case 31:Sa(e,o),r&4&&zg(e,o);break;case 13:Sa(e,o),r&4&&$g(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=W2.bind(null,o),dv(e,o))));break;case 22:if(r=o.memoizedState!==null||va,!r){s=s!==null&&s.memoizedState!==null||so,f=va;var m=so;va=r,(so=s)&&!m?Ca(e,o,(o.subtreeFlags&8772)!==0):Sa(e,o),va=f,so=m}break;case 30:break;default:Sa(e,o)}}function Lg(e){var s=e.alternate;s!==null&&(e.alternate=null,Lg(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&Do(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Cs=null,ti=!1;function wa(e,s,o){for(o=o.child;o!==null;)Og(e,s,o),o=o.sibling}function Og(e,s,o){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Me,o)}catch{}switch(o.tag){case 26:so||ia(o,s),wa(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:so||ia(o,s);var r=Cs,f=ti;Ga(o.type)&&(Cs=o.stateNode,ti=!1),wa(e,s,o),Ql(o.stateNode),Cs=r,ti=f;break;case 5:so||ia(o,s);case 6:if(r=Cs,f=ti,Cs=null,wa(e,s,o),Cs=r,ti=f,Cs!==null)if(ti)try{(Cs.nodeType===9?Cs.body:Cs.nodeName==="HTML"?Cs.ownerDocument.body:Cs).removeChild(o.stateNode)}catch(m){Xn(o,s,m)}else try{Cs.removeChild(o.stateNode)}catch(m){Xn(o,s,m)}break;case 18:Cs!==null&&(ti?(e=Cs,E0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),il(e)):E0(Cs,o.stateNode));break;case 4:r=Cs,f=ti,Cs=o.stateNode.containerInfo,ti=!0,wa(e,s,o),Cs=r,ti=f;break;case 0:case 11:case 14:case 15:Ha(2,o,s),so||Ha(4,o,s),wa(e,s,o);break;case 1:so||(ia(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Tg(o,s,r)),wa(e,s,o);break;case 21:wa(e,s,o);break;case 22:so=(r=so)||o.memoizedState!==null,wa(e,s,o),so=r;break;default:wa(e,s,o)}}function zg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{il(e)}catch(o){Xn(s,s.return,o)}}}function $g(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{il(e)}catch(o){Xn(s,s.return,o)}}function z2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Rg),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Rg),s;default:throw Error(a(435,e.tag))}}function _u(e,s){var o=z2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=F2.bind(null,e,r);r.then(f,f)}})}function ni(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=e,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(Ga(A.type)){Cs=A.stateNode,ti=!1;break e}break;case 5:Cs=A.stateNode,ti=!1;break e;case 3:case 4:Cs=A.stateNode.containerInfo,ti=!0;break e}A=A.return}if(Cs===null)throw Error(a(160));Og(m,v,f),Cs=null,ti=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)Ig(s,e),s=s.sibling}var Fi=null;function Ig(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ni(s,e),si(e),r&4&&(Ha(3,e,e.return),Hl(3,e),Ha(5,e,e.return));break;case 1:ni(s,e),si(e),r&512&&(so||o===null||ia(o,o.return)),r&64&&va&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=Fi;if(ni(s,e),si(e),r&512&&(so||o===null||ia(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[ss]||m[Xt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),To(m,r,o),m[Xt]=e,jn(m),r=m;break e;case"link":var v=I0("link","href",f).get(r+(o.href||""));if(v){for(var A=0;A<v.length;A++)if(m=v[A],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(A,1);break t}}m=f.createElement(r),To(m,r,o),f.head.appendChild(m);break;case"meta":if(v=I0("meta","content",f).get(r+(o.content||""))){for(A=0;A<v.length;A++)if(m=v[A],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(A,1);break t}}m=f.createElement(r),To(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[Xt]=e,jn(m),r=m}e.stateNode=r}else P0(f,e.type,e.stateNode);else e.stateNode=$0(f,r,e.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?P0(f,e.type,e.stateNode):$0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&qf(e,e.memoizedProps,o.memoizedProps)}break;case 27:ni(s,e),si(e),r&512&&(so||o===null||ia(o,o.return)),o!==null&&r&4&&qf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(ni(s,e),si(e),r&512&&(so||o===null||ia(o,o.return)),e.flags&32){f=e.stateNode;try{vs(f,"")}catch(St){Xn(e,e.return,St)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,qf(e,f,o!==null?o.memoizedProps:f)),r&1024&&(Zf=!0);break;case 6:if(ni(s,e),si(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(St){Xn(e,e.return,St)}}break;case 3:if(Du=null,f=Fi,Fi=Au(s.containerInfo),ni(s,e),Fi=f,si(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{il(s.containerInfo)}catch(St){Xn(e,e.return,St)}Zf&&(Zf=!1,Pg(e));break;case 4:r=Fi,Fi=Au(e.stateNode.containerInfo),ni(s,e),si(e),Fi=r;break;case 12:ni(s,e),si(e);break;case 31:ni(s,e),si(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 13:ni(s,e),si(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(yu=ft()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 22:f=e.memoizedState!==null;var Z=o!==null&&o.memoizedState!==null,ye=va,Re=so;if(va=ye||f,so=Re||Z,ni(s,e),so=Re,va=ye,si(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||Z||va||so||br(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){Z=o=s;try{if(m=Z.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=Z.stateNode;var Pe=Z.memoizedProps.style,ve=Pe!=null&&Pe.hasOwnProperty("display")?Pe.display:null;A.style.display=ve==null||typeof ve=="boolean"?"":(""+ve).trim()}}catch(St){Xn(Z,Z.return,St)}}}else if(s.tag===6){if(o===null){Z=s;try{Z.stateNode.nodeValue=f?"":Z.memoizedProps}catch(St){Xn(Z,Z.return,St)}}}else if(s.tag===18){if(o===null){Z=s;try{var Ce=Z.stateNode;f?T0(Ce,!0):T0(Z.stateNode,!1)}catch(St){Xn(Z,Z.return,St)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,_u(e,o))));break;case 19:ni(s,e),si(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 30:break;case 21:break;default:ni(s,e),si(e)}}function si(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(Ng(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Kf(e);pu(e,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(vs(v,""),o.flags&=-33);var A=Kf(e);pu(e,A,v);break;case 3:case 4:var Z=o.stateNode.containerInfo,ye=Kf(e);Qf(e,ye,Z);break;default:throw Error(a(161))}}catch(Re){Xn(e,e.return,Re)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Pg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;Pg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function Sa(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Bg(e,s.alternate,s),s=s.sibling}function br(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:Ha(4,s,s.return),br(s);break;case 1:ia(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Tg(s,s.return,o),br(s);break;case 27:Ql(s.stateNode);case 26:case 5:ia(s,s.return),br(s);break;case 22:s.memoizedState===null&&br(s);break;case 30:br(s);break;default:br(s)}e=e.sibling}}function Ca(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:Ca(f,m,o),Hl(4,m);break;case 1:if(Ca(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ye){Xn(r,r.return,ye)}if(r=m,f=r.updateQueue,f!==null){var A=r.stateNode;try{var Z=f.shared.hiddenCallbacks;if(Z!==null)for(f.shared.hiddenCallbacks=null,f=0;f<Z.length;f++)g_(Z[f],A)}catch(ye){Xn(r,r.return,ye)}}o&&v&64&&Eg(m),Ul(m,m.return);break;case 27:Dg(m);case 26:case 5:Ca(f,m,o),o&&r===null&&v&4&&Ag(m),Ul(m,m.return);break;case 12:Ca(f,m,o);break;case 31:Ca(f,m,o),o&&v&4&&zg(f,m);break;case 13:Ca(f,m,o),o&&v&4&&$g(f,m);break;case 22:m.memoizedState===null&&Ca(f,m,o),Ul(m,m.return);break;case 30:break;default:Ca(f,m,o)}s=s.sibling}}function Jf(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&El(o))}function eh(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&El(e))}function Xi(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Hg(e,s,o,r),s=s.sibling}function Hg(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Xi(e,s,o,r),f&2048&&Hl(9,s);break;case 1:Xi(e,s,o,r);break;case 3:Xi(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&El(e)));break;case 12:if(f&2048){Xi(e,s,o,r),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,A=m.onPostCommit;typeof A=="function"&&A(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(Z){Xn(s,s.return,Z)}}else Xi(e,s,o,r);break;case 31:Xi(e,s,o,r);break;case 13:Xi(e,s,o,r);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?Xi(e,s,o,r):Vl(e,s):m._visibility&2?Xi(e,s,o,r):(m._visibility|=2,Gr(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Jf(v,s);break;case 24:Xi(e,s,o,r),f&2048&&eh(s.alternate,s);break;default:Xi(e,s,o,r)}}function Gr(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,A=o,Z=r,ye=v.flags;switch(v.tag){case 0:case 11:case 15:Gr(m,v,A,Z,f),Hl(8,v);break;case 23:break;case 22:var Re=v.stateNode;v.memoizedState!==null?Re._visibility&2?Gr(m,v,A,Z,f):Vl(m,v):(Re._visibility|=2,Gr(m,v,A,Z,f)),f&&ye&2048&&Jf(v.alternate,v);break;case 24:Gr(m,v,A,Z,f),f&&ye&2048&&eh(v.alternate,v);break;default:Gr(m,v,A,Z,f)}s=s.sibling}}function Vl(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:Vl(o,r),f&2048&&Jf(r.alternate,r);break;case 24:Vl(o,r),f&2048&&eh(r.alternate,r);break;default:Vl(o,r)}s=s.sibling}}var Yl=8192;function qr(e,s,o){if(e.subtreeFlags&Yl)for(e=e.child;e!==null;)Ug(e,s,o),e=e.sibling}function Ug(e,s,o){switch(e.tag){case 26:qr(e,s,o),e.flags&Yl&&e.memoizedState!==null&&Sv(o,Fi,e.memoizedState,e.memoizedProps);break;case 5:qr(e,s,o);break;case 3:case 4:var r=Fi;Fi=Au(e.stateNode.containerInfo),qr(e,s,o),Fi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Yl,Yl=16777216,qr(e,s,o),Yl=r):qr(e,s,o));break;default:qr(e,s,o)}}function Vg(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Wl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];vo=r,Wg(r,e)}Vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yg(e),e=e.sibling}function Yg(e){switch(e.tag){case 0:case 11:case 15:Wl(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:Wl(e);break;case 12:Wl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,gu(e)):Wl(e);break;default:Wl(e)}}function gu(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];vo=r,Wg(r,e)}Vg(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:Ha(8,s,s.return),gu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,gu(s));break;default:gu(s)}e=e.sibling}}function Wg(e,s){for(;vo!==null;){var o=vo;switch(o.tag){case 0:case 11:case 15:Ha(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:El(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,vo=r;else e:for(o=e;vo!==null;){r=vo;var f=r.sibling,m=r.return;if(Lg(r),r===o){vo=null;break e}if(f!==null){f.return=m,vo=f;break e}vo=m}}}var $2={getCacheForType:function(e){var s=Mo(eo),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return Mo(eo).controller.signal}},I2=typeof WeakMap=="function"?WeakMap:Map,Pn=0,ls=null,hn=null,yn=0,Fn=0,pi=null,Ua=!1,Kr=!1,th=!1,ka=0,Bs=0,Va=0,vr=0,nh=0,_i=0,Qr=0,Fl=null,oi=null,sh=!1,yu=0,Fg=0,xu=1/0,bu=null,Ya=null,po=0,Wa=null,Zr=null,ja=0,oh=0,ih=null,Xg=null,Xl=0,ah=null;function gi(){return(Pn&2)!==0&&yn!==0?yn&-yn:P.T!==null?fh():bn()}function Gg(){if(_i===0)if((yn&536870912)===0||Cn){var e=ht;ht<<=1,(ht&3932160)===0&&(ht=262144),_i=e}else _i=536870912;return e=hi.current,e!==null&&(e.flags|=32),_i}function ii(e,s,o){(e===ls&&(Fn===2||Fn===9)||e.cancelPendingCommit!==null)&&(Jr(e,0),Fa(e,yn,_i,!1)),mt(e,o),((Pn&2)===0||e!==ls)&&(e===ls&&((Pn&2)===0&&(vr|=o),Bs===4&&Fa(e,yn,_i,!1)),aa(e))}function qg(e,s,o){if((Pn&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||Mt(e,s),f=r?U2(e,s):lh(e,s,!0),m=r;do{if(f===0){Kr&&!r&&Fa(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!P2(o)){f=lh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var A=e;f=Fl;var Z=A.current.memoizedState.isDehydrated;if(Z&&(Jr(A,v).flags|=256),v=lh(A,v,!1),v!==2){if(th&&!Z){A.errorRecoveryDisabledLanes|=m,vr|=m,f=4;break e}m=oi,oi=f,m!==null&&(oi===null?oi=m:oi.push.apply(oi,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){Jr(e,0),Fa(e,s,0,!0);break}e:{switch(r=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Fa(r,s,_i,!Ua);break e;case 2:oi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=yu+300-ft(),10<f)){if(Fa(r,s,_i,!Ua),at(r,0,!0)!==0)break e;ja=s,r.timeoutHandle=j0(Kg.bind(null,r,o,oi,bu,sh,s,_i,vr,Qr,Ua,m,"Throttled",-0,0),f);break e}Kg(r,o,oi,bu,sh,s,_i,vr,Qr,Ua,m,null,-0,0)}}break}while(!0);aa(e)}function Kg(e,s,o,r,f,m,v,A,Z,ye,Re,Pe,ve,Ce){if(e.timeoutHandle=-1,Pe=s.subtreeFlags,Pe&8192||(Pe&16785408)===16785408){Pe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ns},Ug(s,m,Pe);var St=(m&62914560)===m?yu-ft():(m&4194048)===m?Fg-ft():0;if(St=Cv(Pe,St),St!==null){ja=m,e.cancelPendingCommit=St(o0.bind(null,e,s,m,o,r,f,v,A,Z,Re,Pe,null,ve,Ce)),Fa(e,m,v,!ye);return}}o0(e,s,m,o,r,f,v,A,Z)}function P2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!ut(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Fa(e,s,o,r){s&=~nh,s&=~vr,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var m=31-Ie(f),v=1<<m;r[m]=-1,f&=~v}o!==0&&on(e,o,s)}function vu(){return(Pn&6)===0?(Gl(0),!1):!0}function rh(){if(hn!==null){if(Fn===0)var e=hn.return;else e=hn,pa=fr=null,Sf(e),Vr=null,Al=0,e=hn;for(;e!==null;)Mg(e.alternate,e),e=e.return;hn=null}}function Jr(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,av(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),ja=0,rh(),ls=e,hn=o=ha(e.current,null),yn=s,Fn=0,pi=null,Ua=!1,Kr=Mt(e,s),th=!1,Qr=_i=nh=vr=Va=Bs=0,oi=Fl=null,sh=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-Ie(r),m=1<<f;s|=e[f],r&=~m}return ka=s,Uc(),o}function Qg(e,s){tn=null,P.H=$l,s===Ur||s===Kc?(s=h_(),Fn=3):s===df?(s=h_(),Fn=4):Fn=s===If?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,pi=s,hn===null&&(Bs=1,uu(e,Ei(s,e.current)))}function Zg(){var e=hi.current;return e===null?!0:(yn&4194048)===yn?Di===null:(yn&62914560)===yn||(yn&536870912)!==0?e===Di:!1}function Jg(){var e=P.H;return P.H=$l,e===null?$l:e}function e0(){var e=P.A;return P.A=$2,e}function wu(){Bs=4,Ua||(yn&4194048)!==yn&&hi.current!==null||(Kr=!0),(Va&134217727)===0&&(vr&134217727)===0||ls===null||Fa(ls,yn,_i,!1)}function lh(e,s,o){var r=Pn;Pn|=2;var f=Jg(),m=e0();(ls!==e||yn!==s)&&(bu=null,Jr(e,s)),s=!1;var v=Bs;e:do try{if(Fn!==0&&hn!==null){var A=hn,Z=pi;switch(Fn){case 8:rh(),v=6;break e;case 3:case 2:case 9:case 6:hi.current===null&&(s=!0);var ye=Fn;if(Fn=0,pi=null,el(e,A,Z,ye),o&&Kr){v=0;break e}break;default:ye=Fn,Fn=0,pi=null,el(e,A,Z,ye)}}H2(),v=Bs;break}catch(Re){Qg(e,Re)}while(!0);return s&&e.shellSuspendCounter++,pa=fr=null,Pn=r,P.H=f,P.A=m,hn===null&&(ls=null,yn=0,Uc()),v}function H2(){for(;hn!==null;)t0(hn)}function U2(e,s){var o=Pn;Pn|=2;var r=Jg(),f=e0();ls!==e||yn!==s?(bu=null,xu=ft()+500,Jr(e,s)):Kr=Mt(e,s);e:do try{if(Fn!==0&&hn!==null){s=hn;var m=pi;t:switch(Fn){case 1:Fn=0,pi=null,el(e,s,m,1);break;case 2:case 9:if(d_(m)){Fn=0,pi=null,n0(s);break}s=function(){Fn!==2&&Fn!==9||ls!==e||(Fn=7),aa(e)},m.then(s,s);break e;case 3:Fn=7;break e;case 4:Fn=5;break e;case 7:d_(m)?(Fn=0,pi=null,n0(s)):(Fn=0,pi=null,el(e,s,m,7));break;case 5:var v=null;switch(hn.tag){case 26:v=hn.memoizedState;case 5:case 27:var A=hn;if(v?H0(v):A.stateNode.complete){Fn=0,pi=null;var Z=A.sibling;if(Z!==null)hn=Z;else{var ye=A.return;ye!==null?(hn=ye,Su(ye)):hn=null}break t}}Fn=0,pi=null,el(e,s,m,5);break;case 6:Fn=0,pi=null,el(e,s,m,6);break;case 8:rh(),Bs=6;break e;default:throw Error(a(462))}}V2();break}catch(Re){Qg(e,Re)}while(!0);return pa=fr=null,P.H=r,P.A=f,Pn=o,hn!==null?0:(ls=null,yn=0,Uc(),Bs)}function V2(){for(;hn!==null&&!Qe();)t0(hn)}function t0(e){var s=kg(e.alternate,e,ka);e.memoizedProps=e.pendingProps,s===null?Su(e):hn=s}function n0(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=xg(o,s,s.pendingProps,s.type,void 0,yn);break;case 11:s=xg(o,s,s.pendingProps,s.type.render,s.ref,yn);break;case 5:Sf(s);default:Mg(o,s),s=hn=e_(s,ka),s=kg(o,s,ka)}e.memoizedProps=e.pendingProps,s===null?Su(e):hn=s}function el(e,s,o,r){pa=fr=null,Sf(s),Vr=null,Al=0;var f=s.return;try{if(N2(e,f,s,o,yn)){Bs=1,uu(e,Ei(o,e.current)),hn=null;return}}catch(m){if(f!==null)throw hn=f,m;Bs=1,uu(e,Ei(o,e.current)),hn=null;return}s.flags&32768?(Cn||r===1?e=!0:Kr||(yn&536870912)!==0?e=!1:(Ua=e=!0,(r===2||r===9||r===3||r===6)&&(r=hi.current,r!==null&&r.tag===13&&(r.flags|=16384))),s0(s,e)):Su(s)}function Su(e){var s=e;do{if((s.flags&32768)!==0){s0(s,Ua);return}e=s.return;var o=B2(s.alternate,s,ka);if(o!==null){hn=o;return}if(s=s.sibling,s!==null){hn=s;return}hn=s=e}while(s!==null);Bs===0&&(Bs=5)}function s0(e,s){do{var o=L2(e.alternate,e);if(o!==null){o.flags&=32767,hn=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){hn=e;return}hn=e=o}while(e!==null);Bs=6,hn=null}function o0(e,s,o,r,f,m,v,A,Z){e.cancelPendingCommit=null;do Cu();while(po!==0);if((Pn&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=qd,Lt(e,o,m,v,A,Z),e===ls&&(hn=ls=null,yn=0),Zr=s,Wa=e,ja=o,oh=m,ih=f,Xg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,X2(it,function(){return c0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,f=ae.p,ae.p=2,v=Pn,Pn|=4;try{O2(e,s,o)}finally{Pn=v,ae.p=f,P.T=r}}po=1,i0(),a0(),r0()}}function i0(){if(po===1){po=0;var e=Wa,s=Zr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=P.T,P.T=null;var r=ae.p;ae.p=2;var f=Pn;Pn|=4;try{Ig(s,e);var m=bh,v=rn(e.containerInfo),A=m.focusedElem,Z=m.selectionRange;if(v!==A&&A&&A.ownerDocument&&$n(A.ownerDocument.documentElement,A)){if(Z!==null&&Ot(A)){var ye=Z.start,Re=Z.end;if(Re===void 0&&(Re=ye),"selectionStart"in A)A.selectionStart=ye,A.selectionEnd=Math.min(Re,A.value.length);else{var Pe=A.ownerDocument||document,ve=Pe&&Pe.defaultView||window;if(ve.getSelection){var Ce=ve.getSelection(),St=A.textContent.length,Ft=Math.min(Z.start,St),es=Z.end===void 0?Ft:Math.min(Z.end,St);!Ce.extend&&Ft>es&&(v=es,es=Ft,Ft=v);var de=zn(A,Ft),ie=zn(A,es);if(de&&ie&&(Ce.rangeCount!==1||Ce.anchorNode!==de.node||Ce.anchorOffset!==de.offset||Ce.focusNode!==ie.node||Ce.focusOffset!==ie.offset)){var ge=Pe.createRange();ge.setStart(de.node,de.offset),Ce.removeAllRanges(),Ft>es?(Ce.addRange(ge),Ce.extend(ie.node,ie.offset)):(ge.setEnd(ie.node,ie.offset),Ce.addRange(ge))}}}}for(Pe=[],Ce=A;Ce=Ce.parentNode;)Ce.nodeType===1&&Pe.push({element:Ce,left:Ce.scrollLeft,top:Ce.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Pe.length;A++){var $e=Pe[A];$e.element.scrollLeft=$e.left,$e.element.scrollTop=$e.top}}Ou=!!xh,bh=xh=null}finally{Pn=f,ae.p=r,P.T=o}}e.current=s,po=2}}function a0(){if(po===2){po=0;var e=Wa,s=Zr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=P.T,P.T=null;var r=ae.p;ae.p=2;var f=Pn;Pn|=4;try{Bg(e,s.alternate,s)}finally{Pn=f,ae.p=r,P.T=o}}po=3}}function r0(){if(po===4||po===3){po=0,ct();var e=Wa,s=Zr,o=ja,r=Xg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?po=5:(po=0,Zr=Wa=null,l0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ya=null),Bn(o),s=s.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Me,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=P.T,f=ae.p,ae.p=2,P.T=null;try{for(var m=e.onRecoverableError,v=0;v<r.length;v++){var A=r[v];m(A.value,{componentStack:A.stack})}}finally{P.T=s,ae.p=f}}(ja&3)!==0&&Cu(),aa(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===ah?Xl++:(Xl=0,ah=e):Xl=0,Gl(0)}}function l0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,El(s)))}function Cu(){return i0(),a0(),r0(),c0()}function c0(){if(po!==5)return!1;var e=Wa,s=oh;oh=0;var o=Bn(ja),r=P.T,f=ae.p;try{ae.p=32>o?32:o,P.T=null,o=ih,ih=null;var m=Wa,v=ja;if(po=0,Zr=Wa=null,ja=0,(Pn&6)!==0)throw Error(a(331));var A=Pn;if(Pn|=4,Yg(m.current),Hg(m,m.current,v,o),Pn=A,Gl(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Me,m)}catch{}return!0}finally{ae.p=f,P.T=r,l0(e,s)}}function u0(e,s,o){s=Ei(o,s),s=$f(e.stateNode,s,2),e=$a(e,s,2),e!==null&&(mt(e,2),aa(e))}function Xn(e,s,o){if(e.tag===3)u0(e,e,o);else for(;s!==null;){if(s.tag===3){u0(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ya===null||!Ya.has(r))){e=Ei(o,e),o=dg(2),r=$a(s,o,2),r!==null&&(fg(o,r,s,e),mt(r,2),aa(r));break}}s=s.return}}function ch(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new I2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(th=!0,f.add(o),e=Y2.bind(null,e,s,o),s.then(e,e))}function Y2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,ls===e&&(yn&o)===o&&(Bs===4||Bs===3&&(yn&62914560)===yn&&300>ft()-yu?(Pn&2)===0&&Jr(e,0):nh|=o,Qr===yn&&(Qr=0)),aa(e)}function d0(e,s){s===0&&(s=lt()),e=cr(e,s),e!==null&&(mt(e,s),aa(e))}function W2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),d0(e,o)}function F2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),d0(e,o)}function X2(e,s){return nt(e,s)}var ku=null,tl=null,uh=!1,ju=!1,dh=!1,Xa=0;function aa(e){e!==tl&&e.next===null&&(tl===null?ku=tl=e:tl=tl.next=e),ju=!0,uh||(uh=!0,q2())}function Gl(e,s){if(!dh&&ju){dh=!0;do for(var o=!1,r=ku;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var v=r.suspendedLanes,A=r.pingedLanes;m=(1<<31-Ie(42|e)+1)-1,m&=f&~(v&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,p0(r,m))}else m=yn,m=at(r,r===ls?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||Mt(r,m)||(o=!0,p0(r,m));r=r.next}while(o);dh=!1}}function G2(){f0()}function f0(){ju=uh=!1;var e=0;Xa!==0&&iv()&&(e=Xa);for(var s=ft(),o=null,r=ku;r!==null;){var f=r.next,m=h0(r,s);m===0?(r.next=null,o===null?ku=f:o.next=f,f===null&&(tl=o)):(o=r,(e!==0||(m&3)!==0)&&(ju=!0)),r=f}po!==0&&po!==5||Gl(e),Xa!==0&&(Xa=0)}function h0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-Ie(m),A=1<<v,Z=f[v];Z===-1?((A&o)===0||(A&r)!==0)&&(f[v]=Vt(A,s)):Z<=s&&(e.expiredLanes|=A),m&=~A}if(s=ls,o=yn,o=at(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&(Fn===2||Fn===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ze(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||Mt(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&Ze(r),Bn(o)){case 2:case 8:o=$t;break;case 32:o=it;break;case 268435456:o=oe;break;default:o=it}return r=m0.bind(null,e),o=nt(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&Ze(r),e.callbackPriority=2,e.callbackNode=null,2}function m0(e,s){if(po!==0&&po!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(Cu()&&e.callbackNode!==o)return null;var r=yn;return r=at(e,e===ls?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(qg(e,r,s),h0(e,ft()),e.callbackNode!=null&&e.callbackNode===o?m0.bind(null,e):null)}function p0(e,s){if(Cu())return null;qg(e,s,!0)}function q2(){rv(function(){(Pn&6)!==0?nt(bt,G2):f0()})}function fh(){if(Xa===0){var e=Pr;e===0&&(e=qe,qe<<=1,(qe&261888)===0&&(qe=256)),Xa=e}return Xa}function _0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vo(""+e)}function g0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function K2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=_0((f[En]||null).action),v=r.submitter;v&&(s=(s=v[En]||null)?_0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var A=new lo("action","action",null,r,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Xa!==0){var Z=v?g0(f,v):new FormData(f);Df(o,{pending:!0,data:Z,method:f.method,action:m},null,Z)}}else typeof m=="function"&&(A.preventDefault(),Z=v?g0(f,v):new FormData(f),Df(o,{pending:!0,data:Z,method:f.method,action:m},m,Z))},currentTarget:f}]})}}for(var hh=0;hh<Gd.length;hh++){var mh=Gd[hh],Q2=mh.toLowerCase(),Z2=mh[0].toUpperCase()+mh.slice(1);Wi(Q2,"on"+Z2)}Wi(Yi,"onAnimationEnd"),Wi(na,"onAnimationIteration"),Wi(Pc,"onAnimationStart"),Wi("dblclick","onDoubleClick"),Wi("focusin","onFocus"),Wi("focusout","onBlur"),Wi(Wd,"onTransitionRun"),Wi(Fd,"onTransitionStart"),Wi(Xd,"onTransitionCancel"),Wi(Qp,"onTransitionEnd"),Yn("onMouseEnter",["mouseout","mouseover"]),Yn("onMouseLeave",["mouseout","mouseover"]),Yn("onPointerEnter",["pointerout","pointerover"]),Yn("onPointerLeave",["pointerout","pointerover"]),vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),vn("onBeforeInput",["compositionend","keypress","textInput","paste"]),vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function y0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var v=r.length-1;0<=v;v--){var A=r[v],Z=A.instance,ye=A.currentTarget;if(A=A.listener,Z!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=ye;try{m(f)}catch(Re){Hc(Re)}f.currentTarget=null,m=Z}else for(v=0;v<r.length;v++){if(A=r[v],Z=A.instance,ye=A.currentTarget,A=A.listener,Z!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=ye;try{m(f)}catch(Re){Hc(Re)}f.currentTarget=null,m=Z}}}}function mn(e,s){var o=s[Tt];o===void 0&&(o=s[Tt]=new Set);var r=e+"__bubble";o.has(r)||(x0(s,e,2,!1),o.add(r))}function ph(e,s,o){var r=0;s&&(r|=4),x0(o,e,r,s)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function _h(e){if(!e[Mu]){e[Mu]=!0,Zo.forEach(function(o){o!=="selectionchange"&&(J2.has(o)||ph(o,!1,e),ph(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Mu]||(s[Mu]=!0,ph("selectionchange",!1,s))}}function x0(e,s,o,r){switch(G0(s)){case 2:var f=Mv;break;case 8:f=Ev;break;default:f=Nh}o=f.bind(null,s,o,e),f=void 0,!Is||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function gh(e,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var A=r.stateNode.containerInfo;if(A===f)break;if(v===4)for(v=r.return;v!==null;){var Z=v.tag;if((Z===3||Z===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;A!==null;){if(v=os(A),v===null)return;if(Z=v.tag,Z===5||Z===6||Z===26||Z===27){r=m=v;continue e}A=A.parentNode}}r=r.return}qs(function(){var ye=m,Re=$s(o),Pe=[];e:{var ve=Zp.get(e);if(ve!==void 0){var Ce=lo,St=e;switch(e){case"keypress":if(yo(o)===0)break e;case"keydown":case"keyup":Ce=di;break;case"focusin":St="focus",Ce=zo;break;case"focusout":St="blur",Ce=zo;break;case"beforeblur":case"afterblur":Ce=zo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ce=Lo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ce=uo;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ce=ke;break;case Yi:case na:case Pc:Ce=ta;break;case Qp:Ce=Fe;break;case"scroll":case"scrollend":Ce=Es;break;case"wheel":Ce=It;break;case"copy":case"cut":case"paste":Ce=Pi;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ce=U;break;case"toggle":case"beforetoggle":Ce=qt}var Ft=(s&4)!==0,es=!Ft&&(e==="scroll"||e==="scrollend"),de=Ft?ve!==null?ve+"Capture":null:ve;Ft=[];for(var ie=ye,ge;ie!==null;){var $e=ie;if(ge=$e.stateNode,$e=$e.tag,$e!==5&&$e!==26&&$e!==27||ge===null||de===null||($e=an(ie,de),$e!=null&&Ft.push(Kl(ie,$e,ge))),es)break;ie=ie.return}0<Ft.length&&(ve=new Ce(ve,St,null,o,Re),Pe.push({event:ve,listeners:Ft}))}}if((s&7)===0){e:{if(ve=e==="mouseover"||e==="pointerover",Ce=e==="mouseout"||e==="pointerout",ve&&o!==ci&&(St=o.relatedTarget||o.fromElement)&&(os(St)||St[st]))break e;if((Ce||ve)&&(ve=Re.window===Re?Re:(ve=Re.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ce?(St=o.relatedTarget||o.toElement,Ce=ye,St=St?os(St):null,St!==null&&(es=u(St),Ft=St.tag,St!==es||Ft!==5&&Ft!==27&&Ft!==6)&&(St=null)):(Ce=null,St=ye),Ce!==St)){if(Ft=Lo,$e="onMouseLeave",de="onMouseEnter",ie="mouse",(e==="pointerout"||e==="pointerover")&&(Ft=U,$e="onPointerLeave",de="onPointerEnter",ie="pointer"),es=Ce==null?ve:wo(Ce),ge=St==null?ve:wo(St),ve=new Ft($e,ie+"leave",Ce,o,Re),ve.target=es,ve.relatedTarget=ge,$e=null,os(Re)===ye&&(Ft=new Ft(de,ie+"enter",St,o,Re),Ft.target=ge,Ft.relatedTarget=es,$e=Ft),es=$e,Ce&&St)t:{for(Ft=ev,de=Ce,ie=St,ge=0,$e=de;$e;$e=Ft($e))ge++;$e=0;for(var zt=ie;zt;zt=Ft(zt))$e++;for(;0<ge-$e;)de=Ft(de),ge--;for(;0<$e-ge;)ie=Ft(ie),$e--;for(;ge--;){if(de===ie||ie!==null&&de===ie.alternate){Ft=de;break t}de=Ft(de),ie=Ft(ie)}Ft=null}else Ft=null;Ce!==null&&b0(Pe,ve,Ce,Ft,!1),St!==null&&es!==null&&b0(Pe,es,St,Ft,!0)}}e:{if(ve=ye?wo(ye):window,Ce=ve.nodeName&&ve.nodeName.toLowerCase(),Ce==="select"||Ce==="input"&&ve.type==="file")var An=C;else if(B(ve))if(N)An=pt;else{An=Xe;var At=Le}else Ce=ve.nodeName,!Ce||Ce.toLowerCase()!=="input"||ve.type!=="checkbox"&&ve.type!=="radio"?ye&&As(ye.elementType)&&(An=C):An=Je;if(An&&(An=An(e,ye))){X(Pe,An,o,Re);break e}At&&At(e,ve,ye),e==="focusout"&&ye&&ve.type==="number"&&ye.memoizedProps.value!=null&&go(ve,"number",ve.value)}switch(At=ye?wo(ye):window,e){case"focusin":(B(At)||At.contentEditable==="true")&&(Dt=At,In=ye,gn=null);break;case"focusout":gn=In=Dt=null;break;case"mousedown":mo=!0;break;case"contextmenu":case"mouseup":case"dragend":mo=!1,$o(Pe,o,Re);break;case"selectionchange":if(vt)break;case"keydown":case"keyup":$o(Pe,o,Re)}var sn;if(_n)e:{switch(e){case"compositionstart":var xn="onCompositionStart";break e;case"compositionend":xn="onCompositionEnd";break e;case"compositionupdate":xn="onCompositionUpdate";break e}xn=void 0}else Zs?gs(e,o)&&(xn="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(xn="onCompositionStart");xn&&(Wt&&o.locale!=="ko"&&(Zs||xn!=="onCompositionStart"?xn==="onCompositionEnd"&&Zs&&(sn=ko()):(Ms=Re,Bo="value"in Ms?Ms.value:Ms.textContent,Zs=!0)),At=Eu(ye,xn),0<At.length&&(xn=new Nt(xn,e,null,o,Re),Pe.push({event:xn,listeners:At}),sn?xn.data=sn:(sn=fo(o),sn!==null&&(xn.data=sn)))),(sn=Ps?Hs(e,o):Js(e,o))&&(xn=Eu(ye,"onBeforeInput"),0<xn.length&&(At=new Nt("onBeforeInput","beforeinput",null,o,Re),Pe.push({event:At,listeners:xn}),At.data=sn)),K2(Pe,e,ye,o,Re)}y0(Pe,s)})}function Kl(e,s,o){return{instance:e,listener:s,currentTarget:o}}function Eu(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=an(e,o),f!=null&&r.unshift(Kl(e,f,m)),f=an(e,s),f!=null&&r.push(Kl(e,f,m))),e.tag===3)return r;e=e.return}return[]}function ev(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function b0(e,s,o,r,f){for(var m=s._reactName,v=[];o!==null&&o!==r;){var A=o,Z=A.alternate,ye=A.stateNode;if(A=A.tag,Z!==null&&Z===r)break;A!==5&&A!==26&&A!==27||ye===null||(Z=ye,f?(ye=an(o,m),ye!=null&&v.unshift(Kl(o,ye,Z))):f||(ye=an(o,m),ye!=null&&v.push(Kl(o,ye,Z)))),o=o.return}v.length!==0&&e.push({event:s,listeners:v})}var tv=/\r\n?/g,nv=/\u0000|\uFFFD/g;function v0(e){return(typeof e=="string"?e:""+e).replace(tv,`
`).replace(nv,"")}function w0(e,s){return s=v0(s),v0(e)===s}function Jn(e,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||vs(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&vs(e,""+r);break;case"className":wn(e,"class",r);break;case"tabIndex":wn(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":wn(e,o,r);break;case"style":ws(e,r,m);break;case"data":if(s!=="object"){wn(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Vo(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&Jn(e,s,"name",f.name,f,null),Jn(e,s,"formEncType",f.formEncType,f,null),Jn(e,s,"formMethod",f.formMethod,f,null),Jn(e,s,"formTarget",f.formTarget,f,null)):(Jn(e,s,"encType",f.encType,f,null),Jn(e,s,"method",f.method,f,null),Jn(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Vo(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=Ns);break;case"onScroll":r!=null&&mn("scroll",e);break;case"onScrollEnd":r!=null&&mn("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=Vo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":mn("beforetoggle",e),mn("toggle",e),Xs(e,"popover",r);break;case"xlinkActuate":pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":pn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":pn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":pn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":pn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Xs(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Ro.get(o)||o,Xs(e,o,r))}}function yh(e,s,o,r,f,m){switch(o){case"style":ws(e,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?vs(e,r):(typeof r=="number"||typeof r=="bigint")&&vs(e,""+r);break;case"onScroll":r!=null&&mn("scroll",e);break;case"onScrollEnd":r!=null&&mn("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Ns);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!js.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[En]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):Xs(e,o,r)}}}function To(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mn("error",e),mn("load",e);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Jn(e,s,m,v,o,null)}}f&&Jn(e,s,"srcSet",o.srcSet,o,null),r&&Jn(e,s,"src",o.src,o,null);return;case"input":mn("invalid",e);var A=m=v=f=null,Z=null,ye=null;for(r in o)if(o.hasOwnProperty(r)){var Re=o[r];if(Re!=null)switch(r){case"name":f=Re;break;case"type":v=Re;break;case"checked":Z=Re;break;case"defaultChecked":ye=Re;break;case"value":m=Re;break;case"defaultValue":A=Re;break;case"children":case"dangerouslySetInnerHTML":if(Re!=null)throw Error(a(137,s));break;default:Jn(e,s,r,Re,o,null)}}Mn(e,m,A,Z,ye,v,f,!1);return;case"select":mn("invalid",e),r=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":v=A;break;case"multiple":r=A;default:Jn(e,s,f,A,o,null)}s=m,o=v,e.multiple=!!r,s!=null?ms(e,!!r,s,!1):o!=null&&ms(e,!!r,o,!0);return;case"textarea":mn("invalid",e),m=f=r=null;for(v in o)if(o.hasOwnProperty(v)&&(A=o[v],A!=null))switch(v){case"value":r=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Jn(e,s,v,A,o,null)}bi(e,r,f,m);return;case"option":for(Z in o)if(o.hasOwnProperty(Z)&&(r=o[Z],r!=null))switch(Z){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Jn(e,s,Z,r,o,null)}return;case"dialog":mn("beforetoggle",e),mn("toggle",e),mn("cancel",e),mn("close",e);break;case"iframe":case"object":mn("load",e);break;case"video":case"audio":for(r=0;r<ql.length;r++)mn(ql[r],e);break;case"image":mn("error",e),mn("load",e);break;case"details":mn("toggle",e);break;case"embed":case"source":case"link":mn("error",e),mn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ye in o)if(o.hasOwnProperty(ye)&&(r=o[ye],r!=null))switch(ye){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Jn(e,s,ye,r,o,null)}return;default:if(As(s)){for(Re in o)o.hasOwnProperty(Re)&&(r=o[Re],r!==void 0&&yh(e,s,Re,r,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(r=o[A],r!=null&&Jn(e,s,A,r,o,null))}function sv(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,A=null,Z=null,ye=null,Re=null;for(Ce in o){var Pe=o[Ce];if(o.hasOwnProperty(Ce)&&Pe!=null)switch(Ce){case"checked":break;case"value":break;case"defaultValue":Z=Pe;default:r.hasOwnProperty(Ce)||Jn(e,s,Ce,null,r,Pe)}}for(var ve in r){var Ce=r[ve];if(Pe=o[ve],r.hasOwnProperty(ve)&&(Ce!=null||Pe!=null))switch(ve){case"type":m=Ce;break;case"name":f=Ce;break;case"checked":ye=Ce;break;case"defaultChecked":Re=Ce;break;case"value":v=Ce;break;case"defaultValue":A=Ce;break;case"children":case"dangerouslySetInnerHTML":if(Ce!=null)throw Error(a(137,s));break;default:Ce!==Pe&&Jn(e,s,ve,Ce,r,Pe)}}So(e,v,A,Z,ye,Re,m,f);return;case"select":Ce=v=A=ve=null;for(m in o)if(Z=o[m],o.hasOwnProperty(m)&&Z!=null)switch(m){case"value":break;case"multiple":Ce=Z;default:r.hasOwnProperty(m)||Jn(e,s,m,null,r,Z)}for(f in r)if(m=r[f],Z=o[f],r.hasOwnProperty(f)&&(m!=null||Z!=null))switch(f){case"value":ve=m;break;case"defaultValue":A=m;break;case"multiple":v=m;default:m!==Z&&Jn(e,s,f,m,r,Z)}s=A,o=v,r=Ce,ve!=null?ms(e,!!o,ve,!1):!!r!=!!o&&(s!=null?ms(e,!!o,s,!0):ms(e,!!o,o?[]:"",!1));return;case"textarea":Ce=ve=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Jn(e,s,A,null,r,f)}for(v in r)if(f=r[v],m=o[v],r.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":ve=f;break;case"defaultValue":Ce=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Jn(e,s,v,f,r,m)}Kn(e,ve,Ce);return;case"option":for(var St in o)if(ve=o[St],o.hasOwnProperty(St)&&ve!=null&&!r.hasOwnProperty(St))switch(St){case"selected":e.selected=!1;break;default:Jn(e,s,St,null,r,ve)}for(Z in r)if(ve=r[Z],Ce=o[Z],r.hasOwnProperty(Z)&&ve!==Ce&&(ve!=null||Ce!=null))switch(Z){case"selected":e.selected=ve&&typeof ve!="function"&&typeof ve!="symbol";break;default:Jn(e,s,Z,ve,r,Ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ft in o)ve=o[Ft],o.hasOwnProperty(Ft)&&ve!=null&&!r.hasOwnProperty(Ft)&&Jn(e,s,Ft,null,r,ve);for(ye in r)if(ve=r[ye],Ce=o[ye],r.hasOwnProperty(ye)&&ve!==Ce&&(ve!=null||Ce!=null))switch(ye){case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,s));break;default:Jn(e,s,ye,ve,r,Ce)}return;default:if(As(s)){for(var es in o)ve=o[es],o.hasOwnProperty(es)&&ve!==void 0&&!r.hasOwnProperty(es)&&yh(e,s,es,void 0,r,ve);for(Re in r)ve=r[Re],Ce=o[Re],!r.hasOwnProperty(Re)||ve===Ce||ve===void 0&&Ce===void 0||yh(e,s,Re,ve,r,Ce);return}}for(var de in o)ve=o[de],o.hasOwnProperty(de)&&ve!=null&&!r.hasOwnProperty(de)&&Jn(e,s,de,null,r,ve);for(Pe in r)ve=r[Pe],Ce=o[Pe],!r.hasOwnProperty(Pe)||ve===Ce||ve==null&&Ce==null||Jn(e,s,Pe,ve,r,Ce)}function S0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ov(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,v=f.initiatorType,A=f.duration;if(m&&A&&S0(v)){for(v=0,A=f.responseEnd,r+=1;r<o.length;r++){var Z=o[r],ye=Z.startTime;if(ye>A)break;var Re=Z.transferSize,Pe=Z.initiatorType;Re&&S0(Pe)&&(Z=Z.responseEnd,v+=Re*(Z<A?1:(A-ye)/(Z-ye)))}if(--r,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xh=null,bh=null;function Tu(e){return e.nodeType===9?e:e.ownerDocument}function C0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function k0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function vh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var wh=null;function iv(){var e=window.event;return e&&e.type==="popstate"?e===wh?!1:(wh=e,!0):(wh=null,!1)}var j0=typeof setTimeout=="function"?setTimeout:void 0,av=typeof clearTimeout=="function"?clearTimeout:void 0,M0=typeof Promise=="function"?Promise:void 0,rv=typeof queueMicrotask=="function"?queueMicrotask:typeof M0<"u"?function(e){return M0.resolve(null).then(e).catch(lv)}:j0;function lv(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function E0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),il(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")Ql(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Ql(o);for(var m=o.firstChild;m;){var v=m.nextSibling,A=m.nodeName;m[ss]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&Ql(e.ownerDocument.body);o=f}while(o);il(s)}function T0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function Sh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Sh(o),Do(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function cv(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ss])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ri(e.nextSibling),e===null)break}return null}function uv(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Ri(e.nextSibling),e===null))return null;return e}function A0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ri(e.nextSibling),e===null))return null;return e}function Ch(e){return e.data==="$?"||e.data==="$~"}function kh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function dv(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ri(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var jh=null;function N0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return Ri(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function D0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function R0(e,s,o){switch(s=Tu(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ql(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);Do(e)}var Bi=new Map,B0=new Set;function Au(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ma=ae.d;ae.d={f:fv,r:hv,D:mv,C:pv,L:_v,m:gv,X:xv,S:yv,M:bv};function fv(){var e=Ma.f(),s=vu();return e||s}function hv(e){var s=Ws(e);s!==null&&s.tag===5&&s.type==="form"?Q_(s):Ma.r(e)}var nl=typeof document>"u"?null:document;function L0(e,s,o){var r=nl;if(r&&typeof s=="string"&&s){var f=bs(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),B0.has(f)||(B0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),To(s,"link",e),jn(s),r.head.appendChild(s)))}}function mv(e){Ma.D(e),L0("dns-prefetch",e,null)}function pv(e,s){Ma.C(e,s),L0("preconnect",e,s)}function _v(e,s,o){Ma.L(e,s,o);var r=nl;if(r&&e&&s){var f='link[rel="preload"][as="'+bs(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+bs(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+bs(o.imageSizes)+'"]')):f+='[href="'+bs(e)+'"]';var m=f;switch(s){case"style":m=sl(e);break;case"script":m=ol(e)}Bi.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),Bi.set(m,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(Zl(m))||s==="script"&&r.querySelector(Jl(m))||(s=r.createElement("link"),To(s,"link",e),jn(s),r.head.appendChild(s)))}}function gv(e,s){Ma.m(e,s);var o=nl;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+bs(r)+'"][href="'+bs(e)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ol(e)}if(!Bi.has(m)&&(e=x({rel:"modulepreload",href:e},s),Bi.set(m,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Jl(m)))return}r=o.createElement("link"),To(r,"link",e),jn(r),o.head.appendChild(r)}}}function yv(e,s,o){Ma.S(e,s,o);var r=nl;if(r&&e){var f=zs(r).hoistableStyles,m=sl(e);s=s||"default";var v=f.get(m);if(!v){var A={loading:0,preload:null};if(v=r.querySelector(Zl(m)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=Bi.get(m))&&Mh(e,o);var Z=v=r.createElement("link");jn(Z),To(Z,"link",e),Z._p=new Promise(function(ye,Re){Z.onload=ye,Z.onerror=Re}),Z.addEventListener("load",function(){A.loading|=1}),Z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Nu(v,s,r)}v={type:"stylesheet",instance:v,count:1,state:A},f.set(m,v)}}}function xv(e,s){Ma.X(e,s);var o=nl;if(o&&e){var r=zs(o).hoistableScripts,f=ol(e),m=r.get(f);m||(m=o.querySelector(Jl(f)),m||(e=x({src:e,async:!0},s),(s=Bi.get(f))&&Eh(e,s),m=o.createElement("script"),jn(m),To(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function bv(e,s){Ma.M(e,s);var o=nl;if(o&&e){var r=zs(o).hoistableScripts,f=ol(e),m=r.get(f);m||(m=o.querySelector(Jl(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=Bi.get(f))&&Eh(e,s),m=o.createElement("script"),jn(m),To(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function O0(e,s,o,r){var f=(f=Ne.current)?Au(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=sl(o.href),o=zs(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=sl(o.href);var m=zs(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(Zl(e)))&&!m._p&&(v.instance=m,v.state.loading=5),Bi.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Bi.set(e,o),m||vv(f,e,o,v.state))),s&&r===null)throw Error(a(528,""));return v}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=ol(o),o=zs(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function sl(e){return'href="'+bs(e)+'"'}function Zl(e){return'link[rel="stylesheet"]['+e+"]"}function z0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function vv(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),To(s,"link",o),jn(s),e.head.appendChild(s))}function ol(e){return'[src="'+bs(e)+'"]'}function Jl(e){return"script[async]"+e}function $0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+bs(o.href)+'"]');if(r)return s.instance=r,jn(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),jn(r),To(r,"style",f),Nu(r,o.precedence,e),s.instance=r;case"stylesheet":f=sl(o.href);var m=e.querySelector(Zl(f));if(m)return s.state.loading|=4,s.instance=m,jn(m),m;r=z0(o),(f=Bi.get(f))&&Mh(r,f),m=(e.ownerDocument||e).createElement("link"),jn(m);var v=m;return v._p=new Promise(function(A,Z){v.onload=A,v.onerror=Z}),To(m,"link",r),s.state.loading|=4,Nu(m,o.precedence,e),s.instance=m;case"script":return m=ol(o.src),(f=e.querySelector(Jl(m)))?(s.instance=f,jn(f),f):(r=o,(f=Bi.get(m))&&(r=x({},o),Eh(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),jn(f),To(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Nu(r,o.precedence,e));return s.instance}function Nu(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,v=0;v<r.length;v++){var A=r[v];if(A.dataset.precedence===s)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function Mh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Eh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Du=null;function I0(e,s,o){if(Du===null){var r=new Map,f=Du=new Map;f.set(o,r)}else f=Du,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[ss]||m[Xt]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var A=r.get(v);A?A.push(m):r.set(v,[m])}}return r}function P0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function wv(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function H0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Sv(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=sl(r.href),m=s.querySelector(Zl(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Ru.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,jn(m);return}m=s.ownerDocument||s,r=z0(r),(f=Bi.get(f))&&Mh(r,f),m=m.createElement("link"),jn(m);var v=m;v._p=new Promise(function(A,Z){v.onload=A,v.onerror=Z}),To(m,"link",r),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Ru.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Th=0;function Cv(e,s){return e.stylesheets&&e.count===0&&Lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Th===0&&(Th=62500*ov());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Th?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bu=null;function Lu(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bu=new Map,s.forEach(kv,e),Bu=null,Ru.call(e))}function kv(e,s){if(!(s.state.loading&4)){var o=Bu.get(e);if(o)var r=o.get(null);else{o=new Map,Bu.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),r=v)}r&&o.set(null,r)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||r,m===r&&o.set(null,f),o.set(v,f),this.count++,r=Ru.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var ec={$$typeof:O,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function jv(e,s,o,r,f,m,v,A,Z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=kt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kt(0),this.hiddenUpdates=kt(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Z,this.incompleteTransitions=new Map}function U0(e,s,o,r,f,m,v,A,Z,ye,Re,Pe){return e=new jv(e,s,o,v,Z,ye,Re,Pe,A),s=1,m===!0&&(s|=24),m=fi(3,null,null,s),e.current=m,m.stateNode=e,s=lf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},ff(m),e}function V0(e){return e?(e=Lr,e):Lr}function Y0(e,s,o,r,f,m){f=V0(f),r.context===null?r.context=f:r.pendingContext=f,r=za(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=$a(e,r,s),o!==null&&(ii(o,e,s),Dl(o,e,s))}function W0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Ah(e,s){W0(e,s),(e=e.alternate)&&W0(e,s)}function F0(e){if(e.tag===13||e.tag===31){var s=cr(e,67108864);s!==null&&ii(s,e,67108864),Ah(e,67108864)}}function X0(e){if(e.tag===13||e.tag===31){var s=gi();s=Rn(s);var o=cr(e,s);o!==null&&ii(o,e,s),Ah(e,s)}}var Ou=!0;function Mv(e,s,o,r){var f=P.T;P.T=null;var m=ae.p;try{ae.p=2,Nh(e,s,o,r)}finally{ae.p=m,P.T=f}}function Ev(e,s,o,r){var f=P.T;P.T=null;var m=ae.p;try{ae.p=8,Nh(e,s,o,r)}finally{ae.p=m,P.T=f}}function Nh(e,s,o,r){if(Ou){var f=Dh(r);if(f===null)gh(e,s,r,zu,o),q0(e,r);else if(Av(f,e,s,o,r))r.stopPropagation();else if(q0(e,r),s&4&&-1<Tv.indexOf(e)){for(;f!==null;){var m=Ws(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=Et(m.pendingLanes);if(v!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var Z=1<<31-Ie(v);A.entanglements[1]|=Z,v&=~Z}aa(m),(Pn&6)===0&&(xu=ft()+500,Gl(0))}}break;case 31:case 13:A=cr(m,2),A!==null&&ii(A,m,2),vu(),Ah(m,2)}if(m=Dh(r),m===null&&gh(e,s,r,zu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else gh(e,s,r,null,o)}}function Dh(e){return e=$s(e),Rh(e)}var zu=null;function Rh(e){if(zu=null,e=os(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return zu=e,null}function G0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case bt:return 2;case $t:return 8;case it:case H:return 32;case oe:return 268435456;default:return 32}default:return 32}}var Bh=!1,qa=null,Ka=null,Qa=null,tc=new Map,nc=new Map,Za=[],Tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q0(e,s){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":tc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":nc.delete(s.pointerId)}}function sc(e,s,o,r,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=Ws(s),s!==null&&F0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function Av(e,s,o,r,f){switch(s){case"focusin":return qa=sc(qa,e,s,o,r,f),!0;case"dragenter":return Ka=sc(Ka,e,s,o,r,f),!0;case"mouseover":return Qa=sc(Qa,e,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return tc.set(m,sc(tc.get(m)||null,e,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,nc.set(m,sc(nc.get(m)||null,e,s,o,r,f)),!0}return!1}function K0(e){var s=os(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,dn(e.priority,function(){X0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,dn(e.priority,function(){X0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $u(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Dh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);ci=r,o.target.dispatchEvent(r),ci=null}else return s=Ws(o),s!==null&&F0(s),e.blockedOn=o,!1;s.shift()}return!0}function Q0(e,s,o){$u(e)&&o.delete(s)}function Nv(){Bh=!1,qa!==null&&$u(qa)&&(qa=null),Ka!==null&&$u(Ka)&&(Ka=null),Qa!==null&&$u(Qa)&&(Qa=null),tc.forEach(Q0),nc.forEach(Q0)}function Iu(e,s){e.blockedOn===s&&(e.blockedOn=null,Bh||(Bh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Nv)))}var Pu=null;function Z0(e){Pu!==e&&(Pu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Pu===e&&(Pu=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if(Rh(r||o)===null)continue;break}var m=Ws(o);m!==null&&(e.splice(s,3),s-=3,Df(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function il(e){function s(Z){return Iu(Z,e)}qa!==null&&Iu(qa,e),Ka!==null&&Iu(Ka,e),Qa!==null&&Iu(Qa,e),tc.forEach(s),nc.forEach(s);for(var o=0;o<Za.length;o++){var r=Za[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Za.length&&(o=Za[0],o.blockedOn===null);)K0(o),o.blockedOn===null&&Za.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],v=f[En]||null;if(typeof m=="function")v||Z0(o);else if(v){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[En]||null)A=v.formAction;else if(Rh(f)!==null)continue}else A=v.action;typeof A=="function"?o[r+1]=A:(o.splice(r,3),r-=3),Z0(o)}}}function J0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Lh(e){this._internalRoot=e}Hu.prototype.render=Lh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=gi();Y0(o,r,e,s,null,null)},Hu.prototype.unmount=Lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;Y0(e.current,2,null,e,null,null),vu(),s[st]=null}};function Hu(e){this._internalRoot=e}Hu.prototype.unstable_scheduleHydration=function(e){if(e){var s=bn();e={blockedOn:null,target:e,priority:s};for(var o=0;o<Za.length&&s!==0&&s<Za[o].priority;o++);Za.splice(o,0,e),o===0&&K0(e)}};var ey=n.version;if(ey!=="19.2.4")throw Error(a(527,ey,"19.2.4"));ae.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=y(s),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Dv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{Me=Uu.inject(Dv),we=Uu}catch{}}return ic.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=rg,m=lg,v=cg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=U0(e,1,!1,null,null,o,r,null,f,m,v,J0),e[st]=s.current,_h(e),new Lh(s)},ic.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",m=rg,v=lg,A=cg,Z=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.formState!==void 0&&(Z=o.formState)),s=U0(e,1,!0,s,o!=null?o:null,r,f,Z,m,v,A,J0),s.context=V0(null),o=s.current,r=gi(),r=Rn(r),f=za(r),f.callback=null,$a(o,f,r),o=r,s.current.lanes=o,mt(s,o),aa(s),e[st]=s.current,_h(e),new Hu(s)},ic.version="19.2.4",ic}var uy;function Hv(){if(uy)return zh.exports;uy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),zh.exports=Pv(),zh.exports}var Uv=Hv();const Vv=$x(Uv);var _=up();const Yv=$x(_);function Wv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Fv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var hd;const $i="__TAURI_TO_IPC_KEY__";function Xv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function je(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Gv{get rid(){return Wv(this,hd,"f")}constructor(n){hd.set(this,void 0),Fv(this,hd,n)}async close(){return je("plugin:resources|close",{rid:this.rid})}}hd=new WeakMap;var yi;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(yi||(yi={}));async function Px(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await je("plugin:event|unlisten",{event:t,eventId:n})}async function yc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return je("plugin:event|listen",{event:t,target:c,handler:Xv(n)}).then(u=>async()=>Px(t,u))}async function qv(t,n,i){return yc(t,a=>{Px(t,a.id),n(a)},i)}async function Kv(t,n){await je("plugin:event|emit",{event:t,payload:n})}async function Qv(t,n,i){await je("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class Hx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new xc(this.width*n,this.height*n)}[$i](){return{width:this.width,height:this.height}}toJSON(){return this[$i]()}}class xc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Hx(this.width/n,this.height/n)}[$i](){return{width:this.width,height:this.height}}toJSON(){return this[$i]()}}class al{constructor(n){this.size=n}toLogical(n){return this.size instanceof Hx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof xc?this.size:this.size.toPhysical(n)}[$i](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[$i]()}}class Ux{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new or(this.x*n,this.y*n)}[$i](){return{x:this.x,y:this.y}}toJSON(){return this[$i]()}}class or{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Ux(this.x/n,this.y/n)}[$i](){return{x:this.x,y:this.y}}toJSON(){return this[$i]()}}class Vu{constructor(n){this.position=n}toLogical(n){return this.position instanceof Ux?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof or?this.position:this.position.toPhysical(n)}[$i](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[$i]()}}class bc extends Gv{constructor(n){super(n)}static async new(n,i,a){return je("plugin:image|new",{rgba:Cd(n),width:i,height:a}).then(c=>new bc(c))}static async fromBytes(n){return je("plugin:image|from_bytes",{bytes:Cd(n)}).then(i=>new bc(i))}static async fromPath(n){return je("plugin:image|from_path",{path:n}).then(i=>new bc(i))}async rgba(){return je("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return je("plugin:image|size",{rid:this.rid})}}function Cd(t){return t==null?null:typeof t=="string"?t:t instanceof bc?t.rid:t}var Em;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(Em||(Em={}));class Zv{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var dy;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(dy||(dy={}));function dp(){return new Vx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Uh(){return je("plugin:window|get_all_windows").then(t=>t.map(n=>new Vx(n,{skip:!0})))}const Vh=["tauri://created","tauri://error"];class Vx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||je("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Uh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return dp()}static async getAll(){return Uh()}static async getFocusedWindow(){for(const n of await Uh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:yc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:qv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Vh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Kv(n,i)}async emitTo(n,i,a){if(Vh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return Qv(n,i,a)}_handleTauriEvent(n,i){return Vh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return je("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return je("plugin:window|inner_position",{label:this.label}).then(n=>new or(n))}async outerPosition(){return je("plugin:window|outer_position",{label:this.label}).then(n=>new or(n))}async innerSize(){return je("plugin:window|inner_size",{label:this.label}).then(n=>new xc(n))}async outerSize(){return je("plugin:window|outer_size",{label:this.label}).then(n=>new xc(n))}async isFullscreen(){return je("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return je("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return je("plugin:window|is_maximized",{label:this.label})}async isFocused(){return je("plugin:window|is_focused",{label:this.label})}async isDecorated(){return je("plugin:window|is_decorated",{label:this.label})}async isResizable(){return je("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return je("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return je("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return je("plugin:window|is_closable",{label:this.label})}async isVisible(){return je("plugin:window|is_visible",{label:this.label})}async title(){return je("plugin:window|title",{label:this.label})}async theme(){return je("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return je("plugin:window|is_always_on_top",{label:this.label})}async center(){return je("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===Em.Critical?i={type:"Critical"}:i={type:"Informational"}),je("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return je("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return je("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return je("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return je("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return je("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return je("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return je("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return je("plugin:window|maximize",{label:this.label})}async unmaximize(){return je("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return je("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return je("plugin:window|minimize",{label:this.label})}async unminimize(){return je("plugin:window|unminimize",{label:this.label})}async show(){return je("plugin:window|show",{label:this.label})}async hide(){return je("plugin:window|hide",{label:this.label})}async close(){return je("plugin:window|close",{label:this.label})}async destroy(){return je("plugin:window|destroy",{label:this.label})}async setDecorations(n){return je("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return je("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return je("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return je("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return je("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return je("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return je("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return je("plugin:window|set_size",{label:this.label,value:n instanceof al?n:new al(n)})}async setMinSize(n){return je("plugin:window|set_min_size",{label:this.label,value:n instanceof al?n:n?new al(n):null})}async setMaxSize(n){return je("plugin:window|set_max_size",{label:this.label,value:n instanceof al?n:n?new al(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return je("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return je("plugin:window|set_position",{label:this.label,value:n instanceof Vu?n:new Vu(n)})}async setFullscreen(n){return je("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return je("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return je("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return je("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return je("plugin:window|set_icon",{label:this.label,value:Cd(n)})}async setSkipTaskbar(n){return je("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return je("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return je("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return je("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return je("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return je("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Vu?n:new Vu(n)})}async setIgnoreCursorEvents(n){return je("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return je("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return je("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return je("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return je("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return je("plugin:window|set_overlay_icon",{label:this.label,value:n?Cd(n):void 0})}async setProgressBar(n){return je("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return je("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return je("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return je("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(yi.WINDOW_RESIZED,i=>{i.payload=new xc(i.payload),n(i)})}async onMoved(n){return this.listen(yi.WINDOW_MOVED,i=>{i.payload=new or(i.payload),n(i)})}async onCloseRequested(n){return this.listen(yi.WINDOW_CLOSE_REQUESTED,async i=>{const a=new Zv(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(yi.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new or(d.payload.position)}})}),a=await this.listen(yi.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new or(d.payload.position)}})}),c=await this.listen(yi.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new or(d.payload.position)}})}),u=await this.listen(yi.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(yi.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(yi.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(yi.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(yi.WINDOW_THEME_CHANGED,n)}}var fy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(fy||(fy={}));var hy;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(hy||(hy={}));var my;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(my||(my={}));var py;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(py||(py={}));async function Jv(t={}){return typeof t=="object"&&Object.freeze(t),await je("plugin:dialog|open",{options:t})}/**
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
 */const _y=t=>{const n=tw(t);return n.charAt(0).toUpperCase()+n.slice(1)};/**
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
 */const ea=(t,n)=>{const i=_.forwardRef(({className:a,...c},u)=>_.createElement(ow,{ref:u,iconNode:n,className:Yx(`lucide-${ew(_y(t))}`,`lucide-${t}`,a),...c}));return i.displayName=_y(t),i};/**
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
 */const Sw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Cw=ea("search",Sw),kw=3.7,Yu=200,Tm=240,ds=540,Ls=176,Yh=32,vl=20,jw=Tm/2,rl=ds+jw,Ea=18,Ta=18,Wh="#E6E6E6";function gy(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function Mr(t,n){var a,c,u;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,parentShas:"parentShas"in n?(a=n.parentShas)!=null?a:[]:n.parentSha?[n.parentSha]:[],childShas:"childShas"in n?(c=n.childShas)!=null?c:[]:[],clusterKey:"clusterKey"in n&&(u=n.clusterKey)!=null?u:null,kind:n.kind}}function Aa(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function _c(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:Aa(t).localeCompare(Aa(n))}function Xx(t){return[...t].sort(_c)}function Mw(t){var h,p,y,g,x,b;if(t.length<=1)return[...t];const n=new Map(t.map(S=>[Aa(S),S])),i=new Map,a=new Map;t.forEach(S=>i.set(Aa(S),0));for(const S of t){const k=((h=S.parentShas)!=null?h:[]).length>0?(p=S.parentShas)!=null?p:[]:S.parentSha?[S.parentSha]:[];for(const j of k){if(!j||!n.has(j))continue;const E=Aa(S);i.set(E,((y=i.get(E))!=null?y:0)+1);const T=(g=a.get(j))!=null?g:[];T.push(S),a.set(j,T)}}for(const S of a.values())S.sort(_c);const c=t.filter(S=>{var k;return((k=i.get(Aa(S)))!=null?k:0)===0}).sort(_c),u=[],d=new Set;for(;c.length>0;){const S=c.shift(),k=Aa(S);if(!d.has(k)){d.add(k),u.push(S);for(const j of(x=a.get(k))!=null?x:[]){const E=Aa(j),T=((b=i.get(E))!=null?b:0)-1;i.set(E,T),T===0&&c.push(j)}c.sort(_c)}}return u.length===t.length?u:[...u,...t.filter(S=>!d.has(Aa(S))).sort(_c)]}function Gx(t,n){var i;return Xx(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function qx(t,n,i){return Gx(t,i)}function Fh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function Ew(t,n){var u,d;if(!n||t.length===0)return Fh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Fh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const y=i-p;(!a||y<a.delta)&&(a={delta:y,commit:h})}else{const y=p-i;(!c||y<c.delta)&&(c={delta:y,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Fh(t)}function Wu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function Tw(t,n,i){var g,x,b,S,k,j,E;const a=qx(t,i,n);if(a.length===0)return null;const c=a.map(T=>Mr(t,T)),u=new Set(c.map(T=>T.id)),d=(x=(g=c[0])==null?void 0:g.parentSha)!=null?x:null,h=(S=(b=c.find(T=>T.kind==="branch-created"))==null?void 0:b.id)!=null?S:null,p=(k=c[0])==null?void 0:k.date,y=c.find(T=>h&&T.id===h||d&&T.id===d?!0:!T.parentSha||!u.has(T.parentSha));return y||((E=(j=Ew(c,p!=null?p:void 0))!=null?j:c[0])!=null?E:null)}function Aw(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Gx(t.name,i);if(a.length>0){const y=a.map(b=>Mr(t.name,b)),g=new Set(y.map(b=>b.id)),x=(u=(c=y.find(b=>!b.parentSha||!g.has(b.parentSha)))!=null?c:y[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function fp(t,n,i={},a={}){var le,re,De,Ye;const u=new Map(t.map(se=>[se.name,se])),d=new Map,h=new Map;for(const se of t){const P=((le=i[se.name])!=null?le:[]).filter(ae=>ae.kind!=="branch-created").map(ae=>new Date(ae.date).getTime()).filter(ae=>Number.isFinite(ae)).sort((ae,F)=>ae-F)[0];P!=null&&h.set(se.name,P)}const p=se=>{const me=h.get(se.name);return me!=null?me:gy(se).start},y=se=>{var P;const me=(P=a[se.name])!=null?P:null;return me&&me!==se.name&&(me===n||u.has(me))?me:se.name===n?null:se.parentBranch&&se.parentBranch!==se.name&&(se.parentBranch===n||u.has(se.parentBranch))?se.parentBranch:null};for(const se of t){if(se.name===n)continue;const me=(re=y(se))!=null?re:n,P=(De=d.get(me))!=null?De:[];P.push(se),d.set(me,P)}for(const se of d.values())se.sort((me,P)=>p(me)-p(P)||me.name.localeCompare(P.name));const g=new Map,x=[],b=new Map,S=new Map,k=new Map;for(const se of Object.values(i))for(const me of se){const P=new Date(me.date).getTime();Number.isFinite(P)&&(me.fullSha&&k.set(me.fullSha,P),me.sha&&k.set(me.sha,P))}const j=(se,me)=>({start:Math.min(se,me),end:Math.max(se,me)}),E=se=>{var G,_e;const me=j(p(se),gy(se).end),P=[me],ae=me.start,F=Aw(se,n,i),pe=F?k.get(F):void 0,Te=new Date((_e=(G=se.divergedFromDate)!=null?G:se.createdDate)!=null?_e:se.lastCommitDate).getTime(),I=Number.isFinite(pe!=null?pe:NaN)?pe:Number.isFinite(Te)?Te:null;if(I==null)return P;const fe=j(I,ae);return fe.start!==fe.end&&P.push(fe),P},T=Math.max(1,360*60*1e3*kw),z=(se,me)=>!(se.start-me.end>=T||me.start-se.end>=T),O=(se,me)=>me.some(P=>{var ae;return((ae=S.get(se))!=null?ae:[]).some(F=>z(P,F))}),D=(se,me=new Set)=>{const P=b.get(se);if(P!=null)return P;if(me.has(se))return 1;me.add(se);const ae=u.get(se);if(!ae||se===n)return me.delete(se),b.set(se,0),0;const F=y(ae),pe=F?D(F,me)+1:1;return me.delete(se),b.set(se,pe),pe},K=(se,me=new Set)=>{var Ne,He;const P=g.get(se);if(P)return P.column;if(me.has(se))return 0;me.add(se);const ae=u.get(se);if(!ae)return me.delete(se),0;if(se===n){const We={name:se,column:0,parentName:null};g.set(se,We),x.push(We);const ot=E(ae);return S.set(0,[...(Ne=S.get(0))!=null?Ne:[],...ot]),me.delete(se),0}const F=y(ae),pe=F&&!me.has(F)?F:null,Te=pe?K(pe,me):0,I=Math.max(1,D(se)),fe=Math.max(pe?Te+1:1,I),G=E(ae);let _e=fe;for(;O(_e,G);)_e+=1;const Se={name:se,column:_e,parentName:pe};return g.set(se,Se),x.push(Se),S.set(_e,[...(He=S.get(_e))!=null?He:[],...G]),me.delete(se),_e};K(n);const Y=t.filter(se=>!g.has(se.name)).sort((se,me)=>p(se)-p(me)||se.name.localeCompare(me.name)),Q=Y.filter(se=>y(se)!=null),V=Y.filter(se=>y(se)==null);for(const se of Q)K(se.name);let ee=Math.max(0,...x.map(se=>se.column))+1+1;for(const se of V){const me=E(se);let P=ee;for(;O(P,me);)P+=1;const ae={name:se.name,column:P,parentName:null};g.set(se.name,ae),x.push(ae),S.set(P,[...(Ye=S.get(P))!=null?Ye:[],...me]),ee=P+1}return x.sort((se,me)=>se.column-me.column||se.name.localeCompare(me.name))}function Nw(t,n,i,a){const c=new Map(t.map(h=>[h.name,h])),u=h=>{var y;const p=(y=i[h.name])!=null?y:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of t){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const Fu=2.25,Gi=0,Xh=0,Dw=3600*1e3,Rw=3600*1e3,Li=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Ao=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function yy(t,n,i=new Map){var V,ee,le,re,De,Ye,se,me,P,ae,F,pe,Te,I,fe;if(t.length===0)return new Map;const a=[...t].sort((G,_e)=>{const Se=Li(G.date)-Li(_e.date);return Se!==0?Se:G.id!==_e.id?G.id.localeCompare(_e.id):G.visualId.localeCompare(_e.visualId)}),c=new Map;for(const G of t){const _e=(V=G.parentSha)!=null?V:null;if(_e){const Se=(ee=c.get(_e))!=null?ee:new Set;Se.add(G.id),c.set(_e,Se)}for(const Se of(le=i.get(G.id))!=null?le:[]){if(!Se)continue;const Ne=(re=c.get(Se))!=null?re:new Set;Ne.add(G.id),c.set(Se,Ne)}}const u=new Map,d=new Map,h=new Map,p=new Set,y=new Map,g=new Map,x=new Map,b=new Map;for(const G of t){const _e=(De=y.get(G.branchName))!=null?De:new Set;_e.add(G.id),y.set(G.branchName,_e);const Se=(se=(Ye=n.get(G.branchName))==null?void 0:Ye.column)!=null?se:0,Ne=(me=g.get(G.id))!=null?me:new Set;Ne.add(Se),g.set(G.id,Ne);const He=new Set;G.parentSha&&He.add(G.parentSha),x.set(G.visualId,He);const We=new Set(He);for(const ot of(P=i.get(G.id))!=null?P:[])ot&&We.add(ot);b.set(G.visualId,We)}const S=new Set(Array.from(g.keys())),k=Array.from(S),j=new Map,E=G=>{const _e=[];for(const Se of k)Ao(Se,G)&&_e.push(Se);return _e},T=new Map;for(const G of k)T.set(G,new Set);for(const G of t){const _e=E(G.id);if(_e.length===0)continue;const Se=(ae=b.get(G.visualId))!=null?ae:new Set,Ne=new Set;for(const He of Se)for(const We of E(He))Ne.add(We);for(const He of _e){const We=(F=T.get(He))!=null?F:new Set;for(const ot of Ne)We.add(ot);T.set(He,We)}}const z=new Map,O=(G,_e=new Set)=>{var We;const Se=z.get(G);if(Se)return Se;if(_e.has(G))return new Set;_e.add(G);const Ne=(We=T.get(G))!=null?We:new Set,He=new Set;for(const ot of Ne){He.add(ot);for(const Rt of O(ot,_e))He.add(Rt)}return _e.delete(G),z.set(G,He),He},D=(G,_e)=>{if(Ao(G,_e))return!0;const Se=E(G),Ne=E(_e);for(const He of Se){const We=O(He);for(const ot of Ne)if(We.has(ot))return!0}for(const He of Ne){const We=O(He);for(const ot of Se)if(We.has(ot))return!0}return!1};let K=1;const Y=(G,_e)=>{var nt,Ze,Qe,ct,ft,Ct,bt,$t,it;const Se=(Ze=(nt=n.get(G.branchName))==null?void 0:nt.column)!=null?Ze:0,Ne=(Qe=y.get(G.branchName))!=null?Qe:new Set,We=!(!!G.parentSha&&Ne.has(G.parentSha))&&G.parentSha?G.parentSha:null,ot=Array.from(_e).flatMap(H=>E(H).flatMap(oe=>{var be;return(be=j.get(oe))!=null?be:[]})),Rt=(G.kind==="branch-created"||G.kind==="stash")&&ot.length>0?Math.max(...ot)+1:null,Ut=ot.length>0?Math.max(...ot)+1:1,Ke=(ct=c.get(G.id))!=null?ct:new Set,Bt=Array.from(Ke).flatMap(H=>{var oe;return Array.from((oe=g.get(H))!=null?oe:[])}).some(H=>H!==Se),Kt=new Date(G.date).getTime(),Qt=Math.max(Ut,1);let ze=null;for(let H=Qt;H<K;H+=1){const oe=(ft=d.get(H))!=null?ft:[];if(oe.length===0||Bt||p.has(H))continue;const be=(Ct=b.get(G.visualId))!=null?Ct:new Set;if(!(oe.some(he=>D(G.id,he.sha)?!0:Array.from(be).some(Ee=>Ao(Ee,he.sha)))||oe.some(he=>he.column===Se)||!Number.isFinite(Kt)||!oe.every(he=>{if(!Number.isFinite(he.time))return!1;const Ee=!!We&&!!he.branchEntryParentSha&&We===he.branchEntryParentSha?Rw:Dw;return Math.abs(he.time-Kt)<=Ee}))){ze=H;break}}Rt!=null&&(ze=Rt),ze==null&&(ze=Math.max(Ut,K)),u.set(G.visualId,ze),ze>=K&&(K=ze+1);const ce=(bt=d.get(ze))!=null?bt:[];ce.push({visualId:G.visualId,sha:G.id,column:Se,time:Kt,branchEntryParentSha:We}),d.set(ze,ce),Bt&&p.add(ze);for(const H of _e){const oe=($t=h.get(H))!=null?$t:[];oe.push(ze),h.set(H,oe)}const tt=(it=j.get(G.id))!=null?it:[];tt.push(ze),j.set(G.id,tt)};for(const G of a){const _e=(pe=x.get(G.visualId))!=null?pe:new Set;Y(G,_e)}const Q=Math.max(1,a.length*2);for(let G=0;G<Q;G+=1){let _e=!1;for(const Se of a){const Ne=(Te=x.get(Se.visualId))!=null?Te:new Set;if(Ne.size===0)continue;const He=(I=u.get(Se.visualId))!=null?I:1;let We=1;for(const ot of Ne){const Rt=E(ot).flatMap(Ut=>{var Ke;return(Ke=j.get(Ut))!=null?Ke:[]});Rt.length>0&&(We=Math.max(We,Math.max(...Rt)+1))}if(He<We){u.set(Se.visualId,We);const ot=(fe=j.get(Se.id))!=null?fe:[];ot.length===0?j.set(Se.id,[We]):j.set(Se.id,[...ot.slice(0,-1),We]),_e=!0}}if(!_e)break}return u}function Mc(t){var bi,vs,vi,Yt,ws,As,Ro,wi,Vo,Ns,ci,$s,Sn,Co,Yo,ps,qs,an,Ks,Is,ro,Ms,Bo,Qs,ko,yo,On,Tn,Vn,Wn,lo,Ds,Es,Wo,co,_s,Ts,Lo,xo,uo,Oo,zo,Si,ta,Ii,Pi,ei,Nt,Ci,ki,Hi,ui,bo,Fo,di;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchParentByName:p={},branchUniqueAheadCounts:y,manuallyOpenedClumps:g,manuallyClosedClumps:x,isDebugOpen:b,gridSearchQuery:S,gridFocusSha:k,checkedOutRef:j,orientation:E="horizontal",nodePositionOverrides:T={}}=t,z=E==="horizontal",O=new Map(i.map(M=>[M.name,M])),D=new Map(n.map(M=>[M.name,M])),K=Mw([...a.map(M=>{var U,ue,ke,Ve;return{id:M.fullSha,branchName:d,message:(U=M.prTitle)!=null?U:M.sha,author:"",date:M.date,parentSha:(ke=(ue=M.parentShas)==null?void 0:ue[0])!=null?ke:null,parentShas:(Ve=M.parentShas)!=null?Ve:[]}}),...((bi=h[d])!=null?bi:[]).map(M=>Mr(d,M)),...c.map(M=>Mr(M.branch||"",M)),...u.map(M=>Mr(M.branch||"",M))]),Y=new Map,Q=new Map;for(const M of i){if(M.name===d)continue;const U=qx(M.name,y,h);Q.set(M.name,U);const ue=Xx(U.map(It=>Mr(M.name,It)));if(ue.length>0){Y.set(M.name,ue);continue}const ke=(Yt=(vi=(vs=M.presidesFromSha)!=null?vs:M.divergedFromSha)!=null?vi:M.createdFromSha)!=null?Yt:null;if(!ke)continue;const Ve=(ws=c.find(It=>Ao(It.fullSha,ke)||Ao(It.sha,ke)))==null?void 0:ws.date,Fe=Ve?null:(As=Object.values(h).flat().find(It=>Ao(It.fullSha,ke)||Ao(It.sha,ke)))==null?void 0:As.date,Pt={id:`BRANCH_HEAD:${M.name}:${ke}`,branchName:M.name,message:`Branch ${M.name}`,author:M.lastCommitAuthor,date:(Vo=(wi=(Ro=Ve!=null?Ve:Fe)!=null?Ro:M.createdDate)!=null?wi:M.divergedFromDate)!=null?Vo:M.lastCommitDate,parentSha:ke,clusterKey:null,childShas:[],kind:"branch-created"};Y.set(M.name,[Pt])}const V=new Set(K.map(M=>M.id)),ee=(Ns=[...K].sort((M,U)=>Li(M.date)-Li(U.date)||M.id.localeCompare(U.id))[0])!=null?Ns:null,le=new Map(Array.from(Y.entries()).map(([M,U])=>[M,new Set(U.map(ue=>ue.id))])),re=new Map;for(const M of i){if(M.name===d)continue;const U=Tw(M.name,h,y);if(U){re.set(M.name,U);continue}const ue=(ci=Y.get(M.name))==null?void 0:ci[0];if(ue){const ke=(Co=(Sn=($s=M.presidesFromSha)!=null?$s:M.divergedFromSha)!=null?Sn:M.createdFromSha)!=null?Co:null;re.set(M.name,{...ue,parentSha:ke})}}const De=new Map;for(const[M,U]of Y.entries()){const ue=U.find(ke=>ke.kind!=="branch-created");ue&&De.set(M,ue)}const Ye=new Map;for(const[M,U]of Y.entries()){const ue=U.filter(Fe=>Fe.kind!=="branch-created"),Ve=(Yo=(ue.length>0?ue:U)[0])!=null?Yo:null;Ve&&Ye.set(M,Ve)}const se=new Map;for(const M of i){if(M.name===d)continue;const U=(ps=Ye.get(M.name))!=null?ps:null,ue=(an=(qs=re.get(M.name))==null?void 0:qs.parentSha)!=null?an:null,ke=(ro=(Is=(Ks=M.presidesFromSha)!=null?Ks:M.divergedFromSha)!=null?Is:M.createdFromSha)!=null?ro:null,Ve=(Ms=U==null?void 0:U.parentSha)!=null?Ms:null,Fe=(Bo=Ve!=null?Ve:ue)!=null?Bo:ke;Fe&&se.set(M.name,Fe)}const me=M=>{var Fe,Pt,It,Gt,qt,nn,_n,fn;const U=(Fe=p[M.name])!=null?Fe:null;if(!(U&&U!==d&&U!==M.name&&O.has(U)))return U!=null?U:"";const ke=(Gt=(It=(Pt=se.get(M.name))!=null?Pt:M.presidesFromSha)!=null?It:M.divergedFromSha)!=null?Gt:M.createdFromSha;if(ke&&((qt=le.get(U))!=null?qt:new Set).has(ke))return U;const Ve=(_n=(nn=re.get(M.name))==null?void 0:nn.parentSha)!=null?_n:null;return Ve&&((fn=le.get(U))!=null?fn:new Set).has(Ve),U},P=M=>{var Ve,Fe,Pt,It,Gt,qt,nn,_n;const U=re.get(M.name),ue=(Gt=(It=(Pt=(Fe=(Ve=se.get(M.name))!=null?Ve:U==null?void 0:U.parentSha)!=null?Fe:M.presidesFromSha)!=null?Pt:M.divergedFromSha)!=null?It:M.createdFromSha)!=null?Gt:null;if(!M.parentBranch&&!ue||!ue)return null;if(me(M)===d){if(V.has(ue))return ue;const fn=(qt=U==null?void 0:U.parentSha)!=null?qt:null;return fn&&V.has(fn)?fn:(_n=(nn=ee==null?void 0:ee.id)!=null?nn:fn)!=null?_n:ue}return V.has(ue),ue},ae=M=>P(M),F=new Map;for(const M of[...c,...u]){const U={...Mr(M.branch||"",M),visualId:`${M.branch||""}:${M.fullSha}`};F.set(M.fullSha,U)}const pe=new Map(F),Te=M=>{pe.has(M.id)||pe.set(M.id,M)},I=new Set(u.map(M=>M.fullSha)),fe=new Map(Array.from(Y.entries()).map(([M,U])=>[M,new Set(U.map(ue=>ue.id))])),G=new Set;for(const M of fe.values())for(const U of M)G.add(U);for(const M of K)G.has(M.id)||Te({...M,visualId:`${M.branchName}:${M.id}`});for(const[M,U]of Y.entries())for(const ue of U)Te({...ue,visualId:`${M}:${ue.id}`});const Se=[...Array.from(pe.values()).map(M=>({...M,visualId:`${M.branchName}:${M.id}`}))].sort((M,U)=>Li(M.date)-Li(U.date)||M.id.localeCompare(U.id)),Ne=new Map;for(const M of Se){const U=(Qs=Ne.get(M.branchName))!=null?Qs:new Set;U.add(M.id),Ne.set(M.branchName,U)}const He=(M,U)=>{const ue=Ne.get(M);if(!ue||ue.size===0)return!1;for(const ke of ue)if(Ao(ke,U))return!0;return!1},We=(M,U)=>{const ue=Array.from(Ne.entries()).filter(([ke])=>ke!==U).filter(([,ke])=>Array.from(ke).some(Ve=>Ao(Ve,M))).map(([ke])=>ke);return ue.length>0?ue.sort()[0]:M.slice(0,7)},ot=[],Rt=new Map,Ut=new Map;for(const M of a){const U=M.fullSha,ue=M.targetBranch,ke=M.targetCommitSha;if(!U||!ue||!ke||!He(ue,ke))continue;const Ve=((ko=M.parentShas)!=null?ko:[]).slice(1).filter(Pt=>!!Pt&&!Ao(Pt,U));if(Ve.length===0)continue;const Fe=(yo=Ut.get(U))!=null?yo:new Set;for(const Pt of Ve){Fe.add(Pt);const It=We(Pt,ue);ot.push({sourceCommitSha:Pt,sourceBranchName:It,mergeCommitSha:U,targetCommitSha:ke,targetBranchName:ue});const Gt=(On=Rt.get(It))!=null?On:new Map,qt=(Tn=Gt.get(Pt))!=null?Tn:new Set;qt.add(ue),Gt.set(Pt,qt),Rt.set(It,Gt)}Ut.set(U,Fe)}const Ke=new Map;for(const M of i){if(M.name===d)continue;const U=P(M);U&&Ke.set(M.name,U)}const et=new Map;for(const M of Se){const U=Ut.get(M.id);if(U&&U.size>0){const Ve=(Vn=et.get(M.id))!=null?Vn:new Set;for(const Fe of U)Ve.add(Fe);et.set(M.id,Ve)}if(M.branchName===d)continue;const ue=Ke.get(M.branchName);if(!ue||ue===M.id)continue;const ke=(Wn=et.get(M.id))!=null?Wn:new Set;ke.add(ue),et.set(M.id,ke)}const Bt=new Map,Kt=new Map;for(const M of Se){if(Kt.set(M.id,M),M.parentSha){const U=(lo=Bt.get(M.parentSha))!=null?lo:new Set;U.add(M.id),Bt.set(M.parentSha,U)}for(const U of(Ds=et.get(M.id))!=null?Ds:[]){if(!U)continue;const ue=(Es=Bt.get(U))!=null?Es:new Set;ue.add(M.id),Bt.set(U,ue)}}const Qt=new Map;for(const[M,U]of Bt.entries())Qt.set(M,Array.from(U));const ze=new Set(["branch-created","stash"]),ce=new Set,tt=M=>{if(!M)return null;const U=Se.find(ue=>Ao(ue.id,M)||Ao(ue.visualId.split(":").slice(1).join(":"),M));return U!=null?U:null};for(const M of Se){if(M.parentSha){const ue=tt(M.parentSha),ke=!!ue&&ce.has(ue.visualId);ue&&(M.kind==="stash"||M.kind==="branch-created"||ke)&&ce.add(ue.visualId)}const U=(Wo=Bt.get(M.id))!=null?Wo:new Set;(U.size>1||Array.from(U).map(ue=>Kt.get(ue)).some(ue=>ue!=null&&ue.kind!=null&&ze.has(ue.kind)))&&ce.add(M.visualId)}const nt=Se.map(M=>{var U,ue;return{...M,childShas:(ue=(U=Qt.get(M.id))!=null?U:M.childShas)!=null?ue:[]}}),Ze=yy(nt,D,et),Qe=new Map;for(const M of nt){const U=(co=Qe.get(M.branchName))!=null?co:[];U.push(M),Qe.set(M.branchName,U)}const ct=new Map,ft=new Map,Ct=new Map,bt=new Map,$t=new Map,it=(M,U)=>{var qt,nn,_n,fn,Ps;if(U.length===0)return[];const ue=[...U].sort((Wt,as)=>{var fo,Zs;const Ss=(fo=Ze.get(Wt.visualId))!=null?fo:Number.MAX_SAFE_INTEGER,gs=(Zs=Ze.get(as.visualId))!=null?Zs:Number.MAX_SAFE_INTEGER;return Ss!==gs?Ss-gs:Li(Wt.date)-Li(as.date)||Wt.id.localeCompare(as.id)}),ke=new Map;let Ve=null,Fe=0;const Pt=Wt=>Wt.kind==="uncommitted"?"uncommitted":Wt.kind==="stash"?"stash":Wt.kind==="branch-created"?"branch-created":I.has(Wt.id)?"unpushed":"pushed";let It=null;for(const Wt of ue){const as=Wt.kind==="stash"||Wt.kind==="branch-created",Ss=ce.has(Wt.visualId);if(as)continue;const gs=Pt(Wt);(!Ve||It!=null&&It!==gs)&&(Fe+=1,Ve=`cluster:${M}:segment:${Fe}`);const fo=(qt=ke.get(Ve))!=null?qt:[];fo.push(Wt),ke.set(Ve,fo),Ss&&(Ve=null),It=gs}const Gt=[];for(const[Wt,as]of ke.entries()){if(as.length===0)continue;const gs=[...as].sort((Hs,Js)=>{var X,q;const ho=(X=Ze.get(Hs.visualId))!=null?X:Number.MIN_SAFE_INTEGER,B=(q=Ze.get(Js.visualId))!=null?q:Number.MIN_SAFE_INTEGER;return ho!==B?B-ho:Li(Js.date)-Li(Hs.date)||Js.id.localeCompare(Hs.id)})[0].visualId,fo={branchName:M,key:Wt,commitIds:as.map(Hs=>Hs.visualId),leadId:gs,count:as.length};Gt.push(fo);const Zs=(nn=$t.get(Wt))!=null?nn:0;if(!bt.has(Wt))bt.set(Wt,gs);else{const Hs=bt.get(Wt),Js=Kt.get(Hs.split(":").slice(1).join(":"));if(Js){const ho=(_n=Ze.get(Js.visualId))!=null?_n:Number.MIN_SAFE_INTEGER;((fn=Ze.get(gs))!=null?fn:Number.MIN_SAFE_INTEGER)>ho&&bt.set(Wt,gs)}}$t.set(Wt,Math.max(Zs,as.length));for(const Hs of fo.commitIds){ft.set(Hs,Wt);const Js=Hs.split(":").slice(1).join(":"),ho=(Ps=Ct.get(Js))!=null?Ps:[];ho.includes(Wt)||ho.push(Wt),Ct.set(Js,ho)}}return Gt};for(const[M,U]of Qe.entries())ct.set(M,it(M,U));const H=new Map;for(const M of nt)H.set(M.id,M);const oe=M=>{if(!M)return"none";const U=Array.from(H.values()).find(ue=>Ao(ue.id,M)||Ao(ue.id.slice(0,7),M)||Ao(M,ue.id));return U?`${U.id.slice(0,7)} ${U.branchName}`:M.slice(0,7)},be=b?["Lane rows (expected):",...[...n].sort((M,U)=>M.column-U.column||M.name.localeCompare(U.name)).map(M=>{var U;return`  row=${M.column} branch=${M.name} parent=${(U=M.parentName)!=null?U:"none"}`}),"",...i.flatMap(M=>{var Pt,It,Gt,qt,nn,_n,fn,Ps;const U=(Pt=h[M.name])!=null?Pt:[],ue=[...(It=Q.get(M.name))!=null?It:[]].reverse(),ke=new Set(((Gt=Y.get(M.name))!=null?Gt:[]).map(Wt=>Wt.id)),Ve=(nn=(qt=ue.find(Wt=>!Wt.parentSha||!ue.some(as=>{var Ss;return Ao(as.fullSha,(Ss=Wt.parentSha)!=null?Ss:"")})))!=null?qt:ue[0])!=null?nn:null,Fe=(fn=(_n=Ve==null?void 0:Ve.parentSha)!=null?_n:se.get(M.name))!=null?fn:null;return[`Branch ${M.name}`,`  ahead=${(Ps=y[M.name])!=null?Ps:0} previews=${ue.length} rendered=${ke.size}`,`  db parent commit=${oe(Fe)}`,`  db child commit=${Ve?`${Ve.fullSha.slice(0,7)} ${M.name}`:"none"}`,...ue.map(Wt=>{const as=ke.has(Wt.fullSha)?"visible":"hidden",Ss=ke.has(Wt.fullSha)?"kept by render set":"dropped by render set";return`  ${as} ${Wt.fullSha.slice(0,7)} ${Wt.message} [${Ss}]`}),U.length===0?"  no preview data":null].filter(Wt=>Wt!=null)})]:[],J=b?Array.from(Y.entries()).map(([M,U])=>[`Branch debug ${M}`,...U.map(ue=>`  ${ue.id.slice(0,7)} ${ue.message}`)].join(`
`)):[],Me=Ze,we=Tm/Fu,he=20/Fu,Ie=z?ds+we+he:Yu+we+he,Ee=z?Yu+we+he:rl,gt=Math.max(0,...nt.map(M=>{var U;return(U=Me.get(M.visualId))!=null?U:1})),dt=nt.map(M=>{var Ve,Fe;const U=D.get(M.branchName),ue=(Ve=Me.get(M.visualId))!=null?Ve:1,ke=(Fe=U==null?void 0:U.column)!=null?Fe:0;return z?{commit:M,row:ue,column:ke,x:Ta+(ue-1)*Ie,y:Ea+ke*Ee}:{commit:M,row:ue,column:ke,x:Ta+ke*rl,y:Ea+(gt-ue)*Ie}}),qe=M=>{var ue;const U=(ue=T[M.commit.visualId])!=null?ue:T[M.commit.id];return U?{...M,x:U.x,y:U.y}:M},ht=dt.map(qe),yt=S.trim().toLowerCase(),Et=yt?ht.filter(M=>{const U=M.commit.id.toLowerCase(),ue=M.commit.id.slice(0,7).toLowerCase(),ke=M.commit.message.toLowerCase(),Ve=M.commit.branchName.toLowerCase();return U.includes(yt)||ue.includes(yt)||ke.includes(yt)||Ve.includes(yt)}):ht,at=k&&(_s=ht.find(M=>M.commit.id===k))!=null?_s:null,Mt=new Set(Et.map(M=>M.commit.id)),Vt=(Ts=j==null?void 0:j.headSha)!=null?Ts:null,lt=(()=>{var U,ue;const M=(U=j==null?void 0:j.branchName)!=null?U:null;return!Vt||!M?null:(ue=ft.get(`${M}:${Vt}`))!=null?ue:null})(),kt=new Set;for(const[M,U]of $t.entries())U>1&&M!==lt&&kt.add(M);const mt=[...Se].filter(M=>{var Fe;const U=ft.get(M.visualId);if(!U)return!0;const ue=bt.get(U),ke=(Fe=$t.get(U))!=null?Fe:1,Ve=g.has(U)||!kt.has(U)&&!x.has(U);return ke<=1||Ve||ue===M.visualId}),Lt=yy(mt,D,et),on=Tm/Fu,un=20/Fu,ln=z?ds+on+un:Yu+on+un,Rn=z?Yu+on+un:rl,Bn=Math.max(0,...Se.map(M=>{var U;return(U=Ze.get(M.visualId))!=null?U:1})),bn=Math.max(0,...mt.map(M=>{var U;return(U=Lt.get(M.visualId))!=null?U:1})),dn=Math.max(0,Bn-bn),Xt=[...mt.map(M=>{var Ve,Fe;const U=D.get(M.branchName),ue=(Ve=Lt.get(M.visualId))!=null?Ve:1,ke=(Fe=U==null?void 0:U.column)!=null?Fe:0;return qe(z?{commit:M,row:ue,column:ke,x:Ta+(dn+ue-1)*ln,y:Ea+ke*Rn}:{commit:M,row:ue,column:ke,x:Ta+ke*rl,y:Ea+(bn-ue)*ln})})].sort((M,U)=>M.row!==U.row?M.row-U.row:M.column!==U.column?M.column-U.column:M.commit.visualId.localeCompare(U.commit.visualId)).map(M=>({...M})),En=new Set;for(const M of Xt){let U=M.row,ue=`${M.column}:${U}`;for(;En.has(ue);)U+=1,ue=`${M.column}:${U}`;M.row=U,En.add(ue)}const st=Math.max(0,...Xt.map(M=>M.row));for(const M of Xt){if(z){M.x=Ta+(dn+M.row-1)*ln,M.y=Ea+M.column*Rn;continue}M.x=Ta+M.column*rl,M.y=Ea+(st-M.row)*ln}const Tt=new Map;for(const M of Xt){const U=(Lo=Tt.get(M.commit.id))!=null?Lo:[];U.push(M),Tt.set(M.commit.id,U)}const Ln=new Map;for(const M of Xt){const U=ft.get(M.commit.visualId);if(!U)continue;const ue=Ln.get(U);(!ue||(z?M.x>ue.x:M.y<ue.y))&&Ln.set(U,M)}const ks=(M,U)=>`${M.toFixed(1)} ${U.toFixed(1)}`,hs=Math.max(0,...Xt.map(M=>M.row)),ss=Math.max(0,...n.map(M=>M.column)),Do=Math.max(0,...Xt.map(M=>M.x+ds)),os=Math.max(0,...Xt.map(M=>M.y+vl+Ls)),Ws=Math.max(z?Ta*2+Math.max(0,hs-1)*ln+ds+Yh+un:Ta*2+(ss+1)*rl,Do+Ta),wo=Math.max(z?Ea*2+ss*Rn+Ls+Yh+un:Ea*2+Math.max(0,hs-1)*ln+Ls+Yh+un,os+Ea),zs=[],jn=new Map(i.map(M=>{var ue,ke;const U=new Date((ke=(ue=M.createdDate)!=null?ue:M.divergedFromDate)!=null?ke:M.lastCommitDate).getTime();return[M.name,Number.isFinite(U)?U:0]})),Zo=M=>{var U;return(U=jn.get(M))!=null?U:0},js=[],vn=M=>{b&&js.push(M)},Yn=new Set,ao=new Map,Fs=(M,U)=>{var ke;const ue=(ke=ao.get(M))!=null?ke:[];ue.includes(U)||ue.push(U),ao.set(M,ue)},us=new Set,is=new Set,Xs=new Set,wn=(M,U)=>{var Ve,Fe;if(!M)return null;const ue=Wu(Tt,M,U);if(ue)return ue;const ke=(Ve=ft.get(`${U!=null?U:d}:${M}`))!=null?Ve:ft.get(M);return ke&&(Fe=Ln.get(ke))!=null?Fe:null},pn=new Set;for(const M of i){const U=ae(M);U&&is.add(U);const ue=(xo=se.get(M.name))!=null?xo:null;ue&&Xs.add(ue)}const en=M=>{var Ve;const U=wn(M.id,M.branchName);if(U)return U;const ue=ft.get(M.visualId);if(!ue)return null;const ke=bt.get(ue);return ke&&(Ve=Xt.find(Fe=>Fe.commit.id===ke))!=null?Ve:null},Un=(M,U)=>M?Wu(Tt,M,U):null,Ho=(M,U)=>z?{x:M.x-Gi,y:M.y+Ls/2,face:"left"}:{x:M.x+ds/2,y:M.y+Ls+Gi,face:"bottom"},Uo=M=>z?{x:M.x-Gi,y:M.y+Ls/2,face:"left"}:{x:M.x+ds/2,y:M.y+Ls+Gi,face:"bottom"},li=(M,U)=>M.column!==U.column?!0:z?M.commit.branchName!==U.commit.branchName:!1,Gs=(M,U,ue)=>{if(!z)return{x:U?M.x+ds:M.x+ds/2,y:U?M.y+Ls/2:M.y,face:U?"right":"top"};if(!U)return{x:M.x+ds+Gi,y:M.y+Ls/2,face:"right"};if(ue&&ue.column===M.column&&ue.commit.branchName!==M.commit.branchName){if(ue.x>M.x)return{x:M.x+ds/2,y:M.y+Ls+Gi,face:"bottom"};if(ue.x<M.x)return{x:M.x+ds/2,y:M.y-Gi,face:"top"}}return!ue||ue.column===M.column?{x:M.x+ds+Gi,y:M.y+Ls/2,face:"right"}:ue.column>M.column?{x:M.x+ds/2,y:M.y+Ls+Gi,face:"bottom"}:{x:M.x+ds/2,y:M.y-Gi,face:"top"}},Jo=M=>z?{x:M.x+ds/2,y:M.y+Ls+Gi,face:"bottom"}:{x:M.x+ds,y:M.y+Ls/2,face:"right"},bs=(M,U)=>Wu(Tt,M,U),So=(M,U)=>Un(M,U),Mn=[],go=new Set;for(const M of ot){const U=(uo=wn(M.targetCommitSha,M.targetBranchName))!=null?uo:null;if(!U){vn({id:`merge:${M.mergeCommitSha}:${M.sourceCommitSha}:target`,kind:"merge",parent:M.sourceCommitSha,child:M.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const ue=M.sourceCommitSha,ke=`merge:${M.mergeCommitSha}:${ue!=null?ue:"unknown"}`;if(!ue||Ao(ue,M.targetCommitSha)){vn({id:ke,kind:"merge",parent:ue!=null?ue:"unknown",child:M.targetCommitSha,rendered:!1,reason:ue?"merged parent equals merge target sha":"missing merged parent sha"});continue}const Ve=(Oo=Wu(Tt,ue))!=null?Oo:null;if(!Ve){vn({id:ke,kind:"merge",parent:ue,child:M.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(Ve.commit.id===U.commit.id){vn({id:ke,kind:"merge",parent:Ve.commit.id,child:U.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let Fe,Pt,It;const Gt=z?U.x+ds/2:U.x+ds-Xh,qt=z?U.y+Ls+Xh:U.y+Ls/2,nn=z?"bottom":"right";z?(Fe=Ve.x+ds+Xh,Pt=Ve.y+Ls/2,It="right"):(Fe=Ve.x+ds/2,Pt=Ve.y,It="top");const _n=`${Fe.toFixed(2)}:${Pt.toFixed(2)}:${Gt.toFixed(2)}:${qt.toFixed(2)}`;if(go.has(_n)){vn({id:ke,kind:"merge",parent:Ve.commit.id,child:U.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}go.add(_n),Mn.push({id:ke,fromX:Fe,fromY:Pt,toX:Gt,toY:qt,fromFace:It,toFace:nn,zIndex:Zo(Ve.commit.branchName)}),vn({id:ke,kind:"merge",parent:Ve.commit.id,child:U.commit.id,rendered:!0,reason:`merge connector rendered to ${M.targetBranchName}`})}const ms=new Set;for(const M of i){if(M.name===d)continue;const U=re.get(M.name);if(!U)continue;const ue=me(M),ke=bs((zo=se.get(M.name))!=null?zo:"",ue),Ve=(Si=De.get(M.name))!=null?Si:U,Fe=(ta=So(Ve.id,M.name))!=null?ta:en(Ve);if(!ke||!Fe||ke.commit.id===Fe.commit.id){const nn=ft.get(`${M.name}:${U.id}`),_n=ft.get(`${M.name}:${Ve.id}`),fn=!!nn&&!kt.has(nn),Ps=!!_n&&!kt.has(_n),Wt=!!nn&&!g.has(nn)&&(fn?x.has(nn):!0),as=!!_n&&!g.has(_n)&&(Ps?x.has(_n):!0);!ke&&!Wt&&Fs((Ii=Fe==null?void 0:Fe.commit.id)!=null?Ii:U.id,"Missing parent node"),!Fe&&!as&&Fs(U.id,"Missing child node"),vn({id:`branch:${(Pi=ke==null?void 0:ke.commit.id)!=null?Pi:"null"}->${(ei=Fe==null?void 0:Fe.commit.id)!=null?ei:"null"}`,kind:"branch",parent:(Nt=ke==null?void 0:ke.commit.id)!=null?Nt:"null",child:(Ci=Fe==null?void 0:Fe.commit.id)!=null?Ci:"null",rendered:!1,reason:ke?Fe?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Pt=`branch:${ke.commit.id}->${Fe.commit.id}`;if(pn.has(Pt)){vn({id:Pt,kind:"branch",parent:ke.commit.id,child:Fe.commit.id,rendered:!1,reason:"duplicate connector key"});continue}pn.add(Pt),us.add(ke.commit.id);const It=li(ke,Fe);ke.commit.branchName!==Fe.commit.branchName&&ms.add(ke.commit.id);const Gt=Jo(ke),qt=Uo(Fe);zs.push({id:Pt,fromX:Gt.x,fromY:Gt.y,toX:qt.x,toY:qt.y,fromFace:Gt.face,toFace:qt.face,zIndex:Zo(Fe.commit.branchName)}),vn({id:Pt,kind:"branch",parent:ke.commit.id,child:Fe.commit.id,rendered:!0,reason:It?"branch connector rendered":z?"horizontal connector rendered":"vertical connector rendered"})}for(const M of Se){const U=en(M);if(!U)continue;const ue=(ki=M.parentSha)!=null?ki:null;if(!ue)continue;const ke=(Hi=wn(ue,M.branchName))!=null?Hi:bs(ue,M.branchName);if(!ke){const Gt=(ui=ft.get(`${M.branchName}:${ue}`))!=null?ui:ft.get(ue),qt=!!Gt&&!kt.has(Gt);!!Gt&&!g.has(Gt)&&(qt?x.has(Gt):!0)||Fs(M.id,"Missing parent node"),vn({id:`${M.visualId}->${ue}`,kind:"ancestry",parent:ue,child:M.id,rendered:!1,reason:"missing parent node"});continue}if(U.commit.id===ke.commit.id){Fs(U.commit.id,"Parent and child resolve to the same node"),vn({id:`${ke.commit.id}->${U.commit.id}`,kind:"ancestry",parent:ke.commit.id,child:U.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const Ve=`${M.branchName}:${(bo=ke.commit.visualId)!=null?bo:ke.commit.id}->${U.commit.visualId}`;if(pn.has(Ve)){Fs(ke.commit.id,"Duplicate connector key"),Fs(U.commit.id,"Duplicate connector key"),vn({id:Ve,kind:"ancestry",parent:ke.commit.id,child:U.commit.id,rendered:!1,reason:"duplicate connector key"});continue}pn.add(Ve),us.add(ke.commit.id);const Fe=li(ke,U),Pt=Gs(ke,Fe,U),It=Ho(U);zs.push({id:Ve,fromX:Pt.x,fromY:Pt.y,toX:It.x,toY:It.y,fromFace:Pt.face,toFace:It.face,zIndex:Zo(U.commit.branchName)}),vn({id:Ve,kind:"ancestry",parent:ke.commit.id,child:U.commit.id,rendered:!0,reason:Fe?"ancestry connector rendered":z?"horizontal ancestry rendered":"vertical ancestry rendered"}),Yn.add(ke.commit.id),Yn.add(U.commit.id)}const Kn=new Map;for(const M of Xt){const U=(Fo=Kn.get(M.commit.branchName))!=null?Fo:[];U.push(M),Kn.set(M.commit.branchName,U)}for(const[M,U]of Kn.entries()){if(U.length<2)continue;const ue=[...U].sort((ke,Ve)=>{var Fe,Pt,It,Gt,qt,nn,_n,fn;return ke.row!==Ve.row?ke.row-Ve.row:Li((Pt=(Fe=ke==null?void 0:ke.commit)==null?void 0:Fe.date)!=null?Pt:null)-Li((Gt=(It=Ve==null?void 0:Ve.commit)==null?void 0:It.date)!=null?Gt:null)||((nn=(qt=ke==null?void 0:ke.commit)==null?void 0:qt.id)!=null?nn:"").localeCompare((fn=(_n=Ve==null?void 0:Ve.commit)==null?void 0:_n.id)!=null?fn:"")});for(let ke=1;ke<ue.length;ke+=1){const Ve=ue[ke-1],Fe=ue[ke];if(Ve.commit.id===Fe.commit.id)continue;const Pt=(di=Fe.commit.parentSha)!=null?di:null;if(Pt&&bs(Pt,Fe.commit.branchName))continue;const It=`chain:${M}:${Ve.commit.id}->${Fe.commit.id}`;if(pn.has(It)){Fs(Ve.commit.id,"Duplicate branch chain connector"),Fs(Fe.commit.id,"Duplicate branch chain connector"),vn({id:It,kind:"ancestry",parent:Ve.commit.id,child:Fe.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}pn.add(It);const Gt=li(Ve,Fe),qt=Gs(Ve,Gt,Fe),nn=Ho(Fe);zs.push({id:It,fromX:qt.x,fromY:qt.y,toX:nn.x,toY:nn.y,fromFace:qt.face,toFace:nn.face,zIndex:Zo(Fe.commit.branchName)}),vn({id:It,kind:"ancestry",parent:Ve.commit.id,child:Fe.commit.id,rendered:!0,reason:"branch chain rendered"}),Yn.add(Ve.commit.id),Yn.add(Fe.commit.id)}}return{branchByName:O,laneByName:D,mainCommits:K,branchCommitsByLane:Y,branchPreviewSets:Q,allCommits:Se,clustersByBranch:ct,clusterKeyByCommitId:ft,clusterKeyBySha:Ct,leadByClusterKey:bt,clusterCounts:$t,debugRows:be,branchDebugRows:J,nodes:dt,normalizedSearchQuery:yt,matchingNodes:Et,matchingNodeIds:Mt,focusedNode:at,checkedOutClusterKey:lt,defaultCollapsedClumps:kt,visibleCommitsList:mt,renderNodes:Xt,visibleNodesBySha:Tt,visibleNodeByClusterKey:Ln,pointFormatter:ks,contentWidth:Ws,contentHeight:wo,connectors:zs,mergeConnectors:Mn,connectorDecisions:js,nodeWarnings:ao,connectorParentShas:us,branchStartShas:is,branchOffNodeShas:Xs,crossBranchOutgoingShas:ms,commitIdsWithRenderedAncestry:Yn,branchBaseCommitByName:re,firstBranchCommitByName:Ye,mergeDestinations:ot,mergeTargetBranchesBySourceBranchAndCommitSha:Rt}}const Bw=8,Lw=44,xy=120,by=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Kx(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),y=Math.abs(h),g=Math.hypot(d,h);if(g<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,y)<Bw){const Y=d/g,Q=h/g,V=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:t+Y*V,c1y:n+Q*V,c2x:i-Y*V,c2y:a-Q*V}}if(Math.min(p,y)<Lw){const Y=d/g,Q=h/g,V=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:t+Y*V,c1y:n+Q*V,c2x:i-Y*V,c2y:a-Q*V}}const S=Math.min(160,p*.42),k=Math.min(100,p*.22),j=Math.min(120,y*.32),E=Math.min(160,y*.42),T=by(c),z=by(u);if(!(T==="v"&&z==="h"||T==="v"&&z==null&&y>=p||T==null&&z==="h"&&y>=p||T==="v"&&z==="v"||T==null&&z==null&&y>p)){const Y=i,Q=n;return{kind:"elbowH",cx:Y,cy:Q,s1c1x:t+x*S,s1c1y:n,s1c2x:Y-x*k,s1c2y:Q,s2c1x:Y,s2c1y:Q+b*j,s2c2x:i,s2c2y:a-b*E}}const D=t,K=a;return{kind:"elbowV",cx:D,cy:K,s1c1x:t,s1c1y:n+b*E,s1c2x:D,s1c2y:K-b*j,s2c1x:D+x*S,s2c1y:K,s2c2x:i-x*k,s2c2y:a}}function Ow(t,n,i,a,c,u){const d=Kx(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function vy(t,n,i,a,c,u,d){const h=Kx(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const S=Math.max(8,Math.min(xy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),k=i>=t?1:-1,j=a>=n?1:-1,E=h.cx-k*S,T=h.cy+j*S;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(E-k*S*.5,h.cy)} ${c(E,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,T)}`,`C ${c(h.cx,T+j*S*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(xy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),y=i>=t?1:-1,g=a>=n?1:-1,x=h.cy-g*p,b=h.cx+y*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-g*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+y*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const hp=2.25,ac=hp/2,zw=.45,$w=.01,ua=hp,kd=10,Iw=-100,wy=0,Sy=.9,Pw=.9,Cy=.001,Gh=.001,Hw=12,Uw=ds+48;function Dn(...t){return t.filter(Boolean).join(" ")}function Vw(t){return Math.max(zw,Math.min(hp,t))}function Yw(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function Qx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function Ww(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const y of t)n=Math.min(n,y.x),i=Math.min(i,y.y),a=Math.max(a,y.x),c=Math.max(c,y.y);return{left:n,top:i,right:a,bottom:c}}function Fw(t,n,i,a,c,u,d){const h=Ow(t,n,i,a,u,d),p=Ww(h);return Qx(c,p)}function Zx(t,n){return{left:t.x,top:t.y+n,right:t.x+ds,bottom:t.y+vl+Ls+4}}function Xw(t,n){const i=Uw,a=Math.max(120,Math.ceil(vl+Ls+4-n+24)),c=new Map;for(const u of t){const d=Zx(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),y=Math.floor(d.top/a),g=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let S=y;S<=g;S++){const k=`${b},${S}`;let j=c.get(k);j||(j=new Set,c.set(k,j)),j.add(x)}}return{cellW:i,cellH:a,buckets:c}}function Gw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),y=Math.floor(n.top/u),g=Math.floor(n.bottom/u),x=new Set;for(let S=h;S<=p;S++)for(let k=y;k<=g;k++){const j=d.get(`${S},${k}`);if(j)for(const E of j)x.add(E)}const b=new Set;for(const S of x){const k=i.get(S);if(!k)continue;const j=Zx(k,a);Qx(n,j)&&b.add(S)}return b}function ky(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/ua;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function qw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function jy(t,n,i){const a=n/ua;return!Number.isFinite(a)||a<=0?t:qw(t,100/a)}function My(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function xi(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Am(t,n){if(n){const i=My(n),a=My(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function qh(t,n){return t.pathExists===!1?!1:Am(t,n)}function Kw(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function Qw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stashInProgress:a,stashDisabled:c,pushInProgress:u,hasUncommittedChanges:d,createBranchFromNodeInProgress:h,onCommitLocalChanges:p,onStashLocalChanges:y,onPushCurrentBranch:g,onPushAllBranches:x,onPushCommitTargets:b,onMergeRefsIntoBranch:S,selectedPushTargets:k,selectedPushLabel:j,canPushCurrentBranch:E,pushCurrentBranchLabel:T,pushableRemoteBranchCount:z,selectedCommitTargetOption:O,mergeInProgress:D,setMergeTargetCommitSha:K,worktrees:Y,currentRepoPath:Q,worktreeMenuOpen:V,setWorktreeMenuOpen:ee,onSwitchToWorktree:le,onRemoveWorktree:re,removeWorktreeInProgress:De,setCommitDialogOpen:Ye,setNewBranchDialogOpen:se}){var Rt,Ut;const me=t.length>0,P=t.length>0&&t.every(Ke=>Ke==="WORKING_TREE"),[ae,F]=_.useState(!1),pe=_.useRef(null),Te=_.useRef(null),I="inline-flex h-7 items-center rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",fe=!!p&&d&&!i&&!n&&(!me||P),G=!!g&&E&&!me&&!u,_e=!!b&&k.length>0&&!u,Se=!!x&&z>=2&&!me&&!u,Ne=!!y&&!c&&!me&&!a,He="Push Selected...",We=fe?{label:n?"Committing...":"Commit",iconSrc:"/icon-commit.svg",run:()=>Ye(!0),disabled:!fe}:G?{label:u?"Pushing...":T,iconSrc:"/icon-pushBranch.svg",run:()=>void(g==null?void 0:g()),disabled:!G}:_e?{label:He,iconSrc:"/icon-pushSelected.svg",run:()=>void(b==null?void 0:b(k.map(Ke=>({branchName:Ke.branchName,targetSha:Ke.targetSha})))),disabled:!_e}:null;return _.useEffect(()=>{const Ke=et=>{var Kt,Qt;const Bt=et.target;Bt&&((Kt=pe.current)!=null&&Kt.contains(Bt)||(Qt=Te.current)!=null&&Qt.contains(Bt)||(F(!1),ee(!1)))};return window.addEventListener("pointerdown",Ke),()=>window.removeEventListener("pointerdown",Ke)},[ee]),l.jsx("div",{className:"window-no-drag pointer-events-none z-[60] flex w-full justify-start",children:l.jsxs("div",{className:"pointer-events-auto flex w-fit max-w-full flex-nowrap items-center justify-start gap-[9px]",children:[l.jsxs("div",{ref:pe,className:"relative inline-flex h-7 items-stretch rounded-md border border-border/60 bg-card/95",children:[l.jsx("button",{type:"button",onClick:()=>{We&&We.run()},disabled:!We||We.disabled,className:Dn(I,"h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-accent"),children:l.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[l.jsx("img",{src:(Rt=We==null?void 0:We.iconSrc)!=null?Rt:"/icon-commit.svg",alt:"","aria-hidden":"true",className:"h-4.5 w-4.5 shrink-0"}),l.jsx("span",{children:(Ut=We==null?void 0:We.label)!=null?Ut:"Commit"})]})}),l.jsx("button",{type:"button",onClick:()=>F(Ke=>!Ke),disabled:!We,"aria-haspopup":"menu","aria-expanded":ae,className:Dn(I,"h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-accent"),title:"More actions",children:l.jsx(Wx,{className:"h-3.5 w-3.5 shrink-0"})}),ae&&We?l.jsxs("div",{className:"absolute left-0 top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border/60 bg-card p-1",children:[l.jsxs("button",{type:"button",onClick:()=>{F(!1),Ye(!0)},disabled:!fe,className:Dn(I,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!fe&&"text-muted-foreground opacity-50"),children:[l.jsx("img",{src:"/icon-commit.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),n?"Committing...":"Commit"]}),l.jsxs("button",{type:"button",onClick:()=>{F(!1),g==null||g()},disabled:!G,className:Dn(I,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!G&&"text-muted-foreground opacity-50"),children:[l.jsx("img",{src:"/icon-pushBranch.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),u?"Pushing...":T]}),l.jsxs("button",{type:"button",onClick:()=>{F(!1),b==null||b(k.map(Ke=>({branchName:Ke.branchName,targetSha:Ke.targetSha})))},disabled:!_e,className:Dn(I,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!_e&&"text-muted-foreground opacity-50"),title:j,children:[l.jsx("img",{src:"/icon-pushSelected.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),He]}),l.jsxs("button",{type:"button",onClick:()=>{F(!1),x==null||x()},disabled:!Se,className:Dn(I,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!Se&&"text-muted-foreground opacity-50"),children:[l.jsx("img",{src:"/icon-pushAll.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),"Push all"]}),l.jsxs("button",{type:"button",onClick:()=>{F(!1),y==null||y()},disabled:!Ne,className:Dn(I,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!Ne&&"text-muted-foreground opacity-50"),children:[l.jsx("img",{src:"/icon-stash.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),a?"Stashing...":"Stash"]})]}):null]}),l.jsx("div",{className:"flex w-fit flex-nowrap items-center gap-[9px]",children:l.jsxs("button",{type:"button",onClick:()=>se(!0),disabled:h,className:Dn(I,"pointer-events-auto relative z-10 bg-background"),children:[l.jsx(Fx,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),h?"Creating...":"New Branch"]})}),t.length>1&&O.options.length>0&&O.targetBranch&&S?l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border/60 bg-card/95 px-2 py-1",children:[l.jsx("span",{className:"px-1 text-[11px] font-medium text-muted-foreground",children:"Merge to"}),O.options.map(Ke=>{const et=Ke.targetBranch===O.targetBranch;return l.jsx("button",{type:"button",onClick:()=>K(Ke.targetSha),className:Dn("rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors",et?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:Ke.targetBranch},`merge-${Ke.targetBranch}`)}),l.jsxs("button",{type:"button",onClick:()=>void S(O.sources,O.targetBranch),disabled:O.sources.length===0||D,className:"rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(yw,{className:"mr-1 inline h-3 w-3 shrink-0 align-text-bottom"}),D?"Merging...":"Confirm"]})]}):null,Y.length>0&&(le||re)?l.jsxs("div",{ref:Te,className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>ee(Ke=>!Ke),className:I,children:[l.jsx(hw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),Y.length," ",Y.length===1?"Worktree":"Worktrees"]}),V?l.jsx("div",{className:"absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border/60 bg-card p-2",children:Y.map(Ke=>{var et;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:Ke.path,children:Am(Ke,Q)?Kw(Ke.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(et=Ke.branchName)!=null?et:"detached"," • ",Ke.headSha.slice(0,7)]})]}),Am(Ke,Q)?l.jsxs("div",{className:"flex items-center gap-1",children:[le?l.jsx("button",{type:"button",onClick:()=>{ee(!1),le(Ke.path)},disabled:De||Ke.pathExists===!1,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,re?l.jsx("button",{type:"button",onClick:()=>void re(Ke.path,Ke.isPrunable),disabled:De,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:De?"...":"Remove"}):null]}):null]},Ke.path)})}):null]}):null]})})}function Zw({fadeIn:t,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=_.useState(!t);return _.useLayoutEffect(()=>{if(!t){p(!0);return}p(!1);let y=null;const g=requestAnimationFrame(()=>{y=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(g),y!=null&&cancelAnimationFrame(y)}},[t]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:t?"opacity 240ms ease-out":void 0},children:d})}function Jw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:y,labelTopPx:g,inverseZoomStyle:x,displayZoom:b,selectedVisibleCommitShas:S,normalizedSearchQuery:k,matchingNodeIds:j,focusedNode:E,renderNodes:T,shouldRenderNode:z,manuallyOpenedClumps:O,manuallyClosedClumps:D,defaultCollapsedClumps:K,leadByClusterKey:Y,clusterKeyByCommitId:Q,clusterCounts:V,commitIdsWithRenderedAncestry:ee,nodeWarnings:le,connectorParentShas:re,branchStartShas:De,branchOffNodeShas:Ye,crossBranchOutgoingShas:se,branchBaseCommitByName:me,branchStartAccentClass:P,connectorParentAccentClass:ae,commitCornerRadiusPx:F,lineStrokeWidth:pe,pointFormatter:Te,connectors:I,mergeConnectors:fe,cullConnectorPath:G,flushCameraReactTick:_e,setManuallyOpenedClumps:Se,setManuallyClosedClumps:Ne,onCommitCardClick:He,unpushedCommitShasSetByBranch:We,checkedOutHeadSha:ot}){const[Rt,Ut]=_.useState(new Set),Ke=_.useRef(null);_.useEffect(()=>{const ze=new Set;V.forEach((nt,Ze)=>{(O.has(Ze)||!K.has(Ze)&&!D.has(Ze))&&ze.add(Ze)});const ce=Ke.current;if(ce==null){Ke.current=ze;return}const tt=[];if(ze.forEach(nt=>{ce.has(nt)||tt.push(nt)}),tt.length>0){Ut(Ze=>{const Qe=new Set(Ze);return tt.forEach(ct=>Qe.add(ct)),Qe});const nt=window.setTimeout(()=>{Ut(Ze=>{const Qe=new Set(Ze);return tt.forEach(ct=>Qe.delete(ct)),Qe})},260);return Ke.current=ze,()=>{window.clearTimeout(nt)}}Ke.current=ze},[V,K,D,O]);const et=(ze,ce)=>{const tt=ce.zIndex-ze.zIndex;if(tt!==0)return tt;const nt=Math.min(ze.fromY,ze.toY),Ze=Math.min(ce.fromY,ce.toY),Qe=nt-Ze;return Qe!==0?Qe:ze.id.localeCompare(ce.id)},Bt=fe.filter(ze=>G(ze)).sort(et),Kt=I.filter(ze=>G(ze)).sort(et),Qt=T.filter(ze=>z(ze));return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:l.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[Qt.map(ze=>{var dt,qe,ht,yt,Et,at;const ce=Q.get(ze.commit.visualId),tt=ce?O.has(ce)||!K.has(ce)&&!D.has(ce):!1,nt=ce?Y.get(ce)===ze.commit.visualId:!1,Ze=ce!=null&&tt&&!nt&&Rt.has(ce),Qe=ce&&(dt=V.get(ce))!=null?dt:1,ct=ee.has(ze.commit.id),ft=(qe=le.get(ze.commit.id))!=null?qe:[],Ct=ft.length>0&&!ct,bt=S.includes(ze.commit.id),$t=ze.commit.id==="WORKING_TREE"||ze.commit.kind==="uncommitted",it=ze.commit.kind==="stash"||ze.commit.id.startsWith("STASH:"),H=/^STASH:(\d+)$/.exec(ze.commit.id),oe=H?`Stash:${H[1]}`:null,be=it?ze.commit.message.trim()&&ze.commit.message.trim()!=="git-visualizer"?ze.commit.message:"Stashed changes":ze.commit.message,J=ze.commit.kind==="branch-created"&&ze.commit.id.startsWith("BRANCH_HEAD:"),Me=$t||((yt=(ht=We.get(ze.commit.branchName))==null?void 0:ht.has(ze.commit.id))!=null?yt:!1),he=($t||ot!=null&&ze.commit.id===ot)&&!bt,Ie=he?"text-[#38BDF2]":bt?"text-[#158EFC]":"text-muted-foreground",Ee=he?{color:"#38BDF2"}:bt?{color:"#158EFC"}:void 0,gt=(Et=Ee==null?void 0:Ee.color)!=null?Et:"#8B8B8B";return l.jsxs(Zw,{fadeIn:Ze,dataCommitCard:"true",className:Dn("group absolute z-20 cursor-grab active:cursor-grabbing",k&&!j.has(ze.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",k&&j.has(ze.commit.id)?"scale-[1.01]":"",(E==null?void 0:E.commit.id)===ze.commit.id?"z-30":""),style:{left:ze.x,top:ze.y,width:ds,height:vl+Ls+4,overflow:"visible"},onClick:Mt=>He(Mt,ze),onPointerDown:Mt=>y(Mt,ze),children:[l.jsx("div",{className:"absolute left-0 w-full",style:{...x,top:`${g}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[l.jsx("div",{className:Dn("min-w-0 h-4 flex-1 text-sm font-medium leading-none",Ie,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Ee,children:it&&oe?oe:ze.commit.branchName?`${ze.commit.branchName}/${ze.commit.id.slice(0,7)}`:ze.commit.id.slice(0,7)}),nt&&Qe>1?l.jsx("button",{type:"button",onMouseDown:Mt=>{Mt.stopPropagation()},onClick:Mt=>{if(Mt.stopPropagation(),Mt.preventDefault(),!ce)return;!K.has(ce)?(Se(lt=>{if(!lt.has(ce))return lt;const kt=new Set(lt);return kt.delete(ce),kt}),Ne(lt=>{const kt=new Set(lt);return kt.has(ce)?kt.delete(ce):kt.add(ce),kt})):(Ne(lt=>{if(!lt.has(ce))return lt;const kt=new Set(lt);return kt.delete(ce),kt}),Se(lt=>{const kt=new Set(lt);return kt.has(ce)?kt.delete(ce):kt.add(ce),kt})),_e()},className:Dn("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",Ie),style:Ee,children:tt?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${Qe}`}):null]})}),l.jsx("div",{className:Dn("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",he&&!Me&&!it&&!J?"bg-[#EBF7FE]":bt&&!Me&&!it&&!J?"bg-[#E5F0FF]":Me||it||J?"bg-transparent":"bg-[#F5F5F5]",it||$t||J?"border-dashed":"",Ye.has(ze.commit.id)||De.has(ze.commit.id)||se.has(ze.commit.id)?P:re.has(ze.commit.id)?ae:((at=me.get(ze.commit.branchName))==null?void 0:at.id)===ze.commit.id?"border-amber-500":Ct?"border-red-500":"",(k&&j.has(ze.commit.id)&&!d,"")),style:{top:0,borderWidth:(E==null?void 0:E.commit.id)===ze.commit.id?`${it||$t||J?pe*(2/1.5):pe}px`:`${it||$t||J?pe*(2/1.5):pe}px`,borderColor:(E==null?void 0:E.commit.id)===ze.commit.id?gt:he?"#38BDF2":bt?"#158EFC":Wh,borderTopLeftRadius:0,borderTopRightRadius:`${F}px`,borderBottomRightRadius:`${F}px`,borderBottomLeftRadius:`${F}px`},children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:Dn("max-w-[38rem] select-text text-sm font-medium leading-tight tracking-tight text-muted-foreground",Ie,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),"data-selectable-text":"true",style:Ee,children:nt&&tt?be:nt&&Qe>1?`${be} +${Qe-1}`:be}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:Ct?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:ft.join(`
`),children:"Broken ancestry"}):null})]}),b>.5&&!it?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:Dn("select-text text-sm font-medium",Ie),"data-selectable-text":"true",style:Ee,children:["@",ze.commit.author]}),l.jsx("div",{className:Dn("select-text text-sm font-medium",Ie),"data-selectable-text":"true",style:Ee,children:new Date(ze.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null]})})]},ze.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[Bt.map(ze=>{const{fromX:ce,fromY:tt,toX:nt,toY:Ze}=ze,Qe=vy(ce,tt,nt,Ze,Te,ze.fromFace,ze.toFace);return l.jsx("path",{d:Qe,fill:"none",stroke:Wh,strokeWidth:pe,strokeLinecap:"round",strokeLinejoin:"round"},ze.id)}),Kt.map(ze=>{const{fromX:ce,fromY:tt,toX:nt,toY:Ze}=ze,Qe=vy(ce,tt,nt,Ze,Te,ze.fromFace,ze.toFace);return l.jsx("path",{d:Qe,fill:"none",stroke:Wh,strokeWidth:pe,strokeLinecap:"round",strokeLinejoin:"round"},ze.id)})]})]})})})}function eS({isOpen:t,onClose:n,visibleBounds:i,renderedNodeCount:a,totalNodeCount:c,renderedMergeConnectorCount:u,totalMergeConnectorCount:d,renderedConnectorCount:h,totalConnectorCount:p,mapGridCullViewportInsetScreenPx:y,debugRows:g,branchDebugRows:x,connectorDecisions:b}){return l.jsx(l.Fragment,{children:t?l.jsxs("div",{className:"absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:n,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${y}px screen/side): ${i?`${(i.right-i.left).toFixed(0)} x ${(i.bottom-i.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${a} / ${c}`,`Rendered merge connectors: ${u} / ${d}`,`Rendered connectors: ${h} / ${p}`,"",...g,...x,"",...b.map(S=>`${S.rendered?"rendered":"skipped"} [${S.kind}] ${S.parent.slice(0,7)} -> ${S.child.slice(0,7)} (${S.reason})`)].join(`
`)})})]}):null})}function tS({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:y,deleteInProgress:g,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:S,newBranchCreateMode:k,onNewBranchNameChange:j,onNewBranchCreateModeChange:E,onNewBranchDialogClose:T,onNewBranchConfirm:z,selectedCommitCanCreateBranch:O,currentCheckedOutCommitCanCreateBranch:D,createBranchFromNodeInProgress:K}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:a,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:Y=>Y.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:Y=>i(Y.target.value),onKeyDown:Y=>{(Y.metaKey||Y.ctrlKey)&&Y.key==="Enter"&&(Y.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(_w,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),u?"Committing...":"Commit"]})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:p,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:Y=>Y.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(Y=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:Y},Y))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:y,disabled:x===0||g,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:g?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:T,children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",onClick:Y=>Y.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>E("from-selected-node"),className:Dn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",k==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>E("new-root"),className:Dn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",k==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),k==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:S,onChange:Y=>j(Y.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:T,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:z,disabled:!S.trim()||K||k==="from-selected-node"&&!O&&!D,className:Dn("inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:[l.jsx(Fx,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),K?"Creating...":"Create"]})]})]})}):null]})}const Ey="/icon-GitOrientation.svg";function nS({orientation:t,onOrientationChange:n}){const i=t==="horizontal"?"vertical":"horizontal";return l.jsxs("button",{type:"button",onClick:()=>n(i),className:Dn("window-no-drag inline-flex h-7 items-center gap-1.5 rounded-md border border-border/60 bg-card pl-1.5 pr-2 py-1 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"),"aria-label":`Rotate view to ${i}`,title:"Rotate View",children:[l.jsx("span",{className:"relative size-4 shrink-0",children:l.jsx("span",{"aria-hidden":"true",className:Dn("absolute inset-0 bg-muted-foreground transition-transform duration-300 ease-in-out",t==="vertical"&&"rotate-[-90deg]"),style:{WebkitMaskImage:`url(${Ey})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${Ey})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}})}),l.jsx("span",{className:"whitespace-nowrap text-[12px] font-normal leading-none text-muted-foreground",children:"Rotate View"})]})}function sS({query:t,onQueryChange:n,resultCount:i,resultIndex:a,onJump:c}){const u=_.useRef(null);return l.jsxs("div",{className:"window-no-drag flex h-7 w-[20rem] shrink-0 items-center gap-2 rounded-full border border-border/60 bg-card/95 pl-2.5 pr-1",children:[l.jsx(Cw,{className:"h-3.5 w-3.5 shrink-0 text-muted-foreground"}),l.jsx("input",{ref:u,value:t,onChange:d=>n(d.target.value),onBlur:d=>{const h=d.relatedTarget;h!=null&&h.closest('button, a, input, textarea, select, [contenteditable="true"]')||window.setTimeout(()=>{var p;(p=u.current)==null||p.focus()},0)},onKeyDown:d=>{d.key==="Enter"&&(d.preventDefault(),c(1))},placeholder:"Search",className:"min-w-0 flex-1 bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"}),i!=null&&i>0?l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-[11px] font-medium tabular-nums text-foreground",children:[(a!=null?a:0)+1,"/",i]}),l.jsx("button",{type:"button",onClick:()=>c(-1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Previous search result",title:"Previous result",children:l.jsx(cw,{className:"h-4 w-4 shrink-0"})}),l.jsx("button",{type:"button",onClick:()=>c(1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Next search result",title:"Next result",children:l.jsx(Wx,{className:"h-4 w-4 shrink-0"})})]}):null]})}function oS({mapPadHostRef:t,transformLayerRef:n}){const i=_.useRef({x:0,y:0}),a=_.useRef(ac),c=_.useRef({panX:0,panY:0,zoom:ac}),u=_.useRef(null),d=_.useRef(ac),h=_.useRef(null),[p,y]=_.useState(!1),[g,x]=_.useState(ac),[b,S]=_.useState(0),k=_.useRef(null),j=_.useRef(0),E=_.useCallback(()=>{const ee=t.current;if(!ee)return null;const le=ee.getBoundingClientRect(),re=getComputedStyle(ee),De=Number.parseFloat(re.borderLeftWidth)||0,Ye=Number.parseFloat(re.borderTopWidth)||0,se=Number.parseFloat(re.paddingLeft)||kd,me=Number.parseFloat(re.paddingTop)||kd;return{x:le.left+De+se,y:le.top+Ye+me}},[t]),T=_.useCallback(()=>{k.current!=null&&(window.clearTimeout(k.current),k.current=null),_.startTransition(()=>{S(ee=>ee+1)}),j.current=performance.now()},[]),z=_.useCallback((ee,le,re)=>{const De=c.current;c.current={panX:ee,panY:le,zoom:re};const Ye=n.current;if(Ye&&(Ye.style.transform=`translate3d(${ee}px, ${le}px, 0) scale(${re/ua})`),Math.abs(d.current-re)>Gh&&(d.current=re,x(re)),Math.abs(re-De.zoom)>Gh){T();return}const P=performance.now()-j.current;if(P>=wy){T();return}k.current!=null&&window.clearTimeout(k.current),k.current=window.setTimeout(()=>{k.current=null,T()},wy-P)},[T,n]),O=_.useRef(null),D=_.useCallback(()=>{u.current!=null||!O.current||(u.current=window.requestAnimationFrame(O.current))},[]),K=_.useCallback(()=>{y(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,y(!1)},90)},[]),Y=_.useCallback((ee,le,re)=>{i.current={x:ee,y:le},a.current=re,K(),D()},[K,D]);O.current=()=>{u.current=null;const ee=c.current,le=i.current.x,re=i.current.y,De=a.current,Ye=Math.abs(le-ee.panX)<=Cy?le:ee.panX+(le-ee.panX)*Sy,se=Math.abs(re-ee.panY)<=Cy?re:ee.panY+(re-ee.panY)*Sy,me=Math.abs(De-ee.zoom)<=Gh?De:ee.zoom+(De-ee.zoom)*Pw;z(Ye,se,me),Ye!==le||se!==re||me!==De?O.current&&(u.current=window.requestAnimationFrame(O.current)):T()};const Q=_.useCallback((ee,le,re)=>{const De=Vw(re),Ye=i.current.x,se=i.current.y,me=a.current,P=E();if(!P){Y(Ye,se,De);return}const ae=ee-P.x,F=le-P.y,pe=me/ua,Te=De/ua,I=(ae-Ye)/pe,fe=(F-se)/pe,G=ae-I*Te,_e=F-fe*Te;i.current={x:G,y:_e},a.current=De,z(G,_e,De)},[z,E]),V=_.useCallback(ee=>{if(ee.preventDefault(),ee.ctrlKey||ee.metaKey){const le=Math.exp(-ee.deltaY*$w);Q(ee.clientX,ee.clientY,a.current*le);return}Y(i.current.x-ee.deltaX,i.current.y-ee.deltaY,a.current)},[Y,Q]);return _.useLayoutEffect(()=>(z(0,0,ac),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),k.current!=null&&(window.clearTimeout(k.current),k.current=null)}),[z]),_.useLayoutEffect(()=>{const ee=n.current;if(!ee)return;const le=c.current;ee.style.transform=`translate3d(${le.panX}px, ${le.panY}px, 0) scale(${le.zoom/ua})`}),{isCameraMoving:p,renderedZoom:g,cameraRenderTick:b,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:E,flushCameraReactTick:T,syncCamera:Y,handleWheel:V}}function iS(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function aS({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=_.useRef(null),h=_.useRef(!1),p=_.useRef([]),[y,g]=_.useState(!1),[x,b]=_.useState(null),[S,k]=_.useState([]),[j,E]=_.useState(null),T=_.useCallback(O=>{const D=t.current,K=i();if(!D||!K)return[];const Y=D.getBoundingClientRect(),Q=n.current.zoom/ua;if(Q<=0)return[];const V=[],ee=O.left,le=O.left+O.width,re=O.top,De=O.top+O.height;for(const Ye of a){if(!c(Ye))continue;const se=K.x+n.current.panX+Ye.x*Q-Y.left,me=K.y+n.current.panY+Ye.y*Q-Y.top,P=se+ds*Q,ae=me+(vl+Ls)*Q;!(P<ee||se>le||ae<re||me>De)&&V.push(Ye.commit.id)}return V},[i,a,n,t,c]),z=_.useCallback(O=>{if(O.button!==0)return;const D=O.target;if(D!=null&&D.closest("[data-commit-card]")||D!=null&&D.closest("button, a, input, textarea, select"))return;const K=t.current;if(!K)return;O.preventDefault();const Y=K.getBoundingClientRect(),Q=O.clientX-Y.left,V=O.clientY-Y.top;d.current={startX:Q,startY:V,currentX:Q,currentY:V,additive:O.metaKey||O.ctrlKey},h.current=!1,p.current=O.metaKey||O.ctrlKey?S:[],g(!0),b({left:Q,top:V,width:0,height:0})},[t,S]);return _.useEffect(()=>{const O=K=>{var re;const Y=d.current;if(!Y)return;const Q=t.current;if(!Q)return;const V=Q.getBoundingClientRect();Y.currentX=K.clientX-V.left,Y.currentY=K.clientY-V.top,!h.current&&(Math.abs(Y.currentX-Y.startX)>2||Math.abs(Y.currentY-Y.startY)>2)&&(h.current=!0);const ee=iS(Y);b(ee);const le=T(ee);k(Y.additive?Array.from(new Set([...p.current,...le])):Array.from(new Set(le))),Y.additive||E((re=le[le.length-1])!=null?re:null)},D=()=>{if(d.current){const K=h.current;d.current=null,h.current=!1,g(!1),b(null),K||(k([]),E(null));return}u()};return window.addEventListener("mousemove",O),window.addEventListener("mouseup",D),()=>{window.removeEventListener("mousemove",O),window.removeEventListener("mouseup",D)}},[T,u,t]),{isMarqueeSelecting:y,marqueeRect:x,selectedCommitShas:S,setSelectedCommitShas:k,mergeTargetCommitSha:j,setMergeTargetCommitSha:E,startMarqueeDrag:z}}function rS(){return l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center",children:l.jsx("div",{role:"status","aria-label":"Loading commits",className:"h-5 w-5 rounded-full border-2 border-border border-t-muted-foreground animate-spin"})})}function Ty({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:y,staleBranches:g=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:S,mapTopInsetPx:k=0,onMergeRefsIntoBranch:j,mergeInProgress:E=!1,onPushAllBranches:T,onPushCurrentBranch:z,onPushCommitTargets:O,pushInProgress:D=!1,onDeleteSelection:K,deleteInProgress:Y=!1,worktrees:Q=[],currentRepoPath:V,onRemoveWorktree:ee,removeWorktreeInProgress:le=!1,onSwitchToWorktree:re,onStashLocalChanges:De,stashInProgress:Ye=!1,stashDisabled:se=!1,onCommitLocalChanges:me,commitInProgress:P=!1,commitDisabled:ae=!1,onStageAllChanges:F,stageInProgress:pe=!1,onCreateBranchFromNode:Te,onCreateRootBranch:I,createBranchFromNodeInProgress:fe=!1,isDebugOpen:G=!1,onDebugClose:_e,orientation:Se="horizontal",branchCommitPreviews:Ne={},branchParentByName:He={},branchUniqueAheadCounts:We={},gridSearchQuery:ot="",gridSearchJumpToken:Rt=0,gridSearchJumpDirection:Ut=1,gridFocusSha:Ke=null,checkedOutRef:et=null,onGridSearchResultCountChange:Bt,onGridSearchResultIndexChange:Kt,onGridSearchFocusChange:Qt,onInteractionChange:ze,manuallyOpenedClumps:ce,manuallyClosedClumps:tt,setManuallyOpenedClumps:nt,setManuallyClosedClumps:Ze,gridHudProps:Qe}){var fn,Ps,Wt,as,Ss,gs,fo,Zs,Hs,Js,ho,B,X,q;const ct=_.useRef(null),ft=_.useRef(null),Ct=_.useRef(null),bt=_.useRef(null),$t=_.useRef(void 0),it=_.useRef(void 0),H=_.useRef(void 0),oe=_.useRef(0),be=_.useRef(null),[J,Me]=_.useState(!1),[we,he]=_.useState(!1),[Ie,Ee]=_.useState(""),[gt,dt]=_.useState(!1),[qe,ht]=_.useState(!1),[yt,Et]=_.useState(""),[at,Mt]=_.useState("from-selected-node"),[Vt,lt]=_.useState(()=>new Set),[kt,mt]=_.useState(()=>new Set),[Lt,on]=_.useState({}),un=_.useRef(!1),ln=_.useRef(null),Rn=_.useRef(null),Bn=ce!=null?ce:Vt,bn=tt!=null?tt:kt,dn=nt!=null?nt:lt,qn=Ze!=null?Ze:mt,[Xt,En]=_.useState(null),[st,Tt]=_.useState(null),{isCameraMoving:Ln,renderedZoom:ks,cameraRenderTick:hs,renderedCameraRef:ss,interactionIdleTimeoutRef:Do,getTransformLayerOriginScreen:os,flushCameraReactTick:Ws,syncCamera:wo,handleWheel:zs}=oS({mapPadHostRef:ft,transformLayerRef:Ct}),jn=_.useMemo(()=>fp(t,d,Ne,He),[t,d,Ne,He]),js=_.useMemo(()=>Mc({lanes:jn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:Ne,branchParentByName:He,branchUniqueAheadCounts:We,manuallyOpenedClumps:Bn,manuallyClosedClumps:bn,isDebugOpen:G,gridSearchQuery:ot,gridFocusSha:Ke,checkedOutRef:et!=null?et:null,orientation:Se,nodePositionOverrides:Lt}),[jn,t,n,i,a,d,Ne,He,We,Bn,bn,G,ot,Ke,(fn=et==null?void 0:et.headSha)!=null?fn:null,(Ps=et==null?void 0:et.branchName)!=null?Ps:null,Se,Lt]),vn=_.useMemo(()=>Mc({lanes:jn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:Ne,branchParentByName:He,branchUniqueAheadCounts:We,manuallyOpenedClumps:Bn,manuallyClosedClumps:bn,isDebugOpen:G,gridSearchQuery:ot,gridFocusSha:Ke,checkedOutRef:et!=null?et:null,orientation:Se,nodePositionOverrides:Lt}),[jn,t,n,i,a,d,Ne,He,We,Bn,bn,G,ot,Ke,(Wt=et==null?void 0:et.headSha)!=null?Wt:null,(as=et==null?void 0:et.branchName)!=null?as:null,Se,Lt]),{allCommits:Yn,clusterKeyByCommitId:ao,leadByClusterKey:Fs,clusterCounts:us,matchingNodes:is,matchingNodeIds:Xs,normalizedSearchQuery:wn,focusedNode:pn,defaultCollapsedClumps:en,renderNodes:Un,visibleNodesBySha:Ho,contentWidth:Uo,contentHeight:li,connectors:Gs,mergeConnectors:Jo,connectorDecisions:bs,nodeWarnings:So,commitIdsWithRenderedAncestry:Mn,connectorParentShas:go,branchStartShas:ms,branchOffNodeShas:Kn,crossBranchOutgoingShas:bi,branchBaseCommitByName:vs,pointFormatter:vi}=js,Yt=!!wn,ws=ks/ua,As=_.useMemo(()=>({transform:`scale(${1/ws})`,transformOrigin:"top left",width:`${100*ws}%`,height:`${100*ws}%`}),[ws]),Ro=-(20/ws),wi=_.useMemo(()=>{const R=new Map;for(const ne of Un)R.set(ne.commit.visualId,ne);return R},[Un]),Vo=_.useMemo(()=>Xw(Un,Ro),[Un,Ro]),Ns=R=>{var N;const ne=R.commit.id,w=R.commit.visualId;if(Yt&&Xs.has(ne)||(pn==null?void 0:pn.commit.id)===ne||Xt===null)return!0;if(!Xt.has(w))return!1;const C=ao.get(w);return C&&((N=us.get(C))!=null?N:1)>1&&(Bn.has(C)||!en.has(C)&&!bn.has(C)),!0},ci=1.5/ws,$s=Hw/ws,Sn="border-slate-400/70",Co="border-blue-500",Yo=_.useMemo(()=>new Map(t.map(R=>[R.name,R])),[t]),ps=(Ss=et==null?void 0:et.hasUncommittedChanges)!=null?Ss:!1;_.useMemo(()=>new Set(t.filter(R=>R.commitsAhead===0&&!R.name.startsWith("*")).map(R=>R.name)),[t]);const qs=_.useMemo(()=>{var ne,w;const R=new Map;for(const C of Un){const N=(ne=R.get(C.commit.id))!=null?ne:new Set;N.add(C.commit.branchName),R.set(C.commit.id,N)}for(const C of i){const N=(w=R.get(C.fullSha))!=null?w:new Set;C.branch&&N.add(C.branch),R.set(C.fullSha,N)}return R},[Un,i,d]),an=_.useMemo(()=>new Map(Object.entries(c).map(([R,ne])=>[R,new Set(ne)])),[c]),Ks=_.useCallback(()=>{Do.current,Ws()},[Ws,Do]),{isMarqueeSelecting:Is,marqueeRect:ro,selectedCommitShas:Ms,setSelectedCommitShas:Bo,mergeTargetCommitSha:Qs,setMergeTargetCommitSha:ko,startMarqueeDrag:yo}=aS({scrollContainerRef:ct,renderedCameraRef:ss,getTransformLayerOriginScreen:os,renderNodes:Un,shouldRenderNode:Ns,onPointerReleaseNoMarquee:Ks}),On=_.useMemo(()=>new Set(Un.map(R=>R.commit.id)),[Un]),Tn=_.useMemo(()=>Ms.filter(R=>On.has(R)),[Ms,On]),Vn=_.useCallback((R,ne)=>{var N;if(!ne)return!1;if(((N=Ne[R])!=null?N:[]).some(L=>xi(L.fullSha,ne)||xi(L.sha,ne)))return!0;const C=Yo.get(R);return!!(C!=null&&C.headSha&&xi(C.headSha,ne))},[Ne,Yo]),Wn=(gs=et==null?void 0:et.branchName)!=null?gs:null,lo=(fo=et==null?void 0:et.headSha)!=null?fo:null,Ds=Wn==null,Es=_.useMemo(()=>{if(!Ke)return null;const R=Un.filter(ne=>ne.commit.id===Ke);return R.length===0?null:R.length===1||!pn?R[0]:R.reduce((ne,w)=>{const C=(ne.x-pn.x)**2+(ne.y-pn.y)**2;return(w.x-pn.x)**2+(w.y-pn.y)**2<C?w:ne})},[Ke,Un,pn]),Wo=_.useCallback((R,ne,w)=>{for(const C of Q){if(!qh(C,V))continue;if(C.branchName){if(C.branchName===R&&xi(C.headSha,ne))return C;continue}if(!xi(C.headSha,ne)&&!xi(C.headSha,w))continue;if(C.parentSha&&Vn(R,C.parentSha)||Vn(R,C.headSha))return C;const N=Yo.get(R);if(N&&xi(N.headSha,C.headSha)||R===d&&i.some(L=>xi(L.fullSha,C.headSha)))return C}return null},[Q,V,Vn,Yo,d,i]),co=_.useCallback(R=>{for(const ne of Q)if(qh(ne,V)&&ne.branchName===R)return ne;return null},[Q,V]),_s=_.useCallback((R,ne)=>{for(const w of Q)if(qh(w,V)&&(xi(w.headSha,R)||xi(w.headSha,ne)))return w;return null},[Q,V]),Ts=_.useCallback(R=>{var ne;return Array.from((ne=qs.get(R))!=null?ne:[])},[qs]),Lo=_.useMemo(()=>{var N,L,W,te;const R=new Map;for(const Ae of Tn){const xe=Ts(Ae);if(xe.length===0)continue;const Le=(N=xe.find(Je=>Je!==d))!=null?N:xe[0],Xe=Tn.filter(Je=>Je!==Ae).filter(Je=>!new Set(Ts(Je)).has(Le));R.set(Le,{targetSha:Ae,targetBranch:Le,sourceRefs:Xe})}const ne=Array.from(R.values()),w=Qs?ne.find(Ae=>{var xe;return Ae.targetSha===Qs||Ae.targetBranch===((xe=Ts(Qs)[0])!=null?xe:"")}):null,C=(L=w!=null?w:ne[ne.length-1])!=null?L:null;return{options:ne,selected:C,targetBranch:(W=C==null?void 0:C.targetBranch)!=null?W:null,sources:(te=C==null?void 0:C.sourceRefs)!=null?te:[]}},[Tn,Ts,d,Qs]),xo=_.useMemo(()=>{const R=[...Wn===d?[{name:d,headSha:lo!=null?lo:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(ne=>!ne.name.startsWith("*")&&ne.unpushedCommits>0&&ne.remoteSyncStatus!=="on-github").map(ne=>[ne.name,ne]);return new Map(R)},[t,Wn,lo,d,a.length]),uo=_.useMemo(()=>{const R=C=>{var L;const N=Ts(C).filter(W=>xo.has(W));return N.length===0?null:N.length===1?N[0]:Wn&&N.includes(Wn)?Wn:(L=N.find(W=>W!==d))!=null?L:N[0]},ne=C=>{var N;return C===d?a.map(L=>{var W,te;return{fullSha:L.fullSha,sha:L.sha,parentSha:(W=L.parentSha)!=null?W:null,message:L.message,author:L.author,date:L.date,kind:(te=L.kind)!=null?te:"commit"}}):(N=Ne[C])!=null?N:[]},w=new Map;for(const C of Tn){const N=R(C);if(!N)continue;const L=xo.get(N);if(!L)continue;const W=ne(N).slice(0,L.unpushedCommits),te=W.findIndex(xe=>xe.fullSha===C);if(te===-1)continue;const Ae=w.get(N);(!Ae||te<Ae.targetIndex)&&w.set(N,{branchName:N,targetSha:C,targetIndex:te,commitCount:W.length-te})}return Array.from(w.values())},[Tn,Ts,xo,Wn,d,a,Ne]),Oo=_.useMemo(()=>Array.from(new Set(Tn.map(R=>/^STASH:(\d+)$/.exec(R)).filter(R=>!!R).map(R=>parseInt(R[1],10)))).sort((R,ne)=>R-ne),[Tn]),zo=Tn.includes("WORKING_TREE"),Si=(zo?1:0)+Oo.length,ta=[...zo?["Uncommitted changes"]:[],...Oo.map(R=>`Stash ${R+1}`)],Ii=xo.size,Pi=!Ds&&!!Wn&&xo.has(Wn),ei=Wn?`Push ${Wn}`:"Push current branch",Nt=uo.length===1?uo[0].commitCount>1?`Push ${uo[0].commitCount} commits on ${uo[0].branchName}`:`Push ${uo[0].targetSha.slice(0,7)} on ${uo[0].branchName}`:`Push ${uo.length} selected ranges`,Ci=_.useCallback(R=>{const ne=R.target;ne!=null&&ne.closest('.window-no-drag, input, textarea, select, button, [contenteditable="true"]')||dp().startDragging()},[]);_.useEffect(()=>{const R=Ln||Is;bt.current!==R&&(bt.current=R,ze==null||ze(R))},[Ln,Is,ze]),_.useEffect(()=>{const R=wn?is.length:null;$t.current!==R&&($t.current=R,Bt==null||Bt(R))},[is.length,wn,Bt]),_.useEffect(()=>{const R=wn&&Ke?(()=>{const ne=is.findIndex(w=>w.commit.id===Ke);return ne>=0?ne:null})():null;it.current!==R&&(it.current=R,Kt==null||Kt(R))},[Ke,is,wn,Kt]);const ki=_.useMemo(()=>{var Ae,xe,Le,Xe,Je,pt;if(!wn)return null;const R=wn,ne=t.map(_t=>_t.name),w=ne.find(_t=>_t.toLowerCase()===R),C=w!=null?w:ne.find(_t=>_t.toLowerCase().startsWith(R)),L=C!=null?C:ne.find(_t=>_t.toLowerCase().includes(R));if(!L)return null;const W=(Ae=t.find(_t=>_t.name===L))!=null?Ae:null;if(W!=null&&W.headSha)return W.headSha;const te=(xe=Ne[L])!=null?xe:[];return te.length>0?(Xe=(Le=te[0])==null?void 0:Le.fullSha)!=null?Xe:null:L===d&&(pt=(Je=i[0])==null?void 0:Je.fullSha)!=null?pt:null},[wn,t,Ne,d,i]);_.useEffect(()=>{var C,N,L;if(!wn){if(oe.current=Rt,H.current===null)return;H.current=null,Qt==null||Qt(null);return}if(Rt<=0||oe.current===Rt)return;oe.current=Rt;let R;const ne=Ke?is.findIndex(W=>W.commit.id===Ke):-1,w=is.length>0?ne<0?0:(ne+Ut+is.length)%is.length:-1;R=(L=(N=(C=is[w])==null?void 0:C.commit.id)!=null?N:ki)!=null?L:null,H.current!==R&&(H.current=R,Qt==null||Qt(R))},[is,wn,Qt,ki,Rt,Ut]),_.useLayoutEffect(()=>{if(!Ke)return;const R=`${Ke}:${Rt}`;if(be.current===R)return;const ne=ct.current,w=Es;if(!ne||!w)return;const C=os();if(!C)return;const N=ne.getBoundingClientRect(),L=ss.current.zoom,W=L/ua,te=w.x+ds/2,Ae=w.y+vl+Ls/2,xe=N.left+N.width/2,Le=N.top+N.height/2;wo(xe-C.x-te*W,Le-C.y-Ae*W,L),be.current=R},[Ke,Rt,Es,os,wo,ss]);const Hi=(Js=(Hs=st==null?void 0:st.width)!=null?Hs:(Zs=ct.current)==null?void 0:Zs.clientWidth)!=null?Js:0,ui=(X=(B=st==null?void 0:st.height)!=null?B:(ho=ct.current)==null?void 0:ho.clientHeight)!=null?X:0,bo=Hi>0&&ui>0?ky(Hi,ui,ss.current,{innerPaddingPx:kd}):null,Fo=bo!=null?jy(bo,ss.current.zoom):null,di=R=>{if(!Fo)return!0;const{fromX:ne,fromY:w,toX:C,toY:N}=R;return Fw(ne,w,C,N,Fo,R.fromFace,R.toFace)};_.useLayoutEffect(()=>{var W;const R=ct.current;if(!R||R.clientWidth<=0||R.clientHeight<=0)return;const ne=R.clientWidth,w=R.clientHeight;Tt(te=>(te==null?void 0:te.width)===ne&&(te==null?void 0:te.height)===w?te:{width:ne,height:w});const C=ky(ne,w,ss.current,{innerPaddingPx:kd});if(!C){En(te=>te===null?te:null);return}const N=jy(C,ss.current.zoom),L=Gw(Vo,N,wi,Ro);for(const te of Un){const Ae=ao.get(te.commit.visualId);if(!Ae||((W=us.get(Ae))!=null?W:1)<=1)continue;(Bn.has(Ae)||!en.has(Ae)&&!bn.has(Ae))&&L.add(te.commit.visualId)}En(te=>Yw(te,L)?te:L)},[ks,Rt,Ke,Ln,hs,Bn,bn,en,ao,us,Un,st,Vo,wi,Ro]),_.useLayoutEffect(()=>{const R=ct.current;if(!R)return;const ne=()=>{const C=R.clientWidth,N=R.clientHeight;C<=0||N<=0||Tt(L=>(L==null?void 0:L.width)===C&&(L==null?void 0:L.height)===N?L:{width:C,height:N})};ne();const w=new ResizeObserver(ne);return w.observe(R),()=>w.disconnect()},[Yn.length]);const M=Un.filter(R=>Ns(R)).length,U=Jo.filter(R=>di(R)).length,ue=Gs.filter(R=>di(R)).length,ke=_.useCallback((R,ne)=>{if(un.current){R.preventDefault(),R.stopPropagation();return}R.stopPropagation();const w=ne.commit.id;if(R.shiftKey?(Bo(W=>W.includes(w)?W.filter(te=>te!==w):[...W,w]),ko(w)):(Bo(W=>W.includes(w)?[]:[w]),ko(W=>W===w?null:w)),!(R.metaKey||R.ctrlKey||R.detail>=2)||w==="WORKING_TREE")return;const N=w.length>=40?w.slice(0,7):w;let L=null;if(ne.commit.branchName?(L=Wo(ne.commit.branchName,w,N),L||(L=co(ne.commit.branchName))):L=_s(w,N),L&&re){re(L.path);return}h==null||h({commitSha:w})},[_s,Wo,co,h,re]),Ve=_.useCallback((R,ne)=>{var te,Ae,xe,Le,Xe;if(R.button!==0)return;const w=R.target;if(w!=null&&w.closest('[data-selectable-text="true"]')||w!=null&&w.closest("button, a, input, textarea, select"))return;R.stopPropagation(),R.preventDefault(),un.current=!1,R.currentTarget.setPointerCapture(R.pointerId);const C=(te=Lt[ne.commit.visualId])!=null?te:Lt[ne.commit.id];ln.current={nodeId:ne.commit.visualId,startX:R.clientX,startY:R.clientY,baseX:(Ae=C==null?void 0:C.x)!=null?Ae:ne.x,baseY:(xe=C==null?void 0:C.y)!=null?xe:ne.y,moved:!1,pendingX:(Le=C==null?void 0:C.x)!=null?Le:ne.x,pendingY:(Xe=C==null?void 0:C.y)!=null?Xe:ne.y};const N=()=>{Rn.current=null;const Je=ln.current;Je&&on(pt=>({...pt,[Je.nodeId]:{x:Je.pendingX,y:Je.pendingY}}))},L=Je=>{const pt=ln.current;if(!pt)return;const _t=ss.current.zoom/ua,ut=_t>0?1/_t:1,rt=(Je.clientX-pt.startX)*ut,kn=(Je.clientY-pt.startY)*ut;(Math.abs(rt)>2||Math.abs(kn)>2)&&(pt.moved=!0),pt.moved&&(un.current=!0),pt.pendingX=pt.baseX+rt,pt.pendingY=pt.baseY+kn,Rn.current==null&&(Rn.current=window.requestAnimationFrame(N))},W=()=>{window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",W),window.removeEventListener("pointercancel",W),Rn.current!=null&&(window.cancelAnimationFrame(Rn.current),Rn.current=null,N());try{R.currentTarget.releasePointerCapture(R.pointerId)}catch{}const Je=ln.current;ln.current=null,Je&&window.setTimeout(()=>{un.current=!1},0)};window.addEventListener("pointermove",L),window.addEventListener("pointerup",W),window.addEventListener("pointercancel",W)},[Lt]),Fe=_.useCallback(async()=>{if(!me)return;await me(Ie)&&(he(!1),Ee(""))},[me,Ie]),Pt=_.useCallback(async()=>{K&&(await K({branchNames:[],discardUncommittedChanges:zo,stashIndices:Oo}),dt(!1),Bo([]),ko(null))},[K,zo,Oo]),It=_.useCallback(async()=>{var ne;const R=yt.trim();if(R){if(at==="new-root"){if(!I)return;await I(R)}else{if(!Te)return;const w=Tn.length===1?Tn[0]:(ne=et==null?void 0:et.headSha)!=null?ne:null;if(!w||!(w==="WORKING_TREE"||w.startsWith("STASH:")||w===(et==null?void 0:et.headSha)))return;await Te(w,R)}ht(!1),Et(""),Mt("from-selected-node"),Bo([]),ko(null)}},[et==null?void 0:et.headSha,at,yt,Te,I,Tn]),Gt=!!(et!=null&&et.headSha),qt=Tn.length===0&&Gt,nn=Tn.length===1&&(Tn[0]==="WORKING_TREE"||Tn[0].startsWith("STASH:"))||qt,_n=!!I;return _.useEffect(()=>{if(qe){if(!nn&&!qt&&_n){Mt("new-root");return}(nn||qt)&&Mt("from-selected-node")}},[_n,qt,qe,nn]),_.useEffect(()=>{const R=ne=>{if(!K||gt||Tn.length===0)return;const w=ne.target;w!=null&&w.closest('input, textarea, select, button, [contenteditable="true"]')||ne.key!=="Delete"&&ne.key!=="Backspace"||(ne.preventDefault(),dt(!0))};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[gt,K,Tn.length]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-card",children:[l.jsx(eS,{isOpen:G,onClose:()=>_e==null?void 0:_e(),visibleBounds:Fo,renderedNodeCount:M,totalNodeCount:Un.length,renderedMergeConnectorCount:U,totalMergeConnectorCount:Jo.length,renderedConnectorCount:ue,totalConnectorCount:Gs.length,mapGridCullViewportInsetScreenPx:Iw,debugRows:vn.debugRows,branchDebugRows:vn.branchDebugRows,connectorDecisions:bs}),Qe?l.jsxs("header",{"data-tauri-drag-region":!0,onPointerDown:Ci,className:"window-drag-region pointer-events-none absolute inset-x-0 top-0 z-[70] flex w-full select-none",children:[l.jsxs("div",{className:"pointer-events-auto ml-auto flex w-full max-w-[calc(100vw-116px)] min-w-0 items-start justify-between gap-3 p-2.25 select-none",children:[l.jsx("div",{className:"flex min-w-0 flex-nowrap items-center justify-start gap-3 overflow-visible",children:l.jsx(Qw,{selectedVisibleCommitShas:Tn,commitInProgress:P,commitDisabled:ae,stageInProgress:pe,stashInProgress:Ye,stashDisabled:se,pushInProgress:D,hasUncommittedChanges:ps,createBranchFromNodeInProgress:fe,onCommitLocalChanges:me,onStageAllChanges:F?()=>void F():void 0,onStashLocalChanges:De,onPushCurrentBranch:z,onPushAllBranches:T,onPushCommitTargets:O,onMergeRefsIntoBranch:j,selectedPushTargets:uo,selectedPushLabel:Nt,canPushCurrentBranch:Pi,pushCurrentBranchLabel:ei,pushableRemoteBranchCount:Ii,selectedCommitTargetOption:Lo,mergeInProgress:E,mergeTargetCommitSha:Qs,setMergeTargetCommitSha:ko,worktrees:Q,currentRepoPath:V,worktreeMenuOpen:J,setWorktreeMenuOpen:Me,onSwitchToWorktree:re,onRemoveWorktree:ee,removeWorktreeInProgress:le,setCommitDialogOpen:he,setNewBranchDialogOpen:ht})}),l.jsx("div",{className:"flex min-w-0 shrink-0 items-center justify-end gap-2",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto flex items-center gap-2",children:[l.jsx(sS,{query:Qe.gridSearchQuery,onQueryChange:Qe.setGridSearchQuery,resultCount:Qe.gridSearchResultCount,resultIndex:Qe.gridSearchResultIndex,onJump:R=>{Qe.setGridSearchJumpDirection(R),Qe.setGridSearchJumpToken(ne=>ne+1)}}),l.jsx(nS,{orientation:Qe.mapGridOrientation,onOrientationChange:Qe.setMapGridOrientation})]})})]}),l.jsxs("div",{className:"pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5",children:[(q=Qe.githubAuthStatus)!=null&&q.ghAvailable&&!Qe.githubAuthStatus.authenticated?l.jsx("button",{onClick:Qe.onGitHubAuthSetup,disabled:Qe.githubAuthLoading,className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Qe.githubAuthLoading?"Connecting GitHub...":"Connect GitHub"}):null,Qe.githubAuthStatus&&!Qe.githubAuthStatus.ghAvailable?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",children:"Install `gh` for private PR data"})]}):null,Qe.githubAuthMessage?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",title:Qe.githubAuthMessage,children:Qe.githubAuthMessage})]}):null,Qe.commitSwitchFeedback?l.jsxs("div",{className:`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200 ${Qe.isCommitSwitchFeedbackVisible?"opacity-100":"opacity-0"} ${Qe.commitSwitchFeedback.kind==="error"?"border-red-200/80 bg-red-50/95 text-red-700 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-300":"border-blue-200/80 bg-blue-50/95 text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-300"}`,title:Qe.commitSwitchFeedback.message,children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium opacity-70",children:Qe.commitSwitchFeedback.kind==="error"?"Alert":"Update"}),l.jsx("p",{className:"truncate text-[11px]",children:Qe.commitSwitchFeedback.message})]}):null]})]}):null,x||Yn.length===0?l.jsx(rS,{}):l.jsx(Jw,{scrollContainerRef:ct,mapPadHostRef:ft,transformLayerRef:Ct,isMarqueeSelecting:Is,contentWidth:Uo,contentHeight:li,isCameraMoving:Ln,onWheel:zs,onMouseDown:yo,onNodePointerDown:Ve,labelTopPx:Ro,inverseZoomStyle:As,displayZoom:ws,selectedVisibleCommitShas:Tn,normalizedSearchQuery:wn,matchingNodeIds:Xs,focusedNode:Es,renderNodes:Un,shouldRenderNode:Ns,manuallyOpenedClumps:Bn,manuallyClosedClumps:bn,defaultCollapsedClumps:en,leadByClusterKey:Fs,clusterKeyByCommitId:ao,clusterCounts:us,commitIdsWithRenderedAncestry:Mn,nodeWarnings:So,connectorParentShas:go,branchStartShas:ms,branchOffNodeShas:Kn,crossBranchOutgoingShas:bi,branchBaseCommitByName:vs,branchStartAccentClass:Co,connectorParentAccentClass:Sn,commitCornerRadiusPx:$s,lineStrokeWidth:ci,pointFormatter:vi,connectors:Gs,mergeConnectors:Jo,cullConnectorPath:di,flushCameraReactTick:Ws,setManuallyOpenedClumps:dn,setManuallyClosedClumps:qn,onCommitCardClick:ke,unpushedCommitShasSetByBranch:an,checkedOutHeadSha:lo,orientation:Se}),ro&&Is?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:ro.left,top:ro.top,width:ro.width,height:ro.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(tS,{commitDialogOpen:we,commitMessageDraft:Ie,onCommitMessageDraftChange:Ee,onCommitDialogClose:()=>he(!1),onCommitConfirm:()=>void Fe(),commitInProgress:P,deleteConfirmOpen:gt,deleteSelectionItems:ta,onDeleteConfirmClose:()=>dt(!1),onDeleteConfirm:()=>void Pt(),deleteInProgress:Y,deletableSelectionCount:Si,newBranchDialogOpen:qe,newBranchName:yt,newBranchCreateMode:at,onNewBranchNameChange:Et,onNewBranchCreateModeChange:Mt,onNewBranchDialogClose:()=>ht(!1),onNewBranchConfirm:()=>void It(),selectedCommitCanCreateBranch:nn,currentCheckedOutCommitCanCreateBranch:qt,createBranchFromNodeInProgress:fe})]})}function lS({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y={},branchCommitPreviews:g={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:S="",gridSearchJumpToken:k=0,gridSearchJumpDirection:j=1,gridFocusSha:E=null,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:z,onGridSearchFocusChange:O,view:D="time",isLoading:K=!1,scrollRequest:Y,focusedErrorBranch:Q,checkedOutRef:V=null,mapTopInsetPx:ee=0,onMergeRefsIntoBranch:le,mergeInProgress:re=!1,onPushAllBranches:De,onPushCurrentBranch:Ye,onPushCommitTargets:se,pushInProgress:me=!1,onDeleteSelection:P,worktrees:ae=[],currentRepoPath:F,onRemoveWorktree:pe,removeWorktreeInProgress:Te=!1,onSwitchToWorktree:I,onStashLocalChanges:fe,stashInProgress:G=!1,stashDisabled:_e=!1,onCommitLocalChanges:Se,commitInProgress:Ne=!1,commitDisabled:He=!1,onStageAllChanges:We,stageInProgress:ot=!1,onCreateBranchFromNode:Rt,onCreateRootBranch:Ut,createBranchFromNodeInProgress:Ke=!1,onMoveNodeBackToBranch:et,isDebugOpen:Bt=!1,onDebugClose:Kt,orientation:Qt="horizontal",onInteractionChange:ze,manuallyOpenedClumps:ce,manuallyClosedClumps:tt,setManuallyOpenedClumps:nt,setManuallyClosedClumps:Ze,layoutModel:Qe,gridHudProps:ct}){const ft=new Set(u.map(H=>H.branchName)),Ct=14*864e5,bt=Date.now();function $t(H){return ft.has(H.name)||bt-new Date(H.lastCommitDate).getTime()<=Ct}const it=t.filter(H=>H.status==="stale"&&$t(H)).sort((H,oe)=>new Date(oe.lastCommitDate).getTime()-new Date(H.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:D==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(Ty,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:S,gridSearchJumpToken:k,gridSearchJumpDirection:j,gridFocusSha:E,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:z,onGridSearchFocusChange:O,staleBranches:it,isLoading:K,scrollRequest:Y,focusedErrorBranch:Q,checkedOutRef:V,mapTopInsetPx:ee,onMergeRefsIntoBranch:le,mergeInProgress:re,onPushAllBranches:De,onPushCurrentBranch:Ye,onPushCommitTargets:se,pushInProgress:me,onDeleteSelection:P,worktrees:ae,currentRepoPath:F,onRemoveWorktree:pe,removeWorktreeInProgress:Te,onSwitchToWorktree:I,onStashLocalChanges:fe,stashInProgress:G,stashDisabled:_e,onCommitLocalChanges:Se,commitInProgress:Ne,commitDisabled:He,onStageAllChanges:We,stageInProgress:ot,onCreateBranchFromNode:Rt,onCreateRootBranch:Ut,createBranchFromNodeInProgress:Ke,onMoveNodeBackToBranch:et,isDebugOpen:Bt,onDebugClose:Kt,orientation:Qt,onInteractionChange:ze,manuallyOpenedClumps:ce,manuallyClosedClumps:tt,setManuallyOpenedClumps:nt,setManuallyClosedClumps:Ze,layoutModel:Qe,gridHudProps:ct})}):D==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(Ty,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:S,gridSearchJumpToken:k,gridSearchJumpDirection:j,gridFocusSha:E,checkedOutRef:V,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:z,onGridSearchFocusChange:O,onInteractionChange:ze,manuallyOpenedClumps:ce,manuallyClosedClumps:tt,setManuallyOpenedClumps:nt,setManuallyClosedClumps:Ze,layoutModel:Qe,isDebugOpen:Bt,onDebugClose:Kt,orientation:Qt,gridHudProps:ct})}):null})}const Zi=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function Ay(t,n){var a;const i=[...(a=t.childShas)!=null?a:[]];return i.includes(n)||i.push(n),{...t,childShas:i}}function Kh(t,n,i,a,c,u){if(!i)return{directCommits:t,branchCommitPreviews:n};const d=t.map(p=>Zi(p.fullSha,i)||Zi(p.sha,i)?Ay(p,a):p),h=Object.fromEntries(Object.entries(n).map(([p,y])=>[p,y.map(g=>(p===c||p===u)&&(Zi(g.fullSha,i)||Zi(g.sha,i))?Ay(g,a):g)]));return{directCommits:d,branchCommitPreviews:h}}function cS(t,n,i,a){if(!t)return null;const c=d=>Zi(d,t);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(y=>c(y.fullSha)||c(y.sha)))return d;return null}function uS(t,n,i,a,c,u,d=!1){var De,Ye,se,me,P;const h=t.baseSha,p=`STASH:${t.index}`,y=`Stash ${t.index+1}`,g=(Ye=(De=i[0])==null?void 0:De.fullSha)!=null?Ye:null,x=[{name:u,headSha:g!=null?g:"",isDefault:!0},...n.map(ae=>({name:ae.name,headSha:ae.headSha,isDefault:!1}))],b=h?x.filter(ae=>Zi(ae.headSha,h)):[],S=cS(h,i,a,u),k=S?x.find(ae=>ae.name===S):void 0,j=(me=(se=b.find(ae=>ae.isDefault))!=null?se:b[0])!=null?me:k,E=!!(j&&h&&Zi(j.headSha,h)),T=j&&!j.isDefault?n.find(ae=>ae.name===j.name):void 0,z=(()=>{var F;if(!h)return null;const ae=i.find(pe=>Zi(pe.fullSha,h)||Zi(pe.sha,h));if(ae!=null&&ae.date)return ae.date;if(T&&!d){const pe=((F=a[T.name])!=null?F:[]).find(Te=>Zi(Te.fullSha,h)||Zi(Te.sha,h));if(pe!=null&&pe.date)return pe.date}return null})(),O=z?new Date(z).getTime():Number.NaN,D=Date.now(),K=Number.isFinite(O)?Math.max(D,O+1+t.index):D+t.index,Y=new Date(K).toISOString(),Q=t.message.trim(),V={fullSha:p,sha:y,parentSha:h,clusterKey:null,childShas:[],message:Q||y,author:"You",date:Y,kind:"stash"};if(E&&T){const ae=Kh(i,a,h,p,T.name,u);return{branches:n.map(pe=>pe.name===T.name?{...pe,commitsAhead:pe.commitsAhead+1,unpushedCommits:pe.unpushedCommits+1,lastCommitDate:Y,headSha:p}:pe),directCommits:ae.directCommits,branchCommitPreviews:{...ae.branchCommitPreviews,[T.name]:[V,...a[T.name]||[]]},branchUniqueAheadCounts:{...c,[T.name]:Math.max(0,(P=Object.prototype.hasOwnProperty.call(c,T.name)?c[T.name]:T.commitsAhead)!=null?P:0)+1}}}if(E&&(j!=null&&j.isDefault)&&!d){const ae=Kh(i,a,h,p,u,u);return{branches:n,directCommits:ae.directCommits,branchCommitPreviews:{...ae.branchCommitPreviews,[u]:[V,...a[u]||[]]},branchUniqueAheadCounts:c}}const ee=`*Stash:${t.index}`,le={name:ee,commitsAhead:1,commitsBehind:0,lastCommitDate:Y,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:p,divergedFromSha:h!=null?h:void 0,parentBranch:(j==null?void 0:j.name)||u},re=Kh(i,a,h,p,ee,u);return{branches:[le,...n],directCommits:re.directCommits,branchCommitPreviews:{...re.branchCommitPreviews,[ee]:[V]},branchUniqueAheadCounts:{...c,[ee]:1}}}function Jx(t,n,i,a,c,u,d=!1){const h=[...t].sort((y,g)=>y.index-g.index);let p={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const y of h)p=uS(y,p.branches,p.directCommits,p.branchCommitPreviews,p.branchUniqueAheadCounts,u,d);return p}function dS({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:y,manuallyOpenedClumps:g=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:S=null,orientation:k="horizontal"}){var Q,V;const j=Jx(y,t,i,u,h,c,(Q=p==null?void 0:p.hasUncommittedChanges)!=null?Q:!1);let E=j.branches,T=j.directCommits,z=j.branchCommitPreviews,O=j.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const ee=p.headSha||p.parentSha||null,le=(F,pe)=>!F||!pe?!1:F===pe||F.startsWith(pe)||pe.startsWith(F),re=p.branchName?E.find(F=>F.name===p.branchName):void 0,De=(()=>{var pe;if(!ee)return null;const F=T.find(Te=>le(Te.fullSha,ee)||le(Te.sha,ee));if(F!=null&&F.date)return F.date;if(re){const Te=((pe=z[re.name])!=null?pe:[]).find(I=>le(I.fullSha,ee)||le(I.sha,ee));if(Te!=null&&Te.date)return Te.date}return null})(),Ye=De?new Date(De).getTime():Number.NaN,se=Date.now(),me=Number.isFinite(Ye)?Math.max(se,Ye+1):se,P=new Date(me).toISOString(),ae={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ee,message:"Local uncommitted changes",author:"You",date:P,kind:"uncommitted"};re?(E=E.map(F=>F.name===re.name?{...F,commitsAhead:F.commitsAhead+1,unpushedCommits:F.unpushedCommits+1,lastCommitDate:P,headSha:"WORKING_TREE"}:F),z={...z,[re.name]:[ae,...z[re.name]||[]]},O={...O,[re.name]:Math.max(0,(V=Object.prototype.hasOwnProperty.call(O,re.name)?O[re.name]:re.commitsAhead)!=null?V:0)+1}):z={...z,[c]:[ae,...z[c]||[]]}}const D={...d};D[c]=null;const K=fp(E,c,z,D),Y=Mc({lanes:K,branches:E,mergeNodes:n,directCommits:T,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:z,branchParentByName:D,branchUniqueAheadCounts:O,manuallyOpenedClumps:g,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:S,checkedOutRef:p,orientation:k});return{enrichedBranches:E,enrichedBranchCommitPreviews:z,enrichedBranchUniqueAheadCounts:O,enrichedDirectCommits:T,sharedGridLayoutModel:Y}}const Ny="git-visualizer:expanded-projects",Dy="git-visualizer:expanded-branches",Ry="git-visualizer:project-order";function fS(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const y=(u=a.get(h))!=null?u:[];y.push(d.name),a.set(h,y)}const c=(d,h)=>{var g,x,b,S;const p=new Date((x=(g=i.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((S=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?S:0).getTime();return p-y};for(const[d,h]of a.entries())h.sort(c);return a}function hS(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var g,x,b,S;const p=new Date((x=(g=a.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((S=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?S:0).getTime();return p-y},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function mS(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const y of d){const g=[...h,y];if(y===i.branchName){for(const x of g)c.add(x);return!0}if(u((p=n.get(y))!=null?p:[],g))return!0}return!1};return u(t,[]),c}function Nm({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:g,showCommits:x,getMergeTargetLabels:b,sourceBranchName:S,clusterKeyByCommitId:k,isGridClusterOpen:j,onToggleGridCluster:E,onSelectCommit:T,onSelectBranch:z}){var I,fe;if(g.has(t)||!a.get(t))return null;const D=(I=u.get(t))!=null?I:[],K=D.length>0,Y=_.useMemo(()=>{var G;return[...(G=c[t])!=null?G:[]]},[c,t]),Q=x&&Y.length>0,V=x,ee=K||Q,le=h.has(t),re=V?Y:[],De=le&&re.length>0,Ye=y===t,se=new Set(g);se.add(t);const me="top-[-0.2rem] h-4.5 w-[10px]",P="rounded-bl-[7px]",ae="left-[0.65rem]",F=new Map,pe=[];for(const G of D){const _e=d.get(G);if(_e){const Se=re.findIndex(Ne=>xi(Ne.fullSha,_e)||xi(Ne.sha,_e));if(Se>=0){const Ne=(fe=F.get(Se))!=null?fe:[];Ne.push(G),F.set(Se,Ne);continue}}pe.push(G)}const Te=_.useMemo(()=>{if(!x||re.length===0)return[];const G=[];let _e=[],Se=null;const Ne=()=>{if(_e.length===0)return;const He=_e[_e.length-1],We=`sidebar-single-${t}-${He.fullSha}`;G.push({key:Se!=null?Se:We,commits:_e,count:_e.length,lead:He}),_e=[],Se=null};return re.forEach(He=>{var ot;const We=(ot=k.get(`${t}:${He.fullSha}`))!=null?ot:null;if(_e.length===0){_e=[He],Se=We;return}if(We===Se){_e.push(He);return}Ne(),_e=[He],Se=We}),Ne(),G},[t,x,re,k]);return l.jsxs("li",{className:Dn("relative",n>0?"pl-4":"pl-0",n===0&&!i?le?"mb-5":"mb-1":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:Dn("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",P,ae,me)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:Dn("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.5rem]",ae)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("div",{className:Dn("group flex min-w-0 flex-1 items-center gap-0 rounded-md px-2 h-7 text-left text-sm font-normal transition-colors hover:bg-accent",Ye?"text-foreground":"text-muted-foreground hover:text-foreground"),role:ee?"button":void 0,tabIndex:ee?0:void 0,onClick:()=>{ee?p(t):z==null||z(t)},onKeyDown:G=>{ee&&(G.key==="Enter"||G.key===" ")&&(G.preventDefault(),p(t))},children:[ee?l.jsx("button",{type:"button","aria-label":`${le?"Collapse":"Expand"} ${t}`,onPointerDown:G=>{G.preventDefault()},onClick:G=>{G.preventDefault(),G.stopPropagation(),p(t)},className:"group/chevron flex h-6 w-6 -ml-2 shrink-0 items-center justify-center rounded-sm p-0 text-[10px] leading-none text-muted-foreground transition-colors hover:bg-accent",children:l.jsx(rw,{"aria-hidden":"true",className:Dn("h-3.5 w-3.5 shrink-0 transition-transform",le?"rotate-90":"")})}):null,l.jsx("span",{className:"min-w-0 flex-1 break-words",children:t})]})}),De?l.jsx("ul",{className:"relative space-y-1 pl-4",children:Te.map(G=>{const _e=G.count>1&&!j(G.key);return(_e?[G.lead]:G.commits).map(Ne=>{var ot;const He=re.findIndex(Rt=>Rt.fullSha===Ne.fullSha),We=b(Ne.fullSha,S!=null?S:t);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>T==null?void 0:T(Ne.fullSha),className:"min-w-0 flex-1 rounded-md px-2 py-1 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:Ne.message,children:[l.jsx("span",{className:"block truncate",children:Ne.message}),We.length>0?l.jsx("span",{className:"mt-0 block space-y-0.5",children:We.map(Rt=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:Rt})]},`${Ne.fullSha}:${Rt}`))}):null]}),G.count>1&&Ne.fullSha===G.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${G.lead.fullSha}`,onClick:()=>E(G.key,`${t}:${G.lead.fullSha}`),className:Dn("shrink-0 rounded-md px-2 py-1 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",_e?"":"min-w-[2ch] text-center"),children:_e?`+${Math.max(1,G.count-1)}`:"−"}):null]}),(ot=F.get(He))!=null&&ot.length?l.jsx("ul",{className:"relative mb-1.75 space-y-0",children:F.get(He).map((Rt,Ut,Ke)=>l.jsx(Nm,{branchName:Rt,depth:n+1,isLast:Ut===Ke.length-1&&pe.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:se,showCommits:x,getMergeTargetLabels:b,sourceBranchName:Rt,clusterKeyByCommitId:k,isGridClusterOpen:j,onToggleGridCluster:E,onSelectCommit:T,onSelectBranch:z},Rt))}):null]},`${t}:${Ne.fullSha}`)})})}):null,K&&le&&pe.length>0?l.jsx("ul",{className:"relative mb-1.75 space-y-1.75",children:pe.map((G,_e)=>l.jsx(Nm,{branchName:G,depth:n+1,isLast:_e===pe.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:se,showCommits:x,getMergeTargetLabels:b,sourceBranchName:G,clusterKeyByCommitId:k,isGridClusterOpen:j,onToggleGridCluster:E,onSelectCommit:T,onSelectBranch:z},G))}):null]})}function pS({open:t}){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-4 w-4 shrink-0 transition-opacity",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t?l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.7031 19H5.97457C4.96341 19 4.11131 18.2453 3.9892 17.2415L2.77269 7.24152C2.62773 6.04996 3.5577 5 4.75805 5H7C7.64911 5 8.28071 5.21053 8.8 5.6L9.2 5.9C9.71929 6.28947 10.3509 6.5 11 6.5H16.2369C17.2445 6.5 18.0947 7.24955 18.2211 8.2492L18.4938 10.4062",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M5.21532 12.0419C5.42789 11.1385 6.23405 10.5 7.16215 10.5H19.8105C20.7133 10.5 21.38 11.3419 21.1733 12.2207L19.9409 17.4581C19.7284 18.3615 18.9222 19 17.9941 19H6.10333C4.81363 19 3.8611 17.7973 4.1565 16.5419L5.21532 12.0419Z",stroke:"currentColor",strokeWidth:"1.5"})]}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 7C4 5.89543 4.89543 5 6 5H9C9.64911 5 10.2807 5.21053 10.8 5.6L11.2 5.9C11.7193 6.28947 12.3509 6.5 13 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 10.5L12.4211 10.5L20 10.5",stroke:"currentColor",strokeWidth:"1.5"})]})})}function _S({projects:t,activeProjectPath:n,onSelectProject:i,onAddProject:a,onRemoveProject:c,onRevealProjectInFinder:u,projectLoading:d=!1,projectError:h=null,checkedOutRef:p,manuallyOpenedClumpsByProject:y={},manuallyClosedClumpsByProject:g={},manuallyOpenedClumps:x,manuallyClosedClumps:b,setManuallyOpenedClumps:S,setManuallyClosedClumps:k,gridLayoutModel:j,onSelectCommit:E,onSelectBranch:T,showCommits:z,onToggleShowCommits:O,className:D,style:K,collapsed:Y=!1}){var be;const Q=_.useRef(null),V=_.useRef(null),[ee,le]=_.useState(()=>{if(typeof window>"u")return new Set;try{const J=window.localStorage.getItem(Ny);if(J){const Me=JSON.parse(J);if(Array.isArray(Me)){const we=new Set;for(const he of Me)typeof he=="string"&&we.add(he);return we}}}catch{}return new Set(t.map(J=>J.path))}),[re,De]=_.useState({}),[Ye,se]=_.useState(()=>new Set),[me,P]=_.useState(()=>new Set),[ae,F]=_.useState(null),pe=x!=null?x:Ye,Te=b!=null?b:me,I=S!=null?S:se,fe=k!=null?k:P,[G,_e]=_.useState(null),[Se,Ne]=_.useState(null),[He,We]=_.useState(null),[ot,Rt]=_.useState(null),[Ut,Ke]=_.useState(null),[et,Bt]=_.useState(null),Kt=_.useRef(!1),Qt=_.useRef(null),ze=_.useRef(null),ce=J=>{try{window.localStorage.setItem(Ny,JSON.stringify(Array.from(J)))}catch{}},tt=J=>{try{const Me=Object.fromEntries(Object.entries(J).map(([we,he])=>[we,Array.from(he)]));window.localStorage.setItem(Dy,JSON.stringify(Me))}catch{}};_.useEffect(()=>{ce(ee)},[ee]),_.useEffect(()=>{try{const J=window.localStorage.getItem(Dy);if(!J)return;const Me=JSON.parse(J);if(!Me||typeof Me!="object")return;const we={};for(const[he,Ie]of Object.entries(Me)){if(!Array.isArray(Ie))continue;const Ee=new Set;for(const gt of Ie)typeof gt=="string"&&Ee.add(gt);we[he]=Ee}De(we)}catch{}},[]),_.useEffect(()=>{tt(re)},[re]),_.useEffect(()=>{try{const J=window.localStorage.getItem(Ry);if(!J)return;const Me=JSON.parse(J);if(!Array.isArray(Me))return;const we=[];for(const he of Me)typeof he=="string"&&t.some(Ie=>Ie.path===he)&&we.push(he);We(we)}catch{}},[]),_.useEffect(()=>{if(He)try{window.localStorage.setItem(Ry,JSON.stringify(He))}catch{}},[He]);const nt=_.useMemo(()=>{if(!He||He.length===0)return t;const J=new Map(t.map(we=>[we.path,we])),Me=[];for(const we of He){const he=J.get(we);he&&(Me.push(he),J.delete(we))}for(const we of t)J.has(we.path)&&Me.push(we);return Me},[He,t]),Ze=_.useMemo(()=>{if(!Ut)return nt;const J=nt.find(Ie=>Ie.path===Ut);if(!J)return nt;const Me=nt.filter(Ie=>Ie.path!==Ut);if(et==null)return Me;const we=[...Me],he=Math.max(0,Math.min(et,we.length));return we.splice(he,0,J),we},[et,Ut,nt]),Qe=_.useCallback(J=>{We(J)},[]),ct=_.useCallback(()=>{Rt(null),Ke(null),Bt(null)},[]);_.useEffect(()=>{if(!ot)return;const J=we=>{const he=Qt.current;!he||!he.active||Math.abs(we.clientX-he.startX)<=4&&Math.abs(we.clientY-he.startY)<=4||ze.current==null&&(ze.current=window.requestAnimationFrame(()=>{var qe,ht;ze.current=null;const Ie=Qt.current;if(!Ie||!Ie.active)return;(Math.abs(we.clientX-Ie.startX)>4||Math.abs(we.clientY-Ie.startY)>4)&&(Ie.moved=!0,Ke(Ie.path));const gt=Array.from((ht=(qe=V.current)==null?void 0:qe.querySelectorAll("[data-project-path]"))!=null?ht:[]).filter(yt=>yt.dataset.projectPath&&yt.dataset.projectPath!==Ie.path);let dt=gt.length;if(gt.length>0)for(let yt=0;yt<gt.length;yt+=1){const Et=gt[yt].getBoundingClientRect(),at=Et.top+Et.height/2;if(we.clientY<at){dt=yt;break}}Bt(dt)}))},Me=()=>{const we=Qt.current;if(Qt.current=null,ze.current!=null&&(window.cancelAnimationFrame(ze.current),ze.current=null),!we){ct();return}if(!we.moved){ct();return}Kt.current=!0;const he=nt.map(qe=>qe.path);if(he.indexOf(we.path)<0){ct();return}const Ee=et;if(Ee==null){ct();return}const gt=he.filter(qe=>qe!==we.path),dt=Math.max(0,Math.min(Ee,gt.length));gt.splice(dt,0,we.path),Qe(gt),ct(),window.requestAnimationFrame(()=>{Kt.current=!1,F(null)})};return window.addEventListener("pointermove",J),window.addEventListener("pointerup",Me),window.addEventListener("pointercancel",Me),()=>{window.removeEventListener("pointermove",J),window.removeEventListener("pointerup",Me),window.removeEventListener("pointercancel",Me)}},[ct,Qe,ot,et,nt]);const ft=_.useCallback((J,Me)=>{J.button===0&&(J.preventDefault(),J.stopPropagation(),Qt.current={active:!0,path:Me,startX:J.clientX,startY:J.clientY,moved:!1},Rt(Me),Ke(null),Bt(null),J.currentTarget.setPointerCapture(J.pointerId))},[]),Ct=J=>J instanceof HTMLElement?!J.closest('button[aria-label^="Project actions for"], button[aria-label^="Expand"], button[aria-label^="Collapse"]'):!1,bt=(be=j==null?void 0:j.defaultCollapsedClumps)!=null?be:new Set,$t=J=>pe.has(J)||!bt.has(J)&&!Te.has(J),it=(J,Me)=>{const we=Q.current,he=V.current;if(we&&he){const Ie=`[data-clump-toggle-id="${Me}"]`,Ee=we.querySelector(Ie);if(Ee){const gt=Ee.getBoundingClientRect().top-he.getBoundingClientRect().top;Ne({id:Me,topWithinScrollBody:gt})}else Ne(null)}else Ne(null);_e(Me),I(Ie=>{const Ee=new Set(Ie),gt=$t(J);return fe(dt=>{const qe=new Set(dt);return gt?(Ee.delete(J),qe.add(J)):(qe.delete(J),Ee.add(J)),qe}),Ee})};_.useLayoutEffect(()=>{if(!G)return;const J=Q.current,Me=V.current;if(!J||!Me)return;const we=`[data-clump-toggle-id="${G}"]`,he=J.querySelector(we);if(he){if((Se==null?void 0:Se.id)===G){const Ee=he.getBoundingClientRect().top-Me.getBoundingClientRect().top-Se.topWithinScrollBody;Number.isFinite(Ee)&&Ee!==0&&(Me.scrollTop+=Ee)}he.focus({preventScroll:!0}),_e(null),Ne(null)}},[pe,Te,G,Se]);const H=(J,Me)=>{De(we=>{var gt;const he=(gt=we[J])!=null?gt:new Set,Ie=new Set(he);Ie.has(Me)?Ie.delete(Me):Ie.add(Me);const Ee={...we,[J]:Ie};return tt(Ee),Ee})};_.useEffect(()=>{if(ae==null)return;const J=()=>F(null);return window.addEventListener("pointerdown",J),()=>window.removeEventListener("pointerdown",J)},[ae]);const oe=_.useMemo(()=>{var Me,we,he,Ie,Ee,gt,dt,qe,ht,yt,Et,at,Mt,Vt;const J=new Map;for(const lt of t){const kt=dS({branches:lt.branches,mergeNodes:lt.mergeNodes,directCommits:lt.directCommits,unpushedDirectCommits:lt.unpushedDirectCommits,defaultBranch:lt.defaultBranch,branchCommitPreviews:lt.branchCommitPreviews,branchUniqueAheadCounts:lt.branchUniqueAheadCounts,checkedOutRef:lt.checkedOutRef,stashes:lt.stashes,manuallyOpenedClumps:(Me=y[lt.path])!=null?Me:new Set,manuallyClosedClumps:(we=g[lt.path])!=null?we:new Set}),mt=kt.enrichedBranches.some(Tt=>Tt.name===lt.defaultBranch)?kt.enrichedBranches:[{name:lt.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...kt.enrichedBranches],Lt=new Map(kt.sharedGridLayoutModel.nodes.map(Tt=>[Tt.commit.visualId,Tt.row])),on={};for(const Tt of kt.sharedGridLayoutModel.allCommits){const Ln=(he=on[Tt.branchName])!=null?he:[];Ln.push({fullSha:Tt.id,sha:Tt.id.slice(0,7),parentSha:(Ie=Tt.parentSha)!=null?Ie:null,message:Tt.message,author:Tt.author,date:Tt.date,kind:(Ee=Tt.kind)!=null?Ee:"commit"}),on[Tt.branchName]=Ln}for(const Tt of Object.keys(on))on[Tt]=on[Tt].sort((Ln,ks)=>{var Ws,wo;const hs=new Date(Ln.date).getTime(),ss=new Date(ks.date).getTime();if(hs!==ss)return hs-ss;const Do=(Ws=Lt.get(`${Tt}:${Ln.fullSha}`))!=null?Ws:Number.MAX_SAFE_INTEGER,os=(wo=Lt.get(`${Tt}:${ks.fullSha}`))!=null?wo:Number.MAX_SAFE_INTEGER;return Do!==os?Do-os:Ln.fullSha.localeCompare(ks.fullSha)});const un=(gt=kt.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?gt:new Map,ln=(Tt,Ln)=>{const ks=un.get(Ln);if(!ks)return[];for(const[hs,ss]of ks.entries())if(xi(Tt,hs))return Array.from(ss).sort();return[]},Rn=fS(mt,lt.defaultBranch),Bn=hS(mt,lt.defaultBranch,Rn),bn=new Map(mt.map(Tt=>[Tt.name,Tt])),dn=new Map;for(const Tt of mt){const Ln=(qe=(dt=kt.sharedGridLayoutModel.firstBranchCommitByName.get(Tt.name))==null?void 0:dt.parentSha)!=null?qe:null,ks=Ln!=null?Ln:null;dn.set(Tt.name,ks)}const qn=(ht=kt.sharedGridLayoutModel.defaultCollapsedClumps)!=null?ht:new Set,Xt=(yt=y[lt.path])!=null?yt:new Set,En=(Et=g[lt.path])!=null?Et:new Set,st=Tt=>Xt.has(Tt)||!qn.has(Tt)&&!En.has(Tt);J.set(lt.path,{rootBranchNames:Bn,branchByName:bn,branchCommitPreviewsFromLayout:on,childNamesByParent:Rn,branchAnchorShaByName:dn,checkedOutBranchName:(Mt=(at=lt.checkedOutRef)==null?void 0:at.branchName)!=null?Mt:null,clusterKeyByCommitId:(Vt=kt.sharedGridLayoutModel.clusterKeyByCommitId)!=null?Vt:new Map,getMergeTargetLabels:ln,isGridClusterOpen:st})}return J},[n,g,y,t]);return l.jsxs("aside",{ref:Q,"aria-label":"Dense branch sidebar",className:Dn("pointer-events-auto relative h-full select-none overflow-hidden",D),style:K,children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"absolute inset-x-0 top-0 z-80 flex h-12 items-start px-2.5 pt-2.25",children:l.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[l.jsx("button",{type:"button",onClick:a,disabled:d,"aria-label":"Add Repo",className:"window-no-drag flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:l.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-4.5 w-4.5 shrink-0",children:[l.jsx("path",{d:"M19.5 10V8C19.5 6.89543 18.6046 6 17.5 6H12.5C11.8509 6 11.2193 5.78947 10.7 5.4L10.3 5.1C9.78071 4.71053 9.14911 4.5 8.5 4.5H5.5C4.39543 4.5 3.5 5.39543 3.5 6.5V16.5C3.5 17.6046 4.39543 18.5 5.5 18.5H11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M18 17V14M18 17H15M18 17H21M18 17V20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M3.5 10L11.9211 10L19.5 10",stroke:"currentColor",strokeWidth:"1.5"})]})}),l.jsx("button",{type:"button",onClick:O,"aria-hidden":"true",tabIndex:-1,className:"hidden",children:z?"Hide Commits":"Show Commits"})]})}),l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[h&&l.jsx("div",{className:"px-2.5 pb-2",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:h})}),l.jsx("div",{ref:V,className:Dn("min-h-0 flex-1 space-y-6 overflow-y-auto px-2.5",Y?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:Ze.map(J=>{var gt,dt,qe;const Me=J.path===n,we=ee.has(J.path),he=(gt=J.treeLoaded)!=null?gt:J.branches.length>0,Ie=oe.get(J.path),Ee=(dt=re[J.path])!=null?dt:Ie?mS(Ie.rootBranchNames,Ie.childNamesByParent,p,J.defaultBranch):new Set;return l.jsxs("div",{"data-project-path":J.path,className:Dn("relative z-0",we&&Ie?"mb-5":"mb-1"),children:[et!==null&&Ut!==J.path&&((qe=Ze[et])==null?void 0:qe.path)===J.path?l.jsx("div",{className:"h-px","aria-hidden":"true",children:l.jsx("div",{className:"mx-1 h-px bg-primary/60"})}):null,l.jsxs("div",{className:"relative z-0 px-1",children:[l.jsxs("div",{className:Dn("sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-background px-0 py-1 transition-colors hover:bg-accent cursor-grab active:cursor-grabbing",Me?"text-foreground":"text-muted-foreground",Ut===J.path?"opacity-95":""),onPointerDownCapture:ht=>{Ct(ht.target)&&ft(ht,J.path)},children:[l.jsx("button",{type:"button",onPointerDown:ht=>ht.stopPropagation(),onClick:ht=>{ht.preventDefault(),ht.stopPropagation(),le(yt=>{const Et=new Set(yt);return Et.has(J.path)?Et.delete(J.path):Et.add(J.path),ce(Et),Et})},"aria-expanded":we,"aria-label":`${we?"Collapse":"Expand"} ${J.name}`,className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-accent",children:l.jsx(pS,{open:we})}),l.jsx("span",{className:Dn("min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors hover:text-foreground","font-normal",Me?"text-primary":"text-muted-foreground"),children:J.name}),l.jsxs("div",{className:"relative shrink-0",children:[l.jsx("button",{type:"button",onPointerDown:ht=>ht.stopPropagation(),"aria-label":`Project actions for ${J.name}`,"aria-expanded":ae===J.path,onClick:ht=>{ht.stopPropagation(),F(yt=>yt===J.path?null:J.path)},className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-muted-foreground",children:l.jsx(dw,{className:"h-4 w-4 shrink-0"})}),ae===J.path?l.jsxs("div",{role:"menu",className:"absolute right-0 top-full z-30 mt-1 w-40 overflow-hidden rounded-xl border border-border/60 bg-card p-1 shadow-lg",onClick:ht=>ht.stopPropagation(),children:[l.jsx("button",{type:"button",role:"menuitem",onClick:()=>{F(null),u(J.path)},className:"flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Open in Finder"}),l.jsx("button",{type:"button",role:"menuitem",onClick:()=>{F(null),c(J.path)},className:"flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300",children:"Remove"})]}):null]})]}),we?he&&Ie?l.jsx("ul",{className:"relative z-0 space-y-0 pt-0",children:Ie.rootBranchNames.map((ht,yt)=>l.jsx(Nm,{branchName:ht,depth:0,isLast:yt===Ie.rootBranchNames.length-1,branchByName:Ie.branchByName,branchCommitPreviews:Ie.branchCommitPreviewsFromLayout,childNamesByParent:Ie.childNamesByParent,branchAnchorShaByName:Ie.branchAnchorShaByName,expandedBranchNames:Ee,onToggleBranch:Et=>H(J.path,Et),checkedOutBranchName:Ie.checkedOutBranchName,ancestors:new Set,showCommits:z,getMergeTargetLabels:Ie.getMergeTargetLabels,sourceBranchName:ht,clusterKeyByCommitId:Ie.clusterKeyByCommitId,isGridClusterOpen:Ie.isGridClusterOpen,onToggleGridCluster:it,onSelectCommit:async Et=>{Me||await i(J.path),E==null||E(Et)},onSelectBranch:async Et=>{Me||await i(J.path),T==null||T(Et)}},`${J.path}:${ht}`))}):l.jsx("p",{className:"px-2 py-2 text-xs text-muted-foreground",children:"Loading branch tree..."}):null]})]},J.path)})})]})]})}const gS="git-visualizer",Qh="git-visualizer:projects",By=12,Ly=1400,yS=180,Oy="git-visualizer:sidebar-width",zy="git-visualizer:sidebar-collapsed",$y="git-visualizer:grid-clumps",Iy=432,Py=280,Hy=640;function er(t){return t==="/"?t:t.replace(/\/+$/,"")}function xS(...t){return t.filter(Boolean).join(" ")}function md(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function bS(t){return md(t)===gS}function Uy(t){var n,i;return[t.path,t.name,t.defaultBranch,t.updatedAtMs,t.branches.map(a=>[a.name,a.headSha,a.commitsAhead,a.commitsBehind,a.unpushedCommits,a.remoteSyncStatus,a.status,a.lastCommitDate].join(":")).join("|"),t.mergeNodes.map(a=>[a.fullSha,a.targetBranch,a.targetCommitSha].join(":")).join("|"),t.directCommits.map(a=>a.fullSha).join("|"),t.unpushedDirectCommits.map(a=>a.fullSha).join("|"),t.checkedOutRef?[(n=t.checkedOutRef.branchName)!=null?n:"",t.checkedOutRef.headSha,(i=t.checkedOutRef.parentSha)!=null?i:"",t.checkedOutRef.hasUncommittedChanges?"1":"0"].join(":"):"__none__",Object.entries(t.unpushedCommitShasByBranch).map(([a,c])=>`${a}:${c.join(",")}`).join("|"),Object.entries(t.branchCommitPreviews).map(([a,c])=>`${a}:${c.map(u=>u.fullSha).join(",")}`).join("|"),Object.entries(t.branchParentByName).map(([a,c])=>`${a}:${c!=null?c:""}`).join("|"),Object.entries(t.laneByBranch).map(([a,c])=>`${a}:${c}`).join("|"),Object.entries(t.branchUniqueAheadCounts).map(([a,c])=>`${a}:${c}`).join("|")].join("@@")}function vS(){var fo,Zs,Hs,Js,ho;const[t,n]=_.useState(null),[i,a]=_.useState(""),[c,u]=_.useState([]),[d,h]=_.useState({}),[p,y]=_.useState(!1),[g,x]=_.useState([]),[b,S]=_.useState([]),[k,j]=_.useState([]),[E,T]=_.useState([]),[z,O]=_.useState({}),[D,K]=_.useState([]),[Y,Q]=_.useState("main"),[V,ee]=_.useState(null),[le,re]=_.useState([]),[De,Ye]=_.useState(!1),[se,me]=_.useState(""),[P,ae]=_.useState(0),[F,pe]=_.useState(1),[Te,I]=_.useState({}),[fe,G]=_.useState({}),[_e,Se]=_.useState(null),[Ne,He]=_.useState(null),[We,ot]=_.useState(null),[Rt,Ut]=_.useState(!1),[Ke,et]=_.useState(!1),[Bt,Kt]=_.useState(!1),[Qt,ze]=_.useState(null),[ce,tt]=_.useState(!1),[nt,Ze]=_.useState(!1),[Qe,ct]=_.useState("active"),[ft,Ct]=_.useState(null),[bt,$t]=_.useState(null),[it,H]=_.useState(!1),[oe,be]=_.useState(null),[J,Me]=_.useState(!1),[we,he]=_.useState(null),[Ie,Ee]=_.useState(null),[gt,dt]=_.useState(!1),[qe,ht]=_.useState(!1),[yt,Et]=_.useState(!1),[at,Mt]=_.useState(!1),[Vt,lt]=_.useState({}),[kt,mt]=_.useState({}),[Lt,on]=_.useState({}),[un,ln]=_.useState({}),[Rn,Bn]=_.useState({}),[bn,dn]=_.useState([]),[qn,Xt]=_.useState(!1),[En,st]=_.useState(!1),[Tt,Ln]=_.useState(!1),[ks,hs]=_.useState(!1),[ss,Do]=_.useState(!1),[os,Ws]=_.useState("horizontal"),[wo,zs]=_.useState(!1),[jn,Zo]=_.useState(Iy),[js,vn]=_.useState(!1),[Yn,ao]=_.useState({dragging:!1,lastEvent:"idle"}),Fs=_.useRef(null),us=_.useRef(0),is=_.useRef(0),Xs=_.useRef({}),wn=_.useRef(null),pn=_.useRef({}),en=_.useRef({}),Un=_.useRef(!1),Ho=_.useRef(null),Uo=_.useRef(Iy),li=_.useRef(null),Gs=_.useRef(null),Jo=bS(t)||!0,bs=_.useRef(!1),So=_.useRef(!1),Mn=_.useRef(new Set),go=_.useRef([]),ms=_.useRef([]),Kn=_.useRef(null),bi=_.useRef({}),vs=t!=null?t:"__no-repo__",vi=(B,X)=>{try{const q={opened:Object.fromEntries(Object.entries(B).map(([R,ne])=>[R,Array.from(ne)])),closed:Object.fromEntries(Object.entries(X).map(([R,ne])=>[R,Array.from(ne)]))};window.localStorage.setItem($y,JSON.stringify(q))}catch{}};_.useEffect(()=>{var B,X;try{const q=window.localStorage.getItem($y);if(!q)return;const R=JSON.parse(q);if(!R||typeof R!="object")return;const ne={},w={},C=R;for(const[N,L]of Object.entries((B=C.opened)!=null?B:{}))Array.isArray(L)&&(ne[N]=new Set(L.filter(W=>typeof W=="string")));for(const[N,L]of Object.entries((X=C.closed)!=null?X:{}))Array.isArray(L)&&(w[N]=new Set(L.filter(W=>typeof W=="string")));I(ne),G(w)}catch{}},[]),_.useEffect(()=>{vi(Te,fe)},[fe,Te]);const Yt=_.useMemo(()=>{var B;return(B=Te[vs])!=null?B:new Set},[vs,Te]),ws=_.useMemo(()=>{var B;return(B=fe[vs])!=null?B:new Set},[vs,fe]),As=_.useCallback(B=>{I(X=>{var w;const q=(w=X[vs])!=null?w:new Set,R=typeof B=="function"?B(q):B,ne={...X,[vs]:new Set(R)};return vi(ne,fe),ne})},[vs,fe]),Ro=_.useCallback(B=>{G(X=>{var w;const q=(w=X[vs])!=null?w:new Set,R=typeof B=="function"?B(q):B,ne={...X,[vs]:new Set(R)};return vi(Te,ne),ne})},[vs,Te]),wi=_.useMemo(()=>c.map(B=>{var X,q,R,ne,w,C,N,L,W,te,Ae,xe,Le,Xe,Je,pt,_t,ut,rt,kn,zn,$n,rn,Ot,vt,Dt,In,gn;return{...B,...(X=d[B.path])!=null?X:{},branches:(R=(q=d[B.path])==null?void 0:q.branches)!=null?R:[],mergeNodes:(w=(ne=d[B.path])==null?void 0:ne.mergeNodes)!=null?w:[],directCommits:(N=(C=d[B.path])==null?void 0:C.directCommits)!=null?N:[],unpushedDirectCommits:(W=(L=d[B.path])==null?void 0:L.unpushedDirectCommits)!=null?W:[],unpushedCommitShasByBranch:(Ae=(te=d[B.path])==null?void 0:te.unpushedCommitShasByBranch)!=null?Ae:{},checkedOutRef:(Le=(xe=d[B.path])==null?void 0:xe.checkedOutRef)!=null?Le:null,worktrees:(Je=(Xe=d[B.path])==null?void 0:Xe.worktrees)!=null?Je:[],stashes:(_t=(pt=d[B.path])==null?void 0:pt.stashes)!=null?_t:[],branchCommitPreviews:(rt=(ut=d[B.path])==null?void 0:ut.branchCommitPreviews)!=null?rt:{},laneByBranch:(zn=(kn=d[B.path])==null?void 0:kn.laneByBranch)!=null?zn:{},branchUniqueAheadCounts:(rn=($n=d[B.path])==null?void 0:$n.branchUniqueAheadCounts)!=null?rn:{},defaultBranch:(Dt=(vt=(Ot=d[B.path])==null?void 0:Ot.defaultBranch)!=null?vt:B.branchName)!=null?Dt:"main",treeLoaded:(gn=(In=d[B.path])==null?void 0:In.loaded)!=null?gn:!1}}),[c,d]),Vo=_.useMemo(()=>({githubAuthStatus:oe,githubAuthLoading:J,onGitHubAuthSetup:Wo,gridSearchQuery:se,setGridSearchQuery:me,gridSearchResultCount:_e,gridSearchResultIndex:Ne,setGridSearchJumpDirection:pe,setGridSearchJumpToken:ae,mapGridOrientation:os,setMapGridOrientation:Ws,setIsGridDebugOpen:zs,githubAuthMessage:we,commitSwitchFeedback:Ie,isCommitSwitchFeedbackVisible:gt}),[Ie,J,we,oe,se,_e,Ne,Wo,gt,os,me,pe,ae,zs,Ws]);function Ns(B,X){const q=Uy(X);return Xs.current[B]===q?!1:(Xs.current={...Xs.current,[B]:q},h(ne=>ne[B]===X?ne:{...ne,[B]:X}),!0)}function ci(B){var X;return[B.repoPath,B.defaultBranch,B.headSha,(X=B.upstreamSha)!=null?X:"",B.hasUncommittedChanges?"1":"0",B.branchCount,B.worktreeCount,B.stashCount].join("|")}function $s(B){var X;return[B.repoPath,B.headSha,(X=B.upstreamSha)!=null?X:"",B.hasUncommittedChanges?"1":"0"].join("|")}function Sn(B,X){var q,R,ne,w,C,N;return{repoPath:B,headSha:(R=(q=X.checkedOutRef)==null?void 0:q.headSha)!=null?R:"",upstreamSha:(w=(ne=X.checkedOutRef)==null?void 0:ne.parentSha)!=null?w:null,hasUncommittedChanges:(N=(C=X.checkedOutRef)==null?void 0:C.hasUncommittedChanges)!=null?N:!1}}function Co(B,X,q){var R,ne,w,C,N,L;return{repoPath:B,defaultBranch:X,headSha:(ne=(R=q.checkedOutRef)==null?void 0:R.headSha)!=null?ne:"",upstreamSha:(C=(w=q.checkedOutRef)==null?void 0:w.parentSha)!=null?C:null,hasUncommittedChanges:(L=(N=q.checkedOutRef)==null?void 0:N.hasUncommittedChanges)!=null?L:!1,branchCount:q.branches.length,worktreeCount:q.worktrees.length,stashCount:q.stashes.length}}_.useEffect(()=>{try{const B=localStorage.getItem(Qh);if(!B)return;const X=JSON.parse(B);if(!Array.isArray(X))return;const q=X.filter(R=>typeof R=="object"&&R!==null&&typeof R.path=="string"&&typeof R.name=="string"&&typeof R.lastOpenedAt=="number");u(q.slice(0,By))}catch{u([])}},[]),_.useEffect(()=>{So.current||t||c.length!==0&&(So.current=!0,Ds(c[0].path))},[c,t]);const Yo=_.useMemo(()=>b.reduce((B,X)=>(B[X.targetCommitSha]=X.targetBranch,B),{}),[b]);_.useEffect(()=>{t&&(Un.current||h(B=>{var X,q;return{...B,[t]:{path:t,name:i||md(t),branches:g,mergeNodes:b,directCommits:k,unpushedDirectCommits:E,mergeTargetBranchByCommitSha:b.reduce((R,ne)=>(R[ne.targetCommitSha]=ne.targetBranch,R),{}),unpushedCommitShasByBranch:z,checkedOutRef:V,worktrees:le,stashes:bn,branchCommitPreviews:kt,branchParentByName:Lt,laneByBranch:un,branchUniqueAheadCounts:Rn,defaultBranch:Y,loaded:!0,cacheSchemaVersion:(q=(X=B[t])==null?void 0:X.cacheSchemaVersion)!=null?q:1,updatedAtMs:Date.now()}}}))},[t,i,g,b,k,E,Yo,z,V,le,bn,kt,Lt,un,Rn,Y]);async function ps(B,X=!1){var R;const q=er(B);if(q&&!Mn.current.has(q)&&!(!X&&((R=d[q])!=null&&R.loaded))){Mn.current.add(q),q===t&&y(!0);try{const ne=await je("get_repo_visual_snapshot",{repoPath:q,forceRefresh:X});Ns(q,ne)}finally{Mn.current.delete(q),q===t&&Mn.current.size===0&&y(!1)}}}_.useEffect(()=>{c.length!==0&&c.forEach(B=>{ps(B.path),je("watch_repo",{repoPath:B.path}).catch(console.error)})},[c]),_.useEffect(()=>{let B=!1,X=null;return yc("git-activity",q=>{if(B)return;const R=er(q.payload.repoPath);!R||R===t||ps(R,!0)}).then(q=>{B?q():X=q}).catch(console.error),()=>{B=!0,X&&X()}},[t]);function qs(B){u(X=>{const q=er(B.path);if(!q)return X;const R={...B,path:q},w=(X.some(C=>C.path===q)?X.map(C=>C.path===q?R:C):[...X,R]).slice(-By);try{localStorage.setItem(Qh,JSON.stringify(w))}catch{}return w})}async function an(B){const X=er(B);if(X){ze(null);try{const[q,R]=await Promise.all([je("get_repo_info",{repoPath:X}),je("get_default_branch",{repoPath:X}).catch(()=>"main")]);qs({path:X,name:q.name,lastOpenedAt:Date.now(),branchName:R}),await ps(X,!0)}catch(q){ze(q instanceof Error?q.message:String(q))}}}function Ks(B){var q,R;const X=er(B);if(X&&(u(ne=>{const w=ne.filter(C=>C.path!==X);try{localStorage.setItem(Qh,JSON.stringify(w))}catch{}return w}),h(ne=>{if(!(X in ne))return ne;const w={...ne};return delete w[X],w}),t===X)){const ne=(R=(q=c.find(w=>w.path!==X))==null?void 0:q.path)!=null?R:null;ne?Ds(ne):(n(null),a(""),x([]),S([]),j([]),T([]),O({}),ee(null),re([]),dn([]),mt({}),on({}),ln({}),Bn({}))}}async function Is(B){const X=er(B);if(X)try{await je("reveal_in_finder",{path:X})}catch(q){ze(q instanceof Error?q.message:String(q))}}const ro=()=>{(async()=>{var B,X;try{const q=await Jv({directory:!0,multiple:!1,defaultPath:(X=(B=c[0])==null?void 0:B.path)!=null?X:void 0});typeof q=="string"&&q&&await an(q)}catch(q){ze(q instanceof Error?q.message:String(q))}})()};async function Ms(B,X){const R=[];let ne=0;for(;;){const w=await je("get_merge_nodes",{repoPath:B,branch:X,page:ne,perPage:100});if(R.push(...w.nodes),!w.hasMore||w.nodes.length===0)break;ne+=1}return R}async function Bo(B,X,q){const R=Array.from(new Set([q,...X.map(C=>C.name)].filter(C=>!!C)));if(R.length===0)return[];const ne=await Promise.all(R.map(C=>Ms(B,C).catch(()=>[]))),w=new Map;for(const C of ne)for(const N of C){const L=`${N.targetCommitSha}:${N.targetBranch}`;w.has(L)||w.set(L,N)}return Array.from(w.values())}const Qs=B=>B.map(X=>`${X.name}|${X.headSha}|${X.commitsAhead}|${X.commitsBehind}|${X.unpushedCommits}|${X.remoteSyncStatus}`).join("||"),ko=B=>B.map(X=>X.fullSha).join("|"),yo=B=>{var X,q;return B?`${(X=B.branchName)!=null?X:""}|${B.headSha}|${(q=B.parentSha)!=null?q:""}|${B.hasUncommittedChanges?1:0}`:"__none__"};async function On(B,X,q){var Xe,Je;const R=X!=null?X:Y,ne=(Xe=q==null?void 0:q.includeMergeNodes)!=null?Xe:!0,w=(Je=q==null?void 0:q.includeUnpushedShaMap)!=null?Je:!0,[C,N,L,W,te,Ae]=await Promise.all([je("get_branches",{repoPath:B}),je("get_all_repo_commits",{repoPath:B}),je("get_unpushed_direct_commits",{repoPath:B,branch:R}).catch(()=>[]),je("get_checked_out_ref",{repoPath:B}).catch(()=>null),je("list_worktrees",{repoPath:B}).catch(()=>[]),je("list_stashes",{repoPath:B}).catch(()=>[])]),xe=ne?await Bo(B,C,R):b,Le=w?await Promise.all([R,...C.map(pt=>pt.name)].map(async pt=>{const _t=await je("get_branch_unpushed_commit_shas",{repoPath:B,branch:pt}).catch(()=>[]);return[pt,_t]})):Object.entries(z);x(C),S(xe),j(N),T(L),O(Object.fromEntries(Le)),ee(W),re(te),dn(Ae)}async function Tn(B){const[X,q,R]=await Promise.all([je("get_branches",{repoPath:B}).catch(()=>[]),je("get_all_repo_commits",{repoPath:B}).catch(()=>[]),je("get_checked_out_ref",{repoPath:B}).catch(()=>null)]);return Qs(X)!==Qs(go.current)||ko(q)!==ko(ms.current)||yo(R)!==yo(Kn.current)}async function Vn(B){Ee(null),Kt(!0),Un.current=!0;try{const[X,q]=await Promise.all([je("get_repo_info",{repoPath:B}),je("get_default_branch",{repoPath:B})]);a(X.name),Q(q),n(B),await On(B,q),Es(B),Ee({kind:"success",message:`Now targeting worktree at ${B}`})}catch(X){const q=X instanceof Error?X.message:String(X);Ee({kind:"error",message:q}),console.error("Failed to switch worktree:",q)}finally{Kt(!1),Un.current=!1}}async function Wn(B,X){if(!(!t||De)){Ye(!0),Ee(null);try{await je("remove_worktree",{repoPath:t,worktreePath:B,force:X}),await On(t),Ee({kind:"success",message:`Removed worktree at ${B}`})}catch(q){const R=q instanceof Error?q.message:String(q);Ee({kind:"error",message:R}),console.error("Failed to remove worktree:",R)}finally{Ye(!1)}}}function lo(B,X){var R,ne;const q=Uy(X);return wn.current===q?!1:(wn.current=q,a(X.name||md(B)),Q(X.defaultBranch||"main"),x(X.branches),S(X.mergeNodes),j(X.directCommits),T(X.unpushedDirectCommits),O(X.unpushedCommitShasByBranch),ee(X.checkedOutRef),re(X.worktrees),dn(X.stashes),mt(X.branchCommitPreviews),on((R=X.branchParentByName)!=null?R:{}),ln((ne=X.laneByBranch)!=null?ne:{}),Bn(X.branchUniqueAheadCounts),n(B),!0)}async function Ds(B){var ne;const X=++us.current,q=er(B);if(!q)return;Un.current=!0;const R=d[q];if(R!=null&&R.loaded)try{const w=await je("get_repo_quick_state",{repoPath:q});if(X!==us.current)return;const C=$s(w);if(((ne=en.current[q])!=null?ne:R?$s(Sn(q,R)):null)===C){ze(null),en.current={...en.current,[q]:C},lo(q,R),qs({path:q,name:R.name||md(q),lastOpenedAt:Date.now(),branchName:R.defaultBranch}),Kt(!1),et(!1),Es(q),(async()=>{try{const L=await je("get_repo_refresh_fingerprint",{repoPath:q}),W=ci(L);if(X!==us.current)return;if(pn.current[q]!==W){const te=await je("get_repo_visual_snapshot",{repoPath:q,forceRefresh:!0});if(X!==us.current)return;Ns(q,te),pn.current={...pn.current,[q]:W},en.current={...en.current,[q]:$s(Sn(q,te))},lo(q,te)}}catch{}})(),Un.current=!1;return}en.current={...en.current,[q]:C}}catch{}if(et(!0),Kt(!0),ze(null),await new Promise(w=>setTimeout(w,15)),X===us.current)try{const[w,C]=await Promise.all([je("get_repo_info",{repoPath:q}),je("get_default_branch",{repoPath:q})]);if(X!==us.current)return;a(w.name),Q(C);const N=await je("get_repo_visual_snapshot",{repoPath:q,forceRefresh:!0});if(X!==us.current)return;Ns(q,N),pn.current={...pn.current,[q]:ci(Co(q,C,N))},en.current={...en.current,[q]:$s(Sn(q,N))},lo(q,N),qs({path:q,name:w.name,lastOpenedAt:Date.now(),branchName:C}),Kt(!1),et(!1),Es(q)}catch(w){if(X!==us.current)return;console.error("Failed to load repo:",w),ze(w instanceof Error?w.message:String(w)),n(null),et(!1),Kt(!1)}finally{Un.current=!1}}async function Es(B){const X=++is.current;try{if(X!==is.current)return;H(!1),he(null);const q=await je("get_github_info",{repoPath:B}),R=await je("get_github_auth_status");if(X!==is.current||(be(R),!R.ghAvailable||!R.authenticated))return;const ne=await je("get_open_prs",{owner:q.owner,repo:q.repo});if(X!==is.current)return;K(ne),H(!0)}catch(q){if(X!==is.current)return;console.log("GitHub data not available:",q),he(q instanceof Error?q.message:String(q)),H(!1)}}_.useEffect(()=>{let B=null,X=!1;const q=(()=>{try{return dp().label}catch{return null}})(),R=async w=>{var N;const C=(N=w==null?void 0:w.path)==null?void 0:N.trim();!C||X||t!==C&&await Ds(C)};return(async()=>{q==="main"&&(B=await yc("gitviz://open-repo",async C=>{await R(C.payload)}));const w=await je("take_pending_open_repo");await R(w)})(),()=>{X=!0,B&&B()}},[t]),_.useEffect(()=>{go.current=g},[g]),_.useEffect(()=>{ms.current=k},[k]),_.useEffect(()=>{Kn.current=V},[V]),_.useEffect(()=>{bi.current=Lt},[Lt]),_.useEffect(()=>{bs.current=ss},[ss]),_.useEffect(()=>{},[t,Y,Jo]),_.useEffect(()=>{if(!t||!Y||!Jo)return;je("watch_repo",{repoPath:t}).catch(console.error);let B=!1,X=!1,q=!1,R=!1,ne=null,w=null,C=null;const N=async()=>{if(!B){if(bs.current){X=!0;return}if(q){X=!0;return}q=!0;try{if(!await Tn(t)||B)return;await On(t,Y)}catch(te){console.warn("Frozen git-activity refresh failed:",te)}finally{q=!1,X&&!B&&(X=!1,window.setTimeout(()=>{N()},0))}}},L=()=>{X=!0,N()},W=async()=>{if(!(B||R||document.visibilityState!=="visible")){R=!0;try{const te=await je("get_remote_branch_head_sha",{repoPath:t,branch:Y});if(B||te==null)return;if(ne==null){ne=te;return}if(te===ne)return;ne=te,await On(t,Y)}catch(te){console.warn("Remote tip refresh failed:",te)}finally{R=!1}}};return w=window.setInterval(()=>{W()},15e3),W(),yc("git-activity",te=>{er(te.payload.repoPath)===t&&(ps(t,!0),L())}).then(te=>{B?te():C=te}).catch(console.error),()=>{B=!0,w!=null&&window.clearInterval(w),C&&C()}},[t,Y,Jo]);async function Wo(){if(t){Me(!0),he(null);try{await je("authenticate_github");const B=await je("get_github_auth_status");be(B),B.authenticated?await Es(t):B.message&&he(B.message)}catch(B){he(B instanceof Error?B.message:String(B))}finally{Me(!1)}}}const co=new Set(D.map(B=>B.branchName)),_s=14*864e5,Ts=Date.now(),Lo=g.filter(B=>B.status==="stale"),xo=Lo.filter(B=>co.has(B.name)||Ts-new Date(B.lastCommitDate).getTime()<=_s),uo=Lo.filter(B=>!co.has(B.name)&&Ts-new Date(B.lastCommitDate).getTime()>_s),Oo=B=>{var X;return Object.prototype.hasOwnProperty.call(Rn,B.name)?Math.max(0,(X=Rn[B.name])!=null?X:0):Math.max(0,B.commitsAhead)};_.useEffect(()=>{lt({}),Gs.current=null,Me(!1),be(null),he(null),K([]),Ee(null)},[t]),_.useEffect(()=>{var L,W,te,Ae;if(!t||!Y){lt({}),mt({}),on({}),ln({}),Bn({}),Gs.current=null;return}const B=g.map(xe=>{var Le;return`${xe.name}:${xe.headSha}:${(Le=xe.parentBranch)!=null?Le:""}:${xe.commitsAhead}`}).join("|"),X=b.map(xe=>{var Le,Xe;return`${xe.fullSha}:${(Xe=(Le=xe.parentShas)==null?void 0:Le[1])!=null?Xe:""}`}).join("|"),q=`${t}|${Y}|${B}|${X}`;if(Gs.current===q)return;Gs.current=q;const R={},ne={};for(const xe of g){if(xe.name===Y)continue;const Le=k.filter(Xe=>Xe.branch===xe.name).map(Xe=>{var Je;return{fullSha:Xe.fullSha,sha:Xe.sha,parentSha:(Je=Xe.parentSha)!=null?Je:null,message:Xe.message,author:Xe.author,date:Xe.date,kind:"commit"}});R[xe.name]=Le,ne[xe.name]=Le.length}const w=new Map;for(const xe of k)w.set(xe.fullSha,xe.branch);const C=xe=>{if(!xe)return null;const Le=w.get(xe);if(Le)return Le;for(const[Xe,Je]of w.entries())if(Xe.startsWith(xe)||xe.startsWith(Xe))return Je;return null},N={[Y]:null};for(const xe of g){if(xe.name===Y){N[xe.name]=null;continue}const Le=k.filter(_t=>_t.branch===xe.name),Xe=new Set(Le.map(_t=>_t.fullSha)),Je=(W=(L=Le.filter(_t=>{var rt;const ut=(rt=_t.parentSha)!=null?rt:null;return!ut||!Xe.has(ut)}).sort((_t,ut)=>{const rt=new Date(_t.date).getTime()-new Date(ut.date).getTime();return rt!==0?rt:_t.fullSha.localeCompare(ut.fullSha)})[0])==null?void 0:L.parentSha)!=null?W:null,pt=C(Je);N[xe.name]=(Ae=(te=pt!=null?pt:bi.current[xe.name])!=null?te:xe.parentBranch)!=null?Ae:null}lt({}),mt(R),on(N),ln(xe=>{const Le={};for(const Xe of g){const Je=xe[Xe.name];Je!=null&&Number.isFinite(Je)&&(Le[Xe.name]=Je)}return Le}),Bn(ne)},[t,Y,g,b,k]),_.useEffect(()=>{if(!Ie){dt(!1);return}dt(!0);const B=window.setTimeout(()=>{dt(!1)},Ly),X=window.setTimeout(()=>{Ee(null)},Ly+yS);return()=>{window.clearTimeout(B),window.clearTimeout(X)}},[Ie]),_.useEffect(()=>{if(!t||g.length===0)return;const B=R=>new Promise(ne=>setTimeout(ne,R));async function X(){const ne=`${await je("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${ne}`),await B(800),await je("screenshot",{path:`${ne}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${ne}`)}const q=R=>{if((R.metaKey||R.ctrlKey)&&!R.shiftKey&&!R.altKey&&R.key.toLowerCase()==="b"){R.preventDefault(),vn(ne=>!ne);return}(R.metaKey||R.ctrlKey)&&R.shiftKey&&R.key==="S"&&(R.preventDefault(),X())};return window.addEventListener("keydown",q),()=>window.removeEventListener("keydown",q)},[t,i,g]);function zo(){Ze(!0),setTimeout(()=>{tt(!1),Ze(!1),ct("active"),$t(null)},100)}async function Si(B){if(!t)return;Ee(null);const X=/^STASH:(\d+)$/.exec(B.commitSha);if(X){try{const q=parseInt(X[1],10),R=await je("apply_stash_restore",{repoPath:t,stashIndex:q});ee(R),await On(t);const ne=`Stash ${q+1}`,w=R.branchName?` on branch ${R.branchName}`:" at the stash base (detached HEAD)";Ee({kind:"success",message:`Restored ${ne}${w}; stash applied and dropped (uncommitted changes).`})}catch(q){const R=q instanceof Error?q.message:String(q);Ee({kind:"error",message:R}),console.error("Failed to apply stash:",R)}return}if(B.branchName){const q=(ne,w)=>{const C=ne.replace(/\\/g,"/").replace(/\/+$/,""),N=w.replace(/\\/g,"/").replace(/\/+$/,"");return C===N||C.toLowerCase()===N.toLowerCase()},R=le.find(ne=>ne.pathExists===!1||ne.isCurrent||t&&q(ne.path,t)?!1:ne.branchName===B.branchName);if(R){await Vn(R.path);return}}try{let q="";(await je("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await je("stash_push",{repoPath:t,includeUntracked:!0}),q="Stashed local changes (including untracked), then ",await On(t));const ne=B.branchName?await je("checkout_branch",{repoPath:t,branchName:B.branchName}):await je("checkout_ref",{repoPath:t,refName:B.commitSha}),w=await je("get_checked_out_ref",{repoPath:t}).catch(()=>ne);ee(w),await On(t);const C=w.branchName?w.branchName:`${w.headSha.slice(0,7)} (detached)`;Ee({kind:"success",message:`${q}Checked out ${C}`})}catch(q){const R=q instanceof Error?q.message:String(q);Ee({kind:"error",message:R}),console.error("Failed to checkout commit:",R)}}async function ta(){if(!(!t||qn)){Ee(null),Xt(!0);try{if(!(await je("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){Ee({kind:"error",message:"No local changes to stash."});return}await je("stash_push",{repoPath:t,includeUntracked:!0}),await On(t),Ee({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(B){const X=B instanceof Error?B.message:String(B);Ee({kind:"error",message:X}),console.error("Failed to stash:",X)}finally{Xt(!1)}}}async function Ii(B){if(!t||En)return!1;const X=B.trim();if(!X)return Ee({kind:"error",message:"Enter a commit message."}),!1;Ee(null),st(!0);try{if(!(await je("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Ee({kind:"error",message:"No local changes to commit."}),!1;const R=await je("commit_working_tree",{repoPath:t,message:X});return ee(R),On(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ee({kind:"success",message:"Committed local changes."}),!0}catch(q){const R=q instanceof Error?q.message:String(q);return Ee({kind:"error",message:R}),console.error("Failed to commit:",R),!1}finally{st(!1)}}async function Pi(){if(!t||Tt)return!1;Ee(null),Ln(!0);try{if(!(await je("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Ee({kind:"error",message:"No local changes to stage."}),!1;const X=await je("stage_working_tree",{repoPath:t});return ee(X),On(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ee({kind:"success",message:"Staged all changes."}),!0}catch(B){const X=B instanceof Error?B.message:String(B);return Ee({kind:"error",message:X}),console.error("Failed to stage:",X),!1}finally{Ln(!1)}}async function ei(B,X){if(!(!t||ks)){hs(!0),Ee(null);try{const q=/^STASH:(\d+)$/.exec(B);let R;if(q){const ne=parseInt(q[1],10);R=await je("move_stash_to_new_branch",{repoPath:t,stashIndex:ne,branchName:X})}else R=await je("create_branch_from_uncommitted",{repoPath:t,branchName:X});ee(R),On(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ee({kind:"success",message:`Moved to new branch "${X}"`})}catch(q){const R=q instanceof Error?q.message:String(q);Ee({kind:"error",message:R}),console.error("Failed to create branch from node:",R)}finally{hs(!1)}}}async function Nt(B){if(!(!t||ks)){hs(!0),Ee(null);try{const X=await je("create_root_branch",{repoPath:t,branchName:B});ee(X),On(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ee({kind:"success",message:`Created new root branch "${B}"`})}catch(X){const q=X instanceof Error?X.message:String(X);Ee({kind:"error",message:q}),console.error("Failed to create root branch:",q)}finally{hs(!1)}}}async function Ci(B,X){if(!t)return;const q=Array.from(new Set(B.filter(R=>!!R&&R!==X)));if(q.length!==0){Ee(null),ht(!0);try{let R=null;for(const ne of q)R=await je("merge_ref_into_branch",{repoPath:t,sourceRef:ne,targetBranch:X});On(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),R&&ee(R),Ee({kind:"success",message:q.length===1?`Merged ${q[0].slice(0,7)} into ${X}`:`Merged ${q.length} commits into ${X}`})}catch(R){const ne=R instanceof Error?R.message:String(R);Ee({kind:"error",message:ne}),console.error("Failed to merge refs into branch:",ne)}finally{ht(!1)}}}async function ki(){if(!(!t||yt)){Ee(null),Et(!0);try{const B=await je("push_all_unpushed_branches",{repoPath:t});On(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ee({kind:"success",message:B.length>0?B.length===1?`Pushed ${B[0].branchName}`:`Pushed ${B.length} branches`:"Everything local is already pushed."})}catch(B){const X=B instanceof Error?B.message:String(B);Ee({kind:"error",message:X}),console.error("Failed to push all branches:",X)}finally{Et(!1)}}}async function Hi(){if(!(!t||yt)){Ee(null),Et(!0);try{const B=await je("push_current_branch",{repoPath:t});On(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ee({kind:"success",message:`Pushed ${B.branchName}`})}catch(B){const X=B instanceof Error?B.message:String(B);Ee({kind:"error",message:X}),console.error("Failed to push current branch:",X)}finally{Et(!1)}}}async function ui(B){var q;if(!t||yt)return;const X=Array.from(new Map(B.filter(R=>R.branchName&&R.targetSha).map(R=>[R.branchName,R])).values());if(X.length!==0){Ee(null),Et(!0);try{for(const R of X)await je("push_branch",{repoPath:t,branchName:R.branchName,targetSha:R.targetSha});On(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ee({kind:"success",message:X.length===1?`Pushed ${X[0].branchName} through ${(q=X[0].targetSha)==null?void 0:q.slice(0,7)}`:`Pushed ${X.length} selected commit ranges`})}catch(R){const ne=R instanceof Error?R.message:String(R);Ee({kind:"error",message:ne}),console.error("Failed to push selected commits:",ne)}finally{Et(!1)}}}async function bo(B){var w;if(!t||at)return;const X=Array.from(new Set(B.branchNames.filter(C=>C&&C!==Y))),q=!!B.discardUncommittedChanges,R=(w=B.stashIndices)!=null?w:[],ne=Array.from(new Set(R)).sort((C,N)=>N-C);if(!(X.length===0&&!q&&ne.length===0)){Ee(null),Mt(!0);try{for(const L of ne)await je("stash_drop",{repoPath:t,stashIndex:L});const C=X.length>0||q?await je("delete_selected_elements",{repoPath:t,branchNames:X,discardUncommittedChanges:q}):{deletedBranches:[],discardedUncommittedChanges:!1};On(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1});const N=[];ne.length>0&&N.push(ne.length===1?`removed stash ${ne[0]+1}`:`removed ${ne.length} stashes`),C.discardedUncommittedChanges&&N.push("discarded local uncommitted changes"),C.deletedBranches.length>0&&N.push(C.deletedBranches.length===1?`deleted ${C.deletedBranches[0]}`:`deleted ${C.deletedBranches.length} branches`),Ee({kind:"success",message:N.length>0?N.join(" and "):"Nothing to delete."})}catch(C){const N=C instanceof Error?C.message:String(C);Ee({kind:"error",message:N}),console.error("Failed to delete selected elements:",N)}finally{Mt(!1)}}}function Fo(B){$t(B),Ct(X=>{var q;return{branch:B,seq:((q=X==null?void 0:X.seq)!=null?q:0)+1}})}function di(B){B&&(ot(B),ae(X=>X+1))}function M(B){B&&(me(B),ae(X=>X+1))}_.useEffect(()=>{var q;const B=V!=null&&V.hasUncommittedChanges?"WORKING_TREE":(q=V==null?void 0:V.headSha)!=null?q:null;if(!B)return;const X=`${t!=null?t:"__no-repo__"}|${os}|${B}`;Fs.current!==X&&(Fs.current=X,ot(B),ae(R=>R+1))},[V==null?void 0:V.hasUncommittedChanges,V==null?void 0:V.headSha,os,t]),_.useEffect(()=>{Fs.current=null},[t]);const{enrichedBranches:U,enrichedBranchCommitPreviews:ue,enrichedBranchUniqueAheadCounts:ke,enrichedDirectCommits:Ve}=_.useMemo(()=>{var rt,kn,zn,$n,rn;const B=Jx(bn,g,k,kt,Rn,Y,(rt=V==null?void 0:V.hasUncommittedChanges)!=null?rt:!1);let X=B.branches,q=B.directCommits,R=B.branchCommitPreviews,ne=B.branchUniqueAheadCounts;if(!(V!=null&&V.hasUncommittedChanges))return{enrichedBranches:X,enrichedDirectCommits:q,enrichedBranchCommitPreviews:R,enrichedBranchUniqueAheadCounts:ne};const w=V.headSha||V.parentSha||null,C=(zn=(kn=q[0])==null?void 0:kn.fullSha)!=null?zn:null,N=(Ot,vt)=>!Ot||!vt?!1:Ot===vt||Ot.startsWith(vt)||vt.startsWith(Ot),L=[{name:Y,headSha:C!=null?C:"",isDefault:!0},...X.map(Ot=>({name:Ot.name,headSha:Ot.headSha,isDefault:!1}))],W=V.branchName?L.find(Ot=>Ot.name===V.branchName):void 0,te=w?L.filter(Ot=>N(Ot.headSha,w)):[],Ae=($n=W!=null?W:te.find(Ot=>Ot.isDefault))!=null?$n:te[0],xe=Ae&&!Ae.isDefault?X.find(Ot=>Ot.name===Ae.name):void 0,Le=(()=>{var vt;if(!w)return null;const Ot=q.find(Dt=>N(Dt.fullSha,w)||N(Dt.sha,w));if(Ot!=null&&Ot.date)return Ot.date;if(xe){const Dt=((vt=R[xe.name])!=null?vt:[]).find(In=>N(In.fullSha,w)||N(In.sha,w));if(Dt!=null&&Dt.date)return Dt.date}return null})(),Xe=Le?new Date(Le).getTime():Number.NaN,Je=Date.now(),pt=Number.isFinite(Xe)?Math.max(Je,Xe+1):Je,_t=new Date(pt).toISOString(),ut={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:w,message:"Local uncommitted changes",author:"You",date:_t,kind:"uncommitted"};return xe?{enrichedBranches:X.map(vt=>vt.name===xe.name?{...vt,commitsAhead:vt.commitsAhead+1,unpushedCommits:vt.unpushedCommits+1,lastCommitDate:_t,headSha:"WORKING_TREE"}:vt),enrichedDirectCommits:q,enrichedBranchCommitPreviews:{...R,[xe.name]:[ut,...R[xe.name]||[]]},enrichedBranchUniqueAheadCounts:{...ne,[xe.name]:Math.max(0,(rn=Object.prototype.hasOwnProperty.call(ne,xe.name)?ne[xe.name]:xe.commitsAhead)!=null?rn:0)+1}}:{enrichedBranches:X,enrichedBranchCommitPreviews:{...R,[Y]:[ut,...R[Y]||[]]},enrichedBranchUniqueAheadCounts:{...ne},enrichedDirectCommits:q}},[g,kt,Rn,V,Y,k,bn]),Fe=_.useMemo(()=>{const B={...Lt};return B[Y]=null,B},[Lt,Y,U]),Pt=_.useMemo(()=>{var B;return(B=Nw(U,Y,Fe,un))!=null?B:fp(U,Y,ue,Fe)},[U,Y,ue,Fe,un]),It=_.useMemo(()=>Mc({lanes:Pt,branches:U,mergeNodes:b,directCommits:Ve,unpushedDirectCommits:E,defaultBranch:Y,branchCommitPreviews:ue,branchParentByName:Fe,branchUniqueAheadCounts:ke,manuallyOpenedClumps:Yt,manuallyClosedClumps:ws,isDebugOpen:!1,gridSearchQuery:se,gridFocusSha:We,checkedOutRef:V!=null?V:null,orientation:os}),[Pt,U,b,Ve,E,Y,ue,Fe,ke,Yt,ws,se,We,(fo=V==null?void 0:V.headSha)!=null?fo:null,(Zs=V==null?void 0:V.branchName)!=null?Zs:null,os]),Gt=_.useMemo(()=>{var B;return We&&(B=It.clusterKeyByCommitId.get(We))!=null?B:null},[It.clusterKeyByCommitId,We]),qt=_.useMemo(()=>{if(!Gt||ws.has(Gt))return Yt;const B=new Set(Yt);return B.add(Gt),B},[ws,Yt,Gt]),nn=_.useMemo(()=>{if(!Gt)return ws;const B=new Set(ws);return B.delete(Gt),B},[ws,Gt]),_n=_.useMemo(()=>Mc({lanes:Pt,branches:U,mergeNodes:b,directCommits:Ve,unpushedDirectCommits:E,defaultBranch:Y,branchCommitPreviews:ue,branchParentByName:Fe,branchUniqueAheadCounts:ke,manuallyOpenedClumps:qt,manuallyClosedClumps:nn,isDebugOpen:!1,gridSearchQuery:se,gridFocusSha:We,checkedOutRef:V!=null?V:null,orientation:os}),[Pt,U,b,Ve,E,Y,ue,Fe,ke,qt,nn,se,We,(Hs=V==null?void 0:V.headSha)!=null?Hs:null,(Js=V==null?void 0:V.branchName)!=null?Js:null,os]);_.useEffect(()=>{try{const B=window.localStorage.getItem(Oy);if(B){const q=Number(B);Number.isFinite(q)&&Zo(Math.min(Hy,Math.max(Py,q)))}const X=window.localStorage.getItem(zy);X!=null&&vn(X==="true")}catch{}},[]),_.useEffect(()=>{Uo.current=jn},[jn]),_.useEffect(()=>{const B=li.current;B&&(B.style.width=js?"0px":`${jn}px`)},[jn,js]),_.useEffect(()=>{try{window.localStorage.setItem(zy,String(js))}catch{}},[js]);const fn=B=>{const X=Ho.current;if(!X)return;const q=X.startWidth+(B-X.startX);X.pendingWidth=Math.min(Hy,Math.max(Py,q));const R=li.current;R&&(R.style.width=`${X.pendingWidth}px`)},Ps=(B,X)=>{const q=Ho.current;if(q&&!(X!=null&&q.pointerId!==X)){Ho.current=null,ao({dragging:!1,lastEvent:B}),document.body.style.cursor="",document.body.style.userSelect="",Zo(q.pendingWidth);try{window.localStorage.setItem(Oy,String(q.pendingWidth))}catch{}}},Wt=B=>{B.button===0&&(B.preventDefault(),ao({dragging:!0,lastEvent:"handle:pointerdown"}),console.debug("[sidebar-resize] pointerdown",{pointerId:B.pointerId,clientX:B.clientX,width:Uo.current}),Ho.current={startX:B.clientX,startWidth:Uo.current,pendingWidth:Uo.current,pointerId:B.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",B.currentTarget.setPointerCapture(B.pointerId))},as=B=>{const X=Ho.current;!X||X.pointerId!==B.pointerId||(Yn.lastEvent!=="move"&&console.debug("[sidebar-resize] pointermove",{clientX:B.clientX}),ao(q=>q.dragging?{dragging:!0,lastEvent:"move"}:q),fn(B.clientX))},Ss=B=>{if(Ho.current){console.debug("[sidebar-resize] pointerup",{pointerId:B.pointerId});try{B.currentTarget.releasePointerCapture(B.pointerId)}catch{}Ps("pointerup",B.pointerId)}},gs=B=>{if(Ho.current){console.debug("[sidebar-resize] pointercancel",{pointerId:B.pointerId});try{B.currentTarget.releasePointerCapture(B.pointerId)}catch{}Ps("pointercancel",B.pointerId)}};return l.jsx("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:l.jsx("div",{className:"relative z-30 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:li,className:"relative z-20 flex h-full min-h-0 flex-none overflow-visible",style:{width:js?64:jn},children:[l.jsx("button",{type:"button",className:"window-no-drag absolute right-2.5 left-22 top-2.25 z-[9999] inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent","aria-label":js?"Open sidebar":"Collapse sidebar",onClick:()=>vn(B=>!B),children:js?l.jsx(ww,{className:"h-4 w-4 shrink-0"}):l.jsx(bw,{className:"h-4 w-4 shrink-0"})}),l.jsx(_S,{className:xS("min-h-0 shrink-0 overflow-hidden pt-14 transition-[width,opacity] duration-300 ease-in-out","opacity-100"),style:{width:"100%"},collapsed:js,projects:wi,activeProjectPath:t,onSelectProject:Ds,onAddProject:ro,onRemoveProject:Ks,onRevealProjectInFinder:Is,projectLoading:Ke||(p&&t?!((ho=d[t])!=null&&ho.loaded):!1),projectError:Qt,checkedOutRef:V,showCommits:Rt,onToggleShowCommits:()=>Ut(B=>!B),manuallyOpenedClumpsByProject:Te,manuallyClosedClumpsByProject:fe,manuallyOpenedClumps:qt,manuallyClosedClumps:nn,setManuallyOpenedClumps:As,setManuallyClosedClumps:Ro,gridLayoutModel:_n,onSelectCommit:di,onSelectBranch:M}),js?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:Wt,onPointerMove:as,onPointerUp:Ss,onPointerCancel:gs,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"})]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-40 h-12"}),l.jsx(lS,{branches:U,mergeNodes:b,directCommits:Ve,unpushedDirectCommits:E,unpushedCommitShasByBranch:z,defaultBranch:Y,branchCommitPreviews:ue,branchParentByName:Fe,branchUniqueAheadCounts:ke,gridSearchQuery:se,gridSearchJumpToken:P,gridSearchJumpDirection:F,gridFocusSha:We,onGridSearchResultCountChange:Se,onGridSearchResultIndexChange:He,onGridSearchFocusChange:ot,checkedOutRef:V,onCommitClick:Si,onMergeRefsIntoBranch:Ci,mergeInProgress:qe,onPushAllBranches:ki,onPushCurrentBranch:Hi,onPushCommitTargets:ui,pushInProgress:yt,onDeleteSelection:bo,deleteInProgress:at,worktrees:le,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:Wn,removeWorktreeInProgress:De,onSwitchToWorktree:Vn,onStashLocalChanges:ta,stashInProgress:qn,stashDisabled:!1,onCommitLocalChanges:Ii,commitInProgress:En,commitDisabled:!1,onStageAllChanges:Pi,stageInProgress:Tt,onCreateBranchFromNode:ei,onCreateRootBranch:Nt,createBranchFromNodeInProgress:ks,isDebugOpen:wo,onDebugClose:()=>zs(!1),onInteractionChange:Do,manuallyOpenedClumps:qt,manuallyClosedClumps:nn,setManuallyOpenedClumps:As,setManuallyClosedClumps:Ro,layoutModel:_n,orientation:os,gridHudProps:Vo})]}),ce&&l.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl overflow-hidden ${nt?"animate-error-panel-out":"animate-error-panel-in"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[l.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),l.jsx("button",{onClick:zo,className:"text-muted-foreground hover:text-foreground transition-colors",children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[l.jsxs("button",{onClick:()=>ct("active"),className:`text-xs font-medium transition-colors ${Qe==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[xo.length," active"]}),l.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),l.jsxs("button",{onClick:()=>ct("inactive"),className:`text-xs font-medium transition-colors ${Qe==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[uo.length," inactive"]})]}),l.jsx("div",{className:"overflow-y-auto max-h-64",children:(Qe==="active"?xo:uo).map(B=>{const X=(bt==null?void 0:bt.name)===B.name,q=Oo(B);return l.jsxs("button",{onClick:()=>Fo(B),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:`text-sm font-medium truncate ${X?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:B.name}),l.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[q>0&&`${q} ahead`,q>0&&B.commitsBehind>0&&", ",B.commitsBehind>0&&`${B.commitsBehind} behind`]})]}),l.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},B.name)})})]})]})})})}var Bc=Ix(),wS=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,SS={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=wS}var cs=SS,CS=`.icon-transitions-module__iconState___uqK9J {
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
}`,kS={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=CS}var ts=kS,jS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),MS=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),ES=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),TS=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${ts.iconState} ${n?ts.hiddenScaled:ts.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${ts.iconState} ${n?ts.visibleScaled:ts.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),AS=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${ts.iconStateFast} ${i?ts.visibleScaled:u?ts.sending:ts.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${ts.iconStateFast} ${a?ts.visibleScaled:ts.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ts.iconStateFast} ${c?ts.visibleScaled:ts.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},NS=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ts.iconFade} ${n?ts.visible:ts.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ts.iconFade} ${n?ts.hidden:ts.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),DS=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ts.iconFadeFast} ${n?ts.hidden:ts.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${ts.iconFadeFast} ${n?ts.visible:ts.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),RS=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),BS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),eb=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),LS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),OS=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),zS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),$S=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),IS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),PS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),HS=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),tb=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Zh=tb.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Dm="feedback-freeze-styles",Jh="__agentation_freeze";function US(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Jh]||(t[Jh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Jh]}var cn=US();typeof window<"u"&&!cn.installed&&(cn.origSetTimeout=window.setTimeout.bind(window),cn.origSetInterval=window.setInterval.bind(window),cn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?cn.origSetTimeout(t,n):cn.origSetTimeout((...a)=>{cn.frozen?cn.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?cn.origSetInterval(t,n):cn.origSetInterval((...a)=>{cn.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>cn.origRAF(n=>{cn.frozen?cn.frozenRAFQueue.push(t):t(n)}),cn.installed=!0);var Ht=cn.origSetTimeout,VS=cn.origSetInterval,fl=cn.origRAF;function YS(t){return t?tb.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function WS(){if(typeof document>"u"||cn.frozen)return;cn.frozen=!0,cn.frozenTimeoutQueue=[],cn.frozenRAFQueue=[];let t=document.getElementById(Dm);t||(t=document.createElement("style"),t.id=Dm),t.textContent=`
    *${Zh},
    *${Zh}::before,
    *${Zh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),cn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;YS(i)||(n.pause(),cn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function Vy(){var i;if(typeof document>"u"||!cn.frozen)return;cn.frozen=!1;const t=cn.frozenTimeoutQueue;cn.frozenTimeoutQueue=[];for(const a of t)cn.origSetTimeout(()=>{if(cn.frozen){cn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=cn.frozenRAFQueue;cn.frozenRAFQueue=[];for(const a of n)cn.origRAF(c=>{if(cn.frozen){cn.frozenRAFQueue.push(a);return}a(c)});for(const a of cn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}cn.pausedAnimations=[],(i=document.getElementById(Dm))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function em(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var jd=_.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:y,style:g,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:S=!1,computedStyles:k},j){const[E,T]=_.useState(u),[z,O]=_.useState(!1),[D,K]=_.useState("initial"),[Y,Q]=_.useState(!1),[V,ee]=_.useState(!1),le=_.useRef(null),re=_.useRef(null),De=_.useRef(null),Ye=_.useRef(null);_.useEffect(()=>{b&&D!=="exit"&&K("exit")},[b,D]),_.useEffect(()=>{Ht(()=>{K("enter")},0);const pe=Ht(()=>{K("entered")},200),Te=Ht(()=>{const I=le.current;I&&(em(I),I.selectionStart=I.selectionEnd=I.value.length,I.scrollTop=I.scrollHeight)},50);return()=>{clearTimeout(pe),clearTimeout(Te),De.current&&clearTimeout(De.current),Ye.current&&clearTimeout(Ye.current)}},[]);const se=_.useCallback(()=>{Ye.current&&clearTimeout(Ye.current),O(!0),Ye.current=Ht(()=>{O(!1),em(le.current)},250)},[]);_.useImperativeHandle(j,()=>({shake:se}),[se]);const me=_.useCallback(()=>{K("exit"),De.current=Ht(()=>{p()},150)},[p]),P=_.useCallback(()=>{E.trim()&&h(E.trim())},[E,h]),ae=_.useCallback(pe=>{pe.stopPropagation(),!pe.nativeEvent.isComposing&&(pe.key==="Enter"&&!pe.shiftKey&&(pe.preventDefault(),P()),pe.key==="Escape"&&me())},[P,me]),F=[cs.popup,S?cs.light:"",D==="enter"?cs.enter:"",D==="entered"?cs.entered:"",D==="exit"?cs.exit:"",z?cs.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:re,className:F,"data-annotation-popup":!0,style:g,onClick:pe=>pe.stopPropagation(),children:[l.jsxs("div",{className:cs.header,children:[k&&Object.keys(k).length>0?l.jsxs("button",{className:cs.headerToggle,onClick:()=>{const pe=V;ee(!V),pe&&Ht(()=>em(le.current),0)},type:"button",children:[l.jsx("svg",{className:`${cs.chevron} ${V?cs.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:cs.element,children:n})]}):l.jsx("span",{className:cs.element,children:n}),i&&l.jsx("span",{className:cs.timestamp,children:i})]}),k&&Object.keys(k).length>0&&l.jsx("div",{className:`${cs.stylesWrapper} ${V?cs.expanded:""}`,children:l.jsx("div",{className:cs.stylesInner,children:l.jsx("div",{className:cs.stylesBlock,children:Object.entries(k).map(([pe,Te])=>l.jsxs("div",{className:cs.styleLine,children:[l.jsx("span",{className:cs.styleProperty,children:pe.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:cs.styleValue,children:Te}),";"]},pe))})})}),a&&l.jsxs("div",{className:cs.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:le,className:cs.textarea,style:{borderColor:Y?x:void 0},placeholder:c,value:E,onChange:pe=>T(pe.target.value),onFocus:()=>Q(!0),onBlur:()=>Q(!1),rows:2,onKeyDown:ae}),l.jsxs("div",{className:cs.actions,children:[y&&l.jsx("div",{className:cs.deleteWrapper,children:l.jsx("button",{className:cs.deleteButton,onClick:y,type:"button",children:l.jsx(IS,{size:22})})}),l.jsx("button",{className:cs.cancel,onClick:me,children:"Cancel"}),l.jsx("button",{className:cs.submit,style:{backgroundColor:x,opacity:E.trim()?1:.4},onClick:P,disabled:!E.trim(),children:d})]})]})}),FS=({content:t,children:n,...i})=>{const[a,c]=_.useState(!1),[u,d]=_.useState(!1),[h,p]=_.useState({top:0,right:0}),y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=()=>{if(y.current){const j=y.current.getBoundingClientRect();p({top:j.top+j.height/2,right:window.innerWidth-j.left+8})}},S=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),g.current=Ht(()=>{c(!0)},500)},k=()=>{g.current&&(clearTimeout(g.current),g.current=null),c(!1),x.current=Ht(()=>{d(!1)},150)};return _.useEffect(()=>()=>{g.current&&clearTimeout(g.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:y,onMouseEnter:S,onMouseLeave:k,...i,children:n}),u&&Bc.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},XS=`.styles-module__tooltip___mcXL2 {
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
}`,GS={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=XS}var Yy=GS,Er=({content:t})=>l.jsx(FS,{className:Yy.tooltip,content:t,children:l.jsx(ES,{className:Yy.tooltipIcon})}),xt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},nb=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...xt.navigation},{type:"header",label:"Header",...xt.header},{type:"hero",label:"Hero",...xt.hero},{type:"section",label:"Section",...xt.section},{type:"sidebar",label:"Sidebar",...xt.sidebar},{type:"footer",label:"Footer",...xt.footer},{type:"modal",label:"Modal",...xt.modal},{type:"banner",label:"Banner",...xt.banner},{type:"drawer",label:"Drawer",...xt.drawer},{type:"popover",label:"Popover",...xt.popover},{type:"divider",label:"Divider",...xt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...xt.card},{type:"text",label:"Text",...xt.text},{type:"image",label:"Image",...xt.image},{type:"video",label:"Video",...xt.video},{type:"table",label:"Table",...xt.table},{type:"grid",label:"Grid",...xt.grid},{type:"list",label:"List",...xt.list},{type:"chart",label:"Chart",...xt.chart},{type:"codeBlock",label:"Code Block",...xt.codeBlock},{type:"map",label:"Map",...xt.map},{type:"timeline",label:"Timeline",...xt.timeline},{type:"calendar",label:"Calendar",...xt.calendar},{type:"accordion",label:"Accordion",...xt.accordion},{type:"carousel",label:"Carousel",...xt.carousel},{type:"logo",label:"Logo",...xt.logo},{type:"faq",label:"FAQ",...xt.faq},{type:"gallery",label:"Gallery",...xt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...xt.button},{type:"input",label:"Input",...xt.input},{type:"search",label:"Search",...xt.search},{type:"form",label:"Form",...xt.form},{type:"tabs",label:"Tabs",...xt.tabs},{type:"dropdown",label:"Dropdown",...xt.dropdown},{type:"toggle",label:"Toggle",...xt.toggle},{type:"stepper",label:"Stepper",...xt.stepper},{type:"rating",label:"Rating",...xt.rating},{type:"fileUpload",label:"File Upload",...xt.fileUpload},{type:"checkbox",label:"Checkbox",...xt.checkbox},{type:"radio",label:"Radio",...xt.radio},{type:"slider",label:"Slider",...xt.slider},{type:"datePicker",label:"Date Picker",...xt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...xt.avatar},{type:"badge",label:"Badge",...xt.badge},{type:"tag",label:"Tag",...xt.tag},{type:"breadcrumb",label:"Breadcrumb",...xt.breadcrumb},{type:"pagination",label:"Pagination",...xt.pagination},{type:"progress",label:"Progress",...xt.progress},{type:"alert",label:"Alert",...xt.alert},{type:"toast",label:"Toast",...xt.toast},{type:"notification",label:"Notification",...xt.notification},{type:"tooltip",label:"Tooltip",...xt.tooltip},{type:"stat",label:"Stat",...xt.stat},{type:"skeleton",label:"Skeleton",...xt.skeleton},{type:"chip",label:"Chip",...xt.chip},{type:"icon",label:"Icon",...xt.icon},{type:"spinner",label:"Spinner",...xt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...xt.pricing},{type:"testimonial",label:"Testimonial",...xt.testimonial},{type:"cta",label:"CTA",...xt.cta},{type:"productCard",label:"Product Card",...xt.productCard},{type:"profile",label:"Profile",...xt.profile},{type:"feature",label:"Feature",...xt.feature},{type:"team",label:"Team",...xt.team},{type:"login",label:"Login",...xt.login},{type:"contact",label:"Contact",...xt.contact}]}],Qi={};for(const t of nb)for(const n of t.items)Qi[n.type]=n;function Ue({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Gn({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function Qo({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function qS({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx(Gn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(Ue,{w:t*.06}),l.jsx(Ue,{w:t*.07}),l.jsx(Ue,{w:t*.05}),l.jsx(Ue,{w:t*.06})]}),l.jsx(Gn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function KS({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Ue,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Ue,{w:t*.6}),l.jsx(Ue,{w:t*.4}),l.jsx(Gn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function QS({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Ue,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Gn,{w:10,h:10,radius:2}),l.jsx(Ue,{w:t*(.4+c*17%30/100)})]},c))]})}function ZS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ue,{w:"60%",h:3,strong:!0}),l.jsx(Ue,{w:"80%",h:2}),l.jsx(Ue,{w:"70%",h:2}),l.jsx(Ue,{w:"60%",h:2})]},c))})}function JS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ue,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Ue,{w:"90%"}),l.jsx(Ue,{w:"70%"}),l.jsx(Ue,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(Gn,{w:70,h:26,radius:4}),l.jsx(Gn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function e4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ue,{w:"70%",h:4,strong:!0}),l.jsx(Ue,{w:"95%",h:2}),l.jsx(Ue,{w:"85%",h:2}),l.jsx(Ue,{w:"50%",h:2})]})]})}function t4({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Ue,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Ue,{w:`${70+u*13%25}%`,h:2},u))]})}function n4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function s4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Ue,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Ue,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function o4({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(Qo,{size:8}),l.jsx(Ue,{w:`${55+c*17%35}%`,h:2})]},c))})}function i4({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Ue,{w:Math.max(20,t*.5),h:3,strong:!0})})}function a4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Ue,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Ue,{w:"40%",h:2})})]})}function r4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ue,{w:60+c*17%30,h:2}),l.jsx(Gn,{w:"100%",h:28,radius:4})]},c)),l.jsx(Gn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function l4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Ue,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Ue,{w:"80%",h:2}),l.jsx(Ue,{w:"65%",h:2}),l.jsx(Ue,{w:"75%",h:2})]})]})}function c4({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function u4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Ue,{w:Math.max(16,t*.5),h:2,strong:!0})})}function d4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Ue,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Ue,{w:t*.35})]})}function f4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(Ue,{w:t*.3,h:4,strong:!0}),l.jsx(Ue,{w:t*.7}),l.jsx(Ue,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx(Gn,{w:"33%",h:"100%",radius:4}),l.jsx(Gn,{w:"33%",h:"100%",radius:4}),l.jsx(Gn,{w:"33%",h:"100%",radius:4})]})]})}function h4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(Gn,{w:"100%",h:"100%",radius:4},u))})}function m4({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Ue,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Ue,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function p4({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function _4({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(Qo,{size:Math.min(14,n*.4)}),l.jsx(Ue,{w:"50%",h:2})]})}function g4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Qo,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:"60%",h:3,strong:!0}),l.jsx(Ue,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function y4({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function x4({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(Gn,{w:a,h:`${d}%`,radius:2},u)})})}function b4({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(Gn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function v4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Ue,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function w4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Ue,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function S4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(Gn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function C4({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function k4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Ue,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function j4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Gn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(Qo,{size:5}),l.jsx(Qo,{size:5}),l.jsx(Qo,{size:5})]})]})}function M4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Ue,{w:t*.4,h:3,strong:!0}),l.jsx(Ue,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(Qo,{size:5}),l.jsx(Ue,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(Gn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function E4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ue,{w:"90%",h:2}),l.jsx(Ue,{w:"75%",h:2}),l.jsx(Ue,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Qo,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Ue,{w:60,h:3,strong:!0}),l.jsx(Ue,{w:40,h:2})]})]})]})}function T4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Ue,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Ue,{w:t*.35}),l.jsx(Gn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function A4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:"40%",h:3,strong:!0}),l.jsx(Ue,{w:"70%",h:2})]})]})}function N4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Ue,{w:t*.4,h:3,strong:!0}),l.jsx(Gn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function D4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Ue,{w:t*.5,h:2}),l.jsx(Ue,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Ue,{w:t*.3,h:2})]})}function R4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function B4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Ue,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function L4({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function O4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function z4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(Qo,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Ue,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function $4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Ue,{w:t*.4,h:2}),l.jsx(Ue,{w:t*.25,h:2})]})}function I4({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(Qo,{size:6}),l.jsx(Qo,{size:6}),l.jsx(Qo,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Ue,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function P4({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Ue,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Ue,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function H4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Qo,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:"50%",h:3,strong:!0}),l.jsx(Ue,{w:"75%",h:2})]}),l.jsx(Ue,{w:30,h:2})]})}function U4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ue,{w:"65%",h:4,strong:!0}),l.jsx(Ue,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ue,{w:"30%",h:5,strong:!0}),l.jsx(Gn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function V4({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Qo,{size:i}),l.jsx(Ue,{w:t*.45,h:4,strong:!0}),l.jsx(Ue,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ue,{w:20,h:3,strong:!0}),l.jsx(Ue,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ue,{w:20,h:3,strong:!0}),l.jsx(Ue,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ue,{w:20,h:3,strong:!0}),l.jsx(Ue,{w:28,h:2})]})]})]})}function Y4({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Ue,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Ue,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function W4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ue,{w:"70%",h:3,strong:!0}),l.jsx(Ue,{w:"90%",h:2}),l.jsx(Ue,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function F4({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx(Gn,{w:i,h:i,radius:i*.25}),l.jsx(Ue,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function X4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Ue,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function G4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function q4({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function K4({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function Q4({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function Z4({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Ue,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Ue,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function J4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function e6({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Ue,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function t6({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function n6({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function s6({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx(Gn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ue,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Ue,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function o6({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Ue,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(Qo,{size:a}),l.jsx(Ue,{w:t*.12,h:3,strong:!0}),l.jsx(Ue,{w:t*.08,h:2})]},u))})]})}function i6({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(Ue,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Ue,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:Math.min(60,t*.2),h:2}),l.jsx(Gn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(Gn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Ue,{w:t*.4,h:2})]})}function a6({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(Ue,{w:t*.4,h:4,strong:!0}),l.jsx(Ue,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:50,h:2}),l.jsx(Gn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:40,h:2}),l.jsx(Gn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:50,h:2}),l.jsx(Gn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Ue,{w:60,h:2}),l.jsx(Gn,{w:"100%",h:"100%",radius:4})]}),l.jsx(Gn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var r6={navigation:qS,hero:KS,sidebar:QS,footer:ZS,modal:JS,card:e4,text:t4,image:n4,table:s4,list:o4,button:i4,input:a4,form:r4,tabs:l4,avatar:c4,badge:u4,header:d4,section:f4,grid:h4,dropdown:m4,toggle:p4,search:_4,toast:g4,progress:y4,chart:x4,video:b4,tooltip:v4,breadcrumb:w4,pagination:S4,divider:C4,accordion:k4,carousel:j4,pricing:M4,testimonial:E4,cta:T4,alert:A4,banner:N4,stat:D4,stepper:R4,tag:B4,rating:L4,map:O4,timeline:z4,fileUpload:$4,codeBlock:I4,calendar:P4,notification:H4,productCard:U4,profile:V4,drawer:Y4,popover:W4,logo:F4,faq:X4,gallery:G4,checkbox:q4,radio:K4,slider:Q4,datePicker:Z4,skeleton:J4,chip:e6,icon:t6,spinner:n6,feature:s6,team:o6,login:i6,contact:a6};function l6({type:t,width:n,height:i,text:a}){const c=r6[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var c6=`svg[fill=none] {
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
}`,u6={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=c6}var Oe=u6,ll=24,Xu=5;function Wy(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,y=t.x+t.width/2,g=t.y,x=t.y+t.height,b=t.y+t.height/2,S=!a,k=S?[h,p,y]:[...a.left?[h]:[],...a.right?[p]:[]],j=S?[g,x,b]:[...a.top?[g]:[],...a.bottom?[x]:[]],E=[];for(const re of n)i.has(re.id)||E.push(re);c&&E.push(...c);for(const re of E){const De=re.x,Ye=re.x+re.width,se=re.x+re.width/2,me=re.y,P=re.y+re.height,ae=re.y+re.height/2;for(const F of k)for(const pe of[De,Ye,se]){const Te=pe-F;Math.abs(Te)<Xu&&Math.abs(Te)<Math.abs(u)&&(u=Te)}for(const F of j)for(const pe of[me,P,ae]){const Te=pe-F;Math.abs(Te)<Xu&&Math.abs(Te)<Math.abs(d)&&(d=Te)}}const T=Math.abs(u)<Xu?u:0,z=Math.abs(d)<Xu?d:0,O=[],D=new Set,K=h+T,Y=p+T,Q=y+T,V=g+z,ee=x+z,le=b+z;for(const re of E){const De=re.x,Ye=re.x+re.width,se=re.x+re.width/2,me=re.y,P=re.y+re.height,ae=re.y+re.height/2;for(const F of[De,se,Ye])for(const pe of[K,Q,Y])if(Math.abs(pe-F)<.5){const Te=`x:${Math.round(F)}`;D.has(Te)||(D.add(Te),O.push({axis:"x",pos:F}))}for(const F of[me,ae,P])for(const pe of[V,le,ee])if(Math.abs(pe-F)<.5){const Te=`y:${Math.round(F)}`;D.has(Te)||(D.add(Te),O.push({axis:"y",pos:F}))}}return{dx:T,dy:z,guides:O}}function Fy(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function d6({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:y,onSelectionChange:g,deselectSignal:x,onDragMove:b,onDragEnd:S,clearSignal:k,wireframe:j}){const[E,T]=_.useState(new Set),[z,O]=_.useState(null),[D,K]=_.useState(null),[Y,Q]=_.useState(null),[V,ee]=_.useState([]),[le,re]=_.useState(null),[De,Ye]=_.useState(!1),se=_.useRef(!1),[me,P]=_.useState(new Set),ae=_.useRef(new Map),F=_.useRef(null),pe=_.useRef(null),Te=_.useRef(t);Te.current=t;const I=_.useRef(g);I.current=g;const fe=_.useRef(b);fe.current=b;const G=_.useRef(S);G.current=S;const _e=_.useRef(x);_.useEffect(()=>{x!==_e.current&&(_e.current=x,T(new Set))},[x]);const Se=_.useRef(k);_.useEffect(()=>{if(k!==void 0&&k!==Se.current){Se.current=k;const ce=new Set(Te.current.map(tt=>tt.id));ce.size>0&&(P(ce),T(new Set),pe.current=null,Ht(()=>{n([]),P(new Set)},180))}},[k,n]),_.useEffect(()=>{const ce=tt=>{const nt=tt.target;if(!(nt.tagName==="INPUT"||nt.tagName==="TEXTAREA"||nt.isContentEditable)){if((tt.key==="Backspace"||tt.key==="Delete")&&E.size>0){tt.preventDefault();const Qe=new Set(E);P(Qe),T(new Set),Ht(()=>{n(Te.current.filter(ct=>!Qe.has(ct.id))),P(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(tt.key)&&E.size>0){tt.preventDefault();const Qe=tt.shiftKey?20:1,ct=tt.key==="ArrowLeft"?-Qe:tt.key==="ArrowRight"?Qe:0,ft=tt.key==="ArrowUp"?-Qe:tt.key==="ArrowDown"?Qe:0;n(t.map(Ct=>E.has(Ct.id)?{...Ct,x:Math.max(0,Ct.x+ct),y:Math.max(0,Ct.y+ft)}:Ct));return}if(tt.key==="Escape"){i?a(null):E.size>0&&T(new Set);return}}};return document.addEventListener("keydown",ce),()=>document.removeEventListener("keydown",ce)},[E,i,t,n,a]);const Ne=_.useCallback(ce=>{if(ce.button!==0||p||ce.target.closest(`.${Oe.placement}`))return;ce.preventDefault(),ce.stopPropagation();const nt=window.scrollY,Ze=ce.clientX,Qe=ce.clientY;if(i){pe.current="place",d==null||d(!0);let ct=!1,ft=Ze,Ct=Qe;const bt=it=>{ft=it.clientX,Ct=it.clientY;const H=Math.abs(ft-Ze),oe=Math.abs(Ct-Qe);if((H>5||oe>5)&&(ct=!0),ct){const be=Math.min(Ze,ft),J=Math.min(Qe,Ct),Me=Math.abs(ft-Ze),we=Math.abs(Ct-Qe);O({x:be,y:J,w:Me,h:we}),Q({x:it.clientX+12,y:it.clientY+12,text:`${Math.round(Me)} × ${Math.round(we)}`})}},$t=it=>{window.removeEventListener("mousemove",bt),window.removeEventListener("mouseup",$t),O(null),Q(null),pe.current=null,d==null||d(!1);const H=xt[i];let oe,be,J,Me;ct?(oe=Math.min(Ze,ft),be=Math.min(Qe,Ct)+nt,J=Math.max(ll,Math.abs(ft-Ze)),Me=Math.max(ll,Math.abs(Ct-Qe))):(J=H.width,Me=H.height,oe=Ze-J/2,be=Qe+nt-Me/2),oe=Math.max(0,oe),be=Math.max(0,be);const we={id:Fy(),type:i,x:oe,y:be,width:J,height:Me,scrollY:nt,timestamp:Date.now()},he=[...t,we];n(he),T(new Set([we.id])),a(null)};window.addEventListener("mousemove",bt),window.addEventListener("mouseup",$t)}else{ce.shiftKey||T(new Set),pe.current="select";let ct=!1;const ft=bt=>{const $t=Math.abs(bt.clientX-Ze),it=Math.abs(bt.clientY-Qe);if(($t>4||it>4)&&(ct=!0),ct){const H=Math.min(Ze,bt.clientX),oe=Math.min(Qe,bt.clientY);K({x:H,y:oe,w:Math.abs(bt.clientX-Ze),h:Math.abs(bt.clientY-Qe)})}},Ct=bt=>{if(window.removeEventListener("mousemove",ft),window.removeEventListener("mouseup",Ct),pe.current=null,ct){const $t=Math.min(Ze,bt.clientX),it=Math.min(Qe,bt.clientY)+nt,H=Math.abs(bt.clientX-Ze),oe=Math.abs(bt.clientY-Qe),be=new Set(ce.shiftKey?E:new Set);for(const J of t)J.y-nt,J.x+J.width>$t&&J.x<$t+H&&J.y+J.height>it&&J.y<it+oe&&be.add(J.id);T(be)}K(null)};window.addEventListener("mousemove",ft),window.addEventListener("mouseup",Ct)}},[i,p,t,n,E]),He=_.useCallback((ce,tt)=>{var we;if(ce.button!==0)return;const nt=ce.target;if(nt.closest(`.${Oe.handle}`)||nt.closest(`.${Oe.deleteButton}`))return;ce.preventDefault(),ce.stopPropagation();let Ze;ce.shiftKey?(Ze=new Set(E),Ze.has(tt)?Ze.delete(tt):Ze.add(tt)):E.has(tt)?Ze=new Set(E):Ze=new Set([tt]),T(Ze),(Ze.size!==E.size||[...Ze].some(he=>!E.has(he)))&&((we=I.current)==null||we.call(I,Ze,ce.shiftKey));const ct=ce.clientX,ft=ce.clientY,Ct=new Map;for(const he of t)Ze.has(he.id)&&Ct.set(he.id,{x:he.x,y:he.y});pe.current="move",d==null||d(!0);let bt=!1,$t=!1,it=t,H=0,oe=0;const be=new Map;for(const he of t)Ct.has(he.id)&&be.set(he.id,{w:he.width,h:he.height});const J=he=>{var kt;const Ie=he.clientX-ct,Ee=he.clientY-ft;if((Math.abs(Ie)>2||Math.abs(Ee)>2)&&(bt=!0),!bt)return;if(he.altKey&&!$t){$t=!0;const mt=[];for(const Lt of t)Ct.has(Lt.id)&&mt.push({...Lt,id:Fy(),timestamp:Date.now()});it=[...t,...mt]}let gt=1/0,dt=1/0,qe=-1/0,ht=-1/0;for(const[mt,Lt]of Ct){const on=be.get(mt);on&&(gt=Math.min(gt,Lt.x+Ie),dt=Math.min(dt,Lt.y+Ee),qe=Math.max(qe,Lt.x+Ie+on.w),ht=Math.max(ht,Lt.y+Ee+on.h))}const yt={x:gt,y:dt,width:qe-gt,height:ht-dt},{dx:Et,dy:at,guides:Mt}=Wy(yt,it,new Set(Ct.keys()),void 0,y);ee(Mt);const Vt=Ie+Et,lt=Ee+at;H=Vt,oe=lt,n(it.map(mt=>{const Lt=Ct.get(mt.id);return Lt?{...mt,x:Math.max(0,Lt.x+Vt),y:Math.max(0,Lt.y+lt)}:mt})),(kt=fe.current)==null||kt.call(fe,Vt,lt)},Me=()=>{var he;window.removeEventListener("mousemove",J),window.removeEventListener("mouseup",Me),pe.current=null,d==null||d(!1),ee([]),(he=G.current)==null||he.call(G,H,oe,bt)};window.addEventListener("mousemove",J),window.addEventListener("mouseup",Me)},[E,t,n,d]),We=_.useCallback((ce,tt,nt)=>{ce.preventDefault(),ce.stopPropagation();const Ze=t.find(be=>be.id===tt);if(!Ze)return;T(new Set([tt])),pe.current="resize",d==null||d(!0);const Qe=ce.clientX,ct=ce.clientY,ft=Ze.width,Ct=Ze.height,bt=Ze.x,$t=Ze.y,it={left:nt.includes("w"),right:nt.includes("e"),top:nt.includes("n"),bottom:nt.includes("s")},H=be=>{const J=be.clientX-Qe,Me=be.clientY-ct;let we=ft,he=Ct,Ie=bt,Ee=$t;nt.includes("e")&&(we=Math.max(ll,ft+J)),nt.includes("w")&&(we=Math.max(ll,ft-J),Ie=bt+ft-we),nt.includes("s")&&(he=Math.max(ll,Ct+Me)),nt.includes("n")&&(he=Math.max(ll,Ct-Me),Ee=$t+Ct-he);const gt={x:Ie,y:Ee,width:we,height:he},{dx:dt,dy:qe,guides:ht}=Wy(gt,Te.current,new Set([tt]),it,y);ee(ht),dt!==0&&(it.right?we+=dt:it.left&&(Ie+=dt,we-=dt)),qe!==0&&(it.bottom?he+=qe:it.top&&(Ee+=qe,he-=qe)),n(Te.current.map(yt=>yt.id===tt?{...yt,x:Ie,y:Ee,width:we,height:he}:yt)),Q({x:be.clientX+12,y:be.clientY+12,text:`${Math.round(we)} × ${Math.round(he)}`})},oe=()=>{window.removeEventListener("mousemove",H),window.removeEventListener("mouseup",oe),Q(null),pe.current=null,d==null||d(!1),ee([])};window.addEventListener("mousemove",H),window.addEventListener("mouseup",oe)},[t,n,d]),ot=_.useCallback(ce=>{pe.current=null,P(tt=>{const nt=new Set(tt);return nt.add(ce),nt}),T(tt=>{const nt=new Set(tt);return nt.delete(ce),nt}),Ht(()=>{n(Te.current.filter(tt=>tt.id!==ce)),P(tt=>{const nt=new Set(tt);return nt.delete(ce),nt})},180)},[n]),Rt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Ut=_.useCallback(ce=>{const tt=t.find(nt=>nt.id===ce);tt&&(se.current=!!tt.text,re(ce),Ye(!1))},[t]),Ke=_.useCallback(()=>{le&&(Ye(!0),Ht(()=>{re(null),Ye(!1)},150))},[le]);_.useEffect(()=>{u&&le&&Ke()},[u]);const et=_.useCallback(ce=>{le&&(n(t.map(tt=>tt.id===le?{...tt,text:ce.trim()||void 0}:tt)),Ke())},[le,t,n,Ke]),Bt=typeof window<"u"?window.scrollY:0,Kt=["nw","ne","se","sw"],Qt=j?"#f97316":"#3c82f7",ze=[{dir:"n",cls:Oe.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:Qt})})},{dir:"e",cls:Oe.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:Qt})})},{dir:"s",cls:Oe.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:Qt})})},{dir:"w",cls:Oe.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:Qt})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:F,className:`${Oe.overlay} ${c?"":Oe.light} ${i?Oe.placing:""} ${p?Oe.passthrough:""} ${u?Oe.overlayExiting:""} ${j?Oe.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Ne,children:t.map(ce=>{var Qe;const tt=E.has(ce.id),nt=((Qe=Qi[ce.type])==null?void 0:Qe.label)||ce.type,Ze=ce.y-Bt;return l.jsxs("div",{"data-design-placement":ce.id,className:`${Oe.placement} ${tt?Oe.selected:""} ${me.has(ce.id)?Oe.exiting:""}`,style:{left:ce.x,top:Ze,width:ce.width,height:ce.height,position:"fixed"},onMouseDown:ct=>He(ct,ce.id),onDoubleClick:()=>Ut(ce.id),children:[l.jsx("span",{className:Oe.placementLabel,children:nt}),l.jsx("span",{className:`${Oe.placementAnnotation} ${ce.text?Oe.annotationVisible:""}`,children:(ce.text&&ae.current.set(ce.id,ce.text),ce.text||ae.current.get(ce.id)||"")}),l.jsx("div",{className:Oe.placementContent,children:l.jsx(l6,{type:ce.type,width:ce.width,height:ce.height,text:ce.text})}),l.jsx("div",{className:Oe.deleteButton,onMouseDown:ct=>ct.stopPropagation(),onClick:()=>ot(ce.id),children:"✕"}),Kt.map(ct=>l.jsx("div",{className:`${Oe.handle} ${Oe[`handle${ct.charAt(0).toUpperCase()}${ct.slice(1)}`]}`,onMouseDown:ft=>We(ft,ce.id,ct)},ct)),ze.map(({dir:ct,cls:ft,arrow:Ct})=>l.jsx("div",{className:`${Oe.edgeHandle} ${ft}`,onMouseDown:bt=>We(bt,ce.id,ct),children:Ct},ct))]},ce.id)})}),le&&(()=>{var $t,it;const ce=t.find(H=>H.id===le);if(!ce)return null;const tt=ce.y-Bt,nt=ce.x+ce.width/2,Ze=tt-8,Qe=tt+ce.height+8,ct=Ze>200,ft=Qe<window.innerHeight-100,Ct=Math.max(160,Math.min(window.innerWidth-160,nt));let bt;return ct?bt={left:Ct,bottom:window.innerHeight-Ze}:ft?bt={left:Ct,top:Qe}:bt={left:Ct,top:Math.max(80,window.innerHeight/2-80)},l.jsx(jd,{element:(($t=Qi[ce.type])==null?void 0:$t.label)||ce.type,placeholder:Rt[ce.type]||"Label or content text",initialValue:(it=ce.text)!=null?it:"",submitLabel:se.current?"Save":"Set",onSubmit:et,onCancel:Ke,onDelete:se.current?()=>{et("")}:void 0,isExiting:De,lightMode:!c,style:bt})})(),z&&l.jsx("div",{className:Oe.drawBox,style:{left:z.x,top:z.y,width:z.w,height:z.h},"data-feedback-toolbar":!0}),D&&l.jsx("div",{className:Oe.selectBox,style:{left:D.x,top:D.y,width:D.w,height:D.h},"data-feedback-toolbar":!0}),Y&&l.jsx("div",{className:Oe.sizeIndicator,style:{left:Y.x,top:Y.y},"data-feedback-toolbar":!0,children:Y.text}),V.map((ce,tt)=>l.jsx("div",{className:Oe.guideLine,style:ce.axis==="x"?{position:"fixed",left:ce.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:ce.pos-Bt,right:0,height:1},"data-feedback-toolbar":!0},`${ce.axis}-${ce.pos}-${tt}`))]})}function f6(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?Oe.fadeTop:""} ${i?Oe.fadeBottom:""}`}var $="currentColor",Be="0.5";function h6({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:$,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:$,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:$,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:$,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:$,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:$,strokeWidth:Be})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:$,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:$,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:$,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:$,strokeWidth:Be})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:$,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:$,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:$,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:$,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:$,strokeWidth:Be,fill:$,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:Be})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:$,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:$,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:$,strokeWidth:Be})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:$,strokeWidth:Be,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:$,strokeWidth:Be,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:$,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:$,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:$,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:$,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:$,strokeWidth:Be}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:$,strokeWidth:Be,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:$,strokeWidth:Be,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:$,strokeWidth:Be})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:$,strokeWidth:Be})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:$,strokeWidth:Be,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:$,strokeWidth:Be,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:$,strokeWidth:Be}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:$,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:$,strokeWidth:Be}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:$,strokeWidth:Be}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:$,strokeWidth:Be})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:$,strokeWidth:Be,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:$,strokeWidth:Be,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:$,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:$,opacity:".15",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:Be})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:$,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:$,strokeWidth:Be,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:$,strokeWidth:Be})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:$,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:$,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:$,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:$,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:$,strokeWidth:Be,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:$,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:$,strokeWidth:Be})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:$,strokeWidth:Be,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:$,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:$,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:$,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:$,strokeWidth:Be})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:$,opacity:".2",stroke:$,strokeWidth:Be}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:$,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:$,strokeWidth:Be}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:$,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:$,strokeWidth:Be})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:$,strokeWidth:Be,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:$,strokeWidth:Be,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:$,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:$,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:$,strokeWidth:Be,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:$,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:$,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:$,opacity:".15",stroke:$,strokeWidth:Be})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:$,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:$,opacity:".2",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:$,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:Be,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:$,strokeWidth:Be,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:$,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:$,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:$,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:$,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:$,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:$,strokeWidth:Be,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:$,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:$,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:$,strokeWidth:Be})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:$,strokeWidth:Be,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:$,strokeWidth:Be})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:$,strokeWidth:Be}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:$,strokeWidth:Be,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:$,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:$,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:$,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:$,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Be})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:$,strokeWidth:Be,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:$,strokeWidth:Be}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:$,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:$,strokeWidth:Be})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:$,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:$,strokeWidth:Be,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:$,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:$,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:$,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:$,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:$,opacity:".08",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:$,strokeWidth:Be,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:$,strokeWidth:Be,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:$,strokeWidth:Be,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:$,strokeWidth:Be,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:$,strokeWidth:Be,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:$,strokeWidth:Be,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:$,strokeWidth:Be,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:$,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:$,strokeWidth:Be,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:$,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:$,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:$,strokeWidth:Be}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:$,opacity:".2"})]});default:return null}}function m6({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${Oe.placeScroll} ${c||""}`,children:nb.map(d=>l.jsxs("div",{className:Oe.paletteSection,children:[l.jsx("div",{className:Oe.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${Oe.paletteItem} ${t===h.type?Oe.active:""} ${u?Oe.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:Oe.paletteItemIcon,children:l.jsx(h6,{type:h.type})}),l.jsx("span",{className:Oe.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function p6({value:t,suffix:n}){const[i,a]=_.useState(null),[c,u]=_.useState(n),[d,h]=_.useState("up"),p=_.useRef(t),y=_.useRef(n),g=_.useRef(),x=i!==null&&c!==n;return _.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,y.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(y.current),p.current=t,y.current=n,clearTimeout(g.current),g.current=Ht(()=>a(null),250)}else y.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):x?l.jsxs("span",{className:Oe.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${Oe.rollingNum} ${d==="up"?Oe.exitUp:Oe.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${Oe.rollingNum} ${d==="up"?Oe.enterUp:Oe.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:Oe.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${Oe.rollingNum} ${d==="up"?Oe.exitUp:Oe.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${Oe.rollingNum} ${d==="up"?Oe.enterUp:Oe.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function _6({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:y,blankCanvas:g,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:S,Tooltip:k}){const[j,E]=_.useState(!1),[T,z]=_.useState("exit"),[O,D]=_.useState(!1),[K,Y]=_.useState(!0),Q=_.useRef(0),V=_.useRef(""),ee=_.useRef(0),le=_.useRef(),re=_.useRef(null),[De,Ye]=_.useState("");_.useEffect(()=>(u?(E(!0),clearTimeout(le.current),cancelAnimationFrame(ee.current),ee.current=fl(()=>{ee.current=fl(()=>{z("enter")})})):(cancelAnimationFrame(ee.current),z("exit"),clearTimeout(le.current),le.current=Ht(()=>{E(!1),d==null||d()},200)),()=>cancelAnimationFrame(ee.current)),[u]);const se=h>0||a>0,me=h+a;return me>0&&(Q.current=me,V.current=g?me===1?"Component":"Components":me===1?"Change":"Changes"),_.useEffect(()=>{if(se)O?Y(!1):(Y(!0),D(!0),fl(()=>{fl(()=>{Y(!1)})}));else{Y(!0);const P=Ht(()=>D(!1),300);return()=>clearTimeout(P)}},[se]),_.useEffect(()=>{if(!j)return;const P=re.current;if(!P)return;const ae=()=>Ye(f6(P));ae(),P.addEventListener("scroll",ae,{passive:!0});const F=new ResizeObserver(ae);return F.observe(P),()=>{P.removeEventListener("scroll",ae),F.disconnect()}},[j]),j?l.jsxs("div",{className:`${Oe.palette} ${Oe[T]} ${i?"":Oe.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:P=>P.stopPropagation(),onMouseDown:P=>P.stopPropagation(),onTransitionEnd:P=>{P.target===P.currentTarget&&(u||(clearTimeout(le.current),E(!1),z("exit"),d==null||d()))},children:[l.jsxs("div",{className:Oe.paletteHeader,children:[l.jsx("div",{className:Oe.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:Oe.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${Oe.canvasToggle} ${g?Oe.active:""}`,onClick:()=>x(!g),children:[l.jsx("span",{className:Oe.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:Oe.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${Oe.wireframePurposeWrap} ${g?"":Oe.collapsed}`,children:l.jsx("div",{className:Oe.wireframePurposeInner,children:l.jsx("textarea",{className:Oe.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:P=>S(P.target.value),rows:2})})}),l.jsx(m6,{activeType:t,onSelect:n,onDragStart:y,scrollRef:re,fadeClass:De,blankCanvas:g}),O&&l.jsx("div",{className:`${Oe.paletteFooterWrap} ${K?Oe.footerHidden:""}`,children:l.jsx("div",{className:Oe.paletteFooterInner,children:l.jsx("div",{className:Oe.paletteFooterInnerContent,children:l.jsxs("div",{className:Oe.paletteFooter,children:[l.jsx("span",{className:Oe.paletteFooterCount,children:l.jsx(p6,{value:Q.current,suffix:V.current})}),l.jsx("button",{className:Oe.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function gl(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function Go(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=gl(i)}return null}function g6(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(y=>y.length>2&&!y.match(/^[a-z]{1,2}$/)&&!y.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=gl(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function _l(t){var a,c,u,d,h,p,y,g;const n=g6(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=Go(t,"svg");if(x){const b=gl(x);if(b instanceof HTMLElement)return{name:`graphic in ${_l(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=gl(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),S=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:S?{name:`input [${S}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(y=t.textContent)==null?void 0:y.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(g=t.textContent)==null?void 0:g.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),S=t.getAttribute("aria-label");if(S)return{name:`${i} [${S}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const k=x.split(/[\s_-]+/).map(j=>j.replace(/[A-Z0-9]{5,}.*$/,"")).filter(j=>j.length>2&&!/^[a-z]{1,2}$/.test(j)).slice(0,2);if(k.length>0)return{name:k.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function rc(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function Gu(t){const n=gl(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(g=>g!==t&&g instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(g=>{var k;const x=g.tagName.toLowerCase(),b=g.className;let S="";if(typeof b=="string"&&b){const j=b.split(/\s+/).map(E=>E.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(E=>E.length>2&&!/^[a-z]{1,2}$/.test(E));j&&(S=`.${j}`)}if(x==="button"||x==="a"){const j=(k=g.textContent)==null?void 0:k.trim().slice(0,15);if(j)return`${x}${S} "${j}"`}return`${x}${S}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const g=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));g&&(h=`.${g}`)}const p=n.children.length,y=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+y}function lc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var sb=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),y6=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),x6=new Set(["input","textarea","select"]),b6=new Set(["img","video","canvas","svg"]),v6=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function qu(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;y6.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:x6.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:b6.has(a)?c=["width","height","objectFit","borderRadius"]:v6.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!sb.has(h)&&(i[u]=h)}return i}var w6=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Ku(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of w6){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!sb.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function S6(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function Qu(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Zu(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=gl(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var C6=new Set(["nav","header","main","section","article","footer","aside"]),Rm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Xy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},k6=new Set(["script","style","noscript","link","meta"]),j6=40;function ob(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Rr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":Rr(i)} > ${n}:nth-child(${c})`}return n}function Md(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&Rm[a])return Rm[a];if(Xy[n])return Xy[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=_l(t);return u.charAt(0).toUpperCase()+u.slice(1)}function ib(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function ab(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function M6(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(k6.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<j6)return;const y=C6.has(d),g=c.getAttribute("role")&&Rm[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!y&&!g&&!x)return;const b=window.scrollY,S=ob(c),k={x:p.x,y:S?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(c),tagName:d,selector:Rr(c),role:c.getAttribute("role"),className:ib(c),textSnippet:ab(c),originalRect:k,currentRect:{...k},originalIndex:u,isFixed:S})}),a}function E6(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=ob(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(t),tagName:t.tagName.toLowerCase(),selector:Rr(t),role:t.getAttribute("role"),className:ib(t),textSnippet:ab(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var Gy={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},qy=["nw","n","ne","e","se","s","sw","w"],Ju=24,Ky=16,ed=5;function Qy(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,y=t.y,g=t.y+t.height,x=t.y+t.height/2,b=[];for(const Q of n)i.has(Q.id)||b.push(Q.currentRect);a&&b.push(...a);for(const Q of b){const V=Q.x,ee=Q.x+Q.width,le=Q.x+Q.width/2,re=Q.y,De=Q.y+Q.height,Ye=Q.y+Q.height/2;for(const se of[d,h,p])for(const me of[V,ee,le]){const P=me-se;Math.abs(P)<ed&&Math.abs(P)<Math.abs(c)&&(c=P)}for(const se of[y,g,x])for(const me of[re,De,Ye]){const P=me-se;Math.abs(P)<ed&&Math.abs(P)<Math.abs(u)&&(u=P)}}const S=Math.abs(c)<ed?c:0,k=Math.abs(u)<ed?u:0,j=[],E=new Set,T=d+S,z=h+S,O=p+S,D=y+k,K=g+k,Y=x+k;for(const Q of b){const V=Q.x,ee=Q.x+Q.width,le=Q.x+Q.width/2,re=Q.y,De=Q.y+Q.height,Ye=Q.y+Q.height/2;for(const se of[V,le,ee])for(const me of[T,O,z])if(Math.abs(me-se)<.5){const P=`x:${Math.round(se)}`;E.has(P)||(E.add(P),j.push({axis:"x",pos:se}))}for(const se of[re,Ye,De])for(const me of[D,Y,K])if(Math.abs(me-se)<.5){const P=`y:${Math.round(se)}`;E.has(P)||(E.add(P),j.push({axis:"y",pos:se}))}}return{dx:S,dy:k,guides:j}}var T6=new Set(["script","style","noscript","link","meta","br","hr"]);function Zy(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(T6.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Ky&&i.height>=Ky)return n;n=n.parentElement}return null}function A6({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:y,onDragEnd:g,clearSignal:x}){const{sections:b}=t,S=_.useRef(t);S.current=t;const[k,j]=_.useState(new Set),[E,T]=_.useState(!1),z=_.useRef(x);_.useEffect(()=>{x!==void 0&&x!==z.current&&(z.current=x,b.length>0&&T(!0))},[x,b.length]);const O=_.useRef(p);_.useEffect(()=>{p!==O.current&&(O.current=p,j(new Set))},[p]);const[D,K]=_.useState(null),[Y,Q]=_.useState(!1),V=_.useRef(!1),ee=_.useCallback(H=>{const oe=b.find(be=>be.id===H);oe&&(V.current=!!oe.note,K(H),Q(!1))},[b]),le=_.useCallback(()=>{D&&(Q(!0),Ht(()=>{K(null),Q(!1)},150))},[D]),re=_.useCallback(H=>{D&&(n({...t,sections:b.map(oe=>oe.id===D?{...oe,note:H.trim()||void 0}:oe)}),le())},[D,b,t,n,le]);_.useEffect(()=>{a&&D&&le()},[a]);const[De,Ye]=_.useState(new Set),se=_.useRef(new Map),[me,P]=_.useState(null),[ae,F]=_.useState(null),[pe,Te]=_.useState([]),[I,fe]=_.useState(0),G=_.useRef(null),_e=_.useRef(new Set),Se=_.useRef(new Map),[Ne,He]=_.useState(new Map),[We,ot]=_.useState(new Map),Rt=_.useRef(new Set),Ut=_.useRef(new Map),Ke=_.useRef(h);Ke.current=h;const et=_.useRef(y);et.current=y;const Bt=_.useRef(g);Bt.current=g,_.useEffect(()=>{u&&j(new Set)},[u]);const[Kt,Qt]=_.useState(()=>!t.sections.some(H=>{const oe=H.originalRect,be=H.currentRect;return Math.abs(oe.x-be.x)>1||Math.abs(oe.y-be.y)>1||Math.abs(oe.width-be.width)>1||Math.abs(oe.height-be.height)>1}));_.useEffect(()=>{if(!Kt){const H=Ht(()=>Qt(!0),380);return()=>clearTimeout(H)}},[]);const ze=_.useRef(new Set);_.useEffect(()=>{ze.current=new Set(b.map(H=>H.selector))},[b]),_.useEffect(()=>{const H=()=>fe(window.scrollY);return H(),window.addEventListener("scroll",H,{passive:!0}),window.addEventListener("resize",H,{passive:!0}),()=>{window.removeEventListener("scroll",H),window.removeEventListener("resize",H)}},[]),_.useEffect(()=>{const H=oe=>{if(G.current){P(null);return}const be=document.elementFromPoint(oe.clientX,oe.clientY);if(!be){P(null);return}if(be.closest("[data-feedback-toolbar]")){P(null);return}if(be.closest("[data-design-placement]")){P(null);return}if(be.closest("[data-annotation-popup]")){P(null);return}const J=Zy(be);if(!J){P(null);return}for(const we of ze.current)try{const he=document.querySelector(we);if(he&&(he===J||J.contains(he))){P(null);return}}catch{}const Me=J.getBoundingClientRect();P({x:Me.x,y:Me.y,w:Me.width,h:Me.height})};return document.addEventListener("mousemove",H,{passive:!0}),()=>document.removeEventListener("mousemove",H)},[b]),_.useEffect(()=>{const H=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=H}},[]),_.useEffect(()=>{const H=oe=>{var he,Ie,Ee,gt;if(G.current||oe.button!==0)return;const be=oe.target;if(!be||be.closest("[data-feedback-toolbar]")||be.closest("[data-design-placement]")||be.closest("[data-annotation-popup]"))return;const J=Zy(be);let Me=!1;if(J)for(const dt of ze.current)try{const qe=document.querySelector(dt);if(qe&&(qe===J||J.contains(qe))){Me=!0;break}}catch{}const we=!!(oe.shiftKey||oe.metaKey||oe.ctrlKey);if(J&&!Me){oe.preventDefault(),oe.stopPropagation();const dt=E6(J),qe=[...b,dt],ht=[...t.originalOrder,dt.id];n({...t,sections:qe,originalOrder:ht});const yt=new Set([dt.id]);j(yt),(he=Ke.current)==null||he.call(Ke,yt,we),P(null);const Et=oe.clientX,at=oe.clientY,Mt={x:dt.currentRect.x,y:dt.currentRect.y};dt.originalRect;let Vt=!1,lt=0,kt=0;G.current="move";const mt=on=>{var Xt;const un=on.clientX-Et,ln=on.clientY-at;if(!Vt&&(Math.abs(un)>2||Math.abs(ln)>2)&&(Vt=!0),!Vt)return;const Rn={x:Mt.x+un,y:Mt.y+ln,width:dt.currentRect.width,height:dt.currentRect.height},Bn=Qy(Rn,qe,new Set([dt.id]),d);Te(Bn.guides);const bn=un+Bn.dx,dn=ln+Bn.dy;lt=bn,kt=dn;const qn=document.querySelector(`[data-rearrange-section="${dt.id}"]`);qn&&(qn.style.transform=`translate(${bn}px, ${dn}px)`),He(new Map([[dt.id,{x:Mt.x+bn,y:Mt.y+dn,width:dt.currentRect.width,height:dt.currentRect.height}]])),(Xt=et.current)==null||Xt.call(et,bn,dn)},Lt=()=>{var un;window.removeEventListener("mousemove",mt),window.removeEventListener("mouseup",Lt),G.current=null,Te([]),He(new Map);const on=document.querySelector(`[data-rearrange-section="${dt.id}"]`);on&&(on.style.transform=""),Vt&&n({...t,sections:qe.map(ln=>ln.id===dt.id?{...ln,currentRect:{...ln.currentRect,x:Math.max(0,Mt.x+lt),y:Math.max(0,Mt.y+kt)}}:ln),originalOrder:ht}),(un=Bt.current)==null||un.call(Bt,lt,kt,Vt)};window.addEventListener("mousemove",mt),window.addEventListener("mouseup",Lt)}else if(Me&&J){oe.preventDefault();for(const dt of b)try{const qe=document.querySelector(dt.selector);if(qe&&qe===J){const ht=new Set([dt.id]);j(ht),(Ie=Ke.current)==null||Ie.call(Ke,ht,we);return}}catch{}we||(j(new Set),(Ee=Ke.current)==null||Ee.call(Ke,new Set,!1))}else we||(j(new Set),(gt=Ke.current)==null||gt.call(Ke,new Set,!1))};return document.addEventListener("mousedown",H,!0),()=>document.removeEventListener("mousedown",H,!0)},[b,t,n]),_.useEffect(()=>{const H=oe=>{const be=oe.target;if(!(be.tagName==="INPUT"||be.tagName==="TEXTAREA"||be.isContentEditable)){if((oe.key==="Backspace"||oe.key==="Delete")&&k.size>0){oe.preventDefault();const J=new Set(k);Ye(Me=>{const we=new Set(Me);for(const he of J)we.add(he);return we}),j(new Set),Ht(()=>{const Me=S.current;n({...Me,sections:Me.sections.filter(we=>!J.has(we.id)),originalOrder:Me.originalOrder.filter(we=>!J.has(we))}),Ye(we=>{const he=new Set(we);for(const Ie of J)he.delete(Ie);return he})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(oe.key)&&k.size>0){oe.preventDefault();const J=oe.shiftKey?20:1,Me=oe.key==="ArrowLeft"?-J:oe.key==="ArrowRight"?J:0,we=oe.key==="ArrowUp"?-J:oe.key==="ArrowDown"?J:0;n({...t,sections:b.map(he=>k.has(he.id)?{...he,currentRect:{...he.currentRect,x:Math.max(0,he.currentRect.x+Me),y:Math.max(0,he.currentRect.y+we)}}:he)});return}oe.key==="Escape"&&k.size>0&&j(new Set)}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[k,b,t,n]);const ce=_.useCallback((H,oe)=>{var Et;if(H.button!==0)return;const be=H.target;if(be.closest(`.${Oe.handle}`)||be.closest(`.${Oe.deleteButton}`))return;H.preventDefault(),H.stopPropagation();let J;H.shiftKey||H.metaKey||H.ctrlKey?(J=new Set(k),J.has(oe)?J.delete(oe):J.add(oe)):k.has(oe)?J=new Set(k):J=new Set([oe]),j(J),(J.size!==k.size||[...J].some(at=>!k.has(at)))&&((Et=Ke.current)==null||Et.call(Ke,J,!!(H.shiftKey||H.metaKey||H.ctrlKey)));const we=H.clientX,he=H.clientY,Ie=new Map;for(const at of b)J.has(at.id)&&Ie.set(at.id,{x:at.currentRect.x,y:at.currentRect.y});G.current="move";let Ee=!1,gt=0,dt=0;const qe=new Map;for(const at of b)if(J.has(at.id)){const Mt=document.querySelector(`[data-rearrange-section="${at.id}"]`);qe.set(at.id,{outlineEl:Mt,curW:at.currentRect.width,curH:at.currentRect.height})}const ht=at=>{var Bn;const Mt=at.clientX-we,Vt=at.clientY-he;if(Mt===0&&Vt===0)return;Ee=!0;let lt=1/0,kt=1/0,mt=-1/0,Lt=-1/0;for(const[bn,{curW:dn,curH:qn}]of qe){const Xt=Ie.get(bn);if(!Xt)continue;const En=Xt.x+Mt,st=Xt.y+Vt;lt=Math.min(lt,En),kt=Math.min(kt,st),mt=Math.max(mt,En+dn),Lt=Math.max(Lt,st+qn)}const on=Qy({x:lt,y:kt,width:mt-lt,height:Lt-kt},b,J,d),un=Mt+on.dx,ln=Vt+on.dy;gt=un,dt=ln,Te(on.guides);for(const[,{outlineEl:bn}]of qe)bn&&(bn.style.transform=`translate(${un}px, ${ln}px)`);const Rn=new Map;for(const[bn,{curW:dn,curH:qn}]of qe){const Xt=Ie.get(bn);if(Xt){const En={x:Math.max(0,Xt.x+un),y:Math.max(0,Xt.y+ln),width:dn,height:qn};Rn.set(bn,En)}}He(Rn),(Bn=et.current)==null||Bn.call(et,un,ln)},yt=at=>{var Mt,Vt;window.removeEventListener("mousemove",ht),window.removeEventListener("mouseup",yt),G.current=null,Te([]),He(new Map);for(const[,{outlineEl:lt}]of qe)lt&&(lt.style.transform="");if(Ee){const lt=at.clientX-we,kt=at.clientY-he;if(Math.abs(lt)<5&&Math.abs(kt)<5)n({...t,sections:b.map(mt=>{const Lt=Ie.get(mt.id);return Lt?{...mt,currentRect:{...mt.currentRect,x:Lt.x,y:Lt.y}}:mt})});else{n({...t,sections:b.map(mt=>{const Lt=Ie.get(mt.id);return Lt?{...mt,currentRect:{...mt.currentRect,x:Math.max(0,Lt.x+gt),y:Math.max(0,Lt.y+dt)}}:mt})}),(Mt=Bt.current)==null||Mt.call(Bt,gt,dt,!0);return}}(Vt=Bt.current)==null||Vt.call(Bt,0,0,!1)};window.addEventListener("mousemove",ht),window.addEventListener("mouseup",yt)},[k,b,t,n]),tt=_.useCallback((H,oe,be)=>{H.preventDefault(),H.stopPropagation();const J=b.find(ht=>ht.id===oe);if(!J)return;j(new Set([oe])),G.current="resize";const Me=H.clientX,we=H.clientY,he={...J.currentRect};J.originalRect;const Ie=he.width/he.height;let Ee={...he};const gt=document.querySelector(`[data-rearrange-section="${oe}"]`),dt=ht=>{const yt=ht.clientX-Me,Et=ht.clientY-we;let at=he.x,Mt=he.y,Vt=he.width,lt=he.height;if(be.includes("e")&&(Vt=Math.max(Ju,he.width+yt)),be.includes("w")&&(Vt=Math.max(Ju,he.width-yt),at=he.x+he.width-Vt),be.includes("s")&&(lt=Math.max(Ju,he.height+Et)),be.includes("n")&&(lt=Math.max(Ju,he.height-Et),Mt=he.y+he.height-lt),ht.shiftKey)if(be.length===2){const mt=Math.abs(Vt-he.width),Lt=Math.abs(lt-he.height);mt>Lt?lt=Vt/Ie:Vt=lt*Ie,be.includes("w")&&(at=he.x+he.width-Vt),be.includes("n")&&(Mt=he.y+he.height-lt)}else be==="e"||be==="w"?lt=Vt/Ie:Vt=lt*Ie,be==="w"&&(at=he.x+he.width-Vt),be==="n"&&(Mt=he.y+he.height-lt);Ee={x:at,y:Mt,width:Vt,height:lt},gt&&(gt.style.left=`${at}px`,gt.style.top=`${Mt-I}px`,gt.style.width=`${Vt}px`,gt.style.height=`${lt}px`),F({x:ht.clientX+12,y:ht.clientY+12,text:`${Math.round(Vt)} × ${Math.round(lt)}`}),He(new Map([[oe,Ee]]))},qe=()=>{window.removeEventListener("mousemove",dt),window.removeEventListener("mouseup",qe),F(null),G.current=null,He(new Map),n({...t,sections:b.map(ht=>ht.id===oe?{...ht,currentRect:Ee}:ht)})};window.addEventListener("mousemove",dt),window.addEventListener("mouseup",qe)},[b,t,n,I]),nt=_.useCallback(H=>{Ye(oe=>{const be=new Set(oe);return be.add(H),be}),j(oe=>{const be=new Set(oe);return be.delete(H),be}),Ht(()=>{const oe=S.current;n({...oe,sections:oe.sections.filter(be=>be.id!==H),originalOrder:oe.originalOrder.filter(be=>be!==H)}),Ye(be=>{const J=new Set(be);return J.delete(H),J})},180)},[n]),Ze=H=>{const oe=H.originalRect,be=H.currentRect;return Math.abs(oe.x-be.x)>1||Math.abs(oe.y-be.y)>1||Math.abs(oe.width-be.width)>1||Math.abs(oe.height-be.height)>1},Qe=H=>{const oe=H.originalRect,be=H.currentRect;return Math.abs(oe.x-be.x)>1||Math.abs(oe.y-be.y)>1},ct=H=>{const oe=H.originalRect,be=H.currentRect;return Math.abs(oe.width-be.width)>1||Math.abs(oe.height-be.height)>1};for(const H of b)Se.current.has(H.id)||(Qe(H)?Se.current.set(H.id,"move"):ct(H)&&Se.current.set(H.id,"resize"));for(const H of Se.current.keys())b.some(oe=>oe.id===H)||Se.current.delete(H);const ft=b.filter(H=>{try{if(De.has(H.id)||k.has(H.id))return!0;const oe=document.querySelector(H.selector);if(!oe)return!1;const be=oe.getBoundingClientRect(),J=H.originalRect;return Math.abs(be.width-J.width)+Math.abs(be.height-J.height)<200}catch{return!1}}),Ct=ft.filter(H=>Ze(H)),bt=ft.filter(H=>!Ze(H)),$t=new Set(Ct.map(H=>H.id));for(const H of _e.current)$t.has(H)||_e.current.delete(H);const it=[...$t].sort().join(",");for(const H of Ct)Ut.current.set(H.id,{currentRect:H.currentRect,originalRect:H.originalRect,isFixed:H.isFixed});return _.useEffect(()=>{const H=Rt.current;Rt.current=$t;const oe=new Map;for(const be of H)if(!$t.has(be)){if(!b.some(Me=>Me.id===be))continue;const J=Ut.current.get(be);J&&(oe.set(be,{orig:J.originalRect,target:J.currentRect,isFixed:J.isFixed}),Ut.current.delete(be))}if(oe.size>0){ot(J=>{const Me=new Map(J);for(const[we,he]of oe)Me.set(we,he);return Me});const be=Ht(()=>{ot(J=>{const Me=new Map(J);for(const we of oe.keys())Me.delete(we);return Me})},250);return()=>clearTimeout(be)}},[it,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${Oe.rearrangeOverlay} ${i?"":Oe.light} ${a?Oe.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[me&&l.jsx("div",{className:Oe.hoverHighlight,style:{left:me.x,top:me.y,width:me.w,height:me.h}}),bt.map(H=>{const oe=H.currentRect,be=H.isFixed?oe.y:oe.y-I,J=Gy,Me=k.has(H.id);return l.jsxs("div",{"data-rearrange-section":H.id,className:`${Oe.sectionOutline} ${Me?Oe.selected:""} ${E||a||De.has(H.id)?Oe.exiting:""}`,style:{left:oe.x,top:be,width:oe.width,height:oe.height,borderColor:J.border,backgroundColor:J.bg,...Kt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:we=>ce(we,H.id),onDoubleClick:()=>ee(H.id),children:[l.jsx("span",{className:Oe.sectionLabel,style:{backgroundColor:J.pill},children:H.label}),l.jsx("span",{className:`${Oe.sectionAnnotation} ${H.note?Oe.annotationVisible:""}`,children:(H.note&&se.current.set(H.id,H.note),H.note||se.current.get(H.id)||"")}),l.jsxs("span",{className:Oe.sectionDimensions,children:[Math.round(oe.width)," × ",Math.round(oe.height)]}),l.jsx("div",{className:Oe.deleteButton,onMouseDown:we=>we.stopPropagation(),onClick:()=>nt(H.id),children:"✕"}),qy.map(we=>l.jsx("div",{className:`${Oe.handle} ${Oe[`handle${we.charAt(0).toUpperCase()}${we.slice(1)}`]}`,onMouseDown:he=>tt(he,H.id,we)},we))]},H.id)}),Ct.map(H=>{const oe=H.currentRect,be=H.isFixed?oe.y:oe.y-I,J=k.has(H.id),Me=Qe(H),we=ct(H);if(u&&!J)return null;const Ie=!_e.current.has(H.id);return Ie&&_e.current.add(H.id),l.jsxs("div",{"data-rearrange-section":H.id,className:`${Oe.ghostOutline} ${J?Oe.selected:""} ${E||a||De.has(H.id)?Oe.exiting:""}`,style:{left:oe.x,top:be,width:oe.width,height:oe.height,...Kt?{}:{opacity:0,animation:"none",transition:"none"},...Ie?{}:{animation:"none"}},onMouseDown:Ee=>ce(Ee,H.id),onDoubleClick:()=>ee(H.id),children:[l.jsx("span",{className:Oe.sectionLabel,style:{backgroundColor:Gy.pill},children:H.label}),l.jsx("span",{className:`${Oe.sectionAnnotation} ${H.note?Oe.annotationVisible:""}`,children:(H.note&&se.current.set(H.id,H.note),H.note||se.current.get(H.id)||"")}),l.jsxs("span",{className:Oe.sectionDimensions,children:[Math.round(oe.width)," × ",Math.round(oe.height)]}),l.jsx("div",{className:Oe.deleteButton,onMouseDown:Ee=>Ee.stopPropagation(),onClick:()=>nt(H.id),children:"✕"}),qy.map(Ee=>l.jsx("div",{className:`${Oe.handle} ${Oe[`handle${Ee.charAt(0).toUpperCase()}${Ee.slice(1)}`]}`,onMouseDown:gt=>tt(gt,H.id,Ee)},Ee)),l.jsx("span",{className:Oe.ghostBadge,children:(()=>{const Ee=Se.current.get(H.id);if(Me&&we){const[gt,dt]=Ee==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",gt," ",l.jsxs("span",{className:Oe.ghostBadgeExtra,children:["& ",dt]})]})}return`Suggested ${we?"Resize":"Move"}`})()})]},H.id)})]}),!u&&(()=>{const H=[];for(const oe of Ct){const be=Ne.get(oe.id);H.push({id:oe.id,orig:oe.originalRect,target:be||oe.currentRect,isFixed:oe.isFixed,isSelected:k.has(oe.id),isExiting:De.has(oe.id)})}for(const[oe,be]of Ne)if(!H.some(J=>J.id===oe)){const J=b.find(Me=>Me.id===oe);J&&H.push({id:oe,orig:J.originalRect,target:be,isFixed:J.isFixed,isSelected:k.has(oe)})}for(const[oe,be]of We)H.some(J=>J.id===oe)||H.push({id:oe,orig:be.orig,target:be.target,isFixed:be.isFixed,isSelected:!1,isExiting:!0});return H.length===0?null:l.jsxs("svg",{className:`${Oe.connectorSvg} ${E||a?Oe.connectorExiting:""}`,children:[H.map(({id:oe,orig:be,target:J,isFixed:Me,isSelected:we,isExiting:he})=>{const Ie=be.x+be.width/2,Ee=(Me?be.y:be.y-I)+be.height/2,gt=J.x+J.width/2,dt=(Me?J.y:J.y-I)+J.height/2,qe=gt-Ie,ht=dt-Ee,yt=Math.sqrt(qe*qe+ht*ht);if(yt<2)return null;const Et=Math.min(1,yt/40),at=Math.min(yt*.3,60),Mt=yt>0?-ht/yt:0,Vt=yt>0?qe/yt:0,lt=(Ie+gt)/2+Mt*at,kt=(Ee+dt)/2+Vt*at,mt=Ne.has(oe),Lt=mt||we?1:.4,on=mt||we?1:.5;return l.jsxs("g",{className:he?Oe.connectorExiting:"",children:[l.jsx("path",{className:Oe.connectorLine,d:`M ${Ie} ${Ee} Q ${lt} ${kt} ${gt} ${dt}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Lt*Et}),l.jsx("circle",{className:Oe.connectorDot,cx:Ie,cy:Ee,r:4*Et,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:on*Et,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:Oe.connectorDot,cx:gt,cy:dt,r:4*Et,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:on*Et,filter:"url(#connDotShadow)"})]},`conn-${oe}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),D&&(()=>{var dt;const H=b.find(qe=>qe.id===D);if(!H)return null;const oe=H.currentRect,be=H.isFixed?oe.y:oe.y-I,J=oe.x+oe.width/2,Me=be-8,we=be+oe.height+8,he=Me>200,Ie=we<window.innerHeight-100,Ee=Math.max(160,Math.min(window.innerWidth-160,J));let gt;return he?gt={left:Ee,bottom:window.innerHeight-Me}:Ie?gt={left:Ee,top:we}:gt={left:Ee,top:Math.max(80,window.innerHeight/2-80)},l.jsx(jd,{element:H.label,placeholder:"Add a note about this section",initialValue:(dt=H.note)!=null?dt:"",submitLabel:V.current?"Save":"Set",onSubmit:re,onCancel:le,onDelete:V.current?()=>{re("")}:void 0,isExiting:Y,lightMode:!i,style:gt})})(),ae&&l.jsx("div",{className:Oe.sizeIndicator,style:{left:ae.x,top:ae.y},"data-feedback-toolbar":!0,children:ae.text}),pe.map((H,oe)=>l.jsx("div",{className:Oe.guideLine,style:H.axis==="x"?{position:"fixed",left:H.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:H.pos-I,width:"100vw",height:1}},`${H.axis}-${H.pos}-${oe}`))]})}var Bm=new Set(["script","style","noscript","link","meta","br","hr"]);function N6(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||Bm.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Md(c),selector:Rr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||Bm.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const y=h.getBoundingClientRect();y.height<10||y.width<10||n.push({label:Md(h),selector:Rr(h),top:y.top,bottom:y.bottom,left:y.left,right:y.right,area:y.width*y.height})}}}return n}function D6(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function R6(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Lm(t,n){const i=n?D6(n):N6(),a=R6(t);let c=null,u=null,d=null,h=null,p=null;for(const k of i){if(Math.abs(k.left-a.left)<2&&Math.abs(k.top-a.top)<2&&Math.abs(k.right-k.left-t.width)<2&&Math.abs(k.bottom-k.top-t.height)<2)continue;k.left<=a.left+2&&k.right>=a.right-2&&k.top<=a.top+2&&k.bottom>=a.bottom-2&&k.area>a.area*1.5&&(!p||k.area<p._area)&&(p={label:k.label,selector:k.selector,_area:k.area});const j=a.right>k.left+5&&a.left<k.right-5,E=a.bottom>k.top+5&&a.top<k.bottom-5;if(j&&k.bottom<=a.top+5){const T=Math.round(a.top-k.bottom);(!c||T<c._dist)&&(c={label:k.label,selector:k.selector,gap:Math.max(0,T),_dist:T})}if(j&&k.top>=a.bottom-5){const T=Math.round(k.top-a.bottom);(!u||T<u._dist)&&(u={label:k.label,selector:k.selector,gap:Math.max(0,T),_dist:T})}if(E&&k.right<=a.left+5){const T=Math.round(a.left-k.right);(!d||T<d._dist)&&(d={label:k.label,selector:k.selector,gap:Math.max(0,T),_dist:T})}if(E&&k.left>=a.right-5){const T=Math.round(k.left-a.right);(!h||T<h._dist)&&(h={label:k.label,selector:k.selector,gap:Math.max(0,T),_dist:T})}}const y=window.innerWidth,g=window.innerHeight,x=L6(t,y),b=k=>k?{label:k.label,selector:k.selector,gap:k.gap}:null,S=B6(a,t,y,g,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:S}}function B6(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const y=u.find(g=>g.label===c.label&&g.selector===c.selector&&Math.abs(g.area-c._area)<10);if(y){const g=[];t.left<y.left-2&&g.push("left"),t.right>y.right+2&&g.push("right"),t.top<y.top-2&&g.push("top"),t.bottom>y.bottom+2&&g.push("bottom"),g.length>0&&(d.container={label:c.label,edges:g},h=!0)}}return h?d:null}function L6(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function rb(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function lb(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=rb(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function O6(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(rb(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var Jy=15;function e1(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<Jy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.x-y.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,y)=>p+y.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<Jy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.y-y.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,y)=>p+y.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function z6(t){var d;if(t.length<2)return[];const n=e1(t.map(h=>({label:h.label,rect:h.originalRect}))),i=e1(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let y=null,g=0;for(const x of i){const b=x.labels.filter(S=>p.has(S)).length;b>=2&&b>g&&(y=x,g=b)}if(y){const x=y.labels.filter(S=>p.has(S)),b=x.join(", ");if(y.type!==h.type){const S=h.type==="row"?"y":"x",k=y.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${S}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${y.type} (${k}≈${y.sharedEdge}, ${y.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-y.sharedEdge)>20||Math.abs(h.avgGap-y.avgGap)>5){const S=h.type==="row"?"y":"x",k=Math.abs(h.sharedEdge-y.sharedEdge)>20?` ${S}: ${h.sharedEdge} → ${y.sharedEdge}`:"",j=Math.abs(h.avgGap-y.avgGap)>5?` gaps: ${h.avgGap}px → ${y.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${k}${j}`)}x.forEach(S=>c.add(S))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(S=>c.add(S))}}for(const h of i){if(h.labels.every(g=>c.has(g))||h.labels.filter(g=>!c.has(g)).length<2)continue;if(!n.some(g=>g.labels.filter(b=>h.labels.includes(b)).length>=2)){const g=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${g}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const y=Math.round(p.currentRect.x/5)*5;((d=h[y])!=null?d:h[y]=[]).push(p.label)}for(const[p,y]of Object.entries(h))y.length>=2&&a.push(`**${y.join(", ")}**: shared left edge at x≈${p}`)}return a}function cb(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||Bm.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const y of Array.from(p.children))a(y)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const y=getComputedStyle(h);if(y.maxWidth&&y.maxWidth!=="none"&&y.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Rr(h)}}}return{viewport:t,contentArea:null}}function $6(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Rr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function ub(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),y=t.x+t.width/2,g=Math.abs(y-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),g&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function db(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function I6(t){const n=$6(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function t1(t,n,i,a="standard"){var E,T,z,O;if(t.length===0)return"";const c=[...t].sort((D,K)=>Math.abs(D.y-K.y)<20?D.x-K.x:D.y-K.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((D,K)=>{var Q;const Y=((Q=Qi[D.type])==null?void 0:Q.label)||D.type;u+=`${K+1}. **${Y}** — \`${Math.round(D.width)}×${Math.round(D.height)}px\` at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`}),u;const d=cb(n);u+=db(d),u+=`### Components
`,c.forEach((D,K)=>{var De;const Y=((De=Qi[D.type])==null?void 0:De.label)||D.type,Q={x:D.x,y:D.y,width:D.width,height:D.height};u+=`${K+1}. **${Y}** — \`${Math.round(D.width)}×${Math.round(D.height)}px\` at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`;const V=Lm(Q),le=lb(V,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Ye of le)u+=`   - ${Ye}
`;const re=ub(Q,d);re&&(u+=`   - CSS: ${re}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const D of c){const K=h.find(Y=>Math.abs(Y.y-D.y)<30);K?K.items.push(D):h.push({y:D.y,items:[D]})}if(h.sort((D,K)=>D.y-K.y),h.forEach((D,K)=>{D.items.sort((Q,V)=>Q.x-V.x);const Y=D.items.map(Q=>{var V;return((V=Qi[Q.type])==null?void 0:V.label)||Q.type});if(D.items.length===1){const V=D.items[0].width>n.width*.8;u+=`- Row ${K+1} (y≈${Math.round(D.y)}): ${Y[0]}${V?" — full width":""}
`}else u+=`- Row ${K+1} (y≈${Math.round(D.y)}): ${Y.join(" | ")} — ${D.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let D=0;D<c.length-1;D++){const K=c[D],Y=c[D+1],Q=((E=Qi[K.type])==null?void 0:E.label)||K.type,V=((T=Qi[Y.type])==null?void 0:T.label)||Y.type,ee=Math.round(Y.y-(K.y+K.height)),le=Math.round(Y.x-(K.x+K.width));Math.abs(K.y-Y.y)<30?u+=`- ${Q} → ${V}: \`${le}px\` horizontal gap
`:u+=`- ${Q} → ${V}: \`${ee}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let D=0;D<c.length;D++)for(let K=D+1;K<c.length;K++){const Y=c[D],Q=c[K],V=((z=Qi[Y.type])==null?void 0:z.label)||Y.type,ee=((O=Qi[Q.type])==null?void 0:O.label)||Q.type,le=Math.round(Q.y-(Y.y+Y.height)),re=Math.round(Q.x-(Y.x+Y.width));u+=`- ${V} ↔ ${ee}: h=\`${re}px\` v=\`${le}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((D,K)=>{var Q;const Y=((Q=Qi[D.type])==null?void 0:Q.label)||D.type;u+=`${K}. ${Y} at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(D=>D.type==="navigation"),y=c.some(D=>D.type==="hero"),g=c.some(D=>D.type==="sidebar"),x=c.some(D=>D.type==="footer"),b=c.filter(D=>D.type==="card"),S=c.filter(D=>D.type==="form"),k=c.filter(D=>D.type==="table"),j=c.filter(D=>D.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
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
`,g){const D=c.find(K=>K.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(D.width)}px 1fr;\`
`}if(b.length>1){const D=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${D}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function n1(t,n="standard",i){const{sections:a}=t,c=[];for(const g of a){const x=g.originalRect,b=g.currentRect,S=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,k=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!S&&!k){n==="forensic"&&c.push({section:g,posMoved:!1,sizeChanged:!1});continue}c.push({section:g,posMoved:S,sizeChanged:k})}if(c.length===0||n!=="forensic"&&c.every(g=>!g.posMoved&&!g.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=cb({width:d,height:h});n!=="compact"&&(u+=db(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const y=g=>a.map(x=>({label:x.label,selector:x.selector,rect:g==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:g,posMoved:x,sizeChanged:b}of c){const S=g.originalRect,k=g.currentRect;if(!x&&!b){u+=`- ${g.label} — unchanged at (${Math.round(k.x)}, ${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${g.label}** to (${Math.round(k.x)}, ${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)}px
`:x?u+=`- Suggested: move **${g.label}** to (${Math.round(k.x)}, ${Math.round(k.y)})
`:u+=`- Suggested: resize **${g.label}** to ${Math.round(k.width)}×${Math.round(k.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${g.label}**
`:x?u+=`- Suggested: move **${g.label}**
`:u+=`- Suggested: resize **${g.label}** from ${Math.round(S.width)}×${Math.round(S.height)}px to ${Math.round(k.width)}×${Math.round(k.height)}px
`,x){const E=Lm(S,y("original")),T=Lm(k,y("current")),z=b?{width:S.width,height:S.height}:void 0;u+=`  - Currently ${O6(E,{x:S.x,y:S.y},z)}
`;const O=b?{width:k.width,height:k.height}:void 0,D=`at (${Math.round(k.x)}, ${Math.round(k.y)})`,K=O?`, ${Math.round(O.width)}×${Math.round(O.height)}px`:"",Q=lb(T,{includeLeftRight:n==="detailed"||n==="forensic"});if(Q.length>0){u+=`  - Suggested position ${D}${K}: ${Q[0]}
`;for(let ee=1;ee<Q.length;ee++)u+=`    ${Q[ee]}
`}else u+=`  - Suggested position ${D}${K}
`;const V=ub(k,p);V&&(u+=`  - CSS: ${V}
`)}const j=I6(g.selector);if(j&&(u+=`  - ${j}
`),u+=`  - Selector: \`${g.selector}\`
`,n==="detailed"||n==="forensic"){const E=g.className?`${g.tagName}.${g.className.split(" ")[0]}`:g.tagName;E!==g.selector&&(u+=`  - Element: \`${E}\`
`),g.role&&(u+=`  - Role: \`${g.role}\`
`),n==="forensic"&&g.textSnippet&&(u+=`  - Text: "${g.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(k.x)}, y: ${Math.round(k.y)}, w: ${Math.round(k.width)}, h: ${Math.round(k.height)} }\`
`)}if(n!=="compact"){const g=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=z6(g);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const g=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of g){const b=x.currentRect,S=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${S?" ← suggested":""}
`}}return u}var Om="feedback-annotations-",fb=7;function Ed(t){return`${Om}${t}`}function tm(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(Ed(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-fb*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function hb(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Ed(t),JSON.stringify(n))}catch{}}function P6(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-fb*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(Om)){const c=a.slice(Om.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function cc(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));hb(t,a)}var mp="agentation-design-";function H6(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${mp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function U6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${mp}${t}`,JSON.stringify(n))}catch{}}function V6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${mp}${t}`)}catch{}}var pp="agentation-rearrange-";function Y6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${pp}${t}`);return n?JSON.parse(n):null}catch{return null}}function W6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${pp}${t}`,JSON.stringify(n))}catch{}}function F6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${pp}${t}`)}catch{}}var _p="agentation-wireframe-";function X6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${_p}${t}`);return n?JSON.parse(n):null}catch{return null}}function s1(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${_p}${t}`,JSON.stringify(n))}catch{}}function td(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${_p}${t}`)}catch{}}var mb="agentation-session-";function gp(t){return`${mb}${t}`}function G6(t){if(typeof window>"u")return null;try{return localStorage.getItem(gp(t))}catch{return null}}function nm(t,n){if(!(typeof window>"u"))try{localStorage.setItem(gp(t),n)}catch{}}function q6(t){if(!(typeof window>"u"))try{localStorage.removeItem(gp(t))}catch{}}var pb=`${mb}toolbar-hidden`;function K6(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(pb)==="1"}catch{return!1}}function Q6(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(pb,"1")}catch{}}async function sm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function o1(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function cl(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function i1(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function tr(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var Hn={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},a1=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),r1=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],Z6=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function J6(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=a1;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...a1,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...r1,...t.skipPatterns]:r1,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:Z6,filter:t==null?void 0:t.filter}}function eC(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function tC(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function nC(t,n){const i=eC(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function sC(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&nC(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var ul=null,oC=new WeakMap;function om(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function iC(){if(ul!==null)return ul;if(typeof document>"u")return!1;if(document.body&&om(document.body))return ul=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&om(i))return ul=!0,!0}if(document.body){for(const n of document.body.children)if(om(n))return ul=!0,!0}return ul=!1,!1}var uc={map:oC};function aC(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function rC(t){const n=aC(t);return n?t[n]:null}function wr(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function lC(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===Hn.HostComponent||n===Hn.HostText||n===Hn.HostHoistable||n===Hn.HostSingleton||n===Hn.Fragment||n===Hn.Mode||n===Hn.Profiler||n===Hn.DehydratedFragment||n===Hn.HostRoot||n===Hn.HostPortal||n===Hn.ScopeComponent||n===Hn.OffscreenComponent||n===Hn.LegacyHiddenComponent||n===Hn.CacheComponent||n===Hn.TracingMarkerComponent||n===Hn.Throw||n===Hn.ViewTransitionComponent||n===Hn.ActivityComponent)return null;if(n===Hn.ForwardRef){const u=a;if(u!=null&&u.render){const d=wr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:wr(i)}if(n===Hn.MemoComponent||n===Hn.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=wr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:wr(i)}if(n===Hn.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===Hn.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===Hn.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?wr(u._result):null}return n===Hn.SuspenseComponent||n===Hn.SuspenseListComponent?null:n===Hn.IncompleteClassComponent||n===Hn.IncompleteFunctionComponent||n===Hn.FunctionComponent||n===Hn.ClassComponent||n===Hn.IndeterminateComponent?wr(i):null}function cC(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function uC(t,n){const i=J6(n),a=i.mode==="all";if(a){const p=uc.map.get(t);if(p!==void 0)return p}if(!iC()){const p={path:null,components:[]};return a&&uc.map.set(t,p),p}const c=i.mode==="smart"?tC(t):void 0,u=[];try{let p=rC(t),y=0;for(;p&&y<i.maxDepth&&u.length<i.maxComponents;){const g=lC(p);g&&!cC(g)&&sC(g,y,i,c)&&u.push(g),p=p.return,y++}}catch{const p={path:null,components:[]};return a&&uc.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&uc.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&uc.map.set(t,h),h}var dc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function dC(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function Ec(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function fC(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Ec(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Ec(i._debugOwner)};i=i.return,a++}return null}function hC(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Ec(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Ec(n)}}}n=n.return,i++}return null}var nd=new Map;function mC(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===dc.FunctionComponent||n===dc.IndeterminateComponent)&&typeof i=="function")return i;if(n===dc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===dc.MemoComponent||n===dc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function pC(){const t=Yv,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function _C(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function gC(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function yC(t){const n=mC(t);if(!n)return null;if(nd.has(n))return nd.get(n);const i=pC();if(!i)return nd.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=_C(d.stack);h&&(c={fileName:gC(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:Ec(t)||void 0})}}}finally{i.set(a)}return nd.set(n,c),c}function xC(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=yC(i);if(c)return c;i=i.return,a++}return null}function zm(t){const n=dC(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=fC(n);if(i||(i=hC(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=xC(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function bC(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function vC(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=zm(i);if(c.found)return c;i=i.parentElement,a++}return zm(t)}var wC=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,SC={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=wC}var Ge=SC,fc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function l1(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var CC=`@keyframes styles-module__markerIn___x4G8D {
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
}`,kC={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=CC}var Ys=kC;function c1({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:y,renumberFrom:g,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:S,onHoverLeave:k,onClick:j,onContextMenu:E}){const T=(h||p)&&!y,z=T&&x==="delete",O=t.isMultiSelect,D=O?"var(--agentation-color-green)":"var(--agentation-color-accent)",K=c?Ys.exit:u?Ys.clearing:d?"":Ys.enter,Y=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${Ys.marker} ${O?Ys.multiSelect:""} ${K} ${z?Ys.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:z?void 0:D,animationDelay:Y},onMouseEnter:()=>S(t),onMouseLeave:k,onClick:Q=>{Q.stopPropagation(),c||j(t)},onContextMenu:E?Q=>{x==="delete"&&(Q.preventDefault(),Q.stopPropagation(),c||E(t))}:void 0,children:[T?z?l.jsx(eb,{size:O?18:16}):l.jsx($S,{size:16}):l.jsx("span",{className:g!==null&&n>=g?Ys.renumber:void 0,children:n+1}),h&&!y&&l.jsxs("div",{className:`${Ys.markerTooltip} ${Ys.enter}`,style:b,children:[l.jsxs("span",{className:Ys.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:Ys.markerNote,children:t.comment})]})]})}function jC({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${Ys.marker} ${Ys.pending} ${i?Ys.multiSelect:""} ${a?Ys.exit:Ys.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(jS,{size:12})})}function u1({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${Ys.marker} ${n?Ys.fixed:""} ${Ys.hovered} ${i?Ys.multiSelect:""} ${Ys.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(eb,{size:i?12:10})})}var MC=`.styles-module__switchContainer___Ka-AB {
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
}`,EC={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=MC}var im=EC,am=({className:t="",...n})=>l.jsxs("div",{className:`${im.switchContainer} ${t}`,children:[l.jsx("input",{className:im.switchInput,type:"checkbox",...n}),l.jsx("div",{className:im.switchThumb})]}),TC=`.styles-module__checkboxContainer___joqZk {
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
}`,AC={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=TC}var sd=AC,NC=({className:t="",...n})=>l.jsxs("div",{className:`${sd.checkboxContainer} ${t}`,children:[l.jsx("input",{className:sd.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:sd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:sd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),DC=`.styles-module__container___w8eAF {
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
}`,RC={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=DC}var d1=RC,f1=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=_.useId();return l.jsxs("div",{className:`${d1.container} ${t}`,...u,children:[l.jsx(NC,{id:d,onChange:c,checked:a}),l.jsx("label",{className:d1.label,htmlFor:d,children:n}),i&&l.jsx(Er,{content:i})]})},BC=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,LC={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=BC}var wt=LC;function OC({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:y,onSettingsPageChange:g,onHideToolbar:x}){var b;return l.jsx("div",{className:`${wt.settingsPanel} ${h?wt.enter:wt.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:wt.settingsPanelContainer,children:[l.jsxs("div",{className:`${wt.settingsPage} ${y==="automations"?wt.slideLeft:""}`,children:[l.jsxs("div",{className:wt.settingsHeader,children:[l.jsx("a",{className:wt.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:wt.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:wt.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:wt.themeIconWrapper,children:l.jsx("span",{className:wt.themeIcon,children:i?l.jsx(OS,{size:20}):l.jsx(zS,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:wt.divider}),l.jsxs("div",{className:wt.settingsSection,children:[l.jsxs("div",{className:wt.settingsRow,children:[l.jsxs("div",{className:wt.settingsLabel,children:["Output Detail",l.jsx(Er,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:wt.cycleButton,onClick:()=>{const k=(fc.findIndex(j=>j.value===t.outputDetail)+1)%fc.length;n({outputDetail:fc[k].value})},children:[l.jsx("span",{className:wt.cycleButtonText,children:(b=fc.find(S=>S.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),l.jsx("span",{className:wt.cycleDots,children:fc.map(S=>l.jsx("span",{className:`${wt.cycleDot} ${t.outputDetail===S.value?wt.active:""}`},S.value))})]})]}),l.jsxs("div",{className:`${wt.settingsRow} ${wt.settingsRowMarginTop} ${c?"":wt.settingsRowDisabled}`,children:[l.jsxs("div",{className:wt.settingsLabel,children:["React Components",l.jsx(Er,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(am,{checked:c&&t.reactEnabled,onChange:S=>n({reactEnabled:S.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${wt.settingsRow} ${wt.settingsRowMarginTop}`,children:[l.jsxs("div",{className:wt.settingsLabel,children:["Hide Until Restart",l.jsx(Er,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(am,{checked:!1,onChange:S=>{S.target.checked&&x()}})]})]}),l.jsx("div",{className:wt.divider}),l.jsxs("div",{className:wt.settingsSection,children:[l.jsx("div",{className:`${wt.settingsLabel} ${wt.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:wt.colorOptions,children:vc.map(S=>l.jsx("button",{className:`${wt.colorOption} ${t.annotationColorId===S.id?wt.selected:""}`,style:{"--swatch":S.srgb,"--swatch-p3":S.p3},onClick:()=>n({annotationColorId:S.id}),title:S.label,type:"button"},S.id))})]}),l.jsx("div",{className:wt.divider}),l.jsxs("div",{className:wt.settingsSection,children:[l.jsx(f1,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:S=>n({autoClearAfterCopy:S.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(f1,{className:wt.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:S=>n({blockInteractions:S.target.checked})})]}),l.jsx("div",{className:wt.divider}),l.jsxs("button",{className:wt.settingsNavLink,onClick:()=>g("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:wt.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${wt.mcpNavIndicator} ${wt[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${wt.settingsPage} ${wt.automationsPage} ${y==="automations"?wt.slideIn:""}`,children:[l.jsxs("button",{className:wt.settingsBackButton,onClick:()=>g("main"),children:[l.jsx(PS,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:wt.divider}),l.jsxs("div",{className:wt.settingsSection,children:[l.jsxs("div",{className:wt.settingsRow,children:[l.jsxs("span",{className:wt.automationHeader,children:["MCP Connection",l.jsx(Er,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${wt.mcpStatusDot} ${wt[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:wt.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:wt.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:wt.divider}),l.jsxs("div",{className:`${wt.settingsSection} ${wt.settingsSectionGrow}`,children:[l.jsxs("div",{className:wt.settingsRow,children:[l.jsxs("span",{className:wt.automationHeader,children:["Webhooks",l.jsx(Er,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:wt.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${wt.autoSendLabel} ${t.webhooksEnabled?wt.active:""} ${t.webhookUrl?"":wt.disabled}`,children:"Auto-Send"}),l.jsx(am,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:S=>n({webhooksEnabled:S.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:wt.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:wt.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:S=>S.stopPropagation(),onChange:S=>n({webhookUrl:S.target.value})})]})]})]})})}function rm(t,n="filtered"){const{name:i,path:a}=_l(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=uC(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var h1=!1,lm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},ra=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},vc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],zC=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...vc.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${vc.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${vc.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(t)};zC();function Sr(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function cm(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function Cr(t){return t.status!=="resolved"&&t.status!=="dismissed"}function od(t){const n=zm(t),i=n.found?n:vC(t);if(i.found&&i.source)return bC(i.source,"path")}function $C({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:y=!0,endpoint:g,sessionId:x,onSessionCreated:b,webhookUrl:S,className:k}={}){var Js,ho,B,X,q,R,ne;const[j,E]=_.useState(!1),[T,z]=_.useState([]),[O,D]=_.useState(!0),[K,Y]=_.useState(()=>K6()),[Q,V]=_.useState(!1),ee=_.useRef(null);_.useEffect(()=>{const w=N=>{const L=ee.current;L&&L.contains(N.target)&&N.stopPropagation()},C=["mousedown","click","pointerdown"];return C.forEach(N=>document.body.addEventListener(N,w)),()=>{C.forEach(N=>document.body.removeEventListener(N,w))}},[]);const[le,re]=_.useState(!1),[De,Ye]=_.useState(!1),[se,me]=_.useState(null),[P,ae]=_.useState({x:0,y:0}),[F,pe]=_.useState(null),[Te,I]=_.useState(!1),[fe,G]=_.useState("idle"),[_e,Se]=_.useState(!1),[Ne,He]=_.useState(!1),[We,ot]=_.useState(null),[Rt,Ut]=_.useState(null),[Ke,et]=_.useState([]),[Bt,Kt]=_.useState(null),[Qt,ze]=_.useState(null),[ce,tt]=_.useState(null),[nt,Ze]=_.useState(null),[Qe,ct]=_.useState([]),[ft,Ct]=_.useState(0),[bt,$t]=_.useState(!1),[it,H]=_.useState(!1),[oe,be]=_.useState(!1),[J,Me]=_.useState(!1),[we,he]=_.useState(!1),[Ie,Ee]=_.useState("main"),[gt,dt]=_.useState(!1),[qe,ht]=_.useState(!1),[yt,Et]=_.useState(!1),[at,Mt]=_.useState([]),[Vt,lt]=_.useState(null),kt=_.useRef(!1),[mt,Lt]=_.useState(!1),[on,un]=_.useState(!1),[ln,Rn]=_.useState(1),[Bn,bn]=_.useState("new-page"),[dn,qn]=_.useState(""),[Xt,En]=_.useState(!1),[st,Tt]=_.useState(null),Ln=_.useRef(!1),ks=_.useRef({rearrange:null,placements:[]}),hs=_.useRef({rearrange:null,placements:[]}),[ss,Do]=_.useState(0),[os,Ws]=_.useState(0),[wo,zs]=_.useState(0),[jn,Zo]=_.useState(0),js=_.useRef(new Set),vn=_.useRef(new Set),Yn=_.useRef(null),ao=_.useRef(),Fs=qe&&j&&!yt&&mt;_.useEffect(()=>{if(Fs){un(!1);const w=fl(()=>{un(!0)});return()=>cancelAnimationFrame(w)}else un(!1)},[Fs]);const us=_.useRef(new Map),is=_.useRef(new Map),Xs=_.useRef(),[wn,pn]=_.useState(!1),[en,Un]=_.useState([]),Ho=_.useRef(en);Ho.current=en;const[Uo,li]=_.useState(null),Gs=_.useRef(null);_.useRef(!1),_.useRef([]),_.useRef(0),_.useRef(null),_.useRef(null),_.useRef(1);const[Jo,bs]=_.useState(!1),So=_.useRef(null),[Mn,go]=_.useState([]),ms=_.useRef({cmd:!1,shift:!1}),Kn=()=>{dt(!0)},bi=()=>{dt(!1)},vs=()=>{Jo||(So.current=Ht(()=>bs(!0),850))},vi=()=>{So.current&&(clearTimeout(So.current),So.current=null),bs(!1),bi()};_.useEffect(()=>()=>{So.current&&clearTimeout(So.current)},[]);const[Yt,ws]=_.useState(()=>{var w;try{const C=JSON.parse((w=localStorage.getItem("feedback-toolbar-settings"))!=null?w:"");return{...lm,...C,annotationColorId:vc.find(N=>N.id===C.annotationColorId)?C.annotationColorId:lm.annotationColorId}}catch{return lm}}),[As,Ro]=_.useState(!0),[wi,Vo]=_.useState(!1),Ns=()=>{var w;(w=ee.current)==null||w.classList.add(Ge.disableTransitions),Ro(C=>!C),fl(()=>{var C;(C=ee.current)==null||C.classList.remove(Ge.disableTransitions)})},ci=!1,$s="off",[Sn,Co]=_.useState(x!=null?x:null),Yo=_.useRef(!1),[ps,qs]=_.useState(g?"connecting":"disconnected"),[an,Ks]=_.useState(null),[Is,ro]=_.useState(!1),[Ms,Bo]=_.useState(null),Qs=_.useRef(!1),[ko,yo]=_.useState(new Set),[On,Tn]=_.useState(new Set),[Vn,Wn]=_.useState(!1),[lo,Ds]=_.useState(!1),[Es,Wo]=_.useState(!1),co=_.useRef(null),_s=_.useRef(null),Ts=_.useRef(null),Lo=_.useRef(null),xo=_.useRef(!1),uo=_.useRef(0),Oo=_.useRef(null),zo=_.useRef(null),Si=8,ta=50,Ii=_.useRef(null),Pi=_.useRef(null),ei=_.useRef(null),Nt=typeof window<"u"?window.location.pathname:"/";_.useEffect(()=>{if(J)he(!0);else{dt(!1),Ee("main");const w=Ht(()=>he(!1),0);return()=>clearTimeout(w)}},[J]);const Ci=j&&O&&!qe;_.useEffect(()=>{if(Ci){Ye(!1),re(!0),yo(new Set);const w=Ht(()=>{yo(C=>{const N=new Set(C);return T.forEach(L=>N.add(L.id)),N})},350);return()=>clearTimeout(w)}else if(le){Ye(!0);const w=Ht(()=>{re(!1),Ye(!1)},250);return()=>clearTimeout(w)}},[Ci]),_.useEffect(()=>{H(!0),Ct(window.scrollY);const w=tm(Nt);z(w.filter(Cr)),h1||(Vo(!0),h1=!0,Ht(()=>Vo(!1),750));try{const C=localStorage.getItem("feedback-toolbar-theme");C!==null&&Ro(C==="dark")}catch{}try{const C=localStorage.getItem("feedback-toolbar-position");if(C){const N=JSON.parse(C);typeof N.x=="number"&&typeof N.y=="number"&&Ks(N)}}catch{}},[Nt]),_.useEffect(()=>{it&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Yt))},[Yt,it]),_.useEffect(()=>{it&&localStorage.setItem("feedback-toolbar-theme",As?"dark":"light")},[As,it]);const ki=_.useRef(!1);_.useEffect(()=>{const w=ki.current;ki.current=Is,w&&!Is&&an&&it&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(an))},[Is,an,it]),_.useEffect(()=>{if(!g||!it||Yo.current)return;Yo.current=!0,qs("connecting"),(async()=>{try{const C=G6(Nt),N=x||C;let L=!1;if(N)try{const W=await o1(g,N);Co(W.id),qs("connected"),nm(Nt,W.id),L=!0;const te=tm(Nt),Ae=new Set(W.annotations.map(Le=>Le.id)),xe=te.filter(Le=>!Ae.has(Le.id));if(xe.length>0){const Xe=`${typeof window<"u"?window.location.origin:""}${Nt}`,pt=(await Promise.allSettled(xe.map(ut=>cl(g,W.id,{...ut,sessionId:W.id,url:Xe})))).map((ut,rt)=>ut.status==="fulfilled"?ut.value:(console.warn("[Agentation] Failed to sync annotation:",ut.reason),xe[rt])),_t=[...W.annotations,...pt];z(_t.filter(Cr)),cc(Nt,_t.filter(Cr),W.id)}else z(W.annotations.filter(Cr)),cc(Nt,W.annotations.filter(Cr),W.id)}catch(W){console.warn("[Agentation] Could not join session, creating new:",W),q6(Nt)}if(!L){const W=typeof window<"u"?window.location.href:"/",te=await sm(g,W);Co(te.id),qs("connected"),nm(Nt,te.id),b==null||b(te.id);const Ae=P6(),xe=typeof window<"u"?window.location.origin:"",Le=[];for(const[Xe,Je]of Ae){const pt=Je.filter(rt=>!rt._syncedTo);if(pt.length===0)continue;const _t=`${xe}${Xe}`,ut=Xe===Nt;Le.push((async()=>{try{const rt=ut?te:await sm(g,_t),$n=(await Promise.allSettled(pt.map(rn=>cl(g,rt.id,{...rn,sessionId:rt.id,url:_t})))).map((rn,Ot)=>rn.status==="fulfilled"?rn.value:(console.warn("[Agentation] Failed to sync annotation:",rn.reason),pt[Ot])).filter(Cr);if(cc(Xe,$n,rt.id),ut){const rn=new Set(pt.map(Ot=>Ot.id));z(Ot=>{const vt=Ot.filter(Dt=>!rn.has(Dt.id));return[...$n,...vt]})}}catch(rt){console.warn(`[Agentation] Failed to sync annotations for ${Xe}:`,rt)}})())}await Promise.allSettled(Le)}}catch(C){qs("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",C)}})()},[g,x,it,b,Nt]),_.useEffect(()=>{if(!g||!it)return;const w=async()=>{try{(await fetch(`${g}/health`)).ok?qs("connected"):qs("disconnected")}catch{qs("disconnected")}};w();const C=VS(w,1e4);return()=>clearInterval(C)},[g,it]),_.useEffect(()=>{if(!g||!it||!Sn)return;const w=new EventSource(`${g}/sessions/${Sn}/events`),C=["resolved","dismissed"],N=L=>{var W;try{const te=JSON.parse(L.data);if(C.includes((W=te.payload)==null?void 0:W.status)){const Ae=te.payload.id,xe=te.payload.kind;if(xe==="placement"){for(const[Le,Xe]of us.current)if(Xe===Ae){us.current.delete(Le),Mt(Je=>Je.filter(pt=>pt.id!==Le));break}}else if(xe==="rearrange"){for(const[Le,Xe]of is.current)if(Xe===Ae){is.current.delete(Le),Tt(Je=>{if(!Je)return null;const pt=Je.sections.filter(_t=>_t.id!==Le);return pt.length===0?null:{...Je,sections:pt}});break}}else Tn(Le=>new Set(Le).add(Ae)),Ht(()=>{z(Le=>Le.filter(Xe=>Xe.id!==Ae)),Tn(Le=>{const Xe=new Set(Le);return Xe.delete(Ae),Xe})},150)}}catch{}};return w.addEventListener("annotation.updated",N),()=>{w.removeEventListener("annotation.updated",N),w.close()}},[g,it,Sn]),_.useEffect(()=>{if(!g||!it)return;const w=zo.current==="disconnected",C=ps==="connected";zo.current=ps,w&&C&&(async()=>{try{const L=tm(Nt);if(L.length===0)return;const te=`${typeof window<"u"?window.location.origin:""}${Nt}`;let Ae=Sn,xe=[];if(Ae)try{xe=(await o1(g,Ae)).annotations}catch{Ae=null}Ae||(Ae=(await sm(g,te)).id,Co(Ae),nm(Nt,Ae));const Le=new Set(xe.map(Je=>Je.id)),Xe=L.filter(Je=>!Le.has(Je.id));if(Xe.length>0){const pt=(await Promise.allSettled(Xe.map(rt=>cl(g,Ae,{...rt,sessionId:Ae,url:te})))).map((rt,kn)=>rt.status==="fulfilled"?rt.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",rt.reason),Xe[kn])),ut=[...xe,...pt].filter(Cr);z(ut),cc(Nt,ut,Ae)}}catch(L){console.warn("[Agentation] Failed to sync on reconnect:",L)}})()},[ps,g,it,Sn,Nt]);const Hi=_.useCallback(()=>{Q||(V(!0),Me(!1),E(!1),Ht(()=>{Q6(!0),Y(!0),V(!1)},400))},[Q]);_.useEffect(()=>{if(!i||!it||!t||t.length===0||T.length>0)return;const w=[];return w.push(Ht(()=>{E(!0)},n-200)),t.forEach((C,N)=>{const L=n+N*300;w.push(Ht(()=>{const W=document.querySelector(C.selector);if(!W)return;const te=W.getBoundingClientRect(),{name:Ae,path:xe}=_l(W),Le={id:`demo-${Date.now()}-${N}`,x:(te.left+te.width/2)/window.innerWidth*100,y:te.top+te.height/2+window.scrollY,comment:C.comment,element:Ae,elementPath:xe,timestamp:Date.now(),selectedText:C.selectedText,boundingBox:{x:te.left,y:te.top+window.scrollY,width:te.width,height:te.height},nearbyText:rc(W),cssClasses:lc(W)};z(Xe=>[...Xe,Le])},L))}),()=>{w.forEach(clearTimeout)}},[i,it,t,n]),_.useEffect(()=>{const w=()=>{Ct(window.scrollY),$t(!0),ei.current&&clearTimeout(ei.current),ei.current=Ht(()=>{$t(!1)},150)};return window.addEventListener("scroll",w,{passive:!0}),()=>{window.removeEventListener("scroll",w),ei.current&&clearTimeout(ei.current)}},[]),_.useEffect(()=>{it&&T.length>0?Sn?cc(Nt,T,Sn):hb(Nt,T):it&&T.length===0&&localStorage.removeItem(Ed(Nt))},[T,Nt,it,Sn]),_.useEffect(()=>{if(it&&!kt.current){kt.current=!0;const w=H6(Nt);w.length>0&&Mt(w)}},[it,Nt]),_.useEffect(()=>{it&&kt.current&&!mt&&(at.length>0?U6(Nt,at):V6(Nt))},[at,Nt,it,mt]),_.useEffect(()=>{if(it&&!Ln.current){Ln.current=!0;const w=Y6(Nt);if(w){const C={...w,sections:w.sections.map(N=>{var L;return{...N,currentRect:(L=N.currentRect)!=null?L:{...N.originalRect}}})};Tt(C)}}},[it,Nt]),_.useEffect(()=>{it&&Ln.current&&!mt&&(st?W6(Nt,st):F6(Nt))},[st,Nt,it,mt]);const ui=_.useRef(!1);_.useEffect(()=>{if(it&&!ui.current){ui.current=!0;const w=X6(Nt);w&&(hs.current={rearrange:w.rearrange,placements:w.placements||[]},w.purpose&&qn(w.purpose))}},[it,Nt]),_.useEffect(()=>{var C,N,L,W,te;if(!it||!ui.current)return;const w=hs.current;mt?((N=(C=st==null?void 0:st.sections)==null?void 0:C.length)!=null?N:0)>0||at.length>0||dn?s1(Nt,{rearrange:st,placements:at,purpose:dn}):td(Nt):((te=(W=(L=w.rearrange)==null?void 0:L.sections)==null?void 0:W.length)!=null?te:0)>0||w.placements.length>0||dn?s1(Nt,{rearrange:w.rearrange,placements:w.placements,purpose:dn}):td(Nt)},[st,at,dn,mt,Nt,it]),_.useEffect(()=>{qe&&!st&&Tt({sections:[],originalOrder:[],detectedAt:Date.now()})},[qe,st]),_.useEffect(()=>{if(!g||!Sn)return;const w=us.current,C=new Set(at.map(N=>N.id));for(const N of at){if(w.has(N.id))continue;w.set(N.id,"");const L=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Nt;cl(g,Sn,{id:N.id,x:N.x/window.innerWidth*100,y:N.y,comment:`Place ${N.type} at (${Math.round(N.x)}, ${Math.round(N.y)}), ${N.width}×${N.height}px${N.text?` — "${N.text}"`:""}`,element:`[design:${N.type}]`,elementPath:"[placement]",timestamp:N.timestamp,url:L,intent:"change",severity:"important",kind:"placement",placement:{componentType:N.type,width:N.width,height:N.height,scrollY:N.scrollY,text:N.text}}).then(W=>{w.has(N.id)&&w.set(N.id,W.id)}).catch(W=>{console.warn("[Agentation] Failed to sync placement annotation:",W),w.delete(N.id)})}for(const[N,L]of w)C.has(N)||(w.delete(N),L&&tr(g,L).catch(()=>{}))},[at,g,Sn,Nt]),_.useEffect(()=>{if(!(!g||!Sn))return Xs.current&&clearTimeout(Xs.current),Xs.current=Ht(()=>{const w=is.current;if(!st||st.sections.length===0){for(const[,L]of w)L&&tr(g,L).catch(()=>{});w.clear();return}const C=new Set(st.sections.map(L=>L.id)),N=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Nt;for(const L of st.sections){const W=L.originalRect,te=L.currentRect;if(!(Math.abs(W.x-te.x)>1||Math.abs(W.y-te.y)>1||Math.abs(W.width-te.width)>1||Math.abs(W.height-te.height)>1)){const Le=w.get(L.id);Le&&(w.delete(L.id),tr(g,Le).catch(()=>{}));continue}const xe=w.get(L.id);xe?i1(g,xe,{comment:`Move ${L.label} section (${L.tagName}) — from (${Math.round(W.x)},${Math.round(W.y)}) ${Math.round(W.width)}×${Math.round(W.height)} to (${Math.round(te.x)},${Math.round(te.y)}) ${Math.round(te.width)}×${Math.round(te.height)}`}).catch(Le=>{console.warn("[Agentation] Failed to update rearrange annotation:",Le)}):(w.set(L.id,""),cl(g,Sn,{id:L.id,x:te.x/window.innerWidth*100,y:te.y,comment:`Move ${L.label} section (${L.tagName}) — from (${Math.round(W.x)},${Math.round(W.y)}) ${Math.round(W.width)}×${Math.round(W.height)} to (${Math.round(te.x)},${Math.round(te.y)}) ${Math.round(te.width)}×${Math.round(te.height)}`,element:L.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:N,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:L.selector,label:L.label,tagName:L.tagName,originalRect:W,currentRect:te}}).then(Le=>{w.has(L.id)&&w.set(L.id,Le.id)}).catch(Le=>{console.warn("[Agentation] Failed to sync rearrange annotation:",Le),w.delete(L.id)}))}for(const[L,W]of w)C.has(L)||(w.delete(L),W&&tr(g,W).catch(()=>{}))},300),()=>{Xs.current&&clearTimeout(Xs.current)}},[st,g,Sn,Nt]);const bo=_.useRef(new Map);_.useLayoutEffect(()=>{var N;const w=(N=st==null?void 0:st.sections)!=null?N:[],C=new Set;if((qe||yt)&&j)for(const L of w){C.add(L.id);try{const W=document.querySelector(L.selector);if(!W)continue;if(!bo.current.has(L.id)){const te={transform:W.style.transform,transformOrigin:W.style.transformOrigin,opacity:W.style.opacity,position:W.style.position,zIndex:W.style.zIndex,display:W.style.display},Ae=[];let xe=W.parentElement;for(;xe&&xe!==document.body;){const Xe=getComputedStyle(xe);(Xe.overflow!=="visible"||Xe.overflowX!=="visible"||Xe.overflowY!=="visible")&&(Ae.push({el:xe,overflow:xe.style.overflow}),xe.style.overflow="visible"),xe=xe.parentElement}getComputedStyle(W).display==="inline"&&(W.style.display="inline-block"),bo.current.set(L.id,{el:W,origStyles:te,ancestors:Ae}),W.style.transformOrigin="top left",W.style.zIndex="9999"}}catch{}}for(const[L,W]of bo.current)if(!C.has(L)){const{el:te,origStyles:Ae,ancestors:xe}=W;te.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",te.style.transform=Ae.transform,te.style.transformOrigin=Ae.transformOrigin,te.style.opacity=Ae.opacity,te.style.position=Ae.position,te.style.zIndex=Ae.zIndex,bo.current.delete(L),Ht(()=>{te.style.transition="",te.style.display=Ae.display;for(const Le of xe)Le.el.style.overflow=Le.overflow},450)}},[st,qe,yt,j]),_.useEffect(()=>()=>{for(const[,w]of bo.current){const{el:C,origStyles:N,ancestors:L}=w;C.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",C.style.transform=N.transform,C.style.transformOrigin=N.transformOrigin,C.style.opacity=N.opacity,C.style.position=N.position,C.style.zIndex=N.zIndex,Ht(()=>{C.style.transition="",C.style.display=N.display;for(const W of L)W.el.style.overflow=W.overflow},450)}bo.current.clear()},[]);const Fo=_.useCallback(()=>{Et(!0),ht(!1),lt(null),clearTimeout(ao.current),ao.current=Ht(()=>{Et(!1)},300)},[]),di=_.useCallback(()=>{qe&&(Et(!0),ht(!1),lt(null),clearTimeout(ao.current),ao.current=Ht(()=>{Et(!1)},300)),E(!1)},[qe]),M=_.useCallback(()=>{oe||(WS(),be(!0))},[oe]),U=_.useCallback(()=>{oe&&(Vy(),be(!1))},[oe]),ue=_.useCallback(()=>{oe?U():M()},[oe,M,U]),ke=_.useCallback(()=>{if(Mn.length===0)return;const w=Mn[0],C=w.element,N=Mn.length>1,L=Mn.map(W=>W.element.getBoundingClientRect());if(N){const W={left:Math.min(...L.map(rt=>rt.left)),top:Math.min(...L.map(rt=>rt.top)),right:Math.max(...L.map(rt=>rt.right)),bottom:Math.max(...L.map(rt=>rt.bottom))},te=Mn.slice(0,5).map(rt=>rt.name).join(", "),Ae=Mn.length>5?` +${Mn.length-5} more`:"",xe=L.map(rt=>({x:rt.left,y:rt.top+window.scrollY,width:rt.width,height:rt.height})),Xe=Mn[Mn.length-1].element,Je=L[L.length-1],pt=Je.left+Je.width/2,_t=Je.top+Je.height/2,ut=cm(Xe);pe({x:pt/window.innerWidth*100,y:ut?_t:_t+window.scrollY,clientY:_t,element:`${Mn.length} elements: ${te}${Ae}`,elementPath:"multi-select",boundingBox:{x:W.left,y:W.top+window.scrollY,width:W.right-W.left,height:W.bottom-W.top},isMultiSelect:!0,isFixed:ut,elementBoundingBoxes:xe,multiSelectElements:Mn.map(rt=>rt.element),targetElement:Xe,fullPath:Zu(C),accessibility:Qu(C),computedStyles:Ku(C),computedStylesObj:qu(C),nearbyElements:Gu(C),cssClasses:lc(C),nearbyText:rc(C),sourceFile:od(C)})}else{const W=L[0],te=cm(C);pe({x:W.left/window.innerWidth*100,y:te?W.top:W.top+window.scrollY,clientY:W.top,element:w.name,elementPath:w.path,boundingBox:{x:W.left,y:te?W.top:W.top+window.scrollY,width:W.width,height:W.height},isFixed:te,fullPath:Zu(C),accessibility:Qu(C),computedStyles:Ku(C),computedStylesObj:qu(C),nearbyElements:Gu(C),cssClasses:lc(C),nearbyText:rc(C),reactComponents:w.reactComponents,sourceFile:od(C)})}go([]),me(null)},[Mn]);_.useEffect(()=>{j||(pe(null),tt(null),Ze(null),ct([]),me(null),Me(!1),go([]),ms.current={cmd:!1,shift:!1},oe&&U())},[j,oe,U]),_.useEffect(()=>()=>{Vy()},[]),_.useEffect(()=>{if(!j)return;const w=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),C=":not([data-agentation-root]):not([data-agentation-root] *)",N=document.createElement("style");return N.id="feedback-cursor-styles",N.textContent=`
      body ${C} {
        cursor: crosshair !important;
      }

      body :is(${w})${C} {
        cursor: text !important;
      }
    `,document.head.appendChild(N),()=>{const L=document.getElementById("feedback-cursor-styles");L&&L.remove()}},[j]),_.useEffect(()=>{if(Uo!==null&&j)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Uo,j]),_.useEffect(()=>{if(!j||F||wn||qe)return;const w=C=>{const N=C.composedPath()[0]||C.target;if(Go(N,"[data-feedback-toolbar]")){me(null);return}const L=Sr(C.clientX,C.clientY);if(!L||Go(L,"[data-feedback-toolbar]")){me(null);return}const{name:W,elementName:te,path:Ae,reactComponents:xe}=rm(L,$s),Le=L.getBoundingClientRect();me({element:W,elementName:te,elementPath:Ae,rect:Le,reactComponents:xe}),ae({x:C.clientX,y:C.clientY})};return document.addEventListener("mousemove",w),()=>document.removeEventListener("mousemove",w)},[j,F,wn,qe,$s,en]);const Ve=_.useCallback(w=>{var C;if(tt(w),ot(null),Ut(null),et([]),(C=w.elementBoundingBoxes)!=null&&C.length){const N=[];for(const L of w.elementBoundingBoxes){const W=L.x+L.width/2,te=L.y+L.height/2-window.scrollY,Ae=Sr(W,te);Ae&&N.push(Ae)}ct(N),Ze(null)}else if(w.boundingBox){const N=w.boundingBox,L=N.x+N.width/2,W=w.isFixed?N.y+N.height/2:N.y+N.height/2-window.scrollY,te=Sr(L,W);if(te){const Ae=te.getBoundingClientRect(),xe=Ae.width/N.width,Le=Ae.height/N.height;xe<.5||Le<.5?Ze(null):Ze(te)}else Ze(null);ct([])}else Ze(null),ct([])},[]);_.useEffect(()=>{if(!j||wn||qe)return;const w=C=>{var zn,$n;if(xo.current){xo.current=!1;return}const N=C.composedPath()[0]||C.target;if(Go(N,"[data-feedback-toolbar]")||Go(N,"[data-annotation-popup]")||Go(N,"[data-annotation-marker]"))return;if(C.metaKey&&C.shiftKey&&!F&&!ce){C.preventDefault(),C.stopPropagation();const rn=Sr(C.clientX,C.clientY);if(!rn)return;const Ot=rn.getBoundingClientRect(),{name:vt,path:Dt,reactComponents:In}=rm(rn,$s),gn=Mn.findIndex(mo=>mo.element===rn);gn>=0?go(mo=>mo.filter(($o,rs)=>rs!==gn)):go(mo=>[...mo,{element:rn,rect:Ot,name:vt,path:Dt,reactComponents:In!=null?In:void 0}]);return}const L=Go(N,"button, a, input, select, textarea, [role='button'], [onclick]");if(Yt.blockInteractions&&L&&(C.preventDefault(),C.stopPropagation()),F){if(L&&!Yt.blockInteractions)return;C.preventDefault(),(zn=Ii.current)==null||zn.shake();return}if(ce){if(L&&!Yt.blockInteractions)return;C.preventDefault(),($n=Pi.current)==null||$n.shake();return}C.preventDefault();const W=Sr(C.clientX,C.clientY);if(!W)return;const{name:te,path:Ae,reactComponents:xe}=rm(W,$s),Le=W.getBoundingClientRect(),Xe=C.clientX/window.innerWidth*100,Je=cm(W),pt=Je?C.clientY:C.clientY+window.scrollY,_t=window.getSelection();let ut;_t&&_t.toString().trim().length>0&&(ut=_t.toString().trim().slice(0,500));const rt=qu(W),kn=Ku(W);pe({x:Xe,y:pt,clientY:C.clientY,element:te,elementPath:Ae,selectedText:ut,boundingBox:{x:Le.left,y:Je?Le.top:Le.top+window.scrollY,width:Le.width,height:Le.height},nearbyText:rc(W),cssClasses:lc(W),isFixed:Je,fullPath:Zu(W),accessibility:Qu(W),computedStyles:kn,computedStylesObj:rt,nearbyElements:Gu(W),reactComponents:xe!=null?xe:void 0,sourceFile:od(W),targetElement:W}),me(null)};return document.addEventListener("click",w,!0),()=>document.removeEventListener("click",w,!0)},[j,wn,qe,F,ce,Yt.blockInteractions,$s,Mn]),_.useEffect(()=>{if(!j)return;const w=L=>{L.key==="Meta"&&(ms.current.cmd=!0),L.key==="Shift"&&(ms.current.shift=!0)},C=L=>{const W=ms.current.cmd&&ms.current.shift;L.key==="Meta"&&(ms.current.cmd=!1),L.key==="Shift"&&(ms.current.shift=!1);const te=ms.current.cmd&&ms.current.shift;W&&!te&&Mn.length>0&&ke()},N=()=>{ms.current={cmd:!1,shift:!1},go([])};return document.addEventListener("keydown",w),document.addEventListener("keyup",C),window.addEventListener("blur",N),()=>{document.removeEventListener("keydown",w),document.removeEventListener("keyup",C),window.removeEventListener("blur",N)}},[j,Mn,ke]),_.useEffect(()=>{if(!j||F||wn||qe)return;const w=C=>{const N=C.composedPath()[0]||C.target;Go(N,"[data-feedback-toolbar]")||Go(N,"[data-annotation-marker]")||Go(N,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(N.tagName)||N.isContentEditable||(C.preventDefault(),co.current={x:C.clientX,y:C.clientY})};return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[j,F,wn,qe]),_.useEffect(()=>{if(!j||F)return;const w=C=>{if(!co.current)return;const N=C.clientX-co.current.x,L=C.clientY-co.current.y,W=N*N+L*L,te=Si*Si;if(!Es&&W>=te&&(_s.current=co.current,Wo(!0),C.preventDefault()),(Es||W>=te)&&_s.current){if(Ts.current){const vt=Math.min(_s.current.x,C.clientX),Dt=Math.min(_s.current.y,C.clientY),In=Math.abs(C.clientX-_s.current.x),gn=Math.abs(C.clientY-_s.current.y);Ts.current.style.transform=`translate(${vt}px, ${Dt}px)`,Ts.current.style.width=`${In}px`,Ts.current.style.height=`${gn}px`}const Ae=Date.now();if(Ae-uo.current<ta)return;uo.current=Ae;const xe=_s.current.x,Le=_s.current.y,Xe=Math.min(xe,C.clientX),Je=Math.min(Le,C.clientY),pt=Math.max(xe,C.clientX),_t=Math.max(Le,C.clientY),ut=(Xe+pt)/2,rt=(Je+_t)/2,kn=new Set,zn=[[Xe,Je],[pt,Je],[Xe,_t],[pt,_t],[ut,rt],[ut,Je],[ut,_t],[Xe,rt],[pt,rt]];for(const[vt,Dt]of zn){const In=document.elementsFromPoint(vt,Dt);for(const gn of In)gn instanceof HTMLElement&&kn.add(gn)}const $n=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const vt of $n)if(vt instanceof HTMLElement){const Dt=vt.getBoundingClientRect(),In=Dt.left+Dt.width/2,gn=Dt.top+Dt.height/2,mo=In>=Xe&&In<=pt&&gn>=Je&&gn<=_t,$o=Math.min(Dt.right,pt)-Math.max(Dt.left,Xe),rs=Math.min(Dt.bottom,_t)-Math.max(Dt.top,Je),ji=$o>0&&rs>0?$o*rs:0,Ui=Dt.width*Dt.height,Vi=Ui>0?ji/Ui:0;(mo||Vi>.5)&&kn.add(vt)}const rn=[],Ot=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const vt of kn){if(Go(vt,"[data-feedback-toolbar]")||Go(vt,"[data-annotation-marker]"))continue;const Dt=vt.getBoundingClientRect();if(!(Dt.width>window.innerWidth*.8&&Dt.height>window.innerHeight*.5)&&!(Dt.width<10||Dt.height<10)&&Dt.left<pt&&Dt.right>Xe&&Dt.top<_t&&Dt.bottom>Je){const In=vt.tagName;let gn=Ot.has(In);if(!gn&&(In==="DIV"||In==="SPAN")){const mo=vt.textContent&&vt.textContent.trim().length>0,$o=vt.onclick!==null||vt.getAttribute("role")==="button"||vt.getAttribute("role")==="link"||vt.classList.contains("clickable")||vt.hasAttribute("data-clickable");(mo||$o)&&!vt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(gn=!0)}if(gn){let mo=!1;for(const $o of rn)if($o.left<=Dt.left&&$o.right>=Dt.right&&$o.top<=Dt.top&&$o.bottom>=Dt.bottom){mo=!0;break}mo||rn.push(Dt)}}}if(Lo.current){const vt=Lo.current;for(;vt.children.length>rn.length;)vt.removeChild(vt.lastChild);rn.forEach((Dt,In)=>{let gn=vt.children[In];gn||(gn=document.createElement("div"),gn.className=Ge.selectedElementHighlight,vt.appendChild(gn)),gn.style.transform=`translate(${Dt.left}px, ${Dt.top}px)`,gn.style.width=`${Dt.width}px`,gn.style.height=`${Dt.height}px`})}}};return document.addEventListener("mousemove",w,{passive:!0}),()=>document.removeEventListener("mousemove",w)},[j,F,Es,Si]),_.useEffect(()=>{if(!j)return;const w=C=>{const N=Es,L=_s.current;if(Es&&L){xo.current=!0;const W=Math.min(L.x,C.clientX),te=Math.min(L.y,C.clientY),Ae=Math.max(L.x,C.clientX),xe=Math.max(L.y,C.clientY),Le=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(ut=>{if(!(ut instanceof HTMLElement)||Go(ut,"[data-feedback-toolbar]")||Go(ut,"[data-annotation-marker]"))return;const rt=ut.getBoundingClientRect();rt.width>window.innerWidth*.8&&rt.height>window.innerHeight*.5||rt.width<10||rt.height<10||rt.left<Ae&&rt.right>W&&rt.top<xe&&rt.bottom>te&&Le.push({element:ut,rect:rt})});const Je=Le.filter(({element:ut})=>!Le.some(({element:rt})=>rt!==ut&&ut.contains(rt))),pt=C.clientX/window.innerWidth*100,_t=C.clientY+window.scrollY;if(Je.length>0){const ut=Je.reduce((Ot,{rect:vt})=>({left:Math.min(Ot.left,vt.left),top:Math.min(Ot.top,vt.top),right:Math.max(Ot.right,vt.right),bottom:Math.max(Ot.bottom,vt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),rt=Je.slice(0,5).map(({element:Ot})=>_l(Ot).name).join(", "),kn=Je.length>5?` +${Je.length-5} more`:"",zn=Je[0].element,$n=qu(zn),rn=Ku(zn);pe({x:pt,y:_t,clientY:C.clientY,element:`${Je.length} elements: ${rt}${kn}`,elementPath:"multi-select",boundingBox:{x:ut.left,y:ut.top+window.scrollY,width:ut.right-ut.left,height:ut.bottom-ut.top},isMultiSelect:!0,fullPath:Zu(zn),accessibility:Qu(zn),computedStyles:rn,computedStylesObj:$n,nearbyElements:Gu(zn),cssClasses:lc(zn),nearbyText:rc(zn),sourceFile:od(zn)})}else{const ut=Math.abs(Ae-W),rt=Math.abs(xe-te);ut>20&&rt>20&&pe({x:pt,y:_t,clientY:C.clientY,element:"Area selection",elementPath:`region at (${Math.round(W)}, ${Math.round(te)})`,boundingBox:{x:W,y:te+window.scrollY,width:ut,height:rt},isMultiSelect:!0})}me(null)}else N&&(xo.current=!0);co.current=null,_s.current=null,Wo(!1),Lo.current&&(Lo.current.innerHTML="")};return document.addEventListener("mouseup",w),()=>document.removeEventListener("mouseup",w)},[j,Es]);const Fe=_.useCallback(async(w,C,N)=>{const L=Yt.webhookUrl||S;if(!L||!Yt.webhooksEnabled&&!N)return!1;try{return(await fetch(L,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:w,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...C})})).ok}catch(W){return console.warn("[Agentation] Webhook failed:",W),!1}},[S,Yt.webhookUrl,Yt.webhooksEnabled]),Pt=_.useCallback(w=>{var N;if(!F)return;const C={id:Date.now().toString(),x:F.x,y:F.y,comment:w,element:F.element,elementPath:F.elementPath,timestamp:Date.now(),selectedText:F.selectedText,boundingBox:F.boundingBox,nearbyText:F.nearbyText,cssClasses:F.cssClasses,isMultiSelect:F.isMultiSelect,isFixed:F.isFixed,fullPath:F.fullPath,accessibility:F.accessibility,computedStyles:F.computedStyles,nearbyElements:F.nearbyElements,reactComponents:F.reactComponents,sourceFile:F.sourceFile,elementBoundingBoxes:F.elementBoundingBoxes,...g&&Sn?{sessionId:Sn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};z(L=>[...L,C]),Oo.current=C.id,Ht(()=>{Oo.current=null},300),Ht(()=>{yo(L=>new Set(L).add(C.id))},250),a==null||a(C),Fe("annotation.add",{annotation:C}),Wn(!0),Ht(()=>{pe(null),Wn(!1)},150),(N=window.getSelection())==null||N.removeAllRanges(),g&&Sn&&cl(g,Sn,C).then(L=>{L.id!==C.id&&(z(W=>W.map(te=>te.id===C.id?{...te,id:L.id}:te)),yo(W=>{const te=new Set(W);return te.delete(C.id),te.add(L.id),te}))}).catch(L=>{console.warn("[Agentation] Failed to sync annotation:",L)})},[F,a,Fe,g,Sn]),It=_.useCallback(()=>{Wn(!0),Ht(()=>{pe(null),Wn(!1)},150)},[]),Gt=_.useCallback(w=>{const C=T.findIndex(L=>L.id===w),N=T[C];(ce==null?void 0:ce.id)===w&&(Ds(!0),Ht(()=>{tt(null),Ze(null),ct([]),Ds(!1)},150)),Kt(w),Tn(L=>new Set(L).add(w)),N&&(c==null||c(N),Fe("annotation.delete",{annotation:N})),g&&tr(g,w).catch(L=>{console.warn("[Agentation] Failed to delete annotation from server:",L)}),Ht(()=>{z(L=>L.filter(W=>W.id!==w)),Tn(L=>{const W=new Set(L);return W.delete(w),W}),Kt(null),C<T.length-1&&(ze(C),Ht(()=>ze(null),200))},150)},[T,ce,c,Fe,g]),qt=_.useCallback(w=>{var C;if(!w){ot(null),Ut(null),et([]);return}if(ot(w.id),(C=w.elementBoundingBoxes)!=null&&C.length){const N=[];for(const L of w.elementBoundingBoxes){const W=L.x+L.width/2,te=L.y+L.height/2-window.scrollY,xe=document.elementsFromPoint(W,te).find(Le=>!Le.closest("[data-annotation-marker]")&&!Le.closest("[data-agentation-root]"));xe&&N.push(xe)}et(N),Ut(null)}else if(w.boundingBox){const N=w.boundingBox,L=N.x+N.width/2,W=w.isFixed?N.y+N.height/2:N.y+N.height/2-window.scrollY,te=Sr(L,W);if(te){const Ae=te.getBoundingClientRect(),xe=Ae.width/N.width,Le=Ae.height/N.height;xe<.5||Le<.5?Ut(null):Ut(te)}else Ut(null);et([])}else Ut(null),et([])},[]),nn=_.useCallback(w=>{if(!ce)return;const C={...ce,comment:w};z(N=>N.map(L=>L.id===ce.id?C:L)),u==null||u(C),Fe("annotation.update",{annotation:C}),g&&i1(g,ce.id,{comment:w}).catch(N=>{console.warn("[Agentation] Failed to update annotation on server:",N)}),Ds(!0),Ht(()=>{tt(null),Ze(null),ct([]),Ds(!1)},150)},[ce,u,Fe,g]),_n=_.useCallback(()=>{Ds(!0),Ht(()=>{tt(null),Ze(null),ct([]),Ds(!1)},150)},[]),fn=_.useCallback(()=>{const w=T.length,C=at.length>0||!!st;if(w===0&&en.length===0&&!C)return;if(d==null||d(T),Fe("annotations.clear",{annotations:T}),g){Promise.all(T.map(W=>tr(g,W.id).catch(te=>{console.warn("[Agentation] Failed to delete annotation from server:",te)})));for(const[,W]of us.current)W&&tr(g,W).catch(()=>{});us.current.clear();for(const[,W]of is.current)W&&tr(g,W).catch(()=>{});is.current.clear()}He(!0),Se(!0),Un([]);const N=Gs.current;if(N){const W=N.getContext("2d");W&&W.clearRect(0,0,N.width,N.height)}(at.length>0||st)&&(zs(W=>W+1),Zo(W=>W+1),Ht(()=>{Mt([]),Tt(null)},200)),mt&&Lt(!1),dn&&qn(""),hs.current={rearrange:null,placements:[]},td(Nt);const L=w*30+200;Ht(()=>{z([]),yo(new Set),localStorage.removeItem(Ed(Nt)),He(!1)},L),Ht(()=>Se(!1),1500)},[Nt,T,en,at,st,mt,dn,d,Fe,g]),Ps=_.useCallback(async()=>{const w=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Nt,C=qe&&mt;let N;if(C){if(at.length===0&&!st&&!dn)return;N=""}else{if(N=l1(T,w,Yt.outputDetail),!N&&en.length===0&&at.length===0&&!st)return;N||(N=`## Page Feedback: ${w}
`)}if(!C&&en.length>0){const L=new Set;for(const xe of T)xe.drawingIndex!=null&&L.add(xe.drawingIndex);const W=Gs.current;W&&(W.style.visibility="hidden");const te=[],Ae=window.scrollY;for(let xe=0;xe<en.length;xe++){if(L.has(xe))continue;const Le=en[xe];if(Le.points.length<2)continue;const Xe=Le.fixed?Le.points:Le.points.map(Qn=>({x:Qn.x,y:Qn.y-Ae}));let Je=1/0,pt=1/0,_t=-1/0,ut=-1/0;for(const Qn of Xe)Je=Math.min(Je,Qn.x),pt=Math.min(pt,Qn.y),_t=Math.max(_t,Qn.x),ut=Math.max(ut,Qn.y);const rt=_t-Je,kn=ut-pt,zn=Math.hypot(rt,kn),$n=Xe[0],rn=Xe[Xe.length-1],Ot=Math.hypot(rn.x-$n.x,rn.y-$n.y);let vt;const Dt=Ot<zn*.35,In=rt/Math.max(kn,1);if(Dt&&zn>20){const Qn=Math.max(rt,kn)*.15;let Yi=0;for(const na of Xe){const Pc=na.x-Je<Qn,Wd=_t-na.x<Qn,Fd=na.y-pt<Qn,Xd=ut-na.y<Qn;(Pc||Wd)&&(Fd||Xd)&&Yi++}vt=Yi>Xe.length*.15?"box":"circle"}else In>3&&kn<40?vt="underline":Ot>zn*.5?vt="arrow":vt="drawing";const gn=Math.min(10,Xe.length),mo=Math.max(1,Math.floor(Xe.length/gn)),$o=new Set,rs=[],ji=[$n];for(let Qn=mo;Qn<Xe.length-1;Qn+=mo)ji.push(Xe[Qn]);ji.push(rn);for(const Qn of ji){const Yi=Sr(Qn.x,Qn.y);if(!Yi||$o.has(Yi)||Go(Yi,"[data-feedback-toolbar]"))continue;$o.add(Yi);const{name:na}=_l(Yi);rs.includes(na)||rs.push(na)}const Ui=`${Math.round(Je)},${Math.round(pt)} → ${Math.round(_t)},${Math.round(ut)}`;let Vi;(vt==="circle"||vt==="box")&&rs.length>0?Vi=`${vt==="box"?"Boxed":"Circled"} **${rs[0]}**${rs.length>1?` (and ${rs.slice(1).join(", ")})`:""} (region: ${Ui})`:vt==="underline"&&rs.length>0?Vi=`Underlined **${rs[0]}** (${Ui})`:vt==="arrow"&&rs.length>=2?Vi=`Arrow from **${rs[0]}** to **${rs[rs.length-1]}** (${Math.round($n.x)},${Math.round($n.y)} → ${Math.round(rn.x)},${Math.round(rn.y)})`:rs.length>0?Vi=`${vt==="arrow"?"Arrow":"Drawing"} near **${rs.join("**, **")}** (region: ${Ui})`:Vi=`Drawing at ${Ui}`,te.push(Vi)}W&&(W.style.visibility=""),te.length>0&&(N+=`
**Drawings:**
`,te.forEach((xe,Le)=>{N+=`${Le+1}. ${xe}
`}))}if((at.length>0||C&&dn)&&(N+=`
`+t1(at,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:mt,wireframePurpose:dn||void 0},Yt.outputDetail)),st){const L=n1(st,Yt.outputDetail,{width:window.innerWidth,height:window.innerHeight});L&&(N+=`
`+L)}if(y)try{await navigator.clipboard.writeText(N)}catch{}h==null||h(N),I(!0),Ht(()=>I(!1),2e3),Yt.autoClearAfterCopy&&Ht(()=>fn(),500)},[T,en,at,st,mt,qe,Bn,dn,Nt,Yt.outputDetail,$s,Yt.autoClearAfterCopy,fn,y,h]),Wt=_.useCallback(async()=>{const w=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Nt;let C=l1(T,w,Yt.outputDetail);if(!C&&at.length===0&&!st)return;if(C||(C=`## Page Feedback: ${w}
`),at.length>0&&(C+=`
`+t1(at,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:mt,wireframePurpose:dn||void 0},Yt.outputDetail)),st){const L=n1(st,Yt.outputDetail,{width:window.innerWidth,height:window.innerHeight});L&&(C+=`
`+L)}p&&p(C,T),G("sending"),await new Promise(L=>Ht(L,150));const N=await Fe("submit",{output:C,annotations:T},!0);G(N?"sent":"failed"),Ht(()=>G("idle"),2500),N&&Yt.autoClearAfterCopy&&Ht(()=>fn(),500)},[p,Fe,T,at,st,mt,Bn,Nt,Yt.outputDetail,$s,Yt.autoClearAfterCopy,fn]);_.useEffect(()=>{if(!Ms)return;const w=10,C=L=>{const W=L.clientX-Ms.x,te=L.clientY-Ms.y,Ae=Math.sqrt(W*W+te*te);if(!Is&&Ae>w&&ro(!0),Is||Ae>w){let xe=Ms.toolbarX+W,Le=Ms.toolbarY+te;const Xe=20,Je=337,pt=44,ut=Je-(j?ps==="connected"?297:257:44),rt=Xe-ut,kn=window.innerWidth-Xe-Je;xe=Math.max(rt,Math.min(kn,xe)),Le=Math.max(Xe,Math.min(window.innerHeight-pt-Xe,Le)),Ks({x:xe,y:Le})}},N=()=>{Is&&(Qs.current=!0),ro(!1),Bo(null)};return document.addEventListener("mousemove",C),document.addEventListener("mouseup",N),()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",N)}},[Ms,Is,j,ps]);const as=_.useCallback(w=>{var te,Ae;if(w.target.closest("button")||w.target.closest("[data-agentation-settings-panel]"))return;const C=w.currentTarget.parentElement;if(!C)return;const N=C.getBoundingClientRect(),L=(te=an==null?void 0:an.x)!=null?te:N.left,W=(Ae=an==null?void 0:an.y)!=null?Ae:N.top;Bo({x:w.clientX,y:w.clientY,toolbarX:L,toolbarY:W})},[an]);if(_.useEffect(()=>{if(!an)return;const w=()=>{let W=an.x,te=an.y;const Le=20-(337-(j?ps==="connected"?297:257:44)),Xe=window.innerWidth-20-337;W=Math.max(Le,Math.min(Xe,W)),te=Math.max(20,Math.min(window.innerHeight-44-20,te)),(W!==an.x||te!==an.y)&&Ks({x:W,y:te})};return w(),window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)},[an,j,ps]),_.useEffect(()=>{const w=C=>{const N=C.target,L=N.tagName==="INPUT"||N.tagName==="TEXTAREA"||N.isContentEditable;if(C.key==="Escape"){if(qe){Vt?lt(null):Fo();return}if(wn){pn(!1);return}if(Mn.length>0){go([]);return}F||j&&(Kn(),E(!1))}if((C.metaKey||C.ctrlKey)&&C.shiftKey&&(C.key==="f"||C.key==="F")){C.preventDefault(),Kn(),j?di():E(!0);return}if(!(L||C.metaKey||C.ctrlKey)&&((C.key==="p"||C.key==="P")&&(C.preventDefault(),Kn(),ue()),(C.key==="l"||C.key==="L")&&(C.preventDefault(),Kn(),wn&&pn(!1),J&&Me(!1),F&&It(),qe?Fo():ht(!0)),(C.key==="h"||C.key==="H")&&T.length>0&&(C.preventDefault(),Kn(),D(W=>!W)),(C.key==="c"||C.key==="C")&&(T.length>0||at.length>0||st)&&(C.preventDefault(),Kn(),Ps()),(C.key==="x"||C.key==="X")&&(T.length>0||at.length>0||st)&&(C.preventDefault(),Kn(),fn(),at.length>0&&Mt([]),st&&Tt(null)),C.key==="s"||C.key==="S")){const W=ra(Yt.webhookUrl)||ra(S||"");T.length>0&&W&&fe==="idle"&&(C.preventDefault(),Kn(),Wt())}};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[j,wn,qe,Vt,at,st,F,T.length,Yt.webhookUrl,S,fe,Wt,ue,Ps,fn,Mn]),!it||K)return null;const Ss=T.length>0,gs=T.filter(w=>!On.has(w.id)&&w.kind!=="placement"&&w.kind!=="rearrange"),fo=gs.length>0,Zs=T.filter(w=>On.has(w.id)),Hs=w=>{const te=w.x/100*window.innerWidth,Ae=typeof w.y=="string"?parseFloat(w.y):w.y,xe={};window.innerHeight-Ae-22-10<80&&(xe.top="auto",xe.bottom="calc(100% + 10px)");const Xe=te-200/2,Je=10;if(Xe<Je){const pt=Je-Xe;xe.left=`calc(50% + ${pt}px)`}else if(Xe+200>window.innerWidth-Je){const pt=Xe+200-(window.innerWidth-Je);xe.left=`calc(50% - ${pt}px)`}return xe};return Bc.createPortal(l.jsxs("div",{ref:ee,style:{display:"contents"},"data-agentation-theme":As?"dark":"light","data-agentation-accent":Yt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${Ge.toolbar}${k?` ${k}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:an?{left:an.x,top:an.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${Ge.toolbarContainer} ${j?Ge.expanded:Ge.collapsed} ${wi?Ge.entrance:""} ${Q?Ge.hiding:""} ${!Yt.webhooksEnabled&&(ra(Yt.webhookUrl)||ra(S||""))?Ge.serverConnected:""}`,onClick:j?void 0:w=>{if(Qs.current){Qs.current=!1,w.preventDefault();return}E(!0)},onMouseDown:as,role:j?void 0:"button",tabIndex:j?-1:0,title:j?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${Ge.toggleContent} ${j?Ge.hidden:Ge.visible}`,children:[l.jsx(MS,{size:24}),fo&&l.jsx("span",{className:`${Ge.badge} ${j?Ge.fadeOut:""} ${wi?Ge.entrance:""}`,children:gs.length})]}),l.jsxs("div",{className:`${Ge.controlsContent} ${j?Ge.visible:Ge.hidden} ${an&&an.y<100?Ge.tooltipBelow:""} ${gt||J?Ge.tooltipsHidden:""} ${Jo?Ge.tooltipsInSession:""}`,onMouseEnter:vs,onMouseLeave:vi,children:[l.jsxs("div",{className:`${Ge.buttonWrapper} ${an&&an.x<120?Ge.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:Ge.controlButton,onClick:w=>{w.stopPropagation(),Kn(),ue()},"data-active":oe,children:l.jsx(DS,{size:24,isPaused:oe})}),l.jsxs("span",{className:Ge.buttonTooltip,children:[oe?"Resume animations":"Pause animations",l.jsx("span",{className:Ge.shortcut,children:"P"})]})]}),l.jsxs("div",{className:Ge.buttonWrapper,children:[l.jsx("button",{className:`${Ge.controlButton} ${As?"":Ge.light}`,onClick:w=>{w.stopPropagation(),Kn(),wn&&pn(!1),J&&Me(!1),F&&It(),qe?Fo():ht(!0)},"data-active":qe,style:qe&&mt?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(HS,{size:21})}),l.jsxs("span",{className:Ge.buttonTooltip,children:[qe?"Exit layout mode":"Layout mode",l.jsx("span",{className:Ge.shortcut,children:"L"})]})]}),l.jsxs("div",{className:Ge.buttonWrapper,children:[l.jsx("button",{className:Ge.controlButton,onClick:w=>{w.stopPropagation(),Kn(),D(!O)},disabled:!Ss||qe,children:l.jsx(NS,{size:24,isOpen:O})}),l.jsxs("span",{className:Ge.buttonTooltip,children:[O?"Hide markers":"Show markers",l.jsx("span",{className:Ge.shortcut,children:"H"})]})]}),l.jsxs("div",{className:Ge.buttonWrapper,children:[l.jsx("button",{className:`${Ge.controlButton} ${Te?Ge.statusShowing:""}`,onClick:w=>{w.stopPropagation(),Kn(),Ps()},disabled:qe&&mt?at.length===0&&!((Js=st==null?void 0:st.sections)!=null&&Js.length):!Ss&&en.length===0&&at.length===0&&!((ho=st==null?void 0:st.sections)!=null&&ho.length),"data-active":Te,children:l.jsx(TS,{size:24,copied:Te,tint:qe&&mt&&(at.length>0||(B=st==null?void 0:st.sections)!=null&&B.length)?"#f97316":void 0})}),l.jsxs("span",{className:Ge.buttonTooltip,children:[qe&&mt?"Copy layout":"Copy feedback",l.jsx("span",{className:Ge.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${Ge.buttonWrapper} ${Ge.sendButtonWrapper} ${j&&!Yt.webhooksEnabled&&(ra(Yt.webhookUrl)||ra(S||""))?Ge.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${Ge.controlButton} ${fe==="sent"||fe==="failed"?Ge.statusShowing:""}`,onClick:w=>{w.stopPropagation(),Kn(),Wt()},disabled:!Ss||!ra(Yt.webhookUrl)&&!ra(S||"")||fe==="sending","data-no-hover":fe==="sent"||fe==="failed",tabIndex:ra(Yt.webhookUrl)||ra(S||"")?0:-1,children:[l.jsx(AS,{size:24,state:fe}),Ss&&fe==="idle"&&l.jsx("span",{className:Ge.buttonBadge,children:T.length})]}),l.jsxs("span",{className:Ge.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:Ge.shortcut,children:"S"})]})]}),l.jsxs("div",{className:Ge.buttonWrapper,children:[l.jsx("button",{className:Ge.controlButton,onClick:w=>{w.stopPropagation(),Kn(),fn()},disabled:!Ss&&en.length===0&&at.length===0&&!((X=st==null?void 0:st.sections)!=null&&X.length),"data-danger":!0,children:l.jsx(BS,{size:24})}),l.jsxs("span",{className:Ge.buttonTooltip,children:["Clear all",l.jsx("span",{className:Ge.shortcut,children:"X"})]})]}),l.jsxs("div",{className:Ge.buttonWrapper,children:[l.jsx("button",{className:Ge.controlButton,onClick:w=>{w.stopPropagation(),Kn(),qe&&Fo(),Me(!J)},children:l.jsx(RS,{size:24})}),g&&ps!=="disconnected"&&l.jsx("span",{className:`${Ge.mcpIndicator} ${Ge[ps]} ${J?Ge.hidden:""}`,title:ps==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:Ge.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:Ge.divider}),l.jsxs("div",{className:`${Ge.buttonWrapper} ${an&&typeof window<"u"&&an.x>window.innerWidth-120?Ge.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:Ge.controlButton,onClick:w=>{w.stopPropagation(),Kn(),di()},children:l.jsx(LS,{size:24})}),l.jsxs("span",{className:Ge.buttonTooltip,children:["Exit",l.jsx("span",{className:Ge.shortcut,children:"Esc"})]})]})]}),l.jsx(_6,{visible:qe&&j,activeType:Vt,onSelect:w=>{lt(Vt===w?null:w)},isDarkMode:As,sectionCount:(q=st==null?void 0:st.sections.length)!=null?q:0,onDetectSections:()=>{var Ae,xe;const w=M6(),C=(Ae=st==null?void 0:st.sections)!=null?Ae:[],N=new Set(C.map(Le=>Le.selector)),L=w.filter(Le=>!N.has(Le.selector)),W=[...C,...L],te=[...(xe=st==null?void 0:st.originalOrder)!=null?xe:[],...L.map(Le=>Le.id)];Tt({sections:W,originalOrder:te,detectedAt:Date.now()})},placementCount:at.length,onClearPlacements:()=>{zs(w=>w+1),Zo(w=>w+1),Ht(()=>{Tt({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:mt,onBlankCanvasChange:w=>{const C={sections:[],originalOrder:[],detectedAt:Date.now()};w?(ks.current={rearrange:st,placements:at},Tt(hs.current.rearrange||C),Mt(hs.current.placements),lt(null)):(hs.current={rearrange:st,placements:at},Tt(ks.current.rearrange||C),Mt(ks.current.placements)),Lt(w)},wireframePurpose:dn,onWireframePurposeChange:qn,Tooltip:Er,onDragStart:(w,C)=>{var pt;C.preventDefault();const N=xt[w];let L=null,W=!1;const te=C.clientX,Ae=C.clientY,xe=C.target.closest("[data-feedback-toolbar]"),Le=(pt=xe==null?void 0:xe.getBoundingClientRect().top)!=null?pt:window.innerHeight,Xe=_t=>{const ut=_t.clientX-te,rt=_t.clientY-Ae;if(!W&&(Math.abs(ut)>4||Math.abs(rt)>4)&&(W=!0,L=document.createElement("div"),L.className=`${Oe.dragPreview}${mt?` ${Oe.dragPreviewWireframe}`:""}`,document.body.appendChild(L)),!L)return;const kn=Math.max(0,Le-_t.clientY),zn=Math.min(1,kn/180),$n=1-Math.pow(1-zn,2),rn=28,Ot=20,vt=Math.min(140,N.width*.18),Dt=Math.min(90,N.height*.18),In=rn+(vt-rn)*$n,gn=Ot+(Dt-Ot)*$n;L.style.width=`${In}px`,L.style.height=`${gn}px`,L.style.left=`${_t.clientX-In/2}px`,L.style.top=`${_t.clientY-gn/2}px`,L.style.opacity=`${.5+.5*$n}`,L.textContent=$n>.25?w:""},Je=_t=>{if(window.removeEventListener("mousemove",Xe),window.removeEventListener("mouseup",Je),L&&document.body.removeChild(L),W){const ut=N.width,rt=N.height,kn=window.scrollY,zn=Math.max(0,_t.clientX-ut/2),$n=Math.max(0,_t.clientY+kn-rt/2),rn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:w,x:zn,y:$n,width:ut,height:rt,scrollY:kn,timestamp:Date.now()};Mt(Ot=>[...Ot,rn]),lt(null),js.current=new Set,Do(Ot=>Ot+1)}};window.addEventListener("mousemove",Xe),window.addEventListener("mouseup",Je)}}),l.jsx(OC,{settings:Yt,onSettingsChange:w=>ws(C=>({...C,...w})),isDarkMode:As,onToggleTheme:Ns,isDevMode:ci,connectionStatus:ps,endpoint:g,isVisible:we,toolbarNearBottom:!!an&&an.y<230,settingsPage:Ie,onSettingsPageChange:Ee,onHideToolbar:Hi})]})}),(qe||yt)&&l.jsx("div",{className:`${Oe.blankCanvas} ${on?Oe.visible:""} ${Xt?Oe.gridActive:""}`,style:{"--canvas-opacity":ln},"data-feedback-toolbar":!0}),qe&&mt&&on&&l.jsxs("div",{className:Oe.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:Oe.wireframeOpacityRow,children:[l.jsx("span",{className:Oe.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:Oe.wireframeOpacitySlider,min:0,max:1,step:.01,value:ln,onChange:w=>Rn(Number(w.target.value))})]}),l.jsxs("div",{className:Oe.wireframeNoticeTitleRow,children:[l.jsx("span",{className:Oe.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:Oe.wireframeNoticeDivider}),l.jsx("button",{className:Oe.wireframeStartOver,onClick:()=>{zs(w=>w+1),Tt({sections:[],originalOrder:[],detectedAt:Date.now()}),hs.current={rearrange:null,placements:[]},qn(""),td(Nt)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(qe||yt)&&l.jsx(d6,{placements:at,onChange:Mt,activeComponent:yt?null:Vt,onActiveComponentChange:lt,isDarkMode:As,exiting:yt,onInteractionChange:En,passthrough:!Vt,extraSnapRects:st==null?void 0:st.sections.map(w=>w.currentRect),deselectSignal:ss,clearSignal:wo,wireframe:mt,onSelectionChange:(w,C)=>{js.current=w,C||(vn.current=new Set,Ws(N=>N+1))},onDragMove:(w,C)=>{const N=vn.current;if(!(!N.size||!st)){if(!Yn.current){Yn.current=new Map;for(const L of st.sections)N.has(L.id)&&Yn.current.set(L.id,{x:L.currentRect.x,y:L.currentRect.y})}for(const L of st.sections){if(!N.has(L.id)||!Yn.current.get(L.id))continue;const te=document.querySelector(`[data-rearrange-section="${L.id}"]`);te&&(te.style.transform=`translate(${w}px, ${C}px)`)}}},onDragEnd:(w,C,N)=>{const L=vn.current,W=Yn.current;if(Yn.current=null,!(!L.size||!st||!W)){for(const te of L){const Ae=document.querySelector(`[data-rearrange-section="${te}"]`);Ae&&(Ae.style.transform="")}N&&Tt(te=>te&&{...te,sections:te.sections.map(Ae=>{const xe=W.get(Ae.id);return xe?{...Ae,currentRect:{...Ae.currentRect,x:Math.max(0,xe.x+w),y:Math.max(0,xe.y+C)}}:Ae})})}}}),(qe||yt)&&st&&l.jsx(A6,{rearrangeState:st,onChange:Tt,isDarkMode:As,exiting:yt,blankCanvas:mt,extraSnapRects:at.map(w=>({x:w.x,y:w.y,width:w.width,height:w.height})),clearSignal:jn,deselectSignal:os,onSelectionChange:(w,C)=>{vn.current=w,C||(js.current=new Set,Do(N=>N+1))},onDragMove:(w,C)=>{const N=js.current;if(N.size){if(!Yn.current){Yn.current=new Map;for(const L of at)N.has(L.id)&&Yn.current.set(L.id,{x:L.x,y:L.y})}for(const L of N){const W=document.querySelector(`[data-design-placement="${L}"]`);W&&(W.style.transform=`translate(${w}px, ${C}px)`)}}},onDragEnd:(w,C,N)=>{const L=js.current,W=Yn.current;if(Yn.current=null,!(!L.size||!W)){for(const te of L){const Ae=document.querySelector(`[data-design-placement="${te}"]`);Ae&&(Ae.style.transform="")}N&&Mt(te=>te.map(Ae=>{const xe=W.get(Ae.id);return xe?{...Ae,x:Math.max(0,xe.x+w),y:Math.max(0,xe.y+C)}:Ae}))}}}),l.jsx("canvas",{ref:Gs,className:`${Ge.drawCanvas} ${wn?Ge.active:""}`,style:{opacity:Ci?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:Ge.markersLayer,"data-feedback-toolbar":!0,children:[le&&gs.filter(w=>!w.isFixed).map((w,C,N)=>l.jsx(c1,{annotation:w,globalIndex:gs.findIndex(L=>L.id===w.id),layerIndex:C,layerSize:N.length,isExiting:De,isClearing:Ne,isAnimated:ko.has(w.id),isHovered:!De&&We===w.id,isDeleting:Bt===w.id,isEditingAny:!!ce,renumberFrom:Qt,markerClickBehavior:Yt.markerClickBehavior,tooltipStyle:Hs(w),onHoverEnter:L=>!De&&L.id!==Oo.current&&qt(L),onHoverLeave:()=>qt(null),onClick:L=>Yt.markerClickBehavior==="delete"?Gt(L.id):Ve(L),onContextMenu:Ve},w.id)),le&&!De&&Zs.filter(w=>!w.isFixed).map(w=>l.jsx(u1,{annotation:w},w.id))]}),l.jsxs("div",{className:Ge.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[le&&gs.filter(w=>w.isFixed).map((w,C,N)=>l.jsx(c1,{annotation:w,globalIndex:gs.findIndex(L=>L.id===w.id),layerIndex:C,layerSize:N.length,isExiting:De,isClearing:Ne,isAnimated:ko.has(w.id),isHovered:!De&&We===w.id,isDeleting:Bt===w.id,isEditingAny:!!ce,renumberFrom:Qt,markerClickBehavior:Yt.markerClickBehavior,tooltipStyle:Hs(w),onHoverEnter:L=>!De&&L.id!==Oo.current&&qt(L),onHoverLeave:()=>qt(null),onClick:L=>Yt.markerClickBehavior==="delete"?Gt(L.id):Ve(L),onContextMenu:Ve},w.id)),le&&!De&&Zs.filter(w=>w.isFixed).map(w=>l.jsx(u1,{annotation:w,fixed:!0},w.id))]}),j&&l.jsxs("div",{className:Ge.overlay,"data-feedback-toolbar":!0,style:F||ce?{zIndex:99999}:void 0,children:[(se==null?void 0:se.rect)&&!F&&!bt&&!Es&&l.jsx("div",{className:`${Ge.hoverHighlight} ${Ge.enter}`,style:{left:se.rect.left,top:se.rect.top,width:se.rect.width,height:se.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Mn.filter(w=>document.contains(w.element)).map((w,C)=>{const N=w.element.getBoundingClientRect(),L=Mn.length>1;return l.jsx("div",{className:L?Ge.multiSelectOutline:Ge.singleSelectOutline,style:{position:"fixed",left:N.left,top:N.top,width:N.width,height:N.height,...L?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},C)}),We&&!F&&(()=>{var W;const w=T.find(te=>te.id===We);if(!(w!=null&&w.boundingBox))return null;if((W=w.elementBoundingBoxes)!=null&&W.length)return Ke.length>0?Ke.filter(te=>document.contains(te)).map((te,Ae)=>{const xe=te.getBoundingClientRect();return l.jsx("div",{className:`${Ge.multiSelectOutline} ${Ge.enter}`,style:{left:xe.left,top:xe.top,width:xe.width,height:xe.height}},`hover-outline-live-${Ae}`)}):w.elementBoundingBoxes.map((te,Ae)=>l.jsx("div",{className:`${Ge.multiSelectOutline} ${Ge.enter}`,style:{left:te.x,top:te.y-ft,width:te.width,height:te.height}},`hover-outline-${Ae}`));const C=Rt&&document.contains(Rt)?Rt.getBoundingClientRect():null,N=C?{x:C.left,y:C.top,width:C.width,height:C.height}:{x:w.boundingBox.x,y:w.isFixed?w.boundingBox.y:w.boundingBox.y-ft,width:w.boundingBox.width,height:w.boundingBox.height},L=w.isMultiSelect;return l.jsx("div",{className:`${L?Ge.multiSelectOutline:Ge.singleSelectOutline} ${Ge.enter}`,style:{left:N.x,top:N.y,width:N.width,height:N.height,...L?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),se&&!F&&!bt&&!Es&&l.jsxs("div",{className:`${Ge.hoverTooltip} ${Ge.enter}`,style:{left:Math.max(8,Math.min(P.x,window.innerWidth-100)),top:Math.max(P.y-(se.reactComponents?48:32),8)},children:[se.reactComponents&&l.jsx("div",{className:Ge.hoverReactPath,children:se.reactComponents}),l.jsx("div",{className:Ge.hoverElementName,children:se.elementName})]}),F&&l.jsxs(l.Fragment,{children:[(R=F.multiSelectElements)!=null&&R.length?F.multiSelectElements.filter(w=>document.contains(w)).map((w,C)=>{const N=w.getBoundingClientRect();return l.jsx("div",{className:`${Ge.multiSelectOutline} ${Vn?Ge.exit:Ge.enter}`,style:{left:N.left,top:N.top,width:N.width,height:N.height}},`pending-multi-${C}`)}):F.targetElement&&document.contains(F.targetElement)?(()=>{const w=F.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${Ge.singleSelectOutline} ${Vn?Ge.exit:Ge.enter}`,style:{left:w.left,top:w.top,width:w.width,height:w.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():F.boundingBox&&l.jsx("div",{className:`${F.isMultiSelect?Ge.multiSelectOutline:Ge.singleSelectOutline} ${Vn?Ge.exit:Ge.enter}`,style:{left:F.boundingBox.x,top:F.boundingBox.y-ft,width:F.boundingBox.width,height:F.boundingBox.height,...F.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const w=F.x,C=F.isFixed?F.y:F.y-ft;return l.jsxs(l.Fragment,{children:[l.jsx(jC,{x:w,y:C,isMultiSelect:F.isMultiSelect,isExiting:Vn}),l.jsx(jd,{ref:Ii,element:F.element,selectedText:F.selectedText,computedStyles:F.computedStylesObj,placeholder:F.element==="Area selection"?"What should change in this area?":F.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Pt,onCancel:It,isExiting:Vn,lightMode:!As,accentColor:F.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,w/100*window.innerWidth)),...C>window.innerHeight-290?{bottom:window.innerHeight-C+20}:{top:C+20}}})]})})()]}),ce&&l.jsxs(l.Fragment,{children:[(ne=ce.elementBoundingBoxes)!=null&&ne.length?Qe.length>0?Qe.filter(w=>document.contains(w)).map((w,C)=>{const N=w.getBoundingClientRect();return l.jsx("div",{className:`${Ge.multiSelectOutline} ${Ge.enter}`,style:{left:N.left,top:N.top,width:N.width,height:N.height}},`edit-multi-live-${C}`)}):ce.elementBoundingBoxes.map((w,C)=>l.jsx("div",{className:`${Ge.multiSelectOutline} ${Ge.enter}`,style:{left:w.x,top:w.y-ft,width:w.width,height:w.height}},`edit-multi-${C}`)):(()=>{const w=nt&&document.contains(nt)?nt.getBoundingClientRect():null,C=w?{x:w.left,y:w.top,width:w.width,height:w.height}:ce.boundingBox?{x:ce.boundingBox.x,y:ce.isFixed?ce.boundingBox.y:ce.boundingBox.y-ft,width:ce.boundingBox.width,height:ce.boundingBox.height}:null;return C?l.jsx("div",{className:`${ce.isMultiSelect?Ge.multiSelectOutline:Ge.singleSelectOutline} ${Ge.enter}`,style:{left:C.x,top:C.y,width:C.width,height:C.height,...ce.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(jd,{ref:Pi,element:ce.element,selectedText:ce.selectedText,computedStyles:S6(ce.computedStyles),placeholder:"Edit your feedback...",initialValue:ce.comment,submitLabel:"Save",onSubmit:nn,onCancel:_n,onDelete:()=>Gt(ce.id),isExiting:lo,lightMode:!As,accentColor:ce.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const w=ce.isFixed?ce.y:ce.y-ft;return{left:Math.max(160,Math.min(window.innerWidth-160,ce.x/100*window.innerWidth)),...w>window.innerHeight-290?{bottom:window.innerHeight-w+20}:{top:w+20}}})()})]}),Es&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:Ts,className:Ge.dragSelection}),l.jsx("div",{ref:Lo,className:Ge.highlightsContainer})]})]})]}),document.body)}const yp=_.createContext({});function Lc(t){const n=_.useRef(null);return n.current===null&&(n.current=t()),n.current}const IC=typeof window<"u",xp=IC?_.useLayoutEffect:_.useEffect,zd=_.createContext(null);function bp(t,n){t.indexOf(n)===-1&&t.push(n)}function yl(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const fa=(t,n,i)=>i>n?n:i<t?t:i;let vp=()=>{};const ar={},_b=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function gb(t){return typeof t=="object"&&t!==null}const yb=t=>/^0[^.\s]+$/u.test(t);function xb(t){let n;return()=>(n===void 0&&(n=t()),n)}const zi=t=>t,PC=(t,n)=>i=>n(t(i)),Oc=(...t)=>t.reduce(PC),xl=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class wp{constructor(){this.subscriptions=[]}add(n){return bp(this.subscriptions,n),()=>yl(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ri=t=>t*1e3,Oi=t=>t/1e3;function bb(t,n){return n?t*(1e3/n):0}const HC=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},vb=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,UC=1e-7,VC=12;function YC(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=vb(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>UC&&++h<VC);return d}function zc(t,n,i,a){if(t===n&&i===a)return zi;const c=u=>YC(u,0,1,t,i);return u=>u===0||u===1?u:vb(c(u),n,a)}const wb=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,Sb=t=>n=>1-t(1-n),Cb=zc(.33,1.53,.69,.99),Sp=Sb(Cb),kb=wb(Sp),jb=t=>t>=1?1:(t*=2)<1?.5*Sp(t):.5*(2-Math.pow(2,-10*(t-1))),Cp=t=>1-Math.sin(Math.acos(t)),Mb=Sb(Cp),Eb=wb(Cp),WC=zc(.42,0,1,1),FC=zc(0,0,.58,1),Tb=zc(.42,0,.58,1),Ab=t=>Array.isArray(t)&&typeof t[0]!="number";function Nb(t,n){return Ab(t)?t[HC(0,t.length,n)]:t}const Db=t=>Array.isArray(t)&&typeof t[0]=="number",XC={linear:zi,easeIn:WC,easeInOut:Tb,easeOut:FC,circIn:Cp,circInOut:Eb,circOut:Mb,backIn:Sp,backInOut:kb,backOut:Cb,anticipate:jb},GC=t=>typeof t=="string",m1=t=>{if(Db(t)){vp(t.length===4);const[n,i,a,c]=t;return zc(n,i,a,c)}else if(GC(t))return XC[t];return t},id=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function qC(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(g){d.has(g)&&(y.schedule(g),t()),g(h)}const y={schedule:(g,x=!1,b=!1)=>{const k=b&&c?i:a;return x&&d.add(g),k.add(g),g},cancel:g=>{a.delete(g),d.delete(g)},process:g=>{if(h=g,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,y.process(g))}};return y}const KC=40;function Rb(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=id.reduce((O,D)=>(O[D]=qC(u),O),{}),{setup:h,read:p,resolveKeyframes:y,preUpdate:g,update:x,preRender:b,render:S,postRender:k}=d,j=()=>{const O=ar.useManualTiming,D=O?c.timestamp:performance.now();i=!1,O||(c.delta=a?1e3/60:Math.max(Math.min(D-c.timestamp,KC),1)),c.timestamp=D,c.isProcessing=!0,h.process(c),p.process(c),y.process(c),g.process(c),x.process(c),b.process(c),S.process(c),k.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(j))},E=()=>{i=!0,a=!0,c.isProcessing||t(j)};return{schedule:id.reduce((O,D)=>{const K=d[D];return O[D]=(Y,Q=!1,V=!1)=>(i||E(),K.schedule(Y,Q,V)),O},{}),cancel:O=>{for(let D=0;D<id.length;D++)d[id[D]].cancel(O)},state:c,steps:d}}const{schedule:ns,cancel:Na,state:No,steps:um}=Rb(typeof requestAnimationFrame<"u"?requestAnimationFrame:zi,!0);let pd;function QC(){pd=void 0}const qo={now:()=>(pd===void 0&&qo.set(No.isProcessing||ar.useManualTiming?No.timestamp:performance.now()),pd),set:t=>{pd=t,queueMicrotask(QC)}},Bb=t=>n=>typeof n=="string"&&n.startsWith(t),Lb=Bb("--"),ZC=Bb("var(--"),kp=t=>ZC(t)?JC.test(t.split("/*")[0].trim()):!1,JC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function p1(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const wl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Tc={...wl,transform:t=>fa(0,1,t)},ad={...wl,default:1},wc=t=>Math.round(t*1e5)/1e5,jp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function e3(t){return t==null}const t3=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Mp=(t,n)=>i=>!!(typeof i=="string"&&t3.test(i)&&i.startsWith(t)||n&&!e3(i)&&Object.prototype.hasOwnProperty.call(i,n)),Ob=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(jp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},n3=t=>fa(0,255,t),dm={...wl,transform:t=>Math.round(n3(t))},Tr={test:Mp("rgb","red"),parse:Ob("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+dm.transform(t)+", "+dm.transform(n)+", "+dm.transform(i)+", "+wc(Tc.transform(a))+")"};function s3(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const $m={test:Mp("#"),parse:s3,transform:Tr.transform},$c=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),nr=$c("deg"),da=$c("%"),jt=$c("px"),o3=$c("vh"),i3=$c("vw"),_1={...da,parse:t=>da.parse(t)/100,transform:t=>da.transform(t*100)},hl={test:Mp("hsl","hue"),parse:Ob("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+da.transform(wc(n))+", "+da.transform(wc(i))+", "+wc(Tc.transform(a))+")"},io={test:t=>Tr.test(t)||$m.test(t)||hl.test(t),parse:t=>Tr.test(t)?Tr.parse(t):hl.test(t)?hl.parse(t):$m.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Tr.transform(t):hl.transform(t),getAnimatableNone:t=>{const n=io.parse(t);return n.alpha=0,io.transform(n)}},a3=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function r3(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(jp))==null?void 0:n.length)||0)+(((i=t.match(a3))==null?void 0:i.length)||0)>0}const zb="number",$b="color",l3="var",c3="var(",g1="${}",u3=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function bl(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(u3,p=>(io.test(p)?(a.color.push(u),c.push($b),i.push(io.parse(p))):p.startsWith(c3)?(a.var.push(u),c.push(l3),i.push(p)):(a.number.push(u),c.push(zb),i.push(parseFloat(p))),++u,g1)).split(g1);return{values:i,split:h,indexes:a,types:c}}function d3(t){return bl(t).values}function Ib({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===zb?c+=wc(a[u]):d===$b?c+=io.transform(a[u]):c+=a[u]}return c}}function f3(t){return Ib(bl(t))}const h3=t=>typeof t=="number"?0:io.test(t)?io.getAnimatableNone(t):t,m3=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:h3(t);function p3(t){const n=bl(t);return Ib(n)(n.values.map((a,c)=>m3(a,n.split[c])))}const Ji={test:r3,parse:d3,createTransformer:f3,getAnimatableNone:p3};function fm(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function _3({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=fm(p,h,t+1/3),u=fm(p,h,t),d=fm(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Td(t,n){return i=>i>0?n:t}const fs=(t,n,i)=>t+(n-t)*i,hm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},g3=[$m,Tr,hl],y3=t=>g3.find(n=>n.test(t));function y1(t){const n=y3(t);if(!n)return!1;let i=n.parse(t);return n===hl&&(i=_3(i)),i}const x1=(t,n)=>{const i=y1(t),a=y1(n);if(!i||!a)return Td(t,n);const c={...i};return u=>(c.red=hm(i.red,a.red,u),c.green=hm(i.green,a.green,u),c.blue=hm(i.blue,a.blue,u),c.alpha=fs(i.alpha,a.alpha,u),Tr.transform(c))},Im=new Set(["none","hidden"]);function x3(t,n){return Im.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function b3(t,n){return i=>fs(t,n,i)}function Ep(t){return typeof t=="number"?b3:typeof t=="string"?kp(t)?Td:io.test(t)?x1:S3:Array.isArray(t)?Pb:typeof t=="object"?io.test(t)?x1:v3:Td}function Pb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>Ep(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function v3(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=Ep(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function w3(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const S3=(t,n)=>{const i=Ji.createTransformer(n),a=bl(t),c=bl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Im.has(t)&&!c.values.length||Im.has(n)&&!a.values.length?x3(t,n):Oc(Pb(w3(a,c),c.values),i):Td(t,n)};function Hb(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?fs(t,n,i):Ep(t)(t,n)}const C3=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>ns.update(n,i),stop:()=>Na(n),now:()=>No.isProcessing?No.timestamp:qo.now()}},Ub=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Ad=2e4;function Tp(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Ad;)n+=i,a=t.next(n);return n>=Ad?1/0:n}function Vb(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(Tp(a),Ad);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Oi(c)}}const Os={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Pm(t,n){return t*Math.sqrt(1-n*n)}const k3=12;function j3(t,n,i){let a=i;for(let c=1;c<k3;c++)a=a-t(a)/n(a);return a}const mm=.001;function M3({duration:t=Os.duration,bounce:n=Os.bounce,velocity:i=Os.velocity,mass:a=Os.mass}){let c,u,d=1-n;d=fa(Os.minDamping,Os.maxDamping,d),t=fa(Os.minDuration,Os.maxDuration,Oi(t)),d<1?(c=y=>{const g=y*d,x=g*t,b=g-i,S=Pm(y,d),k=Math.exp(-x);return mm-b/S*k},u=y=>{const x=y*d*t,b=x*i+i,S=Math.pow(d,2)*Math.pow(y,2)*t,k=Math.exp(-x),j=Pm(Math.pow(y,2),d);return(-c(y)+mm>0?-1:1)*((b-S)*k)/j}):(c=y=>{const g=Math.exp(-y*t),x=(y-i)*t+1;return-mm+g*x},u=y=>{const g=Math.exp(-y*t),x=(i-y)*(t*t);return g*x});const h=5/t,p=j3(c,u,h);if(t=ri(t),isNaN(p))return{stiffness:Os.stiffness,damping:Os.damping,duration:t};{const y=Math.pow(p,2)*a;return{stiffness:y,damping:d*2*Math.sqrt(a*y),duration:t}}}const E3=["duration","bounce"],T3=["stiffness","damping","mass"];function b1(t,n){return n.some(i=>t[i]!==void 0)}function A3(t){let n={velocity:Os.velocity,stiffness:Os.stiffness,damping:Os.damping,mass:Os.mass,isResolvedFromDuration:!1,...t};if(!b1(t,T3)&&b1(t,E3))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*fa(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Os.mass,stiffness:c,damping:u}}else{const i=M3({...t,velocity:0});n={...n,...i,mass:Os.mass},n.isResolvedFromDuration=!0}return n}function Ac(t=Os.visualDuration,n=Os.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:y,mass:g,duration:x,velocity:b,isResolvedFromDuration:S}=A3({...i,velocity:-Oi(i.velocity||0)}),k=b||0,j=y/(2*Math.sqrt(p*g)),E=d-u,T=Oi(Math.sqrt(p/g)),z=Math.abs(E)<5;a||(a=z?Os.restSpeed.granular:Os.restSpeed.default),c||(c=z?Os.restDelta.granular:Os.restDelta.default);let O,D,K,Y,Q,V;if(j<1)K=Pm(T,j),Y=(k+j*T*E)/K,O=le=>{const re=Math.exp(-j*T*le);return d-re*(Y*Math.sin(K*le)+E*Math.cos(K*le))},Q=j*T*Y+E*K,V=j*T*E-Y*K,D=le=>Math.exp(-j*T*le)*(Q*Math.sin(K*le)+V*Math.cos(K*le));else if(j===1){O=re=>d-Math.exp(-T*re)*(E+(k+T*E)*re);const le=k+T*E;D=re=>Math.exp(-T*re)*(T*le*re-k)}else{const le=T*Math.sqrt(j*j-1);O=se=>{const me=Math.exp(-j*T*se),P=Math.min(le*se,300);return d-me*((k+j*T*E)*Math.sinh(P)+le*E*Math.cosh(P))/le};const re=(k+j*T*E)/le,De=j*T*re-E*le,Ye=j*T*E-re*le;D=se=>{const me=Math.exp(-j*T*se),P=Math.min(le*se,300);return me*(De*Math.sinh(P)+Ye*Math.cosh(P))}}const ee={calculatedDuration:S&&x||null,velocity:le=>ri(D(le)),next:le=>{if(!S&&j<1){const De=Math.exp(-j*T*le),Ye=Math.sin(K*le),se=Math.cos(K*le),me=d-De*(Y*Ye+E*se),P=ri(De*(Q*Ye+V*se));return h.done=Math.abs(P)<=a&&Math.abs(d-me)<=c,h.value=h.done?d:me,h}const re=O(le);if(S)h.done=le>=x;else{const De=ri(D(le));h.done=Math.abs(De)<=a&&Math.abs(d-re)<=c}return h.value=h.done?d:re,h},toString:()=>{const le=Math.min(Tp(ee),Ad),re=Ub(De=>ee.next(le*De).value,le,30);return le+"ms "+re},toTransition:()=>{}};return ee}Ac.applyToOptions=t=>{const n=Vb(t,100,Ac);return t.ease=n.ease,t.duration=ri(n.duration),t.type="keyframes",t};const N3=5;function Yb(t,n,i){const a=Math.max(n-N3,0);return bb(i-t(a),n-a)}function Hm({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:y=.5,restSpeed:g}){const x=t[0],b={done:!1,value:x},S=V=>h!==void 0&&V<h||p!==void 0&&V>p,k=V=>h===void 0?p:p===void 0||Math.abs(h-V)<Math.abs(p-V)?h:p;let j=i*n;const E=x+j,T=d===void 0?E:d(E);T!==E&&(j=T-x);const z=V=>-j*Math.exp(-V/a),O=V=>T+z(V),D=V=>{const ee=z(V),le=O(V);b.done=Math.abs(ee)<=y,b.value=b.done?T:le};let K,Y;const Q=V=>{S(b.value)&&(K=V,Y=Ac({keyframes:[b.value,k(b.value)],velocity:Yb(O,V,b.value),damping:c,stiffness:u,restDelta:y,restSpeed:g}))};return Q(0),{calculatedDuration:null,next:V=>{let ee=!1;return!Y&&K===void 0&&(ee=!0,D(V),Q(V)),K!==void 0&&V>=K?Y.next(V-K):(!ee&&D(V),b)}}}function D3(t,n,i){const a=[],c=i||ar.mix||Hb,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||zi:n;h=Oc(p,h)}a.push(h)}return a}function Wb(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(vp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=D3(n,a,c),p=h.length,y=g=>{if(d&&g<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(g<t[x+1]);x++);const b=xl(t[x],t[x+1],g);return h[x](b)};return i?g=>y(fa(t[0],t[u-1],g)):y}function Fb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=xl(0,n,a);t.push(fs(i,1,c))}}function Xb(t){const n=[0];return Fb(n,t.length-1),n}function R3(t,n){return t.map(i=>i*n)}function B3(t,n){return t.map(()=>n||Tb).splice(0,t.length-1)}function Sc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=Ab(a)?a.map(m1):m1(a),u={done:!1,value:n[0]},d=R3(i&&i.length===n.length?i:Xb(n),t),h=Wb(d,n,{ease:Array.isArray(c)?c:B3(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const L3=t=>t!==null;function $d(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(L3),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const O3={decay:Hm,inertia:Hm,tween:Sc,keyframes:Sc,spring:Ac};function Gb(t){typeof t.type=="string"&&(t.type=O3[t.type])}class Ap{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const z3=t=>t/100;class Nd extends Ap{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==qo.now()&&this.tick(qo.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Gb(n);const{type:i=Sc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||Sc;p!==Sc&&typeof h[0]!="number"&&(this.mixKeyframes=Oc(z3,Hb(h[0],h[1])),h=[0,100]);const y=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),y.calculatedDuration===null&&(y.calculatedDuration=Tp(y));const{calculatedDuration:g}=y;this.calculatedDuration=g,this.resolvedDuration=g+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=y}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:y=0,keyframes:g,repeat:x,repeatType:b,repeatDelay:S,type:k,onUpdate:j,finalKeyframe:E}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const T=this.currentTime-y*(this.playbackSpeed>=0?1:-1),z=this.playbackSpeed>=0?T<0:T>c;this.currentTime=Math.max(T,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let O=this.currentTime,D=a;if(x){const V=Math.min(this.currentTime,c)/h;let ee=Math.floor(V),le=V%1;!le&&V>=1&&(le=1),le===1&&ee--,ee=Math.min(ee,x+1),!!(ee%2)&&(b==="reverse"?(le=1-le,S&&(le-=S/h)):b==="mirror"&&(D=d)),O=fa(0,1,le)*h}let K;z?(this.delayState.value=g[0],K=this.delayState):K=D.next(O),u&&!z&&(K.value=u(K.value));let{done:Y}=K;!z&&p!==null&&(Y=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const Q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Y);return Q&&k!==Hm&&(K.value=$d(g,this.options,E,this.speed)),j&&j(K.value),Q&&this.finish(),K}then(n,i){return this.finished.then(n,i)}get duration(){return Oi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Oi(n)}get time(){return Oi(this.currentTime)}set time(n){n=ri(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Yb(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(qo.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Oi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=C3,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(qo.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function $3(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const Ar=t=>t*180/Math.PI,Um=t=>{const n=Ar(Math.atan2(t[1],t[0]));return Vm(n)},I3={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Um,rotateZ:Um,skewX:t=>Ar(Math.atan(t[1])),skewY:t=>Ar(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Vm=t=>(t=t%360,t<0&&(t+=360),t),v1=Um,w1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),S1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),P3={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:w1,scaleY:S1,scale:t=>(w1(t)+S1(t))/2,rotateX:t=>Vm(Ar(Math.atan2(t[6],t[5]))),rotateY:t=>Vm(Ar(Math.atan2(-t[2],t[0]))),rotateZ:v1,rotate:v1,skewX:t=>Ar(Math.atan(t[4])),skewY:t=>Ar(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Ym(t){return t.includes("scale")?1:0}function Wm(t,n){if(!t||t==="none")return Ym(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=P3,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=I3,c=h}if(!c)return Ym(n);const u=a[n],d=c[1].split(",").map(U3);return typeof u=="function"?u(d):d[u]}const H3=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Wm(i,n)};function U3(t){return parseFloat(t.trim())}const Sl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Cl=new Set(Sl),C1=t=>t===wl||t===jt,V3=new Set(["x","y","z"]),Y3=Sl.filter(t=>!V3.has(t));function W3(t){const n=[];return Y3.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const ir={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Wm(n,"x"),y:(t,{transform:n})=>Wm(n,"y")};ir.translateX=ir.x;ir.translateY=ir.y;const Nr=new Set;let Fm=!1,Xm=!1,Gm=!1;function qb(){if(Xm){const t=Array.from(Nr).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=W3(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Xm=!1,Fm=!1,Nr.forEach(t=>t.complete(Gm)),Nr.clear()}function Kb(){Nr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Xm=!0)})}function F3(){Gm=!0,Kb(),qb(),Gm=!1}class Np{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Nr.add(this),Fm||(Fm=!0,ns.read(Kb),ns.resolveKeyframes(qb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}$3(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Nr.delete(this)}cancel(){this.state==="scheduled"&&(Nr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const X3=t=>t.startsWith("--");function Qb(t,n,i){X3(n)?t.style.setProperty(n,i):t.style[n]=i}const G3={};function Zb(t,n){const i=xb(t);return()=>{var a;return(a=G3[n])!=null?a:i()}}const q3=Zb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Jb=Zb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),gc=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,k1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:gc([0,.65,.55,1]),circOut:gc([.55,0,1,.45]),backIn:gc([.31,.01,.66,-.59]),backOut:gc([.33,1.53,.69,.99])};function e5(t,n){if(t)return typeof t=="function"?Jb()?Ub(t,n):"ease-out":Db(t)?gc(t):Array.isArray(t)?t.map(i=>e5(i,n)||k1.easeOut):k1[t]}function K3(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},y=void 0){const g={[n]:i};p&&(g.offset=p);const x=e5(h,c);Array.isArray(x)&&(g.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return y&&(b.pseudoElement=y),t.animate(g,b)}function Dp(t){return typeof t=="function"&&"applyToOptions"in t}function Q3({type:t,...n}){var i,a;return Dp(t)&&Jb()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class t5 extends Ap{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,vp(typeof n.type!="string");const y=Q3(n);this.animation=K3(i,a,c,y,u),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=$d(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(g),Qb(i,a,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Oi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Oi(n)}get time(){return Oi(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ri(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&q3()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),zi):c(this)}}const n5={anticipate:jb,backInOut:kb,circInOut:Eb};function Z3(t){return t in n5}function J3(t){typeof t.ease=="string"&&Z3(t.ease)&&(t.ease=n5[t.ease])}const pm=10;class ek extends t5{constructor(n){J3(n),Gb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Nd({...d,autoplay:!1}),p=Math.max(pm,qo.now()-this.startTime),y=fa(0,pm,p-pm),g=h.sample(p).value,{name:x}=this.options;u&&x&&Qb(u,x,g),i.setWithVelocity(h.sample(Math.max(0,p-y)).value,g,y),h.stop()}}const j1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ji.test(t)||t==="0")&&!t.startsWith("url("));function tk(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function nk(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=j1(c,n),h=j1(u,n);return!d||!h?!1:tk(t)||(i==="spring"||Dp(i))&&a}function qm(t){t.duration=0,t.type="keyframes"}const s5=new Set(["opacity","clipPath","filter","transform"]),sk=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function ok(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&sk.test(t[n]))return!0;return!1}const ik=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),ak=xb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function rk(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:g}=n.owner.getProps();return ak()&&i&&(s5.has(i)||ik.has(i)&&ok(h))&&(i!=="transform"||!g)&&!y&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const lk=40;class ck extends Ap{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:y,element:g,...x}){var k;super(),this.stop=()=>{var j,E;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(E=this.keyframeResolver)==null||E.cancel()},this.createdAt=qo.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:y,element:g,...x},S=(g==null?void 0:g.KeyframeResolver)||Np;this.keyframeResolver=new S(h,(j,E,T)=>this.onKeyframesResolved(j,E,b,!T),p,y,g),(k=this.keyframeResolver)==null||k.scheduleResolve()}onKeyframesResolved(n,i,a,c){var T,z;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:y,onUpdate:g}=a;this.resolvedAt=qo.now();let x=!0;nk(n,u,d,h)||(x=!1,(ar.instantAnimations||!p)&&(g==null||g($d(n,a,i))),n[0]=n[n.length-1],qm(a),a.repeat=0);const S={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>lk?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},k=x&&!y&&rk(S),j=(z=(T=S.motionValue)==null?void 0:T.owner)==null?void 0:z.current;let E;if(k)try{E=new ek({...S,element:j})}catch{E=new Nd(S)}else E=new Nd(S);E.finished.then(()=>{this.notifyFinished()}).catch(zi),this.pendingTimeline&&(this.stopTimeline=E.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=E}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),F3()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class uk{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return M1(this.animations,"duration")}get iterationDuration(){return M1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function M1(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class dk extends uk{then(n,i){return this.finished.finally(n).then(()=>{})}}function o5(t,n,i,a=0,c=1){const u=Array.from(t).sort((y,g)=>y.sortNodePosition(g)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const fk=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function hk(t){const n=fk.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function i5(t,n,i=1){const[a,c]=hk(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return _b(d)?parseFloat(d):d}return kp(c)?i5(c,n,i+1):c}const mk={type:"spring",stiffness:500,damping:25,restSpeed:10},pk=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),_k={type:"keyframes",duration:.8},gk={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},yk=(t,{keyframes:n})=>n.length>2?_k:Cl.has(t)?t.startsWith("scale")?pk(n[1]):mk:gk;function a5(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Rp(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?a5(i,t):i}const xk=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function bk(t){for(const n in t)if(!xk.has(n))return!0;return!1}const Bp=(t,n,i,a={},c,u)=>d=>{const h=Rp(a,t)||{},p=h.delay||a.delay||0;let{elapsed:y=0}=a;y=y-ri(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-y,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};bk(h)||Object.assign(g,yk(t,g)),g.duration&&(g.duration=ri(g.duration)),g.repeatDelay&&(g.repeatDelay=ri(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let x=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(qm(g),g.delay===0&&(x=!0)),(ar.instantAnimations||ar.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,qm(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=$d(g.keyframes,h);if(b!==void 0){ns.update(()=>{g.onUpdate(b),g.onComplete()});return}}return h.isSync?new Nd(g):new ck(g)};function E1(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Lp(t,n,i,a){if(typeof n=="function"){const[c,u]=E1(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=E1(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function Dr(t,n,i){const a=t.getProps();return Lp(a,n,i!==void 0?i:a.custom,t)}const r5=new Set(["width","height","top","left","right","bottom",...Sl]),T1=30,vk=t=>!isNaN(parseFloat(t)),Cc={current:void 0};class wk{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=qo.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=qo.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=vk(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new wp);const a=this.events[n].add(i);return n==="change"?()=>{a(),ns.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Cc.current&&Cc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=qo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>T1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,T1);return bb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function rr(t,n){return new wk(t,n)}const Km=t=>Array.isArray(t);function Sk(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,rr(i))}function Ck(t){return Km(t)?t[t.length-1]||0:t}function kk(t,n){const i=Dr(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=Ck(u[d]);Sk(t,d,h)}}const _o=t=>!!(t&&t.getVelocity);function jk(t){return!!(_o(t)&&t.add)}function Qm(t,n){const i=t.getValue("willChange");if(jk(i))return i.add(n);if(!i&&ar.WillChange){const a=new ar.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Op(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const Mk="framerAppearId",l5="data-"+Op(Mk);function c5(t){return t.props[l5]}function Ek({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function zp(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?a5(u,p):p;const y=u==null?void 0:u.reduceMotion;a&&(u=a);const g=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const S in h){const k=t.getValue(S,(b=t.latestValues[S])!=null?b:null),j=h[S];if(j===void 0||x&&Ek(x,S))continue;const E={delay:i,...Rp(u||{},S)},T=k.get();if(T!==void 0&&!k.isAnimating()&&!Array.isArray(j)&&j===T&&!E.velocity){ns.update(()=>k.set(j));continue}let z=!1;if(window.MotionHandoffAnimation){const K=c5(t);if(K){const Y=window.MotionHandoffAnimation(K,S,ns);Y!==null&&(E.startTime=Y,z=!0)}}Qm(t,S);const O=y!=null?y:t.shouldReduceMotion;k.start(Bp(S,k,j,O&&r5.has(S)?{type:!1}:E,t,z));const D=k.animation;D&&g.push(D)}if(d){const S=()=>ns.update(()=>{d&&kk(t,d)});g.length?Promise.all(g).then(S):S()}return g}function Zm(t,n,i={}){var p;const a=Dr(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(zp(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(y=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:b}=c;return Tk(t,n,y,g,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[y,g]=h==="beforeChildren"?[u,d]:[d,u];return y().then(()=>g())}else return Promise.all([u(),d(i.delay)])}function Tk(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Zm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+o5(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function Ak(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Zm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Zm(t,n,i);else{const c=typeof n=="function"?Dr(t,n,i.custom):n;a=Promise.all(zp(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const Nk={test:t=>t==="auto",parse:t=>t},u5=t=>n=>n.test(t),d5=[wl,jt,da,nr,i3,o3,Nk],A1=t=>d5.find(u5(t));function Dk(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||yb(t):!0}const Rk=new Set(["brightness","contrast","saturate","opacity"]);function Bk(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(jp)||[];if(!a)return t;const c=i.replace(a,"");let u=Rk.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const Lk=/\b([a-z-]*)\(.*?\)/gu,Jm={...Ji,getAnimatableNone:t=>{const n=t.match(Lk);return n?n.map(Bk).join(" "):t}},ep={...Ji,getAnimatableNone:t=>{const n=Ji.parse(t);return Ji.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},N1={...wl,transform:Math.round},Ok={rotate:nr,rotateX:nr,rotateY:nr,rotateZ:nr,scale:ad,scaleX:ad,scaleY:ad,scaleZ:ad,skew:nr,skewX:nr,skewY:nr,distance:jt,translateX:jt,translateY:jt,translateZ:jt,x:jt,y:jt,z:jt,perspective:jt,transformPerspective:jt,opacity:Tc,originX:_1,originY:_1,originZ:jt},$p={borderWidth:jt,borderTopWidth:jt,borderRightWidth:jt,borderBottomWidth:jt,borderLeftWidth:jt,borderRadius:jt,borderTopLeftRadius:jt,borderTopRightRadius:jt,borderBottomRightRadius:jt,borderBottomLeftRadius:jt,width:jt,maxWidth:jt,height:jt,maxHeight:jt,top:jt,right:jt,bottom:jt,left:jt,inset:jt,insetBlock:jt,insetBlockStart:jt,insetBlockEnd:jt,insetInline:jt,insetInlineStart:jt,insetInlineEnd:jt,padding:jt,paddingTop:jt,paddingRight:jt,paddingBottom:jt,paddingLeft:jt,paddingBlock:jt,paddingBlockStart:jt,paddingBlockEnd:jt,paddingInline:jt,paddingInlineStart:jt,paddingInlineEnd:jt,margin:jt,marginTop:jt,marginRight:jt,marginBottom:jt,marginLeft:jt,marginBlock:jt,marginBlockStart:jt,marginBlockEnd:jt,marginInline:jt,marginInlineStart:jt,marginInlineEnd:jt,fontSize:jt,backgroundPositionX:jt,backgroundPositionY:jt,...Ok,zIndex:N1,fillOpacity:Tc,strokeOpacity:Tc,numOctaves:N1},zk={...$p,color:io,backgroundColor:io,outlineColor:io,fill:io,stroke:io,borderColor:io,borderTopColor:io,borderRightColor:io,borderBottomColor:io,borderLeftColor:io,filter:Jm,WebkitFilter:Jm,mask:ep,WebkitMask:ep},f5=t=>zk[t],$k=new Set([Jm,ep]);function h5(t,n){let i=f5(t);return $k.has(i)||(i=Ji),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const Ik=new Set(["auto","none","0"]);function Pk(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!Ik.has(u)&&bl(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=h5(i,c)}class Hk extends Np{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let g=0;g<n.length;g++){let x=n[g];if(typeof x=="string"&&(x=x.trim(),kp(x))){const b=i5(x,i.current);b!==void 0&&(n[g]=b),g===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!r5.has(a)||n.length!==2)return;const[c,u]=n,d=A1(c),h=A1(u),p=p1(c),y=p1(u);if(p!==y&&ir[a]){this.needsMeasurement=!0;return}if(d!==h)if(C1(d)&&C1(h))for(let g=0;g<n.length;g++){const x=n[g];typeof x=="string"&&(n[g]=parseFloat(x))}else ir[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||Dk(n[c]))&&a.push(c);a.length&&Pk(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ir[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=ir[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,y])=>{n.getValue(p).set(y)}),this.resolveNoneKeyframes()}}function Ip(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const m5=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function _d(t){return gb(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Pp}=Rb(queueMicrotask,!1),Ki={x:!1,y:!1};function p5(){return Ki.x||Ki.y}function Uk(t){return t==="x"||t==="y"?Ki[t]?null:(Ki[t]=!0,()=>{Ki[t]=!1}):Ki.x||Ki.y?null:(Ki.x=Ki.y=!0,()=>{Ki.x=Ki.y=!1})}function _5(t,n){const i=Ip(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function Vk(t){return!(t.pointerType==="touch"||p5())}function Yk(t,n,i={}){const[a,c,u]=_5(t,i);return a.forEach(d=>{let h=!1,p=!1,y;const g=()=>{d.removeEventListener("pointerleave",k)},x=E=>{y&&(y(E),y=void 0),g()},b=E=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(E))},S=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},k=E=>{if(E.pointerType!=="touch"){if(h){p=!0;return}x(E)}},j=E=>{if(!Vk(E))return;p=!1;const T=n(d,E);typeof T=="function"&&(y=T,d.addEventListener("pointerleave",k,c))};d.addEventListener("pointerenter",j,c),d.addEventListener("pointerdown",S,c)}),u}const g5=(t,n)=>n?t===n?!0:g5(t,n.parentElement):!1,Hp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Wk=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Fk(t){return Wk.has(t.tagName)||t.isContentEditable===!0}const Xk=new Set(["INPUT","SELECT","TEXTAREA"]);function Gk(t){return Xk.has(t.tagName)||t.isContentEditable===!0}const gd=new WeakSet;function D1(t){return n=>{n.key==="Enter"&&t(n)}}function _m(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const qk=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=D1(()=>{if(gd.has(i))return;_m(i,"down");const c=D1(()=>{_m(i,"up")}),u=()=>_m(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function R1(t){return Hp(t)&&!p5()}const B1=new WeakSet;function Kk(t,n,i={}){const[a,c,u]=_5(t,i),d=h=>{const p=h.currentTarget;if(!R1(h)||B1.has(h))return;gd.add(p),i.stopPropagation&&B1.add(h);const y=n(p,h),g=(S,k)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),gd.has(p)&&gd.delete(p),R1(S)&&typeof y=="function"&&y(S,{success:k})},x=S=>{g(S,p===window||p===document||i.useGlobalTarget||g5(p,S.target))},b=S=>{g(S,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),_d(h)&&(h.addEventListener("focus",y=>qk(y,c)),!Fk(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function Id(t){return gb(t)&&"ownerSVGElement"in t}const yd=new WeakMap;let sr;const y5=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:Id(a)&&"getBBox"in a?a.getBBox()[n]:a[i],Qk=y5("inline","width","offsetWidth"),Zk=y5("block","height","offsetHeight");function Jk({target:t,borderBoxSize:n}){var i;(i=yd.get(t))==null||i.forEach(a=>{a(t,{get width(){return Qk(t,n)},get height(){return Zk(t,n)}})})}function e8(t){t.forEach(Jk)}function t8(){typeof ResizeObserver>"u"||(sr=new ResizeObserver(e8))}function n8(t,n){sr||t8();const i=Ip(t);return i.forEach(a=>{let c=yd.get(a);c||(c=new Set,yd.set(a,c)),c.add(n),sr==null||sr.observe(a)}),()=>{i.forEach(a=>{const c=yd.get(a);c==null||c.delete(n),c!=null&&c.size||sr==null||sr.unobserve(a)})}}const xd=new Set;let ml;function s8(){ml=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};xd.forEach(n=>n(t))},window.addEventListener("resize",ml)}function o8(t){return xd.add(t),ml||s8(),()=>{xd.delete(t),!xd.size&&typeof ml=="function"&&(window.removeEventListener("resize",ml),ml=void 0)}}function L1(t,n){return typeof t=="function"?o8(t):n8(t,n)}function x5(t){return Id(t)&&t.tagName==="svg"}function i8(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Wb(c,u,d);return n?h(a):h}const a8=[...d5,io,Ji],r8=t=>a8.find(u5(t)),O1=()=>({translate:0,scale:1,origin:0,originPoint:0}),pl=()=>({x:O1(),y:O1()}),z1=()=>({min:0,max:0}),oo=()=>({x:z1(),y:z1()}),Nc=new WeakMap;function Pd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Dc(t){return typeof t=="string"||Array.isArray(t)}const Up=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Vp=["initial",...Up];function Hd(t){return Pd(t.animate)||Vp.some(n=>Dc(t[n]))}function b5(t){return!!(Hd(t)||t.variants)}function l8(t,n,i){for(const a in n){const c=n[a],u=i[a];if(_o(c))t.addValue(a,c);else if(_o(u))t.addValue(a,rr(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,rr(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const tp={current:null},v5={current:!1},c8=typeof window<"u";function u8(){if(v5.current=!0,!!c8)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>tp.current=t.matches;t.addEventListener("change",n),n()}else tp.current=!1}const $1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Dd={};function w5(t){Dd=t}function d8(){return Dd}class S5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Np,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=qo.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,ns.render(this.render,!1,!0))};const{latestValues:y,renderState:g}=h;this.latestValues=y,this.baseTarget={...y},this.initialValues=i.initial?{...y}:{},this.renderState=g,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Hd(i),this.isVariantNode=b5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const S in b){const k=b[S];y[S]!==void 0&&_o(k)&&k.set(y[S])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Nc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(v5.current||u8(),this.shouldReduceMotion=tp.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),Na(this.notifyUpdate),Na(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&s5.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:y,duration:g}=i.accelerate,x=new t5({element:this.current,name:n,keyframes:h,times:p,ease:y,duration:ri(g)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=Cl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&ns.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Dd){const i=Dd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):oo()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<$1.length;a++){const c=$1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=l8(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=rr(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(_b(a)||yb(a))?a=parseFloat(a):!r8(a)&&Ji.test(i)&&(a=h5(n,i)),this.setBaseTarget(n,_o(a)?a.get():a)),_o(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Lp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!_o(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new wp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Pp.render(this.render)}}class C5 extends S5{constructor(){super(...arguments),this.KeyframeResolver=Hk}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;_o(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class lr{constructor(n){this.isMounted=!1,this.node=n}update(){}}function k5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function f8({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function h8(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function gm(t){return t===void 0||t===1}function np({scale:t,scaleX:n,scaleY:i}){return!gm(t)||!gm(n)||!gm(i)}function jr(t){return np(t)||j5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function j5(t){return I1(t.x)||I1(t.y)}function I1(t){return t&&t!=="0%"}function Rd(t,n,i){const a=t-i,c=n*a;return i+c}function P1(t,n,i,a,c){return c!==void 0&&(t=Rd(t,c,a)),Rd(t,i,a)+n}function sp(t,n=0,i=1,a,c){t.min=P1(t.min,n,i,a,c),t.max=P1(t.max,n,i,a,c)}function M5(t,{x:n,y:i}){sp(t.x,n.translate,n.scale,n.originPoint),sp(t.y,i.translate,i.scale,i.originPoint)}const H1=.999999999999,U1=1.0000000000001;function m8(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:y}=u.options;y&&y.props.style&&y.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(ca(t.x,-u.scroll.offset.x),ca(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,M5(t,d)),a&&jr(u.latestValues)&&bd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<U1&&n.x>H1&&(n.x=1),n.y<U1&&n.y>H1&&(n.y=1)}function ca(t,n){t.min+=n,t.max+=n}function V1(t,n,i,a,c=.5){const u=fs(t.min,t.max,c);sp(t,n,i,u,a)}function Y1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function bd(t,n,i){const a=i!=null?i:t;V1(t.x,Y1(n.x,a.x),n.scaleX,n.scale,n.originX),V1(t.y,Y1(n.y,a.y),n.scaleY,n.scale,n.originY)}function E5(t,n){return k5(h8(t.getBoundingClientRect(),n))}function p8(t,n,i){const a=E5(t,i),{scroll:c}=n;return c&&(ca(a.x,c.offset.x),ca(a.y,c.offset.y)),a}const _8={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},g8=Sl.length;function y8(t,n,i){let a="",c=!0;for(let u=0;u<g8;u++){const d=Sl[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const y=parseFloat(h);p=d.startsWith("scale")?y===1:y===0}if(!p||i){const y=m5(h,$p[d]);if(!p){c=!1;const g=_8[d]||d;a+=`${g}(${y}) `}i&&(n[d]=y)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Yp(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const y=n[p];if(Cl.has(p)){d=!0;continue}else if(Lb(p)){c[p]=y;continue}else{const g=m5(y,$p[p]);p.startsWith("origin")?(h=!0,u[p]=g):a[p]=g}}if(n.transform||(d||i?a.transform=y8(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:y="50%",originZ:g=0}=u;a.transformOrigin=`${p} ${y} ${g}`}}function T5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function W1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const hc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(jt.test(t))t=parseFloat(t);else return t;const i=W1(t,n.target.x),a=W1(t,n.target.y);return`${i}% ${a}%`}},x8={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=Ji.parse(t);if(c.length>5)return a;const u=Ji.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const y=fs(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),u(c)}},op={borderRadius:{...hc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hc,borderTopRightRadius:hc,borderBottomLeftRadius:hc,borderBottomRightRadius:hc,boxShadow:x8};function A5(t,{layout:n,layoutId:i}){return Cl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!op[t]||t==="opacity")}function Wp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(_o(a[h])||c&&_o(c[h])||A5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function b8(t){return window.getComputedStyle(t)}class N5 extends C5{constructor(){super(...arguments),this.type="html",this.renderInstance=T5}readValueFromInstance(n,i){var a;if(Cl.has(i))return(a=this.projection)!=null&&a.isProjecting?Ym(i):H3(n,i);{const c=b8(n),u=(Lb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return E5(n,i)}build(n,i,a){Yp(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Wp(n,i,a)}}function v8(t,n){return t in n}class w8 extends S5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(v8(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return oo()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const S8={offset:"stroke-dashoffset",array:"stroke-dasharray"},C8={offset:"strokeDashoffset",array:"strokeDasharray"};function k8(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?S8:C8;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const j8=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function D5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,y,g){var S,k;if(Yp(t,h,y),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(S=x.transformOrigin)!=null?S:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(k=g==null?void 0:g.transformBox)!=null?k:"fill-box",delete x.transformBox);for(const j of j8)x[j]!==void 0&&(b[j]=x[j],delete x[j]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&k8(x,c,u,d,!1)}const R5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),B5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function M8(t,n,i,a){T5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(R5.has(c)?c:Op(c),n.attrs[c])}function L5(t,n,i){const a=Wp(t,n,i);for(const c in t)if(_o(t[c])||_o(n[c])){const u=Sl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class O5 extends C5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=oo}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(Cl.has(i)){const a=f5(i);return a&&a.default||0}return i=R5.has(i)?i:Op(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return L5(n,i,a)}build(n,i,a){D5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){M8(n,i,a,c)}mount(n){this.isSVGTag=B5(n.tagName),super.mount(n)}}const E8=Vp.length;function z5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?z5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<E8;i++){const a=Vp[i],c=t.props[a];(Dc(c)||c===!1)&&(n[a]=c)}return n}function $5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const T8=[...Up].reverse(),A8=Up.length;function N8(t){return n=>Promise.all(n.map(({animation:i,options:a})=>Ak(t,i,a)))}function D8(t){let n=N8(t),i=F1(),a=!0,c=!1;const u=y=>(g,x)=>{var S;const b=Dr(t,x,y==="exit"?(S=t.presenceContext)==null?void 0:S.custom:void 0);if(b){const{transition:k,transitionEnd:j,...E}=b;g={...g,...E,...j}}return g};function d(y){n=y(t)}function h(y){const{props:g}=t,x=z5(t.parent)||{},b=[],S=new Set;let k={},j=1/0;for(let T=0;T<A8;T++){const z=T8[T],O=i[z],D=g[z]!==void 0?g[z]:x[z],K=Dc(D),Y=z===y?O.isActive:null;Y===!1&&(j=T);let Q=D===x[z]&&D!==g[z]&&K;if(Q&&(a||c)&&t.manuallyAnimateOnMount&&(Q=!1),O.protectedKeys={...k},!O.isActive&&Y===null||!D&&!O.prevProp||Pd(D)||typeof D=="boolean")continue;if(z==="exit"&&O.isActive&&Y!==!0){O.prevResolvedValues&&(k={...k,...O.prevResolvedValues});continue}const V=R8(O.prevProp,D);let ee=V||z===y&&O.isActive&&!Q&&K||T>j&&K,le=!1;const re=Array.isArray(D)?D:[D];let De=re.reduce(u(z),{});Y===!1&&(De={});const{prevResolvedValues:Ye={}}=O,se={...Ye,...De},me=F=>{ee=!0,S.has(F)&&(le=!0,S.delete(F)),O.needsAnimating[F]=!0;const pe=t.getValue(F);pe&&(pe.liveStyle=!1)};for(const F in se){const pe=De[F],Te=Ye[F];if(k.hasOwnProperty(F))continue;let I=!1;Km(pe)&&Km(Te)?I=!$5(pe,Te):I=pe!==Te,I?pe!=null?me(F):S.add(F):pe!==void 0&&S.has(F)?me(F):O.protectedKeys[F]=!0}O.prevProp=D,O.prevResolvedValues=De,O.isActive&&(k={...k,...De}),(a||c)&&t.blockInitialAnimation&&(ee=!1);const P=Q&&V;ee&&(!P||le)&&b.push(...re.map(F=>{const pe={type:z};if(typeof F=="string"&&(a||c)&&!P&&t.manuallyAnimateOnMount&&t.parent){const{parent:Te}=t,I=Dr(Te,F);if(Te.enteringChildren&&I){const{delayChildren:fe}=I.transition||{};pe.delay=o5(Te.enteringChildren,t,fe)}}return{animation:F,options:pe}}))}if(S.size){const T={};if(typeof g.initial!="boolean"){const z=Dr(t,Array.isArray(g.initial)?g.initial[0]:g.initial);z&&z.transition&&(T.transition=z.transition)}S.forEach(z=>{const O=t.getBaseTarget(z),D=t.getValue(z);D&&(D.liveStyle=!0),T[z]=O!=null?O:null}),b.push({animation:T})}let E=!!b.length;return a&&(g.initial===!1||g.initial===g.animate)&&!t.manuallyAnimateOnMount&&(E=!1),a=!1,c=!1,E?n(b):Promise.resolve()}function p(y,g){var b;if(i[y].isActive===g)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(S=>{var k;return(k=S.animationState)==null?void 0:k.setActive(y,g)}),i[y].isActive=g;const x=h(y);for(const S in i)i[S].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=F1(),c=!0}}}function R8(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!$5(n,t):!1}function kr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function F1(){return{animate:kr(!0),whileInView:kr(),whileHover:kr(),whileTap:kr(),whileDrag:kr(),whileFocus:kr(),exit:kr()}}function ip(t,n){t.min=n.min,t.max=n.max}function qi(t,n){ip(t.x,n.x),ip(t.y,n.y)}function X1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const I5=1e-4,B8=1-I5,L8=1+I5,P5=.01,O8=0-P5,z8=0+P5;function Ko(t){return t.max-t.min}function $8(t,n,i){return Math.abs(t-n)<=i}function G1(t,n,i,a=.5){t.origin=a,t.originPoint=fs(n.min,n.max,t.origin),t.scale=Ko(i)/Ko(n),t.translate=fs(i.min,i.max,t.origin)-t.originPoint,(t.scale>=B8&&t.scale<=L8||isNaN(t.scale))&&(t.scale=1),(t.translate>=O8&&t.translate<=z8||isNaN(t.translate))&&(t.translate=0)}function kc(t,n,i,a){G1(t.x,n.x,i.x,a?a.originX:void 0),G1(t.y,n.y,i.y,a?a.originY:void 0)}function q1(t,n,i,a=0){const c=a?fs(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+Ko(n)}function I8(t,n,i,a){q1(t.x,n.x,i.x,a==null?void 0:a.x),q1(t.y,n.y,i.y,a==null?void 0:a.y)}function K1(t,n,i,a=0){const c=a?fs(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+Ko(n)}function Bd(t,n,i,a){K1(t.x,n.x,i.x,a==null?void 0:a.x),K1(t.y,n.y,i.y,a==null?void 0:a.y)}function Q1(t,n,i,a,c){return t-=n,t=Rd(t,1/i,a),c!==void 0&&(t=Rd(t,1/c,a)),t}function P8(t,n=0,i=1,a=.5,c,u=t,d=t){if(da.test(n)&&(n=parseFloat(n),n=fs(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=fs(u.min,u.max,a);t===u&&(h-=n),t.min=Q1(t.min,n,i,h,c),t.max=Q1(t.max,n,i,h,c)}function Z1(t,n,[i,a,c],u,d){P8(t,n[i],n[a],n[c],n.scale,u,d)}const H8=["x","scaleX","originX"],U8=["y","scaleY","originY"];function J1(t,n,i,a){Z1(t.x,n,H8,i?i.x:void 0,a?a.x:void 0),Z1(t.y,n,U8,i?i.y:void 0,a?a.y:void 0)}function ex(t){return t.translate===0&&t.scale===1}function H5(t){return ex(t.x)&&ex(t.y)}function tx(t,n){return t.min===n.min&&t.max===n.max}function V8(t,n){return tx(t.x,n.x)&&tx(t.y,n.y)}function nx(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function U5(t,n){return nx(t.x,n.x)&&nx(t.y,n.y)}function sx(t){return Ko(t.x)/Ko(t.y)}function ox(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function la(t){return[t("x"),t("y")]}function Y8(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:y,rotate:g,rotateX:x,rotateY:b,skewX:S,skewY:k}=i;y&&(a=`perspective(${y}px) ${a}`),g&&(a+=`rotate(${g}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),S&&(a+=`skewX(${S}deg) `),k&&(a+=`skewY(${k}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const V5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],W8=V5.length,ix=t=>typeof t=="string"?parseFloat(t):t,ax=t=>typeof t=="number"||jt.test(t);function F8(t,n,i,a,c,u){var d,h,p,y;c?(t.opacity=fs(0,(d=i.opacity)!=null?d:1,X8(a)),t.opacityExit=fs((h=n.opacity)!=null?h:1,0,G8(a))):u&&(t.opacity=fs((p=n.opacity)!=null?p:1,(y=i.opacity)!=null?y:1,a));for(let g=0;g<W8;g++){const x=V5[g];let b=rx(n,x),S=rx(i,x);if(b===void 0&&S===void 0)continue;b||(b=0),S||(S=0),b===0||S===0||ax(b)===ax(S)?(t[x]=Math.max(fs(ix(b),ix(S),a),0),(da.test(S)||da.test(b))&&(t[x]+="%")):t[x]=S}(n.rotate||i.rotate)&&(t.rotate=fs(n.rotate||0,i.rotate||0,a))}function rx(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const X8=Y5(0,.5,Mb),G8=Y5(.5,.95,zi);function Y5(t,n,i){return a=>a<t?0:a>n?1:i(xl(t,n,a))}function W5(t,n,i){const a=_o(t)?t:rr(t);return a.start(Bp("",a,n,i)),a.animation}function Rc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const q8=(t,n)=>t.depth-n.depth;class K8{constructor(){this.children=[],this.isDirty=!1}add(n){bp(this.children,n),this.isDirty=!0}remove(n){yl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(q8),this.isDirty=!1,this.children.forEach(n)}}function Q8(t,n){const i=qo.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(Na(a),t(u-n))};return ns.setup(a,!0),()=>Na(a)}function vd(t){return _o(t)?t.get():t}class Z8{constructor(){this.members=[]}add(n){bp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(yl(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(yl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const wd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ym=["","X","Y","Z"],J8=1e3;let ej=0;function xm(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function F5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=c5(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",ns,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&F5(a)}function X5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=ej++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(sj),this.nodes.forEach(cj),this.nodes.forEach(uj),this.nodes.forEach(oj)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new K8)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new wp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Id(d)&&!x5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:y}=this.options;if(y&&!y.current&&y.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let g,x=0;const b=()=>this.root.updateBlockedByResize=!1;ns.read(()=>{x=window.innerWidth}),t(d,()=>{const S=window.innerWidth;S!==x&&(x=S,this.root.updateBlockedByResize=!0,g&&g(),g=Q8(b,250),wd.hasAnimatedSinceResize&&(wd.hasAnimatedSinceResize=!1,this.nodes.forEach(ux)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&y&&(h||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const k=this.options.transition||y.getDefaultTransition()||pj,{onLayoutAnimationStart:j,onLayoutAnimationComplete:E}=y.getProps(),T=!this.targetLayout||!U5(this.targetLayout,S),z=!x&&b;if(this.options.layoutRoot||this.resumeFrom||z||x&&(T||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const O={...Rp(k,"layout"),onPlay:j,onComplete:E};(y.shouldReduceMotion||this.options.layoutRoot)&&(O.delay=0,O.type=!1),this.startAnimation(O),this.setAnimationOrigin(g,z)}else x||ux(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Na(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(dj),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&F5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const x=this.path[g];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(aj),this.nodes.forEach(lx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(cx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(rj),this.nodes.forEach(lj),this.nodes.forEach(tj),this.nodes.forEach(nj)):this.nodes.forEach(cx),this.clearAllSnapshots();const h=qo.now();No.delta=fa(0,1e3/60,h-No.timestamp),No.timestamp=h,No.isProcessing=!0,um.update.process(No),um.preRender.process(No),um.render.process(No),No.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Pp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(ij),this.sharedNodes.forEach(fj)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ns.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ns.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ko(this.snapshot.measuredBox.x)&&!Ko(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=oo()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!H5(this.projectionDelta),p=this.getTransformTemplate(),y=p?p(this.latestValues,""):void 0,g=y!==this.prevTransformTemplateValue;d&&this.instance&&(h||jr(this.latestValues)||g)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),_j(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var y;const{visualElement:d}=this.options;if(!d)return oo();const h=d.measureViewportBox();if(!(((y=this.scroll)==null?void 0:y.wasRoot)||this.path.some(gj))){const{scroll:g}=this.root;g&&(ca(h.x,g.offset.x),ca(h.y,g.offset.y))}return h}removeElementScroll(d){var p;const h=oo();if(qi(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let y=0;y<this.path.length;y++){const g=this.path[y],{scroll:x,options:b}=g;g!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&qi(h,d),ca(h.x,x.offset.x),ca(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var g,x;const y=p||oo();qi(y,d);for(let b=0;b<this.path.length;b++){const S=this.path[b];!h&&S.options.layoutScroll&&S.scroll&&S!==S.root&&(ca(y.x,-S.scroll.offset.x),ca(y.y,-S.scroll.offset.y)),jr(S.latestValues)&&bd(y,S.latestValues,(g=S.layout)==null?void 0:g.layoutBox)}return jr(this.latestValues)&&bd(y,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),y}removeTransform(d){var p;const h=oo();qi(h,d);for(let y=0;y<this.path.length;y++){const g=this.path[y];if(!jr(g.latestValues))continue;let x;g.instance&&(np(g.latestValues)&&g.updateSnapshot(),x=oo(),qi(x,g.measurePageBox())),J1(h,g.latestValues,(p=g.snapshot)==null?void 0:p.layoutBox,x)}return jr(this.latestValues)&&J1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==No.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var S;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:x}=this.options;if(!this.layout||!(g||x))return;this.resolvedRelativeTargetAt=No.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=oo(),this.targetWithTransforms=oo()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),I8(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):qi(this.target,this.layout.layoutBox),M5(this.target,this.targetDelta)):qi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||np(this.parent.latestValues)||j5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=oo(),this.relativeTargetOrigin=oo(),Bd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),qi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var k;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(k=this.parent)!=null&&k.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===No.timestamp&&(p=!1),p)return;const{layout:y,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||g))return;qi(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;m8(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=oo());const{target:S}=d;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(X1(this.prevProjectionDelta.x,this.projectionDelta.x),X1(this.prevProjectionDelta.y,this.projectionDelta.y)),kc(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!ox(this.projectionDelta.x,this.prevProjectionDelta.x)||!ox(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=pl(),this.projectionDelta=pl(),this.projectionDeltaWithTransform=pl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,y=p?p.latestValues:{},g={...this.latestValues},x=pl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=oo(),S=p?p.source:void 0,k=this.layout?this.layout.source:void 0,j=S!==k,E=this.getStack(),T=!E||E.members.length<=1,z=!!(j&&!T&&this.options.crossfade===!0&&!this.path.some(mj));this.animationProgress=0;let O;this.mixTargetDelta=D=>{const K=D/1e3;dx(x.x,d.x,K),dx(x.y,d.y,K),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),hj(this.relativeTarget,this.relativeTargetOrigin,b,K),O&&V8(this.relativeTarget,O)&&(this.isProjectionDirty=!1),O||(O=oo()),qi(O,this.relativeTarget)),j&&(this.animationValues=g,F8(g,y,this.latestValues,K,z,T)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=K},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,y;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(y=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||y.stop(),this.pendingAnimation&&(Na(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ns.update(()=>{wd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=rr(0)),this.motionValue.jump(0,!1),this.currentAnimation=W5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(J8),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:y,latestValues:g}=d;if(!(!h||!p||!y)){if(this!==d&&this.layout&&y&&G5(this.options.animationType,this.layout.layoutBox,y.layoutBox)){p=this.target||oo();const x=Ko(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=Ko(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}qi(h,p),bd(h,g),kc(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new Z8),this.sharedNodes.get(d).add(h);const y=h.options.initialPromotionConfig;h.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const y=this.getStack();y&&y.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const y={};p.z&&xm("z",d,y,this.animationValues);for(let g=0;g<ym.length;g++)xm(`rotate${ym[g]}`,d,y,this.animationValues),xm(`skew${ym[g]}`,d,y,this.animationValues);d.render();for(const g in y)d.setStaticValue(g,y[g]),this.animationValues&&(this.animationValues[g]=y[g]);d.scheduleRender()}applyProjectionStyles(d,h){var k,j;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!jr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=y.animationValues||y.latestValues;this.applyTransformsToTarget();let x=Y8(this.projectionDeltaWithTransform,this.treeScale,g);p&&(x=p(g,x)),d.transform=x;const{x:b,y:S}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${S.origin*100}% 0`,y.animationValues?d.opacity=y===this?(j=(k=g.opacity)!=null?k:this.latestValues.opacity)!=null?j:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=y===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const E in op){if(g[E]===void 0)continue;const{correct:T,applyTo:z,isCSSVariable:O}=op[E],D=x==="none"?g[E]:T(g[E],y);if(z){const K=z.length;for(let Y=0;Y<K;Y++)d[z[Y]]=D}else O?this.options.visualElement.renderState.vars[E]=D:d[E]=D}this.options.layoutId&&(d.pointerEvents=y===this?vd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(lx),this.root.sharedNodes.clear()}}}function tj(t){t.updateLayout()}function nj(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")la(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],S=Ko(b);b.min=a[x].min,b.max=b.min+S});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";ip(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else G5(u,n.layoutBox,a)&&la(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],S=Ko(a[x]);b.max=b.min+S,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+S)});const h=pl();kc(h,a,n.layoutBox);const p=pl();d?kc(p,t.applyTransform(c,!0),n.measuredBox):kc(p,a,n.layoutBox);const y=!H5(h);let g=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:S}=x;if(b&&S){const k=t.options.layoutAnchor||void 0,j=oo();Bd(j,n.layoutBox,b.layoutBox,k);const E=oo();Bd(E,a,S.layoutBox,k),U5(j,E)||(g=!0),x.options.layoutRoot&&(t.relativeTarget=E,t.relativeTargetOrigin=j,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:g})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function sj(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function oj(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function ij(t){t.clearSnapshot()}function lx(t){t.clearMeasurements()}function aj(t){t.isLayoutDirty=!0,t.updateLayout()}function cx(t){t.isLayoutDirty=!1}function rj(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function lj(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function ux(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function cj(t){t.resolveTargetDelta()}function uj(t){t.calcProjection()}function dj(t){t.resetSkewAndRotation()}function fj(t){t.removeLeadSnapshot()}function dx(t,n,i){t.translate=fs(n.translate,0,i),t.scale=fs(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function fx(t,n,i,a){t.min=fs(n.min,i.min,a),t.max=fs(n.max,i.max,a)}function hj(t,n,i,a){fx(t.x,n.x,i.x,a),fx(t.y,n.y,i.y,a)}function mj(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const pj={duration:.45,ease:[.4,0,.1,1]},hx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),mx=hx("applewebkit/")&&!hx("chrome/")?Math.round:zi;function px(t){t.min=mx(t.min),t.max=mx(t.max)}function _j(t){px(t.x),px(t.y)}function G5(t,n,i){return t==="position"||t==="preserve-aspect"&&!$8(sx(n),sx(i),.2)}function gj(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const yj=X5({attachResizeListener:(t,n)=>Rc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),bm={current:void 0},q5=X5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!bm.current){const t=new yj({});t.mount(window),t.setOptions({layoutScroll:!0}),bm.current=t}return bm.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Ud=_.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function _x(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function xj(...t){return n=>{let i=!1;const a=t.map(c=>{const u=_x(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():_x(t[c],null)}}}}function bj(...t){return _.useCallback(xj(...t),t)}class vj extends _.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(_d(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=_d(a)&&a.offsetWidth||0,u=_d(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function wj({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,S;const d=_.useId(),h=_.useRef(null),p=_.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=_.useContext(Ud),g=(S=(b=t.props)==null?void 0:b.ref)!=null?S:t==null?void 0:t.ref,x=bj(h,g);return _.useInsertionEffect(()=>{const{width:k,height:j,top:E,left:T,right:z,bottom:O}=p.current;if(n||u===!1||!h.current||!k||!j)return;const D=i==="left"?`left: ${T}`:`right: ${z}`,K=a==="bottom"?`bottom: ${O}`:`top: ${E}`;h.current.dataset.motionPopId=d;const Y=document.createElement("style");y&&(Y.nonce=y);const Q=c!=null?c:document.head;return Q.appendChild(Y),Y.sheet&&Y.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${k}px !important;
            height: ${j}px !important;
            ${D}px !important;
            ${K}px !important;
          }
        `),()=>{var V;(V=h.current)==null||V.removeAttribute("data-motion-pop-id"),Q.contains(Y)&&Q.removeChild(Y)}},[n]),l.jsx(vj,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:_.cloneElement(t,{ref:x})})}const Sj=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:y})=>{const g=Lc(Cj),x=_.useId();let b=!0,S=_.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:k=>{g.set(k,!0);for(const j of g.values())if(!j)return;a&&a()},register:k=>(g.set(k,!1),()=>g.delete(k))}),[i,g,a]);return u&&b&&(S={...S}),_.useMemo(()=>{g.forEach((k,j)=>g.set(j,!1))},[i]),_.useEffect(()=>{!i&&!g.size&&a&&a()},[i]),t=l.jsx(wj,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:y,children:t}),l.jsx(zd.Provider,{value:S,children:t})};function Cj(){return new Map}function K5(t=!0){const n=_.useContext(zd);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=_.useId();_.useEffect(()=>{if(t)return c(u)},[t]);const d=_.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const rd=t=>t.key||"";function gx(t){const n=[];return _.Children.forEach(t,i=>{_.isValidElement(i)&&n.push(i)}),n}const Vd=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:y})=>{const[g,x]=K5(d),b=_.useMemo(()=>gx(t),[t]),S=d&&!g?[]:b.map(rd),k=_.useRef(!0),j=_.useRef(b),E=Lc(()=>new Map),T=_.useRef(new Set),[z,O]=_.useState(b),[D,K]=_.useState(b);xp(()=>{k.current=!1,j.current=b;for(let V=0;V<D.length;V++){const ee=rd(D[V]);S.includes(ee)?(E.delete(ee),T.current.delete(ee)):E.get(ee)!==!0&&E.set(ee,!1)}},[D,S.length,S.join("-")]);const Y=[];if(b!==z){let V=[...b];for(let ee=0;ee<D.length;ee++){const le=D[ee],re=rd(le);S.includes(re)||(V.splice(ee,0,le),Y.push(le))}return u==="wait"&&Y.length&&(V=Y),K(gx(V)),O(b),null}const{forceRender:Q}=_.useContext(yp);return l.jsx(l.Fragment,{children:D.map(V=>{const ee=rd(V),le=d&&!g?!1:b===D||S.includes(ee),re=()=>{if(T.current.has(ee))return;if(E.has(ee))T.current.add(ee),E.set(ee,!0);else return;let De=!0;E.forEach(Ye=>{Ye||(De=!1)}),De&&(Q==null||Q(),K(j.current),d&&(x==null||x()),a&&a())};return l.jsx(Sj,{isPresent:le,initial:!k.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:y,onExitComplete:le?void 0:re,anchorX:h,anchorY:p,children:V},ee)})})},Q5=_.createContext({strict:!1}),yx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let xx=!1;function kj(){if(xx)return;const t={};for(const n in yx)t[n]={isEnabled:i=>yx[n].some(a=>!!i[a])};w5(t),xx=!0}function Z5(){return kj(),d8()}function jj(t){const n=Z5();for(const i in t)n[i]={...n[i],...t[i]};w5(n)}const Mj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ld(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Mj.has(t)}let J5=t=>!Ld(t);function Ej(t){typeof t=="function"&&(J5=n=>n.startsWith("on")?!Ld(n):t(n))}try{Ej(require("@emotion/is-prop-valid").default)}catch{}function Tj(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||_o(t[c])||(J5(c)||i===!0&&Ld(c)||!n&&!Ld(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Yd=_.createContext({});function Aj(t,n){if(Hd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||Dc(i)?i:void 0,animate:Dc(a)?a:void 0}}return t.inherit!==!1?n:{}}function Nj(t){const{initial:n,animate:i}=Aj(t,_.useContext(Yd));return _.useMemo(()=>({initial:n,animate:i}),[bx(n),bx(i)])}function bx(t){return Array.isArray(t)?t.join(" "):t}const Fp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function e2(t,n,i){for(const a in n)!_o(n[a])&&!A5(a,i)&&(t[a]=n[a])}function Dj({transformTemplate:t},n){return _.useMemo(()=>{const i=Fp();return Yp(i,n,t),Object.assign({},i.vars,i.style)},[n])}function Rj(t,n){const i=t.style||{},a={};return e2(a,i,t),Object.assign(a,Dj(t,n)),a}function Bj(t,n){const i={},a=Rj(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const t2=()=>({...Fp(),attrs:{}});function Lj(t,n,i,a){const c=_.useMemo(()=>{const u=t2();return D5(u,n,B5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};e2(u,t.style,t),c.style={...u,...c.style}}return c}const Oj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Xp(t){return typeof t!="string"||t.includes("-")?!1:!!(Oj.indexOf(t)>-1||/[A-Z]/u.test(t))}function zj(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Xp(t))?Lj:Bj)(n,a,c,t),y=Tj(n,typeof t=="string",u),g=t!==_.Fragment?{...y,...p,ref:i}:{},{children:x}=n,b=_.useMemo(()=>_o(x)?x.get():x,[x]);return _.createElement(t,{...g,children:b})}function $j({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:Ij(i,a,c,t),renderState:n()}}function Ij(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=vd(u[b]);let{initial:d,animate:h}=t;const p=Hd(t),y=b5(t);n&&y&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let g=i?i.initial===!1:!1;g=g||d===!1;const x=g?h:d;if(x&&typeof x!="boolean"&&!Pd(x)){const b=Array.isArray(x)?x:[x];for(let S=0;S<b.length;S++){const k=Lp(t,b[S]);if(k){const{transitionEnd:j,transition:E,...T}=k;for(const z in T){let O=T[z];if(Array.isArray(O)){const D=g?O.length-1:0;O=O[D]}O!==null&&(c[z]=O)}for(const z in j)c[z]=j[z]}}}return c}const n2=t=>(n,i)=>{const a=_.useContext(Yd),c=_.useContext(zd),u=()=>$j(t,n,a,c);return i?u():Lc(u)},Pj=n2({scrapeMotionValuesFromProps:Wp,createRenderState:Fp}),Hj=n2({scrapeMotionValuesFromProps:L5,createRenderState:t2}),Uj=Symbol.for("motionComponentSymbol");function Vj(t,n,i){const a=_.useRef(i);_.useInsertionEffect(()=>{a.current=i});const c=_.useRef(null);return _.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const s2=_.createContext({});function dl(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Yj(t,n,i,a,c,u){var O,D;const{visualElement:d}=_.useContext(Yd),h=_.useContext(Q5),p=_.useContext(zd),y=_.useContext(Ud),g=y.reducedMotion,x=y.skipAnimations,b=_.useRef(null),S=_.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g,skipAnimations:x,isSVG:u}),S.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const k=b.current,j=_.useContext(s2);k&&!k.projection&&c&&(k.type==="html"||k.type==="svg")&&Wj(b.current,i,c,j);const E=_.useRef(!1);_.useInsertionEffect(()=>{k&&E.current&&k.update(i,p)});const T=i[l5],z=_.useRef(!!T&&typeof window<"u"&&!((O=window.MotionHandoffIsComplete)!=null&&O.call(window,T))&&((D=window.MotionHasOptimisedAnimation)==null?void 0:D.call(window,T)));return xp(()=>{S.current=!0,k&&(E.current=!0,window.MotionIsMounted=!0,k.updateFeatures(),k.scheduleRenderMicrotask(),z.current&&k.animationState&&k.animationState.animateChanges())}),_.useEffect(()=>{k&&(!z.current&&k.animationState&&k.animationState.animateChanges(),z.current&&(queueMicrotask(()=>{var K;(K=window.MotionHandoffMarkAsComplete)==null||K.call(window,T)}),z.current=!1),k.enteringChildren=void 0)}),k}function Wj(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:y,layoutAnchor:g,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:o2(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&dl(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:y,layoutAnchor:g})}function o2(t){if(t)return t.options.allowProjection!==!1?t.projection:o2(t.parent)}function vm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var y,g;a&&jj(a);const u=i?i==="svg":Xp(t),d=u?Hj:Pj;function h(x,b){let S;const k={..._.useContext(Ud),...x,layoutId:Fj(x)},{isStatic:j}=k,E=Nj(x),T=d(x,j);if(!j&&typeof window<"u"){Xj();const z=Gj(k);S=z.MeasureLayout,E.visualElement=Yj(t,T,k,c,z.ProjectionNode,u)}return l.jsxs(Yd.Provider,{value:E,children:[S&&E.visualElement?l.jsx(S,{visualElement:E.visualElement,...k}):null,zj(t,x,Vj(T,E.visualElement,b),T,j,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(g=(y=t.displayName)!=null?y:t.name)!=null?g:""})`}`;const p=_.forwardRef(h);return p[Uj]=t,p}function Fj({layoutId:t}){const n=_.useContext(yp).id;return n&&t!==void 0?n+"-"+t:t}function Xj(t,n){_.useContext(Q5).strict}function Gj(t){const n=Z5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function qj(t,n){if(typeof Proxy>"u")return vm;const i=new Map,a=(u,d)=>vm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,vm(d,void 0,t,n)),i.get(d))})}const Kj=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Xp(t))?new O5(n):new N5(n,{allowProjection:t!==_.Fragment})};class Qj extends lr{constructor(n){super(n),n.animationState||(n.animationState=D8(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Pd(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let Zj=0;class Jj extends lr{constructor(){super(...arguments),this.id=Zj++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Dr(this.node,d,h);if(p){const{transition:y,transitionEnd:g,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const eM={animation:{Feature:Qj},exit:{Feature:Jj}};function Ic(t){return{point:{x:t.pageX,y:t.pageY}}}const tM=t=>n=>Hp(n)&&t(n,Ic(n));function jc(t,n,i,a){return Rc(t,n,tM(i),a)}const i2=({current:t})=>t?t.ownerDocument.defaultView:null,vx=(t,n)=>Math.abs(t-n);function nM(t,n){const i=vx(t.x,n.x),a=vx(t.y,n.y);return Math.sqrt(i**2+a**2)}const wx=new Set(["auto","scroll"]);class a2{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=S=>{this.handleScroll(S.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ld(this.lastRawMoveEventInfo,this.transformPagePoint));const S=wm(this.lastMoveEventInfo,this.history),k=this.startEvent!==null,j=nM(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!k&&!j)return;const{point:E}=S,{timestamp:T}=No;this.history.push({...E,timestamp:T});const{onStart:z,onMove:O}=this.handlers;k||(z&&z(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),O&&O(this.lastMoveEvent,S)},this.handlePointerMove=(S,k)=>{this.lastMoveEvent=S,this.lastRawMoveEventInfo=k,this.lastMoveEventInfo=ld(k,this.transformPagePoint),ns.update(this.updatePoint,!0)},this.handlePointerUp=(S,k)=>{this.end();const{onEnd:j,onSessionEnd:E,resumeAnimation:T}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const z=wm(S.type==="pointercancel"?this.lastMoveEventInfo:ld(k,this.transformPagePoint),this.history);this.startEvent&&j&&j(S,z),E&&E(S,z)},!Hp(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Ic(n),y=ld(p,this.transformPagePoint),{point:g}=y,{timestamp:x}=No;this.history=[{...g,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,wm(y,this.history)),this.removeListeners=Oc(jc(this.contextWindow,"pointermove",this.handlePointerMove),jc(this.contextWindow,"pointerup",this.handlePointerUp),jc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(wx.has(a.overflowX)||wx.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),ns.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Na(this.updatePoint)}}function ld(t,n){return n?{point:n(t.point)}:t}function Sx(t,n){return{x:t.x-n.x,y:t.y-n.y}}function wm({point:t},n){return{point:t,delta:Sx(t,r2(n)),offset:Sx(t,sM(n)),velocity:oM(n,.1)}}function sM(t){return t[0]}function r2(t){return t[t.length-1]}function oM(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=r2(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>ri(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>ri(n)*2&&(a=t[1]);const u=Oi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function iM(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?fs(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?fs(i,t,a.max):Math.min(t,i)),t}function Cx(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function aM(t,{top:n,left:i,bottom:a,right:c}){return{x:Cx(t.x,i,c),y:Cx(t.y,n,a)}}function kx(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function rM(t,n){return{x:kx(t.x,n.x),y:kx(t.y,n.y)}}function lM(t,n){let i=.5;const a=Ko(t),c=Ko(n);return c>a?i=xl(n.min,n.max-a,t.min):a>c&&(i=xl(t.min,t.max-c,n.min)),fa(0,1,i)}function cM(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const ap=.35;function uM(t=ap){return t===!1?t=0:t===!0&&(t=ap),{x:jx(t,"left","right"),y:jx(t,"top","bottom")}}function jx(t,n,i){return{min:Mx(t,n),max:Mx(t,i)}}function Mx(t,n){return typeof t=="number"?t:t[n]||0}const dM=new WeakMap;class fM{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=oo(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(Ic(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:S,dragPropagation:k,onDragStart:j}=this.getProps();if(S&&!k&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Uk(S),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),la(T=>{let z=this.getAxisMotionValue(T).get()||0;if(da.test(z)){const{projection:O}=this.visualElement;if(O&&O.layout){const D=O.layout.layoutBox[T];D&&(z=Ko(D)*(parseFloat(z)/100))}}this.originPoint[T]=z}),j&&ns.update(()=>j(x,b),!1,!0),Qm(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:S,dragDirectionLock:k,onDirectionLock:j,onDrag:E}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:T}=b;if(k&&this.currentDirection===null){this.currentDirection=mM(T),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",b.point,T),this.updateAxis("y",b.point,T),this.visualElement.render(),E&&ns.update(()=>E(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new a2(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:i2(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&ns.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!cd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=iM(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&dl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=aM(a.layoutBox,n):this.constraints=!1,this.elastic=uM(i),c!==this.constraints&&!dl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&la(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=cM(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!dl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=p8(a,c.root,this.visualElement.getTransformPagePoint());let d=rM(c.layout.layoutBox,u);if(i){const h=i(f8(d));this.hasMutatedConstraints=!!h,h&&(d=k5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},y=la(g=>{if(!cd(g,i,this.currentDirection))return;let x=p&&p[g]||{};(d===!0||d===g)&&(x={min:0,max:0});const b=c?200:1e6,S=c?40:1e7,k={type:"inertia",velocity:a?n[g]:0,bounceStiffness:b,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(g,k)});return Promise.all(y).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Qm(this.visualElement,n),a.start(Bp(n,a,0,i,this.visualElement,!1))}stopAnimation(){la(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){la(i=>{const{drag:a}=this.getProps();if(!cd(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-fs(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!dl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};la(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=lM({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),la(d=>{if(!cd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:y}=this.constraints[d];h.set(fs(p,y,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;dM.set(this.visualElement,this);const n=this.visualElement.current,i=jc(n,"pointerdown",y=>{const{drag:g,dragListener:x=!0}=this.getProps(),b=y.target,S=b!==n&&Gk(b);g&&x&&!S&&this.start(y)});let a;const c=()=>{const{dragConstraints:y}=this.getProps();dl(y)&&y.current&&(this.constraints=this.resolveRefConstraints(),a||(a=hM(n,y.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),ns.read(c);const h=Rc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:g})=>{this.isDragging&&g&&(la(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=y[x].translate,b.set(b.get()+y[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=ap,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function Ex(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function hM(t,n,i){const a=L1(t,Ex(i)),c=L1(n,Ex(i));return()=>{a(),c()}}function cd(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function mM(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class pM extends lr{constructor(n){super(n),this.removeGroupControls=zi,this.removeListeners=zi,this.controls=new fM(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||zi}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Sm=t=>(n,i)=>{t&&ns.update(()=>t(n,i),!1,!0)};class _M extends lr{constructor(){super(...arguments),this.removePointerDownListener=zi}onPointerDown(n){this.session=new a2(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:i2(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:Sm(n),onStart:Sm(i),onMove:Sm(a),onEnd:(u,d)=>{delete this.session,c&&ns.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=jc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Cm=!1;class gM extends _.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),Cm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),wd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),Cm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||ns.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Pp.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;Cm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function l2(t){const[n,i]=K5(),a=_.useContext(yp);return l.jsx(gM,{...t,layoutGroup:a,switchLayoutGroup:_.useContext(s2),isPresent:n,safeToRemove:i})}const yM={pan:{Feature:_M},drag:{Feature:pM,ProjectionNode:q5,MeasureLayout:l2}};function Tx(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&ns.postRender(()=>u(n,Ic(n)))}class xM extends lr{mount(){const{current:n}=this.node;n&&(this.unmount=Yk(n,(i,a)=>(Tx(this.node,a,"Start"),c=>Tx(this.node,c,"End"))))}unmount(){}}class bM extends lr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Oc(Rc(this.node.current,"focus",()=>this.onFocus()),Rc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Ax(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&ns.postRender(()=>u(n,Ic(n)))}class vM extends lr{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=Kk(n,(c,u)=>(Ax(this.node,u,"Start"),(d,{success:h})=>Ax(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const rp=new WeakMap,km=new WeakMap,wM=t=>{const n=rp.get(t.target);n&&n(t)},SM=t=>{t.forEach(wM)};function CM({root:t,...n}){const i=t||document;km.has(i)||km.set(i,{});const a=km.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(SM,{root:t,...n})),a[c]}function kM(t,n,i){const a=CM(n);return rp.set(t,i),a.observe(t),()=>{rp.delete(t),a.unobserve(t)}}const jM={some:0,all:1};class MM extends lr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:jM[c]},h=y=>{const{isIntersecting:g}=y;if(this.isInView===g||(this.isInView=g,u&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),S=g?x:b;S&&S(y)};this.stopObserver=kM(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(EM(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function EM({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const TM={inView:{Feature:MM},tap:{Feature:vM},focus:{Feature:bM},hover:{Feature:xM}},AM={layout:{ProjectionNode:q5,MeasureLayout:l2}},NM={...eM,...TM,...yM,...AM},ai=qj(NM,Kj);function lp(t){const n=Lc(()=>rr(t)),{isStatic:i}=_.useContext(Ud);if(i){const[,a]=_.useState(t);_.useEffect(()=>n.on("change",a),[])}return n}function c2(t,n){const i=lp(n()),a=()=>i.set(n());return a(),xp(()=>{const c=()=>ns.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),Na(a)}}),i}function DM(t){Cc.current=[],t();const n=c2(Cc.current,t);return Cc.current=void 0,n}function ud(t,n,i,a){if(typeof t=="function")return DM(t);const u=typeof n=="function"?n:i8(n,i,a),d=Array.isArray(t)?Nx(t,u):Nx([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function Nx(t,n){const i=Lc(()=>[]);return c2(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Gp(t){return typeof t=="object"&&!Array.isArray(t)}function u2(t,n,i,a){return t==null?[]:typeof t=="string"&&Gp(n)?Ip(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function RM(t,n,i){return t*(n+1)}function Dx(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function BM(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(yl(t,c),a--)}}function LM(t,n,i,a,c,u){BM(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:fs(c,u,a[d]),easing:Nb(i,d)})}function OM(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function zM(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const $M="easeInOut";function IM(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},y=new Map;let g=0,x=0,b=0;for(let S=0;S<t.length;S++){const k=t[S];if(typeof k=="string"){y.set(k,x);continue}else if(!Array.isArray(k)){y.set(k.name,Dx(x,k.at,g,y));continue}let[j,E,T={}]=k;T.at!==void 0&&(x=Dx(x,T.at,g,y));let z=0;const O=(D,K,Y,Q=0,V=0)=>{const ee=PM(D),{delay:le=0,times:re=Xb(ee),type:De=n.type||"keyframes",repeat:Ye,repeatType:se,repeatDelay:me=0,...P}=K;let{ease:ae=n.ease||"easeOut",duration:F}=K;const pe=typeof le=="function"?le(Q,V):le,Te=ee.length,I=Dp(De)?De:c==null?void 0:c[De||"keyframes"];if(Te<=2&&I){let Se=100;if(Te===2&&VM(ee)){const We=ee[1]-ee[0];Se=Math.abs(We)}const Ne={...n,...P};F!==void 0&&(Ne.duration=ri(F));const He=Vb(Ne,Se,I);ae=He.ease,F=He.duration}F!=null||(F=u);const fe=x+pe;re.length===1&&re[0]===0&&(re[1]=1);const G=re.length-ee.length;if(G>0&&Fb(re,G),ee.length===1&&ee.unshift(null),Ye){F=RM(F,Ye);const Se=[...ee],Ne=[...re];ae=Array.isArray(ae)?[...ae]:[ae];const He=[...ae];for(let We=0;We<Ye;We++){ee.push(...Se);for(let ot=0;ot<Se.length;ot++)re.push(Ne[ot]+(We+1)),ae.push(ot===0?"linear":Nb(He,ot-1))}OM(re,Ye)}const _e=fe+F;LM(Y,ee,ae,re,fe,_e),z=Math.max(pe+F,z),b=Math.max(_e,b)};if(_o(j)){const D=Rx(j,h);O(E,T,Bx("default",D))}else{const D=u2(j,E,a,p),K=D.length;for(let Y=0;Y<K;Y++){E=E,T=T;const Q=D[Y],V=Rx(Q,h);for(const ee in E)O(E[ee],HM(T,ee),Bx(ee,V),Y,K)}}g=x,x+=z}return h.forEach((S,k)=>{for(const j in S){const E=S[j];E.sort(zM);const T=[],z=[],O=[];for(let Q=0;Q<E.length;Q++){const{at:V,value:ee,easing:le}=E[Q];T.push(ee),z.push(xl(0,b,V)),O.push(le||"easeOut")}z[0]!==0&&(z.unshift(0),T.unshift(T[0]),O.unshift($M)),z[z.length-1]!==1&&(z.push(1),T.push(null)),d.has(k)||d.set(k,{keyframes:{},transition:{}});const D=d.get(k);D.keyframes[j]=T;const{type:K,...Y}=n;D.transition[j]={...Y,duration:b,ease:O,times:z,...i}}}),d}function Rx(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function Bx(t,n){return n[t]||(n[t]=[]),n[t]}function PM(t){return Array.isArray(t)?t:[t]}function HM(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const UM=t=>typeof t=="number",VM=t=>t.every(UM);function YM(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Id(t)&&!x5(t)?new O5(n):new N5(n);i.mount(t),Nc.set(t,i)}function WM(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new w8(n);i.mount(t),Nc.set(t,i)}function FM(t,n){return _o(t)||typeof t=="number"||typeof t=="string"&&!Gp(n)}function d2(t,n,i,a){const c=[];if(FM(t,n))c.push(W5(t,Gp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=u2(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],y=p instanceof Element?YM:WM;Nc.has(p)||y(p);const g=Nc.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...zp(g,{...n,transition:x},{}))}}return c}function XM(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=rr(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return IM(c,n,i,{spring:Ac}).forEach(({keyframes:d,transition:h},p)=>{a.push(...d2(p,d,h))}),a}function GM(t){return Array.isArray(t)&&t.some(Array.isArray)}function qM(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(GM(c)){const{onComplete:g,...x}=u||{};typeof g=="function"&&(p=g),h=XM(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:g,...x}=d||{};typeof g=="function"&&(p=g),h=d2(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const y=new dk(h);return p&&y.finished.then(p),n&&(n.animations.push(y),y.finished.then(()=>{yl(n.animations,y)})),y}return a}const Lx=qM();var KM=Object.freeze({}),QM=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[S,k]of Object.entries(h))p[S]=this.normalizePreservedValue(c.values[S],k,d.get(S));this.initTransitionModes(i,"",p);for(const[S,k]of Object.entries(c.values)){if(!S.endsWith(".__mode"))continue;const j=S.slice(0,-7),E=d.get(j);(E==null?void 0:E.type)==="transition"&&(p[S]=k)}const y={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,y),this.snapshots.set(t,{...p});const g=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[S,k]of Object.entries(h))x[S]=this.normalizePreservedValue(g[S],k,d.get(S));for(const[S,k]of Object.entries(p))S.endsWith(".__mode")&&(x[S]=k);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:KM}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),y=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:y});else if(typeof d=="number"){const{min:g,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:g,max:x,step:b,shortcut:y})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:y});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const g=d,x="_collapsed"in g?!g._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(g,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const y=h.options[0],g=typeof y=="string"?y:y.value;i[p]=(a=h.default)!=null?a:g}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},Jt=new QM;function ZM(t,n,i){const a=_.useId(),c=`${t}-${a}`,u=_.useRef(n),d=JSON.stringify(n);u.current=n;const h=_.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=_.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const y=JSON.stringify(i==null?void 0:i.shortcuts);_.useEffect(()=>(Jt.registerPanel(c,t,u.current,p.current),()=>Jt.unregisterPanel(c)),[c,t]);const g=_.useRef(!1);_.useEffect(()=>{if(!g.current){g.current=!0;return}Jt.updatePanel(c,t,u.current,p.current)},[c,t,d,y]),_.useEffect(()=>Jt.subscribeActions(c,b=>{var S;(S=h.current)==null||S.call(h,b)}),[c]);const x=_.useSyncExternalStore(b=>Jt.subscribe(c,b),()=>Jt.getValues(c),()=>Jt.getValues(c));return f2(n,x,"")}function f2(t,n,i){var c,u,d,h,p,y,g,x,b,S;const a={};for(const[k,j]of Object.entries(t)){if(k==="_collapsed")continue;const E=i?`${i}.${k}`:k;if(Array.isArray(j)&&j.length<=4&&typeof j[0]=="number")a[k]=(c=n[E])!=null?c:j[0];else if(typeof j=="number"||typeof j=="boolean"||typeof j=="string")a[k]=(u=n[E])!=null?u:j;else if(JM(j)||e7(j))a[k]=(d=n[E])!=null?d:j;else if(t7(j))a[k]=(h=n[E])!=null?h:j;else if(n7(j)){const T=(p=j.default)!=null?p:i7(j.options);a[k]=(y=n[E])!=null?y:T}else s7(j)?a[k]=(x=(g=n[E])!=null?g:j.default)!=null?x:"#000000":o7(j)?a[k]=(S=(b=n[E])!=null?b:j.default)!=null?S:"":typeof j=="object"&&j!==null&&(a[k]=f2(j,n,E))}return a}function kl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function JM(t){return kl(t,"spring")}function e7(t){return kl(t,"easing")}function t7(t){return kl(t,"action")}function n7(t){return kl(t,"select")&&"options"in t&&Array.isArray(t.options)}function s7(t){return kl(t,"color")}function o7(t){return kl(t,"text")}function i7(t){const n=t[0];return typeof n=="string"?n:n.value}function cp(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function Sd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(cp(n)))}function mc(t,n){var d,h,p,y;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(y=t.step)!=null?y:1}function pc(t,n,i,a,c){var y,g;const u=Jt.getValue(t,n),d=(y=i.min)!=null?y:0,h=(g=i.max)!=null?g:1,p=Math.max(d,Math.min(h,u+c*a));Jt.updateValue(t,n,Sd(p,a))}function a7(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function dd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function jm(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function h2(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=h2(i.children,n);if(a)return a}}return null}var fd=4;function r7(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function l7(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=r7(n);return t.key?`${m2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function c7(t){return t.key?`${m2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function m2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var p2=_.createContext({activePanelId:null,activePath:null});function u7({children:t}){const[n,i]=_.useState({activePanelId:null,activePath:null}),a=_.useRef(new Set),c=_.useRef(!1),u=_.useRef(null),d=_.useRef(0),h=_.useCallback(p=>{var y;for(const g of a.current){const x=Jt.getPanels();for(const b of x)for(const[S,k]of Object.entries(b.shortcuts)){if(!k.key||k.key.toLowerCase()!==g||((y=k.interaction)!=null?y:"scroll")!==p)continue;const j=h2(b.controls,S);if(j&&j.type==="slider")return{panelId:b.id,path:S,control:j,shortcut:k}}}return null},[]);return _.useEffect(()=>{const p=j=>{if(dd())return;const E=j.key.toLowerCase();if((E==="arrowleft"||E==="arrowright"||E==="arrowup"||E==="arrowdown")&&a.current.size>0){const D=h("scroll")||h("drag")||h("move");if(D&&D.control.type==="slider"){j.preventDefault();const K=E==="arrowright"||E==="arrowup"?1:-1,Y=mc(D.control,D.shortcut);pc(D.panelId,D.path,D.control,Y,K);return}}const T=a.current.has(E);a.current.add(E);const z=jm(j),O=Jt.resolveShortcutTarget(E,z);if(O&&(i({activePanelId:O.panelId,activePath:O.path}),!T&&O.control.type==="toggle")){const D=Jt.getValue(O.panelId,O.path);Jt.updateValue(O.panelId,O.path,!D)}T||(u.current=null,d.current=0)},y=j=>{const E=j.key.toLowerCase();if(a.current.delete(E),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let T=!1;for(const z of a.current){const O=jm(j),D=Jt.resolveShortcutTarget(z,O);if(D){i({activePanelId:D.panelId,activePath:D.path}),T=!0;break}}T||i({activePanelId:null,activePath:null})}},g=j=>{var z,O;if(dd())return;const E=jm(j);if(a.current.size>0)for(const D of a.current){const K=Jt.resolveShortcutTarget(D,E);if(!K)continue;const{panelId:Y,path:Q,control:V}=K;if(((O=(z=V.shortcut)==null?void 0:z.interaction)!=null?O:"scroll")!=="scroll"||V.type!=="slider")continue;j.preventDefault();const le=mc(V,V.shortcut),re=j.deltaY>0?-1:1;pc(Y,Q,V,le,re);return}const T=Jt.resolveScrollOnlyTargets();for(const{panelId:D,path:K,control:Y,shortcut:Q}of T){if(Y.type!=="slider")continue;j.preventDefault();const V=mc(Y,Q),ee=j.deltaY>0?-1:1;pc(D,K,Y,V,ee);return}},x=j=>{if(dd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=j.clientX,d.current=0,j.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},S=j=>{if(dd()||a.current.size===0)return;if(c.current){const T=h("drag");if(T&&u.current!==null){const z=j.clientX-u.current;u.current=j.clientX,d.current+=z;const O=mc(T.control,T.shortcut),D=Math.trunc(d.current/fd);D!==0&&(d.current-=D*fd,pc(T.panelId,T.path,T.control,O,D))}return}const E=h("move");if(E){if(u.current===null){u.current=j.clientX;return}const T=j.clientX-u.current;u.current=j.clientX,d.current+=T;const z=mc(E.control,E.shortcut),O=Math.trunc(d.current/fd);O!==0&&(d.current-=O*fd,pc(E.panelId,E.path,E.control,z,O))}},k=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",y),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",S),window.addEventListener("blur",k),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",y),window.removeEventListener("wheel",g),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",S),window.removeEventListener("blur",k)}},[h]),l.jsx(p2.Provider,{value:n,children:t})}var qp="M6 9.5L12 15.5L18 9.5",d7="M5 12.75L10 19L19 5",Mm={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},f7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],h7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Ox={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Od({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=_.useState(i),[y,g]=_.useState(!i),x=_.useRef(null),[b,S]=_.useState(void 0),[k,j]=_.useState(typeof window<"u"?window.innerHeight:800);_.useEffect(()=>{if(!a)return;const z=()=>j(window.innerHeight);return window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)},[a]),_.useEffect(()=>{const z=x.current;if(!z)return;const O=new ResizeObserver(()=>{if(h){const D=z.offsetHeight;S(K=>K===D?K:D)}});return O.observe(z),()=>O.disconnect()},[h]);const E=()=>{if(c&&a)return;const z=!h;p(z),g(!z),u==null||u(z)},T=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:E,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Ox.path,fill:"currentColor"}),Ox.circles.map((z,O)=>l.jsx("circle",{cx:z.cx,cy:z.cy,r:z.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},O))]}),!a&&l.jsx(ai.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:qp})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:z=>z.stopPropagation(),children:d})]}),l.jsx(Vd,{initial:!1,children:h&&l.jsx(ai.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:T});const z=h?{width:280,height:b!==void 0?Math.min(b+10,k-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(ai.div,{className:"dialkit-panel-inner",style:z,onClick:h?void 0:E,"data-collapsed":y,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:T})}return T}var m7=3,p7=32,_7=200,g7=8;function Po({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var it;const y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=_.useRef(null),S=_.useRef(null),[k,j]=_.useState(!1),[E,T]=_.useState(!1),[z,O]=_.useState(!1),[D,K]=_.useState(!1),[Y,Q]=_.useState(!1),[V,ee]=_.useState(!1),[le,re]=_.useState(""),De=_.useRef(null),Ye=_.useRef(null),se=_.useRef(!0),me=_.useRef(null),P=_.useRef(null),ae=_.useRef(1),F=(n-a)/(c-a)*100,pe=k||z,Te=lp(F),I=ud(Te,H=>`${H}%`),fe=ud(Te,H=>`max(5px, calc(${H}% - 9px))`),G=lp(0),_e=ud(G,H=>`calc(100% + ${Math.abs(H)}px)`),Se=ud(G,H=>H<0?H:0);_.useEffect(()=>{!k&&!me.current&&Te.jump(F)},[F,k,Te]);const Ne=_.useCallback(H=>{const oe=P.current;if(!oe)return n;const J=(H-oe.left)/ae.current,Me=y.current?y.current.offsetWidth:oe.width,we=Math.max(0,Math.min(1,J/Me)),he=a+we*(c-a);return Math.max(a,Math.min(c,he))},[a,c,n]),He=_.useCallback(H=>(H-a)/(c-a)*100,[a,c]),We=_.useCallback((H,oe)=>{const be=P.current;if(!be)return 0;const J=oe<0?be.left-H:H-be.right,Me=Math.max(0,J-p7);return oe*g7*Math.sqrt(Math.min(Me/_7,1))},[]),ot=_.useCallback(H=>{if(!V&&(H.preventDefault(),H.target.setPointerCapture(H.pointerId),Ye.current={x:H.clientX,y:H.clientY},se.current=!0,j(!0),y.current)){P.current=y.current.getBoundingClientRect();const oe=y.current.offsetWidth;ae.current=P.current.width/oe}},[V]),Rt=_.useCallback(H=>{if(!k||!Ye.current)return;const oe=H.clientX-Ye.current.x,be=H.clientY-Ye.current.y,J=Math.sqrt(oe*oe+be*be);if(se.current&&J>m7&&(se.current=!1,T(!0)),!se.current){const Me=P.current;Me&&(H.clientX<Me.left?G.jump(We(H.clientX,-1)):H.clientX>Me.right?G.jump(We(H.clientX,1)):G.jump(0));const we=Ne(H.clientX),he=He(we);me.current&&(me.current.stop(),me.current=null),Te.jump(he),i(Sd(we,u))}},[k,Ne,He,i,Te,G,We]),Ut=_.useCallback(H=>{if(k){if(se.current){const oe=Ne(H.clientX),J=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((oe-a)/u)*u)):a7(oe,a,c),Me=He(J);me.current&&me.current.stop(),me.current=Lx(Te,Me,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{me.current=null}}),i(Sd(J,u))}G.get()!==0&&Lx(G,0,{type:"spring",visualDuration:.35,bounce:.15}),j(!1),T(!1),Ye.current=null}},[k,Ne,He,i,a,c,Te,G]);_.useEffect(()=>(D&&!V&&!Y?De.current=setTimeout(()=>{Q(!0)},800):!D&&!V&&(De.current&&(clearTimeout(De.current),De.current=null),Q(!1)),()=>{De.current&&clearTimeout(De.current)}),[D,V,Y]),_.useEffect(()=>{V&&x.current&&(x.current.focus(),x.current.select())},[V]);const Ke=H=>{re(H.target.value)},et=()=>{const H=parseFloat(le);if(!isNaN(H)){const oe=Math.max(a,Math.min(c,H));i(Sd(oe,u))}ee(!1),K(!1),Q(!1)},Bt=H=>{Y&&(H.stopPropagation(),H.preventDefault(),ee(!0),re(n.toFixed(cp(u))))},Kt=H=>{H.key==="Enter"?et():H.key==="Escape"&&(ee(!1),K(!1))},Qt=()=>{et()},ze=n.toFixed(cp(u)),ce=8,tt=10,nt=10;let Ze=30,Qe=78;const ct=(it=y.current)==null?void 0:it.offsetWidth;ct&&ct>0&&(b.current&&(Ze=(tt+b.current.offsetWidth+ce)/ct*100),S.current&&(Qe=(ct-nt-S.current.offsetWidth-ce)/ct*100));const ft=F<Ze||F>Qe,Ct=pe?ft?.1:E?.9:.5:0,bt=(c-a)/u,$t=bt<=10?Array.from({length:bt-1},(H,oe)=>{const be=(oe+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${be}%`}},oe)}):Array.from({length:9},(H,oe)=>{const be=(oe+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${be}%`}},oe)});return l.jsx("div",{ref:y,className:"dialkit-slider-wrapper",children:l.jsxs(ai.div,{ref:g,className:`dialkit-slider ${pe?"dialkit-slider-active":""}`,onPointerDown:ot,onPointerMove:Rt,onPointerUp:Ut,onMouseEnter:()=>O(!0),onMouseLeave:()=>O(!1),style:{width:_e,x:Se},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:$t}),l.jsx(ai.div,{className:"dialkit-slider-fill",style:{width:I}}),l.jsx(ai.div,{className:"dialkit-slider-handle",style:{left:fe,y:"-50%"},animate:{opacity:Ct,scaleX:pe?1:.25,scaleY:pe&&ft?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:l7(h)})]}),V?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:le,onChange:Ke,onKeyDown:Kt,onBlur:Qt,onClick:H=>H.stopPropagation(),onMouseDown:H=>H.stopPropagation()}):l.jsx("span",{ref:S,className:`dialkit-slider-value ${Y?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>K(!0),onMouseLeave:()=>K(!1),onClick:Bt,onMouseDown:H=>Y&&H.stopPropagation(),style:{cursor:Y?"text":"default"},children:ze})]})})}function Kp({options:t,value:n,onChange:i}){const a=_.useRef(null),c=_.useRef(!1),[u,d]=_.useState(null),h=_.useCallback(()=>{const y=a.current;if(!y)return;const g=y.querySelector('[data-active="true"]');g&&d({left:g.offsetLeft,width:g.offsetWidth})},[]);_.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(y=>{const g=n===y.value;return l.jsx("button",{onClick:()=>i(y.value),className:"dialkit-segmented-button","data-active":String(g),children:y.label},y.value)})]})}function y7({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:c7(a)})]}),l.jsx(Kp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function x7(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const y=1;for(let g=0;g<=100;g++){const x=g*d;c.push([x,h]);const b=-t*(h-y),S=-n*p,k=(b+S)/i;p+=k*d,h+=p*d}return c}function _2({spring:t,isSimpleMode:n}){var j,E,T,z,O;let c,u,d;if(n){const D=(j=t.visualDuration)!=null?j:.3,K=(E=t.bounce)!=null?E:.2;d=1,c=2*Math.PI/D,c=Math.pow(c,2),u=2*(1-K)*Math.sqrt(c*d)}else c=(T=t.stiffness)!=null?T:400,u=(z=t.damping)!=null?z:17,d=(O=t.mass)!=null?O:1;const h=2,p=x7(c,u,d,h),y=p.map(([,D])=>D),g=Math.min(...y),b=Math.max(...y)-g,S=p.map(([D,K],Y)=>{const Q=D/h*256,ee=140-((K-g)/(b||1)*140*.6+140*.2);return`${Y===0?"M":"L"} ${Q} ${ee}`}).join(" "),k=[];for(let D=1;D<4;D++){const K=64*D,Y=140/4*D;k.push(l.jsx("line",{x1:K,y1:0,x2:K,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${D}`),l.jsx("line",{x1:0,y1:Y,x2:256,y2:Y,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${D}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[k,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:S,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function b7({panelId:t,path:n,label:i,spring:a,onChange:c}){var g,x,b,S,k;const u=_.useSyncExternalStore(j=>Jt.subscribe(t,j),()=>Jt.getSpringMode(t,n),()=>Jt.getSpringMode(t,n)),d=u==="simple",h=_.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=j=>{Jt.updateSpringMode(t,n,j),c(j==="simple"?h.current.simple:h.current.advanced)},y=(j,E)=>{if(d){const{stiffness:T,damping:z,mass:O,...D}=a;c({...D,[j]:E})}else{const{visualDuration:T,bounce:z,...O}=a;c({...O,[j]:E})}};return l.jsx(Od,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(_2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Kp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"Duration",value:(g=a.visualDuration)!=null?g:.3,onChange:j=>y("visualDuration",j),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Po,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:j=>y("bounce",j),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:j=>y("stiffness",j),min:1,max:1e3,step:10}),l.jsx(Po,{label:"Damping",value:(S=a.damping)!=null?S:17,onChange:j=>y("damping",j),min:1,max:100,step:1}),l.jsx(Po,{label:"Mass",value:(k=a.mass)!=null?k:1,onChange:j=>y("mass",j),min:.1,max:10,step:.1})]})]})})}function v7({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,S)=>({x:a+(b+.5)*u,y:a+(1.5-S)*u}),h=d(0,0),p=d(1,1),y=d(n[0],n[1]),g=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${y.x} ${y.y}, ${g.x} ${g.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function w7({panelId:t,path:n,label:i,value:a,onChange:c}){var k,j,E,T,z;const u=_.useSyncExternalStore(O=>Jt.subscribe(t,O),()=>Jt.getTransitionMode(t,n),()=>Jt.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=_.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const y=a.type==="spring"?a:p.current.simple,g=a.type==="easing"?a:p.current.easing,x=O=>{Jt.updateTransitionMode(t,n,O),c(O==="easing"?p.current.easing:O==="simple"?p.current.simple:p.current.advanced)},b=(O,D)=>{if(h){const{stiffness:K,damping:Y,mass:Q,...V}=y;c({...V,[O]:D})}else{const{visualDuration:K,bounce:Y,...Q}=y;c({...Q,[O]:D})}},S=(O,D)=>{const K=[...g.ease];K[O]=D,c({...g,ease:K})};return l.jsx(Od,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(v7,{easing:g}):l.jsx(_2,{spring:y,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Kp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"x1",value:g.ease[0],onChange:O=>S(0,O),min:0,max:1,step:.01}),l.jsx(Po,{label:"y1",value:g.ease[1],onChange:O=>S(1,O),min:-1,max:2,step:.01}),l.jsx(Po,{label:"x2",value:g.ease[2],onChange:O=>S(2,O),min:0,max:1,step:.01}),l.jsx(Po,{label:"y2",value:g.ease[3],onChange:O=>S(3,O),min:-1,max:2,step:.01}),l.jsx(Po,{label:"Duration",value:g.duration,onChange:O=>c({...g,duration:O}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(C7,{ease:g.ease,onChange:O=>c({...g,ease:O})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"Duration",value:(k=y.visualDuration)!=null?k:.3,onChange:O=>b("visualDuration",O),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Po,{label:"Bounce",value:(j=y.bounce)!=null?j:.2,onChange:O=>b("bounce",O),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"Stiffness",value:(E=y.stiffness)!=null?E:400,onChange:O=>b("stiffness",O),min:1,max:1e3,step:10}),l.jsx(Po,{label:"Damping",value:(T=y.damping)!=null?T:17,onChange:O=>b("damping",O),min:1,max:100,step:1}),l.jsx(Po,{label:"Mass",value:(z=y.mass)!=null?z:1,onChange:O=>b("mass",O),min:.1,max:10,step:.1})]})]})})}function zx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function S7(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function C7({ease:t,onChange:n}){const[i,a]=_.useState(!1),[c,u]=_.useState(""),d=()=>{u(zx(t)),a(!0)},h=()=>{const y=S7(c);y&&n(y),a(!1)},p=y=>{y.key==="Enter"&&y.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:zx(t),onChange:y=>u(y.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function k7({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function j7(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function M7(t){return t.map(n=>typeof n=="string"?{value:n,label:j7(n)}:n)}function E7({label:t,value:n,options:i,onChange:a}){var j;const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState(null),[g,x]=_.useState(null),b=M7(i),S=b.find(E=>E.value===n),k=_.useCallback(()=>{const E=d.current;if(!E)return;const T=E.getBoundingClientRect(),z=8+b.length*36,O=window.innerHeight-T.bottom-4,D=O<z&&T.top>O;x({top:D?T.top-4:T.bottom+4,left:T.left,width:T.width,above:D})},[b.length]);return _.useEffect(()=>{var T;const E=(T=d.current)==null?void 0:T.closest(".dialkit-root");y(E!=null?E:document.body)},[]),_.useEffect(()=>{c&&k()},[c,k]),_.useEffect(()=>{if(!c)return;const E=T=>{const z=T.target;d.current&&!d.current.contains(z)&&h.current&&!h.current.contains(z)&&u(!1)};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(j=S==null?void 0:S.label)!=null?j:n}),l.jsx(ai.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:qp})})]})]}),p&&Bc.createPortal(l.jsx(Vd,{children:c&&g&&l.jsx(ai.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:g.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:g.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:g.left,width:g.width,...g.above?{bottom:window.innerHeight-g.top,transformOrigin:"bottom"}:{top:g.top,transformOrigin:"top"}},children:b.map(E=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(E.value===n),onClick:()=>{a(E.value),u(!1)},children:E.label},E.value))})}),p)]})}var T7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function A7({label:t,value:n,onChange:i}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useRef(null);_.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),T7.test(u)?i(u):d(n)}function y(g){g.key==="Enter"?p():g.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:g=>d(g.target.value),onBlur:p,onKeyDown:y,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var g;return(g=h.current)==null?void 0:g.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?N7(n):n.slice(0,7),onChange:g=>i(g.target.value)})]})]})}function N7(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function D7({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState({top:0,left:0,width:0}),g=n.length>0,x=n.find(T=>T.id===i),b=_.useCallback(()=>{var z;if(!g)return;const T=(z=d.current)==null?void 0:z.getBoundingClientRect();T&&y({top:T.bottom+4,left:T.left,width:T.width}),u(!0)},[g]),S=_.useCallback(()=>u(!1),[]),k=_.useCallback(()=>{c?S():b()},[c,b,S]);_.useEffect(()=>{if(!c)return;const T=z=>{var D,K;const O=z.target;(D=d.current)!=null&&D.contains(O)||(K=h.current)!=null&&K.contains(O)||S()};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[c,S]);const j=T=>{T?Jt.loadPreset(t,T):Jt.clearActivePreset(t),S()},E=(T,z)=>{T.stopPropagation(),Jt.deletePreset(t,z)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:k,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!g),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(ai.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:g?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:qp})})]}),Bc.createPortal(l.jsx(Vd,{children:c&&l.jsxs(ai.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>j(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(T=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(T.id===i),onClick:()=>j(T.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:T.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:z=>E(z,T.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:h7.map((z,O)=>l.jsx("path",{d:z},O))})})]},T.id))]})}),document.body)]})}function R7({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useContext(p2);Object.keys(t.shortcuts).length>0;const p=_.useSyncExternalStore(E=>Jt.subscribe(t.id,E),()=>Jt.getValues(t.id),()=>Jt.getValues(t.id)),y=Jt.getPresets(t.id),g=Jt.getActivePresetId(t.id),x=()=>{const E=y.length+2;Jt.savePreset(t.id,`Version ${E}`)},b=()=>{const E=JSON.stringify(p,null,2),T=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${E}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(T),c(!0),setTimeout(()=>c(!1),1500)},S=E=>{var z,O,D;const T=p[E.path];switch(E.type){case"slider":return l.jsx(Po,{label:E.label,value:T,onChange:K=>Jt.updateValue(t.id,E.path,K),min:E.min,max:E.max,step:E.step,shortcut:E.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===E.path},E.path);case"toggle":return l.jsx(y7,{label:E.label,checked:T,onChange:K=>Jt.updateValue(t.id,E.path,K),shortcut:E.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===E.path},E.path);case"spring":return l.jsx(b7,{panelId:t.id,path:E.path,label:E.label,spring:T,onChange:K=>Jt.updateValue(t.id,E.path,K)},E.path);case"transition":return l.jsx(w7,{panelId:t.id,path:E.path,label:E.label,value:T,onChange:K=>Jt.updateValue(t.id,E.path,K)},E.path);case"folder":return l.jsx(Od,{title:E.label,defaultOpen:(z=E.defaultOpen)!=null?z:!0,children:(O=E.children)==null?void 0:O.map(S)},E.path);case"text":return l.jsx(k7,{label:E.label,value:T,onChange:K=>Jt.updateValue(t.id,E.path,K),placeholder:E.placeholder},E.path);case"select":return l.jsx(E7,{label:E.label,value:T,options:(D=E.options)!=null?D:[],onChange:K=>Jt.updateValue(t.id,E.path,K)},E.path);case"color":return l.jsx(A7,{label:E.label,value:T,onChange:K=>Jt.updateValue(t.id,E.path,K)},E.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>Jt.triggerAction(t.id,E.path),children:E.label},E.path);default:return null}},k=()=>t.controls.map(S),j=l.jsxs(l.Fragment,{children:[l.jsx(ai.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:f7.map((E,T)=>l.jsx("path",{d:E},T))})}),l.jsx(D7,{panelId:t.id,presets:y,activePresetId:g,onAdd:x}),l.jsx(ai.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Vd,{initial:!1,mode:"wait",children:a?l.jsx(ai.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:d7})},"check"):l.jsxs(ai.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:Mm.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:Mm.sparkle,fill:"currentColor"}),l.jsx("path",{d:Mm.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Od,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:j,children:k()})})}var B7=typeof process<"u"?!1:!(typeof import.meta<"u");function L7({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=B7}){if(!c)return null;const[u,d]=_.useState([]),[h,p]=_.useState(!1),y=i==="inline",g=_.useRef(null),[x,b]=_.useState(null),[S,k]=_.useState(t),j=_.useRef(null),E=_.useRef(!1),T=_.useRef(null),z=_.useRef(!1);_.useEffect(()=>(p(!0),d(Jt.getPanels()),Jt.subscribeGlobal(()=>{d(Jt.getPanels())})),[]),_.useEffect(()=>{if(!g.current||y)return;const V=new MutationObserver(()=>{var re;const ee=(re=g.current)==null?void 0:re.querySelector(".dialkit-panel-inner");if(!ee)return;if(ee.getAttribute("data-collapsed")==="true")j.current&&b(j.current);else{if(x){j.current=x;const De=x.x+21,Ye=window.innerWidth/2;k(De<Ye?"top-left":"top-right")}else k(t);b(null)}});return V.observe(g.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>V.disconnect()},[y,x,t]);const O=_.useCallback(V=>{var re;const ee=(re=g.current)==null?void 0:re.querySelector(".dialkit-panel-inner");if(!ee||ee.getAttribute("data-collapsed")!=="true")return;const le=g.current.getBoundingClientRect();T.current={pointerX:V.clientX,pointerY:V.clientY,elX:le.left,elY:le.top},z.current=!1,E.current=!0,V.target.setPointerCapture(V.pointerId)},[]),D=_.useCallback(V=>{if(!E.current||!T.current)return;const ee=V.clientX-T.current.pointerX,le=V.clientY-T.current.pointerY;!z.current&&Math.abs(ee)+Math.abs(le)<4||(z.current=!0,b({x:T.current.elX+ee,y:T.current.elY+le}))},[]),K=_.useCallback(V=>{var ee;if(E.current&&(E.current=!1,T.current=null,z.current)){V.stopPropagation();const le=(ee=g.current)==null?void 0:ee.querySelector(".dialkit-panel-inner");if(le){const re=De=>{De.stopPropagation()};le.addEventListener("click",re,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const Y=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,Q=l.jsx(u7,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:g,className:"dialkit-panel","data-position":y||x?void 0:S,"data-mode":i,style:Y,onPointerDown:y?void 0:O,onPointerMove:y?void 0:D,onPointerUp:y?void 0:K,children:u.map(V=>l.jsx(R7,{panel:V,defaultOpen:y||n,inline:y},V.id))})})});return y?Q:Bc.createPortal(Q,document.body)}const O7=()=>(ZM("Git Visualizer",{preview:[1,0,1]}),null),z7=({children:t})=>l.jsxs(l.Fragment,{children:[t,l.jsx(O7,{}),l.jsx(L7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx($C,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});Vv.createRoot(document.getElementById("root")).render(l.jsx(z7,{children:l.jsx(vS,{})}));

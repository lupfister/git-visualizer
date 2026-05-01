(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Ox(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ih={exports:{}},ic={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty;function Nv(){if(ty)return ic;ty=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return ic.Fragment=n,ic.jsx=i,ic.jsxs=i,ic}var ny;function Rv(){return ny||(ny=1,Ih.exports=Nv()),Ih.exports}var l=Rv(),Ph={exports:{}},ac={},Hh={exports:{}},Uh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function Bv(){return sy||(sy=1,(function(t){function n(I,ue){var X=I.length;I.push(ue);e:for(;0<X;){var pe=X-1>>>1,Ee=I[pe];if(0<c(Ee,ue))I[pe]=ue,I[X]=Ee,X=pe;else break e}}function i(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var ue=I[0],X=I.pop();if(X!==ue){I[0]=X;e:for(var pe=0,Ee=I.length,H=Ee>>>1;pe<H;){var ce=2*(pe+1)-1,ee=I[ce],le=ce+1,ge=I[le];if(0>c(ee,X))le<Ee&&0>c(ge,ee)?(I[pe]=ge,I[le]=X,pe=le):(I[pe]=ee,I[ce]=X,pe=ce);else if(le<Ee&&0>c(ge,X))I[pe]=ge,I[le]=X,pe=le;else break e}}return ue}function c(I,ue){var X=I.sortIndex-ue.sortIndex;return X!==0?X:I.id-ue.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],y=[],g=1,b=null,v=3,C=!1,k=!1,j=!1,M=!1,T=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function A(I){for(var ue=i(y);ue!==null;){if(ue.callback===null)a(y);else if(ue.startTime<=I)a(y),ue.sortIndex=ue.expirationTime,n(p,ue);else break;ue=i(y)}}function F(I){if(j=!1,A(I),!k)if(i(p)!==null)k=!0,U||(U=!0,we());else{var ue=i(y);ue!==null&&fe(F,ue.startTime-I)}}var U=!1,W=-1,Q=5,me=-1;function se(){return M?!0:!(t.unstable_now()-me<Q)}function ae(){if(M=!1,U){var I=t.unstable_now();me=I;var ue=!0;try{e:{k=!1,j&&(j=!1,L(W),W=-1),C=!0;var X=v;try{t:{for(A(I),b=i(p);b!==null&&!(b.expirationTime>I&&se());){var pe=b.callback;if(typeof pe=="function"){b.callback=null,v=b.priorityLevel;var Ee=pe(b.expirationTime<=I);if(I=t.unstable_now(),typeof Ee=="function"){b.callback=Ee,A(I),ue=!0;break t}b===i(p)&&a(p),A(I)}else a(p);b=i(p)}if(b!==null)ue=!0;else{var H=i(y);H!==null&&fe(F,H.startTime-I),ue=!1}}break e}finally{b=null,v=X,C=!1}ue=void 0}}finally{ue?we():U=!1}}}var we;if(typeof O=="function")we=function(){O(ae)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,J=He.port2;He.port1.onmessage=ae,we=function(){J.postMessage(null)}}else we=function(){T(ae,0)};function fe(I,ue){W=T(function(){I(t.unstable_now())},ue)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_next=function(I){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var X=v;v=ue;try{return I()}finally{v=X}},t.unstable_requestPaint=function(){M=!0},t.unstable_runWithPriority=function(I,ue){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var X=v;v=I;try{return ue()}finally{v=X}},t.unstable_scheduleCallback=function(I,ue,X){var pe=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?pe+X:pe):X=pe,I){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=X+Ee,I={id:g++,callback:ue,priorityLevel:I,startTime:X,expirationTime:Ee,sortIndex:-1},X>pe?(I.sortIndex=X,n(y,I),i(p)===null&&I===i(y)&&(j?(L(W),W=-1):j=!0,fe(F,X-pe))):(I.sortIndex=Ee,n(p,I),k||C||(k=!0,U||(U=!0,we()))),I},t.unstable_shouldYield=se,t.unstable_wrapCallback=function(I){var ue=v;return function(){var X=v;v=ue;try{return I.apply(this,arguments)}finally{v=X}}}})(Uh)),Uh}var oy;function Lv(){return oy||(oy=1,Hh.exports=Bv()),Hh.exports}var Vh={exports:{}},nn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy;function Ov(){if(iy)return nn;iy=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),v=Symbol.iterator;function C(H){return H===null||typeof H!="object"?null:(H=v&&H[v]||H["@@iterator"],typeof H=="function"?H:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,M={};function T(H,ce,ee){this.props=H,this.context=ce,this.refs=M,this.updater=ee||k}T.prototype.isReactComponent={},T.prototype.setState=function(H,ce){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,ce,"setState")},T.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function L(){}L.prototype=T.prototype;function O(H,ce,ee){this.props=H,this.context=ce,this.refs=M,this.updater=ee||k}var A=O.prototype=new L;A.constructor=O,j(A,T.prototype),A.isPureReactComponent=!0;var F=Array.isArray;function U(){}var W={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function me(H,ce,ee){var le=ee.ref;return{$$typeof:t,type:H,key:ce,ref:le!==void 0?le:null,props:ee}}function se(H,ce){return me(H.type,ce,H.props)}function ae(H){return typeof H=="object"&&H!==null&&H.$$typeof===t}function we(H){var ce={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(ee){return ce[ee]})}var He=/\/+/g;function J(H,ce){return typeof H=="object"&&H!==null&&H.key!=null?we(""+H.key):ce.toString(36)}function fe(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(U,U):(H.status="pending",H.then(function(ce){H.status==="pending"&&(H.status="fulfilled",H.value=ce)},function(ce){H.status==="pending"&&(H.status="rejected",H.reason=ce)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function I(H,ce,ee,le,ge){var Ae=typeof H;(Ae==="undefined"||Ae==="boolean")&&(H=null);var ze=!1;if(H===null)ze=!0;else switch(Ae){case"bigint":case"string":case"number":ze=!0;break;case"object":switch(H.$$typeof){case t:case n:ze=!0;break;case g:return ze=H._init,I(ze(H._payload),ce,ee,le,ge)}}if(ze)return ge=ge(H),ze=le===""?"."+J(H,0):le,F(ge)?(ee="",ze!=null&&(ee=ze.replace(He,"$&/")+"/"),I(ge,ce,ee,"",function($t){return $t})):ge!=null&&(ae(ge)&&(ge=se(ge,ee+(ge.key==null||H&&H.key===ge.key?"":(""+ge.key).replace(He,"$&/")+"/")+ze)),ce.push(ge)),1;ze=0;var et=le===""?".":le+":";if(F(H))for(var $e=0;$e<H.length;$e++)le=H[$e],Ae=et+J(le,$e),ze+=I(le,ce,ee,Ae,ge);else if($e=C(H),typeof $e=="function")for(H=$e.call(H),$e=0;!(le=H.next()).done;)le=le.value,Ae=et+J(le,$e++),ze+=I(le,ce,ee,Ae,ge);else if(Ae==="object"){if(typeof H.then=="function")return I(fe(H),ce,ee,le,ge);throw ce=String(H),Error("Objects are not valid as a React child (found: "+(ce==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":ce)+"). If you meant to render a collection of children, use an array instead.")}return ze}function ue(H,ce,ee){if(H==null)return H;var le=[],ge=0;return I(H,le,"","",function(Ae){return ce.call(ee,Ae,ge++)}),le}function X(H){if(H._status===-1){var ce=H._result;ce=ce(),ce.then(function(ee){(H._status===0||H._status===-1)&&(H._status=1,H._result=ee)},function(ee){(H._status===0||H._status===-1)&&(H._status=2,H._result=ee)}),H._status===-1&&(H._status=0,H._result=ce)}if(H._status===1)return H._result.default;throw H._result}var pe=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ce=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(ce))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)},Ee={map:ue,forEach:function(H,ce,ee){ue(H,function(){ce.apply(this,arguments)},ee)},count:function(H){var ce=0;return ue(H,function(){ce++}),ce},toArray:function(H){return ue(H,function(ce){return ce})||[]},only:function(H){if(!ae(H))throw Error("React.Children.only expected to receive a single React element child.");return H}};return nn.Activity=b,nn.Children=Ee,nn.Component=T,nn.Fragment=i,nn.Profiler=c,nn.PureComponent=O,nn.StrictMode=a,nn.Suspense=p,nn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,nn.__COMPILER_RUNTIME={__proto__:null,c:function(H){return W.H.useMemoCache(H)}},nn.cache=function(H){return function(){return H.apply(null,arguments)}},nn.cacheSignal=function(){return null},nn.cloneElement=function(H,ce,ee){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var le=j({},H.props),ge=H.key;if(ce!=null)for(Ae in ce.key!==void 0&&(ge=""+ce.key),ce)!Q.call(ce,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&ce.ref===void 0||(le[Ae]=ce[Ae]);var Ae=arguments.length-2;if(Ae===1)le.children=ee;else if(1<Ae){for(var ze=Array(Ae),et=0;et<Ae;et++)ze[et]=arguments[et+2];le.children=ze}return me(H.type,ge,le)},nn.createContext=function(H){return H={$$typeof:d,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:u,_context:H},H},nn.createElement=function(H,ce,ee){var le,ge={},Ae=null;if(ce!=null)for(le in ce.key!==void 0&&(Ae=""+ce.key),ce)Q.call(ce,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(ge[le]=ce[le]);var ze=arguments.length-2;if(ze===1)ge.children=ee;else if(1<ze){for(var et=Array(ze),$e=0;$e<ze;$e++)et[$e]=arguments[$e+2];ge.children=et}if(H&&H.defaultProps)for(le in ze=H.defaultProps,ze)ge[le]===void 0&&(ge[le]=ze[le]);return me(H,Ae,ge)},nn.createRef=function(){return{current:null}},nn.forwardRef=function(H){return{$$typeof:h,render:H}},nn.isValidElement=ae,nn.lazy=function(H){return{$$typeof:g,_payload:{_status:-1,_result:H},_init:X}},nn.memo=function(H,ce){return{$$typeof:y,type:H,compare:ce===void 0?null:ce}},nn.startTransition=function(H){var ce=W.T,ee={};W.T=ee;try{var le=H(),ge=W.S;ge!==null&&ge(ee,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(U,pe)}catch(Ae){pe(Ae)}finally{ce!==null&&ee.types!==null&&(ce.types=ee.types),W.T=ce}},nn.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},nn.use=function(H){return W.H.use(H)},nn.useActionState=function(H,ce,ee){return W.H.useActionState(H,ce,ee)},nn.useCallback=function(H,ce){return W.H.useCallback(H,ce)},nn.useContext=function(H){return W.H.useContext(H)},nn.useDebugValue=function(){},nn.useDeferredValue=function(H,ce){return W.H.useDeferredValue(H,ce)},nn.useEffect=function(H,ce){return W.H.useEffect(H,ce)},nn.useEffectEvent=function(H){return W.H.useEffectEvent(H)},nn.useId=function(){return W.H.useId()},nn.useImperativeHandle=function(H,ce,ee){return W.H.useImperativeHandle(H,ce,ee)},nn.useInsertionEffect=function(H,ce){return W.H.useInsertionEffect(H,ce)},nn.useLayoutEffect=function(H,ce){return W.H.useLayoutEffect(H,ce)},nn.useMemo=function(H,ce){return W.H.useMemo(H,ce)},nn.useOptimistic=function(H,ce){return W.H.useOptimistic(H,ce)},nn.useReducer=function(H,ce,ee){return W.H.useReducer(H,ce,ee)},nn.useRef=function(H){return W.H.useRef(H)},nn.useState=function(H){return W.H.useState(H)},nn.useSyncExternalStore=function(H,ce,ee){return W.H.useSyncExternalStore(H,ce,ee)},nn.useTransition=function(){return W.H.useTransition()},nn.version="19.2.4",nn}var ay;function up(){return ay||(ay=1,Vh.exports=Ov()),Vh.exports}var Yh={exports:{}},Oo={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function zv(){if(ry)return Oo;ry=1;var t=up();function n(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)y+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,y,g){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:p,containerInfo:y,implementation:g}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Oo.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Oo.createPortal=function(p,y){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(n(299));return u(p,y,null,g)},Oo.flushSync=function(p){var y=d.T,g=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=y,a.p=g,a.d.f()}},Oo.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(p,y))},Oo.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Oo.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var g=y.as,b=h(g,y.crossOrigin),v=typeof y.integrity=="string"?y.integrity:void 0,C=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;g==="style"?a.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:b,integrity:v,fetchPriority:C}):g==="script"&&a.d.X(p,{crossOrigin:b,integrity:v,fetchPriority:C,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Oo.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var g=h(y.as,y.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(p)},Oo.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var g=y.as,b=h(g,y.crossOrigin);a.d.L(p,g,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Oo.preloadModule=function(p,y){if(typeof p=="string")if(y){var g=h(y.as,y.crossOrigin);a.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(p)},Oo.requestFormReset=function(p){a.d.r(p)},Oo.unstable_batchedUpdates=function(p,y){return p(y)},Oo.useFormState=function(p,y,g){return d.H.useFormState(p,y,g)},Oo.useFormStatus=function(){return d.H.useHostTransitionStatus()},Oo.version="19.2.4",Oo}var ly;function zx(){if(ly)return Yh.exports;ly=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Yh.exports=zv(),Yh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function $v(){if(cy)return ac;cy=1;var t=Lv(),n=up(),i=zx();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function y(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var w=!1,D=f.child;D;){if(D===o){w=!0,o=f,r=m;break}if(D===r){w=!0,r=f,o=m;break}D=D.sibling}if(!w){for(D=m.child;D;){if(D===o){w=!0,o=m,r=f;break}if(D===r){w=!0,r=m,o=f;break}D=D.sibling}if(!w)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function g(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=g(e),s!==null)return s;e=e.sibling}return null}var b=Object.assign,v=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),O=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),me=Symbol.for("react.activity"),se=Symbol.for("react.memo_cache_sentinel"),ae=Symbol.iterator;function we(e){return e===null||typeof e!="object"?null:(e=ae&&e[ae]||e["@@iterator"],typeof e=="function"?e:null)}var He=Symbol.for("react.client.reference");function J(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===He?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case T:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case U:return"SuspenseList";case me:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case O:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case A:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return s=e.displayName||null,s!==null?s:J(e.type)||"Memo";case Q:s=e._payload,e=e._init;try{return J(e(s))}catch{}}return null}var fe=Array.isArray,I=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},pe=[],Ee=-1;function H(e){return{current:e}}function ce(e){0>Ee||(e.current=pe[Ee],pe[Ee]=null,Ee--)}function ee(e,s){Ee++,pe[Ee]=e.current,e.current=s}var le=H(null),ge=H(null),Ae=H(null),ze=H(null);function et(e,s){switch(ee(Ae,s),ee(ge,e),ee(le,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?C0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=C0(s),e=k0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ce(le),ee(le,e)}function $e(){ce(le),ce(ge),ce(Ae)}function $t(e){e.memoizedState!==null&&ee(ze,e);var s=le.current,o=k0(s,e.type);s!==o&&(ee(ge,e),ee(le,o))}function Nt(e){ge.current===e&&(ce(le),ce(ge)),ze.current===e&&(ce(ze),tc._currentValue=X)}var _t,tt;function ot(e){if(_t===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);_t=s&&s[1]||"",tt=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_t+e+tt}var Wt=!1;function on(e,s){if(!e||Wt)return"";Wt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var Pe=function(){throw Error()};if(Object.defineProperty(Pe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Pe,[])}catch(ke){var ve=ke}Reflect.construct(e,[],Pe)}else{try{Pe.call()}catch(ke){ve=ke}e.call(Pe.prototype)}}else{try{throw Error()}catch(ke){ve=ke}(Pe=e())&&typeof Pe.catch=="function"&&Pe.catch(function(){})}}catch(ke){if(ke&&ve&&typeof ke.stack=="string")return[ke.stack,ve.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),w=m[0],D=m[1];if(w&&D){var G=w.split(`
`),ye=D.split(`
`);for(f=r=0;r<G.length&&!G[r].includes("DetermineComponentFrameRoot");)r++;for(;f<ye.length&&!ye[f].includes("DetermineComponentFrameRoot");)f++;if(r===G.length||f===ye.length)for(r=G.length-1,f=ye.length-1;1<=r&&0<=f&&G[r]!==ye[f];)f--;for(;1<=r&&0<=f;r--,f--)if(G[r]!==ye[f]){if(r!==1||f!==1)do if(r--,f--,0>f||G[r]!==ye[f]){var Ne=`
`+G[r].replace(" at new "," at ");return e.displayName&&Ne.includes("<anonymous>")&&(Ne=Ne.replace("<anonymous>",e.displayName)),Ne}while(1<=r&&0<=f);break}}}finally{Wt=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?ot(o):""}function Ie(e,s){switch(e.tag){case 26:case 27:case 5:return ot(e.type);case 16:return ot("Lazy");case 13:return e.child!==s&&s!==null?ot("Suspense Fallback"):ot("Suspense");case 19:return ot("SuspenseList");case 0:case 15:return on(e.type,!1);case 11:return on(e.type.render,!1);case 1:return on(e.type,!0);case 31:return ot("Activity");default:return""}}function ie(e){try{var s="",o=null;do s+=Ie(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var We=Object.prototype.hasOwnProperty,nt=t.unstable_scheduleCallback,Se=t.unstable_cancelCallback,Ge=t.unstable_shouldYield,lt=t.unstable_requestPaint,ct=t.unstable_now,kt=t.unstable_getCurrentPriorityLevel,pt=t.unstable_ImmediatePriority,It=t.unstable_UserBlockingPriority,st=t.unstable_NormalPriority,V=t.unstable_LowPriority,Z=t.unstable_IdlePriority,be=t.log,je=t.unstable_setDisableYieldValue,Je=null,qe=null;function Te(e){if(typeof be=="function"&&je(e),qe&&typeof qe.setStrictMode=="function")try{qe.setStrictMode(Je,e)}catch{}}var he=Math.clz32?Math.clz32:Ke,Le=Math.log,Ye=Math.LN2;function Ke(e){return e>>>=0,e===0?32:31-(Le(e)/Ye|0)|0}var De=256,rt=262144,mt=4194304;function Ct(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,m=e.suspendedLanes,w=e.pingedLanes;e=e.warmLanes;var D=r&134217727;return D!==0?(r=D&~m,r!==0?f=Ct(r):(w&=D,w!==0?f=Ct(w):o||(o=D&~e,o!==0&&(f=Ct(o))))):(D=r&~m,D!==0?f=Ct(D):w!==0?f=Ct(w):o||(o=r&~e,o!==0&&(f=Ct(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function Bt(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function xt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yt(){var e=mt;return mt<<=1,(mt&62914560)===0&&(mt=4194304),e}function Zt(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function at(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function jt(e,s,o,r,f,m){var w=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var D=e.entanglements,G=e.expirationTimes,ye=e.hiddenUpdates;for(o=w&~o;0<o;){var Ne=31-he(o),Pe=1<<Ne;D[Ne]=0,G[Ne]=-1;var ve=ye[Ne];if(ve!==null)for(ye[Ne]=null,Ne=0;Ne<ve.length;Ne++){var ke=ve[Ne];ke!==null&&(ke.lane&=-536870913)}o&=~Pe}r!==0&&Rt(e,r,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(w&~s))}function Rt(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-he(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function bt(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-he(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function Ht(e,s){var o=s&-s;return o=(o&42)!==0?1:Gt(o),(o&(e.suspendedLanes|s))!==0?0:o}function Gt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ln(){var e=ue.p;return e!==0?e:(e=window.event,e===void 0?32:G0(e.type))}function an(e,s){var o=ue.p;try{return ue.p=e,s()}finally{ue.p=o}}var On=Math.random().toString(36).slice(2),Ft="__reactFiber$"+On,mn="__reactProps$"+On,it="__reactContainer$"+On,_n="__reactEvents$"+On,ws="__reactListeners$"+On,go="__reactHandles$"+On,Hs="__reactResources$"+On,qt="__reactMarker$"+On;function Gn(e){delete e[Ft],delete e[mn],delete e[_n],delete e[ws],delete e[go]}function Tn(e){var s=e[Ft];if(s)return s;for(var o=e.parentNode;o;){if(s=o[it]||o[Ft]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=N0(e);e!==null;){if(o=e[Ft])return o;e=N0(e)}return s}e=o,o=e.parentNode}return null}function _s(e){if(e=e[Ft]||e[it]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function Ss(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function Hn(e){var s=e[Hs];return s||(s=e[Hs]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function zn(e){e[qt]=!0}var Bs=new Set,Ls={};function An(e,s){qn(e,s),qn(e+"Capture",s)}function qn(e,s){for(Ls[e]=s,e=0;e<s.length;e++)Bs.add(s[e])}var Qs=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yo={},So={};function Bo(e){return We.call(So,e)?!0:We.call(yo,e)?!1:Qs.test(e)?So[e]=!0:(yo[e]=!0,!1)}function ro(e,s,o){if(Bo(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function Cn(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function ds(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function hn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gs(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function vi(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){o=""+w,m.call(this,w)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(w){o=""+w},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function Es(e){if(!e._valueTracker){var s=gs(e)?"checked":"value";e._valueTracker=vi(e,s,""+e[s])}}function lo(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=gs(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var rs=/[\n"\\]/g;function Ts(e){return e.replace(rs,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function co(e,s,o,r,f,m,w,D){e.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.type=w:e.removeAttribute("type"),s!=null?w==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+hn(s)):e.value!==""+hn(s)&&(e.value=""+hn(s)):w!=="submit"&&w!=="reset"||e.removeAttribute("value"),s!=null?uo(e,w,hn(s)):o!=null?uo(e,w,hn(o)):r!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?e.name=""+hn(D):e.removeAttribute("name")}function $n(e,s,o,r,f,m,w,D){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){Es(e);return}o=o!=null?""+hn(o):"",s=s!=null?""+hn(s):o,D||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=D?e.checked:!!r,e.defaultChecked=!!r,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(e.name=w),Es(e)}function uo(e,s,o){s==="number"&&xo(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function fs(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+hn(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function Xn(e,s,o){if(s!=null&&(s=""+hn(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+hn(o):""}function ri(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(fe(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=hn(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),Es(e)}function $o(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var ea=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kt(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||ea.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function $i(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&Kt(e,f,r)}else for(var m in s)s.hasOwnProperty(m)&&Kt(e,m,s[m])}function Us(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ii=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Io(e){return Pi.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function hs(){}var li=null;function gn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dn=null,fo=null;function Qo(e){var s=_s(e);if(s&&(e=s.stateNode)){var o=e[mn]||null;e:switch(e=s.stateNode,s.type){case"input":if(co(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Ts(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[mn]||null;if(!f)throw Error(a(90));co(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&lo(r)}break e;case"textarea":Xn(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&fs(e,!!o.multiple,s,!1)}}}var Cs=!1;function Zs(e,s,o){if(Cs)return e(s,o);Cs=!0;try{var r=e(s);return r}finally{if(Cs=!1,(Dn!==null||fo!==null)&&(vu(),Dn&&(s=Dn,e=fo,fo=Dn=null,Qo(s),e)))for(s=0;s<e.length;s++)Qo(e[s])}}function rn(e,s){var o=e.stateNode;if(o===null)return null;var r=o[mn]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Vs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ys=!1;if(Vs)try{var Po={};Object.defineProperty(Po,"passive",{get:function(){Ys=!0}}),window.addEventListener("test",Po,Po),window.removeEventListener("test",Po,Po)}catch{Ys=!1}var As=null,ci=null,Ho=null;function Uo(){if(Ho)return Ho;var e,s=ci,o=s.length,r,f="value"in As?As.value:As.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var w=o-e;for(r=1;r<=w&&s[o-r]===f[m-r];r++);return Ho=f.slice(e,1<r?1-r:void 0)}function Ws(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function Vo(){return!0}function Co(){return!1}function Un(e){function s(o,r,f,m,w){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var D in e)e.hasOwnProperty(D)&&(o=e[D],this[D]=o?o(m):m[D]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Vo:Co,this.isPropagationStopped=Co,this}return b(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),s}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ui=Un(Ds),Js=b({},Ds,{view:0,detail:0}),en=Un(Js),Fs,Vn,Yn,ks=b({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(Fs=e.screenX-Yn.screenX,Vn=e.screenY-Yn.screenY):Vn=Fs=0,Yn=e),Fs)},movementY:function(e){return"movementY"in e?e.movementY:Vn}}),eo=Un(ks),Yo=b({},ks,{dataTransfer:0}),bo=Un(Yo),ko=b({},Js,{relatedTarget:0}),Xs=Un(ko),di=b({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),Zo=Un(di),ho=b({},Ds,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jo=Un(ho),jo=b({},Ds,{data:0}),Ot=Un(jo),wi={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Si={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hi={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fi(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=Hi[e])?!!s[e]:!1}function vo(){return fi}var ei=b({},Js,{key:function(e){if(e.key){var s=wi[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=Ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Si[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vo,charCode:function(e){return e.type==="keypress"?Ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$=Un(ei),x=b({},ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S=Un(x),N=b({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vo}),Y=Un(N),ne=b({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),de=Un(ne),Xe=b({},ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dt=Un(Xe),At=b({},Ds,{newState:0,oldState:0}),vt=Un(At),Jt=[9,13,27,32],ht=Vs&&"CompositionEvent"in window,zt=null;Vs&&"documentMode"in document&&(zt=document.documentMode);var Qt=Vs&&"TextEvent"in window&&!zt,gt=Vs&&(!ht||zt&&8<zt&&11>=zt),un=" ",pn=!1;function Mn(e,s){switch(e){case"keyup":return Jt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jn(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ns=!1;function js(e,s){switch(e){case"compositionend":return Jn(s);case"keypress":return s.which!==32?null:(pn=!0,un);case"textInput":return e=s.data,e===un&&pn?null:e;default:return null}}function Rs(e,s){if(Ns)return e==="compositionend"||!ht&&Mn(e,s)?(e=Uo(),Ho=ci=As=null,Ns=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return gt&&s.locale!=="ko"?null:s.data;default:return null}}var Os={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bn(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!Os[e.type]:s==="textarea"}function es(e,s,o,r){Dn?fo?fo.push(r):fo=[r]:Dn=r,s=Eu(s,"onChange"),0<s.length&&(o=new ui("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var ys=null,Mo=null;function ta(e){y0(e,0)}function R(e){var s=Ss(e);if(lo(s))return e}function P(e,s){if(e==="change")return s}var K=!1;if(Vs){var E;if(Vs){var B="oninput"in document;if(!B){var q=document.createElement("div");q.setAttribute("oninput","return;"),B=typeof q.oninput=="function"}E=B}else E=!1;K=E&&(!document.documentMode||9<document.documentMode)}function oe(){ys&&(ys.detachEvent("onpropertychange",xe),Mo=ys=null)}function xe(e){if(e.propertyName==="value"&&R(Mo)){var s=[];es(s,Mo,e,gn(e)),Zs(ta,s)}}function Ce(e,s,o){e==="focusin"?(oe(),ys=s,Mo=o,ys.attachEvent("onpropertychange",xe)):e==="focusout"&&oe()}function Ve(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return R(Mo)}function Ze(e,s){if(e==="click")return R(s)}function wt(e,s){if(e==="input"||e==="change")return R(s)}function Dt(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var ft=typeof Object.is=="function"?Object.is:Dt;function ut(e,s){if(ft(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!We.call(s,f)||!ft(e[f],s[f]))return!1}return!0}function tn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dn(e,s){var o=tn(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=tn(o)}}function yn(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?yn(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function vn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=xo(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=xo(e.document)}return s}function Nn(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var Ut=Vs&&"documentMode"in document&&11>=document.documentMode,Xt=null,xs=null,Rn=null,mo=!1;function Lo(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;mo||Xt==null||Xt!==xo(r)||(r=Xt,"selectionStart"in r&&Nn(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rn&&ut(Rn,r)||(Rn=r,r=Eu(xs,"onSelect"),0<r.length&&(s=new ui("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=Xt)))}function ls(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var Ci={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionrun:ls("Transition","TransitionRun"),transitionstart:ls("Transition","TransitionStart"),transitioncancel:ls("Transition","TransitionCancel"),transitionend:ls("Transition","TransitionEnd")},Ui={},Vi={};Vs&&(Vi=document.createElement("div").style,"AnimationEvent"in window||(delete Ci.animationend.animation,delete Ci.animationiteration.animation,delete Ci.animationstart.animation),"TransitionEvent"in window||delete Ci.transitionend.transition);function ts(e){if(Ui[e])return Ui[e];if(!Ci[e])return e;var s=Ci[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in Vi)return Ui[e]=s[o];return e}var Yi=ts("animationend"),na=ts("animationiteration"),Pc=ts("animationstart"),Gd=ts("transitionrun"),qd=ts("transitionstart"),Kd=ts("transitioncancel"),Qp=ts("transitionend"),Zp=new Map,Qd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qd.push("scrollEnd");function Wi(e,s){Zp.set(e,s),An(s,[e])}var Hc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ki=[],Br=0,Zd=0;function Uc(){for(var e=Br,s=Zd=Br=0;s<e;){var o=ki[s];ki[s++]=null;var r=ki[s];ki[s++]=null;var f=ki[s];ki[s++]=null;var m=ki[s];if(ki[s++]=null,r!==null&&f!==null){var w=r.pending;w===null?f.next=f:(f.next=w.next,w.next=f),r.pending=f}m!==0&&Jp(o,f,m)}}function Vc(e,s,o,r){ki[Br++]=e,ki[Br++]=s,ki[Br++]=o,ki[Br++]=r,Zd|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Jd(e,s,o,r){return Vc(e,s,o,r),Yc(e)}function cr(e,s){return Vc(e,null,null,s),Yc(e)}function Jp(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-he(o),e=m.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Yc(e){if(50<Gl)throw Gl=0,ch=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var Lr={};function p2(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,s,o,r){return new p2(e,s,o,r)}function ef(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fa(e,s){var o=e.alternate;return o===null?(o=hi(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function e_(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Wc(e,s,o,r,f,m){var w=0;if(r=e,typeof e=="function")ef(e)&&(w=1);else if(typeof e=="string")w=bv(e,o,le.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case me:return e=hi(31,o,s,f),e.elementType=me,e.lanes=m,e;case j:return ur(o.children,f,m,s);case M:w=8,f|=24;break;case T:return e=hi(12,o,s,f|2),e.elementType=T,e.lanes=m,e;case F:return e=hi(13,o,s,f),e.elementType=F,e.lanes=m,e;case U:return e=hi(19,o,s,f),e.elementType=U,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:w=10;break e;case L:w=9;break e;case A:w=11;break e;case W:w=14;break e;case Q:w=16,r=null;break e}w=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=hi(w,o,s,f),s.elementType=e,s.type=r,s.lanes=m,s}function ur(e,s,o,r){return e=hi(7,e,r,s),e.lanes=o,e}function tf(e,s,o){return e=hi(6,e,null,s),e.lanes=o,e}function t_(e){var s=hi(18,null,null,0);return s.stateNode=e,s}function nf(e,s,o){return s=hi(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var n_=new WeakMap;function ji(e,s){if(typeof e=="object"&&e!==null){var o=n_.get(e);return o!==void 0?o:(s={value:e,source:s,stack:ie(s)},n_.set(e,s),s)}return{value:e,source:s,stack:ie(s)}}var Or=[],zr=0,Fc=null,Ml=0,Mi=[],Ei=0,Na=null,sa=1,oa="";function ha(e,s){Or[zr++]=Ml,Or[zr++]=Fc,Fc=e,Ml=s}function s_(e,s,o){Mi[Ei++]=sa,Mi[Ei++]=oa,Mi[Ei++]=Na,Na=e;var r=sa;e=oa;var f=32-he(r)-1;r&=~(1<<f),o+=1;var m=32-he(s)+f;if(30<m){var w=f-f%5;m=(r&(1<<w)-1).toString(32),r>>=w,f-=w,sa=1<<32-he(s)+f|o<<f|r,oa=m+e}else sa=1<<m|o<<f|r,oa=e}function sf(e){e.return!==null&&(ha(e,1),s_(e,1,0))}function of(e){for(;e===Fc;)Fc=Or[--zr],Or[zr]=null,Ml=Or[--zr],Or[zr]=null;for(;e===Na;)Na=Mi[--Ei],Mi[Ei]=null,oa=Mi[--Ei],Mi[Ei]=null,sa=Mi[--Ei],Mi[Ei]=null}function o_(e,s){Mi[Ei++]=sa,Mi[Ei++]=oa,Mi[Ei++]=Na,sa=s.id,oa=s.overflow,Na=e}var Eo=null,bs=null,En=!1,Ra=null,Ti=!1,af=Error(a(519));function Ba(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw El(ji(s,e)),af}function i_(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[Ft]=e,s[mn]=r,o){case"dialog":Sn("cancel",s),Sn("close",s);break;case"iframe":case"object":case"embed":Sn("load",s);break;case"video":case"audio":for(o=0;o<Kl.length;o++)Sn(Kl[o],s);break;case"source":Sn("error",s);break;case"img":case"image":case"link":Sn("error",s),Sn("load",s);break;case"details":Sn("toggle",s);break;case"input":Sn("invalid",s),$n(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Sn("invalid",s);break;case"textarea":Sn("invalid",s),ri(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||w0(s.textContent,o)?(r.popover!=null&&(Sn("beforetoggle",s),Sn("toggle",s)),r.onScroll!=null&&Sn("scroll",s),r.onScrollEnd!=null&&Sn("scrollend",s),r.onClick!=null&&(s.onclick=hs),s=!0):s=!1,s||Ba(e,!0)}function a_(e){for(Eo=e.return;Eo;)switch(Eo.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:Eo=Eo.return}}function $r(e){if(e!==Eo)return!1;if(!En)return a_(e),En=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||Ch(e.type,e.memoizedProps)),o=!o),o&&bs&&Ba(e),a_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));bs=D0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));bs=D0(e)}else s===27?(s=bs,Ga(e.type)?(e=Th,Th=null,bs=e):bs=s):bs=Eo?Di(e.stateNode.nextSibling):null;return!0}function dr(){bs=Eo=null,En=!1}function rf(){var e=Ra;return e!==null&&(oi===null?oi=e:oi.push.apply(oi,e),Ra=null),e}function El(e){Ra===null?Ra=[e]:Ra.push(e)}var lf=H(null),fr=null,ma=null;function La(e,s,o){ee(lf,s._currentValue),s._currentValue=o}function pa(e){e._currentValue=lf.current,ce(lf)}function cf(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function uf(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var w=f.child;m=m.firstContext;e:for(;m!==null;){var D=m;m=f;for(var G=0;G<s.length;G++)if(D.context===s[G]){m.lanes|=o,D=m.alternate,D!==null&&(D.lanes|=o),cf(m.return,o,e),r||(w=null);break e}m=D.next}}else if(f.tag===18){if(w=f.return,w===null)throw Error(a(341));w.lanes|=o,m=w.alternate,m!==null&&(m.lanes|=o),cf(w,o,e),w=null}else w=f.child;if(w!==null)w.return=f;else for(w=f;w!==null;){if(w===e){w=null;break}if(f=w.sibling,f!==null){f.return=w.return,w=f;break}w=w.return}f=w}}function Ir(e,s,o,r){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var w=f.alternate;if(w===null)throw Error(a(387));if(w=w.memoizedProps,w!==null){var D=f.type;ft(f.pendingProps.value,w.value)||(e!==null?e.push(D):e=[D])}}else if(f===ze.current){if(w=f.alternate,w===null)throw Error(a(387));w.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(tc):e=[tc])}f=f.return}e!==null&&uf(s,e,o,r),s.flags|=262144}function Xc(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hr(e){fr=e,ma=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function To(e){return r_(fr,e)}function Gc(e,s){return fr===null&&hr(e),r_(e,s)}function r_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},ma===null){if(e===null)throw Error(a(308));ma=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else ma=ma.next=s;return o}var _2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},g2=t.unstable_scheduleCallback,y2=t.unstable_NormalPriority,to={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function df(){return{controller:new _2,data:new Map,refCount:0}}function Tl(e){e.refCount--,e.refCount===0&&g2(y2,function(){e.controller.abort()})}var Al=null,ff=0,Pr=0,Hr=null;function x2(e,s){if(Al===null){var o=Al=[];ff=0,Pr=ph(),Hr={status:"pending",value:void 0,then:function(r){o.push(r)}}}return ff++,s.then(l_,l_),s}function l_(){if(--ff===0&&Al!==null){Hr!==null&&(Hr.status="fulfilled");var e=Al;Al=null,Pr=0,Hr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function b2(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var c_=I.S;I.S=function(e,s){Fg=ct(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&x2(e,s),c_!==null&&c_(e,s)};var mr=H(null);function hf(){var e=mr.current;return e!==null?e:cs.pooledCache}function qc(e,s){s===null?ee(mr,mr.current):ee(mr,s.pool)}function u_(){var e=hf();return e===null?null:{parent:to._currentValue,pool:e}}var Ur=Error(a(460)),mf=Error(a(474)),Kc=Error(a(542)),Qc={then:function(){}};function d_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function f_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(hs,hs),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,m_(e),e;default:if(typeof s.status=="string")s.then(hs,hs);else{if(e=cs,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,m_(e),e}throw _r=s,Ur}}function pr(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(_r=o,Ur):o}}var _r=null;function h_(){if(_r===null)throw Error(a(459));var e=_r;return _r=null,e}function m_(e){if(e===Ur||e===Kc)throw Error(a(483))}var Vr=null,Dl=0;function Zc(e){var s=Dl;return Dl+=1,Vr===null&&(Vr=[]),f_(Vr,e,s)}function Nl(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Jc(e,s){throw s.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function p_(e){function s(re,te){if(e){var _e=re.deletions;_e===null?(re.deletions=[te],re.flags|=16):_e.push(te)}}function o(re,te){if(!e)return null;for(;te!==null;)s(re,te),te=te.sibling;return null}function r(re){for(var te=new Map;re!==null;)re.key!==null?te.set(re.key,re):te.set(re.index,re),re=re.sibling;return te}function f(re,te){return re=fa(re,te),re.index=0,re.sibling=null,re}function m(re,te,_e){return re.index=_e,e?(_e=re.alternate,_e!==null?(_e=_e.index,_e<te?(re.flags|=67108866,te):_e):(re.flags|=67108866,te)):(re.flags|=1048576,te)}function w(re){return e&&re.alternate===null&&(re.flags|=67108866),re}function D(re,te,_e,Oe){return te===null||te.tag!==6?(te=tf(_e,re.mode,Oe),te.return=re,te):(te=f(te,_e),te.return=re,te)}function G(re,te,_e,Oe){var Pt=_e.type;return Pt===j?Ne(re,te,_e.props.children,Oe,_e.key):te!==null&&(te.elementType===Pt||typeof Pt=="object"&&Pt!==null&&Pt.$$typeof===Q&&pr(Pt)===te.type)?(te=f(te,_e.props),Nl(te,_e),te.return=re,te):(te=Wc(_e.type,_e.key,_e.props,null,re.mode,Oe),Nl(te,_e),te.return=re,te)}function ye(re,te,_e,Oe){return te===null||te.tag!==4||te.stateNode.containerInfo!==_e.containerInfo||te.stateNode.implementation!==_e.implementation?(te=nf(_e,re.mode,Oe),te.return=re,te):(te=f(te,_e.children||[]),te.return=re,te)}function Ne(re,te,_e,Oe,Pt){return te===null||te.tag!==7?(te=ur(_e,re.mode,Oe,Pt),te.return=re,te):(te=f(te,_e),te.return=re,te)}function Pe(re,te,_e){if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return te=tf(""+te,re.mode,_e),te.return=re,te;if(typeof te=="object"&&te!==null){switch(te.$$typeof){case C:return _e=Wc(te.type,te.key,te.props,null,re.mode,_e),Nl(_e,te),_e.return=re,_e;case k:return te=nf(te,re.mode,_e),te.return=re,te;case Q:return te=pr(te),Pe(re,te,_e)}if(fe(te)||we(te))return te=ur(te,re.mode,_e,null),te.return=re,te;if(typeof te.then=="function")return Pe(re,Zc(te),_e);if(te.$$typeof===O)return Pe(re,Gc(re,te),_e);Jc(re,te)}return null}function ve(re,te,_e,Oe){var Pt=te!==null?te.key:null;if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Pt!==null?null:D(re,te,""+_e,Oe);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case C:return _e.key===Pt?G(re,te,_e,Oe):null;case k:return _e.key===Pt?ye(re,te,_e,Oe):null;case Q:return _e=pr(_e),ve(re,te,_e,Oe)}if(fe(_e)||we(_e))return Pt!==null?null:Ne(re,te,_e,Oe,null);if(typeof _e.then=="function")return ve(re,te,Zc(_e),Oe);if(_e.$$typeof===O)return ve(re,te,Gc(re,_e),Oe);Jc(re,_e)}return null}function ke(re,te,_e,Oe,Pt){if(typeof Oe=="string"&&Oe!==""||typeof Oe=="number"||typeof Oe=="bigint")return re=re.get(_e)||null,D(te,re,""+Oe,Pt);if(typeof Oe=="object"&&Oe!==null){switch(Oe.$$typeof){case C:return re=re.get(Oe.key===null?_e:Oe.key)||null,G(te,re,Oe,Pt);case k:return re=re.get(Oe.key===null?_e:Oe.key)||null,ye(te,re,Oe,Pt);case Q:return Oe=pr(Oe),ke(re,te,_e,Oe,Pt)}if(fe(Oe)||we(Oe))return re=re.get(_e)||null,Ne(te,re,Oe,Pt,null);if(typeof Oe.then=="function")return ke(re,te,_e,Zc(Oe),Pt);if(Oe.$$typeof===O)return ke(re,te,_e,Gc(te,Oe),Pt);Jc(te,Oe)}return null}function Et(re,te,_e,Oe){for(var Pt=null,In=null,Lt=te,fn=te=0,jn=null;Lt!==null&&fn<_e.length;fn++){Lt.index>fn?(jn=Lt,Lt=null):jn=Lt.sibling;var Pn=ve(re,Lt,_e[fn],Oe);if(Pn===null){Lt===null&&(Lt=jn);break}e&&Lt&&Pn.alternate===null&&s(re,Lt),te=m(Pn,te,fn),In===null?Pt=Pn:In.sibling=Pn,In=Pn,Lt=jn}if(fn===_e.length)return o(re,Lt),En&&ha(re,fn),Pt;if(Lt===null){for(;fn<_e.length;fn++)Lt=Pe(re,_e[fn],Oe),Lt!==null&&(te=m(Lt,te,fn),In===null?Pt=Lt:In.sibling=Lt,In=Lt);return En&&ha(re,fn),Pt}for(Lt=r(Lt);fn<_e.length;fn++)jn=ke(Lt,re,fn,_e[fn],Oe),jn!==null&&(e&&jn.alternate!==null&&Lt.delete(jn.key===null?fn:jn.key),te=m(jn,te,fn),In===null?Pt=jn:In.sibling=jn,In=jn);return e&&Lt.forEach(function(Ja){return s(re,Ja)}),En&&ha(re,fn),Pt}function Yt(re,te,_e,Oe){if(_e==null)throw Error(a(151));for(var Pt=null,In=null,Lt=te,fn=te=0,jn=null,Pn=_e.next();Lt!==null&&!Pn.done;fn++,Pn=_e.next()){Lt.index>fn?(jn=Lt,Lt=null):jn=Lt.sibling;var Ja=ve(re,Lt,Pn.value,Oe);if(Ja===null){Lt===null&&(Lt=jn);break}e&&Lt&&Ja.alternate===null&&s(re,Lt),te=m(Ja,te,fn),In===null?Pt=Ja:In.sibling=Ja,In=Ja,Lt=jn}if(Pn.done)return o(re,Lt),En&&ha(re,fn),Pt;if(Lt===null){for(;!Pn.done;fn++,Pn=_e.next())Pn=Pe(re,Pn.value,Oe),Pn!==null&&(te=m(Pn,te,fn),In===null?Pt=Pn:In.sibling=Pn,In=Pn);return En&&ha(re,fn),Pt}for(Lt=r(Lt);!Pn.done;fn++,Pn=_e.next())Pn=ke(Lt,re,fn,Pn.value,Oe),Pn!==null&&(e&&Pn.alternate!==null&&Lt.delete(Pn.key===null?fn:Pn.key),te=m(Pn,te,fn),In===null?Pt=Pn:In.sibling=Pn,In=Pn);return e&&Lt.forEach(function(Dv){return s(re,Dv)}),En&&ha(re,fn),Pt}function os(re,te,_e,Oe){if(typeof _e=="object"&&_e!==null&&_e.type===j&&_e.key===null&&(_e=_e.props.children),typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case C:e:{for(var Pt=_e.key;te!==null;){if(te.key===Pt){if(Pt=_e.type,Pt===j){if(te.tag===7){o(re,te.sibling),Oe=f(te,_e.props.children),Oe.return=re,re=Oe;break e}}else if(te.elementType===Pt||typeof Pt=="object"&&Pt!==null&&Pt.$$typeof===Q&&pr(Pt)===te.type){o(re,te.sibling),Oe=f(te,_e.props),Nl(Oe,_e),Oe.return=re,re=Oe;break e}o(re,te);break}else s(re,te);te=te.sibling}_e.type===j?(Oe=ur(_e.props.children,re.mode,Oe,_e.key),Oe.return=re,re=Oe):(Oe=Wc(_e.type,_e.key,_e.props,null,re.mode,Oe),Nl(Oe,_e),Oe.return=re,re=Oe)}return w(re);case k:e:{for(Pt=_e.key;te!==null;){if(te.key===Pt)if(te.tag===4&&te.stateNode.containerInfo===_e.containerInfo&&te.stateNode.implementation===_e.implementation){o(re,te.sibling),Oe=f(te,_e.children||[]),Oe.return=re,re=Oe;break e}else{o(re,te);break}else s(re,te);te=te.sibling}Oe=nf(_e,re.mode,Oe),Oe.return=re,re=Oe}return w(re);case Q:return _e=pr(_e),os(re,te,_e,Oe)}if(fe(_e))return Et(re,te,_e,Oe);if(we(_e)){if(Pt=we(_e),typeof Pt!="function")throw Error(a(150));return _e=Pt.call(_e),Yt(re,te,_e,Oe)}if(typeof _e.then=="function")return os(re,te,Zc(_e),Oe);if(_e.$$typeof===O)return os(re,te,Gc(re,_e),Oe);Jc(re,_e)}return typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint"?(_e=""+_e,te!==null&&te.tag===6?(o(re,te.sibling),Oe=f(te,_e),Oe.return=re,re=Oe):(o(re,te),Oe=tf(_e,re.mode,Oe),Oe.return=re,re=Oe),w(re)):o(re,te)}return function(re,te,_e,Oe){try{Dl=0;var Pt=os(re,te,_e,Oe);return Vr=null,Pt}catch(Lt){if(Lt===Ur||Lt===Kc)throw Lt;var In=hi(29,Lt,null,re.mode);return In.lanes=Oe,In.return=re,In}finally{}}}var gr=p_(!0),__=p_(!1),Oa=!1;function pf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _f(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $a(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Wn&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Yc(e),Jp(e,null,o),s}return Vc(e,r,s,o),Yc(e)}function Rl(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,bt(e,o)}}function gf(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var w={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=w:m=m.next=w,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var yf=!1;function Bl(){if(yf){var e=Hr;if(e!==null)throw e}}function Ll(e,s,o,r){yf=!1;var f=e.updateQueue;Oa=!1;var m=f.firstBaseUpdate,w=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var G=D,ye=G.next;G.next=null,w===null?m=ye:w.next=ye,w=G;var Ne=e.alternate;Ne!==null&&(Ne=Ne.updateQueue,D=Ne.lastBaseUpdate,D!==w&&(D===null?Ne.firstBaseUpdate=ye:D.next=ye,Ne.lastBaseUpdate=G))}if(m!==null){var Pe=f.baseState;w=0,Ne=ye=G=null,D=m;do{var ve=D.lane&-536870913,ke=ve!==D.lane;if(ke?(kn&ve)===ve:(r&ve)===ve){ve!==0&&ve===Pr&&(yf=!0),Ne!==null&&(Ne=Ne.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var Et=e,Yt=D;ve=s;var os=o;switch(Yt.tag){case 1:if(Et=Yt.payload,typeof Et=="function"){Pe=Et.call(os,Pe,ve);break e}Pe=Et;break e;case 3:Et.flags=Et.flags&-65537|128;case 0:if(Et=Yt.payload,ve=typeof Et=="function"?Et.call(os,Pe,ve):Et,ve==null)break e;Pe=b({},Pe,ve);break e;case 2:Oa=!0}}ve=D.callback,ve!==null&&(e.flags|=64,ke&&(e.flags|=8192),ke=f.callbacks,ke===null?f.callbacks=[ve]:ke.push(ve))}else ke={lane:ve,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Ne===null?(ye=Ne=ke,G=Pe):Ne=Ne.next=ke,w|=ve;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;ke=D,D=ke.next,ke.next=null,f.lastBaseUpdate=ke,f.shared.pending=null}}while(!0);Ne===null&&(G=Pe),f.baseState=G,f.firstBaseUpdate=ye,f.lastBaseUpdate=Ne,m===null&&(f.shared.lanes=0),Va|=w,e.lanes=w,e.memoizedState=Pe}}function g_(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function y_(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)g_(o[e],s)}var Yr=H(null),eu=H(0);function x_(e,s){e=Ca,ee(eu,e),ee(Yr,s),Ca=e|s.baseLanes}function xf(){ee(eu,Ca),ee(Yr,Yr.current)}function bf(){Ca=eu.current,ce(Yr),ce(eu)}var mi=H(null),Ai=null;function Ia(e){var s=e.alternate;ee(Gs,Gs.current&1),ee(mi,e),Ai===null&&(s===null||Yr.current!==null||s.memoizedState!==null)&&(Ai=e)}function vf(e){ee(Gs,Gs.current),ee(mi,e),Ai===null&&(Ai=e)}function b_(e){e.tag===22?(ee(Gs,Gs.current),ee(mi,e),Ai===null&&(Ai=e)):Pa()}function Pa(){ee(Gs,Gs.current),ee(mi,mi.current)}function pi(e){ce(mi),Ai===e&&(Ai=null),ce(Gs)}var Gs=H(0);function tu(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Mh(o)||Eh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var _a=0,ln=null,ns=null,no=null,nu=!1,Wr=!1,yr=!1,su=0,Ol=0,Fr=null,v2=0;function zs(){throw Error(a(321))}function wf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!ft(e[o],s[o]))return!1;return!0}function Sf(e,s,o,r,f,m){return _a=m,ln=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,I.H=e===null||e.memoizedState===null?sg:$f,yr=!1,m=o(r,f),yr=!1,Wr&&(m=w_(s,o,r,f)),v_(e),m}function v_(e){I.H=Il;var s=ns!==null&&ns.next!==null;if(_a=0,no=ns=ln=null,nu=!1,Ol=0,Fr=null,s)throw Error(a(300));e===null||so||(e=e.dependencies,e!==null&&Xc(e)&&(so=!0))}function w_(e,s,o,r){ln=e;var f=0;do{if(Wr&&(Fr=null),Ol=0,Wr=!1,25<=f)throw Error(a(301));if(f+=1,no=ns=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=og,m=s(o,r)}while(Wr);return m}function w2(){var e=I.H,s=e.useState()[0];return s=typeof s.then=="function"?zl(s):s,e=e.useState()[0],(ns!==null?ns.memoizedState:null)!==e&&(ln.flags|=1024),s}function Cf(){var e=su!==0;return su=0,e}function kf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function jf(e){if(nu){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}nu=!1}_a=0,no=ns=ln=null,Wr=!1,Ol=su=0,Fr=null}function Wo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return no===null?ln.memoizedState=no=e:no=no.next=e,no}function qs(){if(ns===null){var e=ln.alternate;e=e!==null?e.memoizedState:null}else e=ns.next;var s=no===null?ln.memoizedState:no.next;if(s!==null)no=s,ns=e;else{if(e===null)throw ln.alternate===null?Error(a(467)):Error(a(310));ns=e,e={memoizedState:ns.memoizedState,baseState:ns.baseState,baseQueue:ns.baseQueue,queue:ns.queue,next:null},no===null?ln.memoizedState=no=e:no=no.next=e}return no}function ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zl(e){var s=Ol;return Ol+=1,Fr===null&&(Fr=[]),e=f_(Fr,e,s),s=ln,(no===null?s.memoizedState:no.next)===null&&(s=s.alternate,I.H=s===null||s.memoizedState===null?sg:$f),e}function iu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return zl(e);if(e.$$typeof===O)return To(e)}throw Error(a(438,String(e)))}function Mf(e){var s=null,o=ln.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=ln.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=ou(),ln.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=se;return s.index++,o}function ga(e,s){return typeof s=="function"?s(e):s}function au(e){var s=qs();return Ef(s,ns,e)}function Ef(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,m=r.pending;if(m!==null){if(f!==null){var w=f.next;f.next=m.next,m.next=w}s.baseQueue=f=m,r.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var D=w=null,G=null,ye=s,Ne=!1;do{var Pe=ye.lane&-536870913;if(Pe!==ye.lane?(kn&Pe)===Pe:(_a&Pe)===Pe){var ve=ye.revertLane;if(ve===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null}),Pe===Pr&&(Ne=!0);else if((_a&ve)===ve){ye=ye.next,ve===Pr&&(Ne=!0);continue}else Pe={lane:0,revertLane:ye.revertLane,gesture:null,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null},G===null?(D=G=Pe,w=m):G=G.next=Pe,ln.lanes|=ve,Va|=ve;Pe=ye.action,yr&&o(m,Pe),m=ye.hasEagerState?ye.eagerState:o(m,Pe)}else ve={lane:Pe,revertLane:ye.revertLane,gesture:ye.gesture,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null},G===null?(D=G=ve,w=m):G=G.next=ve,ln.lanes|=Pe,Va|=Pe;ye=ye.next}while(ye!==null&&ye!==s);if(G===null?w=m:G.next=D,!ft(m,e.memoizedState)&&(so=!0,Ne&&(o=Hr,o!==null)))throw o;e.memoizedState=m,e.baseState=w,e.baseQueue=G,r.lastRenderedState=m}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Tf(e){var s=qs(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var w=f=f.next;do m=e(m,w.action),w=w.next;while(w!==f);ft(m,s.memoizedState)||(so=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function S_(e,s,o){var r=ln,f=qs(),m=En;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var w=!ft((ns||f).memoizedState,o);if(w&&(f.memoizedState=o,so=!0),f=f.queue,Nf(j_.bind(null,r,f,e),[e]),f.getSnapshot!==s||w||no!==null&&no.memoizedState.tag&1){if(r.flags|=2048,Xr(9,{destroy:void 0},k_.bind(null,r,f,o,s),null),cs===null)throw Error(a(349));m||(_a&127)!==0||C_(r,s,o)}return o}function C_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=ln.updateQueue,s===null?(s=ou(),ln.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function k_(e,s,o,r){s.value=o,s.getSnapshot=r,M_(s)&&E_(e)}function j_(e,s,o){return o(function(){M_(s)&&E_(e)})}function M_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!ft(e,o)}catch{return!0}}function E_(e){var s=cr(e,2);s!==null&&ii(s,e,2)}function Af(e){var s=Wo();if(typeof e=="function"){var o=e;if(e=o(),yr){Te(!0);try{o()}finally{Te(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:e},s}function T_(e,s,o,r){return e.baseState=o,Ef(e,ns,typeof r=="function"?r:ga)}function S2(e,s,o,r,f){if(cu(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){m.listeners.push(w)}};I.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,A_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function A_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var m=I.T,w={};I.T=w;try{var D=o(f,r),G=I.S;G!==null&&G(w,D),D_(e,s,D)}catch(ye){Df(e,s,ye)}finally{m!==null&&w.types!==null&&(m.types=w.types),I.T=m}}else try{m=o(f,r),D_(e,s,m)}catch(ye){Df(e,s,ye)}}function D_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){N_(e,s,r)},function(r){return Df(e,s,r)}):N_(e,s,o)}function N_(e,s,o){s.status="fulfilled",s.value=o,R_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,A_(e,o)))}function Df(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,R_(s),s=s.next;while(s!==r)}e.action=null}function R_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function B_(e,s){return s}function L_(e,s){if(En){var o=cs.formState;if(o!==null){e:{var r=ln;if(En){if(bs){t:{for(var f=bs,m=Ti;f.nodeType!==8;){if(!m){f=null;break t}if(f=Di(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){bs=Di(f.nextSibling),r=f.data==="F!";break e}}Ba(r)}r=!1}r&&(s=o[0])}}return o=Wo(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:B_,lastRenderedState:s},o.queue=r,o=eg.bind(null,ln,r),r.dispatch=o,r=Af(!1),m=zf.bind(null,ln,!1,r.queue),r=Wo(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=S2.bind(null,ln,f,m,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function O_(e){var s=qs();return z_(s,ns,e)}function z_(e,s,o){if(s=Ef(e,s,B_)[0],e=au(ga)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=zl(s)}catch(w){throw w===Ur?Kc:w}else r=s;s=qs();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(ln.flags|=2048,Xr(9,{destroy:void 0},C2.bind(null,f,o),null)),[r,m,e]}function C2(e,s){e.action=s}function $_(e){var s=qs(),o=ns;if(o!==null)return z_(s,o,e);qs(),s=s.memoizedState,o=qs();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function Xr(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=ln.updateQueue,s===null&&(s=ou(),ln.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function I_(){return qs().memoizedState}function ru(e,s,o,r){var f=Wo();ln.flags|=e,f.memoizedState=Xr(1|s,{destroy:void 0},o,r===void 0?null:r)}function lu(e,s,o,r){var f=qs();r=r===void 0?null:r;var m=f.memoizedState.inst;ns!==null&&r!==null&&wf(r,ns.memoizedState.deps)?f.memoizedState=Xr(s,m,o,r):(ln.flags|=e,f.memoizedState=Xr(1|s,m,o,r))}function P_(e,s){ru(8390656,8,e,s)}function Nf(e,s){lu(2048,8,e,s)}function k2(e){ln.flags|=4;var s=ln.updateQueue;if(s===null)s=ou(),ln.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function H_(e){var s=qs().memoizedState;return k2({ref:s,nextImpl:e}),function(){if((Wn&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function U_(e,s){return lu(4,2,e,s)}function V_(e,s){return lu(4,4,e,s)}function Y_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function W_(e,s,o){o=o!=null?o.concat([e]):null,lu(4,4,Y_.bind(null,s,e),o)}function Rf(){}function F_(e,s){var o=qs();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&wf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function X_(e,s){var o=qs();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&wf(s,r[1]))return r[0];if(r=e(),yr){Te(!0);try{e()}finally{Te(!1)}}return o.memoizedState=[r,s],r}function Bf(e,s,o){return o===void 0||(_a&1073741824)!==0&&(kn&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=Gg(),ln.lanes|=e,Va|=e,o)}function G_(e,s,o,r){return ft(o,s)?o:Yr.current!==null?(e=Bf(e,o,r),ft(e,s)||(so=!0),e):(_a&42)===0||(_a&1073741824)!==0&&(kn&261930)===0?(so=!0,e.memoizedState=o):(e=Gg(),ln.lanes|=e,Va|=e,s)}function q_(e,s,o,r,f){var m=ue.p;ue.p=m!==0&&8>m?m:8;var w=I.T,D={};I.T=D,zf(e,!1,s,o);try{var G=f(),ye=I.S;if(ye!==null&&ye(D,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var Ne=b2(G,r);$l(e,s,Ne,yi(e))}else $l(e,s,r,yi(e))}catch(Pe){$l(e,s,{then:function(){},status:"rejected",reason:Pe},yi())}finally{ue.p=m,w!==null&&D.types!==null&&(w.types=D.types),I.T=w}}function j2(){}function Lf(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=K_(e).queue;q_(e,f,s,X,o===null?j2:function(){return Q_(e),o(r)})}function K_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:X},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function Q_(e){var s=K_(e);s.next===null&&(s=e.alternate.memoizedState),$l(e,s.next.queue,{},yi())}function Of(){return To(tc)}function Z_(){return qs().memoizedState}function J_(){return qs().memoizedState}function M2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=yi();e=za(o);var r=$a(s,e,o);r!==null&&(ii(r,s,o),Rl(r,s,o)),s={cache:df()},e.payload=s;return}s=s.return}}function E2(e,s,o){var r=yi();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},cu(e)?tg(s,o):(o=Jd(e,s,o,r),o!==null&&(ii(o,e,r),ng(o,s,r)))}function eg(e,s,o){var r=yi();$l(e,s,o,r)}function $l(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(cu(e))tg(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var w=s.lastRenderedState,D=m(w,o);if(f.hasEagerState=!0,f.eagerState=D,ft(D,w))return Vc(e,s,f,0),cs===null&&Uc(),!1}catch{}finally{}if(o=Jd(e,s,f,r),o!==null)return ii(o,e,r),ng(o,s,r),!0}return!1}function zf(e,s,o,r){if(r={lane:2,revertLane:ph(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},cu(e)){if(s)throw Error(a(479))}else s=Jd(e,o,r,2),s!==null&&ii(s,e,2)}function cu(e){var s=e.alternate;return e===ln||s!==null&&s===ln}function tg(e,s){Wr=nu=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function ng(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,bt(e,o)}}var Il={readContext:To,use:iu,useCallback:zs,useContext:zs,useEffect:zs,useImperativeHandle:zs,useLayoutEffect:zs,useInsertionEffect:zs,useMemo:zs,useReducer:zs,useRef:zs,useState:zs,useDebugValue:zs,useDeferredValue:zs,useTransition:zs,useSyncExternalStore:zs,useId:zs,useHostTransitionStatus:zs,useFormState:zs,useActionState:zs,useOptimistic:zs,useMemoCache:zs,useCacheRefresh:zs};Il.useEffectEvent=zs;var sg={readContext:To,use:iu,useCallback:function(e,s){return Wo().memoizedState=[e,s===void 0?null:s],e},useContext:To,useEffect:P_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,ru(4194308,4,Y_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return ru(4194308,4,e,s)},useInsertionEffect:function(e,s){ru(4,2,e,s)},useMemo:function(e,s){var o=Wo();s=s===void 0?null:s;var r=e();if(yr){Te(!0);try{e()}finally{Te(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=Wo();if(o!==void 0){var f=o(s);if(yr){Te(!0);try{o(s)}finally{Te(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=E2.bind(null,ln,e),[r.memoizedState,e]},useRef:function(e){var s=Wo();return e={current:e},s.memoizedState=e},useState:function(e){e=Af(e);var s=e.queue,o=eg.bind(null,ln,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Rf,useDeferredValue:function(e,s){var o=Wo();return Bf(o,e,s)},useTransition:function(){var e=Af(!1);return e=q_.bind(null,ln,e.queue,!0,!1),Wo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=ln,f=Wo();if(En){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),cs===null)throw Error(a(349));(kn&127)!==0||C_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,P_(j_.bind(null,r,m,e),[e]),r.flags|=2048,Xr(9,{destroy:void 0},k_.bind(null,r,m,o,s),null),o},useId:function(){var e=Wo(),s=cs.identifierPrefix;if(En){var o=oa,r=sa;o=(r&~(1<<32-he(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=su++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=v2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Of,useFormState:L_,useActionState:L_,useOptimistic:function(e){var s=Wo();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=zf.bind(null,ln,!0,o),o.dispatch=s,[e,s]},useMemoCache:Mf,useCacheRefresh:function(){return Wo().memoizedState=M2.bind(null,ln)},useEffectEvent:function(e){var s=Wo(),o={impl:e};return s.memoizedState=o,function(){if((Wn&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},$f={readContext:To,use:iu,useCallback:F_,useContext:To,useEffect:Nf,useImperativeHandle:W_,useInsertionEffect:U_,useLayoutEffect:V_,useMemo:X_,useReducer:au,useRef:I_,useState:function(){return au(ga)},useDebugValue:Rf,useDeferredValue:function(e,s){var o=qs();return G_(o,ns.memoizedState,e,s)},useTransition:function(){var e=au(ga)[0],s=qs().memoizedState;return[typeof e=="boolean"?e:zl(e),s]},useSyncExternalStore:S_,useId:Z_,useHostTransitionStatus:Of,useFormState:O_,useActionState:O_,useOptimistic:function(e,s){var o=qs();return T_(o,ns,e,s)},useMemoCache:Mf,useCacheRefresh:J_};$f.useEffectEvent=H_;var og={readContext:To,use:iu,useCallback:F_,useContext:To,useEffect:Nf,useImperativeHandle:W_,useInsertionEffect:U_,useLayoutEffect:V_,useMemo:X_,useReducer:Tf,useRef:I_,useState:function(){return Tf(ga)},useDebugValue:Rf,useDeferredValue:function(e,s){var o=qs();return ns===null?Bf(o,e,s):G_(o,ns.memoizedState,e,s)},useTransition:function(){var e=Tf(ga)[0],s=qs().memoizedState;return[typeof e=="boolean"?e:zl(e),s]},useSyncExternalStore:S_,useId:Z_,useHostTransitionStatus:Of,useFormState:$_,useActionState:$_,useOptimistic:function(e,s){var o=qs();return ns!==null?T_(o,ns,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Mf,useCacheRefresh:J_};og.useEffectEvent=H_;function If(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:b({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Pf={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=yi(),f=za(r);f.payload=s,o!=null&&(f.callback=o),s=$a(e,f,r),s!==null&&(ii(s,e,r),Rl(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=yi(),f=za(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=$a(e,f,r),s!==null&&(ii(s,e,r),Rl(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=yi(),r=za(o);r.tag=2,s!=null&&(r.callback=s),s=$a(e,r,o),s!==null&&(ii(s,e,o),Rl(s,e,o))}};function ig(e,s,o,r,f,m,w){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,m,w):s.prototype&&s.prototype.isPureReactComponent?!ut(o,r)||!ut(f,m):!0}function ag(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&Pf.enqueueReplaceState(s,s.state,null)}function xr(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=b({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function rg(e){Hc(e)}function lg(e){console.error(e)}function cg(e){Hc(e)}function uu(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function ug(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Hf(e,s,o){return o=za(o),o.tag=3,o.payload={element:null},o.callback=function(){uu(e,s)},o}function dg(e){return e=za(e),e.tag=3,e}function fg(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;e.payload=function(){return f(m)},e.callback=function(){ug(s,o,r)}}var w=o.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(e.callback=function(){ug(s,o,r),typeof f!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var D=r.stack;this.componentDidCatch(r.value,{componentStack:D!==null?D:""})})}function T2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&Ir(s,o,f,!0),o=mi.current,o!==null){switch(o.tag){case 31:case 13:return Ai===null?wu():o.alternate===null&&$s===0&&($s=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),fh(e,r,f)),!1;case 22:return o.flags|=65536,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),fh(e,r,f)),!1}throw Error(a(435,o.tag))}return fh(e,r,f),wu(),!1}if(En)return s=mi.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==af&&(e=Error(a(422),{cause:r}),El(ji(e,o)))):(r!==af&&(s=Error(a(423),{cause:r}),El(ji(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=ji(r,o),f=Hf(e.stateNode,r,f),gf(e,f),$s!==4&&($s=2)),!1;var m=Error(a(520),{cause:r});if(m=ji(m,o),Xl===null?Xl=[m]:Xl.push(m),$s!==4&&($s=2),s===null)return!0;r=ji(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=Hf(o.stateNode,r,e),gf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ya===null||!Ya.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=dg(f),fg(f,e,o,r),gf(o,f),!1}o=o.return}while(o!==null);return!1}var Uf=Error(a(461)),so=!1;function Ao(e,s,o,r){s.child=e===null?__(s,null,o,r):gr(s,e.child,o,r)}function hg(e,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var w={};for(var D in r)D!=="ref"&&(w[D]=r[D])}else w=r;return hr(s),r=Sf(e,s,o,w,m,f),D=Cf(),e!==null&&!so?(kf(e,s,f),ya(e,s,f)):(En&&D&&sf(s),s.flags|=1,Ao(e,s,r,f),s.child)}function mg(e,s,o,r,f){if(e===null){var m=o.type;return typeof m=="function"&&!ef(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,pg(e,s,m,r,f)):(e=Wc(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Kf(e,f)){var w=m.memoizedProps;if(o=o.compare,o=o!==null?o:ut,o(w,r)&&e.ref===s.ref)return ya(e,s,f)}return s.flags|=1,e=fa(m,r),e.ref=s.ref,e.return=s,s.child=e}function pg(e,s,o,r,f){if(e!==null){var m=e.memoizedProps;if(ut(m,r)&&e.ref===s.ref)if(so=!1,s.pendingProps=r=m,Kf(e,f))(e.flags&131072)!==0&&(so=!0);else return s.lanes=e.lanes,ya(e,s,f)}return Vf(e,s,o,r,f)}function _g(e,s,o,r){var f=r.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return gg(e,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&qc(s,m!==null?m.cachePool:null),m!==null?x_(s,m):xf(),b_(s);else return r=s.lanes=536870912,gg(e,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(qc(s,m.cachePool),x_(s,m),Pa(),s.memoizedState=null):(e!==null&&qc(s,null),xf(),Pa());return Ao(e,s,f,o),s.child}function Pl(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function gg(e,s,o,r,f){var m=hf();return m=m===null?null:{parent:to._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&qc(s,null),xf(),b_(s),e!==null&&Ir(e,s,r,!0),s.childLanes=f,null}function du(e,s){return s=hu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function yg(e,s,o){return gr(s,e.child,null,o),e=du(s,s.pendingProps),e.flags|=2,pi(s),s.memoizedState=null,e}function A2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(En){if(r.mode==="hidden")return e=du(s,r),s.lanes=536870912,Pl(null,e);if(vf(s),(e=bs)?(e=A0(e,Ti),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Na!==null?{id:sa,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},o=t_(e),o.return=s,s.child=o,Eo=s,bs=null)):e=null,e===null)throw Ba(s);return s.lanes=536870912,null}return du(s,r)}var m=e.memoizedState;if(m!==null){var w=m.dehydrated;if(vf(s),f)if(s.flags&256)s.flags&=-257,s=yg(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(so||Ir(e,s,o,!1),f=(o&e.childLanes)!==0,so||f){if(r=cs,r!==null&&(w=Ht(r,o),w!==0&&w!==m.retryLane))throw m.retryLane=w,cr(e,w),ii(r,e,w),Uf;wu(),s=yg(e,s,o)}else e=m.treeContext,bs=Di(w.nextSibling),Eo=s,En=!0,Ra=null,Ti=!1,e!==null&&o_(s,e),s=du(s,r),s.flags|=4096;return s}return e=fa(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function fu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function Vf(e,s,o,r,f){return hr(s),o=Sf(e,s,o,r,void 0,f),r=Cf(),e!==null&&!so?(kf(e,s,f),ya(e,s,f)):(En&&r&&sf(s),s.flags|=1,Ao(e,s,o,f),s.child)}function xg(e,s,o,r,f,m){return hr(s),s.updateQueue=null,o=w_(s,r,o,f),v_(e),r=Cf(),e!==null&&!so?(kf(e,s,m),ya(e,s,m)):(En&&r&&sf(s),s.flags|=1,Ao(e,s,o,m),s.child)}function bg(e,s,o,r,f){if(hr(s),s.stateNode===null){var m=Lr,w=o.contextType;typeof w=="object"&&w!==null&&(m=To(w)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Pf,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},pf(s),w=o.contextType,m.context=typeof w=="object"&&w!==null?To(w):Lr,m.state=s.memoizedState,w=o.getDerivedStateFromProps,typeof w=="function"&&(If(s,o,w,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(w=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),w!==m.state&&Pf.enqueueReplaceState(m,m.state,null),Ll(s,r,m,f),Bl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){m=s.stateNode;var D=s.memoizedProps,G=xr(o,D);m.props=G;var ye=m.context,Ne=o.contextType;w=Lr,typeof Ne=="object"&&Ne!==null&&(w=To(Ne));var Pe=o.getDerivedStateFromProps;Ne=typeof Pe=="function"||typeof m.getSnapshotBeforeUpdate=="function",D=s.pendingProps!==D,Ne||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(D||ye!==w)&&ag(s,m,r,w),Oa=!1;var ve=s.memoizedState;m.state=ve,Ll(s,r,m,f),Bl(),ye=s.memoizedState,D||ve!==ye||Oa?(typeof Pe=="function"&&(If(s,o,Pe,r),ye=s.memoizedState),(G=Oa||ig(s,o,G,r,ve,ye,w))?(Ne||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=ye),m.props=r,m.state=ye,m.context=w,r=G):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,_f(e,s),w=s.memoizedProps,Ne=xr(o,w),m.props=Ne,Pe=s.pendingProps,ve=m.context,ye=o.contextType,G=Lr,typeof ye=="object"&&ye!==null&&(G=To(ye)),D=o.getDerivedStateFromProps,(ye=typeof D=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==Pe||ve!==G)&&ag(s,m,r,G),Oa=!1,ve=s.memoizedState,m.state=ve,Ll(s,r,m,f),Bl();var ke=s.memoizedState;w!==Pe||ve!==ke||Oa||e!==null&&e.dependencies!==null&&Xc(e.dependencies)?(typeof D=="function"&&(If(s,o,D,r),ke=s.memoizedState),(Ne=Oa||ig(s,o,Ne,r,ve,ke,G)||e!==null&&e.dependencies!==null&&Xc(e.dependencies))?(ye||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,ke,G),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,ke,G)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||w===e.memoizedProps&&ve===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&ve===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=ke),m.props=r,m.state=ke,m.context=G,r=Ne):(typeof m.componentDidUpdate!="function"||w===e.memoizedProps&&ve===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&ve===e.memoizedState||(s.flags|=1024),r=!1)}return m=r,fu(e,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&r?(s.child=gr(s,e.child,null,f),s.child=gr(s,null,o,f)):Ao(e,s,o,f),s.memoizedState=m.state,e=s.child):e=ya(e,s,f),e}function vg(e,s,o,r){return dr(),s.flags|=256,Ao(e,s,o,r),s.child}var Yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wf(e){return{baseLanes:e,cachePool:u_()}}function Ff(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=gi),e}function wg(e,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,w;if((w=m)||(w=e!==null&&e.memoizedState===null?!1:(Gs.current&2)!==0),w&&(f=!0,s.flags&=-129),w=(s.flags&32)!==0,s.flags&=-33,e===null){if(En){if(f?Ia(s):Pa(),(e=bs)?(e=A0(e,Ti),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Na!==null?{id:sa,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},o=t_(e),o.return=s,s.child=o,Eo=s,bs=null)):e=null,e===null)throw Ba(s);return Eh(e)?s.lanes=32:s.lanes=536870912,null}var D=r.children;return r=r.fallback,f?(Pa(),f=s.mode,D=hu({mode:"hidden",children:D},f),r=ur(r,f,o,null),D.return=s,r.return=s,D.sibling=r,s.child=D,r=s.child,r.memoizedState=Wf(o),r.childLanes=Ff(e,w,o),s.memoizedState=Yf,Pl(null,r)):(Ia(s),Xf(s,D))}var G=e.memoizedState;if(G!==null&&(D=G.dehydrated,D!==null)){if(m)s.flags&256?(Ia(s),s.flags&=-257,s=Gf(e,s,o)):s.memoizedState!==null?(Pa(),s.child=e.child,s.flags|=128,s=null):(Pa(),D=r.fallback,f=s.mode,r=hu({mode:"visible",children:r.children},f),D=ur(D,f,o,null),D.flags|=2,r.return=s,D.return=s,r.sibling=D,s.child=r,gr(s,e.child,null,o),r=s.child,r.memoizedState=Wf(o),r.childLanes=Ff(e,w,o),s.memoizedState=Yf,s=Pl(null,r));else if(Ia(s),Eh(D)){if(w=D.nextSibling&&D.nextSibling.dataset,w)var ye=w.dgst;w=ye,r=Error(a(419)),r.stack="",r.digest=w,El({value:r,source:null,stack:null}),s=Gf(e,s,o)}else if(so||Ir(e,s,o,!1),w=(o&e.childLanes)!==0,so||w){if(w=cs,w!==null&&(r=Ht(w,o),r!==0&&r!==G.retryLane))throw G.retryLane=r,cr(e,r),ii(w,e,r),Uf;Mh(D)||wu(),s=Gf(e,s,o)}else Mh(D)?(s.flags|=192,s.child=e.child,s=null):(e=G.treeContext,bs=Di(D.nextSibling),Eo=s,En=!0,Ra=null,Ti=!1,e!==null&&o_(s,e),s=Xf(s,r.children),s.flags|=4096);return s}return f?(Pa(),D=r.fallback,f=s.mode,G=e.child,ye=G.sibling,r=fa(G,{mode:"hidden",children:r.children}),r.subtreeFlags=G.subtreeFlags&65011712,ye!==null?D=fa(ye,D):(D=ur(D,f,o,null),D.flags|=2),D.return=s,r.return=s,r.sibling=D,s.child=r,Pl(null,r),r=s.child,D=e.child.memoizedState,D===null?D=Wf(o):(f=D.cachePool,f!==null?(G=to._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=u_(),D={baseLanes:D.baseLanes|o,cachePool:f}),r.memoizedState=D,r.childLanes=Ff(e,w,o),s.memoizedState=Yf,Pl(e.child,r)):(Ia(s),o=e.child,e=o.sibling,o=fa(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(w=s.deletions,w===null?(s.deletions=[e],s.flags|=16):w.push(e)),s.child=o,s.memoizedState=null,o)}function Xf(e,s){return s=hu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function hu(e,s){return e=hi(22,e,null,s),e.lanes=0,e}function Gf(e,s,o){return gr(s,e.child,null,o),e=Xf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function Sg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),cf(e.return,s,o)}function qf(e,s,o,r,f,m){var w=e.memoizedState;w===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(w.isBackwards=s,w.rendering=null,w.renderingStartTime=0,w.last=r,w.tail=o,w.tailMode=f,w.treeForkCount=m)}function Cg(e,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var w=Gs.current,D=(w&2)!==0;if(D?(w=w&1|2,s.flags|=128):w&=1,ee(Gs,w),Ao(e,s,r,o),r=En?Ml:0,!D&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sg(e,o,s);else if(e.tag===19)Sg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&tu(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),qf(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&tu(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}qf(s,!0,o,null,m,r);break;case"together":qf(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function ya(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),Va|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(Ir(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=fa(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=fa(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Kf(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Xc(e)))}function D2(e,s,o){switch(s.tag){case 3:et(s,s.stateNode.containerInfo),La(s,to,e.memoizedState.cache),dr();break;case 27:case 5:$t(s);break;case 4:et(s,s.stateNode.containerInfo);break;case 10:La(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,vf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(Ia(s),s.flags|=128,null):(o&s.child.childLanes)!==0?wg(e,s,o):(Ia(s),e=ya(e,s,o),e!==null?e.sibling:null);Ia(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(Ir(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return Cg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ee(Gs,Gs.current),r)break;return null;case 22:return s.lanes=0,_g(e,s,o,s.pendingProps);case 24:La(s,to,e.memoizedState.cache)}return ya(e,s,o)}function kg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)so=!0;else{if(!Kf(e,o)&&(s.flags&128)===0)return so=!1,D2(e,s,o);so=(e.flags&131072)!==0}else so=!1,En&&(s.flags&1048576)!==0&&s_(s,Ml,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=pr(s.elementType),s.type=e,typeof e=="function")ef(e)?(r=xr(e,r),s.tag=1,s=bg(null,s,e,r,o)):(s.tag=0,s=Vf(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===A){s.tag=11,s=hg(null,s,e,r,o);break e}else if(f===W){s.tag=14,s=mg(null,s,e,r,o);break e}}throw s=J(e)||e,Error(a(306,s,""))}}return s;case 0:return Vf(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=xr(r,s.pendingProps),bg(e,s,r,f,o);case 3:e:{if(et(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,_f(e,s),Ll(s,r,null,o);var w=s.memoizedState;if(r=w.cache,La(s,to,r),r!==m.cache&&uf(s,[to],o,!0),Bl(),r=w.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:w.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=vg(e,s,r,o);break e}else if(r!==f){f=ji(Error(a(424)),s),El(f),s=vg(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(bs=Di(e.firstChild),Eo=s,En=!0,Ra=null,Ti=!0,o=__(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(dr(),r===f){s=ya(e,s,o);break e}Ao(e,s,r,o)}s=s.child}return s;case 26:return fu(e,s),e===null?(o=O0(s.type,null,s.pendingProps,null))?s.memoizedState=o:En||(o=s.type,e=s.pendingProps,r=Tu(Ae.current).createElement(o),r[Ft]=s,r[mn]=e,Do(r,o,e),zn(r),s.stateNode=r):s.memoizedState=O0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return $t(s),e===null&&En&&(r=s.stateNode=R0(s.type,s.pendingProps,Ae.current),Eo=s,Ti=!0,f=bs,Ga(s.type)?(Th=f,bs=Di(r.firstChild)):bs=f),Ao(e,s,s.pendingProps.children,o),fu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&En&&((f=r=bs)&&(r=rv(r,s.type,s.pendingProps,Ti),r!==null?(s.stateNode=r,Eo=s,bs=Di(r.firstChild),Ti=!1,f=!0):f=!1),f||Ba(s)),$t(s),f=s.type,m=s.pendingProps,w=e!==null?e.memoizedProps:null,r=m.children,Ch(f,m)?r=null:w!==null&&Ch(f,w)&&(s.flags|=32),s.memoizedState!==null&&(f=Sf(e,s,w2,null,null,o),tc._currentValue=f),fu(e,s),Ao(e,s,r,o),s.child;case 6:return e===null&&En&&((e=o=bs)&&(o=lv(o,s.pendingProps,Ti),o!==null?(s.stateNode=o,Eo=s,bs=null,e=!0):e=!1),e||Ba(s)),null;case 13:return wg(e,s,o);case 4:return et(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=gr(s,null,r,o):Ao(e,s,r,o),s.child;case 11:return hg(e,s,s.type,s.pendingProps,o);case 7:return Ao(e,s,s.pendingProps,o),s.child;case 8:return Ao(e,s,s.pendingProps.children,o),s.child;case 12:return Ao(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,La(s,s.type,r.value),Ao(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,hr(s),f=To(f),r=r(f),s.flags|=1,Ao(e,s,r,o),s.child;case 14:return mg(e,s,s.type,s.pendingProps,o);case 15:return pg(e,s,s.type,s.pendingProps,o);case 19:return Cg(e,s,o);case 31:return A2(e,s,o);case 22:return _g(e,s,o,s.pendingProps);case 24:return hr(s),r=To(to),e===null?(f=hf(),f===null&&(f=cs,m=df(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},pf(s),La(s,to,f)):((e.lanes&o)!==0&&(_f(e,s),Ll(s,null,null,o),Bl()),f=e.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),La(s,to,r)):(r=m.cache,La(s,to,r),r!==f.cache&&uf(s,[to],o,!0))),Ao(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function xa(e){e.flags|=4}function Qf(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Zg())e.flags|=8192;else throw _r=Qc,mf}else e.flags&=-16777217}function jg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!H0(s))if(Zg())e.flags|=8192;else throw _r=Qc,mf}function mu(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?yt():536870912,e.lanes|=s,Qr|=s)}function Hl(e,s){if(!En)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function vs(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function N2(e,s,o){var r=s.pendingProps;switch(of(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vs(s),null;case 1:return vs(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),pa(to),$e(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&($r(s)?xa(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,rf())),vs(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(xa(s),m!==null?(vs(s),jg(s,m)):(vs(s),Qf(s,f,null,r,o))):m?m!==e.memoizedState?(xa(s),vs(s),jg(s,m)):(vs(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&xa(s),vs(s),Qf(s,f,e,r,o)),null;case 27:if(Nt(s),o=Ae.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&xa(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return vs(s),null}e=le.current,$r(s)?i_(s):(e=R0(f,r,o),s.stateNode=e,xa(s))}return vs(s),null;case 5:if(Nt(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&xa(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return vs(s),null}if(m=le.current,$r(s))i_(s);else{var w=Tu(Ae.current);switch(m){case 1:m=w.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=w.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=w.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=w.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=w.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?w.createElement("select",{is:r.is}):w.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?w.createElement(f,{is:r.is}):w.createElement(f)}}m[Ft]=s,m[mn]=r;e:for(w=s.child;w!==null;){if(w.tag===5||w.tag===6)m.appendChild(w.stateNode);else if(w.tag!==4&&w.tag!==27&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===s)break e;for(;w.sibling===null;){if(w.return===null||w.return===s)break e;w=w.return}w.sibling.return=w.return,w=w.sibling}s.stateNode=m;e:switch(Do(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&xa(s)}}return vs(s),Qf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&xa(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=Ae.current,$r(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=Eo,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[Ft]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||w0(e.nodeValue,o)),e||Ba(s,!0)}else e=Tu(e).createTextNode(r),e[Ft]=s,s.stateNode=e}return vs(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=$r(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Ft]=s}else dr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;vs(s),e=!1}else o=rf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(pi(s),s):(pi(s),null);if((s.flags&128)!==0)throw Error(a(558))}return vs(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=$r(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[Ft]=s}else dr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;vs(s),f=!1}else f=rf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(pi(s),s):(pi(s),null)}return pi(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),mu(s,s.updateQueue),vs(s),null);case 4:return $e(),e===null&&xh(s.stateNode.containerInfo),vs(s),null;case 10:return pa(s.type),vs(s),null;case 19:if(ce(Gs),r=s.memoizedState,r===null)return vs(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)Hl(r,!1);else{if($s!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=tu(e),m!==null){for(s.flags|=128,Hl(r,!1),e=m.updateQueue,s.updateQueue=e,mu(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)e_(o,e),o=o.sibling;return ee(Gs,Gs.current&1|2),En&&ha(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&ct()>xu&&(s.flags|=128,f=!0,Hl(r,!1),s.lanes=4194304)}else{if(!f)if(e=tu(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,mu(s,e),Hl(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!En)return vs(s),null}else 2*ct()-r.renderingStartTime>xu&&o!==536870912&&(s.flags|=128,f=!0,Hl(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(e=r.last,e!==null?e.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ct(),e.sibling=null,o=Gs.current,ee(Gs,f?o&1|2:o&1),En&&ha(s,r.treeForkCount),e):(vs(s),null);case 22:case 23:return pi(s),bf(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(vs(s),s.subtreeFlags&6&&(s.flags|=8192)):vs(s),o=s.updateQueue,o!==null&&mu(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&ce(mr),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),pa(to),vs(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function R2(e,s){switch(of(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return pa(to),$e(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return Nt(s),null;case 31:if(s.memoizedState!==null){if(pi(s),s.alternate===null)throw Error(a(340));dr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(pi(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));dr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return ce(Gs),null;case 4:return $e(),null;case 10:return pa(s.type),null;case 22:case 23:return pi(s),bf(),e!==null&&ce(mr),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return pa(to),null;case 25:return null;default:return null}}function Mg(e,s){switch(of(s),s.tag){case 3:pa(to),$e();break;case 26:case 27:case 5:Nt(s);break;case 4:$e();break;case 31:s.memoizedState!==null&&pi(s);break;case 13:pi(s);break;case 19:ce(Gs);break;case 10:pa(s.type);break;case 22:case 23:pi(s),bf(),e!==null&&ce(mr);break;case 24:pa(to)}}function Ul(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var m=o.create,w=o.inst;r=m(),w.destroy=r}o=o.next}while(o!==f)}}catch(D){Qn(s,s.return,D)}}function Ha(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&e)===e){var w=r.inst,D=w.destroy;if(D!==void 0){w.destroy=void 0,f=s;var G=o,ye=D;try{ye()}catch(Ne){Qn(f,G,Ne)}}}r=r.next}while(r!==m)}}catch(Ne){Qn(s,s.return,Ne)}}function Eg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{y_(s,o)}catch(r){Qn(e,e.return,r)}}}function Tg(e,s,o){o.props=xr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){Qn(e,s,r)}}function Vl(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){Qn(e,s,f)}}function ia(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Qn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Qn(e,s,f)}else o.current=null}function Ag(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Qn(e,e.return,f)}}function Zf(e,s,o){try{var r=e.stateNode;tv(r,e.type,o,s),r[mn]=s}catch(f){Qn(e,e.return,f)}}function Dg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function Jf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eh(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=hs));else if(r!==4&&(r===27&&Ga(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(eh(e,s,o),e=e.sibling;e!==null;)eh(e,s,o),e=e.sibling}function pu(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&Ga(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(pu(e,s,o),e=e.sibling;e!==null;)pu(e,s,o),e=e.sibling}function Ng(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Do(s,r,o),s[Ft]=e,s[mn]=o}catch(m){Qn(e,e.return,m)}}var ba=!1,oo=!1,th=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,wo=null;function B2(e,s){if(e=e.containerInfo,wh=Ou,e=vn(e),Nn(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var w=0,D=-1,G=-1,ye=0,Ne=0,Pe=e,ve=null;t:for(;;){for(var ke;Pe!==o||f!==0&&Pe.nodeType!==3||(D=w+f),Pe!==m||r!==0&&Pe.nodeType!==3||(G=w+r),Pe.nodeType===3&&(w+=Pe.nodeValue.length),(ke=Pe.firstChild)!==null;)ve=Pe,Pe=ke;for(;;){if(Pe===e)break t;if(ve===o&&++ye===f&&(D=w),ve===m&&++Ne===r&&(G=w),(ke=Pe.nextSibling)!==null)break;Pe=ve,ve=Pe.parentNode}Pe=ke}o=D===-1||G===-1?null:{start:D,end:G}}else o=null}o=o||{start:0,end:0}}else o=null;for(Sh={focusedElem:e,selectionRange:o},Ou=!1,wo=s;wo!==null;)if(s=wo,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,wo=e;else for(;wo!==null;){switch(s=wo,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var Et=xr(o.type,f);e=r.getSnapshotBeforeUpdate(Et,m),r.__reactInternalSnapshotBeforeUpdate=e}catch(Yt){Qn(o,o.return,Yt)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)jh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,wo=e;break}wo=s.return}}function Bg(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:wa(e,o),r&4&&Ul(5,o);break;case 1:if(wa(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(w){Qn(o,o.return,w)}else{var f=xr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(w){Qn(o,o.return,w)}}r&64&&Eg(o),r&512&&Vl(o,o.return);break;case 3:if(wa(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{y_(e,s)}catch(w){Qn(o,o.return,w)}}break;case 27:s===null&&r&4&&Ng(o);case 26:case 5:wa(e,o),s===null&&r&4&&Ag(o),r&512&&Vl(o,o.return);break;case 12:wa(e,o);break;case 31:wa(e,o),r&4&&zg(e,o);break;case 13:wa(e,o),r&4&&$g(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=V2.bind(null,o),cv(e,o))));break;case 22:if(r=o.memoizedState!==null||ba,!r){s=s!==null&&s.memoizedState!==null||oo,f=ba;var m=oo;ba=r,(oo=s)&&!m?Sa(e,o,(o.subtreeFlags&8772)!==0):wa(e,o),ba=f,oo=m}break;case 30:break;default:wa(e,o)}}function Lg(e){var s=e.alternate;s!==null&&(e.alternate=null,Lg(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&Gn(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ms=null,ti=!1;function va(e,s,o){for(o=o.child;o!==null;)Og(e,s,o),o=o.sibling}function Og(e,s,o){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(Je,o)}catch{}switch(o.tag){case 26:oo||ia(o,s),va(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:oo||ia(o,s);var r=Ms,f=ti;Ga(o.type)&&(Ms=o.stateNode,ti=!1),va(e,s,o),Zl(o.stateNode),Ms=r,ti=f;break;case 5:oo||ia(o,s);case 6:if(r=Ms,f=ti,Ms=null,va(e,s,o),Ms=r,ti=f,Ms!==null)if(ti)try{(Ms.nodeType===9?Ms.body:Ms.nodeName==="HTML"?Ms.ownerDocument.body:Ms).removeChild(o.stateNode)}catch(m){Qn(o,s,m)}else try{Ms.removeChild(o.stateNode)}catch(m){Qn(o,s,m)}break;case 18:Ms!==null&&(ti?(e=Ms,E0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),il(e)):E0(Ms,o.stateNode));break;case 4:r=Ms,f=ti,Ms=o.stateNode.containerInfo,ti=!0,va(e,s,o),Ms=r,ti=f;break;case 0:case 11:case 14:case 15:Ha(2,o,s),oo||Ha(4,o,s),va(e,s,o);break;case 1:oo||(ia(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Tg(o,s,r)),va(e,s,o);break;case 21:va(e,s,o);break;case 22:oo=(r=oo)||o.memoizedState!==null,va(e,s,o),oo=r;break;default:va(e,s,o)}}function zg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{il(e)}catch(o){Qn(s,s.return,o)}}}function $g(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{il(e)}catch(o){Qn(s,s.return,o)}}function L2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Rg),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Rg),s;default:throw Error(a(435,e.tag))}}function _u(e,s){var o=L2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=Y2.bind(null,e,r);r.then(f,f)}})}function ni(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=e,w=s,D=w;e:for(;D!==null;){switch(D.tag){case 27:if(Ga(D.type)){Ms=D.stateNode,ti=!1;break e}break;case 5:Ms=D.stateNode,ti=!1;break e;case 3:case 4:Ms=D.stateNode.containerInfo,ti=!0;break e}D=D.return}if(Ms===null)throw Error(a(160));Og(m,w,f),Ms=null,ti=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)Ig(s,e),s=s.sibling}var Fi=null;function Ig(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ni(s,e),si(e),r&4&&(Ha(3,e,e.return),Ul(3,e),Ha(5,e,e.return));break;case 1:ni(s,e),si(e),r&512&&(oo||o===null||ia(o,o.return)),r&64&&ba&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=Fi;if(ni(s,e),si(e),r&512&&(oo||o===null||ia(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[qt]||m[Ft]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),Do(m,r,o),m[Ft]=e,zn(m),r=m;break e;case"link":var w=I0("link","href",f).get(r+(o.href||""));if(w){for(var D=0;D<w.length;D++)if(m=w[D],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){w.splice(D,1);break t}}m=f.createElement(r),Do(m,r,o),f.head.appendChild(m);break;case"meta":if(w=I0("meta","content",f).get(r+(o.content||""))){for(D=0;D<w.length;D++)if(m=w[D],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){w.splice(D,1);break t}}m=f.createElement(r),Do(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[Ft]=e,zn(m),r=m}e.stateNode=r}else P0(f,e.type,e.stateNode);else e.stateNode=$0(f,r,e.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?P0(f,e.type,e.stateNode):$0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Zf(e,e.memoizedProps,o.memoizedProps)}break;case 27:ni(s,e),si(e),r&512&&(oo||o===null||ia(o,o.return)),o!==null&&r&4&&Zf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(ni(s,e),si(e),r&512&&(oo||o===null||ia(o,o.return)),e.flags&32){f=e.stateNode;try{$o(f,"")}catch(Et){Qn(e,e.return,Et)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,Zf(e,f,o!==null?o.memoizedProps:f)),r&1024&&(th=!0);break;case 6:if(ni(s,e),si(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(Et){Qn(e,e.return,Et)}}break;case 3:if(Nu=null,f=Fi,Fi=Au(s.containerInfo),ni(s,e),Fi=f,si(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{il(s.containerInfo)}catch(Et){Qn(e,e.return,Et)}th&&(th=!1,Pg(e));break;case 4:r=Fi,Fi=Au(e.stateNode.containerInfo),ni(s,e),si(e),Fi=r;break;case 12:ni(s,e),si(e);break;case 31:ni(s,e),si(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 13:ni(s,e),si(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(yu=ct()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 22:f=e.memoizedState!==null;var G=o!==null&&o.memoizedState!==null,ye=ba,Ne=oo;if(ba=ye||f,oo=Ne||G,ni(s,e),oo=Ne,ba=ye,si(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||G||ba||oo||br(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){G=o=s;try{if(m=G.stateNode,f)w=m.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{D=G.stateNode;var Pe=G.memoizedProps.style,ve=Pe!=null&&Pe.hasOwnProperty("display")?Pe.display:null;D.style.display=ve==null||typeof ve=="boolean"?"":(""+ve).trim()}}catch(Et){Qn(G,G.return,Et)}}}else if(s.tag===6){if(o===null){G=s;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(Et){Qn(G,G.return,Et)}}}else if(s.tag===18){if(o===null){G=s;try{var ke=G.stateNode;f?T0(ke,!0):T0(G.stateNode,!1)}catch(Et){Qn(G,G.return,Et)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,_u(e,o))));break;case 19:ni(s,e),si(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 30:break;case 21:break;default:ni(s,e),si(e)}}function si(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(Dg(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Jf(e);pu(e,m,f);break;case 5:var w=o.stateNode;o.flags&32&&($o(w,""),o.flags&=-33);var D=Jf(e);pu(e,D,w);break;case 3:case 4:var G=o.stateNode.containerInfo,ye=Jf(e);eh(e,ye,G);break;default:throw Error(a(161))}}catch(Ne){Qn(e,e.return,Ne)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Pg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;Pg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function wa(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Bg(e,s.alternate,s),s=s.sibling}function br(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:Ha(4,s,s.return),br(s);break;case 1:ia(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Tg(s,s.return,o),br(s);break;case 27:Zl(s.stateNode);case 26:case 5:ia(s,s.return),br(s);break;case 22:s.memoizedState===null&&br(s);break;case 30:br(s);break;default:br(s)}e=e.sibling}}function Sa(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,m=s,w=m.flags;switch(m.tag){case 0:case 11:case 15:Sa(f,m,o),Ul(4,m);break;case 1:if(Sa(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ye){Qn(r,r.return,ye)}if(r=m,f=r.updateQueue,f!==null){var D=r.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)g_(G[f],D)}catch(ye){Qn(r,r.return,ye)}}o&&w&64&&Eg(m),Vl(m,m.return);break;case 27:Ng(m);case 26:case 5:Sa(f,m,o),o&&r===null&&w&4&&Ag(m),Vl(m,m.return);break;case 12:Sa(f,m,o);break;case 31:Sa(f,m,o),o&&w&4&&zg(f,m);break;case 13:Sa(f,m,o),o&&w&4&&$g(f,m);break;case 22:m.memoizedState===null&&Sa(f,m,o),Vl(m,m.return);break;case 30:break;default:Sa(f,m,o)}s=s.sibling}}function nh(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&Tl(o))}function sh(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Tl(e))}function Xi(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Hg(e,s,o,r),s=s.sibling}function Hg(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Xi(e,s,o,r),f&2048&&Ul(9,s);break;case 1:Xi(e,s,o,r);break;case 3:Xi(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Tl(e)));break;case 12:if(f&2048){Xi(e,s,o,r),e=s.stateNode;try{var m=s.memoizedProps,w=m.id,D=m.onPostCommit;typeof D=="function"&&D(w,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Qn(s,s.return,G)}}else Xi(e,s,o,r);break;case 31:Xi(e,s,o,r);break;case 13:Xi(e,s,o,r);break;case 23:break;case 22:m=s.stateNode,w=s.alternate,s.memoizedState!==null?m._visibility&2?Xi(e,s,o,r):Yl(e,s):m._visibility&2?Xi(e,s,o,r):(m._visibility|=2,Gr(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&nh(w,s);break;case 24:Xi(e,s,o,r),f&2048&&sh(s.alternate,s);break;default:Xi(e,s,o,r)}}function Gr(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,w=s,D=o,G=r,ye=w.flags;switch(w.tag){case 0:case 11:case 15:Gr(m,w,D,G,f),Ul(8,w);break;case 23:break;case 22:var Ne=w.stateNode;w.memoizedState!==null?Ne._visibility&2?Gr(m,w,D,G,f):Yl(m,w):(Ne._visibility|=2,Gr(m,w,D,G,f)),f&&ye&2048&&nh(w.alternate,w);break;case 24:Gr(m,w,D,G,f),f&&ye&2048&&sh(w.alternate,w);break;default:Gr(m,w,D,G,f)}s=s.sibling}}function Yl(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:Yl(o,r),f&2048&&nh(r.alternate,r);break;case 24:Yl(o,r),f&2048&&sh(r.alternate,r);break;default:Yl(o,r)}s=s.sibling}}var Wl=8192;function qr(e,s,o){if(e.subtreeFlags&Wl)for(e=e.child;e!==null;)Ug(e,s,o),e=e.sibling}function Ug(e,s,o){switch(e.tag){case 26:qr(e,s,o),e.flags&Wl&&e.memoizedState!==null&&vv(o,Fi,e.memoizedState,e.memoizedProps);break;case 5:qr(e,s,o);break;case 3:case 4:var r=Fi;Fi=Au(e.stateNode.containerInfo),qr(e,s,o),Fi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Wl,Wl=16777216,qr(e,s,o),Wl=r):qr(e,s,o));break;default:qr(e,s,o)}}function Vg(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Fl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];wo=r,Wg(r,e)}Vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yg(e),e=e.sibling}function Yg(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,gu(e)):Fl(e);break;default:Fl(e)}}function gu(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];wo=r,Wg(r,e)}Vg(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:Ha(8,s,s.return),gu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,gu(s));break;default:gu(s)}e=e.sibling}}function Wg(e,s){for(;wo!==null;){var o=wo;switch(o.tag){case 0:case 11:case 15:Ha(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Tl(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,wo=r;else e:for(o=e;wo!==null;){r=wo;var f=r.sibling,m=r.return;if(Lg(r),r===o){wo=null;break e}if(f!==null){f.return=m,wo=f;break e}wo=m}}}var O2={getCacheForType:function(e){var s=To(to),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return To(to).controller.signal}},z2=typeof WeakMap=="function"?WeakMap:Map,Wn=0,cs=null,wn=null,kn=0,Kn=0,_i=null,Ua=!1,Kr=!1,oh=!1,Ca=0,$s=0,Va=0,vr=0,ih=0,gi=0,Qr=0,Xl=null,oi=null,ah=!1,yu=0,Fg=0,xu=1/0,bu=null,Ya=null,po=0,Wa=null,Zr=null,ka=0,rh=0,lh=null,Xg=null,Gl=0,ch=null;function yi(){return(Wn&2)!==0&&kn!==0?kn&-kn:I.T!==null?ph():Ln()}function Gg(){if(gi===0)if((kn&536870912)===0||En){var e=rt;rt<<=1,(rt&3932160)===0&&(rt=262144),gi=e}else gi=536870912;return e=mi.current,e!==null&&(e.flags|=32),gi}function ii(e,s,o){(e===cs&&(Kn===2||Kn===9)||e.cancelPendingCommit!==null)&&(Jr(e,0),Fa(e,kn,gi,!1)),at(e,o),((Wn&2)===0||e!==cs)&&(e===cs&&((Wn&2)===0&&(vr|=o),$s===4&&Fa(e,kn,gi,!1)),aa(e))}function qg(e,s,o){if((Wn&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||Bt(e,s),f=r?P2(e,s):dh(e,s,!0),m=r;do{if(f===0){Kr&&!r&&Fa(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!$2(o)){f=dh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var w=0;else w=e.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){s=w;e:{var D=e;f=Xl;var G=D.current.memoizedState.isDehydrated;if(G&&(Jr(D,w).flags|=256),w=dh(D,w,!1),w!==2){if(oh&&!G){D.errorRecoveryDisabledLanes|=m,vr|=m,f=4;break e}m=oi,oi=f,m!==null&&(oi===null?oi=m:oi.push.apply(oi,m))}f=w}if(m=!1,f!==2)continue}}if(f===1){Jr(e,0),Fa(e,s,0,!0);break}e:{switch(r=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Fa(r,s,gi,!Ua);break e;case 2:oi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=yu+300-ct(),10<f)){if(Fa(r,s,gi,!Ua),Qe(r,0,!0)!==0)break e;ka=s,r.timeoutHandle=j0(Kg.bind(null,r,o,oi,bu,ah,s,gi,vr,Qr,Ua,m,"Throttled",-0,0),f);break e}Kg(r,o,oi,bu,ah,s,gi,vr,Qr,Ua,m,null,-0,0)}}break}while(!0);aa(e)}function Kg(e,s,o,r,f,m,w,D,G,ye,Ne,Pe,ve,ke){if(e.timeoutHandle=-1,Pe=s.subtreeFlags,Pe&8192||(Pe&16785408)===16785408){Pe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:hs},Ug(s,m,Pe);var Et=(m&62914560)===m?yu-ct():(m&4194048)===m?Fg-ct():0;if(Et=wv(Pe,Et),Et!==null){ka=m,e.cancelPendingCommit=Et(o0.bind(null,e,s,m,o,r,f,w,D,G,Ne,Pe,null,ve,ke)),Fa(e,m,w,!ye);return}}o0(e,s,m,o,r,f,w,D,G)}function $2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!ft(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Fa(e,s,o,r){s&=~ih,s&=~vr,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var m=31-he(f),w=1<<m;r[m]=-1,f&=~w}o!==0&&Rt(e,o,s)}function vu(){return(Wn&6)===0?(ql(0),!1):!0}function uh(){if(wn!==null){if(Kn===0)var e=wn.return;else e=wn,ma=fr=null,jf(e),Vr=null,Dl=0,e=wn;for(;e!==null;)Mg(e.alternate,e),e=e.return;wn=null}}function Jr(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,ov(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),ka=0,uh(),cs=e,wn=o=fa(e.current,null),kn=s,Kn=0,_i=null,Ua=!1,Kr=Bt(e,s),oh=!1,Qr=gi=ih=vr=Va=$s=0,oi=Xl=null,ah=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-he(r),m=1<<f;s|=e[f],r&=~m}return Ca=s,Uc(),o}function Qg(e,s){ln=null,I.H=Il,s===Ur||s===Kc?(s=h_(),Kn=3):s===mf?(s=h_(),Kn=4):Kn=s===Uf?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,_i=s,wn===null&&($s=1,uu(e,ji(s,e.current)))}function Zg(){var e=mi.current;return e===null?!0:(kn&4194048)===kn?Ai===null:(kn&62914560)===kn||(kn&536870912)!==0?e===Ai:!1}function Jg(){var e=I.H;return I.H=Il,e===null?Il:e}function e0(){var e=I.A;return I.A=O2,e}function wu(){$s=4,Ua||(kn&4194048)!==kn&&mi.current!==null||(Kr=!0),(Va&134217727)===0&&(vr&134217727)===0||cs===null||Fa(cs,kn,gi,!1)}function dh(e,s,o){var r=Wn;Wn|=2;var f=Jg(),m=e0();(cs!==e||kn!==s)&&(bu=null,Jr(e,s)),s=!1;var w=$s;e:do try{if(Kn!==0&&wn!==null){var D=wn,G=_i;switch(Kn){case 8:uh(),w=6;break e;case 3:case 2:case 9:case 6:mi.current===null&&(s=!0);var ye=Kn;if(Kn=0,_i=null,el(e,D,G,ye),o&&Kr){w=0;break e}break;default:ye=Kn,Kn=0,_i=null,el(e,D,G,ye)}}I2(),w=$s;break}catch(Ne){Qg(e,Ne)}while(!0);return s&&e.shellSuspendCounter++,ma=fr=null,Wn=r,I.H=f,I.A=m,wn===null&&(cs=null,kn=0,Uc()),w}function I2(){for(;wn!==null;)t0(wn)}function P2(e,s){var o=Wn;Wn|=2;var r=Jg(),f=e0();cs!==e||kn!==s?(bu=null,xu=ct()+500,Jr(e,s)):Kr=Bt(e,s);e:do try{if(Kn!==0&&wn!==null){s=wn;var m=_i;t:switch(Kn){case 1:Kn=0,_i=null,el(e,s,m,1);break;case 2:case 9:if(d_(m)){Kn=0,_i=null,n0(s);break}s=function(){Kn!==2&&Kn!==9||cs!==e||(Kn=7),aa(e)},m.then(s,s);break e;case 3:Kn=7;break e;case 4:Kn=5;break e;case 7:d_(m)?(Kn=0,_i=null,n0(s)):(Kn=0,_i=null,el(e,s,m,7));break;case 5:var w=null;switch(wn.tag){case 26:w=wn.memoizedState;case 5:case 27:var D=wn;if(w?H0(w):D.stateNode.complete){Kn=0,_i=null;var G=D.sibling;if(G!==null)wn=G;else{var ye=D.return;ye!==null?(wn=ye,Su(ye)):wn=null}break t}}Kn=0,_i=null,el(e,s,m,5);break;case 6:Kn=0,_i=null,el(e,s,m,6);break;case 8:uh(),$s=6;break e;default:throw Error(a(462))}}H2();break}catch(Ne){Qg(e,Ne)}while(!0);return ma=fr=null,I.H=r,I.A=f,Wn=o,wn!==null?0:(cs=null,kn=0,Uc(),$s)}function H2(){for(;wn!==null&&!Ge();)t0(wn)}function t0(e){var s=kg(e.alternate,e,Ca);e.memoizedProps=e.pendingProps,s===null?Su(e):wn=s}function n0(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=xg(o,s,s.pendingProps,s.type,void 0,kn);break;case 11:s=xg(o,s,s.pendingProps,s.type.render,s.ref,kn);break;case 5:jf(s);default:Mg(o,s),s=wn=e_(s,Ca),s=kg(o,s,Ca)}e.memoizedProps=e.pendingProps,s===null?Su(e):wn=s}function el(e,s,o,r){ma=fr=null,jf(s),Vr=null,Dl=0;var f=s.return;try{if(T2(e,f,s,o,kn)){$s=1,uu(e,ji(o,e.current)),wn=null;return}}catch(m){if(f!==null)throw wn=f,m;$s=1,uu(e,ji(o,e.current)),wn=null;return}s.flags&32768?(En||r===1?e=!0:Kr||(kn&536870912)!==0?e=!1:(Ua=e=!0,(r===2||r===9||r===3||r===6)&&(r=mi.current,r!==null&&r.tag===13&&(r.flags|=16384))),s0(s,e)):Su(s)}function Su(e){var s=e;do{if((s.flags&32768)!==0){s0(s,Ua);return}e=s.return;var o=N2(s.alternate,s,Ca);if(o!==null){wn=o;return}if(s=s.sibling,s!==null){wn=s;return}wn=s=e}while(s!==null);$s===0&&($s=5)}function s0(e,s){do{var o=R2(e.alternate,e);if(o!==null){o.flags&=32767,wn=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){wn=e;return}wn=e=o}while(e!==null);$s=6,wn=null}function o0(e,s,o,r,f,m,w,D,G){e.cancelPendingCommit=null;do Cu();while(po!==0);if((Wn&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=Zd,jt(e,o,m,w,D,G),e===cs&&(wn=cs=null,kn=0),Zr=s,Wa=e,ka=o,rh=m,lh=f,Xg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,W2(st,function(){return c0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=I.T,I.T=null,f=ue.p,ue.p=2,w=Wn,Wn|=4;try{B2(e,s,o)}finally{Wn=w,ue.p=f,I.T=r}}po=1,i0(),a0(),r0()}}function i0(){if(po===1){po=0;var e=Wa,s=Zr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=I.T,I.T=null;var r=ue.p;ue.p=2;var f=Wn;Wn|=4;try{Ig(s,e);var m=Sh,w=vn(e.containerInfo),D=m.focusedElem,G=m.selectionRange;if(w!==D&&D&&D.ownerDocument&&yn(D.ownerDocument.documentElement,D)){if(G!==null&&Nn(D)){var ye=G.start,Ne=G.end;if(Ne===void 0&&(Ne=ye),"selectionStart"in D)D.selectionStart=ye,D.selectionEnd=Math.min(Ne,D.value.length);else{var Pe=D.ownerDocument||document,ve=Pe&&Pe.defaultView||window;if(ve.getSelection){var ke=ve.getSelection(),Et=D.textContent.length,Yt=Math.min(G.start,Et),os=G.end===void 0?Yt:Math.min(G.end,Et);!ke.extend&&Yt>os&&(w=os,os=Yt,Yt=w);var re=dn(D,Yt),te=dn(D,os);if(re&&te&&(ke.rangeCount!==1||ke.anchorNode!==re.node||ke.anchorOffset!==re.offset||ke.focusNode!==te.node||ke.focusOffset!==te.offset)){var _e=Pe.createRange();_e.setStart(re.node,re.offset),ke.removeAllRanges(),Yt>os?(ke.addRange(_e),ke.extend(te.node,te.offset)):(_e.setEnd(te.node,te.offset),ke.addRange(_e))}}}}for(Pe=[],ke=D;ke=ke.parentNode;)ke.nodeType===1&&Pe.push({element:ke,left:ke.scrollLeft,top:ke.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<Pe.length;D++){var Oe=Pe[D];Oe.element.scrollLeft=Oe.left,Oe.element.scrollTop=Oe.top}}Ou=!!wh,Sh=wh=null}finally{Wn=f,ue.p=r,I.T=o}}e.current=s,po=2}}function a0(){if(po===2){po=0;var e=Wa,s=Zr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=I.T,I.T=null;var r=ue.p;ue.p=2;var f=Wn;Wn|=4;try{Bg(e,s.alternate,s)}finally{Wn=f,ue.p=r,I.T=o}}po=3}}function r0(){if(po===4||po===3){po=0,lt();var e=Wa,s=Zr,o=ka,r=Xg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?po=5:(po=0,Zr=Wa=null,l0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ya=null),Bn(o),s=s.stateNode,qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(Je,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=I.T,f=ue.p,ue.p=2,I.T=null;try{for(var m=e.onRecoverableError,w=0;w<r.length;w++){var D=r[w];m(D.value,{componentStack:D.stack})}}finally{I.T=s,ue.p=f}}(ka&3)!==0&&Cu(),aa(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===ch?Gl++:(Gl=0,ch=e):Gl=0,ql(0)}}function l0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,Tl(s)))}function Cu(){return i0(),a0(),r0(),c0()}function c0(){if(po!==5)return!1;var e=Wa,s=rh;rh=0;var o=Bn(ka),r=I.T,f=ue.p;try{ue.p=32>o?32:o,I.T=null,o=lh,lh=null;var m=Wa,w=ka;if(po=0,Zr=Wa=null,ka=0,(Wn&6)!==0)throw Error(a(331));var D=Wn;if(Wn|=4,Yg(m.current),Hg(m,m.current,w,o),Wn=D,ql(0,!1),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(Je,m)}catch{}return!0}finally{ue.p=f,I.T=r,l0(e,s)}}function u0(e,s,o){s=ji(o,s),s=Hf(e.stateNode,s,2),e=$a(e,s,2),e!==null&&(at(e,2),aa(e))}function Qn(e,s,o){if(e.tag===3)u0(e,e,o);else for(;s!==null;){if(s.tag===3){u0(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ya===null||!Ya.has(r))){e=ji(o,e),o=dg(2),r=$a(s,o,2),r!==null&&(fg(o,r,s,e),at(r,2),aa(r));break}}s=s.return}}function fh(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new z2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(oh=!0,f.add(o),e=U2.bind(null,e,s,o),s.then(e,e))}function U2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,cs===e&&(kn&o)===o&&($s===4||$s===3&&(kn&62914560)===kn&&300>ct()-yu?(Wn&2)===0&&Jr(e,0):ih|=o,Qr===kn&&(Qr=0)),aa(e)}function d0(e,s){s===0&&(s=yt()),e=cr(e,s),e!==null&&(at(e,s),aa(e))}function V2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),d0(e,o)}function Y2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),d0(e,o)}function W2(e,s){return nt(e,s)}var ku=null,tl=null,hh=!1,ju=!1,mh=!1,Xa=0;function aa(e){e!==tl&&e.next===null&&(tl===null?ku=tl=e:tl=tl.next=e),ju=!0,hh||(hh=!0,X2())}function ql(e,s){if(!mh&&ju){mh=!0;do for(var o=!1,r=ku;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var w=r.suspendedLanes,D=r.pingedLanes;m=(1<<31-he(42|e)+1)-1,m&=f&~(w&~D),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,p0(r,m))}else m=kn,m=Qe(r,r===cs?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||Bt(r,m)||(o=!0,p0(r,m));r=r.next}while(o);mh=!1}}function F2(){f0()}function f0(){ju=hh=!1;var e=0;Xa!==0&&sv()&&(e=Xa);for(var s=ct(),o=null,r=ku;r!==null;){var f=r.next,m=h0(r,s);m===0?(r.next=null,o===null?ku=f:o.next=f,f===null&&(tl=o)):(o=r,(e!==0||(m&3)!==0)&&(ju=!0)),r=f}po!==0&&po!==5||ql(e),Xa!==0&&(Xa=0)}function h0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var w=31-he(m),D=1<<w,G=f[w];G===-1?((D&o)===0||(D&r)!==0)&&(f[w]=xt(D,s)):G<=s&&(e.expiredLanes|=D),m&=~D}if(s=cs,o=kn,o=Qe(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&(Kn===2||Kn===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Se(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||Bt(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&Se(r),Bn(o)){case 2:case 8:o=It;break;case 32:o=st;break;case 268435456:o=Z;break;default:o=st}return r=m0.bind(null,e),o=nt(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&Se(r),e.callbackPriority=2,e.callbackNode=null,2}function m0(e,s){if(po!==0&&po!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(Cu()&&e.callbackNode!==o)return null;var r=kn;return r=Qe(e,e===cs?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(qg(e,r,s),h0(e,ct()),e.callbackNode!=null&&e.callbackNode===o?m0.bind(null,e):null)}function p0(e,s){if(Cu())return null;qg(e,s,!0)}function X2(){iv(function(){(Wn&6)!==0?nt(pt,F2):f0()})}function ph(){if(Xa===0){var e=Pr;e===0&&(e=De,De<<=1,(De&261888)===0&&(De=256)),Xa=e}return Xa}function _0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Io(""+e)}function g0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function G2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=_0((f[mn]||null).action),w=r.submitter;w&&(s=(s=w[mn]||null)?_0(s.formAction):w.getAttribute("formAction"),s!==null&&(m=s,w=null));var D=new ui("action","action",null,r,f);e.push({event:D,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Xa!==0){var G=w?g0(f,w):new FormData(f);Lf(o,{pending:!0,data:G,method:f.method,action:m},null,G)}}else typeof m=="function"&&(D.preventDefault(),G=w?g0(f,w):new FormData(f),Lf(o,{pending:!0,data:G,method:f.method,action:m},m,G))},currentTarget:f}]})}}for(var _h=0;_h<Qd.length;_h++){var gh=Qd[_h],q2=gh.toLowerCase(),K2=gh[0].toUpperCase()+gh.slice(1);Wi(q2,"on"+K2)}Wi(Yi,"onAnimationEnd"),Wi(na,"onAnimationIteration"),Wi(Pc,"onAnimationStart"),Wi("dblclick","onDoubleClick"),Wi("focusin","onFocus"),Wi("focusout","onBlur"),Wi(Gd,"onTransitionRun"),Wi(qd,"onTransitionStart"),Wi(Kd,"onTransitionCancel"),Wi(Qp,"onTransitionEnd"),qn("onMouseEnter",["mouseout","mouseover"]),qn("onMouseLeave",["mouseout","mouseover"]),qn("onPointerEnter",["pointerout","pointerover"]),qn("onPointerLeave",["pointerout","pointerover"]),An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),An("onBeforeInput",["compositionend","keypress","textInput","paste"]),An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Kl));function y0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var w=r.length-1;0<=w;w--){var D=r[w],G=D.instance,ye=D.currentTarget;if(D=D.listener,G!==m&&f.isPropagationStopped())break e;m=D,f.currentTarget=ye;try{m(f)}catch(Ne){Hc(Ne)}f.currentTarget=null,m=G}else for(w=0;w<r.length;w++){if(D=r[w],G=D.instance,ye=D.currentTarget,D=D.listener,G!==m&&f.isPropagationStopped())break e;m=D,f.currentTarget=ye;try{m(f)}catch(Ne){Hc(Ne)}f.currentTarget=null,m=G}}}}function Sn(e,s){var o=s[_n];o===void 0&&(o=s[_n]=new Set);var r=e+"__bubble";o.has(r)||(x0(s,e,2,!1),o.add(r))}function yh(e,s,o){var r=0;s&&(r|=4),x0(o,e,r,s)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function xh(e){if(!e[Mu]){e[Mu]=!0,Bs.forEach(function(o){o!=="selectionchange"&&(Q2.has(o)||yh(o,!1,e),yh(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Mu]||(s[Mu]=!0,yh("selectionchange",!1,s))}}function x0(e,s,o,r){switch(G0(s)){case 2:var f=kv;break;case 8:f=jv;break;default:f=Bh}o=f.bind(null,s,o,e),f=void 0,!Ys||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function bh(e,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var w=r.tag;if(w===3||w===4){var D=r.stateNode.containerInfo;if(D===f)break;if(w===4)for(w=r.return;w!==null;){var G=w.tag;if((G===3||G===4)&&w.stateNode.containerInfo===f)return;w=w.return}for(;D!==null;){if(w=Tn(D),w===null)return;if(G=w.tag,G===5||G===6||G===26||G===27){r=m=w;continue e}D=D.parentNode}}r=r.return}Zs(function(){var ye=m,Ne=gn(o),Pe=[];e:{var ve=Zp.get(e);if(ve!==void 0){var ke=ui,Et=e;switch(e){case"keypress":if(Ws(o)===0)break e;case"keydown":case"keyup":ke=$;break;case"focusin":Et="focus",ke=Xs;break;case"focusout":Et="blur",ke=Xs;break;case"beforeblur":case"afterblur":ke=Xs;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=eo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=bo;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=Y;break;case Yi:case na:case Pc:ke=Zo;break;case Qp:ke=de;break;case"scroll":case"scrollend":ke=en;break;case"wheel":ke=dt;break;case"copy":case"cut":case"paste":ke=Jo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=S;break;case"toggle":case"beforetoggle":ke=vt}var Yt=(s&4)!==0,os=!Yt&&(e==="scroll"||e==="scrollend"),re=Yt?ve!==null?ve+"Capture":null:ve;Yt=[];for(var te=ye,_e;te!==null;){var Oe=te;if(_e=Oe.stateNode,Oe=Oe.tag,Oe!==5&&Oe!==26&&Oe!==27||_e===null||re===null||(Oe=rn(te,re),Oe!=null&&Yt.push(Ql(te,Oe,_e))),os)break;te=te.return}0<Yt.length&&(ve=new ke(ve,Et,null,o,Ne),Pe.push({event:ve,listeners:Yt}))}}if((s&7)===0){e:{if(ve=e==="mouseover"||e==="pointerover",ke=e==="mouseout"||e==="pointerout",ve&&o!==li&&(Et=o.relatedTarget||o.fromElement)&&(Tn(Et)||Et[it]))break e;if((ke||ve)&&(ve=Ne.window===Ne?Ne:(ve=Ne.ownerDocument)?ve.defaultView||ve.parentWindow:window,ke?(Et=o.relatedTarget||o.toElement,ke=ye,Et=Et?Tn(Et):null,Et!==null&&(os=u(Et),Yt=Et.tag,Et!==os||Yt!==5&&Yt!==27&&Yt!==6)&&(Et=null)):(ke=null,Et=ye),ke!==Et)){if(Yt=eo,Oe="onMouseLeave",re="onMouseEnter",te="mouse",(e==="pointerout"||e==="pointerover")&&(Yt=S,Oe="onPointerLeave",re="onPointerEnter",te="pointer"),os=ke==null?ve:Ss(ke),_e=Et==null?ve:Ss(Et),ve=new Yt(Oe,te+"leave",ke,o,Ne),ve.target=os,ve.relatedTarget=_e,Oe=null,Tn(Ne)===ye&&(Yt=new Yt(re,te+"enter",Et,o,Ne),Yt.target=_e,Yt.relatedTarget=os,Oe=Yt),os=Oe,ke&&Et)t:{for(Yt=Z2,re=ke,te=Et,_e=0,Oe=re;Oe;Oe=Yt(Oe))_e++;Oe=0;for(var Pt=te;Pt;Pt=Yt(Pt))Oe++;for(;0<_e-Oe;)re=Yt(re),_e--;for(;0<Oe-_e;)te=Yt(te),Oe--;for(;_e--;){if(re===te||te!==null&&re===te.alternate){Yt=re;break t}re=Yt(re),te=Yt(te)}Yt=null}else Yt=null;ke!==null&&b0(Pe,ve,ke,Yt,!1),Et!==null&&os!==null&&b0(Pe,os,Et,Yt,!0)}}e:{if(ve=ye?Ss(ye):window,ke=ve.nodeName&&ve.nodeName.toLowerCase(),ke==="select"||ke==="input"&&ve.type==="file")var In=P;else if(bn(ve))if(K)In=wt;else{In=Ve;var Lt=Ce}else ke=ve.nodeName,!ke||ke.toLowerCase()!=="input"||ve.type!=="checkbox"&&ve.type!=="radio"?ye&&Us(ye.elementType)&&(In=P):In=Ze;if(In&&(In=In(e,ye))){es(Pe,In,o,Ne);break e}Lt&&Lt(e,ve,ye),e==="focusout"&&ye&&ve.type==="number"&&ye.memoizedProps.value!=null&&uo(ve,"number",ve.value)}switch(Lt=ye?Ss(ye):window,e){case"focusin":(bn(Lt)||Lt.contentEditable==="true")&&(Xt=Lt,xs=ye,Rn=null);break;case"focusout":Rn=xs=Xt=null;break;case"mousedown":mo=!0;break;case"contextmenu":case"mouseup":case"dragend":mo=!1,Lo(Pe,o,Ne);break;case"selectionchange":if(Ut)break;case"keydown":case"keyup":Lo(Pe,o,Ne)}var fn;if(ht)e:{switch(e){case"compositionstart":var jn="onCompositionStart";break e;case"compositionend":jn="onCompositionEnd";break e;case"compositionupdate":jn="onCompositionUpdate";break e}jn=void 0}else Ns?Mn(e,o)&&(jn="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(jn="onCompositionStart");jn&&(gt&&o.locale!=="ko"&&(Ns||jn!=="onCompositionStart"?jn==="onCompositionEnd"&&Ns&&(fn=Uo()):(As=Ne,ci="value"in As?As.value:As.textContent,Ns=!0)),Lt=Eu(ye,jn),0<Lt.length&&(jn=new Ot(jn,e,null,o,Ne),Pe.push({event:jn,listeners:Lt}),fn?jn.data=fn:(fn=Jn(o),fn!==null&&(jn.data=fn)))),(fn=Qt?js(e,o):Rs(e,o))&&(jn=Eu(ye,"onBeforeInput"),0<jn.length&&(Lt=new Ot("onBeforeInput","beforeinput",null,o,Ne),Pe.push({event:Lt,listeners:jn}),Lt.data=fn)),G2(Pe,e,ye,o,Ne)}y0(Pe,s)})}function Ql(e,s,o){return{instance:e,listener:s,currentTarget:o}}function Eu(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=rn(e,o),f!=null&&r.unshift(Ql(e,f,m)),f=rn(e,s),f!=null&&r.push(Ql(e,f,m))),e.tag===3)return r;e=e.return}return[]}function Z2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function b0(e,s,o,r,f){for(var m=s._reactName,w=[];o!==null&&o!==r;){var D=o,G=D.alternate,ye=D.stateNode;if(D=D.tag,G!==null&&G===r)break;D!==5&&D!==26&&D!==27||ye===null||(G=ye,f?(ye=rn(o,m),ye!=null&&w.unshift(Ql(o,ye,G))):f||(ye=rn(o,m),ye!=null&&w.push(Ql(o,ye,G)))),o=o.return}w.length!==0&&e.push({event:s,listeners:w})}var J2=/\r\n?/g,ev=/\u0000|\uFFFD/g;function v0(e){return(typeof e=="string"?e:""+e).replace(J2,`
`).replace(ev,"")}function w0(e,s){return s=v0(s),v0(e)===s}function ss(e,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||$o(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&$o(e,""+r);break;case"className":Cn(e,"class",r);break;case"tabIndex":Cn(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Cn(e,o,r);break;case"style":$i(e,r,m);break;case"data":if(s!=="object"){Cn(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Io(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&ss(e,s,"name",f.name,f,null),ss(e,s,"formEncType",f.formEncType,f,null),ss(e,s,"formMethod",f.formMethod,f,null),ss(e,s,"formTarget",f.formTarget,f,null)):(ss(e,s,"encType",f.encType,f,null),ss(e,s,"method",f.method,f,null),ss(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Io(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=hs);break;case"onScroll":r!=null&&Sn("scroll",e);break;case"onScrollEnd":r!=null&&Sn("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=Io(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":Sn("beforetoggle",e),Sn("toggle",e),ro(e,"popover",r);break;case"xlinkActuate":ds(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ds(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ds(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ds(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ds(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ds(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ds(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ds(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ds(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ro(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Ii.get(o)||o,ro(e,o,r))}}function vh(e,s,o,r,f,m){switch(o){case"style":$i(e,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?$o(e,r):(typeof r=="number"||typeof r=="bigint")&&$o(e,""+r);break;case"onScroll":r!=null&&Sn("scroll",e);break;case"onScrollEnd":r!=null&&Sn("scrollend",e);break;case"onClick":r!=null&&(e.onclick=hs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ls.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[mn]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):ro(e,o,r)}}}function Do(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Sn("error",e),Sn("load",e);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var w=o[m];if(w!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ss(e,s,m,w,o,null)}}f&&ss(e,s,"srcSet",o.srcSet,o,null),r&&ss(e,s,"src",o.src,o,null);return;case"input":Sn("invalid",e);var D=m=w=f=null,G=null,ye=null;for(r in o)if(o.hasOwnProperty(r)){var Ne=o[r];if(Ne!=null)switch(r){case"name":f=Ne;break;case"type":w=Ne;break;case"checked":G=Ne;break;case"defaultChecked":ye=Ne;break;case"value":m=Ne;break;case"defaultValue":D=Ne;break;case"children":case"dangerouslySetInnerHTML":if(Ne!=null)throw Error(a(137,s));break;default:ss(e,s,r,Ne,o,null)}}$n(e,m,D,G,ye,w,f,!1);return;case"select":Sn("invalid",e),r=w=m=null;for(f in o)if(o.hasOwnProperty(f)&&(D=o[f],D!=null))switch(f){case"value":m=D;break;case"defaultValue":w=D;break;case"multiple":r=D;default:ss(e,s,f,D,o,null)}s=m,o=w,e.multiple=!!r,s!=null?fs(e,!!r,s,!1):o!=null&&fs(e,!!r,o,!0);return;case"textarea":Sn("invalid",e),m=f=r=null;for(w in o)if(o.hasOwnProperty(w)&&(D=o[w],D!=null))switch(w){case"value":r=D;break;case"defaultValue":f=D;break;case"children":m=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(a(91));break;default:ss(e,s,w,D,o,null)}ri(e,r,f,m);return;case"option":for(G in o)if(o.hasOwnProperty(G)&&(r=o[G],r!=null))switch(G){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ss(e,s,G,r,o,null)}return;case"dialog":Sn("beforetoggle",e),Sn("toggle",e),Sn("cancel",e),Sn("close",e);break;case"iframe":case"object":Sn("load",e);break;case"video":case"audio":for(r=0;r<Kl.length;r++)Sn(Kl[r],e);break;case"image":Sn("error",e),Sn("load",e);break;case"details":Sn("toggle",e);break;case"embed":case"source":case"link":Sn("error",e),Sn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ye in o)if(o.hasOwnProperty(ye)&&(r=o[ye],r!=null))switch(ye){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ss(e,s,ye,r,o,null)}return;default:if(Us(s)){for(Ne in o)o.hasOwnProperty(Ne)&&(r=o[Ne],r!==void 0&&vh(e,s,Ne,r,o,void 0));return}}for(D in o)o.hasOwnProperty(D)&&(r=o[D],r!=null&&ss(e,s,D,r,o,null))}function tv(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,w=null,D=null,G=null,ye=null,Ne=null;for(ke in o){var Pe=o[ke];if(o.hasOwnProperty(ke)&&Pe!=null)switch(ke){case"checked":break;case"value":break;case"defaultValue":G=Pe;default:r.hasOwnProperty(ke)||ss(e,s,ke,null,r,Pe)}}for(var ve in r){var ke=r[ve];if(Pe=o[ve],r.hasOwnProperty(ve)&&(ke!=null||Pe!=null))switch(ve){case"type":m=ke;break;case"name":f=ke;break;case"checked":ye=ke;break;case"defaultChecked":Ne=ke;break;case"value":w=ke;break;case"defaultValue":D=ke;break;case"children":case"dangerouslySetInnerHTML":if(ke!=null)throw Error(a(137,s));break;default:ke!==Pe&&ss(e,s,ve,ke,r,Pe)}}co(e,w,D,G,ye,Ne,m,f);return;case"select":ke=w=D=ve=null;for(m in o)if(G=o[m],o.hasOwnProperty(m)&&G!=null)switch(m){case"value":break;case"multiple":ke=G;default:r.hasOwnProperty(m)||ss(e,s,m,null,r,G)}for(f in r)if(m=r[f],G=o[f],r.hasOwnProperty(f)&&(m!=null||G!=null))switch(f){case"value":ve=m;break;case"defaultValue":D=m;break;case"multiple":w=m;default:m!==G&&ss(e,s,f,m,r,G)}s=D,o=w,r=ke,ve!=null?fs(e,!!o,ve,!1):!!r!=!!o&&(s!=null?fs(e,!!o,s,!0):fs(e,!!o,o?[]:"",!1));return;case"textarea":ke=ve=null;for(D in o)if(f=o[D],o.hasOwnProperty(D)&&f!=null&&!r.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:ss(e,s,D,null,r,f)}for(w in r)if(f=r[w],m=o[w],r.hasOwnProperty(w)&&(f!=null||m!=null))switch(w){case"value":ve=f;break;case"defaultValue":ke=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&ss(e,s,w,f,r,m)}Xn(e,ve,ke);return;case"option":for(var Et in o)if(ve=o[Et],o.hasOwnProperty(Et)&&ve!=null&&!r.hasOwnProperty(Et))switch(Et){case"selected":e.selected=!1;break;default:ss(e,s,Et,null,r,ve)}for(G in r)if(ve=r[G],ke=o[G],r.hasOwnProperty(G)&&ve!==ke&&(ve!=null||ke!=null))switch(G){case"selected":e.selected=ve&&typeof ve!="function"&&typeof ve!="symbol";break;default:ss(e,s,G,ve,r,ke)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in o)ve=o[Yt],o.hasOwnProperty(Yt)&&ve!=null&&!r.hasOwnProperty(Yt)&&ss(e,s,Yt,null,r,ve);for(ye in r)if(ve=r[ye],ke=o[ye],r.hasOwnProperty(ye)&&ve!==ke&&(ve!=null||ke!=null))switch(ye){case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,s));break;default:ss(e,s,ye,ve,r,ke)}return;default:if(Us(s)){for(var os in o)ve=o[os],o.hasOwnProperty(os)&&ve!==void 0&&!r.hasOwnProperty(os)&&vh(e,s,os,void 0,r,ve);for(Ne in r)ve=r[Ne],ke=o[Ne],!r.hasOwnProperty(Ne)||ve===ke||ve===void 0&&ke===void 0||vh(e,s,Ne,ve,r,ke);return}}for(var re in o)ve=o[re],o.hasOwnProperty(re)&&ve!=null&&!r.hasOwnProperty(re)&&ss(e,s,re,null,r,ve);for(Pe in r)ve=r[Pe],ke=o[Pe],!r.hasOwnProperty(Pe)||ve===ke||ve==null&&ke==null||ss(e,s,Pe,ve,r,ke)}function S0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,w=f.initiatorType,D=f.duration;if(m&&D&&S0(w)){for(w=0,D=f.responseEnd,r+=1;r<o.length;r++){var G=o[r],ye=G.startTime;if(ye>D)break;var Ne=G.transferSize,Pe=G.initiatorType;Ne&&S0(Pe)&&(G=G.responseEnd,w+=Ne*(G<D?1:(D-ye)/(G-ye)))}if(--r,s+=8*(m+w)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wh=null,Sh=null;function Tu(e){return e.nodeType===9?e:e.ownerDocument}function C0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function k0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function Ch(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var kh=null;function sv(){var e=window.event;return e&&e.type==="popstate"?e===kh?!1:(kh=e,!0):(kh=null,!1)}var j0=typeof setTimeout=="function"?setTimeout:void 0,ov=typeof clearTimeout=="function"?clearTimeout:void 0,M0=typeof Promise=="function"?Promise:void 0,iv=typeof queueMicrotask=="function"?queueMicrotask:typeof M0<"u"?function(e){return M0.resolve(null).then(e).catch(av)}:j0;function av(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function E0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),il(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")Zl(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Zl(o);for(var m=o.firstChild;m;){var w=m.nextSibling,D=m.nodeName;m[qt]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=w}}else o==="body"&&Zl(e.ownerDocument.body);o=f}while(o);il(s)}function T0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function jh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":jh(o),Gn(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function rv(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[qt])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Di(e.nextSibling),e===null)break}return null}function lv(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Di(e.nextSibling),e===null))return null;return e}function A0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Di(e.nextSibling),e===null))return null;return e}function Mh(e){return e.data==="$?"||e.data==="$~"}function Eh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function cv(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Di(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var Th=null;function D0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return Di(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function N0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function R0(e,s,o){switch(s=Tu(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Zl(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);Gn(e)}var Ni=new Map,B0=new Set;function Au(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ja=ue.d;ue.d={f:uv,r:dv,D:fv,C:hv,L:mv,m:pv,X:gv,S:_v,M:yv};function uv(){var e=ja.f(),s=vu();return e||s}function dv(e){var s=_s(e);s!==null&&s.tag===5&&s.type==="form"?Q_(s):ja.r(e)}var nl=typeof document>"u"?null:document;function L0(e,s,o){var r=nl;if(r&&typeof s=="string"&&s){var f=Ts(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),B0.has(f)||(B0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),Do(s,"link",e),zn(s),r.head.appendChild(s)))}}function fv(e){ja.D(e),L0("dns-prefetch",e,null)}function hv(e,s){ja.C(e,s),L0("preconnect",e,s)}function mv(e,s,o){ja.L(e,s,o);var r=nl;if(r&&e&&s){var f='link[rel="preload"][as="'+Ts(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Ts(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Ts(o.imageSizes)+'"]')):f+='[href="'+Ts(e)+'"]';var m=f;switch(s){case"style":m=sl(e);break;case"script":m=ol(e)}Ni.has(m)||(e=b({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),Ni.set(m,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(Jl(m))||s==="script"&&r.querySelector(ec(m))||(s=r.createElement("link"),Do(s,"link",e),zn(s),r.head.appendChild(s)))}}function pv(e,s){ja.m(e,s);var o=nl;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Ts(r)+'"][href="'+Ts(e)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ol(e)}if(!Ni.has(m)&&(e=b({rel:"modulepreload",href:e},s),Ni.set(m,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(ec(m)))return}r=o.createElement("link"),Do(r,"link",e),zn(r),o.head.appendChild(r)}}}function _v(e,s,o){ja.S(e,s,o);var r=nl;if(r&&e){var f=Hn(r).hoistableStyles,m=sl(e);s=s||"default";var w=f.get(m);if(!w){var D={loading:0,preload:null};if(w=r.querySelector(Jl(m)))D.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":s},o),(o=Ni.get(m))&&Ah(e,o);var G=w=r.createElement("link");zn(G),Do(G,"link",e),G._p=new Promise(function(ye,Ne){G.onload=ye,G.onerror=Ne}),G.addEventListener("load",function(){D.loading|=1}),G.addEventListener("error",function(){D.loading|=2}),D.loading|=4,Du(w,s,r)}w={type:"stylesheet",instance:w,count:1,state:D},f.set(m,w)}}}function gv(e,s){ja.X(e,s);var o=nl;if(o&&e){var r=Hn(o).hoistableScripts,f=ol(e),m=r.get(f);m||(m=o.querySelector(ec(f)),m||(e=b({src:e,async:!0},s),(s=Ni.get(f))&&Dh(e,s),m=o.createElement("script"),zn(m),Do(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function yv(e,s){ja.M(e,s);var o=nl;if(o&&e){var r=Hn(o).hoistableScripts,f=ol(e),m=r.get(f);m||(m=o.querySelector(ec(f)),m||(e=b({src:e,async:!0,type:"module"},s),(s=Ni.get(f))&&Dh(e,s),m=o.createElement("script"),zn(m),Do(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function O0(e,s,o,r){var f=(f=Ae.current)?Au(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=sl(o.href),o=Hn(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=sl(o.href);var m=Hn(f).hoistableStyles,w=m.get(e);if(w||(f=f.ownerDocument||f,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,w),(m=f.querySelector(Jl(e)))&&!m._p&&(w.instance=m,w.state.loading=5),Ni.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Ni.set(e,o),m||xv(f,e,o,w.state))),s&&r===null)throw Error(a(528,""));return w}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=ol(o),o=Hn(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function sl(e){return'href="'+Ts(e)+'"'}function Jl(e){return'link[rel="stylesheet"]['+e+"]"}function z0(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function xv(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),Do(s,"link",o),zn(s),e.head.appendChild(s))}function ol(e){return'[src="'+Ts(e)+'"]'}function ec(e){return"script[async]"+e}function $0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+Ts(o.href)+'"]');if(r)return s.instance=r,zn(r),r;var f=b({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),zn(r),Do(r,"style",f),Du(r,o.precedence,e),s.instance=r;case"stylesheet":f=sl(o.href);var m=e.querySelector(Jl(f));if(m)return s.state.loading|=4,s.instance=m,zn(m),m;r=z0(o),(f=Ni.get(f))&&Ah(r,f),m=(e.ownerDocument||e).createElement("link"),zn(m);var w=m;return w._p=new Promise(function(D,G){w.onload=D,w.onerror=G}),Do(m,"link",r),s.state.loading|=4,Du(m,o.precedence,e),s.instance=m;case"script":return m=ol(o.src),(f=e.querySelector(ec(m)))?(s.instance=f,zn(f),f):(r=o,(f=Ni.get(m))&&(r=b({},o),Dh(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),zn(f),Do(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Du(r,o.precedence,e));return s.instance}function Du(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,w=0;w<r.length;w++){var D=r[w];if(D.dataset.precedence===s)m=D;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function Ah(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Dh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Nu=null;function I0(e,s,o){if(Nu===null){var r=new Map,f=Nu=new Map;f.set(o,r)}else f=Nu,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[qt]||m[Ft]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var w=m.getAttribute(s)||"";w=e+w;var D=r.get(w);D?D.push(m):r.set(w,[m])}}return r}function P0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function bv(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function H0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function vv(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=sl(r.href),m=s.querySelector(Jl(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Ru.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,zn(m);return}m=s.ownerDocument||s,r=z0(r),(f=Ni.get(f))&&Ah(r,f),m=m.createElement("link"),zn(m);var w=m;w._p=new Promise(function(D,G){w.onload=D,w.onerror=G}),Do(m,"link",r),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Ru.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Nh=0;function wv(e,s){return e.stylesheets&&e.count===0&&Lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Nh===0&&(Nh=62500*nv());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Nh?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bu=null;function Lu(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bu=new Map,s.forEach(Sv,e),Bu=null,Ru.call(e))}function Sv(e,s){if(!(s.state.loading&4)){var o=Bu.get(e);if(o)var r=o.get(null);else{o=new Map,Bu.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var w=f[m];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(o.set(w.dataset.precedence,w),r=w)}r&&o.set(null,r)}f=s.instance,w=f.getAttribute("data-precedence"),m=o.get(w)||r,m===r&&o.set(null,f),o.set(w,f),this.count++,r=Ru.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var tc={$$typeof:O,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function Cv(e,s,o,r,f,m,w,D,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zt(0),this.hiddenUpdates=Zt(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function U0(e,s,o,r,f,m,w,D,G,ye,Ne,Pe){return e=new Cv(e,s,o,w,G,ye,Ne,Pe,D),s=1,m===!0&&(s|=24),m=hi(3,null,null,s),e.current=m,m.stateNode=e,s=df(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},pf(m),e}function V0(e){return e?(e=Lr,e):Lr}function Y0(e,s,o,r,f,m){f=V0(f),r.context===null?r.context=f:r.pendingContext=f,r=za(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=$a(e,r,s),o!==null&&(ii(o,e,s),Rl(o,e,s))}function W0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Rh(e,s){W0(e,s),(e=e.alternate)&&W0(e,s)}function F0(e){if(e.tag===13||e.tag===31){var s=cr(e,67108864);s!==null&&ii(s,e,67108864),Rh(e,67108864)}}function X0(e){if(e.tag===13||e.tag===31){var s=yi();s=Gt(s);var o=cr(e,s);o!==null&&ii(o,e,s),Rh(e,s)}}var Ou=!0;function kv(e,s,o,r){var f=I.T;I.T=null;var m=ue.p;try{ue.p=2,Bh(e,s,o,r)}finally{ue.p=m,I.T=f}}function jv(e,s,o,r){var f=I.T;I.T=null;var m=ue.p;try{ue.p=8,Bh(e,s,o,r)}finally{ue.p=m,I.T=f}}function Bh(e,s,o,r){if(Ou){var f=Lh(r);if(f===null)bh(e,s,r,zu,o),q0(e,r);else if(Ev(f,e,s,o,r))r.stopPropagation();else if(q0(e,r),s&4&&-1<Mv.indexOf(e)){for(;f!==null;){var m=_s(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var w=Ct(m.pendingLanes);if(w!==0){var D=m;for(D.pendingLanes|=2,D.entangledLanes|=2;w;){var G=1<<31-he(w);D.entanglements[1]|=G,w&=~G}aa(m),(Wn&6)===0&&(xu=ct()+500,ql(0))}}break;case 31:case 13:D=cr(m,2),D!==null&&ii(D,m,2),vu(),Rh(m,2)}if(m=Lh(r),m===null&&bh(e,s,r,zu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else bh(e,s,r,null,o)}}function Lh(e){return e=gn(e),Oh(e)}var zu=null;function Oh(e){if(zu=null,e=Tn(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return zu=e,null}function G0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kt()){case pt:return 2;case It:return 8;case st:case V:return 32;case Z:return 268435456;default:return 32}default:return 32}}var zh=!1,qa=null,Ka=null,Qa=null,nc=new Map,sc=new Map,Za=[],Mv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q0(e,s){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":nc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":sc.delete(s.pointerId)}}function oc(e,s,o,r,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=_s(s),s!==null&&F0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function Ev(e,s,o,r,f){switch(s){case"focusin":return qa=oc(qa,e,s,o,r,f),!0;case"dragenter":return Ka=oc(Ka,e,s,o,r,f),!0;case"mouseover":return Qa=oc(Qa,e,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return nc.set(m,oc(nc.get(m)||null,e,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,sc.set(m,oc(sc.get(m)||null,e,s,o,r,f)),!0}return!1}function K0(e){var s=Tn(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,an(e.priority,function(){X0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,an(e.priority,function(){X0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $u(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Lh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);li=r,o.target.dispatchEvent(r),li=null}else return s=_s(o),s!==null&&F0(s),e.blockedOn=o,!1;s.shift()}return!0}function Q0(e,s,o){$u(e)&&o.delete(s)}function Tv(){zh=!1,qa!==null&&$u(qa)&&(qa=null),Ka!==null&&$u(Ka)&&(Ka=null),Qa!==null&&$u(Qa)&&(Qa=null),nc.forEach(Q0),sc.forEach(Q0)}function Iu(e,s){e.blockedOn===s&&(e.blockedOn=null,zh||(zh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Tv)))}var Pu=null;function Z0(e){Pu!==e&&(Pu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Pu===e&&(Pu=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if(Oh(r||o)===null)continue;break}var m=_s(o);m!==null&&(e.splice(s,3),s-=3,Lf(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function il(e){function s(G){return Iu(G,e)}qa!==null&&Iu(qa,e),Ka!==null&&Iu(Ka,e),Qa!==null&&Iu(Qa,e),nc.forEach(s),sc.forEach(s);for(var o=0;o<Za.length;o++){var r=Za[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Za.length&&(o=Za[0],o.blockedOn===null);)K0(o),o.blockedOn===null&&Za.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],w=f[mn]||null;if(typeof m=="function")w||Z0(o);else if(w){var D=null;if(m&&m.hasAttribute("formAction")){if(f=m,w=m[mn]||null)D=w.formAction;else if(Oh(f)!==null)continue}else D=w.action;typeof D=="function"?o[r+1]=D:(o.splice(r,3),r-=3),Z0(o)}}}function J0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(w){return f=w})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function $h(e){this._internalRoot=e}Hu.prototype.render=$h.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=yi();Y0(o,r,e,s,null,null)},Hu.prototype.unmount=$h.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;Y0(e.current,2,null,e,null,null),vu(),s[it]=null}};function Hu(e){this._internalRoot=e}Hu.prototype.unstable_scheduleHydration=function(e){if(e){var s=Ln();e={blockedOn:null,target:e,priority:s};for(var o=0;o<Za.length&&s!==0&&s<Za[o].priority;o++);Za.splice(o,0,e),o===0&&K0(e)}};var ey=n.version;if(ey!=="19.2.4")throw Error(a(527,ey,"19.2.4"));ue.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=y(s),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Av={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{Je=Uu.inject(Av),qe=Uu}catch{}}return ac.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=rg,m=lg,w=cg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError)),s=U0(e,1,!1,null,null,o,r,null,f,m,w,J0),e[it]=s.current,xh(e),new $h(s)},ac.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",m=rg,w=lg,D=cg,G=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(w=o.onCaughtError),o.onRecoverableError!==void 0&&(D=o.onRecoverableError),o.formState!==void 0&&(G=o.formState)),s=U0(e,1,!0,s,o!=null?o:null,r,f,G,m,w,D,J0),s.context=V0(null),o=s.current,r=yi(),r=Gt(r),f=za(r),f.callback=null,$a(o,f,r),o=r,s.current.lanes=o,at(s,o),aa(s),e[it]=s.current,xh(e),new Hu(s)},ac.version="19.2.4",ac}var uy;function Iv(){if(uy)return Ph.exports;uy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Ph.exports=$v(),Ph.exports}var Pv=Iv();const Hv=Ox(Pv);var _=up();const Uv=Ox(_);function Vv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Yv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var _d;const zi="__TAURI_TO_IPC_KEY__";function Wv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function Me(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Fv{get rid(){return Vv(this,_d,"f")}constructor(n){_d.set(this,void 0),Yv(this,_d,n)}async close(){return Me("plugin:resources|close",{rid:this.rid})}}_d=new WeakMap;var xi;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(xi||(xi={}));async function $x(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await Me("plugin:event|unlisten",{event:t,eventId:n})}async function xc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return Me("plugin:event|listen",{event:t,target:c,handler:Wv(n)}).then(u=>async()=>$x(t,u))}async function Xv(t,n,i){return xc(t,a=>{$x(t,a.id),n(a)},i)}async function Gv(t,n){await Me("plugin:event|emit",{event:t,payload:n})}async function qv(t,n,i){await Me("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class Ix{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new bc(this.width*n,this.height*n)}[zi](){return{width:this.width,height:this.height}}toJSON(){return this[zi]()}}class bc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Ix(this.width/n,this.height/n)}[zi](){return{width:this.width,height:this.height}}toJSON(){return this[zi]()}}class al{constructor(n){this.size=n}toLogical(n){return this.size instanceof Ix?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof bc?this.size:this.size.toPhysical(n)}[zi](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[zi]()}}class Px{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new or(this.x*n,this.y*n)}[zi](){return{x:this.x,y:this.y}}toJSON(){return this[zi]()}}class or{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Px(this.x/n,this.y/n)}[zi](){return{x:this.x,y:this.y}}toJSON(){return this[zi]()}}class Vu{constructor(n){this.position=n}toLogical(n){return this.position instanceof Px?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof or?this.position:this.position.toPhysical(n)}[zi](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[zi]()}}class vc extends Fv{constructor(n){super(n)}static async new(n,i,a){return Me("plugin:image|new",{rgba:Md(n),width:i,height:a}).then(c=>new vc(c))}static async fromBytes(n){return Me("plugin:image|from_bytes",{bytes:Md(n)}).then(i=>new vc(i))}static async fromPath(n){return Me("plugin:image|from_path",{path:n}).then(i=>new vc(i))}async rgba(){return Me("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return Me("plugin:image|size",{rid:this.rid})}}function Md(t){return t==null?null:typeof t=="string"?t:t instanceof vc?t.rid:t}var Em;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(Em||(Em={}));class Kv{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var dy;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(dy||(dy={}));function dp(){return new Hx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Wh(){return Me("plugin:window|get_all_windows").then(t=>t.map(n=>new Hx(n,{skip:!0})))}const Fh=["tauri://created","tauri://error"];class Hx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||Me("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Wh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return dp()}static async getAll(){return Wh()}static async getFocusedWindow(){for(const n of await Wh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:xc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Xv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Fh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Gv(n,i)}async emitTo(n,i,a){if(Fh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return qv(n,i,a)}_handleTauriEvent(n,i){return Fh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return Me("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return Me("plugin:window|inner_position",{label:this.label}).then(n=>new or(n))}async outerPosition(){return Me("plugin:window|outer_position",{label:this.label}).then(n=>new or(n))}async innerSize(){return Me("plugin:window|inner_size",{label:this.label}).then(n=>new bc(n))}async outerSize(){return Me("plugin:window|outer_size",{label:this.label}).then(n=>new bc(n))}async isFullscreen(){return Me("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return Me("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return Me("plugin:window|is_maximized",{label:this.label})}async isFocused(){return Me("plugin:window|is_focused",{label:this.label})}async isDecorated(){return Me("plugin:window|is_decorated",{label:this.label})}async isResizable(){return Me("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return Me("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return Me("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return Me("plugin:window|is_closable",{label:this.label})}async isVisible(){return Me("plugin:window|is_visible",{label:this.label})}async title(){return Me("plugin:window|title",{label:this.label})}async theme(){return Me("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return Me("plugin:window|is_always_on_top",{label:this.label})}async center(){return Me("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===Em.Critical?i={type:"Critical"}:i={type:"Informational"}),Me("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return Me("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return Me("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return Me("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return Me("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return Me("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return Me("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return Me("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return Me("plugin:window|maximize",{label:this.label})}async unmaximize(){return Me("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return Me("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return Me("plugin:window|minimize",{label:this.label})}async unminimize(){return Me("plugin:window|unminimize",{label:this.label})}async show(){return Me("plugin:window|show",{label:this.label})}async hide(){return Me("plugin:window|hide",{label:this.label})}async close(){return Me("plugin:window|close",{label:this.label})}async destroy(){return Me("plugin:window|destroy",{label:this.label})}async setDecorations(n){return Me("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return Me("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return Me("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return Me("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return Me("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return Me("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return Me("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return Me("plugin:window|set_size",{label:this.label,value:n instanceof al?n:new al(n)})}async setMinSize(n){return Me("plugin:window|set_min_size",{label:this.label,value:n instanceof al?n:n?new al(n):null})}async setMaxSize(n){return Me("plugin:window|set_max_size",{label:this.label,value:n instanceof al?n:n?new al(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return Me("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return Me("plugin:window|set_position",{label:this.label,value:n instanceof Vu?n:new Vu(n)})}async setFullscreen(n){return Me("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return Me("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return Me("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return Me("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return Me("plugin:window|set_icon",{label:this.label,value:Md(n)})}async setSkipTaskbar(n){return Me("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return Me("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return Me("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return Me("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return Me("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return Me("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Vu?n:new Vu(n)})}async setIgnoreCursorEvents(n){return Me("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return Me("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return Me("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return Me("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return Me("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return Me("plugin:window|set_overlay_icon",{label:this.label,value:n?Md(n):void 0})}async setProgressBar(n){return Me("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return Me("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return Me("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return Me("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(xi.WINDOW_RESIZED,i=>{i.payload=new bc(i.payload),n(i)})}async onMoved(n){return this.listen(xi.WINDOW_MOVED,i=>{i.payload=new or(i.payload),n(i)})}async onCloseRequested(n){return this.listen(xi.WINDOW_CLOSE_REQUESTED,async i=>{const a=new Kv(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(xi.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new or(d.payload.position)}})}),a=await this.listen(xi.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new or(d.payload.position)}})}),c=await this.listen(xi.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new or(d.payload.position)}})}),u=await this.listen(xi.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(xi.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(xi.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(xi.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(xi.WINDOW_THEME_CHANGED,n)}}var fy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(fy||(fy={}));var hy;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(hy||(hy={}));var my;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(my||(my={}));var py;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(py||(py={}));async function Qv(t={}){return typeof t=="object"&&Object.freeze(t),await Me("plugin:dialog|open",{options:t})}/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=(...t)=>t.filter((n,i,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===i).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,i,a)=>a?a.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=t=>{const n=Jv(t);return n.charAt(0).toUpperCase()+n.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ew={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=t=>{for(const n in t)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=_.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:u,iconNode:d,...h},p)=>_.createElement("svg",{ref:p,...ew,width:n,height:n,stroke:t,strokeWidth:a?Number(i)*24/Number(n):i,className:Ux("lucide",c),...!u&&!tw(h)&&{"aria-hidden":"true"},...h},[...d.map(([y,g])=>_.createElement(y,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=(t,n)=>{const i=_.forwardRef(({className:a,...c},u)=>_.createElement(nw,{ref:u,iconNode:n,className:Ux(`lucide-${Zv(_y(t))}`,`lucide-${t}`,a),...c}));return i.displayName=_y(t),i};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Vx=Ji("chevron-down",sw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],iw=Ji("chevron-right",ow);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],rw=Ji("chevron-up",aw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],cw=Ji("ellipsis",lw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],dw=Ji("folder-git-2",uw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],Yx=Ji("git-branch-plus",fw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],mw=Ji("git-commit-horizontal",hw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],_w=Ji("git-merge",pw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],yw=Ji("panel-left-close",gw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],bw=Ji("panel-left-open",xw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ww=Ji("search",vw),Sw=3.7,Yu=200,Tm=240,ms=540,Is=176,Xh=32,vl=20,Cw=Tm/2,rl=ms+Cw,Ma=18,Ea=18,Gh="var(--grid-line)";function gy(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function Mr(t,n){var a,c,u;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,parentShas:"parentShas"in n?(a=n.parentShas)!=null?a:[]:n.parentSha?[n.parentSha]:[],childShas:"childShas"in n?(c=n.childShas)!=null?c:[]:[],clusterKey:"clusterKey"in n&&(u=n.clusterKey)!=null?u:null,kind:n.kind}}function Ta(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function gc(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:Ta(t).localeCompare(Ta(n))}function Wx(t){return[...t].sort(gc)}function kw(t){var h,p,y,g,b,v;if(t.length<=1)return[...t];const n=new Map(t.map(C=>[Ta(C),C])),i=new Map,a=new Map;t.forEach(C=>i.set(Ta(C),0));for(const C of t){const k=((h=C.parentShas)!=null?h:[]).length>0?(p=C.parentShas)!=null?p:[]:C.parentSha?[C.parentSha]:[];for(const j of k){if(!j||!n.has(j))continue;const M=Ta(C);i.set(M,((y=i.get(M))!=null?y:0)+1);const T=(g=a.get(j))!=null?g:[];T.push(C),a.set(j,T)}}for(const C of a.values())C.sort(gc);const c=t.filter(C=>{var k;return((k=i.get(Ta(C)))!=null?k:0)===0}).sort(gc),u=[],d=new Set;for(;c.length>0;){const C=c.shift(),k=Ta(C);if(!d.has(k)){d.add(k),u.push(C);for(const j of(b=a.get(k))!=null?b:[]){const M=Ta(j),T=((v=i.get(M))!=null?v:0)-1;i.set(M,T),T===0&&c.push(j)}c.sort(gc)}}return u.length===t.length?u:[...u,...t.filter(C=>!d.has(Ta(C))).sort(gc)]}function Fx(t,n){var i;return Wx(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function Xx(t,n,i){return Fx(t,i)}function qh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function jw(t,n){var u,d;if(!n||t.length===0)return qh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return qh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const y=i-p;(!a||y<a.delta)&&(a={delta:y,commit:h})}else{const y=p-i;(!c||y<c.delta)&&(c={delta:y,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:qh(t)}function Wu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function Mw(t,n,i){var g,b,v,C,k,j,M;const a=Xx(t,i,n);if(a.length===0)return null;const c=a.map(T=>Mr(t,T)),u=new Set(c.map(T=>T.id)),d=(b=(g=c[0])==null?void 0:g.parentSha)!=null?b:null,h=(C=(v=c.find(T=>T.kind==="branch-created"))==null?void 0:v.id)!=null?C:null,p=(k=c[0])==null?void 0:k.date,y=c.find(T=>h&&T.id===h||d&&T.id===d?!0:!T.parentSha||!u.has(T.parentSha));return y||((M=(j=jw(c,p!=null?p:void 0))!=null?j:c[0])!=null?M:null)}function Ew(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Fx(t.name,i);if(a.length>0){const y=a.map(v=>Mr(t.name,v)),g=new Set(y.map(v=>v.id)),b=(u=(c=y.find(v=>!v.parentSha||!g.has(v.parentSha)))!=null?c:y[0])!=null?u:null;if(b!=null&&b.parentSha)return b.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function fp(t,n,i={},a={}){var se,ae,we,He;const u=new Map(t.map(J=>[J.name,J])),d=new Map,h=new Map;for(const J of t){const I=((se=i[J.name])!=null?se:[]).filter(ue=>ue.kind!=="branch-created").map(ue=>new Date(ue.date).getTime()).filter(ue=>Number.isFinite(ue)).sort((ue,X)=>ue-X)[0];I!=null&&h.set(J.name,I)}const p=J=>{const fe=h.get(J.name);return fe!=null?fe:gy(J).start},y=J=>{var I;const fe=(I=a[J.name])!=null?I:null;return fe&&fe!==J.name&&(fe===n||u.has(fe))?fe:J.name===n?null:J.parentBranch&&J.parentBranch!==J.name&&(J.parentBranch===n||u.has(J.parentBranch))?J.parentBranch:null};for(const J of t){if(J.name===n)continue;const fe=(ae=y(J))!=null?ae:n,I=(we=d.get(fe))!=null?we:[];I.push(J),d.set(fe,I)}for(const J of d.values())J.sort((fe,I)=>p(fe)-p(I)||fe.name.localeCompare(I.name));const g=new Map,b=[],v=new Map,C=new Map,k=new Map;for(const J of Object.values(i))for(const fe of J){const I=new Date(fe.date).getTime();Number.isFinite(I)&&(fe.fullSha&&k.set(fe.fullSha,I),fe.sha&&k.set(fe.sha,I))}const j=(J,fe)=>({start:Math.min(J,fe),end:Math.max(J,fe)}),M=J=>{var ee,le;const fe=j(p(J),gy(J).end),I=[fe],ue=fe.start,X=Ew(J,n,i),pe=X?k.get(X):void 0,Ee=new Date((le=(ee=J.divergedFromDate)!=null?ee:J.createdDate)!=null?le:J.lastCommitDate).getTime(),H=Number.isFinite(pe!=null?pe:NaN)?pe:Number.isFinite(Ee)?Ee:null;if(H==null)return I;const ce=j(H,ue);return ce.start!==ce.end&&I.push(ce),I},T=Math.max(1,360*60*1e3*Sw),L=(J,fe)=>!(J.start-fe.end>=T||fe.start-J.end>=T),O=(J,fe)=>fe.some(I=>{var ue;return((ue=C.get(J))!=null?ue:[]).some(X=>L(I,X))}),A=(J,fe=new Set)=>{const I=v.get(J);if(I!=null)return I;if(fe.has(J))return 1;fe.add(J);const ue=u.get(J);if(!ue||J===n)return fe.delete(J),v.set(J,0),0;const X=y(ue),pe=X?A(X,fe)+1:1;return fe.delete(J),v.set(J,pe),pe},F=(J,fe=new Set)=>{var Ae,ze;const I=g.get(J);if(I)return I.column;if(fe.has(J))return 0;fe.add(J);const ue=u.get(J);if(!ue)return fe.delete(J),0;if(J===n){const et={name:J,column:0,parentName:null};g.set(J,et),b.push(et);const $e=M(ue);return C.set(0,[...(Ae=C.get(0))!=null?Ae:[],...$e]),fe.delete(J),0}const X=y(ue),pe=X&&!fe.has(X)?X:null,Ee=pe?F(pe,fe):0,H=Math.max(1,A(J)),ce=Math.max(pe?Ee+1:1,H),ee=M(ue);let le=ce;for(;O(le,ee);)le+=1;const ge={name:J,column:le,parentName:pe};return g.set(J,ge),b.push(ge),C.set(le,[...(ze=C.get(le))!=null?ze:[],...ee]),fe.delete(J),le};F(n);const U=t.filter(J=>!g.has(J.name)).sort((J,fe)=>p(J)-p(fe)||J.name.localeCompare(fe.name)),W=U.filter(J=>y(J)!=null),Q=U.filter(J=>y(J)==null);for(const J of W)F(J.name);let me=Math.max(0,...b.map(J=>J.column))+1+1;for(const J of Q){const fe=M(J);let I=me;for(;O(I,fe);)I+=1;const ue={name:J.name,column:I,parentName:null};g.set(J.name,ue),b.push(ue),C.set(I,[...(He=C.get(I))!=null?He:[],...fe]),me=I+1}return b.sort((J,fe)=>J.column-fe.column||J.name.localeCompare(fe.name))}function Tw(t,n,i,a){const c=new Map(t.map(h=>[h.name,h])),u=h=>{var y;const p=(y=i[h.name])!=null?y:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of t){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const Fu=2.25,Gi=0,Kh=0,Aw=3600*1e3,Dw=3600*1e3,Ri=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},No=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function yy(t,n,i=new Map){var Q,me,se,ae,we,He,J,fe,I,ue,X,pe,Ee,H,ce;if(t.length===0)return new Map;const a=[...t].sort((ee,le)=>{const ge=Ri(ee.date)-Ri(le.date);return ge!==0?ge:ee.id!==le.id?ee.id.localeCompare(le.id):ee.visualId.localeCompare(le.visualId)}),c=new Map;for(const ee of t){const le=(Q=ee.parentSha)!=null?Q:null;if(le){const ge=(me=c.get(le))!=null?me:new Set;ge.add(ee.id),c.set(le,ge)}for(const ge of(se=i.get(ee.id))!=null?se:[]){if(!ge)continue;const Ae=(ae=c.get(ge))!=null?ae:new Set;Ae.add(ee.id),c.set(ge,Ae)}}const u=new Map,d=new Map,h=new Map,p=new Set,y=new Map,g=new Map,b=new Map,v=new Map;for(const ee of t){const le=(we=y.get(ee.branchName))!=null?we:new Set;le.add(ee.id),y.set(ee.branchName,le);const ge=(J=(He=n.get(ee.branchName))==null?void 0:He.column)!=null?J:0,Ae=(fe=g.get(ee.id))!=null?fe:new Set;Ae.add(ge),g.set(ee.id,Ae);const ze=new Set;ee.parentSha&&ze.add(ee.parentSha),b.set(ee.visualId,ze);const et=new Set(ze);for(const $e of(I=i.get(ee.id))!=null?I:[])$e&&et.add($e);v.set(ee.visualId,et)}const C=new Set(Array.from(g.keys())),k=Array.from(C),j=new Map,M=ee=>{const le=[];for(const ge of k)No(ge,ee)&&le.push(ge);return le},T=new Map;for(const ee of k)T.set(ee,new Set);for(const ee of t){const le=M(ee.id);if(le.length===0)continue;const ge=(ue=v.get(ee.visualId))!=null?ue:new Set,Ae=new Set;for(const ze of ge)for(const et of M(ze))Ae.add(et);for(const ze of le){const et=(X=T.get(ze))!=null?X:new Set;for(const $e of Ae)et.add($e);T.set(ze,et)}}const L=new Map,O=(ee,le=new Set)=>{var et;const ge=L.get(ee);if(ge)return ge;if(le.has(ee))return new Set;le.add(ee);const Ae=(et=T.get(ee))!=null?et:new Set,ze=new Set;for(const $e of Ae){ze.add($e);for(const $t of O($e,le))ze.add($t)}return le.delete(ee),L.set(ee,ze),ze},A=(ee,le)=>{if(No(ee,le))return!0;const ge=M(ee),Ae=M(le);for(const ze of ge){const et=O(ze);for(const $e of Ae)if(et.has($e))return!0}for(const ze of Ae){const et=O(ze);for(const $e of ge)if(et.has($e))return!0}return!1};let F=1;const U=(ee,le)=>{var nt,Se,Ge,lt,ct,kt,pt,It,st;const ge=(Se=(nt=n.get(ee.branchName))==null?void 0:nt.column)!=null?Se:0,Ae=(Ge=y.get(ee.branchName))!=null?Ge:new Set,et=!(!!ee.parentSha&&Ae.has(ee.parentSha))&&ee.parentSha?ee.parentSha:null,$e=Array.from(le).flatMap(V=>M(V).flatMap(Z=>{var be;return(be=j.get(Z))!=null?be:[]})),$t=(ee.kind==="branch-created"||ee.kind==="stash")&&$e.length>0?Math.max(...$e)+1:null,Nt=$e.length>0?Math.max(...$e)+1:1,_t=(lt=c.get(ee.id))!=null?lt:new Set,ot=Array.from(_t).flatMap(V=>{var Z;return Array.from((Z=g.get(V))!=null?Z:[])}).some(V=>V!==ge),Wt=new Date(ee.date).getTime(),on=Math.max(Nt,1);let Ie=null;for(let V=on;V<F;V+=1){const Z=(ct=d.get(V))!=null?ct:[];if(Z.length===0||ot||p.has(V))continue;const be=(kt=v.get(ee.visualId))!=null?kt:new Set;if(!(Z.some(Te=>A(ee.id,Te.sha)?!0:Array.from(be).some(Le=>No(Le,Te.sha)))||Z.some(Te=>Te.column===ge)||!Number.isFinite(Wt)||!Z.every(Te=>{if(!Number.isFinite(Te.time))return!1;const Le=!!et&&!!Te.branchEntryParentSha&&et===Te.branchEntryParentSha?Dw:Aw;return Math.abs(Te.time-Wt)<=Le}))){Ie=V;break}}$t!=null&&(Ie=$t),Ie==null&&(Ie=Math.max(Nt,F)),u.set(ee.visualId,Ie),Ie>=F&&(F=Ie+1);const ie=(pt=d.get(Ie))!=null?pt:[];ie.push({visualId:ee.visualId,sha:ee.id,column:ge,time:Wt,branchEntryParentSha:et}),d.set(Ie,ie),ot&&p.add(Ie);for(const V of le){const Z=(It=h.get(V))!=null?It:[];Z.push(Ie),h.set(V,Z)}const We=(st=j.get(ee.id))!=null?st:[];We.push(Ie),j.set(ee.id,We)};for(const ee of a){const le=(pe=b.get(ee.visualId))!=null?pe:new Set;U(ee,le)}const W=Math.max(1,a.length*2);for(let ee=0;ee<W;ee+=1){let le=!1;for(const ge of a){const Ae=(Ee=b.get(ge.visualId))!=null?Ee:new Set;if(Ae.size===0)continue;const ze=(H=u.get(ge.visualId))!=null?H:1;let et=1;for(const $e of Ae){const $t=M($e).flatMap(Nt=>{var _t;return(_t=j.get(Nt))!=null?_t:[]});$t.length>0&&(et=Math.max(et,Math.max(...$t)+1))}if(ze<et){u.set(ge.visualId,et);const $e=(ce=j.get(ge.id))!=null?ce:[];$e.length===0?j.set(ge.id,[et]):j.set(ge.id,[...$e.slice(0,-1),et]),le=!0}}if(!le)break}return u}function Ec(t){var ri,$o,ea,Kt,$i,Us,Ii,Pi,Io,hs,li,gn,Dn,fo,Qo,Cs,Zs,rn,Vs,Ys,Po,As,ci,Ho,Uo,Ws,Vo,Co,Un,Ds,ui,Js,en,Fs,Vn,Yn,ks,eo,Yo,bo,ko,Xs,di,Zo,ho,Jo,jo,Ot,wi,Si,Hi,fi,vo,ei,$;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchParentByName:p={},branchUniqueAheadCounts:y,manuallyOpenedClumps:g,manuallyClosedClumps:b,isDebugOpen:v,gridSearchQuery:C,gridFocusSha:k,checkedOutRef:j,orientation:M="horizontal",nodePositionOverrides:T={}}=t,L=M==="horizontal",O=new Map(i.map(x=>[x.name,x])),A=new Map(n.map(x=>[x.name,x])),F=kw([...a.map(x=>{var S,N,Y,ne;return{id:x.fullSha,branchName:d,message:(S=x.prTitle)!=null?S:x.sha,author:"",date:x.date,parentSha:(Y=(N=x.parentShas)==null?void 0:N[0])!=null?Y:null,parentShas:(ne=x.parentShas)!=null?ne:[]}}),...((ri=h[d])!=null?ri:[]).map(x=>Mr(d,x)),...c.map(x=>Mr(x.branch||"",x)),...u.map(x=>Mr(x.branch||"",x))]),U=new Map,W=new Map;for(const x of i){if(x.name===d)continue;const S=Xx(x.name,y,h);W.set(x.name,S);const N=Wx(S.map(dt=>Mr(x.name,dt)));if(N.length>0){U.set(x.name,N);continue}const Y=(Kt=(ea=($o=x.presidesFromSha)!=null?$o:x.divergedFromSha)!=null?ea:x.createdFromSha)!=null?Kt:null;if(!Y)continue;const ne=($i=c.find(dt=>No(dt.fullSha,Y)||No(dt.sha,Y)))==null?void 0:$i.date,de=ne?null:(Us=Object.values(h).flat().find(dt=>No(dt.fullSha,Y)||No(dt.sha,Y)))==null?void 0:Us.date,Xe={id:`BRANCH_HEAD:${x.name}:${Y}`,branchName:x.name,message:`Branch ${x.name}`,author:x.lastCommitAuthor,date:(Io=(Pi=(Ii=ne!=null?ne:de)!=null?Ii:x.createdDate)!=null?Pi:x.divergedFromDate)!=null?Io:x.lastCommitDate,parentSha:Y,clusterKey:null,childShas:[],kind:"branch-created"};U.set(x.name,[Xe])}const Q=new Set(F.map(x=>x.id)),me=(hs=[...F].sort((x,S)=>Ri(x.date)-Ri(S.date)||x.id.localeCompare(S.id))[0])!=null?hs:null,se=new Map(Array.from(U.entries()).map(([x,S])=>[x,new Set(S.map(N=>N.id))])),ae=new Map;for(const x of i){if(x.name===d)continue;const S=Mw(x.name,h,y);if(S){ae.set(x.name,S);continue}const N=(li=U.get(x.name))==null?void 0:li[0];if(N){const Y=(fo=(Dn=(gn=x.presidesFromSha)!=null?gn:x.divergedFromSha)!=null?Dn:x.createdFromSha)!=null?fo:null;ae.set(x.name,{...N,parentSha:Y})}}const we=new Map;for(const[x,S]of U.entries()){const N=S.find(Y=>Y.kind!=="branch-created");N&&we.set(x,N)}const He=new Map;for(const[x,S]of U.entries()){const N=S.filter(de=>de.kind!=="branch-created"),ne=(Qo=(N.length>0?N:S)[0])!=null?Qo:null;ne&&He.set(x,ne)}const J=new Map;for(const x of i){if(x.name===d)continue;const S=(Cs=He.get(x.name))!=null?Cs:null,N=(rn=(Zs=ae.get(x.name))==null?void 0:Zs.parentSha)!=null?rn:null,Y=(Po=(Ys=(Vs=x.presidesFromSha)!=null?Vs:x.divergedFromSha)!=null?Ys:x.createdFromSha)!=null?Po:null,ne=(As=S==null?void 0:S.parentSha)!=null?As:null,de=(ci=ne!=null?ne:N)!=null?ci:Y;de&&J.set(x.name,de)}const fe=x=>{var de,Xe,dt,At,vt,Jt,ht,zt;const S=(de=p[x.name])!=null?de:null;if(!(S&&S!==d&&S!==x.name&&O.has(S)))return S!=null?S:"";const Y=(At=(dt=(Xe=J.get(x.name))!=null?Xe:x.presidesFromSha)!=null?dt:x.divergedFromSha)!=null?At:x.createdFromSha;if(Y&&((vt=se.get(S))!=null?vt:new Set).has(Y))return S;const ne=(ht=(Jt=ae.get(x.name))==null?void 0:Jt.parentSha)!=null?ht:null;return ne&&((zt=se.get(S))!=null?zt:new Set).has(ne),S},I=x=>{var ne,de,Xe,dt,At,vt,Jt,ht;const S=ae.get(x.name),N=(At=(dt=(Xe=(de=(ne=J.get(x.name))!=null?ne:S==null?void 0:S.parentSha)!=null?de:x.presidesFromSha)!=null?Xe:x.divergedFromSha)!=null?dt:x.createdFromSha)!=null?At:null;if(!x.parentBranch&&!N||!N)return null;if(fe(x)===d){if(Q.has(N))return N;const zt=(vt=S==null?void 0:S.parentSha)!=null?vt:null;return zt&&Q.has(zt)?zt:(ht=(Jt=me==null?void 0:me.id)!=null?Jt:zt)!=null?ht:N}return Q.has(N),N},ue=x=>I(x),X=new Map;for(const x of[...c,...u]){const S={...Mr(x.branch||"",x),visualId:`${x.branch||""}:${x.fullSha}`};X.set(x.fullSha,S)}const pe=new Map(X),Ee=x=>{pe.has(x.id)||pe.set(x.id,x)},H=new Set(u.map(x=>x.fullSha)),ce=new Map(Array.from(U.entries()).map(([x,S])=>[x,new Set(S.map(N=>N.id))])),ee=new Set;for(const x of ce.values())for(const S of x)ee.add(S);for(const x of F)ee.has(x.id)||Ee({...x,visualId:`${x.branchName}:${x.id}`});for(const[x,S]of U.entries())for(const N of S)Ee({...N,visualId:`${x}:${N.id}`});const ge=[...Array.from(pe.values()).map(x=>({...x,visualId:`${x.branchName}:${x.id}`}))].sort((x,S)=>Ri(x.date)-Ri(S.date)||x.id.localeCompare(S.id)),Ae=new Map;for(const x of ge){const S=(Ho=Ae.get(x.branchName))!=null?Ho:new Set;S.add(x.id),Ae.set(x.branchName,S)}const ze=(x,S)=>{const N=Ae.get(x);if(!N||N.size===0)return!1;for(const Y of N)if(No(Y,S))return!0;return!1},et=(x,S)=>{const N=Array.from(Ae.entries()).filter(([Y])=>Y!==S).filter(([,Y])=>Array.from(Y).some(ne=>No(ne,x))).map(([Y])=>Y);return N.length>0?N.sort()[0]:x.slice(0,7)},$e=[],$t=new Map,Nt=new Map;for(const x of a){const S=x.fullSha,N=x.targetBranch,Y=x.targetCommitSha;if(!S||!N||!Y||!ze(N,Y))continue;const ne=((Uo=x.parentShas)!=null?Uo:[]).slice(1).filter(Xe=>!!Xe&&!No(Xe,S));if(ne.length===0)continue;const de=(Ws=Nt.get(S))!=null?Ws:new Set;for(const Xe of ne){de.add(Xe);const dt=et(Xe,N);$e.push({sourceCommitSha:Xe,sourceBranchName:dt,mergeCommitSha:S,targetCommitSha:Y,targetBranchName:N});const At=(Vo=$t.get(dt))!=null?Vo:new Map,vt=(Co=At.get(Xe))!=null?Co:new Set;vt.add(N),At.set(Xe,vt),$t.set(dt,At)}Nt.set(S,de)}const _t=new Map;for(const x of i){if(x.name===d)continue;const S=I(x);S&&_t.set(x.name,S)}const tt=new Map;for(const x of ge){const S=Nt.get(x.id);if(S&&S.size>0){const ne=(Un=tt.get(x.id))!=null?Un:new Set;for(const de of S)ne.add(de);tt.set(x.id,ne)}if(x.branchName===d)continue;const N=_t.get(x.branchName);if(!N||N===x.id)continue;const Y=(Ds=tt.get(x.id))!=null?Ds:new Set;Y.add(N),tt.set(x.id,Y)}const ot=new Map,Wt=new Map;for(const x of ge){if(Wt.set(x.id,x),x.parentSha){const S=(ui=ot.get(x.parentSha))!=null?ui:new Set;S.add(x.id),ot.set(x.parentSha,S)}for(const S of(Js=tt.get(x.id))!=null?Js:[]){if(!S)continue;const N=(en=ot.get(S))!=null?en:new Set;N.add(x.id),ot.set(S,N)}}const on=new Map;for(const[x,S]of ot.entries())on.set(x,Array.from(S));const Ie=new Set(["branch-created","stash"]),ie=new Set,We=x=>{if(!x)return null;const S=ge.find(N=>No(N.id,x)||No(N.visualId.split(":").slice(1).join(":"),x));return S!=null?S:null};for(const x of ge){if(x.parentSha){const N=We(x.parentSha),Y=!!N&&ie.has(N.visualId);N&&(x.kind==="stash"||x.kind==="branch-created"||Y)&&ie.add(N.visualId)}const S=(Fs=ot.get(x.id))!=null?Fs:new Set;(S.size>1||Array.from(S).map(N=>Wt.get(N)).some(N=>N!=null&&N.kind!=null&&Ie.has(N.kind)))&&ie.add(x.visualId)}const nt=ge.map(x=>{var S,N;return{...x,childShas:(N=(S=on.get(x.id))!=null?S:x.childShas)!=null?N:[]}}),Se=yy(nt,A,tt),Ge=new Map;for(const x of nt){const S=(Vn=Ge.get(x.branchName))!=null?Vn:[];S.push(x),Ge.set(x.branchName,S)}const lt=new Map,ct=new Map,kt=new Map,pt=new Map,It=new Map,st=(x,S)=>{var vt,Jt,ht,zt,Qt;if(S.length===0)return[];const N=[...S].sort((gt,un)=>{var Jn,Ns;const pn=(Jn=Se.get(gt.visualId))!=null?Jn:Number.MAX_SAFE_INTEGER,Mn=(Ns=Se.get(un.visualId))!=null?Ns:Number.MAX_SAFE_INTEGER;return pn!==Mn?pn-Mn:Ri(gt.date)-Ri(un.date)||gt.id.localeCompare(un.id)}),Y=new Map;let ne=null,de=0;const Xe=gt=>gt.kind==="uncommitted"?"uncommitted":gt.kind==="stash"?"stash":gt.kind==="branch-created"?"branch-created":H.has(gt.id)?"unpushed":"pushed";let dt=null;for(const gt of N){const un=gt.kind==="stash"||gt.kind==="branch-created",pn=ie.has(gt.visualId);if(un)continue;const Mn=Xe(gt);(!ne||dt!=null&&dt!==Mn)&&(de+=1,ne=`cluster:${x}:segment:${de}`);const Jn=(vt=Y.get(ne))!=null?vt:[];Jn.push(gt),Y.set(ne,Jn),pn&&(ne=null),dt=Mn}const At=[];for(const[gt,un]of Y.entries()){if(un.length===0)continue;const Mn=[...un].sort((js,Rs)=>{var es,ys;const Os=(es=Se.get(js.visualId))!=null?es:Number.MIN_SAFE_INTEGER,bn=(ys=Se.get(Rs.visualId))!=null?ys:Number.MIN_SAFE_INTEGER;return Os!==bn?bn-Os:Ri(Rs.date)-Ri(js.date)||Rs.id.localeCompare(js.id)})[0].visualId,Jn={branchName:x,key:gt,commitIds:un.map(js=>js.visualId),leadId:Mn,count:un.length};At.push(Jn);const Ns=(Jt=It.get(gt))!=null?Jt:0;if(!pt.has(gt))pt.set(gt,Mn);else{const js=pt.get(gt),Rs=Wt.get(js.split(":").slice(1).join(":"));if(Rs){const Os=(ht=Se.get(Rs.visualId))!=null?ht:Number.MIN_SAFE_INTEGER;((zt=Se.get(Mn))!=null?zt:Number.MIN_SAFE_INTEGER)>Os&&pt.set(gt,Mn)}}It.set(gt,Math.max(Ns,un.length));for(const js of Jn.commitIds){ct.set(js,gt);const Rs=js.split(":").slice(1).join(":"),Os=(Qt=kt.get(Rs))!=null?Qt:[];Os.includes(gt)||Os.push(gt),kt.set(Rs,Os)}}return At};for(const[x,S]of Ge.entries())lt.set(x,st(x,S));const V=new Map;for(const x of nt)V.set(x.id,x);const Z=x=>{if(!x)return"none";const S=Array.from(V.values()).find(N=>No(N.id,x)||No(N.id.slice(0,7),x)||No(x,N.id));return S?`${S.id.slice(0,7)} ${S.branchName}`:x.slice(0,7)},be=v?["Lane rows (expected):",...[...n].sort((x,S)=>x.column-S.column||x.name.localeCompare(S.name)).map(x=>{var S;return`  row=${x.column} branch=${x.name} parent=${(S=x.parentName)!=null?S:"none"}`}),"",...i.flatMap(x=>{var Xe,dt,At,vt,Jt,ht,zt,Qt;const S=(Xe=h[x.name])!=null?Xe:[],N=[...(dt=W.get(x.name))!=null?dt:[]].reverse(),Y=new Set(((At=U.get(x.name))!=null?At:[]).map(gt=>gt.id)),ne=(Jt=(vt=N.find(gt=>!gt.parentSha||!N.some(un=>{var pn;return No(un.fullSha,(pn=gt.parentSha)!=null?pn:"")})))!=null?vt:N[0])!=null?Jt:null,de=(zt=(ht=ne==null?void 0:ne.parentSha)!=null?ht:J.get(x.name))!=null?zt:null;return[`Branch ${x.name}`,`  ahead=${(Qt=y[x.name])!=null?Qt:0} previews=${N.length} rendered=${Y.size}`,`  db parent commit=${Z(de)}`,`  db child commit=${ne?`${ne.fullSha.slice(0,7)} ${x.name}`:"none"}`,...N.map(gt=>{const un=Y.has(gt.fullSha)?"visible":"hidden",pn=Y.has(gt.fullSha)?"kept by render set":"dropped by render set";return`  ${un} ${gt.fullSha.slice(0,7)} ${gt.message} [${pn}]`}),S.length===0?"  no preview data":null].filter(gt=>gt!=null)})]:[],je=v?Array.from(U.entries()).map(([x,S])=>[`Branch debug ${x}`,...S.map(N=>`  ${N.id.slice(0,7)} ${N.message}`)].join(`
`)):[],Je=Se,qe=Tm/Fu,Te=20/Fu,he=L?ms+qe+Te:Yu+qe+Te,Le=L?Yu+qe+Te:rl,Ye=Math.max(0,...nt.map(x=>{var S;return(S=Je.get(x.visualId))!=null?S:1})),Ke=nt.map(x=>{var ne,de;const S=A.get(x.branchName),N=(ne=Je.get(x.visualId))!=null?ne:1,Y=(de=S==null?void 0:S.column)!=null?de:0;return L?{commit:x,row:N,column:Y,x:Ea+(N-1)*he,y:Ma+Y*Le}:{commit:x,row:N,column:Y,x:Ea+Y*rl,y:Ma+(Ye-N)*he}}),De=x=>{var N;const S=(N=T[x.commit.visualId])!=null?N:T[x.commit.id];return S?{...x,x:S.x,y:S.y}:x},rt=Ke.map(De),mt=C.trim().toLowerCase(),Ct=mt?rt.filter(x=>{const S=x.commit.id.toLowerCase(),N=x.commit.id.slice(0,7).toLowerCase(),Y=x.commit.message.toLowerCase(),ne=x.commit.branchName.toLowerCase();return S.includes(mt)||N.includes(mt)||Y.includes(mt)||ne.includes(mt)}):rt,Qe=k&&(Yn=rt.find(x=>x.commit.id===k))!=null?Yn:null,Bt=new Set(Ct.map(x=>x.commit.id)),xt=(ks=j==null?void 0:j.headSha)!=null?ks:null,yt=(()=>{var S,N;const x=(S=j==null?void 0:j.branchName)!=null?S:null;return!xt||!x?null:(N=ct.get(`${x}:${xt}`))!=null?N:null})(),Zt=new Set;for(const[x,S]of It.entries())S>1&&x!==yt&&Zt.add(x);const at=[...ge].filter(x=>{var de;const S=ct.get(x.visualId);if(!S)return!0;const N=pt.get(S),Y=(de=It.get(S))!=null?de:1,ne=g.has(S)||!Zt.has(S)&&!b.has(S);return Y<=1||ne||N===x.visualId}),jt=yy(at,A,tt),Rt=Tm/Fu,bt=20/Fu,Ht=L?ms+Rt+bt:Yu+Rt+bt,Gt=L?Yu+Rt+bt:rl,Bn=Math.max(0,...ge.map(x=>{var S;return(S=Se.get(x.visualId))!=null?S:1})),Ln=Math.max(0,...at.map(x=>{var S;return(S=jt.get(x.visualId))!=null?S:1})),an=Math.max(0,Bn-Ln),Ft=[...at.map(x=>{var ne,de;const S=A.get(x.branchName),N=(ne=jt.get(x.visualId))!=null?ne:1,Y=(de=S==null?void 0:S.column)!=null?de:0;return De(L?{commit:x,row:N,column:Y,x:Ea+(an+N-1)*Ht,y:Ma+Y*Gt}:{commit:x,row:N,column:Y,x:Ea+Y*rl,y:Ma+(Ln-N)*Ht})})].sort((x,S)=>x.row!==S.row?x.row-S.row:x.column!==S.column?x.column-S.column:x.commit.visualId.localeCompare(S.commit.visualId)).map(x=>({...x})),mn=new Set;for(const x of Ft){let S=x.row,N=`${x.column}:${S}`;for(;mn.has(N);)S+=1,N=`${x.column}:${S}`;x.row=S,mn.add(N)}const it=Math.max(0,...Ft.map(x=>x.row));for(const x of Ft){if(L){x.x=Ea+(an+x.row-1)*Ht,x.y=Ma+x.column*Gt;continue}x.x=Ea+x.column*rl,x.y=Ma+(it-x.row)*Ht}const _n=new Map;for(const x of Ft){const S=(eo=_n.get(x.commit.id))!=null?eo:[];S.push(x),_n.set(x.commit.id,S)}const ws=new Map;for(const x of Ft){const S=ct.get(x.commit.visualId);if(!S)continue;const N=ws.get(S);(!N||(L?x.x>N.x:x.y<N.y))&&ws.set(S,x)}const go=(x,S)=>`${x.toFixed(1)} ${S.toFixed(1)}`,Hs=Math.max(0,...Ft.map(x=>x.row)),qt=Math.max(0,...n.map(x=>x.column)),Gn=Math.max(0,...Ft.map(x=>x.x+ms)),Tn=Math.max(0,...Ft.map(x=>x.y+vl+Is)),_s=Math.max(L?Ea*2+Math.max(0,Hs-1)*Ht+ms+Xh+bt:Ea*2+(qt+1)*rl,Gn+Ea),Ss=Math.max(L?Ma*2+qt*Gt+Is+Xh+bt:Ma*2+Math.max(0,Hs-1)*Ht+Is+Xh+bt,Tn+Ma),Hn=[],zn=new Map(i.map(x=>{var N,Y;const S=new Date((Y=(N=x.createdDate)!=null?N:x.divergedFromDate)!=null?Y:x.lastCommitDate).getTime();return[x.name,Number.isFinite(S)?S:0]})),Bs=x=>{var S;return(S=zn.get(x))!=null?S:0},Ls=[],An=x=>{v&&Ls.push(x)},qn=new Set,Qs=new Map,yo=(x,S)=>{var Y;const N=(Y=Qs.get(x))!=null?Y:[];N.includes(S)||N.push(S),Qs.set(x,N)},So=new Set,Bo=new Set,ro=new Set,Cn=(x,S)=>{var ne,de;if(!x)return null;const N=Wu(_n,x,S);if(N)return N;const Y=(ne=ct.get(`${S!=null?S:d}:${x}`))!=null?ne:ct.get(x);return Y&&(de=ws.get(Y))!=null?de:null},ds=new Set;for(const x of i){const S=ue(x);S&&Bo.add(S);const N=(Yo=J.get(x.name))!=null?Yo:null;N&&ro.add(N)}const hn=x=>{var ne;const S=Cn(x.id,x.branchName);if(S)return S;const N=ct.get(x.visualId);if(!N)return null;const Y=pt.get(N);return Y&&(ne=Ft.find(de=>de.commit.id===Y))!=null?ne:null},gs=(x,S)=>x?Wu(_n,x,S):null,vi=(x,S)=>L?{x:x.x-Gi,y:x.y+Is/2,face:"left"}:{x:x.x+ms/2,y:x.y+Is+Gi,face:"bottom"},Es=x=>L?{x:x.x-Gi,y:x.y+Is/2,face:"left"}:{x:x.x+ms/2,y:x.y+Is+Gi,face:"bottom"},lo=(x,S)=>x.column!==S.column?!0:L?x.commit.branchName!==S.commit.branchName:!1,xo=(x,S,N)=>{if(!L)return{x:S?x.x+ms:x.x+ms/2,y:S?x.y+Is/2:x.y,face:S?"right":"top"};if(!S)return{x:x.x+ms+Gi,y:x.y+Is/2,face:"right"};if(N&&N.column===x.column&&N.commit.branchName!==x.commit.branchName){if(N.x>x.x)return{x:x.x+ms/2,y:x.y+Is+Gi,face:"bottom"};if(N.x<x.x)return{x:x.x+ms/2,y:x.y-Gi,face:"top"}}return!N||N.column===x.column?{x:x.x+ms+Gi,y:x.y+Is/2,face:"right"}:N.column>x.column?{x:x.x+ms/2,y:x.y+Is+Gi,face:"bottom"}:{x:x.x+ms/2,y:x.y-Gi,face:"top"}},rs=x=>L?{x:x.x+ms/2,y:x.y+Is+Gi,face:"bottom"}:{x:x.x+ms,y:x.y+Is/2,face:"right"},Ts=(x,S)=>Wu(_n,x,S),co=(x,S)=>gs(x,S),$n=[],uo=new Set;for(const x of $e){const S=(bo=Cn(x.targetCommitSha,x.targetBranchName))!=null?bo:null;if(!S){An({id:`merge:${x.mergeCommitSha}:${x.sourceCommitSha}:target`,kind:"merge",parent:x.sourceCommitSha,child:x.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const N=x.sourceCommitSha,Y=`merge:${x.mergeCommitSha}:${N!=null?N:"unknown"}`;if(!N||No(N,x.targetCommitSha)){An({id:Y,kind:"merge",parent:N!=null?N:"unknown",child:x.targetCommitSha,rendered:!1,reason:N?"merged parent equals merge target sha":"missing merged parent sha"});continue}const ne=(ko=Wu(_n,N))!=null?ko:null;if(!ne){An({id:Y,kind:"merge",parent:N,child:x.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(ne.commit.id===S.commit.id){An({id:Y,kind:"merge",parent:ne.commit.id,child:S.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let de,Xe,dt;const At=L?S.x+ms/2:S.x+ms-Kh,vt=L?S.y+Is+Kh:S.y+Is/2,Jt=L?"bottom":"right";L?(de=ne.x+ms+Kh,Xe=ne.y+Is/2,dt="right"):(de=ne.x+ms/2,Xe=ne.y,dt="top");const ht=`${de.toFixed(2)}:${Xe.toFixed(2)}:${At.toFixed(2)}:${vt.toFixed(2)}`;if(uo.has(ht)){An({id:Y,kind:"merge",parent:ne.commit.id,child:S.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}uo.add(ht),$n.push({id:Y,fromX:de,fromY:Xe,toX:At,toY:vt,fromFace:dt,toFace:Jt,zIndex:Bs(ne.commit.branchName)}),An({id:Y,kind:"merge",parent:ne.commit.id,child:S.commit.id,rendered:!0,reason:`merge connector rendered to ${x.targetBranchName}`})}const fs=new Set;for(const x of i){if(x.name===d)continue;const S=ae.get(x.name);if(!S)continue;const N=fe(x),Y=Ts((Xs=J.get(x.name))!=null?Xs:"",N),ne=(di=we.get(x.name))!=null?di:S,de=(Zo=co(ne.id,x.name))!=null?Zo:hn(ne);if(!Y||!de||Y.commit.id===de.commit.id){const Jt=ct.get(`${x.name}:${S.id}`),ht=ct.get(`${x.name}:${ne.id}`),zt=!!Jt&&!Zt.has(Jt),Qt=!!ht&&!Zt.has(ht),gt=!!Jt&&!g.has(Jt)&&(zt?b.has(Jt):!0),un=!!ht&&!g.has(ht)&&(Qt?b.has(ht):!0);!Y&&!gt&&yo((ho=de==null?void 0:de.commit.id)!=null?ho:S.id,"Missing parent node"),!de&&!un&&yo(S.id,"Missing child node"),An({id:`branch:${(Jo=Y==null?void 0:Y.commit.id)!=null?Jo:"null"}->${(jo=de==null?void 0:de.commit.id)!=null?jo:"null"}`,kind:"branch",parent:(Ot=Y==null?void 0:Y.commit.id)!=null?Ot:"null",child:(wi=de==null?void 0:de.commit.id)!=null?wi:"null",rendered:!1,reason:Y?de?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Xe=`branch:${Y.commit.id}->${de.commit.id}`;if(ds.has(Xe)){An({id:Xe,kind:"branch",parent:Y.commit.id,child:de.commit.id,rendered:!1,reason:"duplicate connector key"});continue}ds.add(Xe),So.add(Y.commit.id);const dt=lo(Y,de);Y.commit.branchName!==de.commit.branchName&&fs.add(Y.commit.id);const At=rs(Y),vt=Es(de);Hn.push({id:Xe,fromX:At.x,fromY:At.y,toX:vt.x,toY:vt.y,fromFace:At.face,toFace:vt.face,zIndex:Bs(de.commit.branchName)}),An({id:Xe,kind:"branch",parent:Y.commit.id,child:de.commit.id,rendered:!0,reason:dt?"branch connector rendered":L?"horizontal connector rendered":"vertical connector rendered"})}for(const x of ge){const S=hn(x);if(!S)continue;const N=(Si=x.parentSha)!=null?Si:null;if(!N)continue;const Y=(Hi=Cn(N,x.branchName))!=null?Hi:Ts(N,x.branchName);if(!Y){const At=(fi=ct.get(`${x.branchName}:${N}`))!=null?fi:ct.get(N),vt=!!At&&!Zt.has(At);!!At&&!g.has(At)&&(vt?b.has(At):!0)||yo(x.id,"Missing parent node"),An({id:`${x.visualId}->${N}`,kind:"ancestry",parent:N,child:x.id,rendered:!1,reason:"missing parent node"});continue}if(S.commit.id===Y.commit.id){yo(S.commit.id,"Parent and child resolve to the same node"),An({id:`${Y.commit.id}->${S.commit.id}`,kind:"ancestry",parent:Y.commit.id,child:S.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const ne=`${x.branchName}:${(vo=Y.commit.visualId)!=null?vo:Y.commit.id}->${S.commit.visualId}`;if(ds.has(ne)){yo(Y.commit.id,"Duplicate connector key"),yo(S.commit.id,"Duplicate connector key"),An({id:ne,kind:"ancestry",parent:Y.commit.id,child:S.commit.id,rendered:!1,reason:"duplicate connector key"});continue}ds.add(ne),So.add(Y.commit.id);const de=lo(Y,S),Xe=xo(Y,de,S),dt=vi(S);Hn.push({id:ne,fromX:Xe.x,fromY:Xe.y,toX:dt.x,toY:dt.y,fromFace:Xe.face,toFace:dt.face,zIndex:Bs(S.commit.branchName)}),An({id:ne,kind:"ancestry",parent:Y.commit.id,child:S.commit.id,rendered:!0,reason:de?"ancestry connector rendered":L?"horizontal ancestry rendered":"vertical ancestry rendered"}),qn.add(Y.commit.id),qn.add(S.commit.id)}const Xn=new Map;for(const x of Ft){const S=(ei=Xn.get(x.commit.branchName))!=null?ei:[];S.push(x),Xn.set(x.commit.branchName,S)}for(const[x,S]of Xn.entries()){if(S.length<2)continue;const N=[...S].sort((Y,ne)=>{var de,Xe,dt,At,vt,Jt,ht,zt;return Y.row!==ne.row?Y.row-ne.row:Ri((Xe=(de=Y==null?void 0:Y.commit)==null?void 0:de.date)!=null?Xe:null)-Ri((At=(dt=ne==null?void 0:ne.commit)==null?void 0:dt.date)!=null?At:null)||((Jt=(vt=Y==null?void 0:Y.commit)==null?void 0:vt.id)!=null?Jt:"").localeCompare((zt=(ht=ne==null?void 0:ne.commit)==null?void 0:ht.id)!=null?zt:"")});for(let Y=1;Y<N.length;Y+=1){const ne=N[Y-1],de=N[Y];if(ne.commit.id===de.commit.id)continue;const Xe=($=de.commit.parentSha)!=null?$:null;if(Xe&&Ts(Xe,de.commit.branchName))continue;const dt=`chain:${x}:${ne.commit.id}->${de.commit.id}`;if(ds.has(dt)){yo(ne.commit.id,"Duplicate branch chain connector"),yo(de.commit.id,"Duplicate branch chain connector"),An({id:dt,kind:"ancestry",parent:ne.commit.id,child:de.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}ds.add(dt);const At=lo(ne,de),vt=xo(ne,At,de),Jt=vi(de);Hn.push({id:dt,fromX:vt.x,fromY:vt.y,toX:Jt.x,toY:Jt.y,fromFace:vt.face,toFace:Jt.face,zIndex:Bs(de.commit.branchName)}),An({id:dt,kind:"ancestry",parent:ne.commit.id,child:de.commit.id,rendered:!0,reason:"branch chain rendered"}),qn.add(ne.commit.id),qn.add(de.commit.id)}}return{branchByName:O,laneByName:A,mainCommits:F,branchCommitsByLane:U,branchPreviewSets:W,allCommits:ge,clustersByBranch:lt,clusterKeyByCommitId:ct,clusterKeyBySha:kt,leadByClusterKey:pt,clusterCounts:It,debugRows:be,branchDebugRows:je,nodes:Ke,normalizedSearchQuery:mt,matchingNodes:Ct,matchingNodeIds:Bt,focusedNode:Qe,checkedOutClusterKey:yt,defaultCollapsedClumps:Zt,visibleCommitsList:at,renderNodes:Ft,visibleNodesBySha:_n,visibleNodeByClusterKey:ws,pointFormatter:go,contentWidth:_s,contentHeight:Ss,connectors:Hn,mergeConnectors:$n,connectorDecisions:Ls,nodeWarnings:Qs,connectorParentShas:So,branchStartShas:Bo,branchOffNodeShas:ro,crossBranchOutgoingShas:fs,commitIdsWithRenderedAncestry:qn,branchBaseCommitByName:ae,firstBranchCommitByName:He,mergeDestinations:$e,mergeTargetBranchesBySourceBranchAndCommitSha:$t}}const Nw=8,Rw=44,xy=120,by=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Gx(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),y=Math.abs(h),g=Math.hypot(d,h);if(g<.5)return{kind:"line"};const b=d>=0?1:-1,v=h>=0?1:-1;if(Math.min(p,y)<Nw){const U=d/g,W=h/g,Q=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:t+U*Q,c1y:n+W*Q,c2x:i-U*Q,c2y:a-W*Q}}if(Math.min(p,y)<Rw){const U=d/g,W=h/g,Q=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:t+U*Q,c1y:n+W*Q,c2x:i-U*Q,c2y:a-W*Q}}const C=Math.min(160,p*.42),k=Math.min(100,p*.22),j=Math.min(120,y*.32),M=Math.min(160,y*.42),T=by(c),L=by(u);if(!(T==="v"&&L==="h"||T==="v"&&L==null&&y>=p||T==null&&L==="h"&&y>=p||T==="v"&&L==="v"||T==null&&L==null&&y>p)){const U=i,W=n;return{kind:"elbowH",cx:U,cy:W,s1c1x:t+b*C,s1c1y:n,s1c2x:U-b*k,s1c2y:W,s2c1x:U,s2c1y:W+v*j,s2c2x:i,s2c2y:a-v*M}}const A=t,F=a;return{kind:"elbowV",cx:A,cy:F,s1c1x:t,s1c1y:n+v*M,s1c2x:A,s1c2y:F-v*j,s2c1x:A+b*C,s2c1y:F,s2c2x:i-b*k,s2c2y:a}}function Bw(t,n,i,a,c,u){const d=Gx(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function vy(t,n,i,a,c,u,d){const h=Gx(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const C=Math.max(8,Math.min(xy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),k=i>=t?1:-1,j=a>=n?1:-1,M=h.cx-k*C,T=h.cy+j*C;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(M-k*C*.5,h.cy)} ${c(M,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,T)}`,`C ${c(h.cx,T+j*C*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(xy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),y=i>=t?1:-1,g=a>=n?1:-1,b=h.cy-g*p,v=h.cx+y*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,b-g*p*.5)} ${c(h.cx,b)}`,`Q ${c(h.cx,h.cy)} ${c(v,h.cy)}`,`C ${c(v+y*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const hp=2.25,rc=hp/2,Lw=.45,Ow=.01,Bi=hp,Ed=10,zw=-100,wy=0,$w=.35,Xu=.001,Iw=12,Pw=ms+48;function cn(...t){return t.filter(Boolean).join(" ")}function Hw(t){return Math.max(Lw,Math.min(hp,t))}function Uw(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function qx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function Vw(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const y of t)n=Math.min(n,y.x),i=Math.min(i,y.y),a=Math.max(a,y.x),c=Math.max(c,y.y);return{left:n,top:i,right:a,bottom:c}}function Yw(t,n,i,a,c,u,d){const h=Bw(t,n,i,a,u,d),p=Vw(h);return qx(c,p)}function Kx(t,n){return{left:t.x,top:t.y+n,right:t.x+ms,bottom:t.y+vl+Is+4}}function Ww(t,n){const i=Pw,a=Math.max(120,Math.ceil(vl+Is+4-n+24)),c=new Map;for(const u of t){const d=Kx(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),y=Math.floor(d.top/a),g=Math.floor(d.bottom/a),b=u.commit.visualId;for(let v=h;v<=p;v++)for(let C=y;C<=g;C++){const k=`${v},${C}`;let j=c.get(k);j||(j=new Set,c.set(k,j)),j.add(b)}}return{cellW:i,cellH:a,buckets:c}}function Fw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),y=Math.floor(n.top/u),g=Math.floor(n.bottom/u),b=new Set;for(let C=h;C<=p;C++)for(let k=y;k<=g;k++){const j=d.get(`${C},${k}`);if(j)for(const M of j)b.add(M)}const v=new Set;for(const C of b){const k=i.get(C);if(!k)continue;const j=Kx(k,a);qx(n,j)&&v.add(C)}return v}function Sy(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/Bi;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function Xw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function Cy(t,n,i){const a=n/Bi;return!Number.isFinite(a)||a<=0?t:Xw(t,100/a)}function ky(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function bi(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Am(t,n){if(n){const i=ky(n),a=ky(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function Qh(t,n){return t.pathExists===!1?!1:Am(t,n)}function Gw(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function qw({compactLabels:t=!1,selectedVisibleCommitShas:n,commitInProgress:i,commitDisabled:a,stashInProgress:c,stashDisabled:u,pushInProgress:d,hasUncommittedChanges:h,createBranchFromNodeInProgress:p,onCommitLocalChanges:y,onStashLocalChanges:g,onPushCurrentBranch:b,onPushAllBranches:v,onPushCommitTargets:C,onMergeRefsIntoBranch:k,selectedPushTargets:j,selectedPushLabel:M,canPushCurrentBranch:T,pushCurrentBranchLabel:L,pushableRemoteBranchCount:O,selectedCommitTargetOption:A,mergeInProgress:F,setMergeTargetCommitSha:U,worktrees:W,currentRepoPath:Q,worktreeMenuOpen:me,setWorktreeMenuOpen:se,onSwitchToWorktree:ae,onRemoveWorktree:we,removeWorktreeInProgress:He,setCommitDialogOpen:J,setNewBranchDialogOpen:fe}){var _t,tt;const I=n.length>0,ue=n.length>0&&n.every(ot=>ot==="WORKING_TREE"),[X,pe]=_.useState(!1),Ee=_.useRef(null),H=_.useRef(null),ce="inline-flex h-7 items-center rounded-md border border-border bg-card/95 px-2 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",ee=!!y&&h&&!a&&!i&&(!I||ue),le=!!b&&T&&!I&&!d,ge=!!C&&j.length>0&&!d,Ae=!!v&&O>=2&&!I&&!d,ze=!!g&&!u&&!I&&!c,et="Push Selected...",$e=ee?{label:i?"Committing...":"Commit",iconSrc:"/icon-commit.svg",run:()=>J(!0),disabled:!ee}:le?{label:d?"Pushing...":L,iconSrc:"/icon-pushBranch.svg",run:()=>void(b==null?void 0:b()),disabled:!le}:ge?{label:et,iconSrc:"/icon-pushSelected.svg",run:()=>void(C==null?void 0:C(j.map(ot=>({branchName:ot.branchName,targetSha:ot.targetSha})))),disabled:!ge}:null,$t=(ot,Wt)=>l.jsx("span",{"aria-hidden":"true",className:cn("inline-block shrink-0 bg-current",Wt),style:{WebkitMaskImage:`url(${ot})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${ot})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}});return _.useEffect(()=>{const ot=Wt=>{var Ie,ie;const on=Wt.target;on&&((Ie=Ee.current)!=null&&Ie.contains(on)||(ie=H.current)!=null&&ie.contains(on)||(pe(!1),se(!1)))};return window.addEventListener("pointerdown",ot),()=>window.removeEventListener("pointerdown",ot)},[se]),l.jsx("div",{className:"window-no-drag pointer-events-none z-[60] flex w-full justify-start",children:l.jsxs("div",{className:"pointer-events-auto flex w-fit max-w-full flex-nowrap items-center justify-start gap-[9px]",children:[l.jsxs("div",{ref:Ee,className:"relative inline-flex h-7 items-stretch rounded-md border border-border bg-background",children:[l.jsx("button",{type:"button",onClick:()=>{$e&&$e.run()},disabled:!$e||$e.disabled,className:cn(ce,"h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-accent"),children:l.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[$t((_t=$e==null?void 0:$e.iconSrc)!=null?_t:"/icon-commit.svg","h-4.5 w-4.5"),t?null:l.jsx("span",{children:(tt=$e==null?void 0:$e.label)!=null?tt:"Commit"})]})}),l.jsx("button",{type:"button",onClick:()=>pe(ot=>!ot),disabled:!$e,"aria-haspopup":"menu","aria-expanded":X,className:cn(ce,"h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-accent"),title:"More actions",children:l.jsx(Vx,{className:"h-3.5 w-3.5 shrink-0"})}),X&&$e?l.jsxs("div",{className:"absolute left-[-1px] top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border bg-background p-1",children:[l.jsxs("button",{type:"button",onClick:()=>{pe(!1),J(!0)},disabled:!ee,className:cn(ce,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2",!ee&&"text-muted-foreground opacity-50"),children:[$t("/icon-commit.svg","mr-1.5 h-4.5 w-4.5"),i?"Committing...":"Commit"]}),l.jsxs("button",{type:"button",onClick:()=>{pe(!1),b==null||b()},disabled:!le,className:cn(ce,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2",!le&&"text-muted-foreground opacity-50"),children:[$t("/icon-pushBranch.svg","mr-1.5 h-4.5 w-4.5"),d?"Pushing...":L]}),l.jsxs("button",{type:"button",onClick:()=>{pe(!1),C==null||C(j.map(ot=>({branchName:ot.branchName,targetSha:ot.targetSha})))},disabled:!ge,className:cn(ce,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2",!ge&&"text-muted-foreground opacity-50"),title:M,children:[$t("/icon-pushSelected.svg","mr-1.5 h-4.5 w-4.5"),et]}),l.jsxs("button",{type:"button",onClick:()=>{pe(!1),v==null||v()},disabled:!Ae,className:cn(ce,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2",!Ae&&"text-muted-foreground opacity-50"),children:[$t("/icon-pushAll.svg","mr-1.5 h-4.5 w-4.5"),"Push all"]}),l.jsxs("button",{type:"button",onClick:()=>{pe(!1),g==null||g()},disabled:!ze,className:cn(ce,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2",!ze&&"text-muted-foreground opacity-50"),children:[$t("/icon-stash.svg","mr-1.5 h-4.5 w-4.5"),c?"Stashing...":"Stash"]})]}):null]}),l.jsx("div",{className:"flex w-fit flex-nowrap items-center gap-[9px]",children:l.jsxs("button",{type:"button",onClick:()=>fe(!0),disabled:p,className:cn(ce,"pointer-events-auto relative z-10 !bg-background !border-border",t?"w-7 justify-center px-0":""),children:[l.jsx(Yx,{className:cn("h-3.5 w-3.5 shrink-0",t?"":"mr-1.5")}),t?null:p?"Creating...":"Branch"]})}),n.length>1&&A.options.length>0&&A.targetBranch&&k?l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border bg-background px-2 py-1",children:[l.jsx("span",{className:"px-1 text-[11px] font-medium text-muted-foreground",children:"Merge to"}),A.options.map(ot=>{const Wt=ot.targetBranch===A.targetBranch;return l.jsx("button",{type:"button",onClick:()=>U(ot.targetSha),className:cn("rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors",Wt?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:ot.targetBranch},`merge-${ot.targetBranch}`)}),l.jsxs("button",{type:"button",onClick:()=>void k(A.sources,A.targetBranch),disabled:A.sources.length===0||F,className:"rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(_w,{className:"mr-1 inline h-3 w-3 shrink-0 align-text-bottom"}),F?"Merging...":"Confirm"]})]}):null,W.length>0&&(ae||we)?l.jsxs("div",{ref:H,className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>se(ot=>!ot),className:cn(ce,"!bg-background !border-border"),children:[l.jsx(dw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),W.length,t?null:` ${W.length===1?"Worktree":"Worktrees"}`]}),me?l.jsx("div",{className:"absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-md border border-border bg-background p-1",children:W.map(ot=>{var Wt;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:ot.path,children:Am(ot,Q)?Gw(ot.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(Wt=ot.branchName)!=null?Wt:"detached"," • ",ot.headSha.slice(0,7)]})]}),Am(ot,Q)?l.jsxs("div",{className:"flex items-center gap-1",children:[ae?l.jsx("button",{type:"button",onClick:()=>{se(!1),ae(ot.path)},disabled:He||ot.pathExists===!1,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,we?l.jsx("button",{type:"button",onClick:()=>void we(ot.path,ot.isPrunable),disabled:He,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:He?"...":"Remove"}):null]}):null]},ot.path)})}):null]}):null]})})}function Kw({fadeIn:t,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=_.useState(!t);return _.useLayoutEffect(()=>{if(!t){p(!0);return}p(!1);let y=null;const g=requestAnimationFrame(()=>{y=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(g),y!=null&&cancelAnimationFrame(y)}},[t]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:t?"opacity 240ms ease-out":void 0},children:d})}function Qw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:y,labelTopPx:g,inverseZoomStyle:b,displayZoom:v,selectedVisibleCommitShas:C,normalizedSearchQuery:k,matchingNodeIds:j,focusedNode:M,renderNodes:T,shouldRenderNode:L,manuallyOpenedClumps:O,manuallyClosedClumps:A,defaultCollapsedClumps:F,leadByClusterKey:U,clusterKeyByCommitId:W,clusterCounts:Q,commitIdsWithRenderedAncestry:me,nodeWarnings:se,connectorParentShas:ae,branchStartShas:we,branchOffNodeShas:He,crossBranchOutgoingShas:J,branchBaseCommitByName:fe,branchStartAccentClass:I,connectorParentAccentClass:ue,commitCornerRadiusPx:X,lineStrokeWidth:pe,pointFormatter:Ee,connectors:H,mergeConnectors:ce,cullConnectorPath:ee,flushCameraReactTick:le,setManuallyOpenedClumps:ge,setManuallyClosedClumps:Ae,onCommitCardClick:ze,unpushedCommitShasSetByBranch:et,checkedOutHeadSha:$e}){const[$t,Nt]=_.useState(new Set),_t=_.useRef(null);_.useEffect(()=>{const Ie=new Set;Q.forEach((nt,Se)=>{(O.has(Se)||!F.has(Se)&&!A.has(Se))&&Ie.add(Se)});const ie=_t.current;if(ie==null){_t.current=Ie;return}const We=[];if(Ie.forEach(nt=>{ie.has(nt)||We.push(nt)}),We.length>0){Nt(Se=>{const Ge=new Set(Se);return We.forEach(lt=>Ge.add(lt)),Ge});const nt=window.setTimeout(()=>{Nt(Se=>{const Ge=new Set(Se);return We.forEach(lt=>Ge.delete(lt)),Ge})},260);return _t.current=Ie,()=>{window.clearTimeout(nt)}}_t.current=Ie},[Q,F,A,O]);const tt=(Ie,ie)=>{const We=ie.zIndex-Ie.zIndex;if(We!==0)return We;const nt=Math.min(Ie.fromY,Ie.toY),Se=Math.min(ie.fromY,ie.toY),Ge=nt-Se;return Ge!==0?Ge:Ie.id.localeCompare(ie.id)},ot=ce.filter(Ie=>ee(Ie)).sort(tt),Wt=H.filter(Ie=>ee(Ie)).sort(tt),on=T.filter(Ie=>L(Ie));return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:l.jsx("div",{ref:n,className:"relative min-w-full bg-white p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[on.map(Ie=>{var rt,mt,Ct,Qe,Bt,xt;const ie=W.get(Ie.commit.visualId),We=ie?O.has(ie)||!F.has(ie)&&!A.has(ie):!1,nt=ie?U.get(ie)===Ie.commit.visualId:!1,Se=ie!=null&&We&&!nt&&$t.has(ie),Ge=ie&&(rt=Q.get(ie))!=null?rt:1,lt=me.has(Ie.commit.id),ct=(mt=se.get(Ie.commit.id))!=null?mt:[],kt=ct.length>0&&!lt,pt=C.includes(Ie.commit.id),It=Ie.commit.id==="WORKING_TREE"||Ie.commit.kind==="uncommitted",st=Ie.commit.kind==="stash"||Ie.commit.id.startsWith("STASH:"),V=/^STASH:(\d+)$/.exec(Ie.commit.id),Z=V?`Stash:${V[1]}`:null,be=st?Ie.commit.message.trim()&&Ie.commit.message.trim()!=="git-visualizer"?Ie.commit.message:"Stashed changes":Ie.commit.message,je=Ie.commit.kind==="branch-created"&&Ie.commit.id.startsWith("BRANCH_HEAD:"),Je=It||((Qe=(Ct=et.get(Ie.commit.branchName))==null?void 0:Ct.has(Ie.commit.id))!=null?Qe:!1),Te=(It||$e!=null&&Ie.commit.id===$e)&&!pt,he=Te?"text-map-accent":pt?"text-map-accent-strong":"text-muted-foreground",Le=Te?{color:"var(--map-accent)"}:pt?{color:"var(--map-accent-strong)"}:void 0,Ye=(Bt=Le==null?void 0:Le.color)!=null?Bt:"var(--neutral-line)",Ke=(M==null?void 0:M.commit.id)===Ie.commit.id?Ye:Te?"var(--map-accent)":pt?"var(--map-accent-strong)":Gh,De=Je&&!Te&&!pt?{color:"var(--neutral-subtle)"}:void 0;return l.jsxs(Kw,{fadeIn:Se,dataCommitCard:"true",className:cn("group absolute z-20",k&&!j.has(Ie.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",k&&j.has(Ie.commit.id)?"scale-[1.01]":"",(M==null?void 0:M.commit.id)===Ie.commit.id?"z-30":""),style:{left:Ie.x,top:Ie.y,width:ms,height:vl+Is+4,overflow:"visible"},onClick:yt=>ze(yt,Ie),onPointerDown:yt=>y(yt,Ie),children:[l.jsx("div",{className:"absolute left-0 w-full",style:{...b,top:`${g}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[l.jsx("div",{className:cn("min-w-0 h-4 flex-1 text-sm font-medium leading-none",he,v<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Le!=null?Le:De,children:st&&Z?Z:Ie.commit.branchName?`${Ie.commit.branchName}/${Ie.commit.id.slice(0,7)}`:Ie.commit.id.slice(0,7)}),nt&&Ge>1?l.jsx("button",{type:"button",onMouseDown:yt=>{yt.stopPropagation()},onClick:yt=>{if(yt.stopPropagation(),yt.preventDefault(),!ie)return;!F.has(ie)?(ge(at=>{if(!at.has(ie))return at;const jt=new Set(at);return jt.delete(ie),jt}),Ae(at=>{const jt=new Set(at);return jt.has(ie)?jt.delete(ie):jt.add(ie),jt})):(Ae(at=>{if(!at.has(ie))return at;const jt=new Set(at);return jt.delete(ie),jt}),ge(at=>{const jt=new Set(at);return jt.has(ie)?jt.delete(ie):jt.add(ie),jt})),le()},className:cn("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",he),style:Le!=null?Le:De,children:We?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`+${Ge-1}`}):null]})}),l.jsx("div",{className:cn("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",Te&&!Je&&!st&&!je?"bg-selection-soft":pt&&!Je&&!st&&!je?"bg-selection-soft-strong":Je||st||je?"bg-transparent":"bg-background",st||It||je?"border-dashed":"",He.has(Ie.commit.id)||we.has(Ie.commit.id)||J.has(Ie.commit.id)?I:ae.has(Ie.commit.id)?ue:((xt=fe.get(Ie.commit.branchName))==null?void 0:xt.id)===Ie.commit.id?"border-amber-500":kt?"border-red-500":"",(k&&j.has(Ie.commit.id)&&!d,"")),style:{top:0,borderWidth:(M==null?void 0:M.commit.id)===Ie.commit.id?`${st||It||je?pe*(2/1.5):pe}px`:`${st||It||je?pe*(2/1.5):pe}px`,borderColor:Ke,borderTopLeftRadius:0,borderTopRightRadius:`${X}px`,borderBottomRightRadius:`${X}px`,borderBottomLeftRadius:`${X}px`},children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:b,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:cn("max-w-[38rem] select-text text-sm font-medium leading-tight tracking-tight text-muted-foreground",he,v<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),"data-selectable-text":"true",style:Le!=null?Le:De,children:nt&&We?be:nt&&Ge>1?`${be} +${Ge-1}`:be}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:kt?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:ct.join(`
`),children:"Broken ancestry"}):null})]}),v>.5&&!st?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:cn("select-text text-sm font-medium",he),"data-selectable-text":"true",style:Le!=null?Le:De,children:["@",Ie.commit.author]}),l.jsx("div",{className:cn("select-text text-sm font-medium",he),"data-selectable-text":"true",style:Le!=null?Le:De,children:new Date(Ie.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null]})})]},Ie.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[ot.map(Ie=>{const{fromX:ie,fromY:We,toX:nt,toY:Se}=Ie,Ge=vy(ie,We,nt,Se,Ee,Ie.fromFace,Ie.toFace);return l.jsx("path",{d:Ge,fill:"none",stroke:Gh,strokeWidth:pe,strokeLinecap:"round",strokeLinejoin:"round"},Ie.id)}),Wt.map(Ie=>{const{fromX:ie,fromY:We,toX:nt,toY:Se}=Ie,Ge=vy(ie,We,nt,Se,Ee,Ie.fromFace,Ie.toFace);return l.jsx("path",{d:Ge,fill:"none",stroke:Gh,strokeWidth:pe,strokeLinecap:"round",strokeLinejoin:"round"},Ie.id)})]})]})})})}function Zw({isOpen:t,onClose:n,visibleBounds:i,renderedNodeCount:a,totalNodeCount:c,renderedMergeConnectorCount:u,totalMergeConnectorCount:d,renderedConnectorCount:h,totalConnectorCount:p,mapGridCullViewportInsetScreenPx:y,debugRows:g,branchDebugRows:b,connectorDecisions:v}){return l.jsx(l.Fragment,{children:t?l.jsxs("div",{className:"absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:n,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${y}px screen/side): ${i?`${(i.right-i.left).toFixed(0)} x ${(i.bottom-i.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${a} / ${c}`,`Rendered merge connectors: ${u} / ${d}`,`Rendered connectors: ${h} / ${p}`,"",...g,...b,"",...v.map(C=>`${C.rendered?"rendered":"skipped"} [${C.kind}] ${C.parent.slice(0,7)} -> ${C.child.slice(0,7)} (${C.reason})`)].join(`
`)})})]}):null})}function Jw({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:y,deleteInProgress:g,deletableSelectionCount:b,newBranchDialogOpen:v,newBranchName:C,newBranchCreateMode:k,onNewBranchNameChange:j,onNewBranchCreateModeChange:M,onNewBranchDialogClose:T,onNewBranchConfirm:L,selectedCommitCanCreateBranch:O,currentCheckedOutCommitCanCreateBranch:A,createBranchFromNodeInProgress:F}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:a,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:U=>U.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:U=>i(U.target.value),onKeyDown:U=>{(U.metaKey||U.ctrlKey)&&U.key==="Enter"&&(U.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(mw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),u?"Committing...":"Commit"]})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:p,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:U=>U.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(U=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:U},U))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:y,disabled:b===0||g,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:g?"Deleting...":"Delete"})]})]})}):null,v?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:T,children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",onClick:U=>U.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>M("from-selected-node"),className:cn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",k==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>M("new-root"),className:cn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",k==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),k==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:C,onChange:U=>j(U.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:T,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:L,disabled:!C.trim()||F||k==="from-selected-node"&&!O&&!A,className:cn("inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:[l.jsx(Yx,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),F?"Creating...":"Create"]})]})]})}):null]})}const jy="/icon-GitOrientation.svg";function eS({compactLabels:t=!1,orientation:n,onOrientationChange:i}){const a=n==="horizontal"?"vertical":"horizontal";return l.jsxs("button",{type:"button",onClick:()=>i(a),className:cn("window-no-drag inline-flex h-7 items-center rounded-md border border-border bg-background text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",t?"w-7 justify-center px-0":"gap-1.5 pl-1.5 pr-2 py-1"),"aria-label":`Rotate view to ${a}`,title:"Rotate View",children:[l.jsx("span",{className:"relative size-4 shrink-0",children:l.jsx("span",{"aria-hidden":"true",className:cn("absolute inset-0 bg-current transition-transform duration-300 ease-in-out",n==="vertical"&&"rotate-[-90deg]"),style:{WebkitMaskImage:`url(${jy})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${jy})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}})}),t?null:l.jsx("span",{className:"whitespace-nowrap text-[12px] font-normal leading-none text-inherit transition-colors",children:"Rotate View"})]})}function tS({query:t,onQueryChange:n,resultCount:i,resultIndex:a,onJump:c}){const u=_.useRef(null);return l.jsxs("div",{className:"window-no-drag flex h-7 w-[12rem] shrink-0 items-center gap-2 rounded-full border border-border bg-background pl-1.5 pr-2.5",children:[l.jsx(ww,{className:"h-3.5 w-3.5 shrink-0 text-muted-foreground"}),l.jsx("input",{ref:u,value:t,onChange:d=>n(d.target.value),onBlur:d=>{const h=d.relatedTarget;h!=null&&h.closest('button, a, input, textarea, select, [contenteditable="true"]')||window.setTimeout(()=>{var p;(p=u.current)==null||p.focus()},0)},onKeyDown:d=>{d.key==="Enter"&&(d.preventDefault(),c(1))},placeholder:"Search",className:"min-w-0 flex-1 bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"}),i!=null&&i>0?l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-[11px] font-medium tabular-nums text-foreground",children:[(a!=null?a:0)+1,"/",i]}),l.jsx("button",{type:"button",onClick:()=>c(-1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Previous search result",title:"Previous result",children:l.jsx(rw,{className:"h-4 w-4 shrink-0"})}),l.jsx("button",{type:"button",onClick:()=>c(1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Next search result",title:"Next result",children:l.jsx(Vx,{className:"h-4 w-4 shrink-0"})})]}):null]})}function nS({mapPadHostRef:t,transformLayerRef:n}){const i=_.useRef({x:0,y:0}),a=_.useRef(rc),c=_.useRef(null),u=_.useRef({panX:0,panY:0,zoom:rc}),d=_.useRef(null),h=_.useRef(rc),p=_.useRef(null),[y,g]=_.useState(!1),[b,v]=_.useState(rc),[C,k]=_.useState(0),j=_.useRef(null),M=_.useRef(0),T=_.useCallback(()=>{const se=t.current;if(!se)return null;const ae=se.getBoundingClientRect(),we=getComputedStyle(se),He=Number.parseFloat(we.borderLeftWidth)||0,J=Number.parseFloat(we.borderTopWidth)||0,fe=Number.parseFloat(we.paddingLeft)||Ed,I=Number.parseFloat(we.paddingTop)||Ed;return{x:ae.left+He+fe,y:ae.top+J+I}},[t]),L=_.useCallback(()=>{j.current!=null&&(window.clearTimeout(j.current),j.current=null),_.startTransition(()=>{k(se=>se+1)}),M.current=performance.now()},[]),O=_.useCallback((se,ae,we)=>{const He=u.current;u.current={panX:se,panY:ae,zoom:we};const J=n.current;if(J&&(J.style.transform=`translate3d(${se}px, ${ae}px, 0) scale(${we/Bi})`),Math.abs(h.current-we)>Xu&&(h.current=we,v(we)),Math.abs(we-He.zoom)>Xu){L();return}const ue=performance.now()-M.current;if(ue>=wy){L();return}j.current!=null&&window.clearTimeout(j.current),j.current=window.setTimeout(()=>{j.current=null,L()},wy-ue)},[L,n]),A=_.useRef(null),F=_.useCallback(()=>{d.current!=null||!A.current||(d.current=window.requestAnimationFrame(A.current))},[]),U=_.useCallback(()=>{g(!0),p.current!=null&&window.clearTimeout(p.current),p.current=window.setTimeout(()=>{p.current=null,g(!1)},90)},[]),W=_.useCallback((se,ae,we)=>{i.current={x:se,y:ae},a.current=we,U(),F()},[U,F]);A.current=()=>{d.current=null;const se=u.current,ae=i.current.x,we=i.current.y,He=a.current,J=c.current,fe=Math.abs(He-se.zoom)<=Xu?He:se.zoom+(He-se.zoom)*$w,I=J!=null?J.anchorX-J.worldX*(fe/Bi):ae,ue=J!=null?J.anchorY-J.worldY*(fe/Bi):we;J!=null&&Math.abs(fe-He)<=Xu&&(c.current=null),O(I,ue,fe),I!==ae||ue!==we||fe!==He?A.current&&(d.current=window.requestAnimationFrame(A.current)):L()};const Q=_.useCallback((se,ae,we)=>{const He=Hw(we),J=i.current.x,fe=i.current.y,I=a.current,ue=T();if(!ue){W(J,fe,He);return}const X=se-ue.x,pe=ae-ue.y,Ee=I/Bi,H=He/Bi,ce=(X-J)/Ee,ee=(pe-fe)/Ee,le=X-ce*H,ge=pe-ee*H;c.current={anchorX:X,anchorY:pe,worldX:ce,worldY:ee},W(le,ge,He)},[T,W]),me=_.useCallback(se=>{if(se.preventDefault(),se.ctrlKey||se.metaKey){const He=Math.exp(-se.deltaY*Ow);Q(se.clientX,se.clientY,a.current*He);return}c.current=null;const ae=i.current.x-se.deltaX,we=i.current.y-se.deltaY;i.current={x:ae,y:we},O(ae,we,u.current.zoom)},[O,Q]);return _.useLayoutEffect(()=>(O(0,0,rc),()=>{p.current!=null&&window.clearTimeout(p.current),d.current!=null&&window.cancelAnimationFrame(d.current),j.current!=null&&(window.clearTimeout(j.current),j.current=null)}),[O]),_.useLayoutEffect(()=>{const se=n.current;if(!se)return;const ae=u.current;se.style.transform=`translate3d(${ae.panX}px, ${ae.panY}px, 0) scale(${ae.zoom/Bi})`}),{isCameraMoving:y,renderedZoom:b,cameraRenderTick:C,renderedCameraRef:u,interactionIdleTimeoutRef:p,getTransformLayerOriginScreen:T,flushCameraReactTick:L,syncCamera:W,handleWheel:me}}function sS(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function oS({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=_.useRef(null),h=_.useRef(!1),p=_.useRef([]),[y,g]=_.useState(!1),[b,v]=_.useState(null),[C,k]=_.useState([]),[j,M]=_.useState(null),T=_.useCallback(O=>{const A=t.current,F=i();if(!A||!F)return[];const U=A.getBoundingClientRect(),W=n.current.zoom/Bi;if(W<=0)return[];const Q=[],me=O.left,se=O.left+O.width,ae=O.top,we=O.top+O.height;for(const He of a){if(!c(He))continue;const J=F.x+n.current.panX+He.x*W-U.left,fe=F.y+n.current.panY+He.y*W-U.top,I=J+ms*W,ue=fe+(vl+Is)*W;!(I<me||J>se||ue<ae||fe>we)&&Q.push(He.commit.id)}return Q},[i,a,n,t,c]),L=_.useCallback(O=>{if(O.button!==0)return;const A=O.target;if(A!=null&&A.closest("[data-commit-card]")||A!=null&&A.closest("button, a, input, textarea, select"))return;const F=t.current;if(!F)return;O.preventDefault();const U=F.getBoundingClientRect(),W=O.clientX-U.left,Q=O.clientY-U.top;d.current={startX:W,startY:Q,currentX:W,currentY:Q,additive:O.metaKey||O.ctrlKey},h.current=!1,p.current=O.metaKey||O.ctrlKey?C:[],g(!0),v({left:W,top:Q,width:0,height:0})},[t,C]);return _.useEffect(()=>{const O=F=>{var ae;const U=d.current;if(!U)return;const W=t.current;if(!W)return;const Q=W.getBoundingClientRect();U.currentX=F.clientX-Q.left,U.currentY=F.clientY-Q.top,!h.current&&(Math.abs(U.currentX-U.startX)>2||Math.abs(U.currentY-U.startY)>2)&&(h.current=!0);const me=sS(U);v(me);const se=T(me);k(U.additive?Array.from(new Set([...p.current,...se])):Array.from(new Set(se))),U.additive||M((ae=se[se.length-1])!=null?ae:null)},A=()=>{if(d.current){const F=h.current;d.current=null,h.current=!1,g(!1),v(null),F||(k([]),M(null));return}u()};return window.addEventListener("mousemove",O),window.addEventListener("mouseup",A),()=>{window.removeEventListener("mousemove",O),window.removeEventListener("mouseup",A)}},[T,u,t]),{isMarqueeSelecting:y,marqueeRect:b,selectedCommitShas:C,setSelectedCommitShas:k,mergeTargetCommitSha:j,setMergeTargetCommitSha:M,startMarqueeDrag:L}}function iS(){return l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center",children:l.jsx("div",{role:"status","aria-label":"Loading commits",className:"h-5 w-5 rounded-full border-2 border-border border-t-muted-foreground animate-spin"})})}function My({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:y,staleBranches:g=[],isLoading:b=!1,scrollRequest:v,focusedErrorBranch:C,mapTopInsetPx:k=0,onMergeRefsIntoBranch:j,mergeInProgress:M=!1,onPushAllBranches:T,onPushCurrentBranch:L,onPushCommitTargets:O,pushInProgress:A=!1,onDeleteSelection:F,deleteInProgress:U=!1,worktrees:W=[],currentRepoPath:Q,onRemoveWorktree:me,removeWorktreeInProgress:se=!1,onSwitchToWorktree:ae,onStashLocalChanges:we,stashInProgress:He=!1,stashDisabled:J=!1,onCommitLocalChanges:fe,commitInProgress:I=!1,commitDisabled:ue=!1,onStageAllChanges:X,stageInProgress:pe=!1,onCreateBranchFromNode:Ee,onCreateRootBranch:H,createBranchFromNodeInProgress:ce=!1,isDebugOpen:ee=!1,onDebugClose:le,orientation:ge="horizontal",branchCommitPreviews:Ae={},branchParentByName:ze={},branchUniqueAheadCounts:et={},gridSearchQuery:$e="",gridSearchJumpToken:$t=0,gridSearchJumpDirection:Nt=1,gridFocusSha:_t=null,checkedOutRef:tt=null,onGridSearchResultCountChange:ot,onGridSearchResultIndexChange:Wt,onGridSearchFocusChange:on,onInteractionChange:Ie,manuallyOpenedClumps:ie,manuallyClosedClumps:We,setManuallyOpenedClumps:nt,setManuallyClosedClumps:Se,gridHudProps:Ge}){var Mn,Jn,Ns,js,Rs,Os,bn,es,ys,Mo,ta,R,P,K;const lt=_.useRef(null),ct=_.useRef(null),kt=_.useRef(null),pt=_.useRef(null),It=_.useRef(null),st=_.useRef(void 0),V=_.useRef(void 0),Z=_.useRef(void 0),be=_.useRef(0),je=_.useRef(null),[Je,qe]=_.useState(!1),[Te,he]=_.useState(!1),[Le,Ye]=_.useState(""),[Ke,De]=_.useState(!1),[rt,mt]=_.useState(!1),[Ct,Qe]=_.useState(""),[Bt,xt]=_.useState("from-selected-node"),[yt,Zt]=_.useState(()=>new Set),[at,jt]=_.useState(()=>new Set),[Rt,bt]=_.useState({}),Ht=_.useRef(!1),Gt=_.useRef(null),Bn=_.useRef(null),Ln=ie!=null?ie:yt,an=We!=null?We:at,On=nt!=null?nt:Zt,Ft=Se!=null?Se:jt,[mn,it]=_.useState(null),[_n,ws]=_.useState(null),[go,Hs]=_.useState(!1),[qt,Gn]=_.useState(!1),{isCameraMoving:Tn,renderedZoom:_s,cameraRenderTick:Ss,renderedCameraRef:Hn,interactionIdleTimeoutRef:zn,getTransformLayerOriginScreen:Bs,flushCameraReactTick:Ls,syncCamera:An,handleWheel:qn}=nS({mapPadHostRef:kt,transformLayerRef:pt}),Qs=_.useMemo(()=>fp(t,d,Ae,ze),[t,d,Ae,ze]),So=_.useMemo(()=>Ec({lanes:Qs,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:Ae,branchParentByName:ze,branchUniqueAheadCounts:et,manuallyOpenedClumps:Ln,manuallyClosedClumps:an,isDebugOpen:ee,gridSearchQuery:$e,gridFocusSha:_t,checkedOutRef:tt!=null?tt:null,orientation:ge,nodePositionOverrides:Rt}),[Qs,t,n,i,a,d,Ae,ze,et,Ln,an,ee,$e,_t,(Mn=tt==null?void 0:tt.headSha)!=null?Mn:null,(Jn=tt==null?void 0:tt.branchName)!=null?Jn:null,ge,Rt]),Bo=_.useMemo(()=>Ec({lanes:Qs,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:Ae,branchParentByName:ze,branchUniqueAheadCounts:et,manuallyOpenedClumps:Ln,manuallyClosedClumps:an,isDebugOpen:ee,gridSearchQuery:$e,gridFocusSha:_t,checkedOutRef:tt!=null?tt:null,orientation:ge,nodePositionOverrides:Rt}),[Qs,t,n,i,a,d,Ae,ze,et,Ln,an,ee,$e,_t,(Ns=tt==null?void 0:tt.headSha)!=null?Ns:null,(js=tt==null?void 0:tt.branchName)!=null?js:null,ge,Rt]),{allCommits:ro,clusterKeyByCommitId:Cn,leadByClusterKey:ds,clusterCounts:hn,matchingNodes:gs,matchingNodeIds:vi,normalizedSearchQuery:Es,focusedNode:lo,defaultCollapsedClumps:xo,renderNodes:rs,visibleNodesBySha:Ts,contentWidth:co,contentHeight:$n,connectors:uo,mergeConnectors:fs,connectorDecisions:Xn,nodeWarnings:ri,commitIdsWithRenderedAncestry:$o,connectorParentShas:ea,branchStartShas:Kt,branchOffNodeShas:$i,crossBranchOutgoingShas:Us,branchBaseCommitByName:Ii,pointFormatter:Pi}=So,Io=!!Es,hs=_s/Bi,li=_.useMemo(()=>({transform:`scale(${1/hs})`,transformOrigin:"top left",width:`${100*hs}%`,height:`${100*hs}%`}),[hs]),gn=-(20/hs),Dn=_.useMemo(()=>{const E=new Map;for(const B of rs)E.set(B.commit.visualId,B);return E},[rs]),fo=_.useMemo(()=>Ww(rs,gn),[rs,gn]),Qo=E=>{var xe;const B=E.commit.id,q=E.commit.visualId;if(Io&&vi.has(B)||(lo==null?void 0:lo.commit.id)===B||mn===null)return!0;if(!mn.has(q))return!1;const oe=Cn.get(q);return oe&&((xe=hn.get(oe))!=null?xe:1)>1&&(Ln.has(oe)||!xo.has(oe)&&!an.has(oe)),!0},Cs=1.5/hs,Zs=Iw/hs,rn="border-slate-400/70",Vs="border-blue-500",Ys=_.useMemo(()=>new Map(t.map(E=>[E.name,E])),[t]),Po=(Rs=tt==null?void 0:tt.hasUncommittedChanges)!=null?Rs:!1;_.useMemo(()=>new Set(t.filter(E=>E.commitsAhead===0&&!E.name.startsWith("*")).map(E=>E.name)),[t]);const As=_.useMemo(()=>{var B,q;const E=new Map;for(const oe of rs){const xe=(B=E.get(oe.commit.id))!=null?B:new Set;xe.add(oe.commit.branchName),E.set(oe.commit.id,xe)}for(const oe of i){const xe=(q=E.get(oe.fullSha))!=null?q:new Set;oe.branch&&xe.add(oe.branch),E.set(oe.fullSha,xe)}return E},[rs,i,d]),ci=_.useMemo(()=>new Map(Object.entries(c).map(([E,B])=>[E,new Set(B)])),[c]),Ho=_.useCallback(()=>{zn.current,Ls()},[Ls,zn]),{isMarqueeSelecting:Uo,marqueeRect:Ws,selectedCommitShas:Vo,setSelectedCommitShas:Co,mergeTargetCommitSha:Un,setMergeTargetCommitSha:Ds,startMarqueeDrag:ui}=oS({scrollContainerRef:lt,renderedCameraRef:Hn,getTransformLayerOriginScreen:Bs,renderNodes:rs,shouldRenderNode:Qo,onPointerReleaseNoMarquee:Ho}),Js=_.useMemo(()=>new Set(rs.map(E=>E.commit.id)),[rs]),en=_.useMemo(()=>Vo.filter(E=>Js.has(E)),[Vo,Js]),Fs=_.useCallback((E,B)=>{var xe;if(!B)return!1;if(((xe=Ae[E])!=null?xe:[]).some(Ce=>bi(Ce.fullSha,B)||bi(Ce.sha,B)))return!0;const oe=Ys.get(E);return!!(oe!=null&&oe.headSha&&bi(oe.headSha,B))},[Ae,Ys]),Vn=(Os=tt==null?void 0:tt.branchName)!=null?Os:null,Yn=(bn=tt==null?void 0:tt.headSha)!=null?bn:null,ks=Vn==null,eo=_.useMemo(()=>{if(!_t)return null;const E=rs.filter(B=>B.commit.id===_t);return E.length===0?null:E.length===1||!lo?E[0]:E.reduce((B,q)=>{const oe=(B.x-lo.x)**2+(B.y-lo.y)**2;return(q.x-lo.x)**2+(q.y-lo.y)**2<oe?q:B})},[_t,rs,lo]),Yo=_.useCallback((E,B,q)=>{for(const oe of W){if(!Qh(oe,Q))continue;if(oe.branchName){if(oe.branchName===E&&bi(oe.headSha,B))return oe;continue}if(!bi(oe.headSha,B)&&!bi(oe.headSha,q))continue;if(oe.parentSha&&Fs(E,oe.parentSha)||Fs(E,oe.headSha))return oe;const xe=Ys.get(E);if(xe&&bi(xe.headSha,oe.headSha)||E===d&&i.some(Ce=>bi(Ce.fullSha,oe.headSha)))return oe}return null},[W,Q,Fs,Ys,d,i]),bo=_.useCallback(E=>{for(const B of W)if(Qh(B,Q)&&B.branchName===E)return B;return null},[W,Q]),ko=_.useCallback((E,B)=>{for(const q of W)if(Qh(q,Q)&&(bi(q.headSha,E)||bi(q.headSha,B)))return q;return null},[W,Q]),Xs=_.useCallback(E=>{var B;return Array.from((B=As.get(E))!=null?B:[])},[As]),di=_.useMemo(()=>{var xe,Ce,Ve,Ze;const E=new Map;for(const wt of en){const Dt=Xs(wt);if(Dt.length===0)continue;const ft=(xe=Dt.find(tn=>tn!==d))!=null?xe:Dt[0],ut=en.filter(tn=>tn!==wt).filter(tn=>!new Set(Xs(tn)).has(ft));E.set(ft,{targetSha:wt,targetBranch:ft,sourceRefs:ut})}const B=Array.from(E.values()),q=Un?B.find(wt=>{var Dt;return wt.targetSha===Un||wt.targetBranch===((Dt=Xs(Un)[0])!=null?Dt:"")}):null,oe=(Ce=q!=null?q:B[B.length-1])!=null?Ce:null;return{options:B,selected:oe,targetBranch:(Ve=oe==null?void 0:oe.targetBranch)!=null?Ve:null,sources:(Ze=oe==null?void 0:oe.sourceRefs)!=null?Ze:[]}},[en,Xs,d,Un]),Zo=_.useMemo(()=>{const E=[...Vn===d?[{name:d,headSha:Yn!=null?Yn:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(B=>!B.name.startsWith("*")&&B.unpushedCommits>0&&B.remoteSyncStatus!=="on-github").map(B=>[B.name,B]);return new Map(E)},[t,Vn,Yn,d,a.length]),ho=_.useMemo(()=>{const E=oe=>{var Ce;const xe=Xs(oe).filter(Ve=>Zo.has(Ve));return xe.length===0?null:xe.length===1?xe[0]:Vn&&xe.includes(Vn)?Vn:(Ce=xe.find(Ve=>Ve!==d))!=null?Ce:xe[0]},B=oe=>{var xe;return oe===d?a.map(Ce=>{var Ve,Ze;return{fullSha:Ce.fullSha,sha:Ce.sha,parentSha:(Ve=Ce.parentSha)!=null?Ve:null,message:Ce.message,author:Ce.author,date:Ce.date,kind:(Ze=Ce.kind)!=null?Ze:"commit"}}):(xe=Ae[oe])!=null?xe:[]},q=new Map;for(const oe of en){const xe=E(oe);if(!xe)continue;const Ce=Zo.get(xe);if(!Ce)continue;const Ve=B(xe).slice(0,Ce.unpushedCommits),Ze=Ve.findIndex(Dt=>Dt.fullSha===oe);if(Ze===-1)continue;const wt=q.get(xe);(!wt||Ze<wt.targetIndex)&&q.set(xe,{branchName:xe,targetSha:oe,targetIndex:Ze,commitCount:Ve.length-Ze})}return Array.from(q.values())},[en,Xs,Zo,Vn,d,a,Ae]),Jo=_.useMemo(()=>Array.from(new Set(en.map(E=>/^STASH:(\d+)$/.exec(E)).filter(E=>!!E).map(E=>parseInt(E[1],10)))).sort((E,B)=>E-B),[en]),jo=en.includes("WORKING_TREE"),Ot=(jo?1:0)+Jo.length,wi=[...jo?["Uncommitted changes"]:[],...Jo.map(E=>`Stash ${E+1}`)],Si=Zo.size,Hi=!ks&&!!Vn&&Zo.has(Vn),fi=Vn?`Push ${Vn}`:"Push current branch",vo=ho.length===1?ho[0].commitCount>1?`Push ${ho[0].commitCount} commits on ${ho[0].branchName}`:`Push ${ho[0].targetSha.slice(0,7)} on ${ho[0].branchName}`:`Push ${ho.length} selected ranges`,ei=_.useCallback(E=>{const B=E.target;B!=null&&B.closest('.window-no-drag, input, textarea, select, button, [contenteditable="true"]')||dp().startDragging()},[]);_.useEffect(()=>{const E=Tn||Uo;It.current!==E&&(It.current=E,Ie==null||Ie(E))},[Tn,Uo,Ie]),_.useEffect(()=>{const E=Es?gs.length:null;st.current!==E&&(st.current=E,ot==null||ot(E))},[gs.length,Es,ot]),_.useEffect(()=>{const E=Es&&_t?(()=>{const B=gs.findIndex(q=>q.commit.id===_t);return B>=0?B:null})():null;V.current!==E&&(V.current=E,Wt==null||Wt(E))},[_t,gs,Es,Wt]);const $=_.useMemo(()=>{var wt,Dt,ft,ut,tn,dn;if(!Es)return null;const E=Es,B=t.map(yn=>yn.name),q=B.find(yn=>yn.toLowerCase()===E),oe=q!=null?q:B.find(yn=>yn.toLowerCase().startsWith(E)),Ce=oe!=null?oe:B.find(yn=>yn.toLowerCase().includes(E));if(!Ce)return null;const Ve=(wt=t.find(yn=>yn.name===Ce))!=null?wt:null;if(Ve!=null&&Ve.headSha)return Ve.headSha;const Ze=(Dt=Ae[Ce])!=null?Dt:[];return Ze.length>0?(ut=(ft=Ze[0])==null?void 0:ft.fullSha)!=null?ut:null:Ce===d&&(dn=(tn=i[0])==null?void 0:tn.fullSha)!=null?dn:null},[Es,t,Ae,d,i]);_.useEffect(()=>{var oe,xe,Ce;if(!Es){if(be.current=$t,Z.current===null)return;Z.current=null,on==null||on(null);return}if($t<=0||be.current===$t)return;be.current=$t;let E;const B=_t?gs.findIndex(Ve=>Ve.commit.id===_t):-1,q=gs.length>0?B<0?0:(B+Nt+gs.length)%gs.length:-1;E=(Ce=(xe=(oe=gs[q])==null?void 0:oe.commit.id)!=null?xe:$)!=null?Ce:null,Z.current!==E&&(Z.current=E,on==null||on(E))},[gs,Es,on,$,$t,Nt]),_.useLayoutEffect(()=>{if(!_t)return;const E=`${_t}:${$t}`;if(je.current===E)return;const B=lt.current,q=eo;if(!B||!q)return;const oe=Bs();if(!oe)return;const xe=B.getBoundingClientRect(),Ce=Hn.current.zoom,Ve=Ce/Bi,Ze=q.x+ms/2,wt=q.y+vl+Is/2,Dt=xe.left+xe.width/2,ft=xe.top+xe.height/2;An(Dt-oe.x-Ze*Ve,ft-oe.y-wt*Ve,Ce),je.current=E},[_t,$t,eo,Bs,An,Hn]);const x=(Mo=(ys=_n==null?void 0:_n.width)!=null?ys:(es=lt.current)==null?void 0:es.clientWidth)!=null?Mo:0,S=(P=(R=_n==null?void 0:_n.height)!=null?R:(ta=lt.current)==null?void 0:ta.clientHeight)!=null?P:0,N=x>0&&S>0?Sy(x,S,Hn.current,{innerPaddingPx:Ed}):null,Y=N!=null?Cy(N,Hn.current.zoom):null,ne=E=>{if(!Y)return!0;const{fromX:B,fromY:q,toX:oe,toY:xe}=E;return Yw(B,q,oe,xe,Y,E.fromFace,E.toFace)};_.useLayoutEffect(()=>{var Ve;const E=lt.current;if(!E||E.clientWidth<=0||E.clientHeight<=0)return;const B=E.clientWidth,q=E.clientHeight;ws(Ze=>(Ze==null?void 0:Ze.width)===B&&(Ze==null?void 0:Ze.height)===q?Ze:{width:B,height:q});const oe=Sy(B,q,Hn.current,{innerPaddingPx:Ed});if(!oe){it(Ze=>Ze===null?Ze:null);return}const xe=Cy(oe,Hn.current.zoom),Ce=Fw(fo,xe,Dn,gn);for(const Ze of rs){const wt=Cn.get(Ze.commit.visualId);if(!wt||((Ve=hn.get(wt))!=null?Ve:1)<=1)continue;(Ln.has(wt)||!xo.has(wt)&&!an.has(wt))&&Ce.add(Ze.commit.visualId)}it(Ze=>Uw(Ze,Ce)?Ze:Ce)},[_s,$t,_t,Tn,Ss,Ln,an,xo,Cn,hn,rs,_n,fo,Dn,gn]),_.useLayoutEffect(()=>{const E=lt.current;if(!E)return;const B=()=>{const oe=E.clientWidth,xe=E.clientHeight;oe<=0||xe<=0||ws(Ce=>(Ce==null?void 0:Ce.width)===oe&&(Ce==null?void 0:Ce.height)===xe?Ce:{width:oe,height:xe})};B();const q=new ResizeObserver(B);return q.observe(E),()=>q.disconnect()},[ro.length]);const de=rs.filter(E=>Qo(E)).length,Xe=fs.filter(E=>ne(E)).length,dt=uo.filter(E=>ne(E)).length,At=_.useCallback((E,B)=>{if(Ht.current){E.preventDefault(),E.stopPropagation();return}E.stopPropagation();const q=B.commit.id;if(E.shiftKey?(Co(Ve=>Ve.includes(q)?Ve.filter(Ze=>Ze!==q):[...Ve,q]),Ds(q)):(Co(Ve=>Ve.includes(q)?[]:[q]),Ds(Ve=>Ve===q?null:q)),!(E.metaKey||E.ctrlKey||E.detail>=2)||q==="WORKING_TREE")return;const xe=q.length>=40?q.slice(0,7):q;let Ce=null;if(B.commit.branchName?(Ce=Yo(B.commit.branchName,q,xe),Ce||(Ce=bo(B.commit.branchName))):Ce=ko(q,xe),Ce&&ae){ae(Ce.path);return}h==null||h({commitSha:q})},[ko,Yo,bo,h,ae]),vt=_.useCallback((E,B)=>{var Ze,wt,Dt,ft,ut;if(E.button!==0)return;const q=E.target;if(q!=null&&q.closest('[data-selectable-text="true"]')||q!=null&&q.closest("button, a, input, textarea, select"))return;E.stopPropagation(),E.preventDefault(),Ht.current=!1,E.currentTarget.setPointerCapture(E.pointerId);const oe=(Ze=Rt[B.commit.visualId])!=null?Ze:Rt[B.commit.id];Gt.current={nodeId:B.commit.visualId,startX:E.clientX,startY:E.clientY,baseX:(wt=oe==null?void 0:oe.x)!=null?wt:B.x,baseY:(Dt=oe==null?void 0:oe.y)!=null?Dt:B.y,moved:!1,pendingX:(ft=oe==null?void 0:oe.x)!=null?ft:B.x,pendingY:(ut=oe==null?void 0:oe.y)!=null?ut:B.y};const xe=()=>{Bn.current=null;const tn=Gt.current;tn&&bt(dn=>({...dn,[tn.nodeId]:{x:tn.pendingX,y:tn.pendingY}}))},Ce=tn=>{const dn=Gt.current;if(!dn)return;const yn=Hn.current.zoom/Bi,vn=yn>0?1/yn:1,Nn=(tn.clientX-dn.startX)*vn,Ut=(tn.clientY-dn.startY)*vn;(Math.abs(Nn)>2||Math.abs(Ut)>2)&&(dn.moved=!0),dn.moved&&(Ht.current=!0),dn.pendingX=dn.baseX+Nn,dn.pendingY=dn.baseY+Ut,Bn.current==null&&(Bn.current=window.requestAnimationFrame(xe))},Ve=()=>{window.removeEventListener("pointermove",Ce),window.removeEventListener("pointerup",Ve),window.removeEventListener("pointercancel",Ve),Bn.current!=null&&(window.cancelAnimationFrame(Bn.current),Bn.current=null,xe());try{E.currentTarget.releasePointerCapture(E.pointerId)}catch{}const tn=Gt.current;Gt.current=null,tn&&window.setTimeout(()=>{Ht.current=!1},0)};window.addEventListener("pointermove",Ce),window.addEventListener("pointerup",Ve),window.addEventListener("pointercancel",Ve)},[Rt]),Jt=_.useCallback(async()=>{if(!fe)return;await fe(Le)&&(he(!1),Ye(""))},[fe,Le]),ht=_.useCallback(async()=>{F&&(await F({branchNames:[],discardUncommittedChanges:jo,stashIndices:Jo}),De(!1),Co([]),Ds(null))},[F,jo,Jo]),zt=_.useCallback(async()=>{var B;const E=Ct.trim();if(E){if(Bt==="new-root"){if(!H)return;await H(E)}else{if(!Ee)return;const q=en.length===1?en[0]:(B=tt==null?void 0:tt.headSha)!=null?B:null;if(!q||!(q==="WORKING_TREE"||q.startsWith("STASH:")||q===(tt==null?void 0:tt.headSha)))return;await Ee(q,E)}mt(!1),Qe(""),xt("from-selected-node"),Co([]),Ds(null)}},[tt==null?void 0:tt.headSha,Bt,Ct,Ee,H,en]),Qt=!!(tt!=null&&tt.headSha),gt=en.length===0&&Qt,un=en.length===1&&(en[0]==="WORKING_TREE"||en[0].startsWith("STASH:"))||gt,pn=!!H;return _.useEffect(()=>{if(rt){if(!un&&!gt&&pn){xt("new-root");return}(un||gt)&&xt("from-selected-node")}},[pn,gt,rt,un]),_.useEffect(()=>{const E=ct.current;if(!E)return;const B=640,q=440,oe=()=>{const Ce=E.getBoundingClientRect().width;Hs(Ce<B),Gn(Ce<q)};oe();const xe=new ResizeObserver(()=>oe());return xe.observe(E),()=>xe.disconnect()},[]),_.useEffect(()=>{const E=B=>{if(!F||Ke||en.length===0)return;const q=B.target;q!=null&&q.closest('input, textarea, select, button, [contenteditable="true"]')||B.key!=="Delete"&&B.key!=="Backspace"||(B.preventDefault(),De(!0))};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[Ke,F,en.length]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-card",children:[l.jsx(Zw,{isOpen:ee,onClose:()=>le==null?void 0:le(),visibleBounds:Y,renderedNodeCount:de,totalNodeCount:rs.length,renderedMergeConnectorCount:Xe,totalMergeConnectorCount:fs.length,renderedConnectorCount:dt,totalConnectorCount:uo.length,mapGridCullViewportInsetScreenPx:zw,debugRows:Bo.debugRows,branchDebugRows:Bo.branchDebugRows,connectorDecisions:Xn}),Ge?l.jsxs("header",{"data-tauri-drag-region":!0,onPointerDown:ei,className:"window-drag-region pointer-events-none absolute inset-x-0 top-0 z-[70] flex w-full select-none",children:[l.jsxs("div",{ref:ct,className:"pointer-events-auto ml-auto flex w-full max-w-[calc(100vw-116px)] min-w-0 items-start justify-between gap-3 p-2.25 select-none",children:[l.jsx("div",{className:"flex min-w-0 flex-nowrap items-center justify-start gap-3 overflow-visible",children:l.jsx(qw,{compactLabels:go,selectedVisibleCommitShas:en,commitInProgress:I,commitDisabled:ue,stageInProgress:pe,stashInProgress:He,stashDisabled:J,pushInProgress:A,hasUncommittedChanges:Po,createBranchFromNodeInProgress:ce,onCommitLocalChanges:fe,onStageAllChanges:X?()=>void X():void 0,onStashLocalChanges:we,onPushCurrentBranch:L,onPushAllBranches:T,onPushCommitTargets:O,onMergeRefsIntoBranch:j,selectedPushTargets:ho,selectedPushLabel:vo,canPushCurrentBranch:Hi,pushCurrentBranchLabel:fi,pushableRemoteBranchCount:Si,selectedCommitTargetOption:di,mergeInProgress:M,mergeTargetCommitSha:Un,setMergeTargetCommitSha:Ds,worktrees:W,currentRepoPath:Q,worktreeMenuOpen:Je,setWorktreeMenuOpen:qe,onSwitchToWorktree:ae,onRemoveWorktree:me,removeWorktreeInProgress:se,setCommitDialogOpen:he,setNewBranchDialogOpen:mt})}),l.jsx("div",{className:"flex min-w-0 shrink-0 items-center justify-end gap-2",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto flex items-center gap-2",children:[qt?null:l.jsx(tS,{query:Ge.gridSearchQuery,onQueryChange:Ge.setGridSearchQuery,resultCount:Ge.gridSearchResultCount,resultIndex:Ge.gridSearchResultIndex,onJump:E=>{Ge.setGridSearchJumpDirection(E),Ge.setGridSearchJumpToken(B=>B+1)}}),l.jsx(eS,{compactLabels:go,orientation:Ge.mapGridOrientation,onOrientationChange:Ge.setMapGridOrientation})]})})]}),l.jsxs("div",{className:"pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5",children:[(K=Ge.githubAuthStatus)!=null&&K.ghAvailable&&!Ge.githubAuthStatus.authenticated?l.jsx("button",{onClick:Ge.onGitHubAuthSetup,disabled:Ge.githubAuthLoading,className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Ge.githubAuthLoading?"Connecting GitHub...":"Connect GitHub"}):null,Ge.githubAuthStatus&&!Ge.githubAuthStatus.ghAvailable?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",children:"Install `gh` for private PR data"})]}):null,Ge.githubAuthMessage?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",title:Ge.githubAuthMessage,children:Ge.githubAuthMessage})]}):null,Ge.commitSwitchFeedback?l.jsxs("div",{className:`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200 ${Ge.isCommitSwitchFeedbackVisible?"opacity-100":"opacity-0"} ${Ge.commitSwitchFeedback.kind==="error"?"border-red-200/80 bg-red-50/95 text-red-700 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-300":"border-blue-200/80 bg-blue-50/95 text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-300"}`,title:Ge.commitSwitchFeedback.message,children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium opacity-70",children:Ge.commitSwitchFeedback.kind==="error"?"Alert":"Update"}),l.jsx("p",{className:"truncate text-[11px]",children:Ge.commitSwitchFeedback.message})]}):null]})]}):null,b||ro.length===0?l.jsx(iS,{}):l.jsx(Qw,{scrollContainerRef:lt,mapPadHostRef:kt,transformLayerRef:pt,isMarqueeSelecting:Uo,contentWidth:co,contentHeight:$n,isCameraMoving:Tn,onWheel:qn,onMouseDown:ui,onNodePointerDown:vt,labelTopPx:gn,inverseZoomStyle:li,displayZoom:hs,selectedVisibleCommitShas:en,normalizedSearchQuery:Es,matchingNodeIds:vi,focusedNode:eo,renderNodes:rs,shouldRenderNode:Qo,manuallyOpenedClumps:Ln,manuallyClosedClumps:an,defaultCollapsedClumps:xo,leadByClusterKey:ds,clusterKeyByCommitId:Cn,clusterCounts:hn,commitIdsWithRenderedAncestry:$o,nodeWarnings:ri,connectorParentShas:ea,branchStartShas:Kt,branchOffNodeShas:$i,crossBranchOutgoingShas:Us,branchBaseCommitByName:Ii,branchStartAccentClass:Vs,connectorParentAccentClass:rn,commitCornerRadiusPx:Zs,lineStrokeWidth:Cs,pointFormatter:Pi,connectors:uo,mergeConnectors:fs,cullConnectorPath:ne,flushCameraReactTick:Ls,setManuallyOpenedClumps:On,setManuallyClosedClumps:Ft,onCommitCardClick:At,unpushedCommitShasSetByBranch:ci,checkedOutHeadSha:Yn,orientation:ge}),Ws&&Uo?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:Ws.left,top:Ws.top,width:Ws.width,height:Ws.height,borderColor:"var(--map-accent-base)",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(Jw,{commitDialogOpen:Te,commitMessageDraft:Le,onCommitMessageDraftChange:Ye,onCommitDialogClose:()=>he(!1),onCommitConfirm:()=>void Jt(),commitInProgress:I,deleteConfirmOpen:Ke,deleteSelectionItems:wi,onDeleteConfirmClose:()=>De(!1),onDeleteConfirm:()=>void ht(),deleteInProgress:U,deletableSelectionCount:Ot,newBranchDialogOpen:rt,newBranchName:Ct,newBranchCreateMode:Bt,onNewBranchNameChange:Qe,onNewBranchCreateModeChange:xt,onNewBranchDialogClose:()=>mt(!1),onNewBranchConfirm:()=>void zt(),selectedCommitCanCreateBranch:un,currentCheckedOutCommitCanCreateBranch:gt,createBranchFromNodeInProgress:ce})]})}function aS({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y={},branchCommitPreviews:g={},branchParentByName:b={},branchUniqueAheadCounts:v={},gridSearchQuery:C="",gridSearchJumpToken:k=0,gridSearchJumpDirection:j=1,gridFocusSha:M=null,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:L,onGridSearchFocusChange:O,view:A="time",isLoading:F=!1,scrollRequest:U,focusedErrorBranch:W,checkedOutRef:Q=null,mapTopInsetPx:me=0,onMergeRefsIntoBranch:se,mergeInProgress:ae=!1,onPushAllBranches:we,onPushCurrentBranch:He,onPushCommitTargets:J,pushInProgress:fe=!1,onDeleteSelection:I,worktrees:ue=[],currentRepoPath:X,onRemoveWorktree:pe,removeWorktreeInProgress:Ee=!1,onSwitchToWorktree:H,onStashLocalChanges:ce,stashInProgress:ee=!1,stashDisabled:le=!1,onCommitLocalChanges:ge,commitInProgress:Ae=!1,commitDisabled:ze=!1,onStageAllChanges:et,stageInProgress:$e=!1,onCreateBranchFromNode:$t,onCreateRootBranch:Nt,createBranchFromNodeInProgress:_t=!1,onMoveNodeBackToBranch:tt,isDebugOpen:ot=!1,onDebugClose:Wt,orientation:on="horizontal",onInteractionChange:Ie,manuallyOpenedClumps:ie,manuallyClosedClumps:We,setManuallyOpenedClumps:nt,setManuallyClosedClumps:Se,layoutModel:Ge,gridHudProps:lt}){const ct=new Set(u.map(V=>V.branchName)),kt=14*864e5,pt=Date.now();function It(V){return ct.has(V.name)||pt-new Date(V.lastCommitDate).getTime()<=kt}const st=t.filter(V=>V.status==="stale"&&It(V)).sort((V,Z)=>new Date(Z.lastCommitDate).getTime()-new Date(V.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:A==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(My,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y,branchCommitPreviews:g,branchParentByName:b,branchUniqueAheadCounts:v,gridSearchQuery:C,gridSearchJumpToken:k,gridSearchJumpDirection:j,gridFocusSha:M,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:L,onGridSearchFocusChange:O,staleBranches:st,isLoading:F,scrollRequest:U,focusedErrorBranch:W,checkedOutRef:Q,mapTopInsetPx:me,onMergeRefsIntoBranch:se,mergeInProgress:ae,onPushAllBranches:we,onPushCurrentBranch:He,onPushCommitTargets:J,pushInProgress:fe,onDeleteSelection:I,worktrees:ue,currentRepoPath:X,onRemoveWorktree:pe,removeWorktreeInProgress:Ee,onSwitchToWorktree:H,onStashLocalChanges:ce,stashInProgress:ee,stashDisabled:le,onCommitLocalChanges:ge,commitInProgress:Ae,commitDisabled:ze,onStageAllChanges:et,stageInProgress:$e,onCreateBranchFromNode:$t,onCreateRootBranch:Nt,createBranchFromNodeInProgress:_t,onMoveNodeBackToBranch:tt,isDebugOpen:ot,onDebugClose:Wt,orientation:on,onInteractionChange:Ie,manuallyOpenedClumps:ie,manuallyClosedClumps:We,setManuallyOpenedClumps:nt,setManuallyClosedClumps:Se,layoutModel:Ge,gridHudProps:lt})}):A==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(My,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:g,branchParentByName:b,branchUniqueAheadCounts:v,gridSearchQuery:C,gridSearchJumpToken:k,gridSearchJumpDirection:j,gridFocusSha:M,checkedOutRef:Q,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:L,onGridSearchFocusChange:O,onInteractionChange:Ie,manuallyOpenedClumps:ie,manuallyClosedClumps:We,setManuallyOpenedClumps:nt,setManuallyClosedClumps:Se,layoutModel:Ge,isDebugOpen:ot,onDebugClose:Wt,orientation:on,gridHudProps:lt})}):null})}var wl=zx();const mp=_.createContext({});function Lc(t){const n=_.useRef(null);return n.current===null&&(n.current=t()),n.current}const rS=typeof window<"u",pp=rS?_.useLayoutEffect:_.useEffect,Pd=_.createContext(null);function _p(t,n){t.indexOf(n)===-1&&t.push(n)}function gl(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const da=(t,n,i)=>i>n?n:i<t?t:i;let gp=()=>{};const ar={},Qx=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Zx(t){return typeof t=="object"&&t!==null}const Jx=t=>/^0[^.\s]+$/u.test(t);function eb(t){let n;return()=>(n===void 0&&(n=t()),n)}const Oi=t=>t,lS=(t,n)=>i=>n(t(i)),Oc=(...t)=>t.reduce(lS),yl=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class yp{constructor(){this.subscriptions=[]}add(n){return _p(this.subscriptions,n),()=>gl(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ai=t=>t*1e3,Li=t=>t/1e3;function tb(t,n){return n?t*(1e3/n):0}const cS=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},nb=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,uS=1e-7,dS=12;function fS(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=nb(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>uS&&++h<dS);return d}function zc(t,n,i,a){if(t===n&&i===a)return Oi;const c=u=>fS(u,0,1,t,i);return u=>u===0||u===1?u:nb(c(u),n,a)}const sb=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,ob=t=>n=>1-t(1-n),ib=zc(.33,1.53,.69,.99),xp=ob(ib),ab=sb(xp),rb=t=>t>=1?1:(t*=2)<1?.5*xp(t):.5*(2-Math.pow(2,-10*(t-1))),bp=t=>1-Math.sin(Math.acos(t)),lb=ob(bp),cb=sb(bp),hS=zc(.42,0,1,1),mS=zc(0,0,.58,1),ub=zc(.42,0,.58,1),db=t=>Array.isArray(t)&&typeof t[0]!="number";function fb(t,n){return db(t)?t[cS(0,t.length,n)]:t}const hb=t=>Array.isArray(t)&&typeof t[0]=="number",pS={linear:Oi,easeIn:hS,easeInOut:ub,easeOut:mS,circIn:bp,circInOut:cb,circOut:lb,backIn:xp,backInOut:ab,backOut:ib,anticipate:rb},_S=t=>typeof t=="string",Ey=t=>{if(hb(t)){gp(t.length===4);const[n,i,a,c]=t;return zc(n,i,a,c)}else if(_S(t))return pS[t];return t},Gu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function gS(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(g){d.has(g)&&(y.schedule(g),t()),g(h)}const y={schedule:(g,b=!1,v=!1)=>{const k=v&&c?i:a;return b&&d.add(g),k.add(g),g},cancel:g=>{a.delete(g),d.delete(g)},process:g=>{if(h=g,c){u=!0;return}c=!0;const b=i;i=a,a=b,i.forEach(p),i.clear(),c=!1,u&&(u=!1,y.process(g))}};return y}const yS=40;function mb(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=Gu.reduce((O,A)=>(O[A]=gS(u),O),{}),{setup:h,read:p,resolveKeyframes:y,preUpdate:g,update:b,preRender:v,render:C,postRender:k}=d,j=()=>{const O=ar.useManualTiming,A=O?c.timestamp:performance.now();i=!1,O||(c.delta=a?1e3/60:Math.max(Math.min(A-c.timestamp,yS),1)),c.timestamp=A,c.isProcessing=!0,h.process(c),p.process(c),y.process(c),g.process(c),b.process(c),v.process(c),C.process(c),k.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(j))},M=()=>{i=!0,a=!0,c.isProcessing||t(j)};return{schedule:Gu.reduce((O,A)=>{const F=d[A];return O[A]=(U,W=!1,Q=!1)=>(i||M(),F.schedule(U,W,Q)),O},{}),cancel:O=>{for(let A=0;A<Gu.length;A++)d[Gu[A]].cancel(O)},state:c,steps:d}}const{schedule:as,cancel:Da,state:Ro,steps:Zh}=mb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Oi,!0);let gd;function xS(){gd=void 0}const Xo={now:()=>(gd===void 0&&Xo.set(Ro.isProcessing||ar.useManualTiming?Ro.timestamp:performance.now()),gd),set:t=>{gd=t,queueMicrotask(xS)}},pb=t=>n=>typeof n=="string"&&n.startsWith(t),_b=pb("--"),bS=pb("var(--"),vp=t=>bS(t)?vS.test(t.split("/*")[0].trim()):!1,vS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Ty(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Sl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Tc={...Sl,transform:t=>da(0,1,t)},qu={...Sl,default:1},wc=t=>Math.round(t*1e5)/1e5,wp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function wS(t){return t==null}const SS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Sp=(t,n)=>i=>!!(typeof i=="string"&&SS.test(i)&&i.startsWith(t)||n&&!wS(i)&&Object.prototype.hasOwnProperty.call(i,n)),gb=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(wp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},CS=t=>da(0,255,t),Jh={...Sl,transform:t=>Math.round(CS(t))},Tr={test:Sp("rgb","red"),parse:gb("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+Jh.transform(t)+", "+Jh.transform(n)+", "+Jh.transform(i)+", "+wc(Tc.transform(a))+")"};function kS(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const Dm={test:Sp("#"),parse:kS,transform:Tr.transform},$c=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),nr=$c("deg"),ua=$c("%"),Tt=$c("px"),jS=$c("vh"),MS=$c("vw"),Ay={...ua,parse:t=>ua.parse(t)/100,transform:t=>ua.transform(t*100)},fl={test:Sp("hsl","hue"),parse:gb("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+ua.transform(wc(n))+", "+ua.transform(wc(i))+", "+wc(Tc.transform(a))+")"},ao={test:t=>Tr.test(t)||Dm.test(t)||fl.test(t),parse:t=>Tr.test(t)?Tr.parse(t):fl.test(t)?fl.parse(t):Dm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Tr.transform(t):fl.transform(t),getAnimatableNone:t=>{const n=ao.parse(t);return n.alpha=0,ao.transform(n)}},ES=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function TS(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(wp))==null?void 0:n.length)||0)+(((i=t.match(ES))==null?void 0:i.length)||0)>0}const yb="number",xb="color",AS="var",DS="var(",Dy="${}",NS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function xl(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(NS,p=>(ao.test(p)?(a.color.push(u),c.push(xb),i.push(ao.parse(p))):p.startsWith(DS)?(a.var.push(u),c.push(AS),i.push(p)):(a.number.push(u),c.push(yb),i.push(parseFloat(p))),++u,Dy)).split(Dy);return{values:i,split:h,indexes:a,types:c}}function RS(t){return xl(t).values}function bb({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===yb?c+=wc(a[u]):d===xb?c+=ao.transform(a[u]):c+=a[u]}return c}}function BS(t){return bb(xl(t))}const LS=t=>typeof t=="number"?0:ao.test(t)?ao.getAnimatableNone(t):t,OS=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:LS(t);function zS(t){const n=xl(t);return bb(n)(n.values.map((a,c)=>OS(a,n.split[c])))}const Zi={test:TS,parse:RS,createTransformer:BS,getAnimatableNone:zS};function em(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function $S({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=em(p,h,t+1/3),u=em(p,h,t),d=em(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Td(t,n){return i=>i>0?n:t}const ps=(t,n,i)=>t+(n-t)*i,tm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},IS=[Dm,Tr,fl],PS=t=>IS.find(n=>n.test(t));function Ny(t){const n=PS(t);if(!n)return!1;let i=n.parse(t);return n===fl&&(i=$S(i)),i}const Ry=(t,n)=>{const i=Ny(t),a=Ny(n);if(!i||!a)return Td(t,n);const c={...i};return u=>(c.red=tm(i.red,a.red,u),c.green=tm(i.green,a.green,u),c.blue=tm(i.blue,a.blue,u),c.alpha=ps(i.alpha,a.alpha,u),Tr.transform(c))},Nm=new Set(["none","hidden"]);function HS(t,n){return Nm.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function US(t,n){return i=>ps(t,n,i)}function Cp(t){return typeof t=="number"?US:typeof t=="string"?vp(t)?Td:ao.test(t)?Ry:WS:Array.isArray(t)?vb:typeof t=="object"?ao.test(t)?Ry:VS:Td}function vb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>Cp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function VS(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=Cp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function YS(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const WS=(t,n)=>{const i=Zi.createTransformer(n),a=xl(t),c=xl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Nm.has(t)&&!c.values.length||Nm.has(n)&&!a.values.length?HS(t,n):Oc(vb(YS(a,c),c.values),i):Td(t,n)};function wb(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?ps(t,n,i):Cp(t)(t,n)}const FS=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>as.update(n,i),stop:()=>Da(n),now:()=>Ro.isProcessing?Ro.timestamp:Xo.now()}},Sb=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Ad=2e4;function kp(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Ad;)n+=i,a=t.next(n);return n>=Ad?1/0:n}function Cb(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(kp(a),Ad);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Li(c)}}const Ps={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Rm(t,n){return t*Math.sqrt(1-n*n)}const XS=12;function GS(t,n,i){let a=i;for(let c=1;c<XS;c++)a=a-t(a)/n(a);return a}const nm=.001;function qS({duration:t=Ps.duration,bounce:n=Ps.bounce,velocity:i=Ps.velocity,mass:a=Ps.mass}){let c,u,d=1-n;d=da(Ps.minDamping,Ps.maxDamping,d),t=da(Ps.minDuration,Ps.maxDuration,Li(t)),d<1?(c=y=>{const g=y*d,b=g*t,v=g-i,C=Rm(y,d),k=Math.exp(-b);return nm-v/C*k},u=y=>{const b=y*d*t,v=b*i+i,C=Math.pow(d,2)*Math.pow(y,2)*t,k=Math.exp(-b),j=Rm(Math.pow(y,2),d);return(-c(y)+nm>0?-1:1)*((v-C)*k)/j}):(c=y=>{const g=Math.exp(-y*t),b=(y-i)*t+1;return-nm+g*b},u=y=>{const g=Math.exp(-y*t),b=(i-y)*(t*t);return g*b});const h=5/t,p=GS(c,u,h);if(t=ai(t),isNaN(p))return{stiffness:Ps.stiffness,damping:Ps.damping,duration:t};{const y=Math.pow(p,2)*a;return{stiffness:y,damping:d*2*Math.sqrt(a*y),duration:t}}}const KS=["duration","bounce"],QS=["stiffness","damping","mass"];function By(t,n){return n.some(i=>t[i]!==void 0)}function ZS(t){let n={velocity:Ps.velocity,stiffness:Ps.stiffness,damping:Ps.damping,mass:Ps.mass,isResolvedFromDuration:!1,...t};if(!By(t,QS)&&By(t,KS))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*da(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Ps.mass,stiffness:c,damping:u}}else{const i=qS({...t,velocity:0});n={...n,...i,mass:Ps.mass},n.isResolvedFromDuration=!0}return n}function Ac(t=Ps.visualDuration,n=Ps.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:y,mass:g,duration:b,velocity:v,isResolvedFromDuration:C}=ZS({...i,velocity:-Li(i.velocity||0)}),k=v||0,j=y/(2*Math.sqrt(p*g)),M=d-u,T=Li(Math.sqrt(p/g)),L=Math.abs(M)<5;a||(a=L?Ps.restSpeed.granular:Ps.restSpeed.default),c||(c=L?Ps.restDelta.granular:Ps.restDelta.default);let O,A,F,U,W,Q;if(j<1)F=Rm(T,j),U=(k+j*T*M)/F,O=se=>{const ae=Math.exp(-j*T*se);return d-ae*(U*Math.sin(F*se)+M*Math.cos(F*se))},W=j*T*U+M*F,Q=j*T*M-U*F,A=se=>Math.exp(-j*T*se)*(W*Math.sin(F*se)+Q*Math.cos(F*se));else if(j===1){O=ae=>d-Math.exp(-T*ae)*(M+(k+T*M)*ae);const se=k+T*M;A=ae=>Math.exp(-T*ae)*(T*se*ae-k)}else{const se=T*Math.sqrt(j*j-1);O=J=>{const fe=Math.exp(-j*T*J),I=Math.min(se*J,300);return d-fe*((k+j*T*M)*Math.sinh(I)+se*M*Math.cosh(I))/se};const ae=(k+j*T*M)/se,we=j*T*ae-M*se,He=j*T*M-ae*se;A=J=>{const fe=Math.exp(-j*T*J),I=Math.min(se*J,300);return fe*(we*Math.sinh(I)+He*Math.cosh(I))}}const me={calculatedDuration:C&&b||null,velocity:se=>ai(A(se)),next:se=>{if(!C&&j<1){const we=Math.exp(-j*T*se),He=Math.sin(F*se),J=Math.cos(F*se),fe=d-we*(U*He+M*J),I=ai(we*(W*He+Q*J));return h.done=Math.abs(I)<=a&&Math.abs(d-fe)<=c,h.value=h.done?d:fe,h}const ae=O(se);if(C)h.done=se>=b;else{const we=ai(A(se));h.done=Math.abs(we)<=a&&Math.abs(d-ae)<=c}return h.value=h.done?d:ae,h},toString:()=>{const se=Math.min(kp(me),Ad),ae=Sb(we=>me.next(se*we).value,se,30);return se+"ms "+ae},toTransition:()=>{}};return me}Ac.applyToOptions=t=>{const n=Cb(t,100,Ac);return t.ease=n.ease,t.duration=ai(n.duration),t.type="keyframes",t};const JS=5;function kb(t,n,i){const a=Math.max(n-JS,0);return tb(i-t(a),n-a)}function Bm({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:y=.5,restSpeed:g}){const b=t[0],v={done:!1,value:b},C=Q=>h!==void 0&&Q<h||p!==void 0&&Q>p,k=Q=>h===void 0?p:p===void 0||Math.abs(h-Q)<Math.abs(p-Q)?h:p;let j=i*n;const M=b+j,T=d===void 0?M:d(M);T!==M&&(j=T-b);const L=Q=>-j*Math.exp(-Q/a),O=Q=>T+L(Q),A=Q=>{const me=L(Q),se=O(Q);v.done=Math.abs(me)<=y,v.value=v.done?T:se};let F,U;const W=Q=>{C(v.value)&&(F=Q,U=Ac({keyframes:[v.value,k(v.value)],velocity:kb(O,Q,v.value),damping:c,stiffness:u,restDelta:y,restSpeed:g}))};return W(0),{calculatedDuration:null,next:Q=>{let me=!1;return!U&&F===void 0&&(me=!0,A(Q),W(Q)),F!==void 0&&Q>=F?U.next(Q-F):(!me&&A(Q),v)}}}function e4(t,n,i){const a=[],c=i||ar.mix||wb,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||Oi:n;h=Oc(p,h)}a.push(h)}return a}function jb(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(gp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=e4(n,a,c),p=h.length,y=g=>{if(d&&g<t[0])return n[0];let b=0;if(p>1)for(;b<t.length-2&&!(g<t[b+1]);b++);const v=yl(t[b],t[b+1],g);return h[b](v)};return i?g=>y(da(t[0],t[u-1],g)):y}function Mb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=yl(0,n,a);t.push(ps(i,1,c))}}function Eb(t){const n=[0];return Mb(n,t.length-1),n}function t4(t,n){return t.map(i=>i*n)}function n4(t,n){return t.map(()=>n||ub).splice(0,t.length-1)}function Sc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=db(a)?a.map(Ey):Ey(a),u={done:!1,value:n[0]},d=t4(i&&i.length===n.length?i:Eb(n),t),h=jb(d,n,{ease:Array.isArray(c)?c:n4(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const s4=t=>t!==null;function Hd(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(s4),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const o4={decay:Bm,inertia:Bm,tween:Sc,keyframes:Sc,spring:Ac};function Tb(t){typeof t.type=="string"&&(t.type=o4[t.type])}class jp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const i4=t=>t/100;class Dd extends jp{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==Xo.now()&&this.tick(Xo.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Tb(n);const{type:i=Sc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||Sc;p!==Sc&&typeof h[0]!="number"&&(this.mixKeyframes=Oc(i4,wb(h[0],h[1])),h=[0,100]);const y=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),y.calculatedDuration===null&&(y.calculatedDuration=kp(y));const{calculatedDuration:g}=y;this.calculatedDuration=g,this.resolvedDuration=g+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=y}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:y=0,keyframes:g,repeat:b,repeatType:v,repeatDelay:C,type:k,onUpdate:j,finalKeyframe:M}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const T=this.currentTime-y*(this.playbackSpeed>=0?1:-1),L=this.playbackSpeed>=0?T<0:T>c;this.currentTime=Math.max(T,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let O=this.currentTime,A=a;if(b){const Q=Math.min(this.currentTime,c)/h;let me=Math.floor(Q),se=Q%1;!se&&Q>=1&&(se=1),se===1&&me--,me=Math.min(me,b+1),!!(me%2)&&(v==="reverse"?(se=1-se,C&&(se-=C/h)):v==="mirror"&&(A=d)),O=da(0,1,se)*h}let F;L?(this.delayState.value=g[0],F=this.delayState):F=A.next(O),u&&!L&&(F.value=u(F.value));let{done:U}=F;!L&&p!==null&&(U=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const W=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&U);return W&&k!==Bm&&(F.value=Hd(g,this.options,M,this.speed)),j&&j(F.value),W&&this.finish(),F}then(n,i){return this.finished.then(n,i)}get duration(){return Li(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Li(n)}get time(){return Li(this.currentTime)}set time(n){n=ai(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return kb(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(Xo.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Li(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=FS,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Xo.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function a4(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const Ar=t=>t*180/Math.PI,Lm=t=>{const n=Ar(Math.atan2(t[1],t[0]));return Om(n)},r4={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Lm,rotateZ:Lm,skewX:t=>Ar(Math.atan(t[1])),skewY:t=>Ar(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Om=t=>(t=t%360,t<0&&(t+=360),t),Ly=Lm,Oy=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),zy=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),l4={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Oy,scaleY:zy,scale:t=>(Oy(t)+zy(t))/2,rotateX:t=>Om(Ar(Math.atan2(t[6],t[5]))),rotateY:t=>Om(Ar(Math.atan2(-t[2],t[0]))),rotateZ:Ly,rotate:Ly,skewX:t=>Ar(Math.atan(t[4])),skewY:t=>Ar(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function zm(t){return t.includes("scale")?1:0}function $m(t,n){if(!t||t==="none")return zm(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=l4,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=r4,c=h}if(!c)return zm(n);const u=a[n],d=c[1].split(",").map(u4);return typeof u=="function"?u(d):d[u]}const c4=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return $m(i,n)};function u4(t){return parseFloat(t.trim())}const Cl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],kl=new Set(Cl),$y=t=>t===Sl||t===Tt,d4=new Set(["x","y","z"]),f4=Cl.filter(t=>!d4.has(t));function h4(t){const n=[];return f4.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const ir={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>$m(n,"x"),y:(t,{transform:n})=>$m(n,"y")};ir.translateX=ir.x;ir.translateY=ir.y;const Dr=new Set;let Im=!1,Pm=!1,Hm=!1;function Ab(){if(Pm){const t=Array.from(Dr).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=h4(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Pm=!1,Im=!1,Dr.forEach(t=>t.complete(Hm)),Dr.clear()}function Db(){Dr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Pm=!0)})}function m4(){Hm=!0,Db(),Ab(),Hm=!1}class Mp{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Dr.add(this),Im||(Im=!0,as.read(Db),as.resolveKeyframes(Ab))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}a4(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Dr.delete(this)}cancel(){this.state==="scheduled"&&(Dr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const p4=t=>t.startsWith("--");function Nb(t,n,i){p4(n)?t.style.setProperty(n,i):t.style[n]=i}const _4={};function Rb(t,n){const i=eb(t);return()=>{var a;return(a=_4[n])!=null?a:i()}}const g4=Rb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Bb=Rb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),yc=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,Iy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:yc([0,.65,.55,1]),circOut:yc([.55,0,1,.45]),backIn:yc([.31,.01,.66,-.59]),backOut:yc([.33,1.53,.69,.99])};function Lb(t,n){if(t)return typeof t=="function"?Bb()?Sb(t,n):"ease-out":hb(t)?yc(t):Array.isArray(t)?t.map(i=>Lb(i,n)||Iy.easeOut):Iy[t]}function y4(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},y=void 0){const g={[n]:i};p&&(g.offset=p);const b=Lb(h,c);Array.isArray(b)&&(g.easing=b);const v={delay:a,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return y&&(v.pseudoElement=y),t.animate(g,v)}function Ep(t){return typeof t=="function"&&"applyToOptions"in t}function x4({type:t,...n}){var i,a;return Ep(t)&&Bb()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Ob extends jp{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,gp(typeof n.type!="string");const y=x4(n);this.animation=y4(i,a,c,y,u),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=Hd(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(g),Nb(i,a,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Li(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Li(n)}get time(){return Li(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ai(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&g4()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),Oi):c(this)}}const zb={anticipate:rb,backInOut:ab,circInOut:cb};function b4(t){return t in zb}function v4(t){typeof t.ease=="string"&&b4(t.ease)&&(t.ease=zb[t.ease])}const sm=10;class w4 extends Ob{constructor(n){v4(n),Tb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Dd({...d,autoplay:!1}),p=Math.max(sm,Xo.now()-this.startTime),y=da(0,sm,p-sm),g=h.sample(p).value,{name:b}=this.options;u&&b&&Nb(u,b,g),i.setWithVelocity(h.sample(Math.max(0,p-y)).value,g,y),h.stop()}}const Py=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Zi.test(t)||t==="0")&&!t.startsWith("url("));function S4(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function C4(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=Py(c,n),h=Py(u,n);return!d||!h?!1:S4(t)||(i==="spring"||Ep(i))&&a}function Um(t){t.duration=0,t.type="keyframes"}const $b=new Set(["opacity","clipPath","filter","transform"]),k4=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function j4(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&k4.test(t[n]))return!0;return!1}const M4=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),E4=eb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function T4(t){var b;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((b=n==null?void 0:n.owner)==null?void 0:b.current)instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:g}=n.owner.getProps();return E4()&&i&&($b.has(i)||M4.has(i)&&j4(h))&&(i!=="transform"||!g)&&!y&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const A4=40;class D4 extends jp{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:y,element:g,...b}){var k;super(),this.stop=()=>{var j,M;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(M=this.keyframeResolver)==null||M.cancel()},this.createdAt=Xo.now();const v={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:y,element:g,...b},C=(g==null?void 0:g.KeyframeResolver)||Mp;this.keyframeResolver=new C(h,(j,M,T)=>this.onKeyframesResolved(j,M,v,!T),p,y,g),(k=this.keyframeResolver)==null||k.scheduleResolve()}onKeyframesResolved(n,i,a,c){var T,L;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:y,onUpdate:g}=a;this.resolvedAt=Xo.now();let b=!0;C4(n,u,d,h)||(b=!1,(ar.instantAnimations||!p)&&(g==null||g(Hd(n,a,i))),n[0]=n[n.length-1],Um(a),a.repeat=0);const C={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>A4?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},k=b&&!y&&T4(C),j=(L=(T=C.motionValue)==null?void 0:T.owner)==null?void 0:L.current;let M;if(k)try{M=new w4({...C,element:j})}catch{M=new Dd(C)}else M=new Dd(C);M.finished.then(()=>{this.notifyFinished()}).catch(Oi),this.pendingTimeline&&(this.stopTimeline=M.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=M}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),m4()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class N4{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return Hy(this.animations,"duration")}get iterationDuration(){return Hy(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Hy(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class R4 extends N4{then(n,i){return this.finished.finally(n).then(()=>{})}}function Ib(t,n,i,a=0,c=1){const u=Array.from(t).sort((y,g)=>y.sortNodePosition(g)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const B4=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function L4(t){const n=B4.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function Pb(t,n,i=1){const[a,c]=L4(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return Qx(d)?parseFloat(d):d}return vp(c)?Pb(c,n,i+1):c}const O4={type:"spring",stiffness:500,damping:25,restSpeed:10},z4=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),$4={type:"keyframes",duration:.8},I4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},P4=(t,{keyframes:n})=>n.length>2?$4:kl.has(t)?t.startsWith("scale")?z4(n[1]):O4:I4;function Hb(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Tp(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?Hb(i,t):i}const H4=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function U4(t){for(const n in t)if(!H4.has(n))return!0;return!1}const Ap=(t,n,i,a={},c,u)=>d=>{const h=Tp(a,t)||{},p=h.delay||a.delay||0;let{elapsed:y=0}=a;y=y-ai(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-y,onUpdate:v=>{n.set(v),h.onUpdate&&h.onUpdate(v)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};U4(h)||Object.assign(g,P4(t,g)),g.duration&&(g.duration=ai(g.duration)),g.repeatDelay&&(g.repeatDelay=ai(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let b=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Um(g),g.delay===0&&(b=!0)),(ar.instantAnimations||ar.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(b=!0,Um(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,b&&!u&&n.get()!==void 0){const v=Hd(g.keyframes,h);if(v!==void 0){as.update(()=>{g.onUpdate(v),g.onComplete()});return}}return h.isSync?new Dd(g):new D4(g)};function Uy(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Dp(t,n,i,a){if(typeof n=="function"){const[c,u]=Uy(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=Uy(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function Nr(t,n,i){const a=t.getProps();return Dp(a,n,i!==void 0?i:a.custom,t)}const Ub=new Set(["width","height","top","left","right","bottom",...Cl]),Vy=30,V4=t=>!isNaN(parseFloat(t)),Cc={current:void 0};class Y4{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=Xo.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Xo.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=V4(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new yp);const a=this.events[n].add(i);return n==="change"?()=>{a(),as.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Cc.current&&Cc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=Xo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>Vy)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,Vy);return tb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function rr(t,n){return new Y4(t,n)}const Vm=t=>Array.isArray(t);function W4(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,rr(i))}function F4(t){return Vm(t)?t[t.length-1]||0:t}function X4(t,n){const i=Nr(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=F4(u[d]);W4(t,d,h)}}const _o=t=>!!(t&&t.getVelocity);function G4(t){return!!(_o(t)&&t.add)}function Ym(t,n){const i=t.getValue("willChange");if(G4(i))return i.add(n);if(!i&&ar.WillChange){const a=new ar.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Np(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const q4="framerAppearId",Vb="data-"+Np(q4);function Yb(t){return t.props[Vb]}function K4({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Rp(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var v;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?Hb(u,p):p;const y=u==null?void 0:u.reduceMotion;a&&(u=a);const g=[],b=c&&t.animationState&&t.animationState.getState()[c];for(const C in h){const k=t.getValue(C,(v=t.latestValues[C])!=null?v:null),j=h[C];if(j===void 0||b&&K4(b,C))continue;const M={delay:i,...Tp(u||{},C)},T=k.get();if(T!==void 0&&!k.isAnimating()&&!Array.isArray(j)&&j===T&&!M.velocity){as.update(()=>k.set(j));continue}let L=!1;if(window.MotionHandoffAnimation){const F=Yb(t);if(F){const U=window.MotionHandoffAnimation(F,C,as);U!==null&&(M.startTime=U,L=!0)}}Ym(t,C);const O=y!=null?y:t.shouldReduceMotion;k.start(Ap(C,k,j,O&&Ub.has(C)?{type:!1}:M,t,L));const A=k.animation;A&&g.push(A)}if(d){const C=()=>as.update(()=>{d&&X4(t,d)});g.length?Promise.all(g).then(C):C()}return g}function Wm(t,n,i={}){var p;const a=Nr(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Rp(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(y=0)=>{const{delayChildren:g=0,staggerChildren:b,staggerDirection:v}=c;return Q4(t,n,y,g,b,v,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[y,g]=h==="beforeChildren"?[u,d]:[d,u];return y().then(()=>g())}else return Promise.all([u(),d(i.delay)])}function Q4(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Wm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Ib(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function Z4(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Wm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Wm(t,n,i);else{const c=typeof n=="function"?Nr(t,n,i.custom):n;a=Promise.all(Rp(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const J4={test:t=>t==="auto",parse:t=>t},Wb=t=>n=>n.test(t),Fb=[Sl,Tt,ua,nr,MS,jS,J4],Yy=t=>Fb.find(Wb(t));function e6(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Jx(t):!0}const t6=new Set(["brightness","contrast","saturate","opacity"]);function n6(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(wp)||[];if(!a)return t;const c=i.replace(a,"");let u=t6.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const s6=/\b([a-z-]*)\(.*?\)/gu,Fm={...Zi,getAnimatableNone:t=>{const n=t.match(s6);return n?n.map(n6).join(" "):t}},Xm={...Zi,getAnimatableNone:t=>{const n=Zi.parse(t);return Zi.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},Wy={...Sl,transform:Math.round},o6={rotate:nr,rotateX:nr,rotateY:nr,rotateZ:nr,scale:qu,scaleX:qu,scaleY:qu,scaleZ:qu,skew:nr,skewX:nr,skewY:nr,distance:Tt,translateX:Tt,translateY:Tt,translateZ:Tt,x:Tt,y:Tt,z:Tt,perspective:Tt,transformPerspective:Tt,opacity:Tc,originX:Ay,originY:Ay,originZ:Tt},Bp={borderWidth:Tt,borderTopWidth:Tt,borderRightWidth:Tt,borderBottomWidth:Tt,borderLeftWidth:Tt,borderRadius:Tt,borderTopLeftRadius:Tt,borderTopRightRadius:Tt,borderBottomRightRadius:Tt,borderBottomLeftRadius:Tt,width:Tt,maxWidth:Tt,height:Tt,maxHeight:Tt,top:Tt,right:Tt,bottom:Tt,left:Tt,inset:Tt,insetBlock:Tt,insetBlockStart:Tt,insetBlockEnd:Tt,insetInline:Tt,insetInlineStart:Tt,insetInlineEnd:Tt,padding:Tt,paddingTop:Tt,paddingRight:Tt,paddingBottom:Tt,paddingLeft:Tt,paddingBlock:Tt,paddingBlockStart:Tt,paddingBlockEnd:Tt,paddingInline:Tt,paddingInlineStart:Tt,paddingInlineEnd:Tt,margin:Tt,marginTop:Tt,marginRight:Tt,marginBottom:Tt,marginLeft:Tt,marginBlock:Tt,marginBlockStart:Tt,marginBlockEnd:Tt,marginInline:Tt,marginInlineStart:Tt,marginInlineEnd:Tt,fontSize:Tt,backgroundPositionX:Tt,backgroundPositionY:Tt,...o6,zIndex:Wy,fillOpacity:Tc,strokeOpacity:Tc,numOctaves:Wy},i6={...Bp,color:ao,backgroundColor:ao,outlineColor:ao,fill:ao,stroke:ao,borderColor:ao,borderTopColor:ao,borderRightColor:ao,borderBottomColor:ao,borderLeftColor:ao,filter:Fm,WebkitFilter:Fm,mask:Xm,WebkitMask:Xm},Xb=t=>i6[t],a6=new Set([Fm,Xm]);function Gb(t,n){let i=Xb(t);return a6.has(i)||(i=Zi),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const r6=new Set(["auto","none","0"]);function l6(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!r6.has(u)&&xl(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=Gb(i,c)}class c6 extends Mp{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let g=0;g<n.length;g++){let b=n[g];if(typeof b=="string"&&(b=b.trim(),vp(b))){const v=Pb(b,i.current);v!==void 0&&(n[g]=v),g===n.length-1&&(this.finalKeyframe=b)}}if(this.resolveNoneKeyframes(),!Ub.has(a)||n.length!==2)return;const[c,u]=n,d=Yy(c),h=Yy(u),p=Ty(c),y=Ty(u);if(p!==y&&ir[a]){this.needsMeasurement=!0;return}if(d!==h)if($y(d)&&$y(h))for(let g=0;g<n.length;g++){const b=n[g];typeof b=="string"&&(n[g]=parseFloat(b))}else ir[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||e6(n[c]))&&a.push(c);a.length&&l6(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ir[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=ir[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,y])=>{n.getValue(p).set(y)}),this.resolveNoneKeyframes()}}function Lp(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const qb=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function yd(t){return Zx(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Op}=mb(queueMicrotask,!1),Ki={x:!1,y:!1};function Kb(){return Ki.x||Ki.y}function u6(t){return t==="x"||t==="y"?Ki[t]?null:(Ki[t]=!0,()=>{Ki[t]=!1}):Ki.x||Ki.y?null:(Ki.x=Ki.y=!0,()=>{Ki.x=Ki.y=!1})}function Qb(t,n){const i=Lp(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function d6(t){return!(t.pointerType==="touch"||Kb())}function f6(t,n,i={}){const[a,c,u]=Qb(t,i);return a.forEach(d=>{let h=!1,p=!1,y;const g=()=>{d.removeEventListener("pointerleave",k)},b=M=>{y&&(y(M),y=void 0),g()},v=M=>{h=!1,window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",v),p&&(p=!1,b(M))},C=()=>{h=!0,window.addEventListener("pointerup",v,c),window.addEventListener("pointercancel",v,c)},k=M=>{if(M.pointerType!=="touch"){if(h){p=!0;return}b(M)}},j=M=>{if(!d6(M))return;p=!1;const T=n(d,M);typeof T=="function"&&(y=T,d.addEventListener("pointerleave",k,c))};d.addEventListener("pointerenter",j,c),d.addEventListener("pointerdown",C,c)}),u}const Zb=(t,n)=>n?t===n?!0:Zb(t,n.parentElement):!1,zp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,h6=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function m6(t){return h6.has(t.tagName)||t.isContentEditable===!0}const p6=new Set(["INPUT","SELECT","TEXTAREA"]);function _6(t){return p6.has(t.tagName)||t.isContentEditable===!0}const xd=new WeakSet;function Fy(t){return n=>{n.key==="Enter"&&t(n)}}function om(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const g6=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=Fy(()=>{if(xd.has(i))return;om(i,"down");const c=Fy(()=>{om(i,"up")}),u=()=>om(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function Xy(t){return zp(t)&&!Kb()}const Gy=new WeakSet;function y6(t,n,i={}){const[a,c,u]=Qb(t,i),d=h=>{const p=h.currentTarget;if(!Xy(h)||Gy.has(h))return;xd.add(p),i.stopPropagation&&Gy.add(h);const y=n(p,h),g=(C,k)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",v),xd.has(p)&&xd.delete(p),Xy(C)&&typeof y=="function"&&y(C,{success:k})},b=C=>{g(C,p===window||p===document||i.useGlobalTarget||Zb(p,C.target))},v=C=>{g(C,!1)};window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",v,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),yd(h)&&(h.addEventListener("focus",y=>g6(y,c)),!m6(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function Ud(t){return Zx(t)&&"ownerSVGElement"in t}const bd=new WeakMap;let sr;const Jb=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:Ud(a)&&"getBBox"in a?a.getBBox()[n]:a[i],x6=Jb("inline","width","offsetWidth"),b6=Jb("block","height","offsetHeight");function v6({target:t,borderBoxSize:n}){var i;(i=bd.get(t))==null||i.forEach(a=>{a(t,{get width(){return x6(t,n)},get height(){return b6(t,n)}})})}function w6(t){t.forEach(v6)}function S6(){typeof ResizeObserver>"u"||(sr=new ResizeObserver(w6))}function C6(t,n){sr||S6();const i=Lp(t);return i.forEach(a=>{let c=bd.get(a);c||(c=new Set,bd.set(a,c)),c.add(n),sr==null||sr.observe(a)}),()=>{i.forEach(a=>{const c=bd.get(a);c==null||c.delete(n),c!=null&&c.size||sr==null||sr.unobserve(a)})}}const vd=new Set;let hl;function k6(){hl=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};vd.forEach(n=>n(t))},window.addEventListener("resize",hl)}function j6(t){return vd.add(t),hl||k6(),()=>{vd.delete(t),!vd.size&&typeof hl=="function"&&(window.removeEventListener("resize",hl),hl=void 0)}}function qy(t,n){return typeof t=="function"?j6(t):C6(t,n)}function e5(t){return Ud(t)&&t.tagName==="svg"}function M6(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=jb(c,u,d);return n?h(a):h}const E6=[...Fb,ao,Zi],T6=t=>E6.find(Wb(t)),Ky=()=>({translate:0,scale:1,origin:0,originPoint:0}),ml=()=>({x:Ky(),y:Ky()}),Qy=()=>({min:0,max:0}),io=()=>({x:Qy(),y:Qy()}),Dc=new WeakMap;function Vd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Nc(t){return typeof t=="string"||Array.isArray(t)}const $p=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ip=["initial",...$p];function Yd(t){return Vd(t.animate)||Ip.some(n=>Nc(t[n]))}function t5(t){return!!(Yd(t)||t.variants)}function A6(t,n,i){for(const a in n){const c=n[a],u=i[a];if(_o(c))t.addValue(a,c);else if(_o(u))t.addValue(a,rr(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,rr(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const Gm={current:null},n5={current:!1},D6=typeof window<"u";function N6(){if(n5.current=!0,!!D6)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>Gm.current=t.matches;t.addEventListener("change",n),n()}else Gm.current=!1}const Zy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Nd={};function s5(t){Nd=t}function R6(){return Nd}class o5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Mp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const C=Xo.now();this.renderScheduledAt<C&&(this.renderScheduledAt=C,as.render(this.render,!1,!0))};const{latestValues:y,renderState:g}=h;this.latestValues=y,this.baseTarget={...y},this.initialValues=i.initial?{...y}:{},this.renderState=g,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Yd(i),this.isVariantNode=t5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:b,...v}=this.scrapeMotionValuesFromProps(i,{},this);for(const C in v){const k=v[C];y[C]!==void 0&&_o(k)&&k.set(y[C])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Dc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(n5.current||N6(),this.shouldReduceMotion=Gm.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),Da(this.notifyUpdate),Da(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&$b.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:y,duration:g}=i.accelerate,b=new Ob({element:this.current,name:n,keyframes:h,times:p,ease:y,duration:ai(g)}),v=d(b);this.valueSubscriptions.set(n,()=>{v(),b.cancel()});return}const a=kl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&as.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Nd){const i=Nd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):io()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<Zy.length;a++){const c=Zy[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=A6(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=rr(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(Qx(a)||Jx(a))?a=parseFloat(a):!T6(a)&&Zi.test(i)&&(a=Gb(n,i)),this.setBaseTarget(n,_o(a)?a.get():a)),_o(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Dp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!_o(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new yp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Op.render(this.render)}}class i5 extends o5{constructor(){super(...arguments),this.KeyframeResolver=c6}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;_o(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class lr{constructor(n){this.isMounted=!1,this.node=n}update(){}}function a5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function B6({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function L6(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function im(t){return t===void 0||t===1}function qm({scale:t,scaleX:n,scaleY:i}){return!im(t)||!im(n)||!im(i)}function jr(t){return qm(t)||r5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function r5(t){return Jy(t.x)||Jy(t.y)}function Jy(t){return t&&t!=="0%"}function Rd(t,n,i){const a=t-i,c=n*a;return i+c}function e1(t,n,i,a,c){return c!==void 0&&(t=Rd(t,c,a)),Rd(t,i,a)+n}function Km(t,n=0,i=1,a,c){t.min=e1(t.min,n,i,a,c),t.max=e1(t.max,n,i,a,c)}function l5(t,{x:n,y:i}){Km(t.x,n.translate,n.scale,n.originPoint),Km(t.y,i.translate,i.scale,i.originPoint)}const t1=.999999999999,n1=1.0000000000001;function O6(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:y}=u.options;y&&y.props.style&&y.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(ca(t.x,-u.scroll.offset.x),ca(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,l5(t,d)),a&&jr(u.latestValues)&&wd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<n1&&n.x>t1&&(n.x=1),n.y<n1&&n.y>t1&&(n.y=1)}function ca(t,n){t.min+=n,t.max+=n}function s1(t,n,i,a,c=.5){const u=ps(t.min,t.max,c);Km(t,n,i,u,a)}function o1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function wd(t,n,i){const a=i!=null?i:t;s1(t.x,o1(n.x,a.x),n.scaleX,n.scale,n.originX),s1(t.y,o1(n.y,a.y),n.scaleY,n.scale,n.originY)}function c5(t,n){return a5(L6(t.getBoundingClientRect(),n))}function z6(t,n,i){const a=c5(t,i),{scroll:c}=n;return c&&(ca(a.x,c.offset.x),ca(a.y,c.offset.y)),a}const $6={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},I6=Cl.length;function P6(t,n,i){let a="",c=!0;for(let u=0;u<I6;u++){const d=Cl[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const y=parseFloat(h);p=d.startsWith("scale")?y===1:y===0}if(!p||i){const y=qb(h,Bp[d]);if(!p){c=!1;const g=$6[d]||d;a+=`${g}(${y}) `}i&&(n[d]=y)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Pp(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const y=n[p];if(kl.has(p)){d=!0;continue}else if(_b(p)){c[p]=y;continue}else{const g=qb(y,Bp[p]);p.startsWith("origin")?(h=!0,u[p]=g):a[p]=g}}if(n.transform||(d||i?a.transform=P6(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:y="50%",originZ:g=0}=u;a.transformOrigin=`${p} ${y} ${g}`}}function u5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function i1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const lc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(Tt.test(t))t=parseFloat(t);else return t;const i=i1(t,n.target.x),a=i1(t,n.target.y);return`${i}% ${a}%`}},H6={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=Zi.parse(t);if(c.length>5)return a;const u=Zi.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const y=ps(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),u(c)}},Qm={borderRadius:{...lc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:lc,borderTopRightRadius:lc,borderBottomLeftRadius:lc,borderBottomRightRadius:lc,boxShadow:H6};function d5(t,{layout:n,layoutId:i}){return kl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!Qm[t]||t==="opacity")}function Hp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(_o(a[h])||c&&_o(c[h])||d5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function U6(t){return window.getComputedStyle(t)}class f5 extends i5{constructor(){super(...arguments),this.type="html",this.renderInstance=u5}readValueFromInstance(n,i){var a;if(kl.has(i))return(a=this.projection)!=null&&a.isProjecting?zm(i):c4(n,i);{const c=U6(n),u=(_b(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return c5(n,i)}build(n,i,a){Pp(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Hp(n,i,a)}}function V6(t,n){return t in n}class Y6 extends o5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(V6(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return io()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const W6={offset:"stroke-dashoffset",array:"stroke-dasharray"},F6={offset:"strokeDashoffset",array:"strokeDasharray"};function X6(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?W6:F6;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const G6=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function h5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,y,g){var C,k;if(Pp(t,h,y),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:b,style:v}=t;b.transform&&(v.transform=b.transform,delete b.transform),(v.transform||b.transformOrigin)&&(v.transformOrigin=(C=b.transformOrigin)!=null?C:"50% 50%",delete b.transformOrigin),v.transform&&(v.transformBox=(k=g==null?void 0:g.transformBox)!=null?k:"fill-box",delete b.transformBox);for(const j of G6)b[j]!==void 0&&(v[j]=b[j],delete b[j]);n!==void 0&&(b.x=n),i!==void 0&&(b.y=i),a!==void 0&&(b.scale=a),c!==void 0&&X6(b,c,u,d,!1)}const m5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),p5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function q6(t,n,i,a){u5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(m5.has(c)?c:Np(c),n.attrs[c])}function _5(t,n,i){const a=Hp(t,n,i);for(const c in t)if(_o(t[c])||_o(n[c])){const u=Cl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class g5 extends i5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=io}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(kl.has(i)){const a=Xb(i);return a&&a.default||0}return i=m5.has(i)?i:Np(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return _5(n,i,a)}build(n,i,a){h5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){q6(n,i,a,c)}mount(n){this.isSVGTag=p5(n.tagName),super.mount(n)}}const K6=Ip.length;function y5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?y5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<K6;i++){const a=Ip[i],c=t.props[a];(Nc(c)||c===!1)&&(n[a]=c)}return n}function x5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const Q6=[...$p].reverse(),Z6=$p.length;function J6(t){return n=>Promise.all(n.map(({animation:i,options:a})=>Z4(t,i,a)))}function eC(t){let n=J6(t),i=a1(),a=!0,c=!1;const u=y=>(g,b)=>{var C;const v=Nr(t,b,y==="exit"?(C=t.presenceContext)==null?void 0:C.custom:void 0);if(v){const{transition:k,transitionEnd:j,...M}=v;g={...g,...M,...j}}return g};function d(y){n=y(t)}function h(y){const{props:g}=t,b=y5(t.parent)||{},v=[],C=new Set;let k={},j=1/0;for(let T=0;T<Z6;T++){const L=Q6[T],O=i[L],A=g[L]!==void 0?g[L]:b[L],F=Nc(A),U=L===y?O.isActive:null;U===!1&&(j=T);let W=A===b[L]&&A!==g[L]&&F;if(W&&(a||c)&&t.manuallyAnimateOnMount&&(W=!1),O.protectedKeys={...k},!O.isActive&&U===null||!A&&!O.prevProp||Vd(A)||typeof A=="boolean")continue;if(L==="exit"&&O.isActive&&U!==!0){O.prevResolvedValues&&(k={...k,...O.prevResolvedValues});continue}const Q=tC(O.prevProp,A);let me=Q||L===y&&O.isActive&&!W&&F||T>j&&F,se=!1;const ae=Array.isArray(A)?A:[A];let we=ae.reduce(u(L),{});U===!1&&(we={});const{prevResolvedValues:He={}}=O,J={...He,...we},fe=X=>{me=!0,C.has(X)&&(se=!0,C.delete(X)),O.needsAnimating[X]=!0;const pe=t.getValue(X);pe&&(pe.liveStyle=!1)};for(const X in J){const pe=we[X],Ee=He[X];if(k.hasOwnProperty(X))continue;let H=!1;Vm(pe)&&Vm(Ee)?H=!x5(pe,Ee):H=pe!==Ee,H?pe!=null?fe(X):C.add(X):pe!==void 0&&C.has(X)?fe(X):O.protectedKeys[X]=!0}O.prevProp=A,O.prevResolvedValues=we,O.isActive&&(k={...k,...we}),(a||c)&&t.blockInitialAnimation&&(me=!1);const I=W&&Q;me&&(!I||se)&&v.push(...ae.map(X=>{const pe={type:L};if(typeof X=="string"&&(a||c)&&!I&&t.manuallyAnimateOnMount&&t.parent){const{parent:Ee}=t,H=Nr(Ee,X);if(Ee.enteringChildren&&H){const{delayChildren:ce}=H.transition||{};pe.delay=Ib(Ee.enteringChildren,t,ce)}}return{animation:X,options:pe}}))}if(C.size){const T={};if(typeof g.initial!="boolean"){const L=Nr(t,Array.isArray(g.initial)?g.initial[0]:g.initial);L&&L.transition&&(T.transition=L.transition)}C.forEach(L=>{const O=t.getBaseTarget(L),A=t.getValue(L);A&&(A.liveStyle=!0),T[L]=O!=null?O:null}),v.push({animation:T})}let M=!!v.length;return a&&(g.initial===!1||g.initial===g.animate)&&!t.manuallyAnimateOnMount&&(M=!1),a=!1,c=!1,M?n(v):Promise.resolve()}function p(y,g){var v;if(i[y].isActive===g)return Promise.resolve();(v=t.variantChildren)==null||v.forEach(C=>{var k;return(k=C.animationState)==null?void 0:k.setActive(y,g)}),i[y].isActive=g;const b=h(y);for(const C in i)i[C].protectedKeys={};return b}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=a1(),c=!0}}}function tC(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!x5(n,t):!1}function wr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function a1(){return{animate:wr(!0),whileInView:wr(),whileHover:wr(),whileTap:wr(),whileDrag:wr(),whileFocus:wr(),exit:wr()}}function Zm(t,n){t.min=n.min,t.max=n.max}function qi(t,n){Zm(t.x,n.x),Zm(t.y,n.y)}function r1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const b5=1e-4,nC=1-b5,sC=1+b5,v5=.01,oC=0-v5,iC=0+v5;function Go(t){return t.max-t.min}function aC(t,n,i){return Math.abs(t-n)<=i}function l1(t,n,i,a=.5){t.origin=a,t.originPoint=ps(n.min,n.max,t.origin),t.scale=Go(i)/Go(n),t.translate=ps(i.min,i.max,t.origin)-t.originPoint,(t.scale>=nC&&t.scale<=sC||isNaN(t.scale))&&(t.scale=1),(t.translate>=oC&&t.translate<=iC||isNaN(t.translate))&&(t.translate=0)}function kc(t,n,i,a){l1(t.x,n.x,i.x,a?a.originX:void 0),l1(t.y,n.y,i.y,a?a.originY:void 0)}function c1(t,n,i,a=0){const c=a?ps(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+Go(n)}function rC(t,n,i,a){c1(t.x,n.x,i.x,a==null?void 0:a.x),c1(t.y,n.y,i.y,a==null?void 0:a.y)}function u1(t,n,i,a=0){const c=a?ps(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+Go(n)}function Bd(t,n,i,a){u1(t.x,n.x,i.x,a==null?void 0:a.x),u1(t.y,n.y,i.y,a==null?void 0:a.y)}function d1(t,n,i,a,c){return t-=n,t=Rd(t,1/i,a),c!==void 0&&(t=Rd(t,1/c,a)),t}function lC(t,n=0,i=1,a=.5,c,u=t,d=t){if(ua.test(n)&&(n=parseFloat(n),n=ps(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=ps(u.min,u.max,a);t===u&&(h-=n),t.min=d1(t.min,n,i,h,c),t.max=d1(t.max,n,i,h,c)}function f1(t,n,[i,a,c],u,d){lC(t,n[i],n[a],n[c],n.scale,u,d)}const cC=["x","scaleX","originX"],uC=["y","scaleY","originY"];function h1(t,n,i,a){f1(t.x,n,cC,i?i.x:void 0,a?a.x:void 0),f1(t.y,n,uC,i?i.y:void 0,a?a.y:void 0)}function m1(t){return t.translate===0&&t.scale===1}function w5(t){return m1(t.x)&&m1(t.y)}function p1(t,n){return t.min===n.min&&t.max===n.max}function dC(t,n){return p1(t.x,n.x)&&p1(t.y,n.y)}function _1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function S5(t,n){return _1(t.x,n.x)&&_1(t.y,n.y)}function g1(t){return Go(t.x)/Go(t.y)}function y1(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function la(t){return[t("x"),t("y")]}function fC(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:y,rotate:g,rotateX:b,rotateY:v,skewX:C,skewY:k}=i;y&&(a=`perspective(${y}px) ${a}`),g&&(a+=`rotate(${g}deg) `),b&&(a+=`rotateX(${b}deg) `),v&&(a+=`rotateY(${v}deg) `),C&&(a+=`skewX(${C}deg) `),k&&(a+=`skewY(${k}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const C5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],hC=C5.length,x1=t=>typeof t=="string"?parseFloat(t):t,b1=t=>typeof t=="number"||Tt.test(t);function mC(t,n,i,a,c,u){var d,h,p,y;c?(t.opacity=ps(0,(d=i.opacity)!=null?d:1,pC(a)),t.opacityExit=ps((h=n.opacity)!=null?h:1,0,_C(a))):u&&(t.opacity=ps((p=n.opacity)!=null?p:1,(y=i.opacity)!=null?y:1,a));for(let g=0;g<hC;g++){const b=C5[g];let v=v1(n,b),C=v1(i,b);if(v===void 0&&C===void 0)continue;v||(v=0),C||(C=0),v===0||C===0||b1(v)===b1(C)?(t[b]=Math.max(ps(x1(v),x1(C),a),0),(ua.test(C)||ua.test(v))&&(t[b]+="%")):t[b]=C}(n.rotate||i.rotate)&&(t.rotate=ps(n.rotate||0,i.rotate||0,a))}function v1(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const pC=k5(0,.5,lb),_C=k5(.5,.95,Oi);function k5(t,n,i){return a=>a<t?0:a>n?1:i(yl(t,n,a))}function j5(t,n,i){const a=_o(t)?t:rr(t);return a.start(Ap("",a,n,i)),a.animation}function Rc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const gC=(t,n)=>t.depth-n.depth;class yC{constructor(){this.children=[],this.isDirty=!1}add(n){_p(this.children,n),this.isDirty=!0}remove(n){gl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(gC),this.isDirty=!1,this.children.forEach(n)}}function xC(t,n){const i=Xo.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(Da(a),t(u-n))};return as.setup(a,!0),()=>Da(a)}function Sd(t){return _o(t)?t.get():t}class bC{constructor(){this.members=[]}add(n){_p(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(gl(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(gl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const Cd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},am=["","X","Y","Z"],vC=1e3;let wC=0;function rm(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function M5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=Yb(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",as,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&M5(a)}function E5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=wC++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(kC),this.nodes.forEach(DC),this.nodes.forEach(NC),this.nodes.forEach(jC)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new yC)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new yp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Ud(d)&&!e5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:y}=this.options;if(y&&!y.current&&y.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let g,b=0;const v=()=>this.root.updateBlockedByResize=!1;as.read(()=>{b=window.innerWidth}),t(d,()=>{const C=window.innerWidth;C!==b&&(b=C,this.root.updateBlockedByResize=!0,g&&g(),g=xC(v,250),Cd.hasAnimatedSinceResize&&(Cd.hasAnimatedSinceResize=!1,this.nodes.forEach(C1)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&y&&(h||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:b,hasRelativeLayoutChanged:v,layout:C})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const k=this.options.transition||y.getDefaultTransition()||zC,{onLayoutAnimationStart:j,onLayoutAnimationComplete:M}=y.getProps(),T=!this.targetLayout||!S5(this.targetLayout,C),L=!b&&v;if(this.options.layoutRoot||this.resumeFrom||L||b&&(T||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const O={...Tp(k,"layout"),onPlay:j,onComplete:M};(y.shouldReduceMotion||this.options.layoutRoot)&&(O.delay=0,O.type=!1),this.startAnimation(O),this.setAnimationOrigin(g,L)}else b||C1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=C})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Da(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(RC),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&M5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const b=this.path[g];b.shouldResetTransform=!0,(typeof b.latestValues.x=="string"||typeof b.latestValues.y=="string")&&(b.isLayoutDirty=!0),b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(EC),this.nodes.forEach(w1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(S1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(TC),this.nodes.forEach(AC),this.nodes.forEach(SC),this.nodes.forEach(CC)):this.nodes.forEach(S1),this.clearAllSnapshots();const h=Xo.now();Ro.delta=da(0,1e3/60,h-Ro.timestamp),Ro.timestamp=h,Ro.isProcessing=!0,Zh.update.process(Ro),Zh.preRender.process(Ro),Zh.render.process(Ro),Ro.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Op.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(MC),this.sharedNodes.forEach(BC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,as.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){as.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Go(this.snapshot.measuredBox.x)&&!Go(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=io()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!w5(this.projectionDelta),p=this.getTransformTemplate(),y=p?p(this.latestValues,""):void 0,g=y!==this.prevTransformTemplateValue;d&&this.instance&&(h||jr(this.latestValues)||g)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),$C(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var y;const{visualElement:d}=this.options;if(!d)return io();const h=d.measureViewportBox();if(!(((y=this.scroll)==null?void 0:y.wasRoot)||this.path.some(IC))){const{scroll:g}=this.root;g&&(ca(h.x,g.offset.x),ca(h.y,g.offset.y))}return h}removeElementScroll(d){var p;const h=io();if(qi(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let y=0;y<this.path.length;y++){const g=this.path[y],{scroll:b,options:v}=g;g!==this.root&&b&&v.layoutScroll&&(b.wasRoot&&qi(h,d),ca(h.x,b.offset.x),ca(h.y,b.offset.y))}return h}applyTransform(d,h=!1,p){var g,b;const y=p||io();qi(y,d);for(let v=0;v<this.path.length;v++){const C=this.path[v];!h&&C.options.layoutScroll&&C.scroll&&C!==C.root&&(ca(y.x,-C.scroll.offset.x),ca(y.y,-C.scroll.offset.y)),jr(C.latestValues)&&wd(y,C.latestValues,(g=C.layout)==null?void 0:g.layoutBox)}return jr(this.latestValues)&&wd(y,this.latestValues,(b=this.layout)==null?void 0:b.layoutBox),y}removeTransform(d){var p;const h=io();qi(h,d);for(let y=0;y<this.path.length;y++){const g=this.path[y];if(!jr(g.latestValues))continue;let b;g.instance&&(qm(g.latestValues)&&g.updateSnapshot(),b=io(),qi(b,g.measurePageBox())),h1(h,g.latestValues,(p=g.snapshot)==null?void 0:p.layoutBox,b)}return jr(this.latestValues)&&h1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ro.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var C;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(C=this.parent)!=null&&C.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:b}=this.options;if(!this.layout||!(g||b))return;this.resolvedRelativeTargetAt=Ro.timestamp;const v=this.getClosestProjectingParent();v&&this.linkedParentVersion!==v.layoutVersion&&!v.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&v&&v.layout?this.createRelativeTarget(v,this.layout.layoutBox,v.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=io(),this.targetWithTransforms=io()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),rC(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):qi(this.target,this.layout.layoutBox),l5(this.target,this.targetDelta)):qi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?this.createRelativeTarget(v,this.target,v.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||qm(this.parent.latestValues)||r5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=io(),this.relativeTargetOrigin=io(),Bd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),qi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var k;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(k=this.parent)!=null&&k.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Ro.timestamp&&(p=!1),p)return;const{layout:y,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||g))return;qi(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,v=this.treeScale.y;O6(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=io());const{target:C}=d;if(!C){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(r1(this.prevProjectionDelta.x,this.projectionDelta.x),r1(this.prevProjectionDelta.y,this.projectionDelta.y)),kc(this.projectionDelta,this.layoutCorrected,C,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==v||!y1(this.projectionDelta.x,this.prevProjectionDelta.x)||!y1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",C))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ml(),this.projectionDelta=ml(),this.projectionDeltaWithTransform=ml()}setAnimationOrigin(d,h=!1){const p=this.snapshot,y=p?p.latestValues:{},g={...this.latestValues},b=ml();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const v=io(),C=p?p.source:void 0,k=this.layout?this.layout.source:void 0,j=C!==k,M=this.getStack(),T=!M||M.members.length<=1,L=!!(j&&!T&&this.options.crossfade===!0&&!this.path.some(OC));this.animationProgress=0;let O;this.mixTargetDelta=A=>{const F=A/1e3;k1(b.x,d.x,F),k1(b.y,d.y,F),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bd(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),LC(this.relativeTarget,this.relativeTargetOrigin,v,F),O&&dC(this.relativeTarget,O)&&(this.isProjectionDirty=!1),O||(O=io()),qi(O,this.relativeTarget)),j&&(this.animationValues=g,mC(g,y,this.latestValues,F,L,T)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=F},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,y;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(y=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||y.stop(),this.pendingAnimation&&(Da(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=as.update(()=>{Cd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=rr(0)),this.motionValue.jump(0,!1),this.currentAnimation=j5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(vC),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:y,latestValues:g}=d;if(!(!h||!p||!y)){if(this!==d&&this.layout&&y&&T5(this.options.animationType,this.layout.layoutBox,y.layoutBox)){p=this.target||io();const b=Go(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+b;const v=Go(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+v}qi(h,p),wd(h,g),kc(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new bC),this.sharedNodes.get(d).add(h);const y=h.options.initialPromotionConfig;h.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const y=this.getStack();y&&y.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const y={};p.z&&rm("z",d,y,this.animationValues);for(let g=0;g<am.length;g++)rm(`rotate${am[g]}`,d,y,this.animationValues),rm(`skew${am[g]}`,d,y,this.animationValues);d.render();for(const g in y)d.setStaticValue(g,y[g]),this.animationValues&&(this.animationValues[g]=y[g]);d.scheduleRender()}applyProjectionStyles(d,h){var k,j;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=Sd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=Sd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!jr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=y.animationValues||y.latestValues;this.applyTransformsToTarget();let b=fC(this.projectionDeltaWithTransform,this.treeScale,g);p&&(b=p(g,b)),d.transform=b;const{x:v,y:C}=this.projectionDelta;d.transformOrigin=`${v.origin*100}% ${C.origin*100}% 0`,y.animationValues?d.opacity=y===this?(j=(k=g.opacity)!=null?k:this.latestValues.opacity)!=null?j:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=y===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const M in Qm){if(g[M]===void 0)continue;const{correct:T,applyTo:L,isCSSVariable:O}=Qm[M],A=b==="none"?g[M]:T(g[M],y);if(L){const F=L.length;for(let U=0;U<F;U++)d[L[U]]=A}else O?this.options.visualElement.renderState.vars[M]=A:d[M]=A}this.options.layoutId&&(d.pointerEvents=y===this?Sd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(w1),this.root.sharedNodes.clear()}}}function SC(t){t.updateLayout()}function CC(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")la(b=>{const v=d?n.measuredBox[b]:n.layoutBox[b],C=Go(v);v.min=a[b].min,v.max=v.min+C});else if(u==="x"||u==="y"){const b=u==="x"?"y":"x";Zm(d?n.measuredBox[b]:n.layoutBox[b],a[b])}else T5(u,n.layoutBox,a)&&la(b=>{const v=d?n.measuredBox[b]:n.layoutBox[b],C=Go(a[b]);v.max=v.min+C,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[b].max=t.relativeTarget[b].min+C)});const h=ml();kc(h,a,n.layoutBox);const p=ml();d?kc(p,t.applyTransform(c,!0),n.measuredBox):kc(p,a,n.layoutBox);const y=!w5(h);let g=!1;if(!t.resumeFrom){const b=t.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:v,layout:C}=b;if(v&&C){const k=t.options.layoutAnchor||void 0,j=io();Bd(j,n.layoutBox,v.layoutBox,k);const M=io();Bd(M,a,C.layoutBox,k),S5(j,M)||(g=!0),b.options.layoutRoot&&(t.relativeTarget=M,t.relativeTargetOrigin=j,t.relativeParent=b)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:g})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function kC(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function jC(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function MC(t){t.clearSnapshot()}function w1(t){t.clearMeasurements()}function EC(t){t.isLayoutDirty=!0,t.updateLayout()}function S1(t){t.isLayoutDirty=!1}function TC(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function AC(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function C1(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function DC(t){t.resolveTargetDelta()}function NC(t){t.calcProjection()}function RC(t){t.resetSkewAndRotation()}function BC(t){t.removeLeadSnapshot()}function k1(t,n,i){t.translate=ps(n.translate,0,i),t.scale=ps(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function j1(t,n,i,a){t.min=ps(n.min,i.min,a),t.max=ps(n.max,i.max,a)}function LC(t,n,i,a){j1(t.x,n.x,i.x,a),j1(t.y,n.y,i.y,a)}function OC(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const zC={duration:.45,ease:[.4,0,.1,1]},M1=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),E1=M1("applewebkit/")&&!M1("chrome/")?Math.round:Oi;function T1(t){t.min=E1(t.min),t.max=E1(t.max)}function $C(t){T1(t.x),T1(t.y)}function T5(t,n,i){return t==="position"||t==="preserve-aspect"&&!aC(g1(n),g1(i),.2)}function IC(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const PC=E5({attachResizeListener:(t,n)=>Rc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),lm={current:void 0},A5=E5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!lm.current){const t=new PC({});t.mount(window),t.setOptions({layoutScroll:!0}),lm.current=t}return lm.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Wd=_.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function A1(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function HC(...t){return n=>{let i=!1;const a=t.map(c=>{const u=A1(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():A1(t[c],null)}}}}function UC(...t){return _.useCallback(HC(...t),t)}class VC extends _.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(yd(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=yd(a)&&a.offsetWidth||0,u=yd(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function YC({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var v,C;const d=_.useId(),h=_.useRef(null),p=_.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=_.useContext(Wd),g=(C=(v=t.props)==null?void 0:v.ref)!=null?C:t==null?void 0:t.ref,b=UC(h,g);return _.useInsertionEffect(()=>{const{width:k,height:j,top:M,left:T,right:L,bottom:O}=p.current;if(n||u===!1||!h.current||!k||!j)return;const A=i==="left"?`left: ${T}`:`right: ${L}`,F=a==="bottom"?`bottom: ${O}`:`top: ${M}`;h.current.dataset.motionPopId=d;const U=document.createElement("style");y&&(U.nonce=y);const W=c!=null?c:document.head;return W.appendChild(U),U.sheet&&U.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${k}px !important;
            height: ${j}px !important;
            ${A}px !important;
            ${F}px !important;
          }
        `),()=>{var Q;(Q=h.current)==null||Q.removeAttribute("data-motion-pop-id"),W.contains(U)&&W.removeChild(U)}},[n]),l.jsx(VC,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:_.cloneElement(t,{ref:b})})}const WC=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:y})=>{const g=Lc(FC),b=_.useId();let v=!0,C=_.useMemo(()=>(v=!1,{id:b,initial:n,isPresent:i,custom:c,onExitComplete:k=>{g.set(k,!0);for(const j of g.values())if(!j)return;a&&a()},register:k=>(g.set(k,!1),()=>g.delete(k))}),[i,g,a]);return u&&v&&(C={...C}),_.useMemo(()=>{g.forEach((k,j)=>g.set(j,!1))},[i]),_.useEffect(()=>{!i&&!g.size&&a&&a()},[i]),t=l.jsx(YC,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:y,children:t}),l.jsx(Pd.Provider,{value:C,children:t})};function FC(){return new Map}function D5(t=!0){const n=_.useContext(Pd);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=_.useId();_.useEffect(()=>{if(t)return c(u)},[t]);const d=_.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const Ku=t=>t.key||"";function D1(t){const n=[];return _.Children.forEach(t,i=>{_.isValidElement(i)&&n.push(i)}),n}const Fd=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:y})=>{const[g,b]=D5(d),v=_.useMemo(()=>D1(t),[t]),C=d&&!g?[]:v.map(Ku),k=_.useRef(!0),j=_.useRef(v),M=Lc(()=>new Map),T=_.useRef(new Set),[L,O]=_.useState(v),[A,F]=_.useState(v);pp(()=>{k.current=!1,j.current=v;for(let Q=0;Q<A.length;Q++){const me=Ku(A[Q]);C.includes(me)?(M.delete(me),T.current.delete(me)):M.get(me)!==!0&&M.set(me,!1)}},[A,C.length,C.join("-")]);const U=[];if(v!==L){let Q=[...v];for(let me=0;me<A.length;me++){const se=A[me],ae=Ku(se);C.includes(ae)||(Q.splice(me,0,se),U.push(se))}return u==="wait"&&U.length&&(Q=U),F(D1(Q)),O(v),null}const{forceRender:W}=_.useContext(mp);return l.jsx(l.Fragment,{children:A.map(Q=>{const me=Ku(Q),se=d&&!g?!1:v===A||C.includes(me),ae=()=>{if(T.current.has(me))return;if(M.has(me))T.current.add(me),M.set(me,!0);else return;let we=!0;M.forEach(He=>{He||(we=!1)}),we&&(W==null||W(),F(j.current),d&&(b==null||b()),a&&a())};return l.jsx(WC,{isPresent:se,initial:!k.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:y,onExitComplete:se?void 0:ae,anchorX:h,anchorY:p,children:Q},me)})})},N5=_.createContext({strict:!1}),N1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let R1=!1;function XC(){if(R1)return;const t={};for(const n in N1)t[n]={isEnabled:i=>N1[n].some(a=>!!i[a])};s5(t),R1=!0}function R5(){return XC(),R6()}function GC(t){const n=R5();for(const i in t)n[i]={...n[i],...t[i]};s5(n)}const qC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ld(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||qC.has(t)}let B5=t=>!Ld(t);function KC(t){typeof t=="function"&&(B5=n=>n.startsWith("on")?!Ld(n):t(n))}try{KC(require("@emotion/is-prop-valid").default)}catch{}function QC(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||_o(t[c])||(B5(c)||i===!0&&Ld(c)||!n&&!Ld(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Xd=_.createContext({});function ZC(t,n){if(Yd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||Nc(i)?i:void 0,animate:Nc(a)?a:void 0}}return t.inherit!==!1?n:{}}function JC(t){const{initial:n,animate:i}=ZC(t,_.useContext(Xd));return _.useMemo(()=>({initial:n,animate:i}),[B1(n),B1(i)])}function B1(t){return Array.isArray(t)?t.join(" "):t}const Up=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function L5(t,n,i){for(const a in n)!_o(n[a])&&!d5(a,i)&&(t[a]=n[a])}function e3({transformTemplate:t},n){return _.useMemo(()=>{const i=Up();return Pp(i,n,t),Object.assign({},i.vars,i.style)},[n])}function t3(t,n){const i=t.style||{},a={};return L5(a,i,t),Object.assign(a,e3(t,n)),a}function n3(t,n){const i={},a=t3(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const O5=()=>({...Up(),attrs:{}});function s3(t,n,i,a){const c=_.useMemo(()=>{const u=O5();return h5(u,n,p5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};L5(u,t.style,t),c.style={...u,...c.style}}return c}const o3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Vp(t){return typeof t!="string"||t.includes("-")?!1:!!(o3.indexOf(t)>-1||/[A-Z]/u.test(t))}function i3(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Vp(t))?s3:n3)(n,a,c,t),y=QC(n,typeof t=="string",u),g=t!==_.Fragment?{...y,...p,ref:i}:{},{children:b}=n,v=_.useMemo(()=>_o(b)?b.get():b,[b]);return _.createElement(t,{...g,children:v})}function a3({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:r3(i,a,c,t),renderState:n()}}function r3(t,n,i,a){const c={},u=a(t,{});for(const v in u)c[v]=Sd(u[v]);let{initial:d,animate:h}=t;const p=Yd(t),y=t5(t);n&&y&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let g=i?i.initial===!1:!1;g=g||d===!1;const b=g?h:d;if(b&&typeof b!="boolean"&&!Vd(b)){const v=Array.isArray(b)?b:[b];for(let C=0;C<v.length;C++){const k=Dp(t,v[C]);if(k){const{transitionEnd:j,transition:M,...T}=k;for(const L in T){let O=T[L];if(Array.isArray(O)){const A=g?O.length-1:0;O=O[A]}O!==null&&(c[L]=O)}for(const L in j)c[L]=j[L]}}}return c}const z5=t=>(n,i)=>{const a=_.useContext(Xd),c=_.useContext(Pd),u=()=>a3(t,n,a,c);return i?u():Lc(u)},l3=z5({scrapeMotionValuesFromProps:Hp,createRenderState:Up}),c3=z5({scrapeMotionValuesFromProps:_5,createRenderState:O5}),u3=Symbol.for("motionComponentSymbol");function d3(t,n,i){const a=_.useRef(i);_.useInsertionEffect(()=>{a.current=i});const c=_.useRef(null);return _.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const $5=_.createContext({});function dl(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function f3(t,n,i,a,c,u){var O,A;const{visualElement:d}=_.useContext(Xd),h=_.useContext(N5),p=_.useContext(Pd),y=_.useContext(Wd),g=y.reducedMotion,b=y.skipAnimations,v=_.useRef(null),C=_.useRef(!1);a=a||h.renderer,!v.current&&a&&(v.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g,skipAnimations:b,isSVG:u}),C.current&&v.current&&(v.current.manuallyAnimateOnMount=!0));const k=v.current,j=_.useContext($5);k&&!k.projection&&c&&(k.type==="html"||k.type==="svg")&&h3(v.current,i,c,j);const M=_.useRef(!1);_.useInsertionEffect(()=>{k&&M.current&&k.update(i,p)});const T=i[Vb],L=_.useRef(!!T&&typeof window<"u"&&!((O=window.MotionHandoffIsComplete)!=null&&O.call(window,T))&&((A=window.MotionHasOptimisedAnimation)==null?void 0:A.call(window,T)));return pp(()=>{C.current=!0,k&&(M.current=!0,window.MotionIsMounted=!0,k.updateFeatures(),k.scheduleRenderMicrotask(),L.current&&k.animationState&&k.animationState.animateChanges())}),_.useEffect(()=>{k&&(!L.current&&k.animationState&&k.animationState.animateChanges(),L.current&&(queueMicrotask(()=>{var F;(F=window.MotionHandoffMarkAsComplete)==null||F.call(window,T)}),L.current=!1),k.enteringChildren=void 0)}),k}function h3(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:y,layoutAnchor:g,layoutCrossfade:b}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:I5(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&dl(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:b,layoutScroll:p,layoutRoot:y,layoutAnchor:g})}function I5(t){if(t)return t.options.allowProjection!==!1?t.projection:I5(t.parent)}function cm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var y,g;a&&GC(a);const u=i?i==="svg":Vp(t),d=u?c3:l3;function h(b,v){let C;const k={..._.useContext(Wd),...b,layoutId:m3(b)},{isStatic:j}=k,M=JC(b),T=d(b,j);if(!j&&typeof window<"u"){p3();const L=_3(k);C=L.MeasureLayout,M.visualElement=f3(t,T,k,c,L.ProjectionNode,u)}return l.jsxs(Xd.Provider,{value:M,children:[C&&M.visualElement?l.jsx(C,{visualElement:M.visualElement,...k}):null,i3(t,b,d3(T,M.visualElement,v),T,j,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(g=(y=t.displayName)!=null?y:t.name)!=null?g:""})`}`;const p=_.forwardRef(h);return p[u3]=t,p}function m3({layoutId:t}){const n=_.useContext(mp).id;return n&&t!==void 0?n+"-"+t:t}function p3(t,n){_.useContext(N5).strict}function _3(t){const n=R5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function g3(t,n){if(typeof Proxy>"u")return cm;const i=new Map,a=(u,d)=>cm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,cm(d,void 0,t,n)),i.get(d))})}const y3=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Vp(t))?new g5(n):new f5(n,{allowProjection:t!==_.Fragment})};class x3 extends lr{constructor(n){super(n),n.animationState||(n.animationState=eC(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Vd(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let b3=0;class v3 extends lr{constructor(){super(...arguments),this.id=b3++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Nr(this.node,d,h);if(p){const{transition:y,transitionEnd:g,...b}=p;for(const v in b)(u=this.node.getValue(v))==null||u.jump(b[v])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const w3={animation:{Feature:x3},exit:{Feature:v3}};function Ic(t){return{point:{x:t.pageX,y:t.pageY}}}const S3=t=>n=>zp(n)&&t(n,Ic(n));function jc(t,n,i,a){return Rc(t,n,S3(i),a)}const P5=({current:t})=>t?t.ownerDocument.defaultView:null,L1=(t,n)=>Math.abs(t-n);function C3(t,n){const i=L1(t.x,n.x),a=L1(t.y,n.y);return Math.sqrt(i**2+a**2)}const O1=new Set(["auto","scroll"]);class H5{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=C=>{this.handleScroll(C.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Qu(this.lastRawMoveEventInfo,this.transformPagePoint));const C=um(this.lastMoveEventInfo,this.history),k=this.startEvent!==null,j=C3(C.offset,{x:0,y:0})>=this.distanceThreshold;if(!k&&!j)return;const{point:M}=C,{timestamp:T}=Ro;this.history.push({...M,timestamp:T});const{onStart:L,onMove:O}=this.handlers;k||(L&&L(this.lastMoveEvent,C),this.startEvent=this.lastMoveEvent),O&&O(this.lastMoveEvent,C)},this.handlePointerMove=(C,k)=>{this.lastMoveEvent=C,this.lastRawMoveEventInfo=k,this.lastMoveEventInfo=Qu(k,this.transformPagePoint),as.update(this.updatePoint,!0)},this.handlePointerUp=(C,k)=>{this.end();const{onEnd:j,onSessionEnd:M,resumeAnimation:T}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const L=um(C.type==="pointercancel"?this.lastMoveEventInfo:Qu(k,this.transformPagePoint),this.history);this.startEvent&&j&&j(C,L),M&&M(C,L)},!zp(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Ic(n),y=Qu(p,this.transformPagePoint),{point:g}=y,{timestamp:b}=Ro;this.history=[{...g,timestamp:b}];const{onSessionStart:v}=i;v&&v(n,um(y,this.history)),this.removeListeners=Oc(jc(this.contextWindow,"pointermove",this.handlePointerMove),jc(this.contextWindow,"pointerup",this.handlePointerUp),jc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(O1.has(a.overflowX)||O1.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),as.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Da(this.updatePoint)}}function Qu(t,n){return n?{point:n(t.point)}:t}function z1(t,n){return{x:t.x-n.x,y:t.y-n.y}}function um({point:t},n){return{point:t,delta:z1(t,U5(n)),offset:z1(t,k3(n)),velocity:j3(n,.1)}}function k3(t){return t[0]}function U5(t){return t[t.length-1]}function j3(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=U5(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>ai(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>ai(n)*2&&(a=t[1]);const u=Li(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function M3(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?ps(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?ps(i,t,a.max):Math.min(t,i)),t}function $1(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function E3(t,{top:n,left:i,bottom:a,right:c}){return{x:$1(t.x,i,c),y:$1(t.y,n,a)}}function I1(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function T3(t,n){return{x:I1(t.x,n.x),y:I1(t.y,n.y)}}function A3(t,n){let i=.5;const a=Go(t),c=Go(n);return c>a?i=yl(n.min,n.max-a,t.min):a>c&&(i=yl(t.min,t.max-c,n.min)),da(0,1,i)}function D3(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const Jm=.35;function N3(t=Jm){return t===!1?t=0:t===!0&&(t=Jm),{x:P1(t,"left","right"),y:P1(t,"top","bottom")}}function P1(t,n,i){return{min:H1(t,n),max:H1(t,i)}}function H1(t,n){return typeof t=="number"?t:t[n]||0}const R3=new WeakMap;class B3{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=io(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=b=>{i&&this.snapToCursor(Ic(b).point),this.stopAnimation()},d=(b,v)=>{const{drag:C,dragPropagation:k,onDragStart:j}=this.getProps();if(C&&!k&&(this.openDragLock&&this.openDragLock(),this.openDragLock=u6(C),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),la(T=>{let L=this.getAxisMotionValue(T).get()||0;if(ua.test(L)){const{projection:O}=this.visualElement;if(O&&O.layout){const A=O.layout.layoutBox[T];A&&(L=Go(A)*(parseFloat(L)/100))}}this.originPoint[T]=L}),j&&as.update(()=>j(b,v),!1,!0),Ym(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},h=(b,v)=>{this.latestPointerEvent=b,this.latestPanInfo=v;const{dragPropagation:C,dragDirectionLock:k,onDirectionLock:j,onDrag:M}=this.getProps();if(!C&&!this.openDragLock)return;const{offset:T}=v;if(k&&this.currentDirection===null){this.currentDirection=O3(T),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",v.point,T),this.updateAxis("y",v.point,T),this.visualElement.render(),M&&as.update(()=>M(b,v),!1,!0)},p=(b,v)=>{this.latestPointerEvent=b,this.latestPanInfo=v,this.stop(b,v),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>{const{dragSnapToOrigin:b}=this.getProps();(b||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new H5(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:P5(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&as.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!Zu(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=M3(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&dl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=E3(a.layoutBox,n):this.constraints=!1,this.elastic=N3(i),c!==this.constraints&&!dl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&la(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=D3(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!dl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=z6(a,c.root,this.visualElement.getTransformPagePoint());let d=T3(c.layout.layoutBox,u);if(i){const h=i(B6(d));this.hasMutatedConstraints=!!h,h&&(d=a5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},y=la(g=>{if(!Zu(g,i,this.currentDirection))return;let b=p&&p[g]||{};(d===!0||d===g)&&(b={min:0,max:0});const v=c?200:1e6,C=c?40:1e7,k={type:"inertia",velocity:a?n[g]:0,bounceStiffness:v,bounceDamping:C,timeConstant:750,restDelta:1,restSpeed:10,...u,...b};return this.startAxisValueAnimation(g,k)});return Promise.all(y).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Ym(this.visualElement,n),a.start(Ap(n,a,0,i,this.visualElement,!1))}stopAnimation(){la(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){la(i=>{const{drag:a}=this.getProps();if(!Zu(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-ps(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!dl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};la(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=A3({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),la(d=>{if(!Zu(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:y}=this.constraints[d];h.set(ps(p,y,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;R3.set(this.visualElement,this);const n=this.visualElement.current,i=jc(n,"pointerdown",y=>{const{drag:g,dragListener:b=!0}=this.getProps(),v=y.target,C=v!==n&&_6(v);g&&b&&!C&&this.start(y)});let a;const c=()=>{const{dragConstraints:y}=this.getProps();dl(y)&&y.current&&(this.constraints=this.resolveRefConstraints(),a||(a=L3(n,y.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),as.read(c);const h=Rc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:g})=>{this.isDragging&&g&&(la(b=>{const v=this.getAxisMotionValue(b);v&&(this.originPoint[b]+=y[b].translate,v.set(v.get()+y[b].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=Jm,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function U1(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function L3(t,n,i){const a=qy(t,U1(i)),c=qy(n,U1(i));return()=>{a(),c()}}function Zu(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function O3(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class z3 extends lr{constructor(n){super(n),this.removeGroupControls=Oi,this.removeListeners=Oi,this.controls=new B3(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Oi}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const dm=t=>(n,i)=>{t&&as.update(()=>t(n,i),!1,!0)};class $3 extends lr{constructor(){super(...arguments),this.removePointerDownListener=Oi}onPointerDown(n){this.session=new H5(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:P5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:dm(n),onStart:dm(i),onMove:dm(a),onEnd:(u,d)=>{delete this.session,c&&as.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=jc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let fm=!1;class I3 extends _.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),fm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Cd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),fm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||as.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Op.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;fm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function V5(t){const[n,i]=D5(),a=_.useContext(mp);return l.jsx(I3,{...t,layoutGroup:a,switchLayoutGroup:_.useContext($5),isPresent:n,safeToRemove:i})}const P3={pan:{Feature:$3},drag:{Feature:z3,ProjectionNode:A5,MeasureLayout:V5}};function V1(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&as.postRender(()=>u(n,Ic(n)))}class H3 extends lr{mount(){const{current:n}=this.node;n&&(this.unmount=f6(n,(i,a)=>(V1(this.node,a,"Start"),c=>V1(this.node,c,"End"))))}unmount(){}}class U3 extends lr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Oc(Rc(this.node.current,"focus",()=>this.onFocus()),Rc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Y1(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&as.postRender(()=>u(n,Ic(n)))}class V3 extends lr{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=y6(n,(c,u)=>(Y1(this.node,u,"Start"),(d,{success:h})=>Y1(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const ep=new WeakMap,hm=new WeakMap,Y3=t=>{const n=ep.get(t.target);n&&n(t)},W3=t=>{t.forEach(Y3)};function F3({root:t,...n}){const i=t||document;hm.has(i)||hm.set(i,{});const a=hm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(W3,{root:t,...n})),a[c]}function X3(t,n,i){const a=F3(n);return ep.set(t,i),a.observe(t),()=>{ep.delete(t),a.unobserve(t)}}const G3={some:0,all:1};class q3 extends lr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:G3[c]},h=y=>{const{isIntersecting:g}=y;if(this.isInView===g||(this.isInView=g,u&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:b,onViewportLeave:v}=this.node.getProps(),C=g?b:v;C&&C(y)};this.stopObserver=X3(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(K3(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function K3({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const Q3={inView:{Feature:q3},tap:{Feature:V3},focus:{Feature:U3},hover:{Feature:H3}},Z3={layout:{ProjectionNode:A5,MeasureLayout:V5}},J3={...w3,...Q3,...P3,...Z3},qo=g3(J3,y3);function tp(t){const n=Lc(()=>rr(t)),{isStatic:i}=_.useContext(Wd);if(i){const[,a]=_.useState(t);_.useEffect(()=>n.on("change",a),[])}return n}function Y5(t,n){const i=tp(n()),a=()=>i.set(n());return a(),pp(()=>{const c=()=>as.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),Da(a)}}),i}function ek(t){Cc.current=[],t();const n=Y5(Cc.current,t);return Cc.current=void 0,n}function Ju(t,n,i,a){if(typeof t=="function")return ek(t);const u=typeof n=="function"?n:M6(n,i,a),d=Array.isArray(t)?W1(t,u):W1([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function W1(t,n){const i=Lc(()=>[]);return Y5(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Yp(t){return typeof t=="object"&&!Array.isArray(t)}function W5(t,n,i,a){return t==null?[]:typeof t=="string"&&Yp(n)?Lp(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function tk(t,n,i){return t*(n+1)}function F1(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function nk(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(gl(t,c),a--)}}function sk(t,n,i,a,c,u){nk(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:ps(c,u,a[d]),easing:fb(i,d)})}function ok(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function ik(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const ak="easeInOut";function rk(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},y=new Map;let g=0,b=0,v=0;for(let C=0;C<t.length;C++){const k=t[C];if(typeof k=="string"){y.set(k,b);continue}else if(!Array.isArray(k)){y.set(k.name,F1(b,k.at,g,y));continue}let[j,M,T={}]=k;T.at!==void 0&&(b=F1(b,T.at,g,y));let L=0;const O=(A,F,U,W=0,Q=0)=>{const me=lk(A),{delay:se=0,times:ae=Eb(me),type:we=n.type||"keyframes",repeat:He,repeatType:J,repeatDelay:fe=0,...I}=F;let{ease:ue=n.ease||"easeOut",duration:X}=F;const pe=typeof se=="function"?se(W,Q):se,Ee=me.length,H=Ep(we)?we:c==null?void 0:c[we||"keyframes"];if(Ee<=2&&H){let ge=100;if(Ee===2&&dk(me)){const et=me[1]-me[0];ge=Math.abs(et)}const Ae={...n,...I};X!==void 0&&(Ae.duration=ai(X));const ze=Cb(Ae,ge,H);ue=ze.ease,X=ze.duration}X!=null||(X=u);const ce=b+pe;ae.length===1&&ae[0]===0&&(ae[1]=1);const ee=ae.length-me.length;if(ee>0&&Mb(ae,ee),me.length===1&&me.unshift(null),He){X=tk(X,He);const ge=[...me],Ae=[...ae];ue=Array.isArray(ue)?[...ue]:[ue];const ze=[...ue];for(let et=0;et<He;et++){me.push(...ge);for(let $e=0;$e<ge.length;$e++)ae.push(Ae[$e]+(et+1)),ue.push($e===0?"linear":fb(ze,$e-1))}ok(ae,He)}const le=ce+X;sk(U,me,ue,ae,ce,le),L=Math.max(pe+X,L),v=Math.max(le,v)};if(_o(j)){const A=X1(j,h);O(M,T,G1("default",A))}else{const A=W5(j,M,a,p),F=A.length;for(let U=0;U<F;U++){M=M,T=T;const W=A[U],Q=X1(W,h);for(const me in M)O(M[me],ck(T,me),G1(me,Q),U,F)}}g=b,b+=L}return h.forEach((C,k)=>{for(const j in C){const M=C[j];M.sort(ik);const T=[],L=[],O=[];for(let W=0;W<M.length;W++){const{at:Q,value:me,easing:se}=M[W];T.push(me),L.push(yl(0,v,Q)),O.push(se||"easeOut")}L[0]!==0&&(L.unshift(0),T.unshift(T[0]),O.unshift(ak)),L[L.length-1]!==1&&(L.push(1),T.push(null)),d.has(k)||d.set(k,{keyframes:{},transition:{}});const A=d.get(k);A.keyframes[j]=T;const{type:F,...U}=n;A.transition[j]={...U,duration:v,ease:O,times:L,...i}}}),d}function X1(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function G1(t,n){return n[t]||(n[t]=[]),n[t]}function lk(t){return Array.isArray(t)?t:[t]}function ck(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const uk=t=>typeof t=="number",dk=t=>t.every(uk);function fk(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Ud(t)&&!e5(t)?new g5(n):new f5(n);i.mount(t),Dc.set(t,i)}function hk(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new Y6(n);i.mount(t),Dc.set(t,i)}function mk(t,n){return _o(t)||typeof t=="number"||typeof t=="string"&&!Yp(n)}function F5(t,n,i,a){const c=[];if(mk(t,n))c.push(j5(t,Yp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=W5(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],y=p instanceof Element?fk:hk;Dc.has(p)||y(p);const g=Dc.get(p),b={...i};"delay"in b&&typeof b.delay=="function"&&(b.delay=b.delay(h,d)),c.push(...Rp(g,{...n,transition:b},{}))}}return c}function pk(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=rr(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return rk(c,n,i,{spring:Ac}).forEach(({keyframes:d,transition:h},p)=>{a.push(...F5(p,d,h))}),a}function _k(t){return Array.isArray(t)&&t.some(Array.isArray)}function gk(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(_k(c)){const{onComplete:g,...b}=u||{};typeof g=="function"&&(p=g),h=pk(c,i!==void 0?{reduceMotion:i,...b}:b,n)}else{const{onComplete:g,...b}=d||{};typeof g=="function"&&(p=g),h=F5(c,u,i!==void 0?{reduceMotion:i,...b}:b,n)}const y=new R4(h);return p&&y.finished.then(p),n&&(n.animations.push(y),y.finished.then(()=>{gl(n.animations,y)})),y}return a}const q1=gk(),Aa=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function K1(t,n){var a;const i=[...(a=t.childShas)!=null?a:[]];return i.includes(n)||i.push(n),{...t,childShas:i}}function yk(t,n,i,a,c,u){if(!i)return{directCommits:t,branchCommitPreviews:n};const d=t.map(p=>Aa(p.fullSha,i)||Aa(p.sha,i)?K1(p,a):p),h=Object.fromEntries(Object.entries(n).map(([p,y])=>[p,y.map(g=>(p===c||p===u)&&(Aa(g.fullSha,i)||Aa(g.sha,i))?K1(g,a):g)]));return{directCommits:d,branchCommitPreviews:h}}function xk(t,n,i,a){if(!t)return null;const c=d=>Aa(d,t);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(y=>c(y.fullSha)||c(y.sha)))return d;return null}function bk(t,n,i,a,c,u,d=!1){const h=t.baseSha,p=`STASH:${t.index}`,y=`Stash ${t.index+1}`,g=xk(h,i,a,u),b=(()=>{var U;if(!h)return null;const F=i.find(W=>Aa(W.fullSha,h)||Aa(W.sha,h));if(F!=null&&F.date)return F.date;if(g&&!d){const W=((U=a[g])!=null?U:[]).find(Q=>Aa(Q.fullSha,h)||Aa(Q.sha,h));if(W!=null&&W.date)return W.date}return null})(),v=b?new Date(b).getTime():Number.NaN,C=Date.now(),k=Number.isFinite(v)?Math.max(C,v+1+t.index):C+t.index,j=new Date(k).toISOString(),M=t.message.trim(),T={fullSha:p,sha:y,parentSha:h,clusterKey:null,childShas:[],message:M||y,author:"You",date:j,kind:"stash"},L=`*Stash:${t.index}`,O={name:L,commitsAhead:1,commitsBehind:0,lastCommitDate:j,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:p,divergedFromSha:h!=null?h:void 0,parentBranch:g||u},A=yk(i,a,h,p,L,u);return{branches:[O,...n],directCommits:A.directCommits,branchCommitPreviews:{...A.branchCommitPreviews,[L]:[T]},branchUniqueAheadCounts:{...c,[L]:1}}}function X5(t,n,i,a,c,u,d=!1){const h=[...t].sort((y,g)=>y.index-g.index);let p={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const y of h)p=bk(y,p.branches,p.directCommits,p.branchCommitPreviews,p.branchUniqueAheadCounts,u,d);return p}function vk({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:y,manuallyOpenedClumps:g=new Set,manuallyClosedClumps:b=new Set,gridSearchQuery:v="",gridFocusSha:C=null,orientation:k="horizontal"}){var W,Q;const j=X5(y,t,i,u,h,c,(W=p==null?void 0:p.hasUncommittedChanges)!=null?W:!1);let M=j.branches,T=j.directCommits,L=j.branchCommitPreviews,O=j.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const me=p.headSha||p.parentSha||null,se=(X,pe)=>!X||!pe?!1:X===pe||X.startsWith(pe)||pe.startsWith(X),ae=p.branchName?M.find(X=>X.name===p.branchName):void 0,we=(()=>{var pe;if(!me)return null;const X=T.find(Ee=>se(Ee.fullSha,me)||se(Ee.sha,me));if(X!=null&&X.date)return X.date;if(ae){const Ee=((pe=L[ae.name])!=null?pe:[]).find(H=>se(H.fullSha,me)||se(H.sha,me));if(Ee!=null&&Ee.date)return Ee.date}return null})(),He=we?new Date(we).getTime():Number.NaN,J=Date.now(),fe=Number.isFinite(He)?Math.max(J,He+1):J,I=new Date(fe).toISOString(),ue={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:me,message:"Local uncommitted changes",author:"You",date:I,kind:"uncommitted"};ae?(M=M.map(X=>X.name===ae.name?{...X,commitsAhead:X.commitsAhead+1,unpushedCommits:X.unpushedCommits+1,lastCommitDate:I,headSha:"WORKING_TREE"}:X),L={...L,[ae.name]:[ue,...L[ae.name]||[]]},O={...O,[ae.name]:Math.max(0,(Q=Object.prototype.hasOwnProperty.call(O,ae.name)?O[ae.name]:ae.commitsAhead)!=null?Q:0)+1}):L={...L,[c]:[ue,...L[c]||[]]}}const A={...d};A[c]=null;const F=fp(M,c,L,A),U=Ec({lanes:F,branches:M,mergeNodes:n,directCommits:T,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:L,branchParentByName:A,branchUniqueAheadCounts:O,manuallyOpenedClumps:g,manuallyClosedClumps:b,isDebugOpen:!1,gridSearchQuery:v,gridFocusSha:C,checkedOutRef:p,orientation:k});return{enrichedBranches:M,enrichedBranchCommitPreviews:L,enrichedBranchUniqueAheadCounts:O,enrichedDirectCommits:T,sharedGridLayoutModel:U}}const Q1="git-visualizer:expanded-projects",Z1="git-visualizer:expanded-branches";function wk(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const y=(u=a.get(h))!=null?u:[];y.push(d.name),a.set(h,y)}const c=(d,h)=>{var g,b,v,C;const p=new Date((b=(g=i.get(d))==null?void 0:g.lastCommitDate)!=null?b:0).getTime(),y=new Date((C=(v=i.get(h))==null?void 0:v.lastCommitDate)!=null?C:0).getTime();return p-y};for(const[d,h]of a.entries())h.sort(c);return a}function Sk(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var g,b,v,C;const p=new Date((b=(g=a.get(d))==null?void 0:g.lastCommitDate)!=null?b:0).getTime(),y=new Date((C=(v=a.get(h))==null?void 0:v.lastCommitDate)!=null?C:0).getTime();return p-y},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function Ck(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const y of d){const g=[...h,y];if(y===i.branchName){for(const b of g)c.add(b);return!0}if(u((p=n.get(y))!=null?p:[],g))return!0}return!1};return u(t,[]),c}function J1(t,n){if(!t||!n)return!1;const i=u=>{const d=u.replace(/\\/g,"/").replace(/\/+$/,""),h=new Set([d]);return d.startsWith("/private/")&&h.add(d.slice(8)),Array.from(h)},a=i(t),c=i(n);for(const u of a)for(const d of c)if(u===d||u.toLowerCase()===d.toLowerCase())return!0;return!1}function np({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:g,showCommits:b,getMergeTargetLabels:v,sourceBranchName:C,clusterKeyByCommitId:k,isGridClusterOpen:j,onToggleGridCluster:M,onSelectCommit:T,onSelectBranch:L,isActiveProject:O}){var ce,ee;if(g.has(t)||!a.get(t))return null;const F=(ce=u.get(t))!=null?ce:[],U=F.length>0,W=_.useMemo(()=>{var le;return[...(le=c[t])!=null?le:[]]},[c,t]),Q=b&&W.length>0,me=b,se=U||Q,ae=h.has(t),we=me?W:[],He=ae&&we.length>0,J=y===t,fe=new Set(g);fe.add(t);const I="top-[-0.45rem] h-5 w-[10px]",ue="rounded-bl-[7px]",X="left-[0.65rem]",pe=new Map,Ee=[];for(const le of F){const ge=d.get(le);if(ge){const Ae=we.findIndex(ze=>bi(ze.fullSha,ge)||bi(ze.sha,ge));if(Ae>=0){const ze=(ee=pe.get(Ae))!=null?ee:[];ze.push(le),pe.set(Ae,ze);continue}}Ee.push(le)}const H=_.useMemo(()=>{if(!b||we.length===0)return[];const le=[];let ge=[],Ae=null;const ze=()=>{if(ge.length===0)return;const et=ge[ge.length-1],$e=`sidebar-single-${t}-${et.fullSha}`;le.push({key:Ae!=null?Ae:$e,commits:ge,count:ge.length,lead:et}),ge=[],Ae=null};return we.forEach(et=>{var $t;const $e=($t=k.get(`${t}:${et.fullSha}`))!=null?$t:null;if(ge.length===0){ge=[et],Ae=$e;return}if($e===Ae){ge.push(et);return}ze(),ge=[et],Ae=$e}),ze(),le},[t,b,we,k]);return l.jsxs("li",{className:cn("relative flex flex-col gap-1",n>0?"pl-4":"pl-0",ae?"mb-2.5":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:cn("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",ue,X,I)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:cn("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.25rem]",X)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("div",{className:cn("group flex min-w-0 flex-1 items-center gap-0 rounded-md px-2 h-6 text-left text-sm font-normal transition-colors hover:bg-accent","text-muted-foreground hover:text-foreground"),role:se?"button":void 0,tabIndex:se?0:void 0,onClick:()=>{se?p(t):L==null||L(t)},onKeyDown:le=>{se&&(le.key==="Enter"||le.key===" ")&&(le.preventDefault(),p(t))},children:[se?l.jsx("button",{type:"button","aria-label":`${ae?"Collapse":"Expand"} ${t}`,onPointerDown:le=>{le.preventDefault()},onClick:le=>{le.preventDefault(),le.stopPropagation(),p(t)},className:"group/chevron flex h-6 w-6 -ml-2 shrink-0 items-center justify-center rounded-sm p-0 text-[10px] leading-none text-muted-foreground transition-colors hover:bg-accent",children:l.jsx(iw,{"aria-hidden":"true",className:cn("h-3.5 w-3.5 shrink-0 transition-transform",J&&O?"text-map-accent":"text-muted-foreground",ae?"rotate-90":"")})}):null,l.jsx("span",{className:cn("min-w-0 flex-1 break-words",J&&O?"font-medium text-map-accent":"font-normal text-muted-foreground"),children:t})]})}),He?l.jsx("ul",{className:"relative space-y-1 pl-4",children:H.map(le=>{const ge=le.count>1&&!j(le.key);return(ge?[le.lead]:le.commits).map(ze=>{var $t;const et=we.findIndex(Nt=>Nt.fullSha===ze.fullSha),$e=v(ze.fullSha,C!=null?C:t);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>T==null?void 0:T(ze.fullSha),className:"min-w-0 flex-1 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:ze.message,children:[l.jsx("span",{className:"block truncate",children:ze.message}),$e.length>0?l.jsx("span",{className:"mt-0 block space-y-2",children:$e.map(Nt=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:Nt})]},`${ze.fullSha}:${Nt}`))}):null]}),le.count>1&&ze.fullSha===le.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${le.lead.fullSha}`,onClick:()=>M(le.key,`${t}:${le.lead.fullSha}`),className:cn("shrink-0 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",ge?"":"min-w-[2ch] text-center"),children:ge?`+${Math.max(1,le.count-1)}`:"−"}):null]}),($t=pe.get(et))!=null&&$t.length?l.jsx("ul",{className:"relative space-y-1",children:pe.get(et).map((Nt,_t,tt)=>l.jsx(np,{branchName:Nt,depth:n+1,isLast:_t===tt.length-1&&Ee.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:fe,showCommits:b,getMergeTargetLabels:v,sourceBranchName:Nt,clusterKeyByCommitId:k,isGridClusterOpen:j,onToggleGridCluster:M,onSelectCommit:T,onSelectBranch:L,isActiveProject:O},Nt))}):null]},`${t}:${ze.fullSha}`)})})}):null,U&&ae&&Ee.length>0?l.jsx("ul",{className:"relative space-y-1",children:Ee.map((le,ge)=>l.jsx(np,{branchName:le,depth:n+1,isLast:ge===Ee.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:fe,showCommits:b,getMergeTargetLabels:v,sourceBranchName:le,clusterKeyByCommitId:k,isGridClusterOpen:j,onToggleGridCluster:M,onSelectCommit:T,onSelectBranch:L,isActiveProject:O},le))}):null]})}function kk({open:t}){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-4 w-4 shrink-0 transition-opacity",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t?l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.7031 19H5.97457C4.96341 19 4.11131 18.2453 3.9892 17.2415L2.77269 7.24152C2.62773 6.04996 3.5577 5 4.75805 5H7C7.64911 5 8.28071 5.21053 8.8 5.6L9.2 5.9C9.71929 6.28947 10.3509 6.5 11 6.5H16.2369C17.2445 6.5 18.0947 7.24955 18.2211 8.2492L18.4938 10.4062",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M5.21532 12.0419C5.42789 11.1385 6.23405 10.5 7.16215 10.5H19.8105C20.7133 10.5 21.38 11.3419 21.1733 12.2207L19.9409 17.4581C19.7284 18.3615 18.9222 19 17.9941 19H6.10333C4.81363 19 3.8611 17.7973 4.1565 16.5419L5.21532 12.0419Z",stroke:"currentColor",strokeWidth:"1.5"})]}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 7C4 5.89543 4.89543 5 6 5H9C9.64911 5 10.2807 5.21053 10.8 5.6L11.2 5.9C11.7193 6.28947 12.3509 6.5 13 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 10.5L12.4211 10.5L20 10.5",stroke:"currentColor",strokeWidth:"1.5"})]})})}function jk({projects:t,activeProjectPath:n,onSelectProject:i,onAddProject:a,onRemoveProject:c,onRevealProjectInFinder:u,onReorderProjects:d,projectLoading:h=!1,projectError:p=null,checkedOutRef:y,manuallyOpenedClumpsByProject:g={},manuallyClosedClumpsByProject:b={},manuallyOpenedClumps:v,manuallyClosedClumps:C,setManuallyOpenedClumps:k,setManuallyClosedClumps:j,gridLayoutModel:M,onSelectCommit:T,onSelectBranch:L,showCommits:O,className:A,style:F,collapsed:U=!1}){var qe,Te;const W=_.useRef(null),Q=_.useRef(null),[me,se]=_.useState(()=>{if(typeof window>"u")return new Set;try{const he=window.localStorage.getItem(Q1);if(he){const Le=JSON.parse(he);if(Array.isArray(Le)){const Ye=new Set;for(const Ke of Le)typeof Ke=="string"&&Ye.add(Ke);return Ye}}}catch{}return new Set(t.map(he=>he.path))}),[ae,we]=_.useState({}),[He,J]=_.useState(()=>new Set),[fe,I]=_.useState(()=>new Set),[ue,X]=_.useState(null),pe=v!=null?v:He,Ee=C!=null?C:fe,H=k!=null?k:J,ce=j!=null?j:I,[ee,le]=_.useState(null),[ge,Ae]=_.useState(null),[ze,et]=_.useState(null),[$e,$t]=_.useState(null),[Nt,_t]=_.useState(null),[tt,ot]=_.useState(null),[Wt,on]=_.useState(null),Ie=_.useRef(new Map),ie=_.useRef(!1),We=_.useRef(null),nt=_.useRef(null),Se=he=>{try{window.localStorage.setItem(Q1,JSON.stringify(Array.from(he)))}catch{}},Ge=he=>{try{const Le=Object.fromEntries(Object.entries(he).map(([Ye,Ke])=>[Ye,Array.from(Ke)]));window.localStorage.setItem(Z1,JSON.stringify(Le))}catch{}};_.useEffect(()=>{Se(me)},[me]),_.useEffect(()=>{try{const he=window.localStorage.getItem(Z1);if(!he)return;const Le=JSON.parse(he);if(!Le||typeof Le!="object")return;const Ye={};for(const[Ke,De]of Object.entries(Le)){if(!Array.isArray(De))continue;const rt=new Set;for(const mt of De)typeof mt=="string"&&rt.add(mt);Ye[Ke]=rt}we(Ye)}catch{}},[]),_.useEffect(()=>{Ge(ae)},[ae]);const lt=t,ct=_.useMemo(()=>{if(!$e)return lt;const he=lt.find(De=>De.path===$e);if(!he)return lt;const Le=lt.filter(De=>De.path!==$e);if(Nt==null)return Le;const Ye=[...Le],Ke=Math.max(0,Math.min(Nt,Ye.length));return Ye.splice(Ke,0,he),Ye},[Nt,$e,lt]),kt=_.useCallback(he=>{d==null||d(he)},[d]),pt=_.useCallback(()=>{et(null),$t(null),_t(null),ot(null)},[]);_.useEffect(()=>{if(!ze)return;const he=Ye=>{const Ke=We.current;!Ke||!Ke.active||Math.abs(Ye.clientX-Ke.startX)<=4&&Math.abs(Ye.clientY-Ke.startY)<=4||nt.current==null&&(nt.current=window.requestAnimationFrame(()=>{var Qe,Bt;nt.current=null;const De=We.current;if(!De||!De.active)return;(Math.abs(Ye.clientX-De.startX)>4||Math.abs(Ye.clientY-De.startY)>4)&&(De.moved=!0,$t(De.path)),ot({x:Ye.clientX-De.offsetX,y:Ye.clientY-De.offsetY,width:De.width});const mt=Array.from((Bt=(Qe=Q.current)==null?void 0:Qe.querySelectorAll("[data-project-path]"))!=null?Bt:[]).filter(xt=>xt.dataset.projectPath&&xt.dataset.projectPath!==De.path);let Ct=mt.length;if(mt.length>0)for(let xt=0;xt<mt.length;xt+=1){const yt=mt[xt].getBoundingClientRect(),Zt=yt.top+yt.height/2;if(Ye.clientY<Zt){Ct=xt;break}}_t(Ct)}))},Le=()=>{const Ye=We.current;if(We.current=null,nt.current!=null&&(window.cancelAnimationFrame(nt.current),nt.current=null),!Ye){pt();return}if(!Ye.moved){pt();return}ie.current=!0;const Ke=lt.map(Qe=>Qe.path);if(Ke.indexOf(Ye.path)<0){pt();return}const rt=Nt;if(rt==null){pt();return}const mt=Ke.filter(Qe=>Qe!==Ye.path),Ct=Math.max(0,Math.min(rt,mt.length));mt.splice(Ct,0,Ye.path),kt(mt),pt(),window.requestAnimationFrame(()=>{ie.current=!1,X(null)})};return window.addEventListener("pointermove",he),window.addEventListener("pointerup",Le),window.addEventListener("pointercancel",Le),()=>{window.removeEventListener("pointermove",he),window.removeEventListener("pointerup",Le),window.removeEventListener("pointercancel",Le)}},[pt,kt,ze,Nt,lt]);const It=_.useCallback((he,Le)=>{if(he.button!==0)return;const Ye=he.currentTarget.getBoundingClientRect();We.current={active:!0,path:Le,startX:he.clientX,startY:he.clientY,offsetX:he.clientX-Ye.left,offsetY:he.clientY-Ye.top,width:Ye.width,moved:!1},et(Le),$t(null),_t(null),ot({x:he.clientX-Ye.left,y:he.clientY-Ye.top,width:Ye.width})},[]),st=(qe=M==null?void 0:M.defaultCollapsedClumps)!=null?qe:new Set,V=he=>pe.has(he)||!st.has(he)&&!Ee.has(he),Z=(he,Le)=>{const Ye=W.current,Ke=Q.current;if(Ye&&Ke){const De=`[data-clump-toggle-id="${Le}"]`,rt=Ye.querySelector(De);if(rt){const mt=rt.getBoundingClientRect().top-Ke.getBoundingClientRect().top;Ae({id:Le,topWithinScrollBody:mt})}else Ae(null)}else Ae(null);le(Le),H(De=>{const rt=new Set(De),mt=V(he);return ce(Ct=>{const Qe=new Set(Ct);return mt?(rt.delete(he),Qe.add(he)):(Qe.delete(he),rt.add(he)),Qe}),rt})};_.useLayoutEffect(()=>{if(!ee)return;const he=W.current,Le=Q.current;if(!he||!Le)return;const Ye=`[data-clump-toggle-id="${ee}"]`,Ke=he.querySelector(Ye);if(Ke){if((ge==null?void 0:ge.id)===ee){const rt=Ke.getBoundingClientRect().top-Le.getBoundingClientRect().top-ge.topWithinScrollBody;Number.isFinite(rt)&&rt!==0&&(Le.scrollTop+=rt)}Ke.focus({preventScroll:!0}),le(null),Ae(null)}},[pe,Ee,ee,ge]);const be=(he,Le)=>{we(Ye=>{var mt;const Ke=(mt=Ye[he])!=null?mt:new Set,De=new Set(Ke);De.has(Le)?De.delete(Le):De.add(Le);const rt={...Ye,[he]:De};return Ge(rt),rt})};_.useEffect(()=>{if(ue==null)return;const he=()=>{const Ye=Ie.current.get(ue);if(!Ye)return;const Ke=Ye.getBoundingClientRect();on({top:Ke.bottom+8,right:Math.max(8,window.innerWidth-Ke.right)})};he();const Le=()=>X(null);return window.addEventListener("pointerdown",Le),window.addEventListener("resize",he),window.addEventListener("scroll",he,!0),()=>{window.removeEventListener("pointerdown",Le),window.removeEventListener("resize",he),window.removeEventListener("scroll",he,!0)}},[ue]);const je=_.useMemo(()=>{var Le,Ye,Ke,De,rt,mt,Ct,Qe,Bt,xt,yt,Zt,at,jt;const he=new Map;for(const Rt of t){const bt=vk({branches:Rt.branches,mergeNodes:Rt.mergeNodes,directCommits:Rt.directCommits,unpushedDirectCommits:Rt.unpushedDirectCommits,defaultBranch:Rt.defaultBranch,branchCommitPreviews:Rt.branchCommitPreviews,branchUniqueAheadCounts:Rt.branchUniqueAheadCounts,checkedOutRef:Rt.checkedOutRef,stashes:Rt.stashes,manuallyOpenedClumps:(Le=g[Rt.path])!=null?Le:new Set,manuallyClosedClumps:(Ye=b[Rt.path])!=null?Ye:new Set}),Ht=bt.enrichedBranches.some(qt=>qt.name===Rt.defaultBranch)?bt.enrichedBranches:[{name:Rt.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...bt.enrichedBranches],Gt=new Map(bt.sharedGridLayoutModel.nodes.map(qt=>[qt.commit.visualId,qt.row])),Bn={};for(const qt of bt.sharedGridLayoutModel.allCommits){const Gn=(Ke=Bn[qt.branchName])!=null?Ke:[];Gn.push({fullSha:qt.id,sha:qt.id.slice(0,7),parentSha:(De=qt.parentSha)!=null?De:null,message:qt.message,author:qt.author,date:qt.date,kind:(rt=qt.kind)!=null?rt:"commit"}),Bn[qt.branchName]=Gn}for(const qt of Object.keys(Bn))Bn[qt]=Bn[qt].sort((Gn,Tn)=>{var Bs,Ls;const _s=new Date(Gn.date).getTime(),Ss=new Date(Tn.date).getTime();if(_s!==Ss)return _s-Ss;const Hn=(Bs=Gt.get(`${qt}:${Gn.fullSha}`))!=null?Bs:Number.MAX_SAFE_INTEGER,zn=(Ls=Gt.get(`${qt}:${Tn.fullSha}`))!=null?Ls:Number.MAX_SAFE_INTEGER;return Hn!==zn?Hn-zn:Gn.fullSha.localeCompare(Tn.fullSha)});const Ln=(mt=bt.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?mt:new Map,an=(qt,Gn)=>{const Tn=Ln.get(Gn);if(!Tn)return[];for(const[_s,Ss]of Tn.entries())if(bi(qt,_s))return Array.from(Ss).sort();return[]},On=wk(Ht,Rt.defaultBranch),Ft=Sk(Ht,Rt.defaultBranch,On),mn=new Map(Ht.map(qt=>[qt.name,qt])),it=new Map;for(const qt of Ht){const Gn=(Qe=(Ct=bt.sharedGridLayoutModel.firstBranchCommitByName.get(qt.name))==null?void 0:Ct.parentSha)!=null?Qe:null,Tn=Gn!=null?Gn:null;it.set(qt.name,Tn)}const _n=(Bt=bt.sharedGridLayoutModel.defaultCollapsedClumps)!=null?Bt:new Set,ws=(xt=g[Rt.path])!=null?xt:new Set,go=(yt=b[Rt.path])!=null?yt:new Set,Hs=qt=>ws.has(qt)||!_n.has(qt)&&!go.has(qt);he.set(Rt.path,{rootBranchNames:Ft,branchByName:mn,branchCommitPreviewsFromLayout:Bn,childNamesByParent:On,branchAnchorShaByName:it,checkedOutBranchName:(at=(Zt=Rt.checkedOutRef)==null?void 0:Zt.branchName)!=null?at:null,clusterKeyByCommitId:(jt=bt.sharedGridLayoutModel.clusterKeyByCommitId)!=null?jt:new Map,getMergeTargetLabels:an,isGridClusterOpen:Hs})}return he},[n,b,g,t]),Je=(he,Le={})=>{var yt,Zt,at,jt,Rt;const Ye=(yt=Le.ghostMode)!=null?yt:!1,Ke=(Zt=Le.hideLive)!=null?Zt:!1,De=J1(he.path,n),rt=me.has(he.path),mt=(at=he.treeLoaded)!=null?at:he.branches.length>0,Ct=je.get(he.path),Qe=(jt=ae[he.path])!=null?jt:Ct?Ck(Ct.rootBranchNames,Ct.childNamesByParent,y,he.defaultBranch):new Set,Bt=$e===he.path,xt=J1(he.path,n);return l.jsxs(qo.div,{layout:"position",transition:{duration:.12,ease:"easeOut"},"data-project-path":he.path,"data-active-project":xt?"true":"false",className:cn("project-row relative z-10 flex flex-col gap-1 text-muted-foreground",rt&&Ct?"mb-2.5":""),children:[Nt!==null&&$e!==he.path&&((Rt=ct[Nt])==null?void 0:Rt.path)===he.path?l.jsx("div",{className:"h-px","aria-hidden":"true",children:l.jsx("div",{className:"mx-1 h-px bg-foreground/60"})}):null,l.jsxs("div",{className:cn("relative z-0 px-1",Ke?"pointer-events-none opacity-0":""),children:[l.jsxs("div",{className:cn(Ye?"group flex w-full items-center gap-0 rounded-lg px-0 h-6":"group sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-background px-0 h-6 transition-all duration-100 ease-out hover:bg-accent cursor-grab active:cursor-grabbing",Bt&&!Ye?"opacity-0":""),onPointerDownCapture:bt=>{if(Ye)return;const Ht=bt.target;Ht!=null&&Ht.closest('.window-no-drag, button, input, textarea, select, [contenteditable="true"]')||It(bt,he.path)},onClick:bt=>{if(Ye||$e===he.path||ie.current)return;const Ht=bt.target;Ht!=null&&Ht.closest('button, input, textarea, select, [contenteditable="true"]')||i(he.path)},children:[l.jsx("button",{type:"button",onPointerDown:bt=>bt.stopPropagation(),onClick:bt=>{bt.preventDefault(),bt.stopPropagation(),se(Ht=>{const Gt=new Set(Ht);return Gt.has(he.path)?Gt.delete(he.path):Gt.add(he.path),Se(Gt),Gt})},"aria-expanded":rt,"aria-label":`${rt?"Collapse":"Expand"} ${he.name}`,className:cn("project-icon flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-accent text-inherit",Ye?"pointer-events-none":""),children:l.jsx(kk,{open:rt})}),l.jsx("span",{className:cn("project-name min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors","font-normal","text-inherit"),children:he.name}),l.jsxs("div",{className:"relative z-[130] shrink-0",children:[l.jsx("button",{type:"button",onPointerDown:bt=>bt.stopPropagation(),"aria-label":`Project actions for ${he.name}`,"aria-expanded":ue===he.path,ref:bt=>{Ie.current.set(he.path,bt)},onClick:bt=>{bt.stopPropagation();const Ht=bt.currentTarget.getBoundingClientRect();on({top:Ht.bottom+8,right:Math.max(8,window.innerWidth-Ht.right)}),X(Gt=>Gt===he.path?null:he.path)},className:cn("pr-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md opacity-0 hover:bg-accent group-hover:opacity-100 text-inherit",Ye?"pointer-events-none":""),children:l.jsx(cw,{className:"h-4 w-4 shrink-0"})}),ue===he.path&&!Ye&&Wt&&typeof document<"u"?wl.createPortal(l.jsxs("div",{role:"menu",className:"fixed z-[10000] inline-flex w-max flex-col overflow-hidden rounded-md border border-border bg-background p-1",style:{top:`${Wt.top}px`,right:`${Wt.right}px`},onPointerDownCapture:bt=>bt.stopPropagation(),onClick:bt=>bt.stopPropagation(),children:[l.jsx("button",{type:"button",role:"menuitem",onPointerDown:bt=>bt.stopPropagation(),onClick:()=>{X(null),u(he.path)},className:"flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Open in Finder"}),l.jsx("button",{type:"button",role:"menuitem",onPointerDown:bt=>bt.stopPropagation(),onClick:()=>{X(null),c(he.path)},className:"project-menu-remove flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium",children:"Remove"})]}),document.body):null]})]}),rt?mt&&Ct?l.jsx("ul",{className:cn("relative z-0 space-y-1 pt-0",Ye?"opacity-70":""),children:Ct.rootBranchNames.map((bt,Ht)=>l.jsx(np,{branchName:bt,depth:0,isLast:Ht===Ct.rootBranchNames.length-1,branchByName:Ct.branchByName,branchCommitPreviews:Ct.branchCommitPreviewsFromLayout,childNamesByParent:Ct.childNamesByParent,branchAnchorShaByName:Ct.branchAnchorShaByName,expandedBranchNames:Qe,onToggleBranch:Gt=>be(he.path,Gt),checkedOutBranchName:Ct.checkedOutBranchName,ancestors:new Set,showCommits:O,getMergeTargetLabels:Ct.getMergeTargetLabels,sourceBranchName:bt,clusterKeyByCommitId:Ct.clusterKeyByCommitId,isGridClusterOpen:Ct.isGridClusterOpen,onToggleGridCluster:Z,onSelectCommit:async Gt=>{De||await i(he.path),T==null||T(Gt)},onSelectBranch:async Gt=>{De||await i(he.path),L==null||L(Gt)},isActiveProject:xt},`${he.path}:${bt}`))}):l.jsx("p",{className:cn("px-2 py-2 text-xs text-muted-foreground",Ye?"opacity-70":""),children:"Loading branch tree..."}):null]})]},he.path)};return l.jsxs("aside",{ref:W,"aria-label":"Dense branch sidebar",className:cn("pointer-events-auto relative z-[120] h-full select-none overflow-hidden",A),style:F,children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"absolute inset-x-0 top-0 z-80 h-12"}),l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[p&&l.jsx("div",{className:"px-2.5 pb-2",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:p})}),l.jsx("div",{className:cn("px-2 pb-2",U?"opacity-0 pointer-events-none":""),children:l.jsx("div",{className:"px-1",children:l.jsxs("button",{type:"button",onClick:a,disabled:h,"aria-label":"Add Repo",className:"window-no-drag group flex w-full items-center gap-0 rounded-lg px-0 h-6 text-muted-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors group-hover:bg-accent",children:l.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-4 w-4 shrink-0",children:l.jsx("path",{d:"M12 5V19M5 12H19",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}),l.jsx("span",{className:"min-w-0 flex-1 truncate pl-0 text-left text-sm font-normal text-muted-foreground",children:"New Project"})]})})}),l.jsx("div",{ref:Q,className:cn("sidebar-scrollbar min-h-0 flex-1 space-y-2 overflow-y-auto px-2",U?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:ct.map(he=>Je(he,{hideLive:$e===he.path}))})]}),$e&&tt?l.jsx("div",{"aria-hidden":"true",className:"pointer-events-none fixed left-0 top-0 z-[90]",style:{transform:`translate3d(${tt.x}px, ${tt.y}px, 0)`,width:`${tt.width}px`},children:Je((Te=t.find(he=>he.path===$e))!=null?Te:lt.find(he=>he.path===$e),{ghostMode:!0})}):null]})}const Mk="git-visualizer",ed="git-visualizer:projects",td=12,ex=1400,Ek=180,tx="git-visualizer:sidebar-width",nx="git-visualizer:sidebar-collapsed",sx="git-visualizer:grid-clumps",ox=360,ix=180,ax=360;function er(t){return t==="/"?t:t.replace(/\/+$/,"")}function Tk(...t){return t.filter(Boolean).join(" ")}function kd(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function Ak(t){return kd(t)===Mk}function rx(t){var n,i;return[t.path,t.name,t.defaultBranch,t.updatedAtMs,t.branches.map(a=>[a.name,a.headSha,a.commitsAhead,a.commitsBehind,a.unpushedCommits,a.remoteSyncStatus,a.status,a.lastCommitDate].join(":")).join("|"),t.mergeNodes.map(a=>[a.fullSha,a.targetBranch,a.targetCommitSha].join(":")).join("|"),t.directCommits.map(a=>a.fullSha).join("|"),t.unpushedDirectCommits.map(a=>a.fullSha).join("|"),t.checkedOutRef?[(n=t.checkedOutRef.branchName)!=null?n:"",t.checkedOutRef.headSha,(i=t.checkedOutRef.parentSha)!=null?i:"",t.checkedOutRef.hasUncommittedChanges?"1":"0"].join(":"):"__none__",Object.entries(t.unpushedCommitShasByBranch).map(([a,c])=>`${a}:${c.join(",")}`).join("|"),Object.entries(t.branchCommitPreviews).map(([a,c])=>`${a}:${c.map(u=>u.fullSha).join(",")}`).join("|"),Object.entries(t.branchParentByName).map(([a,c])=>`${a}:${c!=null?c:""}`).join("|"),Object.entries(t.laneByBranch).map(([a,c])=>`${a}:${c}`).join("|"),Object.entries(t.branchUniqueAheadCounts).map(([a,c])=>`${a}:${c}`).join("|")].join("@@")}function Dk(){var Si,Hi,fi,vo,ei;const[t,n]=_.useState(null),[i,a]=_.useState(""),[c,u]=_.useState([]),[d,h]=_.useState({}),[p,y]=_.useState(!1),[g,b]=_.useState([]),[v,C]=_.useState([]),[k,j]=_.useState([]),[M,T]=_.useState([]),[L,O]=_.useState({}),[A,F]=_.useState("main"),[U,W]=_.useState(null),[Q,me]=_.useState([]),[se,ae]=_.useState(!1),[we,He]=_.useState(""),[J,fe]=_.useState(0),[I,ue]=_.useState(1),[X,pe]=_.useState({}),[Ee,H]=_.useState({}),[ce,ee]=_.useState(null),[le,ge]=_.useState(null),[Ae,ze]=_.useState(null),[et,$e]=_.useState(!1),[$t,Nt]=_.useState(!1),[_t,tt]=_.useState(null),[ot,Wt]=_.useState(null),[on,Ie]=_.useState(!1),[ie,We]=_.useState(null),[nt,Se]=_.useState(null),[Ge,lt]=_.useState(!1),[ct,kt]=_.useState(!1),[pt,It]=_.useState(!1),[st,V]=_.useState(!1),[Z,be]=_.useState({}),[je,Je]=_.useState({}),[qe,Te]=_.useState({}),[he,Le]=_.useState({}),[Ye,Ke]=_.useState({}),[De,rt]=_.useState([]),[mt,Ct]=_.useState([]),[Qe,Bt]=_.useState(!1),[xt,yt]=_.useState(!1),[Zt,at]=_.useState(!1),[jt,Rt]=_.useState(!1),[bt,Ht]=_.useState(!1),[Gt,Bn]=_.useState("horizontal"),[Ln,an]=_.useState(!1),[On,Ft]=_.useState(ox),[mn,it]=_.useState(!1),_n=_.useRef(null),ws=_.useRef(0),go=_.useRef(0),Hs=_.useRef({}),qt=_.useRef(null),Gn=_.useRef({}),Tn=_.useRef({}),_s=_.useRef(!1),Ss=_.useRef(null),Hn=_.useRef(ox),zn=_.useRef(null),Bs=_.useRef(null),Ls=Ak(t)||!0,An=_.useRef(!1),qn=_.useRef(!1),Qs=_.useRef(new Set),yo=_.useRef([]),So=_.useRef([]),Bo=_.useRef(null),ro=_.useRef({}),Cn=t!=null?t:"__no-repo__",ds=($,x)=>{try{const S={opened:Object.fromEntries(Object.entries($).map(([N,Y])=>[N,Array.from(Y)])),closed:Object.fromEntries(Object.entries(x).map(([N,Y])=>[N,Array.from(Y)]))};window.localStorage.setItem(sx,JSON.stringify(S))}catch{}};_.useEffect(()=>{var $,x;try{const S=window.localStorage.getItem(sx);if(!S)return;const N=JSON.parse(S);if(!N||typeof N!="object")return;const Y={},ne={},de=N;for(const[Xe,dt]of Object.entries(($=de.opened)!=null?$:{}))Array.isArray(dt)&&(Y[Xe]=new Set(dt.filter(At=>typeof At=="string")));for(const[Xe,dt]of Object.entries((x=de.closed)!=null?x:{}))Array.isArray(dt)&&(ne[Xe]=new Set(dt.filter(At=>typeof At=="string")));pe(Y),H(ne)}catch{}},[]),_.useEffect(()=>{ds(X,Ee)},[Ee,X]);const hn=_.useMemo(()=>{var $;return($=X[Cn])!=null?$:new Set},[Cn,X]),gs=_.useMemo(()=>{var $;return($=Ee[Cn])!=null?$:new Set},[Cn,Ee]),vi=_.useCallback($=>{pe(x=>{var ne;const S=(ne=x[Cn])!=null?ne:new Set,N=typeof $=="function"?$(S):$,Y={...x,[Cn]:new Set(N)};return ds(Y,Ee),Y})},[Cn,Ee]),Es=_.useCallback($=>{H(x=>{var ne;const S=(ne=x[Cn])!=null?ne:new Set,N=typeof $=="function"?$(S):$,Y={...x,[Cn]:new Set(N)};return ds(X,Y),Y})},[Cn,X]),lo=_.useMemo(()=>c.map($=>{var x,S,N,Y,ne,de,Xe,dt,At,vt,Jt,ht,zt,Qt,gt,un,pn,Mn,Jn,Ns,js,Rs,Os,bn,es,ys,Mo,ta;return{...$,...(x=d[$.path])!=null?x:{},branches:(N=(S=d[$.path])==null?void 0:S.branches)!=null?N:[],mergeNodes:(ne=(Y=d[$.path])==null?void 0:Y.mergeNodes)!=null?ne:[],directCommits:(Xe=(de=d[$.path])==null?void 0:de.directCommits)!=null?Xe:[],unpushedDirectCommits:(At=(dt=d[$.path])==null?void 0:dt.unpushedDirectCommits)!=null?At:[],unpushedCommitShasByBranch:(Jt=(vt=d[$.path])==null?void 0:vt.unpushedCommitShasByBranch)!=null?Jt:{},checkedOutRef:(zt=(ht=d[$.path])==null?void 0:ht.checkedOutRef)!=null?zt:null,worktrees:(gt=(Qt=d[$.path])==null?void 0:Qt.worktrees)!=null?gt:[],stashes:(pn=(un=d[$.path])==null?void 0:un.stashes)!=null?pn:[],branchCommitPreviews:(Jn=(Mn=d[$.path])==null?void 0:Mn.branchCommitPreviews)!=null?Jn:{},laneByBranch:(js=(Ns=d[$.path])==null?void 0:Ns.laneByBranch)!=null?js:{},branchUniqueAheadCounts:(Os=(Rs=d[$.path])==null?void 0:Rs.branchUniqueAheadCounts)!=null?Os:{},defaultBranch:(ys=(es=(bn=d[$.path])==null?void 0:bn.defaultBranch)!=null?es:$.branchName)!=null?ys:"main",treeLoaded:(ta=(Mo=d[$.path])==null?void 0:Mo.loaded)!=null?ta:!1}}),[c,d]),xo=_.useMemo(()=>({githubAuthStatus:ot,githubAuthLoading:on,onGitHubAuthSetup:Vs,gridSearchQuery:we,setGridSearchQuery:He,gridSearchResultCount:ce,gridSearchResultIndex:le,setGridSearchJumpDirection:ue,setGridSearchJumpToken:fe,mapGridOrientation:Gt,setMapGridOrientation:Bn,setIsGridDebugOpen:an,githubAuthMessage:ie,commitSwitchFeedback:nt,isCommitSwitchFeedbackVisible:Ge}),[nt,on,ie,ot,we,ce,le,Vs,Ge,Gt,He,ue,fe,an,Bn]);function rs($,x){const S=rx(x);return Hs.current[$]===S?!1:(Hs.current={...Hs.current,[$]:S},h(Y=>Y[$]===x?Y:{...Y,[$]:x}),!0)}function Ts($){var x;return[$.repoPath,$.defaultBranch,$.headSha,(x=$.upstreamSha)!=null?x:"",$.hasUncommittedChanges?"1":"0",$.branchCount,$.worktreeCount,$.stashCount].join("|")}function co($){var x;return[$.repoPath,$.headSha,(x=$.upstreamSha)!=null?x:"",$.hasUncommittedChanges?"1":"0"].join("|")}function $n($,x){var S,N,Y,ne,de,Xe;return{repoPath:$,headSha:(N=(S=x.checkedOutRef)==null?void 0:S.headSha)!=null?N:"",upstreamSha:(ne=(Y=x.checkedOutRef)==null?void 0:Y.parentSha)!=null?ne:null,hasUncommittedChanges:(Xe=(de=x.checkedOutRef)==null?void 0:de.hasUncommittedChanges)!=null?Xe:!1}}function uo($,x,S){var N,Y,ne,de,Xe,dt;return{repoPath:$,defaultBranch:x,headSha:(Y=(N=S.checkedOutRef)==null?void 0:N.headSha)!=null?Y:"",upstreamSha:(de=(ne=S.checkedOutRef)==null?void 0:ne.parentSha)!=null?de:null,hasUncommittedChanges:(dt=(Xe=S.checkedOutRef)==null?void 0:Xe.hasUncommittedChanges)!=null?dt:!1,branchCount:S.branches.length,worktreeCount:S.worktrees.length,stashCount:S.stashes.length}}_.useEffect(()=>{try{const $=localStorage.getItem(ed);if(!$)return;const x=JSON.parse($);if(!Array.isArray(x))return;const S=x.filter(N=>typeof N=="object"&&N!==null&&typeof N.path=="string"&&typeof N.name=="string"&&typeof N.lastOpenedAt=="number");u(S.slice(0,td))}catch{u([])}},[]),_.useEffect(()=>{qn.current||t||c.length!==0&&(qn.current=!0,Zs(c[0].path))},[c,t]);const fs=_.useMemo(()=>v.reduce(($,x)=>($[x.targetCommitSha]=x.targetBranch,$),{}),[v]);_.useEffect(()=>{t&&(_s.current||h($=>{var x,S;return{...$,[t]:{path:t,name:i||kd(t),branches:g,mergeNodes:v,directCommits:k,unpushedDirectCommits:M,mergeTargetBranchByCommitSha:v.reduce((N,Y)=>(N[Y.targetCommitSha]=Y.targetBranch,N),{}),unpushedCommitShasByBranch:L,checkedOutRef:U,worktrees:Q,stashes:De,branchCommitPreviews:je,branchParentByName:qe,laneByBranch:he,branchUniqueAheadCounts:Ye,defaultBranch:A,loaded:!0,cacheSchemaVersion:(S=(x=$[t])==null?void 0:x.cacheSchemaVersion)!=null?S:1,updatedAtMs:Date.now()}}}))},[t,i,g,v,k,M,fs,L,U,Q,De,je,qe,he,Ye,A]);async function Xn($,x=!1){var N;const S=er($);if(S&&!Qs.current.has(S)&&!(!x&&((N=d[S])!=null&&N.loaded))){Qs.current.add(S),S===t&&y(!0);try{const Y=await Me("get_repo_visual_snapshot",{repoPath:S,forceRefresh:x});rs(S,Y)}finally{Qs.current.delete(S),S===t&&Qs.current.size===0&&y(!1)}}}_.useEffect(()=>{c.length!==0&&c.forEach($=>{Xn($.path),Me("watch_repo",{repoPath:$.path}).catch(console.error)})},[c]),_.useEffect(()=>{let $=!1,x=null;return xc("git-activity",S=>{if($)return;const N=er(S.payload.repoPath);!N||N===t||Xn(N,!0)}).then(S=>{$?S():x=S}).catch(console.error),()=>{$=!0,x&&x()}},[t]);function ri($){u(x=>{const S=er($.path);if(!S)return x;const N={...$,path:S},ne=(x.some(de=>de.path===S)?x.map(de=>de.path===S?N:de):[...x,N]).slice(-td);try{localStorage.setItem(ed,JSON.stringify(ne))}catch{}return ne})}function $o($){u(x=>{const S=new Map(x.map(Y=>[Y.path,Y])),N=[];for(const Y of $){const ne=S.get(Y);ne&&(N.push(ne),S.delete(Y))}for(const Y of x)S.has(Y.path)&&N.push(Y);try{localStorage.setItem(ed,JSON.stringify(N.slice(0,td)))}catch{}return N.slice(0,td)})}async function ea($){const x=er($);if(x){tt(null);try{const[S,N]=await Promise.all([Me("get_repo_info",{repoPath:x}),Me("get_default_branch",{repoPath:x}).catch(()=>"main")]);ri({path:x,name:S.name,lastOpenedAt:Date.now(),branchName:N}),await Xn(x,!0)}catch(S){tt(S instanceof Error?S.message:String(S))}}}function Kt($){var S,N;const x=er($);if(x&&(u(Y=>{const ne=Y.filter(de=>de.path!==x);try{localStorage.setItem(ed,JSON.stringify(ne))}catch{}return ne}),h(Y=>{if(!(x in Y))return Y;const ne={...Y};return delete ne[x],ne}),t===x)){const Y=(N=(S=c.find(ne=>ne.path!==x))==null?void 0:S.path)!=null?N:null;Y?Zs(Y):(n(null),a(""),b([]),C([]),j([]),T([]),O({}),W(null),me([]),rt([]),Je({}),Te({}),Le({}),Ke({}))}}async function $i($){const x=er($);if(x)try{await Me("reveal_in_finder",{path:x})}catch(S){tt(S instanceof Error?S.message:String(S))}}const Us=()=>{(async()=>{var $,x;try{const S=await Qv({directory:!0,multiple:!1,defaultPath:(x=($=c[0])==null?void 0:$.path)!=null?x:void 0});typeof S=="string"&&S&&await ea(S)}catch(S){tt(S instanceof Error?S.message:String(S))}})()};async function Ii($,x){const N=[];let Y=0;for(;;){const ne=await Me("get_merge_nodes",{repoPath:$,branch:x,page:Y,perPage:100});if(N.push(...ne.nodes),!ne.hasMore||ne.nodes.length===0)break;Y+=1}return N}async function Pi($,x,S){const N=Array.from(new Set([S,...x.map(de=>de.name)].filter(de=>!!de)));if(N.length===0)return[];const Y=await Promise.all(N.map(de=>Ii($,de).catch(()=>[]))),ne=new Map;for(const de of Y)for(const Xe of de){const dt=`${Xe.targetCommitSha}:${Xe.targetBranch}`;ne.has(dt)||ne.set(dt,Xe)}return Array.from(ne.values())}const Io=$=>$.map(x=>`${x.name}|${x.headSha}|${x.commitsAhead}|${x.commitsBehind}|${x.unpushedCommits}|${x.remoteSyncStatus}`).join("||"),hs=$=>$.map(x=>x.fullSha).join("|"),li=$=>{var x,S;return $?`${(x=$.branchName)!=null?x:""}|${$.headSha}|${(S=$.parentSha)!=null?S:""}|${$.hasUncommittedChanges?1:0}`:"__none__"};async function gn($,x,S){var Qt,gt;const N=x!=null?x:A,Y=(Qt=S==null?void 0:S.includeMergeNodes)!=null?Qt:!0,ne=(gt=S==null?void 0:S.includeUnpushedShaMap)!=null?gt:!0,[de,Xe,dt,At,vt,Jt]=await Promise.all([Me("get_branches",{repoPath:$}),Me("get_all_repo_commits",{repoPath:$}),Me("get_unpushed_direct_commits",{repoPath:$,branch:N}).catch(()=>[]),Me("get_checked_out_ref",{repoPath:$}).catch(()=>null),Me("list_worktrees",{repoPath:$}).catch(()=>[]),Me("list_stashes",{repoPath:$}).catch(()=>[])]),ht=Y?await Pi($,de,N):v,zt=ne?await Promise.all([N,...de.map(un=>un.name)].map(async un=>{const pn=await Me("get_branch_unpushed_commit_shas",{repoPath:$,branch:un}).catch(()=>[]);return[un,pn]})):Object.entries(L);b(de),C(ht),j(Xe),T(dt),O(Object.fromEntries(zt)),W(At),me(vt),rt(Jt)}async function Dn($){const[x,S,N]=await Promise.all([Me("get_branches",{repoPath:$}).catch(()=>[]),Me("get_all_repo_commits",{repoPath:$}).catch(()=>[]),Me("get_checked_out_ref",{repoPath:$}).catch(()=>null)]);return Io(x)!==Io(yo.current)||hs(S)!==hs(So.current)||li(N)!==li(Bo.current)}async function fo($){Se(null),Nt(!0),_s.current=!0;try{const[x,S]=await Promise.all([Me("get_repo_info",{repoPath:$}),Me("get_default_branch",{repoPath:$})]);a(x.name),F(S),n($),await gn($,S),rn($),Se({kind:"success",message:`Now targeting worktree at ${$}`})}catch(x){const S=x instanceof Error?x.message:String(x);Se({kind:"error",message:S}),console.error("Failed to switch worktree:",S)}finally{Nt(!1),_s.current=!1}}async function Qo($,x){if(!(!t||se)){ae(!0),Se(null);try{await Me("remove_worktree",{repoPath:t,worktreePath:$,force:x}),await gn(t),Se({kind:"success",message:`Removed worktree at ${$}`})}catch(S){const N=S instanceof Error?S.message:String(S);Se({kind:"error",message:N}),console.error("Failed to remove worktree:",N)}finally{ae(!1)}}}function Cs($,x){var N,Y;const S=rx(x);return qt.current===S?!1:(qt.current=S,a(x.name||kd($)),F(x.defaultBranch||"main"),b(x.branches),C(x.mergeNodes),j(x.directCommits),T(x.unpushedDirectCommits),O(x.unpushedCommitShasByBranch),W(x.checkedOutRef),me(x.worktrees),rt(x.stashes),Je(x.branchCommitPreviews),Te((N=x.branchParentByName)!=null?N:{}),Le((Y=x.laneByBranch)!=null?Y:{}),Ke(x.branchUniqueAheadCounts),n($),!0)}async function Zs($){var Y;const x=++ws.current,S=er($);if(!S)return;_s.current=!0;const N=d[S];if(N!=null&&N.loaded)try{const ne=await Me("get_repo_quick_state",{repoPath:S});if(x!==ws.current)return;const de=co(ne);if(((Y=Tn.current[S])!=null?Y:N?co($n(S,N)):null)===de){tt(null),Tn.current={...Tn.current,[S]:de},Cs(S,N),ri({path:S,name:N.name||kd(S),lastOpenedAt:Date.now(),branchName:N.defaultBranch}),Nt(!1),$e(!1),rn(S),(async()=>{try{const dt=await Me("get_repo_refresh_fingerprint",{repoPath:S}),At=Ts(dt);if(x!==ws.current)return;if(Gn.current[S]!==At){const vt=await Me("get_repo_visual_snapshot",{repoPath:S,forceRefresh:!0});if(x!==ws.current)return;rs(S,vt),Gn.current={...Gn.current,[S]:At},Tn.current={...Tn.current,[S]:co($n(S,vt))},Cs(S,vt)}}catch{}})(),_s.current=!1;return}Tn.current={...Tn.current,[S]:de}}catch{}if($e(!0),Nt(!0),tt(null),await new Promise(ne=>setTimeout(ne,15)),x===ws.current)try{const[ne,de]=await Promise.all([Me("get_repo_info",{repoPath:S}),Me("get_default_branch",{repoPath:S})]);if(x!==ws.current)return;a(ne.name),F(de);const Xe=await Me("get_repo_visual_snapshot",{repoPath:S,forceRefresh:!0});if(x!==ws.current)return;rs(S,Xe),Gn.current={...Gn.current,[S]:Ts(uo(S,de,Xe))},Tn.current={...Tn.current,[S]:co($n(S,Xe))},Cs(S,Xe),ri({path:S,name:ne.name,lastOpenedAt:Date.now(),branchName:de}),Nt(!1),$e(!1),rn(S)}catch(ne){if(x!==ws.current)return;console.error("Failed to load repo:",ne),tt(ne instanceof Error?ne.message:String(ne)),n(null),$e(!1),Nt(!1)}finally{_s.current=!1}}async function rn($){const x=++go.current;try{if(x!==go.current)return;We(null);const S=await Me("get_github_info",{repoPath:$}),N=await Me("get_github_auth_status");if(x!==go.current||(Wt(N),!N.ghAvailable||!N.authenticated))return;const Y=await Me("get_open_prs",{owner:S.owner,repo:S.repo});if(x!==go.current)return;Ct(Y)}catch(S){if(x!==go.current)return;console.log("GitHub data not available:",S),We(S instanceof Error?S.message:String(S))}}_.useEffect(()=>{let $=null,x=!1;const S=(()=>{try{return dp().label}catch{return null}})(),N=async ne=>{var Xe;const de=(Xe=ne==null?void 0:ne.path)==null?void 0:Xe.trim();!de||x||t!==de&&await Zs(de)};return(async()=>{S==="main"&&($=await xc("gitviz://open-repo",async de=>{await N(de.payload)}));const ne=await Me("take_pending_open_repo");await N(ne)})(),()=>{x=!0,$&&$()}},[t]),_.useEffect(()=>{yo.current=g},[g]),_.useEffect(()=>{So.current=k},[k]),_.useEffect(()=>{Bo.current=U},[U]),_.useEffect(()=>{ro.current=qe},[qe]),_.useEffect(()=>{An.current=bt},[bt]),_.useEffect(()=>{},[t,A,Ls]),_.useEffect(()=>{if(!t||!A||!Ls)return;Me("watch_repo",{repoPath:t}).catch(console.error);let $=!1,x=!1,S=!1,N=!1,Y=null,ne=null,de=null;const Xe=async()=>{if(!$){if(An.current){x=!0;return}if(S){x=!0;return}S=!0;try{if(!await Dn(t)||$)return;await gn(t,A)}catch(vt){console.warn("Frozen git-activity refresh failed:",vt)}finally{S=!1,x&&!$&&(x=!1,window.setTimeout(()=>{Xe()},0))}}},dt=()=>{x=!0,Xe()},At=async()=>{if(!($||N||document.visibilityState!=="visible")){N=!0;try{const vt=await Me("get_remote_branch_head_sha",{repoPath:t,branch:A});if($||vt==null)return;if(Y==null){Y=vt;return}if(vt===Y)return;Y=vt,await gn(t,A)}catch(vt){console.warn("Remote tip refresh failed:",vt)}finally{N=!1}}};return ne=window.setInterval(()=>{At()},15e3),At(),xc("git-activity",vt=>{er(vt.payload.repoPath)===t&&(Xn(t,!0),dt())}).then(vt=>{$?vt():de=vt}).catch(console.error),()=>{$=!0,ne!=null&&window.clearInterval(ne),de&&de()}},[t,A,Ls]);async function Vs(){if(t){Ie(!0),We(null);try{await Me("authenticate_github");const $=await Me("get_github_auth_status");Wt($),$.authenticated?await rn(t):$.message&&We($.message)}catch($){We($ instanceof Error?$.message:String($))}finally{Ie(!1)}}}_.useEffect(()=>{be({}),Bs.current=null,Ie(!1),Wt(null),We(null),Ct([]),Se(null)},[t]),_.useEffect(()=>{var dt,At,vt,Jt;if(!t||!A){be({}),Je({}),Te({}),Le({}),Ke({}),Bs.current=null;return}const $=g.map(ht=>{var zt;return`${ht.name}:${ht.headSha}:${(zt=ht.parentBranch)!=null?zt:""}:${ht.commitsAhead}`}).join("|"),x=v.map(ht=>{var zt,Qt;return`${ht.fullSha}:${(Qt=(zt=ht.parentShas)==null?void 0:zt[1])!=null?Qt:""}`}).join("|"),S=`${t}|${A}|${$}|${x}`;if(Bs.current===S)return;Bs.current=S;const N={},Y={};for(const ht of g){if(ht.name===A)continue;const zt=k.filter(Qt=>Qt.branch===ht.name).map(Qt=>{var gt;return{fullSha:Qt.fullSha,sha:Qt.sha,parentSha:(gt=Qt.parentSha)!=null?gt:null,message:Qt.message,author:Qt.author,date:Qt.date,kind:"commit"}});N[ht.name]=zt,Y[ht.name]=zt.length}const ne=new Map;for(const ht of k)ne.set(ht.fullSha,ht.branch);const de=ht=>{if(!ht)return null;const zt=ne.get(ht);if(zt)return zt;for(const[Qt,gt]of ne.entries())if(Qt.startsWith(ht)||ht.startsWith(Qt))return gt;return null},Xe={[A]:null};for(const ht of g){if(ht.name===A){Xe[ht.name]=null;continue}const zt=k.filter(pn=>pn.branch===ht.name),Qt=new Set(zt.map(pn=>pn.fullSha)),gt=(At=(dt=zt.filter(pn=>{var Jn;const Mn=(Jn=pn.parentSha)!=null?Jn:null;return!Mn||!Qt.has(Mn)}).sort((pn,Mn)=>{const Jn=new Date(pn.date).getTime()-new Date(Mn.date).getTime();return Jn!==0?Jn:pn.fullSha.localeCompare(Mn.fullSha)})[0])==null?void 0:dt.parentSha)!=null?At:null,un=de(gt);Xe[ht.name]=(Jt=(vt=un!=null?un:ro.current[ht.name])!=null?vt:ht.parentBranch)!=null?Jt:null}be({}),Je(N),Te(Xe),Le(ht=>{const zt={};for(const Qt of g){const gt=ht[Qt.name];gt!=null&&Number.isFinite(gt)&&(zt[Qt.name]=gt)}return zt}),Ke(Y)},[t,A,g,v,k]),_.useEffect(()=>{if(!nt){lt(!1);return}lt(!0);const $=window.setTimeout(()=>{lt(!1)},ex),x=window.setTimeout(()=>{Se(null)},ex+Ek);return()=>{window.clearTimeout($),window.clearTimeout(x)}},[nt]),_.useEffect(()=>{if(!t||g.length===0)return;const $=N=>new Promise(Y=>setTimeout(Y,N));async function x(){const Y=`${await Me("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${Y}`),await $(800),await Me("screenshot",{path:`${Y}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${Y}`)}const S=N=>{if((N.metaKey||N.ctrlKey)&&!N.shiftKey&&!N.altKey&&N.key.toLowerCase()==="b"){N.preventDefault(),it(Y=>!Y);return}(N.metaKey||N.ctrlKey)&&N.shiftKey&&N.key==="S"&&(N.preventDefault(),x())};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[t,i,g]);async function Ys($){if(!t)return;Se(null);const x=/^STASH:(\d+)$/.exec($.commitSha);if(x){try{const S=parseInt(x[1],10),N=await Me("apply_stash_restore",{repoPath:t,stashIndex:S});W(N),await gn(t);const Y=`Stash ${S+1}`,ne=N.branchName?` on branch ${N.branchName}`:" at the stash base (detached HEAD)";Se({kind:"success",message:`Restored ${Y}${ne}; stash applied and dropped (uncommitted changes).`})}catch(S){const N=S instanceof Error?S.message:String(S);Se({kind:"error",message:N}),console.error("Failed to apply stash:",N)}return}if($.branchName){const S=(Y,ne)=>{const de=Y.replace(/\\/g,"/").replace(/\/+$/,""),Xe=ne.replace(/\\/g,"/").replace(/\/+$/,"");return de===Xe||de.toLowerCase()===Xe.toLowerCase()},N=Q.find(Y=>Y.pathExists===!1||Y.isCurrent||t&&S(Y.path,t)?!1:Y.branchName===$.branchName);if(N){await fo(N.path);return}}try{let S="";(await Me("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await Me("stash_push",{repoPath:t,includeUntracked:!0}),S="Stashed local changes (including untracked), then ",await gn(t));const Y=$.branchName?await Me("checkout_branch",{repoPath:t,branchName:$.branchName}):await Me("checkout_ref",{repoPath:t,refName:$.commitSha}),ne=await Me("get_checked_out_ref",{repoPath:t}).catch(()=>Y);W(ne),await gn(t);const de=ne.branchName?ne.branchName:`${ne.headSha.slice(0,7)} (detached)`;Se({kind:"success",message:`${S}Checked out ${de}`})}catch(S){const N=S instanceof Error?S.message:String(S);Se({kind:"error",message:N}),console.error("Failed to checkout commit:",N)}}async function Po(){if(!(!t||Qe)){Se(null),Bt(!0);try{if(!(await Me("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){Se({kind:"error",message:"No local changes to stash."});return}await Me("stash_push",{repoPath:t,includeUntracked:!0}),await gn(t),Se({kind:"success",message:"Stashed local changes (including untracked files)."})}catch($){const x=$ instanceof Error?$.message:String($);Se({kind:"error",message:x}),console.error("Failed to stash:",x)}finally{Bt(!1)}}}async function As($){if(!t||xt)return!1;const x=$.trim();if(!x)return Se({kind:"error",message:"Enter a commit message."}),!1;Se(null),yt(!0);try{if(!(await Me("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Se({kind:"error",message:"No local changes to commit."}),!1;const N=await Me("commit_working_tree",{repoPath:t,message:x});return W(N),gn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Se({kind:"success",message:"Committed local changes."}),!0}catch(S){const N=S instanceof Error?S.message:String(S);return Se({kind:"error",message:N}),console.error("Failed to commit:",N),!1}finally{yt(!1)}}async function ci(){if(!t||Zt)return!1;Se(null),at(!0);try{if(!(await Me("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Se({kind:"error",message:"No local changes to stage."}),!1;const x=await Me("stage_working_tree",{repoPath:t});return W(x),gn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Se({kind:"success",message:"Staged all changes."}),!0}catch($){const x=$ instanceof Error?$.message:String($);return Se({kind:"error",message:x}),console.error("Failed to stage:",x),!1}finally{at(!1)}}async function Ho($,x){if(!(!t||jt)){Rt(!0),Se(null);try{const S=/^STASH:(\d+)$/.exec($);let N;if(S){const Y=parseInt(S[1],10);N=await Me("move_stash_to_new_branch",{repoPath:t,stashIndex:Y,branchName:x})}else N=await Me("create_branch_from_uncommitted",{repoPath:t,branchName:x});W(N),gn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Se({kind:"success",message:`Moved to new branch "${x}"`})}catch(S){const N=S instanceof Error?S.message:String(S);Se({kind:"error",message:N}),console.error("Failed to create branch from node:",N)}finally{Rt(!1)}}}async function Uo($){if(!(!t||jt)){Rt(!0),Se(null);try{const x=await Me("create_root_branch",{repoPath:t,branchName:$});W(x),gn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Se({kind:"success",message:`Created new root branch "${$}"`})}catch(x){const S=x instanceof Error?x.message:String(x);Se({kind:"error",message:S}),console.error("Failed to create root branch:",S)}finally{Rt(!1)}}}async function Ws($,x){if(!t)return;const S=Array.from(new Set($.filter(N=>!!N&&N!==x)));if(S.length!==0){Se(null),kt(!0);try{let N=null;for(const Y of S)N=await Me("merge_ref_into_branch",{repoPath:t,sourceRef:Y,targetBranch:x});gn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),N&&W(N),Se({kind:"success",message:S.length===1?`Merged ${S[0].slice(0,7)} into ${x}`:`Merged ${S.length} commits into ${x}`})}catch(N){const Y=N instanceof Error?N.message:String(N);Se({kind:"error",message:Y}),console.error("Failed to merge refs into branch:",Y)}finally{kt(!1)}}}async function Vo(){if(!(!t||pt)){Se(null),It(!0);try{const $=await Me("push_all_unpushed_branches",{repoPath:t});gn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Se({kind:"success",message:$.length>0?$.length===1?`Pushed ${$[0].branchName}`:`Pushed ${$.length} branches`:"Everything local is already pushed."})}catch($){const x=$ instanceof Error?$.message:String($);Se({kind:"error",message:x}),console.error("Failed to push all branches:",x)}finally{It(!1)}}}async function Co(){if(!(!t||pt)){Se(null),It(!0);try{const $=await Me("push_current_branch",{repoPath:t});gn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Se({kind:"success",message:`Pushed ${$.branchName}`})}catch($){const x=$ instanceof Error?$.message:String($);Se({kind:"error",message:x}),console.error("Failed to push current branch:",x)}finally{It(!1)}}}async function Un($){var S;if(!t||pt)return;const x=Array.from(new Map($.filter(N=>N.branchName&&N.targetSha).map(N=>[N.branchName,N])).values());if(x.length!==0){Se(null),It(!0);try{for(const N of x)await Me("push_branch",{repoPath:t,branchName:N.branchName,targetSha:N.targetSha});gn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Se({kind:"success",message:x.length===1?`Pushed ${x[0].branchName} through ${(S=x[0].targetSha)==null?void 0:S.slice(0,7)}`:`Pushed ${x.length} selected commit ranges`})}catch(N){const Y=N instanceof Error?N.message:String(N);Se({kind:"error",message:Y}),console.error("Failed to push selected commits:",Y)}finally{It(!1)}}}async function Ds($){var ne;if(!t||st)return;const x=Array.from(new Set($.branchNames.filter(de=>de&&de!==A))),S=!!$.discardUncommittedChanges,N=(ne=$.stashIndices)!=null?ne:[],Y=Array.from(new Set(N)).sort((de,Xe)=>Xe-de);if(!(x.length===0&&!S&&Y.length===0)){Se(null),V(!0);try{for(const dt of Y)await Me("stash_drop",{repoPath:t,stashIndex:dt});const de=x.length>0||S?await Me("delete_selected_elements",{repoPath:t,branchNames:x,discardUncommittedChanges:S}):{deletedBranches:[],discardedUncommittedChanges:!1};gn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1});const Xe=[];Y.length>0&&Xe.push(Y.length===1?`removed stash ${Y[0]+1}`:`removed ${Y.length} stashes`),de.discardedUncommittedChanges&&Xe.push("discarded local uncommitted changes"),de.deletedBranches.length>0&&Xe.push(de.deletedBranches.length===1?`deleted ${de.deletedBranches[0]}`:`deleted ${de.deletedBranches.length} branches`),Se({kind:"success",message:Xe.length>0?Xe.join(" and "):"Nothing to delete."})}catch(de){const Xe=de instanceof Error?de.message:String(de);Se({kind:"error",message:Xe}),console.error("Failed to delete selected elements:",Xe)}finally{V(!1)}}}function ui($){$&&(ze($),fe(x=>x+1))}function Js($){$&&(He($),fe(x=>x+1))}_.useEffect(()=>{var S;const $=U!=null&&U.hasUncommittedChanges?"WORKING_TREE":(S=U==null?void 0:U.headSha)!=null?S:null;if(!$)return;const x=`${t!=null?t:"__no-repo__"}|${Gt}|${$}`;_n.current!==x&&(_n.current=x,ze($),fe(N=>N+1))},[U==null?void 0:U.hasUncommittedChanges,U==null?void 0:U.headSha,Gt,t]),_.useEffect(()=>{_n.current=null},[t]);const{enrichedBranches:en,enrichedBranchCommitPreviews:Fs,enrichedBranchUniqueAheadCounts:Vn,enrichedDirectCommits:Yn}=_.useMemo(()=>{var Jn,Ns,js,Rs,Os;const $=X5(De,g,k,je,Ye,A,(Jn=U==null?void 0:U.hasUncommittedChanges)!=null?Jn:!1);let x=$.branches,S=$.directCommits,N=$.branchCommitPreviews,Y=$.branchUniqueAheadCounts;if(!(U!=null&&U.hasUncommittedChanges))return{enrichedBranches:x,enrichedDirectCommits:S,enrichedBranchCommitPreviews:N,enrichedBranchUniqueAheadCounts:Y};const ne=U.headSha||U.parentSha||null,de=(js=(Ns=S[0])==null?void 0:Ns.fullSha)!=null?js:null,Xe=(bn,es)=>!bn||!es?!1:bn===es||bn.startsWith(es)||es.startsWith(bn),dt=[{name:A,headSha:de!=null?de:"",isDefault:!0},...x.map(bn=>({name:bn.name,headSha:bn.headSha,isDefault:!1}))],At=U.branchName?dt.find(bn=>bn.name===U.branchName):void 0,vt=ne?dt.filter(bn=>Xe(bn.headSha,ne)):[],Jt=(Rs=At!=null?At:vt.find(bn=>bn.isDefault))!=null?Rs:vt[0],ht=Jt&&!Jt.isDefault?x.find(bn=>bn.name===Jt.name):void 0,zt=(()=>{var es;if(!ne)return null;const bn=S.find(ys=>Xe(ys.fullSha,ne)||Xe(ys.sha,ne));if(bn!=null&&bn.date)return bn.date;if(ht){const ys=((es=N[ht.name])!=null?es:[]).find(Mo=>Xe(Mo.fullSha,ne)||Xe(Mo.sha,ne));if(ys!=null&&ys.date)return ys.date}return null})(),Qt=zt?new Date(zt).getTime():Number.NaN,gt=Date.now(),un=Number.isFinite(Qt)?Math.max(gt,Qt+1):gt,pn=new Date(un).toISOString(),Mn={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ne,message:"Local uncommitted changes",author:"You",date:pn,kind:"uncommitted"};return ht?{enrichedBranches:x.map(es=>es.name===ht.name?{...es,commitsAhead:es.commitsAhead+1,unpushedCommits:es.unpushedCommits+1,lastCommitDate:pn,headSha:"WORKING_TREE"}:es),enrichedDirectCommits:S,enrichedBranchCommitPreviews:{...N,[ht.name]:[Mn,...N[ht.name]||[]]},enrichedBranchUniqueAheadCounts:{...Y,[ht.name]:Math.max(0,(Os=Object.prototype.hasOwnProperty.call(Y,ht.name)?Y[ht.name]:ht.commitsAhead)!=null?Os:0)+1}}:{enrichedBranches:x,enrichedBranchCommitPreviews:{...N,[A]:[Mn,...N[A]||[]]},enrichedBranchUniqueAheadCounts:{...Y},enrichedDirectCommits:S}},[g,je,Ye,U,A,k,De]),ks=_.useMemo(()=>{const $={...qe};return $[A]=null,$},[qe,A,en]),eo=_.useMemo(()=>{var $;return($=Tw(en,A,ks,he))!=null?$:fp(en,A,Fs,ks)},[en,A,Fs,ks,he]),Yo=_.useMemo(()=>Ec({lanes:eo,branches:en,mergeNodes:v,directCommits:Yn,unpushedDirectCommits:M,defaultBranch:A,branchCommitPreviews:Fs,branchParentByName:ks,branchUniqueAheadCounts:Vn,manuallyOpenedClumps:hn,manuallyClosedClumps:gs,isDebugOpen:!1,gridSearchQuery:we,gridFocusSha:Ae,checkedOutRef:U!=null?U:null,orientation:Gt}),[eo,en,v,Yn,M,A,Fs,ks,Vn,hn,gs,we,Ae,(Si=U==null?void 0:U.headSha)!=null?Si:null,(Hi=U==null?void 0:U.branchName)!=null?Hi:null,Gt]),bo=_.useMemo(()=>{var $;return Ae&&($=Yo.clusterKeyByCommitId.get(Ae))!=null?$:null},[Yo.clusterKeyByCommitId,Ae]),ko=_.useMemo(()=>{if(!bo||gs.has(bo))return hn;const $=new Set(hn);return $.add(bo),$},[gs,hn,bo]),Xs=_.useMemo(()=>{if(!bo)return gs;const $=new Set(gs);return $.delete(bo),$},[gs,bo]),di=_.useMemo(()=>Ec({lanes:eo,branches:en,mergeNodes:v,directCommits:Yn,unpushedDirectCommits:M,defaultBranch:A,branchCommitPreviews:Fs,branchParentByName:ks,branchUniqueAheadCounts:Vn,manuallyOpenedClumps:ko,manuallyClosedClumps:Xs,isDebugOpen:!1,gridSearchQuery:we,gridFocusSha:Ae,checkedOutRef:U!=null?U:null,orientation:Gt}),[eo,en,v,Yn,M,A,Fs,ks,Vn,ko,Xs,we,Ae,(fi=U==null?void 0:U.headSha)!=null?fi:null,(vo=U==null?void 0:U.branchName)!=null?vo:null,Gt]);_.useEffect(()=>{try{const $=window.localStorage.getItem(tx);if($){const S=Number($);Number.isFinite(S)&&Ft(Math.min(ax,Math.max(ix,S)))}const x=window.localStorage.getItem(nx);x!=null&&it(x==="true")}catch{}},[]),_.useEffect(()=>{Hn.current=On},[On]),_.useEffect(()=>{const $=zn.current;$&&($.style.width=mn?"0px":`${On}px`)},[On,mn]),_.useEffect(()=>{try{window.localStorage.setItem(nx,String(mn))}catch{}},[mn]);const Zo=$=>{const x=Ss.current;if(!x)return;const S=x.startWidth+($-x.startX);x.pendingWidth=Math.min(ax,Math.max(ix,S));const N=zn.current;N&&(N.style.width=`${x.pendingWidth}px`)},ho=($,x)=>{const S=Ss.current;if(S&&!(x!=null&&S.pointerId!==x)){Ss.current=null,document.body.style.cursor="",document.body.style.userSelect="",Ft(S.pendingWidth);try{window.localStorage.setItem(tx,String(S.pendingWidth))}catch{}}},Jo=$=>{$.button===0&&($.preventDefault(),Ss.current={startX:$.clientX,startWidth:Hn.current,pendingWidth:Hn.current,pointerId:$.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",$.currentTarget.setPointerCapture($.pointerId))},jo=$=>{const x=Ss.current;!x||x.pointerId!==$.pointerId||Zo($.clientX)},Ot=$=>{if(Ss.current){try{$.currentTarget.releasePointerCapture($.pointerId)}catch{}ho("pointerup",$.pointerId)}},wi=$=>{if(Ss.current){try{$.currentTarget.releasePointerCapture($.pointerId)}catch{}ho("pointercancel",$.pointerId)}};return l.jsx("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:l.jsx("div",{className:"relative z-30 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:zn,className:"relative z-[60] flex h-full min-h-0 flex-none overflow-visible",style:{width:mn?64:On},children:[l.jsx("button",{type:"button",className:"window-no-drag absolute right-2.5 left-22 top-2.25 z-[9999] inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent","aria-label":mn?"Open sidebar":"Collapse sidebar",onClick:()=>it($=>!$),children:mn?l.jsx(bw,{className:"h-4 w-4 shrink-0"}):l.jsx(yw,{className:"h-4 w-4 shrink-0"})}),l.jsx(jk,{className:Tk("min-h-0 shrink-0 overflow-hidden pt-14 transition-[width,opacity] duration-300 ease-in-out","opacity-100"),style:{width:"100%"},collapsed:mn,projects:lo,activeProjectPath:t,onSelectProject:Zs,onAddProject:Us,onRemoveProject:Kt,onReorderProjects:$o,onRevealProjectInFinder:$i,projectLoading:et||(p&&t?!((ei=d[t])!=null&&ei.loaded):!1),projectError:_t,checkedOutRef:U,showCommits:!1,manuallyOpenedClumpsByProject:X,manuallyClosedClumpsByProject:Ee,manuallyOpenedClumps:ko,manuallyClosedClumps:Xs,setManuallyOpenedClumps:vi,setManuallyClosedClumps:Es,gridLayoutModel:di,onSelectCommit:ui,onSelectBranch:Js}),mn?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:Jo,onPointerMove:jo,onPointerUp:Ot,onPointerCancel:wi,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"})]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-40 h-12"}),l.jsx(aS,{branches:en,mergeNodes:v,directCommits:Yn,unpushedDirectCommits:M,unpushedCommitShasByBranch:L,openPRs:mt,defaultBranch:A,branchCommitPreviews:Fs,branchParentByName:ks,branchUniqueAheadCounts:Vn,gridSearchQuery:we,gridSearchJumpToken:J,gridSearchJumpDirection:I,gridFocusSha:Ae,onGridSearchResultCountChange:ee,onGridSearchResultIndexChange:ge,onGridSearchFocusChange:ze,checkedOutRef:U,onCommitClick:Ys,onMergeRefsIntoBranch:Ws,mergeInProgress:ct,onPushAllBranches:Vo,onPushCurrentBranch:Co,onPushCommitTargets:Un,pushInProgress:pt,onDeleteSelection:Ds,deleteInProgress:st,worktrees:Q,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:Qo,removeWorktreeInProgress:se,onSwitchToWorktree:fo,onStashLocalChanges:Po,stashInProgress:Qe,stashDisabled:!1,onCommitLocalChanges:As,commitInProgress:xt,commitDisabled:!1,onStageAllChanges:ci,stageInProgress:Zt,onCreateBranchFromNode:Ho,onCreateRootBranch:Uo,createBranchFromNodeInProgress:jt,isDebugOpen:Ln,onDebugClose:()=>an(!1),onInteractionChange:Ht,manuallyOpenedClumps:ko,manuallyClosedClumps:Xs,setManuallyOpenedClumps:vi,setManuallyClosedClumps:Es,layoutModel:di,orientation:Gt,gridHudProps:xo})]})]})})})}var Nk=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,Rk={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=Nk}var us=Rk,Bk=`.icon-transitions-module__iconState___uqK9J {
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
}`,Lk={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=Bk}var is=Lk,Ok=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),zk=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),$k=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),Ik=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${is.iconState} ${n?is.hiddenScaled:is.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${is.iconState} ${n?is.visibleScaled:is.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Pk=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${is.iconStateFast} ${i?is.visibleScaled:u?is.sending:is.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${is.iconStateFast} ${a?is.visibleScaled:is.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${is.iconStateFast} ${c?is.visibleScaled:is.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},Hk=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${is.iconFade} ${n?is.visible:is.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${is.iconFade} ${n?is.hidden:is.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),Uk=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${is.iconFadeFast} ${n?is.hidden:is.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${is.iconFadeFast} ${n?is.visible:is.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),Vk=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),Yk=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),G5=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Wk=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),Fk=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Xk=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),Gk=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),qk=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Kk=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Qk=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),q5=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],mm=q5.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),sp="feedback-freeze-styles",pm="__agentation_freeze";function Zk(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[pm]||(t[pm]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[pm]}var xn=Zk();typeof window<"u"&&!xn.installed&&(xn.origSetTimeout=window.setTimeout.bind(window),xn.origSetInterval=window.setInterval.bind(window),xn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?xn.origSetTimeout(t,n):xn.origSetTimeout((...a)=>{xn.frozen?xn.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?xn.origSetInterval(t,n):xn.origSetInterval((...a)=>{xn.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>xn.origRAF(n=>{xn.frozen?xn.frozenRAFQueue.push(t):t(n)}),xn.installed=!0);var Vt=xn.origSetTimeout,Jk=xn.origSetInterval,pl=xn.origRAF;function e8(t){return t?q5.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function t8(){if(typeof document>"u"||xn.frozen)return;xn.frozen=!0,xn.frozenTimeoutQueue=[],xn.frozenRAFQueue=[];let t=document.getElementById(sp);t||(t=document.createElement("style"),t.id=sp),t.textContent=`
    *${mm},
    *${mm}::before,
    *${mm}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),xn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;e8(i)||(n.pause(),xn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function lx(){var i;if(typeof document>"u"||!xn.frozen)return;xn.frozen=!1;const t=xn.frozenTimeoutQueue;xn.frozenTimeoutQueue=[];for(const a of t)xn.origSetTimeout(()=>{if(xn.frozen){xn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=xn.frozenRAFQueue;xn.frozenRAFQueue=[];for(const a of n)xn.origRAF(c=>{if(xn.frozen){xn.frozenRAFQueue.push(a);return}a(c)});for(const a of xn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}xn.pausedAnimations=[],(i=document.getElementById(sp))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function _m(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var Od=_.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:y,style:g,accentColor:b="#3c82f7",isExiting:v=!1,lightMode:C=!1,computedStyles:k},j){const[M,T]=_.useState(u),[L,O]=_.useState(!1),[A,F]=_.useState("initial"),[U,W]=_.useState(!1),[Q,me]=_.useState(!1),se=_.useRef(null),ae=_.useRef(null),we=_.useRef(null),He=_.useRef(null);_.useEffect(()=>{v&&A!=="exit"&&F("exit")},[v,A]),_.useEffect(()=>{Vt(()=>{F("enter")},0);const pe=Vt(()=>{F("entered")},200),Ee=Vt(()=>{const H=se.current;H&&(_m(H),H.selectionStart=H.selectionEnd=H.value.length,H.scrollTop=H.scrollHeight)},50);return()=>{clearTimeout(pe),clearTimeout(Ee),we.current&&clearTimeout(we.current),He.current&&clearTimeout(He.current)}},[]);const J=_.useCallback(()=>{He.current&&clearTimeout(He.current),O(!0),He.current=Vt(()=>{O(!1),_m(se.current)},250)},[]);_.useImperativeHandle(j,()=>({shake:J}),[J]);const fe=_.useCallback(()=>{F("exit"),we.current=Vt(()=>{p()},150)},[p]),I=_.useCallback(()=>{M.trim()&&h(M.trim())},[M,h]),ue=_.useCallback(pe=>{pe.stopPropagation(),!pe.nativeEvent.isComposing&&(pe.key==="Enter"&&!pe.shiftKey&&(pe.preventDefault(),I()),pe.key==="Escape"&&fe())},[I,fe]),X=[us.popup,C?us.light:"",A==="enter"?us.enter:"",A==="entered"?us.entered:"",A==="exit"?us.exit:"",L?us.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:ae,className:X,"data-annotation-popup":!0,style:g,onClick:pe=>pe.stopPropagation(),children:[l.jsxs("div",{className:us.header,children:[k&&Object.keys(k).length>0?l.jsxs("button",{className:us.headerToggle,onClick:()=>{const pe=Q;me(!Q),pe&&Vt(()=>_m(se.current),0)},type:"button",children:[l.jsx("svg",{className:`${us.chevron} ${Q?us.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:us.element,children:n})]}):l.jsx("span",{className:us.element,children:n}),i&&l.jsx("span",{className:us.timestamp,children:i})]}),k&&Object.keys(k).length>0&&l.jsx("div",{className:`${us.stylesWrapper} ${Q?us.expanded:""}`,children:l.jsx("div",{className:us.stylesInner,children:l.jsx("div",{className:us.stylesBlock,children:Object.entries(k).map(([pe,Ee])=>l.jsxs("div",{className:us.styleLine,children:[l.jsx("span",{className:us.styleProperty,children:pe.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:us.styleValue,children:Ee}),";"]},pe))})})}),a&&l.jsxs("div",{className:us.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:se,className:us.textarea,style:{borderColor:U?b:void 0},placeholder:c,value:M,onChange:pe=>T(pe.target.value),onFocus:()=>W(!0),onBlur:()=>W(!1),rows:2,onKeyDown:ue}),l.jsxs("div",{className:us.actions,children:[y&&l.jsx("div",{className:us.deleteWrapper,children:l.jsx("button",{className:us.deleteButton,onClick:y,type:"button",children:l.jsx(qk,{size:22})})}),l.jsx("button",{className:us.cancel,onClick:fe,children:"Cancel"}),l.jsx("button",{className:us.submit,style:{backgroundColor:b,opacity:M.trim()?1:.4},onClick:I,disabled:!M.trim(),children:d})]})]})}),n8=({content:t,children:n,...i})=>{const[a,c]=_.useState(!1),[u,d]=_.useState(!1),[h,p]=_.useState({top:0,right:0}),y=_.useRef(null),g=_.useRef(null),b=_.useRef(null),v=()=>{if(y.current){const j=y.current.getBoundingClientRect();p({top:j.top+j.height/2,right:window.innerWidth-j.left+8})}},C=()=>{d(!0),b.current&&(clearTimeout(b.current),b.current=null),v(),g.current=Vt(()=>{c(!0)},500)},k=()=>{g.current&&(clearTimeout(g.current),g.current=null),c(!1),b.current=Vt(()=>{d(!1)},150)};return _.useEffect(()=>()=>{g.current&&clearTimeout(g.current),b.current&&clearTimeout(b.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:y,onMouseEnter:C,onMouseLeave:k,...i,children:n}),u&&wl.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},s8=`.styles-module__tooltip___mcXL2 {
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
}`,o8={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=s8}var cx=o8,Er=({content:t})=>l.jsx(n8,{className:cx.tooltip,content:t,children:l.jsx($k,{className:cx.tooltipIcon})}),St={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},K5=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...St.navigation},{type:"header",label:"Header",...St.header},{type:"hero",label:"Hero",...St.hero},{type:"section",label:"Section",...St.section},{type:"sidebar",label:"Sidebar",...St.sidebar},{type:"footer",label:"Footer",...St.footer},{type:"modal",label:"Modal",...St.modal},{type:"banner",label:"Banner",...St.banner},{type:"drawer",label:"Drawer",...St.drawer},{type:"popover",label:"Popover",...St.popover},{type:"divider",label:"Divider",...St.divider}]},{section:"Content",items:[{type:"card",label:"Card",...St.card},{type:"text",label:"Text",...St.text},{type:"image",label:"Image",...St.image},{type:"video",label:"Video",...St.video},{type:"table",label:"Table",...St.table},{type:"grid",label:"Grid",...St.grid},{type:"list",label:"List",...St.list},{type:"chart",label:"Chart",...St.chart},{type:"codeBlock",label:"Code Block",...St.codeBlock},{type:"map",label:"Map",...St.map},{type:"timeline",label:"Timeline",...St.timeline},{type:"calendar",label:"Calendar",...St.calendar},{type:"accordion",label:"Accordion",...St.accordion},{type:"carousel",label:"Carousel",...St.carousel},{type:"logo",label:"Logo",...St.logo},{type:"faq",label:"FAQ",...St.faq},{type:"gallery",label:"Gallery",...St.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...St.button},{type:"input",label:"Input",...St.input},{type:"search",label:"Search",...St.search},{type:"form",label:"Form",...St.form},{type:"tabs",label:"Tabs",...St.tabs},{type:"dropdown",label:"Dropdown",...St.dropdown},{type:"toggle",label:"Toggle",...St.toggle},{type:"stepper",label:"Stepper",...St.stepper},{type:"rating",label:"Rating",...St.rating},{type:"fileUpload",label:"File Upload",...St.fileUpload},{type:"checkbox",label:"Checkbox",...St.checkbox},{type:"radio",label:"Radio",...St.radio},{type:"slider",label:"Slider",...St.slider},{type:"datePicker",label:"Date Picker",...St.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...St.avatar},{type:"badge",label:"Badge",...St.badge},{type:"tag",label:"Tag",...St.tag},{type:"breadcrumb",label:"Breadcrumb",...St.breadcrumb},{type:"pagination",label:"Pagination",...St.pagination},{type:"progress",label:"Progress",...St.progress},{type:"alert",label:"Alert",...St.alert},{type:"toast",label:"Toast",...St.toast},{type:"notification",label:"Notification",...St.notification},{type:"tooltip",label:"Tooltip",...St.tooltip},{type:"stat",label:"Stat",...St.stat},{type:"skeleton",label:"Skeleton",...St.skeleton},{type:"chip",label:"Chip",...St.chip},{type:"icon",label:"Icon",...St.icon},{type:"spinner",label:"Spinner",...St.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...St.pricing},{type:"testimonial",label:"Testimonial",...St.testimonial},{type:"cta",label:"CTA",...St.cta},{type:"productCard",label:"Product Card",...St.productCard},{type:"profile",label:"Profile",...St.profile},{type:"feature",label:"Feature",...St.feature},{type:"team",label:"Team",...St.team},{type:"login",label:"Login",...St.login},{type:"contact",label:"Contact",...St.contact}]}],Qi={};for(const t of K5)for(const n of t.items)Qi[n.type]=n;function Ue({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Zn({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function Ko({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function i8({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx(Zn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(Ue,{w:t*.06}),l.jsx(Ue,{w:t*.07}),l.jsx(Ue,{w:t*.05}),l.jsx(Ue,{w:t*.06})]}),l.jsx(Zn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function a8({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Ue,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Ue,{w:t*.6}),l.jsx(Ue,{w:t*.4}),l.jsx(Zn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function r8({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Ue,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Zn,{w:10,h:10,radius:2}),l.jsx(Ue,{w:t*(.4+c*17%30/100)})]},c))]})}function l8({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ue,{w:"60%",h:3,strong:!0}),l.jsx(Ue,{w:"80%",h:2}),l.jsx(Ue,{w:"70%",h:2}),l.jsx(Ue,{w:"60%",h:2})]},c))})}function c8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ue,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Ue,{w:"90%"}),l.jsx(Ue,{w:"70%"}),l.jsx(Ue,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(Zn,{w:70,h:26,radius:4}),l.jsx(Zn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function u8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ue,{w:"70%",h:4,strong:!0}),l.jsx(Ue,{w:"95%",h:2}),l.jsx(Ue,{w:"85%",h:2}),l.jsx(Ue,{w:"50%",h:2})]})]})}function d8({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Ue,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Ue,{w:`${70+u*13%25}%`,h:2},u))]})}function f8({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function h8({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Ue,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Ue,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function m8({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(Ko,{size:8}),l.jsx(Ue,{w:`${55+c*17%35}%`,h:2})]},c))})}function p8({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Ue,{w:Math.max(20,t*.5),h:3,strong:!0})})}function _8({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Ue,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Ue,{w:"40%",h:2})})]})}function g8({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ue,{w:60+c*17%30,h:2}),l.jsx(Zn,{w:"100%",h:28,radius:4})]},c)),l.jsx(Zn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function y8({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Ue,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Ue,{w:"80%",h:2}),l.jsx(Ue,{w:"65%",h:2}),l.jsx(Ue,{w:"75%",h:2})]})]})}function x8({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function b8({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Ue,{w:Math.max(16,t*.5),h:2,strong:!0})})}function v8({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Ue,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Ue,{w:t*.35})]})}function w8({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(Ue,{w:t*.3,h:4,strong:!0}),l.jsx(Ue,{w:t*.7}),l.jsx(Ue,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx(Zn,{w:"33%",h:"100%",radius:4}),l.jsx(Zn,{w:"33%",h:"100%",radius:4}),l.jsx(Zn,{w:"33%",h:"100%",radius:4})]})]})}function S8({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(Zn,{w:"100%",h:"100%",radius:4},u))})}function C8({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Ue,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Ue,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function k8({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function j8({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(Ko,{size:Math.min(14,n*.4)}),l.jsx(Ue,{w:"50%",h:2})]})}function M8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Ko,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:"60%",h:3,strong:!0}),l.jsx(Ue,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function E8({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function T8({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(Zn,{w:a,h:`${d}%`,radius:2},u)})})}function A8({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(Zn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function D8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Ue,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function N8({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Ue,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function R8({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(Zn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function B8({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function L8({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Ue,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function O8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Zn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(Ko,{size:5}),l.jsx(Ko,{size:5}),l.jsx(Ko,{size:5})]})]})}function z8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Ue,{w:t*.4,h:3,strong:!0}),l.jsx(Ue,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(Ko,{size:5}),l.jsx(Ue,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(Zn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function $8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ue,{w:"90%",h:2}),l.jsx(Ue,{w:"75%",h:2}),l.jsx(Ue,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Ko,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Ue,{w:60,h:3,strong:!0}),l.jsx(Ue,{w:40,h:2})]})]})]})}function I8({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Ue,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Ue,{w:t*.35}),l.jsx(Zn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function P8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:"40%",h:3,strong:!0}),l.jsx(Ue,{w:"70%",h:2})]})]})}function H8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Ue,{w:t*.4,h:3,strong:!0}),l.jsx(Zn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function U8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Ue,{w:t*.5,h:2}),l.jsx(Ue,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Ue,{w:t*.3,h:2})]})}function V8({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function Y8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Ue,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function W8({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function F8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function X8({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(Ko,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Ue,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function G8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Ue,{w:t*.4,h:2}),l.jsx(Ue,{w:t*.25,h:2})]})}function q8({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(Ko,{size:6}),l.jsx(Ko,{size:6}),l.jsx(Ko,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Ue,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function K8({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Ue,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Ue,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function Q8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Ko,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:"50%",h:3,strong:!0}),l.jsx(Ue,{w:"75%",h:2})]}),l.jsx(Ue,{w:30,h:2})]})}function Z8({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ue,{w:"65%",h:4,strong:!0}),l.jsx(Ue,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ue,{w:"30%",h:5,strong:!0}),l.jsx(Zn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function J8({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Ko,{size:i}),l.jsx(Ue,{w:t*.45,h:4,strong:!0}),l.jsx(Ue,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ue,{w:20,h:3,strong:!0}),l.jsx(Ue,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ue,{w:20,h:3,strong:!0}),l.jsx(Ue,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ue,{w:20,h:3,strong:!0}),l.jsx(Ue,{w:28,h:2})]})]})]})}function ej({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Ue,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Ue,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function tj({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ue,{w:"70%",h:3,strong:!0}),l.jsx(Ue,{w:"90%",h:2}),l.jsx(Ue,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function nj({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx(Zn,{w:i,h:i,radius:i*.25}),l.jsx(Ue,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function sj({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Ue,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function oj({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function ij({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function aj({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function rj({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function lj({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Ue,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Ue,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function cj({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function uj({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Ue,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function dj({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function fj({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function hj({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx(Zn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ue,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Ue,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function mj({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Ue,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(Ko,{size:a}),l.jsx(Ue,{w:t*.12,h:3,strong:!0}),l.jsx(Ue,{w:t*.08,h:2})]},u))})]})}function pj({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(Ue,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Ue,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:Math.min(60,t*.2),h:2}),l.jsx(Zn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(Zn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Ue,{w:t*.4,h:2})]})}function _j({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(Ue,{w:t*.4,h:4,strong:!0}),l.jsx(Ue,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:50,h:2}),l.jsx(Zn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:40,h:2}),l.jsx(Zn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:50,h:2}),l.jsx(Zn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Ue,{w:60,h:2}),l.jsx(Zn,{w:"100%",h:"100%",radius:4})]}),l.jsx(Zn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var gj={navigation:i8,hero:a8,sidebar:r8,footer:l8,modal:c8,card:u8,text:d8,image:f8,table:h8,list:m8,button:p8,input:_8,form:g8,tabs:y8,avatar:x8,badge:b8,header:v8,section:w8,grid:S8,dropdown:C8,toggle:k8,search:j8,toast:M8,progress:E8,chart:T8,video:A8,tooltip:D8,breadcrumb:N8,pagination:R8,divider:B8,accordion:L8,carousel:O8,pricing:z8,testimonial:$8,cta:I8,alert:P8,banner:H8,stat:U8,stepper:V8,tag:Y8,rating:W8,map:F8,timeline:X8,fileUpload:G8,codeBlock:q8,calendar:K8,notification:Q8,productCard:Z8,profile:J8,drawer:ej,popover:tj,logo:nj,faq:sj,gallery:oj,checkbox:ij,radio:aj,slider:rj,datePicker:lj,skeleton:cj,chip:uj,icon:dj,spinner:fj,feature:hj,team:mj,login:pj,contact:_j};function yj({type:t,width:n,height:i,text:a}){const c=gj[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var xj=`svg[fill=none] {
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
}`,bj={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=xj}var Be=bj,ll=24,nd=5;function ux(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,y=t.x+t.width/2,g=t.y,b=t.y+t.height,v=t.y+t.height/2,C=!a,k=C?[h,p,y]:[...a.left?[h]:[],...a.right?[p]:[]],j=C?[g,b,v]:[...a.top?[g]:[],...a.bottom?[b]:[]],M=[];for(const ae of n)i.has(ae.id)||M.push(ae);c&&M.push(...c);for(const ae of M){const we=ae.x,He=ae.x+ae.width,J=ae.x+ae.width/2,fe=ae.y,I=ae.y+ae.height,ue=ae.y+ae.height/2;for(const X of k)for(const pe of[we,He,J]){const Ee=pe-X;Math.abs(Ee)<nd&&Math.abs(Ee)<Math.abs(u)&&(u=Ee)}for(const X of j)for(const pe of[fe,I,ue]){const Ee=pe-X;Math.abs(Ee)<nd&&Math.abs(Ee)<Math.abs(d)&&(d=Ee)}}const T=Math.abs(u)<nd?u:0,L=Math.abs(d)<nd?d:0,O=[],A=new Set,F=h+T,U=p+T,W=y+T,Q=g+L,me=b+L,se=v+L;for(const ae of M){const we=ae.x,He=ae.x+ae.width,J=ae.x+ae.width/2,fe=ae.y,I=ae.y+ae.height,ue=ae.y+ae.height/2;for(const X of[we,J,He])for(const pe of[F,W,U])if(Math.abs(pe-X)<.5){const Ee=`x:${Math.round(X)}`;A.has(Ee)||(A.add(Ee),O.push({axis:"x",pos:X}))}for(const X of[fe,ue,I])for(const pe of[Q,se,me])if(Math.abs(pe-X)<.5){const Ee=`y:${Math.round(X)}`;A.has(Ee)||(A.add(Ee),O.push({axis:"y",pos:X}))}}return{dx:T,dy:L,guides:O}}function dx(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function vj({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:y,onSelectionChange:g,deselectSignal:b,onDragMove:v,onDragEnd:C,clearSignal:k,wireframe:j}){const[M,T]=_.useState(new Set),[L,O]=_.useState(null),[A,F]=_.useState(null),[U,W]=_.useState(null),[Q,me]=_.useState([]),[se,ae]=_.useState(null),[we,He]=_.useState(!1),J=_.useRef(!1),[fe,I]=_.useState(new Set),ue=_.useRef(new Map),X=_.useRef(null),pe=_.useRef(null),Ee=_.useRef(t);Ee.current=t;const H=_.useRef(g);H.current=g;const ce=_.useRef(v);ce.current=v;const ee=_.useRef(C);ee.current=C;const le=_.useRef(b);_.useEffect(()=>{b!==le.current&&(le.current=b,T(new Set))},[b]);const ge=_.useRef(k);_.useEffect(()=>{if(k!==void 0&&k!==ge.current){ge.current=k;const ie=new Set(Ee.current.map(We=>We.id));ie.size>0&&(I(ie),T(new Set),pe.current=null,Vt(()=>{n([]),I(new Set)},180))}},[k,n]),_.useEffect(()=>{const ie=We=>{const nt=We.target;if(!(nt.tagName==="INPUT"||nt.tagName==="TEXTAREA"||nt.isContentEditable)){if((We.key==="Backspace"||We.key==="Delete")&&M.size>0){We.preventDefault();const Ge=new Set(M);I(Ge),T(new Set),Vt(()=>{n(Ee.current.filter(lt=>!Ge.has(lt.id))),I(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(We.key)&&M.size>0){We.preventDefault();const Ge=We.shiftKey?20:1,lt=We.key==="ArrowLeft"?-Ge:We.key==="ArrowRight"?Ge:0,ct=We.key==="ArrowUp"?-Ge:We.key==="ArrowDown"?Ge:0;n(t.map(kt=>M.has(kt.id)?{...kt,x:Math.max(0,kt.x+lt),y:Math.max(0,kt.y+ct)}:kt));return}if(We.key==="Escape"){i?a(null):M.size>0&&T(new Set);return}}};return document.addEventListener("keydown",ie),()=>document.removeEventListener("keydown",ie)},[M,i,t,n,a]);const Ae=_.useCallback(ie=>{if(ie.button!==0||p||ie.target.closest(`.${Be.placement}`))return;ie.preventDefault(),ie.stopPropagation();const nt=window.scrollY,Se=ie.clientX,Ge=ie.clientY;if(i){pe.current="place",d==null||d(!0);let lt=!1,ct=Se,kt=Ge;const pt=st=>{ct=st.clientX,kt=st.clientY;const V=Math.abs(ct-Se),Z=Math.abs(kt-Ge);if((V>5||Z>5)&&(lt=!0),lt){const be=Math.min(Se,ct),je=Math.min(Ge,kt),Je=Math.abs(ct-Se),qe=Math.abs(kt-Ge);O({x:be,y:je,w:Je,h:qe}),W({x:st.clientX+12,y:st.clientY+12,text:`${Math.round(Je)} × ${Math.round(qe)}`})}},It=st=>{window.removeEventListener("mousemove",pt),window.removeEventListener("mouseup",It),O(null),W(null),pe.current=null,d==null||d(!1);const V=St[i];let Z,be,je,Je;lt?(Z=Math.min(Se,ct),be=Math.min(Ge,kt)+nt,je=Math.max(ll,Math.abs(ct-Se)),Je=Math.max(ll,Math.abs(kt-Ge))):(je=V.width,Je=V.height,Z=Se-je/2,be=Ge+nt-Je/2),Z=Math.max(0,Z),be=Math.max(0,be);const qe={id:dx(),type:i,x:Z,y:be,width:je,height:Je,scrollY:nt,timestamp:Date.now()},Te=[...t,qe];n(Te),T(new Set([qe.id])),a(null)};window.addEventListener("mousemove",pt),window.addEventListener("mouseup",It)}else{ie.shiftKey||T(new Set),pe.current="select";let lt=!1;const ct=pt=>{const It=Math.abs(pt.clientX-Se),st=Math.abs(pt.clientY-Ge);if((It>4||st>4)&&(lt=!0),lt){const V=Math.min(Se,pt.clientX),Z=Math.min(Ge,pt.clientY);F({x:V,y:Z,w:Math.abs(pt.clientX-Se),h:Math.abs(pt.clientY-Ge)})}},kt=pt=>{if(window.removeEventListener("mousemove",ct),window.removeEventListener("mouseup",kt),pe.current=null,lt){const It=Math.min(Se,pt.clientX),st=Math.min(Ge,pt.clientY)+nt,V=Math.abs(pt.clientX-Se),Z=Math.abs(pt.clientY-Ge),be=new Set(ie.shiftKey?M:new Set);for(const je of t)je.y-nt,je.x+je.width>It&&je.x<It+V&&je.y+je.height>st&&je.y<st+Z&&be.add(je.id);T(be)}F(null)};window.addEventListener("mousemove",ct),window.addEventListener("mouseup",kt)}},[i,p,t,n,M]),ze=_.useCallback((ie,We)=>{var qe;if(ie.button!==0)return;const nt=ie.target;if(nt.closest(`.${Be.handle}`)||nt.closest(`.${Be.deleteButton}`))return;ie.preventDefault(),ie.stopPropagation();let Se;ie.shiftKey?(Se=new Set(M),Se.has(We)?Se.delete(We):Se.add(We)):M.has(We)?Se=new Set(M):Se=new Set([We]),T(Se),(Se.size!==M.size||[...Se].some(Te=>!M.has(Te)))&&((qe=H.current)==null||qe.call(H,Se,ie.shiftKey));const lt=ie.clientX,ct=ie.clientY,kt=new Map;for(const Te of t)Se.has(Te.id)&&kt.set(Te.id,{x:Te.x,y:Te.y});pe.current="move",d==null||d(!0);let pt=!1,It=!1,st=t,V=0,Z=0;const be=new Map;for(const Te of t)kt.has(Te.id)&&be.set(Te.id,{w:Te.width,h:Te.height});const je=Te=>{var Zt;const he=Te.clientX-lt,Le=Te.clientY-ct;if((Math.abs(he)>2||Math.abs(Le)>2)&&(pt=!0),!pt)return;if(Te.altKey&&!It){It=!0;const at=[];for(const jt of t)kt.has(jt.id)&&at.push({...jt,id:dx(),timestamp:Date.now()});st=[...t,...at]}let Ye=1/0,Ke=1/0,De=-1/0,rt=-1/0;for(const[at,jt]of kt){const Rt=be.get(at);Rt&&(Ye=Math.min(Ye,jt.x+he),Ke=Math.min(Ke,jt.y+Le),De=Math.max(De,jt.x+he+Rt.w),rt=Math.max(rt,jt.y+Le+Rt.h))}const mt={x:Ye,y:Ke,width:De-Ye,height:rt-Ke},{dx:Ct,dy:Qe,guides:Bt}=ux(mt,st,new Set(kt.keys()),void 0,y);me(Bt);const xt=he+Ct,yt=Le+Qe;V=xt,Z=yt,n(st.map(at=>{const jt=kt.get(at.id);return jt?{...at,x:Math.max(0,jt.x+xt),y:Math.max(0,jt.y+yt)}:at})),(Zt=ce.current)==null||Zt.call(ce,xt,yt)},Je=()=>{var Te;window.removeEventListener("mousemove",je),window.removeEventListener("mouseup",Je),pe.current=null,d==null||d(!1),me([]),(Te=ee.current)==null||Te.call(ee,V,Z,pt)};window.addEventListener("mousemove",je),window.addEventListener("mouseup",Je)},[M,t,n,d]),et=_.useCallback((ie,We,nt)=>{ie.preventDefault(),ie.stopPropagation();const Se=t.find(be=>be.id===We);if(!Se)return;T(new Set([We])),pe.current="resize",d==null||d(!0);const Ge=ie.clientX,lt=ie.clientY,ct=Se.width,kt=Se.height,pt=Se.x,It=Se.y,st={left:nt.includes("w"),right:nt.includes("e"),top:nt.includes("n"),bottom:nt.includes("s")},V=be=>{const je=be.clientX-Ge,Je=be.clientY-lt;let qe=ct,Te=kt,he=pt,Le=It;nt.includes("e")&&(qe=Math.max(ll,ct+je)),nt.includes("w")&&(qe=Math.max(ll,ct-je),he=pt+ct-qe),nt.includes("s")&&(Te=Math.max(ll,kt+Je)),nt.includes("n")&&(Te=Math.max(ll,kt-Je),Le=It+kt-Te);const Ye={x:he,y:Le,width:qe,height:Te},{dx:Ke,dy:De,guides:rt}=ux(Ye,Ee.current,new Set([We]),st,y);me(rt),Ke!==0&&(st.right?qe+=Ke:st.left&&(he+=Ke,qe-=Ke)),De!==0&&(st.bottom?Te+=De:st.top&&(Le+=De,Te-=De)),n(Ee.current.map(mt=>mt.id===We?{...mt,x:he,y:Le,width:qe,height:Te}:mt)),W({x:be.clientX+12,y:be.clientY+12,text:`${Math.round(qe)} × ${Math.round(Te)}`})},Z=()=>{window.removeEventListener("mousemove",V),window.removeEventListener("mouseup",Z),W(null),pe.current=null,d==null||d(!1),me([])};window.addEventListener("mousemove",V),window.addEventListener("mouseup",Z)},[t,n,d]),$e=_.useCallback(ie=>{pe.current=null,I(We=>{const nt=new Set(We);return nt.add(ie),nt}),T(We=>{const nt=new Set(We);return nt.delete(ie),nt}),Vt(()=>{n(Ee.current.filter(We=>We.id!==ie)),I(We=>{const nt=new Set(We);return nt.delete(ie),nt})},180)},[n]),$t={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Nt=_.useCallback(ie=>{const We=t.find(nt=>nt.id===ie);We&&(J.current=!!We.text,ae(ie),He(!1))},[t]),_t=_.useCallback(()=>{se&&(He(!0),Vt(()=>{ae(null),He(!1)},150))},[se]);_.useEffect(()=>{u&&se&&_t()},[u]);const tt=_.useCallback(ie=>{se&&(n(t.map(We=>We.id===se?{...We,text:ie.trim()||void 0}:We)),_t())},[se,t,n,_t]),ot=typeof window<"u"?window.scrollY:0,Wt=["nw","ne","se","sw"],on=j?"#f97316":"#3c82f7",Ie=[{dir:"n",cls:Be.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:on})})},{dir:"e",cls:Be.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:on})})},{dir:"s",cls:Be.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:on})})},{dir:"w",cls:Be.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:on})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:X,className:`${Be.overlay} ${c?"":Be.light} ${i?Be.placing:""} ${p?Be.passthrough:""} ${u?Be.overlayExiting:""} ${j?Be.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Ae,children:t.map(ie=>{var Ge;const We=M.has(ie.id),nt=((Ge=Qi[ie.type])==null?void 0:Ge.label)||ie.type,Se=ie.y-ot;return l.jsxs("div",{"data-design-placement":ie.id,className:`${Be.placement} ${We?Be.selected:""} ${fe.has(ie.id)?Be.exiting:""}`,style:{left:ie.x,top:Se,width:ie.width,height:ie.height,position:"fixed"},onMouseDown:lt=>ze(lt,ie.id),onDoubleClick:()=>Nt(ie.id),children:[l.jsx("span",{className:Be.placementLabel,children:nt}),l.jsx("span",{className:`${Be.placementAnnotation} ${ie.text?Be.annotationVisible:""}`,children:(ie.text&&ue.current.set(ie.id,ie.text),ie.text||ue.current.get(ie.id)||"")}),l.jsx("div",{className:Be.placementContent,children:l.jsx(yj,{type:ie.type,width:ie.width,height:ie.height,text:ie.text})}),l.jsx("div",{className:Be.deleteButton,onMouseDown:lt=>lt.stopPropagation(),onClick:()=>$e(ie.id),children:"✕"}),Wt.map(lt=>l.jsx("div",{className:`${Be.handle} ${Be[`handle${lt.charAt(0).toUpperCase()}${lt.slice(1)}`]}`,onMouseDown:ct=>et(ct,ie.id,lt)},lt)),Ie.map(({dir:lt,cls:ct,arrow:kt})=>l.jsx("div",{className:`${Be.edgeHandle} ${ct}`,onMouseDown:pt=>et(pt,ie.id,lt),children:kt},lt))]},ie.id)})}),se&&(()=>{var It,st;const ie=t.find(V=>V.id===se);if(!ie)return null;const We=ie.y-ot,nt=ie.x+ie.width/2,Se=We-8,Ge=We+ie.height+8,lt=Se>200,ct=Ge<window.innerHeight-100,kt=Math.max(160,Math.min(window.innerWidth-160,nt));let pt;return lt?pt={left:kt,bottom:window.innerHeight-Se}:ct?pt={left:kt,top:Ge}:pt={left:kt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(Od,{element:((It=Qi[ie.type])==null?void 0:It.label)||ie.type,placeholder:$t[ie.type]||"Label or content text",initialValue:(st=ie.text)!=null?st:"",submitLabel:J.current?"Save":"Set",onSubmit:tt,onCancel:_t,onDelete:J.current?()=>{tt("")}:void 0,isExiting:we,lightMode:!c,style:pt})})(),L&&l.jsx("div",{className:Be.drawBox,style:{left:L.x,top:L.y,width:L.w,height:L.h},"data-feedback-toolbar":!0}),A&&l.jsx("div",{className:Be.selectBox,style:{left:A.x,top:A.y,width:A.w,height:A.h},"data-feedback-toolbar":!0}),U&&l.jsx("div",{className:Be.sizeIndicator,style:{left:U.x,top:U.y},"data-feedback-toolbar":!0,children:U.text}),Q.map((ie,We)=>l.jsx("div",{className:Be.guideLine,style:ie.axis==="x"?{position:"fixed",left:ie.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:ie.pos-ot,right:0,height:1},"data-feedback-toolbar":!0},`${ie.axis}-${ie.pos}-${We}`))]})}function wj(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?Be.fadeTop:""} ${i?Be.fadeBottom:""}`}var z="currentColor",Re="0.5";function Sj({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:z,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:z,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:z,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:z,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:z,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:z,strokeWidth:Re})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:z,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:z,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:z,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:z,strokeWidth:Re})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:z,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:z,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:z,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:z,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:z,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:z,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:z,strokeWidth:Re,fill:z,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:z,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:z,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:z,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:z,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:z,strokeWidth:Re})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:z,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:z,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:z,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:z,strokeWidth:Re})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:z,strokeWidth:Re,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:z,strokeWidth:Re,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:z,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:z,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:z,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:z,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:z,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:z,strokeWidth:Re}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:z,strokeWidth:Re,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:z,strokeWidth:Re,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:z,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:z,strokeWidth:Re})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:z,strokeWidth:Re})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:z,strokeWidth:Re,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:z,strokeWidth:Re,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:z,strokeWidth:Re}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:z,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:z,strokeWidth:Re}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:z,strokeWidth:Re}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:z,strokeWidth:Re})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:z,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:z,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:z,strokeWidth:Re,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:z,strokeWidth:Re,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:z,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:z,opacity:".15",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:z,strokeWidth:Re})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:z,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:z,strokeWidth:Re,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:z,strokeWidth:Re})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:z,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:z,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:z,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:z,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:z,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:z,strokeWidth:Re,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:z,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:z,strokeWidth:Re})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:z,strokeWidth:Re,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:z,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:z,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:z,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:z,strokeWidth:Re})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:z,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:z,opacity:".2",stroke:z,strokeWidth:Re}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:z,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:z,strokeWidth:Re}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:z,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:z,strokeWidth:Re})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:z,strokeWidth:Re,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:z,strokeWidth:Re,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:z,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:z,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:z,strokeWidth:Re,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:z,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:z,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:z,opacity:".15",stroke:z,strokeWidth:Re})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:z,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:z,opacity:".2",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:z,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:z,strokeWidth:Re,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:z,strokeWidth:Re,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:z,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:z,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:z,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:z,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:z,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:z,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:z,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:z,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:z,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:z,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:z,strokeWidth:Re,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:z,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:z,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:z,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:z,strokeWidth:Re})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:z,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:z,strokeWidth:Re,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:z,strokeWidth:Re})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:z,strokeWidth:Re}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:z,strokeWidth:Re,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:z,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:z,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:z,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:z,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:z,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Re})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:z,strokeWidth:Re,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:z,strokeWidth:Re}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:z,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:z,strokeWidth:Re})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:z,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:z,strokeWidth:Re,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:z,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:z,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:z,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:z,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:z,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:z,opacity:".08",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:z,strokeWidth:Re,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:z,strokeWidth:Re,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:z,strokeWidth:Re,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:z,strokeWidth:Re,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:z,strokeWidth:Re,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:z,strokeWidth:Re,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:z,strokeWidth:Re,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:z,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:z,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:z,strokeWidth:Re,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:z,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:z,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:z,strokeWidth:Re}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:z,opacity:".2"})]});default:return null}}function Cj({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${Be.placeScroll} ${c||""}`,children:K5.map(d=>l.jsxs("div",{className:Be.paletteSection,children:[l.jsx("div",{className:Be.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${Be.paletteItem} ${t===h.type?Be.active:""} ${u?Be.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:Be.paletteItemIcon,children:l.jsx(Sj,{type:h.type})}),l.jsx("span",{className:Be.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function kj({value:t,suffix:n}){const[i,a]=_.useState(null),[c,u]=_.useState(n),[d,h]=_.useState("up"),p=_.useRef(t),y=_.useRef(n),g=_.useRef(),b=i!==null&&c!==n;return _.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,y.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(y.current),p.current=t,y.current=n,clearTimeout(g.current),g.current=Vt(()=>a(null),250)}else y.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):b?l.jsxs("span",{className:Be.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${Be.rollingNum} ${d==="up"?Be.exitUp:Be.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${Be.rollingNum} ${d==="up"?Be.enterUp:Be.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:Be.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${Be.rollingNum} ${d==="up"?Be.exitUp:Be.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${Be.rollingNum} ${d==="up"?Be.enterUp:Be.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function jj({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:y,blankCanvas:g,onBlankCanvasChange:b,wireframePurpose:v,onWireframePurposeChange:C,Tooltip:k}){const[j,M]=_.useState(!1),[T,L]=_.useState("exit"),[O,A]=_.useState(!1),[F,U]=_.useState(!0),W=_.useRef(0),Q=_.useRef(""),me=_.useRef(0),se=_.useRef(),ae=_.useRef(null),[we,He]=_.useState("");_.useEffect(()=>(u?(M(!0),clearTimeout(se.current),cancelAnimationFrame(me.current),me.current=pl(()=>{me.current=pl(()=>{L("enter")})})):(cancelAnimationFrame(me.current),L("exit"),clearTimeout(se.current),se.current=Vt(()=>{M(!1),d==null||d()},200)),()=>cancelAnimationFrame(me.current)),[u]);const J=h>0||a>0,fe=h+a;return fe>0&&(W.current=fe,Q.current=g?fe===1?"Component":"Components":fe===1?"Change":"Changes"),_.useEffect(()=>{if(J)O?U(!1):(U(!0),A(!0),pl(()=>{pl(()=>{U(!1)})}));else{U(!0);const I=Vt(()=>A(!1),300);return()=>clearTimeout(I)}},[J]),_.useEffect(()=>{if(!j)return;const I=ae.current;if(!I)return;const ue=()=>He(wj(I));ue(),I.addEventListener("scroll",ue,{passive:!0});const X=new ResizeObserver(ue);return X.observe(I),()=>{I.removeEventListener("scroll",ue),X.disconnect()}},[j]),j?l.jsxs("div",{className:`${Be.palette} ${Be[T]} ${i?"":Be.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:I=>I.stopPropagation(),onMouseDown:I=>I.stopPropagation(),onTransitionEnd:I=>{I.target===I.currentTarget&&(u||(clearTimeout(se.current),M(!1),L("exit"),d==null||d()))},children:[l.jsxs("div",{className:Be.paletteHeader,children:[l.jsx("div",{className:Be.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:Be.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${Be.canvasToggle} ${g?Be.active:""}`,onClick:()=>b(!g),children:[l.jsx("span",{className:Be.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:Be.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${Be.wireframePurposeWrap} ${g?"":Be.collapsed}`,children:l.jsx("div",{className:Be.wireframePurposeInner,children:l.jsx("textarea",{className:Be.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:v,onChange:I=>C(I.target.value),rows:2})})}),l.jsx(Cj,{activeType:t,onSelect:n,onDragStart:y,scrollRef:ae,fadeClass:we,blankCanvas:g}),O&&l.jsx("div",{className:`${Be.paletteFooterWrap} ${F?Be.footerHidden:""}`,children:l.jsx("div",{className:Be.paletteFooterInner,children:l.jsx("div",{className:Be.paletteFooterInnerContent,children:l.jsxs("div",{className:Be.paletteFooter,children:[l.jsx("span",{className:Be.paletteFooterCount,children:l.jsx(kj,{value:W.current,suffix:Q.current})}),l.jsx("button",{className:Be.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function bl(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function Fo(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=bl(i)}return null}function Mj(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(y=>y.length>2&&!y.match(/^[a-z]{1,2}$/)&&!y.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=bl(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function _l(t){var a,c,u,d,h,p,y,g;const n=Mj(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const b=Fo(t,"svg");if(b){const v=bl(b);if(v instanceof HTMLElement)return{name:`graphic in ${_l(v).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const b=bl(t);if((b==null?void 0:b.tagName.toLowerCase())==="button"){const v=(a=b.textContent)==null?void 0:a.trim();return{name:v?`icon in "${v}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const b=(c=t.textContent)==null?void 0:c.trim(),v=t.getAttribute("aria-label");return v?{name:`button [${v}]`,path:n}:{name:b?`button "${b.slice(0,25)}"`:"button",path:n}}if(i==="a"){const b=(u=t.textContent)==null?void 0:u.trim(),v=t.getAttribute("href");return b?{name:`link "${b.slice(0,25)}"`,path:n}:v?{name:`link to ${v.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const b=t.getAttribute("type")||"text",v=t.getAttribute("placeholder"),C=t.getAttribute("name");return v?{name:`input "${v}"`,path:n}:C?{name:`input [${C}]`,path:n}:{name:`${b} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const b=(d=t.textContent)==null?void 0:d.trim();return{name:b?`${i} "${b.slice(0,35)}"`:i,path:n}}if(i==="p"){const b=(h=t.textContent)==null?void 0:h.trim();return b?{name:`paragraph: "${b.slice(0,40)}${b.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const b=(p=t.textContent)==null?void 0:p.trim();return b&&b.length<40?{name:`"${b}"`,path:n}:{name:i,path:n}}if(i==="li"){const b=(y=t.textContent)==null?void 0:y.trim();return b&&b.length<40?{name:`list item: "${b.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const b=(g=t.textContent)==null?void 0:g.trim();return b&&b.length<30?{name:`code: \`${b}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const b=t.getAttribute("alt");return{name:b?`image "${b.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const b=t.className,v=t.getAttribute("role"),C=t.getAttribute("aria-label");if(C)return{name:`${i} [${C}]`,path:n};if(v)return{name:`${v}`,path:n};if(typeof b=="string"&&b){const k=b.split(/[\s_-]+/).map(j=>j.replace(/[A-Z0-9]{5,}.*$/,"")).filter(j=>j.length>2&&!/^[a-z]{1,2}$/.test(j)).slice(0,2);if(k.length>0)return{name:k.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function cc(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function sd(t){const n=bl(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(g=>g!==t&&g instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(g=>{var k;const b=g.tagName.toLowerCase(),v=g.className;let C="";if(typeof v=="string"&&v){const j=v.split(/\s+/).map(M=>M.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(M=>M.length>2&&!/^[a-z]{1,2}$/.test(M));j&&(C=`.${j}`)}if(b==="button"||b==="a"){const j=(k=g.textContent)==null?void 0:k.trim().slice(0,15);if(j)return`${b}${C} "${j}"`}return`${b}${C}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const g=n.className.split(/\s+/).map(b=>b.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(b=>b.length>2&&!/^[a-z]{1,2}$/.test(b));g&&(h=`.${g}`)}const p=n.children.length,y=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+y}function uc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var Q5=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),Ej=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),Tj=new Set(["input","textarea","select"]),Aj=new Set(["img","video","canvas","svg"]),Dj=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function od(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;Ej.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:Tj.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:Aj.has(a)?c=["width","height","objectFit","borderRadius"]:Dj.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!Q5.has(h)&&(i[u]=h)}return i}var Nj=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function id(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of Nj){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!Q5.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function Rj(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function ad(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function rd(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=bl(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var Bj=new Set(["nav","header","main","section","article","footer","aside"]),op={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},fx={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},Lj=new Set(["script","style","noscript","link","meta"]),Oj=40;function Z5(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Rr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":Rr(i)} > ${n}:nth-child(${c})`}return n}function zd(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&op[a])return op[a];if(fx[n])return fx[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=_l(t);return u.charAt(0).toUpperCase()+u.slice(1)}function J5(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function e2(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function zj(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(Lj.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<Oj)return;const y=Bj.has(d),g=c.getAttribute("role")&&op[c.getAttribute("role")],b=d==="div"&&p.height>=60;if(!y&&!g&&!b)return;const v=window.scrollY,C=Z5(c),k={x:p.x,y:C?p.y:p.y+v,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:zd(c),tagName:d,selector:Rr(c),role:c.getAttribute("role"),className:J5(c),textSnippet:e2(c),originalRect:k,currentRect:{...k},originalIndex:u,isFixed:C})}),a}function $j(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=Z5(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:zd(t),tagName:t.tagName.toLowerCase(),selector:Rr(t),role:t.getAttribute("role"),className:J5(t),textSnippet:e2(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var hx={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},mx=["nw","n","ne","e","se","s","sw","w"],ld=24,px=16,cd=5;function _x(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,y=t.y,g=t.y+t.height,b=t.y+t.height/2,v=[];for(const W of n)i.has(W.id)||v.push(W.currentRect);a&&v.push(...a);for(const W of v){const Q=W.x,me=W.x+W.width,se=W.x+W.width/2,ae=W.y,we=W.y+W.height,He=W.y+W.height/2;for(const J of[d,h,p])for(const fe of[Q,me,se]){const I=fe-J;Math.abs(I)<cd&&Math.abs(I)<Math.abs(c)&&(c=I)}for(const J of[y,g,b])for(const fe of[ae,we,He]){const I=fe-J;Math.abs(I)<cd&&Math.abs(I)<Math.abs(u)&&(u=I)}}const C=Math.abs(c)<cd?c:0,k=Math.abs(u)<cd?u:0,j=[],M=new Set,T=d+C,L=h+C,O=p+C,A=y+k,F=g+k,U=b+k;for(const W of v){const Q=W.x,me=W.x+W.width,se=W.x+W.width/2,ae=W.y,we=W.y+W.height,He=W.y+W.height/2;for(const J of[Q,se,me])for(const fe of[T,O,L])if(Math.abs(fe-J)<.5){const I=`x:${Math.round(J)}`;M.has(I)||(M.add(I),j.push({axis:"x",pos:J}))}for(const J of[ae,He,we])for(const fe of[A,U,F])if(Math.abs(fe-J)<.5){const I=`y:${Math.round(J)}`;M.has(I)||(M.add(I),j.push({axis:"y",pos:J}))}}return{dx:C,dy:k,guides:j}}var Ij=new Set(["script","style","noscript","link","meta","br","hr"]);function gx(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(Ij.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=px&&i.height>=px)return n;n=n.parentElement}return null}function Pj({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:y,onDragEnd:g,clearSignal:b}){const{sections:v}=t,C=_.useRef(t);C.current=t;const[k,j]=_.useState(new Set),[M,T]=_.useState(!1),L=_.useRef(b);_.useEffect(()=>{b!==void 0&&b!==L.current&&(L.current=b,v.length>0&&T(!0))},[b,v.length]);const O=_.useRef(p);_.useEffect(()=>{p!==O.current&&(O.current=p,j(new Set))},[p]);const[A,F]=_.useState(null),[U,W]=_.useState(!1),Q=_.useRef(!1),me=_.useCallback(V=>{const Z=v.find(be=>be.id===V);Z&&(Q.current=!!Z.note,F(V),W(!1))},[v]),se=_.useCallback(()=>{A&&(W(!0),Vt(()=>{F(null),W(!1)},150))},[A]),ae=_.useCallback(V=>{A&&(n({...t,sections:v.map(Z=>Z.id===A?{...Z,note:V.trim()||void 0}:Z)}),se())},[A,v,t,n,se]);_.useEffect(()=>{a&&A&&se()},[a]);const[we,He]=_.useState(new Set),J=_.useRef(new Map),[fe,I]=_.useState(null),[ue,X]=_.useState(null),[pe,Ee]=_.useState([]),[H,ce]=_.useState(0),ee=_.useRef(null),le=_.useRef(new Set),ge=_.useRef(new Map),[Ae,ze]=_.useState(new Map),[et,$e]=_.useState(new Map),$t=_.useRef(new Set),Nt=_.useRef(new Map),_t=_.useRef(h);_t.current=h;const tt=_.useRef(y);tt.current=y;const ot=_.useRef(g);ot.current=g,_.useEffect(()=>{u&&j(new Set)},[u]);const[Wt,on]=_.useState(()=>!t.sections.some(V=>{const Z=V.originalRect,be=V.currentRect;return Math.abs(Z.x-be.x)>1||Math.abs(Z.y-be.y)>1||Math.abs(Z.width-be.width)>1||Math.abs(Z.height-be.height)>1}));_.useEffect(()=>{if(!Wt){const V=Vt(()=>on(!0),380);return()=>clearTimeout(V)}},[]);const Ie=_.useRef(new Set);_.useEffect(()=>{Ie.current=new Set(v.map(V=>V.selector))},[v]),_.useEffect(()=>{const V=()=>ce(window.scrollY);return V(),window.addEventListener("scroll",V,{passive:!0}),window.addEventListener("resize",V,{passive:!0}),()=>{window.removeEventListener("scroll",V),window.removeEventListener("resize",V)}},[]),_.useEffect(()=>{const V=Z=>{if(ee.current){I(null);return}const be=document.elementFromPoint(Z.clientX,Z.clientY);if(!be){I(null);return}if(be.closest("[data-feedback-toolbar]")){I(null);return}if(be.closest("[data-design-placement]")){I(null);return}if(be.closest("[data-annotation-popup]")){I(null);return}const je=gx(be);if(!je){I(null);return}for(const qe of Ie.current)try{const Te=document.querySelector(qe);if(Te&&(Te===je||je.contains(Te))){I(null);return}}catch{}const Je=je.getBoundingClientRect();I({x:Je.x,y:Je.y,w:Je.width,h:Je.height})};return document.addEventListener("mousemove",V,{passive:!0}),()=>document.removeEventListener("mousemove",V)},[v]),_.useEffect(()=>{const V=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=V}},[]),_.useEffect(()=>{const V=Z=>{var Te,he,Le,Ye;if(ee.current||Z.button!==0)return;const be=Z.target;if(!be||be.closest("[data-feedback-toolbar]")||be.closest("[data-design-placement]")||be.closest("[data-annotation-popup]"))return;const je=gx(be);let Je=!1;if(je)for(const Ke of Ie.current)try{const De=document.querySelector(Ke);if(De&&(De===je||je.contains(De))){Je=!0;break}}catch{}const qe=!!(Z.shiftKey||Z.metaKey||Z.ctrlKey);if(je&&!Je){Z.preventDefault(),Z.stopPropagation();const Ke=$j(je),De=[...v,Ke],rt=[...t.originalOrder,Ke.id];n({...t,sections:De,originalOrder:rt});const mt=new Set([Ke.id]);j(mt),(Te=_t.current)==null||Te.call(_t,mt,qe),I(null);const Ct=Z.clientX,Qe=Z.clientY,Bt={x:Ke.currentRect.x,y:Ke.currentRect.y};Ke.originalRect;let xt=!1,yt=0,Zt=0;ee.current="move";const at=Rt=>{var Ft;const bt=Rt.clientX-Ct,Ht=Rt.clientY-Qe;if(!xt&&(Math.abs(bt)>2||Math.abs(Ht)>2)&&(xt=!0),!xt)return;const Gt={x:Bt.x+bt,y:Bt.y+Ht,width:Ke.currentRect.width,height:Ke.currentRect.height},Bn=_x(Gt,De,new Set([Ke.id]),d);Ee(Bn.guides);const Ln=bt+Bn.dx,an=Ht+Bn.dy;yt=Ln,Zt=an;const On=document.querySelector(`[data-rearrange-section="${Ke.id}"]`);On&&(On.style.transform=`translate(${Ln}px, ${an}px)`),ze(new Map([[Ke.id,{x:Bt.x+Ln,y:Bt.y+an,width:Ke.currentRect.width,height:Ke.currentRect.height}]])),(Ft=tt.current)==null||Ft.call(tt,Ln,an)},jt=()=>{var bt;window.removeEventListener("mousemove",at),window.removeEventListener("mouseup",jt),ee.current=null,Ee([]),ze(new Map);const Rt=document.querySelector(`[data-rearrange-section="${Ke.id}"]`);Rt&&(Rt.style.transform=""),xt&&n({...t,sections:De.map(Ht=>Ht.id===Ke.id?{...Ht,currentRect:{...Ht.currentRect,x:Math.max(0,Bt.x+yt),y:Math.max(0,Bt.y+Zt)}}:Ht),originalOrder:rt}),(bt=ot.current)==null||bt.call(ot,yt,Zt,xt)};window.addEventListener("mousemove",at),window.addEventListener("mouseup",jt)}else if(Je&&je){Z.preventDefault();for(const Ke of v)try{const De=document.querySelector(Ke.selector);if(De&&De===je){const rt=new Set([Ke.id]);j(rt),(he=_t.current)==null||he.call(_t,rt,qe);return}}catch{}qe||(j(new Set),(Le=_t.current)==null||Le.call(_t,new Set,!1))}else qe||(j(new Set),(Ye=_t.current)==null||Ye.call(_t,new Set,!1))};return document.addEventListener("mousedown",V,!0),()=>document.removeEventListener("mousedown",V,!0)},[v,t,n]),_.useEffect(()=>{const V=Z=>{const be=Z.target;if(!(be.tagName==="INPUT"||be.tagName==="TEXTAREA"||be.isContentEditable)){if((Z.key==="Backspace"||Z.key==="Delete")&&k.size>0){Z.preventDefault();const je=new Set(k);He(Je=>{const qe=new Set(Je);for(const Te of je)qe.add(Te);return qe}),j(new Set),Vt(()=>{const Je=C.current;n({...Je,sections:Je.sections.filter(qe=>!je.has(qe.id)),originalOrder:Je.originalOrder.filter(qe=>!je.has(qe))}),He(qe=>{const Te=new Set(qe);for(const he of je)Te.delete(he);return Te})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Z.key)&&k.size>0){Z.preventDefault();const je=Z.shiftKey?20:1,Je=Z.key==="ArrowLeft"?-je:Z.key==="ArrowRight"?je:0,qe=Z.key==="ArrowUp"?-je:Z.key==="ArrowDown"?je:0;n({...t,sections:v.map(Te=>k.has(Te.id)?{...Te,currentRect:{...Te.currentRect,x:Math.max(0,Te.currentRect.x+Je),y:Math.max(0,Te.currentRect.y+qe)}}:Te)});return}Z.key==="Escape"&&k.size>0&&j(new Set)}};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[k,v,t,n]);const ie=_.useCallback((V,Z)=>{var Ct;if(V.button!==0)return;const be=V.target;if(be.closest(`.${Be.handle}`)||be.closest(`.${Be.deleteButton}`))return;V.preventDefault(),V.stopPropagation();let je;V.shiftKey||V.metaKey||V.ctrlKey?(je=new Set(k),je.has(Z)?je.delete(Z):je.add(Z)):k.has(Z)?je=new Set(k):je=new Set([Z]),j(je),(je.size!==k.size||[...je].some(Qe=>!k.has(Qe)))&&((Ct=_t.current)==null||Ct.call(_t,je,!!(V.shiftKey||V.metaKey||V.ctrlKey)));const qe=V.clientX,Te=V.clientY,he=new Map;for(const Qe of v)je.has(Qe.id)&&he.set(Qe.id,{x:Qe.currentRect.x,y:Qe.currentRect.y});ee.current="move";let Le=!1,Ye=0,Ke=0;const De=new Map;for(const Qe of v)if(je.has(Qe.id)){const Bt=document.querySelector(`[data-rearrange-section="${Qe.id}"]`);De.set(Qe.id,{outlineEl:Bt,curW:Qe.currentRect.width,curH:Qe.currentRect.height})}const rt=Qe=>{var Bn;const Bt=Qe.clientX-qe,xt=Qe.clientY-Te;if(Bt===0&&xt===0)return;Le=!0;let yt=1/0,Zt=1/0,at=-1/0,jt=-1/0;for(const[Ln,{curW:an,curH:On}]of De){const Ft=he.get(Ln);if(!Ft)continue;const mn=Ft.x+Bt,it=Ft.y+xt;yt=Math.min(yt,mn),Zt=Math.min(Zt,it),at=Math.max(at,mn+an),jt=Math.max(jt,it+On)}const Rt=_x({x:yt,y:Zt,width:at-yt,height:jt-Zt},v,je,d),bt=Bt+Rt.dx,Ht=xt+Rt.dy;Ye=bt,Ke=Ht,Ee(Rt.guides);for(const[,{outlineEl:Ln}]of De)Ln&&(Ln.style.transform=`translate(${bt}px, ${Ht}px)`);const Gt=new Map;for(const[Ln,{curW:an,curH:On}]of De){const Ft=he.get(Ln);if(Ft){const mn={x:Math.max(0,Ft.x+bt),y:Math.max(0,Ft.y+Ht),width:an,height:On};Gt.set(Ln,mn)}}ze(Gt),(Bn=tt.current)==null||Bn.call(tt,bt,Ht)},mt=Qe=>{var Bt,xt;window.removeEventListener("mousemove",rt),window.removeEventListener("mouseup",mt),ee.current=null,Ee([]),ze(new Map);for(const[,{outlineEl:yt}]of De)yt&&(yt.style.transform="");if(Le){const yt=Qe.clientX-qe,Zt=Qe.clientY-Te;if(Math.abs(yt)<5&&Math.abs(Zt)<5)n({...t,sections:v.map(at=>{const jt=he.get(at.id);return jt?{...at,currentRect:{...at.currentRect,x:jt.x,y:jt.y}}:at})});else{n({...t,sections:v.map(at=>{const jt=he.get(at.id);return jt?{...at,currentRect:{...at.currentRect,x:Math.max(0,jt.x+Ye),y:Math.max(0,jt.y+Ke)}}:at})}),(Bt=ot.current)==null||Bt.call(ot,Ye,Ke,!0);return}}(xt=ot.current)==null||xt.call(ot,0,0,!1)};window.addEventListener("mousemove",rt),window.addEventListener("mouseup",mt)},[k,v,t,n]),We=_.useCallback((V,Z,be)=>{V.preventDefault(),V.stopPropagation();const je=v.find(rt=>rt.id===Z);if(!je)return;j(new Set([Z])),ee.current="resize";const Je=V.clientX,qe=V.clientY,Te={...je.currentRect};je.originalRect;const he=Te.width/Te.height;let Le={...Te};const Ye=document.querySelector(`[data-rearrange-section="${Z}"]`),Ke=rt=>{const mt=rt.clientX-Je,Ct=rt.clientY-qe;let Qe=Te.x,Bt=Te.y,xt=Te.width,yt=Te.height;if(be.includes("e")&&(xt=Math.max(ld,Te.width+mt)),be.includes("w")&&(xt=Math.max(ld,Te.width-mt),Qe=Te.x+Te.width-xt),be.includes("s")&&(yt=Math.max(ld,Te.height+Ct)),be.includes("n")&&(yt=Math.max(ld,Te.height-Ct),Bt=Te.y+Te.height-yt),rt.shiftKey)if(be.length===2){const at=Math.abs(xt-Te.width),jt=Math.abs(yt-Te.height);at>jt?yt=xt/he:xt=yt*he,be.includes("w")&&(Qe=Te.x+Te.width-xt),be.includes("n")&&(Bt=Te.y+Te.height-yt)}else be==="e"||be==="w"?yt=xt/he:xt=yt*he,be==="w"&&(Qe=Te.x+Te.width-xt),be==="n"&&(Bt=Te.y+Te.height-yt);Le={x:Qe,y:Bt,width:xt,height:yt},Ye&&(Ye.style.left=`${Qe}px`,Ye.style.top=`${Bt-H}px`,Ye.style.width=`${xt}px`,Ye.style.height=`${yt}px`),X({x:rt.clientX+12,y:rt.clientY+12,text:`${Math.round(xt)} × ${Math.round(yt)}`}),ze(new Map([[Z,Le]]))},De=()=>{window.removeEventListener("mousemove",Ke),window.removeEventListener("mouseup",De),X(null),ee.current=null,ze(new Map),n({...t,sections:v.map(rt=>rt.id===Z?{...rt,currentRect:Le}:rt)})};window.addEventListener("mousemove",Ke),window.addEventListener("mouseup",De)},[v,t,n,H]),nt=_.useCallback(V=>{He(Z=>{const be=new Set(Z);return be.add(V),be}),j(Z=>{const be=new Set(Z);return be.delete(V),be}),Vt(()=>{const Z=C.current;n({...Z,sections:Z.sections.filter(be=>be.id!==V),originalOrder:Z.originalOrder.filter(be=>be!==V)}),He(be=>{const je=new Set(be);return je.delete(V),je})},180)},[n]),Se=V=>{const Z=V.originalRect,be=V.currentRect;return Math.abs(Z.x-be.x)>1||Math.abs(Z.y-be.y)>1||Math.abs(Z.width-be.width)>1||Math.abs(Z.height-be.height)>1},Ge=V=>{const Z=V.originalRect,be=V.currentRect;return Math.abs(Z.x-be.x)>1||Math.abs(Z.y-be.y)>1},lt=V=>{const Z=V.originalRect,be=V.currentRect;return Math.abs(Z.width-be.width)>1||Math.abs(Z.height-be.height)>1};for(const V of v)ge.current.has(V.id)||(Ge(V)?ge.current.set(V.id,"move"):lt(V)&&ge.current.set(V.id,"resize"));for(const V of ge.current.keys())v.some(Z=>Z.id===V)||ge.current.delete(V);const ct=v.filter(V=>{try{if(we.has(V.id)||k.has(V.id))return!0;const Z=document.querySelector(V.selector);if(!Z)return!1;const be=Z.getBoundingClientRect(),je=V.originalRect;return Math.abs(be.width-je.width)+Math.abs(be.height-je.height)<200}catch{return!1}}),kt=ct.filter(V=>Se(V)),pt=ct.filter(V=>!Se(V)),It=new Set(kt.map(V=>V.id));for(const V of le.current)It.has(V)||le.current.delete(V);const st=[...It].sort().join(",");for(const V of kt)Nt.current.set(V.id,{currentRect:V.currentRect,originalRect:V.originalRect,isFixed:V.isFixed});return _.useEffect(()=>{const V=$t.current;$t.current=It;const Z=new Map;for(const be of V)if(!It.has(be)){if(!v.some(Je=>Je.id===be))continue;const je=Nt.current.get(be);je&&(Z.set(be,{orig:je.originalRect,target:je.currentRect,isFixed:je.isFixed}),Nt.current.delete(be))}if(Z.size>0){$e(je=>{const Je=new Map(je);for(const[qe,Te]of Z)Je.set(qe,Te);return Je});const be=Vt(()=>{$e(je=>{const Je=new Map(je);for(const qe of Z.keys())Je.delete(qe);return Je})},250);return()=>clearTimeout(be)}},[st,v]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${Be.rearrangeOverlay} ${i?"":Be.light} ${a?Be.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[fe&&l.jsx("div",{className:Be.hoverHighlight,style:{left:fe.x,top:fe.y,width:fe.w,height:fe.h}}),pt.map(V=>{const Z=V.currentRect,be=V.isFixed?Z.y:Z.y-H,je=hx,Je=k.has(V.id);return l.jsxs("div",{"data-rearrange-section":V.id,className:`${Be.sectionOutline} ${Je?Be.selected:""} ${M||a||we.has(V.id)?Be.exiting:""}`,style:{left:Z.x,top:be,width:Z.width,height:Z.height,borderColor:je.border,backgroundColor:je.bg,...Wt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:qe=>ie(qe,V.id),onDoubleClick:()=>me(V.id),children:[l.jsx("span",{className:Be.sectionLabel,style:{backgroundColor:je.pill},children:V.label}),l.jsx("span",{className:`${Be.sectionAnnotation} ${V.note?Be.annotationVisible:""}`,children:(V.note&&J.current.set(V.id,V.note),V.note||J.current.get(V.id)||"")}),l.jsxs("span",{className:Be.sectionDimensions,children:[Math.round(Z.width)," × ",Math.round(Z.height)]}),l.jsx("div",{className:Be.deleteButton,onMouseDown:qe=>qe.stopPropagation(),onClick:()=>nt(V.id),children:"✕"}),mx.map(qe=>l.jsx("div",{className:`${Be.handle} ${Be[`handle${qe.charAt(0).toUpperCase()}${qe.slice(1)}`]}`,onMouseDown:Te=>We(Te,V.id,qe)},qe))]},V.id)}),kt.map(V=>{const Z=V.currentRect,be=V.isFixed?Z.y:Z.y-H,je=k.has(V.id),Je=Ge(V),qe=lt(V);if(u&&!je)return null;const he=!le.current.has(V.id);return he&&le.current.add(V.id),l.jsxs("div",{"data-rearrange-section":V.id,className:`${Be.ghostOutline} ${je?Be.selected:""} ${M||a||we.has(V.id)?Be.exiting:""}`,style:{left:Z.x,top:be,width:Z.width,height:Z.height,...Wt?{}:{opacity:0,animation:"none",transition:"none"},...he?{}:{animation:"none"}},onMouseDown:Le=>ie(Le,V.id),onDoubleClick:()=>me(V.id),children:[l.jsx("span",{className:Be.sectionLabel,style:{backgroundColor:hx.pill},children:V.label}),l.jsx("span",{className:`${Be.sectionAnnotation} ${V.note?Be.annotationVisible:""}`,children:(V.note&&J.current.set(V.id,V.note),V.note||J.current.get(V.id)||"")}),l.jsxs("span",{className:Be.sectionDimensions,children:[Math.round(Z.width)," × ",Math.round(Z.height)]}),l.jsx("div",{className:Be.deleteButton,onMouseDown:Le=>Le.stopPropagation(),onClick:()=>nt(V.id),children:"✕"}),mx.map(Le=>l.jsx("div",{className:`${Be.handle} ${Be[`handle${Le.charAt(0).toUpperCase()}${Le.slice(1)}`]}`,onMouseDown:Ye=>We(Ye,V.id,Le)},Le)),l.jsx("span",{className:Be.ghostBadge,children:(()=>{const Le=ge.current.get(V.id);if(Je&&qe){const[Ye,Ke]=Le==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",Ye," ",l.jsxs("span",{className:Be.ghostBadgeExtra,children:["& ",Ke]})]})}return`Suggested ${qe?"Resize":"Move"}`})()})]},V.id)})]}),!u&&(()=>{const V=[];for(const Z of kt){const be=Ae.get(Z.id);V.push({id:Z.id,orig:Z.originalRect,target:be||Z.currentRect,isFixed:Z.isFixed,isSelected:k.has(Z.id),isExiting:we.has(Z.id)})}for(const[Z,be]of Ae)if(!V.some(je=>je.id===Z)){const je=v.find(Je=>Je.id===Z);je&&V.push({id:Z,orig:je.originalRect,target:be,isFixed:je.isFixed,isSelected:k.has(Z)})}for(const[Z,be]of et)V.some(je=>je.id===Z)||V.push({id:Z,orig:be.orig,target:be.target,isFixed:be.isFixed,isSelected:!1,isExiting:!0});return V.length===0?null:l.jsxs("svg",{className:`${Be.connectorSvg} ${M||a?Be.connectorExiting:""}`,children:[V.map(({id:Z,orig:be,target:je,isFixed:Je,isSelected:qe,isExiting:Te})=>{const he=be.x+be.width/2,Le=(Je?be.y:be.y-H)+be.height/2,Ye=je.x+je.width/2,Ke=(Je?je.y:je.y-H)+je.height/2,De=Ye-he,rt=Ke-Le,mt=Math.sqrt(De*De+rt*rt);if(mt<2)return null;const Ct=Math.min(1,mt/40),Qe=Math.min(mt*.3,60),Bt=mt>0?-rt/mt:0,xt=mt>0?De/mt:0,yt=(he+Ye)/2+Bt*Qe,Zt=(Le+Ke)/2+xt*Qe,at=Ae.has(Z),jt=at||qe?1:.4,Rt=at||qe?1:.5;return l.jsxs("g",{className:Te?Be.connectorExiting:"",children:[l.jsx("path",{className:Be.connectorLine,d:`M ${he} ${Le} Q ${yt} ${Zt} ${Ye} ${Ke}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:jt*Ct}),l.jsx("circle",{className:Be.connectorDot,cx:he,cy:Le,r:4*Ct,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Rt*Ct,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:Be.connectorDot,cx:Ye,cy:Ke,r:4*Ct,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Rt*Ct,filter:"url(#connDotShadow)"})]},`conn-${Z}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),A&&(()=>{var Ke;const V=v.find(De=>De.id===A);if(!V)return null;const Z=V.currentRect,be=V.isFixed?Z.y:Z.y-H,je=Z.x+Z.width/2,Je=be-8,qe=be+Z.height+8,Te=Je>200,he=qe<window.innerHeight-100,Le=Math.max(160,Math.min(window.innerWidth-160,je));let Ye;return Te?Ye={left:Le,bottom:window.innerHeight-Je}:he?Ye={left:Le,top:qe}:Ye={left:Le,top:Math.max(80,window.innerHeight/2-80)},l.jsx(Od,{element:V.label,placeholder:"Add a note about this section",initialValue:(Ke=V.note)!=null?Ke:"",submitLabel:Q.current?"Save":"Set",onSubmit:ae,onCancel:se,onDelete:Q.current?()=>{ae("")}:void 0,isExiting:U,lightMode:!i,style:Ye})})(),ue&&l.jsx("div",{className:Be.sizeIndicator,style:{left:ue.x,top:ue.y},"data-feedback-toolbar":!0,children:ue.text}),pe.map((V,Z)=>l.jsx("div",{className:Be.guideLine,style:V.axis==="x"?{position:"fixed",left:V.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:V.pos-H,width:"100vw",height:1}},`${V.axis}-${V.pos}-${Z}`))]})}var ip=new Set(["script","style","noscript","link","meta","br","hr"]);function Hj(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||ip.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:zd(c),selector:Rr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||ip.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const y=h.getBoundingClientRect();y.height<10||y.width<10||n.push({label:zd(h),selector:Rr(h),top:y.top,bottom:y.bottom,left:y.left,right:y.right,area:y.width*y.height})}}}return n}function Uj(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function Vj(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function ap(t,n){const i=n?Uj(n):Hj(),a=Vj(t);let c=null,u=null,d=null,h=null,p=null;for(const k of i){if(Math.abs(k.left-a.left)<2&&Math.abs(k.top-a.top)<2&&Math.abs(k.right-k.left-t.width)<2&&Math.abs(k.bottom-k.top-t.height)<2)continue;k.left<=a.left+2&&k.right>=a.right-2&&k.top<=a.top+2&&k.bottom>=a.bottom-2&&k.area>a.area*1.5&&(!p||k.area<p._area)&&(p={label:k.label,selector:k.selector,_area:k.area});const j=a.right>k.left+5&&a.left<k.right-5,M=a.bottom>k.top+5&&a.top<k.bottom-5;if(j&&k.bottom<=a.top+5){const T=Math.round(a.top-k.bottom);(!c||T<c._dist)&&(c={label:k.label,selector:k.selector,gap:Math.max(0,T),_dist:T})}if(j&&k.top>=a.bottom-5){const T=Math.round(k.top-a.bottom);(!u||T<u._dist)&&(u={label:k.label,selector:k.selector,gap:Math.max(0,T),_dist:T})}if(M&&k.right<=a.left+5){const T=Math.round(a.left-k.right);(!d||T<d._dist)&&(d={label:k.label,selector:k.selector,gap:Math.max(0,T),_dist:T})}if(M&&k.left>=a.right-5){const T=Math.round(k.left-a.right);(!h||T<h._dist)&&(h={label:k.label,selector:k.selector,gap:Math.max(0,T),_dist:T})}}const y=window.innerWidth,g=window.innerHeight,b=Wj(t,y),v=k=>k?{label:k.label,selector:k.selector,gap:k.gap}:null,C=Yj(a,t,y,g,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:v(c),below:v(u),left:v(d),right:v(h),alignment:b,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:C}}function Yj(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const y=u.find(g=>g.label===c.label&&g.selector===c.selector&&Math.abs(g.area-c._area)<10);if(y){const g=[];t.left<y.left-2&&g.push("left"),t.right>y.right+2&&g.push("right"),t.top<y.top-2&&g.push("top"),t.bottom>y.bottom+2&&g.push("bottom"),g.length>0&&(d.container={label:c.label,edges:g},h=!0)}}return h?d:null}function Wj(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function t2(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function n2(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=t2(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function Fj(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(t2(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var yx=15;function xx(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<yx&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.x-y.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,y)=>p+y.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<yx&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.y-y.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,y)=>p+y.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function Xj(t){var d;if(t.length<2)return[];const n=xx(t.map(h=>({label:h.label,rect:h.originalRect}))),i=xx(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let y=null,g=0;for(const b of i){const v=b.labels.filter(C=>p.has(C)).length;v>=2&&v>g&&(y=b,g=v)}if(y){const b=y.labels.filter(C=>p.has(C)),v=b.join(", ");if(y.type!==h.type){const C=h.type==="row"?"y":"x",k=y.type==="row"?"y":"x";a.push(`**${v}**: ${h.type} (${C}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${y.type} (${k}≈${y.sharedEdge}, ${y.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-y.sharedEdge)>20||Math.abs(h.avgGap-y.avgGap)>5){const C=h.type==="row"?"y":"x",k=Math.abs(h.sharedEdge-y.sharedEdge)>20?` ${C}: ${h.sharedEdge} → ${y.sharedEdge}`:"",j=Math.abs(h.avgGap-y.avgGap)>5?` gaps: ${h.avgGap}px → ${y.avgGap}px`:"";a.push(`**${v}**: ${h.type} shifted —${k}${j}`)}b.forEach(C=>c.add(C))}else{const b=h.labels.join(", "),v=h.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${v}≈${h.sharedEdge}) dissolved`),h.labels.forEach(C=>c.add(C))}}for(const h of i){if(h.labels.every(g=>c.has(g))||h.labels.filter(g=>!c.has(g)).length<2)continue;if(!n.some(g=>g.labels.filter(v=>h.labels.includes(v)).length>=2)){const g=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${g}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(b=>c.add(b))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const y=Math.round(p.currentRect.x/5)*5;((d=h[y])!=null?d:h[y]=[]).push(p.label)}for(const[p,y]of Object.entries(h))y.length>=2&&a.push(`**${y.join(", ")}**: shared left edge at x≈${p}`)}return a}function s2(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||ip.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const y of Array.from(p.children))a(y)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const y=getComputedStyle(h);if(y.maxWidth&&y.maxWidth!=="none"&&y.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Rr(h)}}}return{viewport:t,contentArea:null}}function Gj(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Rr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function o2(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),y=t.x+t.width/2,g=Math.abs(y-u)<20,b=t.width/a>.95,v=[];return b?v.push("`width: 100%` of container"):v.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),g&&!b&&v.push("centered — `margin-inline: auto`"),v.join(" — ")}function i2(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function qj(t){const n=Gj(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function bx(t,n,i,a="standard"){var M,T,L,O;if(t.length===0)return"";const c=[...t].sort((A,F)=>Math.abs(A.y-F.y)<20?A.x-F.x:A.y-F.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((A,F)=>{var W;const U=((W=Qi[A.type])==null?void 0:W.label)||A.type;u+=`${F+1}. **${U}** — \`${Math.round(A.width)}×${Math.round(A.height)}px\` at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
`}),u;const d=s2(n);u+=i2(d),u+=`### Components
`,c.forEach((A,F)=>{var we;const U=((we=Qi[A.type])==null?void 0:we.label)||A.type,W={x:A.x,y:A.y,width:A.width,height:A.height};u+=`${F+1}. **${U}** — \`${Math.round(A.width)}×${Math.round(A.height)}px\` at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
`;const Q=ap(W),se=n2(Q,{includeLeftRight:a==="detailed"||a==="forensic"});for(const He of se)u+=`   - ${He}
`;const ae=o2(W,d);ae&&(u+=`   - CSS: ${ae}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const A of c){const F=h.find(U=>Math.abs(U.y-A.y)<30);F?F.items.push(A):h.push({y:A.y,items:[A]})}if(h.sort((A,F)=>A.y-F.y),h.forEach((A,F)=>{A.items.sort((W,Q)=>W.x-Q.x);const U=A.items.map(W=>{var Q;return((Q=Qi[W.type])==null?void 0:Q.label)||W.type});if(A.items.length===1){const Q=A.items[0].width>n.width*.8;u+=`- Row ${F+1} (y≈${Math.round(A.y)}): ${U[0]}${Q?" — full width":""}
`}else u+=`- Row ${F+1} (y≈${Math.round(A.y)}): ${U.join(" | ")} — ${A.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let A=0;A<c.length-1;A++){const F=c[A],U=c[A+1],W=((M=Qi[F.type])==null?void 0:M.label)||F.type,Q=((T=Qi[U.type])==null?void 0:T.label)||U.type,me=Math.round(U.y-(F.y+F.height)),se=Math.round(U.x-(F.x+F.width));Math.abs(F.y-U.y)<30?u+=`- ${W} → ${Q}: \`${se}px\` horizontal gap
`:u+=`- ${W} → ${Q}: \`${me}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let A=0;A<c.length;A++)for(let F=A+1;F<c.length;F++){const U=c[A],W=c[F],Q=((L=Qi[U.type])==null?void 0:L.label)||U.type,me=((O=Qi[W.type])==null?void 0:O.label)||W.type,se=Math.round(W.y-(U.y+U.height)),ae=Math.round(W.x-(U.x+U.width));u+=`- ${Q} ↔ ${me}: h=\`${ae}px\` v=\`${se}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((A,F)=>{var W;const U=((W=Qi[A.type])==null?void 0:W.label)||A.type;u+=`${F}. ${U} at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(A=>A.type==="navigation"),y=c.some(A=>A.type==="hero"),g=c.some(A=>A.type==="sidebar"),b=c.some(A=>A.type==="footer"),v=c.filter(A=>A.type==="card"),C=c.filter(A=>A.type==="form"),k=c.filter(A=>A.type==="table"),j=c.filter(A=>A.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),y&&(u+=`- Hero section with heading, subtext, and call-to-action
`),g&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),v.length>1?u+=`- ${v.length}-column card grid — use CSS Grid or Flexbox
`:v.length===1&&(u+=`- Card component with image + content area
`),C.length>0&&(u+=`- ${C.length} form${C.length>1?"s":""} — add proper labels, validation, and submit handling
`),k.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),j.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),b&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,g){const A=c.find(F=>F.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(A.width)}px 1fr;\`
`}if(v.length>1){const A=Math.round(v[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${v.length}, ${A}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function vx(t,n="standard",i){const{sections:a}=t,c=[];for(const g of a){const b=g.originalRect,v=g.currentRect,C=Math.abs(b.x-v.x)>1||Math.abs(b.y-v.y)>1,k=Math.abs(b.width-v.width)>1||Math.abs(b.height-v.height)>1;if(!C&&!k){n==="forensic"&&c.push({section:g,posMoved:!1,sizeChanged:!1});continue}c.push({section:g,posMoved:C,sizeChanged:k})}if(c.length===0||n!=="forensic"&&c.every(g=>!g.posMoved&&!g.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=s2({width:d,height:h});n!=="compact"&&(u+=i2(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const y=g=>a.map(b=>({label:b.label,selector:b.selector,rect:g==="original"?b.originalRect:b.currentRect}));u+=`**Changes:**
`;for(const{section:g,posMoved:b,sizeChanged:v}of c){const C=g.originalRect,k=g.currentRect;if(!b&&!v){u+=`- ${g.label} — unchanged at (${Math.round(k.x)}, ${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)}px
`;continue}if(n==="compact"){b&&v?u+=`- Suggested: move **${g.label}** to (${Math.round(k.x)}, ${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)}px
`:b?u+=`- Suggested: move **${g.label}** to (${Math.round(k.x)}, ${Math.round(k.y)})
`:u+=`- Suggested: resize **${g.label}** to ${Math.round(k.width)}×${Math.round(k.height)}px
`;continue}if(b&&v?u+=`- Suggested: move and resize **${g.label}**
`:b?u+=`- Suggested: move **${g.label}**
`:u+=`- Suggested: resize **${g.label}** from ${Math.round(C.width)}×${Math.round(C.height)}px to ${Math.round(k.width)}×${Math.round(k.height)}px
`,b){const M=ap(C,y("original")),T=ap(k,y("current")),L=v?{width:C.width,height:C.height}:void 0;u+=`  - Currently ${Fj(M,{x:C.x,y:C.y},L)}
`;const O=v?{width:k.width,height:k.height}:void 0,A=`at (${Math.round(k.x)}, ${Math.round(k.y)})`,F=O?`, ${Math.round(O.width)}×${Math.round(O.height)}px`:"",W=n2(T,{includeLeftRight:n==="detailed"||n==="forensic"});if(W.length>0){u+=`  - Suggested position ${A}${F}: ${W[0]}
`;for(let me=1;me<W.length;me++)u+=`    ${W[me]}
`}else u+=`  - Suggested position ${A}${F}
`;const Q=o2(k,p);Q&&(u+=`  - CSS: ${Q}
`)}const j=qj(g.selector);if(j&&(u+=`  - ${j}
`),u+=`  - Selector: \`${g.selector}\`
`,n==="detailed"||n==="forensic"){const M=g.className?`${g.tagName}.${g.className.split(" ")[0]}`:g.tagName;M!==g.selector&&(u+=`  - Element: \`${M}\`
`),g.role&&(u+=`  - Role: \`${g.role}\`
`),n==="forensic"&&g.textSnippet&&(u+=`  - Text: "${g.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(C.x)}, y: ${Math.round(C.y)}, w: ${Math.round(C.width)}, h: ${Math.round(C.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(k.x)}, y: ${Math.round(k.y)}, w: ${Math.round(k.width)}, h: ${Math.round(k.height)} }\`
`)}if(n!=="compact"){const g=c.filter(v=>v.posMoved).map(v=>({label:v.section.label,originalRect:v.section.originalRect,currentRect:v.section.currentRect})),b=Xj(g);if(b.length>0){u+=`
### Layout Summary
`;for(const v of b)u+=`- ${v}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const g=[...a].sort((b,v)=>Math.abs(b.currentRect.y-v.currentRect.y)<20?b.currentRect.x-v.currentRect.x:b.currentRect.y-v.currentRect.y);for(const b of g){const v=b.currentRect,C=Math.abs(v.x-b.originalRect.x)>1||Math.abs(v.y-b.originalRect.y)>1||Math.abs(v.width-b.originalRect.width)>1||Math.abs(v.height-b.originalRect.height)>1;u+=`- ${b.label}: \`${Math.round(v.width)}×${Math.round(v.height)}px\` at \`(${Math.round(v.x)}, ${Math.round(v.y)})\`${C?" ← suggested":""}
`}}return u}var rp="feedback-annotations-",a2=7;function $d(t){return`${rp}${t}`}function gm(t){if(typeof window>"u")return[];try{const n=localStorage.getItem($d(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-a2*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function r2(t,n){if(!(typeof window>"u"))try{localStorage.setItem($d(t),JSON.stringify(n))}catch{}}function Kj(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-a2*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(rp)){const c=a.slice(rp.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function dc(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));r2(t,a)}var Wp="agentation-design-";function Qj(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${Wp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function Zj(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Wp}${t}`,JSON.stringify(n))}catch{}}function Jj(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${Wp}${t}`)}catch{}}var Fp="agentation-rearrange-";function eM(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${Fp}${t}`);return n?JSON.parse(n):null}catch{return null}}function tM(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Fp}${t}`,JSON.stringify(n))}catch{}}function nM(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${Fp}${t}`)}catch{}}var Xp="agentation-wireframe-";function sM(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${Xp}${t}`);return n?JSON.parse(n):null}catch{return null}}function wx(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Xp}${t}`,JSON.stringify(n))}catch{}}function ud(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${Xp}${t}`)}catch{}}var l2="agentation-session-";function Gp(t){return`${l2}${t}`}function oM(t){if(typeof window>"u")return null;try{return localStorage.getItem(Gp(t))}catch{return null}}function ym(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Gp(t),n)}catch{}}function iM(t){if(!(typeof window>"u"))try{localStorage.removeItem(Gp(t))}catch{}}var c2=`${l2}toolbar-hidden`;function aM(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(c2)==="1"}catch{return!1}}function rM(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(c2,"1")}catch{}}async function xm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function Sx(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function cl(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function Cx(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function tr(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var Fn={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},kx=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),jx=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],lM=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function cM(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=kx;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...kx,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...jx,...t.skipPatterns]:jx,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:lM,filter:t==null?void 0:t.filter}}function uM(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function dM(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function fM(t,n){const i=uM(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function hM(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&fM(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var ul=null,mM=new WeakMap;function bm(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function pM(){if(ul!==null)return ul;if(typeof document>"u")return!1;if(document.body&&bm(document.body))return ul=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&bm(i))return ul=!0,!0}if(document.body){for(const n of document.body.children)if(bm(n))return ul=!0,!0}return ul=!1,!1}var fc={map:mM};function _M(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function gM(t){const n=_M(t);return n?t[n]:null}function Sr(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function yM(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===Fn.HostComponent||n===Fn.HostText||n===Fn.HostHoistable||n===Fn.HostSingleton||n===Fn.Fragment||n===Fn.Mode||n===Fn.Profiler||n===Fn.DehydratedFragment||n===Fn.HostRoot||n===Fn.HostPortal||n===Fn.ScopeComponent||n===Fn.OffscreenComponent||n===Fn.LegacyHiddenComponent||n===Fn.CacheComponent||n===Fn.TracingMarkerComponent||n===Fn.Throw||n===Fn.ViewTransitionComponent||n===Fn.ActivityComponent)return null;if(n===Fn.ForwardRef){const u=a;if(u!=null&&u.render){const d=Sr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:Sr(i)}if(n===Fn.MemoComponent||n===Fn.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=Sr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:Sr(i)}if(n===Fn.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===Fn.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===Fn.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?Sr(u._result):null}return n===Fn.SuspenseComponent||n===Fn.SuspenseListComponent?null:n===Fn.IncompleteClassComponent||n===Fn.IncompleteFunctionComponent||n===Fn.FunctionComponent||n===Fn.ClassComponent||n===Fn.IndeterminateComponent?Sr(i):null}function xM(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function bM(t,n){const i=cM(n),a=i.mode==="all";if(a){const p=fc.map.get(t);if(p!==void 0)return p}if(!pM()){const p={path:null,components:[]};return a&&fc.map.set(t,p),p}const c=i.mode==="smart"?dM(t):void 0,u=[];try{let p=gM(t),y=0;for(;p&&y<i.maxDepth&&u.length<i.maxComponents;){const g=yM(p);g&&!xM(g)&&hM(g,y,i,c)&&u.push(g),p=p.return,y++}}catch{const p={path:null,components:[]};return a&&fc.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&fc.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&fc.map.set(t,h),h}var hc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function vM(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function Bc(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function wM(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Bc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Bc(i._debugOwner)};i=i.return,a++}return null}function SM(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Bc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Bc(n)}}}n=n.return,i++}return null}var dd=new Map;function CM(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===hc.FunctionComponent||n===hc.IndeterminateComponent)&&typeof i=="function")return i;if(n===hc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===hc.MemoComponent||n===hc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function kM(){const t=Uv,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function jM(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function MM(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function EM(t){const n=CM(t);if(!n)return null;if(dd.has(n))return dd.get(n);const i=kM();if(!i)return dd.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=jM(d.stack);h&&(c={fileName:MM(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:Bc(t)||void 0})}}}finally{i.set(a)}return dd.set(n,c),c}function TM(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=EM(i);if(c)return c;i=i.return,a++}return null}function lp(t){const n=vM(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=wM(n);if(i||(i=SM(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=TM(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function AM(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function DM(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=lp(i);if(c.found)return c;i=i.parentElement,a++}return lp(t)}var NM=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,RM={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=NM}var Fe=RM,mc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Mx(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var BM=`@keyframes styles-module__markerIn___x4G8D {
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
}`,LM={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=BM}var Ks=LM;function Ex({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:y,renumberFrom:g,markerClickBehavior:b,tooltipStyle:v,onHoverEnter:C,onHoverLeave:k,onClick:j,onContextMenu:M}){const T=(h||p)&&!y,L=T&&b==="delete",O=t.isMultiSelect,A=O?"var(--agentation-color-green)":"var(--agentation-color-accent)",F=c?Ks.exit:u?Ks.clearing:d?"":Ks.enter,U=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${Ks.marker} ${O?Ks.multiSelect:""} ${F} ${L?Ks.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:L?void 0:A,animationDelay:U},onMouseEnter:()=>C(t),onMouseLeave:k,onClick:W=>{W.stopPropagation(),c||j(t)},onContextMenu:M?W=>{b==="delete"&&(W.preventDefault(),W.stopPropagation(),c||M(t))}:void 0,children:[T?L?l.jsx(G5,{size:O?18:16}):l.jsx(Gk,{size:16}):l.jsx("span",{className:g!==null&&n>=g?Ks.renumber:void 0,children:n+1}),h&&!y&&l.jsxs("div",{className:`${Ks.markerTooltip} ${Ks.enter}`,style:v,children:[l.jsxs("span",{className:Ks.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:Ks.markerNote,children:t.comment})]})]})}function OM({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${Ks.marker} ${Ks.pending} ${i?Ks.multiSelect:""} ${a?Ks.exit:Ks.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(Ok,{size:12})})}function Tx({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${Ks.marker} ${n?Ks.fixed:""} ${Ks.hovered} ${i?Ks.multiSelect:""} ${Ks.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(G5,{size:i?12:10})})}var zM=`.styles-module__switchContainer___Ka-AB {
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
}`,$M={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=zM}var vm=$M,wm=({className:t="",...n})=>l.jsxs("div",{className:`${vm.switchContainer} ${t}`,children:[l.jsx("input",{className:vm.switchInput,type:"checkbox",...n}),l.jsx("div",{className:vm.switchThumb})]}),IM=`.styles-module__checkboxContainer___joqZk {
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
}`,PM={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=IM}var fd=PM,HM=({className:t="",...n})=>l.jsxs("div",{className:`${fd.checkboxContainer} ${t}`,children:[l.jsx("input",{className:fd.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:fd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:fd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),UM=`.styles-module__container___w8eAF {
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
}`,VM={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=UM}var Ax=VM,Dx=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=_.useId();return l.jsxs("div",{className:`${Ax.container} ${t}`,...u,children:[l.jsx(HM,{id:d,onChange:c,checked:a}),l.jsx("label",{className:Ax.label,htmlFor:d,children:n}),i&&l.jsx(Er,{content:i})]})},YM=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,WM={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=YM}var Mt=WM;function FM({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:y,onSettingsPageChange:g,onHideToolbar:b}){var v;return l.jsx("div",{className:`${Mt.settingsPanel} ${h?Mt.enter:Mt.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:Mt.settingsPanelContainer,children:[l.jsxs("div",{className:`${Mt.settingsPage} ${y==="automations"?Mt.slideLeft:""}`,children:[l.jsxs("div",{className:Mt.settingsHeader,children:[l.jsx("a",{className:Mt.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:Mt.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:Mt.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:Mt.themeIconWrapper,children:l.jsx("span",{className:Mt.themeIcon,children:i?l.jsx(Fk,{size:20}):l.jsx(Xk,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:Mt.divider}),l.jsxs("div",{className:Mt.settingsSection,children:[l.jsxs("div",{className:Mt.settingsRow,children:[l.jsxs("div",{className:Mt.settingsLabel,children:["Output Detail",l.jsx(Er,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:Mt.cycleButton,onClick:()=>{const k=(mc.findIndex(j=>j.value===t.outputDetail)+1)%mc.length;n({outputDetail:mc[k].value})},children:[l.jsx("span",{className:Mt.cycleButtonText,children:(v=mc.find(C=>C.value===t.outputDetail))==null?void 0:v.label},t.outputDetail),l.jsx("span",{className:Mt.cycleDots,children:mc.map(C=>l.jsx("span",{className:`${Mt.cycleDot} ${t.outputDetail===C.value?Mt.active:""}`},C.value))})]})]}),l.jsxs("div",{className:`${Mt.settingsRow} ${Mt.settingsRowMarginTop} ${c?"":Mt.settingsRowDisabled}`,children:[l.jsxs("div",{className:Mt.settingsLabel,children:["React Components",l.jsx(Er,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(wm,{checked:c&&t.reactEnabled,onChange:C=>n({reactEnabled:C.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${Mt.settingsRow} ${Mt.settingsRowMarginTop}`,children:[l.jsxs("div",{className:Mt.settingsLabel,children:["Hide Until Restart",l.jsx(Er,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(wm,{checked:!1,onChange:C=>{C.target.checked&&b()}})]})]}),l.jsx("div",{className:Mt.divider}),l.jsxs("div",{className:Mt.settingsSection,children:[l.jsx("div",{className:`${Mt.settingsLabel} ${Mt.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:Mt.colorOptions,children:Mc.map(C=>l.jsx("button",{className:`${Mt.colorOption} ${t.annotationColorId===C.id?Mt.selected:""}`,style:{"--swatch":C.srgb,"--swatch-p3":C.p3},onClick:()=>n({annotationColorId:C.id}),title:C.label,type:"button"},C.id))})]}),l.jsx("div",{className:Mt.divider}),l.jsxs("div",{className:Mt.settingsSection,children:[l.jsx(Dx,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:C=>n({autoClearAfterCopy:C.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(Dx,{className:Mt.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:C=>n({blockInteractions:C.target.checked})})]}),l.jsx("div",{className:Mt.divider}),l.jsxs("button",{className:Mt.settingsNavLink,onClick:()=>g("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:Mt.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${Mt.mcpNavIndicator} ${Mt[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${Mt.settingsPage} ${Mt.automationsPage} ${y==="automations"?Mt.slideIn:""}`,children:[l.jsxs("button",{className:Mt.settingsBackButton,onClick:()=>g("main"),children:[l.jsx(Kk,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:Mt.divider}),l.jsxs("div",{className:Mt.settingsSection,children:[l.jsxs("div",{className:Mt.settingsRow,children:[l.jsxs("span",{className:Mt.automationHeader,children:["MCP Connection",l.jsx(Er,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${Mt.mcpStatusDot} ${Mt[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:Mt.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Mt.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:Mt.divider}),l.jsxs("div",{className:`${Mt.settingsSection} ${Mt.settingsSectionGrow}`,children:[l.jsxs("div",{className:Mt.settingsRow,children:[l.jsxs("span",{className:Mt.automationHeader,children:["Webhooks",l.jsx(Er,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:Mt.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${Mt.autoSendLabel} ${t.webhooksEnabled?Mt.active:""} ${t.webhookUrl?"":Mt.disabled}`,children:"Auto-Send"}),l.jsx(wm,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:C=>n({webhooksEnabled:C.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:Mt.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:Mt.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:C=>C.stopPropagation(),onChange:C=>n({webhookUrl:C.target.value})})]})]})]})})}function Sm(t,n="filtered"){const{name:i,path:a}=_l(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=bM(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var Nx=!1,Cm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},ra=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},Mc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],XM=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...Mc.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${Mc.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Mc.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(t)};XM();function Cr(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function km(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function kr(t){return t.status!=="resolved"&&t.status!=="dismissed"}function hd(t){const n=lp(t),i=n.found?n:DM(t);if(i.found&&i.source)return AM(i.source,"path")}function GM({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:y=!0,endpoint:g,sessionId:b,onSessionCreated:v,webhookUrl:C,className:k}={}){var Rs,Os,bn,es,ys,Mo,ta;const[j,M]=_.useState(!1),[T,L]=_.useState([]),[O,A]=_.useState(!0),[F,U]=_.useState(()=>aM()),[W,Q]=_.useState(!1),me=_.useRef(null);_.useEffect(()=>{const R=K=>{const E=me.current;E&&E.contains(K.target)&&K.stopPropagation()},P=["mousedown","click","pointerdown"];return P.forEach(K=>document.body.addEventListener(K,R)),()=>{P.forEach(K=>document.body.removeEventListener(K,R))}},[]);const[se,ae]=_.useState(!1),[we,He]=_.useState(!1),[J,fe]=_.useState(null),[I,ue]=_.useState({x:0,y:0}),[X,pe]=_.useState(null),[Ee,H]=_.useState(!1),[ce,ee]=_.useState("idle"),[le,ge]=_.useState(!1),[Ae,ze]=_.useState(!1),[et,$e]=_.useState(null),[$t,Nt]=_.useState(null),[_t,tt]=_.useState([]),[ot,Wt]=_.useState(null),[on,Ie]=_.useState(null),[ie,We]=_.useState(null),[nt,Se]=_.useState(null),[Ge,lt]=_.useState([]),[ct,kt]=_.useState(0),[pt,It]=_.useState(!1),[st,V]=_.useState(!1),[Z,be]=_.useState(!1),[je,Je]=_.useState(!1),[qe,Te]=_.useState(!1),[he,Le]=_.useState("main"),[Ye,Ke]=_.useState(!1),[De,rt]=_.useState(!1),[mt,Ct]=_.useState(!1),[Qe,Bt]=_.useState([]),[xt,yt]=_.useState(null),Zt=_.useRef(!1),[at,jt]=_.useState(!1),[Rt,bt]=_.useState(!1),[Ht,Gt]=_.useState(1),[Bn,Ln]=_.useState("new-page"),[an,On]=_.useState(""),[Ft,mn]=_.useState(!1),[it,_n]=_.useState(null),ws=_.useRef(!1),go=_.useRef({rearrange:null,placements:[]}),Hs=_.useRef({rearrange:null,placements:[]}),[qt,Gn]=_.useState(0),[Tn,_s]=_.useState(0),[Ss,Hn]=_.useState(0),[zn,Bs]=_.useState(0),Ls=_.useRef(new Set),An=_.useRef(new Set),qn=_.useRef(null),Qs=_.useRef(),yo=De&&j&&!mt&&at;_.useEffect(()=>{if(yo){bt(!1);const R=pl(()=>{bt(!0)});return()=>cancelAnimationFrame(R)}else bt(!1)},[yo]);const So=_.useRef(new Map),Bo=_.useRef(new Map),ro=_.useRef(),[Cn,ds]=_.useState(!1),[hn,gs]=_.useState([]),vi=_.useRef(hn);vi.current=hn;const[Es,lo]=_.useState(null),xo=_.useRef(null);_.useRef(!1),_.useRef([]),_.useRef(0),_.useRef(null),_.useRef(null),_.useRef(1);const[rs,Ts]=_.useState(!1),co=_.useRef(null),[$n,uo]=_.useState([]),fs=_.useRef({cmd:!1,shift:!1}),Xn=()=>{Ke(!0)},ri=()=>{Ke(!1)},$o=()=>{rs||(co.current=Vt(()=>Ts(!0),850))},ea=()=>{co.current&&(clearTimeout(co.current),co.current=null),Ts(!1),ri()};_.useEffect(()=>()=>{co.current&&clearTimeout(co.current)},[]);const[Kt,$i]=_.useState(()=>{var R;try{const P=JSON.parse((R=localStorage.getItem("feedback-toolbar-settings"))!=null?R:"");return{...Cm,...P,annotationColorId:Mc.find(K=>K.id===P.annotationColorId)?P.annotationColorId:Cm.annotationColorId}}catch{return Cm}}),[Us,Ii]=_.useState(!0),[Pi,Io]=_.useState(!1),hs=()=>{var R;(R=me.current)==null||R.classList.add(Fe.disableTransitions),Ii(P=>!P),pl(()=>{var P;(P=me.current)==null||P.classList.remove(Fe.disableTransitions)})},li=!1,gn="off",[Dn,fo]=_.useState(b!=null?b:null),Qo=_.useRef(!1),[Cs,Zs]=_.useState(g?"connecting":"disconnected"),[rn,Vs]=_.useState(null),[Ys,Po]=_.useState(!1),[As,ci]=_.useState(null),Ho=_.useRef(!1),[Uo,Ws]=_.useState(new Set),[Vo,Co]=_.useState(new Set),[Un,Ds]=_.useState(!1),[ui,Js]=_.useState(!1),[en,Fs]=_.useState(!1),Vn=_.useRef(null),Yn=_.useRef(null),ks=_.useRef(null),eo=_.useRef(null),Yo=_.useRef(!1),bo=_.useRef(0),ko=_.useRef(null),Xs=_.useRef(null),di=8,Zo=50,ho=_.useRef(null),Jo=_.useRef(null),jo=_.useRef(null),Ot=typeof window<"u"?window.location.pathname:"/";_.useEffect(()=>{if(je)Te(!0);else{Ke(!1),Le("main");const R=Vt(()=>Te(!1),0);return()=>clearTimeout(R)}},[je]);const wi=j&&O&&!De;_.useEffect(()=>{if(wi){He(!1),ae(!0),Ws(new Set);const R=Vt(()=>{Ws(P=>{const K=new Set(P);return T.forEach(E=>K.add(E.id)),K})},350);return()=>clearTimeout(R)}else if(se){He(!0);const R=Vt(()=>{ae(!1),He(!1)},250);return()=>clearTimeout(R)}},[wi]),_.useEffect(()=>{V(!0),kt(window.scrollY);const R=gm(Ot);L(R.filter(kr)),Nx||(Io(!0),Nx=!0,Vt(()=>Io(!1),750));try{const P=localStorage.getItem("feedback-toolbar-theme");P!==null&&Ii(P==="dark")}catch{}try{const P=localStorage.getItem("feedback-toolbar-position");if(P){const K=JSON.parse(P);typeof K.x=="number"&&typeof K.y=="number"&&Vs(K)}}catch{}},[Ot]),_.useEffect(()=>{st&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Kt))},[Kt,st]),_.useEffect(()=>{st&&localStorage.setItem("feedback-toolbar-theme",Us?"dark":"light")},[Us,st]);const Si=_.useRef(!1);_.useEffect(()=>{const R=Si.current;Si.current=Ys,R&&!Ys&&rn&&st&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(rn))},[Ys,rn,st]),_.useEffect(()=>{if(!g||!st||Qo.current)return;Qo.current=!0,Zs("connecting"),(async()=>{try{const P=oM(Ot),K=b||P;let E=!1;if(K)try{const B=await Sx(g,K);fo(B.id),Zs("connected"),ym(Ot,B.id),E=!0;const q=gm(Ot),oe=new Set(B.annotations.map(Ce=>Ce.id)),xe=q.filter(Ce=>!oe.has(Ce.id));if(xe.length>0){const Ve=`${typeof window<"u"?window.location.origin:""}${Ot}`,wt=(await Promise.allSettled(xe.map(ft=>cl(g,B.id,{...ft,sessionId:B.id,url:Ve})))).map((ft,ut)=>ft.status==="fulfilled"?ft.value:(console.warn("[Agentation] Failed to sync annotation:",ft.reason),xe[ut])),Dt=[...B.annotations,...wt];L(Dt.filter(kr)),dc(Ot,Dt.filter(kr),B.id)}else L(B.annotations.filter(kr)),dc(Ot,B.annotations.filter(kr),B.id)}catch(B){console.warn("[Agentation] Could not join session, creating new:",B),iM(Ot)}if(!E){const B=typeof window<"u"?window.location.href:"/",q=await xm(g,B);fo(q.id),Zs("connected"),ym(Ot,q.id),v==null||v(q.id);const oe=Kj(),xe=typeof window<"u"?window.location.origin:"",Ce=[];for(const[Ve,Ze]of oe){const wt=Ze.filter(ut=>!ut._syncedTo);if(wt.length===0)continue;const Dt=`${xe}${Ve}`,ft=Ve===Ot;Ce.push((async()=>{try{const ut=ft?q:await xm(g,Dt),yn=(await Promise.allSettled(wt.map(vn=>cl(g,ut.id,{...vn,sessionId:ut.id,url:Dt})))).map((vn,Nn)=>vn.status==="fulfilled"?vn.value:(console.warn("[Agentation] Failed to sync annotation:",vn.reason),wt[Nn])).filter(kr);if(dc(Ve,yn,ut.id),ft){const vn=new Set(wt.map(Nn=>Nn.id));L(Nn=>{const Ut=Nn.filter(Xt=>!vn.has(Xt.id));return[...yn,...Ut]})}}catch(ut){console.warn(`[Agentation] Failed to sync annotations for ${Ve}:`,ut)}})())}await Promise.allSettled(Ce)}}catch(P){Zs("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",P)}})()},[g,b,st,v,Ot]),_.useEffect(()=>{if(!g||!st)return;const R=async()=>{try{(await fetch(`${g}/health`)).ok?Zs("connected"):Zs("disconnected")}catch{Zs("disconnected")}};R();const P=Jk(R,1e4);return()=>clearInterval(P)},[g,st]),_.useEffect(()=>{if(!g||!st||!Dn)return;const R=new EventSource(`${g}/sessions/${Dn}/events`),P=["resolved","dismissed"],K=E=>{var B;try{const q=JSON.parse(E.data);if(P.includes((B=q.payload)==null?void 0:B.status)){const oe=q.payload.id,xe=q.payload.kind;if(xe==="placement"){for(const[Ce,Ve]of So.current)if(Ve===oe){So.current.delete(Ce),Bt(Ze=>Ze.filter(wt=>wt.id!==Ce));break}}else if(xe==="rearrange"){for(const[Ce,Ve]of Bo.current)if(Ve===oe){Bo.current.delete(Ce),_n(Ze=>{if(!Ze)return null;const wt=Ze.sections.filter(Dt=>Dt.id!==Ce);return wt.length===0?null:{...Ze,sections:wt}});break}}else Co(Ce=>new Set(Ce).add(oe)),Vt(()=>{L(Ce=>Ce.filter(Ve=>Ve.id!==oe)),Co(Ce=>{const Ve=new Set(Ce);return Ve.delete(oe),Ve})},150)}}catch{}};return R.addEventListener("annotation.updated",K),()=>{R.removeEventListener("annotation.updated",K),R.close()}},[g,st,Dn]),_.useEffect(()=>{if(!g||!st)return;const R=Xs.current==="disconnected",P=Cs==="connected";Xs.current=Cs,R&&P&&(async()=>{try{const E=gm(Ot);if(E.length===0)return;const q=`${typeof window<"u"?window.location.origin:""}${Ot}`;let oe=Dn,xe=[];if(oe)try{xe=(await Sx(g,oe)).annotations}catch{oe=null}oe||(oe=(await xm(g,q)).id,fo(oe),ym(Ot,oe));const Ce=new Set(xe.map(Ze=>Ze.id)),Ve=E.filter(Ze=>!Ce.has(Ze.id));if(Ve.length>0){const wt=(await Promise.allSettled(Ve.map(ut=>cl(g,oe,{...ut,sessionId:oe,url:q})))).map((ut,tn)=>ut.status==="fulfilled"?ut.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",ut.reason),Ve[tn])),ft=[...xe,...wt].filter(kr);L(ft),dc(Ot,ft,oe)}}catch(E){console.warn("[Agentation] Failed to sync on reconnect:",E)}})()},[Cs,g,st,Dn,Ot]);const Hi=_.useCallback(()=>{W||(Q(!0),Je(!1),M(!1),Vt(()=>{rM(!0),U(!0),Q(!1)},400))},[W]);_.useEffect(()=>{if(!i||!st||!t||t.length===0||T.length>0)return;const R=[];return R.push(Vt(()=>{M(!0)},n-200)),t.forEach((P,K)=>{const E=n+K*300;R.push(Vt(()=>{const B=document.querySelector(P.selector);if(!B)return;const q=B.getBoundingClientRect(),{name:oe,path:xe}=_l(B),Ce={id:`demo-${Date.now()}-${K}`,x:(q.left+q.width/2)/window.innerWidth*100,y:q.top+q.height/2+window.scrollY,comment:P.comment,element:oe,elementPath:xe,timestamp:Date.now(),selectedText:P.selectedText,boundingBox:{x:q.left,y:q.top+window.scrollY,width:q.width,height:q.height},nearbyText:cc(B),cssClasses:uc(B)};L(Ve=>[...Ve,Ce])},E))}),()=>{R.forEach(clearTimeout)}},[i,st,t,n]),_.useEffect(()=>{const R=()=>{kt(window.scrollY),It(!0),jo.current&&clearTimeout(jo.current),jo.current=Vt(()=>{It(!1)},150)};return window.addEventListener("scroll",R,{passive:!0}),()=>{window.removeEventListener("scroll",R),jo.current&&clearTimeout(jo.current)}},[]),_.useEffect(()=>{st&&T.length>0?Dn?dc(Ot,T,Dn):r2(Ot,T):st&&T.length===0&&localStorage.removeItem($d(Ot))},[T,Ot,st,Dn]),_.useEffect(()=>{if(st&&!Zt.current){Zt.current=!0;const R=Qj(Ot);R.length>0&&Bt(R)}},[st,Ot]),_.useEffect(()=>{st&&Zt.current&&!at&&(Qe.length>0?Zj(Ot,Qe):Jj(Ot))},[Qe,Ot,st,at]),_.useEffect(()=>{if(st&&!ws.current){ws.current=!0;const R=eM(Ot);if(R){const P={...R,sections:R.sections.map(K=>{var E;return{...K,currentRect:(E=K.currentRect)!=null?E:{...K.originalRect}}})};_n(P)}}},[st,Ot]),_.useEffect(()=>{st&&ws.current&&!at&&(it?tM(Ot,it):nM(Ot))},[it,Ot,st,at]);const fi=_.useRef(!1);_.useEffect(()=>{if(st&&!fi.current){fi.current=!0;const R=sM(Ot);R&&(Hs.current={rearrange:R.rearrange,placements:R.placements||[]},R.purpose&&On(R.purpose))}},[st,Ot]),_.useEffect(()=>{var P,K,E,B,q;if(!st||!fi.current)return;const R=Hs.current;at?((K=(P=it==null?void 0:it.sections)==null?void 0:P.length)!=null?K:0)>0||Qe.length>0||an?wx(Ot,{rearrange:it,placements:Qe,purpose:an}):ud(Ot):((q=(B=(E=R.rearrange)==null?void 0:E.sections)==null?void 0:B.length)!=null?q:0)>0||R.placements.length>0||an?wx(Ot,{rearrange:R.rearrange,placements:R.placements,purpose:an}):ud(Ot)},[it,Qe,an,at,Ot,st]),_.useEffect(()=>{De&&!it&&_n({sections:[],originalOrder:[],detectedAt:Date.now()})},[De,it]),_.useEffect(()=>{if(!g||!Dn)return;const R=So.current,P=new Set(Qe.map(K=>K.id));for(const K of Qe){if(R.has(K.id))continue;R.set(K.id,"");const E=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ot;cl(g,Dn,{id:K.id,x:K.x/window.innerWidth*100,y:K.y,comment:`Place ${K.type} at (${Math.round(K.x)}, ${Math.round(K.y)}), ${K.width}×${K.height}px${K.text?` — "${K.text}"`:""}`,element:`[design:${K.type}]`,elementPath:"[placement]",timestamp:K.timestamp,url:E,intent:"change",severity:"important",kind:"placement",placement:{componentType:K.type,width:K.width,height:K.height,scrollY:K.scrollY,text:K.text}}).then(B=>{R.has(K.id)&&R.set(K.id,B.id)}).catch(B=>{console.warn("[Agentation] Failed to sync placement annotation:",B),R.delete(K.id)})}for(const[K,E]of R)P.has(K)||(R.delete(K),E&&tr(g,E).catch(()=>{}))},[Qe,g,Dn,Ot]),_.useEffect(()=>{if(!(!g||!Dn))return ro.current&&clearTimeout(ro.current),ro.current=Vt(()=>{const R=Bo.current;if(!it||it.sections.length===0){for(const[,E]of R)E&&tr(g,E).catch(()=>{});R.clear();return}const P=new Set(it.sections.map(E=>E.id)),K=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ot;for(const E of it.sections){const B=E.originalRect,q=E.currentRect;if(!(Math.abs(B.x-q.x)>1||Math.abs(B.y-q.y)>1||Math.abs(B.width-q.width)>1||Math.abs(B.height-q.height)>1)){const Ce=R.get(E.id);Ce&&(R.delete(E.id),tr(g,Ce).catch(()=>{}));continue}const xe=R.get(E.id);xe?Cx(g,xe,{comment:`Move ${E.label} section (${E.tagName}) — from (${Math.round(B.x)},${Math.round(B.y)}) ${Math.round(B.width)}×${Math.round(B.height)} to (${Math.round(q.x)},${Math.round(q.y)}) ${Math.round(q.width)}×${Math.round(q.height)}`}).catch(Ce=>{console.warn("[Agentation] Failed to update rearrange annotation:",Ce)}):(R.set(E.id,""),cl(g,Dn,{id:E.id,x:q.x/window.innerWidth*100,y:q.y,comment:`Move ${E.label} section (${E.tagName}) — from (${Math.round(B.x)},${Math.round(B.y)}) ${Math.round(B.width)}×${Math.round(B.height)} to (${Math.round(q.x)},${Math.round(q.y)}) ${Math.round(q.width)}×${Math.round(q.height)}`,element:E.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:K,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:E.selector,label:E.label,tagName:E.tagName,originalRect:B,currentRect:q}}).then(Ce=>{R.has(E.id)&&R.set(E.id,Ce.id)}).catch(Ce=>{console.warn("[Agentation] Failed to sync rearrange annotation:",Ce),R.delete(E.id)}))}for(const[E,B]of R)P.has(E)||(R.delete(E),B&&tr(g,B).catch(()=>{}))},300),()=>{ro.current&&clearTimeout(ro.current)}},[it,g,Dn,Ot]);const vo=_.useRef(new Map);_.useLayoutEffect(()=>{var K;const R=(K=it==null?void 0:it.sections)!=null?K:[],P=new Set;if((De||mt)&&j)for(const E of R){P.add(E.id);try{const B=document.querySelector(E.selector);if(!B)continue;if(!vo.current.has(E.id)){const q={transform:B.style.transform,transformOrigin:B.style.transformOrigin,opacity:B.style.opacity,position:B.style.position,zIndex:B.style.zIndex,display:B.style.display},oe=[];let xe=B.parentElement;for(;xe&&xe!==document.body;){const Ve=getComputedStyle(xe);(Ve.overflow!=="visible"||Ve.overflowX!=="visible"||Ve.overflowY!=="visible")&&(oe.push({el:xe,overflow:xe.style.overflow}),xe.style.overflow="visible"),xe=xe.parentElement}getComputedStyle(B).display==="inline"&&(B.style.display="inline-block"),vo.current.set(E.id,{el:B,origStyles:q,ancestors:oe}),B.style.transformOrigin="top left",B.style.zIndex="9999"}}catch{}}for(const[E,B]of vo.current)if(!P.has(E)){const{el:q,origStyles:oe,ancestors:xe}=B;q.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",q.style.transform=oe.transform,q.style.transformOrigin=oe.transformOrigin,q.style.opacity=oe.opacity,q.style.position=oe.position,q.style.zIndex=oe.zIndex,vo.current.delete(E),Vt(()=>{q.style.transition="",q.style.display=oe.display;for(const Ce of xe)Ce.el.style.overflow=Ce.overflow},450)}},[it,De,mt,j]),_.useEffect(()=>()=>{for(const[,R]of vo.current){const{el:P,origStyles:K,ancestors:E}=R;P.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",P.style.transform=K.transform,P.style.transformOrigin=K.transformOrigin,P.style.opacity=K.opacity,P.style.position=K.position,P.style.zIndex=K.zIndex,Vt(()=>{P.style.transition="",P.style.display=K.display;for(const B of E)B.el.style.overflow=B.overflow},450)}vo.current.clear()},[]);const ei=_.useCallback(()=>{Ct(!0),rt(!1),yt(null),clearTimeout(Qs.current),Qs.current=Vt(()=>{Ct(!1)},300)},[]),$=_.useCallback(()=>{De&&(Ct(!0),rt(!1),yt(null),clearTimeout(Qs.current),Qs.current=Vt(()=>{Ct(!1)},300)),M(!1)},[De]),x=_.useCallback(()=>{Z||(t8(),be(!0))},[Z]),S=_.useCallback(()=>{Z&&(lx(),be(!1))},[Z]),N=_.useCallback(()=>{Z?S():x()},[Z,x,S]),Y=_.useCallback(()=>{if($n.length===0)return;const R=$n[0],P=R.element,K=$n.length>1,E=$n.map(B=>B.element.getBoundingClientRect());if(K){const B={left:Math.min(...E.map(ut=>ut.left)),top:Math.min(...E.map(ut=>ut.top)),right:Math.max(...E.map(ut=>ut.right)),bottom:Math.max(...E.map(ut=>ut.bottom))},q=$n.slice(0,5).map(ut=>ut.name).join(", "),oe=$n.length>5?` +${$n.length-5} more`:"",xe=E.map(ut=>({x:ut.left,y:ut.top+window.scrollY,width:ut.width,height:ut.height})),Ve=$n[$n.length-1].element,Ze=E[E.length-1],wt=Ze.left+Ze.width/2,Dt=Ze.top+Ze.height/2,ft=km(Ve);pe({x:wt/window.innerWidth*100,y:ft?Dt:Dt+window.scrollY,clientY:Dt,element:`${$n.length} elements: ${q}${oe}`,elementPath:"multi-select",boundingBox:{x:B.left,y:B.top+window.scrollY,width:B.right-B.left,height:B.bottom-B.top},isMultiSelect:!0,isFixed:ft,elementBoundingBoxes:xe,multiSelectElements:$n.map(ut=>ut.element),targetElement:Ve,fullPath:rd(P),accessibility:ad(P),computedStyles:id(P),computedStylesObj:od(P),nearbyElements:sd(P),cssClasses:uc(P),nearbyText:cc(P),sourceFile:hd(P)})}else{const B=E[0],q=km(P);pe({x:B.left/window.innerWidth*100,y:q?B.top:B.top+window.scrollY,clientY:B.top,element:R.name,elementPath:R.path,boundingBox:{x:B.left,y:q?B.top:B.top+window.scrollY,width:B.width,height:B.height},isFixed:q,fullPath:rd(P),accessibility:ad(P),computedStyles:id(P),computedStylesObj:od(P),nearbyElements:sd(P),cssClasses:uc(P),nearbyText:cc(P),reactComponents:R.reactComponents,sourceFile:hd(P)})}uo([]),fe(null)},[$n]);_.useEffect(()=>{j||(pe(null),We(null),Se(null),lt([]),fe(null),Je(!1),uo([]),fs.current={cmd:!1,shift:!1},Z&&S())},[j,Z,S]),_.useEffect(()=>()=>{lx()},[]),_.useEffect(()=>{if(!j)return;const R=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),P=":not([data-agentation-root]):not([data-agentation-root] *)",K=document.createElement("style");return K.id="feedback-cursor-styles",K.textContent=`
      body ${P} {
        cursor: crosshair !important;
      }

      body :is(${R})${P} {
        cursor: text !important;
      }
    `,document.head.appendChild(K),()=>{const E=document.getElementById("feedback-cursor-styles");E&&E.remove()}},[j]),_.useEffect(()=>{if(Es!==null&&j)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Es,j]),_.useEffect(()=>{if(!j||X||Cn||De)return;const R=P=>{const K=P.composedPath()[0]||P.target;if(Fo(K,"[data-feedback-toolbar]")){fe(null);return}const E=Cr(P.clientX,P.clientY);if(!E||Fo(E,"[data-feedback-toolbar]")){fe(null);return}const{name:B,elementName:q,path:oe,reactComponents:xe}=Sm(E,gn),Ce=E.getBoundingClientRect();fe({element:B,elementName:q,elementPath:oe,rect:Ce,reactComponents:xe}),ue({x:P.clientX,y:P.clientY})};return document.addEventListener("mousemove",R),()=>document.removeEventListener("mousemove",R)},[j,X,Cn,De,gn,hn]);const ne=_.useCallback(R=>{var P;if(We(R),$e(null),Nt(null),tt([]),(P=R.elementBoundingBoxes)!=null&&P.length){const K=[];for(const E of R.elementBoundingBoxes){const B=E.x+E.width/2,q=E.y+E.height/2-window.scrollY,oe=Cr(B,q);oe&&K.push(oe)}lt(K),Se(null)}else if(R.boundingBox){const K=R.boundingBox,E=K.x+K.width/2,B=R.isFixed?K.y+K.height/2:K.y+K.height/2-window.scrollY,q=Cr(E,B);if(q){const oe=q.getBoundingClientRect(),xe=oe.width/K.width,Ce=oe.height/K.height;xe<.5||Ce<.5?Se(null):Se(q)}else Se(null);lt([])}else Se(null),lt([])},[]);_.useEffect(()=>{if(!j||Cn||De)return;const R=P=>{var dn,yn;if(Yo.current){Yo.current=!1;return}const K=P.composedPath()[0]||P.target;if(Fo(K,"[data-feedback-toolbar]")||Fo(K,"[data-annotation-popup]")||Fo(K,"[data-annotation-marker]"))return;if(P.metaKey&&P.shiftKey&&!X&&!ie){P.preventDefault(),P.stopPropagation();const vn=Cr(P.clientX,P.clientY);if(!vn)return;const Nn=vn.getBoundingClientRect(),{name:Ut,path:Xt,reactComponents:xs}=Sm(vn,gn),Rn=$n.findIndex(mo=>mo.element===vn);Rn>=0?uo(mo=>mo.filter((Lo,ls)=>ls!==Rn)):uo(mo=>[...mo,{element:vn,rect:Nn,name:Ut,path:Xt,reactComponents:xs!=null?xs:void 0}]);return}const E=Fo(K,"button, a, input, select, textarea, [role='button'], [onclick]");if(Kt.blockInteractions&&E&&(P.preventDefault(),P.stopPropagation()),X){if(E&&!Kt.blockInteractions)return;P.preventDefault(),(dn=ho.current)==null||dn.shake();return}if(ie){if(E&&!Kt.blockInteractions)return;P.preventDefault(),(yn=Jo.current)==null||yn.shake();return}P.preventDefault();const B=Cr(P.clientX,P.clientY);if(!B)return;const{name:q,path:oe,reactComponents:xe}=Sm(B,gn),Ce=B.getBoundingClientRect(),Ve=P.clientX/window.innerWidth*100,Ze=km(B),wt=Ze?P.clientY:P.clientY+window.scrollY,Dt=window.getSelection();let ft;Dt&&Dt.toString().trim().length>0&&(ft=Dt.toString().trim().slice(0,500));const ut=od(B),tn=id(B);pe({x:Ve,y:wt,clientY:P.clientY,element:q,elementPath:oe,selectedText:ft,boundingBox:{x:Ce.left,y:Ze?Ce.top:Ce.top+window.scrollY,width:Ce.width,height:Ce.height},nearbyText:cc(B),cssClasses:uc(B),isFixed:Ze,fullPath:rd(B),accessibility:ad(B),computedStyles:tn,computedStylesObj:ut,nearbyElements:sd(B),reactComponents:xe!=null?xe:void 0,sourceFile:hd(B),targetElement:B}),fe(null)};return document.addEventListener("click",R,!0),()=>document.removeEventListener("click",R,!0)},[j,Cn,De,X,ie,Kt.blockInteractions,gn,$n]),_.useEffect(()=>{if(!j)return;const R=E=>{E.key==="Meta"&&(fs.current.cmd=!0),E.key==="Shift"&&(fs.current.shift=!0)},P=E=>{const B=fs.current.cmd&&fs.current.shift;E.key==="Meta"&&(fs.current.cmd=!1),E.key==="Shift"&&(fs.current.shift=!1);const q=fs.current.cmd&&fs.current.shift;B&&!q&&$n.length>0&&Y()},K=()=>{fs.current={cmd:!1,shift:!1},uo([])};return document.addEventListener("keydown",R),document.addEventListener("keyup",P),window.addEventListener("blur",K),()=>{document.removeEventListener("keydown",R),document.removeEventListener("keyup",P),window.removeEventListener("blur",K)}},[j,$n,Y]),_.useEffect(()=>{if(!j||X||Cn||De)return;const R=P=>{const K=P.composedPath()[0]||P.target;Fo(K,"[data-feedback-toolbar]")||Fo(K,"[data-annotation-marker]")||Fo(K,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(K.tagName)||K.isContentEditable||(P.preventDefault(),Vn.current={x:P.clientX,y:P.clientY})};return document.addEventListener("mousedown",R),()=>document.removeEventListener("mousedown",R)},[j,X,Cn,De]),_.useEffect(()=>{if(!j||X)return;const R=P=>{if(!Vn.current)return;const K=P.clientX-Vn.current.x,E=P.clientY-Vn.current.y,B=K*K+E*E,q=di*di;if(!en&&B>=q&&(Yn.current=Vn.current,Fs(!0),P.preventDefault()),(en||B>=q)&&Yn.current){if(ks.current){const Ut=Math.min(Yn.current.x,P.clientX),Xt=Math.min(Yn.current.y,P.clientY),xs=Math.abs(P.clientX-Yn.current.x),Rn=Math.abs(P.clientY-Yn.current.y);ks.current.style.transform=`translate(${Ut}px, ${Xt}px)`,ks.current.style.width=`${xs}px`,ks.current.style.height=`${Rn}px`}const oe=Date.now();if(oe-bo.current<Zo)return;bo.current=oe;const xe=Yn.current.x,Ce=Yn.current.y,Ve=Math.min(xe,P.clientX),Ze=Math.min(Ce,P.clientY),wt=Math.max(xe,P.clientX),Dt=Math.max(Ce,P.clientY),ft=(Ve+wt)/2,ut=(Ze+Dt)/2,tn=new Set,dn=[[Ve,Ze],[wt,Ze],[Ve,Dt],[wt,Dt],[ft,ut],[ft,Ze],[ft,Dt],[Ve,ut],[wt,ut]];for(const[Ut,Xt]of dn){const xs=document.elementsFromPoint(Ut,Xt);for(const Rn of xs)Rn instanceof HTMLElement&&tn.add(Rn)}const yn=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Ut of yn)if(Ut instanceof HTMLElement){const Xt=Ut.getBoundingClientRect(),xs=Xt.left+Xt.width/2,Rn=Xt.top+Xt.height/2,mo=xs>=Ve&&xs<=wt&&Rn>=Ze&&Rn<=Dt,Lo=Math.min(Xt.right,wt)-Math.max(Xt.left,Ve),ls=Math.min(Xt.bottom,Dt)-Math.max(Xt.top,Ze),Ci=Lo>0&&ls>0?Lo*ls:0,Ui=Xt.width*Xt.height,Vi=Ui>0?Ci/Ui:0;(mo||Vi>.5)&&tn.add(Ut)}const vn=[],Nn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Ut of tn){if(Fo(Ut,"[data-feedback-toolbar]")||Fo(Ut,"[data-annotation-marker]"))continue;const Xt=Ut.getBoundingClientRect();if(!(Xt.width>window.innerWidth*.8&&Xt.height>window.innerHeight*.5)&&!(Xt.width<10||Xt.height<10)&&Xt.left<wt&&Xt.right>Ve&&Xt.top<Dt&&Xt.bottom>Ze){const xs=Ut.tagName;let Rn=Nn.has(xs);if(!Rn&&(xs==="DIV"||xs==="SPAN")){const mo=Ut.textContent&&Ut.textContent.trim().length>0,Lo=Ut.onclick!==null||Ut.getAttribute("role")==="button"||Ut.getAttribute("role")==="link"||Ut.classList.contains("clickable")||Ut.hasAttribute("data-clickable");(mo||Lo)&&!Ut.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Rn=!0)}if(Rn){let mo=!1;for(const Lo of vn)if(Lo.left<=Xt.left&&Lo.right>=Xt.right&&Lo.top<=Xt.top&&Lo.bottom>=Xt.bottom){mo=!0;break}mo||vn.push(Xt)}}}if(eo.current){const Ut=eo.current;for(;Ut.children.length>vn.length;)Ut.removeChild(Ut.lastChild);vn.forEach((Xt,xs)=>{let Rn=Ut.children[xs];Rn||(Rn=document.createElement("div"),Rn.className=Fe.selectedElementHighlight,Ut.appendChild(Rn)),Rn.style.transform=`translate(${Xt.left}px, ${Xt.top}px)`,Rn.style.width=`${Xt.width}px`,Rn.style.height=`${Xt.height}px`})}}};return document.addEventListener("mousemove",R,{passive:!0}),()=>document.removeEventListener("mousemove",R)},[j,X,en,di]),_.useEffect(()=>{if(!j)return;const R=P=>{const K=en,E=Yn.current;if(en&&E){Yo.current=!0;const B=Math.min(E.x,P.clientX),q=Math.min(E.y,P.clientY),oe=Math.max(E.x,P.clientX),xe=Math.max(E.y,P.clientY),Ce=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(ft=>{if(!(ft instanceof HTMLElement)||Fo(ft,"[data-feedback-toolbar]")||Fo(ft,"[data-annotation-marker]"))return;const ut=ft.getBoundingClientRect();ut.width>window.innerWidth*.8&&ut.height>window.innerHeight*.5||ut.width<10||ut.height<10||ut.left<oe&&ut.right>B&&ut.top<xe&&ut.bottom>q&&Ce.push({element:ft,rect:ut})});const Ze=Ce.filter(({element:ft})=>!Ce.some(({element:ut})=>ut!==ft&&ft.contains(ut))),wt=P.clientX/window.innerWidth*100,Dt=P.clientY+window.scrollY;if(Ze.length>0){const ft=Ze.reduce((Nn,{rect:Ut})=>({left:Math.min(Nn.left,Ut.left),top:Math.min(Nn.top,Ut.top),right:Math.max(Nn.right,Ut.right),bottom:Math.max(Nn.bottom,Ut.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),ut=Ze.slice(0,5).map(({element:Nn})=>_l(Nn).name).join(", "),tn=Ze.length>5?` +${Ze.length-5} more`:"",dn=Ze[0].element,yn=od(dn),vn=id(dn);pe({x:wt,y:Dt,clientY:P.clientY,element:`${Ze.length} elements: ${ut}${tn}`,elementPath:"multi-select",boundingBox:{x:ft.left,y:ft.top+window.scrollY,width:ft.right-ft.left,height:ft.bottom-ft.top},isMultiSelect:!0,fullPath:rd(dn),accessibility:ad(dn),computedStyles:vn,computedStylesObj:yn,nearbyElements:sd(dn),cssClasses:uc(dn),nearbyText:cc(dn),sourceFile:hd(dn)})}else{const ft=Math.abs(oe-B),ut=Math.abs(xe-q);ft>20&&ut>20&&pe({x:wt,y:Dt,clientY:P.clientY,element:"Area selection",elementPath:`region at (${Math.round(B)}, ${Math.round(q)})`,boundingBox:{x:B,y:q+window.scrollY,width:ft,height:ut},isMultiSelect:!0})}fe(null)}else K&&(Yo.current=!0);Vn.current=null,Yn.current=null,Fs(!1),eo.current&&(eo.current.innerHTML="")};return document.addEventListener("mouseup",R),()=>document.removeEventListener("mouseup",R)},[j,en]);const de=_.useCallback(async(R,P,K)=>{const E=Kt.webhookUrl||C;if(!E||!Kt.webhooksEnabled&&!K)return!1;try{return(await fetch(E,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:R,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...P})})).ok}catch(B){return console.warn("[Agentation] Webhook failed:",B),!1}},[C,Kt.webhookUrl,Kt.webhooksEnabled]),Xe=_.useCallback(R=>{var K;if(!X)return;const P={id:Date.now().toString(),x:X.x,y:X.y,comment:R,element:X.element,elementPath:X.elementPath,timestamp:Date.now(),selectedText:X.selectedText,boundingBox:X.boundingBox,nearbyText:X.nearbyText,cssClasses:X.cssClasses,isMultiSelect:X.isMultiSelect,isFixed:X.isFixed,fullPath:X.fullPath,accessibility:X.accessibility,computedStyles:X.computedStyles,nearbyElements:X.nearbyElements,reactComponents:X.reactComponents,sourceFile:X.sourceFile,elementBoundingBoxes:X.elementBoundingBoxes,...g&&Dn?{sessionId:Dn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};L(E=>[...E,P]),ko.current=P.id,Vt(()=>{ko.current=null},300),Vt(()=>{Ws(E=>new Set(E).add(P.id))},250),a==null||a(P),de("annotation.add",{annotation:P}),Ds(!0),Vt(()=>{pe(null),Ds(!1)},150),(K=window.getSelection())==null||K.removeAllRanges(),g&&Dn&&cl(g,Dn,P).then(E=>{E.id!==P.id&&(L(B=>B.map(q=>q.id===P.id?{...q,id:E.id}:q)),Ws(B=>{const q=new Set(B);return q.delete(P.id),q.add(E.id),q}))}).catch(E=>{console.warn("[Agentation] Failed to sync annotation:",E)})},[X,a,de,g,Dn]),dt=_.useCallback(()=>{Ds(!0),Vt(()=>{pe(null),Ds(!1)},150)},[]),At=_.useCallback(R=>{const P=T.findIndex(E=>E.id===R),K=T[P];(ie==null?void 0:ie.id)===R&&(Js(!0),Vt(()=>{We(null),Se(null),lt([]),Js(!1)},150)),Wt(R),Co(E=>new Set(E).add(R)),K&&(c==null||c(K),de("annotation.delete",{annotation:K})),g&&tr(g,R).catch(E=>{console.warn("[Agentation] Failed to delete annotation from server:",E)}),Vt(()=>{L(E=>E.filter(B=>B.id!==R)),Co(E=>{const B=new Set(E);return B.delete(R),B}),Wt(null),P<T.length-1&&(Ie(P),Vt(()=>Ie(null),200))},150)},[T,ie,c,de,g]),vt=_.useCallback(R=>{var P;if(!R){$e(null),Nt(null),tt([]);return}if($e(R.id),(P=R.elementBoundingBoxes)!=null&&P.length){const K=[];for(const E of R.elementBoundingBoxes){const B=E.x+E.width/2,q=E.y+E.height/2-window.scrollY,xe=document.elementsFromPoint(B,q).find(Ce=>!Ce.closest("[data-annotation-marker]")&&!Ce.closest("[data-agentation-root]"));xe&&K.push(xe)}tt(K),Nt(null)}else if(R.boundingBox){const K=R.boundingBox,E=K.x+K.width/2,B=R.isFixed?K.y+K.height/2:K.y+K.height/2-window.scrollY,q=Cr(E,B);if(q){const oe=q.getBoundingClientRect(),xe=oe.width/K.width,Ce=oe.height/K.height;xe<.5||Ce<.5?Nt(null):Nt(q)}else Nt(null);tt([])}else Nt(null),tt([])},[]),Jt=_.useCallback(R=>{if(!ie)return;const P={...ie,comment:R};L(K=>K.map(E=>E.id===ie.id?P:E)),u==null||u(P),de("annotation.update",{annotation:P}),g&&Cx(g,ie.id,{comment:R}).catch(K=>{console.warn("[Agentation] Failed to update annotation on server:",K)}),Js(!0),Vt(()=>{We(null),Se(null),lt([]),Js(!1)},150)},[ie,u,de,g]),ht=_.useCallback(()=>{Js(!0),Vt(()=>{We(null),Se(null),lt([]),Js(!1)},150)},[]),zt=_.useCallback(()=>{const R=T.length,P=Qe.length>0||!!it;if(R===0&&hn.length===0&&!P)return;if(d==null||d(T),de("annotations.clear",{annotations:T}),g){Promise.all(T.map(B=>tr(g,B.id).catch(q=>{console.warn("[Agentation] Failed to delete annotation from server:",q)})));for(const[,B]of So.current)B&&tr(g,B).catch(()=>{});So.current.clear();for(const[,B]of Bo.current)B&&tr(g,B).catch(()=>{});Bo.current.clear()}ze(!0),ge(!0),gs([]);const K=xo.current;if(K){const B=K.getContext("2d");B&&B.clearRect(0,0,K.width,K.height)}(Qe.length>0||it)&&(Hn(B=>B+1),Bs(B=>B+1),Vt(()=>{Bt([]),_n(null)},200)),at&&jt(!1),an&&On(""),Hs.current={rearrange:null,placements:[]},ud(Ot);const E=R*30+200;Vt(()=>{L([]),Ws(new Set),localStorage.removeItem($d(Ot)),ze(!1)},E),Vt(()=>ge(!1),1500)},[Ot,T,hn,Qe,it,at,an,d,de,g]),Qt=_.useCallback(async()=>{const R=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ot,P=De&&at;let K;if(P){if(Qe.length===0&&!it&&!an)return;K=""}else{if(K=Mx(T,R,Kt.outputDetail),!K&&hn.length===0&&Qe.length===0&&!it)return;K||(K=`## Page Feedback: ${R}
`)}if(!P&&hn.length>0){const E=new Set;for(const xe of T)xe.drawingIndex!=null&&E.add(xe.drawingIndex);const B=xo.current;B&&(B.style.visibility="hidden");const q=[],oe=window.scrollY;for(let xe=0;xe<hn.length;xe++){if(E.has(xe))continue;const Ce=hn[xe];if(Ce.points.length<2)continue;const Ve=Ce.fixed?Ce.points:Ce.points.map(ts=>({x:ts.x,y:ts.y-oe}));let Ze=1/0,wt=1/0,Dt=-1/0,ft=-1/0;for(const ts of Ve)Ze=Math.min(Ze,ts.x),wt=Math.min(wt,ts.y),Dt=Math.max(Dt,ts.x),ft=Math.max(ft,ts.y);const ut=Dt-Ze,tn=ft-wt,dn=Math.hypot(ut,tn),yn=Ve[0],vn=Ve[Ve.length-1],Nn=Math.hypot(vn.x-yn.x,vn.y-yn.y);let Ut;const Xt=Nn<dn*.35,xs=ut/Math.max(tn,1);if(Xt&&dn>20){const ts=Math.max(ut,tn)*.15;let Yi=0;for(const na of Ve){const Pc=na.x-Ze<ts,Gd=Dt-na.x<ts,qd=na.y-wt<ts,Kd=ft-na.y<ts;(Pc||Gd)&&(qd||Kd)&&Yi++}Ut=Yi>Ve.length*.15?"box":"circle"}else xs>3&&tn<40?Ut="underline":Nn>dn*.5?Ut="arrow":Ut="drawing";const Rn=Math.min(10,Ve.length),mo=Math.max(1,Math.floor(Ve.length/Rn)),Lo=new Set,ls=[],Ci=[yn];for(let ts=mo;ts<Ve.length-1;ts+=mo)Ci.push(Ve[ts]);Ci.push(vn);for(const ts of Ci){const Yi=Cr(ts.x,ts.y);if(!Yi||Lo.has(Yi)||Fo(Yi,"[data-feedback-toolbar]"))continue;Lo.add(Yi);const{name:na}=_l(Yi);ls.includes(na)||ls.push(na)}const Ui=`${Math.round(Ze)},${Math.round(wt)} → ${Math.round(Dt)},${Math.round(ft)}`;let Vi;(Ut==="circle"||Ut==="box")&&ls.length>0?Vi=`${Ut==="box"?"Boxed":"Circled"} **${ls[0]}**${ls.length>1?` (and ${ls.slice(1).join(", ")})`:""} (region: ${Ui})`:Ut==="underline"&&ls.length>0?Vi=`Underlined **${ls[0]}** (${Ui})`:Ut==="arrow"&&ls.length>=2?Vi=`Arrow from **${ls[0]}** to **${ls[ls.length-1]}** (${Math.round(yn.x)},${Math.round(yn.y)} → ${Math.round(vn.x)},${Math.round(vn.y)})`:ls.length>0?Vi=`${Ut==="arrow"?"Arrow":"Drawing"} near **${ls.join("**, **")}** (region: ${Ui})`:Vi=`Drawing at ${Ui}`,q.push(Vi)}B&&(B.style.visibility=""),q.length>0&&(K+=`
**Drawings:**
`,q.forEach((xe,Ce)=>{K+=`${Ce+1}. ${xe}
`}))}if((Qe.length>0||P&&an)&&(K+=`
`+bx(Qe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:at,wireframePurpose:an||void 0},Kt.outputDetail)),it){const E=vx(it,Kt.outputDetail,{width:window.innerWidth,height:window.innerHeight});E&&(K+=`
`+E)}if(y)try{await navigator.clipboard.writeText(K)}catch{}h==null||h(K),H(!0),Vt(()=>H(!1),2e3),Kt.autoClearAfterCopy&&Vt(()=>zt(),500)},[T,hn,Qe,it,at,De,Bn,an,Ot,Kt.outputDetail,gn,Kt.autoClearAfterCopy,zt,y,h]),gt=_.useCallback(async()=>{const R=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ot;let P=Mx(T,R,Kt.outputDetail);if(!P&&Qe.length===0&&!it)return;if(P||(P=`## Page Feedback: ${R}
`),Qe.length>0&&(P+=`
`+bx(Qe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:at,wireframePurpose:an||void 0},Kt.outputDetail)),it){const E=vx(it,Kt.outputDetail,{width:window.innerWidth,height:window.innerHeight});E&&(P+=`
`+E)}p&&p(P,T),ee("sending"),await new Promise(E=>Vt(E,150));const K=await de("submit",{output:P,annotations:T},!0);ee(K?"sent":"failed"),Vt(()=>ee("idle"),2500),K&&Kt.autoClearAfterCopy&&Vt(()=>zt(),500)},[p,de,T,Qe,it,at,Bn,Ot,Kt.outputDetail,gn,Kt.autoClearAfterCopy,zt]);_.useEffect(()=>{if(!As)return;const R=10,P=E=>{const B=E.clientX-As.x,q=E.clientY-As.y,oe=Math.sqrt(B*B+q*q);if(!Ys&&oe>R&&Po(!0),Ys||oe>R){let xe=As.toolbarX+B,Ce=As.toolbarY+q;const Ve=20,Ze=337,wt=44,ft=Ze-(j?Cs==="connected"?297:257:44),ut=Ve-ft,tn=window.innerWidth-Ve-Ze;xe=Math.max(ut,Math.min(tn,xe)),Ce=Math.max(Ve,Math.min(window.innerHeight-wt-Ve,Ce)),Vs({x:xe,y:Ce})}},K=()=>{Ys&&(Ho.current=!0),Po(!1),ci(null)};return document.addEventListener("mousemove",P),document.addEventListener("mouseup",K),()=>{document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",K)}},[As,Ys,j,Cs]);const un=_.useCallback(R=>{var q,oe;if(R.target.closest("button")||R.target.closest("[data-agentation-settings-panel]"))return;const P=R.currentTarget.parentElement;if(!P)return;const K=P.getBoundingClientRect(),E=(q=rn==null?void 0:rn.x)!=null?q:K.left,B=(oe=rn==null?void 0:rn.y)!=null?oe:K.top;ci({x:R.clientX,y:R.clientY,toolbarX:E,toolbarY:B})},[rn]);if(_.useEffect(()=>{if(!rn)return;const R=()=>{let B=rn.x,q=rn.y;const Ce=20-(337-(j?Cs==="connected"?297:257:44)),Ve=window.innerWidth-20-337;B=Math.max(Ce,Math.min(Ve,B)),q=Math.max(20,Math.min(window.innerHeight-44-20,q)),(B!==rn.x||q!==rn.y)&&Vs({x:B,y:q})};return R(),window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[rn,j,Cs]),_.useEffect(()=>{const R=P=>{const K=P.target,E=K.tagName==="INPUT"||K.tagName==="TEXTAREA"||K.isContentEditable;if(P.key==="Escape"){if(De){xt?yt(null):ei();return}if(Cn){ds(!1);return}if($n.length>0){uo([]);return}X||j&&(Xn(),M(!1))}if((P.metaKey||P.ctrlKey)&&P.shiftKey&&(P.key==="f"||P.key==="F")){P.preventDefault(),Xn(),j?$():M(!0);return}if(!(E||P.metaKey||P.ctrlKey)&&((P.key==="p"||P.key==="P")&&(P.preventDefault(),Xn(),N()),(P.key==="l"||P.key==="L")&&(P.preventDefault(),Xn(),Cn&&ds(!1),je&&Je(!1),X&&dt(),De?ei():rt(!0)),(P.key==="h"||P.key==="H")&&T.length>0&&(P.preventDefault(),Xn(),A(B=>!B)),(P.key==="c"||P.key==="C")&&(T.length>0||Qe.length>0||it)&&(P.preventDefault(),Xn(),Qt()),(P.key==="x"||P.key==="X")&&(T.length>0||Qe.length>0||it)&&(P.preventDefault(),Xn(),zt(),Qe.length>0&&Bt([]),it&&_n(null)),P.key==="s"||P.key==="S")){const B=ra(Kt.webhookUrl)||ra(C||"");T.length>0&&B&&ce==="idle"&&(P.preventDefault(),Xn(),gt())}};return document.addEventListener("keydown",R),()=>document.removeEventListener("keydown",R)},[j,Cn,De,xt,Qe,it,X,T.length,Kt.webhookUrl,C,ce,gt,N,Qt,zt,$n]),!st||F)return null;const pn=T.length>0,Mn=T.filter(R=>!Vo.has(R.id)&&R.kind!=="placement"&&R.kind!=="rearrange"),Jn=Mn.length>0,Ns=T.filter(R=>Vo.has(R.id)),js=R=>{const q=R.x/100*window.innerWidth,oe=typeof R.y=="string"?parseFloat(R.y):R.y,xe={};window.innerHeight-oe-22-10<80&&(xe.top="auto",xe.bottom="calc(100% + 10px)");const Ve=q-200/2,Ze=10;if(Ve<Ze){const wt=Ze-Ve;xe.left=`calc(50% + ${wt}px)`}else if(Ve+200>window.innerWidth-Ze){const wt=Ve+200-(window.innerWidth-Ze);xe.left=`calc(50% - ${wt}px)`}return xe};return wl.createPortal(l.jsxs("div",{ref:me,style:{display:"contents"},"data-agentation-theme":Us?"dark":"light","data-agentation-accent":Kt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${Fe.toolbar}${k?` ${k}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:rn?{left:rn.x,top:rn.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${Fe.toolbarContainer} ${j?Fe.expanded:Fe.collapsed} ${Pi?Fe.entrance:""} ${W?Fe.hiding:""} ${!Kt.webhooksEnabled&&(ra(Kt.webhookUrl)||ra(C||""))?Fe.serverConnected:""}`,onClick:j?void 0:R=>{if(Ho.current){Ho.current=!1,R.preventDefault();return}M(!0)},onMouseDown:un,role:j?void 0:"button",tabIndex:j?-1:0,title:j?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${Fe.toggleContent} ${j?Fe.hidden:Fe.visible}`,children:[l.jsx(zk,{size:24}),Jn&&l.jsx("span",{className:`${Fe.badge} ${j?Fe.fadeOut:""} ${Pi?Fe.entrance:""}`,children:Mn.length})]}),l.jsxs("div",{className:`${Fe.controlsContent} ${j?Fe.visible:Fe.hidden} ${rn&&rn.y<100?Fe.tooltipBelow:""} ${Ye||je?Fe.tooltipsHidden:""} ${rs?Fe.tooltipsInSession:""}`,onMouseEnter:$o,onMouseLeave:ea,children:[l.jsxs("div",{className:`${Fe.buttonWrapper} ${rn&&rn.x<120?Fe.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:Fe.controlButton,onClick:R=>{R.stopPropagation(),Xn(),N()},"data-active":Z,children:l.jsx(Uk,{size:24,isPaused:Z})}),l.jsxs("span",{className:Fe.buttonTooltip,children:[Z?"Resume animations":"Pause animations",l.jsx("span",{className:Fe.shortcut,children:"P"})]})]}),l.jsxs("div",{className:Fe.buttonWrapper,children:[l.jsx("button",{className:`${Fe.controlButton} ${Us?"":Fe.light}`,onClick:R=>{R.stopPropagation(),Xn(),Cn&&ds(!1),je&&Je(!1),X&&dt(),De?ei():rt(!0)},"data-active":De,style:De&&at?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(Qk,{size:21})}),l.jsxs("span",{className:Fe.buttonTooltip,children:[De?"Exit layout mode":"Layout mode",l.jsx("span",{className:Fe.shortcut,children:"L"})]})]}),l.jsxs("div",{className:Fe.buttonWrapper,children:[l.jsx("button",{className:Fe.controlButton,onClick:R=>{R.stopPropagation(),Xn(),A(!O)},disabled:!pn||De,children:l.jsx(Hk,{size:24,isOpen:O})}),l.jsxs("span",{className:Fe.buttonTooltip,children:[O?"Hide markers":"Show markers",l.jsx("span",{className:Fe.shortcut,children:"H"})]})]}),l.jsxs("div",{className:Fe.buttonWrapper,children:[l.jsx("button",{className:`${Fe.controlButton} ${Ee?Fe.statusShowing:""}`,onClick:R=>{R.stopPropagation(),Xn(),Qt()},disabled:De&&at?Qe.length===0&&!((Rs=it==null?void 0:it.sections)!=null&&Rs.length):!pn&&hn.length===0&&Qe.length===0&&!((Os=it==null?void 0:it.sections)!=null&&Os.length),"data-active":Ee,children:l.jsx(Ik,{size:24,copied:Ee,tint:De&&at&&(Qe.length>0||(bn=it==null?void 0:it.sections)!=null&&bn.length)?"#f97316":void 0})}),l.jsxs("span",{className:Fe.buttonTooltip,children:[De&&at?"Copy layout":"Copy feedback",l.jsx("span",{className:Fe.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${Fe.buttonWrapper} ${Fe.sendButtonWrapper} ${j&&!Kt.webhooksEnabled&&(ra(Kt.webhookUrl)||ra(C||""))?Fe.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${Fe.controlButton} ${ce==="sent"||ce==="failed"?Fe.statusShowing:""}`,onClick:R=>{R.stopPropagation(),Xn(),gt()},disabled:!pn||!ra(Kt.webhookUrl)&&!ra(C||"")||ce==="sending","data-no-hover":ce==="sent"||ce==="failed",tabIndex:ra(Kt.webhookUrl)||ra(C||"")?0:-1,children:[l.jsx(Pk,{size:24,state:ce}),pn&&ce==="idle"&&l.jsx("span",{className:Fe.buttonBadge,children:T.length})]}),l.jsxs("span",{className:Fe.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:Fe.shortcut,children:"S"})]})]}),l.jsxs("div",{className:Fe.buttonWrapper,children:[l.jsx("button",{className:Fe.controlButton,onClick:R=>{R.stopPropagation(),Xn(),zt()},disabled:!pn&&hn.length===0&&Qe.length===0&&!((es=it==null?void 0:it.sections)!=null&&es.length),"data-danger":!0,children:l.jsx(Yk,{size:24})}),l.jsxs("span",{className:Fe.buttonTooltip,children:["Clear all",l.jsx("span",{className:Fe.shortcut,children:"X"})]})]}),l.jsxs("div",{className:Fe.buttonWrapper,children:[l.jsx("button",{className:Fe.controlButton,onClick:R=>{R.stopPropagation(),Xn(),De&&ei(),Je(!je)},children:l.jsx(Vk,{size:24})}),g&&Cs!=="disconnected"&&l.jsx("span",{className:`${Fe.mcpIndicator} ${Fe[Cs]} ${je?Fe.hidden:""}`,title:Cs==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:Fe.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:Fe.divider}),l.jsxs("div",{className:`${Fe.buttonWrapper} ${rn&&typeof window<"u"&&rn.x>window.innerWidth-120?Fe.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:Fe.controlButton,onClick:R=>{R.stopPropagation(),Xn(),$()},children:l.jsx(Wk,{size:24})}),l.jsxs("span",{className:Fe.buttonTooltip,children:["Exit",l.jsx("span",{className:Fe.shortcut,children:"Esc"})]})]})]}),l.jsx(jj,{visible:De&&j,activeType:xt,onSelect:R=>{yt(xt===R?null:R)},isDarkMode:Us,sectionCount:(ys=it==null?void 0:it.sections.length)!=null?ys:0,onDetectSections:()=>{var oe,xe;const R=zj(),P=(oe=it==null?void 0:it.sections)!=null?oe:[],K=new Set(P.map(Ce=>Ce.selector)),E=R.filter(Ce=>!K.has(Ce.selector)),B=[...P,...E],q=[...(xe=it==null?void 0:it.originalOrder)!=null?xe:[],...E.map(Ce=>Ce.id)];_n({sections:B,originalOrder:q,detectedAt:Date.now()})},placementCount:Qe.length,onClearPlacements:()=>{Hn(R=>R+1),Bs(R=>R+1),Vt(()=>{_n({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:at,onBlankCanvasChange:R=>{const P={sections:[],originalOrder:[],detectedAt:Date.now()};R?(go.current={rearrange:it,placements:Qe},_n(Hs.current.rearrange||P),Bt(Hs.current.placements),yt(null)):(Hs.current={rearrange:it,placements:Qe},_n(go.current.rearrange||P),Bt(go.current.placements)),jt(R)},wireframePurpose:an,onWireframePurposeChange:On,Tooltip:Er,onDragStart:(R,P)=>{var wt;P.preventDefault();const K=St[R];let E=null,B=!1;const q=P.clientX,oe=P.clientY,xe=P.target.closest("[data-feedback-toolbar]"),Ce=(wt=xe==null?void 0:xe.getBoundingClientRect().top)!=null?wt:window.innerHeight,Ve=Dt=>{const ft=Dt.clientX-q,ut=Dt.clientY-oe;if(!B&&(Math.abs(ft)>4||Math.abs(ut)>4)&&(B=!0,E=document.createElement("div"),E.className=`${Be.dragPreview}${at?` ${Be.dragPreviewWireframe}`:""}`,document.body.appendChild(E)),!E)return;const tn=Math.max(0,Ce-Dt.clientY),dn=Math.min(1,tn/180),yn=1-Math.pow(1-dn,2),vn=28,Nn=20,Ut=Math.min(140,K.width*.18),Xt=Math.min(90,K.height*.18),xs=vn+(Ut-vn)*yn,Rn=Nn+(Xt-Nn)*yn;E.style.width=`${xs}px`,E.style.height=`${Rn}px`,E.style.left=`${Dt.clientX-xs/2}px`,E.style.top=`${Dt.clientY-Rn/2}px`,E.style.opacity=`${.5+.5*yn}`,E.textContent=yn>.25?R:""},Ze=Dt=>{if(window.removeEventListener("mousemove",Ve),window.removeEventListener("mouseup",Ze),E&&document.body.removeChild(E),B){const ft=K.width,ut=K.height,tn=window.scrollY,dn=Math.max(0,Dt.clientX-ft/2),yn=Math.max(0,Dt.clientY+tn-ut/2),vn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:R,x:dn,y:yn,width:ft,height:ut,scrollY:tn,timestamp:Date.now()};Bt(Nn=>[...Nn,vn]),yt(null),Ls.current=new Set,Gn(Nn=>Nn+1)}};window.addEventListener("mousemove",Ve),window.addEventListener("mouseup",Ze)}}),l.jsx(FM,{settings:Kt,onSettingsChange:R=>$i(P=>({...P,...R})),isDarkMode:Us,onToggleTheme:hs,isDevMode:li,connectionStatus:Cs,endpoint:g,isVisible:qe,toolbarNearBottom:!!rn&&rn.y<230,settingsPage:he,onSettingsPageChange:Le,onHideToolbar:Hi})]})}),(De||mt)&&l.jsx("div",{className:`${Be.blankCanvas} ${Rt?Be.visible:""} ${Ft?Be.gridActive:""}`,style:{"--canvas-opacity":Ht},"data-feedback-toolbar":!0}),De&&at&&Rt&&l.jsxs("div",{className:Be.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:Be.wireframeOpacityRow,children:[l.jsx("span",{className:Be.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:Be.wireframeOpacitySlider,min:0,max:1,step:.01,value:Ht,onChange:R=>Gt(Number(R.target.value))})]}),l.jsxs("div",{className:Be.wireframeNoticeTitleRow,children:[l.jsx("span",{className:Be.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:Be.wireframeNoticeDivider}),l.jsx("button",{className:Be.wireframeStartOver,onClick:()=>{Hn(R=>R+1),_n({sections:[],originalOrder:[],detectedAt:Date.now()}),Hs.current={rearrange:null,placements:[]},On(""),ud(Ot)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(De||mt)&&l.jsx(vj,{placements:Qe,onChange:Bt,activeComponent:mt?null:xt,onActiveComponentChange:yt,isDarkMode:Us,exiting:mt,onInteractionChange:mn,passthrough:!xt,extraSnapRects:it==null?void 0:it.sections.map(R=>R.currentRect),deselectSignal:qt,clearSignal:Ss,wireframe:at,onSelectionChange:(R,P)=>{Ls.current=R,P||(An.current=new Set,_s(K=>K+1))},onDragMove:(R,P)=>{const K=An.current;if(!(!K.size||!it)){if(!qn.current){qn.current=new Map;for(const E of it.sections)K.has(E.id)&&qn.current.set(E.id,{x:E.currentRect.x,y:E.currentRect.y})}for(const E of it.sections){if(!K.has(E.id)||!qn.current.get(E.id))continue;const q=document.querySelector(`[data-rearrange-section="${E.id}"]`);q&&(q.style.transform=`translate(${R}px, ${P}px)`)}}},onDragEnd:(R,P,K)=>{const E=An.current,B=qn.current;if(qn.current=null,!(!E.size||!it||!B)){for(const q of E){const oe=document.querySelector(`[data-rearrange-section="${q}"]`);oe&&(oe.style.transform="")}K&&_n(q=>q&&{...q,sections:q.sections.map(oe=>{const xe=B.get(oe.id);return xe?{...oe,currentRect:{...oe.currentRect,x:Math.max(0,xe.x+R),y:Math.max(0,xe.y+P)}}:oe})})}}}),(De||mt)&&it&&l.jsx(Pj,{rearrangeState:it,onChange:_n,isDarkMode:Us,exiting:mt,blankCanvas:at,extraSnapRects:Qe.map(R=>({x:R.x,y:R.y,width:R.width,height:R.height})),clearSignal:zn,deselectSignal:Tn,onSelectionChange:(R,P)=>{An.current=R,P||(Ls.current=new Set,Gn(K=>K+1))},onDragMove:(R,P)=>{const K=Ls.current;if(K.size){if(!qn.current){qn.current=new Map;for(const E of Qe)K.has(E.id)&&qn.current.set(E.id,{x:E.x,y:E.y})}for(const E of K){const B=document.querySelector(`[data-design-placement="${E}"]`);B&&(B.style.transform=`translate(${R}px, ${P}px)`)}}},onDragEnd:(R,P,K)=>{const E=Ls.current,B=qn.current;if(qn.current=null,!(!E.size||!B)){for(const q of E){const oe=document.querySelector(`[data-design-placement="${q}"]`);oe&&(oe.style.transform="")}K&&Bt(q=>q.map(oe=>{const xe=B.get(oe.id);return xe?{...oe,x:Math.max(0,xe.x+R),y:Math.max(0,xe.y+P)}:oe}))}}}),l.jsx("canvas",{ref:xo,className:`${Fe.drawCanvas} ${Cn?Fe.active:""}`,style:{opacity:wi?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:Fe.markersLayer,"data-feedback-toolbar":!0,children:[se&&Mn.filter(R=>!R.isFixed).map((R,P,K)=>l.jsx(Ex,{annotation:R,globalIndex:Mn.findIndex(E=>E.id===R.id),layerIndex:P,layerSize:K.length,isExiting:we,isClearing:Ae,isAnimated:Uo.has(R.id),isHovered:!we&&et===R.id,isDeleting:ot===R.id,isEditingAny:!!ie,renumberFrom:on,markerClickBehavior:Kt.markerClickBehavior,tooltipStyle:js(R),onHoverEnter:E=>!we&&E.id!==ko.current&&vt(E),onHoverLeave:()=>vt(null),onClick:E=>Kt.markerClickBehavior==="delete"?At(E.id):ne(E),onContextMenu:ne},R.id)),se&&!we&&Ns.filter(R=>!R.isFixed).map(R=>l.jsx(Tx,{annotation:R},R.id))]}),l.jsxs("div",{className:Fe.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[se&&Mn.filter(R=>R.isFixed).map((R,P,K)=>l.jsx(Ex,{annotation:R,globalIndex:Mn.findIndex(E=>E.id===R.id),layerIndex:P,layerSize:K.length,isExiting:we,isClearing:Ae,isAnimated:Uo.has(R.id),isHovered:!we&&et===R.id,isDeleting:ot===R.id,isEditingAny:!!ie,renumberFrom:on,markerClickBehavior:Kt.markerClickBehavior,tooltipStyle:js(R),onHoverEnter:E=>!we&&E.id!==ko.current&&vt(E),onHoverLeave:()=>vt(null),onClick:E=>Kt.markerClickBehavior==="delete"?At(E.id):ne(E),onContextMenu:ne},R.id)),se&&!we&&Ns.filter(R=>R.isFixed).map(R=>l.jsx(Tx,{annotation:R,fixed:!0},R.id))]}),j&&l.jsxs("div",{className:Fe.overlay,"data-feedback-toolbar":!0,style:X||ie?{zIndex:99999}:void 0,children:[(J==null?void 0:J.rect)&&!X&&!pt&&!en&&l.jsx("div",{className:`${Fe.hoverHighlight} ${Fe.enter}`,style:{left:J.rect.left,top:J.rect.top,width:J.rect.width,height:J.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),$n.filter(R=>document.contains(R.element)).map((R,P)=>{const K=R.element.getBoundingClientRect(),E=$n.length>1;return l.jsx("div",{className:E?Fe.multiSelectOutline:Fe.singleSelectOutline,style:{position:"fixed",left:K.left,top:K.top,width:K.width,height:K.height,...E?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},P)}),et&&!X&&(()=>{var B;const R=T.find(q=>q.id===et);if(!(R!=null&&R.boundingBox))return null;if((B=R.elementBoundingBoxes)!=null&&B.length)return _t.length>0?_t.filter(q=>document.contains(q)).map((q,oe)=>{const xe=q.getBoundingClientRect();return l.jsx("div",{className:`${Fe.multiSelectOutline} ${Fe.enter}`,style:{left:xe.left,top:xe.top,width:xe.width,height:xe.height}},`hover-outline-live-${oe}`)}):R.elementBoundingBoxes.map((q,oe)=>l.jsx("div",{className:`${Fe.multiSelectOutline} ${Fe.enter}`,style:{left:q.x,top:q.y-ct,width:q.width,height:q.height}},`hover-outline-${oe}`));const P=$t&&document.contains($t)?$t.getBoundingClientRect():null,K=P?{x:P.left,y:P.top,width:P.width,height:P.height}:{x:R.boundingBox.x,y:R.isFixed?R.boundingBox.y:R.boundingBox.y-ct,width:R.boundingBox.width,height:R.boundingBox.height},E=R.isMultiSelect;return l.jsx("div",{className:`${E?Fe.multiSelectOutline:Fe.singleSelectOutline} ${Fe.enter}`,style:{left:K.x,top:K.y,width:K.width,height:K.height,...E?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),J&&!X&&!pt&&!en&&l.jsxs("div",{className:`${Fe.hoverTooltip} ${Fe.enter}`,style:{left:Math.max(8,Math.min(I.x,window.innerWidth-100)),top:Math.max(I.y-(J.reactComponents?48:32),8)},children:[J.reactComponents&&l.jsx("div",{className:Fe.hoverReactPath,children:J.reactComponents}),l.jsx("div",{className:Fe.hoverElementName,children:J.elementName})]}),X&&l.jsxs(l.Fragment,{children:[(Mo=X.multiSelectElements)!=null&&Mo.length?X.multiSelectElements.filter(R=>document.contains(R)).map((R,P)=>{const K=R.getBoundingClientRect();return l.jsx("div",{className:`${Fe.multiSelectOutline} ${Un?Fe.exit:Fe.enter}`,style:{left:K.left,top:K.top,width:K.width,height:K.height}},`pending-multi-${P}`)}):X.targetElement&&document.contains(X.targetElement)?(()=>{const R=X.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${Fe.singleSelectOutline} ${Un?Fe.exit:Fe.enter}`,style:{left:R.left,top:R.top,width:R.width,height:R.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():X.boundingBox&&l.jsx("div",{className:`${X.isMultiSelect?Fe.multiSelectOutline:Fe.singleSelectOutline} ${Un?Fe.exit:Fe.enter}`,style:{left:X.boundingBox.x,top:X.boundingBox.y-ct,width:X.boundingBox.width,height:X.boundingBox.height,...X.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const R=X.x,P=X.isFixed?X.y:X.y-ct;return l.jsxs(l.Fragment,{children:[l.jsx(OM,{x:R,y:P,isMultiSelect:X.isMultiSelect,isExiting:Un}),l.jsx(Od,{ref:ho,element:X.element,selectedText:X.selectedText,computedStyles:X.computedStylesObj,placeholder:X.element==="Area selection"?"What should change in this area?":X.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Xe,onCancel:dt,isExiting:Un,lightMode:!Us,accentColor:X.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,R/100*window.innerWidth)),...P>window.innerHeight-290?{bottom:window.innerHeight-P+20}:{top:P+20}}})]})})()]}),ie&&l.jsxs(l.Fragment,{children:[(ta=ie.elementBoundingBoxes)!=null&&ta.length?Ge.length>0?Ge.filter(R=>document.contains(R)).map((R,P)=>{const K=R.getBoundingClientRect();return l.jsx("div",{className:`${Fe.multiSelectOutline} ${Fe.enter}`,style:{left:K.left,top:K.top,width:K.width,height:K.height}},`edit-multi-live-${P}`)}):ie.elementBoundingBoxes.map((R,P)=>l.jsx("div",{className:`${Fe.multiSelectOutline} ${Fe.enter}`,style:{left:R.x,top:R.y-ct,width:R.width,height:R.height}},`edit-multi-${P}`)):(()=>{const R=nt&&document.contains(nt)?nt.getBoundingClientRect():null,P=R?{x:R.left,y:R.top,width:R.width,height:R.height}:ie.boundingBox?{x:ie.boundingBox.x,y:ie.isFixed?ie.boundingBox.y:ie.boundingBox.y-ct,width:ie.boundingBox.width,height:ie.boundingBox.height}:null;return P?l.jsx("div",{className:`${ie.isMultiSelect?Fe.multiSelectOutline:Fe.singleSelectOutline} ${Fe.enter}`,style:{left:P.x,top:P.y,width:P.width,height:P.height,...ie.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(Od,{ref:Jo,element:ie.element,selectedText:ie.selectedText,computedStyles:Rj(ie.computedStyles),placeholder:"Edit your feedback...",initialValue:ie.comment,submitLabel:"Save",onSubmit:Jt,onCancel:ht,onDelete:()=>At(ie.id),isExiting:ui,lightMode:!Us,accentColor:ie.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const R=ie.isFixed?ie.y:ie.y-ct;return{left:Math.max(160,Math.min(window.innerWidth-160,ie.x/100*window.innerWidth)),...R>window.innerHeight-290?{bottom:window.innerHeight-R+20}:{top:R+20}}})()})]}),en&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:ks,className:Fe.dragSelection}),l.jsx("div",{ref:eo,className:Fe.highlightsContainer})]})]})]}),document.body)}var qM=Object.freeze({}),KM=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var v;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[C,k]of Object.entries(h))p[C]=this.normalizePreservedValue(c.values[C],k,d.get(C));this.initTransitionModes(i,"",p);for(const[C,k]of Object.entries(c.values)){if(!C.endsWith(".__mode"))continue;const j=C.slice(0,-7),M=d.get(j);(M==null?void 0:M.type)==="transition"&&(p[C]=k)}const y={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,y),this.snapshots.set(t,{...p});const g=(v=this.baseValues.get(t))!=null?v:{},b={};for(const[C,k]of Object.entries(h))b[C]=this.normalizePreservedValue(g[C],k,d.get(C));for(const[C,k]of Object.entries(p))C.endsWith(".__mode")&&(b[C]=k);this.baseValues.set(t,b),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:qM}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),y=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:y});else if(typeof d=="number"){const{min:g,max:b,step:v}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:g,max:b,step:v,shortcut:y})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:y});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const g=d,b="_collapsed"in g?!g._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:b,children:this.parseConfig(g,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const y=h.options[0],g=typeof y=="string"?y:y.value;i[p]=(a=h.default)!=null?a:g}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},sn=new KM;function QM(t,n,i){const a=_.useId(),c=`${t}-${a}`,u=_.useRef(n),d=JSON.stringify(n);u.current=n;const h=_.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=_.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const y=JSON.stringify(i==null?void 0:i.shortcuts);_.useEffect(()=>(sn.registerPanel(c,t,u.current,p.current),()=>sn.unregisterPanel(c)),[c,t]);const g=_.useRef(!1);_.useEffect(()=>{if(!g.current){g.current=!0;return}sn.updatePanel(c,t,u.current,p.current)},[c,t,d,y]),_.useEffect(()=>sn.subscribeActions(c,v=>{var C;(C=h.current)==null||C.call(h,v)}),[c]);const b=_.useSyncExternalStore(v=>sn.subscribe(c,v),()=>sn.getValues(c),()=>sn.getValues(c));return u2(n,b,"")}function u2(t,n,i){var c,u,d,h,p,y,g,b,v,C;const a={};for(const[k,j]of Object.entries(t)){if(k==="_collapsed")continue;const M=i?`${i}.${k}`:k;if(Array.isArray(j)&&j.length<=4&&typeof j[0]=="number")a[k]=(c=n[M])!=null?c:j[0];else if(typeof j=="number"||typeof j=="boolean"||typeof j=="string")a[k]=(u=n[M])!=null?u:j;else if(ZM(j)||JM(j))a[k]=(d=n[M])!=null?d:j;else if(e7(j))a[k]=(h=n[M])!=null?h:j;else if(t7(j)){const T=(p=j.default)!=null?p:o7(j.options);a[k]=(y=n[M])!=null?y:T}else n7(j)?a[k]=(b=(g=n[M])!=null?g:j.default)!=null?b:"#000000":s7(j)?a[k]=(C=(v=n[M])!=null?v:j.default)!=null?C:"":typeof j=="object"&&j!==null&&(a[k]=u2(j,n,M))}return a}function jl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function ZM(t){return jl(t,"spring")}function JM(t){return jl(t,"easing")}function e7(t){return jl(t,"action")}function t7(t){return jl(t,"select")&&"options"in t&&Array.isArray(t.options)}function n7(t){return jl(t,"color")}function s7(t){return jl(t,"text")}function o7(t){const n=t[0];return typeof n=="string"?n:n.value}function cp(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function jd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(cp(n)))}function pc(t,n){var d,h,p,y;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(y=t.step)!=null?y:1}function _c(t,n,i,a,c){var y,g;const u=sn.getValue(t,n),d=(y=i.min)!=null?y:0,h=(g=i.max)!=null?g:1,p=Math.max(d,Math.min(h,u+c*a));sn.updateValue(t,n,jd(p,a))}function i7(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function md(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function jm(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function d2(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=d2(i.children,n);if(a)return a}}return null}var pd=4;function a7(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function r7(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=a7(n);return t.key?`${f2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function l7(t){return t.key?`${f2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function f2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var h2=_.createContext({activePanelId:null,activePath:null});function c7({children:t}){const[n,i]=_.useState({activePanelId:null,activePath:null}),a=_.useRef(new Set),c=_.useRef(!1),u=_.useRef(null),d=_.useRef(0),h=_.useCallback(p=>{var y;for(const g of a.current){const b=sn.getPanels();for(const v of b)for(const[C,k]of Object.entries(v.shortcuts)){if(!k.key||k.key.toLowerCase()!==g||((y=k.interaction)!=null?y:"scroll")!==p)continue;const j=d2(v.controls,C);if(j&&j.type==="slider")return{panelId:v.id,path:C,control:j,shortcut:k}}}return null},[]);return _.useEffect(()=>{const p=j=>{if(md())return;const M=j.key.toLowerCase();if((M==="arrowleft"||M==="arrowright"||M==="arrowup"||M==="arrowdown")&&a.current.size>0){const A=h("scroll")||h("drag")||h("move");if(A&&A.control.type==="slider"){j.preventDefault();const F=M==="arrowright"||M==="arrowup"?1:-1,U=pc(A.control,A.shortcut);_c(A.panelId,A.path,A.control,U,F);return}}const T=a.current.has(M);a.current.add(M);const L=jm(j),O=sn.resolveShortcutTarget(M,L);if(O&&(i({activePanelId:O.panelId,activePath:O.path}),!T&&O.control.type==="toggle")){const A=sn.getValue(O.panelId,O.path);sn.updateValue(O.panelId,O.path,!A)}T||(u.current=null,d.current=0)},y=j=>{const M=j.key.toLowerCase();if(a.current.delete(M),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let T=!1;for(const L of a.current){const O=jm(j),A=sn.resolveShortcutTarget(L,O);if(A){i({activePanelId:A.panelId,activePath:A.path}),T=!0;break}}T||i({activePanelId:null,activePath:null})}},g=j=>{var L,O;if(md())return;const M=jm(j);if(a.current.size>0)for(const A of a.current){const F=sn.resolveShortcutTarget(A,M);if(!F)continue;const{panelId:U,path:W,control:Q}=F;if(((O=(L=Q.shortcut)==null?void 0:L.interaction)!=null?O:"scroll")!=="scroll"||Q.type!=="slider")continue;j.preventDefault();const se=pc(Q,Q.shortcut),ae=j.deltaY>0?-1:1;_c(U,W,Q,se,ae);return}const T=sn.resolveScrollOnlyTargets();for(const{panelId:A,path:F,control:U,shortcut:W}of T){if(U.type!=="slider")continue;j.preventDefault();const Q=pc(U,W),me=j.deltaY>0?-1:1;_c(A,F,U,Q,me);return}},b=j=>{if(md()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=j.clientX,d.current=0,j.preventDefault())},v=()=>{c.current=!1,u.current=null,d.current=0},C=j=>{if(md()||a.current.size===0)return;if(c.current){const T=h("drag");if(T&&u.current!==null){const L=j.clientX-u.current;u.current=j.clientX,d.current+=L;const O=pc(T.control,T.shortcut),A=Math.trunc(d.current/pd);A!==0&&(d.current-=A*pd,_c(T.panelId,T.path,T.control,O,A))}return}const M=h("move");if(M){if(u.current===null){u.current=j.clientX;return}const T=j.clientX-u.current;u.current=j.clientX,d.current+=T;const L=pc(M.control,M.shortcut),O=Math.trunc(d.current/pd);O!==0&&(d.current-=O*pd,_c(M.panelId,M.path,M.control,L,O))}},k=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",y),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("mousedown",b),window.addEventListener("mouseup",v),window.addEventListener("mousemove",C),window.addEventListener("blur",k),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",y),window.removeEventListener("wheel",g),window.removeEventListener("mousedown",b),window.removeEventListener("mouseup",v),window.removeEventListener("mousemove",C),window.removeEventListener("blur",k)}},[h]),l.jsx(h2.Provider,{value:n,children:t})}var qp="M6 9.5L12 15.5L18 9.5",u7="M5 12.75L10 19L19 5",Mm={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},d7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],f7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Rx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Id({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=_.useState(i),[y,g]=_.useState(!i),b=_.useRef(null),[v,C]=_.useState(void 0),[k,j]=_.useState(typeof window<"u"?window.innerHeight:800);_.useEffect(()=>{if(!a)return;const L=()=>j(window.innerHeight);return window.addEventListener("resize",L),()=>window.removeEventListener("resize",L)},[a]),_.useEffect(()=>{const L=b.current;if(!L)return;const O=new ResizeObserver(()=>{if(h){const A=L.offsetHeight;C(F=>F===A?F:A)}});return O.observe(L),()=>O.disconnect()},[h]);const M=()=>{if(c&&a)return;const L=!h;p(L),g(!L),u==null||u(L)},T=l.jsxs("div",{ref:a?b:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:M,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Rx.path,fill:"currentColor"}),Rx.circles.map((L,O)=>l.jsx("circle",{cx:L.cx,cy:L.cy,r:L.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},O))]}),!a&&l.jsx(qo.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:qp})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:L=>L.stopPropagation(),children:d})]}),l.jsx(Fd,{initial:!1,children:h&&l.jsx(qo.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:T});const L=h?{width:280,height:v!==void 0?Math.min(v+10,k-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(qo.div,{className:"dialkit-panel-inner",style:L,onClick:h?void 0:M,"data-collapsed":y,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:T})}return T}var h7=3,m7=32,p7=200,_7=8;function zo({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var st;const y=_.useRef(null),g=_.useRef(null),b=_.useRef(null),v=_.useRef(null),C=_.useRef(null),[k,j]=_.useState(!1),[M,T]=_.useState(!1),[L,O]=_.useState(!1),[A,F]=_.useState(!1),[U,W]=_.useState(!1),[Q,me]=_.useState(!1),[se,ae]=_.useState(""),we=_.useRef(null),He=_.useRef(null),J=_.useRef(!0),fe=_.useRef(null),I=_.useRef(null),ue=_.useRef(1),X=(n-a)/(c-a)*100,pe=k||L,Ee=tp(X),H=Ju(Ee,V=>`${V}%`),ce=Ju(Ee,V=>`max(5px, calc(${V}% - 9px))`),ee=tp(0),le=Ju(ee,V=>`calc(100% + ${Math.abs(V)}px)`),ge=Ju(ee,V=>V<0?V:0);_.useEffect(()=>{!k&&!fe.current&&Ee.jump(X)},[X,k,Ee]);const Ae=_.useCallback(V=>{const Z=I.current;if(!Z)return n;const je=(V-Z.left)/ue.current,Je=y.current?y.current.offsetWidth:Z.width,qe=Math.max(0,Math.min(1,je/Je)),Te=a+qe*(c-a);return Math.max(a,Math.min(c,Te))},[a,c,n]),ze=_.useCallback(V=>(V-a)/(c-a)*100,[a,c]),et=_.useCallback((V,Z)=>{const be=I.current;if(!be)return 0;const je=Z<0?be.left-V:V-be.right,Je=Math.max(0,je-m7);return Z*_7*Math.sqrt(Math.min(Je/p7,1))},[]),$e=_.useCallback(V=>{if(!Q&&(V.preventDefault(),V.target.setPointerCapture(V.pointerId),He.current={x:V.clientX,y:V.clientY},J.current=!0,j(!0),y.current)){I.current=y.current.getBoundingClientRect();const Z=y.current.offsetWidth;ue.current=I.current.width/Z}},[Q]),$t=_.useCallback(V=>{if(!k||!He.current)return;const Z=V.clientX-He.current.x,be=V.clientY-He.current.y,je=Math.sqrt(Z*Z+be*be);if(J.current&&je>h7&&(J.current=!1,T(!0)),!J.current){const Je=I.current;Je&&(V.clientX<Je.left?ee.jump(et(V.clientX,-1)):V.clientX>Je.right?ee.jump(et(V.clientX,1)):ee.jump(0));const qe=Ae(V.clientX),Te=ze(qe);fe.current&&(fe.current.stop(),fe.current=null),Ee.jump(Te),i(jd(qe,u))}},[k,Ae,ze,i,Ee,ee,et]),Nt=_.useCallback(V=>{if(k){if(J.current){const Z=Ae(V.clientX),je=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((Z-a)/u)*u)):i7(Z,a,c),Je=ze(je);fe.current&&fe.current.stop(),fe.current=q1(Ee,Je,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{fe.current=null}}),i(jd(je,u))}ee.get()!==0&&q1(ee,0,{type:"spring",visualDuration:.35,bounce:.15}),j(!1),T(!1),He.current=null}},[k,Ae,ze,i,a,c,Ee,ee]);_.useEffect(()=>(A&&!Q&&!U?we.current=setTimeout(()=>{W(!0)},800):!A&&!Q&&(we.current&&(clearTimeout(we.current),we.current=null),W(!1)),()=>{we.current&&clearTimeout(we.current)}),[A,Q,U]),_.useEffect(()=>{Q&&b.current&&(b.current.focus(),b.current.select())},[Q]);const _t=V=>{ae(V.target.value)},tt=()=>{const V=parseFloat(se);if(!isNaN(V)){const Z=Math.max(a,Math.min(c,V));i(jd(Z,u))}me(!1),F(!1),W(!1)},ot=V=>{U&&(V.stopPropagation(),V.preventDefault(),me(!0),ae(n.toFixed(cp(u))))},Wt=V=>{V.key==="Enter"?tt():V.key==="Escape"&&(me(!1),F(!1))},on=()=>{tt()},Ie=n.toFixed(cp(u)),ie=8,We=10,nt=10;let Se=30,Ge=78;const lt=(st=y.current)==null?void 0:st.offsetWidth;lt&&lt>0&&(v.current&&(Se=(We+v.current.offsetWidth+ie)/lt*100),C.current&&(Ge=(lt-nt-C.current.offsetWidth-ie)/lt*100));const ct=X<Se||X>Ge,kt=pe?ct?.1:M?.9:.5:0,pt=(c-a)/u,It=pt<=10?Array.from({length:pt-1},(V,Z)=>{const be=(Z+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${be}%`}},Z)}):Array.from({length:9},(V,Z)=>{const be=(Z+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${be}%`}},Z)});return l.jsx("div",{ref:y,className:"dialkit-slider-wrapper",children:l.jsxs(qo.div,{ref:g,className:`dialkit-slider ${pe?"dialkit-slider-active":""}`,onPointerDown:$e,onPointerMove:$t,onPointerUp:Nt,onMouseEnter:()=>O(!0),onMouseLeave:()=>O(!1),style:{width:le,x:ge},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:It}),l.jsx(qo.div,{className:"dialkit-slider-fill",style:{width:H}}),l.jsx(qo.div,{className:"dialkit-slider-handle",style:{left:ce,y:"-50%"},animate:{opacity:kt,scaleX:pe?1:.25,scaleY:pe&&ct?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:v,className:"dialkit-slider-label",children:[t,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:r7(h)})]}),Q?l.jsx("input",{ref:b,type:"text",className:"dialkit-slider-input",value:se,onChange:_t,onKeyDown:Wt,onBlur:on,onClick:V=>V.stopPropagation(),onMouseDown:V=>V.stopPropagation()}):l.jsx("span",{ref:C,className:`dialkit-slider-value ${U?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>F(!0),onMouseLeave:()=>F(!1),onClick:ot,onMouseDown:V=>U&&V.stopPropagation(),style:{cursor:U?"text":"default"},children:Ie})]})})}function Kp({options:t,value:n,onChange:i}){const a=_.useRef(null),c=_.useRef(!1),[u,d]=_.useState(null),h=_.useCallback(()=>{const y=a.current;if(!y)return;const g=y.querySelector('[data-active="true"]');g&&d({left:g.offsetLeft,width:g.offsetWidth})},[]);_.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(y=>{const g=n===y.value;return l.jsx("button",{onClick:()=>i(y.value),className:"dialkit-segmented-button","data-active":String(g),children:y.label},y.value)})]})}function g7({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:l7(a)})]}),l.jsx(Kp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function y7(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const y=1;for(let g=0;g<=100;g++){const b=g*d;c.push([b,h]);const v=-t*(h-y),C=-n*p,k=(v+C)/i;p+=k*d,h+=p*d}return c}function m2({spring:t,isSimpleMode:n}){var j,M,T,L,O;let c,u,d;if(n){const A=(j=t.visualDuration)!=null?j:.3,F=(M=t.bounce)!=null?M:.2;d=1,c=2*Math.PI/A,c=Math.pow(c,2),u=2*(1-F)*Math.sqrt(c*d)}else c=(T=t.stiffness)!=null?T:400,u=(L=t.damping)!=null?L:17,d=(O=t.mass)!=null?O:1;const h=2,p=y7(c,u,d,h),y=p.map(([,A])=>A),g=Math.min(...y),v=Math.max(...y)-g,C=p.map(([A,F],U)=>{const W=A/h*256,me=140-((F-g)/(v||1)*140*.6+140*.2);return`${U===0?"M":"L"} ${W} ${me}`}).join(" "),k=[];for(let A=1;A<4;A++){const F=64*A,U=140/4*A;k.push(l.jsx("line",{x1:F,y1:0,x2:F,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${A}`),l.jsx("line",{x1:0,y1:U,x2:256,y2:U,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${A}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[k,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:C,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function x7({panelId:t,path:n,label:i,spring:a,onChange:c}){var g,b,v,C,k;const u=_.useSyncExternalStore(j=>sn.subscribe(t,j),()=>sn.getSpringMode(t,n),()=>sn.getSpringMode(t,n)),d=u==="simple",h=_.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=j=>{sn.updateSpringMode(t,n,j),c(j==="simple"?h.current.simple:h.current.advanced)},y=(j,M)=>{if(d){const{stiffness:T,damping:L,mass:O,...A}=a;c({...A,[j]:M})}else{const{visualDuration:T,bounce:L,...O}=a;c({...O,[j]:M})}};return l.jsx(Id,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(m2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Kp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(zo,{label:"Duration",value:(g=a.visualDuration)!=null?g:.3,onChange:j=>y("visualDuration",j),min:.1,max:1,step:.05,unit:"s"}),l.jsx(zo,{label:"Bounce",value:(b=a.bounce)!=null?b:.2,onChange:j=>y("bounce",j),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(zo,{label:"Stiffness",value:(v=a.stiffness)!=null?v:400,onChange:j=>y("stiffness",j),min:1,max:1e3,step:10}),l.jsx(zo,{label:"Damping",value:(C=a.damping)!=null?C:17,onChange:j=>y("damping",j),min:1,max:100,step:1}),l.jsx(zo,{label:"Mass",value:(k=a.mass)!=null?k:1,onChange:j=>y("mass",j),min:.1,max:10,step:.1})]})]})})}function b7({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(v,C)=>({x:a+(v+.5)*u,y:a+(1.5-C)*u}),h=d(0,0),p=d(1,1),y=d(n[0],n[1]),g=d(n[2],n[3]),b=`M ${h.x} ${h.y} C ${y.x} ${y.y}, ${g.x} ${g.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:b,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function v7({panelId:t,path:n,label:i,value:a,onChange:c}){var k,j,M,T,L;const u=_.useSyncExternalStore(O=>sn.subscribe(t,O),()=>sn.getTransitionMode(t,n),()=>sn.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=_.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const y=a.type==="spring"?a:p.current.simple,g=a.type==="easing"?a:p.current.easing,b=O=>{sn.updateTransitionMode(t,n,O),c(O==="easing"?p.current.easing:O==="simple"?p.current.simple:p.current.advanced)},v=(O,A)=>{if(h){const{stiffness:F,damping:U,mass:W,...Q}=y;c({...Q,[O]:A})}else{const{visualDuration:F,bounce:U,...W}=y;c({...W,[O]:A})}},C=(O,A)=>{const F=[...g.ease];F[O]=A,c({...g,ease:F})};return l.jsx(Id,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(b7,{easing:g}):l.jsx(m2,{spring:y,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Kp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:b})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(zo,{label:"x1",value:g.ease[0],onChange:O=>C(0,O),min:0,max:1,step:.01}),l.jsx(zo,{label:"y1",value:g.ease[1],onChange:O=>C(1,O),min:-1,max:2,step:.01}),l.jsx(zo,{label:"x2",value:g.ease[2],onChange:O=>C(2,O),min:0,max:1,step:.01}),l.jsx(zo,{label:"y2",value:g.ease[3],onChange:O=>C(3,O),min:-1,max:2,step:.01}),l.jsx(zo,{label:"Duration",value:g.duration,onChange:O=>c({...g,duration:O}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(S7,{ease:g.ease,onChange:O=>c({...g,ease:O})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(zo,{label:"Duration",value:(k=y.visualDuration)!=null?k:.3,onChange:O=>v("visualDuration",O),min:.1,max:1,step:.05,unit:"s"}),l.jsx(zo,{label:"Bounce",value:(j=y.bounce)!=null?j:.2,onChange:O=>v("bounce",O),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(zo,{label:"Stiffness",value:(M=y.stiffness)!=null?M:400,onChange:O=>v("stiffness",O),min:1,max:1e3,step:10}),l.jsx(zo,{label:"Damping",value:(T=y.damping)!=null?T:17,onChange:O=>v("damping",O),min:1,max:100,step:1}),l.jsx(zo,{label:"Mass",value:(L=y.mass)!=null?L:1,onChange:O=>v("mass",O),min:.1,max:10,step:.1})]})]})})}function Bx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function w7(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function S7({ease:t,onChange:n}){const[i,a]=_.useState(!1),[c,u]=_.useState(""),d=()=>{u(Bx(t)),a(!0)},h=()=>{const y=w7(c);y&&n(y),a(!1)},p=y=>{y.key==="Enter"&&y.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Bx(t),onChange:y=>u(y.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function C7({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function k7(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function j7(t){return t.map(n=>typeof n=="string"?{value:n,label:k7(n)}:n)}function M7({label:t,value:n,options:i,onChange:a}){var j;const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState(null),[g,b]=_.useState(null),v=j7(i),C=v.find(M=>M.value===n),k=_.useCallback(()=>{const M=d.current;if(!M)return;const T=M.getBoundingClientRect(),L=8+v.length*36,O=window.innerHeight-T.bottom-4,A=O<L&&T.top>O;b({top:A?T.top-4:T.bottom+4,left:T.left,width:T.width,above:A})},[v.length]);return _.useEffect(()=>{var T;const M=(T=d.current)==null?void 0:T.closest(".dialkit-root");y(M!=null?M:document.body)},[]),_.useEffect(()=>{c&&k()},[c,k]),_.useEffect(()=>{if(!c)return;const M=T=>{const L=T.target;d.current&&!d.current.contains(L)&&h.current&&!h.current.contains(L)&&u(!1)};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(j=C==null?void 0:C.label)!=null?j:n}),l.jsx(qo.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:qp})})]})]}),p&&wl.createPortal(l.jsx(Fd,{children:c&&g&&l.jsx(qo.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:g.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:g.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:g.left,width:g.width,...g.above?{bottom:window.innerHeight-g.top,transformOrigin:"bottom"}:{top:g.top,transformOrigin:"top"}},children:v.map(M=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(M.value===n),onClick:()=>{a(M.value),u(!1)},children:M.label},M.value))})}),p)]})}var E7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function T7({label:t,value:n,onChange:i}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useRef(null);_.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),E7.test(u)?i(u):d(n)}function y(g){g.key==="Enter"?p():g.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:g=>d(g.target.value),onBlur:p,onKeyDown:y,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var g;return(g=h.current)==null?void 0:g.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?A7(n):n.slice(0,7),onChange:g=>i(g.target.value)})]})]})}function A7(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function D7({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState({top:0,left:0,width:0}),g=n.length>0,b=n.find(T=>T.id===i),v=_.useCallback(()=>{var L;if(!g)return;const T=(L=d.current)==null?void 0:L.getBoundingClientRect();T&&y({top:T.bottom+4,left:T.left,width:T.width}),u(!0)},[g]),C=_.useCallback(()=>u(!1),[]),k=_.useCallback(()=>{c?C():v()},[c,v,C]);_.useEffect(()=>{if(!c)return;const T=L=>{var A,F;const O=L.target;(A=d.current)!=null&&A.contains(O)||(F=h.current)!=null&&F.contains(O)||C()};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[c,C]);const j=T=>{T?sn.loadPreset(t,T):sn.clearActivePreset(t),C()},M=(T,L)=>{T.stopPropagation(),sn.deletePreset(t,L)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:k,"data-open":String(c),"data-has-preset":String(!!b),"data-disabled":String(!g),children:[l.jsx("span",{className:"dialkit-preset-label",children:b?b.name:"Version 1"}),l.jsx(qo.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:g?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:qp})})]}),wl.createPortal(l.jsx(Fd,{children:c&&l.jsxs(qo.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>j(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(T=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(T.id===i),onClick:()=>j(T.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:T.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:L=>M(L,T.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f7.map((L,O)=>l.jsx("path",{d:L},O))})})]},T.id))]})}),document.body)]})}function N7({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useContext(h2);Object.keys(t.shortcuts).length>0;const p=_.useSyncExternalStore(M=>sn.subscribe(t.id,M),()=>sn.getValues(t.id),()=>sn.getValues(t.id)),y=sn.getPresets(t.id),g=sn.getActivePresetId(t.id),b=()=>{const M=y.length+2;sn.savePreset(t.id,`Version ${M}`)},v=()=>{const M=JSON.stringify(p,null,2),T=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${M}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(T),c(!0),setTimeout(()=>c(!1),1500)},C=M=>{var L,O,A;const T=p[M.path];switch(M.type){case"slider":return l.jsx(zo,{label:M.label,value:T,onChange:F=>sn.updateValue(t.id,M.path,F),min:M.min,max:M.max,step:M.step,shortcut:M.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===M.path},M.path);case"toggle":return l.jsx(g7,{label:M.label,checked:T,onChange:F=>sn.updateValue(t.id,M.path,F),shortcut:M.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===M.path},M.path);case"spring":return l.jsx(x7,{panelId:t.id,path:M.path,label:M.label,spring:T,onChange:F=>sn.updateValue(t.id,M.path,F)},M.path);case"transition":return l.jsx(v7,{panelId:t.id,path:M.path,label:M.label,value:T,onChange:F=>sn.updateValue(t.id,M.path,F)},M.path);case"folder":return l.jsx(Id,{title:M.label,defaultOpen:(L=M.defaultOpen)!=null?L:!0,children:(O=M.children)==null?void 0:O.map(C)},M.path);case"text":return l.jsx(C7,{label:M.label,value:T,onChange:F=>sn.updateValue(t.id,M.path,F),placeholder:M.placeholder},M.path);case"select":return l.jsx(M7,{label:M.label,value:T,options:(A=M.options)!=null?A:[],onChange:F=>sn.updateValue(t.id,M.path,F)},M.path);case"color":return l.jsx(T7,{label:M.label,value:T,onChange:F=>sn.updateValue(t.id,M.path,F)},M.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>sn.triggerAction(t.id,M.path),children:M.label},M.path);default:return null}},k=()=>t.controls.map(C),j=l.jsxs(l.Fragment,{children:[l.jsx(qo.button,{className:"dialkit-toolbar-add",onClick:b,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:d7.map((M,T)=>l.jsx("path",{d:M},T))})}),l.jsx(D7,{panelId:t.id,presets:y,activePresetId:g,onAdd:b}),l.jsx(qo.button,{className:"dialkit-toolbar-add",onClick:v,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Fd,{initial:!1,mode:"wait",children:a?l.jsx(qo.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:u7})},"check"):l.jsxs(qo.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:Mm.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:Mm.sparkle,fill:"currentColor"}),l.jsx("path",{d:Mm.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Id,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:j,children:k()})})}var R7=typeof process<"u"?!1:!(typeof import.meta<"u");function B7({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=R7}){if(!c)return null;const[u,d]=_.useState([]),[h,p]=_.useState(!1),y=i==="inline",g=_.useRef(null),[b,v]=_.useState(null),[C,k]=_.useState(t),j=_.useRef(null),M=_.useRef(!1),T=_.useRef(null),L=_.useRef(!1);_.useEffect(()=>(p(!0),d(sn.getPanels()),sn.subscribeGlobal(()=>{d(sn.getPanels())})),[]),_.useEffect(()=>{if(!g.current||y)return;const Q=new MutationObserver(()=>{var ae;const me=(ae=g.current)==null?void 0:ae.querySelector(".dialkit-panel-inner");if(!me)return;if(me.getAttribute("data-collapsed")==="true")j.current&&v(j.current);else{if(b){j.current=b;const we=b.x+21,He=window.innerWidth/2;k(we<He?"top-left":"top-right")}else k(t);v(null)}});return Q.observe(g.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>Q.disconnect()},[y,b,t]);const O=_.useCallback(Q=>{var ae;const me=(ae=g.current)==null?void 0:ae.querySelector(".dialkit-panel-inner");if(!me||me.getAttribute("data-collapsed")!=="true")return;const se=g.current.getBoundingClientRect();T.current={pointerX:Q.clientX,pointerY:Q.clientY,elX:se.left,elY:se.top},L.current=!1,M.current=!0,Q.target.setPointerCapture(Q.pointerId)},[]),A=_.useCallback(Q=>{if(!M.current||!T.current)return;const me=Q.clientX-T.current.pointerX,se=Q.clientY-T.current.pointerY;!L.current&&Math.abs(me)+Math.abs(se)<4||(L.current=!0,v({x:T.current.elX+me,y:T.current.elY+se}))},[]),F=_.useCallback(Q=>{var me;if(M.current&&(M.current=!1,T.current=null,L.current)){Q.stopPropagation();const se=(me=g.current)==null?void 0:me.querySelector(".dialkit-panel-inner");if(se){const ae=we=>{we.stopPropagation()};se.addEventListener("click",ae,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const U=b?{top:b.y,left:b.x,right:"auto",bottom:"auto"}:void 0,W=l.jsx(c7,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:g,className:"dialkit-panel","data-position":y||b?void 0:C,"data-mode":i,style:U,onPointerDown:y?void 0:O,onPointerMove:y?void 0:A,onPointerUp:y?void 0:F,children:u.map(Q=>l.jsx(N7,{panel:Q,defaultOpen:y||n,inline:y},Q.id))})})});return y?W:wl.createPortal(W,document.body)}const L7=()=>(QM("Git Visualizer",{preview:[1,0,1]}),null),Lx="git-visualizer.chrome-ui-hidden",O7=({children:t})=>{const[n,i]=_.useState(!1);return _.useEffect(()=>{i(window.localStorage.getItem(Lx)==="true")},[]),_.useEffect(()=>{const a=c=>{(c.ctrlKey||c.metaKey)&&c.key.toLowerCase()==="d"&&!c.shiftKey&&!c.altKey&&(c.preventDefault(),i(u=>{const d=!u;return window.localStorage.setItem(Lx,String(d)),d}))};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[]),l.jsxs(l.Fragment,{children:[t,l.jsx(L7,{}),!n&&l.jsxs(l.Fragment,{children:[l.jsx(B7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(GM,{})]})]})};document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});Hv.createRoot(document.getElementById("root")).render(l.jsx(O7,{children:l.jsx(Dk,{})}));
